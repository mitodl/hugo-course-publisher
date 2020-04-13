---
title: Gradients - Composition
uid: 2a5313ba9c3d707ec0b5476851e78b07
parent_uid: 07dd5e0fe2b203b0b2685c1b278acc2a
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/session-44-example/gradients-composition
short_url: gradients-composition
inline_embed_id: 72618981gradients-composition84123646
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='0'>DAVID JORDAN:</span> <span m='6890'>Hello,</span> <span
  m='7590'>and</span> <span m='7940'>welcome</span> <span m='8230'>back
  to</span> <span m='8440'>recitation.</span> </p><p><span m='9980'>So</span>
  <span m='10210'>in</span> <span m='10370'>this</span> <span
  m='10540'>problem,</span> <span m='12320'>we're</span> <span
  m='12500'>considering</span> <span m='13030'>a</span> <span
  m='13090'>function</span> <span m='13630'>f of</span> <span
  m='14110'>three</span> <span m='14380'>variables,</span> <span m='15040'>f
  of</span> <span m='15410'>x,</span> <span m='15700'>y,</span> <span
  m='15940'>z,</span> <span m='17020'>and</span> <span m='17180'>it's</span>
  <span m='17320'>differentiable.</span> <span m='18970'>And</span> <span
  m='20910'>we're</span> <span m='21030'>not</span> <span m='21190'>told</span>
  <span m='21870'>a</span> <span m='22000'>formula</span> <span
  m='22450'>for</span> <span m='22570'>f.</span> <span m='22820'>We</span> <span
  m='22900'>just</span> <span m='23070'>know</span> <span m='23190'>that
  it's</span> <span m='23340'>differentiable</span> <span m='23840'>at</span>
  <span m='24120'>this</span> <span m='24730'>point</span> <span
  m='25160'>P,</span> <span m='26010'>which</span> <span m='26230'>is</span>
  <span m='26370'>1,</span> <span m='26830'>minus</span> <span
  m='27220'>1,</span> <span m='27400'>1,</span> <span m='28290'>and</span> <span
  m='29190'>we're</span> <span m='29400'>told</span> <span m='29770'>that</span>
  <span m='29890'>the</span> <span m='29990'>gradient</span> <span
  m='30650'>of</span> <span m='30750'>f</span> <span m='31040'>at</span> <span
  m='31330'>that</span> <span m='31570'>point</span> <span m='32050'>is</span>
  <span m='32250'>this</span> <span m='32460'>particular</span> <span
  m='32900'>vector</span> <span m='33200'>2i</span> <span m='33770'>plus</span>
  <span m='34120'>j</span> <span m='34410'>minus</span> <span
  m='34770'>3k,</span> <span m='35470'>at</span> <span m='35600'>that</span>
  <span m='35770'>point</span> <span m='36040'>P.</span> <span
  m='37480'>So</span> <span m='37670'>all</span> <span m='37790'>we</span> <span
  m='37890'>understand</span> <span m='38340'>about</span> <span
  m='38530'>f</span> <span m='38780'>is</span> <span m='39170'>how it</span>
  <span m='39320'>looks</span> <span m='39620'>around</span> <span m='39890'>the
  point</span> <span m='40205'>P.</span> </p><p><span m='42960'>Now,</span>
  <span m='43330'>we</span> <span m='43760'>also</span> <span
  m='44060'>have</span> <span m='44260'>this</span> <span
  m='44420'>relation</span> <span m='44910'>between</span> <span
  m='45230'>the</span> <span m='45300'>variables,</span> <span
  m='45690'>so</span> <span m='45850'>x,</span> <span m='46060'>y</span> <span
  m='46250'>and</span> <span m='46370'>z</span> <span m='46560'>aren't</span>
  <span m='47770'>unrelated.</span> <span m='48280'>They're</span> <span
  m='48740'>related</span> <span m='49080'>by</span> <span m='49210'>this</span>
  <span m='49710'>constraint</span> <span m='50240'>that</span> <span
  m='50330'>z</span> <span m='50640'>is</span> <span m='50880'>x</span> <span
  m='51110'>squared</span> <span m='51460'>plus</span> <span m='51700'>y</span>
  <span m='51960'>plus</span> <span m='52300'>1.</span> <span
  m='53750'>So</span> <span m='54400'>with</span> <span m='54640'>this</span>
  <span m='54830'>information,</span> <span m='55680'>we</span> <span
  m='55840'>want</span> <span m='56220'>to</span> <span m='56980'>compute
  the</span> <span m='57460'>gradient</span> <span m='57640'>of</span> <span
  m='57850'>a</span> <span m='57940'>new</span> <span m='58120'>function</span>
  <span m='58630'>g,</span> <span m='59460'>and</span> <span
  m='59590'>the</span> <span m='59650'>new</span> <span
  m='59770'>function</span> <span m='60220'>g</span> <span m='60870'>is</span>
  <span m='61130'>a</span> <span m='61190'>function</span> <span
  m='61520'>of</span> <span m='61630'>two</span> <span
  m='61870'>variables,</span> <span m='62870'>and</span> <span
  m='63440'>this</span> <span m='63860'>function</span> <span m='64280'>g</span>
  <span m='64610'>is</span> <span m='64780'>obtained</span> <span
  m='65140'>from</span> <span m='65910'>f</span> <span m='66590'>by</span> <span
  m='66740'>just</span> <span m='67550'>plugging</span> <span
  m='67990'>in</span> <span m='68190'>our</span> <span m='68430'>relation</span>
  <span m='68920'>for</span> <span m='69120'>y.</span> <span m='69590'>So</span>
  <span m='69730'>we</span> <span m='69850'>can</span> <span
  m='70160'>use</span> <span m='71130'>our</span> <span
  m='71250'>constraint</span> <span m='71720'>to</span> <span
  m='71920'>solve</span> <span m='72120'>for</span> <span m='72220'>y,</span>
  <span m='73000'>and</span> <span m='73280'>then</span> <span
  m='73660'>this</span> <span m='74380'>function</span> <span m='75360'>g</span>
  <span m='75750'>is</span> <span m='75940'>just</span> <span m='76320'>f</span>
  <span m='77360'>with</span> <span m='78030'>that</span> <span
  m='78310'>constraint</span> <span m='78790'>applied.</span> <span
  m='79730'>And</span> <span m='80020'>what</span> <span m='80130'>we</span>
  <span m='80220'>really</span> <span m='80420'>want</span> <span
  m='80570'>to</span> <span m='80630'>do</span> <span m='80770'>is</span> <span
  m='80890'>we</span> <span m='81200'>want to</span> <span m='81410'>find</span>
  <span m='81620'>the</span> <span m='81690'>gradient</span> <span
  m='82270'>of</span> <span m='82500'>g</span> <span m='83720'>at</span> <span
  m='85440'>the</span> <span m='85590'>point</span> <span m='86330'>(1,</span>
  <span m='86640'>1).</span> <span m='87750'>So</span> <span
  m='87920'>notice</span> <span m='88260'>that</span> <span
  m='89860'>when</span> <span m='90140'>g</span> <span m='90610'>is</span> <span
  m='90790'>equal</span> <span m='91110'>to</span> <span m='91260'>1,</span>
  <span m='91550'>1,</span> <span m='91930'>that</span> <span
  m='92110'>means</span> <span m='92450'>that--</span> <span
  m='93410'>sorry,</span> <span m='93660'>when</span> <span m='93790'>the</span>
  <span m='93910'>input</span> <span m='94300'>of</span> <span
  m='94440'>g</span> <span m='94680'>is</span> <span m='94910'>1,</span> <span
  m='95250'>1,</span> <span m='96020'>that</span> <span m='96210'>means</span>
  <span m='96510'>the</span> <span m='96610'>input</span> <span
  m='96980'>of</span> <span m='97070'>f</span> <span m='97800'>is</span> <span
  m='98250'>P. OK?</span> <span m='100350'>So</span> <span m='100580'>why</span>
  <span m='100710'>don't</span> <span m='100800'>you</span> <span
  m='100890'>pause the</span> <span m='101290'>video</span> <span
  m='101800'>and</span> <span m='102420'>work</span> <span
  m='102680'>this</span> <span m='102840'>out</span> <span m='103130'>for</span>
  <span m='103220'>yourself.</span> <span m='104150'>Check</span> <span
  m='104350'>back</span> <span m='104560'>with</span> <span m='104680'>me</span>
  <span m='104810'>and</span> <span m='104980'>we'll</span> <span
  m='105150'>work</span> <span m='105320'>it</span> <span m='105390'>out</span>
  <span m='105520'>together.</span> </p><p><span m='114000'>OK,</span> <span
  m='114150'>welcome</span> <span m='114410'>back.</span> <span
  m='114670'>So</span> <span m='114940'>let's</span> <span m='115100'>get</span>
  <span m='115240'>started.</span> <span m='119590'>So</span> <span
  m='120300'>this</span> <span m='120490'>problem</span> <span
  m='121420'>may</span> <span m='121650'>not</span> <span m='121890'>look</span>
  <span m='122190'>like</span> <span m='122660'>it's</span> <span
  m='123110'>a</span> <span m='124310'>problem</span> <span
  m='124640'>about</span> <span m='124840'>partial</span> <span
  m='125250'>derivatives</span> <span m='125630'>with</span> <span
  m='125770'>constraints,</span> <span m='126400'>but</span> <span
  m='126550'>that's</span> <span m='126810'>what</span> <span
  m='127410'>it's</span> <span m='127510'>really</span> <span m='127740'>going
  to</span> <span m='127910'>boil</span> <span m='128200'>down</span> <span
  m='128480'>to,</span> <span m='130360'>which</span> <span m='130560'>is</span>
  <span m='130670'>to</span> <span m='130760'>say</span> <span
  m='131000'>that</span> <span m='131240'>when</span> <span m='131370'>we</span>
  <span m='131480'>want to</span> <span m='131740'>compute--</span> <span
  m='138500'>so</span> <span m='138720'>when</span> <span m='138850'>we</span>
  <span m='139040'>want</span> <span m='139300'>to</span> <span
  m='139380'>answer</span> <span m='139750'>this</span> <span
  m='139880'>question</span> <span m='140240'>by</span> <span
  m='140360'>computing</span> <span m='140730'>the</span> <span
  m='140800'>gradient,</span> <span m='141210'>the</span> <span
  m='141280'>first</span> <span m='141510'>thing</span> <span
  m='141620'>we're</span> <span m='141720'>going</span> <span m='142010'>to want
  to</span> <span m='142080'>do</span> <span m='142330'>is</span> <span
  m='142870'>compute the</span> <span m='143330'>partial</span> <span
  m='143750'>derivative</span> <span m='143960'>of</span> <span
  m='144220'>g</span> <span m='144460'>and</span> <span m='144590'>its</span>
  <span m='144730'>variable</span> <span m='145180'>x.</span> <span
  m='146180'>And</span> <span m='146510'>from</span> <span m='146650'>the</span>
  <span m='146730'>way</span> <span m='146880'>we</span> <span
  m='147020'>set</span> <span m='147260'>up</span> <span m='147360'>the</span>
  <span m='147450'>problem,</span> <span m='148260'>that's</span> <span
  m='148490'>just</span> <span m='148730'>the</span> <span
  m='148820'>same</span> <span m='149760'>as</span> <span
  m='150410'>computing</span> <span m='154390'>the</span> <span
  m='154500'>partial</span> <span m='155020'>derivative</span> <span
  m='155800'>of</span> <span m='156130'>f</span> <span m='158470'>with</span>
  <span m='158650'>respect</span> <span m='159120'>to</span> <span
  m='159240'>x</span> <span m='162600'>and</span> <span
  m='162740'>keeping</span> <span m='163160'>z</span> <span
  m='163410'>constant.</span> </p><p><span m='164810'>Now,</span> <span
  m='165030'>remember,</span> <span m='165370'>when</span> <span
  m='165480'>we</span> <span m='165590'>do</span> <span
  m='165730'>partial</span> <span m='166090'>derivatives with</span> <span
  m='166560'>constraints,</span> <span m='167490'>what's</span> <span
  m='168170'>important</span> <span m='168540'>about</span> <span
  m='168740'>the</span> <span m='168800'>notation</span> <span
  m='169260'>is</span> <span m='169360'>what's</span> <span
  m='169550'>missing.</span> <span m='169950'>The</span> <span
  m='170030'>variable</span> <span m='170370'>y</span> <span
  m='170700'>is</span> <span m='170850'>missing,</span> <span
  m='171640'>and</span> <span m='171800'>that's</span> <span
  m='172000'>because</span> <span m='172490'>we</span> <span
  m='172800'>are</span> <span m='172920'>going</span> <span m='173050'>to</span>
  <span m='173110'>use</span> <span m='173290'>the</span> <span
  m='173370'>constraint</span> <span m='173830'>to</span> <span
  m='173920'>get</span> <span m='174050'>rid</span> <span m='174190'>of</span>
  <span m='174280'>it,</span> <span m='174840'>and</span> <span
  m='175670'>that's</span> <span m='175930'>exactly</span> <span
  m='176320'>how</span> <span m='176430'>we</span> <span
  m='176560'>define</span> <span m='176960'>g,</span> <span m='177260'>so</span>
  <span m='177440'>this</span> <span m='177590'>is</span> <span
  m='179240'>the</span> <span m='179430'>key</span> <span
  m='180000'>observation.</span> <span m='180710'>So</span> <span
  m='181240'>computing</span> <span m='181580'>the</span> <span
  m='181670'>gradient</span> <span m='181900'>of</span> <span
  m='182120'>g</span> <span m='182390'>is</span> <span m='182570'>just</span>
  <span m='182790'>going</span> <span m='182910'>to</span> <span
  m='182990'>be</span> <span m='183140'>computing</span> <span
  m='184100'>these</span> <span m='184910'>partial</span> <span
  m='185320'>derivatives</span> <span m='185660'>with</span> <span
  m='185810'>constraints.</span> <span m='189080'>So</span> <span
  m='189250'>we'll</span> <span m='189350'>do</span> <span
  m='189470'>that</span> <span m='189690'>in</span> <span m='189770'>a</span>
  <span m='189810'>moment,</span> <span m='190260'>and</span> <span
  m='191120'>I'll</span> <span m='191390'>also</span> <span
  m='195450'>just</span> <span m='195750'>write</span> <span
  m='196040'>that</span> <span m='196320'>the</span> <span
  m='196470'>partial</span> <span m='196820'>derivative</span> <span
  m='197160'>of</span> <span m='197300'>g</span> <span m='197770'>in</span>
  <span m='197970'>the</span> <span m='198020'>z-direction</span> <span
  m='199190'>is</span> <span m='199420'>partial</span> <span m='199950'>f</span>
  <span m='201080'>partial</span> <span m='201580'>z,</span> <span
  m='204130'>now</span> <span m='204350'>keeping</span> <span
  m='204655'>x</span> <span m='204960'>constrained.</span> </p><p><span
  m='206970'>All</span> <span m='207110'>right,</span> <span
  m='207340'>so</span> <span m='208910'>we</span> <span m='209000'>need</span>
  <span m='209150'>to</span> <span m='210060'>compute</span> <span
  m='210410'>these</span> <span m='210580'>partial</span> <span
  m='210900'>derivatives</span> <span m='211050'>with</span> <span
  m='211590'>constraints.</span> <span m='214820'>And so</span> <span
  m='215070'>you</span> <span m='215220'>remember</span> <span
  m='215590'>how</span> <span m='216330'>this</span> <span
  m='216560'>goes.</span> <span m='217560'>The</span> <span
  m='217710'>way</span> <span m='217850'>that</span> <span m='217950'>I</span>
  <span m='218030'>prefer</span> <span m='218310'>to</span> <span m='218410'>do
  this</span> <span m='218570'>is</span> <span m='218870'>to</span> <span
  m='218940'>compute the</span> <span m='219360'>total</span> <span
  m='219680'>differentials.</span> <span m='220310'>So</span> <span
  m='222770'>let's</span> <span m='223050'>compute</span> <span
  m='223830'>over</span> <span m='224080'>here.</span> <span
  m='229070'>The</span> <span m='229180'>total</span> <span
  m='229480'>differential</span> <span m='230020'>df</span> <span
  m='231540'>is--</span> <span m='242052'>the</span> <span
  m='242550'>total</span> <span m='243020'>differential</span> <span
  m='243365'>of</span> <span m='243710'>f</span> <span m='244010'>is</span>
  <span m='244150'>just</span> <span m='244330'>the</span> <span
  m='244400'>partials</span> <span m='245030'>of</span> <span m='245160'>f in
  the</span> <span m='245600'>x-direction,</span> <span m='246490'>f</span>
  <span m='246760'>in</span> <span m='246830'>the</span> <span
  m='246910'>y-direction,</span> <span m='247230'>f</span> <span
  m='247520'>in</span> <span m='247660'>the</span> <span
  m='247810'>z-direction,</span> <span m='248690'>and</span> <span
  m='248930'>each</span> <span m='249100'>of</span> <span
  m='249170'>these</span> <span m='249350'>is</span> <span
  m='249600'>multiplied</span> <span m='250140'>by</span> <span
  m='250310'>the</span> <span m='250410'>corresponding</span> <span
  m='250930'>differential.</span> <span m='253690'>And we</span> <span
  m='253810'>don't</span> <span m='254060'>know</span> <span
  m='254210'>f,</span> <span m='254580'>so</span> <span m='254720'>we</span>
  <span m='254830'>can't</span> <span m='255140'>compute the</span> <span
  m='255540'>partial</span> <span m='255890'>derivatives</span> <span
  m='256570'>of</span> <span m='256810'>it</span> <span m='257000'>in</span>
  <span m='257160'>general,</span> <span m='257560'>but</span> <span
  m='257660'>we</span> <span m='257800'>do</span> <span m='258040'>know</span>
  <span m='258350'>these</span> <span m='258650'>partial</span> <span
  m='259010'>derivatives</span> <span m='259410'>at</span> <span
  m='259680'>this</span> <span m='259940'>point.</span> <span
  m='260700'>And</span> <span m='261140'>so</span> <span m='262130'>in</span>
  <span m='262270'>the</span> <span m='262340'>problem,</span> <span
  m='262700'>we</span> <span m='262790'>were</span> <span
  m='262890'>given</span> <span m='263210'>that</span> <span
  m='263370'>this</span> <span m='263590'>is</span> <span m='264750'>2dx</span>
  <span m='266780'>plus</span> <span m='269530'>dy</span> <span
  m='270760'>minus</span> <span m='271230'>3dz.</span> <span
  m='273590'>So</span> <span m='273800'>this</span> <span m='274210'>is</span>
  <span m='274450'>just</span> <span m='274700'>using</span> <span
  m='275010'>the</span> <span m='275110'>fact</span> <span
  m='276050'>that</span> <span m='278720'>the</span> <span
  m='278820'>gradient</span> <span m='279430'>of</span> <span
  m='279510'>f</span> <span m='280830'>we</span> <span m='280900'>were</span>
  <span m='281020'>given</span> <span m='281610'>is</span> <span
  m='282000'>2,</span> <span m='282790'>1</span> <span m='283960'>minus</span>
  <span m='284225'>3,</span> <span m='286520'>OK?</span> </p><p><span
  m='289410'>So</span> <span m='289560'>that's</span> <span
  m='289750'>the</span> <span m='289810'>total</span> <span
  m='290030'>differential</span> <span m='290490'>of</span> <span
  m='290560'>f,</span> <span m='291100'>and</span> <span m='291290'>now</span>
  <span m='291400'>we</span> <span m='291530'>have</span> <span
  m='291700'>this</span> <span m='291840'>constraint.</span> <span
  m='292115'>And</span> <span m='292390'>remember,</span> <span
  m='292700'>when</span> <span m='292820'>we</span> <span m='292940'>do</span>
  <span m='293170'>these</span> <span m='294020'>partial</span> <span
  m='294330'>derivatives</span> <span m='294480'>with</span> <span
  m='294730'>constraints,</span> <span m='295340'>the</span> <span
  m='295700'>trick</span> <span m='295970'>is</span> <span m='296060'>to</span>
  <span m='296170'>take</span> <span m='296370'>the</span> <span
  m='296440'>differential</span> <span m='296890'>of the</span> <span
  m='297180'>constraint.</span> <span m='298330'>So</span> <span
  m='298980'>we</span> <span m='299150'>had</span> <span m='299370'>this</span>
  <span m='299520'>equation</span> <span m='300240'>z</span> <span
  m='301160'>equals</span> <span m='302320'>x</span> <span
  m='302580'>squared</span> <span m='303050'>plus</span> <span
  m='303400'>y</span> <span m='304090'>plus</span> <span m='304430'>1,</span>
  <span m='305350'>and</span> <span m='305900'>what</span> <span
  m='306080'>we</span> <span m='306160'>need</span> <span m='306300'>to</span>
  <span m='306390'>do</span> <span m='306560'>is</span> <span
  m='306700'>take</span> <span m='306900'>its</span> <span
  m='307100'>differential.</span> <span m='307730'>So</span> <span
  m='307930'>we</span> <span m='308030'>have</span> <span m='308250'>dz</span>
  <span m='309940'>is</span> <span m='310190'>2x</span> <span
  m='311910'>dx</span> <span m='314060'>plus</span> <span m='314840'>dy.</span>
  <span m='317320'>So</span> <span m='317470'>that's</span> <span
  m='317690'>our</span> <span m='317820'>constraint.</span> <span
  m='320440'>Now</span> <span m='320630'>here</span> <span m='320820'>we</span>
  <span m='320910'>have</span> <span m='321060'>this</span> <span
  m='321200'>variable</span> <span m='321600'>x,</span> <span
  m='321980'>but</span> <span m='322300'>we're</span> <span
  m='322460'>not</span> <span m='323220'>varying</span> <span m='323540'>x
  in</span> <span m='323780'>this</span> <span m='323890'>problem.</span> <span
  m='324150'>We're only</span> <span m='324510'>focused</span> <span
  m='324870'>on</span> <span m='324980'>the point</span> <span
  m='325450'>P,</span> <span m='325920'>and</span> <span m='326300'>at</span>
  <span m='326490'>the</span> <span m='326570'>point</span> <span
  m='326880'>P,</span> <span m='327310'>x is</span> <span m='327770'>1.</span>
  <span m='328430'>So,</span> <span m='328650'>in</span> <span
  m='328750'>fact,</span> <span m='329100'>dz</span> <span m='330010'>is</span>
  <span m='330210'>just</span> <span m='331850'>2dx</span> <span
  m='334840'>plus</span> <span m='337370'>dy,</span> <span m='338850'>OK?</span>
  </p><p><span m='339630'>So</span> <span m='339820'>now</span> <span
  m='341140'>what</span> <span m='341270'>we</span> <span m='341370'>need</span>
  <span m='341530'>to</span> <span m='341640'>do</span> <span
  m='341950'>is</span> <span m='342420'>we</span> <span m='342550'>need</span>
  <span m='342740'>to</span> <span m='342870'>combine</span> <span
  m='345290'>the</span> <span m='346290'>constraint</span> <span
  m='346830'>equation</span> <span m='349050'>and</span> <span
  m='351640'>the</span> <span m='352070'>total</span> <span
  m='352610'>differential</span> <span m='353180'>for</span> <span
  m='353310'>f</span> <span m='354140'>into</span> <span m='354770'>one</span>
  <span m='355020'>equation,</span> <span m='355810'>and</span> <span
  m='356070'>so</span> <span m='356200'>this</span> <span m='356370'>is</span>
  <span m='356520'>just</span> <span m='356740'>linear</span> <span
  m='356860'>algebra</span> <span m='357400'>now.</span> <span
  m='358320'>So</span> <span m='358670'>I'll</span> <span m='358800'>just</span>
  <span m='359010'>come</span> <span m='359190'>over</span> <span
  m='359360'>here.</span> <span m='362580'>So</span> <span m='364380'>we</span>
  <span m='364630'>can</span> <span m='367530'>rewrite</span> <span
  m='367880'>our</span> <span m='369810'>total</span> <span
  m='370100'>differential</span> <span m='370610'>for</span> <span
  m='371440'>the</span> <span m='371580'>constraint</span> <span
  m='372580'>as</span> <span m='372760'>saying</span> <span
  m='373050'>that</span> <span m='373250'>dy</span> <span m='374980'>is</span>
  <span m='375160'>equal</span> <span m='375580'>to</span> <span
  m='378100'>dz</span> <span m='380010'>minus</span> <span
  m='380460'>2dx,</span> <span m='384020'>and</span> <span
  m='384160'>then</span> <span m='384270'>we</span> <span m='384360'>can</span>
  <span m='384500'>plug</span> <span m='384760'>that</span> <span
  m='384920'>back</span> <span m='385160'>into</span> <span
  m='385490'>our</span> <span m='385660'>total</span> <span
  m='385900'>differential</span> <span m='386410'>for</span> <span
  m='386620'>f.</span> <span m='387480'>And</span> <span m='387700'>so</span>
  <span m='387930'>we</span> <span m='388070'>get</span> <span
  m='388400'>that</span> <span m='390380'>df</span> <span m='391680'>is</span>
  <span m='391860'>equal</span> <span m='392230'>to</span> <span
  m='392570'>2dx</span> <span m='394680'>plus--</span> <span
  m='395470'>now</span> <span m='395740'>I</span> <span m='395880'>plug</span>
  <span m='396480'>in</span> <span m='396720'>dy</span> <span
  m='397220'>here--</span> <span m='397980'>so</span> <span m='398130'>dz</span>
  <span m='399480'>minus</span> <span m='399900'>2dx,</span> <span
  m='402530'>and</span> <span m='402810'>then</span> <span
  m='403250'>finally,</span> <span m='403680'>minus</span> <span
  m='404100'>3dz.</span> <span m='406286'>So</span> <span
  m='406700'>altogether,</span> <span m='407830'>I</span> <span
  m='407930'>get</span> <span m='408180'>a</span> <span m='408290'>minus</span>
  <span m='408810'>2dz,</span> <span m='410980'>because</span> <span
  m='411560'>this</span> <span m='411950'>and</span> <span
  m='412270'>this</span> <span m='412560'>cancel. OK.</span> <span
  m='415080'>We</span> <span m='415170'>get</span> <span m='415280'>a</span>
  <span m='415320'>minus</span> <span m='416370'>2dz.</span> </p><p><span
  m='418920'>So</span> <span m='419080'>what</span> <span m='419190'>does</span>
  <span m='419300'>that</span> <span m='419500'>tell</span> <span
  m='419740'>us</span> <span m='420030'>about</span> <span m='422560'>the</span>
  <span m='422640'>gradient?</span> <span m='424170'>So</span> <span
  m='425580'>remember</span> <span m='425920'>that</span> <span
  m='426130'>the</span> <span m='427160'>differential</span> <span
  m='428020'>now</span> <span m='428420'>of</span> <span m='428590'>g</span>
  <span m='429150'>and</span> <span m='429380'>its</span> <span
  m='429570'>variables</span> <span m='430920'>is</span> <span
  m='435370'>partial</span> <span m='435870'>g</span> <span
  m='437020'>partial</span> <span m='437610'>x</span> <span m='438450'>dx</span>
  <span m='440240'>plus</span> <span m='440700'>partial</span> <span
  m='441840'>g</span> <span m='442800'>partial</span> <span m='443540'>z</span>
  <span m='444880'>dz.</span> <span m='446490'>And</span> <span
  m='446580'>remember,</span> <span m='446850'>the</span> <span
  m='446950'>trick</span> <span m='447200'>about</span> <span
  m='448000'>partial</span> <span m='448370'>derivatives</span> <span
  m='448910'>and</span> <span m='449010'>their</span> <span m='449120'>relation
  to</span> <span m='449590'>total</span> <span m='449860'>differentials</span>
  <span m='450430'>is</span> <span m='450640'>that</span> <span
  m='450770'>the</span> <span m='450850'>partial</span> <span
  m='451230'>derivative</span> <span m='452050'>is</span> <span
  m='452460'>just</span> <span m='452730'>this</span> <span
  m='452900'>coefficient.</span> <span m='456110'>So</span> <span
  m='456760'>the</span> <span m='456940'>fact</span> <span
  m='457220'>that</span> <span m='457310'>we</span> <span
  m='457420'>computed</span> <span m='457850'>df</span> <span
  m='459180'>and</span> <span m='459280'>we</span> <span m='459370'>found
  that</span> <span m='459670'>it</span> <span m='459760'>was</span> <span
  m='459920'>minus</span> <span m='460410'>2dz,</span> <span
  m='462700'>that</span> <span m='463190'>tells</span> <span
  m='463580'>us</span> <span m='463960'>that</span> <span m='467680'>dg--</span>
  <span m='472180'>so</span> <span m='472340'>the</span> <span
  m='472630'>thing</span> <span m='472780'>that</span> <span
  m='472880'>we</span> <span m='472960'>need</span> <span m='473120'>to</span>
  <span m='473220'>use</span> <span m='473490'>is</span> <span
  m='473620'>that</span> <span m='474300'>g,</span> <span
  m='474760'>remember,</span> <span m='475200'>is</span> <span
  m='475510'>just</span> <span m='475990'>the</span> <span
  m='476100'>specialization</span> <span m='476910'>of</span> <span
  m='477020'>f.</span> <span m='477720'>So</span> <span m='477930'>dg</span>
  <span m='479000'>is</span> <span m='479210'>equal</span> <span
  m='479620'>to</span> <span m='479870'>df</span> <span m='480680'>in</span>
  <span m='480850'>this</span> <span m='481010'>case,</span> <span
  m='481310'>because</span> <span m='482130'>g</span> <span m='482440'>is</span>
  <span m='482620'>just</span> <span m='483070'>a</span> <span
  m='483170'>special</span> <span m='483540'>case</span> <span
  m='483850'>of</span> <span m='483970'>f</span> <span m='484370'>with</span>
  <span m='484590'>constraints.</span> <span m='485620'>So</span> <span
  m='485860'>when</span> <span m='485990'>we</span> <span
  m='486100'>computed</span> <span m='487010'>df</span> <span
  m='487490'>here,</span> <span m='487720'>we</span> <span
  m='487840'>were</span> <span m='488070'>imposing</span> <span
  m='488550'>exactly</span> <span m='488860'>the</span> <span
  m='488940'>constraints</span> <span m='489430'>that</span> <span
  m='489560'>we</span> <span m='489650'>used</span> <span m='489850'>to</span>
  <span m='489940'>define</span> <span m='490320'>dg,</span> <span
  m='491270'>and</span> <span m='491440'>so</span> <span m='491550'>what</span>
  <span m='491690'>this</span> <span m='492380'>tells</span> <span
  m='492780'>us</span> <span m='494080'>is</span> <span m='494340'>that</span>
  <span m='495250'>we</span> <span m='495430'>can</span> <span
  m='495580'>just</span> <span m='495880'>compare</span> <span
  m='496270'>the</span> <span m='496370'>coefficients</span> <span
  m='497010'>here</span> <span m='497810'>and</span> <span m='500680'>so</span>
  <span m='500900'>our</span> <span m='501020'>gradient</span> <span
  m='502100'>is</span> <span m='503210'>0,</span> <span m='505950'>minus</span>
  <span m='506420'>2.</span> <span m='507110'>So</span> <span
  m='507290'>the</span> <span m='507400'>0</span> <span m='507910'>is</span>
  <span m='508110'>because</span> <span m='508500'>there</span> <span
  m='508650'>is</span> <span m='508860'>no</span> <span
  m='509020'>dependence</span> <span m='509670'>anymore</span> <span
  m='510110'>on</span> <span m='510260'>x</span> <span m='510680'>at</span>
  <span m='510800'>this</span> <span m='511010'>point.</span> <span
  m='511740'>There</span> <span m='512160'>wasn't</span> <span
  m='512450'>a</span> <span m='512500'>dx</span> <span m='512940'>term.</span>
  <span m='513190'>There</span> <span m='513310'>could</span> <span
  m='513480'>have</span> <span m='513590'>been</span> <span
  m='513810'>and</span> <span m='513900'>there</span> <span
  m='514010'>wasn't.</span> <span m='514710'>And</span> <span
  m='514880'>the</span> <span m='514940'>minus</span> <span m='515290'>2</span>
  <span m='515540'>is</span> <span m='515700'>because</span> <span
  m='515980'>that's</span> <span m='516180'>the</span> <span
  m='516270'>dependence</span> <span m='516730'>on</span> <span
  m='516960'>z.</span> </p><p><span m='519370'>OK, so</span> <span
  m='519510'>this</span> <span m='519630'>is</span> <span m='519750'>a</span>
  <span m='519810'>bit</span> <span m='520530'>complicated,</span> <span
  m='521040'>so</span> <span m='521160'>why</span> <span m='521270'>don't</span>
  <span m='521400'>we</span> <span m='521850'>review</span> <span
  m='522210'>what</span> <span m='522350'>we</span> <span m='522460'>did.</span>
  <span m='523210'>So</span> <span m='523810'>going</span> <span
  m='524060'>back</span> <span m='524320'>over</span> <span m='524570'>to</span>
  <span m='524710'>the</span> <span m='524850'>problem</span> <span
  m='525210'>statement,</span> <span m='526480'>we</span> <span
  m='528440'>first</span> <span m='530750'>needed</span> <span
  m='531020'>to</span> <span m='531150'>realize</span> <span
  m='532250'>that</span> <span m='533020'>saying</span> <span
  m='533450'>that</span> <span m='533640'>g</span> <span m='536250'>was</span>
  <span m='536620'>a</span> <span m='536790'>special</span> <span
  m='537150'>case</span> <span m='537480'>of</span> <span m='538620'>f</span>
  <span m='539820'>where</span> <span m='540240'>we</span> <span m='540900'>use 
  our</span> <span m='541340'>constraints</span> <span m='543420'>to</span>
  <span m='543710'>solve for</span> <span m='544140'>y,</span> <span
  m='545250'>that's</span> <span m='545540'>what</span> <span
  m='545680'>put</span> <span m='545840'>us</span> <span m='545990'>in</span>
  <span m='546110'>the</span> <span m='546190'>context</span> <span
  m='546750'>of</span> <span m='548030'>problems</span> <span
  m='548390'>with</span> <span m='548510'>constraints.</span> <span
  m='549650'>So</span> <span m='550000'>the</span> <span m='550300'>fact</span>
  <span m='550640'>that</span> <span m='550750'>the</span> <span
  m='550820'>dependence</span> <span m='551250'>on</span> <span
  m='553600'>y</span> <span m='553950'>was</span> <span m='554160'>so</span>
  <span m='554300'>simple</span> <span m='554750'>that</span> <span
  m='554860'>we</span> <span m='554980'>could</span> <span
  m='555130'>just</span> <span m='555390'>use</span> <span m='555610'>the</span>
  <span m='555700'>constraint. OK.</span> </p><p><span m='559970'>So</span>
  <span m='560250'>then,</span> <span m='560480'>what</span> <span
  m='560700'>that</span> <span m='560930'>allowed</span> <span
  m='561260'>us</span> <span m='561410'>to</span> <span m='561520'>do</span>
  <span m='561770'>is</span> <span m='561980'>it</span> <span
  m='562060'>allowed</span> <span m='562320'>us</span> <span
  m='562440'>to</span> <span m='562540'>say</span> <span m='562750'>that</span>
  <span m='562880'>the</span> <span m='562970'>partial</span> <span
  m='563330'>derivative</span> <span m='564000'>of</span> <span
  m='564360'>g</span> <span m='564610'>in</span> <span m='564760'>the</span>
  <span m='564830'>x-direction</span> <span m='565660'>is</span> <span
  m='565920'>just</span> <span m='566270'>the</span> <span
  m='566350'>partial</span> <span m='566730'>derivative</span> <span
  m='567840'>in</span> <span m='568020'>the</span> <span
  m='568560'>x-direction</span> <span m='569420'>subject</span> <span
  m='570010'>to</span> <span m='570090'>the</span> <span
  m='570190'>constraint,</span> <span m='570880'>and</span> <span
  m='571050'>that's</span> <span m='571230'>what</span> <span
  m='571340'>we</span> <span m='571480'>did</span> <span m='571660'>here.</span>
  </p><p><span m='573650'>And so</span> <span m='573930'>then,</span> <span
  m='575220'>the</span> <span m='575520'>next</span> <span
  m='576020'>steps</span> <span m='576480'>that</span> <span
  m='576600'>we</span> <span m='576720'>did</span> <span m='577030'>are</span>
  <span m='577110'>the</span> <span m='577240'>same</span> <span
  m='577500'>steps</span> <span m='577790'>that</span> <span
  m='577890'>we</span> <span m='577990'>would</span> <span
  m='578090'>always</span> <span m='578400'>do</span> <span m='578660'>to</span>
  <span m='578780'>compute</span> <span m='579190'>partial</span> <span
  m='579540'>derivatives</span> <span m='579880'>with</span> <span
  m='580000'>constraints,</span> <span m='582910'>and</span> <span
  m='583580'>so</span> <span m='584670'>we</span> <span
  m='585810'>finally</span> <span m='586510'>got</span> <span
  m='586980'>a</span> <span m='587080'>relationship</span> <span
  m='588380'>that</span> <span m='588570'>said</span> <span
  m='588880'>that,</span> <span m='589120'>subject</span> <span
  m='589570'>to</span> <span m='589670'>these</span> <span
  m='589890'>constraints,</span> <span m='590860'>df</span> <span
  m='592100'>is</span> <span m='592360'>equal</span> <span m='592730'>to</span>
  <span m='592880'>minus</span> <span m='593270'>2dz.</span> <span
  m='594890'>And</span> <span m='595200'>the</span> <span
  m='595260'>point</span> <span m='595540'>is</span> <span
  m='595650'>that</span> <span m='595880'>g</span> <span m='596660'>is</span>
  <span m='596890'>just</span> <span m='597160'>the</span> <span
  m='597210'>function</span> <span m='597640'>f</span> <span
  m='598000'>with</span> <span m='598240'>those</span> <span
  m='598460'>constraints</span> <span m='598950'>imposed,</span> <span
  m='599500'>and</span> <span m='599630'>so</span> <span m='599860'>dg</span>
  <span m='600930'>and</span> <span m='601180'>df</span> <span
  m='601840'>are</span> <span m='602080'>the</span> <span
  m='602200'>same,</span> <span m='603020'>and</span> <span
  m='603360'>so,</span> <span m='604400'>in</span> <span
  m='604520'>particular,</span> <span m='604930'>dg</span> <span
  m='605510'>is</span> <span m='605700'>minus</span> <span
  m='606070'>2dz.</span> <span m='607360'>And</span> <span
  m='607710'>then,</span> <span m='608920'>we</span> <span
  m='609120'>remember</span> <span m='609540'>that</span> <span
  m='609910'>you</span> <span m='610020'>can</span> <span
  m='610150'>always</span> <span m='610480'>read</span> <span
  m='610680'>off</span> <span m='610880'>partial</span> <span
  m='611200'>derivatives</span> <span m='611670'>from</span> <span
  m='611870'>the</span> <span m='611950'>total</span> <span
  m='612170'>differential.</span> <span m='612670'>They're</span> <span
  m='612770'>just</span> <span m='612970'>the</span> <span
  m='613060'>coefficients.</span> <span m='614140'>And</span> <span
  m='614380'>so</span> <span m='614750'>in</span> <span m='614920'>the</span>
  <span m='615030'>end,</span> <span m='615250'>we</span> <span
  m='615370'>got</span> <span m='615720'>that</span> <span m='616010'>the</span>
  <span m='616110'>gradient</span> <span m='616600'>was</span> <span
  m='616910'>0</span> <span m='617520'>minus</span> <span m='617800'>2.</span>
  <span m='618545'>And</span> <span m='619010'>I</span> <span
  m='619160'>think</span> <span m='619370'>I'll</span> <span m='619460'>leave
  it</span> <span m='619670'>at</span> <span m='619760'>that.</span> </p>
embedded_media:
  - uid: d99f428a476df2a7960c94eda302caaf
    parent_uid: 2a5313ba9c3d707ec0b5476851e78b07
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: j9GZjr05Heg
  - uid: fe156e1176ed08137a7e3f68f24981d0
    parent_uid: 2a5313ba9c3d707ec0b5476851e78b07
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/j9GZjr05Heg/default.jpg'
  - uid: f559047481cb31bd195cfc1690a269fa
    parent_uid: 2a5313ba9c3d707ec0b5476851e78b07
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_31_300k.mp4'
  - uid: 85418017173cd67f7a700aefaacb837c
    parent_uid: 2a5313ba9c3d707ec0b5476851e78b07
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/gradients-composition/id414355340?i=90322869
  - uid: f9cdf6797222ad6c89328e8d42605fdc
    parent_uid: 2a5313ba9c3d707ec0b5476851e78b07
    id: 3Play-3PlayYouTubeid-PDF
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: j9GZjr05Heg
  - uid: 7436e0fba714fd81a0c242b5833d46b5
    parent_uid: 2a5313ba9c3d707ec0b5476851e78b07
    id: j9GZjr05Heg.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/session-44-example/gradients-composition/j9GZjr05Heg.srt
  - uid: c2e72d8947ed683f61c62dcce577a392
    parent_uid: 2a5313ba9c3d707ec0b5476851e78b07
    id: j9GZjr05Heg.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/2.-partial-derivatives/part-c-lagrange-multipliers-and-constrained-differentials/session-44-example/gradients-composition/j9GZjr05Heg.pdf
  - uid: 21cdff11ffc58760ff7e4746384c72c3
    parent_uid: 2a5313ba9c3d707ec0b5476851e78b07
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 36326d52a9f376dae6ea9abfde2b6278
    parent_uid: 2a5313ba9c3d707ec0b5476851e78b07
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
