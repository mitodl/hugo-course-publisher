---
about_this_resource_text: >-
  <p><strong>Description:</strong> An eigenvalue / eigenvector pair leads to a
  solution to a constant coefficient system of differential equations.
  Combinations of those solutions lead to all solutions.</p> <p>Related section
  in <a href="http://www-math.mit.edu/~gs/dela/">textbook</a>: 6.3</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: iVlHPDER0FA
    parent_uid: 9cf2fcdf48fc41a0fb1d6260fd006813
    title: Video-YouTube-Stream
    type: Video
    uid: a4775d215bc76c77e200ae66725e7047
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/iVlHPDER0FA/default.jpg'
    parent_uid: 9cf2fcdf48fc41a0fb1d6260fd006813
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: fc750551be4c3c36b67f799f3c4d9572
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 9cf2fcdf48fc41a0fb1d6260fd006813
    title: Video-iTunes U-MP4
    type: Video
    uid: 98fc2c1a998c523faf71e0b19ae1ba84
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_6_3_SolvingLinearSystems_300k.mp4
    parent_uid: 9cf2fcdf48fc41a0fb1d6260fd006813
    title: Video-Internet Archive-MP4
    type: Video
    uid: 4000e38ca48d720fdae0354ab43dd8b2
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: iVlHPDER0FA
    parent_uid: 9cf2fcdf48fc41a0fb1d6260fd006813
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 507893dd4bb2f385656e803b9d740c49
  - id: iVlHPDER0FA.srt
    parent_uid: 9cf2fcdf48fc41a0fb1d6260fd006813
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/eigenvalues-and-eigenvectors/solving-linear-systems/iVlHPDER0FA.srt
    title: 3play caption file
    type: null
    uid: 4621e06cc6c5620000fccb57477f4f68
  - id: iVlHPDER0FA.pdf
    parent_uid: 9cf2fcdf48fc41a0fb1d6260fd006813
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/eigenvalues-and-eigenvectors/solving-linear-systems/iVlHPDER0FA.pdf
    title: 3play pdf file
    type: null
    uid: 6a9bddd5ea3e8fff1a674ab58959cebc
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 9cf2fcdf48fc41a0fb1d6260fd006813
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 4d986b9eb66152e2e9f8370ba09b5166
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 9cf2fcdf48fc41a0fb1d6260fd006813
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: bcfaa91098241daab57208e93e1331c7
inline_embed_id: 23574949solvinglinearsystems52855583
order_index: 431
parent_uid: eea80322d845c02f5a6079ba180150bd
related_resources_text: ''
short_url: solving-linear-systems
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/eigenvalues-and-eigenvectors/solving-linear-systems
title: Solving Linear Systems
transcript: >-
  <p><span m='2310'>GILBERT STRANG: So</span> <span m='3250'>this</span> <span
  m='3550'>is</span> <span m='3810'>the</span> <span m='4180'>key</span> <span
  m='5160'>video</span> <span m='5720'>about</span> <span
  m='6200'>solving</span> <span m='6860'>a</span> <span m='6990'>system</span>
  <span m='8029'>of</span> <span m='8260'>n</span> <span m='9490'>linear</span>
  <span m='10490'>constant</span> <span m='11020'>coefficient</span> <span
  m='11750'>equations.</span> <span m='13220'>So</span> <span
  m='13930'>how</span> <span m='14130'>do</span> <span m='14270'>I</span> <span
  m='14360'>write</span> <span m='14720'>those</span> <span
  m='14960'>equations?</span> <span m='16560'>Y</span> <span m='17350'>is</span>
  <span m='17560'>now</span> <span m='17910'>a</span> <span
  m='17960'>vector,</span> <span m='19460'>a</span> <span
  m='19570'>vector</span> <span m='19990'>with</span> <span m='20170'>n</span>
  <span m='20470'>components.</span> <span m='21630'>Instead</span> <span
  m='22010'>of</span> <span m='22100'>one</span> <span m='23060'>scalar,</span>
  <span m='23760'>just</span> <span m='24110'>a</span> <span
  m='24200'>single</span> <span m='24630'>number</span> <span
  m='25070'>y--</span> <span m='25480'>do</span> <span m='25710'>you</span>
  <span m='25870'>want</span> <span m='26010'>me</span> <span
  m='26130'>to</span> <span m='26240'>put</span> <span m='26420'>an</span> <span
  m='26570'>arrow</span> <span m='27060'>on</span> <span m='27390'>y?</span>
  <span m='28760'>No,</span> <span m='29640'>I</span> <span
  m='29750'>won't</span> <span m='30440'>repeat</span> <span m='30850'>it</span>
  <span m='30980'>again.</span> <span m='31600'>But</span> <span
  m='32340'>that's</span> <span m='32700'>to</span> <span
  m='32910'>emphasize</span> <span m='33650'>that</span> <span
  m='33800'>y</span> <span m='34710'>is</span> <span m='34900'>a</span> <span
  m='34970'>vector.</span> <span m='36640'>Its</span> <span
  m='37210'>first</span> <span m='37590'>derivative,</span> <span
  m='38200'>it's</span> <span m='38350'>a</span> <span m='38460'>first</span>
  <span m='38890'>order</span> <span m='39700'>system.</span> <span
  m='40156'>System</span> <span m='41070'>meaning</span> <span
  m='41570'>that</span> <span m='41900'>there</span> <span m='42490'>can</span>
  <span m='42770'>be</span> <span m='43290'>and</span> <span
  m='43570'>will</span> <span m='43800'>be</span> <span m='44360'>more</span>
  <span m='44660'>than</span> <span m='44900'>one</span> <span
  m='45650'>unknown,</span> <span m='46450'>y1,</span> <span
  m='47140'>y2,</span> <span m='47430'>to</span> <span m='47720'>yn.</span>
  </p><p><span m='49720'>So</span> <span m='50140'>how</span> <span
  m='50320'>do</span> <span m='50430'>we</span> <span m='50580'>solve</span>
  <span m='50940'>such</span> <span m='51240'>a</span> <span
  m='51340'>system?</span> <span m='52420'>Then</span> <span
  m='52630'>the</span> <span m='52710'>matrix</span> <span m='53350'>is</span>
  <span m='53510'>multiplying</span> <span m='54190'>that</span> <span
  m='54410'>y</span> <span m='55890'>and</span> <span m='56780'>they</span>
  <span m='56960'>equate.</span> <span m='57390'>The</span> <span
  m='57560'>y's</span> <span m='58050'>are</span> <span m='58200'>coupled</span>
  <span m='58620'>together</span> <span m='59060'>by</span> <span
  m='59290'>that</span> <span m='59570'>matrix.</span> <span
  m='60760'>They're</span> <span m='60950'>coupled</span> <span
  m='61320'>together,</span> <span m='61820'>and</span> <span
  m='61910'>how</span> <span m='62150'>do</span> <span m='62270'>we</span> <span
  m='62460'>uncouple</span> <span m='63300'>them?</span> <span
  m='64099'>That</span> <span m='64480'>is</span> <span m='64680'>the</span>
  <span m='64790'>magic</span> <span m='65300'>of</span> <span
  m='65450'>eigenvalues</span> <span m='66370'>and</span> <span
  m='66560'>eigenvectors.</span> </p><p><span m='69070'>Eigenvectors</span>
  <span m='70510'>are</span> <span m='70730'>vectors</span> <span
  m='71500'>that</span> <span m='71810'>go</span> <span m='73210'>in</span>
  <span m='73410'>their</span> <span m='73630'>own</span> <span
  m='73940'>way.</span> <span m='75330'>So</span> <span m='75530'>when</span>
  <span m='75730'>you</span> <span m='76340'>have</span> <span
  m='76570'>an</span> <span m='76710'>eigenvector,</span> <span
  m='77920'>it's</span> <span m='78150'>like</span> <span m='78430'>you</span>
  <span m='78560'>have</span> <span m='78730'>a</span> <span
  m='78830'>one</span> <span m='79100'>by</span> <span m='79270'>one</span>
  <span m='79610'>problem</span> <span m='80470'>and</span> <span
  m='80900'>the</span> <span m='82470'>a</span> <span m='83030'>becomes</span>
  <span m='83570'>just</span> <span m='83910'>a</span> <span
  m='84010'>number,</span> <span m='84580'>lambda.</span> <span
  m='85840'>So</span> <span m='86070'>for</span> <span m='86280'>a</span> <span
  m='86340'>general</span> <span m='87200'>vector,</span> <span
  m='89400'>everything</span> <span m='89840'>is</span> <span m='90040'>a</span>
  <span m='90270'>mixed</span> <span m='90680'>together.</span> <span
  m='91700'>But</span> <span m='92070'>for</span> <span m='92350'>an</span>
  <span m='92440'>eigenvector,</span> <span m='94030'>everything</span> <span
  m='94580'>stays</span> <span m='95950'>one</span> <span
  m='96230'>dimensional.</span> <span m='98510'>The</span> <span
  m='99030'>a</span> <span m='99430'>changes</span> <span m='100080'>just</span>
  <span m='100400'>to a</span> <span m='100550'>lambda</span> <span
  m='101390'>for</span> <span m='101540'>that</span> <span
  m='102360'>special</span> <span m='102970'>direction.</span> </p><p><span
  m='105450'>And</span> <span m='105720'>of</span> <span
  m='105810'>course,</span> <span m='106280'>as</span> <span
  m='106500'>always,</span> <span m='107060'>we</span> <span
  m='107200'>need</span> <span m='108200'>n</span> <span m='108650'>of</span>
  <span m='108820'>those</span> <span m='109140'>eigenvectors</span> <span
  m='110650'>because</span> <span m='111270'>we</span> <span
  m='111480'>want</span> <span m='111770'>to</span> <span m='111870'>take</span>
  <span m='112230'>the</span> <span m='113170'>starting</span> <span
  m='113670'>value.</span> <span m='114370'>Just</span> <span
  m='114700'>as</span> <span m='114840'>we</span> <span m='115010'>did</span>
  <span m='115270'>for</span> <span m='115450'>powers,</span> <span
  m='116320'>we're</span> <span m='116500'>doing</span> <span
  m='116790'>it</span> <span m='116910'>now</span> <span m='117220'>for</span>
  <span m='118560'>differential</span> <span m='119120'>equations.</span> <span
  m='120790'>I</span> <span m='120960'>take</span> <span m='121320'>my</span>
  <span m='121480'>starting</span> <span m='122040'>vector,</span> <span
  m='123220'>which</span> <span m='123470'>is</span> <span
  m='123590'>probably</span> <span m='123980'>not</span> <span
  m='124250'>an</span> <span m='124420'>eigenvector.</span> <span
  m='125580'>I'd</span> <span m='125850'>make</span> <span m='126130'>it</span>
  <span m='126310'>a</span> <span m='126390'>combination</span> <span
  m='127330'>of</span> <span m='127460'>eigenvectors.</span> <span
  m='128850'>And</span> <span m='129060'>I'm</span> <span m='129240'>OK</span>
  <span m='129699'>because</span> <span m='130139'>I'm</span> <span
  m='130350'>assuming</span> <span m='130850'>that</span> <span
  m='131030'>I</span> <span m='131180'>have</span> <span m='131700'>n</span>
  <span m='132170'>independent</span> <span m='132890'>eigenvectors.</span>
  </p><p><span m='134950'>And</span> <span m='135250'>now</span> <span
  m='135790'>I</span> <span m='135950'>follow</span> <span
  m='136520'>each</span> <span m='138830'>starting</span> <span
  m='139390'>value</span> <span m='139840'>c1</span> <span
  m='140640'>x1--</span> <span m='142140'>what</span> <span
  m='142360'>does</span> <span m='142540'>that</span> <span
  m='142780'>have?</span> <span m='143300'>What</span> <span
  m='143620'>happens</span> <span m='144340'>if</span> <span
  m='145400'>I'm</span> <span m='145620'>in</span> <span m='145740'>the</span>
  <span m='145870'>direction</span> <span m='146380'>of</span> <span
  m='146490'>x1,</span> <span m='148010'>then</span> <span m='149030'>all</span>
  <span m='149660'>the</span> <span m='151770'>messiness</span> <span
  m='152800'>of</span> <span m='153000'>A</span> <span
  m='153770'>disappears.</span> <span m='155330'>It</span> <span
  m='155530'>acts</span> <span m='155960'>just</span> <span
  m='156260'>like</span> <span m='156540'>lambda</span> <span
  m='157050'>1</span> <span m='158110'>on</span> <span m='158420'>that</span>
  <span m='158920'>vector</span> <span m='159410'>x1.</span> <span
  m='160740'>Here's</span> <span m='161010'>what</span> <span
  m='161190'>you</span> <span m='161330'>get.</span> <span m='161940'>You</span>
  <span m='162080'>get</span> <span m='162290'>c1,</span> <span
  m='162980'>that's</span> <span m='163310'>just</span> <span
  m='163600'>a</span> <span m='163670'>number,</span> <span
  m='164940'>times</span> <span m='165450'>e</span> <span m='166180'>to</span>
  <span m='166380'>the</span> <span m='166540'>lambda</span> <span
  m='167100'>1t</span> <span m='168586'>x1.</span> <span m='171220'>You</span>
  <span m='171400'>see</span> <span m='171640'>there,</span> <span
  m='171830'>instead</span> <span m='172290'>of</span> <span
  m='172480'>powers,</span> <span m='174440'>which</span> <span
  m='174560'>we</span> <span m='174720'>had--</span> <span
  m='175420'>that</span> <span m='175720'>we</span> <span m='175870'>had</span>
  <span m='176110'>lambda</span> <span m='176590'>1</span> <span
  m='176890'>to</span> <span m='177020'>the</span> <span m='177170'>kth</span>
  <span m='177650'>power</span> <span m='178500'>when</span> <span
  m='178780'>we</span> <span m='178890'>were</span> <span
  m='179060'>doing</span> <span m='179780'>powers</span> <span
  m='180290'>of</span> <span m='180430'>a</span> <span m='180480'>matrix,</span>
  <span m='181380'>now</span> <span m='181630'>we're</span> <span
  m='181770'>solving</span> <span m='182240'>differential</span> <span
  m='182900'>equations.</span> <span m='183900'>So</span> <span
  m='183990'>we</span> <span m='184120'>get</span> <span m='184290'>an e</span>
  <span m='184460'>to</span> <span m='184930'>the</span> <span
  m='185080'>lambda</span> <span m='185490'>1t.</span> </p><p><span
  m='186620'>And</span> <span m='186840'>of</span> <span
  m='186960'>course,</span> <span m='188410'>next</span> <span
  m='189930'>by</span> <span m='190310'>superposition,</span> <span
  m='191330'>I</span> <span m='191430'>can</span> <span m='191660'>add</span>
  <span m='191980'>on</span> <span m='192600'>the</span> <span
  m='192730'>solution</span> <span m='193290'>for</span> <span
  m='193430'>that</span> <span m='193700'>one,</span> <span
  m='194360'>which</span> <span m='194630'>is</span> <span m='194880'>e</span>
  <span m='195320'>to</span> <span m='195470'>the</span> <span
  m='195600'>lambda</span> <span m='196180'>2t</span> <span m='197640'>x2</span>
  <span m='198530'>plus</span> <span m='198920'>so</span> <span
  m='199035'>on,</span> <span m='199530'>plus</span> <span m='200580'>cne</span>
  <span m='202780'>to</span> <span m='202910'>the</span> <span
  m='203070'>lambda</span> <span m='203560'>nt</span> <span
  m='205400'>xn.</span> <span m='208270'>You</span> <span m='208440'>can</span>
  <span m='208620'>see</span> <span m='208970'>when,</span> <span
  m='209930'>I</span> <span m='210160'>could</span> <span m='210390'>ask,</span>
  <span m='210670'>when</span> <span m='210910'>is</span> <span
  m='211060'>this</span> <span m='211330'>stable?</span> <span
  m='212250'>When</span> <span m='212520'>do</span> <span m='212590'>the</span>
  <span m='212740'>solutions</span> <span m='213390'>go</span> <span
  m='213590'>to</span> <span m='213690'>0?</span> <span m='214380'>Well,</span>
  <span m='215070'>as</span> <span m='215550'>t</span> <span
  m='215890'>gets</span> <span m='216160'>large,</span> <span
  m='218330'>this</span> <span m='218920'>number</span> <span
  m='219580'>will</span> <span m='219850'>go</span> <span m='220040'>to</span>
  <span m='220150'>0,</span> <span m='220610'>provided</span> <span
  m='221640'>lambda</span> <span m='222140'>1</span> <span m='223020'>is</span>
  <span m='223240'>negative.</span> <span m='224350'>Or</span> <span
  m='224830'>provided</span> <span m='225500'>its</span> <span
  m='225890'>real</span> <span m='226390'>part</span> <span m='226900'>is</span>
  <span m='227100'>negative.</span> <span m='228530'>We</span> <span
  m='228680'>can</span> <span m='229350'>understand</span> <span
  m='229940'>everything</span> <span m='230820'>from</span> <span
  m='231050'>this</span> <span m='232280'>piece</span> <span
  m='232630'>by</span> <span m='232820'>piece</span> <span
  m='233190'>formula.</span> </p><p><span m='234910'>Let</span> <span
  m='235030'>me</span> <span m='235150'>just</span> <span m='235390'>do</span>
  <span m='235560'>an</span> <span m='235660'>example.</span> <span
  m='237260'>Take</span> <span m='237520'>a</span> <span
  m='237590'>matrix</span> <span m='238110'>A.</span> <span m='241110'>In
  the</span> <span m='243510'>powers</span> <span m='244030'>of</span> <span
  m='244150'>a</span> <span m='244230'>matrix--</span> <span
  m='246560'>in</span> <span m='246670'>that</span> <span
  m='246840'>video</span> <span m='247290'>I</span> <span m='247410'>took</span>
  <span m='247710'>a</span> <span m='247820'>Markov</span> <span
  m='248360'>matrix--</span> <span m='249120'>let</span> <span
  m='249330'>me</span> <span m='249500'>take</span> <span m='249820'>here</span>
  <span m='252360'>the</span> <span m='252520'>equivalent</span> <span
  m='253270'>for</span> <span m='253430'>differential</span> <span
  m='254060'>equations.</span> <span m='254690'>So</span> <span
  m='254760'>this</span> <span m='254940'>will</span> <span
  m='257940'>give</span> <span m='258149'>us</span> <span m='258300'>a</span>
  <span m='258390'>Markov</span> <span m='259310'>differential</span> <span
  m='259970'>equation.</span> <span m='260829'>So</span> <span
  m='261209'>let</span> <span m='261459'>me</span> <span m='261589'>take</span>
  <span m='261880'>A</span> <span m='262210'>now.</span> </p><p><span
  m='266660'>The</span> <span m='266880'>columns</span> <span
  m='267480'>of</span> <span m='267620'>a</span> <span m='267690'>Markov</span>
  <span m='268250'>matrix</span> <span m='268820'>add</span> <span
  m='269290'>to</span> <span m='269420'>1</span> <span m='270360'>but</span>
  <span m='270560'>in</span> <span m='270730'>the</span> <span
  m='270860'>differential</span> <span m='271580'>equation</span> <span
  m='273000'>situation,</span> <span m='274010'>they'll</span> <span
  m='274470'>add</span> <span m='274850'>to</span> <span m='274950'>0.</span>
  <span m='275830'>Like</span> <span m='276280'>minus</span> <span
  m='276770'>1</span> <span m='277080'>and</span> <span m='277280'>1,</span>
  <span m='278210'>or</span> <span m='278490'>like</span> <span
  m='278850'>minus</span> <span m='279350'>2</span> <span m='279820'>and
  2.</span> <span m='281790'>So</span> <span m='282310'>there</span> <span
  m='282670'>is</span> <span m='287250'>the</span> <span
  m='288050'>eigenvalue</span> <span m='288890'>of</span> <span
  m='289020'>1</span> <span m='290390'>for</span> <span m='290730'>our</span>
  <span m='292040'>powers</span> <span m='293450'>is</span> <span
  m='293670'>like</span> <span m='293980'>the</span> <span
  m='294180'>eigenvalue</span> <span m='295320'>0</span> <span
  m='296270'>for</span> <span m='298090'>differential</span> <span
  m='298640'>equations.</span> <span m='299370'>Because</span> <span
  m='299650'>e</span> <span m='300040'>to</span> <span m='300170'>the</span>
  <span m='300310'>0t</span> <span m='301360'>is</span> <span
  m='301550'>1.</span> </p><p><span m='302400'>So</span> <span
  m='302810'>anyway,</span> <span m='303230'>let's</span> <span
  m='303470'>find</span> <span m='303740'>the</span> <span
  m='303870'>eigenvalues</span> <span m='304500'>of</span> <span
  m='304620'>that.</span> <span m='305240'>The</span> <span
  m='305360'>first</span> <span m='305730'>eigenvalue</span> <span
  m='306430'>is</span> <span m='306620'>0.</span> <span m='308220'>That's</span>
  <span m='308450'>what</span> <span m='308660'>I'm</span> <span
  m='309110'>interested</span> <span m='309740'>in.</span> <span
  m='310160'>That</span> <span m='310400'>column</span> <span
  m='310810'>adds</span> <span m='311060'>to</span> <span m='311180'>0,</span>
  <span m='311550'>that</span> <span m='311770'>column</span> <span
  m='312140'>adds</span> <span m='312400'>to</span> <span m='312440'>0.</span>
  <span m='312830'>That</span> <span m='313060'>tells</span> <span
  m='313320'>me</span> <span m='313510'>there's</span> <span
  m='313760'>an</span> <span m='313920'>eigenvalue</span> <span
  m='314700'>of</span> <span m='314820'>0.</span> </p><p><span
  m='315560'>And</span> <span m='315890'>what's</span> <span
  m='316210'>its</span> <span m='316440'>eigenvector?</span> <span
  m='320120'>Probably</span> <span m='320770'>2,</span> <span
  m='321740'>1</span> <span m='324310'>because</span> <span m='324680'>if</span>
  <span m='324830'>I</span> <span m='324930'>multiply</span> <span
  m='325380'>that</span> <span m='325630'>matrix</span> <span
  m='326480'>by</span> <span m='326630'>that</span> <span
  m='326900'>vector,</span> <span m='327800'>I</span> <span
  m='327930'>get</span> <span m='328140'>0.</span> <span m='329050'>So</span>
  <span m='329240'>lambda</span> <span m='329680'>1</span> <span
  m='329930'>is</span> <span m='330090'>0.</span> <span m='330900'>And</span>
  <span m='331150'>my</span> <span m='331350'>second</span> <span
  m='331980'>eigenvalue,</span> <span m='334200'>well</span> <span
  m='334530'>the</span> <span m='334750'>trace</span> <span m='335310'>is</span>
  <span m='335500'>minus</span> <span m='336090'>3</span> <span
  m='337740'>and</span> <span m='339090'>the</span> <span
  m='339540'>lambda</span> <span m='339960'>1</span> <span
  m='340550'>plus</span> <span m='340870'>lambda</span> <span
  m='341270'>2</span> <span m='341750'>must</span> <span m='342040'>give</span>
  <span m='342230'>minus</span> <span m='342720'>3.</span> <span
  m='343520'>And</span> <span m='343890'>its</span> <span
  m='344180'>eigenvector</span> <span m='345240'>is--</span> <span
  m='346550'>it's</span> <span m='346750'>probably</span> <span
  m='347400'>1</span> <span m='347760'>minus</span> <span m='348230'>1</span>
  <span m='348460'>again.</span> </p><p><span m='352110'>So</span> <span
  m='352260'>I've</span> <span m='352400'>done</span> <span
  m='352680'>the</span> <span m='353210'>preliminary</span> <span
  m='353900'>work.</span> <span m='355420'>Given</span> <span
  m='355810'>this</span> <span m='356060'>matrix,</span> <span
  m='357280'>we've</span> <span m='357480'>got</span> <span
  m='357700'>the</span> <span m='357840'>eigenvalues</span> <span
  m='358550'>and</span> <span m='358710'>eigenvectors.</span> <span
  m='359640'>Now</span> <span m='360110'>I</span> <span m='360310'>take</span>
  <span m='360810'>u0--</span> <span m='361600'>what</span> <span
  m='361850'>should</span> <span m='361970'>we</span> <span
  m='362120'>say</span> <span m='362420'>for</span> <span m='362610'>u0?</span>
  <span m='363670'>U0--</span> <span m='364920'>y0,</span> <span
  m='365850'>say</span> <span m='366070'>y</span> <span m='366430'>of</span>
  <span m='366600'>0</span> <span m='367360'>to</span> <span
  m='367580'>start.</span> <span m='371170'>Y</span> <span m='371480'>of</span>
  <span m='371600'>0</span> <span m='372200'>as</span> <span
  m='373360'>some</span> <span m='373680'>number</span> <span
  m='374120'>c1</span> <span m='375080'>times</span> <span m='375460'>x1</span>
  <span m='376300'>plus</span> <span m='376990'>c2</span> <span
  m='377860'>times</span> <span m='378240'>x2.</span> <span
  m='379310'>Yes,</span> <span m='379990'>no</span> <span
  m='380230'>problem,</span> <span m='381500'>no</span> <span
  m='381680'>problem.</span> <span m='382330'>Whatever</span> <span
  m='383390'>we</span> <span m='383690'>have,</span> <span m='385290'>we</span>
  <span m='385590'>take</span> <span m='385880'>this--</span> <span
  m='387210'>some</span> <span m='387510'>combination</span> <span
  m='388160'>of</span> <span m='388270'>that</span> <span
  m='388570'>vector</span> <span m='389390'>and</span> <span
  m='389620'>that</span> <span m='390190'>eigenvector</span> <span
  m='390870'>will</span> <span m='391140'>give</span> <span m='391370'>us</span>
  <span m='391580'>y</span> <span m='391880'>of</span> <span
  m='391980'>0.</span> </p><p><span m='392930'>And</span> <span
  m='393170'>now</span> <span m='394180'>the</span> <span m='394770'>y</span>
  <span m='395060'>of</span> <span m='395300'>t</span> <span
  m='396190'>is</span> <span m='399780'>c1</span> <span m='401780'>e</span>
  <span m='402590'>to</span> <span m='402760'>the</span> <span
  m='402910'>0t--</span> <span m='404372'>e</span> <span m='404840'>to</span>
  <span m='404990'>the</span> <span m='405200'>lambda</span> <span
  m='405750'>1t</span> <span m='407150'>times</span> <span m='408050'>x1,</span>
  <span m='409430'>right?</span> <span m='410450'>You</span> <span
  m='410610'>see,</span> <span m='410870'>we</span> <span
  m='411060'>started</span> <span m='411480'>with</span> <span
  m='411660'>c1x1</span> <span m='413170'>but</span> <span
  m='413340'>after</span> <span m='413595'>a</span> <span m='413850'>time</span>
  <span m='414330'>t,</span> <span m='414970'>it's</span> <span
  m='415190'>either</span> <span m='415460'>the</span> <span
  m='415610'>lambda</span> <span m='416060'>t</span> <span m='416880'>and</span>
  <span m='417200'>here's</span> <span m='417560'>c2.</span> <span
  m='419156'>E</span> <span m='419570'>to</span> <span m='419780'>the</span>
  <span m='420010'>lambda</span> <span m='420520'>2</span> <span
  m='420980'>is</span> <span m='421150'>minus</span> <span m='421820'>3t</span>
  <span m='423620'>x2.</span> <span m='426510'>That's</span> <span
  m='427040'>the</span> <span m='429240'>evolution</span> <span
  m='430510'>of</span> <span m='430720'>a</span> <span m='430810'>Markov</span>
  <span m='431610'>process,</span> <span m='432250'>a</span> <span
  m='432360'>continuous</span> <span m='433140'>Markov</span> <span
  m='433520'>process.</span> <span m='434930'>Compared</span> <span
  m='435410'>to</span> <span m='435500'>the</span> <span
  m='436110'>powers</span> <span m='436610'>of</span> <span m='436750'>a</span>
  <span m='436820'>matrix,</span> <span m='437920'>this</span> <span
  m='438110'>is</span> <span m='438290'>a</span> <span
  m='438400'>continuous</span> <span m='439810'>evolving</span> <span
  m='440780'>evolution</span> <span m='441880'>of</span> <span
  m='443010'>this</span> <span m='443430'>vector.</span> </p><p><span
  m='445000'>Now,</span> <span m='447210'>I'm</span> <span
  m='447440'>interested</span> <span m='447950'>in</span> <span
  m='448140'>steady</span> <span m='448590'>state.</span> <span
  m='449740'>Steady</span> <span m='450180'>state</span> <span
  m='451230'>is</span> <span m='452020'>what</span> <span
  m='452390'>happens</span> <span m='453230'>as</span> <span m='453590'>t</span>
  <span m='454030'>gets</span> <span m='454280'>large.</span> <span
  m='455920'>As</span> <span m='456160'>t</span> <span m='456390'>gets</span>
  <span m='456650'>large,</span> <span m='457720'>that</span> <span
  m='458040'>number</span> <span m='458890'>goes</span> <span
  m='459170'>quickly</span> <span m='459580'>to</span> <span
  m='459690'>0.</span> <span m='460700'>In</span> <span m='461480'>our</span>
  <span m='461840'>Markov</span> <span m='462480'>matrix</span> <span
  m='463030'>example,</span> <span m='463620'>we</span> <span
  m='463770'>had</span> <span m='464040'>1/2</span> <span m='465300'>to</span>
  <span m='465470'>a</span> <span m='465550'>power,</span> <span
  m='466270'>and</span> <span m='466440'>that</span> <span
  m='466650'>went</span> <span m='466890'>quickly</span> <span
  m='467290'>to</span> <span m='467390'>0.</span> <span m='467980'>Now</span>
  <span m='468230'>we</span> <span m='468340'>have</span> <span
  m='468550'>the</span> <span m='468700'>exponential</span> <span
  m='470260'>with</span> <span m='470440'>a</span> <span m='470550'>minus</span>
  <span m='471050'>3,</span> <span m='471680'>that</span> <span
  m='471960'>goes</span> <span m='472260'>to</span> <span
  m='472350'>zero.</span> <span m='474300'>E</span> <span m='474610'>to</span>
  <span m='474710'>the</span> <span m='474850'>0t</span> <span
  m='475530'>is</span> <span m='475690'>the</span> <span m='475820'>1.</span>
  <span m='477260'>This</span> <span m='477720'>e to</span> <span
  m='478080'>the</span> <span m='478140'>0t</span> <span
  m='479460'>equals</span> <span m='479890'>1.</span> <span m='481960'>So</span>
  <span m='482190'>that</span> <span m='482550'>1</span> <span
  m='482930'>is</span> <span m='483080'>the</span> <span
  m='483230'>signal</span> <span m='483720'>of</span> <span m='483870'>a</span>
  <span m='483950'>steady</span> <span m='484350'>state.</span> <span
  m='485230'>Nothing</span> <span m='485710'>changing,</span> <span
  m='486470'>nothing</span> <span m='486950'>really</span> <span
  m='487320'>depending</span> <span m='487840'>on</span> <span
  m='488040'>time,</span> <span m='488400'>just</span> <span
  m='488630'>sits</span> <span m='488980'>there.</span> <span
  m='489730'>So</span> <span m='489900'>I have</span> <span
  m='490100'>c1x1</span> <span m='493310'>is</span> <span m='493660'>the</span>
  <span m='494200'>steady</span> <span m='494670'>state.</span> </p><p><span
  m='499820'>And</span> <span m='500150'>x1</span> <span m='501190'>was</span>
  <span m='501450'>this.</span> <span m='502840'>So</span> <span
  m='502980'>what</span> <span m='503180'>am</span> <span m='503320'>I</span>
  <span m='503500'>thinking?</span> <span m='505640'>I'm</span> <span
  m='505860'>thinking</span> <span m='506330'>that</span> <span
  m='507070'>no</span> <span m='507350'>matter</span> <span
  m='507690'>how</span> <span m='507840'>you</span> <span
  m='508020'>start,</span> <span m='509220'>no</span> <span
  m='509500'>matter</span> <span m='509890'>what</span> <span
  m='510150'>y</span> <span m='510430'>of</span> <span m='510540'>0</span> <span
  m='511020'>is,</span> <span m='512230'>as</span> <span m='513049'>time</span>
  <span m='513380'>goes</span> <span m='513690'>on,</span> <span
  m='514760'>the</span> <span m='514929'>x2</span> <span m='515450'>part</span>
  <span m='515890'>is</span> <span m='516059'>going</span> <span
  m='516230'>to</span> <span m='516320'>disappear.</span> <span
  m='517830'>And</span> <span m='518070'>if</span> <span m='518190'>you</span>
  <span m='518480'>only</span> <span m='518780'>have</span> <span
  m='519000'>the</span> <span m='519140'>x1</span> <span m='519679'>part</span>
  <span m='520970'>in</span> <span m='521159'>that</span> <span
  m='521370'>ratio</span> <span m='521880'>2:1.</span> <span
  m='523250'>So</span> <span m='523480'>again,</span> <span m='523900'>if</span>
  <span m='524520'>we</span> <span m='524690'>had</span> <span
  m='524950'>movement</span> <span m='527640'>between</span> <span
  m='528200'>Y1</span> <span m='529160'>Y2</span> <span m='529960'>or</span>
  <span m='530220'>we</span> <span m='530400'>have</span> <span
  m='530780'>things</span> <span m='531140'>evolving</span> <span
  m='531830'>in</span> <span m='532010'>time,</span> <span m='532830'>the</span>
  <span m='533020'>steady</span> <span m='533470'>state</span> <span
  m='534160'>is--</span> <span m='535310'>this</span> <span m='535810'>is</span>
  <span m='536200'>the</span> <span m='536920'>steady</span> <span
  m='540820'>state.</span> </p><p><span m='546470'>There</span> <span
  m='546700'>is</span> <span m='546800'>an</span> <span
  m='546940'>example</span> <span m='547790'>of</span> <span m='547980'>a</span>
  <span m='548480'>differential</span> <span m='549060'>equation,</span> <span
  m='549910'>happen</span> <span m='550310'>to</span> <span
  m='550400'>have</span> <span m='550650'>a</span> <span
  m='550730'>Markov</span> <span m='551360'>matrix.</span> <span
  m='552420'>And</span> <span m='552850'>with</span> <span m='553080'>a</span>
  <span m='553170'>Markov</span> <span m='553650'>matrix,</span> <span
  m='555020'>then</span> <span m='555330'>we</span> <span m='555490'>know</span>
  <span m='556220'>that</span> <span m='556400'>we'll</span> <span
  m='556590'>have</span> <span m='556790'>an</span> <span
  m='556930'>eigenvalue</span> <span m='557630'>of</span> <span
  m='557720'>-</span> <span m='558900'>in</span> <span m='559100'>the</span>
  <span m='559680'>continuous</span> <span m='560460'>case</span> <span
  m='561290'>and</span> <span m='561920'>a</span> <span
  m='562040'>negative</span> <span m='562580'>eigenvalue</span> <span
  m='564110'>that</span> <span m='564430'>will</span> <span
  m='565890'>disappear</span> <span m='566630'>as</span> <span
  m='566760'>time</span> <span m='567080'>goes</span> <span
  m='567530'>forward.</span> <span m='568050'>E</span> <span
  m='568310'>to</span> <span m='568400'>the</span> <span m='568500'>minus</span>
  <span m='568910'>3t</span> <span m='569480'>goes</span> <span
  m='569790'>to</span> <span m='569890'>0.</span> <span m='570980'>Good.</span>
  </p><p><span m='572020'>I</span> <span m='572180'>guess</span> <span
  m='573930'>I</span> <span m='574030'>might</span> <span m='574320'>just</span>
  <span m='574590'>add</span> <span m='574920'>a</span> <span
  m='575010'>little</span> <span m='575290'>bit</span> <span
  m='576440'>to</span> <span m='576600'>this</span> <span
  m='576940'>video,</span> <span m='578370'>which</span> <span
  m='578510'>is</span> <span m='578720'>to</span> <span
  m='578870'>explain</span> <span m='579530'>why</span> <span
  m='580040'>is</span> <span m='581630'>0</span> <span m='582340'>an</span>
  <span m='582540'>eigenvalue</span> <span m='584380'>when</span> <span
  m='585420'>whenever--</span> <span m='586570'>if</span> <span
  m='587110'>the</span> <span m='587250'>columns</span> <span
  m='587780'>added</span> <span m='588220'>to</span> <span m='588370'>0,</span>
  <span m='589300'>minus</span> <span m='589630'>1</span> <span
  m='589840'>plus</span> <span m='590090'>1</span> <span m='590330'>is</span>
  <span m='590490'>0.</span> <span m='591290'>2</span> <span
  m='591560'>minus</span> <span m='591930'>2</span> <span m='592180'>is</span>
  <span m='592340'>zero.</span> <span m='593000'>That</span> <span
  m='593260'>tells</span> <span m='593500'>me</span> <span m='593690'>0
  is</span> <span m='594190'>an</span> <span m='594360'>eigenvalue.</span> <span
  m='595820'>For a</span> <span m='596020'>Markov</span> <span
  m='596650'>matrix</span> <span m='597720'>empowers</span> <span
  m='599030'>the</span> <span m='599170'>columns</span> <span
  m='599650'>added</span> <span m='600010'>to</span> <span m='600140'>1</span>
  <span m='600980'>and</span> <span m='601230'>1</span> <span
  m='601540'>was</span> <span m='601770'>an</span> <span
  m='601960'>eigenvalue.</span> </p><p><span m='602710'>So</span> <span
  m='602910'>I</span> <span m='603060'>guess</span> <span m='604831'>I</span>
  <span m='605290'>have</span> <span m='605740'>now</span> <span
  m='606090'>two</span> <span m='606990'>examples</span> <span
  m='607750'>of</span> <span m='607910'>the</span> <span
  m='608030'>following</span> <span m='608530'>fact.</span> <span
  m='609410'>That</span> <span m='609650'>if</span> <span m='612130'>all</span>
  <span m='613890'>columns</span> <span m='617268'>add</span> <span
  m='618200'>to</span> <span m='619540'>some--</span> <span
  m='620930'>what</span> <span m='621140'>shall</span> <span m='621330'>I</span>
  <span m='621470'>say</span> <span m='621800'>for</span> <span
  m='621970'>the</span> <span m='622110'>sum,</span> <span m='622720'>s</span>
  <span m='623190'>for</span> <span m='623380'>the</span> <span
  m='623540'>sum--</span> <span m='625160'>then</span> <span
  m='627670'>lambda</span> <span m='628290'>equal</span> <span
  m='628780'>s</span> <span m='629660'>is</span> <span m='630540'>an</span>
  <span m='631560'>eigenvalue.</span> <span m='637950'>That</span> <span
  m='638140'>was</span> <span m='638930'>the</span> <span
  m='639380'>point</span> <span m='640230'>from</span> <span
  m='640490'>Markov</span> <span m='640940'>matrices,</span> <span
  m='641900'>s</span> <span m='642280'>was</span> <span m='642590'>1.</span>
  <span m='643050'>Every</span> <span m='643360'>column</span> <span
  m='643780'>added</span> <span m='644100'>to</span> <span m='644210'>1</span>
  <span m='645080'>and</span> <span m='645320'>then</span> <span
  m='645640'>lambda</span> <span m='646070'>equal</span> <span
  m='646430'>1</span> <span m='646730'>was</span> <span m='646920'>an</span>
  <span m='647080'>eigenvalue.</span> <span m='648170'>And</span> <span
  m='648390'>for</span> <span m='648510'>this</span> <span
  m='648820'>video,</span> <span m='649560'>every</span> <span
  m='649860'>column</span> <span m='650250'>added</span> <span
  m='650580'>to</span> <span m='650690'>0</span> <span m='651510'>and</span>
  <span m='651680'>then</span> <span m='651870'>lambda</span> <span
  m='652210'>equal</span> <span m='652550'>0</span> <span m='652930'>was</span>
  <span m='653140'>an</span> <span m='653290'>eigenvalue.</span> </p><p><span
  m='654960'>And</span> <span m='655160'>also,</span> <span
  m='657000'>this</span> <span m='657320'>is</span> <span
  m='657540'>another</span> <span m='658010'>point</span> <span
  m='658300'>about</span> <span m='658590'>eigenvalues,</span> <span
  m='659300'>good</span> <span m='659540'>to</span> <span
  m='659620'>make.</span> <span m='660840'>The</span> <span
  m='661020'>eigenvalues</span> <span m='661830'>of</span> <span
  m='661980'>a</span> <span m='662160'>transpose</span> <span
  m='663590'>are</span> <span m='663720'>the</span> <span m='663870'>same</span>
  <span m='664240'>as</span> <span m='664370'>the</span> <span
  m='664530'>eigenvalues</span> <span m='665200'>of</span> <span
  m='665330'>A.</span> <span m='665700'>So</span> <span m='665930'>I</span>
  <span m='666100'>could</span> <span m='666340'>also</span> <span
  m='666700'>say</span> <span m='667430'>if</span> <span m='668500'>all</span>
  <span m='669830'>rows</span> <span m='672110'>of</span> <span
  m='672470'>A</span> <span m='673450'>add</span> <span m='673940'>to</span>
  <span m='674295'>s,</span> <span m='677460'>then</span> <span
  m='681460'>lambda</span> <span m='681760'>equal</span> <span
  m='682080'>s</span> <span m='682500'>is</span> <span m='682730'>an</span>
  <span m='682880'>eigenvalue.</span> <span m='686440'>I'm</span> <span
  m='686910'>saying</span> <span m='687390'>that</span> <span
  m='687610'>the</span> <span m='687780'>eigenvalues</span> <span
  m='688630'>of</span> <span m='688720'>a</span> <span m='688810'>matrix</span>
  <span m='689990'>and</span> <span m='690210'>the</span> <span
  m='690340'>eigenvalues</span> <span m='691020'>of</span> <span
  m='691130'>the</span> <span m='691270'>transpose</span> <span
  m='692200'>are</span> <span m='692370'>the</span> <span
  m='692520'>same.</span> <span m='693320'>And</span> <span
  m='693660'>maybe</span> <span m='693970'>you</span> <span
  m='694100'>would</span> <span m='694260'>like</span> <span
  m='694500'>to</span> <span m='694620'>just</span> <span m='694830'>see</span>
  <span m='695110'>why</span> <span m='695370'>that's</span> <span
  m='695710'>true.</span> </p><p><span m='697560'>If</span> <span
  m='697660'>I</span> <span m='697780'>want</span> <span m='698030'>the</span>
  <span m='698200'>eigenvalues</span> <span m='699020'>of</span> <span
  m='699130'>a</span> <span m='699200'>matrix,</span> <span m='700320'>I</span>
  <span m='700480'>look</span> <span m='700780'>at</span> <span
  m='700930'>the</span> <span m='701060'>determinant</span> <span
  m='701650'>of</span> <span m='701820'>lambda</span> <span m='702270'>I</span>
  <span m='702470'>minus</span> <span m='702880'>A.</span> <span
  m='703960'>That</span> <span m='704180'>gives</span> <span
  m='704390'>me</span> <span m='704720'>eigenvalues</span> <span
  m='705370'>of</span> <span m='705470'>A.</span> <span m='706330'>If</span>
  <span m='706540'>I</span> <span m='706640'>want</span> <span
  m='706900'>the</span> <span m='707070'>eigenvalues</span> <span
  m='707770'>of</span> <span m='707890'>a</span> <span
  m='708040'>transpose,</span> <span m='711000'>I</span> <span
  m='711190'>would</span> <span m='711410'>look</span> <span
  m='711770'>at</span> <span m='713550'>this</span> <span
  m='715480'>equals</span> <span m='716280'>0,</span> <span
  m='716760'>right?</span> <span m='717650'>This</span> <span
  m='718300'>equaling</span> <span m='718750'>0.</span> <span
  m='720670'>That</span> <span m='721130'>equation</span> <span
  m='721770'>would</span> <span m='721970'>give</span> <span
  m='722130'>me</span> <span m='722300'>the</span> <span
  m='722500'>eigenvalues</span> <span m='723170'>of</span> <span
  m='723310'>a</span> <span m='723450'>transpose</span> <span
  m='724280'>just</span> <span m='724580'>the</span> <span m='724680'>way</span>
  <span m='724980'>this</span> <span m='725320'>one</span> <span
  m='725840'>gives</span> <span m='726080'>me</span> <span m='726250'>the</span>
  <span m='726400'>eigenvalues</span> <span m='727110'>of</span> <span
  m='727260'>A.</span> </p><p><span m='727720'>But</span> <span
  m='729000'>why</span> <span m='729290'>are</span> <span m='729430'>they</span>
  <span m='729640'>the</span> <span m='729810'>same?</span> <span
  m='731030'>Because</span> <span m='731600'>the</span> <span
  m='731730'>determinant</span> <span m='732440'>of</span> <span
  m='732560'>a</span> <span m='732630'>matrix</span> <span m='734290'>and</span>
  <span m='734630'>the</span> <span m='734730'>determinant</span> <span
  m='735400'>of</span> <span m='735530'>its</span> <span
  m='735710'>transpose</span> <span m='736850'>are</span> <span
  m='737090'>equal.</span> <span m='738060'>A</span> <span
  m='738150'>matrix</span> <span m='738730'>and</span> <span
  m='738900'>its</span> <span m='739070'>transpose</span> <span
  m='739760'>have</span> <span m='739930'>the</span> <span
  m='740040'>same</span> <span m='740500'>determinant.</span> <span
  m='741630'>Let me</span> <span m='741820'>just</span> <span
  m='742340'>check</span> <span m='742650'>that</span> <span
  m='742940'>with</span> <span m='743970'>A,</span> <span m='744720'>B,</span>
  <span m='745240'>C,</span> <span m='745723'>D.</span> <span
  m='747100'>And</span> <span m='747340'>the</span> <span
  m='747450'>transpose</span> <span m='748210'>would be</span> <span
  m='748370'>A,</span> <span m='749230'>C,</span> <span m='749910'>B,</span>
  <span m='750610'>D.</span> <span m='751860'>And</span> <span
  m='752170'>the</span> <span m='752270'>determinant</span> <span
  m='752940'>in</span> <span m='753130'>both</span> <span
  m='753430'>cases</span> <span m='753950'>is</span> <span m='754170'>AD</span>
  <span m='754410'>minus</span> <span m='755310'>BC,</span> <span
  m='756050'>AD</span> <span m='756770'>minus</span> <span m='757280'>BC.</span>
  <span m='759520'>Transposing</span> <span m='760380'>doesn't</span> <span
  m='760700'>affect.</span> </p><p><span m='761060'>So</span> <span
  m='761230'>this,</span> <span m='762510'>that</span> <span
  m='764020'>is</span> <span m='764210'>the</span> <span m='764350'>same</span>
  <span m='764790'>as</span> <span m='764930'>that.</span> <span
  m='766730'>And</span> <span m='767080'>the</span> <span
  m='767520'>lambdas</span> <span m='768260'>are</span> <span
  m='768380'>the</span> <span m='768540'>same.</span> <span
  m='769670'>And</span> <span m='769960'>therefore</span> <span
  m='770510'>we</span> <span m='770690'>can</span> <span m='770900'>look</span>
  <span m='771150'>at</span> <span m='771310'>the</span> <span
  m='771460'>columns</span> <span m='771980'>adding</span> <span
  m='772350'>to</span> <span m='772520'>s</span> <span m='772890'>or</span>
  <span m='773090'>the</span> <span m='773250'>rows</span> <span
  m='773700'>added</span> <span m='774090'>to</span> <span m='774260'>s.</span>
  </p><p><span m='777200'>So</span> <span m='777410'>this</span> <span
  m='778750'>explains</span> <span m='779440'>why</span> <span
  m='780760'>those</span> <span m='781060'>two</span> <span
  m='781260'>statements</span> <span m='782780'>are</span> <span
  m='782950'>both</span> <span m='783340'>true</span> <span
  m='783750'>together</span> <span m='785000'>because</span> <span
  m='786110'>I</span> <span m='786230'>could</span> <span m='786430'>look</span>
  <span m='786630'>at</span> <span m='786740'>the</span> <span
  m='786880'>rows</span> <span m='787780'>or</span> <span m='787960'>the</span>
  <span m='788090'>columns</span> <span m='789170'>and</span> <span
  m='790270'>reach</span> <span m='790700'>this</span> <span
  m='790960'>conclusion.</span> <span m='791660'>That</span> <span
  m='791860'>if</span> <span m='792060'>all</span> <span
  m='794160'>columns</span> <span m='794620'>add to</span> <span
  m='794890'>s--</span> <span m='795380'>now</span> <span m='795580'>why</span>
  <span m='795860'>is</span> <span m='796060'>that,</span> <span m='796490'>or
  all</span> <span m='796920'>rows</span> <span m='797380'>add to</span> <span
  m='797730'>s?</span> <span m='798730'>Let</span> <span m='798870'>me</span>
  <span m='798990'>just--</span> <span m='799790'>I'll</span> <span
  m='799980'>just</span> <span m='800200'>show</span> <span
  m='800440'>you</span> <span m='800540'>the</span> <span
  m='800730'>eigenvector.</span> </p><p><span m='802930'>In</span> <span
  m='803090'>this</span> <span m='803350'>case,</span> <span m='805230'>A</span>
  <span m='805870'>times</span> <span m='806400'>the</span> <span
  m='806560'>eigenvector</span> <span m='807370'>would</span> <span
  m='807550'>be</span> <span m='807730'>all</span> <span m='808040'>ones.</span>
  <span m='810710'>Suppose</span> <span m='811260'>the</span> <span
  m='811380'>matrix</span> <span m='811910'>is</span> <span m='812050'>4</span>
  <span m='812350'>by</span> <span m='812550'>4.</span> <span
  m='813700'>If</span> <span m='813870'>I</span> <span
  m='813960'>multiply</span> <span m='814480'>A</span> <span
  m='814860'>by</span> <span m='815170'>all</span> <span m='815410'>ones,</span>
  <span m='816300'>when</span> <span m='816550'>you</span> <span
  m='816660'>multiply</span> <span m='817090'>a</span> <span
  m='817170'>matrix</span> <span m='817790'>by</span> <span m='818020'>a</span>
  <span m='818080'>vector</span> <span m='818540'>of</span> <span
  m='818640'>ones,</span> <span m='819680'>then</span> <span
  m='820170'>the</span> <span m='820400'>dot</span> <span
  m='820730'>product</span> <span m='821160'>of</span> <span
  m='821260'>this</span> <span m='821500'>row</span> <span
  m='821800'>with</span> <span m='821950'>that</span> <span m='822220'>is</span>
  <span m='823400'>the</span> <span m='823640'>sum,</span> <span
  m='824180'>is</span> <span m='824510'>that</span> <span m='824910'>plus</span>
  <span m='825180'>that</span> <span m='825510'>plus</span> <span
  m='825740'>that</span> <span m='825980'>plus</span> <span
  m='826260'>that,</span> <span m='826860'>would</span> <span
  m='827070'>be</span> <span m='827170'>we</span> <span m='827270'>s.</span>
  <span m='827920'>This</span> <span m='828180'>would</span> <span
  m='828380'>be</span> <span m='829670'>s</span> <span m='830020'>because</span>
  <span m='830910'>this</span> <span m='831190'>first</span> <span
  m='831630'>row--</span> <span m='832480'>here</span> <span
  m='832660'>is</span> <span m='832770'>A--</span> <span m='833700'>first</span>
  <span m='834090'>row</span> <span m='834420'>of</span> <span
  m='834530'>A</span> <span m='836402'>adds</span> <span m='836870'>to</span>
  <span m='837340'>s.</span> </p><p><span m='838106'>So</span> <span
  m='838490'>these</span> <span m='838800'>numbers</span> <span
  m='839920'>add</span> <span m='840250'>to s,</span> <span m='840920'>I</span>
  <span m='841050'>get</span> <span m='841300'>s.</span> <span
  m='842070'>These</span> <span m='842500'>numbers</span> <span
  m='842920'>add</span> <span m='843260'>to s,</span> <span m='843820'>I</span>
  <span m='843910'>get</span> <span m='844120'>s</span> <span
  m='844400'>again.</span> <span m='845320'>These</span> <span
  m='845680'>numbers</span> <span m='846090'>add</span> <span m='846360'>to
  s.</span> <span m='847286'>And</span> <span m='847750'>these,</span> <span
  m='848120'>finally</span> <span m='848580'>those</span> <span
  m='848920'>numbers</span> <span m='849280'>add</span> <span
  m='849540'>to</span> <span m='849700'>s.</span> <span m='850660'>And</span>
  <span m='851110'>I</span> <span m='851230'>have</span> <span
  m='852230'>s</span> <span m='852780'>times</span> <span m='854130'>1,</span>
  <span m='854500'>1,</span> <span m='855020'>1,</span> <span
  m='855310'>1.</span> </p><p><span m='859930'>Are</span> <span
  m='860080'>you</span> <span m='860250'>OK</span> <span m='860610'>with</span>
  <span m='860750'>this?</span> <span m='862450'>When</span> <span
  m='862780'>all</span> <span m='863010'>the</span> <span m='863130'>rows</span>
  <span m='863480'>add</span> <span m='863710'>to</span> <span m='863850'>s,
  I</span> <span m='864350'>can</span> <span m='864580'>tell</span> <span
  m='864840'>you</span> <span m='864950'>what</span> <span m='865130'>the</span>
  <span m='865270'>eigenvector</span> <span m='866050'>is,</span> <span
  m='866880'>1, 1,</span> <span m='867334'>1, 1.</span> <span
  m='868696'>And</span> <span m='869150'>then</span> <span m='869920'>the</span>
  <span m='870180'>eigenvalue,</span> <span m='870920'>I</span> <span
  m='871000'>can</span> <span m='871280'>see</span> <span m='871690'>that</span>
  <span m='871880'>that's</span> <span m='872750'>the</span> <span
  m='872880'>sum</span> <span m='873090'>s.</span> <span m='874300'>So</span>
  <span m='874540'>again,</span> <span m='876000'>for</span> <span
  m='876210'>special</span> <span m='876660'>matrices,</span> <span
  m='878340'>in</span> <span m='878500'>this</span> <span m='878750'>case</span>
  <span m='879170'>named</span> <span m='879510'>after</span> <span
  m='879820'>Markov,</span> <span m='881130'>we</span> <span
  m='881440'>are</span> <span m='881690'>able</span> <span m='882130'>to</span>
  <span m='882360'>identify</span> <span m='883940'>important</span> <span
  m='884460'>fact</span> <span m='884810'>about</span> <span
  m='885400'>their</span> <span m='885710'>eigenvalue,</span> <span
  m='887130'>which</span> <span m='887470'>is</span> <span
  m='888450'>that</span> <span m='888853'>it's</span> <span
  m='889256'>that</span> <span m='889660'>common</span> <span
  m='890120'>row</span> <span m='890430'>sum</span> <span m='892340'>s</span>
  <span m='892600'>equal</span> <span m='893040'>1</span> <span
  m='895390'>in</span> <span m='895550'>the</span> <span m='895660'>case</span>
  <span m='896020'>of</span> <span m='896150'>powers</span> <span
  m='897170'>and</span> <span m='897510'>s</span> <span m='897710'>equal</span>
  <span m='898030'>0</span> <span m='898650'>in</span> <span
  m='899070'>this</span> <span m='899360'>video's</span> <span
  m='899890'>case</span> <span m='900550'>with--</span> <span
  m='902520'>let</span> <span m='902690'>me</span> <span m='902830'>bring</span>
  <span m='903170'>down</span> <span m='903500'>A</span> <span
  m='903690'>again.</span> </p><p><span m='905280'>So</span> <span
  m='905480'>here,</span> <span m='905980'>every</span> <span
  m='906300'>column</span> <span m='906780'>added</span> <span
  m='907250'>to</span> <span m='908600'>0.</span> <span m='909630'>It</span>
  <span m='910000'>didn't</span> <span m='910250'>happen</span> <span
  m='910570'>that</span> <span m='910740'>the</span> <span
  m='910860'>rows</span> <span m='911240'>added</span> <span
  m='911580'>to</span> <span m='911670'>0.</span> <span m='912790'>I'm</span>
  <span m='912940'>not</span> <span m='913620'>requiring</span> <span
  m='914270'>that.</span> <span m='914870'>I'm</span> <span
  m='915060'>just</span> <span m='915300'>saying</span> <span
  m='916010'>either</span> <span m='916400'>way,</span> <span
  m='916880'>A</span> <span m='917300'>or</span> <span m='917480'>A</span> <span
  m='917650'>transpose</span> <span m='918420'>has</span> <span
  m='918640'>the</span> <span m='918780'>same</span> <span
  m='919140'>eigenvalues</span> <span m='920280'>and</span> <span
  m='920520'>one</span> <span m='920970'>of them is</span> <span
  m='921210'>0</span> <span m='922500'>and</span> <span m='922800'>the</span>
  <span m='922930'>other</span> <span m='923260'>is</span> <span
  m='923520'>whatever</span> <span m='924420'>the</span> <span
  m='924550'>trace</span> <span m='924980'>tells</span> <span
  m='925330'>us,</span> <span m='925560'>that</span> <span
  m='925770'>one.</span> </p><p><span m='928180'>These</span> <span
  m='928620'>collection</span> <span m='929180'>of</span> <span
  m='929800'>useful</span> <span m='930270'>fact</span> <span
  m='930660'>about</span> <span m='930960'>eigenvalues</span> <span
  m='932630'>show</span> <span m='933020'>up</span> <span m='933450'>when</span>
  <span m='933830'>you</span> <span m='933980'>have</span> <span
  m='934780'>a</span> <span m='934890'>particular</span> <span
  m='935480'>matrix</span> <span m='936430'>and</span> <span
  m='936590'>you</span> <span m='936710'>need</span> <span m='936970'>to</span>
  <span m='937090'>know</span> <span m='937290'>something</span> <span
  m='937720'>about</span> <span m='938020'>its</span> <span
  m='938230'>eigenvalues.</span> <span m='940460'>Good,</span> <span
  m='941000'>thank</span> <span m='941330'>you.</span> </p>
uid: 9cf2fcdf48fc41a0fb1d6260fd006813
type: course
layout: video
---
