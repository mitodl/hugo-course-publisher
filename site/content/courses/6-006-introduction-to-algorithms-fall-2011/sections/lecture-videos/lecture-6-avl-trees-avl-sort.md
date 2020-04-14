---
title: 'Lecture 6: AVL Trees, AVL Sort'
uid: 3ac96f3039c3e0bb24e9603d0c4aae3c
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-6-avl-trees-avl-sort
short_url: lecture-6-avl-trees-avl-sort
inline_embed_id: '87169865lecture6:avltrees,avlsort48833804'
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture covers AVL trees, including how
  to insert elements and rebalance the tree, and then discusses the difference
  between abstract data types and data structures.</p>
  <p><strong>Instructor:</strong> Erik Demaine</p>
related_resources_text: ''
transcript: >-
  <p><span m='80'>The</span> <span m='180'>following</span> <span
  m='620'>content</span> <span m='1210'>is</span> <span m='1330'>provided</span>
  <span m='1770'>under</span> <span m='2050'>a</span> <span
  m='2090'>Creative</span> <span m='2490'>Commons</span> <span
  m='2900'>license.</span> <span m='4000'>Your</span> <span
  m='4200'>support</span> <span m='4700'>will</span> <span m='4860'>help</span>
  <span m='5100'>MIT</span> <span m='5560'>OpenCourseWare</span> <span
  m='6350'>continue</span> <span m='6860'>to</span> <span m='6940'>offer</span>
  <span m='7350'>high-quality</span> <span m='8109'>educational</span> <span
  m='8740'>resources</span> <span m='9360'>for</span> <span
  m='9510'>free.</span> <span m='10720'>To</span> <span m='10820'>make</span>
  <span m='10930'>a</span> <span m='10970'>donation</span> <span
  m='11660'>or</span> <span m='11930'>view</span> <span
  m='12370'>additional</span> <span m='12790'>materials</span> <span
  m='13330'>from</span> <span m='13480'>hundreds</span> <span
  m='13910'>of</span> <span m='14020'>MIT</span> <span m='14450'>courses,</span>
  <span m='15550'>visit</span> <span m='15780'>MIT</span> <span
  m='16200'>OpenCourseWare</span> <span m='17250'>at</span> <span
  m='17410'>ocw.mit.edu.</span> </p><p><span m='22080'>PROFESSOR:
  Continuing</span> <span m='22590'>in</span> <span m='22800'>the</span> <span
  m='22950'>theme</span> <span m='23710'>of</span> <span
  m='23900'>sorting</span> <span m='24570'>in</span> <span
  m='24730'>general,</span> <span m='25640'>but</span> <span m='25810'>in</span>
  <span m='25910'>particular,</span> <span m='26430'>binary</span> <span
  m='26820'>search</span> <span m='27190'>trees,</span> <span
  m='27640'>which</span> <span m='27740'>are a</span> <span
  m='27880'>kind</span> <span m='28140'>of</span> <span m='28230'>way</span>
  <span m='28400'>of</span> <span m='28540'>doing</span> <span
  m='28910'>dynamic</span> <span m='29510'>sorting,</span> <span
  m='30070'>if</span> <span m='30210'>you</span> <span m='30340'>will,</span>
  <span m='30950'>where</span> <span m='31210'>the</span> <span
  m='31330'>elements</span> <span m='31780'>are</span> <span
  m='31880'>coming</span> <span m='32200'>and</span> <span
  m='32320'>going.</span> <span m='32759'>And</span> <span m='33030'>at</span>
  <span m='33200'>all</span> <span m='33400'>times,</span> <span
  m='33700'>you</span> <span m='34260'>want</span> <span m='34490'>to</span>
  <span m='34540'>know</span> <span m='34740'>the</span> <span
  m='34900'>sorted</span> <span m='35250'>order</span> <span m='36020'>of</span>
  <span m='36160'>your</span> <span m='36270'>elements</span> <span
  m='36740'>by</span> <span m='36870'>storing</span> <span m='37250'>them</span>
  <span m='37460'>in</span> <span m='37640'>a</span> <span m='37700'>nice</span>
  <span m='38650'>binary</span> <span m='38960'>search</span> <span
  m='39280'>tree.</span> </p><p><span m='41170'>Remember,</span> <span
  m='42546'>in</span> <span m='42890'>general,</span> <span m='43150'>a</span>
  <span m='43410'>binary</span> <span m='43780'>search</span> <span
  m='44090'>tree</span> <span m='44960'>is</span> <span m='45140'>a</span> <span
  m='45210'>tree.</span> <span m='46360'>It's</span> <span
  m='46530'>binary,</span> <span m='47890'>and</span> <span m='48120'>it</span>
  <span m='48310'>has</span> <span m='48540'>the</span> <span
  m='48620'>search</span> <span m='48970'>property.</span> <span
  m='50040'>Those</span> <span m='50160'>three</span> <span
  m='50380'>things.</span> <span m='51300'>This</span> <span m='51400'>is</span>
  <span m='51550'>a</span> <span m='51650'>rooted</span> <span
  m='52050'>binary</span> <span m='52410'>tree.</span> <span m='52660'>It
  has</span> <span m='52840'>a</span> <span m='52940'>root.</span> <span
  m='53815'>It's</span> <span m='54310'>binary,</span> <span m='54790'>so</span>
  <span m='54930'>there's</span> <span m='55110'>a</span> <span
  m='55170'>left</span> <span m='55430'>child</span> <span m='55800'>and</span>
  <span m='55880'>a</span> <span m='55960'>right</span> <span
  m='56200'>child.</span> <span m='56870'>Some</span> <span
  m='57190'>nodes</span> <span m='57630'>lack</span> <span m='58070'>a</span>
  <span m='58200'>right</span> <span m='58420'>or</span> <span
  m='58510'>left</span> <span m='58770'>child.</span> <span
  m='59270'>Some</span> <span m='59470'>nodes</span> <span m='59730'>lack</span>
  <span m='60020'>both.</span> </p><p><span m='62040'>Every</span> <span
  m='62440'>node</span> <span m='62800'>has</span> <span m='63050'>a</span>
  <span m='63170'>key.</span> <span m='63780'>This</span> <span
  m='63960'>is</span> <span m='64069'>the</span> <span m='64160'>search</span>
  <span m='64500'>part.</span> <span m='65110'>You</span> <span
  m='65200'>store</span> <span m='65470'>key</span> <span m='65750'>in</span>
  <span m='65850'>every</span> <span m='66090'>node,</span> <span
  m='66790'>and</span> <span m='66920'>you</span> <span m='67000'>have</span>
  <span m='67180'>this</span> <span m='67350'>BST</span> <span
  m='67800'>property,</span> <span m='68850'>or</span> <span
  m='69100'>also</span> <span m='69370'>called</span> <span m='69580'>the</span>
  <span m='69650'>search</span> <span m='69910'>property,</span> <span
  m='70780'>that</span> <span m='71100'>every</span> <span
  m='71500'>node--</span> <span m='72100'>if</span> <span m='72260'>you</span>
  <span m='72360'>have</span> <span m='72550'>a</span> <span
  m='72600'>node</span> <span m='72830'>the</span> <span m='72910'>stores</span>
  <span m='73310'>key</span> <span m='73570'>x,</span> <span
  m='74280'>everybody</span> <span m='74850'>in</span> <span
  m='74950'>the</span> <span m='75040'>left</span> <span
  m='75330'>subtree</span> <span m='76540'>stores</span> <span
  m='76840'>a</span> <span m='76890'>key</span> <span m='77100'>that's</span>
  <span m='77270'>less</span> <span m='77520'>than</span> <span
  m='77620'>or</span> <span m='77720'>equal</span> <span m='77860'>to</span>
  <span m='77940'>x,</span> <span m='78320'>and</span> <span
  m='78450'>everyone</span> <span m='78840'>that's</span> <span
  m='78990'>in</span> <span m='79060'>the</span> <span m='79160'>right</span>
  <span m='79420'>subtree</span> <span m='79890'>stores</span> <span
  m='80190'>a</span> <span m='80380'>key</span> <span m='80610'>that's</span>
  <span m='80790'>greater</span> <span m='81130'>than</span> <span
  m='81200'>or</span> <span m='81300'>equal</span> <span m='81430'>to</span>
  <span m='81510'>x.</span> <span m='82130'>So</span> <span m='82260'>not</span>
  <span m='82510'>just</span> <span m='82730'>the</span> <span
  m='82820'>left</span> <span m='83070'>and</span> <span m='83180'>right</span>
  <span m='83520'>children,</span> <span m='84370'>but</span> <span
  m='84520'>every</span> <span m='85030'>descendant</span> <span
  m='85600'>way</span> <span m='85760'>down</span> <span m='86010'>there</span>
  <span m='86790'>is</span> <span m='86990'>smaller</span> <span
  m='87390'>than</span> <span m='87540'>x.</span> <span m='87870'>Every</span>
  <span m='88190'>descendent</span> <span m='88520'>way</span> <span
  m='88670'>down</span> <span m='88880'>there</span> <span m='89460'>is</span>
  <span m='89700'>greater</span> <span m='89940'>than</span> <span
  m='90120'>x.</span> </p><p><span m='90670'>So</span> <span
  m='90870'>when</span> <span m='90990'>you</span> <span m='91060'>have</span>
  <span m='91180'>a</span> <span m='91240'>binary</span> <span
  m='91560'>search</span> <span m='91860'>tree</span> <span
  m='91990'>like</span> <span m='92160'>this,</span> <span m='92370'>if</span>
  <span m='92470'>you</span> <span m='92590'>want</span> <span
  m='92790'>to</span> <span m='92830'>know</span> <span m='92970'>the</span>
  <span m='93080'>sorted</span> <span m='93450'>order,</span> <span
  m='94170'>you</span> <span m='94300'>do</span> <span m='94590'>what's</span>
  <span m='94840'>called</span> <span m='95200'>an</span> <span
  m='95320'>in-order</span> <span m='95750'>traversal.</span> <span
  m='97520'>You</span> <span m='97610'>look</span> <span m='97760'>at</span>
  <span m='97820'>a</span> <span m='97890'>node.</span> <span
  m='98260'>You</span> <span m='98410'>recursively</span> <span
  m='99040'>visit</span> <span m='99340'>the</span> <span m='99430'>left</span>
  <span m='99800'>child.</span> <span m='100750'>Then</span> <span
  m='100970'>you</span> <span m='101110'>print</span> <span
  m='101480'>out</span> <span m='101870'>the</span> <span
  m='101970'>root.</span> <span m='102740'>Then</span> <span
  m='102870'>you</span> <span m='102970'>recursively</span> <span
  m='103560'>visit</span> <span m='103840'>the</span> <span
  m='103940'>right</span> <span m='104140'>child.</span> </p><p><span
  m='104780'>So</span> <span m='105140'>in</span> <span m='105300'>this</span>
  <span m='105500'>case,</span> <span m='105880'>we'd go</span> <span
  m='106360'>left,</span> <span m='106770'>left,</span> <span
  m='107080'>print</span> <span m='107340'>11.</span> <span
  m='107742'>Print</span> <span m='108144'>20.</span> <span m='109160'>Go</span>
  <span m='109330'>right.</span> <span m='109630'>Go</span> <span
  m='109750'>left.</span> <span m='110060'>Print</span> <span
  m='110280'>26.</span> <span m='111000'>Print</span> <span
  m='111290'>29.</span> <span m='111980'>Go</span> <span m='112140'>up.</span>
  <span m='113620'>Print</span> <span m='113880'>41.</span> <span
  m='114780'>Go</span> <span m='115070'>right.</span> <span
  m='115500'>Print</span> <span m='115770'>50.</span> <span
  m='116640'>Print</span> <span m='116820'>65.</span> <span
  m='117630'>Then</span> <span m='117810'>check</span> <span
  m='118100'>that's</span> <span m='118330'>in</span> <span
  m='118410'>sorted</span> <span m='118760'>order.</span> <span m='119450'>If
  you're</span> <span m='119500'>not</span> <span m='119670'>familiar</span>
  <span m='119980'>with</span> <span m='120130'>in-order</span> <span
  m='120790'>traversal,</span> <span m='122180'>look</span> <span
  m='122400'>at</span> <span m='122480'>the</span> <span
  m='122580'>textbook.</span> <span m='123240'>It's</span> <span
  m='123350'>a</span> <span m='123650'>very</span> <span
  m='123850'>simple</span> <span m='124300'>operation.</span> <span
  m='125350'>I'm</span> <span m='125620'>not</span> <span
  m='125820'>going</span> <span m='125920'>to</span> <span
  m='125990'>talk</span> <span m='126210'>about</span> <span
  m='126410'>it</span> <span m='126480'>more</span> <span
  m='126650'>here,</span> <span m='127850'>except</span> <span
  m='128300'>we're</span> <span m='128770'>going</span> <span
  m='128900'>to</span> <span m='128949'>use</span> <span m='129199'>it.</span>
  </p><p><span m='131750'>All</span> <span m='131830'>right,</span> <span
  m='132020'>we'll</span> <span m='132150'>get</span> <span m='132340'>to</span>
  <span m='132720'>the</span> <span m='132940'>topic</span> <span
  m='133350'>of</span> <span m='133460'>today's</span> <span
  m='133740'>lecture</span> <span m='134030'>in</span> <span m='134100'>a</span>
  <span m='134140'>moment,</span> <span m='134570'>which</span> <span
  m='134640'>is</span> <span m='134710'>balance.</span> <span
  m='136620'>What</span> <span m='136820'>we</span> <span m='136940'>saw</span>
  <span m='137210'>in</span> <span m='137290'>last</span> <span
  m='137630'>lecture</span> <span m='138590'>and</span> <span
  m='138720'>recitation</span> <span m='139220'>is</span> <span
  m='139370'>that</span> <span m='139720'>these</span> <span
  m='140070'>basic</span> <span m='140610'>binary</span> <span
  m='140920'>search</span> <span m='141220'>trees,</span> <span
  m='141470'>where</span> <span m='141650'>when</span> <span
  m='141810'>you</span> <span m='141970'>insert</span> <span m='142410'>a</span>
  <span m='142480'>node</span> <span m='142770'>you</span> <span
  m='142850'>just</span> <span m='143050'>walk</span> <span
  m='143370'>down</span> <span m='143570'>the</span> <span
  m='143670'>tree</span> <span m='143960'>to</span> <span m='144050'>find</span>
  <span m='144390'>where</span> <span m='144530'>that</span> <span
  m='144810'>item</span> <span m='145080'>fits--</span> <span
  m='145480'>like</span> <span m='145730'>if you're</span> <span
  m='145850'>trying</span> <span m='146050'>to</span> <span
  m='146100'>insert</span> <span m='146520'>30,</span> <span
  m='147320'>you</span> <span m='147430'>go</span> <span m='147600'>left</span>
  <span m='147870'>here,</span> <span m='147950'>go</span> <span
  m='148260'>right</span> <span m='148450'>here,</span> <span m='148840'>go
  right</span> <span m='149090'>here,</span> <span m='149360'>and</span> <span
  m='149460'>say,</span> <span m='149820'>oh 30</span> <span m='150230'>fits
  here.</span> <span m='150460'>Let's put</span> <span m='150850'>30</span>
  <span m='151080'>there.</span> </p><p><span m='151440'>If</span> <span
  m='151930'>you</span> <span m='152060'>keep</span> <span
  m='152270'>doing</span> <span m='152520'>that,</span> <span
  m='154690'>you</span> <span m='154820'>can</span> <span m='154930'>do</span>
  <span m='155040'>insert.</span> <span m='155420'>You</span> <span
  m='155520'>can</span> <span m='155630'>do</span> <span
  m='155740'>delete.</span> <span m='156560'>You</span> <span
  m='156720'>can</span> <span m='156870'>do</span> <span m='157080'>these</span>
  <span m='157310'>kinds</span> <span m='157570'>of</span> <span
  m='157650'>searches,</span> <span m='158336'>which</span> <span m='158680'>we
  saw,</span> <span m='159510'>finding</span> <span m='159780'>the</span> <span
  m='159870'>next</span> <span m='160100'>larger</span> <span
  m='160440'>element</span> <span m='160750'>or</span> <span
  m='160800'>finding</span> <span m='161090'>the</span> <span
  m='161170'>next</span> <span m='161360'>smaller</span> <span
  m='161750'>element,</span> <span m='162890'>also</span> <span
  m='163180'>known</span> <span m='163390'>as</span> <span
  m='163480'>successor</span> <span m='163745'>and</span> <span
  m='164010'>predecessor.</span> <span m='164560'>These</span> <span
  m='164760'>are</span> <span m='164810'>actually</span> <span
  m='165050'>the</span> <span m='165180'>typical</span> <span
  m='165570'>names</span> <span m='165870'>for</span> <span
  m='165950'>those</span> <span m='166520'>operations.</span> </p><p><span
  m='167850'>You</span> <span m='168040'>can</span> <span
  m='168180'>solve</span> <span m='168460'>them</span> <span
  m='168630'>in</span> <span m='168760'>order</span> <span m='169180'>h</span>
  <span m='169530'>time.</span> <span m='170520'>Anyone</span> <span
  m='170830'>remember</span> <span m='171150'>what</span> <span
  m='171380'>h</span> <span m='171760'>was?</span> <span m='173290'>The</span>
  <span m='173350'>height.</span> <span m='174150'>Yeah,</span> <span
  m='174490'>good.</span> <span m='174790'>The</span> <span
  m='175200'>height</span> <span m='175440'>of</span> <span
  m='175530'>the</span> <span m='175630'>tree.</span> <span m='177460'>So</span>
  <span m='178300'>h</span> <span m='182126'>is</span> <span
  m='182630'>the</span> <span m='182700'>height</span> <span
  m='183140'>of</span> <span m='183390'>the</span> <span m='183740'>BST.</span>
  <span m='184800'>What</span> <span m='185070'>is</span> <span
  m='185240'>the</span> <span m='185360'>height</span> <span
  m='185620'>of</span> <span m='185710'>the</span> <span m='185800'>tree?</span>
  </p><p><span m='186560'>AUDIENCE: [INAUDIBLE].</span> </p><p><span
  m='188200'>PROFESSOR: Sorry?</span> </p><p><span m='188950'>AUDIENCE:
  [INAUDIBLE].</span> </p><p><span m='189830'>PROFESSOR: Log n?</span> <span
  m='190460'>Log n</span> <span m='190830'>would</span> <span
  m='190910'>be</span> <span m='191060'>great,</span> <span
  m='192120'>but</span> <span m='192270'>not</span> <span
  m='192460'>always.</span> <span m='193210'>So</span> <span
  m='193340'>this</span> <span m='193580'>is</span> <span m='193880'>the</span>
  <span m='194365'>issue</span> <span m='194850'>of</span> <span
  m='194990'>being</span> <span m='195260'>balance.</span> <span
  m='202050'>So</span> <span m='202640'>in</span> <span m='202810'>an</span>
  <span m='202850'>ideal</span> <span m='203340'>world,</span> <span
  m='204052'>your</span> <span m='204410'>tree's</span> <span
  m='204870'>going</span> <span m='204970'>to</span> <span
  m='205050'>look</span> <span m='205210'>something</span> <span
  m='205490'>like</span> <span m='205720'>this.</span> <span
  m='208190'>I've</span> <span m='208670'>drawn</span> <span
  m='208880'>this</span> <span m='209060'>picture</span> <span
  m='210520'>probably</span> <span m='210700'>the</span> <span
  m='210780'>most</span> <span m='211190'>in</span> <span m='211280'>my</span>
  <span m='211430'>academic</span> <span m='211890'>career.</span> <span
  m='212230'>This</span> <span m='212390'>is</span> <span m='212520'>a</span>
  <span m='212580'>nice,</span> <span m='212920'>perfectly</span> <span
  m='213390'>balanced</span> <span m='213850'>binary</span> <span
  m='214160'>search</span> <span m='214460'>tree.</span> <span
  m='215180'>The</span> <span m='215240'>height</span> <span
  m='216130'>is</span> <span m='217620'>log n.</span> <span
  m='218690'>This</span> <span m='218880'>would</span> <span
  m='219000'>be</span> <span m='219770'>the</span> <span
  m='219850'>balance</span> <span m='220220'>case.</span> <span
  m='220580'>I</span> <span m='220630'>mean,</span> <span
  m='220870'>roughly</span> <span m='221240'>log n.</span> <span
  m='221680'>Let's just</span> <span m='221970'>put</span> <span
  m='222470'>theta</span> <span m='222910'>to</span> <span m='223110'>be</span>
  <span m='223690'>approximate.</span> </p><p><span m='226380'>But</span> <span
  m='226680'>as</span> <span m='226840'>we</span> <span m='226950'>saw</span>
  <span m='227100'>at</span> <span m='227180'>the</span> <span
  m='227300'>end</span> <span m='227550'>of</span> <span m='227650'>last</span>
  <span m='228100'>class,</span> <span m='228560'>you</span> <span
  m='228700'>can</span> <span m='228830'>have</span> <span m='230030'>a</span>
  <span m='230140'>very</span> <span m='230380'>unbalanced</span> <span
  m='231000'>tree,</span> <span m='232690'>which</span> <span
  m='232790'>is</span> <span m='232900'>just a</span> <span
  m='232990'>path.</span> <span m='234020'>And</span> <span m='234490'>there
  the</span> <span m='234960'>height</span> <span m='235900'>is</span> <span
  m='236140'>n.</span> <span m='237770'>What's</span> <span
  m='237930'>the</span> <span m='238020'>definition</span> <span
  m='238580'>of</span> <span m='238660'>height?</span> <span
  m='238990'>That's</span> <span m='239190'>actually</span> <span
  m='239420'>what</span> <span m='239520'>I</span> <span m='239570'>was</span>
  <span m='239690'>looking</span> <span m='239930'>for.</span> <span
  m='243280'>Should</span> <span m='243530'>be</span> <span
  m='243780'>6.042</span> <span m='244520'>material.</span> <span
  m='245587'>Yeah?</span> </p><p><span m='246581'>AUDIENCE: Is it the</span>
  <span m='247078'>length</span> <span m='247575'>of the</span> <span
  m='248072'>longest path</span> <span m='248569'>always</span> <span
  m='249066'>going</span> <span m='249563'>down?</span> </p><p><span
  m='250060'>PROFESSOR: Yeah,</span> <span m='250330'>length</span> <span
  m='250590'>of the</span> <span m='250680'>longest</span> <span
  m='251250'>path</span> <span m='251670'>always</span> <span
  m='251950'>going</span> <span m='252180'>down.</span> <span m='252410'>So
  length of</span> <span m='252730'>the</span> <span m='252810'>longest</span>
  <span m='253200'>path</span> <span m='253490'>from</span> <span
  m='253690'>the</span> <span m='253790'>root</span> <span m='254180'>to</span>
  <span m='254330'>some</span> <span m='254600'>leaf.</span> <span
  m='255610'>That's</span> <span m='255710'>right.</span> <span
  m='256910'>OK,</span> <span m='257220'>so</span> <span m='257640'>this
  is--</span> </p><p><span m='275870'>I</span> <span m='275990'>highlight</span>
  <span m='276400'>this</span> <span m='276580'>because</span> <span
  m='277180'>we're</span> <span m='277400'>going</span> <span
  m='277520'>to</span> <span m='277750'>be</span> <span
  m='277840'>working</span> <span m='278170'>a</span> <span
  m='278230'>lot</span> <span m='278490'>with</span> <span
  m='278630'>height</span> <span m='278920'>today.</span> <span
  m='280840'>All</span> <span m='281040'>that's</span> <span
  m='281140'>happening</span> <span m='281470'>here,</span> <span
  m='282120'>all</span> <span m='282480'>of</span> <span m='282580'>the</span>
  <span m='282680'>paths</span> <span m='283130'>are</span> <span
  m='283230'>length</span> <span m='283620'>log n.</span> <span
  m='284840'>Here,</span> <span m='285610'>there</span> <span
  m='285920'>is</span> <span m='286050'>a</span> <span m='286110'>path</span>
  <span m='286450'>of</span> <span m='286550'>length</span> <span
  m='286790'>n.</span> <span m='287080'>Some</span> <span m='287350'>of</span>
  <span m='287390'>them</span> <span m='287540'>are</span> <span
  m='287620'>shorter,</span> <span m='288040'>but</span> <span
  m='288190'>in</span> <span m='288280'>fact,</span> <span m='288570'>the</span>
  <span m='288580'>average</span> <span m='288870'>path</span> <span
  m='289120'>is</span> <span m='289250'>n</span> <span m='289370'>over</span>
  <span m='289530'>2.</span> <span m='289710'>It's</span> <span
  m='289830'>really</span> <span m='290040'>bad.</span> <span
  m='290840'>So</span> <span m='291000'>this</span> <span m='291230'>is</span>
  <span m='292120'>very</span> <span m='292330'>unbalanced.</span> <span
  m='296980'>I'll</span> <span m='297150'>put</span> <span
  m='297340'>"very."</span> <span m='298920'>It's</span> <span m='299120'>not
  a</span> <span m='299160'>very</span> <span m='299360'>formal</span> <span
  m='299960'>term,</span> <span m='301270'>but</span> <span
  m='301360'>that's</span> <span m='301590'>like</span> <span
  m='301760'>the</span> <span m='301850'>worst</span> <span
  m='302160'>case</span> <span m='303080'>for</span> <span
  m='303190'>BSTs.</span> </p><p><span m='304170'>This</span> <span
  m='304390'>is</span> <span m='304510'>good.</span> <span
  m='304730'>This</span> <span m='304950'>does</span> <span
  m='305170'>have</span> <span m='305320'>a</span> <span
  m='305380'>formal</span> <span m='305700'>definition.</span> <span
  m='306650'>We</span> <span m='306770'>call</span> <span m='307210'>a</span>
  <span m='307300'>tree</span> <span m='307610'>balanced</span> <span
  m='312300'>if</span> <span m='312690'>the</span> <span
  m='312810'>height</span> <span m='313760'>is</span> <span
  m='314700'>order</span> <span m='314980'>log</span> <span m='315280'>n.</span>
  <span m='318170'>So</span> <span m='318330'>you're</span> <span
  m='318410'>storing</span> <span m='318690'>n</span> <span
  m='318930'>keys.</span> <span m='319250'>If</span> <span
  m='319340'>your</span> <span m='319460'>height</span> <span
  m='319660'>is</span> <span m='319810'>always</span> <span
  m='320000'>order</span> <span m='320250'>log</span> <span m='320550'>n,</span>
  <span m='320970'>we</span> <span m='322080'>get</span> <span
  m='322210'>a</span> <span m='322270'>constant</span> <span
  m='322630'>factor</span> <span m='322910'>here.</span> <span
  m='323130'>Here,</span> <span m='323290'>it's</span> <span
  m='323450'>basically</span> <span m='323720'>exactly</span> <span
  m='324230'>log</span> <span m='324500'>n,</span> <span m='324630'>1</span>
  <span m='324870'>times</span> <span m='325290'>log n.</span> </p><p><span
  m='326430'>It's</span> <span m='327260'>always</span> <span
  m='327630'>going</span> <span m='327770'>to</span> <span m='327840'>be</span>
  <span m='327990'>at</span> <span m='328050'>least</span> <span
  m='328360'>log</span> <span m='328640'>n,</span> <span
  m='328930'>because</span> <span m='329390'>if</span> <span
  m='329520'>you're</span> <span m='329630'>storing</span> <span
  m='329920'>n</span> <span m='330120'>things</span> <span m='330670'>in</span>
  <span m='330790'>a</span> <span m='330830'>binary</span> <span
  m='331200'>tree,</span> <span m='331460'>you</span> <span
  m='331570'>need</span> <span m='331850'>to</span> <span m='331920'>have</span>
  <span m='332180'>height</span> <span m='332390'>at</span> <span
  m='332460'>least</span> <span m='332670'>log n.</span> <span
  m='333050'>So</span> <span m='333220'>in</span> <span m='333300'>fact,</span>
  <span m='333660'>it</span> <span m='333760'>will</span> <span
  m='333780'>be</span> <span m='333940'>theta</span> <span m='334810'>log
  n</span> <span m='335190'>if</span> <span m='335300'>your</span> <span
  m='335400'>tree</span> <span m='335580'>is</span> <span
  m='335700'>balanced.</span> </p><p><span m='336170'>And</span> <span
  m='336330'>today's</span> <span m='336770'>goal</span> <span
  m='337440'>is</span> <span m='337680'>to</span> <span m='337800'>always</span>
  <span m='338280'>maintain</span> <span m='338540'>that</span> <span
  m='338800'>your</span> <span m='339000'>trees</span> <span
  m='339300'>are</span> <span m='339370'>balanced.</span> <span
  m='340760'>And</span> <span m='341010'>we're</span> <span
  m='341120'>going</span> <span m='341250'>to</span> <span m='341360'>do</span>
  <span m='341490'>that</span> <span m='341770'>using</span> <span
  m='342130'>the</span> <span m='342220'>structure</span> <span
  m='342690'>called</span> <span m='343340'>AVL</span> <span
  m='343760'>trees,</span> <span m='345400'>which</span> <span
  m='345600'>I'll</span> <span m='345710'>define</span> <span
  m='346080'>in</span> <span m='346180'>a</span> <span m='346220'>moment.</span>
  <span m='346840'>They're</span> <span m='347250'>the</span> <span
  m='348250'>original</span> <span m='348790'>way</span> <span
  m='348980'>people</span> <span m='349290'>found</span> <span
  m='349630'>to</span> <span m='349730'>keep</span> <span
  m='350040'>trees</span> <span m='350810'>balanced</span> <span
  m='351340'>back</span> <span m='351580'>in</span> <span m='351710'>the</span>
  <span m='351820'>'60s,</span> <span m='352980'>but</span> <span
  m='353110'>they're</span> <span m='353240'>still</span> <span
  m='353450'>kind</span> <span m='353680'>of</span> <span m='353740'>the</span>
  <span m='353820'>simplest.</span> </p><p><span m='354720'>There</span> <span
  m='354820'>are</span> <span m='354860'>lots</span> <span m='355270'>of</span>
  <span m='355330'>ways</span> <span m='355530'>to</span> <span
  m='355620'>keep</span> <span m='355940'>a tree</span> <span
  m='356060'>balanced,</span> <span m='356550'>so I'll</span> <span
  m='356630'>mention</span> <span m='357020'>some</span> <span
  m='357680'>other</span> <span m='357850'>balance</span> <span
  m='358200'>trees</span> <span m='358890'>later</span> <span
  m='359190'>on.</span> <span m='359700'>In</span> <span
  m='359830'>particular,</span> <span m='360260'>your</span> <span
  m='360430'>textbook</span> <span m='360900'>covers</span> <span
  m='361560'>two</span> <span m='361980'>other</span> <span
  m='362230'>ways</span> <span m='362480'>to</span> <span m='362570'>do</span>
  <span m='362730'>it.</span> <span m='362910'>It</span> <span
  m='363350'>does</span> <span m='363520'>not</span> <span
  m='363820'>cover</span> <span m='364080'>AVL</span> <span
  m='364430'>trees,</span> <span m='364730'>so</span> <span
  m='365030'>pay</span> <span m='365240'>attention.</span> </p><p></p><p><span
  m='373090'>One</span> <span m='373280'>more</span> <span
  m='373480'>thing</span> <span m='373700'>I</span> <span
  m='373730'>wanted</span> <span m='373960'>to</span> <span
  m='374080'>define.</span> <span m='374390'>We</span> <span
  m='374520'>talked</span> <span m='374780'>about</span> <span
  m='374980'>the</span> <span m='375050'>height</span> <span
  m='375330'>of</span> <span m='376140'>the</span> <span m='376250'>tree,</span>
  <span m='380230'>but</span> <span m='380440'>I'd</span> <span
  m='380560'>also</span> <span m='380880'>like</span> <span m='381080'>to</span>
  <span m='381180'>talk</span> <span m='381470'>about</span> <span
  m='382430'>the</span> <span m='382470'>height</span> <span
  m='382850'>of</span> <span m='382950'>a</span> <span m='382990'>node</span>
  <span m='386790'>in</span> <span m='386940'>a</span> <span
  m='387060'>tree.</span> <span m='389890'>Can</span> <span
  m='389980'>anyone</span> <span m='390130'>define</span> <span
  m='390440'>this</span> <span m='390610'>for</span> <span m='390800'>me?</span>
  <span m='393940'>Yeah?</span> </p><p><span m='395880'>AUDIENCE: It's</span>
  <span m='396365'>the level</span> <span m='396850'>that the</span> <span
  m='397335'>node is at.</span> </p><p><span m='398790'>PROFESSOR: The</span>
  <span m='398890'>level</span> <span m='399340'>that</span> <span
  m='399420'>the</span> <span m='399520'>node</span> <span m='399720'>is</span>
  <span m='399820'>at.</span> <span m='400230'>That is</span> <span
  m='400480'>roughly</span> <span m='400910'>right.</span> <span
  m='401340'>I</span> <span m='401430'>mean,</span> <span m='401600'>that</span>
  <span m='401750'>is</span> <span m='401880'>right.</span> <span
  m='402170'>It's</span> <span m='402320'>all</span> <span
  m='402450'>about,</span> <span m='402800'>what</span> <span
  m='402970'>is</span> <span m='403150'>the</span> <span m='403260'>level</span>
  <span m='403630'>of</span> <span m='403730'>a</span> <span
  m='403780'>node?</span> </p><p><span m='404513'>AUDIENCE: Like</span> <span
  m='404986'>how</span> <span m='405459'>many</span> <span m='405932'>levels
  of</span> <span m='406405'>children</span> <span m='406878'>it has.</span>
  </p><p><span m='408770'>PROFESSOR: How</span> <span m='408970'>many</span>
  <span m='409160'>levels</span> <span m='409420'>of</span> <span
  m='409540'>children</span> <span m='409890'>it has.</span> <span
  m='410340'>That's basically</span> <span m='410690'>right,</span> <span
  m='410930'>yeah.</span> </p><p><span m='411830'>AUDIENCE: The</span> <span
  m='412286'>distance from it</span> <span m='412742'>to the root.</span>
  </p><p><span m='414110'>PROFESSOR: Distance</span> <span
  m='414290'>from</span> <span m='414400'>it to</span> <span
  m='414520'>the</span> <span m='414660'>root.</span> <span
  m='415030'>That</span> <span m='415220'>would</span> <span
  m='415310'>be</span> <span m='415410'>the</span> <span
  m='415530'>depth.</span> <span m='416930'>So</span> <span m='417340'>depth
  is</span> <span m='417770'>counting</span> <span m='418030'>from</span> <span
  m='418300'>above.</span> <span m='419180'>Height</span> <span
  m='419470'>is--</span> </p><p><span m='419960'>AUDIENCE: [INAUDIBLE].</span>
  </p><p><span m='424660'>PROFESSOR: Yes,</span> <span m='425290'>longest</span>
  <span m='425700'>path</span> <span m='425970'>from</span> <span
  m='426160'>that</span> <span m='426400'>node</span> <span m='426850'>to
  the</span> <span m='427200'>leaf.</span> <span m='428928'>Note</span> <span
  m='429416'>that's</span> <span m='429904'>why I</span> <span m='430392'>wrote
  this</span> <span m='430880'>definition</span> <span
  m='431368'>actually,</span> <span m='431856'>to give</span> <span
  m='432344'>you a hint.</span> </p><p></p><p><span m='440650'>Here</span> <span
  m='441030'>I</span> <span m='441410'>should probably</span> <span
  m='441893'>say</span> <span m='442376'>down</span> <span m='445274'>to</span>
  <span m='445757'>be</span> <span m='446240'>precise.</span> <span
  m='447000'>You're</span> <span m='447120'>not</span> <span
  m='447310'>allowed</span> <span m='447570'>to</span> <span
  m='447630'>go</span> <span m='447800'>up</span> <span m='448080'>in
  these</span> <span m='448553'>paths.</span> </p><p><span
  m='455650'>[INAUDIBLE].</span> <span m='458485'>All right.</span> <span
  m='459447'>Sorry.</span> <span m='460890'>I've got to</span> <span
  m='461000'>learn</span> <span m='461230'>how to</span> <span
  m='461400'>throw.</span> </p><p><span m='462720'>All</span> <span
  m='462780'>right.</span> <span m='462950'>So</span> <span
  m='463110'>for</span> <span m='463290'>example,</span> <span
  m='464040'>over</span> <span m='464270'>here</span> <span
  m='464970'>I'm</span> <span m='465080'>going</span> <span m='465200'>to</span>
  <span m='465290'>write</span> <span m='465630'>depths</span> <span
  m='466020'>in</span> <span m='466240'>red.</span> <span m='469340'>If</span>
  <span m='469610'>you're</span> <span m='469750'>taking</span> <span
  m='470060'>notes it's</span> <span m='470490'>OK.</span> <span
  m='470820'>Don't</span> <span m='471200'>worry.</span> <span
  m='472490'>So</span> <span m='472960'>length</span> <span m='473260'>off
  the</span> <span m='473560'>longest</span> <span m='473720'>path</span> <span
  m='474060'>from</span> <span m='474260'>it</span> <span m='474650'>down</span>
  <span m='474940'>to</span> <span m='475030'>a</span> <span
  m='475100'>leaf.</span> <span m='475480'>Well,</span> <span
  m='475670'>this</span> <span m='475920'>is</span> <span m='476120'>a</span>
  <span m='476200'>leaf,</span> <span m='477180'>so</span> <span
  m='477440'>its</span> <span m='477600'>height</span> <span
  m='477800'>is</span> <span m='477950'>0.</span> <span m='479740'>OK.</span>
  <span m='481894'>Yeah,</span> <span m='482350'>I'll just</span> <span
  m='482625'>leave it</span> <span m='482900'>at</span> <span
  m='483090'>that.</span> <span m='484960'>It</span> <span
  m='485280'>takes</span> <span m='485520'>0</span> <span
  m='485770'>steps</span> <span m='486130'>to</span> <span m='486230'>get</span>
  <span m='487040'>from</span> <span m='487270'>a</span> <span
  m='487310'>leaf</span> <span m='487530'>to a</span> <span
  m='487730'>leaf.</span> </p><p><span m='489000'>This</span> <span
  m='489270'>guy's</span> <span m='489560'>not</span> <span m='489750'>a</span>
  <span m='489810'>leaf.</span> <span m='490260'>It</span> <span
  m='490700'>has</span> <span m='490990'>a</span> <span m='491040'>child,</span>
  <span m='491900'>but</span> <span m='493170'>it</span> <span
  m='493490'>has</span> <span m='493640'>a</span> <span m='493690'>path</span>
  <span m='493890'>of</span> <span m='493970'>length</span> <span
  m='494210'>one</span> <span m='495880'>to a</span> <span
  m='496250'>leaf.</span> <span m='496900'>So</span> <span
  m='498450'>it's</span> <span m='498890'>one.</span> <span
  m='499580'>This</span> <span m='499780'>guy</span> <span m='500020'>has</span>
  <span m='500250'>a</span> <span m='500300'>choice.</span> <span
  m='500630'>You</span> <span m='500770'>could</span> <span m='500940'>go</span>
  <span m='501150'>left</span> <span m='502350'>and</span> <span
  m='502840'>you</span> <span m='503000'>get</span> <span m='503130'>a</span>
  <span m='503200'>path</span> <span m='503490'>of</span> <span
  m='503580'>length</span> <span m='503800'>1,</span> <span m='504830'>or</span>
  <span m='505050'>you</span> <span m='505280'>could</span> <span
  m='505490'>go</span> <span m='505650'>right</span> <span m='506000'>and</span>
  <span m='506160'>get</span> <span m='506280'>a</span> <span
  m='506340'>path</span> <span m='506630'>of</span> <span
  m='506750'>length</span> <span m='507010'>2.</span> <span m='507720'>We</span>
  <span m='507830'>take</span> <span m='508020'>the</span> <span
  m='508100'>max,</span> <span m='508950'>so</span> <span m='509130'>this</span>
  <span m='509320'>guy</span> <span m='509440'>has</span> <span
  m='509660'>height</span> <span m='510520'>2.</span> <span
  m='511490'>This</span> <span m='511710'>node</span> <span
  m='512529'>has</span> <span m='512929'>height</span> <span
  m='513070'>1.</span> <span m='514250'>This</span> <span m='514490'>node</span>
  <span m='515580'>has</span> <span m='515770'>height</span> <span
  m='517120'>3.</span> </p><p><span m='518620'>How</span> <span
  m='518770'>do</span> <span m='518830'>you</span> <span
  m='518960'>compute</span> <span m='519250'>the</span> <span
  m='519330'>height</span> <span m='519530'>of</span> <span m='519610'>a</span>
  <span m='519659'>node?</span> <span m='520872'>Anyone?</span> <span
  m='522479'>Yeah.</span> </p><p><span m='523419'>AUDIENCE: Max</span> <span
  m='523440'>of the</span> <span m='523873'>height of</span> <span
  m='524306'>the</span> <span m='524739'>children</span> <span
  m='525172'>plus</span> <span m='525605'>1.</span> </p><p><span
  m='526040'>PROFESSOR: Right.</span> <span m='526250'>You</span> <span
  m='526320'>take</span> <span m='526510'>the</span> <span m='526590'>max</span>
  <span m='526875'>of the</span> <span m='527160'>height</span> <span
  m='527360'>of</span> <span m='527440'>the</span> <span
  m='527540'>children.</span> <span m='528330'>Here,</span> <span
  m='528520'>2</span> <span m='528740'>and</span> <span m='528840'>1.</span>
  <span m='529700'>Max is</span> <span m='530170'>2.</span> <span
  m='530730'>Add</span> <span m='530990'>1.</span> <span m='531540'>You</span>
  <span m='531610'>get</span> <span m='531800'>3.</span> <span
  m='532770'>So</span> <span m='533080'>it's</span> <span
  m='533320'>going</span> <span m='533570'>to</span> <span
  m='533700'>always</span> <span m='534020'>be--</span> <span
  m='534260'>this</span> <span m='534430'>is</span> <span m='534590'>just
  a</span> <span m='534680'>formula.</span> <span m='536110'>The</span> <span
  m='536180'>height</span> <span m='536470'>of</span> <span
  m='536600'>the</span> <span m='536690'>left</span> <span
  m='538650'>child</span> <span m='543500'>maxed</span> <span
  m='546640'>with</span> <span m='547070'>the</span> <span
  m='547150'>height</span> <span m='547420'>of</span> <span
  m='547570'>the</span> <span m='547690'>right</span> <span
  m='547940'>child</span> <span m='555790'>plus</span> <span
  m='555930'>1.</span> </p><p><span m='557860'>This</span> <span
  m='558060'>is</span> <span m='558170'>obviously</span> <span
  m='558540'>useful</span> <span m='558980'>for</span> <span
  m='559170'>computing.</span> <span m='560380'>And</span> <span
  m='560550'>in</span> <span m='560630'>particular,</span> <span
  m='562090'>in</span> <span m='562450'>lecture</span> <span
  m='562980'>and</span> <span m='563050'>recitation</span> <span
  m='564090'>last</span> <span m='564370'>time,</span> <span
  m='565570'>we</span> <span m='565710'>saw</span> <span m='565910'>how</span>
  <span m='566190'>to</span> <span m='566360'>maintain</span> <span
  m='567110'>the</span> <span m='567220'>size</span> <span m='567690'>of</span>
  <span m='567780'>every</span> <span m='568000'>tree</span> <span
  m='568660'>using</span> <span m='569280'>data</span> <span
  m='569540'>structure</span> <span m='569990'>augmentation.</span> <span
  m='572760'>Data</span> <span m='573300'>structure</span> <span
  m='574000'>augmentation.</span> <span m='577210'>And</span> <span
  m='577330'>then</span> <span m='577420'>we</span> <span
  m='577540'>started</span> <span m='578010'>with</span> <span
  m='578240'>a</span> <span m='578400'>regular</span> <span
  m='578990'>vanilla</span> <span m='580210'>binary</span> <span
  m='580540'>search</span> <span m='580900'>tree,</span> <span
  m='581720'>and</span> <span m='581900'>then</span> <span m='582110'>we</span>
  <span m='582460'>maintained--</span> <span m='583000'>every</span> <span
  m='583290'>time</span> <span m='583540'>we</span> <span m='583620'>did</span>
  <span m='583760'>an</span> <span m='583880'>operation</span> <span
  m='584175'>on</span> <span m='584470'>the</span> <span m='584580'>tree,</span>
  <span m='585180'>we</span> <span m='585390'>also</span> <span
  m='586160'>updated</span> <span m='586770'>the</span> <span
  m='586870'>size</span> <span m='588010'>of</span> <span m='588200'>the</span>
  <span m='588280'>subtree</span> <span m='588770'>rooted</span> <span
  m='589060'>at</span> <span m='589170'>that</span> <span
  m='589380'>node,</span> <span m='590550'>the</span> <span
  m='590640'>size</span> <span m='591290'>field.</span> </p><p><span
  m='592260'>Here,</span> <span m='592660'>I</span> <span m='592750'>want</span>
  <span m='592940'>to</span> <span m='592990'>store a</span> <span
  m='593280'>height</span> <span m='593510'>field,</span> <span
  m='594720'>and</span> <span m='594900'>because</span> <span
  m='595290'>I</span> <span m='595350'>have</span> <span m='595540'>this</span>
  <span m='595710'>nice</span> <span m='596010'>local</span> <span
  m='596390'>rule</span> <span m='596710'>that</span> <span
  m='596830'>tells</span> <span m='597080'>me</span> <span m='597170'>how</span>
  <span m='597390'>to</span> <span m='597500'>compute</span> <span
  m='597830'>the</span> <span m='597900'>height</span> <span
  m='598130'>of</span> <span m='598220'>a</span> <span m='598280'>node</span>
  <span m='599110'>using</span> <span m='599510'>just</span> <span
  m='599770'>local</span> <span m='600160'>information--</span> <span
  m='600710'>the</span> <span m='600780'>height</span> <span
  m='600990'>of</span> <span m='601060'>its</span> <span m='601210'>left</span>
  <span m='601420'>child,</span> <span m='601740'>the height</span> <span
  m='601910'>of</span> <span m='601990'>its</span> <span m='602110'>right</span>
  <span m='602310'>child.</span> <span m='602750'>Do a</span> <span
  m='602920'>constant</span> <span m='603340'>amount</span> <span
  m='603570'>of</span> <span m='603650'>work</span> <span
  m='603900'>here.</span> </p><p><span m='606340'>There's</span> <span
  m='606550'>a</span> <span m='606810'>general</span> <span
  m='607130'>theorem.</span> <span m='607370'>Whenever</span> <span
  m='607650'>you</span> <span m='607690'>have</span> <span m='607850'>a</span>
  <span m='607910'>nice</span> <span m='608180'>local</span> <span
  m='608800'>formula</span> <span m='609180'>like</span> <span
  m='609390'>this</span> <span m='609640'>for</span> <span
  m='609960'>updating</span> <span m='610370'>your</span> <span
  m='610460'>information</span> <span m='610950'>in</span> <span
  m='611040'>terms</span> <span m='611300'>of</span> <span
  m='611410'>your</span> <span m='611540'>children,</span> <span
  m='613070'>then</span> <span m='613160'>you</span> <span m='613330'>can</span>
  <span m='613520'>maintain</span> <span m='614010'>it</span> <span
  m='614130'>using</span> <span m='614750'>constant</span> <span
  m='615160'>overhead.</span> <span m='615890'>So</span> <span
  m='616020'>we</span> <span m='616160'>can</span> <span m='616570'>store</span>
  <span m='616930'>the</span> <span m='617020'>height</span> <span
  m='617260'>of</span> <span m='617350'>every</span> <span
  m='617560'>node</span> <span m='617760'>for</span> <span
  m='617910'>free.</span> <span m='619500'>Why</span> <span m='619680'>do</span>
  <span m='619790'>I</span> <span m='619870'>care?</span> <span
  m='620390'>Because</span> <span m='620850'>AVL</span> <span
  m='621230'>trees</span> <span m='621550'>are</span> <span
  m='621630'>going</span> <span m='621760'>to</span> <span m='621810'>use</span>
  <span m='622020'>the</span> <span m='622100'>heights</span> <span
  m='622390'>of</span> <span m='622470'>the</span> <span
  m='622570'>nodes.</span> </p><p><span m='623310'>Our</span> <span
  m='623510'>goal</span> <span m='623860'>is</span> <span m='623980'>to</span>
  <span m='624090'>keep</span> <span m='624320'>the</span> <span
  m='624400'>heights</span> <span m='624720'>small.</span> <span
  m='625260'>We</span> <span m='625370'>don't</span> <span
  m='625600'>want</span> <span m='625850'>this.</span> <span
  m='626750'>We</span> <span m='626910'>want</span> <span
  m='627290'>this.</span> <span m='628200'>So</span> <span m='628400'>a</span>
  <span m='628440'>natural</span> <span m='628760'>thing</span> <span
  m='628930'>to</span> <span m='628990'>do is</span> <span
  m='629130'>store</span> <span m='629420'>the</span> <span
  m='629510'>heights.</span> <span m='630260'>When</span> <span
  m='630400'>they</span> <span m='630500'>get</span> <span m='630690'>too</span>
  <span m='630820'>big,</span> <span m='631110'>fix</span> <span
  m='631430'>it.</span> <span m='634100'>So</span> <span
  m='635440'>that's</span> <span m='635720'>what</span> <span
  m='635800'>we're</span> <span m='635920'>going</span> <span
  m='636050'>to</span> <span m='636110'>do.</span> </p><p><span
  m='652140'>Maybe</span> <span m='652440'>one</span> <span
  m='652780'>more</span> <span m='652920'>thing</span> <span
  m='653160'>to</span> <span m='653280'>mention</span> <span
  m='654270'>over</span> <span m='654520'>here</span> <span
  m='655490'>for</span> <span m='655970'>convenience.</span> <span
  m='661260'>Leaves,</span> <span m='661670'>for</span> <span
  m='661790'>example,</span> <span m='662170'>have</span> <span
  m='662400'>children</span> <span m='663610'>that</span> <span
  m='663850'>are--</span> <span m='664070'>I</span> <span
  m='664140'>mean,</span> <span m='664360'>they</span> <span
  m='664530'>have</span> <span m='664730'>null</span> <span
  m='664950'>pointers</span> <span m='665920'>to</span> <span
  m='666240'>their</span> <span m='666470'>left</span> <span
  m='666740'>and</span> <span m='666770'>right</span> <span
  m='666990'>children.</span> <span m='667550'>You</span> <span
  m='667650'>could</span> <span m='667810'>draw</span> <span
  m='668010'>them</span> <span m='668170'>explicitly</span> <span
  m='668720'>like</span> <span m='668930'>this.</span> <span
  m='670250'>Also</span> <span m='670680'>some</span> <span
  m='670910'>nodes</span> <span m='671320'>just</span> <span
  m='671510'>lack</span> <span m='671770'>a</span> <span
  m='671840'>single</span> <span m='672120'>child.</span> <span
  m='672920'>I'm</span> <span m='673060'>going</span> <span m='673240'>to</span>
  <span m='673370'>define</span> <span m='673820'>the</span> <span
  m='673940'>depths</span> <span m='674530'>of</span> <span
  m='674720'>these</span> <span m='674960'>things</span> <span
  m='676360'>to</span> <span m='676510'>be</span> <span
  m='676910'>negative</span> <span m='677370'>1.</span> <span
  m='679590'>This</span> <span m='679780'>will</span> <span m='679870'>be</span>
  <span m='680120'>convenient</span> <span m='680480'>later</span> <span
  m='680760'>on.</span> </p><p><span m='682270'>Why</span> <span
  m='682440'>negative</span> <span m='682810'>1?</span> <span
  m='683070'>Because</span> <span m='683420'>then</span> <span
  m='683580'>this</span> <span m='683750'>formula</span> <span
  m='684130'>works.</span> <span m='685150'>You</span> <span
  m='685260'>can</span> <span m='685390'>just</span> <span
  m='685540'>think</span> <span m='685700'>about</span> <span
  m='685950'>it.</span> <span m='686040'>Like</span> <span
  m='686230'>leaves,</span> <span m='686560'>for</span> <span
  m='686670'>example,</span> <span m='687560'>have</span> <span
  m='687810'>two</span> <span m='687980'>children,</span> <span
  m='688360'>which</span> <span m='688540'>are</span> <span
  m='688590'>negative</span> <span m='688870'>1.</span> <span
  m='689060'>You</span> <span m='689140'>take</span> <span m='689330'>the</span>
  <span m='689410'>max.</span> <span m='689750'>You</span> <span
  m='689850'>add</span> <span m='690010'>1.</span> <span m='690230'>You</span>
  <span m='690310'>get</span> <span m='690460'>0.</span> <span
  m='691460'>So</span> <span m='691610'>that</span> <span m='691800'>just</span>
  <span m='692050'>makes</span> <span m='692270'>things</span> <span
  m='692520'>work</span> <span m='692790'>out.</span> </p><p><span
  m='693650'>We</span> <span m='693720'>don't</span> <span
  m='693900'>normally</span> <span m='694260'>draw</span> <span
  m='694450'>these</span> <span m='694640'>in</span> <span m='694700'>the</span>
  <span m='694800'>pictures,</span> <span m='695380'>but</span> <span
  m='696150'>it's</span> <span m='696540'>convenient</span> <span
  m='697440'>that</span> <span m='697600'>I</span> <span m='697680'>don't</span>
  <span m='697900'>have</span> <span m='698060'>to</span> <span
  m='698170'>do</span> <span m='698290'>special</span> <span
  m='698660'>cases</span> <span m='699060'>when</span> <span
  m='699190'>the</span> <span m='699260'>left</span> <span
  m='699520'>child</span> <span m='699700'>doesn't</span> <span
  m='699940'>exist</span> <span m='700390'>and</span> <span
  m='700460'>the</span> <span m='700540'>right</span> <span
  m='700730'>child</span> <span m='700980'>doesn't</span> <span
  m='701210'>exist.</span> <span m='702120'>You</span> <span
  m='702240'>could</span> <span m='702390'>either</span> <span
  m='702570'>do</span> <span m='702690'>special</span> <span
  m='703040'>cases</span> <span m='703470'>or</span> <span m='703580'>you</span>
  <span m='703710'>could</span> <span m='703870'>make</span> <span
  m='704050'>this</span> <span m='704210'>definition.</span> <span
  m='704910'>Up</span> <span m='705080'>to you.</span> </p><p><span
  m='707510'>OK.</span> <span m='709780'>AVL</span> <span
  m='710260'>trees.</span> <span m='714960'>So</span> <span
  m='715720'>the</span> <span m='715850'>idea</span> <span
  m='716100'>with</span> <span m='716240'>an</span> <span m='716330'>AVL</span>
  <span m='716690'>tree</span> <span m='719980'>is</span> <span
  m='720450'>the</span> <span m='720530'>following.</span> </p><p></p><p><span
  m='756660'>We'd</span> <span m='756850'>like</span> <span m='757170'>to</span>
  <span m='757650'>keep</span> <span m='758030'>the</span> <span
  m='758120'>height</span> <span m='758420'>order</span> <span
  m='758670'>log</span> <span m='759020'>n.</span> <span m='759380'>It's</span>
  <span m='759560'>a</span> <span m='759610'>little</span> <span
  m='760020'>harder</span> <span m='760310'>to</span> <span
  m='760410'>think</span> <span m='760640'>about</span> <span
  m='760880'>keeping</span> <span m='761170'>the</span> <span
  m='761250'>height</span> <span m='761490'>order</span> <span
  m='761710'>log</span> <span m='762010'>n</span> <span m='763630'>than</span>
  <span m='763890'>it</span> <span m='763980'>is</span> <span
  m='764160'>to</span> <span m='764260'>think</span> <span
  m='764460'>about</span> <span m='764790'>keeping</span> <span
  m='765120'>the</span> <span m='765170'>tree</span> <span
  m='765360'>balance,</span> <span m='766110'>meaning</span> <span
  m='766370'>the</span> <span m='766440'>left</span> <span m='766730'>and</span>
  <span m='766850'>right</span> <span m='767120'>sides</span> <span
  m='767610'>are</span> <span m='767740'>more</span> <span m='768080'>or</span>
  <span m='768110'>less</span> <span m='768420'>equal.</span> <span
  m='769560'>In</span> <span m='769680'>this</span> <span
  m='769850'>case,</span> <span m='770090'>we're</span> <span
  m='770170'>going</span> <span m='770250'>to</span> <span
  m='770330'>think</span> <span m='770500'>about</span> <span
  m='770770'>them</span> <span m='770970'>as</span> <span
  m='771110'>being</span> <span m='771310'>more</span> <span
  m='771490'>or</span> <span m='771510'>less</span> <span
  m='771690'>equal</span> <span m='771980'>in</span> <span
  m='772120'>height.</span> </p><p><span m='773720'>You</span> <span
  m='773830'>could</span> <span m='773960'>also</span> <span
  m='774210'>think</span> <span m='774400'>about</span> <span
  m='774720'>them</span> <span m='774890'>being</span> <span
  m='775280'>more</span> <span m='775450'>or</span> <span m='775480'>less</span>
  <span m='775670'>equal</span> <span m='776010'>in</span> <span
  m='776130'>subtree</span> <span m='776530'>size.</span> <span
  m='777600'>That</span> <span m='777740'>would</span> <span
  m='777860'>also</span> <span m='778140'>work.</span> <span
  m='778640'>It's</span> <span m='778780'>a</span> <span
  m='778840'>different</span> <span m='779460'>balanced</span> <span
  m='779760'>search</span> <span m='780000'>tree.</span> <span
  m='781020'>Height</span> <span m='781290'>is</span> <span
  m='781440'>kind</span> <span m='781580'>of</span> <span m='781650'>the</span>
  <span m='781750'>easiest</span> <span m='782170'>thing</span> <span
  m='782350'>to</span> <span m='782440'>work</span> <span
  m='782650'>with.</span> </p><p><span m='783610'>So if</span> <span
  m='783760'>we</span> <span m='783870'>have</span> <span m='784070'>a</span>
  <span m='784120'>node,</span> <span m='786070'>it</span> <span
  m='786150'>has</span> <span m='786350'>a</span> <span m='786410'>left</span>
  <span m='786700'>subtree.</span> <span m='787570'>It</span> <span
  m='787810'>has</span> <span m='787980'>a</span> <span m='788050'>right</span>
  <span m='788300'>subtree,</span> <span m='788700'>which</span> <span
  m='788910'>we</span> <span m='789300'>traditionally</span> <span
  m='789670'>draw as</span> <span m='789980'>triangles.</span> <span
  m='791310'>This</span> <span m='791500'>subtree</span> <span
  m='791910'>has</span> <span m='792190'>a</span> <span
  m='792230'>height.</span> <span m='793456'>We'll</span> <span
  m='793800'>call</span> <span m='794040'>it</span> <span m='794170'>HL</span>
  <span m='795810'>for</span> <span m='795960'>left.</span> <span
  m='797440'>By</span> <span m='797710'>the</span> <span
  m='797830'>height</span> <span m='798040'>of</span> <span
  m='798110'>the</span> <span m='798200'>subtree,</span> <span m='798525'>I
  mean</span> <span m='798850'>the</span> <span m='798910'>height</span> <span
  m='799120'>of</span> <span m='799220'>its</span> <span m='799360'>root.</span>
  </p><p><span m='800710'>And</span> <span m='802770'>the</span> <span
  m='802890'>right</span> <span m='803140'>subtree</span> <span
  m='803390'>has</span> <span m='803560'>some</span> <span
  m='803750'>height,</span> <span m='803990'>r.</span> <span
  m='804280'>I've</span> <span m='804640'>drawn</span> <span
  m='804960'>them</span> <span m='805120'>as</span> <span m='805610'>the</span>
  <span m='805700'>same,</span> <span m='806230'>but</span> <span
  m='806360'>in</span> <span m='806460'>general</span> <span
  m='806770'>they</span> <span m='806860'>might</span> <span
  m='807070'>be</span> <span m='807160'>different.</span> <span
  m='808260'>And</span> <span m='808380'>what</span> <span m='808550'>we</span>
  <span m='808660'>would</span> <span m='808800'>like</span> <span
  m='809220'>is</span> <span m='809430'>that</span> <span m='809660'>h</span>
  <span m='810016'>sub</span> <span m='810730'>l</span> <span m='810990'>and
  h</span> <span m='811250'>sub</span> <span m='811460'>r</span> <span
  m='811745'>are</span> <span m='812030'>more</span> <span m='812300'>or</span>
  <span m='812330'>less</span> <span m='812540'>the</span> <span
  m='812610'>same.</span> <span m='812890'>They</span> <span
  m='813000'>differ</span> <span m='813320'>by</span> <span m='813490'>at</span>
  <span m='813540'>most</span> <span m='813780'>an</span> <span
  m='813890'>additive</span> <span m='814360'>1.</span> </p><p><span
  m='815670'>So</span> <span m='815810'>if</span> <span m='815930'>I</span>
  <span m='815960'>look</span> <span m='816230'>at</span> <span m='817760'>h sub
  l</span> <span m='818720'>minus</span> <span m='819240'>h</span> <span
  m='819490'>sub</span> <span m='819590'>r</span> <span m='819960'>in</span>
  <span m='820040'>absolute</span> <span m='820390'>value,</span> <span
  m='821240'>this</span> <span m='821400'>is</span> <span m='821540'>at</span>
  <span m='821630'>most</span> <span m='821960'>1,</span> <span
  m='823760'>for</span> <span m='824000'>every</span> <span
  m='824410'>node.</span> <span m='825690'>So</span> <span m='826120'>I</span>
  <span m='826250'>have</span> <span m='826460'>some</span> <span
  m='826640'>node</span> <span m='827005'>x.</span> <span m='827780'>For</span>
  <span m='828190'>every</span> <span m='828420'>node</span> <span
  m='828620'>x,</span> <span m='829080'>I</span> <span m='829200'>want</span>
  <span m='829480'>the</span> <span m='829550'>left</span> <span
  m='829790'>and</span> <span m='829850'>right</span> <span
  m='830010'>subtrees</span> <span m='830370'>to</span> <span
  m='830470'>be</span> <span m='831430'>almost</span> <span
  m='831940'>balanced.</span> </p><p><span m='832410'>Now,</span> <span
  m='832530'>I</span> <span m='832600'>could</span> <span m='832840'>say</span>
  <span m='833000'>differ</span> <span m='833270'>by</span> <span m='833580'>at
  most</span> <span m='833840'>0,</span> <span m='834840'>that</span> <span
  m='835050'>the</span> <span m='835160'>left</span> <span m='835430'>and</span>
  <span m='835540'>right</span> <span m='835760'>have</span> <span
  m='835910'>exactly</span> <span m='836500'>the</span> <span
  m='836610'>same</span> <span m='836860'>heights.</span> <span
  m='838030'>That's</span> <span m='838390'>difficult,</span> <span
  m='839660'>because</span> <span m='839840'>that</span> <span
  m='840060'>really</span> <span m='840290'>forces</span> <span
  m='840600'>you</span> <span m='840730'>to</span> <span m='840780'>have</span>
  <span m='840940'>exactly</span> <span m='841580'>the</span> <span
  m='841700'>perfect</span> <span m='842090'>tree.</span> <span
  m='843130'>And</span> <span m='843370'>in</span> <span m='843430'>fact,</span>
  <span m='843790'>it's</span> <span m='843820'>not</span> <span
  m='844070'>even</span> <span m='845140'>possible</span> <span
  m='845900'>for</span> <span m='846650'>odd</span> <span m='846830'>n</span>
  <span m='847110'>or</span> <span m='847390'>even</span> <span m='847700'>n
  or</span> <span m='848100'>something.</span> <span m='849280'>Because</span>
  <span m='849740'>at</span> <span m='849920'>the</span> <span
  m='850000'>very</span> <span m='850370'>end</span> <span
  m='850580'>you're</span> <span m='850680'>going</span> <span
  m='850810'>to</span> <span m='851460'>have</span> <span m='851800'>one</span>
  <span m='852030'>missing</span> <span m='852320'>child,</span> <span
  m='852800'>and</span> <span m='852880'>then</span> <span
  m='852990'>you're</span> <span m='853120'>unbalanced</span> <span
  m='853670'>there.</span> </p><p><span m='854750'>So</span> <span
  m='855400'>0's</span> <span m='855740'>just</span> <span m='855900'>not</span>
  <span m='856080'>possible</span> <span m='857110'>to</span> <span
  m='857250'>maintain,</span> <span m='858070'>but</span> <span
  m='858200'>1</span> <span m='858570'>is</span> <span m='858770'>almost</span>
  <span m='859210'>as</span> <span m='859350'>good,</span> <span
  m='860000'>hopefully.</span> <span m='861400'>We're</span> <span
  m='861510'>going</span> <span m='861620'>to</span> <span
  m='861680'>prove</span> <span m='861910'>that</span> <span
  m='862090'>in</span> <span m='862200'>a</span> <span m='862260'>second.</span>
  <span m='863950'>And</span> <span m='864260'>it</span> <span
  m='864340'>turns</span> <span m='864560'>out</span> <span m='864670'>to</span>
  <span m='864740'>be</span> <span m='864890'>easy</span> <span
  m='865130'>to</span> <span m='865260'>maintain</span> <span
  m='866690'>in</span> <span m='866900'>log</span> <span m='867300'>n</span>
  <span m='867470'>time.</span> </p><p><span m='870060'>So</span> <span
  m='872620'>let's</span> <span m='872830'>prove</span> <span
  m='873500'>some</span> <span m='873890'>stuff.</span> <span
  m='878870'>So</span> <span m='879060'>first</span> <span
  m='879360'>claim</span> <span m='880530'>is</span> <span
  m='880690'>that</span> <span m='880890'>AVL</span> <span
  m='881380'>trees</span> <span m='882970'>are</span> <span
  m='883120'>balanced.</span> <span m='892880'>Balanced,</span> <span
  m='893490'>remember,</span> <span m='893830'>means</span> <span
  m='894180'>that</span> <span m='894290'>the</span> <span
  m='894360'>height</span> <span m='894680'>of</span> <span
  m='894770'>them</span> <span m='895000'>is</span> <span
  m='895180'>always</span> <span m='895590'>order</span> <span
  m='895840'>log</span> <span m='896320'>n.</span> <span m='896820'>So</span>
  <span m='897250'>we're</span> <span m='897360'>just</span> <span
  m='897660'>going</span> <span m='897780'>to</span> <span
  m='897830'>assume</span> <span m='898150'>for</span> <span
  m='898280'>now</span> <span m='898460'>that</span> <span m='898570'>we</span>
  <span m='898680'>can</span> <span m='898820'>somehow</span> <span
  m='899300'>achieve</span> <span m='899600'>this</span> <span
  m='899770'>property.</span> <span m='900850'>We</span> <span
  m='901000'>want</span> <span m='901170'>to</span> <span
  m='901230'>prove</span> <span m='901480'>that</span> <span
  m='901600'>it</span> <span m='901700'>implies</span> <span
  m='902990'>that</span> <span m='903190'>the</span> <span
  m='903260'>height</span> <span m='903580'>is</span> <span m='905100'>at
  most</span> <span m='905290'>some</span> <span m='905440'>constant</span>
  <span m='905830'>times</span> <span m='906140'>log</span> <span
  m='906520'>n.</span> <span m='906730'>We</span> <span m='906840'>know</span>
  <span m='906940'>it's</span> <span m='907060'>at</span> <span
  m='907130'>least</span> <span m='907890'>log</span> <span m='908360'>n,</span>
  <span m='908740'>but</span> <span m='909510'>also</span> <span m='909740'>like
  it</span> <span m='909970'>to</span> <span m='910060'>be</span> <span
  m='910160'>not</span> <span m='910330'>much</span> <span
  m='910530'>bigger.</span> </p><p><span m='912460'>So</span> <span
  m='912520'>what</span> <span m='912630'>do</span> <span m='912670'>you</span>
  <span m='912770'>think</span> <span m='912950'>is</span> <span
  m='913060'>the</span> <span m='913190'>worst</span> <span
  m='913600'>case?</span> <span m='916040'>Say</span> <span m='916350'>I</span>
  <span m='916400'>have</span> <span m='916620'>n</span> <span
  m='916850'>nodes.</span> <span m='918020'>How</span> <span
  m='918260'>could</span> <span m='918400'>I</span> <span m='918460'>make</span>
  <span m='918710'>the</span> <span m='918800'>tree</span> <span
  m='919140'>as</span> <span m='919310'>high</span> <span m='919720'>as</span>
  <span m='919880'>possible?</span> <span m='921370'>Or</span> <span
  m='921620'>conversely,</span> <span m='922050'>if</span> <span
  m='922150'>I</span> <span m='922210'>have</span> <span m='922430'>a</span>
  <span m='922490'>particular</span> <span m='922960'>height,</span> <span
  m='923570'>how</span> <span m='923790'>could</span> <span m='923940'>I</span>
  <span m='923960'>make</span> <span m='924190'>it</span> <span
  m='924270'>have</span> <span m='924480'>as</span> <span m='924660'>few</span>
  <span m='925010'>nodes</span> <span m='925370'>as</span> <span
  m='925490'>possible?</span> <span m='926600'>That'd</span> <span
  m='926670'>be</span> <span m='926830'>like</span> <span m='927060'>the</span>
  <span m='927680'>sparsest,</span> <span m='928500'>the</span> <span
  m='929040'>least</span> <span m='929410'>balanced</span> <span
  m='929790'>situation</span> <span m='930390'>for</span> <span
  m='930510'>AVL</span> <span m='930600'>trees.</span> <span
  m='934507'>Yeah?</span> </p><p><span m='934988'>AUDIENCE: You could
  have</span> <span m='935469'>one node</span> <span m='935950'>on the
  last</span> <span m='936431'>level.</span> </p><p><span m='936920'>PROFESSOR:
  One</span> <span m='937280'>node</span> <span m='937380'>on the</span> <span
  m='937470'>last</span> <span m='937800'>level,</span> <span
  m='938090'>yeah,</span> <span m='938450'>in</span> <span
  m='938580'>particular.</span> <span m='939740'>Little</span> <span
  m='939900'>more.</span> <span m='940690'>What</span> <span
  m='940850'>do</span> <span m='940870'>the</span> <span m='940990'>other</span>
  <span m='941180'>levels</span> <span m='941470'>look</span> <span
  m='941620'>like?</span> <span m='943960'>That</span> <span
  m='944110'>is</span> <span m='944230'>correct,</span> <span
  m='945220'>but</span> <span m='945300'>I</span> <span m='945390'>want</span>
  <span m='945610'>to</span> <span m='945650'>know</span> <span
  m='945780'>the</span> <span m='945890'>whole</span> <span
  m='946230'>tree.</span> <span m='950320'>It's</span> <span
  m='950500'>hard</span> <span m='950700'>to</span> <span
  m='950930'>explain</span> <span m='951290'>the</span> <span
  m='951380'>tree,</span> <span m='951920'>but</span> <span
  m='953370'>you</span> <span m='953590'>can</span> <span
  m='953710'>explain</span> <span m='954060'>the</span> <span
  m='954140'>core</span> <span m='954370'>property</span> <span m='954740'>of
  the</span> <span m='954830'>tree.</span> <span m='955240'>Yeah?</span>
  </p><p><span m='955703'>AUDIENCE: [INAUDIBLE].</span> </p><p><span
  m='958950'>PROFESSOR: For</span> <span m='959230'>every</span> <span
  m='959620'>node,</span> <span m='959930'>let's</span> <span
  m='960100'>make</span> <span m='960310'>the</span> <span
  m='960440'>right</span> <span m='960770'>side</span> <span
  m='961050'>have</span> <span m='961640'>a</span> <span
  m='961680'>height</span> <span m='962030'>of</span> <span
  m='962130'>one</span> <span m='962350'>larger</span> <span
  m='963180'>than</span> <span m='963270'>the</span> <span
  m='963350'>left</span> <span m='963530'>side.</span> <span m='963730'>I
  think</span> <span m='964150'>that's</span> <span m='964310'>worth</span>
  <span m='964645'>a</span> <span m='964980'>cushion.</span> <span
  m='966270'>See if I</span> <span m='966720'>can throw</span> <span
  m='967020'>better.</span> <span m='970402'>Good</span> <span
  m='970894'>catch.</span> <span m='972862'>Better</span> <span
  m='973354'>than</span> <span m='973846'>hitting</span> <span m='974338'>your
  eye.</span> </p><p><span m='977790'>So</span> <span m='979480'>I'm</span>
  <span m='979650'>going</span> <span m='979770'>to</span> <span
  m='979870'>not</span> <span m='980140'>prove</span> <span
  m='980240'>this</span> <span m='980480'>formally,</span> <span m='982650'>but
  I</span> <span m='982850'>think</span> <span m='983170'>if</span> <span
  m='983370'>you</span> <span m='983500'>stare</span> <span m='983770'>at</span>
  <span m='983850'>this</span> <span m='984010'>long</span> <span
  m='984200'>enough</span> <span m='984430'>it's</span> <span
  m='984580'>pretty</span> <span m='984840'>obvious.</span> <span
  m='987000'>Worst</span> <span m='987310'>case</span> <span
  m='988670'>is</span> <span m='988830'>when--</span> <span
  m='991680'>there</span> <span m='991880'>are</span> <span
  m='991910'>multiple</span> <span m='992340'>worst</span> <span
  m='992600'>cases,</span> <span m='992850'>because</span> <span
  m='993220'>right</span> <span m='993450'>and</span> <span
  m='993530'>left</span> <span m='993750'>are</span> <span
  m='993860'>symmetric.</span> <span m='994350'>We</span> <span
  m='994440'>don't</span> <span m='994580'>really</span> <span
  m='994800'>care.</span> <span m='995680'>But</span> <span
  m='995800'>let's</span> <span m='996010'>say</span> <span
  m='996120'>that</span> <span m='996320'>the</span> <span
  m='996440'>right</span> <span m='996690'>subtree</span> <span
  m='1000040'>has</span> <span m='1000550'>height</span> <span
  m='1004260'>one</span> <span m='1004640'>more</span> <span
  m='1007820'>than</span> <span m='1008140'>the</span> <span
  m='1008220'>left</span> <span m='1011430'>for</span> <span
  m='1011660'>every</span> <span m='1011960'>node.</span> </p><p><span
  m='1016860'>OK,</span> <span m='1017020'>this</span> <span
  m='1017190'>is</span> <span m='1017310'>a</span> <span
  m='1017380'>little</span> <span m='1017640'>tricky</span> <span
  m='1017980'>to</span> <span m='1018100'>draw.</span> <span
  m='1020780'>Not</span> <span m='1020890'>even</span> <span
  m='1021010'>sure</span> <span m='1021210'>I</span> <span
  m='1021240'>want</span> <span m='1021420'>to</span> <span
  m='1021490'>try</span> <span m='1021650'>to</span> <span m='1021740'>draw
  it.</span> <span m='1023110'>But</span> <span m='1023260'>you</span> <span
  m='1023420'>basically</span> <span m='1023780'>draw it</span> <span
  m='1023990'>recursively.</span> <span m='1024670'>So,</span> <span
  m='1024819'>OK,</span> <span m='1026160'>somehow</span> <span
  m='1026579'>I've</span> <span m='1026829'>figured</span> <span
  m='1027160'>out</span> <span m='1027319'>this</span> <span
  m='1027550'>where</span> <span m='1027650'>the</span> <span
  m='1027740'>height</span> <span m='1028359'>difference</span> <span
  m='1028690'>here</span> <span m='1028869'>is</span> <span
  m='1028970'>1.</span> <span m='1030089'>Then</span> <span m='1030250'>I</span>
  <span m='1030319'>take</span> <span m='1030839'>two</span> <span
  m='1031030'>copies</span> <span m='1031450'>of</span> <span
  m='1031579'>it.</span> <span m='1032260'>It's</span> <span
  m='1032400'>like</span> <span m='1032550'>a</span> <span
  m='1032609'>fractal.</span> <span m='1033220'>You</span> <span
  m='1033420'>should</span> <span m='1033800'>know all</span> <span
  m='1034060'>about</span> <span m='1034290'>fractals</span> <span
  m='1034690'>by</span> <span m='1034810'>now.</span> <span
  m='1035569'>Problem</span> <span m='1036140'>set</span> <span
  m='1036599'>two.</span> </p><p><span m='1037849'>And</span> <span
  m='1038010'>then</span> <span m='1038190'>you</span> <span
  m='1038319'>just--</span> <span m='1039609'>well,</span> <span
  m='1039770'>that's</span> <span m='1039950'>not</span> <span
  m='1040099'>quite</span> <span m='1040369'>right.</span> <span
  m='1040619'>In</span> <span m='1040730'>fact,</span> <span
  m='1040950'>I</span> <span m='1041050'>need</span> <span m='1041240'>to</span>
  <span m='1041359'>somehow</span> <span m='1041720'>make</span> <span
  m='1041970'>this</span> <span m='1042140'>one a</span> <span
  m='1042240'>little</span> <span m='1042589'>bit</span> <span
  m='1042810'>taller</span> <span m='1045390'>and</span> <span
  m='1045920'>then</span> <span m='1046069'>glue</span> <span
  m='1046520'>these</span> <span m='1046700'>together.</span> <span
  m='1048700'>Little</span> <span m='1048830'>tricky.</span> <span
  m='1050330'>Let's</span> <span m='1050460'>not</span> <span
  m='1050590'>even</span> <span m='1050780'>try</span> <span
  m='1050940'>to</span> <span m='1051050'>draw</span> <span
  m='1051240'>the</span> <span m='1051370'>tree.</span> <span
  m='1052010'>Let's</span> <span m='1052240'>just</span> <span
  m='1052440'>imagine</span> <span m='1053260'>this</span> <span
  m='1053420'>is</span> <span m='1053520'>possible.</span> <span
  m='1053880'>It</span> <span m='1053950'>is</span> <span
  m='1054130'>possible.</span> </p><p><span m='1056740'>And</span> <span
  m='1057990'>instead,</span> <span m='1058510'>I'm</span> <span
  m='1058610'>going</span> <span m='1058640'>to</span> <span
  m='1058690'>use</span> <span m='1059010'>mathematics</span> <span
  m='1060190'>to</span> <span m='1060350'>understand</span> <span
  m='1061510'>how</span> <span m='1061930'>high</span> <span
  m='1062200'>that</span> <span m='1062470'>tree</span> <span
  m='1062800'>is.</span> <span m='1063160'>Or</span> <span
  m='1063350'>actually,</span> <span m='1064280'>it's</span> <span
  m='1064460'>a</span> <span m='1064510'>little</span> <span
  m='1064840'>easier</span> <span m='1066070'>to</span> <span
  m='1066190'>think</span> <span m='1066380'>about--</span> <span
  m='1066610'>let</span> <span m='1066700'>me</span> <span
  m='1066810'>get</span> <span m='1067000'>this</span> <span
  m='1067330'>right.</span> <span m='1068200'>It's</span> <span
  m='1068570'>so</span> <span m='1068840'>easy</span> <span
  m='1069180'>that</span> <span m='1069370'>I</span> <span
  m='1069450'>have</span> <span m='1069580'>to</span> <span
  m='1069670'>look</span> <span m='1069840'>at</span> <span
  m='1069880'>my</span> <span m='1069990'>notes</span> <span
  m='1070350'>to</span> <span m='1070760'>remember</span> <span
  m='1071100'>what</span> <span m='1071290'>to</span> <span
  m='1071410'>write.</span> <span m='1073550'>Really,</span> <span
  m='1073870'>no</span> <span m='1074050'>problem.</span> </p><p><span
  m='1076460'>All</span> <span m='1076560'>right,</span> <span
  m='1077010'>so</span> <span m='1077310'>I'm</span> <span
  m='1077460'>going</span> <span m='1077560'>to</span> <span
  m='1077660'>define</span> <span m='1079020'>n</span> <span
  m='1079350'>sub</span> <span m='1079710'>h</span> <span m='1081760'>is</span>
  <span m='1083640'>the</span> <span m='1083760'>minimum</span> <span
  m='1084310'>number</span> <span m='1084660'>of</span> <span
  m='1084740'>nodes</span> <span m='1088370'>that's</span> <span
  m='1088580'>possible</span> <span m='1089960'>in</span> <span
  m='1090180'>an</span> <span m='1090270'>AVL</span> <span
  m='1090800'>tree</span> <span m='1094779'>of</span> <span
  m='1095270'>height</span> <span m='1095400'>h.</span> <span
  m='1100380'>This</span> <span m='1100580'>is</span> <span
  m='1100680'>sort</span> <span m='1100920'>of</span> <span
  m='1100970'>the</span> <span m='1101110'>inverse</span> <span
  m='1101490'>of</span> <span m='1101580'>what</span> <span
  m='1101900'>we</span> <span m='1102310'>care</span> <span
  m='1102550'>about,</span> <span m='1103090'>but</span> <span
  m='1103640'>if</span> <span m='1103700'>we</span> <span m='1103790'>can</span>
  <span m='1103900'>solve</span> <span m='1104110'>the</span> <span
  m='1104200'>inverse,</span> <span m='1104520'>we</span> <span m='1104620'>can
  solve</span> <span m='1104890'>the</span> <span m='1105160'>thing.</span>
  </p><p><span m='1105440'>What</span> <span m='1105570'>we</span> <span
  m='1105670'>really</span> <span m='1105930'>care</span> <span
  m='1106140'>about</span> <span m='1106350'>is,</span> <span
  m='1106460'>for</span> <span m='1106690'>n</span> <span
  m='1106910'>nodes,</span> <span m='1108050'>how</span> <span
  m='1108290'>large</span> <span m='1108690'>can</span> <span m='1108940'>the
  height be?</span> <span m='1109390'>We</span> <span m='1109490'>want</span>
  <span m='1109650'>to</span> <span m='1109700'>prove</span> <span
  m='1109910'>that's</span> <span m='1110100'>order</span> <span
  m='1110350'>log</span> <span m='1110630'>n.</span> <span
  m='1111260'>But</span> <span m='1111420'>it'll</span> <span
  m='1111610'>be</span> <span m='1111750'>a</span> <span m='1111800'>lot</span>
  <span m='1111990'>easier</span> <span m='1112250'>to</span> <span
  m='1112310'>think</span> <span m='1112500'>about</span> <span
  m='1113020'>the</span> <span m='1113120'>reverse,</span> <span
  m='1113580'>which</span> <span m='1113690'>is,</span> <span
  m='1113880'>if</span> <span m='1114040'>I</span> <span m='1114130'>fix</span>
  <span m='1114550'>the</span> <span m='1114680'>height</span> <span
  m='1115080'>to</span> <span m='1115200'>be</span> <span m='1115370'>h,</span>
  <span m='1116300'>what's</span> <span m='1116530'>the</span> <span
  m='1116630'>fewest</span> <span m='1117090'>nodes that</span> <span
  m='1117400'>I</span> <span m='1117530'>can</span> <span
  m='1117700'>pack</span> <span m='1118000'>in?</span> <span
  m='1118590'>Because</span> <span m='1118820'>for</span> <span
  m='1119580'>the</span> <span m='1119710'>very</span> <span
  m='1119990'>unbalanced</span> <span m='1120530'>tree,</span> <span
  m='1121280'>I</span> <span m='1121380'>have</span> <span m='1121590'>a</span>
  <span m='1121620'>height</span> <span m='1122190'>of</span> <span
  m='1122450'>n,</span> <span m='1123060'>and</span> <span m='1123270'>I</span>
  <span m='1123400'>only</span> <span m='1123730'>need</span> <span
  m='1123890'>to</span> <span m='1123970'>put</span> <span m='1124160'>n</span>
  <span m='1124370'>nodes.</span> <span m='1125540'>That</span> <span
  m='1125690'>would</span> <span m='1125770'>be</span> <span
  m='1125910'>really</span> <span m='1126200'>bad.</span> </p><p><span
  m='1128300'>What</span> <span m='1128530'>I</span> <span
  m='1128610'>prefer</span> <span m='1129570'>is</span> <span
  m='1129690'>a</span> <span m='1129750'>situation</span> <span
  m='1130290'>like</span> <span m='1130500'>this,</span> <span
  m='1130760'>where</span> <span m='1131330'>with</span> <span
  m='1131470'>height</span> <span m='1131720'>h,</span> <span
  m='1134090'>I</span> <span m='1134240'>have</span> <span m='1134610'>to</span>
  <span m='1134740'>put</span> <span m='1134960'>in</span> <span m='1135220'>2
  to</span> <span m='1135480'>the h</span> <span m='1135740'>nodes.</span> <span
  m='1136360'>That</span> <span m='1136540'>would</span> <span
  m='1136650'>be</span> <span m='1136800'>perfect</span> <span
  m='1137170'>balance.</span> <span m='1138100'>Any</span> <span
  m='1138350'>constant</span> <span m='1138790'>to</span> <span m='1138870'>the
  h</span> <span m='1139040'>will</span> <span m='1139340'>do.</span> <span
  m='1139840'>So</span> <span m='1139990'>when you</span> <span
  m='1140110'>take</span> <span m='1140320'>the</span> <span
  m='1140440'>inverse,</span> <span m='1140870'>you</span> <span
  m='1140960'>get</span> <span m='1141100'>a</span> <span
  m='1141150'>log.</span> <span m='1142400'>OK,</span> <span
  m='1142550'>we'll</span> <span m='1142660'>get</span> <span
  m='1142830'>to</span> <span m='1142910'>that</span> <span
  m='1143100'>in</span> <span m='1143190'>a</span> <span
  m='1143230'>moment.</span> </p><p></p><p><span m='1153950'>How</span> <span
  m='1154140'>should</span> <span m='1154350'>we</span> <span
  m='1154720'>analyze</span> <span m='1155170'>n</span> <span
  m='1155310'>sub</span> <span m='1155500'>h?</span> <span m='1160163'>I</span>
  <span m='1160630'>hear</span> <span m='1161010'>something.</span> <span
  m='1161590'>Yeah?</span> </p><p><span m='1161900'>AUDIENCE: [INAUDIBLE]</span>
  <span m='1164162'>2</span> <span m='1164650'>to the</span> <span
  m='1165138'>h</span> <span m='1165626'>minus</span> <span m='1166114'>1</span>
  <span m='1166602'>[INAUDIBLE].</span> </p><p><span m='1175890'>PROFESSOR:
  Maybe,</span> <span m='1176540'>but</span> <span m='1178661'>I</span> <span
  m='1179150'>don't</span> <span m='1179360'>think</span> <span
  m='1179530'>that</span> <span m='1179680'>will</span> <span
  m='1179800'>quite</span> <span m='1180360'>work</span> <span
  m='1180670'>out.</span> <span m='1185210'>Any--</span> <span
  m='1186270'>yeah?</span> </p><p><span m='1187239'>AUDIENCE: So you have</span>
  <span m='1187718'>only 1 node</span> <span m='1188197'>in the</span> <span
  m='1188676'>last</span> <span m='1189155'>level,</span> <span m='1190592'>so
  it would be</span> <span m='1192029'>1/2</span> <span m='1192508'>to
  the</span> <span m='1192987'>h</span> <span m='1193466'>plus</span> <span
  m='1193945'>1.</span> </p><p><span m='1195861'>PROFESSOR: That</span> <span
  m='1196340'>turns</span> <span m='1196630'>out</span> <span
  m='1196770'>to</span> <span m='1196850'>be</span> <span
  m='1196960'>approximately</span> <span m='1197730'>correct,</span> <span
  m='1198500'>but</span> <span m='1199090'>I</span> <span
  m='1199160'>don't</span> <span m='1199310'>know</span> <span
  m='1199440'>where</span> <span m='1199590'>you</span> <span
  m='1199650'>got</span> <span m='1199820'>1/2</span> <span
  m='1200090'>to</span> <span m='1200260'>the</span> <span m='1200430'>h</span>
  <span m='1201170'>plus</span> <span m='1201420'>1.</span> <span
  m='1203050'>It's</span> <span m='1203700'>not</span> <span
  m='1203880'>exactly</span> <span m='1204280'>correct.</span> <span
  m='1204710'>I'll</span> <span m='1204810'>tell you</span> <span
  m='1204920'>that,</span> <span m='1205270'>so</span> <span
  m='1205460'>that</span> <span m='1205800'>your</span> <span
  m='1205890'>analysis</span> <span m='1206350'>isn't</span> <span
  m='1206600'>right.</span> </p><p><span m='1208490'>It's</span> <span
  m='1208630'>a</span> <span m='1208680'>lot</span> <span
  m='1208900'>easier.</span> <span m='1209700'>You</span> <span
  m='1209810'>guys</span> <span m='1210030'>are</span> <span
  m='1210090'>worried</span> <span m='1210350'>about</span> <span
  m='1210520'>the</span> <span m='1210590'>last</span> <span
  m='1210870'>level</span> <span m='1211320'>and</span> <span
  m='1211400'>actually</span> <span m='1211680'>what</span> <span
  m='1211820'>the</span> <span m='1211900'>tree</span> <span
  m='1212100'>looks</span> <span m='1212330'>like,</span> <span
  m='1212950'>but</span> <span m='1213070'>in</span> <span
  m='1213160'>fact,</span> <span m='1213360'>all</span> <span m='1213530'>you
  need is</span> <span m='1213960'>this.</span> <span m='1218100'>All you</span>
  <span m='1218230'>need</span> <span m='1218400'>is</span> <span
  m='1218500'>love,</span> <span m='1218800'>yeah.</span> </p><p><span
  m='1220144'>AUDIENCE: [INAUDIBLE].</span> </p><p><span m='1220940'>PROFESSOR:
  No,</span> <span m='1221460'>it's</span> <span m='1221730'>not</span> <span
  m='1221960'>a half.</span> <span m='1222670'>It's a</span> <span
  m='1222700'>different</span> <span m='1222950'>constant.</span> <span
  m='1223600'>Yeah?</span> </p><p><span m='1223960'>AUDIENCE: Start with</span>
  <span m='1224395'>base</span> <span m='1224830'>cases and write a</span> <span
  m='1225265'>recursive</span> <span m='1225700'>formula.</span> </p><p><span
  m='1226570'>PROFESSOR: Ah,</span> <span m='1226920'>recursive</span> <span
  m='1227570'>formula.</span> <span m='1228270'>Good.</span> <span
  m='1229200'>You</span> <span m='1229350'>said</span> <span
  m='1229570'>start</span> <span m='1229770'>with</span> <span
  m='1229860'>base</span> <span m='1230090'>cases.</span> <span
  m='1230460'>I</span> <span m='1230550'>always</span> <span
  m='1230710'>forget</span> <span m='1230970'>that</span> <span
  m='1231150'>part, so</span> <span m='1231510'>it's good</span> <span
  m='1231650'>that you</span> <span m='1232140'>remember.</span> <span
  m='1232860'>You</span> <span m='1232970'>should</span> <span
  m='1233230'>start</span> <span m='1233440'>with</span> <span
  m='1233550'>the</span> <span m='1233590'>base</span> <span
  m='1233840'>case,</span> <span m='1234120'>but</span> <span
  m='1234300'>I'm</span> <span m='1234420'>not</span> <span
  m='1234580'>going</span> <span m='1234690'>to</span> <span
  m='1234750'>worry</span> <span m='1234890'>about</span> <span
  m='1235070'>the</span> <span m='1235140'>base</span> <span
  m='1235390'>case</span> <span m='1235600'>because</span> <span
  m='1235760'>it</span> <span m='1235820'>won't</span> <span
  m='1235990'>matter.</span> <span m='1237210'>Because</span> <span
  m='1237600'>I</span> <span m='1237650'>know</span> <span
  m='1237830'>the</span> <span m='1237930'>base</span> <span
  m='1238190'>case</span> <span m='1238440'>is</span> <span
  m='1238590'>always</span> <span m='1238930'>going</span> <span
  m='1239060'>to</span> <span m='1239120'>be</span> <span m='1239340'>n</span>
  <span m='1239630'>order</span> <span m='1239960'>1</span> <span
  m='1240330'>is</span> <span m='1240500'>order</span> <span
  m='1240730'>1.</span> <span m='1241710'>So</span> <span m='1241980'>for</span>
  <span m='1242360'>algorithms,</span> <span m='1242830'>that's</span> <span
  m='1243040'>usually</span> <span m='1243410'>all</span> <span
  m='1243550'>you</span> <span m='1243660'>need</span> <span
  m='1243870'>for</span> <span m='1244030'>base</span> <span
  m='1244290'>case,</span> <span m='1244520'>but</span> <span
  m='1244660'>it's</span> <span m='1244770'>good</span> <span
  m='1244940'>that</span> <span m='1245000'>you</span> <span
  m='1245140'>think</span> <span m='1245340'>about</span> <span
  m='1245600'>it.</span> </p><p><span m='1245690'>What I</span> <span
  m='1245990'>was</span> <span m='1246240'>looking</span> <span
  m='1246470'>for</span> <span m='1246660'>is</span> <span
  m='1246720'>recursive</span> <span m='1247200'>formula,</span> <span
  m='1247640'>aka,</span> <span m='1248160'>recurrence.</span> <span
  m='1249740'>So</span> <span m='1249800'>can</span> <span
  m='1249970'>someone</span> <span m='1250400'>tell</span> <span
  m='1250650'>me--</span> <span m='1251520'>maybe</span> <span
  m='1251830'>even</span> <span m='1252010'>you--</span> <span
  m='1252260'>could</span> <span m='1252400'>tell</span> <span
  m='1252570'>me</span> <span m='1252840'>a</span> <span
  m='1252920'>recurrence</span> <span m='1253530'>for</span> <span
  m='1253810'>n</span> <span m='1254010'>sub</span> <span m='1254100'>h,</span>
  <span m='1254912'>in</span> <span m='1255320'>terms of</span> <span
  m='1255585'>n</span> <span m='1255850'>sub</span> <span
  m='1255960'>smaller</span> <span m='1256340'>h?</span> <span
  m='1259660'>Yeah?</span> </p><p><span m='1261145'>AUDIENCE: 1</span> <span
  m='1261640'>plus</span> <span m='1262135'>[INAUDIBLE].</span> </p><p><span
  m='1265600'>PROFESSOR: 1</span> <span m='1266790'>plus</span> <span
  m='1267360'>n</span> <span m='1267780'>sub</span> <span m='1268010'>h</span>
  <span m='1268180'>minus</span> <span m='1269060'>1.</span> <span
  m='1273570'>Not</span> <span m='1273730'>quite.</span> <span
  m='1274320'>Yeah?</span> </p><p><span m='1275196'>AUDIENCE: N</span> <span
  m='1275692'>sub</span> <span m='1276188'>h</span> <span m='1276684'>minus
  1</span> <span m='1277180'>plus</span> <span m='1277676'>n sub h</span> <span
  m='1278172'>minus</span> <span m='1278668'>2.</span> </p><p><span
  m='1279170'>PROFESSOR: N</span> <span m='1279530'>plus--</span> <span
  m='1280390'>do</span> <span m='1280840'>you</span> <span
  m='1280960'>want</span> <span m='1281100'>the</span> <span
  m='1281190'>1</span> <span m='1281340'>plus?</span> </p><p><span
  m='1282365'>AUDIENCE: I</span> <span m='1282860'>don't</span> <span
  m='1283355'>think</span> <span m='1283850'>so.</span> </p><p><span
  m='1285720'>PROFESSOR: You</span> <span m='1285840'>do.</span> <span
  m='1288560'>It's</span> <span m='1289020'>a</span> <span
  m='1289110'>collaboration.</span> <span m='1290040'>To</span> <span
  m='1290450'>combine</span> <span m='1290850'>your</span> <span
  m='1290960'>two</span> <span m='1291120'>answers,</span> <span
  m='1291490'>this</span> <span m='1291720'>should</span> <span
  m='1291890'>be</span> <span m='1292020'>the</span> <span
  m='1292130'>correct</span> <span m='1292530'>formula.</span> <span
  m='1292720'>Let me</span> <span m='1292810'>double</span> <span
  m='1293050'>check.</span> <span m='1293980'>Yes,</span> <span
  m='1294380'>whew.</span> <span m='1295380'>Good.</span> </p><p><span
  m='1295760'>OK,</span> <span m='1295940'>why?</span> <span
  m='1297050'>Because</span> <span m='1298490'>the</span> <span
  m='1298870'>one</span> <span m='1299120'>thing</span> <span
  m='1299320'>we</span> <span m='1299410'>know</span> <span
  m='1300100'>is</span> <span m='1300280'>that</span> <span
  m='1300440'>our</span> <span m='1300580'>tree</span> <span
  m='1301060'>looks</span> <span m='1301310'>like</span> <span
  m='1301600'>this.</span> <span m='1305510'>The</span> <span
  m='1305640'>total</span> <span m='1305950'>height</span> <span
  m='1306230'>here</span> <span m='1306480'>is</span> <span
  m='1306710'>h.</span> <span m='1307130'>That's</span> <span
  m='1307820'>what</span> <span m='1307950'>we're</span> <span
  m='1308070'>trying</span> <span m='1308370'>to</span> <span
  m='1308430'>figure</span> <span m='1308770'>out.</span> </p><p><span
  m='1309260'>How</span> <span m='1309470'>many</span> <span
  m='1309730'>nodes</span> <span m='1310190'>are</span> <span m='1310310'>in
  this tree</span> <span m='1310800'>of</span> <span m='1310870'>height</span>
  <span m='1311090'>h?</span> <span m='1312050'>Well,</span> <span
  m='1313450'>the</span> <span m='1313560'>height</span> <span
  m='1313890'>is</span> <span m='1314210'>the</span> <span
  m='1314980'>max</span> <span m='1315420'>of</span> <span
  m='1315520'>the</span> <span m='1315640'>two</span> <span
  m='1316360'>directions.</span> <span m='1317660'>So</span> <span
  m='1317820'>that</span> <span m='1318020'>means</span> <span
  m='1318330'>that</span> <span m='1318625'>the</span> <span
  m='1318920'>larger</span> <span m='1320100'>has</span> <span
  m='1320310'>height</span> <span m='1320710'>h</span> <span
  m='1320970'>minus</span> <span m='1321370'>1,</span> <span
  m='1322260'>because</span> <span m='1323710'>the</span> <span
  m='1323780'>longest</span> <span m='1324200'>path</span> <span
  m='1324460'>to</span> <span m='1324620'>a leaf</span> <span
  m='1324860'>is</span> <span m='1324970'>going</span> <span
  m='1325090'>to</span> <span m='1325150'>be</span> <span
  m='1325260'>down</span> <span m='1325480'>this</span> <span
  m='1325660'>way.</span> </p><p><span m='1326750'>What's</span> <span
  m='1326940'>the</span> <span m='1327020'>height</span> <span
  m='1327210'>of</span> <span m='1327310'>this?</span> <span
  m='1328110'>Well,</span> <span m='1328230'>it's</span> <span
  m='1328350'>one</span> <span m='1328590'>less</span> <span
  m='1328880'>than</span> <span m='1328980'>the</span> <span
  m='1329040'>height</span> <span m='1329230'>of</span> <span
  m='1329310'>this.</span> <span m='1330140'>So</span> <span
  m='1330340'>it's</span> <span m='1330480'>going</span> <span
  m='1330600'>to</span> <span m='1330650'>be</span> <span m='1330780'>h</span>
  <span m='1331000'>minus</span> <span m='1331320'>2.</span> <span
  m='1333270'>This</span> <span m='1333460'>is</span> <span
  m='1333580'>where</span> <span m='1333750'>the</span> <span
  m='1333980'>n</span> <span m='1334170'>sub</span> <span m='1334370'>h</span>
  <span m='1334580'>minus</span> <span m='1334850'>1</span> <span
  m='1335110'>plus</span> <span m='1335940'>n</span> <span
  m='1336150'>sub</span> <span m='1336250'>h</span> <span
  m='1336420'>minus</span> <span m='1336710'>2</span> <span
  m='1337210'>come</span> <span m='1337440'>in.</span> </p><p><span
  m='1337550'>But</span> <span m='1337870'>there's</span> <span
  m='1338020'>also</span> <span m='1338340'>this</span> <span
  m='1338590'>node.</span> <span m='1339400'>It</span> <span
  m='1340450'>doesn't</span> <span m='1340810'>actually</span> <span
  m='1341100'>make</span> <span m='1341280'>a</span> <span
  m='1341340'>big</span> <span m='1341510'>difference</span> <span
  m='1341910'>in</span> <span m='1341960'>this</span> <span
  m='1342090'>recurrence.</span> <span m='1342580'>This</span> <span
  m='1342840'>is</span> <span m='1342990'>the</span> <span
  m='1343110'>exponential</span> <span m='1343660'>part.</span> <span
  m='1343940'>This</span> <span m='1344110'>is</span> <span
  m='1344260'>like</span> <span m='1344600'>itty</span> <span
  m='1344920'>bitty</span> <span m='1345250'>thing.</span> <span
  m='1346370'>But</span> <span m='1346530'>it</span> <span
  m='1346650'>matters</span> <span m='1346920'>for</span> <span
  m='1347010'>the</span> <span m='1347090'>base</span> <span
  m='1347350'>case</span> <span m='1347650'>is</span> <span
  m='1347790'>pretty</span> <span m='1347970'>much</span> <span
  m='1349080'>where</span> <span m='1349210'>it</span> <span
  m='1349260'>matters.</span> <span m='1350850'>Back to</span> <span
  m='1351010'>your</span> <span m='1351110'>base</span> <span
  m='1351340'>case.</span> </p><p><span m='1351920'>There's</span> <span
  m='1352080'>one</span> <span m='1352310'>guy</span> <span
  m='1352490'>here,</span> <span m='1352740'>plus</span> <span
  m='1353210'>all</span> <span m='1353390'>the</span> <span
  m='1353480'>nodes</span> <span m='1353750'>on</span> <span
  m='1353800'>the</span> <span m='1353880'>left,</span> <span
  m='1354500'>plus</span> <span m='1354830'>all</span> <span
  m='1355000'>the</span> <span m='1355090'>nodes</span> <span
  m='1355320'>on</span> <span m='1355390'>the</span> <span
  m='1355480'>right.</span> <span m='1356410'>And</span> <span
  m='1356600'>for</span> <span m='1356710'>whatever</span> <span
  m='1357040'>reason,</span> <span m='1357430'>I</span> <span
  m='1357540'>put</span> <span m='1357730'>the</span> <span
  m='1357810'>left</span> <span m='1358110'>over</span> <span
  m='1358290'>here</span> <span m='1359320'>and</span> <span
  m='1359640'>the</span> <span m='1359830'>right</span> <span
  m='1360050'>over</span> <span m='1360300'>here.</span> <span
  m='1362300'>And</span> <span m='1362380'>of</span> <span
  m='1362480'>course,</span> <span m='1362780'>you</span> <span
  m='1362880'>could</span> <span m='1362930'>reverse</span> <span
  m='1363280'>this</span> <span m='1363430'>picture.</span> <span m='1363720'>It
  doesn't</span> <span m='1363940'>really</span> <span
  m='1364130'>matter.</span> <span m='1364380'>You</span> <span
  m='1364520'>get</span> <span m='1364720'>the</span> <span
  m='1364800'>same</span> <span m='1365080'>formula.</span> <span
  m='1365620'>That's</span> <span m='1365850'>the</span> <span
  m='1365940'>point.</span> </p><p><span m='1367200'>So</span> <span
  m='1367370'>this</span> <span m='1367610'>is</span> <span
  m='1367710'>the</span> <span m='1367810'>recurrence.</span> <span
  m='1369250'>Now</span> <span m='1369460'>we</span> <span
  m='1369550'>need</span> <span m='1369740'>to</span> <span
  m='1369840'>solve</span> <span m='1370190'>it.</span> <span
  m='1371370'>What</span> <span m='1371570'>we</span> <span
  m='1371700'>would</span> <span m='1371830'>like</span> <span
  m='1372250'>is</span> <span m='1372420'>for it</span> <span
  m='1372610'>to</span> <span m='1372710'>be</span> <span
  m='1372870'>exponential,</span> <span m='1374070'>because</span> <span
  m='1374220'>that</span> <span m='1374380'>means</span> <span
  m='1374520'>there's</span> <span m='1374670'>a</span> <span
  m='1374740'>lot</span> <span m='1375180'>of</span> <span
  m='1375300'>nodes</span> <span m='1376250'>in</span> <span
  m='1376480'>a</span> <span m='1376520'>height</span> <span
  m='1376770'>h</span> <span m='1377450'>AVL</span> <span
  m='1377830'>tree.</span> <span m='1379780'>So</span> <span
  m='1380170'>any</span> <span m='1380730'>suggestions</span> <span
  m='1381250'>on</span> <span m='1381430'>how</span> <span m='1381600'>we</span>
  <span m='1381710'>could</span> <span m='1382100'>figure</span> <span
  m='1382380'>out</span> <span m='1382460'>this</span> <span
  m='1382710'>recurrence?</span> <span m='1384290'>Does it</span> <span
  m='1384440'>look</span> <span m='1384650'>like</span> <span
  m='1384840'>anything</span> <span m='1385160'>you've</span> <span
  m='1385280'>seen</span> <span m='1385490'>before?</span> </p><p><span
  m='1386275'>AUDIENCE: Fibonacci.</span> </p><p><span m='1387460'>PROFESSOR:
  Fibonacci.</span> <span m='1387875'>It's</span> <span
  m='1388290'>almost</span> <span m='1388780'>Fibonacci.</span> <span
  m='1389930'>If</span> <span m='1390100'>I</span> <span m='1390220'>hid</span>
  <span m='1390720'>this</span> <span m='1390960'>plus</span> <span
  m='1391450'>1,</span> <span m='1392120'>which you</span> <span
  m='1392240'>wanted</span> <span m='1392550'>to</span> <span
  m='1392650'>do,</span> <span m='1393290'>then</span> <span
  m='1393470'>it</span> <span m='1393600'>would</span> <span
  m='1393730'>be</span> <span m='1393820'>exactly</span> <span
  m='1394290'>Fibonacci.</span> <span m='1396210'>Well,</span> <span
  m='1396370'>that's</span> <span m='1396590'>actually</span> <span
  m='1397140'>good,</span> <span m='1398840'>because</span> <span
  m='1399260'>in</span> <span m='1399370'>particular,</span> <span
  m='1399910'>n</span> <span m='1400170'>sub</span> <span m='1400350'>h</span>
  <span m='1401190'>is</span> <span m='1401380'>bigger</span> <span
  m='1401820'>than</span> <span m='1402720'>Fibonacci.</span> <span
  m='1403620'>If</span> <span m='1403710'>you</span> <span
  m='1403820'>add</span> <span m='1404010'>one</span> <span
  m='1404210'>at</span> <span m='1404360'>every</span> <span
  m='1404640'>single</span> <span m='1404970'>level,</span> <span
  m='1405220'>the</span> <span m='1405310'>certainly</span> <span
  m='1405710'>you</span> <span m='1405810'>get</span> <span
  m='1405960'>something</span> <span m='1406250'>bigger</span> <span
  m='1407050'>than</span> <span m='1407330'>the</span> <span
  m='1407440'>base</span> <span m='1407750'>Fibonacci</span> <span
  m='1408250'>sequence.</span> </p><p><span m='1411570'>Now,</span> <span
  m='1411760'>hopefully</span> <span m='1412190'>you know</span> <span
  m='1412615'>Fibonacci</span> <span m='1413040'>is</span> <span
  m='1413150'>exponential.</span> <span m='1419570'>I</span> <span
  m='1419650'>have</span> <span m='1419810'>an</span> <span
  m='1419860'>exact</span> <span m='1420270'>formula.</span> <span
  m='1425100'>If</span> <span m='1425210'>you</span> <span
  m='1425320'>take</span> <span m='1426360'>the</span> <span
  m='1426480'>golden</span> <span m='1426740'>ratio</span> <span
  m='1427140'>to</span> <span m='1427240'>the</span> <span
  m='1427330'>power</span> <span m='1427650'>h,</span> <span
  m='1427930'>divide</span> <span m='1428260'>by</span> <span
  m='1428350'>root</span> <span m='1428600'>5,</span> <span
  m='1428990'>and</span> <span m='1429130'>round</span> <span
  m='1429480'>to</span> <span m='1429550'>the</span> <span
  m='1429660'>nearest</span> <span m='1429940'>integer,</span> <span
  m='1430600'>you</span> <span m='1430730'>get</span> <span
  m='1430870'>exactly</span> <span m='1431320'>the</span> <span
  m='1431390'>Fibonacci</span> <span m='1431880'>number.</span> </p><p><span
  m='1432320'>Crazy</span> <span m='1433230'>stuff.</span> <span
  m='1433640'>We</span> <span m='1433760'>don't</span> <span
  m='1433900'>need</span> <span m='1434050'>to</span> <span
  m='1434130'>know</span> <span m='1434250'>why</span> <span
  m='1434400'>that's</span> <span m='1434630'>true.</span> <span
  m='1434890'>Just</span> <span m='1435540'>take</span> <span
  m='1435760'>it</span> <span m='1435850'>as</span> <span
  m='1435990'>fact.</span> <span m='1436800'>And</span> <span
  m='1437020'>conveniently</span> <span m='1437920'>phi</span> <span
  m='1438210'>is</span> <span m='1438350'>bigger</span> <span
  m='1438600'>than</span> <span m='1438790'>1.</span> <span
  m='1439550'>You</span> <span m='1439610'>don't</span> <span
  m='1439760'>need</span> <span m='1439900'>to</span> <span
  m='1439960'>remember</span> <span m='1440230'>what</span> <span
  m='1440370'>phi</span> <span m='1440750'>is, except</span> <span
  m='1440990'>it</span> <span m='1441110'>is</span> <span
  m='1441170'>bigger</span> <span m='1441440'>than</span> <span
  m='1441610'>1.</span> <span m='1442240'>And</span> <span m='1442440'>so</span>
  <span m='1442550'>this</span> <span m='1442800'>is</span> <span
  m='1442950'>an</span> <span m='1443050'>exponential</span> <span
  m='1443600'>bound.</span> <span m='1444900'>This</span> <span
  m='1445040'>is</span> <span m='1445140'>good</span> <span
  m='1445310'>news.</span> </p><p><span m='1447560'>So</span> <span
  m='1449390'>I'll</span> <span m='1449450'>tell</span> <span
  m='1449690'>you</span> <span m='1449870'>it's</span> <span
  m='1450010'>about</span> <span m='1450230'>1.618.</span> <span
  m='1453160'>And</span> <span m='1453380'>so</span> <span m='1453720'>we</span>
  <span m='1453840'>get</span> <span m='1454540'>is</span> <span
  m='1454910'>that--</span> <span m='1455660'>if</span> <span
  m='1455790'>we</span> <span m='1455910'>invert</span> <span
  m='1456165'>this,</span> <span m='1456420'>this</span> <span
  m='1456770'>says</span> <span m='1457010'>n</span> <span
  m='1457250'>sub</span> <span m='1457420'>h</span> <span m='1457670'>is</span>
  <span m='1457840'>bigger</span> <span m='1458250'>than</span> <span
  m='1459040'>some</span> <span m='1459270'>phi</span> <span
  m='1459470'>to</span> <span m='1459540'>the</span> <span m='1459750'>h.</span>
  <span m='1461410'>This is</span> <span m='1461530'>our</span> <span
  m='1461720'>n,</span> <span m='1462440'>basically.</span> </p><p><span
  m='1463450'>What</span> <span m='1463580'>we</span> <span
  m='1463730'>really</span> <span m='1463960'>want</span> <span
  m='1464140'>to</span> <span m='1464200'>know</span> <span
  m='1464350'>is</span> <span m='1464480'>how</span> <span m='1464750'>h</span>
  <span m='1465180'>relates</span> <span m='1465610'>to</span> <span
  m='1465790'>n,</span> <span m='1466750'>which</span> <span
  m='1466800'>is</span> <span m='1466890'>just</span> <span
  m='1467100'>inverting</span> <span m='1467520'>this</span> <span
  m='1467680'>formula.</span> <span m='1469420'>So</span> <span
  m='1469520'>we</span> <span m='1469610'>have,</span> <span
  m='1469960'>on</span> <span m='1470070'>the</span> <span
  m='1470170'>other</span> <span m='1470310'>hand,</span> <span
  m='1470870'>the</span> <span m='1471940'>phi</span> <span
  m='1472090'>to</span> <span m='1472200'>the</span> <span m='1472370'>h</span>
  <span m='1473636'>divided</span> <span m='1474060'>by</span> <span
  m='1474120'>root</span> <span m='1474330'>5</span> <span m='1475430'>is</span>
  <span m='1475650'>less</span> <span m='1476000'>than</span> <span
  m='1476860'>n.</span> </p><p><span m='1480960'>So</span> <span m='1481940'>I
  got</span> <span m='1482410'>a</span> <span m='1483370'>log</span> <span
  m='1483710'>base</span> <span m='1484070'>phi</span> <span
  m='1484290'>on</span> <span m='1484360'>both</span> <span
  m='1484540'>sides.</span> <span m='1485720'>Seems</span> <span
  m='1486000'>like</span> <span m='1486200'>a</span> <span
  m='1486860'>good</span> <span m='1487050'>thing</span> <span
  m='1487220'>to</span> <span m='1487280'>do.</span> <span
  m='1490560'>This</span> <span m='1490650'>is</span> <span
  m='1490760'>actually</span> <span m='1491020'>quite</span> <span
  m='1491260'>annoying.</span> <span m='1492200'>I've</span> <span
  m='1492690'>got</span> <span m='1492880'>h</span> <span
  m='1493550'>minus</span> <span m='1493930'>a</span> <span
  m='1494030'>tiny</span> <span m='1494360'>little</span> <span
  m='1494580'>thing.</span> <span m='1495210'>It's</span> <span
  m='1495320'>less</span> <span m='1495850'>than</span> <span
  m='1497470'>log</span> <span m='1498810'>base</span> <span
  m='1499230'>phi</span> <span m='1500140'>of</span> <span m='1500300'>n.</span>
  <span m='1501920'>And</span> <span m='1502150'>I</span> <span
  m='1502190'>will</span> <span m='1502380'>tell</span> <span
  m='1502680'>you</span> <span m='1504190'>that</span> <span
  m='1504360'>is</span> <span m='1504510'>about</span> <span
  m='1505370'>1.440</span> <span m='1507840'>times</span> <span
  m='1508110'>log</span> <span m='1508380'>base</span> <span
  m='1508630'>2</span> <span m='1508900'>of</span> <span m='1509225'>n,</span>
  <span m='1509550'>because</span> <span m='1509760'>after</span> <span
  m='1510040'>all,</span> <span m='1510500'>log</span> <span
  m='1510740'>base</span> <span m='1510980'>2</span> <span m='1511140'>is</span>
  <span m='1511250'>what</span> <span m='1511390'>computer</span> <span
  m='1511700'>scientists</span> <span m='1512150'>care</span> <span
  m='1512350'>about.</span> </p><p><span m='1513800'>So</span> <span
  m='1514070'>just</span> <span m='1514250'>to</span> <span
  m='1514320'>put</span> <span m='1514510'>it</span> <span
  m='1514640'>into</span> <span m='1515780'>perspective.</span> <span
  m='1516690'>We</span> <span m='1516830'>want it</span> <span
  m='1517110'>to</span> <span m='1517180'>be</span> <span
  m='1517300'>theta</span> <span m='1517990'>log</span> <span
  m='1518190'>base</span> <span m='1518400'>2</span> <span m='1518560'>of</span>
  <span m='1518640'>n.</span> <span m='1519170'>And</span> <span
  m='1519310'>here's</span> <span m='1519550'>the</span> <span
  m='1519640'>bound.</span> <span m='1520370'>The</span> <span
  m='1520480'>height</span> <span m='1521020'>is</span> <span
  m='1521260'>always</span> <span m='1521510'>less</span> <span
  m='1521710'>than</span> <span m='1521830'>1.44</span> <span
  m='1522710'>times</span> <span m='1523010'>log</span> <span
  m='1523270'>n.</span> </p><p><span m='1523630'>All</span> <span
  m='1523810'>we</span> <span m='1523910'>care</span> <span m='1524090'>about
  is</span> <span m='1524300'>some</span> <span m='1524470'>constant,</span>
  <span m='1524990'>but</span> <span m='1525180'>this</span> <span
  m='1525360'>is</span> <span m='1525500'>a</span> <span
  m='1525550'>pretty</span> <span m='1526460'>good</span> <span
  m='1526650'>constant.</span> <span m='1527800'>We'd</span> <span
  m='1527950'>like</span> <span m='1528140'>one.</span> <span
  m='1528900'>There</span> <span m='1529100'>are</span> <span
  m='1529260'>binary</span> <span m='1529640'>search tress</span> <span
  m='1529980'>that</span> <span m='1530070'>achieve</span> <span
  m='1530380'>1,</span> <span m='1532340'>plus</span> <span
  m='1532590'>very,</span> <span m='1533040'>very</span> <span
  m='1533160'>tiny</span> <span m='1533440'>thing,</span> <span
  m='1534030'>arbitrarily</span> <span m='1534600'>tiny,</span> <span
  m='1535360'>but</span> <span m='1536790'>this</span> <span
  m='1536960'>is</span> <span m='1537060'>pretty</span> <span
  m='1537280'>good.</span> </p><p><span m='1539360'>Now,</span> <span
  m='1539510'>if</span> <span m='1539660'>you</span> <span
  m='1539740'>don't</span> <span m='1539980'>know</span> <span
  m='1540100'>Fibonacci</span> <span m='1540600'>numbers,</span> <span
  m='1541830'>I</span> <span m='1541940'>pull</span> <span m='1542240'>a</span>
  <span m='1542310'>rabbit</span> <span m='1542620'>out</span> <span
  m='1542740'>of</span> <span m='1542840'>a</span> <span m='1542880'>hat</span>
  <span m='1543220'>and</span> <span m='1543390'>I've</span> <span
  m='1543490'>got</span> <span m='1543650'>this</span> <span
  m='1544020'>phi</span> <span m='1544590'>to</span> <span
  m='1544810'>the</span> <span m='1544950'>h.</span> <span
  m='1545810'>It's</span> <span m='1546240'>kind</span> <span
  m='1546670'>of</span> <span m='1546730'>magical.</span> <span
  m='1548530'>There's</span> <span m='1549320'>a</span> <span
  m='1549390'>much</span> <span m='1549670'>easier</span> <span
  m='1549960'>way</span> <span m='1550110'>to</span> <span
  m='1550240'>analyze</span> <span m='1550590'>this</span> <span
  m='1550730'>recurrence.</span> <span m='1553690'>I'll</span> <span
  m='1553800'>just</span> <span m='1553960'>tell</span> <span
  m='1554140'>you</span> <span m='1554530'>because</span> <span
  m='1556230'>it's</span> <span m='1556840'>good</span> <span
  m='1556990'>to</span> <span m='1557100'>know</span> <span
  m='1557340'>but</span> <span m='1557560'>not</span> <span
  m='1557810'>super</span> <span m='1558100'>critical.</span>
  </p><p></p><p><span m='1569880'>So</span> <span m='1570090'>we</span> <span
  m='1570170'>have</span> <span m='1570320'>this</span> <span
  m='1570480'>recurrence,</span> <span m='1571020'>n</span> <span
  m='1571250'>sub</span> <span m='1571460'>h.</span> <span
  m='1575960'>This</span> <span m='1576150'>is</span> <span
  m='1576290'>the</span> <span m='1576520'>computer</span> <span
  m='1576880'>scientist</span> <span m='1577340'>way</span> <span
  m='1577470'>to</span> <span m='1577550'>solve</span> <span
  m='1577800'>the</span> <span m='1577870'>recurrence.</span> <span
  m='1579110'>We</span> <span m='1579200'>don't</span> <span
  m='1579380'>care</span> <span m='1579630'>about</span> <span
  m='1579830'>the</span> <span m='1579890'>constants.</span> <span
  m='1581450'>This</span> <span m='1581660'>is</span> <span
  m='1581710'>the</span> <span m='1581790'>theoretical</span> <span
  m='1582370'>computer</span> <span m='1582690'>scientist</span> <span
  m='1582940'>way</span> <span m='1583320'>to</span> <span m='1583520'>solve
  this</span> <span m='1583850'>recurrence.</span> <span m='1584550'>We</span>
  <span m='1584650'>don't</span> <span m='1584800'>care</span> <span
  m='1584920'>about</span> <span m='1585110'>constants.</span> </p><p><span
  m='1585700'>And</span> <span m='1586040'>so</span> <span m='1586160'>we</span>
  <span m='1586240'>say,</span> <span m='1586540'>aw,</span> <span
  m='1587380'>this</span> <span m='1587650'>is</span> <span
  m='1587760'>hard.</span> <span m='1588020'>I've</span> <span
  m='1588100'>got</span> <span m='1588250'>n</span> <span m='1588520'>sub
  h</span> <span m='1588650'>minus</span> <span m='1588950'>1</span> <span
  m='1589210'>and n</span> <span m='1589350'>sub h</span> <span
  m='1589490'>minus</span> <span m='1589960'>2.</span> <span
  m='1591610'>So</span> <span m='1592190'>asymmetric.</span> <span
  m='1593360'>Let's</span> <span m='1593630'>symmetrify.</span> <span
  m='1595900'>Could</span> <span m='1596070'>I</span> <span
  m='1596120'>make</span> <span m='1596570'>them</span> <span
  m='1596740'>both</span> <span m='1597140'>n</span> <span
  m='1597310'>sub</span> <span m='1597440'>h</span> <span
  m='1597610'>minus</span> <span m='1597860'>1.</span> <span
  m='1599030'>Or</span> <span m='1599600'>could</span> <span
  m='1599700'>I</span> <span m='1599780'>make</span> <span
  m='1599920'>them</span> <span m='1600030'>both</span> <span
  m='1600330'>n</span> <span m='1600460'>sub</span> <span m='1600630'>h</span>
  <span m='1600800'>minus</span> <span m='1601070'>2?</span> <span
  m='1604310'>Suggestions?</span> </p><p><span m='1605920'>AUDIENCE:
  [INAUDIBLE].</span> </p><p><span m='1607600'>PROFESSOR: Minus</span> <span
  m='1607930'>2</span> <span m='1608480'>is</span> <span m='1608590'>the</span>
  <span m='1608690'>right</span> <span m='1609050'>way</span> <span
  m='1609220'>to</span> <span m='1609290'>go</span> <span
  m='1609560'>because</span> <span m='1609860'>I</span> <span
  m='1609960'>want</span> <span m='1610150'>to</span> <span
  m='1610210'>know</span> <span m='1610340'>n</span> <span
  m='1610520'>sub</span> <span m='1610670'>h</span> <span m='1610830'>is</span>
  <span m='1610980'>greater</span> <span m='1611500'>than</span> <span
  m='1611680'>something</span> <span m='1612130'>in</span> <span
  m='1612220'>order</span> <span m='1612400'>to</span> <span
  m='1612450'>get</span> <span m='1612590'>a</span> <span
  m='1612650'>less</span> <span m='1612930'>than</span> <span
  m='1613510'>down</span> <span m='1613740'>here.</span> <span
  m='1614400'>By</span> <span m='1614410'>the</span> <span
  m='1614500'>way,</span> <span m='1614800'>I use</span> <span
  m='1614840'>that</span> <span m='1614920'>log</span> <span
  m='1615150'>is</span> <span m='1615240'>monatomic</span> <span
  m='1615820'>here,</span> <span m='1617210'>but</span> <span
  m='1617360'>it</span> <span m='1617450'>is,</span> <span m='1617800'>so</span>
  <span m='1617960'>we're</span> <span m='1618070'>good.</span> </p><p><span
  m='1618770'>So</span> <span m='1618900'>this</span> <span
  m='1619060'>is</span> <span m='1619110'>going</span> <span
  m='1619240'>to</span> <span m='1619300'>be</span> <span
  m='1619420'>greater</span> <span m='1619870'>than</span> <span
  m='1620600'>1</span> <span m='1621080'>plus</span> <span m='1623000'>2</span>
  <span m='1623660'>times</span> <span m='1624040'>n</span> <span
  m='1624260'>sub</span> <span m='1624460'>h</span> <span
  m='1624930'>minus</span> <span m='1625230'>2.</span> <span
  m='1627880'>Because</span> <span m='1629690'>if</span> <span
  m='1629800'>I</span> <span m='1629880'>have</span> <span m='1629970'>a</span>
  <span m='1630010'>larger</span> <span m='1630280'>height</span> <span
  m='1630510'>I'm</span> <span m='1630610'>going</span> <span
  m='1630720'>to</span> <span m='1630760'>have</span> <span
  m='1630970'>more</span> <span m='1631170'>nodes.</span> <span
  m='1631640'>That's</span> <span m='1631850'>an</span> <span
  m='1631940'>easy</span> <span m='1632620'>proof</span> <span
  m='1632810'>by</span> <span m='1632940'>induction.</span> </p><p><span
  m='1635140'>So</span> <span m='1635550'>I</span> <span m='1635660'>can</span>
  <span m='1635980'>combine</span> <span m='1636360'>these</span> <span
  m='1636510'>into</span> <span m='1636700'>one</span> <span
  m='1636870'>term.</span> <span m='1637120'>It's</span> <span
  m='1637230'>simpler.</span> <span m='1637910'>I</span> <span
  m='1638020'>can</span> <span m='1638220'>get</span> <span m='1638320'>rid
  of</span> <span m='1638500'>this</span> <span m='1638660'>1</span> <span
  m='1638960'>because</span> <span m='1639220'>that</span> <span
  m='1639390'>only</span> <span m='1639580'>makes</span> <span
  m='1639790'>things</span> <span m='1639970'>bigger.</span> <span
  m='1641040'>So</span> <span m='1641410'>I</span> <span m='1641550'>just</span>
  <span m='1641780'>have</span> <span m='1641940'>this.</span> <span
  m='1642960'>OK,</span> <span m='1643070'>now</span> <span m='1643250'>I</span>
  <span m='1643320'>need</span> <span m='1643480'>a</span> <span
  m='1643530'>base</span> <span m='1643780'>case,</span> <span
  m='1644510'>but</span> <span m='1644630'>this</span> <span
  m='1644800'>looks</span> <span m='1644990'>like</span> <span
  m='1646480'>2</span> <span m='1646770'>the</span> <span
  m='1646900'>something.</span> </p><p><span m='1647800'>What's</span> <span
  m='1648010'>the</span> <span m='1648090'>something?</span> <span
  m='1649190'>H</span> <span m='1649630'>over</span> <span m='1649890'>2.</span>
  <span m='1652780'>So</span> <span m='1652930'>I'll just write</span> <span
  m='1653310'>theta</span> <span m='1653730'>to</span> <span m='1654070'>avoid
  the</span> <span m='1654200'>base</span> <span m='1654460'>case.</span> <span
  m='1655330'>2 to</span> <span m='1655540'>the</span> <span
  m='1655860'>h</span> <span m='1656235'>over</span> <span m='1656610'>2.</span>
  <span m='1657180'>Every</span> <span m='1657590'>two</span> <span
  m='1657850'>steps</span> <span m='1658240'>of</span> <span
  m='1658330'>h,</span> <span m='1659020'>I</span> <span m='1659140'>get</span>
  <span m='1659270'>another</span> <span m='1659530'>factor</span> <span
  m='1659900'>of</span> <span m='1659990'>2.</span> </p><p><span
  m='1661780'>So</span> <span m='1662000'>when</span> <span
  m='1662120'>you</span> <span m='1662330'>invert</span> <span m='1662760'>and
  do</span> <span m='1662960'>the</span> <span m='1663070'>log,</span> <span
  m='1663970'>this</span> <span m='1664180'>means</span> <span
  m='1664500'>that</span> <span m='1664670'>h</span> <span m='1665400'>is</span>
  <span m='1665730'>also</span> <span m='1666240'>less</span> <span
  m='1666550'>than</span> <span m='1667810'>log</span> <span
  m='1668080'>base</span> <span m='1668330'>2</span> <span m='1668470'>of
  n.</span> <span m='1670130'>Log</span> <span m='1670390'>base 2</span> <span
  m='1670650'>because</span> <span m='1670920'>of</span> <span
  m='1670990'>that.</span> <span m='1671690'>Factor</span> <span
  m='1672270'>2</span> <span m='1672780'>out</span> <span
  m='1672950'>here</span> <span m='1673210'>because</span> <span
  m='1673590'>of</span> <span m='1673680'>that</span> <span
  m='1674390'>factor</span> <span m='1674710'>2</span> <span
  m='1675060'>when</span> <span m='1675460'>you</span> <span
  m='1675860'>take</span> <span m='1676020'>the</span> <span
  m='1676100'>log.</span> </p><p><span m='1677000'>And</span> <span
  m='1677180'>so</span> <span m='1678090'>the</span> <span
  m='1678290'>real</span> <span m='1678570'>answer</span> <span
  m='1678850'>is</span> <span m='1678940'>1.44.</span> <span
  m='1679730'>This</span> <span m='1679910'>is</span> <span
  m='1680010'>the</span> <span m='1680130'>correct--</span> <span
  m='1681540'>this</span> <span m='1681720'>is</span> <span
  m='1681850'>the</span> <span m='1681970'>worst</span> <span
  m='1682250'>case.</span> <span m='1683190'>But</span> <span
  m='1683330'>it's</span> <span m='1683450'>really</span> <span
  m='1683700'>easy</span> <span m='1683940'>to</span> <span
  m='1684040'>prove</span> <span m='1684330'>that</span> <span
  m='1684390'>it's,</span> <span m='1684660'>at</span> <span
  m='1684780'>most,</span> <span m='1685020'>2</span> <span
  m='1685160'>log</span> <span m='1685580'>n.</span> <span m='1685780'>So</span>
  <span m='1685950'>keep</span> <span m='1686170'>this</span> <span
  m='1686350'>in</span> <span m='1686460'>mind</span> <span
  m='1686840'>in</span> <span m='1686960'>case</span> <span
  m='1687210'>we</span> <span m='1687340'>ask</span> <span
  m='1687540'>you</span> <span m='1687620'>to</span> <span
  m='1687690'>analyze</span> <span m='1688370'>variance</span> <span
  m='1689410'>of</span> <span m='1689490'>AVL</span> <span
  m='1689870'>trees,</span> <span m='1690840'>like</span> <span
  m='1691080'>in</span> <span m='1691250'>problem</span> <span
  m='1691490'>set</span> <span m='1691700'>three.</span> <span
  m='1692900'>This</span> <span m='1693220'>is</span> <span
  m='1693330'>the</span> <span m='1693510'>easy</span> <span
  m='1693760'>way</span> <span m='1693920'>to</span> <span m='1694030'>do</span>
  <span m='1694210'>it</span> <span m='1694490'>and</span> <span
  m='1694620'>just</span> <span m='1694780'>get</span> <span
  m='1694960'>some</span> <span m='1695270'>constant</span> <span
  m='1695760'>times</span> <span m='1695990'>log</span> <span
  m='1696090'>n.</span> <span m='1698070'>Clear?</span> </p><p><span
  m='1699600'>All</span> <span m='1699680'>right,</span> <span
  m='1699990'>so</span> <span m='1700360'>that's</span> <span
  m='1700640'>AVL</span> <span m='1701000'>trees,</span> <span
  m='1702260'>why</span> <span m='1702480'>they're</span> <span
  m='1702620'>balanced.</span> <span m='1703590'>And</span> <span
  m='1703780'>so</span> <span m='1704270'>if</span> <span m='1704450'>we</span>
  <span m='1704560'>can</span> <span m='1704690'>achieve</span> <span
  m='1705260'>this</span> <span m='1705480'>property,</span> <span
  m='1707070'>that</span> <span m='1707450'>the</span> <span
  m='1707660'>left</span> <span m='1707910'>and</span> <span
  m='1707980'>right</span> <span m='1708210'>subtrees</span> <span
  m='1708630'>have</span> <span m='1708800'>about</span> <span
  m='1709070'>the</span> <span m='1709150'>same</span> <span
  m='1709370'>height,</span> <span m='1710090'>we'll</span> <span
  m='1710240'>be</span> <span m='1710350'>done.</span> <span
  m='1711890'>So</span> <span m='1713280'>how</span> <span
  m='1713760'>the</span> <span m='1713860'>heck</span> <span
  m='1714190'>do</span> <span m='1714300'>we</span> <span
  m='1714400'>maintain</span> <span m='1714750'>that</span> <span
  m='1714920'>property?</span> <span m='1722090'>Let's</span> <span
  m='1722820'>go</span> <span m='1723320'>over</span> <span
  m='1723450'>here.</span> </p><p></p><p><span m='1738980'>Mobius</span> <span
  m='1739390'>trees</span> <span m='1739610'>are</span> <span
  m='1739700'>supposed</span> <span m='1740140'>to</span> <span
  m='1740210'>support</span> <span m='1740580'>a</span> <span
  m='1740620'>whole</span> <span m='1740850'>bunch</span> <span
  m='1741110'>of</span> <span m='1741210'>operations,</span> <span
  m='1741920'>but</span> <span m='1742070'>in</span> <span
  m='1742160'>particular,</span> <span m='1742870'>insert</span> <span
  m='1743270'>and</span> <span m='1743410'>delete.</span> <span
  m='1745130'>I'm</span> <span m='1745260'>just</span> <span
  m='1745440'>going</span> <span m='1745550'>to</span> <span
  m='1745620'>worry</span> <span m='1745800'>about</span> <span
  m='1746060'>insert</span> <span m='1746550'>today.</span> <span
  m='1749060'>Delete</span> <span m='1749340'>is</span> <span
  m='1749580'>almost</span> <span m='1750070'>identical.</span> <span
  m='1751410'>And</span> <span m='1751600'>it's</span> <span
  m='1751740'>in</span> <span m='1751950'>the</span> <span
  m='1752080'>code</span> <span m='1752800'>that</span> <span
  m='1753080'>corresponds</span> <span m='1753600'>to</span> <span
  m='1753680'>this</span> <span m='1753860'>lecture,</span> <span
  m='1754340'>so</span> <span m='1754730'>you</span> <span
  m='1754890'>can</span> <span m='1755010'>take</span> <span
  m='1755190'>a</span> <span m='1755240'>look</span> <span m='1755420'>at</span>
  <span m='1755550'>it.</span> <span m='1756420'>Very,</span> <span
  m='1756850'>very</span> <span m='1756890'>similar.</span> </p><p><span
  m='1764950'>Let's</span> <span m='1765140'>start</span> <span
  m='1765340'>with</span> <span m='1765470'>insert.</span> <span
  m='1769790'>Well,</span> <span m='1771300'>it's</span> <span
  m='1771470'>pretty</span> <span m='1771630'>straightforward.</span> <span
  m='1773190'>Our</span> <span m='1773400'>algorithm</span> <span
  m='1773770'>is</span> <span m='1774010'>as</span> <span
  m='1774160'>follows.</span> <span m='1775390'>We</span> <span
  m='1775420'>do</span> <span m='1775710'>the</span> <span
  m='1775850'>simple</span> <span m='1777000'>BST</span> <span
  m='1777440'>insertion,</span> <span m='1777940'>which</span> <span
  m='1778100'>we</span> <span m='1778260'>already</span> <span
  m='1778540'>saw,</span> <span m='1783090'>which</span> <span
  m='1783300'>is</span> <span m='1783430'>you</span> <span
  m='1783540'>walk</span> <span m='1783780'>down</span> <span
  m='1783960'>the</span> <span m='1784040'>tree</span> <span
  m='1784250'>to</span> <span m='1784330'>find</span> <span
  m='1784590'>where</span> <span m='1784680'>that</span> <span
  m='1784870'>key</span> <span m='1785050'>fits.</span> <span
  m='1785280'>You</span> <span m='1785380'>search</span> <span
  m='1785700'>for</span> <span m='1785790'>that</span> <span
  m='1786020'>key.</span> <span m='1786950'>And</span> <span
  m='1787110'>wherever</span> <span m='1787580'>it</span> <span
  m='1787670'>isn't,</span> <span m='1788560'>you</span> <span
  m='1788720'>insert</span> <span m='1789150'>a</span> <span
  m='1789210'>node</span> <span m='1789480'>there,</span> <span
  m='1789830'>insert</span> <span m='1790170'>a</span> <span
  m='1790240'>new</span> <span m='1790390'>leaf,</span> <span
  m='1791410'>and</span> <span m='1791560'>add</span> <span
  m='1791700'>it</span> <span m='1791780'>in.</span> </p><p><span
  m='1792010'>Now,</span> <span m='1792490'>this</span> <span
  m='1792650'>will</span> <span m='1792760'>not</span> <span
  m='1793000'>preserve</span> <span m='1793310'>the</span> <span
  m='1793420'>AVL</span> <span m='1793770'>property.</span> <span
  m='1794690'>So</span> <span m='1794870'>the</span> <span
  m='1794930'>second</span> <span m='1795250'>step</span> <span
  m='1795590'>is</span> <span m='1795980'>fix</span> <span m='1796280'>the
  AVL</span> <span m='1796620'>property.</span> <span m='1803460'>And</span>
  <span m='1803560'>there's</span> <span m='1803780'>a</span> <span
  m='1803840'>nice</span> <span m='1804100'>concise</span> <span
  m='1805060'>description</span> <span m='1805610'>of</span> <span
  m='1805730'>AVL</span> <span m='1806070'>insertion.</span> <span
  m='1806520'>Of</span> <span m='1806630'>course,</span> <span
  m='1807220'>how</span> <span m='1807440'>do</span> <span
  m='1807510'>you</span> <span m='1807620'>do</span> <span
  m='1807760'>step</span> <span m='1808030'>two</span> <span
  m='1808320'>is</span> <span m='1808470'>the</span> <span
  m='1808570'>interesting</span> <span m='1808990'>part.</span> <span
  m='1810700'>All</span> <span m='1810780'>right,</span> <span
  m='1812320'>maybe</span> <span m='1812580'>let's</span> <span
  m='1812780'>start</span> <span m='1812960'>with</span> <span
  m='1813080'>an</span> <span m='1813160'>example.</span> <span
  m='1814440'>That</span> <span m='1814590'>could</span> <span
  m='1814770'>be</span> <span m='1814900'>fun.</span> </p><p><span
  m='1822296'>Hey,</span> <span m='1822790'>look,</span> <span
  m='1822950'>here's</span> <span m='1823140'>an</span> <span
  m='1823210'>example.</span> <span m='1824830'>And</span> <span
  m='1825090'>to</span> <span m='1825210'>match</span> <span
  m='1825520'>the</span> <span m='1825620'>notes,</span> <span
  m='1825890'>I'm</span> <span m='1825970'>going</span> <span
  m='1826070'>to</span> <span m='1826150'>do</span> <span
  m='1826990'>insert</span> <span m='1829160'>23</span> <span
  m='1830654'>as</span> <span m='1831046'>a</span> <span
  m='1831440'>first</span> <span m='1832370'>example.</span> <span
  m='1833230'>OK,</span> <span m='1833890'>I'm</span> <span
  m='1834070'>also</span> <span m='1834390'>going</span> <span
  m='1834510'>to</span> <span m='1834590'>annotate</span> <span
  m='1835090'>this</span> <span m='1835240'>tree</span> <span
  m='1835450'>a</span> <span m='1835510'>little</span> <span
  m='1835790'>bit.</span> <span m='1836720'>So</span> <span m='1836940'>I</span>
  <span m='1837030'>said</span> <span m='1837250'>we</span> <span
  m='1837350'>store</span> <span m='1837590'>the</span> <span
  m='1837700'>heights,</span> <span m='1838780'>but</span> <span
  m='1839010'>what</span> <span m='1839160'>I</span> <span
  m='1839710'>care</span> <span m='1839990'>about</span> <span
  m='1840360'>is</span> <span m='1841510'>which</span> <span
  m='1841750'>height</span> <span m='1841950'>is</span> <span
  m='1842060'>larger,</span> <span m='1842700'>the</span> <span
  m='1842790'>left</span> <span m='1843120'>or</span> <span
  m='1843190'>the</span> <span m='1843280'>right.</span> <span
  m='1844370'>In</span> <span m='1844590'>fact,</span> <span
  m='1844800'>you</span> <span m='1844890'>could</span> <span
  m='1845030'>just</span> <span m='1845200'>store</span> <span
  m='1845480'>that,</span> <span m='1846090'>just</span> <span
  m='1846240'>store</span> <span m='1846670'>whether</span> <span
  m='1846810'>it's</span> <span m='1846940'>plus</span> <span
  m='1847200'>1,</span> <span m='1847410'>minus</span> <span
  m='1847680'>1,</span> <span m='1847830'>or</span> <span m='1847920'>0,</span>
  <span m='1848270'>the</span> <span m='1848370'>difference</span> <span
  m='1848710'>between</span> <span m='1848900'>left</span> <span
  m='1849130'>and</span> <span m='1849210'>right</span> <span
  m='1849420'>sides.</span> </p><p><span m='1850270'>So</span> <span
  m='1850370'>I'm</span> <span m='1850460'>going</span> <span
  m='1850540'>to</span> <span m='1850620'>draw</span> <span
  m='1850790'>that</span> <span m='1850960'>with</span> <span
  m='1851120'>a</span> <span m='1851190'>little</span> <span
  m='1851510'>icon,</span> <span m='1852550'>which</span> <span
  m='1852840'>is</span> <span m='1853735'>a</span> <span m='1854030'>left</span>
  <span m='1854430'>arrow,</span> <span m='1855360'>a</span> <span
  m='1855430'>descending</span> <span m='1855840'>left</span> <span
  m='1856060'>arrow</span> <span m='1856360'>if</span> <span
  m='1856510'>this</span> <span m='1856740'>is</span> <span
  m='1857100'>the</span> <span m='1857370'>bigger</span> <span
  m='1857710'>side.</span> <span m='1859748'>And</span> <span
  m='1860150'>this</span> <span m='1860485'>is a</span> <span
  m='1860820'>right</span> <span m='1861060'>arrow.</span> <span
  m='1861910'>This</span> <span m='1862110'>is</span> <span
  m='1862370'>even.</span> <span m='1862730'>Left</span> <span
  m='1863060'>and</span> <span m='1863140'>right</span> <span
  m='1863330'>are</span> <span m='1863410'>the</span> <span
  m='1863500'>same.</span> <span m='1864330'>Here,</span> <span
  m='1864550'>the</span> <span m='1864670'>left</span> <span
  m='1864990'>is</span> <span m='1865280'>heavier,</span> <span
  m='1866050'>or</span> <span m='1866190'>higher,</span> <span
  m='1866690'>I</span> <span m='1866750'>guess.</span> <span
  m='1867420'>Here</span> <span m='1867680'>it's</span> <span
  m='1867850'>even.</span> <span m='1868240'>Here</span> <span
  m='1868630'>it's</span> <span m='1868870'>left.</span> <span
  m='1871720'>This</span> <span m='1871960'>is</span> <span
  m='1872080'>AVL,</span> <span m='1872560'>because</span> <span
  m='1873980'>it's</span> <span m='1874080'>only</span> <span
  m='1874310'>one</span> <span m='1874580'>heavier</span> <span
  m='1875030'>wherever</span> <span m='1875380'>I</span> <span
  m='1875430'>have</span> <span m='1875620'>an</span> <span
  m='1875710'>arrow.</span> <span m='1877010'>OK,</span> <span
  m='1877740'>now</span> <span m='1877900'>I</span> <span
  m='1877980'>insert</span> <span m='1878330'>23.</span> <span
  m='1879220'>23</span> <span m='1880310'>belongs--</span> <span
  m='1881850'>it's</span> <span m='1882210'>less than</span> <span
  m='1882530'>41,</span> <span m='1882880'>greater than</span> <span
  m='1883230'>20,</span> <span m='1883480'>less than</span> <span
  m='1883690'>29,</span> <span m='1884030'>less than</span> <span
  m='1884290'>26.</span> <span m='1885140'>So</span> <span m='1885290'>it</span>
  <span m='1885390'>belongs</span> <span m='1885770'>here.</span> <span
  m='1887800'>Here's</span> <span m='1888020'>23,</span> <span
  m='1888660'>a</span> <span m='1889130'>brand-new</span> <span
  m='1889750'>node.</span> </p><p><span m='1891330'>OK,</span> <span
  m='1891480'>now</span> <span m='1891660'>all</span> <span
  m='1891850'>the</span> <span m='1891930'>heights</span> <span
  m='1892180'>change.</span> <span m='1892610'>And</span> <span
  m='1892780'>it's</span> <span m='1893050'>annoying</span> <span
  m='1893480'>to</span> <span m='1893580'>draw</span> <span
  m='1894530'>what</span> <span m='1894650'>the</span> <span
  m='1894720'>heights</span> <span m='1895020'>are,</span> <span
  m='1896680'>but</span> <span m='1896890'>I'll</span> <span
  m='1897020'>do</span> <span m='1897150'>it.</span> <span
  m='1899150'>This</span> <span m='1899440'>one</span> <span
  m='1899810'>changes</span> <span m='1900250'>to</span> <span
  m='1900370'>1.</span> <span m='1901320'>This</span> <span
  m='1901520'>is</span> <span m='1901870'>0.</span> <span
  m='1903370'>This</span> <span m='1903570'>changes</span> <span
  m='1903880'>to</span> <span m='1904150'>2.</span> <span
  m='1904850'>This</span> <span m='1905200'>changes</span> <span
  m='1905430'>to</span> <span m='1905720'>3.</span> <span
  m='1906450'>This</span> <span m='1906870'>changes</span> <span
  m='1907360'>to</span> <span m='1908170'>4.</span> </p><p><span
  m='1909160'>Anyway,</span> <span m='1910530'>never</span> <span
  m='1910830'>mind</span> <span m='1911020'>what</span> <span
  m='1911130'>the</span> <span m='1911200'>heights</span> <span
  m='1911490'>are.</span> <span m='1911890'>What's</span> <span
  m='1912100'>bad</span> <span m='1912410'>is,</span> <span
  m='1912520'>well,</span> <span m='1912710'>this</span> <span
  m='1912890'>guy's</span> <span m='1913140'>even.</span> <span
  m='1913960'>This</span> <span m='1914150'>guy's</span> <span
  m='1914350'>left</span> <span m='1914640'>heavy.</span> <span
  m='1915590'>This</span> <span m='1915770'>guy's</span> <span
  m='1916060'>now</span> <span m='1916580'>doubly</span> <span
  m='1916980'>left</span> <span m='1917260'>heavy.</span> <span
  m='1918090'>Bad</span> <span m='1918530'>news.</span> <span
  m='1920650'>OK,</span> <span m='1920770'>let's</span> <span
  m='1921250'>not</span> <span m='1921390'>worry</span> <span
  m='1921570'>about</span> <span m='1921860'>above</span> <span
  m='1922160'>that.</span> <span m='1922410'>Let's</span> <span
  m='1922580'>just</span> <span m='1922660'>start.</span> <span
  m='1923510'>The</span> <span m='1923630'>algorithm</span> <span
  m='1924020'>is</span> <span m='1924130'>going</span> <span
  m='1924260'>to</span> <span m='1924360'>walk</span> <span
  m='1924730'>up</span> <span m='1924890'>the</span> <span
  m='1924990'>tree</span> <span m='1925270'>and</span> <span
  m='1925380'>say,</span> <span m='1925620'>oh,</span> <span
  m='1925880'>when</span> <span m='1926060'>do</span> <span m='1926190'>I</span>
  <span m='1926300'>get</span> <span m='1926590'>something</span> <span
  m='1926950'>bad?</span> </p><p><span m='1928220'>So</span> <span
  m='1928340'>now</span> <span m='1928460'>I</span> <span
  m='1928550'>have</span> <span m='1928720'>23,</span> <span
  m='1929200'>26,</span> <span m='1929670'>29</span> <span m='1929965'>in</span>
  <span m='1930260'>a path.</span> <span m='1931650'>I'd</span> <span
  m='1931740'>like</span> <span m='1931890'>to</span> <span
  m='1931990'>fix</span> <span m='1932300'>it.</span> <span
  m='1934840'>Hmm,</span> <span m='1936760'>how</span> <span
  m='1936960'>to</span> <span m='1937140'>fix</span> <span
  m='1937450'>it?</span> <span m='1938023'>I</span> <span
  m='1938396'>don't</span> <span m='1938770'>think</span> <span
  m='1938950'>we</span> <span m='1939320'>know</span> <span
  m='1939460'>how</span> <span m='1939560'>to</span> <span
  m='1939640'>fix</span> <span m='1939920'>it,</span> <span
  m='1940240'>so</span> <span m='1940720'>I</span> <span m='1940840'>will</span>
  <span m='1940980'>tell</span> <span m='1941190'>you</span> <span
  m='1941280'>how.</span> </p><p><span m='1946860'>Actually,</span> <span
  m='1947260'>I</span> <span m='1947410'>wasn't</span> <span
  m='1947690'>here</span> <span m='1947840'>last</span> <span
  m='1948090'>week.</span> <span m='1948240'>So</span> <span
  m='1948320'>did</span> <span m='1948470'>we</span> <span
  m='1948590'>cover</span> <span m='1948910'>rotations?</span> </p><p><span
  m='1949480'>AUDIENCE: No.</span> </p><p><span m='1950360'>PROFESSOR:
  OK,</span> <span m='1951130'>good.</span> <span m='1951480'>Then</span> <span
  m='1951620'>you don't</span> <span m='1951830'>know.</span> <span
  m='1952820'>Let</span> <span m='1952930'>me</span> <span
  m='1953030'>tell</span> <span m='1953200'>you</span> <span
  m='1953310'>about</span> <span m='1954070'>rotations.</span> <span
  m='1955540'>Super</span> <span m='1955900'>cool.</span> </p><p></p><p><span
  m='1967280'>It's</span> <span m='1967510'>just</span> <span
  m='1967750'>a</span> <span m='1967870'>tool.</span> </p><p></p><p><span
  m='1992598'>That's</span> <span m='1993120'>x</span> <span
  m='1993410'>and</span> <span m='1993904'>y.</span> <span m='2001320'>I</span>
  <span m='2001430'>always</span> <span m='2001630'>get</span> <span
  m='2001770'>these</span> <span m='2001920'>mixed</span> <span
  m='2002220'>up.</span> <span m='2002420'>So</span> <span
  m='2004510'>this</span> <span m='2004780'>is</span> <span
  m='2004970'>called</span> <span m='2006310'>left</span> <span
  m='2008180'>rotate</span> <span m='2012488'>of</span> <span
  m='2012960'>x.</span> <span m='2017370'>OK,</span> <span m='2017710'>so</span>
  <span m='2017980'>here's</span> <span m='2018260'>the</span> <span
  m='2018480'>thing</span> <span m='2018700'>we</span> <span
  m='2018820'>can</span> <span m='2018940'>do</span> <span
  m='2019050'>with</span> <span m='2019110'>binary</span> <span
  m='2019420'>search</span> <span m='2019670'>trees.</span> <span
  m='2019800'>It's</span> <span m='2020060'>like</span> <span
  m='2020230'>the</span> <span m='2020360'>only</span> <span
  m='2020640'>thing</span> <span m='2020780'>you</span> <span
  m='2020870'>need</span> <span m='2021050'>to</span> <span
  m='2021160'>know.</span> <span m='2021636'>Because</span> <span
  m='2022112'>you've got</span> <span m='2022590'>search</span> <span
  m='2022970'>in</span> <span m='2023130'>binary</span> <span
  m='2023250'>search</span> <span m='2023340'>trees</span> <span
  m='2023680'>and</span> <span m='2023920'>you've</span> <span
  m='2024040'>got</span> <span m='2024280'>rotations.</span> </p><p><span
  m='2026210'>So</span> <span m='2026370'>when</span> <span m='2026510'>I</span>
  <span m='2026570'>have</span> <span m='2026750'>a</span> <span
  m='2026810'>tree</span> <span m='2027060'>like</span> <span
  m='2027250'>this,</span> <span m='2028100'>I've</span> <span
  m='2028260'>highlighted</span> <span m='2028780'>two</span> <span
  m='2028950'>nodes,</span> <span m='2029350'>and</span> <span
  m='2029450'>then</span> <span m='2029570'>there's</span> <span
  m='2029760'>the</span> <span m='2029860'>children</span> <span
  m='2030270'>hanging</span> <span m='2030580'>off</span> <span m='2030760'>of
  them.</span> <span m='2030960'>Some</span> <span m='2031160'>of</span> <span
  m='2031200'>these</span> <span m='2031360'>might</span> <span
  m='2031550'>be</span> <span m='2031660'>empty,</span> <span
  m='2032160'>but</span> <span m='2032310'>they're</span> <span
  m='2032510'>trees,</span> <span m='2033390'>so</span> <span
  m='2033540'>we</span> <span m='2033620'>draw</span> <span m='2033780'>them
  as</span> <span m='2033990'>triangles.</span> </p><p><span
  m='2036510'>If</span> <span m='2036740'>I</span> <span m='2036890'>just</span>
  <span m='2037490'>do</span> <span m='2037760'>this,</span> <span
  m='2038250'>which</span> <span m='2038480'>is</span> <span
  m='2038610'>like</span> <span m='2039140'>changing</span> <span
  m='2039810'>which</span> <span m='2039990'>is</span> <span
  m='2040080'>higher,</span> <span m='2040400'>x</span> <span
  m='2040720'>or</span> <span m='2040790'>y,</span> <span m='2041460'>and</span>
  <span m='2041640'>whatever</span> <span m='2041900'>the</span> <span
  m='2041990'>parent of</span> <span m='2042410'>x</span> <span
  m='2042690'>was</span> <span m='2042980'>becomes</span> <span
  m='2043360'>the</span> <span m='2043440'>parent</span> <span
  m='2043710'>of</span> <span m='2043790'>y.</span> <span m='2045160'>And</span>
  <span m='2045340'>vice</span> <span m='2045600'>versa,</span> <span
  m='2046280'>in</span> <span m='2046370'>fact.</span> <span
  m='2046650'>The</span> <span m='2046750'>parent</span> <span
  m='2047080'>of</span> <span m='2047180'>y</span> <span m='2047490'>was</span>
  <span m='2047650'>x,</span> <span m='2048040'>and</span> <span
  m='2048150'>now</span> <span m='2048320'>the</span> <span
  m='2048389'>parent</span> <span m='2048580'>of</span> <span
  m='2048650'>x</span> <span m='2048880'>is</span> <span m='2048980'>y.</span>
  </p><p><span m='2050340'>OK,</span> <span m='2051290'>the</span> <span
  m='2051449'>parent</span> <span m='2051840'>of</span> <span
  m='2051989'>a</span> <span m='2053219'>is</span> <span
  m='2053400'>still</span> <span m='2053650'>x.</span> <span
  m='2054030'>The</span> <span m='2054110'>parent</span> <span
  m='2054360'>of</span> <span m='2054400'>b</span> <span
  m='2054679'>changes.</span> <span m='2055270'>It</span> <span
  m='2055400'>used</span> <span m='2055630'>to</span> <span
  m='2055699'>be</span> <span m='2055830'>y.</span> <span m='2056120'>Now
  it's</span> <span m='2056440'>x.</span> <span m='2057510'>The</span> <span
  m='2057690'>parent</span> <span m='2057929'>of</span> <span
  m='2058000'>c</span> <span m='2058679'>was</span> <span m='2058940'>y.</span>
  <span m='2059230'>It's</span> <span m='2059380'>still</span> <span
  m='2059500'>y.</span> <span m='2060370'>So</span> <span m='2060620'>in</span>
  <span m='2060760'>a</span> <span m='2060800'>constant</span> <span
  m='2061239'>number of</span> <span m='2061540'>pointer</span> <span
  m='2061880'>changes,</span> <span m='2063000'>I</span> <span
  m='2063130'>can</span> <span m='2063300'>go</span> <span
  m='2063449'>from</span> <span m='2063630'>this</span> <span
  m='2063850'>to</span> <span m='2063929'>this.</span> <span
  m='2064663'>This</span> <span m='2065030'>is</span> <span
  m='2065139'>constant</span> <span m='2065550'>time.</span> </p><p><span
  m='2069600'>And</span> <span m='2070080'>more</span> <span
  m='2070260'>importantly,</span> <span m='2070840'>it</span> <span
  m='2070989'>satisfies</span> <span m='2071540'>the</span> <span
  m='2071630'>BST</span> <span m='2072100'>order</span> <span
  m='2072380'>property.</span> <span m='2073070'>If</span> <span
  m='2073179'>you</span> <span m='2073260'>do</span> <span m='2073409'>an</span>
  <span m='2073500'>in-order</span> <span m='2073850'>traversal</span> <span
  m='2074360'>of</span> <span m='2074469'>this,</span> <span
  m='2075469'>you</span> <span m='2075620'>will</span> <span
  m='2075750'>get</span> <span m='2076219'>a,</span> <span m='2077050'>x,</span>
  <span m='2077876'>b,</span> <span m='2078290'>y,</span> <span
  m='2078840'>c.</span> <span m='2082437'>If</span> <span m='2082880'>I</span>
  <span m='2082960'>do</span> <span m='2083120'>an</span> <span
  m='2083210'>in-order</span> <span m='2083480'>traversal</span> <span
  m='2083840'>over</span> <span m='2084020'>here,</span> <span
  m='2084570'>I</span> <span m='2084670'>get</span> <span m='2085030'>a,</span>
  <span m='2085295'>x,</span> <span m='2085560'>b,</span> <span
  m='2085966'>y,</span> <span m='2086372'>c.</span> <span m='2090600'>So</span>
  <span m='2090760'>they're</span> <span m='2090929'>the</span> <span
  m='2091040'>same.</span> <span m='2092110'>So it</span> <span
  m='2092250'>still</span> <span m='2092520'>has</span> <span
  m='2092719'>BST</span> <span m='2093139'>ordering.</span> </p><p><span
  m='2094139'>You</span> <span m='2094270'>can</span> <span
  m='2094480'>check</span> <span m='2094730'>more</span> <span
  m='2094870'>formally.</span> <span m='2095330'>b</span> <span
  m='2095500'>has</span> <span m='2095630'>all</span> <span
  m='2095810'>the</span> <span m='2095870'>nodes</span> <span
  m='2096090'>between</span> <span m='2096420'>x</span> <span
  m='2096610'>and</span> <span m='2096719'>y.</span> <span
  m='2097570'>Still</span> <span m='2097880'>all</span> <span m='2098110'>the
  nodes</span> <span m='2098390'>between</span> <span m='2098680'>x</span> <span
  m='2098880'>and</span> <span m='2098960'>y,</span> <span
  m='2099545'>and</span> <span m='2099870'>so on.</span> <span
  m='2101400'>You</span> <span m='2101520'>can</span> <span
  m='2101630'>check</span> <span m='2101880'>it</span> <span
  m='2102220'>at</span> <span m='2102340'>home,</span> <span
  m='2102700'>but</span> <span m='2103050'>this</span> <span
  m='2103210'>works.</span> <span m='2103840'>We</span> <span
  m='2103980'>call</span> <span m='2104220'>it a</span> <span
  m='2104260'>left</span> <span m='2104570'>rotate</span> <span
  m='2104950'>because</span> <span m='2105250'>the</span> <span
  m='2105410'>root</span> <span m='2106010'>moves</span> <span
  m='2106260'>to</span> <span m='2106350'>the</span> <span
  m='2106430'>left.</span> <span m='2108290'>You</span> <span
  m='2108460'>can</span> <span m='2108620'>go</span> <span
  m='2108850'>straight</span> <span m='2109240'>back</span> <span
  m='2109480'>where</span> <span m='2109590'>you</span> <span
  m='2109690'>came</span> <span m='2109920'>from.</span> <span
  m='2110130'>This</span> <span m='2110300'>would</span> <span
  m='2110400'>be</span> <span m='2110550'>a</span> <span
  m='2110660'>right</span> <span m='2110960'>rotate</span> <span
  m='2111390'>of</span> <span m='2111890'>y.</span> </p><p><span
  m='2117440'>OK,</span> <span m='2117640'>it's</span> <span
  m='2117740'>a</span> <span m='2117830'>reversible</span> <span
  m='2118370'>operation.</span> <span m='2119580'>It</span> <span
  m='2119700'>lets</span> <span m='2119880'>you</span> <span
  m='2119980'>manipulate</span> <span m='2120470'>the</span> <span
  m='2120560'>tree.</span> <span m='2121190'>So</span> <span
  m='2121700'>when</span> <span m='2121880'>we</span> <span
  m='2121980'>have</span> <span m='2122170'>this</span> <span
  m='2122350'>picture and</span> <span m='2122720'>we're</span> <span
  m='2122970'>really</span> <span m='2123330'>sad</span> <span
  m='2124270'>because</span> <span m='2124510'>this</span> <span
  m='2124680'>looks</span> <span m='2124850'>like</span> <span
  m='2125020'>a</span> <span m='2125070'>mess,</span> <span
  m='2126330'>what</span> <span m='2126450'>we'd</span> <span
  m='2126620'>like</span> <span m='2126820'>to</span> <span
  m='2126930'>do</span> <span m='2127130'>is</span> <span m='2127280'>fix</span>
  <span m='2127620'>it.</span> </p><p><span m='2127810'>This</span> <span
  m='2128000'>is</span> <span m='2128710'>a</span> <span m='2128810'>path</span>
  <span m='2129330'>of</span> <span m='2129450'>three</span> <span
  m='2129700'>nodes.</span> <span m='2131050'>We'd</span> <span
  m='2131190'>really</span> <span m='2131440'>prefer</span> <span
  m='2131900'>it</span> <span m='2132040'>to</span> <span
  m='2132160'>look</span> <span m='2132360'>like</span> <span
  m='2132540'>this.</span> <span m='2134445'>If</span> <span
  m='2134900'>we</span> <span m='2135010'>could</span> <span
  m='2135130'>make</span> <span m='2135300'>that</span> <span
  m='2135440'>transformation,</span> <span m='2136030'>we'd</span> <span
  m='2136150'>be</span> <span m='2136260'>happy.</span> <span
  m='2137660'>And</span> <span m='2137800'>we</span> <span
  m='2137880'>can.</span> <span m='2138740'>It</span> <span
  m='2139100'>is</span> <span m='2139520'>a</span> <span
  m='2139640'>right</span> <span m='2140110'>rotate</span> <span
  m='2141600'>of</span> <span m='2142390'>29.</span> <span m='2144630'>So</span>
  <span m='2144830'>that's what</span> <span m='2144980'>we're</span> <span
  m='2145090'>going</span> <span m='2145190'>to</span> <span
  m='2145270'>do.</span> </p><p></p><p><span m='2161810'>So</span> <span
  m='2162360'>let</span> <span m='2162450'>me</span> <span
  m='2162610'>quickly</span> <span m='2163330'>copy.</span> <span
  m='2174690'>I</span> <span m='2174840'>want</span> <span m='2175020'>to</span>
  <span m='2175120'>rotate</span> <span m='2175770'>29</span> <span
  m='2176200'>to</span> <span m='2176290'>the</span> <span
  m='2176420'>right,</span> <span m='2176630'>which</span> <span
  m='2176810'>means</span> <span m='2176920'>29</span> <span
  m='2177390'>and</span> <span m='2177500'>26--</span> <span
  m='2178360'>this</span> <span m='2178520'>is</span> <span
  m='2178650'>x.</span> <span m='2178930'>This</span> <span
  m='2179090'>is</span> <span m='2179190'>y.</span> <span m='2180030'>I</span>
  <span m='2180150'>turn</span> <span m='2180520'>them,</span> <span
  m='2181180'>and</span> <span m='2181350'>so</span> <span m='2181440'>I</span>
  <span m='2181560'>get</span> <span m='2182000'>26</span> <span
  m='2183030'>here</span> <span m='2183250'>now,</span> <span
  m='2184250'>and</span> <span m='2184450'>29</span> <span m='2185010'>is</span>
  <span m='2185130'>the</span> <span m='2185475'>new</span> <span
  m='2185820'>right</span> <span m='2186060'>child.</span> <span
  m='2187110'>And</span> <span m='2187240'>then</span> <span
  m='2187380'>whatever</span> <span m='2187730'>was</span> <span
  m='2187890'>the</span> <span m='2187980'>left</span> <span
  m='2188210'>child</span> <span m='2188600'>of</span> <span
  m='2188720'>x</span> <span m='2189230'>becomes</span> <span
  m='2189720'>the</span> <span m='2189800'>left</span> <span
  m='2189980'>child</span> <span m='2190460'>of</span> <span
  m='2190715'>x</span> <span m='2190970'>in</span> <span m='2191100'>the</span>
  <span m='2191200'>picture.</span> <span m='2191570'>You</span> <span
  m='2191690'>can</span> <span m='2191840'>check</span> <span
  m='2192090'>it.</span> </p><p><span m='2192640'>So</span> <span
  m='2192770'>this</span> <span m='2193230'>used</span> <span
  m='2193400'>to</span> <span m='2193470'>be</span> <span m='2193570'>the</span>
  <span m='2193860'>triangle</span> <span m='2194290'>a.</span> <span
  m='2194790'>And in this</span> <span m='2195290'>case,</span> <span
  m='2195500'>it's</span> <span m='2195630'>just</span> <span
  m='2195920'>the</span> <span m='2196040'>node</span> <span
  m='2196310'>23.</span> <span m='2198830'>And</span> <span
  m='2199020'>we</span> <span m='2199170'>are</span> <span
  m='2199260'>happy.</span> <span m='2200385'>Except</span> <span
  m='2200750'>I</span> <span m='2200840'>didn't draw</span> <span
  m='2201190'>the whole</span> <span m='2201680'>tree.</span> <span
  m='2202470'>Now</span> <span m='2202650'>we're</span> <span
  m='2202770'>happy</span> <span m='2203290'>because</span> <span
  m='2203630'>we</span> <span m='2203740'>have</span> <span
  m='2203990'>an</span> <span m='2204160'>AVL</span> <span
  m='2204450'>tree</span> <span m='2204740'>again.</span> <span
  m='2206250'>Good</span> <span m='2206603'>news.</span> </p><p><span
  m='2208250'>So</span> <span m='2208530'>just</span> <span
  m='2208840'>check.</span> <span m='2210310'>This</span> <span
  m='2210450'>is</span> <span m='2210570'>even.</span> <span
  m='2210970'>This</span> <span m='2211130'>is</span> <span
  m='2211270'>right</span> <span m='2211580'>heavy.</span> <span
  m='2212000'>This</span> <span m='2212220'>is</span> <span
  m='2212370'>even.</span> <span m='2212970'>This</span> <span
  m='2213210'>is</span> <span m='2214390'>left</span> <span
  m='2214700'>heavy</span> <span m='2214970'>still.</span> <span
  m='2216360'>This</span> <span m='2216600'>is</span> <span
  m='2217330'>left</span> <span m='2217560'>heavy,</span> <span
  m='2218555'>even,</span> <span m='2219050'>even,</span> <span
  m='2219545'>even.</span> <span m='2221530'>OK,</span> <span
  m='2221700'>so</span> <span m='2221840'>now</span> <span m='2222010'>we</span>
  <span m='2222090'>have</span> <span m='2222200'>an</span> <span
  m='2222230'>AVL</span> <span m='2222590'>tree</span> <span
  m='2223610'>and</span> <span m='2224930'>our</span> <span
  m='2225050'>beauty</span> <span m='2225410'>is</span> <span
  m='2225530'>restored.</span> <span m='2227325'>I'll</span> <span
  m='2227730'>do</span> <span m='2227880'>one</span> <span
  m='2228080'>more</span> <span m='2228300'>example.</span> </p><p><span
  m='2235830'>Insert</span> <span m='2236390'>55.</span> <span
  m='2243090'>We</span> <span m='2243180'>want</span> <span
  m='2243330'>to</span> <span m='2243370'>insert</span> <span
  m='2243760'>55</span> <span m='2244410'>here.</span> <span
  m='2247260'>And</span> <span m='2247470'>what</span> <span
  m='2247630'>changes</span> <span m='2248170'>is</span> <span
  m='2248280'>now</span> <span m='2248600'>this</span> <span
  m='2248870'>is</span> <span m='2249240'>even.</span> <span
  m='2249850'>This</span> <span m='2250080'>is</span> <span
  m='2250890'>right</span> <span m='2251180'>heavy.</span> <span
  m='2252990'>This</span> <span m='2253260'>is</span> <span
  m='2254250'>doubly</span> <span m='2254620'>left</span> <span
  m='2254880'>heavy.</span> <span m='2255180'>We're</span> <span
  m='2255330'>super</span> <span m='2255690'>sad.</span> <span
  m='2256500'>And</span> <span m='2256710'>then</span> <span
  m='2257410'>we</span> <span m='2257680'>don't</span> <span
  m='2257980'>look</span> <span m='2258120'>above</span> <span
  m='2258410'>that</span> <span m='2258630'>until</span> <span
  m='2258960'>later.</span> </p><p><span m='2263890'>This</span> <span
  m='2264110'>is</span> <span m='2264220'>more</span> <span
  m='2264440'>annoying,</span> <span m='2267770'>because</span> <span
  m='2268100'>you</span> <span m='2268240'>look</span> <span
  m='2268440'>at</span> <span m='2268540'>this</span> <span
  m='2268790'>thing,</span> <span m='2269500'>this</span> <span
  m='2269850'>little</span> <span m='2271430'>path.</span> <span
  m='2272570'>It's</span> <span m='2272740'>a</span> <span
  m='2273060'>zigzag</span> <span m='2273550'>path,</span> <span
  m='2273880'>if</span> <span m='2274373'>you</span> <span
  m='2274866'>will.</span> <span m='2275360'>If I</span> <span
  m='2275430'>do</span> <span m='2275670'>a</span> <span
  m='2275760'>right</span> <span m='2275970'>rotation</span> <span
  m='2276790'>where</span> <span m='2276900'>this</span> <span
  m='2277120'>is</span> <span m='2277290'>x</span> <span m='2277550'>and</span>
  <span m='2278160'>this</span> <span m='2278370'>is</span> <span
  m='2278460'>y,</span> <span m='2279410'>what</span> <span
  m='2279570'>I'll</span> <span m='2279700'>get</span> <span
  m='2280020'>is</span> <span m='2280380'>x,</span> <span m='2280866'>y,</span>
  <span m='2282230'>and</span> <span m='2282380'>then</span> <span
  m='2282500'>this</span> <span m='2282720'>is</span> <span
  m='2282900'>b.</span> </p><p><span m='2283260'>This</span> <span
  m='2283480'>is</span> <span m='2283610'>what's</span> <span
  m='2283870'>in</span> <span m='2284000'>between</span> <span
  m='2285090'>x</span> <span m='2285330'>and</span> <span m='2285420'>y.</span>
  <span m='2286090'>And</span> <span m='2286270'>so</span> <span
  m='2286420'>it'll</span> <span m='2286620'>go</span> <span
  m='2286890'>here.</span> <span m='2288510'>And</span> <span
  m='2288680'>now</span> <span m='2288870'>it's</span> <span
  m='2289000'>a</span> <span m='2289040'>zag</span> <span m='2289380'>zig</span>
  <span m='2289650'>path,</span> <span m='2290330'>which</span> <span
  m='2290510'>is</span> <span m='2290630'>no</span> <span
  m='2290790'>better.</span> <span m='2291510'>The</span> <span
  m='2291590'>height's</span> <span m='2291850'>the</span> <span
  m='2291930'>same.</span> <span m='2293390'>And</span> <span
  m='2293530'>we're</span> <span m='2293680'>sad.</span> </p><p><span
  m='2297950'>I</span> <span m='2298070'>told</span> <span
  m='2298400'>you,</span> <span m='2298510'>though,</span> <span
  m='2298680'>that</span> <span m='2298800'>somehow</span> <span
  m='2299110'>rotations</span> <span m='2299660'>are</span> <span
  m='2299780'>all</span> <span m='2300030'>we</span> <span
  m='2300160'>need</span> <span m='2300390'>to</span> <span
  m='2300500'>do.</span> <span m='2304086'>What</span> <span
  m='2304530'>can</span> <span m='2304710'>I</span> <span m='2304780'>do?</span>
  <span m='2308130'>How</span> <span m='2308350'>could</span> <span
  m='2308500'>I</span> <span m='2308570'>fix</span> <span
  m='2309010'>this</span> <span m='2309230'>little</span> <span
  m='2309990'>zigzag?</span> <span m='2311140'>Just</span> <span
  m='2311430'>need</span> <span m='2311540'>to</span> <span
  m='2311610'>think</span> <span m='2311760'>about</span> <span
  m='2311950'>those</span> <span m='2312120'>three</span> <span
  m='2312300'>nodes,</span> <span m='2313110'>but</span> <span
  m='2313370'>all</span> <span m='2313690'>I</span> <span
  m='2313730'>give</span> <span m='2313890'>you are</span> <span
  m='2314070'>rotations.</span> </p><p><span m='2315900'>AUDIENCE:
  Perhaps</span> <span m='2316400'>rotate</span> <span m='2316900'>50.</span>
  </p><p><span m='2318400'>PROFESSOR: Maybe</span> <span
  m='2318710'>rotate</span> <span m='2319060'>50.</span> <span
  m='2319620'>That</span> <span m='2319820'>seems</span> <span
  m='2320030'>like</span> <span m='2320190'>a</span> <span
  m='2320250'>good</span> <span m='2320420'>idea.</span> <span
  m='2321130'>Let's</span> <span m='2321190'>try</span> <span
  m='2321370'>it.</span> <span m='2324440'>If</span> <span
  m='2324750'>you</span> <span m='2324840'>don't</span> <span
  m='2324990'>mind,</span> <span m='2325490'>I'm</span> <span
  m='2325590'>just</span> <span m='2325620'>going</span> <span
  m='2325720'>to</span> <span m='2325760'>write</span> <span
  m='2325950'>41,</span> <span m='2326420'>and</span> <span
  m='2326530'>then</span> <span m='2326660'>there's</span> <span
  m='2326920'>all</span> <span m='2327110'>the</span> <span
  m='2327170'>stuff</span> <span m='2327450'>on</span> <span
  m='2327510'>the</span> <span m='2327590'>left.</span> <span
  m='2328790'>Now</span> <span m='2328950'>we</span> <span
  m='2329060'>rotate</span> <span m='2329610'>50.</span> <span
  m='2329990'>So</span> <span m='2330140'>65</span> <span
  m='2330900'>remains</span> <span m='2331280'>where</span> <span
  m='2331480'>it</span> <span m='2331540'>is.</span> <span
  m='2333190'>And</span> <span m='2333260'>we</span> <span
  m='2333390'>rotate</span> <span m='2333900'>50</span> <span
  m='2334700'>to</span> <span m='2334920'>the</span> <span
  m='2335030'>left.</span> <span m='2335810'>So</span> <span
  m='2336190'>50</span> <span m='2336540'>and</span> <span
  m='2336640'>its</span> <span m='2336800'>child.</span> <span
  m='2337060'>This</span> <span m='2337190'>is</span> <span
  m='2337290'>x.</span> <span m='2337550'>This</span> <span
  m='2337700'>is</span> <span m='2337810'>y.</span> <span m='2339320'>And</span>
  <span m='2339450'>so</span> <span m='2339770'>I</span> <span
  m='2340090'>get</span> <span m='2342080'>55</span> <span
  m='2344010'>and</span> <span m='2344140'>I</span> <span m='2344200'>get</span>
  <span m='2344450'>50.</span> </p><p><span m='2347800'>Now,</span> <span
  m='2347920'>this</span> <span m='2348130'>is</span> <span
  m='2348360'>bad</span> <span m='2348740'>from an</span> <span
  m='2348860'>AVL</span> <span m='2349290'>perspective.</span> <span
  m='2349710'>This</span> <span m='2349870'>is</span> <span
  m='2349950'>still</span> <span m='2350230'>doubly</span> <span
  m='2350600'>left</span> <span m='2350870'>heavy,</span> <span
  m='2351730'>this</span> <span m='2351950'>is</span> <span
  m='2352200'>left</span> <span m='2352550'>heavy,</span> <span
  m='2353470'>and</span> <span m='2353620'>this</span> <span
  m='2353770'>is</span> <span m='2353860'>even.</span> <span
  m='2355820'>But</span> <span m='2356820'>it</span> <span
  m='2356950'>looks</span> <span m='2357190'>like</span> <span
  m='2357380'>this</span> <span m='2357610'>case.</span> <span
  m='2358690'>And</span> <span m='2358820'>so</span> <span
  m='2358930'>now</span> <span m='2359270'>I</span> <span m='2359360'>can</span>
  <span m='2359510'>do</span> <span m='2359600'>a</span> <span
  m='2359730'>right</span> <span m='2359970'>rotation</span> <span
  m='2360630'>on</span> <span m='2361000'>65,</span> <span
  m='2362460'>and</span> <span m='2362740'>I</span> <span
  m='2362770'>will</span> <span m='2362970'>get--</span> <span
  m='2363410'>so</span> <span m='2363620'>let</span> <span m='2364075'>me</span>
  <span m='2364530'>order the</span> <span m='2365020'>diagrams</span> <span
  m='2365540'>here.</span> </p><p><span m='2367090'>I</span> <span
  m='2367280'>do</span> <span m='2367550'>a</span> <span
  m='2367690'>right</span> <span m='2367950'>rotate</span> <span
  m='2368300'>on</span> <span m='2368430'>65,</span> <span
  m='2369240'>and</span> <span m='2369460'>I</span> <span
  m='2369500'>will</span> <span m='2369630'>get</span> <span
  m='2369860'>41.</span> <span m='2371480'>And</span> <span
  m='2371730'>to</span> <span m='2371830'>the</span> <span
  m='2371940'>right</span> <span m='2372280'>I</span> <span
  m='2372380'>get</span> <span m='2372600'>55.</span> <span
  m='2374260'>And</span> <span m='2374620'>to</span> <span
  m='2374740'>the</span> <span m='2374820'>right</span> <span
  m='2375130'>I</span> <span m='2375230'>get</span> <span m='2375490'>65.</span>
  <span m='2377012'>To the</span> <span m='2377370'>left</span> <span
  m='2377900'>I</span> <span m='2378020'>get</span> <span m='2378420'>50.</span>
  <span m='2381930'>And</span> <span m='2382040'>then</span> <span
  m='2382150'>I</span> <span m='2382200'>get</span> <span m='2382350'>the</span>
  <span m='2382440'>left</span> <span m='2382700'>subtree.</span> </p><p><span
  m='2384600'>And</span> <span m='2384820'>so</span> <span
  m='2384950'>now</span> <span m='2385510'>this</span> <span
  m='2385850'>is</span> <span m='2386290'>even,</span> <span
  m='2386705'>even,</span> <span m='2387120'>even.</span> <span
  m='2388400'>Wow.</span> <span m='2389950'>How</span> <span
  m='2390540'>high</span> <span m='2390570'>was</span> <span
  m='2390790'>left</span> <span m='2391060'>subtree?</span> <span m='2391140'>I
  think</span> <span m='2391450'>it's</span> <span m='2391530'>still</span>
  <span m='2391740'>left</span> <span m='2392000'>heavy.</span> <span
  m='2394780'>Cool.</span> <span m='2395850'>This</span> <span
  m='2396050'>is</span> <span m='2396210'>what</span> <span
  m='2396540'>some</span> <span m='2396750'>people</span> <span
  m='2397010'>call</span> <span m='2397280'>double</span> <span
  m='2397580'>rotation,</span> <span m='2398600'>but</span> <span
  m='2398720'>I</span> <span m='2398780'>like</span> <span m='2398970'>to</span>
  <span m='2399060'>call</span> <span m='2399310'>it</span> <span
  m='2399660'>two</span> <span m='2399840'>rotations.</span> <span
  m='2401370'>It's</span> <span m='2401840'>whatever</span> <span
  m='2402070'>you</span> <span m='2402150'>prefer.</span> <span
  m='2403850'>It's</span> <span m='2404040'>not</span> <span
  m='2404220'>really</span> <span m='2404450'>a new</span> <span
  m='2404600'>operation.</span> <span m='2405020'>It's</span> <span
  m='2405110'>just</span> <span m='2405280'>doing</span> <span
  m='2405510'>two</span> <span m='2405680'>rotations.</span> </p><p><span
  m='2406790'>So</span> <span m='2407160'>that's</span> <span
  m='2407360'>an</span> <span m='2407420'>example.</span> <span
  m='2408010'>Let's</span> <span m='2408310'>do</span> <span
  m='2408410'>the</span> <span m='2408500'>general</span> <span
  m='2408800'>case.</span> <span m='2409460'>It's</span> <span
  m='2410120'>no</span> <span m='2410450'>harder.</span> <span
  m='2411340'>You</span> <span m='2411520'>might</span> <span
  m='2411710'>say,</span> <span m='2411860'>oh,</span> <span
  m='2412080'>gosh,</span> <span m='2412450'>why</span> <span
  m='2412480'>do</span> <span m='2412630'>you do</span> <span
  m='2412730'>two</span> <span m='2412870'>examples?</span> <span
  m='2413330'>Well,</span> <span m='2413510'>because</span> <span
  m='2413890'>they</span> <span m='2413990'>were</span> <span
  m='2414130'>different.</span> <span m='2414750'>And</span> <span
  m='2415030'>they're are</span> <span m='2415210'>two</span> <span
  m='2415400'>cases</span> <span m='2415800'>on the</span> <span
  m='2415910'>algorithm.</span> <span m='2416400'>You</span> <span
  m='2416480'>need</span> <span m='2416640'>to</span> <span
  m='2416730'>know</span> <span m='2416850'>both</span> <span m='2417110'>of
  them.</span> </p><p><span m='2418190'>OK,</span> <span m='2418510'>so</span>
  <span m='2419910'>AVL</span> <span m='2420460'>insert.</span> <span
  m='2421260'>Here</span> <span m='2421370'>we</span> <span
  m='2421460'>go.</span> <span m='2421660'>Fix</span> <span
  m='2422020'>AVL</span> <span m='2422420'>property.</span> </p><p></p><p><span
  m='2433459'>I'm</span> <span m='2433960'>just</span> <span
  m='2434250'>going</span> <span m='2434350'>to</span> <span
  m='2434410'>call</span> <span m='2434610'>this</span> <span
  m='2434790'>from</span> <span m='2435100'>the</span> <span
  m='2435230'>changed</span> <span m='2437840'>node</span> <span
  m='2440570'>up.</span> <span m='2442500'>So</span> <span
  m='2442940'>the</span> <span m='2443120'>one</span> <span
  m='2443340'>thing</span> <span m='2443500'>that's</span> <span
  m='2443650'>missing</span> <span m='2443950'>from</span> <span
  m='2444100'>these</span> <span m='2444280'>examples</span> <span
  m='2444900'>is</span> <span m='2445030'>that</span> <span
  m='2445150'>you</span> <span m='2445260'>might</span> <span
  m='2445440'>have</span> <span m='2445600'>to</span> <span
  m='2445710'>do</span> <span m='2445840'>more</span> <span
  m='2446160'>than</span> <span m='2446330'>two</span> <span
  m='2446560'>rotations.</span> <span m='2448160'>What</span> <span
  m='2448320'>we</span> <span m='2448480'>did</span> <span
  m='2448730'>was</span> <span m='2448880'>look</span> <span
  m='2449090'>at</span> <span m='2449190'>the</span> <span
  m='2449300'>lowest</span> <span m='2449970'>violation</span> <span
  m='2450590'>of</span> <span m='2450660'>the AVL</span> <span
  m='2451090'>property</span> <span m='2451510'>and we</span> <span
  m='2451670'>fixed</span> <span m='2452040'>it.</span> <span
  m='2452700'>When</span> <span m='2452870'>we</span> <span
  m='2452990'>do</span> <span m='2453130'>that,</span> <span
  m='2453330'>there's</span> <span m='2453470'>still</span> <span
  m='2453760'>may be</span> <span m='2454450'>violations</span> <span
  m='2455070'>higher</span> <span m='2455390'>up,</span> <span
  m='2456530'>because</span> <span m='2457540'>when</span> <span
  m='2457660'>you</span> <span m='2457770'>add</span> <span m='2457960'>a</span>
  <span m='2458000'>node,</span> <span m='2458840'>you</span> <span
  m='2458960'>change</span> <span m='2459220'>the</span> <span
  m='2459300'>height</span> <span m='2459480'>of</span> <span
  m='2459900'>this</span> <span m='2460050'>subtree,</span> <span
  m='2460620'>the</span> <span m='2460700'>height</span> <span
  m='2460850'>of</span> <span m='2460940'>this</span> <span
  m='2461040'>subtree,</span> <span m='2461400'>the</span> <span
  m='2461480'>height</span> <span m='2461630'>of</span> <span
  m='2461710'>this</span> <span m='2461810'>subtree,</span> <span
  m='2462220'>and</span> <span m='2462320'>the</span> <span
  m='2462340'>height</span> <span m='2462500'>of</span> <span
  m='2462570'>this</span> <span m='2462670'>subtree,</span> <span
  m='2463080'>potentially.</span> </p><p><span m='2464840'>What</span> <span
  m='2464930'>happened</span> <span m='2465380'>in</span> <span
  m='2465450'>these</span> <span m='2465630'>cases</span> <span
  m='2466160'>when</span> <span m='2466360'>I</span> <span
  m='2466430'>was</span> <span m='2466570'>done,</span> <span
  m='2467170'>what</span> <span m='2467400'>I</span> <span
  m='2467450'>did</span> <span m='2467650'>fixed</span> <span
  m='2467940'>one</span> <span m='2468220'>violation.</span> <span
  m='2468690'>They were</span> <span m='2468920'>all</span> <span
  m='2469060'>fixed.</span> <span m='2469500'>But</span> <span
  m='2469620'>in</span> <span m='2469710'>general,</span> <span
  m='2470480'>there</span> <span m='2470610'>might</span> <span
  m='2470800'>be</span> <span m='2470890'>several</span> <span
  m='2471200'>violations</span> <span m='2471870'>up</span> <span
  m='2472030'>the</span> <span m='2472140'>tree.</span> <span
  m='2473920'>So</span> <span m='2475850'>that's</span> <span
  m='2476090'>what</span> <span m='2476170'>we</span> <span
  m='2476300'>do.</span> <span m='2480440'>Yeah,</span> <span
  m='2481370'>I'll</span> <span m='2481480'>leave</span> <span
  m='2481630'>it</span> <span m='2481700'>at</span> <span
  m='2481810'>that.</span> </p><p><span m='2485510'>So</span> <span
  m='2490120'>suppose</span> <span m='2490670'>x</span> <span
  m='2491480'>is</span> <span m='2491700'>the</span> <span
  m='2491780'>lowest</span> <span m='2492230'>node</span> <span
  m='2492970'>that</span> <span m='2493120'>is</span> <span
  m='2493250'>not</span> <span m='2493520'>AVL.</span> <span
  m='2500980'>The</span> <span m='2501050'>way</span> <span
  m='2501170'>we</span> <span m='2501310'>find</span> <span
  m='2501550'>that</span> <span m='2501750'>node</span> <span
  m='2501910'>is</span> <span m='2502000'>we</span> <span
  m='2502110'>start</span> <span m='2502380'>at</span> <span
  m='2502650'>the</span> <span m='2502730'>node</span> <span
  m='2502920'>that</span> <span m='2503050'>we</span> <span
  m='2503160'>changed.</span> <span m='2504040'>We</span> <span
  m='2504150'>check</span> <span m='2504340'>if</span> <span
  m='2504430'>that's</span> <span m='2504590'>OK.</span> <span
  m='2505800'>We</span> <span m='2506100'>update</span> <span
  m='2506460'>the</span> <span m='2506770'>heights</span> <span
  m='2507120'>as</span> <span m='2507260'>we</span> <span m='2507350'>go</span>
  <span m='2507530'>up</span> <span m='2508150'>using</span> <span
  m='2508490'>our</span> <span m='2508610'>simple</span> <span
  m='2508980'>rule.</span> <span m='2510900'>And</span> <span
  m='2512040'>that's</span> <span m='2512210'>actually</span> <span
  m='2512450'>not</span> <span m='2512640'>our</span> <span
  m='2512730'>simple</span> <span m='2512995'>rule,</span> <span m='2513260'>but
  it's</span> <span m='2513560'>erased.</span> <span m='2515120'>We</span> <span
  m='2515420'>update</span> <span m='2515730'>the</span> <span
  m='2515790'>height</span> <span m='2516070'>based</span> <span
  m='2516310'>on</span> <span m='2516370'>the</span> <span
  m='2516430'>heights</span> <span m='2516660'>of its</span> <span
  m='2516850'>children.</span> <span m='2517860'>And</span> <span
  m='2517980'>you</span> <span m='2518050'>keep</span> <span
  m='2518250'>walking</span> <span m='2518570'>up</span> <span
  m='2518690'>until</span> <span m='2518900'>you</span> <span
  m='2519000'>see,</span> <span m='2519260'>oh,</span> <span
  m='2520190'>the</span> <span m='2520380'>left</span> <span
  m='2520760'>is</span> <span m='2521030'>twice,</span> <span
  m='2521650'>two</span> <span m='2521840'>times--</span> <span
  m='2522560'>or</span> <span m='2522960'>not</span> <span
  m='2523160'>two</span> <span m='2523270'>times,</span> <span
  m='2524010'>but</span> <span m='2524080'>plus</span> <span
  m='2524460'>2</span> <span m='2524680'>larger</span> <span
  m='2525230'>than</span> <span m='2525510'>the</span> <span
  m='2525620'>left,</span> <span m='2526100'>or</span> <span
  m='2526240'>vice</span> <span m='2526500'>versa.</span> <span
  m='2527870'>Then</span> <span m='2528340'>you</span> <span
  m='2528410'>say,</span> <span m='2528550'>oh,</span> <span
  m='2528730'>that's</span> <span m='2528950'>bad.</span> <span
  m='2530230'>And</span> <span m='2530330'>so</span> <span m='2530440'>we</span>
  <span m='2530550'>fix</span> <span m='2530780'>it.</span> <span
  m='2532980'>Yeah,</span> <span m='2533420'>question.</span> </p><p><span
  m='2534060'>AUDIENCE: So</span> <span m='2534553'>here</span> <span
  m='2535046'>we</span> <span m='2535539'>continue to</span> <span
  m='2536032'>[INAUDIBLE].</span> </p><p><span m='2537020'>PROFESSOR:
  Yes.</span> </p><p><span m='2537520'>AUDIENCE: [INAUDIBLE].</span> <span
  m='2543102'>add</span> <span m='2543588'>n</span> <span m='2544074'>to
  the</span> <span m='2544560'>level</span> <span m='2545046'>[INAUDIBLE]</span>
  <span m='2546504'>than</span> <span m='2546990'>1.</span> <span m='2547476'>So
  add</span> <span m='2547962'>[INAUDIBLE].</span> </p><p><span
  m='2550890'>PROFESSOR: AVL</span> <span m='2552230'>property's</span> <span
  m='2552570'>not</span> <span m='2552780'>about</span> <span
  m='2553040'>levels.</span> <span m='2554250'>It's</span> <span
  m='2554430'>about</span> <span m='2555000'>left</span> <span
  m='2555360'>subtrees</span> <span m='2555750'>and</span> <span
  m='2555840'>right</span> <span m='2556040'>subtrees.</span> <span
  m='2557000'>So</span> <span m='2557140'>the</span> <span
  m='2557250'>trouble</span> <span m='2557580'>is</span> <span
  m='2557710'>that</span> <span m='2557850'>65--</span> <span
  m='2558690'>you</span> <span m='2558800'>have</span> <span
  m='2558900'>a</span> <span m='2558950'>left</span> <span
  m='2559200'>subtree,</span> <span m='2559540'>which</span> <span
  m='2559720'>has</span> <span m='2559880'>height</span> <span
  m='2560200'>2--</span> <span m='2562020'>or</span> <span
  m='2562680'>sorry,</span> <span m='2562890'>height</span> <span
  m='2563120'>1,</span> <span m='2563470'>I</span> <span
  m='2563550'>guess--</span> <span m='2564250'>because</span> <span
  m='2564450'>the</span> <span m='2564700'>longest</span> <span
  m='2564850'>path</span> <span m='2565070'>from</span> <span
  m='2565180'>here</span> <span m='2565330'>to</span> <span m='2565380'>a</span>
  <span m='2565440'>leaf</span> <span m='2565650'>is</span> <span
  m='2565780'>1.</span> </p><p><span m='2567380'>The</span> <span
  m='2567710'>right</span> <span m='2568040'>subtree</span> <span
  m='2568690'>has</span> <span m='2568940'>height</span> <span
  m='2569150'>negative</span> <span m='2569460'>1</span> <span
  m='2569630'>because</span> <span m='2569820'>it</span> <span
  m='2569890'>doesn't</span> <span m='2570110'>exist.</span> <span
  m='2570750'>So</span> <span m='2570800'>it's</span> <span
  m='2570900'>one</span> <span m='2571110'>versus</span> <span
  m='2571330'>negative</span> <span m='2571630'>1.</span> <span
  m='2571810'>So</span> <span m='2571970'>that's</span> <span
  m='2572170'>why</span> <span m='2572280'>there's</span> <span
  m='2572430'>a</span> <span m='2572480'>double</span> <span
  m='2572760'>arrow.</span> <span m='2573285'>Yeah,</span> <span
  m='2573630'>good to</span> <span m='2573730'>ask.</span> <span
  m='2574140'>It's</span> <span m='2574300'>weird</span> <span
  m='2574600'>with</span> <span m='2574720'>the</span> <span
  m='2574800'>negative</span> <span m='2575100'>1s.</span> <span
  m='2576030'>That's</span> <span m='2576260'>also</span> <span
  m='2576520'>why</span> <span m='2576660'>I</span> <span
  m='2576710'>wanted</span> <span m='2577020'>to</span> <span
  m='2577120'>define</span> <span m='2577550'>those</span> <span
  m='2577720'>negative</span> <span m='2578080'>1s</span> <span
  m='2578320'>to</span> <span m='2578410'>be</span> <span
  m='2578560'>there,</span> <span m='2579440'>so</span> <span
  m='2579875'>the</span> <span m='2580130'>AVL</span> <span m='2580610'>property
  is</span> <span m='2580990'>easier</span> <span m='2581330'>to</span> <span
  m='2581400'>state.</span> <span m='2582420'>Other</span> <span
  m='2582850'>questions?</span> </p><p><span m='2585180'>All</span> <span
  m='2585250'>right.</span> <span m='2587770'>Good.</span> <span
  m='2588070'>I</span> <span m='2588340'>think</span> <span m='2588520'>I</span>
  <span m='2588570'>want</span> <span m='2588780'>a</span> <span
  m='2589100'>symmetry</span> <span m='2589880'>assumption</span> <span
  m='2590340'>here.</span> <span m='2601750'>I</span> <span m='2601790'>don't
  know</span> <span m='2601980'>why I</span> <span m='2602100'>wrote</span>
  <span m='2602380'>right</span> <span m='2602600'>of</span> <span
  m='2602700'>x.</span> <span m='2604050'>I</span> <span
  m='2604110'>guess</span> <span m='2604615'>in</span> <span m='2604890'>modern
  days</span> <span m='2605390'>we</span> <span m='2605490'>write</span> <span
  m='2605720'>x</span> <span m='2606130'>dot</span> <span
  m='2606540'>right.</span> <span m='2608810'>Same</span> <span
  m='2609010'>thing.</span> <span m='2611020'>OK,</span> <span
  m='2611600'>I'm</span> <span m='2611770'>going</span> <span
  m='2611850'>to</span> <span m='2611930'>assume</span> <span
  m='2612150'>that</span> <span m='2612390'>the</span> <span
  m='2612670'>right</span> <span m='2613090'>child</span> <span
  m='2613500'>is</span> <span m='2613650'>the</span> <span
  m='2613730'>heavier</span> <span m='2614090'>one</span> <span
  m='2615360'>like</span> <span m='2615820'>we</span> <span
  m='2615950'>did</span> <span m='2616110'>before.</span> <span
  m='2617350'>Could</span> <span m='2617500'>be</span> <span
  m='2617590'>the</span> <span m='2617690'>left.</span> <span
  m='2618120'>It's</span> <span m='2618260'>symmetric.</span> <span
  m='2619530'>It</span> <span m='2619650'>doesn't</span> <span
  m='2619840'>matter.</span> </p><p></p><p><span m='2636950'>So</span> <span
  m='2637080'>now</span> <span m='2637240'>there</span> <span
  m='2637380'>are</span> <span m='2637430'>two</span> <span
  m='2637600'>cases,</span> <span m='2638150'>like</span> <span
  m='2638270'>I</span> <span m='2638310'>said.</span> </p><p></p><p><span
  m='2654570'>I'm</span> <span m='2654780'>going</span> <span
  m='2654860'>to</span> <span m='2654900'>use</span> <span
  m='2655060'>this</span> <span m='2655200'>term</span> <span
  m='2655480'>right</span> <span m='2655700'>heavy</span> <span
  m='2656240'>because</span> <span m='2656400'>it's</span> <span
  m='2656530'>super</span> <span m='2656810'>convenient.</span> <span
  m='2662940'>OK,</span> <span m='2663110'>right</span> <span
  m='2663320'>heavy</span> <span m='2663580'>is</span> <span
  m='2663700'>what</span> <span m='2663860'>I've</span> <span
  m='2663980'>been</span> <span m='2664110'>drawing</span> <span
  m='2664420'>by</span> <span m='2664610'>a</span> <span
  m='2665000'>descending</span> <span m='2665420'>right</span> <span
  m='2665610'>arrow.</span> <span m='2666040'>Balance</span> <span
  m='2666450'>is</span> <span m='2666530'>what</span> <span
  m='2666650'>I've</span> <span m='2666710'>been</span> <span
  m='2666830'>drawing</span> <span m='2667080'>by a</span> <span
  m='2667240'>horizontal</span> <span m='2667730'>line.</span> <span
  m='2669280'>OK,</span> <span m='2669450'>so</span> <span
  m='2670550'>we're</span> <span m='2670760'>just</span> <span
  m='2670980'>distinguishing</span> <span m='2671510'>between</span> <span
  m='2671780'>these</span> <span m='2671930'>two</span> <span
  m='2672040'>cases.</span> <span m='2672440'>This</span> <span
  m='2672620'>turns</span> <span m='2672870'>out</span> <span
  m='2673040'>to</span> <span m='2673140'>be</span> <span m='2673760'>the</span>
  <span m='2673880'>easy</span> <span m='2674140'>case.</span> </p><p><span
  m='2676000'>So</span> <span m='2676210'>we</span> <span
  m='2676320'>have</span> <span m='2677430'>x,</span> <span
  m='2678430'>y,</span> <span m='2680050'>a,</span> <span m='2682030'>b,</span>
  <span m='2683340'>c.</span> <span m='2683500'>Why</span> <span m='2683730'>are
  we</span> <span m='2683860'>looking</span> <span m='2684100'>at</span> <span
  m='2684180'>the</span> <span m='2684270'>right</span> <span
  m='2684470'>child?</span> <span m='2684810'>Because</span> <span
  m='2685070'>we</span> <span m='2685160'>assumed</span> <span
  m='2685460'>that</span> <span m='2685590'>the</span> <span
  m='2685670'>right</span> <span m='2685860'>one</span> <span
  m='2685990'>is</span> <span m='2686150'>higher,</span> <span
  m='2687170'>so</span> <span m='2687350'>that</span> <span m='2687500'>x</span>
  <span m='2687730'>was</span> <span m='2687880'>right</span> <span
  m='2688100'>heavy.</span> <span m='2689380'>So</span> <span
  m='2689540'>this</span> <span m='2690000'>subtree</span> <span
  m='2690450'>as</span> <span m='2690590'>I've</span> <span
  m='2690670'>drawn</span> <span m='2691000'>it is</span> <span
  m='2691140'>higher</span> <span m='2691470'>than</span> <span
  m='2691660'>the</span> <span m='2691740'>left</span> <span
  m='2691990'>one</span> <span m='2692190'>by</span> <span m='2692370'>2,</span>
  <span m='2693360'>in</span> <span m='2693430'>fact.</span> <span
  m='2695040'>And</span> <span m='2695350'>what</span> <span
  m='2695510'>we</span> <span m='2695620'>do</span> <span m='2695810'>in</span>
  <span m='2695890'>this</span> <span m='2696090'>case</span> <span
  m='2696590'>is</span> <span m='2696990'>right</span> <span
  m='2697290'>rotate</span> <span m='2697810'>of</span> <span
  m='2697920'>x.</span> <span m='2699800'>And</span> <span m='2699980'>so</span>
  <span m='2700170'>we</span> <span m='2700310'>get</span> <span
  m='2701270'>x,</span> <span m='2702150'>y,</span> <span m='2703910'>a,</span>
  <span m='2705680'>b,</span> <span m='2707230'>c.</span> <span
  m='2707470'>I</span> <span m='2707560'>could</span> <span
  m='2707710'>have</span> <span m='2707810'>drawn</span> <span
  m='2708030'>this</span> <span m='2708230'>no</span> <span
  m='2708330'>matter</span> <span m='2708580'>what</span> <span
  m='2708760'>case</span> <span m='2709020'>we're</span> <span
  m='2709200'>in,</span> <span m='2709370'>so</span> <span m='2709880'>we</span>
  <span m='2710010'>need</span> <span m='2710140'>to</span> <span
  m='2710210'>check</span> <span m='2710450'>this</span> <span
  m='2710620'>actually</span> <span m='2710960'>works.</span> <span
  m='2712150'>That's</span> <span m='2712410'>the</span> <span
  m='2712570'>interesting</span> <span m='2713000'>part.</span> <span
  m='2713350'>And</span> <span m='2713793'>that's</span> <span
  m='2714236'>over</span> <span m='2714680'>here.</span> </p><p><span
  m='2717700'>OK,</span> <span m='2718030'>so</span> <span m='2718320'>I</span>
  <span m='2718450'>said</span> <span m='2718710'>x</span> <span
  m='2718960'>is</span> <span m='2719080'>right</span> <span
  m='2719280'>heavy,</span> <span m='2719650'>in</span> <span
  m='2719750'>fact</span> <span m='2719970'>doubly</span> <span
  m='2720300'>so.</span> <span m='2721450'>y</span> <span m='2722500'>is</span>
  <span m='2722640'>either</span> <span m='2722870'>right</span> <span
  m='2723050'>heavy</span> <span m='2723230'>or</span> <span
  m='2723390'>balanced.</span> <span m='2725250'>Let's</span> <span
  m='2725750'>start with</span> <span m='2726030'>right</span> <span
  m='2726230'>heavy.</span> <span m='2728260'>So</span> <span
  m='2728460'>when</span> <span m='2728660'>we</span> <span
  m='2728770'>do</span> <span m='2728940'>this</span> <span
  m='2729120'>rotation,</span> <span m='2731520'>what</span> <span
  m='2731750'>happens</span> <span m='2732120'>to</span> <span
  m='2732200'>the</span> <span m='2732270'>heights?</span> <span
  m='2733710'>Well,</span> <span m='2736550'>it's</span> <span
  m='2737020'>hard</span> <span m='2737220'>to tell.</span> <span
  m='2739660'>It's</span> <span m='2739880'>a</span> <span
  m='2739930'>lot</span> <span m='2740090'>easier</span> <span
  m='2740370'>to</span> <span m='2740430'>think</span> <span
  m='2740650'>about</span> <span m='2740870'>what</span> <span
  m='2741010'>the</span> <span m='2741110'>actual</span> <span
  m='2741520'>heights</span> <span m='2741790'>are</span> <span
  m='2741930'>than</span> <span m='2742070'>just</span> <span
  m='2742290'>these</span> <span m='2742450'>arrows.</span> </p><p><span
  m='2743440'>So</span> <span m='2743540'>let's</span> <span
  m='2743620'>suppose</span> <span m='2744020'>x</span> <span
  m='2744280'>has</span> <span m='2744450'>height</span> <span
  m='2744680'>k.</span> <span m='2745030'>That's</span> <span
  m='2745320'>pretty</span> <span m='2745780'>generic.</span> <span
  m='2748640'>And</span> <span m='2748800'>it's</span> <span
  m='2748910'>right</span> <span m='2749210'>heavy,</span> <span
  m='2749570'>so</span> <span m='2749720'>that</span> <span
  m='2749910'>means</span> <span m='2750230'>the</span> <span
  m='2750320'>y</span> <span m='2750720'>has</span> <span
  m='2751050'>height</span> <span m='2751410'>k</span> <span
  m='2751570'>minus</span> <span m='2751930'>1.</span> <span
  m='2754450'>And</span> <span m='2754630'>then</span> <span
  m='2754920'>this</span> <span m='2755180'>is</span> <span
  m='2755320'>right</span> <span m='2755530'>heavy,</span> <span
  m='2755820'>so</span> <span m='2755960'>this</span> <span
  m='2756380'>has</span> <span m='2756660'>height</span> <span
  m='2756970'>k</span> <span m='2757160'>minus</span> <span
  m='2757550'>2.</span> <span m='2758620'>And</span> <span
  m='2758750'>this</span> <span m='2758910'>is</span> <span
  m='2758980'>something</span> <span m='2759330'>smaller</span> <span
  m='2759810'>then</span> <span m='2759970'>k</span> <span
  m='2760120'>minus</span> <span m='2760490'>2.</span> </p><p><span
  m='2761466'>In</span> <span m='2761820'>fact,</span> <span
  m='2762500'>because</span> <span m='2762750'>this</span> <span
  m='2763010'>is</span> <span m='2763150'>AVL,</span> <span
  m='2763490'>we</span> <span m='2763780'>assume that</span> <span
  m='2764070'>x</span> <span m='2764370'>was</span> <span m='2764520'>the</span>
  <span m='2764590'>lowest</span> <span m='2765020'>that is</span> <span
  m='2765190'>not</span> <span m='2765370'>AVL.</span> <span
  m='2765450'>So</span> <span m='2765770'>y</span> <span m='2766090'>is</span>
  <span m='2766290'>AVL.</span> <span m='2767500'>And</span> <span
  m='2767690'>so</span> <span m='2767810'>this</span> <span
  m='2768040'>is</span> <span m='2768150'>going</span> <span
  m='2768280'>to</span> <span m='2768340'>be</span> <span m='2768480'>k</span>
  <span m='2768690'>minus</span> <span m='2769090'>3,</span> <span
  m='2770920'>and</span> <span m='2771480'>this</span> <span
  m='2771700'>is</span> <span m='2771840'>going</span> <span
  m='2771990'>to</span> <span m='2772080'>be</span> <span m='2772260'>k</span>
  <span m='2772600'>minus</span> <span m='2773390'>3</span> <span
  m='2773780'>because</span> <span m='2774230'>these</span> <span
  m='2774390'>differ</span> <span m='2774660'>by</span> <span
  m='2774820'>2.</span> <span m='2775380'>You</span> <span
  m='2775520'>can</span> <span m='2775670'>prove by a</span> <span
  m='2776130'>simple</span> <span m='2776380'>induction</span> <span
  m='2776710'>you</span> <span m='2776780'>never</span> <span
  m='2777030'>get</span> <span m='2777180'>more</span> <span
  m='2777330'>than</span> <span m='2777480'>2</span> <span
  m='2777750'>out</span> <span m='2777850'>of</span> <span
  m='2777920'>whack</span> <span m='2779280'>because</span> <span
  m='2779480'>we're</span> <span m='2780000'>just</span> <span
  m='2780250'>adding</span> <span m='2780530'>1,</span> <span
  m='2781310'>off</span> <span m='2781630'>by</span> <span m='2781750'>1.</span>
  <span m='2782470'>So</span> <span m='2782640'>we</span> <span
  m='2782720'>got</span> <span m='2782830'>off</span> <span
  m='2782970'>by</span> <span m='2783090'>2.</span> </p><p><span
  m='2783900'>So</span> <span m='2784040'>this</span> <span
  m='2784240'>is</span> <span m='2784350'>the</span> <span
  m='2784440'>bad</span> <span m='2784690'>situation.</span> <span
  m='2785280'>Now</span> <span m='2785560'>we</span> <span
  m='2785690'>can</span> <span m='2785820'>just</span> <span
  m='2786090'>update</span> <span m='2786460'>the</span> <span
  m='2786590'>heights</span> <span m='2786870'>over</span> <span
  m='2787060'>here.</span> <span m='2787710'>So</span> <span
  m='2787920'>k</span> <span m='2788140'>minus</span> <span m='2788490'>3</span>
  <span m='2788690'>for</span> <span m='2788870'>a,</span> <span
  m='2789600'>k</span> <span m='2789800'>minus</span> <span m='2790210'>3</span>
  <span m='2790470'>for</span> <span m='2790620'>b,</span> <span
  m='2791340'>k</span> <span m='2791700'>minus</span> <span m='2792080'>2</span>
  <span m='2792320'>for</span> <span m='2792480'>c.</span> <span
  m='2792770'>Those</span> <span m='2793000'>don't</span> <span
  m='2793190'>change</span> <span m='2793500'>because</span> <span
  m='2793750'>we</span> <span m='2793840'>didn't</span> <span
  m='2794040'>touch</span> <span m='2794310'>those</span> <span
  m='2794520'>trees,</span> <span m='2795420'>and</span> <span
  m='2795590'>height</span> <span m='2795840'>is</span> <span
  m='2795950'>about</span> <span m='2796270'>going</span> <span
  m='2796510'>down,</span> <span m='2796810'>not</span> <span
  m='2797000'>up.</span> </p><p><span m='2798050'>And</span> <span
  m='2798200'>so</span> <span m='2798300'>this</span> <span
  m='2798510'>becomes</span> <span m='2798870'>k</span> <span
  m='2799020'>minus</span> <span m='2799350'>2,</span> <span
  m='2800120'>and</span> <span m='2800310'>this</span> <span
  m='2800490'>becomes</span> <span m='2800900'>k</span> <span
  m='2801090'>minus</span> <span m='2801430'>1.</span> <span
  m='2803190'>And</span> <span m='2803380'>so</span> <span m='2803540'>we</span>
  <span m='2803790'>changed</span> <span m='2804190'>the</span> <span
  m='2804270'>height</span> <span m='2804480'>of</span> <span
  m='2804570'>the</span> <span m='2804690'>root,</span> <span
  m='2805570'>but</span> <span m='2805730'>now</span> <span
  m='2805890'>you</span> <span m='2806040'>can</span> <span
  m='2806170'>see</span> <span m='2806430'>that</span> <span
  m='2806670'>life</span> <span m='2806990'>is</span> <span
  m='2807160'>good.</span> <span m='2807460'>This</span> <span
  m='2807650'>is</span> <span m='2807770'>now</span> <span
  m='2807920'>balanced</span> <span m='2808490'>between</span> <span
  m='2808760'>k</span> <span m='2808970'>minus</span> <span m='2809060'>3</span>
  <span m='2809420'>and k</span> <span m='2809460'>minus</span> <span
  m='2809750'>3.</span> <span m='2810280'>This</span> <span
  m='2810430'>is</span> <span m='2810520'>now</span> <span
  m='2810650'>balanced</span> <span m='2811150'>between</span> <span
  m='2811300'>k</span> <span m='2811440'>minus</span> <span m='2811720'>2
  and</span> <span m='2811930'>k</span> <span m='2812070'>minus</span> <span
  m='2812400'>2.</span> </p><p><span m='2813810'>And</span> <span
  m='2814010'>now</span> <span m='2814190'>the</span> <span
  m='2814790'>parent</span> <span m='2815130'>of</span> <span
  m='2815210'>y</span> <span m='2815470'>may be</span> <span
  m='2815810'>messed</span> <span m='2816100'>up,</span> <span
  m='2816290'>and</span> <span m='2816390'>that's</span> <span
  m='2816570'>why</span> <span m='2816840'>after</span> <span
  m='2817140'>this</span> <span m='2818680'>we</span> <span
  m='2818930'>go</span> <span m='2819100'>to</span> <span m='2819160'>the</span>
  <span m='2819250'>parent of</span> <span m='2819650'>y,</span> <span
  m='2820050'>see</span> <span m='2820200'>if</span> <span
  m='2820290'>it's</span> <span m='2820450'>messed</span> <span
  m='2820710'>up,</span> <span m='2820850'>but</span> <span
  m='2820930'>keep</span> <span m='2821510'>working</span> <span
  m='2821880'>our</span> <span m='2821990'>way</span> <span
  m='2822170'>up.</span> <span m='2824830'>But</span> <span
  m='2825030'>it</span> <span m='2825100'>worked.</span> <span
  m='2828220'>And</span> <span m='2828550'>in</span> <span
  m='2828640'>the</span> <span m='2828860'>interest</span> <span
  m='2829210'>of</span> <span m='2829310'>time,</span> <span
  m='2829610'>I</span> <span m='2829650'>will</span> <span
  m='2829820'>not</span> <span m='2830100'>check</span> <span
  m='2830360'>the</span> <span m='2830450'>case</span> <span
  m='2830790'>where</span> <span m='2830950'>y</span> <span
  m='2831290'>is</span> <span m='2831480'>balanced,</span> <span
  m='2832790'>but</span> <span m='2832920'>it</span> <span
  m='2833010'>works</span> <span m='2833260'>out,</span> <span
  m='2833440'>too.</span> </p><p><span m='2834400'>And</span> <span
  m='2835350'>see</span> <span m='2835780'>the</span> <span
  m='2835900'>notes.</span> <span m='2838670'>So</span> <span
  m='2838930'>the</span> <span m='2839100'>other</span> <span
  m='2839280'>case</span> <span m='2871540'>is</span> <span
  m='2871720'>where</span> <span m='2871860'>we</span> <span
  m='2871960'>do</span> <span m='2872100'>two</span> <span
  m='2872290'>rotations.</span> <span m='2873160'>And</span> <span
  m='2873410'>in</span> <span m='2873520'>general,</span> <span
  m='2874330'>so</span> <span m='2874450'>here</span> <span m='2875570'>x</span>
  <span m='2875820'>was</span> <span m='2876230'>doubly</span> <span
  m='2876560'>right</span> <span m='2876750'>heavy.</span> <span
  m='2878670'>And</span> <span m='2879710'>the</span> <span
  m='2879960'>else</span> <span m='2880260'>case</span> <span
  m='2880700'>is</span> <span m='2880910'>when</span> <span
  m='2882350'>the</span> <span m='2882480'>right</span> <span
  m='2882700'>child</span> <span m='2883010'>of</span> <span
  m='2883090'>x,</span> <span m='2883380'>which</span> <span
  m='2883550'>I'm</span> <span m='2883640'>going</span> <span
  m='2883760'>to</span> <span m='2883840'>call</span> <span m='2884090'>z</span>
  <span m='2884420'>here,</span> <span m='2885410'>is</span> <span
  m='2885630'>left</span> <span m='2885880'>heavy.</span> <span
  m='2886850'>That's</span> <span m='2887040'>the</span> <span
  m='2887130'>one</span> <span m='2887320'>remaining</span> <span
  m='2887640'>situation.</span> </p><p><span m='2889590'>You</span> <span
  m='2889780'>do</span> <span m='2889910'>the</span> <span
  m='2890020'>same</span> <span m='2890310'>thing,</span> <span
  m='2890890'>and</span> <span m='2891210'>you</span> <span
  m='2891330'>check</span> <span m='2891620'>that</span> <span
  m='2891780'>right</span> <span m='2892050'>rotating</span> <span
  m='2892680'>and</span> <span m='2892810'>left</span> <span
  m='2892980'>rotating,</span> <span m='2893360'>which</span> <span
  m='2893560'>makes</span> <span m='2893890'>the</span> <span
  m='2893970'>nice</span> <span m='2894220'>picture,</span> <span
  m='2894630'>which</span> <span m='2894810'>is</span> <span
  m='2894970'>x,</span> <span m='2895365'>y,</span> <span m='2895760'>z,</span>
  <span m='2898210'>actually</span> <span m='2899130'>balances</span> <span
  m='2899600'>everything</span> <span m='2900020'>and you</span> <span
  m='2900210'>restore</span> <span m='2900570'>the</span> <span
  m='2900800'>AVL</span> <span m='2901020'>property.</span> <span
  m='2902530'>So</span> <span m='2902790'>again,</span> <span
  m='2903990'>check</span> <span m='2904220'>the</span> <span
  m='2904290'>notes</span> <span m='2905090'>on</span> <span
  m='2905260'>that.</span> </p><p><span m='2906670'>I</span> <span
  m='2906760'>have</span> <span m='2907070'>a</span> <span
  m='2907090'>couple</span> <span m='2907370'>minutes</span> <span
  m='2907670'>left,</span> <span m='2908840'>and</span> <span
  m='2909220'>instead</span> <span m='2909470'>I'd</span> <span
  m='2909500'>like</span> <span m='2909700'>to</span> <span
  m='2909800'>tell</span> <span m='2910000'>you</span> <span
  m='2910120'>a</span> <span m='2910140'>little</span> <span
  m='2910400'>bit</span> <span m='2910560'>about</span> <span
  m='2910850'>how</span> <span m='2911000'>this</span> <span
  m='2911230'>fits</span> <span m='2911450'>into</span> <span
  m='2912070'>big-picture</span> <span m='2912570'>land.</span> <span
  m='2918240'>Two</span> <span m='2918430'>things</span> <span
  m='2918680'>I</span> <span m='2918720'>want</span> <span m='2918850'>to</span>
  <span m='2918910'>talk</span> <span m='2919130'>about.</span> <span
  m='2919440'>One</span> <span m='2919570'>is</span> <span
  m='2922050'>you</span> <span m='2922170'>could</span> <span
  m='2922310'>use</span> <span m='2922560'>this,</span> <span
  m='2922800'>of</span> <span m='2922910'>course,</span> <span
  m='2923180'>to</span> <span m='2923270'>sort,</span> <span
  m='2925890'>which</span> <span m='2926180'>is,</span> <span
  m='2926580'>if</span> <span m='2926700'>you</span> <span
  m='2926820'>want</span> <span m='2926970'>to</span> <span
  m='2927020'>sort</span> <span m='2927340'>n</span> <span
  m='2927480'>numbers,</span> <span m='2928670'>you</span> <span
  m='2928820'>insert</span> <span m='2929310'>them</span> <span
  m='2933940'>and</span> <span m='2934130'>you</span> <span
  m='2934240'>do</span> <span m='2934450'>in-order</span> <span
  m='2934820'>traversal.</span> </p><p><span m='2938740'>How</span> <span
  m='2938880'>long</span> <span m='2939100'>does</span> <span
  m='2939230'>this</span> <span m='2939420'>take?</span> <span
  m='2941060'>In-order</span> <span m='2941500'>traversal</span> <span
  m='2942290'>takes</span> <span m='2942470'>linear</span> <span
  m='2942800'>time.</span> <span m='2945370'>That's</span> <span
  m='2945740'>the</span> <span m='2945830'>sense</span> <span
  m='2946090'>in</span> <span m='2946140'>which</span> <span
  m='2946270'>we're</span> <span m='2946390'>storing</span> <span
  m='2946700'>things</span> <span m='2946900'>in</span> <span
  m='2946970'>sorted</span> <span m='2947310'>order.</span> <span
  m='2948370'>Inserting</span> <span m='2948860'>n</span> <span
  m='2948990'>items--</span> <span m='2949780'>well,</span> <span
  m='2950220'>each</span> <span m='2950490'>insert</span> <span
  m='2951110'>takes</span> <span m='2951810'>h</span> <span
  m='2952030'>time,</span> <span m='2952900'>but</span> <span
  m='2953010'>now</span> <span m='2953180'>we're</span> <span
  m='2953270'>guaranteed</span> <span m='2953630'>that</span> <span
  m='2953770'>h</span> <span m='2954010'>is</span> <span
  m='2954110'>order</span> <span m='2954310'>log</span> <span
  m='2954620'>n.</span> <span m='2955140'>So</span> <span m='2955370'>all</span>
  <span m='2955570'>the</span> <span m='2955650'>insertions</span> <span
  m='2956250'>take</span> <span m='2957150'>log n</span> <span
  m='2957610'>time</span> <span m='2957880'>each,</span> <span
  m='2958970'>n</span> <span m='2959150'>log</span> <span m='2959370'>n</span>
  <span m='2959530'>total.</span> <span m='2960460'>So</span> <span
  m='2960600'>this</span> <span m='2960760'>is</span> <span
  m='2960850'>yet</span> <span m='2961120'>another</span> <span
  m='2961430'>way</span> <span m='2961590'>to</span> <span
  m='2961690'>sort</span> <span m='2961950'>n</span> <span
  m='2962120'>items</span> <span m='2962510'>in</span> <span
  m='2962650'>n</span> <span m='2962790'>log</span> <span m='2963030'>n</span>
  <span m='2963130'>time,</span> <span m='2963390'>in</span> <span
  m='2963460'>some</span> <span m='2963700'>ways</span> <span
  m='2964350'>the</span> <span m='2964500'>most</span> <span
  m='2964770'>powerful</span> <span m='2965250'>way.</span> </p><p><span
  m='2966800'>We've</span> <span m='2966920'>seen</span> <span
  m='2967130'>heaps,</span> <span m='2968030'>and</span> <span
  m='2968140'>we've</span> <span m='2968220'>seen</span> <span
  m='2968390'>merge</span> <span m='2968680'>sort.</span> <span
  m='2969400'>They</span> <span m='2969510'>all</span> <span
  m='2969870'>sort.</span> <span m='2971080'>Heaps</span> <span
  m='2971770'>let</span> <span m='2971960'>you</span> <span
  m='2972080'>do</span> <span m='2972400'>two</span> <span
  m='2972610'>operations,</span> <span m='2973440'>insert</span> <span
  m='2974230'>and</span> <span m='2974400'>delete</span> <span
  m='2974670'>min,</span> <span m='2975380'>which</span> <span
  m='2975710'>a</span> <span m='2975770'>lot</span> <span m='2975980'>of</span>
  <span m='2976060'>times</span> <span m='2976370'>is all</span> <span
  m='2976500'>you</span> <span m='2976590'>care</span> <span
  m='2976800'>about,</span> <span m='2977400'>like</span> <span
  m='2977610'>in</span> <span m='2977730'>p</span> <span m='2977880'>set</span>
  <span m='2978090'>two.</span> <span m='2979750'>But</span> <span
  m='2980990'>these</span> <span m='2981230'>guys,</span> <span
  m='2982070'>AVL</span> <span m='2982410'>trees,</span> <span
  m='2982690'>let</span> <span m='2982830'>you</span> <span
  m='2982920'>do</span> <span m='2983110'>insert,</span> <span
  m='2984460'>delete,</span> <span m='2986020'>and</span> <span
  m='2986230'>delete</span> <span m='2986490'>min.</span> <span
  m='2987130'>So</span> <span m='2987300'>they're</span> <span
  m='2987440'>the</span> <span m='2987540'>same</span> <span
  m='2987800'>in</span> <span m='2987860'>those</span> <span
  m='2988050'>senses,</span> <span m='2989360'>but</span> <span
  m='2989630'>we</span> <span m='2989750'>have</span> <span
  m='2989940'>the</span> <span m='2990030'>new</span> <span
  m='2990260'>operation,</span> <span m='2991160'>which</span> <span
  m='2991420'>is</span> <span m='2991560'>that</span> <span
  m='2991740'>we</span> <span m='2991910'>can</span> <span m='2992110'>do</span>
  <span m='2993620'>find</span> <span m='2994470'>next</span> <span
  m='2994820'>larger</span> <span m='2995280'>and</span> <span
  m='2995520'>next</span> <span m='2995720'>smaller,</span> <span
  m='2996070'>aka</span> <span m='2996570'>successor</span> <span
  m='2996930'>and</span> <span m='2997290'>predecessor.</span> </p><p><span
  m='2999080'>So</span> <span m='3000380'>you</span> <span
  m='3000520'>can</span> <span m='3000670'>think</span> <span
  m='3000890'>about</span> <span m='3001950'>what</span> <span
  m='3002070'>we</span> <span m='3002200'>call</span> <span
  m='3003210'>an</span> <span m='3003400'>abstract</span> <span
  m='3004030'>data</span> <span m='3004280'>type.</span> <span
  m='3006120'>These</span> <span m='3006350'>are</span> <span
  m='3006400'>the</span> <span m='3006650'>operations</span> <span
  m='3007270'>that</span> <span m='3007450'>you</span> <span
  m='3007560'>support,</span> <span m='3008870'>or</span> <span m='3009000'>that
  you're</span> <span m='3009240'>supposed</span> <span m='3009670'>to</span>
  <span m='3009750'>support.</span> <span m='3011260'>If</span> <span
  m='3011460'>you're</span> <span m='3011840'>into</span> <span
  m='3012170'>Java,</span> <span m='3012590'>you</span> <span
  m='3012730'>call</span> <span m='3012890'>this</span> <span
  m='3013030'>an</span> <span m='3013130'>interface.</span> <span
  m='3014360'>But</span> <span m='3014390'>this</span> <span
  m='3014530'>is</span> <span m='3014660'>an</span> <span
  m='3014770'>algorithmic</span> <span m='3015350'>specification</span> <span
  m='3016010'>of</span> <span m='3016110'>what</span> <span
  m='3016360'>your</span> <span m='3016500'>data</span> <span
  m='3016770'>structure is</span> <span m='3017120'>supposed</span> <span
  m='3017580'>to</span> <span m='3017660'>do.</span> </p><p><span
  m='3018630'>So</span> <span m='3018820'>we</span> <span
  m='3018930'>have</span> <span m='3020090'>operations</span> <span
  m='3020630'>like</span> <span m='3020790'>insert</span> <span
  m='3021170'>and</span> <span m='3021270'>delete.</span> <span
  m='3024080'>We</span> <span m='3024190'>have</span> <span
  m='3024410'>operations</span> <span m='3025000'>like</span> <span
  m='3025260'>find</span> <span m='3025590'>the</span> <span
  m='3025740'>min</span> <span m='3026632'>and</span> <span
  m='3027080'>things</span> <span m='3027360'>like</span> <span
  m='3027610'>successor</span> <span m='3027880'>and</span> <span
  m='3028150'>predecessor,</span> <span m='3030840'>or</span> <span
  m='3030940'>next</span> <span m='3031210'>larger,</span> <span
  m='3031490'>next</span> <span m='3031700'>smaller.</span> <span
  m='3034310'>You</span> <span m='3034460'>can</span> <span
  m='3034610'>take</span> <span m='3034790'>any</span> <span
  m='3035000'>subset</span> <span m='3035490'>of</span> <span
  m='3035580'>these</span> <span m='3035910'>and</span> <span
  m='3036030'>it's</span> <span m='3036160'>an</span> <span
  m='3036240'>abstract</span> <span m='3036600'>data</span> <span
  m='3036830'>type.</span> <span m='3038000'>Insert,</span> <span
  m='3038590'>delete,</span> <span m='3038950'>and</span> <span
  m='3039080'>min</span> <span m='3039530'>is</span> <span
  m='3039710'>called</span> <span m='3039890'>a</span> <span
  m='3039930'>priority</span> <span m='3040510'>queue.</span> </p><p><span
  m='3041492'>So</span> <span m='3041840'>if you</span> <span
  m='3041940'>just</span> <span m='3042170'>take</span> <span
  m='3042340'>these</span> <span m='3042500'>first</span> <span
  m='3042790'>two,</span> <span m='3043440'>it's</span> <span
  m='3043560'>called</span> <span m='3043730'>a</span> <span
  m='3043780'>priority</span> <span m='3044200'>queue.</span> <span
  m='3046500'>And</span> <span m='3046780'>there</span> <span
  m='3046930'>are</span> <span m='3046960'>many</span> <span
  m='3047240'>priority</span> <span m='3047650'>queues.</span> <span
  m='3049140'>This</span> <span m='3049310'>is</span> <span m='3049450'>a</span>
  <span m='3049510'>generic</span> <span m='3050810'>thing</span> <span
  m='3051020'>that you</span> <span m='3051200'>might</span> <span
  m='3051400'>want</span> <span m='3051570'>to</span> <span
  m='3051630'>do.</span> <span m='3052310'>And</span> <span
  m='3052450'>then</span> <span m='3052570'>the</span> <span
  m='3052670'>data</span> <span m='3052960'>structure</span> <span
  m='3053410'>on</span> <span m='3053490'>the</span> <span
  m='3053580'>other</span> <span m='3053740'>side</span> <span
  m='3055070'>is</span> <span m='3055180'>how</span> <span
  m='3055320'>you</span> <span m='3055510'>actually</span> <span
  m='3055880'>do</span> <span m='3056100'>it.</span> <span
  m='3057020'>This</span> <span m='3057190'>is</span> <span
  m='3057310'>the</span> <span m='3057470'>analog</span> <span
  m='3057870'>of</span> <span m='3058090'>the</span> <span
  m='3058210'>algorithm.</span> </p><p><span m='3060040'>OK,</span> <span
  m='3060290'>this</span> <span m='3060440'>is</span> <span
  m='3060540'>the</span> <span m='3060600'>specification.</span> <span
  m='3061370'>You</span> <span m='3061480'>want</span> <span
  m='3061690'>a</span> <span m='3061750'>priority</span> <span
  m='3062110'>queue.</span> <span m='3062580'>One</span> <span
  m='3062820'>way</span> <span m='3062930'>to</span> <span m='3063030'>do</span>
  <span m='3063160'>it</span> <span m='3063240'>is</span> <span
  m='3063360'>a</span> <span m='3063420'>heap.</span> <span
  m='3064700'>Another</span> <span m='3064980'>way</span> <span
  m='3065090'>to</span> <span m='3065190'>do</span> <span m='3065360'>it</span>
  <span m='3065770'>is</span> <span m='3065960'>an</span> <span
  m='3066860'>AVL</span> <span m='3067120'>tree.</span> <span
  m='3068480'>You</span> <span m='3068630'>could</span> <span
  m='3068760'>do</span> <span m='3068940'>it with</span> <span
  m='3069040'>a</span> <span m='3069230'>sorted</span> <span
  m='3069510'>array.</span> <span m='3069720'>You</span> <span
  m='3069820'>could</span> <span m='3069970'>do</span> <span
  m='3070100'>lots</span> <span m='3070350'>of</span> <span
  m='3070460'>sub-optimal</span> <span m='3071020'>things,</span> <span
  m='3071290'>too,</span> <span m='3072230'>but</span> <span
  m='3072410'>in</span> <span m='3072520'>particular,</span> <span
  m='3072990'>heaps</span> <span m='3073910'>get</span> <span
  m='3074100'>these</span> <span m='3074270'>two</span> <span
  m='3074390'>operations.</span> <span m='3074950'>If</span> <span
  m='3075120'>you</span> <span m='3075240'>want</span> <span
  m='3075420'>all</span> <span m='3075640'>three,</span> <span
  m='3077210'>you</span> <span m='3077330'>basically</span> <span
  m='3077770'>need</span> <span m='3078040'>a</span> <span
  m='3078090'>balanced</span> <span m='3079140'>binary</span> <span
  m='3079490'>search</span> <span m='3079760'>tree.</span> </p><p><span
  m='3083530'>There</span> <span m='3083660'>are</span> <span
  m='3083840'>probably</span> <span m='3084330'>a</span> <span
  m='3084390'>dozen</span> <span m='3084870'>balanced</span> <span
  m='3085280'>binary</span> <span m='3085540'>search</span> <span
  m='3085790'>trees</span> <span m='3086010'>out</span> <span
  m='3086190'>there,</span> <span m='3086450'>at</span> <span
  m='3086500'>least</span> <span m='3086850'>a</span> <span
  m='3087110'>dozen</span> <span m='3087370'>balanced</span> <span
  m='3087990'>search</span> <span m='3088390'>trees,</span> <span
  m='3088680'>not</span> <span m='3088830'>all</span> <span
  m='3088950'>binary.</span> <span m='3090370'>They</span> <span
  m='3090520'>all</span> <span m='3090720'>achieve</span> <span m='3091010'>log
  n.</span> <span m='3091760'>So</span> <span m='3092110'>it</span> <span
  m='3092180'>doesn't</span> <span m='3092450'>really</span> <span
  m='3092740'>matter.</span> <span m='3092990'>There are</span> <span
  m='3093140'>various</span> <span m='3093560'>practical</span> <span
  m='3094140'>issues,</span> <span m='3094920'>constant</span> <span
  m='3095250'>factors,</span> <span m='3095630'>things</span> <span
  m='3095820'>like</span> <span m='3095980'>that.</span> </p><p><span
  m='3096680'>The</span> <span m='3096780'>main</span> <span
  m='3096860'>reason</span> <span m='3097090'>you</span> <span
  m='3097210'>prefer a</span> <span m='3097570'>heap</span> <span m='3097990'>is
  that</span> <span m='3098290'>it's</span> <span m='3098720'>in</span> <span
  m='3098880'>place.</span> <span m='3099260'>It</span> <span
  m='3099330'>doesn't</span> <span m='3099560'>use</span> <span
  m='3099750'>any</span> <span m='3099920'>extra</span> <span
  m='3100200'>space.</span> <span m='3100990'>Here,</span> <span
  m='3101230'>you've</span> <span m='3101380'>got</span> <span
  m='3101580'>pointers</span> <span m='3101980'>all</span> <span
  m='3102160'>over</span> <span m='3102270'>the</span> <span
  m='3102380'>place.</span> <span m='3102670'>You</span> <span
  m='3102820'>lose</span> <span m='3103100'>a</span> <span
  m='3103150'>constant</span> <span m='3103510'>factor</span> <span
  m='3103780'>in</span> <span m='3103860'>space.</span> <span
  m='3106080'>But</span> <span m='3106540'>from</span> <span
  m='3106810'>a</span> <span m='3106860'>theoretical</span> <span
  m='3107340'>standpoint,</span> <span m='3107680'>if</span> <span
  m='3107740'>you</span> <span m='3107820'>don't</span> <span
  m='3107980'>care</span> <span m='3108100'>about</span> <span
  m='3108410'>constant</span> <span m='3108570'>factors,</span> <span
  m='3109020'>AVL</span> <span m='3109390'>trees</span> <span
  m='3110130'>are</span> <span m='3110330'>really</span> <span
  m='3110590'>good</span> <span m='3111500'>because</span> <span
  m='3112360'>they</span> <span m='3112540'>get</span> <span
  m='3112770'>everything</span> <span m='3113760'>that</span> <span
  m='3113880'>we've</span> <span m='3114000'>seen</span> <span
  m='3114160'>so</span> <span m='3114290'>far and</span> <span
  m='3114570'>log</span> <span m='3114650'>n.</span> <span
  m='3116680'>And</span> <span m='3117220'>I'll</span> <span
  m='3117690'>stop</span> <span m='3117940'>there.</span> </p>
embedded_media:
  - uid: 068767809a9bd3fca2b7c9cd2717e433
    parent_uid: 3ac96f3039c3e0bb24e9603d0c4aae3c
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: FNeL18KsWPc
  - uid: 9758703e71426559d4b62e83550b1f53
    parent_uid: 3ac96f3039c3e0bb24e9603d0c4aae3c
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/FNeL18KsWPc/default.jpg'
  - uid: 52befa41d8f3ab1eae0e9de067f49af2
    parent_uid: 3ac96f3039c3e0bb24e9603d0c4aae3c
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-6-avl-trees-avl-sort/id585700718?i=126127751
  - uid: 5bc8b37300a6d2461d2c46fb54a9fae1
    parent_uid: 3ac96f3039c3e0bb24e9603d0c4aae3c
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec06_300k.mp4'
  - uid: 8491dd8d8cba737868bb39a9556a69b7
    parent_uid: 3ac96f3039c3e0bb24e9603d0c4aae3c
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: FNeL18KsWPc
  - uid: 6e9fdfa3e0fb585ecc9138c860b7189b
    parent_uid: 3ac96f3039c3e0bb24e9603d0c4aae3c
    id: FNeL18KsWPc.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-6-avl-trees-avl-sort/FNeL18KsWPc.srt
  - uid: c1bb118f7b07d4e7cd684505708d3808
    parent_uid: 3ac96f3039c3e0bb24e9603d0c4aae3c
    id: FNeL18KsWPc.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-6-avl-trees-avl-sort/FNeL18KsWPc.pdf
  - uid: 6788999ea3cb8e5505acc1e94b878bfa
    parent_uid: 3ac96f3039c3e0bb24e9603d0c4aae3c
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: e3918c118cb2ec643ae62079bdc93892
    parent_uid: 3ac96f3039c3e0bb24e9603d0c4aae3c
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
