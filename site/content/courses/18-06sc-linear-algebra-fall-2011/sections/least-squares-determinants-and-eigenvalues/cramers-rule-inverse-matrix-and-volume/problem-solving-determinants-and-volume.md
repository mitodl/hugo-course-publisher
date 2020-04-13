---
title: 'Problem Solving: Determinants and Volume'
uid: f6e781f0de7c94d0b9cec28358af07e2
parent_uid: 86cb2711cb7c431342dec1540dfe8ce2
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/least-squares-determinants-and-eigenvalues/cramers-rule-inverse-matrix-and-volume/problem-solving-determinants-and-volume
short_url: problem-solving-determinants-and-volume
inline_embed_id: '77744357problemsolving:determinantsandvolume36950161'
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='7080'>LINAN CHEN: Hello.</span> <span m='7780'>Welcome</span>
  <span m='8260'>back</span> <span m='8440'>to</span> <span
  m='8550'>recitation.</span> <span m='9870'>I'm</span> <span
  m='10050'>sure</span> <span m='10440'>you</span> <span m='10620'>are</span>
  <span m='10680'>becoming</span> <span m='11280'>more</span> <span
  m='11610'>and</span> <span m='11850'>more</span> <span
  m='12050'>familiar</span> <span m='12760'>with</span> <span
  m='12950'>the</span> <span m='13030'>determinants</span> <span
  m='13640'>of</span> <span m='13680'>matrices.</span> <span m='15220'>In</span>
  <span m='15370'>the</span> <span m='15480'>lecture,</span> <span
  m='16100'>we</span> <span m='16410'>also</span> <span m='16740'>learned</span>
  <span m='17120'>the</span> <span m='17190'>geometric</span> <span
  m='17940'>interpretation</span> <span m='18880'>of</span> <span
  m='18980'>the</span> <span m='19070'>determinant.</span> <span
  m='20780'>The</span> <span m='20980'>absolute</span> <span
  m='21400'>value</span> <span m='21860'>of</span> <span m='22060'>the</span>
  <span m='22150'>determinant</span> <span m='22970'>of</span> <span
  m='23500'>a</span> <span m='23600'>matrix</span> <span m='24660'>is</span>
  <span m='24820'>simply</span> <span m='25210'>equal</span> <span
  m='25740'>to</span> <span m='25850'>the</span> <span m='25970'>volume</span>
  <span m='26880'>of</span> <span m='27110'>the</span> <span
  m='27210'>parallelepiped</span> <span m='28250'>spanned</span> <span
  m='28730'>by</span> <span m='29120'>the</span> <span m='29260'>row</span>
  <span m='29500'>vectors</span> <span m='29940'>of</span> <span
  m='30380'>that</span> <span m='30560'>matrix.</span> <span m='32040'>So</span>
  <span m='32460'>today,</span> <span m='33210'>we're</span> <span
  m='33460'>going</span> <span m='33750'>to</span> <span m='33870'>apply</span>
  <span m='34310'>this</span> <span m='34710'>fact</span> <span
  m='35600'>to</span> <span m='35780'>solve</span> <span m='36180'>the</span>
  <span m='36290'>following</span> <span m='36890'>problem.</span> </p><p><span
  m='38420'>I</span> <span m='38540'>have</span> <span m='38930'>a</span> <span
  m='39050'>tetrahedron,</span> <span m='40010'>T,</span> <span
  m='41060'>in</span> <span m='41460'>this</span> <span m='41870'>3D</span>
  <span m='42490'>space.</span> <span m='43990'>And</span> <span
  m='44400'>the</span> <span m='44570'>vertices</span> <span m='45130'>of</span>
  <span m='45260'>T</span> <span m='45930'>are</span> <span
  m='46050'>given</span> <span m='46490'>by</span> <span m='46890'>O,</span>
  <span m='47480'>which</span> <span m='47710'>is</span> <span
  m='47840'>the</span> <span m='48150'>origin,</span> <span
  m='49200'>A_1,</span> <span m='50840'>A_2,</span> <span m='52260'>and</span>
  <span m='52490'>A_3.</span> <span m='54040'>So</span> <span m='54480'>I</span>
  <span m='54640'>have</span> <span m='55010'>highlighted</span> <span
  m='55600'>this</span> <span m='55780'>tetrahedron</span> <span
  m='56940'>using</span> <span m='57780'>the</span> <span m='57970'>blue</span>
  <span m='58330'>chalk.</span> <span m='59190'>So</span> <span
  m='59570'>this</span> <span m='59930'>is</span> <span m='60420'>T.</span>
  </p><p><span m='63270'>And</span> <span m='63450'>our</span> <span
  m='63690'>first</span> <span m='64099'>goal</span> <span m='64590'>is</span>
  <span m='64780'>to</span> <span m='64920'>compute</span> <span
  m='65530'>the</span> <span m='65620'>volume</span> <span m='66210'>of</span>
  <span m='66340'>T</span> <span m='67120'>using</span> <span
  m='67990'>the</span> <span m='68120'>determinant.</span> <span
  m='70330'>And</span> <span m='71060'>the</span> <span m='71320'>second</span>
  <span m='71580'>part</span> <span m='71950'>is:</span> <span
  m='72720'>if</span> <span m='72980'>I</span> <span m='73100'>fix</span> <span
  m='73530'>A_1</span> <span m='74070'>and</span> <span m='74220'>A_2,</span>
  <span m='75260'>but</span> <span m='75570'>move</span> <span
  m='76140'>A_3</span> <span m='77190'>to</span> <span m='77740'>another</span>
  <span m='78230'>point,</span> <span m='78700'>A_3</span> <span
  m='79170'>prime,</span> <span m='79840'>which</span> <span m='80130'>is</span>
  <span m='80280'>given</span> <span m='80650'>by</span> <span
  m='80850'>this</span> <span m='81150'>coordinate,</span> <span
  m='82730'>I</span> <span m='82830'>ask</span> <span m='83190'>you</span> <span
  m='83380'>to</span> <span m='83520'>compute</span> <span m='84130'>the</span>
  <span m='84220'>volume</span> <span m='84740'>again.</span> <span
  m='86370'>OK.</span> </p><p><span m='87130'>So</span> <span
  m='87570'>since</span> <span m='87910'>we</span> <span m='88030'>want</span>
  <span m='88360'>to</span> <span m='88470'>use</span> <span
  m='89450'>the</span> <span m='89650'>fact</span> <span m='90030'>that</span>
  <span m='90670'>the</span> <span m='90820'>determinant</span> <span
  m='91460'>is</span> <span m='91610'>related</span> <span m='92120'>to</span>
  <span m='92200'>the</span> <span m='92320'>volume,</span> <span
  m='93520'>we</span> <span m='93720'>have</span> <span m='93920'>to</span>
  <span m='94060'>figure</span> <span m='94460'>out</span> <span
  m='95550'>which</span> <span m='95860'>volume</span> <span m='96280'>we</span>
  <span m='96370'>should</span> <span m='96500'>be</span> <span
  m='96640'>looking</span> <span m='97030'>at.</span> <span m='97680'>We</span>
  <span m='97950'>know</span> <span m='98210'>that</span> <span
  m='98410'>the</span> <span m='98470'>determinant</span> <span
  m='99660'>is</span> <span m='99990'>related</span> <span m='100660'>to</span>
  <span m='100720'>the</span> <span m='100830'>volume</span> <span
  m='101430'>of</span> <span m='101670'>a</span> <span
  m='101760'>parallelepiped.</span> <span m='103060'>But</span> <span
  m='103270'>here,</span> <span m='103800'>we</span> <span
  m='104140'>only</span> <span m='104410'>have</span> <span m='104640'>a</span>
  <span m='104710'>tetrahedron.</span> <span m='106220'>So</span> <span
  m='106460'>the</span> <span m='106590'>first</span> <span
  m='106960'>goal</span> <span m='107130'>should</span> <span
  m='107410'>be</span> <span m='107890'>to</span> <span m='108050'>find</span>
  <span m='108370'>out</span> <span m='108710'>which</span> <span
  m='109540'>parallelepiped</span> <span m='110010'>you</span> <span
  m='110140'>should</span> <span m='110320'>be</span> <span
  m='110440'>working</span> <span m='110860'>with.</span> </p><p><span
  m='112230'>OK,</span> <span m='112830'>why</span> <span
  m='113130'>don't</span> <span m='113350'>you</span> <span
  m='113580'>hit</span> <span m='113890'>pause</span> <span
  m='114295'>and</span> <span m='114700'>try</span> <span m='114910'>to</span>
  <span m='115120'>work</span> <span m='115360'>it</span> <span
  m='115480'>out</span> <span m='115640'>yourself.</span> <span
  m='116810'>You</span> <span m='117030'>can</span> <span
  m='117250'>sketch</span> <span m='117970'>the</span> <span
  m='118080'>parallelepiped</span> <span m='118870'>on</span> <span
  m='119020'>this</span> <span m='119290'>picture.</span> <span
  m='120510'>And</span> <span m='120950'>I</span> <span m='121030'>will</span>
  <span m='121170'>return</span> <span m='121540'>in</span> <span
  m='121720'>a</span> <span m='121790'>while</span> <span m='122270'>and</span>
  <span m='122480'>continue</span> <span m='122970'>working</span> <span
  m='123360'>with</span> <span m='123540'>you.</span> </p><p><span
  m='132960'>All</span> <span m='133070'>right.</span> <span
  m='133640'>How</span> <span m='133800'>did</span> <span m='133940'>your</span>
  <span m='134080'>computation</span> <span m='134810'>go?</span> <span
  m='135990'>Now</span> <span m='136250'>let's</span> <span
  m='137050'>complete</span> <span m='137540'>this</span> <span
  m='137760'>picture</span> <span m='138110'>together.</span> <span
  m='139520'>As</span> <span m='139750'>we</span> <span m='139850'>were</span>
  <span m='140030'>saying,</span> <span m='140850'>we</span> <span
  m='141210'>need</span> <span m='141580'>a</span> <span
  m='141660'>parallelepiped</span> <span m='142930'>so</span> <span
  m='143130'>that</span> <span m='143310'>we</span> <span m='143460'>can</span>
  <span m='143640'>use</span> <span m='144090'>the</span> <span
  m='144180'>fact</span> <span m='144500'>that</span> <span
  m='144760'>the</span> <span m='144850'>determinant</span> <span
  m='145590'>is</span> <span m='145800'>related</span> <span
  m='146370'>to</span> <span m='146450'>the</span> <span
  m='146550'>volume.</span> </p><p><span m='147790'>Here,</span> <span
  m='148640'>I</span> <span m='148760'>have</span> <span m='149020'>a</span>
  <span m='149080'>tetrahedron.</span> <span m='150700'>And</span> <span
  m='151470'>let's</span> <span m='152040'>look</span> <span
  m='152290'>at</span> <span m='152550'>these</span> <span
  m='152920'>three</span> <span m='153230'>edges,</span> <span
  m='154070'>OA_1,</span> <span m='155520'>OA_2,</span> <span
  m='156860'>and</span> <span m='157110'>OA_3.</span> <span
  m='159230'>All</span> <span m='159520'>of</span> <span m='159660'>them</span>
  <span m='160300'>meet</span> <span m='161000'>at</span> <span
  m='161140'>the</span> <span m='161280'>origin.</span> <span
  m='162640'>So</span> <span m='163310'>why</span> <span m='163690'>don't</span>
  <span m='163850'>we</span> <span m='163940'>just</span> <span
  m='164170'>consider</span> <span m='164780'>the</span> <span
  m='164910'>parallelepiped</span> <span m='165960'>spanned</span> <span
  m='166720'>by</span> <span m='166870'>those</span> <span
  m='167040'>same</span> <span m='167650'>three</span> <span
  m='167940'>edges?</span> <span m='169430'>It's</span> <span
  m='169670'>a</span> <span m='169740'>natural</span> <span
  m='170080'>choice,</span> <span m='170870'>because</span> <span
  m='171230'>at</span> <span m='171410'>least</span> <span m='171670'>it</span>
  <span m='171870'>shares</span> <span m='172260'>three</span> <span
  m='172510'>edges</span> <span m='173010'>with</span> <span
  m='173210'>T.</span> </p><p><span m='174116'>OK,</span> <span
  m='174570'>now</span> <span m='174860'>let's</span> <span
  m='175140'>move</span> <span m='175450'>on</span> <span m='175700'>to</span>
  <span m='175810'>this</span> <span m='176100'>picture</span> <span
  m='176430'>here.</span> <span m='178500'>As</span> <span m='178700'>you</span>
  <span m='178870'>can</span> <span m='179040'>see,</span> <span
  m='179740'>I</span> <span m='179860'>have</span> <span m='180160'>drawn</span>
  <span m='180470'>this</span> <span m='180740'>parallelepiped</span> <span
  m='181930'>in</span> <span m='183650'>red</span> <span
  m='183970'>chalk.</span> <span m='185180'>So</span> <span
  m='185590'>the</span> <span m='185710'>blue</span> <span
  m='185970'>part</span> <span m='186390'>is</span> <span m='186600'>my</span>
  <span m='186750'>original</span> <span m='187260'>T.</span> </p><p><span
  m='191080'>And</span> <span m='191250'>the</span> <span m='191370'>red</span>
  <span m='191660'>part,</span> <span m='192290'>let</span> <span
  m='192420'>me</span> <span m='192550'>call</span> <span m='192830'>it</span>
  <span m='192960'>P.</span> <span m='194710'>It's</span> <span
  m='194900'>the</span> <span m='195320'>parallelepiped</span> <span
  m='195890'>spanned</span> <span m='196400'>by</span> <span
  m='197290'>edges</span> <span m='197780'>OA_1,</span> <span
  m='199090'>OA_2,</span> <span m='199780'>and</span> <span
  m='200030'>OA_3.</span> <span m='201830'>So</span> <span
  m='202040'>that's</span> <span m='202330'>the</span> <span
  m='202630'>parallelepiped</span> <span m='203440'>that</span> <span
  m='203660'>I'm</span> <span m='203960'>going</span> <span m='204130'>to</span>
  <span m='204310'>work</span> <span m='204680'>with.</span> </p><p><span
  m='205870'>Now</span> <span m='206580'>the</span> <span m='206710'>next</span>
  <span m='207040'>step</span> <span m='207600'>is</span> <span
  m='207800'>to</span> <span m='207920'>relate</span> <span
  m='208580'>the</span> <span m='208680'>volume</span> <span
  m='209250'>of</span> <span m='209410'>T</span> <span m='210230'>to</span>
  <span m='210340'>the</span> <span m='210460'>volume</span> <span
  m='210960'>of</span> <span m='211120'>P.</span> <span m='212530'>OK,</span>
  <span m='213070'>let's</span> <span m='213520'>recall</span> <span
  m='213860'>together</span> <span m='214510'>what</span> <span
  m='215040'>is</span> <span m='215340'>the</span> <span
  m='215440'>volume</span> <span m='215950'>of</span> <span m='216100'>a</span>
  <span m='216190'>tetrahedron.</span> <span m='217820'>We</span> <span
  m='218010'>note</span> <span m='218420'>that</span> <span
  m='223030'>the</span> <span m='223180'>volume</span> <span
  m='223660'>of</span> <span m='223810'>a</span> <span
  m='223890'>tetrahedron</span> <span m='225100'>is</span> <span
  m='225360'>going</span> <span m='225550'>to</span> <span m='225740'>be</span>
  <span m='225960'>equal</span> <span m='226980'>to</span> <span
  m='227475'>1/3</span> <span m='228670'>of</span> <span m='228960'>the</span>
  <span m='229200'>area</span> <span m='230100'>of</span> <span
  m='230300'>the</span> <span m='230400'>base</span> <span
  m='231470'>times</span> <span m='232140'>the</span> <span
  m='232240'>height,</span> <span m='233270'>right?</span> </p><p><span
  m='234260'>Of</span> <span m='234480'>course,</span> <span
  m='234790'>you</span> <span m='234940'>can</span> <span
  m='235180'>choose</span> <span m='237000'>any</span> <span
  m='237340'>side,</span> <span m='237790'>any</span> <span
  m='238060'>face</span> <span m='238400'>to</span> <span m='238520'>be</span>
  <span m='238620'>the</span> <span m='238740'>base.</span> <span
  m='239800'>But</span> <span m='240280'>for</span> <span
  m='240510'>convenience,</span> <span m='241480'>we're</span> <span
  m='241750'>going</span> <span m='241970'>to</span> <span
  m='242200'>choose</span> <span m='242510'>the</span> <span
  m='242600'>triangle</span> <span m='243300'>OA_1A_2</span> <span
  m='245770'>to</span> <span m='245960'>be</span> <span m='246060'>the</span>
  <span m='246180'>base</span> <span m='246550'>of</span> <span
  m='246700'>T.</span> <span m='247600'>So</span> <span m='248150'>the</span>
  <span m='248600'>volume</span> <span m='249020'>of</span> <span
  m='249170'>T</span> <span m='249540'>is</span> <span m='249750'>going</span>
  <span m='249930'>to</span> <span m='250110'>be</span> <span
  m='250290'>equal</span> <span m='250790'>to</span> <span m='250910'>1/3</span>
  <span m='252180'>times</span> <span m='252780'>the</span> <span
  m='253100'>area</span> <span m='254290'>of</span> <span
  m='254690'>triangle</span> <span m='255870'>OA_1A_2.</span> </p><p><span
  m='258950'>So</span> <span m='259160'>I</span> <span m='259290'>use</span>
  <span m='259720'>this</span> <span m='260000'>A</span> <span
  m='260300'>to</span> <span m='260440'>indicate</span> <span
  m='261089'>the</span> <span m='261260'>area.</span> <span
  m='262540'>Then</span> <span m='262810'>times</span> <span
  m='263160'>the</span> <span m='263230'>height.</span> <span
  m='264430'>Well,</span> <span m='265090'>if</span> <span m='265310'>I</span>
  <span m='265440'>choose</span> <span m='265860'>this</span> <span
  m='266190'>to</span> <span m='266300'>be</span> <span m='266440'>my</span>
  <span m='266720'>base,</span> <span m='267760'>then</span> <span
  m='268070'>this</span> <span m='268470'>A_3</span> <span
  m='269370'>becomes</span> <span m='270050'>the</span> <span
  m='270220'>apex.</span> </p><p><span m='271560'>Then</span> <span
  m='271720'>the</span> <span m='271840'>height</span> <span
  m='272300'>is</span> <span m='272500'>simply</span> <span
  m='272960'>equal</span> <span m='273650'>to</span> <span m='273760'>the</span>
  <span m='273900'>distance</span> <span m='274370'>from</span> <span
  m='274630'>A_3</span> <span m='275820'>to</span> <span m='276115'>the</span>
  <span m='276410'>triangle</span> <span m='276910'>OA_1A_2.</span> <span
  m='279000'>Let</span> <span m='279210'>me</span> <span m='279320'>use</span>
  <span m='279670'>letter</span> <span m='280320'>h</span> <span
  m='280940'>to</span> <span m='281080'>denote</span> <span
  m='281870'>this</span> <span m='282110'>quantity.</span> <span
  m='283220'>So</span> <span m='283450'>that's</span> <span
  m='283760'>the</span> <span m='283880'>height.</span> </p><p><span
  m='284910'>And</span> <span m='285020'>the</span> <span
  m='285110'>volume</span> <span m='285570'>of</span> <span m='285710'>T</span>
  <span m='286280'>is</span> <span m='286540'>equal</span> <span
  m='286830'>to</span> <span m='287010'>1/3</span> <span m='287950'>of</span>
  <span m='288150'>the</span> <span m='288240'>product</span> <span
  m='288860'>of</span> <span m='289040'>the</span> <span m='289210'>area</span>
  <span m='289570'>of</span> <span m='289650'>the</span> <span
  m='289740'>base</span> <span m='290660'>times</span> <span
  m='291030'>the</span> <span m='291100'>height.</span> <span
  m='292390'>OK,</span> <span m='293410'>this</span> <span m='293650'>is</span>
  <span m='293750'>the</span> <span m='293860'>volume</span> <span
  m='294320'>of</span> <span m='294450'>T.</span> <span m='295440'>Now</span>
  <span m='295710'>let's</span> <span m='296070'>see</span> <span
  m='296460'>what</span> <span m='296890'>the</span> <span
  m='296990'>volume</span> <span m='297450'>of</span> <span m='299520'>P</span>
  <span m='299960'>is.</span> </p><p><span m='301250'>So</span> <span
  m='301550'>P</span> <span m='302120'>is</span> <span m='302310'>a</span> <span
  m='302645'>parallelepiped.</span> <span m='303790'>The</span> <span
  m='303920'>volume</span> <span m='304440'>of</span> <span m='304550'>a</span>
  <span m='304670'>parallelepiped</span> <span m='306110'>is</span> <span
  m='306300'>simply</span> <span m='306760'>equal</span> <span
  m='307220'>to</span> <span m='307910'>the</span> <span m='308270'>area</span>
  <span m='308670'>of</span> <span m='308780'>the</span> <span
  m='308900'>base</span> <span m='309870'>times</span> <span
  m='310600'>its</span> <span m='310810'>height.</span> <span
  m='312800'>This</span> <span m='313110'>time,</span> <span
  m='313490'>which</span> <span m='314130'>face</span> <span
  m='314450'>would</span> <span m='314590'>you</span> <span
  m='314740'>choose</span> <span m='315140'>to</span> <span m='315260'>be</span>
  <span m='315400'>the</span> <span m='315530'>base?</span> <span
  m='317020'>Well,</span> <span m='317360'>of</span> <span
  m='317500'>course,</span> <span m='318330'>you</span> <span
  m='318500'>would</span> <span m='318620'>like</span> <span
  m='318830'>to</span> <span m='318980'>choose</span> <span
  m='319340'>this</span> <span m='320140'>parallelogram</span> <span
  m='321320'>to</span> <span m='321460'>be</span> <span m='321570'>the</span>
  <span m='321790'>base</span> <span m='322720'>because</span> <span
  m='323120'>it</span> <span m='323230'>contains</span> <span
  m='323860'>the</span> <span m='323960'>base</span> <span m='324450'>of</span>
  <span m='324710'>T.</span> </p><p><span m='326200'>If</span> <span
  m='326450'>we</span> <span m='326610'>do</span> <span m='326990'>so,</span>
  <span m='328220'>so</span> <span m='328450'>we</span> <span
  m='328560'>want</span> <span m='328820'>to</span> <span
  m='328990'>choose</span> <span m='330280'>this</span> <span
  m='330660'>parallelogram</span> <span m='331570'>to</span> <span
  m='331700'>be</span> <span m='331820'>the</span> <span m='331950'>base,</span>
  <span m='333570'>then</span> <span m='333760'>what</span> <span
  m='333970'>is</span> <span m='334100'>the</span> <span m='334250'>area</span>
  <span m='334600'>of</span> <span m='334750'>this?</span> <span
  m='335920'>Well,</span> <span m='336520'>it</span> <span
  m='336760'>clearly</span> <span m='337310'>contains</span> <span
  m='338250'>two</span> <span m='338640'>copies</span> <span
  m='339620'>of</span> <span m='339780'>the</span> <span
  m='339900'>triangle</span> <span m='340340'>OA_1A_2.</span> <span
  m='343460'>So</span> <span m='344060'>the</span> <span m='344260'>area</span>
  <span m='344720'>of</span> <span m='344850'>the</span> <span
  m='345030'>parallelogram</span> <span m='346020'>is</span> <span
  m='346190'>simply</span> <span m='346550'>equal</span> <span
  m='346940'>to</span> <span m='347580'>twice</span> <span m='348620'>the</span>
  <span m='348830'>area</span> <span m='349730'>of</span> <span
  m='349900'>the</span> <span m='350070'>triangle</span> <span
  m='350840'>OA_1A_2.</span> </p><p><span m='356410'>Then</span> <span
  m='356840'>what</span> <span m='357110'>is</span> <span m='357280'>the</span>
  <span m='357380'>height</span> <span m='358120'>of</span> <span
  m='358310'>P?</span> <span m='359600'>Again,</span> <span m='360150'>if</span>
  <span m='360310'>you</span> <span m='360480'>choose</span> <span
  m='361190'>this</span> <span m='361610'>face</span> <span m='361930'>to</span>
  <span m='362050'>be</span> <span m='362180'>the</span> <span
  m='362310'>base,</span> <span m='363570'>then</span> <span
  m='364440'>A_3</span> <span m='364950'>becomes</span> <span
  m='365370'>the</span> <span m='365500'>apex</span> <span
  m='365870'>again.</span> <span m='367360'>Then</span> <span
  m='368220'>the</span> <span m='368320'>height</span> <span
  m='368750'>of</span> <span m='368860'>the</span> <span
  m='368970'>parallelepiped</span> <span m='370210'>is</span> <span
  m='370460'>equal</span> <span m='370950'>to</span> <span m='371320'>the</span>
  <span m='371430'>distance</span> <span m='371890'>from</span> <span
  m='372130'>A_3</span> <span m='373240'>to</span> <span m='373350'>the</span>
  <span m='373480'>base,</span> <span m='374710'>which</span> <span
  m='375040'>is</span> <span m='375170'>the</span> <span m='375300'>same</span>
  <span m='375780'>as</span> <span m='375910'>the</span> <span
  m='375980'>distance</span> <span m='376500'>from</span> <span
  m='376750'>A_3</span> <span m='377760'>to</span> <span
  m='377910'>triangle</span> <span m='378430'>OA_1A_2.</span> <span
  m='380930'>So</span> <span m='381220'>here,</span> <span m='382090'>the</span>
  <span m='382190'>height</span> <span m='383030'>is</span> <span
  m='383260'>also</span> <span m='383690'>equal</span> <span
  m='384130'>to</span> <span m='384790'>h.</span> </p><p><span
  m='388390'>Now</span> <span m='388740'>you</span> <span m='388920'>can</span>
  <span m='389110'>compare</span> <span m='389930'>these</span> <span
  m='390300'>two</span> <span m='390500'>formulae.</span> <span
  m='391860'>You</span> <span m='392030'>see</span> <span m='392330'>that</span>
  <span m='393180'>volume</span> <span m='393670'>of</span> <span
  m='393940'>T</span> <span m='396150'>is</span> <span m='396310'>simply</span>
  <span m='396800'>equal</span> <span m='397210'>to</span> <span
  m='398130'>1/6</span> <span m='399860'>of</span> <span
  m='400230'>volume</span> <span m='400700'>of</span> <span m='400930'>P.</span>
  <span m='404330'>That's</span> <span m='404640'>the</span> <span
  m='404750'>connection</span> <span m='405360'>between</span> <span
  m='406460'>the</span> <span m='406580'>volume</span> <span
  m='407080'>of</span> <span m='407190'>the</span> <span
  m='407330'>tetrahedron</span> <span m='408270'>with</span> <span
  m='408440'>the</span> <span m='408620'>volume</span> <span
  m='409160'>of</span> <span m='409550'>the</span> <span
  m='409660'>parallelepiped.</span> <span m='411170'>In</span> <span
  m='411390'>order</span> <span m='411640'>to</span> <span
  m='411800'>compute</span> <span m='412480'>the</span> <span
  m='412530'>volume</span> <span m='412940'>of</span> <span m='413080'>T,</span>
  <span m='413690'>we</span> <span m='414040'>only</span> <span
  m='414440'>need</span> <span m='414670'>to</span> <span
  m='414780'>compute</span> <span m='415410'>the</span> <span
  m='415500'>volume</span> <span m='415940'>of</span> <span m='416100'>P.</span>
  </p><p><span m='417530'>Now</span> <span m='417810'>let's</span> <span
  m='418170'>compute</span> <span m='419120'>the</span> <span
  m='419210'>volume</span> <span m='419750'>of</span> <span
  m='419890'>this</span> <span m='420100'>parallelepiped.</span> <span
  m='423370'>We</span> <span m='423650'>know</span> <span m='423980'>that</span>
  <span m='424420'>it's</span> <span m='424640'>related</span> <span
  m='425910'>to</span> <span m='427630'>the</span> <span
  m='427740'>determinant</span> <span m='428550'>of</span> <span
  m='428720'>a</span> <span m='428810'>matrix.</span> <span
  m='430280'>And</span> <span m='430640'>the</span> <span m='430790'>row</span>
  <span m='431050'>vectors</span> <span m='431480'>of</span> <span
  m='431580'>that</span> <span m='431750'>matrix</span> <span
  m='433150'>are</span> <span m='433350'>given</span> <span m='433830'>by</span>
  <span m='434570'>these</span> <span m='435660'>three</span> <span
  m='436640'>edges.</span> <span m='437850'>So</span> <span
  m='438300'>because</span> <span m='438800'>all</span> <span
  m='439020'>of</span> <span m='439190'>them</span> <span
  m='439390'>start</span> <span m='439760'>from</span> <span
  m='440020'>0,</span> <span m='440910'>we</span> <span m='441130'>only</span>
  <span m='441440'>need</span> <span m='441620'>the</span> <span
  m='441730'>coordinate</span> <span m='442400'>of</span> <span
  m='442570'>A_1,</span> <span m='443160'>A_2,</span> <span
  m='443840'>and</span> <span m='444060'>A_3.</span> </p><p><span
  m='445090'>So</span> <span m='445800'>here,</span> <span
  m='446590'>volume</span> <span m='446980'>of</span> <span m='447110'>P</span>
  <span m='447860'>is</span> <span m='448130'>equal</span> <span
  m='448570'>to</span> <span m='449580'>the</span> <span
  m='449840'>absolute</span> <span m='450320'>value.</span> <span
  m='450730'>So</span> <span m='450940'>don't</span> <span
  m='451280'>forget</span> <span m='451570'>the</span> <span
  m='451700'>absolute</span> <span m='452060'>value</span> <span
  m='452410'>sign.</span> <span m='453320'>Absolute</span> <span
  m='453720'>value</span> <span m='454760'>of</span> <span m='454800'>the</span>
  <span m='454850'>determinant</span> <span m='457010'>of a</span> <span
  m='457260'>three</span> <span m='457590'>by</span> <span
  m='457790'>three</span> <span m='458120'>matrix.</span> </p><p><span
  m='459180'>So</span> <span m='459390'>we</span> <span m='459500'>just</span>
  <span m='459840'>need</span> <span m='460050'>to</span> <span
  m='460210'>copy</span> <span m='460620'>the</span> <span
  m='460740'>coordinates</span> <span m='461870'>of</span> <span
  m='462150'>the</span> <span m='462260'>vertices</span> <span
  m='463020'>down</span> <span m='463310'>here.</span> <span
  m='464340'>The</span> <span m='464450'>first</span> <span
  m='464800'>one</span> <span m='465000'>is</span> <span m='466050'>[2,</span>
  <span m='466390'>2,</span> <span m='467280'>-1].</span> <span
  m='469280'>These</span> <span m='469550'>two</span> <span
  m='469670'>are</span> <span m='469780'>too</span> <span
  m='470020'>close.</span> <span m='474100'>-1.</span> <span
  m='475240'>And</span> <span m='475680'>A_2</span> <span m='476480'>is</span>
  <span m='477780'>[1,</span> <span m='478724'>3,</span> <span
  m='479668'>0].</span> <span m='481084'>A3</span> <span m='482030'>is</span>
  <span m='483190'>[-1,</span> <span m='483860'>1,</span> <span
  m='484630'>4].</span> <span m='487070'>The</span> <span
  m='487250'>absolute</span> <span m='487700'>value</span> <span
  m='488910'>of</span> <span m='489240'>this</span> <span
  m='489460'>determinant.</span> </p><p><span m='491440'>And</span> <span
  m='493390'>if</span> <span m='493590'>you</span> <span
  m='493760'>compute</span> <span m='494745'>this,</span> <span
  m='495060'>this</span> <span m='495240'>is</span> <span m='495350'>a</span>
  <span m='495490'>three</span> <span m='495750'>by</span> <span
  m='495980'>three</span> <span m='496310'>matrix.</span> <span
  m='497290'>The</span> <span m='497380'>determinant</span> <span
  m='497990'>should</span> <span m='498150'>be</span> <span
  m='498260'>easy</span> <span m='498550'>to</span> <span
  m='498700'>compute.</span> <span m='500010'>And</span> <span
  m='500220'>the</span> <span m='500340'>result</span> <span
  m='501030'>should</span> <span m='501390'>be</span> <span
  m='503410'>12.</span> <span m='505900'>So</span> <span
  m='506130'>that's</span> <span m='506490'>the</span> <span
  m='506600'>volume</span> <span m='507170'>of</span> <span m='507490'>P,</span>
  <span m='508480'>which</span> <span m='509220'>means</span> <span
  m='509780'>the</span> <span m='509900'>volume</span> <span
  m='510470'>of</span> <span m='510600'>the</span> <span
  m='510770'>tetrahedron</span> <span m='511520'>T</span> <span
  m='512640'>is</span> <span m='512870'>equal</span> <span m='513270'>to</span>
  <span m='513529'>12</span> <span m='513789'>over</span> <span
  m='514000'>6,</span> <span m='515370'>which</span> <span m='515640'>is</span>
  <span m='515860'>2.</span> <span m='518659'>Did</span> <span
  m='518809'>you</span> <span m='518890'>get</span> <span m='519090'>the</span>
  <span m='519200'>correct</span> <span m='519490'>answer?</span> </p><p><span
  m='521240'>OK,</span> <span m='521990'>so</span> <span m='522730'>in</span>
  <span m='522950'>order</span> <span m='523130'>to</span> <span
  m='523260'>compute</span> <span m='523820'>the</span> <span
  m='523909'>volume</span> <span m='524390'>of</span> <span m='524550'>T,</span>
  <span m='525120'>we</span> <span m='525450'>have</span> <span
  m='525730'>related</span> <span m='526780'>to</span> <span m='527970'>a</span>
  <span m='528080'>parallelepiped,</span> <span m='528690'>P,</span> <span
  m='528990'>which</span> <span m='529260'>contains</span> <span
  m='529890'>T.</span> <span m='531330'>All</span> <span
  m='531550'>right.</span> <span m='532010'>Now</span> <span
  m='532240'>let's</span> <span m='532560'>look</span> <span
  m='532730'>at</span> <span m='532910'>the</span> <span
  m='533160'>second</span> <span m='533420'>part.</span> </p><p><span
  m='534300'>The</span> <span m='534420'>second</span> <span
  m='534790'>part</span> <span m='535040'>says</span> <span
  m='535390'>that</span> <span m='536030'>if</span> <span m='536260'>I</span>
  <span m='536490'>keep</span> <span m='536890'>A_1</span> <span
  m='537370'>and</span> <span m='537640'>A_2</span> <span
  m='538340'>unchanged,</span> <span m='539400'>but</span> <span
  m='539580'>I</span> <span m='539650'>move</span> <span m='540050'>A_3</span>
  <span m='540535'>to</span> <span m='541270'>a</span> <span
  m='541290'>new</span> <span m='541580'>point--</span> <span
  m='542200'>so</span> <span m='542550'>A3</span> <span m='544750'>is</span>
  <span m='545020'>going</span> <span m='545290'>to</span> <span
  m='545420'>be</span> <span m='545550'>moved</span> <span m='546330'>to</span>
  <span m='546460'>a</span> <span m='546600'>point</span> <span
  m='547600'>given</span> <span m='547950'>by</span> <span m='548240'>A_3</span>
  <span m='548850'>prime,</span> <span m='549630'>and</span> <span
  m='549780'>the</span> <span m='549870'>coordinate</span> <span
  m='551190'>is</span> <span m='553940'>-201,</span> <span
  m='556650'>-199,</span> <span m='559090'>and</span> <span
  m='560010'>104.</span> <span m='563310'>And</span> <span m='563510'>I'm</span>
  <span m='563620'>asking</span> <span m='564010'>you</span> <span
  m='564210'>to</span> <span m='564370'>compute</span> <span
  m='565760'>the</span> <span m='565900'>volume</span> <span
  m='566490'>of</span> <span m='566730'>the</span> <span m='566850'>new</span>
  <span m='567600'>tetrahedron.</span> </p><p><span m='569180'>Well</span> <span
  m='569540'>as</span> <span m='569760'>you</span> <span m='569890'>can</span>
  <span m='570130'>see,</span> <span m='570950'>this</span> <span
  m='571270'>point</span> <span m='571850'>seems</span> <span
  m='572280'>to</span> <span m='572350'>be</span> <span m='572550'>far</span>
  <span m='573080'>away</span> <span m='573510'>from</span> <span
  m='573780'>the</span> <span m='573960'>origin.</span> <span
  m='575590'>I'm</span> <span m='575720'>not</span> <span m='575980'>even</span>
  <span m='577640'>able</span> <span m='577990'>to</span> <span
  m='578160'>draw</span> <span m='578540'>this</span> <span
  m='578830'>point</span> <span m='579080'>here.</span> <span
  m='579610'>But</span> <span m='579770'>you</span> <span m='579880'>can</span>
  <span m='580070'>imagine,</span> <span m='580980'>as</span> <span
  m='581200'>this</span> <span m='581470'>point</span> <span
  m='581860'>goes</span> <span m='582200'>far</span> <span
  m='582510'>away</span> <span m='582770'>from</span> <span
  m='582960'>the</span> <span m='583070'>origin,</span> <span
  m='583950'>this</span> <span m='584360'>spike</span> <span
  m='584960'>is</span> <span m='585270'>going</span> <span m='585440'>to</span>
  <span m='585620'>become</span> <span m='586090'>more</span> <span
  m='586290'>and</span> <span m='586420'>more</span> <span
  m='586610'>pointy.</span> <span m='587480'>In</span> <span
  m='587690'>other</span> <span m='587860'>words,</span> <span
  m='588340'>the</span> <span m='588460'>entire</span> <span
  m='588900'>tetrahedron</span> <span m='589920'>looks</span> <span
  m='590320'>more</span> <span m='590520'>and</span> <span
  m='590620'>more</span> <span m='590770'>like</span> <span m='590980'>a</span>
  <span m='591050'>needle.</span> <span m='592010'>But</span> <span
  m='592200'>nonetheless,</span> <span m='592930'>we</span> <span
  m='593070'>can</span> <span m='593270'>use</span> <span m='593510'>the</span>
  <span m='593640'>same</span> <span m='593950'>method</span> <span
  m='594610'>to</span> <span m='594760'>compute</span> <span
  m='595600'>the</span> <span m='595700'>volume.</span> </p><p><span
  m='596670'>So</span> <span m='599130'>we</span> <span m='599210'>follow</span>
  <span m='599640'>the</span> <span m='599850'>same</span> <span
  m='600830'>idea,</span> <span m='601810'>the</span> <span
  m='601920'>volume</span> <span m='602390'>of</span> <span m='602560'>T</span>
  <span m='603180'>is</span> <span m='603510'>going</span> <span
  m='603710'>to</span> <span m='603920'>be</span> <span m='604130'>equal</span>
  <span m='604510'>to</span> <span m='604660'>1/6</span> <span
  m='606450'>of</span> <span m='606680'>the</span> <span
  m='606780'>volume</span> <span m='607290'>of</span> <span m='607480'>P.</span>
  <span m='608420'>And</span> <span m='608880'>in</span> <span
  m='609040'>this</span> <span m='609380'>case,</span> <span
  m='610160'>that's</span> <span m='610420'>going</span> <span
  m='610650'>to</span> <span m='610750'>become</span> <span
  m='611350'>the</span> <span m='611550'>absolute</span> <span
  m='612010'>value</span> <span m='612990'>of</span> <span m='613200'>the</span>
  <span m='613300'>determinant</span> <span m='615240'>of</span> <span
  m='615450'>a</span> <span m='615660'>three</span> <span m='615950'>by</span>
  <span m='616160'>three</span> <span m='616460'>matrix</span> <span
  m='618530'>whose</span> <span m='619100'>row</span> <span
  m='619380'>vectors</span> <span m='619990'>are</span> <span
  m='620010'>given</span> <span m='620470'>by</span> <span
  m='621460'>these</span> <span m='622010'>three</span> <span
  m='622330'>edges.</span> <span m='623250'>So</span> <span m='623420'>in</span>
  <span m='623650'>this</span> <span m='623890'>case,</span> <span
  m='625020'>we</span> <span m='625250'>again</span> <span
  m='625660'>copy</span> <span m='626050'>down</span> <span
  m='626310'>the</span> <span m='626420'>coordinates</span> <span
  m='627030'>of</span> <span m='627460'>three</span> <span
  m='627770'>vertices.</span> </p><p><span m='629070'>The</span> <span
  m='629320'>first</span> <span m='629570'>one</span> <span m='629780'>is</span>
  <span m='630455'>[2,</span> <span m='630910'>2,</span> <span
  m='632300'>-1].</span> <span m='633250'>The</span> <span
  m='633670'>second</span> <span m='634090'>one</span> <span
  m='634350'>is</span> <span m='634610'>[1,</span> <span m='634930'>3,</span>
  <span m='635240'>0].</span> <span m='636300'>The</span> <span
  m='636430'>third</span> <span m='636780'>one</span> <span
  m='637090'>should</span> <span m='637330'>become</span> <span
  m='638120'>this,</span> <span m='638800'>so</span> <span
  m='640250'>[-201,</span> <span m='641704'>199,</span> <span
  m='643652'>104].</span> </p><p><span m='648850'>OK.</span> <span
  m='649870'>That</span> <span m='650150'>should</span> <span
  m='650430'>give</span> <span m='650760'>me</span> <span m='651530'>the</span>
  <span m='651640'>volume</span> <span m='652340'>of</span> <span
  m='652530'>the</span> <span m='652670'>new</span> <span
  m='652980'>tetrahedron.</span> <span m='653840'>Let</span> <span
  m='653980'>me</span> <span m='654120'>call</span> <span m='654400'>it</span>
  <span m='654550'>T</span> <span m='654750'>prime</span> <span
  m='655410'>just</span> <span m='655710'>to</span> <span
  m='656660'>differentiate</span> <span m='657350'>it</span> <span
  m='657480'>from</span> <span m='657660'>the</span> <span
  m='657840'>previous</span> <span m='658350'>tetrahedron.</span> <span
  m='659980'>And</span> <span m='660480'>of</span> <span
  m='660690'>course,</span> <span m='661000'>you</span> <span
  m='661120'>can</span> <span m='661310'>compute</span> <span
  m='662490'>this</span> <span m='662720'>determinant</span> <span
  m='663350'>explicitly.</span> <span m='664950'>If</span> <span
  m='665100'>you</span> <span m='665260'>do</span> <span m='665530'>so,</span>
  <span m='666630'>you</span> <span m='666790'>will</span> <span
  m='666970'>see</span> <span m='667760'>the</span> <span
  m='667990'>answer</span> <span m='668530'>should</span> <span
  m='668850'>be</span> <span m='669850'>2</span> <span m='670510'>again.</span>
  </p><p><span m='672330'>But</span> <span m='672750'>in</span> <span
  m='672950'>fact,</span> <span m='673850'>there is</span> <span
  m='674120'>a</span> <span m='674220'>way</span> <span m='674470'>that</span>
  <span m='674830'>you</span> <span m='675070'>can</span> <span
  m='676010'>just</span> <span m='676400'>read</span> <span
  m='676850'>out</span> <span m='677090'>the</span> <span
  m='677250'>answer</span> <span m='677560'>directly</span> <span
  m='678250'>without</span> <span m='678680'>any</span> <span
  m='679680'>real</span> <span m='679920'>computation.</span> <span
  m='682390'>Let's</span> <span m='682710'>pay</span> <span
  m='682880'>attention</span> <span m='683430'>to</span> <span
  m='683540'>the</span> <span m='683810'>last</span> <span
  m='684090'>row.</span> <span m='684620'>In</span> <span
  m='684790'>other</span> <span m='684950'>words,</span> <span
  m='685160'>let's</span> <span m='685410'>pay</span> <span
  m='685560'>attention</span> <span m='686380'>to</span> <span
  m='686520'>this</span> <span m='686830'>new</span> <span
  m='687610'>A_3,</span> <span m='688660'>well,</span> <span
  m='688990'>A_3</span> <span m='689410'>prime.</span> <span
  m='691700'>What</span> <span m='692030'>do</span> <span m='692110'>you</span>
  <span m='692430'>observe</span> <span m='693010'>here?</span> </p><p><span
  m='694430'>A_3</span> <span m='694930'>prime,</span> <span
  m='696360'>if</span> <span m='696560'>you</span> <span
  m='696720'>consider</span> <span m='697620'>the</span> <span
  m='697730'>difference</span> <span m='698260'>between</span> <span
  m='698760'>A_3</span> <span m='699360'>and</span> <span m='699570'>A_3</span>
  <span m='699940'>prime,</span> <span m='700630'>in</span> <span
  m='700810'>other</span> <span m='700960'>words,</span> <span
  m='701240'>if</span> <span m='701340'>you</span> <span
  m='701430'>consider</span> <span m='702240'>how</span> <span
  m='702410'>much</span> <span m='702700'>you</span> <span
  m='702840'>have</span> <span m='702990'>moved</span> <span
  m='703410'>your</span> <span m='703650'>apex,</span> <span
  m='704610'>you</span> <span m='704750'>will</span> <span m='704950'>see</span>
  <span m='705520'>that's</span> <span m='705860'>equal</span> <span
  m='706280'>to</span> <span m='707690'>-100*A_1.</span> <span
  m='712230'>Right?</span> <span m='712870'>So</span> <span
  m='713780'>A_3</span> <span m='715030'>is</span> <span m='716200'>[-1,</span>
  <span m='716530'>1,</span> <span m='716780'>4].</span> <span
  m='717690'>A_3</span> <span m='718080'>prime</span> <span m='718620'>is</span>
  <span m='718890'>this.</span> <span m='719690'>That's</span> <span
  m='719880'>exactly</span> <span m='720390'>equal</span> <span
  m='720720'>to</span> <span m='722410'>-100</span> <span
  m='722860'>times</span> <span m='723270'>A_1.</span> </p><p><span
  m='724720'>What</span> <span m='725240'>does</span> <span
  m='725470'>that</span> <span m='725750'>mean?</span> <span
  m='726650'>Well</span> <span m='727110'>from</span> <span
  m='727370'>the</span> <span m='727480'>point</span> <span m='727800'>of</span>
  <span m='727940'>view</span> <span m='728130'>of the</span> <span
  m='728260'>matrix,</span> <span m='730080'>you</span> <span
  m='730300'>are</span> <span m='731160'>subtracting</span> <span
  m='732920'>from</span> <span m='733260'>the</span> <span
  m='733400'>original</span> <span m='734000'>third</span> <span
  m='734310'>row</span> <span m='735110'>100</span> <span
  m='735840'>times</span> <span m='736620'>the</span> <span
  m='736880'>first</span> <span m='737140'>row.</span> <span
  m='738190'>But</span> <span m='739000'>this</span> <span m='739350'>row</span>
  <span m='739610'>operation</span> <span m='740200'>does</span> <span
  m='740410'>not</span> <span m='740640'>change</span> <span
  m='740910'>the</span> <span m='741020'>determinant.</span> <span
  m='742470'>In</span> <span m='742660'>other</span> <span
  m='742840'>words,</span> <span m='743580'>you</span> <span
  m='743990'>know</span> <span m='744400'>that</span> <span
  m='744730'>this</span> <span m='744960'>determinant</span> <span
  m='745790'>should</span> <span m='746010'>be</span> <span
  m='746090'>the</span> <span m='746240'>same</span> <span m='746690'>as</span>
  <span m='746830'>the</span> <span m='746920'>previous</span> <span
  m='747400'>one.</span> <span m='747790'>So</span> <span m='747980'>you</span>
  <span m='748140'>can</span> <span m='748550'>write</span> <span
  m='748860'>out</span> <span m='749130'>2</span> <span
  m='749600'>directly.</span> </p><p><span m='751980'>From</span> <span
  m='752320'>this</span> <span m='752600'>picture,</span> <span
  m='753260'>we</span> <span m='753400'>can</span> <span m='753620'>also</span>
  <span m='753960'>see</span> <span m='754180'>that</span> <span
  m='754430'>fact.</span> <span m='756080'>So</span> <span
  m='756460'>from</span> <span m='756730'>this</span> <span
  m='756950'>picture,</span> <span m='757780'>we</span> <span
  m='758040'>know</span> <span m='758300'>that</span> <span
  m='758950'>this</span> <span m='759230'>section</span> <span
  m='759610'>is</span> <span m='759740'>saying</span> <span
  m='760120'>that</span> <span m='760730'>I</span> <span m='760860'>need</span>
  <span m='761250'>to</span> <span m='762280'>move</span> <span
  m='762740'>A_3</span> <span m='764220'>in</span> <span m='765360'>the</span>
  <span m='765560'>inverse</span> <span m='766030'>direction</span> <span
  m='766520'>of</span> <span m='766690'>A_1</span> <span m='767700'>by</span>
  <span m='768420'>100</span> <span m='768990'>times</span> <span
  m='769400'>A_1.</span> <span m='770730'>So</span> <span
  m='771070'>you're</span> <span m='771270'>moving</span> <span
  m='771680'>A_3</span> <span m='772670'>parallel</span> <span
  m='773000'>to</span> <span m='773160'>A_1.</span> </p><p><span
  m='774500'>But</span> <span m='774730'>it</span> <span
  m='774800'>doesn't</span> <span m='775050'>matter</span> <span
  m='775270'>how</span> <span m='775560'>far</span> <span
  m='775880'>you've</span> <span m='776110'>moved</span> <span
  m='776460'>your</span> <span m='776770'>apex.</span> <span
  m='778410'>You're</span> <span m='778620'>moving</span> <span
  m='779050'>in</span> <span m='779220'>a</span> <span m='779290'>way</span>
  <span m='779540'>that</span> <span m='779740'>remains</span> <span
  m='780300'>parallel</span> <span m='780800'>to</span> <span
  m='780940'>the</span> <span m='781080'>base,</span> <span
  m='782120'>which</span> <span m='782370'>is</span> <span
  m='782520'>saying</span> <span m='782890'>that</span> <span
  m='783610'>this</span> <span m='783930'>movement</span> <span
  m='784710'>does</span> <span m='784930'>not</span> <span
  m='785160'>change</span> <span m='785500'>the</span> <span
  m='785630'>height.</span> <span m='787210'>Since</span> <span
  m='787670'>A_1</span> <span m='788180'>and</span> <span m='788360'>A_2</span>
  <span m='788630'>are</span> <span m='788790'>fixed,</span> <span
  m='789980'>your</span> <span m='790240'>base</span> <span m='791650'>is</span>
  <span m='791850'>fixed,</span> <span m='792780'>and</span> <span
  m='792990'>you're</span> <span m='793150'>not</span> <span
  m='793390'>changing</span> <span m='793780'>the</span> <span
  m='793910'>height.</span> <span m='794730'>So</span> <span
  m='794940'>of</span> <span m='795080'>course,</span> <span
  m='795380'>the</span> <span m='795480'>volume</span> <span
  m='795960'>is</span> <span m='796110'>not</span> <span
  m='796330'>changing.</span> <span m='797660'>That's</span> <span
  m='798060'>also</span> <span m='798810'>a</span> <span
  m='798900'>reason,</span> <span m='799880'>another</span> <span
  m='800220'>way</span> <span m='800450'>to</span> <span m='800610'>see</span>
  <span m='800880'>that</span> <span m='801250'>the</span> <span
  m='801340'>volume</span> <span m='801750'>of</span> <span m='801890'>T</span>
  <span m='802070'>prime</span> <span m='802700'>is</span> <span
  m='802870'>simply</span> <span m='803280'>equal</span> <span
  m='803740'>to</span> <span m='803820'>the</span> <span
  m='803910'>volume</span> <span m='804340'>of</span> <span m='804440'>T.</span>
  </p><p><span m='806208'>OK,</span> <span m='807050'>this</span> <span
  m='807420'>completes</span> <span m='808040'>this</span> <span
  m='808300'>problem.</span> <span m='809580'>I</span> <span
  m='809730'>hope</span> <span m='810060'>this</span> <span
  m='810270'>example</span> <span m='810840'>was</span> <span
  m='810980'>helpful</span> <span m='811390'>to</span> <span
  m='811510'>you.</span> <span m='812450'>And</span> <span m='813270'>we</span>
  <span m='813530'>should</span> <span m='813790'>keep</span> <span
  m='813980'>in</span> <span m='814150'>mind</span> <span m='814490'>that</span>
  <span m='815270'>the</span> <span m='815410'>fact</span> <span
  m='815800'>that</span> <span m='816080'>the</span> <span
  m='816160'>determinant</span> <span m='816850'>is</span> <span
  m='816960'>related</span> <span m='817180'>to</span> <span
  m='817460'>volume</span> <span m='818280'>sometimes</span> <span
  m='818950'>can</span> <span m='819090'>become</span> <span
  m='819420'>very</span> <span m='819690'>handy</span> <span
  m='820120'>in</span> <span m='820270'>computing</span> <span
  m='821100'>the</span> <span m='821190'>volume</span> <span
  m='821620'>of</span> <span m='821740'>certain</span> <span
  m='822220'>geometric</span> <span m='822780'>objects.</span> <span
  m='824210'>Thank</span> <span m='824440'>you</span> <span
  m='824560'>for</span> <span m='824690'>watching,</span> <span
  m='825330'>and</span> <span m='825460'>I'm</span> <span
  m='825560'>looking</span> <span m='825890'>forward</span> <span
  m='826290'>to</span> <span m='826380'>seeing</span> <span
  m='826680'>you</span> <span m='826840'>soon.</span> </p>
embedded_media:
  - uid: a5881de791d9ab1f02a812bdf795cc72
    parent_uid: f6e781f0de7c94d0b9cec28358af07e2
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: qEBi0K5wfOs
  - uid: 9b259c81766ef96818471eacbf3f5cbd
    parent_uid: f6e781f0de7c94d0b9cec28358af07e2
    id: 3Play-3PlayYouTubeid-SRT
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: qEBi0K5wfOs
  - uid: c7accd73bceba363bd588569c2fa6572
    parent_uid: f6e781f0de7c94d0b9cec28358af07e2
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/itunes-u/gram-schmidt-orthogonalization/id488155309?i=108454352
  - uid: 8c25dc5bddbad145b9feb6220b129a0d
    parent_uid: f6e781f0de7c94d0b9cec28358af07e2
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      http://www.archive.org/download/MIT18.06SCF11/MIT18_06SC_110609_L4_300k.mp4
  - uid: 3d9f7680ff8ca8e8957bc6e27f229f8f
    parent_uid: f6e781f0de7c94d0b9cec28358af07e2
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/qEBi0K5wfOs/default.jpg'
  - uid: 714283506c0eadd0a7ccd8aa6bdc4f82
    parent_uid: f6e781f0de7c94d0b9cec28358af07e2
    id: qEBi0K5wfOs.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/least-squares-determinants-and-eigenvalues/cramers-rule-inverse-matrix-and-volume/problem-solving-determinants-and-volume/qEBi0K5wfOs.srt
  - uid: ebbf9697dc8dd2c5dcb46065c13f9876
    parent_uid: f6e781f0de7c94d0b9cec28358af07e2
    id: qEBi0K5wfOs.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-06sc-linear-algebra-fall-2011/least-squares-determinants-and-eigenvalues/cramers-rule-inverse-matrix-and-volume/problem-solving-determinants-and-volume/qEBi0K5wfOs.pdf
  - uid: 2d31bf8491a69a00b9617ba68ed3508f
    parent_uid: f6e781f0de7c94d0b9cec28358af07e2
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 81a609af7626e87385bb02c403ee7ae5
    parent_uid: f6e781f0de7c94d0b9cec28358af07e2
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
