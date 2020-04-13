---
title: 'Problem Solving: Complex Matrices'
uid: c5c4b500a5b5aed015960b79e54350ba
parent_uid: 754d6be4ca3c378b6c8b2e4a955ffe64
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/problem-solving-complex-matrices
short_url: problem-solving-complex-matrices
inline_embed_id: 74032060problemsolvingcomplexmatrices88853503
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='5060'>DAVID SHIROKOFF: Hi</span> <span m='5520'>everyone.</span>
  <span m='6060'>Welcome</span> <span m='6330'>back.</span> </p><p><span
  m='7280'>So</span> <span m='7480'>today</span> <span m='8010'>we're</span>
  <span m='8130'>going</span> <span m='8290'>to</span> <span
  m='8350'>tackle</span> <span m='8660'>a</span> <span m='8710'>problem</span>
  <span m='9080'>in</span> <span m='9230'>complex</span> <span
  m='9640'>matrices.</span> <span m='10940'>And</span> <span
  m='11340'>specifically,</span> <span m='12470'>we're</span> <span
  m='12770'>going</span> <span m='12870'>to</span> <span m='12980'>look</span>
  <span m='13090'>at</span> <span m='13200'>diagonalizing</span> <span
  m='13950'>a</span> <span m='14080'>complex</span> <span
  m='14490'>matrix.</span> <span m='15280'>So</span> <span
  m='15630'>given</span> <span m='15900'>this</span> <span
  m='16050'>matrix</span> <span m='16410'>A,</span> <span m='17470'>we're</span>
  <span m='17690'>asked</span> <span m='17890'>to</span> <span
  m='17960'>find</span> <span m='18860'>its</span> <span
  m='19120'>eigenvalue</span> <span m='19670'>matrix</span> <span
  m='20070'>lambda,</span> <span m='20700'>and</span> <span m='20820'>its</span>
  <span m='21200'>eigenvector</span> <span m='21460'>matrix</span> <span
  m='21870'>S.</span> </p><p><span m='23150'>And</span> <span
  m='23480'>one</span> <span m='23670'>thing</span> <span m='23840'>to</span>
  <span m='23910'>note</span> <span m='24080'>about</span> <span
  m='24260'>this</span> <span m='24410'>matrix</span> <span m='24800'>A</span>
  <span m='25480'>is</span> <span m='25640'>that</span> <span
  m='25890'>if</span> <span m='26030'>we</span> <span m='26120'>take</span>
  <span m='26310'>its</span> <span m='26440'>conjugate</span> <span
  m='26860'>transpose,</span> <span m='28290'>it's</span> <span
  m='28460'>actually</span> <span m='28840'>equal</span> <span
  m='29060'>to</span> <span m='29200'>itself.</span> <span m='30310'>So</span>
  <span m='31290'>in</span> <span m='32119'>Professor</span> <span
  m='32549'>Strang's</span> <span m='33220'>book,</span> <span
  m='33550'>he</span> <span m='33810'>combines</span> <span
  m='34190'>this</span> <span m='34370'>notation</span> <span
  m='34910'>to</span> <span m='35000'>be</span> <span
  m='35510'>superscript</span> <span m='36170'>H</span> <span
  m='36650'>to</span> <span m='37160'>mean</span> <span
  m='37330'>conjugate</span> <span m='37730'>transpose.</span> <span
  m='39150'>So</span> <span m='39330'>if you were</span> <span
  m='39620'>to</span> <span m='39870'>take  the</span> <span
  m='39940'>transpose</span> <span m='40400'>of</span> <span
  m='40470'>this</span> <span m='40610'>matrix</span> <span m='40980'>and</span>
  <span m='41050'>then</span> <span m='41150'>conjugate</span> <span
  m='41600'>all</span> <span m='41710'>the</span> <span
  m='41790'>elements,</span> <span m='42510'>you would</span> <span
  m='42700'>find</span> <span m='42950'>that</span> <span m='43490'>A</span>
  <span m='43680'>equals</span> <span m='44640'>its</span> <span
  m='45680'>conjugate</span> <span m='46030'>transpose,</span> <span
  m='46540'>and</span> <span m='46630'>we</span> <span m='46710'>call</span>
  <span m='46910'>this</span> <span m='47050'>property</span> <span
  m='47440'>Hermitian.</span> </p><p><span m='48880'>So</span> <span
  m='49130'>I'll let you</span> <span m='49260'>think</span> <span
  m='49400'>about</span> <span m='49560'>this</span> <span m='49740'>for</span>
  <span m='49800'>a</span> <span m='49870'>moment</span> <span
  m='50510'>and</span> <span m='50650'>I'll</span> <span m='50730'>be</span>
  <span m='50810'>back</span> <span m='51040'>in</span> <span m='51080'>a</span>
  <span m='51120'>second.</span> </p><p><span m='63360'>OK,</span> <span
  m='63900'>welcome</span> <span m='64129'>back.</span> <span
  m='65120'>So</span> <span m='65239'>what's</span> <span m='65349'>the</span>
  <span m='65459'>first</span> <span m='65700'>step</span> <span
  m='65960'>in</span> <span m='66560'>computing</span> <span
  m='67130'>the</span> <span m='67450'>eigenvectors</span> <span
  m='68250'>and</span> <span m='68590'>eigenvalues</span> <span
  m='68880'>of</span> <span m='68930'>the</span> <span m='69000'>matrix?</span>
  <span m='69270'>It's</span> <span m='70010'>to</span> <span
  m='70120'>take</span> <span m='70270'>a</span> <span m='70310'>look</span>
  <span m='70470'>at</span> <span m='70530'>the</span> <span
  m='70610'>characteristic</span> <span m='71210'>equation.</span> <span
  m='73670'>So</span> <span m='73860'>specifically,</span> <span
  m='74480'>we</span> <span m='74580'>take</span> <span m='75130'>det</span>
  <span m='75440'>of</span> <span m='75740'>A</span> <span
  m='75870'>minus</span> <span m='76220'>lambda</span> <span m='76530'>i.</span>
  <span m='81830'>And</span> <span m='82060'>quite</span> <span
  m='82270'>possibly,</span> <span m='82660'>the</span> <span
  m='82790'>only</span> <span m='82980'>thing</span> <span m='83140'>new</span>
  <span m='83280'>with</span> <span m='83410'>this</span> <span
  m='83930'>problem</span> <span m='85080'>is</span> <span m='85390'>that</span>
  <span m='85800'>the</span> <span m='86300'>entries</span> <span
  m='86670'>of</span> <span m='86740'>the</span> <span m='86810'>matrix</span>
  <span m='87180'>A are</span> <span m='87410'>complex.</span> </p><p><span
  m='89130'>Now,</span> <span m='89370'>you</span> <span m='89580'>may</span>
  <span m='89680'>have</span> <span m='89800'>already</span> <span
  m='90020'>seen</span> <span m='90350'>that</span> <span
  m='93100'>lambda's</span> <span m='93570'>being</span> <span
  m='93800'>complex,</span> <span m='94370'>but</span> <span
  m='94640'>we're</span> <span m='94740'>going</span> <span m='94900'>to</span>
  <span m='94960'>work</span> <span m='95150'>this</span> <span
  m='95320'>out</span> <span m='95420'>explicitly.</span> <span
  m='96760'>So</span> <span m='96900'>if</span> <span m='96980'>I</span> <span
  m='97040'>take</span> <span m='97250'>the</span> <span
  m='97320'>determinant,</span> <span m='98050'>we</span> <span
  m='98190'>get</span> <span m='98700'>det</span> <span m='99500'>of</span>
  <span m='99970'>2</span> <span m='100190'>minus</span> <span
  m='100540'>lambda,</span> <span m='101640'>3</span> <span
  m='101850'>minus</span> <span m='102170'>lambda,</span> <span
  m='103730'>we</span> <span m='103850'>have</span> <span m='103980'>1</span>
  <span m='104180'>minus</span> <span m='104490'>i,</span> <span
  m='105280'>1</span> <span m='105480'>plus</span> <span m='105790'>i.</span>
  <span m='109720'>We</span> <span m='109920'>want</span> <span
  m='110080'>to</span> <span m='110120'>set</span> <span m='110300'>this</span>
  <span m='110450'>to</span> <span m='110550'>0.</span> <span
  m='113680'>This</span> <span m='113850'>then</span> <span
  m='114160'>gives</span> <span m='114360'>us</span> <span m='114460'>a</span>
  <span m='114520'>polynomial</span> <span m='115070'>for</span> <span
  m='115190'>lambda.</span> <span m='122630'>1</span> <span
  m='122830'>plus</span> <span m='123130'>i,</span> <span m='124130'>1</span>
  <span m='124450'>minus</span> <span m='124800'>i,</span> <span
  m='127420'>set</span> <span m='127650'>it</span> <span m='127760'>equal</span>
  <span m='127980'>to</span> <span m='128020'>0.</span> <span
  m='129460'>We</span> <span m='129570'>can</span> <span m='129699'>expand
  out</span> <span m='130199'>this</span> <span m='130370'>term.</span> <span
  m='131869'>You get</span> <span m='132260'>6</span> <span
  m='134040'>minus</span> <span m='134350'>5</span> <span
  m='134590'>lambda</span> <span m='135050'>plus</span> <span
  m='135360'>lambda</span> <span m='135600'>squared.</span> </p><p><span
  m='139150'>These</span> <span m='139350'>two</span> <span
  m='139470'>terms</span> <span m='140100'>you'll</span> <span
  m='140240'>note</span> <span m='140450'>are</span> <span
  m='140670'>complex</span> <span m='141110'>conjugates</span> <span
  m='141540'>of</span> <span m='141640'>each</span> <span
  m='141800'>other.</span> <span m='142520'>This</span> <span
  m='142650'>tends</span> <span m='142870'>to</span> <span
  m='142940'>make</span> <span m='143130'>things</span> <span
  m='143320'>simple.</span> <span m='144900'>So</span> <span
  m='145040'>we</span> <span m='145080'>have</span> <span
  m='145160'>minus</span> <span m='146180'>1</span> <span
  m='147400'>minus</span> <span m='147830'>i</span> <span
  m='148010'>squared</span> <span m='148400'>is</span> <span
  m='148510'>going</span> <span m='148650'>to</span> <span
  m='148690'>give</span> <span m='148820'>us</span> <span m='148980'>2.</span>
  <span m='150610'>Because</span> <span m='150880'>they're</span> <span
  m='151420'>differences</span> <span m='151850'>of</span> <span
  m='151930'>squares,</span> <span m='152680'>the cross</span> <span
  m='153060'>terms</span> <span m='153370'>involving</span> <span
  m='153800'>i</span> <span m='153980'>cancel,</span> <span
  m='157150'>and</span> <span m='157310'>we</span> <span m='157410'>get</span>
  <span m='157590'>the</span> <span m='157660'>characteristic</span> <span
  m='158180'>equation.</span> <span m='163570'>Lambda</span> <span
  m='163950'>squared</span> <span m='164310'>minus</span> <span
  m='164620'>5</span> <span m='164860'>lambda</span> <span
  m='166520'>plus</span> <span m='166810'>4</span> <span
  m='167010'>equals</span> <span m='167310'>0.</span> </p><p><span
  m='169540'>And</span> <span m='169720'>specifically,</span> <span
  m='170200'>we</span> <span m='170280'>can</span> <span
  m='170420'>factorize</span> <span m='170900'>this</span> <span
  m='171040'>equation.</span> <span m='174530'>We</span> <span
  m='174840'>see</span> <span m='175040'>that</span> <span
  m='175170'>there's</span> <span m='175390'>roots</span> <span
  m='176120'>of</span> <span m='176400'>minus</span> <span m='176750'>1--</span>
  <span m='180360'>or</span> <span m='180510'>factorizes</span> <span
  m='181140'>into</span> <span m='181700'>factors</span> <span
  m='182020'>of</span> <span m='182160'>lambda</span> <span
  m='182300'>minus</span> <span m='182580'>1</span> <span m='182750'>and</span>
  <span m='182820'>lambda</span> <span m='183080'>minus</span> <span
  m='183390'>4,</span> <span m='185430'>which</span> <span
  m='185650'>then</span> <span m='185860'>give</span> <span m='186000'>us</span>
  <span m='186140'>roots</span> <span m='186410'>of</span> <span
  m='186510'>lambda</span> <span m='186770'>is</span> <span m='186920'>1</span>
  <span m='188690'>and</span> <span m='188840'>lambda</span> <span
  m='189070'>is</span> <span m='189240'>4.</span> </p><p><span
  m='190390'>So</span> <span m='190550'>when</span> <span m='190810'>one</span>
  <span m='191060'>curious</span> <span m='191410'>point</span> <span
  m='191600'>to</span> <span m='191700'>note</span> <span m='192890'>is</span>
  <span m='193070'>that</span> <span m='193170'>the</span> <span
  m='193470'>eigenvalues</span> <span m='193800'>are</span> <span
  m='193860'>real</span> <span m='194290'>in</span> <span m='194450'>this</span>
  <span m='194630'>case.</span> <span m='195590'>1</span> <span
  m='195810'>and</span> <span m='195910'>4 are</span> <span
  m='196250'>real,</span> <span m='196820'>whereas</span> <span
  m='197200'>the</span> <span m='197260'>matrix</span> <span
  m='197540'>that</span> <span m='197660'>we</span> <span
  m='197740'>started</span> <span m='197980'>with</span> <span
  m='198230'>was</span> <span m='198390'>complex.</span> <span
  m='199430'>And</span> <span m='199550'>this</span> <span m='199660'>is</span>
  <span m='199780'>a</span> <span m='199830'>general</span> <span
  m='200130'>property</span> <span m='200660'>of</span> <span
  m='200910'>Hermitian</span> <span m='201270'>matrices.</span> <span
  m='202720'>So</span> <span m='202890'>even</span> <span
  m='203070'>though</span> <span m='203200'>they</span> <span
  m='203280'>might</span> <span m='203530'>be</span> <span
  m='203620'>complex</span> <span m='204070'>matrices,</span> <span
  m='205020'>Hermitian</span> <span m='205410'>matrices</span> <span
  m='205870'>always</span> <span m='206150'>have</span> <span
  m='206390'>real</span> <span m='206820'>eigenvalues.</span> </p><p><span
  m='209290'>So</span> <span m='209430'>this</span> <span m='209590'>is</span>
  <span m='209670'>the</span> <span m='209750'>first</span> <span
  m='210010'>step</span> <span m='210290'>when</span> <span
  m='211530'>asked</span> <span m='211760'>to</span> <span
  m='211850'>diagonalize</span> <span m='212040'>a</span> <span
  m='212360'>matrix.</span> <span m='213650'>The</span> <span
  m='213760'>second</span> <span m='214060'>step</span> <span
  m='215170'>is</span> <span m='215300'>to</span> <span m='215390'>find</span>
  <span m='215660'>the</span> <span m='215770'>eigenvectors.</span> <span
  m='225370'>And</span> <span m='225620'>to</span> <span m='225710'>do</span>
  <span m='225810'>that</span> <span m='226060'>what</span> <span
  m='226170'>we</span> <span m='226260'>have</span> <span m='226390'>to</span>
  <span m='226470'>do</span> <span m='226570'>is</span> <span
  m='226670'>we</span> <span m='226740'>have</span> <span m='226840'>to</span>
  <span m='226950'>look</span> <span m='227160'>at</span> <span
  m='228650'>the</span> <span m='228740'>cases</span> <span
  m='229130'>for</span> <span m='229230'>lambda</span> <span
  m='229480'>equals</span> <span m='229750'>1</span> <span m='230240'>and</span>
  <span m='230380'>lambda</span> <span m='230570'>is</span> <span
  m='230810'>equal</span> <span m='231060'>4</span> <span
  m='231300'>separately.</span> <span m='232770'>So</span> <span
  m='232930'>let's</span> <span m='233090'>first</span> <span
  m='233320'>look</span> <span m='233440'>at</span> <span m='233500'>the</span>
  <span m='233580'>case</span> <span m='233850'>of</span> <span
  m='233930'>lambda</span> <span m='234180'>is</span> <span
  m='234290'>equal</span> <span m='234490'>to</span> <span m='234550'>1.</span>
  <span m='239960'>And</span> <span m='240220'>specifically,</span> <span
  m='240730'>we're</span> <span m='240850'>going</span> <span
  m='241030'>to</span> <span m='241090'>be</span> <span
  m='241210'>looking</span> <span m='241530'>for a</span> <span
  m='241760'>vector</span> <span m='242630'>such</span> <span
  m='242950'>that</span> <span m='244170'>A</span> <span m='244390'>minus</span>
  <span m='244770'>lambda*I</span> <span m='246800'>times</span> <span
  m='247090'>the</span> <span m='247160'>vector</span> <span m='247951'>v</span>
  <span m='250597'>is</span> <span m='251040'>0.</span> <span
  m='253210'>And</span> <span m='253360'>if</span> <span m='253450'>we've</span>
  <span m='253590'>done</span> <span m='253780'>things</span> <span
  m='254000'>properly,</span> <span m='254670'>this</span> <span
  m='254840'>matrix</span> <span m='256500'>A</span> <span
  m='256630'>minus</span> <span m='256959'>lambda*I</span> <span
  m='257709'>should</span> <span m='257850'>be</span> <span
  m='257990'>singular.</span> </p><p><span m='260720'>So</span> <span
  m='260920'>if</span> <span m='260990'>we</span> <span m='261060'>take</span>
  <span m='262160'>A</span> <span m='262280'>minus</span> <span
  m='262600'>lambda*I,</span> <span m='263480'>we're</span> <span
  m='263580'>going</span> <span m='263730'>to</span> <span m='263770'>get</span>
  <span m='263950'>1,</span> <span m='265470'>1</span> <span
  m='265640'>minus</span> <span m='265950'>i;</span> <span m='267050'>1</span>
  <span m='267360'>plus</span> <span m='267690'>i,</span> <span
  m='269100'>3</span> <span m='269400'>minus</span> <span m='269700'>1</span>
  <span m='269870'>is</span> <span m='270010'>2.</span> <span
  m='272290'>And</span> <span m='272410'>I'll</span> <span
  m='272500'>write</span> <span m='272710'>out</span> <span
  m='272770'>components</span> <span m='273340'>of</span> <span
  m='273440'>v,</span> <span m='273790'>which</span> <span m='273960'>are</span>
  <span m='274240'>v_1</span> <span m='274470'>and</span> <span
  m='274710'>v_2.</span> <span m='277410'>And we</span> <span
  m='277590'>want</span> <span m='277800'>this</span> <span m='277940'>to</span>
  <span m='278030'>be</span> <span m='278140'>0.</span> <span
  m='280290'>And</span> <span m='281250'>you'll</span> <span
  m='281390'>note</span> <span m='281640'>that</span> <span
  m='282800'>it's</span> <span m='283850'>almost</span> <span
  m='284060'>always</span> <span m='284250'>the</span> <span
  m='284320'>case</span> <span m='284650'>that</span> <span
  m='285900'>when</span> <span m='286240'>we</span> <span m='286380'>work</span>
  <span m='286650'>out</span> <span m='286920'>A</span> <span
  m='287030'>minus</span> <span m='287370'>lambda*I,</span> <span
  m='288350'>the</span> <span m='288460'>second</span> <span
  m='288840'>row</span> <span m='289140'>is</span> <span m='289260'>going</span>
  <span m='289360'>to</span> <span m='289470'>be</span> <span
  m='289540'>a</span> <span m='289590'>constant</span> <span
  m='290030'>multiple</span> <span m='290450'>of</span> <span
  m='290520'>the</span> <span m='290600'>first</span> <span
  m='290930'>row.</span> <span m='292050'>And</span> <span
  m='292540'>this</span> <span m='292770'>must</span> <span m='292970'>be</span>
  <span m='293070'>the</span> <span m='293160'>case</span> <span
  m='293500'>because</span> <span m='294940'>these</span> <span
  m='295160'>two</span> <span m='295330'>rows</span> <span
  m='295740'>must</span> <span m='295980'>be</span> <span
  m='296090'>linearly</span> <span m='296500'>dependent</span> <span
  m='296950'>on</span> <span m='297090'>each</span> <span
  m='297240'>other</span> <span m='297690'>for</span> <span
  m='297850'>the</span> <span m='297960'>matrix</span> <span m='298350'>A</span>
  <span m='298430'>minus</span> <span m='298710'>lambda*I</span> <span
  m='299040'>to</span> <span m='299130'>be</span> <span
  m='299210'>singular.</span> </p><p><span m='300860'>So</span> <span
  m='301010'>if</span> <span m='301060'>you</span> <span m='301170'>look</span>
  <span m='301310'>at</span> <span m='301380'>this</span> <span
  m='301710'>you</span> <span m='301830'>might</span> <span
  m='302140'>think</span> <span m='302360'>that</span> <span
  m='303020'>these</span> <span m='303190'>two</span> <span
  m='303360'>rows</span> <span m='303640'>aren't</span> <span
  m='303790'>necessarily</span> <span m='304380'>linearly</span> <span
  m='304840'>independent.</span> <span m='306720'>But</span> <span
  m='307260'>the</span> <span m='307390'>point</span> <span m='307630'>is</span>
  <span m='307800'>that</span> <span m='308050'>there's</span> <span
  m='308240'>complex</span> <span m='308650'>numbers</span> <span
  m='308940'>involved.</span> <span m='309740'>And</span> <span
  m='310040'>indeed,</span> <span m='310420'>actually</span> <span
  m='310820'>if</span> <span m='310960'>we</span> <span m='311070'>were</span>
  <span m='311180'>to</span> <span m='311230'>multiply</span> <span
  m='311670'>this</span> <span m='311880'>first</span> <span
  m='312140'>row</span> <span m='312520'>by</span> <span m='312750'>1</span>
  <span m='313050'>plus</span> <span m='313350'>lambda,</span> <span
  m='314260'>we would</span> <span m='314430'>get</span> <span
  m='314580'>1</span> <span m='314750'>plus</span> <span
  m='315010'>lambda</span> <span m='315790'>and</span> <span
  m='315980'>2.</span> <span m='316990'>And</span> <span m='317110'>you</span>
  <span m='317210'>note</span> <span m='317490'>that</span> <span
  m='317860'>that's</span> <span m='318060'>exactly</span> <span
  m='318470'>the</span> <span m='318560'>second</span> <span
  m='318860'>row.</span> <span m='319940'>So</span> <span m='320130'>this</span>
  <span m='320250'>second</span> <span m='320630'>row</span> <span
  m='321040'>is</span> <span m='321230'>actually</span> <span
  m='321570'>1</span> <span m='321830'>plus</span> <span
  m='322070'>lambda</span> <span m='322380'>times</span> <span
  m='322640'>the</span> <span m='322720'>first</span> <span
  m='323000'>row.</span> <span m='323880'>So</span> <span
  m='324040'>these</span> <span m='324230'>rows</span> <span
  m='324490'>are</span> <span m='324590'>actually</span> <span
  m='324940'>linearly</span> <span m='325550'>dependent</span> <span
  m='325910'>on</span> <span m='326030'>each</span> <span
  m='326190'>other.</span> </p><p><span m='328140'>So</span> <span
  m='328260'>what</span> <span m='328380'>values</span> <span
  m='328700'>of</span> <span m='328790'>v_1</span> <span m='329150'>and</span>
  <span m='329280'>v_2</span> <span m='329450'>can</span> <span
  m='329580'>we</span> <span m='329680'>take?</span> <span
  m='330820'>Well,</span> <span m='331580'>we</span> <span
  m='331730'>just</span> <span m='331940'>need</span> <span m='332100'>to</span>
  <span m='332190'>make</span> <span m='332380'>this</span> <span
  m='332530'>top</span> <span m='332830'>row</span> <span
  m='333740'>multiplied</span> <span m='334210'>by</span> <span
  m='334330'>v_1</span> <span m='334800'>and</span> <span m='334930'>v_2</span>
  <span m='335100'>equal</span> <span m='335360'>to</span> <span
  m='335410'>0.</span> <span m='336350'>And</span> <span m='336460'>then</span>
  <span m='336550'>because</span> <span m='336810'>the</span> <span
  m='336970'>second</span> <span m='337130'>row</span> <span
  m='337320'>is</span> <span m='337540'>a</span> <span
  m='337750'>constant</span> <span m='338250'>multiple</span> <span
  m='338590'>of</span> <span m='338660'>the</span> <span m='338740'>first</span>
  <span m='339030'>row,</span> <span m='339630'>we're</span> <span
  m='339780'>automatically</span> <span m='340130'>guaranteed</span> <span
  m='340490'>that</span> <span m='340630'>the</span> <span
  m='340700'>second</span> <span m='340970'>equation</span> <span
  m='341320'>holds.</span> </p><p><span m='344790'>So</span> <span
  m='345200'>just</span> <span m='345410'>by</span> <span
  m='346020'>looking</span> <span m='346410'>at</span> <span
  m='346570'>it,</span> <span m='348680'>I'm</span> <span
  m='348790'>going</span> <span m='348910'>to</span> <span
  m='349030'>take</span> <span m='349400'>v_1</span> <span m='350170'>is</span>
  <span m='350320'>equal</span> <span m='350520'>to</span> <span
  m='350580'>1</span> <span m='350780'>minus</span> <span m='351140'>i,</span>
  <span m='352740'>and</span> <span m='353070'>v_2</span> <span
  m='354670'>is</span> <span m='354800'>negative</span> <span
  m='355140'>1.</span> <span m='357260'>So</span> <span m='357410'>we</span>
  <span m='357510'>see</span> <span m='357720'>that</span> <span
  m='358230'>1</span> <span m='358770'>times</span> <span m='359110'>1</span>
  <span m='359350'>minus</span> <span m='359660'>i</span> <span
  m='360310'>minus</span> <span m='360680'>1</span> <span
  m='361040'>times</span> <span m='361340'>1</span> <span
  m='361510'>minus</span> <span m='361820'>i</span> <span m='362290'>is</span>
  <span m='362440'>going</span> <span m='362610'>to</span> <span
  m='362650'>give</span> <span m='362820'>us</span> <span m='362950'>0.</span>
  <span m='363810'>So</span> <span m='363970'>this</span> <span
  m='364120'>is</span> <span m='364230'>one</span> <span
  m='364440'>solution.</span> <span m='365420'>And</span> <span
  m='365550'>of</span> <span m='365620'>course,</span> <span
  m='365840'>we</span> <span m='365900'>can</span> <span m='366070'>take</span>
  <span m='366310'>any</span> <span m='366500'>constant</span> <span
  m='366850'>multiple</span> <span m='367230'>times</span> <span
  m='367460'>this</span> <span m='367810'>eigenvector,</span> <span
  m='368390'>and</span> <span m='368500'>that's</span> <span
  m='368660'>also</span> <span m='368880'>going</span> <span
  m='369070'>to</span> <span m='369130'>be</span> <span m='369240'>an</span>
  <span m='369350'>eigenvector.</span> </p><p><span m='374810'>So</span> <span
  m='374960'>I'll</span> <span m='375040'>just</span> <span
  m='375230'>write</span> <span m='375410'>this</span> <span
  m='375490'>out.</span> <span m='376610'>1</span> <span m='376780'>minus</span>
  <span m='377110'>i,</span> <span m='378010'>minus</span> <span
  m='378380'>1</span> <span m='380260'>is</span> <span m='380390'>the</span>
  <span m='380510'>eigenvector</span> <span m='381220'>for</span> <span
  m='381410'>lambda</span> <span m='381630'>is</span> <span
  m='381740'>equal</span> <span m='381930'>to</span> <span m='381990'>1.</span>
  <span m='384640'>For</span> <span m='384730'>lambda</span> <span
  m='384930'>is</span> <span m='385040'>equal</span> <span m='385230'>to</span>
  <span m='385280'>4,</span> <span m='387910'>again,</span> <span
  m='388440'>A</span> <span m='388550'>minus</span> <span
  m='388900'>lambda*I</span> <span m='389370'>is</span> <span
  m='389520'>going</span> <span m='389660'>to</span> <span
  m='389700'>give</span> <span m='389870'>us</span> <span
  m='390820'>negative</span> <span m='391110'>2,</span> <span
  m='392810'>1</span> <span m='392950'>minus</span> <span m='393260'>i;</span>
  <span m='394870'>1</span> <span m='395100'>plus</span> <span
  m='395420'>i,</span> <span m='397620'>3</span> <span m='397890'>minus</span>
  <span m='398220'>lambda's</span> <span m='398570'>going</span> <span
  m='398670'>to</span> <span m='398770'>be</span> <span m='398890'>minus</span>
  <span m='399240'>1.</span> <span m='401440'>And</span> <span
  m='401840'>I'll</span> <span m='401950'>call</span> <span
  m='402170'>this</span> <span m='402340'>vector</span> <span
  m='402840'>u_1</span> <span m='403050'>and</span> <span m='403250'>u_2.</span>
  <span m='407400'>And</span> <span m='407530'>again,</span> <span
  m='407730'>we</span> <span m='407820'>want</span> <span m='408050'>u_1</span>
  <span m='408170'>and</span> <span m='408460'>u_2</span> <span
  m='408670'>equal</span> <span m='408880'>to</span> <span m='408930'>0--</span>
  <span m='410230'>or</span> <span m='410400'>sorry,</span> <span
  m='411170'>the</span> <span m='411270'>matrix</span> <span
  m='411620'>multiplied</span> <span m='412040'>by</span> <span
  m='412160'>[u_1,</span> <span m='412450'>u_2]</span> <span
  m='412990'>is</span> <span m='413180'>equal</span> <span m='413380'>to</span>
  <span m='413430'>0.</span> </p><p><span m='414880'>And</span> <span
  m='415150'>just</span> <span m='415300'>by</span> <span
  m='415400'>looking</span> <span m='415670'>at</span> <span
  m='415770'>this</span> <span m='415900'>again,</span> <span
  m='417010'>we</span> <span m='417280'>see</span> <span m='417430'>that</span>
  <span m='417570'>the</span> <span m='417650'>second</span> <span
  m='417960'>row</span> <span m='418140'>is</span> <span m='418250'>actually
  a</span> <span m='418580'>constant</span> <span m='418940'>multiple</span>
  <span m='419440'>of the</span> <span m='419650'>first</span> <span
  m='419860'>row.</span> <span m='421440'>For</span> <span
  m='421600'>example,</span> <span m='422630'>if</span> <span
  m='422820'>we</span> <span m='422880'>were</span> <span m='422980'>to</span>
  <span m='423050'>multiply</span> <span m='423750'>this</span> <span
  m='425480'>row</span> <span m='425720'>by</span> <span
  m='425860'>negative</span> <span m='426210'>2,</span> <span
  m='426700'>and</span> <span m='426810'>this</span> <span m='426960'>row</span>
  <span m='427140'>by</span> <span m='427290'>1</span> <span
  m='427550'>plus</span> <span m='428040'>i,</span> <span m='428670'>we
  would</span> <span m='429070'>see</span> <span m='429230'>that</span> <span
  m='429380'>they're</span> <span m='429490'>constant</span> <span
  m='429800'>multiples</span> <span m='430200'>of</span> <span
  m='430280'>each</span> <span m='430440'>other.</span> <span
  m='431790'>So</span> <span m='431920'>I</span> <span m='431990'>can</span>
  <span m='432150'>take</span> <span m='432670'>u</span> <span
  m='436130'>to</span> <span m='436520'>be,</span> <span m='437360'>for</span>
  <span m='437670'>example,</span> <span m='438340'>1,</span> <span
  m='439420'>and</span> <span m='439640'>1</span> <span m='439830'>plus</span>
  <span m='440100'>i.</span> <span m='442110'>How</span> <span
  m='442240'>did</span> <span m='442390'>I</span> <span m='442430'>get</span>
  <span m='442660'>this?</span> <span m='443770'>Well</span> <span
  m='444400'>I</span> <span m='444480'>just</span> <span
  m='444690'>looked</span> <span m='444860'>at</span> <span
  m='444930'>the</span> <span m='445000'>second</span> <span
  m='445290'>equation</span> <span m='445650'>because</span> <span
  m='445910'>it's</span> <span m='446030'>a</span> <span
  m='446090'>little</span> <span m='446280'>simpler,</span> <span
  m='447370'>and</span> <span m='447500'>I</span> <span m='447560'>said,</span>
  <span m='448270'>well,</span> <span m='448580'>if</span> <span
  m='448880'>I</span> <span m='448980'>have</span> <span m='449150'>1</span>
  <span m='449360'>plus</span> <span m='449620'>I</span> <span
  m='449770'>here,</span> <span m='450360'>I</span> <span m='450450'>can</span>
  <span m='450590'>just</span> <span m='450770'>say</span> <span
  m='450910'>multiply it</span> <span m='451400'>by</span> <span
  m='451550'>1.</span> <span m='452470'>And</span> <span m='452630'>then</span>
  <span m='453200'>minus</span> <span m='453560'>1</span> <span
  m='453810'>times</span> <span m='454080'>1</span> <span m='454270'>plus</span>
  <span m='454550'>i,</span> <span m='454720'>when</span> <span
  m='454910'>I</span> <span m='454970'>add</span> <span m='455220'>them</span>
  <span m='455360'>up,</span> <span m='455720'>is</span> <span
  m='455890'>going</span> <span m='456010'>to</span> <span
  m='456130'>vanish.</span> <span m='457380'>So</span> <span
  m='457550'>this</span> <span m='457700'>is</span> <span m='457790'>how</span>
  <span m='457900'>I</span> <span m='457980'>get</span> <span
  m='458170'>the</span> <span m='458240'>second</span> <span
  m='459070'>one.</span> </p><p><span m='460880'>Now</span> <span
  m='461040'>there's</span> <span m='461180'>something</span> <span
  m='461440'>curious</span> <span m='461820'>going</span> <span
  m='462030'>on,</span> <span m='463020'>and</span> <span m='463190'>this</span>
  <span m='463310'>is</span> <span m='463410'>going</span> <span
  m='463500'>to</span> <span m='463590'>be</span> <span
  m='463680'>another</span> <span m='463910'>property</span> <span m='464250'>of
  Hermitian</span> <span m='464700'>matrices.</span> <span m='465740'>But</span>
  <span m='466220'>if</span> <span m='466350'>you</span> <span
  m='466440'>actually</span> <span m='466760'>take</span> <span
  m='466930'>a</span> <span m='466970'>look</span> <span m='467140'>at</span>
  <span m='467210'>this</span> <span m='467630'>eigenvector,</span> <span
  m='468540'>it</span> <span m='468700'>will</span> <span m='468850'>be</span>
  <span m='468990'>orthogonal</span> <span m='469570'>to</span> <span
  m='469670'>this</span> <span m='469880'>eigenvector</span> <span
  m='470760'>when</span> <span m='470930'>we</span> <span
  m='471540'>conjugate</span> <span m='472210'>the</span> <span
  m='472310'>elements</span> <span m='472700'>and</span> <span
  m='472840'>dot</span> <span m='473030'>the</span> <span m='473120'>two</span>
  <span m='473260'>vectors</span> <span m='473590'>together.</span> <span
  m='474620'>So</span> <span m='474770'>this</span> <span m='474920'>is</span>
  <span m='475040'>another</span> <span m='475300'>very</span> <span
  m='475480'>special</span> <span m='475780'>property</span> <span
  m='476260'>of</span> <span m='477680'>complex</span> <span
  m='479180'>Hermitian</span> <span m='479530'>matrices.</span> </p><p><span
  m='482550'>OK,</span> <span m='482800'>so</span> <span m='482950'>the</span>
  <span m='483110'>last</span> <span m='483280'>step</span> <span
  m='483490'>now</span> <span m='484140'>is</span> <span m='484280'>to</span>
  <span m='484380'>construct</span> <span m='484810'>these</span> <span
  m='484960'>matrices</span> <span m='485420'>lambda</span> <span m='485790'>and
  S.</span> <span m='487480'>Now</span> <span m='487650'>we</span> <span
  m='487780'>already</span> <span m='487950'>know</span> <span
  m='488060'>what</span> <span m='488170'>lambda</span> <span
  m='488440'>is</span> <span m='488670'>because</span> <span
  m='488940'>it's</span> <span m='489880'>the</span> <span
  m='490180'>diagonal</span> <span m='490550'>matrix</span> <span
  m='490940'>with</span> <span m='491050'>the</span> <span
  m='491340'>eigenvalues</span> <span m='491750'>1</span> <span
  m='492000'>and</span> <span m='492100'>4.</span> <span m='493580'>So we</span>
  <span m='493690'>have</span> <span m='493810'>1,</span> <span
  m='494100'>0;</span> <span m='494790'>0</span> <span m='495080'>and</span>
  <span m='495200'>4.</span> <span m='501860'>Now</span> <span
  m='501990'>I'm</span> <span m='502070'>going</span> <span m='502260'>to</span>
  <span m='502320'>do</span> <span m='502450'>something</span> <span
  m='502770'>special</span> <span m='503100'>for</span> <span
  m='503280'>S.</span> <span m='504920'>I've</span> <span
  m='505810'>noted</span> <span m='506110'>that</span> <span
  m='506370'>these</span> <span m='506570'>two</span> <span
  m='507250'>vectors</span> <span m='507850'>u</span> <span
  m='508030'>and</span> <span m='508160'>v</span> <span m='508300'>are</span>
  <span m='508400'>orthogonal</span> <span m='508890'>to</span> <span
  m='509010'>each</span> <span m='509170'>other.</span> </p><p><span
  m='510210'>So</span> <span m='510370'>what</span> <span m='510490'>do</span>
  <span m='510570'>I</span> <span m='510640'>mean</span> <span
  m='510820'>by</span> <span m='510980'>orthogonal?</span> <span
  m='512169'>Specifically,</span> <span m='512740'>if</span> <span
  m='512860'>I</span> <span m='512909'>were</span> <span m='513020'>to</span>
  <span m='513110'>take</span> <span m='513350'>v</span> <span
  m='514460'>conjugate</span> <span m='514960'>transpose</span> <span
  m='515990'>and</span> <span m='516120'>multiply it</span> <span
  m='516559'>by</span> <span m='516760'>u,</span> <span m='518299'>we</span>
  <span m='518419'>would</span> <span m='518580'>end</span> <span
  m='518720'>up</span> <span m='518820'>getting</span> <span m='519570'>1</span>
  <span m='520190'>plus</span> <span m='520470'>i</span> <span
  m='523039'>minus</span> <span m='523380'>1.</span> <span
  m='525370'>This</span> <span m='525530'>would</span> <span
  m='525630'>be</span> <span m='525910'>v</span> <span
  m='526160'>conjugate</span> <span m='526580'>transpose.</span> <span
  m='528210'>1,</span> <span m='528800'>1</span> <span m='529080'>plus</span>
  <span m='529350'>i,</span> <span m='532800'>and</span> <span
  m='532910'>we</span> <span m='533000'>see</span> <span m='533150'>that</span>
  <span m='533250'>when</span> <span m='533370'>we</span> <span
  m='533460'>multiply</span> <span m='533890'>these</span> <span
  m='534120'>out</span> <span m='534940'>we</span> <span m='535060'>get</span>
  <span m='535220'>0.</span> </p><p><span m='539460'>So</span> <span
  m='539630'>when</span> <span m='539740'>we</span> <span m='539850'>have</span>
  <span m='540140'>orthogonal</span> <span m='540880'>eigenvectors,</span> <span
  m='541370'>there's</span> <span m='541590'>a</span> <span
  m='541690'>trick</span> <span m='541950'>that</span> <span
  m='542040'>we</span> <span m='542140'>can</span> <span m='542280'>do</span>
  <span m='542690'>to</span> <span m='542820'>build up</span> <span
  m='543150'>this</span> <span m='543310'>matrix</span> <span
  m='543720'>S</span> <span m='543980'>and</span> <span m='544070'>S</span>
  <span m='544240'>inverse.</span> <span m='546150'>What</span> <span
  m='546290'>we</span> <span m='546380'>can</span> <span m='546470'>do</span>
  <span m='546560'>is</span> <span m='546660'>we</span> <span
  m='546750'>can</span> <span m='546920'>normalize</span> <span
  m='547460'>u</span> <span m='548190'>and</span> <span m='548360'>v.</span>
  <span m='549540'>So</span> <span m='549710'>specifically,</span> <span
  m='550970'>we</span> <span m='551100'>can</span> <span m='551240'>take</span>
  <span m='552000'>any</span> <span m='552220'>constant</span> <span
  m='552570'>multiple</span> <span m='552940'>of</span> <span
  m='553060'>u</span> <span m='553210'>and</span> <span m='553350'>v,</span>
  <span m='554210'>and</span> <span m='554540'>it's</span> <span
  m='554680'>still</span> <span m='554870'>going</span> <span
  m='555040'>to</span> <span m='555080'>be</span> <span m='555190'>an</span>
  <span m='555310'>eigenvector.</span> </p><p><span m='556920'>So</span> <span
  m='557110'>what</span> <span m='557220'>I'm</span> <span
  m='557310'>going</span> <span m='557430'>to</span> <span m='557550'>do</span>
  <span m='557660'>is</span> <span m='557750'>I'm</span> <span
  m='557830'>going</span> <span m='557960'>to</span> <span
  m='558090'>take</span> <span m='558340'>u</span> <span m='558530'>and</span>
  <span m='558610'>v</span> <span m='558750'>and</span> <span
  m='559150'>multiply</span> <span m='559670'>them</span> <span
  m='560050'>by</span> <span m='560210'>their</span> <span
  m='560360'>length.</span> <span m='562020'>So</span> <span
  m='562190'>for</span> <span m='562300'>example</span> <span
  m='562660'>u,</span> <span m='563840'>the</span> <span
  m='563990'>amplitude</span> <span m='564460'>of</span> <span
  m='564540'>its</span> <span m='564740'>top</span> <span
  m='565420'>component</span> <span m='565890'>is</span> <span
  m='565990'>1.</span> <span m='567420'>The</span> <span
  m='567530'>amplitude</span> <span m='568020'>of</span> <span
  m='568100'>its</span> <span m='568560'>bottom</span> <span
  m='568820'>component</span> <span m='569490'>is</span> <span
  m='569720'>2.</span> <span m='570310'>So</span> <span m='570480'>notice</span>
  <span m='570760'>that</span> <span m='570870'>the</span> <span
  m='570940'>modulus</span> <span m='571370'>of</span> <span
  m='571510'>the</span> <span m='571600'>complex</span> <span
  m='572020'>number</span> <span m='572260'>1</span> <span
  m='572470'>plus</span> <span m='572730'>I</span> <span m='572910'>is</span>
  <span m='573090'>2.</span> <span m='574430'>So</span> <span
  m='576040'>we</span> <span m='576240'>have--</span> <span
  m='579480'>sorry,</span> <span m='579750'>it's</span> <span
  m='580190'>root</span> <span m='580480'>2,</span> <span m='582520'>the</span>
  <span m='582610'>complex</span> <span m='582950'>modulus</span> <span
  m='583470'>is</span> <span m='583570'>root</span> <span m='583780'>2.</span>
  <span m='584680'>So</span> <span m='584890'>the</span> <span
  m='584980'>amplitude</span> <span m='585480'>of</span> <span
  m='585620'>the</span> <span m='586360'>entire</span> <span
  m='586730'>vector</span> <span m='587880'>is</span> <span
  m='588270'>root</span> <span m='588550'>3.</span> <span m='588990'>It's</span>
  <span m='589220'>1</span> <span m='589740'>plus</span> <span
  m='590020'>2</span> <span m='590200'>squared</span> <span
  m='590600'>quantity</span> <span m='590960'>square</span> <span
  m='591230'>rooted,</span> <span m='591530'>so</span> <span m='591650'>it's
  root</span> <span m='591940'>3.</span> </p><p><span m='593150'>So what</span>
  <span m='593330'>we</span> <span m='593420'>can</span> <span
  m='593530'>do</span> <span m='593630'>is</span> <span m='593720'>we</span>
  <span m='593790'>can</span> <span m='593920'>build</span> <span
  m='594140'>up</span> <span m='594240'>this</span> <span
  m='595310'>matrix</span> <span m='595710'>S</span> <span
  m='597840'>using</span> <span m='598100'>a</span> <span
  m='598140'>normalization</span> <span m='598820'>factor of</span> <span
  m='599210'>1</span> <span m='599450'>over root</span> <span
  m='599750'>3.</span> <span m='605020'>And</span> <span m='605360'>I'm</span>
  <span m='605470'>going</span> <span m='605650'>to</span> <span
  m='605710'>take</span> <span m='606496'>the--</span> <span
  m='608400'>the</span> <span m='608960'>first</span> <span
  m='609980'>column</span> <span m='610370'>is</span> <span
  m='610520'>the</span> <span m='610790'>first</span> <span
  m='611340'>eigenvector</span> <span m='611590'>that</span> <span
  m='611700'>corresponds</span> <span m='612150'>to eigenvalue</span> <span
  m='612730'>1.</span> <span m='613980'>And</span> <span m='614090'>then</span>
  <span m='614220'>the</span> <span m='614300'>second</span> <span
  m='615130'>column</span> <span m='616400'>is</span> <span
  m='616520'>the</span> <span m='616710'>second</span> <span
  m='617580'>eigenvector</span> <span m='617930'>which</span> <span
  m='618120'>corresponds</span> <span m='618620'>to</span> <span
  m='618870'>eigenvalue</span> <span m='619110'>4.</span> <span
  m='620870'>And</span> <span m='621220'>the</span> <span
  m='621320'>reason</span> <span m='621570'>I</span> <span m='621670'>put</span>
  <span m='621940'>in</span> <span m='622060'>this</span> <span
  m='622210'>root</span> <span m='622430'>3</span> <span m='622650'>here</span>
  <span m='623630'>is</span> <span m='623790'>to</span> <span
  m='623900'>make</span> <span m='624130'>this</span> <span
  m='624310'>column</span> <span m='625640'>unit</span> <span
  m='625990'>length</span> <span m='626210'>1,</span> <span
  m='626780'>and</span> <span m='626920'>this</span> <span
  m='627070'>column</span> <span m='627380'>unit</span> <span
  m='627670'>length</span> <span m='627900'>1.</span> </p><p><span
  m='629280'>And</span> <span m='629940'>the</span> <span
  m='630260'>reason</span> <span m='630480'>I</span> <span m='630570'>do</span>
  <span m='630750'>this</span> <span m='632250'>is</span> <span
  m='632400'>because</span> <span m='634720'>now</span> <span
  m='635040'>this</span> <span m='635270'>matrix</span> <span
  m='635710'>S,</span> <span m='638440'>it's</span> <span
  m='638600'>possible</span> <span m='638970'>to</span> <span
  m='639050'>check</span> <span m='639340'>that</span> <span
  m='639970'>this</span> <span m='640120'>matrix</span> <span
  m='640530'>S</span> <span m='640960'>is</span> <span
  m='641150'>actually</span> <span m='641560'>unitary,</span> <span
  m='642550'>which</span> <span m='642870'>means</span> <span
  m='643120'>that</span> <span m='643270'>its</span> <span
  m='643510'>inverse</span> <span m='647050'>is</span> <span
  m='647210'>actually</span> <span m='647630'>just</span> <span
  m='648030'>equal</span> <span m='648330'>to</span> <span
  m='650350'>it's</span> <span m='650520'>conjugate</span> <span
  m='650860'>transpose.</span> <span m='653690'>So</span> <span
  m='653920'>this</span> <span m='654150'>is</span> <span m='654280'>a</span>
  <span m='654320'>very</span> <span m='654510'>special</span> <span
  m='654820'>property</span> <span m='656070'>of</span> <span
  m='656190'>the</span> <span m='656290'>eigenvectors</span> <span
  m='657100'>of</span> <span m='657310'>a Hermitian</span> <span
  m='657730'>matrix.</span> </p><p><span m='661370'>And</span> <span
  m='661510'>then</span> <span m='661620'>lastly,</span> <span
  m='661980'>I'm</span> <span m='662060'>just</span> <span
  m='662230'>going</span> <span m='662330'>to</span> <span
  m='662440'>write</span> <span m='662620'>down</span> <span
  m='662770'>the</span> <span m='662850'>diagonalization</span> <span
  m='663640'>of</span> <span m='663730'>A.</span> <span m='665090'>So</span>
  <span m='665250'>if</span> <span m='665350'>I</span> <span
  m='665480'>have</span> <span m='665670'>A,</span> <span
  m='667390'>because</span> <span m='667690'>I</span> <span
  m='667740'>have</span> <span m='667910'>its</span> <span
  m='668290'>eigenvector</span> <span m='668520'>matrix</span> <span
  m='668890'>S,</span> <span m='669580'>and</span> <span m='669690'>its</span>
  <span m='669820'>eigenvalue</span> <span m='670260'>matrix</span> <span
  m='670740'>lambda,</span> <span m='672320'>it's</span> <span
  m='672550'>possible</span> <span m='672970'>to</span> <span
  m='673050'>decompose</span> <span m='673650'>A</span> <span m='674820'>into
  a</span> <span m='675110'>product of</span> <span m='675590'>S</span> <span
  m='676060'>lambda S</span> <span m='676300'>inverse.</span> <span
  m='677730'>And</span> <span m='677880'>because</span> <span
  m='678250'>S</span> <span m='678480'>is</span> <span
  m='680200'>unitary,</span> <span m='684620'>its</span> <span
  m='684810'>inverse</span> <span m='685280'>is</span> <span
  m='685420'>actually</span> <span m='686810'>its</span> <span
  m='687010'>conjugate</span> <span m='687410'>transpose.</span> </p><p><span
  m='689940'>So</span> <span m='690110'>just</span> <span m='690290'>to</span>
  <span m='690360'>put</span> <span m='690480'>the</span> <span
  m='690560'>pieces</span> <span m='690880'>together,</span> <span
  m='692580'>we</span> <span m='692860'>have</span> <span m='693010'>A</span>
  <span m='693660'>is</span> <span m='693850'>equal</span> <span
  m='694120'>to</span> <span m='694280'>S--</span> <span m='695110'>which</span>
  <span m='695460'>is</span> <span m='695560'>1</span> <span m='695730'>over
  root</span> <span m='696010'>3</span> <span m='700410'>1</span> <span
  m='700620'>minus</span> <span m='700940'>i,</span> <span
  m='701520'>minus</span> <span m='701860'>1;</span> <span m='702820'>1,</span>
  <span m='703220'>1</span> <span m='703460'>plus</span> <span
  m='703740'>i--</span> <span m='705900'>times</span> <span
  m='706140'>the</span> <span m='706180'>diagonal</span> <span
  m='706560'>matrix</span> <span m='707210'>[1,</span> <span
  m='707850'>0;</span> <span m='708520'>0,</span> <span m='708790'>4]</span>
  <span m='711410'>times</span> <span m='711750'>S</span> <span
  m='712000'>inverse,</span> <span m='713850'>which</span> <span
  m='714150'>is</span> <span m='714270'>going</span> <span m='714370'>to</span>
  <span m='714480'>be</span> <span m='714560'>its</span> <span
  m='714690'>conjugate</span> <span m='715050'>transpose.</span> <span
  m='716850'>So</span> <span m='717000'>what</span> <span m='717100'>I</span>
  <span m='717170'>do</span> <span m='717310'>is</span> <span
  m='717400'>I</span> <span m='717460'>conjugate</span> <span
  m='717960'>each</span> <span m='718150'>element,</span> <span
  m='718740'>so</span> <span m='718990'>1</span> <span m='719410'>minus</span>
  <span m='719740'>i</span> <span m='719850'>becomes</span> <span
  m='720150'>1</span> <span m='720320'>plus</span> <span m='720610'>i</span>
  <span m='721050'>and</span> <span m='721190'>vice</span> <span
  m='721410'>versa.</span> <span m='722320'>And</span> <span
  m='722460'>then</span> <span m='722560'>I</span> <span m='722630'>take</span>
  <span m='722950'>the</span> <span m='723020'>transpose.</span> <span
  m='724530'>So</span> <span m='724650'>I</span> <span m='724690'>get</span>
  <span m='724850'>1</span> <span m='725020'>plus</span> <span
  m='725290'>i.</span> <span m='726420'>Transposing</span> <span
  m='727410'>swaps</span> <span m='727890'>the</span> <span m='727990'>minus
  1</span> <span m='728360'>and</span> <span m='728470'>1.</span> <span
  m='732090'>And</span> <span m='732280'>at</span> <span m='732370'>the</span>
  <span m='732460'>end</span> <span m='732550'>of</span> <span
  m='732650'>the</span> <span m='732730'>day,</span> <span m='733100'>I</span>
  <span m='733210'>get</span> <span m='733440'>S</span> <span
  m='733630'>inverse</span> <span m='734130'>is</span> <span
  m='735690'>just</span> <span m='735920'>this</span> <span
  m='736300'>matrix</span> <span m='736660'>here.</span> </p><p><span
  m='739120'>And</span> <span m='739490'>if</span> <span m='739620'>you</span>
  <span m='739720'>were</span> <span m='739810'>to</span> <span
  m='739930'>multiply</span> <span m='740320'>these</span> <span
  m='740490'>matrices</span> <span m='740940'>out,</span> <span m='741870'>you
  would</span> <span m='742070'>see</span> <span m='742200'>it</span> <span
  m='742320'>you</span> <span m='742430'>actually</span> <span
  m='742770'>do</span> <span m='742920'>recover A.</span> </p><p><span
  m='746660'>So</span> <span m='746930'>just</span> <span m='747120'>to</span>
  <span m='747190'>summarize</span> <span m='748220'>quickly,</span> <span
  m='749490'>even</span> <span m='749680'>though</span> <span
  m='749790'>we</span> <span m='749900'>were</span> <span
  m='750010'>given</span> <span m='750180'>a</span> <span
  m='750230'>complex</span> <span m='750630'>matrix</span> <span
  m='750930'>A,</span> <span m='751690'>the</span> <span
  m='752110'>process</span> <span m='752510'>to</span> <span
  m='752610'>diagonalize</span> <span m='753050'>A</span> <span
  m='753760'>is</span> <span m='753950'>the</span> <span m='754040'>same</span>
  <span m='754300'>as</span> <span m='754400'>what</span> <span
  m='754510'>we've</span> <span m='754650'>seen</span> <span
  m='754830'>before.</span> <span m='755580'>The</span> <span
  m='755680'>first</span> <span m='755890'>step</span> <span
  m='756230'>is</span> <span m='756970'>to</span> <span m='757110'>find</span>
  <span m='757410'>the</span> <span m='757520'>characteristic</span> <span
  m='758320'>equation</span> <span m='758770'>and</span> <span
  m='758840'>the</span> <span m='759160'>eigenvalues.</span> <span
  m='759950'>And</span> <span m='760070'>then</span> <span m='760170'>the</span>
  <span m='760340'>second</span> <span m='760510'>step</span> <span
  m='760730'>is</span> <span m='760840'>to</span> <span m='760930'>find</span>
  <span m='761130'>the</span> <span m='761210'>eigenvectors,</span> <span
  m='762380'>and</span> <span m='762500'>you</span> <span m='762590'>do</span>
  <span m='762710'>this</span> <span m='762880'>in</span> <span
  m='762940'>the</span> <span m='763020'>same</span> <span
  m='763230'>procedure.</span> <span m='764580'>But</span> <span
  m='764910'>in</span> <span m='765030'>general,</span> <span
  m='765500'>the</span> <span m='765650'>eigenvectors</span> <span
  m='766230'>can</span> <span m='766370'>be</span> <span
  m='767060'>complex.</span> <span m='768150'>And</span> <span
  m='768540'>for</span> <span m='768700'>this</span> <span
  m='768890'>very</span> <span m='769090'>special</span> <span
  m='769410'>case,</span> <span m='770870'>when</span> <span m='771100'>A</span>
  <span m='771310'>is</span> <span m='771750'>Hermitian,</span> <span
  m='772440'>the</span> <span m='772780'>eigenvalues</span> <span
  m='773120'>are</span> <span m='773210'>real,</span> <span
  m='773690'>and</span> <span m='773850'>the</span> <span
  m='773940'>eigenvectors</span> <span m='774530'>are</span> <span
  m='774650'>orthogonal</span> <span m='775140'>to</span> <span
  m='775260'>each</span> <span m='775420'>other.</span> </p><p><span
  m='776750'>So</span> <span m='776940'>I</span> <span m='777020'>think</span>
  <span m='777190'>I'll</span> <span m='777300'>conclude</span> <span
  m='777660'>here,</span> <span m='778080'>and</span> <span
  m='778210'>I'll</span> <span m='778280'>see</span> <span m='778410'>you</span>
  <span m='778470'>next</span> <span m='778690'>time.</span> </p>
embedded_media:
  - uid: 018c45e177ef3e02aad05747e236fe5f
    parent_uid: c5c4b500a5b5aed015960b79e54350ba
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: VYS9EYZ3gCo
  - uid: 1d6198bad3a58db7e787d2f9a1aec2d1
    parent_uid: c5c4b500a5b5aed015960b79e54350ba
    id: 3Play-3PlayYouTubeid-SRT
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: VYS9EYZ3gCo
  - uid: b192b64e7e6bd64a0946ceba7bac55b5
    parent_uid: c5c4b500a5b5aed015960b79e54350ba
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/itunes-u/complex-matrices/id488155309?i=108454342
  - uid: 2255baf3d4a62cbb0f124ce93518b4f9
    parent_uid: c5c4b500a5b5aed015960b79e54350ba
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      http://www.archive.org/download/MIT18.06SCF11/MIT18_06SC_110711_D2_300k.mp4
  - uid: a3b77ee26e2c55493712d684dc83286d
    parent_uid: c5c4b500a5b5aed015960b79e54350ba
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/VYS9EYZ3gCo/default.jpg'
  - uid: 8ed0a183bca787a072af38300196fdb0
    parent_uid: c5c4b500a5b5aed015960b79e54350ba
    id: VYS9EYZ3gCo.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/problem-solving-complex-matrices/VYS9EYZ3gCo.srt
  - uid: a30fc93b54c4c886b69eb617f6471973
    parent_uid: c5c4b500a5b5aed015960b79e54350ba
    id: VYS9EYZ3gCo.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/resource-index/problem-solving-complex-matrices/VYS9EYZ3gCo.pdf
  - uid: f1029dccb26aba7681b063d48357a83f
    parent_uid: c5c4b500a5b5aed015960b79e54350ba
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: e72fa927f6eb8489e24aeb1e909bd662
    parent_uid: c5c4b500a5b5aed015960b79e54350ba
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
