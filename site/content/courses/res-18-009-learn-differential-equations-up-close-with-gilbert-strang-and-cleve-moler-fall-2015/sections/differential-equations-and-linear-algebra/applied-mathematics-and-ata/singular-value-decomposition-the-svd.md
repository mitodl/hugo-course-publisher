---
about_this_resource_text: >-
  <p><strong>Description:</strong> The SVD factors each matrix into an
  orthogonal matrix times a diagonal matrix  (the singular value) times another
  orthogonal matrix: Rotation times stretch times rotation.</p> <p>Related
  section in <a href="http://www-math.mit.edu/~gs/dela/">textbook</a>: 7.2b</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: mBcLRGuAFUk
    parent_uid: c732f967fb88e87af1ad37479a69de27
    title: Video-YouTube-Stream
    type: Video
    uid: bb0b0e807b875219daebdb401a87cf7c
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/mBcLRGuAFUk/default.jpg'
    parent_uid: c732f967fb88e87af1ad37479a69de27
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: b3241863a90d5eb362b68f7d230cde17
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: mBcLRGuAFUk
    parent_uid: c732f967fb88e87af1ad37479a69de27
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 6f07cf81686c21ffa8a4d49b2567653a
  - id: mBcLRGuAFUk.srt
    parent_uid: c732f967fb88e87af1ad37479a69de27
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/applied-mathematics-and-ata/singular-value-decomposition-the-svd/mBcLRGuAFUk.srt
    title: 3play caption file
    type: null
    uid: f7efd44cec583d15f1448085e9525275
  - id: mBcLRGuAFUk.pdf
    parent_uid: c732f967fb88e87af1ad37479a69de27
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/applied-mathematics-and-ata/singular-value-decomposition-the-svd/mBcLRGuAFUk.pdf
    title: 3play pdf file
    type: null
    uid: 0474259a3b114b4c091fbabb8a6be550
  - id: Caption-3Play YouTube id-SRT
    parent_uid: c732f967fb88e87af1ad37479a69de27
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 690e128497ab727fa8e813d5edb17a10
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: c732f967fb88e87af1ad37479a69de27
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: afd9bbc8b7242009c92c7e397218c0f4
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: c732f967fb88e87af1ad37479a69de27
    title: Video-iTunes U-MP4
    type: Video
    uid: ecd77d87338aef7268e1bf0418e25cb7
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_7_2b_SVD_300k.mp4
    parent_uid: c732f967fb88e87af1ad37479a69de27
    title: Video-Internet Archive-MP4
    type: Video
    uid: 071bd2a103f6f8479c2ef51deefedf5f
inline_embed_id: 93531692singularvaluedecomposition(thesvd)7389986
order_index: 492
parent_uid: 2cc6caacd4067f42fa9d1b6519945fc2
related_resources_text: ''
short_url: singular-value-decomposition-the-svd
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/applied-mathematics-and-ata/singular-value-decomposition-the-svd
title: Singular Value Decomposition (the SVD)
transcript: >-
  <p><span m='1730'>PROFESSOR: The</span> <span m='2029'>previous</span> <span
  m='2500'>video</span> <span m='3470'>was</span> <span m='3700'>about</span>
  <span m='4080'>positive</span> <span m='4630'>definite</span> <span
  m='5100'>matrices.</span> <span m='6480'>This</span> <span
  m='6850'>video</span> <span m='7850'>is</span> <span m='8060'>also</span>
  <span m='8410'>linear</span> <span m='8830'>algebra,</span> <span
  m='9680'>a</span> <span m='9790'>very</span> <span
  m='10320'>interesting</span> <span m='11950'>way</span> <span
  m='12420'>to</span> <span m='12620'>break</span> <span m='12980'>up</span>
  <span m='13160'>a</span> <span m='13230'>matrix</span> <span
  m='14180'>called</span> <span m='14580'>the</span> <span
  m='14760'>singular</span> <span m='15550'>value</span> <span
  m='16260'>decomposition.</span> <span m='17660'>And</span> <span
  m='17870'>everybody</span> <span m='18460'>says</span> <span
  m='19400'>SVD</span> <span m='20900'>for</span> <span
  m='21090'>singular</span> <span m='21690'>value</span> <span
  m='22170'>decomposition.</span> <span m='23760'>And</span> <span
  m='23960'>what</span> <span m='24190'>is</span> <span m='24430'>that</span>
  <span m='24920'>factoring?</span> <span m='25560'>What</span> <span
  m='25840'>are</span> <span m='25970'>the</span> <span m='26160'>three</span>
  <span m='26540'>pieces</span> <span m='27070'>of</span> <span
  m='27210'>the</span> <span m='27380'>SVD?</span> </p><p><span
  m='28790'>So</span> <span m='30170'>this</span> <span m='30520'>is</span>
  <span m='30590'>the</span> <span m='31150'>fact</span> <span
  m='31580'>is</span> <span m='32060'>every</span> <span
  m='32540'>matrix,</span> <span m='33660'>rectangular,</span> <span
  m='34600'>every</span> <span m='34940'>matrix</span> <span
  m='35940'>factors</span> <span m='36670'>into--</span> <span
  m='38820'>these</span> <span m='39150'>are</span> <span m='39240'>the</span>
  <span m='39410'>three</span> <span m='39700'>pieces.</span> <span
  m='40970'>U</span> <span m='41870'>sigma</span> <span m='42500'>V</span> <span
  m='42740'>transpose.</span> <span m='43580'>People</span> <span
  m='43900'>use</span> <span m='44190'>those</span> <span
  m='44940'>letters</span> <span m='45480'>for</span> <span m='45660'>the</span>
  <span m='45830'>three</span> <span m='46180'>factors.</span> </p><p><span
  m='48150'>The</span> <span m='48310'>factor</span> <span m='48790'>U</span>
  <span m='49850'>is</span> <span m='50050'>an</span> <span
  m='50190'>orthogonal</span> <span m='50860'>matrix,</span> <span
  m='52910'>an</span> <span m='53040'>orthogonal</span> <span
  m='53640'>matrix.</span> <span m='54430'>The</span> <span
  m='54580'>factor</span> <span m='55060'>sigma</span> <span m='55480'>in</span>
  <span m='55620'>the</span> <span m='55720'>middle</span> <span
  m='56720'>is</span> <span m='56920'>a</span> <span m='57030'>diagonal</span>
  <span m='57740'>matrix.</span> <span m='58780'>The</span> <span
  m='58920'>factor</span> <span m='59360'>V</span> <span
  m='59660'>transpose</span> <span m='60320'>on</span> <span
  m='60450'>the</span> <span m='60560'>right</span> <span m='61020'>is</span>
  <span m='61220'>also</span> <span m='61890'>an</span> <span
  m='62070'>orthogonal</span> <span m='62710'>matrix.</span> <span
  m='63610'>So</span> <span m='63670'>I</span> <span m='63800'>have</span> <span
  m='64290'>orthogonal,</span> <span m='65610'>diagonal,</span> <span
  m='66620'>orthogonal,</span> <span m='67820'>or</span> <span
  m='68760'>physically,</span> <span m='69890'>rotation,</span> <span
  m='71330'>stretching,</span> <span m='72350'>rotation.</span> <span
  m='73770'>Now</span> <span m='74510'>we</span> <span m='74760'>have</span>
  <span m='74930'>seen</span> <span m='75760'>three</span> <span
  m='76180'>factors</span> <span m='77900'>for a</span> <span
  m='78130'>matrix,</span> <span m='79400'>V,</span> <span
  m='80360'>lambda,</span> <span m='81140'>V</span> <span
  m='81430'>inverse.</span> <span m='82030'>What's</span> <span
  m='82370'>the</span> <span m='82490'>difference?</span> <span
  m='83740'>What's</span> <span m='84020'>the</span> <span
  m='84160'>difference</span> <span m='84600'>between</span> <span
  m='85500'>this</span> <span m='86150'>SVD,</span> <span m='87560'>this,</span>
  <span m='89010'>and</span> <span m='89470'>the</span> <span
  m='89790'>V,</span> <span m='90750'>lambda,</span> <span m='91710'>V</span>
  <span m='91950'>transpose,</span> <span m='93360'>V</span> <span
  m='93700'>inverse,</span> <span m='94300'>V</span> <span
  m='94670'>lambda,</span> <span m='95120'>V</span> <span
  m='95320'>inverse</span> <span m='95850'>for</span> <span
  m='96620'>diagonalizing</span> <span m='97780'>other</span> <span
  m='98040'>matrices?</span> </p><p><span m='99610'>So</span> <span
  m='99810'>the</span> <span m='99960'>lambda</span> <span m='100860'>is</span>
  <span m='101030'>diagonal</span> <span m='101730'>and</span> <span
  m='101860'>the</span> <span m='101970'>sigma</span> <span m='102235'>is</span>
  <span m='102500'>diagonal,</span> <span m='103050'>but</span> <span
  m='103240'>they're</span> <span m='103420'>different.</span> <span
  m='104460'>The</span> <span m='104910'>key</span> <span
  m='105190'>point</span> <span m='105500'>is</span> <span m='105990'>I</span>
  <span m='106200'>now</span> <span m='106560'>have</span> <span
  m='106910'>two</span> <span m='107290'>different</span> <span
  m='107740'>matrices,</span> <span m='109420'>not</span> <span
  m='109680'>just</span> <span m='109970'>V</span> <span m='110190'>and</span>
  <span m='110350'>V</span> <span m='110540'>inverse,</span> <span
  m='111080'>but</span> <span m='111310'>two</span> <span
  m='111510'>different</span> <span m='111950'>matrices.</span> <span
  m='113210'>But</span> <span m='113880'>the</span> <span m='114310'>new</span>
  <span m='114790'>great</span> <span m='115100'>advantage</span> <span
  m='115440'>is</span> <span m='116520'>they</span> <span m='116810'>are</span>
  <span m='117610'>orthogonal</span> <span m='118290'>matrices,</span> <span
  m='119940'>both of</span> <span m='120235'>them.</span> <span
  m='120900'>So</span> <span m='121090'>by</span> <span m='121300'>going</span>
  <span m='121820'>to--</span> <span m='122980'>and</span> <span
  m='123430'>I</span> <span m='123825'>can</span> <span m='124220'>do</span>
  <span m='124420'>it</span> <span m='124610'>for</span> <span
  m='125980'>rectangular</span> <span m='126640'>matrices</span> <span
  m='127290'>also.</span> <span m='129229'>Eigenvalues</span> <span
  m='130240'>really</span> <span m='130550'>worked</span> <span
  m='130990'>for</span> <span m='131620'>square</span> <span
  m='132040'>matrices.</span> </p><p><span m='133230'>Now</span> <span
  m='133530'>we</span> <span m='133770'>really</span> <span
  m='134150'>are--</span> <span m='134570'>we</span> <span
  m='134730'>have</span> <span m='134900'>two.</span> <span m='135160'>We</span>
  <span m='135300'>have</span> <span m='135480'>an</span> <span
  m='136210'>input</span> <span m='137820'>matrix</span> <span
  m='138400'>and</span> <span m='138570'>an</span> <span
  m='138730'>output</span> <span m='139250'>matrix.</span> <span
  m='139780'>In</span> <span m='139930'>those</span> <span
  m='140170'>spaces</span> <span m='140820'>m</span> <span m='141150'>and</span>
  <span m='141340'>n</span> <span m='141690'>can</span> <span
  m='143182'>have</span> <span m='143580'>different</span> <span
  m='143930'>dimensions.</span> <span m='145150'>So</span> <span
  m='145800'>by</span> <span m='146800'>allowing</span> <span
  m='147600'>two</span> <span m='148010'>separate</span> <span
  m='148490'>bases,</span> <span m='149090'>we</span> <span
  m='149280'>get</span> <span m='149690'>rectangular</span> <span
  m='150400'>matrices,</span> <span m='153500'>and</span> <span
  m='153690'>we</span> <span m='153810'>get</span> <span
  m='154030'>orthogonal</span> <span m='154790'>factors</span> <span
  m='155630'>with,</span> <span m='156000'>again,</span> <span
  m='156460'>a</span> <span m='156570'>diagonal.</span> <span
  m='157240'>And</span> <span m='157420'>this</span> <span m='157620'>is</span>
  <span m='157830'>called--</span> <span m='158410'>these</span> <span
  m='158670'>numbers</span> <span m='159120'>sigma</span> <span
  m='160200'>instead</span> <span m='160640'>of</span> <span
  m='160780'>eigenvalues,</span> <span m='162270'>are</span> <span
  m='162460'>called</span> <span m='163170'>singular</span> <span
  m='163800'>values.</span> <span m='164560'>So</span> <span
  m='164840'>these</span> <span m='165180'>are</span> <span
  m='165280'>the</span> <span m='165460'>singular</span> <span
  m='166000'>values.</span> <span m='166850'>These</span> <span
  m='167180'>are</span> <span m='167430'>the</span> <span
  m='167820'>singular</span> <span m='168390'>vectors,</span> <span
  m='168920'>the</span> <span m='169080'>right</span> <span
  m='169460'>singular</span> <span m='169940'>vectors</span> <span
  m='170470'>and</span> <span m='170670'>the</span> <span m='170770'>left</span>
  <span m='171160'>singular</span> <span m='171590'>vectors.</span> <span
  m='172910'>That's</span> <span m='173240'>the</span> <span
  m='173380'>statement</span> <span m='173910'>of</span> <span
  m='174020'>the</span> <span m='174160'>factorization.</span> </p><p><span
  m='175430'>But</span> <span m='176360'>we</span> <span m='176520'>have</span>
  <span m='176740'>to</span> <span m='177150'>think</span> <span
  m='177430'>a</span> <span m='177510'>little</span> <span
  m='177770'>bit,</span> <span m='179790'>what</span> <span
  m='180020'>are</span> <span m='180170'>those</span> <span
  m='180460'>factors?</span> <span m='181820'>What</span> <span
  m='182180'>are</span> <span m='182240'>the--</span> <span
  m='182930'>can</span> <span m='183160'>we</span> <span m='183320'>see</span>
  <span m='184220'>why</span> <span m='184510'>this</span> <span
  m='184830'>works?</span> <span m='186100'>So</span> <span m='186490'>I</span>
  <span m='186620'>want</span> <span m='186940'>that.</span> <span
  m='187980'>And</span> <span m='188130'>let</span> <span m='188330'>me</span>
  <span m='189950'>do,</span> <span m='190250'>as</span> <span
  m='190390'>you</span> <span m='191040'>see</span> <span m='191330'>this</span>
  <span m='191550'>coming,</span> <span m='192450'>I'll</span> <span
  m='192670'>look</span> <span m='192930'>at</span> <span m='193070'>A</span>
  <span m='193260'>transpose</span> <span m='193565'>A.</span> <span
  m='195260'>I</span> <span m='195410'>like</span> <span m='195790'>A</span>
  <span m='195940'>transpose</span> <span m='196285'>A.</span> <span
  m='198310'>So</span> <span m='198800'>A</span> <span
  m='198940'>transpose</span> <span m='199700'>will</span> <span
  m='199940'>be,</span> <span m='200390'>I</span> <span
  m='200500'>transpose</span> <span m='201190'>this.</span> <span
  m='201500'>V</span> <span m='202640'>sigma</span> <span
  m='203120'>transpose</span> <span m='204760'>U</span> <span
  m='205040'>transpose,</span> <span m='205800'>right?</span> <span
  m='207980'>That's</span> <span m='208250'>A</span> <span
  m='208400'>transpose.</span> <span m='209160'>Then</span> <span
  m='209410'>I</span> <span m='209490'>multiply</span> <span
  m='209910'>by</span> <span m='210160'>A</span> <span m='211100'>U</span> <span
  m='211840'>sigma</span> <span m='213130'>V</span> <span
  m='213370'>transpose.</span> <span m='214980'>And</span> <span
  m='215130'>what</span> <span m='215350'>do</span> <span m='215460'>I</span>
  <span m='215610'>have?</span> <span m='218410'>Well,</span> <span
  m='218590'>I've</span> <span m='218710'>got</span> <span m='218900'>six</span>
  <span m='219240'>matrices.</span> </p><p><span m='220900'>But</span> <span
  m='222080'>U</span> <span m='222370'>transpose</span> <span
  m='223000'>U</span> <span m='223330'>in</span> <span m='223500'>here</span>
  <span m='223900'>is</span> <span m='224070'>the</span> <span
  m='224230'>identity,</span> <span m='225140'>because</span> <span
  m='225570'>U</span> <span m='225870'>is</span> <span m='226000'>an</span>
  <span m='226140'>orthogonal</span> <span m='226790'>matrix.</span> <span
  m='227720'>So</span> <span m='227740'>I</span> <span m='227850'>really</span>
  <span m='228220'>have</span> <span m='228500'>just</span> <span m='228840'>the
  V</span> <span m='228950'>on</span> <span m='229530'>one</span> <span
  m='229770'>side,</span> <span m='231040'>a</span> <span
  m='231170'>sigma</span> <span m='231620'>transpose</span> <span
  m='232330'>sigma,</span> <span m='233690'>that'll be</span> <span
  m='234080'>diagonal,</span> <span m='235550'>and</span> <span
  m='235880'>a</span> <span m='236060'>V</span> <span
  m='236800'>transpose</span> <span m='237520'>the</span> <span
  m='237770'>right.</span> <span m='239420'>This</span> <span
  m='239680'>I</span> <span m='239800'>recognize.</span> <span
  m='241070'>This</span> <span m='241300'>I</span> <span
  m='241410'>recognize.</span> <span m='242120'>Here</span> <span
  m='242590'>is</span> <span m='243120'>a</span> <span m='243230'>single</span>
  <span m='243700'>V,</span> <span m='244680'>a</span> <span
  m='245170'>diagonal</span> <span m='245660'>matrix,</span> <span
  m='246420'>a</span> <span m='246620'>V</span> <span
  m='246890'>transpose.</span> <span m='247990'>What</span> <span
  m='248300'>I'm</span> <span m='248450'>showing</span> <span
  m='248870'>you</span> <span m='249010'>here,</span> <span
  m='250000'>what</span> <span m='250200'>we</span> <span
  m='250350'>reached</span> <span m='250830'>is</span> <span
  m='251640'>the</span> <span m='251840'>eigenvalue,</span> <span
  m='252750'>the</span> <span m='252890'>diagonalization,</span> <span
  m='254240'>the</span> <span m='254370'>usual</span> <span
  m='254810'>eigenvalues</span> <span m='256649'>are</span> <span
  m='256860'>in</span> <span m='257019'>here</span> <span m='257810'>and</span>
  <span m='258079'>the</span> <span m='258260'>eigenvectors</span> <span
  m='259230'>are</span> <span m='259430'>in</span> <span m='259589'>here.</span>
  <span m='261029'>But</span> <span m='261420'>the</span> <span
  m='261550'>matrix</span> <span m='262110'>is</span> <span m='262470'>A</span>
  <span m='262620'>transpose</span> <span m='262920'>A.</span> </p><p><span
  m='264740'>Once</span> <span m='265030'>again,</span> <span
  m='265870'>A</span> <span m='266180'>was</span> <span
  m='266830'>rectangular</span> <span m='267670'>and</span> <span
  m='267790'>completely</span> <span m='268330'>general</span> <span
  m='268610'>and</span> <span m='268890'>we</span> <span
  m='269060'>couldn't</span> <span m='269960'>see</span> <span
  m='270920'>perfect</span> <span m='271440'>results.</span> <span
  m='272710'>But</span> <span m='272920'>when</span> <span m='273140'>we</span>
  <span m='273260'>went</span> <span m='273490'>to</span> <span
  m='273640'>A</span> <span m='273800'>transpose</span> <span
  m='274155'>A,</span> <span m='274510'>that</span> <span m='275050'>gave</span>
  <span m='275330'>us</span> <span m='275490'>a</span> <span
  m='275600'>positive</span> <span m='276400'>semidefinite</span> <span
  m='277290'>matrix,</span> <span m='277970'>symmetric</span> <span
  m='278700'>for</span> <span m='278860'>sure.</span> <span
  m='279860'>Its</span> <span m='280130'>eigenvectors</span> <span
  m='281260'>will</span> <span m='281520'>be</span> <span
  m='281720'>orthogonal.</span> <span m='282930'>That's</span> <span
  m='283260'>how</span> <span m='283430'>I</span> <span m='283530'>know</span>
  <span m='283970'>this</span> <span m='284250'>V</span> <span
  m='284660'>matrix,</span> <span m='285770'>the</span> <span
  m='285950'>eigenvectors</span> <span m='286840'>for</span> <span
  m='287040'>this</span> <span m='287560'>symmetric</span> <span
  m='288220'>matrix,</span> <span m='288740'>are</span> <span
  m='288890'>orthogonal</span> <span m='289960'>and</span> <span
  m='290200'>the</span> <span m='290350'>eigenvalues</span> <span
  m='291340'>are</span> <span m='291730'>positive.</span> <span
  m='293030'>And</span> <span m='293300'>they're</span> <span
  m='293550'>the</span> <span m='293840'>squares</span> <span
  m='294650'>of</span> <span m='294780'>the</span> <span
  m='294910'>singular</span> <span m='295390'>value.</span> <span
  m='295830'>So</span> <span m='295970'>this</span> <span m='296240'>is</span>
  <span m='296430'>telling</span> <span m='296770'>me</span> <span
  m='296900'>the</span> <span m='297600'>lambdas</span> <span
  m='298450'>for</span> <span m='299650'>A</span> <span
  m='299830'>transpose</span> <span m='300160'>A</span> <span
  m='302010'>are</span> <span m='302300'>the</span> <span
  m='302640'>sigma</span> <span m='303160'>squareds</span> <span
  m='304470'>for</span> <span m='306180'>s--</span> <span m='306480'>for</span>
  <span m='306780'>A.</span> <span m='307620'>For A</span> <span
  m='307830'>itself.</span> <span m='312860'>Lambda</span> <span
  m='314020'>is</span> <span m='314210'>the</span> <span m='314350'>same.</span>
  <span m='314790'>Lambda</span> <span m='315310'>for</span> <span
  m='315520'>A</span> <span m='315690'>transpose</span> <span
  m='316370'>A</span> <span m='316580'>is</span> <span m='316750'>sigma</span>
  <span m='317200'>squared</span> <span m='318030'>for</span> <span
  m='318230'>the</span> <span m='318630'>matrix</span> <span
  m='318910'>A.</span> </p><p><span m='321210'>Well</span> <span
  m='321510'>that</span> <span m='321630'>tells</span> <span
  m='321860'>me</span> <span m='322060'>V,</span> <span m='323500'>that</span>
  <span m='323720'>tells</span> <span m='323980'>me</span> <span
  m='324140'>sigma,</span> <span m='325410'>and</span> <span m='326070'>U</span>
  <span m='326530'>disappeared</span> <span m='327210'>here</span> <span
  m='327470'>because</span> <span m='328460'>U</span> <span
  m='328640'>transpose</span> <span m='329210'>U</span> <span
  m='329420'>was</span> <span m='329670'>the</span> <span
  m='331230'>identity.</span> <span m='331850'>It</span> <span
  m='332020'>just</span> <span m='332240'>went</span> <span
  m='332430'>away.</span> <span m='333250'>How</span> <span
  m='333540'>would</span> <span m='333840'>I</span> <span m='333940'>get</span>
  <span m='334400'>hold</span> <span m='334830'>of</span> <span
  m='335040'>U?</span> <span m='336570'>Well,</span> <span
  m='337230'>here's</span> <span m='337510'>one</span> <span
  m='337770'>way</span> <span m='337940'>to</span> <span m='338080'>see</span>
  <span m='338290'>it.</span> <span m='339330'>I</span> <span
  m='339480'>multiply</span> <span m='340060'>A</span> <span m='340460'>times
  A</span> <span m='340810'>transpose</span> <span m='342320'>in</span> <span
  m='342480'>that</span> <span m='342720'>order,</span> <span
  m='343780'>in</span> <span m='343940'>that</span> <span
  m='344190'>order.</span> <span m='344730'>So</span> <span
  m='344940'>now</span> <span m='345240'>I</span> <span m='345370'>have</span>
  <span m='346020'>U</span> <span m='346590'>sigma</span> <span
  m='347160'>V</span> <span m='347420'>transpose</span> <span m='348790'>times
  the</span> <span m='349180'>transpose,</span> <span m='350060'>which</span>
  <span m='350300'>is</span> <span m='350660'>the</span> <span
  m='351025'>V</span> <span m='351390'>sigma</span> <span
  m='351890'>transpose</span> <span m='352700'>U</span> <span
  m='352930'>transpose--</span> <span m='354170'>I'm</span> <span
  m='354330'>having</span> <span m='354650'>a</span> <span m='354700'>lot</span>
  <span m='354910'>of</span> <span m='355010'>fun</span> <span
  m='355260'>here</span> <span m='355490'>with</span> <span
  m='355710'>transposes.</span> </p><p><span m='356570'>But</span> <span
  m='357235'>V</span> <span m='357630'>transpose</span> <span
  m='358230'>V</span> <span m='358490'>is</span> <span m='358690'>now</span>
  <span m='358960'>the</span> <span m='359130'>identity</span> <span
  m='359750'>in</span> <span m='359850'>the</span> <span
  m='359940'>middle.</span> <span m='360970'>So</span> <span
  m='361210'>what</span> <span m='361410'>do</span> <span m='361530'>I</span>
  <span m='361630'>learn</span> <span m='361930'>here?</span> <span
  m='363190'>I</span> <span m='363370'>learn</span> <span m='363830'>that</span>
  <span m='364250'>U</span> <span m='366070'>is</span> <span
  m='366350'>the</span> <span m='366530'>eigenvector</span> <span
  m='367440'>matrix</span> <span m='368170'>for</span> <span
  m='369070'>AA</span> <span m='369490'>transpose.</span> <span
  m='372330'>So</span> <span m='372570'>these</span> <span
  m='373100'>have</span> <span m='373350'>the</span> <span
  m='373480'>same</span> <span m='374070'>eigenvalues,</span> <span
  m='376670'>A</span> <span m='376830'>times</span> <span m='377180'>B</span>
  <span m='377380'>has</span> <span m='377550'>the</span> <span
  m='377660'>same</span> <span m='377970'>eigenvalues</span> <span
  m='378610'>as</span> <span m='378770'>B</span> <span m='379030'>times A</span>
  <span m='379450'>in</span> <span m='379920'>this</span> <span
  m='380170'>case,</span> <span m='380510'>it</span> <span
  m='380890'>comes</span> <span m='381210'>out</span> <span
  m='381410'>here.</span> <span m='382680'>Same</span> <span
  m='383000'>eigenvalues.</span> <span m='383940'>This</span> <span
  m='384250'>has</span> <span m='384540'>eigenvectors</span> <span
  m='385300'>V,</span> <span m='386060'>this</span> <span m='386340'>has</span>
  <span m='386580'>eigenvectors</span> <span m='387280'>U,</span> <span
  m='388120'>and</span> <span m='388350'>those</span> <span
  m='388700'>are</span> <span m='388890'>the V</span> <span
  m='389030'>and</span> <span m='389560'>the</span> <span m='389720'>U</span>
  <span m='390190'>in</span> <span m='390530'>the</span> <span
  m='391320'>singular</span> <span m='391980'>value</span> <span
  m='392580'>decomposition.</span> </p><p><span m='393580'>Well,</span> <span
  m='393940'>I</span> <span m='394030'>have</span> <span m='394200'>to</span>
  <span m='394340'>show</span> <span m='394560'>you</span> <span
  m='394740'>an</span> <span m='394850'>example</span> <span m='396130'>I</span>
  <span m='396240'>have</span> <span m='396390'>to</span> <span
  m='396530'>show</span> <span m='396770'>you</span> <span m='396930'>an</span>
  <span m='397040'>example</span> <span m='397630'>and</span> <span
  m='397780'>an</span> <span m='397910'>application,</span> <span
  m='398710'>and</span> <span m='398860'>that's</span> <span
  m='399150'>it.</span> <span m='400390'>So</span> <span
  m='400570'>here's</span> <span m='400810'>an</span> <span
  m='400940'>example.</span> <span m='404760'>Suppose</span> <span
  m='405220'>A,</span> <span m='406480'>I'll</span> <span m='406900'>make</span>
  <span m='407170'>it</span> <span m='407310'>a</span> <span
  m='407400'>square</span> <span m='407920'>matrix,</span> <span
  m='408560'>2,</span> <span m='408910'>2,</span> <span m='409380'>minus</span>
  <span m='409790'>1,</span> <span m='410060'>1,</span> <span
  m='411730'>not</span> <span m='412020'>symmetric.</span> <span
  m='413590'>Certainly</span> <span m='413940'>not</span> <span
  m='414190'>positive</span> <span m='414610'>definite.</span> <span
  m='415090'>I</span> <span m='415140'>wouldn't</span> <span
  m='415410'>use</span> <span m='415750'>the</span> <span m='415870'>word</span>
  <span m='416190'>because</span> <span m='416550'>that</span> <span
  m='416740'>matrix</span> <span m='417220'>is</span> <span
  m='417350'>not</span> <span m='417590'>symmetric.</span> <span
  m='418360'>But</span> <span m='419080'>it's</span> <span m='419340'>got</span>
  <span m='420982'>an</span> <span m='421430'>SVD,</span> <span
  m='423320'>three</span> <span m='423610'>factors.</span> </p><p><span
  m='428890'>And</span> <span m='429950'>I</span> <span m='430060'>work</span>
  <span m='430370'>them</span> <span m='430550'>out.</span> <span
  m='432190'>This</span> <span m='432760'>is</span> <span m='433990'>the</span>
  <span m='434180'>orthogonal</span> <span m='434870'>matrix.</span> <span
  m='436960'>I</span> <span m='437090'>have</span> <span m='437210'>to</span>
  <span m='437360'>divide</span> <span m='437830'>by</span> <span
  m='438060'>square</span> <span m='438390'>root</span> <span
  m='438540'>of</span> <span m='438640'>5</span> <span m='439210'>to</span>
  <span m='439330'>make</span> <span m='439590'>it</span> <span
  m='440220'>unit</span> <span m='440590'>vectors.</span> <span
  m='442810'>Oops,</span> <span m='443110'>that's</span> <span
  m='443530'>not</span> <span m='444085'>going to</span> <span
  m='444360'>work.</span> <span m='445680'>How</span> <span
  m='445840'>about</span> <span m='446070'>that?</span> <span
  m='447250'>The</span> <span m='447420'>two</span> <span
  m='447650'>columns</span> <span m='448180'>are</span> <span
  m='448280'>orthogonal</span> <span m='449580'>and</span> <span
  m='449810'>that's</span> <span m='450090'>a</span> <span
  m='450180'>perfectly</span> <span m='450700'>good</span> <span
  m='450940'>U.</span> <span m='452140'>And</span> <span m='452260'>then</span>
  <span m='452610'>in</span> <span m='452870'>the</span> <span
  m='453010'>sigma,</span> <span m='454130'>I</span> <span
  m='454280'>got,</span> <span m='455250'>well</span> <span
  m='455480'>that's</span> <span m='455810'>a--</span> <span
  m='456240'>oh,</span> <span m='456360'>I</span> <span m='456440'>did</span>
  <span m='456680'>want</span> <span m='456980'>1</span> <span
  m='457250'>and</span> <span m='457440'>1.</span> <span m='457930'>I</span>
  <span m='458040'>did</span> <span m='458280'>want</span> <span
  m='458560'>1</span> <span m='458790'>and</span> <span m='458960'>1,</span>
  <span m='459530'>yes.</span> <span m='460880'>So</span> <span
  m='461080'>I</span> <span m='461200'>have</span> <span m='461360'>a</span>
  <span m='461440'>singular</span> <span m='461940'>matrix,</span> <span
  m='464570'>determinant</span> <span m='465150'>0,</span> <span
  m='465550'>singular</span> <span m='466080'>matrix.</span> <span
  m='466970'>So</span> <span m='467590'>my</span> <span
  m='467820'>eigenvalues</span> <span m='468670'>will</span> <span
  m='468890'>be</span> <span m='469130'>0</span> <span m='470020'>and</span>
  <span m='470400'>it</span> <span m='470550'>turns</span> <span
  m='470910'>out</span> <span m='471190'>square</span> <span
  m='471610'>root</span> <span m='471730'>of</span> <span m='471890'>10</span>
  <span m='472300'>is</span> <span m='473520'>the</span> <span
  m='473670'>other</span> <span m='473950'>eigenvalue</span> <span
  m='474620'>for</span> <span m='474770'>that--</span> <span
  m='475560'>other</span> <span m='475930'>singular</span> <span
  m='476610'>value</span> <span m='477020'>for</span> <span
  m='477180'>this</span> <span m='477470'>guy.</span> </p><p><span
  m='478160'>And</span> <span m='478370'>now</span> <span m='478640'>I'll</span>
  <span m='478960'>put</span> <span m='479160'>in</span> <span m='479350'>the
  V</span> <span m='479440'>transpose</span> <span m='480760'>matrix,</span>
  <span m='481520'>which</span> <span m='481920'>is</span> <span
  m='482450'>1,</span> <span m='482930'>1,</span> <span m='484680'>and</span>
  <span m='485980'>1,</span> <span m='486320'>minus</span> <span
  m='486770'>1</span> <span m='487140'>is</span> <span m='487290'>it?</span>
  <span m='489160'>And</span> <span m='489860'>those</span> <span
  m='490170'>have</span> <span m='490480'>length</span> <span
  m='491200'>square</span> <span m='491610'>root</span> <span
  m='491690'>of</span> <span m='491790'>2,</span> <span m='492160'>which</span>
  <span m='492400'>I</span> <span m='492590'>have</span> <span
  m='492710'>to</span> <span m='492860'>divide</span> <span
  m='493280'>by.</span> <span m='497290'>Well,</span> <span m='497710'>I</span>
  <span m='497840'>didn't</span> <span m='499000'>do</span> <span
  m='499160'>that</span> <span m='499760'>so</span> <span
  m='499940'>smoothly,</span> <span m='500500'>but</span> <span
  m='500770'>the</span> <span m='500880'>result</span> <span
  m='501320'>is</span> <span m='501480'>clear.</span> <span m='502880'>U,</span>
  <span m='503870'>sigma,</span> <span m='504730'>V</span> <span
  m='504930'>transpose,</span> <span m='506050'>so</span> <span
  m='506230'>here's</span> <span m='506570'>the</span> <span
  m='506690'>sigma.</span> <span m='509660'>And</span> <span
  m='510200'>the</span> <span m='510360'>singular</span> <span
  m='510860'>values</span> <span m='511550'>of</span> <span
  m='511690'>this</span> <span m='511980'>matrix</span> <span
  m='512659'>are</span> <span m='513419'>square</span> <span
  m='513840'>root</span> <span m='513929'>of</span> <span m='514090'>10</span>
  <span m='515020'>and</span> <span m='515230'>then</span> <span
  m='515799'>0</span> <span m='517330'>because</span> <span
  m='517590'>it's</span> <span m='517789'>a</span> <span
  m='517900'>singular</span> <span m='518409'>matrix.</span> <span
  m='519559'>And</span> <span m='519970'>the</span> <span
  m='520120'>eigenvectors,</span> <span m='521299'>well</span> <span
  m='521539'>the</span> <span m='522070'>singular</span> <span
  m='522870'>vectors</span> <span m='524070'>of</span> <span
  m='524270'>the</span> <span m='524390'>matrix</span> <span
  m='525080'>are</span> <span m='525460'>the</span> <span m='525620'>left</span>
  <span m='525960'>singular</span> <span m='526410'>vectors</span> <span
  m='527360'>and</span> <span m='527970'>the</span> <span
  m='528100'>right</span> <span m='528550'>singular</span> <span
  m='528950'>vectors.</span> <span m='530830'>That</span> <span
  m='531030'>looks</span> <span m='531290'>good</span> <span
  m='531500'>to</span> <span m='531580'>me.</span> </p><p><span
  m='533510'>And</span> <span m='533680'>now</span> <span m='533950'>the</span>
  <span m='534150'>application</span> <span m='534890'>to</span> <span
  m='535050'>finish.</span> <span m='536320'>A</span> <span
  m='536390'>first</span> <span m='536760'>application</span> <span
  m='537530'>is,</span> <span m='538910'>well,</span> <span
  m='539590'>very</span> <span m='539900'>important.</span> <span
  m='541750'>All</span> <span m='542020'>the</span> <span m='542160'>time</span>
  <span m='542600'>in</span> <span m='542700'>this</span> <span
  m='542950'>century,</span> <span m='543950'>we're</span> <span
  m='544090'>getting</span> <span m='544660'>matrices</span> <span
  m='546730'>with</span> <span m='546970'>data</span> <span m='547370'>in</span>
  <span m='547610'>them.</span> <span m='548580'>Maybe</span> <span
  m='549790'>in</span> <span m='550220'>life</span> <span
  m='550520'>sciences,</span> <span m='551540'>we</span> <span
  m='552220'>test</span> <span m='552720'>a</span> <span m='552770'>bunch</span>
  <span m='553150'>of</span> <span m='554250'>sample</span> <span
  m='555040'>people</span> <span m='556430'>for</span> <span
  m='557020'>genes.</span> <span m='559100'>So</span> <span m='559380'>I</span>
  <span m='559510'>have</span> <span m='559800'>a--</span> <span
  m='560720'>my</span> <span m='560910'>data</span> <span
  m='561380'>comes</span> <span m='562270'>somehoe--</span> <span
  m='563730'>I</span> <span m='563890'>have</span> <span m='564230'>a</span>
  <span m='565050'>gene</span> <span m='565950'>expression</span> <span
  m='566660'>matrix.</span> <span m='567460'>I</span> <span
  m='567600'>have</span> <span m='568930'>samples,</span> <span
  m='569560'>people,</span> <span m='571210'>people</span> <span
  m='572550'>1,</span> <span m='572850'>2,</span> <span m='573100'>3</span>
  <span m='575210'>in</span> <span m='575400'>those</span> <span
  m='575670'>columns.</span> <span m='578320'>And</span> <span
  m='578730'>I</span> <span m='578870'>have</span> <span m='582152'>in</span>
  <span m='582600'>the</span> <span m='582700'>rows,</span> <span
  m='583920'>let</span> <span m='584090'>me</span> <span m='584230'>say</span>
  <span m='584590'>four</span> <span m='585010'>rows,</span> <span
  m='586200'>I</span> <span m='586400'>have</span> <span
  m='586800'>genes,</span> <span m='590180'>gene</span> <span
  m='590450'>expressions.</span> </p><p><span m='593008'>That</span> <span
  m='593430'>would be</span> <span m='593810'>completely</span> <span
  m='594390'>normal.</span> <span m='594950'>A</span> <span
  m='595040'>rectangular</span> <span m='595700'>matrix,</span> <span
  m='596230'>because</span> <span m='596450'>the</span> <span
  m='596680'>number</span> <span m='596970'>of</span> <span
  m='597760'>people</span> <span m='598210'>and</span> <span
  m='598450'>the</span> <span m='598570'>number</span> <span
  m='598860'>of</span> <span m='598940'>genes</span> <span m='599360'>is</span>
  <span m='599490'>not</span> <span m='599740'>the</span> <span
  m='599850'>same.</span> <span m='600970'>And</span> <span m='601200'>in</span>
  <span m='601490'>reality,</span> <span m='602280'>those</span> <span
  m='602570'>are</span> <span m='602650'>both</span> <span
  m='602950'>very,</span> <span m='603480'>very</span> <span
  m='603690'>big</span> <span m='604020'>numbers,</span> <span
  m='604980'>so</span> <span m='605110'>I</span> <span m='605260'>have</span>
  <span m='605430'>a</span> <span m='605510'>large</span> <span
  m='605950'>matrix.</span> <span m='606850'>And</span> <span
  m='607030'>out</span> <span m='607270'>of</span> <span m='607390'>it,</span>
  <span m='607540'>I</span> <span m='607650'>want</span> <span
  m='607970'>to--</span> <span m='608200'>and</span> <span
  m='608420'>each</span> <span m='609070'>number</span> <span
  m='609580'>in</span> <span m='609680'>the</span> <span
  m='609760'>matrix</span> <span m='610370'>is</span> <span
  m='610550'>telling</span> <span m='610930'>me</span> <span
  m='611570'>how</span> <span m='611840'>much</span> <span m='612390'>the</span>
  <span m='612590'>gene</span> <span m='613110'>is</span> <span
  m='613290'>expressed</span> <span m='613930'>by</span> <span
  m='614100'>that</span> <span m='614380'>person.</span> <span
  m='617190'>We</span> <span m='617410'>may</span> <span m='617580'>be</span>
  <span m='617850'>searching</span> <span m='618420'>for</span> <span
  m='618660'>genes</span> <span m='619290'>causing</span> <span
  m='619840'>some</span> <span m='620100'>disease.</span> <span
  m='621610'>So</span> <span m='621780'>we</span> <span m='621960'>take</span>
  <span m='622290'>several</span> <span m='622640'>people,</span> <span
  m='623240'>some</span> <span m='623540'>well,</span> <span
  m='623950'>some</span> <span m='624220'>with</span> <span
  m='624420'>the</span> <span m='624540'>disease,</span> <span
  m='625470'>we</span> <span m='625680'>check</span> <span m='626000'>on</span>
  <span m='626180'>the</span> <span m='626290'>genes.</span> <span
  m='627220'>We</span> <span m='627350'>get</span> <span m='627530'>a</span>
  <span m='627580'>big</span> <span m='627850'>matrix</span> <span
  m='628820'>and</span> <span m='628870'>we</span> <span m='629010'>look</span>
  <span m='629350'>to</span> <span m='630210'>understand</span> <span
  m='630850'>something</span> <span m='631210'>about</span> <span m='631470'>of
  it.</span> </p><p><span m='632140'>What</span> <span m='632350'>can</span>
  <span m='632560'>we</span> <span m='632700'>understand?</span> <span
  m='633660'>What</span> <span m='633870'>are</span> <span m='633940'>we</span>
  <span m='634100'>looking</span> <span m='634480'>for?</span> <span
  m='635050'>We're</span> <span m='635220'>looking</span> <span
  m='635640'>for</span> <span m='635880'>the</span> <span
  m='636550'>correlation,</span> <span m='638270'>the</span> <span
  m='638930'>connection,</span> <span m='639630'>between</span> <span
  m='640600'>some</span> <span m='641970'>combination</span> <span
  m='642910'>maybe</span> <span m='643300'>of</span> <span
  m='643460'>genes</span> <span m='644450'>and</span> <span
  m='644710'>some--</span> <span m='645590'>we're</span> <span
  m='646120'>looking</span> <span m='646480'>for</span> <span
  m='646660'>a</span> <span m='646750'>gene</span> <span
  m='647360'>people</span> <span m='648190'>connection</span> <span
  m='648740'>here.</span> <span m='649650'>But</span> <span
  m='650810'>it's</span> <span m='651030'>not</span> <span
  m='651230'>going</span> <span m='651380'>to</span> <span m='651420'>be</span>
  <span m='651760'>person</span> <span m='652140'>number</span> <span
  m='652390'>one.</span> <span m='653480'>We're</span> <span
  m='653600'>not</span> <span m='653810'>looking</span> <span
  m='654150'>for</span> <span m='654330'>one</span> <span
  m='654730'>person.</span> <span m='655660'>We're</span> <span
  m='656150'>going</span> <span m='656360'>to</span> <span
  m='656430'>find</span> <span m='656920'>a</span> <span
  m='656940'>mixture</span> <span m='657560'>of</span> <span
  m='657650'>those</span> <span m='657950'>people,</span> <span
  m='658350'>so</span> <span m='658570'>we're</span> <span
  m='658790'>going</span> <span m='658960'>to</span> <span
  m='659020'>have</span> <span m='659730'>sort</span> <span m='659960'>of</span>
  <span m='660080'>an</span> <span m='660290'>eigensample,</span> <span
  m='662690'>eigenpeople.</span> <span m='665060'>Oh,</span> <span
  m='665340'>that's</span> <span m='665560'>a</span> <span
  m='665730'>terrible--</span> <span m='666760'>eigenperson</span> <span
  m='668140'>would</span> <span m='668260'>be</span> <span
  m='668410'>better.</span> <span m='669130'>So</span> <span m='670240'>I</span>
  <span m='670740'>think</span> <span m='670980'>I'm</span> <span
  m='671080'>seeing</span> <span m='671520'>an</span> <span
  m='671660'>eigenperson.</span> <span m='672530'>Let</span> <span
  m='672660'>me</span> <span m='672790'>see</span> <span m='672990'>where</span>
  <span m='673270'>I'm</span> <span m='673440'>going</span> <span
  m='673660'>to</span> <span m='673720'>put</span> <span m='674000'>this.</span>
  </p><p><span m='675260'>So</span> <span m='675550'>yeah,</span> <span
  m='675980'>I</span> <span m='676150'>think</span> <span m='676950'>my</span>
  <span m='677140'>matrix</span> <span m='678450'>would</span> <span
  m='678690'>be</span> <span m='678900'>written--</span> <span
  m='680680'>oh,</span> <span m='681000'>here</span> <span m='681380'>is</span>
  <span m='681460'>the</span> <span m='681560'>main</span> <span
  m='681820'>point.</span> <span m='683840'>That</span> <span
  m='684480'>just</span> <span m='684780'>as</span> <span m='684930'>I</span>
  <span m='685070'>see</span> <span m='685330'>in</span> <span
  m='685450'>this</span> <span m='685640'>example,</span> <span
  m='686600'>it's</span> <span m='686960'>the</span> <span
  m='687630'>first</span> <span m='688360'>vector</span> <span
  m='689350'>and</span> <span m='689600'>the</span> <span
  m='689710'>first</span> <span m='690160'>vector</span> <span
  m='690970'>and</span> <span m='691210'>the</span> <span
  m='691300'>biggest</span> <span m='692450'>sigma</span> <span
  m='693800'>that</span> <span m='693980'>are</span> <span m='694130'>all</span>
  <span m='694340'>important.</span> <span m='695290'>Well,</span> <span
  m='695580'>in</span> <span m='695700'>that</span> <span
  m='695890'>example</span> <span m='696320'>the</span> <span
  m='696480'>other</span> <span m='696710'>sigma</span> <span
  m='697060'>was</span> <span m='697230'>0,</span> <span
  m='697830'>nothing.</span> <span m='699060'>But</span> <span
  m='699300'>in</span> <span m='699490'>this</span> <span
  m='699710'>example,</span> <span m='700320'>I'll</span> <span
  m='700450'>probably</span> <span m='700990'>have</span> <span
  m='701400'>three</span> <span m='701890'>different</span> <span
  m='702310'>sigmas.</span> <span m='703270'>But</span> <span
  m='703430'>the</span> <span m='703560'>largest</span> <span
  m='704090'>sigma,</span> <span m='705560'>the</span> <span
  m='705750'>first,</span> <span m='707270'>the</span> <span
  m='707470'>U1</span> <span m='708860'>and</span> <span m='709050'>the</span>
  <span m='709130'>V1,</span> <span m='710280'>it's</span> <span
  m='710600'>that</span> <span m='710930'>combination</span> <span
  m='711690'>that</span> <span m='711830'>I want.</span> <span
  m='712230'>I</span> <span m='712630'>want</span> <span m='716000'>U1</span>
  <span m='717300'>sigma</span> <span m='717960'>1</span> <span
  m='718910'>V1</span> <span m='719420'>transpose,</span> <span
  m='721710'>the</span> <span m='721900'>first</span> <span
  m='722350'>eigenvector</span> <span m='723700'>of</span> <span
  m='723990'>A</span> <span m='724190'>transpose</span> <span
  m='724500'>A</span> <span m='724810'>and</span> <span m='725200'>of</span>
  <span m='725470'>AA</span> <span m='725890'>transpose.</span> </p><p><span
  m='726680'>And</span> <span m='727120'>the</span> <span
  m='727220'>first</span> <span m='727630'>singular,</span> <span
  m='727940'>the</span> <span m='728140'>biggest</span> <span
  m='728590'>singular</span> <span m='729100'>value,</span> <span
  m='729690'>that's</span> <span m='730000'>the</span> <span
  m='730140'>information.</span> <span m='731830'>That's</span> <span
  m='732180'>the</span> <span m='732320'>best</span> <span
  m='734170'>sort</span> <span m='734720'>of</span> <span m='736850'>put</span>
  <span m='737090'>together</span> <span m='737560'>person,</span> <span
  m='738210'>eigenperson,</span> <span m='739740'>combination</span> <span
  m='740550'>of</span> <span m='740650'>these</span> <span
  m='740900'>people</span> <span m='741710'>and</span> <span
  m='741890'>the</span> <span m='741980'>best</span> <span
  m='742470'>combination</span> <span m='743130'>of</span> <span
  m='743260'>genes.</span> <span m='744190'>It</span> <span
  m='744420'>has</span> <span m='744740'>the--</span> <span m='745250'>in</span>
  <span m='745660'>statistics,</span> <span m='746420'>I</span> <span
  m='746490'>would</span> <span m='746660'>say</span> <span
  m='746830'>the</span> <span m='746970'>greatest</span> <span
  m='747480'>variance.</span> <span m='748460'>In</span> <span
  m='748660'>ordinary</span> <span m='749180'>English,</span> <span
  m='749570'>I</span> <span m='749660'>would</span> <span m='749850'>say</span>
  <span m='750050'>the</span> <span m='750170'>most</span> <span
  m='750620'>information.</span> <span m='751880'>The</span> <span
  m='752000'>most</span> <span m='752480'>information</span> <span
  m='753240'>in</span> <span m='753370'>this</span> <span m='754120'>big</span>
  <span m='754400'>matrix</span> <span m='755620'>is</span> <span
  m='755850'>in</span> <span m='756080'>this</span> <span m='757020'>very</span>
  <span m='757680'>special</span> <span m='758250'>matrix</span> <span
  m='759130'>with</span> <span m='759390'>only</span> <span
  m='759780'>rank</span> <span m='760180'>one,</span> <span
  m='760620'>only</span> <span m='760980'>a</span> <span
  m='761170'>single</span> <span m='761780'>column</span> <span
  m='762640'>repeated.</span> <span m='763630'>A</span> <span
  m='763760'>single</span> <span m='764240'>row</span> <span
  m='764770'>repeated,</span> <span m='765620'>and</span> <span
  m='766120'>a</span> <span m='766520'>number</span> <span
  m='767030'>sigma</span> <span m='767490'>1,</span> <span m='767900'>the</span>
  <span m='768020'>number</span> <span m='768390'>that</span> <span
  m='768610'>tells</span> <span m='768920'>me</span> <span
  m='769110'>that.</span> <span m='770080'>Because</span> <span
  m='771030'>remember,</span> <span m='771360'>U</span> <span
  m='771700'>is</span> <span m='771850'>a</span> <span m='771920'>unit</span>
  <span m='772340'>vector.</span> <span m='773120'>V</span> <span
  m='773370'>is</span> <span m='773550'>a</span> <span m='773630'>unit</span>
  <span m='774070'>vector.</span> <span m='774870'>It's</span> <span
  m='775170'>that</span> <span m='775420'>number</span> <span
  m='775780'>sigma</span> <span m='776210'>1</span> <span
  m='776520'>that's</span> <span m='776750'>selling me.</span> </p><p><span
  m='777110'>So</span> <span m='777330'>it's</span> <span m='777510'>like</span>
  <span m='778760'>that</span> <span m='779070'>unit</span> <span
  m='779450'>vector</span> <span m='780370'>times</span> <span
  m='780810'>that</span> <span m='781100'>number,</span> <span
  m='781840'>key</span> <span m='782130'>number,</span> <span
  m='782830'>times</span> <span m='783160'>that</span> <span
  m='783450'>unit</span> <span m='783800'>vector,</span> <span
  m='786510'>that's</span> <span m='786850'>this.</span> <span
  m='787170'>I'm</span> <span m='787370'>talking</span> <span
  m='787800'>here</span> <span m='788080'>about</span> <span
  m='788580'>principle</span> <span m='789790'>component</span> <span
  m='791120'>analysis.</span> <span m='792280'>I'm</span> <span
  m='792540'>looking</span> <span m='792980'>for</span> <span
  m='793220'>the</span> <span m='793830'>principle</span> <span
  m='794560'>component,</span> <span m='795290'>this</span> <span
  m='795580'>part.</span> <span m='796420'>Principle</span> <span
  m='797290'>component</span> <span m='798030'>analysis.</span> <span
  m='800100'>A</span> <span m='800200'>big</span> <span
  m='802680'>application</span> <span m='803540'>in</span> <span
  m='804120'>applied</span> <span m='804920'>statistics.</span> <span
  m='806580'>You know,</span> <span m='807921'>in</span> <span
  m='809300'>large</span> <span m='809620'>scale</span> <span
  m='810030'>drug</span> <span m='810630'>tests,</span> <span
  m='812640'>statisticians</span> <span m='813580'>really</span> <span
  m='813970'>have</span> <span m='814280'>a</span> <span
  m='814660'>central</span> <span m='815250'>place</span> <span
  m='815690'>here.</span> <span m='818268'>And</span> <span
  m='818760'>this</span> <span m='818970'>is</span> <span m='819190'>on</span>
  <span m='819360'>the</span> <span m='819470'>research</span> <span
  m='819920'>side,</span> <span m='821450'>to</span> <span
  m='821940'>find</span> <span m='822550'>the--</span> <span
  m='823560'>get</span> <span m='823790'>the</span> <span
  m='823920'>information</span> <span m='824640'>out</span> <span
  m='824870'>of</span> <span m='824990'>a</span> <span m='825340'>big</span>
  <span m='825570'>sample.</span> </p><p><span m='828150'>So</span> <span
  m='828820'>U1</span> <span m='829760'>is</span> <span m='829980'>sort</span>
  <span m='830220'>of</span> <span m='830320'>a</span> <span
  m='830420'>combination</span> <span m='831160'>of</span> <span
  m='831290'>people.</span> <span m='832330'>V1</span> <span
  m='833060'>is</span> <span m='833210'>a</span> <span
  m='833310'>combination</span> <span m='833970'>of</span> <span
  m='834070'>genes.</span> <span m='834920'>Sigma</span> <span
  m='835390'>1</span> <span m='835680'>is</span> <span m='835840'>the</span>
  <span m='835960'>biggest</span> <span m='836380'>number</span> <span
  m='836700'>I</span> <span m='836790'>can</span> <span m='837020'>get.</span>
  <span m='837610'>So</span> <span m='837750'>that's</span> <span
  m='838120'>PCA,</span> <span m='839590'>all</span> <span
  m='840080'>coming</span> <span m='840540'>from</span> <span
  m='840920'>the</span> <span m='841190'>singular</span> <span
  m='842060'>value</span> <span m='842760'>decomposition.</span> <span
  m='844370'>Thank</span> <span m='844540'>you.</span> </p>
uid: c732f967fb88e87af1ad37479a69de27
type: courses
layout: video
---
