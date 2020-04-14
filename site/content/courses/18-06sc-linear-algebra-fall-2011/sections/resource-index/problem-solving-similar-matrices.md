---
title: 'Problem Solving: Similar Matrices'
uid: faedf63c3bdc84f2e5ad455b6295d011
parent_uid: 754d6be4ca3c378b6c8b2e4a955ffe64
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/problem-solving-similar-matrices
short_url: problem-solving-similar-matrices
inline_embed_id: 5758729problemsolvingsimilarmatrices54299042
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='5712'>BEN HARRIS:</span> <span m='6190'>Hi.</span> <span
  m='7090'>Today</span> <span m='7390'>we're</span> <span m='7530'>going</span>
  <span m='7640'>to</span> <span m='7720'>do</span> <span m='7850'>a</span>
  <span m='7900'>problem</span> <span m='8310'>about</span> <span
  m='8700'>similar</span> <span m='9180'>matrices.</span> <span
  m='10250'>The</span> <span m='10340'>problem</span> <span m='10750'>is</span>
  <span m='10860'>right</span> <span m='11060'>here.</span> <span
  m='12440'>So</span> <span m='12980'>the</span> <span m='13090'>question</span>
  <span m='13420'>asks,</span> <span m='13770'>which</span> <span
  m='14150'>of</span> <span m='14250'>the</span> <span
  m='14360'>following</span> <span m='15340'>statements</span> <span
  m='15870'>are</span> <span m='16059'>true,</span> <span m='16910'>and</span>
  <span m='17160'>it</span> <span m='17270'>asks</span> <span
  m='17640'>you</span> <span m='17780'>to</span> <span m='17900'>explain</span>
  <span m='18450'>why.</span> </p><p><span m='19670'>The</span> <span
  m='19760'>first</span> <span m='20010'>statement</span> <span
  m='20490'>is:</span> <span m='21300'>if</span> <span m='21640'>A</span> <span
  m='22120'>and</span> <span m='22370'>B are</span> <span
  m='22450'>similar</span> <span m='22840'>matrices,</span> <span
  m='23850'>then</span> <span m='24400'>2</span> <span m='24630'>A</span> <span
  m='24780'>cubed</span> <span m='25290'>plus</span> <span m='25720'>A</span>
  <span m='26000'>minus</span> <span m='26490'>3</span> <span
  m='26680'>times</span> <span m='27000'>the</span> <span
  m='27110'>identity</span> <span m='28120'>is</span> <span
  m='28310'>similar</span> <span m='28760'>to</span> <span m='29640'>2</span>
  <span m='29890'>times</span> <span m='30250'>B</span> <span
  m='30590'>cubed</span> <span m='31030'>plus</span> <span m='31400'>B</span>
  <span m='31820'>minus</span> <span m='32220'>3</span> <span
  m='32390'>times</span> <span m='32689'>the</span> <span
  m='32900'>identity.</span> <span m='34350'>The</span> <span
  m='34440'>second</span> <span m='34810'>question</span> <span
  m='35360'>asks:</span> <span m='36150'>if</span> <span m='36400'>A</span>
  <span m='36550'>and</span> <span m='36710'>B</span> <span m='36970'>are</span>
  <span m='37070'>3 by 3</span> <span m='37950'>matrices</span> <span
  m='38750'>with</span> <span m='39290'>eigenvalues</span> <span
  m='39630'>1,</span> <span m='39960'>0,</span> <span m='40300'>and</span> <span
  m='40410'>-1,</span> <span m='41470'>then</span> <span
  m='41970'>they're</span> <span m='42170'>similar.</span> <span
  m='43780'>And</span> <span m='44130'>the</span> <span m='44310'>third</span>
  <span m='44700'>part</span> <span m='45380'>asks</span> <span
  m='45760'>you</span> <span m='45860'>whether</span> <span
  m='46100'>these</span> <span m='46865'>two</span> <span m='47230'>J</span>
  <span m='47630'>matrices</span> <span m='49070'>are</span> <span
  m='49190'>similar.</span> </p><p><span m='50460'>OK.</span> <span
  m='51160'>I'll</span> <span m='51290'>give</span> <span m='51530'>you</span>
  <span m='51750'>a</span> <span m='51870'>moment</span> <span
  m='52310'>to</span> <span m='52920'>hit</span> <span m='53140'>pause</span>
  <span m='53700'>and</span> <span m='54060'>try</span> <span
  m='54400'>it</span> <span m='54570'>on</span> <span m='54760'>your</span>
  <span m='54930'>own.</span> <span m='55700'>I'll</span> <span
  m='55800'>be</span> <span m='55920'>back</span> <span m='56280'>in</span>
  <span m='56510'>just</span> <span m='56780'>a</span> <span
  m='56830'>moment,</span> <span m='57440'>and</span> <span m='57540'>we</span>
  <span m='57640'>can</span> <span m='57770'>do</span> <span m='57910'>it</span>
  <span m='58210'>together.</span> </p><p><span m='69300'>And</span> <span
  m='69780'>we're</span> <span m='70040'>back.</span> <span
  m='75560'>Let's</span> <span m='75800'>start</span> <span
  m='76160'>with</span> <span m='76480'>part</span> <span m='76840'>A.</span>
  <span m='79810'>Part</span> <span m='80130'>A</span> <span m='81690'>is</span>
  <span m='82020'>true.</span> <span m='85130'>Why?</span> <span
  m='86620'>Well,</span> <span m='87740'>what</span> <span m='87910'>does</span>
  <span m='88040'>it</span> <span m='88150'>mean</span> <span
  m='88420'>for</span> <span m='88630'>A</span> <span m='88740'>and</span> <span
  m='88950'>B</span> <span m='89370'>to</span> <span m='89480'>be</span> <span
  m='89640'>similar?</span> <span m='91490'>Right,</span> <span
  m='92400'>we</span> <span m='92620'>know</span> <span m='94190'>there's</span>
  <span m='94540'>some</span> <span m='94790'>matrix</span> <span
  m='95460'>M,</span> <span m='96780'>such</span> <span m='97240'>that--</span>
  <span m='97600'>that's</span> <span m='97810'>what</span> <span
  m='97950'>"st"</span> <span m='98440'>means--</span> <span
  m='100660'>when</span> <span m='100850'>I</span> <span
  m='100890'>multiply</span> <span m='103220'>A on</span> <span
  m='103300'>the</span> <span m='103380'>left</span> <span m='103690'>by</span>
  <span m='103880'>M</span> <span m='104430'>and</span> <span
  m='104550'>the</span> <span m='104620'>right</span> <span m='104880'>by</span>
  <span m='105040'>M</span> <span m='105260'>inverse,</span> <span
  m='106320'>I</span> <span m='106450'>get</span> <span m='106760'>B.</span>
  </p><p><span m='108380'>OK.</span> <span m='109560'>So</span> <span
  m='109920'>let's</span> <span m='110180'>take</span> <span
  m='110450'>that</span> <span m='110710'>same</span> <span
  m='110990'>matrix</span> <span m='111430'>M</span> <span m='114790'>and</span>
  <span m='114970'>multiply</span> <span m='115510'>it</span> <span
  m='115710'>on</span> <span m='115870'>the</span> <span m='116600'>left</span>
  <span m='117080'>and</span> <span m='117180'>the</span> <span
  m='117290'>right</span> <span m='117840'>of</span> <span m='119220'>2</span>
  <span m='119600'>A</span> <span m='119920'>cubed</span> <span
  m='120220'>plus</span> <span m='120620'>A</span> <span m='120820'>minus</span>
  <span m='121320'>3</span> <span m='121520'>times</span> <span
  m='121840'>the</span> <span m='122620'>identity.</span> </p><p><span
  m='125830'>OK.</span> <span m='126630'>What</span> <span m='126940'>do</span>
  <span m='127020'>we</span> <span m='127440'>get</span> <span
  m='127720'>here?</span> <span m='128720'>Well,</span> <span
  m='129750'>the</span> <span m='130000'>point</span> <span m='130310'>is</span>
  <span m='130500'>what</span> <span m='131140'>M</span> <span
  m='131500'>times</span> <span m='132120'>A</span> <span
  m='132300'>cubed</span> <span m='132610'>times</span> <span
  m='132950'>M</span> <span m='133220'>inverse,</span> <span
  m='134190'>we</span> <span m='134340'>can</span> <span m='134490'>just</span>
  <span m='134680'>write</span> <span m='134930'>that</span> <span
  m='135230'>as</span> <span m='136750'>three</span> <span m='138120'>M</span>
  <span m='138430'>A</span> <span m='138760'>M</span> <span
  m='139090'>inverses.</span> <span m='144190'>Similarly,</span> <span
  m='144830'>we</span> <span m='144940'>have</span> <span m='146140'>an</span>
  <span m='146840'>M*A</span> <span m='147340'>M</span> <span
  m='148840'>inverse</span> <span m='151910'>and</span> <span
  m='152110'>an</span> <span m='152375'>M</span> <span m='152640'>times</span>
  <span m='152910'>the</span> <span m='153070'>identity</span> <span
  m='153550'>times</span> <span m='153860'>M</span> <span
  m='154220'>inverse.</span> </p><p><span m='155980'>Good.</span> <span
  m='158270'>Remember</span> <span m='158660'>that</span> <span
  m='158870'>M</span> <span m='159160'>times</span> <span m='159400'>A</span>
  <span m='159510'>times</span> <span m='159760'>M</span> <span
  m='159930'>inverse</span> <span m='160230'>is</span> <span
  m='160350'>B.</span> <span m='161280'>So</span> <span m='161440'>we</span>
  <span m='161550'>just</span> <span m='161720'>get</span> <span
  m='161920'>2</span> <span m='162645'>B</span> <span m='163240'>cubed--</span>
  <span m='163820'>three</span> <span m='164130'>B's--</span> <span
  m='166310'>plus</span> <span m='167620'>B</span> <span
  m='168750'>minus--</span> <span m='169800'>well,</span> <span
  m='170250'>M</span> <span m='170780'>times</span> <span m='171020'>the</span>
  <span m='171100'>identity</span> <span m='171420'>is just</span> <span
  m='171830'>M.</span> <span m='172290'>So</span> <span m='172470'>we</span>
  <span m='172570'>just</span> <span m='172740'>get</span> <span
  m='172900'>the</span> <span m='173010'>identity</span> <span
  m='173390'>back,</span> <span m='174470'>and</span> <span m='174840'>we</span>
  <span m='174950'>have</span> <span m='175220'>3</span> <span
  m='175440'>times</span> <span m='175740'>the</span> <span
  m='175980'>identity.</span> </p><p><span m='177872'>Good.</span> <span
  m='178760'>And</span> <span m='178970'>this</span> <span m='179150'>is</span>
  <span m='179620'>a</span> <span m='179730'>general</span> <span
  m='180380'>remark,</span> <span m='180650'>that</span> <span
  m='181100'>if</span> <span m='181180'>you</span> <span m='181340'>have</span>
  <span m='181510'>matrices</span> <span m='182140'>A</span> <span
  m='182280'>and</span> <span m='182490'>B</span> <span m='182800'>that</span>
  <span m='182990'>are</span> <span m='183140'>similar,</span> <span
  m='184120'>then</span> <span m='184310'>any</span> <span
  m='184560'>polynomials</span> <span m='185600'>in</span> <span
  m='185720'>these</span> <span m='185910'>matrices</span> <span
  m='186890'>A</span> <span m='187100'>and</span> <span m='187330'>B</span>
  <span m='187700'>will</span> <span m='187930'>be</span> <span
  m='188050'>similar.</span> <span m='189080'>It's</span> <span
  m='189400'>the</span> <span m='189770'>exact</span> <span
  m='190100'>same</span> <span m='190520'>justification.</span> <span
  m='193090'>OK.</span> </p><p><span m='195360'>Now</span> <span
  m='195520'>let's</span> <span m='195810'>go</span> <span m='196030'>on</span>
  <span m='196320'>to</span> <span m='196440'>part</span> <span
  m='196730'>B.</span> <span m='198700'>So</span> <span m='198910'>now</span>
  <span m='199300'>A</span> <span m='199440'>and</span> <span
  m='199620'>B</span> <span m='199820'>are</span> <span m='199900'>3 by 3</span>
  <span m='200520'>similar</span> <span m='200930'>matrices</span> <span
  m='201600'>with</span> <span m='201730'>the</span> <span
  m='201870'>same</span> <span m='202460'>eigenvalues.</span> <span
  m='204160'>And</span> <span m='204440'>their</span> <span
  m='204680'>eigenvalues</span> <span m='205040'>are</span> <span
  m='205710'>distinct.</span> <span m='208690'>So</span> <span
  m='208890'>it</span> <span m='208980'>turns</span> <span m='209200'>out</span>
  <span m='209380'>that</span> <span m='209560'>b</span> <span
  m='209990'>is</span> <span m='210240'>true</span> <span m='210650'>as</span>
  <span m='210830'>well.</span> <span m='215830'>And</span> <span
  m='216970'>why</span> <span m='217250'>is</span> <span m='217390'>that?</span>
  <span m='218940'>A</span> <span m='219050'>matrix</span> <span
  m='219550'>with</span> <span m='219890'>distinct</span> <span
  m='220680'>eigenvalues</span> <span m='221100'>is</span> <span
  m='221310'>diagonalizable.</span> <span m='223020'>So</span> <span
  m='223200'>we</span> <span m='223320'>can</span> <span m='223450'>write</span>
  <span m='225548'>A</span> <span m='226890'>as</span> <span m='228210'>S</span>
  <span m='228650'>lambda</span> <span m='229600'>S</span> <span
  m='229980'>inverse,</span> <span m='231860'>where</span> <span
  m='233950'>lambda</span> <span m='235130'>is</span> <span
  m='235310'>just</span> <span m='235600'>this</span> <span
  m='237260'>eigenvalue</span> <span m='237540'>matrix.</span> <span
  m='240550'>We</span> <span m='240680'>can</span> <span m='240820'>also</span>
  <span m='241110'>write</span> <span m='241760'>B</span> <span
  m='243300'>as</span> <span m='243760'>T</span> <span m='244980'>lambda</span>
  <span m='245820'>T</span> <span m='246090'>inverse,</span> <span
  m='247690'>where</span> <span m='247870'>lambda</span> <span
  m='248300'>is</span> <span m='248500'>the</span> <span m='248590'>same</span>
  <span m='249020'>in</span> <span m='249120'>both</span> <span
  m='249400'>cases</span> <span m='249820'>because</span> <span
  m='250090'>they</span> <span m='250250'>have</span> <span
  m='250410'>the</span> <span m='250500'>same</span> <span
  m='251160'>eigenvalues.</span> </p><p><span m='252420'>Good.</span> <span
  m='253310'>Now</span> <span m='253510'>I'll</span> <span m='253730'>let</span>
  <span m='254840'>you--</span> <span m='256040'>so</span> <span
  m='257500'>before</span> <span m='257880'>we</span> <span
  m='258070'>check</span> <span m='258290'>it,</span> <span
  m='258420'>let's</span> <span m='258630'>just</span> <span
  m='258790'>say</span> <span m='259740'>the</span> <span
  m='259850'>point.</span> <span m='260560'>The</span> <span
  m='260640'>point</span> <span m='260930'>is</span> <span m='261070'>if</span>
  <span m='261470'>two</span> <span m='261820'>matrices</span> <span
  m='262370'>are</span> <span m='262440'>similar</span> <span
  m='262930'>to</span> <span m='263050'>the</span> <span m='263140'>same</span>
  <span m='263440'>matrix,</span> <span m='264370'>then</span> <span
  m='264600'>they're</span> <span m='264730'>similar</span> <span
  m='265130'>to</span> <span m='265430'>each</span> <span
  m='265650'>other.</span> <span m='266950'>Similarity</span> <span
  m='267300'>is</span> <span m='267650'>a</span> <span
  m='267730'>transitive</span> <span m='268870'>relation.</span> <span
  m='270100'>And</span> <span m='270240'>I'll</span> <span
  m='270410'>just</span> <span m='270590'>let</span> <span m='271180'>you</span>
  <span m='271500'>check</span> <span m='271910'>that</span> <span
  m='272640'>you</span> <span m='272820'>can</span> <span m='276290'>take</span>
  <span m='276640'>T</span> <span m='276930'>S</span> <span
  m='277220'>inverse</span> <span m='278880'>A</span> <span
  m='280140'>times</span> <span m='280500'>T</span> <span m='280970'>S
  inverse</span> <span m='282410'>inverse,</span> <span m='283140'>and</span>
  <span m='283270'>you'll</span> <span m='283430'>get</span> <span
  m='284620'>B.</span> <span m='288530'>This</span> <span
  m='288700'>follows</span> <span m='288970'>directly</span> <span
  m='289410'>from</span> <span m='289860'>these</span> <span
  m='290130'>two</span> <span m='291090'>relations.</span> </p><p><span
  m='292690'>Good.</span> <span m='293130'>Now</span> <span
  m='293300'>let's</span> <span m='293660'>take</span> <span
  m='293930'>on</span> <span m='294100'>part</span> <span m='294400'>C.</span>
  <span m='297100'>Part</span> <span m='297410'>C</span> <span
  m='297580'>is</span> <span m='297820'>false.</span> <span
  m='301240'>Let's</span> <span m='301570'>come</span> <span
  m='301730'>back</span> <span m='301930'>over</span> <span
  m='302130'>here</span> <span m='302290'>and</span> <span
  m='302470'>look</span> <span m='302690'>at</span> <span
  m='302790'>these</span> <span m='303390'>two</span> <span
  m='303580'>matrices,</span> <span m='304690'>J_1</span> <span
  m='304930'>and</span> <span m='305140'>J_2.</span> <span m='306310'>The</span>
  <span m='306520'>first</span> <span m='306740'>thing</span> <span
  m='307070'>you</span> <span m='307190'>should</span> <span
  m='307420'>see</span> <span m='307690'>is</span> <span m='307850'>that</span>
  <span m='307990'>these</span> <span m='308750'>two</span> <span
  m='309030'>are</span> <span m='309210'>Jordan</span> <span
  m='309640'>blocks--</span> <span m='312140'>sorry,</span> <span
  m='312810'>not</span> <span m='313070'>Jordan</span> <span
  m='313370'>blocks,</span> <span m='313790'>they're</span> <span
  m='314510'>matrices</span> <span m='315050'>in</span> <span
  m='315280'>Jordan</span> <span m='315600'>normal</span> <span
  m='315910'>form.</span> <span m='317840'>They're</span> <span
  m='318270'>different</span> <span m='318770'>matrices</span> <span
  m='319220'>in Jordan</span> <span m='319500'>normal</span> <span
  m='319880'>form,</span> <span m='320200'>so</span> <span
  m='320420'>they</span> <span m='320530'>will</span> <span
  m='320770'>not</span> <span m='321050'>be</span> <span
  m='321670'>similar.</span> <span m='323350'>But</span> <span
  m='323540'>let's</span> <span m='323760'>actually</span> <span
  m='324160'>see</span> <span m='324420'>why.</span> </p><p><span
  m='327060'>Let's</span> <span m='327340'>look</span> <span
  m='327580'>at--</span> <span m='329400'>remember,</span> <span
  m='329780'>one</span> <span m='330040'>of</span> <span m='330080'>the</span>
  <span m='330190'>things</span> <span m='330450'>that</span> <span
  m='330610'>similarity</span> <span m='331110'>preserves</span> <span
  m='331730'>are</span> <span m='332770'>eigenvectors</span> <span
  m='333190'>and</span> <span m='333650'>eigenvalues.</span> <span
  m='334790'>So</span> <span m='335010'>let's</span> <span
  m='335250'>look</span> <span m='335640'>at</span> <span m='337170'>the</span>
  <span m='337380'>eigenspace</span> <span m='338130'>with</span> <span
  m='338540'>eigenvalue</span> <span m='338810'>minus</span> <span
  m='339220'>one</span> <span m='339710'>with</span> <span
  m='339890'>these</span> <span m='340080'>two</span> <span
  m='340240'>matrices.</span> <span m='341710'>So</span> <span
  m='343300'>J_1</span> <span m='344900'>plus</span> <span m='345610'>the</span>
  <span m='345750'>identity--</span> <span m='348010'>let's</span> <span
  m='348220'>look</span> <span m='348380'>at</span> <span m='348490'>the</span>
  <span m='348620'>nullspace</span> <span m='349300'>of</span> <span
  m='349440'>this</span> <span m='349590'>matrix.</span> <span
  m='350720'>So</span> <span m='350930'>this</span> <span m='351210'>is</span>
  <span m='353010'>just</span> <span m='357600'>0's</span> <span
  m='357980'>on</span> <span m='358050'>the</span> <span
  m='358130'>diagonal</span> <span m='358620'>and</span> <span
  m='358720'>1's</span> <span m='359140'>right</span> <span
  m='359420'>above</span> <span m='359730'>the</span> <span
  m='359820'>diagonal.</span> <span m='361000'>And</span> <span
  m='361460'>J_2</span> <span m='363100'>plus</span> <span m='363560'>the</span>
  <span m='363680'>identity.</span> <span m='365530'>this</span> <span
  m='365750'>is</span> <span m='367210'>just</span> <span m='367450'>0,</span>
  <span m='367800'>1,</span> <span m='369060'>0,</span> <span
  m='369410'>0.</span> </p><p><span m='372350'>So</span> <span
  m='372510'>the</span> <span m='372610'>point</span> <span m='372830'>is</span>
  <span m='373070'>that</span> <span m='373950'>the</span> <span
  m='374200'>nullspace</span> <span m='379630'>of</span> <span
  m='379790'>this</span> <span m='380000'>matrix</span> <span
  m='380430'>is</span> <span m='380550'>just</span> <span
  m='381220'>one-dimensional.</span> <span m='382050'>So</span> <span
  m='382220'>there's</span> <span m='382360'>only</span> <span
  m='382520'>one</span> <span m='382860'>independent</span> <span
  m='383380'>eigenvector</span> <span m='384595'>of</span> <span
  m='384930'>J_1</span> <span m='385570'>with</span> <span
  m='386030'>eigenvalue</span> <span m='386290'>minus</span> <span
  m='386630'>1.</span> <span m='387570'>Whereas</span> <span
  m='387860'>the</span> <span m='387960'>nullspace</span> <span
  m='388710'>of</span> <span m='389580'>this</span> <span
  m='389880'>matrix</span> <span m='390870'>is</span> <span
  m='391410'>two-dimensional.</span> <span m='396550'>There</span> <span
  m='396810'>are</span> <span m='396980'>two</span> <span
  m='397600'>independent</span> <span m='398140'>eigenvectors</span> <span
  m='398970'>with</span> <span m='399230'>eigenvalue</span> <span
  m='399800'>minus</span> <span m='400170'>1.</span> <span m='401130'>So</span>
  <span m='402300'>the</span> <span m='402440'>dimension--</span> <span
  m='404520'>the</span> <span m='404670'>nullspace</span> <span
  m='406170'>of</span> <span m='407430'>J_1</span> <span m='407840'>plus</span>
  <span m='408060'>the</span> <span m='408190'>identity,</span> <span
  m='409390'>this</span> <span m='409630'>is</span> <span m='411340'>1,</span>
  <span m='412550'>and</span> <span m='412720'>this</span> <span
  m='412910'>is</span> <span m='413080'>2.</span> <span m='414650'>So</span>
  <span m='415830'>they</span> <span m='415970'>cannot</span> <span
  m='416470'>possibly</span> <span m='417040'>be</span> <span
  m='418860'>similar.</span> </p><p><span m='422890'>Good.</span> <span
  m='423200'>So</span> <span m='423350'>that</span> <span
  m='423560'>completes</span> <span m='424040'>the</span> <span
  m='424160'>problem.</span> <span m='424820'>It's</span> <span
  m='425040'>a</span> <span m='425110'>nice</span> <span
  m='425380'>exercise</span> <span m='426060'>to</span> <span
  m='426260'>do</span> <span m='426470'>this</span> <span m='426740'>more</span>
  <span m='427000'>generally.</span> <span m='428030'>And</span> <span
  m='428480'>you</span> <span m='428650'>can</span> <span m='429150'>use</span>
  <span m='429440'>these</span> <span m='429770'>techniques</span> <span
  m='431030'>not</span> <span m='431200'>just</span> <span
  m='431350'>looking</span> <span m='431610'>at</span> <span
  m='431910'>the</span> <span m='433500'>number</span> <span
  m='433790'>of</span> <span m='433890'>independent</span> <span
  m='435750'>eigenvectors</span> <span m='436280'>and</span> <span
  m='436440'>the</span> <span m='436520'>nullspace</span> <span
  m='437020'>of</span> <span m='437460'>your</span> <span m='439520'>J</span>
  <span m='439770'>minus</span> <span m='440170'>lambda*I</span> <span
  m='440740'>matrix,</span> <span m='441250'>but</span> <span
  m='441370'>also</span> <span m='441630'>powers</span> <span
  m='441930'>of</span> <span m='442230'>J</span> <span m='442410'>minus</span>
  <span m='442730'>lambda</span> <span m='443060'>I</span> <span m='443340'>and
  their</span> <span m='443420'>nullspaces.</span> <span m='444710'>You</span>
  <span m='444860'>can</span> <span m='445410'>use</span> <span
  m='445710'>this</span> <span m='446010'>to</span> <span m='447040'>show</span>
  <span m='447250'>that</span> <span m='447380'>any</span> <span
  m='447660'>two</span> <span m='448690'>matrices</span> <span
  m='449130'>in</span> <span m='449430'>Jordan</span> <span
  m='449660'>normal</span> <span m='449950'>form</span> <span
  m='450790'>that</span> <span m='450910'>are</span> <span
  m='451010'>different</span> <span m='451470'>are</span> <span
  m='451680'>not</span> <span m='452720'>similar.</span> <span
  m='453500'>This</span> <span m='453650'>same</span> <span
  m='454110'>method</span> <span m='454390'>works.</span> <span
  m='454770'>And</span> <span m='454920'>that's</span> <span m='455260'>a</span>
  <span m='456020'>nice</span> <span m='456240'>exercise</span> <span
  m='456750'>if</span> <span m='456850'>you</span> <span m='456960'>want</span>
  <span m='457070'>to</span> <span m='457110'>go</span> <span
  m='457380'>a</span> <span m='457480'>little</span> <span
  m='457650'>further</span> <span m='458030'>with</span> <span
  m='458830'>similar</span> <span m='459240'>matrices.</span> </p><p><span
  m='461340'>Let's</span> <span m='461560'>just</span> <span
  m='462040'>recap</span> <span m='463130'>the</span> <span
  m='463490'>properties</span> <span m='464380'>we</span> <span
  m='464850'>saw</span> <span m='465150'>here.</span> <span m='465530'>We</span>
  <span m='465650'>saw</span> <span m='465840'>that</span> <span
  m='465990'>if</span> <span m='466110'>we</span> <span m='466190'>had</span>
  <span m='466830'>two</span> <span m='467040'>similar</span> <span
  m='467380'>matrices,</span> <span m='468180'>then</span> <span
  m='468340'>any</span> <span m='468500'>polynomials</span> <span
  m='469310'>in</span> <span m='469460'>those</span> <span
  m='469590'>matrices</span> <span m='470400'>were</span> <span
  m='470630'>similar.</span> <span m='471840'>And</span> <span
  m='472280'>we</span> <span m='472640'>saw</span> <span m='472900'>that</span>
  <span m='473690'>if</span> <span m='474290'>we</span> <span
  m='474450'>have</span> <span m='474750'>two</span> <span
  m='474950'>matrices</span> <span m='476200'>that</span> <span
  m='476550'>have</span> <span m='477180'>the</span> <span
  m='477350'>same</span> <span m='478040'>distinct</span> <span
  m='478970'>eigenvalues,</span> <span m='479590'>then</span> <span
  m='481300'>they're</span> <span m='481440'>similar.</span> <span
  m='482030'>And</span> <span m='482130'>we</span> <span m='482240'>saw</span>
  <span m='482460'>that,</span> <span m='483550'>in</span> <span
  m='483750'>a</span> <span m='483840'>special</span> <span
  m='484190'>case,</span> <span m='484450'>we</span> <span m='484550'>saw</span>
  <span m='484750'>that</span> <span m='484970'>two</span> <span
  m='485860'>matrices</span> <span m='486330'>in</span> <span
  m='486460'>Jordan</span> <span m='486780'>normal</span> <span
  m='487120'>form</span> <span m='487390'>that</span> <span
  m='487530'>are</span> <span m='487620'>different</span> <span
  m='488110'>are</span> <span m='488550'>not</span> <span
  m='489000'>similar.</span> <span m='490360'>Thanks.</span> </p>
embedded_media:
  - uid: 46bc3b36960cf51f5745467f3bf08132
    parent_uid: faedf63c3bdc84f2e5ad455b6295d011
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: KUuxdk_V7To
  - uid: f887d0af7e608e2984924794d53cd313
    parent_uid: faedf63c3bdc84f2e5ad455b6295d011
    id: 3Play-3PlayYouTubeid-SRT
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: KUuxdk_V7To
  - uid: 8b0d0bb385e820a82e9ad9c02bf1b3b2
    parent_uid: faedf63c3bdc84f2e5ad455b6295d011
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/itunes-u/similar-matrices/id488155309?i=108454308
  - uid: 555e6a0cecb5f73a12210678d169ca5e
    parent_uid: faedf63c3bdc84f2e5ad455b6295d011
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      http://www.archive.org/download/MIT18.06SCF11/MIT18_06SC_110607_B1_300k.mp4
  - uid: 4888a3428a980adc1640fd7b2f945f3c
    parent_uid: faedf63c3bdc84f2e5ad455b6295d011
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/KUuxdk_V7To/default.jpg'
  - uid: 3c350e1d38a9e47001951f2def503bc8
    parent_uid: faedf63c3bdc84f2e5ad455b6295d011
    id: KUuxdk_V7To.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/problem-solving-similar-matrices/KUuxdk_V7To.srt
  - uid: 7c03bd664692be899cb2eec9ecfade5d
    parent_uid: faedf63c3bdc84f2e5ad455b6295d011
    id: KUuxdk_V7To.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/problem-solving-similar-matrices/KUuxdk_V7To.pdf
  - uid: 28971652fe7b1ed96b6e0ba8b1ae55a5
    parent_uid: faedf63c3bdc84f2e5ad455b6295d011
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: eb302cdd7530635166881d4941e76231
    parent_uid: faedf63c3bdc84f2e5ad455b6295d011
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
