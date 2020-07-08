---
about_this_resource_text: >-
  <p><strong>Description:</strong> When the input force is an impulse, the
  output is the impulse response. For all inputs the response is a
  &quot;convolution&quot; with the impulse response.</p> <p>Related section in
  <a href="http://www-math.mit.edu/~gs/dela/">textbook</a>: 2.7c</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: WZMQdLW4COQ
    parent_uid: e0a0f654df78e4ff92ef5f4ff4ff9eaf
    title: Video-YouTube-Stream
    type: Video
    uid: ae338250518591a948f44f8f1acb1241
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/WZMQdLW4COQ/default.jpg'
    parent_uid: e0a0f654df78e4ff92ef5f4ff4ff9eaf
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 5125b5a1750a8b089c402a5531020e03
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: WZMQdLW4COQ
    parent_uid: e0a0f654df78e4ff92ef5f4ff4ff9eaf
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ae6bdea749109be1cd22c1590ffe20e6
  - id: WZMQdLW4COQ.srt
    parent_uid: e0a0f654df78e4ff92ef5f4ff4ff9eaf
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/second-order-equations/laplace-transforms-and-convolution/WZMQdLW4COQ.srt
    title: 3play caption file
    type: null
    uid: ddd839447a705d36a9fae46ba4fa826c
  - id: WZMQdLW4COQ.pdf
    parent_uid: e0a0f654df78e4ff92ef5f4ff4ff9eaf
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/second-order-equations/laplace-transforms-and-convolution/WZMQdLW4COQ.pdf
    title: 3play pdf file
    type: null
    uid: 6e4829dcb6c76db3614c0bcdb407ec27
  - id: Caption-3Play YouTube id-SRT
    parent_uid: e0a0f654df78e4ff92ef5f4ff4ff9eaf
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ba2f60a94d1658ae1fe27cf46b1e8a23
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: e0a0f654df78e4ff92ef5f4ff4ff9eaf
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f74e58ee8b54bde921766dfc573d8ce8
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: e0a0f654df78e4ff92ef5f4ff4ff9eaf
    title: Video-iTunes U-MP4
    type: Video
    uid: 28851f9ef0e324fa97f020bb78e6844a
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_2_7c_LaplaceConvolution_300k.mp4
    parent_uid: e0a0f654df78e4ff92ef5f4ff4ff9eaf
    title: Video-Internet Archive-MP4
    type: Video
    uid: d2613ac40139577246a8638a57ef932d
inline_embed_id: 28254942laplacetransformsandconvolution60245712
order_index: 258
parent_uid: 6038bc5002ab0da0b5f15d8b8de5fc0a
related_resources_text: ''
short_url: laplace-transforms-and-convolution
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/second-order-equations/laplace-transforms-and-convolution
title: Laplace Transforms and Convolution
transcript: >-
  <p><span m='500'>PROFESSOR: OK.</span> <span m='1110'>This</span> <span
  m='1410'>is</span> <span m='2410'>one</span> <span m='2680'>more</span> <span
  m='4330'>thing</span> <span m='4600'>to</span> <span m='4730'>tell</span>
  <span m='4950'>you</span> <span m='5120'>about</span> <span
  m='5520'>Laplace</span> <span m='5980'>transforms,</span> <span
  m='7350'>and</span> <span m='8400'>introducing</span> <span m='9130'>a</span>
  <span m='9220'>new</span> <span m='9490'>word,</span> <span
  m='10310'>convolution.</span> <span m='12650'>And</span> <span
  m='12980'>so</span> <span m='13250'>we're</span> <span m='13420'>going</span>
  <span m='13580'>to</span> <span m='13660'>find</span> <span
  m='14110'>our</span> <span m='14560'>old</span> <span m='14990'>formula</span>
  <span m='17030'>in</span> <span m='17250'>new</span> <span
  m='17460'>language,</span> <span m='18650'>a</span> <span m='18660'>new</span>
  <span m='18890'>way.</span> <span m='19590'>But</span> <span
  m='20150'>the</span> <span m='20280'>formula</span> <span m='20600'>is</span>
  <span m='20920'>familiar.</span> <span m='21860'>And</span> <span
  m='22160'>the</span> <span m='22260'>problem</span> <span m='23480'>is</span>
  <span m='23950'>our</span> <span m='24480'>basic</span> <span
  m='25000'>problem,</span> <span m='25570'>second</span> <span
  m='26070'>order,</span> <span m='26850'>linear,</span> <span
  m='27840'>constant</span> <span m='28380'>coefficient</span> <span
  m='29450'>with</span> <span m='29950'>a</span> <span m='30070'>forcing</span>
  <span m='30590'>term.</span> </p><p><span m='31900'>And</span> <span
  m='32409'>we</span> <span m='32580'>know</span> <span m='32880'>that
  the</span> <span m='33080'>Laplace--</span> <span m='33690'>and</span> <span
  m='33960'>I'll</span> <span m='34140'>take</span> <span m='34510'>zero</span>
  <span m='34900'>boundary</span> <span m='35360'>conditions.</span> <span
  m='36650'>So</span> <span m='36950'>that</span> <span m='37300'>the</span>
  <span m='37720'>Laplace</span> <span m='38300'>transform</span> <span
  m='39040'>is</span> <span m='39250'>just</span> <span m='39870'>s</span> <span
  m='40110'>squared</span> <span m='40720'>y,</span> <span m='42145'>sy,</span>
  <span m='44210'>and</span> <span m='47060'>that's</span> <span
  m='47640'>the</span> <span m='48760'>transform</span> <span
  m='49390'>of</span> <span m='49530'>our</span> <span
  m='49770'>equation.</span> <span m='51950'>No</span> <span
  m='52140'>problem.</span> </p><p><span m='53250'>OK,</span> <span
  m='54150'>now</span> <span m='55010'>I'll</span> <span m='55220'>divide</span>
  <span m='55930'>by</span> <span m='56140'>that.</span> <span
  m='57270'>So</span> <span m='57560'>I</span> <span m='57660'>move</span> <span
  m='58040'>that</span> <span m='58630'>as</span> <span m='58870'>1</span> <span
  m='59240'>over,</span> <span m='60460'>and</span> <span m='60860'>I</span>
  <span m='60950'>call</span> <span m='61300'>it</span> <span
  m='61480'>G.</span> <span m='62260'>So</span> <span m='62520'>this</span>
  <span m='62840'>G</span> <span m='63380'>is</span> <span m='65880'>1</span>
  <span m='66570'>over</span> <span m='67480'>s</span> <span
  m='67820'>squared,</span> <span m='68470'>plus</span> <span
  m='68990'>Bs</span> <span m='70260'>plus</span> <span m='70770'>C.</span>
  <span m='71870'>And</span> <span m='72260'>that</span> <span
  m='72450'>has</span> <span m='72700'>the</span> <span m='72840'>name</span>
  <span m='73290'>transfer</span> <span m='73910'>function.</span> <span
  m='75890'>And</span> <span m='76920'>then</span> <span m='77870'>this</span>
  <span m='78240'>is</span> <span m='78440'>the</span> <span
  m='78710'>transform</span> <span m='79830'>of</span> <span
  m='80430'>the</span> <span m='80590'>forcing</span> <span
  m='81120'>term.</span> </p><p><span m='82270'>OK.</span> <span
  m='83080'>So</span> <span m='83330'>here</span> <span m='83530'>we</span>
  <span m='83660'>have</span> <span m='85710'>a</span> <span
  m='85800'>nice</span> <span m='87090'>formula</span> <span
  m='88200'>for</span> <span m='88360'>y</span> <span m='88660'>of</span> <span
  m='88810'>s,</span> <span m='89210'>after</span> <span m='89580'>I</span>
  <span m='89670'>do</span> <span m='89870'>that</span> <span
  m='90130'>division.</span> <span m='91410'>It's</span> <span
  m='91690'>a</span> <span m='91780'>product.</span> <span m='93190'>The</span>
  <span m='93570'>transform</span> <span m='94250'>of</span> <span
  m='94370'>the</span> <span m='94500'>solution</span> <span
  m='95090'>that</span> <span m='95250'>we</span> <span m='95390'>want</span>
  <span m='96670'>is</span> <span m='98240'>that</span> <span
  m='98550'>transform</span> <span m='99260'>times</span> <span
  m='99570'>that</span> <span m='99800'>transform.</span> <span
  m='101330'>This</span> <span m='101610'>is</span> <span m='101780'>the</span>
  <span m='102040'>transform</span> <span m='103230'>of</span> <span
  m='104110'>the</span> <span m='104620'>impulse</span> <span
  m='105170'>response.</span> <span m='106510'>This</span> <span
  m='106800'>is</span> <span m='106990'>the</span> <span
  m='107240'>transform</span> <span m='108090'>of</span> <span
  m='108190'>the</span> <span m='108430'>right-hand</span> <span
  m='108930'>side.</span> <span m='110470'>Now</span> <span m='111130'>I</span>
  <span m='111220'>just</span> <span m='111490'>have</span> <span
  m='111880'>a</span> <span m='112460'>Laplace</span> <span
  m='112820'>transform</span> <span m='113400'>question.</span> </p><p><span
  m='114890'>Suppose</span> <span m='115650'>my</span> <span
  m='115860'>transform</span> <span m='116650'>is</span> <span
  m='118580'>one</span> <span m='118940'>function</span> <span
  m='119430'>of</span> <span m='119540'>s</span> <span m='119840'>times</span>
  <span m='120160'>another</span> <span m='120590'>function</span> <span
  m='121110'>of</span> <span m='121240'>s,</span> <span m='122200'>what</span>
  <span m='122480'>is</span> <span m='122960'>the</span> <span
  m='125040'>inverse</span> <span m='125540'>transform?</span> <span
  m='127120'>What</span> <span m='127330'>is</span> <span m='127500'>the</span>
  <span m='127650'>inverse</span> <span m='128110'>transform?</span> <span
  m='128720'>What</span> <span m='129470'>function</span> <span
  m='129949'>y</span> <span m='130229'>of</span> <span m='130380'>t</span> <span
  m='131230'>gives</span> <span m='131560'>me</span> <span m='131800'>G</span>
  <span m='132230'>times</span> <span m='132680'>F?</span> <span
  m='134380'>And</span> <span m='134640'>I'm</span> <span m='134740'>just</span>
  <span m='135000'>going</span> <span m='135160'>to</span> <span
  m='135240'>answer</span> <span m='135690'>that.</span> <span
  m='137665'>The</span> <span m='137970'>answer</span> <span
  m='139570'>is</span> <span m='142990'>the</span> <span m='143260'>g</span>
  <span m='144900'>and</span> <span m='145310'>the</span> <span
  m='145470'>f,</span> <span m='147680'>those</span> <span m='148050'>are</span>
  <span m='148070'>the</span> <span m='148170'>ones</span> <span
  m='148450'>that</span> <span m='148600'>give</span> <span
  m='148750'>that.</span> <span m='149070'>But</span> <span m='149240'>I</span>
  <span m='149370'>do</span> <span m='149550'>not</span> <span
  m='149990'>just</span> <span m='150310'>multiply</span> <span
  m='151050'>those.</span> <span m='152430'>The</span> <span
  m='152600'>new</span> <span m='153810'>operation</span> <span
  m='155810'>that</span> <span m='155970'>gives</span> <span
  m='156190'>the</span> <span m='156300'>right</span> <span
  m='156550'>answer</span> <span m='157100'>is</span> <span
  m='157380'>called</span> <span m='158260'>convolution.</span> <span
  m='159820'>And</span> <span m='160020'>I'll</span> <span m='160790'>use</span>
  <span m='161130'>a</span> <span m='161240'>star.</span> </p><p><span
  m='162470'>So</span> <span m='163480'>right</span> <span m='163740'>now</span>
  <span m='164040'>I'm</span> <span m='164200'>going</span> <span
  m='164440'>to</span> <span m='164540'>say</span> <span m='164890'>what</span>
  <span m='165240'>does</span> <span m='165390'>that</span> <span
  m='165670'>convolution</span> <span m='166460'>mean.</span> <span
  m='168230'>So</span> <span m='168390'>this</span> <span m='168620'>is</span>
  <span m='168750'>a</span> <span m='168860'>general</span> <span
  m='169390'>question.</span> <span m='170300'>If</span> <span
  m='170500'>I</span> <span m='170620'>have</span> <span m='171360'>two</span>
  <span m='171620'>functions</span> <span m='172600'>multiplied</span> <span
  m='173300'>together,</span> <span m='174630'>then</span> <span
  m='174880'>I</span> <span m='174930'>want</span> <span m='175170'>the</span>
  <span m='175320'>inverse</span> <span m='175830'>transform,</span> <span
  m='177120'>then</span> <span m='177320'>I</span> <span m='177420'>take</span>
  <span m='177740'>the</span> <span m='177960'>separate</span> <span
  m='179870'>inverse</span> <span m='180350'>transforms,</span> <span
  m='181040'>little</span> <span m='181350'>g</span> <span m='181605'>and</span>
  <span m='181860'>little</span> <span m='182140'>f,</span> <span
  m='182480'>and</span> <span m='183510'>I</span> <span
  m='183770'>convolve</span> <span m='184820'>them,</span> <span
  m='185560'>I</span> <span m='185680'>do</span> <span
  m='185940'>convolution.</span> <span m='187140'>And</span> <span
  m='187300'>let</span> <span m='187500'>me</span> <span m='187640'>tell</span>
  <span m='187900'>you</span> <span m='188430'>what</span> <span
  m='188730'>convolution</span> <span m='189570'>is.</span> </p><p><span
  m='190370'>So</span> <span m='190650'>convolution</span> <span
  m='194420'>is--</span> <span m='195440'>here is</span> <span
  m='195820'>the</span> <span m='195950'>formula</span> <span
  m='196400'>for</span> <span m='196600'>convolution.</span> <span
  m='198190'>It's</span> <span m='198280'>an</span> <span
  m='198430'>integral</span> <span m='198950'>from</span> <span
  m='199200'>0</span> <span m='199540'>to</span> <span m='199710'>t</span> <span
  m='201000'>of</span> <span m='201170'>one</span> <span
  m='201520'>function--</span> <span m='207000'>maybe</span> <span
  m='207350'>I</span> <span m='207410'>better</span> <span m='207690'>use</span>
  <span m='208030'>capital</span> <span m='208620'>T,</span> <span
  m='210110'>better--</span> <span m='211400'>times</span> <span
  m='212260'>the</span> <span m='212410'>other</span> <span
  m='212690'>function,</span> <span m='216120'>integrated.</span> <span
  m='220600'>That's</span> <span m='221130'>what</span> <span
  m='221310'>convolution</span> <span m='222080'>is.</span> </p><p><span
  m='222940'>So</span> <span m='223560'>what</span> <span m='223820'>have</span>
  <span m='223980'>I</span> <span m='224130'>achieved</span> <span
  m='224720'>here?</span> <span m='225640'>The</span> <span
  m='225790'>same</span> <span m='226120'>old</span> <span
  m='226380'>formula.</span> <span m='227790'>The</span> <span
  m='228140'>formula</span> <span m='228620'>which</span> <span
  m='228870'>we</span> <span m='229030'>described</span> <span
  m='229730'>way</span> <span m='230090'>back</span> <span m='230460'>at</span>
  <span m='230570'>the</span> <span m='230690'>beginning</span> <span
  m='232020'>as</span> <span m='232370'>inputs</span> <span m='233030'>f,</span>
  <span m='234350'>growth</span> <span m='234810'>factors</span> <span
  m='235500'>over</span> <span m='235830'>the</span> <span
  m='235980'>remaining</span> <span m='236620'>time,</span> <span
  m='237240'>g.</span> <span m='238630'>Put</span> <span m='238870'>all</span>
  <span m='239090'>those</span> <span m='239420'>together</span> <span
  m='240060'>by</span> <span m='240420'>integration.</span> <span
  m='241540'>Put</span> <span m='241760'>all</span> <span m='242030'>the</span>
  <span m='242150'>inputs</span> <span m='243090'>with</span> <span
  m='243380'>their</span> <span m='243570'>growth</span> <span
  m='243880'>factors.</span> <span m='245160'>Integrate</span> <span
  m='245430'>to</span> <span m='246400'>put</span> <span m='246590'>them</span>
  <span m='246760'>all</span> <span m='246960'>together.</span> <span
  m='247820'>And</span> <span m='248460'>that</span> <span m='248950'>is</span>
  <span m='249430'>y.</span> <span m='252720'>So</span> <span
  m='252980'>it's</span> <span m='253110'>a</span> <span
  m='253320'>familiar</span> <span m='254160'>formula,</span> <span
  m='255390'>with</span> <span m='256040'>only</span> <span m='256560'>a</span>
  <span m='256720'>new</span> <span m='256899'>word.</span> <span
  m='258149'>But</span> <span m='258640'>you</span> <span m='258829'>see</span>
  <span m='259120'>that</span> <span m='259350'>I</span> <span
  m='259470'>could</span> <span m='259820'>jump</span> <span
  m='260300'>to</span> <span m='260470'>the</span> <span
  m='260600'>answer,</span> <span m='261149'>once</span> <span
  m='261500'>I</span> <span m='261649'>knew</span> <span m='262840'>about</span>
  <span m='263660'>the</span> <span m='264100'>convolution</span> <span
  m='264930'>formula,</span> <span m='266300'>and</span> <span
  m='266530'>I</span> <span m='266640'>knew</span> <span m='267040'>that</span>
  <span m='267290'>this</span> <span m='267550'>is</span> <span
  m='267780'>the</span> <span m='267930'>function</span> <span
  m='269230'>whose</span> <span m='269810'>transform</span> <span
  m='271240'>its--</span> <span m='272650'>let</span> <span m='272810'>me</span>
  <span m='272960'>say</span> <span m='273250'>again.</span> <span
  m='273660'>Its</span> <span m='273950'>transform</span> <span
  m='277190'>is</span> <span m='278620'>GF.</span> </p><p><span
  m='282750'>So</span> <span m='283770'>if</span> <span m='283950'>I</span>
  <span m='284040'>multiply</span> <span m='285050'>transforms,</span> <span
  m='286230'>I</span> <span m='286410'>convolve</span> <span
  m='287320'>functions.</span> <span m='288820'>And</span> <span
  m='289820'>looking</span> <span m='290220'>at</span> <span
  m='290330'>it</span> <span m='290470'>the</span> <span m='290610'>other</span>
  <span m='290810'>way,</span> <span m='291770'>if</span> <span
  m='291990'>I</span> <span m='292090'>multiply</span> <span
  m='292700'>functions</span> <span m='293800'>I</span> <span
  m='293940'>would</span> <span m='294180'>convolve</span> <span
  m='294990'>their</span> <span m='295200'>transforms.</span> <span
  m='296370'>So</span> <span m='296610'>convolution</span> <span
  m='299550'>grows</span> <span m='300390'>the</span> <span
  m='300450'>number</span> <span m='300840'>of</span> <span
  m='300990'>functions</span> <span m='301560'>that</span> <span
  m='302140'>we</span> <span m='302360'>can</span> <span m='302530'>deal</span>
  <span m='302860'>with</span> <span m='303140'>on</span> <span
  m='303420'>Laplace</span> <span m='303780'>transform.</span> <span
  m='304740'>Because</span> <span m='305160'>it</span> <span
  m='305310'>tells</span> <span m='305660'>us</span> <span
  m='305840'>what</span> <span m='306150'>to</span> <span m='306310'>do</span>
  <span m='307030'>with</span> <span m='307300'>products,</span> <span
  m='307980'>capital</span> <span m='308500'>G</span> <span
  m='308850'>capital</span> <span m='309410'>F.</span> <span
  m='310350'>Or</span> <span m='310650'>it</span> <span m='310750'>tells</span>
  <span m='311070'>us</span> <span m='311240'>what</span> <span
  m='311480'>to</span> <span m='311620'>do</span> <span m='311780'>with</span>
  <span m='311950'>little</span> <span m='312300'>g</span> <span
  m='312690'>little</span> <span m='312930'>f.</span> </p><p><span
  m='313440'>So</span> <span m='315680'>I'm</span> <span
  m='315890'>almost</span> <span m='316260'>through,</span> <span
  m='317170'>because</span> <span m='317550'>I</span> <span
  m='317640'>don't</span> <span m='317970'>plan</span> <span
  m='318470'>to</span> <span m='318680'>check.</span> <span m='319880'>I</span>
  <span m='319970'>could.</span> <span m='320360'>But</span> <span
  m='321160'>this</span> <span m='321430'>isn't</span> <span
  m='321710'>the</span> <span m='321830'>right</span> <span
  m='322130'>place.</span> <span m='322770'>The</span> <span
  m='322880'>book</span> <span m='323670'>does</span> <span m='323920'>it</span>
  <span m='325570'>accurately.</span> <span m='327360'>I</span> <span
  m='327510'>don't</span> <span m='327750'>plan</span> <span
  m='328070'>to</span> <span m='328190'>check</span> <span
  m='330330'>that</span> <span m='330740'>this</span> <span
  m='331020'>statement</span> <span m='331480'>is</span> <span
  m='331670'>true</span> <span m='331990'>that</span> <span
  m='332200'>the</span> <span m='332440'>transform</span> <span
  m='333070'>of</span> <span m='333210'>that</span> <span m='333480'>one</span>
  <span m='333770'>is</span> <span m='333960'>that</span> <span
  m='334170'>one.</span> <span m='334460'>But</span> <span m='334540'>it</span>
  <span m='334690'>is</span> <span m='334930'>true.</span> <span
  m='335670'>But</span> <span m='335790'>I</span> <span m='335880'>do</span>
  <span m='336620'>plan</span> <span m='336930'>to</span> <span
  m='337040'>do</span> <span m='337220'>an</span> <span
  m='337320'>example.</span> </p><p><span m='338640'>Now</span> <span
  m='339110'>second</span> <span m='339520'>degree</span> <span
  m='340850'>gets</span> <span m='341040'>a</span> <span
  m='341120'>little</span> <span m='341370'>messy.</span> <span
  m='342560'>So</span> <span m='342760'>let</span> <span m='342980'>me</span>
  <span m='343150'>do</span> <span m='343770'>a</span> <span
  m='343890'>first</span> <span m='344250'>degree</span> <span
  m='344620'>example.</span> <span m='345440'>Example,</span> <span
  m='350610'>I'll</span> <span m='350750'>take</span> <span
  m='351040'>the</span> <span m='351190'>equation</span> <span
  m='351800'>dy</span> <span m='351900'>dt</span> <span m='353160'>minus</span>
  <span m='353750'>ay.</span> <span m='355210'>That's</span> <span
  m='355500'>our</span> <span m='355630'>usual</span> <span
  m='356210'>first</span> <span m='356670'>degree</span> <span
  m='360230'>differential</span> <span m='360800'>equation.</span> <span
  m='361650'>And</span> <span m='362100'>I'll</span> <span
  m='362370'>take</span> <span m='362750'>e</span> <span m='363010'>to</span>
  <span m='363100'>the</span> <span m='363280'>ct</span> <span
  m='364180'>on</span> <span m='364370'>the</span> <span
  m='364470'>right-hand</span> <span m='364950'>side.</span> <span
  m='366140'>OK.</span> <span m='367470'>I'm</span> <span
  m='367920'>doing</span> <span m='368280'>those,</span> <span
  m='368600'>because</span> <span m='369010'>I</span> <span
  m='369120'>can</span> <span m='369370'>take</span> <span m='369700'>the</span>
  <span m='369850'>transforms</span> <span m='370910'>and</span> <span
  m='371100'>check</span> <span m='371390'>everything.</span> </p><p><span
  m='372100'>So</span> <span m='372280'>let</span> <span m='372430'>me</span>
  <span m='372600'>transform</span> <span m='373240'>both</span> <span
  m='373490'>of</span> <span m='373600'>those</span> <span
  m='375280'>starting</span> <span m='375700'>from</span> <span
  m='375980'>0.</span> <span m='377070'>So</span> <span m='377950'>the</span>
  <span m='378240'>transform</span> <span m='378750'>of</span> <span
  m='378870'>that</span> <span m='379120'>is</span> <span m='379390'>s</span>
  <span m='380322'>y</span> <span m='380790'>of</span> <span
  m='380930'>s,</span> <span m='382240'>minus</span> <span m='383196'>a</span>
  <span m='383910'>y</span> <span m='384180'>of</span> <span
  m='384330'>s,</span> <span m='385680'>equals,</span> <span
  m='387140'>well</span> <span m='387400'>I</span> <span m='387490'>know</span>
  <span m='387740'>the</span> <span m='387980'>transform</span> <span
  m='388610'>f</span> <span m='388830'>of</span> <span m='389010'>s.</span>
  <span m='389430'>I know</span> <span m='389640'>the</span> <span
  m='389890'>transform</span> <span m='390370'>of</span> <span
  m='390480'>that</span> <span m='390800'>is</span> <span m='391000'>1</span>
  <span m='392020'>over</span> <span m='392600'>s</span> <span
  m='393070'>minus</span> <span m='393720'>c.</span> <span m='396610'>So</span>
  <span m='396820'>this</span> <span m='397050'>is</span> <span
  m='397210'>just,</span> <span m='397640'>s</span> <span
  m='397880'>minus</span> <span m='398330'>a</span> <span
  m='398570'>factors</span> <span m='399150'>out.</span> <span
  m='399800'>So</span> <span m='399990'>well</span> <span m='400220'>y</span>
  <span m='400390'>of</span> <span m='400600'>s</span> <span
  m='402540'>is</span> <span m='403180'>1</span> <span m='404170'>over</span>
  <span m='405270'>s</span> <span m='405560'>minus</span> <span
  m='406080'>a,</span> <span m='408860'>and</span> <span m='409540'>s</span>
  <span m='409820'>minus</span> <span m='410300'>c.</span> </p><p><span
  m='414100'>Again,</span> <span m='415400'>this</span> <span
  m='415630'>is</span> <span m='416210'>the</span> <span
  m='416340'>simplest</span> <span m='417490'>differential</span> <span
  m='418070'>equation</span> <span m='419740'>with</span> <span
  m='419950'>a</span> <span m='420100'>forcing</span> <span
  m='420650'>term</span> <span m='421190'>that</span> <span m='421380'>I</span>
  <span m='421510'>could</span> <span m='422360'>use</span> <span
  m='422750'>as</span> <span m='422980'>an</span> <span
  m='423130'>example.</span> <span m='424480'>So</span> <span
  m='424650'>now</span> <span m='425120'>I'm</span> <span
  m='425320'>looking</span> <span m='425780'>for</span> <span
  m='426250'>what</span> <span m='426970'>is</span> <span m='427280'>y</span>
  <span m='427650'>of</span> <span m='427800'>T.</span> <span
  m='428840'>I'm</span> <span m='429010'>looking</span> <span
  m='429400'>for</span> <span m='429610'>y</span> <span m='429900'>of</span>
  <span m='430030'>T.</span> <span m='430860'>And</span> <span
  m='433170'>I'm</span> <span m='433320'>now</span> <span
  m='433550'>going</span> <span m='433720'>to</span> <span m='433770'>use</span>
  <span m='434320'>the</span> <span m='434640'>language</span> <span
  m='435070'>of</span> <span m='435210'>convolution.</span> </p><p><span
  m='437350'>This</span> <span m='437740'>is</span> <span m='437950'>the</span>
  <span m='438210'>transform</span> <span m='439670'>of</span> <span
  m='439910'>e</span> <span m='440140'>to</span> <span m='440230'>the</span>
  <span m='440420'>at.</span> <span m='442240'>This</span> <span
  m='442600'>is</span> <span m='442770'>the</span> <span
  m='443010'>transform</span> <span m='443770'>of--</span> <span
  m='444870'>so</span> <span m='445820'>you</span> <span m='446020'>see</span>
  <span m='446250'>I'm</span> <span m='446410'>thinking</span> <span
  m='446790'>of</span> <span m='446870'>that</span> <span m='447220'>as</span>
  <span m='447600'>the</span> <span m='447830'>transform</span> <span
  m='448530'>of</span> <span m='448770'>e</span> <span m='448980'>to</span>
  <span m='449050'>at,</span> <span m='450630'>and the</span> <span
  m='450860'>transform</span> <span m='452200'>of</span> <span
  m='453220'>e</span> <span m='453440'>to</span> <span m='453540'>the</span>
  <span m='453750'>st.</span> <span m='455820'>So</span> <span
  m='455980'>there</span> <span m='456170'>is</span> <span m='456280'>one</span>
  <span m='457130'>factor.</span> <span m='458410'>And</span> <span
  m='458570'>there's</span> <span m='459120'>the</span> <span
  m='459250'>other</span> <span m='459490'>factor.</span> </p><p><span
  m='462710'>So</span> <span m='462930'>according</span> <span
  m='463370'>to</span> <span m='463470'>the</span> <span
  m='463620'>convolution</span> <span m='464350'>formula,</span> <span
  m='467250'>I</span> <span m='467380'>can</span> <span m='467600'>write</span>
  <span m='467940'>down</span> <span m='468410'>the</span> <span
  m='469250'>inverse</span> <span m='469770'>transform,</span> <span
  m='470400'>the</span> <span m='470530'>y</span> <span m='470770'>of</span>
  <span m='470930'>t I</span> <span m='471320'>want</span> <span
  m='471810'>as</span> <span m='472190'>the</span> <span
  m='472320'>integral.</span> <span m='473580'>I'm</span> <span
  m='473720'>just</span> <span m='474200'>going</span> <span
  m='474400'>to</span> <span m='474530'>copy</span> <span m='475590'>the</span>
  <span m='476270'>convolution.</span> <span m='477680'>But</span> <span
  m='477900'>I</span> <span m='478080'>know</span> <span m='479050'>the</span>
  <span m='479660'>functions</span> <span m='481060'>for</span> <span
  m='481270'>that.</span> <span m='481670'>So</span> <span
  m='481970'>it's</span> <span m='482120'>an</span> <span
  m='482270'>integral</span> <span m='482720'>from</span> <span
  m='482930'>0</span> <span m='483280'>to</span> <span m='483450'>t.</span>
  <span m='485010'>What</span> <span m='485190'>do</span> <span
  m='485330'>I</span> <span m='485470'>have?</span> <span m='485840'>g</span>
  <span m='486230'>of</span> <span m='486360'>t</span> <span
  m='486600'>minus</span> <span m='487040'>t.</span> <span
  m='488090'>What</span> <span m='488320'>is</span> <span m='488580'>the</span>
  <span m='488740'>inverse</span> <span m='489250'>transform</span> <span
  m='490040'>of</span> <span m='490330'>1</span> <span m='490560'>over</span>
  <span m='490790'>s</span> <span m='491010'>minus</span> <span
  m='491350'>a?</span> <span m='491990'>It's</span> <span m='492230'>e</span>
  <span m='492570'>to</span> <span m='492710'>the</span> <span
  m='492940'>a</span> <span m='495670'>t</span> <span m='496040'>minus</span>
  <span m='496640'>t.</span> <span m='498940'>And</span> <span
  m='499120'>what</span> <span m='499340'>is</span> <span m='499470'>the</span>
  <span m='499600'>inverse</span> <span m='499990'>transform</span> <span
  m='500630'>of</span> <span m='500780'>1</span> <span m='501030'>over</span>
  <span m='501210'>s</span> <span m='501420'>minus</span> <span
  m='501780'>c?</span> <span m='502640'>e</span> <span m='503070'>to the</span>
  <span m='503240'>cT</span> <span m='506048'>dT.</span> </p><p><span
  m='507950'>So</span> <span m='508140'>I</span> <span m='508340'>have</span>
  <span m='508640'>used</span> <span m='509320'>the--</span> <span
  m='509780'>I've</span> <span m='510050'>just</span> <span
  m='511170'>put</span> <span m='511410'>in</span> <span m='511600'>what</span>
  <span m='511840'>I</span> <span m='511960'>know</span> <span
  m='512440'>in</span> <span m='512740'>the</span> <span
  m='513270'>convolution</span> <span m='514059'>formula.</span> <span
  m='515010'>And</span> <span m='515350'>this</span> <span
  m='515530'>should</span> <span m='515820'>be</span> <span
  m='516030'>the</span> <span m='516179'>correct</span> <span
  m='516600'>answer.</span> <span m='517679'>And</span> <span
  m='518179'>I</span> <span m='518309'>can</span> <span m='518530'>do</span>
  <span m='518740'>this</span> <span m='518990'>integral.</span> <span
  m='520409'>And</span> <span m='521080'>what</span> <span m='521370'>do</span>
  <span m='521510'>I</span> <span m='521630'>get?</span> <span
  m='522860'>Well,</span> <span m='524059'>I'm</span> <span
  m='524260'>pretty</span> <span m='524930'>sure</span> <span
  m='525910'>that</span> <span m='526150'>I</span> <span m='526290'>get</span>
  <span m='529940'>e</span> <span m='530590'>to</span> <span
  m='530750'>the--</span> <span m='532960'>down</span> <span
  m='533390'>below</span> <span m='533750'>there</span> <span
  m='533890'>will</span> <span m='534050'>be</span> <span m='534280'>a--</span>
  <span m='535140'>you</span> <span m='535620'>see</span> <span
  m='535780'>I'm</span> <span m='535920'>going</span> <span m='536100'>to</span>
  <span m='536180'>combine</span> <span m='536680'>those</span> <span
  m='536950'>exponentials.</span> <span m='538810'>So</span> <span
  m='539065'>I'll</span> <span m='539320'>have</span> <span m='539570'>a
  c</span> <span m='539900'>minus</span> <span m='540380'>a.</span> <span
  m='542050'>It</span> <span m='542700'>comes</span> <span m='543020'>out</span>
  <span m='543420'>perfectly.</span> </p><p><span m='545260'>e</span> <span
  m='545530'>to</span> <span m='545630'>the</span> <span m='545790'>ct,</span>
  <span m='551080'>minus</span> <span m='551780'>e</span> <span
  m='552140'>to</span> <span m='552290'>the</span> <span m='552520'>at.</span>
  <span m='557420'>That's</span> <span m='557680'>the</span> <span
  m='557780'>right</span> <span m='558010'>answer.</span> <span
  m='558600'>It's</span> <span m='558830'>not</span> <span
  m='559020'>only</span> <span m='560190'>what</span> <span
  m='560440'>the</span> <span m='560550'>convolution</span> <span
  m='561940'>formula</span> <span m='562450'>tells</span> <span
  m='562800'>me,</span> <span m='563570'>it's</span> <span
  m='564440'>what</span> <span m='564700'>I</span> <span m='564800'>know.</span>
  <span m='565880'>So</span> <span m='566100'>that</span> <span
  m='566370'>example</span> <span m='567670'>is</span> <span m='567880'>a</span>
  <span m='567980'>good</span> <span m='568210'>one</span> <span
  m='569440'>to</span> <span m='569720'>show</span> <span m='570710'>that</span>
  <span m='570940'>when--</span> <span m='571620'>so</span> <span
  m='571830'>I</span> <span m='571940'>didn't</span> <span m='572220'>use</span>
  <span m='572460'>partial</span> <span m='572880'>fractions.</span> <span
  m='574300'>Normally</span> <span m='575260'>I</span> <span
  m='575430'>would</span> <span m='575710'>separate</span> <span
  m='576350'>this</span> <span m='576590'>into</span> <span
  m='576840'>partial</span> <span m='577270'>fractions,</span> <span
  m='578230'>and</span> <span m='578410'>then</span> <span m='578610'>I</span>
  <span m='578690'>would</span> <span m='578930'>recognize</span> <span
  m='581310'>those</span> <span m='581630'>two</span> <span
  m='581850'>pieces</span> <span m='582440'>of</span> <span
  m='582580'>the</span> <span m='582740'>answer.</span> </p><p><span
  m='583670'>I</span> <span m='583780'>didn't</span> <span m='584110'>do</span>
  <span m='584290'>that</span> <span m='584590'>this</span> <span
  m='584830'>time.</span> <span m='585260'>Instead</span> <span
  m='585580'>of</span> <span m='585680'>using</span> <span
  m='586040'>partial</span> <span m='586480'>fractions,</span> <span
  m='587060'>the</span> <span m='587220'>algebra,</span> <span
  m='588200'>I</span> <span m='588340'>used</span> <span m='588730'>the</span>
  <span m='588880'>convolution</span> <span m='589720'>formula,</span> <span
  m='590550'>and</span> <span m='591240'>did</span> <span m='591530'>the</span>
  <span m='591670'>integral</span> <span m='594130'>or</span> <span
  m='594740'>almost</span> <span m='595190'>did</span> <span
  m='595400'>it.</span> <span m='596980'>We</span> <span m='597180'>can</span>
  <span m='597550'>do</span> <span m='597720'>it.</span> <span
  m='598180'>And</span> <span m='598450'>we</span> <span m='598560'>get</span>
  <span m='598790'>that</span> <span m='598980'>answer.</span> </p><p><span
  m='599860'>OK.</span> <span m='600990'>So</span> <span m='601500'>the</span>
  <span m='601800'>point</span> <span m='602130'>of</span> <span
  m='602210'>this</span> <span m='602440'>video</span> <span
  m='603020'>is</span> <span m='603130'>simply</span> <span m='606400'>to</span>
  <span m='606580'>introduce</span> <span m='607170'>the</span> <span
  m='607310'>idea</span> <span m='607640'>of</span> <span m='607740'>a</span>
  <span m='607840'>convolution,</span> <span m='609970'>which</span> <span
  m='610230'>is</span> <span m='612992'>the</span> <span
  m='613490'>quantity</span> <span m='614070'>we</span> <span
  m='614260'>need,</span> <span m='614590'>the</span> <span
  m='614690'>function</span> <span m='615190'>we</span> <span
  m='615350'>need,</span> <span m='616180'>when</span> <span
  m='616950'>the</span> <span m='617180'>transform</span> <span
  m='618170'>is</span> <span m='618380'>a</span> <span m='618480'>product</span>
  <span m='619040'>of</span> <span m='619160'>two</span> <span
  m='619540'>transforms.</span> <span m='621420'>OK.</span> <span
  m='622000'>Thank</span> <span m='622250'>you.</span> </p>
uid: e0a0f654df78e4ff92ef5f4ff4ff9eaf
type: courses
layout: video
---
