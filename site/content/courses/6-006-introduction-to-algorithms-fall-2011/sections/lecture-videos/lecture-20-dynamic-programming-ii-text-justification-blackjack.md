---
title: 'Lecture 20: Dynamic Programming II: Text Justification, Blackjack'
uid: b22b9a62f6fb04772c198d96c0ececbc
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-20-dynamic-programming-ii-text-justification-blackjack
short_url: lecture-20-dynamic-programming-ii-text-justification-blackjack
inline_embed_id: '7148627lecture20:dynamicprogrammingii:textjustification,blackjack88428205'
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture starts with a five-step process
  for dynamic programming, and then covers text justification and
  perfect-information blackjack. The lecture also describes how parent pointers
  are used to recover the solution.</p> <p><strong>Instructor:</strong> Erik
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
  m='12790'>materials</span> <span m='13330'>from</span> <span
  m='13480'>hundreds</span> <span m='13910'>of</span> <span m='14020'>MIT</span>
  <span m='14450'>courses,</span> <span m='15550'>visit</span> <span
  m='15770'>MIT</span> <span m='16200'>OpenCourseWare</span> <span
  m='17240'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='22560'>PROFESSOR: All</span> <span m='22640'>right,</span> <span
  m='23040'>today</span> <span m='23320'>we</span> <span
  m='23470'>continue</span> <span m='24000'>our</span> <span
  m='24140'>exciting</span> <span m='24630'>adventure</span> <span
  m='25120'>into</span> <span m='25330'>dynamic</span> <span
  m='25920'>programming.</span> <span m='27320'>Are</span> <span
  m='27380'>you</span> <span m='27580'>excited?</span> <span
  m='28630'>I'm</span> <span m='28870'>excited,</span> <span
  m='30145'>super</span> <span m='30630'>excited.</span> <span
  m='31810'>Dynamic</span> <span m='32159'>programming,</span> <span
  m='32650'>as</span> <span m='32860'>you</span> <span m='33020'>recall</span>
  <span m='33670'>way</span> <span m='33880'>back</span> <span
  m='34190'>before</span> <span m='34500'>Thanksgiving,</span> <span
  m='35330'>is</span> <span m='35970'>a</span> <span m='36040'>super</span>
  <span m='36360'>exciting</span> <span m='36890'>powerful</span> <span
  m='37390'>technique</span> <span m='37920'>to</span> <span
  m='38060'>design</span> <span m='38620'>algorithms,</span> <span
  m='39240'>especially</span> <span m='39830'>to</span> <span
  m='39990'>solve</span> <span m='40460'>optimization</span> <span
  m='41250'>problems</span> <span m='41690'>where</span> <span
  m='41820'>you</span> <span m='41930'>want</span> <span m='42110'>to</span>
  <span m='42220'>maximize</span> <span m='42910'>or</span> <span
  m='43060'>minimize</span> <span m='43520'>something.</span> <span
  m='44670'>Last</span> <span m='44970'>time,</span> <span m='45190'>we</span>
  <span m='45330'>saw</span> <span m='45660'>how</span> <span
  m='46670'>two</span> <span m='46990'>algorithms</span> <span
  m='47620'>we</span> <span m='48030'>already</span> <span
  m='48500'>knew--</span> <span m='49030'>namely,</span> <span
  m='49450'>how</span> <span m='49610'>to</span> <span m='49710'>compute</span>
  <span m='50030'>the</span> <span m='50160'>nth</span> <span
  m='50360'>Fibonacci</span> <span m='50890'>number</span> <span
  m='52380'>and</span> <span m='53140'>how</span> <span m='53370'>to</span>
  <span m='53590'>compute</span> <span m='53880'>shortest</span> <span
  m='54190'>paths</span> <span m='54550'>via</span> <span
  m='54850'>Bellman-Ford--</span> <span m='56130'>are</span> <span
  m='56330'>really</span> <span m='56700'>dynamic</span> <span
  m='57170'>programs</span> <span m='57830'>in</span> <span
  m='57970'>disguise.</span> </p><p><span m='58780'>And</span> <span
  m='58970'>indeed</span> <span m='59330'>for,</span> <span m='60190'>at</span>
  <span m='60280'>least</span> <span m='60450'>for</span> <span
  m='60560'>Bellman-Ford,</span> <span m='61270'>that's</span> <span
  m='61490'>how</span> <span m='61670'>they</span> <span m='61790'>were</span>
  <span m='61970'>invented,</span> <span m='63500'>was</span> <span
  m='63700'>to</span> <span m='63790'>apply</span> <span m='64120'>a</span>
  <span m='64190'>general</span> <span m='64560'>technique</span> <span
  m='64970'>which</span> <span m='65170'>we're</span> <span
  m='65280'>going</span> <span m='65410'>to</span> <span m='65680'>see</span>
  <span m='66000'>today</span> <span m='66530'>in</span> <span
  m='67760'>full</span> <span m='68010'>generality,</span> <span
  m='69160'>more</span> <span m='69430'>or</span> <span m='69450'>less--</span>
  <span m='69820'>most</span> <span m='70100'>of this</span> <span m='70280'>is
  generality--</span> <span m='71240'>in</span> <span m='71460'>five</span>
  <span m='71810'>easy</span> <span m='72150'>steps.</span> <span
  m='73230'>And</span> <span m='73970'>we're</span> <span m='74080'>going</span>
  <span m='74180'>to</span> <span m='74250'>see</span> <span
  m='74460'>that</span> <span m='74880'>technique</span> <span
  m='75220'>applied</span> <span m='75570'>to</span> <span m='75670'>two</span>
  <span m='75900'>new</span> <span m='76120'>problems</span> <span
  m='77120'>which</span> <span m='77350'>are</span> <span m='77430'>much</span>
  <span m='77650'>more</span> <span m='77840'>interesting</span> <span
  m='78390'>than</span> <span m='78610'>the</span> <span m='78690'>ones</span>
  <span m='78890'>we've</span> <span m='79020'>already</span> <span
  m='79290'>solved--</span> <span m='80210'>namely,</span> <span
  m='80600'>how</span> <span m='80880'>to</span> <span m='81090'>make</span>
  <span m='81340'>your</span> <span m='81540'>text</span> <span
  m='81920'>look</span> <span m='82120'>nice</span> <span m='82450'>in</span>
  <span m='82540'>a</span> <span m='82600'>paragraph,</span> <span
  m='83170'>where</span> <span m='83360'>to</span> <span m='83430'>break</span>
  <span m='83690'>the</span> <span m='83770'>lines.</span> <span
  m='84660'>That's</span> <span m='84900'>text</span> <span
  m='85180'>justification.</span> <span m='86320'>And</span> <span
  m='86470'>how</span> <span m='86710'>to</span> <span m='86890'>win</span>
  <span m='87240'>and</span> <span m='87340'>make</span> <span
  m='87720'>loads</span> <span m='88090'>of</span> <span m='88170'>money</span>
  <span m='88470'>at</span> <span m='88510'>blackjack.</span> <span
  m='89340'>So</span> <span m='89660'>lots</span> <span m='89900'>of</span>
  <span m='89970'>practical</span> <span m='90970'>stuff</span> <span
  m='91320'>here,</span> <span m='91670'>and</span> <span m='91830'>we're</span>
  <span m='91950'>going</span> <span m='92080'>to</span> <span
  m='93340'>see</span> <span m='93500'>one</span> <span m='94000'>new</span>
  <span m='94350'>technique</span> <span m='94910'>for</span> <span
  m='95980'>general</span> <span m='96310'>dynamic</span> <span
  m='96650'>programming.</span> </p><p><span m='97820'>These</span> <span
  m='98090'>are</span> <span m='98200'>some</span> <span m='99270'>things</span>
  <span m='99690'>I wrote</span> <span m='99940'>last</span> <span
  m='100250'>time.</span> <span m='100470'>Actually,</span> <span
  m='100700'>one</span> <span m='100880'>of</span> <span m='100940'>them</span>
  <span m='101100'>I</span> <span m='101150'>didn't</span> <span
  m='101400'>write</span> <span m='101600'>last</span> <span
  m='101890'>time.</span> <span m='102510'>In</span> <span
  m='102660'>general,</span> <span m='103130'>you</span> <span
  m='103230'>can</span> <span m='103290'>think</span> <span m='103460'>of</span>
  <span m='103550'>dynamic</span> <span m='103970'>programming</span> <span
  m='104500'>as</span> <span m='104890'>a</span> <span
  m='105190'>carefully</span> <span m='105720'>executed</span> <span
  m='106290'>brute</span> <span m='106520'>force</span> <span
  m='106900'>search.</span> <span m='107720'>So</span> <span
  m='107980'>in</span> <span m='108140'>some</span> <span
  m='108370'>sense,</span> <span m='109120'>your</span> <span
  m='109360'>algorithm</span> <span m='109760'>is</span> <span
  m='109880'>going</span> <span m='110070'>to</span> <span m='110130'>be</span>
  <span m='110250'>trying</span> <span m='110730'>all</span> <span
  m='111040'>the</span> <span m='111130'>possibilities,</span> <span
  m='112720'>but</span> <span m='112840'>somehow</span> <span
  m='113650'>avoiding</span> <span m='114130'>the</span> <span
  m='114210'>fact</span> <span m='114470'>that</span> <span m='114580'>there
  are</span> <span m='114720'>exponentially</span> <span m='115380'>many</span>
  <span m='115690'>of</span> <span m='115790'>them.</span> <span
  m='116550'>By</span> <span m='116670'>thinking</span> <span
  m='117170'>of</span> <span m='117370'>it in</span> <span m='117500'>a</span>
  <span m='117570'>clever</span> <span m='117910'>way,</span> <span
  m='118600'>you</span> <span m='118750'>can</span> <span
  m='118890'>reduce</span> <span m='119260'>the</span> <span
  m='119370'>exponential</span> <span m='119920'>search</span> <span
  m='120150'>space</span> <span m='120410'>down</span> <span
  m='120590'>to</span> <span m='120640'>a</span> <span
  m='120700'>polynomial</span> <span m='121290'>one,</span> <span
  m='121770'>even</span> <span m='122040'>though</span> <span
  m='122150'>you're</span> <span m='122290'>still</span> <span
  m='122700'>not</span> <span m='123070'>being</span> <span
  m='123290'>very</span> <span m='123510'>intelligent</span> <span
  m='124070'>you're</span> <span m='124210'>still</span> <span
  m='124570'>blindly</span> <span m='125160'>trying</span> <span
  m='125490'>all</span> <span m='125670'>possibilities.</span> <span
  m='127280'>So</span> <span m='127460'>that's</span> <span
  m='127680'>the</span> <span m='127770'>brute</span> <span
  m='128039'>force</span> <span m='128400'>part.</span> </p><p><span
  m='130630'>In</span> <span m='130860'>more</span> <span
  m='131060'>detail,</span> <span m='131620'>the</span> <span
  m='131740'>three</span> <span m='132090'>main</span> <span
  m='132370'>techniques</span> <span m='132970'>in</span> <span
  m='133200'>dynamic</span> <span m='133620'>programming</span> <span
  m='134520'>are the</span> <span m='134840'>idea</span> <span
  m='135100'>of</span> <span m='135250'>guessing,</span> <span
  m='136080'>the</span> <span m='136200'>idea</span> <span
  m='136610'>that,</span> <span m='137200'>oh,</span> <span m='137460'>I</span>
  <span m='137750'>want</span> <span m='138010'>to</span> <span
  m='138070'>find</span> <span m='138430'>the</span> <span
  m='138520'>best</span> <span m='138920'>way</span> <span m='139040'>to</span>
  <span m='139130'>solve</span> <span m='139430'>a</span> <span
  m='139500'>problem.</span> <span m='140280'>Let's</span> <span
  m='140560'>pick</span> <span m='140840'>out</span> <span
  m='141110'>some</span> <span m='141380'>feature</span> <span
  m='142480'>of</span> <span m='142880'>the</span> <span
  m='142990'>solution</span> <span m='143740'>that</span> <span
  m='143870'>I</span> <span m='143920'>want</span> <span m='144230'>to</span>
  <span m='144310'>know.</span> <span m='145540'>I</span> <span
  m='145670'>don't</span> <span m='145950'>know</span> <span
  m='146190'>it,</span> <span m='146620'>so</span> <span m='146890'>I'll</span>
  <span m='146990'>guess</span> <span m='147330'>the</span> <span
  m='147480'>answer--</span> <span m='148680'>meaning</span> <span
  m='149070'>I'll</span> <span m='149210'>try</span> <span m='149560'>all</span>
  <span m='149870'>the</span> <span m='149950'>possibilities</span> <span
  m='150700'>for</span> <span m='150820'>that</span> <span
  m='151100'>choice</span> <span m='152540'>and</span> <span
  m='153220'>take</span> <span m='153470'>the</span> <span
  m='153550'>best</span> <span m='153830'>one.</span> <span m='154920'>So</span>
  <span m='155130'>guessing</span> <span m='155530'>is</span> <span
  m='155660'>really</span> <span m='155890'>central</span> <span
  m='156330'>to</span> <span m='156430'>dynamic</span> <span
  m='156840'>programming.</span> </p><p><span m='158020'>Then</span> <span
  m='159190'>we</span> <span m='160010'>also</span> <span m='160300'>use</span>
  <span m='160550'>a</span> <span m='160700'>recursion,</span> <span
  m='161780'>some</span> <span m='162080'>way</span> <span m='162240'>to</span>
  <span m='162420'>express</span> <span m='162960'>the</span> <span
  m='163050'>solution</span> <span m='163490'>to</span> <span
  m='163590'>our</span> <span m='163710'>problem</span> <span
  m='165130'>in</span> <span m='165280'>terms</span> <span m='165680'>of</span>
  <span m='165810'>solutions</span> <span m='166250'>to</span> <span
  m='166350'>sub-problems.</span> <span m='167970'>So</span> <span
  m='168170'>it's</span> <span m='168480'>usually</span> <span
  m='168790'>very</span> <span m='169040'>easy</span> <span m='169290'>to</span>
  <span m='169360'>get</span> <span m='169530'>a</span> <span
  m='169570'>recursion</span> <span m='170150'>for</span> <span
  m='170490'>a</span> <span m='170540'>lot</span> <span m='170710'>of</span>
  <span m='170790'>problems</span> <span m='171190'>as</span> <span
  m='171330'>long</span> <span m='171490'>as</span> <span m='171570'>they</span>
  <span m='171660'>have</span> <span m='171830'>some</span> <span
  m='172080'>kind</span> <span m='172350'>of</span> <span
  m='172440'>substructure.</span> <span m='173810'>Like</span> <span
  m='173950'>shortest</span> <span m='174330'>paths,</span> <span
  m='174700'>we</span> <span m='174810'>had</span> <span m='175070'>that</span>
  <span m='175270'>some</span> <span m='175580'>paths</span> <span
  m='175800'>of</span> <span m='175850'>shortest</span> <span
  m='176170'>paths</span> <span m='176390'>were</span> <span
  m='176500'>also</span> <span m='176760'>shortest</span> <span
  m='177150'>paths,</span> <span m='178010'>so</span> <span
  m='178030'>that</span> <span m='178190'>was</span> <span
  m='178320'>handy.</span> <span m='179310'>Usually</span> <span
  m='179770'>the</span> <span m='179850'>recursion</span> <span
  m='180280'>by</span> <span m='180420'>itself</span> <span m='180810'>is</span>
  <span m='180970'>exponential</span> <span m='181540'>time,</span> <span
  m='182190'>like</span> <span m='182410'>even</span> <span
  m='182640'>with</span> <span m='182800'>Fibonacci</span> <span
  m='183350'>numbers.</span> </p><p><span m='184140'>But</span> <span
  m='184270'>we</span> <span m='184400'>add</span> <span m='184640'>in</span>
  <span m='184750'>this</span> <span m='184920'>technique</span> <span
  m='185280'>of</span> <span m='185350'>memoization,</span> <span
  m='186240'>which</span> <span m='186430'>is</span> <span
  m='186580'>just</span> <span m='187210'>once</span> <span m='187440'>we</span>
  <span m='187570'>compute</span> <span m='187920'>an</span> <span
  m='188020'>answer</span> <span m='188380'>we've</span> <span
  m='188590'>stored</span> <span m='188970'>in</span> <span m='189070'>a</span>
  <span m='189130'>lookup</span> <span m='189480'>table,</span> <span
  m='189940'>if</span> <span m='190070'>we</span> <span m='190160'>ever</span>
  <span m='190340'>need</span> <span m='190490'>that</span> <span
  m='190640'>answer</span> <span m='190900'>again</span> <span
  m='191180'>we</span> <span m='191320'>reuse</span> <span m='191750'>it</span>
  <span m='192160'>instead</span> <span m='192460'>of</span> <span
  m='192540'>recomputing</span> <span m='193160'>it.</span> <span
  m='193900'>So</span> <span m='194070'>we</span> <span m='194160'>store</span>
  <span m='194430'>it.</span> <span m='195170'>We</span> <span
  m='195510'>write</span> <span m='195840'>down</span> <span
  m='196080'>in</span> <span m='196160'>our</span> <span m='196250'>memo</span>
  <span m='196540'>pad</span> <span m='196880'>anything</span> <span
  m='197290'>that</span> <span m='197420'>we</span> <span
  m='197650'>compute.</span> <span m='199610'>Those</span> <span
  m='199870'>techniques,</span> <span m='200400'>all</span> <span
  m='200630'>these</span> <span m='200810'>techniques</span> <span
  m='201200'>together</span> <span m='202360'>give</span> <span
  m='202550'>you,</span> <span m='203000'>typically,</span> <span
  m='203530'>a</span> <span m='203580'>polynomial</span> <span
  m='204190'>time</span> <span m='204610'>dynamic</span> <span
  m='204990'>program--</span> <span m='205400'>when</span> <span
  m='205580'>they</span> <span m='205690'>work,</span> <span
  m='205960'>of</span> <span m='206090'>course.</span> <span
  m='206880'>Memoization</span> <span m='207610'>makes</span> <span
  m='207820'>the</span> <span m='207890'>recursion</span> <span
  m='208290'>polynomial</span> <span m='208800'>time.</span> <span
  m='209500'>The</span> <span m='209590'>guessing</span> <span
  m='210190'>is</span> <span m='210400'>what</span> <span m='210850'>is</span>
  <span m='211120'>doing</span> <span m='211470'>a</span> <span
  m='211520'>brute</span> <span m='211820'>force</span> <span
  m='212100'>search.</span> <span m='213260'>And</span> <span
  m='213490'>magically,</span> <span m='214090'>it</span> <span
  m='214180'>all</span> <span m='214410'>works</span> <span m='215335'>if</span>
  <span m='215610'>you're</span> <span m='215750'>careful.</span> </p><p><span
  m='217610'>Another</span> <span m='218450'>perspective--</span> <span
  m='220250'>kind</span> <span m='220440'>of</span> <span m='220550'>an</span>
  <span m='220720'>orthogonal</span> <span m='221270'>perspective</span> <span
  m='221850'>or</span> <span m='221920'>another</span> <span
  m='222170'>way</span> <span m='222300'>of</span> <span
  m='222400'>thinking</span> <span m='222670'>about</span> <span
  m='222910'>it,</span> <span m='222990'>which</span> <span m='223220'>I</span>
  <span m='223290'>think</span> <span m='223480'>should</span> <span
  m='223660'>be</span> <span m='223790'>comfortable</span> <span
  m='224300'>for</span> <span m='224440'>you</span> <span
  m='224600'>because</span> <span m='224910'>we</span> <span
  m='225010'>spent</span> <span m='225210'>a</span> <span m='225270'>lot</span>
  <span m='225510'>of</span> <span m='225580'>time</span> <span
  m='225820'>doing</span> <span m='226020'>shortest</span> <span
  m='226370'>paths</span> <span m='227430'>and</span> <span
  m='227610'>expressing</span> <span m='228170'>problems</span> <span
  m='229140'>that</span> <span m='229250'>we</span> <span m='229350'>care</span>
  <span m='229620'>about</span> <span m='229930'>in</span> <span
  m='230030'>terms</span> <span m='230340'>of</span> <span
  m='230400'>shortest</span> <span m='230730'>paths</span> <span
  m='231040'>even</span> <span m='231230'>if</span> <span m='231350'>they</span>
  <span m='231440'>don't</span> <span m='231620'>look</span> <span
  m='231840'>like</span> <span m='232050'>it</span> <span m='232160'>at</span>
  <span m='232310'>first</span> <span m='232560'>glance--</span> <span
  m='233750'>dynamic</span> <span m='234140'>programming</span> <span
  m='234610'>in</span> <span m='234690'>some</span> <span
  m='234930'>sense</span> <span m='235340'>is</span> <span
  m='235590'>always</span> <span m='236720'>computing</span> <span
  m='237160'>shortest</span> <span m='237560'>paths</span> <span
  m='238080'>in</span> <span m='238290'>a</span> <span m='238550'>DAG.</span>
  <span m='240230'>So</span> <span m='240420'>you</span> <span
  m='240520'>have</span> <span m='240730'>some</span> <span
  m='240890'>problem</span> <span m='241170'>you</span> <span
  m='241310'>want</span> <span m='241420'>to</span> <span
  m='241470'>solve,</span> <span m='241870'>like</span> <span
  m='242060'>you</span> <span m='242130'>have</span> <span
  m='242390'>text</span> <span m='242760'>you</span> <span
  m='242920'>want</span> <span m='243110'>to</span> <span
  m='243350'>split</span> <span m='243800'>up</span> <span
  m='244070'>into</span> <span m='244320'>lines</span> <span
  m='244620'>so</span> <span m='244760'>it</span> <span m='244800'>looks</span>
  <span m='245020'>nice</span> <span m='245270'>in</span> <span
  m='245360'>a</span> <span m='245410'>paragraph,</span> <span
  m='248400'>you</span> <span m='248640'>express</span> <span
  m='249220'>that</span> <span m='249840'>problem</span> <span
  m='250330'>somehow</span> <span m='251100'>as</span> <span m='251270'>a</span>
  <span m='251330'>directed</span> <span m='251750'>acyclic</span> <span
  m='252200'>graph.</span> </p><p><span m='253530'>And</span> <span
  m='254060'>then</span> <span m='254230'>we</span> <span m='254330'>know</span>
  <span m='254510'>how</span> <span m='254610'>to</span> <span
  m='254710'>compute</span> <span m='254990'>shortest</span> <span
  m='255330'>path</span> <span m='255620'>in</span> <span
  m='255710'>directed</span> <span m='256050'>acyclic</span> <span
  m='256470'>graphs</span> <span m='256760'>in</span> <span
  m='256860'>linear</span> <span m='257170'>time.</span> <span
  m='258160'>And</span> <span m='258290'>that's</span> <span
  m='258540'>basically</span> <span m='259000'>what</span> <span
  m='259130'>dynamic</span> <span m='259529'>programming</span> <span
  m='259930'>is</span> <span m='260050'>doing.</span> <span m='261019'>I</span>
  <span m='261160'>didn't</span> <span m='261420'>realize</span> <span
  m='261880'>this</span> <span m='262150'>until</span> <span
  m='262620'>last</span> <span m='262940'>week,</span> <span
  m='263760'>so</span> <span m='263940'>this</span> <span m='264110'>is</span>
  <span m='264230'>a</span> <span m='264290'>new</span> <span
  m='264440'>perspective.</span> <span m='264990'>It's an</span> <span
  m='265130'>experimental</span> <span m='266080'>perspective.</span> <span
  m='266600'>But</span> <span m='266710'>I</span> <span m='266780'>think</span>
  <span m='266980'>it's</span> <span m='267120'>helpful.</span> <span
  m='267440'>It's</span> <span m='267560'>actually--</span> <span
  m='267990'>dynamic</span> <span m='268380'>programming</span> <span
  m='268760'>is</span> <span m='268870'>not</span> <span m='269360'>that</span>
  <span m='269690'>new.</span> <span m='270910'>It's</span> <span
  m='271060'>all</span> <span m='271230'>about</span> <span
  m='271470'>how</span> <span m='271630'>to</span> <span m='271720'>be</span>
  <span m='271860'>clever</span> <span m='272350'>in</span> <span
  m='272440'>setting</span> <span m='272820'>up</span> <span
  m='272960'>that</span> <span m='273200'>DAG.</span> <span
  m='273700'>But</span> <span m='273830'>in</span> <span m='273940'>the</span>
  <span m='274050'>end,</span> <span m='274200'>the</span> <span
  m='274280'>algorithm</span> <span m='274780'>is</span> <span
  m='274920'>very</span> <span m='275090'>simple.</span> </p><p><span
  m='277680'>And</span> <span m='277890'>then</span> <span m='278000'>we</span>
  <span m='278120'>had</span> <span m='278460'>this</span> <span
  m='278630'>other</span> <span m='278870'>perspective--</span> <span
  m='281300'>back</span> <span m='281520'>to</span> <span m='281620'>this</span>
  <span m='281820'>perspective,</span> <span m='282320'>I</span> <span
  m='282410'>guess.</span> <span m='283580'>In</span> <span
  m='283740'>general,</span> <span m='284200'>we</span> <span
  m='284310'>have--</span> <span m='285100'>the</span> <span
  m='285330'>real</span> <span m='285560'>problem</span> <span
  m='285830'>we</span> <span m='285920'>want</span> <span m='286090'>to</span>
  <span m='286160'>solve,</span> <span m='287020'>we</span> <span
  m='288720'>generalize</span> <span m='289340'>it</span> <span
  m='289420'>in</span> <span m='289480'>some</span> <span
  m='289710'>sense</span> <span m='289970'>by</span> <span
  m='290080'>considering</span> <span m='290560'>lots</span> <span
  m='290840'>of</span> <span m='290920'>different</span> <span
  m='291250'>sub-problems</span> <span m='291940'>that</span> <span
  m='292050'>we</span> <span m='292180'>might</span> <span
  m='292480'>care</span> <span m='292790'>about.</span> <span
  m='293750'>Like</span> <span m='294290'>with</span> <span
  m='294480'>Fibonacci,</span> <span m='295090'>we</span> <span
  m='295240'>had</span> <span m='295640'>the</span> <span m='295760'>nth</span>
  <span m='295950'>Fibonacci</span> <span m='296440'>number.</span> <span
  m='299210'>We</span> <span m='299410'>really</span> <span
  m='299660'>just</span> <span m='299830'>wanted</span> <span
  m='299960'>the</span> <span m='300010'>nth</span> <span
  m='300230'>Fibonacci</span> <span m='300740'>number.</span> <span
  m='301040'>But</span> <span m='301180'>along</span> <span
  m='301480'>the</span> <span m='301560'>way,</span> <span
  m='301750'>we're</span> <span m='301860'>going</span> <span
  m='301950'>to</span> <span m='302020'>compute</span> <span
  m='302360'>all</span> <span m='302770'>f1</span> <span m='303270'>up</span>
  <span m='303380'>to</span> <span m='303480'>fn.</span> </p><p><span
  m='304410'>So</span> <span m='304580'>those</span> <span m='304790'>are</span>
  <span m='304960'>our</span> <span m='305190'>sub-problems.</span> <span
  m='306430'>And</span> <span m='306730'>if</span> <span m='306880'>we</span>
  <span m='307010'>compute</span> <span m='307490'>the</span> <span
  m='307620'>amount</span> <span m='307800'>of</span> <span
  m='307890'>time</span> <span m='308180'>we</span> <span m='308260'>need</span>
  <span m='308460'>to</span> <span m='308540'>solve</span> <span
  m='308900'>each</span> <span m='309070'>sub-problem</span> <span
  m='310460'>and</span> <span m='310620'>multiply</span> <span
  m='311100'>that</span> <span m='311270'>by</span> <span m='311390'>the</span>
  <span m='311480'>number of</span> <span m='311830'>sub-problems</span> <span
  m='312270'>we</span> <span m='312400'>get,</span> <span m='312680'>the</span>
  <span m='312780'>total</span> <span m='313090'>time</span> <span
  m='313880'>required by</span> <span m='314180'>the</span> <span
  m='314340'>algorithm.</span> <span m='314900'>This</span> <span
  m='314990'>is</span> <span m='315130'>a</span> <span m='315190'>general</span>
  <span m='316360'>true</span> <span m='316630'>fact.</span> <span
  m='318130'>And</span> <span m='318390'>the</span> <span m='318470'>fun</span>
  <span m='318690'>part</span> <span m='318920'>here</span> <span
  m='319110'>is</span> <span m='319200'>we</span> <span m='319270'>get</span>
  <span m='319440'>to</span> <span m='319550'>treat</span> <span
  m='320260'>any</span> <span m='320510'>recursive</span> <span
  m='321100'>calls</span> <span m='321710'>in</span> <span
  m='321860'>this</span> <span m='322040'>recursion</span> <span
  m='323430'>as</span> <span m='323750'>free,</span> <span m='324230'>as</span>
  <span m='324410'>constant</span> <span m='324860'>time,</span> <span
  m='326010'>because</span> <span m='326990'>we</span> <span
  m='327130'>really</span> <span m='327410'>only</span> <span
  m='327610'>pay</span> <span m='327860'>for</span> <span m='328070'>it</span>
  <span m='328220'>first</span> <span m='328590'>time.</span> <span
  m='329310'>That's</span> <span m='329630'>counted</span> <span
  m='330010'>out</span> <span m='330170'>here.</span> <span
  m='330990'>The</span> <span m='331080'>second</span> <span
  m='331440'>time</span> <span m='331670'>we</span> <span m='331780'>call</span>
  <span m='332080'>it,</span> <span m='332240'>it's</span> <span
  m='332430'>already</span> <span m='332740'>memoized,</span> <span
  m='333360'>so</span> <span m='333560'>we</span> <span m='333630'>don't</span>
  <span m='333770'>have</span> <span m='333900'>to</span> <span
  m='334000'>pay</span> <span m='334180'>for</span> <span m='334440'>it.</span>
  </p><p><span m='336300'>So</span> <span m='336570'>this</span> <span
  m='336770'>is,</span> <span m='336940'>in</span> <span m='337100'>some</span>
  <span m='337280'>sense, an</span> <span m='337500'>amortization,</span> <span
  m='338430'>if</span> <span m='338550'>you</span> <span
  m='338720'>remember</span> <span m='339050'>amortization</span> <span
  m='339840'>from</span> <span m='340310'>table</span> <span
  m='340650'>doubling.</span> <span m='342100'>We're</span> <span
  m='342200'>just</span> <span m='342670'>changing</span> <span
  m='343120'>around</span> <span m='343590'>when</span> <span
  m='343850'>we</span> <span m='344030'>count</span> <span m='344810'>the</span>
  <span m='344910'>cost</span> <span m='345270'>of</span> <span
  m='345340'>each</span> <span m='345480'>sub-problem,</span> <span
  m='346000'>and</span> <span m='346110'>then</span> <span
  m='346260'>this</span> <span m='346440'>is</span> <span m='346570'>the</span>
  <span m='346690'>total</span> <span m='347600'>running</span> <span
  m='347880'>time.</span> <span m='349390'>OK,</span> <span m='349630'>so</span>
  <span m='349840'>that's</span> <span m='350190'>the</span> <span
  m='350310'>spirit</span> <span m='351740'>we</span> <span
  m='351910'>saw</span> <span m='352230'>already.</span> <span
  m='353300'>I'm</span> <span m='353460'>going</span> <span m='353550'>to</span>
  <span m='353600'>give</span> <span m='353820'>you</span> <span
  m='354010'>the</span> <span m='354120'>five</span> <span
  m='354470'>general</span> <span m='354780'>steps,</span> <span
  m='355180'>and</span> <span m='355290'>then</span> <span
  m='355390'>we're</span> <span m='355510'>going</span> <span
  m='355630'>to</span> <span m='355690'>apply</span> <span
  m='356050'>them</span> <span m='356290'>to</span> <span m='356555'>two</span>
  <span m='356820'>new</span> <span m='356970'>problems.</span> </p><p><span
  m='359700'>So</span> <span m='361620'>five</span> <span m='362860'>easy</span>
  <span m='364230'>steps</span> <span m='366300'>to</span> <span
  m='366680'>dynamic</span> <span m='367140'>programming.</span> <span
  m='374060'>Unfortunately,</span> <span m='374580'>these</span> <span
  m='374760'>are</span> <span m='374820'>not</span> <span
  m='375000'>necessarily</span> <span m='375480'>sequential</span> <span
  m='375980'>steps.</span> <span m='376390'>They're</span> <span
  m='376560'>a</span> <span m='376600'>little</span> <span m='376790'>bit</span>
  <span m='376940'>interdependent,</span> <span m='377980'>and</span> <span
  m='378300'>so</span> <span m='378500'>"easy"</span> <span
  m='379360'>should</span> <span m='379550'>be</span> <span m='379680'>in</span>
  <span m='379800'>quotes.</span> <span m='381390'>This</span> <span
  m='381570'>is</span> <span m='381690'>how</span> <span m='381810'>you</span>
  <span m='383880'>would</span> <span m='384330'>express</span> <span
  m='385090'>a</span> <span m='385230'>dynamic</span> <span
  m='385520'>program,</span> <span m='386510'>and</span> <span
  m='386870'>in</span> <span m='387030'>some</span> <span
  m='387330'>sense</span> <span m='387580'>how</span> <span
  m='387710'>you'd</span> <span m='387940'>invent</span> <span
  m='388300'>one,</span> <span m='389550'>but</span> <span m='389670'>in</span>
  <span m='389750'>particular</span> <span m='390180'>how</span> <span
  m='390310'>you</span> <span m='390450'>would</span> <span
  m='390550'>explain</span> <span m='391060'>one.</span> </p><p><span
  m='392740'>OK,</span> <span m='393520'>let</span> <span m='393920'>me</span>
  <span m='394070'>get</span> <span m='394290'>to</span> <span
  m='394400'>the</span> <span m='394830'>main</span> <span
  m='395020'>steps</span> <span m='395540'>first.</span> <span
  m='402890'>First</span> <span m='403190'>step</span> <span
  m='403610'>is</span> <span m='404220'>to</span> <span m='404840'>figure</span>
  <span m='405140'>out</span> <span m='405240'>what</span> <span
  m='405410'>your</span> <span m='405550'>sub-problems</span> <span
  m='406170'>are</span> <span m='406230'>going</span> <span m='406350'>to</span>
  <span m='406410'>be.</span> <span m='408540'>Second</span> <span
  m='408860'>part</span> <span m='409070'>is</span> <span m='409170'>to</span>
  <span m='409270'>guess</span> <span m='409500'>something.</span> <span
  m='411280'>Third</span> <span m='411520'>step</span> <span
  m='412780'>is</span> <span m='413060'>to</span> <span m='417720'>relate</span>
  <span m='418180'>sub-problem</span> <span m='418750'>solutions,</span> <span
  m='419380'>usually</span> <span m='419780'>with</span> <span
  m='420020'>a</span> <span m='420140'>recurrence.</span> <span
  m='422720'>I</span> <span m='422910'>guess</span> <span
  m='423140'>always</span> <span m='423460'>with</span> <span
  m='423620'>a</span> <span m='423660'>recurrence.</span> <span
  m='428100'>Fourth</span> <span m='428400'>step</span> <span
  m='429030'>is</span> <span m='430100'>to</span> <span
  m='430260'>actually</span> <span m='430890'>build</span> <span
  m='431200'>an</span> <span m='431280'>algorithm.</span> </p><p><span
  m='440730'>And</span> <span m='440870'>we</span> <span m='440980'>saw</span>
  <span m='441170'>two</span> <span m='441430'>ways</span> <span
  m='441720'>to</span> <span m='441810'>do</span> <span m='441930'>that</span>
  <span m='442140'>last</span> <span m='442420'>time.</span> <span
  m='442700'>One</span> <span m='442900'>is</span> <span m='443050'>to</span>
  <span m='443140'>use</span> <span m='443290'>recursion</span> <span
  m='443950'>and</span> <span m='444130'>memoization,</span> <span
  m='444830'>which</span> <span m='445020'>is</span> <span m='445100'>the</span>
  <span m='445210'>way</span> <span m='445330'>I</span> <span
  m='445420'>like</span> <span m='445680'>to</span> <span
  m='445770'>think</span> <span m='445960'>about</span> <span
  m='446240'>it.</span> <span m='446470'>But</span> <span m='446900'>if</span>
  <span m='447060'>you</span> <span m='447180'>prefer,</span> <span
  m='448380'>you</span> <span m='448490'>can</span> <span
  m='449700'>follow</span> <span m='449960'>the</span> <span
  m='450080'>bottom</span> <span m='450410'>up</span> <span
  m='450580'>approach.</span> <span m='453150'>And</span> <span
  m='453230'>usually</span> <span m='453570'>that's</span> <span
  m='453940'>called</span> <span m='455240'>building</span> <span
  m='455500'>a</span> <span m='455580'>table.</span> <span m='460910'>And</span>
  <span m='461080'>that</span> <span m='461220'>one's</span> <span
  m='461380'>basically to</span> <span m='461740'>turn</span> <span
  m='462180'>our</span> <span m='462350'>recursion</span> <span
  m='462605'>and</span> <span m='462860'>memoization,</span> <span
  m='463630'>which</span> <span m='463820'>is</span> <span
  m='463930'>kind</span> <span m='464130'>of</span> <span
  m='464210'>fancy,</span> <span m='465260'>into</span> <span
  m='466350'>a</span> <span m='466450'>bunch</span> <span m='466680'>of
  for</span> <span m='466760'>loops,</span> <span m='467560'>which</span> <span
  m='467730'>is</span> <span m='467830'>pretty</span> <span
  m='468100'>simple.</span> <span m='468790'>And</span> <span
  m='468970'>this</span> <span m='469120'>is</span> <span
  m='469220'>going</span> <span m='469350'>to</span> <span m='469410'>be</span>
  <span m='469920'>more</span> <span m='470080'>practical,</span> <span
  m='470620'>faster,</span> <span m='471570'>and</span> <span
  m='471680'>so</span> <span m='471840'>on.</span> <span m='472550'>And</span>
  <span m='472780'>depending</span> <span m='473190'>on</span> <span
  m='473330'>your</span> <span m='473800'>preference,</span> <span
  m='474280'>one</span> <span m='474450'>of</span> <span m='474510'>them</span>
  <span m='474680'>is</span> <span m='474770'>more</span> <span
  m='474960'>intuitive</span> <span m='475360'>than</span> <span
  m='475450'>the</span> <span m='475580'>other.</span> <span
  m='476290'>It</span> <span m='476400'>doesn't</span> <span
  m='476640'>matter.</span> <span m='477060'>They</span> <span
  m='477320'>have</span> <span m='477440'>the</span> <span
  m='477530'>same</span> <span m='477750'>running</span> <span
  m='477990'>time,</span> <span m='480910'>more</span> <span
  m='481130'>or</span> <span m='481150'>less,</span> <span m='482306'>in</span>
  <span m='482690'>the</span> <span m='482830'>worst</span> <span
  m='483050'>case.</span> </p><p><span m='487860'>Then</span> <span
  m='487980'>the</span> <span m='488070'>fifth</span> <span
  m='488340'>step</span> <span m='489470'>is</span> <span m='489630'>to</span>
  <span m='489750'>solve</span> <span m='490150'>the</span> <span
  m='490260'>original</span> <span m='490620'>problem.</span> <span
  m='498946'>All</span> <span m='499432'>right,</span> <span
  m='500410'>so</span> <span m='501220'>we've</span> <span
  m='501410'>sort</span> <span m='501670'>of</span> <span m='501760'>seen</span>
  <span m='502020'>this</span> <span m='502200'>before.</span> <span
  m='502670'>In</span> <span m='502790'>fact</span> <span m='503170'>I</span>
  <span m='503310'>have,</span> <span m='504140'>over</span> <span
  m='504390'>here,</span> <span m='504860'>a</span> <span
  m='504940'>convenient</span> <span m='505460'>table.</span> <span
  m='508320'>It's</span> <span m='508540'>called</span> <span
  m='508740'>cheating.</span> <span m='510520'>The</span> <span
  m='510650'>two</span> <span m='510790'>problems</span> <span
  m='511170'>we</span> <span m='511270'>saw</span> <span m='511460'>last</span>
  <span m='511770'>time,</span> <span m='511980'>Fibonacci</span> <span
  m='512510'>numbers</span> <span m='512925'>and</span> <span
  m='513340'>shortest</span> <span m='513770'>paths.</span> <span
  m='514929'>And</span> <span m='515169'>I've</span> <span m='515280'>got</span>
  <span m='515500'>steps</span> <span m='515789'>one,</span> <span
  m='516230'>two,</span> <span m='516500'>three,</span> <span
  m='516840'>four--</span> <span m='517100'>I ran out of</span> <span
  m='517490'>room,</span> <span m='517720'>so</span> <span m='517860'>I</span>
  <span m='517960'>didn't</span> <span m='518210'>write</span> <span
  m='518429'>five</span> <span m='518700'>yet.</span> <span
  m='519440'>But</span> <span m='519480'>we'll</span> <span
  m='519610'>get</span> <span m='519780'>there.</span> </p><p><span
  m='520690'>So</span> <span m='521289'>what</span> <span m='521480'>are
  our</span> <span m='521650'>sub-problems?</span> <span m='522890'>Well,</span>
  <span m='523940'>for</span> <span m='524150'>Fibonacci,</span> <span
  m='525510'>they</span> <span m='525640'>were</span> <span m='526030'>f1</span>
  <span m='526430'>through</span> <span m='526580'>fn.</span> <span
  m='527430'>So</span> <span m='527600'>there</span> <span
  m='527770'>were</span> <span m='528060'>n</span> <span
  m='528300'>different</span> <span m='528600'>sub-problems.</span> <span
  m='529300'>And</span> <span m='529420'>in</span> <span
  m='529500'>general</span> <span m='530480'>because</span> <span
  m='530990'>of</span> <span m='531190'>this</span> <span
  m='531530'>formula,</span> <span m='533010'>we</span> <span
  m='533150'>want</span> <span m='533350'>to</span> <span
  m='533420'>count</span> <span m='534210'>how</span> <span
  m='534410'>many</span> <span m='534650'>sub-problems</span> <span
  m='535350'>are</span> <span m='535510'>there.</span> <span
  m='537360'>So</span> <span m='545990'>number of</span> <span
  m='546240'>sub-problems</span> <span m='547030'>is--</span> <span
  m='547430'>this</span> <span m='547830'>is</span> <span m='548170'>what</span>
  <span m='548350'>we</span> <span m='548450'>need</span> <span
  m='548620'>to</span> <span m='548730'>do</span> <span
  m='549680'>algorithmically.</span> <span m='550610'>And</span> <span
  m='550750'>then</span> <span m='550890'>for</span> <span
  m='551050'>analysis,</span> <span m='551860'>we</span> <span
  m='551910'>want</span> <span m='552080'>to</span> <span
  m='552490'>counter</span> <span m='553130'>number of</span> <span
  m='553430'>sub-problems</span> <span m='554590'>for</span> <span
  m='554820'>step</span> <span m='555120'>one.</span> <span
  m='555640'>And</span> <span m='555810'>so</span> <span m='555960'>for</span>
  <span m='556090'>Fibonacci</span> <span m='556610'>there</span> <span
  m='556730'>were</span> <span m='556840'>n</span> <span m='557010'>of</span>
  <span m='557120'>them.</span> </p><p><span m='557680'>For</span> <span
  m='557830'>shortest</span> <span m='558200'>paths,</span> <span
  m='559140'>we</span> <span m='560300'>defined</span> <span
  m='560700'>this</span> <span m='560930'>delta</span> <span
  m='561380'>sub</span> <span m='561750'>k</span> <span m='563670'>of</span>
  <span m='564230'>sv.</span> <span m='564490'>This</span> <span
  m='564680'>was</span> <span m='564840'>the</span> <span
  m='564940'>shortest</span> <span m='565460'>path</span> <span
  m='565800'>from</span> <span m='566000'>s</span> <span m='566260'>to</span>
  <span m='566370'>v</span> <span m='566920'>they</span> <span
  m='567040'>uses</span> <span m='567390'>at</span> <span m='567500'>most</span>
  <span m='567810'>k</span> <span m='568120'>edges.</span> <span
  m='569170'>That</span> <span m='569360'>was</span> <span
  m='569510'>sort</span> <span m='569700'>of</span> <span m='569780'>what</span>
  <span m='570010'>Bellman-Ford</span> <span m='570480'>was</span> <span
  m='570690'>doing.</span> <span m='571840'>And</span> <span
  m='572860'>the</span> <span m='572950'>number</span> <span
  m='573790'>of</span> <span m='573860'>different</span> <span
  m='574180'>sub-problems</span> <span m='574690'>here</span> <span
  m='574870'>was</span> <span m='575100'>v</span> <span
  m='575280'>squared,</span> <span m='576100'>because</span> <span
  m='576420'>we</span> <span m='576510'>had</span> <span m='576630'>to</span>
  <span m='576710'>do</span> <span m='576830'>this</span> <span
  m='577020'>for</span> <span m='577200'>every</span> <span
  m='577500'>vertex</span> <span m='577990'>v</span> <span m='579090'>and</span>
  <span m='579270'>we</span> <span m='579370'>had</span> <span
  m='579550'>to</span> <span m='579620'>do</span> <span m='579760'>it</span>
  <span m='579860'>for</span> <span m='579970'>every</span> <span
  m='580160'>value</span> <span m='580480'>of</span> <span m='580570'>k</span>
  <span m='580830'>between</span> <span m='581250'>0</span> <span
  m='581660'>and</span> <span m='582060'>v</span> <span m='582220'>minus</span>
  <span m='582580'>1.</span> <span m='582960'>v</span> <span
  m='583430'>minus</span> <span m='583720'>was</span> <span m='583930'>is</span>
  <span m='584040'>the</span> <span m='584130'>number</span> <span
  m='584420'>of</span> <span m='584490'>rounds</span> <span m='584850'>we</span>
  <span m='584960'>need</span> <span m='585190'>in</span> <span
  m='585360'>Bellman-Ford.</span> <span m='586970'>So</span> <span
  m='587310'>it's</span> <span m='587850'>v</span> <span m='588110'>times</span>
  <span m='588430'>v,</span> <span m='589110'>different</span> <span
  m='589500'>sub-problems,</span> <span m='590720'>b</span> <span
  m='590840'>squared of</span> <span m='591100'>them.</span> </p><p><span
  m='592460'>OK,</span> <span m='592640'>second</span> <span
  m='593080'>thing</span> <span m='593790'>was</span> <span m='594360'>we</span>
  <span m='594530'>wanted</span> <span m='594840'>to</span> <span
  m='594940'>solve</span> <span m='595240'>our</span> <span
  m='595340'>problem.</span> <span m='596540'>And</span> <span
  m='596950'>we</span> <span m='597090'>do</span> <span m='597250'>that</span>
  <span m='599440'>by</span> <span m='599600'>guessing</span> <span
  m='600050'>some</span> <span m='600280'>feature</span> <span
  m='600590'>of</span> <span m='600660'>the</span> <span m='600740'>solution.
  In</span> <span m='601240'>Fibonacci,</span> <span m='601800'>there</span>
  <span m='601930'>was</span> <span m='602110'>no</span> <span
  m='602290'>guessing.</span> <span m='603150'>So</span> <span
  m='603360'>the</span> <span m='603480'>number</span> <span
  m='603790'>of</span> <span m='603860'>different</span> <span
  m='604310'>choices</span> <span m='604740'>for</span> <span
  m='604880'>your</span> <span m='605030'>guess</span> <span
  m='605770'>is</span> <span m='605950'>one.</span> <span
  m='606360'>There's</span> <span m='606550'>nothing.</span> <span
  m='607190'>There's</span> <span m='607330'>only</span> <span
  m='607540'>one</span> <span m='607750'>choice,</span> <span m='608730'>which
  is</span> <span m='609000'>to</span> <span m='609100'>do</span> <span
  m='609220'>nothing.</span> </p><p><span m='611120'>And</span> <span
  m='611380'>for</span> <span m='611510'>shortest</span> <span
  m='611860'>paths,</span> <span m='612670'>what</span> <span
  m='612820'>we</span> <span m='612930'>guessed</span> <span
  m='613330'>was--</span> <span m='615280'>we</span> <span
  m='615430'>know</span> <span m='616270'>we're</span> <span
  m='616370'>looking</span> <span m='616670'>for</span> <span
  m='616800'>some</span> <span m='617040'>path from</span> <span
  m='617440'>s</span> <span m='617620'>v.</span> <span m='617730'>B</span> <span
  m='618260'>Let's</span> <span m='618500'>guess</span> <span
  m='618800'>what</span> <span m='618970'>the</span> <span
  m='619060'>last</span> <span m='619530'>edge</span> <span
  m='619885'>is.</span> <span m='621220'>There's</span> <span
  m='621380'>some</span> <span m='621590'>last</span> <span
  m='621990'>edge</span> <span m='623130'>from</span> <span m='623330'>u</span>
  <span m='623480'>to</span> <span m='623560'>v,</span> <span
  m='625020'>assuming</span> <span m='625360'>the</span> <span
  m='625450'>path</span> <span m='625740'>has</span> <span
  m='625940'>more</span> <span m='626150'>than</span> <span
  m='626290'>one</span> <span m='626500'>edge--</span> <span
  m='626900'>or</span> <span m='626990'>more</span> <span m='627140'>than</span>
  <span m='627300'>zero</span> <span m='627550'>edges.</span> <span
  m='629330'>When</span> <span m='629780'>could</span> <span
  m='629950'>the</span> <span m='630240'>edge</span> <span
  m='630480'>possibly</span> <span m='631040'>be?</span> <span m='631230'>Well,
  it's</span> <span m='631530'>some</span> <span m='631880'>incoming</span>
  <span m='632370'>edge</span> <span m='632560'>to</span> <span
  m='632670'>v.</span> <span m='633890'>So</span> <span
  m='634220'>there's</span> <span m='634560'>going</span> <span
  m='634700'>to</span> <span m='634750'>be</span> <span
  m='634910'>indegree</span> <span m='635400'>of</span> <span
  m='635500'>v</span> <span m='635690'>different</span> <span
  m='635990'>choices</span> <span m='636420'>for</span> <span
  m='636510'>that.</span> <span m='637740'>And</span> <span m='637980'>to</span>
  <span m='638080'>account</span> <span m='638400'>for</span> <span
  m='638480'>the</span> <span m='638580'>case that</span> <span
  m='639030'>that's</span> <span m='639280'>zero,</span> <span
  m='639790'>we</span> <span m='640070'>do a</span> <span m='640240'>plus</span>
  <span m='640520'>1.</span> <span m='641280'>But</span> <span
  m='641370'>that's</span> <span m='641570'>not</span> <span m='641730'>a</span>
  <span m='641770'>big</span> <span m='641970'>deal.</span> </p><p><span
  m='643790'>So</span> <span m='645820'>that</span> <span m='646000'>was</span>
  <span m='646150'>the</span> <span m='646250'>number</span> <span
  m='646630'>of</span> <span m='646820'>different</span> <span
  m='647100'>choices.</span> <span m='647560'>In</span> <span
  m='647680'>general</span> <span m='648170'>if</span> <span
  m='648310'>we're</span> <span m='648380'>going</span> <span
  m='648500'>to</span> <span m='648550'>guess</span> <span
  m='648760'>something,</span> <span m='649640'>we</span> <span
  m='649820'>need</span> <span m='650000'>to</span> <span
  m='650120'>write</span> <span m='650320'>down</span> <span
  m='651150'>the</span> <span m='651250'>number</span> <span
  m='651800'>of</span> <span m='653370'>choices.</span> <span
  m='655456'>For</span> <span m='655840'>the</span> <span
  m='655870'>guess,</span> <span m='658080'>how</span> <span
  m='658180'>many</span> <span m='658380'>different</span> <span
  m='658640'>possibilities</span> <span m='659310'>are</span> <span
  m='659470'>there?</span> <span m='661250'>That's</span> <span
  m='661800'>our</span> <span m='661970'>analysis.</span> </p><p><span
  m='664620'>OK,</span> <span m='665490'>the</span> <span m='665590'>next</span>
  <span m='665890'>thing</span> <span m='666710'>is</span> <span
  m='667150'>the</span> <span m='667240'>recurrence.</span> <span
  m='669150'>That's</span> <span m='669430'>step</span> <span
  m='669720'>three.</span> <span m='670750'>We</span> <span
  m='670870'>want</span> <span m='671080'>to</span> <span
  m='671560'>relate</span> <span m='672070'>all</span> <span
  m='672250'>the</span> <span m='672330'>sub-problem</span> <span
  m='672810'>solutions</span> <span m='673200'>to</span> <span
  m='673330'>each</span> <span m='673520'>other.</span> <span
  m='674310'>For</span> <span m='674480'>Fibonacci,</span> <span
  m='675040'>that's</span> <span m='675250'>the</span> <span
  m='675340'>definition</span> <span m='675890'>of</span> <span
  m='675970'>Fibonacci</span> <span m='676450'>numbers.</span> <span
  m='676740'>So</span> <span m='676860'>it's</span> <span
  m='676970'>really</span> <span m='677190'>easy.</span> <span
  m='679180'>For</span> <span m='679600'>shortest</span> <span
  m='679960'>paths,</span> <span m='681230'>we</span> <span
  m='681430'>wrote</span> <span m='681660'>this</span> <span
  m='681840'>min.</span> <span m='682775'>In</span> <span
  m='683250'>general,</span> <span m='683730'>typically</span> <span
  m='684200'>it's</span> <span m='684350'>a</span> <span m='684400'>min or
  a</span> <span m='684780'>max,</span> <span m='685530'>whatever</span> <span
  m='685880'>you're</span> <span m='686010'>trying</span> <span
  m='686210'>to</span> <span m='686270'>solve</span> <span
  m='686570'>here.</span> <span m='686720'>We're</span> <span
  m='686800'>doing</span> <span m='686980'>shortest</span> <span
  m='687330'>paths.</span> <span m='688830'>You</span> <span
  m='688940'>could</span> <span m='689050'>do</span> <span
  m='689220'>longest</span> <span m='689530'>paths</span> <span
  m='689850'>in</span> <span m='689920'>the</span> <span m='690000'>same</span>
  <span m='690220'>way.</span> </p><p><span m='691780'>So</span> <span
  m='691990'>you</span> <span m='692820'>compute</span> <span
  m='693100'>them</span> <span m='693140'>in</span> <span m='694040'>of</span>
  <span m='694490'>delta</span> <span m='694570'>sub</span> <span
  m='695080'>sk</span> <span m='695560'>minus</span> <span m='695920'>1</span>
  <span m='696180'>of</span> <span m='696270'>su.</span> <span
  m='696550'>The</span> <span m='696830'>idea</span> <span m='697060'>is</span>
  <span m='697280'>we</span> <span m='697410'>want</span> <span
  m='697580'>to</span> <span m='697640'>compute</span> <span
  m='698000'>this</span> <span m='698390'>part</span> <span m='699510'>of</span>
  <span m='699700'>the</span> <span m='699790'>path,</span> <span
  m='700920'>the</span> <span m='701100'>s to</span> <span m='701390'>u</span>
  <span m='701680'>part.</span> <span m='702450'>And</span> <span
  m='702690'>we</span> <span m='702860'>know</span> <span m='703050'>that</span>
  <span m='703220'>has</span> <span m='703480'>one</span> <span
  m='703730'>fewer</span> <span m='704030'>edge,</span> <span
  m='704350'>because</span> <span m='704660'>we</span> <span
  m='704760'>just</span> <span m='704970'>guessed</span> <span
  m='705210'>what</span> <span m='705330'>the</span> <span
  m='705420'>last</span> <span m='705710'>edge</span> <span
  m='705890'>was.</span> <span m='707350'>Except</span> <span
  m='707640'>we</span> <span m='707730'>don't</span> <span
  m='707880'>really</span> <span m='708120'>know</span> <span
  m='708270'>what</span> <span m='708370'>the</span> <span
  m='708460'>last</span> <span m='708730'>edge</span> <span
  m='708890'>was,</span> <span m='709100'>so</span> <span m='709210'>we</span>
  <span m='709290'>have</span> <span m='709390'>to</span> <span
  m='709480'>try</span> <span m='709700'>them</span> <span
  m='709860'>all.</span> <span m='710250'>We try</span> <span
  m='710610'>all</span> <span m='710910'>the</span> <span
  m='711020'>incoming</span> <span m='711440'>edges</span> <span
  m='711730'>into</span> <span m='711970'>v--</span> <span
  m='712810'>that's</span> <span m='713230'>this</span> <span
  m='713390'>part--</span> <span m='714380'>and</span> <span
  m='714820'>for</span> <span m='715000'>each</span> <span m='715200'>of</span>
  <span m='715260'>them</span> <span m='715420'>we</span> <span
  m='715540'>compute--</span> <span m='716810'>I</span> <span
  m='716880'>forgot</span> <span m='717210'>something</span> <span
  m='717510'>here.</span> <span m='718770'>This</span> <span
  m='718970'>is</span> <span m='719160'>the</span> <span m='719450'>cost</span>
  <span m='719770'>of</span> <span m='719830'>the</span> <span
  m='719900'>first</span> <span m='720220'>part</span> <span
  m='720380'>of</span> <span m='720420'>the</span> <span m='720500'>path.</span>
  <span m='721360'>Then</span> <span m='721510'>I</span> <span
  m='721600'>also</span> <span m='721920'>need</span> <span m='722090'>to</span>
  <span m='722180'>do</span> <span m='722340'>plus</span> <span
  m='722830'>the</span> <span m='722940'>weight</span> <span
  m='723360'>of</span> <span m='723800'>the</span> <span m='723910'>uv</span>
  <span m='724390'>edge.</span> <span m='725470'>That</span> <span
  m='725650'>will</span> <span m='725760'>be</span> <span m='725910'>the</span>
  <span m='726040'>total</span> <span m='727390'>cost</span> <span
  m='727800'>of</span> <span m='727890'>that</span> <span
  m='728110'>path.</span> </p><p><span m='729080'>You</span> <span
  m='729220'>add</span> <span m='729480'>those</span> <span
  m='729720'>up,</span> <span m='730400'>you</span> <span m='730520'>do</span>
  <span m='730640'>it</span> <span m='730730'>for</span> <span
  m='730900'>every</span> <span m='731220'>incoming</span> <span
  m='731650'>edge.</span> <span m='732350'>That</span> <span
  m='732540'>is,</span> <span m='732700'>in</span> <span m='732770'>some
  sense,</span> <span m='733180'>considering</span> <span m='733670'>all</span>
  <span m='733990'>possible</span> <span m='734480'>paths.</span> <span
  m='736270'>Assuming</span> <span m='736420'>you</span> <span
  m='736670'>find</span> <span m='736930'>the</span> <span
  m='736990'>shortest</span> <span m='737360'>path</span> <span m='737610'>from
  s</span> <span m='737850'>to</span> <span m='737980'>u,</span> <span
  m='738250'>that's</span> <span m='738530'>going</span> <span
  m='738650'>to</span> <span m='738710'>be</span> <span m='738820'>the</span>
  <span m='738920'>best</span> <span m='739200'>way</span> <span
  m='739330'>to</span> <span m='739390'>get</span> <span
  m='739630'>there.</span> <span m='740360'>And</span> <span
  m='740560'>then</span> <span m='740730'>use</span> <span
  m='740980'>some</span> <span m='741300'>edge</span> <span
  m='741600'>from</span> <span m='741730'>u</span> <span m='741870'>to</span>
  <span m='741930'>v</span> <span m='743970'>for</span> <span
  m='744170'>some</span> <span m='744380'>choice</span> <span
  m='744660'>of</span> <span m='744750'>u.</span> <span m='745380'>This</span>
  <span m='745540'>will</span> <span m='745640'>try</span> <span
  m='745870'>all</span> <span m='746110'>of</span> <span m='746180'>them.</span>
  <span m='746500'>So</span> <span m='746540'>it's</span> <span
  m='746660'>really</span> <span m='746830'>trying</span> <span
  m='747060'>all</span> <span m='747300'>the</span> <span
  m='747360'>possibilities.</span> <span m='747940'>So</span> <span
  m='748020'>it's</span> <span m='748130'>pretty</span> <span
  m='748320'>clear</span> <span m='748980'>this</span> <span
  m='749180'>is</span> <span m='749380'>correct</span> <span
  m='750960'>if</span> <span m='751140'>there</span> <span m='751250'>are</span>
  <span m='751280'>no</span> <span m='751400'>negative</span> <span
  m='751700'>weight</span> <span m='751890'>cycles.</span> <span
  m='752260'>You</span> <span m='752590'>have to prove</span> <span
  m='752750'>some</span> <span m='752980'>things.</span> <span
  m='753290'>We've</span> <span m='753490'>already</span> <span
  m='753690'>proved</span> <span m='754000'>them.</span> </p><p><span
  m='755840'>It's</span> <span m='756040'>just</span> <span
  m='756180'>slow,</span> <span m='757170'>but</span> <span
  m='757320'>once</span> <span m='757490'>you</span> <span m='757570'>add</span>
  <span m='757690'>memoization,</span> <span m='758350'>it's</span> <span
  m='758550'>fast.</span> <span m='760390'>Now,</span> <span
  m='760590'>how</span> <span m='760820'>long</span> <span
  m='761260'>does</span> <span m='761440'>it</span> <span m='761570'>take</span>
  <span m='761800'>to</span> <span m='761950'>evaluate</span> <span
  m='762970'>this</span> <span m='763330'>recurrence,</span> <span
  m='764300'>constant</span> <span m='764790'>time,</span> <span
  m='765170'>if</span> <span m='765330'>you</span> <span m='765420'>don't</span>
  <span m='765620'>count</span> <span m='765850'>the</span> <span
  m='765930'>recursive</span> <span m='766380'>calls</span> <span m='767180'>or
  count</span> <span m='767290'>them as</span> <span m='767710'>constant?</span>
  <span m='768630'>Over</span> <span m='768860'>here,</span> <span
  m='769540'>we're</span> <span m='769680'>taking</span> <span
  m='770000'>a</span> <span m='770040'>min</span> <span m='770540'>over</span>
  <span m='771510'>n</span> <span m='771670'>degree</span> <span
  m='771980'>of</span> <span m='772080'>v</span> <span m='772280'>things.</span>
  <span m='772770'>So</span> <span m='773150'>we</span> <span
  m='773270'>have</span> <span m='773400'>to</span> <span m='773500'>pay
  n</span> <span m='773920'>degree</span> <span m='774240'>of v</span> <span
  m='774500'>time,</span> <span m='776210'>again</span> <span
  m='776680'>the</span> <span m='776880'>recursions</span> <span
  m='777600'>as</span> <span m='777790'>free.</span> <span m='778020'>But</span>
  <span m='778180'>for</span> <span m='778280'>each</span> <span
  m='778420'>one</span> <span m='778590'>of</span> <span m='778650'>them,</span>
  <span m='778790'>we</span> <span m='778880'>have</span> <span
  m='779020'>to</span> <span m='779130'>do</span> <span m='779460'>an</span>
  <span m='779560'>addition.</span> <span m='780620'>So</span> <span
  m='780730'>it's</span> <span m='780840'>constant</span> <span
  m='781250'>work</span> <span m='781580'>per</span> <span
  m='783310'>guess.</span> </p><p><span m='784520'>And</span> <span
  m='784620'>this</span> <span m='784760'>is</span> <span
  m='784870'>quite</span> <span m='785110'>common.</span> <span
  m='785500'>Often,</span> <span m='785910'>the</span> <span
  m='786060'>number</span> <span m='786370'>of</span> <span
  m='786460'>guesses</span> <span m='787500'>and</span> <span
  m='787670'>the</span> <span m='787780'>running</span> <span
  m='788070'>time</span> <span m='789110'>per</span> <span
  m='789270'>sub-problem</span> <span m='789890'>are</span> <span
  m='789980'>the</span> <span m='790130'>same,</span> <span
  m='790780'>the</span> <span m='790870'>constant</span> <span
  m='791230'>factors.</span> <span m='791650'>Sometimes</span> <span
  m='792220'>they're</span> <span m='792320'>different.</span> <span
  m='792720'>We'll</span> <span m='792850'>see</span> <span
  m='793080'>some</span> <span m='793270'>examples</span> <span
  m='793700'>today.</span> <span m='795860'>OK,</span> <span
  m='796400'>step</span> <span m='796730'>four.</span> <span
  m='799700'>Let's</span> <span m='799980'>see.</span> <span
  m='800220'>So</span> <span m='800610'>here</span> <span m='800960'>we</span>
  <span m='801110'>evaluate</span> <span m='801810'>the</span> <span
  m='801930'>time</span> <span m='803270'>per</span> <span
  m='803430'>sub-problem.</span> <span m='804770'>Once</span> <span
  m='805000'>you</span> <span m='805080'>have</span> <span m='805190'>the</span>
  <span m='805260'>recurrence,</span> <span m='805770'>that</span> <span
  m='805990'>becomes</span> <span m='806360'>clear.</span> <span
  m='806950'>You</span> <span m='807210'>want</span> <span m='807450'>to</span>
  <span m='807490'>make</span> <span m='807640'>sure</span> <span
  m='807830'>that's</span> <span m='808070'>polynomial.</span> <span
  m='809130'>Often</span> <span m='809510'>these</span> <span
  m='809730'>are</span> <span m='809830'>the</span> <span
  m='809970'>same.</span> </p><p><span m='813910'>And</span> <span
  m='814510'>then</span> <span m='815850'>we</span> <span m='816140'>add</span>
  <span m='816300'>the</span> <span m='816390'>recursive</span> <span
  m='816830'>memorize</span> <span m='817330'>or build</span> <span m='817590'>a
  DP</span> <span m='817650'>table.</span> <span m='818300'>I'm</span> <span
  m='818390'>not</span> <span m='818540'>going</span> <span m='818660'>to</span>
  <span m='818720'>write</span> <span m='818940'>those.</span> <span
  m='819270'>We</span> <span m='819390'>did</span> <span m='819560'>it</span>
  <span m='819650'>for</span> <span m='819780'>Fibonacci</span> <span
  m='820310'>last</span> <span m='820560'>time,</span> <span
  m='820780'>shortest</span> <span m='821150'>paths.</span> <span
  m='821580'>Pretty</span> <span m='821770'>easy.</span> <span
  m='823780'>And</span> <span m='825170'>in</span> <span
  m='825300'>general,</span> <span m='825670'>what</span> <span
  m='825850'>we</span> <span m='825960'>need</span> <span m='826140'>to</span>
  <span m='826250'>check</span> <span m='826570'>here</span> <span
  m='829470'>is</span> <span m='829680'>that the</span> <span
  m='829980'>sub</span> <span m='830250'>problem</span> <span
  m='832430'>recurrence</span> <span m='834142'>is</span> <span
  m='834570'>acyclic.</span> <span m='844750'>In</span> <span
  m='844870'>other</span> <span m='845020'>words,</span> <span m='845390'>that
  it</span> <span m='845440'>has</span> <span m='845990'>a</span> <span
  m='846100'>topological</span> <span m='847070'>order</span> <span
  m='847860'>so</span> <span m='848260'>we</span> <span m='848420'>can</span>
  <span m='848560'>use</span> <span m='848800'>topological</span> <span
  m='849450'>sort.</span> <span m='851400'>We</span> <span
  m='851560'>don't</span> <span m='851710'>actually</span> <span
  m='852000'>use</span> <span m='852340'>topological</span> <span
  m='852880'>algorithm</span> <span m='853350'>usually.</span> <span
  m='854110'>You</span> <span m='854220'>can</span> <span m='854340'>just</span>
  <span m='854520'>think</span> <span m='854700'>about</span> <span
  m='855010'>it.</span> </p><p><span m='856310'>In</span> <span
  m='856490'>the</span> <span m='856580'>case</span> <span m='856800'>of</span>
  <span m='856870'>Fibonacci</span> <span m='857340'>numbers,</span> <span
  m='857600'>it's</span> <span m='857720'>clear</span> <span
  m='857970'>you</span> <span m='858110'>want</span> <span m='858270'>to</span>
  <span m='858320'>start</span> <span m='858570'>with</span> <span
  m='858690'>the</span> <span m='858760'>smallest</span> <span
  m='859220'>one</span> <span m='859430'>and</span> <span m='859550'>end</span>
  <span m='859670'>up</span> <span m='859780'>with</span> <span
  m='859900'>the</span> <span m='859960'>biggest</span> <span
  m='860290'>one.</span> <span m='860430'>You</span> <span
  m='860520'>can't</span> <span m='860770'>do</span> <span m='860870'>the</span>
  <span m='860980'>reverse,</span> <span m='861880'>because</span> <span
  m='862060'>then</span> <span m='862220'>when</span> <span
  m='862310'>you're</span> <span m='862410'>trying</span> <span
  m='862630'>to</span> <span m='862750'>computer</span> <span
  m='862910'>the</span> <span m='863020'>nth</span> <span m='863280'>you</span>
  <span m='863400'>don't</span> <span m='863560'>have</span> <span
  m='863880'>the</span> <span m='863970'>ones</span> <span m='864170'>you</span>
  <span m='864240'>need,</span> <span m='864730'>the n</span> <span
  m='864880'>minus</span> <span m='865130'>1</span> <span m='865300'>and
  n</span> <span m='865510'>minus</span> <span m='865820'>2.</span> <span
  m='866820'>But</span> <span m='866910'>if</span> <span m='867000'>you</span>
  <span m='867080'>do</span> <span m='867210'>it</span> <span
  m='867270'>in</span> <span m='867360'>this</span> <span
  m='867550'>order,</span> <span m='867880'>you</span> <span
  m='867960'>always</span> <span m='868240'>have</span> <span
  m='868430'>the</span> <span m='868520'>one</span> <span m='868670'>you</span>
  <span m='868770'>need</span> <span m='869120'>by</span> <span
  m='869270'>the</span> <span m='869370'>time</span> <span m='869610'>you</span>
  <span m='869700'>get</span> <span m='869920'>there.</span> </p><p><span
  m='870560'>In</span> <span m='870710'>general,</span> <span
  m='871520'>there's</span> <span m='871620'>a</span> <span
  m='871690'>DAG</span> <span m='873120'>there--</span> <span
  m='873630'>and</span> <span m='873830'>for</span> <span
  m='873980'>Fibonacci,</span> <span m='874680'>it</span> <span
  m='874770'>was</span> <span m='876540'>like</span> <span
  m='879910'>this.</span> <span m='880450'>Every</span> <span
  m='880800'>node</span> <span m='881030'>depends</span> <span
  m='881430'>on</span> <span m='881500'>the</span> <span
  m='881580'>previous</span> <span m='882080'>and</span> <span
  m='882230'>the</span> <span m='882880'>second</span> <span
  m='883250'>previous.</span> <span m='884670'>But</span> <span
  m='885010'>you</span> <span m='885160'>just</span> <span
  m='885410'>choose</span> <span m='885720'>a</span> <span
  m='885820'>topological</span> <span m='886370'>order,</span> <span
  m='886570'>which</span> <span m='886750'>is</span> <span
  m='886880'>here</span> <span m='887080'>left</span> <span m='887310'>to</span>
  <span m='887410'>right,</span> <span m='888300'>and</span> <span
  m='889180'>you're</span> <span m='889330'>golden.</span> <span
  m='890990'>And</span> <span m='891110'>these</span> <span
  m='891270'>are</span> <span m='891370'>actually</span> <span
  m='891660'>the</span> <span m='891770'>for</span> <span
  m='892000'>loops</span> <span m='892240'>you</span> <span
  m='892320'>get</span> <span m='892510'>in</span> <span m='892610'>the</span>
  <span m='892680'>bottom</span> <span m='892990'>of</span> <span
  m='893590'>DP.</span> </p><p><span m='894710'>For</span> <span
  m='894810'>shortest</span> <span m='895160'>paths,</span> <span
  m='895540'>you</span> <span m='895600'>have</span> <span m='895680'>to</span>
  <span m='895770'>think</span> <span m='895960'>a</span> <span
  m='896010'>little</span> <span m='896230'>bit.</span> <span
  m='896520'>You</span> <span m='896810'>have</span> <span m='896920'>to</span>
  <span m='897070'>do</span> <span m='897270'>the</span> <span
  m='897380'>for</span> <span m='897640'>loop</span> <span
  m='898150'>over</span> <span m='898440'>k</span> <span m='898980'>on</span>
  <span m='899130'>the</span> <span m='899280'>outside,</span> <span
  m='900160'>the</span> <span m='900260'>for</span> <span m='900470'>loop</span>
  <span m='900650'>over</span> <span m='900830'>V</span> <span
  m='901080'>on</span> <span m='901180'>the</span> <span
  m='901300'>inside.</span> <span m='901770'>The</span> <span
  m='901850'>reverse</span> <span m='902230'>does</span> <span
  m='902380'>not</span> <span m='902570'>work.</span> <span m='904370'>I</span>
  <span m='904410'>won't</span> <span m='904610'>go</span> <span
  m='904730'>through</span> <span m='904900'>that,</span> <span
  m='905120'>but</span> <span m='905210'>we</span> <span m='905330'>drew</span>
  <span m='905530'>the</span> <span m='905660'>DAG</span> <span
  m='905940'>last</span> <span m='906220'>time.</span> <span
  m='907380'>And</span> <span m='908800'>that's</span> <span
  m='909000'>the</span> <span m='909080'>main</span> <span
  m='909280'>thing</span> <span m='909400'>you</span> <span
  m='909490'>need</span> <span m='909670'>to</span> <span m='909770'>do</span>
  <span m='909930'>here.</span> <span m='910550'>And</span> <span
  m='910680'>then,</span> <span m='910790'>of</span> <span
  m='910910'>course,</span> <span m='911160'>you use</span> <span
  m='911490'>this</span> <span m='911670'>formula</span> <span
  m='912710'>to</span> <span m='913050'>compute</span> <span
  m='913370'>the</span> <span m='913460'>overall</span> <span
  m='913850'>running</span> <span m='914130'>time,</span> <span
  m='914860'>which</span> <span m='915060'>is</span> <span
  m='915180'>just</span> <span m='915380'>multiplying</span> <span
  m='916820'>this</span> <span m='917050'>quantity</span> <span
  m='918300'>with</span> <span m='918840'>this</span> <span
  m='919030'>quantity.</span> <span m='925350'>Total</span> <span
  m='925760'>time.</span> </p><p><span m='928730'>Then</span> <span
  m='928930'>there's</span> <span m='929080'>just</span> <span
  m='929250'>one</span> <span m='929600'>last</span> <span
  m='929920'>step</span> <span m='930320'>that</span> <span
  m='930630'>usually</span> <span m='931060'>isn't</span> <span
  m='931290'>that</span> <span m='931470'>big</span> <span m='931620'>a</span>
  <span m='931650'>deal,</span> <span m='932140'>but</span> <span
  m='932300'>you</span> <span m='932360'>have</span> <span
  m='932610'>think</span> <span m='932790'>about</span> <span
  m='933000'>it.</span> <span m='933060'>You</span> <span m='933130'>need</span>
  <span m='933310'>to</span> <span m='933410'>make</span> <span
  m='933570'>sure</span> <span m='933750'>that</span> <span
  m='933920'>the</span> <span m='934010'>problem</span> <span
  m='934270'>you</span> <span m='934430'>actually</span> <span
  m='934840'>cared</span> <span m='935080'>about</span> <span
  m='935340'>solving</span> <span m='936400'>gets</span> <span
  m='936620'>solved.</span> <span m='937820'>In</span> <span
  m='937950'>the</span> <span m='938040'>case</span> <span m='938290'>of</span>
  <span m='938350'>Fibonacci</span> <span m='939540'>and shortest</span> <span
  m='939940'>paths,</span> <span m='940230'>this</span> <span
  m='940400'>is</span> <span m='940520'>pretty</span> <span
  m='940740'>clear.</span> <span m='941585'>I didn't</span> <span
  m='941950'>write</span> <span m='942180'>it.</span> <span m='946623'>We can
  do</span> <span m='947100'>it on here.</span> <span m='949710'>Solve</span>
  <span m='950050'>the</span> <span m='950170'>original</span> <span
  m='950550'>problem.</span> <span m='954580'>Fibonaci,</span> <span
  m='955040'>it</span> <span m='955190'>is</span> <span m='955670'>Fn.</span>
  <span m='955880'>And</span> <span m='956180'>this</span> <span
  m='956320'>is</span> <span m='956430'>one</span> <span m='956610'>of</span>
  <span m='956700'>our</span> <span m='956810'>sub-problems,</span> <span
  m='957460'>so</span> <span m='957570'>if we</span> <span m='957740'>solve
  all</span> <span m='958060'>of</span> <span m='958130'>them,</span> <span
  m='958510'>we're</span> <span m='958640'>done.</span> </p><p><span
  m='959360'>For</span> <span m='959420'>shortest</span> <span
  m='959750'>paths,</span> <span m='960570'>it's</span> <span
  m='960860'>basically</span> <span m='961260'>delta</span> <span
  m='962130'>sub</span> <span m='964090'>v</span> <span m='964530'>minus</span>
  <span m='964920'>1</span> <span m='965620'>of</span> <span
  m='965970'>sv</span> <span m='967440'>for</span> <span m='968280'>all</span>
  <span m='969525'>v.</span> <span m='969940'>That's</span> <span
  m='970350'>single</span> <span m='970690'>source</span> <span
  m='970965'>shortest</span> <span m='971240'>paths.</span> <span
  m='972100'>And</span> <span m='972630'>by</span> <span m='972810'>our</span>
  <span m='972940'>Bellman-Ford</span> <span m='973480'>analysis,</span> <span
  m='973990'>that</span> <span m='974170'>gives</span> <span
  m='974370'>us</span> <span m='974530'>the</span> <span m='974630'>right</span>
  <span m='974800'>shortest</span> <span m='975110'>paths.</span> <span
  m='975880'>There</span> <span m='975980'>are</span> <span m='976010'>no</span>
  <span m='976120'>negative</span> <span m='976400'>weight</span> <span
  m='976590'>cycles.</span> </p><p><span m='977590'>And</span> <span
  m='977840'>sometimes</span> <span m='978470'>this</span> <span
  m='978690'>requires</span> <span m='979780'>extra</span> <span
  m='980300'>time</span> <span m='982420'>to</span> <span
  m='982670'>combine</span> <span m='983290'>your</span> <span
  m='983430'>solutions</span> <span m='984070'>to</span> <span
  m='984170'>get</span> <span m='984400'>the</span> <span m='984520'>real</span>
  <span m='984770'>thing.</span> <span m='985000'>Here</span> <span
  m='985320'>of</span> <span m='985400'>course,</span> <span
  m='986240'>we</span> <span m='986370'>just</span> <span m='986590'>have</span>
  <span m='986910'>the</span> <span m='987020'>answers,</span> <span
  m='988340'>so</span> <span m='988450'>writing</span> <span
  m='988720'>them</span> <span m='988840'>down</span> <span
  m='989220'>does</span> <span m='989370'>not</span> <span
  m='989590'>take</span> <span m='989790'>very</span> <span
  m='989980'>long.</span> <span m='991810'>So</span> <span
  m='992100'>that's</span> <span m='992440'>the</span> <span
  m='992550'>dominant</span> <span m='993030'>running</span> <span
  m='993300'>time--</span> <span m='994090'>which</span> <span
  m='994400'>I</span> <span m='994430'>didn't</span> <span
  m='994670'>write,</span> <span m='995100'>I should</span> <span
  m='995290'>have</span> <span m='995630'>written</span> <span
  m='995860'>in</span> <span m='995970'>under</span> <span m='996230'>for</span>
  <span m='996570'>here--</span> <span m='997940'>this</span> <span
  m='998250'>ends</span> <span m='998580'>up</span> <span
  m='998780'>being</span> <span m='998960'>n,</span> <span
  m='1000620'>this</span> <span m='1000880'>ends</span> <span
  m='1001160'>up</span> <span m='1001330'>being</span> <span
  m='1002140'>VE.</span> <span m='1005367'>OK, I</span> <span
  m='1005830'>don't</span> <span m='1005940'>want</span> <span
  m='1006040'>to</span> <span m='1006080'>spend</span> <span
  m='1006310'>more</span> <span m='1006480'>time</span> <span
  m='1006730'>on</span> <span m='1006800'>those</span> <span
  m='1006970'>examples.</span> <span m='1007530'>Let's</span> <span
  m='1007630'>go</span> <span m='1007760'>to</span> <span m='1007840'>new</span>
  <span m='1007990'>things.</span> </p><p><span m='1027410'>So</span> <span
  m='1027750'>first</span> <span m='1028040'>problem</span> <span
  m='1029415'>we're</span> <span m='1029819'>going</span> <span
  m='1029960'>to</span> <span m='1030020'>look</span> <span
  m='1030210'>at</span> <span m='1030369'>today</span> <span
  m='1031210'>is</span> <span m='1031490'>text</span> <span
  m='1031810'>justification.</span> <span m='1041220'>And</span> <span
  m='1041490'>the</span> <span m='1041579'>informal</span> <span
  m='1042069'>statement</span> <span m='1042430'>of</span> <span
  m='1042520'>this</span> <span m='1042660'>problem</span> <span
  m='1043970'>is</span> <span m='1045069'>you're</span> <span
  m='1045220'>given</span> <span m='1045550'>some</span> <span
  m='1045740'>text--</span> <span m='1046150'>which</span> <span
  m='1046310'>means</span> <span m='1046510'>a</span> <span
  m='1046569'>string,</span> <span m='1046940'>a</span> <span
  m='1046970'>whole</span> <span m='1047099'>bunch</span> <span
  m='1047280'>of</span> <span m='1047349'>characters.</span> <span
  m='1050170'>And</span> <span m='1050340'>we</span> <span
  m='1050430'>want</span> <span m='1050670'>to</span> <span
  m='1050750'>split</span> <span m='1051020'>them</span> <span
  m='1051600'>into</span> <span m='1052520'>good</span> <span
  m='1052870'>lines.</span> <span m='1056130'>The</span> <span
  m='1056210'>rules</span> <span m='1056430'>of</span> <span
  m='1056490'>the</span> <span m='1056590'>game</span> <span
  m='1056840'>here</span> <span m='1057490'>are</span> <span
  m='1058540'>we're</span> <span m='1058670'>going</span> <span
  m='1058810'>to,</span> <span m='1059410'>like</span> <span
  m='1059760'>in</span> <span m='1060020'>the</span> <span
  m='1060130'>early</span> <span m='1060440'>lectures</span> <span
  m='1060850'>of</span> <span m='1060950'>document</span> <span
  m='1061340'>distance</span> <span m='1061720'>where you</span> <span
  m='1061860'>have</span> <span m='1062180'>some</span> <span
  m='1062480'>definition</span> <span m='1063160'>of</span> <span
  m='1063900'>splitting</span> <span m='1064320'>a</span> <span
  m='1064400'>document</span> <span m='1064850'>into</span> <span
  m='1065090'>words</span> <span m='1066140'>separated</span> <span
  m='1066650'>by</span> <span m='1067170'>spaces.</span> </p><p><span
  m='1068790'>And</span> <span m='1069570'>what</span> <span
  m='1069780'>we</span> <span m='1069870'>want</span> <span
  m='1070070'>to</span> <span m='1070150'>do</span> <span m='1070550'>is</span>
  <span m='1071580'>cut.</span> <span m='1071980'>We</span> <span
  m='1072100'>can</span> <span m='1072240'>only</span> <span
  m='1072480'>cut</span> <span m='1072780'>between</span> <span
  m='1073170'>word</span> <span m='1073410'>boundaries.</span> <span
  m='1074970'>And</span> <span m='1075080'>we</span> <span
  m='1075170'>want</span> <span m='1075460'>to</span> <span
  m='1077200'>write</span> <span m='1077400'>some</span> <span
  m='1077810'>text,</span> <span m='1078220'>it's</span> <span m='1078630'>going
  to</span> <span m='1078760'>have</span> <span m='1078910'>some</span> <span
  m='1079050'>spaces</span> <span m='1079500'>in</span> <span
  m='1079640'>it.</span> <span m='1080160'>Then</span> <span
  m='1080400'>there's</span> <span m='1080580'>a</span> <span
  m='1080630'>new</span> <span m='1080810'>line,</span> <span
  m='1083380'>something</span> <span m='1083690'>like</span> <span
  m='1083870'>that.</span> <span m='1086270'>And</span> <span
  m='1086420'>we</span> <span m='1086540'>want</span> <span
  m='1086730'>to</span> <span m='1086800'>justify</span> <span
  m='1087360'>our</span> <span m='1087460'>text</span> <span
  m='1088290'>on</span> <span m='1088440'>the</span> <span
  m='1088520'>right</span> <span m='1088730'>here.</span> <span
  m='1089580'>And</span> <span m='1089760'>so</span> <span
  m='1089880'>we'd</span> <span m='1089980'>like</span> <span
  m='1090150'>to</span> <span m='1090250'>avoid</span> <span
  m='1090560'>big</span> <span m='1090780'>gaps</span> <span
  m='1091120'>like</span> <span m='1091310'>this</span> <span
  m='1091670'>because</span> <span m='1091800'>they</span> <span
  m='1091910'>look</span> <span m='1092100'>ugly,</span> <span
  m='1092530'>they're</span> <span m='1092860'>hard</span> <span
  m='1093040'>to</span> <span m='1093140'>read.</span> </p><p><span
  m='1095330'>Now,</span> <span m='1095800'>if</span> <span
  m='1095990'>you</span> <span m='1096140'>use</span> <span
  m='1097650'>Microsoft</span> <span m='1098160'>Word--</span> <span
  m='1099460'>at</span> <span m='1099520'>least</span> <span
  m='1100070'>before</span> <span m='1100660'>the</span> <span
  m='1100770'>latest</span> <span m='1101090'>versions--</span> <span
  m='1102160'>they</span> <span m='1102400'>follow</span> <span
  m='1102770'>a</span> <span m='1102850'>greedy</span> <span
  m='1103170'>strategy,</span> <span m='1103700'>which</span> <span
  m='1103850'>is</span> <span m='1103970'>very</span> <span
  m='1104140'>simple.</span> <span m='1104440'>You</span> <span
  m='1104560'>pack</span> <span m='1104900'>as</span> <span
  m='1105000'>many</span> <span m='1105360'>words</span> <span
  m='1105650'>as</span> <span m='1105740'>you</span> <span
  m='1105840'>can</span> <span m='1106040'>on</span> <span
  m='1106110'>the</span> <span m='1106190'>first</span> <span
  m='1106490'>line,</span> <span m='1107050'>then</span> <span m='1107290'>you
  go to</span> <span m='1107480'>the next</span> <span m='1107700'>line,</span>
  <span m='1107840'>pack</span> <span m='1108130'>as</span> <span
  m='1108220'>many</span> <span m='1108460'>words</span> <span
  m='1108710'>as</span> <span m='1108790'>you</span> <span
  m='1108910'>can</span> <span m='1109130'>on</span> <span
  m='1109230'>the</span> <span m='1109320'>second</span> <span
  m='1109640'>line.</span> <span m='1110270'>Keep</span> <span
  m='1110440'>going</span> <span m='1110780'>like</span> <span
  m='1110980'>that.</span> <span m='1111720'>And</span> <span
  m='1111890'>that</span> <span m='1112340'>strategy</span> <span
  m='1112880'>is</span> <span m='1113160'>not</span> <span
  m='1113490'>optimal.</span> <span m='1114900'>If</span> <span
  m='1115090'>you</span> <span m='1115220'>use</span> <span
  m='1116690'>LaTeX--</span> <span m='1117490'>as</span> <span
  m='1117670'>some</span> <span m='1117890'>of</span> <span
  m='1117990'>you</span> <span m='1118070'>have</span> <span
  m='1118240'>been</span> <span m='1118350'>doing</span> <span
  m='1118570'>on</span> <span m='1118680'>problem</span> <span
  m='1118950'>sets,</span> <span m='1119480'>and</span> <span
  m='1119790'>I</span> <span m='1119920'>think</span> <span
  m='1120280'>also</span> <span m='1120580'>new</span> <span
  m='1120730'>versions</span> <span m='1121100'>of</span> <span
  m='1121200'>Word</span> <span m='1121450'>but</span> <span
  m='1121580'>I'm</span> <span m='1121700'>not</span> <span
  m='1121880'>sure--</span> <span m='1122860'>then</span> <span
  m='1123660'>it</span> <span m='1123840'>uses</span> <span
  m='1124160'>dynamic</span> <span m='1124540'>programming</span> <span
  m='1125030'>to</span> <span m='1125100'>solve</span> <span
  m='1125320'>this</span> <span m='1125470'>problem.</span> <span
  m='1126140'>And</span> <span m='1126190'>that's</span> <span
  m='1126350'>what</span> <span m='1126490'>we're</span> <span
  m='1126570'>going</span> <span m='1126680'>to</span> <span
  m='1126770'>do</span> <span m='1127410'>here.</span> </p><p><span
  m='1128380'>So</span> <span m='1128490'>let</span> <span m='1128620'>me</span>
  <span m='1128750'>specify</span> <span m='1129290'>a</span> <span
  m='1129370'>little</span> <span m='1129710'>bit</span> <span
  m='1129890'>more</span> <span m='1130160'>about</span> <span
  m='1130410'>what</span> <span m='1130580'>we</span> <span
  m='1130740'>mean</span> <span m='1130980'>here.</span> <span
  m='1133560'>So</span> <span m='1133970'>the</span> <span
  m='1134110'>text</span> <span m='1135490'>we're</span> <span
  m='1135600'>going</span> <span m='1135700'>to</span> <span
  m='1135780'>think</span> <span m='1135980'>of</span> <span
  m='1136120'>as</span> <span m='1136330'>a</span> <span m='1136390'>list</span>
  <span m='1136630'>of</span> <span m='1136740'>words.</span> <span
  m='1141010'>And</span> <span m='1141440'>we're</span> <span
  m='1141590'>going</span> <span m='1141700'>to</span> <span
  m='1141810'>define</span> <span m='1142890'>a</span> <span
  m='1143030'>quantity</span> <span m='1144890'>badness.</span> <span
  m='1148590'>And</span> <span m='1148800'>this</span> <span
  m='1148980'>is</span> <span m='1149150'>an</span> <span
  m='1150440'>anesthetic</span> <span m='1151020'>quantity,</span> <span
  m='1151520'>if</span> <span m='1151640'>you</span> <span
  m='1151760'>will.</span> <span m='1152530'>I'm</span> <span
  m='1152670'>going</span> <span m='1152760'>to</span> <span
  m='1152850'>tell</span> <span m='1153030'>you</span> <span
  m='1153180'>what</span> <span m='1153330'>LaTeX</span> <span
  m='1153720'>uses.</span> <span m='1155190'>But</span> <span
  m='1157100'>this</span> <span m='1157320'>is</span> <span
  m='1157430'>sort</span> <span m='1157620'>of</span> <span
  m='1157950'>how</span> <span m='1158280'>bad</span> <span
  m='1158640'>it</span> <span m='1158740'>is</span> <span m='1160098'>to</span>
  <span m='1161310'>use--</span> <span m='1162420'>or</span> <span
  m='1162790'>let's</span> <span m='1163030'>say,</span> <span
  m='1164010'>yeah,</span> <span m='1167090'>words</span> <span
  m='1167630'>i</span> <span m='1167870'>through</span> <span
  m='1168150'>j</span> <span m='1170300'>as</span> <span m='1170540'>a</span>
  <span m='1170610'>line.</span> </p><p><span m='1176410'>So</span> <span
  m='1176520'>this</span> <span m='1176740'>is</span> <span
  m='1176870'>python</span> <span m='1177250'>notation.</span> <span
  m='1177700'>So</span> <span m='1177850'>it</span> <span
  m='1177920'>starts</span> <span m='1178230'>at</span> <span m='1178280'>i
  and</span> <span m='1178590'>ends</span> <span m='1178800'>at</span> <span
  m='1178880'>J</span> <span m='1179060'>minus</span> <span
  m='1179440'>1.</span> <span m='1180090'>That'll</span> <span
  m='1180320'>be</span> <span m='1180510'>convenient.</span> <span
  m='1182090'>So</span> <span m='1182240'>I</span> <span m='1182320'>have</span>
  <span m='1182480'>this</span> <span m='1182640'>list</span> <span
  m='1182840'>of</span> <span m='1182920'>words.</span> <span
  m='1183800'>And</span> <span m='1183980'>if</span> <span m='1184110'>I</span>
  <span m='1184160'>look</span> <span m='1184360'>at</span> <span
  m='1184430'>words</span> <span m='1184680'>i</span> <span
  m='1184850'>through</span> <span m='1185120'>j</span> <span
  m='1185280'>minus</span> <span m='1185610'>1</span> <span
  m='1186440'>and</span> <span m='1186630'>I</span> <span
  m='1186720'>think</span> <span m='1186970'>of</span> <span
  m='1187560'>what</span> <span m='1187720'>happens</span> <span
  m='1188090'>if</span> <span m='1188220'>I</span> <span m='1188280'>pack</span>
  <span m='1188580'>them</span> <span m='1188720'>in</span> <span
  m='1188810'>a</span> <span m='1188870'>line,</span> <span
  m='1190240'>well,</span> <span m='1190630'>they</span> <span
  m='1190740'>may</span> <span m='1190900'>fit</span> <span
  m='1191160'>or</span> <span m='1191280'>they</span> <span
  m='1191400'>may</span> <span m='1191550'>not</span> <span
  m='1191840'>fit.</span> <span m='1194080'>So</span> <span m='1194240'>there
  are</span> <span m='1194400'>going</span> <span m='1194500'>to</span> <span
  m='1194560'>be</span> <span m='1194690'>two</span> <span
  m='1194860'>cases.</span> <span m='1197000'>If</span> <span
  m='1197230'>they</span> <span m='1197360'>don't</span> <span
  m='1197620'>fit,</span> <span m='1198040'>I'm going</span> <span
  m='1198120'>to</span> <span m='1198240'>write</span> <span
  m='1198450'>infinity.</span> <span m='1200080'>So</span> <span
  m='1200140'>that's</span> <span m='1200300'>really</span> <span
  m='1200540'>bad.</span> </p><p><span m='1207890'>So</span> <span
  m='1208150'>I</span> <span m='1208250'>have</span> <span
  m='1208480'>some</span> <span m='1208700'>notion</span> <span
  m='1209040'>of</span> <span m='1209120'>how</span> <span
  m='1209400'>wide</span> <span m='1209920'>my</span> <span
  m='1212120'>line</span> <span m='1212420'>can</span> <span
  m='1212620'>be.</span> <span m='1213360'>And</span> <span
  m='1213550'>if</span> <span m='1213670'>the</span> <span
  m='1213760'>sum</span> <span m='1214100'>of</span> <span
  m='1214170'>the</span> <span m='1214250'>lengths</span> <span
  m='1214530'>of</span> <span m='1214590'>those</span> <span
  m='1214780'>words</span> <span m='1215170'>plus</span> <span
  m='1215450'>the</span> <span m='1215540'>sum</span> <span
  m='1215760'>of</span> <span m='1215800'>the</span> <span
  m='1215870'>lengths</span> <span m='1216120'>of</span> <span
  m='1216190'>the</span> <span m='1216270'>spaces</span> <span
  m='1216980'>as</span> <span m='1217270'>small</span> <span
  m='1217630'>as</span> <span m='1217740'>possible</span> <span
  m='1218890'>is</span> <span m='1219160'>bigger</span> <span
  m='1219530'>than</span> <span m='1219920'>the</span> <span
  m='1220060'>width</span> <span m='1220430'>of</span> <span
  m='1220620'>my</span> <span m='1222120'>screen--</span> <span
  m='1222670'>or</span> <span m='1222890'>page,</span> <span
  m='1223370'>I</span> <span m='1223420'>guess--</span> <span
  m='1224090'>then</span> <span m='1224300'>I</span> <span
  m='1224360'>say</span> <span m='1224540'>they</span> <span
  m='1224650'>don't</span> <span m='1224860'>fit,</span> <span
  m='1225580'>and</span> <span m='1225750'>then</span> <span
  m='1225880'>I</span> <span m='1225940'>define</span> <span
  m='1226330'>badness</span> <span m='1226480'>to be</span> <span
  m='1226690'>infinity--</span> <span m='1227160'>meaning,</span> <span
  m='1227420'>I</span> <span m='1227470'>never</span> <span
  m='1227820'>want</span> <span m='1228000'>to</span> <span
  m='1228070'>do</span> <span m='1228180'>that.</span> <span
  m='1230210'>This</span> <span m='1231260'>is</span> <span
  m='1231320'>actually</span> <span m='1231720'>LaTeX</span> <span
  m='1231920'>sloppy</span> <span m='1232280'>mode,</span> <span
  m='1232530'>if</span> <span m='1232620'>you</span> <span
  m='1232750'>want</span> <span m='1232860'>to</span> <span
  m='1232910'>be</span> <span m='1233040'>technical.</span> </p><p><span
  m='1234850'>Otherwise,</span> <span m='1236930'>it's</span> <span
  m='1237160'>going</span> <span m='1237300'>to</span> <span
  m='1237370'>be</span> <span m='1239440'>page</span> <span
  m='1239770'>width</span> <span m='1243000'>minus</span> <span
  m='1244060'>total</span> <span m='1244390'>width</span> <span
  m='1248760'>cubed.</span> <span m='1252500'>Why</span> <span
  m='1252700'>cubed?</span> <span m='1253110'>Who</span> <span
  m='1253240'>knows.</span> <span m='1254770'>This</span> <span
  m='1255000'>is</span> <span m='1255290'>the</span> <span
  m='1255380'>LaTeX</span> <span m='1255790'>rule.</span> <span
  m='1257700'>And</span> <span m='1258180'>squared</span> <span
  m='1258480'>would</span> <span m='1258600'>probably</span> <span
  m='1258890'>also</span> <span m='1259140'>be</span> <span
  m='1259300'>fine.</span> <span m='1261620'>So</span> <span
  m='1261860'>this</span> <span m='1262040'>is</span> <span
  m='1262110'>the</span> <span m='1262210'>width</span> <span
  m='1262390'>of</span> <span m='1262450'>the</span> <span
  m='1262550'>page</span> <span m='1262990'>minus</span> <span
  m='1263500'>the</span> <span m='1263620'>total</span> <span
  m='1264030'>width</span> <span m='1264280'>of</span> <span
  m='1264390'>those</span> <span m='1264630'>words,</span> <span
  m='1265880'>which</span> <span m='1266110'>you</span> <span
  m='1266250'>also</span> <span m='1266510'>have to</span> <span
  m='1266610'>include</span> <span m='1266850'>the</span> <span
  m='1266910'>spaces</span> <span m='1267400'>here.</span> <span
  m='1268280'>You</span> <span m='1268390'>take</span> <span
  m='1268620'>the</span> <span m='1268710'>difference.</span> <span
  m='1269120'>You</span> <span m='1269260'>cube</span> <span
  m='1269580'>it.</span> <span m='1270130'>And</span> <span
  m='1270290'>so</span> <span m='1270470'>when</span> <span
  m='1270600'>this</span> <span m='1270770'>is</span> <span
  m='1270870'>small--</span> <span m='1272270'>I</span> <span
  m='1272370'>mean,</span> <span m='1272550'>when</span> <span
  m='1272670'>these</span> <span m='1272840'>are</span> <span
  m='1272900'>very</span> <span m='1273140'>close--</span> <span
  m='1274210'>then</span> <span m='1274350'>this</span> <span
  m='1274510'>is</span> <span m='1274620'>going</span> <span
  m='1274750'>to</span> <span m='1274810'>be</span> <span
  m='1274950'>close</span> <span m='1275310'>to</span> <span
  m='1275400'>zero.</span> <span m='1276550'>That's</span> <span
  m='1276820'>good.</span> <span m='1277450'>That</span> <span
  m='1277510'>means</span> <span m='1277830'>you</span> <span
  m='1278020'>use</span> <span m='1278320'>most</span> <span
  m='1278650'>of</span> <span m='1278700'>the</span> <span
  m='1278780'>line.</span> </p><p><span m='1279570'>When</span> <span
  m='1279720'>the</span> <span m='1279810'>total</span> <span
  m='1280060'>width</span> <span m='1280240'>is</span> <span
  m='1280350'>much</span> <span m='1280540'>smaller</span> <span
  m='1280960'>than</span> <span m='1281100'>the</span> <span
  m='1281190'>page</span> <span m='1281440'>width, then</span> <span
  m='1281770'>this</span> <span m='1281930'>will</span> <span
  m='1282000'>be</span> <span m='1282120'>a</span> <span
  m='1282170'>large</span> <span m='1282430'>value.</span> <span m='1282830'>You
  cube it,</span> <span m='1283160'>it</span> <span m='1283230'>will</span>
  <span m='1283350'>be</span> <span m='1283520'>even</span> <span
  m='1283710'>larger.</span> <span m='1284460'>So</span> <span
  m='1284510'>this</span> <span m='1284690'>will</span> <span
  m='1284810'>highly</span> <span m='1285160'>discourage</span> <span
  m='1285800'>big</span> <span m='1286470'>gaps</span> <span
  m='1286830'>like</span> <span m='1287020'>this.</span> <span
  m='1287930'>And</span> <span m='1288100'>it</span> <span
  m='1288170'>will</span> <span m='1288350'>very</span> <span
  m='1288720'>much</span> <span m='1288980'>discourage</span> <span
  m='1289660'>not</span> <span m='1289940'>fitting.</span> <span
  m='1291120'>So</span> <span m='1291300'>there's</span> <span
  m='1291480'>a</span> <span m='1291550'>tradeoff,</span> <span
  m='1292170'>of</span> <span m='1292280'>course.</span> </p><p><span
  m='1292950'>And</span> <span m='1293150'>the</span> <span m='1293320'>idea
  is</span> <span m='1293630'>you</span> <span m='1293750'>might--</span> <span
  m='1294550'>in</span> <span m='1294670'>the</span> <span
  m='1294750'>greedy</span> <span m='1295050'>algorithm,</span> <span
  m='1295520'>you</span> <span m='1295620'>make</span> <span
  m='1295810'>the</span> <span m='1295900'>first</span> <span
  m='1296210'>line</span> <span m='1296420'>as</span> <span
  m='1296640'>good</span> <span m='1296820'>as</span> <span
  m='1296900'>you</span> <span m='1297020'>can.</span> <span
  m='1298800'>But</span> <span m='1299020'>it</span> <span
  m='1299100'>might</span> <span m='1299280'>actually</span> <span
  m='1299540'>be</span> <span m='1299670'>better</span> <span
  m='1300060'>to</span> <span m='1300220'>leave</span> <span
  m='1300660'>out</span> <span m='1300920'>some</span> <span
  m='1301110'>of</span> <span m='1301160'>the</span> <span
  m='1301250'>words</span> <span m='1301490'>that</span> <span
  m='1301620'>would</span> <span m='1301830'>fit</span> <span
  m='1302040'>here</span> <span m='1302410'>in</span> <span
  m='1302530'>order</span> <span m='1302680'>to</span> <span
  m='1302800'>make</span> <span m='1302980'>the</span> <span
  m='1303050'>next</span> <span m='1303340'>line</span> <span
  m='1303540'>better.</span> <span m='1304360'>In</span> <span
  m='1304540'>general,</span> <span m='1304870'>it's</span> <span
  m='1304960'>hard</span> <span m='1305220'>to</span> <span
  m='1305310'>tell,</span> <span m='1305990'>where</span> <span
  m='1306310'>should</span> <span m='1306540'>I</span> <span
  m='1306600'>cut</span> <span m='1306890'>the</span> <span
  m='1307140'>lines</span> <span m='1308970'>in</span> <span
  m='1309160'>order</span> <span m='1309320'>to</span> <span
  m='1309440'>get</span> <span m='1309650'>the</span> <span
  m='1309740'>best</span> <span m='1310120'>overall</span> <span
  m='1310610'>strategy?</span> <span m='1311050'>What</span> <span
  m='1311200'>I'd</span> <span m='1311280'>like</span> <span
  m='1311480'>to</span> <span m='1311590'>minimize</span> <span
  m='1311965'>is</span> <span m='1312340'>the</span> <span
  m='1312460'>sum</span> <span m='1312890'>of</span> <span
  m='1313020'>the</span> <span m='1313090'>badnesses</span> <span
  m='1313810'>of</span> <span m='1313950'>the</span> <span
  m='1314020'>lines.</span> <span m='1315430'>So</span> <span
  m='1315450'>it's</span> <span m='1315560'>a</span> <span
  m='1315620'>sum</span> <span m='1315930'>of</span> <span
  m='1316090'>cubes,</span> <span m='1316770'>and</span> <span
  m='1316870'>that's</span> <span m='1317100'>really</span> <span
  m='1317330'>hard</span> <span m='1317590'>to</span> <span
  m='1317660'>think</span> <span m='1317850'>about.</span> </p><p><span
  m='1319870'>But</span> <span m='1319980'>that's</span> <span
  m='1320190'>what</span> <span m='1320250'>dynamic</span> <span
  m='1320610'>programming</span> <span m='1321040'>is</span> <span
  m='1321150'>for.</span> <span m='1321370'>You</span> <span
  m='1321460'>don't</span> <span m='1321640'>have</span> <span
  m='1321830'>to</span> <span m='1321930'>think.</span> <span
  m='1322800'>It's</span> <span m='1322910'>great</span> <span
  m='1323770'>because</span> <span m='1323980'>it's</span> <span
  m='1324100'>brute</span> <span m='1324450'>force.</span> <span
  m='1326010'>OK,</span> <span m='1326420'>so</span> <span
  m='1328720'>the</span> <span m='1328840'>first</span> <span
  m='1329100'>thing</span> <span m='1329250'>we</span> <span
  m='1329330'>need</span> <span m='1329510'>to</span> <span
  m='1329590'>do</span> <span m='1330200'>is</span> <span
  m='1330380'>define</span> <span m='1330760'>sub-problems.</span> <span
  m='1332600'>This</span> <span m='1332810'>is,</span> <span
  m='1332950'>in</span> <span m='1333060'>some</span> <span
  m='1333240'>sense,</span> <span m='1333620'>the</span> <span
  m='1333650'>hard</span> <span m='1333910'>part.</span> <span
  m='1335030'>The</span> <span m='1335110'>rest</span> <span
  m='1335430'>will</span> <span m='1335510'>follow</span> <span
  m='1335870'>easily.</span> <span m='1338220'>So</span> <span
  m='1340290'>I</span> <span m='1340370'>think</span> <span
  m='1340550'>actually</span> <span m='1340870'>it might</span> <span
  m='1341050'>be</span> <span m='1341200'>easier</span> <span
  m='1341460'>to</span> <span m='1341550'>think</span> <span
  m='1341780'>about,</span> <span m='1342750'>for</span> <span
  m='1342840'>this</span> <span m='1343070'>problem,</span> <span
  m='1343890'>what</span> <span m='1344150'>would</span> <span
  m='1344290'>be</span> <span m='1344510'>the</span> <span
  m='1344830'>brute</span> <span m='1345160'>force</span> <span
  m='1345470'>strategy?</span> <span m='1346190'>How</span> <span
  m='1346400'>would</span> <span m='1346530'>you</span> <span
  m='1346630'>try</span> <span m='1346930'>all</span> <span
  m='1347160'>possibilities,</span> <span m='1347860'>exponential</span> <span
  m='1348440'>time?</span> <span m='1349460'>Suggestions?</span> <span
  m='1360427'>Yeah?</span> </p><p><span m='1360914'>AUDIENCE: Try all</span>
  <span m='1361401'>partitions</span> <span m='1361888'>of</span> <span
  m='1362375'>the</span> <span m='1362862'>words</span> <span m='1363349'>that
  don't</span> <span m='1363836'>fit?</span> </p><p><span m='1364330'>PROFESSOR:
  Try</span> <span m='1364590'>all</span> <span m='1364840'>partitions</span>
  <span m='1365310'>of</span> <span m='1365400'>the</span> <span
  m='1365510'>word,</span> <span m='1365990'>so--</span> <span
  m='1366810'>of</span> <span m='1366970'>the</span> <span
  m='1367440'>string</span> <span m='1367740'>of</span> <span
  m='1367830'>words.</span> <span m='1368970'>So</span> <span
  m='1369460'>I</span> <span m='1369570'>mean,</span> <span
  m='1369750'>it</span> <span m='1369850'>could</span> <span
  m='1370030'>be</span> <span m='1370440'>it</span> <span m='1370960'>all</span>
  <span m='1371100'>fits</span> <span m='1371310'>in on</span> <span
  m='1371370'>one</span> <span m='1371560'>line.</span> <span
  m='1371930'>It</span> <span m='1371980'>could</span> <span
  m='1372180'>be</span> <span m='1372310'>it's</span> <span
  m='1372450'>split</span> <span m='1372710'>into</span> <span
  m='1372910'>two</span> <span m='1373110'>lines.</span> <span
  m='1373380'>I</span> <span m='1373450'>try</span> <span m='1373670'>all</span>
  <span m='1373880'>possible</span> <span m='1374360'>splits</span> <span
  m='1374760'>there.</span> <span m='1375320'>In</span> <span
  m='1375450'>general,</span> <span m='1375730'>I'm</span> <span
  m='1375840'>guessing</span> <span m='1376320'>for</span> <span
  m='1376470'>every</span> <span m='1376710'>word,</span> <span
  m='1377460'>does</span> <span m='1377640'>this</span> <span
  m='1377850'>start</span> <span m='1378140'>a</span> <span
  m='1378200'>line</span> <span m='1378730'>or</span> <span
  m='1378900'>not?</span> <span m='1379850'>That</span> <span
  m='1380000'>would</span> <span m='1380140'>be</span> <span
  m='1380860'>all</span> <span m='1381165'>ways.</span> <span
  m='1381470'>And</span> <span m='1381570'>so</span> <span
  m='1381700'>there</span> <span m='1381870'>are</span> <span
  m='1381970'>2</span> <span m='1382310'>to</span> <span m='1382470'>the</span>
  <span m='1382740'>n.</span> <span m='1383130'>If I have</span> <span
  m='1383340'>n</span> <span m='1383560'>words,</span> <span
  m='1383940'>there's</span> <span m='1384100'>2</span> <span
  m='1384250'>to</span> <span m='1384320'>the</span> <span m='1384500'>n</span>
  <span m='1384650'>different</span> <span m='1384930'>splits.</span> <span
  m='1385290'>For</span> <span m='1385400'>every</span> <span
  m='1385600'>word</span> <span m='1385810'>I</span> <span
  m='1385850'>say</span> <span m='1386030'>yes</span> <span
  m='1386290'>or</span> <span m='1386350'>no,</span> <span m='1386630'>does
  this</span> <span m='1386870'>is</span> <span m='1387010'>begin</span> <span
  m='1387290'>a</span> <span m='1387370'>line?</span> </p><p><span
  m='1388650'>So</span> <span m='1388780'>what</span> <span
  m='1388900'>I'd</span> <span m='1388960'>like</span> <span
  m='1389140'>to</span> <span m='1389250'>figure</span> <span
  m='1389500'>out</span> <span m='1389600'>is</span> <span
  m='1389720'>where</span> <span m='1389920'>those</span> <span
  m='1390100'>lines</span> <span m='1390370'>begin.</span> <span
  m='1391530'>That</span> <span m='1391680'>was</span> <span
  m='1391800'>the</span> <span m='1391890'>point</span> <span m='1392310'>of
  that</span> <span m='1392460'>exercise.</span> <span m='1396010'>So</span>
  <span m='1396110'>any</span> <span m='1396260'>suggestions?</span> <span
  m='1397000'>Maybe</span> <span m='1397250'>it's</span> <span
  m='1397390'>actually</span> <span m='1397680'>easier</span> <span
  m='1397950'>to</span> <span m='1398050'>jump</span> <span
  m='1398310'>ahead</span> <span m='1398600'>and</span> <span
  m='1398720'>think,</span> <span m='1399290'>what</span> <span
  m='1399510'>would</span> <span m='1399690'>I</span> <span
  m='1399760'>guess</span> <span m='1401130'>in</span> <span
  m='1401300'>my</span> <span m='1401430'>solution</span> <span
  m='1401800'>if</span> <span m='1401920'>I</span> <span m='1402000'>have</span>
  <span m='1402460'>this</span> <span m='1402680'>big</span> <span
  m='1402940'>string</span> <span m='1403260'>of</span> <span
  m='1403350'>words?</span> <span m='1405450'>What's</span> <span
  m='1405750'>the</span> <span m='1405810'>natural</span> <span
  m='1406260'>first</span> <span m='1406690'>thing</span> <span
  m='1406900'>to</span> <span m='1407000'>guess?</span> <span
  m='1414220'>Yeah?</span> </p><p><span m='1414700'>AUDIENCE: Guess how</span>
  <span m='1415180'>long the</span> <span m='1415660'>first line</span> <span
  m='1416140'>is?</span> </p><p><span m='1416620'>PROFESSOR: Guess</span> <span
  m='1416950'>how</span> <span m='1417140'>long</span> <span
  m='1417440'>the</span> <span m='1417510'>first</span> <span
  m='1417800'>line</span> <span m='1418030'>is,</span> <span
  m='1418310'>yeah.</span> <span m='1418780'>We</span> <span
  m='1418940'>know</span> <span m='1419160'>that the</span> <span
  m='1419350'>first</span> <span m='1419670'>word</span> <span
  m='1419840'>begins</span> <span m='1420160'>a</span> <span
  m='1420220'>line.</span> <span m='1420490'>But</span> <span
  m='1420650'>where</span> <span m='1421390'>does</span> <span
  m='1421560'>the</span> <span m='1421670'>second</span> <span
  m='1422230'>line</span> <span m='1422510'>begin?</span> <span
  m='1424580'>So</span> <span m='1424690'>I'd</span> <span
  m='1424770'>like</span> <span m='1424960'>to</span> <span
  m='1425040'>guess</span> <span m='1425440'>where</span> <span
  m='1425620'>the</span> <span m='1425760'>second</span> <span
  m='1426350'>line</span> <span m='1426630'>begins.</span> <span
  m='1427120'>That's--</span> <span m='1428090'>so</span> <span
  m='1428260'>you</span> <span m='1428400'>know,</span> <span
  m='1428610'>I</span> <span m='1428740'>have</span> <span
  m='1428990'>the</span> <span m='1429080'>beginning</span> <span m='1429540'>of
  a</span> <span m='1429630'>line</span> <span m='1429960'>here</span> <span
  m='1431000'>and</span> <span m='1431150'>then</span> <span
  m='1431270'>I</span> <span m='1431310'>have</span> <span m='1431470'>a</span>
  <span m='1431490'>beginning</span> <span m='1431840'>of a</span> <span
  m='1431900'>line</span> <span m='1432120'>here</span> <span
  m='1432440'>at</span> <span m='1432630'>the</span> <span
  m='1432770'>fourth</span> <span m='1433150'>word.</span> <span
  m='1435820'>Where</span> <span m='1436070'>does</span> <span
  m='1436580'>the</span> <span m='1436690'>second</span> <span
  m='1436990'>line</span> <span m='1437180'>begin?</span> <span
  m='1437810'>I</span> <span m='1437910'>don't</span> <span
  m='1438050'>know.</span> <span m='1438590'>Guess.</span> </p><p><span
  m='1439180'>So</span> <span m='1439340'>I'm</span> <span
  m='1439420'>going</span> <span m='1439520'>to</span> <span
  m='1439590'>try</span> <span m='1439960'>all</span> <span
  m='1440300'>the</span> <span m='1440390'>possible</span> <span
  m='1440860'>words</span> <span m='1441200'>after</span> <span
  m='1441540'>the</span> <span m='1441660'>first</span> <span
  m='1441990'>word.</span> <span m='1443010'>And</span> <span
  m='1443540'>say,</span> <span m='1443860'>well,</span> <span
  m='1443950'>what</span> <span m='1444120'>if</span> <span m='1444260'>I</span>
  <span m='1444330'>started</span> <span m='1444640'>my</span> <span
  m='1444740'>second</span> <span m='1445060'>line</span> <span
  m='1445270'>here?</span> <span m='1446030'>At</span> <span
  m='1446220'>some</span> <span m='1446390'>point</span> <span
  m='1446750'>I'm</span> <span m='1446880'>going</span> <span
  m='1446990'>to</span> <span m='1447040'>be</span> <span
  m='1447200'>packing</span> <span m='1447560'>too</span> <span
  m='1447700'>much</span> <span m='1447950'>into</span> <span
  m='1448130'>the</span> <span m='1448240'>first</span> <span
  m='1448520'>line,</span> <span m='1448790'>and</span> <span
  m='1448910'>so</span> <span m='1449050'>I</span> <span
  m='1449420'>abort.</span> <span m='1450600'>But</span> <span
  m='1454030'>I'll</span> <span m='1454180'>try</span> <span
  m='1454370'>them</span> <span m='1454520'>all.</span> <span
  m='1454720'>Why</span> <span m='1454930'>not?</span> <span
  m='1456310'>OK,</span> <span m='1456420'>that's</span> <span
  m='1456670'>good.</span> </p><p><span m='1458070'>The</span> <span
  m='1458190'>issue</span> <span m='1458500'>is</span> <span
  m='1458670'>that</span> <span m='1458850'>once</span> <span
  m='1459160'>I've</span> <span m='1459290'>chosen</span> <span
  m='1459600'>where</span> <span m='1459690'>the</span> <span
  m='1459800'>second</span> <span m='1460180'>line</span> <span
  m='1460400'>is,</span> <span m='1460650'>of</span> <span
  m='1460660'>course</span> <span m='1460850'>the</span> <span
  m='1460940'>next</span> <span m='1461180'>thing</span> <span
  m='1461370'>I</span> <span m='1461400'>want</span> <span m='1461590'>to</span>
  <span m='1461630'>guess</span> <span m='1461890'>is</span> <span
  m='1462010'>where</span> <span m='1462150'>the</span> <span
  m='1462250'>third</span> <span m='1462510'>line</span> <span
  m='1462740'>begins.</span> <span m='1463220'>And</span> <span
  m='1463320'>then</span> <span m='1463450'>I</span> <span
  m='1463480'>want</span> <span m='1463650'>I</span> <span
  m='1463690'>guess</span> <span m='1463930'>where</span> <span
  m='1464030'>the</span> <span m='1464120'>fourth</span> <span
  m='1464390'>line</span> <span m='1464580'>begins,</span> <span m='1464980'>and
  so</span> <span m='1465210'>on.</span> <span m='1466230'>In</span> <span
  m='1466270'>general,</span> <span m='1466600'>I</span> <span
  m='1466680'>need</span> <span m='1466880'>to</span> <span
  m='1466980'>set</span> <span m='1467220'>up</span> <span m='1467330'>my</span>
  <span m='1467460'>sub-problems</span> <span m='1468240'>so</span> <span
  m='1468380'>that</span> <span m='1468560'>after</span> <span
  m='1468910'>I</span> <span m='1468980'>do</span> <span m='1469150'>the</span>
  <span m='1469260'>first</span> <span m='1469620'>guess</span> <span
  m='1471150'>I</span> <span m='1471310'>have</span> <span
  m='1471650'>the</span> <span m='1471730'>problem</span> <span
  m='1472190'>of</span> <span m='1472310'>the</span> <span
  m='1472430'>original</span> <span m='1472810'>type.</span> <span
  m='1474660'>So</span> <span m='1474880'>originally</span> <span
  m='1475280'>I</span> <span m='1475330'>have</span> <span
  m='1475900'>all</span> <span m='1476150'>the</span> <span
  m='1476230'>words.</span> <span m='1477530'>But</span> <span
  m='1477680'>after</span> <span m='1478500'>I</span> <span
  m='1478640'>guess</span> <span m='1479080'>where</span> <span
  m='1479390'>the</span> <span m='1479520'>second</span> <span
  m='1479860'>line</span> <span m='1480120'>begins,</span> <span
  m='1481210'>I</span> <span m='1481370'>have</span> <span
  m='1482550'>the</span> <span m='1482680'>remaining</span> <span
  m='1483090'>words.</span> </p><p><span m='1485870'>What's</span> <span
  m='1486130'>a</span> <span m='1486190'>good</span> <span
  m='1486410'>word</span> <span m='1486740'>for</span> <span
  m='1487790'>the</span> <span m='1487890'>remaining</span> <span
  m='1488340'>words?</span> <span m='1488930'>If</span> <span
  m='1489170'>I</span> <span m='1489240'>give</span> <span
  m='1489450'>you</span> <span m='1489610'>a</span> <span
  m='1489660'>list</span> <span m='1490340'>of</span> <span
  m='1490470'>words</span> <span m='1490980'>and</span> <span
  m='1491140'>I</span> <span m='1491220'>want</span> <span
  m='1491490'>from</span> <span m='1491630'>here</span> <span
  m='1491930'>on,</span> <span m='1492470'>it's</span> <span
  m='1492660'>called--</span> <span m='1495300'>what?</span> <span
  m='1497538'>A</span> <span m='1497980'>sub-problem,</span> <span
  m='1498730'>yes.</span> <span m='1499050'>That's</span> <span
  m='1499240'>what</span> <span m='1499320'>we</span> <span
  m='1499400'>want</span> <span m='1499560'>to</span> <span
  m='1499640'>define.</span> <span m='1502380'>It's</span> <span
  m='1502870'>called</span> <span m='1503060'>a</span> <span
  m='1503110'>suffix</span> <span m='1503545'>of</span> <span
  m='1503980'>the</span> <span m='1504230'>array.</span> <span
  m='1504910'>That's the</span> <span m='1505190'>word I</span> <span
  m='1505440'>was</span> <span m='1505590'>looking</span> <span
  m='1505840'>for.</span> <span m='1506100'>It's</span> <span
  m='1506190'>tough</span> <span m='1506420'>when</span> <span
  m='1506570'>I</span> <span m='1506880'>only</span> <span
  m='1507110'>have</span> <span m='1507280'>one</span> <span
  m='1507530'>word</span> <span m='1507770'>answers.</span> </p><p><span
  m='1509210'>So</span> <span m='1509490'>my</span> <span
  m='1509620'>sub-problems</span> <span m='1510240'>are</span> <span
  m='1510300'>going</span> <span m='1510420'>to</span> <span
  m='1510480'>be</span> <span m='1510940'>suffixes.</span> <span
  m='1516080'>Which</span> <span m='1516385'>is,</span> <span
  m='1516690'>in</span> <span m='1516930'>python</span> <span
  m='1517300'>notation,</span> <span m='1517860'>i</span> <span
  m='1518145'>colon.</span> <span m='1520580'>They</span> <span m='1520700'>call
  it</span> <span m='1521020'>splices.</span> <span m='1524990'>And</span> <span
  m='1525020'>how</span> <span m='1525240'>many</span> <span
  m='1525480'>sub-problems</span> <span m='1526130'>are</span> <span
  m='1526300'>there</span> <span m='1528530'>if</span> <span m='1528990'>I have
  n</span> <span m='1529450'>words?</span> <span m='1533510'>Two?</span> <span
  m='1535870'>Sorry?</span> </p><p><span m='1536683'>AUDIENCE: 2 to</span> <span
  m='1537146'>the n.</span> </p><p><span m='1537610'>PROFESSOR: 2</span> <span
  m='1537810'>the</span> <span m='1538040'>n?</span> <span
  m='1541150'>That</span> <span m='1541300'>would</span> <span
  m='1541380'>be</span> <span m='1541480'>a</span> <span
  m='1541550'>problem</span> <span m='1541970'>if it's</span> <span
  m='1542060'>2</span> <span m='1542350'>to</span> <span m='1542450'>the</span>
  <span m='1542670'>n.</span> <span m='1543700'>I</span> <span
  m='1543760'>hope</span> <span m='1543960'>it's</span> <span
  m='1544080'>only</span> <span m='1544360'>n.</span> <span
  m='1549980'>Originally,</span> <span m='1550510'>we</span> <span
  m='1550620'>said,</span> <span m='1550890'>OK,</span> <span
  m='1551470'>for</span> <span m='1551670'>every</span> <span
  m='1551960'>word,</span> <span m='1552270'>we're</span> <span
  m='1552380'>going</span> <span m='1552500'>to</span> <span
  m='1552560'>say,</span> <span m='1552820'>is</span> <span
  m='1552990'>this</span> <span m='1553280'>in</span> <span
  m='1553460'>our</span> <span m='1553590'>out?</span> <span
  m='1554160'>Is</span> <span m='1554330'>this the</span> <span
  m='1554550'>beginning</span> <span m='1554910'>or</span> <span
  m='1554990'>not?</span> <span m='1555360'>That's</span> <span
  m='1555490'>2</span> <span m='1555610'>to the</span> <span
  m='1555860'>n.</span> <span m='1556810'>But</span> <span
  m='1556950'>here,</span> <span m='1557180'>the</span> <span m='1557320'>idea
  is</span> <span m='1557630'>we're</span> <span m='1558390'>only</span> <span
  m='1558710'>thinking</span> <span m='1559000'>about,</span> <span
  m='1559240'>well,</span> <span m='1559430'>what</span> <span
  m='1559670'>are</span> <span m='1559760'>the</span> <span
  m='1559890'>words</span> <span m='1560160'>that</span> <span
  m='1560250'>remain?</span> <span m='1560830'>And</span> <span
  m='1560990'>it</span> <span m='1561060'>could</span> <span m='1561240'>be
  you've</span> <span m='1561710'>dealt</span> <span m='1561900'>with</span>
  <span m='1562040'>the</span> <span m='1562130'>first</span> <span
  m='1562350'>100</span> <span m='1562620'>words</span> <span
  m='1562950'>and</span> <span m='1563020'>then</span> <span
  m='1563100'>you've</span> <span m='1563210'>got</span> <span
  m='1563370'>n</span> <span m='1563510'>minus</span> <span
  m='1563770'>100</span> <span m='1564100'>left,</span> <span
  m='1564430'>or</span> <span m='1564600'>it could</span> <span
  m='1564750'>be</span> <span m='1564920'>you've dealt</span> <span
  m='1565230'>with the first</span> <span m='1565620'>thousand</span> <span
  m='1566110'>words and</span> <span m='1566200'>you've</span> <span
  m='1566290'>got</span> <span m='1566440'>n</span> <span
  m='1566550'>minus</span> <span m='1566800'>1,000.</span> <span
  m='1567170'>There's</span> <span m='1567290'>only</span> <span
  m='1567540'>n</span> <span m='1567760'>choices</span> <span
  m='1569350'>for</span> <span m='1570350'>that.</span> </p><p><span
  m='1570890'>We're</span> <span m='1571130'>only</span> <span
  m='1571380'>remembering</span> <span m='1571830'>one</span> <span
  m='1572060'>line,</span> <span m='1572480'>this</span> <span
  m='1572670'>is</span> <span m='1572810'>the</span> <span
  m='1572930'>key.</span> <span m='1574540'>Even</span> <span
  m='1574810'>though</span> <span m='1574990'>we</span> <span
  m='1575120'>may</span> <span m='1575310'>have</span> <span
  m='1575440'>already</span> <span m='1575820'>guessed</span> <span
  m='1576280'>several</span> <span m='1576680'>lines,</span> <span
  m='1577290'>we're</span> <span m='1577340'>just</span> <span
  m='1577540'>going</span> <span m='1577660'>to</span> <span
  m='1577710'>remember,</span> <span m='1578090'>well,</span> <span
  m='1578680'>OK.</span> <span m='1579110'>This</span> <span
  m='1579290'>is</span> <span m='1579390'>what</span> <span
  m='1579530'>we</span> <span m='1579620'>have</span> <span
  m='1579820'>left</span> <span m='1580050'>to</span> <span
  m='1580150'>do.</span> <span m='1580770'>So</span> <span
  m='1580950'>let's</span> <span m='1581130'>forget</span> <span
  m='1581400'>about</span> <span m='1581630'>the</span> <span
  m='1581710'>past.</span> <span m='1582900'>This</span> <span
  m='1583110'>is</span> <span m='1583160'>what</span> <span
  m='1583340'>makes</span> <span m='1583940'>dynamic</span> <span
  m='1584310'>programming</span> <span m='1584710'>efficient.</span> <span
  m='1585960'>And we're</span> <span m='1586210'>just</span> <span
  m='1586360'>going</span> <span m='1586450'>to</span> <span
  m='1586510'>solve</span> <span m='1586840'>it,</span> <span
  m='1587950'>solve</span> <span m='1588280'>these</span> <span
  m='1588440'>sub-problems,</span> <span m='1589250'>forgetting</span> <span
  m='1589590'>about</span> <span m='1589830'>the</span> <span
  m='1589900'>past.</span> </p><p><span m='1590910'>So</span> <span
  m='1591250'>the</span> <span m='1591390'>sub-problem--</span> <span
  m='1592100'>I'm</span> <span m='1592250'>not</span> <span
  m='1592400'>going</span> <span m='1592530'>to</span> <span
  m='1592600'>write</span> <span m='1592800'>it</span> <span
  m='1592910'>here--</span> <span m='1593150'>is</span> <span
  m='1593670'>if</span> <span m='1593830'>I</span> <span m='1593900'>give</span>
  <span m='1594130'>you</span> <span m='1594240'>these</span> <span
  m='1594540'>words,</span> <span m='1595120'>never</span> <span
  m='1595400'>mind</span> <span m='1595870'>the</span> <span
  m='1596050'>other</span> <span m='1596260'>words,</span> <span
  m='1597070'>how</span> <span m='1597160'>do</span> <span m='1597280'>I</span>
  <span m='1597360'>pack</span> <span m='1597700'>them</span> <span
  m='1597940'>optimally</span> <span m='1598420'>into</span> <span
  m='1598600'>a</span> <span m='1598660'>paragraph?</span> <span
  m='1600290'>I</span> <span m='1600380'>don't</span> <span
  m='1600570'>care</span> <span m='1600850'>about</span> <span
  m='1601070'>the</span> <span m='1601180'>other</span> <span
  m='1601330'>words,</span> <span m='1601640'>just</span> <span
  m='1601940'>these</span> <span m='1602410'>words.</span> <span
  m='1602920'>So</span> <span m='1603040'>this</span> <span
  m='1603250'>is</span> <span m='1603390'>a</span> <span
  m='1603460'>different</span> <span m='1604240'>version</span> <span
  m='1604640'>of</span> <span m='1604760'>the</span> <span
  m='1604850'>same</span> <span m='1605130'>problem.</span> <span
  m='1605560'>Initially,</span> <span m='1605920'>we</span> <span
  m='1606010'>have</span> <span m='1606110'>n</span> <span
  m='1606250'>words</span> <span m='1606450'>to</span> <span
  m='1606560'>do.</span> <span m='1606730'>Now</span> <span m='1606900'>I</span>
  <span m='1606980'>have</span> <span m='1607180'>n</span> <span
  m='1607360'>minus</span> <span m='1607680'>i</span> <span
  m='1607820'>words</span> <span m='1608130'>to</span> <span
  m='1608240'>do.</span> <span m='1608970'>But</span> <span
  m='1609270'>it's</span> <span m='1609540'>again</span> <span
  m='1610050'>text</span> <span m='1610340'>justification.</span> <span
  m='1610980'>I</span> <span m='1611010'>want</span> <span m='1611160'>to</span>
  <span m='1611210'>solve</span> <span m='1611490'>this</span> <span
  m='1611670'>problem</span> <span m='1612830'>on</span> <span
  m='1613480'>those</span> <span m='1613720'>words.</span> <span
  m='1614650'>That's</span> <span m='1614870'>just how</span> <span
  m='1615060'>I'm</span> <span m='1615210'>going</span> <span
  m='1615300'>to</span> <span m='1615380'>define</span> <span
  m='1615780'>it.</span> </p><p><span m='1616200'>This</span> <span
  m='1616360'>will</span> <span m='1616490'>work</span> <span
  m='1616930'>if</span> <span m='1617140'>I</span> <span m='1617230'>can</span>
  <span m='1617420'>specify</span> <span m='1618630'>a</span> <span
  m='1618710'>recurrence</span> <span m='1619100'>relation.</span> <span
  m='1620890'>As</span> <span m='1621090'>we</span> <span
  m='1621170'>said,</span> <span m='1622440'>what</span> <span
  m='1622660'>we</span> <span m='1622800'>guess</span> <span
  m='1624340'>is</span> <span m='1625580'>where</span> <span
  m='1626190'>to</span> <span m='1626310'>break</span> <span
  m='1626730'>the</span> <span m='1626810'>first</span> <span
  m='1627150'>line,</span> <span m='1627450'>where</span> <span
  m='1627630'>to</span> <span m='1628990'>start</span> <span
  m='1629450'>the</span> <span m='1629540'>second</span> <span
  m='1629890'>line</span> <span m='1633940'>for</span> <span
  m='1634020'>those</span> <span m='1634310'>words.</span> <span
  m='1636870'>OK,</span> <span m='1637070'>so</span> <span
  m='1637210'>this</span> <span m='1637460'>is--</span> <span
  m='1640722'>it</span> <span m='1641190'>could</span> <span
  m='1641410'>be</span> <span m='1642560'>the i</span> <span
  m='1642670'>plus</span> <span m='1643100'>first</span> <span
  m='1643390'>line.</span> <span m='1643690'>It</span> <span
  m='1643780'>could</span> <span m='1643920'>be</span> <span m='1644110'>the
  i</span> <span m='1644350'>plus</span> <span m='1644460'>second</span> <span
  m='1644800'>line--</span> <span m='1645170'>or</span> <span
  m='1645610'>sorry,</span> <span m='1645970'>word.</span> <span
  m='1646930'>Some</span> <span m='1647380'>word</span> <span
  m='1647430'>after</span> <span m='1647750'>i</span> <span
  m='1649500'>is</span> <span m='1649670'>where</span> <span
  m='1649810'>we</span> <span m='1650520'>guess</span> <span
  m='1650790'>the</span> <span m='1650850'>second</span> <span
  m='1651150'>word.</span> <span m='1651740'>The</span> <span
  m='1651830'>number</span> <span m='1652200'>of</span> <span
  m='1652770'>choices</span> <span m='1653300'>for</span> <span
  m='1653400'>the</span> <span m='1653500'>guess</span> <span
  m='1656360'>is</span> <span m='1656520'>at</span> <span
  m='1656610'>most</span> <span m='1658120'>n</span> <span
  m='1658330'>minus</span> <span m='1658680'>i.</span> <span
  m='1659450'>I'm</span> <span m='1659600'>just</span> <span
  m='1659740'>going</span> <span m='1659840'>to</span> <span
  m='1659930'>think</span> <span m='1660070'>of</span> <span
  m='1660130'>that</span> <span m='1660320'>as</span> <span
  m='1660400'>order</span> <span m='1660670'>n.</span> <span
  m='1663040'>It</span> <span m='1663130'>won't</span> <span
  m='1663340'>matter.</span> </p><p><span m='1665220'>The</span> <span
  m='1665330'>third</span> <span m='1665550'>part</span> <span
  m='1665810'>is</span> <span m='1666000'>we</span> <span
  m='1666110'>need</span> <span m='1666410'>a</span> <span
  m='1666490'>recurrence</span> <span m='1667380'>relation.</span> <span
  m='1673540'>I</span> <span m='1673710'>claim</span> <span
  m='1674010'>this</span> <span m='1674200'>is</span> <span
  m='1674330'>very</span> <span m='1674570'>easy.</span> <span
  m='1676450'>I'm</span> <span m='1676660'>going</span> <span
  m='1676950'>to--</span> <span m='1679480'>I</span> <span
  m='1679590'>didn't</span> <span m='1679810'>give</span> <span
  m='1679970'>this</span> <span m='1680220'>problem</span> <span
  m='1680720'>a</span> <span m='1680760'>name,</span> <span
  m='1682130'>so</span> <span m='1682290'>I'm</span> <span
  m='1682400'>just</span> <span m='1682580'>going</span> <span
  m='1682730'>to</span> <span m='1682830'>write</span> <span
  m='1683100'>it</span> <span m='1683270'>as</span> <span m='1685150'>DP</span>
  <span m='1686066'>of</span> <span m='1686524'>i.</span> <span
  m='1689730'>So</span> <span m='1690640'>this is</span> <span
  m='1690860'>going</span> <span m='1690970'>to</span> <span
  m='1691020'>be</span> <span m='1691140'>the</span> <span
  m='1691250'>solution</span> <span m='1691900'>to</span> <span
  m='1692040'>that</span> <span m='1692320'>suffix,</span> <span
  m='1692900'>words</span> <span m='1693500'>from</span> <span
  m='1693830'>i</span> <span m='1694220'>onward.</span> <span
  m='1698030'>And</span> <span m='1698450'>I'd</span> <span
  m='1698650'>like</span> <span m='1698900'>to--</span> <span
  m='1700640'>what</span> <span m='1700840'>I</span> <span
  m='1700880'>want</span> <span m='1701070'>to</span> <span
  m='1701140'>do</span> <span m='1701370'>is</span> <span
  m='1701520'>consider</span> <span m='1702010'>all</span> <span
  m='1702300'>possible</span> <span m='1703180'>guesses.</span> <span
  m='1704520'>So</span> <span m='1704630'>I</span> <span m='1704680'>mean</span>
  <span m='1704830'>this</span> <span m='1705000'>is</span> <span
  m='1705170'>going</span> <span m='1705320'>to</span> <span
  m='1705370'>be</span> <span m='1705490'>pretty</span> <span
  m='1705780'>formulaic</span> <span m='1706350'>at</span> <span
  m='1706420'>this</span> <span m='1706580'>point.</span> <span
  m='1706930'>After</span> <span m='1707200'>I've</span> <span
  m='1707250'>set</span> <span m='1707480'>up</span> <span
  m='1707620'>these</span> <span m='1707820'>ideas</span> <span
  m='1708830'>there's</span> <span m='1708930'>pretty</span> <span
  m='1709110'>much</span> <span m='1709290'>only</span> <span
  m='1709490'>one</span> <span m='1709690'>thing</span> <span
  m='1709900'>I</span> <span m='1709940'>can</span> <span
  m='1710100'>write</span> <span m='1710300'>here,</span> <span
  m='1711060'>which</span> <span m='1711320'>is</span> <span
  m='1711720'>I</span> <span m='1711880'>want</span> <span m='1712270'>to</span>
  <span m='1713300'>do</span> <span m='1713720'>a</span> <span
  m='1716190'>for</span> <span m='1716520'>loop.</span> <span
  m='1728080'>That</span> <span m='1728310'>would</span> <span
  m='1728450'>be</span> <span m='1728600'>the</span> <span
  m='1728700'>for</span> <span m='1728970'>loop</span> <span
  m='1729680'>of</span> <span m='1729920'>where</span> <span
  m='1730380'>the</span> <span m='1730500'>second</span> <span
  m='1731360'>line</span> <span m='1731710'>can</span> <span
  m='1731880'>start.</span> </p><p><span m='1732680'>I</span> <span
  m='1732740'>can't</span> <span m='1733015'>start</span> <span m='1733290'>at
  i,</span> <span m='1733600'>because</span> <span m='1733910'>that's</span>
  <span m='1734140'>where</span> <span m='1734230'>the</span> <span
  m='1734320'>first</span> <span m='1734590'>line</span> <span
  m='1734780'>starts.</span> <span m='1735580'>But it</span> <span
  m='1735730'>could</span> <span m='1735870'>start</span> <span m='1736170'>at
  i</span> <span m='1736290'>plus</span> <span m='1736530'>1.</span> <span
  m='1738510'>And</span> <span m='1739090'>this</span> <span
  m='1739320'>special</span> <span m='1739810'>value</span> <span
  m='1740370'>of</span> <span m='1740720'>n</span> <span m='1741530'>will</span>
  <span m='1741790'>mean</span> <span m='1742480'>that</span> <span
  m='1743260'>there</span> <span m='1743430'>is</span> <span
  m='1743540'>no</span> <span m='1743650'>second</span> <span
  m='1743970'>line.</span> <span m='1746044'>OK,</span> <span
  m='1746950'>so</span> <span m='1747000'>DP</span> <span m='1747260'>of</span>
  <span m='1747535'>i--</span> <span m='1748190'>now</span> <span
  m='1748300'>I</span> <span m='1748350'>want</span> <span m='1748540'>to</span>
  <span m='1748600'>do</span> <span m='1748720'>this</span> <span
  m='1748920'>for</span> <span m='1749150'>loop</span> <span
  m='1749420'>in</span> <span m='1749540'>order</span> <span
  m='1749710'>to</span> <span m='1749830'>try</span> <span
  m='1750160'>all</span> <span m='1750400'>the</span> <span
  m='1750480'>possible</span> <span m='1750930'>guesses.</span> <span
  m='1751320'>j</span> <span m='1751630'>will</span> <span m='1751770'>be</span>
  <span m='1751920'>the</span> <span m='1752030'>word</span> <span
  m='1752310'>where</span> <span m='1752920'>the</span> <span
  m='1753020'>next</span> <span m='1753250'>thing</span> <span
  m='1753390'>starts.</span> <span m='1754320'>So</span> <span
  m='1754480'>then</span> <span m='1754680'>what</span> <span
  m='1754870'>do</span> <span m='1754980'>I</span> <span
  m='1755090'>write</span> <span m='1755500'>up</span> <span
  m='1755700'>here?</span> <span m='1758890'>If</span> <span
  m='1759050'>I</span> <span m='1759100'>make</span> <span
  m='1759380'>this</span> <span m='1759600'>guess--</span> <span m='1761828'>all
  right, so</span> <span m='1762250'>I</span> <span m='1762570'>have</span>
  <span m='1764590'>word</span> <span m='1764850'>i</span> <span
  m='1765660'>is</span> <span m='1766430'>the</span> <span
  m='1766520'>first</span> <span m='1766920'>word</span> <span
  m='1767520'>of</span> <span m='1767770'>the</span> <span
  m='1767850'>first</span> <span m='1768360'>line.</span> <span
  m='1769730'>And</span> <span m='1769910'>then</span> <span
  m='1770090'>word</span> <span m='1770310'>j</span> <span m='1771090'>is</span>
  <span m='1771240'>the</span> <span m='1771310'>first</span> <span
  m='1771610'>word</span> <span m='1771760'>of</span> <span
  m='1771840'>the</span> <span m='1771910'>second</span> <span
  m='1772250'>line.</span> </p><p><span m='1775240'>And</span> <span
  m='1775450'>then</span> <span m='1775580'>there's</span> <span
  m='1775750'>more</span> <span m='1775940'>stuff</span> <span
  m='1776230'>down</span> <span m='1776420'>below.</span> <span
  m='1776730'>I</span> <span m='1776810'>don't</span> <span
  m='1776970'>know</span> <span m='1777100'>what</span> <span
  m='1777230'>that</span> <span m='1777430'>is.</span> <span
  m='1779000'>But</span> <span m='1780280'>how</span> <span
  m='1781380'>can</span> <span m='1781540'>I</span> <span m='1782560'>use</span>
  <span m='1782740'>recursion</span> <span m='1783270'>to</span> <span
  m='1783370'>specify</span> <span m='1783760'>this?</span> <span
  m='1789480'>DP</span> <span m='1789955'>of</span> <span m='1790430'>j,</span>
  <span m='1791670'>exactly.</span> <span m='1795650'>I</span> <span
  m='1795740'>guess</span> <span m='1796060'>if</span> <span
  m='1796390'>I'm</span> <span m='1796530'>doing</span> <span
  m='1796730'>recursion,</span> <span m='1797360'>I</span> <span
  m='1797540'>should</span> <span m='1797740'>use</span> <span
  m='1798210'>parentheses</span> <span m='1799080'>instead</span> <span
  m='1799495'>of</span> <span m='1799910'>brackets.</span> <span
  m='1800580'>But</span> <span m='1801380'>if</span> <span
  m='1801430'>you're</span> <span m='1801520'>doing</span> <span
  m='1801740'>it</span> <span m='1801790'>bottom</span> <span
  m='1802130'>up,</span> <span m='1802280'>it</span> <span
  m='1802380'>would</span> <span m='1802510'>be</span> <span
  m='1802620'>square</span> <span m='1802880'>brackets.</span> <span
  m='1805760'>So</span> <span m='1805910'>that's</span> <span
  m='1806150'>just</span> <span m='1806340'>DP</span> <span
  m='1806700'>of</span> <span m='1806800'>j.</span> <span
  m='1807060'>That's</span> <span m='1807360'>the</span> <span
  m='1807480'>cost</span> <span m='1809360'>of</span> <span
  m='1810970'>the</span> <span m='1811130'>rest</span> <span
  m='1811440'>of</span> <span m='1811510'>the</span> <span
  m='1811600'>problem.</span> </p><p><span m='1812170'>And</span> <span
  m='1812600'>I</span> <span m='1812690'>can</span> <span
  m='1812830'>assume</span> <span m='1813310'>that that's</span> <span
  m='1813720'>free</span> <span m='1814130'>to</span> <span
  m='1814290'>compute.</span> <span m='1815140'>This</span> <span
  m='1815320'>is</span> <span m='1815430'>the</span> <span
  m='1815540'>magic</span> <span m='1815950'>of</span> <span
  m='1816040'>dynamic</span> <span m='1816430'>programming.</span> <span
  m='1817330'>But</span> <span m='1817720'>then</span> <span
  m='1817950'>I</span> <span m='1818040'>also</span> <span
  m='1818340'>have</span> <span m='1818550'>to</span> <span
  m='1818700'>think</span> <span m='1818910'>about,</span> <span
  m='1820110'>well,</span> <span m='1820490'>what</span> <span
  m='1820660'>about</span> <span m='1820880'>the</span> <span
  m='1820960'>first</span> <span m='1821290'>line?</span> <span
  m='1821900'>How</span> <span m='1822040'>much</span> <span
  m='1822260'>does</span> <span m='1822350'>that</span> <span
  m='1822590'>cost?</span> <span m='1824140'>Well,</span> <span
  m='1824270'>that's</span> <span m='1824560'>just</span> <span
  m='1824880'>badness</span> <span m='1825320'>of</span> <span
  m='1825450'>ij.</span> <span m='1827040'>And</span> <span
  m='1827150'>we've</span> <span m='1827300'>already</span> <span
  m='1827520'>defined</span> <span m='1827910'>that.</span> <span
  m='1828110'>We</span> <span m='1828210'>can</span> <span
  m='1828480'>compute</span> <span m='1828550'>it in</span> <span
  m='1828680'>constant</span> <span m='1829030'>time.</span> <span
  m='1830140'>Dynamic</span> <span m='1830500'>programming</span> <span
  m='1830890'>doesn't</span> <span m='1831130'>really</span> <span
  m='1831370'>care</span> <span m='1831610'>what</span> <span
  m='1831820'>this</span> <span m='1832000'>is.</span> <span
  m='1832160'>It</span> <span m='1832230'>could</span> <span
  m='1832350'>be</span> <span m='1832560'>anything.</span> <span
  m='1833480'>As</span> <span m='1833560'>long</span> <span
  m='1833710'>as</span> <span m='1833780'>you're</span> <span
  m='1833880'>trying</span> <span m='1834070'>to</span> <span
  m='1834120'>minimize</span> <span m='1834500'>the</span> <span
  m='1834590'>sum</span> <span m='1834930'>of</span> <span
  m='1835020'>the</span> <span m='1835110'>badnesses,</span> <span
  m='1836150'>whatever</span> <span m='1836580'>function is</span> <span
  m='1837070'>in</span> <span m='1837180'>here,</span> <span
  m='1837490'>we</span> <span m='1837980'>just</span> <span
  m='1838270'>compute</span> <span m='1838525'>it</span> <span
  m='1838780'>here.</span> </p><p><span m='1840420'>That's</span> <span
  m='1840610'>the</span> <span m='1840720'>power of</span> <span
  m='1841030'>dynamic</span> <span m='1841430'>programming.</span> <span
  m='1841830'>It</span> <span m='1841910'>works</span> <span
  m='1842120'>for</span> <span m='1842280'>all</span> <span
  m='1842750'>variations</span> <span m='1843300'>of</span> <span
  m='1843360'>this</span> <span m='1843510'>problem,</span> <span
  m='1843900'>however</span> <span m='1844220'>you</span> <span
  m='1844320'>define</span> <span m='1844660'>badness.</span> <span
  m='1845655'>So</span> <span m='1845950'>you</span> <span
  m='1846040'>might</span> <span m='1846240'>say,</span> <span
  m='1846390'>oh,</span> <span m='1846520'>that's</span> <span
  m='1846730'>a</span> <span m='1846790'>weird</span> <span
  m='1846980'>definition.</span> <span m='1847480'>I</span> <span
  m='1847540'>want</span> <span m='1847720'>to</span> <span
  m='1847760'>use</span> <span m='1847900'>something</span> <span
  m='1848220'>else</span> <span m='1848440'>instead.</span> <span
  m='1849050'>That's</span> <span m='1849230'>fine,</span> <span
  m='1849490'>as</span> <span m='1849610'>long</span> <span
  m='1849820'>as</span> <span m='1849890'>you</span> <span
  m='1850000'>can</span> <span m='1850120'>compute</span> <span
  m='1850470'>it</span> <span m='1850670'>in</span> <span
  m='1850750'>terms</span> <span m='1850970'>of</span> <span
  m='1851040'>just</span> <span m='1851220'>i</span> <span
  m='1851350'>and</span> <span m='1851510'>j</span> <span m='1852300'>and</span>
  <span m='1852580'>looking</span> <span m='1852930'>at</span> <span
  m='1853010'>those</span> <span m='1853210'>words.</span> </p><p><span
  m='1855520'>OK,</span> <span m='1855740'>now</span> <span m='1855920'>I</span>
  <span m='1855990'>need</span> <span m='1856180'>to</span> <span
  m='1856310'>do</span> <span m='1856990'>a</span> <span m='1857100'>min
  over</span> <span m='1857600'>the</span> <span m='1857700'>whole</span> <span
  m='1857890'>thing.</span> <span m='1858650'>So</span> <span
  m='1858790'>I</span> <span m='1858820'>want</span> <span m='1858970'>to</span>
  <span m='1859020'>minimize</span> <span m='1859640'>the</span> <span
  m='1859700'>sum</span> <span m='1859940'>of</span> <span
  m='1859980'>the</span> <span m='1860050'>badnesses.</span> <span
  m='1863240'>So</span> <span m='1863380'>I</span> <span
  m='1863450'>compute</span> <span m='1864050'>for</span> <span
  m='1864220'>every</span> <span m='1864550'>guess</span> <span
  m='1864910'>of</span> <span m='1865020'>j,</span> <span m='1865960'>I</span>
  <span m='1866060'>compute</span> <span m='1866440'>the</span> <span
  m='1866520'>cost</span> <span m='1866870'>of</span> <span
  m='1866920'>the</span> <span m='1867000'>rest</span> <span
  m='1867250'>of</span> <span m='1867290'>the</span> <span
  m='1867360'>problem</span> <span m='1867690'>plus</span> <span
  m='1868000'>the</span> <span m='1868090'>cost</span> <span
  m='1868460'>of</span> <span m='1868540'>that</span> <span
  m='1868830'>first</span> <span m='1869200'>line.</span> <span
  m='1870590'>And</span> <span m='1870730'>this,</span> <span
  m='1870900'>is</span> <span m='1871030'>in</span> <span
  m='1871120'>some</span> <span m='1871310'>sense,</span> <span
  m='1871530'>checking</span> <span m='1871910'>all</span> <span
  m='1872270'>possible</span> <span m='1872680'>solutions</span> <span
  m='1873930'>magically.</span> <span m='1876880'>OK.</span> <span
  m='1878320'>That's</span> <span m='1878610'>the</span> <span
  m='1878650'>recurrence.</span> </p><p><span m='1880360'>We</span> <span
  m='1880600'>need</span> <span m='1880820'>to</span> <span
  m='1880940'>check</span> <span m='1881310'>some</span> <span
  m='1882210'>things.</span> <span m='1883370'>I</span> <span
  m='1883500'>guess</span> <span m='1883730'>right</span> <span
  m='1883900'>now</span> <span m='1884120'>we</span> <span
  m='1884210'>just</span> <span m='1884390'>want</span> <span
  m='1884520'>to</span> <span m='1884640'>compute</span> <span
  m='1884980'>how</span> <span m='1885100'>much</span> <span
  m='1885360'>time</span> <span m='1886280'>does</span> <span
  m='1886430'>this</span> <span m='1886590'>cost,</span> <span
  m='1887930'>time</span> <span m='1888360'>per</span> <span
  m='1888500'>sub-problem.</span> <span m='1895110'>To</span> <span
  m='1895180'>do</span> <span m='1895280'>this</span> <span
  m='1895470'>for</span> <span m='1895700'>loop,</span> <span
  m='1896570'>basically</span> <span m='1896940'>I</span> <span
  m='1896990'>do</span> <span m='1897150'>constant</span> <span
  m='1897650'>work--</span> <span m='1898170'>all</span> <span m='1898390'>of
  this</span> <span m='1898560'>is</span> <span m='1898660'>constant</span>
  <span m='1899010'>work--</span> <span m='1899340'>for</span> <span
  m='1899490'>each</span> <span m='1899730'>choice.</span> <span
  m='1900910'>So</span> <span m='1900960'>there's</span> <span
  m='1901140'>order</span> <span m='1901360'>n</span> <span
  m='1901550'>choices,</span> <span m='1902565'>so</span> <span
  m='1902900'>this</span> <span m='1903120'>is</span> <span
  m='1903240'>order</span> <span m='1903520'>n.</span> <span
  m='1911810'>Now</span> <span m='1912010'>we</span> <span
  m='1912110'>have</span> <span m='1912220'>to</span> <span
  m='1912330'>check</span> <span m='1912585'>that</span> <span
  m='1912840'>there's</span> <span m='1913140'>a</span> <span
  m='1913200'>topological</span> <span m='1913840'>order</span> <span
  m='1918960'>for</span> <span m='1919200'>this</span> <span
  m='1919390'>problem</span> <span m='1920740'>or</span> <span
  m='1920840'>for</span> <span m='1920950'>these</span> <span
  m='1921070'>sub-problems.</span> </p><p><span m='1922920'>And</span> <span
  m='1923530'>this</span> <span m='1923880'>is</span> <span
  m='1924340'>easy,</span> <span m='1925120'>but</span> <span
  m='1925360'>a</span> <span m='1925430'>little</span> <span
  m='1925670'>different</span> <span m='1926210'>from</span> <span
  m='1926490'>what</span> <span m='1926620'>we've</span> <span
  m='1926750'>done</span> <span m='1926930'>before</span> <span
  m='1927860'>because</span> <span m='1928450'>we</span> <span
  m='1928590'>have</span> <span m='1928770'>to</span> <span
  m='1928870'>actually</span> <span m='1929170'>work</span> <span
  m='1929430'>from</span> <span m='1929570'>the</span> <span
  m='1929770'>end</span> <span m='1930390'>backwards,</span> <span
  m='1931970'>because</span> <span m='1932170'>we're</span> <span
  m='1932290'>expressing</span> <span m='1932880'>DP</span> <span
  m='1933220'>of</span> <span m='1933370'>i in</span> <span
  m='1933870'>terms</span> <span m='1934120'>of</span> <span
  m='1934190'>DP</span> <span m='1934580'>of</span> <span
  m='1934670'>larger</span> <span m='1935170'>values</span> <span
  m='1935670'>of</span> <span m='1935770'>i.</span> <span m='1936280'>j</span>
  <span m='1936490'>is</span> <span m='1936630'>always</span> <span
  m='1936850'>bigger</span> <span m='1937130'>than</span> <span
  m='1937300'>i.</span> <span m='1938600'>And</span> <span m='1938750'>so</span>
  <span m='1938860'>we</span> <span m='1938960'>have</span> <span
  m='1939100'>to</span> <span m='1939200'>do</span> <span m='1939320'>it</span>
  <span m='1939400'>from</span> <span m='1939540'>the</span> <span
  m='1939640'>right</span> <span m='1939880'>end</span> <span
  m='1940250'>back</span> <span m='1940520'>to</span> <span
  m='1940630'>the</span> <span m='1940760'>beginning.</span> <span
  m='1947209'>And</span> <span m='1948160'>n</span> <span
  m='1948320'>minus</span> <span m='1948570'>1</span> <span
  m='1949590'>down</span> <span m='1949810'>to</span> <span
  m='1949920'>0.</span> <span m='1950260'>I</span> <span
  m='1950600'>didn't</span> <span m='1950870'>actually</span> <span
  m='1951110'>define</span> <span m='1951880'>DP</span> <span m='1952360'>of
  n.</span> <span m='1952670'>There's</span> <span m='1952890'>a</span> <span
  m='1952940'>base</span> <span m='1953260'>case</span> <span
  m='1953540'>here</span> <span m='1954730'>which</span> <span
  m='1955070'>is</span> <span m='1957610'>DP</span> <span m='1959012'>of</span>
  <span m='1959350'>n</span> <span m='1960890'>equals</span> <span
  m='1961470'>0.</span> </p><p><span m='1962830'>Because</span> <span
  m='1963010'>the</span> <span m='1963090'>meaning</span> <span
  m='1963320'>of</span> <span m='1963390'>DP</span> <span m='1963720'>of</span>
  <span m='1963800'>n</span> <span m='1964000'>is</span> <span
  m='1964130'>I</span> <span m='1964190'>have</span> <span
  m='1964380'>zero</span> <span m='1964820'>words,</span> <span
  m='1965430'>the</span> <span m='1965590'>nth</span> <span
  m='1965840'>word</span> <span m='1966180'>onward.</span> <span
  m='1966740'>There</span> <span m='1967280'>is</span> <span
  m='1967370'>no</span> <span m='1967645'>nth word.</span> <span
  m='1967920'>It's</span> <span m='1968100'>0</span> <span m='1968370'>to</span>
  <span m='1968470'>n</span> <span m='1968630'>minus</span> <span
  m='1968920'>1</span> <span m='1969400'>in</span> <span m='1969560'>this</span>
  <span m='1969730'>notation.</span> <span m='1970890'>So</span> <span
  m='1971040'>I</span> <span m='1971120'>don't</span> <span
  m='1971300'>pay</span> <span m='1971460'>anything</span> <span
  m='1971880'>for</span> <span m='1972000'>a</span> <span
  m='1972590'>blank</span> <span m='1972970'>line.</span> <span
  m='1976030'>OK,</span> <span m='1976290'>so</span> <span
  m='1976500'>that's</span> <span m='1978090'>our</span> <span
  m='1978260'>top</span> <span m='1978460'>logical</span> <span
  m='1978930'>order.</span> <span m='1979410'>This</span> <span
  m='1979570'>one,</span> <span m='1979790'>of</span> <span
  m='1979910'>course,</span> <span m='1980350'>is</span> <span
  m='1980510'>instantaneous.</span> <span m='1981720'>And</span> <span
  m='1981940'>then</span> <span m='1982190'>we</span> <span
  m='1982320'>work</span> <span m='1982570'>backwards.</span> <span
  m='1983240'>And</span> <span m='1983450'>always</span> <span
  m='1983750'>whenever</span> <span m='1984040'>we</span> <span
  m='1984130'>need</span> <span m='1984260'>to</span> <span
  m='1984320'>compute</span> <span m='1984660'>something,</span> <span
  m='1985450'>we</span> <span m='1985720'>already</span> <span
  m='1985970'>have</span> <span m='1986220'>the</span> <span
  m='1986280'>value.</span> </p><p><span m='1988760'>The</span> <span
  m='1988880'>total</span> <span m='1989160'>time</span> <span
  m='1989460'>we</span> <span m='1989570'>get</span> <span m='1993820'>is</span>
  <span m='1994040'>going</span> <span m='1994190'>to</span> <span
  m='1994260'>be</span> <span m='1994640'>the</span> <span
  m='1994700'>number</span> <span m='1995060'>of</span> <span
  m='1995120'>sub</span> <span m='1995350'>problems--</span> <span
  m='1995910'>which</span> <span m='1996050'>is</span> <span
  m='1996200'>n</span> <span m='1996700'>times</span> <span
  m='1997490'>the</span> <span m='1998030'>running</span> <span
  m='1998310'>time</span> <span m='1998600'>per</span> <span
  m='1998760'>sub-problem.</span> <span m='1999820'>which</span> <span
  m='1999920'>is</span> <span m='2000020'>order</span> <span
  m='2000180'>n,</span> <span m='2001800'>which</span> <span
  m='2002160'>is</span> <span m='2002280'>order</span> <span
  m='2002530'>n</span> <span m='2002720'>squared.</span> <span m='2003220'>And
  in</span> <span m='2003420'>the</span> <span m='2003490'>worst</span> <span
  m='2003750'>case,</span> <span m='2004190'>it</span> <span m='2004480'>is
  indeed</span> <span m='2004530'>theta</span> <span m='2004875'>n</span> <span
  m='2005220'>squared.</span> <span m='2007330'>Although</span> <span
  m='2007510'>in</span> <span m='2007570'>practice</span> <span
  m='2008030'>it's</span> <span m='2008180'>going</span> <span
  m='2008290'>to</span> <span m='2008360'>work</span> <span
  m='2008580'>better,</span> <span m='2008860'>because</span> <span
  m='2009150'>lines</span> <span m='2009430'>can't</span> <span
  m='2009650'>be</span> <span m='2009810'>too</span> <span
  m='2010030'>long.</span> <span m='2012350'>So</span> <span
  m='2012540'>that's</span> <span m='2012990'>the</span> <span
  m='2013090'>running</span> <span m='2013320'>time.</span> </p><p><span
  m='2013680'>Then</span> <span m='2013890'>finally</span> <span
  m='2014250'>we</span> <span m='2014380'>have</span> <span
  m='2014520'>to</span> <span m='2014620'>check</span> <span
  m='2014990'>that</span> <span m='2015150'>the</span> <span
  m='2015260'>original</span> <span m='2015590'>problem</span> <span
  m='2016050'>actually</span> <span m='2016410'>gets</span> <span
  m='2016630'>solved.</span> <span m='2018150'>And</span> <span
  m='2018300'>in</span> <span m='2018380'>this</span> <span
  m='2018580'>case,</span> <span m='2019120'>the</span> <span
  m='2019230'>original</span> <span m='2019570'>problem</span> <span
  m='2020040'>we</span> <span m='2020130'>need</span> <span
  m='2020290'>to</span> <span m='2020370'>solve</span> <span
  m='2020870'>is</span> <span m='2022030'>DP</span> <span m='2022650'>of</span>
  <span m='2022850'>0</span> <span m='2024850'>because</span> <span
  m='2025190'>DP of</span> <span m='2025530'>0</span> <span
  m='2025850'>means</span> <span m='2026120'>I</span> <span
  m='2026190'>take</span> <span m='2026420'>words</span> <span
  m='2026770'>from</span> <span m='2026980'>0</span> <span
  m='2027390'>onwards.</span> <span m='2027850'>That's</span> <span
  m='2028040'>everybody.</span> <span m='2029740'>So</span> <span
  m='2030300'>that's</span> <span m='2030550'>the</span> <span
  m='2030660'>actual</span> <span m='2030950'>problem</span> <span
  m='2031260'>I</span> <span m='2031310'>want</span> <span m='2031480'>to</span>
  <span m='2031540'>solve.</span> <span m='2032500'>So</span> <span
  m='2032560'>we</span> <span m='2032640'>work</span> <span
  m='2032870'>backwards.</span> <span m='2033410'>We</span> <span
  m='2033510'>solve</span> <span m='2033620'>all</span> <span
  m='2033740'>these</span> <span m='2033870'>sub-problems</span> <span
  m='2034360'>that</span> <span m='2034440'>we</span> <span
  m='2034530'>don't</span> <span m='2034680'>directly</span> <span
  m='2035090'>care</span> <span m='2035300'>about,</span> <span
  m='2035520'>but</span> <span m='2035620'>then</span> <span
  m='2035750'>the</span> <span m='2035830'>first</span> <span
  m='2036140'>one</span> <span m='2036310'>is</span> <span
  m='2036420'>the</span> <span m='2036510'>one</span> <span
  m='2036670'>we</span> <span m='2036780'>want.</span> <span
  m='2037490'>And</span> <span m='2037640'>we're</span> <span
  m='2037750'>done.</span> </p><p><span m='2038620'>So</span> <span
  m='2038820'>in</span> <span m='2038920'>quadratic</span> <span
  m='2039380'>time,</span> <span m='2040230'>we</span> <span
  m='2040380'>can</span> <span m='2040520'>find</span> <span
  m='2040790'>the</span> <span m='2040850'>best</span> <span
  m='2041200'>way</span> <span m='2041330'>to</span> <span
  m='2041420'>pack</span> <span m='2043380'>words</span> <span
  m='2043810'>into</span> <span m='2044000'>lines.</span> <span
  m='2045140'>Question?</span> </p><p><span m='2046042'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='2049739'>PROFESSOR: DP</span> <span
  m='2050070'>of</span> <span m='2050159'>j</span> <span m='2050370'>is</span>
  <span m='2050540'>returning.</span> <span m='2051330'>It's</span> <span
  m='2051570'>like</span> <span m='2051739'>this.</span> <span
  m='2052280'>So</span> <span m='2052480'>DP</span> <span
  m='2052870'>of--</span> <span m='2053080'>this</span> <span
  m='2053320'>is</span> <span m='2053440'>a</span> <span
  m='2053500'>recursive</span> <span m='2053969'>definition.</span> <span
  m='2054570'>Imagine</span> <span m='2054929'>this</span> <span
  m='2055100'>is</span> <span m='2055210'>a</span> <span
  m='2055270'>recursive</span> <span m='2055699'>function.</span> <span
  m='2056570'>I</span> <span m='2056679'>wrote</span> <span
  m='2056889'>equals,</span> <span m='2057860'>which</span> <span
  m='2058110'>is</span> <span m='2058940'>Haskell</span> <span
  m='2059380'>notation,</span> <span m='2059880'>if</span> <span
  m='2060020'>you</span> <span m='2060150'>will.</span> <span
  m='2060790'>But</span> <span m='2061250'>normally,</span> <span
  m='2061505'>you</span> <span m='2061760'>think</span> <span
  m='2061969'>of</span> <span m='2062139'>this</span> <span
  m='2062400'>as</span> <span m='2062560'>like</span> <span
  m='2062790'>def</span> <span m='2063179'>DP</span> <span m='2063580'>of</span>
  <span m='2063670'>i</span> <span m='2063969'>is</span> <span
  m='2064500'>return</span> <span m='2065139'>min</span> <span
  m='2065820'>of</span> <span m='2065949'>this.</span> <span m='2066380'>This
  is</span> <span m='2066489'>python.</span> <span m='2068010'>So</span> <span
  m='2069590'>it's</span> <span m='2069760'>returning</span> <span
  m='2070429'>the</span> <span m='2070730'>cost.</span> <span
  m='2071880'>What</span> <span m='2072020'>was</span> <span
  m='2072159'>the</span> <span m='2072250'>best</span> <span
  m='2072620'>way</span> <span m='2072770'>to</span> <span
  m='2072860'>pack</span> <span m='2073600'>those</span> <span
  m='2073850'>lines</span> <span m='2074250'>from j</span> <span
  m='2074530'>onwards?</span> <span m='2075360'>That's</span> <span
  m='2075780'>what DP</span> <span m='2076090'>of j</span> <span
  m='2076500'>returns.</span> </p><p><span m='2076870'>So</span> <span
  m='2076989'>it's</span> <span m='2077110'>a</span> <span
  m='2077170'>number.</span> <span m='2078810'>It's</span> <span
  m='2079250'>going</span> <span m='2079389'>to</span> <span
  m='2079449'>be</span> <span m='2079610'>a</span> <span m='2079670'>sum</span>
  <span m='2080030'>of</span> <span m='2080120'>badness</span> <span
  m='2080550'>values.</span> <span m='2081440'>Then</span> <span
  m='2081610'>we</span> <span m='2081750'>add</span> <span m='2081969'>on</span>
  <span m='2082260'>one</span> <span m='2082469'>new</span> <span
  m='2082620'>badness</span> <span m='2083020'>value.</span> <span
  m='2083350'>It's</span> <span m='2083659'>still a</span> <span m='2083870'>sum
  of</span> <span m='2084120'>badness</span> <span m='2084290'>values.</span>
  <span m='2084530'>We</span> <span m='2084590'>return</span> <span
  m='2085050'>the</span> <span m='2085130'>best</span> <span
  m='2085420'>one</span> <span m='2085550'>that</span> <span
  m='2085639'>we</span> <span m='2085760'>find.</span> <span
  m='2087260'>Now,</span> <span m='2087370'>this</span> <span
  m='2087560'>does</span> <span m='2087699'>not</span> <span
  m='2087889'>actually</span> <span m='2088250'>pack</span> <span
  m='2088570'>the</span> <span m='2088679'>words.</span> <span
  m='2089060'>That's</span> <span m='2089330'>a</span> <span
  m='2089530'>good--</span> <span m='2090270'>maybe</span> <span
  m='2090510'>your</span> <span m='2090699'>implicit</span> <span
  m='2091090'>question.</span> <span m='2091384'>It's</span> <span
  m='2091679'>not</span> <span m='2091870'>telling</span> <span
  m='2092130'>you</span> <span m='2092219'>how</span> <span
  m='2092389'>to</span> <span m='2092469'>pack</span> <span
  m='2092719'>the</span> <span m='2092810'>words.</span> <span
  m='2093420'>It's</span> <span m='2093570'>telling</span> <span
  m='2093830'>you</span> <span m='2093900'>how</span> <span
  m='2094050'>much</span> <span m='2094239'>it</span> <span
  m='2094350'>costs</span> <span m='2094730'>to</span> <span
  m='2094830'>pack</span> <span m='2095100'>the</span> <span
  m='2095190'>words.</span> </p><p><span m='2095840'>This</span> <span
  m='2096000'>is</span> <span m='2096110'>a</span> <span m='2096179'>lot</span>
  <span m='2096400'>like</span> <span m='2096560'>shortest</span> <span
  m='2096909'>paths</span> <span m='2097850'>where</span> <span
  m='2098120'>we</span> <span m='2098260'>didn't--</span> <span
  m='2098670'>it</span> <span m='2098800'>was</span> <span
  m='2098960'>annoying</span> <span m='2099400'>to</span> <span
  m='2099490'>actually</span> <span m='2099760'>figure</span> <span
  m='2100000'>out</span> <span m='2100060'>what</span> <span
  m='2100190'>the</span> <span m='2100260'>shortest</span> <span
  m='2100560'>path</span> <span m='2100800'>was.</span> <span
  m='2102430'>Not</span> <span m='2102660'>that</span> <span
  m='2102860'>annoying,</span> <span m='2103240'>but</span> <span
  m='2103430'>that's</span> <span m='2103610'>not</span> <span
  m='2103760'>what</span> <span m='2103850'>we</span> <span
  m='2103940'>were</span> <span m='2104110'>usually</span> <span
  m='2104460'>aiming</span> <span m='2104700'>to</span> <span
  m='2104810'>do.</span> <span m='2105110'>We were</span> <span
  m='2105160'>just</span> <span m='2105440'>trying</span> <span
  m='2105620'>to</span> <span m='2105680'>figure</span> <span
  m='2105940'>out</span> <span m='2106050'>the</span> <span
  m='2106110'>shortest</span> <span m='2106440'>path</span> <span
  m='2106700'>weight.</span> <span m='2108470'>And</span> <span
  m='2108710'>then</span> <span m='2109050'>once</span> <span
  m='2109240'>we</span> <span m='2109330'>knew</span> <span
  m='2109420'>the</span> <span m='2109500'>shortest</span> <span
  m='2109800'>path weight,</span> <span m='2110260'>it</span> <span
  m='2110330'>was</span> <span m='2110500'>pretty</span> <span
  m='2110780'>easy</span> <span m='2111000'>to</span> <span
  m='2111100'>reconstruct</span> <span m='2111630'>the</span> <span
  m='2111710'>paths.</span> </p><p><span m='2113320'>So</span> <span
  m='2113620'>maybe</span> <span m='2113970'>I'll</span> <span
  m='2115220'>take</span> <span m='2115420'>a</span> <span
  m='2115480'>little</span> <span m='2115660'>diversion</span> <span
  m='2116360'>to</span> <span m='2116510'>that</span> <span
  m='2117740'>and</span> <span m='2118010'>talk</span> <span
  m='2118220'>about</span> <span m='2118480'>parent</span> <span
  m='2118770'>pointers.</span> <span m='2126580'>The</span> <span
  m='2126690'>idea</span> <span m='2126960'>with</span> <span
  m='2127130'>parent</span> <span m='2127440'>pointers</span> <span
  m='2128010'>is</span> <span m='2128180'>just</span> <span
  m='2128410'>remember</span> <span m='2133720'>which</span> <span
  m='2134020'>guess</span> <span m='2134300'>was</span> <span
  m='2134470'>best.</span> <span m='2142700'>it's</span> <span
  m='2142790'>a</span> <span m='2142830'>very</span> <span
  m='2143030'>simple</span> <span m='2143340'>idea,</span> <span
  m='2143670'>but</span> <span m='2143810'>it</span> <span
  m='2143910'>applies</span> <span m='2144260'>to</span> <span
  m='2144360'>all</span> <span m='2144650'>dynamic</span> <span
  m='2145070'>programs</span> <span m='2145540'>and</span> <span
  m='2145640'>lets</span> <span m='2145860'>you</span> <span
  m='2145960'>find</span> <span m='2146240'>the</span> <span
  m='2146380'>actual</span> <span m='2146790'>solution,</span> <span
  m='2147280'>not</span> <span m='2147490'>just</span> <span
  m='2147700'>the</span> <span m='2147800'>cost</span> <span
  m='2148170'>of</span> <span m='2148240'>the</span> <span
  m='2148320'>solution.</span> </p><p><span m='2149550'>We</span> <span
  m='2149790'>did</span> <span m='2149940'>the</span> <span
  m='2150020'>same</span> <span m='2150280'>thing</span> <span
  m='2150450'>with</span> <span m='2150530'>shortest</span> <span
  m='2150890'>paths.</span> <span m='2151160'>We</span> <span
  m='2151260'>even</span> <span m='2151450'>called</span> <span
  m='2151730'>them</span> <span m='2151850'>parent.</span> <span
  m='2153870'>So</span> <span m='2154740'>when</span> <span
  m='2154880'>we</span> <span m='2155000'>compute</span> <span
  m='2155350'>this</span> <span m='2155520'>min,</span> <span
  m='2156960'>were</span> <span m='2157120'>trying</span> <span
  m='2157450'>all</span> <span m='2157750'>choices</span> <span
  m='2158170'>of</span> <span m='2158290'>j.</span> <span m='2159070'>One</span>
  <span m='2159310'>of</span> <span m='2159420'>them--</span> <span
  m='2159850'>or</span> <span m='2159950'>maybe</span> <span
  m='2160210'>more</span> <span m='2160390'>than</span> <span
  m='2160530'>one,</span> <span m='2160760'>but</span> <span
  m='2160890'>at</span> <span m='2160970'>least</span> <span
  m='2161190'>one</span> <span m='2161350'>of</span> <span
  m='2161430'>them</span> <span m='2161770'>actually</span> <span
  m='2162170'>gave</span> <span m='2162460'>you</span> <span
  m='2162570'>the</span> <span m='2162690'>min.</span> <span
  m='2163260'>That's</span> <span m='2163450'>usually</span> <span
  m='2163740'>called</span> <span m='2163960'>the</span> <span
  m='2164120'>arg</span> <span m='2164565'>min</span> <span
  m='2165010'>in</span> <span m='2165150'>mathematics.</span> <span
  m='2165810'>It's</span> <span m='2166300'>what</span> <span
  m='2166520'>was</span> <span m='2166670'>the</span> <span
  m='2166760'>value</span> <span m='2167150'>of</span> <span
  m='2167230'>j</span> <span m='2167990'>that</span> <span
  m='2168110'>gave</span> <span m='2168370'>you</span> <span
  m='2168470'>the</span> <span m='2168570'>minimum</span> <span
  m='2168890'>value</span> <span m='2169240'>of</span> <span
  m='2169340'>this</span> <span m='2169540'>thing.</span> <span
  m='2171130'>So</span> <span m='2171860'>I</span> <span
  m='2171920'>mean,</span> <span m='2172060'>when</span> <span
  m='2172170'>you</span> <span m='2172270'>compute</span> <span
  m='2172600'>the</span> <span m='2172680'>min,</span> <span
  m='2172940'>you're</span> <span m='2173120'>iterating</span> <span
  m='2173570'>over</span> <span m='2173810'>every</span> <span
  m='2174030'>single</span> <span m='2174350'>one.</span> <span
  m='2174940'>Just</span> <span m='2175120'>keep</span> <span
  m='2175280'>track</span> <span m='2175600'>of</span> <span
  m='2175700'>which</span> <span m='2175870'>one</span> <span
  m='2176050'>was</span> <span m='2176200'>the</span> <span
  m='2176290'>best.</span> </p><p><span m='2177810'>That's</span> <span
  m='2178020'>it.</span> <span m='2178240'>Call</span> <span
  m='2178440'>that</span> <span m='2178660'>the</span> <span
  m='2178740'>parent</span> <span m='2179100'>pointer.</span> <span
  m='2182440'>Do</span> <span m='2182750'>I</span> <span m='2182850'>need</span>
  <span m='2183020'>to</span> <span m='2183170'>write</span> <span
  m='2183380'>that?</span> <span m='2183930'>Here,</span> <span
  m='2184680'>parent--</span> <span m='2188240'>parent</span> <span
  m='2188640'>of</span> <span m='2188750'>i</span> <span m='2189800'>is</span>
  <span m='2189960'>going</span> <span m='2190100'>to</span> <span
  m='2190170'>be</span> <span m='2190740'>arg</span> <span
  m='2191000'>min</span> <span m='2193270'>of</span> <span
  m='2193470'>that</span> <span m='2193690'>same</span> <span
  m='2193900'>thing.</span> <span m='2194900'>So</span> <span
  m='2195150'>it's</span> <span m='2195980'>a</span> <span m='2196030'>j</span>
  <span m='2196300'>value.</span> <span m='2198270'>It's</span> <span
  m='2198530'>the</span> <span m='2198620'>best</span> <span
  m='2198935'>j</span> <span m='2199250'>value</span> <span
  m='2200000'>for</span> <span m='2200240'>i.</span> <span
  m='2201290'>And</span> <span m='2201420'>so</span> <span m='2201530'>we</span>
  <span m='2201690'>store</span> <span m='2202020'>that</span> <span
  m='2202340'>for</span> <span m='2202480'>each</span> <span
  m='2202680'>i.</span> <span m='2203190'>It</span> <span
  m='2203360'>cost</span> <span m='2203670'>no</span> <span
  m='2203820'>more</span> <span m='2204030'>work,</span> <span
  m='2204270'>just</span> <span m='2204470'>a</span> <span
  m='2204510'>constant</span> <span m='2204870'>factor</span> <span
  m='2205150'>more</span> <span m='2205350'>work</span> <span
  m='2205620'>than</span> <span m='2205760'>computing</span> <span
  m='2206240'>the</span> <span m='2206320'>min.</span> <span
  m='2207210'>We</span> <span m='2207310'>also</span> <span
  m='2207640'>write</span> <span m='2207830'>down</span> <span
  m='2208110'>the</span> <span m='2208240'>arg</span> <span
  m='2208505'>min.</span> </p><p><span m='2209310'>So</span> <span
  m='2209430'>we're</span> <span m='2209550'>already</span> <span
  m='2209740'>storing</span> <span m='2210010'>the</span> <span
  m='2210080'>min</span> <span m='2210330'>in</span> <span m='2210610'>the
  DP</span> <span m='2210690'>table.</span> <span m='2212110'>DP of</span> <span
  m='2212600'>i</span> <span m='2212850'>would</span> <span
  m='2213410'>get</span> <span m='2213580'>sorted</span> <span
  m='2213840'>to</span> <span m='2213910'>be</span> <span
  m='2214010'>that.</span> <span m='2214700'>We</span> <span
  m='2214840'>also</span> <span m='2215180'>store</span> <span
  m='2215400'>parent</span> <span m='2215730'>of</span> <span
  m='2215850'>i.</span> <span m='2216400'>And</span> <span
  m='2216560'>then</span> <span m='2216730'>once</span> <span
  m='2216970'>we're</span> <span m='2217130'>done,</span> <span
  m='2218790'>we</span> <span m='2218970'>start</span> <span
  m='2219220'>with</span> <span m='2219360'>our</span> <span
  m='2219520'>original</span> <span m='2219760'>problem</span> <span
  m='2220260'>and we</span> <span m='2220390'>follow</span> <span
  m='2220840'>parent</span> <span m='2221220'>pointers</span> <span
  m='2221660'>to</span> <span m='2221740'>figure</span> <span
  m='2222030'>out</span> <span m='2222140'>what</span> <span
  m='2222300'>the</span> <span m='2222370'>best</span> <span
  m='2222610'>choices</span> <span m='2223020'>were.</span> <span
  m='2224040'>So</span> <span m='2224180'>we</span> <span
  m='2224270'>start</span> <span m='2224540'>at</span> <span
  m='2224640'>0</span> <span m='2224950'>because</span> <span
  m='2225260'>we</span> <span m='2225370'>know</span> <span
  m='2225550'>word</span> <span m='2225790'>zero</span> <span
  m='2226530'>begins</span> <span m='2226880'>a</span> <span
  m='2226950'>line.</span> <span m='2228400'>And</span> <span
  m='2228560'>then</span> <span m='2229720'>0</span> <span
  m='2230210'>will</span> <span m='2230390'>be</span> <span
  m='2231110'>the</span> <span m='2231200'>first</span> <span
  m='2231510'>line.</span> <span m='2232120'>Then</span> <span
  m='2232370'>we</span> <span m='2232480'>go</span> <span m='2232700'>to</span>
  <span m='2232970'>parent</span> <span m='2233340'>of</span> <span
  m='2233410'>0.</span> <span m='2235020'>That</span> <span
  m='2235290'>will</span> <span m='2235420'>be</span> <span
  m='2235840'>where</span> <span m='2236060'>the</span> <span
  m='2236250'>second</span> <span m='2236590'>line</span> <span
  m='2236810'>begins.</span> </p><p><span m='2238190'>Then</span> <span
  m='2238400'>we</span> <span m='2238520'>go</span> <span m='2238760'>to</span>
  <span m='2239000'>parent</span> <span m='2239390'>of</span> <span
  m='2239500'>parent</span> <span m='2239830'>of</span> <span
  m='2239900'>0.</span> <span m='2240960'>That</span> <span
  m='2241150'>will</span> <span m='2241280'>be</span> <span
  m='2241470'>where</span> <span m='2241610'>the</span> <span
  m='2241730'>third</span> <span m='2241980'>line</span> <span
  m='2242210'>begins.</span> <span m='2245010'>OK,</span> <span
  m='2245180'>because</span> <span m='2245460'>these</span> <span
  m='2245650'>were</span> <span m='2245770'>the</span> <span
  m='2245880'>best</span> <span m='2246290'>choices</span> <span
  m='2246850'>for</span> <span m='2247000'>where</span> <span
  m='2247210'>the</span> <span m='2247320'>second</span> <span
  m='2247690'>line</span> <span m='2247960'>begins,</span> <span
  m='2248280'>this</span> <span m='2248440'>is</span> <span
  m='2249170'>the</span> <span m='2249340'>best</span> <span
  m='2249640'>place</span> <span m='2249880'>where</span> <span
  m='2249970'>the</span> <span m='2250070'>second</span> <span
  m='2250420'>line</span> <span m='2250660'>begins.</span> <span
  m='2251630'>Given</span> <span m='2251920'>that this</span> <span
  m='2252170'>is the</span> <span m='2252260'>first</span> <span
  m='2252550'>line,</span> <span m='2252790'>this</span> <span
  m='2252980'>is</span> <span m='2253090'>the</span> <span
  m='2253180'>best</span> <span m='2253520'>line</span> <span
  m='2253760'>where</span> <span m='2253860'>the</span> <span
  m='2253930'>second</span> <span m='2254640'>line</span> <span
  m='2254820'>begins</span> <span m='2255140'>given</span> <span
  m='2255350'>that</span> <span m='2255480'>this</span> <span
  m='2255670'>was</span> <span m='2255780'>the</span> <span
  m='2255880'>first</span> <span m='2256180'>line.</span> <span
  m='2256380'>So</span> <span m='2256510'>that's</span> <span
  m='2256750'>really</span> <span m='2256960'>the</span> <span
  m='2257090'>third</span> <span m='2257370'>line</span> <span
  m='2257640'>given</span> <span m='2257890'>this</span> <span
  m='2258040'>was</span> <span m='2258180'>the</span> <span
  m='2258270'>second</span> <span m='2258590'>line.</span> </p><p><span
  m='2259460'>Little</span> <span m='2259670'>confusing,</span> <span
  m='2260690'>but</span> <span m='2260820'>you</span> <span
  m='2260910'>just</span> <span m='2261120'>a</span> <span
  m='2261220'>simple</span> <span m='2261540'>for</span> <span
  m='2261760'>loop.</span> <span m='2261980'>You</span> <span
  m='2262060'>start</span> <span m='2262330'>with</span> <span
  m='2262440'>0</span> <span m='2263310'>because</span> <span
  m='2263570'>that's</span> <span m='2263800'>our</span> <span
  m='2263980'>original</span> <span m='2264230'>problem.</span> <span
  m='2264960'>You</span> <span m='2265080'>keep</span> <span
  m='2265300'>calling</span> <span m='2265650'>parent</span> <span
  m='2266110'>of</span> <span m='2266200'>the</span> <span
  m='2266290'>thing</span> <span m='2266490'>you</span> <span
  m='2266620'>currently</span> <span m='2267020'>have.</span> <span
  m='2267810'>In</span> <span m='2268010'>linear</span> <span
  m='2268320'>time,</span> <span m='2268670'>you</span> <span
  m='2268800'>will</span> <span m='2268940'>reconstruct</span> <span
  m='2269830'>where</span> <span m='2270020'>the</span> <span
  m='2270140'>lines</span> <span m='2270400'>break.</span> <span
  m='2271630'>So</span> <span m='2271740'>you</span> <span
  m='2271890'>can</span> <span m='2272010'>use</span> <span
  m='2272230'>this</span> <span m='2272410'>technique</span> <span
  m='2273270'>in</span> <span m='2273430'>any</span> <span
  m='2273660'>DP.</span> <span m='2274540'>It's</span> <span
  m='2274780'>very</span> <span m='2275250'>simple.</span> <span
  m='2276240'>It's</span> <span m='2276470'>totally</span> <span
  m='2276900'>automatic.</span> <span m='2277970'>Just</span> <span
  m='2278270'>like</span> <span m='2278590'>memoization</span> <span
  m='2280400'>is</span> <span m='2280590'>a</span> <span
  m='2280660'>technique</span> <span m='2281100'>that</span> <span
  m='2281230'>you</span> <span m='2281360'>can</span> <span
  m='2281480'>apply</span> <span m='2281830'>without</span> <span
  m='2282350'>thinking,</span> <span m='2282880'>you</span> <span
  m='2283030'>could</span> <span m='2283170'>even</span> <span
  m='2283340'>write</span> <span m='2283520'>a</span> <span
  m='2283580'>program,</span> <span m='2285130'>given</span> <span
  m='2285350'>a</span> <span m='2285390'>recursive</span> <span
  m='2285790'>algorithm,</span> <span m='2286570'>would</span> <span
  m='2286700'>turn</span> <span m='2286860'>into</span> <span
  m='2287050'>a</span> <span m='2287100'>memorized</span> <span
  m='2287650'>recursive</span> <span m='2288010'>algorithm. It's</span> <span
  m='2288480'>totally</span> <span m='2288890'>automated.</span> </p><p><span
  m='2290550'>Same</span> <span m='2290800'>thing</span> <span
  m='2290990'>with</span> <span m='2291150'>the</span> <span
  m='2291370'>bottom</span> <span m='2291760'>up</span> <span
  m='2291880'>DP</span> <span m='2292210'>table. As</span> <span
  m='2292610'>long</span> <span m='2292820'>as</span> <span
  m='2292890'>you</span> <span m='2293000'>know</span> <span
  m='2293250'>what</span> <span m='2293550'>the</span> <span
  m='2295920'>topological</span> <span m='2296550'>order</span> <span
  m='2296800'>is,</span> <span m='2297580'>just</span> <span
  m='2297740'>make</span> <span m='2297900'>those</span> <span
  m='2298080'>for</span> <span m='2298290'>loops</span> <span m='2298870'>and
  then</span> <span m='2299000'>put</span> <span m='2299150'>exactly</span>
  <span m='2299560'>the</span> <span m='2299670'>recursive</span> <span
  m='2300150'>call</span> <span m='2300450'>but</span> <span m='2300560'>turn
  it</span> <span m='2300780'>into</span> <span m='2301150'>an</span> <span
  m='2301280'>array</span> <span m='2301605'>call.</span> <span
  m='2302300'>Boom,</span> <span m='2302490'>you've</span> <span
  m='2302590'>got</span> <span m='2302740'>a</span> <span
  m='2302780'>bottom</span> <span m='2303070'>up</span> <span
  m='2303200'>algorithm.</span> <span m='2303570'>Totally</span> <span
  m='2303920'>automatic,</span> <span m='2304410'>no</span> <span
  m='2304560'>thinking</span> <span m='2304900'>required.</span> <span
  m='2306150'>Parent</span> <span m='2306420'>pointers</span> <span
  m='2306830'>also,</span> <span m='2307450'>no</span> <span
  m='2307610'>thinking</span> <span m='2307920'>required.</span> <span
  m='2308550'>As</span> <span m='2308700'>long</span> <span
  m='2308900'>as</span> <span m='2308970'>you're</span> <span
  m='2309070'>following</span> <span m='2309500'>the</span> <span
  m='2309570'>structure</span> <span m='2310010'>of</span> <span
  m='2310410'>trial</span> <span m='2310820'>guesses</span> <span
  m='2311260'>compute</span> <span m='2311600'>some</span> <span
  m='2311750'>value--</span> <span m='2312560'>just</span> <span
  m='2312740'>remember</span> <span m='2313020'>what</span> <span
  m='2313170'>the</span> <span m='2313260'>guess</span> <span
  m='2313490'>was--</span> <span m='2314280'>you</span> <span
  m='2314450'>reconstruct</span> <span m='2314990'>your</span> <span
  m='2315080'>solution.</span> <span m='2316700'>That's</span> <span
  m='2316940'>the</span> <span m='2317000'>great</span> <span
  m='2317200'>thing</span> <span m='2317360'>about</span> <span
  m='2317610'>dynamic</span> <span m='2317950'>programming</span> <span
  m='2318440'>is</span> <span m='2318580'>how</span> <span
  m='2318680'>much</span> <span m='2318920'>of</span> <span
  m='2319030'>it</span> <span m='2319090'>is</span> <span
  m='2319210'>automatic.</span> </p><p><span m='2319850'>The</span> <span
  m='2319940'>hard</span> <span m='2320240'>part</span> <span
  m='2320940'>is</span> <span m='2321010'>figuring</span> <span
  m='2321380'>out</span> <span m='2321530'>what</span> <span
  m='2321720'>to</span> <span m='2321800'>guess</span> <span
  m='2322480'>and</span> <span m='2322720'>then</span> <span
  m='2322960'>what</span> <span m='2323150'>your</span> <span
  m='2323280'>sub-problems</span> <span m='2323850'>are,</span> <span
  m='2324180'>or</span> <span m='2324400'>the</span> <span
  m='2324540'>other</span> <span m='2324700'>order.</span> <span
  m='2325700'>Whatever</span> <span m='2325960'>works.</span> <span
  m='2328340'>Any</span> <span m='2328480'>other</span> <span
  m='2328630'>questions</span> <span m='2329040'>about</span> <span
  m='2329340'>text?</span> <span m='2332290'>I</span> <span
  m='2332460'>would</span> <span m='2332600'>like</span> <span
  m='2332760'>to</span> <span m='2332880'>move</span> <span
  m='2333060'>on</span> <span m='2333220'>to</span> <span
  m='2333320'>blackjack.</span> <span m='2335680'>OK,</span> <span
  m='2336010'>now</span> <span m='2336230'>I</span> <span
  m='2336360'>brought</span> <span m='2336600'>some</span> <span
  m='2336740'>cards,</span> <span m='2337585'>because</span> <span
  m='2337870'>some</span> <span m='2338140'>of</span> <span
  m='2338250'>you</span> <span m='2338340'>may</span> <span
  m='2338460'>not</span> <span m='2338710'>know</span> <span
  m='2338860'>the</span> <span m='2339000'>rules</span> <span
  m='2339570'>to</span> <span m='2339740'>blackjack.</span> <span
  m='2340450'>How</span> <span m='2340580'>many</span> <span
  m='2340730'>people</span> <span m='2340990'>know</span> <span
  m='2341340'>blackjack?</span> <span m='2341990'>OK.</span> <span
  m='2342790'>How</span> <span m='2342880'>many</span> <span
  m='2343010'>people</span> <span m='2343250'>do</span> <span
  m='2343370'>not</span> <span m='2343680'>and are</span> <span
  m='2343990'>willing</span> <span m='2344280'>to</span> <span
  m='2344390'>admit</span> <span m='2344610'>it?</span> <span
  m='2344780'>A</span> <span m='2344920'>few,</span> <span
  m='2345330'>all</span> <span m='2345400'>right.</span> <span
  m='2345690'>So</span> <span m='2345910'>this</span> <span
  m='2346080'>is</span> <span m='2346180'>for</span> <span
  m='2346300'>you</span> <span m='2346670'>and</span> <span
  m='2346870'>for</span> <span m='2346990'>fun,</span> <span
  m='2347300'>entertainment.</span> </p><p><span m='2348240'>So</span> <span
  m='2348340'>I'm</span> <span m='2348390'>going</span> <span
  m='2348470'>to</span> <span m='2348510'>bring</span> <span
  m='2348700'>Victor</span> <span m='2349080'>up</span> <span
  m='2349680'>to</span> <span m='2350060'>help</span> <span
  m='2350410'>demonstrate</span> <span m='2351600'>the</span> <span
  m='2351760'>rules</span> <span m='2352090'>of</span> <span
  m='2352170'>blackjack.</span> <span m='2353120'>We're</span> <span
  m='2353390'>going</span> <span m='2353480'>to</span> <span
  m='2353550'>play</span> <span m='2353930'>standard</span> <span
  m='2354520'>Casino</span> <span m='2354980'>blackjack</span> <span
  m='2355650'>as</span> <span m='2355920'>in</span> <span m='2356090'>the</span>
  <span m='2356160'>movie</span> <span m='2356410'><i>21</i>,</span> <span
  m='2357000'>or</span> <span m='2357080'>whatever.</span> <span
  m='2358430'>So</span> <span m='2358750'>I'm</span> <span
  m='2358870'>going</span> <span m='2359170'>to</span> <span m='2359270'>just do
  a</span> <span m='2359560'>random</span> <span m='2360120'>cut</span> <span
  m='2360320'>here</span> <span m='2360760'>so</span> <span m='2361650'>I</span>
  <span m='2362040'>can't</span> <span m='2362310'>sheet.</span> <span
  m='2363442'>You</span> <span m='2363810'>have</span> <span
  m='2364130'>a</span> <span m='2364200'>tablet,</span> <span
  m='2364630'>that's</span> <span m='2365140'>scary.</span> <span
  m='2366140'>You're</span> <span m='2366610'>going</span> <span
  m='2366895'>to</span> <span m='2367180'>look</span> <span
  m='2367330'>at</span> <span m='2367460'>strategy.</span> </p><p><span
  m='2367725'>VICTOR: Nothing</span> <span m='2367990'>special.</span>
  </p><p><span m='2369320'>PROFESSOR: All right.</span> <span
  m='2370250'>Hopefully</span> <span m='2370530'>you</span> <span
  m='2370580'>do</span> <span m='2370700'>not</span> <span
  m='2370890'>have</span> <span m='2371060'>x-ray</span> <span
  m='2371380'>vision.</span> <span m='2372760'>So</span> <span
  m='2373000'>the</span> <span m='2373100'>way</span> <span
  m='2373210'>it</span> <span m='2373290'>works</span> <span
  m='2373530'>is</span> <span m='2373730'>there's</span> <span
  m='2373950'>a</span> <span m='2374020'>dealer</span> <span
  m='2374680'>player</span> <span m='2375000'>and</span> <span
  m='2376090'>one</span> <span m='2376260'>or</span> <span
  m='2376320'>more</span> <span m='2376510'>players.</span> <span
  m='2377010'>We're</span> <span m='2377070'>just</span> <span
  m='2377240'>going</span> <span m='2377340'>to</span> <span
  m='2377410'>do</span> <span m='2377550'>it with</span> <span
  m='2377670'>one</span> <span m='2377870'>player</span> <span
  m='2378630'>to</span> <span m='2378740'>keep</span> <span
  m='2378930'>it</span> <span m='2379020'>simple.</span> <span
  m='2379400'>I'm</span> <span m='2379530'>going</span> <span
  m='2379630'>to</span> <span m='2379690'>be</span> <span m='2379810'>the</span>
  <span m='2379920'>dealer.</span> <span m='2380350'>So</span> <span
  m='2380520'>my</span> <span m='2380680'>strategy</span> <span
  m='2381150'>is</span> <span m='2381260'>actually</span> <span
  m='2381680'>totally</span> <span m='2382030'>deterministic,</span> <span
  m='2382710'>there's</span> <span m='2382870'>nothing</span> <span
  m='2383180'>interesting.</span> <span m='2384090'>Victor</span> <span
  m='2384360'>has</span> <span m='2384610'>the</span> <span
  m='2384720'>hard</span> <span m='2385010'>part</span> <span
  m='2385560'>of</span> <span m='2385640'>winning.</span> </p><p><span
  m='2386440'>So</span> <span m='2387180'>to</span> <span
  m='2387300'>start</span> <span m='2387580'>out,</span> <span
  m='2387750'>I</span> <span m='2387840'>believe</span> <span
  m='2388240'>we</span> <span m='2388400'>deal</span> <span
  m='2388760'>to</span> <span m='2389270'>you</span> <span
  m='2389520'>first,</span> <span m='2390690'>then</span> <span
  m='2391130'>to</span> <span m='2391950'>me,</span> <span
  m='2392810'>then</span> <span m='2393150'>to</span> <span
  m='2393320'>you,</span> <span m='2394290'>then</span> <span
  m='2394550'>to</span> <span m='2394720'>me.</span> <span m='2394910'>So</span>
  <span m='2395220'>let's</span> <span m='2395420'>hold up</span> <span
  m='2395680'>these</span> <span m='2395880'>cards,</span> <span
  m='2396280'>Victor,</span> <span m='2396600'>so that</span> <span
  m='2396750'>people</span> <span m='2397070'>can</span> <span
  m='2397200'>see</span> <span m='2397410'>them.</span> <span
  m='2398080'>You</span> <span m='2398240'>don't</span> <span
  m='2398380'>get</span> <span m='2398510'>to</span> <span
  m='2398600'>see</span> <span m='2398780'>one</span> <span
  m='2398930'>of</span> <span m='2398990'>my</span> <span
  m='2399110'>cards.</span> <span m='2399500'>That's</span> <span
  m='2400070'>some</span> <span m='2400350'>peculiarity</span> <span
  m='2401470'>of</span> <span m='2401620'>the</span> <span
  m='2401740'>rule.</span> <span m='2402310'>And</span> <span
  m='2402920'>if</span> <span m='2403470'>the</span> <span
  m='2403660'>sum</span> <span m='2403920'>of</span> <span
  m='2404020'>our</span> <span m='2404150'>cards</span> <span
  m='2404400'>goes</span> <span m='2404620'>over</span> <span
  m='2404930'>21,</span> <span m='2405650'>we</span> <span
  m='2405850'>lose</span> <span m='2406080'>the</span> <span
  m='2406170'>game.</span> <span m='2407190'>Victor</span> <span
  m='2407450'>first.</span> <span m='2408420'>I</span> <span
  m='2409020'>cannot</span> <span m='2409430'>have</span> <span
  m='2409830'>a</span> <span m='2409880'>value</span> <span
  m='2410180'>more</span> <span m='2410320'>than</span> <span
  m='2410430'>21</span> <span m='2411450'>in</span> <span
  m='2411630'>these</span> <span m='2412360'>hands,</span> <span
  m='2412570'>because</span> <span m='2412730'>I</span> <span
  m='2412760'>only</span> <span m='2412930'>have</span> <span
  m='2413040'>two</span> <span m='2413730'>cards.</span> </p><p><span
  m='2414420'>You</span> <span m='2414590'>have</span> <span
  m='2414890'>a</span> <span m='2414940'>value</span> <span
  m='2415640'>of--</span> <span m='2415800'>ha,</span> <span
  m='2415840'>ace.</span> <span m='2416640'>Great.</span> <span
  m='2417050'>An</span> <span m='2417230'>ace</span> <span m='2417350'>can
  be</span> <span m='2417450'>a</span> <span m='2417630'>1</span> <span
  m='2417850'>or an</span> <span m='2418040'>11.</span> <span
  m='2418480'>That's</span> <span m='2418690'>the</span> <span
  m='2418790'>fun</span> <span m='2419010'>rule.</span> <span
  m='2419540'>So</span> <span m='2419650'>this</span> <span
  m='2419890'>is</span> <span m='2420270'>either an</span> <span
  m='2420650'>8</span> <span m='2421030'>or an</span> <span
  m='2421410'>18.</span> <span m='2422770'>And</span> <span
  m='2423010'>so</span> <span m='2423160'>Victor</span> <span
  m='2423400'>has</span> <span m='2423520'>a</span> <span
  m='2423580'>choice</span> <span m='2423810'>of</span> <span
  m='2423870'>whether</span> <span m='2424090'>to take</span> <span
  m='2424290'>another</span> <span m='2424530'>card</span> <span
  m='2424800'>or</span> <span m='2424930'>not.</span> <span
  m='2425480'>What</span> <span m='2425620'>would</span> <span
  m='2425720'>you</span> <span m='2425820'>like</span> <span
  m='2426000'>to</span> <span m='2426090'>do?</span> </p><p><span
  m='2427284'>VICTOR: Standard</span> <span m='2428248'>strategy</span> <span
  m='2428730'>says</span> <span m='2428860'>stand.</span> </p><p><span
  m='2429180'>PROFESSOR: He stands.</span> <span m='2429500'>So</span> <span
  m='2429730'>he's</span> <span m='2430020'>going</span> <span
  m='2430160'>to</span> <span m='2430680'>stick</span> <span
  m='2430930'>to</span> <span m='2431040'>that.</span> <span
  m='2431845'>At</span> <span m='2432180'>this</span> <span
  m='2432330'>point,</span> <span m='2433290'>my</span> <span
  m='2433580'>cards</span> <span m='2433920'>flip</span> <span
  m='2434150'>over.</span> <span m='2434800'>I</span> <span
  m='2434960'>have</span> <span m='2435600'>17,</span> <span
  m='2436730'>which</span> <span m='2436900'>is</span> <span
  m='2437050'>same</span> <span m='2437310'>you,</span> <span
  m='2437610'>which</span> <span m='2437790'>I</span> <span
  m='2437830'>believe</span> <span m='2438170'>means--</span> <span
  m='2438550'>I</span> <span m='2438640'>forget</span> <span
  m='2438990'>about</span> <span m='2439190'>tie rules.</span> </p><p><span
  m='2439613'>VICTOR: I have</span> <span m='2440036'>18.</span> </p><p><span
  m='2440460'>PROFESSOR: You have</span> <span m='2440805'>18.</span> <span
  m='2441150'>All right.</span> </p><p><span m='2441220'>VICTOR: See? The</span>
  <span m='2441495'>strategy</span> <span m='2441770'>works.</span> </p><p><span
  m='2442210'>PROFESSOR: So</span> <span m='2442690'>that's</span> <span
  m='2442920'>good.</span> <span m='2443500'>I'm</span> <span
  m='2443710'>going</span> <span m='2443820'>to</span> <span
  m='2443890'>hit</span> <span m='2444460'>in the</span> <span
  m='2444520'>hope</span> <span m='2444790'>that</span> <span
  m='2444920'>I</span> <span m='2444970'>have</span> <span m='2445130'>a</span>
  <span m='2445190'>small</span> <span m='2445560'>card</span> <span
  m='2445760'>that</span> <span m='2445880'>will</span> <span
  m='2446040'>push</span> <span m='2446300'>me</span> <span
  m='2446440'>right</span> <span m='2446650'>above</span> <span
  m='2446930'>you.</span> <span m='2447970'>But</span> <span
  m='2448150'>I</span> <span m='2448230'>do</span> <span m='2448380'>not.</span>
  <span m='2448790'>I</span> <span m='2448910'>lose.</span> <span
  m='2449570'>I'm</span> <span m='2449740'>sad.</span> </p><p><span
  m='2450230'>VICTOR: It says</span> <span m='2450710'>always</span> <span
  m='2451190'>stand on a 17.</span> </p><p><span m='2451670'>PROFESSOR:
  Oh,</span> <span m='2452130'>always</span> <span m='2452310'>stand on</span>
  <span m='2452410'>17?</span> <span m='2452870'>Huh.</span> <span
  m='2453175'>All</span> <span m='2453480'>right,</span> <span
  m='2453660'>never</span> <span m='2453850'>mind.</span> <span
  m='2454860'>Thanks.</span> <span m='2455660'>Yeah,</span> <span
  m='2455830'>I</span> <span m='2455970'>still</span> <span
  m='2456200'>lose.</span> <span m='2456720'>The</span> <span
  m='2457250'>game</span> <span m='2457430'>is</span> <span
  m='2457560'>over.</span> <span m='2458110'>My</span> <span
  m='2458340'>strategy</span> <span m='2458615'>is</span> <span
  m='2458890'>always</span> <span m='2459810'>stand</span> <span
  m='2460270'>on</span> <span m='2460350'>a</span> <span
  m='2460420'>value--</span> </p><p><span m='2461800'>VICTOR: Stand</span> <span
  m='2462180'>on</span> <span m='2462210'>17.</span> </p><p><span
  m='2463360'>PROFESSOR: 17</span> <span m='2463970'>or</span> <span
  m='2464190'>higher.</span> <span m='2465270'>And</span> <span
  m='2465920'>if</span> <span m='2466100'>I</span> <span m='2466160'>have</span>
  <span m='2466390'>a</span> <span m='2466440'>value</span> <span
  m='2466800'>less than</span> <span m='2467120'>17,</span> <span
  m='2467530'>I</span> <span m='2467610'>always</span> <span
  m='2467890'>take</span> <span m='2468070'>another</span> <span
  m='2468340'>card.</span> <span m='2469030'>So</span> <span
  m='2469150'>let's</span> <span m='2469280'>do</span> <span
  m='2469400'>it</span> <span m='2469500'>one</span> <span
  m='2469560'>more</span> <span m='2469710'>time</span> <span
  m='2470010'>to</span> <span m='2470090'>get</span> <span m='2470220'>it</span>
  <span m='2470320'>right.</span> <span m='2471090'>So</span> <span
  m='2471310'>I'm</span> <span m='2471420'>going</span> <span
  m='2471500'>to</span> <span m='2471570'>deal</span> <span
  m='2471800'>to</span> <span m='2472200'>you,</span> <span
  m='2472500'>deal</span> <span m='2472700'>to</span> <span
  m='2472870'>me,</span> <span m='2473420'>deal</span> <span m='2473460'>to
  you,</span> <span m='2475880'>deal</span> <span m='2476050'>to</span> <span
  m='2476190'>me.</span> <span m='2476410'>So</span> <span
  m='2476610'>hold</span> <span m='2476770'>up</span> <span
  m='2476900'>your</span> <span m='2477040'>cards.</span> <span
  m='2479450'>You</span> <span m='2479580'>have</span> <span
  m='2479770'>18</span> <span m='2480160'>again.</span> <span
  m='2481780'>Are</span> <span m='2482440'>you</span> <span
  m='2482670'>cheating?</span> </p><p><span m='2485600'>VICTOR: I still</span>
  <span m='2486078'>have to</span> <span m='2486556'>stand.</span> </p><p><span
  m='2487990'>PROFESSOR: You</span> <span m='2488150'>still</span> <span
  m='2488440'>stand,</span> <span m='2488880'>according</span> <span
  m='2489210'>to</span> <span m='2489340'>tablet.</span> <span
  m='2491120'>So</span> <span m='2491460'>I,</span> <span m='2491730'>in</span>
  <span m='2491850'>this</span> <span m='2492030'>case,</span> <span
  m='2492250'>have</span> <span m='2492420'>a</span> <span
  m='2492500'>20.</span> <span m='2493560'>And</span> <span
  m='2493760'>so</span> <span m='2494000'>this</span> <span m='2494720'>I</span>
  <span m='2494920'>win.</span> <span m='2495465'>So</span> <span
  m='2495760'>you</span> <span m='2495920'>get</span> <span
  m='2496060'>the</span> <span m='2496160'>idea.</span> <span
  m='2497310'>Let's</span> <span m='2497510'>say</span> <span
  m='2497630'>in</span> <span m='2497730'>each</span> <span
  m='2497890'>case</span> <span m='2498220'>we're</span> <span
  m='2498320'>betting</span> <span m='2498480'>$1.</span> <span
  m='2499120'>So</span> <span m='2499250'>at</span> <span
  m='2499330'>this</span> <span m='2499480'>point,</span> <span
  m='2499630'>we'd</span> <span m='2499760'>be</span> <span
  m='2499920'>even.</span> <span m='2500360'>He</span> <span
  m='2500430'>won</span> <span m='2500670'>$1,</span> <span m='2501400'>I</span>
  <span m='2501570'>won</span> <span m='2501780'>$1.</span> <span
  m='2503300'>But</span> <span m='2503470'>in</span> <span
  m='2503570'>general,</span> <span m='2505710'>slight--</span> <span
  m='2506730'>I</span> <span m='2506850'>think</span> <span
  m='2507010'>it's</span> <span m='2507390'>balanced.</span> </p><p><span
  m='2508300'>VICTOR: For</span> <span m='2508420'>these</span> <span
  m='2508670'>rules,</span> <span m='2509000'>there's</span> <span
  m='2509240'>a</span> <span m='2509600'>1%</span> <span
  m='2509700'>advantage</span> <span m='2510220'>for</span> <span
  m='2510605'>the</span> <span m='2510990'>house.</span> </p><p><span
  m='2511690'>PROFESSOR: 1%</span> <span m='2511930'>advantage</span> <span
  m='2512205'>for the</span> <span m='2512480'>house.</span> <span
  m='2512710'>Interesting.</span> <span m='2513193'>All</span> <span
  m='2513676'>right,</span> <span m='2514160'>well,</span> <span
  m='2514500'>that's</span> <span m='2514730'>beyond</span> <span
  m='2515130'>this</span> <span m='2515280'>class.</span> <span
  m='2516120'>What</span> <span m='2516470'>we're</span> <span
  m='2516820'>going</span> <span m='2516930'>to</span> <span
  m='2517010'>see</span> <span m='2517210'>is</span> <span
  m='2517320'>how</span> <span m='2517460'>to</span> <span
  m='2517580'>cheat</span> <span m='2517880'>in</span> <span
  m='2518000'>blackjack.</span> <span m='2520170'>So</span> <span
  m='2520810'>this</span> <span m='2521100'>is</span> <span
  m='2521220'>going</span> <span m='2521360'>to</span> <span
  m='2521440'>be--</span> <span m='2523870'>I</span> <span
  m='2524010'>encourage</span> <span m='2524370'>you</span> <span
  m='2524450'>to</span> <span m='2524540'>try</span> <span
  m='2524730'>this</span> <span m='2524910'>out</span> <span
  m='2525040'>at</span> <span m='2525100'>casinos.</span> <span
  m='2525750'>Just</span> <span m='2525920'>kidding.</span> <span
  m='2530790'>This</span> <span m='2530990'>is</span> <span m='2531100'>a</span>
  <span m='2531170'>little</span> <span m='2531470'>bit</span> <span
  m='2531640'>difficult</span> <span m='2532080'>to</span> <span
  m='2532190'>actually</span> <span m='2533920'>do</span> <span
  m='2534100'>in</span> <span m='2534170'>a</span> <span
  m='2534220'>casino</span> <span m='2534860'>unless</span> <span
  m='2535260'>you</span> <span m='2535440'>have</span> <span
  m='2535650'>an</span> <span m='2535750'>inside</span> <span
  m='2536430'>man.</span> <span m='2537510'>So</span> <span
  m='2537950'>if</span> <span m='2538050'>you</span> <span
  m='2538130'>have</span> <span m='2538310'>an</span> <span
  m='2538390'>inside</span> <span m='2538730'>man,</span> <span
  m='2539050'>go</span> <span m='2539210'>for</span> <span
  m='2539510'>it.</span> <span m='2541090'>It's</span> <span
  m='2541410'>guaranteed</span> <span m='2542090'>to</span> <span
  m='2542200'>win</span> <span m='2542330'>you</span> <span
  m='2542450'>lots</span> <span m='2542710'>of</span> <span
  m='2542790'>money</span> <span m='2543500'>because</span> <span
  m='2543680'>it's</span> <span m='2543800'>going</span> <span
  m='2543920'>to</span> <span m='2543990'>play</span> <span
  m='2544290'>optimally.</span> </p><p><span m='2545240'>In</span> <span
  m='2545380'>perfect</span> <span m='2545790'>information</span> <span
  m='2546290'>blackjack,</span> <span m='2546830'>I</span> <span
  m='2546950'>suppose</span> <span m='2548010'>that</span> <span
  m='2548150'>I</span> <span m='2548280'>already</span> <span
  m='2548770'>know</span> <span m='2549410'>the</span> <span
  m='2549570'>entire</span> <span m='2550170'>deck.</span> <span
  m='2551260'>Suppose</span> <span m='2551710'>somehow</span> <span
  m='2552270'>either</span> <span m='2552640'>I</span> <span
  m='2552690'>get</span> <span m='2552860'>to</span> <span
  m='2552930'>put</span> <span m='2553190'>the</span> <span
  m='2553280'>deck</span> <span m='2553570'>there,</span> <span
  m='2554270'>or</span> <span m='2554520'>I</span> <span m='2554560'>have</span>
  <span m='2554710'>some</span> <span m='2554960'>x-ray</span> <span
  m='2555280'>vision.</span> <span m='2555990'>I</span> <span
  m='2556100'>get</span> <span m='2556270'>to</span> <span
  m='2556340'>see</span> <span m='2556590'>the</span> <span
  m='2556710'>entire</span> <span m='2557090'>deck</span> <span
  m='2557310'>ahead</span> <span m='2557510'>of</span> <span
  m='2557620'>time.</span> <span m='2558350'>And</span> <span
  m='2558530'>then</span> <span m='2558690'>somebody's</span> <span
  m='2559060'>going</span> <span m='2559190'>to</span> <span
  m='2559250'>play</span> <span m='2559580'>through</span> <span
  m='2560010'>a</span> <span m='2560120'>game</span> <span
  m='2560440'>over</span> <span m='2560750'>and</span> <span
  m='2560810'>over</span> <span m='2561050'>with</span> <span
  m='2561230'>me--</span> <span m='2562240'>or</span> <span
  m='2562350'>not</span> <span m='2562510'>over</span> <span
  m='2562690'>and</span> <span m='2562750'>over,</span> <span
  m='2562970'>but</span> <span m='2563090'>until</span> <span
  m='2563350'>the</span> <span m='2563450'>deck</span> <span
  m='2563680'>is</span> <span m='2563830'>depleted--</span> <span
  m='2565230'>and</span> <span m='2565410'>I</span> <span
  m='2565450'>want</span> <span m='2565650'>to</span> <span
  m='2565720'>know</span> <span m='2565900'>in</span> <span
  m='2565990'>each</span> <span m='2566180'>case,</span> <span
  m='2566410'>should</span> <span m='2566740'>I</span> <span
  m='2566840'>hit,</span> <span m='2567110'>or</span> <span
  m='2567260'>should</span> <span m='2567500'>I</span> <span
  m='2567580'>stand?</span> <span m='2569720'>And</span> <span
  m='2569960'>I</span> <span m='2570020'>claim</span> <span
  m='2570270'>with</span> <span m='2570340'>dynamic</span> <span
  m='2570720'>programming</span> <span m='2571160'>you can</span> <span
  m='2571290'>figure</span> <span m='2571670'>that</span> <span
  m='2571860'>out--</span> <span m='2573160'>using</span> <span
  m='2573500'>exactly</span> <span m='2573960'>the</span> <span
  m='2574030'>same</span> <span m='2574240'>strategy</span> <span
  m='2574545'>as</span> <span m='2574850'>text,</span> <span
  m='2575050'>actually.</span> </p><p><span m='2575820'>It's</span> <span
  m='2575980'>really</span> <span m='2576500'>for</span> <span
  m='2576660'>each</span> <span m='2576830'>word,</span> <span
  m='2577160'>should</span> <span m='2577340'>I</span> <span
  m='2577390'>start</span> <span m='2577660'>a</span> <span
  m='2577720'>new</span> <span m='2577870'>line</span> <span
  m='2578240'>or</span> <span m='2578430'>not?</span> <span
  m='2579980'>Same</span> <span m='2580700'>problem</span> <span
  m='2580990'>here.</span> <span m='2582150'>It's</span> <span
  m='2582310'>slightly</span> <span m='2582930'>more</span> <span
  m='2583120'>complicated</span> <span m='2583700'>to</span> <span
  m='2583770'>write</span> <span m='2583950'>down.</span> <span
  m='2588370'>So</span> <span m='2588580'>let's</span> <span
  m='2588840'>say</span> <span m='2589240'>the</span> <span
  m='2589400'>deck</span> <span m='2590610'>is</span> <span m='2590790'>a</span>
  <span m='2590850'>sequence</span> <span m='2591240'>of</span> <span
  m='2591340'>cards.</span> <span m='2591620'>And</span> <span
  m='2591900'>I'm</span> <span m='2591940'>going</span> <span
  m='2592040'>to</span> <span m='2592110'>call</span> <span
  m='2592370'>it</span> <span m='2592490'>c0,</span> <span m='2593810'>c1</span>
  <span m='2594600'>up</span> <span m='2594840'>to</span> <span
  m='2595070'>cn</span> <span m='2595530'>minus</span> <span
  m='2595850'>1,</span> <span m='2596780'>n</span> <span
  m='2597040'>cards.</span> <span m='2599030'>And</span> <span
  m='2599570'>you</span> <span m='2599820'>are</span> <span
  m='2600040'>one</span> <span m='2600320'>player.</span> <span
  m='2603010'>First</span> <span m='2603410'>is</span> <span
  m='2603560'>the</span> <span m='2603660'>dealer.</span> </p><p><span
  m='2605710'>I</span> <span m='2605870'>don't</span> <span
  m='2606030'>know</span> <span m='2606110'>how</span> <span
  m='2606230'>to</span> <span m='2606320'>solve</span> <span
  m='2606570'>this</span> <span m='2606700'>for</span> <span
  m='2606810'>two</span> <span m='2607570'>players,</span> <span
  m='2608200'>interesting</span> <span m='2608660'>open</span> <span
  m='2608940'>problem.</span> <span m='2609740'>But</span> <span
  m='2609850'>for</span> <span m='2609960'>one</span> <span
  m='2610180'>player</span> <span m='2611060'>I</span> <span
  m='2611700'>can</span> <span m='2612050'>do</span> <span
  m='2612240'>it.</span> <span m='2614120'>Let's</span> <span
  m='2614670'>say</span> <span m='2616020'>$1</span> <span
  m='2616510'>bet</span> <span m='2617990'>per</span> <span
  m='2618470'>hand,</span> <span m='2618940'>I</span> <span
  m='2618980'>think</span> <span m='2619230'>they're</span> <span
  m='2619330'>called.</span> <span m='2619620'>I'm</span> <span
  m='2619790'>not</span> <span m='2620020'>sure.</span> <span
  m='2620480'>Per</span> <span m='2620880'>play?</span> <span
  m='2621950'>Per</span> <span m='2622100'>box?</span> <span
  m='2622810'>Whatever.</span> <span m='2624000'>You're</span> <span
  m='2624160'>not</span> <span m='2624340'>allowed</span> <span
  m='2624620'>to</span> <span m='2624710'>double.</span> <span
  m='2624985'>You're not</span> <span m='2625260'>allowed to</span> <span
  m='2625660'>split.</span> <span m='2625970'>All</span> <span
  m='2626090'>these</span> <span m='2626440'>fancy</span> <span
  m='2626640'>rules</span> <span m='2627760'>are</span> <span m='2627870'>harder
  to</span> <span m='2628050'>think</span> <span m='2628260'>about,</span> <span
  m='2628530'>although</span> <span m='2628740'>you</span> <span
  m='2628860'>might</span> <span m='2629050'>be</span> <span
  m='2629120'>able</span> <span m='2629270'>to</span> <span
  m='2629330'>solve</span> <span m='2629580'>them</span> <span
  m='2629730'>as</span> <span m='2629830'>well.</span> </p><p><span
  m='2632480'>So</span> <span m='2632650'>the</span> <span
  m='2632780'>idea</span> <span m='2633050'>is</span> <span m='2634050'>I</span>
  <span m='2634180'>have</span> <span m='2634370'>some</span> <span
  m='2634530'>cards.</span> <span m='2635320'>Should I</span> <span
  m='2635640'>hit or</span> <span m='2635810'>should</span> <span
  m='2635970'>I</span> <span m='2636040'>stand?</span> <span
  m='2636570'>I</span> <span m='2636670'>don't</span> <span
  m='2636820'>know.</span> <span m='2637310'>I'll</span> <span
  m='2637460'>guess.</span> <span m='2638550'>So</span> <span
  m='2638800'>our</span> <span m='2638970'>guessing--</span> <span
  m='2640430'>let's</span> <span m='2640570'>jump</span> <span
  m='2640790'>ahead</span> <span m='2641140'>to</span> <span
  m='2641830'>the</span> <span m='2642120'>guessing</span> <span
  m='2642470'>part--</span> <span m='2645340'>is</span> <span
  m='2645720'>whether</span> <span m='2645990'>we</span> <span
  m='2646110'>want</span> <span m='2646290'>to</span> <span
  m='2646340'>hit</span> <span m='2646600'>or</span> <span
  m='2646740'>stand</span> <span m='2647200'>given</span> <span
  m='2647520'>a</span> <span m='2647610'>card.</span> <span
  m='2650000'>Actually,</span> <span m='2651520'>it</span> <span
  m='2651700'>would</span> <span m='2651790'>be</span> <span
  m='2651950'>easier</span> <span m='2652200'>to</span> <span
  m='2652280'>think</span> <span m='2652470'>about</span> <span
  m='2652670'>an</span> <span m='2652770'>entire</span> <span
  m='2653370'>play,</span> <span m='2653750'>an</span> <span
  m='2653860'>entire</span> <span m='2654190'>hand.</span> <span
  m='2655120'>We're</span> <span m='2655220'>going</span> <span
  m='2655310'>to</span> <span m='2655360'>guess,</span> <span
  m='2655900'>how</span> <span m='2656130'>many</span> <span
  m='2656390'>times</span> <span m='2656760'>should</span> <span
  m='2657000'>I</span> <span m='2657080'>hit</span> <span m='2665650'>in</span>
  <span m='2665800'>the</span> <span m='2665890'>first</span> <span
  m='2666370'>play?</span> </p><p><span m='2668410'>So</span> <span
  m='2668650'>initially,</span> <span m='2669540'>four</span> <span
  m='2669710'>cards</span> <span m='2669960'>are</span> <span
  m='2670000'>dealt.</span> <span m='2670840'>I</span> <span
  m='2670950'>look</span> <span m='2671160'>at</span> <span
  m='2671270'>my</span> <span m='2671500'>hands.</span> <span
  m='2672730'>Actually,</span> <span m='2673120'>I don't</span> <span
  m='2673220'>really</span> <span m='2673390'>look</span> <span
  m='2673570'>at</span> <span m='2673630'>my</span> <span
  m='2673740'>hand.</span> <span m='2674210'>I'm</span> <span
  m='2674320'>just</span> <span m='2674510'>going</span> <span
  m='2674620'>to</span> <span m='2674670'>guess</span> <span
  m='2674990'>ahead</span> <span m='2675170'>of</span> <span
  m='2675250'>time.</span> <span m='2676230'>I</span> <span
  m='2676330'>think</span> <span m='2676630'>I'll hit</span> <span
  m='2676930'>five</span> <span m='2677240'>times</span> <span
  m='2677760'>this</span> <span m='2677960'>time.</span> <span m='2678920'>I
  think</span> <span m='2679010'>I'll hit</span> <span m='2679290'>zero</span>
  <span m='2679400'>times</span> <span m='2680110'>this</span> <span
  m='2680290'>time.</span> <span m='2680600'>I</span> <span
  m='2680680'>mean,</span> <span m='2680960'>I'm</span> <span
  m='2681080'>just</span> <span m='2681300'>going</span> <span
  m='2681420'>to</span> <span m='2681480'>try</span> <span
  m='2681670'>them</span> <span m='2681810'>all.</span> <span
  m='2682490'>So</span> <span m='2683100'>I</span> <span
  m='2683180'>don't</span> <span m='2683300'>really</span> <span
  m='2683460'>have</span> <span m='2683560'>to</span> <span
  m='2683620'>be</span> <span m='2683720'>intelligent</span> <span
  m='2684210'>here,</span> <span m='2685180'>OK?</span> <span
  m='2686270'>It's</span> <span m='2686360'>kind</span> <span
  m='2686540'>of</span> <span m='2686600'>crazy</span> <span
  m='2687190'>but</span> <span m='2688580'>it</span> <span
  m='2688750'>works.</span> </p><p><span m='2690690'>Our</span> <span
  m='2690820'>sub-problems,</span> <span m='2693005'>can</span> <span
  m='2693390'>anyone</span> <span m='2693620'>tell</span> <span
  m='2693750'>me</span> <span m='2693870'>what</span> <span
  m='2694030'>our</span> <span m='2694120'>sub-problems</span> <span
  m='2694660'>would</span> <span m='2694780'>be,</span> <span
  m='2695850'>In</span> <span m='2696010'>one</span> <span
  m='2696170'>word</span> <span m='2696850'>or</span> <span
  m='2696990'>less?</span> <span m='2699020'>Less</span> <span
  m='2699210'>would</span> <span m='2699300'>be</span> <span
  m='2699410'>impressive.</span> <span m='2702792'>Yeah?</span> </p><p><span
  m='2703279'>AUDIENCE: Where</span> <span m='2703766'>you start the</span>
  <span m='2704253'>new hand.</span> </p><p><span m='2704740'>PROFESSOR: Where
  do</span> <span m='2704920'>you</span> <span m='2705060'>start</span> <span
  m='2705330'>the new</span> <span m='2705390'>hand?</span> <span
  m='2705850'>Yeah.</span> <span m='2706190'>So</span> <span
  m='2706390'>it's</span> <span m='2706500'>going</span> <span
  m='2706610'>to</span> <span m='2706660'>be</span> <span
  m='2706780'>suffixes</span> <span m='2707500'>of</span> <span
  m='2707620'>the</span> <span m='2707710'>cards.</span> <span
  m='2708980'>So</span> <span m='2709310'>at</span> <span
  m='2709410'>some</span> <span m='2709590'>point</span> <span
  m='2709880'>we</span> <span m='2710110'>do</span> <span m='2710270'>a</span>
  <span m='2710340'>play,</span> <span m='2710740'>and</span> <span
  m='2710870'>then</span> <span m='2711200'>we</span> <span
  m='2711290'>get</span> <span m='2711430'>to</span> <span
  m='2711510'>ith</span> <span m='2711780'>card.</span> <span
  m='2712170'>And</span> <span m='2712270'>then</span> <span
  m='2712440'>the</span> <span m='2712530'>rest</span> <span
  m='2712770'>of</span> <span m='2712810'>the</span> <span
  m='2712870'>game</span> <span m='2713070'>will</span> <span
  m='2713170'>be</span> <span m='2713300'>from</span> <span
  m='2713430'>the</span> <span m='2713570'>ith</span> <span
  m='2713670'>card</span> <span m='2714020'>on.</span> <span
  m='2715120'>So</span> <span m='2715260'>it's</span> <span
  m='2715390'>going</span> <span m='2715520'>to</span> <span
  m='2715590'>be</span> <span m='2716430'>suffix</span> <span
  m='2718450'>ci</span> <span m='2718805'>colon,</span> <span
  m='2720450'>I</span> <span m='2720510'>guess</span> <span
  m='2720810'>would</span> <span m='2720930'>be</span> <span
  m='2721070'>the</span> <span m='2721430'>notation</span> <span
  m='2721850'>here.</span> <span m='2722210'>It's a</span> <span
  m='2722470'>bit</span> <span m='2722620'>awkward.</span> <span
  m='2724190'>These</span> <span m='2724390'>are</span> <span
  m='2724420'>the</span> <span m='2724540'>cards</span> <span
  m='2724870'>that</span> <span m='2724970'>remain.</span> </p><p><span
  m='2725640'>And</span> <span m='2725800'>so</span> <span
  m='2726000'>the</span> <span m='2726130'>sub-problem</span> <span
  m='2726750'>is,</span> <span m='2726900'>what</span> <span
  m='2727140'>is</span> <span m='2727260'>the</span> <span
  m='2727360'>best</span> <span m='2727790'>play?</span> <span
  m='2728190'>What's</span> <span m='2729260'>the</span> <span
  m='2729360'>best</span> <span m='2729640'>outcome</span> <span
  m='2730150'>given</span> <span m='2730400'>$1</span> <span
  m='2730840'>bets?</span> <span m='2731400'>How</span> <span
  m='2731510'>much</span> <span m='2731700'>money</span> <span
  m='2731940'>can</span> <span m='2732100'>I</span> <span
  m='2732140'>make--</span> <span m='2733080'>maximize</span> <span
  m='2733560'>my</span> <span m='2733690'>winning,</span> <span
  m='2734040'>say--</span> <span m='2734990'>given</span> <span
  m='2735360'>these</span> <span m='2735650'>cards</span> <span
  m='2735980'>onward?</span> <span m='2736800'>Who</span> <span
  m='2736950'>knows</span> <span m='2737200'>what</span> <span
  m='2737310'>happened</span> <span m='2737590'>to</span> <span
  m='2737660'>their</span> <span m='2737780'>earlier</span> <span
  m='2738070'>cards,</span> <span m='2739020'>but</span> <span
  m='2739340'>just</span> <span m='2739580'>these</span> <span
  m='2739790'>are</span> <span m='2739830'>the</span> <span
  m='2740000'>cards.</span> <span m='2740380'>I'm</span> <span
  m='2740390'>left</span> <span m='2740620'>with.</span> <span
  m='2742100'>Number</span> <span m='2742390'>of</span> <span
  m='2742450'>sub-problems</span> <span m='2743180'>is--</span> <span
  m='2753160'>hmm?</span> <span m='2760450'>n.</span> <span
  m='2761840'>How</span> <span m='2761980'>many</span> <span
  m='2762120'>choices</span> <span m='2762350'>of</span> <span m='2762530'>i
  are</span> <span m='2762800'>there?</span> <span m='2763090'>n</span> <span
  m='2763410'>choices.</span> </p><p><span m='2765220'>This</span> <span
  m='2765510'>really</span> <span m='2765820'>important.</span> <span
  m='2766760'>It's</span> <span m='2766930'>really</span> <span
  m='2767810'>useful</span> <span m='2768800'>that</span> <span
  m='2768870'>we're</span> <span m='2768970'>thinking</span> <span
  m='2769260'>about</span> <span m='2769520'>suffixes.</span> <span
  m='2770000'>It's</span> <span m='2770140'>not</span> <span
  m='2770360'>that</span> <span m='2770520'>some</span> <span
  m='2770800'>subset</span> <span m='2771290'>of</span> <span
  m='2771340'>the</span> <span m='2771440'>cards</span> <span
  m='2771750'>have</span> <span m='2771880'>been</span> <span
  m='2772330'>played.</span> <span m='2773070'>That</span> <span
  m='2773220'>would</span> <span m='2773280'>be</span> <span
  m='2773410'>really</span> <span m='2773620'>hard,</span> <span
  m='2773860'>because</span> <span m='2774020'>there's</span> <span
  m='2774190'>exponentially</span> <span m='2774810'>many</span> <span
  m='2775030'>different</span> <span m='2775320'>subsets</span> <span
  m='2775800'>that</span> <span m='2775920'>could</span> <span
  m='2776050'>be</span> <span m='2776170'>left.</span> <span
  m='2776890'>It's</span> <span m='2777120'>always</span> <span
  m='2777590'>a</span> <span m='2777680'>prefix</span> <span
  m='2778200'>that</span> <span m='2778280'>gets</span> <span
  m='2778480'>played,</span> <span m='2778820'>and</span> <span
  m='2778900'>therefore</span> <span m='2779180'>suffix</span> <span
  m='2779475'>is</span> <span m='2779770'>left.</span> <span
  m='2780080'>And</span> <span m='2780170'>there's</span> <span
  m='2780360'>only</span> <span m='2780780'>n</span> <span
  m='2781150'>suffixes,</span> <span m='2781740'>remember</span> <span
  m='2782060'>that.</span> <span m='2782605'>We're</span> <span
  m='2782870'>going</span> <span m='2782980'>to</span> <span
  m='2783030'>use</span> <span m='2783190'>it</span> <span
  m='2783300'>over</span> <span m='2783660'>and</span> <span
  m='2783730'>over</span> <span m='2784010'>in dynamic</span> <span
  m='2784440'>programming.</span> </p><p><span m='2785890'>So</span> <span
  m='2786050'>now</span> <span m='2786820'>we</span> <span
  m='2787100'>need</span> <span m='2787250'>to</span> <span
  m='2787340'>solve</span> <span m='2787610'>the</span> <span
  m='2787700'>sub-problem.</span> <span m='2788310'>Starting</span> <span
  m='2788740'>from</span> <span m='2789020'>ci,</span> <span
  m='2789570'>what's</span> <span m='2789820'>the</span> <span
  m='2789910'>best</span> <span m='2790170'>way</span> <span
  m='2790280'>to</span> <span m='2790360'>play?</span> <span
  m='2791000'>Well,</span> <span m='2791190'>the</span> <span
  m='2791270'>first</span> <span m='2791540'>four</span> <span
  m='2791750'>cards</span> <span m='2792220'>are</span> <span
  m='2792750'>fixed,</span> <span m='2793480'>and</span> <span
  m='2793650'>then</span> <span m='2793810'>we</span> <span
  m='2793900'>guess</span> <span m='2794220'>how</span> <span
  m='2794390'>many</span> <span m='2794570'>hits</span> <span
  m='2794810'>are</span> <span m='2794900'>left.</span> <span m='2796020'>So
  it's</span> <span m='2796270'>going</span> <span m='2796400'>to</span> <span
  m='2796460'>be</span> <span m='2796550'>something</span> <span
  m='2796880'>like</span> <span m='2797180'>n</span> <span
  m='2797490'>minus</span> <span m='2797890'>i</span> <span
  m='2798240'>minus</span> <span m='2798690'>four</span> <span
  m='2799150'>different</span> <span m='2799910'>possibilities</span> <span
  m='2800730'>for--</span> <span m='2801035'>I</span> <span
  m='2801340'>mean,</span> <span m='2801450'>that would</span> <span
  m='2801600'>be</span> <span m='2801730'>the</span> <span
  m='2801840'>maximum</span> <span m='2802390'>number</span> <span
  m='2802630'>of</span> <span m='2802700'>hits</span> <span m='2802940'>I</span>
  <span m='2803000'>could</span> <span m='2803160'>take</span> <span
  m='2803470'>all</span> <span m='2803730'>the</span> <span
  m='2803820'>remaining</span> <span m='2804190'>cards.</span> <span
  m='2805060'>That would</span> <span m='2805315'>be</span> <span
  m='2807480'>the</span> <span m='2807590'>most.</span> <span
  m='2809270'>And</span> <span m='2809860'>let's</span> <span
  m='2810030'>see,</span> <span m='2810700'>so</span> <span
  m='2810980'>the</span> <span m='2811100'>number</span> <span
  m='2811360'>of</span> <span m='2811420'>choices--</span> <span
  m='2812950'>I'll</span> <span m='2813220'>just</span> <span
  m='2813340'>say</span> <span m='2813520'>it's,</span> <span
  m='2813670'>at</span> <span m='2813760'>most,</span> <span
  m='2814000'>n.</span> <span m='2814620'>I don't</span> <span
  m='2814730'>have</span> <span m='2814900'>to</span> <span
  m='2815000'>be</span> <span m='2815180'>fancy</span> <span
  m='2815500'>here.</span> </p><p><span m='2818190'>OK,</span> <span
  m='2818740'>now</span> <span m='2819060'>we</span> <span m='2819200'>go</span>
  <span m='2819430'>to</span> <span m='2821910'>the</span> <span
  m='2822110'>recurrence.</span> <span m='2828900'>So</span> <span
  m='2828980'>I'm</span> <span m='2829110'>going</span> <span
  m='2829210'>to</span> <span m='2829280'>call</span> <span
  m='2829540'>this</span> <span m='2830120'>blackjack</span> <span
  m='2830950'>of</span> <span m='2831450'>i.</span> <span
  m='2832600'>It's</span> <span m='2832760'>going</span> <span
  m='2832940'>to</span> <span m='2833010'>be</span> <span m='2833360'>the</span>
  <span m='2833480'>solution.</span> <span m='2834800'>I</span> <span
  m='2834850'>want</span> <span m='2835030'>to</span> <span
  m='2835100'>solve</span> <span m='2835550'>this</span> <span
  m='2835660'>sub-problem</span> <span m='2837520'>from</span> <span
  m='2837770'>i</span> <span m='2838030'>onwards.</span> <span
  m='2838930'>What's</span> <span m='2839180'>the</span> <span
  m='2839260'>best</span> <span m='2839580'>play?</span> <span
  m='2840850'>And</span> <span m='2842090'>I</span> <span
  m='2842240'>guess</span> <span m='2842500'>it's</span> <span
  m='2842680'>going</span> <span m='2842800'>to</span> <span
  m='2842870'>be</span> <span m='2842990'>a</span> <span m='2843140'>max</span>
  <span m='2843590'>if</span> <span m='2843760'>I'm</span> <span
  m='2843870'>measuring</span> <span m='2845010'>winnings.</span> <span
  m='2846850'>And</span> <span m='2847070'>what's</span> <span
  m='2847290'>the</span> <span m='2847410'>winnings</span> <span
  m='2848200'>if</span> <span m='2848400'>I</span> <span
  m='2848510'>decide</span> <span m='2848970'>to</span> <span
  m='2849020'>hit</span> <span m='2849300'>this</span> <span
  m='2849470'>many</span> <span m='2849720'>times?</span> <span
  m='2850470'>It's</span> <span m='2850560'>a</span> <span
  m='2850600'>little</span> <span m='2850830'>bit</span> <span
  m='2850960'>hard</span> <span m='2851190'>to</span> <span
  m='2851310'>write</span> <span m='2852170'>down</span> <span
  m='2852760'>the</span> <span m='2852840'>exact</span> <span
  m='2853160'>formula.</span> <span m='2853530'>I'm</span> <span
  m='2853640'>going</span> <span m='2853740'>to</span> <span
  m='2853820'>write</span> <span m='2854590'>a</span> <span
  m='2854720'>rough</span> <span m='2854980'>version</span> <span
  m='2856880'>which</span> <span m='2857270'>is</span> <span
  m='2857470'>the</span> <span m='2857680'>outcome</span> <span
  m='2858180'>of</span> <span m='2858260'>that</span> <span
  m='2858530'>first</span> <span m='2858830'>play.</span> <span
  m='2860450'>It's</span> <span m='2860610'>going</span> <span
  m='2860760'>to</span> <span m='2860840'>be</span> <span
  m='2861060'>either</span> <span m='2861340'>I</span> <span
  m='2861420'>lose</span> <span m='2861680'>$1,</span> <span
  m='2863270'>we</span> <span m='2863590'>tie,</span> <span
  m='2865050'>or</span> <span m='2865220'>I</span> <span m='2865250'>win</span>
  <span m='2865440'>$1.</span> </p><p><span m='2867400'>So</span> <span
  m='2867860'>if</span> <span m='2868010'>we</span> <span m='2868130'>end</span>
  <span m='2868270'>up</span> <span m='2868380'>with</span> <span
  m='2868470'>the</span> <span m='2868550'>same</span> <span
  m='2868780'>value,</span> <span m='2869300'>you</span> <span
  m='2869320'>actually--</span> <span m='2870210'>in</span> <span
  m='2870340'>most</span> <span m='2870600'>versions--</span> <span
  m='2871450'>you</span> <span m='2871560'>get</span> <span
  m='2871700'>your</span> <span m='2871800'>money</span> <span
  m='2872020'>back,</span> <span m='2872340'>nothing</span> <span
  m='2872610'>changes.</span> <span m='2873250'>The</span> <span
  m='2873410'>bet</span> <span m='2874120'>is</span> <span
  m='2874320'>nullified.</span> <span m='2875320'>So</span> <span
  m='2875460'>that's</span> <span m='2875700'>a</span> <span
  m='2875740'>zero</span> <span m='2876070'>outcome.</span> <span
  m='2877170'>But</span> <span m='2877270'>if we're</span> <span
  m='2877470'>only</span> <span m='2877640'>betting</span> <span
  m='2877900'>$1,</span> <span m='2878250'>these</span> <span m='2878480'>are
  the</span> <span m='2878600'>three</span> <span m='2878780'>possible</span>
  <span m='2879130'>outcomes.</span> <span m='2879850'>You</span> <span
  m='2880010'>can</span> <span m='2880170'>compute</span> <span
  m='2880560'>this,</span> <span m='2880800'>right?</span> <span
  m='2881250'>If</span> <span m='2881430'>I</span> <span m='2881540'>told</span>
  <span m='2881860'>you</span> <span m='2881970'>how</span> <span
  m='2882110'>many</span> <span m='2882310'>times</span> <span
  m='2882620'>you</span> <span m='2882730'>hit,</span> <span
  m='2883470'>then</span> <span m='2883610'>you</span> <span
  m='2883690'>just</span> <span m='2884100'>execute</span> <span
  m='2885810'>through</span> <span m='2886030'>those</span> <span
  m='2886250'>cards</span> <span m='2886660'>and</span> <span
  m='2886780'>you</span> <span m='2886890'>compute</span> <span
  m='2887200'>the</span> <span m='2887280'>values</span> <span
  m='2887690'>of</span> <span m='2887780'>my</span> <span
  m='2887950'>hand,</span> <span m='2888650'>of</span> <span
  m='2888930'>your</span> <span m='2889100'>hand</span> <span
  m='2889400'>versus</span> <span m='2889700'>the</span> <span
  m='2889790'>dealer's</span> <span m='2890120'>hand.</span> <span
  m='2891020'>You</span> <span m='2891120'>see,</span> <span
  m='2891900'>did</span> <span m='2892140'>anyone</span> <span
  m='2892490'>bust?</span> <span m='2893130'>If so,</span> <span
  m='2893380'>they</span> <span m='2893550'>lose.</span> <span
  m='2893990'>Otherwise</span> <span m='2894470'>you</span> <span
  m='2894580'>compare</span> <span m='2894860'>the</span> <span
  m='2894950'>values</span> <span m='2896050'>and</span> <span
  m='2896370'>you</span> <span m='2896530'>see</span> <span
  m='2896830'>which</span> <span m='2897050'>is</span> <span
  m='2897160'>bigger</span> <span m='2897580'>or</span> <span
  m='2897670'>smaller.</span> </p><p><span m='2899360'>This</span> <span
  m='2899560'>is</span> <span m='2899680'>easy</span> <span
  m='2899920'>to</span> <span m='2900020'>do</span> <span m='2900310'>in</span>
  <span m='2900760'>linear</span> <span m='2901050'>time.</span> <span
  m='2902210'>No</span> <span m='2902330'>biggie.</span> <span
  m='2903100'>What's</span> <span m='2903370'>useful</span> <span
  m='2903690'>here</span> <span m='2903910'>is</span> <span
  m='2904020'>that</span> <span m='2904190'>the</span> <span
  m='2904290'>dealer</span> <span m='2904590'>strategy</span> <span
  m='2904865'>is</span> <span m='2905140'>deterministic.</span> <span
  m='2905920'>So</span> <span m='2906040'>after</span> <span m='2906310'>you
  know</span> <span m='2906710'>how many</span> <span m='2907140'>cards</span>
  <span m='2907410'>you</span> <span m='2907610'>take,</span> <span
  m='2908430'>what</span> <span m='2908570'>the</span> <span
  m='2908660'>dealer</span> <span m='2908950'>does</span> <span
  m='2909220'>is</span> <span m='2909350'>force,</span> <span
  m='2909790'>because</span> <span m='2910140'>he just</span> <span
  m='2910320'>looks.</span> <span m='2910550'>Do</span> <span
  m='2910690'>I</span> <span m='2910780'>have</span> <span m='2911390'>17</span>
  <span m='2911850'>or</span> <span m='2911930'>greater?</span> <span
  m='2912290'>If</span> <span m='2912500'>not,</span> <span
  m='2913010'>take</span> <span m='2913170'>another</span> <span
  m='2913430'>card</span> <span m='2913930'>and</span> <span
  m='2914060'>keep</span> <span m='2914390'>repeating</span> <span
  m='2914790'>that.</span> <span m='2915840'>So</span> <span
  m='2916000'>it's</span> <span m='2916120'>a</span> <span
  m='2916170'>deterministic</span> <span m='2916780'>strategy.</span> <span
  m='2917220'>In</span> <span m='2917290'>linear</span> <span
  m='2917560'>time,</span> <span m='2917830'>you</span> <span
  m='2917910'>can</span> <span m='2918060'>figure</span> <span
  m='2918290'>out</span> <span m='2918350'>what</span> <span
  m='2918490'>the</span> <span m='2918620'>outcome</span> <span
  m='2918950'>is.</span> </p><p><span m='2919940'>Then</span> <span
  m='2920110'>you</span> <span m='2920240'>also</span> <span
  m='2920530'>have</span> <span m='2920720'>to</span> <span
  m='2920820'>add</span> <span m='2921660'>the</span> <span
  m='2921810'>outcome</span> <span m='2922150'>of</span> <span
  m='2922250'>all</span> <span m='2922440'>the</span> <span
  m='2922520'>remaining</span> <span m='2922910'>cards,</span> <span
  m='2923310'>which</span> <span m='2923480'>is</span> <span
  m='2923590'>just</span> <span m='2923780'>BG</span> <span
  m='2924220'>of</span> <span m='2924660'>j. This is</span> <span
  m='2924790'>recursion,</span> <span m='2925710'>super</span> <span
  m='2926070'>easy.</span> <span m='2927950'>We</span> <span
  m='2928080'>do</span> <span m='2928230'>this</span> <span
  m='2928930'>for</span> <span m='2929070'>all</span> <span
  m='2929320'>choices</span> <span m='2929780'>of</span> <span
  m='2929910'>j.</span> <span m='2933740'>It's</span> <span
  m='2933940'>like</span> <span m='2934540'>a</span> <span
  m='2934680'>range</span> <span m='2935970'>of</span> <span
  m='2936360'>i</span> <span m='2936620'>plus</span> <span m='2937260'>4</span>
  <span m='2937760'>up to</span> <span m='2938460'>n,</span> <span
  m='2938800'>I</span> <span m='2938860'>think.</span> <span
  m='2946170'>Sure,</span> <span m='2946660'>that'll</span> <span
  m='2946900'>work.</span> <span m='2947640'>I</span> <span
  m='2947750'>should</span> <span m='2947930'>probably</span> <span
  m='2948190'>put</span> <span m='2948340'>an</span> <span m='2948580'>if</span>
  <span m='2949490'>here,</span> <span m='2949920'>which</span> <span
  m='2950120'>is</span> <span m='2950230'>if it's</span> <span
  m='2950550'>a</span> <span m='2950780'>valid</span> <span
  m='2951100'>play.</span> </p><p><span m='2954340'>There</span> <span
  m='2954450'>are</span> <span m='2954520'>some</span> <span
  m='2954710'>constraints</span> <span m='2955180'>here.</span> <span
  m='2955400'>If</span> <span m='2955590'>I've</span> <span
  m='2955730'>already</span> <span m='2956130'>busted,</span> <span
  m='2956680'>I</span> <span m='2956790'>can't</span> <span
  m='2957170'>hit</span> <span m='2957390'>again.</span> <span
  m='2958640'>So</span> <span m='2958780'>in</span> <span
  m='2958870'>fact</span> <span m='2959140'>what</span> <span
  m='2959270'>you</span> <span m='2959340'>have</span> <span
  m='2959490'>to</span> <span m='2959610'>do</span> <span m='2959780'>in</span>
  <span m='2959860'>this</span> <span m='2960040'>for</span> <span
  m='2960270'>loop</span> <span m='2960490'>is</span> <span
  m='2960570'>say,</span> <span m='2961160'>well,</span> <span
  m='2961300'>maybe</span> <span m='2961530'>I</span> <span
  m='2961580'>take</span> <span m='2961770'>another</span> <span
  m='2961990'>hit.</span> <span m='2962200'>Maybe</span> <span
  m='2962420'>I</span> <span m='2962460'>take</span> <span
  m='2962660'>another</span> <span m='2962880'>hit.</span> <span
  m='2963040'>At</span> <span m='2963180'>some</span> <span
  m='2963350'>point</span> <span m='2963670'>I</span> <span
  m='2963760'>go</span> <span m='2963910'>over</span> <span
  m='2964080'>21,</span> <span m='2964990'>and</span> <span
  m='2965130'>then</span> <span m='2965240'>you</span> <span
  m='2965330'>have</span> <span m='2965430'>to</span> <span
  m='2965520'>stop</span> <span m='2965830'>the for</span> <span
  m='2966140'>loop.</span> <span m='2966690'>So</span> <span
  m='2966930'>I'm</span> <span m='2967110'>writing</span> <span
  m='2967340'>that</span> <span m='2967400'>as</span> <span m='2967690'>an
  if.</span> <span m='2967980'>You</span> <span m='2968070'>can</span> <span
  m='2968200'>also</span> <span m='2968390'>do</span> <span m='2968560'>it
  with</span> <span m='2968680'>a</span> <span m='2968750'>break,</span> <span
  m='2969670'>however</span> <span m='2969890'>you</span> <span
  m='2969990'>want.</span> <span m='2970680'>But</span> <span
  m='2970960'>that's--</span> <span m='2972390'>you're</span> <span
  m='2972670'>considering</span> <span m='2973180'>all</span> <span
  m='2973950'>possible</span> <span m='2974480'>options,</span> <span
  m='2974910'>all</span> <span m='2975150'>valid</span> <span
  m='2975550'>options</span> <span m='2975920'>of</span> <span
  m='2976010'>play.</span> </p><p><span m='2976710'>For each</span> <span
  m='2976960'>of them,</span> <span m='2977110'>you</span> <span
  m='2977210'>see</span> <span m='2977370'>what</span> <span
  m='2977590'>the</span> <span m='2977720'>outcome</span> <span
  m='2978060'>was</span> <span m='2978400'>after</span> <span
  m='2978650'>the</span> <span m='2978770'>dealer</span> <span
  m='2979060'>takes</span> <span m='2979310'>some</span> <span
  m='2979360'>more</span> <span m='2979570'>cards.</span> <span
  m='2980950'>This</span> <span m='2981240'>is</span> <span
  m='2981400'>actually</span> <span m='2981780'>a</span> <span
  m='2981840'>little</span> <span m='2982060'>bit</span> <span
  m='2982240'>funny.</span> <span m='2984510'>Sorry,</span> <span
  m='2985310'>this</span> <span m='2985450'>should</span> <span
  m='2985590'>really</span> <span m='2985810'>be</span> <span
  m='2986030'>the</span> <span m='2986140'>number</span> <span
  m='2986510'>of</span> <span m='2986580'>hits</span> <span
  m='2988520'>in</span> <span m='2989700'>range</span> <span
  m='2990100'>from,</span> <span m='2990490'>let's say,</span> <span
  m='2990690'>0</span> <span m='2991110'>to</span> <span m='2991200'>n.</span>
  <span m='2991880'>Maybe you</span> <span m='2992220'>don't</span> <span
  m='2992410'>hit</span> <span m='2992560'>at</span> <span
  m='2992660'>all.</span> <span m='2993560'>And</span> <span
  m='2993670'>then</span> <span m='2993840'>j</span> <span m='2994305'>is</span>
  <span m='2994770'>a</span> <span m='2994840'>little</span> <span
  m='2995020'>bit</span> <span m='2995170'>tricky,</span> <span
  m='2995500'>because</span> <span m='2995720'>this</span> <span
  m='2995930'>is</span> <span m='2996120'>actually</span> <span
  m='2996620'>i</span> <span m='2997310'>plus</span> <span m='2997860'>4</span>
  <span m='2998560'>plus</span> <span m='2998960'>the</span> <span
  m='2999060'>number</span> <span m='2999330'>of</span> <span
  m='2999380'>hits</span> <span m='3001150'>plus</span> <span
  m='3001560'>the</span> <span m='3001680'>number</span> <span
  m='3001970'>of</span> <span m='3002030'>dealer</span> <span
  m='3002480'>hits.</span> <span m='3005750'>OK, so</span> <span
  m='3005900'>you</span> <span m='3006080'>have</span> <span
  m='3006290'>to</span> <span m='3006650'>run</span> <span
  m='3006970'>this</span> <span m='3007150'>algorithm</span> <span
  m='3007700'>to</span> <span m='3007810'>compute</span> <span
  m='3008170'>what</span> <span m='3008310'>happened,</span> <span
  m='3009290'>which</span> <span m='3009520'>computes</span> <span
  m='3009880'>how</span> <span m='3010090'>many</span> <span
  m='3010320'>times</span> <span m='3010640'>a</span> <span
  m='3010710'>dealer</span> <span m='3011000'>took</span> <span
  m='3011190'>a</span> <span m='3011270'>card.</span> <span
  m='3011970'>That's</span> <span m='3012210'>how</span> <span
  m='3012320'>many</span> <span m='3012560'>cards</span> <span
  m='3013410'>got</span> <span m='3013640'>consumed.</span> <span
  m='3014660'>And</span> <span m='3014820'>so</span> <span
  m='3014920'>that's--</span> <span m='3015810'>if</span> <span
  m='3015990'>you</span> <span m='3016070'>do</span> <span m='3016250'>i</span>
  <span m='3016400'>plus</span> <span m='3016650'>4</span> <span
  m='3016860'>plus</span> <span m='3017050'>that</span> <span
  m='3017280'>plus</span> <span m='3017430'>that,</span> <span
  m='3017880'>that's</span> <span m='3018070'>how</span> <span
  m='3018130'>many</span> <span m='3018310'>cards</span> <span
  m='3018590'>are</span> <span m='3018670'>left,</span> <span
  m='3019330'>or</span> <span m='3019450'>where</span> <span
  m='3019580'>the</span> <span m='3019700'>cards</span> <span
  m='3020430'>resume.</span> <span m='3021450'>And</span> <span
  m='3021620'>then</span> <span m='3021750'>you</span> <span
  m='3021860'>call</span> <span m='3022120'>BG</span> <span
  m='3022490'>on</span> <span m='3022620'>that.</span> </p><p><span
  m='3023200'>So</span> <span m='3023370'>we're,</span> <span
  m='3023550'>in</span> <span m='3023700'>general,</span> <span
  m='3024180'>from</span> <span m='3024410'>BG</span> <span
  m='3024720'>of</span> <span m='3024800'>i--</span> <span m='3025700'>if
  you</span> <span m='3026180'>think</span> <span m='3026340'>of</span> <span
  m='3026410'>the</span> <span m='3026510'>DAG--</span> <span
  m='3028650'>there's</span> <span m='3028770'>some</span> <span
  m='3029150'>position,</span> <span m='3029920'>maybe</span> <span
  m='3030670'>i</span> <span m='3030850'>plus</span> <span m='3031330'>4</span>
  <span m='3031790'>happens.</span> <span m='3032410'>Maybe it</span> <span
  m='3032660'>doesn't</span> <span m='3032950'>happen.</span> <span
  m='3033350'>It</span> <span m='3033450'>depends</span> <span
  m='3033790'>on</span> <span m='3034400'>what</span> <span
  m='3034590'>the</span> <span m='3034680'>dealer</span> <span
  m='3034970'>does.</span> <span m='3036480'>We're</span> <span
  m='3036640'>going</span> <span m='3036740'>to</span> <span
  m='3036810'>depend</span> <span m='3037280'>on</span> <span
  m='3037600'>i</span> <span m='3037750'>plus</span> <span m='3038240'>6,</span>
  <span m='3038870'>i</span> <span m='3038990'>plus</span> <span
  m='3039290'>5</span> <span m='3039710'>maybe.</span> <span
  m='3040650'>It's</span> <span m='3040750'>going</span> <span
  m='3040870'>to</span> <span m='3040930'>be</span> <span m='3041090'>all</span>
  <span m='3041330'>of</span> <span m='3041420'>these</span> <span
  m='3041600'>possibilities.</span> <span m='3043040'>These</span> <span
  m='3043270'>are</span> <span m='3043400'>all</span> <span
  m='3044150'>different</span> <span m='3044530'>plays.</span> <span
  m='3046370'>And</span> <span m='3046510'>then</span> <span
  m='3046640'>on</span> <span m='3046770'>each</span> <span
  m='3046960'>of</span> <span m='3047030'>these</span> <span
  m='3047200'>edges,</span> <span m='3047580'>we're going</span> <span
  m='3047730'>to have</span> <span m='3047900'>plus</span> <span
  m='3048240'>1,</span> <span m='3049052'>0,</span> <span m='3049460'>or
  minus</span> <span m='3049850'>1.</span> <span m='3050090'>Those</span> <span
  m='3050390'>are</span> <span m='3050550'>the</span> <span
  m='3050830'>outcomes,</span> <span m='3052690'>whether</span> <span
  m='3052930'>I</span> <span m='3052980'>won</span> <span m='3053230'>or</span>
  <span m='3053310'>lost</span> <span m='3053585'>or</span> <span
  m='3053860'>tied.</span> </p><p><span m='3055220'>And</span> <span
  m='3055370'>then</span> <span m='3055550'>we're</span> <span
  m='3055660'>just</span> <span m='3055870'>computing</span> <span
  m='3057150'>a</span> <span m='3057200'>shortest</span> <span
  m='3057560'>path</span> <span m='3057890'>in</span> <span
  m='3058040'>this</span> <span m='3058140'>DAG.</span> <span
  m='3059040'>It's</span> <span m='3059320'>actually</span> <span
  m='3059590'>really</span> <span m='3059840'>easy</span> <span
  m='3060720'>if</span> <span m='3061170'>you think</span> <span
  m='3061360'>about</span> <span m='3061470'>it</span> <span
  m='3061980'>that</span> <span m='3062180'>way.</span> <span
  m='3062780'>This</span> <span m='3062870'>is</span> <span
  m='3062950'>just</span> <span m='3063140'>how</span> <span
  m='3063270'>many</span> <span m='3063490'>cards</span> <span
  m='3063790'>are</span> <span m='3063870'>left.</span> <span
  m='3064790'>From</span> <span m='3064990'>that</span> <span
  m='3065200'>position,</span> <span m='3065580'>you just see</span> <span
  m='3065950'>what are</span> <span m='3066270'>all</span> <span
  m='3066380'>the</span> <span m='3066450'>possibilities?</span> <span
  m='3067070'>What</span> <span m='3067240'>are</span> <span
  m='3067340'>all</span> <span m='3067480'>the</span> <span
  m='3067620'>edges</span> <span m='3067970'>that</span> <span
  m='3068240'>I</span> <span m='3068630'>could</span> <span
  m='3068860'>go</span> <span m='3069030'>to?</span> <span
  m='3069710'>What</span> <span m='3069900'>states</span> <span
  m='3070190'>could I</span> <span m='3070290'>to</span> <span
  m='3070370'>go</span> <span m='3070510'>to</span> <span
  m='3070680'>next?</span> <span m='3071340'>How</span> <span
  m='3071470'>many</span> <span m='3071650'>cards</span> <span
  m='3071950'>are</span> <span m='3072000'>remaining?</span> <span
  m='3072730'>How</span> <span m='3072850'>much</span> <span
  m='3073070'>did</span> <span m='3073220'>it</span> <span
  m='3073310'>cost</span> <span m='3073670'>me</span> <span
  m='3073880'>or</span> <span m='3073960'>win</span> <span
  m='3074200'>me?</span> <span m='3075330'>And</span> <span
  m='3075480'>then</span> <span m='3075670'>take</span> <span
  m='3076290'>longest</span> <span m='3076840'>paths</span> <span
  m='3077210'>in</span> <span m='3077300'>that</span> <span
  m='3077520'>DAG.</span> </p><p><span m='3078660'>That</span> <span
  m='3078850'>will</span> <span m='3078980'>give</span> <span
  m='3079120'>you</span> <span m='3079230'>the</span> <span
  m='3079330'>exact</span> <span m='3079680'>same</span> <span
  m='3079870'>answer.</span> <span m='3080090'>That's</span> <span
  m='3080320'>what</span> <span m='3080430'>this</span> <span
  m='3080590'>dynamic</span> <span m='3080940'>programming</span> <span
  m='3081790'>is</span> <span m='3081980'>doing.</span> <span
  m='3082580'>In</span> <span m='3082770'>the</span> <span
  m='3082880'>lecture</span> <span m='3083170'>notes,</span> <span
  m='3083470'>there's</span> <span m='3083670'>more</span> <span
  m='3083860'>details</span> <span m='3084850'>where I</span> <span
  m='3085030'>actually</span> <span m='3085390'>tried</span> <span
  m='3085600'>to</span> <span m='3085680'>write</span> <span
  m='3085920'>out</span> <span m='3086190'>this</span> <span
  m='3086390'>function,</span> <span m='3086770'>this</span> <span
  m='3086950'>recurrence</span> <span m='3088000'>as</span> <span
  m='3088290'>an</span> <span m='3088380'>algorithm.</span> <span
  m='3089390'>You</span> <span m='3089530'>could</span> <span
  m='3089670'>do</span> <span m='3089820'>it,</span> <span
  m='3090650'>assuming</span> <span m='3091010'>I've</span> <span
  m='3091090'>got</span> <span m='3091220'>everything</span> <span
  m='3091540'>right.</span> <span m='3091810'>It's</span> <span
  m='3091980'>not</span> <span m='3092140'>that</span> <span
  m='3092280'>hard.</span> <span m='3093700'>The</span> <span
  m='3093860'>order</span> <span m='3094140'>here</span> <span
  m='3094390'>is</span> <span m='3094500'>just</span> <span
  m='3094710'>the</span> <span m='3094780'>same</span> <span
  m='3095000'>as</span> <span m='3095110'>the</span> <span
  m='3095200'>order</span> <span m='3095390'>we</span> <span
  m='3095490'>did</span> <span m='3095630'>before.</span> <span
  m='3096410'>The</span> <span m='3096530'>running</span> <span
  m='3096770'>time</span> <span m='3097110'>is</span> <span
  m='3097230'>going</span> <span m='3097350'>to</span> <span
  m='3097430'>be</span> <span m='3097640'>cubic</span> <span
  m='3098170'>in</span> <span m='3098280'>the</span> <span
  m='3098370'>worst</span> <span m='3098640'>case,</span> <span
  m='3098960'>because</span> <span m='3099300'>we</span> <span
  m='3099420'>have--</span> <span m='3100720'>it's</span> <span
  m='3100830'>a</span> <span m='3100880'>little</span> <span
  m='3101180'>non-obvious,</span> <span m='3101820'>but</span> <span
  m='3101920'>we</span> <span m='3102040'>have</span> <span m='3102200'>n</span>
  <span m='3102400'>sub-problems.</span> <span m='3103530'>For each of</span>
  <span m='3103870'>them,</span> <span m='3103910'>we</span> <span
  m='3103980'>have</span> <span m='3104120'>n</span> <span
  m='3104340'>choices.</span> <span m='3105220'>And</span> <span
  m='3105520'>for</span> <span m='3105680'>each</span> <span
  m='3105960'>choice</span> <span m='3107030'>we</span> <span
  m='3107160'>have</span> <span m='3107280'>to</span> <span
  m='3107460'>run</span> <span m='3107830'>the</span> <span
  m='3108120'>dealer</span> <span m='3108470'>strategy.</span> </p><p><span
  m='3109740'>And</span> <span m='3109910'>so</span> <span
  m='3110070'>that</span> <span m='3110320'>conceivably</span> <span
  m='3110930'>could</span> <span m='3111100'>take</span> <span
  m='3111280'>linear</span> <span m='3111560'>time.</span> <span
  m='3111870'>Here</span> <span m='3112020'>I'm</span> <span
  m='3112110'>assuming</span> <span m='3112460'>a</span> <span
  m='3112510'>general</span> <span m='3112850'>value</span> <span
  m='3113090'>of</span> <span m='3113160'>21.</span> <span m='3113590'>If</span>
  <span m='3114020'>21</span> <span m='3114450'>is</span> <span
  m='3114540'>actually</span> <span m='3114810'>constant,</span> <span
  m='3115380'>it</span> <span m='3115540'>only</span> <span
  m='3115760'>be</span> <span m='3115890'>constant</span> <span
  m='3116300'>time</span> <span m='3116530'>to</span> <span
  m='3116600'>play</span> <span m='3116830'>out</span> <span
  m='3117290'>a</span> <span m='3117340'>single</span> <span
  m='3117650'>hand,</span> <span m='3117940'>and</span> <span
  m='3118110'>then</span> <span m='3118330'>it's</span> <span
  m='3118640'>quadratic</span> <span m='3119120'>time.</span> <span
  m='3119450'>So</span> <span m='3119610'>it</span> <span
  m='3119660'>depends</span> <span m='3119990'>on</span> <span
  m='3120070'>your</span> <span m='3120630'>model</span> <span
  m='3121050'>of</span> <span m='3121210'>generalized</span> <span
  m='3121670'>blackjack.</span> <span m='3123380'>But</span> <span
  m='3123860'>that's</span> <span m='3124070'>it.</span> <span
  m='3124380'>And</span> <span m='3124790'>get</span> <span
  m='3125010'>some</span> <span m='3125260'>flavor of</span> <span
  m='3125600'>the</span> <span m='3125720'>power of</span> <span
  m='3126080'>dynamic</span> <span m='3126480'>programming,</span> <span
  m='3126940'>we're</span> <span m='3127060'>going</span> <span
  m='3127160'>to</span> <span m='3127210'>see</span> <span
  m='3127440'>it's</span> <span m='3127700'>even</span> <span
  m='3127990'>more</span> <span m='3128200'>powerful</span> <span
  m='3128620'>than</span> <span m='3128760'>this</span> <span
  m='3129110'>in</span> <span m='3129430'>the</span> <span
  m='3129540'>next</span> <span m='3129760'>two</span> <span
  m='3129880'>lectures.</span> </p>
embedded_media:
  - uid: 7ac29ab38e7046ab7c6db9f71a464445
    parent_uid: b22b9a62f6fb04772c198d96c0ececbc
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: ENyox7kNKeY
  - uid: 6023d1eed8f39917ff1d49d1ac3fba85
    parent_uid: b22b9a62f6fb04772c198d96c0ececbc
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/ENyox7kNKeY/default.jpg'
  - uid: eca98d0a53c0c2b6579e7ec35e3cad1d
    parent_uid: b22b9a62f6fb04772c198d96c0ececbc
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-20-dynamic-programming/id585700718?i=126127769
  - uid: 550477f0a5352cbf3f0c573d805cb4b9
    parent_uid: b22b9a62f6fb04772c198d96c0ececbc
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec20_300k.mp4'
  - uid: 98d8c2795bfad80c8af2e40c51090130
    parent_uid: b22b9a62f6fb04772c198d96c0ececbc
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: ENyox7kNKeY
  - uid: b78d067ba45ff0159a86ba2f25ca7de1
    parent_uid: b22b9a62f6fb04772c198d96c0ececbc
    id: ENyox7kNKeY.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-20-dynamic-programming-ii-text-justification-blackjack/ENyox7kNKeY.srt
  - uid: a63a462733c5e3dd39f94de57d442b5c
    parent_uid: b22b9a62f6fb04772c198d96c0ececbc
    id: ENyox7kNKeY.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-20-dynamic-programming-ii-text-justification-blackjack/ENyox7kNKeY.pdf
  - uid: 448ca63c2ceec8e65a38f0082e202734
    parent_uid: b22b9a62f6fb04772c198d96c0ececbc
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 6f9f65ea2250cd4ad816a8af9481edd3
    parent_uid: b22b9a62f6fb04772c198d96c0ececbc
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
