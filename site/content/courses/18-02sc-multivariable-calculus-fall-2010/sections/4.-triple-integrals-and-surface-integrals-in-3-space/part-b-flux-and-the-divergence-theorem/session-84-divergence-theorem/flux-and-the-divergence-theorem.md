---
title: Flux and the Divergence Theorem
uid: faa0b05cc4a5b2e55ff56453d12c69c6
parent_uid: d088492f402f9db5c30dcd82be2c37a6
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-84-divergence-theorem/flux-and-the-divergence-theorem
short_url: flux-and-the-divergence-theorem
inline_embed_id: 89531837fluxandthedivergencetheorem62034699
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='0'>JOEL LEWIS:</span> <span m='7740'>Hi.</span> <span
  m='8280'>Welcome</span> <span m='8630'>back</span> <span m='8850'>to</span>
  <span m='8930'>recitation.</span> <span m='9840'>In</span> <span
  m='10050'>lecture,</span> <span m='10420'>you've</span> <span
  m='10630'>been</span> <span m='10770'>learning</span> <span
  m='11070'>about</span> <span m='11460'>flux</span> <span m='11880'>and</span>
  <span m='12050'>surface</span> <span m='12380'>integrals</span> <span
  m='12860'>in</span> <span m='12940'>the</span> <span
  m='13030'>divergence</span> <span m='13550'>theorem,</span> <span
  m='14230'>and</span> <span m='14410'>I</span> <span m='14450'>have</span>
  <span m='14570'>a</span> <span m='14620'>nice</span> <span
  m='14860'>problem</span> <span m='15300'>about</span> <span
  m='15530'>that</span> <span m='15790'>for</span> <span m='15950'>you</span>
  <span m='16080'>here.</span> </p><p><span m='16720'>So</span> <span
  m='17390'>I've</span> <span m='17610'>got</span> <span m='17840'>this</span>
  <span m='18070'>field</span> <span m='18730'>F,</span> <span
  m='19525'>and</span> <span m='19980'>it's</span> <span m='20140'>a</span>
  <span m='20190'>little</span> <span m='20410'>bit</span> <span
  m='20580'>ugly,</span> <span m='21160'>right?</span> <span
  m='21620'>All</span> <span m='21860'>right.</span> <span m='22560'>So</span>
  <span m='23020'>its</span> <span m='23250'>coordinates</span> <span
  m='23950'>are</span> <span m='24790'>x</span> <span m='24975'>to</span> <span
  m='25160'>the</span> <span m='25260'>fourth</span> <span m='25720'>y,</span>
  <span m='27210'>minus</span> <span m='27690'>2</span> <span m='27950'>x</span>
  <span m='28295'>cubed</span> <span m='28640'>y</span> <span
  m='28970'>squared,</span> <span m='30030'>and</span> <span m='30290'>z</span>
  <span m='30510'>squared.</span> <span m='31890'>And</span> <span
  m='32130'>it's</span> <span m='32300'>passing</span> <span
  m='32920'>through</span> <span m='34020'>the</span> <span
  m='34130'>surface</span> <span m='34690'>of</span> <span m='34810'>a</span>
  <span m='34870'>solid</span> <span m='35480'>that's</span> <span
  m='35750'>bounded</span> <span m='36120'>by</span> <span m='36270'>the</span>
  <span m='36390'>plane</span> <span m='36695'>z</span> <span
  m='37000'>equals</span> <span m='37550'>0,</span> <span m='38570'>by</span>
  <span m='38690'>the</span> <span m='38820'>plane</span> <span
  m='39075'>z</span> <span m='39330'>equals</span> <span m='39990'>h,</span>
  <span m='40670'>and</span> <span m='41920'>by</span> <span
  m='42070'>the</span> <span m='42200'>surface</span> <span m='42530'>x</span>
  <span m='42860'>squared</span> <span m='43030'>plus</span> <span
  m='43285'>y</span> <span m='43412'>squared</span> <span
  m='43540'>equals</span> <span m='43990'>R</span> <span
  m='44190'>squared.</span> <span m='44510'>So</span> <span
  m='44990'>often</span> <span m='45360'>we</span> <span m='45480'>call</span>
  <span m='45730'>this</span> <span m='45860'>solid</span> <span
  m='46560'>a</span> <span m='46690'>cylinder.</span> </p><p><span
  m='48400'>So</span> <span m='48570'>it's</span> <span m='48680'>got</span>
  <span m='48830'>its</span> <span m='48900'>bottom</span> <span
  m='49660'>surface</span> <span m='50110'>in</span> <span m='50210'>the</span>
  <span m='50290'>plane</span> <span m='50485'>z</span> <span
  m='50680'>equals</span> <span m='51100'>0,</span> <span m='51730'>and</span>
  <span m='52010'>its</span> <span m='52070'>top</span> <span
  m='52360'>surface</span> <span m='52660'>in</span> <span m='52750'>the</span>
  <span m='52820'>plane</span> <span m='52960'>z</span> <span
  m='53100'>equals</span> <span m='53430'>h,</span> <span m='53800'>and</span>
  <span m='54070'>it's</span> <span m='54250'>got</span> <span
  m='54765'>a</span> <span m='55060'>circular</span> <span m='55960'>base</span>
  <span m='56490'>with</span> <span m='56710'>radius</span> <span
  m='57190'>R</span> <span m='57750'>there.</span> <span m='58830'>So</span>
  <span m='59950'>what</span> <span m='60090'>I'd</span> <span
  m='60220'>like</span> <span m='60400'>you</span> <span m='60470'>to</span>
  <span m='60560'>do</span> <span m='60680'>is</span> <span m='60840'>to</span>
  <span m='60960'>compute</span> <span m='61320'>the</span> <span
  m='61410'>flux</span> <span m='62110'>of</span> <span m='62340'>this</span>
  <span m='62540'>field</span> <span m='62920'>F</span> <span
  m='64540'>through</span> <span m='64770'>this</span> <span
  m='64900'>cylinder.</span> </p><p><span m='66040'>So</span> <span
  m='67800'>I'll</span> <span m='67990'>point</span> <span m='68310'>out</span>
  <span m='69420'>before</span> <span m='69790'>I</span> <span
  m='69860'>let</span> <span m='70060'>you</span> <span m='70170'>at</span>
  <span m='70280'>it,</span> <span m='70820'>that</span> <span
  m='72280'>to</span> <span m='72410'>compute</span> <span m='72800'>this</span>
  <span m='72940'>as</span> <span m='73080'>a</span> <span
  m='73150'>surface</span> <span m='73480'>integral,</span> <span
  m='73920'>you</span> <span m='74030'>could</span> <span m='74180'>do</span>
  <span m='74360'>it.</span> <span m='75230'>You</span> <span
  m='75360'>could</span> <span m='75510'>do</span> <span m='75640'>it.</span>
  <span m='75980'>If</span> <span m='76160'>you</span> <span
  m='76270'>really</span> <span m='76620'>want</span> <span m='77010'>an</span>
  <span m='77180'>exercise</span> <span m='77980'>in</span> <span
  m='78280'>nasty</span> <span m='78740'>arithmetic,</span> <span
  m='79590'>I</span> <span m='79750'>invite</span> <span m='80090'>you</span>
  <span m='80170'>to</span> <span m='80280'>do</span> <span m='80420'>it.</span>
  <span m='81090'>But</span> <span m='81280'>you</span> <span
  m='81360'>might</span> <span m='81580'>be</span> <span m='81670'>able</span>
  <span m='81870'>to</span> <span m='81930'>think</span> <span
  m='82610'>of</span> <span m='82760'>a</span> <span m='82840'>way</span> <span
  m='83040'>to</span> <span m='83170'>do</span> <span m='83310'>this</span>
  <span m='83600'>that</span> <span m='83860'>requires</span> <span
  m='84430'>less</span> <span m='84720'>effort</span> <span
  m='85680'>than</span> <span m='85850'>parametrizing</span> <span
  m='86700'>the</span> <span m='86810'>three</span> <span
  m='87130'>surfaces</span> <span m='87460'>and</span> <span
  m='87790'>integrating</span> <span m='88130'>and</span> <span
  m='88580'>so</span> <span m='88900'>on.</span> <span m='89420'>So</span> <span
  m='89590'>I'll</span> <span m='89680'>leave</span> <span m='89890'>you</span>
  <span m='89990'>with</span> <span m='90140'>that.</span> <span
  m='90620'>Why</span> <span m='90770'>don't</span> <span m='91010'>you</span>
  <span m='91090'>pause</span> <span m='91275'>the</span> <span
  m='91460'>video,</span> <span m='93600'>work</span> <span
  m='93880'>this</span> <span m='94040'>one</span> <span m='94210'>out,</span>
  <span m='94750'>come</span> <span m='94960'>back,</span> <span
  m='95240'>and</span> <span m='95340'>we</span> <span m='95450'>can</span>
  <span m='95570'>work</span> <span m='95760'>on</span> <span
  m='95880'>it</span> <span m='95990'>together.</span> </p><p><span
  m='104930'>Hopefully,</span> <span m='105430'>you</span> <span
  m='105535'>had</span> <span m='105640'>some</span> <span
  m='105780'>luck</span> <span m='106080'>working</span> <span
  m='106370'>on</span> <span m='106500'>this</span> <span
  m='106680'>problem.</span> <span m='107640'>Right</span> <span
  m='107940'>before</span> <span m='108230'>I</span> <span
  m='108280'>left,</span> <span m='108620'>I</span> <span
  m='108690'>mentioned</span> <span m='109200'>that</span> <span
  m='109350'>you</span> <span m='109460'>were</span> <span
  m='109570'>computing</span> <span m='109980'>a</span> <span
  m='110270'>flux</span> <span m='112140'>through</span> <span
  m='112370'>a</span> <span m='112430'>surface</span> <span
  m='112870'>here,</span> <span m='113100'>but</span> <span
  m='113330'>that</span> <span m='113780'>doing</span> <span
  m='114060'>it</span> <span m='114160'>as</span> <span m='114280'>a</span>
  <span m='114350'>surface</span> <span m='114700'>integral</span> <span
  m='115080'>is</span> <span m='115190'>maybe</span> <span m='115460'>not</span>
  <span m='115700'>the</span> <span m='115780'>best</span> <span
  m='116080'>way</span> <span m='116210'>to</span> <span m='116320'>go.</span>
  <span m='116750'>And</span> <span m='117020'>so,</span> <span
  m='118060'>even</span> <span m='118320'>without</span> <span
  m='118720'>that</span> <span m='119010'>hint,</span> <span
  m='119520'>probably</span> <span m='120000'>many</span> <span
  m='120290'>of</span> <span m='120390'>you</span> <span
  m='120500'>realized</span> <span m='120980'>that</span> <span
  m='121120'>really</span> <span m='121810'>the</span> <span
  m='121960'>way</span> <span m='122230'>that</span> <span m='122340'>we</span>
  <span m='122440'>want</span> <span m='122630'>to</span> <span
  m='122690'>go</span> <span m='122820'>about</span> <span
  m='123060'>this</span> <span m='123210'>problem</span> <span
  m='123710'>is</span> <span m='123940'>with</span> <span m='124080'>the</span>
  <span m='124160'>divergence</span> <span m='124510'>theorem.</span> <span
  m='125680'>OK.</span> </p><p><span m='126190'>So</span> <span
  m='130150'>in</span> <span m='130320'>our</span> <span m='130520'>case,</span>
  <span m='130859'>the</span> <span m='131200'>divergence</span> <span
  m='131510'>theorem--</span> <span m='132470'>I'm</span> <span
  m='132830'>just</span> <span m='133050'>abbreviating</span> <span
  m='133360'>it</span> <span m='133670'>div</span> <span m='134650'>T-H-M</span>
  <span m='134810'>here--</span> <span m='136000'>says</span> <span
  m='136620'>that</span> <span m='136830'>the</span> <span
  m='137650'>double</span> <span m='138090'>integral</span> <span
  m='138850'>over</span> <span m='139360'>the</span> <span
  m='139460'>surface</span> <span m='140370'>of</span> <span m='140720'>F</span>
  <span m='141840'>dot</span> <span m='142920'>n</span> <span
  m='145550'>d</span> <span m='145770'>surface</span> <span
  m='146200'>area--</span> <span m='147760'>so</span> <span m='147990'>S</span>
  <span m='148280'>here</span> <span m='148455'>is</span> <span
  m='148630'>the</span> <span m='148730'>surface</span> <span
  m='149250'>of</span> <span m='149410'>this</span> <span
  m='150120'>solid.</span> <span m='151220'>So</span> <span
  m='151390'>the</span> <span m='151490'>divergence</span> <span
  m='151980'>theorem</span> <span m='152200'>says</span> <span
  m='152410'>that</span> <span m='154450'>this</span> <span
  m='154580'>surface</span> <span m='154990'>integral,</span> <span
  m='155780'>which</span> <span m='156030'>is</span> <span m='156200'>the</span>
  <span m='156490'>flux</span> <span m='156960'>that</span> <span
  m='157090'>we're</span> <span m='157210'>interested</span> <span
  m='157660'>in,</span> <span m='158020'>is</span> <span m='158280'>equal</span>
  <span m='158680'>to</span> <span m='159550'>the</span> <span
  m='159670'>triple</span> <span m='160070'>integral</span> <span
  m='161400'>over</span> <span m='161670'>the</span> <span
  m='161810'>solid</span> <span m='162280'>region</span> <span
  m='162700'>D--</span> <span m='163020'>so</span> <span
  m='163230'>that's</span> <span m='163530'>bounded</span> <span
  m='163970'>by</span> <span m='164160'>the</span> <span
  m='164280'>surface,</span> <span m='164640'>and</span> <span
  m='164745'>so</span> <span m='164850'>that's</span> <span
  m='165090'>the</span> <span m='165200'>solid</span> <span
  m='165680'>cylinder</span> <span m='166200'>here--</span> <span
  m='166930'>is</span> <span m='167080'>equal</span> <span m='167240'>to</span>
  <span m='167360'>the</span> <span m='167710'>triple</span> <span
  m='167820'>integral</span> <span m='167890'>over</span> <span
  m='168300'>D</span> <span m='169410'>of</span> <span m='171760'>div</span>
  <span m='171960'>F</span> <span m='173310'>dV.</span> <span
  m='174620'>OK.</span> </p><p><span m='175370'>So</span> <span
  m='177030'>in</span> <span m='177180'>our</span> <span m='177400'>case,</span>
  <span m='177680'>this</span> <span m='177810'>is</span> <span
  m='177950'>nice,</span> <span m='178280'>because</span> <span
  m='178740'>in</span> <span m='178930'>fact,</span> <span
  m='179490'>this</span> <span m='179730'>solid</span> <span
  m='180200'>region</span> <span m='180730'>D</span> <span m='181290'>is</span>
  <span m='181520'>an</span> <span m='181750'>easier</span> <span
  m='182170'>to</span> <span m='182330'>understand,</span> <span
  m='183100'>or</span> <span m='183690'>easier</span> <span m='183905'>to</span>
  <span m='184120'>grapple</span> <span m='184600'>with</span> <span
  m='184850'>region</span> <span m='185990'>than</span> <span
  m='186180'>the</span> <span m='186270'>surface</span> <span
  m='186700'>that</span> <span m='186810'>we</span> <span
  m='186890'>started</span> <span m='187120'>with,</span> <span
  m='187350'>right?</span> <span m='187680'>It's</span> <span
  m='187880'>just</span> <span m='188080'>one</span> <span
  m='188360'>solid</span> <span m='188810'>piece.</span> <span
  m='190200'>It's</span> <span m='190390'>easy</span> <span m='190630'>to</span>
  <span m='190730'>parametrize,</span> <span m='191070'>in</span> <span
  m='191530'>fact.</span> <span m='191910'>It's</span> <span
  m='192070'>easy</span> <span m='192295'>to</span> <span
  m='192520'>describe,</span> <span m='193910'>especially</span> <span
  m='194350'>in</span> <span m='194430'>cylindrical</span> <span
  m='195060'>coordinates,</span> <span m='195460'>but</span> <span
  m='195600'>also</span> <span m='195870'>in</span> <span
  m='195960'>rectangular</span> <span m='196510'>coordinates.</span> <span
  m='197630'>Whereas</span> <span m='197850'>this</span> <span
  m='198050'>surface</span> <span m='198470'>S,</span> <span
  m='198730'>if</span> <span m='198810'>we</span> <span m='198910'>wanted</span>
  <span m='199120'>to</span> <span m='199200'>talk</span> <span
  m='199480'>about</span> <span m='199650'>it,</span> <span
  m='199730'>we'd</span> <span m='199820'>need</span> <span m='199980'>to</span>
  <span m='200100'>split</span> <span m='200530'>it</span> <span
  m='200595'>up</span> <span m='200660'>into</span> <span
  m='200810'>three</span> <span m='201070'>pieces,</span> <span
  m='201580'>and</span> <span m='201720'>we'd</span> <span
  m='201810'>need</span> <span m='202050'>to</span> <span
  m='202130'>parametrize</span> <span m='202830'>it.</span> <span
  m='203010'>And</span> <span m='203125'>it's</span> <span
  m='203240'>kind</span> <span m='203470'>of</span> <span m='203530'>a</span>
  <span m='203600'>hassle,</span> <span m='204350'>relatively</span> <span
  m='204910'>speaking.</span> </p><p><span m='206010'>Also,</span> <span
  m='206420'>the</span> <span m='206830'>divergence</span> <span
  m='207490'>of</span> <span m='207640'>this</span> <span
  m='207990'>field</span> <span m='208370'>F</span> <span m='209180'>is</span>
  <span m='209630'>a</span> <span m='209760'>lot</span> <span
  m='210030'>simpler</span> <span m='210350'>than</span> <span
  m='210510'>the</span> <span m='210600'>field</span> <span
  m='210890'>itself.</span> <span m='211470'>If</span> <span
  m='211600'>we</span> <span m='211710'>go</span> <span m='211815'>and</span>
  <span m='211920'>look</span> <span m='212080'>at</span> <span
  m='212160'>this</span> <span m='212330'>field,</span> <span
  m='214360'>all</span> <span m='214660'>of</span> <span m='214710'>its</span>
  <span m='214760'>components</span> <span m='215240'>are</span> <span
  m='215330'>polynomials.</span> <span m='216930'>To</span> <span
  m='217260'>compute</span> <span m='217455'>its</span> <span
  m='217650'>divergence,</span> <span m='218130'>we</span> <span
  m='218260'>take</span> <span m='218690'>derivatives</span> <span
  m='219260'>of</span> <span m='219360'>all</span> <span m='219570'>of</span>
  <span m='219720'>them.</span> <span m='220260'>And</span> <span
  m='220560'>so</span> <span m='220880'>that</span> <span
  m='221030'>makes</span> <span m='221230'>their</span> <span
  m='221380'>degrees</span> <span m='221870'>lower,</span> <span
  m='222370'>and</span> <span m='222600'>then</span> <span m='222850'>we</span>
  <span m='222950'>just</span> <span m='223090'>add</span> <span
  m='223320'>them.</span> <span m='224310'>Life</span> <span
  m='224530'>is</span> <span m='224660'>a</span> <span m='224720'>little</span>
  <span m='224970'>bit</span> <span m='225100'>simpler.</span> <span
  m='227330'>So</span> <span m='227640'>OK.</span> </p><p><span
  m='228990'>So</span> <span m='229150'>this</span> <span
  m='230000'>process,</span> <span m='230390'>using</span> <span
  m='230680'>the</span> <span m='230760'>divergence</span> <span
  m='231310'>theorem,</span> <span m='231730'>is</span> <span
  m='231960'>going</span> <span m='232050'>to</span> <span
  m='232140'>make</span> <span m='234090'>our</span> <span
  m='234280'>lives</span> <span m='234560'>easier.</span> <span
  m='234690'>It's</span> <span m='234980'>going</span> <span
  m='235110'>to</span> <span m='235170'>make</span> <span m='235380'>this</span>
  <span m='236630'>nasty</span> <span m='237200'>surface</span> <span
  m='237590'>integral</span> <span m='238140'>into</span> <span
  m='238450'>an</span> <span m='238570'>easy</span> <span m='238870'>to</span>
  <span m='238990'>compute</span> <span m='240060'>triple</span> <span
  m='240410'>integral.</span> <span m='240860'>So</span> <span
  m='241220'>let's</span> <span m='241450'>see</span> <span
  m='241650'>actually</span> <span m='242110'>how</span> <span
  m='242280'>it</span> <span m='242350'>does.</span> <span m='242580'>So</span>
  <span m='243090'>let's</span> <span m='243300'>compute</span> <span
  m='243690'>div</span> <span m='243840'>F</span> <span m='244250'>first.</span>
  <span m='245210'>So</span> <span m='245340'>we</span> <span
  m='245440'>know</span> <span m='245560'>what</span> <span
  m='245680'>the</span> <span m='245750'>integrand</span> <span
  m='246330'>is.</span> <span m='249500'>All</span> <span
  m='249680'>right.</span> </p><p><span m='250490'>So</span> <span
  m='251030'>we</span> <span m='251150'>need</span> <span m='251280'>to</span>
  <span m='251380'>look</span> <span m='251550'>at</span> <span
  m='251630'>the</span> <span m='251700'>components</span> <span
  m='252200'>of</span> <span m='252300'>F,</span> <span m='253360'>and</span>
  <span m='253640'>so</span> <span m='253730'>we</span> <span
  m='253820'>need</span> <span m='253990'>to</span> <span m='254080'>take</span>
  <span m='254680'>the</span> <span m='254790'>partial</span> <span
  m='255260'>of</span> <span m='255390'>the</span> <span m='255460'>first</span>
  <span m='255880'>one</span> <span m='256120'>with</span> <span
  m='256260'>respect</span> <span m='256690'>to</span> <span
  m='256915'>x.</span> <span m='257140'>So</span> <span m='257220'>that's</span>
  <span m='257290'>x</span> <span m='257690'>to</span> <span
  m='257760'>the</span> <span m='257830'>fourth</span> <span m='258130'>y</span>
  <span m='258490'>with</span> <span m='258610'>respect</span> <span
  m='258990'>to</span> <span m='259220'>x.</span> <span m='259620'>So</span>
  <span m='260280'>put</span> <span m='260500'>that</span> <span
  m='260690'>down</span> <span m='260940'>over</span> <span
  m='261080'>here.</span> <span m='261240'>That's</span> <span
  m='261490'>4</span> <span m='262590'>x</span> <span m='263020'>cubed</span>
  <span m='263610'>y.</span> <span m='264090'>We</span> <span
  m='264250'>just</span> <span m='264440'>treat</span> <span m='264720'>y</span>
  <span m='264930'>as</span> <span m='265040'>a</span> <span
  m='265150'>constant.</span> </p><p><span m='266020'>OK,</span> <span
  m='266310'>so</span> <span m='266430'>now,</span> <span m='266550'>we</span>
  <span m='266650'>come</span> <span m='266840'>back</span> <span
  m='267050'>and</span> <span m='267140'>we</span> <span m='267200'>need</span>
  <span m='267260'>to</span> <span m='267380'>look</span> <span
  m='267500'>at</span> <span m='267560'>the</span> <span
  m='267630'>second</span> <span m='268040'>one.</span> <span
  m='268390'>So</span> <span m='268550'>it's</span> <span
  m='268710'>minus</span> <span m='269160'>2</span> <span m='269370'>x</span>
  <span m='269700'>cubed</span> <span m='270030'>y</span> <span
  m='270310'>squared.</span> <span m='271130'>And</span> <span
  m='271320'>it's</span> <span m='271420'>the</span> <span
  m='271510'>second</span> <span m='271860'>one.</span> <span
  m='272000'>We</span> <span m='272100'>take</span> <span m='272270'>its</span>
  <span m='272340'>partial</span> <span m='272720'>with</span> <span
  m='272830'>respect</span> <span m='273240'>to</span> <span
  m='273300'>y.</span> <span m='274260'>So</span> <span m='274540'>OK.</span>
  <span m='274780'>So</span> <span m='274900'>that's</span> <span
  m='275060'>going</span> <span m='275150'>to</span> <span m='275240'>be</span>
  <span m='275360'>minus</span> <span m='275830'>2</span> <span
  m='276010'>x</span> <span m='276510'>cubed</span> <span
  m='277010'>times</span> <span m='277350'>2y.</span> <span m='278300'>So</span>
  <span m='278440'>that's</span> <span m='278620'>going</span> <span
  m='278695'>to</span> <span m='278770'>be</span> <span m='278870'>minus</span>
  <span m='279830'>4</span> <span m='280800'>x</span> <span
  m='281460'>cubed</span> <span m='282180'>y.</span> </p><p><span
  m='283360'>And</span> <span m='283700'>then</span> <span m='284550'>we</span>
  <span m='284740'>come</span> <span m='284900'>back</span> <span
  m='285080'>and</span> <span m='285170'>we</span> <span m='285250'>look</span>
  <span m='285400'>at</span> <span m='285460'>the</span> <span
  m='285550'>last</span> <span m='285920'>component.</span> <span
  m='286320'>And</span> <span m='286452'>that's</span> <span m='286585'>z</span>
  <span m='286850'>squared.</span> <span m='287670'>And</span> <span
  m='287790'>so</span> <span m='287870'>we</span> <span m='287940'>need</span>
  <span m='288100'>to</span> <span m='288160'>take</span> <span
  m='288320'>its</span> <span m='288370'>partial</span> <span
  m='288830'>with</span> <span m='288960'>respect</span> <span
  m='289090'>to</span> <span m='289350'>z.</span> <span m='290090'>So</span>
  <span m='290230'>in</span> <span m='290320'>this</span> <span
  m='290480'>case,</span> <span m='290760'>that's</span> <span
  m='291000'>just</span> <span m='291260'>2z,</span> <span m='291460'>and</span>
  <span m='291820'>so</span> <span m='291920'>we</span> <span
  m='292010'>add</span> <span m='292240'>that</span> <span m='292430'>on</span>
  <span m='292620'>as</span> <span m='292810'>well.</span> <span
  m='293000'>Plus</span> <span m='293790'>2z.</span> </p><p><span
  m='295110'>And</span> <span m='295300'>in</span> <span m='295410'>this</span>
  <span m='295650'>case,</span> <span m='296150'>not</span> <span
  m='296480'>only</span> <span m='297020'>are</span> <span
  m='297250'>these</span> <span m='297460'>polynomials</span> <span
  m='298150'>simpler</span> <span m='299370'>than</span> <span
  m='299475'>the</span> <span m='299580'>coordinates</span> <span
  m='300110'>of</span> <span m='300310'>F</span> <span m='300570'>that</span>
  <span m='300830'>we</span> <span m='300940'>had,</span> <span
  m='301470'>but</span> <span m='301950'>in</span> <span m='302120'>fact,</span>
  <span m='303640'>we've</span> <span m='303810'>got</span> <span
  m='303980'>some</span> <span m='304090'>simplification</span> <span
  m='304500'>here.</span> <span m='304970'>Life</span> <span
  m='305810'>gets</span> <span m='306080'>really,</span> <span
  m='306430'>really</span> <span m='306750'>simple.</span> <span
  m='307600'>So</span> <span m='307695'>in</span> <span m='307790'>fact,</span>
  <span m='308080'>this</span> <span m='308225'>is</span> <span
  m='308370'>just</span> <span m='308560'>going</span> <span
  m='308640'>to</span> <span m='308720'>work</span> <span m='308930'>out</span>
  <span m='309040'>to</span> <span m='309140'>2z.</span> <span
  m='310720'>So</span> <span m='310930'>the</span> <span
  m='311060'>divergence</span> <span m='311450'>here</span> <span
  m='312210'>is</span> <span m='312420'>very</span> <span
  m='312700'>simple</span> <span m='313020'>compared</span> <span
  m='313390'>with</span> <span m='313510'>the</span> <span
  m='313600'>function</span> <span m='313805'>F.</span> <span
  m='314010'>More</span> <span m='314320'>simple</span> <span
  m='314670'>than</span> <span m='314810'>we</span> <span m='315210'>have</span>
  <span m='315350'>a</span> <span m='315430'>right</span> <span
  m='315760'>to</span> <span m='315900'>expect,</span> <span
  m='317210'>but</span> <span m='318320'>in</span> <span m='318490'>any</span>
  <span m='318650'>case,</span> <span m='319590'>good.</span> <span
  m='319980'>It's</span> <span m='320170'>nice</span> <span m='320420'>to</span>
  <span m='320550'>work</span> <span m='320906'>with.</span> <span
  m='322830'>OK.</span> <span m='323450'>So</span> <span
  m='323610'>that's</span> <span m='323890'>the</span> <span
  m='323950'>divergence.</span> </p><p><span m='327370'>So</span> <span
  m='327620'>I'm</span> <span m='327700'>going</span> <span m='327765'>to</span>
  <span m='327830'>write,</span> <span m='327970'>this</span> <span
  m='328110'>is</span> <span m='328240'>the</span> <span m='328320'>flux.</span>
  <span m='329320'>These</span> <span m='329750'>integrals</span> <span
  m='330220'>that</span> <span m='330395'>we're</span> <span
  m='330570'>interested</span> <span m='330960'>in.</span> <span
  m='331670'>This</span> <span m='331780'>surface</span> <span
  m='332210'>integral,</span> <span m='333070'>and</span> <span
  m='333250'>then</span> <span m='333520'>by</span> <span m='333630'>the</span>
  <span m='333740'>divergence</span> <span m='334600'>theorem,</span> <span
  m='334680'>it's</span> <span m='334790'>the</span> <span
  m='334900'>same</span> <span m='334950'>as</span> <span m='335000'>this</span>
  <span m='335100'>triple</span> <span m='335390'>integral.</span> <span
  m='336250'>So</span> <span m='336490'>the</span> <span
  m='336580'>divergence</span> <span m='337290'>is</span> <span
  m='337570'>this</span> <span m='337820'>2z.</span> </p><p><span
  m='339130'>So</span> <span m='339310'>the</span> <span m='339410'>flux</span>
  <span m='340210'>is</span> <span m='340500'>what</span> <span
  m='340690'>I</span> <span m='340750'>get</span> <span m='340990'>when</span>
  <span m='341100'>I</span> <span m='341180'>just</span> <span
  m='341360'>put</span> <span m='341540'>that</span> <span m='341680'>in</span>
  <span m='341780'>here.</span> <span m='341960'>So</span> <span
  m='342100'>flux</span> <span m='344680'>is</span> <span
  m='346200'>equal</span> <span m='346480'>to</span> <span m='346580'>the</span>
  <span m='346680'>triple</span> <span m='347050'>integral</span> <span
  m='349400'>over</span> <span m='349710'>our</span> <span
  m='349880'>solid</span> <span m='350580'>of</span> <span m='352500'>2z</span>
  <span m='353990'>dV.</span> <span m='354970'>OK,</span> <span
  m='355220'>so</span> <span m='355590'>I've</span> <span m='355780'>left</span>
  <span m='356020'>some</span> <span m='356180'>stuff</span> <span
  m='356440'>out</span> <span m='356620'>of</span> <span m='356710'>this.</span>
  <span m='357810'>Because</span> <span m='358040'>I'm</span> <span
  m='358170'>going</span> <span m='358260'>to</span> <span
  m='358350'>start</span> <span m='360140'>writing</span> <span
  m='360530'>down</span> <span m='361040'>the</span> <span
  m='361140'>bounds</span> <span m='361630'>and</span> <span
  m='361910'>writing</span> <span m='362270'>this</span> <span
  m='362430'>down</span> <span m='362650'>as</span> <span m='362755'>an</span>
  <span m='362860'>iterated</span> <span m='363290'>integral</span> <span
  m='363710'>now.</span> <span m='365840'>OK.</span> </p><p><span
  m='366070'>So</span> <span m='366520'>we</span> <span m='366620'>have</span>
  <span m='366710'>to</span> <span m='366800'>choose</span> <span
  m='368200'>some</span> <span m='368440'>coordinate</span> <span
  m='368830'>system</span> <span m='369190'>in</span> <span
  m='369270'>which</span> <span m='369520'>to</span> <span
  m='370140'>integrate</span> <span m='370680'>over</span> <span
  m='370900'>this</span> <span m='371670'>solid.</span> <span
  m='372620'>And</span> <span m='372800'>so</span> <span m='373910'>we</span>
  <span m='374020'>have</span> <span m='374140'>three</span> <span
  m='374450'>kinds</span> <span m='374690'>of</span> <span
  m='374780'>natural</span> <span m='375180'>choices</span> <span
  m='375630'>that</span> <span m='375740'>we</span> <span
  m='375850'>always</span> <span m='376620'>look</span> <span
  m='376820'>back</span> <span m='377070'>to.</span> <span
  m='377230'>There</span> <span m='377560'>are</span> <span
  m='377890'>rectangular</span> <span m='378500'>coordinates</span> <span
  m='378780'>and</span> <span m='379080'>cylindrical</span> <span
  m='379630'>coordinates</span> <span m='379880'>and</span> <span
  m='380210'>spherical</span> <span m='380440'>coordinates.</span> <span
  m='381970'>So</span> <span m='382150'>spherical</span> <span
  m='382660'>coordinates</span> <span m='383090'>seem</span> <span
  m='383370'>pretty</span> <span m='383600'>clearly</span> <span
  m='384020'>inappropriate.</span> <span m='385700'>Rectangular</span> <span
  m='386560'>and</span> <span m='386720'>cylindrical?</span> <span
  m='387220'>You</span> <span m='387360'>know,</span> <span
  m='387990'>you</span> <span m='388240'>could</span> <span
  m='388380'>try</span> <span m='388610'>and</span> <span m='388730'>do</span>
  <span m='388840'>it</span> <span m='388960'>in</span> <span
  m='389050'>rectangular.</span> <span m='390470'>It's</span> <span
  m='390690'>not</span> <span m='391240'>horrible.</span> <span
  m='391890'>But</span> <span m='392380'>this</span> <span m='392570'>is</span>
  <span m='392710'>a</span> <span m='392800'>cylinder,</span> <span
  m='393550'>right?</span> <span m='393950'>I</span> <span
  m='394050'>mean,</span> <span m='394220'>it's</span> <span
  m='394630'>crying</span> <span m='395130'>out</span> <span
  m='395550'>for</span> <span m='395730'>us</span> <span m='395860'>to</span>
  <span m='396000'>use</span> <span m='396280'>cylindrical</span> <span
  m='396760'>coordinates.</span> <span m='397910'>So</span> <span
  m='398070'>let's</span> <span m='398290'>use</span> <span
  m='398510'>cylindrical</span> <span m='398940'>coordinates.</span>
  </p><p><span m='399350'>So</span> <span m='399625'>we're</span> <span
  m='399680'>going</span> <span m='399760'>to</span> <span m='399840'>use</span>
  <span m='400020'>cylindrical</span> <span m='400390'>coordinates.</span> <span
  m='400700'>So</span> <span m='401300'>to</span> <span m='401400'>get</span>
  <span m='401880'>dV</span> <span m='403180'>we</span> <span
  m='403310'>need</span> <span m='403480'>a</span> <span m='403590'>z,</span>
  <span m='403910'>an</span> <span m='404000'>r,</span> <span
  m='404260'>and</span> <span m='404330'>a</span> <span m='404390'>theta,</span>
  <span m='405480'>but</span> <span m='405600'>remember</span> <span
  m='406250'>there's</span> <span m='406450'>this</span> <span
  m='406600'>extra</span> <span m='407180'>factor</span> <span
  m='407390'>of</span> <span m='407550'>r.</span> <span m='407800'>So</span>
  <span m='407910'>it's</span> <span m='408010'>going</span> <span
  m='408130'>to</span> <span m='408200'>be</span> <span m='408290'>2z</span>
  <span m='408750'>times</span> <span m='411700'>r</span> <span
  m='412990'>dz</span> <span m='414420'>dr</span> <span m='415030'>d</span>
  <span m='415510'>theta.</span> <span m='416250'>Right?</span> <span
  m='416480'>This</span> <span m='416670'>is</span> <span m='416850'>dV.</span>
  <span m='417580'>This</span> <span m='417810'>r</span> <span
  m='418190'>dz</span> <span m='418510'>dr</span> <span m='418830'>d</span>
  <span m='418960'>theta</span> <span m='419700'>part.</span> <span
  m='420950'>So</span> <span m='421180'>that's</span> <span
  m='421410'>what</span> <span m='421980'>dV</span> <span m='422520'>is</span>
  <span m='422770'>when</span> <span m='422910'>we</span> <span
  m='423030'>use</span> <span m='423330'>cylindrical</span> <span
  m='423790'>coordinates.</span> </p><p><span m='424370'>OK,</span> <span
  m='424630'>so</span> <span m='424770'>now</span> <span m='425490'>let's</span>
  <span m='425680'>figure</span> <span m='425835'>out</span> <span
  m='425990'>what</span> <span m='426120'>the</span> <span
  m='426200'>bounds</span> <span m='426570'>are.</span> <span
  m='426840'>So</span> <span m='426960'>let's</span> <span m='427080'>go</span>
  <span m='427700'>look</span> <span m='427930'>at</span> <span
  m='428130'>the</span> <span m='428230'>cylinder</span> <span
  m='428710'>that</span> <span m='428860'>we</span> <span m='428980'>had</span>
  <span m='429900'>over</span> <span m='430210'>here.</span> <span
  m='433220'>So</span> <span m='433390'>it's</span> <span
  m='433500'>bounded</span> <span m='434010'>between</span> <span
  m='435230'>z</span> <span m='435590'>equals</span> <span m='436060'>0</span>
  <span m='436380'>at</span> <span m='436700'>the</span> <span
  m='436850'>bottom</span> <span m='437210'>surface</span> <span
  m='437375'>and</span> <span m='437540'>z</span> <span m='437770'>equals</span>
  <span m='438110'>h</span> <span m='438370'>at</span> <span
  m='438430'>the</span> <span m='438490'>top</span> <span
  m='438750'>surface.</span> <span m='439610'>OK.</span> <span
  m='440270'>So</span> <span m='440460'>that's</span> <span
  m='440690'>easy</span> <span m='441050'>enough.</span> <span
  m='442380'>That's</span> <span m='442720'>what</span> <span
  m='442900'>the</span> <span m='442990'>bounds</span> <span
  m='443280'>on</span> <span m='443630'>z</span> <span m='443805'>are.</span>
  <span m='443980'>So</span> <span m='444430'>let's</span> <span
  m='444640'>put</span> <span m='444820'>those</span> <span
  m='445050'>in.</span> <span m='445760'>So</span> <span m='445980'>z</span>
  <span m='446640'>is</span> <span m='446870'>the</span> <span
  m='447090'>innermost</span> <span m='447530'>one,</span> <span
  m='448050'>so</span> <span m='448230'>that's</span> <span
  m='448480'>going</span> <span m='448850'>from</span> <span m='449950'>0</span>
  <span m='450880'>to</span> <span m='452270'>h.</span> <span
  m='453380'>OK.</span> </p><p><span m='453650'>How</span> <span
  m='453880'>about</span> <span m='454320'>the</span> <span
  m='454390'>next</span> <span m='454650'>one?</span> <span m='454790'>So</span>
  <span m='454845'>the</span> <span m='454900'>next</span> <span
  m='455120'>one</span> <span m='455260'>is</span> <span m='455500'>r.</span>
  <span m='456000'>So</span> <span m='456120'>let's</span> <span
  m='456820'>go</span> <span m='456920'>back</span> <span m='457120'>over</span>
  <span m='457280'>here.</span> <span m='457470'>So</span> <span
  m='457700'>r</span> <span m='459790'>is</span> <span m='459960'>the</span>
  <span m='460080'>radius</span> <span m='460470'>here</span> <span
  m='460630'>after</span> <span m='461470'>we</span> <span
  m='462890'>project</span> <span m='463320'>it</span> <span
  m='463420'>down.</span> <span m='464080'>And</span> <span m='464420'>we</span>
  <span m='464550'>just</span> <span m='464700'>get</span> <span
  m='464830'>the</span> <span m='464920'>circle</span> <span
  m='465720'>of</span> <span m='465960'>radius</span> <span
  m='466370'>big</span> <span m='466620'>R</span> <span
  m='467000'>centered</span> <span m='467580'>at</span> <span
  m='467710'>the</span> <span m='467780'>origin.</span> <span
  m='468160'>So</span> <span m='468320'>little</span> <span m='468660'>r</span>
  <span m='469080'>is</span> <span m='469240'>going</span> <span
  m='469470'>from</span> <span m='469630'>0</span> <span m='469920'>to</span>
  <span m='470020'>big</span> <span m='470200'>R.</span> </p><p><span
  m='471110'>And</span> <span m='471570'>theta</span> <span m='472510'>is</span>
  <span m='472680'>the</span> <span m='472770'>circle.</span> <span
  m='473220'>It's</span> <span m='473260'>the</span> <span
  m='473300'>whole</span> <span m='473625'>circle.</span> <span
  m='473950'>So</span> <span m='474005'>theta</span> <span m='474060'>is</span>
  <span m='474260'>going</span> <span m='474450'>from</span> <span
  m='474620'>0</span> <span m='474940'>to</span> <span m='475140'>2*pi.</span>
  </p><p><span m='475690'>So</span> <span m='476310'>cylinders</span> <span
  m='476700'>are</span> <span m='477090'>really</span> <span
  m='477360'>easy</span> <span m='477650'>to</span> <span
  m='478190'>describe</span> <span m='478640'>what</span> <span
  m='478760'>they</span> <span m='478870'>look</span> <span
  m='479060'>like</span> <span m='479260'>in</span> <span
  m='479610'>cylindrical</span> <span m='479860'>coordinates.</span> <span
  m='480610'>So</span> <span m='480760'>let's</span> <span m='480940'>put</span>
  <span m='481110'>those</span> <span m='481280'>in.</span> <span
  m='481390'>So</span> <span m='481550'>little</span> <span m='482030'>r</span>
  <span m='482650'>is</span> <span m='482830'>going</span> <span
  m='483190'>from</span> <span m='483540'>0</span> <span m='484680'>to</span>
  <span m='484925'>big</span> <span m='485170'>R,</span> <span
  m='486000'>and</span> <span m='486350'>theta</span> <span m='487240'>is</span>
  <span m='487450'>going</span> <span m='487790'>from</span> <span
  m='487980'>0</span> <span m='489040'>to</span> <span m='489530'>2*pi.</span>
  <span m='492720'>OK.</span> <span m='494260'>Wonderful.</span> </p><p><span
  m='495270'>Now</span> <span m='495520'>we</span> <span m='495610'>just</span>
  <span m='495730'>have</span> <span m='495820'>to</span> <span
  m='495880'>compute</span> <span m='496240'>this,</span> <span
  m='496580'>right?</span> <span m='497480'>We've</span> <span
  m='497900'>got</span> <span m='498290'>our</span> <span m='498400'>flux</span>
  <span m='498840'>is</span> <span m='498990'>this</span> <span
  m='499130'>triple</span> <span m='499420'>integral.</span> <span
  m='499930'>So</span> <span m='500110'>let's</span> <span
  m='500250'>compute</span> <span m='500410'>it.</span> <span
  m='500850'>Let's</span> <span m='501080'>walk</span> <span
  m='501350'>over</span> <span m='501520'>to</span> <span m='501590'>this</span>
  <span m='501730'>little</span> <span m='501970'>bit</span> <span
  m='502120'>of</span> <span m='503140'>empty</span> <span
  m='503450'>board</span> <span m='503750'>space.</span> </p><p><span
  m='503990'>OK,</span> <span m='504310'>so</span> <span m='504430'>we</span>
  <span m='504530'>have</span> <span m='504645'>an</span> <span
  m='504760'>iterated</span> <span m='505080'>integral.</span> <span
  m='505830'>So</span> <span m='506300'>let's</span> <span m='506560'>do</span>
  <span m='506720'>it.</span> <span m='508280'>So</span> <span
  m='508520'>the</span> <span m='508800'>inner</span> <span
  m='509870'>integral</span> <span m='510640'>is</span> <span
  m='512110'>the</span> <span m='512570'>integral</span> <span
  m='512990'>from</span> <span m='513230'>0</span> <span m='513730'>to</span>
  <span m='514230'>h</span> <span m='514680'>of</span> <span
  m='515774'>2*z*r*dz.</span> <span m='518770'>Well,</span> <span
  m='518960'>that's</span> <span m='519140'>not</span> <span
  m='519310'>that</span> <span m='519490'>bad.</span> <span
  m='519750'>That's</span> <span m='520010'>equal</span> <span
  m='520370'>to--</span> <span m='520890'>r</span> <span m='521470'>is</span>
  <span m='521630'>a</span> <span m='521750'>constant.</span> <span
  m='522690'>So</span> <span m='522820'>it's</span> <span
  m='522970'>equal</span> <span m='523340'>to</span> <span m='524500'>r</span>
  <span m='524990'>z</span> <span m='525380'>squared</span> <span
  m='526510'>as</span> <span m='526630'>z</span> <span m='526990'>goes</span>
  <span m='527350'>between</span> <span m='528410'>0</span> <span
  m='528830'>and</span> <span m='529080'>h.</span> <span m='530520'>It's</span>
  <span m='530780'>dz,</span> <span m='531140'>so</span> <span
  m='531250'>z</span> <span m='531470'>is</span> <span m='531730'>going</span>
  <span m='531980'>from</span> <span m='532140'>0</span> <span
  m='532315'>to</span> <span m='532490'>h.</span> </p><p><span
  m='532950'>So</span> <span m='533840'>we</span> <span m='533960'>plug</span>
  <span m='534270'>in,</span> <span m='534840'>and</span> <span
  m='535020'>we</span> <span m='535130'>just</span> <span m='535490'>get</span>
  <span m='536070'>h</span> <span m='536380'>squared</span> <span
  m='536990'>r</span> <span m='538310'>minus</span> <span m='538870'>0.</span>
  <span m='539190'>So</span> <span m='539340'>just</span> <span
  m='539580'>h</span> <span m='539820'>squared</span> <span m='540130'>r.</span>
  <span m='540860'>OK.</span> <span m='541150'>So</span> <span
  m='541270'>now</span> <span m='541470'>let's</span> <span m='541590'>do</span>
  <span m='541710'>the</span> <span m='541830'>middle</span> <span
  m='542080'>integral.</span> </p><p><span m='544740'>So</span> <span
  m='544830'>the</span> <span m='544920'>middle</span> <span
  m='545210'>integral</span> <span m='545740'>is</span> <span
  m='545940'>the</span> <span m='546020'>integral</span> <span
  m='548120'>from</span> <span m='548380'>0</span> <span m='548890'>to</span>
  <span m='549060'>big</span> <span m='549370'>R</span> <span
  m='549980'>d</span> <span m='550320'>little</span> <span m='550700'>r</span>
  <span m='551890'>of</span> <span m='552360'>the</span> <span
  m='552520'>inner</span> <span m='552710'>integral.</span> <span
  m='553550'>So</span> <span m='554910'>this</span> <span m='555110'>is</span>
  <span m='555290'>the</span> <span m='555370'>integral</span> <span
  m='556320'>from</span> <span m='556660'>0</span> <span m='558110'>to</span>
  <span m='558240'>big</span> <span m='558630'>R</span> <span
  m='559570'>of</span> <span m='559870'>the</span> <span m='560130'>inner</span>
  <span m='560310'>integral,</span> <span m='561090'>which</span> <span
  m='561330'>was</span> <span m='561760'>h</span> <span
  m='562080'>squared</span> <span m='562540'>little</span> <span
  m='562870'>r,</span> <span m='564280'>d</span> <span m='564460'>little</span>
  <span m='564760'>r.</span> <span m='565260'>OK.</span> <span
  m='565930'>And</span> <span m='566110'>that's</span> <span
  m='566290'>not</span> <span m='566460'>that</span> <span m='566620'>bad</span>
  <span m='566800'>either.</span> <span m='567020'>So</span> <span
  m='567190'>h</span> <span m='567500'>is</span> <span m='567630'>just</span>
  <span m='567830'>a</span> <span m='567880'>constant.</span> <span
  m='568600'>So</span> <span m='568860'>this</span> <span m='569040'>is</span>
  <span m='569150'>equal</span> <span m='569335'>to</span> <span
  m='569520'>1/2</span> <span m='571070'>h</span> <span
  m='571490'>squared</span> <span m='572560'>r</span> <span
  m='573080'>squared</span> <span m='574660'>from</span> <span
  m='574980'>r</span> <span m='575350'>equals</span> <span m='575780'>0</span>
  <span m='576770'>to</span> <span m='576900'>big</span> <span
  m='577220'>R.</span> <span m='577880'>And</span> <span m='578100'>so</span>
  <span m='578250'>that's</span> <span m='579390'>1/2</span> <span
  m='580700'>h</span> <span m='580960'>squared</span> <span
  m='582040'>big</span> <span m='582270'>R</span> <span
  m='582560'>squared.</span> <span m='583810'>That's</span> <span
  m='584140'>the</span> <span m='584450'>middle</span> <span
  m='584770'>integral.</span> </p><p><span m='585230'>So</span> <span
  m='585500'>the</span> <span m='585720'>outer</span> <span
  m='586050'>one</span> <span m='587660'>now.</span> <span m='588230'>OK.</span>
  <span m='588982'>So</span> <span m='589360'>let's</span> <span
  m='589650'>go</span> <span m='589780'>back</span> <span m='590010'>and</span>
  <span m='590120'>look.</span> <span m='590290'>So</span> <span
  m='590470'>we're</span> <span m='590600'>doing</span> <span
  m='591280'>d</span> <span m='591710'>theta</span> <span m='592570'>as</span>
  <span m='592760'>theta</span> <span m='593120'>goes</span> <span
  m='593340'>from</span> <span m='593560'>0</span> <span m='593880'>to</span>
  <span m='593990'>2*pi</span> <span m='594880'>of</span> <span
  m='595050'>whatever</span> <span m='595480'>the</span> <span
  m='595620'>middle</span> <span m='595880'>integral</span> <span
  m='596350'>was.</span> <span m='597340'>So</span> <span m='597590'>it's</span>
  <span m='597790'>the</span> <span m='597970'>integral</span> <span
  m='599190'>from</span> <span m='599460'>0</span> <span m='600620'>to</span>
  <span m='600750'>2*pi</span> <span m='602040'>of</span> <span
  m='602720'>whatever</span> <span m='603140'>the</span> <span
  m='603240'>value</span> <span m='603390'>of</span> <span m='603540'>the</span>
  <span m='603640'>middle</span> <span m='603840'>integral</span> <span
  m='604140'>was.</span> <span m='604350'>So</span> <span m='604490'>this</span>
  <span m='604650'>is</span> <span m='605250'>1/2</span> <span
  m='606800'>h</span> <span m='607120'>squared</span> <span
  m='607720'>big</span> <span m='607970'>R</span> <span
  m='608260'>squared</span> <span m='609470'>d</span> <span
  m='609670'>theta.</span> <span m='610110'>And</span> <span
  m='610260'>this</span> <span m='610380'>is</span> <span m='610490'>all</span>
  <span m='610790'>just</span> <span m='611000'>constant</span> <span
  m='611300'>with</span> <span m='611600'>respect</span> <span
  m='611840'>to</span> <span m='612080'>theta.</span> <span m='612670'>So</span>
  <span m='612880'>that's</span> <span m='613570'>going</span> <span
  m='613695'>to</span> <span m='613820'>be</span> <span m='614540'>just</span>
  <span m='615560'>pi</span> <span m='616990'>h</span> <span
  m='617320'>squared</span> <span m='618010'>r</span> <span
  m='618270'>squared.</span> <span m='618950'>You're</span> <span
  m='619340'>just</span> <span m='619520'>multiplying</span> <span
  m='619890'>it</span> <span m='620120'>by</span> <span m='620420'>2*pi.</span>
  <span m='621150'>All</span> <span m='621310'>right.</span> <span
  m='621470'>So</span> <span m='621590'>pi</span> <span m='621930'>h</span>
  <span m='622180'>squared</span> <span m='622490'>r</span> <span
  m='622670'>squared.</span> <span m='623070'>So</span> <span
  m='623143'>this</span> <span m='623216'>is</span> <span m='623290'>our</span>
  <span m='623400'>final</span> <span m='623790'>answer.</span> </p><p><span
  m='625010'>Let's</span> <span m='625200'>just</span> <span
  m='625430'>quickly</span> <span m='626100'>recap</span> <span
  m='626620'>what</span> <span m='626780'>we</span> <span m='626920'>did.</span>
  <span m='627570'>We</span> <span m='627820'>had</span> <span
  m='628030'>to</span> <span m='628110'>compute</span> <span
  m='628620'>the</span> <span m='628720'>flux</span> <span m='629750'>of</span>
  <span m='629990'>this</span> <span m='630220'>field</span> <span
  m='630710'>F</span> <span m='631490'>through</span> <span
  m='632130'>the</span> <span m='632250'>surface</span> <span
  m='632820'>of</span> <span m='632970'>a</span> <span m='633040'>solid</span>
  <span m='635360'>cylinder.</span> <span m='637190'>And</span> <span
  m='637380'>so</span> <span m='637930'>we</span> <span m='638140'>had</span>
  <span m='638680'>options.</span> <span m='639260'>We</span> <span
  m='639400'>could</span> <span m='639620'>do</span> <span m='639770'>it</span>
  <span m='640400'>directly</span> <span m='641180'>by</span> <span
  m='641380'>trying</span> <span m='641660'>to</span> <span
  m='641720'>compute</span> <span m='642080'>the</span> <span
  m='642170'>surface</span> <span m='642520'>integrals,</span> <span
  m='643080'>but</span> <span m='643280'>in</span> <span m='643380'>this</span>
  <span m='643550'>case,</span> <span m='644160'>life</span> <span
  m='644450'>was</span> <span m='644560'>a</span> <span m='644640'>lot</span>
  <span m='644940'>easier</span> <span m='645510'>if</span> <span
  m='645680'>we</span> <span m='645780'>applied</span> <span
  m='646070'>the</span> <span m='646240'>divergence</span> <span
  m='646760'>theorem.</span> <span m='647560'>So</span> <span
  m='647750'>the</span> <span m='647980'>divergence</span> <span
  m='648420'>theorem</span> <span m='648650'>says</span> <span
  m='648920'>that</span> <span m='649010'>the</span> <span
  m='649400'>flux--</span> <span m='650120'>which</span> <span
  m='650280'>is</span> <span m='650390'>equal</span> <span m='650555'>to</span>
  <span m='650720'>this</span> <span m='650810'>surface</span> <span
  m='651260'>integral--</span> <span m='652170'>can</span> <span
  m='652330'>also</span> <span m='652740'>be</span> <span
  m='652860'>written</span> <span m='653390'>as</span> <span
  m='653550'>the</span> <span m='653660'>triple</span> <span
  m='654010'>integral,</span> <span m='655120'>over</span> <span
  m='655450'>the</span> <span m='655670'>solid</span> <span
  m='656180'>region</span> <span m='656600'>bounded</span> <span
  m='656990'>by</span> <span m='657150'>the</span> <span
  m='657260'>surface,</span> <span m='659020'>of</span> <span
  m='659270'>the</span> <span m='659330'>divergence</span> <span
  m='659950'>of</span> <span m='660110'>the</span> <span
  m='660300'>field.</span> <span m='661490'>All</span> <span
  m='661630'>right.</span> </p><p><span m='662050'>And</span> <span
  m='662150'>so</span> <span m='662250'>in</span> <span m='662400'>our</span>
  <span m='662680'>case,</span> <span m='662850'>the</span> <span
  m='662950'>divergence</span> <span m='663540'>was</span> <span
  m='663750'>very</span> <span m='664000'>nice</span> <span
  m='664270'>and</span> <span m='664390'>simple,</span> <span
  m='665050'>and</span> <span m='666190'>the</span> <span
  m='666310'>solid</span> <span m='666760'>region</span> <span
  m='667220'>D</span> <span m='667680'>was</span> <span
  m='667970'>relatively</span> <span m='668630'>simpler</span> <span
  m='669020'>to</span> <span m='669160'>describe</span> <span
  m='669740'>than</span> <span m='669890'>its</span> <span
  m='670080'>surface</span> <span m='671390'>that</span> <span
  m='672010'>bounds</span> <span m='672300'>it,</span> <span
  m='672590'>S.</span> <span m='673620'>So</span> <span m='673860'>this</span>
  <span m='674050'>is</span> <span m='674180'>why</span> <span
  m='674770'>we</span> <span m='674930'>think</span> <span m='675170'>of</span>
  <span m='675290'>the</span> <span m='675380'>divergence</span> <span
  m='675870'>theorem.</span> <span m='676290'>Because</span> <span
  m='676530'>the</span> <span m='676800'>divergence</span> <span
  m='677260'>of</span> <span m='677400'>the</span> <span m='677480'>field</span>
  <span m='677850'>is</span> <span m='677980'>easy</span> <span
  m='678280'>to</span> <span m='678370'>understand,</span> <span
  m='680890'>and</span> <span m='681060'>the</span> <span
  m='681720'>solid</span> <span m='682220'>is</span> <span
  m='682350'>easier</span> <span m='682710'>to</span> <span
  m='682810'>describe</span> <span m='683110'>than</span> <span
  m='683410'>its</span> <span m='683650'>surface.</span> <span
  m='684210'>So</span> <span m='684410'>those</span> <span m='684620'>are</span>
  <span m='684720'>both</span> <span m='685030'>things</span> <span
  m='685310'>that</span> <span m='685430'>make</span> <span m='685600'>us</span>
  <span m='685720'>think</span> <span m='685950'>to</span> <span
  m='686080'>use</span> <span m='686280'>the</span> <span
  m='686360'>divergence</span> <span m='686850'>theorem</span> <span
  m='687500'>for</span> <span m='687570'>a</span> <span
  m='687640'>problem</span> <span m='687970'>like</span> <span
  m='688150'>this.</span> </p><p><span m='689090'>So</span> <span
  m='689540'>then</span> <span m='689930'>by</span> <span m='690120'>the</span>
  <span m='690360'>divergence</span> <span m='690680'>theorem,</span> <span
  m='690950'>the</span> <span m='691030'>flux</span> <span m='691600'>is</span>
  <span m='691870'>just</span> <span m='693280'>that</span> <span
  m='693580'>triple</span> <span m='693880'>integral,</span> <span
  m='694500'>and</span> <span m='694660'>so</span> <span m='694790'>we</span>
  <span m='694920'>wrote</span> <span m='695140'>it</span> <span
  m='695220'>out</span> <span m='695380'>here.</span> <span m='695560'>We</span>
  <span m='695720'>were</span> <span m='695860'>integrating</span> <span
  m='696380'>over</span> <span m='696500'>a</span> <span
  m='696620'>cylinder.</span> <span m='697340'>So</span> <span
  m='697920'>a</span> <span m='698020'>natural</span> <span
  m='698410'>thing</span> <span m='698570'>to</span> <span m='698670'>do</span>
  <span m='698780'>is</span> <span m='698930'>use</span> <span
  m='699060'>cylindrical</span> <span m='699610'>coordinates.</span> <span
  m='700530'>And</span> <span m='700680'>then</span> <span m='700810'>we</span>
  <span m='700910'>computed</span> <span m='701710'>the</span> <span
  m='701820'>triple</span> <span m='702110'>integral</span> <span
  m='702750'>just</span> <span m='703030'>like</span> <span m='703250'>we</span>
  <span m='703380'>always</span> <span m='703730'>do.</span> <span
  m='704340'>I</span> <span m='704430'>did</span> <span m='704556'>it</span>
  <span m='704683'>in</span> <span m='704810'>three</span> <span
  m='705010'>steps:</span> <span m='705360'>inner,</span> <span
  m='706000'>middle,</span> <span m='706400'>and</span> <span
  m='706510'>outer.</span> <span m='706955'>You</span> <span
  m='707177'>don't</span> <span m='707400'>have</span> <span
  m='707570'>to</span> <span m='707670'>do</span> <span m='707730'>it</span>
  <span m='707790'>exactly</span> <span m='708340'>this</span> <span
  m='708500'>way</span> <span m='708670'>if</span> <span m='708780'>you</span>
  <span m='708850'>don't</span> <span m='708970'>want</span> <span
  m='709140'>to.</span> <span m='709280'>But</span> <span m='709460'>it</span>
  <span m='709930'>works</span> <span m='710170'>for</span> <span
  m='710330'>me.</span> <span m='712010'>OK.</span> <span m='712450'>And</span>
  <span m='712610'>we</span> <span m='712690'>got</span> <span
  m='712840'>our</span> <span m='712920'>final</span> <span
  m='713240'>answer:</span> <span m='713740'>pi</span> <span m='714150'>h</span>
  <span m='714410'>squared</span> <span m='715130'>r</span> <span
  m='715380'>squared.</span> </p><p><span m='716220'>I'll</span> <span
  m='716480'>stop</span> <span m='716800'>there.</span> </p>
embedded_media:
  - uid: 8c92074f141f1729b6331d3c4a099b3c
    parent_uid: faa0b05cc4a5b2e55ff56453d12c69c6
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: CCoTAyZ14XM
  - uid: da6bdb69ad8f24e39a2842172bd86b3f
    parent_uid: faa0b05cc4a5b2e55ff56453d12c69c6
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/CCoTAyZ14XM/default.jpg'
  - uid: 63bf8fd943dd38123dcb8c44815831ea
    parent_uid: faa0b05cc4a5b2e55ff56453d12c69c6
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_60_300k.mp4'
  - uid: 5e7b2c1e4c9c1ffbee968e374633f9ba
    parent_uid: faa0b05cc4a5b2e55ff56453d12c69c6
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/flux-divergence-theorem/id414355340?i=90322819
  - uid: 281fe6073dba2456a8313b0fd0d8e66a
    parent_uid: faa0b05cc4a5b2e55ff56453d12c69c6
    id: 3Play-3PlayYouTubeid-PDF
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: CCoTAyZ14XM
  - uid: 5979a0e7a16c9f7f66cf8a23bf47bc9a
    parent_uid: faa0b05cc4a5b2e55ff56453d12c69c6
    id: CCoTAyZ14XM.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-84-divergence-theorem/flux-and-the-divergence-theorem/CCoTAyZ14XM.srt
  - uid: c60369bb69f440d1de0c802e14236e36
    parent_uid: faa0b05cc4a5b2e55ff56453d12c69c6
    id: CCoTAyZ14XM.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/4.-triple-integrals-and-surface-integrals-in-3-space/part-b-flux-and-the-divergence-theorem/session-84-divergence-theorem/flux-and-the-divergence-theorem/CCoTAyZ14XM.pdf
  - uid: f1bc0a9e721af791c5ed4ef2bf397a8e
    parent_uid: faa0b05cc4a5b2e55ff56453d12c69c6
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 8820027fc796fb5a301e25c89759e764
    parent_uid: faa0b05cc4a5b2e55ff56453d12c69c6
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
