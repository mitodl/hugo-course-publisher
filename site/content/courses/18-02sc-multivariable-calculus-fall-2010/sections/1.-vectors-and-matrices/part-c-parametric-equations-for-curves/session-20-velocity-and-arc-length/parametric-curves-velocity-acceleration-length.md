---
title: 'Parametric Curves: Velocity, Acceleration, Length'
uid: 1e0633a6847e236bf9b7c51d04eacf89
parent_uid: 25cd5a91eff0444d5fd85ec6178eef45
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/1.-vectors-and-matrices/part-c-parametric-equations-for-curves/session-20-velocity-and-arc-length/parametric-curves-velocity-acceleration-length
short_url: parametric-curves-velocity-acceleration-length
inline_embed_id: '76515221parametriccurves:velocity,acceleration,length16025002'
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='0'>CHRISTINE BREINER:</span> <span m='7560'>Welcome</span> <span
  m='7910'>back</span> <span m='8090'>to</span> <span
  m='8190'>recitation.</span> <span m='9400'>In</span> <span
  m='9540'>this</span> <span m='9670'>video,</span> <span m='10050'>I'd</span>
  <span m='10190'>like</span> <span m='10400'>us</span> <span
  m='10590'>to</span> <span m='10730'>do</span> <span m='11180'>the</span> <span
  m='11300'>following</span> <span m='11800'>two</span> <span
  m='11960'>problems,</span> <span m='13100'>both</span> <span
  m='13410'>related</span> <span m='13890'>to</span> <span m='14040'>the</span>
  <span m='14170'>same</span> <span m='15150'>position</span> <span
  m='15710'>vector.</span> </p><p><span m='16660'>So</span> <span
  m='16870'>we're</span> <span m='17350'>starting</span> <span
  m='17770'>off</span> <span m='18010'>with</span> <span m='18120'>a</span>
  <span m='18170'>position</span> <span m='18530'>vector</span> <span
  m='18860'>defined</span> <span m='19950'>as</span> <span m='20490'>r</span>
  <span m='20690'>of</span> <span m='20840'>t</span> <span m='21030'>is</span>
  <span m='21170'>equal</span> <span m='21420'>to</span> <span
  m='21620'>1</span> <span m='21880'>minus</span> <span m='22350'>2</span> <span
  m='22530'>t</span> <span m='22720'>squared</span> <span m='23170'>i</span>
  <span m='23930'>plus</span> <span m='24260'>t</span> <span
  m='24450'>squared</span> <span m='24750'>j</span> <span m='25720'>plus</span>
  <span m='26320'>negative</span> <span m='26740'>2</span> <span
  m='26900'>plus</span> <span m='27370'>2</span> <span m='27530'>t</span> <span
  m='27710'>squared</span> <span m='28010'>k.</span> <span m='28870'>So</span>
  <span m='29090'>that's</span> <span m='29330'>our</span> <span
  m='29480'>position</span> <span m='29890'>vector,</span> <span
  m='30390'>and</span> <span m='30550'>I'd</span> <span m='30660'>like</span>
  <span m='30890'>us</span> <span m='31020'>to</span> <span m='31140'>do</span>
  <span m='31250'>the</span> <span m='31350'>following</span> <span
  m='31760'>two</span> <span m='31930'>things.</span> <span m='32760'>And</span>
  <span m='33120'>you'll</span> <span m='33270'>notice</span> <span
  m='33610'>this</span> <span m='33770'>problem</span> <span m='34150'>is</span>
  <span m='34670'>pretty</span> <span m='34890'>much</span> <span
  m='35360'>just</span> <span m='35660'>a</span> <span
  m='35740'>computational</span> <span m='36380'>problem.</span> <span
  m='36830'>We're going</span> <span m='36970'>to</span> <span
  m='37030'>make</span> <span m='37160'>sure</span> <span m='37370'>that</span>
  <span m='37520'>we</span> <span m='37620'>know</span> <span
  m='38400'>what</span> <span m='38880'>these</span> <span
  m='39730'>things</span> <span m='40130'>I'm</span> <span
  m='40290'>about</span> <span m='40580'>to</span> <span m='41120'>talk</span>
  <span m='41330'>about</span> <span m='41590'>are,</span> <span
  m='41980'>how</span> <span m='42100'>you</span> <span m='42290'>define</span>
  <span m='42650'>them,</span> <span m='42790'>and</span> <span
  m='42890'>how</span> <span m='42980'>you</span> <span m='43140'>get</span>
  <span m='43410'>from</span> <span m='43610'>the</span> <span
  m='43690'>position</span> <span m='44340'>vector</span> <span
  m='44710'>to</span> <span m='45070'>each</span> <span m='45240'>of</span>
  <span m='45330'>these</span> <span m='45540'>things.</span> </p><p><span
  m='45830'>So</span> <span m='46530'>we</span> <span m='46770'>want to</span>
  <span m='46950'>compute the</span> <span m='47350'>velocity,</span> <span
  m='48690'>the</span> <span m='48820'>speed,</span> <span m='50050'>the</span>
  <span m='50260'>acceleration,</span> <span m='51460'>and</span> <span
  m='51660'>find</span> <span m='51970'>the</span> <span m='52040'>unit</span>
  <span m='52320'>tangent</span> <span m='52590'>vector</span> <span
  m='54050'>for</span> <span m='54260'>r of</span> <span m='54540'>t.</span>
  <span m='55250'>And</span> <span m='55560'>then,</span> <span
  m='55960'>the</span> <span m='56130'>second</span> <span
  m='56450'>part,</span> <span m='56780'>we want to</span> <span
  m='56940'>compute</span> <span m='57280'>the</span> <span m='57410'>arc</span>
  <span m='57620'>length</span> <span m='57860'>of</span> <span
  m='57960'>the</span> <span m='58070'>trajectory</span> <span
  m='59250'>from</span> <span m='59460'>t</span> <span m='59620'>equals</span>
  <span m='59840'>0</span> <span m='60450'>to</span> <span m='60600'>t</span>
  <span m='60750'>equals</span> <span m='61050'>2.</span> <span
  m='62330'>So</span> <span m='62500'>I'll</span> <span m='62620'>give</span>
  <span m='62780'>you</span> <span m='62890'>a</span> <span
  m='62940'>moment</span> <span m='63320'>to</span> <span m='63420'>do</span>
  <span m='63540'>that</span> <span m='63730'>problem.</span> <span
  m='64030'>Why don't you</span> <span m='64320'>pause</span> <span
  m='64740'>the</span> <span m='65140'>video,</span> <span m='65330'>work
  on</span> <span m='65430'>the</span> <span m='65500'>problem.</span> <span
  m='66070'>When</span> <span m='66300'>you're</span> <span
  m='66430'>ready</span> <span m='66630'>to</span> <span m='66740'>check</span>
  <span m='66970'>your</span> <span m='67090'>work,</span> <span
  m='67880'>bring</span> <span m='68110'>the</span> <span m='68170'>video</span>
  <span m='68430'>back</span> <span m='68690'>up</span> <span
  m='68850'>and</span> <span m='68950'>I'll</span> <span m='69020'>show</span>
  <span m='69160'>you</span> <span m='69260'>how</span> <span m='69410'>I</span>
  <span m='69500'>do</span> <span m='69660'>it.</span> </p><p><span
  m='78930'>OK,</span> <span m='79200'>welcome</span> <span
  m='79500'>back.</span> <span m='80120'>Well,</span> <span
  m='80410'>hopefully,</span> <span m='80780'>you</span> <span
  m='80920'>felt</span> <span m='81220'>comfortable</span> <span
  m='81760'>with</span> <span m='82360'>answering</span> <span
  m='82700'>these</span> <span m='82880'>questions.</span> <span
  m='83850'>So</span> <span m='84080'>now</span> <span m='84350'>I</span> <span
  m='84440'>will</span> <span m='84580'>answer</span> <span
  m='84880'>them</span> <span m='85050'>and</span> <span m='85200'>you</span>
  <span m='85270'>can</span> <span m='85870'>compare</span> <span
  m='86180'>your</span> <span m='86330'>answers</span> <span
  m='86650'>with</span> <span m='86770'>mine.</span> </p><p><span
  m='87200'>So</span> <span m='87710'>let</span> <span m='88010'>me</span> <span
  m='89060'>start</span> <span m='89330'>off</span> <span m='90240'>with</span>
  <span m='90530'>part</span> <span m='90810'>a.</span> <span
  m='91180'>Part</span> <span m='91470'>a,</span> <span m='92960'>the</span>
  <span m='93060'>first</span> <span m='93310'>thing</span> <span
  m='93440'>we're</span> <span m='93540'>going</span> <span m='93750'>to</span>
  <span m='93840'>do</span> <span m='94010'>is</span> <span
  m='94150'>find</span> <span m='94480'>the</span> <span
  m='94550'>velocity.</span> <span m='95850'>So</span> <span
  m='96110'>velocity</span> <span m='98480'>is</span> <span
  m='98690'>really--</span> <span m='99000'>all</span> <span m='99250'>we</span>
  <span m='99370'>need</span> <span m='99560'>to</span> <span
  m='99680'>do</span> <span m='100110'>is</span> <span m='100380'>take</span>
  <span m='100950'>the</span> <span m='101050'>derivative</span> <span
  m='101790'>of</span> <span m='101930'>the</span> <span
  m='102040'>position</span> <span m='102440'>vector</span> <span
  m='102770'>with</span> <span m='102940'>respect</span> <span
  m='103290'>to</span> <span m='103380'>t.</span> <span m='103640'>So</span>
  <span m='103840'>I'm</span> <span m='103960'>just</span> <span
  m='104130'>going</span> <span m='104320'>to</span> <span
  m='104440'>take</span> <span m='104750'>r</span> <span m='104990'>prime</span>
  <span m='105470'>of</span> <span m='105600'>t.</span> <span
  m='106260'>And</span> <span m='106500'>now</span> <span m='106620'>I'm</span>
  <span m='106740'>going</span> <span m='106910'>to</span> <span
  m='107000'>write</span> <span m='107240'>it</span> <span m='107340'>in</span>
  <span m='107490'>the</span> <span m='108680'>shorthand</span> <span
  m='109290'>notation</span> <span m='109770'>that</span> <span
  m='109880'>you've</span> <span m='110040'>seen,</span> <span
  m='111180'>with</span> <span m='111420'>the</span> <span
  m='112430'>brackets</span> <span m='113000'>to</span> <span
  m='113130'>denote</span> <span m='113420'>that</span> <span
  m='113630'>it's</span> <span m='113770'>not</span> <span m='114240'>a</span>
  <span m='114950'>point,</span> <span m='115350'>but</span> <span
  m='115510'>it's</span> <span m='115640'>a</span> <span
  m='115710'>vector.</span> <span m='116750'>So</span> <span
  m='117730'>this</span> <span m='117990'>is</span> <span m='118150'>what</span>
  <span m='118340'>you've</span> <span m='118480'>seen</span> <span
  m='118810'>to</span> <span m='118940'>denote</span> <span m='119780'>a</span>
  <span m='119920'>vector</span> <span m='120250'>rather</span> <span
  m='120510'>than</span> <span m='120650'>a</span> <span
  m='120720'>point.</span> </p><p><span m='121380'>So</span> <span
  m='121680'>the</span> <span m='121790'>derivative</span> <span
  m='122280'>with</span> <span m='122400'>respect</span> <span
  m='122690'>to</span> <span m='122790'>t</span> <span m='122970'>of</span>
  <span m='123060'>the</span> <span m='123160'>first</span> <span
  m='123490'>component</span> <span m='124030'>is</span> <span
  m='124160'>just</span> <span m='124430'>negative</span> <span
  m='124900'>4t.</span> <span m='127100'>The</span> <span
  m='127200'>derivative</span> <span m='127660'>with</span> <span
  m='127780'>respect</span> <span m='128080'>to</span> <span m='128160'>t
  of</span> <span m='128440'>the</span> <span m='128590'>second</span> <span
  m='128920'>component</span> <span m='129550'>is</span> <span
  m='129760'>just</span> <span m='130150'>2t,</span> <span
  m='131690'>because</span> <span m='131970'>we</span> <span
  m='132080'>had</span> <span m='132350'>t</span> <span
  m='132540'>squared,</span> <span m='132950'>so</span> <span
  m='133060'>when</span> <span m='133150'>we</span> <span m='133270'>take</span>
  <span m='133440'>its</span> <span m='133520'>derivative,</span> <span
  m='133920'>we</span> <span m='134060'>just</span> <span m='134250'>get</span>
  <span m='134470'>2t.</span> <span m='135450'>And</span> <span
  m='135610'>the</span> <span m='135680'>third</span> <span
  m='135960'>component</span> <span m='137340'>was</span> <span
  m='137580'>negative</span> <span m='138020'>2</span> <span
  m='138220'>plus</span> <span m='138540'>2</span> <span m='138750'>t</span>
  <span m='138970'>squared,</span> <span m='139490'>so</span> <span
  m='139630'>when</span> <span m='139740'>I</span> <span m='139800'>take</span>
  <span m='140000'>its</span> <span m='140110'>derivative,</span> <span
  m='140600'>I</span> <span m='140680'>get</span> <span m='141000'>a</span>
  <span m='141275'>4t,</span> <span m='142560'>so</span> <span
  m='142730'>that</span> <span m='142920'>is</span> <span
  m='143020'>actually</span> <span m='143460'>v</span> <span
  m='143700'>of</span> <span m='143850'>t,</span> <span m='144920'>OK?</span>
  </p><p><span m='145180'>And</span> <span m='145290'>then</span> <span
  m='145400'>the</span> <span m='145480'>next</span> <span
  m='145720'>thing</span> <span m='145880'>I</span> <span
  m='145970'>asked</span> <span m='146170'>you</span> <span m='146340'>to</span>
  <span m='146460'>do</span> <span m='146860'>is</span> <span
  m='147290'>determine</span> <span m='147710'>the</span> <span
  m='147800'>speed,</span> <span m='148510'>and</span> <span
  m='148880'>the</span> <span m='148950'>speed,</span> <span
  m='149330'>of</span> <span m='149430'>course,</span> <span
  m='149710'>is</span> <span m='149850'>just</span> <span m='150660'>the</span>
  <span m='151080'>length</span> <span m='151570'>of</span> <span
  m='151710'>the</span> <span m='151810'>velocity</span> <span
  m='152380'>vector,</span> <span m='153280'>right?</span> <span
  m='153540'>So</span> <span m='154260'>we</span> <span m='154440'>just</span>
  <span m='154630'>need</span> <span m='154800'>to</span> <span
  m='155140'>find</span> <span m='156290'>the</span> <span
  m='156400'>length</span> <span m='156840'>of</span> <span m='157000'>v.</span>
  <span m='158160'>Now,</span> <span m='158410'>to</span> <span
  m='158520'>do</span> <span m='158760'>that,</span> <span m='159540'>to</span>
  <span m='159660'>remind</span> <span m='159960'>ourselves</span> <span
  m='160280'>what</span> <span m='160410'>we</span> <span m='160520'>do</span>
  <span m='160740'>for</span> <span m='160890'>that,</span> <span
  m='161100'>we</span> <span m='161180'>actually</span> <span
  m='161490'>take</span> <span m='161680'>the</span> <span
  m='161770'>inner</span> <span m='161930'>product</span> <span
  m='162350'>of</span> <span m='162420'>v</span> <span m='162640'>with</span>
  <span m='162800'>itself,</span> <span m='163160'>the</span> <span
  m='163250'>dot</span> <span m='163530'>product</span> <span
  m='163880'>of</span> <span m='163920'>v</span> <span m='164110'>with</span>
  <span m='164260'>itself,</span> <span m='165640'>and</span> <span
  m='165830'>then</span> <span m='165980'>we</span> <span m='168220'>take</span>
  <span m='168450'>the</span> <span m='168530'>square root</span> <span
  m='169000'>of</span> <span m='169090'>that.</span> <span m='169900'>So</span>
  <span m='170130'>let's</span> <span m='170340'>look</span> <span
  m='170560'>at</span> <span m='170720'>what</span> <span m='171100'>the</span>
  <span m='171210'>dot</span> <span m='171450'>product</span> <span
  m='171800'>will</span> <span m='171900'>be.</span> </p><p><span
  m='172070'>Let</span> <span m='172210'>me</span> <span m='172640'>find</span>
  <span m='172890'>the</span> <span m='172960'>squared</span> <span
  m='173360'>thing</span> <span m='173550'>first,</span> <span
  m='174610'>and</span> <span m='174870'>then</span> <span m='175030'>I</span>
  <span m='175160'>will</span> <span m='175840'>take</span> <span
  m='176040'>the</span> <span m='176120'>square</span> <span
  m='176360'>root.</span> <span m='177830'>So</span> <span m='178110'>v</span>
  <span m='178410'>dotted</span> <span m='178830'>with</span> <span
  m='178990'>v,</span> <span m='179940'>the</span> <span m='180070'>first</span>
  <span m='180340'>component</span> <span m='180780'>I'm</span> <span
  m='180890'>going</span> <span m='181090'>to</span> <span
  m='181150'>have</span> <span m='181270'>negative</span> <span
  m='181630'>4t</span> <span m='182220'>quantity</span> <span
  m='182590'>squared,</span> <span m='183440'>so</span> <span
  m='183640'>that's</span> <span m='183840'>going</span> <span
  m='184020'>to</span> <span m='184090'>be</span> <span m='184180'>16</span>
  <span m='184820'>t</span> <span m='185040'>squared.</span> <span
  m='186760'>And</span> <span m='186960'>then</span> <span m='187110'>the</span>
  <span m='187200'>second</span> <span m='187530'>component</span> <span
  m='188040'>is</span> <span m='188150'>going</span> <span m='188370'>to</span>
  <span m='188450'>be</span> <span m='188610'>2t</span> <span
  m='189130'>quantity</span> <span m='189540'>squared,</span> <span
  m='190720'>so</span> <span m='190870'>I'm</span> <span m='190960'>going</span>
  <span m='191110'>to</span> <span m='191170'>have</span> <span
  m='191360'>plus</span> <span m='192080'>4</span> <span m='192490'>t</span>
  <span m='192720'>squared.</span> <span m='193830'>And</span> <span
  m='193990'>the</span> <span m='194060'>third</span> <span
  m='194340'>component</span> <span m='194850'>is</span> <span
  m='194960'>going</span> <span m='195150'>to</span> <span m='195240'>be</span>
  <span m='195320'>another--</span> <span m='195750'>it's</span> <span
  m='195920'>going</span> <span m='196100'>to</span> <span m='196170'>be</span>
  <span m='196260'>4t</span> <span m='196770'>quantity</span> <span
  m='197150'>squared,</span> <span m='197910'>so</span> <span
  m='198070'>I</span> <span m='198130'>get</span> <span
  m='198280'>another</span> <span m='199140'>16</span> <span m='199486'>t</span>
  <span m='200450'>squared.</span> </p><p><span m='201720'>So</span> <span
  m='203280'>when</span> <span m='203480'>I</span> <span m='203540'>add</span>
  <span m='203790'>those</span> <span m='204050'>up,</span> <span
  m='204940'>I</span> <span m='205050'>believe</span> <span m='205340'>I</span>
  <span m='205400'>get</span> <span m='205610'>36</span> <span
  m='206250'>t</span> <span m='206480'>squared?</span> <span
  m='207980'>Yes,</span> <span m='208660'>good.</span> <span
  m='211500'>And</span> <span m='211710'>so</span> <span m='211870'>then,</span>
  <span m='212180'>I</span> <span m='212340'>just</span> <span
  m='212570'>have</span> <span m='212710'>to</span> <span m='212810'>take</span>
  <span m='213030'>the</span> <span m='213090'>square</span> <span
  m='213370'>root</span> <span m='213580'>of</span> <span m='213670'>both</span>
  <span m='213920'>sides</span> <span m='214310'>to</span> <span
  m='214430'>get</span> <span m='215140'>what</span> <span m='215690'>the</span>
  <span m='216070'>speed</span> <span m='216490'>actually</span> <span
  m='216950'>is</span> <span m='217190'>instead</span> <span
  m='217570'>of</span> <span m='217920'>the</span> <span
  m='218050'>square</span> <span m='218490'>of</span> <span
  m='218620'>the</span> <span m='218710'>speed.</span> <span
  m='221730'>So</span> <span m='221840'>I</span> <span m='221930'>get</span>
  <span m='222710'>6t,</span> <span m='225180'>OK?</span> <span
  m='226090'>So</span> <span m='226360'>that's</span> <span
  m='227230'>the</span> <span m='227340'>velocity;</span> <span
  m='228540'>that's</span> <span m='228900'>the</span> <span
  m='229010'>speed.</span> <span m='230080'>Now</span> <span m='230300'>I</span>
  <span m='230370'>need</span> <span m='230540'>to</span> <span
  m='230630'>find</span> <span m='230880'>the</span> <span
  m='230930'>acceleration</span> <span m='231580'>and</span> <span
  m='231980'>I</span> <span m='232010'>need</span> <span m='232180'>to</span>
  <span m='232280'>find</span> <span m='232500'>the</span> <span
  m='232570'>unit</span> <span m='232830'>tangent</span> <span
  m='233190'>vector.</span> </p><p><span m='234100'>OK,</span> <span
  m='234310'>so</span> <span m='234490'>let</span> <span m='234660'>me</span>
  <span m='234810'>see.</span> <span m='235250'>I</span> <span
  m='235370'>will</span> <span m='235550'>come</span> <span
  m='235750'>over</span> <span m='235950'>here.</span> <span
  m='238040'>Let</span> <span m='238160'>me</span> <span m='238450'>step</span>
  <span m='238870'>off</span> <span m='239130'>here</span> <span
  m='239390'>and</span> <span m='239530'>I will</span> <span
  m='239700'>find</span> <span m='240020'>the</span> <span
  m='240080'>acceleration</span> <span m='240760'>and</span> <span
  m='241190'>the</span> <span m='241280'>unit</span> <span
  m='241360'>tangent</span> <span m='241890'>vector.</span> <span
  m='242200'>So</span> <span m='242560'>the</span> <span
  m='242660'>acceleration,</span> <span m='243630'>if</span> <span
  m='243700'>you</span> <span m='243770'>remember,</span> <span
  m='244140'>the</span> <span m='244240'>acceleration</span> <span
  m='244860'>is</span> <span m='244950'>actually</span> <span
  m='245280'>just</span> <span m='245550'>the</span> <span
  m='245620'>derivative</span> <span m='246110'>of</span> <span
  m='246230'>the</span> <span m='246320'>velocity</span> <span
  m='247440'>with</span> <span m='247710'>respect</span> <span
  m='248040'>to</span> <span m='248150'>t.</span> <span m='248380'>So</span>
  <span m='248560'>the</span> <span m='248660'>acceleration</span> <span
  m='250610'>is</span> <span m='250790'>going</span> <span m='251020'>to</span>
  <span m='251120'>be</span> <span m='251290'>the</span> <span
  m='251410'>derivative</span> <span m='251730'>of</span> <span
  m='252020'>negative</span> <span m='252380'>4t</span> <span
  m='252880'>is</span> <span m='253000'>just</span> <span
  m='253180'>negative</span> <span m='253550'>4.</span> <span
  m='254250'>The</span> <span m='254600'>derivative</span> <span
  m='255110'>of</span> <span m='255250'>2t</span> <span m='255800'>is</span>
  <span m='255940'>just</span> <span m='256250'>2,</span> <span
  m='256990'>and</span> <span m='257140'>the</span> <span
  m='257210'>derivative</span> <span m='257550'>of</span> <span
  m='257630'>4t</span> <span m='258330'>is</span> <span m='258470'>just</span>
  <span m='258820'>4,</span> <span m='259700'>all</span> <span
  m='259870'>with</span> <span m='260040'>respect</span> <span
  m='260380'>to</span> <span m='260470'>t. OK.</span> </p><p><span
  m='261750'>So</span> <span m='262250'>the</span> <span
  m='262750'>acceleration</span> <span m='263610'>vector</span> <span
  m='264040'>is</span> <span m='264210'>equal</span> <span m='264490'>to</span>
  <span m='265070'>negative</span> <span m='265500'>4</span> <span
  m='265830'>comma</span> <span m='266160'>2</span> <span
  m='266420'>comma</span> <span m='266700'>4,</span> <span m='267080'>so
  you</span> <span m='267220'>see</span> <span m='267390'>this</span> <span
  m='267530'>actually</span> <span m='267860'>has</span> <span
  m='268060'>constant</span> <span m='268620'>acceleration.</span> <span
  m='270040'>So</span> <span m='270290'>at</span> <span m='270360'>any</span>
  <span m='270520'>point,</span> <span m='270860'>your</span> <span
  m='270970'>acceleration</span> <span m='271540'>is</span> <span
  m='271630'>always</span> <span m='271900'>this</span> <span
  m='272040'>value,</span> <span m='272820'>so</span> <span
  m='273010'>it's</span> <span m='273110'>not</span> <span
  m='273340'>surprising</span> <span m='273940'>that</span> <span
  m='274110'>our</span> <span m='274490'>velocity</span> <span
  m='275110'>is</span> <span m='275220'>increasing,</span> <span
  m='276790'>and</span> <span m='276940'>actually,</span> <span
  m='277260'>it's</span> <span m='277340'>increasing--</span> <span
  m='277790'>you'll</span> <span m='277900'>notice,</span> <span
  m='278280'>each</span> <span m='278480'>of</span> <span
  m='278560'>these</span> <span m='278750'>components</span> <span
  m='279150'>is</span> <span m='279300'>constant.</span> <span
  m='280230'>The</span> <span m='280350'>velocity,</span> <span
  m='280920'>each</span> <span m='281090'>of</span> <span m='281180'>the</span>
  <span m='281280'>components</span> <span m='281770'>is</span> <span
  m='281920'>linear,</span> <span m='282800'>and</span> <span
  m='283040'>if</span> <span m='283140'>we</span> <span m='283270'>went</span>
  <span m='283470'>back,</span> <span m='283750'>we</span> <span
  m='283890'>look</span> <span m='284080'>at</span> <span m='284190'>the</span>
  <span m='284670'>position</span> <span m='285160'>vector,</span> <span
  m='285900'>each</span> <span m='286180'>of</span> <span
  m='286270'>those</span> <span m='286490'>components</span> <span
  m='286990'>is</span> <span m='287110'>quadratic.</span> <span
  m='287950'>And</span> <span m='288060'>this</span> <span m='288190'>is</span>
  <span m='288600'>exactly</span> <span m='289090'>what</span> <span
  m='289190'>you</span> <span m='289290'>expect</span> <span
  m='289780'>from</span> <span m='290160'>just</span> <span
  m='290400'>your</span> <span m='291200'>understanding</span> <span
  m='292060'>of</span> <span m='292270'>derivatives</span> <span
  m='292730'>in</span> <span m='293090'>single-variable</span> <span
  m='293780'>calculus.</span> <span m='294810'>If</span> <span
  m='294920'>you</span> <span m='295000'>start</span> <span
  m='295270'>off</span> <span m='295420'>with</span> <span m='295480'>a</span>
  <span m='295540'>constant</span> <span m='296480'>and</span> <span
  m='296760'>you find</span> <span m='297040'>an</span> <span
  m='297120'>antiderivative,</span> <span m='297800'>it's</span> <span
  m='297910'>going</span> <span m='298110'>to</span> <span m='298170'>be</span>
  <span m='298260'>linear,</span> <span m='298630'>and you</span> <span
  m='298780'>find</span> <span m='298970'>another</span> <span
  m='299240'>antiderivative,</span> <span m='300210'>you're</span> <span
  m='300380'>going</span> <span m='300590'>to</span> <span
  m='300670'>have</span> <span m='300950'>a</span> <span
  m='301720'>quadratic,</span> <span m='302520'>so</span> <span
  m='302710'>we</span> <span m='302830'>shouldn't</span> <span
  m='303100'>be</span> <span m='303200'>surprised</span> <span
  m='303670'>by</span> <span m='304050'>any of</span> <span
  m='304310'>that.</span> </p><p><span m='304680'>Now</span> <span m='304890'>we
  have</span> <span m='305000'>one</span> <span m='305180'>more</span> <span
  m='305320'>thing</span> <span m='305490'>to</span> <span m='305580'>do</span>
  <span m='305700'>with</span> <span m='305870'>Part</span> <span
  m='306100'>a,</span> <span m='307140'>and</span> <span m='307300'>that</span>
  <span m='307450'>is</span> <span m='307560'>to</span> <span m='307650'>find
  the</span> <span m='308010'>unit tangent</span> <span
  m='308430'>vector.</span> <span m='308770'>And</span> <span
  m='308910'>that's</span> <span m='309080'>fairly</span> <span
  m='309430'>easy,</span> <span m='310200'>because</span> <span
  m='310450'>all</span> <span m='310560'>we</span> <span m='310660'>have</span>
  <span m='310790'>to</span> <span m='310900'>do</span> <span
  m='311180'>is--</span> <span m='311320'>if you</span> <span
  m='311500'>notice,</span> <span m='311880'>we</span> <span
  m='312000'>have</span> <span m='313300'>the</span> <span
  m='313560'>velocity</span> <span m='314200'>vector</span> <span
  m='315350'>and</span> <span m='315650'>we</span> <span m='315770'>have</span>
  <span m='316770'>its</span> <span m='317000'>length.</span> <span
  m='317940'>And so</span> <span m='318200'>to</span> <span
  m='318280'>find</span> <span m='318560'>the</span> <span m='318650'>unit
  tangent</span> <span m='319080'>vector,</span> <span m='319310'>all</span>
  <span m='319420'>we</span> <span m='319530'>have</span> <span
  m='319670'>to</span> <span m='319770'>do</span> <span m='320040'>is</span>
  <span m='320260'>take</span> <span m='320450'>the</span> <span
  m='320530'>velocity</span> <span m='321100'>and</span> <span m='321220'>divide
  it</span> <span m='321580'>by its</span> <span m='321770'>length,</span> <span
  m='322740'>and</span> <span m='322900'>that</span> <span
  m='323040'>will</span> <span m='323160'>normalize</span> <span
  m='323910'>it.</span> <span m='324110'>That</span> <span
  m='324270'>means</span> <span m='324510'>that</span> <span
  m='324650'>its</span> <span m='325260'>length</span> <span
  m='325630'>will</span> <span m='325780'>be</span> <span m='326280'>one</span>
  <span m='327530'>at</span> <span m='327680'>that</span> <span
  m='327880'>point,</span> <span m='328140'>because</span> <span
  m='328410'>you're</span> <span m='328510'>taking</span> <span m='329430'>a
  vector,</span> <span m='329780'>dividing</span> <span m='330130'>by its</span>
  <span m='330370'>length,</span> <span m='330710'>so</span> <span
  m='331290'>the</span> <span m='331390'>length of</span> <span
  m='331600'>the</span> <span m='331720'>new</span> <span
  m='331820'>vector</span> <span m='332130'>will</span> <span
  m='332260'>have</span> <span m='332540'>to</span> <span m='332640'>be</span>
  <span m='332810'>length</span> <span m='333120'>one.</span> </p><p><span
  m='333760'>So</span> <span m='334010'>let</span> <span m='334190'>me</span>
  <span m='335810'>write</span> <span m='336130'>that</span> <span
  m='336380'>down.</span> <span m='336670'>And</span> <span
  m='336810'>actually,</span> <span m='337080'>I</span> <span
  m='337110'>guess</span> <span m='337420'>the</span> <span
  m='337550'>point</span> <span m='337800'>to</span> <span
  m='337890'>remember</span> <span m='338280'>here</span> <span
  m='338940'>is</span> <span m='339130'>that the</span> <span
  m='339340'>velocity</span> <span m='339920'>vector</span> <span
  m='340350'>is</span> <span m='340700'>tangent</span> <span
  m='341990'>to</span> <span m='342300'>the</span> <span m='342440'>path</span>
  <span m='343130'>you're</span> <span m='343710'>carving</span> <span
  m='344180'>out,</span> <span m='344680'>to</span> <span m='344850'>the</span>
  <span m='344990'>trajectory.</span> <span m='350020'>OK,</span> <span
  m='350940'>so</span> <span m='351400'>this</span> <span m='351660'>is</span>
  <span m='351760'>a</span> <span m='351860'>vector.</span> <span
  m='352440'>This</span> <span m='352720'>is</span> <span m='352850'>a</span>
  <span m='352920'>scalar.</span> <span m='354220'>So</span> <span
  m='354460'>I'm</span> <span m='354600'>going</span> <span m='354870'>to</span>
  <span m='355370'>take</span> <span m='356170'>1</span> <span
  m='356490'>over</span> <span m='356760'>6t,</span> <span m='358210'>and</span>
  <span m='358350'>I'm</span> <span m='358440'>going</span> <span
  m='358640'>to</span> <span m='358700'>multiply</span> <span
  m='359220'>it</span> <span m='359370'>by</span> <span
  m='360700'>negative</span> <span m='361100'>4t,</span> <span
  m='362750'>2t,</span> <span m='364470'>4t,</span> <span m='366940'>and</span>
  <span m='367090'>this</span> <span m='367250'>gives</span> <span
  m='367540'>me,</span> <span m='367740'>when</span> <span m='367900'>I</span>
  <span m='367980'>do</span> <span m='368140'>my</span> <span
  m='368310'>division,</span> <span m='369360'>looks</span> <span
  m='369630'>like</span> <span m='369810'>it</span> <span
  m='369900'>gives</span> <span m='370120'>me</span> <span m='370340'>a</span>
  <span m='371200'>negative</span> <span m='371760'>2/3,</span> <span
  m='372110'>right,</span> <span m='375400'>1/3,</span> <span
  m='378290'>2/3.</span> <span m='381880'>So</span> <span m='382060'>that</span>
  <span m='382250'>is</span> <span m='382370'>the</span> <span
  m='382500'>unit</span> <span m='384540'>tangent</span> <span
  m='385030'>vector,</span> <span m='386080'>OK?</span> </p><p><span
  m='388370'>OK, and</span> <span m='388550'>now,</span> <span
  m='388760'>we</span> <span m='388900'>have</span> <span m='389020'>one</span>
  <span m='389400'>more</span> <span m='390100'>point</span> <span
  m='390470'>we</span> <span m='390570'>want</span> <span m='390740'>to</span>
  <span m='390800'>make,</span> <span m='391330'>and</span> <span
  m='391500'>that</span> <span m='391710'>is</span> <span
  m='392000'>having</span> <span m='392310'>to</span> <span m='392430'>do</span>
  <span m='392600'>with</span> <span m='392840'>the</span> <span
  m='394240'>arc</span> <span m='394500'>length</span> <span
  m='394710'>of</span> <span m='394790'>the</span> <span
  m='394880'>trajectory.</span> <span m='395490'>That</span> <span
  m='395640'>was</span> <span m='395750'>the</span> <span
  m='395840'>second</span> <span m='396130'>part</span> <span
  m='396290'>of</span> <span m='396350'>this</span> <span
  m='396490'>problem,</span> <span m='396840'>was</span> <span
  m='396990'>to</span> <span m='397120'>find</span> <span m='397340'>the</span>
  <span m='397400'>arc</span> <span m='397580'>length</span> <span
  m='398010'>of</span> <span m='398230'>the</span> <span
  m='398390'>trajectory</span> <span m='398990'>from</span> <span
  m='399220'>t</span> <span m='399370'>equals</span> <span m='399600'>0</span>
  <span m='399890'>to</span> <span m='400010'>t</span> <span
  m='400110'>equals</span> <span m='400430'>2.</span> <span m='401320'>So</span>
  <span m='401520'>let</span> <span m='401650'>me</span> <span
  m='401760'>just</span> <span m='402810'>draw</span> <span
  m='402990'>another</span> <span m='403260'>line</span> <span
  m='403470'>here.</span> <span m='404770'>And</span> <span
  m='404940'>what</span> <span m='405050'>we</span> <span m='405150'>want</span>
  <span m='405350'>to</span> <span m='405470'>do</span> <span
  m='405630'>there</span> <span m='406010'>then</span> <span
  m='406790'>is--</span> <span m='407030'>really</span> <span
  m='407330'>what</span> <span m='407520'>we</span> <span m='407620'>want
  to</span> <span m='407850'>do</span> <span m='409050'>is</span> <span
  m='409710'>we</span> <span m='409990'>want</span> <span m='410210'>to</span>
  <span m='412180'>integrate</span> <span m='413420'>the</span> <span
  m='414280'>speed,</span> <span m='415970'>right?</span> <span m='416610'>We
  want to</span> <span m='416880'>integrate</span> <span m='417320'>the</span>
  <span m='417420'>speed</span> <span m='417900'>from</span> <span
  m='418120'>0</span> <span m='418580'>to</span> <span m='418740'>2.</span>
  <span m='419040'>So</span> <span m='419950'>this--</span> <span m='420580'>let
  me</span> <span m='420800'>come</span> <span m='420980'>over</span> <span
  m='421180'>here--</span> <span m='421860'>this</span> <span
  m='422030'>absolute</span> <span m='422500'>v,</span> <span
  m='423440'>you</span> <span m='423610'>might</span> <span
  m='423760'>have</span> <span m='423860'>also</span> <span
  m='424160'>seen</span> <span m='424450'>it</span> <span
  m='424570'>written</span> <span m='424850'>as</span> <span
  m='427520'>ds/dt,</span> <span m='430110'>right?</span> <span
  m='431060'>And</span> <span m='431180'>so</span> <span m='431260'>we</span>
  <span m='431350'>want</span> <span m='431510'>to</span> <span
  m='431570'>integrate</span> <span m='431980'>this</span> <span
  m='433260'>in</span> <span m='433490'>dt--</span> <span m='435060'>in</span>
  <span m='435570'>t,</span> <span m='435950'>sorry--</span> <span
  m='436290'>from</span> <span m='436480'>0</span> <span m='436770'>to</span>
  <span m='436910'>2.</span> </p><p><span m='438220'>And</span> <span
  m='438380'>so</span> <span m='438510'>we</span> <span m='438640'>come</span>
  <span m='438830'>over</span> <span m='439020'>here.</span> <span m='441180'>We
  want</span> <span m='441600'>to</span> <span m='441840'>integrate</span> <span
  m='442260'>from</span> <span m='442450'>0</span> <span m='442710'>to</span>
  <span m='442810'>2,</span> <span m='444150'>6t</span> <span
  m='445780'>dt.</span> <span m='447200'>That's</span> <span
  m='447460'>fairly</span> <span m='447850'>easy.</span> <span
  m='448140'>That's</span> <span m='448370'>going to</span> <span
  m='448550'>be</span> <span m='448690'>6</span> <span m='449100'>t</span> <span
  m='449330'>squared</span> <span m='449790'>over</span> <span
  m='450020'>2,</span> <span m='451590'>evaluated</span> <span
  m='452230'>from</span> <span m='452420'>0 to</span> <span m='452710'>2.</span>
  <span m='453890'>And</span> <span m='454080'>so</span> <span
  m='454250'>when</span> <span m='454400'>I</span> <span m='455490'>write</span>
  <span m='455710'>that</span> <span m='455880'>down,</span> <span
  m='456090'>I'm</span> <span m='456170'>going to</span> <span
  m='456320'>get</span> <span m='456460'>6</span> <span m='456890'>times</span>
  <span m='457260'>4</span> <span m='457660'>divided</span> <span
  m='458020'>by</span> <span m='458140'>2,</span> <span m='458530'>24</span>
  <span m='459430'>divided</span> <span m='459710'>by</span> <span
  m='459790'>2,</span> <span m='459950'>I</span> <span m='460010'>just</span>
  <span m='460170'>get</span> <span m='460310'>12,</span> <span
  m='460700'>and</span> <span m='460770'>the</span> <span
  m='460840'>other</span> <span m='461000'>term</span> <span
  m='461210'>is</span> <span m='461320'>0.</span> <span m='462020'>So</span>
  <span m='462290'>the</span> <span m='462430'>arc</span> <span
  m='462690'>length</span> <span m='463690'>is--</span> <span
  m='464950'>of</span> <span m='465100'>the</span> <span
  m='465190'>trajectory</span> <span m='465700'>from</span> <span
  m='465870'>0</span> <span m='466600'>to</span> <span m='466750'>2</span> <span
  m='467050'>is</span> <span m='467200'>just</span> <span m='467400'>12</span>
  <span m='467680'>units.</span> </p><p><span m='470310'>So</span> <span
  m='470490'>this</span> <span m='470650'>really</span> <span m='470980'>was
  a</span> <span m='471220'>purely</span> <span m='471510'>computational</span>
  <span m='472140'>type</span> <span m='472330'>of</span> <span
  m='472400'>problem.</span> <span m='472760'>All</span> <span
  m='472880'>we</span> <span m='472970'>were</span> <span
  m='473100'>doing,</span> <span m='473430'>if</span> <span
  m='473510'>you</span> <span m='473590'>come</span> <span
  m='473720'>back</span> <span m='473920'>over</span> <span
  m='474110'>here</span> <span m='474910'>and</span> <span m='475120'>you</span>
  <span m='475230'>recall</span> <span m='475510'>what</span> <span
  m='475790'>we</span> <span m='475880'>were</span> <span
  m='475990'>trying</span> <span m='476210'>to</span> <span
  m='476320'>do,</span> <span m='477030'>is</span> <span m='477710'>we</span>
  <span m='477960'>started</span> <span m='478340'>off</span> <span
  m='478520'>with</span> <span m='478620'>a</span> <span
  m='478660'>position</span> <span m='479070'>vector.</span> <span
  m='480050'>We</span> <span m='480240'>just</span> <span m='480710'>did</span>
  <span m='480870'>a</span> <span m='481280'>lot</span> <span
  m='481590'>of</span> <span m='481680'>computation.</span> <span
  m='482310'>We</span> <span m='482400'>found the</span> <span
  m='482640'>velocity,</span> <span m='483180'>the</span> <span
  m='483300'>speed, the</span> <span m='483670'>acceleration,</span> <span
  m='484376'>the</span> <span m='484730'>unit</span> <span
  m='485000'>tangent</span> <span m='485390'>vector,</span> <span
  m='486260'>and</span> <span m='486420'>then</span> <span m='486530'>we</span>
  <span m='487040'>just</span> <span m='487250'>wanted</span> <span
  m='487450'>to</span> <span m='487510'>find</span> <span m='487700'>the</span>
  <span m='487840'>arc length</span> <span m='488040'>of</span> <span
  m='488150'>the</span> <span m='488280'>trajectory.</span> <span
  m='488840'>So</span> <span m='488950'>this</span> <span m='489110'>is</span>
  <span m='489240'>all</span> <span m='489870'>very</span> <span
  m='490250'>computational,</span> <span m='491110'>but</span> <span
  m='491250'>just</span> <span m='491460'>to</span> <span m='491540'>make</span>
  <span m='491690'>sure</span> <span m='491880'>we</span> <span
  m='492020'>understood</span> <span m='492760'>what</span> <span
  m='493020'>all</span> <span m='493130'>the</span> <span
  m='493230'>terms</span> <span m='493550'>meant</span> <span
  m='493930'>and</span> <span m='494090'>how</span> <span m='494730'>they</span>
  <span m='494850'>were</span> <span m='495400'>related</span> <span
  m='495820'>to</span> <span m='495940'>one</span> <span
  m='496100'>another.</span> <span m='497190'>So</span> <span
  m='497360'>I'll</span> <span m='497470'>stop</span> <span
  m='497700'>there.</span> </p>
embedded_media:
  - uid: 0d6b8023d77eb6527862fcbdf1f77d3f
    parent_uid: 1e0633a6847e236bf9b7c51d04eacf89
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: u9YrIxLZJ6s
  - uid: 5ad9f9c400c380af25dea5e847d51d34
    parent_uid: 1e0633a6847e236bf9b7c51d04eacf89
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/u9YrIxLZJ6s/default.jpg'
  - uid: 9f3202e54dde34214a5f86930b9935e8
    parent_uid: 1e0633a6847e236bf9b7c51d04eacf89
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: u9YrIxLZJ6s
  - uid: 20dc850f0654fb9c66e1c00a9931bc47
    parent_uid: 1e0633a6847e236bf9b7c51d04eacf89
    id: u9YrIxLZJ6s.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/1.-vectors-and-matrices/part-c-parametric-equations-for-curves/session-20-velocity-and-arc-length/parametric-curves-velocity-acceleration-length/u9YrIxLZJ6s.srt
  - uid: 2ee8913f9295ea33882703017a5d91a8
    parent_uid: 1e0633a6847e236bf9b7c51d04eacf89
    id: u9YrIxLZJ6s.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/1.-vectors-and-matrices/part-c-parametric-equations-for-curves/session-20-velocity-and-arc-length/parametric-curves-velocity-acceleration-length/u9YrIxLZJ6s.pdf
  - uid: ec0397ffff0d58ab6d81a91b85418582
    parent_uid: 1e0633a6847e236bf9b7c51d04eacf89
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 568fa2ec797f5027652777a415810bbb
    parent_uid: 1e0633a6847e236bf9b7c51d04eacf89
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 3d2661ce20f49325a5743a97385b4425
    parent_uid: 1e0633a6847e236bf9b7c51d04eacf89
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/parametric-curves-velocity/id414355340?i=90322846
  - uid: 1354b8bce685574de3161591211ed888
    parent_uid: 1e0633a6847e236bf9b7c51d04eacf89
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_16_300k.mp4'
type: courses
layout: video
---
