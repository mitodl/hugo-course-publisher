---
title: 'Lecture 5: Binary Search Trees, BST Sort'
uid: 30b1227d461b32e4b54c38350eb51ea4
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-5-binary-search-trees-bst-sort
short_url: lecture-5-binary-search-trees-bst-sort
inline_embed_id: '64517852lecture5:binarysearchtrees,bstsort24958980'
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, binary search trees are
  introduced, and several operations are covered: insertion, finding a value,
  finding the minimum element.</p> <p><strong>Instructor:</strong> Srini
  Devadas</p>
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
  m='22130'>PROFESSOR: Today's</span> <span m='22470'>lecture</span> <span
  m='23700'>is</span> <span m='24270'>about</span> <span m='24540'>a</span>
  <span m='24990'>brand</span> <span m='25380'>new</span> <span
  m='25590'>data</span> <span m='25860'>structure</span> <span
  m='26970'>that</span> <span m='27430'>you've</span> <span
  m='27600'>probably</span> <span m='28040'>seen</span> <span
  m='28320'>before,</span> <span m='29130'>and</span> <span
  m='29560'>we've</span> <span m='29700'>mentioned</span> <span
  m='30670'>earlier</span> <span m='31110'>in</span> <span
  m='31270'>double</span> <span m='31560'>06,</span> <span
  m='32490'>called</span> <span m='32740'>a</span> <span m='32790'>binary</span>
  <span m='33270'>search</span> <span m='33710'>tree.</span> <span
  m='34940'>We've</span> <span m='35100'>talked</span> <span
  m='35320'>about</span> <span m='35500'>binary</span> <span
  m='35880'>search.</span> <span m='37080'>It's</span> <span m='37470'>a</span>
  <span m='38140'>fundamental</span> <span m='38900'>divide</span> <span
  m='39180'>and</span> <span m='39300'>conquer</span> <span
  m='39660'>paradigm.</span> <span m='40730'>There's</span> <span
  m='40960'>a</span> <span m='41030'>data</span> <span
  m='41250'>structure</span> <span m='41650'>associated</span> <span
  m='42170'>with</span> <span m='42320'>it,</span> <span m='42730'>called</span>
  <span m='42970'>the</span> <span m='43050'>BST,</span> <span
  m='44150'>a</span> <span m='44230'>binary</span> <span m='44600'>search</span>
  <span m='44950'>tree.</span> </p><p><span m='45880'>And</span> <span
  m='46270'>what</span> <span m='46400'>I</span> <span m='46430'>want</span>
  <span m='46610'>to</span> <span m='46680'>do</span> <span m='46870'>is</span>
  <span m='47190'>motivate</span> <span m='48070'>this</span> <span
  m='48330'>data</span> <span m='48550'>structure</span> <span
  m='49310'>using</span> <span m='50080'>a</span> <span
  m='50380'>problem.</span> <span m='51390'>It's</span> <span m='51510'>a</span>
  <span m='51560'>bit</span> <span m='51700'>of</span> <span m='51790'>a</span>
  <span m='51870'>toy</span> <span m='52110'>problem,</span> <span
  m='53490'>but</span> <span m='53650'>certainly</span> <span m='54730'>a</span>
  <span m='54810'>problem</span> <span m='55250'>that</span> <span
  m='57340'>you</span> <span m='57510'>could</span> <span
  m='57620'>imagine</span> <span m='59460'>exists</span> <span
  m='59970'>in</span> <span m='60500'>all</span> <span m='60730'>sorts</span>
  <span m='61070'>of</span> <span m='62180'>scheduling</span> <span
  m='63110'>problems.</span> <span m='64690'>It's</span> <span m='65190'>a
  part</span> <span m='65680'>of</span> <span m='66830'>a</span> <span
  m='66930'>runway</span> <span m='67290'>reservation</span> <span
  m='67860'>system</span> <span m='68310'>that</span> <span m='68490'>you</span>
  <span m='68600'>can</span> <span m='68710'>imagine</span> <span
  m='69080'>building.</span> </p><p><span m='70160'>And</span> <span
  m='70810'>what</span> <span m='70990'>I'll</span> <span m='71100'>do</span>
  <span m='71300'>is</span> <span m='71480'>define</span> <span
  m='72630'>this</span> <span m='72870'>problem</span> <span
  m='73910'>and</span> <span m='74750'>talk</span> <span m='75020'>about</span>
  <span m='75770'>how</span> <span m='76050'>we</span> <span
  m='76170'>could</span> <span m='76300'>possibly</span> <span
  m='76730'>solve</span> <span m='77150'>it</span> <span m='77370'>with</span>
  <span m='77500'>the</span> <span m='77580'>data</span> <span
  m='77780'>structures</span> <span m='78220'>you've</span> <span
  m='78330'>already</span> <span m='78670'>seen--</span> <span
  m='79720'>so</span> <span m='80370'>lists</span> <span m='80940'>and</span>
  <span m='81200'>arrays,</span> <span m='82740'>heaps</span> <span
  m='83080'>as</span> <span m='83210'>well</span> <span m='83600'>as,</span>
  <span m='83690'>which we</span> <span m='83800'>saw</span> <span
  m='83980'>last</span> <span m='84300'>time--</span> <span m='85270'>and</span>
  <span m='85710'>hopefully</span> <span m='87040'>motivate</span> <span
  m='87590'>you</span> <span m='87870'>into</span> <span m='89760'>the</span>
  <span m='90240'>reason</span> <span m='90650'>behind</span> <span
  m='91810'>the</span> <span m='91870'>existence</span> <span
  m='92540'>of</span> <span m='93100'>binary</span> <span
  m='93520'>search</span> <span m='93850'>trees,</span> <span
  m='94580'>because</span> <span m='94870'>they are</span> <span
  m='95160'>kind</span> <span m='95380'>of</span> <span m='95460'>the</span>
  <span m='95540'>perfect</span> <span m='95960'>data</span> <span
  m='96160'>structure</span> <span m='96850'>for</span> <span
  m='97240'>this</span> <span m='97460'>particular</span> <span
  m='97860'>problem.</span> <span m='100080'>So</span> <span
  m='100270'>let's</span> <span m='100500'>dive</span> <span
  m='100770'>into</span> <span m='102650'>what</span> <span
  m='103040'>the</span> <span m='103180'>runway</span> <span
  m='103520'>reservation</span> <span m='104030'>system</span> <span
  m='105550'>looks</span> <span m='105830'>like.</span> <span
  m='109910'>And</span> <span m='110090'>it's</span> <span
  m='110200'>your</span> <span m='110370'>basic</span> <span
  m='110790'>scheduling</span> <span m='111270'>problem.</span> </p><p><span
  m='113050'>We'll</span> <span m='113280'>assume</span> <span
  m='114990'>an</span> <span m='115160'>airport</span> <span
  m='119010'>with</span> <span m='119200'>a</span> <span
  m='119250'>single</span> <span m='119670'>runway.</span> <span
  m='124286'>Now</span> <span m='124780'>Logan</span> <span
  m='125150'>has</span> <span m='125350'>six</span> <span
  m='125630'>runways.</span> <span m='126180'>But</span> <span
  m='126850'>the</span> <span m='127010'>moment</span> <span
  m='127310'>there's</span> <span m='127440'>any</span> <span
  m='127610'>sort</span> <span m='127790'>of</span> <span
  m='127870'>weather</span> <span m='128370'>you're</span> <span
  m='128530'>down</span> <span m='128789'>to</span> <span m='128889'>one.</span>
  <span m='129699'>And</span> <span m='129800'>of</span> <span
  m='129880'>course,</span> <span m='130169'>there's</span> <span
  m='130210'>lots</span> <span m='130419'>of</span> <span
  m='130539'>airports</span> <span m='131750'>with</span> <span
  m='131880'>a</span> <span m='131930'>single</span> <span
  m='132270'>runway.</span> </p><p><span m='133180'>And we can</span> <span
  m='133430'>imagine</span> <span m='133820'>that</span> <span
  m='133950'>this</span> <span m='134110'>runway</span> <span
  m='134420'>is</span> <span m='134570'>pretty</span> <span
  m='134780'>busy.</span> <span m='135850'>There's</span> <span
  m='136310'>obviously</span> <span m='136700'>safety</span> <span
  m='137150'>issues</span> <span m='137490'>associated</span> <span
  m='137960'>with</span> <span m='138430'>landing</span> <span
  m='139090'>planes,</span> <span m='139670'>and</span> <span
  m='139960'>planes</span> <span m='140310'>taking</span> <span
  m='140600'>off.</span> <span m='141500'>And</span> <span m='141720'>so</span>
  <span m='141840'>there are</span> <span m='141980'>constraints</span> <span
  m='142620'>associated</span> <span m='143230'>with</span> <span
  m='143590'>the</span> <span m='143720'>system,</span> <span
  m='144450'>that</span> <span m='144630'>have</span> <span m='144800'>to</span>
  <span m='144870'>be</span> <span m='145010'>obeyed.</span> <span
  m='145840'>And</span> <span m='145950'>you</span> <span m='146010'>have</span>
  <span m='146160'>to</span> <span m='146250'>build</span> <span
  m='146570'>these</span> <span m='146990'>constraints</span> <span
  m='147610'>in--</span> <span m='147960'>and</span> <span m='148080'>the</span>
  <span m='148150'>checks</span> <span m='148530'>for</span> <span
  m='148620'>these</span> <span m='148840'>constraints--</span> <span
  m='149760'>into your</span> <span m='150100'>data</span> <span
  m='150300'>structure.</span> <span m='151780'>That's</span> <span
  m='151990'>sort</span> <span m='152090'>of</span> <span m='152150'>the</span>
  <span m='152240'>summary</span> <span m='152790'>of</span> <span
  m='153930'>the</span> <span m='154080'>context.</span> </p><p><span
  m='157170'>So</span> <span m='157520'>reservations</span> <span
  m='159790'>for</span> <span m='160160'>future</span> <span
  m='160610'>landings</span> <span m='163780'>is</span> <span
  m='163970'>really</span> <span m='164160'>what</span> <span
  m='164400'>this</span> <span m='165070'>system</span> <span
  m='165510'>is</span> <span m='166720'>built</span> <span
  m='167020'>for.</span> <span m='168240'>There's</span> <span
  m='168450'>a</span> <span m='168680'>notion</span> <span m='169070'>of</span>
  <span m='169190'>time.</span> <span m='170200'>We'll assume</span> <span
  m='170700'>that</span> <span m='170820'>time</span> <span m='171140'>is</span>
  <span m='171240'>continuous.</span> <span m='172790'>So</span> <span
  m='172960'>it</span> <span m='173060'>could</span> <span m='173180'>be</span>
  <span m='173280'>represented</span> <span m='173990'>by</span> <span
  m='176200'>a</span> <span m='176510'>real</span> <span
  m='176820'>variable,</span> <span m='178440'>or a</span> <span
  m='178610'>real</span> <span m='178870'>quantity.</span> </p><p><span
  m='180290'>And</span> <span m='181610'>what</span> <span
  m='181820'>we'd</span> <span m='181960'>like</span> <span m='182130'>to</span>
  <span m='182230'>do</span> <span m='182510'>is</span> <span
  m='184870'>reserve</span> <span m='190210'>requests</span> <span
  m='192450'>for</span> <span m='193680'>landings.</span> <span
  m='194460'>And</span> <span m='194670'>these</span> <span
  m='194910'>are</span> <span m='194970'>going</span> <span m='195090'>to</span>
  <span m='195170'>specify</span> <span m='198520'>landing</span> <span
  m='198970'>time.</span> <span m='200340'>Each</span> <span
  m='200510'>of</span> <span m='200600'>them</span> <span m='200720'>is</span>
  <span m='200810'>going</span> <span m='200900'>to</span> <span
  m='200950'>specify a</span> <span m='201400'>landing</span> <span
  m='201730'>time.</span> <span m='202630'>We</span> <span
  m='202770'>call</span> <span m='203020'>it</span> <span m='203200'>t.</span>
  </p><p><span m='206110'>And</span> <span m='207660'>in</span> <span
  m='207890'>particular,</span> <span m='209020'>we're</span> <span
  m='209120'>going</span> <span m='209240'>to</span> <span m='209480'>add</span>
  <span m='210880'>t</span> <span m='213210'>to</span> <span
  m='213450'>the</span> <span m='213560'>set</span> <span m='216440'>R</span>
  <span m='217816'>of</span> <span m='218160'>landing</span> <span
  m='218570'>times</span> <span m='220230'>if</span> <span m='222180'>no</span>
  <span m='222360'>other</span> <span m='222590'>landings</span> <span
  m='228410'>are</span> <span m='228600'>scheduled</span> <span
  m='232370'>within</span> <span m='234050'>k</span> <span
  m='234280'>minutes.</span> <span m='237790'>And k</span> <span m='238220'>is
  a</span> <span m='238300'>parameter</span> <span m='240410'>that</span> <span
  m='242170'>could</span> <span m='242410'>vary.</span> <span m='243430'>I
  mean,</span> <span m='243580'>it</span> <span m='243660'>could be</span> <span
  m='243920'>statically</span> <span m='244430'>set</span> <span
  m='245310'>to</span> <span m='245740'>3</span> <span
  m='245930'>minutes,</span> <span m='246680'>or</span> <span
  m='246830'>maybe</span> <span m='247120'>4.</span> <span m='247810'>You
  can</span> <span m='248085'>imagine</span> <span m='248360'>it</span> <span
  m='248510'>varying it</span> <span m='249160'>dynamically</span> <span
  m='250420'>depending</span> <span m='250790'>on</span> <span
  m='250920'>weather</span> <span m='251150'>conditions,</span> <span
  m='252360'>things</span> <span m='252550'>like</span> <span
  m='252740'>that.</span> <span m='256230'>For</span> <span
  m='256390'>the</span> <span m='256630'>most</span> <span m='256940'>of</span>
  <span m='257000'>the</span> <span m='257040'>examples</span> <span
  m='257450'>we'll</span> <span m='257589'>talk</span> <span
  m='257820'>about</span> <span m='258050'>today,</span> <span
  m='258730'>we'll</span> <span m='258880'>assume</span> <span
  m='259320'>k</span> <span m='259390'>is</span> <span m='259709'>3</span> <span
  m='259930'>minutes,</span> <span m='260269'>or</span> <span
  m='260360'>something</span> <span m='260610'>like</span> <span
  m='260779'>that.</span> </p><p><span m='263130'>So</span> <span
  m='264890'>this</span> <span m='265100'>is</span> <span
  m='265410'>about</span> <span m='266780'>adding</span> <span
  m='267180'>to</span> <span m='267260'>the</span> <span m='267360'>data</span>
  <span m='267570'>structure.</span> <span m='268700'>And</span> <span
  m='268850'>so</span> <span m='269010'>an</span> <span m='269090'>insert</span>
  <span m='269630'>operation,</span> <span m='270160'>if</span> <span
  m='270250'>you</span> <span m='270390'>will,</span> <span
  m='271290'>that</span> <span m='271490'>has</span> <span m='271760'>a</span>
  <span m='271800'>constraint</span> <span m='272250'>associated</span> <span
  m='272710'>with</span> <span m='272860'>it</span> <span m='273000'>that</span>
  <span m='273120'>you</span> <span m='273200'>need</span> <span
  m='273350'>to</span> <span m='273420'>check.</span> <span
  m='274470'>And</span> <span m='274570'>so</span> <span m='274650'>you</span>
  <span m='274780'>wouldn't</span> <span m='274970'>insert</span> <span
  m='275570'>if</span> <span m='275650'>the</span> <span
  m='275730'>constraint</span> <span m='276140'>was</span> <span
  m='276260'>violated.</span> <span m='277060'>You</span> <span
  m='277190'>would</span> <span m='277720'>if</span> <span m='278440'>the</span>
  <span m='278610'>constraint</span> <span m='278970'>was</span> <span
  m='279090'>satisfied.</span> </p><p><span m='280760'>And</span> <span
  m='282020'>time,</span> <span m='282520'>as</span> <span m='282670'>I</span>
  <span m='282700'>said,</span> <span m='283210'>is</span> <span
  m='284690'>something</span> <span m='285030'>that</span> <span
  m='286096'>is</span> <span m='286510'>part</span> <span m='286730'>of</span>
  <span m='286790'>the</span> <span m='286890'>system.</span> <span
  m='287500'>It</span> <span m='287660'>needs</span> <span m='287810'>to</span>
  <span m='287870'>be</span> <span m='287980'>modeled.</span> <span
  m='289300'>You</span> <span m='289510'>have</span> <span m='289710'>the</span>
  <span m='289920'>current</span> <span m='290330'>notion</span> <span
  m='290630'>of</span> <span m='290780'>time.</span> <span m='291560'>And</span>
  <span m='291990'>every</span> <span m='292280'>time</span> <span
  m='293400'>you</span> <span m='294590'>have</span> <span m='294810'>a</span>
  <span m='294880'>plane</span> <span m='295810'>that's</span> <span
  m='295990'>already</span> <span m='296480'>landed,</span> <span
  m='297240'>which</span> <span m='297410'>means</span> <span
  m='297650'>that</span> <span m='298560'>you</span> <span m='299690'>can</span>
  <span m='299830'>essentially</span> <span m='300370'>take</span> <span
  m='300730'>this</span> <span m='301200'>particular</span> <span
  m='302320'>landing</span> <span m='302750'>time</span> <span
  m='303150'>away</span> <span m='303430'>from</span> <span
  m='303780'>the</span> <span m='303870'>set</span> <span m='304160'>R.</span>
  <span m='304870'>So</span> <span m='305060'>this</span> <span
  m='305580'>removal,</span> <span m='306380'>or</span> <span
  m='306530'>delete--</span> <span m='308810'>we</span> <span
  m='310050'>remove</span> <span m='312650'>from</span> <span
  m='313940'>set</span> <span m='314940'>R,</span> <span m='315720'>which</span>
  <span m='315890'>is</span> <span m='316000'>the</span> <span
  m='316060'>set</span> <span m='316250'>of</span> <span
  m='316350'>landing</span> <span m='316700'>times</span> <span
  m='317730'>after</span> <span m='319560'>the</span> <span
  m='319660'>plane</span> <span m='319930'>lands.</span> </p><p><span
  m='323330'>So</span> <span m='323890'>every</span> <span
  m='324110'>once</span> <span m='324310'>in</span> <span
  m='324370'>awhile,</span> <span m='324730'>as</span> <span
  m='325060'>time</span> <span m='325330'>increments,</span> <span
  m='326020'>you're</span> <span m='326140'>going</span> <span
  m='326240'>to</span> <span m='326550'>be</span> <span
  m='326670'>checking</span> <span m='326970'>the</span> <span
  m='327060'>data</span> <span m='327260'>structure.</span> <span
  m='327850'>And</span> <span m='328020'>you</span> <span m='328100'>can</span>
  <span m='328200'>do</span> <span m='328300'>this,</span> <span
  m='328860'>maybe,</span> <span m='329070'>every</span> <span
  m='329250'>minute,</span> <span m='329720'>every</span> <span
  m='329970'>30</span> <span m='330180'>seconds.</span> <span
  m='331440'>That</span> <span m='331880'>isn't</span> <span
  m='332130'>really</span> <span m='332320'>important.</span> <span
  m='333280'>But</span> <span m='333450'>you</span> <span m='333540'>have</span>
  <span m='333690'>to</span> <span m='333760'>be</span> <span
  m='333850'>able</span> <span m='333980'>to</span> <span
  m='334040'>remove</span> <span m='334310'>from</span> <span
  m='334480'>this</span> <span m='334610'>data</span> <span
  m='334810'>structure.</span> </p><p><span m='336060'>So</span> <span
  m='336530'>fairly</span> <span m='336820'>straightforward</span> <span
  m='337290'>data</span> <span m='337470'>structure.</span> <span
  m='338510'>It's</span> <span m='338860'>a</span> <span m='338930'>set,</span>
  <span m='339410'>R.</span> <span m='340560'>We</span> <span
  m='340650'>don't</span> <span m='340810'>quite</span> <span
  m='341110'>know</span> <span m='341320'>how</span> <span m='341460'>to</span>
  <span m='341760'>implement</span> <span m='342230'>it</span> <span
  m='342320'>yet.</span> <span m='343190'>But</span> <span
  m='343340'>we'd</span> <span m='343480'>like</span> <span m='343670'>to</span>
  <span m='343770'>do</span> <span m='344110'>all</span> <span
  m='344460'>of</span> <span m='344580'>these</span> <span
  m='344800'>operations</span> <span m='346850'>in</span> <span
  m='357420'>order</span> <span m='357660'>log</span> <span m='357920'>n</span>
  <span m='358060'>time,</span> <span m='359150'>where</span> <span
  m='360630'>n</span> <span m='360995'>is the</span> <span
  m='361360'>size</span> <span m='361770'>of</span> <span m='361850'>the</span>
  <span m='361920'>set.</span> <span m='363090'>All</span> <span
  m='363190'>right?</span> </p><p><span m='364410'>So</span> <span
  m='366900'>any</span> <span m='367050'>questions</span> <span
  m='367380'>about</span> <span m='367540'>that?</span> <span
  m='367940'>Any</span> <span m='368110'>questions</span> <span
  m='368510'>about</span> <span m='369360'>the</span> <span
  m='369510'>definition</span> <span m='369970'>of</span> <span
  m='370050'>the</span> <span m='370130'>problem</span> <span
  m='372060'>before</span> <span m='372340'>we</span> <span
  m='372450'>move</span> <span m='372630'>on?</span> <span m='374790'>Are</span>
  <span m='374860'>we</span> <span m='374950'>good</span> <span
  m='375090'>on?</span> <span m='376440'>OK.</span> </p><p><span
  m='377820'>So</span> <span m='378740'>let's</span> <span
  m='381330'>look</span> <span m='381510'>at</span> <span m='381600'>a</span>
  <span m='383370'>real</span> <span m='383640'>straightforward</span> <span
  m='384190'>example,</span> <span m='385460'>and</span> <span
  m='385620'>put</span> <span m='385770'>this</span> <span m='385930'>up</span>
  <span m='386090'>here</span> <span m='386360'>so</span> <span
  m='389960'>you</span> <span m='390100'>get</span> <span m='390770'>a</span>
  <span m='390900'>better</span> <span m='391140'>sense</span> <span
  m='391450'>of</span> <span m='391550'>this.</span> <span
  m='392720'>Let's</span> <span m='392940'>say</span> <span
  m='393090'>that,</span> <span m='393630'>right</span> <span
  m='393910'>now,</span> <span m='395300'>we</span> <span m='395450'>are</span>
  <span m='395520'>at</span> <span m='395650'>time</span> <span
  m='395950'>37.</span> <span m='397570'>And</span> <span m='398330'>the</span>
  <span m='398440'>set</span> <span m='398720'>R</span> <span
  m='399340'>has</span> <span m='399570'>41.2,</span> <span
  m='401462'>49,</span> <span m='403110'>and</span> <span m='403380'>53</span>
  <span m='404050'>in</span> <span m='404130'>it.</span> <span
  m='405580'>And</span> <span m='405800'>that's</span> <span
  m='406050'>time.</span> </p><p><span m='408120'>Now</span> <span
  m='408970'>you</span> <span m='409090'>may</span> <span m='409230'>get</span>
  <span m='409350'>a</span> <span m='409400'>request</span> <span
  m='410600'>for</span> <span m='410760'>landing</span> <span
  m='411110'>time</span> <span m='411370'>53.</span> <span
  m='413040'>And--</span> <span m='414340'>I'm</span> <span
  m='414550'>sorry.</span> <span m='415010'>I</span> <span
  m='415680'>want</span> <span m='415840'>to</span> <span m='415880'>call</span>
  <span m='416050'>this</span> <span m='416230'>56.3--</span> <span
  m='418456'>41.2,</span> <span m='419410'>49,</span> <span
  m='419870'>and</span> <span m='419990'>56.3.</span> <span
  m='421500'>You</span> <span m='421600'>may</span> <span m='421710'>get</span>
  <span m='421850'>a</span> <span m='422070'>request</span> <span
  m='422742'>for</span> <span m='423080'>landing</span> <span
  m='423430'>time</span> <span m='423660'>53.</span> <span m='424630'>And</span>
  <span m='424760'>right</span> <span m='424990'>now</span> <span
  m='425150'>the</span> <span m='425260'>time</span> <span m='425520'>is</span>
  <span m='425610'>37.</span> <span m='426740'>It's</span> <span
  m='426930'>in</span> <span m='427020'>the</span> <span
  m='427100'>future,</span> <span m='428030'>and</span> <span
  m='428170'>you</span> <span m='428280'>say</span> <span m='428470'>OK</span>
  <span m='429990'>because</span> <span m='430660'>you've</span> <span
  m='430870'>done</span> <span m='431040'>the</span> <span
  m='431130'>check.</span> <span m='431760'>And</span> <span
  m='431930'>let's</span> <span m='432110'>assume</span> <span
  m='432380'>that</span> <span m='432550'>k</span> <span
  m='433490'>equals</span> <span m='433960'>3.</span> <span
  m='435340'>And</span> <span m='435840'>53</span> <span m='436360'>is</span>
  <span m='436500'>four</span> <span m='437090'>ahead</span> <span
  m='437350'>of</span> <span m='437410'>49,</span> <span m='438380'>and</span>
  <span m='439280'>3.3</span> <span m='440546'>before</span> <span
  m='440968'>56.3,</span> <span m='442640'>so</span> <span
  m='442690'>you're</span> <span m='442840'>OK.</span> </p><p><span
  m='444530'>44</span> <span m='446650'>is</span> <span m='446860'>not</span>
  <span m='447080'>allowed.</span> <span m='450550'>It's</span> <span
  m='450770'>too</span> <span m='450930'>close</span> <span m='451230'>to</span>
  <span m='451330'>41.2.</span> <span m='453610'>And</span> <span
  m='454100'>20,</span> <span m='456030'>just</span> <span m='456180'>for</span>
  <span m='456300'>completeness,</span> <span m='457900'>is</span> <span
  m='458090'>not</span> <span m='458290'>allowed</span> <span
  m='458760'>because</span> <span m='459010'>it's</span> <span
  m='459190'>passed.</span> <span m='462710'>Can't</span> <span
  m='462860'>schedule</span> <span m='463180'>in</span> <span
  m='463260'>the</span> <span m='463330'>past.</span> <span m='464120'>I
  mean,</span> <span m='464550'>it</span> <span m='464610'>could</span> <span
  m='464720'>be</span> <span m='464810'>the</span> <span m='464890'>next</span>
  <span m='465130'>day.</span> <span m='465330'>But</span> <span
  m='465670'>then</span> <span m='465850'>you</span> <span
  m='465960'>wouldn't</span> <span m='466080'>call</span> <span
  m='466270'>it</span> <span m='466360'>20.</span> </p><p><span
  m='466790'>Let's</span> <span m='467160'>assume</span> <span
  m='467470'>that</span> <span m='467930'>time</span> <span m='468260'>is</span>
  <span m='468770'>a</span> <span m='468850'>monotonically</span> <span
  m='469600'>increasing</span> <span m='470110'>function.</span> <span
  m='471830'>You</span> <span m='471910'>have</span> <span m='472060'>a</span>
  <span m='472110'>64-bit</span> <span m='472810'>number.</span> <span
  m='474020'>It</span> <span m='474080'>can</span> <span m='474240'>go</span>
  <span m='474370'>to</span> <span m='474450'>the</span> <span
  m='474550'>end</span> <span m='474680'>of</span> <span m='474750'>the</span>
  <span m='474840'>world,</span> <span m='475750'>or</span> <span
  m='475880'>2012,</span> <span m='476600'>or</span> <span
  m='476860'>wherever</span> <span m='477150'>you</span> <span
  m='477270'>want.</span> <span m='478390'>So</span> <span m='479960'>you</span>
  <span m='480090'>can</span> <span m='480200'>keep</span> <span
  m='480370'>the</span> <span m='480460'>number</span> <span m='480660'>a</span>
  <span m='480710'>bit</span> <span m='480930'>smaller,</span> <span
  m='481390'>and</span> <span m='481840'>do a little</span> <span
  m='482160'>constant</span> <span m='482660'>factor</span> <span
  m='482990'>optimization,</span> <span m='483350'>I</span> <span
  m='483710'>guess.</span> </p><p><span m='485390'>So</span> <span
  m='486970'>that's</span> <span m='487520'>sort</span> <span
  m='487650'>of</span> <span m='487720'>the</span> <span m='487780'>set</span>
  <span m='487980'>up.</span> <span m='488430'>And</span> <span
  m='488680'>hopefully</span> <span m='489030'>you get</span> <span
  m='489140'>a</span> <span m='489190'>sense</span> <span m='489520'>of</span>
  <span m='489630'>what</span> <span m='489890'>the</span> <span
  m='491250'>requirements.</span> <span m='492650'>And</span> <span
  m='493110'>you</span> <span m='493240'>guys</span> <span
  m='493480'>know</span> <span m='493800'>about</span> <span m='494350'>a</span>
  <span m='494430'>bunch</span> <span m='494660'>of</span> <span
  m='494730'>data</span> <span m='494920'>structures</span> <span
  m='495360'>already.</span> <span m='496510'>And</span> <span
  m='496970'>what</span> <span m='497100'>I</span> <span m='497120'>want</span>
  <span m='497260'>to</span> <span m='497310'>do</span> <span
  m='497420'>is</span> <span m='497570'>list</span> <span m='498060'>each</span>
  <span m='498270'>one</span> <span m='498460'>of</span> <span
  m='498560'>them,</span> <span m='499300'>and</span> <span
  m='499960'>essentially</span> <span m='500750'>shoot</span> <span
  m='500980'>them</span> <span m='501100'>down</span> <span
  m='502710'>with</span> <span m='502820'>respect</span> <span
  m='503310'>to</span> <span m='506200'>not</span> <span m='506410'>being</span>
  <span m='506620'>able</span> <span m='507100'>to</span> <span
  m='507830'>make</span> <span m='508180'>this</span> <span
  m='508830'>efficiency</span> <span m='509980'>requirement.</span> <span
  m='511520'>And</span> <span m='511690'>I'd</span> <span m='511760'>like</span>
  <span m='511950'>you</span> <span m='512070'>guys</span> <span
  m='512760'>to</span> <span m='512960'>help</span> <span m='513179'>me</span>
  <span m='513280'>shoot them</span> <span m='513600'>down.</span> </p><p><span
  m='514830'>So</span> <span m='517260'>let's</span> <span
  m='517450'>talk</span> <span m='517760'>about</span> <span
  m='517980'>an</span> <span m='518140'>easy</span> <span m='518450'>one</span>
  <span m='518940'>first.</span> <span m='522110'>Let's</span> <span
  m='522289'>say</span> <span m='522390'>you</span> <span m='522460'>have</span>
  <span m='522559'>an</span> <span m='522650'>unsorted</span> <span
  m='523280'>list</span> <span m='523630'>or an</span> <span
  m='523885'>array</span> <span m='524140'>corresponding</span> <span
  m='524720'>to</span> <span m='524810'>R.</span> <span m='527390'>That's</span>
  <span m='527580'>all</span> <span m='527690'>you</span> <span
  m='527780'>have.</span> <span m='529670'>What's</span> <span
  m='529990'>wrong</span> <span m='530410'>with</span> <span
  m='530550'>this</span> <span m='530730'>data</span> <span
  m='530970'>structure</span> <span m='531990'>from</span> <span
  m='532270'>an</span> <span m='532420'>efficiency</span> <span
  m='533040'>standpoint?</span> <span m='535250'>Yeah.</span> </p><p><span
  m='536090'>AUDIENCE: Pretty much</span> <span m='536518'>everything you
  want</span> <span m='536946'>to do to it</span> <span m='537374'>is
  linear.</span> </p><p><span m='538660'>PROFESSOR: That's</span> <span
  m='538890'>exactly</span> <span m='539290'>right.</span> <span
  m='539670'>Pretty</span> <span m='539890'>much</span> <span
  m='540190'>everything</span> <span m='540560'>you</span> <span m='540680'>want
  to</span> <span m='540940'>do to</span> <span m='541070'>it</span> <span
  m='541230'>is</span> <span m='541520'>linear.</span> <span
  m='543230'>And</span> <span m='543540'>so</span> <span m='544575'>you</span>
  <span m='545050'>want</span> <span m='545210'>to</span> <span
  m='545870'>check</span> <span m='547120'>the</span> <span m='547460'>k</span>
  <span m='547760'>minute</span> <span m='547920'>check.</span> <span
  m='548290'>You</span> <span m='548760'>can</span> <span
  m='549060'>certainly</span> <span m='549910'>insert</span> <span
  m='550370'>into</span> <span m='550820'>it,</span> <span m='552140'>and</span>
  <span m='552280'>just</span> <span m='552440'>add</span> <span
  m='552690'>to</span> <span m='552820'>it.</span> <span m='554360'>So</span>
  <span m='554500'>that</span> <span m='554690'>part</span> <span
  m='554870'>is</span> <span m='554960'>not</span> <span
  m='555120'>linear,</span> <span m='555450'>that's</span> <span
  m='555650'>constant</span> <span m='556040'>time.</span> </p><p><span
  m='557070'>But</span> <span m='557360'>certainly,</span> <span
  m='558400'>anything</span> <span m='558800'>where</span> <span
  m='559880'>you</span> <span m='560250'>want</span> <span m='560380'>to</span>
  <span m='560430'>go</span> <span m='562060'>check</span> <span
  m='562420'>against</span> <span m='563070'>other</span> <span
  m='563480'>elements</span> <span m='563910'>of</span> <span
  m='564030'>the</span> <span m='564220'>array,</span> <span
  m='565040'>it's</span> <span m='565320'>unsorted.</span> <span
  m='566330'>You</span> <span m='566460'>have</span> <span m='566570'>no</span>
  <span m='566730'>idea</span> <span m='567140'>of</span> <span
  m='567260'>where</span> <span m='567400'>to</span> <span
  m='567480'>find</span> <span m='567850'>these</span> <span
  m='568030'>elements.</span> <span m='568840'>You have</span> <span
  m='568940'>to</span> <span m='569010'>scan</span> <span
  m='569470'>through</span> <span m='569700'>the</span> <span
  m='569820'>entire</span> <span m='570360'>array</span> <span
  m='571010'>to</span> <span m='571160'>check</span> <span m='571420'>to</span>
  <span m='571530'>see</span> <span m='571810'>whether</span> <span
  m='572470'>there's</span> <span m='572640'>a</span> <span
  m='572710'>landing</span> <span m='573150'>time</span> <span
  m='573680'>that's</span> <span m='573930'>within</span> <span
  m='574290'>k</span> <span m='575120'>of</span> <span m='575450'>the</span>
  <span m='575720'>current</span> <span m='576160'>time</span> <span
  m='576560'>t</span> <span m='577060'>that</span> <span
  m='577460'>you're</span> <span m='577750'>asking</span> <span
  m='578110'>for.</span> <span m='578920'>And</span> <span m='579150'>that's
  going to</span> <span m='579350'>take</span> <span m='579610'>order</span>
  <span m='579880'>n</span> <span m='580030'>time.</span> </p><p><span
  m='582490'>So</span> <span m='585590'>you</span> <span m='585720'>can</span>
  <span m='585840'>insert</span> <span m='589610'>in</span> <span
  m='590160'>order</span> <span m='590540'>1</span> <span
  m='591810'>without</span> <span m='592230'>a</span> <span
  m='592300'>check.</span> <span m='593740'>But</span> <span
  m='593940'>sadly,</span> <span m='595750'>the</span> <span
  m='595920'>check</span> <span m='597940'>takes</span> <span
  m='600120'>order</span> <span m='600480'>n</span> <span
  m='602180'>time.</span> <span m='603620'>All</span> <span
  m='603760'>right?</span> </p><p><span m='609680'>Let's</span> <span
  m='609940'>do</span> <span m='610100'>something</span> <span
  m='610440'>that</span> <span m='612110'>is</span> <span m='612430'>a</span>
  <span m='612480'>little</span> <span m='612630'>more</span> <span
  m='612810'>plausible.</span> <span m='615460'>Let's</span> <span
  m='615690'>talk</span> <span m='615960'>about</span> <span m='617590'>a</span>
  <span m='618030'>sorted</span> <span m='618550'>array.</span> <span
  m='618950'>So this is</span> <span m='619160'>a</span> <span
  m='619230'>little</span> <span m='619370'>more</span> <span
  m='619670'>subtle</span> <span m='621570'>question.</span> <span
  m='622720'>Let's</span> <span m='622880'>talk</span> <span
  m='623030'>about</span> <span m='623190'>a sorted</span> <span
  m='623660'>array.</span> <span m='625640'>What</span> <span
  m='625780'>happens</span> <span m='626010'>with</span> <span
  m='626110'>a</span> <span m='626170'>sorted</span> <span
  m='626420'>array?</span> <span m='628640'>Someone?</span> <span
  m='630226'>What can</span> <span m='630630'>you</span> <span
  m='630820'>do</span> <span m='631170'>with a</span> <span
  m='631430'>sorted</span> <span m='631500'>array?</span> <span
  m='633339'>Yeah.</span> </p><p><span m='633812'>AUDIENCE: Do a</span> <span
  m='634285'>binary search</span> <span m='634758'>to find</span> <span
  m='635231'>the</span> <span m='635467'>[INAUDIBLE].</span> </p><p><span
  m='637130'>PROFESSOR: Binary</span> <span m='637390'>search</span> <span
  m='638620'>would</span> <span m='638790'>find</span> <span m='639590'>a
  bad</span> <span m='639810'>insert.</span> <span m='640900'>OK,</span> <span
  m='641210'>good.</span> <span m='641700'>So</span> <span
  m='641810'>that's</span> <span m='642010'>good.</span> <span
  m='643950'>So</span> <span m='644140'>if</span> <span m='644240'>you</span>
  <span m='644300'>have</span> <span m='644410'>a</span> <span
  m='644460'>sorted</span> <span m='644820'>array,</span> <span
  m='645500'>and</span> <span m='646690'>just</span> <span m='646860'>for
  argument's</span> <span m='647090'>sake,</span> <span m='647530'>it</span>
  <span m='647630'>looks</span> <span m='647870'>like</span> <span
  m='648180'>4,</span> <span m='649200'>20,</span> <span m='650200'>32,</span>
  <span m='652200'>37,</span> <span m='653700'>45.</span> <span
  m='654740'>And</span> <span m='654910'>it's</span> <span
  m='655200'>increasing</span> <span m='655690'>order.</span> <span
  m='656640'>And</span> <span m='656830'>if</span> <span m='656920'>you</span>
  <span m='657010'>get</span> <span m='657240'>a</span> <span
  m='657340'>particular</span> <span m='657850'>time</span> <span
  m='658260'>t,</span> <span m='659250'>you</span> <span m='659420'>can</span>
  <span m='659530'>use</span> <span m='660280'>binary</span> <span
  m='660780'>search.</span> </p><p><span m='662180'>And</span> <span
  m='662550'>let's</span> <span m='662710'>say,</span> <span
  m='662910'>in</span> <span m='663320'>particular,</span> <span
  m='663720'>the</span> <span m='663830'>time</span> <span m='664150'>is,</span>
  <span m='665520'>for</span> <span m='665620'>example,</span> <span
  m='665990'>34.</span> <span m='667300'>Then</span> <span
  m='667800'>what</span> <span m='667960'>you</span> <span m='668040'>do</span>
  <span m='668290'>is</span> <span m='668840'>you</span> <span
  m='668950'>go</span> <span m='669090'>to</span> <span m='669160'>the</span>
  <span m='669240'>midpoint</span> <span m='669690'>of</span> <span
  m='669780'>the</span> <span m='669850'>array,</span> <span
  m='670110'>and</span> <span m='670380'>maybe</span> <span
  m='670550'>you</span> <span m='670640'>just</span> <span
  m='670820'>look</span> <span m='670950'>at</span> <span
  m='671020'>that.</span> <span m='671860'>And</span> <span
  m='672000'>you</span> <span m='672110'>say</span> <span m='673340'>oh,</span>
  <span m='673830'>34</span> <span m='674380'>is</span> <span
  m='676080'>greater</span> <span m='676460'>than</span> <span
  m='676650'>32.</span> <span m='677880'>So</span> <span m='678580'>I'm</span>
  <span m='678720'>going</span> <span m='678830'>to</span> <span
  m='678870'>go</span> <span m='679000'>check</span> <span m='682020'>and</span>
  <span m='682480'>figure</span> <span m='682700'>out</span> <span
  m='682870'>if</span> <span m='682990'>I</span> <span m='683050'>need</span>
  <span m='683260'>to</span> <span m='683340'>move</span> <span
  m='684300'>to</span> <span m='685440'>the</span> <span m='685540'>left</span>
  <span m='685790'>or</span> <span m='685880'>the</span> <span
  m='685950'>right.</span> <span m='686220'>And</span> <span
  m='686350'>since</span> <span m='686530'>it's</span> <span
  m='686670'>greater</span> <span m='687040'>I'm</span> <span
  m='687120'>going</span> <span m='687240'>to</span> <span
  m='687280'>move</span> <span m='687470'>to</span> <span m='687540'>the</span>
  <span m='687640'>right.</span> </p><p><span m='688450'>And</span> <span
  m='688980'>within</span> <span m='689150'>logarithmic</span> <span
  m='689810'>time,</span> <span m='691670'>you'll</span> <span
  m='691880'>find</span> <span m='692510'>what</span> <span m='692830'>we</span>
  <span m='692950'>call</span> <span m='693200'>the</span> <span
  m='693340'>insertion</span> <span m='693970'>point</span> <span
  m='695360'>of</span> <span m='695840'>the</span> <span
  m='696090'>sorted</span> <span m='696420'>array,</span> <span
  m='697206'>where</span> <span m='697560'>this</span> <span
  m='697990'>34</span> <span m='698470'>is</span> <span
  m='698540'>supposed</span> <span m='698870'>to</span> <span
  m='698940'>sit.</span> <span m='700540'>And</span> <span m='701210'>you</span>
  <span m='701350'>don't</span> <span m='702010'>necessarily</span> <span
  m='702910'>get</span> <span m='703160'>to</span> <span
  m='703260'>insert</span> <span m='703830'>there.</span> <span
  m='704600'>You</span> <span m='704720'>need</span> <span m='704910'>to</span>
  <span m='705010'>look,</span> <span m='705380'>once</span> <span
  m='705660'>you've</span> <span m='705770'>found</span> <span
  m='706110'>the</span> <span m='706180'>insertion</span> <span
  m='706660'>point,</span> <span m='707330'>to</span> <span
  m='707490'>your</span> <span m='707630'>left</span> <span
  m='708500'>and</span> <span m='708690'>to</span> <span m='708760'>your</span>
  <span m='708890'>right.</span> <span m='710440'>And</span> <span
  m='710970'>do</span> <span m='711110'>the</span> <span m='711250'>k
  minute</span> <span m='711650'>check.</span> </p><p><span m='713340'>So</span>
  <span m='714480'>finish</span> <span m='714800'>up</span> <span
  m='714910'>the</span> <span m='714990'>answer</span> <span
  m='716070'>to</span> <span m='716180'>the</span> <span
  m='716300'>question,</span> <span m='717260'>tell</span> <span
  m='717430'>me</span> <span m='718620'>how</span> <span m='718960'>long</span>
  <span m='720090'>it's</span> <span m='720320'>going</span> <span
  m='720440'>to</span> <span m='720500'>take</span> <span m='720760'>me</span>
  <span m='721000'>to</span> <span m='721500'>find</span> <span
  m='721860'>the</span> <span m='721920'>insertion</span> <span
  m='722370'>point,</span> <span m='723780'>how</span> <span
  m='723950'>long</span> <span m='724250'>it's</span> <span
  m='724380'>going</span> <span m='724490'>to</span> <span
  m='724540'>take</span> <span m='724720'>me</span> <span m='724840'>to</span>
  <span m='724880'>do</span> <span m='724970'>the</span> <span
  m='725120'>check,</span> <span m='726100'>and</span> <span
  m='726430'>how</span> <span m='726550'>long</span> <span
  m='726770'>it's</span> <span m='726890'>going</span> <span
  m='727010'>to</span> <span m='727060'>take</span> <span m='727250'>me</span>
  <span m='727380'>to</span> <span m='727460'>actually</span> <span
  m='727900'>do</span> <span m='728210'>the</span> <span
  m='728470'>insertion.</span> </p><p><span m='729802'>AUDIENCE: Log</span>
  <span m='730180'>n</span> <span m='730560'>in the</span> <span
  m='731032'>search--</span> </p><p><span m='732450'>PROFESSOR: Log n</span>
  <span m='732770'>for the search,</span> <span m='733460'>to</span> <span
  m='733630'>find</span> <span m='733920'>the</span> <span
  m='733960'>point.</span> </p><p><span m='734450'>AUDIENCE: Constant</span>
  <span m='734980'>for the</span> <span m='735448'>comparison?</span>
  </p><p><span m='736384'>PROFESSOR: Constant to</span> <span m='736852'>the
  comparison.</span> <span m='737320'>And then the</span> <span m='737788'>last
  step?</span> </p><p><span m='738256'>AUDIENCE: Do the</span> <span
  m='738724'>research</span> <span m='739192'>[INAUDIBLE].</span> </p><p><span
  m='740128'>PROFESSOR: Sorry,</span> <span m='741064'>little</span> <span
  m='741540'>louder.</span> <span m='743281'>Sorry.</span> </p><p><span
  m='743748'>AUDIENCE: The insertion</span> <span m='744215'>is constant.</span>
  </p><p><span m='745150'>PROFESSOR: Insertion</span> <span m='745290'>is</span>
  <span m='745700'>constant?</span> <span m='746466'>Is that</span> <span
  m='746850'>right?</span> <span m='747330'>Do you</span> <span
  m='747550'>people</span> <span m='747650'>agree</span> <span m='747860'>with
  him,</span> <span m='748020'>that</span> <span m='748270'>insertion</span>
  <span m='748605'>is</span> <span m='748940'>constant?</span> </p><p><span
  m='751324'>AUDIENCE: You've got a</span> <span m='751805'>maximum</span> <span
  m='752286'>size up</span> <span m='752767'>there, right?</span> <span
  m='753729'>There must</span> <span m='754210'>be a maximum.</span> <span
  m='755172'>[INAUDIBLE].</span> </p><p><span m='757100'>PROFESSOR: No,</span>
  <span m='757460'>the</span> <span m='757950'>indices--</span> <span
  m='759220'>so</span> <span m='759250'>right</span> <span m='759500'>now</span>
  <span m='759660'>the array</span> <span m='759900'>has</span> <span
  m='760410'>indices</span> <span m='761160'>i.</span> <span
  m='761680'>And</span> <span m='761940'>if</span> <span m='762120'>you</span>
  <span m='762240'>start</span> <span m='762540'>with</span> <span
  m='762770'>1,</span> <span m='763070'>it's</span> <span m='763260'>1,</span>
  <span m='763590'>2,</span> <span m='763990'>3,</span> <span
  m='764700'>4,</span> <span m='765180'>5,</span> <span m='766120'>et</span>
  <span m='766260'>cetera.</span> <span m='767830'>So</span> <span
  m='768030'>what</span> <span m='768550'>do</span> <span m='768590'>you</span>
  <span m='768650'>mean</span> <span m='768860'>by</span> <span
  m='769000'>insertion?</span> <span m='769910'>Someone</span> <span
  m='770180'>explain</span> <span m='770620'>to</span> <span
  m='770720'>me</span> <span m='771760'>what--</span> <span
  m='772450'>yeah,</span> <span m='772590'>go</span> <span
  m='772680'>ahead.</span> </p><p><span m='773700'>AUDIENCE: When you</span>
  <span m='773890'>put something</span> <span m='774200'>in you have to</span>
  <span m='774550'>shift</span> <span m='775040'>every</span> <span
  m='775507'>element</span> <span m='775974'>over.</span> </p><p><span
  m='776441'>PROFESSOR: That's exactly</span> <span m='776908'>right.</span>
  <span m='777375'>That's exactly</span> <span m='777842'>right.</span> <span
  m='778309'>Ok, good,</span> <span m='778780'>that's</span> <span
  m='779250'>great.</span> <span m='781310'>I</span> <span
  m='781390'>guess</span> <span m='781570'>I</span> <span
  m='781630'>should</span> <span m='781770'>give you</span> <span
  m='781950'>half</span> <span m='782210'>a</span> <span
  m='782260'>cushion.</span> <span m='782600'>But</span> <span m='783890'>I'll
  do</span> <span m='784290'>the</span> <span m='784370'>full one,</span> <span
  m='784760'>right?</span> <span m='785000'>And</span> <span
  m='785320'>you</span> <span m='785560'>get one,</span> <span
  m='785760'>too.</span> </p><p><span m='789010'>So</span> <span
  m='789260'>the</span> <span m='789410'>point</span> <span
  m='789690'>here</span> <span m='790110'>is</span> <span m='790380'>this
  is</span> <span m='790650'>pretty</span> <span m='790850'>close.</span> <span
  m='791420'>It's</span> <span m='791680'>almost</span> <span
  m='792220'>what</span> <span m='792360'>we</span> <span
  m='792480'>want.</span> <span m='793530'>It's</span> <span
  m='793690'>almost</span> <span m='794140'>what</span> <span
  m='794280'>we</span> <span m='794400'>want.</span> </p><p><span
  m='795610'>There's</span> <span m='795800'>a</span> <span
  m='795860'>little</span> <span m='796100'>bit</span> <span
  m='796240'>of</span> <span m='796330'>a</span> <span m='796390'>glitch</span>
  <span m='796720'>here.</span> <span m='798320'>We</span> <span
  m='798460'>know</span> <span m='798570'>about</span> <span
  m='798750'>binary</span> <span m='799040'>search.</span> <span
  m='800210'>The</span> <span m='800330'>binary</span> <span
  m='800670'>search</span> <span m='801110'>is</span> <span
  m='801280'>going</span> <span m='801550'>to</span> <span
  m='801760'>allow</span> <span m='802080'>us,</span> <span m='802360'>if</span>
  <span m='802570'>there's</span> <span m='802880'>n</span> <span
  m='803120'>elements</span> <span m='803520'>here,</span> <span
  m='804100'>to</span> <span m='804350'>find</span> <span m='804800'>the</span>
  <span m='804890'>place--</span> <span m='805950'>it's</span> <span
  m='806140'>going</span> <span m='806260'>to</span> <span m='806300'>be</span>
  <span m='806500'>able</span> <span m='806720'>to</span> <span
  m='808320'>find--</span> <span m='809680'>and</span> <span
  m='809840'>I'm</span> <span m='809920'>going</span> <span m='810060'>to</span>
  <span m='810140'>precise</span> <span m='810445'>here--</span> <span
  m='811390'>the</span> <span m='811520'>smallest</span> <span
  m='812380'>i</span> <span m='814280'>such</span> <span m='814720'>that</span>
  <span m='817920'>R</span> <span m='818290'>of i</span> <span
  m='819970'>is</span> <span m='820250'>greater</span> <span
  m='820590'>than</span> <span m='820750'>or</span> <span
  m='820880'>equal</span> <span m='821170'>to</span> <span m='821310'>t</span>
  <span m='822990'>in</span> <span m='823650'>order</span> <span
  m='824090'>log</span> <span m='824430'>n</span> <span m='824640'>time.</span>
  <span m='827520'>It's</span> <span m='827720'>going</span> <span
  m='827820'>to</span> <span m='827860'>be</span> <span m='827930'>able</span>
  <span m='828070'>to</span> <span m='828150'>do</span> <span
  m='828250'>that.</span> </p><p><span m='829970'>You're</span> <span
  m='830160'>going</span> <span m='830300'>to</span> <span m='830350'>be</span>
  <span m='830500'>able</span> <span m='830670'>to</span> <span
  m='830790'>compare</span> <span m='835680'>R of</span> <span
  m='836010'>i</span> <span m='838390'>and</span> <span m='839730'>R</span>
  <span m='840030'>of</span> <span m='840230'>i</span> <span
  m='840410'>minus</span> <span m='840780'>1--</span> <span m='841380'>so</span>
  <span m='841570'>the</span> <span m='841710'>left</span> <span
  m='842030'>and</span> <span m='842130'>the</span> <span
  m='842240'>right--</span> <span m='843170'>against</span> <span
  m='843780'>t</span> <span m='846530'>in</span> <span m='846790'>order</span>
  <span m='847060'>1</span> <span m='847290'>time.</span> <span
  m='850000'>But</span> <span m='852340'>sadly,</span> <span
  m='858090'>the</span> <span m='858350'>actual</span> <span
  m='858800'>insertion</span> <span m='863100'>is</span> <span
  m='863290'>going</span> <span m='863440'>to</span> <span
  m='863490'>require</span> <span m='863850'>shifting.</span> <span
  m='869800'>And</span> <span m='870890'>that</span> <span
  m='871100'>could</span> <span m='871250'>take</span> <span
  m='871440'>order</span> <span m='871700'>n</span> <span
  m='871850'>time,</span> <span m='873230'>because</span> <span
  m='873500'>it's</span> <span m='873640'>an</span> <span
  m='873760'>array.</span> </p><p><span m='878160'>So</span> <span
  m='878290'>that's</span> <span m='878500'>the</span> <span
  m='878550'>problem.</span> <span m='880470'>Now</span> <span
  m='880830'>you</span> <span m='881010'>could</span> <span
  m='881100'>imagine</span> <span m='882630'>that</span> <span
  m='883060'>you</span> <span m='883180'>had</span> <span m='883360'>a</span>
  <span m='883420'>sorted</span> <span m='885050'>list.</span> <span
  m='887240'>And</span> <span m='887410'>you</span> <span
  m='887500'>could</span> <span m='887610'>say,</span> <span
  m='887790'>hey</span> <span m='888470'>if</span> <span m='888610'>I</span>
  <span m='888660'>have</span> <span m='888750'>a</span> <span
  m='888810'>sorted</span> <span m='889300'>list,</span> <span
  m='890610'>then</span> <span m='891960'>the</span> <span
  m='892090'>list</span> <span m='892390'>looks</span> <span
  m='892600'>like</span> <span m='892860'>this,</span> <span
  m='897180'>and</span> <span m='897330'>it's</span> <span m='897430'>got</span>
  <span m='897570'>a</span> <span m='897610'>bunch</span> <span
  m='897820'>of</span> <span m='897920'>pointers</span> <span
  m='898440'>in</span> <span m='898530'>it.</span> <span m='899650'>And</span>
  <span m='902280'>if</span> <span m='902570'>I've</span> <span
  m='902760'>found</span> <span m='903190'>the</span> <span
  m='903280'>insertion</span> <span m='903950'>point,</span> <span
  m='905690'>then--</span> <span m='907250'>the</span> <span
  m='907320'>list</span> <span m='907610'>is</span> <span
  m='907720'>nice,</span> <span m='908120'>because</span> <span
  m='908940'>you</span> <span m='909140'>can</span> <span
  m='909530'>insert</span> <span m='909960'>something</span> <span
  m='913370'>by</span> <span m='913640'>moving</span> <span
  m='914000'>pointers</span> <span m='915370'>in</span> <span
  m='915580'>constant</span> <span m='916000'>time</span> <span
  m='916660'>once</span> <span m='916900'>you've</span> <span m='917010'>found
  the</span> <span m='917470'>insertion</span> <span m='917970'>point.</span>
  <span m='918840'>But</span> <span m='918960'>what's</span> <span
  m='919150'>the</span> <span m='919220'>problem</span> <span
  m='919550'>with</span> <span m='919680'>the</span> <span
  m='919720'>list?</span> <span m='921870'>Yeah.</span> </p><p><span
  m='922120'>AUDIENCE: You can't do</span> <span m='922612'>binary</span> <span
  m='923104'>search</span> <span m='923350'>[INAUDIBLE].</span> </p><p><span
  m='924580'>PROFESSOR: Well</span> <span m='924710'>you</span> <span
  m='924820'>can't</span> <span m='924970'>do</span> <span
  m='925040'>binary</span> <span m='925180'>search</span> <span m='925570'>on a
  list.</span> <span m='926930'>There's</span> <span m='927110'>no</span> <span
  m='927230'>notion</span> <span m='927570'>of</span> <span
  m='927660'>going</span> <span m='927890'>to</span> <span m='927970'>the</span>
  <span m='928180'>n</span> <span m='928410'>by</span> <span m='928590'>2</span>
  <span m='928910'>index</span> <span m='930800'>and</span> <span
  m='931060'>doing</span> <span m='931290'>random</span> <span
  m='931660'>access</span> <span m='932680'>on</span> <span m='933450'>a</span>
  <span m='933630'>conventional</span> <span m='934170'>list,</span> <span
  m='935070'>right?</span> </p><p><span m='936480'>So</span> <span
  m='936980'>the</span> <span m='937090'>list</span> <span
  m='937960'>does</span> <span m='938700'>one</span> <span
  m='938980'>thing</span> <span m='939170'>right,</span> <span
  m='939610'>but</span> <span m='939750'>doesn't do</span> <span m='939970'>the
  other</span> <span m='940240'>thing</span> <span m='940510'>right.</span>
  <span m='941440'>The</span> <span m='941650'>array</span> <span
  m='942050'>does</span> <span m='942690'>a</span> <span
  m='942760'>couple</span> <span m='943020'>things</span> <span
  m='943250'>right,</span> <span m='943600'>but</span> <span
  m='943730'>doesn't</span> <span m='943990'>do</span> <span
  m='944080'>the</span> <span m='944180'>shifting</span> <span
  m='944570'>right.</span> <span m='945440'>And</span> <span
  m='945850'>so</span> <span m='945940'>you</span> <span m='946070'>see</span>
  <span m='946240'>why</span> <span m='946530'>we've</span> <span
  m='946770'>constructed</span> <span m='947330'>this</span> <span
  m='947690'>toy</span> <span m='947880'>problem.</span> <span
  m='949430'>It's</span> <span m='949580'>to</span> <span
  m='949670'>motivate</span> <span m='951500'>the</span> <span
  m='951690'>binary</span> <span m='952050'>search</span> <span
  m='952310'>tree</span> <span m='952470'>data</span> <span
  m='952670'>structure,</span> <span m='953060'>obviously.</span> <span
  m='953850'>But</span> <span m='954880'>you're</span> <span
  m='955390'>close,</span> <span m='955830'>but</span> <span
  m='955930'>not</span> <span m='956110'>quite</span> <span
  m='956350'>there.</span> </p><p><span m='959040'>What about</span> <span
  m='959370'>heaps?</span> <span m='963190'>We</span> <span
  m='963310'>talked</span> <span m='963500'>about</span> <span
  m='963670'>heaps</span> <span m='963920'>last</span> <span
  m='964140'>time.</span> <span m='966510'>What's</span> <span
  m='966690'>the</span> <span m='966770'>basic</span> <span
  m='967060'>problem</span> <span m='967370'>with</span> <span
  m='967420'>the</span> <span m='967510'>heap</span> <span m='969560'>for</span>
  <span m='969780'>this</span> <span m='969990'>problem?</span> <span
  m='972350'>The</span> <span m='972430'>heaps</span> <span
  m='972670'>are</span> <span m='973460'>data</span> <span
  m='973580'>arrays,</span> <span m='974330'>but</span> <span
  m='974420'>you</span> <span m='974510'>can</span> <span
  m='974620'>visualize</span> <span m='975040'>them</span> <span
  m='975190'>as</span> <span m='975350'>trees.</span> <span
  m='975970'>And</span> <span m='976170'>obviously</span> <span m='976450'>if
  we're talking</span> <span m='976780'>about</span> <span m='976960'>min</span>
  <span m='977170'>heaps</span> <span m='977510'>and</span> <span
  m='977640'>max</span> <span m='978025'>heaps.</span> </p><p><span
  m='979070'>So</span> <span m='979220'>in</span> <span
  m='979370'>particular,</span> <span m='979850'>what</span> <span
  m='980150'>goes</span> <span m='980370'>wrong</span> <span
  m='981410'>with</span> <span m='981895'>a</span> <span m='982380'>min</span>
  <span m='982690'>heap</span> <span m='982990'>or</span> <span
  m='983110'>a</span> <span m='983150'>max</span> <span m='983430'>heap</span>
  <span m='985500'>for</span> <span m='985880'>this</span> <span
  m='986070'>problem?</span> <span m='986940'>What</span> <span
  m='987250'>takes</span> <span m='987540'>a</span> <span m='987600'>long</span>
  <span m='987850'>time?</span> <span m='988750'>Yeah.</span> </p><p><span
  m='991660'>AUDIENCE: You have</span> <span m='992136'>to scan every</span>
  <span m='992612'>element,</span> <span m='995468'>which</span> <span
  m='995944'>[INAUDIBLE].</span> </p><p><span m='996896'>PROFESSOR: That's
  right.</span> <span m='997372'>I mean,</span> <span m='997848'>sadly,</span>
  <span m='998330'>you</span> <span m='998610'>know</span> <span m='998740'>when
  we talk about</span> <span m='999220'>min</span> <span m='999480'>heaps</span>
  <span m='999790'>or</span> <span m='999880'>max</span> <span
  m='999990'>heaps,</span> <span m='1003040'>they</span> <span
  m='1003350'>actually</span> <span m='1003660'>have</span> <span
  m='1003840'>a</span> <span m='1003900'>fairly</span> <span
  m='1004510'>weak</span> <span m='1004900'>invariant.</span> <span
  m='1006460'>It</span> <span m='1006580'>turns</span> <span
  m='1006860'>out</span> <span m='1007090'>that--</span> <span
  m='1007410'>I'm</span> <span m='1007790'>previewing</span> <span
  m='1008200'>a</span> <span m='1008250'>bit</span> <span
  m='1008410'>here--</span> <span m='1009510'>binary</span> <span
  m='1009840'>search</span> <span m='1010230'>trees</span> <span
  m='1010330'>are</span> <span m='1010390'>obviously</span> <span
  m='1011040'>similar</span> <span m='1011440'>to</span> <span
  m='1011500'>heaps</span> <span m='1011880'>in</span> <span
  m='1011960'>the</span> <span m='1012040'>sense</span> <span
  m='1012260'>that</span> <span m='1013030'>you</span> <span
  m='1013450'>visualize</span> <span m='1013920'>an</span> <span
  m='1014030'>array</span> <span m='1014280'>as</span> <span
  m='1014430'>a</span> <span m='1014730'>tree,</span> <span
  m='1015210'>in</span> <span m='1015380'>the</span> <span
  m='1015460'>case</span> <span m='1015650'>of</span> <span m='1015740'>a</span>
  <span m='1015780'>heap.</span> <span m='1016280'>And</span> <span
  m='1016420'>binary</span> <span m='1016700'>search</span> <span
  m='1016980'>trees</span> <span m='1017200'>are</span> <span
  m='1017310'>trees.</span> </p><p><span m='1018360'>But</span> <span
  m='1018680'>the</span> <span m='1018870'>invariant</span> <span
  m='1019140'>in</span> <span m='1020590'>a</span> <span m='1020700'>min</span>
  <span m='1020950'>heap</span> <span m='1021160'>or</span> <span
  m='1021280'>a</span> <span m='1021330'>max</span> <span
  m='1021600'>heap,</span> <span m='1022170'>is</span> <span
  m='1022350'>this</span> <span m='1022530'>kind</span> <span
  m='1022660'>of</span> <span m='1022740'>a</span> <span m='1022810'>week</span>
  <span m='1023150'>invariant.</span> <span m='1024069'>It</span> <span
  m='1024710'>essentially</span> <span m='1025190'>says,</span> <span
  m='1028270'>look</span> <span m='1028670'>at</span> <span
  m='1031389'>the</span> <span m='1031710'>min</span> <span
  m='1031990'>element.</span> <span m='1032740'>And</span> <span
  m='1033410'>the</span> <span m='1034310'>min</span> <span
  m='1034480'>element</span> <span m='1034770'>has</span> <span
  m='1034950'>to</span> <span m='1035020'>be</span> <span m='1035140'>the</span>
  <span m='1035240'>root,</span> <span m='1035670'>so</span> <span
  m='1035849'>you</span> <span m='1035960'>can</span> <span
  m='1036069'>do</span> <span m='1036180'>that</span> <span
  m='1036349'>one</span> <span m='1036540'>operation</span> <span
  m='1037030'>pretty</span> <span m='1037220'>quickly.</span> <span
  m='1038190'>But</span> <span m='1038420'>if</span> <span
  m='1038560'>you</span> <span m='1038680'>want</span> <span
  m='1040170'>to</span> <span m='1040319'>look</span> <span
  m='1040569'>for</span> <span m='1040750'>a</span> <span m='1040839'>k
  minute</span> <span m='1041349'>check,</span> <span m='1041770'>you</span>
  <span m='1041890'>want</span> <span m='1042010'>to</span> <span
  m='1042050'>see</span> <span m='1042400'>if</span> <span
  m='1043210'>there's</span> <span m='1044160'>an</span> <span
  m='1044329'>element</span> <span m='1044710'>in</span> <span
  m='1044819'>the</span> <span m='1044920'>heap</span> <span
  m='1050460'>that</span> <span m='1050760'>is</span> <span
  m='1051740'>less</span> <span m='1052010'>than</span> <span
  m='1052160'>or</span> <span m='1052260'>equal</span> <span
  m='1052550'>to</span> <span m='1052680'>k,</span> <span m='1053750'>or</span>
  <span m='1053980'>greater</span> <span m='1054230'>than</span> <span
  m='1054420'>or</span> <span m='1054510'>equal</span> <span m='1054760'>to
  k</span> <span m='1056820'>from</span> <span m='1057200'>t,</span> <span
  m='1058580'>this</span> <span m='1058760'>is</span> <span
  m='1058880'>going</span> <span m='1059020'>to</span> <span
  m='1059090'>take</span> <span m='1059270'>order</span> <span
  m='1059490'>n</span> <span m='1059650'>time.</span> <span
  m='1061520'>OK?</span> <span m='1063290'>Good.</span> </p><p><span
  m='1066390'>And</span> <span m='1066790'>finally,</span> <span
  m='1067570'>we</span> <span m='1067660'>haven't</span> <span
  m='1067860'>talked</span> <span m='1068050'>about</span> <span
  m='1068250'>dictionaries,</span> <span m='1069250'>but</span> <span
  m='1069390'>we</span> <span m='1069540'>will</span> <span
  m='1070740'>next</span> <span m='1071000'>week.</span> <span
  m='1072040'>Eric</span> <span m='1072280'>will</span> <span
  m='1072400'>talk</span> <span m='1072580'>about</span> <span
  m='1072840'>hash</span> <span m='1073120'>tables</span> <span
  m='1073490'>and</span> <span m='1073620'>dictionaries.</span> <span
  m='1074530'>And</span> <span m='1074690'>they</span> <span
  m='1074760'>have</span> <span m='1074920'>the</span> <span
  m='1074990'>same</span> <span m='1075200'>problem.</span> <span
  m='1076800'>So</span> <span m='1077190'>it's</span> <span
  m='1077350'>not</span> <span m='1077560'>like</span> <span
  m='1077970'>dictionaries</span> <span m='1078640'>are</span> <span
  m='1078710'>going</span> <span m='1078820'>to</span> <span
  m='1078860'>solve</span> <span m='1079170'>the</span> <span
  m='1079250'>problem,</span> <span m='1079690'>for</span> <span
  m='1079850'>those</span> <span m='1080050'>of you</span> <span
  m='1080160'>who</span> <span m='1080570'>know</span> <span
  m='1080770'>about</span> <span m='1080960'>hash</span> <span
  m='1081190'>tables</span> <span m='1081530'>and</span> <span
  m='1081650'>dictionaries.</span> <span m='1082590'>But</span> <span
  m='1082730'>you'll</span> <span m='1082850'>hear</span> <span
  m='1083050'>about</span> <span m='1083250'>them</span> <span
  m='1083390'>in</span> <span m='1083470'>some</span> <span
  m='1083660'>detail.</span> <span m='1084040'>They're</span> <span
  m='1084360'>very</span> <span m='1084540'>good</span> <span
  m='1084700'>at</span> <span m='1084870'>other</span> <span
  m='1085090'>things.</span> </p><p><span m='1086380'>So</span> <span
  m='1087110'>I</span> <span m='1087220'>don't</span> <span
  m='1087300'>want</span> <span m='1087380'>to</span> <span
  m='1087420'>say</span> <span m='1087530'>much</span> <span
  m='1087730'>more</span> <span m='1087910'>about</span> <span
  m='1088100'>that,</span> <span m='1088340'>because</span> <span
  m='1090140'>you're</span> <span m='1090160'>not</span> <span
  m='1090360'>supposed</span> <span m='1090670'>to</span> <span
  m='1090750'>know</span> <span m='1090900'>about</span> <span
  m='1091110'>dictionaries.</span> <span m='1092340'>Or at</span> <span
  m='1092460'>least</span> <span m='1092670'>we</span> <span
  m='1092760'>don't</span> <span m='1092880'>want</span> <span m='1092990'>to
  assume</span> <span m='1093310'>you</span> <span m='1093430'>do,</span> <span
  m='1094430'>though we</span> <span m='1094810'>have</span> <span
  m='1095510'>talked</span> <span m='1095790'>about</span> <span
  m='1095990'>them</span> <span m='1096130'>and</span> <span
  m='1096370'>alluded</span> <span m='1097180'>to</span> <span
  m='1097270'>dictionaries</span> <span m='1097820'>earlier.</span> </p><p><span
  m='1099190'>And</span> <span m='1099310'>so</span> <span
  m='1099410'>that's</span> <span m='1099630'>a</span> <span
  m='1099690'>story</span> <span m='1100000'>here.</span> <span
  m='1101570'>Yeah,</span> <span m='1101810'>back</span> <span
  m='1102040'>there,</span> <span m='1102100'>question.</span> </p><p><span
  m='1102530'>AUDIENCE: Yeah,</span> <span m='1103016'>can you explain</span>
  <span m='1103502'>why it's</span> <span m='1103988'>[INAUDIBLE]</span> <span
  m='1104474'>time?</span> </p><p><span m='1105450'>PROFESSOR: So</span> <span
  m='1106040'>what</span> <span m='1106170'>is</span> <span m='1106300'>a</span>
  <span m='1106400'>heap,</span> <span m='1106590'>right?</span> <span
  m='1107530'>A</span> <span m='1107850'>heap</span> <span
  m='1108140'>essentially--</span> <span m='1108660'>a</span> <span
  m='1108960'>min</span> <span m='1109330'>heap,</span> <span
  m='1109630'>for</span> <span m='1109750'>example,</span> <span
  m='1110220'>or</span> <span m='1110340'>we</span> <span
  m='1110460'>talked</span> <span m='1110630'>about</span> <span m='1110820'>max
  heaps</span> <span m='1111320'>last</span> <span m='1111590'>time,</span>
  <span m='1114280'>has</span> <span m='1114490'>the</span> <span
  m='1114590'>property</span> <span m='1115750'>that</span> <span
  m='1117020'>you</span> <span m='1117150'>have</span> <span
  m='1117320'>an</span> <span m='1117410'>element</span> <span
  m='1118480'>k,</span> <span m='1119440'>and</span> <span
  m='1120110'>you're</span> <span m='1120340'>going</span> <span
  m='1120640'>to</span> <span m='1121790'>look</span> <span
  m='1122120'>at,</span> <span m='1124720'>let's</span> <span
  m='1124930'>say</span> <span m='1125030'>it's</span> <span
  m='1125180'>21.</span> <span m='1127420'>Let's</span> <span
  m='1127620'>do</span> <span m='1127750'>min</span> <span
  m='1127970'>heaps,</span> <span m='1128900'>so</span> <span
  m='1129200'>this</span> <span m='1129420'>has</span> <span
  m='1129680'>to</span> <span m='1129780'>be</span> <span
  m='1129920'>less</span> <span m='1130310'>than</span> <span
  m='1131700'>what's</span> <span m='1132050'>here,</span> <span
  m='1133140'>23,</span> <span m='1134150'>and</span> <span
  m='1134330'>what</span> <span m='1134580'>there,</span> <span
  m='1135150'>maybe it's</span> <span m='1135440'>30,</span> <span
  m='1136470'>and</span> <span m='1136730'>so</span> <span m='1136840'>on</span>
  <span m='1136990'>and</span> <span m='1137080'>so</span> <span
  m='1137240'>forth.</span> <span m='1138010'>And</span> <span
  m='1138110'>you</span> <span m='1138210'>have</span> <span
  m='1138230'>a</span> <span m='1138260'>recursive</span> <span
  m='1138710'>definition.</span> </p><p><span m='1144220'>And</span> <span
  m='1144420'>when</span> <span m='1144540'>you</span> <span
  m='1144640'>insert</span> <span m='1145430'>into</span> <span m='1145550'>a
  min</span> <span m='1145890'>heap,</span> <span m='1146580'>typically</span>
  <span m='1146940'>what</span> <span m='1147080'>happens</span> <span
  m='1147490'>is</span> <span m='1147990'>suppose</span> <span
  m='1148250'>you</span> <span m='1148330'>wanted</span> <span
  m='1148550'>to</span> <span m='1148610'>insert,</span> <span
  m='1150770'>for</span> <span m='1150880'>argument's</span> <span
  m='1151330'>sake,</span> <span m='1151590'>I</span> <span m='1151630'>want
  to</span> <span m='1151980'>insert</span> <span m='1153550'>25.</span> <span
  m='1156280'>I</span> <span m='1156630'>want</span> <span m='1156810'>to</span>
  <span m='1156850'>insert</span> <span m='1157200'>25</span> <span
  m='1157585'>into</span> <span m='1157970'>this.</span> <span
  m='1159170'>The</span> <span m='1159740'>insertion</span> <span
  m='1160270'>algorithm</span> <span m='1161760'>for a min</span> <span
  m='1162130'>heap</span> <span m='1163010'>typically</span> <span
  m='1163600'>adds</span> <span m='1164090'>to</span> <span
  m='1164200'>the</span> <span m='1164340'>end</span> <span
  m='1164810'>of</span> <span m='1165050'>the</span> <span
  m='1165150'>min</span> <span m='1165350'>heap.</span> <span
  m='1165780'>So</span> <span m='1166070'>what</span> <span
  m='1166250'>you</span> <span m='1166350'>do</span> <span m='1166560'>is</span>
  <span m='1166680'>you</span> <span m='1166820'>would</span> <span
  m='1166930'>add</span> <span m='1167990'>25</span> <span m='1168670'>to</span>
  <span m='1168760'>this.</span> <span m='1169280'>And</span> <span
  m='1169460'>let's</span> <span m='1169630'>say</span> <span
  m='1169740'>that</span> <span m='1169860'>you</span> <span
  m='1169950'>had</span> <span m='1170130'>something</span> <span
  m='1170400'>out</span> <span m='1170530'>here.</span> </p><p><span
  m='1173500'>So</span> <span m='1173950'>you'd</span> <span
  m='1174070'>add</span> <span m='1174380'>to</span> <span
  m='1174500'>it.</span> <span m='1174630'>And</span> <span
  m='1175350'>you'd</span> <span m='1175460'>start</span> <span
  m='1176250'>flipping</span> <span m='1176730'>things.</span> <span
  m='1178370'>And</span> <span m='1178740'>you</span> <span
  m='1178890'>could</span> <span m='1179020'>work</span> <span
  m='1179330'>with</span> <span m='1179690'>just</span> <span
  m='1179970'>this</span> <span m='1180200'>part</span> <span
  m='1180470'>of</span> <span m='1180550'>the</span> <span
  m='1180740'>array</span> <span m='1183080'>to</span> <span
  m='1183470'>insert</span> <span m='1183830'>25</span> <span
  m='1184440'>in</span> <span m='1184550'>here.</span> </p><p><span
  m='1185140'>And</span> <span m='1185280'>you'd</span> <span
  m='1185420'>be</span> <span m='1185600'>able</span> <span
  m='1185770'>to</span> <span m='1185850'>satisfy</span> <span
  m='1186430'>the</span> <span m='1186550'>invariant</span> <span
  m='1187130'>of</span> <span m='1187230'>the</span> <span
  m='1187320'>min</span> <span m='1187530'>heap.</span> <span
  m='1188660'>And</span> <span m='1188890'>you'd</span> <span
  m='1189040'>get</span> <span m='1190000'>a</span> <span
  m='1190360'>legitimate</span> <span m='1190770'>min</span> <span
  m='1191100'>heap.</span> <span m='1191750'>But</span> <span
  m='1191900'>you'd</span> <span m='1192000'>never</span> <span
  m='1192510'>check</span> <span m='1192790'>the</span> <span
  m='1192870'>left</span> <span m='1193140'>part</span> <span
  m='1193340'>of</span> <span m='1193460'>it,</span> <span
  m='1193560'>which</span> <span m='1193700'>is</span> <span
  m='1193800'>23.</span> </p><p><span m='1196110'>So</span> <span
  m='1196380'>it's</span> <span m='1196740'>quite</span> <span
  m='1197010'>possible--</span> <span m='1197940'>and</span> <span
  m='1198210'>this</span> <span m='1198340'>is</span> <span m='1198460'>a</span>
  <span m='1198510'>good</span> <span m='1198630'>example--</span> <span
  m='1200360'>that</span> <span m='1201170'>your</span> <span
  m='1201870'>basic</span> <span m='1202540'>insertion</span> <span
  m='1203040'>algorithm,</span> <span m='1203670'>which</span> <span
  m='1203780'>is</span> <span m='1203890'>essentially</span> <span
  m='1204420'>a</span> <span m='1204460'>version</span> <span
  m='1204850'>of</span> <span m='1204950'>max</span> <span m='1205360'>heap
  of</span> <span m='1205490'>i,</span> <span m='1206070'>or</span> <span
  m='1206190'>min</span> <span m='1206380'>heap</span> <span
  m='1206510'>of</span> <span m='1206640'>i,</span> <span
  m='1207640'>would</span> <span m='1208160'>simply</span> <span
  m='1208620'>insert at</span> <span m='1209030'>the</span> <span
  m='1209090'>end,</span> <span m='1209480'>and</span> <span
  m='1209620'>keep</span> <span m='1209840'>flipping</span> <span
  m='1210210'>until</span> <span m='1210390'>you</span> <span
  m='1210530'>get</span> <span m='1210740'>the</span> <span
  m='1210820'>min</span> <span m='1210960'>heap</span> <span
  m='1211140'>property,</span> <span m='1212000'>would</span> <span
  m='1212920'>be</span> <span m='1213050'>unable</span> <span
  m='1213480'>to</span> <span m='1213580'>check</span> <span
  m='1213830'>for</span> <span m='1213910'>the</span> <span m='1214030'>k
  minute</span> <span m='1214410'>check</span> <span m='1215110'>during</span>
  <span m='1215450'>the</span> <span m='1215560'>insertion.</span> <span
  m='1216430'>But</span> <span m='1216540'>what</span> <span
  m='1216700'>you'd</span> <span m='1216790'>have</span> <span
  m='1216980'>to</span> <span m='1217080'>do</span> <span m='1217230'>is</span>
  <span m='1217340'>to</span> <span m='1217440'>go</span> <span
  m='1217620'>look</span> <span m='1217900'>elsewhere.</span> <span
  m='1218860'>That</span> <span m='1219330'>min</span> <span
  m='1219590'>heap</span> <span m='1219760'>of</span> <span m='1219900'>i</span>
  <span m='1220000'>we'd</span> <span m='1220130'>never</span> <span
  m='1220330'>look</span> <span m='1220530'>at--</span> <span
  m='1220870'>or</span> <span m='1221010'>the</span> <span
  m='1221210'>insert</span> <span m='1221470'>algorithm</span> <span
  m='1221820'>we'd</span> <span m='1221920'>never</span> <span
  m='1222110'>look</span> <span m='1222300'>at--</span> <span
  m='1222820'>and</span> <span m='1222970'>that would</span> <span
  m='1223100'>require</span> <span m='1223550'>order</span> <span
  m='1223760'>n</span> <span m='1223910'>time.</span> <span m='1224900'>All
  right?</span> </p><p><span m='1225460'>AUDIENCE: Thank you.</span>
  </p><p><span m='1228890'>PROFESSOR: So</span> <span m='1229180'>that's</span>
  <span m='1229480'>the</span> <span m='1229570'>story</span> <span
  m='1229890'>for</span> <span m='1230700'>the</span> <span
  m='1230840'>min</span> <span m='1231010'>heap.</span> <span
  m='1231500'>Thanks</span> <span m='1231680'>for</span> <span
  m='1231770'>the</span> <span m='1231850'>question.</span> <span
  m='1232730'>And</span> <span m='1232990'>it's</span> <span
  m='1233120'>similar</span> <span m='1233420'>for</span> <span
  m='1233540'>dictionaries,</span> <span m='1234040'>as</span> <span
  m='1234170'>I</span> <span m='1234250'>said.</span> <span
  m='1235360'>And</span> <span m='1235570'>so</span> <span
  m='1235940'>we're</span> <span m='1236250'>stuck.</span> <span
  m='1237150'>We</span> <span m='1237480'>have</span> <span
  m='1238090'>no</span> <span m='1238700'>data</span> <span
  m='1238960'>structure</span> <span m='1239480'>yet</span> <span
  m='1240730'>that</span> <span m='1241290'>can</span> <span
  m='1241510'>do</span> <span m='1242290'>all</span> <span m='1242510'>of</span>
  <span m='1242600'>the</span> <span m='1242700'>things</span> <span
  m='1242960'>that</span> <span m='1243080'>I</span> <span
  m='1243140'>put</span> <span m='1243340'>up</span> <span m='1244140'>on</span>
  <span m='1244350'>the</span> <span m='1244440'>board</span> <span
  m='1244990'>to</span> <span m='1245070'>the</span> <span
  m='1245170'>left,</span> <span m='1246310'>in</span> <span
  m='1246590'>order</span> <span m='1246840'>log</span> <span
  m='1247070'>n</span> <span m='1247220'>time.</span> </p><p><span
  m='1248910'>And</span> <span m='1249260'>as</span> <span
  m='1249410'>you</span> <span m='1249500'>can</span> <span
  m='1249600'>see,</span> <span m='1249890'>the</span> <span
  m='1250110'>sorted</span> <span m='1250480'>array</span> <span
  m='1251090'>got</span> <span m='1251370'>pretty</span> <span
  m='1251600'>close.</span> <span m='1252770'>And</span> <span
  m='1253030'>so</span> <span m='1253710'>if</span> <span m='1253830'>you</span>
  <span m='1253950'>could</span> <span m='1254100'>just</span> <span
  m='1255350'>solve</span> <span m='1255890'>this</span> <span
  m='1256090'>problem,</span> <span m='1258350'>if</span> <span
  m='1258520'>you</span> <span m='1258650'>could</span> <span
  m='1258820'>do</span> <span m='1259310'>fast</span> <span
  m='1261220'>insertion--</span> <span m='1262640'>and</span> <span
  m='1262770'>by</span> <span m='1262890'>fast</span> <span m='1263270'>I</span>
  <span m='1263300'>mean</span> <span m='1263510'>order</span> <span
  m='1263690'>log</span> <span m='1263930'>n</span> <span
  m='1264100'>time--</span> <span m='1265850'>into</span> <span
  m='1267580'>a</span> <span m='1267740'>sorted</span> <span
  m='1270510'>array,</span> <span m='1272400'>we'd</span> <span
  m='1272600'>be</span> <span m='1272700'>in</span> <span
  m='1272790'>business.</span> <span m='1274480'>So</span> <span
  m='1274560'>that's</span> <span m='1274920'>what</span> <span
  m='1275080'>we'd</span> <span m='1275200'>like</span> <span
  m='1275340'>to</span> <span m='1275430'>do</span> <span
  m='1275570'>with</span> <span m='1275710'>binary</span> <span
  m='1275910'>search</span> <span m='1276295'>trees.</span> </p><p><span
  m='1278200'>Binary</span> <span m='1278400'>search</span> <span
  m='1278735'>trees</span> <span m='1279070'>are,</span> <span
  m='1279500'>as</span> <span m='1279630'>you</span> <span
  m='1279710'>can</span> <span m='1279790'>imagine,</span> <span
  m='1280340'>enable</span> <span m='1280690'>binary</span> <span
  m='1281030'>search.</span> <span m='1282080'>But</span> <span
  m='1284330'>the</span> <span m='1284420'>sorted</span> <span
  m='1284860'>arrays</span> <span m='1285160'>don't</span> <span
  m='1285350'>allow</span> <span m='1286070'>fast</span> <span
  m='1286450'>insertion,</span> <span m='1287320'>but</span> <span
  m='1287550'>BSTs</span> <span m='1288090'>do.</span> <span
  m='1291080'>So</span> <span m='1291230'>let</span> <span m='1291320'>me</span>
  <span m='1291410'>introduce</span> <span m='1291830'>BSTs.</span> </p><p><span
  m='1298500'>As</span> <span m='1298760'>with</span> <span
  m='1298910'>any</span> <span m='1299060'>data</span> <span
  m='1299280'>structure,</span> <span m='1299960'>there's</span> <span
  m='1300130'>a</span> <span m='1300170'>nice</span> <span
  m='1300470'>invariant</span> <span m='1301010'>associated</span> <span
  m='1301450'>with</span> <span m='1301580'>BSTs.</span> <span
  m='1303820'>The</span> <span m='1303970'>invariant</span> <span
  m='1304440'>is</span> <span m='1304500'>stronger</span> <span
  m='1305010'>than</span> <span m='1305170'>the</span> <span
  m='1306660'>heap</span> <span m='1306880'>invariant.</span> <span
  m='1309080'>And</span> <span m='1310200'>actually,</span> <span
  m='1310420'>that</span> <span m='1310590'>makes</span> <span
  m='1310780'>them</span> <span m='1310940'>a</span> <span
  m='1311280'>different</span> <span m='1311590'>data</span> <span
  m='1311770'>structure,</span> <span m='1312390'>not</span> <span
  m='1312570'>necessarily</span> <span m='1313000'>a</span> <span
  m='1313050'>better</span> <span m='1313360'>data</span> <span
  m='1313570'>structure.</span> <span m='1314520'>And</span> <span
  m='1314650'>I'll</span> <span m='1314760'>say</span> <span
  m='1314920'>why,</span> <span m='1316340'>but</span> <span
  m='1316600'>different.</span> <span m='1318170'>For</span> <span
  m='1318260'>this</span> <span m='1318450'>problem</span> <span
  m='1318780'>they're</span> <span m='1318870'>better.</span> </p><p><span
  m='1322130'>So</span> <span m='1322320'>one</span> <span
  m='1322480'>example</span> <span m='1322850'>of</span> <span
  m='1322930'>a</span> <span m='1322990'>binary</span> <span
  m='1323290'>search</span> <span m='1323570'>tree</span> <span
  m='1323740'>looks</span> <span m='1323940'>like</span> <span
  m='1324170'>this.</span> <span m='1334000'>And</span> <span
  m='1334300'>as</span> <span m='1334400'>a</span> <span
  m='1334450'>binary</span> <span m='1334810'>tree</span> <span
  m='1335690'>you</span> <span m='1335820'>have</span> <span
  m='1336240'>a</span> <span m='1336300'>node,</span> <span
  m='1337740'>and</span> <span m='1337810'>we</span> <span
  m='1337890'>call</span> <span m='1338160'>it</span> <span
  m='1338320'>x.</span> <span m='1339600'>Each of</span> <span
  m='1339720'>the</span> <span m='1339800'>nodes</span> <span
  m='1340150'>has</span> <span m='1340380'>a</span> <span m='1341635'>key</span>
  <span m='1342030'>of</span> <span m='1342150'>x.</span> <span
  m='1342880'>So</span> <span m='1343030'>30</span> <span m='1343400'>is</span>
  <span m='1343500'>the</span> <span m='1343610'>key</span> <span
  m='1343860'>for</span> <span m='1343980'>this</span> <span
  m='1344230'>node,</span> <span m='1344550'>17</span> <span
  m='1345060'>for</span> <span m='1345170'>that</span> <span
  m='1345370'>one,</span> <span m='1345660'>et</span> <span
  m='1345760'>cetera.</span> </p><p><span m='1347290'>Unlike</span> <span
  m='1347740'>in a</span> <span m='1347820'>heap,</span> <span
  m='1348645'>your</span> <span m='1349080'>data</span> <span
  m='1349270'>structure</span> <span m='1349575'>is</span> <span
  m='1349880'>a</span> <span m='1349920'>little</span> <span
  m='1350130'>more</span> <span m='1350280'>complicated.</span> <span
  m='1351690'>The</span> <span m='1351760'>heap</span> <span
  m='1352630'>is</span> <span m='1352760'>simply</span> <span
  m='1353050'>an</span> <span m='1353130'>array,</span> <span
  m='1353630'>and</span> <span m='1353770'>you</span> <span
  m='1353870'>happen</span> <span m='1354180'>to</span> <span
  m='1354250'>visualize</span> <span m='1354890'>it</span> <span
  m='1355100'>as</span> <span m='1355380'>a</span> <span
  m='1355470'>tree.</span> <span m='1356640'>The</span> <span
  m='1356750'>binary</span> <span m='1357030'>search</span> <span
  m='1357290'>tree</span> <span m='1357430'>is</span> <span
  m='1357530'>actually</span> <span m='1357940'>a</span> <span
  m='1358010'>tree</span> <span m='1358790'>that</span> <span
  m='1358940'>has</span> <span m='1359130'>pointers,</span> <span
  m='1362250'>unlike</span> <span m='1362620'>a</span> <span
  m='1362660'>heap.</span> <span m='1364040'>So</span> <span
  m='1364280'>it's</span> <span m='1365460'>a</span> <span
  m='1365490'>more</span> <span m='1365660'>complicated</span> <span
  m='1366210'>data</span> <span m='1366380'>structure.</span> <span
  m='1366810'>You</span> <span m='1366920'>need</span> <span
  m='1367500'>a</span> <span m='1367560'>few</span> <span
  m='1367710'>more</span> <span m='1367870'>bytes</span> <span
  m='1368700'>for</span> <span m='1368870'>every</span> <span
  m='1369090'>node</span> <span m='1369420'>of</span> <span
  m='1369530'>the</span> <span m='1369600'>binary</span> <span
  m='1369910'>search</span> <span m='1370240'>tree,</span> <span
  m='1370790'>as</span> <span m='1370960'>opposed</span> <span
  m='1371280'>to</span> <span m='1371340'>the</span> <span
  m='1371420'>heap,</span> <span m='1372080'>which</span> <span
  m='1372170'>is</span> <span m='1372310'>simply</span> <span
  m='1374060'>an</span> <span m='1374260'>array</span> <span
  m='1374590'>element.</span> </p><p><span m='1375440'>And</span> <span
  m='1375570'>the</span> <span m='1375640'>pointers</span> <span
  m='1376120'>are</span> <span m='1376520'>parent</span> <span
  m='1378000'>of</span> <span m='1378170'>x.</span> <span m='1379670'>I</span>
  <span m='1379750'>haven't</span> <span m='1380010'>bothered</span> <span
  m='1381720'>showing</span> <span m='1382040'>the</span> <span
  m='1382530'>arrows</span> <span m='1383030'>here,</span> <span
  m='1383860'>because</span> <span m='1384180'>you</span> <span
  m='1384350'>could</span> <span m='1384640'>be</span> <span
  m='1384750'>going</span> <span m='1385250'>upwards</span> <span
  m='1385760'>or</span> <span m='1385880'>backwards.</span> <span
  m='1387150'>And</span> <span m='1387940'>you</span> <span
  m='1388090'>could</span> <span m='1388180'>imagine</span> <span
  m='1388510'>that</span> <span m='1388660'>you</span> <span
  m='1388760'>actually</span> <span m='1389080'>have</span> <span
  m='1389340'>a</span> <span m='1389410'>parent</span> <span
  m='1390130'>pointer</span> <span m='1390600'>that</span> <span
  m='1390770'>goes</span> <span m='1390980'>up</span> <span
  m='1391160'>this</span> <span m='1391340'>way,</span> <span
  m='1391930'>and</span> <span m='1392040'>you</span> <span
  m='1392090'>have</span> <span m='1392200'>a</span> <span
  m='1392260'>child</span> <span m='1392630'>pointer</span> <span
  m='1393010'>that</span> <span m='1393110'>goes</span> <span
  m='1393370'>this</span> <span m='1393550'>way.</span> <span
  m='1394600'>So</span> <span m='1394750'>there's</span> <span
  m='1394950'>really,</span> <span m='1396080'>potentially,</span> <span
  m='1396520'>three</span> <span m='1396740'>pointers</span> <span
  m='1397790'>for</span> <span m='1398060'>each</span> <span
  m='1398330'>node,</span> <span m='1399300'>the</span> <span
  m='1399420'>parent,</span> <span m='1400690'>the left</span> <span
  m='1401080'>child,</span> <span m='1402220'>and</span> <span
  m='1402400'>the</span> <span m='1402480'>right</span> <span
  m='1402700'>child.</span> </p><p><span m='1404020'>So</span> <span
  m='1404590'>pretty</span> <span m='1404830'>straightforward.</span> <span
  m='1406580'>That's</span> <span m='1407340'>the</span> <span
  m='1407530'>data</span> <span m='1407770'>structure</span> <span
  m='1408250'>in</span> <span m='1408360'>terms</span> <span
  m='1408640'>of</span> <span m='1409000'>what</span> <span
  m='1409220'>it</span> <span m='1409610'>needs</span> <span
  m='1409980'>to</span> <span m='1410070'>have</span> <span
  m='1411050'>so</span> <span m='1411190'>you</span> <span
  m='1411340'>can</span> <span m='1411470'>operate</span> <span
  m='1411900'>on</span> <span m='1412080'>it.</span> <span
  m='1413420'>And</span> <span m='1415410'>there's</span> <span
  m='1415620'>an</span> <span m='1415700'>invariant</span> <span
  m='1420230'>for</span> <span m='1420420'>a</span> <span
  m='1420460'>BST.</span> <span m='1421440'>What</span> <span
  m='1421720'>makes</span> <span m='1422000'>a</span> <span
  m='1422070'>BST</span> <span m='1423820'>is</span> <span
  m='1424150'>that</span> <span m='1427150'>you</span> <span
  m='1427280'>have</span> <span m='1428420'>an</span> <span
  m='1428610'>ordering</span> <span m='1429300'>of</span> <span
  m='1431220'>the</span> <span m='1431340'>key</span> <span
  m='1431580'>values</span> <span m='1433500'>that</span> <span
  m='1433700'>satisfy</span> <span m='1435160'>the</span> <span
  m='1435280'>invariant</span> <span m='1435800'>that</span> <span
  m='1436080'>for</span> <span m='1436260'>all</span> <span
  m='1436630'>nodes</span> <span m='1441060'>x</span> <span
  m='1443010'>if</span> <span m='1443200'>y</span> <span m='1445370'>is</span>
  <span m='1445620'>in</span> <span m='1445810'>the</span> <span
  m='1447980'>left</span> <span m='1448380'>subtree</span> <span
  m='1452270'>of</span> <span m='1452470'>x,</span> <span m='1454040'>we</span>
  <span m='1454160'>have--</span> <span m='1458780'>if it's</span> <span
  m='1458920'>in</span> <span m='1459000'>the</span> <span
  m='1459100'>left</span> <span m='1459330'>subtree</span> <span
  m='1459850'>then</span> <span m='1461150'>key</span> <span
  m='1461510'>of</span> <span m='1461650'>y</span> <span m='1463130'>is</span>
  <span m='1463330'>less</span> <span m='1463560'>than</span> <span
  m='1463700'>or</span> <span m='1463810'>equal</span> <span
  m='1464130'>to</span> <span m='1465230'>key</span> <span m='1465620'>of</span>
  <span m='1465740'>x.</span> <span m='1467950'>And</span> <span
  m='1469550'>if</span> <span m='1470050'>y</span> <span m='1470410'>is</span>
  <span m='1470600'>in</span> <span m='1470730'>the</span> <span
  m='1472270'>right</span> <span m='1472620'>subtree</span> <span
  m='1475710'>we</span> <span m='1475870'>have</span> <span
  m='1476560'>key</span> <span m='1476820'>of</span> <span m='1476910'>y</span>
  <span m='1477670'>is</span> <span m='1478770'>greater</span> <span
  m='1479050'>than</span> <span m='1479200'>or</span> <span
  m='1479310'>equal</span> <span m='1479510'>to</span> <span
  m='1480900'>key</span> <span m='1481150'>of</span> <span m='1481290'>x.</span>
  </p><p><span m='1482070'>So if</span> <span m='1482210'>we're</span> <span
  m='1482350'>talking</span> <span m='1482610'>about</span> <span
  m='1482910'>trees</span> <span m='1484210'>here,</span> <span
  m='1484540'>subtrees</span> <span m='1485070'>here,</span> <span
  m='1485510'>everything</span> <span m='1485910'>underneath--</span> <span
  m='1487110'>and</span> <span m='1487220'>that's</span> <span
  m='1487410'>the</span> <span m='1487500'>stronger</span> <span
  m='1488420'>part</span> <span m='1488670'>of</span> <span
  m='1488750'>the</span> <span m='1488810'>invariant</span> <span
  m='1489530'>in</span> <span m='1489620'>the</span> <span
  m='1489710'>BST,</span> <span m='1491170'>versus</span> <span
  m='1491660'>in</span> <span m='1491780'>the</span> <span
  m='1491870'>heap</span> <span m='1492170'>we</span> <span
  m='1492240'>were</span> <span m='1492330'>just</span> <span
  m='1492500'>talking</span> <span m='1492700'>about</span> <span
  m='1492880'>the</span> <span m='1492940'>children.</span> </p><p><span
  m='1494700'>And</span> <span m='1494740'>so</span> <span
  m='1494820'>you</span> <span m='1494980'>look</span> <span
  m='1495100'>at</span> <span m='1495180'>this</span> <span
  m='1495550'>BST,</span> <span m='1496490'>it</span> <span
  m='1496610'>is</span> <span m='1496740'>a</span> <span m='1496780'>BST</span>
  <span m='1498090'>because</span> <span m='1498400'>if</span> <span
  m='1498490'>I</span> <span m='1498540'>look</span> <span m='1498740'>to</span>
  <span m='1498820'>the</span> <span m='1498930'>right,</span> <span
  m='1500550'>from</span> <span m='1500730'>the</span> <span
  m='1500840'>root</span> <span m='1501430'>I</span> <span
  m='1501540'>only</span> <span m='1501840'>see</span> <span
  m='1502170'>values</span> <span m='1502690'>that</span> <span
  m='1502790'>are</span> <span m='1502870'>greater</span> <span
  m='1503120'>than</span> <span m='1503300'>30.</span> <span
  m='1504470'>And</span> <span m='1504670'>if</span> <span m='1504770'>I</span>
  <span m='1505000'>look</span> <span m='1505190'>to</span> <span
  m='1505270'>the</span> <span m='1505400'>left,</span> <span
  m='1506230'>in</span> <span m='1506350'>the</span> <span
  m='1506430'>entire</span> <span m='1506960'>subtree,</span> <span
  m='1508150'>all</span> <span m='1508330'>the</span> <span
  m='1508400'>way</span> <span m='1508510'>down</span> <span
  m='1508910'>I</span> <span m='1509010'>only</span> <span
  m='1509250'>see</span> <span m='1509420'>values</span> <span
  m='1510470'>that</span> <span m='1510630'>are</span> <span
  m='1511920'>less</span> <span m='1512180'>than</span> <span
  m='1512330'>30.</span> <span m='1513890'>And</span> <span
  m='1514410'>that</span> <span m='1514740'>has</span> <span
  m='1515100'>to</span> <span m='1515970'>be</span> <span
  m='1516110'>true</span> <span m='1516510'>for</span> <span
  m='1516830'>any</span> <span m='1517170'>intermediate</span> <span
  m='1517690'>node</span> <span m='1518620'>in</span> <span
  m='1518780'>the</span> <span m='1518900'>tree.</span> </p><p><span
  m='1520110'>And</span> <span m='1520980'>the</span> <span
  m='1521160'>only</span> <span m='1521350'>other</span> <span
  m='1522000'>nontrivial</span> <span m='1522500'>node</span> <span
  m='1522720'>here</span> <span m='1522920'>is</span> <span
  m='1523010'>17.</span> <span m='1523940'>And</span> <span
  m='1524090'>you</span> <span m='1524180'>see</span> <span
  m='1524350'>that</span> <span m='1524450'>14</span> <span
  m='1524830'>is</span> <span m='1524930'>less</span> <span
  m='1525100'>than</span> <span m='1525240'>17,</span> <span
  m='1525693'>and</span> <span m='1526146'>20</span> <span m='1526600'>is</span>
  <span m='1527360'>greater</span> <span m='1527560'>than</span> <span
  m='1527700'>17.</span> <span m='1528830'>OK?</span> </p><p><span
  m='1530000'>So</span> <span m='1530120'>that's</span> <span
  m='1530350'>the</span> <span m='1530400'>BST.</span> <span
  m='1532440'>That's</span> <span m='1532770'>the</span> <span
  m='1532860'>data</span> <span m='1533050'>structure.</span> <span
  m='1533400'>This is</span> <span m='1533630'>the</span> <span
  m='1533820'>invariant.</span> </p><p><span m='1534910'>So</span> <span
  m='1535100'>let's</span> <span m='1535390'>look</span> <span
  m='1535620'>at</span> <span m='1536610'>why</span> <span
  m='1536990'>BSTs</span> <span m='1537650'>are</span> <span
  m='1538730'>a</span> <span m='1538840'>possibility</span> <span
  m='1539540'>for</span> <span m='1540420'>solving</span> <span
  m='1540890'>our</span> <span m='1541600'>runway</span> <span
  m='1541990'>reservation</span> <span m='1543330'>problem.</span> <span
  m='1544870'>And</span> <span m='1546180'>what</span> <span
  m='1546380'>I'll</span> <span m='1546440'>do</span> <span
  m='1546710'>is</span> <span m='1547650'>I'll</span> <span
  m='1549650'>do</span> <span m='1549780'>the</span> <span
  m='1549880'>insert.</span> <span m='1554790'>So</span> <span
  m='1554990'>let's</span> <span m='1555210'>start</span> <span
  m='1555490'>with</span> <span m='1555590'>the</span> <span
  m='1555670'>nil</span> <span m='1558020'>set</span> <span
  m='1558300'>of</span> <span m='1558390'>elements,</span> <span
  m='1558970'>or</span> <span m='1559110'>null</span> <span
  m='1559370'>set</span> <span m='1559540'>of</span> <span
  m='1559630'>elements,</span> <span m='1560620'>R.</span> <span
  m='1563020'>And</span> <span m='1563400'>let's start</span> <span
  m='1563720'>inserting.</span> </p><p><span m='1568370'>So</span> <span
  m='1569600'>I</span> <span m='1569740'>insert</span> <span
  m='1571670'>49.</span> <span m='1573570'>And</span> <span
  m='1574890'>all</span> <span m='1574990'>I</span> <span m='1575060'>do</span>
  <span m='1575250'>is</span> <span m='1575370'>make</span> <span
  m='1575540'>a</span> <span m='1575590'>node</span> <span
  m='1576800'>that</span> <span m='1577440'>has</span> <span
  m='1577660'>a</span> <span m='1577700'>key</span> <span
  m='1577930'>value</span> <span m='1578300'>of</span> <span
  m='1578410'>49.</span> <span m='1579840'>This</span> <span
  m='1580000'>one</span> <span m='1580120'>is</span> <span
  m='1580220'>easy.</span> </p><p><span m='1582110'>Next</span> <span
  m='1582440'>insert,</span> <span m='1583340'>79.</span> <span
  m='1587090'>And</span> <span m='1587650'>what</span> <span
  m='1587810'>happens</span> <span m='1588130'>here</span> <span
  m='1588490'>is</span> <span m='1589420'>I</span> <span m='1589580'>have</span>
  <span m='1589800'>to</span> <span m='1591340'>look</span> <span
  m='1591510'>at</span> <span m='1591610'>49,</span> <span
  m='1592600'>and</span> <span m='1592750'>I</span> <span
  m='1592810'>compare</span> <span m='1593240'>79</span> <span
  m='1593770'>to</span> <span m='1593850'>49.</span> <span
  m='1594165'>And</span> <span m='1594480'>because</span> <span
  m='1594680'>79</span> <span m='1595200'>is</span> <span
  m='1595320'>greater</span> <span m='1595560'>than</span> <span
  m='1595740'>49</span> <span m='1596570'>I</span> <span m='1596690'>go</span>
  <span m='1596850'>to</span> <span m='1596910'>the</span> <span
  m='1597150'>right</span> <span m='1597780'>and</span> <span
  m='1597960'>I</span> <span m='1598060'>attach</span> <span
  m='1599190'>79</span> <span m='1601110'>to</span> <span m='1601300'>the</span>
  <span m='1602550'>right</span> <span m='1602850'>child</span> <span
  m='1603330'>of</span> <span m='1603430'>49.</span> </p><p><span
  m='1605180'>Then</span> <span m='1605500'>I</span> <span
  m='1605540'>want</span> <span m='1605700'>to</span> <span
  m='1605740'>insert</span> <span m='1606230'>46.</span> <span
  m='1609500'>And</span> <span m='1610140'>when</span> <span
  m='1610240'>I</span> <span m='1610270'>want</span> <span m='1610420'>to</span>
  <span m='1610460'>insert</span> <span m='1610760'>46</span> <span
  m='1611270'>I</span> <span m='1611310'>look</span> <span m='1611500'>at</span>
  <span m='1611590'>this,</span> <span m='1612190'>I</span> <span
  m='1612300'>compare</span> <span m='1612670'>49</span> <span
  m='1613260'>and</span> <span m='1613350'>46.</span> <span
  m='1614070'>46</span> <span m='1614510'>is</span> <span
  m='1614660'>less,</span> <span m='1615340'>so</span> <span
  m='1615470'>I</span> <span m='1615550'>go</span> <span m='1615700'>to</span>
  <span m='1615760'>the</span> <span m='1615870'>left</span> <span
  m='1616140'>side</span> <span m='1616870'>and</span> <span
  m='1616980'>I</span> <span m='1617030'>put</span> <span m='1617240'>46</span>
  <span m='1617690'>in</span> <span m='1617830'>there.</span> </p><p><span
  m='1619390'>Next,</span> <span m='1621480'>let's</span> <span
  m='1621680'>say</span> <span m='1621820'>I</span> <span m='1621900'>want
  to</span> <span m='1622160'>insert</span> <span m='1623470'>41.</span> <span
  m='1624560'>So</span> <span m='1624760'>far</span> <span m='1625000'>I</span>
  <span m='1625020'>haven't</span> <span m='1625240'>really</span> <span
  m='1625430'>talked</span> <span m='1625750'>about</span> <span
  m='1627620'>the</span> <span m='1627810'>k</span> <span
  m='1627880'>minute</span> <span m='1628150'>checks.</span> <span
  m='1629480'>And</span> <span m='1630290'>you</span> <span
  m='1630430'>could</span> <span m='1630520'>imagine</span> <span
  m='1630860'>that</span> <span m='1631040'>they're</span> <span
  m='1631160'>being</span> <span m='1631390'>done.</span> <span
  m='1631700'>I'll</span> <span m='1631800'>show</span> <span
  m='1632280'>you</span> <span m='1632460'>exactly,</span> <span
  m='1632950'>or</span> <span m='1633060'>talk</span> <span
  m='1633250'>about</span> <span m='1633430'>exactly</span> <span
  m='1633790'>how</span> <span m='1633940'>they're</span> <span
  m='1634080'>done</span> <span m='1634690'>in</span> <span m='1634740'>a</span>
  <span m='1634790'>second.</span> <span m='1635540'>It's</span> <span
  m='1636140'>not</span> <span m='1636380'>that</span> <span
  m='1636520'>hard.</span> <span m='1637410'>But</span> <span
  m='1638030'>let</span> <span m='1638180'>me</span> <span m='1638250'>go</span>
  <span m='1638350'>ahead</span> <span m='1638870'>and</span> <span
  m='1639560'>do</span> <span m='1639660'>one</span> <span
  m='1639900'>more.</span> </p><p><span m='1641160'>For</span> <span
  m='1641340'>41,</span> <span m='1642660'>41</span> <span m='1643170'>is</span>
  <span m='1643250'>less</span> <span m='1643440'>than</span> <span
  m='1643570'>49,</span> <span m='1644320'>so</span> <span m='1644490'>I</span>
  <span m='1644570'>go</span> <span m='1644750'>left.</span> <span
  m='1645940'>41</span> <span m='1647070'>is</span> <span
  m='1647170'>less</span> <span m='1647330'>than</span> <span
  m='1647460'>46,</span> <span m='1648380'>so</span> <span m='1648510'>I</span>
  <span m='1648600'>go</span> <span m='1648770'>left</span> <span
  m='1649560'>and</span> <span m='1649790'>attach</span> <span
  m='1650110'>it</span> <span m='1650210'>to</span> <span m='1650270'>the</span>
  <span m='1650340'>left</span> <span m='1650560'>child.</span> <span
  m='1651155'>All</span> <span m='1651490'>right?</span> <span
  m='1651790'>So</span> <span m='1651890'>that's</span> <span
  m='1651940'>what</span> <span m='1652080'>I</span> <span
  m='1652120'>have</span> <span m='1652390'>right</span> <span
  m='1652600'>now.</span> </p><p><span m='1653650'>Now</span> <span
  m='1653820'>let's</span> <span m='1654020'>talk</span> <span
  m='1654200'>about</span> <span m='1654480'>the</span> <span
  m='1654910'>k</span> <span m='1655140'>minute</span> <span
  m='1655290'>check.</span> <span m='1656510'>It's</span> <span
  m='1657790'>good</span> <span m='1657950'>to</span> <span
  m='1658020'>talk</span> <span m='1658220'>about</span> <span
  m='1658390'>the</span> <span m='1658470'>K</span> <span
  m='1658660'>minute</span> <span m='1658720'>check</span> <span
  m='1659100'>when</span> <span m='1659330'>there's</span> <span
  m='1659500'>actually</span> <span m='1659810'>a</span> <span
  m='1659860'>violation.</span> <span m='1661750'>And</span> <span
  m='1661960'>let's</span> <span m='1662110'>assume</span> <span
  m='1662390'>the</span> <span m='1662510'>k</span> <span
  m='1662690'>equals</span> <span m='1663010'>3</span> <span
  m='1663290'>here.</span> <span m='1665220'>And</span> <span
  m='1665460'>so,</span> <span m='1665960'>same</span> <span
  m='1666210'>thing</span> <span m='1666380'>here.</span> </p><p><span
  m='1667110'>You're</span> <span m='1667250'>essentially</span> <span
  m='1667650'>doing</span> <span m='1667850'>binary</span> <span
  m='1668160'>search</span> <span m='1668540'>here.</span> <span
  m='1669780'>And</span> <span m='1670480'>you're</span> <span
  m='1670670'>doing</span> <span m='1670880'>the</span> <span
  m='1670970'>checks</span> <span m='1671290'>as</span> <span
  m='1671460'>you're</span> <span m='1671570'>doing</span> <span
  m='1671730'>the</span> <span m='1671820'>binary</span> <span
  m='1672000'>search.</span> <span m='1672980'>So</span> <span
  m='1673060'>what</span> <span m='1673170'>you're</span> <span
  m='1673260'>going</span> <span m='1673380'>to</span> <span
  m='1673430'>be</span> <span m='1673540'>doing</span> <span
  m='1673830'>is</span> <span m='1673960'>you're</span> <span
  m='1674100'>going</span> <span m='1674200'>to</span> <span
  m='1674270'>check</span> <span m='1675290'>that--</span> <span
  m='1677180'>you're</span> <span m='1677340'>going</span> <span
  m='1677420'>to</span> <span m='1677460'>compare</span> <span
  m='1678110'>42</span> <span m='1678580'>with</span> <span
  m='1679050'>49,</span> <span m='1680340'>with</span> <span
  m='1680650'>the</span> <span m='1680730'>k</span> <span
  m='1681010'>minute</span> <span m='1681190'>check.</span> <span
  m='1681930'>And</span> <span m='1682090'>you</span> <span
  m='1682190'>realize</span> <span m='1682490'>they're</span> <span
  m='1682650'>7</span> <span m='1682960'>apart.</span> <span
  m='1683780'>So</span> <span m='1683870'>that's</span> <span
  m='1684100'>OK.</span> </p><p><span m='1684960'>And</span> <span
  m='1685170'>42</span> <span m='1685560'>is</span> <span
  m='1685680'>less</span> <span m='1685900'>than</span> <span
  m='1686040'>49,</span> <span m='1686850'>so</span> <span
  m='1686990'>you</span> <span m='1687090'>go</span> <span
  m='1687290'>left.</span> <span m='1689010'>And</span> <span
  m='1689420'>then</span> <span m='1689550'>you</span> <span
  m='1689660'>compare</span> <span m='1689980'>42</span> <span
  m='1690570'>with</span> <span m='1691110'>46.</span> <span
  m='1692370'>And</span> <span m='1693080'>again,</span> <span
  m='1693370'>it's</span> <span m='1693470'>less</span> <span
  m='1693680'>than</span> <span m='1693810'>46,</span> <span
  m='1694390'>but</span> <span m='1694570'>it's</span> <span
  m='1695220'>k</span> <span m='1695490'>away,</span> <span
  m='1696290'>more</span> <span m='1696460'>than</span> <span
  m='1696580'>3</span> <span m='1696770'>away</span> <span
  m='1697310'>from</span> <span m='1697490'>46.</span> <span
  m='1698030'>So</span> <span m='1698120'>that's</span> <span
  m='1698360'>cool.</span> <span m='1698950'>And</span> <span
  m='1699090'>you</span> <span m='1699180'>go</span> <span
  m='1699300'>left.</span> </p><p><span m='1700580'>And</span> <span
  m='1700930'>then</span> <span m='1701070'>you</span> <span
  m='1701160'>get</span> <span m='1701310'>to</span> <span
  m='1701390'>41.</span> <span m='1702350'>And you</span> <span
  m='1702520'>compare</span> <span m='1702920'>42</span> <span
  m='1703900'>with</span> <span m='1704180'>41.</span> <span
  m='1705180'>In</span> <span m='1705240'>this</span> <span
  m='1705380'>case</span> <span m='1705570'>is</span> <span
  m='1705720'>greater.</span> <span m='1706610'>But</span> <span
  m='1706750'>it's</span> <span m='1707470'>not</span> <span
  m='1708840'>k</span> <span m='1709270'>more</span> <span
  m='1709710'>than</span> <span m='1709900'>it.</span> </p><p><span
  m='1710580'>And</span> <span m='1710930'>so</span> <span
  m='1711040'>that</span> <span m='1711200'>means</span> <span
  m='1711480'>that</span> <span m='1712530'>if</span> <span
  m='1712970'>you</span> <span m='1713100'>didn't</span> <span
  m='1713300'>have</span> <span m='1713510'>the</span> <span
  m='1713610'>check,</span> <span m='1714510'>you</span> <span
  m='1714720'>would</span> <span m='1714870'>be</span> <span
  m='1715030'>putting</span> <span m='1716320'>42</span> <span
  m='1716930'>in</span> <span m='1717050'>here.</span> <span
  m='1717930'>But</span> <span m='1718090'>because</span> <span
  m='1718380'>you</span> <span m='1718480'>have</span> <span
  m='1718670'>the</span> <span m='1718750'>check,</span> <span
  m='1719490'>you</span> <span m='1719610'>fail.</span> <span
  m='1720750'>And</span> <span m='1721690'>you</span> <span
  m='1721850'>say,</span> <span m='1722120'>look,</span> <span
  m='1722400'>I</span> <span m='1722560'>mean</span> <span
  m='1722730'>this</span> <span m='1723210'>violates</span> <span
  m='1723580'>the</span> <span m='1723620'>safety</span> <span
  m='1723950'>property,</span> <span m='1724990'>violates</span> <span
  m='1725490'>the</span> <span m='1725630'>check</span> <span
  m='1725900'>I</span> <span m='1725930'>need</span> <span m='1726130'>to</span>
  <span m='1726220'>do.</span> <span m='1726890'>And</span> <span
  m='1726930'>therefore</span> <span m='1727290'>I'm</span> <span
  m='1727350'>not</span> <span m='1727490'>going</span> <span
  m='1727590'>to</span> <span m='1727630'>insert--</span> <span
  m='1728110'>I'm</span> <span m='1728190'>not</span> <span
  m='1728330'>going</span> <span m='1728450'>to</span> <span
  m='1728900'>reserve</span> <span m='1729310'>a</span> <span
  m='1729360'>request</span> <span m='1729750'>for</span> <span
  m='1729960'>you.</span> <span m='1730750'>All</span> <span
  m='1730820'>right?</span> </p><p><span m='1731520'>So</span> <span
  m='1732350'>what's</span> <span m='1732520'>happened</span> <span
  m='1732820'>here</span> <span m='1733310'>is</span> <span
  m='1733610'>it's</span> <span m='1733770'>basically</span> <span
  m='1734230'>a</span> <span m='1734290'>sorted</span> <span
  m='1734640'>array,</span> <span m='1735340'>except</span> <span
  m='1735670'>that</span> <span m='1735810'>you</span> <span
  m='1735990'>added</span> <span m='1736800'>a</span> <span
  m='1736890'>bunch</span> <span m='1737110'>of</span> <span
  m='1737190'>pointers</span> <span m='1737850'>associated</span> <span
  m='1738330'>with</span> <span m='1738470'>the</span> <span
  m='1738570'>tree.</span> <span m='1739300'>And</span> <span m='1739410'>so
  it's</span> <span m='1739540'>somewhere</span> <span
  m='1739910'>between</span> <span m='1740980'>a</span> <span
  m='1741150'>sorted</span> <span m='1741450'>list</span> <span
  m='1742370'>and</span> <span m='1742480'>a</span> <span
  m='1742630'>sorted</span> <span m='1742930'>array.</span> <span
  m='1743520'>And</span> <span m='1743750'>it does</span> <span
  m='1743920'>exactly</span> <span m='1744410'>the</span> <span
  m='1744510'>right</span> <span m='1744790'>thing</span> <span
  m='1745500'>with</span> <span m='1745600'>respect</span> <span
  m='1746060'>to</span> <span m='1746630'>being</span> <span
  m='1746990'>able</span> <span m='1747390'>to</span> <span
  m='1747750'>insert.</span> </p><p><span m='1749310'>Once</span> <span
  m='1749660'>you've</span> <span m='1749790'>found</span> <span
  m='1750130'>the</span> <span m='1750210'>place</span> <span
  m='1750500'>to</span> <span m='1750570'>insert,</span> <span
  m='1751360'>it's</span> <span m='1751530'>merely</span> <span
  m='1751860'>attaching</span> <span m='1752760'>this</span> <span
  m='1752960'>particular</span> <span m='1753410'>new</span> <span
  m='1753970'>node</span> <span m='1754370'>with</span> <span
  m='1754480'>it's</span> <span m='1754700'>appropriate</span> <span
  m='1755210'>key</span> <span m='1755870'>to</span> <span
  m='1755940'>the</span> <span m='1756040'>pointer.</span> <span m='1757150'>All
  right?</span> </p><p><span m='1759200'>So</span> <span
  m='1760810'>what's</span> <span m='1761160'>happened</span> <span
  m='1761420'>here</span> <span m='1762450'>is</span> <span
  m='1762880'>that</span> <span m='1764470'>if</span> <span m='1767470'>h</span>
  <span m='1768390'>is</span> <span m='1768610'>the</span> <span
  m='1768690'>height</span> <span m='1768950'>of</span> <span
  m='1769050'>the</span> <span m='1769140'>tree</span> <span
  m='1775290'>then</span> <span m='1776150'>insertion</span> <span
  m='1777970'>with or</span> <span m='1778310'>without</span> <span
  m='1778620'>the</span> <span m='1778710'>check</span> <span
  m='1782860'>is</span> <span m='1783060'>done</span> <span
  m='1783300'>in</span> <span m='1783420'>order</span> <span
  m='1783750'>h</span> <span m='1784080'>time.</span> <span
  m='1788330'>And</span> <span m='1788660'>that's</span> <span m='1788910'>what
  BSTs</span> <span m='1789920'>are</span> <span m='1790120'>good</span> <span
  m='1790270'>for.</span> <span m='1792060'>People</span> <span
  m='1792290'>buy</span> <span m='1792460'>that?</span> <span
  m='1792710'>Any</span> <span m='1792860'>questions</span> <span
  m='1793250'>about</span> <span m='1793480'>how</span> <span
  m='1793670'>they</span> <span m='1793750'>k</span> <span
  m='1793970'>minute</span> <span m='1794110'>check</span> <span
  m='1794430'>proceeded?</span> <span m='1795700'>Yeah,</span> <span
  m='1795930'>question.</span> </p><p><span m='1796520'>AUDIENCE: So,</span>
  <span m='1797005'>what's it</span> <span m='1797490'>called?</span> <span
  m='1797732'>The what</span> <span m='1797975'>check?</span> </p><p><span
  m='1798460'>PROFESSOR: The</span> <span m='1798560'>k minute</span> <span
  m='1799090'>check.</span> <span m='1800022'>Sorry,</span> <span
  m='1800490'>the</span> <span m='1800600'>k</span> <span m='1800900'>was</span>
  <span m='1801510'>3 minutes</span> <span m='1801800'>k.</span> <span
  m='1804410'>I</span> <span m='1804680'>had</span> <span
  m='1804840'>this</span> <span m='1804990'>thing</span> <span
  m='1805150'>over</span> <span m='1805300'>here,</span> <span
  m='1806360'>add</span> <span m='1806650'>t</span> <span m='1806850'>to</span>
  <span m='1806940'>the</span> <span m='1807040'>set</span> <span
  m='1807310'>R</span> <span m='1807790'>if</span> <span m='1808620'>no</span>
  <span m='1808800'>other</span> <span m='1808990'>landings</span> <span
  m='1809690'>are</span> <span m='1809850'>scheduled</span> <span
  m='1810290'>within</span> <span m='1810590'>k</span> <span
  m='1810960'>minutes.</span> <span m='1812110'>So</span> <span
  m='1812320'>k</span> <span m='1812430'>was</span> <span
  m='1812530'>just</span> <span m='1812710'>a</span> <span
  m='1812740'>number.</span> <span m='1813460'>I</span> <span m='1813550'>want
  it</span> <span m='1813850'>to</span> <span m='1813910'>be</span> <span
  m='1814050'>a</span> <span m='1814110'>parameter</span> <span
  m='1815200'>because</span> <span m='1815890'>it</span> <span
  m='1817150'>doesn't</span> <span m='1817370'>matter</span> <span
  m='1817650'>what</span> <span m='1817850'>k</span> <span
  m='1818110'>is.</span> <span m='1819130'>As</span> <span
  m='1819290'>long</span> <span m='1819460'>as</span> <span
  m='1819530'>you</span> <span m='1819610'>know</span> <span
  m='1819790'>what</span> <span m='1819920'>it</span> <span
  m='1820020'>is</span> <span m='1821060'>when</span> <span
  m='1821390'>you</span> <span m='1821500'>do</span> <span
  m='1821610'>the</span> <span m='1821720'>binary</span> <span
  m='1822060'>search,</span> <span m='1822870'>you</span> <span
  m='1823000'>can</span> <span m='1823110'>add</span> <span
  m='1823330'>that</span> <span m='1823450'>in</span> <span m='1824130'>to
  an</span> <span m='1824570'>argument</span> <span m='1824840'>to</span> <span
  m='1825110'>your</span> <span m='1825320'>insert,</span> <span
  m='1826070'>and</span> <span m='1826230'>do</span> <span
  m='1826320'>the</span> <span m='1826440'>check.</span> </p><p><span
  m='1827092'>AUDIENCE: OK.</span> </p><p><span m='1828700'>PROFESSOR: So</span>
  <span m='1829170'>in</span> <span m='1829320'>this</span> <span
  m='1829490'>case,</span> <span m='1829900'>I</span> <span
  m='1829920'>set</span> <span m='1830190'>k</span> <span m='1830360'>to</span>
  <span m='1830440'>be</span> <span m='1830620'>3</span> <span
  m='1831540'>out</span> <span m='1831690'>here.</span> <span
  m='1833080'>And</span> <span m='1833450'>I</span> <span m='1833480'>was</span>
  <span m='1833610'>doing</span> <span m='1833800'>a</span> <span
  m='1833860'>check</span> <span m='1834380'>to</span> <span
  m='1834500'>see</span> <span m='1834730'>that</span> <span
  m='1834950'>the</span> <span m='1835050'>invariant,</span> <span
  m='1835910'>any</span> <span m='1836200'>elements</span> <span
  m='1836860'>in</span> <span m='1837100'>the</span> <span
  m='1837200'>BST</span> <span m='1838420'>already,</span> <span
  m='1839500'>on</span> <span m='1839760'>any</span> <span
  m='1839970'>nodes</span> <span m='1840810'>that</span> <span
  m='1840830'>had</span> <span m='1841270'>keys</span> <span
  m='1842510'>that</span> <span m='1844420'>were</span> <span
  m='1844670'>within</span> <span m='1845010'>3</span> <span
  m='1845300'>minutes--</span> <span m='1845920'>because</span> <span
  m='1846150'>I</span> <span m='1846210'>fixed</span> <span m='1846490'>k</span>
  <span m='1846640'>to</span> <span m='1846720'>be</span> <span
  m='1846850'>3--</span> <span m='1847610'>to</span> <span
  m='1847750'>the</span> <span m='1848140'>actual</span> <span
  m='1848580'>time</span> <span m='1848900'>that</span> <span
  m='1849020'>I</span> <span m='1849050'>was</span> <span
  m='1849150'>trying</span> <span m='1849350'>to</span> <span
  m='1849390'>insert.</span> <span m='1850840'>All</span> <span
  m='1850930'>right?</span> </p><p><span m='1851090'>AUDIENCE: So there's</span>
  <span m='1851530'>no way</span> <span m='1851970'>[INAUDIBLE].</span>
  </p><p><span m='1853730'>PROFESSOR: I'm</span> <span m='1853850'>sorry,</span>
  <span m='1854050'>there's</span> <span m='1854250'>no</span> <span
  m='1854370'>way?</span> </p><p><span m='1854795'>AUDIENCE: There's no
  way</span> <span m='1855220'>you could insert</span> <span m='1855705'>the
  42</span> <span m='1856190'>into the tree</span> <span
  m='1856675'>then?</span> </p><p><span m='1857160'>PROFESSOR: Well,</span>
  <span m='1857760'>if</span> <span m='1859210'>the</span> <span
  m='1859360'>basic</span> <span m='1859840'>insertion</span> <span
  m='1860480'>method</span> <span m='1860980'>into</span> <span
  m='1861250'>a</span> <span m='1861320'>binary</span> <span
  m='1861740'>search</span> <span m='1862080'>tree</span> <span
  m='1862650'>doesn't</span> <span m='1862880'>have</span> <span
  m='1863060'>any</span> <span m='1863210'>constraints.</span> <span
  m='1866040'>But</span> <span m='1866280'>you</span> <span
  m='1866400'>can</span> <span m='1866760'>certainly</span> <span
  m='1867100'>augment</span> <span m='1868810'>the</span> <span
  m='1869140'>insertion</span> <span m='1869650'>method</span> <span
  m='1870650'>without</span> <span m='1871730'>changing</span> <span
  m='1872170'>the</span> <span m='1872270'>efficiency</span> <span
  m='1872830'>of the</span> <span m='1872950'>insertion</span> <span
  m='1873430'>method.</span> </p><p><span m='1874720'>So</span> <span
  m='1874850'>let's</span> <span m='1875020'>say</span> <span
  m='1875120'>that</span> <span m='1875970'>all</span> <span
  m='1876160'>you</span> <span m='1876240'>wanted</span> <span
  m='1876380'>to</span> <span m='1876570'>do</span> <span m='1876710'>was</span>
  <span m='1876880'>insert</span> <span m='1878120'>into</span> <span
  m='1878480'>a</span> <span m='1878540'>binary</span> <span
  m='1878860'>search</span> <span m='1879160'>tree,</span> <span
  m='1879780'>and</span> <span m='1880860'>it</span> <span
  m='1881020'>had</span> <span m='1881060'>nothing</span> <span m='1881350'>to
  do with the</span> <span m='1881440'>runway</span> <span
  m='1881740'>reservation.</span> <span m='1882710'>Then</span> <span
  m='1882920'>you would</span> <span m='1883030'>just</span> <span
  m='1883230'>insert</span> <span m='1883580'>the</span> <span
  m='1883660'>way</span> <span m='1883800'>I</span> <span
  m='1883850'>described</span> <span m='1884240'>to</span> <span
  m='1884330'>you.</span> <span m='1885400'>The</span> <span
  m='1885500'>beauty</span> <span m='1885790'>of</span> <span
  m='1885860'>the</span> <span m='1885930'>binary</span> <span
  m='1886220'>search</span> <span m='1886490'>tree</span> <span
  m='1887080'>is</span> <span m='1887240'>that</span> <span
  m='1887700'>while</span> <span m='1888080'>you're</span> <span
  m='1888270'>finding</span> <span m='1889900'>the</span> <span
  m='1890060'>place</span> <span m='1890340'>to</span> <span
  m='1890410'>insert,</span> <span m='1891150'>you</span> <span
  m='1891280'>can</span> <span m='1891370'>do</span> <span
  m='1891470'>these</span> <span m='1891620'>checks--</span> <span
  m='1892750'>the k</span> <span m='1893010'>minute</span> <span
  m='1893330'>checks.</span> <span m='1893730'>Yeah,</span> <span
  m='1893940'>question</span> <span m='1894210'>back</span> <span
  m='1894380'>there.</span> </p><p><span m='1894570'>AUDIENCE: What</span> <span
  m='1895006'>about</span> <span m='1895442'>45?</span> </p><p><span
  m='1896750'>PROFESSOR: What</span> <span m='1896880'>about</span> <span
  m='1897140'>45?</span> <span m='1897770'>So</span> <span
  m='1897910'>this</span> <span m='1898090'>is</span> <span
  m='1898230'>after--</span> <span m='1899840'>we</span> <span
  m='1901060'>haven't</span> <span m='1901470'>inserted</span> <span
  m='1902550'>42</span> <span m='1903190'>because</span> <span
  m='1903910'>it</span> <span m='1904080'>violated</span> <span
  m='1904520'>the</span> <span m='1904930'>check.</span> <span
  m='1905630'>So</span> <span m='1905860'>when</span> <span
  m='1905980'>you</span> <span m='1906060'>do</span> <span
  m='1906210'>45,</span> <span m='1906970'>then</span> <span
  m='1907050'>what</span> <span m='1907170'>happens</span> <span
  m='1907520'>is</span> <span m='1908690'>you</span> <span
  m='1908860'>see</span> <span m='1909060'>that</span> <span
  m='1909540'>45</span> <span m='1910030'>is</span> <span
  m='1910130'>less</span> <span m='1910340'>than</span> <span
  m='1910490'>49</span> <span m='1911100'>and</span> <span
  m='1911240'>you</span> <span m='1911350'>pass,</span> <span
  m='1913450'>because</span> <span m='1914020'>you're</span> <span
  m='1914210'>more</span> <span m='1914420'>than</span> <span
  m='1914710'>3</span> <span m='1914910'>minutes</span> <span
  m='1915200'>away.</span> <span m='1915510'>We'll</span> <span
  m='1915680'>stick</span> <span m='1915900'>with</span> <span
  m='1916010'>that</span> <span m='1916140'>example.</span> </p><p><span
  m='1917230'>And</span> <span m='1917270'>then</span> <span
  m='1917380'>you</span> <span m='1917480'>get</span> <span
  m='1917650'>here</span> <span m='1918520'>and</span> <span
  m='1918680'>then</span> <span m='1918810'>you</span> <span
  m='1918930'>see</span> <span m='1919170'>that</span> <span
  m='1920650'>45</span> <span m='1921240'>is</span> <span
  m='1921360'>less</span> <span m='1921580'>than</span> <span
  m='1921720'>46,</span> <span m='1922300'>and</span> <span
  m='1922360'>you'd</span> <span m='1922550'>fail</span> <span
  m='1922930'>right</span> <span m='1923120'>here.</span> <span
  m='1924780'>You</span> <span m='1924890'>would</span> <span
  m='1924990'>fail</span> <span m='1925340'>right</span> <span
  m='1925540'>here</span> <span m='1926000'>if</span> <span
  m='1926140'>you</span> <span m='1926250'>were</span> <span
  m='1926330'>doing</span> <span m='1926550'>the</span> <span
  m='1926650'>check,</span> <span m='1927390'>because</span> <span
  m='1927520'>45</span> <span m='1928160'>is</span> <span m='1928360'>not</span>
  <span m='1929170'>3</span> <span m='1929490'>away</span> <span
  m='1930310'>from</span> <span m='1930560'>46.</span> <span
  m='1931220'>All</span> <span m='1931690'>right?</span> <span
  m='1933390'>So</span> <span m='1933540'>that's</span> <span
  m='1934110'>the</span> <span m='1934210'>story.</span> </p><p><span
  m='1936580'>And</span> <span m='1936800'>so</span> <span m='1937040'>if
  you</span> <span m='1937080'>have</span> <span m='1937280'>h</span> <span
  m='1937820'>being</span> <span m='1938060'>the</span> <span
  m='1938140'>height</span> <span m='1938470'>of</span> <span
  m='1938570'>the</span> <span m='1938650'>tree,</span> <span
  m='1939130'>as</span> <span m='1939310'>you</span> <span
  m='1939410'>can</span> <span m='1939520'>see</span> <span
  m='1940210'>you're</span> <span m='1940310'>just</span> <span
  m='1940490'>following</span> <span m='1940860'>a</span> <span
  m='1940920'>path.</span> <span m='1941670'>And</span> <span
  m='1941870'>depending</span> <span m='1942150'>on</span> <span
  m='1942230'>what</span> <span m='1942380'>the</span> <span
  m='1942450'>height</span> <span m='1942790'>is</span> <span
  m='1944150'>you're</span> <span m='1944390'>going</span> <span
  m='1944620'>to</span> <span m='1944770'>do</span> <span
  m='1944900'>that</span> <span m='1945110'>many</span> <span
  m='1945290'>operations,</span> <span m='1946450'>times</span> <span
  m='1946700'>some</span> <span m='1946890'>constant</span> <span
  m='1947330'>factor.</span> <span m='1948320'>And</span> <span
  m='1948480'>so</span> <span m='1948560'>you</span> <span
  m='1948660'>can</span> <span m='1948760'>say</span> <span
  m='1948940'>that</span> <span m='1949100'>this</span> <span
  m='1949240'>is</span> <span m='1949380'>order</span> <span
  m='1949600'>h</span> <span m='1949980'>time.</span> <span
  m='1951010'>All</span> <span m='1951080'>right?</span> </p><p><span
  m='1952090'>Any</span> <span m='1952260'>other</span> <span
  m='1952400'>questions?</span> <span m='1955210'>Yeah,</span> <span
  m='1955490'>question</span> <span m='1955760'>back</span> <span
  m='1955930'>there.</span> </p><p><span m='1956757'>AUDIENCE: In a 
  normal</span> <span m='1957244'>array</span> <span
  m='1957731'>[INAUDIBLE].</span> </p><p><span m='1964550'>PROFESSOR:
  Well,</span> <span m='1964810'>it's</span> <span m='1965750'>up</span> <span
  m='1965950'>to</span> <span m='1966030'>you.</span> <span
  m='1966410'>In</span> <span m='1968112'>a</span> <span
  m='1968460'>conventional</span> <span m='1969050'>binary</span> <span
  m='1969340'>search</span> <span m='1969660'>tree,</span> <span m='1969860'>or
  the</span> <span m='1969930'>vanilla</span> <span m='1970350'>binary</span>
  <span m='1970680'>search</span> <span m='1970990'>tree,</span> <span
  m='1971600'>typically</span> <span m='1972000'>what</span> <span
  m='1972170'>you're</span> <span m='1972260'>doing</span> <span
  m='1972560'>is</span> <span m='1972670'>you're</span> <span
  m='1972800'>doing</span> <span m='1973230'>either</span> <span
  m='1973300'>find</span> <span m='1973880'>or</span> <span
  m='1974050'>insert.</span> <span m='1975100'>And</span> <span
  m='1975280'>so</span> <span m='1975390'>what</span> <span
  m='1975540'>that</span> <span m='1975710'>means</span> <span
  m='1975990'>is</span> <span m='1976150'>that</span> <span m='1976680'>you
  would</span> <span m='1976850'>just</span> <span m='1977050'>return</span>
  <span m='1978230'>the</span> <span m='1978380'>pointer</span> <span
  m='1978990'>associated</span> <span m='1979560'>with</span> <span
  m='1979950'>that</span> <span m='1980210'>element.</span> </p><p><span
  m='1980870'>So</span> <span m='1981000'>if</span> <span
  m='1981050'>you're</span> <span m='1981140'>looking</span> <span
  m='1981450'>for</span> <span m='1981700'>find</span> <span
  m='1982910'>46,</span> <span m='1983560'>for</span> <span
  m='1983680'>example,</span> <span m='1984200'>on</span> <span
  m='1984390'>the</span> <span m='1984480'>tree</span> <span
  m='1984710'>that</span> <span m='1984860'>I</span> <span
  m='1984910'>have</span> <span m='1985130'>out</span> <span
  m='1985250'>there,</span> <span m='1985980'>typically</span> <span
  m='1986710'>46</span> <span m='1987410'>is</span> <span
  m='1987880'>just</span> <span m='1988060'>the</span> <span
  m='1988140'>key</span> <span m='1988310'>value.</span> <span
  m='1988660'>And</span> <span m='1988730'>there</span> <span
  m='1988780'>may</span> <span m='1988910'>be</span> <span m='1989050'>a</span>
  <span m='1989150'>record</span> <span m='1989460'>associated</span> <span
  m='1989920'>with</span> <span m='1990090'>it.</span> <span
  m='1990530'>And</span> <span m='1990710'>you would</span> <span
  m='1990840'>get</span> <span m='1990990'>a</span> <span
  m='1991060'>pointer</span> <span m='1991460'>to</span> <span
  m='1991520'>that</span> <span m='1991670'>record</span> <span
  m='1992070'>because</span> <span m='1992290'>it's</span> <span
  m='1992410'>already</span> <span m='1992670'>in</span> <span
  m='1992800'>there.</span> </p><p><span m='1994200'>At</span> <span
  m='1994340'>that</span> <span m='1994480'>point</span> <span
  m='1995005'>you</span> <span m='1995270'>can</span> <span
  m='1995400'>say</span> <span m='1995750'>I</span> <span
  m='1995890'>want</span> <span m='1996050'>to</span> <span
  m='1996110'>override.</span> <span m='1997890'>Or</span> <span
  m='1998605'>if</span> <span m='1999030'>you</span> <span
  m='1999130'>want,</span> <span m='1999810'>you</span> <span
  m='1999960'>could</span> <span m='2000070'>have</span> <span
  m='2000580'>duplicate</span> <span m='2000990'>values.</span> <span
  m='2001420'>You</span> <span m='2001820'>could</span> <span
  m='2001920'>have</span> <span m='2002170'>this,</span> <span
  m='2002640'>what's</span> <span m='2002820'>called</span> <span
  m='2002980'>a</span> <span m='2003020'>multiset.</span> <span
  m='2003890'>A</span> <span m='2003960'>multiset</span> <span
  m='2004620'>is</span> <span m='2004740'>a</span> <span m='2004810'>set</span>
  <span m='2005200'>that</span> <span m='2005310'>has</span> <span
  m='2005540'>duplicate</span> <span m='2005960'>elements.</span> <span
  m='2006770'>In</span> <span m='2006880'>that</span> <span
  m='2007050'>case,</span> <span m='2007250'>you</span> <span
  m='2007360'>would</span> <span m='2007470'>need</span> <span
  m='2007880'>a</span> <span m='2007930'>little</span> <span
  m='2008130'>more</span> <span m='2008270'>sophistication</span> <span
  m='2009400'>to</span> <span m='2009770'>differentiate</span> <span
  m='2010350'>between</span> <span m='2012150'>two</span> <span
  m='2012610'>elements</span> <span m='2013280'>that</span> <span
  m='2013470'>have</span> <span m='2013680'>the</span> <span
  m='2013750'>same</span> <span m='2014470'>key</span> <span
  m='2014710'>values.</span> </p><p><span m='2015870'>So</span> <span
  m='2015930'>you'd</span> <span m='2016020'>have</span> <span
  m='2016170'>to</span> <span m='2016240'>call</span> <span
  m='2016440'>it</span> <span m='2016530'>46a</span> <span
  m='2017010'>and</span> <span m='2017360'>46b.</span> <span
  m='2018170'>And</span> <span m='2018370'>you'd</span> <span
  m='2018510'>have</span> <span m='2018640'>to</span> <span
  m='2018680'>have</span> <span m='2018820'>some</span> <span
  m='2019000'>way</span> <span m='2019130'>of</span> <span
  m='2019230'>differentiating.</span> <span m='2021880'>Any</span> <span
  m='2022060'>other</span> <span m='2022170'>questions?</span> <span
  m='2023420'>Yeah.</span> </p><p><span m='2024258'>AUDIENCE: Wouldn't it</span>
  <span m='2024736'>be</span> <span m='2025214'>a problem</span> <span
  m='2025692'>if the tree's</span> <span m='2026170'>not</span> <span
  m='2026648'>balanced?</span> </p><p><span m='2027604'>PROFESSOR: Ah,</span>
  <span m='2029040'>great</span> <span m='2029330'>question.</span> <span
  m='2030770'>Yes,</span> <span m='2032770'>stay</span> <span
  m='2033310'>tuned.</span> </p><p><span m='2035930'>So</span> <span
  m='2036400'>I</span> <span m='2036620'>was</span> <span
  m='2036780'>careful,</span> <span m='2037650'>right?</span> <span
  m='2040520'>I</span> <span m='2040660'>guess</span> <span m='2040830'>I</span>
  <span m='2040920'>kind</span> <span m='2041150'>of</span> <span
  m='2041200'>alluded</span> <span m='2041510'>to</span> <span
  m='2041570'>the</span> <span m='2041650'>fact</span> <span
  m='2041910'>that</span> <span m='2042000'>we'd</span> <span
  m='2042170'>solved</span> <span m='2042540'>the</span> <span
  m='2042630'>runway</span> <span m='2042950'>reservation</span> <span
  m='2043520'>system.</span> <span m='2043870'>Did</span> <span
  m='2044040'>I</span> <span m='2044100'>actually</span> <span
  m='2044380'>say</span> <span m='2044620'>that</span> <span
  m='2044750'>we'd</span> <span m='2044910'>solved</span> <span
  m='2045180'>the</span> <span m='2045250'>problem?</span> <span
  m='2046540'>Did</span> <span m='2046900'>I</span> <span m='2046990'>say</span>
  <span m='2047240'>we had</span> <span m='2047390'>solved</span> <span
  m='2047520'>the</span> <span m='2047590'>problem?</span> <span
  m='2048080'>OK,</span> <span m='2048360'>so</span> <span m='2048500'>I</span>
  <span m='2048570'>did</span> <span m='2048710'>not</span> <span
  m='2048889'>lie.</span> <span m='2050610'>I</span> <span
  m='2050719'>did</span> <span m='2050860'>not</span> <span
  m='2051040'>lie.</span> </p><p><span m='2052150'>I</span> <span
  m='2052520'>said</span> <span m='2052820'>that</span> <span
  m='2053560'>the</span> <span m='2053630'>height</span> <span
  m='2053900'>of</span> <span m='2053989'>the</span> <span
  m='2054090'>tree</span> <span m='2055030'>was</span> <span
  m='2055280'>h.</span> <span m='2055730'>And</span> <span m='2055900'>I</span>
  <span m='2055980'>said</span> <span m='2056230'>that</span> <span
  m='2056389'>this</span> <span m='2056630'>was</span> <span
  m='2056929'>accomplished</span> <span m='2057420'>in</span> <span
  m='2057520'>order</span> <span m='2057920'>h</span> <span
  m='2058280'>time,</span> <span m='2058960'>right?</span> <span
  m='2059760'>Which</span> <span m='2059909'>is</span> <span
  m='2060000'>not</span> <span m='2060290'>quite</span> <span
  m='2060870'>what</span> <span m='2061060'>I</span> <span
  m='2061110'>want,</span> <span m='2062040'>which</span> <span
  m='2062219'>is</span> <span m='2062389'>really</span> <span
  m='2062610'>your</span> <span m='2062690'>question.</span> <span
  m='2063730'>So</span> <span m='2063929'>we'll</span> <span
  m='2064060'>get</span> <span m='2064210'>to</span> <span
  m='2064280'>that.</span> <span m='2065300'>So</span> <span m='2065389'>we're
  not</span> <span m='2065639'>quite</span> <span m='2065790'>done</span> <span
  m='2066050'>yet.</span> </p><p><span m='2068080'>But</span> <span
  m='2068250'>before</span> <span m='2068460'>we</span> <span
  m='2068570'>do</span> <span m='2068690'>that,</span> <span
  m='2070239'>it</span> <span m='2070360'>turns</span> <span
  m='2070590'>out</span> <span m='2070719'>that</span> <span
  m='2070860'>today's</span> <span m='2071170'>lecture</span> <span
  m='2072480'>is</span> <span m='2072679'>really</span> <span
  m='2072860'>part</span> <span m='2073100'>one</span> <span
  m='2073280'>of</span> <span m='2073400'>two.</span> <span
  m='2074909'>You'll</span> <span m='2075050'>get</span> <span
  m='2075210'>a</span> <span m='2075260'>really</span> <span
  m='2075449'>good</span> <span m='2075610'>sense</span> <span
  m='2076040'>of</span> <span m='2077699'>BST</span> <span
  m='2078389'>operations</span> <span m='2080080'>in</span> <span
  m='2080600'>today's</span> <span m='2080889'>lecture.</span> <span
  m='2081699'>But</span> <span m='2081909'>there's</span> <span
  m='2082330'>going to</span> <span m='2082449'>be</span> <span
  m='2082520'>a</span> <span m='2082570'>few</span> <span
  m='2082750'>things</span> <span m='2083070'>that--</span> <span
  m='2083900'>we</span> <span m='2083980'>can't</span> <span
  m='2084280'>cover</span> <span m='2084520'>all of</span> <span
  m='2084710'>double</span> <span m='2085000'>6</span> <span
  m='2085320'>in</span> <span m='2085389'>the</span> <span
  m='2085460'>lecture,</span> <span m='2085790'>right?</span> <span
  m='2087090'>We'd</span> <span m='2087190'>like</span> <span
  m='2087469'>to,</span> <span m='2087690'>and</span> <span
  m='2088070'>let</span> <span m='2088230'>you</span> <span
  m='2088370'>off</span> <span m='2088570'>for</span> <span
  m='2089000'>the</span> <span m='2089100'>entire</span> <span
  m='2089889'>fall,</span> <span m='2090730'>but</span> <span
  m='2090889'>that's</span> <span m='2091060'>not</span> <span
  m='2091199'>the</span> <span m='2091280'>way</span> <span
  m='2091360'>it</span> <span m='2091460'>works,</span> <span
  m='2092370'>all</span> <span m='2092449'>right?</span> </p><p><span
  m='2092940'>So</span> <span m='2093340'>it's</span> <span m='2093429'>a</span>
  <span m='2093480'>great</span> <span m='2093659'>question.</span> <span
  m='2094360'>I'll</span> <span m='2094639'>answer it</span> <span
  m='2096219'>towards</span> <span m='2096449'>the end.</span> </p><p><span
  m='2097530'>I</span> <span m='2097660'>just</span> <span
  m='2097800'>wanted</span> <span m='2097900'>you</span> <span
  m='2097920'>to</span> <span m='2097970'>say</span> <span m='2098120'>a</span>
  <span m='2098170'>little</span> <span m='2098350'>bit</span> <span
  m='2098500'>about</span> <span m='2099360'>other</span> <span
  m='2099610'>operations.</span> <span m='2101400'>There's</span> <span
  m='2102140'>many</span> <span m='2102490'>operations</span> <span
  m='2103090'>that</span> <span m='2103210'>you</span> <span
  m='2103330'>can</span> <span m='2103460'>do</span> <span m='2103800'>on</span>
  <span m='2104000'>a</span> <span m='2104350'>binary</span> <span
  m='2104770'>search</span> <span m='2105110'>tree,</span> <span
  m='2105870'>that</span> <span m='2106840'>can</span> <span
  m='2107010'>be</span> <span m='2107120'>done</span> <span
  m='2108070'>in</span> <span m='2108360'>order</span> <span
  m='2108820'>h</span> <span m='2109240'>time,</span> <span
  m='2110330'>and</span> <span m='2110480'>some even</span> <span
  m='2110940'>in</span> <span m='2111170'>constant</span> <span
  m='2111710'>time.</span> <span m='2113040'>And</span> <span
  m='2113350'>I'll</span> <span m='2113540'>put</span> <span
  m='2113650'>these</span> <span m='2113810'>in</span> <span
  m='2113890'>the</span> <span m='2113960'>notes.</span> <span
  m='2114940'>Some</span> <span m='2115060'>of</span> <span
  m='2115110'>these</span> <span m='2115290'>are</span> <span
  m='2115350'>fairly</span> <span m='2115660'>straightforward.</span>
  </p><p><span m='2116970'>Find</span> <span m='2117390'>min</span> <span
  m='2119060'>can</span> <span m='2119230'>be</span> <span
  m='2119330'>done</span> <span m='2120370'>in</span> <span
  m='2120520'>heap,</span> <span m='2121300'>in</span> <span
  m='2121440'>a</span> <span m='2121480'>min</span> <span
  m='2121700'>heap.</span> <span m='2122750'>If</span> <span
  m='2122840'>you</span> <span m='2122930'>want</span> <span
  m='2123050'>to</span> <span m='2123100'>find</span> <span
  m='2123350'>the</span> <span m='2123420'>minimum</span> <span
  m='2123740'>value,</span> <span m='2124220'>it's</span> <span
  m='2124410'>constant</span> <span m='2124990'>time.</span> <span
  m='2125450'>You</span> <span m='2125550'>just</span> <span m='2125740'>return
  the</span> <span m='2126140'>root.</span> </p><p><span m='2127730'>In</span>
  <span m='2127830'>the</span> <span m='2127920'>case</span> <span
  m='2128170'>of</span> <span m='2128290'>a</span> <span
  m='2128350'>binary</span> <span m='2128800'>search</span> <span
  m='2129160'>tree,</span> <span m='2129690'>how</span> <span
  m='2129820'>do</span> <span m='2129880'>you</span> <span
  m='2129970'>find</span> <span m='2130250'>the</span> <span
  m='2130310'>min?</span> <span m='2132040'>Someone?</span> <span
  m='2134140'>Worth</span> <span m='2134340'>a</span> <span
  m='2134450'>cushion.</span> <span m='2134800'>Yep.</span> </p><p><span
  m='2135754'>AUDIENCE: Keep going</span> <span m='2136231'>to the left?</span>
  </p><p><span m='2136710'>PROFESSOR: Keep</span> <span m='2136930'>going
  to</span> <span m='2137190'>the left.</span> <span m='2137710'>And</span>
  <span m='2137840'>how</span> <span m='2137940'>do you</span> <span
  m='2138040'>find</span> <span m='2138220'>the</span> <span
  m='2138280'>max?</span> </p><p><span m='2138660'>AUDIENCE: [INAUDIBLE].</span>
  </p><p><span m='2139445'>PROFESSOR: Keep</span> <span m='2139700'>going</span>
  <span m='2139890'>to</span> <span m='2139930'>the</span> <span
  m='2140040'>right.</span> <span m='2140580'>All</span> <span
  m='2140670'>right</span> <span m='2140850'>great,</span> <span
  m='2141330'>thank</span> <span m='2141530'>you.</span> <span
  m='2142640'>And</span> <span m='2142890'>finally,</span> <span
  m='2143560'>what</span> <span m='2143790'>complexity</span> <span
  m='2144210'>is</span> <span m='2144320'>that?</span> <span
  m='2144680'>I</span> <span m='2144860'>sort</span> <span
  m='2144930'>gave</span> <span m='2145120'>it</span> <span
  m='2145160'>away,</span> <span m='2145370'>but</span> <span
  m='2145520'>I</span> <span m='2145550'>want</span> <span m='2145700'>to</span>
  <span m='2145740'>hear it</span> <span m='2145980'>from</span> <span
  m='2146150'>you.</span> </p><p><span m='2146812'>AUDIENCE: [INAUDIBLE].</span>
  </p><p><span m='2148138'>PROFESSOR: Hm?</span> </p><p><span
  m='2148580'>AUDIENCE: It's the</span> <span m='2149022'>height</span>
  </p><p><span m='2149470'>PROFESSOR: It's the height,</span> <span
  m='2149755'>order</span> <span m='2150040'>h.</span> <span
  m='2150970'>All</span> <span m='2151040'>right,</span> <span m='2151350'>it's
  order</span> <span m='2151620'>h</span> <span m='2151850'>complexity.</span>
  <span m='2152760'>Go</span> <span m='2152900'>to</span> <span
  m='2152960'>the</span> <span m='2153060'>left</span> <span
  m='2153960'>until</span> <span m='2154100'>you hit a</span> <span
  m='2154340'>leaf,</span> <span m='2157610'>and</span> <span
  m='2159230'>until</span> <span m='2159290'>leaf</span> <span
  m='2161350'>order</span> <span m='2161660'>h</span> <span
  m='2163000'>complexity.</span> <span m='2164470'>Same</span> <span
  m='2164765'>thing</span> <span m='2165060'>for</span> <span
  m='2165160'>max.</span> </p><p><span m='2166000'>And</span> <span
  m='2166120'>then</span> <span m='2166230'>you</span> <span
  m='2166320'>can</span> <span m='2166420'>do</span> <span m='2166800'>a</span>
  <span m='2166890'>bunch</span> <span m='2167110'>of</span> <span
  m='2167180'>things.</span> <span m='2167500'>I'll</span> <span
  m='2167620'>put</span> <span m='2167750'>these</span> <span
  m='2167920'>in</span> <span m='2167990'>the</span> <span
  m='2168070'>notes.</span> </p><p><span m='2170030'>You</span> <span
  m='2170150'>can</span> <span m='2170340'>find</span> <span
  m='2171180'>things</span> <span m='2171460'>like</span> <span
  m='2171630'>next</span> <span m='2171980'>larger</span> <span
  m='2173180'>x,</span> <span m='2173960'>which</span> <span
  m='2174280'>is</span> <span m='2175490'>the</span> <span
  m='2175640'>next</span> <span m='2176050'>largest</span> <span
  m='2176550'>value</span> <span m='2177020'>beyond</span> <span
  m='2177540'>x.</span> <span m='2178940'>And</span> <span
  m='2179020'>you</span> <span m='2179120'>look</span> <span
  m='2179230'>at</span> <span m='2179280'>the</span> <span
  m='2179360'>key</span> <span m='2179580'>for</span> <span m='2179780'>x</span>
  <span m='2180440'>and</span> <span m='2180550'>you</span> <span
  m='2180640'>say,</span> <span m='2182020'>for</span> <span
  m='2182050'>example,</span> <span m='2182530'>if</span> <span
  m='2182630'>you</span> <span m='2182730'>put</span> <span
  m='2182830'>46</span> <span m='2183190'>in</span> <span
  m='2183290'>there,</span> <span m='2183870'>what's</span> <span
  m='2184150'>the</span> <span m='2184240'>next</span> <span
  m='2185080'>thing</span> <span m='2185280'>that's</span> <span
  m='2185440'>larger</span> <span m='2185840'>and</span> <span
  m='2185940'>that?</span> <span m='2188220'>In</span> <span
  m='2188680'>this</span> <span m='2189590'>tree</span> <span
  m='2189880'>here,</span> <span m='2190170'>it's</span> <span
  m='2190520'>49.</span> <span m='2191930'>But</span> <span
  m='2193220'>that's</span> <span m='2193680'>something</span> <span
  m='2194160'>which</span> <span m='2194420'>was</span> <span
  m='2194570'>trivially</span> <span m='2194970'>done</span> <span
  m='2195220'>in</span> <span m='2195300'>this</span> <span
  m='2195460'>example.</span> </p><p><span m='2196270'>But</span> <span
  m='2196580'>in</span> <span m='2196740'>general</span> <span
  m='2198210'>you</span> <span m='2198430'>can</span> <span
  m='2198530'>do</span> <span m='2198650'>this</span> <span
  m='2198890'>in</span> <span m='2198980'>order</span> <span
  m='2199220'>h</span> <span m='2199440'>time</span> <span m='2199670'>as</span>
  <span m='2199780'>well.</span> <span m='2200550'>And</span> <span
  m='2201080'>you</span> <span m='2201250'>can</span> <span
  m='2201340'>see</span> <span m='2201530'>the</span> <span
  m='2201620'>pseudocode.</span> <span m='2202280'>And</span> <span
  m='2202640'>we'll</span> <span m='2202770'>probably</span> <span
  m='2203040'>cover</span> <span m='2203260'>that</span> <span
  m='2203640'>in</span> <span m='2203820'>section</span> <span
  m='2204180'>tomorrow.</span> </p><p><span m='2206130'>What</span> <span
  m='2206250'>I</span> <span m='2206280'>want</span> <span m='2206440'>to</span>
  <span m='2206500'>do</span> <span m='2206640'>today,</span> <span
  m='2207020'>for</span> <span m='2207430'>the</span> <span
  m='2207690'>rest</span> <span m='2207910'>of</span> <span
  m='2207950'>the</span> <span m='2208000'>time</span> <span
  m='2208220'>I</span> <span m='2208270'>have</span> <span
  m='2208490'>left,</span> <span m='2209130'>is</span> <span
  m='2209260'>actually</span> <span m='2209590'>talk</span> <span
  m='2209850'>about</span> <span m='2211460'>augmented</span> <span
  m='2212460'>binary</span> <span m='2212850'>search</span> <span
  m='2213170'>trees,</span> <span m='2213580'>which</span> <span
  m='2213720'>are</span> <span m='2214680'>things</span> <span
  m='2215030'>that</span> <span m='2215490'>can</span> <span
  m='2215660'>do</span> <span m='2215860'>more</span> <span
  m='2216590'>and</span> <span m='2216740'>have</span> <span
  m='2217070'>more</span> <span m='2217400'>data</span> <span
  m='2217840'>in</span> <span m='2218050'>them</span> <span
  m='2218870'>than</span> <span m='2219100'>just</span> <span
  m='2219480'>these</span> <span m='2219770'>pointers.</span> <span
  m='2221680'>And</span> <span m='2221970'>that's</span> <span
  m='2222160'>actually</span> <span m='2222490'>something</span> <span
  m='2223780'>which</span> <span m='2224000'>should</span> <span
  m='2224200'>give</span> <span m='2224310'>you</span> <span
  m='2224430'>a</span> <span m='2224490'>sense</span> <span
  m='2224770'>of</span> <span m='2224860'>the</span> <span
  m='2224960'>richness</span> <span m='2225380'>of</span> <span
  m='2225500'>the</span> <span m='2225730'>binary</span> <span
  m='2226100'>search</span> <span m='2226410'>tree</span> <span
  m='2226590'>structure,</span> <span m='2227460'>this</span> <span
  m='2227790'>notion</span> <span m='2228070'>of</span> <span
  m='2228170'>augmentation.</span> </p><p><span m='2229640'>And</span> <span
  m='2230070'>those</span> <span m='2230240'>of</span> <span
  m='2230300'>you,</span> <span m='2230410'>again,</span> <span m='2230630'>who
  have</span> <span m='2230750'>taken</span> <span m='2230960'>double</span>
  <span m='2231250'>05,</span> <span m='2231600'>you</span> <span
  m='2231680'>know</span> <span m='2231800'>about</span> <span
  m='2232450'>design</span> <span m='2232810'>amendments.</span> <span
  m='2233760'>And</span> <span m='2233870'>so</span> <span
  m='2234330'>specifications</span> <span m='2235150'>never</span> <span
  m='2235470'>stay</span> <span m='2235660'>the</span> <span
  m='2235770'>same.</span> <span m='2236540'>I</span> <span
  m='2236600'>mean,</span> <span m='2236710'>you're</span> <span
  m='2237060'>working</span> <span m='2237390'>for</span> <span
  m='2237500'>someone,</span> <span m='2238330'>and</span> <span
  m='2238890'>they</span> <span m='2239070'>never</span> <span
  m='2239290'>really</span> <span m='2239490'>tell</span> <span
  m='2239780'>you</span> <span m='2239920'>what</span> <span
  m='2240230'>they</span> <span m='2240310'>want.</span> <span
  m='2241030'>They</span> <span m='2241580'>might,</span> <span
  m='2241940'>but</span> <span m='2242060'>they</span> <span
  m='2242150'>change</span> <span m='2242360'>their</span> <span
  m='2242480'>mind.</span> </p><p><span m='2244250'>So</span> <span
  m='2244610'>in</span> <span m='2244750'>this</span> <span
  m='2244940'>case,</span> <span m='2245270'>we're</span> <span
  m='2245370'>going</span> <span m='2245470'>to</span> <span
  m='2245570'>change</span> <span m='2245650'>our mind.</span> <span
  m='2246700'>And</span> <span m='2247130'>so</span> <span
  m='2247260'>we've</span> <span m='2247420'>done</span> <span
  m='2247650'>this</span> <span m='2248460'>to</span> <span
  m='2248550'>the</span> <span m='2248620'>extent</span> <span
  m='2248970'>that</span> <span m='2249530'>we</span> <span
  m='2249650'>can</span> <span m='2249800'>cover</span> <span
  m='2250120'>all</span> <span m='2250250'>of</span> <span
  m='2250350'>these</span> <span m='2250620'>in</span> <span
  m='2250740'>order</span> <span m='2251110'>h</span> <span
  m='2251460'>time.</span> <span m='2252330'>And</span> <span
  m='2252540'>let's</span> <span m='2252700'>say</span> <span
  m='2252830'>that</span> <span m='2253000'>now</span> <span
  m='2253210'>the</span> <span m='2253340'>problem</span> <span
  m='2253700'>specification</span> <span m='2255110'>changed</span> <span
  m='2256010'>on</span> <span m='2256210'>us.</span> <span
  m='2256810'>There's</span> <span m='2256980'>an</span> <span
  m='2257050'>additional</span> <span m='2257470'>requirement</span> <span
  m='2258570'>that</span> <span m='2258770'>we're</span> <span
  m='2258960'>asked</span> <span m='2260640'>to</span> <span
  m='2260800'>solve.</span> </p><p><span m='2262250'>And</span> <span
  m='2262370'>so</span> <span m='2262450'>you</span> <span
  m='2262590'>sort</span> <span m='2262720'>of</span> <span
  m='2262780'>committed</span> <span m='2263190'>to</span> <span
  m='2265480'>BST</span> <span m='2265720'>structures.</span> <span
  m='2267060'>But</span> <span m='2267180'>now</span> <span
  m='2267370'>we</span> <span m='2267480'>have</span> <span
  m='2267860'>an</span> <span m='2267970'>additional</span> <span
  m='2268380'>requirement.</span> <span m='2270150'>And</span> <span
  m='2270850'>the</span> <span m='2270980'>new</span> <span
  m='2271140'>requirement</span> <span m='2274730'>is</span> <span
  m='2275020'>that</span> <span m='2276100'>we</span> <span
  m='2276280'>be</span> <span m='2276530'>able</span> <span
  m='2276710'>to</span> <span m='2276780'>compute</span> <span
  m='2278060'>rank</span> <span m='2278650'>t.</span> <span
  m='2280100'>And</span> <span m='2280550'>rank</span> <span
  m='2280805'>t</span> <span m='2281210'>is</span> <span m='2282060'>how</span>
  <span m='2282390'>many</span> <span m='2284560'>planes</span> <span
  m='2288250'>are</span> <span m='2288430'>scheduled</span> <span
  m='2288970'>to</span> <span m='2289090'>land</span> <span
  m='2296470'>at</span> <span m='2297300'>times</span> <span
  m='2299210'>less</span> <span m='2299430'>than</span> <span
  m='2299560'>or</span> <span m='2299650'>equal</span> <span
  m='2299900'>to</span> <span m='2300020'>t.</span> </p><p><span
  m='2302470'>So</span> <span m='2302900'>perfectly</span> <span
  m='2303260'>reasonable</span> <span m='2303620'>question.</span> <span
  m='2304040'>It</span> <span m='2304490'>wasn't</span> <span
  m='2304770'>part</span> <span m='2304960'>of</span> <span
  m='2305030'>the</span> <span m='2305110'>original</span> <span
  m='2305390'>spec.</span> <span m='2306740'>You</span> <span
  m='2307010'>now</span> <span m='2307210'>have</span> <span
  m='2307330'>built</span> <span m='2307850'>your</span> <span
  m='2308190'>BST</span> <span m='2308390'>data</span> <span
  m='2308960'>structure,</span> <span m='2309810'>you</span> <span
  m='2309900'>thought</span> <span m='2310090'>you</span> <span
  m='2310200'>were</span> <span m='2310280'>done.</span> <span
  m='2311480'>Sorry,</span> <span m='2311990'>you</span> <span
  m='2312210'>aren't.</span> <span m='2313340'>You've</span> <span
  m='2313540'>got</span> <span m='2313640'>to</span> <span m='2313700'>do</span>
  <span m='2313810'>this</span> <span m='2314010'>extra</span> <span
  m='2314290'>stuff.</span> </p><p><span m='2315730'>So</span> <span
  m='2316270'>that's</span> <span m='2316660'>the</span> <span
  m='2316740'>notion</span> <span m='2317060'>of</span> <span
  m='2317190'>augmentation,</span> <span m='2319540'>which</span> <span
  m='2320680'>we're</span> <span m='2320850'>going</span> <span
  m='2320950'>to</span> <span m='2320990'>use</span> <span
  m='2321230'>this</span> <span m='2321440'>is</span> <span
  m='2321550'>an</span> <span m='2321620'>example</span> <span
  m='2322450'>of</span> <span m='2322530'>how we're going to</span> <span
  m='2322960'>augment</span> <span m='2323460'>the</span> <span
  m='2323790'>BST</span> <span m='2324260'>structure.</span> <span
  m='2325200'>And</span> <span m='2325540'>oh,</span> <span
  m='2325680'>by</span> <span m='2325840'>the</span> <span
  m='2325930'>way,</span> <span m='2326460'>I</span> <span
  m='2326570'>don't</span> <span m='2326700'>want</span> <span
  m='2326870'>you</span> <span m='2326950'>to</span> <span
  m='2327010'>change</span> <span m='2327250'>the</span> <span
  m='2327320'>complexity</span> <span m='2328410'>from</span> <span
  m='2328630'>order</span> <span m='2328870'>h.</span> <span m='2330140'>And
  we</span> <span m='2330540'>eventually</span> <span m='2330950'>will get
  to</span> <span m='2331130'>order</span> <span m='2331330'>log</span> <span
  m='2331590'>n,</span> <span m='2332080'>but</span> <span
  m='2332735'>don't</span> <span m='2333040'>go</span> <span
  m='2333290'>change</span> <span m='2333680'>something</span> <span
  m='2333960'>that</span> <span m='2334050'>was</span> <span
  m='2334170'>logarithmic</span> <span m='2335340'>to</span> <span
  m='2335590'>linear.</span> <span m='2336630'>That</span> <span
  m='2336800'>would</span> <span m='2336880'>be</span> <span
  m='2337020'>bad.</span> </p><p><span m='2339970'>So</span> <span
  m='2340180'>let's</span> <span m='2340390'>talk</span> <span
  m='2340560'>about</span> <span m='2340740'>how</span> <span
  m='2340870'>you</span> <span m='2341040'>do</span> <span
  m='2341230'>this.</span> <span m='2341690'>And</span> <span m='2341960'>I
  don't</span> <span m='2342040'>think</span> <span m='2342140'>we</span> <span
  m='2342240'>need</span> <span m='2342400'>this</span> <span
  m='2342570'>anymore.</span> <span m='2347830'>So</span> <span
  m='2347970'>the</span> <span m='2348050'>first</span> <span
  m='2348290'>thing</span> <span m='2348420'>we</span> <span
  m='2348500'>need</span> <span m='2348660'>to</span> <span
  m='2348720'>do</span> <span m='2348930'>is</span> <span m='2349290'>add</span>
  <span m='2349620'>a</span> <span m='2349680'>little</span> <span
  m='2349910'>bit</span> <span m='2350650'>more</span> <span
  m='2351000'>information</span> <span m='2352590'>to</span> <span
  m='2355040'>the</span> <span m='2355170'>node</span> <span
  m='2355500'>structure.</span> <span m='2360250'>And</span> <span
  m='2360970'>what</span> <span m='2361130'>we're</span> <span
  m='2361240'>going</span> <span m='2361400'>to</span> <span
  m='2361470'>do</span> <span m='2361730'>is</span> <span
  m='2367950'>augment</span> <span m='2368370'>the</span> <span
  m='2368470'>BST</span> <span m='2368910'>structure.</span> <span
  m='2374130'>And</span> <span m='2374280'>we're</span> <span
  m='2374370'>going</span> <span m='2374490'>to</span> <span
  m='2374550'>add</span> <span m='2375730'>one</span> <span
  m='2376010'>little</span> <span m='2377240'>number</span> <span
  m='2378510'>associated</span> <span m='2378980'>with</span> <span
  m='2379140'>each</span> <span m='2379450'>node,</span> <span
  m='2380380'>that</span> <span m='2380920'>looks</span> <span
  m='2381300'>at</span> <span m='2383500'>the</span> <span
  m='2383610'>number</span> <span m='2383820'>of</span> <span
  m='2383880'>nodes</span> <span m='2384170'>below</span> <span
  m='2384480'>it.</span> </p><p><span m='2385670'>So</span> <span
  m='2385860'>in</span> <span m='2386030'>particular,</span> <span
  m='2388270'>let's</span> <span m='2388550'>say</span> <span
  m='2388710'>that</span> <span m='2388900'>I</span> <span
  m='2389000'>have</span> <span m='2391160'>49,</span> <span
  m='2391870'>46,</span> <span m='2395690'>let's</span> <span
  m='2396000'>just</span> <span m='2396090'>say</span> <span
  m='2396310'>49,</span> <span m='2396790'>46</span> <span
  m='2398910'>for</span> <span m='2399070'>now.</span> <span
  m='2399500'>And</span> <span m='2399710'>over</span> <span
  m='2399890'>here</span> <span m='2401030'>I</span> <span
  m='2401190'>have</span> <span m='2401540'>79,</span> <span
  m='2403720'>64,</span> <span m='2405970'>and</span> <span
  m='2406360'>83.</span> </p><p><span m='2409640'>I'm</span> <span
  m='2409790'>going</span> <span m='2409910'>to</span> <span
  m='2409960'>modify--</span> <span m='2410780'>I'm going</span> <span
  m='2411135'>to have</span> <span m='2411490'>an</span> <span
  m='2411550'>extra</span> <span m='2412410'>number</span> <span
  m='2412770'>associated</span> <span m='2413270'>with</span> <span
  m='2413880'>each</span> <span m='2414140'>of</span> <span
  m='2414270'>these</span> <span m='2416210'>nodes.</span> <span
  m='2417060'>And</span> <span m='2417290'>I'm just</span> <span
  m='2417360'>going</span> <span m='2417470'>to</span> <span
  m='2417510'>write</span> <span m='2417690'>that</span> <span
  m='2417830'>number</span> <span m='2418060'>on</span> <span
  m='2418560'>the</span> <span m='2419620'>outside</span> <span
  m='2419940'>of</span> <span m='2420010'>the</span> <span
  m='2420080'>node.</span> <span m='2420830'>And</span> <span m='2420960'>you
  can</span> <span m='2421030'>just</span> <span m='2421240'>imagine</span>
  <span m='2421580'>that</span> <span m='2421740'>now</span> <span
  m='2422110'>the</span> <span m='2422270'>key</span> <span
  m='2422470'>value</span> <span m='2422920'>has</span> <span
  m='2423640'>two</span> <span m='2423790'>numbers</span> <span
  m='2424160'>associated</span> <span m='2424630'>with</span> <span
  m='2424780'>it--</span> <span m='2425510'>the</span> <span
  m='2425720'>thing</span> <span m='2425880'>that</span> <span
  m='2425990'>I</span> <span m='2426050'>write</span> <span
  m='2426250'>inside</span> <span m='2426830'>the</span> <span
  m='2427000'>node,</span> <span m='2427420'>and</span> <span
  m='2427820'>what</span> <span m='2428030'>I</span> <span
  m='2428100'>write</span> <span m='2428260'>outside</span> <span
  m='2428600'>of</span> <span m='2428730'>it.</span> </p><p><span
  m='2430450'>So</span> <span m='2431560'>in</span> <span
  m='2431730'>particular,</span> <span m='2432635'>when</span> <span
  m='2432950'>I</span> <span m='2433040'>do</span> <span
  m='2433210'>insert</span> <span m='2434910'>or</span> <span
  m='2435100'>delete</span> <span m='2436260'>I'm</span> <span
  m='2436360'>going</span> <span m='2436470'>to</span> <span
  m='2436510'>be</span> <span m='2436600'>modifying</span> <span
  m='2437180'>these</span> <span m='2437370'>numbers.</span> <span
  m='2440480'>And</span> <span m='2441070'>these</span> <span
  m='2441290'>are</span> <span m='2441790'>size</span> <span
  m='2442400'>numbers.</span> <span m='2444470'>And</span> <span
  m='2444750'>what</span> <span m='2444880'>do</span> <span m='2444970'>I</span>
  <span m='2445040'>mean</span> <span m='2445230'>by</span> <span
  m='2445370'>that?</span> <span m='2446210'>Well</span> <span
  m='2447290'>these</span> <span m='2447540'>numbers</span> <span
  m='2447940'>correspond</span> <span m='2448530'>to</span> <span
  m='2450900'>subtree</span> <span m='2451480'>sizes.</span> <span
  m='2457470'>So</span> <span m='2457720'>the</span> <span
  m='2457810'>subtree</span> <span m='2458220'>size</span> <span
  m='2458570'>here</span> <span m='2458830'>is</span> <span
  m='2458940'>1,</span> <span m='2459570'>1,</span> <span m='2460130'>1.</span>
  </p><p><span m='2461180'>So</span> <span m='2461380'>as</span> <span
  m='2461680'>I'm</span> <span m='2461810'>building</span> <span
  m='2462260'>this</span> <span m='2462490'>tree</span> <span
  m='2462760'>up</span> <span m='2463950'>I'm</span> <span
  m='2464100'>going</span> <span m='2464340'>to</span> <span m='2464560'>create
  an</span> <span m='2464910'>augmented</span> <span m='2465460'>BST</span>
  <span m='2465880'>structure,</span> <span m='2466450'>and</span> <span
  m='2466550'>I've</span> <span m='2466680'>modified</span> <span
  m='2467160'>insert</span> <span m='2467270'>and</span> <span
  m='2467660'>delete</span> <span m='2468400'>so</span> <span
  m='2468980'>they</span> <span m='2469140'>do</span> <span
  m='2469300'>some</span> <span m='2469450'>extra</span> <span
  m='2469760'>work.</span> <span m='2470620'>So</span> <span
  m='2470660'>let's</span> <span m='2470840'>say,</span> <span
  m='2470980'>for</span> <span m='2471110'>argument's</span> <span
  m='2471430'>sake,</span> <span m='2471780'>that</span> <span
  m='2475070'>I've</span> <span m='2475610'>added</span> <span
  m='2475920'>this</span> <span m='2476120'>in</span> <span m='2476220'>sort of
  a</span> <span m='2476460'>bottom</span> <span m='2476790'>up</span> <span
  m='2476950'>fashion.</span> <span m='2478090'>And</span> <span
  m='2478590'>what</span> <span m='2478760'>I</span> <span
  m='2478820'>have</span> <span m='2479220'>are</span> <span
  m='2479760'>these</span> <span m='2480110'>particular</span> <span
  m='2480420'>subtree</span> <span m='2480780'>sizes.</span> </p><p><span
  m='2481390'>All</span> <span m='2481570'>of</span> <span
  m='2481640'>these</span> <span m='2481820'>should</span> <span
  m='2482000'>make</span> <span m='2482170'>sense.</span> <span
  m='2483110'>This</span> <span m='2484170'>has</span> <span
  m='2484910'>just</span> <span m='2485140'>a</span> <span
  m='2485190'>single</span> <span m='2485450'>node,</span> <span
  m='2486260'>same</span> <span m='2486500'>thing</span> <span
  m='2486630'>here.</span> <span m='2487240'>So</span> <span
  m='2487460'>this</span> <span m='2487640'>subtree</span> <span
  m='2487780'>sizes</span> <span m='2488400'>associated</span> <span
  m='2488810'>with</span> <span m='2488940'>these</span> <span
  m='2489150'>nodes</span> <span m='2489420'>are</span> <span
  m='2489490'>all</span> <span m='2489700'>1.</span> </p><p><span
  m='2491180'>The</span> <span m='2491330'>subtree</span> <span
  m='2491550'>size</span> <span m='2491845'>associated</span> <span
  m='2492230'>with</span> <span m='2492510'>79</span> <span
  m='2493740'>is</span> <span m='2494040'>3,</span> <span
  m='2494870'>because</span> <span m='2495060'>you're counting</span> <span
  m='2495560'>79</span> <span m='2496420'>and</span> <span m='2496710'>64</span>
  <span m='2497660'>and</span> <span m='2497800'>83.</span> <span
  m='2499060'>And the</span> <span m='2499260'>subtree</span> <span
  m='2499460'>size</span> <span m='2499960'>associated</span> <span
  m='2500340'>with</span> <span m='2500490'>49</span> <span
  m='2501200'>is</span> <span m='2501370'>5,</span> <span
  m='2502820'>because</span> <span m='2502990'>you're</span> <span
  m='2503080'>counting</span> <span m='2503390'>everything</span> <span
  m='2503700'>underneath</span> <span m='2504070'>it.</span> </p><p><span
  m='2504930'>How</span> <span m='2505100'>did</span> <span
  m='2505190'>we</span> <span m='2505310'>get</span> <span
  m='2505490'>these</span> <span m='2505680'>numbers?</span> <span
  m='2506730'>Well</span> <span m='2506930'>you</span> <span
  m='2507040'>want</span> <span m='2507140'>to</span> <span
  m='2507190'>think</span> <span m='2507350'>about</span> <span
  m='2507550'>this</span> <span m='2507770'>as</span> <span
  m='2507930'>you</span> <span m='2508040'>started</span> <span
  m='2508420'>with</span> <span m='2508580'>an</span> <span
  m='2509000'>empty</span> <span m='2509440'>set,</span> <span
  m='2510120'>and</span> <span m='2510310'>you</span> <span
  m='2510420'>kept</span> <span m='2510650'>inserting</span> <span
  m='2511160'>into</span> <span m='2511400'>it.</span> <span
  m='2511530'>And</span> <span m='2511670'>you were</span> <span
  m='2511830'>doing</span> <span m='2512100'>a</span> <span
  m='2512160'>sequence</span> <span m='2512590'>of</span> <span
  m='2512690'>insert</span> <span m='2513120'>and</span> <span
  m='2513250'>delete</span> <span m='2513540'>operations.</span> <span
  m='2514650'>And</span> <span m='2514760'>if</span> <span m='2514870'>I</span>
  <span m='2514970'>explain</span> <span m='2515480'>to</span> <span
  m='2515520'>you</span> <span m='2516210'>how</span> <span
  m='2516650'>an</span> <span m='2516780'>insert</span> <span
  m='2517240'>operation</span> <span m='2518350'>modifies</span> <span
  m='2519090'>these</span> <span m='2519320'>numbers,</span> <span
  m='2520410'>that</span> <span m='2520750'>is</span> <span
  m='2520920'>pretty</span> <span m='2521070'>much</span> <span
  m='2521270'>all</span> <span m='2521440'>you</span> <span
  m='2521530'>need.</span> <span m='2522380'>And</span> <span
  m='2522600'>of</span> <span m='2522720'>course,</span> <span
  m='2523040'>analogously,</span> <span m='2523570'>for</span> <span
  m='2523820'>a</span> <span m='2524120'>delete</span> <span
  m='2524440'>operation.</span> </p><p><span m='2525970'>So</span> <span
  m='2526230'>what</span> <span m='2526360'>would</span> <span
  m='2526470'>happen</span> <span m='2526830'>for,</span> <span
  m='2528370'>let's</span> <span m='2528580'>say</span> <span
  m='2528740'>you</span> <span m='2529010'>wanted to</span> <span
  m='2529280'>insert</span> <span m='2529820'>43?</span> <span
  m='2531180'>You</span> <span m='2531280'>would</span> <span
  m='2532460'>insert</span> <span m='2532870'>43</span> <span
  m='2533490'>at</span> <span m='2533610'>this</span> <span
  m='2533800'>point.</span> <span m='2535160'>And</span> <span
  m='2535770'>what</span> <span m='2535960'>you'd</span> <span
  m='2536070'>do</span> <span m='2536370'>is</span> <span m='2537280'>you</span>
  <span m='2537940'>follow</span> <span m='2538290'>the</span> <span
  m='2538500'>insertion</span> <span m='2539030'>path</span> <span
  m='2539450'>just</span> <span m='2539710'>like</span> <span
  m='2539870'>you</span> <span m='2539960'>did</span> <span
  m='2540150'>before.</span> <span m='2541160'>But</span> <span
  m='2541520'>when</span> <span m='2541850'>you're</span> <span
  m='2542010'>following</span> <span m='2542460'>that</span> <span
  m='2542660'>path</span> <span m='2543430'>you're</span> <span
  m='2543580'>going</span> <span m='2543670'>to</span> <span
  m='2543710'>increment</span> <span m='2545800'>the</span> <span
  m='2545950'>nodes</span> <span m='2546320'>that</span> <span
  m='2546450'>you're</span> <span m='2546620'>seeing</span> <span
  m='2547550'>by</span> <span m='2547845'>1.</span> </p><p><span
  m='2548570'>So</span> <span m='2548750'>you're</span> <span m='2548890'>going
  to</span> <span m='2549000'>add</span> <span m='2549470'>43</span> <span
  m='2550030'>to</span> <span m='2550140'>this.</span> <span
  m='2552340'>And</span> <span m='2555860'>you'd</span> <span
  m='2556180'>add</span> <span m='2556940'>5</span> <span
  m='2557300'>plus</span> <span m='2557530'>1,</span> <span
  m='2558290'>because</span> <span m='2558520'>you</span> <span
  m='2558610'>see</span> <span m='2558810'>49.</span> <span
  m='2560520'>And</span> <span m='2561010'>then</span> <span m='2561160'>you
  would</span> <span m='2561310'>go</span> <span m='2561540'>down</span> <span
  m='2562550'>and</span> <span m='2562780'>you'd</span> <span
  m='2562900'>see</span> <span m='2563400'>46.</span> <span
  m='2565140'>And</span> <span m='2565370'>so you'd</span> <span
  m='2565550'>add</span> <span m='2565915'>1 to</span> <span
  m='2566280'>that.</span> <span m='2567170'>And</span> <span
  m='2567550'>then</span> <span m='2567760'>finally,</span> <span
  m='2568190'>you</span> <span m='2568330'>add</span> <span
  m='2568550'>43</span> <span m='2569130'>and</span> <span
  m='2569220'>you</span> <span m='2569610'>assign--</span> <span
  m='2570040'>since</span> <span m='2570250'>it's</span> <span
  m='2570390'>a</span> <span m='2570460'>leaf--</span> <span
  m='2571410'>you'd</span> <span m='2571640'>assign</span> <span
  m='2572050'>to</span> <span m='2572120'>value</span> <span
  m='2572800'>corresponding</span> <span m='2573260'>to</span> <span
  m='2573320'>the</span> <span m='2573410'>subtree</span> <span
  m='2573870'>size</span> <span m='2574380'>of</span> <span
  m='2574520'>this</span> <span m='2574680'>new</span> <span
  m='2574870'>node</span> <span m='2575190'>that</span> <span
  m='2575400'>you</span> <span m='2575490'>put</span> <span
  m='2575670'>in</span> <span m='2575790'>there,</span> <span
  m='2576130'>to</span> <span m='2576400'>be</span> <span m='2576510'>1.</span>
  </p><p><span m='2578370'>It</span> <span m='2578490'>guess</span> <span
  m='2578730'>a</span> <span m='2578790'>little,</span> <span
  m='2579350'>teensy</span> <span m='2579760'>bit</span> <span
  m='2579990'>more</span> <span m='2580180'>complicated</span> <span
  m='2581200'>when</span> <span m='2581300'>you</span> <span
  m='2581410'>want</span> <span m='2581530'>to</span> <span
  m='2581600'>do</span> <span m='2581690'>the</span> <span m='2581810'>k</span>
  <span m='2582160'>minute</span> <span m='2582340'>check.</span> <span
  m='2584110'>But</span> <span m='2585330'>from</span> <span
  m='2585520'>a</span> <span m='2585570'>complexity</span> <span
  m='2586130'>standpoint,</span> <span m='2586700'>if</span> <span
  m='2586780'>you're</span> <span m='2586860'>not</span> <span
  m='2587040'>worried</span> <span m='2587260'>about</span> <span
  m='2587460'>constant</span> <span m='2587920'>factors,</span> <span
  m='2588860'>you</span> <span m='2588980'>can</span> <span
  m='2589080'>just</span> <span m='2589320'>say,</span> <span
  m='2589720'>you</span> <span m='2589850'>know</span> <span
  m='2589960'>what?</span> <span m='2590700'>I'm</span> <span
  m='2590880'>going</span> <span m='2591010'>to</span> <span
  m='2591080'>first</span> <span m='2591470'>run</span> <span
  m='2592540'>the</span> <span m='2592870'>regular</span> <span
  m='2593320'>insert,</span> <span m='2594320'>ignoring</span> <span
  m='2594890'>the</span> <span m='2595000'>subtree</span> <span
  m='2595470'>sizes.</span> <span m='2596680'>And</span> <span
  m='2597090'>if</span> <span m='2597240'>it</span> <span
  m='2597380'>fails,</span> <span m='2598420'>I'm</span> <span
  m='2598600'>done.</span> <span m='2599500'>Because</span> <span
  m='2599790'>I'm</span> <span m='2599900'>not</span> <span
  m='2600080'>going</span> <span m='2600200'>to</span> <span
  m='2600240'>modify</span> <span m='2600840'>the</span> <span
  m='2600950'>BST,</span> <span m='2602100'>and</span> <span
  m='2602270'>I'm</span> <span m='2602370'>done.</span> <span
  m='2602870'>I'm</span> <span m='2602990'>not</span> <span
  m='2603130'>going</span> <span m='2603210'>to</span> <span
  m='2603250'>have</span> <span m='2603380'>to</span> <span
  m='2603430'>modify</span> <span m='2603870'>the</span> <span
  m='2603980'>subtree</span> <span m='2604330'>sizes.</span> </p><p><span
  m='2605270'>If</span> <span m='2605420'>it</span> <span
  m='2605530'>succeeds,</span> <span m='2606870'>then</span> <span
  m='2607120'>I'm</span> <span m='2607230'>going</span> <span
  m='2607350'>to</span> <span m='2607390'>go</span> <span m='2607610'>in,</span>
  <span m='2607930'>and</span> <span m='2608040'>I</span> <span
  m='2608110'>know</span> <span m='2608400'>now</span> <span
  m='2608800'>that</span> <span m='2608990'>I</span> <span
  m='2609050'>can</span> <span m='2609240'>increment</span> <span
  m='2610500'>each</span> <span m='2610730'>of</span> <span
  m='2610820'>these</span> <span m='2611020'>nodes,</span> <span
  m='2611380'>because</span> <span m='2611610'>I</span> <span
  m='2611680'>know</span> <span m='2612010'>I'm</span> <span
  m='2612120'>going</span> <span m='2612290'>to</span> <span
  m='2612340'>be</span> <span m='2612460'>successful.</span> <span
  m='2613990'>So</span> <span m='2614110'>that's</span> <span m='2614290'>sort
  of</span> <span m='2614420'>a</span> <span m='2614490'>trivial</span> <span
  m='2614900'>way</span> <span m='2615140'>of</span> <span
  m='2615220'>solving</span> <span m='2615560'>this</span> <span
  m='2615690'>problem,</span> <span m='2616350'>that</span> <span
  m='2616480'>from</span> <span m='2616620'>an</span> <span
  m='2616700'>asymptotic</span> <span m='2617300'>complexity</span> <span
  m='2617810'>standpoint</span> <span m='2618850'>gives</span> <span
  m='2619060'>you your</span> <span m='2619320'>order</span> <span
  m='2619760'>h</span> <span m='2620500'>augmented</span> <span
  m='2621320'>insert.</span> <span m='2622300'>That</span> <span
  m='2622420'>make</span> <span m='2622570'>sense?</span> </p><p><span
  m='2624500'>Now</span> <span m='2624590'>you</span> <span
  m='2624700'>could</span> <span m='2624810'>do</span> <span
  m='2624940'>something</span> <span m='2625330'>better</span> <span
  m='2625590'>than</span> <span m='2625720'>that.</span> <span
  m='2626020'>I</span> <span m='2626090'>mean,</span> <span m='2626250'>I</span>
  <span m='2626300'>would</span> <span m='2627310'>urge</span> <span
  m='2627540'>you,</span> <span m='2628010'>if</span> <span
  m='2628050'>you</span> <span m='2628250'>had</span> <span
  m='2628540'>wrote</span> <span m='2628870'>something</span> <span
  m='2629550'>that--</span> <span m='2630500'>we</span> <span m='2630680'>asked
  you to</span> <span m='2630970'>write</span> <span
  m='2631200'>something</span> <span m='2631450'>like</span> <span
  m='2631640'>this,</span> <span m='2632130'>to</span> <span
  m='2632390'>create</span> <span m='2632690'>a</span> <span
  m='2632760'>single</span> <span m='2633170'>procedure</span> <span
  m='2634120'>that</span> <span m='2634830'>essentially</span> <span
  m='2635290'>uses</span> <span m='2635770'>a</span> <span
  m='2635980'>recursion</span> <span m='2636950'>appropriately</span> <span
  m='2637720'>to</span> <span m='2638150'>do</span> <span m='2638320'>the</span>
  <span m='2638570'>right</span> <span m='2638620'>thing</span> <span
  m='2639100'>in</span> <span m='2639270'>one</span> <span
  m='2639590'>pass</span> <span m='2640500'>through</span> <span
  m='2640650'>the</span> <span m='2640760'>BST.</span> <span
  m='2641590'>And</span> <span m='2641700'>we'll</span> <span
  m='2641830'>talk</span> <span m='2642010'>about</span> <span
  m='2642220'>things</span> <span m='2642410'>like</span> <span
  m='2642580'>that</span> <span m='2643430'>as</span> <span
  m='2643610'>we</span> <span m='2643720'>go</span> <span
  m='2643840'>along</span> <span m='2644170'>in</span> <span
  m='2644570'>sections,</span> <span m='2645080'>and</span> <span
  m='2646160'>possibly</span> <span m='2646435'>in</span> <span
  m='2646710'>lectures.</span> </p><p><span m='2648210'>So</span> <span
  m='2648310'>that's</span> <span m='2648650'>the</span> <span
  m='2648960'>subtree</span> <span m='2650150'>insert</span> <span
  m='2650660'>delete.</span> <span m='2651610'>Everyone</span> <span
  m='2651920'>buy</span> <span m='2652080'>that?</span> <span
  m='2652265'>Yeah,</span> <span m='2652450'>question</span> <span
  m='2652730'>back</span> <span m='2652890'>there.</span> </p><p><span
  m='2653764'>AUDIENCE: If I wanted to</span> <span m='2654258'>delete a</span>
  <span m='2654752'>number,</span> <span m='2654999'>like</span> <span
  m='2655246'>let's say 79--</span> </p><p><span m='2656234'>PROFESSOR:
  Yep?</span> </p><p><span m='2656728'>AUDIENCE: --would we</span> <span
  m='2657222'>have to</span> <span m='2658210'>take it out</span> <span
  m='2658704'>and then rewrite</span> <span m='2659198'>the entire</span> <span
  m='2659692'>BST?</span> </p><p><span m='2661010'>PROFESSOR: What</span> <span
  m='2661200'>you'd</span> <span m='2661290'>have</span> <span
  m='2661470'>to</span> <span m='2661560'>do</span> <span m='2661720'>is</span>
  <span m='2662000'>a</span> <span m='2662430'>bubble</span> <span
  m='2662840'>up</span> <span m='2663460'>pointers.</span> <span
  m='2664030'>So</span> <span m='2664130'>you'd</span> <span
  m='2664340'>have</span> <span m='2664430'>to</span> <span
  m='2664500'>actually</span> <span m='2664850'>have</span> <span
  m='2665460'>64</span> <span m='2667780'>connected</span> <span
  m='2668960'>to--</span> <span m='2669660'>what</span> <span
  m='2670130'>will</span> <span m='2670310'>happen</span> <span
  m='2670640'>is</span> <span m='2670740'>83</span> <span
  m='2671230'>would</span> <span m='2671390'>actually</span> <span
  m='2671680'>come</span> <span m='2671870'>up,</span> <span
  m='2673960'>and</span> <span m='2674320'>you</span> <span
  m='2674400'>would</span> <span m='2674550'>essentially</span> <span
  m='2675480'>have</span> <span m='2675710'>some</span> <span
  m='2675940'>thing--</span> <span m='2676280'>this</span> <span
  m='2676410'>is</span> <span m='2676470'>not</span> <span
  m='2676630'>quite</span> <span m='2676850'>how</span> <span
  m='2676960'>it</span> <span m='2677040'>works--</span> <span
  m='2677370'>but</span> <span m='2677860'>83</span> <span
  m='2678280'>would</span> <span m='2678440'>move</span> <span
  m='2678580'>up</span> <span m='2678780'>and</span> <span
  m='2678870'>you'd</span> <span m='2678960'>have</span> <span
  m='2679110'>64</span> <span m='2679620'>to</span> <span m='2679700'>the</span>
  <span m='2679780'>left.</span> <span m='2680410'>That's</span> <span
  m='2680560'>what would</span> <span m='2680760'>happened</span> <span
  m='2681040'>for</span> <span m='2681140'>delete</span> <span
  m='2681470'>in</span> <span m='2681560'>this</span> <span
  m='2681730'>case.</span> </p><p><span m='2683310'>So</span> <span
  m='2683490'>you would</span> <span m='2683650'>have</span> <span
  m='2683820'>to</span> <span m='2683890'>move</span> <span
  m='2684100'>pointers</span> <span m='2684580'>in</span> <span
  m='2684650'>the</span> <span m='2684730'>case</span> <span
  m='2684920'>of</span> <span m='2685020'>delete.</span> <span
  m='2687360'>And</span> <span m='2688540'>we're</span> <span
  m='2688890'>not</span> <span m='2688940'>done</span> <span
  m='2689090'>with</span> <span m='2689200'>binary</span> <span
  m='2689670'>search tree</span> <span m='2690110'>operations</span> <span
  m='2690670'>from</span> <span m='2690830'>a</span> <span
  m='2691200'>standpoint</span> <span m='2691740'>of</span> <span
  m='2692120'>teaching</span> <span m='2692390'>you</span> <span
  m='2692540'>about</span> <span m='2692850'>them.</span> <span
  m='2693580'>We'll</span> <span m='2693700'>talk</span> <span
  m='2693880'>about</span> <span m='2694120'>them</span> <span
  m='2694460'>not</span> <span m='2694620'>just</span> <span
  m='2694830'>in</span> <span m='2694900'>today's</span> <span
  m='2695170'>lecture,</span> <span m='2695520'>but</span> <span
  m='2695650'>later</span> <span m='2695910'>as</span> <span
  m='2696030'>well.</span> </p><p><span m='2698670'>So</span> <span
  m='2699360'>there's</span> <span m='2699540'>one</span> <span
  m='2699710'>thing</span> <span m='2699850'>missing</span> <span
  m='2700160'>here,</span> <span m='2700380'>though,</span> <span
  m='2701020'>which</span> <span m='2701250'>is</span> <span
  m='2701550'>I</span> <span m='2701650'>haven't</span> <span
  m='2701900'>quite</span> <span m='2702300'>figured</span> <span
  m='2702620'>out--</span> <span m='2703240'>I've</span> <span
  m='2703390'>told</span> <span m='2703640'>you</span> <span
  m='2703770'>how</span> <span m='2703930'>these</span> <span
  m='2704100'>subtree</span> <span m='2704460'>sizes</span> <span
  m='2704870'>work.</span> <span m='2705690'>But</span> <span
  m='2706970'>it's</span> <span m='2707150'>not</span> <span
  m='2707810'>completely</span> <span m='2708270'>clear,</span> <span
  m='2708550'>this</span> <span m='2708650'>is</span> <span
  m='2708770'>the</span> <span m='2708830'>last</span> <span
  m='2709110'>thing</span> <span m='2709230'>we</span> <span
  m='2709310'>have</span> <span m='2709450'>to</span> <span
  m='2709550'>do,</span> <span m='2710220'>is</span> <span
  m='2710610'>how</span> <span m='2711030'>are</span> <span
  m='2711190'>you</span> <span m='2711340'>going</span> <span
  m='2711600'>to</span> <span m='2711710'>compute</span> <span
  m='2712650'>rank</span> <span m='2713250'>t</span> <span
  m='2714060'>from</span> <span m='2714270'>the</span> <span
  m='2714360'>subtree</span> <span m='2714700'>sizes?</span> </p><p><span
  m='2717460'>So</span> <span m='2718380'>everyone</span> <span
  m='2718710'>understand</span> <span m='2719140'>subtree</span> <span
  m='2719430'>sizes?</span> <span m='2721450'>It's</span> <span
  m='2721560'>just</span> <span m='2721770'>the</span> <span
  m='2721800'>number</span> <span m='2722050'>of nodes</span> <span
  m='2722360'>that are</span> <span m='2722560'>underneath</span> <span
  m='2722950'>you.</span> <span m='2723780'>And</span> <span
  m='2723900'>you</span> <span m='2724290'>remember</span> <span
  m='2724680'>to</span> <span m='2724750'>count</span> <span
  m='2724970'>yourself,</span> <span m='2725990'>all</span> <span
  m='2726070'>right?</span> </p><p><span m='2727360'>Now</span> <span
  m='2727680'>what</span> <span m='2727870'>is</span> <span
  m='2728010'>rank</span> <span m='2728305'>t?</span> <span
  m='2728600'>Rank</span> <span m='2728885'>t</span> <span m='2729170'>is</span>
  <span m='2729640'>how</span> <span m='2729810'>many</span> <span
  m='2730010'>planes</span> <span m='2730380'>are</span> <span
  m='2730460'>scheduled</span> <span m='2730860'>to</span> <span
  m='2730930'>land</span> <span m='2731370'>at</span> <span
  m='2731480'>times</span> <span m='2731840'>less</span> <span
  m='2732040'>than</span> <span m='2732150'>or</span> <span
  m='2732250'>equal</span> <span m='2732460'>to</span> <span
  m='2732580'>t.</span> <span m='2733670'>So</span> <span m='2733830'>now</span>
  <span m='2733980'>I</span> <span m='2734080'>have</span> <span
  m='2735010'>a</span> <span m='2735140'>BST</span> <span
  m='2735690'>structure</span> <span m='2736610'>that</span> <span
  m='2736790'>looks</span> <span m='2737020'>like</span> <span
  m='2737190'>the</span> <span m='2737280'>one</span> <span
  m='2737460'>and</span> <span m='2737550'>I</span> <span
  m='2737620'>just</span> <span m='2737910'>ended</span> <span
  m='2738240'>up</span> <span m='2738420'>with.</span> <span
  m='2740930'>So</span> <span m='2741090'>I've</span> <span
  m='2741230'>added</span> <span m='2741680'>this</span> <span
  m='2741880'>43.</span> <span m='2742940'>And</span> <span
  m='2743120'>so</span> <span m='2743210'>let</span> <span m='2743310'>me</span>
  <span m='2743400'>draw</span> <span m='2743680'>that</span> <span
  m='2743830'>out</span> <span m='2744040'>here,</span> <span
  m='2744500'>and</span> <span m='2746630'>see</span> <span
  m='2746800'>if</span> <span m='2746880'>we</span> <span m='2746970'>can</span>
  <span m='2747060'>answer</span> <span m='2747310'>this</span> <span
  m='2747500'>question.</span> <span m='2748160'>This</span> <span
  m='2748240'>is</span> <span m='2748410'>a</span> <span
  m='2748930'>subtle</span> <span m='2749230'>question.</span> </p><p><span
  m='2751370'>So</span> <span m='2751540'>I</span> <span m='2751630'>got</span>
  <span m='2751890'>49,</span> <span m='2753750'>and</span> <span
  m='2753860'>that</span> <span m='2754140'>subtree</span> <span
  m='2754410'>size</span> <span m='2754675'>is</span> <span
  m='2754940'>6.</span> <span m='2755830'>I</span> <span m='2755940'>got</span>
  <span m='2756130'>46,</span> <span m='2757350'>subtree</span> <span
  m='2757620'>size is</span> <span m='2758170'>2.</span> <span
  m='2759170'>43,</span> <span m='2761670'>79,</span> <span
  m='2764520'>64.</span> <span m='2767010'>and</span> <span
  m='2767910'>83.</span> <span m='2771000'>So</span> <span
  m='2771570'>what</span> <span m='2771760'>I</span> <span
  m='2771790'>want</span> <span m='2772200'>is</span> <span
  m='2774350'>what</span> <span m='2774720'>lands</span> <span
  m='2778940'>before</span> <span m='2781240'>t?</span> </p><p><span
  m='2784360'>And</span> <span m='2786150'>how</span> <span
  m='2786300'>do</span> <span m='2786380'>I</span> <span m='2786450'>do</span>
  <span m='2786580'>that?</span> <span m='2787420'>Give</span> <span
  m='2787580'>me</span> <span m='2787710'>an</span> <span
  m='2787820'>algorithm</span> <span m='2789220'>that</span> <span
  m='2789610'>would</span> <span m='2790470'>allow</span> <span
  m='2790660'>me</span> <span m='2790850'>to</span> <span
  m='2790950'>compute</span> <span m='2792640'>in</span> <span
  m='2792870'>order</span> <span m='2793330'>h</span> <span
  m='2793880'>time.</span> <span m='2795700'>I</span> <span
  m='2795790'>want</span> <span m='2795950'>to</span> <span
  m='2796020'>do</span> <span m='2796130'>this</span> <span
  m='2796340'>in</span> <span m='2796440'>order</span> <span
  m='2796820'>h</span> <span m='2797160'>time.</span> <span
  m='2798130'>What</span> <span m='2798500'>lands</span> <span
  m='2798870'>before</span> <span m='2799220'>t?</span> <span
  m='2800040'>Someone?</span> <span m='2802790'>Yeah.</span> </p><p><span
  m='2803258'>AUDIENCE: So</span> <span m='2803726'>first you</span> <span
  m='2804194'>would have</span> <span m='2804662'>to find</span> <span
  m='2805130'>where</span> <span m='2805598'>to insert</span> <span
  m='2806066'>it,</span> <span m='2806534'>like we</span> <span m='2807002'>did
  before.</span> </p><p><span m='2807480'>PROFESSOR: Right,</span> <span
  m='2808030'>right.</span> </p><p><span m='2808285'>AUDIENCE: And</span> <span
  m='2808540'>then</span> <span m='2809839'>because</span> <span m='2810705'>we
  have</span> <span m='2811140'>the order</span> <span m='2811725'>of</span>
  <span m='2812030'>whatever</span> <span m='2812922'>it was before--</span>
  <span m='2813370'>not the</span> <span m='2813800'>order,</span> <span
  m='2814230'>the--</span> </p><p><span m='2815110'>PROFESSOR: The</span> <span
  m='2815210'>sizes?</span> <span m='2815750'>The</span> <span
  m='2815850'>sizes?</span> <span m='2816280'>Yeah.</span> </p><p><span
  m='2816702'>AUDIENCE: And then we</span> <span m='2817546'>can</span> <span
  m='2817968'>look</span> <span m='2818390'>what's</span> <span
  m='2818790'>more</span> <span m='2819120'>than it</span> <span m='2819445'>on
  the</span> <span m='2819770'>right,</span> <span m='2820253'>we can</span>
  <span m='2820736'>subtract</span> <span m='2821219'>it</span> <span
  m='2821702'>and</span> <span m='2822185'>we get--</span> </p><p><span
  m='2822670'>PROFESSOR: What</span> <span m='2822900'>is</span> <span
  m='2823040'>more</span> <span m='2823380'>than</span> <span
  m='2823600'>it</span> <span m='2823730'>on</span> <span m='2823850'>the</span>
  <span m='2823970'>right.</span> <span m='2824360'>Do you</span> <span
  m='2824480'>want</span> <span m='2824600'>to</span> <span
  m='2824640'>say--</span> </p><p><span m='2824750'>AUDIENCE: Because,</span>
  <span m='2825140'>like--</span> </p><p><span m='2825530'>PROFESSOR: OK.</span>
  </p><p><span m='2826390'>AUDIENCE: --on the</span> <span
  m='2826725'>right--</span> </p><p><span m='2827060'>PROFESSOR: Right.</span>
  </p><p><span m='2827310'>AUDIENCE: --and then</span> <span
  m='2827753'>we</span> <span m='2828196'>can</span> <span
  m='2828639'>take</span> <span m='2829082'>this</span> <span m='2829525'>minus
  this</span> <span m='2829970'>and we get</span> <span
  m='2831090'>what's</span> <span m='2831320'>left.</span> </p><p><span
  m='2832110'>PROFESSOR: That's</span> <span m='2832300'>great,</span> <span
  m='2832560'>that's</span> <span m='2832890'>excellent.</span> <span
  m='2833610'>Excellent.</span> <span m='2836130'>So</span> <span
  m='2836770'>I'm</span> <span m='2836850'>going</span> <span m='2837130'>to do
  it a</span> <span m='2837190'>little</span> <span m='2837350'>bit</span> <span
  m='2837430'>differently</span> <span m='2837810'>from</span> <span
  m='2837940'>what</span> <span m='2838080'>you</span> <span
  m='2838170'>described.</span> <span m='2839010'>I'm</span> <span
  m='2839360'>going</span> <span m='2839480'>to</span> <span
  m='2839520'>actually</span> <span m='2839950'>do</span> <span
  m='2840080'>it</span> <span m='2840230'>in</span> <span m='2840380'>a,</span>
  <span m='2840470'>sort</span> <span m='2840600'>of,</span> <span
  m='2840660'>a</span> <span m='2840710'>more</span> <span
  m='2840930'>positive</span> <span m='2841420'>way,</span> <span
  m='2841980'>no</span> <span m='2842120'>offense</span> <span
  m='2842370'>intended.</span> </p><p><span m='2844160'>What</span> <span
  m='2844390'>we're</span> <span m='2844540'>going</span> <span
  m='2844660'>to</span> <span m='2844720'>do</span> <span m='2844840'>is</span>
  <span m='2844930'>we're</span> <span m='2845000'>going to</span> <span
  m='2845190'>add</span> <span m='2845390'>up</span> <span
  m='2845590'>the</span> <span m='2845690'>things</span> <span
  m='2846220'>that</span> <span m='2846600'>we</span> <span
  m='2846730'>want</span> <span m='2846910'>to</span> <span
  m='2846950'>add</span> <span m='2847190'>up.</span> <span
  m='2848170'>And</span> <span m='2848760'>what</span> <span
  m='2849100'>you</span> <span m='2849180'>have</span> <span
  m='2849320'>to</span> <span m='2849400'>do</span> <span m='2849530'>is</span>
  <span m='2849680'>walk--</span> <span m='2850520'>your</span> <span
  m='2850600'>first</span> <span m='2850890'>step</span> <span
  m='2851160'>was</span> <span m='2851780'>right</span> <span
  m='2852050'>on.</span> <span m='2853210'>I</span> <span
  m='2853260'>mean,</span> <span m='2853450'>your</span> <span
  m='2853750'>answer</span> <span m='2853990'>is</span> <span
  m='2854200'>correct.</span> <span m='2855260'>I'm</span> <span
  m='2855390'>just</span> <span m='2855540'>going</span> <span
  m='2855640'>to</span> <span m='2855680'>do</span> <span m='2855810'>it</span>
  <span m='2855860'>a</span> <span m='2855920'>little</span> <span
  m='2856040'>bit</span> <span m='2856160'>differently.</span> </p><p><span
  m='2858400'>You</span> <span m='2858550'>walk</span> <span
  m='2858800'>down</span> <span m='2859000'>the</span> <span
  m='2859110'>tree</span> <span m='2859520'>to</span> <span
  m='2859620'>find</span> <span m='2860050'>the</span> <span
  m='2860130'>desired</span> <span m='2860640'>time.</span> <span
  m='2862180'>This</span> <span m='2862390'>is just</span> <span
  m='2862530'>your</span> <span m='2862700'>search.</span> <span
  m='2863810'>We</span> <span m='2863880'>know</span> <span
  m='2864010'>how</span> <span m='2864080'>to</span> <span m='2864160'>do</span>
  <span m='2864270'>that.</span> </p><p><span m='2866300'>As</span> <span
  m='2866640'>you</span> <span m='2866750'>walk</span> <span
  m='2867090'>down</span> <span m='2868850'>you</span> <span
  m='2869440'>add</span> <span m='2869770'>in</span> <span
  m='2871110'>the</span> <span m='2871230'>nodes</span> <span
  m='2873630'>that</span> <span m='2873840'>is</span> <span
  m='2873960'>the</span> <span m='2874030'>subtree</span> <span
  m='2874450'>sizes--</span> <span m='2876510'>you're</span> <span
  m='2876640'>just</span> <span m='2876820'>adding</span> <span
  m='2877020'>in</span> <span m='2877110'>the</span> <span
  m='2877180'>notes</span> <span m='2877460'>here.</span> <span
  m='2878350'>So</span> <span m='2878540'>if</span> <span m='2878660'>you</span>
  <span m='2878780'>see--</span> <span m='2879060'>depending on</span> <span
  m='2879540'>the</span> <span m='2879590'>number</span> <span
  m='2879790'>of</span> <span m='2879850'>nodes</span> <span
  m='2880140'>that</span> <span m='2880240'>you</span> <span
  m='2880470'>see</span> <span m='2880750'>as</span> <span
  m='2880910'>you're</span> <span m='2880990'>going</span> <span
  m='2881200'>deeper</span> <span m='2881600'>in,</span> <span
  m='2881880'>you</span> <span m='2882020'>want</span> <span
  m='2882110'>to</span> <span m='2882150'>add</span> <span m='2882320'>in</span>
  <span m='2882430'>the</span> <span m='2882510'>nodes.</span> <span
  m='2883490'>And</span> <span m='2883810'>you're going to</span> <span
  m='2883950'>add</span> <span m='2884220'>one</span> <span
  m='2884470'>to</span> <span m='2884560'>that,</span> <span
  m='2885150'>corresponding</span> <span m='2885620'>to</span> <span
  m='2885730'>the</span> <span m='2885830'>nodes</span> <span
  m='2886090'>that</span> <span m='2886200'>are</span> <span
  m='2886280'>smaller.</span> <span m='2887410'>And</span> <span
  m='2887810'>we're</span> <span m='2887900'>going</span> <span
  m='2888020'>to</span> <span m='2888070'>add</span> <span m='2888350'>in</span>
  <span m='2889450'>the</span> <span m='2889550'>subtree</span> <span
  m='2889970'>sizes</span> <span m='2890730'>to</span> <span
  m='2890800'>the</span> <span m='2890930'>left,</span> <span
  m='2892390'>as</span> <span m='2892610'>opposed</span> <span
  m='2892880'>to</span> <span m='2892960'>subtracting.</span> </p><p><span
  m='2899240'>That</span> <span m='2899430'>may</span> <span
  m='2899520'>not</span> <span m='2899700'>make</span> <span
  m='2899850'>a</span> <span m='2899900'>lot</span> <span m='2900050'>of</span>
  <span m='2900100'>sense.</span> <span m='2900510'>But</span> <span
  m='2900630'>I</span> <span m='2900670'>guarantee</span> <span
  m='2901170'>you</span> <span m='2901970'>it</span> <span
  m='2902120'>will</span> <span m='2902700'>once</span> <span
  m='2902950'>we</span> <span m='2903050'>do</span> <span m='2903170'>an</span>
  <span m='2903240'>example.</span> </p><p><span m='2914270'>So</span> <span
  m='2914470'>what's</span> <span m='2914650'>going</span> <span
  m='2914810'>on</span> <span m='2914950'>here?</span> <span
  m='2916180'>I</span> <span m='2916280'>want</span> <span m='2916320'>to</span>
  <span m='2916360'>find</span> <span m='2916610'>a</span> <span
  m='2916660'>place</span> <span m='2917470'>to</span> <span
  m='2917950'>insert.</span> <span m='2918430'>I'm</span> <span
  m='2918510'>not</span> <span m='2918650'>actually</span> <span
  m='2918880'>going</span> <span m='2919010'>to</span> <span
  m='2919070'>do</span> <span m='2919200'>the</span> <span
  m='2919290'>insert.</span> <span m='2920490'>Think</span> <span
  m='2920630'>of</span> <span m='2920730'>it</span> <span m='2920820'>is</span>
  <span m='2920950'>doing</span> <span m='2921200'>a</span> <span
  m='2921240'>lookup.</span> </p><p><span m='2922280'>And</span> <span
  m='2923090'>along</span> <span m='2923370'>the</span> <span
  m='2923470'>way,</span> <span m='2924390'>I</span> <span
  m='2924510'>need</span> <span m='2924690'>to</span> <span
  m='2924760'>figure</span> <span m='2925040'>out</span> <span
  m='2925870'>the</span> <span m='2926120'>less</span> <span
  m='2926460'>than</span> <span m='2926670'>operator.</span> <span
  m='2927510'>I</span> <span m='2927640'>want</span> <span m='2927780'>to</span>
  <span m='2927820'>find</span> <span m='2928240'>all</span> <span
  m='2928530'>of</span> <span m='2928600'>the</span> <span
  m='2928690'>things</span> <span m='2929000'>that</span> <span
  m='2929110'>are</span> <span m='2929180'>less</span> <span
  m='2929480'>than</span> <span m='2929800'>this</span> <span
  m='2930000'>value</span> <span m='2930370'>I'm</span> <span
  m='2930500'>searching</span> <span m='2930890'>for.</span> <span
  m='2931530'>And</span> <span m='2931690'>so</span> <span m='2931800'>I</span>
  <span m='2931900'>have</span> <span m='2932040'>to</span> <span
  m='2932110'>do</span> <span m='2932500'>a</span> <span m='2932590'>bit</span>
  <span m='2932760'>of</span> <span m='2932860'>arithmetic.</span> </p><p><span
  m='2934640'>So</span> <span m='2934880'>let's</span> <span
  m='2935090'>say</span> <span m='2935250'>that</span> <span
  m='2935650'>I'm</span> <span m='2935820'>looking</span> <span
  m='2936180'>for</span> <span m='2939660'>what's</span> <span
  m='2940380'>less</span> <span m='2940660'>than</span> <span
  m='2940770'>or</span> <span m='2940880'>equal</span> <span
  m='2941120'>to</span> <span m='2941220'>79.</span> <span m='2943020'>So</span>
  <span m='2944600'>t</span> <span m='2945050'>equals</span> <span
  m='2945430'>79.</span> <span m='2947720'>So</span> <span
  m='2947870'>I'm</span> <span m='2947990'>going</span> <span
  m='2948130'>to</span> <span m='2948170'>look</span> <span
  m='2948340'>at</span> <span m='2948700'>49.</span> <span
  m='2949890'>I'm</span> <span m='2950340'>going to</span> <span
  m='2950410'>walk</span> <span m='2950650'>down,</span> <span
  m='2951140'>I'm</span> <span m='2951240'>going</span> <span
  m='2951340'>to</span> <span m='2951380'>look</span> <span
  m='2951510'>at</span> <span m='2951610'>49.</span> </p><p><span
  m='2953310'>And</span> <span m='2953510'>because</span> <span
  m='2953780'>I</span> <span m='2953870'>say</span> <span m='2955200'>I'm</span>
  <span m='2955400'>looking</span> <span m='2955690'>at</span> <span
  m='2955790'>49--</span> <span m='2957620'>and</span> <span
  m='2962120'>49</span> <span m='2962670'>is</span> <span
  m='2962800'>clearly</span> <span m='2963030'>less</span> <span
  m='2963320'>than</span> <span m='2963460'>79.</span> <span
  m='2964810'>So</span> <span m='2965290'>I'm</span> <span
  m='2965410'>going</span> <span m='2965520'>to</span> <span
  m='2965560'>add</span> <span m='2965840'>1.</span> <span
  m='2967960'>And</span> <span m='2968100'>that's</span> <span
  m='2968290'>this</span> <span m='2968500'>check</span> <span
  m='2968770'>over</span> <span m='2968930'>here.</span> </p><p><span
  m='2970370'>I</span> <span m='2970500'>move</span> <span m='2970770'>on</span>
  <span m='2972330'>and</span> <span m='2978880'>what</span> <span
  m='2979080'>I</span> <span m='2979130'>need</span> <span m='2979300'>to</span>
  <span m='2979390'>do</span> <span m='2979520'>now</span> <span
  m='2979890'>is</span> <span m='2980420'>move</span> <span
  m='2980690'>to</span> <span m='2980750'>the</span> <span
  m='2980990'>right,</span> <span m='2981830'>because</span> <span
  m='2983760'>79</span> <span m='2984380'>is</span> <span
  m='2984560'>greater</span> <span m='2984730'>than</span> <span
  m='2984900'>49.</span> <span m='2985510'>That's</span> <span
  m='2985770'>how</span> <span m='2985880'>my</span> <span
  m='2986010'>search</span> <span m='2986310'>would</span> <span
  m='2986430'>work.</span> <span m='2987400'>But</span> <span
  m='2988820'>because</span> <span m='2989110'>I've</span> <span
  m='2989160'>moved</span> <span m='2989440'>to</span> <span
  m='2989530'>the</span> <span m='2989660'>right,</span> <span
  m='2990500'>I'm</span> <span m='2990640'>going</span> <span
  m='2990780'>to</span> <span m='2990870'>add</span> <span
  m='2991360'>the</span> <span m='2991480'>subtree</span> <span
  m='2992040'>sizes</span> <span m='2993410'>that</span> <span
  m='2993600'>were</span> <span m='2993860'>to</span> <span
  m='2993950'>the</span> <span m='2994050'>left.</span> <span
  m='2995570'>Because</span> <span m='2995840'>I</span> <span
  m='2996110'>know</span> <span m='2996300'>that</span> <span
  m='2996420'>all</span> <span m='2996710'>of</span> <span
  m='2996780'>the</span> <span m='2996880'>things</span> <span
  m='2997270'>to</span> <span m='2997390'>the</span> <span
  m='2997500'>left</span> <span m='2998240'>are</span> <span
  m='2998340'>clearly</span> <span m='2998690'>less</span> <span
  m='2998930'>than</span> <span m='2999060'>79.</span> </p><p><span
  m='3001640'>So</span> <span m='3001800'>I'm</span> <span
  m='3001940'>going</span> <span m='3002050'>to</span> <span
  m='3002120'>add</span> <span m='3004090'>2,</span> <span
  m='3005940'>corresponding</span> <span m='3006480'>to</span> <span
  m='3006570'>a</span> <span m='3006630'>subtree</span> <span
  m='3008312'>46.</span> <span m='3010020'>So</span> <span
  m='3010130'>I'm</span> <span m='3010220'>not</span> <span
  m='3010370'>actually</span> <span m='3011110'>looking</span> <span
  m='3011500'>there.</span> <span m='3012120'>But</span> <span
  m='3012220'>I'm</span> <span m='3012290'>going</span> <span
  m='3012390'>to</span> <span m='3012450'>add</span> <span
  m='3012680'>all</span> <span m='3012820'>of</span> <span
  m='3012880'>that</span> <span m='3012980'>stuff</span> <span
  m='3013250'>in.</span> <span m='3014420'>I'm</span> <span
  m='3014550'>going</span> <span m='3014660'>to</span> <span
  m='3014700'>move</span> <span m='3014970'>to the</span> <span
  m='3015060'>right,</span> <span m='3015860'>and now</span> <span
  m='3016080'>I'm</span> <span m='3016230'>going</span> <span
  m='3016330'>to</span> <span m='3016380'>see</span> <span
  m='3016590'>79.</span> </p><p><span m='3018250'>At</span> <span
  m='3018400'>this</span> <span m='3018570'>point</span> <span
  m='3022840'>79</span> <span m='3024040'>is</span> <span
  m='3024230'>less</span> <span m='3024400'>than</span> <span
  m='3024480'>or</span> <span m='3024550'>equal</span> <span
  m='3024710'>to</span> <span m='3024780'>79.</span> <span m='3026890'>So</span>
  <span m='3027350'>I'm</span> <span m='3027490'>going</span> <span
  m='3027720'>to</span> <span m='3028960'>see</span> <span m='3029190'>79</span>
  <span m='3029730'>and</span> <span m='3029860'>I'm</span> <span
  m='3029940'>going</span> <span m='3030050'>to</span> <span
  m='3030110'>add</span> <span m='3030370'>1.</span> <span
  m='3033290'>And</span> <span m='3034060'>because</span> <span
  m='3034340'>I've</span> <span m='3034450'>added</span> <span
  m='3034860'>79,</span> <span m='3035520'>just</span> <span
  m='3035740'>like</span> <span m='3035890'>I</span> <span
  m='3035950'>did</span> <span m='3036140'>with</span> <span
  m='3036260'>49,</span> <span m='3037300'>I</span> <span
  m='3037400'>have</span> <span m='3037530'>to</span> <span
  m='3037630'>add</span> <span m='3037990'>the</span> <span
  m='3038160'>subtree</span> <span m='3038330'>size</span> <span
  m='3039500'>to</span> <span m='3039580'>the</span> <span
  m='3039670'>left</span> <span m='3040270'>of</span> <span
  m='3040410'>79.</span> </p><p><span m='3042090'>So</span> <span
  m='3042310'>the</span> <span m='3042420'>final</span> <span
  m='3042770'>addition</span> <span m='3043250'>is</span> <span
  m='3043950'>I</span> <span m='3044120'>add</span> <span m='3044400'>1</span>
  <span m='3045640'>corresponding</span> <span m='3046160'>to</span> <span
  m='3046220'>the</span> <span m='3046330'>subtree</span> <span
  m='3048825'>64.</span> <span m='3050760'>And at</span> <span
  m='3050870'>this</span> <span m='3051050'>point</span> <span
  m='3051290'>I've</span> <span m='3051900'>discovered</span> <span
  m='3052390'>where</span> <span m='3052560'>I</span> <span
  m='3052600'>have</span> <span m='3052750'>to</span> <span
  m='3052820'>insert,</span> <span m='3053290'>I've</span> <span
  m='3053605'>essentially</span> <span m='3053920'>found</span> <span
  m='3054860'>the</span> <span m='3055180'>location,</span> <span
  m='3056040'>it</span> <span m='3056180'>matches</span> <span
  m='3056540'>79.</span> <span m='3057900'>And</span> <span
  m='3058440'>there</span> <span m='3058570'>was</span> <span
  m='3058660'>no</span> <span m='3058750'>modification</span> <span
  m='3059350'>required</span> <span m='3059860'>in</span> <span
  m='3060020'>this</span> <span m='3060360'>algorithm.</span> <span
  m='3061180'>So</span> <span m='3061820'>if</span> <span
  m='3061920'>that</span> <span m='3062100'>was</span> <span
  m='3062160'>78</span> <span m='3063070'>you'd</span> <span
  m='3063500'>essentially</span> <span m='3063910'>do</span> <span
  m='3064070'>the</span> <span m='3064180'>same</span> <span
  m='3064410'>things.</span> </p><p><span m='3065990'>But</span> <span
  m='3067830'>you're</span> <span m='3068060'>done</span> <span
  m='3068420'>because</span> <span m='3068700'>you</span> <span
  m='3069080'>found</span> <span m='3069450'>the</span> <span
  m='3069510'>value,</span> <span m='3070190'>or</span> <span
  m='3070280'>the</span> <span m='3070390'>place</span> <span
  m='3070670'>that</span> <span m='3070770'>you</span> <span
  m='3070860'>want</span> <span m='3070990'>to</span> <span
  m='3071030'>insert.</span> <span m='3071770'>And</span> <span
  m='3071950'>you've</span> <span m='3072070'>done</span> <span
  m='3072230'>a</span> <span m='3072270'>bunch</span> <span
  m='3072520'>of</span> <span m='3072610'>additions.</span> <span
  m='3073500'>And</span> <span m='3073710'>you</span> <span
  m='3073830'>go</span> <span m='3074040'>look</span> <span
  m='3074240'>at</span> <span m='3074350'>add</span> <span m='3074610'>1,</span>
  <span m='3075120'>add</span> <span m='3075460'>2,</span> <span
  m='3076160'>add</span> <span m='3076430'>1,</span> <span
  m='3077200'>add</span> <span m='3077420'>1,</span> <span
  m='3078710'>and</span> <span m='3079140'>you</span> <span
  m='3079300'>have</span> <span m='3079850'>5.</span> <span
  m='3083570'>And</span> <span m='3083860'>that's</span> <span
  m='3084050'>the</span> <span m='3084090'>correct</span> <span
  m='3084360'>answer,</span> <span m='3084890'>as</span> <span
  m='3084990'>you</span> <span m='3085080'>can</span> <span
  m='3085180'>see</span> <span m='3085430'>from</span> <span
  m='3086050'>this</span> <span m='3086220'>example.</span> </p><p><span
  m='3088440'>So</span> <span m='3090100'>what's</span> <span
  m='3090320'>the</span> <span m='3090400'>bad</span> <span
  m='3090620'>news?</span> <span m='3091030'>The</span> <span
  m='3091460'>bad</span> <span m='3091720'>news</span> <span
  m='3091960'>was</span> <span m='3092655'>what</span> <span
  m='3092920'>this</span> <span m='3093120'>lady</span> <span
  m='3093350'>said</span> <span m='3093600'>up</span> <span
  m='3093820'>front,</span> <span m='3094260'>which was</span> <span
  m='3094950'>we</span> <span m='3095100'>haven't</span> <span
  m='3095440'>quite</span> <span m='3095720'>solved</span> <span
  m='3096170'>the</span> <span m='3096240'>problem.</span> <span
  m='3097390'>Because</span> <span m='3098370'>sadly,</span> <span
  m='3099350'>I</span> <span m='3099480'>could</span> <span
  m='3099650'>easily</span> <span m='3100040'>set</span> <span
  m='3100330'>things</span> <span m='3100590'>up</span> <span
  m='3101220'>such</span> <span m='3101530'>that</span> <span
  m='3102090'>the</span> <span m='3102210'>height</span> <span
  m='3102780'>h</span> <span m='3103830'>is</span> <span
  m='3104850'>order</span> <span m='3105230'>n,</span> <span
  m='3106650'>h</span> <span m='3107020'>could</span> <span
  m='3107190'>be</span> <span m='3107390'>order n.</span> </p><p><span
  m='3109950'>And</span> <span m='3111100'>if,</span> <span
  m='3111540'>for</span> <span m='3111680'>example,</span> <span
  m='3112390'>I</span> <span m='3112610'>gave</span> <span
  m='3112790'>you</span> <span m='3112920'>a</span> <span
  m='3113000'>sorted</span> <span m='3113570'>list,</span> <span
  m='3114410'>and</span> <span m='3114560'>I</span> <span
  m='3114630'>said</span> <span m='3114930'>insert</span> <span
  m='3115520'>into</span> <span m='3115710'>binary</span> <span
  m='3116090'>search</span> <span m='3116440'>tree</span> <span
  m='3116650'>that's</span> <span m='3116860'>originally</span> <span
  m='3117290'>null</span> <span m='3118070'>43,</span> <span
  m='3118970'>and</span> <span m='3119110'>you</span> <span
  m='3119200'>put</span> <span m='3119350'>43</span> <span m='3119780'>in</span>
  <span m='3119860'>there.</span> <span m='3120410'>Then</span> <span
  m='3120550'>I</span> <span m='3120610'>say</span> <span
  m='3120840'>insert</span> <span m='3121290'>46.</span> <span
  m='3122350'>And</span> <span m='3122480'>then</span> <span
  m='3122600'>I</span> <span m='3122670'>say</span> <span
  m='3122840'>instead</span> <span m='3123180'>of</span> <span
  m='3123280'>48.</span> <span m='3124090'>And</span> <span
  m='3124260'>then</span> <span m='3124370'>I</span> <span
  m='3124430'>say</span> <span m='3124610'>insert</span> <span
  m='3125040'>49,</span> <span m='3125900'>et</span> <span
  m='3126020'>cetera.</span> <span m='3126870'>And,</span> <span m='3127130'>you
  know,</span> <span m='3127200'>these</span> <span m='3127370'>could</span>
  <span m='3127470'>be</span> <span m='3128140'>any</span> <span
  m='3128340'>numbers.</span> </p><p><span m='3129200'>Then</span> <span
  m='3129500'>you</span> <span m='3129600'>see</span> <span
  m='3129790'>that</span> <span m='3130260'>what</span> <span
  m='3130370'>does</span> <span m='3130470'>this</span> <span
  m='3130620'>look</span> <span m='3130770'>like?</span> <span m='3132030'>Does
  it</span> <span m='3132340'>look like</span> <span m='3132480'>a</span> <span
  m='3132600'>tree?</span> <span m='3134060'>It</span> <span
  m='3134160'>looks</span> <span m='3134320'>like</span> <span
  m='3134460'>a</span> <span m='3134540'>list.</span> <span
  m='3136300'>That's</span> <span m='3136480'>the bad</span> <span
  m='3136896'>news.</span> </p><p><span m='3138420'>And</span> <span
  m='3139520'>I'll</span> <span m='3139640'>let</span> <span
  m='3139920'>Eric</span> <span m='3140210'>give</span> <span
  m='3140410'>you</span> <span m='3140560'>good</span> <span
  m='3140770'>news</span> <span m='3141360'>next</span> <span
  m='3141640'>week.</span> <span m='3143200'>We</span> <span
  m='3143360'>need</span> <span m='3143530'>to</span> <span
  m='3143590'>have</span> <span m='3143810'>this</span> <span
  m='3143930'>notion</span> <span m='3144240'>of</span> <span
  m='3144320'>balanced</span> <span m='3144960'>binary</span> <span
  m='3145330'>search</span> <span m='3145680'>trees.</span> </p><p><span
  m='3145930'>So</span> <span m='3146180'>everything</span> <span
  m='3146580'>I've</span> <span m='3146670'>said</span> <span
  m='3147380'>is</span> <span m='3147620'>true.</span> <span
  m='3148950'>I</span> <span m='3149050'>did</span> <span m='3149180'>not</span>
  <span m='3149370'>lie.</span> <span m='3150130'>But</span> <span
  m='3150800'>the</span> <span m='3150890'>one</span> <span
  m='3151110'>extra</span> <span m='3151370'>thing</span> <span
  m='3151680'>is</span> <span m='3151910'>we</span> <span
  m='3151980'>need</span> <span m='3152120'>to</span> <span
  m='3152180'>make</span> <span m='3152340'>sure</span> <span
  m='3152560'>these</span> <span m='3152800'>trees</span> <span
  m='3153050'>are</span> <span m='3153120'>balanced</span> <span
  m='3154100'>so</span> <span m='3154310'>h</span> <span m='3154660'>is</span>
  <span m='3154800'>order</span> <span m='3155080'>log</span> <span
  m='3155350'>n.</span> <span m='3155770'>And</span> <span
  m='3155910'>then</span> <span m='3156330'>everything</span> <span
  m='3156650'>I</span> <span m='3156710'>said</span> <span
  m='3156910'>works.</span> <span m='3157740'>All</span> <span
  m='3157800'>right?</span> <span m='3158080'>See</span> <span
  m='3158170'>you</span> <span m='3158210'>next</span> <span
  m='3158400'>time.</span> </p>
embedded_media:
  - uid: bf1f7913cf907c56bc549b9dc331d220
    parent_uid: 30b1227d461b32e4b54c38350eb51ea4
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 9Jry5-82I68
  - uid: b86df1b30cbd44ed5b35b76939c67cfe
    parent_uid: 30b1227d461b32e4b54c38350eb51ea4
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/9Jry5-82I68/default.jpg'
  - uid: 30c1b0dc06e2939ecbe26148c9b58bc4
    parent_uid: 30b1227d461b32e4b54c38350eb51ea4
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-5-binary-search-trees/id585700718?i=126127763
  - uid: 2738aebbf482d69304ca2fc5bbae22bc
    parent_uid: 30b1227d461b32e4b54c38350eb51ea4
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec05_300k.mp4'
  - uid: f50e67d4a3fb154846d29af0c8113f2a
    parent_uid: 30b1227d461b32e4b54c38350eb51ea4
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 9Jry5-82I68
  - uid: 57d747167f81ece98e219ad0a2c0230b
    parent_uid: 30b1227d461b32e4b54c38350eb51ea4
    id: 9Jry5-82I68.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-5-binary-search-trees-bst-sort/9Jry5-82I68.srt
  - uid: 73ffad03e0ac4a96957fdfe22b2e7379
    parent_uid: 30b1227d461b32e4b54c38350eb51ea4
    id: 9Jry5-82I68.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-5-binary-search-trees-bst-sort/9Jry5-82I68.pdf
  - uid: fb63bf5b83c298deb891b38f68e59321
    parent_uid: 30b1227d461b32e4b54c38350eb51ea4
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 864cd52a5443b0c119f9f57b5c3aa4da
    parent_uid: 30b1227d461b32e4b54c38350eb51ea4
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
