---
about_this_resource_text: >-
  <p><strong>Description:</strong> A damped forced equation has a sinusoidal
  solution with exponential decay. The damping ratio provides insight into the
  null solutions.</p> <p>Related section in <a
  href="http://www-math.mit.edu/~gs/dela/">textbook</a>: 2.4b</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: SMQPt7t0bHk
    parent_uid: 89b77c57bbc7cab6051362d646093741
    title: Video-YouTube-Stream
    type: Video
    uid: 881710af8fe0d51dd4814e0fcaaa299d
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/SMQPt7t0bHk/default.jpg'
    parent_uid: 89b77c57bbc7cab6051362d646093741
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 5897deedbc1b2562cc11ee213d015f26
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: SMQPt7t0bHk
    parent_uid: 89b77c57bbc7cab6051362d646093741
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: d90fe1f56f555e45a959509bf279e6ca
  - id: SMQPt7t0bHk.srt
    parent_uid: 89b77c57bbc7cab6051362d646093741
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/second-order-equations/second-order-equations-with-damping/SMQPt7t0bHk.srt
    title: 3play caption file
    type: null
    uid: 0eb791274c1191c45422ca33e11a34b7
  - id: SMQPt7t0bHk.pdf
    parent_uid: 89b77c57bbc7cab6051362d646093741
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/second-order-equations/second-order-equations-with-damping/SMQPt7t0bHk.pdf
    title: 3play pdf file
    type: null
    uid: 67c2908c33a58227d9afafd6f3b17d10
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 89b77c57bbc7cab6051362d646093741
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 5734d81682c6bd4552a526817f6ec74a
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 89b77c57bbc7cab6051362d646093741
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 260ac7a24cff2583931b011a416db2b0
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 89b77c57bbc7cab6051362d646093741
    title: Video-iTunes U-MP4
    type: Video
    uid: 7dca1dda7aeb552159fd7a1c2d4befc7
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_2_4b_SecondOrderDamping_300k.mp4
    parent_uid: 89b77c57bbc7cab6051362d646093741
    title: Video-Internet Archive-MP4
    type: Video
    uid: ce1679980e1519602ce29d3b65e9b721
inline_embed_id: 6913741secondorderequationswithdamping2241791
order_index: 188
parent_uid: 6038bc5002ab0da0b5f15d8b8de5fc0a
related_resources_text: ''
short_url: second-order-equations-with-damping
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/second-order-equations/second-order-equations-with-damping
title: Second Order Equations with Damping
transcript: >-
  <p><span m='680'>GILBERT STRANG: I'm</span> <span m='870'>coming</span> <span
  m='1220'>back</span> <span m='1690'>to</span> <span m='1890'>the</span> <span
  m='2440'>number</span> <span m='2790'>one</span> <span
  m='3070'>example,</span> <span m='4050'>but</span> <span m='4260'>not</span>
  <span m='4530'>the</span> <span m='4640'>easiest</span> <span
  m='5210'>example,</span> <span m='6350'>of</span> <span m='6510'>a</span>
  <span m='6830'>second</span> <span m='7250'>order</span> <span
  m='7660'>equation</span> <span m='9080'>with</span> <span m='10110'>an</span>
  <span m='10530'>oscillating</span> <span m='12770'>forcing</span> <span
  m='13610'>term,</span> <span m='14090'>cosine</span> <span
  m='14680'>omega</span> <span m='15090'>t.</span> <span m='17800'>We</span>
  <span m='17980'>have</span> <span m='18230'>to</span> <span
  m='18730'>know</span> <span m='19020'>the</span> <span m='19220'>answer</span>
  <span m='19560'>to</span> <span m='19660'>this</span> <span
  m='19930'>problem.</span> <span m='21290'>And</span> <span
  m='22420'>it's</span> <span m='22690'>a</span> <span m='22790'>little</span>
  <span m='23050'>messy,</span> <span m='23510'>but</span> <span
  m='23750'>the</span> <span m='23860'>method</span> <span m='24340'>is</span>
  <span m='24570'>not</span> <span m='24930'>messy.</span> <span
  m='25350'>The</span> <span m='25470'>method</span> <span m='25920'>is</span>
  <span m='26740'>straightforward.</span> </p><p><span m='28410'>So</span> <span
  m='30070'>let</span> <span m='30250'>me</span> <span m='30390'>begin</span>
  <span m='31730'>by</span> <span m='31940'>looking</span> <span
  m='32460'>for</span> <span m='32740'>the</span> <span
  m='33410'>rectangular</span> <span m='34330'>form.</span> <span
  m='34940'>I</span> <span m='35090'>call</span> <span m='35420'>this</span>
  <span m='35640'>the</span> <span m='35770'>rectangular</span> <span
  m='36480'>form.</span> <span m='36840'>It</span> <span
  m='36970'>separates</span> <span m='37750'>the</span> <span
  m='38840'>cosine</span> <span m='39620'>with</span> <span m='39820'>its</span>
  <span m='40060'>amplitude</span> <span m='40920'>and</span> <span
  m='41090'>the</span> <span m='41410'>sine</span> <span m='41730'>with</span>
  <span m='41910'>its</span> <span m='42130'>amplitude</span> <span
  m='42840'>into</span> <span m='43130'>two</span> <span
  m='43510'>separate</span> <span m='44040'>pieces.</span> <span
  m='45920'>So</span> <span m='46580'>if</span> <span m='46770'>I'm</span> <span
  m='46940'>looking</span> <span m='47370'>for</span> <span
  m='47540'>that</span> <span m='47860'>solution,</span> <span
  m='48950'>and</span> <span m='49290'>m</span> <span m='49670'>and</span> <span
  m='49950'>n</span> <span m='50330'>are</span> <span m='50450'>the</span> <span
  m='50600'>numbers</span> <span m='51070'>I</span> <span m='51180'>want</span>
  <span m='51420'>to</span> <span m='51480'>find,</span> <span
  m='52860'>how</span> <span m='53070'>do</span> <span m='53230'>I</span> <span
  m='53380'>proceed?</span> </p><p><span m='54770'>It's</span> <span
  m='55020'>a</span> <span m='55120'>case</span> <span m='55950'>of</span> <span
  m='58630'>undetermined</span> <span m='59550'>coefficients,</span> <span
  m='60640'>M</span> <span m='60880'>and</span> <span m='60990'>N.</span> <span
  m='62350'>And</span> <span m='62590'>the</span> <span m='62690'>way</span>
  <span m='62910'>to</span> <span m='63070'>determine</span> <span
  m='63670'>them</span> <span m='63900'>is</span> <span
  m='64780'>substitute</span> <span m='65670'>this</span> <span
  m='67140'>into</span> <span m='67540'>the</span> <span
  m='67690'>equation</span> <span m='69430'>and</span> <span
  m='72060'>match</span> <span m='72700'>the</span> <span
  m='72880'>cosine</span> <span m='73480'>term</span> <span m='74250'>and</span>
  <span m='74500'>find</span> <span m='74870'>M</span> <span
  m='75090'>and</span> <span m='75170'>N.</span> <span m='76090'>And</span>
  <span m='76230'>the</span> <span m='76320'>way</span> <span
  m='76500'>we</span> <span m='76720'>find</span> <span m='77010'>M</span> <span
  m='77220'>and</span> <span m='77290'>N,</span> <span m='77550'>we</span> <span
  m='77700'>need</span> <span m='77980'>two</span> <span
  m='78190'>equations</span> <span m='78830'>for</span> <span
  m='80650'>two</span> <span m='81170'>quantities,</span> <span m='81800'>M
  and</span> <span m='82115'>N.</span> </p><p><span m='82990'>And</span> <span
  m='84850'>imagine</span> <span m='85430'>this</span> <span
  m='86050'>substituted</span> <span m='87050'>in</span> <span
  m='87210'>there.</span> <span m='88010'>I'll</span> <span m='88260'>get</span>
  <span m='88590'>some</span> <span m='88830'>cosines.</span> <span
  m='90280'>So</span> <span m='90370'>the</span> <span m='90510'>cosines</span>
  <span m='91150'>on</span> <span m='91290'>one</span> <span
  m='91550'>side</span> <span m='91900'>will</span> <span m='92040'>match</span>
  <span m='92420'>the</span> <span m='92560'>cosine</span> <span
  m='93130'>on</span> <span m='93240'>the</span> <span m='93380'>other</span>
  <span m='93600'>side.</span> <span m='94440'>And</span> <span
  m='94620'>also</span> <span m='95000'>from</span> <span m='95230'>the</span>
  <span m='95380'>derivative,</span> <span m='96650'>I'll</span> <span
  m='96910'>get</span> <span m='97350'>some</span> <span m='97580'>sines</span>
  <span m='98780'>and</span> <span m='98990'>they</span> <span
  m='99230'>should</span> <span m='99510'>match</span> <span m='99880'>0</span>
  <span m='100410'>because</span> <span m='100810'>I</span> <span
  m='100910'>have</span> <span m='101100'>no</span> <span m='101440'>sine</span>
  <span m='102390'>omega</span> <span m='102850'>t</span> <span
  m='103150'>on</span> <span m='103260'>the</span> <span m='103370'>right</span>
  <span m='103590'>hand</span> <span m='103850'>side.</span> </p><p><span
  m='104180'>So I</span> <span m='104270'>have</span> <span
  m='104450'>two</span> <span m='104660'>equations,</span> <span
  m='105680'>matching</span> <span m='106150'>the</span> <span
  m='106280'>sines,</span> <span m='106830'>matching</span> <span
  m='107250'>the</span> <span m='107370'>cosines.</span> <span
  m='108200'>And</span> <span m='108850'>I</span> <span m='108990'>solve</span>
  <span m='109270'>those.</span> <span m='109985'>Two</span> <span
  m='110270'>equations,</span> <span m='110920'>two</span> <span
  m='111130'>unknowns.</span> <span m='111990'>And</span> <span
  m='112270'>I</span> <span m='112340'>just</span> <span m='112640'>write</span>
  <span m='112890'>the</span> <span m='113000'>answer</span> <span
  m='113350'>down.</span> </p><p><span m='114020'>M</span> <span
  m='114570'>involves</span> <span m='115270'>a</span> <span m='115420'>C</span>
  <span m='116000'>minus</span> <span m='116630'>omega</span> <span
  m='117100'>squared.</span> <span m='117530'>M</span> <span
  m='117770'>is</span> <span m='117970'>coming</span> <span
  m='118360'>from</span> <span m='118600'>the</span> <span
  m='119010'>cosines.</span> <span m='120380'>And</span> <span
  m='120450'>we</span> <span m='120580'>get</span> <span
  m='120830'>cosines</span> <span m='121580'>from</span> <span
  m='122440'>that</span> <span m='122830'>term</span> <span
  m='123725'>and</span> <span m='124050'>that</span> <span
  m='124460'>term.</span> <span m='125330'>Divided</span> <span
  m='125950'>by</span> <span m='127610'>some</span> <span
  m='127940'>number,</span> <span m='128259'>D,</span> <span
  m='128680'>that</span> <span m='128850'>I'll</span> <span
  m='129030'>write</span> <span m='129300'>down.</span> </p><p><span
  m='130229'>And</span> <span m='130479'>N</span> <span m='131910'>is</span>
  <span m='132170'>just</span> <span m='132560'>B</span> <span
  m='133720'>omega</span> <span m='134440'>divided</span> <span
  m='134980'>by</span> <span m='135130'>that</span> <span m='135380'>same</span>
  <span m='135780'>D.</span> <span m='136726'>And now</span> <span
  m='137200'>I'll</span> <span m='137370'>write</span> <span
  m='137680'>down</span> <span m='137970'>D.</span> <span
  m='138960'>That's</span> <span m='139280'>C</span> <span
  m='140140'>minus</span> <span m='140750'>A</span> <span
  m='141350'>omega</span> <span m='141960'>squared</span> <span
  m='142670'>squared</span> <span m='143740'>plus</span> <span
  m='144490'>B</span> <span m='144760'>omega</span> <span
  m='146260'>squared.</span> <span m='149920'>This</span> <span
  m='150090'>is</span> <span m='150230'>what</span> <span
  m='150450'>comes</span> <span m='150760'>out</span> <span
  m='152970'>from</span> <span m='153210'>the</span> <span m='153340'>two</span>
  <span m='153590'>equations</span> <span m='154680'>for</span> <span
  m='154880'>M</span> <span m='155070'>and</span> <span m='155190'>N.</span>
  </p><p><span m='156110'>I</span> <span m='156230'>just</span> <span
  m='156490'>solve</span> <span m='156910'>those</span> <span
  m='157150'>equations.</span> <span m='158440'>This</span> <span
  m='158740'>D</span> <span m='159280'>here</span> <span m='159650'>is</span>
  <span m='159880'>the</span> <span m='160520'>two</span> <span
  m='160710'>by</span> <span m='160960'>two</span> <span
  m='161330'>determinant</span> <span m='162160'>if</span> <span
  m='162380'>we</span> <span m='162580'>think</span> <span
  m='162820'>about</span> <span m='163140'>the</span> <span
  m='163260'>linear</span> <span m='163620'>algebra</span> <span
  m='164240'>behind</span> <span m='164840'>two</span> <span
  m='165060'>equations.</span> <span m='166300'>And</span> <span
  m='166760'>that's</span> <span m='167490'>what</span> <span
  m='167850'>it</span> <span m='167990'>is.</span> <span m='168560'>And</span>
  <span m='169180'>so</span> <span m='169380'>the</span> <span
  m='169550'>answer</span> <span m='170000'>now</span> <span
  m='170380'>is</span> <span m='170540'>in</span> <span m='170770'>terms</span>
  <span m='171260'>of</span> <span m='171410'>A,</span> <span
  m='172570'>C,</span> <span m='173530'>B,</span> <span m='174490'>and</span>
  <span m='175270'>D,</span> <span m='175730'>which</span> <span
  m='176060'>is</span> <span m='176270'>a</span> <span m='176810'>mixture</span>
  <span m='177330'>of</span> <span m='177680'>all</span> <span
  m='177930'>of</span> <span m='178110'>A,</span> <span m='178290'>B,</span>
  <span m='178530'>and</span> <span m='178660'>C.</span> <span
  m='179610'>That's</span> <span m='179890'>the</span> <span
  m='180020'>solution.</span> </p><p><span m='181660'>Only</span> <span
  m='183290'>I</span> <span m='183470'>always</span> <span
  m='183790'>want</span> <span m='184020'>to</span> <span m='184080'>show</span>
  <span m='184350'>you</span> <span m='184540'>a</span> <span
  m='184650'>different</span> <span m='185210'>form</span> <span
  m='185540'>of</span> <span m='185660'>the</span> <span
  m='185780'>solution.</span> <span m='187020'>And</span> <span
  m='187100'>in</span> <span m='187190'>this</span> <span
  m='187430'>case,</span> <span m='187700'>a</span> <span
  m='187780'>better</span> <span m='188200'>form.</span> <span
  m='189060'>Because</span> <span m='189530'>the</span> <span
  m='189650'>most</span> <span m='190080'>important</span> <span
  m='190650'>physical</span> <span m='191170'>quantity</span> <span
  m='192460'>is</span> <span m='193220'>the</span> <span
  m='193380'>magnitude.</span> <span m='194170'>How</span> <span
  m='194510'>large</span> <span m='195130'>does</span> <span m='195390'>y</span>
  <span m='195780'>get?</span> <span m='196720'>What</span> <span
  m='196900'>is</span> <span m='197060'>the</span> <span
  m='197240'>amplitude</span> <span m='197980'>of</span> <span
  m='198090'>this?</span> </p><p><span m='198920'>This</span> <span
  m='199170'>is</span> <span m='199340'>a</span> <span
  m='199480'>sinusoid.</span> <span m='201270'>And we</span> <span
  m='201500'>remember</span> <span m='202220'>that</span> <span
  m='202420'>every</span> <span m='202810'>sinusoid</span> <span
  m='204640'>can</span> <span m='204900'>be</span> <span
  m='205110'>written</span> <span m='205720'>in</span> <span m='206510'>a</span>
  <span m='206630'>polar</span> <span m='208170'>form.</span> <span
  m='211830'>Says</span> <span m='212140'>that</span> <span m='212310'>y</span>
  <span m='212630'>of</span> <span m='212800'>t</span> <span
  m='214220'>is</span> <span m='214740'>some</span> <span
  m='215300'>amplitude</span> <span m='215720'>of</span> <span
  m='216140'>G,</span> <span m='216640'>the</span> <span m='216790'>gain,</span>
  <span m='219810'>times</span> <span m='220240'>a</span> <span
  m='220360'>cosine</span> <span m='222044'>of</span> <span
  m='222482'>omega</span> <span m='222920'>t</span> <span m='224050'>with</span>
  <span m='224340'>a</span> <span m='225400'>shift,</span> <span
  m='225940'>with</span> <span m='226160'>a</span> <span m='226240'>lag,</span>
  <span m='227510'>with</span> <span m='227720'>an</span> <span
  m='227860'>angle</span> <span m='228350'>alpha.</span> <span
  m='229190'>So</span> <span m='229350'>I</span> <span m='229480'>have</span>
  <span m='230010'>two</span> <span m='230150'>numbers</span> <span
  m='230640'>now.</span> </p><p><span m='231300'>That's</span> <span
  m='231710'>the</span> <span m='231810'>gain.</span> <span
  m='232730'>And</span> <span m='232980'>this</span> <span m='233260'>is</span>
  <span m='233520'>the</span> <span m='233720'>phase</span> <span
  m='234740'>shift</span> <span m='236500'>alpha.</span> <span
  m='243550'>And</span> <span m='243630'>that's</span> <span
  m='244600'>an</span> <span m='244770'>attractive</span> <span
  m='245400'>form</span> <span m='246020'>because</span> <span
  m='246370'>it</span> <span m='246480'>has</span> <span m='246680'>only</span>
  <span m='246940'>one</span> <span m='247280'>term.</span> <span
  m='248480'>The</span> <span m='248640'>two</span> <span
  m='250680'>numbers,</span> <span m='251290'>G</span> <span
  m='251690'>and</span> <span m='251840'>alpha,</span> <span
  m='252300'>get</span> <span m='253150'>put</span> <span m='253380'>into</span>
  <span m='253890'>a</span> <span m='254020'>single</span> <span
  m='254500'>term</span> <span m='255090'>where</span> <span
  m='255480'>we</span> <span m='255620'>can</span> <span m='255820'>see</span>
  <span m='256420'>the</span> <span m='256570'>magnitude</span> <span
  m='257320'>of</span> <span m='257490'>the</span> <span
  m='257880'>oscillation.</span> </p><p><span m='260110'>And</span> <span
  m='260350'>what</span> <span m='261290'>does</span> <span
  m='261470'>that</span> <span m='261730'>come</span> <span
  m='261940'>out</span> <span m='262140'>to</span> <span m='262250'>be?</span>
  <span m='262560'>I</span> <span m='262660'>won't</span> <span
  m='263490'>go</span> <span m='263730'>through</span> <span
  m='264080'>all</span> <span m='264460'>the</span> <span
  m='264860'>steps.</span> <span m='265480'>I'll</span> <span
  m='265660'>just</span> <span m='266020'>write</span> <span
  m='266330'>down</span> <span m='266620'>what</span> <span m='266880'>G</span>
  <span m='267220'>turns</span> <span m='267570'>out</span> <span
  m='267790'>to</span> <span m='267870'>be.</span> <span m='268570'>G</span>
  <span m='268975'>turns</span> <span m='269380'>out</span> <span
  m='269630'>to</span> <span m='269760'>be--</span> <span m='271120'>it</span>
  <span m='271850'>comes</span> <span m='272170'>from</span> <span
  m='272400'>there--</span> <span m='272820'>and</span> <span
  m='273020'>it's</span> <span m='273170'>1</span> <span m='273670'>over</span>
  <span m='274060'>the</span> <span m='274250'>square</span> <span
  m='274730'>root</span> <span m='274820'>of</span> <span m='274960'>D.</span>
  <span m='277810'>Well,</span> <span m='278320'>G</span> <span
  m='278630'>is</span> <span m='279440'>the</span> <span
  m='279610'>square</span> <span m='280150'>root</span> <span
  m='280240'>of</span> <span m='280410'>M</span> <span m='280650'>squared</span>
  <span m='281110'>plus</span> <span m='281380'>N</span> <span
  m='281600'>squared.</span> </p><p><span m='284930'>The</span> <span
  m='285030'>square</span> <span m='285470'>root</span> <span
  m='285530'>of</span> <span m='285640'>M</span> <span m='285840'>squared</span>
  <span m='286240'>plus</span> <span m='286480'>N</span> <span
  m='286680'>squared.</span> <span m='286960'>And</span> <span
  m='287240'>if</span> <span m='287390'>I</span> <span m='288010'>put</span>
  <span m='288560'>M</span> <span m='288880'>squared</span> <span
  m='289330'>and</span> <span m='289440'>N</span> <span
  m='289670'>squared,</span> <span m='290160'>then</span> <span
  m='290410'>I</span> <span m='290560'>have</span> <span m='292310'>D</span>
  <span m='292740'>over</span> <span m='293070'>D</span> <span
  m='293360'>squared.</span> <span m='294360'>I</span> <span
  m='294480'>get</span> <span m='294760'>that</span> <span
  m='294990'>answer.</span> <span m='295660'>That's</span> <span
  m='296030'>the</span> <span m='296120'>gain.</span> </p><p><span
  m='297150'>Let</span> <span m='297320'>me</span> <span m='297450'>write</span>
  <span m='297720'>that</span> <span m='297920'>word,</span> <span
  m='298300'>gain,</span> <span m='298700'>again.</span> <span
  m='299300'>Because</span> <span m='303110'>you</span> <span
  m='303300'>got</span> <span m='303550'>it</span> <span
  m='303720'>there.</span> <span m='304620'>Here</span> <span m='304920'>it
  is</span> <span m='305150'>again.</span> <span m='306060'>And</span> <span
  m='308490'>as</span> <span m='308740'>always,</span> <span
  m='309180'>the</span> <span m='309330'>tangent</span> <span
  m='309930'>of</span> <span m='310060'>alpha</span> <span m='310680'>is</span>
  <span m='311350'>the</span> <span m='311580'>N</span> <span
  m='312240'>over</span> <span m='312650'>the</span> <span m='312800'>M,</span>
  <span m='315570'>which</span> <span m='315830'>is</span> <span
  m='316030'>just</span> <span m='316680'>B</span> <span m='316900'>omega</span>
  <span m='319310'>over</span> <span m='320580'>C</span> <span
  m='320910'>minus</span> <span m='322190'>A</span> <span
  m='322590'>omega</span> <span m='322840'>squared.</span> <span
  m='324860'>I</span> <span m='325020'>like</span> <span m='325300'>that</span>
  <span m='325590'>polar</span> <span m='325930'>form.</span> </p><p><span
  m='329140'>And</span> <span m='329480'>I</span> <span m='329520'>feel</span>
  <span m='329780'>I</span> <span m='329870'>should</span> <span
  m='330100'>just</span> <span m='330490'>do</span> <span m='330800'>an</span>
  <span m='330900'>example.</span> <span m='331440'>I</span> <span
  m='331520'>didn't</span> <span m='331860'>do</span> <span
  m='332130'>any</span> <span m='332390'>of</span> <span m='332480'>the</span>
  <span m='332620'>algebra</span> <span m='333110'>in</span> <span
  m='333210'>this</span> <span m='333500'>video.</span> <span
  m='335300'>But</span> <span m='335560'>you</span> <span m='335690'>know</span>
  <span m='336900'>where</span> <span m='337100'>the</span> <span
  m='337250'>algebra</span> <span m='337670'>came</span> <span
  m='338000'>from.</span> <span m='338770'>It</span> <span
  m='338900'>came</span> <span m='339240'>from</span> <span
  m='339510'>substituting</span> <span m='341640'>the</span> <span
  m='342020'>form</span> <span m='342500'>we</span> <span
  m='342670'>expect</span> <span m='343240'>for</span> <span
  m='343340'>the</span> <span m='343490'>solution.</span> <span
  m='344590'>And</span> <span m='344800'>of</span> <span
  m='344940'>course,</span> <span m='346340'>that</span> <span
  m='346690'>form</span> <span m='346960'>that</span> <span m='347110'>we</span>
  <span m='347300'>expect</span> <span m='347850'>is</span> <span
  m='348140'>the</span> <span m='348220'>form</span> <span m='348530'>we</span>
  <span m='348680'>get</span> <span m='349360'>provided</span> <span
  m='350330'>omega,</span> <span m='351090'>the</span> <span
  m='351290'>driving</span> <span m='351960'>frequency,</span> <span
  m='353100'>is</span> <span m='353430'>different</span> <span
  m='353980'>from</span> <span m='354810'>omega</span> <span
  m='355350'>N.</span> </p><p><span m='355740'>Well,</span> <span
  m='356080'>no.</span> <span m='356390'>I</span> <span m='356530'>guess</span>
  <span m='356760'>we're</span> <span m='356960'>all</span> <span
  m='357170'>right</span> <span m='357430'>even</span> <span
  m='357730'>if</span> <span m='357870'>omega</span> <span m='358300'>is</span>
  <span m='358460'>omega</span> <span m='358890'>N,</span> <span
  m='359170'>because</span> <span m='359630'>we</span> <span
  m='359830'>have</span> <span m='361090'>a</span> <span
  m='361560'>damping</span> <span m='361900'>term.</span> <span
  m='363850'>So</span> <span m='364060'>that's</span> <span
  m='364390'>the</span> <span m='364550'>answer.</span> </p><p><span
  m='367020'>So</span> <span m='367280'>an</span> <span
  m='367380'>example.</span> <span m='368400'>Why</span> <span
  m='368620'>not</span> <span m='369070'>an</span> <span
  m='369230'>example?</span> <span m='370160'>y</span> <span
  m='370530'>double</span> <span m='370890'>prime</span> <span
  m='371710'>plus</span> <span m='372110'>y</span> <span m='372580'>prime</span>
  <span m='373520'>plus</span> <span m='374000'>2y</span> <span
  m='375640'>equals</span> <span m='376280'>cosine</span> <span
  m='376840'>of</span> <span m='376970'>t.</span> <span m='381020'>That's</span>
  <span m='381930'>a</span> <span m='382040'>simple</span> <span
  m='382450'>example.</span> <span m='383240'>I</span> <span
  m='383340'>took</span> <span m='383940'>omega</span> <span
  m='384540'>to</span> <span m='384670'>be</span> <span m='384880'>1,</span>
  <span m='385430'>you</span> <span m='385590'>see.</span> <span
  m='385880'>And</span> <span m='386030'>there</span> <span m='386340'>is</span>
  <span m='386590'>omega.</span> <span m='387680'>And</span> <span
  m='387990'>then</span> <span m='388320'>A</span> <span m='388610'>is</span>
  <span m='388800'>1,</span> <span m='389320'>B</span> <span
  m='389630'>is</span> <span m='389810'>1,</span> <span m='390430'>C</span>
  <span m='390790'>is</span> <span m='391050'>2.</span> </p><p><span
  m='393500'>We</span> <span m='393690'>can</span> <span
  m='393880'>evaluate</span> <span m='394470'>everything.</span> <span
  m='396600'>In</span> <span m='396730'>fact,</span> <span m='397390'>I</span>
  <span m='397500'>think</span> <span m='398612'>M</span> <span
  m='399050'>and</span> <span m='399170'>N</span> <span m='399470'>are</span>
  <span m='399660'>1/2.</span> <span m='403870'>D,</span> <span
  m='404890'>by</span> <span m='405090'>the</span> <span m='405230'>way,</span>
  <span m='406450'>will</span> <span m='406640'>be</span> <span
  m='406990'>1</span> <span m='407350'>squared</span> <span
  m='407820'>plus</span> <span m='408030'>1</span> <span
  m='408350'>squared.</span> <span m='408790'>That's</span> <span
  m='409110'>2</span> <span m='409970'>square</span> <span
  m='410410'>root.</span> <span m='414290'>Sorry.</span> <span
  m='414750'>D</span> <span m='414820'>will</span> <span m='414960'>be</span>
  <span m='415160'>2.</span> <span m='415970'>1</span> <span
  m='416200'>squared</span> <span m='416550'>plus</span> <span
  m='416760'>1</span> <span m='417000'>squared.</span> </p><p><span
  m='420340'>So</span> <span m='420700'>what</span> <span m='420930'>do</span>
  <span m='421050'>I</span> <span m='421160'>know?</span> <span
  m='421450'>Do</span> <span m='421630'>I</span> <span m='421720'>know</span>
  <span m='422000'>the</span> <span m='422930'>rectangular</span> <span
  m='423620'>form?</span> <span m='424000'>Yes.</span> <span
  m='425910'>Rectangular</span> <span m='426590'>form</span> <span
  m='426940'>is</span> <span m='427070'>1/2.</span> <span m='428800'>1/2</span>
  <span m='429380'>for</span> <span m='429540'>both</span> <span
  m='429910'>the</span> <span m='430070'>cosine</span> <span
  m='430820'>and</span> <span m='430970'>the</span> <span
  m='431100'>sine.</span> <span m='432060'>1/2</span> <span m='432720'>of</span>
  <span m='432890'>cosine</span> <span m='433880'>t</span> <span
  m='434330'>plus</span> <span m='435070'>sine</span> <span m='436316'>t.</span>
  <span m='439050'>That's</span> <span m='439220'>the</span> <span
  m='439350'>rectangular</span> <span m='440050'>form.</span> </p><p><span
  m='442230'>Two</span> <span m='442600'>simple</span> <span
  m='443170'>things,</span> <span m='443620'>but</span> <span
  m='443710'>I</span> <span m='443780'>have</span> <span m='443920'>to</span>
  <span m='444050'>add</span> <span m='444370'>them.</span> <span
  m='444550'>And</span> <span m='444730'>in</span> <span m='444850'>my</span>
  <span m='445010'>mind,</span> <span m='445460'>I</span> <span
  m='445520'>don't</span> <span m='446180'>necessarily</span> <span
  m='446930'>see</span> <span m='447250'>how</span> <span m='448060'>the</span>
  <span m='448190'>cosine</span> <span m='449460'>adds</span> <span
  m='449870'>to</span> <span m='450000'>the</span> <span m='450150'>sine.</span>
  <span m='451060'>But</span> <span m='452316'>the</span> <span
  m='454300'>sinusoidal</span> <span m='455390'>identity,</span> <span
  m='456120'>the</span> <span m='456320'>polar</span> <span
  m='456910'>form,</span> <span m='458040'>gives</span> <span
  m='458350'>it</span> <span m='458510'>to</span> <span m='458720'>me.</span>
  <span m='458900'>So</span> <span m='459560'>what</span> <span
  m='459890'>is</span> <span m='460130'>it</span> <span m='460280'>in</span>
  <span m='460450'>polar</span> <span m='460820'>form?</span> </p><p><span
  m='461630'>So</span> <span m='461810'>G,</span> <span m='463720'>the</span>
  <span m='463830'>gain,</span> <span m='465130'>is</span> <span
  m='465360'>going</span> <span m='465570'>to</span> <span m='465630'>be</span>
  <span m='465800'>1</span> <span m='466180'>over</span> <span
  m='466460'>the</span> <span m='466640'>square</span> <span
  m='467080'>root</span> <span m='467350'>of</span> <span m='467500'>2.</span>
  <span m='473620'>At</span> <span m='473820'>the</span> <span
  m='473920'>highest</span> <span m='474390'>point,</span> <span
  m='474930'>the</span> <span m='475090'>cosine</span> <span m='475640'>and
  the</span> <span m='475930'>sine</span> <span m='476390'>are</span> <span
  m='476430'>the</span> <span m='476600'>same.</span> <span
  m='477690'>They're</span> <span m='477860'>both</span> <span
  m='478170'>1</span> <span m='478420'>over</span> <span m='478620'>the</span>
  <span m='478680'>square</span> <span m='479020'>root</span> <span
  m='479130'>of</span> <span m='479250'>2.</span> <span m='479970'>I</span>
  <span m='480070'>have</span> <span m='480210'>two</span> <span
  m='480450'>of</span> <span m='480550'>them.</span> <span m='481170'>So</span>
  <span m='481200'>I</span> <span m='481290'>get</span> <span
  m='481480'>1</span> <span m='481710'>over</span> <span m='481900'>the</span>
  <span m='482060'>square</span> <span m='482270'>root</span> <span
  m='482420'>of</span> <span m='482540'>2</span> <span m='483260'>cosine</span>
  <span m='484740'>of</span> <span m='485320'>t</span> <span
  m='486050'>minus</span> <span m='487430'>pi</span> <span
  m='487680'>over</span> <span m='487990'>4</span> <span m='488560'>is</span>
  <span m='488750'>the</span> <span m='489470'>angle,</span> <span
  m='490100'>the</span> <span m='490220'>phase</span> <span
  m='490610'>lag.</span> </p><p><span m='491010'>When</span> <span
  m='491220'>I</span> <span m='491350'>add</span> <span m='491770'>the</span>
  <span m='491900'>cosine</span> <span m='492900'>and</span> <span
  m='493090'>the</span> <span m='493190'>sine,</span> <span m='494070'>I</span>
  <span m='494170'>get</span> <span m='494380'>a</span> <span
  m='494460'>sinusoid</span> <span m='495260'>that's</span> <span
  m='495710'>sitting</span> <span m='496090'>over</span> <span
  m='496500'>pi</span> <span m='496830'>over</span> <span m='497130'>4,</span>
  <span m='497566'>45</span> <span m='498440'>degrees.</span> <span
  m='499450'>So</span> <span m='500140'>those</span> <span m='500920'>are</span>
  <span m='500990'>the</span> <span m='501160'>two</span> <span
  m='501370'>forms.</span> <span m='502640'>So</span> <span m='502890'>in</span>
  <span m='503030'>a</span> <span m='503150'>nice</span> <span
  m='503480'>example,</span> <span m='504840'>we</span> <span
  m='504880'>certainly</span> <span m='505270'>got</span> <span
  m='505460'>a</span> <span m='505570'>nice</span> <span
  m='505900'>answer.</span> <span m='507450'>We</span> <span
  m='507540'>certainly</span> <span m='507970'>did.</span> <span
  m='508530'>Yes.</span> </p><p><span m='509990'>So</span> <span
  m='510290'>that</span> <span m='510720'>is</span> <span
  m='511080'>the--</span> <span m='513690'>worked</span> <span
  m='514039'>out,</span> <span m='515520'>more</span> <span m='515770'>or</span>
  <span m='515820'>less</span> <span m='516100'>worked</span> <span
  m='516480'>out,</span> <span m='518289'>in</span> <span
  m='518490'>principle,</span> <span m='519090'>worked</span> <span
  m='519419'>out--</span> <span m='520100'>is</span> <span m='520450'>the</span>
  <span m='520600'>solution</span> <span m='521340'>to</span> <span
  m='522159'>what</span> <span m='522659'>I</span> <span m='522830'>think</span>
  <span m='523130'>of</span> <span m='523690'>as</span> <span
  m='524094'>the</span> <span m='525810'>most</span> <span
  m='526190'>important</span> <span m='526650'>application</span> <span
  m='527550'>when</span> <span m='527870'>the</span> <span
  m='528380'>forcing</span> <span m='528950'>term</span> <span
  m='529750'>is</span> <span m='530490'>a</span> <span m='530630'>cosine.</span>
  <span m='532750'>So</span> <span m='533270'>it</span> <span
  m='533440'>gives</span> <span m='533760'>oscillating</span> <span
  m='534510'>motion.</span> <span m='535490'>It</span> <span
  m='535690'>gives</span> <span m='535970'>a</span> <span
  m='536070'>phase</span> <span m='536400'>shift.</span> <span
  m='537350'>And</span> <span m='538200'>it</span> <span m='538400'>gives</span>
  <span m='539450'>these</span> <span m='539790'>formulas.</span> </p><p><span
  m='540740'>The</span> <span m='540940'>only</span> <span
  m='541350'>thing</span> <span m='541600'>I</span> <span
  m='541690'>would</span> <span m='541940'>add</span> <span m='543430'>is</span>
  <span m='544120'>that</span> <span m='546130'>I</span> <span
  m='546230'>need</span> <span m='546490'>to</span> <span
  m='546620'>comment</span> <span m='547220'>on</span> <span
  m='547990'>better</span> <span m='548340'>notation.</span> <span
  m='549650'>So</span> <span m='549850'>I</span> <span m='550050'>have</span>
  <span m='550290'>used</span> <span m='550990'>in</span> <span
  m='551150'>these</span> <span m='551390'>formulas</span> <span
  m='553000'>A,</span> <span m='553480'>B,</span> <span m='553800'>and</span>
  <span m='553970'>C.</span> <span m='555870'>But</span> <span
  m='556180'>those</span> <span m='556510'>have</span> <span
  m='558340'>meaning</span> <span m='559180'>as</span> <span
  m='560150'>mass,</span> <span m='561990'>damping</span> <span
  m='562460'>constant,</span> <span m='563630'>spring</span> <span
  m='564070'>constant.</span> <span m='566310'>M,</span> <span
  m='568070'>B,</span> <span m='569130'>and</span> <span m='570090'>K.</span>
  </p><p><span m='571330'>And</span> <span m='575290'>it's</span> <span
  m='575490'>combinations</span> <span m='576270'>of</span> <span
  m='576380'>those</span> <span m='576690'>that</span> <span
  m='576840'>come</span> <span m='577100'>in.</span> <span m='577330'>So</span>
  <span m='577550'>let</span> <span m='578120'>me</span> <span
  m='578290'>just</span> <span m='579300'>take</span> <span
  m='579590'>this</span> <span m='580180'>moment</span> <span
  m='581390'>to</span> <span m='581690'>say</span> <span
  m='583980'>better</span> <span m='584460'>notation.</span> <span
  m='586950'>Or</span> <span m='589360'>maybe</span> <span m='589570'>I</span>
  <span m='589650'>should</span> <span m='589880'>say</span> <span
  m='590180'>engineering</span> <span m='590950'>notation</span> <span
  m='592130'>instead</span> <span m='592740'>of</span> <span
  m='596420'>A,</span> <span m='597342'>B,</span> <span m='598264'>C,</span>
  <span m='600090'>which</span> <span m='600420'>are</span> <span
  m='600760'>mass,</span> <span m='602080'>damping,</span> <span
  m='603280'>spring</span> <span m='603700'>constant.</span> </p><p><span
  m='604550'>Well,</span> <span m='604970'>that's</span> <span
  m='605250'>already</span> <span m='605620'>better</span> <span
  m='606470'>to</span> <span m='606590'>use</span> <span
  m='606860'>letters</span> <span m='607290'>that</span> <span
  m='607410'>have</span> <span m='607660'>a</span> <span
  m='607950'>meaning.</span> <span m='608820'>But</span> <span
  m='609880'>the</span> <span m='610950'>small</span> <span
  m='612400'>but</span> <span m='612660'>very</span> <span
  m='613160'>important</span> <span m='613660'>point</span> <span
  m='614000'>is</span> <span m='614480'>that</span> <span m='616210'>two</span>
  <span m='618000'>combinations</span> <span m='619020'>of</span> <span
  m='620130'>A, B,</span> <span m='620550'>C,</span> <span m='621560'>M, B,
  K</span> <span m='622790'>are</span> <span m='623170'>especially</span> <span
  m='623740'>good.</span> <span m='624480'>One</span> <span m='624840'>is</span>
  <span m='625020'>the</span> <span m='625150'>natural</span> <span
  m='625650'>frequency</span> <span m='626420'>that</span> <span
  m='626580'>we've</span> <span m='626800'>seen</span> <span
  m='627130'>already,</span> <span m='628510'>square</span> <span
  m='628820'>root</span> <span m='628920'>of</span> <span m='629020'>C</span>
  <span m='629250'>over</span> <span m='629580'>A.</span> </p><p><span
  m='632570'>Square</span> <span m='632960'>root</span> <span
  m='633190'>of</span> <span m='634200'>K</span> <span m='634430'>over</span>
  <span m='634680'>M.</span> <span m='637330'>So</span> <span
  m='637500'>that</span> <span m='637750'>gives</span> <span
  m='638010'>us</span> <span m='638220'>one</span> <span
  m='638660'>important</span> <span m='639380'>combination</span> <span
  m='640620'>of</span> <span m='640780'>A</span> <span m='641095'>and C.</span>
  <span m='641560'>And</span> <span m='641780'>the</span> <span
  m='641960'>other</span> <span m='642230'>one</span> <span m='642470'>is</span>
  <span m='642690'>the</span> <span m='643290'>damping</span> <span
  m='643990'>ratio.</span> <span m='651700'>And</span> <span
  m='651920'>it's</span> <span m='652120'>called</span> <span
  m='653030'>zeta.</span> <span m='656150'>And</span> <span
  m='656350'>that</span> <span m='656560'>damping</span> <span
  m='657030'>ratio</span> <span m='657640'>is</span> <span m='658070'>B</span>
  <span m='659420'>over</span> <span m='659890'>the</span> <span
  m='660080'>square</span> <span m='660590'>root</span> <span
  m='660840'>of</span> <span m='660990'>4ac.</span> </p><p><span
  m='662360'>Ha!</span> <span m='663340'>You'll</span> <span
  m='663520'>say,</span> <span m='663700'>where does</span> <span
  m='663970'>that</span> <span m='664250'>come</span> <span
  m='664470'>from?</span> <span m='664730'>Or</span> <span m='664990'>I</span>
  <span m='666180'>can</span> <span m='666390'>use</span> <span
  m='666660'>these</span> <span m='666950'>letters,</span> <span
  m='667400'>B</span> <span m='668000'>over</span> <span m='668400'>the</span>
  <span m='668600'>square</span> <span m='669030'>root</span> <span
  m='669150'>of</span> <span m='669310'>4mk.</span> <span m='674460'>That</span>
  <span m='674760'>damping</span> <span m='675240'>ratio</span> <span
  m='676770'>is,</span> <span m='678190'>so</span> <span m='678380'>to</span>
  <span m='678490'>speak,</span> <span m='680180'>it's</span> <span
  m='680470'>the</span> <span m='680620'>right</span> <span
  m='681420'>dimensionless</span> <span m='682470'>quantity.</span> <span
  m='683800'>The</span> <span m='683960'>dimensions</span> <span
  m='685440'>of</span> <span m='685610'>this</span> <span
  m='685900'>ratio</span> <span m='687350'>are</span> <span
  m='690130'>just</span> <span m='690370'>numbers.</span> </p><p><span
  m='692980'>Those</span> <span m='693400'>two</span> <span
  m='693640'>quantities</span> <span m='694180'>have</span> <span
  m='694370'>the</span> <span m='694520'>same</span> <span
  m='694880'>dimension.</span> <span m='695460'>And</span> <span
  m='695610'>we</span> <span m='695760'>can</span> <span m='695940'>see</span>
  <span m='696240'>that</span> <span m='697080'>because</span> <span
  m='697980'>in</span> <span m='698180'>the</span> <span
  m='698310'>quadratic</span> <span m='698950'>formula</span> <span
  m='699490'>comes--</span> <span m='700890'>you</span> <span
  m='701030'>remember</span> <span m='701340'>that</span> <span
  m='701550'>in</span> <span m='701730'>a</span> <span
  m='701810'>quadratic</span> <span m='702410'>formula</span> <span
  m='702920'>comes</span> <span m='703410'>the</span> <span
  m='703760'>square</span> <span m='704310'>root</span> <span
  m='704380'>of</span> <span m='704490'>b</span> <span m='704730'>squared</span>
  <span m='705290'>minus</span> <span m='705640'>4ac?</span> <span
  m='708830'>Now</span> <span m='709060'>if</span> <span m='709200'>you</span>
  <span m='709350'>see</span> <span m='709550'>a</span> <span
  m='709650'>formula</span> <span m='710170'>that</span> <span
  m='710350'>has</span> <span m='711230'>b</span> <span
  m='711490'>squared</span> <span m='711990'>minus</span> <span
  m='712320'>4ac</span> <span m='712910'>in</span> <span m='713100'>it,</span>
  <span m='715080'>you</span> <span m='715270'>know</span> <span
  m='715850'>that</span> <span m='716190'>these</span> <span
  m='716580'>must</span> <span m='717070'>have</span> <span
  m='718180'>the</span> <span m='718340'>same</span> <span
  m='719430'>units.</span> </p><p><span m='722400'>Otherwise,</span> <span
  m='722930'>subtraction</span> <span m='723830'>would</span> <span
  m='724010'>be</span> <span m='724900'>a</span> <span m='725480'>crime.</span>
  <span m='726790'>So</span> <span m='727460'>they</span> <span
  m='727640'>have</span> <span m='727820'>the</span> <span
  m='727940'>same</span> <span m='728270'>ratio</span> <span
  m='728990'>and</span> <span m='732000'>the</span> <span m='732260'>same</span>
  <span m='732500'>units</span> <span m='732950'>and</span> <span
  m='733080'>therefore</span> <span m='733440'>the</span> <span
  m='733600'>ratio</span> <span m='734600'>is</span> <span
  m='735030'>dimensionless.</span> <span m='738110'>Let</span> <span
  m='738290'>me</span> <span m='738460'>write</span> <span
  m='738740'>that</span> <span m='739000'>word.</span> <span
  m='739720'>Dimensionless.</span> </p><p><span m='743220'>So</span> <span
  m='744830'>conclusion.</span> <span m='745910'>I</span> <span
  m='746100'>could</span> <span m='746350'>rewrite</span> <span
  m='746930'>the</span> <span m='747050'>answer</span> <span
  m='747960'>in</span> <span m='748210'>terms</span> <span m='748680'>of</span>
  <span m='748810'>these</span> <span m='749110'>quantities</span> <span
  m='750000'>omega</span> <span m='750550'>n</span> <span m='751380'>and</span>
  <span m='751690'>zeta.</span> <span m='754480'>I</span> <span
  m='754580'>won't</span> <span m='754860'>do</span> <span
  m='755000'>that</span> <span m='755360'>here.</span> <span
  m='756840'>That</span> <span m='757100'>can</span> <span
  m='757410'>wait</span> <span m='757740'>for</span> <span
  m='757890'>another</span> <span m='758560'>time.</span> </p><p><span
  m='759550'>But</span> <span m='760580'>just</span> <span m='760860'>to</span>
  <span m='760970'>say</span> <span m='761270'>since</span> <span
  m='761530'>we've</span> <span m='763330'>found</span> <span
  m='763710'>a</span> <span m='763780'>solution</span> <span
  m='764470'>to</span> <span m='764600'>the</span> <span m='764730'>most</span>
  <span m='765080'>important</span> <span m='766770'>application</span> <span
  m='768960'>with</span> <span m='769300'>cosine</span> <span
  m='769800'>omega</span> <span m='770210'>t</span> <span
  m='770490'>there,</span> <span m='771390'>since</span> <span
  m='771610'>we</span> <span m='771810'>found</span> <span m='772130'>the</span>
  <span m='772260'>solution,</span> <span m='775130'>appropriate</span> <span
  m='775690'>to</span> <span m='775820'>comment</span> <span
  m='776750'>that</span> <span m='776960'>we</span> <span
  m='777120'>could</span> <span m='777310'>write</span> <span
  m='777610'>the</span> <span m='777700'>answer</span> <span
  m='778280'>in</span> <span m='778500'>terms</span> <span m='779010'>of</span>
  <span m='779790'>omega</span> <span m='780260'>n,</span> <span
  m='780550'>the</span> <span m='780670'>natural</span> <span
  m='781110'>frequency,</span> <span m='782440'>and</span> <span
  m='783100'>z,</span> <span m='783970'>zeta,</span> <span m='784560'>the</span>
  <span m='784720'>damping</span> <span m='786060'>ratio.</span> <span
  m='787800'>Thank</span> <span m='788070'>you.</span> </p>
uid: 89b77c57bbc7cab6051362d646093741
type: courses
layout: video
---
