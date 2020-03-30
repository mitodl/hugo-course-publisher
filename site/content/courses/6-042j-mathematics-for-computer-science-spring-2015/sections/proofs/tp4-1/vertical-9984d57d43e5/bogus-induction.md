---
title: Bogus Induction
uid: 41b1f60efbc17acea6f567b2656481a8
parent_uid: 5c7eefc2aa74f435dfec3b66a4c02648
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-9984d57d43e5/bogus-induction
short_url: bogus-induction
inline_embed_id: 61173422bogusinduction58393400
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='390'>PROFESSOR: Understanding</span> <span m='1240'>proofs</span>
  <span m='1750'>includes</span> <span m='2240'>the</span> <span
  m='2350'>ability</span> <span m='2890'>to</span> <span m='3020'>spot</span>
  <span m='3480'>mistakes</span> <span m='4390'>in</span> <span
  m='4590'>them.</span> <span m='5580'>And</span> <span m='6000'>as</span> <span
  m='6260'>a</span> <span m='6360'>test</span> <span m='6750'>of</span> <span
  m='6860'>that</span> <span m='7110'>skill</span> <span m='7580'>and</span>
  <span m='7750'>also</span> <span m='8350'>your</span> <span
  m='8700'>understanding</span> <span m='9320'>of</span> <span
  m='9400'>induction,</span> <span m='10090'>let</span> <span
  m='10250'>me</span> <span m='10390'>see</span> <span m='10590'>if</span> <span
  m='10740'>I</span> <span m='10810'>can</span> <span m='11000'>put</span> <span
  m='11220'>one</span> <span m='11360'>over</span> <span m='11850'>on
  you.</span> <span m='13190'>I'm</span> <span m='13420'>going</span> <span
  m='13600'>to</span> <span m='13660'>show</span> <span m='13900'>you</span>
  <span m='14280'>a</span> <span m='15180'>bogus</span> <span
  m='15550'>proof</span> <span m='15850'>by</span> <span
  m='15990'>induction.</span> <span m='17510'>And</span> <span
  m='17710'>I'm</span> <span m='17770'>going</span> <span m='17920'>to</span>
  <span m='17990'>prove</span> <span m='18290'>something</span> <span
  m='18720'>that's</span> <span m='18950'>patently</span> <span
  m='19450'>absurd.</span> <span m='19960'>Namely,</span> <span
  m='20860'>that</span> <span m='21240'>all</span> <span m='21590'>horses</span>
  <span m='22140'>have</span> <span m='22340'>the</span> <span
  m='22430'>same</span> <span m='22810'>color.</span> <span m='23600'>Say</span>
  <span m='23810'>they're</span> <span m='23930'>all</span> <span
  m='24090'>black.</span> <span m='26470'>So,</span> <span
  m='26910'>there's</span> <span m='27140'>a</span> <span m='27190'>bunch</span>
  <span m='27510'>of</span> <span m='28060'>black</span> <span
  m='28540'>horses</span> <span m='29080'>with</span> <span
  m='30220'>maybe</span> <span m='30480'>some</span> <span
  m='30680'>highlighted</span> <span m='31290'>brown</span> <span
  m='31810'>manes.</span> </p><p><span m='34610'>I'm</span> <span
  m='34750'>going</span> <span m='34880'>to</span> <span m='34950'>prove</span>
  <span m='35170'>this</span> <span m='35320'>by</span> <span
  m='35440'>induction.</span> <span m='36870'>And</span> <span
  m='37040'>for</span> <span m='37190'>a</span> <span m='37240'>start,</span>
  <span m='38850'>there's</span> <span m='39150'>no</span> <span
  m='39390'>n</span> <span m='39660'>mentioned</span> <span m='40100'>in</span>
  <span m='40200'>the</span> <span m='40300'>theorem,</span> <span
  m='40750'>so</span> <span m='40970'>that's</span> <span
  m='41740'>common</span> <span m='42550'>for</span> <span
  m='42750'>various</span> <span m='43150'>kinds</span> <span
  m='43390'>of</span> <span m='43510'>things</span> <span m='44620'>that</span>
  <span m='44910'>you</span> <span m='45080'>need</span> <span
  m='45330'>to</span> <span m='45410'>prove</span> <span m='45630'>by</span>
  <span m='45800'>induction.</span> <span m='46190'>So I</span> <span
  m='46430'>have to</span> <span m='46550'>rephrase</span> <span
  m='47090'>it</span> <span m='47200'>in</span> <span m='47320'>terms</span>
  <span m='47670'>of</span> <span m='47790'>n.</span> <span
  m='48230'>It's</span> <span m='48390'>going</span> <span m='48520'>to</span>
  <span m='48570'>be</span> <span m='48720'>by</span> <span
  m='48870'>induction</span> <span m='49300'>on n.</span> <span
  m='49670'>The</span> <span m='49760'>induction</span> <span
  m='50140'>hypothesis</span> <span m='50840'>is</span> <span
  m='50950'>going</span> <span m='51110'>to</span> <span m='51170'>be</span>
  <span m='51950'>that</span> <span m='52200'>any</span> <span
  m='52540'>set</span> <span m='53160'>consisting</span> <span
  m='53670'>of</span> <span m='53820'>exactly</span> <span m='54410'>n</span>
  <span m='54650'>horses</span> <span m='55760'>will</span> <span
  m='56110'>all</span> <span m='56400'>have</span> <span m='56990'>the</span>
  <span m='57090'>same</span> <span m='57360'>color.</span> </p><p><span
  m='59390'>Let's</span> <span m='59670'>proceed</span> <span
  m='60240'>to</span> <span m='60320'>prove</span> <span m='60640'>this.</span>
  <span m='62090'>Now,</span> <span m='62200'>I'm</span> <span
  m='62300'>going</span> <span m='62440'>to</span> <span m='62480'>use</span>
  <span m='62750'>the</span> <span m='62840'>base</span> <span
  m='63180'>case</span> <span m='63510'>n</span> <span m='63660'>equals</span>
  <span m='64040'>1,</span> <span m='64620'>just</span> <span
  m='64890'>because</span> <span m='65820'>I</span> <span m='65910'>don't</span>
  <span m='66090'>want</span> <span m='66240'>to</span> <span
  m='66300'>distract</span> <span m='66810'>you</span> <span
  m='66980'>with</span> <span m='67180'>suspicions</span> <span
  m='67900'>that</span> <span m='68070'>the</span> <span m='68150'>base</span>
  <span m='68430'>case</span> <span m='68730'>n</span> <span
  m='68860'>equals</span> <span m='69260'>0,</span> <span m='69750'>that</span>
  <span m='69890'>is</span> <span m='70010'>no</span> <span
  m='70210'>horses,</span> <span m='71400'>is</span> <span
  m='71600'>cheating</span> <span m='71940'>somehow.</span> <span m='73285'>It
  would</span> <span m='73600'>be,</span> <span m='73750'>in</span> <span
  m='73830'>fact,</span> <span m='74090'>be</span> <span
  m='74210'>perfectly</span> <span m='74640'>legitimate</span> <span
  m='75150'>to</span> <span m='75210'>start</span> <span m='75480'>with</span>
  <span m='75600'>n</span> <span m='75690'>equals</span> <span
  m='75990'>0</span> <span m='76300'>and</span> <span m='76380'>argue</span>
  <span m='77220'>that</span> <span m='78020'>all</span> <span
  m='78230'>the</span> <span m='78300'>horses</span> <span m='78740'>in</span>
  <span m='78830'>the</span> <span m='78980'>empty</span> <span
  m='79280'>set</span> <span m='79680'>have</span> <span m='79890'>the</span>
  <span m='79960'>same</span> <span m='80240'>color,</span> <span
  m='81390'>because</span> <span m='82160'>there's</span> <span
  m='82350'>nothing</span> <span m='82620'>in</span> <span m='82680'>the</span>
  <span m='82780'>empty</span> <span m='83030'>set.</span> <span
  m='83250'>However,</span> <span m='83690'>let's</span> <span
  m='83960'>not</span> <span m='84120'>get</span> <span m='84250'>into</span>
  <span m='84460'>that.</span> </p><p><span m='85020'>We'll</span> <span
  m='85160'>start</span> <span m='85360'>with</span> <span m='85490'>n</span>
  <span m='85570'>equals</span> <span m='85840'>one.</span> <span
  m='86275'>And</span> <span m='86710'>indeed,</span> <span m='87640'>if</span>
  <span m='87760'>you</span> <span m='87870'>look</span> <span
  m='88080'>at</span> <span m='88200'>any</span> <span m='88390'>set</span>
  <span m='88830'>of one</span> <span m='89200'>horse,</span> <span
  m='90160'>it</span> <span m='90340'>is</span> <span m='90540'>the</span> <span
  m='90630'>same</span> <span m='90880'>color</span> <span m='91270'>of</span>
  <span m='91400'>it</span> <span m='91600'>as</span> <span
  m='91770'>itself.</span> <span m='92420'>And</span> <span m='92590'>in</span>
  <span m='92680'>fact,</span> <span m='93070'>I've</span> <span
  m='93310'>proved</span> <span m='93640'>the</span> <span m='93710'>base</span>
  <span m='94170'>case</span> <span m='95230'>n</span> <span
  m='95380'>equals</span> <span m='95730'>1.</span> <span m='97180'>Let's</span>
  <span m='97410'>keep</span> <span m='97610'>going.</span> </p><p><span
  m='98910'>Now,</span> <span m='99530'>in</span> <span m='99700'>the</span>
  <span m='99780'>inductive</span> <span m='100210'>step,</span> <span
  m='100480'>I'm</span> <span m='100630'>allowed</span> <span
  m='100950'>to</span> <span m='101090'>assume</span> <span
  m='102010'>that</span> <span m='102540'>n</span> <span
  m='102860'>horses</span> <span m='103350'>have</span> <span
  m='103530'>the</span> <span m='103600'>same</span> <span
  m='103910'>color,</span> <span m='104970'>where</span> <span
  m='105210'>n</span> <span m='105390'>is</span> <span m='105540'>any</span>
  <span m='105750'>number</span> <span m='106240'>greater</span> <span
  m='106480'>than</span> <span m='106550'>or</span> <span
  m='106650'>equal</span> <span m='106830'>to</span> <span m='106930'>0.</span>
  <span m='108330'>Now</span> <span m='108580'>right</span> <span
  m='108840'>here,</span> <span m='109160'>students</span> <span
  m='109650'>complain</span> <span m='110340'>that</span> <span
  m='110510'>that's</span> <span m='110760'>not</span> <span
  m='111000'>fair,</span> <span m='111390'>because</span> <span
  m='111780'>you're</span> <span m='112080'>already</span> <span
  m='112320'>assuming</span> <span m='112700'>something</span> <span
  m='113080'>false</span> <span m='113450'>and</span> <span
  m='113560'>that's</span> <span m='113790'>absurd.</span> <span
  m='114870'>Well,</span> <span m='115170'>yeah,</span> <span
  m='116520'>it</span> <span m='116680'>is</span> <span
  m='116890'>absurd.</span> <span m='117800'>But</span> <span
  m='118300'>that</span> <span m='118540'>can't</span> <span
  m='118770'>be</span> <span m='118880'>the</span> <span
  m='119000'>problem.</span> <span m='119460'>I'm</span> <span
  m='119660'>just</span> <span m='120320'>allowed</span> <span
  m='120720'>to</span> <span m='120860'>assume</span> <span m='121170'>an</span>
  <span m='121240'>induction</span> <span m='121660'>hypothesis.</span> <span
  m='122430'>All I have</span> <span m='122680'>to</span> <span
  m='122750'>do</span> <span m='122930'>is</span> <span m='123060'>prove</span>
  <span m='123350'>that</span> <span m='123470'>n</span> <span
  m='123610'>implies</span> <span m='124040'>n</span> <span
  m='124180'>plus</span> <span m='124490'>1.</span> <span
  m='125650'>Since</span> <span m='125940'>it's</span> <span
  m='126120'>absurd,</span> <span m='126650'>there</span> <span
  m='126750'>ought</span> <span m='126890'>to</span> <span m='126950'>be</span>
  <span m='127090'>some</span> <span m='127310'>problem</span> <span
  m='127750'>with</span> <span m='127860'>the</span> <span
  m='127940'>proof.</span> <span m='128759'>Well,</span> <span
  m='129020'>let's</span> <span m='129440'>watch</span> <span
  m='129780'>and</span> <span m='129910'>see</span> <span m='130340'>if</span>
  <span m='130520'>there's</span> <span m='130699'>a</span> <span
  m='130759'>problem</span> <span m='131140'>with</span> <span
  m='131260'>the</span> <span m='131350'>proof.</span> </p><p><span
  m='132790'>So</span> <span m='132950'>again,</span> <span m='133490'>I</span>
  <span m='133610'>can</span> <span m='133790'>assume</span> <span
  m='134070'>that</span> <span m='134290'>any</span> <span m='134510'>set</span>
  <span m='134730'>of</span> <span m='134820'>n</span> <span
  m='134980'>horses</span> <span m='135360'>have</span> <span
  m='135480'>the</span> <span m='135550'>same</span> <span
  m='135800'>color.</span> <span m='136120'>I have</span> <span
  m='136310'>to</span> <span m='136430'>prove</span> <span
  m='137170'>that</span> <span m='137410'>any</span> <span m='137640'>set</span>
  <span m='137920'>of</span> <span m='138040'>n</span> <span
  m='138210'>plus</span> <span m='138510'>1</span> <span
  m='138750'>horses</span> <span m='139220'>have</span> <span
  m='139400'>the</span> <span m='139480'>same</span> <span
  m='139750'>color.</span> <span m='140790'>How</span> <span
  m='141040'>will</span> <span m='141210'>I</span> <span m='141290'>do</span>
  <span m='141500'>that?</span> <span m='141770'>Well,</span> <span
  m='142060'>there's</span> <span m='142300'>a</span> <span
  m='142350'>set</span> <span m='142560'>of</span> <span m='142660'>n</span>
  <span m='142800'>plus</span> <span m='143050'>1</span> <span
  m='143260'>horses,</span> <span m='144340'>and</span> <span
  m='144860'>let's</span> <span m='145190'>consider</span> <span
  m='145740'>the</span> <span m='145920'>first</span> <span m='146750'>n</span>
  <span m='146950'>of</span> <span m='147070'>those</span> <span
  m='147310'>horses.</span> <span m='147920'>Now</span> <span
  m='148040'>by</span> <span m='148210'>induction</span> <span
  m='148600'>hypothesis,</span> <span m='149670'>the</span> <span
  m='149760'>first</span> <span m='150060'>n</span> <span m='150200'>of</span>
  <span m='150300'>them</span> <span m='150430'>have</span> <span
  m='150600'>the</span> <span m='150670'>same</span> <span
  m='150910'>color.</span> <span m='151840'>Black,</span> <span
  m='152160'>maybe.</span> </p><p><span m='154310'>Also</span> <span
  m='154620'>by</span> <span m='154780'>induction</span> <span
  m='155140'>hypothesis,</span> <span m='156120'>the</span> <span
  m='156220'>second</span> <span m='156670'>set</span> <span
  m='156880'>of</span> <span m='157000'>n</span> <span
  m='157180'>horses--</span> <span m='157600'>that</span> <span
  m='157740'>is,</span> <span m='157810'>all</span> <span m='157990'>but</span>
  <span m='158150'>the</span> <span m='158220'>first</span> <span
  m='158510'>horse--</span> <span m='159220'>have</span> <span
  m='159410'>the</span> <span m='159480'>same</span> <span
  m='159700'>color.</span> <span m='162720'>And</span> <span
  m='163970'>what</span> <span m='164160'>that</span> <span
  m='164400'>tells</span> <span m='164680'>me</span> <span m='164890'>is</span>
  <span m='165640'>that</span> <span m='165850'>the</span> <span
  m='165930'>first</span> <span m='166400'>and</span> <span
  m='166560'>the</span> <span m='166650'>last</span> <span
  m='167100'>horse</span> <span m='168020'>have</span> <span
  m='168250'>the</span> <span m='168360'>same</span> <span
  m='168690'>color</span> <span m='169400'>as</span> <span m='169690'>all</span>
  <span m='169950'>of</span> <span m='170040'>the</span> <span
  m='170130'>horses</span> <span m='170530'>in</span> <span
  m='170620'>the</span> <span m='170690'>middle.</span> <span
  m='172400'>And</span> <span m='172570'>therefore,</span> <span
  m='173560'>in</span> <span m='173720'>fact,</span> <span
  m='174100'>they</span> <span m='174240'>all</span> <span
  m='174390'>have</span> <span m='174590'>the</span> <span
  m='174660'>same</span> <span m='174890'>color.</span> <span
  m='175670'>End</span> <span m='175900'>of</span> <span
  m='176030'>proof,</span> <span m='176720'>QED.</span> </p><p><span
  m='178960'>So,</span> <span m='179550'>there had</span> <span
  m='179650'>better</span> <span m='179930'>be</span> <span
  m='180070'>something</span> <span m='180460'>wrong.</span> <span
  m='181700'>And</span> <span m='182880'>what's</span> <span
  m='183140'>wrong?</span> <span m='184620'>Well,</span> <span
  m='184910'>what's</span> <span m='185280'>wrong</span> <span
  m='185720'>is</span> <span m='186090'>that</span> <span m='186380'>the</span>
  <span m='186470'>proof</span> <span m='187590'>that</span> <span
  m='187850'>P</span> <span m='188070'>of</span> <span m='188170'>n</span> <span
  m='188520'>implies</span> <span m='189000'>P</span> <span m='189230'>of</span>
  <span m='189320'>n</span> <span m='189480'>plus</span> <span
  m='189810'>1</span> <span m='190830'>is</span> <span m='191010'>wrong.</span>
  <span m='191720'>It</span> <span m='191830'>looked</span> <span
  m='192070'>good,</span> <span m='192850'>but</span> <span
  m='193170'>the</span> <span m='193300'>proof</span> <span
  m='193580'>that</span> <span m='193700'>P</span> <span m='193930'>of</span>
  <span m='194030'>n</span> <span m='194510'>implies</span> <span
  m='194930'>P</span> <span m='195100'>of</span> <span m='195190'>n</span> <span
  m='195320'>plus</span> <span m='195600'>1</span> <span m='195850'>has</span>
  <span m='196140'>to</span> <span m='196260'>work</span> <span
  m='196910'>for</span> <span m='197360'>all</span> <span m='197980'>n</span>
  <span m='198690'>greater</span> <span m='199030'>than</span> <span
  m='199190'>or</span> <span m='199330'>equal</span> <span m='199590'>to</span>
  <span m='199690'>the</span> <span m='199780'>base</span> <span
  m='200120'>case.</span> <span m='202490'>And</span> <span m='203250'>if</span>
  <span m='203430'>you</span> <span m='203530'>look</span> <span
  m='203700'>at</span> <span m='203790'>this</span> <span
  m='203990'>proof,</span> <span m='204620'>it</span> <span
  m='204950'>doesn't</span> <span m='205360'>work</span> <span
  m='206920'>in</span> <span m='207110'>the</span> <span m='207210'>base</span>
  <span m='207520'>case.</span> <span m='207770'>When</span> <span
  m='207950'>n</span> <span m='208130'>is</span> <span m='208270'>1</span> <span
  m='209260'>and</span> <span m='209440'>you're</span> <span
  m='209580'>trying</span> <span m='209820'>to</span> <span m='209870'>go</span>
  <span m='210150'>from</span> <span m='210300'>the</span> <span
  m='210380'>base</span> <span m='210700'>case</span> <span m='211510'>to</span>
  <span m='211720'>two</span> <span m='212130'>and</span> <span
  m='212310'>so</span> <span m='212570'>on</span> <span m='212750'>by</span>
  <span m='212890'>implication,</span> <span m='214200'>the</span> <span
  m='214480'>proof</span> <span m='214890'>breaks</span> <span
  m='215250'>down.</span> </p><p><span m='215510'>Because</span> <span
  m='215780'>what</span> <span m='215980'>happens</span> <span
  m='216780'>with</span> <span m='217000'>our</span> <span
  m='217210'>argument</span> <span m='217760'>in</span> <span
  m='217910'>the</span> <span m='218020'>case that</span> <span
  m='218410'>we're</span> <span m='218560'>trying</span> <span
  m='218760'>to</span> <span m='218850'>prove</span> <span
  m='219580'>that</span> <span m='220070'>P</span> <span m='220350'>of</span>
  <span m='220500'>n</span> <span m='220830'>implies</span> <span
  m='221240'>P</span> <span m='221440'>of</span> <span m='221530'>n</span> <span
  m='221690'>plus</span> <span m='221960'>1</span> <span m='222240'>in</span>
  <span m='222390'>the</span> <span m='222480'>case</span> <span
  m='222820'>that</span> <span m='222970'>n</span> <span
  m='223110'>equals</span> <span m='223460'>1,</span> <span
  m='224220'>well</span> <span m='224430'>in</span> <span m='224520'>that</span>
  <span m='224730'>case,</span> <span m='225020'>there</span> <span
  m='225220'>aren't</span> <span m='225530'>any</span> <span
  m='225900'>middle</span> <span m='226220'>horses.</span> <span
  m='227450'>N</span> <span m='227640'>plus</span> <span m='227940'>1</span>
  <span m='228140'>is</span> <span m='228300'>2,</span> <span
  m='229480'>so</span> <span m='229940'>there's</span> <span m='230150'>a</span>
  <span m='230200'>first</span> <span m='230490'>horse.</span> <span
  m='231650'>And</span> <span m='232240'>that's</span> <span
  m='232440'>the</span> <span m='232520'>first</span> <span m='232810'>n</span>
  <span m='232970'>horses.</span> <span m='233440'>And</span> <span
  m='233620'>then the</span> <span m='233690'>second</span> <span
  m='234090'>half</span> <span m='234510'>of</span> <span m='234600'>set</span>
  <span m='234930'>of</span> <span m='235420'>n</span> <span
  m='235620'>horses</span> <span m='236000'>is</span> <span
  m='236150'>the</span> <span m='236290'>other</span> <span
  m='236550'>horse,</span> <span m='237260'>and</span> <span
  m='237450'>there</span> <span m='237640'>are</span> <span m='237820'>no</span>
  <span m='238100'>middle</span> <span m='238320'>horses</span> <span
  m='239200'>that</span> <span m='239420'>they</span> <span
  m='239560'>both</span> <span m='240130'>have</span> <span m='240940'>a</span>
  <span m='241060'>color</span> <span m='241440'>in</span> <span
  m='241580'>common</span> <span m='242000'>with.</span> <span
  m='242550'>So,</span> <span m='242710'>the</span> <span
  m='242820'>proof</span> <span m='243090'>just</span> <span
  m='243320'>broke</span> <span m='243630'>there.</span> </p><p><span
  m='245340'>But,</span> <span m='245690'>you</span> <span
  m='245770'>might</span> <span m='246020'>not have</span> <span
  m='246200'>noticed</span> <span m='246550'>because</span> <span
  m='246760'>that</span> <span m='246950'>was</span> <span m='247120'>the</span>
  <span m='247270'>only</span> <span m='247610'>place</span> <span
  m='247930'>it</span> <span m='247990'>was</span> <span
  m='248160'>broken.</span> <span m='249230'>This</span> <span
  m='249420'>is</span> <span m='249540'>a</span> <span m='249590'>case</span>
  <span m='249820'>where</span> <span m='249930'>we</span> <span
  m='250040'>were</span> <span m='250100'>misled</span> <span
  m='250690'>by</span> <span m='250860'>ellipsis,</span> <span
  m='251430'>by</span> <span m='251580'>the</span> <span m='251720'>way.</span>
  <span m='252290'>Where</span> <span m='253720'>because</span> <span
  m='254440'>I</span> <span m='254530'>was</span> <span
  m='254770'>drawing</span> <span m='255230'>n</span> <span
  m='255420'>plus</span> <span m='255720'>1</span> <span
  m='255950'>horses</span> <span m='256500'>with--</span> <span
  m='257920'>showing</span> <span m='258170'>a</span> <span
  m='258230'>lot</span> <span m='258450'>of</span> <span
  m='258510'>horses</span> <span m='258940'>with</span> <span
  m='259130'>dots</span> <span m='259440'>in</span> <span m='259529'>the</span>
  <span m='259600'>middle,</span> <span m='260089'>it</span> <span
  m='260269'>looked</span> <span m='260540'>like</span> <span
  m='260769'>there</span> <span m='260890'>were</span> <span
  m='261149'>some.</span> <span m='261990'>But</span> <span
  m='262200'>they</span> <span m='262290'>weren't.</span> <span
  m='264070'>And</span> <span m='265410'>again,</span> <span
  m='266040'>as</span> <span m='266190'>I</span> <span m='266720'>said,</span>
  <span m='267000'>the</span> <span m='267100'>point</span> <span
  m='267380'>though</span> <span m='267590'>is</span> <span
  m='267900'>that</span> <span m='269660'>the</span> <span
  m='269840'>only</span> <span m='270560'>fallacy</span> <span
  m='271120'>in</span> <span m='271230'>this</span> <span
  m='271410'>proof</span> <span m='271960'>was</span> <span
  m='272730'>that</span> <span m='273650'>it</span> <span
  m='273860'>didn't</span> <span m='274040'>work</span> <span
  m='274270'>when</span> <span m='274390'>n</span> <span m='274540'>was</span>
  <span m='274680'>one.</span> <span m='275280'>But</span> <span
  m='275440'>it</span> <span m='275590'>certainly</span> <span
  m='275930'>worked</span> <span m='276910'>for</span> <span
  m='277060'>implying</span> <span m='277510'>that</span> <span
  m='277630'>if</span> <span m='277780'>all</span> <span m='278760'>sets</span>
  <span m='278930'>of</span> <span m='279140'>two</span> <span
  m='279320'>horses</span> <span m='279690'>are</span> <span
  m='279770'>the</span> <span m='279850'>same,</span> <span
  m='280100'>that</span> <span m='280280'>does</span> <span
  m='280570'>imply</span> <span m='280810'>that</span> <span
  m='280920'>all</span> <span m='281690'>sets</span> <span m='282040'>of</span>
  <span m='282150'>three</span> <span m='282360'>horses</span> <span
  m='283320'>are</span> <span m='283450'>the</span> <span m='283550'>same</span>
  <span m='283810'>color.</span> </p><p><span m='284160'>And</span> <span
  m='284240'>again,</span> <span m='284490'>it's</span> <span
  m='284660'>a</span> <span m='284720'>false,</span> <span
  m='285100'>we'll</span> <span m='285270'>imply</span> <span
  m='285600'>anything,</span> <span m='286600'>kind</span> <span
  m='286840'>of</span> <span m='286950'>example.</span> <span
  m='287770'>But</span> <span m='288000'>even</span> <span
  m='288250'>here,</span> <span m='289660'>the</span> <span
  m='289880'>proof</span> <span m='290140'>was</span> <span
  m='290270'>logically</span> <span m='290790'>OK.</span> <span
  m='291590'>But</span> <span m='291820'>if</span> <span m='291980'>it</span>
  <span m='292080'>breaks</span> <span m='292360'>in</span> <span
  m='292440'>one</span> <span m='292690'>place,</span> <span
  m='292960'>if</span> <span m='293080'>there's</span> <span
  m='293240'>one</span> <span m='293530'>domino</span> <span
  m='294040'>that's</span> <span m='294390'>missing</span> <span
  m='294760'>from</span> <span m='294950'>the</span> <span
  m='295050'>line</span> <span m='296010'>when</span> <span
  m='296210'>the</span> <span m='296300'>one</span> <span
  m='296490'>before</span> <span m='296860'>it</span> <span
  m='296940'>falls,</span> <span m='297630'>the</span> <span
  m='297740'>rest</span> <span m='298000'>of</span> <span m='298060'>them</span>
  <span m='298190'>stop</span> <span m='298580'>falling</span> <span
  m='299480'>and</span> <span m='299690'>the</span> <span
  m='299760'>proof</span> <span m='300220'>breaks</span> <span
  m='300550'>down.</span> </p>
embedded_media:
  - uid: 2566940450f56e0ab37ce18156bee560
    parent_uid: 41b1f60efbc17acea6f567b2656481a8
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 3c84088dfd00831a4112b1391f9a1aec
    parent_uid: 41b1f60efbc17acea6f567b2656481a8
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: f1ca3af9ed73c87cc536a7f26ea9f9d8
    parent_uid: 41b1f60efbc17acea6f567b2656481a8
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: D3E5CKebKuQ
  - uid: 7650b29f5deb361a54dff5fd62abd7b7
    parent_uid: 41b1f60efbc17acea6f567b2656481a8
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/D3E5CKebKuQ/default.jpg'
  - uid: ac29665b8ab84691cf1f2246de62d662
    parent_uid: 41b1f60efbc17acea6f567b2656481a8
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: D3E5CKebKuQ
  - uid: 030c240f435eb8f4c1c0a769b3275afc
    parent_uid: 41b1f60efbc17acea6f567b2656481a8
    id: D3E5CKebKuQ.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-9984d57d43e5/bogus-induction/D3E5CKebKuQ.srt
  - uid: f187cb2f9c07e6d4b51159b567a69bd0
    parent_uid: 41b1f60efbc17acea6f567b2656481a8
    id: D3E5CKebKuQ.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-1/vertical-9984d57d43e5/bogus-induction/D3E5CKebKuQ.pdf
  - uid: 066b3e5580ebb010f62f0ce0ba02b29d
    parent_uid: 41b1f60efbc17acea6f567b2656481a8
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: af395656b77b90725589c41019dd6d19
    parent_uid: 41b1f60efbc17acea6f567b2656481a8
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 7eaf058257e673ea5748468f692b15b3
    parent_uid: 41b1f60efbc17acea6f567b2656481a8
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_bogusinduction_ipod.mp4
type: courses
layout: video
---
