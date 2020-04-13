---
title: Tangent Planes
uid: 8178b0890c9d24c5b8fb9155e19a09ce
parent_uid: 10e11645483c9e7bc1e8194ff0a40c7e
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/2.-partial-derivatives/part-b-chain-rule-gradient-and-directional-derivatives/session-37-example/tangent-planes
short_url: tangent-planes
inline_embed_id: 1325210tangentplanes7099660
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='0'>JOEL LEWIS:</span> <span m='7390'>Hi.</span> <span
  m='7860'>Welcome</span> <span m='8170'>back</span> <span m='8380'>to</span>
  <span m='8480'>recitation.</span> <span m='9410'>In</span> <span
  m='9610'>lecture,</span> <span m='10030'>you've</span> <span
  m='10280'>been</span> <span m='10430'>learning</span> <span
  m='10740'>about</span> <span m='11010'>using</span> <span
  m='11380'>gradients</span> <span m='11890'>to</span> <span
  m='12000'>compute</span> <span m='12420'>tangent</span> <span
  m='12860'>planes</span> <span m='13350'>to</span> <span
  m='13510'>surfaces.</span> <span m='14290'>So</span> <span m='14510'>I</span>
  <span m='14570'>have</span> <span m='15170'>an</span> <span
  m='15320'>example</span> <span m='16030'>of</span> <span m='16640'>a</span>
  <span m='16730'>practice</span> <span m='17170'>problem</span> <span
  m='17530'>here</span> <span m='17770'>for</span> <span m='18030'>you.</span>
  <span m='19700'>So</span> <span m='20210'>what</span> <span
  m='20410'>I'd</span> <span m='20510'>like</span> <span m='20720'>you</span>
  <span m='20800'>to</span> <span m='20910'>do</span> <span m='21470'>in</span>
  <span m='21650'>part</span> <span m='21930'>a</span> <span m='22160'>is</span>
  <span m='22320'>to</span> <span m='22430'>use</span> <span
  m='23410'>gradients</span> <span m='24130'>to</span> <span
  m='24460'>find</span> <span m='24920'>the</span> <span
  m='25210'>tangent</span> <span m='25500'>plane</span> <span
  m='25860'>to</span> <span m='25950'>the</span> <span m='26060'>surface</span>
  <span m='26440'>z</span> <span m='26890'>equals</span> <span
  m='27390'>x</span> <span m='27805'>cubed</span> <span m='28220'>plus</span>
  <span m='28930'>3x</span> <span m='29220'>y</span> <span
  m='29850'>squared</span> <span m='30570'>at</span> <span m='30740'>the</span>
  <span m='30820'>point</span> <span m='31140'>(1,</span> <span
  m='31430'>2,</span> <span m='31670'>13).</span> <span m='32940'>And</span>
  <span m='33470'>in</span> <span m='33670'>part</span> <span
  m='34020'>b,</span> <span m='34520'>I'd</span> <span m='34680'>like</span>
  <span m='34830'>you</span> <span m='34910'>to</span> <span m='34990'>do</span>
  <span m='35090'>something</span> <span m='35420'>similar,</span> <span
  m='36390'>which</span> <span m='36570'>is</span> <span m='36690'>to</span>
  <span m='37660'>use</span> <span m='37940'>gradients</span> <span
  m='38490'>to</span> <span m='38630'>find</span> <span m='38970'>the</span>
  <span m='39060'>tangent</span> <span m='39570'>line</span> <span
  m='40450'>to</span> <span m='40570'>the</span> <span m='40670'>curve</span>
  <span m='41660'>x</span> <span m='42015'>cubed</span> <span
  m='42370'>plus</span> <span m='42650'>2xy</span> <span m='43300'>plus</span>
  <span m='43570'>y</span> <span m='43820'>squared</span> <span
  m='44300'>equals</span> <span m='44620'>9</span> <span m='45360'>at</span>
  <span m='45520'>the</span> <span m='45620'>point</span> <span
  m='45970'>(1,</span> <span m='46270'>2).</span> <span m='47010'>So</span>
  <span m='47160'>why don't</span> <span m='47360'>you</span> <span
  m='47560'>pause</span> <span m='47860'>the</span> <span
  m='47950'>video,</span> <span m='48610'>have</span> <span m='49350'>a</span>
  <span m='49420'>couple</span> <span m='49710'>goes</span> <span
  m='50240'>at</span> <span m='50730'>those.</span> <span m='51810'>Come</span>
  <span m='52000'>back</span> <span m='52240'>and</span> <span
  m='52340'>we</span> <span m='52430'>can</span> <span m='52550'>work</span>
  <span m='52720'>on</span> <span m='52840'>them</span> <span
  m='52930'>together.</span> </p><p><span m='61520'>So</span> <span
  m='61660'>hopefully,</span> <span m='62010'>you</span> <span
  m='62100'>had</span> <span m='62310'>some</span> <span m='62890'>good</span>
  <span m='63080'>luck</span> <span m='63340'>working</span> <span
  m='63670'>on</span> <span m='63790'>these</span> <span
  m='64010'>problems.</span> <span m='64450'>Let's</span> <span
  m='65120'>just</span> <span m='65260'>take</span> <span m='65440'>a</span>
  <span m='65500'>look</span> <span m='65670'>at</span> <span
  m='65830'>them.</span> <span m='66830'>So</span> <span m='67000'>for</span>
  <span m='67110'>part</span> <span m='67420'>a,</span> <span
  m='68110'>you're</span> <span m='68340'>given</span> <span m='69080'>a</span>
  <span m='69190'>function</span> <span m='70130'>in</span> <span
  m='70560'>the</span> <span m='70670'>sort</span> <span m='70900'>of</span>
  <span m='71190'>usual</span> <span m='72010'>form</span> <span
  m='72370'>that</span> <span m='72470'>we</span> <span m='72570'>use</span>
  <span m='72790'>to</span> <span m='72880'>graph</span> <span
  m='73135'>it,</span> <span m='73390'>which</span> <span m='73560'>is</span>
  <span m='73650'>you're</span> <span m='73750'>given</span> <span
  m='74130'>z</span> <span m='74480'>equals</span> <span m='75330'>a</span>
  <span m='75780'>function</span> <span m='76210'>of</span> <span
  m='76330'>x</span> <span m='76530'>and</span> <span m='76670'>y.</span> <span
  m='77690'>But</span> <span m='77880'>in</span> <span m='77940'>order</span>
  <span m='78230'>to</span> <span m='78300'>apply</span> <span
  m='78660'>this</span> <span m='78880'>gradient</span> <span
  m='79280'>method,</span> <span m='79530'>what</span> <span m='79660'>we</span>
  <span m='79780'>really</span> <span m='80120'>want</span> <span
  m='80600'>is</span> <span m='80740'>we</span> <span m='80810'>want to</span>
  <span m='81030'>look</span> <span m='81560'>at</span> <span
  m='81820'>this</span> <span m='82530'>surface</span> <span m='83390'>as</span>
  <span m='83750'>if</span> <span m='84040'>it</span> <span
  m='84120'>were</span> <span m='84680'>a</span> <span m='84840'>level</span>
  <span m='85350'>surface</span> <span m='85890'>of</span> <span
  m='86030'>some</span> <span m='86260'>function</span> <span
  m='86640'>of</span> <span m='86740'>three</span> <span
  m='87070'>variables.</span> <span m='87830'>So</span> <span
  m='88050'>in</span> <span m='88130'>order</span> <span m='88370'>to</span>
  <span m='88550'>do</span> <span m='88710'>that,</span> <span
  m='88940'>what</span> <span m='89080'>we</span> <span m='89200'>want</span>
  <span m='89490'>to do</span> <span m='89670'>always</span> <span
  m='90160'>is</span> <span m='90710'>to</span> <span m='90820'>bring</span>
  <span m='91210'>the</span> <span m='91330'>x,</span> <span m='91610'>y</span>
  <span m='91860'>and</span> <span m='92010'>z</span> <span m='92390'>all</span>
  <span m='92800'>together</span> <span m='93210'>on</span> <span
  m='93360'>the</span> <span m='93450'>same</span> <span m='93800'>side</span>
  <span m='94400'>with</span> <span m='94640'>just</span> <span
  m='95550'>a</span> <span m='95680'>zero</span> <span m='96060'>or</span> <span
  m='96220'>a</span> <span m='96300'>constant</span> <span m='96770'>on</span>
  <span m='96900'>the</span> <span m='96990'>other</span> <span
  m='97180'>side.</span> </p><p><span m='97720'>So</span> <span
  m='99040'>let</span> <span m='99250'>me</span> <span m='99390'>do</span> <span
  m='99480'>that.</span> <span m='99660'>So</span> <span m='99740'>I'm</span>
  <span m='99810'>going to</span> <span m='99980'>rewrite</span> <span
  m='100420'>the</span> <span m='100520'>defining</span> <span
  m='101010'>equation</span> <span m='101840'>of</span> <span
  m='102080'>this</span> <span m='102200'>surface</span> <span
  m='103090'>as</span> <span m='104920'>0</span> <span m='105700'>equals</span>
  <span m='106750'>x</span> <span m='107206'>cubed</span> <span
  m='108120'>plus</span> <span m='110070'>3x</span> <span m='111965'>y</span>
  <span m='113100'>squared</span> <span m='113750'>minus</span> <span
  m='114130'>z,</span> <span m='114930'>and</span> <span m='115090'>I'm</span>
  <span m='115210'>going to</span> <span m='116570'>define</span> <span
  m='117020'>this</span> <span m='117260'>right-hand</span> <span
  m='117800'>side</span> <span m='118550'>to</span> <span m='118670'>be</span>
  <span m='118780'>a</span> <span m='118840'>new</span> <span
  m='119090'>function</span> <span m='120070'>w</span> <span
  m='120870'>of</span> <span m='121235'>x,</span> <span m='121600'>y,</span>
  <span m='121940'>z.</span> <span m='122376'>All</span> <span
  m='122812'>right?</span> <span m='123830'>So</span> <span m='124040'>if</span>
  <span m='124110'>I</span> <span m='124190'>call</span> <span
  m='124480'>this</span> <span m='124660'>thing</span> <span
  m='124970'>w,</span> <span m='125710'>then</span> <span m='125890'>our</span>
  <span m='126040'>surface</span> <span m='126560'>in</span> <span
  m='126690'>question</span> <span m='127370'>is</span> <span
  m='127630'>just</span> <span m='127820'>a</span> <span m='127910'>level</span>
  <span m='128390'>surface</span> <span m='129280'>of</span> <span
  m='131190'>w.</span> <span m='131680'>It's</span> <span m='131860'>the</span>
  <span m='131970'>level</span> <span m='132250'>surface</span> <span
  m='132660'>w</span> <span m='133080'>equals</span> <span m='133470'>0.</span>
  <span m='134260'>And</span> <span m='134420'>so</span> <span
  m='134530'>we</span> <span m='134640'>know</span> <span m='134930'>in</span>
  <span m='135070'>that</span> <span m='135290'>situation</span> <span
  m='136290'>that</span> <span m='138210'>the</span> <span
  m='138600'>gradient</span> <span m='139090'>of</span> <span
  m='139260'>w</span> <span m='140030'>is</span> <span
  m='140630'>perpendicular</span> <span m='141360'>to</span> <span
  m='141500'>its</span> <span m='141650'>level</span> <span
  m='141950'>surfaces.</span> <span m='142820'>It's</span> <span
  m='143300'>orthogonal</span> <span m='143690'>to its</span> <span
  m='143920'>level</span> <span m='144180'>surfaces.</span> <span
  m='144920'>So</span> <span m='146480'>the</span> <span
  m='146610'>normal</span> <span m='147180'>to</span> <span
  m='147330'>our</span> <span m='147520'>surface</span> <span
  m='148410'>is</span> <span m='148640'>exactly</span> <span
  m='149210'>the</span> <span m='149330'>gradient</span> <span
  m='149880'>of</span> <span m='149980'>w. All right?</span> </p><p><span
  m='152040'>So</span> <span m='153800'>gradient</span> <span
  m='154250'>of</span> <span m='154450'>w</span> <span m='158150'>is</span>
  <span m='158560'>the</span> <span m='158700'>normal</span> <span
  m='161010'>to</span> <span m='162330'>our</span> <span
  m='164560'>surface,</span> <span m='165120'>and</span> <span
  m='165380'>a</span> <span m='165440'>normal</span> <span m='165880'>is</span>
  <span m='165980'>what</span> <span m='166120'>we</span> <span
  m='166220'>use</span> <span m='166440'>to</span> <span m='166520'>write</span>
  <span m='166750'>down</span> <span m='166960'>the</span> <span
  m='167070'>equation</span> <span m='167510'>for</span> <span
  m='167660'>a</span> <span m='168036'>tangent</span> <span
  m='168412'>line--</span> <span m='168790'>oh,</span> <span
  m='169370'>tangent</span> <span m='169540'>plane,</span> <span
  m='170040'>excuse</span> <span m='170410'>me.</span> <span m='171380'>So, OK,
  so</span> <span m='171530'>let's</span> <span m='171740'>compute</span> <span
  m='172075'>the</span> <span m='172410'>gradient</span> <span
  m='172880'>of</span> <span m='172980'>w.</span> <span m='173940'>Well,</span>
  <span m='174090'>that's</span> <span m='174310'>not</span> <span
  m='174540'>hard</span> <span m='174880'>to</span> <span m='175020'>do.</span>
  <span m='176380'>We</span> <span m='176510'>just</span> <span
  m='176980'>take</span> <span m='177250'>the</span> <span
  m='177350'>partial</span> <span m='177690'>derivatives</span> <span
  m='178210'>with</span> <span m='178340'>respect to</span> <span
  m='178720'>x,</span> <span m='178990'>y and</span> <span m='179240'>z.</span>
  <span m='179520'>So</span> <span m='179700'>the</span> <span
  m='179800'>partial</span> <span m='180120'>derivative</span> <span
  m='180980'>of</span> <span m='181100'>w</span> <span m='181450'>with</span>
  <span m='181570'>respect</span> <span m='181910'>to</span> <span
  m='181990'>x</span> <span m='183010'>is</span> <span m='183320'>3</span> <span
  m='183650'>x</span> <span m='184090'>squared</span> <span
  m='185430'>plus</span> <span m='186010'>3</span> <span m='186120'>y</span>
  <span m='186380'>squared.</span> <span m='187200'>The</span> <span
  m='187610'>partial</span> <span m='188080'>derivative</span> <span
  m='188180'>with</span> <span m='188500'>respect</span> <span
  m='188825'>to</span> <span m='189150'>y</span> <span m='190030'>is</span>
  <span m='190660'>6xy,</span> <span m='193290'>and</span> <span
  m='193450'>the</span> <span m='193510'>partial</span> <span
  m='193820'>derivative</span> <span m='194080'>with</span> <span
  m='194340'>respect to</span> <span m='194820'>z</span> <span
  m='195660'>is</span> <span m='195820'>minus</span> <span m='196240'>1.</span>
  </p><p><span m='197100'>So</span> <span m='197190'>one</span> <span
  m='197390'>thing</span> <span m='197560'>to</span> <span
  m='197660'>notice</span> <span m='197980'>is</span> <span
  m='198110'>that</span> <span m='198200'>when</span> <span
  m='198360'>you</span> <span m='199160'>do</span> <span m='199470'>this</span>
  <span m='199660'>method,</span> <span m='199910'>when</span> <span
  m='200020'>you</span> <span m='200080'>have</span> <span m='200400'>the</span>
  <span m='200510'>function</span> <span m='200980'>given</span> <span
  m='201690'>at</span> <span m='201940'>z,</span> <span m='202770'>when
  you</span> <span m='202930'>have</span> <span m='203060'>the</span> <span
  m='203140'>surface</span> <span m='203560'>given</span> <span
  m='204580'>in</span> <span m='204700'>the</span> <span m='204790'>form</span>
  <span m='205020'>z</span> <span m='205370'>as</span> <span m='205470'>a</span>
  <span m='205530'>function</span> <span m='205960'>of</span> <span
  m='206550'>x</span> <span m='206790'>and</span> <span m='206890'>y,</span>
  <span m='207310'>you're</span> <span m='207450'>going to</span> <span
  m='207620'>bring</span> <span m='207840'>the</span> <span m='207930'>z</span>
  <span m='208130'>over,</span> <span m='208580'>and you</span> <span
  m='208740'>always</span> <span m='209050'>have</span> <span
  m='209210'>a</span> <span m='209260'>minus</span> <span m='209650'>1</span>
  <span m='209900'>there</span> <span m='210130'>when</span> <span
  m='210300'>you</span> <span m='211090'>set</span> <span m='211300'>the</span>
  <span m='211380'>problem</span> <span m='211720'>up</span> <span
  m='211870'>this</span> <span m='212040'>way.</span> <span
  m='212730'>Because</span> <span m='212900'>you'll</span> <span
  m='213030'>have</span> <span m='213170'>a</span> <span m='213230'>minus</span>
  <span m='213790'>z,</span> <span m='213920'>and</span> <span
  m='214060'>then</span> <span m='214210'>you'll</span> <span
  m='214370'>just</span> <span m='214640'>take</span> <span
  m='214830'>the</span> <span m='214930'>partial</span> <span
  m='215300'>with</span> <span m='215450'>respect</span> <span m='215770'>to
  z,</span> <span m='216200'>and</span> <span m='216970'>the</span> <span
  m='217100'>other</span> <span m='217290'>terms</span> <span m='217620'>will
  only</span> <span m='217980'>involve</span> <span m='218340'>x</span> <span
  m='218520'>and</span> <span m='218640'>y,</span> <span m='218880'>so</span>
  <span m='219040'>they'll</span> <span m='219230'>be</span> <span
  m='219370'>killed</span> <span m='219690'>by</span> <span
  m='219820'>the</span> <span m='219920'>partial</span> <span
  m='220200'>derivative.</span> </p><p><span m='221180'>So</span> <span
  m='221360'>in</span> <span m='221440'>any</span> <span m='221620'>case,</span>
  <span m='221850'>this</span> <span m='222020'>is</span> <span
  m='222160'>our</span> <span m='222850'>gradient,</span> <span
  m='223740'>so</span> <span m='223890'>we</span> <span m='224010'>want</span>
  <span m='224260'>the</span> <span m='224340'>normal</span> <span
  m='224700'>vector.</span> <span m='225150'>We</span> <span
  m='225310'>were</span> <span m='225720'>asked</span> <span
  m='226120'>for</span> <span m='226240'>the</span> <span
  m='226370'>tangent</span> <span m='226800'>plane</span> <span
  m='227070'>at</span> <span m='227160'>a</span> <span
  m='227230'>particular</span> <span m='227840'>point,</span> <span
  m='228620'>I</span> <span m='228750'>believe.</span> <span
  m='229480'>Yes,</span> <span m='229720'>at</span> <span m='229820'>the</span>
  <span m='229910'>point</span> <span m='230210'>(1,</span> <span
  m='230450'>2,</span> <span m='230680'>13).</span> <span m='231780'>So</span>
  <span m='231960'>we</span> <span m='232070'>need</span> <span
  m='232280'>to</span> <span m='232380'>compute</span> <span
  m='232740'>the</span> <span m='232830'>gradient</span> <span
  m='233190'>at</span> <span m='233580'>that</span> <span
  m='233740'>particular</span> <span m='234270'>point</span> <span
  m='234830'>and</span> <span m='234980'>that</span> <span
  m='235140'>will</span> <span m='235250'>be</span> <span m='235370'>our</span>
  <span m='235510'>normal</span> <span m='235870'>vector.</span> <span
  m='236360'>So</span> <span m='236580'>the</span> <span
  m='236690'>gradient</span> <span m='237130'>at</span> <span
  m='237370'>this</span> <span m='237580'>point</span> <span
  m='239710'>is--</span> <span m='240340'>well,</span> <span
  m='240670'>we</span> <span m='240780'>just</span> <span m='242110'>plug</span>
  <span m='242390'>in,</span> <span m='242510'>so</span> <span
  m='242990'>the</span> <span m='243550'>gradient</span> <span
  m='245290'>at</span> <span m='245490'>(1,</span> <span m='245770'>2,</span>
  <span m='246030'>13).</span> <span m='247570'>So</span> <span m='247760'>x
  is</span> <span m='248230'>1.</span> <span m='249720'>So</span> <span
  m='249950'>this</span> <span m='250130'>is</span> <span m='250580'>3</span>
  <span m='251020'>times</span> <span m='251380'>1</span> <span
  m='251770'>plus</span> <span m='252140'>3</span> <span m='252430'>times</span>
  <span m='253650'>4,</span> <span m='254300'>so</span> <span
  m='254420'>that's</span> <span m='254670'>going to</span> <span
  m='254890'>be</span> <span m='255660'>15,</span> <span m='257396'>and</span>
  <span m='257770'>6xy</span> <span m='258865'>is</span> <span
  m='259270'>12,</span> <span m='260380'>and</span> <span
  m='260600'>minus</span> <span m='260970'>1</span> <span m='261320'>is
  just</span> <span m='261670'>minus</span> <span m='262060'>1.</span> <span
  m='263170'>So</span> <span m='263380'>this</span> <span m='263560'>is</span>
  <span m='263770'>the</span> <span m='264440'>gradient</span> <span
  m='265100'>vector</span> <span m='265220'>at</span> <span
  m='265250'>our</span> <span m='265680'>point</span> <span
  m='266080'>(1,</span> <span m='266330'>2,</span> <span m='266580'>13).</span>
  </p><p><span m='267460'>So</span> <span m='267680'>now</span> <span
  m='267870'>we</span> <span m='268000'>have</span> <span m='268480'>a</span>
  <span m='268630'>point,</span> <span m='269140'>the</span> <span
  m='269260'>point</span> <span m='269590'>(1,</span> <span m='269790'>2,</span>
  <span m='269970'>13),</span> <span m='270890'>and</span> <span
  m='271030'>we</span> <span m='271090'>have</span> <span m='271220'>the</span>
  <span m='271300'>normal</span> <span m='271690'>vector</span> <span
  m='272350'>15,</span> <span m='272800'>12,</span> <span
  m='273170'>minus</span> <span m='273540'>1,</span> <span m='274080'>so</span>
  <span m='274240'>that</span> <span m='274570'>gives</span> <span
  m='274930'>us</span> <span m='275120'>the</span> <span
  m='275420'>equation</span> <span m='275790'>for</span> <span
  m='275920'>the</span> <span m='276030'>tangent</span> <span
  m='276450'>plane</span> <span m='276710'>right</span> <span
  m='276930'>off.</span> <span m='277740'>So</span> <span m='277860'>the</span>
  <span m='278070'>equation</span> <span m='287020'>for</span> <span
  m='287140'>the</span> <span m='287220'>tangent</span> <span
  m='287620'>plane,</span> <span m='287860'>I</span> <span
  m='287920'>just</span> <span m='288170'>dot</span> <span m='288510'>the</span>
  <span m='288590'>normal</span> <span m='288990'>vector</span> <span
  m='289340'>with</span> <span m='290850'>the</span> <span
  m='290950'>vector</span> <span m='291250'>connecting</span> <span
  m='291770'>our</span> <span m='291910'>point</span> <span m='292290'>to</span>
  <span m='292400'>the</span> <span m='292490'>point</span> <span
  m='292750'>(x,</span> <span m='292960'>y,</span> <span m='293170'>z).</span>
  <span m='293700'>so</span> <span m='293870'>that</span> <span
  m='294100'>gives</span> <span m='294360'>us</span> <span m='294530'>15</span>
  <span m='296000'>times--</span> <span m='296300'>well, our</span> <span
  m='296550'>point</span> <span m='296830'>is</span> <span m='296920'>(1,</span>
  <span m='297180'>2,</span> <span m='297340'>3)-- so</span> <span
  m='297590'>it's</span> <span m='297760'>15</span> <span
  m='298290'>times</span> <span m='298590'>x</span> <span
  m='298890'>minus</span> <span m='299830'>1</span> <span m='300820'>plus</span>
  <span m='301270'>12</span> <span m='303520'>times</span> <span
  m='304530'>y</span> <span m='304940'>minus</span> <span m='305750'>2</span>
  <span m='307220'>minus</span> <span m='308070'>1</span> <span
  m='309430'>times</span> <span m='311150'>z</span> <span
  m='312240'>minus</span> <span m='313340'>13</span> <span
  m='314740'>equals</span> <span m='315110'>0.</span> <span m='315460'>So</span>
  <span m='315670'>in</span> <span m='315820'>point-normal</span> <span
  m='316490'>form,</span> <span m='316930'>this</span> <span
  m='317100'>is</span> <span m='317260'>the</span> <span
  m='317370'>equation</span> <span m='318320'>for</span> <span
  m='318440'>that</span> <span m='318690'>plane.</span> <span
  m='320440'>Great.</span> <span m='320680'>And</span> <span
  m='320870'>if</span> <span m='320990'>you</span> <span
  m='321100'>wanted,</span> <span m='321500'>you</span> <span
  m='321610'>could</span> <span m='321983'>rewrite</span> <span
  m='322356'>this</span> <span m='322730'>a</span> <span m='322850'>whole</span>
  <span m='322960'>bunch</span> <span m='323190'>of</span> <span
  m='323250'>different</span> <span m='323500'>ways,</span> <span
  m='324310'>but</span> <span m='324500'>I'll</span> <span
  m='324600'>just</span> <span m='324790'>leave</span> <span
  m='324970'>it</span> <span m='325350'>there.</span> </p><p><span
  m='326110'>So</span> <span m='326320'>let's</span> <span m='326650'>do</span>
  <span m='326860'>part</span> <span m='327340'>b.</span> <span
  m='327540'>I</span> <span m='327620'>guess</span> <span m='327820'>I'll</span>
  <span m='327920'>just</span> <span m='328130'>start</span> <span
  m='328410'>it</span> <span m='328510'>right</span> <span
  m='328730'>below</span> <span m='329080'>here.</span> <span
  m='332440'>So</span> <span m='332620'>for</span> <span m='332750'>part</span>
  <span m='333150'>b,</span> <span m='333910'>we</span> <span
  m='334060'>have</span> <span m='334210'>a</span> <span m='334280'>curve</span>
  <span m='337230'>x</span> <span m='337632'>cubed</span> <span
  m='338840'>plus</span> <span m='339240'>2xy</span> <span
  m='342320'>plus</span> <span m='342710'>y</span> <span
  m='343400'>squared</span> <span m='344200'>equals</span> <span
  m='344610'>9.</span> <span m='344960'>So</span> <span m='345110'>this</span>
  <span m='345280'>is</span> <span m='346010'>a</span> <span m='346285'>curve
  that</span> <span m='346560'>is</span> <span m='346790'>defined</span> <span
  m='347300'>by</span> <span m='347450'>this</span> <span
  m='347620'>implicit</span> <span m='348090'>relationship</span> <span
  m='349050'>between</span> <span m='349440'>x and</span> <span m='349890'>y.
  All right?</span> <span m='351700'>And</span> <span m='351870'>so</span> <span
  m='351990'>what</span> <span m='352120'>I</span> <span m='352180'>want</span>
  <span m='352370'>to</span> <span m='352430'>do</span> <span
  m='352820'>is</span> <span m='353040'>I</span> <span m='353120'>can</span>
  <span m='353290'>do</span> <span m='353420'>exactly</span> <span
  m='354030'>the</span> <span m='354140'>same</span> <span
  m='354410'>process.</span> <span m='355140'>We're</span> <span
  m='355330'>going to</span> <span m='355400'>do</span> <span
  m='355550'>exactly</span> <span m='356070'>the</span> <span
  m='356190'>same</span> <span m='356460'>thing.</span> <span
  m='356710'>We're</span> <span m='356810'>going</span> <span
  m='356930'>to</span> <span m='356990'>find</span> <span m='357500'>the</span>
  <span m='357680'>normal-point</span> <span m='358620'>form</span> <span
  m='359220'>for</span> <span m='359380'>the</span> <span
  m='359500'>tangent</span> <span m='360060'>line,</span> <span
  m='360760'>and</span> <span m='360920'>so</span> <span m='361010'>we're</span>
  <span m='361120'>going to</span> <span m='361320'>do</span> <span
  m='361510'>that</span> <span m='361960'>by</span> <span
  m='362100'>defining</span> <span m='362720'>a</span> <span
  m='362780'>function</span> <span m='364380'>f</span> <span
  m='364610'>of</span> <span m='364740'>x,</span> <span m='365010'>y.</span>
  <span m='365420'>In</span> <span m='365510'>this</span> <span
  m='365650'>case,</span> <span m='366250'>it's</span> <span m='366450'>a</span>
  <span m='366530'>function</span> <span m='366890'>of</span> <span
  m='367000'>just</span> <span m='367250'>two</span> <span
  m='367450'>variables,</span> <span m='368030'>because</span> <span
  m='368190'>we're</span> <span m='368330'>only</span> <span
  m='368580'>working</span> <span m='369320'>with</span> <span
  m='369880'>a</span> <span m='369940'>curve</span> <span m='370390'>in</span>
  <span m='370700'>two</span> <span m='370810'>dimensions.</span> <span
  m='371500'>Before,</span> <span m='371980'>we</span> <span
  m='372100'>had</span> <span m='372880'>a</span> <span
  m='372930'>surface</span> <span m='373510'>in</span> <span
  m='373670'>three</span> <span m='373900'>dimensions,</span> <span
  m='374380'>so</span> <span m='374490'>we</span> <span m='374580'>had</span>
  <span m='374680'>a</span> <span m='374740'>function</span> <span
  m='375070'>of</span> <span m='375130'>three</span> <span
  m='375390'>variables.</span> <span m='376570'>So</span> <span
  m='376800'>f</span> <span m='377065'>of</span> <span m='377330'>x, y,</span>
  <span m='377810'>and</span> <span m='378020'>so</span> <span
  m='378130'>then</span> <span m='378330'>our</span> <span
  m='378510'>curve</span> <span m='379240'>is</span> <span
  m='379460'>exactly</span> <span m='380060'>a</span> <span
  m='380150'>level</span> <span m='380590'>curve</span> <span
  m='381490'>of</span> <span m='382350'>the</span> <span m='382450'>graph</span>
  <span m='382820'>of</span> <span m='382960'>f,</span> <span
  m='383860'>right?</span> <span m='384080'>It's</span> <span
  m='384260'>the</span> <span m='384370'>level</span> <span
  m='384700'>curve</span> <span m='385360'>f</span> <span
  m='385730'>equals</span> <span m='386090'>9.</span> </p><p><span
  m='389220'>So</span> <span m='390040'>in</span> <span m='390180'>order</span>
  <span m='390430'>to</span> <span m='390540'>find</span> <span
  m='391580'>the</span> <span m='391750'>tangent</span> <span
  m='392170'>line,</span> <span m='392650'>I</span> <span m='392770'>can</span>
  <span m='392920'>do</span> <span m='393030'>exactly</span> <span
  m='393520'>the</span> <span m='393630'>same</span> <span
  m='393910'>thing.</span> <span m='394380'>I</span> <span m='394480'>can</span>
  <span m='394610'>find</span> <span m='394880'>the</span> <span
  m='394960'>gradient.</span> <span m='395760'>The</span> <span
  m='395860'>gradient</span> <span m='396210'>is</span> <span
  m='396450'>normal</span> <span m='396870'>to</span> <span
  m='396990'>the</span> <span m='397070'>tangent</span> <span
  m='397460'>line</span> <span m='397850'>and</span> <span
  m='398070'>then</span> <span m='398180'>I</span> <span m='398240'>can</span>
  <span m='398400'>use</span> <span m='398600'>normal-point</span> <span
  m='399370'>form.</span> <span m='400390'>So</span> <span m='400560'>the</span>
  <span m='400700'>gradient</span> <span m='403050'>of</span> <span
  m='403250'>f</span> <span m='405930'>is--</span> <span
  m='406320'>again,</span> <span m='407180'>f</span> <span m='407480'>is</span>
  <span m='407800'>just</span> <span m='408040'>a</span> <span
  m='408130'>polynomial</span> <span m='408730'>function</span> <span
  m='409170'>so</span> <span m='409700'>its</span> <span
  m='409890'>gradient</span> <span m='410210'>is</span> <span m='410660'>easy
  to</span> <span m='410780'>compute.</span> <span m='411190'>It's</span> <span
  m='411600'>3</span> <span m='412550'>x</span> <span m='412870'>squared</span>
  <span m='413420'>plus</span> <span m='413850'>2y</span> <span
  m='415100'>comma</span> <span m='417050'>2x</span> <span
  m='419270'>plus</span> <span m='420420'>2y.</span> <span m='422230'>And</span>
  <span m='422470'>so</span> <span m='422590'>we're</span> <span
  m='422720'>interested</span> <span m='423320'>in</span> <span
  m='424330'>this</span> <span m='425570'>tangent</span> <span
  m='425930'>line</span> <span m='426220'>at</span> <span m='426300'>a</span>
  <span m='426350'>particular</span> <span m='426930'>point.</span> <span
  m='427260'>So</span> <span m='427590'>we're</span> <span
  m='427790'>interested</span> <span m='428340'>at</span> <span
  m='428780'>the</span> <span m='428860'>point</span> <span
  m='429230'>(1,</span> <span m='429540'>2).</span> <span m='430640'>So</span>
  <span m='430760'>the</span> <span m='430900'>gradient</span> <span
  m='431760'>of</span> <span m='432190'>f</span> <span m='433050'>at</span>
  <span m='433250'>(1, 2),</span> <span m='435140'>well,</span> <span
  m='435350'>I</span> <span m='435410'>just</span> <span m='435660'>plug</span>
  <span m='435980'>in</span> <span m='436060'>again,</span> <span
  m='436390'>so</span> <span m='436520'>I</span> <span m='436620'>get</span>
  <span m='437010'>3</span> <span m='437790'>plus</span> <span
  m='438190'>4.</span> <span m='438690'>That's</span> <span m='440080'>7.</span>
  <span m='441120'>And</span> <span m='442460'>2</span> <span
  m='442880'>plus</span> <span m='443270'>4</span> <span m='443720'>is</span>
  <span m='444170'>6.</span> <span m='445890'>And</span> <span
  m='446060'>so</span> <span m='446210'>again,</span> <span
  m='446550'>the</span> <span m='446630'>same</span> <span
  m='447690'>analysis</span> <span m='448250'>as</span> <span
  m='448410'>we</span> <span m='448800'>used in</span> <span
  m='449160'>the</span> <span m='449280'>tangent</span> <span
  m='449750'>plane</span> <span m='450140'>case</span> <span
  m='450680'>works</span> <span m='451030'>in</span> <span m='451100'>the</span>
  <span m='451180'>tangent</span> <span m='451560'>line</span> <span
  m='451810'>case.</span> </p><p><span m='452130'>Let's</span> <span
  m='452350'>come</span> <span m='452550'>over</span> <span
  m='452740'>here.</span> <span m='455290'>So</span> <span m='458160'>(x,
  y)</span> <span m='460080'>is</span> <span m='460320'>on</span> <span
  m='462190'>the</span> <span m='462460'>tangent</span> <span
  m='462730'>line</span> <span m='465900'>if</span> <span m='466100'>and</span>
  <span m='466210'>only</span> <span m='466520'>if</span> <span
  m='468960'>we</span> <span m='469140'>have</span> <span m='469660'>that</span>
  <span m='471520'>the</span> <span m='471760'>gradient</span> <span
  m='472500'>dot--</span> <span m='473020'>so</span> <span
  m='473160'>that's</span> <span m='473370'>the</span> <span
  m='473460'>gradient,</span> <span m='474610'>[7,</span> <span
  m='475600'>6]--</span> <span m='476600'>dot</span> <span m='478040'>the</span>
  <span m='478230'>vector</span> <span m='479240'>x</span> <span
  m='479600'>minus</span> <span m='479850'>1,</span> <span m='480870'>y</span>
  <span m='481120'>minus</span> <span m='481450'>2--</span> <span
  m='481700'>this</span> <span m='481920'>is</span> <span m='482110'>the</span>
  <span m='482720'>vector</span> <span m='483070'>connecting</span> <span
  m='483500'>the</span> <span m='483590'>point</span> <span
  m='483890'>(x,</span> <span m='484170'>y)</span> <span m='484500'>to</span>
  <span m='484680'>our</span> <span m='484820'>point</span> <span
  m='485550'>(1,</span> <span m='485830'>2)--</span> <span m='486520'>is</span>
  <span m='486730'>equal</span> <span m='486960'>to</span> <span
  m='487040'>0,</span> <span m='487310'>if</span> <span m='487410'>and</span>
  <span m='487540'>only if</span> <span m='487740'>those</span> <span
  m='488000'>two</span> <span m='488140'>things</span> <span
  m='488430'>are</span> <span m='488800'>orthogonal.</span> <span
  m='489730'>So</span> <span m='489890'>this</span> <span m='490090'>is--</span>
  <span m='491970'>i.e.</span> <span m='493340'>7</span> <span
  m='493840'>times</span> <span m='494770'>x</span> <span
  m='495040'>minus</span> <span m='495370'>1</span> <span m='495710'>plus</span>
  <span m='496030'>6</span> <span m='496330'>times</span> <span
  m='497260'>y</span> <span m='497530'>minus</span> <span m='497960'>2</span>
  <span m='498210'>is</span> <span m='498570'>equal</span> <span
  m='498930'>to</span> <span m='499310'>0.</span> <span m='499630'>So</span>
  <span m='499760'>this</span> <span m='499910'>is</span> <span
  m='500270'>the</span> <span m='500360'>point-normal</span> <span
  m='501050'>form</span> <span m='501690'>for</span> <span m='501910'>the</span>
  <span m='502100'>equation</span> <span m='502550'>of</span> <span
  m='502620'>that</span> <span m='502810'>line.</span> <span
  m='503060'>And</span> <span m='503210'>again,</span> <span
  m='503480'>you</span> <span m='503580'>could, you know,</span> <span
  m='504420'>expand</span> <span m='504840'>out and</span> <span
  m='505040'>rewrite</span> <span m='505480'>this</span> <span
  m='505680'>in</span> <span m='506050'>whichever</span> <span
  m='506760'>forms</span> <span m='507130'>you</span> <span
  m='507220'>happen</span> <span m='507480'>to</span> <span
  m='507590'>like</span> <span m='507800'>to</span> <span m='507930'>see</span>
  <span m='508070'>your</span> <span m='508300'>equations</span> <span
  m='508770'>of</span> <span m='508890'>lines.</span> </p><p><span
  m='510970'>So</span> <span m='511210'>there</span> <span m='511410'>you</span>
  <span m='511510'>go.</span> <span m='511980'>Using</span> <span
  m='512430'>the</span> <span m='512510'>gradient,</span> <span
  m='512950'>we</span> <span m='513040'>can</span> <span
  m='513180'>compute</span> <span m='513600'>tangent</span> <span
  m='514060'>planes</span> <span m='514520'>to</span> <span
  m='514630'>surfaces.</span> <span m='515460'>Similarly,</span> <span
  m='516080'>we</span> <span m='516200'>can</span> <span m='516730'>use</span>
  <span m='516930'>the</span> <span m='517000'>same</span> <span
  m='517280'>idea</span> <span m='518000'>to</span> <span
  m='518160'>compute</span> <span m='518600'>tangent</span> <span
  m='518840'>lines</span> <span m='519330'>to</span> <span
  m='519600'>curves.</span> <span m='520470'>The</span> <span
  m='521040'>point</span> <span m='521380'>is</span> <span
  m='521570'>that</span> <span m='523340'>the</span> <span
  m='523450'>gradient</span> <span m='523780'>vector</span> <span
  m='524630'>of</span> <span m='524800'>a</span> <span
  m='524870'>function</span> <span m='525570'>is</span> <span
  m='525810'>orthogonal</span> <span m='526440'>to</span> <span
  m='526580'>the</span> <span m='526680'>level</span> <span
  m='526990'>curves</span> <span m='527420'>of</span> <span
  m='527530'>that</span> <span m='527760'>function.</span> <span
  m='528310'>And</span> <span m='528520'>so</span> <span m='528580'>we</span>
  <span m='528700'>use</span> <span m='528960'>that</span> <span
  m='529220'>to</span> <span m='529330'>get</span> <span m='529490'>the</span>
  <span m='529570'>normal</span> <span m='530020'>vectors</span> <span
  m='530800'>to</span> <span m='530940'>our</span> <span
  m='531310'>curves</span> <span m='532140'>or</span> <span
  m='532780'>our</span> <span m='533130'>surfaces,</span> <span
  m='533850'>and</span> <span m='533980'>with</span> <span m='534120'>the</span>
  <span m='534190'>normal</span> <span m='534520'>vector,</span> <span
  m='534810'>we can</span> <span m='535150'>then</span> <span
  m='535280'>easily</span> <span m='535660'>compute</span> <span
  m='536360'>the</span> <span m='536750'>tangent</span> <span
  m='537170'>plane</span> <span m='537460'>or</span> <span m='537620'>the</span>
  <span m='537720'>tangent</span> <span m='538080'>line.</span> <span
  m='538850'>So</span> <span m='539070'>I'll</span> <span m='539200'>stop</span>
  <span m='539520'>there.</span> </p>
embedded_media:
  - uid: 1fe95cd2bc6ef5cad783c17c9a295ba5
    parent_uid: 8178b0890c9d24c5b8fb9155e19a09ce
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 6paZkmBMZwQ
  - uid: 5790b9a721c79f093974c796e913ff4b
    parent_uid: 8178b0890c9d24c5b8fb9155e19a09ce
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/6paZkmBMZwQ/default.jpg'
  - uid: 23b1eae8b62d368ebc73c19f63bb43b5
    parent_uid: 8178b0890c9d24c5b8fb9155e19a09ce
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'http://itunes.apple.com/us/podcast/tangent-planes/id414355340?i=90322822'
  - uid: 9ad41b275842fecb27bfd9e84357fe65
    parent_uid: 8178b0890c9d24c5b8fb9155e19a09ce
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_26_300k.mp4'
  - uid: fbf57a2b1ed939f071f6df1ce3ac7af7
    parent_uid: 8178b0890c9d24c5b8fb9155e19a09ce
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 6paZkmBMZwQ
  - uid: 87d6ec9d214f8c665b97013d5a6bad0b
    parent_uid: 8178b0890c9d24c5b8fb9155e19a09ce
    id: 6paZkmBMZwQ.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/2.-partial-derivatives/part-b-chain-rule-gradient-and-directional-derivatives/session-37-example/tangent-planes/6paZkmBMZwQ.srt
  - uid: dd0a3008b1a04cfca9d3a6ef0d5adeae
    parent_uid: 8178b0890c9d24c5b8fb9155e19a09ce
    id: 6paZkmBMZwQ.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/2.-partial-derivatives/part-b-chain-rule-gradient-and-directional-derivatives/session-37-example/tangent-planes/6paZkmBMZwQ.pdf
  - uid: bb9ea8775606ef5e11a63a8613cb79d2
    parent_uid: 8178b0890c9d24c5b8fb9155e19a09ce
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: a8cb31627c7a21e372212612a4bf57bf
    parent_uid: 8178b0890c9d24c5b8fb9155e19a09ce
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
