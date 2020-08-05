---
about_this_resource_text: ''
embedded_media:
  - id: Video-YouTube-Stream
    media_location: c_2RtTEkyo8
    parent_uid: e7a21c91c5c517f3d5b45a2f2af4833c
    title: Video-YouTube-Stream
    type: Video
    uid: e1d952a081542d8c2fca83755b00b9eb
  - id: 3Play-3Play YouTube id-Stream
    media_location: c_2RtTEkyo8
    parent_uid: e7a21c91c5c517f3d5b45a2f2af4833c
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: a930a4f1d63b41d1e9a11c7ef7ec530c
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/c_2RtTEkyo8/default.jpg'
    parent_uid: e7a21c91c5c517f3d5b45a2f2af4833c
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: bcd5f02dcec3b22915a05cb94fce0dbd
  - id: c_2RtTEkyo8.srt
    parent_uid: e7a21c91c5c517f3d5b45a2f2af4833c
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-5-thresholding/video-5-thresholding-0/c_2RtTEkyo8.srt
    title: 3play caption file
    type: null
    uid: 3b18ed018d73cc5b9a7e3f03aa57e505
  - id: c_2RtTEkyo8.pdf
    parent_uid: e7a21c91c5c517f3d5b45a2f2af4833c
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-5-thresholding/video-5-thresholding-0/c_2RtTEkyo8.pdf
    title: 3play pdf file
    type: null
    uid: f6f8d52c925f25e79a0a3ab81ec6c933
  - id: Caption-3Play YouTube id-SRT
    parent_uid: e7a21c91c5c517f3d5b45a2f2af4833c
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: bc545e25805391e405539d26e15348c2
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: e7a21c91c5c517f3d5b45a2f2af4833c
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 2836cb7d7f9d8ef2195bbf24002eb53c
  - id: Video-InternetArchive-MP4
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_3.2.08_300k.mp4
    parent_uid: e7a21c91c5c517f3d5b45a2f2af4833c
    title: Video-Internet Archive-MP4
    type: Video
    uid: 54c92c28c40fad7d0fc2553f9df75c6c
inline_embed_id: 19432541video5thresholding15077482
order_index: 575
parent_uid: 7bf86a6c2bb6629ed20e4dd216833197
related_resources_text: ''
short_url: video-5-thresholding-0
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/logistic-regression/modeling-the-expert-an-introduction-to-logistic-regression/video-5-thresholding/video-5-thresholding-0
title: 'Video 5: Thresholding'
transcript: >-
  <p><span m='4500'>We</span> <span m='4776'>saw</span> <span m='5053'>in</span>
  <span m='5330'>the</span> <span m='5606'>previous</span> <span
  m='5883'>video</span> <span m='6160'>that</span> <span m='6436'>the</span>
  <span m='6713'>outcome</span> <span m='6990'>of</span> <span m='7475'>a</span>
  <span m='7960'>logistic</span> <span m='8445'>regression</span> <span
  m='8930'>model</span> <span m='9415'>is</span> <span m='9900'>a</span> <span
  m='10385'>probability.</span> </p><p><span m='10870'>Often,</span> <span
  m='11293'>we</span> <span m='11717'>want</span> <span m='12141'>to</span>
  <span m='12565'>make</span> <span m='12988'>an</span> <span
  m='13412'>actual</span> <span m='13836'>prediction.</span> </p><p><span
  m='14260'>Should</span> <span m='14617'>we</span> <span
  m='14974'>predict</span> <span m='15331'>1</span> <span m='15688'>for</span>
  <span m='16045'>poor</span> <span m='16402'>care,</span> <span
  m='16760'>or</span> <span m='17178'>should</span> <span m='17597'>we</span>
  <span m='18016'>predict</span> <span m='18435'>0</span> <span
  m='18853'>for</span> <span m='19272'>good</span> <span m='19691'>care?</span>
  </p><p><span m='20110'>We</span> <span m='20577'>can</span> <span
  m='21044'>convert</span> <span m='21511'>the</span> <span
  m='21978'>probabilities</span> <span m='22445'>to</span> <span
  m='22912'>predictions</span> <span m='23380'>using</span> <span
  m='23901'>what's</span> <span m='24422'>called</span> <span m='24944'>a</span>
  <span m='25465'>threshold</span> <span m='25987'>value,</span> <span
  m='26508'>t.</span> </p><p><span m='27030'>If</span> <span
  m='27344'>the</span> <span m='27659'>probability</span> <span
  m='27973'>of</span> <span m='28288'>poor</span> <span m='28602'>care</span>
  <span m='28917'>is</span> <span m='29231'>greater</span> <span
  m='29546'>than</span> <span m='29860'>this</span> <span
  m='30175'>threshold</span> <span m='30490'>value,</span> <span
  m='31032'>t,</span> <span m='31575'>we</span> <span m='32118'>predict</span>
  <span m='32661'>poor</span> <span m='33204'>quality</span> <span
  m='33747'>care.</span> </p><p><span m='34290'>But</span> <span
  m='34578'>if</span> <span m='34867'>the</span> <span
  m='35155'>probability</span> <span m='35444'>of</span> <span
  m='35732'>poor</span> <span m='36021'>care</span> <span m='36310'>is</span>
  <span m='36578'>less</span> <span m='36846'>than</span> <span
  m='37115'>the</span> <span m='37383'>threshold</span> <span
  m='37651'>value,</span> <span m='37920'>t,</span> <span m='38375'>then</span>
  <span m='38831'>we</span> <span m='39287'>predict</span> <span
  m='39742'>good</span> <span m='40198'>quality</span> <span
  m='40654'>care.</span> </p><p><span m='41110'>But</span> <span
  m='41533'>what</span> <span m='41956'>value</span> <span
  m='42379'>should</span> <span m='42802'>we</span> <span m='43225'>pick</span>
  <span m='43648'>for</span> <span m='44071'>the</span> <span
  m='44494'>threshold,</span> <span m='44917'>t?</span> </p><p><span
  m='45340'>The</span> <span m='45748'>threshold</span> <span
  m='46157'>value,</span> <span m='46565'>t,</span> <span m='46974'>is</span>
  <span m='47382'>often</span> <span m='47791'>selected</span> <span
  m='48200'>based</span> <span m='48580'>on</span> <span m='48960'>which</span>
  <span m='49340'>errors</span> <span m='49720'>are</span> <span
  m='50100'>better.</span> </p><p><span m='50480'>You</span> <span
  m='50820'>might</span> <span m='51160'>be</span> <span
  m='51500'>thinking</span> <span m='51840'>that</span> <span
  m='52180'>making</span> <span m='52520'>no</span> <span
  m='52860'>errors</span> <span m='53200'>is</span> <span
  m='53541'>better,</span> <span m='53882'>which</span> <span
  m='54224'>is,</span> <span m='54565'>of</span> <span m='54907'>course,</span>
  <span m='55248'>true.</span> </p><p><span m='55590'>But</span> <span
  m='55913'>it's</span> <span m='56236'>rare</span> <span m='56559'>to</span>
  <span m='56882'>have</span> <span m='57205'>a</span> <span
  m='57528'>model</span> <span m='57851'>that</span> <span
  m='58174'>predicts</span> <span m='58497'>perfectly,</span> <span
  m='58820'>so</span> <span m='59202'>you're</span> <span m='59585'>bound</span>
  <span m='59968'>to</span> <span m='60351'>make</span> <span
  m='60734'>some</span> <span m='61117'>errors.</span> </p><p><span
  m='61500'>There</span> <span m='61755'>are</span> <span m='62011'>two</span>
  <span m='62267'>types</span> <span m='62523'>of</span> <span
  m='62778'>errors</span> <span m='63034'>that</span> <span m='63290'>a</span>
  <span m='63546'>model</span> <span m='63801'>can</span> <span
  m='64057'>make</span> <span m='64313'>--</span> <span m='64569'>ones</span>
  <span m='64910'>where</span> <span m='65251'>you</span> <span
  m='65593'>predict</span> <span m='65934'>1,</span> <span m='66275'>or</span>
  <span m='66617'>poor</span> <span m='66958'>care,</span> <span
  m='67300'>but</span> <span m='67647'>the</span> <span m='67995'>actual</span>
  <span m='68342'>outcome</span> <span m='68690'>is</span> <span
  m='69037'>0,</span> <span m='69385'>and</span> <span m='69732'>ones</span>
  <span m='70080'>where</span> <span m='70427'>you</span> <span
  m='70775'>predict</span> <span m='71122'>0,</span> <span m='71470'>or</span>
  <span m='71917'>good</span> <span m='72365'>care,</span> <span
  m='72813'>but</span> <span m='73261'>the</span> <span m='73708'>actual</span>
  <span m='74156'>outcome</span> <span m='74604'>is</span> <span
  m='75052'>1.</span> </p><p><span m='75500'>If</span> <span m='75896'>we</span>
  <span m='76292'>pick</span> <span m='76688'>a</span> <span
  m='77085'>large</span> <span m='77481'>threshold</span> <span
  m='77877'>value</span> <span m='78273'>t,</span> <span m='78670'>then</span>
  <span m='79014'>we</span> <span m='79358'>will</span> <span
  m='79702'>predict</span> <span m='80047'>poor</span> <span
  m='80391'>care</span> <span m='80735'>rarely,</span> <span
  m='81080'>since</span> <span m='81425'>the</span> <span
  m='81770'>probability</span> <span m='82115'>of</span> <span
  m='82460'>poor</span> <span m='82805'>care</span> <span m='83150'>has</span>
  <span m='83470'>to</span> <span m='83790'>be</span> <span
  m='84110'>really</span> <span m='84430'>large</span> <span m='84750'>to</span>
  <span m='85070'>be</span> <span m='85390'>greater</span> <span
  m='85710'>than</span> <span m='86030'>the</span> <span
  m='86350'>threshold.</span> </p><p><span m='86670'>This</span> <span
  m='86934'>means</span> <span m='87198'>that</span> <span m='87463'>we</span>
  <span m='87727'>will</span> <span m='87992'>make</span> <span
  m='88256'>more</span> <span m='88521'>errors</span> <span
  m='88785'>where</span> <span m='89050'>we</span> <span m='89455'>say</span>
  <span m='89861'>good</span> <span m='90266'>care,</span> <span
  m='90672'>but</span> <span m='91077'>it's</span> <span
  m='91483'>actually</span> <span m='91888'>poor</span> <span
  m='92294'>care.</span> </p><p><span m='92700'>This</span> <span
  m='93028'>approach</span> <span m='93357'>would</span> <span
  m='93686'>detect</span> <span m='94015'>the</span> <span
  m='94344'>patients</span> <span m='94673'>receiving</span> <span
  m='95002'>the</span> <span m='95331'>worst</span> <span m='95660'>care</span>
  <span m='96326'>and</span> <span m='96993'>prioritize</span> <span
  m='97660'>them</span> <span m='98326'>for</span> <span
  m='98993'>intervention.</span> </p><p><span m='99660'>On</span> <span
  m='100000'>the</span> <span m='100341'>other</span> <span
  m='100682'>hand,</span> <span m='101023'>if</span> <span m='101364'>the</span>
  <span m='101705'>threshold</span> <span m='102046'>value,</span> <span
  m='102387'>t,</span> <span m='102728'>is</span> <span m='103069'>small,</span>
  <span m='103410'>we</span> <span m='103754'>predict</span> <span
  m='104098'>poor</span> <span m='104442'>care</span> <span
  m='104786'>frequently,</span> <span m='105130'>and</span> <span
  m='105474'>we</span> <span m='105818'>predict</span> <span
  m='106162'>good</span> <span m='106506'>care</span> <span
  m='106850'>rarely.</span> </p><p><span m='108060'>This</span> <span
  m='108320'>means</span> <span m='108580'>that</span> <span
  m='108840'>we</span> <span m='109100'>will</span> <span m='109360'>make</span>
  <span m='109620'>more</span> <span m='109880'>errors</span> <span
  m='110140'>where</span> <span m='110400'>we</span> <span m='110790'>say</span>
  <span m='111180'>poor</span> <span m='111570'>care,</span> <span
  m='111960'>but</span> <span m='112350'>it's</span> <span
  m='112740'>actually</span> <span m='113130'>good</span> <span
  m='113520'>care.</span> </p><p><span m='113910'>This</span> <span
  m='114286'>approach</span> <span m='114663'>would</span> <span
  m='115040'>detect</span> <span m='115416'>all</span> <span
  m='115793'>patients</span> <span m='116170'>who</span> <span
  m='116648'>might</span> <span m='117126'>be</span> <span
  m='117604'>receiving</span> <span m='118082'>poor</span> <span
  m='118560'>care.</span> </p><p><span m='119039'>Some</span> <span
  m='119455'>decision-makers</span> <span m='119872'>often</span> <span
  m='120289'>have</span> <span m='120706'>a</span> <span
  m='121123'>preference</span> <span m='121540'>for</span> <span
  m='121823'>one</span> <span m='122107'>type</span> <span m='122391'>of</span>
  <span m='122675'>error</span> <span m='122958'>over</span> <span
  m='123242'>the</span> <span m='123526'>other,</span> <span
  m='123810'>which</span> <span m='124222'>should</span> <span
  m='124635'>influence</span> <span m='125047'>the</span> <span
  m='125460'>threshold</span> <span m='125872'>value</span> <span
  m='126285'>they</span> <span m='126697'>pick.</span> </p><p><span
  m='127110'>If</span> <span m='127444'>there's</span> <span
  m='127778'>no</span> <span m='128112'>preference</span> <span
  m='128446'>between</span> <span m='128780'>the</span> <span
  m='129114'>errors,</span> <span m='129449'>the</span> <span
  m='129874'>right</span> <span m='130300'>threshold</span> <span
  m='130726'>to</span> <span m='131151'>select</span> <span m='131577'>is</span>
  <span m='132003'>t</span> <span m='132428'>=</span> <span
  m='132854'>0.5,</span> <span m='133280'>since</span> <span
  m='133836'>it</span> <span m='134392'>just</span> <span
  m='134948'>predicts</span> <span m='135505'>the</span> <span
  m='136061'>most</span> <span m='136617'>likely</span> <span
  m='137173'>outcome.</span> </p><p><span m='137730'>To</span> <span
  m='138105'>make</span> <span m='138480'>this</span> <span
  m='138855'>discussion</span> <span m='139230'>a</span> <span
  m='139605'>little</span> <span m='139980'>more</span> <span
  m='140355'>quantitative,</span> <span m='140730'>we</span> <span
  m='141133'>use</span> <span m='141536'>what's</span> <span
  m='141940'>called</span> <span m='142343'>a</span> <span
  m='142746'>confusion</span> <span m='143150'>matrix</span> <span
  m='143553'>or</span> <span m='143956'>classification</span> <span
  m='144360'>matrix.</span> </p><p><span m='145680'>This</span> <span
  m='146120'>compares</span> <span m='146560'>the</span> <span
  m='147000'>actual</span> <span m='147440'>outcomes</span> <span
  m='147880'>to</span> <span m='148450'>the</span> <span
  m='149020'>predicted</span> <span m='149590'>outcomes.</span> </p><p><span
  m='150160'>The</span> <span m='150625'>rows</span> <span m='151090'>are</span>
  <span m='151555'>labeled</span> <span m='152020'>with</span> <span
  m='152485'>the</span> <span m='152950'>actual</span> <span
  m='153415'>outcome,</span> <span m='153880'>and</span> <span
  m='154328'>the</span> <span m='154777'>columns</span> <span
  m='155226'>are</span> <span m='155675'>labeled</span> <span
  m='156124'>with</span> <span m='156573'>the</span> <span
  m='157022'>predicted</span> <span m='157471'>outcome.</span> </p><p><span
  m='157920'>Each</span> <span m='158163'>entry</span> <span
  m='158406'>of</span> <span m='158649'>the</span> <span m='158892'>table</span>
  <span m='159135'>gives</span> <span m='159378'>the</span> <span
  m='159621'>number</span> <span m='159864'>of</span> <span
  m='160107'>data</span> <span m='160350'>observations</span> <span
  m='160886'>that</span> <span m='161423'>fall</span> <span
  m='161960'>into</span> <span m='162496'>that</span> <span
  m='163033'>category.</span> </p><p><span m='163570'>So</span> <span
  m='163986'>the</span> <span m='164402'>number</span> <span
  m='164818'>of</span> <span m='165235'>true</span> <span
  m='165651'>negatives,</span> <span m='166067'>or</span> <span
  m='166483'>TN,</span> <span m='166900'>is</span> <span m='167206'>the</span>
  <span m='167512'>number</span> <span m='167818'>of</span> <span
  m='168125'>observations</span> <span m='168431'>that</span> <span
  m='168737'>are</span> <span m='169043'>actually</span> <span
  m='169350'>good</span> <span m='169778'>care</span> <span
  m='170207'>and</span> <span m='170636'>for</span> <span
  m='171065'>which</span> <span m='171494'>we</span> <span
  m='171923'>predict</span> <span m='172352'>good</span> <span
  m='172781'>care.</span> </p><p><span m='173210'>The</span> <span
  m='173655'>true</span> <span m='174100'>positives,</span> <span
  m='174545'>or</span> <span m='174990'>TP,</span> <span m='175435'>is</span>
  <span m='175880'>the</span> <span m='176325'>number</span> <span
  m='176770'>of</span> <span m='177120'>observations</span> <span
  m='177470'>that</span> <span m='177820'>are</span> <span
  m='178170'>actually</span> <span m='178520'>poor</span> <span
  m='178910'>care</span> <span m='179300'>and</span> <span m='179690'>for</span>
  <span m='180080'>which</span> <span m='180470'>we</span> <span
  m='180860'>predict</span> <span m='181250'>poor</span> <span
  m='181640'>care.</span> </p><p><span m='182030'>These</span> <span
  m='182388'>are</span> <span m='182747'>the</span> <span m='183106'>two</span>
  <span m='183465'>types</span> <span m='183824'>that</span> <span
  m='184183'>we</span> <span m='184542'>get</span> <span
  m='184901'>correct.</span> </p><p><span m='185260'>The</span> <span
  m='185646'>false</span> <span m='186032'>positives,</span> <span
  m='186419'>or</span> <span m='186805'>FP,</span> <span m='187191'>are</span>
  <span m='187578'>the</span> <span m='187964'>number</span> <span
  m='188350'>of</span> <span m='188737'>data</span> <span
  m='189123'>points</span> <span m='189510'>for</span> <span
  m='189951'>which</span> <span m='190393'>we</span> <span
  m='190835'>predict</span> <span m='191277'>poor</span> <span
  m='191719'>care,</span> <span m='192160'>but</span> <span
  m='192602'>they're</span> <span m='193044'>actually</span> <span
  m='193486'>good</span> <span m='193928'>care.</span> </p><p><span
  m='194370'>And</span> <span m='194730'>the</span> <span
  m='195090'>false</span> <span m='195450'>negatives,</span> <span
  m='195810'>or</span> <span m='196170'>FN,</span> <span m='196530'>are</span>
  <span m='196890'>the</span> <span m='197250'>number</span> <span
  m='197610'>of</span> <span m='197970'>data</span> <span
  m='198330'>points</span> <span m='198690'>for</span> <span
  m='199171'>which</span> <span m='199653'>we</span> <span
  m='200135'>predict</span> <span m='200617'>good</span> <span
  m='201099'>care,</span> <span m='201580'>but</span> <span
  m='202062'>they're</span> <span m='202544'>actually</span> <span
  m='203026'>poor</span> <span m='203508'>care.</span> </p><p><span
  m='203990'>We</span> <span m='204361'>can</span> <span
  m='204733'>compute</span> <span m='205105'>two</span> <span
  m='205476'>outcome</span> <span m='205848'>measures</span> <span
  m='206220'>that</span> <span m='206568'>help</span> <span m='206916'>us</span>
  <span m='207264'>determine</span> <span m='207612'>what</span> <span
  m='207960'>types</span> <span m='208309'>of</span> <span
  m='208657'>errors</span> <span m='209005'>we</span> <span
  m='209353'>are</span> <span m='209701'>making.</span> </p><p><span
  m='210050'>They're</span> <span m='211410'>called</span> <span
  m='212770'>sensitivity</span> <span m='214130'>and</span> <span
  m='215490'>specificity.</span> </p><p><span m='222620'>Sensitivity</span>
  <span m='223212'>is</span> <span m='223805'>equal</span> <span
  m='224398'>to</span> <span m='224991'>the</span> <span m='225584'>true</span>
  <span m='226177'>positives</span> <span m='226770'>divided</span> <span
  m='227348'>by</span> <span m='227927'>the</span> <span m='228506'>true</span>
  <span m='229085'>positives</span> <span m='229664'>plus</span> <span
  m='230243'>the</span> <span m='230822'>false</span> <span
  m='231401'>negatives,</span> <span m='231980'>and</span> <span
  m='232398'>measures</span> <span m='232817'>the</span> <span
  m='233236'>percentage</span> <span m='233655'>of</span> <span
  m='234074'>actual</span> <span m='234493'>poor</span> <span
  m='234912'>care</span> <span m='235331'>cases</span> <span
  m='235750'>that</span> <span m='236280'>we</span> <span
  m='236810'>classify</span> <span m='237340'>correctly.</span> </p><p><span
  m='237870'>This</span> <span m='238280'>is</span> <span
  m='238690'>often</span> <span m='239100'>called</span> <span
  m='239510'>the</span> <span m='239920'>true</span> <span
  m='240330'>positive</span> <span m='240740'>rate.</span> </p><p><span
  m='241150'>Specificity</span> <span m='241658'>is</span> <span
  m='242167'>equal</span> <span m='242675'>to</span> <span m='243184'>the</span>
  <span m='243692'>true</span> <span m='244201'>negatives</span> <span
  m='244710'>divided</span> <span m='245244'>by</span> <span
  m='245778'>the</span> <span m='246313'>true</span> <span
  m='246847'>negatives</span> <span m='247382'>plus</span> <span
  m='247916'>the</span> <span m='248451'>false</span> <span
  m='248985'>positives,</span> <span m='249520'>and</span> <span
  m='249858'>measures</span> <span m='250197'>the</span> <span
  m='250536'>percentage</span> <span m='250875'>of</span> <span
  m='251214'>actual</span> <span m='251553'>good</span> <span
  m='251892'>care</span> <span m='252231'>cases</span> <span
  m='252570'>that</span> <span m='253102'>we</span> <span
  m='253635'>classify</span> <span m='254167'>correctly.</span> </p><p><span
  m='254700'>This</span> <span m='255068'>is</span> <span
  m='255437'>often</span> <span m='255805'>called</span> <span
  m='256174'>the</span> <span m='256543'>true</span> <span
  m='256911'>negative</span> <span m='257280'>rate.</span> </p><p><span
  m='257649'>A</span> <span m='258017'>model</span> <span m='258385'>with</span>
  <span m='258753'>a</span> <span m='259122'>higher</span> <span
  m='259490'>threshold</span> <span m='259858'>will</span> <span
  m='260226'>have</span> <span m='260595'>a</span> <span m='260963'>lower</span>
  <span m='261331'>sensitivity</span> <span m='261700'>and</span> <span
  m='262325'>a</span> <span m='262950'>higher</span> <span
  m='263575'>specificity.</span> </p><p><span m='264200'>A</span> <span
  m='264585'>model</span> <span m='264970'>with</span> <span m='265356'>a</span>
  <span m='265741'>lower</span> <span m='266127'>threshold</span> <span
  m='266512'>will</span> <span m='266898'>have</span> <span m='267283'>a</span>
  <span m='267669'>higher</span> <span m='268054'>sensitivity</span> <span
  m='268440'>and</span> <span m='269062'>a</span> <span m='269685'>lower</span>
  <span m='270307'>specificity.</span> </p><p><span m='270930'>Let's</span>
  <span m='271396'>compute</span> <span m='271862'>some</span> <span
  m='272328'>confusion</span> <span m='272794'>matrices</span> <span
  m='273260'>in</span> <span m='273975'>R</span> <span m='274690'>using</span>
  <span m='275405'>different</span> <span m='276120'>threshold</span> <span
  m='276835'>values.</span> </p><p><span m='277550'>In</span> <span
  m='277987'>our</span> <span m='278425'>R</span> <span
  m='278863'>console,</span> <span m='279301'>let's</span> <span
  m='279738'>make</span> <span m='280176'>some</span> <span
  m='280614'>classification</span> <span m='281052'>tables</span> <span
  m='281490'>using</span> <span m='282013'>different</span> <span
  m='282537'>threshold</span> <span m='283061'>values</span> <span
  m='283585'>and</span> <span m='284108'>the</span> <span
  m='284632'>table</span> <span m='285156'>function.</span> </p><p><span
  m='285680'>First,</span> <span m='286165'>we'll</span> <span
  m='286650'>use</span> <span m='287135'>a</span> <span
  m='287620'>threshold</span> <span m='288105'>value</span> <span
  m='288590'>of</span> <span m='289075'>0.5.</span> </p><p><span
  m='289560'>So</span> <span m='289992'>type</span> <span
  m='290425'>table,</span> <span m='290857'>and</span> <span
  m='291290'>then</span> <span m='291722'>the</span> <span
  m='292155'>first</span> <span m='292587'>argument,</span> <span
  m='293020'>or</span> <span m='293287'>what</span> <span m='293555'>we</span>
  <span m='293823'>want</span> <span m='294090'>to</span> <span
  m='294358'>label</span> <span m='294626'>the</span> <span
  m='294893'>rows</span> <span m='295161'>by,</span> <span
  m='295429'>should</span> <span m='295696'>be</span> <span
  m='295964'>the</span> <span m='296232'>true</span> <span
  m='296500'>outcome,</span> <span m='296932'>which</span> <span
  m='297365'>is</span> <span m='297797'>qualityTrain$PoorCare.</span>
  </p><p><span m='304440'>And</span> <span m='304704'>then</span> <span
  m='304968'>the</span> <span m='305232'>second</span> <span
  m='305497'>argument,</span> <span m='305761'>or</span> <span
  m='306025'>what</span> <span m='306290'>we</span> <span m='306597'>want</span>
  <span m='306905'>to</span> <span m='307212'>label</span> <span
  m='307520'>the</span> <span m='307827'>columns</span> <span
  m='308135'>by,</span> <span m='308442'>will</span> <span m='308750'>be</span>
  <span m='309370'>predictTrain,</span> <span m='309990'>or</span> <span
  m='310610'>our</span> <span m='311230'>predictions</span> <span
  m='311850'>from</span> <span m='312538'>the</span> <span
  m='313227'>previous</span> <span m='313915'>video,</span> <span
  m='314604'>greater</span> <span m='315292'>than</span> <span
  m='315981'>0.5.</span> </p><p><span m='316670'>This</span> <span
  m='317081'>will</span> <span m='317493'>return</span> <span
  m='317905'>TRUE</span> <span m='318317'>if</span> <span m='318729'>our</span>
  <span m='319140'>prediction</span> <span m='319552'>is</span> <span
  m='319964'>greater</span> <span m='320376'>than</span> <span
  m='320788'>0.5,</span> <span m='321200'>which</span> <span
  m='321532'>means</span> <span m='321865'>we</span> <span
  m='322197'>want</span> <span m='322530'>to</span> <span
  m='322862'>predict</span> <span m='323195'>poor</span> <span
  m='323527'>care,</span> <span m='323860'>and</span> <span m='324166'>it</span>
  <span m='324473'>will</span> <span m='324780'>return</span> <span
  m='325086'>FALSE</span> <span m='325393'>if</span> <span m='325700'>our</span>
  <span m='326006'>prediction</span> <span m='326313'>is</span> <span
  m='326620'>less</span> <span m='326926'>than</span> <span
  m='327233'>0.5,</span> <span m='327540'>which</span> <span
  m='327973'>means</span> <span m='328407'>we</span> <span
  m='328841'>want</span> <span m='329275'>to</span> <span
  m='329708'>predict</span> <span m='330142'>good</span> <span
  m='330576'>care.</span> </p><p><span m='331010'>If</span> <span
  m='331243'>you</span> <span m='331476'>hit</span> <span
  m='331709'>Enter,</span> <span m='331942'>we</span> <span
  m='332175'>get</span> <span m='332408'>a</span> <span m='332641'>table</span>
  <span m='332874'>where</span> <span m='333107'>the</span> <span
  m='333340'>rows</span> <span m='333573'>are</span> <span
  m='333806'>labeled</span> <span m='334040'>by</span> <span m='334420'>0</span>
  <span m='334800'>or</span> <span m='335180'>1,</span> <span
  m='335560'>the</span> <span m='335940'>true</span> <span
  m='336320'>outcome,</span> <span m='336700'>and</span> <span
  m='337080'>the</span> <span m='337460'>columns</span> <span
  m='337840'>are</span> <span m='338277'>labeled</span> <span
  m='338715'>by</span> <span m='339153'>FALSE</span> <span m='339591'>or</span>
  <span m='340028'>TRUE,</span> <span m='340466'>our</span> <span
  m='340904'>predicted</span> <span m='341342'>outcome.</span> </p><p><span
  m='341780'>So</span> <span m='342135'>you</span> <span m='342490'>can</span>
  <span m='342846'>see</span> <span m='343201'>here</span> <span
  m='343556'>that</span> <span m='343912'>for</span> <span m='344267'>70</span>
  <span m='344623'>cases,</span> <span m='344978'>we</span> <span
  m='345333'>predict</span> <span m='345689'>good</span> <span
  m='346044'>care</span> <span m='346400'>and</span> <span
  m='346782'>they</span> <span m='347164'>actually</span> <span
  m='347546'>received</span> <span m='347928'>good</span> <span
  m='348310'>care,</span> <span m='348692'>and</span> <span
  m='349074'>for</span> <span m='349456'>10</span> <span
  m='349838'>cases,</span> <span m='350220'>we</span> <span
  m='350621'>predict</span> <span m='351022'>poor</span> <span
  m='351423'>care,</span> <span m='351824'>and</span> <span
  m='352225'>they</span> <span m='352626'>actually</span> <span
  m='353027'>received</span> <span m='353428'>poor</span> <span
  m='353829'>care.</span> </p><p><span m='354230'>We</span> <span
  m='354560'>make</span> <span m='354890'>four</span> <span
  m='355220'>mistakes</span> <span m='355550'>where</span> <span
  m='355880'>we</span> <span m='356210'>say</span> <span m='356540'>poor</span>
  <span m='356870'>care</span> <span m='357200'>and</span> <span
  m='357546'>it's</span> <span m='357892'>actually</span> <span
  m='358239'>good</span> <span m='358585'>care,</span> <span
  m='358931'>and</span> <span m='359278'>we</span> <span m='359624'>make</span>
  <span m='359970'>15</span> <span m='360317'>mistakes</span> <span
  m='360663'>where</span> <span m='361010'>we</span> <span m='361454'>say</span>
  <span m='361898'>good</span> <span m='362343'>care,</span> <span
  m='362787'>but</span> <span m='363232'>it's</span> <span
  m='363676'>actually</span> <span m='364121'>poor</span> <span
  m='364565'>care.</span> </p><p><span m='365010'>Let's</span> <span
  m='365480'>compute</span> <span m='365950'>the</span> <span
  m='366420'>sensitivity,</span> <span m='366890'>or</span> <span
  m='367360'>the</span> <span m='367830'>true</span> <span
  m='368300'>positive</span> <span m='368770'>rate,</span> <span
  m='369240'>and</span> <span m='369683'>the</span> <span
  m='370127'>specificity,</span> <span m='370571'>or</span> <span
  m='371015'>the</span> <span m='371458'>true</span> <span
  m='371902'>negative</span> <span m='372346'>rate.</span> </p><p><span
  m='372790'>The</span> <span m='373243'>sensitivity</span> <span
  m='373696'>here</span> <span m='374150'>would</span> <span
  m='374603'>be</span> <span m='375056'>10,</span> <span m='375510'>our</span>
  <span m='375963'>true</span> <span m='376416'>positives,</span> <span
  m='376870'>divided</span> <span m='377491'>by</span> <span
  m='378112'>25</span> <span m='378733'>the</span> <span m='379354'>total</span>
  <span m='379975'>number</span> <span m='380596'>of</span> <span
  m='381217'>positive</span> <span m='381838'>cases.</span> </p><p><span
  m='382460'>So</span> <span m='383022'>we</span> <span m='383585'>have</span>
  <span m='384148'>a</span> <span m='384711'>sensitivity</span> <span
  m='385274'>of</span> <span m='385837'>0.4.</span> </p><p><span
  m='386400'>Our</span> <span m='386886'>specificity</span> <span
  m='387372'>here</span> <span m='387858'>would</span> <span
  m='388344'>be</span> <span m='388830'>70,</span> <span m='389316'>the</span>
  <span m='389802'>true</span> <span m='390288'>negative</span> <span
  m='390774'>cases,</span> <span m='391260'>divided</span> <span
  m='391945'>by</span> <span m='392631'>74,</span> <span m='393316'>the</span>
  <span m='394002'>total</span> <span m='394687'>number</span> <span
  m='395373'>of</span> <span m='396058'>negative</span> <span
  m='396744'>cases.</span> </p><p><span m='397430'>So</span> <span
  m='398211'>our</span> <span m='398992'>specificity</span> <span
  m='399774'>here</span> <span m='400555'>is</span> <span
  m='401337'>about</span> <span m='402118'>0.95.</span> </p><p><span
  m='402900'>Now,</span> <span m='403330'>let's</span> <span
  m='403760'>try</span> <span m='404190'>increasing</span> <span
  m='404620'>the</span> <span m='405050'>threshold.</span> </p><p><span
  m='405480'>Use</span> <span m='405784'>the</span> <span m='406089'>up</span>
  <span m='406393'>arrow</span> <span m='406698'>to</span> <span
  m='407002'>get</span> <span m='407307'>back</span> <span m='407611'>to</span>
  <span m='407916'>the</span> <span m='408220'>table</span> <span
  m='408525'>command,</span> <span m='408830'>and</span> <span
  m='409475'>change</span> <span m='410121'>the</span> <span
  m='410767'>threshold</span> <span m='411412'>value</span> <span
  m='412058'>to</span> <span m='412704'>0.7.</span> </p><p><span
  m='413350'>Now,</span> <span m='413843'>if</span> <span m='414336'>we</span>
  <span m='414830'>compute</span> <span m='415323'>our</span> <span
  m='415816'>sensitivity,</span> <span m='416310'>we</span> <span
  m='416824'>get</span> <span m='417338'>a</span> <span
  m='417852'>sensitivity</span> <span m='418366'>of</span> <span
  m='418880'>8</span> <span m='419395'>divided</span> <span m='419909'>by</span>
  <span m='420423'>25,</span> <span m='420937'>which</span> <span
  m='421451'>is</span> <span m='421965'>0.32.</span> </p><p><span
  m='422480'>And</span> <span m='422836'>if</span> <span m='423193'>we</span>
  <span m='423550'>compute</span> <span m='423906'>our</span> <span
  m='424263'>specificity,</span> <span m='424620'>we</span> <span
  m='425098'>get</span> <span m='425577'>a</span> <span
  m='426056'>specificity</span> <span m='426535'>of</span> <span
  m='427014'>73</span> <span m='427493'>divided</span> <span
  m='427972'>by</span> <span m='428451'>74,</span> <span m='428930'>which</span>
  <span m='429460'>is</span> <span m='429990'>about</span> <span
  m='430520'>0.99.</span> </p><p><span m='431050'>So</span> <span
  m='431474'>by</span> <span m='431898'>increasing</span> <span
  m='432323'>the</span> <span m='432747'>threshold,</span> <span
  m='433172'>our</span> <span m='433596'>sensitivity</span> <span
  m='434021'>went</span> <span m='434445'>down</span> <span
  m='434870'>and</span> <span m='435430'>our</span> <span
  m='435990'>specificity</span> <span m='436550'>went</span> <span
  m='437110'>up.</span> </p><p><span m='437670'>Now,</span> <span
  m='438148'>let's</span> <span m='438626'>try</span> <span
  m='439105'>decreasing</span> <span m='439583'>the</span> <span
  m='440061'>threshold.</span> </p><p><span m='440540'>Hit</span> <span
  m='440838'>the</span> <span m='441136'>up</span> <span m='441434'>arrow</span>
  <span m='441732'>again</span> <span m='442030'>to</span> <span
  m='442329'>get</span> <span m='442627'>to</span> <span m='442925'>the</span>
  <span m='443223'>table</span> <span m='443521'>function,</span> <span
  m='443820'>and</span> <span m='444408'>change</span> <span
  m='444997'>the</span> <span m='445585'>threshold</span> <span
  m='446174'>value</span> <span m='446762'>to</span> <span
  m='447351'>0.2.</span> </p><p><span m='447940'>Now,</span> <span
  m='448378'>if</span> <span m='448816'>we</span> <span
  m='449255'>compute</span> <span m='449693'>our</span> <span
  m='450131'>sensitivity,</span> <span m='450570'>it's</span> <span
  m='451257'>16</span> <span m='451944'>divided</span> <span
  m='452631'>by</span> <span m='453318'>25,</span> <span m='454005'>or</span>
  <span m='454692'>0.64.</span> </p><p><span m='455380'>And</span> <span
  m='455698'>if</span> <span m='456016'>we</span> <span
  m='456335'>compute</span> <span m='456653'>our</span> <span
  m='456971'>specificity,</span> <span m='457290'>it's</span> <span
  m='457952'>54</span> <span m='458615'>divided</span> <span
  m='459277'>by</span> <span m='459940'>74,</span> <span m='460602'>or</span>
  <span m='461265'>about</span> <span m='461927'>0.73.</span> </p><p><span
  m='462590'>So</span> <span m='462961'>with</span> <span m='463332'>the</span>
  <span m='463703'>lower</span> <span m='464074'>threshold,</span> <span
  m='464445'>our</span> <span m='464816'>sensitivity</span> <span
  m='465187'>went</span> <span m='465558'>up,</span> <span m='465930'>and</span>
  <span m='466522'>our</span> <span m='467114'>specificity</span> <span
  m='467706'>went</span> <span m='468298'>down.</span> </p><p><span
  m='468890'>But</span> <span m='469283'>which</span> <span
  m='469676'>threshold</span> <span m='470070'>should</span> <span
  m='470463'>we</span> <span m='470856'>pick?</span> </p><p><span
  m='471250'>Maybe</span> <span m='471783'>0.4</span> <span m='472316'>is</span>
  <span m='472850'>better,</span> <span m='473383'>or</span> <span
  m='473916'>0.6.</span> </p><p><span m='474450'>How</span> <span
  m='474862'>do</span> <span m='475275'>we</span> <span
  m='475687'>decide?</span> </p><p><span m='476100'>In</span> <span
  m='476457'>the</span> <span m='476815'>next</span> <span
  m='477173'>video,</span> <span m='477531'>we'll</span> <span
  m='477888'>see</span> <span m='478246'>a</span> <span m='478604'>nice</span>
  <span m='478962'>visualization</span> <span m='479320'>to</span> <span
  m='479733'>help</span> <span m='480146'>us</span> <span
  m='480560'>select</span> <span m='480973'>a</span> <span
  m='481386'>threshold.</span> </p>
uid: e7a21c91c5c517f3d5b45a2f2af4833c
type: course
layout: video
---
