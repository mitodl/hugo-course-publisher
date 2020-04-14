---
title: 'Lecture 4: Heaps and Heap Sort'
uid: eb2c951fdceb6cd4ebe6516b9c5bf6e0
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-4-heaps-and-heap-sort
short_url: lecture-4-heaps-and-heap-sort
inline_embed_id: '8919313lecture4:heapsandheapsort82572908'
about_this_resource_text: >-
  <p><strong>Description:</strong> Priority queues are introduced as a
  motivation for heaps.  The lecture then covers heap operations and concludes
  with a discussion of heapsort.</p> <p><strong>Instructor:</strong> Srini
  Devadas</p>
related_resources_text: ''
transcript: >-
  <p><span m='80'>The</span> <span m='180'>following</span> <span
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
  m='15780'>MIT</span> <span m='16200'>OpenCourseWare</span> <span
  m='17250'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='22210'>PROFESSOR: One</span> <span m='22630'>of</span> <span
  m='22690'>the</span> <span m='22790'>cutest</span> <span
  m='23240'>little</span> <span m='23480'>data</span> <span
  m='23760'>structures</span> <span m='24990'>that</span> <span
  m='25160'>was</span> <span m='25310'>ever</span> <span
  m='25510'>invented</span> <span m='26220'>is</span> <span
  m='26560'>called</span> <span m='26830'>the</span> <span
  m='26890'>heap.</span> <span m='27890'>And</span> <span m='28260'>we're</span>
  <span m='28400'>going</span> <span m='28570'>to</span> <span
  m='28610'>use</span> <span m='29230'>the</span> <span m='29400'>heap</span>
  <span m='30180'>as</span> <span m='30430'>an</span> <span
  m='30620'>example</span> <span m='31490'>implementation</span> <span
  m='32890'>of</span> <span m='33160'>a</span> <span m='33240'>priority</span>
  <span m='33810'>queue.</span> <span m='35390'>And</span> <span
  m='35890'>we'll</span> <span m='36010'>also</span> <span m='36280'>use</span>
  <span m='36910'>heaps</span> <span m='37840'>to</span> <span
  m='37940'>build</span> <span m='39490'>a</span> <span m='39670'>sorting</span>
  <span m='40070'>algorithm,</span> <span m='40850'>called</span> <span
  m='41310'>heap</span> <span m='41640'>sort,</span> <span m='42780'>that</span>
  <span m='43120'>is</span> <span m='43290'>very,</span> <span
  m='43700'>very</span> <span m='43840'>different</span> <span
  m='44400'>from</span> <span m='44670'>either</span> <span
  m='45180'>insertion</span> <span m='45700'>sort</span> <span
  m='46710'>or</span> <span m='47220'>merge</span> <span m='47530'>sort.</span>
  <span m='48790'>And</span> <span m='49040'>it</span> <span
  m='49120'>has</span> <span m='49290'>some</span> <span m='49430'>nice</span>
  <span m='49660'>properties</span> <span m='50210'>that</span> <span
  m='50540'>neither</span> <span m='51050'>insertions</span> <span
  m='51620'>sort</span> <span m='52460'>nor</span> <span m='52590'>merge
  sort</span> <span m='53000'>have.</span> </p><p><span m='54520'>But</span>
  <span m='55400'>what</span> <span m='55570'>I</span> <span
  m='55590'>want</span> <span m='55740'>to</span> <span m='55780'>do</span>
  <span m='55900'>is</span> <span m='56020'>get</span> <span
  m='56160'>started</span> <span m='57540'>with</span> <span
  m='58610'>motivating</span> <span m='60670'>the heap</span> <span
  m='60910'>data</span> <span m='61220'>structure,</span> <span
  m='62870'>regardless</span> <span m='63450'>of</span> <span
  m='63520'>whether</span> <span m='63790'>you're</span> <span
  m='64019'>interested</span> <span m='64459'>in</span> <span
  m='64599'>sorting</span> <span m='65080'>or</span> <span m='65220'>not.</span>
  <span m='66670'>So</span> <span m='66900'>the</span> <span
  m='67000'>notion</span> <span m='67270'>of a</span> <span
  m='67440'>priority</span> <span m='67890'>queue,</span> <span
  m='68220'>I</span> <span m='68300'>think,</span> <span m='68790'>makes</span>
  <span m='69220'>intuitive</span> <span m='69660'>sense</span> <span
  m='70050'>to</span> <span m='70150'>all</span> <span m='70340'>of</span> <span
  m='70480'>you.</span> <span m='71640'>It's</span> <span
  m='72000'>essentially</span> <span m='72940'>a</span> <span
  m='73030'>structure</span> <span m='74500'>that</span> <span
  m='74750'>implements</span> <span m='75790'>a</span> <span
  m='75880'>set</span> <span m='80540'>S</span> <span m='81200'>of</span> <span
  m='81440'>elements.</span> <span m='88340'>And</span> <span
  m='88530'>each</span> <span m='88780'>of</span> <span m='88870'>these</span>
  <span m='89070'>elements</span> <span m='92880'>is</span> <span
  m='93120'>associated</span> <span m='93670'>with</span> <span
  m='93760'>the</span> <span m='93870'>key.</span> <span m='103890'>And</span>
  <span m='104050'>as</span> <span m='104160'>you</span> <span
  m='104240'>can</span> <span m='104320'>imagine,</span> <span
  m='105100'>a</span> <span m='105220'>priority</span> <span
  m='105640'>queue</span> <span m='105850'>is</span> <span
  m='105950'>something</span> <span m='106300'>where</span> <span
  m='107000'>you</span> <span m='107160'>queue</span> <span m='107410'>up</span>
  <span m='107810'>for</span> <span m='108020'>something,</span> <span
  m='109250'>you</span> <span m='109420'>want</span> <span m='109530'>to</span>
  <span m='109570'>buy</span> <span m='109790'>something,</span> <span
  m='110880'>you</span> <span m='110990'>want</span> <span m='111080'>to</span>
  <span m='111130'>sell</span> <span m='111380'>something.</span> <span
  m='112140'>You</span> <span m='112240'>have</span> <span
  m='112380'>certain</span> <span m='112630'>priorities</span> <span
  m='113170'>assigned</span> <span m='113610'>to</span> <span
  m='113690'>you,</span> <span m='115580'>and</span> <span m='116320'>you</span>
  <span m='116490'>want</span> <span m='116600'>to</span> <span
  m='116770'>pick</span> <span m='117620'>the</span> <span
  m='117720'>maximum</span> <span m='118110'>priority</span> <span
  m='118630'>or</span> <span m='118710'>the</span> <span m='118790'>min</span>
  <span m='118990'>priority.</span> <span m='119970'>You</span> <span
  m='120080'>want</span> <span m='120160'>to</span> <span m='120200'>be</span>
  <span m='120260'>able</span> <span m='120390'>to</span> <span
  m='120500'>delete</span> <span m='120830'>it</span> <span
  m='120950'>from</span> <span m='121120'>the</span> <span
  m='121220'>queue.</span> <span m='122010'>You</span> <span
  m='122150'>want</span> <span m='122250'>to</span> <span m='122290'>be</span>
  <span m='122350'>able</span> <span m='122490'>to</span> <span
  m='122550'>insert</span> <span m='123150'>things</span> <span
  m='123570'>into</span> <span m='123780'>this</span> <span
  m='124010'>queue.</span> <span m='124650'>You</span> <span
  m='124770'>want</span> <span m='124850'>to</span> <span m='124890'>be</span>
  <span m='124960'>able</span> <span m='125090'>to</span> <span
  m='125170'>change</span> <span m='125580'>priorities</span> <span
  m='126140'>in</span> <span m='126260'>the</span> <span
  m='126360'>queue.</span> </p><p><span m='127430'>So</span> <span
  m='128220'>all</span> <span m='128440'>of</span> <span m='128550'>these</span>
  <span m='128840'>operations</span> <span m='130130'>are</span> <span
  m='131270'>interesting</span> <span m='131700'>operations</span> <span
  m='132620'>that</span> <span m='132990'>should</span> <span
  m='133415'>run</span> <span m='133840'>fast,</span> <span
  m='134890'>and</span> <span m='135680'>for</span> <span m='135840'>some</span>
  <span m='136020'>definition</span> <span m='136450'>of</span> <span
  m='136540'>fast.</span> <span m='137400'>Obviously</span> <span
  m='137760'>we</span> <span m='137830'>are</span> <span
  m='137900'>interested</span> <span m='138320'>in</span> <span
  m='138460'>the</span> <span m='138640'>asymptotic</span> <span
  m='139000'>complexity</span> <span m='139530'>definition</span> <span
  m='139970'>of</span> <span m='140070'>fast.</span> <span m='140730'>In</span>
  <span m='140870'>that</span> <span m='141050'>case,</span> <span
  m='141290'>we'll</span> <span m='141440'>be</span> <span
  m='141550'>saying</span> <span m='142270'>does</span> <span
  m='142480'>this</span> <span m='142660'>operation</span> <span
  m='143180'>run</span> <span m='143380'>an</span> <span m='143480'>order</span>
  <span m='143780'>n</span> <span m='143970'>time,</span> <span
  m='144780'>order</span> <span m='145040'>log</span> <span m='145310'>n</span>
  <span m='145470'>time,</span> <span m='145900'>et</span> <span
  m='146040'>cetera.</span> </p><p><span m='147400'>So</span> <span
  m='147570'>in</span> <span m='147740'>general,</span> <span
  m='148370'>I</span> <span m='148510'>think</span> <span m='148940'>for</span>
  <span m='149050'>the</span> <span m='149610'>next</span> <span
  m='149990'>few</span> <span m='150160'>lectures,</span> <span
  m='150810'>you're</span> <span m='150970'>going</span> <span
  m='151150'>to</span> <span m='151230'>see</span> <span m='152910'>a</span>
  <span m='153170'>specification</span> <span m='155610'>of</span> <span
  m='155680'>data</span> <span m='155940'>structure</span> <span
  m='156600'>in</span> <span m='156750'>terms</span> <span m='157100'>of</span>
  <span m='157670'>the</span> <span m='157820'>operations</span> <span
  m='158530'>that the</span> <span m='158640'>data</span> <span
  m='158930'>structure</span> <span m='159270'>should</span> <span
  m='159420'>perform.</span> <span m='160490'>And</span> <span
  m='160650'>those</span> <span m='160800'>of</span> <span m='160900'>you who
  have</span> <span m='161130'>taken</span> <span m='161370'>six</span> <span
  m='161540'>double O</span> <span m='161840'>five,</span> <span
  m='162660'>you'll</span> <span m='162810'>see</span> <span
  m='162970'>that</span> <span m='163120'>it's</span> <span
  m='163260'>basically</span> <span m='163670'>an</span> <span
  m='163750'>abstract</span> <span m='164280'>data</span> <span
  m='164520'>type</span> <span m='165290'>that's</span> <span
  m='165560'>associated</span> <span m='166110'>with</span> <span
  m='167890'>these</span> <span m='168170'>operations.</span> <span
  m='168690'>So</span> <span m='168890'>it's a spec</span> <span m='169490'>for
  the</span> <span m='169610'>abstract</span> <span m='170070'>data</span> <span
  m='170300'>type.</span> </p><p><span m='171540'>In</span> <span
  m='171700'>six</span> <span m='172190'>double O</span> <span
  m='172680'>five,</span> <span m='172960'>you had</span> <span
  m='173280'>really</span> <span m='174200'>spent</span> <span
  m='174490'>a</span> <span m='174540'>lot</span> <span m='174730'>of</span>
  <span m='174800'>time</span> <span m='175310'>on</span> <span
  m='175790'>asymptotic</span> <span m='176300'>complexity,</span> <span
  m='176940'>or</span> <span m='177010'>the</span> <span
  m='177160'>efficiency</span> <span m='177870'>of</span> <span
  m='178000'>operations</span> <span m='178690'>on</span> <span
  m='178800'>the</span> <span m='178930'>abstract</span> <span
  m='179390'>data</span> <span m='179630'>type.</span> <span
  m='180400'>Here,</span> <span m='180730'>in double O</span> <span
  m='180840'>six,</span> <span m='182020'>you'll</span> <span
  m='182170'>specify</span> <span m='182990'>this</span> <span
  m='183280'>ADT,</span> <span m='184505'>and</span> <span
  m='185000'>specify</span> <span m='185400'>the</span> <span
  m='185500'>set</span> <span m='185650'>of</span> <span
  m='185740'>operations</span> <span m='186760'>or</span> <span
  m='186870'>methods</span> <span m='187320'>in</span> <span
  m='187450'>the</span> <span m='187550'>ADT.</span> <span m='188450'>And</span>
  <span m='188660'>we'll</span> <span m='188790'>talk</span> <span
  m='189050'>about</span> <span m='189970'>whether</span> <span
  m='190230'>these</span> <span m='190480'>are</span> <span m='190610'>order
  end</span> <span m='191070'>complexity</span> <span m='192610'>log end</span>
  <span m='192980'>complexity,</span> <span m='193980'>and</span> <span
  m='194240'>compare</span> <span m='194740'>and</span> <span
  m='194840'>contrast</span> <span m='195550'>different</span> <span
  m='195830'>ADTs.</span> </p><p><span m='197250'>So</span> <span
  m='197410'>today's</span> <span m='197740'>ADT</span> <span
  m='198640'>is</span> <span m='198980'>a</span> <span m='199050'>heap.</span>
  <span m='200740'>And</span> <span m='201120'>what</span> <span
  m='201280'>is</span> <span m='202910'>the</span> <span m='203040'>set</span>
  <span m='203220'>of</span> <span m='203300'>operations</span> <span
  m='204630'>that</span> <span m='204980'>we'd</span> <span
  m='205140'>like</span> <span m='205300'>to</span> <span
  m='205380'>perform</span> <span m='205860'>on</span> <span m='206060'>a</span>
  <span m='206120'>priority</span> <span m='206610'>queue?</span> <span
  m='208030'>So</span> <span m='208340'>we</span> <span m='208460'>can</span>
  <span m='208600'>use</span> <span m='208840'>that</span> <span
  m='209090'>to</span> <span m='209180'>motivate</span> <span
  m='209930'>the</span> <span m='210070'>development</span> <span
  m='210550'>of</span> <span m='210630'>the</span> <span m='210710'>heap.</span>
  <span m='211580'>And</span> <span m='211810'>those</span> <span
  m='212060'>are,</span> <span m='212870'>insert</span> <span m='213670'>s
  x.</span> <span m='215080'>So</span> <span m='215270'>you</span> <span
  m='215400'>have</span> <span m='215640'>a</span> <span m='215700'>set</span>
  <span m='216000'>of</span> <span m='216140'>elements</span> <span
  m='216540'>s,</span> <span m='217010'>and</span> <span m='217160'>you</span>
  <span m='217270'>want</span> <span m='217400'>to</span> <span
  m='217440'>be</span> <span m='217540'>able</span> <span m='217700'>to</span>
  <span m='217780'>insert</span> <span m='219500'>element</span> <span
  m='221680'>x</span> <span m='222400'>into</span> <span m='224450'>set</span>
  <span m='224810'>s.</span> <span m='227420'>You</span> <span
  m='227520'>want</span> <span m='227640'>to</span> <span m='227690'>be</span>
  <span m='227740'>able</span> <span m='227880'>to</span> <span
  m='228000'>do</span> <span m='228890'>max</span> <span m='229325'>of</span>
  <span m='229760'>s,</span> <span m='231550'>which is</span> <span
  m='231930'>return</span> <span m='237140'>the</span> <span
  m='237340'>element</span> <span m='237740'>of</span> <span m='237880'>s</span>
  <span m='242000'>with</span> <span m='242190'>the</span> <span
  m='242270'>largest</span> <span m='242760'>key.</span> <span
  m='246740'>And</span> <span m='247640'>different</span> <span
  m='248000'>from</span> <span m='248170'>max</span> <span m='248470'>of</span>
  <span m='248570'>s</span> <span m='251100'>is</span> <span
  m='251350'>extract</span> <span m='251900'>max</span> <span
  m='252770'>of</span> <span m='252920'>x,</span> <span m='254100'>which</span>
  <span m='255420'>not</span> <span m='255650'>only</span> <span
  m='255900'>returns</span> <span m='257519'>the</span> <span
  m='257649'>element</span> <span m='258040'>with</span> <span
  m='258140'>the</span> <span m='258220'>largest</span> <span
  m='258579'>key,</span> <span m='259880'>but</span> <span
  m='260060'>also</span> <span m='264660'>removes</span> <span
  m='265210'>it</span> <span m='266830'>from</span> <span m='267100'>s.</span>
  </p><p><span m='267840'>So</span> <span m='268740'>you</span> <span
  m='268880'>have</span> <span m='269010'>a</span> <span
  m='269070'>queue,</span> <span m='269700'>and</span> <span
  m='270030'>the</span> <span m='270110'>person</span> <span m='270520'>in
  the</span> <span m='270610'>queue</span> <span m='271480'>was</span> <span
  m='271670'>serviced,</span> <span m='272120'>or the</span> <span
  m='272250'>element</span> <span m='272520'>in</span> <span
  m='272590'>the</span> <span m='272680'>queue</span> <span
  m='272930'>was</span> <span m='272990'>serviced,</span> <span
  m='273440'>and</span> <span m='273570'>then</span> <span
  m='273690'>removed</span> <span m='274040'>from</span> <span
  m='274210'>the</span> <span m='274310'>queue.</span> <span
  m='276320'>And</span> <span m='276480'>finally</span> <span
  m='277590'>you</span> <span m='277710'>can</span> <span
  m='277820'>imagine</span> <span m='280420'>changing</span> <span
  m='281950'>the</span> <span m='282110'>priority</span> <span
  m='282850'>of</span> <span m='283010'>a</span> <span
  m='283060'>particular</span> <span m='283510'>element</span> <span
  m='284310'>x</span> <span m='284890'>in</span> <span m='285020'>the</span>
  <span m='285120'>set</span> <span m='285390'>s.</span> <span
  m='286610'>And</span> <span m='286820'>this</span> <span
  m='286980'>priority,</span> <span m='288050'>there's</span> <span
  m='288260'>an</span> <span m='288360'>associated</span> <span
  m='289950'>key</span> <span m='290740'>as</span> <span m='290980'>we</span>
  <span m='291090'>have</span> <span m='292430'>up</span> <span
  m='293060'>there</span> <span m='293430'>with</span> <span
  m='293560'>each</span> <span m='293760'>element.</span> <span
  m='294240'>And</span> <span m='294420'>that</span> <span m='294640'>key</span>
  <span m='294840'>is</span> <span m='295470'>called</span> <span
  m='295680'>a</span> <span m='295800'>k.</span> <span m='296900'>And</span>
  <span m='297180'>increase</span> <span m='297640'>key</span> <span
  m='298830'>s</span> <span m='299370'>x</span> <span m='299850'>k</span> <span
  m='302150'>would</span> <span m='302510'>increase</span> <span
  m='302910'>the</span> <span m='303000'>value</span> <span m='309980'>of</span>
  <span m='310490'>x's</span> <span m='311080'>key</span> <span
  m='313980'>to</span> <span m='314100'>the</span> <span m='314210'>new</span>
  <span m='314420'>value</span> <span m='314840'>k.</span> </p><p><span
  m='321900'>And</span> <span m='322300'>k</span> <span m='324434'>could</span>
  <span m='324880'>correspond</span> <span m='326050'>to,</span> <span
  m='326160'>it's</span> <span m='326270'>just</span> <span
  m='326440'>called</span> <span m='326690'>increase.</span> <span
  m='327990'>Most</span> <span m='328250'>of</span> <span m='328310'>the</span>
  <span m='328400'>time,</span> <span m='329650'>you're</span> <span
  m='330410'>increasing</span> <span m='330820'>the</span> <span
  m='330900'>value</span> <span m='331280'>in</span> <span
  m='331500'>maybe</span> <span m='331790'>a</span> <span
  m='331840'>particular</span> <span m='332190'>application.</span> <span
  m='332780'>You</span> <span m='332890'>could</span> <span
  m='332990'>have</span> <span m='333240'>suddenly</span> <span
  m='333580'>a</span> <span m='333640'>decrease</span> <span
  m='334160'>key,</span> <span m='334970'>and</span> <span m='335240'>you</span>
  <span m='335350'>would have</span> <span m='335520'>to</span> <span
  m='335610'>know</span> <span m='335830'>what</span> <span
  m='335980'>the</span> <span m='336070'>previous</span> <span
  m='336430'>value</span> <span m='336820'>was.</span> <span
  m='337580'>And</span> <span m='337750'>is</span> <span m='337840'>just</span>
  <span m='338050'>a</span> <span m='338100'>matter</span> <span
  m='338430'>of</span> <span m='339040'>exactly</span> <span
  m='339450'>what</span> <span m='339630'>operation</span> <span
  m='340060'>you</span> <span m='340150'>want</span> <span m='340260'>to</span>
  <span m='340310'>perform.</span> <span m='340810'>You</span> <span
  m='340950'>could</span> <span m='341060'>call</span> <span
  m='341270'>it</span> <span m='341430'>update,</span> <span
  m='342910'>or</span> <span m='343300'>increment,</span> <span
  m='344040'>whatever</span> <span m='344210'>you</span> <span
  m='344320'>like.</span> </p><p><span m='346430'>I'm</span> <span
  m='346600'>going</span> <span m='346700'>to</span> <span
  m='346760'>spend</span> <span m='347520'>most</span> <span
  m='347860'>of</span> <span m='347940'>the</span> <span m='348020'>time</span>
  <span m='348330'>here</span> <span m='349740'>talking</span> <span
  m='350080'>about</span> <span m='351580'>how</span> <span
  m='351860'>you</span> <span m='352030'>maintain</span> <span
  m='353860'>a</span> <span m='353940'>rep</span> <span
  m='354190'>invariant</span> <span m='354740'>of</span> <span
  m='354860'>this</span> <span m='355040'>data</span> <span
  m='355260'>structure</span> <span m='356760'>called</span> <span
  m='356990'>the</span> <span m='357100'>heap,</span> <span
  m='357940'>that</span> <span m='359130'>allows</span> <span
  m='359420'>you</span> <span m='359610'>to</span> <span m='359730'>do</span>
  <span m='359900'>these</span> <span m='360170'>operations</span> <span
  m='361500'>in</span> <span m='361640'>an</span> <span
  m='361730'>efficient</span> <span m='362130'>way.</span> <span
  m='362940'>And</span> <span m='363830'>we'll</span> <span
  m='364020'>talk</span> <span m='364240'>about</span> <span
  m='364450'>what</span> <span m='364610'>the</span> <span
  m='364680'>efficiency</span> <span m='365220'>is,</span> <span
  m='365710'>and</span> <span m='365840'>we'll</span> <span
  m='365950'>try</span> <span m='366130'>to</span> <span
  m='366210'>analyze</span> <span m='366660'>the</span> <span
  m='366730'>efficiency</span> <span m='367250'>of</span> <span
  m='367720'>these</span> <span m='367910'>algorithms</span> <span
  m='368330'>that</span> <span m='368420'>we</span> <span m='368560'>put</span>
  <span m='368720'>up.</span> </p><p><span m='371610'>So</span> <span
  m='371820'>let's</span> <span m='372010'>talk</span> <span
  m='372140'>about</span> <span m='372320'>a</span> <span
  m='372380'>heap.</span> <span m='373210'>A</span> <span m='373310'>heap</span>
  <span m='373520'>is</span> <span m='373640'>an</span> <span
  m='373710'>implementation</span> <span m='374360'>of</span> <span
  m='374470'>a</span> <span m='374540'>priority</span> <span
  m='375030'>queue.</span> <span m='377110'>It's</span> <span
  m='378620'>amazingly</span> <span m='379210'>and</span> <span
  m='379400'>array</span> <span m='380030'>structure,</span> <span
  m='381790'>except</span> <span m='382320'>that</span> <span
  m='383060'>you're</span> <span m='383390'>visualizing</span> <span
  m='384160'>this</span> <span m='384360'>array</span> <span
  m='390290'>as</span> <span m='390520'>a</span> <span m='390610'>nearly</span>
  <span m='391120'>complete</span> <span m='392130'>binary</span> <span
  m='392530'>tree.</span> <span m='401130'>And</span> <span
  m='401820'>what</span> <span m='401970'>does</span> <span
  m='402050'>that</span> <span m='402220'>mean</span> <span
  m='402410'>exactly?</span> <span m='403620'>Well,</span> <span
  m='405140'>the</span> <span m='405210'>best</span> <span m='405420'>way</span>
  <span m='405530'>to</span> <span m='405640'>understand</span> <span
  m='406080'>that</span> <span m='406290'>is</span> <span m='407470'>by</span>
  <span m='407650'>looking</span> <span m='407980'>at</span> <span
  m='408250'>an</span> <span m='408350'>example.</span> <span m='411380'>We
  got</span> <span m='411650'>10</span> <span m='412000'>here,</span> <span
  m='412290'>so.</span> <span m='420095'>1, 2, 3, 4, 5, 6, 7, 8, 9, 10.</span>
  </p><p><span m='424390'>So</span> <span m='424630'>here's</span> <span
  m='424910'>my</span> <span m='425140'>array</span> <span m='425520'>of</span>
  <span m='425730'>10</span> <span m='425940'>elements.</span> <span
  m='427560'>And</span> <span m='428520'>the</span> <span
  m='428680'>elements</span> <span m='428800'>are</span> <span m='431010'>16,
  14,</span> <span m='434710'>10,</span> <span m='434980'>8,</span> <span
  m='435190'>7.</span> <span m='440470'>So some</span> <span
  m='440690'>set</span> <span m='440840'>of</span> <span
  m='440920'>elements</span> <span m='441390'>that</span> <span
  m='441510'>are</span> <span m='441540'>in</span> <span
  m='441620'>random</span> <span m='442020'>order,</span> <span
  m='442650'>clearly</span> <span m='442890'>not</span> <span
  m='443140'>sorted,</span> <span m='444370'>and</span> <span
  m='445070'>I'm</span> <span m='445210'>looking</span> <span
  m='445430'>at</span> <span m='445500'>the</span> <span
  m='445590'>indices,</span> <span m='446250'>and</span> <span
  m='446350'>I'm</span> <span m='446430'>looking</span> <span
  m='446670'>at</span> <span m='446750'>the</span> <span
  m='446800'>elements.</span> <span m='447720'>I'm</span> <span
  m='447850'>going</span> <span m='447960'>to</span> <span
  m='448000'>visualize</span> <span m='448660'>this</span> <span
  m='449460'>as</span> <span m='449840'>a</span> <span m='449950'>nearly</span>
  <span m='450430'>complete</span> <span m='450940'>binary</span> <span
  m='451440'>tree.</span> <span m='452200'>Is</span> <span m='452360'>not</span>
  <span m='452530'>a</span> <span m='452590'>full</span> <span
  m='452850'>binary</span> <span m='453250'>tree,</span> <span
  m='453500'>because</span> <span m='453720'>I</span> <span
  m='453760'>only</span> <span m='453940'>have</span> <span m='454100'>10</span>
  <span m='454290'>elements</span> <span m='454670'>in</span> <span
  m='454750'>it,</span> <span m='455870'>and</span> <span m='456260'>it</span>
  <span m='456360'>would</span> <span m='456450'>have</span> <span
  m='456590'>to</span> <span m='456660'>have</span> <span m='458040'>15</span>
  <span m='458320'>elements</span> <span m='458680'>to</span> <span
  m='458750'>be</span> <span m='459650'>a</span> <span
  m='459780'>complete</span> <span m='460150'>binary</span> <span
  m='460520'>tree.</span> <span m='461430'>And</span> <span m='461830'>we</span>
  <span m='461930'>want</span> <span m='462050'>to</span> <span
  m='462090'>be</span> <span m='462180'>able</span> <span m='462340'>to</span>
  <span m='462760'>do</span> <span m='462910'>the</span> <span
  m='463020'>general</span> <span m='463370'>case</span> <span m='464050'>of
  an</span> <span m='464350'>arbitrary</span> <span m='465390'>size</span> <span
  m='465920'>array,</span> <span m='466530'>and</span> <span
  m='466680'>so</span> <span m='466800'>that's</span> <span
  m='466990'>why</span> <span m='467170'>we</span> <span m='467300'>have</span>
  <span m='468720'>nearly</span> <span m='469100'>complete</span> <span
  m='469470'>here.</span> </p><p><span m='470400'>So</span> <span
  m='470640'>what</span> <span m='470770'>does</span> <span m='470910'>it</span>
  <span m='471020'>mean</span> <span m='471260'>to</span> <span
  m='471350'>visualize</span> <span m='471870'>this</span> <span
  m='472130'>as</span> <span m='472470'>a</span> <span m='472570'>tree?</span>
  <span m='473640'>Well,</span> <span m='476080'>index</span> <span
  m='476530'>one</span> <span m='476910'>is</span> <span m='477080'>the</span>
  <span m='477200'>root</span> <span m='477440'>of</span> <span
  m='477540'>the</span> <span m='477620'>tree,</span> <span
  m='479660'>and</span> <span m='480330'>that</span> <span
  m='481570'>item</span> <span m='482120'>is</span> <span m='482260'>the</span>
  <span m='482330'>value is</span> <span m='482690'>16.</span> <span
  m='484370'>And</span> <span m='486320'>what</span> <span m='486450'>I</span>
  <span m='486500'>have</span> <span m='486890'>are</span> <span
  m='487970'>indices</span> <span m='488520'>2</span> <span
  m='488740'>and</span> <span m='488930'>3</span> <span m='490810'>are</span>
  <span m='490960'>the</span> <span m='491080'>children,</span> <span
  m='495400'>and</span> <span m='499630'>4,</span> <span m='500840'>5,</span>
  <span m='501380'>6,</span> <span m='501790'>and</span> <span
  m='501970'>7</span> <span m='503030'>are</span> <span m='503190'>the</span>
  <span m='503310'>children</span> <span m='503700'>of</span> <span
  m='503840'>2</span> <span m='504060'>and</span> <span m='504190'>3.</span>
  <span m='506560'>And</span> <span m='508860'>8,</span> <span
  m='511220'>9,</span> <span m='514809'>and</span> <span m='515039'>10</span>
  <span m='516500'>are</span> <span m='517610'>the</span> <span
  m='517780'>children</span> <span m='518120'>of</span> <span
  m='518320'>4</span> <span m='519429'>and</span> <span m='519539'>5,</span>
  <span m='519830'>in</span> <span m='519909'>this</span> <span
  m='520090'>case.</span> <span m='521100'>And</span> <span m='521289'>so</span>
  <span m='521470'>that's</span> <span m='522020'>the</span> <span
  m='522179'>picture</span> <span m='522490'>you</span> <span
  m='522590'>want</span> <span m='522710'>to</span> <span m='522990'>keep</span>
  <span m='523220'>in</span> <span m='523280'>your</span> <span
  m='523409'>head</span> <span m='523840'>for</span> <span m='523960'>the</span>
  <span m='524039'>rest</span> <span m='524240'>of</span> <span
  m='524320'>this</span> <span m='524450'>lecture.</span> <span
  m='525290'>Any</span> <span m='525450'>time</span> <span m='525660'>you</span>
  <span m='525770'>see</span> <span m='525940'>an</span> <span
  m='526150'>array,</span> <span m='526770'>and you</span> <span
  m='526910'>say</span> <span m='527150'>we're</span> <span
  m='527240'>going</span> <span m='527650'>to</span> <span m='527720'>be</span>
  <span m='527850'>looking</span> <span m='528110'>at</span> <span
  m='528190'>the</span> <span m='528280'>heap</span> <span
  m='528580'>representation</span> <span m='529250'>of</span> <span
  m='529330'>the</span> <span m='529500'>array,</span> <span
  m='530180'>the</span> <span m='530270'>picture</span> <span
  m='530560'>on</span> <span m='530670'>the</span> <span m='530770'>right</span>
  <span m='531680'>tells</span> <span m='531910'>you</span> <span
  m='532010'>what</span> <span m='532170'>the</span> <span
  m='532260'>heap</span> <span m='532480'>looks</span> <span
  m='532690'>like.</span> </p><p><span m='533950'>And</span> <span
  m='534170'>so</span> <span m='534450'>that</span> <span m='534870'>I'm</span>
  <span m='535010'>not</span> <span m='535110'>going</span> <span
  m='535200'>to</span> <span m='535240'>fill</span> <span m='535440'>in</span>
  <span m='535530'>all</span> <span m='535650'>of</span> <span
  m='535740'>these.</span> <span m='536550'>You</span> <span
  m='536660'>can,</span> <span m='537480'>but</span> <span
  m='537620'>I'll</span> <span m='537680'>do</span> <span m='537860'>a</span>
  <span m='537930'>couple.</span> <span m='538970'>So</span> <span
  m='539120'>you</span> <span m='539220'>have</span> <span m='539590'>10</span>
  <span m='539890'>here,</span> <span m='541220'>and</span> <span
  m='543740'>8,</span> <span m='544940'>7,</span> <span m='545680'>et</span>
  <span m='545830'>cetera.</span> <span m='547640'>So</span> <span
  m='547790'>that's</span> <span m='548530'>a</span> <span
  m='548590'>heap</span> <span m='548830'>structure.</span> </p><p><span
  m='550390'>So</span> <span m='550570'>what's</span> <span
  m='550800'>nice</span> <span m='551030'>about</span> <span
  m='551270'>this</span> <span m='551470'>heap</span> <span
  m='551660'>structure,</span> <span m='552920'>is</span> <span
  m='553150'>that</span> <span m='554220'>you'll</span> <span
  m='554800'>have</span> <span m='555440'>tree</span> <span
  m='556120'>representation</span> <span m='557970'>of</span> <span
  m='558640'>an</span> <span m='558720'>array,</span> <span
  m='559550'>and</span> <span m='559820'>that</span> <span
  m='559950'>lets</span> <span m='560160'>you</span> <span m='560270'>do</span>
  <span m='560530'>a</span> <span m='560900'>bunch</span> <span
  m='561150'>of</span> <span m='561280'>interesting</span> <span
  m='561710'>things.</span> <span m='563010'>What</span> <span
  m='563190'>do</span> <span m='563240'>you</span> <span m='563350'>get</span>
  <span m='565850'>out</span> <span m='566020'>of</span> <span
  m='566120'>this</span> <span m='566300'>visualization?</span> <span
  m='567630'>Well,</span> <span m='572820'>the</span> <span
  m='573110'>root</span> <span m='573430'>of</span> <span m='573540'>the</span>
  <span m='573640'>tree</span> <span m='575710'>is</span> <span
  m='575950'>the</span> <span m='576050'>first</span> <span
  m='576430'>element</span> <span m='580060'>corresponding</span> <span
  m='580570'>to</span> <span m='580700'>i</span> <span m='580860'>equals</span>
  <span m='581160'>1.</span> <span m='583610'>The</span> <span
  m='583730'>parent</span> <span m='586426'>of</span> <span m='586910'>i</span>
  <span m='588490'>is</span> <span m='589050'>i</span> <span
  m='589410'>over</span> <span m='589710'>2.</span> <span m='592410'>The</span>
  <span m='592550'>left</span> <span m='592880'>child</span> <span
  m='594290'>of</span> <span m='594420'>i</span> <span m='595050'>is</span>
  <span m='595460'>2i.</span> <span m='597180'>And</span> <span
  m='597580'>the</span> <span m='597660'>right</span> <span
  m='597930'>child</span> <span m='600220'>of i</span> <span
  m='601420'>is</span> <span m='601900'>2i</span> <span m='602250'>plus</span>
  <span m='602500'>1.</span> <span m='606060'>So</span> <span
  m='606230'>that's</span> <span m='606490'>essentially</span> <span
  m='606970'>what</span> <span m='607490'>this</span> <span
  m='607740'>mapping</span> <span m='608130'>corresponds</span> <span
  m='608670'>to.</span> </p><p><span m='609810'>Now</span> <span
  m='609960'>on</span> <span m='610110'>top</span> <span m='610340'>of</span>
  <span m='610420'>that,</span> <span m='612010'>this</span> <span
  m='612190'>is</span> <span m='612280'>just</span> <span m='612510'>what</span>
  <span m='612680'>a</span> <span m='613080'>heap</span> <span
  m='613340'>corresponds</span> <span m='613910'>to.</span> <span
  m='615230'>We're</span> <span m='615380'>going</span> <span
  m='615570'>to</span> <span m='615630'>have</span> <span
  m='616600'>particular</span> <span m='616980'>types</span> <span
  m='617400'>of</span> <span m='617500'>heaps</span> <span
  m='618480'>that</span> <span m='619940'>we'll</span> <span
  m='620060'>call</span> <span m='620520'>max-heaps</span> <span
  m='621320'>and</span> <span m='621550'>min-heaps.</span> <span
  m='623050'>And</span> <span m='623420'>as</span> <span m='623540'>you</span>
  <span m='623620'>can</span> <span m='623710'>imagine,</span> <span
  m='624100'>max-heaps</span> <span m='624610'>and</span> <span
  m='624810'>min-heaps</span> <span m='625270'>have</span> <span
  m='625500'>additional</span> <span m='625890'>properties</span> <span
  m='626880'>on</span> <span m='627070'>top</span> <span m='627360'>of</span>
  <span m='627800'>the</span> <span m='627960'>basic</span> <span
  m='628380'>keep</span> <span m='628630'>structures.</span> <span
  m='629230'>So</span> <span m='629330'>this</span> <span m='629500'>is</span>
  <span m='630070'>essentially</span> <span m='630430'>a</span> <span
  m='630480'>definition</span> <span m='630960'>of</span> <span
  m='631080'>a</span> <span m='631130'>heap.</span> <span m='631770'>Now
  I'm</span> <span m='632050'>going</span> <span m='632170'>to</span> <span
  m='632210'>define</span> <span m='633330'>what</span> <span
  m='633520'>the</span> <span m='633590'>max-heap</span> <span
  m='634100'>property</span> <span m='634650'>is.</span> <span
  m='641510'>And</span> <span m='641650'>the</span> <span
  m='641720'>max-heap</span> <span m='642160'>property</span> <span
  m='643200'>says</span> <span m='643770'>that</span> <span
  m='645530'>the</span> <span m='645670'>key</span> <span m='649430'>of a</span>
  <span m='649720'>node</span> <span m='652270'>is</span> <span
  m='652900'>greater</span> <span m='653180'>than</span> <span
  m='653390'>or</span> <span m='653500'>equal</span> <span m='653860'>to</span>
  <span m='657800'>the</span> <span m='657990'>keys</span> <span
  m='659460'>of</span> <span m='659860'>its</span> <span
  m='660130'>children.</span> <span m='666120'>OK,</span> <span
  m='666320'>that's</span> <span m='666510'>it.</span> </p><p><span
  m='668200'>It's</span> <span m='668400'>obviously</span> <span
  m='668760'>recursive,</span> <span m='670360'>in</span> <span
  m='670510'>the</span> <span m='670610'>sense</span> <span
  m='670960'>that</span> <span m='672550'>you</span> <span
  m='672700'>have</span> <span m='672890'>to</span> <span m='672970'>have</span>
  <span m='673730'>this</span> <span m='674530'>true</span> <span
  m='675480'>for</span> <span m='676830'>every</span> <span
  m='677150'>node</span> <span m='677860'>in</span> <span m='678060'>the</span>
  <span m='678190'>tree.</span> <span m='679220'>And</span> <span
  m='679880'>when</span> <span m='679980'>you</span> <span m='680070'>get</span>
  <span m='680220'>down</span> <span m='680460'>to</span> <span
  m='680540'>the</span> <span m='680580'>leaves</span> <span
  m='681030'>of</span> <span m='681150'>the</span> <span m='681250'>tree,</span>
  <span m='683000'>they're</span> <span m='683840'>not</span> <span
  m='684060'>children</span> <span m='684610'>corresponding</span> <span
  m='685030'>to</span> <span m='685100'>the</span> <span
  m='685230'>leaves,</span> <span m='685660'>So</span> <span
  m='685690'>that's</span> <span m='685900'>a</span> <span
  m='685970'>trivial</span> <span m='686360'>property.</span> <span
  m='687390'>But</span> <span m='688000'>at</span> <span
  m='688410'>higher</span> <span m='688730'>levels,</span> <span
  m='689960'>you're</span> <span m='690180'>going</span> <span
  m='690310'>to</span> <span m='690350'>have</span> <span
  m='690570'>children,</span> <span m='691440'>and</span> <span
  m='691610'>you</span> <span m='691690'>have</span> <span m='691810'>to</span>
  <span m='691890'>check</span> <span m='692170'>that.</span> </p><p><span
  m='693150'>So</span> <span m='693290'>if</span> <span m='693370'>you</span>
  <span m='693460'>look</span> <span m='693610'>at</span> <span
  m='693720'>this</span> <span m='693900'>example</span> <span
  m='694360'>here,</span> <span m='696630'>maybe</span> <span
  m='696850'>I</span> <span m='696890'>should</span> <span
  m='697120'>fill</span> <span m='697460'>this whole</span> <span
  m='697830'>thing out.</span> <span m='698730'>A</span> <span
  m='698920'>have</span> <span m='699170'>eight</span> <span
  m='699450'>and</span> <span m='699590'>seven</span> <span
  m='699950'>here,</span> <span m='701230'>and</span> <span
  m='701550'>six</span> <span m='701830'>would</span> <span m='701970'>be</span>
  <span m='702110'>nine.</span> <span m='703600'>And</span> <span
  m='703830'>I</span> <span m='703860'>have</span> <span m='704440'>three</span>
  <span m='704780'>over</span> <span m='704960'>here,</span> <span
  m='707130'>and</span> <span m='707490'>then</span> <span
  m='707740'>two,</span> <span m='708810'>four,</span> <span
  m='709890'>one.</span> <span m='711510'>So</span> <span m='712000'>we</span>
  <span m='712110'>can</span> <span m='712220'>look</span> <span
  m='712380'>at</span> <span m='712460'>this</span> <span m='713690'>and</span>
  <span m='713910'>check</span> <span m='714270'>whether</span> <span
  m='714530'>it</span> <span m='714630'>has</span> <span m='715030'>the</span>
  <span m='715150'>max-heap</span> <span m='715720'>property</span> <span
  m='716240'>or</span> <span m='716310'>not.</span> <span m='717720'>Does
  it</span> <span m='717950'>have</span> <span m='718090'>the</span> <span
  m='718160'>max-heap</span> <span m='718540'>property?</span> <span
  m='719810'>This</span> <span m='719930'>heap?</span> <span
  m='721110'>Yeah.</span> <span m='721600'>All</span> <span
  m='721780'>you</span> <span m='721850'>have</span> <span m='721980'>to</span>
  <span m='722060'>do</span> <span m='722230'>is</span> <span
  m='722370'>look</span> <span m='722640'>at</span> <span
  m='723910'>these</span> <span m='724220'>nodes.</span> <span
  m='725110'>one,</span> <span m='725570'>two,</span> <span
  m='726100'>three</span> <span m='726730'>indices,</span> <span
  m='727870'>index</span> <span m='728220'>four,</span> <span
  m='728676'>five,</span> <span m='729132'>six,</span> <span m='730080'>but
  you</span> <span m='730210'>don't</span> <span m='730440'>have to look</span>
  <span m='730580'>at</span> <span m='730670'>six</span> <span
  m='730860'>and</span> <span m='730980'>seven,</span> <span
  m='731940'>because</span> <span m='732560'>they</span> <span
  m='732630'>don't</span> <span m='732780'>have</span> <span
  m='732880'>any</span> <span m='733020'>children.</span> <span
  m='734110'>But</span> <span m='734350'>you</span> <span
  m='734440'>could</span> <span m='734560'>shop</span> <span
  m='734880'>with</span> <span m='735660'>five</span> <span
  m='736090'>here,</span> <span m='737180'>and</span> <span
  m='737970'>you</span> <span m='738350'>look</span> <span m='738520'>at</span>
  <span m='738560'>the</span> <span m='738660'>children,</span> <span
  m='739380'>and</span> <span m='740400'>there you</span> <span
  m='740600'>go.</span> <span m='741600'>To</span> <span m='741690'>the</span>
  <span m='741810'>parent</span> <span m='742670'>is</span> <span
  m='742890'>greater</span> <span m='743200'>than</span> <span
  m='743530'>or</span> <span m='743660'>equal</span> <span m='744110'>to</span>
  <span m='745240'>either</span> <span m='745510'>of</span> <span
  m='745590'>its</span> <span m='745720'>children,</span> <span m='746100'>or
  its</span> <span m='746330'>only</span> <span m='746580'>child,</span> <span
  m='747410'>in</span> <span m='747530'>the</span> <span m='747610'>case</span>
  <span m='747860'>of</span> <span m='748850'>node</span> <span
  m='749190'>five.</span> <span m='750130'>And</span> <span m='750350'>so</span>
  <span m='750440'>you</span> <span m='750550'>have</span> <span
  m='750700'>the</span> <span m='750770'>max-heap</span> <span
  m='751140'>property.</span> <span m='752650'>So</span> <span
  m='752720'>fairly</span> <span m='753020'>straightforward</span> <span
  m='753580'>property.</span> </p><p><span m='756100'>And</span> <span
  m='757250'>you</span> <span m='757380'>can</span> <span
  m='757690'>imagine</span> <span m='758160'>defining</span> <span
  m='759830'>the</span> <span m='760000'>min-heap</span> <span
  m='760510'>property</span> <span m='761940'>in</span> <span
  m='762100'>an</span> <span m='762180'>equivalent</span> <span
  m='762690'>way.</span> <span m='763900'>Just</span> <span
  m='764130'>replace</span> <span m='764520'>the</span> <span
  m='764630'>greater</span> <span m='764870'>than</span> <span
  m='765350'>or</span> <span m='765500'>equal</span> <span m='765770'>to,</span>
  <span m='765980'>with</span> <span m='766110'>less</span> <span
  m='766350'>than</span> <span m='766440'>or</span> <span
  m='766580'>equal</span> <span m='766860'>to.</span> <span m='768050'>So</span>
  <span m='768480'>right</span> <span m='768720'>off</span> <span
  m='768840'>the</span> <span m='768930'>bat,</span> <span
  m='772200'>what</span> <span m='772630'>operation</span> <span
  m='774030'>is</span> <span m='774280'>going</span> <span m='774480'>to</span>
  <span m='774540'>be</span> <span m='775240'>trivially</span> <span
  m='775910'>performed</span> <span m='777670'>on</span> <span
  m='777910'>a</span> <span m='777960'>max-heap?</span> <span m='779630'>This
  is</span> <span m='779880'>kind</span> <span m='780050'>of</span> <span
  m='780120'>trivial</span> <span m='780510'>question.</span> <span
  m='783080'>Yep.</span> <span m='784940'>Just</span> <span
  m='785140'>finding</span> <span m='785390'>the</span> <span
  m='785460'>biggest</span> <span m='785720'>element.</span> <span
  m='786090'>Exactly</span> <span m='786520'>right.</span> <span
  m='788550'>The</span> <span m='788860'>max</span> <span
  m='789290'>operation.</span> </p><p><span m='790330'>Now,</span> <span
  m='791710'>what</span> <span m='791840'>about</span> <span
  m='792130'>extract</span> <span m='792810'>max?</span> <span
  m='794610'>Is</span> <span m='794780'>that</span> <span
  m='795780'>trivially</span> <span m='796140'>performed</span> <span
  m='797040'>on</span> <span m='797220'>a</span> <span
  m='797250'>max-heap?</span> <span m='799150'>No.</span> <span
  m='802110'>What</span> <span m='802580'>do</span> <span m='802650'>I</span>
  <span m='802710'>mean</span> <span m='802910'>by</span> <span
  m='803030'>that?</span> <span m='804220'>When</span> <span
  m='804410'>you</span> <span m='804520'>say,</span> <span m='805940'>max</span>
  <span m='806300'>is</span> <span m='806430'>trivially</span> <span
  m='806700'>performed,</span> <span m='807770'>what</span> <span
  m='807940'>it</span> <span m='808010'>means</span> <span m='808350'>is</span>
  <span m='808530'>that</span> <span m='808830'>you</span> <span
  m='808950'>can</span> <span m='809070'>return</span> <span
  m='809470'>the</span> <span m='809560'>max,</span> <span m='810480'>you</span>
  <span m='810580'>can</span> <span m='810670'>find</span> <span
  m='810980'>the</span> <span m='811050'>maximum</span> <span
  m='811530'>element,</span> <span m='811900'>or</span> <span
  m='812220'>a</span> <span m='812250'>maximum</span> <span
  m='812720'>element,</span> <span m='813730'>and</span> <span
  m='814670'>you</span> <span m='814940'>obviously</span> <span
  m='815270'>don't</span> <span m='815470'>modify</span> <span
  m='815880'>the</span> <span m='816000'>heap.</span> <span
  m='817050'>And</span> <span m='817320'>the</span> <span m='817400'>heap</span>
  <span m='817720'>stays</span> <span m='817970'>the</span> <span
  m='818050'>same,</span> <span m='818830'>so</span> <span m='818860'>it</span>
  <span m='818970'>stays</span> <span m='819290'>a</span> <span
  m='819350'>max-heap.</span> <span m='820690'>In</span> <span
  m='820860'>general,</span> <span m='821720'>when</span> <span
  m='821800'>we</span> <span m='821910'>talk</span> <span
  m='822090'>about</span> <span m='822260'>data</span> <span
  m='822450'>structures,</span> <span m='823000'>and</span> <span
  m='823120'>this</span> <span m='823340'>goes</span> <span
  m='823560'>back</span> <span m='823820'>to</span> <span m='824140'>rep</span>
  <span m='824360'>invariance,</span> <span m='824890'>which</span> <span
  m='825050'>I've</span> <span m='825260'>mentioned</span> <span
  m='825630'>already,</span> <span m='826480'>you</span> <span
  m='826620'>typically</span> <span m='826990'>want</span> <span
  m='827160'>to</span> <span m='827210'>maintain</span> <span
  m='827840'>this</span> <span m='828310'>rep</span> <span
  m='828540'>invariant.</span> <span m='829440'>And</span> <span
  m='829600'>so</span> <span m='829890'>the</span> <span m='830000'>rep</span>
  <span m='830170'>invariant</span> <span m='831450'>of</span> <span
  m='832130'>our</span> <span m='832360'>data</span> <span
  m='832570'>structure,</span> <span m='833360'>in</span> <span
  m='833540'>this</span> <span m='833740'>case,</span> <span
  m='834020'>is</span> <span m='834120'>a</span> <span
  m='834170'>max-heap</span> <span m='834640'>property.</span> <span
  m='835780'>OK.</span> <span m='836150'>So</span> <span m='836310'>we</span>
  <span m='836400'>want</span> <span m='836520'>to</span> <span
  m='836570'>maintain</span> <span m='837060'>the</span> <span
  m='837140'>max-heap</span> <span m='837630'>property</span> <span
  m='838510'>as</span> <span m='838830'>we</span> <span m='839150'>modify</span>
  <span m='839780'>the</span> <span m='839910'>heat.</span> <span
  m='840500'>So</span> <span m='840660'>if you</span> <span m='840760'>go</span>
  <span m='840940'>from</span> <span m='841100'>one</span> <span
  m='841280'>heap</span> <span m='841550'>to another,</span> <span
  m='842610'>you</span> <span m='842720'>start</span> <span m='842990'>at</span>
  <span m='843040'>the</span> <span m='843110'>max-heap,</span> <span
  m='843700'>you</span> <span m='843850'>want</span> <span m='843970'>to
  end</span> <span m='844200'>with</span> <span m='844300'>the</span> <span
  m='844370'>max-heap.</span> </p><p><span m='846430'>It</span> <span
  m='846510'>makes</span> <span m='846710'>perfect</span> <span
  m='846970'>sense,</span> <span m='847280'>because</span> <span
  m='848100'>in</span> <span m='848730'>one</span> <span m='849020'>of</span>
  <span m='849090'>the</span> <span m='849650'>simplest</span> <span
  m='850110'>things</span> <span m='850340'>that</span> <span
  m='850440'>you</span> <span m='850540'>want</span> <span m='850650'>to</span>
  <span m='850710'>do</span> <span m='850850'>in a</span> <span
  m='850940'>priority</span> <span m='851480'>queue,</span> <span
  m='852190'>is</span> <span m='852690'>you</span> <span m='852820'>want</span>
  <span m='852930'>to</span> <span m='852970'>be</span> <span
  m='853050'>able</span> <span m='853180'>to</span> <span
  m='853240'>create</span> <span m='854360'>a</span> <span
  m='854420'>priority</span> <span m='854870'>queue,</span> <span
  m='855270'>and</span> <span m='855370'>you</span> <span m='855450'>want</span>
  <span m='855570'>to</span> <span m='855610'>be</span> <span
  m='855950'>able</span> <span m='856220'>to</span> <span m='856320'>run</span>
  <span m='856720'>extract</span> <span m='857270'>max</span> <span
  m='857750'>on</span> <span m='857940'>the</span> <span
  m='858020'>priority</span> <span m='858480'>queue,</span> <span
  m='859110'>over</span> <span m='859430'>and</span> <span
  m='859570'>over.</span> <span m='860870'>And</span> <span
  m='861190'>what</span> <span m='861340'>that</span> <span
  m='861460'>means,</span> <span m='861770'>is</span> <span
  m='861910'>that</span> <span m='862070'>you</span> <span
  m='862190'>take</span> <span m='862350'>the</span> <span m='862410'>max</span>
  <span m='862640'>element,</span> <span m='863020'>you</span> <span
  m='863120'>delete</span> <span m='863450'>it,</span> <span
  m='864070'>take</span> <span m='864260'>the</span> <span
  m='864330'>next</span> <span m='864570'>max</span> <span
  m='864830'>element,</span> <span m='865330'>delete it,</span> <span
  m='865820'>and</span> <span m='865980'>so</span> <span m='866130'>on</span>
  <span m='866270'>and so</span> <span m='866440'>forth.</span> <span
  m='867110'>And</span> <span m='867240'>there</span> <span
  m='867340'>you</span> <span m='867450'>go.</span> </p><p><span
  m='870160'>It's</span> <span m='870340'>a</span> <span m='870380'>bit</span>
  <span m='870500'>of</span> <span m='870590'>a</span> <span
  m='870650'>preview</span> <span m='871000'>here,</span> <span
  m='871710'>but</span> <span m='872350'>you</span> <span
  m='872490'>could</span> <span m='872570'>imagine</span> <span
  m='872930'>that</span> <span m='873060'>if</span> <span m='873140'>you</span>
  <span m='873230'>did</span> <span m='873450'>that,</span> <span
  m='874670'>you</span> <span m='874850'>would</span> <span
  m='875000'>get</span> <span m='875850'>a</span> <span m='875940'>sorted</span>
  <span m='877140'>list</span> <span m='877450'>of</span> <span
  m='877550'>elements</span> <span m='878350'>in</span> <span
  m='878530'>decreasing</span> <span m='879100'>order.</span> <span
  m='880460'>So</span> <span m='880610'>you</span> <span m='880700'>see</span>
  <span m='880860'>the</span> <span m='880960'>connection</span> <span
  m='881860'>to</span> <span m='881990'>sorting,</span> <span
  m='882820'>because</span> <span m='883270'>you</span> <span
  m='883390'>could</span> <span m='883500'>imagine</span> <span
  m='883850'>that</span> <span m='883970'>once</span> <span m='884190'>we</span>
  <span m='884290'>have</span> <span m='884490'>this</span> <span
  m='884650'>heap</span> <span m='884850'>structure,</span> <span
  m='885360'>and</span> <span m='885460'>we</span> <span m='885530'>can</span>
  <span m='885660'>maintain</span> <span m='886250'>the</span> <span
  m='886330'>max-heap</span> <span m='886810'>property,</span> <span
  m='887810'>that</span> <span m='888100'>we</span> <span
  m='888260'>could</span> <span m='888440'>continually</span> <span
  m='888990'>run</span> <span m='889330'>extract</span> <span
  m='889860'>max</span> <span m='890190'>on</span> <span m='890400'>it.</span>
  <span m='891010'>And</span> <span m='891110'>if</span> <span
  m='891210'>you</span> <span m='891310'>could</span> <span
  m='891410'>build</span> <span m='891570'>extract</span> <span
  m='891990'>max</span> <span m='892450'>in</span> <span m='892590'>an</span>
  <span m='892680'>efficient</span> <span m='893100'>way,</span> <span
  m='893790'>you</span> <span m='893880'>might</span> <span
  m='894030'>have</span> <span m='895196'>a</span> <span
  m='895570'>fantastic</span> <span m='896210'>sorting</span> <span
  m='896530'>algorithm.</span> </p><p><span m='899570'>So,</span> <span
  m='902260'>the</span> <span m='902420'>big</span> <span
  m='902620'>question</span> <span m='903030'>that</span> <span
  m='903440'>really</span> <span m='903780'>remains,</span> <span
  m='904280'>is</span> <span m='904750'>how</span> <span m='904890'>do</span>
  <span m='904950'>we</span> <span m='905080'>maintain</span> <span
  m='906220'>the</span> <span m='906310'>max-heap</span> <span
  m='906760'>property</span> <span m='907520'>as</span> <span
  m='907910'>we</span> <span m='908070'>modify</span> <span
  m='908750'>the</span> <span m='908840'>heap?</span> <span
  m='910370'>And</span> <span m='912120'>the</span> <span
  m='912230'>other</span> <span m='912510'>question,</span> <span
  m='913440'>which</span> <span m='913660'>I</span> <span
  m='913720'>haven't</span> <span m='913970'>answered</span> <span
  m='915030'>is--</span> <span m='923170'>this</span> <span
  m='923520'>array</span> <span m='924560'>that</span> <span
  m='925470'>turns</span> <span m='925780'>out</span> <span m='926010'>it</span>
  <span m='926180'>was</span> <span m='926500'>a</span> <span
  m='926540'>max-heap,</span> <span m='928760'>but</span> <span
  m='929030'>it's</span> <span m='929170'>quite</span> <span
  m='929440'>possible</span> <span m='930540'>that</span> <span
  m='930800'>I</span> <span m='930870'>have</span> <span m='931410'>a</span>
  <span m='931580'>trivial</span> <span m='932050'>example</span> <span
  m='932580'>of</span> <span m='932730'>an</span> <span m='933530'>array.</span>
  <span m='941040'>In</span> <span m='941140'>fact,</span> <span
  m='941350'>let</span> <span m='941380'>me</span> <span m='941650'>make
  this</span> <span m='941790'>one.</span> <span m='944830'>That</span> <span
  m='945370'>is</span> <span m='945470'>not</span> <span m='945680'>a</span>
  <span m='945720'>max-heap.</span> <span m='946870'>It's</span> <span
  m='947090'>not</span> <span m='947240'>a</span> <span
  m='947280'>max-heap,</span> <span m='947680'>it's</span> <span
  m='947940'>not</span> <span m='948080'>a</span> <span
  m='948130'>min-heap,</span> <span m='949040'>it's</span> <span
  m='949210'>neither.</span> <span m='949720'>Right?</span> <span
  m='949910'>it's</span> <span m='950030'>just</span> <span m='950250'>a</span>
  <span m='950300'>heap.</span> </p><p><span m='951930'>So</span> <span
  m='952390'>if</span> <span m='952550'>I</span> <span m='952620'>just</span>
  <span m='952870'>transform,</span> <span m='956050'>or</span> <span
  m='956160'>visualize</span> <span m='956740'>I</span> <span
  m='956780'>should</span> <span m='956960'>say,</span> <span
  m='957800'>this</span> <span m='958130'>array</span> <span
  m='958590'>as</span> <span m='959430'>a</span> <span m='959490'>heap,</span>
  <span m='960330'>I</span> <span m='960440'>don't</span> <span
  m='960600'>have</span> <span m='960760'>a</span> <span
  m='960820'>max-heap,</span> <span m='961200'>I</span> <span
  m='961420'>don't</span> <span m='961490'>have</span> <span m='961610'>a</span>
  <span m='961750'>min-heap.</span> <span m='962690'>So</span> <span
  m='962830'>if</span> <span m='962960'>I'm</span> <span m='963170'>very</span>
  <span m='963440'>interested</span> <span m='963770'>in</span> <span
  m='963870'>sorting,</span> <span m='964250'>and</span> <span m='964360'>I
  am,</span> <span m='967150'>there's</span> <span m='967390'>this</span> <span
  m='967570'>another</span> <span m='967890'>thing</span> <span
  m='968210'>that's</span> <span m='968450'>sort</span> <span
  m='968570'>of</span> <span m='968640'>missing</span> <span m='969030'>here
  that</span> <span m='969450'>we</span> <span m='969530'>have</span> <span
  m='969660'>to</span> <span m='969740'>work</span> <span m='969980'>on,</span>
  <span m='970710'>which</span> <span m='970920'>is</span> <span
  m='971090'>how</span> <span m='971280'>are</span> <span m='971380'>we</span>
  <span m='971500'>going</span> <span m='971740'>to</span> <span
  m='971810'>build</span> <span m='973120'>a</span> <span
  m='973200'>max-heap</span> <span m='974430'>out</span> <span
  m='974670'>of</span> <span m='975080'>an</span> <span
  m='975270'>initially</span> <span m='976000'>unsorted</span> <span
  m='976600'>array.</span> <span m='978270'>Which</span> <span
  m='978520'>may</span> <span m='978700'>or</span> <span m='978800'>may</span>
  <span m='978940'>not</span> <span m='980010'>turn</span> <span
  m='980230'>into</span> <span m='980490'>a</span> <span
  m='980550'>max-heap.</span> <span m='981210'>This</span> <span
  m='981770'>trivially</span> <span m='982480'>happened</span> <span
  m='982770'>to</span> <span m='982820'>be</span> <span
  m='982950'>exactly</span> <span m='983350'>the</span> <span
  m='983430'>right</span> <span m='983660'>thing,</span> <span
  m='983860'>because</span> <span m='984090'>I</span> <span
  m='984150'>picked</span> <span m='984470'>it,</span> <span
  m='985140'>and</span> <span m='985280'>it</span> <span
  m='985430'>turned</span> <span m='985680'>into</span> <span
  m='985850'>a</span> <span m='985910'>max-heap</span> <span
  m='986810'>just</span> <span m='987060'>by</span> <span
  m='987650'>visualizing</span> <span m='988260'>it.</span> <span
  m='988720'>But</span> <span m='989040'>it's</span> <span
  m='989180'>quite</span> <span m='989370'>possible</span> <span
  m='989760'>that</span> <span m='990150'>you</span> <span
  m='990270'>have</span> <span m='990430'>arrays</span> <span
  m='990890'>that</span> <span m='991020'>are</span> <span
  m='991240'>input</span> <span m='991590'>to</span> <span
  m='991680'>your</span> <span m='991850'>sorting</span> <span
  m='992170'>algorithm</span> <span m='992890'>that</span> <span
  m='993020'>look</span> <span m='993170'>like</span> <span
  m='993330'>that.</span> </p><p><span m='997500'>OK,</span> <span
  m='998790'>so</span> <span m='999350'>let's</span> <span
  m='999610'>dive</span> <span m='999840'>into</span> <span
  m='1000210'>heap</span> <span m='1000440'>operations.</span> <span
  m='1001060'>I'm</span> <span m='1001170'>going</span> <span
  m='1001290'>to</span> <span m='1001330'>have</span> <span
  m='1001450'>spend</span> <span m='1003080'>some time</span> <span
  m='1004960'>describing</span> <span m='1005550'>to you</span> <span
  m='1006910'>a</span> <span m='1007140'>bunch</span> <span
  m='1007460'>of</span> <span m='1007550'>different</span> <span
  m='1008390'>methods</span> <span m='1009270'>that</span> <span m='1009390'>you
  would</span> <span m='1009600'>call</span> <span m='1009870'>on</span> <span
  m='1009970'>a</span> <span m='1010070'>heap.</span> <span
  m='1010920'>And</span> <span m='1011340'>all</span> <span
  m='1011570'>of</span> <span m='1011660'>these</span> <span
  m='1011830'>methods</span> <span m='1012850'>are</span> <span
  m='1013590'>going</span> <span m='1013780'>to</span> <span
  m='1013830'>have</span> <span m='1014140'>to</span> <span
  m='1014250'>maintain</span> <span m='1015600'>our</span> <span
  m='1015750'>representation</span> <span m='1016440'>invariant</span> <span
  m='1017030'>of</span> <span m='1017100'>the</span> <span
  m='1017170'>max-heap</span> <span m='1017580'>property.</span> <span
  m='1019840'>So</span> <span m='1020070'>what</span> <span
  m='1020290'>are</span> <span m='1020310'>the</span> <span m='1020520'>heap
  operations</span> <span m='1022210'>that</span> <span m='1022340'>we</span>
  <span m='1022450'>have</span> <span m='1022630'>to</span> <span
  m='1023510'>implement</span> <span m='1026089'>and</span> <span
  m='1026740'>analyze</span> <span m='1027160'>the</span> <span
  m='1027250'>complexity</span> <span m='1027750'>for?</span> <span
  m='1028910'>Well,</span> <span m='1029540'>we're</span> <span
  m='1029780'>going to have</span> <span m='1030010'>build-max-heap</span> <span
  m='1033569'>which</span> <span m='1034990'>produces</span> <span
  m='1037930'>a</span> <span m='1038000'>max-heap</span> <span
  m='1042569'>from</span> <span m='1042810'>an</span> <span
  m='1043040'>arbitrary</span> <span m='1043740'>or</span> <span
  m='1043950'>unordered</span> <span m='1044500'>array.</span> <span
  m='1048190'>So</span> <span m='1048359'>somehow</span> <span
  m='1049570'>I</span> <span m='1049690'>got</span> <span m='1049830'>to</span>
  <span m='1049940'>turn</span> <span m='1050210'>this</span> <span
  m='1050650'>into,</span> <span m='1052690'>for</span> <span
  m='1052900'>example,</span> <span m='1053420'>four,</span> <span
  m='1054710'>two,</span> <span m='1055860'>one.</span> <span
  m='1057510'>Which</span> <span m='1057660'>is</span> <span
  m='1057770'>in</span> <span m='1057990'>effect,</span> <span
  m='1058580'>sorting</span> <span m='1059100'>this array.</span> <span
  m='1060510'>Or</span> <span m='1060680'>changing</span> <span
  m='1061060'>the</span> <span m='1061160'>order.</span> <span
  m='1061570'>Maybe</span> <span m='1061780'>not</span> <span
  m='1062030'>fully</span> <span m='1062300'>sorting</span> <span
  m='1062680'>it,</span> <span m='1062830'>but</span> <span
  m='1062920'>changing</span> <span m='1063260'>the</span> <span
  m='1063350'>order.</span> <span m='1064490'>So</span> <span
  m='1064600'>that's</span> <span m='1064760'>what</span> <span
  m='1064880'>I</span> <span m='1064960'>have</span> <span m='1065130'>to</span>
  <span m='1065230'>do,</span> <span m='1065750'>and</span> <span
  m='1065940'>build-max-heap</span> <span m='1067240'>is</span> <span
  m='1068100'>going</span> <span m='1068240'>to</span> <span
  m='1068280'>have</span> <span m='1068440'>to</span> <span
  m='1068530'>do</span> <span m='1068630'>that.</span> </p><p><span
  m='1071380'>In</span> <span m='1071530'>order</span> <span m='1071740'>to
  do</span> <span m='1071850'>build-max-heap,</span> <span
  m='1075040'>the</span> <span m='1075190'>first</span> <span
  m='1077820'>procedure</span> <span m='1079660'>that</span> <span
  m='1080630'>I'm</span> <span m='1080760'>going</span> <span
  m='1080860'>to</span> <span m='1080900'>describe</span> <span m='1081260'>to
  you,</span> <span m='1081650'>is</span> <span m='1081860'>called</span> <span
  m='1082810'>max-heapify.</span> <span m='1085320'>Heapify.</span> <span
  m='1086660'>Sounds</span> <span m='1087040'>a little</span> <span
  m='1087580'>strange,</span> <span m='1087960'>but</span> <span
  m='1091250'>I</span> <span m='1091320'>guess</span> <span
  m='1091440'>you</span> <span m='1091530'>can</span> <span
  m='1091650'>-ify</span> <span m='1092190'>pretty</span> <span
  m='1092340'>much</span> <span m='1092510'>anything.</span> <span
  m='1093970'>So</span> <span m='1094540'>you</span> <span
  m='1094740'>correct</span> <span m='1095565'>a</span> <span
  m='1095890'>single</span> <span m='1097930'>violation</span> <span
  m='1104260'>of</span> <span m='1104380'>the</span> <span
  m='1104510'>heap</span> <span m='1104720'>property</span> <span
  m='1114830'>in</span> <span m='1116150'>a</span> <span
  m='1116350'>subtree,</span> <span m='1120052'>a</span> <span
  m='1120520'>subtree's</span> <span m='1121110'>root.</span> <span
  m='1124160'>And</span> <span m='1124590'>I'll</span> <span
  m='1124940'>explain</span> <span m='1125030'>what</span> <span
  m='1125130'>I</span> <span m='1125170'>mean</span> <span m='1125360'>by</span>
  <span m='1125430'>that</span> <span m='1126340'>in</span> <span
  m='1126500'>just</span> <span m='1126720'>a</span> <span
  m='1126760'>minute.</span> </p><p><span m='1128250'>So</span> <span
  m='1129120'>max-heapify</span> <span m='1129460'>is</span> <span
  m='1129920'>the</span> <span m='1130010'>fundamental</span> <span
  m='1130570'>operation</span> <span m='1131280'>that</span> <span
  m='1131660'>we</span> <span m='1131750'>have</span> <span
  m='1131880'>to</span> <span m='1131930'>understand</span> <span
  m='1132400'>here.</span> <span m='1132890'>And</span> <span
  m='1133030'>we're</span> <span m='1133110'>going</span> <span
  m='1133230'>to</span> <span m='1133390'>use</span> <span m='1133700'>it</span>
  <span m='1134390'>over</span> <span m='1134620'>and</span> <span
  m='1134730'>over.</span> <span m='1136150'>What</span> <span
  m='1136360'>it</span> <span m='1136470'>does,</span> <span
  m='1137420'>is</span> <span m='1138350'>take</span> <span
  m='1138630'>something</span> <span m='1139560'>that</span> <span
  m='1139790'>is</span> <span m='1139940'>not</span> <span m='1140160'>a</span>
  <span m='1140210'>heap,</span> <span m='1140690'>not</span> <span
  m='1140900'>a</span> <span m='1140940'>max-heap.</span> <span
  m='1142260'>When</span> <span m='1142510'>I</span> <span
  m='1142570'>say</span> <span m='1142710'>not</span> <span m='1142890'>a</span>
  <span m='1142910'>heap</span> <span m='1143210'>from</span> <span
  m='1143360'>now</span> <span m='1143550'>on,</span> <span
  m='1145170'>pretend</span> <span m='1145480'>that</span> <span
  m='1145600'>I'm</span> <span m='1145690'>saying</span> <span
  m='1145980'>not</span> <span m='1146150'>a</span> <span
  m='1146190'>max-heap.</span> <span m='1146780'>We're</span> <span
  m='1146870'>only</span> <span m='1147020'>going to</span> <span
  m='1147190'>be</span> <span m='1147290'>talking</span> <span
  m='1147500'>about</span> <span m='1147710'>max-heaps</span> <span
  m='1148580'>for</span> <span m='1148770'>the</span> <span
  m='1148850'>rest</span> <span m='1149070'>of</span> <span
  m='1149140'>this</span> <span m='1149280'>lecture.</span> </p><p><span
  m='1153320'>What</span> <span m='1153560'>max-heapify</span> <span
  m='1154180'>does,</span> <span m='1155130'>is</span> <span
  m='1156130'>take</span> <span m='1156370'>something</span> <span
  m='1157500'>that</span> <span m='1158310'>is</span> <span
  m='1158490'>not</span> <span m='1158770'>quite</span> <span
  m='1159190'>a</span> <span m='1159340'>max-heap.</span> <span
  m='1160250'>It</span> <span m='1160380'>can't</span> <span
  m='1160630'>take</span> <span m='1160810'>anything</span> <span
  m='1161050'>arbitrary.</span> <span m='1162110'>It's</span> <span
  m='1162340'>going</span> <span m='1162470'>to</span> <span
  m='1162530'>take</span> <span m='1162720'>something</span> <span
  m='1163120'>where</span> <span m='1163310'>there's</span> <span
  m='1163520'>a</span> <span m='1163590'>single</span> <span
  m='1164010'>violation</span> <span m='1165170'>of the</span> <span
  m='1165370'>max-heap</span> <span m='1165800'>property</span> <span
  m='1166870'>at</span> <span m='1167630'>some</span> <span
  m='1168270'>subtree</span> <span m='1169080'>of</span> <span
  m='1169230'>this</span> <span m='1170930'>heap</span> <span
  m='1171290'>that</span> <span m='1171450'>is</span> <span
  m='1171580'>given</span> <span m='1171810'>to</span> <span
  m='1171910'>you,</span> <span m='1172440'>and</span> <span
  m='1172610'>there's</span> <span m='1172760'>a</span> <span
  m='1172840'>single</span> <span m='1173130'>violation</span> <span
  m='1173600'>of</span> <span m='1173700'>that.</span> <span
  m='1174490'>And</span> <span m='1174660'>it's</span> <span
  m='1174740'>going</span> <span m='1174840'>to</span> <span
  m='1174880'>fix</span> <span m='1175210'>that.</span> <span
  m='1176620'>And</span> <span m='1177000'>we</span> <span
  m='1177090'>need</span> <span m='1177270'>to</span> <span
  m='1177570'>be</span> <span m='1177720'>able</span> <span
  m='1177890'>to</span> <span m='1178380'>do</span> <span
  m='1178540'>this</span> <span m='1179170'>recursively</span> <span
  m='1180480'>at</span> <span m='1180610'>different</span> <span
  m='1180870'>levels</span> <span m='1181750'>to</span> <span
  m='1181830'>go</span> <span m='1181980'>build</span> <span
  m='1182310'>a</span> <span m='1182350'>max-heap</span> <span
  m='1182890'>from</span> <span m='1183250'>an</span> <span
  m='1183380'>unordered</span> <span m='1183790'>array.</span> <span
  m='1185880'>Then</span> <span m='1186010'>once</span> <span
  m='1186220'>you</span> <span m='1186320'>have</span> <span
  m='1186520'>that,</span> <span m='1186740'>you</span> <span
  m='1186840'>can</span> <span m='1186960'>do</span> <span
  m='1187080'>all</span> <span m='1187240'>sorts</span> <span
  m='1187450'>of</span> <span m='1187540'>things</span> <span
  m='1187790'>like</span> <span m='1188070'>insert</span> <span
  m='1188630'>and</span> <span m='1188780'>extract</span> <span
  m='1189250'>max,</span> <span m='1189515'>and</span> <span
  m='1189780'>heap</span> <span m='1190010'>sort,</span> <span
  m='1190430'>and</span> <span m='1190470'>so</span> <span m='1190590'>on</span>
  <span m='1190720'>and</span> <span m='1190800'>so</span> <span
  m='1190940'>forth.</span> </p><p><span m='1192220'>So</span> <span
  m='1192710'>let's</span> <span m='1192920'>take</span> <span
  m='1193060'>a</span> <span m='1193110'>look</span> <span m='1193240'>at</span>
  <span m='1193540'>max-heapify</span> <span m='1194230'>using</span> <span
  m='1194570'>an</span> <span m='1194670'>example.</span> <span
  m='1195880'>I'm</span> <span m='1196010'>not</span> <span
  m='1196210'>going</span> <span m='1196350'>to</span> <span
  m='1196390'>write</span> <span m='1196670'>pseudocode</span> <span
  m='1199710'>for</span> <span m='1199910'>max-heapify.</span> <span
  m='1200890'>I'll</span> <span m='1201200'>run</span> <span
  m='1201440'>through</span> <span m='1201590'>an</span> <span
  m='1201670'>example,</span> <span m='1202250'>and</span> <span
  m='1202340'>the</span> <span m='1202410'>pseudocode</span> <span
  m='1202830'>is</span> <span m='1202920'>in</span> <span m='1203020'>the</span>
  <span m='1203080'>notes.</span> <span m='1205860'>The</span> <span
  m='1205900'>big</span> <span m='1206140'>assumption,</span> <span
  m='1207280'>and</span> <span m='1207350'>you</span> <span
  m='1207500'>think</span> <span m='1207660'>of</span> <span
  m='1207760'>this</span> <span m='1207930'>as</span> <span m='1208050'>a</span>
  <span m='1208120'>precondition,</span> <span m='1210390'>for</span> <span
  m='1211720'>running</span> <span m='1212020'>max-heapify,</span> <span
  m='1213480'>is</span> <span m='1215490'>the</span> <span
  m='1215660'>trees</span> <span m='1217110'>rooted</span> <span
  m='1219180'>at</span> <span m='1221760'>left</span> <span m='1222130'>i</span>
  <span m='1225030'>and</span> <span m='1225290'>right</span> <span
  m='1225570'>i</span> <span m='1230210'>are</span> <span
  m='1230380'>max-heaps.</span> <span m='1235420'>So</span> <span
  m='1235530'>max-heapify</span> <span m='1236400'>is going</span> <span
  m='1236540'>to</span> <span m='1237860'>look</span> <span
  m='1238120'>like</span> <span m='1239310'>a</span> <span
  m='1239510'>comma</span> <span m='1239910'>i.</span> <span
  m='1240740'>a</span> <span m='1241130'>is simply</span> <span
  m='1241360'>the</span> <span m='1241590'>array,</span> <span
  m='1242230'>and</span> <span m='1242370'>i</span> <span m='1242620'>is</span>
  <span m='1242770'>the</span> <span m='1242850'>index.</span> <span
  m='1245590'>Max-heapify</span> <span m='1246400'>is</span> <span
  m='1246660'>willing</span> <span m='1247000'>to,</span> <span
  m='1248476'>you're allowed to</span> <span m='1248970'>crash</span> <span
  m='1251160'>and</span> <span m='1252210'>not</span> <span
  m='1252540'>do</span> <span m='1252610'>anything</span> <span
  m='1252880'>useful</span> <span m='1253840'>if</span> <span
  m='1254060'>this</span> <span m='1254270'>precondition</span> <span
  m='1255280'>is</span> <span m='1255440'>violated</span> <span
  m='1255940'>in</span> <span m='1256070'>max-heapify.</span> <span
  m='1257290'>But</span> <span m='1257420'>if</span> <span
  m='1257490'>the</span> <span m='1257570'>precondition</span> <span
  m='1258160'>is</span> <span m='1258300'>true,</span> <span
  m='1259430'>then</span> <span m='1259820'>what</span> <span
  m='1260020'>you</span> <span m='1260100'>have</span> <span
  m='1260330'>to</span> <span m='1260460'>do</span> <span m='1260720'>is,</span>
  <span m='1261120'>you</span> <span m='1261230'>have</span> <span
  m='1261530'>to</span> <span m='1261660'>return</span> <span
  m='1262080'>a</span> <span m='1262210'>max-heap</span> <span
  m='1263090'>correcting</span> <span m='1263570'>this</span> <span
  m='1263740'>violation.</span> <span m='1265430'>That's</span> <span
  m='1265620'>the</span> <span m='1265700'>contract.</span> </p><p><span
  m='1271160'>So</span> <span m='1271470'>let's</span> <span
  m='1271640'>take</span> <span m='1271780'>a</span> <span
  m='1271820'>look</span> <span m='1271930'>at</span> <span
  m='1271980'>an</span> <span m='1272040'>example.</span> <span
  m='1273560'>I</span> <span m='1273700'>think</span> <span
  m='1273890'>what</span> <span m='1274000'>I</span> <span
  m='1274020'>want</span> <span m='1274180'>to</span> <span
  m='1274230'>do</span> <span m='1274360'>is</span> <span
  m='1274460'>start</span> <span m='1276380'>over</span> <span
  m='1276550'>here.</span> <span m='1280670'>I</span> <span
  m='1280730'>want</span> <span m='1280900'>you</span> <span
  m='1280980'>to</span> <span m='1281050'>see</span> <span
  m='1281250'>all</span> <span m='1281480'>of</span> <span
  m='1281570'>the</span> <span m='1281660'>steps</span> <span
  m='1282020'>here.</span> <span m='1282990'>So</span> <span
  m='1283090'>we'll</span> <span m='1283190'>take</span> <span
  m='1283230'>a</span> <span m='1283290'>simple</span> <span
  m='1283540'>example,</span> <span m='1284000'>and we'll</span> <span
  m='1284260'>run</span> <span m='1284500'>through</span> <span
  m='1285010'>max-heapify.</span> <span m='1293550'>And</span> <span
  m='1293820'>let's</span> <span m='1294010'>take</span> <span
  m='1294170'>a</span> <span m='1294200'>look</span> <span m='1294490'>at</span>
  <span m='1296880'>16,</span> <span m='1300170'>four--</span> <span
  m='1325720'>I'm</span> <span m='1325980'>just</span> <span
  m='1326120'>going</span> <span m='1326220'>to</span> <span
  m='1326270'>draw</span> <span m='1326620'>the</span> <span
  m='1326780'>indices</span> <span m='1327370'>for</span> <span
  m='1327500'>this</span> <span m='1328250'>first</span> <span
  m='1328610'>example,</span> <span m='1329510'>and</span> <span
  m='1329640'>then</span> <span m='1329760'>I</span> <span
  m='1329790'>won't</span> <span m='1329990'>bother.</span> <span
  m='1333230'>So</span> <span m='1333640'>there</span> <span
  m='1333840'>you</span> <span m='1333910'>go.</span> <span
  m='1335340'>Is</span> <span m='1335500'>this</span> <span m='1335650'>a</span>
  <span m='1335720'>max-heap?</span> <span m='1338060'>No.</span> <span
  m='1338710'>Because</span> <span m='1339010'>right</span> <span
  m='1339180'>here,</span> <span m='1340190'>I've</span> <span
  m='1340300'>got</span> <span m='1340430'>a</span> <span
  m='1340480'>problem.</span> <span m='1341440'>4</span> <span
  m='1341820'>is</span> <span m='1342430'>less</span> <span
  m='1342730'>than</span> <span m='1342900'>14,</span> <span
  m='1343880'>therefore</span> <span m='1344690'>I</span> <span
  m='1344810'>have</span> <span m='1345030'>a</span> <span
  m='1345080'>violation.</span> <span m='1347170'>And</span> <span
  m='1347490'>so,</span> <span m='1348570'>if</span> <span
  m='1348750'>you</span> <span m='1348840'>look</span> <span
  m='1349020'>at</span> <span m='1349650'>the</span> <span
  m='1349810'>call</span> <span m='1351020'>max-heapify</span> <span
  m='1356790'>A</span> <span m='1357250'>comma</span> <span
  m='1357610'>2,</span> <span m='1358520'>this</span> <span
  m='1358780'>is</span> <span m='1358910'>an</span> <span
  m='1359010'>index</span> <span m='1359460'>2,</span> <span
  m='1360500'>and</span> <span m='1360720'>all</span> <span
  m='1360860'>you</span> <span m='1360940'>have</span> <span
  m='1361060'>to</span> <span m='1361160'>do</span> <span m='1361330'>is</span>
  <span m='1361480'>to</span> <span m='1361650'>look</span> <span
  m='1361880'>at</span> <span m='1362110'>this</span> <span
  m='1362440'>subtree.</span> <span m='1363450'>And</span> <span
  m='1363790'>what</span> <span m='1363960'>you</span> <span
  m='1365910'>need</span> <span m='1366230'>to</span> <span
  m='1366530'>be</span> <span m='1366680'>satisfied</span> <span
  m='1367350'>in</span> <span m='1367470'>order</span> <span
  m='1367630'>to</span> <span m='1367740'>run</span> <span
  m='1368810'>max-heapify,</span> <span m='1370060'>is</span> <span
  m='1370260'>that</span> <span m='1370470'>the</span> <span
  m='1370780'>subtrees</span> <span m='1371790'>of</span> <span
  m='1372250'>nodes</span> <span m='1373200'>index</span> <span
  m='1373660'>two,</span> <span m='1374400'>which is</span> <span
  m='1374590'>this</span> <span m='1375410'>four</span> <span
  m='1375740'>node,</span> <span m='1376590'>are</span> <span
  m='1376950'>max-heaps.</span> <span m='1377630'>And</span> <span
  m='1377810'>if you</span> <span m='1377920'>go</span> <span
  m='1378050'>look</span> <span m='1378230'>below,</span> <span
  m='1379080'>you</span> <span m='1379180'>see</span> <span
  m='1379320'>that</span> <span m='1379430'>this is</span> <span
  m='1379720'>a</span> <span m='1379800'>max-heap</span> <span m='1380380'>and
  that's</span> <span m='1380620'>a</span> <span m='1380670'>max-heap.</span>
  </p><p><span m='1382900'>Most of the</span> <span m='1383130'>time,</span>
  <span m='1383610'>by</span> <span m='1383720'>the</span> <span
  m='1383800'>way,</span> <span m='1383990'>you</span> <span
  m='1384100'>will</span> <span m='1384210'>be</span> <span
  m='1384760'>sort</span> <span m='1384890'>of</span> <span
  m='1384960'>working</span> <span m='1385260'>bottom</span> <span
  m='1385620'>up,</span> <span m='1386140'>and</span> <span
  m='1386290'>that's</span> <span m='1386480'>why</span> <span
  m='1387240'>this</span> <span m='1387390'>is</span> <span
  m='1387500'>going</span> <span m='1387620'>to</span> <span
  m='1387660'>make</span> <span m='1387840'>sense.</span> <span
  m='1388880'>This</span> <span m='1389010'>will</span> <span
  m='1389070'>all</span> <span m='1389290'>work</span> <span
  m='1389500'>out,</span> <span m='1389680'>because</span> <span
  m='1390290'>leaves</span> <span m='1390780'>are</span> <span
  m='1391110'>by</span> <span m='1391280'>definition</span> <span
  m='1392340'>max-heaps.</span> <span m='1393330'>Because</span> <span
  m='1393540'>you</span> <span m='1393620'>don't</span> <span
  m='1393780'>have</span> <span m='1393900'>to</span> <span
  m='1393980'>check</span> <span m='1394230'>anything.</span> <span
  m='1395290'>When</span> <span m='1395410'>you</span> <span
  m='1395490'>put</span> <span m='1395710'>two</span> <span
  m='1395880'>leaves</span> <span m='1396170'>together,</span> <span
  m='1397100'>and</span> <span m='1397280'>you</span> <span
  m='1397380'>want</span> <span m='1397490'>to</span> <span
  m='1397560'>create</span> <span m='1399760'>a</span> <span
  m='1399920'>tree</span> <span m='1400310'>like</span> <span
  m='1400700'>that,</span> <span m='1401000'>or</span> <span m='1401120'>a
  heap</span> <span m='1401390'>like</span> <span m='1401580'>that,</span> <span
  m='1402210'>then</span> <span m='1402550'>you</span> <span
  m='1402690'>run</span> <span m='1403790'>max-heapify.</span> <span
  m='1404990'>And</span> <span m='1405120'>then</span> <span
  m='1405790'>when</span> <span m='1405960'>you</span> <span
  m='1406020'>have</span> <span m='1406190'>a</span> <span
  m='1406300'>couple</span> <span m='1406610'>different</span> <span
  m='1407290'>max-heaps,</span> <span m='1407760'>and</span> <span
  m='1407930'>you</span> <span m='1408020'>want</span> <span
  m='1408120'>to</span> <span m='1408160'>put</span> <span
  m='1408300'>them</span> <span m='1408430'>together</span> <span
  m='1409350'>to</span> <span m='1409450'>make</span> <span
  m='1409630'>it</span> <span m='1409910'>a</span> <span
  m='1409990'>bigger</span> <span m='1410260'>max-heap,</span> <span
  m='1411160'>you'd</span> <span m='1411300'>have</span> <span
  m='1411450'>run</span> <span m='1411650'>max-heapify.</span> <span
  m='1414350'>So</span> <span m='1414550'>that's</span> <span m='1414770'>the
  way it's</span> <span m='1415010'>going</span> <span m='1415120'>to</span>
  <span m='1415180'>work.</span> </p><p><span m='1415830'>So</span> <span
  m='1415850'>you</span> <span m='1415920'>want</span> <span m='1416040'>to do
  a</span> <span m='1416170'>max-heapify</span> <span m='1417050'>A</span> <span
  m='1417190'>comma</span> <span m='1417510'>2.</span> <span
  m='1420120'>One</span> <span m='1420280'>of</span> <span
  m='1420350'>the</span> <span m='1420420'>things</span> <span
  m='1420650'>that's</span> <span m='1420810'>going</span> <span
  m='1420900'>to</span> <span m='1420940'>be</span> <span
  m='1421030'>important,</span> <span m='1421430'>not</span> <span
  m='1421600'>in</span> <span m='1421700'>this</span> <span
  m='1421870'>example,</span> <span m='1423240'>but</span> <span
  m='1423640'>when</span> <span m='1423750'>we</span> <span
  m='1423850'>get</span> <span m='1424000'>to</span> <span
  m='1424090'>sorting,</span> <span m='1425040'>is</span> <span
  m='1425290'>that</span> <span m='1425450'>we</span> <span
  m='1425570'>want</span> <span m='1425730'>to</span> <span
  m='1425950'>know</span> <span m='1426350'>what</span> <span
  m='1426660'>the</span> <span m='1427400'>size</span> <span
  m='1427950'>of</span> <span m='1428040'>the</span> <span
  m='1428130'>heap</span> <span m='1428390'>is.</span> <span
  m='1428720'>And</span> <span m='1428890'>in</span> <span
  m='1428980'>this</span> <span m='1429140'>case,</span> <span
  m='1429370'>the</span> <span m='1429470'>heap</span> <span
  m='1429660'>size</span> <span m='1430140'>is</span> <span
  m='1430350'>10.</span> </p><p><span m='1431820'>So,</span> <span
  m='1432370'>what</span> <span m='1432500'>does</span> <span
  m='1432620'>max-heapify</span> <span m='1433290'>do?</span> <span
  m='1435170'>Well,</span> <span m='1436180'>all</span> <span
  m='1436420'>max-heapify</span> <span m='1437090'>does</span> <span
  m='1437920'>is</span> <span m='1438290'>exchanges</span> <span
  m='1439010'>elements.</span> <span m='1440260'>And</span> <span
  m='1440390'>so,</span> <span m='1441630'>if</span> <span
  m='1441810'>you</span> <span m='1441890'>looked</span> <span
  m='1442060'>at</span> <span m='1442120'>the</span> <span
  m='1442200'>code</span> <span m='1442500'>for</span> <span
  m='1442780'>max-heapify,</span> <span m='1443410'>and</span> <span
  m='1443640'>you</span> <span m='1443750'>walked</span> <span
  m='1444020'>through</span> <span m='1444230'>it,</span> <span
  m='1444830'>this</span> <span m='1444930'>is</span> <span
  m='1445060'>what</span> <span m='1445230'>it</span> <span
  m='1445330'>would</span> <span m='1445470'>do.</span> <span
  m='1446700'>You're</span> <span m='1446860'>going</span> <span
  m='1447030'>to</span> <span m='1447100'>look</span> <span
  m='1447280'>at</span> <span m='1447630'>4</span> <span m='1447980'>and</span>
  <span m='1448090'>14,</span> <span m='1449160'>and</span> <span
  m='1449490'>it's</span> <span m='1449600'>going</span> <span
  m='1449720'>to</span> <span m='1449780'>say,</span> <span
  m='1450320'>OK,</span> <span m='1450640'>I'm</span> <span
  m='1450720'>going</span> <span m='1450830'>to</span> <span
  m='1450870'>look</span> <span m='1451040'>at</span> <span
  m='1451140'>both</span> <span m='1451310'>my</span> <span
  m='1451440'>children.</span> <span m='1452310'>And</span> <span
  m='1452440'>I'm</span> <span m='1452510'>going</span> <span
  m='1452630'>to</span> <span m='1452680'>go</span> <span
  m='1452830'>ahead</span> <span m='1453090'>and</span> <span
  m='1453200'>exchange</span> <span m='1454210'>with</span> <span
  m='1454370'>the</span> <span m='1454440'>bigger</span> <span
  m='1455270'>child.</span> <span m='1456290'>So</span> <span
  m='1456320'>I'm</span> <span m='1456430'>going</span> <span
  m='1456550'>to</span> <span m='1456610'>exchange</span> <span
  m='1459110'>A[2]</span> <span m='1461160'>with</span> <span
  m='1461440'>A[4].</span> <span m='1464720'>And</span> <span
  m='1465170'>what</span> <span m='1465380'>that</span> <span
  m='1465560'>would</span> <span m='1465720'>do</span> <span
  m='1466050'>is,</span> <span m='1470980'>take</span> <span
  m='1471280'>this,</span> <span m='1473200'>make</span> <span
  m='1473500'>this</span> <span m='1474150'>4,</span> <span
  m='1475450'>and</span> <span m='1475610'>make</span> <span
  m='1475790'>this</span> <span m='1475980'>14.</span> <span
  m='1477740'>And</span> <span m='1477910'>that</span> <span
  m='1478030'>would</span> <span m='1478140'>be</span> <span
  m='1478240'>step</span> <span m='1478540'>one.</span> </p><p><span
  m='1480630'>And</span> <span m='1482080'>then</span> <span
  m='1482630'>when</span> <span m='1482910'>you</span> <span
  m='1482950'>get</span> <span m='1483120'>to</span> <span
  m='1483180'>this</span> <span m='1483400'>point,</span> <span
  m='1483770'>recursively,</span> <span m='1485120'>you'd</span> <span
  m='1485440'>realize</span> <span m='1485890'>that</span> <span
  m='1487100'>the</span> <span m='1487170'>max-heap</span> <span
  m='1487600'>property</span> <span m='1488700'>at</span> <span
  m='1488880'>this</span> <span m='1489060'>level</span> <span
  m='1489920'>is</span> <span m='1490090'>violated.</span> <span
  m='1491460'>And</span> <span m='1491600'>so</span> <span
  m='1491750'>you</span> <span m='1491930'>would</span> <span
  m='1492320'>go</span> <span m='1492530'>ahead</span> <span
  m='1493780'>and</span> <span m='1495640'>call</span> <span
  m='1497110'>max-heapify</span> <span m='1503340'>A</span> <span
  m='1503500'>comma</span> <span m='1503820'>4.</span> <span
  m='1506270'>And</span> <span m='1508650'>when</span> <span
  m='1508810'>that</span> <span m='1508960'>happens,</span> <span
  m='1510900'>that</span> <span m='1511160'>call</span> <span
  m='1511420'>happens,</span> <span m='1512380'>you're</span> <span
  m='1512530'>going</span> <span m='1512680'>to</span> <span
  m='1512810'>look</span> <span m='1513120'>at</span> <span
  m='1513440'>the</span> <span m='1513570'>two</span> <span
  m='1514710'>children</span> <span m='1515720'>corresponding</span> <span
  m='1516330'>to</span> <span m='1517590'>this</span> <span
  m='1518160'>little</span> <span m='1518390'>subtree</span> <span
  m='1518840'>there,</span> <span m='1519490'>and</span> <span
  m='1519600'>you're</span> <span m='1519680'>going</span> <span
  m='1519820'>to</span> <span m='1519870'>do</span> <span m='1519990'>the</span>
  <span m='1520090'>exchange.</span> <span m='1521810'>You're</span> <span
  m='1521910'>going</span> <span m='1522010'>to</span> <span
  m='1522110'>have</span> <span m='1522210'>8</span> <span
  m='1522500'>here</span> <span m='1523640'>and</span> <span
  m='1523850'>4</span> <span m='1524120'>here.</span> <span
  m='1524900'>So</span> <span m='1526310'>you</span> <span
  m='1526430'>would</span> <span m='1526520'>exchange</span> <span
  m='1530640'>A[4]</span> <span m='1532530'>with</span> <span
  m='1534330'>A[8].</span> <span m='1536620'>And</span> <span
  m='1540070'>now</span> <span m='1540260'>you're</span> <span
  m='1540400'>done,</span> <span m='1541640'>so</span> <span
  m='1541810'>there's</span> <span m='1541950'>no</span> <span
  m='1542100'>more</span> <span m='1542320'>calls.</span> </p><p><span
  m='1544770'>So,</span> <span m='1545310'>fairly</span> <span
  m='1545630'>straightforward.</span> <span m='1546870'>It's</span> <span
  m='1546930'>actually</span> <span m='1547210'>not</span> <span
  m='1548260'>any</span> <span m='1548410'>more</span> <span
  m='1548580'>complicated</span> <span m='1549130'>than</span> <span
  m='1549250'>this.</span> <span m='1549510'>There</span> <span
  m='1549610'>may</span> <span m='1549730'>be</span> <span
  m='1550070'>many</span> <span m='1550370'>steps.</span> <span
  m='1551840'>What</span> <span m='1552040'>might</span> <span
  m='1552190'>happen</span> <span m='1552560'>is</span> <span
  m='1552710'>that</span> <span m='1553200'>you'd</span> <span
  m='1553330'>have</span> <span m='1553470'>to</span> <span
  m='1553520'>go</span> <span m='1553770'>all</span> <span
  m='1553980'>the</span> <span m='1554050'>way</span> <span
  m='1554170'>down</span> <span m='1554440'>to</span> <span
  m='1554510'>the</span> <span m='1554570'>leaves.</span> <span
  m='1555580'>And</span> <span m='1555760'>in</span> <span
  m='1555840'>this</span> <span m='1556000'>case,</span> <span
  m='1556940'>you</span> <span m='1557130'>went</span> <span
  m='1557410'>a</span> <span m='1557480'>couple</span> <span
  m='1557690'>of</span> <span m='1557750'>steps,</span> <span
  m='1558690'>and</span> <span m='1559290'>then</span> <span
  m='1559560'>you</span> <span m='1559670'>got</span> <span
  m='1559840'>to</span> <span m='1559910'>stop.</span> <span
  m='1560760'>But</span> <span m='1560950'>obviously,</span> <span
  m='1561360'>you could</span> <span m='1561500'>have</span> <span
  m='1561650'>a</span> <span m='1561690'>large</span> <span
  m='1562070'>heap,</span> <span m='1562370'>and</span> <span
  m='1562530'>it</span> <span m='1562590'>could</span> <span
  m='1562730'>take</span> <span m='1563320'>a</span> <span
  m='1563400'>bunch</span> <span m='1563630'>of</span> <span
  m='1563710'>time.</span> <span m='1564630'>So,</span> <span
  m='1566100'>what</span> <span m='1566390'>is</span> <span
  m='1566540'>the</span> <span m='1566640'>complexity</span> <span
  m='1567990'>of</span> <span m='1568430'>max-heapify?</span> <span
  m='1570630'>Anybody?</span> <span m='1573872'>Yeah.</span> <span
  m='1574354'>Back there.</span> </p><p><span m='1575800'>AUDIENCE:
  Ultimately,</span> <span m='1576282'>potentially,</span> <span m='1576764'>if
  the</span> <span m='1577246'>tree</span> <span m='1577728'>is totally</span>
  <span m='1578210'>upside down,</span> <span m='1578692'>you could
  potentially</span> <span m='1579174'>switch every node</span> <span
  m='1580138'>to make</span> <span m='1580620'>it</span> <span
  m='1581102'>order</span> <span m='1581584'>in.</span> </p><p><span
  m='1583900'>PROFESSOR: Every</span> <span m='1584280'>node</span> <span
  m='1584770'>to</span> <span m='1584860'>make</span> <span
  m='1585040'>it</span> <span m='1585140'>order</span> <span
  m='1585470'>in.</span> <span m='1588330'>Everybody,</span> <span
  m='1588670'>anybody.</span> <span m='1589100'>Do</span> <span
  m='1589520'>you</span> <span m='1589650'>have</span> <span
  m='1589730'>a</span> <span m='1589770'>different</span> <span
  m='1589990'>answer?</span> </p><p><span m='1591530'>AUDIENCE: Log n.</span>
  </p><p><span m='1592480'>PROFESSOR: Why?</span> <span m='1592770'>Why</span>
  <span m='1592980'>is it</span> <span m='1593290'>log</span> <span
  m='1593720'>n.</span> </p><p><span m='1594210'>AUDIENCE: Because I</span>
  <span m='1594700'>think</span> <span m='1595190'>the worst</span> <span
  m='1595680'>case scenario,</span> <span m='1596170'>all</span> <span
  m='1596660'>of</span> <span m='1597150'>your--</span> <span m='1598130'>the
  worst</span> <span m='1598620'>case</span> <span m='1599110'>scenario</span>
  <span m='1599600'>you would</span> <span m='1600090'>have</span> <span
  m='1600580'>[INAUDIBLE]</span> <span m='1601560'>on the</span> <span
  m='1602050'>left-hand side,</span> <span m='1602540'>[INAUDIBLE]</span> <span
  m='1603030'>right-hand</span> <span m='1603520'>side.</span> <span
  m='1604500'>And it</span> <span m='1604990'>would</span> <span m='1605480'>be
  skewed.</span> <span m='1608150'>[INAUDIBLE].</span> </p><p><span
  m='1629200'>PROFESSOR: So you're</span> <span m='1629860'>arguing</span> <span
  m='1630080'>that</span> <span m='1630180'>the</span> <span
  m='1630510'>solution</span> <span m='1630780'>to</span> <span
  m='1631050'>the</span> <span m='1631150'>recurrence</span> <span
  m='1631650'>gives</span> <span m='1631840'>you</span> <span
  m='1632620'>a</span> <span m='1632670'>logarithmic</span> <span
  m='1633210'>complexity.</span> <span m='1634310'>Alright.</span> <span
  m='1634690'>Not</span> <span m='1634970'>quite.</span> <span
  m='1636340'>There's</span> <span m='1636490'>an</span> <span
  m='1636580'>easier</span> <span m='1636930'>way</span> <span
  m='1637290'>of</span> <span m='1637550'>arguing</span> <span
  m='1637760'>this.</span> <span m='1638170'>this</span> <span
  m='1638390'>Yeah.</span> <span m='1638600'>Back</span> <span
  m='1638770'>there.</span> </p><p><span m='1640030'>AUDIENCE:</span> <span
  m='1640510'>[INAUDIBLE].</span> </p><p><span m='1644830'>PROFESSOR:
  That's</span> <span m='1644990'>right.</span> </p><p><span
  m='1645840'>AUDIENCE:</span> <span m='1646316'>[INAUDIBLE].</span>
  </p><p><span m='1651076'>PROFESSOR: That's</span> <span
  m='1651560'>right.</span> <span m='1651680'>So</span> <span m='1651800'>what
  is</span> <span m='1651860'>the</span> <span m='1651930'>complexity?</span>
  </p><p><span m='1652630'>AUDIENCE: Log n.</span> </p><p><span
  m='1653170'>PROFESSOR: Log n.</span> <span m='1653570'>Great.</span> <span
  m='1654710'>Excellent.</span> <span m='1656380'>Definitely</span> <span
  m='1656730'>worth</span> <span m='1656940'>a</span> <span
  m='1656990'>cushion.</span> <span m='1660060'>Missed</span> <span
  m='1660380'>you</span> <span m='1660510'>by</span> <span
  m='1660650'>that</span> <span m='1660990'>much.</span> </p><p><span
  m='1661650'>AUDIENCE: Thank you.</span> </p><p><span m='1662550'>PROFESSOR:
  It's</span> <span m='1663110'>pretty</span> <span m='1663530'>soft,</span>
  <span m='1663850'>by</span> <span m='1663970'>the</span> <span
  m='1664080'>way.</span> <span m='1664610'>Right.</span> <span
  m='1664760'>OK.</span> <span m='1665740'>So,</span> <span
  m='1666760'>if</span> <span m='1666900'>I</span> <span m='1666980'>hit</span>
  <span m='1667140'>somebody,</span> <span m='1667760'>they</span> <span
  m='1667890'>get</span> <span m='1668000'>a</span> <span
  m='1668080'>cushion.</span> <span m='1668640'>OK.</span> <span
  m='1674130'>That's</span> <span m='1674290'>exactly</span> <span
  m='1674670'>right.</span> <span m='1675370'>Thanks</span> <span
  m='1676880'>for</span> <span m='1676990'>that</span> <span
  m='1677160'>description.</span> </p><p><span m='1678280'>So,</span> <span
  m='1678770'>first</span> <span m='1679100'>off,</span> <span
  m='1679470'>there's</span> <span m='1679920'>two</span> <span
  m='1680170'>important</span> <span m='1681190'>aspects</span> <span
  m='1681770'>to</span> <span m='1681870'>this</span> <span
  m='1682510'>argument.</span> <span m='1683540'>The</span> <span
  m='1683620'>first</span> <span m='1683890'>thing</span> <span
  m='1684070'>is,</span> <span m='1684190'>that</span> <span
  m='1684370'>we're</span> <span m='1684490'>visualizing</span> <span
  m='1685180'>this</span> <span m='1685460'>is</span> <span m='1685590'>a</span>
  <span m='1685660'>nearly</span> <span m='1686100'>complete</span> <span
  m='1686620'>binary</span> <span m='1687080'>tree.</span> <span m='1688505'>It
  is</span> <span m='1688850'>not</span> <span m='1689120'>an</span> <span
  m='1689260'>unbalanced</span> <span m='1689840'>tree.</span> <span
  m='1690670'>Alright?</span> <span m='1691010'>We'll</span> <span
  m='1691140'>talk</span> <span m='1691350'>about</span> <span
  m='1691560'>unbalanced</span> <span m='1692090'>trees and</span> <span
  m='1692390'>balanced</span> <span m='1692770'>trees</span> <span
  m='1693400'>in</span> <span m='1693470'>the</span> <span
  m='1693530'>next</span> <span m='1693760'>couple of</span> <span
  m='1694000'>lectures.</span> <span m='1694930'>But</span> <span
  m='1695170'>the</span> <span m='1695230'>visualization</span> <span
  m='1696070'>of</span> <span m='1696150'>a</span> <span m='1696260'>heap</span>
  <span m='1697060'>is</span> <span m='1697330'>a</span> <span
  m='1697600'>nearly</span> <span m='1697930'>complete</span> <span
  m='1698270'>binary</span> <span m='1698630'>tree.</span> <span
  m='1698880'>And,</span> <span m='1698950'>in</span> <span
  m='1699040'>fact,</span> <span m='1699320'>if</span> <span
  m='1699400'>you</span> <span m='1699520'>had</span> <span
  m='1699910'>15</span> <span m='1700370'>elements,</span> <span m='1700730'>it
  would</span> <span m='1700820'>be</span> <span m='1700970'>a</span> <span
  m='1701030'>perfect</span> <span m='1701350'>binary</span> <span
  m='1701680'>tree.</span> <span m='1703010'>So</span> <span
  m='1703170'>the</span> <span m='1703280'>good</span> <span
  m='1703450'>news</span> <span m='1703740'>is,</span> <span
  m='1703900'>that</span> <span m='1704960'>the</span> <span
  m='1705250'>height</span> <span m='1706420'>of</span> <span
  m='1706990'>this</span> <span m='1707300'>visualization</span> <span
  m='1708220'>tree</span> <span m='1708870'>is</span> <span
  m='1709040'>bounded</span> <span m='1710000'>by</span> <span
  m='1710180'>log</span> <span m='1710470'>n.</span> <span
  m='1711780'>That's</span> <span m='1712000'>the</span> <span
  m='1712080'>good</span> <span m='1712220'>news.</span> <span
  m='1713460'>And</span> <span m='1713700'>you</span> <span
  m='1713790'>want</span> <span m='1713880'>to</span> <span
  m='1713920'>exploit</span> <span m='1714410'>that</span> <span
  m='1714600'>good</span> <span m='1714760'>news</span> <span
  m='1715510'>by</span> <span m='1715810'>creating</span> <span
  m='1716300'>algorithms</span> <span m='1717300'>that</span> <span
  m='1717780'>go</span> <span m='1718100'>level</span> <span
  m='1718390'>by</span> <span m='1718530'>level.</span> <span
  m='1719750'>If</span> <span m='1719940'>you</span> <span
  m='1720340'>can</span> <span m='1720490'>do</span> <span
  m='1720630'>that,</span> <span m='1721260'>you're</span> <span
  m='1721420'>going to have</span> <span m='1721610'>logarithmic</span> <span
  m='1722020'>complexity</span> <span m='1722550'>algorithms.</span> <span
  m='1724570'>So</span> <span m='1724680'>that</span> <span
  m='1724790'>was</span> <span m='1724900'>one</span> <span
  m='1725100'>aspect</span> <span m='1725430'>of</span> <span
  m='1725490'>it.</span> </p><p><span m='1725810'>The</span> <span
  m='1725890'>other</span> <span m='1726130'>aspect</span> <span
  m='1726440'>of</span> <span m='1726550'>it,</span> <span m='1726710'>is</span>
  <span m='1726950'>the</span> <span m='1727450'>key</span> <span
  m='1727670'>assumption</span> <span m='1728420'>that</span> <span
  m='1728500'>we're</span> <span m='1728620'>making,</span> <span
  m='1729370'>with</span> <span m='1729520'>respect</span> <span
  m='1729810'>to</span> <span m='1729880'>build-max-heap,</span> <span
  m='1730990'>that</span> <span m='1731170'>there</span> <span
  m='1731250'>was</span> <span m='1731330'>a</span> <span
  m='1731410'>single</span> <span m='1731720'>violation.</span> <span
  m='1733290'>It</span> <span m='1733440'>is</span> <span
  m='1733620'>true</span> <span m='1733900'>that</span> <span
  m='1735100'>the</span> <span m='1735350'>answer</span> <span
  m='1735670'>that</span> <span m='1735770'>was</span> <span
  m='1735910'>given</span> <span m='1736130'>that was</span> <span
  m='1736280'>order</span> <span m='1736520'>n,</span> <span
  m='1737730'>would</span> <span m='1737890'>be</span> <span
  m='1738020'>a</span> <span m='1738090'>problem.</span> <span
  m='1739220'>I</span> <span m='1739310'>could</span> <span
  m='1739480'>set</span> <span m='1739670'>it</span> <span m='1739760'>up</span>
  <span m='1739930'>so</span> <span m='1740130'>that's</span> <span
  m='1740710'>actually</span> <span m='1740960'>the</span> <span
  m='1741040'>right</span> <span m='1741210'>answer,</span> <span
  m='1741930'>if</span> <span m='1742600'>I</span> <span m='1742740'>did</span>
  <span m='1742930'>not</span> <span m='1743190'>have</span> <span
  m='1743560'>this</span> <span m='1743700'>assumption--</span> <span
  m='1745000'>where do I</span> <span m='1745090'>have</span> <span
  m='1745320'>that</span> <span m='1745470'>here--</span> <span
  m='1746500'>assume</span> <span m='1746650'>that</span> <span
  m='1747150'>the</span> <span m='1747240'>trees</span> <span
  m='1747590'>rooted</span> <span m='1747910'>at</span> <span
  m='1748000'>left</span> <span m='1748230'>i</span> <span
  m='1748470'>and</span> <span m='1748610'>right</span> <span
  m='1748890'>i</span> <span m='1749180'>are max-heaps.</span> <span
  m='1750230'>So</span> <span m='1750350'>maybe</span> <span
  m='1750530'>that's</span> <span m='1750680'>what</span> <span m='1750800'>you
  were</span> <span m='1750940'>thinking.</span> </p><p><span
  m='1751720'>But</span> <span m='1752130'>this</span> <span
  m='1752500'>is</span> <span m='1752660'>a</span> <span m='1752700'>key</span>
  <span m='1752920'>assumption.</span> <span m='1753570'>This</span> <span
  m='1753730'>is</span> <span m='1754190'>going</span> <span
  m='1754370'>back</span> <span m='1754630'>and</span> <span
  m='1754750'>like</span> <span m='1755780'>making</span> <span
  m='1756070'>connections</span> <span m='1756470'>between</span> <span
  m='1756710'>classes.</span> <span m='1758020'>This</span> <span
  m='1758260'>is</span> <span m='1758960'>a</span> <span
  m='1759040'>precondition</span> <span m='1760130'>that</span> <span
  m='1760360'>makes</span> <span m='1760760'>the</span> <span
  m='1761340'>algorithm</span> <span m='1761730'>more</span> <span
  m='1761940'>efficient.</span> <span m='1762500'>Makes</span> <span
  m='1762780'>the</span> <span m='1762870'>implementation</span> <span
  m='1764110'>easier.</span> <span m='1765340'>And</span> <span
  m='1766420'>this</span> <span m='1767410'>precondition</span> <span
  m='1768130'>essentially</span> <span m='1768590'>says</span> <span
  m='1768920'>that</span> <span m='1769070'>you</span> <span
  m='1769170'>have</span> <span m='1769320'>to</span> <span
  m='1769440'>just</span> <span m='1769640'>go</span> <span
  m='1769790'>down</span> <span m='1770640'>and</span> <span
  m='1770840'>do</span> <span m='1770970'>a</span> <span
  m='1771010'>number</span> <span m='1771250'>of</span> <span
  m='1771300'>steps,</span> <span m='1771930'>that's</span> <span
  m='1772130'>the</span> <span m='1772210'>number</span> <span
  m='1772430'>of</span> <span m='1772510'>levels</span> <span
  m='1772880'>in</span> <span m='1772970'>the</span> <span
  m='1773060'>tree,</span> <span m='1773620'>which</span> <span
  m='1773820'>is</span> <span m='1773930'>logarithmic.</span> </p><p><span
  m='1776800'>So</span> <span m='1776930'>that's</span> <span
  m='1777160'>the</span> <span m='1777220'>story</span> <span
  m='1777550'>here</span> <span m='1778480'>with</span> <span
  m='1778780'>the</span> <span m='1779060'>max-heapify.</span> <span
  m='1780390'>It's</span> <span m='1780750'>order</span> <span
  m='1781790'>log</span> <span m='1782130'>n,</span> <span m='1783710'>in</span>
  <span m='1783890'>terms</span> <span m='1784110'>of</span> <span
  m='1784210'>complexity.</span> <span m='1784730'>That's</span> <span
  m='1784910'>the</span> <span m='1784980'>number</span> <span
  m='1785170'>of</span> <span m='1785220'>steps</span> <span
  m='1785550'>that</span> <span m='1785660'>you</span> <span
  m='1785760'>have.</span> <span m='1786640'>And</span> <span
  m='1787670'>it's</span> <span m='1790320'>a</span> <span
  m='1790400'>basic</span> <span m='1790820'>building</span> <span
  m='1791200'>block</span> <span m='1792080'>for</span> <span
  m='1792740'>all</span> <span m='1792960'>of</span> <span
  m='1793020'>the</span> <span m='1793090'>other</span> <span
  m='1793280'>algorithms</span> <span m='1793740'>that</span> <span
  m='1793880'>we</span> <span m='1794000'>look</span> <span
  m='1794210'>at</span> <span m='1794580'>for</span> <span
  m='1794700'>the</span> <span m='1794790'>rest</span> <span
  m='1794980'>of</span> <span m='1795060'>this</span> <span
  m='1795200'>lecture,</span> <span m='1796060'>and</span> <span
  m='1796800'>in</span> <span m='1797090'>section</span> <span
  m='1797490'>tomorrow.</span> </p><p><span m='1800060'>Let's</span> <span
  m='1800330'>talk</span> <span m='1800540'>about</span> <span
  m='1800810'>how</span> <span m='1801070'>you</span> <span
  m='1801260'>would</span> <span m='1801440'>take</span> <span
  m='1802980'>max-heapify</span> <span m='1804530'>and</span> <span
  m='1805230'>use</span> <span m='1805610'>it</span> <span m='1805820'>to</span>
  <span m='1805930'>do</span> <span m='1806255'>build-max-heap.</span> <span
  m='1808300'>So</span> <span m='1808500'>the</span> <span
  m='1808600'>first</span> <span m='1808890'>step</span> <span
  m='1809210'>now,</span> <span m='1809530'>let's</span> <span
  m='1810610'>say</span> <span m='1810810'>that</span> <span
  m='1810950'>we</span> <span m='1811050'>want</span> <span
  m='1811210'>to</span> <span m='1811610'>go</span> <span m='1812010'>and</span>
  <span m='1812210'>get</span> <span m='1812360'>a</span> <span
  m='1812550'>nice</span> <span m='1812910'>sorting</span> <span
  m='1813260'>algorithm.</span> <span m='1814510'>We</span> <span
  m='1814550'>don't</span> <span m='1814740'>like</span> <span
  m='1814990'>insertion</span> <span m='1815490'>sort,</span> <span
  m='1815940'>we</span> <span m='1816030'>don't</span> <span
  m='1816210'>like</span> <span m='1816420'>merge</span> <span
  m='1816850'>sort.</span> <span m='1817710'>We'd</span> <span
  m='1817860'>like</span> <span m='1818010'>to</span> <span
  m='1818090'>get</span> <span m='1818930'>a</span> <span
  m='1819020'>heap-based</span> <span m='1819560'>sorting</span> <span
  m='1819910'>algorithm.</span> <span m='1820970'>One</span> <span
  m='1821190'>of</span> <span m='1821260'>the</span> <span
  m='1821330'>things</span> <span m='1821580'>that</span> <span
  m='1821710'>we</span> <span m='1821820'>need</span> <span
  m='1822020'>to</span> <span m='1822100'>do,</span> <span m='1823010'>as</span>
  <span m='1823180'>I</span> <span m='1823250'>said,</span> <span
  m='1824060'>is</span> <span m='1824240'>to</span> <span
  m='1824370'>take</span> <span m='1824680'>an</span> <span
  m='1824810'>unordered</span> <span m='1825470'>array,</span> <span
  m='1826470'>and</span> <span m='1826730'>turn</span> <span
  m='1826940'>it</span> <span m='1827050'>into</span> <span m='1827380'>a</span>
  <span m='1827430'>max-heap,</span> <span m='1828600'>which</span> <span
  m='1828710'>is</span> <span m='1828810'>a</span> <span
  m='1828860'>non-trivial</span> <span m='1829540'>thing</span> <span
  m='1829750'>to</span> <span m='1829860'>do.</span> <span
  m='1831250'>And</span> <span m='1831450'>once</span> <span
  m='1831650'>we</span> <span m='1831730'>do</span> <span
  m='1831850'>that,</span> <span m='1832070'>we</span> <span
  m='1832160'>can</span> <span m='1832250'>do</span> <span
  m='1832350'>this</span> <span m='1832520'>extract-max</span> <span
  m='1833450'>deal</span> <span m='1835280'>to</span> <span
  m='1835840'>sort</span> <span m='1836160'>the</span> <span
  m='1836330'>array.</span> </p><p><span m='1837400'>So</span> <span
  m='1837600'>the</span> <span m='1837690'>first</span> <span
  m='1837920'>step</span> <span m='1838340'>is,</span> <span
  m='1839840'>we</span> <span m='1839980'>want</span> <span
  m='1840090'>to</span> <span m='1840160'>convert</span> <span
  m='1844762'>an</span> <span m='1845260'>array</span> <span
  m='1845470'>A</span> <span m='1845530'>1</span> <span
  m='1845800'>through</span> <span m='1846070'>n</span> <span
  m='1848270'>into</span> <span m='1849470'>a</span> <span
  m='1849630'>max-heap.</span> <span m='1851940'>And</span> <span
  m='1852140'>the</span> <span m='1852210'>key</span> <span
  m='1852380'>word</span> <span m='1852610'>here</span> <span
  m='1852850'>is</span> <span m='1853170'>max-heap,</span> <span
  m='1853720'>because</span> <span m='1853990'>every</span> <span
  m='1854330'>array</span> <span m='1854620'>can</span> <span
  m='1854800'>be</span> <span m='1854900'>visualized</span> <span
  m='1855490'>as</span> <span m='1855620'>a</span> <span
  m='1855670'>heap.</span> <span m='1857840'>And</span> <span
  m='1859130'>I</span> <span m='1859450'>am</span> <span
  m='1859970'>going</span> <span m='1860100'>write</span> <span
  m='1860340'>the</span> <span m='1860390'>pseudocode</span> <span
  m='1860950'>for</span> <span m='1861070'>build-max-heap,</span> <span
  m='1862750'>because</span> <span m='1863200'>it's</span> <span
  m='1863340'>just</span> <span m='1863970'>two</span> <span
  m='1864120'>lines</span> <span m='1864470'>of</span> <span
  m='1864520'>code.</span> <span m='1866190'>And</span> <span
  m='1867910'>that's</span> <span m='1868110'>about</span> <span
  m='1868310'>the</span> <span m='1868390'>limit</span> <span
  m='1868750'>of</span> <span m='1870660'>a</span> <span m='1870820'>size</span>
  <span m='1871080'>of a</span> <span m='1871170'>program</span> <span
  m='1871570'>I</span> <span m='1871630'>can</span> <span
  m='1871850'>really</span> <span m='1872070'>understand,</span> <span
  m='1874230'>or</span> <span m='1874370'>explain,</span> <span
  m='1874840'>I</span> <span m='1874880'>should</span> <span
  m='1875040'>say.</span> <span m='1879900'>And</span> <span
  m='1880200'>this</span> <span m='1880350'>is</span> <span
  m='1880440'>what</span> <span m='1880580'>it</span> <span
  m='1880640'>looks</span> <span m='1880850'>like.</span> <span
  m='1891340'>Alright.</span> <span m='1891460'>that's</span> <span
  m='1891650'>it.</span> </p><p><span m='1892570'>Build-max-heap</span> <span
  m='1893780'>says</span> <span m='1894920'>go</span> <span
  m='1895120'>from</span> <span m='1895360'>i</span> <span
  m='1895710'>equals</span> <span m='1895920'>n,</span> <span
  m='1896360'>by</span> <span m='1896600'>2,</span> <span
  m='1897100'>down</span> <span m='1897700'>to</span> <span
  m='1897830'>1.</span> <span m='1900420'>Max-heapify</span> <span
  m='1902290'>A</span> <span m='1902565'>of</span> <span m='1902840'>i.</span>
  <span m='1904340'>So</span> <span m='1904780'>someone</span> <span
  m='1904980'>explain</span> <span m='1905360'>to</span> <span
  m='1905450'>me</span> <span m='1907940'>why</span> <span m='1908580'>I</span>
  <span m='1908845'>can</span> <span m='1909420'>start</span> <span
  m='1909850'>with</span> <span m='1910240'>n</span> <span
  m='1910500'>over</span> <span m='1910920'>2,</span> <span
  m='1911940'>and</span> <span m='1912170'>why</span> <span
  m='1912450'>I'm</span> <span m='1912690'>going</span> <span
  m='1913080'>down</span> <span m='1914260'>to</span> <span
  m='1914370'>1.</span> <span m='1915270'>Yep.</span> <span m='1915520'>I
  saw</span> <span m='1915996'>you first.</span> </p><p><span
  m='1916948'>AUDIENCE:</span> <span m='1917424'>[INAUDIBLE].</span>
  </p><p><span m='1920756'>PROFESSOR: Leaves</span> <span m='1921232'>are
  good.</span> <span m='1921708'>Leaves are good.</span> <span
  m='1922850'>I'll</span> <span m='1923140'>let</span> <span
  m='1923220'>you</span> <span m='1923510'>go</span> <span m='1923800'>on in
  a</span> <span m='1924140'>second.</span> <span m='1925450'>Leaves</span>
  <span m='1925780'>are</span> <span m='1926170'>good,</span> <span
  m='1926842'>because</span> <span m='1927180'>if</span> <span
  m='1927340'>you</span> <span m='1927470'>look</span> <span
  m='1927720'>at</span> <span m='1929600'>elements</span> <span
  m='1932430'>A</span> <span m='1933110'>of</span> <span m='1933530'>n</span>
  <span m='1933760'>over</span> <span m='1934070'>2,</span> <span
  m='1934520'>plus</span> <span m='1934820'>1</span> <span
  m='1935870'>through</span> <span m='1936100'>n,</span> <span
  m='1938440'>are</span> <span m='1939240'>all</span> <span
  m='1939740'>leaves.</span> <span m='1941790'>That's</span> <span
  m='1941980'>a</span> <span m='1942010'>good</span> <span
  m='1942150'>observation.</span> <span m='1945510'>And</span> <span
  m='1945670'>this</span> <span m='1945800'>is</span> <span
  m='1945920'>true</span> <span m='1946170'>for</span> <span
  m='1946890'>any</span> <span m='1947260'>array.</span> <span
  m='1948090'>It</span> <span m='1948430'>doesn't</span> <span
  m='1948650'>matter</span> <span m='1948890'>what</span> <span
  m='1949020'>n</span> <span m='1949310'>is.</span> <span
  m='1949630'>Doesn't</span> <span m='1949850'>have</span> <span
  m='1950010'>the</span> <span m='1950140'>power</span> <span
  m='1950440'>of</span> <span m='1950540'>2,</span> <span m='1950770'>or</span>
  <span m='1950880'>2</span> <span m='1951000'>[INAUDIBLE]</span> <span
  m='1951350'>minus</span> <span m='1951640'>1,</span> <span
  m='1951880'>or</span> <span m='1951970'>anything</span> <span
  m='1952170'>like</span> <span m='1952350'>that.</span> <span
  m='1953170'>And</span> <span m='1953320'>leaves</span> <span
  m='1953540'>a</span> <span m='1953620'>good,</span> <span
  m='1953850'>because</span> <span m='1954090'>they</span> <span
  m='1954180'>automatically</span> <span m='1955080'>satisfy</span> <span
  m='1957060'>the</span> <span m='1957180'>backseat</span> <span
  m='1957640'>property.</span> <span m='1958390'>Continue.</span> </p><p><span
  m='1959327'>AUDIENCE: OK.</span> <span m='1959814'>[INAUDIBLE].</span>
  </p><p><span m='1974911'>PROFESSOR: That's</span> <span
  m='1975430'>exactly</span> <span m='1975830'>right.</span> <span
  m='1976760'>Beautiful.</span> <span m='1980010'>I</span> <span
  m='1980480'>won't</span> <span m='1980710'>hit</span> <span
  m='1981650'>anybody</span> <span m='1982030'>here.</span> <span
  m='1983260'>So</span> <span m='1983930'>that's</span> <span
  m='1984110'>it.</span> <span m='1984730'>The</span> <span
  m='1984890'>reason</span> <span m='1985130'>this</span> <span
  m='1985280'>works,</span> <span m='1986040'>is</span> <span
  m='1986240'>because</span> <span m='1987770'>you're</span> <span
  m='1988000'>calling</span> <span m='1988460'>max-heapify</span> <span
  m='1989320'>multiple</span> <span m='1989750'>times,</span> <span
  m='1990630'>but</span> <span m='1990880'>every</span> <span
  m='1991150'>time</span> <span m='1991430'>you</span> <span
  m='1991560'>call</span> <span m='1991850'>it,</span> <span
  m='1992930'>you</span> <span m='1993070'>satisfy</span> <span
  m='1993500'>the</span> <span m='1993600'>precondition.</span> <span
  m='1995780'>And</span> <span m='1997160'>the</span> <span
  m='1997330'>leaves</span> <span m='1997750'>are</span> <span
  m='1998200'>automatically</span> <span m='1998790'>max-heaps.</span> <span
  m='2000090'>Then</span> <span m='2000400'>you</span> <span
  m='2000520'>start</span> <span m='2000870'>with</span> <span
  m='2001030'>n</span> <span m='2001250'>over</span> <span m='2001490'>2.</span>
  <span m='2003490'>You</span> <span m='2003670'>are</span> <span
  m='2003840'>going</span> <span m='2004100'>to</span> <span
  m='2004690'>see</span> <span m='2005090'>two</span> <span
  m='2005380'>leaves</span> <span m='2005730'>as</span> <span
  m='2005840'>your</span> <span m='2005980'>children</span> <span
  m='2006920'>for</span> <span m='2007100'>the</span> <span m='2007180'>n</span>
  <span m='2007330'>over</span> <span m='2007520'>2</span> <span
  m='2007680'>node,</span> <span m='2008030'>right?</span> <span
  m='2008250'>I</span> <span m='2008280'>mean,</span> <span
  m='2008420'>just</span> <span m='2008700'>pick</span> <span
  m='2008830'>an</span> <span m='2008890'>example</span> <span
  m='2009250'>here.</span> <span m='2011040'>Our</span> <span
  m='2011090'>2</span> <span m='2011390'>is</span> <span m='2011530'>an</span>
  <span m='2011680'>A</span> <span m='2012170'>of 5,</span> <span
  m='2012570'>right?</span> <span m='2015160'>You're</span> <span
  m='2015350'>out</span> <span m='2015470'>here.</span> <span
  m='2016710'>In</span> <span m='2017140'>this</span> <span
  m='2017310'>case,</span> <span m='2017960'>depending</span> <span
  m='2018060'>on</span> <span m='2018140'>the</span> <span
  m='2018180'>value</span> <span m='2018450'>of</span> <span
  m='2018530'>n,</span> <span m='2018720'>you</span> <span
  m='2018820'>may</span> <span m='2018950'>have</span> <span
  m='2019340'>either</span> <span m='2019580'>two</span> <span
  m='2019730'>children,</span> <span m='2020090'>or</span> <span
  m='2020180'>just</span> <span m='2020360'>one</span> <span
  m='2020550'>child.</span> <span m='2021300'>And</span> <span
  m='2021390'>you</span> <span m='2021450'>have</span> <span
  m='2021590'>one</span> <span m='2021780'>child.</span> <span
  m='2022130'>But</span> <span m='2022220'>regardless</span> <span
  m='2022640'>of</span> <span m='2022730'>that,</span> <span
  m='2023640'>that's</span> <span m='2023810'>going</span> <span
  m='2023910'>to</span> <span m='2023950'>be</span> <span m='2024040'>a</span>
  <span m='2024080'>max-heap,</span> <span m='2024510'>because</span> <span
  m='2024890'>it's a</span> <span m='2024980'>leaf.</span> </p><p><span
  m='2026280'>And</span> <span m='2026470'>so</span> <span
  m='2027100'>you'll</span> <span m='2027560'>have</span> <span
  m='2027700'>two</span> <span m='2027920'>leaves,</span> <span
  m='2028330'>and</span> <span m='2028430'>you</span> <span
  m='2028490'>need</span> <span m='2028620'>to</span> <span
  m='2028690'>put</span> <span m='2028820'>them</span> <span
  m='2028940'>together.</span> <span m='2029840'>And</span> <span
  m='2030480'>that's</span> <span m='2030720'>a</span> <span
  m='2030770'>fairly</span> <span m='2031040'>straightforward</span> <span
  m='2031540'>process</span> <span m='2032830'>of</span> <span
  m='2034520'>attaching</span> <span m='2034890'>the</span> <span
  m='2034980'>leaves</span> <span m='2035260'>together.</span> <span
  m='2035810'>You</span> <span m='2035910'>might</span> <span
  m='2036040'>have</span> <span m='2036160'>to</span> <span
  m='2036260'>do</span> <span m='2036980'>a</span> <span
  m='2037100'>swap,</span> <span m='2037500'>based</span> <span
  m='2037820'>on</span> <span m='2037950'>what</span> <span
  m='2038130'>the</span> <span m='2038190'>element</span> <span
  m='2038590'>is.</span> <span m='2039130'>One</span> <span
  m='2039360'>operation</span> <span m='2040300'>and</span> <span
  m='2040660'>you</span> <span m='2040800'>get</span> <span m='2041410'>a</span>
  <span m='2041450'>little</span> <span m='2041770'>small</span> <span
  m='2042410'>tree,</span> <span m='2043430'>that's</span> <span
  m='2043730'>a</span> <span m='2043790'>max-heap.</span> <span
  m='2045340'>And</span> <span m='2046090'>then</span> <span
  m='2046360'>you</span> <span m='2046480'>do</span> <span m='2046620'>a</span>
  <span m='2046690'>bunch</span> <span m='2046880'>of</span> <span
  m='2046970'>other</span> <span m='2047130'>things</span> <span
  m='2047450'>that</span> <span m='2047740'>all</span> <span
  m='2048130'>work</span> <span m='2048409'>on</span> <span
  m='2048570'>leaves,</span> <span m='2049310'>because</span> <span
  m='2049510'>n</span> <span m='2049650'>over</span> <span m='2049850'>2</span>
  <span m='2050949'>minus</span> <span m='2051389'>1</span> <span
  m='2052300'>is</span> <span m='2052710'>probably</span> <span
  m='2053080'>also</span> <span m='2053449'>going</span> <span
  m='2053620'>to</span> <span m='2053659'>have</span> <span
  m='2053889'>leaves</span> <span m='2054190'>as</span> <span
  m='2054380'>it's</span> <span m='2054489'>children,</span> <span
  m='2055550'>given</span> <span m='2056139'>the</span> <span
  m='2056590'>large</span> <span m='2056860'>value</span> <span
  m='2057159'>of</span> <span m='2057260'>n.</span> <span m='2057870'>There
  will</span> <span m='2058060'>be</span> <span m='2058179'>a</span> <span
  m='2058219'>bunch</span> <span m='2058480'>of</span> <span
  m='2058550'>things</span> <span m='2058830'>where</span> <span
  m='2058969'>you</span> <span m='2059100'>work</span> <span
  m='2059340'>on</span> <span m='2060600'>these</span> <span
  m='2061130'>level</span> <span m='2061500'>one</span> <span
  m='2061860'>nodes,</span> <span m='2062230'>if</span> <span
  m='2062340'>you</span> <span m='2062460'>will,</span> <span
  m='2063110'>that</span> <span m='2063250'>all</span> <span
  m='2063560'>have</span> <span m='2063940'>leaves</span> <span
  m='2064460'>as</span> <span m='2064730'>children.</span> <span
  m='2065790'>And</span> <span m='2065929'>then</span> <span
  m='2066060'>you</span> <span m='2066159'>work</span> <span
  m='2066340'>on</span> <span m='2066420'>the</span> <span
  m='2066480'>level</span> <span m='2066699'>two</span> <span
  m='2066880'>nodes,</span> <span m='2067520'>and</span> <span
  m='2067679'>so</span> <span m='2067810'>on and</span> <span
  m='2067960'>so</span> <span m='2068150'>forth.</span> <span
  m='2068719'>And</span> <span m='2068949'>as</span> <span m='2069080'>I</span>
  <span m='2069139'>said</span> <span m='2069330'>before,</span> <span
  m='2069800'>you're</span> <span m='2069850'>working</span> <span
  m='2070219'>your</span> <span m='2070370'>way</span> <span
  m='2070610'>up,</span> <span m='2071420'>and</span> <span
  m='2071650'>you're</span> <span m='2071800'>only</span> <span
  m='2072050'>working</span> <span m='2072360'>with</span> <span
  m='2072500'>max-heaps</span> <span m='2073489'>as</span> <span
  m='2073690'>your</span> <span m='2073820'>left</span> <span
  m='2074500'>child</span> <span m='2075010'>and</span> <span
  m='2075130'>your</span> <span m='2075260'>right</span> <span
  m='2075469'>child.</span> <span m='2077159'>That</span> <span
  m='2077250'>make</span> <span m='2077380'>sense?</span> </p><p><span
  m='2082630'>If</span> <span m='2082739'>you</span> <span m='2082800'>do</span>
  <span m='2082940'>that,</span> <span m='2084510'>and</span> <span
  m='2084630'>this</span> <span m='2084739'>is</span> <span m='2084840'>a</span>
  <span m='2084909'>fairly</span> <span m='2085159'>straightforward</span> <span
  m='2085960'>question,</span> <span m='2086940'>if</span> <span
  m='2087120'>you</span> <span m='2087190'>do</span> <span m='2087350'>a</span>
  <span m='2087429'>straightforward</span> <span m='2088070'>analysis</span>
  <span m='2088620'>of</span> <span m='2088750'>this,</span> <span
  m='2089790'>what</span> <span m='2090080'>is</span> <span
  m='2090210'>the</span> <span m='2090310'>complexity</span> <span
  m='2091260'>of</span> <span m='2091340'>build-max-heap?</span> <span
  m='2094670'>Yep.</span> </p><p><span m='2095637'>AUDIENCE:</span> <span
  m='2096115'>[INAUDIBLE].</span> </p><p><span m='2098990'>PROFESSOR:
  Right.</span> <span m='2099300'>So</span> <span m='2099470'>that's</span>
  <span m='2100140'>order.</span> <span m='2103100'>Order</span> <span
  m='2103320'>n</span> <span m='2103450'>log</span> <span m='2103680'>n.</span>
  <span m='2104970'>Now,</span> <span m='2106730'>this</span> <span
  m='2107030'>is</span> <span m='2107210'>through</span> <span
  m='2107370'>a</span> <span m='2107440'>simple</span> <span
  m='2107750'>analysis.</span> <span m='2108220'>Now</span> <span
  m='2108320'>I'm</span> <span m='2108410'>going</span> <span
  m='2108510'>to</span> <span m='2108550'>give</span> <span
  m='2108660'>you</span> <span m='2108780'>a</span> <span
  m='2108850'>chance</span> <span m='2110596'>to</span> <span
  m='2110980'>tell</span> <span m='2111160'>me</span> <span
  m='2112730'>if</span> <span m='2113730'>you</span> <span
  m='2113860'>can</span> <span m='2113960'>do</span> <span
  m='2114060'>better</span> <span m='2114290'>than</span> <span
  m='2114450'>that.</span> <span m='2115070'>Or</span> <span
  m='2115170'>not.</span> <span m='2115750'>In</span> <span
  m='2115930'>terms</span> <span m='2116240'>of</span> <span
  m='2116420'>analysis.</span> <span m='2119430'>It's</span> <span
  m='2119720'>a</span> <span m='2119780'>subtle</span> <span
  m='2120020'>question.</span> <span m='2122480'>It's</span> <span
  m='2122660'>a</span> <span m='2122700'>subtle</span> <span
  m='2122990'>question,</span> <span m='2124250'>that</span> <span
  m='2124360'>I'm</span> <span m='2124460'>asking.</span> <span
  m='2125160'>I'm</span> <span m='2125310'>saying,</span> <span
  m='2126690'>this</span> <span m='2127230'>is</span> <span
  m='2127450'>the</span> <span m='2127560'>algorithm,</span> <span
  m='2128570'>alright?</span> <span m='2129160'>I don't</span> <span
  m='2129340'>want</span> <span m='2129540'>you</span> <span
  m='2129630'>to</span> <span m='2129720'>change</span> <span
  m='2130090'>the</span> <span m='2130180'>algorithm,</span> <span
  m='2131510'>but</span> <span m='2131640'>I</span> <span
  m='2131660'>want</span> <span m='2131890'>you</span> <span
  m='2131970'>to</span> <span m='2132080'>change</span> <span
  m='2132530'>your</span> <span m='2132610'>analysis.</span> <span
  m='2134340'>The</span> <span m='2134400'>analysis</span> <span
  m='2135260'>that</span> <span m='2135930'>you</span> <span
  m='2136390'>just</span> <span m='2136660'>did</span> <span
  m='2137380'>was,</span> <span m='2137640'>you</span> <span
  m='2137900'>said,</span> <span m='2138930'>I</span> <span
  m='2139050'>got</span> <span m='2140190'>[INAUDIBLE]</span> <span
  m='2140570'>n</span> <span m='2140910'>steps</span> <span
  m='2141480'>here,</span> <span m='2142260'>because</span> <span
  m='2142530'>it's</span> <span m='2142960'>n</span> <span m='2143140'>by</span>
  <span m='2143300'>2</span> <span m='2143540'>steps.</span> <span
  m='2145280'>Looks</span> <span m='2145600'>like</span> <span
  m='2145880'>each</span> <span m='2146140'>of</span> <span
  m='2146230'>the</span> <span m='2146320'>steps</span> <span
  m='2147280'>is</span> <span m='2147510'>taking</span> <span
  m='2148210'>log</span> <span m='2148610'>n</span> <span
  m='2148840'>time.</span> <span m='2149800'>So</span> <span
  m='2150040'>that's</span> <span m='2150310'>n</span> <span
  m='2150500'>log</span> <span m='2150750'>n.</span> <span
  m='2151390'>And</span> <span m='2151790'>I</span> <span m='2152060'>was</span>
  <span m='2152190'>careful.</span> <span m='2154080'>I</span> <span
  m='2154230'>put</span> <span m='2154630'>big</span> <span m='2155060'>O</span>
  <span m='2155490'>here.</span> <span m='2155950'>OK?</span> <span
  m='2156750'>Because that's</span> <span m='2156890'>an</span> <span
  m='2157090'>upper</span> <span m='2157150'>bond.</span> <span
  m='2157790'>So</span> <span m='2157950'>that's</span> <span
  m='2158110'>a</span> <span m='2158160'>valid</span> <span
  m='2158510'>answer.</span> <span m='2160140'>Can</span> <span
  m='2160250'>you</span> <span m='2160360'>do</span> <span
  m='2160490'>better?</span> <span m='2161650'>Can</span> <span
  m='2161750'>you</span> <span m='2161840'>do</span> <span m='2161960'>a</span>
  <span m='2162020'>better</span> <span m='2162300'>analysis--</span> <span
  m='2163130'>and</span> <span m='2163230'>I'll</span> <span
  m='2163310'>let</span> <span m='2163460'>you</span> <span
  m='2163570'>go</span> <span m='2163720'>first--</span> <span m='2164490'>can
  you</span> <span m='2164670'>do</span> <span m='2164780'>a</span> <span
  m='2164840'>better</span> <span m='2165060'>analysis</span> <span
  m='2166320'>that</span> <span m='2168300'>somehow</span> <span
  m='2168910'>gives</span> <span m='2169120'>me</span> <span
  m='2169280'>better</span> <span m='2169490'>complexity?</span> </p><p><span
  m='2170956'>AUDIENCE:</span> <span m='2171419'>I think</span> <span
  m='2171882'>you bring it</span> <span m='2172345'>to</span> <span
  m='2172808'>[INAUDIBLE].</span> </p><p><span m='2174660'>PROFESSOR: OK.
  How?</span> </p><p><span m='2174925'>AUDIENCE: So</span> <span
  m='2175190'>each</span> <span m='2175688'>node</span> <span
  m='2176186'>get</span> <span m='2176684'>a</span> <span
  m='2177680'>maximum</span> <span m='2178178'>of</span> <span
  m='2178676'>two</span> <span m='2179174'>[INAUDIBLE].</span> <span
  m='2184154'>So,</span> <span m='2184652'>for</span> <span
  m='2185150'>some</span> <span m='2186146'>n,</span> <span
  m='2186644'>there</span> <span m='2187142'>will</span> <span
  m='2187640'>be</span> <span m='2190130'>a</span> <span
  m='2190628'>constant</span> <span m='2191126'>number</span> <span
  m='2191624'>of</span> <span m='2192122'>comparisons</span> <span
  m='2193616'>to</span> <span m='2194612'>max-heapify</span> <span
  m='2196110'>that</span> <span m='2197050'>[INAUDIBLE].</span> </p><p><span
  m='2204210'>PROFESSOR: Yeah.</span> <span m='2204390'>It's</span> <span
  m='2205450'>hard</span> <span m='2205710'>to</span> <span
  m='2205760'>explain.</span> <span m='2206800'>You're</span> <span
  m='2206910'>on</span> <span m='2207020'>the</span> <span
  m='2207090'>right</span> <span m='2207280'>track.</span> <span
  m='2207850'>Absolutely</span> <span m='2208230'>on</span> <span
  m='2208300'>the</span> <span m='2208520'>right</span> <span
  m='2208820'>track.</span> <span m='2210610'>So</span> <span
  m='2210780'>it</span> <span m='2210940'>turns</span> <span
  m='2211190'>out</span> <span m='2211370'>that,</span> <span m='2211590'>and
  I'll do</span> <span m='2211885'>this,</span> <span m='2212180'>it's</span>
  <span m='2212320'>going</span> <span m='2212420'>to</span> <span
  m='2212460'>take</span> <span m='2212620'>a</span> <span
  m='2212890'>few</span> <span m='2213070'>minutes</span> <span
  m='2213340'>here,</span> <span m='2213800'>because</span> <span
  m='2213950'>I</span> <span m='2214000'>write</span> <span
  m='2214300'>some</span> <span m='2214450'>things</span> <span
  m='2214710'>out.</span> <span m='2215780'>You have</span> <span
  m='2215870'>to</span> <span m='2215950'>sum</span> <span m='2216200'>up</span>
  <span m='2216300'>a</span> <span m='2216510'>bunch</span> <span
  m='2216770'>of</span> <span m='2217860'>arithmetic</span> <span
  m='2218330'>series,</span> <span m='2218730'>and</span> <span
  m='2218850'>so</span> <span m='2219020'>on.</span> <span m='2219180'>So</span>
  <span m='2219300'>it's</span> <span m='2219735'>a</span> <span
  m='2220170'>bit</span> <span m='2220690'>unfair</span> <span
  m='2221160'>to</span> <span m='2221820'>have</span> <span
  m='2221960'>to</span> <span m='2222030'>speak</span> <span
  m='2222410'>out</span> <span m='2222620'>the</span> <span
  m='2222720'>answer,</span> <span m='2223940'>but</span> <span
  m='2224580'>the</span> <span m='2224690'>correct</span> <span
  m='2224950'>answer,</span> <span m='2225420'>in</span> <span
  m='2225600'>fact,</span> <span m='2226860'>is</span> <span
  m='2227340'>that</span> <span m='2227750'>this</span> <span
  m='2228140'>is</span> <span m='2228900'>order</span> <span
  m='2229250'>n</span> <span m='2229630'>complexity.</span> <span
  m='2230820'>This</span> <span m='2231200'>algorithm</span> <span
  m='2231580'>that</span> <span m='2231700'>I</span> <span
  m='2231750'>put</span> <span m='2231920'>up</span> <span
  m='2232070'>here,</span> <span m='2232800'>if</span> <span
  m='2232980'>you</span> <span m='2233090'>do</span> <span m='2233250'>a</span>
  <span m='2233310'>careful</span> <span m='2233740'>analysis</span> <span
  m='2234230'>of</span> <span m='2234380'>it,</span> <span
  m='2234890'>you</span> <span m='2235010'>can</span> <span
  m='2235130'>get</span> <span m='2235310'>order</span> <span
  m='2235550'>n</span> <span m='2235870'>out</span> <span m='2236040'>of</span>
  <span m='2236170'>it.</span> <span m='2236980'>And</span> <span
  m='2237050'>we'll</span> <span m='2237180'>do</span> <span
  m='2237310'>this</span> <span m='2237500'>careful</span> <span
  m='2237790'>analysis.</span> </p><p><span m='2238770'>And</span> <span
  m='2239160'>I'll</span> <span m='2239320'>tell</span> <span
  m='2239440'>you</span> <span m='2239570'>why</span> <span
  m='2240230'>it's</span> <span m='2240340'>order</span> <span
  m='2240500'>n,</span> <span m='2241370'>in</span> <span
  m='2241680'>terms</span> <span m='2242000'>of</span> <span
  m='2242830'>a</span> <span m='2242870'>hand</span> <span
  m='2243150'>wavy</span> <span m='2243460'>argument.</span> <span
  m='2244880'>A</span> <span m='2244960'>hand</span> <span
  m='2245200'>wavy</span> <span m='2245500'>argument</span> <span
  m='2246300'>is</span> <span m='2246540'>that</span> <span
  m='2247630'>you're</span> <span m='2247830'>doing</span> <span
  m='2248980'>basically,</span> <span m='2250080'>obviously</span> <span
  m='2250380'>no</span> <span m='2250580'>work</span> <span m='2250830'>for
  the</span> <span m='2251000'>leaves.</span> <span m='2251400'>But</span> <span
  m='2251500'>you're</span> <span m='2251600'>not</span> <span
  m='2251790'>even</span> <span m='2252000'>counting</span> <span
  m='2252430'>that,</span> <span m='2252780'>because</span> <span
  m='2252940'>you're</span> <span m='2253060'>starting</span> <span
  m='2253460'>with</span> <span m='2253610'>n</span> <span
  m='2253740'>over</span> <span m='2253930'>2.</span> <span
  m='2254620'>But</span> <span m='2255090'>when</span> <span
  m='2255290'>you</span> <span m='2255450'>look</span> <span
  m='2255750'>at</span> <span m='2255890'>the</span> <span m='2256400'>n</span>
  <span m='2256810'>over 2</span> <span m='2257060'>node,</span> <span
  m='2258090'>it's</span> <span m='2258850'>essentially</span> <span
  m='2259530'>one</span> <span m='2259870'>operation,</span> <span
  m='2260320'>or</span> <span m='2260400'>two</span> <span
  m='2260560'>operations,</span> <span m='2261100'>in</span> <span
  m='2261190'>whichever</span> <span m='2261740'>way</span> <span
  m='2262180'>you</span> <span m='2262250'>count,</span> <span
  m='2263110'>to</span> <span m='2263230'>build</span> <span
  m='2264290'>max-heap.</span> </p><p><span m='2265780'>And</span> <span
  m='2266050'>so</span> <span m='2266240'>for</span> <span
  m='2266350'>that</span> <span m='2266700'>first</span> <span
  m='2267120'>level</span> <span m='2267410'>of</span> <span
  m='2267530'>nodes,</span> <span m='2268460'>it's</span> <span
  m='2269290'>exactly</span> <span m='2269720'>one</span> <span
  m='2269940'>operation.</span> <span m='2271280'>The</span> <span
  m='2271530'>first</span> <span m='2271740'>level</span> <span
  m='2271980'>that</span> <span m='2272110'>are</span> <span
  m='2272260'>above</span> <span m='2272540'>the</span> <span
  m='2272620'>leaves.</span> <span m='2273400'>For</span> <span
  m='2273520'>the</span> <span m='2273610'>next</span> <span
  m='2273890'>level,</span> <span m='2274800'>you</span> <span
  m='2274970'>may</span> <span m='2275080'>be</span> <span
  m='2275200'>doing</span> <span m='2275900'>two</span> <span
  m='2276080'>operations.</span> <span m='2277180'>And</span> <span
  m='2277370'>so</span> <span m='2277530'>there</span> <span
  m='2277820'>is</span> <span m='2278160'>an</span> <span
  m='2278970'>increase</span> <span m='2279570'>in</span> <span
  m='2279680'>operations</span> <span m='2280320'>as</span> <span
  m='2280460'>you</span> <span m='2280570'>get</span> <span
  m='2281040'>higher</span> <span m='2281480'>and</span> <span
  m='2281560'>higher</span> <span m='2281960'>up.</span> <span
  m='2282570'>But</span> <span m='2282630'>there are</span> <span
  m='2282910'>fewer</span> <span m='2283250'>and</span> <span
  m='2283380'>fewer</span> <span m='2283790'>nodes</span> <span
  m='2284580'>as</span> <span m='2284740'>you</span> <span m='2284940'>at</span>
  <span m='2285000'>higher</span> <span m='2285280'>and</span> <span
  m='2285370'>higher</span> <span m='2285680'>up,</span> <span
  m='2286080'>right?</span> <span m='2286740'>Because</span> <span
  m='2287680'>there's</span> <span m='2287890'>only</span> <span
  m='2288730'>one</span> <span m='2289350'>node</span> <span
  m='2290380'>that</span> <span m='2290580'>is</span> <span
  m='2290750'>the</span> <span m='2290870'>highest</span> <span
  m='2291430'>level</span> <span m='2291790'>node.</span> <span
  m='2292190'>The</span> <span m='2292390'>root</span> <span
  m='2292590'>node.</span> <span m='2293440'>That</span> <span
  m='2293730'>node</span> <span m='2294050'>has</span> <span
  m='2294930'>logarithmic</span> <span m='2295600'>number</span> <span
  m='2295860'>of</span> <span m='2295940'>operations,</span> <span
  m='2296470'>but</span> <span m='2296560'>it's</span> <span
  m='2296660'>only</span> <span m='2296860'>one</span> <span
  m='2297180'>node.</span> <span m='2299980'>The</span> <span
  m='2300350'>ones</span> <span m='2300640'>down on</span> <span
  m='2300800'>the</span> <span m='2300880'>bottom</span> <span
  m='2301360'>have</span> <span m='2301530'>a</span> <span
  m='2301600'>constant</span> <span m='2302060'>number</span> <span
  m='2302290'>of</span> <span m='2302370'>operations.</span> </p><p><span
  m='2304110'>So</span> <span m='2305010'>I'll</span> <span
  m='2305180'>put</span> <span m='2305320'>all</span> <span
  m='2305450'>of</span> <span m='2305520'>this</span> <span
  m='2305700'>down,</span> <span m='2306210'>and</span> <span
  m='2306390'>hopefully</span> <span m='2306700'>you'll</span> <span
  m='2306830'>be</span> <span m='2306940'>convinced</span> <span
  m='2307560'>by</span> <span m='2307680'>the</span> <span
  m='2307790'>time</span> <span m='2308020'>we've</span> <span
  m='2308190'>done</span> <span m='2308420'>some</span> <span
  m='2308590'>math</span> <span m='2308900'>here,</span> <span m='2310050'>or
  some</span> <span m='2310340'>arithmetic</span> <span m='2310820'>here,</span>
  <span m='2311720'>but</span> <span m='2312710'>you</span> <span
  m='2312900'>can</span> <span m='2314050'>quantify</span> <span
  m='2314840'>what</span> <span m='2315040'>I</span> <span
  m='2315100'>just</span> <span m='2315370'>said</span> <span
  m='2316550'>fairly</span> <span m='2317130'>easily,</span> <span
  m='2319410'>as</span> <span m='2319590'>long</span> <span
  m='2319900'>as</span> <span m='2320270'>you're</span> <span
  m='2320430'>careful</span> <span m='2320900'>about</span> <span
  m='2321310'>the</span> <span m='2321490'>counting</span> <span
  m='2322010'>that</span> <span m='2322120'>we</span> <span
  m='2322210'>have</span> <span m='2322350'>to</span> <span
  m='2322450'>do.</span> <span m='2323050'>So</span> <span
  m='2323170'>this</span> <span m='2323790'>is</span> <span
  m='2323940'>really,</span> <span m='2324150'>truly</span> <span
  m='2324450'>counting.</span> <span m='2325210'>Analysis</span> <span
  m='2325730'>has</span> <span m='2326850'>a</span> <span m='2326900'>lot</span>
  <span m='2327080'>to</span> <span m='2327170'>do</span> <span
  m='2327270'>with</span> <span m='2327410'>counting.</span> <span
  m='2327890'>And we're just</span> <span m='2328200'>being</span> <span
  m='2328360'>more</span> <span m='2328580'>careful</span> <span
  m='2329460'>with</span> <span m='2329720'>the</span> <span
  m='2330220'>counting,</span> <span m='2330760'>as</span> <span
  m='2330980'>opposed</span> <span m='2331300'>to</span> <span
  m='2331370'>this</span> <span m='2331520'>straightforward</span> <span
  m='2332180'>argument</span> <span m='2333090'>that</span> <span
  m='2333340'>wasn't</span> <span m='2333880'>particularly</span> <span
  m='2334340'>careful</span> <span m='2334720'>with</span> <span
  m='2334850'>the</span> <span m='2334970'>counting.</span> </p><p><span
  m='2337250'>So</span> <span m='2337460'>let's</span> <span
  m='2337670'>take</span> <span m='2337810'>a</span> <span
  m='2337850'>look</span> <span m='2338040'>at</span> <span
  m='2338720'>exactly</span> <span m='2339150'>this</span> <span
  m='2339340'>algorithm.</span> <span m='2340280'>And</span> <span
  m='2340640'>I</span> <span m='2340670'>want</span> <span m='2340800'>to</span>
  <span m='2340840'>make</span> <span m='2341030'>an</span> <span
  m='2341140'>observation.</span> <span m='2342760'>Which</span> <span
  m='2342960'>is</span> <span m='2343050'>what</span> <span m='2343210'>I</span>
  <span m='2343340'>just</span> <span m='2343500'>did,</span> <span
  m='2343870'>but</span> <span m='2344130'>I'd like to</span> <span
  m='2344320'>write</span> <span m='2344550'>it</span> <span
  m='2344650'>out.</span> <span m='2345110'>Where</span> <span
  m='2345230'>we</span> <span m='2345380'>say,</span> <span
  m='2346440'>max-heapify</span> <span m='2351530'>takes</span> <span
  m='2353680'>constant</span> <span m='2354420'>time</span> <span
  m='2358530'>for</span> <span m='2359270'>nodes</span> <span
  m='2364770'>that</span> <span m='2365030'>are</span> <span
  m='2365130'>one</span> <span m='2365420'>level</span> <span
  m='2368570'>above</span> <span m='2368910'>leaves.</span> <span
  m='2374590'>And,</span> <span m='2375730'>in</span> <span
  m='2375920'>general,</span> <span m='2380220'>order</span> <span
  m='2380610'>L</span> <span m='2380870'>time</span> <span
  m='2386110'>for</span> <span m='2386240'>nodes</span> <span
  m='2391020'>that</span> <span m='2391290'>are</span> <span
  m='2391510'>L</span> <span m='2391730'>levels</span> <span
  m='2392110'>above</span> <span m='2400130'>the</span> <span
  m='2400360'>leaves.</span> <span m='2405480'>That's</span> <span
  m='2407410'>observation</span> <span m='2407950'>number</span> <span
  m='2408140'>one.</span> </p><p><span m='2409080'>Observation</span> <span
  m='2409570'>number</span> <span m='2409810'>two</span> <span
  m='2410110'>is</span> <span m='2410250'>that</span> <span
  m='2410430'>we</span> <span m='2410570'>have</span> <span m='2411000'>n</span>
  <span m='2411320'>over</span> <span m='2411570'>4</span> <span
  m='2411960'>nodes</span> <span m='2415350'>that,</span> <span
  m='2416250'>give</span> <span m='2416430'>or</span> <span
  m='2416530'>take</span> <span m='2416730'>one,</span> <span
  m='2417090'>depending</span> <span m='2417410'>on</span> <span
  m='2418080'>the</span> <span m='2418140'>value</span> <span
  m='2418430'>of</span> <span m='2418540'>n.</span> <span m='2418870'>I</span>
  <span m='2418960'>don't</span> <span m='2419070'>want</span> <span
  m='2419160'>to</span> <span m='2419200'>get</span> <span
  m='2420150'>hung</span> <span m='2420360'>up</span> <span
  m='2420540'>on</span> <span m='2420660'>floors</span> <span
  m='2421090'>and</span> <span m='2421230'>ceilings.</span> <span
  m='2422400'>And</span> <span m='2422600'>in</span> <span
  m='2422750'>any</span> <span m='2422900'>case,</span> <span
  m='2423100'>we're</span> <span m='2423350'>eventually</span> <span
  m='2423700'>going</span> <span m='2423810'>to</span> <span
  m='2423850'>get</span> <span m='2423950'>an</span> <span
  m='2424060'>asymptotic</span> <span m='2424870'>result,</span> <span
  m='2425580'>so</span> <span m='2425740'>we</span> <span
  m='2425820'>don't</span> <span m='2425970'>have</span> <span
  m='2426060'>to</span> <span m='2426130'>worry</span> <span
  m='2426310'>about</span> <span m='2426510'>that.</span> <span
  m='2427020'>But</span> <span m='2427120'>we</span> <span
  m='2427190'>have</span> <span m='2427320'>n</span> <span
  m='2427510'>over</span> <span m='2427690'>four</span> <span
  m='2427970'>nodes</span> <span m='2428290'>with</span> <span
  m='2428420'>level</span> <span m='2428730'>one,</span> <span
  m='2430110'>n</span> <span m='2430340'>over</span> <span m='2430590'>8</span>
  <span m='2432070'>with level</span> <span m='2432610'>two.</span> <span
  m='2436760'>And</span> <span m='2437960'>1</span> <span
  m='2438410'>node</span> <span m='2442070'>with</span> <span
  m='2442300'>log</span> <span m='2442585'>n,</span> <span
  m='2445190'>sort</span> <span m='2445350'>of</span> <span
  m='2445410'>the</span> <span m='2445480'>log n</span> <span
  m='2445860'>level,</span> <span m='2447070'>which</span> <span
  m='2447200'>is</span> <span m='2447310'>the</span> <span
  m='2447660'>root.</span> </p><p><span m='2449390'>So</span> <span
  m='2449540'>this</span> <span m='2449710'>is</span> <span
  m='2449900'>decrease</span> <span m='2451040'>in</span> <span
  m='2451220'>terms</span> <span m='2451590'>of</span> <span
  m='2452300'>nodes</span> <span m='2453310'>as</span> <span
  m='2453610'>the</span> <span m='2453730'>work</span> <span
  m='2454500'>that</span> <span m='2454650'>you're</span> <span
  m='2454780'>doing</span> <span m='2455430'>increases.</span> <span
  m='2457230'>And</span> <span m='2457350'>that's</span> <span
  m='2457540'>the</span> <span m='2457630'>careful</span> <span
  m='2458060'>accounting</span> <span m='2458470'>that</span> <span
  m='2458580'>we</span> <span m='2458680'>have</span> <span
  m='2458820'>to</span> <span m='2458920'>do.</span> <span
  m='2459530'>And</span> <span m='2459690'>so</span> <span m='2459840'>all
  I</span> <span m='2460050'>have</span> <span m='2460190'>to</span> <span
  m='2460260'>do</span> <span m='2460400'>now</span> <span m='2461480'>to</span>
  <span m='2462180'>prove</span> <span m='2462610'>to</span> <span
  m='2462710'>you</span> <span m='2462930'>that</span> <span
  m='2463760'>this</span> <span m='2463910'>is</span> <span
  m='2464010'>actually</span> <span m='2464340'>an</span> <span
  m='2464430'>order</span> <span m='2465340'>and</span> <span
  m='2465630'>algorithm,</span> <span m='2466530'>is</span> <span
  m='2466680'>to</span> <span m='2466790'>write</span> <span
  m='2467010'>a</span> <span m='2467060'>little</span> <span
  m='2468030'>summation</span> <span m='2469230'>that</span> <span
  m='2469390'>sums</span> <span m='2469700'>up</span> <span
  m='2470490'>all</span> <span m='2470750'>of</span> <span
  m='2470860'>the</span> <span m='2470930'>work</span> <span
  m='2472040'>across</span> <span m='2472490'>these</span> <span
  m='2472710'>different</span> <span m='2473030'>levels.</span> </p><p><span
  m='2480670'>And</span> <span m='2480820'>so</span> <span
  m='2480980'>the</span> <span m='2481460'>total</span> <span
  m='2481770'>amount</span> <span m='2482000'>of</span> <span
  m='2482090'>work</span> <span m='2489220'>in</span> <span
  m='2489370'>the</span> <span m='2489460'>4</span> <span
  m='2489740'>loop</span> <span m='2494970'>can</span> <span
  m='2495120'>be</span> <span m='2495220'>summed</span> <span
  m='2495630'>as</span> <span m='2496340'>n</span> <span
  m='2496600'>divided</span> <span m='2496950'>by</span> <span
  m='2497100'>4,</span> <span m='2498090'>times</span> <span
  m='2498430'>1,</span> <span m='2499090'>times</span> <span
  m='2499390'>c.</span> <span m='2500180'>So</span> <span
  m='2500310'>this</span> <span m='2500500'>sum,</span> <span
  m='2502250'>I</span> <span m='2502540'>have</span> <span
  m='2502710'>one</span> <span m='2502930'>level</span> <span
  m='2503280'>here,</span> <span m='2504190'>and</span> <span
  m='2504780'>I'm</span> <span m='2504900'>going to do</span> <span
  m='2505050'>some</span> <span m='2505260'>constant</span> <span
  m='2505770'>amount</span> <span m='2505980'>of</span> <span
  m='2506060'>work</span> <span m='2506340'>for</span> <span
  m='2506450'>that</span> <span m='2506610'>one</span> <span
  m='2506810'>level.</span> <span m='2507900'>So</span> <span
  m='2507970'>I'm</span> <span m='2508050'>just</span> <span
  m='2508180'>going</span> <span m='2508270'>to</span> <span
  m='2508320'>put</span> <span m='2508490'>c</span> <span m='2508730'>out</span>
  <span m='2508870'>there,</span> <span m='2509050'>because</span> <span
  m='2509260'>eventually</span> <span m='2509620'>I</span> <span
  m='2509650'>can</span> <span m='2509780'>take</span> <span
  m='2509930'>away</span> <span m='2510050'>the</span> <span
  m='2510160'>c,</span> <span m='2510460'>right?</span> <span
  m='2510960'>That's</span> <span m='2511120'>the</span> <span
  m='2511220'>beauty</span> <span m='2511440'>of</span> <span
  m='2511540'>asymptotics.</span> <span m='2513190'>So</span> <span
  m='2513400'>we</span> <span m='2513480'>don't</span> <span
  m='2513600'>need</span> <span m='2513820'>to</span> <span
  m='2514000'>argue</span> <span m='2515660'>about</span> <span
  m='2515940'>how</span> <span m='2516080'>much</span> <span
  m='2516280'>work</span> <span m='2516570'>is</span> <span
  m='2516720'>done</span> <span m='2516900'>at</span> <span
  m='2516990'>that</span> <span m='2517130'>one</span> <span
  m='2517310'>level,</span> <span m='2517970'>how many</span> <span
  m='2518280'>swaps,</span> <span m='2518740'>et</span> <span
  m='2518830'>cetera,</span> <span m='2519160'>et cetera.</span> <span
  m='2520070'>But</span> <span m='2520170'>the</span> <span
  m='2520250'>fact</span> <span m='2520480'>is</span> <span
  m='2520610'>that</span> <span m='2521050'>these</span> <span
  m='2521220'>n</span> <span m='2521370'>over</span> <span
  m='2521530'>four</span> <span m='2521740'>nodes</span> <span
  m='2522040'>are</span> <span m='2522100'>one</span> <span
  m='2522290'>level</span> <span m='2522600'>above</span> <span m='2522850'>the
  leaves.</span> <span m='2523830'>That's</span> <span m='2524050'>what's</span>
  <span m='2524290'>key.</span> </p><p><span m='2524970'>And</span> <span
  m='2525300'>then</span> <span m='2525450'>I</span> <span
  m='2525550'>have</span> <span m='2527170'>n</span> <span
  m='2527380'>over</span> <span m='2527620'>8</span> <span
  m='2528290'>times</span> <span m='2528640'>2c,</span> <span
  m='2530050'>plus</span> <span m='2531240'>n</span> <span
  m='2531430'>over</span> <span m='2531620'>16</span> <span
  m='2532950'>times</span> <span m='2533320'>3c,</span> <span
  m='2534470'>plus</span> <span m='2536170'>1</span> <span
  m='2537460'>times</span> <span m='2538850'>log</span> <span m='2540690'>of
  n</span> <span m='2541280'>c.</span> <span m='2543170'>I've</span> <span
  m='2543320'>essentially</span> <span m='2543730'>written</span> <span
  m='2544710'>in</span> <span m='2545090'>an</span> <span
  m='2545300'>arithmetic</span> <span m='2545760'>expression</span> <span
  m='2546710'>exactly</span> <span m='2547240'>what</span> <span
  m='2547430'>I</span> <span m='2547510'>have</span> <span
  m='2548070'>observed</span> <span m='2549030'>on</span> <span
  m='2549360'>the</span> <span m='2549550'>board</span> <span
  m='2549790'>above.</span> <span m='2551840'>Stop</span> <span
  m='2552110'>me</span> <span m='2552220'>if</span> <span m='2552280'>you</span>
  <span m='2552370'>have</span> <span m='2552530'>questions.</span> </p><p><span
  m='2554150'>Now</span> <span m='2554970'>I'm</span> <span
  m='2555120'>going</span> <span m='2555220'>to</span> <span
  m='2555280'>set--</span> <span m='2556130'>just</span> <span
  m='2556320'>to</span> <span m='2556690'>try</span> <span
  m='2556880'>and</span> <span m='2557390'>make</span> <span
  m='2557550'>this</span> <span m='2557680'>a</span> <span
  m='2557740'>little</span> <span m='2558010'>easier</span> <span
  m='2558360'>to</span> <span m='2558470'>look</span> <span
  m='2558640'>at,</span> <span m='2559990'>and</span> <span
  m='2560420'>easy</span> <span m='2560700'>to</span> <span
  m='2560760'>reason</span> <span m='2561000'>about--</span> <span
  m='2561770'>I'm</span> <span m='2561930'>going</span> <span
  m='2562030'>to</span> <span m='2562100'>set</span> <span m='2565140'>n</span>
  <span m='2565330'>over</span> <span m='2565530'>4</span> <span m='2565920'>to
  2</span> <span m='2566410'>raised</span> <span m='2566680'>to</span> <span
  m='2566770'>k,</span> <span m='2568900'>and</span> <span
  m='2569180'>I'm</span> <span m='2569250'>going</span> <span
  m='2569350'>to</span> <span m='2569400'>simplify.</span> <span
  m='2570610'>I'm</span> <span m='2570660'>just</span> <span
  m='2570950'>pulling</span> <span m='2571190'>out</span> <span
  m='2571350'>certain</span> <span m='2571610'>things,</span> <span
  m='2571950'>and</span> <span m='2572110'>this</span> <span
  m='2572300'>thing</span> <span m='2572460'>is</span> <span
  m='2572550'>going</span> <span m='2572660'>to</span> <span
  m='2572720'>translate</span> <span m='2573290'>to</span> <span
  m='2573900'>c</span> <span m='2574320'>times</span> <span m='2574680'>2</span>
  <span m='2574830'>raised</span> <span m='2575090'>to</span> <span
  m='2575200'>k,</span> <span m='2581090'>times</span> <span
  m='2581490'>1,</span> <span m='2582900'>divided</span> <span
  m='2583180'>by</span> <span m='2583300'>2</span> <span
  m='2583470'>raised</span> <span m='2583720'>to</span> <span
  m='2583790'>0,</span> <span m='2584970'>2</span> <span
  m='2585170'>divided</span> <span m='2585510'>by</span> <span
  m='2585650'>2</span> <span m='2585870'>raised</span> <span
  m='2586040'>to</span> <span m='2586150'>1,</span> <span m='2587630'>3</span>
  <span m='2587890'>divided</span> <span m='2588190'>by</span> <span
  m='2588330'>2</span> <span m='2588480'>raised</span> <span
  m='2588720'>to</span> <span m='2588820'>2,</span> <span m='2589970'>et</span>
  <span m='2590090'>cetera,</span> <span m='2591230'>k</span> <span
  m='2591450'>plus</span> <span m='2591720'>1</span> <span
  m='2592990'>divided</span> <span m='2593320'>by</span> <span
  m='2593470'>2</span> <span m='2593670'>raised</span> <span m='2593910'>to
  k.</span> <span m='2597340'>Now,</span> <span m='2598800'>if</span> <span
  m='2598930'>that</span> <span m='2599040'>was</span> <span
  m='2599170'>confusing,</span> <span m='2599880'>raise</span> <span
  m='2600130'>your</span> <span m='2600240'>hand,</span> <span
  m='2600920'>but</span> <span m='2601290'>it's</span> <span
  m='2602520'>essentially</span> <span m='2602970'>identical</span> <span
  m='2604040'>given</span> <span m='2604260'>the</span> <span
  m='2604370'>substitution</span> <span m='2605450'>and</span> <span
  m='2605570'>sort</span> <span m='2605690'>of</span> <span
  m='2605740'>just</span> <span m='2605900'>applying</span> <span
  m='2606230'>the</span> <span m='2606330'>distributive</span> <span
  m='2606715'>law.</span> </p><p><span m='2608700'>And</span> <span
  m='2608870'>the</span> <span m='2608920'>reason</span> <span
  m='2609160'>I</span> <span m='2609230'>did</span> <span
  m='2609440'>this,</span> <span m='2610040'>is</span> <span
  m='2610150'>because</span> <span m='2610380'>I</span> <span
  m='2610420'>wanted</span> <span m='2610740'>you</span> <span
  m='2610850'>to</span> <span m='2610940'>see</span> <span
  m='2612100'>the</span> <span m='2613850'>arithmetic</span> <span
  m='2614180'>expression</span> <span m='2616220'>that's</span> <span
  m='2616480'>in</span> <span m='2616600'>here.</span> <span
  m='2617380'>Now</span> <span m='2617610'>we</span> <span m='2617770'>do</span>
  <span m='2617910'>know</span> <span m='2618100'>that</span> <span
  m='2618850'>2 raised to k</span> <span m='2620270'>is</span> <span
  m='2621170'>n</span> <span m='2621320'>over</span> <span
  m='2621480'>four,</span> <span m='2621740'>of</span> <span
  m='2621820'>course.</span> <span m='2623080'>But</span> <span
  m='2623310'>if</span> <span m='2623420'>you</span> <span
  m='2623510'>look</span> <span m='2623650'>at</span> <span
  m='2623740'>this</span> <span m='2623910'>expression</span> <span
  m='2625270'>that's</span> <span m='2625500'>inside</span> <span
  m='2625920'>here,</span> <span m='2628100'>what</span> <span
  m='2629110'>is</span> <span m='2629220'>this</span> <span
  m='2629380'>expression?</span> <span m='2630870'>Anyone?</span> <span
  m='2632850'>Can</span> <span m='2633000'>you</span> <span
  m='2634210'>bound</span> <span m='2635060'>this</span> <span
  m='2635220'>expression?</span> <span m='2636950'>Someone?</span> <span
  m='2639810'>For</span> <span m='2639950'>the</span> <span
  m='2640040'>cushion.</span> <span m='2644730'>Remember</span> <span
  m='2645020'>your</span> <span m='2645470'>arithmetic</span> <span
  m='2645900'>series</span> <span m='2647540'>from</span> <span
  m='2648790'>wherever</span> <span m='2649110'>it</span> <span
  m='2649170'>was.</span> </p><p><span m='2651026'>AUDIENCE:</span> <span
  m='2651468'>[INAUDIBLE].</span> </p><p><span m='2651910'>PROFESSOR:
  Yeah.</span> <span m='2653810'>You</span> <span m='2653950'>know</span> <span
  m='2654070'>better than</span> <span m='2654210'>I.</span> <span
  m='2655250'>I</span> <span m='2655330'>guess</span> <span
  m='2655490'>you</span> <span m='2655610'>took</span> <span
  m='2655910'>those</span> <span m='2656190'>courses</span> <span
  m='2657670'>more</span> <span m='2657980'>recently,</span> <span
  m='2658880'>but</span> <span m='2660200'>what</span> <span
  m='2660470'>happens</span> <span m='2660860'>with</span> <span
  m='2661250'>that?</span> <span m='2662300'>Those</span> <span
  m='2662460'>of</span> <span m='2662720'>you who have</span> <span
  m='2662870'>calculators,</span> <span m='2663620'>I</span> <span
  m='2663660'>mean,</span> <span m='2663850'>you</span> <span
  m='2663950'>could</span> <span m='2664130'>plug</span> <span
  m='2664380'>that</span> <span m='2664530'>in,</span> <span
  m='2664930'>and</span> <span m='2667774'>answer that.</span> <span
  m='2669200'>No</span> <span m='2669330'>one?</span> <span m='2670133'>Go
  ahead.</span> </p><p><span m='2670626'>AUDIENCE:</span> <span
  m='2671119'>[INAUDIBLE].</span> <span m='2673091'>You</span> <span
  m='2673584'>know that</span> <span m='2674077'>it's going to merge</span>
  <span m='2674570'>to two.</span> </p><p><span m='2675560'>PROFESSOR:
  That's</span> <span m='2675740'>exactly</span> <span m='2676120'>what</span>
  <span m='2676260'>I was</span> <span m='2676610'>looking for.</span> <span
  m='2678310'>Essentially,</span> <span m='2678860'>well,</span> <span
  m='2679000'>it's</span> <span m='2679370'>not</span> <span
  m='2679530'>quite</span> <span m='2679790'>two,</span> <span
  m='2679960'>because</span> <span m='2680200'>you</span> <span
  m='2680280'>have</span> <span m='2680410'>a</span> <span m='2680770'>1</span>
  <span m='2681060'>here,</span> <span m='2681350'>and</span> <span
  m='2681420'>you</span> <span m='2681460'>have</span> <span
  m='2681590'>a</span> <span m='2681650'>1</span> <span m='2681880'>here,</span>
  <span m='2682470'>but</span> <span m='2682570'>you're</span> <span
  m='2682660'>exactly</span> <span m='2683020'>right.</span> <span
  m='2683230'>I</span> <span m='2683250'>mean,</span> <span
  m='2683620'>two</span> <span m='2683830'>is</span> <span
  m='2684110'>good.</span> <span m='2684470'>It's</span> <span
  m='2684840'>asymptotic,</span> <span m='2685410'>I mean,</span> <span
  m='2685660'>come</span> <span m='2685790'>on.</span> <span
  m='2686280'>I'm</span> <span m='2686960'>not</span> <span
  m='2687060'>going</span> <span m='2687140'>to</span> <span
  m='2687190'>complain</span> <span m='2687470'>about</span> <span
  m='2687690'>two</span> <span m='2687860'>versus</span> <span
  m='2688220'>three,</span> <span m='2688530'>right?</span> <span
  m='2689480'>So</span> <span m='2689670'>the</span> <span
  m='2689760'>point</span> <span m='2690080'>is</span> <span
  m='2690395'>it's</span> <span m='2690710'>bounded</span> <span
  m='2691170'>by</span> <span m='2691310'>a</span> <span
  m='2691380'>constant.</span> <span m='2692700'>It's</span> <span
  m='2692960'>bounded</span> <span m='2693490'>by</span> <span
  m='2693700'>a</span> <span m='2693780'>constant.</span> <span
  m='2695170'>This</span> <span m='2695290'>is</span> <span m='2695350'>a</span>
  <span m='2695420'>convergent</span> <span m='2696060'>series</span> <span
  m='2696950'>and</span> <span m='2697110'>it's</span> <span
  m='2697240'>bounded</span> <span m='2697660'>by</span> <span
  m='2697830'>a</span> <span m='2697900'>constant.</span> <span
  m='2699180'>And</span> <span m='2699260'>we</span> <span
  m='2699340'>can</span> <span m='2699450'>argue</span> <span
  m='2699730'>about</span> <span m='2699890'>what</span> <span
  m='2700050'>the</span> <span m='2700170'>constant</span> <span
  m='2700630'>is.</span> <span m='2701740'>It's</span> <span
  m='2702620'>less</span> <span m='2702820'>than</span> <span
  m='2702950'>three.</span> <span m='2704600'>And</span> <span
  m='2704930'>it</span> <span m='2705010'>doesn't</span> <span
  m='2705070'>matter</span> <span m='2705500'>of</span> <span
  m='2705590'>k</span> <span m='2705820'>goes</span> <span m='2706020'>to</span>
  <span m='2706090'>infinity.</span> <span m='2707120'>And</span> <span
  m='2707230'>you</span> <span m='2707330'>want</span> <span m='2707690'>k
  to</span> <span m='2707750'>go</span> <span m='2707870'>to</span> <span
  m='2707940'>infinity,</span> <span m='2708380'>but</span> <span
  m='2708500'>it</span> <span m='2708560'>doesn't</span> <span
  m='2708760'>matter</span> <span m='2709070'>if k is</span> <span
  m='2709300'>small</span> <span m='2709880'>or</span> <span
  m='2710260'>k</span> <span m='2710480'>is</span> <span
  m='2710690'>large,</span> <span m='2711440'>this</span> <span
  m='2711590'>is</span> <span m='2711730'>bounded</span> <span
  m='2712170'>by</span> <span m='2712350'>a</span> <span
  m='2712410'>constant.</span> <span m='2716930'>And</span> <span
  m='2717170'>that's</span> <span m='2717210'>the</span> <span
  m='2717500'>key</span> <span m='2720700'>observation.</span> </p><p><span
  m='2722030'>What do we</span> <span m='2722130'>have</span> <span
  m='2722290'>left?</span> <span m='2723510'>What do</span> <span
  m='2723640'>we</span> <span m='2723720'>have</span> <span
  m='2723870'>left?</span> <span m='2724250'>We</span> <span
  m='2724350'>have</span> <span m='2724450'>a</span> <span
  m='2724550'>constant</span> <span m='2724930'>there.</span> <span
  m='2726430'>We</span> <span m='2726530'>have</span> <span m='2726650'>a</span>
  <span m='2726710'>c, which</span> <span m='2727170'>is</span> <span
  m='2727270'>a</span> <span m='2727340'>constant,</span> <span
  m='2728300'>and</span> <span m='2728420'>we</span> <span
  m='2728490'>have</span> <span m='2728630'>a 2</span> <span
  m='2728800'>raised</span> <span m='2729020'>to</span> <span
  m='2729140'>k,</span> <span m='2729510'>which</span> <span
  m='2729660'>is</span> <span m='2729780'>really</span> <span
  m='2729980'>n.</span> <span m='2732270'>So</span> <span m='2732390'>there
  you</span> <span m='2732600'>go.</span> <span m='2733560'>There</span> <span
  m='2733750'>you</span> <span m='2733850'>have your</span> <span
  m='2734040'>theta</span> <span m='2734260'>n</span> <span
  m='2734620'>complexity.</span> <span m='2735810'>Now</span> <span
  m='2735980'>I</span> <span m='2736050'>can</span> <span m='2736180'>say</span>
  <span m='2736370'>theta</span> <span m='2736610'>n,</span> <span
  m='2737330'>because</span> <span m='2737510'>I</span> <span m='2737570'>know
  it's</span> <span m='2737780'>theta</span> <span m='2738070'>n.</span> <span
  m='2739160'>But</span> <span m='2739390'>big</span> <span m='2739720'>O</span>
  <span m='2739900'>of</span> <span m='2740020'>n,</span> <span
  m='2740290'>theta</span> <span m='2740590'>n,</span> <span
  m='2741310'>that's</span> <span m='2741470'>what</span> <span
  m='2741590'>it</span> <span m='2741700'>is.</span> </p><p><span
  m='2743340'>So</span> <span m='2743450'>that's</span> <span
  m='2743580'>what</span> <span m='2744060'>I'd</span> <span
  m='2744410'>say</span> <span m='2744540'>is</span> <span
  m='2744670'>subtle</span> <span m='2745100'>analysis.</span> <span
  m='2746310'>Clearly</span> <span m='2746510'>a</span> <span
  m='2746550'>little</span> <span m='2746790'>more</span> <span
  m='2748080'>complicated</span> <span m='2748650'>than</span> <span
  m='2748770'>anything</span> <span m='2749050'>we've</span> <span
  m='2749220'>done</span> <span m='2749420'>so</span> <span
  m='2749610'>far,</span> <span m='2750410'>and</span> <span
  m='2750540'>let</span> <span m='2750610'>me</span> <span
  m='2750710'>see</span> <span m='2750890'>if</span> <span
  m='2751010'>there</span> <span m='2751360'>are</span> <span
  m='2751400'>questions.</span> <span m='2752370'>How</span> <span
  m='2752500'>many</span> <span m='2752650'>people</span> <span
  m='2752910'>got</span> <span m='2753210'>this?</span> <span
  m='2755030'>I</span> <span m='2755160'>did</span> <span
  m='2755330'>too.</span> <span m='2757690'>Someone</span> <span
  m='2758000'>who</span> <span m='2758090'>didn't</span> <span
  m='2758280'>get</span> <span m='2758440'>it,</span> <span
  m='2759250'>ask</span> <span m='2759510'>a</span> <span
  m='2759580'>question.</span> <span m='2761100'>What</span> <span
  m='2761250'>didn't</span> <span m='2761400'>you</span> <span
  m='2761470'>get?</span> <span m='2762520'>What</span> <span
  m='2762640'>step</span> <span m='2762840'>would</span> <span
  m='2762970'>you</span> <span m='2763130'>like</span> <span
  m='2763320'>me</span> <span m='2763430'>to</span> <span
  m='2763520'>repeat</span> <span m='2763880'>here?</span> <span
  m='2765890'>Any</span> <span m='2766070'>particular</span> <span
  m='2766440'>step?</span> </p><p><span m='2767770'>AUDIENCE:</span> <span
  m='2768250'>[INAUDIBLE].</span> </p><p><span m='2772670'>PROFESSOR:
  This</span> <span m='2772870'>thing</span> <span m='2772990'>here?</span>
  <span m='2773640'>Right</span> <span m='2773780'>here?</span> <span
  m='2774610'>OK,</span> <span m='2774700'>so</span> <span
  m='2774910'>you're</span> <span m='2775302'>not</span> <span
  m='2775694'>convinced</span> <span m='2776480'>that</span> <span
  m='2776760'>this</span> <span m='2776940'>expression</span> <span
  m='2777480'>got</span> <span m='2777710'>translated</span> <span
  m='2778300'>to</span> <span m='2778380'>this</span> <span
  m='2778600'>expression.</span> <span m='2779830'>So</span> <span
  m='2779930'>let</span> <span m='2780290'>me</span> <span
  m='2780430'>try</span> <span m='2780570'>and</span> <span
  m='2780660'>convince</span> <span m='2780970'>you</span> <span
  m='2781120'>of</span> <span m='2781210'>that,</span> <span
  m='2781570'>alright?</span> <span m='2782180'>So</span> <span
  m='2782340'>let's</span> <span m='2782520'>take</span> <span
  m='2782670'>a</span> <span m='2782710'>look</span> <span m='2782860'>at</span>
  <span m='2782950'>each</span> <span m='2783150'>of</span> <span
  m='2783230'>the</span> <span m='2783330'>terms.</span> <span
  m='2785580'>n</span> <span m='2785810'>by</span> <span m='2786020'>4</span>
  <span m='2786700'>is</span> <span m='2786930'>2</span> <span
  m='2787070'>raised</span> <span m='2787320'>to</span> <span
  m='2787400'>k.</span> <span m='2787680'>I'm</span> <span
  m='2787800'>just</span> <span m='2787940'>looking</span> <span
  m='2788160'>at</span> <span m='2788260'>this</span> <span
  m='2788480'>term</span> <span m='2788830'>and</span> <span
  m='2789000'>this</span> <span m='2789170'>term.</span> <span
  m='2790470'>n</span> <span m='2790690'>by</span> <span m='2790880'>4</span>
  <span m='2791660'>is</span> <span m='2791880'>2</span> <span
  m='2792000'>raised</span> <span m='2792240'>to</span> <span
  m='2792410'>k.</span> <span m='2793510'>c</span> <span m='2794220'>is</span>
  <span m='2794380'>c.</span> <span m='2795950'>And</span> <span
  m='2796080'>I</span> <span m='2796130'>just</span> <span
  m='2796310'>wrote</span> <span m='2796520'>1</span> <span
  m='2797350'>as</span> <span m='2799370'>1</span> <span
  m='2799820'>divided</span> <span m='2800210'>by</span> <span
  m='2801350'>2</span> <span m='2801510'>raised</span> <span
  m='2801830'>to</span> <span m='2801910'>0,</span> <span
  m='2802480'>which</span> <span m='2802720'>is</span> <span
  m='2802840'>1.</span> </p><p><span m='2804330'>And</span> <span
  m='2804520'>the</span> <span m='2804600'>reason</span> <span
  m='2804850'>I</span> <span m='2804900'>want</span> <span
  m='2805110'>you</span> <span m='2805220'>to</span> <span m='2805300'>do</span>
  <span m='2805570'>this,</span> <span m='2805690'>is</span> <span
  m='2805780'>because</span> <span m='2806070'>I</span> <span
  m='2806200'>want</span> <span m='2806360'>to</span> <span
  m='2806430'>show</span> <span m='2806590'>you</span> <span
  m='2806720'>an</span> <span m='2806780'>expression</span> <span
  m='2807300'>where</span> <span m='2807980'>in</span> <span
  m='2808090'>some</span> <span m='2808290'>sense,</span> <span
  m='2809060'>this</span> <span m='2809620'>is</span> <span
  m='2809850'>the</span> <span m='2809960'>term</span> <span
  m='2810770'>that</span> <span m='2810960'>is</span> <span
  m='2811070'>the</span> <span m='2811170'>summation</span> <span
  m='2811700'>for your</span> <span m='2811960'>expression.</span> <span
  m='2812800'>If</span> <span m='2812910'>we</span> <span
  m='2812990'>just</span> <span m='2813190'>replace</span> <span
  m='2813600'>this,</span> <span m='2814250'>you</span> <span m='2814670'>can
  write</span> <span m='2814910'>this</span> <span m='2815100'>out</span> <span
  m='2815320'>as</span> <span m='2815660'>i</span> <span
  m='2816020'>equals</span> <span m='2818030'>0</span> <span
  m='2818440'>through</span> <span m='2818850'>k,</span> <span
  m='2820800'>I</span> <span m='2821070'>plus</span> <span m='2821400'>1</span>
  <span m='2822220'>divided</span> <span m='2822600'>by</span> <span
  m='2822830'>2</span> <span m='2823080'>raised</span> <span
  m='2823360'>to</span> <span m='2823470'>i.</span> <span
  m='2825440'>That</span> <span m='2825710'>is</span> <span
  m='2825960'>the</span> <span m='2826360'>symbolic</span> <span
  m='2826920'>form</span> <span m='2827550'>of</span> <span
  m='2827860'>this</span> <span m='2828220'>expression,</span> <span
  m='2829060'>which</span> <span m='2829260'>came</span> <span
  m='2829470'>from</span> <span m='2829630'>here.</span> </p><p><span
  m='2830750'>And</span> <span m='2831680'>then</span> <span
  m='2831860'>the</span> <span m='2831920'>argument</span> <span
  m='2832300'>was</span> <span m='2832450'>made</span> <span
  m='2832790'>that</span> <span m='2832970'>this</span> <span
  m='2833250'>is</span> <span m='2833460'>a</span> <span
  m='2833800'>convergent</span> <span m='2834330'>series</span> <span
  m='2835020'>and</span> <span m='2835150'>is</span> <span
  m='2835250'>bounded</span> <span m='2835560'>by a</span> <span
  m='2835710'>constant.</span> <span m='2838490'>That</span> <span
  m='2838550'>make</span> <span m='2838720'>sense?</span> <span
  m='2840110'>Good.</span> <span m='2841740'>So</span> <span
  m='2841860'>that's</span> <span m='2842030'>pretty</span> <span
  m='2842240'>neat,</span> <span m='2842580'>right?</span> <span
  m='2843160'>I</span> <span m='2843400'>mean,</span> <span
  m='2843750'>you</span> <span m='2843900'>have</span> <span
  m='2844080'>the</span> <span m='2844150'>same</span> <span
  m='2844330'>algorithm</span> <span m='2845100'>and,</span> <span
  m='2846000'>whala,</span> <span m='2846520'>it</span> <span
  m='2846690'>suddenly</span> <span m='2846900'>got</span> <span
  m='2847070'>more</span> <span m='2847230'>efficient.</span> <span
  m='2848610'>Doesn't</span> <span m='2848830'>always</span> <span
  m='2849070'>happen,</span> <span m='2849930'>but</span> <span
  m='2850070'>that</span> <span m='2850240'>tells</span> <span
  m='2850480'>you</span> <span m='2850670'>that</span> <span
  m='2850820'>you</span> <span m='2850910'>have</span> <span
  m='2851040'>to</span> <span m='2851120'>have</span> <span
  m='2851300'>some</span> <span m='2851470'>care</span> <span
  m='2852530'>in</span> <span m='2852900'>doing</span> <span
  m='2853160'>your</span> <span m='2853300'>analysis,</span> <span
  m='2854270'>because</span> <span m='2854470'>what</span> <span
  m='2854640'>really</span> <span m='2854810'>happened</span> <span
  m='2855160'>here,</span> <span m='2855790'>was</span> <span
  m='2856010'>you</span> <span m='2856120'>did a</span> <span
  m='2856780'>rudimentary</span> <span m='2857350'>analysis.</span> <span
  m='2857780'>You said,</span> <span m='2858040'>this</span> <span
  m='2858210'>was</span> <span m='2858440'>order</span> <span
  m='2858840'>log</span> <span m='2859140'>n,</span> <span
  m='2859440'>big</span> <span m='2859695'>O</span> <span m='2859950'>log</span>
  <span m='2860420'>n,</span> <span m='2860620'>and</span> <span
  m='2860750'>you</span> <span m='2860850'>said</span> <span
  m='2861040'>this</span> <span m='2861170'>was</span> <span
  m='2861320'>theta</span> <span m='2861540'>n,</span> <span
  m='2862260'>and</span> <span m='2862390'>you</span> <span
  m='2862510'>ended</span> <span m='2862750'>up</span> <span
  m='2862870'>with</span> <span m='2863010'>this.</span> <span
  m='2863640'>But</span> <span m='2863790'>in</span> <span
  m='2863900'>reality,</span> <span m='2864350'>it's</span> <span
  m='2864480'>actually</span> <span m='2864780'>a</span> <span
  m='2864840'>faster</span> <span m='2865130'>algorithm.</span> </p><p><span
  m='2867640'>So</span> <span m='2867850'>that's</span> <span
  m='2868020'>the</span> <span m='2868120'>good</span> <span
  m='2868240'>news.</span> <span m='2869210'>Build-max-heap</span> <span
  m='2869880'>can</span> <span m='2870050'>be</span> <span
  m='2870170'>done</span> <span m='2870970'>in</span> <span
  m='2871550'>order</span> <span m='2871880'>n</span> <span
  m='2872050'>time.</span> <span m='2873300'>Now</span> <span
  m='2873540'>in</span> <span m='2873650'>the</span> <span
  m='2873710'>time</span> <span m='2873920'>that</span> <span
  m='2874030'>I</span> <span m='2874060'>have</span> <span
  m='2874240'>left,</span> <span m='2874560'>it</span> <span
  m='2874660'>turns</span> <span m='2874920'>out,</span> <span
  m='2875740'>we</span> <span m='2875940'>are</span> <span
  m='2876450'>essentially</span> <span m='2878820'>all</span> <span
  m='2879090'>the</span> <span m='2879180'>way</span> <span
  m='2879360'>to</span> <span m='2880040'>heaps</span> <span
  m='2880390'>sort.</span> <span m='2881460'>Because</span> <span
  m='2882070'>all</span> <span m='2882240'>we</span> <span
  m='2882360'>have</span> <span m='2882510'>to</span> <span
  m='2882620'>do</span> <span m='2883080'>is</span> <span
  m='2884570'>use,</span> <span m='2885230'>once</span> <span
  m='2885490'>we</span> <span m='2885590'>have</span> <span
  m='2885890'>build-max-heap,</span> <span m='2886760'>I'll</span> <span
  m='2886850'>just</span> <span m='2887020'>write</span> <span
  m='2887230'>out</span> <span m='2888260'>the</span> <span
  m='2888480'>code</span> <span m='2889820'>for</span> <span
  m='2890270'>heap</span> <span m='2890500'>sort,</span> <span
  m='2890840'>and</span> <span m='2890920'>you</span> <span
  m='2891000'>can</span> <span m='2891120'>take</span> <span
  m='2891250'>a</span> <span m='2891300'>look</span> <span m='2891460'>at</span>
  <span m='2892180'>examples</span> <span m='2892860'>in</span> <span
  m='2892960'>the</span> <span m='2893030'>notes.</span> <span
  m='2896120'>The</span> <span m='2896240'>pseudocode,</span> <span
  m='2896340'>I</span> <span m='2896480'>should say,</span> <span
  m='2896980'>for</span> <span m='2897110'>heap</span> <span
  m='2897300'>sort.</span> <span m='2898180'>And</span> <span
  m='2898410'>it</span> <span m='2898490'>looks</span> <span
  m='2898670'>like</span> <span m='2898830'>this.</span> </p><p><span
  m='2899950'>The</span> <span m='2900060'>first</span> <span
  m='2900310'>step</span> <span m='2900580'>that</span> <span
  m='2900740'>you</span> <span m='2900860'>do</span> <span m='2902030'>is</span>
  <span m='2902540'>you</span> <span m='2902650'>build</span> <span
  m='2902980'>max-heap</span> <span m='2905040'>from</span> <span
  m='2905450'>the</span> <span m='2906410'>unordered</span> <span
  m='2906950'>array.</span> <span m='2912000'>Then</span> <span
  m='2912920'>you</span> <span m='2913050'>find</span> <span
  m='2913640'>the</span> <span m='2913740'>maximum</span> <span
  m='2914110'>element</span> <span m='2916710'>A[1].</span> <span
  m='2917990'>All</span> <span m='2918160'>of</span> <span
  m='2918250'>this</span> <span m='2918430'>I've</span> <span
  m='2918550'>said</span> <span m='2918800'>multiple</span> <span
  m='2919120'>times.</span> <span m='2921430'>Now</span> <span
  m='2921660'>the</span> <span m='2921760'>key</span> <span
  m='2922010'>step</span> <span m='2923100'>is,</span> <span m='2923510'>you
  could</span> <span m='2923690'>do</span> <span m='2923810'>extract</span>
  <span m='2924330'>max,</span> <span m='2925210'>but</span> <span
  m='2925940'>one</span> <span m='2927120'>nice</span> <span
  m='2927410'>way</span> <span m='2927630'>of</span> <span
  m='2928200'>handling</span> <span m='2928560'>this,</span> <span
  m='2929430'>is</span> <span m='2929600'>to</span> <span
  m='2929880'>swap</span> <span m='2930340'>the</span> <span
  m='2930440'>elements</span> <span m='2931890'>A[n]</span> <span
  m='2933620'>with</span> <span m='2933910'>A[1].</span> <span
  m='2936710'>Let</span> <span m='2936850'>me</span> <span
  m='2936960'>write</span> <span m='2937120'>this</span> <span
  m='2937270'>out</span> <span m='2937440'>and</span> <span
  m='2937600'>explain</span> <span m='2937930'>exactly</span> <span
  m='2938330'>what</span> <span m='2939450'>that</span> <span
  m='2939820'>means.</span> </p><p><span m='2940740'>Now</span> <span
  m='2941040'>the</span> <span m='2941130'>maximum</span> <span
  m='2941680'>element</span> <span m='2945710'>is</span> <span
  m='2946130'>at</span> <span m='2946290'>the</span> <span
  m='2946380'>end</span> <span m='2946670'>of</span> <span
  m='2946750'>the</span> <span m='2946940'>array.</span> <span
  m='2951930'>When</span> <span m='2952030'>you</span> <span
  m='2952120'>do</span> <span m='2952280'>the</span> <span
  m='2952450'>swap.</span> <span m='2953120'>That's</span> <span
  m='2953290'>the</span> <span m='2953380'>one</span> <span
  m='2953580'>step</span> <span m='2953940'>that</span> <span
  m='2954420'>I</span> <span m='2954710'>will have</span> <span
  m='2955110'>to</span> <span m='2955770'>spend</span> <span
  m='2956050'>another</span> <span m='2956290'>minute</span> <span
  m='2956550'>on.</span> <span m='2957720'>Now</span> <span
  m='2957900'>we</span> <span m='2958010'>discard</span> <span
  m='2959900'>node</span> <span m='2960320'>n</span> <span
  m='2962310'>from</span> <span m='2962620'>the</span> <span
  m='2962740'>heap,</span> <span m='2963860'>simply</span> <span
  m='2964340'>by</span> <span m='2965550'>decrementing</span> <span
  m='2967540'>heap</span> <span m='2967780'>size.</span> <span
  m='2970110'>So</span> <span m='2970350'>the</span> <span
  m='2970470'>heap</span> <span m='2970700'>becomes</span> <span
  m='2971530'>n</span> <span m='2971690'>minus</span> <span m='2971970'>1</span>
  <span m='2972230'>in</span> <span m='2972340'>size</span> <span
  m='2974520'>from</span> <span m='2974830'>n</span> <span m='2975290'>in</span>
  <span m='2975410'>the</span> <span m='2975500'>first</span> <span
  m='2975760'>iteration.</span> </p><p><span m='2977640'>Now</span> <span
  m='2977780'>the</span> <span m='2977940'>new</span> <span
  m='2978180'>root</span> <span m='2980160'>after</span> <span
  m='2980400'>the</span> <span m='2980620'>swap</span> <span
  m='2982490'>may</span> <span m='2982710'>violate</span> <span
  m='2985760'>max-heap,</span> <span m='2987610'>we'll</span> <span
  m='2987760'>call</span> <span m='2987910'>it</span> <span
  m='2987980'>the</span> <span m='2989420'>max-heap</span> <span
  m='2989830'>property,</span> <span m='2991640'>but</span> <span
  m='2992750'>the</span> <span m='2992830'>children</span> <span
  m='2994990'>are</span> <span m='2995160'>max-heaps.</span> <span
  m='2998760'>So</span> <span m='2998850'>that's</span> <span
  m='2999030'>the</span> <span m='2999120'>one</span> <span
  m='2999330'>node</span> <span m='2999590'>that</span> <span
  m='2999720'>can</span> <span m='2999860'>possibly</span> <span
  m='3000250'>violate</span> <span m='3000620'>it.</span> <span
  m='3001560'>So</span> <span m='3002070'>what</span> <span
  m='3002220'>that</span> <span m='3002350'>means,</span> <span
  m='3002600'>is</span> <span m='3002780'>we</span> <span m='3002890'>can</span>
  <span m='3003020'>run</span> <span m='3003240'>max-heapify</span> <span
  m='3009110'>to</span> <span m='3009210'>fix</span> <span
  m='3009470'>this.</span> <span m='3010860'>And</span> <span
  m='3011310'>that's</span> <span m='3011480'>it</span> <span
  m='3011720'>.</span> <span m='3012180'>Once</span> <span
  m='3012460'>you</span> <span m='3012540'>do</span> <span
  m='3012650'>that,</span> <span m='3014100'>you</span> <span
  m='3014180'>go</span> <span m='3014330'>back</span> <span
  m='3016180'>to</span> <span m='3016260'>that</span> <span
  m='3016480'>step.</span> </p><p><span m='3017530'>So</span> <span
  m='3017800'>what's</span> <span m='3018060'>happened</span> <span
  m='3018260'>here</span> <span m='3018430'>exactly?</span> <span
  m='3019430'>Well</span> <span m='3019640'>this</span> <span
  m='3019820'>part</span> <span m='3020050'>we</span> <span
  m='3020480'>spent</span> <span m='3020650'>a</span> <span
  m='3020690'>bunch</span> <span m='3020880'>of</span> <span
  m='3020940'>time</span> <span m='3021190'>on.</span> <span
  m='3022680'>element</span> <span m='3022990'>is</span> <span
  m='3023080'>the</span> <span m='3023150'>maximum</span> <span
  m='3023590'>element,</span> <span m='3024250'>so</span> <span
  m='3024360'>you</span> <span m='3024560'>grab</span> <span
  m='3024770'>that.</span> <span m='3025580'>And</span> <span
  m='3025990'>you</span> <span m='3026110'>know</span> <span
  m='3026230'>that's</span> <span m='3026530'>a</span> <span
  m='3026570'>maximum</span> <span m='3026970'>element.</span> <span
  m='3029780'>One</span> <span m='3030000'>way</span> <span
  m='3030150'>of</span> <span m='3030220'>doing</span> <span
  m='3030450'>it</span> <span m='3030540'>is</span> <span m='3030660'>to</span>
  <span m='3030830'>use</span> <span m='3031130'>extract</span> <span
  m='3031630'>max,</span> <span m='3032320'>but</span> <span
  m='3032430'>rather</span> <span m='3032660'>than</span> <span
  m='3032800'>doing</span> <span m='3033000'>extract</span> <span
  m='3033390'>max,</span> <span m='3033820'>which I</span> <span
  m='3033870'>haven't</span> <span m='3034070'>explained</span> <span
  m='3034220'>to</span> <span m='3034480'>you,</span> <span
  m='3035450'>you</span> <span m='3035600'>could</span> <span
  m='3035700'>imagine</span> <span m='3036080'>that</span> <span
  m='3036290'>you</span> <span m='3036530'>go</span> <span
  m='3037030'>off</span> <span m='3037410'>and</span> <span
  m='3037510'>you</span> <span m='3037620'>swap</span> <span
  m='3038790'>the</span> <span m='3039600'>top</span> <span
  m='3039880'>element</span> <span m='3040840'>with</span> <span
  m='3041060'>the</span> <span m='3041540'>bottom</span> <span
  m='3041860'>element,</span> <span m='3042720'>and</span> <span
  m='3043970'>then</span> <span m='3044200'>you</span> <span
  m='3044320'>discard</span> <span m='3044670'>it.</span> </p><p><span
  m='3045020'>So</span> <span m='3045250'>here's</span> <span
  m='3045520'>a</span> <span m='3045800'>trivial</span> <span
  m='3046170'>example,</span> <span m='3047330'>where</span> <span
  m='3047630'>let's</span> <span m='3047810'>say</span> <span
  m='3047990'>I</span> <span m='3048050'>had</span> <span m='3051110'>4,</span>
  <span m='3053650'>2,</span> <span m='3054560'>and</span> <span
  m='3054790'>1,</span> <span m='3055760'>which</span> <span
  m='3055900'>is</span> <span m='3056000'>a</span> <span
  m='3056050'>max-heap.</span> <span m='3056920'>What</span> <span
  m='3057130'>would happen</span> <span m='3057450'>is</span> <span
  m='3057560'>you'd</span> <span m='3057720'>say,</span> <span
  m='3058290'>I'm</span> <span m='3058440'>going</span> <span
  m='3058580'>to</span> <span m='3058650'>take</span> <span m='3058930'>4</span>
  <span m='3059830'>and</span> <span m='3060080'>I'm</span> <span
  m='3060200'>going</span> <span m='3060640'>swap</span> <span
  m='3061020'>it</span> <span m='3061140'>with</span> <span
  m='3061310'>1.</span> <span m='3062480'>And</span> <span m='3062680'>so</span>
  <span m='3062860'>you</span> <span m='3063000'>have,</span> <span
  m='3063780'>1,</span> <span m='3065250'>2,</span> <span m='3066300'>and</span>
  <span m='3066510'>4.</span> <span m='3067540'>Now</span> <span
  m='3068430'>four</span> <span m='3069830'>used</span> <span
  m='3070110'>to</span> <span m='3070170'>be</span> <span
  m='3070410'>A[1],</span> <span m='3070720'>and</span> <span
  m='3070790'>that's</span> <span m='3070950'>the</span> <span
  m='3071030'>maximum</span> <span m='3071460'>element,</span> <span
  m='3072110'>and</span> <span m='3072210'>I'm</span> <span
  m='3072280'>just</span> <span m='3072420'>going</span> <span
  m='3072540'>to</span> <span m='3072600'>delete</span> <span
  m='3072930'>it</span> <span m='3073150'>from</span> <span
  m='3073400'>the</span> <span m='3073520'>heap,</span> <span
  m='3074240'>which</span> <span m='3074410'>means</span> <span
  m='3075480'>I'm</span> <span m='3075620'>going</span> <span
  m='3075740'>to</span> <span m='3075780'>end</span> <span m='3076000'>up</span>
  <span m='3076150'>with</span> <span m='3076250'>a</span> <span
  m='3076340'>heap</span> <span m='3076600'>that</span> <span
  m='3076740'>looks</span> <span m='3076990'>like--</span> <span
  m='3077730'>a</span> <span m='3077830'>heap,</span> <span
  m='3078120'>not</span> <span m='3078270'>a</span> <span
  m='3078370'>max-heap--</span> <span m='3078770'>that</span> <span
  m='3078920'>looks</span> <span m='3079110'>like</span> <span
  m='3079280'>this.</span> <span m='3079970'>And</span> <span
  m='3080300'>I</span> <span m='3080360'>write down</span> <span
  m='3080690'>4</span> <span m='3080950'>here.</span> <span m='3081570'>4</span>
  <span m='3081820'>is the</span> <span m='3081970'>first</span> <span
  m='3082290'>element</span> <span m='3082620'>in</span> <span
  m='3082700'>my</span> <span m='3082830'>sorted</span> <span
  m='3083200'>array.</span> </p><p><span m='3084080'>Now</span> <span
  m='3084180'>I</span> <span m='3084270'>look</span> <span m='3084440'>at</span>
  <span m='3084530'>1</span> <span m='3084880'>and</span> <span
  m='3085130'>2,</span> <span m='3086320'>and</span> <span m='3086770'>1</span>
  <span m='3087000'>and</span> <span m='3087140'>2</span> <span
  m='3088030'>there's</span> <span m='3088240'>obviously</span> <span
  m='3088550'>not</span> <span m='3088730'>a</span> <span
  m='3088770'>max-heap.</span> <span m='3089690'>But</span> <span
  m='3089840'>I</span> <span m='3089900'>can</span> <span m='3090030'>run</span>
  <span m='3090240'>max--</span> <span m='3090530'>I</span> <span
  m='3090640'>know</span> <span m='3090800'>the</span> <span
  m='3091010'>child</span> <span m='3091410'>is</span> <span
  m='3091500'>a</span> <span m='3091560'>max-heap,</span> <span
  m='3092300'>so</span> <span m='3092390'>I</span> <span m='3092430'>can</span>
  <span m='3092540'>run</span> <span m='3092730'>max-heapify</span> <span
  m='3093100'>on</span> <span m='3093220'>this.</span> <span
  m='3094120'>And</span> <span m='3094270'>what</span> <span
  m='3094450'>this</span> <span m='3094640'>turns</span> <span
  m='3094890'>into</span> <span m='3095240'>is</span> <span m='3095860'>2</span>
  <span m='3096230'>and</span> <span m='3096420'>1.</span> <span
  m='3098140'>And</span> <span m='3098290'>at</span> <span
  m='3098360'>this</span> <span m='3098520'>point,</span> <span
  m='3098990'>I</span> <span m='3099130'>know</span> <span m='3099340'>that
  the</span> <span m='3099460'>max</span> <span m='3100050'>is</span> <span
  m='3100310'>the</span> <span m='3100410'>root,</span> <span
  m='3101240'>because</span> <span m='3101530'>I've</span> <span
  m='3101610'>run</span> <span m='3101780'>max-heapify</span> <span
  m='3102530'>and I</span> <span m='3102590'>take</span> <span
  m='3102840'>2</span> <span m='3103060'>out,</span> <span
  m='3104040'>and</span> <span m='3105820'>after</span> <span
  m='3105890'>this,</span> <span m='3106070'>it</span> <span
  m='3106160'>becomes</span> <span m='3106420'>trivial.</span> <span
  m='3107230'>But</span> <span m='3107350'>that's</span> <span
  m='3107550'>the</span> <span m='3107600'>general</span> <span
  m='3109170'>algorithm.</span> </p><p><span m='3110170'>So</span> <span
  m='3110390'>this</span> <span m='3110530'>whole</span> <span
  m='3110760'>thing</span> <span m='3111020'>takes</span> <span
  m='3111290'>order</span> <span m='3111640'>n</span> <span
  m='3111810'>log</span> <span m='3112090'>n</span> <span
  m='3112240'>time,</span> <span m='3113150'>because</span> <span
  m='3113540'>even</span> <span m='3113790'>though</span> <span
  m='3114030'>build-max-heap</span> <span m='3114920'>is</span> <span
  m='3116560'>order</span> <span m='3116830'>n</span> <span
  m='3118540'>and</span> <span m='3119160'>max</span> <span
  m='3119560'>element</span> <span m='3119910'>is</span> <span
  m='3120040'>constant</span> <span m='3120530'>time,</span> <span
  m='3121880'>swapping</span> <span m='3122310'>the</span> <span
  m='3122380'>elements</span> <span m='3122790'>is</span> <span
  m='3123500'>constant</span> <span m='3123960'>time.</span> <span
  m='3125330'>But</span> <span m='3126710'>running</span> <span
  m='3127050'>max-heapify</span> <span m='3127830'>is</span> <span
  m='3128030'>order</span> <span m='3129010'>log</span> <span
  m='3129300'>n</span> <span m='3129480'>time,</span> <span
  m='3130730'>and</span> <span m='3131000'>you</span> <span
  m='3131090'>have</span> <span m='3131300'>n</span> <span
  m='3131530'>steps.</span> <span m='3133360'>So</span> <span
  m='3135690'>you</span> <span m='3135810'>have</span> <span
  m='3136010'>an</span> <span m='3136100'>order</span> <span
  m='3136360'>n</span> <span m='3136560'>log</span> <span m='3136810'>n</span>
  <span m='3137420'>algorithm.</span> <span m='3138400'>But</span> <span
  m='3138740'>the</span> <span m='3138840'>first</span> <span
  m='3139050'>step</span> <span m='3139290'>was</span> <span
  m='3139580'>order</span> <span m='3139870'>n,</span> <span
  m='3140970'>which</span> <span m='3141120'>is</span> <span
  m='3141240'>what</span> <span m='3141410'>we</span> <span
  m='3141500'>spent</span> <span m='3141720'>a</span> <span
  m='3141750'>bunch</span> <span m='3141940'>of</span> <span
  m='3141990'>time</span> <span m='3142190'>on.</span> </p><p><span
  m='3142950'>So</span> <span m='3143140'>I'll</span> <span
  m='3143240'>show</span> <span m='3143410'>you</span> <span
  m='3144470'>examples</span> <span m='3144880'>in</span> <span
  m='3144980'>the</span> <span m='3145050'>notes,</span> <span
  m='3145590'>and</span> <span m='3145990'>that</span> <span
  m='3146570'>will</span> <span m='3146840'>get</span> <span
  m='3147150'>covered</span> <span m='3147410'>again</span> <span
  m='3148080'>in</span> <span m='3148210'>section.</span> <span
  m='3148970'>I'll</span> <span m='3149200'>stick</span> <span
  m='3149460'>around</span> <span m='3149660'>for</span> <span
  m='3149750'>questions.</span> <span m='3150690'>See</span> <span
  m='3150830'>you</span> <span m='3150880'>next</span> <span
  m='3151090'>time.</span> </p>
embedded_media:
  - uid: b34f8ca237676c64d4b43490b768539f
    parent_uid: eb2c951fdceb6cd4ebe6516b9c5bf6e0
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: B7hVxCmfPtM
  - uid: 2f116deafad4d095b291b82edbb2dee1
    parent_uid: eb2c951fdceb6cd4ebe6516b9c5bf6e0
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/B7hVxCmfPtM/default.jpg'
  - uid: 5783ebc11c5ba9df511177a97782212a
    parent_uid: eb2c951fdceb6cd4ebe6516b9c5bf6e0
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-4-heaps-and-heap-sort/id585700718?i=126127727
  - uid: 409ae46052436c2783730c6e05811a39
    parent_uid: eb2c951fdceb6cd4ebe6516b9c5bf6e0
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec04_300k.mp4'
  - uid: c8779ce9ea64fb066a147bca3ff0bc07
    parent_uid: eb2c951fdceb6cd4ebe6516b9c5bf6e0
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: B7hVxCmfPtM
  - uid: e64d248bcd96fe0da5349a9017243e25
    parent_uid: eb2c951fdceb6cd4ebe6516b9c5bf6e0
    id: B7hVxCmfPtM.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-4-heaps-and-heap-sort/B7hVxCmfPtM.srt
  - uid: ebf9f8cb1129d112a39066990693ca6f
    parent_uid: eb2c951fdceb6cd4ebe6516b9c5bf6e0
    id: B7hVxCmfPtM.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-4-heaps-and-heap-sort/B7hVxCmfPtM.pdf
  - uid: 0ba4adee3550e57cfeed411acba323c4
    parent_uid: eb2c951fdceb6cd4ebe6516b9c5bf6e0
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 5ccc14327adba02c76d875f403bf0a83
    parent_uid: eb2c951fdceb6cd4ebe6516b9c5bf6e0
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
