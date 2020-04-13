---
title: Inverse Matrices
uid: 0118e59bf988ae9168d0d50bbdfc9ff3
parent_uid: 754d6be4ca3c378b6c8b2e4a955ffe64
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/inverse-matrices
short_url: inverse-matrices
inline_embed_id: 44478485inversematrices22120372
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='6040'>PROFESSOR: Hi</span> <span m='6200'>there.</span> <span
  m='6610'>My</span> <span m='6690'>name is</span> <span m='6970'>Ana.</span>
  <span m='7370'>Welcome</span> <span m='7710'>to</span> <span
  m='7790'>recitation.</span> <span m='9090'>In</span> <span
  m='9240'>lecture,</span> <span m='9820'>you've</span> <span
  m='9950'>been</span> <span m='10110'>learning</span> <span
  m='10430'>about</span> <span m='10770'>how</span> <span m='10970'>to</span>
  <span m='11100'>multiply</span> <span m='11510'>matrices,</span> <span
  m='12120'>and</span> <span m='12220'>how</span> <span m='12360'>to</span>
  <span m='12500'>think</span> <span m='12720'>about</span> <span
  m='12950'>that</span> <span m='13110'>multiplication</span> <span
  m='13780'>in</span> <span m='13870'>different</span> <span
  m='14150'>ways,</span> <span m='14940'>and</span> <span m='15120'>also</span>
  <span m='15590'>about</span> <span m='16420'>when</span> <span
  m='16870'>a</span> <span m='16920'>matrix</span> <span m='17300'>is</span>
  <span m='17410'>invertible</span> <span m='18150'>or</span> <span
  m='18310'>not,</span> <span m='18730'>and</span> <span m='18930'>how</span>
  <span m='19190'>to</span> <span m='19450'>compute</span> <span
  m='19760'>the</span> <span m='19880'>inverse</span> <span
  m='20280'>when</span> <span m='20580'>it</span> <span m='20720'>is</span>
  <span m='20880'>invertible.</span> <span m='21850'>And</span> <span
  m='21990'>that's</span> <span m='22220'>what</span> <span
  m='22360'>today's</span> <span m='22670'>problem</span> <span
  m='23040'>is</span> <span m='23140'>about.</span> </p><p><span
  m='24360'>We</span> <span m='24510'>have</span> <span m='25570'>a
  matrix</span> <span m='25910'>A</span> <span m='26900'>that</span> <span
  m='27060'>has</span> <span m='27330'>variables</span> <span m='27595'>a</span>
  <span m='27860'>and</span> <span m='28140'>b</span> <span
  m='28330'>instead</span> <span m='28620'>of</span> <span
  m='28700'>numbers.</span> <span m='29290'>And</span> <span
  m='29640'>the</span> <span m='29730'>question</span> <span
  m='30160'>is:</span> <span m='31040'>what</span> <span m='31310'>are</span>
  <span m='31380'>the</span> <span m='31480'>conditions</span> <span
  m='31910'>on</span> <span m='32060'>a</span> <span m='32250'>and</span> <span
  m='32380'>b</span> <span m='33510'>that</span> <span m='33730'>make</span>
  <span m='34050'>that</span> <span m='34250'>matrix</span> <span
  m='34790'>invertible?</span> <span m='36150'>And</span> <span
  m='36910'>when</span> <span m='37090'>it</span> <span m='37190'>is</span>
  <span m='37300'>invertible,</span> <span m='37950'>what</span> <span
  m='38220'>is</span> <span m='38360'>A</span> <span m='38530'>inverse?</span>
  <span m='40550'>Why</span> <span m='40720'>don't</span> <span
  m='40950'>you</span> <span m='41380'>hit</span> <span m='41620'>Pause</span>
  <span m='42100'>and</span> <span m='42210'>work</span> <span
  m='42460'>on</span> <span m='42590'>it</span> <span m='42710'>for</span> <span
  m='42800'>a</span> <span m='42900'>little</span> <span m='43080'>while.</span>
  <span m='43700'>And</span> <span m='43860'>then</span> <span
  m='44030'>we'll</span> <span m='44180'>come</span> <span m='44340'>back</span>
  <span m='44620'>and</span> <span m='44710'>work</span> <span
  m='44950'>on</span> <span m='45070'>it</span> <span m='45170'>together.</span>
  </p><p><span m='53910'>And</span> <span m='54320'>we're back.</span> <span
  m='55220'>I</span> <span m='55310'>hope</span> <span m='55530'>you</span>
  <span m='55610'>had</span> <span m='56270'>success</span> <span
  m='56720'>in</span> <span m='56840'>solving</span> <span
  m='57210'>that.</span> <span m='59040'>Let's</span> <span m='59330'>do</span>
  <span m='59460'>it</span> <span m='59570'>ourselves.</span> </p><p><span
  m='61730'>So,</span> <span m='63440'>remember</span> <span
  m='63890'>from</span> <span m='64510'>lecture,</span> <span
  m='65489'>we</span> <span m='65700'>talked</span> <span
  m='66090'>about--</span> <span m='66650'>well,</span> <span
  m='67700'>Professor</span> <span m='67930'>Strang</span> <span
  m='68810'>talked</span> <span m='69130'>about</span> <span
  m='69540'>how</span> <span m='71190'>it's</span> <span m='71440'>easy</span>
  <span m='71760'>to</span> <span m='71870'>spot--</span> <span
  m='72270'>some</span> <span m='72520'>easy</span> <span m='72770'>tests</span>
  <span m='73110'>to</span> <span m='73180'>spot</span> <span
  m='73470'>when</span> <span m='73620'>a</span> <span m='73660'>matrix</span>
  <span m='74020'>is</span> <span m='74150'>not</span> <span
  m='74410'>invertible.</span> <span m='75610'>Those</span> <span
  m='75870'>were:</span> <span m='76400'>if</span> <span m='76520'>you</span>
  <span m='76660'>have</span> <span m='76800'>a</span> <span
  m='76950'>column</span> <span m='77260'>of</span> <span m='77360'>0's</span>
  <span m='77705'>or a</span> <span m='78050'>row</span> <span
  m='78440'>of</span> <span m='78540'>0's,</span> <span m='78805'>then</span>
  <span m='79070'>the</span> <span m='79140'>matrix</span> <span
  m='79490'>is</span> <span m='79600'>not</span> <span
  m='79780'>invertible.</span> <span m='80340'>Or</span> <span
  m='80820'>if</span> <span m='81010'>you</span> <span m='81230'>have</span>
  <span m='81460'>two</span> <span m='81630'>columns</span> <span m='81980'>that
  are</span> <span m='82100'>the</span> <span m='82200'>same,</span> <span
  m='82670'>or two</span> <span m='82820'>rows</span> <span
  m='83040'>that</span> <span m='83110'>are</span> <span m='83190'>the</span>
  <span m='83280'>same,</span> <span m='83590'>the</span> <span
  m='83680'>matrix</span> <span m='83980'>is</span> <span m='84100'>also</span>
  <span m='84380'>not</span> <span m='84560'>invertible.</span> <span
  m='85650'>So</span> <span m='85790'>let's</span> <span m='85990'>see</span>
  <span m='87170'>if</span> <span m='87330'>this</span> <span
  m='87530'>matrix</span> <span m='87880'>satisfies</span> <span
  m='88510'>any</span> <span m='88730'>of</span> <span m='88860'>those</span>
  <span m='88990'>easy</span> <span m='89260'>conditions.</span> </p><p><span
  m='91390'>Well,</span> <span m='92850'>here</span> <span m='93130'>you</span>
  <span m='93250'>have</span> <span m='93380'>a</span> <span
  m='93420'>row</span> <span m='93740'>of</span> <span m='94075'>a's.</span>
  <span m='94410'>If</span> <span m='94650'>a</span> <span m='94800'>is</span>
  <span m='94910'>equal</span> <span m='95110'>to</span> <span
  m='95200'>0,</span> <span m='95700'>you</span> <span m='95790'>have</span>
  <span m='95960'>a row of</span> <span m='96140'>0's,</span> <span
  m='96600'>the</span> <span m='96700'>matrix</span> <span m='97040'>is</span>
  <span m='97160'>not</span> <span m='97330'>invertible.</span> <span
  m='98730'>So</span> <span m='100330'>a</span> <span m='101190'>is--</span>
  <span m='109952'>What</span> <span m='110420'>was</span> <span
  m='110600'>the</span> <span m='110740'>other</span> <span
  m='110880'>one?</span> <span m='111420'>Two</span> <span m='111775'>of</span>
  <span m='112130'>the</span> <span m='112380'>same</span> <span
  m='112730'>column</span> <span m='113210'>or of</span> <span
  m='113320'>the</span> <span m='113460'>same</span> <span
  m='113780'>row.</span> <span m='114800'>Well,</span> <span
  m='115360'>if</span> <span m='116340'>a</span> <span m='116710'>is</span>
  <span m='117040'>equal</span> <span m='117260'>to</span> <span
  m='117370'>b,</span> <span m='117740'>then</span> <span m='119010'>all</span>
  <span m='119170'>the</span> <span m='119290'>entries</span> <span
  m='119550'>in</span> <span m='119620'>the</span> <span
  m='119700'>matrix</span> <span m='120060'>are</span> <span
  m='120120'>the</span> <span m='120210'>same,</span> <span m='120480'>so</span>
  <span m='120750'>all</span> <span m='120920'>the</span> <span
  m='120990'>rows</span> <span m='121200'>are</span> <span m='121250'>the</span>
  <span m='121320'>same,</span> <span m='121580'>all</span> <span
  m='121640'>the</span> <span m='121750'>columns</span> <span m='122090'>are
  the</span> <span m='122230'>same,</span> <span m='122700'>the</span> <span
  m='122870'>matrix</span> <span m='123220'>is</span> <span
  m='123320'>not</span> <span m='123510'>invertible.</span> <span
  m='124170'>So</span> <span m='124290'>that's</span> <span
  m='124540'>the</span> <span m='124690'>other</span> <span
  m='124880'>easy</span> <span m='125120'>condition.</span> <span
  m='125620'>A</span> <span m='125880'>is</span> <span m='126130'>not</span>
  <span m='126260'>invertible</span> <span m='126820'>if</span> <span
  m='127030'>a</span> <span m='127170'>is</span> <span m='127280'>equal</span>
  <span m='127500'>to</span> <span m='127590'>0</span> <span
  m='129210'>or</span> <span m='129660'>a</span> <span m='129910'>equals</span>
  <span m='130250'>to</span> <span m='130669'>b.</span> </p><p><span
  m='132750'>There's</span> <span m='133040'>not</span> <span
  m='133280'>any</span> <span m='133560'>other</span> <span
  m='133790'>easy</span> <span m='134040'>condition</span> <span
  m='134390'>that</span> <span m='134520'>I</span> <span m='134580'>can</span>
  <span m='134730'>spot.</span> <span m='135120'>So</span> <span
  m='135360'>we</span> <span m='135500'>have</span> <span m='135640'>to</span>
  <span m='135730'>do</span> <span m='135860'>it</span> <span
  m='135980'>in</span> <span m='136080'>a</span> <span m='136120'>more</span>
  <span m='136320'>systematic</span> <span m='136930'>way.</span> <span
  m='138310'>So</span> <span m='138470'>to</span> <span m='138630'>do</span>
  <span m='138780'>that,</span> <span m='139050'>actually</span> <span
  m='139360'>what</span> <span m='139520'>we</span> <span m='139610'>do</span>
  <span m='139980'>is</span> <span m='141110'>we</span> <span
  m='141210'>start</span> <span m='141500'>with</span> <span
  m='141640'>A,</span> <span m='142000'>we</span> <span m='142140'>try</span>
  <span m='142310'>to</span> <span m='142410'>find</span> <span
  m='143030'>its</span> <span m='143270'>inverse,</span> <span
  m='143830'>and</span> <span m='143980'>if</span> <span m='144080'>in</span>
  <span m='144190'>the</span> <span m='144280'>process</span> <span
  m='144750'>we</span> <span m='144820'>run</span> <span m='145080'>into</span>
  <span m='145260'>something</span> <span m='145600'>fishy,</span> <span
  m='146470'>those</span> <span m='146720'>are our</span> <span
  m='146940'>conditions.</span> </p><p><span m='148400'>So</span> <span
  m='148910'>remember</span> <span m='149270'>how</span> <span
  m='149410'>to</span> <span m='149900'>find</span> <span m='150180'>the</span>
  <span m='150290'>inverse</span> <span m='150630'>of a</span> <span
  m='150750'>matrix?</span> <span m='152060'>You</span> <span
  m='152150'>start</span> <span m='152630'>by</span> <span
  m='152830'>writing</span> <span m='157020'>a</span> <span
  m='157470'>giant</span> <span m='157870'>matrix</span> <span
  m='158300'>that</span> <span m='158470'>has</span> <span m='158760'>A</span>
  <span m='159090'>and</span> <span m='159250'>the</span> <span
  m='159380'>identity</span> <span m='159860'>next</span> <span
  m='160190'>to</span> <span m='160310'>it.</span> <span m='160610'>And</span>
  <span m='160740'>then</span> <span m='160860'>you</span> <span
  m='160960'>perform</span> <span m='161470'>elimination</span> <span
  m='162070'>steps</span> <span m='164860'>until--</span> <span
  m='165935'>let's</span> <span m='166320'>put</span> <span
  m='166450'>dots</span> <span m='166850'>here,</span> <span
  m='167200'>because</span> <span m='167390'>there's</span> <span
  m='167560'>lots</span> <span m='167780'>of</span> <span
  m='167840'>steps--</span> <span m='171450'>and</span> <span
  m='171610'>you</span> <span m='171730'>stop</span> <span
  m='172400'>once</span> <span m='172930'>you've</span> <span
  m='173130'>reached</span> <span m='173520'>the</span> <span
  m='173670'>identity</span> <span m='174120'>matrix</span> <span
  m='174590'>on</span> <span m='174740'>the</span> <span m='175190'>left</span>
  <span m='175520'>side.</span> <span m='176450'>And</span> <span
  m='176620'>when</span> <span m='176760'>you</span> <span m='176860'>do</span>
  <span m='177020'>that,</span> <span m='177300'>what</span> <span
  m='177450'>you</span> <span m='177590'>have</span> <span m='177740'>on</span>
  <span m='177830'>the</span> <span m='177910'>right</span> <span
  m='178150'>side</span> <span m='178510'>will</span> <span m='178690'>be
  your</span> <span m='179000'>A</span> <span m='179280'>inverse.</span> <span
  m='181020'>Easy</span> <span m='181280'>enough.</span> </p><p><span
  m='181800'>So</span> <span m='183840'>let's</span> <span m='184060'>do</span>
  <span m='184170'>the</span> <span m='184270'>computations.</span> <span
  m='188130'>a,</span> <span m='188770'>b,</span> <span m='189210'>b;</span>
  <span m='189650'>a,</span> <span m='190090'>a,</span> <span
  m='190530'>b;</span> <span m='191410'>a,</span> <span m='191890'>a,</span>
  <span m='192370'>a;</span> <span m='198436'>and</span> <span
  m='198930'>my</span> <span m='199200'>identity</span> <span
  m='199590'>matrix</span> <span m='200020'>next</span> <span
  m='200300'>to</span> <span m='200440'>it.</span> <span m='200670'>And</span>
  <span m='201050'>now</span> <span m='203960'>I</span> <span
  m='204050'>know</span> <span m='204190'>you</span> <span
  m='204320'>learned</span> <span m='204510'>about</span> <span
  m='204730'>elimination</span> <span m='205240'>in</span> <span
  m='205320'>the</span> <span m='205410'>past</span> <span
  m='205700'>recitation.</span> <span m='206400'>So</span> <span
  m='206930'>I'll</span> <span m='207110'>do</span> <span m='207210'>the</span>
  <span m='207310'>first</span> <span m='207590'>few</span> <span
  m='207710'>steps</span> <span m='208130'>slowly,</span> <span
  m='209010'>and</span> <span m='209180'>then</span> <span
  m='210190'>I'll</span> <span m='210340'>just</span> <span
  m='210530'>write</span> <span m='210700'>the</span> <span
  m='210770'>solution</span> <span m='211290'>for</span> <span
  m='211390'>the</span> <span m='211570'>last</span> <span
  m='211760'>steps.</span> </p><p><span m='213140'>So</span> <span
  m='214200'>we</span> <span m='214370'>want</span> <span m='214670'>to</span>
  <span m='214850'>eliminate</span> <span m='216560'>this</span> <span
  m='216860'>a.</span> <span m='217290'>We</span> <span m='217380'>want</span>
  <span m='217550'>to</span> <span m='217620'>turn it</span> <span
  m='217840'>into</span> <span m='218160'>0.</span> <span m='218680'>So</span>
  <span m='218920'>let's</span> <span m='220070'>subtract</span> <span
  m='220750'>the</span> <span m='220960'>first</span> <span
  m='221170'>row</span> <span m='221300'>from</span> <span m='221510'>the</span>
  <span m='221580'>second.</span> <span m='222300'>Let's</span> <span
  m='222560'>do</span> <span m='222760'>row</span> <span m='222940'>2</span>
  <span m='223130'>minus</span> <span m='223590'>row 1,</span> <span
  m='223980'>and</span> <span m='224120'>write</span> <span m='224330'>it</span>
  <span m='224410'>instead</span> <span m='224730'>of</span> <span
  m='224880'>row</span> <span m='225010'>2.</span> <span m='225190'>So</span>
  <span m='225645'>a,</span> <span m='226100'>b,</span> <span
  m='226590'>b,</span> <span m='228050'>1,</span> <span m='228400'>0,</span>
  <span m='228810'>0;</span> <span m='231330'>0,</span> <span
  m='231890'>so</span> <span m='232210'>a</span> <span m='232380'>minus
  a,</span> <span m='232650'>a</span> <span m='232990'>minus</span> <span
  m='233520'>b,</span> <span m='234902'>b</span> <span m='235320'>minus</span>
  <span m='235710'>b is</span> <span m='235960'>0,</span> <span
  m='237330'>0</span> <span m='237500'>minus</span> <span m='237890'>1,</span>
  <span m='238940'>1</span> <span m='239370'>minus</span> <span
  m='239690'>0,</span> <span m='240530'>0</span> <span m='240690'>minus</span>
  <span m='241050'>0.</span> </p><p><span m='241885'>And</span> <span
  m='242190'>then</span> <span m='242460'>we</span> <span m='242530'>want</span>
  <span m='242710'>to</span> <span m='242780'>do</span> <span
  m='242900'>the</span> <span m='242970'>same</span> <span
  m='243230'>with</span> <span m='243330'>the</span> <span
  m='243430'>third</span> <span m='243700'>row.</span> <span
  m='244130'>So</span> <span m='244630'>let's</span> <span m='244870'>do</span>
  <span m='245170'>row 3</span> <span m='245620'>minus</span> <span
  m='245900'>row</span> <span m='246070'>1.</span> <span m='247430'>0,</span>
  <span m='248540'>a</span> <span m='248780'>minus</span> <span
  m='249340'>b,</span> <span m='251550'>it</span> <span
  m='251780'>doesn't</span> <span m='252060'>fit.</span> <span
  m='253420'>a</span> <span m='253600'>minus</span> <span m='254060'>b.</span>
  <span m='254470'>Can</span> <span m='254880'>you</span> <span
  m='254900'>understand</span> <span m='255350'>that?</span> <span
  m='256339'>And</span> <span m='256589'>then</span> <span m='256940'>0</span>
  <span m='257209'>minus</span> <span m='257649'>1,</span> <span
  m='259050'>0</span> <span m='259230'>minus</span> <span m='259649'>0,</span>
  <span m='260190'>1</span> <span m='260490'>minus</span> <span
  m='260839'>0.</span> <span m='261609'>All</span> <span
  m='261959'>right.</span> </p><p><span m='262950'>Let's</span> <span
  m='263420'>continue</span> <span m='263880'>up</span> <span
  m='264090'>here.</span> <span m='268520'>Now</span> <span m='268730'>I</span>
  <span m='268830'>want</span> <span m='269150'>to</span> <span
  m='270120'>eliminate</span> <span m='270770'>this</span> <span
  m='271080'>a</span> <span m='271220'>minus</span> <span m='271475'>b.</span>
  <span m='271730'>I</span> <span m='271770'>want</span> <span
  m='271930'>to</span> <span m='271990'>turn</span> <span m='272230'>it</span>
  <span m='272340'>into</span> <span m='272560'>a</span> <span
  m='272600'>0.</span> <span m='273380'>So</span> <span m='273610'>the</span>
  <span m='273670'>first</span> <span m='274040'>row</span> <span
  m='274150'>stays</span> <span m='274460'>the</span> <span
  m='274540'>same.</span> <span m='275932'>a,</span> <span m='276380'>b,</span>
  <span m='276820'>b,</span> <span m='277780'>1,</span> <span
  m='278040'>0,</span> <span m='278290'>0;</span> <span m='279770'>0,</span>
  <span m='280950'>a</span> <span m='281100'>minus</span> <span
  m='281570'>b,</span> <span m='282270'>0,</span> <span m='283840'>-1,</span>
  <span m='284720'>1,</span> <span m='285020'>0.</span> <span
  m='286460'>And</span> <span m='286660'>now</span> <span m='287120'>0</span>
  <span m='287300'>minus</span> <span m='287660'>0,</span> <span
  m='288520'>a</span> <span m='288650'>minus</span> <span m='289040'>b</span>
  <span m='289260'>minus</span> <span m='289560'>a</span> <span
  m='289640'>minus</span> <span m='289950'>b</span> <span m='290040'>is</span>
  <span m='290280'>0.</span> <span m='291240'>a</span> <span
  m='291360'>minus</span> <span m='291700'>b</span> <span
  m='291810'>minus</span> <span m='292080'>0,</span> <span
  m='292460'>that's</span> <span m='292990'>easy.</span> <span
  m='294790'>-1</span> <span m='295300'>minus</span> <span m='295740'>-1,</span>
  <span m='296580'>0</span> <span m='297050'>again.</span> <span
  m='298520'>-1</span> <span m='299410'>and</span> <span m='299570'>1.</span>
  <span m='302240'>Almost</span> <span m='302750'>there.</span> <span
  m='303270'>We</span> <span m='303390'>already</span> <span
  m='303640'>have</span> <span m='303800'>0's</span> <span
  m='304190'>down</span> <span m='304390'>here.</span> <span
  m='304600'>It's</span> <span m='304750'>looking</span> <span
  m='305030'>more</span> <span m='305170'>and</span> <span
  m='305270'>more</span> <span m='305430'>like</span> <span
  m='305610'>the</span> <span m='305710'>identity</span> <span
  m='306100'>matrix.</span> </p><p><span m='306750'>So</span> <span
  m='307110'>we</span> <span m='307220'>have</span> <span m='307420'>to</span>
  <span m='307560'>turn</span> <span m='308250'>all</span> <span
  m='308450'>these</span> <span m='308600'>diagonal</span> <span
  m='309000'>entries</span> <span m='309310'>into</span> <span
  m='309550'>1's,</span> <span m='309880'>so</span> <span
  m='310120'>let's</span> <span m='310370'>do</span> <span
  m='310480'>that</span> <span m='310700'>now.</span> <span m='313590'>1,</span>
  <span m='314695'>b</span> <span m='315060'>over</span> <span
  m='315120'>a,</span> <span m='316030'>b</span> <span m='316380'>over--</span>
  <span m='316620'>oh.</span> <span m='318290'>I'm</span> <span
  m='318470'>dividing</span> <span m='318860'>by</span> <span
  m='319120'>a.</span> <span m='319850'>a</span> <span m='320000'>better</span>
  <span m='320260'>not</span> <span m='320440'>be</span> <span
  m='320540'>0.</span> <span m='321850'>Let</span> <span m='322270'>me</span>
  <span m='322340'>signal</span> <span m='322740'>that</span> <span
  m='322930'>here.</span> <span m='323750'>a</span> <span
  m='325080'>different</span> <span m='325410'>from</span> <span
  m='325560'>0.</span> <span m='329900'>1</span> <span m='330320'>over</span>
  <span m='330690'>a,</span> <span m='331000'>0,</span> <span
  m='331710'>0.</span> <span m='333480'>0.</span> <span m='334440'>I</span>
  <span m='334480'>want</span> <span m='334560'>to</span> <span
  m='334650'>make</span> <span m='334820'>that</span> <span
  m='334990'>into</span> <span m='335240'>a</span> <span m='335310'>1.</span>
  <span m='336000'>So</span> <span m='337350'>1</span> <span
  m='337680'>over</span> <span m='338990'>a</span> <span m='339080'>minus</span>
  <span m='339510'>b,</span> <span m='340110'>and--</span> <span
  m='340630'>you</span> <span m='340760'>guessed</span> <span
  m='341090'>it--</span> <span m='341440'>a</span> <span m='341520'>minus</span>
  <span m='341890'>b</span> <span m='342030'>has</span> <span
  m='342200'>to</span> <span m='342290'>be</span> <span m='342400'>different
  from</span> <span m='342870'>0.</span> <span m='348050'>0.</span> <span
  m='352170'>-1</span> <span m='353050'>over</span> <span m='354650'>a</span>
  <span m='354820'>minus</span> <span m='355290'>b.</span> <span
  m='356790'>1</span> <span m='357120'>over</span> <span m='357350'>a</span>
  <span m='357480'>minus</span> <span m='357900'>b.</span> <span
  m='358570'>0,</span> <span m='360340'>0,</span> <span m='360980'>1,</span>
  <span m='361510'>0,</span> <span m='362170'>-1</span> <span
  m='362830'>over</span> <span m='363090'>a</span> <span m='363450'>minus</span>
  <span m='363890'>b.</span> <span m='365850'>1</span> <span
  m='366110'>over</span> <span m='366300'>a</span> <span m='366400'>minus</span>
  <span m='366770'>b.</span> </p><p><span m='369860'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='371930'>PROFESSOR: Someone's</span> <span
  m='372300'>pointing</span> <span m='372560'>a</span> <span
  m='372610'>mistake.</span> </p><p><span m='373150'>AUDIENCE: Yeah,</span>
  <span m='373520'>the</span> <span m='373730'>(2,</span> <span
  m='373950'>2)</span> <span m='374090'>entry,</span> <span
  m='374410'>you</span> <span m='374880'>should have</span> <span
  m='375030'>a</span> <span m='375190'>1.</span> </p><p><span
  m='376430'>PROFESSOR: Oh,</span> <span m='377360'>you're</span> <span
  m='377520'>absolutely</span> <span m='377940'>right.</span> <span
  m='382580'>Thank</span> <span m='382760'>you.</span> <span
  m='385760'>All</span> <span m='386250'>right.</span> <span
  m='387230'>So</span> <span m='388710'>not</span> <span m='388810'>much</span>
  <span m='389010'>left</span> <span m='389220'>to</span> <span
  m='389300'>do.</span> <span m='389580'>We</span> <span m='389740'>only
  have</span> <span m='389900'>to</span> <span m='390000'>eliminate</span> <span
  m='390380'>b over</span> <span m='390520'>a and</span> <span
  m='390870'>b</span> <span m='391030'>over</span> <span m='391200'>a.</span>
  <span m='391870'>That's</span> <span m='392290'>a</span> <span
  m='392710'>little</span> <span m='392940'>bit</span> <span
  m='394280'>computationally</span> <span m='394830'>heavy.</span> </p><p><span
  m='395460'>So</span> <span m='398020'>what do</span> <span
  m='398330'>you</span> <span m='398470'>have</span> <span m='398650'>to</span>
  <span m='398790'>do?</span> <span m='399260'>You just</span> <span
  m='399470'>have</span> <span m='399700'>to</span> <span
  m='400220'>basically</span> <span m='400690'>subtract--</span> <span
  m='401450'>replace</span> <span m='401860'>row</span> <span
  m='402020'>1</span> <span m='402390'>by</span> <span m='403055'>row</span>
  <span m='403340'>1</span> <span m='403680'>minus</span> <span
  m='404580'>b</span> <span m='404850'>over</span> <span m='405090'>a</span>
  <span m='405430'>times</span> <span m='405910'>row</span> <span
  m='406110'>2</span> <span m='406520'>plus</span> <span m='406870'>row</span>
  <span m='407220'>3.</span> <span m='407670'>Let me</span> <span
  m='407840'>write</span> <span m='408050'>that</span> <span
  m='408230'>down.</span> <span m='410090'>row</span> <span m='410400'>1</span>
  <span m='411420'>minus</span> <span m='412900'>b</span> <span
  m='413180'>over</span> <span m='413595'>a times</span> <span
  m='415240'>row</span> <span m='415860'>2</span> <span m='416320'>plus</span>
  <span m='418071'>row</span> <span m='418450'>3.</span> <span
  m='419130'>You</span> <span m='419210'>want</span> <span
  m='419450'>that</span> <span m='419840'>to</span> <span m='419990'>go</span>
  <span m='420210'>into</span> <span m='420370'>your row</span> <span
  m='420810'>1.</span> <span m='422540'>These</span> <span
  m='422680'>stay</span> <span m='423000'>the</span> <span
  m='423050'>same.</span> <span m='427970'>-1</span> <span
  m='428220'>over</span> <span m='428570'>a</span> <span m='428770'>minus</span>
  <span m='429035'>b.</span> <span m='429870'>1</span> <span
  m='430160'>over</span> <span m='430530'>a</span> <span m='430760'>minus</span>
  <span m='431260'>b.</span> </p><p><span m='441090'>This</span> <span
  m='441310'>is</span> <span m='441400'>where</span> <span m='441510'>I'm</span>
  <span m='441620'>going</span> <span m='441730'>to</span> <span
  m='441770'>go</span> <span m='441920'>to</span> <span m='442050'>my</span>
  <span m='442170'>notes</span> <span m='443710'>and</span> <span
  m='443800'>tell</span> <span m='444150'>you</span> <span
  m='444440'>that</span> <span m='444650'>these</span> <span
  m='444850'>numbers</span> <span m='445360'>are</span> <span
  m='447210'>1</span> <span m='447980'>over</span> <span m='449750'>a</span>
  <span m='449880'>minus</span> <span m='450310'>b,</span> <span
  m='450780'>0</span> <span m='451600'>minus</span> <span m='452070'>b</span>
  <span m='452390'>over</span> <span m='453560'>a,</span> <span
  m='454606'>a</span> <span m='454970'>minus</span> <span m='455360'>b.</span>
  <span m='457190'>That</span> <span m='457460'>looks</span> <span
  m='457650'>pretty</span> <span m='457880'>awful.</span> <span
  m='459210'>But</span> <span m='459430'>that</span> <span m='459650'>is</span>
  <span m='459880'>A</span> <span m='460080'>inverse.</span> <span
  m='461410'>And</span> <span m='462270'>we're</span> <span
  m='462430'>done.</span> </p><p><span m='463300'>Except</span> <span
  m='464520'>it</span> <span m='464660'>looks</span> <span
  m='464880'>terrible.</span> <span m='465290'>So</span> <span
  m='465410'>let</span> <span m='465490'>me</span> <span m='465580'>just</span>
  <span m='465790'>write</span> <span m='465960'>it</span> <span
  m='466110'>in</span> <span m='466270'>a</span> <span m='466480'>nicer</span>
  <span m='466800'>way.</span> <span m='468260'>A</span> <span
  m='468700'>inverse</span> <span m='469280'>equals--</span> <span
  m='469690'>see,</span> <span m='470110'>you're</span> <span
  m='470180'>dividing</span> <span m='470550'>everything</span> <span
  m='470860'>by</span> <span m='471050'>a</span> <span m='471120'>minus</span>
  <span m='471460'>b,</span> <span m='471680'>so</span> <span
  m='471860'>pull</span> <span m='472130'>out</span> <span
  m='472260'>that</span> <span m='472470'>factor.</span> <span
  m='477680'>1,</span> <span m='478130'>0,</span> <span m='479880'>minus</span>
  <span m='480320'>b</span> <span m='480530'>over</span> <span
  m='480710'>a;</span> <span m='481610'>-1,</span> <span m='482250'>1,</span>
  <span m='482580'>0;</span> <span m='483770'>0,</span> <span
  m='484310'>-1,</span> <span m='485110'>1.</span> <span m='486120'>Looks</span>
  <span m='486370'>much</span> <span m='486600'>better</span> <span
  m='486870'>now.</span> <span m='487710'>So</span> <span
  m='488120'>here's</span> <span m='488610'>your A</span> <span
  m='488820'>inverse.</span> </p><p><span m='489870'>And</span> <span
  m='490450'>the</span> <span m='490610'>other</span> <span
  m='490780'>question</span> <span m='491240'>was:</span> <span
  m='491720'>what</span> <span m='491890'>are</span> <span m='491960'>the</span>
  <span m='492050'>conditions</span> <span m='492530'>on</span> <span
  m='492670'>a</span> <span m='492860'>and</span> <span m='493010'>b</span>
  <span m='493720'>for</span> <span m='494730'>the</span> <span
  m='494900'>matrix</span> <span m='495340'>A</span> <span m='495510'>to</span>
  <span m='495620'>be</span> <span m='495750'>invertible?</span> <span
  m='496480'>Well,</span> <span m='497255'>a</span> <span m='497550'>has</span>
  <span m='497740'>to</span> <span m='497820'>be</span> <span
  m='497930'>non-zero,</span> <span m='498640'>and</span> <span
  m='498890'>a</span> <span m='499090'>has</span> <span m='499310'>to</span>
  <span m='499410'>be</span> <span m='499540'>different</span> <span
  m='499900'>from</span> <span m='499980'>b.</span> <span m='500850'>And</span>
  <span m='501000'>we're done.</span> <span m='501320'>That's</span> <span
  m='501610'>it</span> <span m='501740'>for</span> <span
  m='501840'>today.</span> <span m='502370'>See</span> <span
  m='502520'>you</span> <span m='502560'>next</span> <span
  m='502810'>time.</span> </p>
embedded_media:
  - uid: ebe4396b82562f19c10b5be2854e66ec
    parent_uid: 0118e59bf988ae9168d0d50bbdfc9ff3
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: zWxhmBCdvFs
  - uid: 605ced640b3f495e2d622997d4ba674b
    parent_uid: 0118e59bf988ae9168d0d50bbdfc9ff3
    id: 3Play-3PlayYouTubeid-SRT
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: zWxhmBCdvFs
  - uid: 80fcd67c3334f05d9021f9d206405abe
    parent_uid: 0118e59bf988ae9168d0d50bbdfc9ff3
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/itunes-u/inverse-matrices/id488155309?i=108454345
  - uid: 032efcc20c41050fa21a8eeaaa30db9b
    parent_uid: 0118e59bf988ae9168d0d50bbdfc9ff3
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      http://www.archive.org/download/MIT18.06SCF11/MIT18_06SC_110526_A1_300k.mp4
  - uid: 65ab9da8d04d1a82b30e13e78f3980d1
    parent_uid: 0118e59bf988ae9168d0d50bbdfc9ff3
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/zWxhmBCdvFs/default.jpg'
  - uid: 3fe97abaa6c0941bde4a213f7b85dcf3
    parent_uid: 0118e59bf988ae9168d0d50bbdfc9ff3
    id: zWxhmBCdvFs.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/inverse-matrices/zWxhmBCdvFs.srt
  - uid: e4c83d4ecccf6b842cd326d377fafb10
    parent_uid: 0118e59bf988ae9168d0d50bbdfc9ff3
    id: zWxhmBCdvFs.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/inverse-matrices/zWxhmBCdvFs.pdf
  - uid: f9eddfb330c0505f61ac72dcdeabac04
    parent_uid: 0118e59bf988ae9168d0d50bbdfc9ff3
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 5f8fd28c6cf8a719fe471dcd49e3251c
    parent_uid: 0118e59bf988ae9168d0d50bbdfc9ff3
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
