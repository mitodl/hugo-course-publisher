---
about_this_resource_text: >-
  <p><strong>Description:</strong> Combine null solutions to find a particular
  solution for any right hand side. But it may involve a difficult integral.</p>
  <p>Related section in <a
  href="http://www-math.mit.edu/~gs/dela/">textbook</a>: 2.6c</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 0f15AVSQ770
    parent_uid: 84a678c4b78894f8ffd8f8ee2da62cea
    title: Video-YouTube-Stream
    type: Video
    uid: 65a06c7918beb3f844dafd296c4f286f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/0f15AVSQ770/default.jpg'
    parent_uid: 84a678c4b78894f8ffd8f8ee2da62cea
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: a0d3e79f3a03a7108619b8666fd4aaef
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: 0f15AVSQ770
    parent_uid: 84a678c4b78894f8ffd8f8ee2da62cea
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 45cb9b6d2b0ae61bda2ee7b53bdf2a2d
  - id: 0f15AVSQ770.srt
    parent_uid: 84a678c4b78894f8ffd8f8ee2da62cea
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/second-order-equations/variation-of-parameters/0f15AVSQ770.srt
    title: 3play caption file
    type: null
    uid: e59da6e500c51676d5ff3a2a27278b44
  - id: 0f15AVSQ770.pdf
    parent_uid: 84a678c4b78894f8ffd8f8ee2da62cea
    technical_location: >-
      https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/second-order-equations/variation-of-parameters/0f15AVSQ770.pdf
    title: 3play pdf file
    type: null
    uid: 227b974ca57f75d655e249a69e7b13f8
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 84a678c4b78894f8ffd8f8ee2da62cea
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 4564faae9dc22ac9af9b84ed9e19860b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 84a678c4b78894f8ffd8f8ee2da62cea
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1130666884d9dcc20bd772762c561801
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1102923623'
    parent_uid: 84a678c4b78894f8ffd8f8ee2da62cea
    title: Video-iTunes U-MP4
    type: Video
    uid: 50a9234b8ff0359d4c4478feca345707
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MITRES18-009F15/MITRES18-009F15_2_6c_VariationOfParameters_300k.mp4
    parent_uid: 84a678c4b78894f8ffd8f8ee2da62cea
    title: Video-Internet Archive-MP4
    type: Video
    uid: 5f8f80cc5a23d2cec0bc61bd9b9214a7
inline_embed_id: 7213802variationofparameters84842639
order_index: 228
parent_uid: 6038bc5002ab0da0b5f15d8b8de5fc0a
related_resources_text: ''
short_url: variation-of-parameters
technical_location: >-
  https://ocw.mit.edu/resources/res-18-009-learn-differential-equations-up-close-with-gilbert-strang-and-cleve-moler-fall-2015/differential-equations-and-linear-algebra/second-order-equations/variation-of-parameters
title: Variation of Parameters
transcript: >-
  <p><span m='1280'>GILBERT STRANG: OK.</span> <span m='2440'>So</span> <span
  m='2690'>today</span> <span m='3120'>is</span> <span m='4030'>a</span> <span
  m='4290'>specific</span> <span m='5010'>way</span> <span m='5380'>to</span>
  <span m='5620'>solve</span> <span m='6770'>linear</span> <span
  m='8330'>differential</span> <span m='8900'>equations.</span> <span
  m='9690'>I'll</span> <span m='9770'>take</span> <span m='10100'>second</span>
  <span m='10470'>order</span> <span m='10810'>equations</span> <span
  m='11460'>as</span> <span m='11670'>a</span> <span m='11750'>good</span> <span
  m='11940'>example.</span> <span m='12970'>This</span> <span
  m='13080'>way</span> <span m='13310'>is</span> <span m='13500'>called</span>
  <span m='13940'>variation</span> <span m='14990'>of</span> <span
  m='15250'>parameters,</span> <span m='16600'>and</span> <span
  m='16880'>it</span> <span m='17020'>will</span> <span m='17240'>lead</span>
  <span m='17530'>us</span> <span m='17870'>to</span> <span m='18450'>a</span>
  <span m='18610'>formula</span> <span m='19810'>for</span> <span
  m='19970'>the</span> <span m='20120'>answer,</span> <span m='21410'>an</span>
  <span m='21600'>integral.</span> <span m='22970'>So</span> <span
  m='23170'>that's</span> <span m='23490'>the</span> <span m='23560'>big</span>
  <span m='23800'>step,</span> <span m='24370'>to</span> <span
  m='24490'>get</span> <span m='24840'>from</span> <span m='25030'>the</span>
  <span m='25160'>differential</span> <span m='25750'>equation</span> <span
  m='26730'>to</span> <span m='27290'>y</span> <span m='27660'>of</span> <span
  m='27850'>t</span> <span m='28270'>equal</span> <span m='28590'>a</span> <span
  m='28670'>certain</span> <span m='29040'>integral.</span> <span
  m='30070'>That</span> <span m='30330'>integral</span> <span
  m='30850'>will</span> <span m='31100'>involve</span> <span
  m='31710'>the</span> <span m='31830'>right</span> <span m='32070'>hand</span>
  <span m='32310'>side,</span> <span m='32790'>of</span> <span
  m='32810'>course,</span> <span m='33300'>the</span> <span
  m='33430'>source.</span> <span m='34440'>And</span> <span m='35350'>if</span>
  <span m='35570'>we</span> <span m='35700'>can</span> <span m='35870'>do</span>
  <span m='36040'>the</span> <span m='36200'>integration,</span> <span
  m='37320'>then</span> <span m='37570'>we</span> <span m='37710'>get</span>
  <span m='38120'>a</span> <span m='38210'>complete</span> <span
  m='38690'>answer.</span> <span m='39900'>But</span> <span m='39980'>in</span>
  <span m='40140'>any</span> <span m='40410'>case,</span> <span
  m='40940'>we</span> <span m='41180'>get</span> <span m='41730'>a</span> <span
  m='41830'>nice</span> <span m='42250'>form</span> <span m='42600'>for</span>
  <span m='42760'>the</span> <span m='42910'>answer.</span> <span
  m='43900'>OK.</span> </p><p><span m='45130'>So</span> <span
  m='45920'>what's</span> <span m='46250'>the</span> <span
  m='46410'>idea?</span> <span m='47850'>So</span> <span m='48040'>we're</span>
  <span m='48180'>looking</span> <span m='48570'>for</span> <span
  m='48670'>a</span> <span m='48880'>particular</span> <span
  m='49720'>solution.</span> <span m='51260'>Today</span> <span
  m='51590'>is</span> <span m='51740'>about</span> <span m='52060'>a</span>
  <span m='52120'>particular</span> <span m='52840'>solution.</span> <span
  m='53810'>We</span> <span m='54090'>have</span> <span m='54530'>to</span>
  <span m='54700'>know</span> <span m='56070'>two</span> <span
  m='56410'>null</span> <span m='56670'>solutions</span> <span
  m='57700'>to</span> <span m='57840'>get</span> <span m='58070'>started.</span>
  <span m='59140'>So</span> <span m='59340'>we</span> <span
  m='59520'>must</span> <span m='59920'>know</span> <span
  m='60360'>these,</span> <span m='60850'>y1</span> <span m='62020'>and</span>
  <span m='62240'>y2,</span> <span m='62930'>null</span> <span
  m='63300'>solutions,</span> <span m='64319'>with</span> <span
  m='64920'>f</span> <span m='65160'>equals</span> <span m='65570'>0.</span>
  </p><p><span m='66690'>And</span> <span m='66940'>of</span> <span
  m='67040'>course</span> <span m='67380'>we</span> <span m='67630'>do</span>
  <span m='67920'>know</span> <span m='68380'>two</span> <span
  m='68670'>null</span> <span m='68910'>solutions</span> <span
  m='69870'>when</span> <span m='70780'>those</span> <span
  m='71200'>coefficients</span> <span m='72000'>b</span> <span
  m='72270'>and</span> <span m='72460'>c</span> <span m='72780'>are</span> <span
  m='72970'>constants.</span> <span m='74850'>And</span> <span
  m='75110'>we'll</span> <span m='75340'>do</span> <span m='75550'>it</span>
  <span m='76090'>as</span> <span m='76340'>a</span> <span m='76620'>good</span>
  <span m='76830'>example,</span> <span m='78180'>the</span> <span
  m='78290'>most</span> <span m='78620'>important</span> <span
  m='79050'>example.</span> <span m='80570'>But</span> <span
  m='80870'>maybe</span> <span m='81250'>sometimes</span> <span
  m='82290'>we</span> <span m='82520'>can</span> <span m='82730'>find</span>
  <span m='83090'>the</span> <span m='83200'>null</span> <span
  m='83430'>solutions</span> <span m='84170'>when</span> <span
  m='84470'>B</span> <span m='85000'>and</span> <span m='85300'>t</span> <span
  m='85780'>are</span> <span m='86380'>changing</span> <span m='87000'>in</span>
  <span m='87190'>time,</span> <span m='87770'>time</span> <span
  m='88090'>varying,</span> <span m='88890'>and</span> <span
  m='89140'>that's</span> <span m='89790'>all</span> <span m='90100'>to</span>
  <span m='90220'>the</span> <span m='90350'>good.</span> <span
  m='91740'>Those</span> <span m='92150'>problems</span> <span
  m='92570'>are</span> <span m='92690'>not</span> <span m='92950'>easy</span>
  <span m='93300'>to</span> <span m='93430'>solve.</span> <span
  m='94500'>But</span> <span m='95290'>it's</span> <span m='95650'>really</span>
  <span m='96030'>constant</span> <span m='96540'>coefficients</span> <span
  m='97340'>that</span> <span m='98080'>we</span> <span m='98250'>know</span>
  <span m='98490'>it</span> <span m='98600'>works.</span> </p><p><span
  m='99440'>OK.</span> <span m='99750'>What's</span> <span m='100050'>the</span>
  <span m='100220'>idea?</span> <span m='101620'>So</span> <span
  m='101670'>the</span> <span m='101860'>idea</span> <span m='102320'>is</span>
  <span m='103390'>to</span> <span m='103510'>use</span> <span
  m='104290'>y1</span> <span m='105020'>and</span> <span m='105180'>y2,</span>
  <span m='106510'>the</span> <span m='106710'>null</span> <span
  m='107040'>solutions.</span> <span m='108430'>If</span> <span
  m='108620'>we</span> <span m='108760'>multiply</span> <span
  m='109310'>by</span> <span m='109550'>constants,</span> <span
  m='111020'>we</span> <span m='111160'>get</span> <span
  m='111370'>another</span> <span m='111950'>null</span> <span
  m='112240'>solution</span> <span m='113570'>by</span> <span
  m='113740'>linearity.</span> <span m='115230'>But</span> <span
  m='116580'>the</span> <span m='116790'>idea</span> <span m='117240'>is</span>
  <span m='117520'>to</span> <span m='117660'>multiply</span> <span
  m='118410'>them</span> <span m='118640'>by</span> <span
  m='118890'>functions.</span> <span m='120380'>The</span> <span
  m='120530'>varying,</span> <span m='121400'>those</span> <span
  m='121770'>constants</span> <span m='122470'>are</span> <span
  m='122710'>not</span> <span m='123050'>constant,</span> <span
  m='123610'>they</span> <span m='123820'>are</span> <span
  m='123920'>varying</span> <span m='124760'>parameters.</span> </p><p><span
  m='126120'>So</span> <span m='126280'>this</span> <span
  m='126630'>would</span> <span m='126790'>be the</span> <span
  m='127160'>form</span> <span m='127610'>of</span> <span m='127750'>the</span>
  <span m='127880'>solution.</span> <span m='129600'>And</span> <span
  m='129860'>we</span> <span m='130009'>want</span> <span m='130240'>to</span>
  <span m='130320'>find</span> <span m='130840'>a</span> <span
  m='130940'>c1</span> <span m='131720'>and</span> <span m='131890'>a</span>
  <span m='131980'>c2</span> <span m='132850'>depending</span> <span
  m='133350'>on</span> <span m='133560'>t,</span> <span m='134820'>so</span>
  <span m='135180'>that</span> <span m='137020'>the</span> <span
  m='137240'>differential</span> <span m='137750'>equation</span> <span
  m='138270'>above</span> <span m='138600'>it</span> <span m='138770'>is</span>
  <span m='138970'>solved.</span> </p><p><span m='139500'>So</span> <span
  m='139730'>of</span> <span m='139840'>course,</span> <span
  m='140560'>I'm</span> <span m='140610'>going</span> <span m='140810'>to</span>
  <span m='140880'>plug</span> <span m='141190'>that</span> <span
  m='141460'>into</span> <span m='141840'>the</span> <span
  m='142000'>differential</span> <span m='142560'>equation</span> <span
  m='143530'>and</span> <span m='143790'>find</span> <span m='144140'>out</span>
  <span m='144390'>the</span> <span m='144520'>conditions</span> <span
  m='145260'>on</span> <span m='146000'>c1</span> <span m='146550'>and</span>
  <span m='146740'>c2.</span> <span m='147550'>May</span> <span
  m='148070'>I</span> <span m='148250'>just</span> <span m='149420'>jump</span>
  <span m='150550'>to</span> <span m='150730'>the</span> <span
  m='150880'>result?</span> <span m='153450'>This</span> <span
  m='154040'>will</span> <span m='154330'>satisfy</span> <span
  m='155320'>that</span> <span m='155730'>equation.</span> <span
  m='158670'>We</span> <span m='158920'>know</span> <span m='159260'>that</span>
  <span m='159490'>y1</span> <span m='160310'>and</span> <span
  m='160550'>y2</span> <span m='161100'>satisfy</span> <span
  m='161510'>it</span> <span m='161920'>with</span> <span m='162120'>a</span>
  <span m='162190'>0</span> <span m='162610'>on</span> <span
  m='162740'>the</span> <span m='162850'>right-hand</span> <span
  m='163340'>side.</span> <span m='164660'>So</span> <span m='164850'>we</span>
  <span m='165070'>just</span> <span m='165360'>have</span> <span
  m='165530'>to--</span> <span m='165920'>So</span> <span m='166150'>it's</span>
  <span m='166680'>c1</span> <span m='167360'>of</span> <span
  m='167510'>t</span> <span m='167850'>and</span> <span m='168010'>c2</span>
  <span m='168500'>of</span> <span m='168640'>t</span> <span
  m='168890'>that</span> <span m='169060'>are</span> <span
  m='169170'>going</span> <span m='169360'>to</span> <span
  m='169480'>deal</span> <span m='169910'>with</span> <span
  m='170920'>the</span> <span m='171110'>f.</span> </p><p><span
  m='173510'>So</span> <span m='173740'>here</span> <span m='173990'>is</span>
  <span m='174420'>the</span> <span m='175660'>result</span> <span
  m='176270'>after</span> <span m='177840'>putting</span> <span
  m='178190'>it</span> <span m='178320'>in</span> <span m='178520'>there.</span>
  <span m='179400'>I</span> <span m='179530'>discover</span> <span
  m='180720'>that</span> <span m='181750'>c1</span> <span
  m='184300'>prime,</span> <span m='184940'>the</span> <span
  m='185080'>derivative</span> <span m='185730'>of</span> <span
  m='185910'>t,</span> <span m='186600'>comes</span> <span
  m='186820'>into</span> <span m='186870'>it</span> <span
  m='187710'>times</span> <span m='189000'>y1</span> <span
  m='190470'>plus</span> <span m='191450'>c2</span> <span
  m='192620'>prime</span> <span m='193640'>times</span> <span
  m='194070'>y2</span> <span m='195430'>equaling</span> <span
  m='196010'>0</span> <span m='196900'>will</span> <span m='197090'>give</span>
  <span m='197300'>me</span> <span m='197450'>one</span> <span
  m='197740'>equation</span> <span m='198660'>for</span> <span
  m='198900'>c1</span> <span m='199550'>prime</span> <span m='200060'>and</span>
  <span m='200180'>c2</span> <span m='200650'>prime.</span> </p><p><span
  m='201550'>The</span> <span m='201740'>other</span> <span
  m='202080'>equation</span> <span m='202670'>for</span> <span
  m='202960'>c1</span> <span m='203860'>prime</span> <span
  m='205000'>times--</span> <span m='205570'>We'll</span> <span
  m='206000'>multiply</span> <span m='206590'>y1</span> <span
  m='207880'>prime</span> <span m='209180'>plus</span> <span
  m='210240'>c2</span> <span m='211510'>prime</span> <span m='212570'>y2</span>
  <span m='213830'>prime.</span> <span m='214290'>Of</span> <span
  m='214430'>course,</span> <span m='214690'>prime</span> <span
  m='215130'>means</span> <span m='215860'>the</span> <span
  m='216010'>derivative.</span> <span m='217020'>And</span> <span
  m='217290'>that,</span> <span m='218000'>when</span> <span
  m='218240'>I'm</span> <span m='218590'>plugging</span> <span
  m='219480'>all</span> <span m='219710'>this</span> <span
  m='220050'>into</span> <span m='220310'>the</span> <span
  m='220480'>equation,</span> <span m='221250'>I'm</span> <span
  m='221440'>going</span> <span m='221640'>to</span> <span m='221730'>see</span>
  <span m='221970'>an</span> <span m='222100'>f</span> <span
  m='222320'>of</span> <span m='222490'>t</span> <span m='222750'>on</span>
  <span m='222890'>the</span> <span m='222990'>right-hand</span> <span
  m='223610'>side.</span> </p><p><span m='224620'>I</span> <span
  m='225030'>have</span> <span m='225150'>two</span> <span
  m='225350'>equations</span> <span m='228060'>at</span> <span
  m='228250'>each</span> <span m='228530'>time.</span> <span
  m='229050'>At</span> <span m='229230'>each</span> <span m='229940'>time</span>
  <span m='230320'>instant</span> <span m='231430'>I</span> <span
  m='231590'>have</span> <span m='231730'>two</span> <span
  m='232170'>ordinary</span> <span m='232920'>linear</span> <span
  m='233370'>equations.</span> <span m='234540'>They're</span> <span
  m='234890'>straight</span> <span m='235300'>lines</span> <span
  m='236110'>in</span> <span m='236430'>the</span> <span m='236970'>c1,</span>
  <span m='237810'>c2</span> <span m='238440'>plane.</span> <span
  m='239110'>They</span> <span m='239330'>intersect.</span> <span
  m='240050'>We</span> <span m='240190'>know</span> <span m='240360'>how</span>
  <span m='240520'>to</span> <span m='240650'>solve--</span> <span
  m='241420'>The</span> <span m='241930'>most</span> <span
  m='242210'>basic</span> <span m='242610'>problem</span> <span
  m='243040'>of</span> <span m='243150'>linear</span> <span
  m='243530'>algebra,</span> <span m='244510'>solve</span> <span
  m='244780'>two</span> <span m='245020'>equations</span> <span
  m='245680'>and</span> <span m='245860'>two</span> <span
  m='246050'>unknowns.</span> <span m='247140'>And</span> <span
  m='247210'>we</span> <span m='247350'>do</span> <span m='247540'>that</span>
  <span m='247950'>for</span> <span m='248130'>each</span> <span
  m='248470'>t,</span> <span m='249070'>and</span> <span m='249270'>we</span>
  <span m='249380'>get</span> <span m='249560'>an</span> <span
  m='249750'>answer.</span> </p><p><span m='250140'>So</span> <span
  m='250310'>this</span> <span m='250590'>leads</span> <span
  m='250950'>us</span> <span m='251170'>to</span> <span m='251860'>c1</span>
  <span m='253520'>and</span> <span m='253780'>c2</span> <span
  m='255040'>and</span> <span m='255290'>they</span> <span
  m='255470'>depend</span> <span m='256040'>on</span> <span m='256269'>t.</span>
  <span m='260779'>Because--</span> <span m='261529'>Well,</span> <span
  m='261839'>actually it</span> <span m='262250'>leads</span> <span
  m='262560'>us</span> <span m='262740'>to</span> <span m='262880'>c1</span>
  <span m='263430'>prime</span> <span m='263860'>and</span> <span
  m='263970'>c2</span> <span m='264460'>prime,</span> <span
  m='265050'>the</span> <span m='265210'>derivatives.</span> <span
  m='266050'>It</span> <span m='266180'>just</span> <span
  m='266420'>happens</span> <span m='267530'>that</span> <span
  m='267750'>when</span> <span m='268030'>we</span> <span m='268180'>plug</span>
  <span m='268490'>it</span> <span m='268610'>in,</span> <span
  m='269250'>the</span> <span m='269780'>c1</span> <span m='270215'>and</span>
  <span m='270650'>the</span> <span m='270840'>c2</span> <span
  m='270970'>themselves</span> <span m='273330'>disappear</span> <span
  m='274150'>because</span> <span m='274710'>these</span> <span
  m='274990'>were</span> <span m='275170'>null</span> <span
  m='275440'>solutions.</span> <span m='276630'>So</span> <span
  m='276810'>we</span> <span m='276960'>know</span> <span m='278060'>that</span>
  <span m='278550'>c1</span> <span m='279060'>constant</span> <span
  m='279500'>would</span> <span m='279680'>be</span> <span
  m='279860'>good,</span> <span m='280570'>but</span> <span
  m='282300'>when</span> <span m='282630'>we</span> <span m='282760'>put</span>
  <span m='282970'>it in</span> <span m='283260'>there,</span> <span
  m='283780'>we</span> <span m='284340'>get</span> <span
  m='284530'>equations</span> <span m='285250'>that</span> <span
  m='285480'>involve</span> <span m='285940'>c1</span> <span
  m='286470'>prime</span> <span m='286940'>at</span> <span
  m='287210'>each</span> <span m='287580'>time.</span> <span
  m='288160'>So</span> <span m='288390'>I'll</span> <span m='288750'>take</span>
  <span m='288970'>that</span> <span m='289200'>away.</span> <span
  m='289650'>At</span> <span m='289870'>each</span> <span
  m='290160'>time.</span> </p><p><span m='291000'>All</span> <span
  m='291170'>right.</span> <span m='291650'>Two</span> <span
  m='291910'>equations,</span> <span m='292830'>two</span> <span
  m='293030'>unknowns,</span> <span m='293610'>we</span> <span
  m='293760'>solved</span> <span m='294045'>it.</span> <span
  m='295020'>OK.</span> </p><p><span m='297150'>And</span> <span
  m='297320'>then</span> <span m='297570'>when</span> <span m='297790'>we</span>
  <span m='297940'>solve</span> <span m='298290'>them,</span> <span
  m='298940'>we</span> <span m='299100'>put</span> <span m='299350'>them</span>
  <span m='299520'>back</span> <span m='299870'>in</span> <span
  m='300140'>to</span> <span m='300370'>y</span> <span m='300650'>of</span>
  <span m='300790'>t</span> <span m='301920'>and</span> <span m='302200'>can
  now</span> <span m='302570'>just</span> <span m='302810'>write</span> <span
  m='303050'>the</span> <span m='303170'>answer.</span> <span
  m='304310'>I'll</span> <span m='304430'>just</span> <span
  m='304650'>write.</span> <span m='305070'>So</span> <span
  m='305290'>I'm</span> <span m='306100'>not</span> <span
  m='306560'>doing</span> <span m='306830'>all</span> <span
  m='307220'>the</span> <span m='308820'>gory</span> <span
  m='309160'>calculations.</span> <span m='310440'>I'm</span> <span
  m='310580'>just</span> <span m='310800'>going</span> <span
  m='310940'>to</span> <span m='311050'>write</span> <span m='311310'>the</span>
  <span m='311470'>answer.</span> <span m='312440'>So</span> <span
  m='312610'>y</span> <span m='312950'>of</span> <span m='313100'>t</span> <span
  m='314300'>is</span> <span m='315270'>going to be--</span> <span
  m='317320'>Just</span> <span m='317590'>to</span> <span m='317670'>be</span>
  <span m='317840'>sure,</span> <span m='318640'>I'm</span> <span
  m='318840'>looking</span> <span m='319310'>here.</span> <span
  m='321560'>That's</span> <span m='321860'>what</span> <span
  m='322050'>I'm</span> <span m='322190'>going</span> <span m='322360'>to</span>
  <span m='322460'>write,</span> <span m='322990'>and</span> <span
  m='323200'>I'm</span> <span m='323330'>going</span> <span m='323530'>to</span>
  <span m='323600'>part</span> <span m='323990'>c1</span> <span
  m='324750'>and</span> <span m='324940'>c2</span> <span m='326960'>into</span>
  <span m='327820'>that--</span> <span m='329080'>c1</span> <span
  m='329290'>and</span> <span m='329610'>c2</span> <span m='330010'>come</span>
  <span m='330230'>from</span> <span m='330420'>these</span> <span
  m='330680'>two</span> <span m='330870'>equations.</span> <span
  m='332060'>OK.</span> </p><p><span m='333170'>So</span> <span
  m='333450'>I</span> <span m='333570'>have</span> <span m='334110'>a</span>
  <span m='334380'>y1</span> <span m='334880'>of</span> <span
  m='335030'>t</span> <span m='335960'>times</span> <span m='337510'>c1.</span>
  <span m='339320'>Now,</span> <span m='339660'>the</span> <span
  m='339830'>c1</span> <span m='340440'>that</span> <span
  m='340620'>comes</span> <span m='340940'>out</span> <span m='341140'>of</span>
  <span m='341210'>that</span> <span m='341470'>happens</span> <span
  m='341990'>to</span> <span m='342120'>be--</span> <span
  m='342750'>Well,</span> <span m='343910'>c1</span> <span
  m='344500'>prime</span> <span m='345210'>comes</span> <span
  m='345560'>out</span> <span m='345770'>of</span> <span m='345870'>it,</span>
  <span m='346000'>so</span> <span m='346110'>I</span> <span
  m='346230'>have</span> <span m='346410'>to</span> <span
  m='346510'>integrate.</span> <span m='347790'>I</span> <span
  m='347920'>have</span> <span m='348040'>to</span> <span
  m='348140'>integrate</span> <span m='349320'>c1</span> <span
  m='350650'>prime.</span> <span m='351640'>So</span> <span m='351870'>c1</span>
  <span m='352160'>prime</span> <span m='352570'>that</span> <span
  m='352700'>comes</span> <span m='353010'>out</span> <span m='353240'>of</span>
  <span m='353320'>that</span> <span m='353700'>is</span> <span
  m='354940'>a</span> <span m='355070'>minus</span> <span m='356490'>y2</span>
  <span m='359850'>times</span> <span m='361260'>the</span> <span
  m='361440'>f,</span> <span m='363875'>dt,</span> <span m='364849'>and</span>
  <span m='365340'>then</span> <span m='365610'>there</span> <span
  m='365820'>is</span> <span m='365950'>a</span> <span
  m='366650'>denominator,</span> <span m='367540'>because</span> <span
  m='367980'>if</span> <span m='368130'>I</span> <span m='368250'>have</span>
  <span m='368410'>two</span> <span m='368630'>equations</span> <span
  m='369330'>and</span> <span m='369540'>two</span> <span
  m='369760'>unknowns,</span> <span m='370360'>there's</span> <span
  m='370530'>a</span> <span m='370590'>little</span> <span m='371270'>2</span>
  <span m='371480'>by</span> <span m='371740'>2</span> <span
  m='372060'>determinant.</span> <span m='372990'>I'll</span> <span
  m='373140'>just</span> <span m='373380'>call</span> <span m='373620'>it</span>
  <span m='373790'>W.</span> </p><p><span m='376550'>It</span> <span
  m='376730'>has</span> <span m='376990'>a</span> <span m='377120'>famous</span>
  <span m='377650'>name</span> <span m='378190'>in</span> <span
  m='379240'>differential</span> <span m='379730'>equations.</span> <span
  m='380380'>And</span> <span m='380420'>I'll</span> <span
  m='380590'>tell</span> <span m='380800'>you</span> <span
  m='380910'>that</span> <span m='381160'>name.</span> <span m='381830'>W</span>
  <span m='382222'>of</span> <span m='382614'>t</span> <span
  m='384670'>is</span> <span m='385000'>the</span> <span
  m='385260'>determinant</span> <span m='386940'>of</span> <span
  m='388310'>what</span> <span m='388580'>I</span> <span m='388680'>have</span>
  <span m='388940'>there,</span> <span m='389350'>y1,</span> <span
  m='390234'>y2,</span> <span m='391560'>y1</span> <span
  m='392540'>prime,</span> <span m='393280'>y2</span> <span
  m='394360'>prime.</span> <span m='396150'>Two</span> <span
  m='396310'>equations,</span> <span m='398190'>they</span> <span
  m='398430'>have</span> <span m='398650'>to</span> <span m='398760'>be</span>
  <span m='399040'>independent.</span> <span m='399850'>They</span> <span
  m='399970'>have</span> <span m='400130'>to</span> <span m='400250'>be</span>
  <span m='400570'>invertible</span> <span m='401580'>to</span> <span
  m='401840'>give</span> <span m='402070'>me--</span> <span
  m='402250'>and</span> <span m='402850'>it's</span> <span
  m='403260'>this</span> <span m='403540'>determinant</span> <span
  m='404530'>that</span> <span m='404850'>is</span> <span m='405350'>the</span>
  <span m='405490'>critical</span> <span m='405950'>thing.</span> <span
  m='406600'>So</span> <span m='406790'>that's</span> <span
  m='407470'>y1,</span> <span m='408490'>y2</span> <span m='408760'>prime</span>
  <span m='411390'>minus</span> <span m='412140'>y2,</span> <span
  m='413080'>y1</span> <span m='413360'>prime.</span> <span
  m='416360'>That's</span> <span m='416700'>the</span> <span
  m='416830'>function.</span> </p><p><span m='418090'>Remember</span> <span
  m='418460'>we</span> <span m='418640'>know</span> <span m='418900'>y1</span>
  <span m='419360'>and</span> <span m='419470'>y2.</span> <span
  m='419840'>The</span> <span m='420040'>whole</span> <span
  m='420370'>deal</span> <span m='420820'>is</span> <span
  m='420990'>starting</span> <span m='421590'>with</span> <span
  m='422070'>y1</span> <span m='422560'>and</span> <span m='422710'>y2,</span>
  <span m='423310'>null</span> <span m='423600'>solutions,</span> <span
  m='424560'>and</span> <span m='424810'>combining</span> <span
  m='425490'>them.</span> <span m='426730'>And</span> <span
  m='427000'>you</span> <span m='427160'>see</span> <span
  m='427390'>there</span> <span m='427720'>is</span> <span m='427830'>a</span>
  <span m='427940'>first.</span> <span m='429120'>This</span> <span
  m='429590'>is</span> <span m='430560'>the</span> <span m='430690'>c1</span>
  <span m='431500'>and</span> <span m='431640'>now</span> <span
  m='431880'>I</span> <span m='432000'>have</span> <span m='432180'>to</span>
  <span m='432280'>add</span> <span m='432630'>in</span> <span
  m='433290'>the</span> <span m='433420'>c2.</span> <span m='434092'>It</span>
  <span m='434430'>looks</span> <span m='434640'>a</span> <span
  m='434710'>little</span> <span m='434940'>messy,</span> <span
  m='436540'>but</span> <span m='436610'>it's</span> <span
  m='436980'>just</span> <span m='437290'>an</span> <span
  m='437430'>integral.</span> <span m='438310'>It's</span> <span
  m='438560'>just</span> <span m='438860'>an</span> <span
  m='438910'>integral.</span> </p><p><span m='439820'>So</span> <span
  m='440630'>now</span> <span m='440980'>what</span> <span m='441190'>is</span>
  <span m='441320'>y2</span> <span m='441950'>of</span> <span
  m='442120'>t</span> <span m='442980'>multiplied</span> <span
  m='443660'>by?</span> <span m='444550'>Well,</span> <span
  m='444810'>it's</span> <span m='444940'>multiplied</span> <span
  m='445480'>by</span> <span m='445680'>c2,</span> <span m='447070'>and</span>
  <span m='447290'>since</span> <span m='447640'>this</span> <span
  m='447890'>equation</span> <span m='448490'>gives</span> <span
  m='448770'>me</span> <span m='449010'>c2</span> <span m='449550'>prime,</span>
  <span m='450570'>I'm</span> <span m='450710'>going</span> <span
  m='450880'>to</span> <span m='450920'>have</span> <span m='451080'>to</span>
  <span m='451180'>integrate</span> <span m='452350'>to</span> <span
  m='452460'>get</span> <span m='452750'>c2.</span> <span m='454120'>And</span>
  <span m='454460'>it</span> <span m='454590'>turns</span> <span
  m='454930'>out</span> <span m='455170'>to</span> <span m='455240'>be</span>
  <span m='455440'>y1</span> <span m='457090'>of</span> <span
  m='457350'>t,</span> <span m='458500'>f</span> <span m='458990'>of</span>
  <span m='459480'>t,</span> <span m='460540'>dt,</span> <span
  m='462040'>divided</span> <span m='462510'>by</span> <span
  m='462680'>that</span> <span m='463000'>same</span> <span
  m='463560'>determinant</span> <span m='465110'>W</span> <span
  m='465590'>of</span> <span m='465720'>t.</span> </p><p><span
  m='467030'>This</span> <span m='467320'>is--</span> <span
  m='468590'>Let</span> <span m='468810'>me</span> <span m='469270'>tell</span>
  <span m='469600'>you</span> <span m='469780'>its</span> <span
  m='470140'>name.</span> <span m='470930'>It's</span> <span
  m='471180'>named</span> <span m='471560'>after</span> <span
  m='471950'>a</span> <span m='472010'>guy</span> <span m='472260'>named</span>
  <span m='472940'>Wronski,</span> <span m='474110'>so</span> <span
  m='474390'>it's</span> <span m='474600'>called</span> <span
  m='475070'>the</span> <span m='475290'>Wronskian.</span> <span
  m='482090'>You</span> <span m='482240'>can</span> <span m='482410'>call</span>
  <span m='482680'>it</span> <span m='482790'>that</span> <span
  m='483020'>or</span> <span m='483140'>not.</span> <span m='484470'>It's</span>
  <span m='484750'>this.</span> </p><p><span m='486570'>So</span> <span
  m='486790'>we</span> <span m='486950'>know</span> <span m='488340'>y1</span>
  <span m='488710'>and</span> <span m='489080'>y2.</span> <span
  m='490200'>That</span> <span m='490400'>means</span> <span
  m='490840'>we've</span> <span m='491350'>plugged</span> <span
  m='491870'>those</span> <span m='492120'>in,</span> <span m='492350'>we</span>
  <span m='492510'>find</span> <span m='492810'>the</span> <span
  m='492930'>Wronskian.</span> <span m='494020'>We</span> <span
  m='494160'>put</span> <span m='494400'>that</span> <span m='494690'>in</span>
  <span m='494870'>these</span> <span m='495150'>integrals.</span> <span
  m='496140'>We</span> <span m='496300'>have</span> <span m='496520'>the</span>
  <span m='496913'>y2s</span> <span m='497306'>and</span> <span
  m='497700'>the</span> <span m='497840'>y1s</span> <span m='498700'>and</span>
  <span m='498810'>we're</span> <span m='498960'>given</span> <span
  m='499280'>the</span> <span m='499460'>f and</span> <span m='499890'>we</span>
  <span m='500040'>integrate.</span> <span m='501170'>Well,</span> <span
  m='501500'>if</span> <span m='501680'>we</span> <span m='501840'>can</span>
  <span m='502200'>integrate.</span> <span m='503180'>I</span> <span
  m='503310'>don't</span> <span m='503550'>plan</span> <span
  m='503900'>to</span> <span m='504730'>go</span> <span
  m='505250'>probably</span> <span m='505810'>much</span> <span
  m='506100'>beyond</span> <span m='506490'>that.</span> <span
  m='506780'>Just</span> <span m='507170'>I'll</span> <span
  m='507330'>stop</span> <span m='507690'>there.</span> <span
  m='508370'>That's</span> <span m='508690'>a</span> <span
  m='508790'>formula</span> <span m='510010'>for</span> <span
  m='510180'>the</span> <span m='510340'>answer.</span> </p><p><span
  m='511700'>Well,</span> <span m='511960'>I</span> <span
  m='512110'>won't</span> <span m='512360'>completely</span> <span
  m='512980'>stop</span> <span m='513340'>there.</span> <span
  m='514070'>Let</span> <span m='514270'>me</span> <span m='515059'>do</span>
  <span m='515240'>an</span> <span m='515340'>example.</span> <span
  m='516600'>Let</span> <span m='516740'>me</span> <span m='516890'>do</span>
  <span m='517070'>an</span> <span m='517169'>example.</span> <span
  m='518620'>So</span> <span m='520770'>let's</span> <span
  m='520970'>see.</span> <span m='522309'>I</span> <span m='522450'>guess</span>
  <span m='522780'>my</span> <span m='523120'>example</span> <span
  m='523850'>will</span> <span m='524140'>be</span> <span m='524860'>a</span>
  <span m='525200'>constant</span> <span m='525680'>coefficient</span> <span
  m='526250'>equation.</span> </p><p><span m='527700'>So</span> <span
  m='527890'>constant</span> <span m='528400'>coefficient</span> <span
  m='529020'>when--</span> <span m='531200'>What</span> <span m='531310'>are
  the</span> <span m='531430'>null</span> <span m='531700'>solutions</span>
  <span m='532390'>for</span> <span m='532530'>a</span> <span
  m='532640'>constant</span> <span m='533180'>coefficient</span> <span
  m='533780'>equation?</span> <span m='535810'>You</span> <span
  m='535960'>remember</span> <span m='536340'>what</span> <span
  m='536530'>happens</span> <span m='536990'>with</span> <span
  m='537190'>constant</span> <span m='537670'>coefficients.</span> <span
  m='538710'>You</span> <span m='538880'>plug in.</span> <span
  m='540010'>You</span> <span m='540430'>get</span> <span m='541010'>s</span>
  <span m='541500'>squared</span> <span m='542270'>plus</span> <span
  m='542860'>Bs</span> <span m='544290'>plus</span> <span m='544830'>C</span>
  <span m='546360'>times--</span> <span m='547210'>You're</span> <span
  m='547460'>looking</span> <span m='547850'>for--</span> <span
  m='548680'>you're</span> <span m='548770'>trying</span> <span
  m='549160'>for</span> <span m='549370'>an</span> <span
  m='549450'>exponential,</span> <span m='550950'>and</span> <span
  m='551680'>it'll</span> <span m='551870'>work.</span> </p><p><span
  m='555300'>So</span> <span m='555500'>I</span> <span
  m='556070'>plugged--</span> <span m='557740'>This</span> <span
  m='557960'>is</span> <span m='558260'>looking</span> <span
  m='558770'>for</span> <span m='559940'>null</span> <span
  m='560200'>solutions,</span> <span m='561270'>because</span> <span
  m='561860'>we</span> <span m='562000'>have</span> <span m='562190'>to</span>
  <span m='562770'>have</span> <span m='562970'>those</span> <span
  m='563320'>to</span> <span m='563460'>start.</span> <span
  m='564750'>They</span> <span m='565310'>are</span> <span m='565330'>the</span>
  <span m='565790'>y1</span> <span m='566360'>and</span> <span
  m='566520'>y2</span> <span m='567010'>in</span> <span m='567120'>my</span>
  <span m='567310'>formula.</span> <span m='567980'>So</span> <span
  m='568370'>my</span> <span m='568530'>variation</span> <span
  m='568900'>and</span> <span m='569270'>parameters,</span> <span
  m='570010'>the</span> <span m='570110'>whole</span> <span
  m='570400'>new</span> <span m='571060'>thing,</span> <span
  m='571400'>is</span> <span m='572140'>completed</span> <span
  m='572760'>there.</span> <span m='573440'>Just</span> <span
  m='573870'>if</span> <span m='574030'>I</span> <span m='574110'>want</span>
  <span m='574380'>an</span> <span m='574490'>example,</span> <span
  m='575340'>I</span> <span m='575470'>have</span> <span m='575660'>to</span>
  <span m='576090'>solve</span> <span m='576710'>the</span> <span
  m='576880'>differential</span> <span m='577420'>equation,</span> <span
  m='578190'>and</span> <span m='578600'>for</span> <span
  m='578790'>that,</span> <span m='579480'>believe</span> <span
  m='579890'>me,</span> <span m='580250'>I'm</span> <span
  m='580480'>going</span> <span m='580620'>to</span> <span
  m='580680'>make</span> <span m='580990'>B</span> <span m='581160'>and</span>
  <span m='581310'>C</span> <span m='581570'>constant.</span> </p><p><span
  m='582520'>So</span> <span m='582700'>I</span> <span m='582820'>solve</span>
  <span m='583320'>this</span> <span m='583550'>equation.</span> <span
  m='584410'>So</span> <span m='586060'>this</span> <span
  m='586390'>gives</span> <span m='586650'>me--</span> <span
  m='587900'>Of</span> <span m='588020'>course,</span> <span m='588310'>I</span>
  <span m='588370'>can</span> <span m='588610'>cancel the</span> <span
  m='589100'>e</span> <span m='589360'>to</span> <span m='589400'>the</span>
  <span m='589550'>st,</span> <span m='590160'>because</span> <span
  m='590500'>it's</span> <span m='590750'>never</span> <span
  m='591070'>0.</span> <span m='591650'>So</span> <span m='591820'>this</span>
  <span m='592060'>has</span> <span m='592290'>to</span> <span
  m='592400'>be</span> <span m='592570'>0.</span> <span m='594000'>And</span>
  <span m='594260'>that</span> <span m='594440'>has</span> <span
  m='594720'>two</span> <span m='594940'>roots,</span> <span
  m='595610'>and</span> <span m='595740'>the</span> <span
  m='595860'>quadratic</span> <span m='596500'>formula</span> <span
  m='597070'>tells</span> <span m='597400'>me</span> <span
  m='597570'>those</span> <span m='597860'>two</span> <span
  m='598160'>roots</span> <span m='598530'>s1</span> <span m='599220'>and</span>
  <span m='599390'>s2.</span> <span m='600410'>And</span> <span
  m='600610'>then</span> <span m='600830'>my</span> <span m='601060'>null</span>
  <span m='601540'>solutions</span> <span m='602220'>are</span> <span
  m='602390'>y1</span> <span m='603570'>is</span> <span m='603820'>e</span>
  <span m='604100'>to</span> <span m='604330'>s1t</span> <span
  m='606190'>and</span> <span m='606700'>y2</span> <span m='608070'>is</span>
  <span m='610330'>e</span> <span m='610670'>to</span> <span
  m='610810'>the</span> <span m='611010'>s2t.</span> </p><p><span
  m='618390'>Now,</span> <span m='618880'>I'm</span> <span
  m='619060'>ready</span> <span m='619330'>to</span> <span m='619460'>go.</span>
  <span m='620460'>I'm</span> <span m='620540'>going</span> <span
  m='620740'>to</span> <span m='620830'>put</span> <span m='621120'>those</span>
  <span m='621620'>into</span> <span m='621850'>this</span> <span
  m='622110'>formula.</span> <span m='623870'>I</span> <span
  m='624050'>have</span> <span m='624230'>to</span> <span m='624370'>do</span>
  <span m='624540'>the</span> <span m='624690'>Wronskian,</span> <span
  m='626290'>and</span> <span m='626600'>I</span> <span m='626670'>need</span>
  <span m='626930'>another</span> <span m='627280'>blackboard.</span> <span
  m='627900'>Sorry.</span> <span m='629310'>This</span> <span
  m='629520'>is</span> <span m='629800'>the</span> <span m='630500'>only</span>
  <span m='632290'>video</span> <span m='632660'>so</span> <span
  m='632930'>far</span> <span m='633200'>that</span> <span
  m='633370'>went</span> <span m='633700'>to</span> <span m='633880'>a</span>
  <span m='633960'>third</span> <span m='634460'>board.</span> </p><p><span
  m='635130'>Can</span> <span m='635340'>you</span> <span
  m='635470'>remember</span> <span m='635900'>I</span> <span
  m='636000'>need</span> <span m='636270'>the</span> <span
  m='636390'>Wronskian</span> <span m='637040'>and</span> <span
  m='637200'>then</span> <span m='637390'>I'll</span> <span
  m='637600'>reproduce</span> <span m='638420'>the--</span> <span
  m='639480'>So</span> <span m='639680'>there's--</span> <span
  m='642100'>Let</span> <span m='642240'>me</span> <span m='642390'>copy</span>
  <span m='642810'>again.</span> </p><p><span m='644200'>Y1</span> <span
  m='645930'>is</span> <span m='646240'>e</span> <span m='646500'>to</span>
  <span m='646570'>the</span> <span m='646760'>s1t</span> <span
  m='647460'>y2</span> <span m='649905'>is</span> <span m='650190'>e</span>
  <span m='650390'>to</span> <span m='650430'>the</span> <span
  m='650600'>s2t.</span> <span m='652480'>And</span> <span m='652720'>now</span>
  <span m='652910'>that</span> <span m='653180'>Wronskian</span> <span
  m='654540'>is</span> <span m='654960'>y1,</span> <span m='656800'>y2</span>
  <span m='657280'>prime</span> <span m='658310'>minus</span> <span
  m='658940'>y2,</span> <span m='660400'>y1</span> <span
  m='660980'>prime.</span> <span m='661900'>And</span> <span
  m='661940'>what</span> <span m='662110'>does</span> <span
  m='662260'>that</span> <span m='662490'>come</span> <span
  m='662710'>out</span> <span m='662920'>to</span> <span m='663020'>be?</span>
  </p><p><span m='663710'>y1</span> <span m='664560'>is</span> <span
  m='664740'>e</span> <span m='664920'>to</span> <span m='665010'>the</span>
  <span m='665170'>s1t.</span> <span m='671350'>y2</span> <span
  m='671940'>prime</span> <span m='672550'>is</span> <span m='672720'>the</span>
  <span m='672880'>derivative</span> <span m='673410'>of</span> <span
  m='673640'>that,</span> <span m='674010'>so</span> <span
  m='674240'>it's</span> <span m='674400'>an</span> <span m='674860'>s2,</span>
  <span m='677420'>e</span> <span m='677720'>to</span> <span
  m='677830'>the</span> <span m='678230'>s2t.</span> <span
  m='681090'>That's</span> <span m='681980'>this</span> <span
  m='682280'>term</span> <span m='683300'>gave</span> <span m='683450'>me</span>
  <span m='683600'>that.</span> <span m='684590'>And</span> <span
  m='684740'>now</span> <span m='684920'>I</span> <span
  m='685160'>subtract</span> <span m='686540'>y2,</span> <span
  m='687920'>which</span> <span m='688110'>is</span> <span
  m='688240'>there.</span> <span m='689080'>y1</span> <span
  m='689620'>prime,</span> <span m='690690'>which</span> <span
  m='690850'>is</span> <span m='691250'>the</span> <span
  m='691450'>derivative</span> <span m='692050'>of</span> <span
  m='692180'>this,</span> <span m='692630'>brings</span> <span
  m='693000'>down</span> <span m='693400'>an</span> <span m='693540'>s1.</span>
  <span m='695470'>You</span> <span m='695610'>see</span> <span
  m='695900'>the</span> <span m='696770'>beauty</span> <span
  m='697110'>of</span> <span m='697240'>all</span> <span m='697400'>these</span>
  <span m='697630'>formulas.</span> <span m='698740'>Well,</span> <span
  m='699220'>beautiful</span> <span m='699670'>if</span> <span
  m='699800'>you</span> <span m='699940'>like,</span> <span
  m='700850'>formulas,</span> <span m='701990'>not</span> <span
  m='702200'>everybody</span> <span m='702690'>does.</span> <span
  m='703650'>OK.</span> </p><p><span m='704230'>So</span> <span
  m='704480'>now</span> <span m='704760'>I</span> <span m='704880'>know</span>
  <span m='707030'>all</span> <span m='707260'>the</span> <span
  m='707390'>terms,</span> <span m='708840'>and</span> <span
  m='709120'>I'm</span> <span m='709200'>prepared</span> <span
  m='709790'>to</span> <span m='709940'>write</span> <span
  m='710240'>again</span> <span m='710740'>my</span> <span
  m='711550'>formula</span> <span m='713500'>for</span> <span
  m='713720'>y</span> <span m='714010'>of</span> <span m='714130'>t,</span>
  <span m='714750'>my</span> <span m='714950'>solution.</span> <span
  m='716450'>This</span> <span m='717430'>is</span> <span m='717640'>the</span>
  <span m='717920'>climax</span> <span m='718700'>now.</span> <span
  m='719410'>I'm</span> <span m='719540'>going</span> <span m='719730'>to</span>
  <span m='719780'>use</span> <span m='720380'>the</span> <span
  m='720520'>formula</span> <span m='721060'>that</span> <span
  m='721320'>came</span> <span m='721690'>from</span> <span
  m='721890'>variation</span> <span m='722520'>of</span> <span
  m='722580'>parameters.</span> <span m='724360'>And</span> <span
  m='724760'>I'm</span> <span m='724840'>going</span> <span m='725030'>to</span>
  <span m='725190'>put</span> <span m='725580'>in</span> <span
  m='726340'>that</span> <span m='727230'>function,</span> <span
  m='728000'>that</span> <span m='728390'>function,</span> <span
  m='729450'>and</span> <span m='729630'>that</span> <span m='729920'>W,</span>
  <span m='730730'>and</span> <span m='730930'>I'm</span> <span
  m='731030'>going</span> <span m='731240'>to</span> <span m='731830'>see</span>
  <span m='732090'>what</span> <span m='732280'>I</span> <span
  m='732350'>have.</span> <span m='732990'>OK.</span> </p><p><span
  m='733780'>So</span> <span m='733990'>do you</span> <span
  m='734200'>remember</span> <span m='734650'>it</span> <span
  m='734800'>was</span> <span m='734980'>y1</span> <span m='737960'>times</span>
  <span m='738360'>an</span> <span m='738530'>integral.</span> <span
  m='740736'>Oh,</span> <span m='741160'>I</span> <span m='741430'>had</span>
  <span m='741700'>better</span> <span m='742130'>use</span> <span
  m='744340'>a</span> <span m='744420'>variable</span> <span
  m='745200'>of</span> <span m='745460'>integration</span> <span
  m='746260'>here.</span> <span m='746570'>I</span> <span
  m='746650'>don't</span> <span m='746970'>want</span> <span
  m='747160'>to</span> <span m='747230'>put</span> <span m='747580'>t</span>
  <span m='748030'>in</span> <span m='748180'>there,</span> <span
  m='748750'>because</span> <span m='749010'>t</span> <span m='749300'>is</span>
  <span m='749450'>the</span> <span m='749590'>limit</span> <span
  m='749950'>of</span> <span m='750080'>integration.</span> <span
  m='751460'>So</span> <span m='751720'>y1,</span> <span m='752070'>do</span>
  <span m='752130'>you</span> <span m='752230'>remember,</span> <span
  m='752810'>it</span> <span m='752980'>was</span> <span m='753250'>a</span>
  <span m='753370'>minus</span> <span m='756000'>y2</span> <span
  m='757242'>e</span> <span m='757710'>to</span> <span m='757810'>s2--</span>
  <span m='759010'>I'll</span> <span m='759510'>use</span> <span
  m='759930'>just</span> <span m='760150'>capital</span> <span
  m='760750'>T--</span> <span m='761820'>time</span> <span
  m='762290'>divided</span> <span m='762840'>by</span> <span
  m='763530'>W.</span> </p><p><span m='764590'>Remember,</span> <span
  m='765000'>there's</span> <span m='765250'>an</span> <span m='765470'>f</span>
  <span m='766130'>of</span> <span m='766680'>t</span> <span
  m='767590'>and</span> <span m='768010'>there's a</span> <span
  m='768120'>dT,</span> <span m='769770'>and</span> <span m='770110'>I'm</span>
  <span m='770210'>using</span> <span m='770620'>a</span> <span
  m='770740'>capital</span> <span m='771370'>T</span> <span m='771780'>as</span>
  <span m='772050'>the</span> <span m='772210'>dummy</span> <span
  m='772610'>variable.</span> <span m='773670'>And</span> <span
  m='774090'>in</span> <span m='774280'>the</span> <span
  m='774370'>bottom</span> <span m='774820'>goes</span> <span
  m='775190'>W,</span> <span m='776030'>which</span> <span m='776300'>is</span>
  <span m='776690'>s2</span> <span m='777710'>minus</span> <span
  m='778220'>s1</span> <span m='779950'>e</span> <span m='780460'>to</span>
  <span m='780650'>the</span> <span m='781620'>s1T,</span> <span
  m='783040'>e</span> <span m='783854'>to</span> <span m='784261'>the</span>
  <span m='784970'>s2T.</span> </p><p><span m='787910'>That</span> <span
  m='788310'>was</span> <span m='788990'>the</span> <span
  m='789120'>first</span> <span m='789460'>term.</span> <span
  m='790110'>This</span> <span m='790370'>was</span> <span m='790680'>the</span>
  <span m='791250'>c1</span> <span m='791956'>that</span> <span
  m='792310'>multiplied</span> <span m='793740'>y1.</span> <span
  m='795640'>Now,</span> <span m='795920'>I</span> <span m='796130'>have</span>
  <span m='796330'>to</span> <span m='796520'>remember</span> <span
  m='797080'>the</span> <span m='798330'>y2,</span> <span m='799210'>the</span>
  <span m='799310'>second</span> <span m='800670'>null</span> <span
  m='800940'>solution,</span> <span m='801840'>times</span> <span
  m='802330'>its</span> <span m='802520'>c2.</span> <span m='803230'>And</span>
  <span m='803350'>that</span> <span m='803550'>was</span> <span
  m='803730'>the</span> <span m='803860'>integral.</span> </p><p><span
  m='805150'>And</span> <span m='805400'>again,</span> <span
  m='806160'>now</span> <span m='806350'>I</span> <span m='806520'>have</span>
  <span m='806900'>a</span> <span m='807290'>plus</span> <span
  m='807830'>sign,</span> <span m='808670'>I</span> <span
  m='808720'>think,</span> <span m='809350'>so</span> <span m='809590'>it</span>
  <span m='809680'>was--</span> <span m='810960'>put</span> <span
  m='811350'>in</span> <span m='811520'>parentheses</span> <span
  m='812260'>there.</span> <span m='812620'>That</span> <span
  m='812840'>was</span> <span m='813576'>the</span> <span m='814062'>W on</span>
  <span m='814550'>the</span> <span m='814630'>bottom.</span> </p><p><span
  m='815460'>So</span> <span m='815740'>it</span> <span m='815870'>was</span>
  <span m='816710'>e</span> <span m='817170'>to</span> <span
  m='817330'>the</span> <span m='817590'>s1T,</span> <span m='821305'>f</span>
  <span m='821680'>of</span> <span m='821860'>T,</span> <span
  m='822295'>dT,</span> <span m='822950'>dT,</span> <span m='824400'>and</span>
  <span m='824460'>that</span> <span m='824720'>same</span> <span
  m='825280'>W</span> <span m='825830'>down</span> <span m='826170'>here,</span>
  <span m='826550'>s2</span> <span m='827700'>minus</span> <span
  m='828210'>s1,</span> <span m='829580'>e</span> <span m='829960'>to</span>
  <span m='830260'>s1T,</span> <span m='831230'>e</span> <span m='832680'>to
  the</span> <span m='832790'>s2T.</span> <span m='834880'>OK.</span>
  </p><p><span m='837420'>That's</span> <span m='837810'>the</span> <span
  m='840550'>variation</span> <span m='841370'>of</span> <span
  m='841460'>parameters</span> <span m='842120'>formula</span> <span
  m='842780'>for</span> <span m='844830'>these</span> <span
  m='845230'>nice</span> <span m='845750'>null</span> <span
  m='846090'>solutions.</span> <span m='846980'>It</span> <span
  m='847370'>doesn't</span> <span m='847650'>get</span> <span
  m='847820'>better</span> <span m='848070'>than</span> <span
  m='848280'>this.</span> <span m='849140'>And</span> <span m='849240'>in</span>
  <span m='849350'>fact,</span> <span m='849900'>I</span> <span
  m='850000'>guess</span> <span m='850200'>I</span> <span m='850300'>can</span>
  <span m='850570'>cancel</span> <span m='851580'>e</span> <span
  m='851750'>to</span> <span m='851810'>the</span> <span m='852010'>s2T</span>
  <span m='852850'>there.</span> <span m='854030'>I</span> <span
  m='854220'>can</span> <span m='854460'>cancel</span> <span
  m='854930'>the</span> <span m='855190'>e</span> <span m='855240'>to the</span>
  <span m='855380'>s1T</span> <span m='856510'>there.</span> <span
  m='857580'>I</span> <span m='857720'>can</span> <span m='857980'>put</span>
  <span m='858260'>this</span> <span m='858630'>up</span> <span
  m='859030'>with</span> <span m='859250'>a</span> <span m='859650'>minus</span>
  <span m='860250'>exponent.</span> </p><p><span m='862190'>Oh</span> <span
  m='862590'>yeah,</span> <span m='862960'>it's</span> <span
  m='863110'>going</span> <span m='863260'>to</span> <span m='863320'>be</span>
  <span m='863520'>good.</span> <span m='864490'>It's</span> <span
  m='864690'>going</span> <span m='864870'>to</span> <span m='864930'>be</span>
  <span m='865110'>good.</span> </p><p><span m='865470'>So</span> <span
  m='865680'>here</span> <span m='865940'>is</span> <span m='866040'>a</span>
  <span m='866150'>constant</span> <span m='866720'>s2</span> <span
  m='867140'>minus</span> <span m='867550'>s1,</span> <span
  m='868500'>the</span> <span m='868590'>same</span> <span m='868930'>for</span>
  <span m='869080'>both</span> <span m='869420'>terms.</span> <span
  m='870900'>Then</span> <span m='871120'>I'll</span> <span
  m='871330'>put</span> <span m='871580'>this</span> <span m='871840'>up</span>
  <span m='872090'>here</span> <span m='872540'>as</span> <span
  m='872780'>a</span> <span m='872900'>negative</span> <span
  m='873430'>exponent,</span> <span m='874080'>so</span> <span
  m='874230'>there's</span> <span m='874450'>an</span> <span m='874600'>e</span>
  <span m='874810'>to</span> <span m='874900'>the</span> <span
  m='875050'>s1t,</span> <span m='876400'>I'll</span> <span
  m='876560'>get--</span> <span m='877890'>You</span> <span
  m='878070'>might</span> <span m='878890'>even</span> <span
  m='879780'>see</span> <span m='879990'>this</span> <span
  m='880230'>coming.</span> <span m='881470'>I</span> <span
  m='881600'>get</span> <span m='882590'>this</span> <span m='882790'>1</span>
  <span m='883110'>over</span> <span m='883670'>s2</span> <span
  m='883870'>minus</span> <span m='884540'>s1,</span> <span
  m='886550'>and</span> <span m='886800'>then</span> <span m='887010'>I</span>
  <span m='887100'>have</span> <span m='887280'>the</span> <span
  m='887410'>integral.</span> </p><p><span m='890340'>And</span> <span
  m='890560'>here</span> <span m='890830'>I</span> <span m='891000'>have</span>
  <span m='891180'>an f</span> <span m='891450'>of</span> <span
  m='891640'>T</span> <span m='892070'>in</span> <span m='892240'>both</span>
  <span m='892550'>integrals.</span> <span m='893040'>Let</span> <span
  m='893150'>me</span> <span m='893270'>just</span> <span m='894140'>put</span>
  <span m='894380'>that</span> <span m='895150'>f</span> <span
  m='895390'>of</span> <span m='895560'>T</span> <span m='895986'>down.</span>
  <span m='898480'>And</span> <span m='898970'>I</span> <span
  m='899030'>have</span> <span m='899190'>a</span> <span m='899270'>dT.</span>
  <span m='901600'>And</span> <span m='901780'>then</span> <span
  m='901970'>what</span> <span m='902160'>do I--</span> <span
  m='902670'>What</span> <span m='902750'>else</span> <span m='903000'>do</span>
  <span m='903130'>I</span> <span m='903250'>have?</span> <span
  m='904190'>I</span> <span m='904240'>have</span> <span m='904920'>this</span>
  <span m='905590'>thing</span> <span m='906150'>which</span> <span
  m='906420'>I</span> <span m='906540'>can</span> <span m='906740'>put</span>
  <span m='906960'>inside</span> <span m='907640'>but</span> <span
  m='907850'>with</span> <span m='908030'>a</span> <span m='908750'>small</span>
  <span m='909040'>t.</span> <span m='910340'>I'm not</span> <span
  m='910660'>integrating</span> <span m='911680'>that.</span> <span
  m='912640'>I</span> <span m='912830'>think</span> <span m='913720'>if</span>
  <span m='913920'>you</span> <span m='914300'>look</span> <span
  m='914660'>there,</span> <span m='914970'>you</span> <span
  m='915110'>have</span> <span m='915550'>e</span> <span m='916250'>to</span>
  <span m='916630'>the</span> <span m='916870'>s1t,</span> <span
  m='920080'>and</span> <span m='920370'>then</span> <span
  m='920920'>this</span> <span m='921150'>will</span> <span
  m='921300'>come</span> <span m='921530'>up</span> <span m='921710'>with</span>
  <span m='921910'>a</span> <span m='921960'>minus</span> <span
  m='922450'>sign.</span> <span m='923610'>Does</span> <span
  m='923720'>that</span> <span m='923900'>look</span> <span
  m='924040'>good</span> <span m='924280'>to you</span> <span
  m='926500'>for</span> <span m='926640'>the</span> <span
  m='926790'>first</span> <span m='927110'>term?</span> </p><p><span
  m='928470'>And</span> <span m='928660'>then</span> <span m='928840'>the</span>
  <span m='928970'>second</span> <span m='929390'>term</span> <span
  m='930740'>will</span> <span m='931010'>have</span> <span
  m='932420'>that</span> <span m='932630'>same</span> <span m='933100'>1</span>
  <span m='933330'>over</span> <span m='933590'>s2</span> <span
  m='934310'>minus</span> <span m='934750'>s1.</span> <span
  m='936810'>Now,</span> <span m='937110'>what</span> <span m='937270'>do</span>
  <span m='937390'>I</span> <span m='937520'>have?</span> <span
  m='940350'>e</span> <span m='940590'>to</span> <span m='940700'>the</span>
  <span m='940850'>s2T</span> <span m='941750'>is</span> <span
  m='941910'>going</span> <span m='942120'>to</span> <span
  m='942220'>come</span> <span m='942450'>up</span> <span m='942650'>with</span>
  <span m='942830'>a</span> <span m='942880'>minus</span> <span
  m='943360'>sign,</span> <span m='943700'>so</span> <span m='943870'>I</span>
  <span m='944010'>have</span> <span m='944200'>an</span> <span
  m='944350'>integral</span> <span m='946230'>of</span> <span
  m='947160'>e</span> <span m='947490'>to</span> <span m='947590'>the</span>
  <span m='947900'>s2,</span> <span m='948210'>t</span> <span
  m='950200'>minus</span> <span m='950860'>T.</span> <span m='954010'>I</span>
  <span m='954460'>think</span> <span m='954710'>there's</span> <span
  m='954920'>a</span> <span m='955010'>minus.</span> <span
  m='956510'>Haha.</span> <span m='957770'>Don't</span> <span
  m='958050'>forget</span> <span m='958440'>that</span> <span
  m='958680'>minus,</span> <span m='959370'>Professor</span> <span
  m='960000'>Strang.</span> <span m='961520'>And</span> <span
  m='962380'>f</span> <span m='962600'>of</span> <span m='962770'>T,</span>
  <span m='964120'>dT.</span> </p><p><span m='966480'>Now,</span> <span
  m='967080'>right</span> <span m='967530'>there</span> <span
  m='968170'>I'm</span> <span m='968350'>going</span> <span m='968570'>to</span>
  <span m='968700'>put</span> <span m='970290'>the</span> <span
  m='970480'>answer.</span> <span m='971870'>I'm</span> <span
  m='972070'>going</span> <span m='972240'>to</span> <span m='972300'>put</span>
  <span m='972490'>the</span> <span m='972630'>answer,</span> <span
  m='972940'>and</span> <span m='973430'>for</span> <span m='973560'>me,</span>
  <span m='973860'>this</span> <span m='974110'>was</span> <span
  m='974300'>the</span> <span m='974410'>highlight</span> <span
  m='974950'>of</span> <span m='975050'>the</span> <span m='975140'>whole</span>
  <span m='975420'>thing.</span> <span m='977220'>I</span> <span
  m='977410'>didn't</span> <span m='977690'>know</span> <span
  m='977900'>what</span> <span m='978160'>would</span> <span
  m='978390'>come</span> <span m='978660'>out</span> <span m='978860'>of</span>
  <span m='978960'>variation</span> <span m='979280'>of</span> <span
  m='979600'>parameters.</span> <span m='980200'>I</span> <span
  m='980420'>wasn't--</span> <span m='980980'>I'm</span> <span
  m='981180'>not</span> <span m='981580'>at all an</span> <span
  m='981950'>expert</span> <span m='982450'>in</span> <span
  m='982570'>that.</span> <span m='983790'>But</span> <span m='983930'>I</span>
  <span m='984030'>just</span> <span m='984810'>followed</span> <span
  m='985220'>the</span> <span m='985480'>rules,</span> <span
  m='986790'>put</span> <span m='987040'>in</span> <span m='987490'>these</span>
  <span m='988110'>two</span> <span m='990970'>null</span> <span
  m='991280'>solutions,</span> <span m='992520'>computed</span> <span
  m='993130'>W,</span> <span m='993990'>put</span> <span m='994350'>it</span>
  <span m='994590'>all</span> <span m='994920'>in,</span> <span
  m='995350'>ended</span> <span m='995720'>up</span> <span
  m='995890'>with</span> <span m='996050'>this</span> <span
  m='996300'>answer,</span> <span m='997700'>and</span> <span
  m='998220'>then</span> <span m='999100'>I</span> <span m='999250'>was</span>
  <span m='999480'>very</span> <span m='999810'>happy</span> <span
  m='1000260'>to</span> <span m='1000390'>recognize</span> <span
  m='1001340'>what</span> <span m='1001570'>this</span> <span
  m='1001790'>answer</span> <span m='1002200'>was.</span> <span
  m='1003080'>This</span> <span m='1003360'>answer</span> <span
  m='1004650'>is</span> <span m='1005090'>the</span> <span
  m='1005490'>integral</span> <span m='1005730'>of</span> <span
  m='1005900'>something</span> <span m='1006600'>times--</span> <span
  m='1008600'>This</span> <span m='1008710'>is</span> <span
  m='1008840'>the</span> <span m='1008960'>integral</span> <span
  m='1009420'>from</span> <span m='1009630'>0</span> <span m='1009960'>to</span>
  <span m='1010140'>t</span> <span m='1011550'>of</span> <span
  m='1011680'>something</span> <span m='1012200'>times</span> <span
  m='1012600'>f</span> <span m='1012830'>of</span> <span m='1013010'>T,</span>
  <span m='1015020'>dT.</span> <span m='1016060'>And</span> <span
  m='1016530'>what</span> <span m='1016880'>is</span> <span
  m='1017050'>that</span> <span m='1017340'>something?</span> <span
  m='1018530'>It</span> <span m='1018730'>comes</span> <span
  m='1019160'>from</span> <span m='1020020'>that</span> <span
  m='1020620'>term</span> <span m='1021020'>divided</span> <span
  m='1021500'>by</span> <span m='1021670'>this</span> <span
  m='1022270'>with</span> <span m='1022510'>a</span> <span
  m='1022560'>minus</span> <span m='1022970'>sign,</span> <span
  m='1024010'>and</span> <span m='1024349'>this</span> <span
  m='1024660'>term</span> <span m='1025109'>divided</span> <span
  m='1025540'>by</span> <span m='1025700'>that</span> <span
  m='1026020'>with</span> <span m='1026220'>a</span> <span
  m='1026280'>minus</span> <span m='1026780'>sign,</span> <span
  m='1027930'>and</span> <span m='1028780'>when</span> <span
  m='1029000'>you</span> <span m='1029130'>put</span> <span
  m='1029420'>those</span> <span m='1029819'>in,</span> <span
  m='1031220'>what</span> <span m='1031540'>do</span> <span
  m='1031609'>you</span> <span m='1031770'>get</span> <span
  m='1032339'>but</span> <span m='1032700'>the</span> <span
  m='1032940'>impulse</span> <span m='1033700'>response.</span> <span
  m='1035660'>What</span> <span m='1035970'>I've</span> <span
  m='1036150'>called</span> <span m='1036540'>g</span> <span
  m='1036800'>of</span> <span m='1036970'>t.</span> <span m='1038119'>And</span>
  <span m='1038450'>it's</span> <span m='1038819'>that</span> <span
  m='1039319'>t</span> <span m='1039660'>minus</span> <span
  m='1040190'>T.</span> </p><p><span m='1040470'>So</span> <span
  m='1041069'>here</span> <span m='1041349'>you</span> <span
  m='1041490'>go.</span> <span m='1041940'>This</span> <span
  m='1042200'>is</span> <span m='1042380'>the</span> <span
  m='1042500'>big</span> <span m='1042780'>moment.</span> </p><p><span
  m='1043619'>g</span> <span m='1044859'>of</span> <span m='1045020'>t</span>
  <span m='1045690'>minus</span> <span m='1046369'>capital</span> <span
  m='1046930'>T,</span> <span m='1047636'>f</span> <span m='1047990'>of</span>
  <span m='1048160'>T,</span> <span m='1049070'>dT.</span> <span
  m='1051220'>Focus</span> <span m='1052510'>camera</span> <span
  m='1052960'>and</span> <span m='1053410'>attention</span> <span
  m='1054090'>on</span> <span m='1054270'>that</span> <span
  m='1054500'>last</span> <span m='1055530'>result.</span> <span
  m='1056140'>So</span> <span m='1056270'>that's</span> <span
  m='1056670'>the</span> <span m='1056810'>formula</span> <span
  m='1057340'>that</span> <span m='1057540'>we</span> <span
  m='1057720'>end</span> <span m='1057960'>up</span> <span
  m='1058150'>with</span> <span m='1058800'>from</span> <span
  m='1061420'>the</span> <span m='1061570'>variation</span> <span
  m='1062260'>of</span> <span m='1062360'>parameters</span> <span
  m='1063820'>applied</span> <span m='1064450'>to</span> <span
  m='1064570'>the</span> <span m='1064720'>constant</span> <span
  m='1065280'>coefficient</span> <span m='1065960'>problem.</span> <span
  m='1066970'>It's</span> <span m='1067330'>given</span> <span
  m='1067730'>us</span> <span m='1068170'>what</span> <span
  m='1068410'>we</span> <span m='1068660'>already</span> <span
  m='1069180'>knew.</span> <span m='1070800'>It's</span> <span
  m='1071110'>told</span> <span m='1071530'>us</span> <span
  m='1071820'>that</span> <span m='1072240'>the</span> <span
  m='1072430'>solution,</span> <span m='1073620'>the</span> <span
  m='1073740'>particular</span> <span m='1074520'>solution,</span> <span
  m='1075130'>y</span> <span m='1075470'>of</span> <span m='1075640'>t</span>
  <span m='1077240'>is</span> <span m='1078690'>the</span> <span
  m='1078890'>integral</span> <span m='1080710'>of</span> <span
  m='1081580'>the</span> <span m='1082330'>inputs,</span> <span
  m='1084680'>the</span> <span m='1084800'>right-hand</span> <span
  m='1085250'>side,</span> <span m='1085630'>the</span> <span
  m='1085730'>forcing</span> <span m='1086280'>term,</span> <span
  m='1087080'>f</span> <span m='1087330'>of</span> <span m='1087500'>T,</span>
  <span m='1089030'>times</span> <span m='1089710'>the</span> <span
  m='1089860'>growth</span> <span m='1090350'>term,</span> <span
  m='1092144'>the</span> <span m='1092980'>impulse</span> <span
  m='1093520'>response.</span> </p><p><span m='1094710'>We</span> <span
  m='1094840'>could</span> <span m='1095030'>imagine</span> <span
  m='1096090'>that</span> <span m='1097270'>at</span> <span
  m='1097430'>every</span> <span m='1097720'>time</span> <span
  m='1098070'>T,</span> <span m='1098450'>we</span> <span
  m='1098640'>have</span> <span m='1098890'>an</span> <span
  m='1099040'>impulse</span> <span m='1099840'>of</span> <span
  m='1100030'>size</span> <span m='1100400'>f</span> <span m='1100600'>of</span>
  <span m='1101180'>T.</span> <span m='1101990'>And</span> <span
  m='1102190'>that</span> <span m='1102440'>impulse</span> <span
  m='1103150'>grows</span> <span m='1104210'>by</span> <span
  m='1104400'>the</span> <span m='1104590'>impulse</span> <span
  m='1105060'>response,</span> <span m='1105800'>g,</span> <span
  m='1107120'>over</span> <span m='1107450'>the</span> <span
  m='1107590'>remaining</span> <span m='1108160'>time</span> <span
  m='1109360'>until</span> <span m='1109670'>it</span> <span m='1109980'>gets us
  to</span> <span m='1110390'>here.</span> </p><p><span m='1111750'>Let
  me</span> <span m='1112180'>just</span> <span m='1113490'>clean</span> <span
  m='1113910'>that</span> <span m='1114150'>up.</span> </p><p><span
  m='1115770'>And</span> <span m='1115920'>then</span> <span
  m='1116230'>we</span> <span m='1116510'>have</span> <span
  m='1116890'>to</span> <span m='1118170'>take</span> <span
  m='1118440'>all</span> <span m='1118680'>those</span> <span
  m='1119380'>inputs,</span> <span m='1120630'>so</span> <span
  m='1120780'>we</span> <span m='1120990'>integrate</span> <span
  m='1121500'>over</span> <span m='1121770'>all</span> <span
  m='1122140'>those</span> <span m='1122400'>inputs,</span> <span
  m='1123650'>and</span> <span m='1124010'>we</span> <span
  m='1124140'>get</span> <span m='1124350'>that</span> <span
  m='1124570'>answer.</span> <span m='1125940'>That's</span> <span
  m='1126290'>the</span> <span m='1126450'>ultimate</span> <span
  m='1127560'>formula</span> <span m='1128840'>for</span> <span
  m='1129030'>the</span> <span m='1129220'>solution</span> <span
  m='1130070'>to</span> <span m='1131260'>our</span> <span
  m='1131460'>differential</span> <span m='1132020'>equations,</span> <span
  m='1132965'>to</span> <span m='1133240'>our</span> <span
  m='1133450'>linear</span> <span m='1134220'>constant</span> <span
  m='1134690'>coefficient</span> <span m='1135360'>differential</span> <span
  m='1135900'>equation.</span> <span m='1136730'>So</span> <span
  m='1136880'>we've</span> <span m='1137040'>reproduced</span> <span
  m='1137780'>that</span> <span m='1138060'>formula</span> <span
  m='1138890'>in</span> <span m='1139140'>the</span> <span
  m='1139510'>one</span> <span m='1139860'>case,</span> <span
  m='1140940'>constant</span> <span m='1141420'>coefficient</span> <span
  m='1142020'>case,</span> <span m='1142840'>when</span> <span
  m='1143300'>we</span> <span m='1144080'>can</span> <span
  m='1144330'>find</span> <span m='1144810'>the</span> <span
  m='1144910'>null</span> <span m='1145170'>solutions</span> <span
  m='1146200'>and</span> <span m='1147640'>run</span> <span
  m='1147980'>this</span> <span m='1148270'>variation</span> <span
  m='1148900'>of</span> <span m='1148980'>parameters</span> <span
  m='1150210'>formula</span> <span m='1151120'>right</span> <span
  m='1151450'>through</span> <span m='1151780'>to</span> <span
  m='1151880'>the</span> <span m='1152040'>end,</span> <span
  m='1152700'>and</span> <span m='1152910'>that's</span> <span
  m='1153220'>the</span> <span m='1153420'>end.</span> </p><p><span
  m='1155090'>Thank</span> <span m='1155330'>you.</span> </p>
uid: 84a678c4b78894f8ffd8f8ee2da62cea
type: courses
layout: video
---
