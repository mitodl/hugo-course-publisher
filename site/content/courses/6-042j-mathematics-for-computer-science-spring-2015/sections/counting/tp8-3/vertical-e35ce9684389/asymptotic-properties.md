---
title: Asymptotic Properties
uid: d69ccd43e66912224e0dbac10b67e72e
parent_uid: f5736212af2cef408c06bbea00eb25c6
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-e35ce9684389/asymptotic-properties
short_url: asymptotic-properties
inline_embed_id: 99966756asymptoticproperties44981459
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='315'>PROFESSOR: An</span> <span m='630'>advantage</span> <span
  m='1570'>of</span> <span m='1740'>expressing</span> <span m='2740'>the</span>
  <span m='4620'>asymptotic</span> <span m='5260'>notations,</span> <span
  m='5870'>in</span> <span m='5970'>terms</span> <span m='6360'>of</span> <span
  m='6510'>limits,</span> <span m='7640'>is</span> <span m='7980'>that</span>
  <span m='8290'>a</span> <span m='8400'>bunch</span> <span m='8590'>of</span>
  <span m='8650'>their</span> <span m='8750'>properties</span> <span
  m='9150'>then</span> <span m='9290'>become</span> <span
  m='9830'>immediately</span> <span m='10250'>obvious.</span> <span
  m='10660'>Here's</span> <span m='10880'>one.</span> <span m='12010'>If</span>
  <span m='12230'>f</span> <span m='12490'>is</span> <span
  m='13070'>little</span> <span m='13350'>o of</span> <span m='13520'>g,</span>
  <span m='14100'>or</span> <span m='14330'>f</span> <span m='14540'>is</span>
  <span m='14680'>asymptotically</span> <span m='15410'>equal</span> <span
  m='15680'>to</span> <span m='15800'>g,</span> <span m='16410'>then,</span>
  <span m='16650'>in</span> <span m='16760'>fact,</span> <span
  m='17710'>f</span> <span m='18050'>is</span> <span m='18330'>big</span> <span
  m='18600'>o</span> <span m='18810'>of</span> <span m='18930'>g.</span> <span
  m='19690'>Or</span> <span m='19840'>we</span> <span m='19940'>can</span> <span
  m='20210'>reason</span> <span m='20480'>about</span> <span
  m='20690'>this</span> <span m='20850'>informally</span> <span
  m='21620'>by</span> <span m='21790'>saying</span> <span m='22200'>that</span>
  <span m='22340'>the</span> <span m='22400'>first</span> <span
  m='22710'>one</span> <span m='22850'>means</span> <span m='23140'>that</span>
  <span m='23290'>f</span> <span m='23510'>is</span> <span m='23650'>much</span>
  <span m='23910'>less</span> <span m='24170'>than</span> <span
  m='24320'>g,</span> <span m='24900'>and</span> <span m='25090'>the</span>
  <span m='25150'>second</span> <span m='25490'>one</span> <span
  m='25700'>means</span> <span m='26000'>that</span> <span m='26160'>f</span>
  <span m='26380'>is</span> <span m='26540'>about</span> <span
  m='26900'>the</span> <span m='26970'>same</span> <span m='27280'>as</span>
  <span m='27420'>g,</span> <span m='27950'>and</span> <span
  m='28170'>the</span> <span m='28230'>final</span> <span m='28590'>one</span>
  <span m='28780'>means</span> <span m='29070'>that</span> <span
  m='29290'>f</span> <span m='29560'>is</span> <span m='29690'>roughly</span>
  <span m='30230'>less.</span> <span m='30900'>So</span> <span
  m='31370'>being</span> <span m='31590'>about</span> <span m='31880'>the</span>
  <span m='31950'>same</span> <span m='32299'>and</span> <span
  m='32830'>definitely</span> <span m='33370'>less,</span> <span m='33740'>and
  certainly</span> <span m='34410'>this</span> <span m='34880'>implies</span>
  <span m='35560'>roughly</span> <span m='35950'>less.</span> </p><p><span
  m='36540'>But</span> <span m='36820'>we</span> <span m='36920'>can</span>
  <span m='37120'>in</span> <span m='37200'>fact</span> <span
  m='37510'>be</span> <span m='37760'>entirely</span> <span
  m='38250'>precise</span> <span m='38800'>just</span> <span
  m='38990'>using</span> <span m='39230'>the</span> <span
  m='39310'>definitions,</span> <span m='39980'>because</span> <span
  m='40760'>f</span> <span m='40980'>equals</span> <span m='41310'>o</span>
  <span m='41470'>of</span> <span m='41560'>g</span> <span
  m='41770'>means</span> <span m='42040'>the</span> <span m='42120'>limit</span>
  <span m='42410'>of</span> <span m='42530'>f</span> <span m='42690'>over</span>
  <span m='42910'>g</span> <span m='43090'>is</span> <span m='43220'>0.</span>
  <span m='44320'>And</span> <span m='44650'>f</span> <span m='45140'>is</span>
  <span m='45350'>asymptotically</span> <span m='46120'>equal</span> <span
  m='46440'>to</span> <span m='46590'>g</span> <span m='46810'>means</span>
  <span m='47090'>that</span> <span m='47250'>the</span> <span
  m='47330'>limit</span> <span m='47620'>of</span> <span m='47740'>f</span>
  <span m='47910'>over</span> <span m='48120'>g</span> <span m='48280'>is</span>
  <span m='48420'>1.</span> <span m='49230'>And</span> <span
  m='49490'>the</span> <span m='49560'>definition</span> <span
  m='50150'>of</span> <span m='50270'>f</span> <span m='50520'>equals</span>
  <span m='50940'>big</span> <span m='51180'>o</span> <span m='51340'>of</span>
  <span m='51450'>g</span> <span m='51820'>is</span> <span m='51990'>that</span>
  <span m='52140'>the</span> <span m='52230'>limit</span> <span
  m='52560'>is</span> <span m='52710'>finite.</span> <span m='53700'>And</span>
  <span m='53960'>clearly,</span> <span m='54370'>if</span> <span
  m='54520'>it's</span> <span m='54650'>0</span> <span m='54900'>or</span> <span
  m='55060'>1,</span> <span m='55460'>then</span> <span m='55670'>it's</span>
  <span m='55830'>finite.</span> </p><p><span m='57610'>Another</span> <span
  m='57940'>such</span> <span m='58200'>property</span> <span
  m='58710'>is</span> <span m='59010'>that</span> <span m='59180'>if</span>
  <span m='59370'>f</span> <span m='59630'>is</span> <span m='59760'>much</span>
  <span m='60040'>less</span> <span m='60290'>than</span> <span
  m='60450'>g,</span> <span m='61260'>then</span> <span m='61500'>g</span> <span
  m='61840'>is</span> <span m='62030'>not</span> <span m='63000'>roughly</span>
  <span m='63570'>less</span> <span m='63910'>than</span> <span
  m='64140'>f.</span> <span m='65300'>More</span> <span
  m='65540'>precisely,</span> <span m='66630'>if</span> <span m='66820'>f</span>
  <span m='67070'>is</span> <span m='67170'>a</span> <span
  m='67240'>little</span> <span m='67620'>o of</span> <span m='67700'>g,</span>
  <span m='67920'>then</span> <span m='68090'>g</span> <span m='68270'>is</span>
  <span m='68430'>not</span> <span m='69070'>big</span> <span m='69310'>o</span>
  <span m='69630'>of</span> <span m='69820'>f.</span> <span m='70560'>The</span>
  <span m='70700'>left</span> <span m='71040'>hand</span> <span
  m='71260'>side</span> <span m='71550'>says</span> <span m='71840'>that</span>
  <span m='72000'>the</span> <span m='72080'>limit</span> <span
  m='72410'>of</span> <span m='72540'>f</span> <span m='72710'>over</span> <span
  m='72950'>g</span> <span m='73210'>is</span> <span m='73340'>0.</span> <span
  m='74420'>But</span> <span m='74720'>that</span> <span
  m='74900'>implies</span> <span m='75450'>that</span> <span
  m='75610'>the</span> <span m='75690'>limit</span> <span m='76030'>of</span>
  <span m='76160'>g</span> <span m='76460'>over</span> <span m='76870'>f</span>
  <span m='77300'>is</span> <span m='77510'>1</span> <span m='77750'>over</span>
  <span m='78020'>0,</span> <span m='78390'>or</span> <span
  m='78540'>infinity,</span> <span m='79490'>which</span> <span
  m='79760'>means</span> <span m='80030'>it's</span> <span m='80240'>not</span>
  <span m='80490'>finite,</span> <span m='81320'>so</span> <span
  m='81580'>g</span> <span m='81950'>is</span> <span m='82140'>not</span> <span
  m='82640'>a</span> <span m='83180'>big</span> <span m='83400'>o</span> <span
  m='83760'>of</span> <span m='84120'>f.</span> </p><p><span
  m='86310'>PROFESSOR: Now,</span> <span m='86940'>the</span> <span
  m='87110'>usual</span> <span m='87670'>way</span> <span m='87970'>that</span>
  <span m='88340'>big o</span> <span m='88740'>is</span> <span
  m='88850'>defined</span> <span m='89230'>in</span> <span m='89310'>the</span>
  <span m='89380'>literature</span> <span m='89950'>doesn't</span> <span
  m='90280'>mention</span> <span m='90600'>limits</span> <span
  m='90930'>at</span> <span m='91010'>all.</span> <span m='91390'>And,</span>
  <span m='91550'>in</span> <span m='91650'>fact,</span> <span
  m='92270'>as</span> <span m='92460'>I</span> <span m='92520'>said,</span>
  <span m='92770'>the</span> <span m='92840'>definition</span> <span
  m='93360'>really</span> <span m='93650'>isn't</span> <span m='93980'>a</span>
  <span m='94060'>limit,</span> <span m='94460'>it's</span> <span
  m='94680'>a</span> <span m='94760'>limsup.</span> <span m='96120'>And</span>
  <span m='96530'>let</span> <span m='96780'>me</span> <span
  m='97520'>show</span> <span m='97820'>you</span> <span m='97980'>the</span>
  <span m='98550'>standard</span> <span m='99010'>definition</span> <span
  m='99580'>and</span> <span m='99690'>then</span> <span
  m='99820'>explain</span> <span m='100390'>why</span> <span
  m='101460'>the</span> <span m='101620'>limsup</span> <span
  m='101830'>soup</span> <span m='102120'>captures</span> <span
  m='102550'>it</span> <span m='102660'>and</span> <span m='102800'>is</span>
  <span m='102930'>needed.</span> </p><p><span m='103880'>So</span> <span
  m='104680'>the</span> <span m='104750'>official</span> <span
  m='105110'>definition</span> <span m='105650'>of</span> <span
  m='105780'>f</span> <span m='106130'>is</span> <span m='106550'>big</span>
  <span m='106770'>o</span> <span m='106980'>of</span> <span m='107110'>g</span>
  <span m='107530'>is</span> <span m='107970'>that</span> <span
  m='108830'>there's</span> <span m='109070'>some</span> <span
  m='109390'>constant</span> <span m='109980'>multiplier,</span> <span
  m='110820'>c,</span> <span m='111760'>that</span> <span m='112040'>you</span>
  <span m='112160'>can</span> <span m='112370'>amplify</span> <span
  m='113030'>g</span> <span m='113290'>by,</span> <span m='114350'>such</span>
  <span m='114800'>that</span> <span m='115150'>once</span> <span
  m='116680'>g</span> <span m='117120'>is</span> <span
  m='117410'>amplified</span> <span m='117990'>by</span> <span
  m='118120'>the</span> <span m='118200'>factor</span> <span
  m='118650'>c,</span> <span m='119420'>then,</span> <span m='119600'>in</span>
  <span m='119710'>fact,</span> <span m='120440'>f</span> <span
  m='120820'>is</span> <span m='121050'>less</span> <span m='121310'>than</span>
  <span m='121410'>or</span> <span m='121560'>equal</span> <span
  m='121790'>to</span> <span m='121910'>c</span> <span m='122130'>times</span>
  <span m='122500'>g.</span> <span m='123100'>But</span> <span
  m='123420'>this</span> <span m='124400'>may</span> <span m='124650'>not</span>
  <span m='124720'>hold</span> <span m='125110'>right</span> <span
  m='125280'>at</span> <span m='125370'>the</span> <span
  m='125450'>beginning.</span> <span m='125970'>There's</span> <span
  m='126120'>a</span> <span m='126170'>certain</span> <span
  m='126530'>point,</span> <span m='126910'>n</span> <span m='127130'>0,</span>
  <span m='128039'>after</span> <span m='128400'>which</span> <span
  m='128639'>it</span> <span m='128699'>holds</span> <span
  m='129000'>forever.</span> <span m='130229'>Let's</span> <span
  m='130500'>try</span> <span m='130680'>to</span> <span
  m='130780'>illustrate</span> <span m='131410'>this</span> <span
  m='132580'>complicated</span> <span m='133320'>alternation</span> <span
  m='133950'>of</span> <span m='134050'>quantifiers</span> <span
  m='134700'>expression</span> <span m='135500'>with</span> <span
  m='136030'>a</span> <span m='136070'>diagram</span> <span
  m='136690'>that</span> <span m='136810'>may</span> <span
  m='136960'>make</span> <span m='137170'>it</span> <span
  m='137260'>clearer.</span> </p><p><span m='137630'>So</span> <span
  m='137810'>suppose</span> <span m='138300'>that</span> <span
  m='138830'>I</span> <span m='139000'>want</span> <span m='139240'>to</span>
  <span m='139380'>express</span> <span m='139990'>the</span> <span
  m='140070'>fact</span> <span m='140450'>that</span> <span m='140710'>f</span>
  <span m='141040'>is</span> <span m='141830'>big</span> <span
  m='142090'>o</span> <span m='142270'>of</span> <span m='142370'>g,</span>
  <span m='142690'>where</span> <span m='142920'>f</span> <span
  m='143150'>is</span> <span m='143470'>it</span> <span m='143770'>a</span>
  <span m='143850'>green</span> <span m='144710'>line.</span> <span
  m='145620'>So</span> <span m='145870'>that</span> <span
  m='146120'>green</span> <span m='146460'>line</span> <span
  m='146760'>is</span> <span m='146920'>the</span> <span m='147000'>graph</span>
  <span m='147370'>of</span> <span m='147490'>f</span> <span
  m='147690'>of</span> <span m='147860'>x,</span> <span m='148600'>the</span>
  <span m='148710'>function.</span> <span m='149630'>And</span> <span
  m='150140'>g</span> <span m='150590'>in</span> <span m='150770'>blue</span>
  <span m='151640'>is</span> <span m='152720'>shown--</span> <span
  m='153310'>and</span> <span m='153510'>as</span> <span m='153620'>a</span>
  <span m='153670'>matter</span> <span m='153880'>of</span> <span
  m='153940'>fact,</span> <span m='154510'>g</span> <span m='154800'>of</span>
  <span m='154940'>x</span> <span m='155270'>is</span> <span
  m='155930'>less</span> <span m='156280'>than</span> <span m='156410'>or</span>
  <span m='156520'>equal</span> <span m='156900'>to</span> <span
  m='157740'>f</span> <span m='158000'>of x.</span> <span m='158770'>But</span>
  <span m='159080'>nevertheless,</span> <span m='160190'>f</span> <span
  m='160510'>is</span> <span m='160650'>going</span> <span m='160810'>to</span>
  <span m='160910'>be</span> <span m='162160'>big o</span> <span
  m='162600'>of</span> <span m='162740'>g,</span> <span
  m='163460'>because</span> <span m='164580'>if</span> <span
  m='164860'>you</span> <span m='164990'>multiply</span> <span
  m='165720'>g</span> <span m='165990'>by</span> <span m='166200'>a</span> <span
  m='166250'>constant,</span> <span m='167140'>it</span> <span
  m='167440'>becomes</span> <span m='168570'>sort</span> <span
  m='168810'>of</span> <span m='169030'>shifting</span> <span
  m='169500'>it</span> <span m='169590'>up</span> <span m='169840'>to</span>
  <span m='170030'>be</span> <span m='170270'>this</span> <span
  m='170550'>constant</span> <span m='171090'>times</span> <span
  m='171400'>g.</span> <span m='172150'>It</span> <span
  m='172370'>becomes</span> <span m='172750'>this</span> <span
  m='172930'>purple</span> <span m='173500'>curve,</span> <span
  m='174330'>and</span> <span m='174530'>the</span> <span
  m='174600'>purple</span> <span m='175020'>curve,</span> <span
  m='175460'>it</span> <span m='175620'>gets</span> <span m='175910'>to</span>
  <span m='176030'>be</span> <span m='176230'>above</span> <span
  m='176620'>the</span> <span m='176700'>green</span> <span
  m='177070'>curve,</span> <span m='177820'>from</span> <span
  m='178160'>a</span> <span m='178210'>certain</span> <span
  m='178490'>point</span> <span m='178800'>on.</span> <span
  m='179050'>That's</span> <span m='179330'>n</span> <span m='179520'>0.</span>
  </p><p><span m='180330'>So</span> <span m='180740'>by</span> <span
  m='181360'>raising</span> <span m='182090'>up</span> <span
  m='182740'>the</span> <span m='182870'>blue</span> <span
  m='183200'>curve,</span> <span m='183540'>g,</span> <span m='184130'>by</span>
  <span m='184450'>an</span> <span m='184530'>amount</span> <span
  m='184920'>c,</span> <span m='185800'>to</span> <span m='185930'>get</span>
  <span m='186130'>it</span> <span m='186260'>to</span> <span
  m='186370'>be</span> <span m='186540'>this</span> <span
  m='186740'>purple</span> <span m='187130'>curve,</span> <span
  m='187530'>the</span> <span m='187610'>purple</span> <span
  m='187960'>curve</span> <span m='188220'>gets</span> <span
  m='188460'>above</span> <span m='189340'>f</span> <span m='190310'>from</span>
  <span m='190550'>a</span> <span m='190590'>certain</span> <span
  m='190930'>point</span> <span m='191230'>n</span> <span m='191420'>0</span>
  <span m='191776'>on.</span> <span m='192490'>And</span> <span
  m='192710'>that's</span> <span m='192990'>why</span> <span m='193330'>f</span>
  <span m='194210'>is</span> <span m='195190'>big</span> <span
  m='195440'>o</span> <span m='195610'>of</span> <span m='195730'>g.</span>
  <span m='196220'>Now,</span> <span m='196610'>of</span> <span
  m='196670'>course,</span> <span m='196920'>multiplying</span> <span
  m='198530'>the</span> <span m='198830'>blue</span> <span
  m='199110'>curve,</span> <span m='199700'>g,</span> <span m='200020'>by</span>
  <span m='200210'>a</span> <span m='200260'>constant</span> <span
  m='200870'>doesn't</span> <span m='201280'>raise</span> <span
  m='201490'>it</span> <span m='201570'>up</span> <span m='201710'>a</span>
  <span m='201750'>fixed</span> <span m='202040'>amount.</span> <span
  m='202350'>It</span> <span m='202810'>alters</span> <span
  m='203280'>it,</span> <span m='203430'>but</span> <span m='204010'>if</span>
  <span m='204280'>we</span> <span m='204460'>imagine</span> <span
  m='205080'>that</span> <span m='205290'>our</span> <span
  m='205500'>curve</span> <span m='205930'>was</span> <span m='206170'>a</span>
  <span m='206240'>log</span> <span m='206650'>scale,</span> <span
  m='207380'>than,</span> <span m='207540'>in</span> <span
  m='207640'>fact,</span> <span m='207940'>multiplying</span> <span
  m='208470'>g</span> <span m='209110'>by</span> <span m='210360'>c</span> <span
  m='210830'>is</span> <span m='211050'>the</span> <span m='211120'>same</span>
  <span m='211440'>as</span> <span m='211650'>adding</span> <span
  m='212030'>log</span> <span m='212410'>c</span> <span m='212940'>on</span>
  <span m='213140'>a</span> <span m='213220'>log</span> <span
  m='213520'>scale.</span> <span m='213890'>So</span> <span
  m='214060'>the</span> <span m='214150'>picture</span> <span
  m='214430'>is</span> <span m='214520'>actually</span> <span
  m='214840'>accurate</span> <span m='215920'>if</span> <span
  m='216100'>the</span> <span m='216190'>vertical</span> <span
  m='216630'>scale</span> <span m='217030'>is</span> <span
  m='217160'>logarithmic.</span> </p><p><span m='219550'>So</span> <span
  m='219780'>using</span> <span m='220130'>this</span> <span
  m='220290'>standard</span> <span m='220680'>definition,</span> <span
  m='221630'>I</span> <span m='221780'>can</span> <span
  m='221950'>explain</span> <span m='222420'>why</span> <span
  m='223410'>in</span> <span m='223720'>the</span> <span
  m='224080'>equivalent</span> <span m='224580'>definition</span> <span
  m='225040'>of</span> <span m='225120'>terms</span> <span m='225440'>of</span>
  <span m='225580'>limit,</span> <span m='225850'>I</span> <span
  m='225910'>couldn't</span> <span m='226170'>say</span> <span
  m='226410'>limit,</span> <span m='226770'>I</span> <span
  m='226840'>needed</span> <span m='227150'>to</span> <span
  m='227220'>say</span> <span m='227720'>limsup.</span> <span
  m='228640'>Here's</span> <span m='229520'>what</span> <span
  m='229740'>limsup</span> <span m='230180'>does</span> <span
  m='230410'>for</span> <span m='230660'>us.</span> <span
  m='231050'>Suppose</span> <span m='231450'>I</span> <span
  m='231520'>have</span> <span m='231660'>a</span> <span
  m='231710'>function,</span> <span m='232180'>f,</span> <span
  m='232420'>that's</span> <span m='232590'>say,</span> <span
  m='232900'>less</span> <span m='233130'>than</span> <span m='233220'>or</span>
  <span m='233250'>equal</span> <span m='233420'>to</span> <span
  m='233510'>2g.</span> <span m='234410'>Which</span> <span
  m='234760'>means</span> <span m='235120'>that,</span> <span
  m='235480'>surely,</span> <span m='235950'>f</span> <span m='236190'>is</span>
  <span m='236520'>big</span> <span m='236740'>o</span> <span
  m='236880'>of</span> <span m='236990'>g,</span> <span
  m='237260'>according</span> <span m='237660'>to</span> <span
  m='237840'>the</span> <span m='238190'>previous</span> <span
  m='238720'>definition,</span> <span m='239580'>because</span> <span
  m='239800'>you</span> <span m='239870'>amplify</span> <span
  m='240300'>g</span> <span m='240520'>by</span> <span m='240690'>2</span> <span
  m='240960'>and</span> <span m='241080'>you</span> <span m='241150'>get</span>
  <span m='241300'>above</span> <span m='241610'>f.</span> <span
  m='242750'>The</span> <span m='242870'>problem</span> <span
  m='243290'>is</span> <span m='243670'>that</span> <span m='243940'>f</span>
  <span m='244180'>of</span> <span m='244650'>n</span> <span
  m='244860'>over</span> <span m='245120'>g</span> <span m='245310'>of n</span>
  <span m='245600'>may</span> <span m='245770'>have</span> <span
  m='246030'>no</span> <span m='246190'>limits,</span> <span
  m='246650'>so</span> <span m='246860'>I</span> <span m='246930'>can't</span>
  <span m='247250'>simply</span> <span m='247610'>say</span> <span
  m='248340'>that</span> <span m='248560'>f</span> <span m='248770'>is</span>
  <span m='248920'>o</span> <span m='249120'>of</span> <span
  m='249220'>g,</span> <span m='249460'>because</span> <span
  m='249960'>the</span> <span m='250050'>limit</span> <span m='250790'>of</span>
  <span m='251320'>f</span> <span m='251650'>over</span> <span
  m='251920'>g</span> <span m='253110'>is</span> <span m='253700'>finite.</span>
  </p><p><span m='255550'>Let's</span> <span m='255780'>see</span> <span
  m='255900'>how</span> <span m='256290'>that</span> <span
  m='256470'>could</span> <span m='256600'>happen.</span> <span
  m='257880'>Suppose</span> <span m='258480'>that</span> <span
  m='258690'>f</span> <span m='258930'>is</span> <span m='259070'>in</span>
  <span m='259170'>fact</span> <span m='259640'>equal</span> <span
  m='260329'>to</span> <span m='261640'>g</span> <span m='262860'>times</span>
  <span m='263220'>a</span> <span m='263270'>number</span> <span
  m='263600'>that</span> <span m='263760'>varies</span> <span
  m='264160'>between</span> <span m='264530'>1</span> <span
  m='264750'>and</span> <span m='264900'>2.</span> <span
  m='265450'>That's</span> <span m='265690'>an</span> <span
  m='265780'>example</span> <span m='266550'>where</span> <span
  m='268010'>sin</span> <span m='268460'>of</span> <span m='268580'>n</span>
  <span m='268830'>pi</span> <span m='269090'>over</span> <span
  m='269350'>2</span> <span m='269900'>varies</span> <span
  m='270400'>between</span> <span m='270790'>0,</span> <span
  m='271200'>1,</span> <span m='271500'>and</span> <span m='272040'>minus</span>
  <span m='272430'>1.</span> <span m='272720'>And</span> <span
  m='272880'>you</span> <span m='272950'>square</span> <span
  m='273330'>it,</span> <span m='273390'>it</span> <span
  m='273520'>becomes</span> <span m='273890'>0</span> <span m='274320'>or</span>
  <span m='274580'>1.</span> <span m='275160'>And</span> <span
  m='275380'>you</span> <span m='275470'>add</span> <span m='275630'>1</span>
  <span m='275820'>to</span> <span m='275980'>it,</span> <span
  m='276060'>it</span> <span m='276140'>becomes</span> <span m='276490'>1</span>
  <span m='276680'>or</span> <span m='276770'>2.</span> </p><p><span
  m='276990'>So</span> <span m='277170'>this</span> <span m='277410'>is</span>
  <span m='277550'>an</span> <span m='277640'>expression,</span> <span
  m='278580'>which</span> <span m='278910'>as</span> <span m='279120'>n</span>
  <span m='279460'>grows,</span> <span m='280210'>alternates</span> <span
  m='280940'>between</span> <span m='281280'>the</span> <span
  m='281350'>values</span> <span m='281810'>1</span> <span m='282000'>and</span>
  <span m='282160'>2.</span> <span m='282930'>And I'm</span> <span
  m='283420'>multiplying</span> <span m='284160'>g</span> <span m='284350'>of
  n</span> <span m='286340'>by</span> <span m='286450'>this</span> <span
  m='287100'>factor</span> <span m='287500'>that's</span> <span
  m='287700'>either</span> <span m='288220'>1</span> <span m='288620'>or</span>
  <span m='288720'>2.</span> <span m='289380'>But</span> <span
  m='290000'>the</span> <span m='290180'>limit</span> <span m='290680'>of</span>
  <span m='290870'>f</span> <span m='291160'>of n</span> <span
  m='291490'>over</span> <span m='291770'>g</span> <span m='292010'>of</span>
  <span m='292150'>n</span> <span m='292560'>does</span> <span
  m='292810'>not</span> <span m='293090'>exist,</span> <span
  m='294130'>it's</span> <span m='294480'>alternating</span> <span
  m='295290'>between</span> <span m='299010'>1</span> <span
  m='299550'>and</span> <span m='299750'>2.</span> <span m='301620'>On</span>
  <span m='301930'>the</span> <span m='302070'>other</span> <span
  m='302230'>hand,</span> <span m='303060'>the</span> <span
  m='303080'>limsup</span> <span m='303970'>f</span> <span m='304070'>of</span>
  <span m='304170'>n</span> <span m='304860'>over</span> <span
  m='305150'>g</span> <span m='305480'>is</span> <span m='305690'>2,</span>
  <span m='307180'>which</span> <span m='307450'>is</span> <span
  m='307570'>finite,</span> <span m='308220'>and</span> <span
  m='308580'>therefore,</span> <span m='309160'>according</span> <span
  m='309630'>to</span> <span m='309780'>the</span> <span
  m='309870'>limsup</span> <span m='310370'>definition,</span> <span
  m='310960'>indeed</span> <span m='311450'>f</span> <span m='311850'>is</span>
  <span m='312620'>o</span> <span m='312850'>of</span> <span
  m='312990'>g.</span> </p><p><span m='313810'>Now,</span> <span
  m='314000'>the</span> <span m='314110'>technical</span> <span
  m='314540'>definition</span> <span m='315010'>of</span> <span
  m='315140'>limsup</span> <span m='315600'>is</span> <span
  m='315700'>one</span> <span m='315900'>that</span> <span m='316030'>you</span>
  <span m='316130'>can</span> <span m='316460'>read</span> <span
  m='316720'>in</span> <span m='316820'>the</span> <span m='316900'>text</span>
  <span m='317390'>or</span> <span m='317540'>find</span> <span
  m='317800'>in</span> <span m='317890'>a</span> <span
  m='317950'>calculus</span> <span m='318510'>book.</span> <span
  m='319990'>It's</span> <span m='320510'>basically</span> <span
  m='321130'>the</span> <span m='321260'>largest</span> <span
  m='321760'>limit</span> <span m='322180'>point</span> <span
  m='322840'>of</span> <span m='323120'>the</span> <span
  m='323360'>fraction</span> <span m='324570'>f</span> <span m='324820'>of
  n</span> <span m='325120'>over</span> <span m='325380'>g</span> <span
  m='325590'>of n.</span> <span m='326190'>And</span> <span m='326400'>if</span>
  <span m='326500'>you</span> <span m='326580'>don't</span> <span
  m='326790'>know</span> <span m='326880'>what</span> <span m='326980'>a</span>
  <span m='327020'>limit</span> <span m='327300'>point</span> <span
  m='327560'>is,</span> <span m='329020'>it's</span> <span
  m='330230'>stuff</span> <span m='330590'>that</span> <span
  m='330850'>we</span> <span m='330980'>don't</span> <span
  m='331170'>need</span> <span m='331300'>to</span> <span m='331380'>go</span>
  <span m='331600'>into.</span> <span m='332370'>But</span> <span
  m='332530'>I</span> <span m='332810'>did</span> <span m='332990'>want</span>
  <span m='333200'>you</span> <span m='333260'>to</span> <span
  m='333320'>understand</span> <span m='333780'>why</span> <span
  m='334090'>formally,</span> <span m='334700'>we</span> <span
  m='334840'>need</span> <span m='335060'>limsup.</span> <span
  m='335580'>In</span> <span m='335700'>most</span> <span
  m='335980'>cases,</span> <span m='337420'>the</span> <span
  m='337760'>limit</span> <span m='338040'>exists,</span> <span
  m='338680'>and</span> <span m='338940'>we</span> <span m='339050'>can</span>
  <span m='339270'>use</span> <span m='339550'>the</span> <span
  m='339630'>simpler</span> <span m='340030'>limit</span> <span
  m='340320'>definition,</span> <span m='341210'>rather</span> <span
  m='341650'>than</span> <span m='341880'>the</span> <span
  m='343360'>exists</span> <span m='343830'>a</span> <span
  m='343880'>constant,</span> <span m='344430'>such</span> <span
  m='344700'>that</span> <span m='344830'>for</span> <span
  m='345040'>every</span> <span m='345700'>number</span> <span
  m='346100'>n</span> <span m='346360'>greater</span> <span m='346710'>than
  or</span> <span m='346900'>equal to</span> <span m='347140'>n 0,</span> <span
  m='347470'>et</span> <span m='347720'>cetera,</span> <span
  m='348200'>which</span> <span m='348420'>is</span> <span m='348540'>a</span>
  <span m='348580'>more</span> <span m='348780'>complicated</span> <span
  m='349450'>definition.</span> </p><p><span m='353550'>OK.</span> <span
  m='354300'>Let's</span> <span m='354780'>collect</span> <span
  m='355240'>a</span> <span m='355280'>couple</span> <span m='355590'>of</span>
  <span m='355670'>more</span> <span m='355840'>basic</span> <span
  m='356220'>facts</span> <span m='356710'>about</span> <span
  m='357060'>little</span> <span m='357340'>o</span> <span m='358870'>and</span>
  <span m='359300'>big</span> <span m='359390'>o</span> <span
  m='359690'>that</span> <span m='359880'>we're</span> <span
  m='360190'>going</span> <span m='360330'>to</span> <span
  m='360400'>need.</span> <span m='361070'>Namely,</span> <span
  m='362200'>that</span> <span m='362840'>if</span> <span m='363250'>a</span>
  <span m='363510'>is</span> <span m='363720'>less</span> <span
  m='364000'>than</span> <span m='364180'>b--</span> <span m='364845'>I
  know</span> <span m='365100'>they</span> <span m='365230'>can</span> <span
  m='365380'>be</span> <span m='366070'>negative</span> <span
  m='366510'>numbers.</span> <span m='366970'>I</span> <span
  m='367000'>don't</span> <span m='367150'>care,</span> <span
  m='367770'>but</span> <span m='368060'>real</span> <span
  m='368250'>numbers.</span> <span m='368870'>If</span> <span
  m='369010'>a</span> <span m='369150'>is</span> <span m='369280'>less</span>
  <span m='369500'>than</span> <span m='369640'>b,</span> <span
  m='370150'>then</span> <span m='370460'>x</span> <span m='370770'>to</span>
  <span m='370890'>the</span> <span m='371060'>a</span> <span
  m='371640'>is</span> <span m='371870'>little</span> <span m='372350'>o</span>
  <span m='373010'>of</span> <span m='373210'>x</span> <span
  m='373470'>to</span> <span m='373600'>the</span> <span m='373690'>b.</span>
  <span m='374540'>The</span> <span m='374680'>[? proof file ?]</span> <span
  m='374980'>is</span> <span m='375360'>almost</span> <span
  m='375750'>immediately</span> <span m='376390'>from</span> <span
  m='376620'>the</span> <span m='376690'>definitions,</span> <span
  m='377530'>because</span> <span m='378530'>to</span> <span
  m='378710'>prove</span> <span m='379050'>that</span> <span m='379280'>x</span>
  <span m='379530'>to</span> <span m='379660'>the</span> <span
  m='379810'>a</span> <span m='380210'>is</span> <span m='380260'>little</span>
  <span m='380460'>o</span> <span m='380670'>of</span> <span m='380800'>x</span>
  <span m='381000'>to</span> <span m='381110'>the</span> <span
  m='381190'>b,</span> <span m='381440'>we</span> <span m='381590'>want</span>
  <span m='381770'>to</span> <span m='381830'>look</span> <span
  m='382090'>at</span> <span m='382210'>the</span> <span
  m='382280'>quotient</span> <span m='382820'>of</span> <span
  m='382920'>x</span> <span m='383190'>to</span> <span m='383300'>the</span>
  <span m='383440'>a</span> <span m='383680'>over</span> <span
  m='384000'>x</span> <span m='384240'>to</span> <span m='384360'>the</span>
  <span m='384460'>b.</span> </p><p><span m='385200'>But,</span> <span
  m='385450'>of</span> <span m='385510'>course,</span> <span
  m='385970'>the</span> <span m='386050'>quotient</span> <span
  m='386450'>of</span> <span m='386560'>x</span> <span m='386770'>to</span>
  <span m='386870'>the a</span> <span m='386990'>over</span> <span
  m='387400'>x</span> <span m='387560'>to</span> <span m='387660'>the</span>
  <span m='387750'>b</span> <span m='387890'>is</span> <span
  m='388020'>equal</span> <span m='388230'>to</span> <span m='388330'>1</span>
  <span m='388550'>over</span> <span m='388900'>x</span> <span
  m='389150'>to</span> <span m='389270'>the</span> <span m='389350'>b</span>
  <span m='389550'>minus</span> <span m='390020'>a.</span> <span
  m='390760'>And</span> <span m='391130'>since</span> <span m='391590'>a</span>
  <span m='391750'>is</span> <span m='391880'>less</span> <span
  m='392110'>than</span> <span m='392230'>b, b</span> <span
  m='392520'>minus</span> <span m='392870'>a</span> <span m='392910'>is</span>
  <span m='393010'>positive.</span> <span m='394440'>So</span> <span
  m='394550'>that</span> <span m='394800'>means</span> <span
  m='395080'>that</span> <span m='395190'>as</span> <span m='395320'>x</span>
  <span m='395510'>approaches</span> <span m='395960'>infinity,</span> <span
  m='397030'>the</span> <span m='397070'>denominator</span> <span
  m='398900'>is</span> <span m='399180'>x</span> <span m='399390'>to</span>
  <span m='399500'>a</span> <span m='399540'>positive</span> <span
  m='400030'>power</span> <span m='400380'>also</span> <span
  m='400650'>goes</span> <span m='400870'>to</span> <span
  m='400990'>infinity.</span> <span m='401520'>And</span> <span
  m='401540'>therefore,</span> <span m='401840'>1</span> <span
  m='402140'>over</span> <span m='402480'>x</span> <span m='402710'>to</span>
  <span m='402820'>that</span> <span m='403020'>positive</span> <span
  m='403500'>power</span> <span m='403840'>goes</span> <span
  m='404160'>to</span> <span m='404290'>0,</span> <span m='405170'>which</span>
  <span m='405600'>is</span> <span m='405750'>the</span> <span
  m='405820'>definition</span> <span m='406550'>of</span> <span
  m='406830'>x</span> <span m='407130'>to</span> <span m='407250'>the</span>
  <span m='407370'>a</span> <span m='407735'>being</span> <span
  m='408710'>little</span> <span m='409070'>o</span> <span m='409390'>of
  x</span> <span m='409670'>to</span> <span m='409790'>the</span> <span
  m='409860'>b.</span> </p><p><span m='412415'>Another</span> <span
  m='413150'>crucial</span> <span m='413550'>fact</span> <span
  m='413990'>is</span> <span m='414400'>that</span> <span
  m='414600'>logarithms</span> <span m='415290'>grow</span> <span
  m='415990'>slower</span> <span m='416570'>than</span> <span
  m='416790'>roots.</span> <span m='417720'>So</span> <span m='417910'>if</span>
  <span m='418040'>you</span> <span m='418100'>think</span> <span
  m='418310'>of</span> <span m='418420'>epsilon</span> <span
  m='418880'>as</span> <span m='419040'>like</span> <span m='419340'>a</span>
  <span m='419470'>half</span> <span m='420230'>or</span> <span
  m='420710'>a</span> <span m='420750'>third,</span> <span
  m='421350'>saying</span> <span m='421700'>that</span> <span
  m='421840'>the</span> <span m='421920'>log</span> <span m='422200'>of</span>
  <span m='422320'>x</span> <span m='422600'>is</span> <span
  m='422740'>less</span> <span m='422950'>than or</span> <span m='423290'>equal
  to the</span> <span m='423360'>square</span> <span m='423720'>root,</span>
  <span m='424190'>it's less than</span> <span m='424390'>equal</span> <span
  m='424640'>to the</span> <span m='424700'>cube</span> <span
  m='425010'>root,</span> <span m='425130'>it's</span> <span
  m='425230'>less</span> <span m='425390'>than or</span> <span m='425650'>equal
  to the 50th</span> <span m='425970'>root</span> <span
  m='426350'>doesn't</span> <span m='426610'>matter.</span> <span
  m='427470'>OK.</span> <span m='428660'>This</span> <span m='428950'>is</span>
  <span m='429100'>a</span> <span m='429170'>proof</span> <span
  m='429470'>that</span> <span m='429590'>just</span> <span
  m='430000'>falls</span> <span m='430380'>back</span> <span
  m='430630'>on</span> <span m='430740'>elementary</span> <span
  m='431170'>calculus.</span> </p><p><span m='433110'>And</span> <span
  m='433860'>I</span> <span m='434000'>guess</span> <span m='434200'>I've</span>
  <span m='434330'>highlighted</span> <span m='434760'>it,</span> <span
  m='434940'>because</span> <span m='435230'>it's</span> <span
  m='435450'>definitely</span> <span m='435810'>worth</span> <span
  m='436050'>remembering.</span> <span m='436930'>Logarithms</span> <span
  m='437780'>grow</span> <span m='438180'>slower</span> <span
  m='438650'>than</span> <span m='438840'>roots.</span> <span
  m='441530'>The</span> <span m='441650'>proof</span> <span
  m='442440'>begins</span> <span m='442930'>with</span> <span
  m='443110'>the</span> <span m='443860'>immediately</span> <span
  m='444680'>obvious</span> <span m='445050'>remark</span> <span
  m='445360'>that</span> <span m='445480'>1</span> <span m='445650'>over</span>
  <span m='445850'>y</span> <span m='446070'>is</span> <span
  m='446210'>less</span> <span m='446390'>than</span> <span m='446500'>or</span>
  <span m='446550'>equal</span> <span m='446740'>to</span> <span
  m='446860'>y,</span> <span m='447560'>because</span> <span
  m='447970'>they're</span> <span m='448190'>equal</span> <span
  m='448820'>when</span> <span m='449110'>y</span> <span m='449300'>is</span>
  <span m='449430'>greater</span> <span m='449670'>to</span> <span
  m='449970'>1.</span> <span m='450370'>1 over</span> <span m='450790'>y</span>
  <span m='450930'>is</span> <span m='451040'>equal</span> <span
  m='451250'>to</span> <span m='451370'>y</span> <span m='451810'>when</span>
  <span m='452070'>y</span> <span m='452290'>is greater</span> <span
  m='452410'>than or</span> <span m='452850'>equal to</span> <span
  m='452980'>1.</span> <span m='453300'>And</span> <span m='453470'>as</span>
  <span m='453590'>y</span> <span m='453850'>increases,</span> <span
  m='454720'>y</span> <span m='455000'>gets</span> <span
  m='455220'>bigger,</span> <span m='455580'>and</span> <span
  m='455740'>1</span> <span m='455880'>over</span> <span m='456050'>y</span>
  <span m='456270'>gets</span> <span m='456470'>smaller,</span> <span
  m='457380'>so</span> <span m='457500'>the</span> <span
  m='457630'>inequality</span> <span m='458240'>is</span> <span
  m='458390'>preserved.</span> <span m='459430'>That's</span> <span
  m='459660'>easy,</span> <span m='460080'>OK.</span> </p><p><span
  m='460780'>Well</span> <span m='461390'>that</span> <span
  m='461700'>means</span> <span m='462150'>that</span> <span m='462540'>I</span>
  <span m='462680'>can</span> <span m='462860'>integrate</span> <span
  m='463390'>both</span> <span m='463600'>sides</span> <span
  m='464220'>starting</span> <span m='464680'>at</span> <span
  m='464780'>1.</span> <span m='465150'>So</span> <span m='465360'>if</span>
  <span m='465470'>I</span> <span m='465550'>take</span> <span
  m='465810'>the</span> <span m='465910'>integral</span> <span m='466300'>of
  1</span> <span m='466680'>over y</span> <span m='466970'>from</span> <span
  m='467150'>1</span> <span m='467320'>to</span> <span m='467480'>z,</span>
  <span m='468130'>it's</span> <span m='468350'>going</span> <span
  m='468510'>to</span> <span m='468580'>be</span> <span m='468700'>less</span>
  <span m='468940'>than</span> <span m='469040'>or</span> <span
  m='469150'>equal</span> <span m='469400'>to</span> <span m='469510'>the</span>
  <span m='469620'>integral</span> <span m='470270'>of</span> <span
  m='470450'>y</span> <span m='471200'>from</span> <span m='471430'>1</span>
  <span m='471650'>to</span> <span m='471800'>z.</span> <span
  m='472340'>Well,</span> <span m='473140'>integral</span> <span
  m='473570'>of</span> <span m='473660'>1</span> <span m='473820'>over</span>
  <span m='474030'>y</span> <span m='474260'>is</span> <span
  m='474400'>log</span> <span m='474770'>z,</span> <span m='475130'>and</span>
  <span m='475350'>the</span> <span m='475460'>integral</span> <span
  m='476460'>of</span> <span m='477600'>y</span> <span m='479280'>to</span>
  <span m='479440'>z</span> <span m='479850'>is</span> <span m='480060'>z</span>
  <span m='480180'>square</span> <span m='480490'>over</span> <span
  m='480660'>2.</span> <span m='481170'>So</span> <span m='481400'>what</span>
  <span m='481590'>we</span> <span m='481710'>get</span> <span
  m='481900'>is</span> <span m='482070'>this</span> <span m='482250'>new</span>
  <span m='482430'>inequality,</span> <span m='483390'>the</span> <span
  m='483510'>log</span> <span m='483790'>of</span> <span m='483890'>z</span>
  <span m='484060'>is</span> <span m='484190'>less</span> <span
  m='484390'>than</span> <span m='484480'>or</span> <span
  m='484510'>equal</span> <span m='484670'>to</span> <span m='484770'>z</span>
  <span m='484960'>squared</span> <span m='485310'>over</span> <span
  m='485530'>2,</span> <span m='485990'>for</span> <span m='486160'>z</span>
  <span m='486730'>greater or</span> <span m='487090'>equal to</span> <span
  m='487465'>one.</span> </p><p><span m='488230'>So</span> <span
  m='488440'>we're</span> <span m='488600'>on</span> <span m='488790'>the</span>
  <span m='488850'>way</span> <span m='489130'>there.</span> <span
  m='489330'>We've</span> <span m='489510'>got</span> <span
  m='489840'>log</span> <span m='490140'>of</span> <span m='490250'>z</span>
  <span m='490610'>is</span> <span m='490810'>less</span> <span
  m='491120'>than</span> <span m='492320'>z</span> <span
  m='492530'>squared,</span> <span m='493120'>but</span> <span
  m='493350'>not</span> <span m='493640'>z</span> <span m='494460'>to</span>
  <span m='494770'>any</span> <span m='495120'>epsilon</span> <span
  m='495670'>power.</span> <span m='497000'>But</span> <span
  m='497320'>we'll</span> <span m='497500'>get</span> <span
  m='497840'>that</span> <span m='498020'>just</span> <span m='498230'>by</span>
  <span m='498480'>making</span> <span m='498800'>a</span> <span
  m='498840'>smart</span> <span m='499150'>substitution</span> <span
  m='499790'>for</span> <span m='499950'>z,</span> <span m='500480'>so</span>
  <span m='500750'>that's</span> <span m='501030'>the</span> <span
  m='501110'>next</span> <span m='501370'>step.</span> <span
  m='502020'>We</span> <span m='502220'>have</span> <span m='502460'>that</span>
  <span m='502640'>log</span> <span m='502910'>of</span> <span
  m='503000'>z</span> <span m='503210'>is</span> <span m='503370'>less</span>
  <span m='503580'>than</span> <span m='503680'>equal</span> <span
  m='503840'>to</span> <span m='503940'>z</span> <span m='504130'>squared</span>
  <span m='504470'>over</span> <span m='504670'>2</span> <span
  m='504910'>for</span> <span m='505680'>any</span> <span m='506040'>z</span>
  <span m='506400'>greater than or</span> <span m='506840'>equal to</span> <span
  m='506990'>1.</span> <span m='508220'>Let's</span> <span m='508570'>let</span>
  <span m='508840'>z</span> <span m='509290'>be</span> <span
  m='509920'>the</span> <span m='510060'>square</span> <span
  m='510510'>root</span> <span m='510860'>of</span> <span m='511230'>x</span>
  <span m='511550'>to</span> <span m='511680'>the</span> <span
  m='511790'>delta,</span> <span m='512510'>where</span> <span
  m='512789'>delta</span> <span m='513210'>is</span> <span
  m='513570'>simply</span> <span m='514049'>some</span> <span
  m='514419'>positive</span> <span m='514900'>number.</span> </p><p><span
  m='516080'>So</span> <span m='516809'>in</span> <span m='516980'>that</span>
  <span m='517210'>case,</span> <span m='517799'>what's</span> <span
  m='518220'>the</span> <span m='518299'>log</span> <span m='518679'>of</span>
  <span m='518789'>z?</span> <span m='519150'>Well</span> <span
  m='519309'>the</span> <span m='519390'>log</span> <span m='519890'>of</span>
  <span m='520059'>the</span> <span m='520130'>square</span> <span
  m='520500'>root</span> <span m='520669'>of</span> <span m='520770'>x</span>
  <span m='520960'>to</span> <span m='521059'>the</span> <span
  m='521150'>delta,</span> <span m='522000'>the</span> <span
  m='522110'>square</span> <span m='522500'>root</span> <span
  m='522520'>means</span> <span m='522740'>it's</span> <span
  m='523159'>half</span> <span m='523549'>of</span> <span m='523730'>log</span>
  <span m='524110'>of</span> <span m='524230'>x</span> <span
  m='524490'>to</span> <span m='524600'>the</span> <span
  m='524700'>delta,</span> <span m='525150'>which</span> <span
  m='525420'>is</span> <span m='525560'>delta</span> <span m='525940'>log</span>
  <span m='526330'>x.</span> <span m='527050'>So</span> <span
  m='528120'>log</span> <span m='528510'>of</span> <span m='528630'>z</span>
  <span m='529120'>is</span> <span m='529930'>delta</span> <span
  m='530280'>log</span> <span m='530620'>of</span> <span m='530730'>x</span>
  <span m='531040'>over</span> <span m='531270'>2.</span> <span
  m='532000'>And,</span> <span m='532260'>of</span> <span
  m='532330'>course,</span> <span m='532870'>z</span> <span
  m='533090'>squared</span> <span m='533550'>is</span> <span
  m='533650'>just</span> <span m='533870'>x</span> <span m='534060'>to</span>
  <span m='534170'>the</span> <span m='534260'>delta,</span> <span
  m='534760'>so</span> <span m='534840'>z</span> <span m='534990'>squared</span>
  <span m='535250'>over</span> <span m='535430'>2</span> <span
  m='535770'>is</span> <span m='536090'>x</span> <span m='536280'>to</span>
  <span m='536380'>the</span> <span m='536470'>delta</span> <span
  m='536810'>over</span> <span m='537080'>2.</span> </p><p><span
  m='538000'>Now,</span> <span m='539500'>I</span> <span m='539920'>can</span>
  <span m='540060'>just</span> <span m='540290'>cancel</span> <span
  m='540720'>the</span> <span m='541430'>denominators</span> <span
  m='542210'>too.</span> <span m='542500'>And</span> <span m='542630'>I</span>
  <span m='542690'>get</span> <span m='542950'>that</span> <span
  m='543130'>log</span> <span m='543430'>of</span> <span m='543570'>x,</span>
  <span m='544100'>and</span> <span m='544400'>then</span> <span
  m='544790'>transpose</span> <span m='545580'>the</span> <span
  m='545680'>delta</span> <span m='546070'>log</span> <span m='546360'>of</span>
  <span m='546480'>x</span> <span m='546700'>is</span> <span
  m='546830'>less</span> <span m='547050'>than</span> <span m='547140'>or</span>
  <span m='547180'>equal</span> <span m='547350'>to</span> <span
  m='547470'>x</span> <span m='547690'>to</span> <span m='547790'>the</span>
  <span m='547880'>delta</span> <span m='548210'>over</span> <span
  m='548460'>delta.</span> <span m='549620'>But</span> <span
  m='551180'>as</span> <span m='551420'>long</span> <span m='551590'>as</span>
  <span m='551720'>delta</span> <span m='552040'>is</span> <span
  m='552180'>less</span> <span m='552390'>than</span> <span
  m='552520'>epsilon,</span> <span m='554530'>x</span> <span
  m='554770'>to</span> <span m='554870'>the</span> <span m='554950'>delta</span>
  <span m='555290'>is</span> <span m='555390'>going</span> <span
  m='555530'>to</span> <span m='555590'>be</span> <span m='555680'>a</span>
  <span m='555710'>little</span> <span m='556010'>o</span> <span
  m='556280'>of</span> <span m='556410'>x</span> <span m='556590'>to</span>
  <span m='556690'>the</span> <span m='556810'>epsilon,</span> <span
  m='557390'>which</span> <span m='557500'>means</span> <span
  m='557770'>that</span> <span m='557930'>x</span> <span m='558390'>to</span>
  <span m='558560'>the</span> <span m='558660'>delta</span> <span
  m='559070'>times</span> <span m='559390'>a</span> <span
  m='559440'>constant,</span> <span m='559990'>namely</span> <span m='560320'>1
  over</span> <span m='560680'>delta,</span> <span m='560960'>is</span> <span
  m='561070'>also</span> <span m='561300'>going</span> <span
  m='561440'>to</span> <span m='561520'>be</span> <span m='562100'>little</span>
  <span m='562390'>o</span> <span m='562730'>of x</span> <span
  m='562950'>to</span> <span m='563070'>the</span> <span
  m='563190'>epsilon.</span> <span m='564250'>And</span> <span
  m='564600'>I've</span> <span m='564810'>just</span> <span
  m='565050'>figured</span> <span m='565390'>out</span> <span
  m='565730'>that</span> <span m='567070'>I've</span> <span
  m='567550'>shown</span> <span m='567990'>that</span> <span
  m='568120'>log</span> <span m='568400'>of</span> <span m='568520'>x</span>
  <span m='568830'>is</span> <span m='569080'>little</span> <span
  m='569490'>o</span> <span m='569940'>of</span> <span m='570940'>x</span> <span
  m='571240'>to</span> <span m='571360'>the</span> <span
  m='571470'>epsilon</span> <span m='572350'>as</span> <span
  m='572630'>required.</span> </p><p><span m='575380'>One</span> <span
  m='575860'>more</span> <span m='576430'>crucial</span> <span
  m='576810'>fact</span> <span m='577960'>that</span> <span
  m='578190'>I'm</span> <span m='578340'>going</span> <span m='578480'>to</span>
  <span m='578700'>not</span> <span m='578950'>prove,</span> <span
  m='579300'>but</span> <span m='579440'>I'll</span> <span
  m='579540'>state</span> <span m='579990'>is</span> <span
  m='580380'>that</span> <span m='580940'>polynomials</span> <span
  m='581620'>grow</span> <span m='581850'>slower</span> <span
  m='582370'>than</span> <span m='582560'>exponentials.</span> <span
  m='583400'>This</span> <span m='583570'>is</span> <span
  m='583690'>closely</span> <span m='584120'>related</span> <span
  m='584580'>to</span> <span m='584710'>the</span> <span m='584800'>fact</span>
  <span m='585110'>that</span> <span m='585480'>logs</span> <span
  m='585890'>grow</span> <span m='586090'>slower</span> <span
  m='586510'>than</span> <span m='586700'>roots.</span> <span
  m='588340'>But</span> <span m='588560'>in</span> <span
  m='588650'>particular,</span> <span m='590220'>if</span> <span
  m='590270'>c</span> <span m='590450'>is</span> <span m='590560'>any</span>
  <span m='590720'>constant</span> <span m='591760'>and</span> <span
  m='592260'>a</span> <span m='592330'>is</span> <span m='592650'>greater</span>
  <span m='592940'>than</span> <span m='593080'>1,</span> <span
  m='593560'>then</span> <span m='593980'>x</span> <span m='594270'>to</span>
  <span m='594380'>the</span> <span m='594480'>c</span> <span
  m='595400'>is</span> <span m='595670'>little</span> <span m='596100'>o</span>
  <span m='596420'>of</span> <span m='596830'>a to the</span> <span
  m='596980'>x.</span> <span m='597590'>And</span> <span
  m='598590'>there's</span> <span m='598880'>a</span> <span
  m='599070'>bunch</span> <span m='599320'>of</span> <span
  m='599390'>ways</span> <span m='599630'>to</span> <span
  m='599720'>prove</span> <span m='600100'>this</span> <span
  m='600310'>using</span> <span m='600620'>a</span> <span
  m='600770'>L'Hopital's</span> <span m='601180'>Rule, or</span> <span
  m='601490'>McLaurin</span> <span m='601940'>Series,</span> <span
  m='602480'>and</span> <span m='602590'>I'll</span> <span
  m='602930'>leave</span> <span m='603200'>it</span> <span m='603460'>to</span>
  <span m='604080'>you</span> <span m='604320'>to</span> <span
  m='604410'>look</span> <span m='604630'>up</span> <span m='604790'>your</span>
  <span m='605100'>1801</span> <span m='605770'>calculus</span> <span
  m='606330'>text</span> <span m='606660'>to</span> <span m='606750'>find</span>
  <span m='607540'>a</span> <span m='607660'>proof</span> <span
  m='608010'>of</span> <span m='608120'>that</span> <span
  m='608360'>fact.</span> </p>
embedded_media:
  - uid: 3d44cf2ae03882086693067ce02ccb73
    parent_uid: d69ccd43e66912224e0dbac10b67e72e
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 60c3a4ffeaea0b8b4b19f02acd97a44b
    parent_uid: d69ccd43e66912224e0dbac10b67e72e
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: ab8c49a0a0969c5ec311a499ba23fd56
    parent_uid: d69ccd43e66912224e0dbac10b67e72e
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: HeyEK0TWiBw
  - uid: 39c3e3206b1a99f1b0136c47cc88640b
    parent_uid: d69ccd43e66912224e0dbac10b67e72e
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/HeyEK0TWiBw/default.jpg'
  - uid: 3cc0433c5040b3bf1b1e56ef1f5d1666
    parent_uid: d69ccd43e66912224e0dbac10b67e72e
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: HeyEK0TWiBw
  - uid: 70476ef0a919090a629638ea2a7ee8f2
    parent_uid: d69ccd43e66912224e0dbac10b67e72e
    id: HeyEK0TWiBw.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-e35ce9684389/asymptotic-properties/HeyEK0TWiBw.srt
  - uid: 3d8172bbcc4817c265375acdde046b0d
    parent_uid: d69ccd43e66912224e0dbac10b67e72e
    id: HeyEK0TWiBw.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/counting/tp8-3/vertical-e35ce9684389/asymptotic-properties/HeyEK0TWiBw.pdf
  - uid: 18861221d9645c554ec6cd2430a37361
    parent_uid: d69ccd43e66912224e0dbac10b67e72e
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: ea8915bf8ba7d4d45ad44d19dbc60095
    parent_uid: d69ccd43e66912224e0dbac10b67e72e
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 839cbda63930eb9bc286febc408bbdd8
    parent_uid: d69ccd43e66912224e0dbac10b67e72e
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_asymptoticproperties_ipod.mp4
type: courses
layout: video
---
