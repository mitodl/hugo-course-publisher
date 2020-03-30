---
title: Second Fundamental Theorem and Chain Rule
uid: 7e13c1234f2cd818f1f56bc9d8e06ea7
parent_uid: 9b4c6b77599861b820e8c804596b8c24
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-3-the-definite-integral-and-its-applications/part-b-second-fundamental-theorem-areas-volumes/session-51-the-second-fundamental-theorem-of-calculus/second-fundamental-theorem-and-chain-rule
short_url: second-fundamental-theorem-and-chain-rule
inline_embed_id: 31015776secondfundamentaltheoremandchainrule35351481
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='6860'>PROFESSOR: Welcome</span> <span m='7270'>back</span> <span
  m='7460'>to</span> <span m='7560'>recitation.</span> <span m='8900'>In</span>
  <span m='9180'>this</span> <span m='9540'>video</span> <span
  m='9860'>segment,</span> <span m='10230'>what</span> <span
  m='10360'>I'd</span> <span m='10460'>like</span> <span m='10650'>us</span>
  <span m='10800'>to</span> <span m='10900'>do</span> <span m='11090'>is</span>
  <span m='11270'>work</span> <span m='11480'>on this following problem.</span>
  </p><p><span m='13260'>Find</span> <span m='13650'>d/dx</span> <span
  m='14320'>of</span> <span m='14470'>the</span> <span m='14590'>integral</span>
  <span m='14920'>from</span> <span m='15160'>0</span> <span m='15460'>to</span>
  <span m='15560'>x</span> <span m='15810'>squared,</span> <span
  m='16610'>cosine</span> <span m='17030'>t</span> <span m='17210'>dt.</span>
  <span m='18150'>I'm</span> <span m='18570'>going to</span> <span
  m='18680'>give you</span> <span m='18740'>a</span> <span
  m='18800'>moment</span> <span m='19120'>to</span> <span m='19230'>think</span>
  <span m='19410'>about</span> <span m='19690'>it</span> <span
  m='19940'>and</span> <span m='20080'>then</span> <span m='20200'>I'll</span>
  <span m='20300'>come</span> <span m='20470'>back</span> <span
  m='20810'>and</span> <span m='21060'>show</span> <span m='21210'>you</span>
  <span m='21320'>how</span> <span m='21500'>I</span> <span m='21620'>do</span>
  <span m='21790'>it.</span> </p><p><span m='30690'>OK,</span> <span
  m='30970'>welcome</span> <span m='31280'>back.</span> <span
  m='31660'>Hopefully</span> <span m='32160'>you</span> <span
  m='32240'>were</span> <span m='32350'>able</span> <span m='32520'>to</span>
  <span m='32590'>make</span> <span m='32760'>some</span> <span
  m='32890'>headway</span> <span m='33210'>on</span> <span
  m='33390'>this.</span> <span m='34240'>Let's</span> <span
  m='34890'>look</span> <span m='35020'>at</span> <span m='35090'>the</span>
  <span m='35180'>problem</span> <span m='35650'>and</span> <span
  m='35950'>see</span> <span m='36140'>how</span> <span m='36260'>we</span>
  <span m='36400'>would</span> <span m='36530'>break</span> <span
  m='36740'>it</span> <span m='36830'>down.</span> <span m='37740'>Well</span>
  <span m='38010'>we</span> <span m='38140'>know</span> <span
  m='38370'>from</span> <span m='38570'>the</span> <span
  m='38650'>fundamental</span> <span m='39050'>theorem</span> <span
  m='39250'>of</span> <span m='39380'>calculus</span> <span
  m='39990'>that</span> <span m='40120'>you</span> <span m='40260'>saw</span>
  <span m='40510'>in</span> <span m='40580'>the</span> <span
  m='40660'>lecture,</span> <span m='41500'>that</span> <span
  m='41670'>if</span> <span m='42100'>up</span> <span m='42320'>here</span>
  <span m='42540'>instead</span> <span m='42840'>of</span> <span
  m='42930'>x</span> <span m='43110'>squared</span> <span m='43440'>we</span>
  <span m='43520'>had</span> <span m='43670'>an</span> <span m='44170'>x,</span>
  <span m='44270'>then the</span> <span m='44340'>problem</span> <span
  m='44570'>would</span> <span m='44730'>be</span> <span m='44830'>easy</span>
  <span m='45120'>to</span> <span m='45270'>solve.</span> <span m='45690'>We'd
  </span> <span m='45830'>just</span> <span m='46020'>use</span> <span
  m='46210'>the</span> <span m='46290'>fundamental</span> <span
  m='46750'>theorem</span> <span m='46900'>of</span> <span
  m='47030'>calculus,</span> <span m='48050'>the</span> <span
  m='48170'>answer</span> <span m='48470'>would</span> <span m='48600'>be</span>
  <span m='48730'>cosine</span> <span m='49210'>x.</span> </p><p><span
  m='50670'>But</span> <span m='50880'>of</span> <span m='50970'>course,</span>
  <span m='51210'>we</span> <span m='51310'>don't</span> <span
  m='51550'>have</span> <span m='51740'>an</span> <span m='52070'>x,</span>
  <span m='52520'>we have</span> <span m='52720'>an x squared.</span> <span
  m='52880'>That's</span> <span m='53050'>why</span> <span m='53210'>I</span>
  <span m='53250'>gave</span> <span m='53490'>you</span> <span
  m='53570'>this</span> <span m='53760'>problem.</span> <span
  m='54490'>And</span> <span m='54670'>we</span> <span m='54770'>need</span>
  <span m='54910'>to</span> <span m='54990'>figure</span> <span
  m='55230'>out</span> <span m='55380'>how</span> <span m='55520'>to</span>
  <span m='55640'>solve</span> <span m='55950'>this</span> <span
  m='56110'>problem</span> <span m='56960'>when</span> <span
  m='57270'>there's</span> <span m='57440'>a</span> <span
  m='57520'>different</span> <span m='57840'>function</span> <span
  m='58210'>up</span> <span m='58330'>here</span> <span m='58520'>besides</span>
  <span m='58960'>just</span> <span m='59220'>x.</span> <span
  m='60090'>What</span> <span m='60310'>we're</span> <span
  m='60430'>going</span> <span m='60600'>to</span> <span m='60660'>use</span>
  <span m='60840'>is</span> <span m='61460'>we're</span> <span
  m='61560'>going</span> <span m='61780'>to</span> <span
  m='61890'>combine</span> <span m='62350'>the</span> <span
  m='62440'>fundamental</span> <span m='62880'>theorem of</span> <span
  m='63220'>calculus</span> <span m='63960'>and</span> <span
  m='64250'>the</span> <span m='64330'>chain</span> <span m='64640'>rule.</span>
  </p><p><span m='65470'>So,</span> <span m='65980'>let's</span> <span
  m='66290'>start</span> <span m='66610'>off</span> <span m='66870'>with</span>
  <span m='67090'>how</span> <span m='67270'>we</span> <span
  m='67390'>would</span> <span m='67610'>do</span> <span m='67790'>this</span>
  <span m='68090'>if</span> <span m='68320'>it</span> <span
  m='68430'>were</span> <span m='69340'>the</span> <span
  m='69580'>integral</span> <span m='69840'>from</span> <span m='69990'>0</span>
  <span m='70220'>to</span> <span m='70320'>x, as</span> <span
  m='70750'>I</span> <span m='70830'>mentioned.</span> <span m='71790'>So</span>
  <span m='72270'>we'll</span> <span m='72440'>define</span> <span
  m='75530'>capital</span> <span m='76020'>F</span> <span m='76180'>of</span>
  <span m='76250'>x</span> <span m='77660'>to</span> <span m='77750'>be</span>
  <span m='77980'>equal</span> <span m='78080'>to</span> <span
  m='78230'>the</span> <span m='78320'>integral</span> <span
  m='78620'>from</span> <span m='78800'>0</span> <span m='79000'>to</span> <span
  m='79460'>x</span> <span m='80380'>cosine</span> <span m='80870'>t</span>
  <span m='81130'>dt.</span> <span m='84660'>And</span> <span
  m='84990'>then</span> <span m='85130'>we</span> <span m='85270'>know</span>
  <span m='86310'>that</span> <span m='86500'>f</span> <span
  m='86760'>prime</span> <span m='87100'>of x</span> <span m='89290'>is</span>
  <span m='89440'>equal  to</span> <span m='89500'>cosine</span> <span
  m='89730'>x.</span> <span m='91970'>Now</span> <span m='92120'>the</span>
  <span m='92210'>problem</span> <span m='92590'>is,</span> <span
  m='92740'>we</span> <span m='92850'>don't</span> <span m='93060'>just</span>
  <span m='93240'>have</span> <span m='93440'>this,</span> <span
  m='93710'>as</span> <span m='93860'>I</span> <span m='93950'>mentioned.</span>
  <span m='94400'>What</span> <span m='94520'>we</span> <span
  m='94620'>actually</span> <span m='95040'>have--</span> <span
  m='96580'>let</span> <span m='96875'>me write this</span> <span
  m='97170'>down--</span> <span m='98870'>we</span> <span m='99210'>have</span>
  <span m='100800'>F of</span> <span m='101190'>x</span> <span
  m='101390'>squared. Right?</span> <span m='103320'>That's</span> <span
  m='103580'>what</span> <span m='104240'>this--</span> <span
  m='104610'>sorry</span> <span m='105100'>let</span> <span m='105260'>me</span>
  <span m='105830'>highlight</span> <span m='106350'>what</span> <span
  m='106530'>I</span> <span m='106590'>mean--</span> <span
  m='107060'>this</span> <span m='107360'>boxed</span> <span
  m='107860'>thing</span> <span m='110480'>is</span> <span m='110820'>F</span>
  <span m='111220'>of</span> <span m='111460'>x</span> <span
  m='111750'>squared.</span> <span m='112680'>So</span> <span
  m='112900'>we</span> <span m='113020'>took</span> <span m='113220'>F</span>
  <span m='113370'>of</span> <span m='113490'>x</span> <span
  m='113950'>and</span> <span m='114090'>we</span> <span
  m='114190'>evaluated</span> <span m='114870'>it</span> <span
  m='115170'>at</span> <span m='115320'>x</span> <span
  m='115510'>squared.</span> <span m='116100'>That's</span> <span
  m='116330'>what</span> <span m='116450'>we</span> <span m='116550'>get</span>
  <span m='116710'>in</span> <span m='116800'>the</span> <span
  m='116870'>box.</span> </p><p><span m='117650'>And</span> <span m='117910'>so
  if</span> <span m='118070'>we</span> <span m='118250'>want to</span> <span
  m='118490'>find</span> <span m='118770'>d/dx</span> <span m='119400'>of</span>
  <span m='120130'>F</span> <span m='120300'>of</span> <span m='120420'>x</span>
  <span m='120640'>squared,</span> <span m='121050'>it</span> <span
  m='121240'>really</span> <span m='121500'>is</span> <span
  m='121680'>just</span> <span m='121930'>the</span> <span
  m='121970'>chain</span> <span m='122240'>rule.</span> <span
  m='122760'>We</span> <span m='123010'>really</span> <span
  m='123280'>want</span> <span m='123420'>to</span> <span
  m='123480'>think</span> <span m='123680'>of</span> <span
  m='123760'>this</span> <span m='123940'>as</span> <span m='124030'>a</span>
  <span m='124100'>composition</span> <span m='124600'>of</span> <span
  m='124690'>functions.</span> <span m='125670'>The first, the</span> <span
  m='126310'>outside</span> <span m='126680'>function</span> <span
  m='127460'>is</span> <span m='127730'>capital</span> <span m='128150'>F</span>
  <span m='128550'>and</span> <span m='128690'>the</span> <span
  m='128750'>inside</span> <span m='129100'>function</span> <span
  m='129570'>is</span> <span m='129710'>x</span> <span
  m='129910'>squared.</span> </p><p><span m='131140'>So</span> <span
  m='131360'>just</span> <span m='131670'>in</span> <span
  m='133110'>general,</span> <span m='133850'>how</span> <span
  m='134030'>do</span> <span m='134100'>we</span> <span m='134220'>think</span>
  <span m='134440'>about</span> <span m='134670'>the</span> <span
  m='134740'>chain rule?</span> <span m='135220'>Well</span> <span
  m='135440'>remember what</span> <span m='135860'>we</span> <span
  m='136000'>do--</span> <span m='137290'>let me</span> <span
  m='137520'>come</span> <span m='137690'>back</span> <span
  m='137890'>here</span> <span m='138040'>for</span> <span m='138160'>a</span>
  <span m='138240'>second--</span> <span m='138980'>remember</span> <span
  m='139360'>what we</span> <span m='139480'>do</span> <span
  m='139640'>is</span> <span m='139740'>we</span> <span m='139840'>take</span>
  <span m='140000'>the</span> <span m='140090'>derivative</span> <span
  m='140530'>of</span> <span m='140650'>the</span> <span
  m='140770'>outside</span> <span m='141220'>function,</span> <span
  m='142200'>we</span> <span m='142410'>evaluate</span> <span
  m='142730'>it</span> <span m='143050'>at</span> <span m='143150'>the</span>
  <span m='143250'>inside</span> <span m='143750'>function</span> <span
  m='144680'>and</span> <span m='144830'>then</span> <span m='144930'>we</span>
  <span m='145030'>take</span> <span m='145230'>the</span> <span
  m='145300'>derivative</span> <span m='145730'>of</span> <span
  m='145820'>the</span> <span m='145920'>inside</span> <span
  m='146310'>function</span> <span m='146740'>and</span> <span
  m='146880'>we</span> <span m='146970'>multiply</span> <span
  m='147410'>those</span> <span m='147620'>two</span> <span
  m='147780'>together.</span> <span m='149060'>So</span> <span
  m='149290'>all</span> <span m='149500'>I</span> <span m='149620'>have</span>
  <span m='149880'>to</span> <span m='150010'>do</span> <span
  m='150190'>is</span> <span m='150360'>figure</span> <span
  m='150750'>out,</span> <span m='151440'>what</span> <span m='151790'>is</span>
  <span m='151940'>the</span> <span m='152040'>following</span> <span
  m='152450'>thing?</span> <span m='153160'>We</span> <span
  m='153330'>know</span> <span m='155985'>d/dx</span> <span
  m='156320'>the</span> <span m='156410'>quantity</span> <span
  m='157950'>F</span> <span m='158225'>of</span> <span m='158500'>x
  squared</span> <span m='160300'>should</span> <span m='160520'>be</span> <span
  m='160650'>equal</span> <span m='160910'>to</span> <span m='162550'>F
  prime</span> <span m='163400'>evaluated</span> <span m='164570'>at</span>
  <span m='164750'>x</span> <span m='164920'>squared</span> <span
  m='166000'>times</span> <span m='166370'>2x.</span> </p><p><span
  m='167800'>That's</span> <span m='168010'>just</span> <span
  m='168230'>what</span> <span m='168320'>we</span> <span m='168450'>said</span>
  <span m='168630'>earlier, right?</span> <span m='169210'>It's</span> <span
  m='169350'>the</span> <span m='169440'>derivative</span> <span
  m='169840'>of</span> <span m='170000'>F</span> <span
  m='171200'>evaluated</span> <span m='172050'>at</span> <span
  m='172140'>x</span> <span m='172340'>squared</span> <span
  m='173280'>times</span> <span m='173690'>the</span> <span
  m='173800'>derivative</span> <span m='174320'>of x</span> <span
  m='174520'>squared.</span> <span m='175920'>So</span> <span
  m='176130'>now</span> <span m='176300'>I</span> <span m='176370'>just</span>
  <span m='176560'>have</span> <span m='176660'>to</span> <span
  m='176770'>figure</span> <span m='177050'>out</span> <span
  m='177160'>what</span> <span m='177290'>this</span> <span
  m='177530'>is.</span> <span m='178180'>Well</span> <span
  m='178640'>let's</span> <span m='178840'>go</span> <span
  m='178980'>back</span> <span m='179360'>to</span> <span m='179470'>the</span>
  <span m='179560'>other</span> <span m='179750'>side</span> <span
  m='180030'>and</span> <span m='180160'>see</span> <span m='180330'>what</span>
  <span m='180480'>we</span> <span m='180610'>wrote</span> <span m='180950'>that
  F</span> <span m='181180'>prime</span> <span m='181470'>was.</span> <span
  m='182700'>If we come</span> <span m='183000'>over</span> <span
  m='183200'>here,</span> <span m='184150'>we</span> <span m='184310'>see</span>
  <span m='184500'>F</span> <span m='184760'>prime</span> <span
  m='185120'>at</span> <span m='185340'>x</span> <span m='186430'>is</span>
  <span m='186610'>just</span> <span m='186800'>cosine</span> <span
  m='187200'>x.</span> <span m='188310'>So</span> <span m='188580'>F</span>
  <span m='188850'>prime</span> <span m='189470'>at</span> <span
  m='189650'>x</span> <span m='189870'>squared</span> <span m='190900'>is</span>
  <span m='191060'>going</span> <span m='191290'>to</span> <span
  m='191370'>be</span> <span m='192410'>this</span> <span
  m='192630'>function</span> <span m='193240'>evaluated</span> <span
  m='193665'>at x</span> <span m='194090'>squared.</span> <span
  m='195090'>That's</span> <span m='195300'>just</span> <span
  m='195550'>cosine</span> <span m='196310'>of x</span> <span
  m='196650'>squared.</span> </p><p><span m='197730'>So</span> <span
  m='198000'>we</span> <span m='198140'>see</span> <span m='198330'>over</span>
  <span m='198530'>here,</span> <span m='198830'>we</span> <span
  m='198960'>just</span> <span m='199250'>get</span> <span
  m='201090'>cosine</span> <span m='201395'>x</span> <span
  m='201700'>squared</span> <span m='203830'>times</span> <span
  m='204180'>2x.</span> <span m='204830'>And</span> <span
  m='205000'>because</span> <span m='205560'>I'm</span> <span
  m='206220'>a</span> <span m='206310'>mathematician,</span> <span
  m='206990'>I</span> <span m='207070'>want to</span> <span
  m='207320'>write</span> <span m='207550'>the</span> <span m='207670'>2x</span>
  <span m='207830'>in</span> <span m='208190'>front</span> <span
  m='208600'>before</span> <span m='208960'>I</span> <span
  m='209060'>finish.</span> <span m='209860'>Because otherwise</span> <span
  m='210240'>I</span> <span m='210320'>get</span> <span
  m='210490'>confused.</span> <span m='211670'>So</span> <span
  m='212120'>the</span> <span m='212300'>answer</span> <span
  m='212630'>here</span> <span m='212920'>is</span> <span m='213030'>just</span>
  <span m='213320'>2x</span> <span m='213860'>times</span> <span
  m='214120'>cosine</span> <span m='214440'>x</span> <span
  m='214670'>squared.</span> </p><p><span m='216100'>Now</span> <span
  m='216270'>I want</span> <span m='216520'>to point</span> <span
  m='216640'>out</span> <span m='216820'>really</span> <span
  m='217100'>what</span> <span m='217330'>we</span> <span m='217450'>did</span>
  <span m='217650'>here.</span> <span m='217830'>This</span> <span
  m='218020'>is</span> <span m='218560'>the</span> <span
  m='218660'>answer</span> <span m='218860'>to</span> <span
  m='218950'>this</span> <span m='219130'>particular</span> <span
  m='219550'>problem,</span> <span m='219980'>but</span> <span
  m='220100'>we</span> <span m='220200'>can</span> <span m='220370'>now</span>
  <span m='220670'>solve</span> <span m='221050'>problems</span> <span
  m='222480'>in</span> <span m='222680'>general,</span> <span
  m='223070'>when</span> <span m='223190'>I</span> <span m='223240'>put</span>
  <span m='223490'>any</span> <span m='224390'>function</span> <span
  m='224920'>up</span> <span m='225110'>here,</span> <span m='225420'>any</span>
  <span m='225650'>function</span> <span m='226010'>of</span> <span
  m='226090'>x</span> <span m='226310'>up</span> <span m='226450'>here.
  Right?</span> <span m='227660'>Ultimately,</span> <span m='228240'>all</span>
  <span m='228500'>I</span> <span m='228620'>did</span> <span
  m='228910'>was</span> <span m='229070'>I</span> <span m='229120'>used</span>
  <span m='229760'>the</span> <span m='229900'>fundamental</span> <span
  m='230060'>theorem</span> <span m='230130'>of</span> <span
  m='230550'>calculus</span> <span m='230990'>and</span> <span
  m='231090'>the</span> <span m='231160'>chain</span> <span
  m='231470'>rule.</span> <span m='232100'>So</span> <span m='232380'>any</span>
  <span m='232680'>function</span> <span m='233060'>I</span> <span
  m='233130'>put</span> <span m='233340'>up</span> <span m='233460'>here,</span>
  <span m='233830'>I</span> <span m='233930'>can</span> <span
  m='234100'>do</span> <span m='234230'>exactly</span> <span
  m='234870'>the</span> <span m='234970'>same</span> <span
  m='235220'>process.</span> <span m='236260'>I</span> <span
  m='236510'>would</span> <span m='236740'>define</span> <span
  m='237180'>F</span> <span m='237430'>of</span> <span m='237570'>x</span> <span
  m='237890'>to</span> <span m='238000'>be</span> <span m='238210'>this</span>
  <span m='238570'>type</span> <span m='238850'>of</span> <span
  m='238940'>thing,</span> <span m='239380'>the</span> <span
  m='239570'>way</span> <span m='239740'>we</span> <span m='239870'>would</span>
  <span m='240030'>define</span> <span m='240360'>it</span> <span
  m='240470'>for</span> <span m='240570'>the</span> <span
  m='240660'>fundamental</span> <span m='241040'>theorem of</span> <span
  m='241350'>calculus.</span> <span m='242440'>I</span> <span
  m='242570'>would</span> <span m='242760'>know</span> <span
  m='242950'>what</span> <span m='243100'>F</span> <span m='243230'>prime</span>
  <span m='243460'>of</span> <span m='243790'>x was.</span> <span
  m='244550'>And</span> <span m='244760'>then</span> <span m='244890'>I</span>
  <span m='244970'>would</span> <span m='245100'>have</span> <span
  m='245260'>to</span> <span m='245380'>evaluate</span> <span
  m='246370'>F</span> <span m='247310'>at a, at</span> <span
  m='248520'>this</span> <span m='248760'>function</span> <span
  m='249130'>up</span> <span m='249250'>here,</span> <span
  m='249530'>whatever</span> <span m='249830'>I</span> <span
  m='249880'>put</span> <span m='250110'>up</span> <span
  m='250240'>there.</span> <span m='251190'>So</span> <span m='251350'>in</span>
  <span m='251450'>this</span> <span m='251580'>case</span> <span
  m='251840'>it</span> <span m='251900'>was</span> <span m='252020'>x</span>
  <span m='252180'>squared.</span> <span m='252560'>I</span> <span
  m='252600'>could</span> <span m='252770'>have</span> <span
  m='252860'>made</span> <span m='253020'>it</span> <span
  m='253060'>natural</span> <span m='253450'>log</span> <span
  m='253825'>x.</span> <span m='254200'>I</span> <span
  m='254350'>could've</span> <span m='254590'>made</span> <span
  m='254780'>it</span> <span m='255350'>some</span> <span m='255720'>big</span>
  <span m='255940'>polynomial</span> <span m='256510'>or</span> <span
  m='256700'>something</span> <span m='257060'>more</span> <span
  m='257380'>complicated. Right?</span> </p><p><span m='259580'>And</span> <span
  m='259780'>once</span> <span m='259990'>I</span> <span m='260080'>do</span>
  <span m='260290'>that,</span> <span m='260770'>I</span> <span
  m='260900'>just</span> <span m='261150'>follow</span> <span
  m='261360'>this</span> <span m='261510'>same</span> <span
  m='261740'>process.</span> <span m='262790'>Now,</span> <span
  m='263050'>instead</span> <span m='263520'>of</span> <span
  m='263640'>the</span> <span m='263760'>x</span> <span
  m='263970'>squared</span> <span m='264380'>here</span> <span
  m='264740'>I</span> <span m='264810'>would</span> <span m='264960'>have</span>
  <span m='265120'>that</span> <span m='265290'>other</span> <span
  m='265460'>function.</span> <span m='265880'>So I'd</span> <span
  m='266120'>evaluate</span> <span m='266580'>capital</span> <span m='266910'>F
  at</span> <span m='267280'>whatever</span> <span m='267590'>function</span>
  <span m='267920'>that</span> <span m='268090'>is</span> <span
  m='268940'>times</span> <span m='269330'>the</span> <span
  m='269420'>derivative</span> <span m='270220'>of</span> <span
  m='271280'>that</span> <span m='271500'>function.</span> <span
  m='271960'>It's</span> <span m='272110'>exactly</span> <span
  m='272640'>the</span> <span m='272750'>same</span> <span
  m='272950'>process.</span> <span m='273540'>So</span> <span
  m='273710'>I</span> <span m='273740'>want</span> <span m='273930'>to</span>
  <span m='273990'>point</span> <span m='274220'>out</span> <span
  m='276540'>that</span> <span m='276660'>this</span> <span m='276870'>is</span>
  <span m='277020'>a</span> <span m='279400'>bigger</span> <span
  m='279890'>situation</span> <span m='280315'>than</span> <span
  m='280740'>I</span> <span m='280860'>had</span> <span
  m='280940'>before,</span> <span m='281190'>or</span> <span m='281530'>a</span>
  <span m='281750'>bigger</span> <span m='281830'>situation</span> <span
  m='282070'>than</span> <span m='282790'>just</span> <span
  m='283070'>this</span> <span m='284180'>little</span> <span
  m='284380'>problem.</span> <span m='285220'>So,</span> <span
  m='285530'>just</span> <span m='285800'>so</span> <span m='285880'>you</span>
  <span m='286030'>understand</span> <span m='286590'>that. OK?</span>
  </p><p><span m='288570'>So</span> <span m='288820'>again,</span> <span
  m='289270'>I</span> <span m='289410'>just</span> <span m='289610'>want
  to</span> <span m='289790'>say</span> <span m='289930'>one</span> <span
  m='290150'>more</span> <span m='290310'>time.</span> <span
  m='290920'>Now</span> <span m='291260'>you</span> <span m='291420'>know</span>
  <span m='291540'>how</span> <span m='291630'>to</span> <span
  m='291710'>solve</span> <span m='291940'>problems</span> <span
  m='292520'>where</span> <span m='292650'>you</span> <span
  m='292760'>have</span> <span m='292940'>any</span> <span
  m='293290'>other</span> <span m='293540'>function</span> <span
  m='293870'>of</span> <span m='293960'>x</span> <span m='294160'>up</span>
  <span m='294290'>here</span> <span m='294540'>and</span> <span
  m='294730'>you</span> <span m='294800'>want to</span> <span
  m='294980'>take</span> <span m='295150'>the</span> <span
  m='295240'>derivative</span> <span m='296190'>of</span> <span
  m='296400'>this</span> <span m='296630'>kind</span> <span m='296960'>of</span>
  <span m='297420'>expression</span> <span m='297880'>of</span> <span
  m='297980'>an</span> <span m='298070'>integral</span> <span
  m='298830'>with</span> <span m='299120'>another</span> <span
  m='299400'>function</span> <span m='299740'>of</span> <span
  m='300160'>x</span> <span m='300430'>up</span> <span m='300590'>there.</span>
  <span m='301000'>All right,</span> <span m='301410'>I</span> <span
  m='301690'>think</span> <span m='301900'>I'll</span> <span
  m='301970'>stop</span> <span m='302210'>there.</span> </p>
embedded_media:
  - uid: af797505acac5f2f8a277c3e53bf9cd4
    parent_uid: 7e13c1234f2cd818f1f56bc9d8e06ea7
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: lEOjMAmkI-U
  - uid: 8a7aa703981e42c335a30bb6141d34d9
    parent_uid: 7e13c1234f2cd818f1f56bc9d8e06ea7
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/lEOjMAmkI-U/default.jpg'
  - uid: 1a282366565a6786e0a2893f170dcf7c
    parent_uid: 7e13c1234f2cd818f1f56bc9d8e06ea7
    id: 3Play-3PlayYouTubeid-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: lEOjMAmkI-U
  - uid: c93104270dffaadcf8df6d8cc199bce9
    parent_uid: 7e13c1234f2cd818f1f56bc9d8e06ea7
    id: lEOjMAmkI-U.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-3-the-definite-integral-and-its-applications/part-b-second-fundamental-theorem-areas-volumes/session-51-the-second-fundamental-theorem-of-calculus/second-fundamental-theorem-and-chain-rule/lEOjMAmkI-U.srt
  - uid: d8eea6d5d5d2d0ce4298a68a2b5d5274
    parent_uid: 7e13c1234f2cd818f1f56bc9d8e06ea7
    id: lEOjMAmkI-U.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-3-the-definite-integral-and-its-applications/part-b-second-fundamental-theorem-areas-volumes/session-51-the-second-fundamental-theorem-of-calculus/second-fundamental-theorem-and-chain-rule/lEOjMAmkI-U.pdf
  - uid: 6c5ece5b1d5240ded591293edafbc9b0
    parent_uid: 7e13c1234f2cd818f1f56bc9d8e06ea7
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: ad63077c415739191d4a3fe346e768cd
    parent_uid: 7e13c1234f2cd818f1f56bc9d8e06ea7
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 7aaa4815d4f0311b8cde32c4619de3b2
    parent_uid: 7e13c1234f2cd818f1f56bc9d8e06ea7
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      http://www.archive.org/download/MIT18_01SCF10/MIT18_01SCF10Rec_40a_300k.mp4
  - uid: f16abc5d933dbd181bd574340de0341a
    parent_uid: 7e13c1234f2cd818f1f56bc9d8e06ea7
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/second-fundamental-theorem/id414308064?i=90319630
type: courses
layout: video
---
