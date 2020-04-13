---
title: Conservative Fields and Exact Differentials
uid: a8b06b720af0184fc245f3d3a7334ed9
parent_uid: acfc5d4e3602454b1118b52cb66b3039
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/4.-triple-integrals-and-surface-integrals-in-3-space/part-c-line-integrals-and-stokes-theorem/session-90-curl-in-3d/conservative-fields-and-exact-differentials
short_url: conservative-fields-and-exact-differentials
inline_embed_id: 26921852conservativefieldsandexactdifferentials34991544
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='7670'>CHRISTINE BREINER: Welcome</span> <span m='8030'>back</span>
  <span m='8125'>to</span> <span m='8220'>recitation.</span> <span
  m='9370'>In</span> <span m='9570'>this</span> <span m='9730'>video,</span>
  <span m='10110'>I'd</span> <span m='10280'>like</span> <span
  m='10460'>us</span> <span m='10530'>to</span> <span m='10700'>consider</span>
  <span m='11050'>the</span> <span m='11150'>following</span> <span
  m='11470'>problem.</span> </p><p><span m='12580'>The</span> <span
  m='12700'>first</span> <span m='13020'>part</span> <span m='13610'>is</span>
  <span m='14110'>I'd</span> <span m='14280'>like</span> <span
  m='14440'>to</span> <span m='14540'>know,</span> <span m='14710'>for</span>
  <span m='14860'>what</span> <span m='15050'>values</span> <span
  m='15270'>of</span> <span m='15450'>b</span> <span m='16000'>is</span> <span
  m='16270'>this</span> <span m='16470'>vector</span> <span
  m='16790'>field</span> <span m='17590'>F</span> <span
  m='17930'>conservative?</span> <span m='18700'>And</span> <span
  m='18900'>F</span> <span m='19180'>is</span> <span m='19300'>defined</span>
  <span m='20180'>as</span> <span m='20340'>y*i</span> <span
  m='21550'>plus</span> <span m='21800'>the</span> <span
  m='21880'>quantity</span> <span m='22255'>x</span> <span m='22630'>plus</span>
  <span m='22860'>b*y*z</span> <span m='23310'>j</span> <span
  m='24520'>plus</span> <span m='24800'>the</span> <span
  m='24880'>quantity</span> <span m='25240'>y</span> <span
  m='25480'>squared</span> <span m='25760'>plus</span> <span m='25970'>1,</span>
  <span m='26210'>k.</span> <span m='26930'>So</span> <span m='27045'>as</span>
  <span m='27160'>you</span> <span m='27340'>can</span> <span
  m='27530'>see,</span> <span m='28180'>the</span> <span m='28280'>only</span>
  <span m='28580'>thing</span> <span m='28760'>we're</span> <span
  m='28890'>allowed</span> <span m='29200'>to</span> <span
  m='29270'>manipulate</span> <span m='29820'>in</span> <span
  m='29930'>this</span> <span m='30130'>problem</span> <span m='30520'>is</span>
  <span m='30680'>b.</span> <span m='31070'>b</span> <span m='31250'>will</span>
  <span m='31420'>be</span> <span m='31590'>some</span> <span
  m='31870'>real</span> <span m='32090'>number.</span> <span
  m='32800'>And</span> <span m='32930'>I</span> <span m='32990'>want</span>
  <span m='33110'>to</span> <span m='33170'>know,</span> <span
  m='36540'>what</span> <span m='36780'>real</span> <span
  m='36930'>numbers</span> <span m='37220'>can</span> <span m='37350'>I</span>
  <span m='37400'>put</span> <span m='37620'>in</span> <span
  m='37760'>for</span> <span m='37870'>b</span> <span m='38260'>so</span> <span
  m='38390'>that</span> <span m='38440'>this</span> <span
  m='38490'>vector</span> <span m='38980'>field</span> <span m='39220'>is</span>
  <span m='39310'>conservative.</span> </p><p><span m='40890'>The</span> <span
  m='41010'>second</span> <span m='41310'>part</span> <span m='41500'>of</span>
  <span m='41570'>this</span> <span m='41680'>problem</span> <span
  m='42070'>is</span> <span m='42680'>for</span> <span m='42820'>each</span>
  <span m='43060'>b-value</span> <span m='43480'>you</span> <span
  m='43730'>determined</span> <span m='44790'>from</span> <span
  m='45080'>one,</span> <span m='46180'>find</span> <span m='46580'>a</span>
  <span m='46620'>potential</span> <span m='47080'>function.</span> <span
  m='47680'>So</span> <span m='48560'>fix</span> <span m='49000'>the</span>
  <span m='49100'>b-value</span> <span m='50380'>for</span> <span
  m='50630'>one</span> <span m='50800'>of</span> <span m='50900'>the</span>
  <span m='50980'>ones</span> <span m='51280'>that</span> <span
  m='51325'>is</span> <span m='51370'>acceptable,</span> <span
  m='52200'>based</span> <span m='52510'>on</span> <span m='52630'>number</span>
  <span m='52870'>one,</span> <span m='53450'>and</span> <span
  m='53610'>then</span> <span m='53780'>find</span> <span m='54110'>the</span>
  <span m='54180'>potential</span> <span m='54580'>function.</span> <span
  m='55990'>And</span> <span m='56160'>then</span> <span m='56320'>the</span>
  <span m='56420'>third</span> <span m='56740'>part</span> <span
  m='57420'>says</span> <span m='58720'>that</span> <span m='59050'>you</span>
  <span m='59190'>should</span> <span m='59340'>explain</span> <span
  m='59880'>why</span> <span m='60130'>F</span> <span m='60420'>dot</span> <span
  m='60550'>dr</span> <span m='60880'>is</span> <span m='60960'>exact,</span>
  <span m='61790'>and</span> <span m='61940'>this</span> <span
  m='62050'>is</span> <span m='62150'>obviously</span> <span
  m='62750'>for</span> <span m='62870'>the</span> <span
  m='63210'>b-values</span> <span m='63530'>determined</span> <span
  m='63930'>from</span> <span m='64170'>one.</span> </p><p><span
  m='64990'>So</span> <span m='65710'>the</span> <span m='65890'>second</span>
  <span m='66370'>and</span> <span m='66510'>third</span> <span
  m='66820'>part</span> <span m='67400'>are</span> <span m='67650'>once</span>
  <span m='67940'>you</span> <span m='68080'>know</span> <span
  m='68240'>the</span> <span m='68360'>b-values.</span> <span
  m='69100'>And</span> <span m='69230'>you're</span> <span m='69340'>only</span>
  <span m='69570'>going</span> <span m='69780'>to</span> <span
  m='69870'>use</span> <span m='70090'>those</span> <span
  m='70310'>b-values</span> <span m='70860'>that</span> <span
  m='71000'>make</span> <span m='71160'>F</span> <span
  m='71330'>conservative,</span> <span m='72300'>because</span> <span
  m='72610'>that's</span> <span m='72880'>the</span> <span
  m='73120'>place</span> <span m='73410'>where</span> <span m='73530'>we</span>
  <span m='73640'>can</span> <span m='73770'>talk</span> <span
  m='73970'>about</span> <span m='74250'>finding</span> <span m='74600'>a</span>
  <span m='74660'>potential</span> <span m='75040'>function,</span> <span
  m='75760'>and</span> <span m='75990'>that's</span> <span
  m='76200'>where</span> <span m='76400'>we</span> <span m='76550'>can</span>
  <span m='76670'>talk</span> <span m='76880'>about</span> <span
  m='77170'>F</span> <span m='77320'>dot</span> <span m='77530'>dr</span> <span
  m='77760'>being</span> <span m='77980'>exact,</span> <span
  m='78540'>are</span> <span m='78650'>exactly</span> <span
  m='79100'>those</span> <span m='79370'>values.</span> <span
  m='80560'>OK.</span> <span m='81250'>So</span> <span m='81760'>why</span>
  <span m='81960'>don't</span> <span m='82160'>you</span> <span
  m='82330'>pause</span> <span m='82560'>the</span> <span
  m='82790'>video,</span> <span m='82970'>work</span> <span m='83190'>on</span>
  <span m='83310'>these</span> <span m='83420'>three</span> <span
  m='83650'>problems,</span> <span m='84120'>and</span> <span
  m='84210'>then</span> <span m='84330'>when</span> <span
  m='84460'>you're</span> <span m='84560'>feeling</span> <span
  m='84870'>good</span> <span m='85040'>about</span> <span
  m='85430'>them,</span> <span m='86070'>bring</span> <span m='86270'>the</span>
  <span m='86340'>video</span> <span m='86540'>back</span> <span
  m='86770'>up,</span> <span m='87012'>I'll</span> <span m='87085'>show</span>
  <span m='87157'>you</span> <span m='87230'>what</span> <span
  m='87400'>I</span> <span m='87490'>did.</span> </p><p><span
  m='96300'>OK,</span> <span m='96550'>welcome</span> <span
  m='96820'>back.</span> <span m='97560'>Again,</span> <span
  m='98160'>we're</span> <span m='98480'>interested</span> <span
  m='98860'>in</span> <span m='98980'>doing</span> <span m='99250'>three</span>
  <span m='99550'>things</span> <span m='99970'>with</span> <span
  m='100160'>this</span> <span m='100530'>vector</span> <span
  m='100820'>field.</span> <span m='101210'>The</span> <span
  m='101350'>first</span> <span m='101670'>thing</span> <span
  m='101830'>we</span> <span m='101910'>want</span> <span m='102030'>to</span>
  <span m='102150'>do</span> <span m='102710'>is</span> <span
  m='102950'>to</span> <span m='103120'>find</span> <span m='103290'>the</span>
  <span m='103453'>values</span> <span m='103616'>of</span> <span
  m='103780'>b</span> <span m='103960'>that</span> <span m='104100'>make</span>
  <span m='104280'>this</span> <span m='104370'>vector</span> <span
  m='104680'>field</span> <span m='104920'>conservative.</span> <span
  m='105880'>So</span> <span m='106050'>I</span> <span m='106170'>will</span>
  <span m='106360'>start</span> <span m='106800'>with</span> <span
  m='106970'>that</span> <span m='107180'>part.</span> </p><p><span
  m='107920'>And</span> <span m='108430'>as</span> <span m='108650'>we</span>
  <span m='108770'>know</span> <span m='109070'>from</span> <span
  m='109290'>the</span> <span m='109380'>lecture,</span> <span
  m='109820'>the</span> <span m='109940'>thing</span> <span m='110170'>I</span>
  <span m='110270'>ultimately</span> <span m='110790'>need</span> <span
  m='110980'>to</span> <span m='111090'>do</span> <span m='111320'>is</span>
  <span m='111430'>I</span> <span m='111490'>need</span> <span
  m='111660'>to</span> <span m='111740'>find</span> <span m='111950'>the</span>
  <span m='112020'>curl</span> <span m='112330'>of</span> <span
  m='112420'>F.</span> <span m='113470'>OK,</span> <span m='113750'>so</span>
  <span m='113880'>the</span> <span m='113960'>curl</span> <span
  m='114090'>of</span> <span m='114350'>F</span> <span m='114530'>is</span>
  <span m='114650'>going</span> <span m='114840'>to</span> <span
  m='114910'>measure</span> <span m='115160'>how</span> <span
  m='115400'>far</span> <span m='115660'>F</span> <span m='115880'>is</span>
  <span m='116180'>from</span> <span m='116390'>being</span> <span
  m='116590'>conservative.</span> <span m='117190'>So</span> <span
  m='117335'>if</span> <span m='117480'>the</span> <span m='117560'>curl</span>
  <span m='117790'>of</span> <span m='117873'>F</span> <span
  m='117956'>is</span> <span m='118040'>0,</span> <span m='119020'>I'm</span>
  <span m='119170'>going</span> <span m='119380'>to</span> <span
  m='119450'>have</span> <span m='120160'>F</span> <span m='120420'>being</span>
  <span m='120580'>conservative.</span> <span m='121190'>So</span> <span
  m='121290'>that's</span> <span m='121480'>really</span> <span
  m='122350'>what</span> <span m='122560'>I'm</span> <span
  m='122970'>interested</span> <span m='123370'>in</span> <span
  m='123450'>doing</span> <span m='123700'>first.</span> </p><p><span
  m='124560'>So</span> <span m='124650'>I'm</span> <span
  m='124740'>actually</span> <span m='125030'>just</span> <span m='125200'>going
  to</span> <span m='125370'>rewrite</span> <span m='128410'>what</span> <span
  m='128640'>the</span> <span m='128710'>curl</span> <span m='129010'>of</span>
  <span m='129165'>F</span> <span m='129320'>actually</span> <span
  m='129770'>is.</span> <span m='130570'>So</span> <span m='130840'>I'm</span>
  <span m='131040'>going</span> <span m='131200'>to</span> <span
  m='131280'>let</span> <span m='131520'>F--</span> <span m='131985'>I'm</span>
  <span m='132450'>going</span> <span m='132750'>to</span> <span
  m='132970'>denote</span> <span m='133510'>in</span> <span
  m='133630'>our</span> <span m='133750'>usual</span> <span
  m='134210'>way</span> <span m='134470'>by</span> <span m='134640'>P,</span>
  <span m='134970'>Q,</span> <span m='135310'>R.</span> <span
  m='136620'>And</span> <span m='137670'>in</span> <span m='137780'>this</span>
  <span m='138010'>case,</span> <span m='139410'>that's</span> <span
  m='139630'>specifically</span> <span m='140260'>y</span> <span
  m='141010'>comma</span> <span m='141960'>x</span> <span m='142240'>plus</span>
  <span m='142520'>b*y*z</span> <span m='145030'>comma</span> <span
  m='146310'>y</span> <span m='146710'>squared</span> <span
  m='146850'>plus</span> <span m='147130'>1.</span> <span m='149600'>OK,</span>
  <span m='149860'>that's</span> <span m='150150'>my</span> <span
  m='150310'>P,</span> <span m='150550'>Q,</span> <span m='150720'>R.</span>
  <span m='150920'>So</span> <span m='151090'>P</span> <span
  m='151280'>is</span> <span m='151440'>y,</span> <span m='151810'>Q</span>
  <span m='151980'>is</span> <span m='152180'>x</span> <span
  m='152260'>plus</span> <span m='152630'>b*y*z,</span> <span
  m='153670'>and</span> <span m='153890'>R</span> <span m='154310'>is</span>
  <span m='154720'>y</span> <span m='154940'>squared</span> <span
  m='155180'>plus</span> <span m='155430'>1.</span> <span m='156160'>And</span>
  <span m='156390'>now</span> <span m='156500'>the</span> <span
  m='156630'>curl</span> <span m='157050'>of</span> <span m='157170'>F--</span>
  <span m='163250'>which</span> <span m='163480'>was</span> <span
  m='164470'>found</span> <span m='164880'>in</span> <span m='165020'>the</span>
  <span m='165120'>lecture,</span> <span m='165580'>so</span> <span
  m='165710'>I'm</span> <span m='165780'>not</span> <span
  m='165940'>going</span> <span m='166110'>to</span> <span
  m='166560'>show</span> <span m='166780'>you</span> <span
  m='166900'>again</span> <span m='167220'>how</span> <span m='167460'>to</span>
  <span m='167540'>find</span> <span m='167900'>it,</span> <span
  m='168020'>I'm</span> <span m='168120'>just</span> <span
  m='168290'>going</span> <span m='168365'>to</span> <span
  m='168440'>write</span> <span m='168630'>the</span> <span
  m='168710'>formula</span> <span m='169130'>for</span> <span
  m='169370'>it--</span> <span m='169780'>is</span> <span
  m='169950'>exactly</span> <span m='170410'>the</span> <span
  m='170510'>following</span> <span m='171280'>vector.</span> </p><p><span
  m='172880'>It's</span> <span m='173100'>the</span> <span
  m='173200'>derivative</span> <span m='173780'>of</span> <span
  m='173880'>the</span> <span m='173970'>R-th</span> <span
  m='174240'>component</span> <span m='174710'>with</span> <span
  m='174830'>respect</span> <span m='175170'>to</span> <span
  m='175270'>y,</span> <span m='176220'>minus</span> <span m='176580'>the</span>
  <span m='176650'>Q-th</span> <span m='176870'>component</span> <span
  m='177135'>with</span> <span m='177400'>respect</span> <span
  m='177635'>to</span> <span m='177870'>z.</span> <span m='178490'>That's</span>
  <span m='178710'>the</span> <span m='178860'>i-value.</span> <span
  m='180610'>The</span> <span m='181020'>j-value</span> <span
  m='182490'>is</span> <span m='183310'>P</span> <span m='183650'>sub</span>
  <span m='183730'>z</span> <span m='184150'>minus</span> <span
  m='185090'>R</span> <span m='185450'>sub</span> <span m='185630'>x,</span>
  <span m='187600'>j.</span> <span m='188650'>The</span> <span
  m='188770'>k-th</span> <span m='189150'>value</span> <span
  m='189660'>is</span> <span m='190710'>Q</span> <span m='190890'>sub</span>
  <span m='191060'>x</span> <span m='191870'>minus</span> <span
  m='192280'>P</span> <span m='192600'>sub</span> <span m='192700'>y,</span>
  <span m='194910'>k.</span> <span m='195990'>OK,</span> <span
  m='196200'>so</span> <span m='196350'>there</span> <span m='196490'>are</span>
  <span m='196550'>three</span> <span m='196790'>components</span> <span
  m='197300'>here.</span> <span m='197930'>And</span> <span
  m='198120'>let's</span> <span m='198440'>just</span> <span
  m='199520'>start</span> <span m='199970'>figuring</span> <span
  m='200340'>out</span> <span m='200470'>what</span> <span
  m='200560'>these</span> <span m='200720'>values</span> <span
  m='201100'>are,</span> <span m='201410'>and</span> <span
  m='201520'>then</span> <span m='201660'>we'll</span> <span
  m='201820'>see</span> <span m='202630'>what</span> <span
  m='202950'>kind</span> <span m='203100'>of</span> <span
  m='203160'>restrictions</span> <span m='203720'>we</span> <span
  m='203830'>have</span> <span m='204050'>on</span> <span m='204260'>b.</span>
  </p><p><span m='205090'>So</span> <span m='205330'>let's</span> <span
  m='205470'>start</span> <span m='205650'>doing</span> <span
  m='205810'>this.</span> <span m='205940'>So</span> <span
  m='206030'>again,</span> <span m='206300'>this</span> <span
  m='206500'>is</span> <span m='206670'>P,</span> <span m='207550'>this</span>
  <span m='207760'>is</span> <span m='207890'>Q,</span> <span
  m='208160'>and</span> <span m='208300'>this</span> <span m='208420'>is</span>
  <span m='208540'>R.</span> <span m='209480'>So</span> <span
  m='209890'>R</span> <span m='210220'>sub</span> <span m='210480'>y</span>
  <span m='210900'>is</span> <span m='211030'>the</span> <span
  m='211120'>derivative</span> <span m='211480'>of</span> <span
  m='211730'>this</span> <span m='211875'>component</span> <span
  m='212020'>with</span> <span m='212160'>respect</span> <span
  m='212450'>to</span> <span m='212540'>y.</span> <span m='213390'>That's</span>
  <span m='213620'>just</span> <span m='213860'>2y.</span> <span
  m='216230'>Q</span> <span m='216570'>sub</span> <span m='216830'>z</span>
  <span m='217170'>is</span> <span m='217310'>the</span> <span
  m='217400'>derivative</span> <span m='217660'>of</span> <span
  m='217920'>this</span> <span m='218160'>with</span> <span
  m='218300'>respect</span> <span m='218660'>to</span> <span
  m='218760'>z.</span> <span m='219320'>Well,</span> <span
  m='219580'>this</span> <span m='219720'>is</span> <span m='219840'>0,</span>
  <span m='220230'>and</span> <span m='220440'>this</span> <span
  m='220590'>is</span> <span m='220710'>b*y.</span> <span m='224560'>OK.</span>
  </p><p><span m='225190'>Let's</span> <span m='225390'>look</span> <span
  m='225510'>at</span> <span m='225570'>the</span> <span m='225660'>rest</span>
  <span m='226190'>first.</span> <span m='227410'>P</span> <span
  m='227770'>sub</span> <span m='228020'>z:</span> <span m='228270'>the</span>
  <span m='228385'>derivative</span> <span m='228500'>of</span> <span
  m='228660'>this</span> <span m='228840'>with</span> <span
  m='228990'>respect</span> <span m='229150'>to</span> <span m='229310'>z</span>
  <span m='229560'>is</span> <span m='229670'>0.</span> <span
  m='231535'>The</span> <span m='231990'>derivative</span> <span
  m='232450'>of</span> <span m='232640'>R</span> <span m='235030'>with</span>
  <span m='235140'>respect</span> <span m='235430'>to</span> <span
  m='235557'>x</span> <span m='235940'>is</span> <span m='236110'>0.</span>
  <span m='236782'>So</span> <span m='237120'>that</span> <span
  m='237420'>doesn't</span> <span m='237720'>have</span> <span
  m='237870'>any</span> <span m='238040'>b's</span> <span m='238380'>in</span>
  <span m='238510'>it</span> <span m='238640'>at</span> <span
  m='238770'>all.</span> <span m='239720'>And</span> <span
  m='239870'>then</span> <span m='240010'>Q</span> <span m='240220'>sub</span>
  <span m='240400'>x</span> <span m='240780'>minus</span> <span
  m='240930'>P</span> <span m='241160'>sub</span> <span m='241240'>y.</span>
  <span m='241580'>Q</span> <span m='241720'>is</span> <span
  m='241860'>the</span> <span m='241930'>middle</span> <span
  m='242140'>one.</span> <span m='242440'>Q</span> <span m='242650'>sub</span>
  <span m='242720'>x</span> <span m='243100'>is</span> <span
  m='243480'>1.</span> <span m='247240'>P</span> <span m='247400'>is</span>
  <span m='247540'>the</span> <span m='247620'>first</span> <span
  m='247860'>one.</span> <span m='248050'>P</span> <span m='248270'>sub</span>
  <span m='248350'>y</span> <span m='248525'>is</span> <span
  m='248700'>1.</span> <span m='252130'>OK,</span> <span m='252260'>so</span>
  <span m='252410'>what</span> <span m='252510'>do</span> <span
  m='252570'>we</span> <span m='252660'>get</span> <span m='252840'>here?</span>
  <span m='253135'>I</span> <span m='253430'>should</span> <span
  m='253530'>have</span> <span m='253630'>written</span> <span
  m='253820'>equals</span> <span m='254060'>there,</span> <span
  m='254300'>maybe.</span> </p><p><span m='256000'>OK,</span> <span
  m='256280'>so</span> <span m='256430'>the</span> <span m='256570'>j-th</span>
  <span m='256950'>component</span> <span m='257440'>is</span> <span
  m='257560'>0.</span> <span m='258970'>And</span> <span m='259150'>the</span>
  <span m='259210'>k-th</span> <span m='259500'>component</span> <span
  m='259960'>is</span> <span m='260040'>0.</span> <span m='260910'>So</span>
  <span m='261025'>all</span> <span m='261140'>I'm</span> <span
  m='261460'>left</span> <span m='261750'>with</span> <span m='261970'>is</span>
  <span m='263250'>2y</span> <span m='264290'>minus</span> <span
  m='264720'>b*y,</span> <span m='266660'>i.</span> <span m='268140'>And</span>
  <span m='268340'>if</span> <span m='268630'>I</span> <span
  m='268740'>want</span> <span m='268970'>F</span> <span m='269090'>to</span>
  <span m='269180'>be</span> <span m='269300'>conservative,</span> <span
  m='269960'>this</span> <span m='270160'>quantity</span> <span
  m='270590'>has</span> <span m='270830'>to</span> <span m='270920'>be</span>
  <span m='271100'>0,</span> <span m='271340'>so</span> <span
  m='271660'>I</span> <span m='271720'>see</span> <span
  m='271880'>there's</span> <span m='272080'>only</span> <span
  m='272350'>one</span> <span m='272580'>b-value</span> <span
  m='273070'>that's</span> <span m='273270'>going</span> <span
  m='273360'>to</span> <span m='273450'>work,</span> <span m='274070'>and</span>
  <span m='274240'>that</span> <span m='274440'>is</span> <span
  m='275100'>b</span> <span m='275640'>is</span> <span m='275770'>equal</span>
  <span m='276030'>to</span> <span m='276140'>2.</span> <span
  m='280190'>OK?</span> </p><p><span m='280820'>So</span> <span
  m='281100'>I</span> <span m='281280'>know</span> <span m='281710'>in</span>
  <span m='282140'>part</span> <span m='282470'>one,</span> <span
  m='282800'>the</span> <span m='282920'>answer</span> <span
  m='283210'>to</span> <span m='283260'>the</span> <span
  m='283310'>question</span> <span m='283740'>is</span> <span
  m='283930'>just</span> <span m='284280'>for</span> <span m='284440'>b</span>
  <span m='284730'>equals</span> <span m='285120'>2,</span> <span
  m='285870'>is</span> <span m='286300'>F</span> <span
  m='286640'>conservative.</span> <span m='287280'>That</span> <span
  m='287775'>was,</span> <span m='288270'>maybe,</span> <span
  m='288530'>poorly</span> <span m='288850'>phrased.</span> <span
  m='288960'>F</span> <span m='289190'>is</span> <span
  m='289550'>conservative</span> <span m='290090'>only</span> <span
  m='290390'>when</span> <span m='290580'>b</span> <span m='290760'>is</span>
  <span m='290940'>2.</span> <span m='291830'>OK.</span> <span
  m='292080'>And</span> <span m='292190'>that's</span> <span
  m='292360'>because</span> <span m='292620'>the</span> <span
  m='292700'>curl</span> <span m='292830'>of</span> <span m='292960'>F</span>
  <span m='293070'>is</span> <span m='293180'>0</span> <span
  m='293890'>only</span> <span m='294180'>when</span> <span m='294330'>b</span>
  <span m='294450'>is</span> <span m='294610'>2.</span> <span
  m='295960'>All</span> <span m='296135'>right.</span> <span
  m='296310'>So</span> <span m='296440'>now</span> <span m='296670'>we</span>
  <span m='296750'>can</span> <span m='296890'>move</span> <span
  m='297110'>on</span> <span m='297230'>to</span> <span m='297300'>the</span>
  <span m='297390'>second</span> <span m='297710'>part.</span> </p><p><span
  m='298300'>And</span> <span m='298520'>the</span> <span
  m='298590'>second</span> <span m='298940'>part</span> <span
  m='299180'>is</span> <span m='299330'>for</span> <span m='299660'>this</span>
  <span m='299980'>particular</span> <span m='300500'>value</span> <span
  m='300830'>of</span> <span m='300900'>b,</span> <span m='301230'>find</span>
  <span m='301510'>a</span> <span m='301540'>potential</span> <span
  m='302000'>function.</span> <span m='302980'>And</span> <span
  m='303270'>our</span> <span m='303380'>strategy</span> <span
  m='303970'>for</span> <span m='304090'>that</span> <span m='304320'>is</span>
  <span m='304420'>going</span> <span m='304610'>to</span> <span
  m='304670'>be</span> <span m='304780'>one</span> <span m='304990'>of</span>
  <span m='305060'>the</span> <span m='305120'>methods</span> <span
  m='305500'>from</span> <span m='306270'>lecture.</span> <span
  m='306720'>And</span> <span m='306840'>it's</span> <span
  m='306940'>going</span> <span m='307120'>to</span> <span m='307180'>be</span>
  <span m='307240'>the</span> <span m='307320'>method</span> <span
  m='307600'>from</span> <span m='307700'>lecture</span> <span
  m='308050'>that</span> <span m='308230'>in</span> <span
  m='308370'>three</span> <span m='308570'>dimensions</span> <span
  m='309050'>is</span> <span m='309160'>much</span> <span
  m='309430'>easier</span> <span m='310350'>than</span> <span
  m='311370'>the</span> <span m='311470'>other.</span> <span
  m='311820'>So</span> <span m='312310'>the</span> <span m='312490'>one</span>
  <span m='312730'>method</span> <span m='312900'>in</span> <span
  m='313000'>lecture</span> <span m='313390'>that's</span> <span
  m='313570'>easy</span> <span m='313920'>in</span> <span
  m='314040'>three</span> <span m='314240'>dimensions</span> <span
  m='315140'>is</span> <span m='315430'>where</span> <span m='315560'>you</span>
  <span m='315690'>start</span> <span m='316100'>at</span> <span
  m='316280'>the</span> <span m='316370'>origin,</span> <span
  m='317220'>and</span> <span m='317460'>you</span> <span
  m='317600'>integrate</span> <span m='317870'>F</span> <span
  m='318140'>dot</span> <span m='318540'>dr</span> <span m='319090'>along</span>
  <span m='319560'>a</span> <span m='319800'>curve</span> <span
  m='320520'>that's</span> <span m='320680'>made</span> <span
  m='320890'>up</span> <span m='320930'>of</span> <span m='321090'>line</span>
  <span m='321350'>segments.</span> <span m='321950'>So</span> <span
  m='322110'>this</span> <span m='322250'>strategy</span> <span
  m='323020'>I've</span> <span m='323290'>done</span> <span
  m='323510'>before</span> <span m='324210'>in</span> <span
  m='324440'>two</span> <span m='324610'>dimensions,</span> <span
  m='325130'>in</span> <span m='325290'>one</span> <span m='325450'>of</span>
  <span m='325520'>the</span> <span m='325590'>problems</span> <span
  m='326010'>in</span> <span m='326120'>recitation.</span> <span
  m='327170'>Now,</span> <span m='327350'>we'll</span> <span
  m='327500'>see</span> <span m='327680'>it</span> <span m='327760'>in</span>
  <span m='327870'>three</span> <span m='328050'>dimensions.</span> </p><p><span
  m='329070'>So</span> <span m='329260'>what</span> <span
  m='329440'>we're</span> <span m='329540'>going</span> <span
  m='329730'>to</span> <span m='329840'>do</span> <span m='330230'>is</span>
  <span m='330370'>we're</span> <span m='330460'>going</span> <span
  m='330540'>to</span> <span m='330620'>integrate</span> <span
  m='331110'>along</span> <span m='331360'>a</span> <span
  m='331420'>certain</span> <span m='331740'>curve</span> <span
  m='333290'>F</span> <span m='333650'>dot</span> <span m='333780'>dr.</span>
  <span m='334930'>And</span> <span m='335130'>this</span> <span
  m='335390'>curve</span> <span m='336080'>is</span> <span
  m='336260'>going</span> <span m='336540'>to</span> <span m='336620'>go</span>
  <span m='336870'>from</span> <span m='337240'>the</span> <span
  m='337360'>origin</span> <span m='338400'>to</span> <span
  m='338630'>(x_1,</span> <span m='339500'>y_1,</span> <span
  m='340510'>z_1).</span> <span m='341500'>And</span> <span
  m='341690'>that</span> <span m='341850'>will</span> <span
  m='341990'>give</span> <span m='342240'>us</span> <span m='346530'>f</span>
  <span m='346740'>of</span> <span m='346850'>(x_1,</span> <span
  m='347870'>y_1,</span> <span m='348850'>z_1).</span> <span
  m='350210'>OK.</span> <span m='350450'>So</span> <span m='350570'>this</span>
  <span m='350750'>is</span> <span m='350890'>a</span> <span
  m='350960'>sort</span> <span m='351160'>of</span> <span
  m='351270'>general</span> <span m='351730'>strategy,</span> <span
  m='352600'>and</span> <span m='352860'>now</span> <span
  m='352970'>we'll</span> <span m='353120'>talk</span> <span
  m='353360'>about</span> <span m='353590'>it</span> <span
  m='353690'>specifically.</span> <span m='354880'>This</span> <span
  m='355010'>will</span> <span m='355110'>actually</span> <span
  m='355520'>be</span> <span m='355700'>f</span> <span m='355890'>of</span>
  <span m='356190'>(x_1,</span> <span m='356370'>y_1,</span> <span
  m='356780'>z_1)</span> <span m='357090'>plus</span> <span m='357290'>a</span>
  <span m='357360'>constant,</span> <span m='358090'>but</span> <span
  m='358310'>we'll</span> <span m='358410'>deal</span> <span
  m='358600'>with</span> <span m='358700'>that</span> <span
  m='358870'>part</span> <span m='359260'>right</span> <span
  m='359450'>at</span> <span m='359530'>the</span> <span m='359630'>end.</span>
  </p><p><span m='360470'>OK,</span> <span m='360710'>so</span> <span
  m='360870'>C</span> <span m='361290'>in</span> <span m='361420'>this</span>
  <span m='361620'>case</span> <span m='361910'>is</span> <span
  m='362000'>going</span> <span m='362100'>to</span> <span m='362200'>be</span>
  <span m='362260'>made</span> <span m='362490'>up</span> <span
  m='362520'>of</span> <span m='362690'>three</span> <span
  m='363020'>curves.</span> <span m='363400'>And</span> <span
  m='363500'>I'm</span> <span m='363580'>going</span> <span m='363800'>to</span>
  <span m='363910'>draw</span> <span m='364310'>them,</span> <span
  m='365600'>in</span> <span m='365740'>a</span> <span
  m='365780'>picture,</span> <span m='366970'>and</span> <span
  m='367180'>then</span> <span m='367320'>we're</span> <span
  m='367410'>going</span> <span m='367630'>to</span> <span
  m='367730'>describe</span> <span m='368210'>them.</span> <span
  m='369720'>So</span> <span m='370390'>I'm</span> <span m='370540'>going</span>
  <span m='370625'>to</span> <span m='370710'>start</span> <span
  m='370915'>at</span> <span m='371120'>(0,</span> <span m='371460'>0,</span>
  <span m='371730'>0).</span> <span m='372380'>My</span> <span
  m='372550'>first</span> <span m='372950'>curve</span> <span
  m='374750'>will</span> <span m='374880'>go</span> <span m='375100'>out</span>
  <span m='375410'>to</span> <span m='376860'>x_1</span> <span
  m='377600'>comma</span> <span m='378010'>0,</span> <span m='378370'>0,</span>
  <span m='380310'>and</span> <span m='380500'>that's</span> <span
  m='380700'>going</span> <span m='380860'>to</span> <span m='380920'>be</span>
  <span m='380980'>the</span> <span m='381070'>curve</span> <span
  m='381330'>C_1.</span> <span m='382280'>Oops.</span> <span m='383060'>I</span>
  <span m='383140'>want</span> <span m='383300'>that</span> <span
  m='383420'>to</span> <span m='383520'>go</span> <span m='383670'>the</span>
  <span m='383790'>other</span> <span m='384000'>way.</span> <span
  m='384560'>That</span> <span m='384780'>way.</span> </p><p><span
  m='385590'>OK,</span> <span m='385810'>C_1</span> <span m='386010'>is</span>
  <span m='386170'>going</span> <span m='386340'>to</span> <span
  m='386400'>go</span> <span m='386520'>from</span> <span m='386720'>the</span>
  <span m='386810'>origin</span> <span m='387650'>to</span> <span
  m='388090'>x_1</span> <span m='388280'>comma</span> <span m='388530'>0,</span>
  <span m='388710'>0.</span> <span m='389300'>So</span> <span
  m='389580'>the</span> <span m='390410'>y-</span> <span m='390790'>and</span>
  <span m='390940'>z-values</span> <span m='391480'>are</span> <span
  m='391540'>going</span> <span m='391680'>to</span> <span m='391750'>be</span>
  <span m='391860'>0</span> <span m='392250'>and</span> <span
  m='392400'>0</span> <span m='392590'>all</span> <span m='392840'>the</span>
  <span m='392920'>way</span> <span m='393030'>along,</span> <span
  m='393370'>and</span> <span m='393460'>the</span> <span
  m='393530'>x-value</span> <span m='393775'>is</span> <span
  m='394020'>going</span> <span m='394210'>to</span> <span
  m='394290'>change.</span> </p><p><span m='395050'>My</span> <span
  m='395200'>next</span> <span m='395490'>one--</span> <span
  m='395660'>I'm</span> <span m='395730'>going</span> <span m='395890'>to</span>
  <span m='396050'>make</span> <span m='396250'>it</span> <span
  m='396350'>long</span> <span m='396640'>so</span> <span m='396810'>I</span>
  <span m='396900'>can</span> <span m='397060'>have</span> <span
  m='397190'>enough</span> <span m='397390'>room</span> <span
  m='397600'>to</span> <span m='397710'>write--</span> <span
  m='399550'>that's</span> <span m='399770'>going</span> <span
  m='399930'>to</span> <span m='400000'>be</span> <span m='400080'>my</span>
  <span m='400270'>C_2.</span> <span m='401900'>And</span> <span
  m='402080'>that's</span> <span m='402320'>going</span> <span
  m='402550'>to</span> <span m='402660'>be</span> <span m='405275'>x_1</span>
  <span m='406400'>comma</span> <span m='406850'>y_1</span> <span
  m='407720'>comma</span> <span m='408070'>0.</span> <span m='409180'>So</span>
  <span m='409420'>in</span> <span m='409540'>the</span> <span
  m='409640'>end,</span> <span m='409870'>what</span> <span
  m='410000'>I've</span> <span m='410160'>done</span> <span m='410470'>is</span>
  <span m='410570'>I've</span> <span m='410720'>taken</span> <span
  m='411000'>my</span> <span m='411300'>x-value,</span> <span
  m='411890'>I've</span> <span m='412020'>kept</span> <span m='412260'>it</span>
  <span m='412360'>fixed</span> <span m='412740'>all</span> <span
  m='412930'>the</span> <span m='413000'>way</span> <span
  m='413120'>along</span> <span m='413390'>here,</span> <span
  m='413580'>but</span> <span m='413720'>I'm</span> <span
  m='413830'>varying</span> <span m='414120'>the</span> <span
  m='414280'>y-value</span> <span m='414910'>out</span> <span
  m='415090'>to</span> <span m='415180'>y_1.</span> </p><p><span
  m='416210'>And</span> <span m='416390'>then</span> <span m='416500'>the</span>
  <span m='416590'>last</span> <span m='416920'>one</span> <span
  m='417050'>is</span> <span m='417140'>going</span> <span m='417260'>to</span>
  <span m='417330'>go</span> <span m='417430'>straight</span> <span
  m='417810'>up.</span> <span m='419730'>Right</span> <span
  m='419990'>there.</span> <span m='421920'>And</span> <span
  m='422070'>so</span> <span m='422220'>it's</span> <span
  m='422340'>going</span> <span m='422580'>to</span> <span m='422680'>be</span>
  <span m='423130'>with</span> <span m='423410'>the</span> <span
  m='423780'>x-value</span> <span m='424100'>and</span> <span
  m='424210'>y-value</span> <span m='424660'>fixed.</span> <span
  m='425500'>And</span> <span m='425650'>at</span> <span m='425730'>the</span>
  <span m='425830'>end,</span> <span m='426150'>I</span> <span
  m='426300'>will</span> <span m='426420'>be</span> <span m='426520'>at</span>
  <span m='426620'>x_1,</span> <span m='427620'>y_1,</span> <span
  m='428650'>z_1.</span> <span m='430020'>And</span> <span
  m='430160'>this</span> <span m='430300'>is</span> <span m='430430'>C3.</span>
  <span m='431110'>So</span> <span m='431463'>those</span> <span
  m='431816'>are</span> <span m='432170'>my</span> <span m='432310'>three</span>
  <span m='432490'>curves--</span> <span m='433230'>And</span> <span
  m='433330'>this</span> <span m='433480'>one,</span> <span
  m='433790'>I'm</span> <span m='433893'>going</span> <span m='433996'>to</span>
  <span m='434100'>move</span> <span m='434295'>in</span> <span
  m='434490'>this</span> <span m='434640'>direction.</span> <span
  m='435590'>Those</span> <span m='435770'>are</span> <span m='435830'>my</span>
  <span m='435960'>three</span> <span m='436180'>curves.</span> </p><p><span
  m='437000'>And</span> <span m='437240'>I</span> <span m='437330'>want</span>
  <span m='437540'>to</span> <span m='437610'>point</span> <span
  m='437970'>out</span> <span m='438850'>that</span> <span m='439070'>in</span>
  <span m='439160'>order</span> <span m='439450'>to</span> <span
  m='439710'>understand</span> <span m='440360'>how</span> <span
  m='440450'>to</span> <span m='440550'>simplify</span> <span
  m='441070'>this</span> <span m='441260'>problem,</span> <span
  m='442190'>I'm</span> <span m='442350'>going</span> <span m='442430'>to</span>
  <span m='442510'>have</span> <span m='442660'>to</span> <span
  m='442850'>remind</span> <span m='443170'>myself</span> <span
  m='443540'>what</span> <span m='443710'>F</span> <span m='443910'>dot</span>
  <span m='444130'>dr</span> <span m='444490'>is.</span> <span
  m='445210'>OK.</span> <span m='445530'>So</span> <span m='446530'>F</span>
  <span m='446850'>dot</span> <span m='446910'>dr</span> <span
  m='450370'>is</span> <span m='450550'>P*dx</span> <span m='452350'>plus</span>
  <span m='452640'>Q*dy</span> <span m='454740'>plus</span> <span
  m='455960'>R*dz.</span> <span m='457310'>Right?</span> <span
  m='458120'>That's</span> <span m='458320'>what</span> <span
  m='458440'>F</span> <span m='458480'>dot</span> <span m='458710'>dr</span>
  <span m='458790'>is.</span> </p><p><span m='459550'>And</span> <span
  m='459760'>so</span> <span m='459930'>what</span> <span m='460110'>I'm</span>
  <span m='460260'>interested</span> <span m='460720'>in,</span> <span
  m='460940'>I'm</span> <span m='461100'>going</span> <span m='461185'>to</span>
  <span m='461270'>integrate</span> <span m='461760'>each</span> <span
  m='462010'>of</span> <span m='462110'>these</span> <span
  m='462390'>things</span> <span m='462670'>along</span> <span
  m='462960'>C_1,</span> <span m='463350'>C_2,</span> <span
  m='463700'>C_3.</span> <span m='464630'>But</span> <span
  m='464880'>let's</span> <span m='465120'>notice</span> <span
  m='465670'>what</span> <span m='465870'>happens</span> <span
  m='466680'>along</span> <span m='467680'>certain</span> <span
  m='468280'>numbers</span> <span m='468700'>of</span> <span
  m='468790'>these</span> <span m='468990'>curves.</span> <span
  m='471500'>If</span> <span m='471910'>we</span> <span m='472020'>come</span>
  <span m='472160'>back</span> <span m='472330'>over</span> <span
  m='472500'>here.</span> </p><p><span m='472660'>On</span> <span
  m='472780'>C_1,</span> <span m='473630'>y</span> <span m='474260'>is</span>
  <span m='474510'>fixed</span> <span m='474970'>and</span> <span
  m='475150'>z</span> <span m='475370'>as</span> <span m='475500'>fixed.</span>
  <span m='476220'>So</span> <span m='476420'>dy</span> <span
  m='476970'>and</span> <span m='477140'>dz</span> <span m='477530'>are</span>
  <span m='477680'>both</span> <span m='477830'>0.</span> <span
  m='478630'>So</span> <span m='478880'>on</span> <span m='479080'>C1,</span>
  <span m='479590'>I</span> <span m='479700'>only</span> <span
  m='479990'>have</span> <span m='480130'>to</span> <span
  m='480230'>integrate</span> <span m='480930'>P.</span> <span
  m='482270'>OK,</span> <span m='482490'>so</span> <span m='482573'>I'm</span>
  <span m='482656'>going</span> <span m='482740'>to</span> <span
  m='482810'>keep</span> <span m='482980'>track</span> <span
  m='483260'>of</span> <span m='483330'>that.</span> </p><p><span
  m='484240'>On</span> <span m='484410'>C_1--</span> <span
  m='485270'>which,</span> <span m='485520'>C_1</span> <span
  m='485920'>is</span> <span m='486050'>parametrized</span> <span
  m='486770'>by</span> <span m='487240'>x,</span> <span m='488340'>0</span>
  <span m='488470'>to</span> <span m='488570'>x--</span> <span
  m='488860'>I</span> <span m='488960'>only</span> <span m='489230'>need</span>
  <span m='489530'>to</span> <span m='490140'>worry</span> <span
  m='490420'>about</span> <span m='490650'>the</span> <span m='490740'>P.</span>
  <span m='491200'>P</span> <span m='491410'>of</span> <span
  m='491470'>x,</span> <span m='491740'>0,</span> <span m='492010'>0,</span>
  <span m='493280'>dx.</span> <span m='494380'>This</span> <span
  m='494600'>is</span> <span m='494710'>my</span> <span m='494890'>C_1</span>
  <span m='495400'>component,</span> <span m='495920'>and</span> <span
  m='496020'>there's</span> <span m='496180'>nothing</span> <span
  m='496560'>else</span> <span m='496890'>there,</span> <span
  m='497200'>because</span> <span m='497540'>these</span> <span
  m='497760'>two</span> <span m='497850'>are</span> <span m='497980'>both</span>
  <span m='498220'>0.</span> <span m='499890'>Right?</span> </p><p><span
  m='500180'>Now</span> <span m='500380'>let's</span> <span
  m='500580'>consider</span> <span m='501920'>what</span> <span
  m='502120'>happens</span> <span m='502480'>on</span> <span
  m='502630'>C_2.</span> <span m='504470'>If</span> <span m='504580'>I</span>
  <span m='504680'>look</span> <span m='504900'>here.</span> <span
  m='505930'>On</span> <span m='506130'>C_2,</span> <span m='506350'>the</span>
  <span m='506570'>x-value</span> <span m='507280'>is</span> <span
  m='507460'>fixed</span> <span m='508150'>and</span> <span
  m='508320'>the</span> <span m='508440'>z-value</span> <span
  m='508900'>is</span> <span m='509030'>fixed.</span> <span m='509400'>x</span>
  <span m='509605'>is</span> <span m='509810'>fixed</span> <span
  m='510030'>at</span> <span m='510100'>x_1</span> <span m='510590'>and</span>
  <span m='510700'>z</span> <span m='510870'>is</span> <span
  m='510990'>fixed</span> <span m='511230'>at</span> <span m='511320'>0.</span>
  <span m='512340'>And</span> <span m='512640'>so</span> <span
  m='513210'>dx</span> <span m='514230'>and</span> <span m='514450'>dz</span>
  <span m='514650'>are</span> <span m='515020'>both</span> <span
  m='515190'>0,</span> <span m='515530'>because</span> <span m='515890'>x</span>
  <span m='516080'>and</span> <span m='516270'>z</span> <span
  m='516345'>are</span> <span m='516420'>not</span> <span
  m='516590'>changing.</span> <span m='517190'>So</span> <span
  m='517360'>there's</span> <span m='517560'>only</span> <span
  m='517810'>a</span> <span m='517870'>dy</span> <span
  m='518300'>component.</span> </p><p><span m='519560'>So</span> <span
  m='520700'>on</span> <span m='521080'>C_2,</span> <span
  m='521630'>which</span> <span m='521800'>is</span> <span
  m='521920'>parametrized</span> <span m='522690'>in</span> <span
  m='522850'>y--</span> <span m='523810'>from</span> <span m='524030'>0</span>
  <span m='524280'>to</span> <span m='524360'>y_1--</span> <span
  m='525120'>I'm</span> <span m='525280'>only</span> <span
  m='525510'>interested</span> <span m='525940'>in</span> <span
  m='526070'>Q</span> <span m='527050'>at</span> <span m='527270'>x_1</span>
  <span m='527850'>comma</span> <span m='528140'>y</span> <span
  m='528560'>comma</span> <span m='529050'>0,</span> <span m='529960'>dy.</span>
  <span m='532300'>Again,</span> <span m='533050'>this</span> <span
  m='533320'>component</span> <span m='533780'>is</span> <span
  m='533900'>0</span> <span m='534360'>on</span> <span m='534660'>C_2</span>
  <span m='535460'>because</span> <span m='536250'>dx</span> <span
  m='536460'>is</span> <span m='536780'>0.</span> <span m='537730'>And</span>
  <span m='538040'>this</span> <span m='538220'>component</span> <span
  m='538600'>is</span> <span m='538800'>0</span> <span m='538930'>on</span>
  <span m='539080'>C_2</span> <span m='539440'>because</span> <span
  m='539680'>dz</span> <span m='539850'>is</span> <span m='540100'>0.</span>
  <span m='540770'>And</span> <span m='541030'>this</span> <span
  m='541210'>component--</span> <span m='541900'>I'm</span> <span
  m='542070'>evaluating</span> <span m='542770'>it--</span> <span
  m='543200'>x</span> <span m='543390'>is</span> <span m='544000'>fixed</span>
  <span m='544220'>at</span> <span m='544300'>x_1,</span> <span
  m='545180'>z</span> <span m='545470'>is</span> <span m='545670'>fixed</span>
  <span m='545890'>at</span> <span m='545975'>0,</span> <span
  m='546440'>and</span> <span m='546540'>the</span> <span m='546630'>y</span>
  <span m='546865'>is</span> <span m='547100'>varying</span> <span
  m='547640'>from</span> <span m='547830'>0</span> <span m='548070'>to</span>
  <span m='548150'>y1.</span> </p><p><span m='549070'>And</span> <span
  m='549350'>then</span> <span m='549460'>there's</span> <span
  m='549640'>one</span> <span m='549920'>more</span> <span
  m='550170'>component,</span> <span m='551050'>and</span> <span
  m='551160'>I'm</span> <span m='551220'>going to</span> <span
  m='551360'>write</span> <span m='551550'>it</span> <span
  m='551660'>below,</span> <span m='552270'>and</span> <span
  m='552470'>then</span> <span m='552640'>we'll</span> <span
  m='552950'>do</span> <span m='553150'>the</span> <span m='553260'>rest</span>
  <span m='553540'>over</span> <span m='553720'>here.</span> <span
  m='554250'>And</span> <span m='554490'>the</span> <span
  m='554570'>third</span> <span m='554790'>component</span> <span
  m='555260'>is</span> <span m='555410'>the</span> <span m='555490'>C_3</span>
  <span m='555930'>component.</span> <span m='556850'>Now,</span> <span
  m='557050'>not</span> <span m='557320'>surprisingly--</span> <span
  m='558540'>if</span> <span m='558700'>I</span> <span m='558780'>come</span>
  <span m='558970'>back</span> <span m='559200'>over</span> <span
  m='559410'>here--</span> <span m='560200'>because</span> <span
  m='560520'>x</span> <span m='560730'>and</span> <span m='560940'>y</span>
  <span m='561110'>are</span> <span m='561280'>fixed</span> <span
  m='561980'>all</span> <span m='562200'>along</span> <span
  m='562490'>the</span> <span m='562560'>C3</span> <span
  m='562890'>component,</span> <span m='563290'>the</span> <span
  m='563380'>only</span> <span m='563650'>thing</span> <span
  m='563800'>that's</span> <span m='563950'>changing</span> <span
  m='564350'>is</span> <span m='564520'>z.</span> <span m='565130'>So</span>
  <span m='565350'>dx</span> <span m='565580'>and</span> <span
  m='565920'>dy</span> <span m='566040'>are</span> <span m='566440'>0,</span>
  <span m='567180'>so</span> <span m='567380'>I'm</span> <span
  m='567510'>only</span> <span m='567800'>worried</span> <span
  m='568050'>about</span> <span m='568250'>the</span> <span m='568340'>dz</span>
  <span m='568520'>part.</span> <span m='569610'>OK.</span> </p><p><span
  m='569840'>So</span> <span m='570070'>again,</span> <span m='570770'>as</span>
  <span m='570980'>happened</span> <span m='571330'>before,</span> <span
  m='572630'>I</span> <span m='572710'>only</span> <span m='572860'>had</span>
  <span m='573020'>P</span> <span m='573290'>in</span> <span
  m='573400'>the</span> <span m='573470'>first</span> <span
  m='573750'>one</span> <span m='573910'>and</span> <span m='573980'>Q</span>
  <span m='574170'>in</span> <span m='574290'>the</span> <span
  m='574360'>second</span> <span m='574640'>one,</span> <span
  m='574810'>and</span> <span m='574860'>now</span> <span m='574910'>I</span>
  <span m='575080'>have</span> <span m='575290'>R,</span> <span
  m='575620'>only,</span> <span m='575940'>in</span> <span m='576040'>the</span>
  <span m='576130'>third</span> <span m='576390'>one.</span> <span
  m='577000'>And</span> <span m='577230'>it's</span> <span
  m='577360'>parametrized</span> <span m='577980'>in</span> <span
  m='578180'>z,</span> <span m='578440'>from</span> <span m='578710'>0</span>
  <span m='578980'>to</span> <span m='579090'>z_1.</span> <span
  m='579840'>That's</span> <span m='580040'>what</span> <span
  m='580180'>z</span> <span m='580370'>varies</span> <span
  m='580700'>over.</span> <span m='581730'>And</span> <span
  m='581870'>it's</span> <span m='581990'>going</span> <span
  m='582180'>to</span> <span m='582240'>be</span> <span m='582350'>R</span>
  <span m='582940'>at</span> <span m='583370'>x_1</span> <span
  m='584100'>comma</span> <span m='584420'>y_1</span> <span
  m='585540'>comma</span> <span m='585880'>z</span> <span m='587190'>dz.</span>
  <span m='588830'>Because</span> <span m='589310'>the</span> <span
  m='589560'>x's</span> <span m='589920'>are</span> <span
  m='590040'>fixed</span> <span m='590530'>at</span> <span
  m='590630'>x_1,</span> <span m='591090'>the</span> <span m='591170'>y</span>
  <span m='591370'>is</span> <span m='591570'>fixed</span> <span
  m='591800'>at</span> <span m='591910'>y_1,</span> <span m='592390'>but</span>
  <span m='592580'>z</span> <span m='592730'>is</span> <span
  m='592880'>varying</span> <span m='593190'>from</span> <span
  m='593350'>0</span> <span m='593610'>to</span> <span m='593700'>z_1.</span>
  <span m='594415'>All</span> <span m='594800'>right.</span> </p><p><span
  m='595020'>So</span> <span m='595140'>I</span> <span m='595220'>have</span>
  <span m='595370'>these</span> <span m='595550'>three</span> <span
  m='595810'>parts,</span> <span m='596660'>and</span> <span
  m='596930'>now</span> <span m='597050'>I</span> <span m='597120'>just</span>
  <span m='597320'>have</span> <span m='597440'>to</span> <span
  m='597540'>fill</span> <span m='597800'>them</span> <span m='597980'>in</span>
  <span m='598480'>with</span> <span m='598890'>the</span> <span
  m='599220'>vector</span> <span m='599590'>field</span> <span
  m='599910'>that</span> <span m='600010'>I</span> <span m='600130'>have.</span>
  <span m='600830'>I</span> <span m='601020'>want</span> <span
  m='601165'>to</span> <span m='601310'>find</span> <span m='601750'>what</span>
  <span m='601950'>P</span> <span m='602240'>is</span> <span
  m='602510'>at</span> <span m='602660'>(x,</span> <span m='602810'>0,</span>
  <span m='603050'>0),</span> <span m='603390'>what</span> <span
  m='603580'>Q</span> <span m='603850'>is</span> <span m='604220'>at</span>
  <span m='604500'>(x_1,</span> <span m='604670'>y_1,</span> <span
  m='605050'>0),</span> <span m='605600'>and</span> <span m='605740'>what</span>
  <span m='605860'>R</span> <span m='606090'>is</span> <span
  m='606300'>at</span> <span m='606600'>(x_1,</span> <span
  m='606770'>y_1,</span> <span m='607290'>z).</span> <span m='607870'>And</span>
  <span m='608050'>then</span> <span m='608190'>integrate.</span> <span
  m='609080'>So</span> <span m='609320'>I</span> <span m='609370'>have</span>
  <span m='609810'>two</span> <span m='610020'>steps</span> <span
  m='610360'>left.</span> <span m='611360'>One</span> <span m='611670'>is</span>
  <span m='611830'>plugging</span> <span m='612180'>in</span> <span
  m='612440'>and</span> <span m='612530'>one</span> <span m='612620'>is</span>
  <span m='612710'>evaluating.</span> <span m='613770'>So</span> <span
  m='614020'>let</span> <span m='614170'>me</span> <span
  m='614270'>remind</span> <span m='614730'>us</span> <span
  m='614890'>what</span> <span m='615120'>P,</span> <span m='615610'>Q,</span>
  <span m='615940'>and</span> <span m='616110'>R</span> <span
  m='616480'>actually</span> <span m='616860'>are,</span> <span
  m='617580'>and</span> <span m='617820'>then</span> <span
  m='617940'>we'll</span> <span m='618040'>see</span> <span
  m='618230'>what</span> <span m='618390'>we</span> <span m='618500'>get.</span>
  </p><p><span m='620950'>Let</span> <span m='621110'>me</span> <span
  m='621220'>write</span> <span m='621430'>it</span> <span
  m='621520'>again.</span> <span m='622260'>Maybe</span> <span
  m='622570'>here.</span> <span m='623630'>[P,</span> <span m='623900'>Q,</span>
  <span m='624070'>R]</span> <span m='627090'>was</span> <span
  m='627380'>equal</span> <span m='627490'>to</span> <span m='627580'>y</span>
  <span m='628060'>comma</span> <span m='629285'>x</span> <span
  m='629690'>plus</span> <span m='630060'>2y*z--</span> <span
  m='631870'>I'll</span> <span m='632050'>put</span> <span m='632240'>it</span>
  <span m='632320'>here</span> <span m='632580'>so</span> <span
  m='632730'>you</span> <span m='632920'>don't</span> <span
  m='633140'>have</span> <span m='633310'>to</span> <span m='634090'>look</span>
  <span m='634350'>and</span> <span m='634450'>I</span> <span
  m='634520'>don't</span> <span m='634730'>have</span> <span
  m='634860'>to</span> <span m='634990'>look--</span> <span
  m='635280'>and</span> <span m='635390'>then</span> <span m='635520'>y</span>
  <span m='635800'>squared</span> <span m='636210'>plus</span> <span
  m='636530'>1.</span> <span m='638410'>OK.</span> </p><p><span
  m='639270'>So</span> <span m='639740'>P</span> <span m='640260'>at</span>
  <span m='640420'>x</span> <span m='641860'>comma</span> <span
  m='642130'>0</span> <span m='642420'>comma</span> <span m='642650'>0.</span>
  <span m='644380'>Well,</span> <span m='645500'>if</span> <span
  m='645630'>I</span> <span m='645850'>plug</span> <span m='646210'>in</span>
  <span m='646320'>0</span> <span m='646600'>for</span> <span
  m='646750'>y,</span> <span m='647100'>P</span> <span m='647280'>is</span>
  <span m='647460'>0.</span> <span m='648450'>So</span> <span
  m='648680'>P</span> <span m='649020'>at</span> <span m='650060'>(x,</span>
  <span m='650400'>0,</span> <span m='650710'>0)</span> <span
  m='651670'>is</span> <span m='651850'>equal</span> <span m='651990'>to</span>
  <span m='652180'>0.</span> <span m='653160'>So</span> <span
  m='653330'>I</span> <span m='653440'>get</span> <span
  m='653600'>nothing</span> <span m='654060'>to</span> <span
  m='654170'>integrate</span> <span m='654560'>in</span> <span
  m='654630'>the</span> <span m='654710'>first</span> <span
  m='654980'>part.</span> <span m='655250'>That's</span> <span
  m='655500'>nice.</span> <span m='656340'>OK.</span> </p><p><span
  m='657040'>Now,</span> <span m='657170'>what</span> <span m='657400'>is</span>
  <span m='657646'>Q</span> <span m='658880'>at</span> <span
  m='659070'>x_1</span> <span m='659770'>comma</span> <span m='660100'>y</span>
  <span m='660550'>comma</span> <span m='660930'>0?</span> <span
  m='662320'>Well,</span> <span m='663120'>that</span> <span
  m='663260'>would</span> <span m='663360'>be</span> <span m='663480'>an</span>
  <span m='663740'>x_1</span> <span m='663920'>here.</span> <span
  m='664600'>0</span> <span m='664980'>for</span> <span m='665170'>y</span>
  <span m='665470'>makes</span> <span m='665730'>this</span> <span
  m='665910'>term</span> <span m='666130'>go</span> <span
  m='666300'>away.</span> <span m='666550'>So</span> <span
  m='666700'>it's</span> <span m='666800'>just</span> <span
  m='666960'>equal</span> <span m='667100'>to</span> <span
  m='667220'>x_1.</span> <span m='669130'>Right?</span> </p><p><span
  m='669930'>And</span> <span m='670110'>then</span> <span m='670340'>R</span>
  <span m='672030'>at</span> <span m='672230'>x_1</span> <span
  m='672930'>comma</span> <span m='673310'>y_1</span> <span
  m='674340'>comma</span> <span m='674710'>z</span> <span m='676370'>is</span>
  <span m='677210'>y_1</span> <span m='677720'>squared</span> <span
  m='678070'>plus</span> <span m='678370'>1.</span> <span m='681480'>So</span>
  <span m='681690'>now</span> <span m='681850'>I'm</span> <span
  m='681950'>going</span> <span m='682035'>to</span> <span
  m='682120'>substitute</span> <span m='682780'>these</span> <span
  m='683150'>into</span> <span m='683580'>what</span> <span
  m='683700'>I'm</span> <span m='683790'>integrating.</span> </p><p><span
  m='684170'>So</span> <span m='684305'>in</span> <span m='684440'>the</span>
  <span m='684530'>first</span> <span m='684830'>one,</span> <span
  m='685010'>there's</span> <span m='685170'>nothing</span> <span
  m='685520'>there.</span> <span m='687192'>Let</span> <span
  m='687530'>me</span> <span m='687820'>just</span> <span
  m='688020'>write</span> <span m='688250'>it</span> <span
  m='688360'>right</span> <span m='688550'>here.</span> <span
  m='688820'>The</span> <span m='688940'>Q</span> <span m='689260'>is</span>
  <span m='689420'>going</span> <span m='689500'>to</span> <span
  m='689580'>be</span> <span m='689670'>the</span> <span
  m='689920'>integral</span> <span m='690330'>from</span> <span
  m='690375'>0</span> <span m='690420'>to</span> <span m='690530'>y_1</span>
  <span m='691630'>of</span> <span m='692110'>x_1</span> <span
  m='692950'>dy.</span> <span m='694150'>And</span> <span m='694290'>the</span>
  <span m='694410'>R</span> <span m='694730'>part</span> <span
  m='695050'>is</span> <span m='695160'>going</span> <span m='695255'>to</span>
  <span m='695350'>be</span> <span m='695460'>the</span> <span
  m='695570'>integral</span> <span m='696450'>from</span> <span
  m='696750'>0</span> <span m='697010'>to</span> <span m='697180'>z_1</span>
  <span m='699160'>of</span> <span m='699610'>y_1</span> <span
  m='700310'>squared</span> <span m='700750'>plus</span> <span
  m='701130'>1</span> <span m='702010'>dz.</span> <span m='703090'>OK,</span>
  <span m='703370'>so</span> <span m='704260'>the</span> <span
  m='704360'>P</span> <span m='704560'>part</span> <span m='704890'>was</span>
  <span m='705080'>disappeared.</span> <span m='706060'>This</span> <span
  m='706300'>is</span> <span m='706470'>the</span> <span m='706550'>Q</span>
  <span m='706720'>part</span> <span m='707000'>evaluated</span> <span
  m='707630'>where</span> <span m='707780'>I</span> <span
  m='708850'>needed</span> <span m='709380'>it</span> <span m='709590'>to</span>
  <span m='709710'>be</span> <span m='709790'>evaluated.</span> <span
  m='710580'>It's</span> <span m='710650'>just</span> <span
  m='711040'>x_1</span> <span m='711620'>dy.</span> <span m='712310'>And</span>
  <span m='712640'>the</span> <span m='712710'>R</span> <span
  m='712990'>part</span> <span m='713300'>evaluated</span> <span
  m='713725'>at</span> <span m='714150'>(x_1,</span> <span
  m='714310'>y_1,</span> <span m='714750'>z)</span> <span m='715200'>is</span>
  <span m='715440'>just</span> <span m='715630'>y_1</span> <span
  m='716030'>squared</span> <span m='716170'>plus</span> <span
  m='716420'>1.</span> <span m='717130'>And</span> <span m='717320'>so</span>
  <span m='717720'>I</span> <span m='717980'>integrate</span> <span
  m='718480'>that</span> <span m='718680'>in</span> <span m='718850'>z.</span>
  </p><p><span m='719500'>So</span> <span m='719670'>if</span> <span
  m='719740'>I</span> <span m='719810'>integrate</span> <span
  m='720140'>this</span> <span m='720330'>in</span> <span m='720510'>y,</span>
  <span m='721470'>all</span> <span m='721680'>I</span> <span
  m='721760'>get</span> <span m='721930'>is</span> <span m='722220'>x_1*y</span>
  <span m='722990'>evaluated</span> <span m='723740'>0</span> <span
  m='723910'>and</span> <span m='724120'>y1.</span> <span m='724720'>So</span>
  <span m='724860'>here</span> <span m='725080'>I</span> <span
  m='725160'>just</span> <span m='725350'>get</span> <span m='725480'>an</span>
  <span m='725810'>x_1*y_1.</span> <span m='728070'>Right?</span> <span
  m='729510'>And</span> <span m='729720'>then</span> <span
  m='729880'>here,</span> <span m='730110'>if</span> <span m='730200'>I</span>
  <span m='730280'>integrate</span> <span m='730650'>this</span> <span
  m='730820'>in</span> <span m='731020'>z,</span> <span m='731340'>I</span>
  <span m='731440'>just</span> <span m='731670'>get</span> <span
  m='731810'>a</span> <span m='731870'>z--</span> <span m='732800'>and</span>
  <span m='732970'>so</span> <span m='733120'>I</span> <span
  m='733250'>evaluate</span> <span m='733630'>that</span> <span
  m='733830'>at</span> <span m='733970'>z_1</span> <span m='734080'>and</span>
  <span m='734280'>0--</span> <span m='734600'>I</span> <span
  m='734670'>just</span> <span m='734870'>get</span> <span m='735010'>z_1</span>
  <span m='736280'>times</span> <span m='736580'>y1</span> <span
  m='737240'>squared</span> <span m='737530'>plus</span> <span
  m='737840'>1.</span> <span m='738890'>OK.</span> <span m='739400'>So</span>
  <span m='739630'>this</span> <span m='739810'>is</span> <span
  m='739920'>actually</span> <span m='740260'>my</span> <span
  m='740380'>potential</span> <span m='740870'>function.</span> </p><p><span
  m='742330'>And</span> <span m='742580'>so</span> <span m='742690'>let</span>
  <span m='742820'>me</span> <span m='742910'>write</span> <span
  m='743180'>it</span> <span m='743290'>formally.</span> <span
  m='744190'>I</span> <span m='744300'>should</span> <span
  m='744450'>actually</span> <span m='744700'>say,</span> <span
  m='744830'>this</span> <span m='745020'>is</span> <span m='745100'>my</span>
  <span m='745250'>final</span> <span m='745590'>answer.</span> <span
  m='745890'>Right?</span> <span m='746760'>I</span> <span m='746840'>was</span>
  <span m='746980'>integrating.</span> <span m='747920'>This</span> <span
  m='748090'>is</span> <span m='748180'>actually</span> <span
  m='748550'>what</span> <span m='748690'>I</span> <span m='748780'>get.</span>
  <span m='749730'>And</span> <span m='750000'>so</span> <span
  m='750110'>what</span> <span m='750240'>I</span> <span m='750320'>was</span>
  <span m='750480'>trying</span> <span m='750710'>to</span> <span
  m='750800'>find,</span> <span m='751180'>if</span> <span m='751250'>you</span>
  <span m='751360'>remember--</span> <span m='751720'>I'm</span> <span
  m='751820'>going</span> <span m='751860'>to</span> <span
  m='751900'>come</span> <span m='752080'>back</span> <span
  m='752340'>here</span> <span m='752600'>and</span> <span
  m='752700'>just</span> <span m='753010'>mention</span> <span
  m='753220'>it</span> <span m='753430'>again.</span> <span
  m='754190'>What</span> <span m='754470'>I</span> <span m='754520'>was</span>
  <span m='754690'>doing</span> <span m='754920'>was</span> <span
  m='755060'>I</span> <span m='755150'>was</span> <span
  m='755310'>integrating</span> <span m='755710'>along</span> <span
  m='755920'>a</span> <span m='755990'>curve</span> <span m='756340'>F</span>
  <span m='756550'>dot</span> <span m='756740'>dr,</span> <span
  m='757140'>to</span> <span m='757240'>give</span> <span m='757370'>me</span>
  <span m='757510'>f</span> <span m='757720'>of</span> <span
  m='758020'>(x_1,</span> <span m='758340'>y_1,</span> <span
  m='758470'>z_1).</span> <span m='759210'>Right?</span> <span
  m='760010'>So</span> <span m='760190'>now</span> <span m='760370'>I've</span>
  <span m='760460'>found</span> <span m='760920'>it.</span> <span
  m='761530'>The</span> <span m='761650'>only</span> <span
  m='761850'>thing</span> <span m='761990'>I</span> <span m='762080'>said</span>
  <span m='762350'>is</span> <span m='762460'>we</span> <span
  m='762550'>also</span> <span m='762800'>have</span> <span m='763020'>to</span>
  <span m='763150'>allow</span> <span m='763650'>for</span> <span
  m='763800'>there</span> <span m='763940'>to</span> <span m='764020'>be</span>
  <span m='764140'>a</span> <span m='764210'>constant.</span> <span
  m='765170'>OK.</span> </p><p><span m='765440'>So</span> <span
  m='766160'>the</span> <span m='766270'>potential</span> <span
  m='766730'>function</span> <span m='767110'>is</span> <span
  m='767210'>actually</span> <span m='767930'>exactly</span> <span
  m='768590'>this</span> <span m='768810'>function</span> <span
  m='770000'>plus</span> <span m='770340'>a</span> <span
  m='770540'>constant.</span> <span m='772990'>OK.</span> <span
  m='773950'>So</span> <span m='774160'>this</span> <span m='774440'>is</span>
  <span m='774770'>f</span> <span m='775100'>of</span> <span
  m='775265'>(x_1,</span> <span m='775620'>y_1,</span> <span
  m='775970'>z_1).</span> <span m='776310'>And</span> <span
  m='776450'>since</span> <span m='776620'>I</span> <span
  m='776690'>don't</span> <span m='776860'>have</span> <span
  m='776950'>much</span> <span m='777120'>room</span> <span
  m='777650'>above,</span> <span m='777905'>I'll</span> <span
  m='778160'>just</span> <span m='778370'>write</span> <span
  m='778645'>it</span> <span m='778920'>below.</span> <span
  m='783450'>This</span> <span m='783920'>is</span> <span m='784120'>f</span>
  <span m='784440'>of</span> <span m='784610'>x_1,</span> <span
  m='784780'>y_1,</span> <span m='784940'>z_1.</span> <span m='785330'>So</span>
  <span m='785450'>that's</span> <span m='785660'>my</span> <span
  m='785790'>potential</span> <span m='786280'>function</span> <span
  m='788210'>for</span> <span m='789060'>this</span> <span
  m='789360'>vector</span> <span m='789730'>field,</span> <span
  m='790410'>capital</span> <span m='790810'>F,</span> <span
  m='791370'>when</span> <span m='791930'>it</span> <span m='792070'>is</span>
  <span m='792240'>conservative.</span> <span m='792920'>So</span> <span
  m='793120'>when</span> <span m='793610'>b</span> <span m='793840'>is</span>
  <span m='793980'>equal</span> <span m='794250'>to</span> <span
  m='794350'>2.</span> </p><p><span m='795290'>OK,</span> <span
  m='795550'>and</span> <span m='795620'>there</span> <span
  m='795690'>was</span> <span m='795830'>one</span> <span m='796090'>last</span>
  <span m='796400'>part</span> <span m='796620'>to</span> <span
  m='796710'>this</span> <span m='796900'>question.</span> <span
  m='797770'>Right?</span> <span m='797970'>So</span> <span m='798015'>if</span>
  <span m='798060'>we</span> <span m='798190'>come</span> <span
  m='798500'>all</span> <span m='798800'>the</span> <span m='798880'>way</span>
  <span m='799020'>back</span> <span m='799260'>over,</span> <span
  m='799920'>we're</span> <span m='800180'>reminded</span> <span
  m='801200'>of</span> <span m='801640'>one</span> <span m='801860'>last</span>
  <span m='802180'>part.</span> <span m='802790'>It</span> <span
  m='802890'>was</span> <span m='802990'>explain</span> <span
  m='803430'>why</span> <span m='803620'>F</span> <span m='803870'>dot</span>
  <span m='804120'>dr</span> <span m='804265'>is</span> <span
  m='804410'>exact</span> <span m='805360'>for</span> <span
  m='805510'>the</span> <span m='805620'>b</span> <span m='805790'>values</span>
  <span m='806160'>determined</span> <span m='806580'>from</span> <span
  m='806750'>number</span> <span m='807020'>one.</span> <span
  m='807790'>And</span> <span m='808050'>the</span> <span
  m='808130'>reason</span> <span m='808620'>is</span> <span
  m='808740'>exactly</span> <span m='809750'>because</span> <span
  m='810020'>of</span> <span m='810080'>the</span> <span
  m='810160'>following</span> <span m='810620'>thing.</span> </p><p><span
  m='812410'>F</span> <span m='812635'>is</span> <span
  m='812860'>conservative</span> <span m='813990'>based</span> <span
  m='814340'>on</span> <span m='814520'>the</span> <span m='814590'>fact</span>
  <span m='814820'>that</span> <span m='814950'>b</span> <span
  m='815120'>is</span> <span m='815280'>2.</span> <span m='816360'>And</span>
  <span m='816570'>so</span> <span m='817020'>when</span> <span
  m='817150'>we</span> <span m='817280'>talk</span> <span
  m='817580'>about</span> <span m='818000'>when</span> <span m='818190'>F</span>
  <span m='818590'>dot</span> <span m='818650'>dr</span> <span
  m='818840'>is</span> <span m='819100'>exact,</span> <span
  m='822240'>the</span> <span m='822530'>simplest</span> <span
  m='822980'>case</span> <span m='823405'>is</span> <span
  m='825550'>capital</span> <span m='825900'>F</span> <span m='826020'>is</span>
  <span m='826150'>conservative,</span> <span m='827080'>and</span> <span
  m='827570'>I'm</span> <span m='827740'>on</span> <span m='827850'>a</span>
  <span m='827960'>simply</span> <span m='828250'>connected</span> <span
  m='828630'>domain.</span> <span m='829810'>OK.</span> <span
  m='830440'>And</span> <span m='830570'>if</span> <span m='830680'>you</span>
  <span m='830810'>notice,</span> <span m='831730'>capital</span> <span
  m='832180'>F</span> <span m='832330'>is</span> <span m='832480'>defined</span>
  <span m='834350'>for</span> <span m='834680'>all</span> <span
  m='835270'>values</span> <span m='835950'>x,</span> <span m='836250'>y,</span>
  <span m='836600'>z,</span> <span m='837320'>and</span> <span
  m='837560'>is</span> <span m='837690'>differentiable</span> <span
  m='838410'>for</span> <span m='838530'>all</span> <span m='838760'>values
  of</span> <span m='839150'>x,</span> <span m='839320'>y,</span> <span
  m='839460'>z.</span> <span m='839900'>So</span> <span m='840200'>F</span>
  <span m='840390'>is</span> <span m='840580'>defined</span> <span
  m='841120'>and</span> <span m='841220'>differentiable</span> <span
  m='842370'>everywhere</span> <span m='843250'>on</span> <span
  m='843470'>R^3.</span> <span m='844550'>R^3</span> <span m='844740'>is</span>
  <span m='844980'>simply</span> <span m='845290'>connected.</span> </p><p><span
  m='846040'>So</span> <span m='846270'>we</span> <span m='846410'>have</span>
  <span m='846670'>a</span> <span m='846750'>conservative</span> <span
  m='847400'>vector</span> <span m='847660'>field</span> <span
  m='848120'>on</span> <span m='848250'>a</span> <span m='848340'>simply</span>
  <span m='848610'>connected</span> <span m='849000'>region.</span> <span
  m='849650'>And</span> <span m='849830'>that's</span> <span
  m='850050'>what</span> <span m='850210'>it</span> <span
  m='850310'>means.</span> <span m='850700'>That's</span> <span
  m='850880'>one</span> <span m='851200'>way</span> <span m='851430'>that</span>
  <span m='851560'>we</span> <span m='851680'>have</span> <span
  m='852030'>of</span> <span m='852150'>knowing</span> <span m='852490'>F</span>
  <span m='852910'>dot</span> <span m='853020'>dr</span> <span
  m='853145'>is</span> <span m='853270'>exact.</span> <span
  m='854100'>And</span> <span m='854360'>so</span> <span m='854450'>that</span>
  <span m='854680'>actually</span> <span m='855050'>answers</span> <span
  m='855940'>the</span> <span m='856060'>third</span> <span
  m='856370'>part</span> <span m='856570'>of</span> <span m='856660'>the</span>
  <span m='856750'>question.</span> </p><p><span m='857910'>So</span> <span
  m='858160'>again,</span> <span m='858490'>let</span> <span
  m='858580'>me</span> <span m='858660'>just</span> <span
  m='858870'>remind</span> <span m='859090'>you</span> <span
  m='859180'>what</span> <span m='859290'>we</span> <span m='859400'>did.</span>
  <span m='860010'>We</span> <span m='860330'>started</span> <span
  m='860810'>with</span> <span m='860940'>a</span> <span
  m='861060'>vector</span> <span m='861290'>field</span> <span
  m='861560'>F,</span> <span m='862640'>we</span> <span m='862910'>found</span>
  <span m='863300'>values</span> <span m='863840'>for</span> <span
  m='863990'>b</span> <span m='864270'>that</span> <span m='864420'>made</span>
  <span m='864550'>that</span> <span m='864790'>vector</span> <span
  m='864990'>field</span> <span m='865180'>conservative,</span> <span
  m='866320'>and</span> <span m='866650'>then</span> <span m='866810'>we</span>
  <span m='866940'>used</span> <span m='867310'>one</span> <span
  m='867490'>of</span> <span m='867570'>the</span> <span
  m='867650'>techniques</span> <span m='867915'>in</span> <span
  m='868180'>class</span> <span m='868590'>to</span> <span
  m='868690'>find</span> <span m='869090'>a</span> <span
  m='869130'>potential</span> <span m='869610'>function</span> <span
  m='870090'>for</span> <span m='870310'>that</span> <span
  m='870540'>value</span> <span m='870930'>of</span> <span m='871100'>b.</span>
  <span m='871950'>So</span> <span m='872160'>there</span> <span
  m='872240'>were</span> <span m='872570'>a</span> <span
  m='872670'>number</span> <span m='873000'>of</span> <span
  m='873100'>steps</span> <span m='873530'>involved,</span> <span
  m='874350'>but</span> <span m='874580'>ultimately,</span> <span
  m='875120'>again,</span> <span m='875460'>it's</span> <span
  m='875930'>the</span> <span m='876060'>same</span> <span
  m='876470'>type</span> <span m='876770'>of</span> <span
  m='876910'>problem</span> <span m='877240'>you've</span> <span
  m='877420'>seen</span> <span m='877620'>before,</span> <span
  m='878640'>when</span> <span m='879100'>F</span> <span m='879340'>was</span>
  <span m='879560'>a</span> <span m='879810'>vector</span> <span
  m='880140'>field</span> <span m='880430'>in</span> <span m='880540'>two</span>
  <span m='880710'>dimensions.</span> <span m='881750'>So</span> <span
  m='881920'>it</span> <span m='882020'>shouldn't</span> <span
  m='882340'>be</span> <span m='882900'>feeling</span> <span
  m='883230'>too</span> <span m='883500'>different</span> <span
  m='884720'>from</span> <span m='884950'>some</span> <span m='885110'>of</span>
  <span m='885180'>the</span> <span m='885250'>stuff</span> <span
  m='885460'>you</span> <span m='885560'>saw</span> <span
  m='885820'>earlier.</span> </p><p><span m='887120'>OK,</span> <span
  m='887370'>I</span> <span m='887490'>think</span> <span
  m='887720'>that's</span> <span m='887940'>where</span> <span
  m='888060'>I'll</span> <span m='888270'>stop.</span> </p>
embedded_media:
  - uid: b7a5d51ea14cead892c4cf7b4c0f5ada
    parent_uid: a8b06b720af0184fc245f3d3a7334ed9
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: IYlzo-bxrqs
  - uid: 90fdc460eec567c739d994ac9f4b3080
    parent_uid: a8b06b720af0184fc245f3d3a7334ed9
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_64_300k.mp4'
  - uid: 79628801ea8d1d575c61a182eccd1283
    parent_uid: a8b06b720af0184fc245f3d3a7334ed9
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/conservative-fields-exact/id414355340?i=90323150
  - uid: 58e328a05f5a6d0d4a0ef49892d5c3a2
    parent_uid: a8b06b720af0184fc245f3d3a7334ed9
    id: 3Play-3PlayYouTubeid-PDF
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: IYlzo-bxrqs
  - uid: 0490e5c57631c6257b91c33ec9904d29
    parent_uid: a8b06b720af0184fc245f3d3a7334ed9
    id: IYlzo-bxrqs.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/4.-triple-integrals-and-surface-integrals-in-3-space/part-c-line-integrals-and-stokes-theorem/session-90-curl-in-3d/conservative-fields-and-exact-differentials/IYlzo-bxrqs.srt
  - uid: 480cb32fcbd03c300ecfe97614cbace8
    parent_uid: a8b06b720af0184fc245f3d3a7334ed9
    id: IYlzo-bxrqs.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/4.-triple-integrals-and-surface-integrals-in-3-space/part-c-line-integrals-and-stokes-theorem/session-90-curl-in-3d/conservative-fields-and-exact-differentials/IYlzo-bxrqs.pdf
  - uid: 843c376ee38673ebcc9ac82d73b20f0b
    parent_uid: a8b06b720af0184fc245f3d3a7334ed9
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 8ca62b4f1ab1014ac90901b456e04d06
    parent_uid: a8b06b720af0184fc245f3d3a7334ed9
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: f014f078ec89d5e280354d0bd2b08e53
    parent_uid: a8b06b720af0184fc245f3d3a7334ed9
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/IYlzo-bxrqs/default.jpg'
type: courses
layout: video
---
