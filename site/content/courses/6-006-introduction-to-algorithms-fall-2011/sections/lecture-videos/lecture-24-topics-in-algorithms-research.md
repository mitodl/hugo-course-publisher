---
title: 'Lecture 24: Topics in Algorithms Research'
uid: e63575e2e327448baffe49ffa8ae237a
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-24-topics-in-algorithms-research
short_url: lecture-24-topics-in-algorithms-research
inline_embed_id: '47252697lecture24:topicsinalgorithmsresearch88299950'
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, both professors present
  areas of current research, including parallel processor architecture and
  algorithms, geometric folding algorithms, data structures, and graph
  algorithms.</p> <p><strong>Instructor:</strong> Srini Devadas, Erik
  Demaine</p>
related_resources_text: ''
transcript: >-
  <p><span m='50'>The</span> <span m='180'>following</span> <span
  m='620'>content</span> <span m='1210'>is</span> <span m='1330'>provided</span>
  <span m='1770'>under</span> <span m='2050'>a</span> <span
  m='2090'>Creative</span> <span m='2490'>Commons</span> <span
  m='2900'>license.</span> <span m='4010'>Your</span> <span
  m='4200'>support</span> <span m='4700'>will</span> <span m='4860'>help</span>
  <span m='5100'>MIT</span> <span m='5560'>OpenCourseWare</span> <span
  m='6350'>continue</span> <span m='6860'>to</span> <span m='6940'>offer</span>
  <span m='7350'>high</span> <span m='7590'>quality</span> <span
  m='8109'>educational</span> <span m='8740'>resources</span> <span
  m='9360'>for</span> <span m='9510'>free.</span> <span m='10720'>To</span>
  <span m='10820'>make</span> <span m='10930'>a</span> <span
  m='10970'>donation</span> <span m='11660'>or</span> <span
  m='11930'>view</span> <span m='12370'>additional</span> <span
  m='12790'>materials</span> <span m='13320'>from</span> <span
  m='13480'>hundreds</span> <span m='13910'>of</span> <span m='14020'>MIT</span>
  <span m='14450'>courses,</span> <span m='15550'>visit</span> <span
  m='15780'>MIT</span> <span m='16200'>OpenCourseWare</span> <span
  m='17250'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='21550'>PROFESSOR SRINI DEVADAS: Erik</span> <span m='21810'>and</span>
  <span m='21940'>I have</span> <span m='22080'>been</span> <span
  m='22250'>tag</span> <span m='22540'>teaming</span> <span
  m='23470'>this</span> <span m='23900'>lecture</span> <span m='24220'>in</span>
  <span m='24310'>this</span> <span m='24460'>class</span> <span
  m='24900'>so</span> <span m='25280'>we're</span> <span m='25420'>going</span>
  <span m='25520'>to</span> <span m='25580'>split</span> <span
  m='25890'>this</span> <span m='26060'>lecture.</span> <span
  m='28250'>So</span> <span m='28320'>I</span> <span m='28520'>get</span> <span
  m='28720'>to</span> <span m='28820'>do</span> <span m='30000'>the</span> <span
  m='30100'>first</span> <span m='31330'>2</span> <span
  m='31550'>minutes.</span> <span m='33110'>No.</span> <span m='33950'>I</span>
  <span m='34080'>get</span> <span m='35350'>to</span> <span m='35460'>do</span>
  <span m='35580'>the</span> <span m='35720'>first</span> <span
  m='37180'>20</span> <span m='37410'>minutes,</span> <span m='37700'>or</span>
  <span m='37810'>so,</span> <span m='38520'>talking</span> <span
  m='38810'>about</span> <span m='39620'>some</span> <span m='39870'>of</span>
  <span m='39970'>my</span> <span m='40130'>research</span> <span
  m='40670'>in</span> <span m='41040'>parallel</span> <span
  m='41460'>architecture.</span> <span m='42690'>And</span> <span
  m='43180'>Erik's</span> <span m='43360'>going</span> <span m='43480'>to</span>
  <span m='43670'>talk</span> <span m='44070'>about</span> <span
  m='44290'>a</span> <span m='44340'>bunch</span> <span m='44660'>of</span>
  <span m='44750'>things</span> <span m='45040'>that</span> <span
  m='45270'>he's</span> <span m='45470'>been</span> <span m='45620'>up</span>
  <span m='45800'>to</span> <span m='46020'>over</span> <span
  m='46180'>the</span> <span m='46290'>years</span> <span m='47650'>in</span>
  <span m='47850'>Algorithm</span> <span m='48280'>Design</span> <span
  m='48770'>and</span> <span m='48920'>Analysis.</span> <span
  m='50470'>So</span> <span m='51250'>let's</span> <span m='51480'>get</span>
  <span m='51620'>started.</span> <span m='56060'>When</span> <span
  m='56290'>was</span> <span m='56460'>the</span> <span m='56550'>first</span>
  <span m='57200'>PC</span> <span m='57710'>built,</span> <span
  m='58180'>anybody?</span> <span m='61590'>Yeah.</span> </p><p><span
  m='61900'>AUDIENCE: In the 1950s.</span> </p><p><span m='63180'>PROFESSOR
  SRINI DEVADAS: No. The</span> <span m='63510'>first</span> <span
  m='63840'>personal</span> <span m='64250'>computer</span> <span
  m='64690'>was</span> <span m='65200'>1981--</span> <span m='66580'>not</span>
  <span m='66740'>the</span> <span m='66800'>first</span> <span
  m='67030'>computer.</span> <span m='68600'>So</span> <span
  m='70430'>all</span> <span m='70610'>of</span> <span m='70720'>you</span>
  <span m='70810'>know</span> <span m='71030'>about</span> <span
  m='72820'>Intel,</span> <span m='73420'>and</span> <span
  m='73540'>Microsoft,</span> <span m='74240'>and</span> <span
  m='74590'>IBM,</span> <span m='74920'>and</span> <span m='75040'>so</span>
  <span m='75240'>on.</span> <span m='78060'>Intel's</span> <span
  m='80260'>gift</span> <span m='80570'>to</span> <span
  m='80640'>humankind</span> <span m='81310'>is</span> <span
  m='81460'>the</span> <span m='81560'>x86</span> <span
  m='82390'>architecture.</span> <span m='83430'>Though,</span> <span
  m='83650'>some</span> <span m='83910'>people</span> <span
  m='84120'>would</span> <span m='84300'>argue</span> <span
  m='84590'>that</span> <span m='84820'>point.</span> <span m='86830'>And</span>
  <span m='87120'>the</span> <span m='87190'>x86</span> <span
  m='87960'>architecture</span> <span m='88610'>was</span> <span
  m='89680'>invented</span> <span m='90450'>in</span> <span
  m='90890'>1981,</span> <span m='92110'>and</span> <span m='92340'>was</span>
  <span m='92810'>part</span> <span m='93240'>of</span> <span
  m='93740'>the</span> <span m='93900'>first</span> <span m='95900'>PC--</span>
  <span m='96530'>that</span> <span m='96980'>provided</span> <span
  m='97660'>the</span> <span m='97730'>horsepower</span> <span
  m='98290'>for</span> <span m='98380'>the</span> <span m='98490'>first</span>
  <span m='98810'>PC--</span> <span m='99220'>the</span> <span
  m='99630'>IBM</span> <span m='100090'>PC.</span> <span m='101270'>And</span>
  <span m='101560'>it</span> <span m='101630'>ran</span> <span
  m='101970'>at</span> <span m='102310'>5</span> <span
  m='102650'>megahertz.</span> </p><p><span m='108930'>And</span> <span
  m='109460'>x86</span> <span m='110010'>has</span> <span m='110110'>been</span>
  <span m='110220'>around--</span> <span m='110750'>you</span> <span
  m='110890'>still</span> <span m='111170'>can</span> <span
  m='111290'>buy</span> <span m='111540'>x86</span> <span
  m='112140'>computers.</span> <span m='113210'>The</span> <span
  m='113570'>80486,</span> <span m='115940'>in</span> <span
  m='116120'>1989,</span> <span m='118450'>ran</span> <span m='118840'>at</span>
  <span m='118940'>25</span> <span m='119590'>megahertz.</span> <span
  m='121570'>So</span> <span m='121600'>you</span> <span m='121680'>can</span>
  <span m='121810'>see</span> <span m='121950'>a</span> <span
  m='122040'>trend</span> <span m='122340'>here.</span> <span
  m='123770'>And</span> <span m='124740'>the</span> <span
  m='124960'>80486,</span> <span m='125820'>as</span> <span m='125990'>it</span>
  <span m='126070'>turns</span> <span m='126320'>out,</span> <span
  m='126670'>ended</span> <span m='126910'>up</span> <span
  m='127060'>being</span> <span m='127230'>called the</span> <span
  m='127690'>I486</span> <span m='128710'>because</span> <span
  m='129830'>there</span> <span m='129940'>was</span> <span m='130030'>a</span>
  <span m='130100'>court</span> <span m='130350'>ruling</span> <span
  m='130710'>that</span> <span m='130900'>said</span> <span
  m='131170'>that</span> <span m='132360'>you</span> <span
  m='132560'>couldn't</span> <span m='133320'>trademark</span> <span
  m='134000'>numbers.</span> <span m='135300'>And</span> <span
  m='135830'>so</span> <span m='136040'>Intel,</span> <span m='136450'>at</span>
  <span m='136520'>that</span> <span m='136680'>point,</span> <span
  m='136960'>decided</span> <span m='137430'>to</span> <span
  m='137970'>start</span> <span m='138310'>naming</span> <span
  m='138650'>their</span> <span m='138810'>processors.</span> </p><p><span
  m='141870'>So</span> <span m='142230'>the</span> <span
  m='142330'>Pentium,</span> <span m='143220'>which</span> <span
  m='144930'>is</span> <span m='145080'>one</span> <span m='145230'>of</span>
  <span m='145280'>the</span> <span m='145330'>more</span> <span
  m='145520'>famous</span> <span m='146860'>Intel</span> <span
  m='147170'>processors,</span> <span m='147810'>was</span> <span
  m='149170'>built</span> <span m='149610'>and</span> <span
  m='149710'>came</span> <span m='149960'>out</span> <span m='150090'>in</span>
  <span m='150170'>1993.</span> <span m='151720'>And</span> <span
  m='151920'>the</span> <span m='151990'>clock</span> <span
  m='152230'>speed</span> <span m='152540'>went</span> <span
  m='152710'>up</span> <span m='152900'>to</span> <span m='153020'>66</span>
  <span m='153570'>megahertz,</span> <span m='155240'>back</span> <span
  m='155470'>in</span> <span m='156140'>the</span> <span m='156350'>early</span>
  <span m='156550'>'90s.</span> <span m='157960'>And</span> <span
  m='158560'>since</span> <span m='158760'>this</span> <span
  m='159100'>is</span> <span m='159630'>just</span> <span m='159790'>such</span>
  <span m='159980'>a</span> <span m='160040'>cool</span> <span
  m='160290'>name,</span> <span m='162010'>Intel</span> <span
  m='162360'>continued</span> <span m='162840'>to</span> <span
  m='162920'>call</span> <span m='163350'>its</span> <span
  m='163510'>processors</span> <span m='164050'>Pentium.</span> <span
  m='165170'>And</span> <span m='167440'>the</span> <span
  m='167570'>Pentium</span> <span m='167910'>4,</span> <span
  m='168210'>in</span> <span m='168310'>2000,</span> <span m='170260'>had</span>
  <span m='170530'>this</span> <span m='170750'>incredibly</span> <span
  m='171320'>deep</span> <span m='171650'>pipeline</span> <span
  m='172855'>where</span> <span m='173330'>you</span> <span
  m='173490'>broke</span> <span m='173790'>up</span> <span m='173920'>the</span>
  <span m='173990'>computation</span> <span m='174650'>into</span> <span
  m='174880'>a</span> <span m='174920'>bunch</span> <span m='175150'>of</span>
  <span m='175220'>stages.</span> <span m='175650'>In</span> <span
  m='175760'>fact, it</span> <span m='175960'>had a</span> <span
  m='176280'>30</span> <span m='176530'>stage</span> <span
  m='176840'>pipeline.</span> <span m='177760'>And</span> <span
  m='177900'>so</span> <span m='178010'>the</span> <span m='178100'>clock</span>
  <span m='178360'>speed</span> <span m='179560'>went</span> <span
  m='179750'>up</span> <span m='179890'>all</span> <span m='180040'>the</span>
  <span m='180110'>way</span> <span m='180230'>to</span> <span
  m='180320'>1.5</span> <span m='180930'>gigahertz.</span> </p><p><span
  m='182580'>The</span> <span m='182700'>Pentium</span> <span
  m='183080'>was</span> <span m='183180'>famous</span> <span
  m='183490'>for</span> <span m='183610'>many</span> <span
  m='183860'>things,</span> <span m='185690'>including</span> <span
  m='186820'>a</span> <span m='186930'>couple</span> <span m='187170'>of</span>
  <span m='187840'>bugs</span> <span m='188550'>in</span> <span
  m='188720'>the</span> <span m='189360'>floating</span> <span
  m='189700'>point</span> <span m='190010'>pipeline</span> <span
  m='190570'>where</span> <span m='191250'>division,</span> <span
  m='192800'>in</span> <span m='193040'>particular</span> <span
  m='193470'>corner</span> <span m='193770'>cases,</span> <span
  m='195540'>wasn't</span> <span m='195920'>done</span> <span
  m='196140'>correctly.</span> <span m='197190'>And</span> <span
  m='197430'>there was</span> <span m='197590'>also</span> <span
  m='197850'>this</span> <span m='198040'>bug</span> <span
  m='198410'>called</span> <span m='198700'>the</span> <span
  m='198900'>F00F</span> <span m='200610'>bug,</span> <span
  m='202470'>which</span> <span m='204170'>allowed</span> <span
  m='205960'>a</span> <span m='206070'>malicious</span> <span
  m='206530'>program</span> <span m='207160'>to</span> <span
  m='207260'>crash</span> <span m='207570'>the entire</span> <span
  m='207950'>system,</span> <span m='208960'>regardless</span> <span
  m='209440'>of</span> <span m='209510'>whether</span> <span
  m='209810'>it</span> <span m='209870'>had</span> <span
  m='211400'>administrative</span> <span m='212100'>privileges</span> <span
  m='212600'>or</span> <span m='212690'>not.</span> </p><p><span
  m='214280'>But</span> <span m='214470'>the</span> <span
  m='214490'>Pentium</span> <span m='214780'>was</span> <span
  m='214900'>obviously</span> <span m='215210'>very</span> <span
  m='215420'>successful.</span> <span m='217116'>A</span> <span
  m='217510'>lot</span> <span m='217780'>of</span> <span
  m='217840'>machines</span> <span m='218250'>sold.</span> <span
  m='220020'>And</span> <span m='221300'>it</span> <span m='221470'>felt</span>
  <span m='221710'>like</span> <span m='222420'>it</span> <span
  m='222600'>was</span> <span m='222720'>only</span> <span
  m='223620'>going</span> <span m='223770'>to</span> <span m='223810'>be</span>
  <span m='223890'>a</span> <span m='223940'>matter</span> <span
  m='224240'>of</span> <span m='224310'>time</span> <span
  m='224680'>before</span> <span m='225080'>we</span> <span
  m='225200'>got</span> <span m='225450'>to</span> <span m='225570'>10s</span>
  <span m='225930'>of</span> <span m='226050'>gigahertz,</span> <span
  m='227180'>the</span> <span m='227300'>way</span> <span
  m='227470'>things</span> <span m='227710'>were</span> <span
  m='227850'>going.</span> <span m='228380'>As</span> <span
  m='228550'>you</span> <span m='228650'>can</span> <span m='228750'>see,</span>
  <span m='229420'>this</span> <span m='229560'>is</span> <span
  m='229660'>a</span> <span m='229740'>pretty</span> <span
  m='230450'>steep</span> <span m='230900'>growth</span> <span
  m='231270'>from</span> <span m='231480'>5</span> <span
  m='231730'>megahertz</span> <span m='232270'>to</span> <span
  m='232330'>25</span> <span m='232910'>to</span> <span m='233020'>1.5</span>
  <span m='233580'>gigahertz</span> <span m='234070'>in</span> <span
  m='234160'>the</span> <span m='234250'>space</span> <span m='234570'>of</span>
  <span m='234720'>about</span> <span m='234960'>20</span> <span
  m='235170'>years.</span> </p><p><span m='237400'>As</span> <span
  m='237550'>it</span> <span m='237630'>turns</span> <span
  m='237890'>out,</span> <span m='239780'>after</span> <span
  m='241510'>the</span> <span m='241590'>Pentium</span> <span
  m='242080'>D,</span> <span m='243130'>which</span> <span
  m='243360'>came</span> <span m='243600'>out</span> <span m='243760'>in</span>
  <span m='243880'>2005,</span> <span m='246246'>where</span> <span
  m='246590'>the</span> <span m='246650'>clock</span> <span
  m='246900'>speed</span> <span m='247280'>peaked</span> <span
  m='247670'>at</span> <span m='247740'>about</span> <span m='248180'>3.2</span>
  <span m='248720'>gigahertz,</span> <span m='249770'>clock</span> <span
  m='249990'>frequency</span> <span m='250410'>stopped</span> <span
  m='250690'>increasing.</span> <span m='252530'>And</span> <span
  m='253150'>what</span> <span m='253300'>you</span> <span m='253450'>see</span>
  <span m='253590'>now</span> <span m='256470'>are</span> <span
  m='256930'>things</span> <span m='257380'>that</span> <span
  m='257880'>correspond</span> <span m='258440'>to</span> <span
  m='258860'>multiple</span> <span m='259600'>processors</span> <span
  m='260260'>on</span> <span m='260450'>a</span> <span m='260519'>chip.</span>
  <span m='261070'>So</span> <span m='261290'>for</span> <span
  m='261380'>example,</span> <span m='261930'>the</span> <span
  m='262070'>Quad</span> <span m='262400'>Core</span> <span
  m='263030'>Xeon</span> <span m='265030'>came</span> <span
  m='265240'>out</span> <span m='265350'>in</span> <span m='265440'>2008.</span>
  <span m='266110'>You</span> <span m='266200'>can</span> <span
  m='266280'>still</span> <span m='266510'>buy</span> <span
  m='266820'>it.</span> <span m='267670'>Only</span> <span
  m='267940'>runs</span> <span m='268230'>at</span> <span m='268340'>3</span>
  <span m='268510'>gigahertz,</span> <span m='269120'>which</span> <span
  m='269350'>is</span> <span m='270800'>basically</span> <span
  m='271170'>about</span> <span m='271370'>the</span> <span
  m='271450'>same</span> <span m='271780'>as</span> <span m='272150'>the</span>
  <span m='272280'>Pentium</span> <span m='272600'>D</span> <span
  m='272810'>ran.</span> <span m='274240'>Each</span> <span m='274420'>of</span>
  <span m='274490'>these</span> <span m='274700'>has</span> <span
  m='275480'>a</span> <span m='275580'>range</span> <span m='275930'>of</span>
  <span m='276020'>frequencies.</span> <span m='277100'>And</span> <span
  m='278970'>beyond</span> <span m='279320'>about</span> <span
  m='279570'>2005,</span> <span m='280650'>the</span> <span
  m='280760'>clock</span> <span m='281060'>speed</span> <span
  m='281440'>of</span> <span m='281580'>processors</span> <span
  m='282190'>that</span> <span m='282320'>you</span> <span m='282420'>can</span>
  <span m='282550'>buy</span> <span m='283260'>is</span> <span
  m='283370'>kind</span> <span m='283490'>of</span> <span
  m='283540'>saturated</span> <span m='285210'>at</span> <span
  m='285360'>about</span> <span m='285580'>3</span> <span
  m='285740'>gigahertz.</span> </p><p><span m='286870'>And</span> <span
  m='287050'>the</span> <span m='287140'>way</span> <span
  m='288600'>you're</span> <span m='288790'>getting</span> <span
  m='289010'>performance</span> <span m='290060'>is</span> <span
  m='290270'>by</span> <span m='290760'>putting</span> <span
  m='291710'>multiple</span> <span m='292250'>processors</span> <span
  m='293080'>on</span> <span m='293290'>the</span> <span m='293390'>chip.</span>
  <span m='294290'>And</span> <span m='295230'>people</span> <span
  m='295470'>use</span> <span m='295640'>the</span> <span m='295750'>term</span>
  <span m='296060'>cores</span> <span m='298160'>synonymously</span> <span
  m='298820'>with</span> <span m='298940'>processors.</span> <span
  m='299570'>So</span> <span m='299760'>a</span> <span m='299850'>quad</span>
  <span m='300100'>core</span> <span m='300330'>means</span> <span
  m='300600'>that</span> <span m='300830'>they're,</span> <span
  m='301040'>in</span> <span m='301220'>effect,</span> <span
  m='302170'>four</span> <span m='302980'>x86</span> <span
  m='303660'>processors</span> <span m='304320'>on</span> <span
  m='304450'>the</span> <span m='304540'>same</span> <span
  m='305490'>silicon</span> <span m='305910'>integrated</span> <span
  m='306400'>circuit.</span> <span m='307400'>And</span> <span
  m='307690'>they're</span> <span m='307950'>interconnected</span> <span
  m='308570'>together.</span> <span m='310100'>And</span> <span
  m='310370'>they</span> <span m='310530'>talk</span> <span m='310790'>to</span>
  <span m='310880'>memory.</span> <span m='311920'>And</span> <span
  m='312150'>you</span> <span m='312230'>have,</span> <span
  m='312610'>essentially,</span> <span m='313060'>a</span> <span
  m='313130'>parallel</span> <span m='314100'>processor</span> <span
  m='314720'>on</span> <span m='314940'>a</span> <span m='315000'>single</span>
  <span m='315320'>chip.</span> <span m='316980'>And</span> <span
  m='317160'>the</span> <span m='317250'>single</span> <span
  m='317590'>user,</span> <span m='318840'>potentially</span> <span
  m='319200'>running</span> <span m='319420'>many</span> <span
  m='319620'>programs,</span> <span m='320280'>is</span> <span
  m='320450'>using</span> <span m='320950'>this</span> <span
  m='321090'>system.</span> <span m='322350'>And</span> <span
  m='322730'>you</span> <span m='323010'>have</span> <span
  m='323180'>dual</span> <span m='323410'>core</span> <span
  m='323580'>processors</span> <span m='324080'>on</span> <span
  m='324150'>your</span> <span m='324260'>laptops.</span> </p><p><span
  m='325530'>And</span> <span m='325710'>so</span> <span m='326290'>the</span>
  <span m='326410'>scale,</span> <span m='326830'>now,</span> <span
  m='327710'>is--</span> <span m='328250'>the</span> <span
  m='328580'>metric</span> <span m='328970'>now,</span> <span
  m='329140'>I</span> <span m='329240'>should</span> <span
  m='329410'>say--</span> <span m='330010'>is</span> <span m='330470'>how</span>
  <span m='330630'>many</span> <span m='331320'>cores</span> <span
  m='331750'>do</span> <span m='331820'>you</span> <span m='331910'>have</span>
  <span m='332190'>on</span> <span m='332310'>a</span> <span
  m='332380'>chip.</span> <span m='333150'>And</span> <span
  m='333310'>people</span> <span m='333530'>are</span> <span
  m='333590'>predicting</span> <span m='334070'>that</span> <span
  m='334220'>we're</span> <span m='334330'>going</span> <span
  m='334530'>to</span> <span m='334580'>have</span> <span
  m='335110'>1,000</span> <span m='335910'>cores</span> <span
  m='336290'>by</span> <span m='336430'>2020,</span> <span m='337430'>on</span>
  <span m='337630'>a</span> <span m='337670'>chip.</span> <span
  m='338560'>So</span> <span m='338710'>this</span> <span
  m='339160'>brings</span> <span m='339410'>us</span> <span m='339590'>to</span>
  <span m='339670'>the</span> <span m='339770'>problem</span> <span
  m='340230'>of</span> <span m='341260'>how</span> <span m='341430'>do</span>
  <span m='341500'>we</span> <span m='341610'>use</span> <span
  m='342190'>parallelism.</span> <span m='343450'>So</span> <span
  m='343510'>there's</span> <span m='343750'>a</span> <span
  m='343810'>lot</span> <span m='343970'>of</span> <span m='344040'>work</span>
  <span m='344270'>in</span> <span m='344390'>parallel</span> <span
  m='344790'>algorithms.</span> <span m='346000'>And</span> <span
  m='346200'>there's</span> <span m='346350'>also</span> <span
  m='346750'>work</span> <span m='347090'>in</span> <span
  m='347890'>building</span> <span m='348310'>hardware,</span> <span
  m='348770'>such</span> <span m='349020'>that</span> <span
  m='349590'>algorithms</span> <span m='350530'>can</span> <span m='350980'>sort
  of</span> <span m='351110'>automatically</span> <span m='351720'>be</span>
  <span m='351850'>parallelized</span> <span m='352490'>while</span> <span
  m='352720'>they're</span> <span m='352840'>running</span> <span
  m='353260'>in</span> <span m='353370'>hardware,</span> <span
  m='354210'>so</span> <span m='354410'>they</span> <span m='354530'>can</span>
  <span m='354640'>run</span> <span m='354840'>faster,</span> <span
  m='355800'>and</span> <span m='356000'>so</span> <span m='356130'>on</span>
  <span m='356320'>and</span> <span m='356420'>so</span> <span
  m='356480'>forth.</span> </p><p><span m='357380'>So</span> <span
  m='357480'>some</span> <span m='357670'>of</span> <span m='357710'>my</span>
  <span m='357830'>research</span> <span m='358320'>is</span> <span
  m='358520'>in</span> <span m='359240'>parallel</span> <span
  m='359780'>architecture.</span> <span m='360240'>Some</span> <span
  m='360450'>of it is</span> <span m='360830'>in parallel</span> <span
  m='361210'>algorithms.</span> <span m='362090'>I</span> <span
  m='362130'>want</span> <span m='362250'>to</span> <span m='362290'>give</span>
  <span m='362420'>you</span> <span m='362560'>a</span> <span
  m='362630'>sense</span> <span m='363010'>of</span> <span
  m='364060'>what</span> <span m='364340'>the</span> <span
  m='364410'>problems</span> <span m='364930'>are</span> <span
  m='365980'>in</span> <span m='366220'>building</span> <span
  m='366570'>parallel</span> <span m='366970'>architectures.</span> <span
  m='368670'>And</span> <span m='369030'>in</span> <span
  m='369130'>particular,</span> <span m='369730'>I'll</span> <span
  m='369860'>start</span> <span m='370250'>with</span> <span m='371080'>a</span>
  <span m='371510'>canonical</span> <span m='372140'>system</span> <span
  m='373140'>that</span> <span m='373370'>corresponds</span> <span
  m='373970'>to,</span> <span m='374240'>let's</span> <span
  m='374410'>say,</span> <span m='374520'>this</span> <span
  m='374690'>quad</span> <span m='374980'>core</span> <span
  m='375180'>system.</span> </p><p><span m='376215'>And</span> <span
  m='376680'>so</span> <span m='376770'>you</span> <span m='376860'>have</span>
  <span m='377020'>4</span> <span m='378430'>processors</span> <span
  m='380240'>on</span> <span m='380610'>this</span> <span
  m='381100'>single</span> <span m='382470'>integrated</span> <span
  m='383000'>circuit.</span> <span m='383730'>So</span> <span
  m='383880'>that</span> <span m='384460'>signifies</span> <span
  m='385010'>that.</span> <span m='385950'>And</span> <span
  m='386090'>typically,</span> <span m='387290'>you</span> <span
  m='387410'>have</span> <span m='387680'>a</span> <span m='387730'>lot</span>
  <span m='388080'>of</span> <span m='389560'>fast,</span> <span
  m='390550'>static</span> <span m='391280'>random-access</span> <span
  m='392040'>memory,</span> <span m='393170'>SRAM,</span> <span
  m='393870'>on</span> <span m='394140'>the</span> <span m='394230'>same</span>
  <span m='394570'>chip.</span> <span m='395395'>So</span> <span
  m='395680'>typically,</span> <span m='395980'>megabytes</span> <span
  m='398020'>of</span> <span m='398170'>the</span> <span
  m='398220'>memory</span> <span m='398960'>on</span> <span
  m='399150'>the</span> <span m='399240'>chip</span> <span m='400090'>and</span>
  <span m='401340'>gigabytes</span> <span m='401890'>of</span> <span
  m='401990'>memory</span> <span m='403230'>in</span> <span
  m='403420'>DRAM,</span> <span m='405830'>which</span> <span
  m='406060'>are</span> <span m='406170'>separate</span> <span
  m='406540'>modules</span> <span m='407040'>that</span> <span
  m='407140'>are</span> <span m='407180'>connected</span> <span
  m='407630'>via</span> <span m='407890'>high</span> <span
  m='408040'>speed</span> <span m='408320'>bus,</span> <span
  m='409330'>off</span> <span m='409590'>the</span> <span
  m='409690'>chip.</span> <span m='409950'>So</span> <span m='411570'>there
  are</span> <span m='411760'>usually</span> <span m='412090'>many</span> <span
  m='412650'>DRAM</span> <span m='413150'>modules.</span> <span
  m='413810'>They're</span> <span m='413940'>called</span> <span
  m='414360'>DIMMS--</span> <span m='416150'>if</span> <span
  m='416600'>you</span> <span m='416720'>might</span> <span
  m='416830'>have</span> <span m='416900'>heard</span> <span
  m='417070'>the</span> <span m='417230'>term.</span> </p><p><span
  m='418390'>So</span> <span m='418590'>the</span> <span
  m='418680'>connection</span> <span m='419130'>between</span> <span
  m='420390'>the</span> <span m='420470'>processors</span> <span
  m='421020'>and</span> <span m='421110'>the SRAM</span> <span
  m='421670'>is</span> <span m='421780'>typically</span> <span
  m='423070'>very</span> <span m='423380'>fast.</span> <span
  m='423910'>It's</span> <span m='424070'>on-chip.</span> <span
  m='425910'>Things</span> <span m='426130'>being</span> <span
  m='426310'>clocked</span> <span m='426970'>at</span> <span
  m='427370'>gigahertz.</span> <span m='428540'>And</span> <span m='428920'>when
  you go</span> <span m='429130'>off-chip,</span> <span m='429700'>you're</span>
  <span m='429870'>down</span> <span m='430170'>to</span> <span
  m='430260'>a</span> <span m='430340'>few hundred</span> <span
  m='430510'>megahertz.</span> <span m='431350'>So</span> <span
  m='431480'>typically,</span> <span m='431830'>an</span> <span
  m='431960'>order</span> <span m='432120'>of</span> <span
  m='432190'>magnitude</span> <span m='433870'>less</span> <span
  m='434190'>speed.</span> <span m='435060'>But</span> <span
  m='435330'>you're</span> <span m='435520'>accessing</span> <span
  m='435930'>much</span> <span m='436180'>more</span> <span
  m='436370'>memory.</span> <span m='437040'>So</span> <span
  m='437090'>this</span> <span m='437270'>is</span> <span
  m='437430'>really</span> <span m='437630'>gigabytes</span> <span
  m='438390'>and</span> <span m='438740'>this</span> <span m='438890'>is</span>
  <span m='439000'>at</span> <span m='439100'>the</span> <span
  m='439180'>level</span> <span m='439430'>of</span> <span
  m='439530'>megabytes.</span> </p><p><span m='442515'>If</span> <span
  m='442990'>you</span> <span m='443080'>see</span> <span m='444290'>this</span>
  <span m='444530'>picture,</span> <span m='444880'>here--</span> <span
  m='446500'>if</span> <span m='446660'>you</span> <span m='446750'>think</span>
  <span m='446980'>about</span> <span m='447300'>the</span> <span
  m='447370'>number</span> <span m='447600'>of</span> <span
  m='447650'>processors</span> <span m='448130'>increasing</span> <span
  m='448720'>from</span> <span m='448990'>four</span> <span m='449600'>to</span>
  <span m='450430'>eight</span> <span m='450970'>to</span> <span
  m='451370'>16,</span> <span m='452260'>all the way to,</span> <span
  m='452750'>say,</span> <span m='452910'>to</span> <span
  m='453160'>hundreds</span> <span m='453520'>of</span> <span
  m='453600'>processors,</span> <span m='456070'>you</span> <span
  m='456180'>can</span> <span m='456270'>see</span> <span m='456450'>that</span>
  <span m='456600'>there's</span> <span m='456770'>going</span> <span
  m='456880'>to</span> <span m='456920'>be</span> <span m='457020'>a</span>
  <span m='457060'>bottleneck</span> <span m='458280'>associated</span> <span
  m='458850'>with</span> <span m='459440'>accessing</span> <span
  m='460250'>the</span> <span m='460400'>memory.</span> <span
  m='461550'>The</span> <span m='461560'>big</span> <span
  m='461730'>problem</span> <span m='462160'>is</span> <span
  m='463220'>you</span> <span m='463370'>can't</span> <span
  m='463690'>possibly</span> <span m='464340'>build</span> <span
  m='465560'>memory</span> <span m='466290'>that</span> <span
  m='466560'>serves</span> <span m='467770'>hundreds</span> <span
  m='468210'>of</span> <span m='468320'>requests</span> <span
  m='468740'>in</span> <span m='468850'>parallel.</span> <span
  m='469940'>If</span> <span m='470070'>you</span> <span m='470170'>try</span>
  <span m='470480'>and</span> <span m='470630'>make</span> <span
  m='471630'>a</span> <span m='471690'>large</span> <span
  m='472160'>SRAM,</span> <span m='472360'>which is</span> <span
  m='472860'>megabytes</span> <span m='473330'>long,</span> <span
  m='473780'>the</span> <span m='473860'>number</span> <span
  m='474090'>of</span> <span m='474200'>ports</span> <span m='474740'>in</span>
  <span m='474850'>the</span> <span m='475160'>SRAM--</span> <span
  m='475920'>read</span> <span m='476280'>ports--</span> <span
  m='479520'>is</span> <span m='480610'>roughly</span> <span
  m='480920'>of</span> <span m='481010'>the</span> <span m='481070'>order</span>
  <span m='481290'>of</span> <span m='481370'>four.</span> <span
  m='481760'>And</span> <span m='481900'>after</span> <span
  m='482090'>that</span> <span m='482340'>it's</span> <span m='482460'>kind
  of</span> <span m='482620'>hard</span> <span m='482820'>to</span> <span
  m='482900'>build.</span> <span m='484070'>So</span> <span
  m='484180'>this</span> <span m='484410'>architecture</span> <span
  m='485320'>isn't</span> <span m='485610'>going</span> <span
  m='485810'>to</span> <span m='487750'>be</span> <span
  m='488700'>sustainable</span> <span m='489770'>beyond</span> <span
  m='490480'>4,</span> <span m='490970'>8,</span> <span m='492220'>maybe</span>
  <span m='492480'>16</span> <span m='492940'>cores.</span> </p><p><span
  m='493990'>So</span> <span m='494110'>typically,</span> <span
  m='495290'>what</span> <span m='495470'>people</span> <span
  m='495720'>build</span> <span m='496300'>is--</span> <span
  m='497120'>or</span> <span m='497260'>people</span> <span
  m='497480'>are</span> <span m='497890'>trying</span> <span
  m='498110'>to</span> <span m='498170'>build</span> <span m='498450'>in</span>
  <span m='498540'>academia--</span> <span m='499790'>is</span> <span
  m='499940'>something</span> <span m='500330'>that</span> <span
  m='500550'>corresponds</span> <span m='501110'>to</span> <span
  m='501840'>a</span> <span m='501950'>distributed</span> <span
  m='502480'>architecture</span> <span m='503980'>on</span> <span
  m='504170'>the</span> <span m='504260'>chip,</span> <span
  m='505170'>where</span> <span m='507570'>you</span> <span
  m='507710'>have</span> <span m='508450'>processors</span> <span
  m='509260'>and</span> <span m='509640'>memory</span> <span
  m='510590'>in</span> <span m='510830'>tiles.</span> <span m='512320'>So</span>
  <span m='512620'>you</span> <span m='512740'>have,</span> <span
  m='518400'>essentially,</span> <span m='518789'>something</span> <span
  m='519059'>like</span> <span m='519230'>this,</span> <span
  m='519590'>where</span> <span m='519880'>you</span> <span
  m='520020'>can</span> <span m='520120'>imagine</span> <span
  m='520480'>having</span> <span m='522789'>literally</span> <span
  m='523150'>100</span> <span m='523490'>processors</span> <span
  m='524530'>on</span> <span m='524780'>a</span> <span m='524840'>chip</span>
  <span m='526040'>that</span> <span m='526780'>correspond</span> <span
  m='527360'>to</span> <span m='529910'>an</span> <span
  m='530050'>implementation</span> <span m='530670'>where</span> <span
  m='530810'>you</span> <span m='530920'>build</span> <span
  m='531200'>tiles,</span> <span m='531680'>where</span> <span
  m='531810'>you</span> <span m='531900'>have</span> <span m='532040'>a</span>
  <span m='532110'>processor</span> <span m='532690'>that's</span> <span
  m='532990'>doing</span> <span m='533180'>the</span> <span
  m='533260'>computation,</span> <span m='534330'>and</span> <span
  m='534740'>you</span> <span m='534830'>have</span> <span
  m='535140'>memory--</span> <span m='536510'>sometimes</span> <span
  m='536950'>called</span> <span m='537140'>cache</span> <span
  m='537430'>memory.</span> <span m='538400'>But</span> <span
  m='538750'>there's</span> <span m='539270'>multiple</span> <span
  m='539640'>levels</span> <span m='539970'>of</span> <span
  m='540060'>caches,</span> <span m='540490'>typically,</span> <span
  m='541560'>that</span> <span m='542690'>are</span> <span
  m='542830'>attached</span> <span m='543290'>to</span> <span
  m='543350'>each</span> <span m='543570'>of</span> <span
  m='543650'>these</span> <span m='543820'>processors.</span> <span
  m='544830'>And</span> <span m='546130'>the</span> <span
  m='548360'>space</span> <span m='548840'>between</span> <span
  m='549210'>the</span> <span m='549340'>processor</span> <span
  m='550050'>tiles</span> <span m='551400'>is</span> <span
  m='553430'>reserved</span> <span m='553980'>for</span> <span
  m='555720'>interconnect</span> <span m='556550'>or</span> <span
  m='556930'>for</span> <span m='557130'>wires</span> <span
  m='557590'>that</span> <span m='557730'>connect</span> <span
  m='557990'>these</span> <span m='558150'>processors</span> <span
  m='558690'>up.</span> </p><p><span m='559690'>And</span> <span
  m='559850'>so</span> <span m='559980'>there's</span> <span
  m='560410'>research</span> <span m='560790'>that</span> <span
  m='560930'>goes</span> <span m='561160'>on</span> <span m='561570'>in</span>
  <span m='561770'>routing</span> <span m='562130'>algorithms.</span> <span
  m='563270'>How</span> <span m='563390'>you</span> <span
  m='563820'>figure</span> <span m='564110'>out</span> <span
  m='564400'>if</span> <span m='564960'>these</span> <span
  m='565190'>processors</span> <span m='565610'>want</span> <span
  m='565790'>to</span> <span m='565860'>talk</span> <span m='566100'>to</span>
  <span m='566160'>each</span> <span m='566350'>other;</span> <span
  m='567870'>what</span> <span m='568150'>the</span> <span
  m='568220'>best</span> <span m='568480'>way</span> <span m='568650'>of</span>
  <span m='568740'>routing</span> <span m='569030'>the</span> <span
  m='569120'>messages</span> <span m='569630'>are;</span> <span
  m='570070'>you</span> <span m='570180'>want</span> <span m='570280'>to</span>
  <span m='570320'>find</span> <span m='570540'>the</span> <span
  m='570590'>shortest</span> <span m='570970'>path.</span> <span
  m='571810'>In</span> <span m='571960'>this</span> <span
  m='572130'>case,</span> <span m='572360'>the</span> <span
  m='572460'>weight</span> <span m='572890'>corresponds</span> <span
  m='573520'>to</span> <span m='574580'>the</span> <span
  m='574940'>congestion</span> <span m='575990'>that's</span> <span
  m='576260'>associated</span> <span m='576800'>with</span> <span
  m='577010'>each</span> <span m='577220'>of</span> <span
  m='577330'>these</span> <span m='577800'>channels</span> <span
  m='578360'>that</span> <span m='578500'>you</span> <span
  m='578600'>have.</span> <span m='579570'>And</span> <span
  m='580390'>people</span> <span m='580640'>actually</span> <span
  m='580970'>use</span> <span m='581360'>algorithms</span> <span
  m='581990'>like</span> <span m='582270'>weighted</span> <span
  m='582640'>shortest</span> <span m='582900'>paths,</span> <span
  m='583680'>in</span> <span m='583880'>hardware,</span> <span
  m='584880'>to</span> <span m='585030'>determine</span> <span
  m='586240'>what</span> <span m='586440'>the</span> <span
  m='586500'>best</span> <span m='586730'>way</span> <span m='586870'>of</span>
  <span m='586960'>getting</span> <span m='587160'>from</span> <span
  m='587320'>here</span> <span m='587510'>to</span> <span
  m='587560'>there</span> <span m='587870'>is.</span> <span m='588190'>It</span>
  <span m='588360'>may</span> <span m='588450'>not</span> <span
  m='588650'>be</span> <span m='588790'>this</span> <span m='589000'>way.</span>
  <span m='589420'>It</span> <span m='589540'>may</span> <span
  m='589930'>be</span> <span m='590150'>going</span> <span
  m='590420'>around</span> <span m='590800'>the</span> <span
  m='590870'>chip</span> <span m='591500'>simply</span> <span
  m='591800'>because</span> <span m='592660'>that</span> <span
  m='593130'>path--</span> <span m='593830'>the</span> <span
  m='594060'>latter</span> <span m='594310'>one</span> <span
  m='594590'>is</span> <span m='594710'>less</span> <span
  m='594910'>congested.</span> </p><p><span m='597960'>The</span> <span
  m='598060'>other</span> <span m='598350'>issue</span> <span
  m='598580'>that</span> <span m='599140'>comes</span> <span
  m='599380'>up</span> <span m='600380'>has</span> <span m='600620'>to</span>
  <span m='600730'>do</span> <span m='601000'>with</span> <span
  m='602680'>how</span> <span m='602840'>long</span> <span m='603120'>it</span>
  <span m='603250'>takes</span> <span m='603890'>to</span> <span
  m='604020'>go</span> <span m='604460'>across</span> <span
  m='604880'>the</span> <span m='604980'>chip</span> <span m='605410'>and</span>
  <span m='605590'>come</span> <span m='605760'>back.</span> <span
  m='606560'>So</span> <span m='606690'>if this</span> <span
  m='606930'>processor</span> <span m='607750'>wants</span> <span
  m='608200'>to</span> <span m='608320'>access</span> <span
  m='608860'>its</span> <span m='609030'>local</span> <span
  m='609400'>memory--</span> <span m='609840'>that's</span> <span
  m='610110'>typically</span> <span m='611290'>pretty</span> <span
  m='612130'>simple</span> <span m='613420'>or</span> <span
  m='613630'>fast.</span> <span m='614710'>But</span> <span m='614870'>if</span>
  <span m='614950'>it</span> <span m='615040'>wants</span> <span
  m='615260'>to</span> <span m='615360'>access</span> <span
  m='617400'>remote</span> <span m='617840'>memory--</span> <span
  m='618340'>and</span> <span m='618450'>it's</span> <span
  m='618550'>quite</span> <span m='618760'>possible</span> <span
  m='619220'>that</span> <span m='619440'>it's</span> <span
  m='619600'>sharing</span> <span m='620130'>some</span> <span
  m='620350'>data</span> <span m='620710'>with</span> <span m='621230'>a</span>
  <span m='621310'>different</span> <span m='621670'>thread</span> <span
  m='622020'>running</span> <span m='622290'>on</span> <span m='622390'>a</span>
  <span m='622450'>different</span> <span m='623170'>processor.</span> <span
  m='624030'>So</span> <span m='624180'>typically,</span> <span
  m='624550'>there's</span> <span m='624690'>a</span> <span
  m='624750'>program</span> <span m='625200'>running</span> <span
  m='625470'>on</span> <span m='625580'>this</span> <span
  m='625740'>processor,</span> <span m='627250'>sometimes</span> <span
  m='627630'>called</span> <span m='628090'>a</span> <span
  m='628210'>thread,</span> <span m='629210'>and</span> <span
  m='629580'>this</span> <span m='629740'>program</span> <span
  m='630210'>may</span> <span m='630280'>share</span> <span
  m='631200'>data</span> <span m='631500'>with</span> <span m='631670'>a</span>
  <span m='633590'>different</span> <span m='633850'>program,</span> <span
  m='634350'>which</span> <span m='634480'>is</span> <span
  m='634580'>running</span> <span m='634830'>on</span> <span
  m='635290'>this</span> <span m='635480'>processor.</span> <span
  m='636310'>Or</span> <span m='636430'>it</span> <span m='636510'>may</span>
  <span m='636660'>just</span> <span m='636890'>require</span> <span
  m='637400'>a</span> <span m='637430'>lot</span> <span m='637690'>more</span>
  <span m='637840'>space.</span> <span m='638940'>And</span> <span
  m='640000'>what</span> <span m='640560'>this</span> <span
  m='640780'>program</span> <span m='641110'>has</span> <span
  m='641280'>to</span> <span m='641380'>do</span> <span m='641590'>is</span>
  <span m='642170'>make</span> <span m='642380'>a</span> <span
  m='642440'>request</span> <span m='643080'>all</span> <span
  m='643290'>the</span> <span m='643360'>way</span> <span m='644030'>to</span>
  <span m='644110'>this</span> <span m='644320'>processor</span> <span
  m='646820'>and</span> <span m='647030'>this</span> <span
  m='647170'>particular</span> <span m='647490'>cache</span> <span
  m='647820'>in</span> <span m='647910'>this</span> <span
  m='648050'>processor.</span> <span m='648860'>And</span> <span
  m='649030'>then</span> <span m='649350'>it</span> <span m='649510'>gets</span>
  <span m='649980'>the</span> <span m='650100'>data</span> <span
  m='650340'>back.</span> </p><p><span m='652080'>So</span> <span
  m='653580'>what</span> <span m='653740'>you</span> <span m='653830'>see</span>
  <span m='654060'>here</span> <span m='654310'>is</span> <span
  m='654410'>a</span> <span m='654500'>round</span> <span m='654810'>trip</span>
  <span m='656740'>access</span> <span m='657990'>that</span> <span
  m='658220'>goes</span> <span m='658730'>across</span> <span
  m='659140'>the</span> <span m='659240'>chip.</span> <span
  m='661620'>And</span> <span m='663730'>this</span> <span
  m='664050'>distance,</span> <span m='664670'>if</span> <span
  m='664840'>it's</span> <span m='664980'>large,</span> <span
  m='665510'>could</span> <span m='665660'>take</span> <span
  m='665950'>10s</span> <span m='666300'>of</span> <span
  m='666390'>cycles.</span> <span m='667550'>So</span> <span
  m='667560'>typically,</span> <span m='667930'>it's</span> <span
  m='668060'>a</span> <span m='668130'>single</span> <span
  m='668460'>cycle</span> <span m='669030'>to</span> <span
  m='669100'>access</span> <span m='669550'>local</span> <span
  m='669860'>memory--</span> <span m='670300'>the</span> <span
  m='670520'>fastest</span> <span m='671030'>local</span> <span
  m='671300'>memory,</span> <span m='671990'>called</span> <span m='672250'>the
  L1</span> <span m='672660'>cache.</span> <span m='673380'>But</span> <span
  m='673510'>it</span> <span m='673560'>could</span> <span
  m='673690'>take</span> <span m='673860'>10s</span> <span m='674130'>of</span>
  <span m='674220'>cycles</span> <span m='674670'>to</span> <span
  m='674750'>go</span> <span m='674900'>send</span> <span m='675140'>a</span>
  <span m='675180'>message</span> <span m='675680'>across</span> <span
  m='676000'>the</span> <span m='676090'>chip</span> <span m='676440'>and</span>
  <span m='676630'>10s</span> <span m='676840'>of</span> <span
  m='676920'>cycles</span> <span m='677310'>to</span> <span
  m='677400'>get</span> <span m='677630'>the</span> <span m='677730'>data</span>
  <span m='677940'>back.</span> <span m='678970'>So</span> <span
  m='679940'>the</span> <span m='680320'>bottleneck,</span> <span
  m='680460'>really,</span> <span m='681860'>in</span> <span
  m='682490'>parallel</span> <span m='682840'>processing</span> <span
  m='683480'>from</span> <span m='683640'>a</span> <span
  m='683690'>standpoint</span> <span m='684130'>of</span> <span
  m='684210'>communication</span> <span m='685570'>is</span> <span
  m='686880'>this</span> <span m='687140'>routing</span> <span
  m='687470'>of</span> <span m='687590'>messages</span> <span
  m='688240'>and</span> <span m='688390'>getting</span> <span
  m='688570'>the</span> <span m='688650'>messages</span> <span
  m='689080'>back.</span> </p><p><span m='691150'>One</span> <span
  m='691350'>of</span> <span m='691390'>the</span> <span
  m='691460'>things</span> <span m='691680'>that</span> <span
  m='691810'>my</span> <span m='691960'>research</span> <span
  m='692320'>group</span> <span m='692510'>is</span> <span
  m='692640'>doing</span> <span m='693070'>is</span> <span
  m='693750'>looking</span> <span m='694110'>at</span> <span
  m='694210'>the</span> <span m='694280'>notion</span> <span
  m='694680'>of</span> <span m='696960'>migrating</span> <span
  m='697460'>computation</span> <span m='698720'>as</span> <span
  m='698780'>opposed</span> <span m='699090'>to</span> <span
  m='699180'>data.</span> <span m='700200'>We</span> <span m='700310'>call
  it</span> <span m='700580'>execution</span> <span m='701400'>migration,</span>
  <span m='702800'>where</span> <span m='705620'>you</span> <span
  m='705780'>could</span> <span m='705920'>say--</span> <span
  m='706640'>suppose</span> <span m='707030'>I</span> <span
  m='707110'>have</span> <span m='708460'>a</span> <span
  m='708610'>processor</span> <span m='710000'>running</span> <span
  m='712960'>a</span> <span m='713050'>particular</span> <span
  m='713420'>program,</span> <span m='713900'>out</span> <span
  m='714010'>here.</span> <span m='715460'>And</span> <span m='715940'>if</span>
  <span m='716120'>this</span> <span m='716320'>program</span> <span
  m='716810'>wanted</span> <span m='717130'>to</span> <span
  m='717230'>access</span> <span m='718200'>a</span> <span
  m='718350'>remote</span> <span m='719150'>memory,</span> <span
  m='720620'>then,</span> <span m='720980'>rather</span> <span
  m='721250'>than</span> <span m='721520'>doing</span> <span
  m='721840'>what</span> <span m='721980'>I</span> <span m='722050'>just</span>
  <span m='722220'>showed</span> <span m='722490'>you</span> <span
  m='722590'>there--</span> <span m='722920'>send</span> <span
  m='723210'>a</span> <span m='723260'>message,</span> <span
  m='723650'>get</span> <span m='723800'>the</span> <span m='723890'>data</span>
  <span m='724140'>back--</span> <span m='724910'>you</span> <span
  m='725060'>could</span> <span m='725170'>imagine</span> <span
  m='725680'>that</span> <span m='726530'>you</span> <span
  m='726700'>could</span> <span m='726850'>migrate</span> <span
  m='728430'>the</span> <span m='728550'>program</span> <span
  m='729030'>itself.</span> <span m='730420'>And</span> <span
  m='730660'>in</span> <span m='730770'>particular,</span> <span
  m='731610'>you</span> <span m='731630'>think</span> <span m='731850'>of</span>
  <span m='731950'>it</span> <span m='732070'>as</span> <span
  m='732170'>migrating</span> <span m='732660'>the</span> <span
  m='732780'>context</span> <span m='733620'>of</span> <span
  m='733770'>the</span> <span m='733850'>program</span> <span
  m='736830'>from</span> <span m='738300'>this</span> <span
  m='738640'>processor</span> <span m='739200'>to</span> <span
  m='739270'>this</span> <span m='739480'>one.</span> <span
  m='740580'>And</span> <span m='740710'>so</span> <span m='740820'>what</span>
  <span m='740980'>is</span> <span m='741120'>the</span> <span
  m='741210'>context?</span> </p><p><span m='741800'>For</span> <span
  m='741870'>those</span> <span m='742110'>of</span> <span m='742210'>you</span>
  <span m='742850'>who have</span> <span m='743130'>taken</span> <span
  m='743390'>6.004</span> <span m='745940'>probably</span> <span
  m='747540'>know</span> <span m='747710'>what</span> <span
  m='747900'>this</span> <span m='748070'>is.</span> <span m='748360'>But</span>
  <span m='749600'>it's</span> <span m='749800'>simply</span> <span
  m='751390'>where</span> <span m='751700'>you</span> <span
  m='751880'>are</span> <span m='753150'>in</span> <span m='753330'>terms</span>
  <span m='753630'>of</span> <span m='753720'>executing</span> <span
  m='754250'>your</span> <span m='754330'>program.</span> <span
  m='755070'>And</span> <span m='755230'>that's</span> <span
  m='755420'>typically</span> <span m='755800'>given to you</span> <span
  m='756200'>by</span> <span m='756470'>our</span> <span
  m='756660'>program</span> <span m='757140'>counter,</span> <span
  m='758190'>and</span> <span m='758790'>your</span> <span
  m='758990'>current</span> <span m='759360'>state</span> <span
  m='760670'>of</span> <span m='760780'>your</span> <span
  m='760910'>register</span> <span m='761340'>file,</span> <span
  m='763010'>and</span> <span m='763220'>a</span> <span m='763280'>few</span>
  <span m='763440'>other</span> <span m='763660'>things,</span> <span
  m='764780'>including</span> <span m='766740'>cache</span> <span
  m='767050'>memory</span> <span m='767450'>and</span> <span
  m='767570'>so</span> <span m='767710'>on</span> <span m='767830'>and</span>
  <span m='767910'>so</span> <span m='768050'>forth.</span> <span
  m='769180'>So</span> <span m='770010'>the</span> <span
  m='770110'>advantage</span> <span m='770660'>with</span> <span
  m='770750'>execution</span> <span m='771720'>migration</span> <span
  m='772230'>is</span> <span m='772360'>that</span> <span m='772500'>it's</span>
  <span m='772670'>a</span> <span m='772730'>one</span> <span
  m='772970'>way</span> <span m='773150'>trip,</span> <span m='774700'>as</span>
  <span m='774910'>opposed</span> <span m='775280'>to a</span> <span
  m='775410'>round</span> <span m='775780'>trip.</span> </p><p><span
  m='780510'>You</span> <span m='781700'>don't</span> <span
  m='781910'>have</span> <span m='782140'>to</span> <span m='782620'>send</span>
  <span m='782890'>a</span> <span m='782950'>message</span> <span
  m='783320'>and</span> <span m='783860'>get</span> <span m='784060'>the</span>
  <span m='784140'>data</span> <span m='784950'>back,</span> <span
  m='785620'>which</span> <span m='785820'>would</span> <span
  m='785920'>be</span> <span m='786840'>two</span> <span
  m='787710'>messages,</span> <span m='788210'>if</span> <span
  m='788340'>you</span> <span m='788440'>will--</span> <span
  m='788710'>one</span> <span m='789330'>in</span> <span m='789410'>the</span>
  <span m='789500'>case</span> <span m='789680'>of the</span> <span
  m='789790'>address</span> <span m='790220'>and the other</span> <span
  m='790540'>for</span> <span m='790650'>the</span> <span
  m='790760'>data--</span> <span m='791520'>but</span> <span
  m='791920'>you</span> <span m='792070'>migrate</span> <span
  m='792430'>your</span> <span m='792560'>execution.</span> <span
  m='793780'>Since</span> <span m='793970'>you</span> <span
  m='794060'>have</span> <span m='794260'>computation</span> <span
  m='794870'>out</span> <span m='795010'>here,</span> <span
  m='795660'>you</span> <span m='795800'>can</span> <span m='795970'>run</span>
  <span m='797130'>on</span> <span m='797380'>this</span> <span
  m='798480'>remote</span> <span m='798830'>processor.</span> <span
  m='800570'>So</span> <span m='800580'>that's</span> <span
  m='800740'>one</span> <span m='800890'>of</span> <span m='800940'>the</span>
  <span m='800990'>advantages</span> <span m='801590'>of</span> <span
  m='802040'>execution</span> <span m='802520'>migration</span> </p><p><span
  m='803260'>One</span> <span m='803490'>of</span> <span m='803540'>the</span>
  <span m='803630'>downsides</span> <span m='804230'>of</span> <span
  m='804370'>it</span> <span m='804910'>is</span> <span m='805110'>that</span>
  <span m='805340'>this</span> <span m='807860'>can</span> <span
  m='807990'>be</span> <span m='808100'>multiple</span> <span
  m='808590'>kilobytes--</span> <span m='809880'>or</span> <span
  m='810020'>kilobits.</span> <span m='811200'>And</span> <span
  m='812090'>it</span> <span m='812310'>could</span> <span m='812460'>be</span>
  <span m='812600'>significantly</span> <span m='813250'>more</span> <span
  m='814730'>in</span> <span m='814880'>terms</span> <span m='815120'>of</span>
  <span m='815180'>size,</span> <span m='815750'>or</span> <span
  m='815850'>in</span> <span m='815930'>terms of</span> <span
  m='816150'>bits,</span> <span m='816660'>than</span> <span
  m='816820'>the</span> <span m='816900'>data</span> <span
  m='817170'>that</span> <span m='817310'>you</span> <span
  m='817420'>want</span> <span m='817570'>to</span> <span
  m='817640'>access.</span> <span m='819460'>So</span> <span
  m='820160'>there's</span> <span m='820270'>a</span> <span
  m='820330'>trade-off</span> <span m='820730'>here.</span> <span
  m='821180'>And</span> <span m='821320'>then,</span> <span
  m='821500'>when</span> <span m='821610'>any</span> <span
  m='821820'>time</span> <span m='822060'>you</span> <span
  m='822140'>have</span> <span m='822260'>a</span> <span
  m='822320'>trade-off,</span> <span m='823580'>you</span> <span
  m='823700'>can</span> <span m='823790'>think</span> <span m='823930'>of</span>
  <span m='824020'>an</span> <span m='824100'>algorithm</span> <span
  m='824650'>to</span> <span m='824740'>try</span> <span m='824980'>and</span>
  <span m='825180'>find</span> <span m='825540'>the</span> <span
  m='825640'>optimal</span> <span m='826070'>trade-off.</span> <span
  m='827100'>So</span> <span m='827290'>this</span> <span m='827460'>is</span>
  <span m='828050'>the</span> <span m='828180'>context</span> <span
  m='828960'>for</span> <span m='830340'>the</span> <span
  m='830490'>particular</span> <span m='833510'>optimization</span> <span
  m='834180'>problem</span> <span m='834650'>that</span> <span
  m='835080'>we</span> <span m='835180'>need</span> <span m='835330'>to</span>
  <span m='835410'>solve,</span> <span m='835720'>here,</span> <span
  m='836510'>that</span> <span m='836660'>corresponds</span> <span
  m='837280'>to</span> <span m='838320'>really</span> <span
  m='838580'>deciding</span> <span m='839940'>when</span> <span
  m='840220'>you</span> <span m='840370'>want</span> <span m='840610'>to</span>
  <span m='840720'>do</span> <span m='841610'>data</span> <span
  m='841960'>migration</span> <span m='843230'>and</span> <span
  m='843440'>when</span> <span m='843640'>you</span> <span
  m='843750'>want</span> <span m='843910'>to</span> <span m='843990'>do</span>
  <span m='844540'>execution</span> <span m='845110'>migration.</span>
  </p><p><span m='846960'>There's</span> <span m='847190'>a</span> <span
  m='847270'>choice.</span> <span m='848870'>At</span> <span
  m='849360'>the</span> <span m='849520'>top</span> <span
  m='849770'>level,</span> <span m='851650'>it's a</span> <span
  m='851860'>round</span> <span m='852250'>trip</span> <span
  m='852710'>to</span> <span m='852820'>get</span> <span m='853020'>the</span>
  <span m='853110'>data.</span> <span m='853510'>So</span> <span
  m='853700'>you're</span> <span m='854120'>really</span> <span
  m='854380'>traveling</span> <span m='855890'>longer--</span> <span
  m='856760'>twice</span> <span m='857410'>as</span> <span
  m='857610'>long.</span> <span m='858670'>The</span> <span
  m='858790'>distance</span> <span m='859140'>is</span> <span
  m='859270'>twice</span> <span m='859550'>as</span> <span
  m='859670'>much.</span> <span m='860790'>But</span> <span
  m='861270'>it's</span> <span m='861460'>possible</span> <span
  m='862010'>that</span> <span m='863100'>the</span> <span
  m='863300'>amount</span> <span m='863590'>of</span> <span
  m='863670'>state</span> <span m='864200'>that</span> <span
  m='864340'>you'd</span> <span m='864500'>have</span> <span
  m='864710'>to</span> <span m='864840'>move,</span> <span m='866580'>in</span>
  <span m='866740'>terms</span> <span m='867040'>of</span> <span
  m='867140'>taking</span> <span m='867490'>your</span> <span
  m='867690'>context</span> <span m='868330'>of</span> <span
  m='868430'>your</span> <span m='868630'>thread</span> <span
  m='869790'>and</span> <span m='869960'>moving</span> <span
  m='870290'>across</span> <span m='870610'>the</span> <span
  m='870720'>chip,</span> <span m='871340'>could</span> <span
  m='871510'>be</span> <span m='871970'>large</span> <span
  m='872380'>enough</span> <span m='872710'>that</span> <span
  m='873490'>it</span> <span m='873980'>offsets</span> <span
  m='874920'>the</span> <span m='875060'>advantage</span> <span
  m='875560'>of</span> <span m='875660'>the</span> <span
  m='875730'>shorter</span> <span m='876080'>distance.</span> </p><p><span
  m='878020'>So</span> <span m='878340'>we</span> <span m='878450'>set</span>
  <span m='878670'>this</span> <span m='878870'>up</span> <span
  m='879520'>as</span> <span m='879830'>an</span> <span
  m='881030'>optimization</span> <span m='881650'>problem.</span> <span
  m='882820'>So</span> <span m='882860'>now</span> <span m='883050'>we're
  in</span> <span m='883300'>the</span> <span m='883400'>realm</span> <span
  m='883710'>of--</span> <span m='884110'>we moved</span> <span
  m='884320'>from</span> <span m='884500'>6.004</span> <span
  m='885510'>to</span> <span m='885630'>6.006,</span> <span
  m='886110'>here,</span> <span m='887170'>in</span> <span m='887230'>the</span>
  <span m='887310'>last</span> <span m='888460'>couple</span> <span
  m='888680'>of</span> <span m='888730'>seconds.</span> <span
  m='890210'>So</span> <span m='890630'>assume</span> <span m='890990'>we</span>
  <span m='891110'>know</span> <span m='892520'>or</span> <span
  m='892710'>can</span> <span m='892880'>predict</span> <span
  m='897330'>the</span> <span m='897540'>access</span> <span
  m='897990'>pattern</span> <span m='902940'>of a</span> <span
  m='903320'>program.</span> <span m='904720'>And</span> <span
  m='904900'>you</span> <span m='905000'>can</span> <span m='905110'>do</span>
  <span m='905250'>this--</span> <span m='905530'>people</span> <span
  m='906030'>build</span> <span m='906320'>these</span> <span
  m='906610'>things</span> <span m='906870'>in</span> <span
  m='906960'>hardware--</span> <span m='908210'>prefetch</span> <span
  m='908660'>engines,</span> <span m='909150'>branch</span> <span
  m='909430'>predictors,</span> <span m='909960'>and</span> <span
  m='910090'>so</span> <span m='910270'>on.</span> <span
  m='911100'>They're</span> <span m='911390'>in</span> <span
  m='911710'>the</span> <span m='912150'>x86</span> <span
  m='912740'>machines.</span> <span m='913600'>And</span> <span
  m='913920'>you</span> <span m='914060'>can</span> <span
  m='914190'>tell--</span> <span m='914480'>especially</span> <span
  m='914830'>if</span> <span m='914900'>you're</span> <span
  m='915010'>going</span> <span m='915220'>through</span> <span
  m='915350'>a</span> <span m='915420'>loop</span> <span m='915740'>over</span>
  <span m='915940'>and</span> <span m='916030'>over--</span> <span
  m='916660'>you</span> <span m='916790'>can</span> <span m='916910'>make</span>
  <span m='917110'>this</span> <span m='917260'>prediction.</span> </p><p><span
  m='920070'>So</span> <span m='920190'>you</span> <span m='920280'>have</span>
  <span m='920400'>some</span> <span m='920570'>amount</span> <span
  m='920830'>of</span> <span m='920900'>look</span> <span
  m='921070'>ahead.</span> <span m='921640'>And you</span> <span m='922140'>know
  that</span> <span m='923140'>m1</span> <span m='923880'>through</span> <span
  m='924080'>mn</span> <span m='924780'>are</span> <span m='925000'>the</span>
  <span m='925130'>memory</span> <span m='925480'>accesses</span> <span
  m='926340'>that</span> <span m='926780'>this</span> <span
  m='926990'>program</span> <span m='927400'>is</span> <span
  m='927520'>going</span> <span m='927740'>to</span> <span
  m='927850'>make.</span> <span m='929250'>And</span> <span
  m='929660'>these</span> <span m='929910'>other</span> <span
  m='930080'>memory</span> <span m='930390'>addresses.</span> <span
  m='934930'>And</span> <span m='935620'>I'm</span> <span
  m='935740'>going</span> <span m='935840'>to</span> <span
  m='935900'>think</span> <span m='936080'>about</span> <span m='936460'>p
  of</span> <span m='936870'>m1,</span> <span m='937930'>p</span> <span
  m='938130'>of</span> <span m='938270'>m2,</span> <span m='940660'>p</span>
  <span m='940810'>of</span> <span m='940930'>mn,</span> <span
  m='942670'>as</span> <span m='943110'>the</span> <span
  m='944340'>processor</span> <span m='946610'>caches</span> <span
  m='949290'>for</span> <span m='949620'>each</span> <span m='949890'>mi.</span>
  </p><p><span m='952400'>So</span> <span m='954260'>what</span> <span
  m='954610'>might</span> <span m='955230'>be</span> <span m='955390'>the</span>
  <span m='955480'>case,</span> <span m='955940'>in</span> <span
  m='956050'>a</span> <span m='956110'>simple</span> <span
  m='956400'>example,</span> <span m='957330'>is</span> <span
  m='960290'>you</span> <span m='960460'>want</span> <span m='960610'>to</span>
  <span m='960650'>access</span> <span m='961730'>memory</span> <span
  m='962140'>in</span> <span m='962250'>processor</span> <span
  m='962790'>one.</span> <span m='963390'>You're</span> <span
  m='963540'>sitting</span> <span m='963780'>there</span> <span m='963920'>and
  you want to</span> <span m='964170'>access</span> <span
  m='964570'>memory</span> <span m='964910'>in</span> <span
  m='964980'>processor</span> <span m='965430'>one.</span> <span
  m='966270'>And</span> <span m='966430'>then,</span> <span
  m='966760'>the</span> <span m='966910'>next</span> <span
  m='967140'>one,</span> <span m='967350'>you</span> <span
  m='967440'>want</span> <span m='967550'>to</span> <span
  m='967590'>access</span> <span m='968020'>memory</span> <span
  m='968370'>in</span> <span m='968460'>processor</span> <span
  m='968970'>two.</span> <span m='970090'>And</span> <span m='970430'>so</span>
  <span m='970590'>on and</span> <span m='970790'>so</span> <span
  m='970990'>forth.</span> <span m='973490'>So</span> <span
  m='973620'>you</span> <span m='973680'>might</span> <span
  m='973850'>see</span> <span m='973970'>something</span> <span
  m='974230'>like</span> <span m='974410'>that.</span> <span
  m='974920'>So</span> <span m='975030'>the</span> <span
  m='975130'>sequence</span> <span m='975520'>of</span> <span
  m='975570'>memory</span> <span m='975890'>addressees--</span> <span
  m='977410'>if</span> <span m='977550'>you're</span> <span
  m='977680'>sitting</span> <span m='977950'>on</span> <span
  m='978060'>processor</span> <span m='978490'>one--</span> <span
  m='978760'>this</span> <span m='978930'>first</span> <span
  m='979180'>one</span> <span m='979340'>is</span> <span
  m='979450'>local.</span> <span m='980660'>And</span> <span
  m='980800'>then,</span> <span m='980920'>after</span> <span
  m='981100'>that,</span> <span m='981380'>you</span> <span
  m='981480'>want</span> <span m='981580'>to</span> <span
  m='981680'>access</span> <span m='981870'>processor</span> <span
  m='982300'>two's</span> <span m='982540'>memory</span> <span
  m='983250'>because</span> <span m='983460'>you're</span> <span
  m='983560'>sharing</span> <span m='983890'>data</span> <span
  m='984160'>with</span> <span m='984330'>it.</span> <span
  m='984790'>Then</span> <span m='984930'>you're</span> <span
  m='985050'>back</span> <span m='985320'>home,</span> <span
  m='985640'>again,</span> <span m='986140'>to</span> <span
  m='986230'>processor</span> <span m='986650'>one.</span> <span
  m='987410'>And</span> <span m='987590'>so</span> <span m='987720'>on</span>
  <span m='987840'>and</span> <span m='987940'>so</span> <span
  m='988070'>forth.</span> <span m='991370'>So</span> <span
  m='991420'>that's</span> <span m='993020'>one</span> <span
  m='993250'>example</span> <span m='993650'>of</span> <span m='993730'>a</span>
  <span m='993790'>set</span> <span m='993980'>up.</span> </p><p><span
  m='994610'>And</span> <span m='995020'>we</span> <span m='995160'>can</span>
  <span m='995260'>think</span> <span m='995430'>of</span> <span
  m='995480'>about</span> <span m='995660'>the</span> <span
  m='995760'>cost</span> <span m='996380'>of</span> <span
  m='996920'>migration</span> <span m='999350'>as-- if</span> <span
  m='999720'>you</span> <span m='999910'>want</span> <span m='1000040'>to</span>
  <span m='1000090'>go</span> <span m='1000280'>from</span> <span
  m='1000520'>s</span> <span m='1000810'>to</span> <span m='1000940'>d--</span>
  <span m='1001874'>as</span> <span m='1003050'>being</span> <span
  m='1003360'>a</span> <span m='1003430'>function</span> <span
  m='1003930'>of</span> <span m='1004030'>the</span> <span
  m='1004110'>distance,</span> <span m='1005400'>s</span> <span
  m='1005590'>comma</span> <span m='1006010'>d,</span> <span
  m='1006800'>plus</span> <span m='1007180'>some</span> <span
  m='1007520'>constant,</span> <span m='1009230'>which</span> <span
  m='1009590'>is</span> <span m='1011140'>proportional</span> <span
  m='1011780'>to</span> <span m='1011880'>the</span> <span
  m='1013380'>context</span> <span m='1013780'>size.</span> <span
  m='1014120'>And</span> <span m='1014220'>that</span> <span
  m='1014370'>context</span> <span m='1014730'>size,</span> <span
  m='1015240'>we're</span> <span m='1015340'>going</span> <span
  m='1015440'>to</span> <span m='1015480'>assume</span> <span
  m='1015820'>is</span> <span m='1015980'>fixed</span> <span
  m='1017310'>for</span> <span m='1017530'>a</span> <span
  m='1017570'>particular</span> <span m='1017980'>architecture.</span> <span
  m='1019120'>It</span> <span m='1019240'>may</span> <span
  m='1019380'>change</span> <span m='1019730'>for</span> <span
  m='1019830'>different</span> <span m='1020090'>architectures,</span> <span
  m='1020820'>but</span> <span m='1021720'>if it's</span> <span
  m='1021910'>a</span> <span m='1021980'>few</span> <span
  m='1022150'>kilobits,</span> <span m='1023490'>then</span> <span
  m='1024349'>there's</span> <span m='1024589'>going</span> <span
  m='1024700'>to</span> <span m='1024740'>be</span> <span
  m='1024849'>some</span> <span m='1025099'>overhead</span> <span
  m='1025510'>associated</span> <span m='1026010'>with</span> <span
  m='1026170'>putting</span> <span m='1026410'>the</span> <span
  m='1026500'>context</span> <span m='1026950'>onto</span> <span
  m='1027170'>the</span> <span m='1027270'>network.</span> <span
  m='1028160'>And</span> <span m='1028380'>it's</span> <span
  m='1028550'>a</span> <span m='1028630'>sizable</span> <span
  m='1029099'>overhead</span> <span m='1029520'>that</span> <span
  m='1029670'>needs</span> <span m='1029829'>to</span> <span
  m='1029920'>be</span> <span m='1030020'>taken</span> <span
  m='1030290'>into</span> <span m='1030460'>account.</span> <span
  m='1032000'>That's</span> <span m='1032319'>the</span> <span
  m='1032400'>cost</span> <span m='1032680'>of</span> <span
  m='1032740'>migration.</span> </p><p><span m='1033940'>The</span> <span
  m='1034069'>cost</span> <span m='1034420'>of</span> <span
  m='1034500'>an</span> <span m='1034599'>access,</span> <span
  m='1036910'>s</span> <span m='1037190'>comma</span> <span
  m='1037450'>d,</span> <span m='1038210'>is</span> <span
  m='1038420'>twice</span> <span m='1038880'>the</span> <span
  m='1039010'>distance</span> <span m='1041339'>between s</span> <span
  m='1041800'>and</span> <span m='1042200'>d.</span> <span
  m='1043050'>And</span> <span m='1043200'>it's</span> <span
  m='1043310'>typically</span> <span m='1044829'>just</span> <span
  m='1045040'>a</span> <span m='1045099'>word</span> <span
  m='1045579'>that</span> <span m='1045700'>you</span> <span m='1045800'>want
  to</span> <span m='1045980'>access--</span> <span m='1047589'>32 bits,</span>
  <span m='1048300'>64</span> <span m='1048690'>bits--</span> <span
  m='1049470'>and</span> <span m='1049680'>so</span> <span
  m='1049830'>there's</span> <span m='1050050'>no</span> <span
  m='1050880'>additional</span> <span m='1051390'>overhead</span> <span
  m='1051780'>associated</span> <span m='1052340'>with</span> <span
  m='1052990'>a</span> <span m='1053170'>data</span> <span
  m='1053470'>access.</span> <span m='1054750'>So</span> <span
  m='1054890'>there</span> <span m='1055030'>you</span> <span
  m='1055120'>go.</span> <span m='1055890'>You</span> <span
  m='1056030'>have</span> <span m='1058090'>the</span> <span
  m='1058220'>formulation</span> <span m='1058780'>of</span> <span
  m='1058870'>the</span> <span m='1058950'>problem.</span> <span
  m='1059800'>You</span> <span m='1059960'>have</span> <span
  m='1060290'>the</span> <span m='1060380'>trade-off</span> <span
  m='1061500'>written,</span> <span m='1062290'>where</span> <span
  m='1062640'>the</span> <span m='1062740'>cost</span> <span
  m='1063030'>of</span> <span m='1063090'>migration</span> <span
  m='1063750'>has</span> <span m='1065690'>just</span> <span
  m='1065910'>the</span> <span m='1066000'>distance.</span> <span
  m='1066500'>But</span> <span m='1066640'>it</span> <span
  m='1066690'>has</span> <span m='1066880'>a</span> <span
  m='1066920'>constant</span> <span m='1067290'>factor.</span> <span
  m='1068120'>And</span> <span m='1068880'>you've</span> <span
  m='1069030'>got</span> <span m='1069180'>twice</span> <span
  m='1069420'>the</span> <span m='1069510'>distance,</span> <span
  m='1069870'>here,</span> <span m='1070200'>for</span> <span
  m='1070410'>the</span> <span m='1070490'>access.</span> </p><p><span
  m='1072780'>Now</span> <span m='1073010'>if</span> <span m='1073140'>s</span>
  <span m='1073360'>equals</span> <span m='1073740'>d,</span> <span
  m='1074420'>and</span> <span m='1074520'>I</span> <span m='1074560'>want
  to</span> <span m='1074680'>write</span> <span m='1074910'>this</span> <span
  m='1075060'>down,</span> <span m='1076320'>you</span> <span
  m='1076360'>have</span> <span m='1076480'>a</span> <span
  m='1076530'>local</span> <span m='1076930'>access.</span> <span
  m='1078140'>And</span> <span m='1078820'>the</span> <span
  m='1078880'>cost</span> <span m='1079140'>is</span> <span
  m='1079450'>assumed</span> <span m='1079790'>to</span> <span
  m='1079840'>be</span> <span m='1079920'>zero.</span> <span
  m='1081000'>You</span> <span m='1081140'>could</span> <span
  m='1081350'>change</span> <span m='1081650'>that.</span> <span m='1082560'>We
  are</span> <span m='1082760'>in</span> <span m='1082860'>the</span> <span
  m='1082960'>realm</span> <span m='1083250'>of</span> <span
  m='1083430'>the</span> <span m='1084640'>theory</span> <span
  m='1085130'>and</span> <span m='1085300'>symbols.</span> <span
  m='1085760'>So</span> <span m='1086020'>you</span> <span
  m='1086150'>can</span> <span m='1086260'>do</span> <span
  m='1086370'>whatever</span> <span m='1086630'>you</span> <span
  m='1086740'>want.</span> <span m='1088280'>But</span> <span
  m='1088490'>given</span> <span m='1088710'>those</span> <span
  m='1088930'>equations,</span> <span m='1090460'>our</span> <span
  m='1090580'>problem</span> <span m='1092770'>is</span> <span
  m='1093530'>decide</span> <span m='1095670'>when</span> <span
  m='1097250'>to</span> <span m='1097530'>migrate</span> <span
  m='1100880'>to</span> <span m='1101120'>minimize</span> <span
  m='1104470'>total</span> <span m='1106070'>memory</span> <span
  m='1106450'>access</span> <span m='1106860'>cost.</span> </p><p><span
  m='1113940'>So</span> <span m='1114300'>in</span> <span m='1114490'>our</span>
  <span m='1114610'>example</span> <span m='1115050'>there,</span> <span
  m='1115260'>I</span> <span m='1115320'>suppose</span> <span
  m='1115630'>we</span> <span m='1115720'>had</span> <span
  m='1115920'>p1,</span> <span m='1116480'>p2,</span> <span
  m='1118260'>p2,</span> <span m='1118720'>et</span> <span
  m='1119130'>cetera.</span> <span m='1121850'>And</span> <span
  m='1122010'>let's</span> <span m='1122160'>say</span> <span
  m='1122280'>you</span> <span m='1122390'>start</span> <span
  m='1122810'>at</span> <span m='1122930'>p1.</span> <span
  m='1126850'>This</span> <span m='1127040'>first</span> <span
  m='1127310'>one</span> <span m='1127530'>would</span> <span
  m='1127640'>be</span> <span m='1127790'>a</span> <span
  m='1127840'>local</span> <span m='1128250'>access.</span> <span
  m='1129750'>And</span> <span m='1129880'>then,</span> <span
  m='1130020'>you</span> <span m='1130120'>may</span> <span
  m='1130250'>decide</span> <span m='1130710'>that</span> <span
  m='1130820'>you</span> <span m='1130910'>want</span> <span
  m='1131030'>to</span> <span m='1131070'>migrate</span> <span
  m='1131640'>to</span> <span m='1131710'>p2,</span> <span
  m='1132180'>over</span> <span m='1132380'>here.</span> <span
  m='1136120'>In</span> <span m='1136270'>this</span> <span
  m='1136470'>case,</span> <span m='1136750'>you</span> <span
  m='1136880'>get</span> <span m='1137290'>this</span> <span
  m='1137540'>as</span> <span m='1137690'>a</span> <span
  m='1137730'>local</span> <span m='1138080'>access,</span> <span
  m='1138410'>as</span> <span m='1138550'>well.</span> <span
  m='1138900'>So</span> <span m='1139140'>is</span> <span
  m='1139240'>this</span> <span m='1139420'>one.</span> <span
  m='1140520'>Right</span> <span m='1140720'>here,</span> <span
  m='1141100'>you</span> <span m='1141200'>might</span> <span
  m='1141380'>want</span> <span m='1141490'>to</span> <span
  m='1141540'>migrate</span> <span m='1142050'>to</span> <span
  m='1142360'>p1</span> <span m='1143050'>back</span> <span
  m='1143320'>to</span> <span m='1143410'>be</span> <span m='1143560'>p1.</span>
  <span m='1146910'>So</span> <span m='1147080'>this</span> <span
  m='1147290'>becomes</span> <span m='1147580'>a</span> <span
  m='1147640'>local</span> <span m='1147960'>access.</span> <span
  m='1148450'>That's</span> <span m='1148670'>a</span> <span
  m='1148720'>local</span> <span m='1149030'>access.</span> <span
  m='1150020'>They're</span> <span m='1150200'>all,</span> <span
  m='1150360'>essentially,</span> <span m='1150820'>free.</span> <span
  m='1151830'>And</span> <span m='1151960'>then,</span> <span
  m='1152090'>if</span> <span m='1152170'>you</span> <span
  m='1152250'>just</span> <span m='1152420'>stay</span> <span
  m='1152650'>at</span> <span m='1152790'>p1,</span> <span
  m='1153850'>over</span> <span m='1154050'>here,</span> <span
  m='1155630'>you</span> <span m='1155740'>may</span> <span
  m='1155850'>end</span> <span m='1156030'>up</span> <span
  m='1156150'>doing</span> <span m='1156410'>remote</span> <span
  m='1156710'>accesses</span> <span m='1157870'>to</span> <span
  m='1158180'>p3</span> <span m='1158660'>and</span> <span
  m='1158780'>p2,</span> <span m='1159140'>respectively.</span> <span
  m='1161500'>And</span> <span m='1161600'>so</span> <span
  m='1161730'>you</span> <span m='1161830'>have</span> <span
  m='1161950'>a</span> <span m='1162030'>cost</span> <span m='1162400'>of</span>
  <span m='1162470'>migration--</span> <span m='1163920'>the</span> <span
  m='1164400'>cost</span> <span m='1164670'>of</span> <span
  m='1164730'>migration</span> <span m='1165720'>and</span> <span
  m='1165840'>the</span> <span m='1165910'>cost</span> <span
  m='1166220'>of</span> <span m='1166350'>two</span> <span
  m='1166500'>remote</span> <span m='1166790'>access.</span> </p><p><span
  m='1169810'>So</span> <span m='1169930'>that's</span> <span
  m='1170120'>the</span> <span m='1170210'>set</span> <span
  m='1170430'>up.</span> <span m='1171720'>How</span> <span
  m='1171890'>are</span> <span m='1171990'>we</span> <span
  m='1172020'>going</span> <span m='1172130'>to</span> <span
  m='1172190'>solve</span> <span m='1172450'>this</span> <span
  m='1172580'>problem?</span> <span m='1177800'>Are</span> <span
  m='1177830'>we</span> <span m='1177990'>going</span> <span
  m='1178250'>Dijkstra?</span> <span m='1178610'>Are we</span> <span
  m='1178910'>going to</span> <span m='1179210'>use Bellman-Ford?</span> <span
  m='1179825'>Are we</span> <span m='1180090'>going to</span> <span
  m='1180230'>use</span> <span m='1180460'>balanced</span> <span
  m='1180740'>search</span> <span m='1181020'>trees?</span> <span
  m='1181700'>Are</span> <span m='1181760'>we</span> <span
  m='1181850'>going</span> <span m='1181990'>to</span> <span
  m='1182030'>use</span> <span m='1182580'>hash</span> <span
  m='1182910'>functions?</span> <span m='1184310'>What</span> <span
  m='1184520'>are we going to</span> <span m='1184670'>use?</span> </p><p><span
  m='1185200'>AUDIENCE: Dynamic</span> <span m='1185632'>Programming.</span>
  </p><p><span m='1186064'>PROFESSOR SRINI DEVADAS: Dynamic</span> <span
  m='1186930'>Programming.</span> <span m='1187590'>All together.</span>
  </p><p><span m='1188714'>EVERYONE: Dynamic</span> <span
  m='1189138'>Programming.</span> </p><p><span m='1190410'>PROFESSOR SRINI
  DEVADAS: Dynamic programming,</span> <span m='1190815'>all</span> <span
  m='1191220'>right.</span> <span m='1192160'>We're</span> <span
  m='1192280'>going</span> <span m='1192380'>to</span> <span
  m='1192420'>use</span> <span m='1192600'>dynamic</span> <span
  m='1193000'>programming</span> <span m='1193520'>to</span> <span
  m='1193730'>solve</span> <span m='1193980'>this</span> <span
  m='1194120'>problem.</span> <span m='1197220'>Good.</span> <span
  m='1197680'>So</span> <span m='1197850'>Erik</span> <span
  m='1198170'>taught</span> <span m='1198380'>you</span> <span
  m='1198500'>something.</span> </p><p><span m='1201300'>AUDIENCE: Where are
  the</span> <span m='1201760'>erasers?</span> </p><p><span
  m='1202220'>PROFESSOR SRINI DEVADAS: Yeah.</span> <span m='1202460'>Where
  are</span> <span m='1202600'>the erasers?</span> <span m='1203000'>I
  think</span> <span m='1203220'>they</span> <span m='1203300'>fluttered</span>
  <span m='1203580'>down</span> <span m='1203830'>here.</span> <span
  m='1204460'>All</span> <span m='1204600'>right.</span> <span m='1205880'>Let
  me</span> <span m='1206720'>bail</span> <span m='1206930'>out</span> <span
  m='1207170'>and</span> <span m='1207260'>use</span> <span
  m='1207500'>this</span> <span m='1207710'>while</span> <span
  m='1207860'>you</span> <span m='1207960'>find</span> <span
  m='1208170'>the</span> <span m='1208280'>erasers.</span> <span
  m='1211060'>So</span> <span m='1211490'>a</span> <span
  m='1211510'>program</span> <span m='1212010'>at</span> <span
  m='1212700'>p1,</span> <span m='1213590'>which</span> <span
  m='1213780'>is</span> <span m='1213870'>the</span> <span
  m='1213960'>processor,</span> <span m='1214530'>initially.</span> <span
  m='1216150'>I'm just</span> <span m='1216390'>going</span> <span
  m='1216490'>to</span> <span m='1216550'>set</span> <span m='1216740'>up</span>
  <span m='1216880'>this</span> <span m='1217050'>DP.</span> <span
  m='1218480'>Let's</span> <span m='1218710'>assume</span> <span
  m='1219020'>that</span> <span m='1219160'>the</span> <span
  m='1219240'>number</span> <span m='1219550'>of</span> <span
  m='1219630'>processors</span> <span m='1225850'>equals</span> <span
  m='1226270'>Q.</span> <span m='1229970'>Now,</span> <span
  m='1230220'>what</span> <span m='1230370'>are</span> <span
  m='1230390'>the</span> <span m='1230510'>subproblems?</span> </p><p><span
  m='1235100'>You</span> <span m='1235230'>could</span> <span
  m='1235330'>do</span> <span m='1235440'>this</span> <span
  m='1235590'>many</span> <span m='1235790'>different</span> <span
  m='1236060'>ways.</span> <span m='1237920'>Let's</span> <span
  m='1238090'>go</span> <span m='1238220'>ahead</span> <span
  m='1238420'>and</span> <span m='1238510'>use</span> <span
  m='1238780'>prefixes.</span> <span m='1241100'>And</span> <span
  m='1241410'>so</span> <span m='1242360'>DP(k,p1)</span> <span
  m='1244950'>is</span> <span m='1245340'>the</span> <span
  m='1245480'>cost</span> <span m='1248170'>of</span> <span
  m='1248340'>the</span> <span m='1248420'>optimal</span> <span
  m='1250360'>solution</span> <span m='1253710'>for</span> <span
  m='1254090'>the</span> <span m='1254210'>prefix</span> <span
  m='1258890'>m1</span> <span m='1259800'>through</span> <span
  m='1260100'>mk</span> <span m='1262540'>of</span> <span
  m='1262630'>memory</span> <span m='1262970'>accesses,</span> <span
  m='1267840'>when</span> <span m='1268040'>the</span> <span
  m='1268140'>program</span> <span m='1268540'>starts</span> <span
  m='1268950'>at</span> <span m='1269070'>p1</span> <span m='1270500'>and</span>
  <span m='1270820'>ends</span> <span m='1271240'>at</span> <span
  m='1276430'>pi.</span> <span m='1278111'>So</span> <span
  m='1278600'>that's</span> <span m='1278830'>my</span> <span
  m='1278980'>subproblem.</span> <span m='1279870'>I</span> <span
  m='1279980'>want</span> <span m='1280140'>to</span> <span
  m='1280190'>know,</span> <span m='1280690'>as</span> <span
  m='1280880'>I</span> <span m='1280920'>build</span> <span
  m='1281190'>this</span> <span m='1281360'>up,</span> <span
  m='1282970'>what</span> <span m='1283220'>is the</span> <span
  m='1283350'>optimal</span> <span m='1283850'>way</span> <span
  m='1284120'>that</span> <span m='1284300'>I'm</span> <span
  m='1284410'>going</span> <span m='1284630'>to</span> <span
  m='1284720'>choose</span> <span m='1285050'>between</span> <span
  m='1285310'>migrations</span> <span m='1285940'>and</span> <span
  m='1286050'>accesses</span> <span m='1286670'>for</span> <span
  m='1286760'>the</span> <span m='1286860'>first</span> <span
  m='1287270'>k</span> <span m='1288100'>memory</span> <span
  m='1288430'>access,</span> <span m='1288800'>assuming</span> <span
  m='1289520'>a</span> <span m='1289580'>starting</span> <span
  m='1289940'>point</span> <span m='1290690'>at</span> <span
  m='1290870'>p1</span> <span m='1294690'>and</span> <span
  m='1295070'>ending</span> <span m='1295430'>at</span> <span
  m='1296710'>some</span> <span m='1296940'>pi.</span> <span
  m='1297500'>And</span> <span m='1297650'>I</span> <span
  m='1297680'>need</span> <span m='1297800'>to</span> <span
  m='1297850'>build</span> <span m='1298100'>up</span> <span
  m='1298230'>these</span> <span m='1298400'>subproblems.</span> <span
  m='1299130'>And</span> <span m='1299270'>I</span> <span
  m='1299350'>want</span> <span m='1299550'>to</span> <span
  m='1299620'>grow</span> <span m='1299870'>them.</span> </p><p><span
  m='1303470'>Let's</span> <span m='1303700'>go</span> <span
  m='1303800'>ahead</span> <span m='1304080'>and</span> <span
  m='1305060'>set</span> <span m='1305380'>this</span> <span
  m='1305560'>up.</span> <span m='1308460'>What</span> <span
  m='1308660'>I</span> <span m='1308700'>want</span> <span m='1308870'>to</span>
  <span m='1308930'>do</span> <span m='1309050'>now</span> <span
  m='1309310'>is</span> <span m='1309870'>figure</span> <span
  m='1310170'>out</span> <span m='1310380'>DP(k plus 1, pj).</span> <span
  m='1316050'>And</span> <span m='1316480'>assuming</span> <span
  m='1316860'>I</span> <span m='1317070'>have</span> <span
  m='1317330'>all</span> <span m='1317600'>of</span> <span
  m='1317710'>the</span> <span m='1318280'>k, pi's</span> <span
  m='1319240'>computed--</span> <span m='1321400'>and</span> <span
  m='1321590'>how</span> <span m='1321720'>many</span> <span
  m='1321880'>subproblems</span> <span m='1322400'>do</span> <span
  m='1322500'>I</span> <span m='1322610'>have?</span> <span m='1324670'>How
  many</span> <span m='1324770'>subproblems</span> <span m='1324930'>do</span>
  <span m='1325280'>I have?</span> <span m='1327820'>Total?</span> </p><p><span
  m='1330430'>Look</span> <span m='1330620'>at</span> <span
  m='1330700'>this</span> <span m='1331710'>and</span> <span
  m='1332290'>tell</span> <span m='1332590'>me</span> <span
  m='1332910'>what</span> <span m='1333190'>the</span> <span
  m='1333270'>ranges</span> <span m='1333680'>of</span> <span
  m='1334430'>the</span> <span m='1334550'>possibilities</span> <span
  m='1335170'>are.</span> <span m='1335380'>So</span> <span
  m='1335460'>how</span> <span m='1335620'>many</span> <span
  m='1335680'>subproblems</span> <span m='1336060'>would</span> <span
  m='1336240'>I</span> <span m='1336290'>have?</span> <span
  m='1337800'>Someone?</span> <span m='1342880'>N  times</span> <span
  m='1344090'>Q.</span> <span m='1345720'>So</span> <span m='1345870'>you</span>
  <span m='1345940'>have</span> <span m='1346100'>N</span> <span
  m='1346330'>times</span> <span m='1346670'>Q</span> <span
  m='1347680'>subproblems.</span> <span m='1351910'>So</span> <span
  m='1353820'>you've</span> <span m='1354030'>set</span> <span
  m='1354290'>this</span> <span m='1354440'>up</span> <span
  m='1354650'>for</span> <span m='1355690'>up</span> <span
  m='1355880'>until</span> <span m='1356040'>k</span> <span
  m='1356600'>and</span> <span m='1356840'>for</span> <span
  m='1356990'>all</span> <span m='1357260'>of</span> <span
  m='1357350'>the</span> <span m='1357460'>pi's.</span> </p><p><span
  m='1358740'>Now,</span> <span m='1359030'>what</span> <span
  m='1359190'>you</span> <span m='1359280'>have</span> <span
  m='1359430'>to</span> <span m='1359540'>do</span> <span m='1359830'>is</span>
  <span m='1360940'>essentially</span> <span m='1361400'>say,</span> <span
  m='1361940'>well,</span> <span m='1363230'>DP</span> <span
  m='1363505'>of</span> <span m='1363900'>k</span> <span m='1364070'>plus</span>
  <span m='1364300'>1,</span> <span m='1364560'>pj</span> <span
  m='1365050'>is</span> <span m='1365200'>going</span> <span
  m='1365330'>to</span> <span m='1365390'>be</span> <span m='1365570'>k,
  pj</span> <span m='1367730'>plus</span> <span m='1370920'>cost</span> <span
  m='1371450'>of</span> <span m='1373630'>access</span> <span
  m='1376030'>pj,</span> <span m='1376890'>p</span> <span m='1377320'>of</span>
  <span m='1378160'>mk</span> <span m='1378490'>plus</span> <span
  m='1378820'>1</span> <span m='1381220'>if</span> <span m='1383070'>pj</span>
  <span m='1383520'>is</span> <span m='1383800'>not</span> <span
  m='1384050'>equal</span> <span m='1384380'>to</span> <span m='1384520'>p
  of</span> <span m='1385786'>mk</span> <span m='1386210'>plus</span> <span
  m='1386440'>1.</span> <span m='1387720'>So</span> <span
  m='1387850'>there's</span> <span m='1387980'>going to</span> <span
  m='1388090'>be</span> <span m='1388230'>two</span> <span
  m='1388390'>cases.</span> <span m='1389030'>I'll</span> <span
  m='1389170'>just</span> <span m='1389310'>write</span> <span
  m='1389500'>this</span> <span m='1389650'>out</span> <span
  m='1389870'>and</span> <span m='1389990'>I'll</span> <span
  m='1390430'>explain</span> <span m='1390860'>it.</span> <span
  m='1393250'>But</span> <span m='1393420'>the</span> <span
  m='1393480'>first</span> <span m='1393750'>case</span> <span
  m='1394060'>corresponds</span> <span m='1394620'>to</span> <span
  m='1395470'>if</span> <span m='1395680'>the</span> <span
  m='1396010'>new</span> <span m='1396280'>memory</span> <span
  m='1396620'>access</span> <span m='1397330'>is</span> <span
  m='1397530'>not</span> <span m='1398670'>in</span> <span
  m='1398860'>the</span> <span m='1398960'>processor</span> <span
  m='1399390'>cache</span> <span m='1399710'>corresponding</span> <span
  m='1400250'>to</span> <span m='1400340'>pj,</span> <span
  m='1401590'>then</span> <span m='1403200'>what</span> <span
  m='1403380'>you</span> <span m='1403480'>could</span> <span
  m='1403670'>do</span> <span m='1403870'>is</span> <span m='1404880'>use</span>
  <span m='1405710'>the</span> <span m='1405820'>optimum</span> <span
  m='1406340'>value,</span> <span m='1406640'>where you</span> <span
  m='1406910'>ended</span> <span m='1407300'>pj,</span> <span
  m='1408040'>and</span> <span m='1408220'>simply</span> <span
  m='1408570'>do</span> <span m='1408770'>a</span> <span
  m='1408830'>remote</span> <span m='1409130'>access</span> <span
  m='1410590'>that</span> <span m='1410910'>corresponds</span> <span
  m='1411530'>to</span> <span m='1412880'>accessing</span> <span
  m='1413480'>mk</span> <span m='1413730'>plus</span> <span
  m='1414050'>1.</span> <span m='1415020'>So</span> <span
  m='1415140'>that's</span> <span m='1415310'>one</span> <span
  m='1415520'>case.</span> </p><p><span m='1416560'>The</span> <span
  m='1416650'>case</span> <span m='1417960'>is</span> <span
  m='1418310'>to</span> <span m='1418660'>use</span> <span
  m='1424740'>the</span> <span m='1424960'>minimum</span> <span
  m='1425420'>solution--</span> <span m='1427600'>optimum</span> <span
  m='1428005'>solution</span> <span m='1428410'>corresponding</span> <span
  m='1428840'>to</span> <span m='1429160'>ending</span> <span
  m='1429490'>at</span> <span m='1429650'>pi</span> <span m='1433470'>and</span>
  <span m='1434900'>do</span> <span m='1435060'>a</span> <span
  m='1435120'>migration.</span> <span m='1436110'>You</span> <span
  m='1436540'>have</span> <span m='1437010'>cost</span> <span
  m='1437320'>of</span> <span m='1437360'>migration</span> <span
  m='1437980'>from</span> <span m='1438160'>pi</span> <span
  m='1438580'>to</span> <span m='1438700'>pj.</span> <span
  m='1441460'>And</span> <span m='1442780'>you</span> <span
  m='1442900'>do</span> <span m='1443040'>this</span> <span
  m='1443490'>if</span> <span m='1448390'>you</span> <span
  m='1448510'>want</span> <span m='1448650'>to</span> <span
  m='1448710'>go</span> <span m='1448920'>do</span> <span m='1449570'>p</span>
  <span m='1449920'>of</span> <span m='1450835'>mk</span> <span
  m='1451330'>plus</span> <span m='1452050'>1--</span> <span
  m='1453220'>the</span> <span m='1453580'>processor</span> <span
  m='1454060'>corresponding</span> <span m='1454580'>to</span> <span
  m='1454640'>p</span> <span m='1454810'>of mk</span> <span
  m='1455020'>plus</span> <span m='1455400'>1.</span> </p><p><span
  m='1456900'>So</span> <span m='1457580'>that's</span> <span
  m='1457790'>the</span> <span m='1457890'>set</span> <span
  m='1458070'>up</span> <span m='1458190'>for</span> <span
  m='1458280'>this</span> <span m='1458440'>dynamic</span> <span
  m='1458800'>program.</span> <span m='1461120'>What</span> <span
  m='1461320'>you've</span> <span m='1461440'>done</span> <span
  m='1461710'>is</span> <span m='1462200'>created</span> <span
  m='1462580'>a</span> <span m='1462640'>sub</span> <span
  m='1462840'>problem,</span> <span m='1463480'>its</span> <span
  m='1463700'>optimum,</span> <span m='1464590'>and</span> <span
  m='1464730'>then</span> <span m='1464850'>you</span> <span
  m='1465530'>look</span> <span m='1465680'>at</span> <span
  m='1465720'>the</span> <span m='1466180'>two</span> <span
  m='1466320'>cases.</span> <span m='1467280'>You</span> <span
  m='1467440'>want</span> <span m='1467770'>to</span> <span
  m='1467880'>go</span> <span m='1468180'>migrate</span> <span
  m='1468850'>and</span> <span m='1469340'>do</span> <span m='1469470'>a</span>
  <span m='1469540'>local</span> <span m='1469960'>access--</span> <span
  m='1470840'>that's</span> <span m='1470990'>this</span> <span
  m='1471200'>case</span> <span m='1471440'>over</span> <span
  m='1471610'>here.</span> <span m='1472870'>Migrate</span> <span
  m='1473300'>to</span> <span m='1473370'>the</span> <span
  m='1473460'>processor</span> <span m='1473920'>and</span> <span
  m='1474040'>do</span> <span m='1474170'>a</span> <span
  m='1474230'>local</span> <span m='1474580'>access</span> <span
  m='1474970'>there.</span> <span m='1475780'>That will</span> <span
  m='1475890'>be</span> <span m='1475990'>this</span> <span
  m='1476200'>case.</span> <span m='1476910'>And</span> <span
  m='1477170'>in</span> <span m='1477250'>this</span> <span
  m='1477420'>case,</span> <span m='1478270'>you</span> <span
  m='1478440'>stay</span> <span m='1478670'>where</span> <span
  m='1478800'>you</span> <span m='1478960'>are</span> <span
  m='1479330'>and</span> <span m='1479460'>do</span> <span m='1479570'>a</span>
  <span m='1479620'>remote</span> <span m='1479910'>access.</span> <span
  m='1483480'>In</span> <span m='1483870'>the</span> <span
  m='1483970'>case</span> <span m='1484180'>of</span> <span
  m='1484250'>migration,</span> <span m='1485440'>you</span> <span
  m='1486250'>could</span> <span m='1487220'>end</span> <span
  m='1487620'>up</span> <span m='1489570'>choosing</span> <span
  m='1490920'>different</span> <span m='1492360'>initial</span> <span
  m='1493440'>starting</span> <span m='1493790'>points</span> <span
  m='1494150'>corresponding</span> <span m='1494650'>to</span> <span
  m='1494690'>the</span> <span m='1494780'>pi's.</span> <span
  m='1495660'>And</span> <span m='1495980'>you</span> <span
  m='1496130'>have</span> <span m='1496260'>to</span> <span
  m='1496370'>run</span> <span m='1496570'>through</span> <span
  m='1496740'>all</span> <span m='1496870'>of</span> <span
  m='1496980'>those.</span> </p><p><span m='1498880'>So</span> <span
  m='1499090'>what's</span> <span m='1499300'>the</span> <span
  m='1499420'>cost</span> <span m='1501010'>of</span> <span m='1503730'>a</span>
  <span m='1503850'>subproblem,</span> <span m='1504430'>or</span> <span
  m='1504560'>the</span> <span m='1504680'>running</span> <span
  m='1504930'>time</span> <span m='1505170'>of</span> <span
  m='1505930'>computing</span> <span m='1506880'>one</span> <span
  m='1507030'>of</span> <span m='1507100'>these</span> <span
  m='1507280'>things--</span> <span m='1508110'>it's</span> <span
  m='1508330'>order?</span> <span m='1510630'>Q.</span> <span
  m='1512610'>And</span> <span m='1512790'>so</span> <span
  m='1512890'>the</span> <span m='1513000'>total</span> <span
  m='1513280'>cost</span> <span m='1516420'>is</span> <span
  m='1518560'>NQ</span> <span m='1518820'>squared.</span> <span
  m='1522810'>It's</span> <span m='1523020'>a</span> <span
  m='1523100'>little</span> <span m='1524900'>review</span> <span
  m='1525430'>of</span> <span m='1525990'>DP.</span> <span
  m='1527270'>I'm</span> <span m='1527430'>going</span> <span
  m='1527550'>to</span> <span m='1528010'>stop</span> <span
  m='1528310'>here</span> <span m='1528630'>and</span> <span
  m='1529050'>let</span> <span m='1529220'>Erik</span> <span
  m='1529450'>take</span> <span m='1529650'>over.</span> </p><p><span
  m='1531080'>Just,</span> <span m='1531750'>in</span> <span
  m='1531890'>closing,</span> <span m='1533660'>while</span> <span
  m='1534050'>this</span> <span m='1534860'>makes</span> <span
  m='1535170'>some</span> <span m='1535350'>assumptions,</span> <span
  m='1536530'>It's</span> <span m='1536580'>actually</span> <span
  m='1536960'>fairly</span> <span m='1538620'>close</span> <span
  m='1538960'>to</span> <span m='1539060'>what</span> <span
  m='1539280'>we're</span> <span m='1539430'>building</span> <span
  m='1539710'>in</span> <span m='1539770'>hardware.</span> <span
  m='1540790'>This</span> <span m='1541110'>type</span> <span
  m='1541310'>of</span> <span m='1541400'>analysis</span> <span
  m='1542120'>is</span> <span m='1542270'>something</span> <span
  m='1542570'>that</span> <span m='1542680'>we</span> <span
  m='1542770'>have</span> <span m='1542930'>to</span> <span
  m='1543020'>do</span> <span m='1543210'>in</span> <span
  m='1543360'>hardware.</span> <span m='1544190'>My</span> <span
  m='1544330'>research</span> <span m='1544670'>group</span> <span
  m='1544850'>is</span> <span m='1544950'>building</span> <span
  m='1545190'>a</span> <span m='1545250'>128</span> <span
  m='1545800'>processor</span> <span m='1547490'>machine,</span> <span
  m='1548200'>that</span> <span m='1548280'>we</span> <span m='1548380'>call
  the</span> <span m='1548670'>Execution</span> <span
  m='1549160'>Migration</span> <span m='1549630'>Machine.</span> <span
  m='1550470'>And</span> <span m='1550970'>it</span> <span
  m='1551180'>does</span> <span m='1551400'>exactly</span> <span
  m='1551880'>what</span> <span m='1552040'>I've</span> <span
  m='1552140'>described</span> <span m='1552540'>to</span> <span
  m='1552610'>you,</span> <span m='1552960'>decide</span> <span
  m='1553390'>whether</span> <span m='1553640'>to</span> <span
  m='1553750'>do</span> <span m='1553860'>a</span> <span
  m='1553910'>remote</span> <span m='1554210'>access</span> <span
  m='1554690'>or</span> <span m='1554800'>to</span> <span m='1554910'>do</span>
  <span m='1555060'>a</span> <span m='1555120'>migration</span> <span
  m='1556240'>based</span> <span m='1556720'>on</span> <span
  m='1557090'>this</span> <span m='1557300'>kind</span> <span
  m='1557480'>of</span> <span m='1557560'>analysis.</span> <span
  m='1559650'>So</span> <span m='1561230'>hand it</span> <span m='1561480'>over
  to</span> <span m='1561630'>Erik.</span> </p><p><span m='1562670'>PROFESSOR
  ERIK DEMAINE: I have a</span> <span m='1563082'>microphone.</span>
  </p><p><span m='1564390'>PROFESSOR SRINI DEVADAS: All right.</span> <span
  m='1564570'>Good.</span> </p><p><span m='1569800'>PROFESSOR ERIK DEMAINE: So
  I  have</span> <span m='1570120'>a few</span> <span m='1570410'>things</span>
  <span m='1570720'>to</span> <span m='1571180'>tell</span> <span
  m='1571400'>you</span> <span m='1571790'>a</span> <span
  m='1571850'>little</span> <span m='1572060'>bit</span> <span
  m='1572210'>about.</span> <span m='1572590'>Srini</span> <span
  m='1572870'>talked</span> <span m='1573080'>about</span> <span
  m='1573280'>one</span> <span m='1573600'>topic</span> <span
  m='1573970'>in</span> <span m='1574060'>detail.</span> <span
  m='1574510'>I'm</span> <span m='1574520'>going</span> <span
  m='1574610'>to</span> <span m='1574700'>talk</span> <span
  m='1574920'>about</span> <span m='1575110'>many</span> <span
  m='1575330'>topics</span> <span m='1575780'>in</span> <span
  m='1576330'>less</span> <span m='1576610'>detail,</span> <span
  m='1577040'>as</span> <span m='1577180'>I</span> <span m='1577260'>said</span>
  <span m='1577740'>"shallowly."</span> <span m='1579660'>And</span> <span
  m='1580080'>these</span> <span m='1580690'>are</span> <span
  m='1580850'>my</span> <span m='1581160'>main</span> <span
  m='1581460'>areas</span> <span m='1581730'>of</span> <span
  m='1581820'>research.</span> <span m='1582370'>I</span> <span
  m='1582490'>do</span> <span m='1582960'>geometry,</span> <span
  m='1584110'>in</span> <span m='1584200'>particular,</span> <span
  m='1584580'>folding,</span> <span m='1585280'>and</span> <span
  m='1585710'>data</span> <span m='1585890'>structures,</span> <span
  m='1586770'>graphs,</span> <span m='1587810'>and</span> <span
  m='1588200'>recreational</span> <span m='1589000'>algorithms.</span> <span
  m='1589470'>That's</span> <span m='1589700'>the</span> <span
  m='1589760'>really</span> <span m='1589960'>fun</span> <span
  m='1590200'>stuff.</span> </p><p><span m='1592910'>A</span> <span
  m='1593010'>lot</span> <span m='1593220'>of</span> <span
  m='1593310'>these</span> <span m='1593520'>have</span> <span
  m='1593740'>corresponding</span> <span m='1594460'>courses</span> <span
  m='1595040'>if</span> <span m='1595150'>you're</span> <span
  m='1595280'>interested</span> <span m='1595770'>in</span> <span
  m='1595900'>more</span> <span m='1596190'>about</span> <span
  m='1596480'>this</span> <span m='1596640'>stuff.</span> <span
  m='1596980'>Computational</span> <span m='1597560'>geometry,</span> <span
  m='1598090'>in</span> <span m='1598240'>general,</span> <span
  m='1599220'>is--</span> <span m='1600342'>I'm</span> <span
  m='1600750'>not</span> <span m='1601020'>going</span> <span
  m='1601110'>to</span> <span m='1601180'>remember</span> <span
  m='1601430'>all</span> <span m='1601630'>numbers.</span> <span
  m='1603180'>840?</span> <span m='1604390'>50?</span> <span
  m='1606890'>50.</span> <span m='1609660'>6.850.</span> <span
  m='1611160'>That's</span> <span m='1611380'>a</span> <span
  m='1611440'>class</span> <span m='1611700'>I</span> <span
  m='1611750'>don't</span> <span m='1612010'>teach.</span> <span
  m='1613450'>Folding</span> <span m='1614090'>is</span> <span
  m='1614410'>6.849.</span> <span m='1617560'>Data</span> <span
  m='1617790'>Structures</span> <span m='1618670'>is</span> <span
  m='1619120'>6.851.</span> <span m='1621610'>And</span> <span
  m='1622830'>Graphs</span> <span m='1624610'>was</span> <span
  m='1624790'>being</span> <span m='1625000'>taught</span> <span
  m='1625300'>this</span> <span m='1625620'>semester,</span> <span
  m='1626070'>in</span> <span m='1626200'>parallel</span> <span
  m='1626600'>with</span> <span m='1626700'>this</span> <span
  m='1626840'>class.</span> <span m='1627350'>6.889.</span> <span
  m='1628770'>And</span> <span m='1629220'>recreational</span> <span
  m='1629700'>algorithms</span> <span m='1631142'>isn't</span> <span
  m='1631610'>fully</span> <span m='1631880'>covered</span> <span
  m='1632260'>but</span> <span m='1632460'>you</span> <span
  m='1632640'>could</span> <span m='1632770'>check</span> <span
  m='1633050'>out</span> <span m='1633250'>SP.268,</span> <span
  m='1635132'>which was</span> <span m='1635510'>offered</span> <span
  m='1635710'>last</span> <span m='1635960'>semester.</span> </p><p><span
  m='1637010'>And</span> <span m='1637240'>especially</span> <span
  m='1637650'>for</span> <span m='1637790'>those</span> <span
  m='1638170'>watching</span> <span m='1638580'>at</span> <span
  m='1638660'>home</span> <span m='1639030'>on</span> <span
  m='1639860'>MIT</span> <span m='1640270'>OpenCourseWare--</span> <span
  m='1641650'>this</span> <span m='1641980'>class, all</span> <span
  m='1642330'>the</span> <span m='1642530'>video</span> <span
  m='1642860'>lectures</span> <span m='1643200'>are</span> <span
  m='1643290'>online</span> <span m='1643660'>for</span> <span
  m='1643780'>free.</span> <span m='1645230'>6.851,</span> <span
  m='1645970'>we'll</span> <span m='1646090'>do</span> <span
  m='1646190'>that</span> <span m='1646370'>next</span> <span
  m='1646560'>semester.</span> <span m='1646940'>And</span> <span
  m='1646970'>6.889</span> <span m='1647750'>are</span> <span
  m='1647860'>all</span> <span m='1648080'>online,</span> <span
  m='1648570'>right</span> <span m='1648790'>now.</span> <span
  m='1650050'>And</span> <span m='1650350'>there's</span> <span
  m='1650490'>some</span> <span m='1650640'>lecture</span> <span
  m='1650900'>notes</span> <span m='1651150'>for</span> <span
  m='1651280'>SP.268</span> <span m='1652160'>on</span> <span
  m='1652370'>OpenCourseWare.</span> </p><p><span m='1654190'>There's</span>
  <span m='1654330'>a</span> <span m='1654370'>lot</span> <span
  m='1654550'>of</span> <span m='1654610'>material,</span> <span
  m='1655030'>here.</span> <span m='1655800'>And</span> <span
  m='1656240'>in</span> <span m='1656360'>particular,</span> <span
  m='1656900'>the</span> <span m='1657410'>obvious</span> <span
  m='1657710'>next</span> <span m='1657920'>class</span> <span
  m='1658180'>for</span> <span m='1658290'>you</span> <span
  m='1658410'>to</span> <span m='1658480'>be</span> <span
  m='1658600'>taking</span> <span m='1658930'>is</span> <span
  m='1659040'>6.046.</span> <span m='1660820'>But</span> <span
  m='1661050'>why</span> <span m='1661290'>should</span> <span
  m='1661480'>you</span> <span m='1661550'>be</span> <span
  m='1661670'>taking</span> <span m='1661970'>6.046?</span> <span
  m='1662740'>Because</span> <span m='1663020'>then</span> <span
  m='1663160'>you</span> <span m='1663250'>can</span> <span
  m='1663390'>take</span> <span m='1663550'>all</span> <span
  m='1663680'>these</span> <span m='1663860'>exciting</span> <span
  m='1664270'>classes</span> <span m='1664820'>and</span> <span
  m='1664940'>many</span> <span m='1665220'>others</span> <span
  m='1666000'>about</span> <span m='1666300'>algorithms.</span> <span
  m='1666770'>There's</span> <span m='1666900'>a</span> <span
  m='1666970'>complete</span> <span m='1667340'>list</span> <span
  m='1667630'>of</span> <span m='1667790'>follow-on</span> <span
  m='1668220'>classes</span> <span m='1668670'>in</span> <span
  m='1668820'>the</span> <span m='1668900'>lecture</span> <span
  m='1669200'>notes,</span> <span m='1670430'>which</span> <span
  m='1670670'>are</span> <span m='1670950'>online.</span> <span
  m='1671930'>And</span> <span m='1672320'>there's</span> <span
  m='1672730'>a</span> <span m='1672820'>ton</span> <span
  m='1673100'>of--</span> <span m='1673620'>there's</span> <span
  m='1673750'>so</span> <span m='1673960'>much</span> <span
  m='1674200'>research</span> <span m='1674590'>in algorithms.</span> <span
  m='1675020'>It's</span> <span m='1675180'>a</span> <span
  m='1675250'>really</span> <span m='1675480'>exciting</span> <span
  m='1675910'>area.</span> <span m='1676510'>This</span> <span
  m='1676690'>is</span> <span m='1676840'>just</span> <span m='1677160'>the
  beginning--</span> <span m='1677840'>just</span> <span m='1678110'>a</span>
  <span m='1678190'>taste.</span> <span m='1678990'>And</span> <span
  m='1679150'>I</span> <span m='1679190'>want</span> <span m='1679340'>to</span>
  <span m='1679390'>show</span> <span m='1679580'>you</span> <span
  m='1681160'>various</span> <span m='1681470'>exciting</span> <span
  m='1681840'>places</span> <span m='1682250'>it</span> <span
  m='1682350'>can</span> <span m='1682510'>go.</span> <span
  m='1688670'>Let's</span> <span m='1689010'>do</span> <span
  m='1689200'>some</span> <span m='1690370'>algorithms.</span> </p><p><span
  m='1710680'>So</span> <span m='1710970'>the</span> <span
  m='1711080'>first</span> <span m='1711400'>topic</span> <span m='1712872'>I'll
  tell</span> <span m='1713310'>you a</span> <span m='1713430'>little</span>
  <span m='1713660'>bit</span> <span m='1713790'>about--</span> <span
  m='1715080'>maybe</span> <span m='1715320'>the</span> <span
  m='1715420'>most</span> <span m='1715750'>fun--</span> <span
  m='1716510'>is</span> <span m='1716820'>geometric</span> <span
  m='1717430'>folding</span> <span m='1717800'>algorithms.</span> <span
  m='1721920'>That's</span> <span m='1722080'>the</span> <span
  m='1722190'>title</span> <span m='1722560'>of</span> <span
  m='1722660'>the</span> <span m='1723110'>textbook</span> <span
  m='1724260'>and</span> <span m='1724640'>the</span> <span
  m='1724720'>class</span> <span m='1725340'>6.849.</span> <span
  m='1725480'>And</span> <span m='1727350'>in</span> <span
  m='1727440'>general--</span> <span m='1728770'>well,</span> <span
  m='1728940'>there's</span> <span m='1729080'>a</span> <span
  m='1729130'>lot</span> <span m='1729300'>of</span> <span
  m='1729350'>different</span> <span m='1729600'>kinds</span> <span
  m='1729830'>of</span> <span m='1729920'>folding,</span> <span
  m='1730350'>in</span> <span m='1730440'>the</span> <span
  m='1730520'>world,</span> <span m='1730940'>but</span> <span
  m='1731330'>maybe</span> <span m='1731580'>the</span> <span
  m='1731680'>most</span> <span m='1732050'>accessible</span> <span
  m='1732590'>and</span> <span m='1732690'>fun</span> <span
  m='1732980'>is</span> <span m='1733270'>origami.</span> <span
  m='1734290'>So</span> <span m='1734450'>you</span> <span
  m='1734590'>have,</span> <span m='1735500'>on</span> <span
  m='1735660'>the</span> <span m='1735740'>one</span> <span
  m='1735910'>hand,</span> <span m='1736420'>a</span> <span
  m='1736480'>piece</span> <span m='1736720'>of</span> <span
  m='1736790'>paper.</span> <span m='1737870'>And</span> <span
  m='1738050'>you'd</span> <span m='1738230'>like</span> <span
  m='1738480'>to</span> <span m='1738590'>turn</span> <span
  m='1738880'>it</span> <span m='1738970'>into</span> <span
  m='1739260'>some</span> <span m='1740000'>crazy,</span> <span
  m='1740410'>three</span> <span m='1740590'>dimensional</span> <span
  m='1741010'>shape,</span> <span m='1741910'>which</span> <span
  m='1742010'>I'm</span> <span m='1742090'>not</span> <span
  m='1742250'>going</span> <span m='1742340'>to</span> <span
  m='1742410'>try</span> <span m='1742590'>to</span> <span
  m='1742680'>draw</span> <span m='1742910'>here.</span> <span
  m='1743950'>You</span> <span m='1744110'>want</span> <span
  m='1744250'>to</span> <span m='1744290'>fold</span> <span m='1744640'>a</span>
  <span m='1744700'>giraffe</span> <span m='1745480'>or</span> <span
  m='1745750'>you</span> <span m='1745900'>want</span> <span
  m='1746110'>to</span> <span m='1746160'>make</span> <span
  m='1746390'>some</span> <span m='1746600'>geometric</span> <span
  m='1747060'>sculpture.</span> <span m='1748230'>How</span> <span
  m='1748430'>do</span> <span m='1748500'>you</span> <span m='1748610'>do</span>
  <span m='1748730'>this?</span> </p><p><span m='1749380'>So,</span> <span
  m='1749540'>usually,</span> <span m='1750420'>you</span> <span
  m='1750530'>put</span> <span m='1750730'>some</span> <span
  m='1750920'>creases</span> <span m='1751460'>into</span> <span
  m='1751710'>the</span> <span m='1752210'>piece</span> <span
  m='1752380'>of</span> <span m='1752480'>paper</span> <span
  m='1753170'>in</span> <span m='1753540'>some</span> <span
  m='1753870'>reasonable</span> <span m='1754370'>way.</span> <span
  m='1757330'>And</span> <span m='1757650'>one</span> <span
  m='1757950'>of</span> <span m='1758020'>the</span> <span
  m='1758100'>questions</span> <span m='1758410'>is</span> <span
  m='1758740'>what</span> <span m='1758960'>are</span> <span
  m='1759000'>the</span> <span m='1759130'>rules</span> <span
  m='1759460'>for</span> <span m='1759590'>putting</span> <span
  m='1759880'>creases</span> <span m='1760270'>into</span> <span
  m='1761070'>a</span> <span m='1761170'>piece</span> <span
  m='1761390'>of</span> <span m='1761460'>paper?</span> <span
  m='1761790'>When</span> <span m='1761930'>is</span> <span
  m='1762020'>that</span> <span m='1762190'>possible?</span> <span
  m='1763090'>And</span> <span m='1763260'>then</span> <span
  m='1763380'>you'd</span> <span m='1763520'>like</span> <span
  m='1763740'>to</span> <span m='1764800'>fold</span> <span
  m='1765110'>it</span> <span m='1765170'>into</span> <span
  m='1765530'>that</span> <span m='1766010'>shape.</span> </p><p><span
  m='1766690'>So</span> <span m='1766790'>there</span> <span
  m='1766890'>are</span> <span m='1766900'>really</span> <span
  m='1767160'>two</span> <span m='1767360'>big</span> <span
  m='1767550'>problems</span> <span m='1767980'>here.</span> <span
  m='1768580'>One</span> <span m='1768840'>is</span> <span m='1771140'>I</span>
  <span m='1771270'>guess</span> <span m='1771600'>you could</span> <span
  m='1771960'>call</span> <span m='1772160'>it</span> <span
  m='1772280'>foldability.</span> <span m='1775550'>And</span> <span
  m='1776040'>this</span> <span m='1776290'>is</span> <span
  m='1776400'>what</span> <span m='1776570'>you</span> <span
  m='1776670'>do</span> <span m='1776810'>if</span> <span m='1776920'>you</span>
  <span m='1777110'>practice</span> <span m='1777650'>origami</span> <span
  m='1778100'>in</span> <span m='1778190'>the</span> <span
  m='1778290'>typical</span> <span m='1778700'>way.</span> <span
  m='1779700'>You</span> <span m='1780080'>get</span> <span
  m='1780130'>origami</span> <span m='1780500'>diagrams,</span> <span
  m='1781180'>and</span> <span m='1781250'>they</span> <span
  m='1781340'>say,</span> <span m='1781520'>"fold</span> <span
  m='1781850'>this."</span> <span m='1782180'>And you're</span> <span
  m='1782510'>like,</span> <span m='1782620'>oh,</span> <span
  m='1783075'>gosh.</span> <span m='1783530'>Takes</span> <span
  m='1783770'>you</span> <span m='1783920'>hours to</span> <span
  m='1784350'>figure</span> <span m='1784580'>out</span> <span
  m='1784650'>how</span> <span m='1784730'>to</span> <span
  m='1784820'>fold</span> <span m='1785080'>something.</span> <span
  m='1785380'>Especially,</span> <span m='1785750'>if</span> <span
  m='1785790'>they</span> <span m='1785910'>just</span> <span
  m='1786100'>gave</span> <span m='1786300'>you a</span> <span
  m='1786410'>crease</span> <span m='1786680'>pattern.</span> <span
  m='1788360'>Can</span> <span m='1788500'>you</span> <span
  m='1788590'>even</span> <span m='1788830'>tell</span> <span
  m='1789120'>does</span> <span m='1789300'>it</span> <span
  m='1789380'>fold</span> <span m='1789600'>into</span> <span
  m='1789720'>anything,</span> <span m='1790290'>first</span> <span
  m='1790530'>of</span> <span m='1790600'>all.</span> <span
  m='1790760'>And</span> <span m='1790850'>then,</span> <span
  m='1791020'>if</span> <span m='1791110'>so,</span> <span
  m='1791320'>how</span> <span m='1791600'>do</span> <span m='1791720'>I</span>
  <span m='1791800'>do</span> <span m='1792030'>it?</span> </p><p><span
  m='1793180'>That</span> <span m='1793410'>problem--</span> <span
  m='1794920'>folding</span> <span m='1795270'>increase</span> <span
  m='1795600'>pattern</span> <span m='1804130'>and</span> <span
  m='1804340'>understanding</span> <span m='1805440'>what</span> <span
  m='1805830'>crease</span> <span m='1806050'>patterns</span> <span
  m='1806360'>are</span> <span m='1806430'>valid--</span> <span
  m='1807540'>unfortunately,</span> <span m='1808320'>is</span> <span
  m='1808530'>NP-complete.</span> <span m='1810130'>So</span> <span
  m='1810450'>there's</span> <span m='1810700'>no</span> <span
  m='1810830'>good</span> <span m='1811020'>way</span> <span
  m='1811170'>to</span> <span m='1811350'>really</span> <span
  m='1811790'>understand</span> <span m='1812220'>that.</span> <span
  m='1813260'>So origami</span> <span m='1813790'>is</span> <span
  m='1814320'>hard.</span> <span m='1816660'>In</span> <span
  m='1816760'>some</span> <span m='1816800'>sense,</span> <span
  m='1817130'>the</span> <span m='1817230'>more</span> <span
  m='1817320'>interesting</span> <span m='1817730'>direction,</span> <span
  m='1818130'>though, is</span> <span m='1818370'>the</span> <span
  m='1818460'>reverse</span> <span m='1818810'>direction,</span> <span
  m='1819780'>which</span> <span m='1820090'>I</span> <span
  m='1820210'>would</span> <span m='1820330'>call</span> <span
  m='1820540'>origami</span> <span m='1820970'>design.</span> </p><p><span
  m='1822360'>I</span> <span m='1822500'>have</span> <span m='1822800'>an</span>
  <span m='1823090'>intended</span> <span m='1823700'>3D</span> <span
  m='1824450'>shape</span> <span m='1824760'>I</span> <span
  m='1824840'>want</span> <span m='1825160'>to</span> <span
  m='1825450'>design.</span> <span m='1826300'>How</span> <span
  m='1826520'>can</span> <span m='1826670'>I</span> <span
  m='1827370'>come</span> <span m='1827640'>up</span> <span
  m='1827880'>with--</span> <span m='1828150'>how</span> <span
  m='1828300'>can</span> <span m='1828450'>I,</span> <span m='1829220'>as</span>
  <span m='1829370'>an</span> <span m='1829450'>algorithm,</span> <span
  m='1829960'>convert</span> <span m='1830410'>that</span> <span
  m='1830600'>3D</span> <span m='1830840'>shape</span> <span
  m='1831180'>into</span> <span m='1831940'>a crease</span> <span
  m='1832270'>pattern</span> <span m='1832580'>that</span> <span
  m='1832700'>does</span> <span m='1832990'>fold,</span> <span
  m='1833320'>that's</span> <span m='1833470'>guaranteed</span> <span
  m='1833980'>to</span> <span m='1834040'>fold</span> <span
  m='1834360'>into</span> <span m='1834550'>that</span> <span
  m='1835100'>3D</span> <span m='1835430'>shape.</span> <span
  m='1836260'>And</span> <span m='1836460'>that's</span> <span
  m='1836730'>actually</span> <span m='1837180'>solvable.</span> <span
  m='1838790'>So</span> <span m='1838910'>design is</span> <span
  m='1839400'>easier.</span> </p><p><span m='1842610'>And</span> <span
  m='1842790'>there's</span> <span m='1842920'>all</span> <span
  m='1843050'>sorts</span> <span m='1843290'>of</span> <span
  m='1843370'>different</span> <span m='1843740'>versions</span> <span
  m='1844170'>of</span> <span m='1844280'>the</span> <span
  m='1844360'>design</span> <span m='1844760'>problem.</span> <span
  m='1846300'>Some</span> <span m='1846640'>of</span> <span
  m='1846710'>them,</span> <span m='1846870'>you</span> <span
  m='1846980'>could</span> <span m='1847130'>solve in</span> <span
  m='1847410'>polynomial</span> <span m='1847910'>time.</span> <span
  m='1848540'>Some</span> <span m='1848780'>of</span> <span
  m='1848870'>them,</span> <span m='1849020'>you</span> <span
  m='1849150'>can't.</span> <span m='1849570'>If you</span> <span
  m='1849720'>really</span> <span m='1849890'>want</span> <span
  m='1850380'>optimal</span> <span m='1850890'>design,</span> <span
  m='1851280'>that</span> <span m='1851460'>can</span> <span
  m='1851570'>be</span> <span m='1851710'>NP-complete</span> <span
  m='1852270'>again.</span> <span m='1853040'>But</span> <span
  m='1853190'>in</span> <span m='1853280'>particular,</span> <span
  m='1855080'>there's</span> <span m='1855370'>a</span> <span
  m='1855440'>way</span> <span m='1855770'>to</span> <span
  m='1855940'>fold</span> <span m='1857640'>any</span> <span
  m='1857980'>3D</span> <span m='1858300'>shape</span> <span
  m='1858580'>you</span> <span m='1858680'>want.</span> </p><p><span
  m='1859390'>So</span> <span m='1859700'>there's</span> <span
  m='1859990'>an</span> <span m='1860080'>algorithm--</span> <span
  m='1860800'>the</span> <span m='1860930'>coolest</span> <span
  m='1861260'>one,</span> <span m='1861360'>right</span> <span
  m='1861530'>now,</span> <span m='1861660'>is</span> <span
  m='1861740'>called</span> <span m='1861910'>Origamizer.</span> <span
  m='1863010'>It's</span> <span m='1863490'>free</span> <span
  m='1863660'>software</span> <span m='1864060'>online,</span> <span
  m='1864970'>by</span> <span m='1865190'>Tomohiro</span> <span
  m='1865670'>Tachi.</span> <span m='1866420'>And</span> <span
  m='1866570'>you</span> <span m='1866680'>give</span> <span
  m='1866910'>it</span> <span m='1867310'>a</span> <span m='1867410'>3D</span>
  <span m='1867770'>model</span> <span m='1868160'>of</span> <span
  m='1868240'>a</span> <span m='1868340'>polyhedron.</span> <span
  m='1869940'>And</span> <span m='1870780'>it</span> <span
  m='1871300'>outputs</span> <span m='1872040'>a</span> <span
  m='1872170'>giant</span> <span m='1872520'>crease</span> <span
  m='1872740'>pattern</span> <span m='1873070'>on</span> <span
  m='1873160'>a</span> <span m='1873210'>square</span> <span
  m='1873470'>piece</span> <span m='1873680'>of</span> <span
  m='1873750'>paper</span> <span m='1874160'>that</span> <span
  m='1874320'>folds</span> <span m='1874690'>into</span> <span
  m='1874910'>that</span> <span m='1875530'>3D</span> <span
  m='1875840'>polyhedron. And</span> <span m='1876340'>it's</span> <span
  m='1876530'>reasonably</span> <span m='1876980'>practical.</span> <span
  m='1878710'>And</span> <span m='1878840'>he's</span> <span
  m='1879160'>folded</span> <span m='1879260'>tons</span> <span
  m='1879520'>of</span> <span m='1879590'>models</span> <span
  m='1880210'>in</span> <span m='1880640'>that</span> <span
  m='1880940'>way.</span> <span m='1883810'>Let's</span> <span
  m='1884100'>see.</span> </p><p><span m='1887022'>I'll show</span> <span
  m='1887510'>you</span> <span m='1887590'>some</span> <span
  m='1887780'>other</span> <span m='1887960'>things.</span> <span
  m='1888980'>Here's</span> <span m='1889260'>a</span> <span
  m='1889350'>simple</span> <span m='1889670'>example</span> <span
  m='1890080'>of</span> <span m='1890200'>a</span> <span
  m='1890250'>geometric</span> <span m='1891860'>origami</span> <span
  m='1892350'>model.</span> <span m='1892940'>So</span> <span
  m='1893070'>this</span> <span m='1893260'>is</span> <span
  m='1893360'>folded</span> <span m='1893620'>from</span> <span
  m='1893820'>a</span> <span m='1893880'>square</span> <span
  m='1894230'>paper</span> <span m='1895220'>with</span> <span
  m='1896340'>concentric</span> <span m='1896860'>squares</span> <span
  m='1897420'>as</span> <span m='1897600'>creases.</span> <span
  m='1898610'>Alternating</span> <span m='1899140'>mountain</span> <span
  m='1899410'>and</span> <span m='1899520'>valley.</span> <span
  m='1900670'>So</span> <span m='1900810'>you</span> <span
  m='1901010'>see</span> <span m='1901170'>mountain</span> <span
  m='1901460'>valley, mountain</span> <span m='1901930'>valley.</span> <span
  m='1902190'>Also</span> <span m='1902440'>fold</span> <span
  m='1902670'>the</span> <span m='1902760'>diagonals.</span> <span
  m='1903470'>It's</span> <span m='1903760'>very</span> <span
  m='1903980'>easy</span> <span m='1904160'>to</span> <span
  m='1904250'>make.</span> <span m='1905090'>And</span> <span
  m='1905290'>what's</span> <span m='1905500'>funny--</span> <span
  m='1905960'>what's</span> <span m='1906190'>cool</span> <span
  m='1906400'>about</span> <span m='1906720'>it</span> <span
  m='1906860'>is</span> <span m='1907050'>that</span> <span
  m='1907160'>when</span> <span m='1907310'>you</span> <span
  m='1907420'>put</span> <span m='1907580'>all</span> <span
  m='1907710'>those</span> <span m='1907860'>creases</span> <span
  m='1908210'>in,</span> <span m='1908850'>it</span> <span
  m='1909040'>pops</span> <span m='1909370'>into</span> <span
  m='1909610'>this</span> <span m='1910150'>3D</span> <span
  m='1910990'>shape,</span> <span m='1911340'>which</span> <span
  m='1911540'>for</span> <span m='1911670'>many</span> <span
  m='1911910'>years</span> <span m='1912140'>people</span> <span
  m='1912410'>conjectured</span> <span m='1912910'>was</span> <span
  m='1913070'>a</span> <span m='1913140'>hyperbolic</span> <span
  m='1913720'>parabola.</span> </p><p><span m='1914220'>This</span> <span
  m='1914400'>design</span> <span m='1914800'>is</span> <span
  m='1914930'>one</span> <span m='1915060'>of</span> <span
  m='1915130'>the</span> <span m='1915200'>earliest</span> <span
  m='1915680'>geometric</span> <span m='1916040'>origami</span> <span
  m='1916420'>designs.</span> <span m='1916780'>It</span> <span
  m='1917050'>goes</span> <span m='1917230'>back</span> <span
  m='1917400'>to</span> <span m='1917550'>late</span> <span
  m='1917790'>'20s</span> <span m='1918340'>in</span> <span
  m='1918670'>the</span> <span m='1918770'>Bauhaus</span> <span
  m='1920660'>School</span> <span m='1920950'>of</span> <span
  m='1921040'>Design.</span> <span m='1921920'>And</span> <span
  m='1922110'>it's</span> <span m='1922480'>very</span> <span
  m='1922680'>cool.</span> <span m='1923240'>People</span> <span
  m='1923570'>fold</span> <span m='1923820'>them</span> <span
  m='1924290'>a</span> <span m='1924340'>lot.</span> <span
  m='1924890'>I've</span> <span m='1925650'>personally</span> <span
  m='1926130'>folded</span> <span m='1927230'>thousands</span> <span
  m='1927660'>of</span> <span m='1927760'>them</span> <span
  m='1929600'>for</span> <span m='1929880'>sculpture</span> <span
  m='1930350'>and</span> <span m='1930490'>things.</span> <span
  m='1930740'>We</span> <span m='1930940'>also</span> <span
  m='1931180'>do</span> <span m='1931290'>a</span> <span m='1931320'>lot</span>
  <span m='1931460'>of</span> <span m='1931540'>algorithmic</span> <span
  m='1932030'>sculpture,</span> <span m='1933080'>which</span> <span
  m='1933400'>I won't</span> <span m='1933580'>talk</span> <span
  m='1933800'>about</span> <span m='1934480'>in</span> <span
  m='1934560'>detail</span> <span m='1934880'>here.</span> </p><p><span
  m='1935590'>But</span> <span m='1936200'>we</span> <span
  m='1936410'>discovered,</span> <span m='1937130'>two</span> <span
  m='1937280'>years</span> <span m='1937580'>ago,</span> <span
  m='1938300'>that</span> <span m='1938460'>this</span> <span
  m='1938670'>does</span> <span m='1938830'>not</span> <span
  m='1939020'>exist.</span> <span m='1940770'>It</span> <span
  m='1940790'>is</span> <span m='1940910'>impossible</span> <span
  m='1941760'>to</span> <span m='1941840'>fold</span> <span m='1942210'>a</span>
  <span m='1942470'>square</span> <span m='1942780'>piece</span> <span
  m='1942990'>of</span> <span m='1943060'>paper</span> <span
  m='1943320'>with</span> <span m='1943470'>this</span> <span
  m='1943620'>crease</span> <span m='1943850'>pattern.</span> <span
  m='1945520'>That</span> <span m='1945640'>was</span> <span
  m='1945760'>a</span> <span m='1945810'>bit</span> <span m='1945950'>of</span>
  <span m='1946030'>a</span> <span m='1946090'>surprise.</span> <span
  m='1947160'>And</span> <span m='1947550'>it's</span> <span
  m='1947790'>kind</span> <span m='1947930'>of</span> <span
  m='1948000'>fun</span> <span m='1948190'>to</span> <span
  m='1948250'>make</span> <span m='1948440'>things</span> <span
  m='1948630'>that</span> <span m='1948690'>don't</span> <span
  m='1948880'>exist.</span> </p><p><span m='1949650'>AUDIENCE: So what is</span>
  <span m='1949995'>that?</span> </p><p><span m='1950340'>PROFESSOR ERIK
  DEMAINE: So</span> <span m='1950430'>what</span> <span m='1950610'>is</span>
  <span m='1950800'>this?</span> <span m='1953490'>Well,</span> <span
  m='1954780'>somehow,</span> <span m='1956380'>physical</span> <span
  m='1956760'>world</span> <span m='1957020'>is</span> <span
  m='1957570'>differing</span> <span m='1958050'>from</span> <span
  m='1958180'>the</span> <span m='1958290'>real</span> <span
  m='1958510'>world.</span> <span m='1959090'>Now,</span> <span
  m='1959320'>some</span> <span m='1959580'>ways</span> <span
  m='1959780'>it</span> <span m='1959870'>might</span> <span
  m='1960060'>be</span> <span m='1960160'>differing</span> <span
  m='1962550'>are</span> <span m='1962750'>that</span> <span
  m='1963290'>these</span> <span m='1964570'>creases</span> <span
  m='1964990'>might</span> <span m='1965240'>not</span> <span
  m='1965470'>be</span> <span m='1965750'>creases</span> <span
  m='1966270'>in</span> <span m='1966340'>the</span> <span
  m='1966440'>technical</span> <span m='1966900'>sense.</span> <span
  m='1967140'>A</span> <span m='1967210'>crease</span> <span
  m='1967490'>is</span> <span m='1967620'>a</span> <span
  m='1967690'>place</span> <span m='1967950'>that</span> <span
  m='1968070'>should</span> <span m='1968220'>be</span> <span
  m='1968340'>non-differentiable.</span> <span m='1969210'>So</span> <span
  m='1969370'>maybe they're</span> <span m='1969770'>kind</span> <span
  m='1969940'>of</span> <span m='1970020'>rounding it</span> <span
  m='1970450'>out.</span> <span m='1971120'>And</span> <span
  m='1971290'>then,</span> <span m='1971680'>who</span> <span
  m='1971800'>knows</span> <span m='1972220'>what's</span> <span
  m='1972450'>happening.</span> <span m='1972910'>Then,</span> <span
  m='1973150'>kind</span> <span m='1973290'>of</span> <span
  m='1973380'>all</span> <span m='1973500'>bets</span> <span
  m='1973730'>are</span> <span m='1973850'>off.</span> </p><p><span
  m='1974570'>Another</span> <span m='1974880'>possibility of</span> <span
  m='1975370'>what</span> <span m='1975520'>I</span> <span
  m='1975600'>think</span> <span m='1975810'>is</span> <span
  m='1975920'>happening</span> <span m='1976300'>is</span> <span
  m='1976410'>that</span> <span m='1976520'>their are</span> <span
  m='1976740'>extra</span> <span m='1977050'>creases,</span> <span
  m='1977460'>in</span> <span m='1977540'>here,</span> <span
  m='1977670'>that</span> <span m='1977820'>you</span> <span
  m='1977930'>don't</span> <span m='1978170'>see.</span> <span
  m='1978890'>They're</span> <span m='1979020'>very</span> <span
  m='1979210'>small.</span> <span m='1979650'>If</span> <span
  m='1979790'>you</span> <span m='1979910'>look,</span> <span
  m='1980110'>especially</span> <span m='1981750'>the</span> <span
  m='1981860'>raw</span> <span m='1982090'>edge,</span> <span
  m='1982320'>here,</span> <span m='1982940'>and</span> <span
  m='1983100'>that</span> <span m='1983470'>profile.</span> <span
  m='1984420'>It's</span> <span m='1984550'>a</span> <span
  m='1984600'>little</span> <span m='1984800'>bit</span> <span
  m='1984980'>wavy.</span> <span m='1985580'>And</span> <span
  m='1985780'>it's</span> <span m='1986020'>conceivable</span> <span
  m='1986770'>there's</span> <span m='1986980'>some</span> <span
  m='1987320'>points</span> <span m='1987590'>here</span> <span
  m='1987700'>that</span> <span m='1987880'>look</span> <span
  m='1988090'>non-differentiable</span> <span m='1988840'>to</span> <span
  m='1988910'>me.</span> <span m='1989680'>And</span> <span m='1989870'>I</span>
  <span m='1989960'>always</span> <span m='1990170'>thought</span> <span
  m='1990790'>I</span> <span m='1990830'>wasn't</span> <span
  m='1991000'>folding</span> <span m='1991430'>it</span> <span
  m='1991510'>well</span> <span m='1991740'>enough.</span> </p><p><span
  m='1992120'>But</span> <span m='1992240'>in</span> <span
  m='1992330'>fact,</span> <span m='1992720'>something</span> <span
  m='1993040'>like</span> <span m='1993200'>that</span> <span
  m='1993350'>has</span> <span m='1993630'>to</span> <span
  m='1993720'>happen.</span> <span m='1995180'>And</span> <span
  m='1995870'>my</span> <span m='1996040'>conjecture</span> <span
  m='1996305'>is,</span> <span m='1996570'>if</span> <span
  m='1996680'>you</span> <span m='1996790'>look</span> <span
  m='1996970'>at</span> <span m='1997050'>this</span> <span m='1997470'>under
  a</span> <span m='1997660'>microscope,</span> <span m='1998120'>which</span>
  <span m='1998250'>we</span> <span m='1998340'>haven't</span> <span
  m='1998560'>done</span> <span m='1998740'>yet,</span> <span m='1999340'>there
  are</span> <span m='1999480'>little</span> <span m='1999700'>creases</span>
  <span m='2000260'>that</span> <span m='2000400'>are</span> <span
  m='2000830'>so</span> <span m='2001020'>shallow</span> <span
  m='2001450'>they're</span> <span m='2001580'>hard</span> <span
  m='2001830'>to</span> <span m='2001920'>see,</span> <span
  m='2002880'>but</span> <span m='2003180'>are</span> <span
  m='2003320'>there.</span> <span m='2003900'>And the</span> <span
  m='2004170'>theorem</span> <span m='2004410'>says</span> <span
  m='2005040'>some</span> <span m='2005410'>creases</span> <span
  m='2005850'>have</span> <span m='2006050'>to</span> <span
  m='2006150'>be</span> <span m='2006280'>there.</span> <span
  m='2006830'>It</span> <span m='2006930'>is</span> <span m='2007070'>possible
  to</span> <span m='2007460'>fold</span> <span m='2007640'>this</span> <span
  m='2007790'>with</span> <span m='2007950'>extra</span> <span
  m='2008200'>creases,</span> <span m='2008620'>but</span> <span
  m='2008780'>not</span> <span m='2009110'>with</span> <span
  m='2009660'>these.</span> <span m='2011740'>So</span> <span
  m='2012100'>get</span> <span m='2012545'>rid of that.</span> </p><p><span
  m='2014770'>On</span> <span m='2014930'>the</span> <span
  m='2015050'>other</span> <span m='2015240'>hand,</span> <span
  m='2015540'>if</span> <span m='2015640'>you</span> <span m='2015660'>do</span>
  <span m='2015770'>the</span> <span m='2015880'>same</span> <span
  m='2016180'>thing</span> <span m='2016390'>with</span> <span
  m='2016560'>concentric</span> <span m='2017130'>circular</span> <span
  m='2017660'>creases--</span> <span m='2018080'>this</span> <span
  m='2018270'>a</span> <span m='2018320'>little</span> <span
  m='2018500'>harder</span> <span m='2018770'>to</span> <span
  m='2018850'>unfold.</span> <span m='2019400'>It</span> <span
  m='2019490'>really</span> <span m='2019710'>wants</span> <span
  m='2019950'>to</span> <span m='2020040'>be</span> <span m='2020280'>in</span>
  <span m='2020410'>this</span> <span m='2020950'>kind</span> <span
  m='2021170'>of</span> <span m='2021470'>Pringles</span> <span
  m='2021790'>shape.</span> <span m='2023150'>This</span> <span
  m='2023760'>also</span> <span m='2023970'>is</span> <span
  m='2024330'>from</span> <span m='2024500'>about</span> <span
  m='2024740'>Bauhaus.</span> <span m='2025960'>It's</span> <span
  m='2026120'>a</span> <span m='2026160'>little</span> <span m='2026300'>harder
  to</span> <span m='2026540'>fold</span> <span m='2026770'>concentric</span>
  <span m='2027230'>circles.</span> <span m='2027690'>But</span> <span
  m='2027920'>this,</span> <span m='2028120'>we</span> <span
  m='2028280'>think,</span> <span m='2028520'>does</span> <span
  m='2028740'>exist.</span> <span m='2030700'>Can't</span> <span
  m='2030950'>prove</span> <span m='2031120'>it</span> <span
  m='2031220'>yet.</span> <span m='2032820'>So</span> <span
  m='2033000'>we've</span> <span m='2033120'>done</span> <span
  m='2033260'>a</span> <span m='2033330'>lot</span> <span m='2033480'>of</span>
  <span m='2033540'>sculpture</span> <span m='2033940'>based</span> <span
  m='2034260'>on</span> <span m='2035080'>these</span> <span
  m='2035240'>guys.</span> <span m='2036930'>What</span> <span m='2037050'>else
  do</span> <span m='2037310'>I</span> <span m='2037370'>want</span> <span
  m='2037520'>to</span> <span m='2037600'>say?</span> </p><p></p><p><span
  m='2040080'>Another</span> <span m='2040280'>demo.</span> <span
  m='2041310'>So</span> <span m='2041430'>here's</span> <span
  m='2041670'>a</span> <span m='2041730'>fun</span> <span
  m='2042060'>problem.</span> <span m='2042480'>This</span> <span
  m='2042650'>is</span> <span m='2042790'>a</span> <span
  m='2042850'>magic</span> <span m='2043180'>trick.</span> <span
  m='2043460'>Goes</span> <span m='2043630'>back</span> <span
  m='2043830'>to</span> <span m='2043920'>Houdini</span> <span
  m='2044630'>and</span> <span m='2045720'>others.</span> <span
  m='2046980'>So</span> <span m='2047310'>imagine</span> <span
  m='2047720'>I</span> <span m='2047800'>take</span> <span m='2048090'>a</span>
  <span m='2048179'>rectangle</span> <span m='2048474'>of</span> <span
  m='2048770'>paper</span> <span m='2049540'>and</span> <span
  m='2049690'>then</span> <span m='2049840'>I</span> <span
  m='2049929'>fold</span> <span m='2050420'>it</span> <span
  m='2051560'>flat</span> <span m='2053010'>and</span> <span
  m='2053199'>take</span> <span m='2053429'>my</span> <span
  m='2053530'>scissors--</span> <span m='2054250'>not</span> <span
  m='2054719'>strict</span> <span m='2055030'>origami,</span> <span
  m='2055489'>here--</span> <span m='2056150'>and I</span> <span
  m='2056409'>make</span> <span m='2056580'>one</span> <span
  m='2056900'>complete</span> <span m='2057360'>straight</span> <span
  m='2057719'>cut.</span> <span m='2061940'>In</span> <span
  m='2062159'>this</span> <span m='2062310'>case,</span> <span
  m='2062719'>I</span> <span m='2062770'>get</span> <span m='2063030'>two</span>
  <span m='2063179'>pieces.</span> <span m='2064310'>And I</span> <span
  m='2064690'>unfold</span> <span m='2065070'>the</span> <span
  m='2065150'>pieces.</span> <span m='2065560'>And</span> <span
  m='2065610'>the</span> <span m='2065690'>question</span> <span
  m='2066010'>is</span> <span m='2066090'>what</span> <span
  m='2066350'>shapes</span> <span m='2066730'>can</span> <span
  m='2066889'>I</span> <span m='2066940'>get</span> <span m='2067139'>out</span>
  <span m='2067300'>of</span> <span m='2067389'>those</span> <span
  m='2067610'>pieces?</span> </p><p><span m='2068630'>In</span> <span
  m='2068719'>this</span> <span m='2068880'>case,</span> <span
  m='2069260'>I</span> <span m='2069360'>get</span> <span m='2069530'>a
  swan.</span> <span m='2071409'>You're</span> <span m='2071560'>not</span>
  <span m='2071710'>impressed</span> <span m='2072110'>so</span> <span
  m='2072320'>I'll</span> <span m='2072449'>another</span> <span
  m='2072679'>one.</span> <span m='2075199'>Make</span> <span
  m='2075440'>one</span> <span m='2075690'>straight</span> <span
  m='2076020'>cut.</span> <span m='2076949'>These</span> <span
  m='2077199'>are</span> <span m='2077310'>on</span> <span m='2077429'>my</span>
  <span m='2077570'>web</span> <span m='2077739'>page if</span> <span
  m='2078090'>you</span> <span m='2078230'>want</span> <span
  m='2078380'>to</span> <span m='2078480'>impress all</span> <span
  m='2078929'>your</span> <span m='2079020'>friends.</span> <span
  m='2082820'>You</span> <span m='2083000'>could</span> <span
  m='2083130'>take</span> <span m='2083300'>the</span> <span
  m='2083380'>class</span> <span m='2083810'>if you</span> <span
  m='2083949'>want</span> <span m='2084150'>to know</span> <span m='2084219'>how
  it's</span> <span m='2084520'>done.</span> </p><p><span m='2087780'>This
  example</span> <span m='2088150'>has a</span> <span m='2088380'>lot of</span>
  <span m='2088610'>symmetry.</span> <span m='2089100'>You</span> <span
  m='2089310'>get a little</span> <span m='2089659'>angelfish.</span> <span
  m='2092008'>I</span> <span m='2092449'>only have</span> <span
  m='2092719'>one</span> <span m='2092900'>more</span> <span
  m='2093030'>example.</span> <span m='2093420'>I</span> <span
  m='2093480'>hope</span> <span m='2093650'>you'll</span> <span
  m='2094010'>be</span> <span m='2094130'>impressed.</span> <span
  m='2095030'>This</span> <span m='2095320'>is</span> <span
  m='2095920'>very</span> <span m='2096150'>hard</span> <span
  m='2096340'>to</span> <span m='2096400'>fold.</span> <span
  m='2098600'>It</span> <span m='2098650'>was</span> <span m='2098870'>an</span>
  <span m='2099010'>MIT</span> <span m='2099275'>spotlight</span> <span
  m='2099920'>picture,</span> <span m='2100250'>at</span> <span
  m='2100370'>some</span> <span m='2100510'>point.</span> <span
  m='2102390'>And</span> <span m='2102590'>it's</span> <span
  m='2102770'>even</span> <span m='2102990'>harder</span> <span
  m='2103240'>to</span> <span m='2103330'>cut.</span> <span
  m='2106350'>Straight</span> <span m='2106780'>cut.</span> <span
  m='2114290'>This</span> <span m='2114420'>should</span> <span
  m='2114740'>be</span> <span m='2115800'>the</span> <span
  m='2116710'>MIT</span> <span m='2117250'>logo.</span> </p><p><span
  m='2119876'>[APPLAUSE]</span> </p><p></p><p><span m='2125200'>So</span> <span
  m='2125410'>the</span> <span m='2125510'>theorem</span> <span
  m='2125840'>is</span> <span m='2126280'>there's</span> <span
  m='2126490'>an</span> <span m='2126570'>algorithm,</span> <span
  m='2127190'>given</span> <span m='2127470'>any</span> <span
  m='2127710'>set</span> <span m='2127900'>of</span> <span
  m='2127970'>polygons</span> <span m='2128550'>in</span> <span
  m='2128610'>the</span> <span m='2128700'>plane,</span> <span
  m='2129600'>you</span> <span m='2129740'>could</span> <span
  m='2129880'>fold,</span> <span m='2130290'>make</span> <span
  m='2130470'>one</span> <span m='2130590'>straight</span> <span
  m='2130810'>cut, and</span> <span m='2131190'>get</span> <span
  m='2131450'>exactly</span> <span m='2131840'>those</span> <span
  m='2132030'>polygons.</span> <span m='2132530'>There's</span> <span
  m='2132620'>some</span> <span m='2132800'>limits,</span> <span
  m='2133100'>in</span> <span m='2133180'>practice,</span> <span
  m='2133600'>because</span> <span m='2133810'>of</span> <span
  m='2133880'>paper</span> <span m='2134180'>thickness.</span> <span
  m='2134710'>But</span> <span m='2135660'>in theory,</span> <span
  m='2135840'>you</span> <span m='2136020'>can</span> <span
  m='2136130'>do</span> <span m='2136340'>everything.</span> <span
  m='2138240'>All</span> <span m='2138390'>right.</span> <span
  m='2139250'>Fun</span> <span m='2139430'>stuff.</span> </p><p><span
  m='2144580'>I don't</span> <span m='2144670'>think</span> <span m='2144830'>I
  have</span> <span m='2145010'>time to</span> <span m='2145260'>talk</span>
  <span m='2145460'>about</span> <span m='2145660'>self-assembly.</span> <span
  m='2147020'>Let</span> <span m='2147190'>me</span> <span
  m='2147310'>talk</span> <span m='2147510'>a</span> <span
  m='2147550'>little</span> <span m='2147710'>bit</span> <span
  m='2147820'>about</span> <span m='2148050'>data</span> <span
  m='2148250'>structures</span> <span m='2148650'>because,</span> <span
  m='2148830'>conveniently,</span> <span m='2149440'>Srini drew</span> <span
  m='2149910'>this</span> <span m='2150100'>diagram</span> <span
  m='2150520'>for</span> <span m='2150700'>me.</span> <span
  m='2152650'>And</span> <span m='2152810'>I</span> <span
  m='2152860'>have</span> <span m='2153030'>the</span> <span
  m='2153080'>exact</span> <span m='2153390'>same</span> <span
  m='2153590'>diagram--</span> <span m='2154110'>the</span> <span
  m='2154230'>left</span> <span m='2154490'>one, though.</span> <span
  m='2156280'>I'm</span> <span m='2156460'>old</span> <span
  m='2156600'>fashioned.</span> </p><p><span m='2159560'>So</span> <span
  m='2161330'>the</span> <span m='2161620'>models</span> <span
  m='2161990'>of</span> <span m='2162090'>computation</span> <span
  m='2162700'>we've</span> <span m='2162820'>used,</span> <span
  m='2163030'>in</span> <span m='2163140'>this</span> <span
  m='2163330'>class,</span> <span m='2163790'>are</span> <span
  m='2163940'>pretty</span> <span m='2164180'>simple.</span> <span
  m='2164770'>We</span> <span m='2164820'>have,</span> <span
  m='2165080'>in</span> <span m='2165160'>particular,</span> <span
  m='2165435'>the</span> <span m='2165710'>Word</span> <span
  m='2165950'>RAM.</span> <span m='2166600'>You</span> <span
  m='2166740'>can</span> <span m='2166880'>read</span> <span
  m='2167070'>a</span> <span m='2167110'>word.</span> <span
  m='2167550'>You</span> <span m='2167720'>can</span> <span
  m='2168280'>add</span> <span m='2168640'>two</span> <span
  m='2168790'>words.</span> <span m='2169280'>Do</span> <span
  m='2169400'>whatever</span> <span m='2169680'>you</span> <span
  m='2169790'>want with a</span> <span m='2170200'>constant</span> <span
  m='2170460'>number</span> <span m='2170660'>words.</span> <span
  m='2170970'>Send</span> <span m='2171210'>them</span> <span
  m='2171340'>out</span> <span m='2171640'>to</span> <span
  m='2171950'>main</span> <span m='2172100'>memory.</span> <span
  m='2172810'>Everything's</span> <span m='2173560'>the</span> <span
  m='2173660'>same</span> <span m='2174010'>amount</span> <span
  m='2174250'>of</span> <span m='2174340'>time.</span> <span
  m='2175170'>It's</span> <span m='2175330'>all</span> <span
  m='2175570'>constant,</span> <span m='2176190'>anyway,</span> <span
  m='2176570'>so</span> <span m='2177350'>who</span> <span
  m='2177460'>cares?</span> </p><p><span m='2178080'>Except</span> <span
  m='2178790'>there's</span> <span m='2178970'>this</span> <span
  m='2179120'>issue</span> <span m='2179560'>in</span> <span
  m='2179730'>real</span> <span m='2179980'>computers,</span> <span
  m='2181140'>and</span> <span m='2181370'>it</span> <span
  m='2181490'>gets</span> <span m='2181750'>even</span> <span
  m='2181960'>worse</span> <span m='2182200'>with</span> <span
  m='2182330'>parallel,</span> <span m='2182780'>but</span> <span
  m='2182910'>let's</span> <span m='2183140'>stick</span> <span
  m='2183400'>to</span> <span m='2184900'>sequential</span> <span
  m='2187470'>old</span> <span m='2187680'>fashioned</span> <span
  m='2188130'>computers.</span> <span m='2189790'>So</span> <span
  m='2189970'>you</span> <span m='2190030'>have</span> <span
  m='2190220'>this</span> <span m='2190530'>slow</span> <span
  m='2191280'>bottleneck</span> <span m='2191850'>between</span> <span
  m='2192220'>main</span> <span m='2192430'>memory</span> <span
  m='2193140'>and</span> <span m='2193300'>cache.</span> <span
  m='2193950'>Cache</span> <span m='2194300'>is</span> <span
  m='2194400'>really</span> <span m='2194610'>fast.</span> <span
  m='2195030'>Think</span> <span m='2195180'>of</span> <span
  m='2195270'>this</span> <span m='2195420'>as</span> <span m='2195530'>a</span>
  <span m='2195650'>really</span> <span m='2196030'>fat</span> <span
  m='2196360'>pipe.</span> <span m='2197340'>And</span> <span
  m='2197560'>this</span> <span m='2197730'>is</span> <span m='2197860'>a</span>
  <span m='2197910'>very</span> <span m='2198170'>thin</span> <span
  m='2198390'>pipe.</span> </p><p><span m='2200100'>What</span> <span
  m='2200250'>do</span> <span m='2200310'>we</span> <span m='2200430'>do?</span>
  <span m='2200630'>We'd</span> <span m='2200770'>like</span> <span
  m='2201080'>to</span> <span m='2201190'>always</span> <span
  m='2201570'>work</span> <span m='2201780'>with</span> <span
  m='2201890'>things</span> <span m='2202110'>in</span> <span
  m='2202210'>cache,</span> <span m='2202610'>but</span> <span
  m='2203000'>that's</span> <span m='2203330'>kind</span> <span
  m='2203510'>of</span> <span m='2203570'>difficult.</span> <span
  m='2204850'>At</span> <span m='2205050'>some</span> <span
  m='2205260'>point,</span> <span m='2205500'>you</span> <span
  m='2205610'>run</span> <span m='2205800'>out</span> <span
  m='2205900'>of</span> <span m='2205970'>space.</span> <span
  m='2206390'>You've</span> <span m='2206500'>got</span> <span
  m='2206670'>to</span> <span m='2206740'>go</span> <span m='2206910'>to</span>
  <span m='2207000'>main</span> <span m='2207170'>memory.</span> <span
  m='2207550'>And</span> <span m='2207640'>maybe</span> <span
  m='2207880'>to</span> <span m='2207990'>disc,</span> <span
  m='2208420'>other</span> <span m='2208650'>levels</span> <span
  m='2209200'>of</span> <span m='2209310'>the</span> <span
  m='2209380'>memory</span> <span m='2209650'>hierarchy.</span> </p><p><span
  m='2211200'>So</span> <span m='2211300'>what</span> <span
  m='2212030'>systems</span> <span m='2212440'>do</span> <span
  m='2212850'>is,</span> <span m='2213130'>when</span> <span
  m='2213350'>you</span> <span m='2213510'>fetch</span> <span
  m='2213800'>something</span> <span m='2214160'>from</span> <span
  m='2214340'>memory,</span> <span m='2214750'>you</span> <span
  m='2214840'>don't</span> <span m='2215060'>just</span> <span
  m='2215270'>get</span> <span m='2215450'>one</span> <span
  m='2215740'>word,</span> <span m='2216370'>you</span> <span
  m='2216460'>get</span> <span m='2216620'>an</span> <span
  m='2216720'>entire</span> <span m='2217270'>cache</span> <span
  m='2217630'>line.</span> <span m='2219260'>And</span> <span
  m='2219660'>cache</span> <span m='2219940'>lines</span> <span
  m='2220150'>are</span> <span m='2220210'>getting</span> <span
  m='2220470'>bigger</span> <span m='2220760'>and</span> <span
  m='2220820'>bigger.</span> <span m='2221570'>But</span> <span
  m='2223540'>memory</span> <span m='2223860'>transfers</span> <span
  m='2224870'>happen</span> <span m='2225290'>in</span> <span
  m='2225480'>blocks,</span> <span m='2229140'>when</span> <span
  m='2229320'>you're</span> <span m='2229480'>going</span> <span
  m='2229780'>to</span> <span m='2230140'>a</span> <span m='2230210'>big</span>
  <span m='2230430'>memory.</span> </p><p><span m='2239600'>So</span> <span
  m='2239700'>let's</span> <span m='2239870'>say</span> <span
  m='2240000'>B</span> <span m='2240400'>is</span> <span m='2240530'>the</span>
  <span m='2240620'>size</span> <span m='2240960'>of</span> <span
  m='2241030'>a</span> <span m='2241100'>block.</span> <span
  m='2242460'>There</span> <span m='2242900'>is</span> <span
  m='2243140'>another</span> <span m='2243480'>model</span> <span
  m='2243780'>of</span> <span m='2243890'>computation</span> <span
  m='2244600'>that's</span> <span m='2244980'>more</span> <span
  m='2245180'>sophisticated</span> <span m='2245960'>than</span> <span
  m='2246100'>the</span> <span m='2246190'>Word</span> <span
  m='2246410'>RAM</span> <span m='2246690'>that</span> <span
  m='2246770'>says</span> <span m='2248480'>how</span> <span
  m='2248830'>should</span> <span m='2249160'>my</span> <span
  m='2249340'>running</span> <span m='2249620'>time</span> <span
  m='2249820'>depend</span> <span m='2250220'>on</span> <span m='2250400'>B.
  How</span> <span m='2250860'>many</span> <span m='2251090'>memory</span> <span
  m='2251490'>transfers</span> <span m='2251990'>do</span> <span
  m='2252090'>I</span> <span m='2252170'>need</span> <span m='2252380'>to</span>
  <span m='2252490'>do,</span> <span m='2252760'>as</span> <span
  m='2252890'>a</span> <span m='2252950'>function</span> <span
  m='2253235'>of</span> <span m='2253520'>B</span> <span m='2254080'>and</span>
  <span m='2254320'>n?</span> </p><p><span m='2255466'>And</span> <span
  m='2255900'>so</span> <span m='2256090'>for</span> <span
  m='2256220'>example,</span> <span m='2256670'>if</span> <span
  m='2256770'>you</span> <span m='2256800'>want</span> <span
  m='2256980'>to</span> <span m='2257050'>do</span> <span
  m='2257210'>search--</span> <span m='2259760'>normally,</span> <span
  m='2260180'>we</span> <span m='2260300'>think</span> <span
  m='2260490'>of</span> <span m='2260550'>doing</span> <span
  m='2260760'>binary</span> <span m='2261130'>search.</span> <span
  m='2261380'>That</span> <span m='2261590'>takes</span> <span
  m='2261840'>log(n)</span> <span m='2262350'>accesses</span> <span
  m='2263070'>if</span> <span m='2263210'>everything</span> <span
  m='2263610'>is</span> <span m='2263800'>uniform.</span> <span
  m='2264720'>But</span> <span m='2264850'>with</span> <span
  m='2265000'>asymmetry,</span> <span m='2265565'>and</span> <span
  m='2265920'>if</span> <span m='2266120'>you're</span> <span
  m='2266340'>reading</span> <span m='2266700'>in</span> <span
  m='2266870'>entire</span> <span m='2267250'>blocks,</span> <span
  m='2268190'>if</span> <span m='2268390'>you</span> <span m='2268510'>do</span>
  <span m='2268660'>it</span> <span m='2268750'>right,</span> <span
  m='2269340'>you</span> <span m='2269540'>can</span> <span
  m='2269700'>do</span> <span m='2269830'>it</span> <span m='2270000'>in</span>
  <span m='2270890'>log</span> <span m='2271980'>base</span> <span
  m='2272340'>B</span> <span m='2273245'>of</span> <span m='2273570'>n,</span>
  <span m='2275090'>instead</span> <span m='2275380'>of</span> <span
  m='2275460'>log</span> <span m='2275700'>base</span> <span
  m='2275980'>2.</span> <span m='2276190'>This</span> <span
  m='2276340'>is</span> <span m='2276460'>counting</span> <span
  m='2276730'>memory</span> <span m='2277060'>transfers,</span> <span
  m='2277580'>not</span> <span m='2277790'>computation.</span> <span
  m='2278490'>Computation</span> <span m='2279050'>here is</span> <span
  m='2279300'>free.</span> <span m='2281160'>It's</span> <span
  m='2281380'>a</span> <span m='2281400'>little</span> <span
  m='2281590'>weird,</span> <span m='2281900'>but</span> <span
  m='2282460'>you</span> <span m='2282540'>get</span> <span
  m='2282700'>used</span> <span m='2282920'>to</span> <span
  m='2283010'>it.</span> </p><p><span m='2283720'>Sorting.</span> <span
  m='2285770'>They're</span> <span m='2286020'>classic.</span> <span
  m='2286800'>Just</span> <span m='2286970'>to</span> <span
  m='2287040'>give</span> <span m='2287210'>you</span> <span
  m='2287270'>an</span> <span m='2287340'>idea</span> <span
  m='2287720'>of</span> <span m='2288870'>how</span> <span
  m='2289060'>this</span> <span m='2289270'>gets</span> <span
  m='2289450'>a</span> <span m='2289490'>little</span> <span
  m='2289690'>complicated.</span> <span m='2290230'>You</span> <span
  m='2290310'>get</span> <span m='2290470'>n</span> <span
  m='2290660'>divided</span> <span m='2291020'>by</span> <span
  m='2291170'>B</span> <span m='2291850'>times</span> <span
  m='2292330'>log</span> <span m='2292730'>base</span> <span
  m='2293260'>C</span> <span m='2293770'>of</span> <span m='2293930'>n</span>
  <span m='2294150'>divided</span> <span m='2294510'>by</span> <span
  m='2294620'>B.</span> <span m='2295280'>C</span> <span m='2295710'>is</span>
  <span m='2296020'>the</span> <span m='2296340'>number</span> <span
  m='2296840'>of</span> <span m='2297230'>blocks</span> <span
  m='2297780'>that</span> <span m='2297960'>fit</span> <span
  m='2298100'>in</span> <span m='2298210'>here.</span> <span
  m='2300610'>So</span> <span m='2301030'>there's</span> <span
  m='2301210'>C</span> <span m='2301590'>different</span> <span
  m='2301930'>blocks</span> <span m='2302710'>that</span> <span
  m='2302800'>fit</span> <span m='2303050'>in</span> <span
  m='2303180'>your</span> <span m='2303320'>cache.</span> <span
  m='2304970'>That's</span> <span m='2305240'>the</span> <span
  m='2305370'>optimal</span> <span m='2305750'>way</span> <span
  m='2305880'>to</span> <span m='2305980'>sort.</span> <span
  m='2306780'>Just</span> <span m='2306890'>upper</span> <span
  m='2307000'>and</span> <span m='2307070'>lower</span> <span
  m='2307290'>bounds</span> <span m='2307710'>in</span> <span
  m='2307780'>the</span> <span m='2307850'>comparison</span> <span
  m='2308340'>model.</span> </p><p><span m='2309930'>Just</span> <span
  m='2310110'>to</span> <span m='2310170'>give</span> <span
  m='2310330'>you</span> <span m='2310390'>a</span> <span
  m='2310430'>flavor.</span> <span m='2310770'>And</span> <span
  m='2310840'>there's</span> <span m='2310970'>a</span> <span
  m='2311020'>whole</span> <span m='2311360'>study</span> <span
  m='2311840'>of</span> <span m='2312070'>algorithms</span> <span
  m='2312580'>to</span> <span m='2312680'>do</span> <span
  m='2312840'>this.</span> <span m='2313390'>What's</span> <span
  m='2313580'>really</span> <span m='2313850'>cool</span> <span
  m='2314480'>is</span> <span m='2314650'>you</span> <span
  m='2314770'>can</span> <span m='2314880'>achieve</span> <span
  m='2315230'>these</span> <span m='2315410'>bounds</span> <span
  m='2315850'>even</span> <span m='2316120'>if</span> <span
  m='2316260'>you</span> <span m='2316370'>don't</span> <span
  m='2316630'>know</span> <span m='2316770'>what</span> <span
  m='2316980'>B</span> <span m='2317330'>is.</span> <span m='2317930'>And</span>
  <span m='2318110'>if</span> <span m='2318210'>you</span> <span
  m='2318300'>don't</span> <span m='2318520'>know</span> <span
  m='2318660'>what</span> <span m='2318790'>C</span> <span
  m='2319060'>is.</span> <span m='2319360'>There's</span> <span
  m='2319520'>one</span> <span m='2319830'>algorithm,</span> <span
  m='2320750'>that</span> <span m='2320910'>whatever</span> <span
  m='2321320'>the</span> <span m='2321460'>architecture</span> <span
  m='2321800'>is</span> <span m='2322140'>underlying</span> <span
  m='2322740'>it,</span> <span m='2323500'>we'll</span> <span
  m='2323650'>still</span> <span m='2323930'>achieve</span> <span
  m='2324200'>the</span> <span m='2324280'>same</span> <span
  m='2324530'>bounds.</span> </p><p><span m='2324980'>Those are</span> <span
  m='2325050'>called</span> <span m='2325270'>cache-oblivious</span> <span
  m='2325930'>algorithms,</span> <span m='2326440'>and</span> <span
  m='2326540'>they</span> <span m='2326640'>were</span> <span
  m='2326770'>invented,</span> <span m='2327770'>here,</span> <span
  m='2328040'>at</span> <span m='2328140'>MIT.</span> <span m='2333065'>I</span>
  <span m='2333340'>think</span> <span m='2333530'>I</span> <span
  m='2333610'>want</span> <span m='2333940'>to--</span> <span
  m='2335420'>this</span> <span m='2336040'>is</span> <span
  m='2336160'>too</span> <span m='2336300'>much</span> <span
  m='2336530'>fun</span> <span m='2336740'>to</span> <span
  m='2336810'>pass</span> <span m='2337140'>up.</span> <span
  m='2338100'>On</span> <span m='2338250'>the</span> <span
  m='2338340'>Word</span> <span m='2338580'>RAM,</span> <span
  m='2341890'>there's</span> <span m='2342140'>this</span> <span
  m='2342310'>problem,</span> <span m='2342740'>which</span> <span
  m='2342920'>we've</span> <span m='2343130'>dealt</span> <span
  m='2343370'>with</span> <span m='2343570'>several</span> <span
  m='2343870'>times.</span> <span m='2344570'>What</span> <span
  m='2344760'>if</span> <span m='2344880'>you</span> <span
  m='2345000'>want</span> <span m='2345350'>to</span> <span
  m='2346710'>maintain</span> <span m='2347210'>a</span> <span
  m='2347280'>dynamic</span> <span m='2347750'>set</span> <span
  m='2347950'>of</span> <span m='2348030'>elements--</span> <span
  m='2348920'>integers.</span> <span m='2349820'>I</span> <span
  m='2349920'>want</span> <span m='2350100'>to</span> <span
  m='2350160'>do</span> <span m='2350280'>insert,</span> <span
  m='2350720'>delete,</span> <span m='2351390'>predecessor,</span> <span
  m='2351980'>successor.</span> <span m='2353870'>This</span> <span
  m='2354140'>is</span> <span m='2354280'>what</span> <span
  m='2354550'>binary</span> <span m='2354900'>search</span> <span
  m='2355190'>trees</span> <span m='2355440'>do.</span> <span
  m='2356810'>But</span> <span m='2357060'>you</span> <span
  m='2357180'>can</span> <span m='2357300'>do</span> <span
  m='2357390'>better.</span> </p><p><span m='2359090'>If</span> <span
  m='2359270'>we</span> <span m='2359360'>have</span> <span
  m='2359690'>integers--</span> <span m='2360830'>n</span> <span
  m='2361050'>integers--</span> <span m='2365900'>in</span> <span
  m='2366040'>the</span> <span m='2366140'>range</span> <span
  m='2366420'>0</span> <span m='2367440'>to</span> <span m='2367690'>u</span>
  <span m='2368060'>minus</span> <span m='2368440'>1.</span> <span
  m='2368760'>So</span> <span m='2368880'>u</span> <span m='2369120'>is</span>
  <span m='2369230'>the</span> <span m='2369320'>size</span> <span
  m='2369660'>of</span> <span m='2369770'>the</span> <span
  m='2369870'>universe.</span> <span m='2371830'>Then,</span> <span
  m='2375780'>we</span> <span m='2375910'>already</span> <span
  m='2376110'>know</span> <span m='2376220'>how</span> <span
  m='2376320'>to</span> <span m='2376420'>do</span> <span
  m='2376580'>log(n).</span> <span m='2377840'>But</span> <span
  m='2378140'>you</span> <span m='2378380'>can</span> <span
  m='2378650'>do</span> <span m='2379410'>two</span> <span
  m='2379970'>bounds.</span> <span m='2380530'>One</span> <span
  m='2380800'>is</span> <span m='2381080'>log(log(u)).</span> <span
  m='2385040'>This</span> <span m='2385230'>is</span> <span m='2385350'>a</span>
  <span m='2385410'>data</span> <span m='2385620'>structure</span> <span
  m='2385990'>called</span> <span m='2386470'>[INAUDIBLE].</span> <span
  m='2390700'>And</span> <span m='2390850'>it's</span> <span
  m='2390970'>in</span> <span m='2391110'>CLRS,</span> <span m='2391505'>if
  you're</span> <span m='2391900'>interested.</span> <span
  m='2392780'>You</span> <span m='2393180'>can</span> <span
  m='2393330'>also</span> <span m='2393640'>do</span> <span
  m='2394140'>log(log(n))</span> <span m='2397950'>divided</span> <span
  m='2398470'>by</span> <span m='2398700'>log(log(u)).</span> </p><p><span
  m='2401190'>This</span> <span m='2401390'>is</span> <span m='2401430'>a</span>
  <span m='2401500'>data</span> <span m='2401690'>structure</span> <span
  m='2401990'>called</span> <span m='2402180'>fusion</span> <span
  m='2402540'>trees.</span> <span m='2402900'>It's</span> <span
  m='2403100'>an</span> <span m='2403190'>advanced</span> <span
  m='2403455'>data</span> <span m='2403720'>structure.</span> <span
  m='2404140'>6.851,</span> <span m='2405820'>if</span> <span
  m='2405930'>you're</span> <span m='2406020'>interested.</span> <span
  m='2408030'>And</span> <span m='2408190'>you</span> <span
  m='2408290'>can</span> <span m='2408420'>take</span> <span
  m='2408610'>the</span> <span m='2408700'>min</span> <span
  m='2408890'>of</span> <span m='2409000'>those</span> <span
  m='2409230'>two.</span> <span m='2409850'>That's,</span> <span
  m='2410130'>essentially,</span> <span m='2410600'>the</span> <span
  m='2410720'>best</span> <span m='2411000'>possible,</span> <span
  m='2412290'>the</span> <span m='2412350'>matching</span> <span
  m='2412720'>lower</span> <span m='2412960'>bound,</span> <span
  m='2413240'>that</span> <span m='2413520'>that</span> <span
  m='2413560'>that's</span> <span m='2413800'>all</span> <span
  m='2413980'>you</span> <span m='2414130'>can</span> <span
  m='2414260'>achieve.</span> <span m='2417190'>And</span> <span
  m='2417430'>so</span> <span m='2417570'>just</span> <span
  m='2417840'>to</span> <span m='2417880'>state it</span> <span
  m='2418710'>in</span> <span m='2418930'>terms</span> <span
  m='2419230'>that</span> <span m='2419310'>you know,</span> <span
  m='2420528'>which</span> <span m='2420934'>is</span> <span
  m='2421340'>normal</span> <span m='2421670'>n</span> <span
  m='2421940'>bounds.</span> <span m='2423390'>You</span> <span
  m='2423510'>take</span> <span m='2423720'>the</span> <span
  m='2423800'>min</span> <span m='2424010'>of</span> <span
  m='2424100'>those</span> <span m='2424330'>two</span> <span
  m='2424470'>things,</span> <span m='2425560'>there</span> <span
  m='2425790'>are</span> <span m='2425880'>always</span> <span
  m='2426300'>at</span> <span m='2426410'>most</span> <span
  m='2429510'>square</span> <span m='2429960'>root</span> <span
  m='2431280'>log(n)</span> <span m='2431800'>divided</span> <span
  m='2432110'>by</span> <span m='2432210'>log(log(n)).</span> </p><p><span
  m='2437680'>Compare</span> <span m='2438000'>that</span> <span
  m='2438210'>with</span> <span m='2438350'>log(n).</span> <span
  m='2439520'>It's</span> <span m='2439730'>way</span> <span
  m='2440110'>better.</span> <span m='2441580'>A</span> <span
  m='2441640'>whole</span> <span m='2441880'>square</span> <span
  m='2442210'>root</span> <span m='2442350'>better.</span> <span m='2442670'>And
  a</span> <span m='2442730'>little</span> <span m='2443020'>tiny</span> <span
  m='2443380'>savings</span> <span m='2443780'>better.</span> <span
  m='2444020'>And</span> <span m='2444160'>this</span> <span
  m='2444330'>is</span> <span m='2444570'>optimal.</span> <span m='2445220'>It
  is</span> <span m='2445430'>a</span> <span m='2445480'>function</span> <span
  m='2445810'>of</span> <span m='2445890'>n.</span> <span
  m='2446200'>That's</span> <span m='2446410'>the</span> <span
  m='2446480'>best</span> <span m='2446740'>you</span> <span
  m='2446840'>can</span> <span m='2446980'>do</span> <span
  m='2447300'>for</span> <span m='2447650'>the</span> <span
  m='2447770'>predecessor</span> <span m='2448280'>problem.</span> <span
  m='2448870'>So</span> <span m='2449050'>pretty</span> <span
  m='2449290'>crazy</span> <span m='2449600'>stuff.</span> <span
  m='2450000'>It's a</span> <span m='2450380'>very</span> <span
  m='2450570'>complicated</span> <span m='2451300'>structure. It's</span> <span
  m='2451760'>probably</span> <span m='2452750'>completely</span> <span
  m='2453200'>impractical.</span> <span m='2453960'>But,</span> <span
  m='2454110'>hey.</span> <span m='2455240'>They're,</span> <span
  m='2455320'>theoretically,</span> <span m='2455870'>pretty</span> <span
  m='2456110'>cool.</span> </p><p><span m='2457770'>I'll</span> <span
  m='2458190'>tell</span> <span m='2458410'>you</span> <span
  m='2458540'>a</span> <span m='2458560'>little</span> <span
  m='2458740'>bit</span> <span m='2458900'>about</span> <span
  m='2459280'>graph</span> <span m='2459670'>algorithms.</span> <span
  m='2481070'>We've</span> <span m='2481190'>seen</span> <span
  m='2481430'>a</span> <span m='2481480'>lot</span> <span m='2481650'>of</span>
  <span m='2481730'>graph</span> <span m='2481970'>algorithms</span> <span
  m='2482270'>in this</span> <span m='2482570'>class.</span> <span
  m='2483580'>One</span> <span m='2483850'>way</span> <span
  m='2484020'>to</span> <span m='2484110'>make</span> <span
  m='2484340'>them</span> <span m='2485720'>new</span> <span
  m='2485910'>and</span> <span m='2486010'>fun</span> <span
  m='2486200'>again</span> <span m='2486920'>is</span> <span
  m='2487080'>to</span> <span m='2487190'>suppose</span> <span
  m='2487560'>your</span> <span m='2487720'>graph</span> <span
  m='2487980'>is</span> <span m='2488130'>planar</span> <span
  m='2488455'>or</span> <span m='2488780'>almost</span> <span
  m='2489120'>planer.</span> <span m='2489410'>Meaning</span> <span
  m='2489650'>you</span> <span m='2489770'>can</span> <span
  m='2489890'>draw</span> <span m='2490170'>it</span> <span
  m='2490240'>in</span> <span m='2490390'>two</span> <span
  m='2490520'>dimensions</span> <span m='2490960'>without</span> <span
  m='2491260'>any</span> <span m='2491430'>crossings,</span> <span
  m='2492190'>as</span> <span m='2492390'>you</span> <span
  m='2492490'>might</span> <span m='2492720'>get</span> <span
  m='2492980'>from</span> <span m='2493600'>a</span> <span
  m='2493750'>graph</span> <span m='2494110'>that's</span> <span
  m='2494280'>drawn</span> <span m='2494600'>on</span> <span
  m='2494870'>the</span> <span m='2495030'>earth,</span> <span
  m='2497390'>like</span> <span m='2497700'>a</span> <span
  m='2497750'>road</span> <span m='2497960'>network</span> <span
  m='2498330'>or</span> <span m='2498400'>something</span> <span
  m='2498740'>with</span> <span m='2499420'>no</span> <span
  m='2499760'>or</span> <span m='2499890'>few</span> <span
  m='2500290'>overpasses.</span> <span m='2501370'>Then</span> <span
  m='2501530'>you</span> <span m='2501620'>can</span> <span
  m='2501740'>do</span> <span m='2501860'>things</span> <span
  m='2502080'>a</span> <span m='2502140'>lot</span> <span
  m='2502330'>better.</span> </p><p><span m='2502600'>For</span> <span
  m='2502800'>example,</span> <span m='2503730'>you</span> <span
  m='2503910'>can</span> <span m='2504050'>do</span> <span
  m='2504280'>the</span> <span m='2504390'>equivalent</span> <span
  m='2504820'>of</span> <span m='2504960'>Dijkstra's</span> <span
  m='2505350'>algorithm.</span> <span m='2506360'>So</span> <span
  m='2506540'>non-negative</span> <span m='2507300'>weight</span> <span
  m='2507550'>shortest</span> <span m='2507910'>path,</span> <span
  m='2508850'>in</span> <span m='2509020'>linear</span> <span
  m='2509400'>time.</span> <span m='2512700'>That's</span> <span
  m='2512880'>not</span> <span m='2513020'>so</span> <span
  m='2513160'>impressive</span> <span m='2513620'>cause</span> <span
  m='2513770'>Dijkstra</span> <span m='2514255'>is</span> <span
  m='2515540'>number</span> <span m='2515810'>of</span> <span
  m='2515880'>edges.</span> <span m='2517050'>Here,</span> <span
  m='2517280'>I</span> <span m='2517310'>mean</span> <span m='2517460'>number
  of</span> <span m='2517690'>vertices.</span> <span m='2517960'>It</span> <span
  m='2518230'>doesn't</span> <span m='2518460'>really</span> <span
  m='2518620'>matter</span> <span m='2518960'>with</span> <span
  m='2519760'>planar</span> <span m='2520020'>graphs.</span> <span
  m='2520530'>And</span> <span m='2520790'>we had E log(V).</span> <span
  m='2522540'>You can</span> <span m='2522660'>write E,</span> <span
  m='2522820'>here,</span> <span m='2523220'>if you</span> <span
  m='2523680'>prefer.</span> <span m='2524780'>It's</span> <span
  m='2524920'>only</span> <span m='2525100'>a</span> <span
  m='2525170'>log</span> <span m='2525420'>savings.</span> </p><p><span
  m='2526060'>More</span> <span m='2526270'>impressive,</span> <span
  m='2527240'>is</span> <span m='2527340'>you</span> <span
  m='2527500'>can</span> <span m='2527640'>do</span> <span
  m='2527850'>with</span> <span m='2528010'>negative</span> <span
  m='2528350'>weights--</span> <span m='2528655'>the</span> <span
  m='2528960'>equivalent</span> <span m='2529500'>of</span> <span
  m='2529620'>Bellman-Ford--</span> <span m='2533040'>in</span> <span
  m='2533860'>almost</span> <span m='2534250'>linear</span> <span
  m='2534510'>time.</span> <span m='2538700'>So</span> <span
  m='2538930'>some</span> <span m='2539070'>log</span> <span
  m='2539420'>factors.</span> <span m='2540740'>Log</span> <span
  m='2540980'>squared</span> <span m='2541160'>n divided</span> <span
  m='2541425'>by</span> <span m='2541690'>log(log(n)).</span> <span
  m='2542480'>It's the</span> <span m='2542560'>best</span> <span
  m='2542810'>bound</span> <span m='2543020'>known</span> <span m='2543360'>to
  date.</span> <span m='2543980'>That was</span> <span m='2544110'>a</span>
  <span m='2544190'>result</span> <span m='2544510'>from</span> <span
  m='2544650'>last</span> <span m='2544940'>year.</span> <span
  m='2545360'>So</span> <span m='2545490'>it's</span> <span
  m='2545610'>still</span> <span m='2546250'>a</span> <span
  m='2546350'>work</span> <span m='2546460'>in</span> <span
  m='2546570'>progress.</span> <span m='2547560'>And</span> <span
  m='2547890'>if</span> <span m='2548310'>you're</span> <span
  m='2548410'>interested</span> <span m='2548720'>in</span> <span
  m='2548810'>this</span> <span m='2548970'>kind</span> <span
  m='2549140'>of</span> <span m='2549210'>stuff,</span> <span
  m='2549610'>you</span> <span m='2549750'>should</span> <span
  m='2550030'>check</span> <span m='2550310'>out</span> <span
  m='2551610'>the</span> <span m='2551800'>videos</span> <span
  m='2552230'>for</span> <span m='2552310'>the</span> <span
  m='2552410'>class</span> <span m='2552700'>we</span> <span
  m='2552800'>just</span> <span m='2553050'>taught,</span> <span
  m='2553330'>6.889.</span> </p><p><span m='2555610'>And</span> <span
  m='2556070'>recreation</span> <span m='2556540'>algorithms.</span> <span
  m='2556960'>I've</span> <span m='2557070'>actually</span> <span
  m='2557450'>already</span> <span m='2557710'>told</span> <span
  m='2557950'>you</span> <span m='2558050'>about</span> <span
  m='2558220'>a</span> <span m='2558270'>lot</span> <span m='2558470'>of</span>
  <span m='2558550'>these--</span> <span m='2559210'>like</span> <span
  m='2560570'>algorithms</span> <span m='2561070'>for</span> <span
  m='2561190'>solving a</span> <span m='2561490'>Rubik's</span> <span
  m='2561860'>cube</span> <span m='2562090'>in</span> <span m='2562180'>n</span>
  <span m='2562280'>squared</span> <span m='2562520'>divided</span> <span
  m='2562790'>by</span> <span m='2562880'>log(n)</span> <span
  m='2563280'>steps.</span> <span m='2563640'>That was</span> <span
  m='2563850'>a</span> <span m='2563900'>paper</span> <span
  m='2564160'>this</span> <span m='2564360'>year.</span> <span
  m='2565410'>Tetris</span> <span m='2565800'>is</span> <span
  m='2565910'>NP-complete.</span> <span m='2566700'>A</span> <span
  m='2566940'>whole</span> <span m='2567160'>bunch</span> <span
  m='2567460'>of</span> <span m='2567580'>NP-completeness,</span> <span
  m='2568500'>and</span> <span m='2568940'>x</span> <span
  m='2569200'>time</span> <span m='2569440'>completeness,</span> <span
  m='2570010'>and</span> <span m='2570280'>so</span> <span
  m='2570510'>on.</span> </p><p><span m='2571130'>Results</span> <span
  m='2571470'>for</span> <span m='2571600'>games.</span> <span
  m='2572860'>Other</span> <span m='2573080'>fun</span> <span
  m='2573310'>stuff,</span> <span m='2573660'>like</span> <span
  m='2573860'>balloon</span> <span m='2574300'>twisting--</span> <span
  m='2575320'>algorithms</span> <span m='2575800'>for</span> <span
  m='2575940'>designing</span> <span m='2576470'>how</span> <span
  m='2576680'>to</span> <span m='2576730'>balloon</span> <span
  m='2577020'>twist</span> <span m='2577360'>a</span> <span
  m='2577410'>given</span> <span m='2577670'>polyhedron,</span> <span
  m='2579060'>optimally,</span> <span m='2579640'>using</span> <span
  m='2579900'>the</span> <span m='2579980'>fewest</span> <span
  m='2580330'>balloons.</span> <span m='2581480'>Algorithmic</span> <span
  m='2582160'>magic</span> <span m='2582430'>tricks.</span> <span
  m='2582780'>There's</span> <span m='2582980'>tons</span> <span
  m='2583180'>of</span> <span m='2583230'>stuff</span> <span
  m='2583510'>out</span> <span m='2583660'>there.</span> <span
  m='2584190'>It's</span> <span m='2584360'>really</span> <span
  m='2584530'>fun.</span> <span m='2585610'>I</span> <span
  m='2585710'>should</span> <span m='2585820'>teach</span> <span
  m='2586000'>a</span> <span m='2586050'>class</span> <span
  m='2586330'>about</span> <span m='2586530'>some</span> <span
  m='2586680'>of</span> <span m='2586740'>those</span> <span
  m='2586930'>things,</span> <span m='2587150'>but</span> <span
  m='2587290'>I</span> <span m='2587320'>haven't</span> <span
  m='2587610'>yet.</span> <span m='2590510'>The</span> <span
  m='2590640'>last</span> <span m='2591010'>thing</span> <span
  m='2591190'>we</span> <span m='2591270'>wanted</span> <span
  m='2591520'>to</span> <span m='2591640'>do</span> <span m='2591860'>is</span>
  <span m='2592170'>together.</span> <span m='2593670'>And</span> <span
  m='2594440'>it</span> <span m='2594560'>has</span> <span m='2594780'>to</span>
  <span m='2594890'>do</span> <span m='2595110'>with</span> <span
  m='2595270'>these</span> </p><p><span m='2597096'>PROFESSOR SRINI DEVADAS:
  Getting rid of</span> <span m='2597592'>these--</span> </p><p><span
  m='2598090'>PROFESSOR ERIK DEMAINE: These cushions.</span> <span
  m='2598430'>Getting</span> <span m='2598730'>rid</span> <span
  m='2598900'>of</span> <span m='2598980'>these</span> <span
  m='2599190'>damn</span> <span m='2599650'>cushions.</span> <span
  m='2600400'>We</span> <span m='2600510'>have</span> <span
  m='2600680'>so</span> <span m='2601000'>many</span> <span
  m='2601330'>of</span> <span m='2601380'>these</span> <span
  m='2601630'>cushions.</span> <span m='2602675'>Just</span> <span
  m='2602930'>gotta</span> <span m='2603260'>get</span> <span
  m='2603460'>rid</span> <span m='2603660'>of them.</span> <span
  m='2607350'>That's</span> <span m='2607770'>two</span> <span
  m='2607920'>freebies.</span> </p><p><span m='2609460'>PROFESSOR SRINI DEVADAS:
  Now,</span> <span m='2609960'>you're</span> <span m='2610050'>going</span>
  <span m='2610160'>to have to</span> <span m='2610430'>pay</span> <span
  m='2610610'>for</span> <span m='2610740'>these</span> <span
  m='2610920'>cushions.</span> </p><p><span m='2613150'>PROFESSOR ERIK DEMAINE:
  He's</span> <span m='2613410'>kidding. He's</span> <span
  m='2613570'>kidding.</span> <span m='2613860'>Actually</span> <span
  m='2614190'>we're</span> <span m='2614380'>having</span> <span
  m='2614510'>trouble.</span> <span m='2615270'>We're</span> <span
  m='2615390'>having</span> <span m='2615630'>trouble</span> <span
  m='2615930'>giving</span> <span m='2616240'>them</span> <span
  m='2616380'>away</span> <span m='2616650'>because--</span> <span
  m='2617250'>I</span> <span m='2617400'>don't</span> <span
  m='2617530'>know--</span> <span m='2617610'>some</span> <span
  m='2617820'>people</span> <span m='2618180'>seem</span> <span
  m='2618400'>to</span> <span m='2618500'>not</span> <span
  m='2618690'>like</span> <span m='2618870'>them</span> <span
  m='2618990'>very</span> <span m='2619170'>much.</span> <span
  m='2619980'>And</span> <span m='2620170'>neither</span> <span
  m='2620300'>do</span> <span m='2620460'>we.</span> <span m='2620800'>So</span>
  <span m='2622490'>we</span> <span m='2622670'>wanted</span> <span
  m='2622960'>to</span> <span m='2623060'>give</span> <span
  m='2623250'>you</span> <span m='2623350'>some</span> <span
  m='2623550'>motivation</span> <span m='2624370'>for</span> <span
  m='2626060'>why</span> <span m='2626320'>you</span> <span
  m='2626470'>really</span> <span m='2626700'>need</span> <span
  m='2626990'>some</span> <span m='2627180'>of</span> <span
  m='2627220'>these</span> <span m='2627410'>cushions.</span> <span
  m='2629250'>So</span> <span m='2629460'>we</span> <span
  m='2629630'>actually</span> <span m='2629890'>prepared</span> <span
  m='2630290'>a</span> <span m='2630490'>top</span> <span m='2630780'>10</span>
  <span m='2631410'>list.</span> </p><p><span m='2631910'>PROFESSOR SRINI
  DEVADAS: This</span> <span m='2632380'>is</span> <span m='2632500'>the</span>
  <span m='2632640'>top</span> <span m='2632990'>10</span> <span
  m='2633230'>uses</span> <span m='2633710'>of</span> <span
  m='2633820'>6.006</span> <span m='2634760'>cushions.</span> <span
  m='2637710'>We're</span> <span m='2637790'>going to</span> <span
  m='2638150'>alternate</span> <span m='2638340'>here.</span> <span
  m='2639130'>Number</span> <span m='2639370'>10.</span> </p><p><span
  m='2640410'>PROFESSOR ERIK DEMAINE: You</span> <span m='2640570'>can</span>
  <span m='2640710'>sit</span> <span m='2640940'>on</span> <span
  m='2641130'>it</span> <span m='2642240'>and</span> <span
  m='2642700'>get</span> <span m='2642970'>guaranteed</span> <span
  m='2643530'>inspiration</span> <span m='2644260'>in</span> <span
  m='2644450'>constant</span> <span m='2645030'>time.</span> </p><p><span
  m='2647380'>PROFESSOR SRINI DEVADAS: Don't</span> <span
  m='2647490'>forget</span> <span m='2647700'>to</span> <span
  m='2647770'>bring</span> <span m='2647950'>one</span> <span
  m='2648150'>for</span> <span m='2648240'>the</span> <span
  m='2648340'>final</span> <span m='2648650'>exam.</span> </p><p><span
  m='2649850'>PROFESSOR ERIK DEMAINE: Highly</span> <span
  m='2650090'>recommended</span> <span m='2650380'>it.</span> <span
  m='2651150'>Number</span> <span m='2651380'>nine.</span> </p><p><span
  m='2652980'>PROFESSOR SRINI DEVADAS: You</span> <span m='2653110'>can</span>
  <span m='2653210'>use</span> <span m='2653390'>it</span> <span
  m='2653490'>as</span> <span m='2653590'>a</span> <span
  m='2653660'>Frisbee.</span> <span m='2655050'>You've</span> <span
  m='2655190'>seen</span> <span m='2655360'>that</span> <span
  m='2655520'>before,</span> <span m='2655940'>except</span> <span
  m='2656920'>you cut</span> <span m='2657390'>it into</span> <span
  m='2657860'>a circle.</span> <span m='2658330'>You cut</span> <span
  m='2658800'>it into</span> <span m='2659270'>a circle.</span> <span
  m='2659740'>And it works</span> <span m='2660210'>really well.</span>
  </p><p><span m='2663970'>PROFESSOR ERIK DEMAINE: We</span> <span
  m='2664080'>had</span> <span m='2664260'>fun</span> <span
  m='2664440'>with</span> <span m='2664500'>a</span> <span
  m='2664590'>Bandsaw,</span> <span m='2665030'>last</span> <span
  m='2665310'>night.</span> </p><p><span m='2665820'>PROFESSOR SRINI DEVADAS:
  Number</span> <span m='2666232'>eight.</span> </p><p><span
  m='2668260'>PROFESSOR ERIK DEMAINE: You</span> <span m='2668480'>can</span>
  <span m='2668620'>sell</span> <span m='2668980'>it</span> <span
  m='2669120'>as</span> <span m='2669310'>a</span> <span
  m='2669390'>limited</span> <span m='2669800'>edition</span> <span
  m='2670180'>collectible</span> <span m='2670960'>on</span> <span
  m='2671140'>eBay.</span> </p><p><span m='2673220'>PROFESSOR SRINI DEVADAS:
  It's</span> <span m='2673390'>never</span> <span m='2673730'>ever</span> <span
  m='2673960'>going</span> <span m='2674080'>to</span> <span
  m='2674120'>be</span> <span m='2674220'>made,</span> <span
  m='2674450'>again.</span> <span m='2676790'>You</span> <span
  m='2677045'>can</span> <span m='2677300'>make</span> <span m='2677430'>money
  off</span> <span m='2677660'>this in</span> <span m='2677840'>5</span> <span
  m='2678080'>years--</span> <span m='2678710'>10</span> <span
  m='2678920'>years.</span> </p><p><span m='2679610'>PROFESSOR ERIK DEMAINE:
  At</span> <span m='2679640'>least</span> <span m='2679850'>$5.</span> <span
  m='2680370'>I</span> <span m='2680440'>don't</span> <span
  m='2680570'>know.</span> <span m='2683590'>Number</span> <span
  m='2683760'>seven.</span> </p><p><span m='2684310'>PROFESSOR SRINI DEVADAS:
  Number</span> <span m='2684510'>seven.</span> <span m='2686010'>If</span>
  <span m='2686140'>you</span> <span m='2686250'>had</span> <span
  m='2686510'>two</span> <span m='2686740'>of</span> <span
  m='2686810'>these,</span> <span m='2687580'>you</span> <span
  m='2687700'>could</span> <span m='2687840'>stick</span> <span
  m='2688130'>them</span> <span m='2688230'>like</span> <span
  m='2688420'>this,</span> <span m='2689740'>and</span> <span
  m='2690190'>remove</span> <span m='2690530'>the</span> <span
  m='2690600'>branding,</span> <span m='2692470'>and</span> <span
  m='2692650'>use</span> <span m='2692850'>it</span> <span m='2693040'>as
  a</span> <span m='2693090'>regular</span> <span m='2693410'>cushion.</span>
  </p><p><span m='2695930'>PROFESSOR ERIK DEMAINE: Now,</span> <span
  m='2696070'>no</span> <span m='2696260'>one</span> <span
  m='2696380'>will</span> <span m='2696490'>ever</span> <span
  m='2696740'>know</span> <span m='2696890'>you</span> <span
  m='2697050'>took</span> <span m='2697240'>this</span> <span
  m='2697410'>class.</span> <span m='2698390'>You just</span> <span
  m='2698550'>need</span> <span m='2698790'>two.</span> </p><p><span
  m='2702400'>PROFESSOR SRINI DEVADAS: Number</span> <span
  m='2702670'>six.</span> </p><p><span m='2703050'>PROFESSOR ERIK DEMAINE:
  Number</span> <span m='2703220'>six.</span> <span m='2704090'>It's</span>
  <span m='2704320'>a</span> <span m='2704440'>holiday</span> <span
  m='2704960'>conversation</span> <span m='2705600'>starter.</span> </p><p><span
  m='2707430'>PROFESSOR SRINI DEVADAS: And</span> <span
  m='2707730'>conversation</span> <span m='2708270'>stopper.</span> </p><p><span
  m='2713280'>PROFESSOR ERIK DEMAINE: Number</span> <span
  m='2713480'>five.</span> </p><p><span m='2714710'>PROFESSOR SRINI DEVADAS:
  Asymptotically</span> <span m='2715550'>optimal--</span> <span
  m='2716240'>we</span> <span m='2716310'>had</span> <span m='2716450'>to</span>
  <span m='2716500'>use</span> <span m='2716700'>that</span> <span
  m='2716860'>term,</span> <span m='2717190'>acoustic</span> <span
  m='2717935'>acoustic</span> <span m='2718240'>paneling.</span> </p><p><span
  m='2719555'>PROFESSOR ERIK DEMAINE: That</span> <span m='2719820'>was a</span>
  <span m='2719900'>suggestion</span> <span m='2720420'>from</span> <span
  m='2720660'>a</span> <span m='2720950'>student.</span> <span
  m='2721340'>You</span> <span m='2721410'>just need</span> <span
  m='2721720'>a</span> <span m='2721780'>lot</span> <span m='2721990'>of</span>
  <span m='2722110'>them.</span> <span m='2723270'>This</span> <span
  m='2723420'>would</span> <span m='2723500'>be</span> <span
  m='2723620'>great</span> <span m='2723910'>for</span> <span
  m='2724370'>piano,</span> <span m='2724920'>guitar</span> <span
  m='2725290'>fingering</span> <span m='2725890'>practice.</span> <span
  m='2726460'>You know</span> <span m='2726680'>you're</span> <span
  m='2726800'>doing</span> <span m='2726980'>your</span> <span
  m='2727070'>DP.</span> </p><p><span m='2729750'>PROFESSOR SRINI DEVADAS:
  Number</span> <span m='2730000'>four.</span> </p><p><span
  m='2730730'>PROFESSOR ERIK DEMAINE: Number</span> <span
  m='2730940'>four.</span> <span m='2731310'>You</span> <span
  m='2731460'>can</span> <span m='2731600'>use</span> <span
  m='2731820'>it</span> <span m='2731950'>as</span> <span
  m='2732160'>target</span> <span m='2732630'>practice</span> <span
  m='2733130'>for</span> <span m='2733240'>your</span> <span
  m='2733370'>next</span> <span m='2733690'>larp</span> <span
  m='2733980'>session.</span> <span m='2738910'>Woah.</span> <span
  m='2739195'>Misfire.</span> <span m='2742300'>I'm missing.</span> </p><p><span
  m='2743120'>PROFESSOR SRINI DEVADAS: You haven't</span> <span m='2743598'>hit
  me yet.</span> <span m='2746950'>All right.</span> <span
  m='2747290'>Finally,</span> <span m='2747590'>you</span> <span m='2747890'>got
  one.</span> </p><p><span m='2749461'>[APPLAUSE]</span> </p><p></p><p><span
  m='2756140'>PROFESSOR ERIK DEMAINE: Number</span> <span
  m='2756380'>three.</span> </p><p><span m='2756820'>PROFESSOR SRINI DEVADAS:
  All</span> <span m='2756980'>right.</span> <span m='2757400'>10</span> <span
  m='2757610'>years</span> <span m='2757870'>from</span> <span
  m='2758060'>now,</span> <span m='2758460'>it</span> <span
  m='2758610'>might</span> <span m='2758900'>be</span> <span
  m='2759100'>all</span> <span m='2759440'>you</span> <span
  m='2759650'>remember</span> <span m='2760170'>about</span> <span
  m='2760420'>double</span> <span m='2760690'>0</span> <span
  m='2761141'>6.</span> </p><p><span m='2764750'>PROFESSOR ERIK DEMAINE: In
  truth,</span> <span m='2765190'>you</span> <span m='2765310'>might</span>
  <span m='2765500'>also</span> <span m='2765810'>remember</span> <span
  m='2766080'>this</span> <span m='2766270'>top</span> <span
  m='2766480'>10</span> <span m='2766650'>list.</span> </p><p><span
  m='2768440'>PROFESSOR SRINI DEVADAS: All right.</span> <span
  m='2768810'>Number</span> <span m='2769020'>two.</span> </p><p><span
  m='2769530'>PROFESSOR ERIK DEMAINE: Number</span> <span
  m='2769680'>two.</span> <span m='2769850'>You</span> <span
  m='2770020'>can</span> <span m='2770150'>use</span> <span
  m='2770380'>it</span> <span m='2770560'>as</span> <span
  m='2770800'>your</span> <span m='2771620'>final</span> <span
  m='2771960'>exam</span> <span m='2772420'>cheat</span> <span
  m='2772720'>sheet.</span> <span m='2773070'>This is</span> <span
  m='2773250'>a</span> <span m='2773330'>new</span> <span
  m='2773520'>rule.</span> <span m='2774824'>Instead of</span> <span
  m='2775276'>8 and 1/2</span> <span m='2775728'>by 11,</span> <span
  m='2777690'>you</span> <span m='2777910'>could</span> <span
  m='2778080'>bring</span> <span m='2778320'>in</span> <span
  m='2779460'>the</span> <span m='2779620'>appropriate</span> <span
  m='2780130'>number</span> <span m='2780340'>of</span> <span
  m='2780420'>cushions.</span> <span m='2781430'>And</span> <span
  m='2781760'>the</span> <span m='2781860'>number</span> <span
  m='2782265'>one--</span> <span m='2782670'>number</span> <span
  m='2783075'>one</span> <span m='2783760'>use</span> <span
  m='2784100'>for</span> <span m='2784240'>a</span> <span
  m='2784290'>double</span> <span m='2784520'>0</span> <span
  m='2784680'>6</span> <span m='2785015'>cushion.</span> </p><p><span
  m='2786010'>PROFESSOR SRINI DEVADAS: Three</span> <span
  m='2786250'>words.</span> <span m='2787650'>OK</span> <span
  m='2787960'>Cupid</span> <span m='2788600'>profile</span> <span
  m='2789100'>picture.</span> <span m='2795220'>Don't</span> <span
  m='2795440'>use</span> <span m='2795680'>this</span> <span m='2795980'>cheat
  sheet.</span> <span m='2797100'>But</span> <span m='2798020'>come</span> <span
  m='2798200'>to</span> <span m='2798260'>the</span> <span
  m='2798370'>final</span> <span m='2798660'>exam</span> <span
  m='2799220'>and</span> <span m='2799380'>good</span> <span
  m='2799520'>luck.</span> </p><p><span m='2800140'>PROFESSOR ERIK DEMAINE:
  Thanks.</span> </p><p></p><p><span m='2800740'>[APPLAUSE]</span> </p><p></p>
embedded_media:
  - uid: 49cdf0049cd005568ace94e9ebcd79eb
    parent_uid: e63575e2e327448baffe49ffa8ae237a
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: dU40AvBURDQ
  - uid: 41294894e1d788a924d6ec63ee657c8b
    parent_uid: e63575e2e327448baffe49ffa8ae237a
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/hkAONP0aC9w/default.jpg'
  - uid: 235900a5074b29719b84ad4024c5f6b1
    parent_uid: e63575e2e327448baffe49ffa8ae237a
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-24-topics-in-algorithms/id585700718?i=126127952
  - uid: 793d73b6534e3ed5a76564aeea0337df
    parent_uid: e63575e2e327448baffe49ffa8ae237a
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec24_300k.mp4'
  - uid: 22aa08a0e7280e03066f7ec736653a99
    parent_uid: e63575e2e327448baffe49ffa8ae237a
    id: Thumbnail-YouTube-JPG_1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/dU40AvBURDQ/default.jpg'
  - uid: 6d613e0df40ae9cdab9654286a1939ad
    parent_uid: e63575e2e327448baffe49ffa8ae237a
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: dU40AvBURDQ
  - uid: ba027ce41607508485cf659d69c240dc
    parent_uid: e63575e2e327448baffe49ffa8ae237a
    id: dU40AvBURDQ.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-24-topics-in-algorithms-research/dU40AvBURDQ.srt
  - uid: 2f76be68b02d7292084bbe5d0e39ebab
    parent_uid: e63575e2e327448baffe49ffa8ae237a
    id: dU40AvBURDQ.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-24-topics-in-algorithms-research/dU40AvBURDQ.pdf
  - uid: 86d209e659212a6c0f95f4111798854a
    parent_uid: e63575e2e327448baffe49ffa8ae237a
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 7cb64430a6f7a6fb65a2f6d966e45f09
    parent_uid: e63575e2e327448baffe49ffa8ae237a
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
