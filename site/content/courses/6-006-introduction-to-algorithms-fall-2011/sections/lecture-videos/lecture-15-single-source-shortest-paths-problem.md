---
title: 'Lecture 15: Single-Source Shortest Paths Problem'
uid: a701d9c2591ce2a00362e8f085c9098d
parent_uid: 6af424cb24d70b69cb7c86df8a25a92a
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-15-single-source-shortest-paths-problem
short_url: lecture-15-single-source-shortest-paths-problem
inline_embed_id: '60559131lecture15:single-sourceshortestpathsproblem52681770'
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture introduces weighted graphs and
  considers general approaches to the shortest paths problem. The lecture
  discusses single source shortest paths, negative-weight edges, and optimal
  substructure.</p> <p><strong>Instructor:</strong> Srini Devadas</p>
related_resources_text: ''
transcript: >-
  <p><span m='50'>The</span> <span m='180'>following</span> <span
  m='620'>content</span> <span m='1210'>is</span> <span m='1330'>provided</span>
  <span m='1770'>under</span> <span m='2050'>a</span> <span
  m='2090'>Creative</span> <span m='2490'>Commons</span> <span
  m='2900'>license.</span> <span m='4010'>Your</span> <span
  m='4200'>support</span> <span m='4710'>will</span> <span m='4860'>help</span>
  <span m='5100'>MIT</span> <span m='5560'>OpenCourseWare</span> <span
  m='6350'>continue</span> <span m='6860'>to</span> <span m='6940'>offer</span>
  <span m='7350'>high</span> <span m='7590'>quality</span> <span
  m='8109'>educational</span> <span m='8740'>resources</span> <span
  m='9360'>for</span> <span m='9510'>free.</span> <span m='10720'>To</span>
  <span m='10820'>make</span> <span m='10930'>a</span> <span
  m='10970'>donation</span> <span m='11660'>or</span> <span
  m='11930'>view</span> <span m='12360'>additional</span> <span
  m='12790'>materials</span> <span m='13320'>from</span> <span
  m='13480'>hundreds</span> <span m='13910'>of</span> <span m='14020'>MIT</span>
  <span m='14450'>courses,</span> <span m='15560'>visit</span> <span
  m='15780'>MIT</span> <span m='16200'>OpenCourseWare</span> <span
  m='17250'>at</span> <span m='17410'>ocw.mit.edu.</span> </p><p><span
  m='22120'>PROFESSOR: [INAUDIBLE]</span> <span m='25060'>audio.</span> <span
  m='25770'>We're</span> <span m='25930'>going</span> <span m='26060'>to</span>
  <span m='26110'>have</span> <span m='27700'>a</span> <span
  m='27830'>series</span> <span m='28520'>of</span> <span
  m='28620'>lectures</span> <span m='29300'>on</span> <span
  m='30140'>shortest</span> <span m='30660'>paths.</span> <span
  m='32310'>And</span> <span m='33560'>one</span> <span m='33750'>of</span>
  <span m='33790'>the</span> <span m='33860'>big</span> <span
  m='34030'>differences</span> <span m='34560'>between</span> <span
  m='35630'>this</span> <span m='35820'>module</span> <span m='36380'>and</span>
  <span m='36550'>the</span> <span m='36640'>previous</span> <span
  m='36990'>one,</span> <span m='38210'>at</span> <span m='38330'>least</span>
  <span m='38500'>from</span> <span m='38650'>a</span> <span
  m='38720'>mathematical</span> <span m='39260'>standpoint,</span> <span
  m='39940'>is</span> <span m='40150'>that</span> <span m='40840'>we're</span>
  <span m='40940'>going</span> <span m='41060'>to</span> <span
  m='41100'>be</span> <span m='41200'>looking</span> <span m='41460'>at</span>
  <span m='41570'>graphs</span> <span m='42020'>that</span> <span
  m='42160'>have</span> <span m='42620'>weights</span> <span m='43120'>on</span>
  <span m='43260'>their</span> <span m='43420'>edges.</span> </p><p><span
  m='44780'>So</span> <span m='45050'>when</span> <span m='45260'>Eric</span>
  <span m='45340'>talked</span> <span m='45670'>about</span> <span
  m='46400'>depth</span> <span m='46720'>first</span> <span
  m='46910'>search</span> <span m='47340'>and</span> <span
  m='47460'>breadth</span> <span m='47690'>first</span> <span
  m='47950'>search</span> <span m='48270'>in</span> <span m='48340'>the</span>
  <span m='48430'>last</span> <span m='48660'>couple</span> <span
  m='48880'>of</span> <span m='48930'>lectures,</span> <span m='50140'>we</span>
  <span m='50320'>had</span> <span m='50740'>directed</span> <span
  m='51160'>graphs</span> <span m='51590'>and</span> <span
  m='52550'>undirected</span> <span m='53140'>graphs.</span> <span
  m='54160'>But</span> <span m='54380'>we</span> <span m='54490'>didn't</span>
  <span m='54670'>really</span> <span m='54820'>have</span> <span
  m='55030'>attributes</span> <span m='55570'>on</span> <span
  m='55680'>the</span> <span m='55760'>edges.</span> <span m='57270'>In</span>
  <span m='57450'>particular,</span> <span m='59000'>you</span> <span
  m='59300'>have</span> <span m='59550'>a</span> <span m='59600'>much</span>
  <span m='59860'>richer</span> <span m='60340'>class</span> <span
  m='60690'>of</span> <span m='60790'>problems</span> <span m='61430'>and</span>
  <span m='61560'>applications</span> <span m='62850'>if</span> <span
  m='63040'>you</span> <span m='63190'>allow</span> <span m='63910'>for</span>
  <span m='64580'>weights</span> <span m='65790'>on</span> <span
  m='66400'>graph</span> <span m='66700'>edges.</span> </p><p><span
  m='67700'>And</span> <span m='68250'>these</span> <span
  m='68560'>weights</span> <span m='68970'>can</span> <span m='69150'>be</span>
  <span m='71580'>integers.</span> <span m='73020'>They</span> <span
  m='73100'>could</span> <span m='73250'>be</span> <span m='73700'>real</span>
  <span m='74020'>numbers,</span> <span m='74500'>irrationals.</span> <span
  m='75270'>They</span> <span m='75370'>could</span> <span m='75500'>be</span>
  <span m='75580'>negative,</span> <span m='76880'>what</span> <span
  m='77060'>have</span> <span m='77280'>you.</span> <span m='77560'>And</span>
  <span m='78070'>for</span> <span m='79210'>different</span> <span
  m='79930'>classes</span> <span m='80550'>of</span> <span
  m='81220'>graphs</span> <span m='82030'>and</span> <span
  m='82940'>different</span> <span m='83720'>restrictions</span> <span
  m='84410'>on</span> <span m='84640'>weights,</span> <span
  m='85790'>there's</span> <span m='86000'>really</span> <span
  m='86290'>a</span> <span m='86610'>set</span> <span m='87000'>of</span> <span
  m='87650'>shortest</span> <span m='88130'>path</span> <span
  m='88440'>algorithms,</span> <span m='89460'>that</span> <span
  m='89920'>we'll</span> <span m='90060'>look</span> <span m='90310'>at</span>
  <span m='90760'>in</span> <span m='90930'>the</span> <span
  m='91200'>next</span> <span m='91460'>few</span> <span
  m='91620'>lectures,</span> <span m='92860'>which</span> <span
  m='93150'>are</span> <span m='93220'>kind</span> <span m='93430'>of</span>
  <span m='93890'>optimized</span> <span m='95060'>for</span> <span
  m='95440'>a</span> <span m='95500'>particular</span> <span
  m='95880'>application.</span> </p><p><span m='97050'>So</span> <span
  m='98090'>we</span> <span m='98240'>won't</span> <span m='98500'>do</span>
  <span m='99740'>specific</span> <span m='100330'>algorithms</span> <span
  m='100860'>today.</span> <span m='101900'>But</span> <span
  m='102500'>we'll</span> <span m='102710'>set</span> <span m='102900'>up</span>
  <span m='103020'>the</span> <span m='103110'>problem.</span> <span
  m='103770'>We'll</span> <span m='103900'>talk</span> <span
  m='104100'>about</span> <span m='104360'>the</span> <span
  m='104450'>general</span> <span m='104840'>approach</span> <span
  m='106050'>that</span> <span m='106500'>most</span> <span
  m='107210'>shortest</span> <span m='107630'>path</span> <span
  m='107880'>algorithms</span> <span m='108280'>take</span> <span
  m='108970'>to</span> <span m='109170'>solve</span> <span m='109560'>a</span>
  <span m='109660'>particular</span> <span m='110300'>instance</span> <span
  m='110700'>of</span> <span m='110800'>a</span> <span
  m='110870'>problem.</span> <span m='112010'>And</span> <span
  m='112940'>then</span> <span m='113300'>we'll</span> <span
  m='113500'>close</span> <span m='113930'>with</span> <span
  m='116550'>talking</span> <span m='116810'>about</span> <span
  m='117090'>a</span> <span m='117290'>particular</span> <span
  m='117690'>property</span> <span m='118180'>that's</span> <span
  m='118390'>pretty</span> <span m='118560'>important.</span> </p><p><span
  m='119390'>That's</span> <span m='119640'>called</span> <span
  m='119830'>the</span> <span m='119900'>optimum</span> <span
  m='120740'>or</span> <span m='120950'>optimal</span> <span
  m='121330'>substructure</span> <span m='122050'>property.</span> <span
  m='123290'>That</span> <span m='123630'>is</span> <span m='124880'>a</span>
  <span m='124980'>technique</span> <span m='125450'>that</span> <span
  m='125780'>most</span> <span m='126060'>shortest</span> <span
  m='126390'>path</span> <span m='126610'>algorithms,</span> <span
  m='127020'>or</span> <span m='127110'>actually</span> <span
  m='127360'>all</span> <span m='127750'>shortest</span> <span
  m='127920'>path</span> <span m='128139'>algorithms</span> <span
  m='128570'>use</span> <span m='129650'>to</span> <span m='131370'>get</span>
  <span m='132540'>efficient</span> <span m='133830'>complexity.</span> <span
  m='134690'>So</span> <span m='135070'>asymptotic</span> <span
  m='135580'>complexity</span> <span m='137380'>is</span> <span
  m='137580'>important,</span> <span m='138010'>obviously.</span> <span
  m='138890'>And</span> <span m='139580'>we're</span> <span
  m='139670'>always</span> <span m='139940'>looking</span> <span
  m='140230'>for</span> <span m='140750'>the</span> <span m='140910'>best</span>
  <span m='141230'>algorithm</span> <span m='141940'>with</span> <span
  m='142000'>the</span> <span m='142120'>best</span> <span
  m='142580'>asymptotic</span> <span m='143000'>complexity.</span> <span
  m='143930'>And</span> <span m='144110'>optimal</span> <span
  m='144500'>substructure</span> <span m='145570'>is</span> <span
  m='146280'>a</span> <span m='146330'>hammer</span> <span
  m='146710'>that</span> <span m='146870'>we're</span> <span
  m='146980'>going</span> <span m='147110'>to</span> <span m='147150'>use</span>
  <span m='147810'>to</span> <span m='147920'>get</span> <span
  m='148120'>that.</span> </p><p><span m='150990'>So</span> <span
  m='151510'>the</span> <span m='151610'>canonical</span> <span
  m='152990'>motivation,</span> <span m='153580'>of</span> <span
  m='153690'>course,</span> <span m='154960'>for</span> <span
  m='155060'>shortest</span> <span m='155370'>paths</span> <span
  m='155850'>is--</span> <span m='156540'>now,</span> <span m='156710'>if</span>
  <span m='156770'>you</span> <span m='156880'>want</span> <span
  m='157030'>to</span> <span m='157120'>steal,</span> <span m='157800'>or</span>
  <span m='157960'>I</span> <span m='158010'>guess</span> <span
  m='158220'>borrow,</span> <span m='158740'>a</span> <span
  m='158810'>cannon</span> <span m='159270'>from</span> <span
  m='159490'>Caltech</span> <span m='160640'>and</span> <span
  m='160830'>bring</span> <span m='161010'>it</span> <span
  m='161090'>over</span> <span m='161290'>to</span> <span m='161420'>MIT,</span>
  <span m='162950'>then</span> <span m='163760'>you</span> <span
  m='163860'>want</span> <span m='164590'>the</span> <span
  m='164670'>fastest</span> <span m='165350'>way</span> <span
  m='165810'>of</span> <span m='166000'>getting</span> <span
  m='166270'>here</span> <span m='166650'>with</span> <span
  m='169410'>your</span> <span m='169740'>illegal</span> <span
  m='171550'>goods.</span> <span m='172510'>And</span> <span
  m='173630'>you</span> <span m='173790'>want</span> <span m='173900'>to</span>
  <span m='173940'>find</span> <span m='174170'>the</span> <span
  m='174230'>shortest</span> <span m='174590'>way</span> <span
  m='175560'>or</span> <span m='175690'>the</span> <span
  m='175790'>fastest</span> <span m='176230'>way</span> <span
  m='176480'>of</span> <span m='176600'>getting</span> <span
  m='177410'>from</span> <span m='177610'>one</span> <span
  m='177780'>location</span> <span m='178220'>to</span> <span
  m='178300'>another.</span> </p><p><span m='179080'>So</span> <span
  m='179290'>Google</span> <span m='179700'>Maps</span> <span
  m='182060'>go</span> <span m='182420'>from</span> <span
  m='182600'>point</span> <span m='182930'>A</span> <span m='183070'>to</span>
  <span m='183180'>point</span> <span m='183500'>B.</span> <span
  m='184340'>That's</span> <span m='185160'>a</span> <span
  m='185310'>classic</span> <span m='185680'>application</span> <span
  m='186270'>of</span> <span m='186430'>the</span> <span
  m='186780'>shortest</span> <span m='187150'>path</span> <span
  m='187410'>problem.</span> <span m='189210'>In</span> <span
  m='189340'>this</span> <span m='189550'>case,</span> <span
  m='190260'>you</span> <span m='190440'>could</span> <span
  m='190550'>imagine</span> <span m='191010'>that</span> <span
  m='192340'>distance</span> <span m='193000'>would</span> <span
  m='193160'>be</span> <span m='193280'>something</span> <span
  m='193660'>that</span> <span m='193830'>would</span> <span
  m='193900'>be</span> <span m='194090'>a</span> <span m='194660'>very</span>
  <span m='194950'>simple</span> <span m='195380'>metric</span> <span
  m='195860'>that</span> <span m='195980'>you</span> <span
  m='196110'>could</span> <span m='196230'>use</span> <span
  m='197130'>for</span> <span m='197420'>the</span> <span
  m='197540'>weights</span> <span m='197910'>on</span> <span
  m='198020'>the</span> <span m='198100'>edges.</span> </p><p><span
  m='199120'>So</span> <span m='200570'>for</span> <span m='201740'>this</span>
  <span m='201910'>entire</span> <span m='202260'>module,</span> <span
  m='202950'>we're</span> <span m='203140'>going</span> <span
  m='203360'>to</span> <span m='203420'>be</span> <span
  m='203630'>looking</span> <span m='204050'>at</span> <span m='205400'>a</span>
  <span m='205500'>graph</span> <span m='207940'>G</span> <span
  m='209908'>V,</span> <span m='210400'>E,</span> <span m='210892'>W.</span>
  <span m='211390'>And</span> <span m='211500'>you</span> <span
  m='211570'>know</span> <span m='211710'>what V</span> <span
  m='211950'>and</span> <span m='212220'>E</span> <span m='212430'>are.</span>
  <span m='212660'>They're the</span> <span m='213040'>vertices</span> <span
  m='216020'>and</span> <span m='216210'>the</span> <span
  m='216390'>edges.</span> </p><p><span m='218360'>And</span> <span
  m='218610'>W</span> <span m='219050'>is</span> <span m='223710'>a</span> <span
  m='223890'>weight</span> <span m='224020'>function</span> <span
  m='224630'>that</span> <span m='224850'>maps</span> <span
  m='225450'>edges</span> <span m='225860'>to</span> <span
  m='225960'>weights.</span> <span m='227020'>And</span> <span m='227150'>so
  we're</span> <span m='227370'>adding</span> <span m='227660'>that</span> <span
  m='227850'>in</span> <span m='227990'>here.</span> <span m='230510'>And</span>
  <span m='230900'>so</span> <span m='231300'>W</span> <span
  m='231690'>would</span> <span m='231840'>be</span> <span m='232530'>E</span>
  <span m='234120'>to</span> <span m='234370'>R.</span> <span
  m='236190'>So</span> <span m='236330'>the</span> <span m='236430'>set</span>
  <span m='236610'>of</span> <span m='236700'>real</span> <span
  m='236920'>numbers.</span> </p><p><span m='239140'>We're</span> <span
  m='239220'>going</span> <span m='239330'>to</span> <span m='239370'>be</span>
  <span m='239470'>looking</span> <span m='239790'>at</span> <span
  m='240360'>two</span> <span m='240510'>different</span> <span
  m='240780'>algorithms</span> <span m='242990'>in</span> <span
  m='243150'>subsequent</span> <span m='243700'>lectures.</span> <span
  m='244630'>And</span> <span m='245020'>you'll</span> <span
  m='245200'>implement</span> <span m='245590'>one</span> <span
  m='245770'>of</span> <span m='245860'>them</span> <span m='246210'>in</span>
  <span m='246340'>your</span> <span m='246470'>problem</span> <span
  m='246770'>set.</span> <span m='250380'>The</span> <span
  m='250500'>simpler</span> <span m='250900'>algorithm,</span> <span
  m='251420'>which</span> <span m='251510'>we'll</span> <span
  m='251620'>look</span> <span m='251820'>at</span> <span
  m='252010'>first,</span> <span m='255030'>is</span> <span
  m='255590'>called</span> <span m='255930'>Dijkstra,</span> <span
  m='256670'>after</span> <span m='257220'>Edsger</span> <span
  m='257589'>Dijkstra,</span> <span m='258260'>who did</span> <span
  m='258760'>some</span> <span m='258959'>similar</span> <span
  m='259339'>work</span> <span m='259620'>in</span> <span
  m='260420'>concurrent</span> <span m='260910'>programming,</span> <span
  m='261970'>won</span> <span m='262180'>the</span> <span
  m='262280'>Turing</span> <span m='262550'>Award.</span> </p><p><span
  m='263320'>But</span> <span m='263610'>on</span> <span m='263760'>the</span>
  <span m='263860'>side</span> <span m='264460'>invented</span> <span
  m='265060'>this</span> <span m='265330'>cool</span> <span
  m='265590'>algorithm--</span> <span m='266790'>or at least</span> <span
  m='267080'>gets</span> <span m='267270'>credit</span> <span
  m='267570'>for</span> <span m='267750'>it--</span> <span
  m='268570'>called</span> <span m='268850'>Dijkstra's</span> <span
  m='269490'>algorithm</span> <span m='270330'>that</span> <span
  m='271460'>assumes</span> <span m='272800'>non-negative</span> <span
  m='274240'>weight</span> <span m='274600'>edges.</span> <span
  m='276590'>So</span> <span m='276690'>I</span> <span m='276780'>should</span>
  <span m='276940'>really</span> <span m='277100'>say</span> <span
  m='277250'>non-negative.</span> <span m='278030'>So</span> <span
  m='278360'>read</span> <span m='278590'>that</span> <span m='278760'>as</span>
  <span m='278890'>non-negative.</span> <span m='280690'>And</span> <span
  m='281790'>that</span> <span m='282200'>has</span> <span m='283180'>a</span>
  <span m='283260'>complexity</span> <span m='284750'>of</span> <span
  m='286980'>order</span> <span m='287730'>V</span> <span m='288470'>log</span>
  <span m='288990'>V</span> <span m='289610'>plus</span> <span
  m='290080'>E.</span> <span m='291510'>All</span> <span
  m='291580'>right.</span> </p><p><span m='292290'>So</span> <span
  m='294440'>this</span> <span m='294920'>is</span> <span
  m='296190'>practically</span> <span m='296730'>linear</span> <span
  m='297120'>time.</span> <span m='298330'>And</span> <span
  m='298660'>typically,</span> <span m='299090'>you're</span> <span
  m='299220'>going</span> <span m='299510'>to</span> <span m='299850'>be</span>
  <span m='299960'>dominated</span> <span m='300710'>in</span> <span
  m='301050'>many</span> <span m='301360'>cases</span> <span
  m='301910'>by</span> <span m='302320'>E.</span> <span m='305940'>In</span>
  <span m='306090'>general,</span> <span m='307210'>if</span> <span
  m='307480'>you</span> <span m='307580'>talk</span> <span
  m='307800'>about</span> <span m='308010'>a</span> <span
  m='308240'>simple</span> <span m='308680'>graph,</span> <span
  m='309690'>what's</span> <span m='310060'>the</span> <span
  m='310330'>asymptotic</span> <span m='311000'>relationship</span> <span
  m='312300'>between</span> <span m='312740'>E and</span> <span
  m='313190'>V?</span> <span m='319430'>Can you</span> <span
  m='319550'>relate</span> <span m='319990'>E</span> <span m='320210'>to</span>
  <span m='320260'>V?</span> <span m='321040'>Can you give</span> <span
  m='321170'>me</span> <span m='321220'>a</span> <span m='321320'>bound?</span>
  </p><p><span m='322874'>AUDIENCE: V</span> <span m='323336'>squared.</span>
  </p><p><span m='324260'>PROFESSOR: Sorry?</span> <span m='324650'>V</span>
  <span m='324850'>squared,</span> <span m='325270'>thanks.</span> <span
  m='325970'>That's</span> <span m='326150'>good.</span> </p><p><span
  m='327700'>So</span> <span m='327930'>you</span> <span m='328050'>can</span>
  <span m='328160'>think</span> <span m='328310'>of</span> <span
  m='328460'>E</span> <span m='328820'>as</span> <span m='329030'>being</span>
  <span m='329940'>order</span> <span m='330320'>V</span> <span
  m='330510'>square.</span> <span m='333280'>And</span> <span
  m='334520'>you</span> <span m='334690'>can</span> <span
  m='334810'>certainly</span> <span m='335090'>have--</span> <span
  m='335470'>that's</span> <span m='335640'>worth</span> <span
  m='336230'>recursion.</span> <span m='341310'>So</span> <span
  m='341520'>now,</span> <span m='341700'>you</span> <span m='342200'>can</span>
  <span m='342380'>kind of</span> <span m='343190'>imagine</span> <span
  m='343610'>a</span> <span m='343670'>complete</span> <span
  m='344060'>graph.</span> <span m='344540'>And</span> <span m='344640'>a</span>
  <span m='344690'>complete</span> <span m='345050'>graph</span> <span
  m='345830'>is</span> <span m='345980'>something</span> <span
  m='346390'>that</span> <span m='347670'>has</span> <span m='348110'>an</span>
  <span m='348310'>edge</span> <span m='349220'>between</span> <span
  m='350710'>each</span> <span m='351090'>pair</span> <span m='351790'>of</span>
  <span m='351970'>vertices.</span> <span m='352980'>And</span> <span
  m='353550'>that's</span> <span m='353740'>where</span> <span
  m='354010'>you'll</span> <span m='354170'>get</span> <span m='354510'>E</span>
  <span m='354700'>being</span> <span m='355250'>k</span> <span
  m='355480'>w</span> <span m='355610'>squared.</span> </p><p><span
  m='357710'>So</span> <span m='358230'>when</span> <span m='358310'>you</span>
  <span m='358380'>say</span> <span m='358530'>simple</span> <span
  m='358880'>graph,</span> <span m='359230'>you're</span> <span
  m='359370'>saying</span> <span m='359630'>you</span> <span
  m='359720'>have</span> <span m='359870'>at</span> <span m='360100'>most</span>
  <span m='360380'>one</span> <span m='360650'>edge</span> <span
  m='361430'>between</span> <span m='362440'>any</span> <span
  m='362680'>pair</span> <span m='362960'>of</span> <span
  m='363040'>vertices.</span> <span m='363630'>A</span> <span
  m='363700'>multigraph</span> <span m='364460'>is</span> <span
  m='364570'>something</span> <span m='364900'>that</span> <span
  m='365060'>could</span> <span m='365160'>have</span> <span
  m='365410'>multiple</span> <span m='365940'>edges</span> <span
  m='366680'>between</span> <span m='366960'>pairs</span> <span
  m='367250'>of</span> <span m='367340'>vertices.</span> <span
  m='368140'>We</span> <span m='368240'>won't</span> <span
  m='368480'>really</span> <span m='368540'>be</span> <span
  m='368660'>talking</span> <span m='368900'>about</span> <span
  m='369060'>multigraphs</span> <span m='370480'>in</span> <span
  m='370870'>this</span> <span m='371320'>sequence</span> <span
  m='371660'>of</span> <span m='371740'>lectures.</span> <span
  m='372840'>But</span> <span m='373360'>something</span> <span
  m='373740'>to</span> <span m='375130'>think</span> <span
  m='375330'>about</span> <span m='376060'>or</span> <span m='377000'>keep
  in</span> <span m='377210'>the</span> <span m='377290'>back</span> <span
  m='377820'>of</span> <span m='378960'>your</span> <span m='379060'>mind</span>
  <span m='379420'>as</span> <span m='379530'>we</span> <span
  m='379650'>go</span> <span m='379800'>through</span> <span
  m='379950'>these</span> <span m='380150'>algorithms.</span> </p><p><span
  m='381130'>And</span> <span m='381510'>so</span> <span m='382500'>the</span>
  <span m='382630'>dominating</span> <span m='383480'>factor</span> <span
  m='383940'>here,</span> <span m='384320'>and</span> <span m='384400'>in</span>
  <span m='384710'>many</span> <span m='385050'>cases</span> <span
  m='385500'>really,</span> <span m='385810'>is</span> <span
  m='386500'>E.</span> <span m='387160'>And</span> <span
  m='387600'>Dijkstra</span> <span m='387870'>is</span> <span
  m='388180'>a</span> <span m='388220'>nice</span> <span
  m='388450'>algorithm,</span> <span m='388870'>because</span> <span
  m='390190'>it's</span> <span m='390390'>linear</span> <span
  m='390960'>in</span> <span m='391100'>the</span> <span
  m='391180'>number</span> <span m='391400'>of</span> <span
  m='391480'>edges.</span> <span m='394080'>So</span> <span
  m='394330'>that's</span> <span m='394600'>Dijkstra.</span> </p><p><span
  m='395900'>And</span> <span m='396670'>that's</span> <span
  m='396880'>the</span> <span m='397200'>first</span> <span m='397480'>of
  the</span> <span m='397590'>algorithms</span> <span m='398090'>that</span>
  <span m='398300'>we'll</span> <span m='399280'>look</span> <span
  m='399480'>at</span> <span m='399680'>next</span> <span
  m='399910'>time.</span> <span m='400750'>But</span> <span
  m='400820'>we'll</span> <span m='401000'>see</span> <span
  m='401780'>the</span> <span m='401870'>general</span> <span
  m='402160'>structure</span> <span m='402600'>of</span> <span
  m='402710'>Dijkstra</span> <span m='403120'>today.</span> <span
  m='404070'>And</span> <span m='404200'>then</span> <span
  m='404400'>there's</span> <span m='405600'>the</span> <span
  m='405700'>Bellman-Ford</span> <span m='406630'>algorithm</span> <span
  m='410880'>that</span> <span m='411160'>works</span> <span
  m='411510'>on</span> <span m='412440'>positive</span> <span
  m='412980'>and</span> <span m='413250'>negative</span> <span
  m='414480'>edges,</span> <span m='415310'>weight</span> <span
  m='415550'>edges.</span> <span m='416890'>And</span> <span
  m='417110'>this</span> <span m='417320'>has</span> <span m='417820'>a</span>
  <span m='417920'>complexity</span> <span m='421510'>order</span> <span
  m='421810'>V</span> <span m='422030'>E.</span> </p><p><span
  m='423630'>So</span> <span m='424190'>you</span> <span m='424320'>could</span>
  <span m='424410'>imagine</span> <span m='425020'>a</span> <span
  m='425120'>particular</span> <span m='425540'>implementation</span> <span
  m='426240'>of</span> <span m='426350'>Bellman-Ford</span> <span
  m='427580'>running</span> <span m='427950'>in</span> <span
  m='428110'>order</span> <span m='428430'>V</span> <span
  m='428690'>cubed</span> <span m='429130'>time.</span> <span
  m='430060'>Because</span> <span m='430540'>E</span> <span
  m='430750'>could</span> <span m='430900'>be</span> <span m='431080'>V</span>
  <span m='431270'>square.</span> <span m='432360'>And</span> <span
  m='433080'>you've</span> <span m='433230'>got</span> <span
  m='433350'>this</span> <span m='433480'>additional</span> <span
  m='433880'>E</span> <span m='434100'>factor.</span> <span m='434610'>So</span>
  <span m='434740'>it's</span> <span m='434860'>order</span> <span
  m='435150'>V</span> <span m='435350'>cubed</span> <span
  m='436180'>versus</span> <span m='436420'>order</span> <span
  m='436730'>V</span> <span m='436940'>log</span> <span m='437180'>V.</span>
  <span m='437800'>So</span> <span m='438020'>when</span> <span
  m='438150'>you</span> <span m='438220'>have</span> <span m='438360'>a</span>
  <span m='438410'>chance,</span> <span m='438860'>use</span> <span
  m='438970'>Dijkstra.</span> <span m='441000'>When</span> <span
  m='441110'>you're</span> <span m='441210'>stuck,</span> <span
  m='443740'>you'd</span> <span m='444130'>want</span> <span
  m='444290'>to</span> <span m='444350'>do</span> <span
  m='444830'>Bellman-Ford,</span> <span m='445670'>because</span> <span
  m='445890'>you</span> <span m='445970'>have</span> <span
  m='446160'>these</span> <span m='446670'>negative</span> <span
  m='447030'>weight</span> <span m='447250'>edges.</span> </p><p><span
  m='448030'>And</span> <span m='448270'>one</span> <span m='448410'>of</span>
  <span m='448450'>the</span> <span m='448540'>challenges</span> <span
  m='449160'>in</span> <span m='449220'>negative</span> <span
  m='449520'>weight</span> <span m='449640'>edges,</span> <span
  m='449790'>and</span> <span m='449990'>I'll</span> <span m='450060'>say
  a</span> <span m='450280'>little</span> <span m='450420'>bit</span> <span
  m='450600'>more</span> <span m='451390'>as</span> <span m='451580'>we</span>
  <span m='451690'>go</span> <span m='451800'>along,</span> <span
  m='452550'>is</span> <span m='452770'>that</span> <span m='454100'>you</span>
  <span m='454500'>end</span> <span m='454720'>up</span> <span
  m='454880'>having</span> <span m='455200'>to</span> <span
  m='456710'>have</span> <span m='457050'>to</span> <span m='457160'>find</span>
  <span m='457620'>cycles</span> <span m='459090'>that</span> <span
  m='459480'>are</span> <span m='459820'>of</span> <span m='460140'>a</span>
  <span m='460580'>negative</span> <span m='460990'>weight,</span> <span
  m='461720'>because</span> <span m='462020'>they</span> <span
  m='462150'>kind</span> <span m='462330'>of</span> <span
  m='462430'>throw</span> <span m='462610'>off</span> <span
  m='462920'>your</span> <span m='463390'>shortest</span> <span
  m='463780'>path</span> <span m='464040'>algorithm</span> <span
  m='464840'>if</span> <span m='465070'>you</span> <span m='465210'>were</span>
  <span m='465300'>just</span> <span m='466180'>assuming</span> <span
  m='466670'>that</span> <span m='467800'>shortest</span> <span
  m='468160'>path</span> <span m='468440'>lengths</span> <span
  m='469010'>are</span> <span m='469300'>only</span> <span
  m='469590'>going</span> <span m='469750'>to</span> <span
  m='469850'>decrease.</span> <span m='471180'>But</span> <span m='471270'>when
  you</span> <span m='471450'>have</span> <span m='471700'>negative</span> <span
  m='472030'>weights,</span> <span m='473170'>you</span> <span
  m='473510'>might</span> <span m='474430'>take</span> <span m='474670'>a</span>
  <span m='474740'>step</span> <span m='475460'>and</span> <span
  m='475980'>the</span> <span m='476260'>overall</span> <span
  m='476640'>weight</span> <span m='476920'>might</span> <span
  m='477140'>decrease.</span> </p><p><span m='477900'>So</span> <span
  m='478000'>it's</span> <span m='478220'>kind</span> <span m='478340'>of</span>
  <span m='478410'>a</span> <span m='478460'>longer</span> <span
  m='478930'>path</span> <span m='479310'>in</span> <span
  m='479430'>terms</span> <span m='479690'>of</span> <span m='479800'>the</span>
  <span m='479860'>number</span> <span m='480080'>of</span> <span
  m='480180'>edges.</span> <span m='481150'>But</span> <span
  m='481400'>the</span> <span m='481490'>weight</span> <span
  m='481660'>is</span> <span m='481770'>smaller.</span> <span
  m='482600'>And</span> <span m='482780'>that</span> <span
  m='482980'>kind</span> <span m='483150'>of</span> <span
  m='483470'>makes</span> <span m='483940'>the</span> <span
  m='484410'>algorithm</span> <span m='484870'>more</span> <span
  m='485050'>complicated.</span> <span m='485970'>And</span> <span m='486190'>it
  has</span> <span m='486390'>to</span> <span m='486470'>do</span> <span
  m='486560'>more</span> <span m='486740'>work.</span> </p><p><span
  m='487710'>So</span> <span m='487780'>that's</span> <span
  m='488000'>really</span> <span m='488170'>why</span> <span
  m='488530'>there's</span> <span m='488720'>a</span> <span
  m='488810'>difference</span> <span m='489170'>between</span> <span
  m='489480'>these</span> <span m='489690'>two</span> <span
  m='489820'>complexities.</span> <span m='490760'>And</span> <span
  m='490890'>I</span> <span m='490930'>guarantee</span> <span
  m='491390'>you,</span> <span m='491900'>you'll</span> <span
  m='492090'>understand</span> <span m='492640'>this</span> <span
  m='493080'>much</span> <span m='493300'>better</span> <span
  m='494200'>after</span> <span m='494270'>we're</span> <span
  m='494380'>done</span> <span m='494640'>with</span> <span
  m='495760'>the</span> <span m='495920'>lectures</span> <span
  m='496310'>on</span> <span m='496430'>Dijkstra</span> <span m='496700'>and
  the</span> <span m='496970'>lectures</span> <span m='497380'>on</span> <span
  m='498240'>Bellman-Ford.</span> </p><p><span m='500060'>So</span> <span
  m='500200'>that's</span> <span m='500390'>the</span> <span
  m='500470'>set</span> <span m='500660'>up</span> <span m='500820'>for</span>
  <span m='501040'>the</span> <span m='501150'>problem.</span> <span
  m='501560'>That's</span> <span m='501740'>what</span> <span
  m='501870'>we're</span> <span m='502070'>going</span> <span
  m='502180'>to</span> <span m='502220'>be</span> <span
  m='502320'>looking</span> <span m='502610'>at.</span> <span
  m='504030'>Let's</span> <span m='505840'>look</span> <span
  m='506040'>at</span> <span m='506490'>a</span> <span m='506510'>couple</span>
  <span m='506780'>more</span> <span m='506990'>definitions</span> <span
  m='507830'>beyond</span> <span m='509260'>what</span> <span
  m='509450'>I</span> <span m='509520'>have</span> <span m='509810'>here</span>
  <span m='511020'>with</span> <span m='511190'>respect</span> <span
  m='511600'>to</span> <span m='512039'>just</span> <span m='512309'>the</span>
  <span m='512750'>notation.</span> <span m='514549'>And</span> <span
  m='516990'>you</span> <span m='517130'>can</span> <span
  m='517260'>think</span> <span m='517530'>of</span> <span
  m='519419'>path</span> <span m='521350'>p</span> <span m='523020'>as</span>
  <span m='523610'>a</span> <span m='523710'>sequence</span> <span
  m='524280'>of</span> <span m='524400'>vertices--</span> <span
  m='525850'>V0,</span> <span m='526390'>V1,</span> <span m='526883'>et
  cetera,</span> <span m='527376'>to</span> <span m='527870'>Vk.</span>
  </p><p><span m='529880'>And</span> <span m='531480'>this</span> <span
  m='531660'>is</span> <span m='531770'>the</span> <span m='531830'>path</span>
  <span m='533190'>if</span> <span m='534030'>Vi,</span> <span
  m='536150'>Vi</span> <span m='536270'>plus</span> <span m='536540'>1</span>
  <span m='537650'>belongs</span> <span m='538180'>to</span> <span
  m='538340'>E</span> <span m='540260'>for</span> <span m='541220'>0</span>
  <span m='541900'>less</span> <span m='542150'>than</span> <span
  m='542290'>or</span> <span m='542410'>equal</span> <span m='542620'>to</span>
  <span m='542760'>i</span> <span m='542950'>less</span> <span
  m='543200'>than</span> <span m='543320'>or</span> <span
  m='543350'>equal</span> <span m='543580'>to</span> <span m='543670'>k.</span>
  <span m='545210'>So</span> <span m='545610'>a</span> <span
  m='545690'>path</span> <span m='546150'>is</span> <span m='546550'>a</span>
  <span m='546630'>sequence</span> <span m='547100'>of</span> <span
  m='547210'>edges.</span> <span m='548290'>And</span> <span
  m='548540'>each</span> <span m='548740'>of</span> <span
  m='548820'>those</span> <span m='549010'>edges</span> <span
  m='549440'>has</span> <span m='549710'>to</span> <span m='549800'>be</span>
  <span m='550000'>in</span> <span m='550180'>the</span> <span
  m='550270'>graph,</span> <span m='550670'>has</span> <span
  m='550910'>to</span> <span m='551000'>be</span> <span m='551180'>in</span>
  <span m='551350'>the</span> <span m='551840'>set</span> <span
  m='552340'>of</span> <span m='552490'>edges</span> <span m='552870'>E.</span>
  </p><p><span m='555530'>And</span> <span m='556080'>W</span> <span
  m='556750'>of</span> <span m='557040'>p,</span> <span m='557990'>which
  is</span> <span m='558080'>the</span> <span m='558210'>weight</span> <span
  m='558470'>of</span> <span m='558570'>the</span> <span m='558660'>path,</span>
  <span m='560090'>we</span> <span m='560230'>know</span> <span
  m='560410'>that</span> <span m='560550'>by</span> <span m='560690'>the</span>
  <span m='560770'>weight</span> <span m='560930'>of</span> <span
  m='561030'>edges,</span> <span m='561940'>those</span> <span
  m='562160'>are</span> <span m='562270'>easy.</span> <span
  m='562860'>They're</span> <span m='563040'>given</span> <span
  m='563260'>by</span> <span m='563400'>the W</span> <span
  m='563520'>function.</span> <span m='564970'>The</span> <span
  m='565040'>weight</span> <span m='565210'>of</span> <span
  m='565290'>the</span> <span m='565390'>path</span> <span m='565800'>is</span>
  <span m='565910'>simply</span> <span m='566290'>the</span> <span
  m='566400'>summation</span> <span m='567840'>of</span> <span
  m='568150'>the</span> <span m='568250'>weights</span> <span
  m='569200'>of</span> <span m='569330'>the edges.</span> <span
  m='573100'>All</span> <span m='573160'>right.</span> </p><p><span
  m='573620'>So</span> <span m='574630'>fairly</span> <span
  m='574720'>obvious</span> <span m='575030'>definitions.</span> <span
  m='575610'>But</span> <span m='575750'>obviously,</span> <span
  m='576030'>we</span> <span m='576130'>have</span> <span m='576230'>to</span>
  <span m='576280'>get</span> <span m='576440'>these</span> <span
  m='576610'>right</span> <span m='577350'>in</span> <span
  m='577520'>order</span> <span m='577730'>to</span> <span
  m='578750'>actually</span> <span m='579100'>solve</span> <span
  m='579410'>the</span> <span m='579470'>problem</span> <span
  m='579890'>correctly.</span> <span m='583030'>And</span> <span
  m='583790'>the</span> <span m='583910'>shortest</span> <span
  m='584250'>path</span> <span m='584500'>problem</span> <span
  m='586760'>is,</span> <span m='586980'>as</span> <span m='587130'>you</span>
  <span m='587230'>can</span> <span m='587340'>imagine,</span> <span
  m='589760'>something</span> <span m='590240'>that</span> <span
  m='592190'>tries</span> <span m='592560'>to</span> <span
  m='592660'>find</span> <span m='593880'>a</span> <span m='593990'>path</span>
  <span m='595510'>p</span> <span m='596370'>that</span> <span
  m='596580'>has</span> <span m='597350'>minimum</span> <span
  m='597760'>weight.</span> <span m='600050'>So</span> <span
  m='601040'>in</span> <span m='601190'>general,</span> <span
  m='601650'>you</span> <span m='601760'>have</span> <span
  m='601960'>some</span> <span m='602440'>set</span> <span m='602570'>up</span>
  <span m='602720'>for</span> <span m='602820'>the</span> <span
  m='602870'>problem.</span> <span m='603840'>But</span> <span
  m='604020'>it</span> <span m='604120'>comes</span> <span
  m='604360'>down</span> <span m='604640'>to</span> <span m='604760'>find</span>
  <span m='605230'>p</span> <span m='606860'>with--</span> </p><p><span
  m='613260'>And</span> <span m='613460'>there are</span> <span
  m='613590'>many,</span> <span m='613950'>many</span> <span
  m='614940'>possible</span> <span m='615450'>paths.</span> <span
  m='616780'>You</span> <span m='616880'>have</span> <span m='617030'>to</span>
  <span m='617090'>understand</span> <span m='617540'>that</span> <span
  m='617690'>there are</span> <span m='618100'>potentially</span> <span
  m='618640'>an</span> <span m='618710'>exponential</span> <span
  m='619340'>number</span> <span m='619580'>of</span> <span
  m='619660'>paths</span> <span m='620610'>in</span> <span m='621590'>the</span>
  <span m='621770'>graphs</span> <span m='622100'>that</span> <span
  m='622240'>we</span> <span m='622350'>would</span> <span
  m='622480'>consider.</span> <span m='623040'>And</span> <span
  m='623200'>here's</span> <span m='623410'>a</span> <span
  m='623500'>real</span> <span m='623750'>simple</span> <span
  m='624040'>example</span> <span m='626280'>where</span> <span
  m='626610'>you</span> <span m='626730'>would</span> <span
  m='626810'>have</span> <span m='631926'>an</span> <span
  m='632350'>exponential</span> <span m='632840'>number</span> <span
  m='633050'>of</span> <span m='633100'>paths.</span> <span
  m='633360'>And</span> <span m='633460'>we'll</span> <span
  m='633570'>come</span> <span m='633680'>back</span> <span m='633900'>to</span>
  <span m='633960'>this</span> <span m='634140'>example</span> <span
  m='636840'>later</span> <span m='637140'>in</span> <span m='637250'>the</span>
  <span m='637340'>lecture.</span> </p><p><span m='638540'>But</span> <span
  m='639160'>let's</span> <span m='639670'>assume</span> <span
  m='639870'>that</span> <span m='640000'>all</span> <span m='640150'>the</span>
  <span m='640210'>directions</span> <span m='640670'>go</span> <span
  m='640800'>this</span> <span m='641010'>way.</span> <span
  m='644050'>And</span> <span m='644530'>it's</span> <span m='644680'>a</span>
  <span m='644760'>directed</span> <span m='645200'>graph.</span> <span
  m='646500'>Well,</span> <span m='646830'>you</span> <span
  m='646950'>could</span> <span m='647060'>have</span> <span
  m='647540'>the</span> <span m='647960'>path</span> <span
  m='648230'>that</span> <span m='648380'>goes</span> <span
  m='648590'>all</span> <span m='648730'>the</span> <span m='648790'>way</span>
  <span m='648930'>here.</span> <span m='649245'>But</span> <span
  m='649560'>you</span> <span m='649720'>could have</span> <span m='649890'>the
  path</span> <span m='650180'>that</span> <span m='650260'>goes</span> <span
  m='650920'>on</span> <span m='651420'>top</span> <span m='652220'>and</span>
  <span m='652600'>all</span> <span m='652730'>the</span> <span
  m='652850'>way</span> <span m='652960'>this</span> <span
  m='653120'>way.</span> <span m='653700'>You</span> <span
  m='653810'>have</span> <span m='654150'>basically</span> <span
  m='654620'>two</span> <span m='654780'>choices</span> <span
  m='655270'>on</span> <span m='655400'>getting</span> <span
  m='655650'>to</span> <span m='655740'>this</span> <span
  m='656420'>vertex.</span> </p><p><span m='657510'>Then</span> <span
  m='657590'>you've</span> <span m='657710'>got,</span> <span
  m='658470'>given</span> <span m='658720'>the</span> <span
  m='658810'>two</span> <span m='658960'>ways</span> <span m='659190'>you</span>
  <span m='659380'>have</span> <span m='659620'>of</span> <span
  m='659740'>getting</span> <span m='659950'>to</span> <span
  m='660000'>this</span> <span m='660180'>vertex.</span> <span
  m='661320'>You've</span> <span m='661420'>got</span> <span
  m='661620'>four</span> <span m='661820'>ways</span> <span m='662080'>of</span>
  <span m='662170'>getting</span> <span m='662380'>here.</span> <span
  m='663580'>And</span> <span m='663730'>then,</span> <span
  m='664700'>you</span> <span m='664830'>have</span> <span
  m='664940'>eight</span> <span m='665140'>ways</span> <span
  m='665340'>of</span> <span m='665430'>getting</span> <span
  m='665620'>there.</span> <span m='666240'>So</span> <span m='666440'>on</span>
  <span m='666570'>and</span> <span m='666650'>so</span> <span
  m='666780'>forth.</span> <span m='667870'>So</span> <span
  m='668000'>there's</span> <span m='668150'>an</span> <span
  m='668230'>exponential</span> <span m='668710'>number</span> <span
  m='668900'>of</span> <span m='668960'>paths</span> <span
  m='669250'>potentially.</span> </p><p><span m='670750'>The</span> <span
  m='670820'>other</span> <span m='671020'>thing</span> <span
  m='671160'>that's</span> <span m='671530'>interesting</span> <span
  m='671970'>here,</span> <span m='672970'>which</span> <span
  m='673250'>is</span> <span m='673360'>important</span> <span
  m='674490'>in</span> <span m='674750'>terms</span> <span m='675010'>of</span>
  <span m='675100'>this</span> <span m='675280'>complexity</span> <span
  m='675900'>is,</span> <span m='676450'>what's</span> <span
  m='676700'>interesting</span> <span m='677190'>about</span> <span
  m='678720'>what</span> <span m='678980'>you</span> <span m='679070'>see</span>
  <span m='679310'>here</span> <span m='679580'>with</span> <span
  m='679730'>respect</span> <span m='680040'>to</span> <span
  m='680100'>the</span> <span m='680190'>complexity</span> <span
  m='681150'>and</span> <span m='681310'>what</span> <span m='681460'>you</span>
  <span m='681550'>see</span> <span m='681750'>here.</span> <span
  m='683380'>Anybody</span> <span m='684080'>want</span> <span
  m='684210'>to</span> <span m='684270'>point</span> <span
  m='684500'>that</span> <span m='684660'>out?</span> </p><p><span
  m='685590'>So</span> <span m='687020'>I</span> <span m='687120'>have</span>
  <span m='687610'>this</span> <span m='687780'>complexity</span> <span
  m='688240'>here</span> <span m='688630'>and</span> <span
  m='688980'>order</span> <span m='689160'>VE</span> <span m='689580'>out</span>
  <span m='689750'>there.</span> <span m='690910'>What's</span> <span
  m='691440'>an</span> <span m='691530'>interesting</span> <span
  m='693420'>observation</span> <span m='694810'>if</span> <span
  m='694970'>you</span> <span m='695060'>look</span> <span m='695180'>at</span>
  <span m='695250'>this</span> <span m='695410'>board</span> <span
  m='695700'>here</span> <span m='696430'>and</span> <span m='696570'>the</span>
  <span m='696640'>two</span> <span m='696770'>complexities?</span> <span
  m='700630'>Anybody?</span> <span m='701810'>Yeah,</span> <span m='702240'>back
  there.</span> </p><p><span m='702580'>AUDIENCE: It's not a</span> <span
  m='703017'>function</span> <span m='703454'>of weight.</span> </p><p><span
  m='704330'>PROFESSOR: It's</span> <span m='704530'>not</span> <span
  m='704830'>a function</span> <span m='705060'>of</span> <span
  m='705210'>weight.</span> <span m='705690'>Great.</span> <span
  m='706120'>That's</span> <span m='706290'>definitely</span> <span
  m='706610'>worth</span> <span m='706790'>recursion.</span> <span
  m='708650'>And</span> <span m='709390'>I'll</span> <span m='709500'>let</span>
  <span m='709690'>you</span> <span m='709840'>throw this</span> <span
  m='710000'>one.</span> <span m='713120'>All the</span> <span
  m='713590'>way</span> <span m='713820'>back</span> <span
  m='714300'>there,</span> <span m='715144'>all right?</span> <span
  m='715990'>Right.</span> </p><p><span m='717900'>All right,</span> <span
  m='718170'>good.</span> <span m='718580'>Good,</span> <span
  m='718990'>good.</span> <span m='719670'>That</span> <span
  m='719760'>was</span> <span m='719880'>good.</span> <span m='720120'>That
  was</span> <span m='720220'>better</span> <span m='720410'>than</span> <span
  m='720790'>what</span> <span m='721050'>I</span> <span m='721110'>could</span>
  <span m='721280'>do.</span> <span m='721450'>No, not</span> <span
  m='721830'>really.</span> <span m='722180'>But</span> <span
  m='723920'>I</span> <span m='724780'>would've</span> <span
  m='724930'>been</span> <span m='725040'>right</span> <span
  m='725320'>in</span> <span m='725410'>his</span> <span m='726500'>hands</span>
  <span m='726850'>right</span> <span m='727030'>there.</span> </p><p><span
  m='729390'>Anyway,</span> <span m='729750'>so</span> <span
  m='731800'>that's</span> <span m='732030'>a</span> <span
  m='732070'>great</span> <span m='732290'>observation,</span> <span
  m='732780'>actually.</span> <span m='733180'>And I</span> <span
  m='733330'>should</span> <span m='733460'>have</span> <span
  m='733540'>pointed</span> <span m='733990'>it out</span> <span
  m='734190'>right</span> <span m='734380'>up</span> <span
  m='734660'>front.</span> <span m='734940'>But</span> <span
  m='735570'>I'm</span> <span m='735930'>glad</span> <span m='736260'>I</span>
  <span m='736790'>got</span> <span m='736940'>it</span> <span m='737030'>out
  of</span> <span m='737480'>you.</span> <span m='737880'>W</span> <span
  m='738440'>doesn't</span> <span m='738740'>exist</span> <span
  m='739820'>in</span> <span m='740760'>the</span> <span
  m='740860'>complexity.</span> <span m='742160'>This</span> <span
  m='742290'>is</span> <span m='742440'>pretty</span> <span
  m='742610'>important.</span> <span m='743650'>W</span> <span
  m='744080'>could</span> <span m='744220'>be</span> <span m='744990'>a</span>
  <span m='745020'>large</span> <span m='745640'>number.</span> <span
  m='746410'>I mean,</span> <span m='746580'>it</span> <span
  m='746680'>could</span> <span m='746810'>be</span> <span m='746930'>2
  raised</span> <span m='747260'>to</span> <span m='747340'>64.</span>
  </p><p><span m='749030'>The</span> <span m='749150'>fact</span> <span
  m='749500'>is</span> <span m='749740'>that</span> <span
  m='750380'>there's</span> <span m='750630'>only</span> <span
  m='751290'>E</span> <span m='751580'>square</span> <span
  m='752740'>different</span> <span m='753420'>values</span> <span
  m='754640'>possible</span> <span m='755230'>for</span> <span m='756030'>a
  weight,</span> <span m='756760'>right.</span> <span m='757170'>I</span> <span
  m='757270'>mean,</span> <span m='757650'>roughly</span> <span
  m='757970'>speaking.</span> <span m='758730'>If</span> <span
  m='758830'>you</span> <span m='758890'>have</span> <span m='758980'>a</span>
  <span m='759030'>complete</span> <span m='759580'>graph,</span> <span
  m='759980'>it's</span> <span m='760090'>a</span> <span
  m='760150'>simple</span> <span m='760480'>graph,</span> <span
  m='761390'>there's</span> <span m='761810'>order</span> <span
  m='762280'>E</span> <span m='762490'>square</span> <span
  m='763060'>possible</span> <span m='763620'>weights.</span> </p><p><span
  m='765160'>But</span> <span m='765310'>the</span> <span
  m='765440'>range</span> <span m='765880'>of</span> <span m='765990'>the</span>
  <span m='766080'>weights</span> <span m='767630'>could</span> <span
  m='767910'>be</span> <span m='768180'>exponential.</span> <span
  m='769830'>I</span> <span m='769950'>could</span> <span m='770080'>have</span>
  <span m='771600'>an</span> <span m='771800'>edge</span> <span
  m='772370'>weight</span> <span m='772640'>of</span> <span
  m='772810'>0.0001</span> <span m='774480'>and</span> <span m='774600'>a</span>
  <span m='774640'>different</span> <span m='774930'>edge</span> <span
  m='775110'>weight</span> <span m='775360'>of</span> <span m='775450'>10</span>
  <span m='775660'>raised</span> <span m='775870'>to</span> <span
  m='775940'>98.</span> <span m='778090'>There's</span> <span
  m='778540'>nothing</span> <span m='779150'>that's</span> <span
  m='780740'>stopping</span> <span m='781070'>me</span> <span
  m='781190'>from</span> <span m='781340'>doing</span> <span
  m='781570'>that</span> <span m='781760'>or</span> <span
  m='781840'>putting</span> <span m='782050'>a</span> <span
  m='782110'>specification</span> <span m='782750'>like</span> <span
  m='783000'>that.</span> </p><p><span m='784040'>But</span> <span
  m='784740'>the</span> <span m='784840'>nice</span> <span
  m='785060'>thing</span> <span m='785210'>about</span> <span
  m='785470'>Dijkstra,</span> <span m='785940'>and</span> <span
  m='786120'>Bellman-Ford,</span> <span m='786830'>and</span> <span
  m='787430'>virtually</span> <span m='787820'>all</span> <span m='788000'>of
  the</span> <span m='788580'>algorithms</span> <span m='789030'>that</span>
  <span m='789130'>are</span> <span m='789190'>useful</span> <span
  m='789570'>in</span> <span m='789680'>practice</span> <span
  m='790540'>is</span> <span m='790720'>that</span> <span m='790890'>they</span>
  <span m='790960'>don't</span> <span m='791190'>depend</span> <span
  m='792170'>on</span> <span m='792440'>the</span> <span
  m='792540'>dynamic</span> <span m='793020'>range</span> <span m='793450'>of
  the</span> <span m='793600'>weights.</span> <span m='795450'>And</span> <span
  m='795710'>so</span> <span m='795890'>keep</span> <span m='796080'>that</span>
  <span m='796210'>in</span> <span m='796310'>mind</span> <span
  m='796740'>as</span> <span m='796940'>you</span> <span m='797490'>think</span>
  <span m='797720'>of</span> <span m='798510'>shortest</span> <span
  m='798850'>path</span> <span m='799100'>algorithms.</span> <span
  m='799730'>And</span> <span m='800080'>we'll</span> <span
  m='800220'>talk</span> <span m='800390'>a</span> <span
  m='800450'>little</span> <span m='800600'>bit</span> <span
  m='800710'>about</span> <span m='800930'>this</span> <span
  m='801090'>in</span> <span m='801190'>section</span> <span
  m='801660'>tomorrow,</span> <span m='802080'>or</span> <span
  m='802580'>the</span> <span m='802670'>TAs</span> <span
  m='803040'>will,</span> <span m='803670'>as</span> <span m='803870'>to</span>
  <span m='803980'>why</span> <span m='804420'>breadth</span> <span
  m='804830'>first</span> <span m='805130'>search</span> <span
  m='805970'>and</span> <span m='806160'>depth</span> <span
  m='806390'>first</span> <span m='806590'>search</span> <span
  m='807520'>aren't</span> <span m='807900'>directly</span> <span
  m='808490'>applicable</span> <span m='809520'>to</span> <span
  m='809600'>the</span> <span m='809710'>shortest</span> <span
  m='810080'>path</span> <span m='810380'>problem.</span> <span
  m='811610'>And</span> <span m='811780'>the</span> <span m='811860'>hint</span>
  <span m='812140'>really</span> <span m='812420'>is</span> <span
  m='812940'>the</span> <span m='813490'>dynamic</span> <span
  m='813880'>range</span> <span m='814160'>of</span> <span m='814240'>the</span>
  <span m='814320'>weights.</span> <span m='816480'>So</span> <span
  m='816670'>keep</span> <span m='816850'>that</span> <span m='816970'>in</span>
  <span m='817050'>mind.</span> </p><p><span m='817770'>So</span> <span
  m='817950'>a</span> <span m='818020'>couple</span> <span
  m='818300'>things</span> <span m='818600'>why</span> <span
  m='818840'>this</span> <span m='819090'>is</span> <span m='819240'>an</span>
  <span m='819350'>interesting</span> <span m='819720'>algorithm,</span> <span
  m='820970'>or</span> <span m='821130'>interesting</span> <span
  m='821540'>problem</span> <span m='821910'>to</span> <span
  m='822000'>solve,</span> <span m='822730'>and</span> <span
  m='822840'>harder</span> <span m='823220'>than</span> <span
  m='823790'>the</span> <span m='823950'>problems</span> <span
  m='824310'>we've</span> <span m='824450'>looked</span> <span
  m='824670'>at</span> <span m='824820'>so</span> <span m='824980'>far</span>
  <span m='825250'>like</span> <span m='825440'>sorting</span> <span
  m='825890'>and</span> <span m='826340'>search,</span> <span
  m='827070'>is</span> <span m='827200'>that</span> <span m='827320'>you</span>
  <span m='827400'>have</span> <span m='827520'>an</span> <span
  m='827590'>exponential</span> <span m='828170'>number</span> <span
  m='828390'>of</span> <span m='828460'>paths.</span> <span
  m='829760'>And</span> <span m='829900'>then</span> <span m='830140'>the</span>
  <span m='830260'>dynamic</span> <span m='830700'>range</span> <span
  m='830940'>of</span> <span m='831020'>the</span> <span
  m='831100'>weights</span> <span m='831540'>can</span> <span
  m='831700'>be</span> <span m='832400'>very,</span> <span
  m='832970'>very</span> <span m='833150'>large.</span> <span
  m='833700'>And</span> <span m='833850'>it's</span> <span m='834020'>not</span>
  <span m='834210'>linear</span> <span m='834590'>by</span> <span
  m='834750'>any</span> <span m='834890'>means.</span> <span
  m='835750'>All</span> <span m='835800'>right.</span> </p><p><span
  m='836040'>So</span> <span m='836310'>these</span> <span
  m='836530'>algorithms</span> <span m='836980'>are</span> <span
  m='837260'>going</span> <span m='837470'>to</span> <span
  m='837560'>have</span> <span m='837740'>to</span> <span m='837820'>have</span>
  <span m='837970'>some</span> <span m='838100'>smarts.</span> <span
  m='839020'>And the</span> <span m='839310'>optimal</span> <span
  m='839730'>substructure</span> <span m='840350'>property</span> <span
  m='840810'>that</span> <span m='841290'>we'll</span> <span
  m='841400'>look</span> <span m='841620'>at</span> <span
  m='841820'>towards</span> <span m='842030'>the</span> <span
  m='842100'>end</span> <span m='842280'>of</span> <span
  m='842470'>today's</span> <span m='842820'>lecture</span> <span
  m='843670'>will</span> <span m='843850'>give</span> <span
  m='843960'>you</span> <span m='844060'>a</span> <span m='844120'>sense</span>
  <span m='844510'>of</span> <span m='844950'>how</span> <span
  m='845160'>these</span> <span m='845340'>algorithms</span> <span
  m='845770'>actually</span> <span m='846070'>work</span> <span
  m='846380'>in</span> <span m='847270'>basically</span> <span
  m='847860'>linear</span> <span m='848180'>time.</span> <span
  m='848980'>Or</span> <span m='850320'>VE,</span> <span m='850685'>you</span>
  <span m='851050'>could</span> <span m='851180'>think</span> <span
  m='851320'>of</span> <span m='851410'>that</span> <span m='851600'>as</span>
  <span m='851720'>being</span> <span m='852310'>cubic</span> <span
  m='852670'>time</span> <span m='853450'>in</span> <span
  m='853700'>terms</span> <span m='853980'>of</span> <span m='854730'>the</span>
  <span m='854920'>vertices.</span> </p><p><span m='857330'>So</span> <span
  m='858600'>keep</span> <span m='858740'>that</span> <span m='858860'>in</span>
  <span m='858940'>mind.</span> <span m='859530'>Let's</span> <span
  m='859670'>talk</span> <span m='859910'>a</span> <span
  m='859970'>little</span> <span m='860190'>bit</span> <span
  m='860350'>more</span> <span m='861490'>about</span> <span
  m='862540'>weighted</span> <span m='862960'>graphs.</span> <span
  m='863470'>I</span> <span m='863520'>want</span> <span m='863900'>a</span>
  <span m='863960'>little</span> <span m='864230'>bit</span> <span
  m='864350'>more</span> <span m='864550'>notation.</span> </p><p><span
  m='871940'>And</span> <span m='872940'>what</span> <span m='873120'>I</span>
  <span m='873170'>have</span> <span m='873420'>is</span> <span
  m='873580'>V0</span> <span m='873800'>using</span> <span
  m='875640'>path</span> <span m='876060'>p</span> <span m='877160'>to</span>
  <span m='877320'>Vk.</span> <span m='878170'>So I'm going to</span> <span
  m='878510'>write</span> <span m='878760'>that</span> <span
  m='879010'>to</span> <span m='879100'>say</span> <span m='879340'>that</span>
  <span m='880290'>there's</span> <span m='880470'>a</span> <span
  m='880530'>particular</span> <span m='880970'>path</span> <span
  m='881880'>of</span> <span m='882240'>V0</span> <span m='882790'>to</span>
  <span m='882910'>Vk.</span> <span m='883810'>Sometimes</span> <span
  m='884270'>I'm</span> <span m='884370'>searching</span> <span
  m='884820'>for</span> <span m='885180'>the</span> <span m='885710'>path</span>
  <span m='886510'>p</span> <span m='886780'>with</span> <span
  m='887130'>a</span> <span m='887240'>minimum</span> <span
  m='887630'>weight.</span> <span m='888900'>And</span> <span
  m='889420'>that's</span> <span m='889700'>how</span> <span
  m='889890'>I'm</span> <span m='889990'>going</span> <span m='890080'>to</span>
  <span m='890120'>represent</span> <span m='890530'>that.</span> </p><p><span
  m='891190'>V0,</span> <span m='892590'>which</span> <span m='892830'>is</span>
  <span m='892950'>a</span> <span m='893170'>single</span> <span
  m='893670'>vertex</span> <span m='894120'>path,</span> <span
  m='896120'>is</span> <span m='897360'>the</span> <span m='897430'>path</span>
  <span m='897850'>from</span> <span m='899590'>V0</span> <span
  m='899980'>to</span> <span m='900090'>V0.</span> <span m='900580'>So</span>
  <span m='900720'>it's</span> <span m='900830'>really</span> <span
  m='901030'>a</span> <span m='901080'>0</span> <span m='902410'>length</span>
  <span m='902790'>path.</span> <span m='903680'>And</span> <span
  m='903950'>it</span> <span m='904060'>has</span> <span
  m='904750'>weight</span> <span m='905230'>0.</span> </p><p><span
  m='907630'>So</span> <span m='907760'>that's</span> <span
  m='907940'>one</span> <span m='908180'>condition.</span> <span
  m='909410'>The</span> <span m='909670'>other</span> <span
  m='909730'>condition</span> <span m='910200'>that</span> <span
  m='910620'>we</span> <span m='910760'>need</span> <span m='910930'>to</span>
  <span m='911040'>look</span> <span m='911210'>at,</span> <span
  m='912670'>which</span> <span m='912880'>is</span> <span m='915190'>the</span>
  <span m='915280'>other</span> <span m='915500'>case,</span> <span
  m='916030'>is</span> <span m='916410'>what</span> <span m='916600'>if</span>
  <span m='916780'>there</span> <span m='916890'>isn't</span> <span
  m='917160'>a</span> <span m='917220'>path?</span> <span m='918120'>So</span>
  <span m='918280'>I</span> <span m='918320'>want</span> <span
  m='918450'>to</span> <span m='918490'>put</span> <span m='918670'>those</span>
  <span m='918880'>two</span> <span m='919020'>things</span> <span
  m='919250'>together,</span> <span m='920820'>the</span> <span
  m='920840'>two</span> <span m='921010'>extremes,</span> <span
  m='922150'>and</span> <span m='922280'>of</span> <span
  m='922360'>course</span> <span m='922590'>all</span> <span
  m='922770'>of</span> <span m='922870'>the</span> <span m='923260'>cases</span>
  <span m='923610'>in</span> <span m='923720'>between,</span> <span
  m='925020'>in</span> <span m='925180'>this</span> <span
  m='925370'>definition</span> <span m='926210'>of</span> <span
  m='927230'>the</span> <span m='927330'>shortest</span> <span
  m='927710'>pathway.</span> </p><p><span m='929810'>And</span> <span
  m='930030'>so</span> <span m='930190'>I'm</span> <span m='930340'>going</span>
  <span m='930480'>to</span> <span m='931350'>talk</span> <span
  m='931750'>about</span> <span m='932230'>the</span> <span
  m='932310'>shortest</span> <span m='932740'>path</span> <span
  m='933990'>value</span> <span m='934430'>of</span> <span m='934880'>the</span>
  <span m='934990'>weight</span> <span m='936620'>of</span> <span
  m='936750'>the</span> <span m='936810'>shortest</span> <span
  m='937160'>path</span> <span m='937500'>between u</span> <span
  m='937870'>and</span> <span m='938310'>v</span> <span m='938990'>as</span>
  <span m='939320'>delta,</span> <span m='940590'>u,</span> <span
  m='941110'>v.</span> <span m='941870'>And</span> <span m='942000'>my</span>
  <span m='942110'>goal</span> <span m='942420'>is</span> <span
  m='942540'>to</span> <span m='942630'>find</span> <span
  m='943080'>delta.</span> <span m='943610'>It's</span> <span
  m='943740'>also</span> <span m='943960'>to</span> <span m='944040'>find</span>
  <span m='944340'>the</span> <span m='944430'>path.</span> </p><p><span
  m='945560'>It</span> <span m='945770'>doesn't</span> <span
  m='946120'>help</span> <span m='946340'>you</span> <span
  m='946450'>very</span> <span m='946650'>much</span> <span m='948320'>if</span>
  <span m='948750'>you</span> <span m='948890'>know</span> <span
  m='949130'>that</span> <span m='949350'>there's</span> <span
  m='949580'>a</span> <span m='949640'>way</span> <span m='949980'>of</span>
  <span m='950610'>getting</span> <span m='950790'>from</span> <span
  m='950930'>here</span> <span m='951170'>to</span> <span
  m='951250'>Lexington</span> <span m='953270'>within</span> <span
  m='953560'>14</span> <span m='953980'>miles</span> <span m='954440'>if</span>
  <span m='954530'>you</span> <span m='954600'>don't</span> <span
  m='954750'>know</span> <span m='954880'>what</span> <span
  m='955080'>that</span> <span m='955260'>path is,</span> <span
  m='955720'>right.</span> <span m='956830'>So</span> <span
  m='958420'>that's</span> <span m='958610'>one</span> <span
  m='958810'>aspect</span> <span m='959140'>of</span> <span
  m='959270'>it,</span> <span m='959490'>which</span> <span m='959690'>is</span>
  <span m='959920'>you</span> <span m='960020'>want</span> <span
  m='960140'>to</span> <span m='960180'>get</span> <span m='960370'>the</span>
  <span m='960450'>weight.</span> <span m='961110'>But</span> <span
  m='961670'>you</span> <span m='961810'>want</span> <span m='961930'>to</span>
  <span m='961970'>get</span> <span m='962140'>the</span> <span
  m='962240'>path</span> <span m='962510'>as</span> <span
  m='962640'>well.</span> <span m='962970'>And</span> <span
  m='963110'>these</span> <span m='963270'>algorithms</span> <span
  m='963660'>will</span> <span m='963960'>do</span> <span m='964060'>that</span>
  <span m='964360'>for</span> <span m='964550'>you.</span> </p><p><span
  m='966230'>And</span> <span m='966440'>in</span> <span
  m='966530'>particular,</span> <span m='969050'>what</span> <span
  m='969180'>we</span> <span m='969280'>want</span> <span m='969610'>is</span>
  <span m='970150'>delta</span> <span m='970530'>u,</span> <span
  m='970865'>v</span> <span m='971690'>to</span> <span m='971850'>be</span>
  <span m='972280'>the</span> <span m='972460'>minimum</span> <span
  m='975640'>over</span> <span m='978680'>all</span> <span m='979000'>the</span>
  <span m='979100'>paths</span> <span m='981050'>W</span> <span
  m='981515'>p,</span> <span m='984100'>such</span> <span m='984430'>that</span>
  <span m='987330'>p</span> <span m='987770'>is</span> <span
  m='987880'>in</span> <span m='988000'>fact</span> <span m='988260'>the</span>
  <span m='988360'>path</span> <span m='988690'>from</span> <span
  m='988900'>u</span> <span m='989070'>to</span> <span m='989150'>v.</span>
  <span m='990730'>And</span> <span m='990950'>this</span> <span
  m='991130'>is</span> <span m='991260'>the</span> <span m='991360'>case</span>
  <span m='992930'>where</span> <span m='993230'>if</span> <span
  m='994230'>there</span> <span m='994460'>exists</span> <span
  m='995670'>any</span> <span m='995900'>such</span> <span
  m='996210'>path,</span> <span m='1000490'>and</span> <span
  m='1000730'>the</span> <span m='1000790'>last</span> <span
  m='1001140'>thing</span> <span m='1001400'>is</span> <span
  m='1002210'>you</span> <span m='1002310'>want</span> <span
  m='1002520'>this</span> <span m='1002680'>to</span> <span
  m='1002760'>be</span> <span m='1002890'>infinity,</span> <span
  m='1004920'>the</span> <span m='1005020'>weight</span> <span
  m='1005190'>to</span> <span m='1005290'>be</span> <span
  m='1005400'>infinity</span> <span m='1006860'>otherwise.</span> <span
  m='1011290'>So</span> <span m='1012220'>if</span> <span
  m='1012370'>you're</span> <span m='1012500'>only</span> <span
  m='1012660'>talking</span> <span m='1012860'>about</span> <span
  m='1013050'>roads</span> <span m='1014900'>going</span> <span
  m='1015140'>from</span> <span m='1015290'>here</span> <span
  m='1015500'>to</span> <span m='1015600'>Tokyo,</span> <span
  m='1016490'>should</span> <span m='1016680'>have</span> <span
  m='1016810'>length</span> <span m='1017050'>infinity.</span> <span
  m='1019540'>A</span> <span m='1020030'>little</span> <span
  m='1020250'>matter</span> <span m='1020460'>of</span> <span
  m='1020530'>the</span> <span m='1020610'>Pacific</span> <span
  m='1021010'>Ocean</span> <span m='1021320'>in</span> <span
  m='1021400'>between.</span> </p><p><span m='1024099'>So</span> <span
  m='1024230'>that's</span> <span m='1025010'>the</span> <span
  m='1025119'>set</span> <span m='1025310'>up</span> <span m='1025540'>in</span>
  <span m='1025700'>terms</span> <span m='1026020'>of</span> <span
  m='1028460'>the</span> <span m='1028609'>numbers</span> <span
  m='1028970'>that</span> <span m='1029089'>we</span> <span
  m='1029200'>want</span> <span m='1029349'>to</span> <span
  m='1029400'>see.</span> <span m='1031040'>If</span> <span
  m='1031200'>you're</span> <span m='1031310'>starting</span> <span
  m='1031690'>from</span> <span m='1031790'>a</span> <span
  m='1031900'>particular</span> <span m='1032220'>point,</span> <span
  m='1033800'>you</span> <span m='1033869'>can</span> <span
  m='1033990'>think</span> <span m='1034200'>of</span> <span
  m='1035890'>the</span> <span m='1036300'>shortest</span> <span
  m='1036680'>path</span> <span m='1036960'>length</span> <span
  m='1037670'>from</span> <span m='1037900'>your</span> <span
  m='1038060'>source</span> <span m='1038720'>as</span> <span
  m='1038910'>being</span> <span m='1039130'>a</span> <span
  m='1039170'>0.</span> <span m='1040240'>Initially,</span> <span
  m='1040980'>everything</span> <span m='1041359'>is</span> <span
  m='1041460'>infinity</span> <span m='1042150'>because you</span> <span
  m='1042650'>haven't</span> <span m='1042880'>found</span> <span
  m='1043200'>any</span> <span m='1043380'>paths</span> <span
  m='1043760'>yet.</span> <span m='1044790'>And</span> <span
  m='1045680'>what</span> <span m='1045849'>you're</span> <span
  m='1045960'>going</span> <span m='1046130'>to</span> <span
  m='1046220'>do</span> <span m='1046480'>is</span> <span m='1046819'>try</span>
  <span m='1047079'>and</span> <span m='1047200'>reduce</span> <span
  m='1047660'>these</span> <span m='1047869'>infinities</span> <span
  m='1048450'>down</span> <span m='1050000'>for</span> <span
  m='1050230'>all</span> <span m='1050560'>of</span> <span
  m='1050680'>the</span> <span m='1051290'>vertices</span> <span
  m='1051820'>that</span> <span m='1051970'>are</span> <span
  m='1052090'>reachable</span> <span m='1052600'>from</span> <span
  m='1052780'>the</span> <span m='1052870'>source</span> <span
  m='1053160'>vertex.</span> </p><p><span m='1054040'>And</span> <span
  m='1054150'>it's</span> <span m='1054250'>quite</span> <span
  m='1054470'>possible</span> <span m='1054930'>that</span> <span
  m='1055420'>you</span> <span m='1055510'>may</span> <span
  m='1055590'>be</span> <span m='1055720'>given</span> <span
  m='1055930'>a</span> <span m='1056000'>graph</span> <span
  m='1056400'>where</span> <span m='1057580'>a</span> <span
  m='1057690'>particular</span> <span m='1058190'>vertices,</span> <span
  m='1058810'>or</span> <span m='1059580'>in</span> <span
  m='1060070'>your</span> <span m='1060260'>set</span> <span
  m='1060740'>V,</span> <span m='1061350'>that</span> <span
  m='1061540'>can't</span> <span m='1061810'>be</span> <span
  m='1061950'>reached</span> <span m='1062260'>from</span> <span
  m='1062420'>the</span> <span m='1062720'>particular</span> <span
  m='1063160'>source</span> <span m='1064030'>that</span> <span
  m='1064160'>you</span> <span m='1064260'>started</span> <span
  m='1064640'>with.</span> <span m='1065290'>And</span> <span
  m='1065730'>for</span> <span m='1065870'>those</span> <span
  m='1066110'>vertices,</span> <span m='1067620'>you're</span> <span
  m='1067680'>going</span> <span m='1067820'>to</span> <span
  m='1067870'>have</span> <span m='1068920'>your</span> <span
  m='1069410'>delta</span> <span m='1070430'>u,</span> <span
  m='1070650'>v.</span> <span m='1071060'>If</span> <span m='1071280'>v</span>
  <span m='1071480'>is</span> <span m='1071610'>unreachable</span> <span
  m='1072200'>from</span> <span m='1072390'>you,</span> <span
  m='1073190'>it</span> <span m='1073490'>will</span> <span
  m='1073620'>stay</span> <span m='1073880'>at</span> <span
  m='1074080'>infinity.</span> </p><p><span m='1076650'>So</span> <span
  m='1077400'>let's</span> <span m='1077610'>look</span> <span
  m='1077760'>at</span> <span m='1077800'>an</span> <span
  m='1077900'>example.</span> <span m='1083710'>Let's</span> <span
  m='1083830'>take--</span> <span m='1090460'>it's</span> <span
  m='1090610'>going</span> <span m='1090730'>to</span> <span
  m='1090790'>be</span> <span m='1090900'>an</span> <span
  m='1090940'>iterative</span> <span m='1091380'>process</span> <span
  m='1091900'>here</span> <span m='1092980'>of</span> <span
  m='1096350'>finding</span> <span m='1097140'>the</span> <span
  m='1097310'>shortest</span> <span m='1097700'>paths.</span> <span
  m='1098150'>And</span> <span m='1098290'>so</span> <span
  m='1098400'>let's</span> <span m='1098600'>take</span> <span
  m='1099030'>an</span> <span m='1099130'>example</span> <span
  m='1101920'>that</span> <span m='1102100'>corresponds</span> <span
  m='1102630'>to</span> <span m='1102920'>a</span> <span
  m='1103210'>fairly</span> <span m='1106860'>complex</span> <span
  m='1107390'>graph,</span> <span m='1107770'>or at</span> <span
  m='1108070'>least</span> <span m='1108180'>a</span> <span
  m='1108230'>nontrivial</span> <span m='1108810'>one,</span> <span
  m='1109770'>where</span> <span m='1110110'>that's</span> <span
  m='1110420'>my</span> <span m='1110560'>source</span> <span
  m='1110860'>vertex.</span> <span m='1111330'>And</span> <span
  m='1111440'>I've</span> <span m='1111520'>labeled</span> <span
  m='1111830'>these</span> <span m='1112000'>other</span> <span
  m='1112170'>vertices</span> <span m='1113830'>A</span> <span
  m='1114010'>through</span> <span m='1114280'>F.</span> <span
  m='1115420'>And</span> <span m='1115830'>I</span> <span
  m='1115870'>have</span> <span m='1116020'>a</span> <span
  m='1116080'>bunch</span> <span m='1116320'>of</span> <span
  m='1116430'>edges.</span> <span m='1124930'>5.</span> </p><p><span
  m='1146130'>I</span> <span m='1146380'>got</span> <span m='1146480'>one</span>
  <span m='1146630'>more</span> <span m='1146860'>here.</span> <span
  m='1150230'>So</span> <span m='1150360'>that's</span> <span
  m='1150520'>what's</span> <span m='1150700'>given</span> <span
  m='1150910'>to</span> <span m='1151000'>me.</span> <span
  m='1151640'>And</span> <span m='1152040'>I</span> <span
  m='1152070'>want</span> <span m='1152230'>to</span> <span
  m='1152290'>find</span> <span m='1153950'>delta</span> <span
  m='1155510'>S</span> <span m='1156850'>plugged</span> <span
  m='1157440'>in</span> <span m='1157560'>for</span> <span m='1157710'>u.</span>
  <span m='1158720'>And</span> <span m='1160200'>A,</span> <span
  m='1160665'>B,</span> <span m='1161595'>D,</span> <span m='1162060'>et
  cetera</span> <span m='1162530'>plugged</span> <span m='1162810'>in</span>
  <span m='1162920'>for</span> <span m='1163090'>V</span> <span
  m='1163940'>for</span> <span m='1164270'>this</span> <span
  m='1164510'>graph.</span> </p><p><span m='1165390'>And</span> <span
  m='1165980'>let's</span> <span m='1166940'>just</span> <span
  m='1167120'>do</span> <span m='1167280'>this</span> <span
  m='1168710'>manually</span> <span m='1169430'>if</span> <span
  m='1169530'>you</span> <span m='1169650'>will.</span> <span
  m='1170850'>And</span> <span m='1171250'>just</span> <span
  m='1171490'>trying</span> <span m='1171910'>to</span> <span
  m='1172850'>do</span> <span m='1173010'>some</span> <span
  m='1173250'>kind</span> <span m='1173660'>of</span> <span
  m='1173930'>breadth</span> <span m='1174410'>first</span> <span
  m='1174700'>search.</span> <span m='1175330'>And we</span> <span
  m='1175520'>do</span> <span m='1175630'>know</span> <span
  m='1175830'>breadth</span> <span m='1176070'>first</span> <span
  m='1176310'>search.</span> <span m='1176610'>We know</span> <span
  m='1176850'>depth</span> <span m='1177070'>first</span> <span
  m='1177310'>search.</span> <span m='1178060'>You</span> <span
  m='1178160'>can</span> <span m='1178250'>imagine</span> <span
  m='1179140'>trying</span> <span m='1179490'>to</span> <span
  m='1180220'>use</span> <span m='1181380'>those</span> <span
  m='1181810'>notions</span> <span m='1182880'>to</span> <span
  m='1183020'>try</span> <span m='1183270'>and</span> <span
  m='1183410'>find</span> <span m='1185580'>the</span> <span
  m='1185730'>shortest</span> <span m='1186030'>paths</span> <span
  m='1186310'>here.</span> </p><p><span m='1187020'>So</span> <span
  m='1187930'>now</span> <span m='1188040'>we</span> <span m='1188120'>have
  to</span> <span m='1188220'>prove</span> <span m='1188560'>afterwards</span>
  <span m='1189150'>when</span> <span m='1189310'>we</span> <span
  m='1189440'>are</span> <span m='1189550'>done</span> <span
  m='1189830'>that</span> <span m='1190100'>these</span> <span
  m='1190340'>are,</span> <span m='1190410'>in</span> <span
  m='1190500'>fact,</span> <span m='1190720'>the</span> <span
  m='1190790'>shortest</span> <span m='1191090'>paths.</span> <span
  m='1191370'>And</span> <span m='1191460'>that's</span> <span
  m='1191610'>the</span> <span m='1191700'>hard</span> <span
  m='1191890'>part</span> <span m='1192070'>of</span> <span
  m='1192190'>it.</span> <span m='1192720'>But</span> <span m='1192940'>we
  can</span> <span m='1193200'>certainly</span> <span m='1193410'>try</span>
  <span m='1193670'>and</span> <span m='1193820'>fill</span> <span
  m='1194080'>in</span> <span m='1195700'>some</span> <span
  m='1196000'>numbers</span> <span m='1196380'>associated</span> <span
  m='1196860'>with</span> <span m='1197010'>paths that</span> <span
  m='1197400'>we</span> <span m='1197490'>do</span> <span
  m='1197620'>know</span> <span m='1197790'>about.</span> </p><p><span
  m='1198620'>So</span> <span m='1199720'>I'm</span> <span
  m='1199860'>going</span> <span m='1199960'>to</span> <span
  m='1200020'>say</span> <span m='1200240'>that</span> <span
  m='1201480'>the</span> <span m='1202150'>numbers</span> <span m='1202570'>that
  are</span> <span m='1202700'>inside</span> <span m='1204340'>each</span> <span
  m='1204570'>of</span> <span m='1204690'>these</span> <span
  m='1205090'>vertices--</span> <span m='1205670'>d</span> <span
  m='1206050'>of</span> <span m='1206940'>u</span> <span m='1208210'>is</span>
  <span m='1208390'>the</span> <span m='1208510'>current</span> <span
  m='1211040'>weight.</span> <span m='1214090'>And</span> <span
  m='1214270'>so</span> <span m='1214340'>initially,</span> <span
  m='1214830'>I'm</span> <span m='1214910'>going</span> <span
  m='1215020'>to</span> <span m='1215060'>start</span> <span
  m='1215410'>with</span> <span m='1216060'>D</span> <span m='1216530'>of</span>
  <span m='1216880'>S</span> <span m='1217160'>being</span> <span
  m='1217390'>0,</span> <span m='1217890'>because</span> <span
  m='1218990'>that's</span> <span m='1219210'>a</span> <span
  m='1219270'>source.</span> <span m='1220000'>And</span> <span
  m='1220220'>all</span> <span m='1220390'>of</span> <span
  m='1220470'>these</span> <span m='1220610'>other</span> <span
  m='1220780'>ones</span> <span m='1221050'>are</span> <span
  m='1221120'>going</span> <span m='1221240'>to</span> <span
  m='1221280'>have--</span> <span m='1221780'>I'm</span> <span
  m='1221930'>not</span> <span m='1221950'>going to</span> <span
  m='1222070'>write</span> <span m='1222280'>this</span> <span
  m='1222420'>down--</span> <span m='1222730'>but</span> <span
  m='1223020'>they're</span> <span m='1223210'>going</span> <span
  m='1223300'>to</span> <span m='1223340'>have</span> <span
  m='1223500'>infinity</span> <span m='1224380'>for</span> <span
  m='1224540'>their</span> <span m='1225760'>D</span> <span
  m='1226080'>of</span> <span m='1226360'>Vs.</span> </p><p><span
  m='1226940'>So</span> <span m='1227250'>D of</span> <span m='1227510'>A</span>
  <span m='1227650'>is</span> <span m='1227770'>infinity.</span> <span
  m='1228350'>Do of B</span> <span m='1228830'>is</span> <span
  m='1228930'>infinity,</span> <span m='1229790'>et</span> <span
  m='1229970'>cetera.</span> <span m='1231210'>And</span> <span
  m='1231480'>what</span> <span m='1231600'>I</span> <span
  m='1231620'>want</span> <span m='1231790'>to</span> <span
  m='1231850'>do</span> <span m='1231990'>is</span> <span
  m='1232170'>decrease</span> <span m='1232750'>this</span> <span
  m='1233210'>D</span> <span m='1233440'>number</span> <span
  m='1234500'>to</span> <span m='1234620'>the</span> <span
  m='1234710'>point</span> <span m='1235060'>where</span> <span
  m='1235890'>I'm</span> <span m='1236060'>confident</span> <span
  m='1236720'>that</span> <span m='1236970'>all</span> <span
  m='1237220'>of</span> <span m='1237330'>the D</span> <span
  m='1237440'>numbers</span> <span m='1238080'>that</span> <span
  m='1238200'>are</span> <span m='1238270'>inside</span> <span
  m='1238760'>these</span> <span m='1238950'>vertices,</span> <span
  m='1239960'>these</span> <span m='1240090'>are</span> <span
  m='1240160'>the</span> <span m='1240250'>current</span> <span
  m='1240590'>weights,</span> <span m='1241230'>or</span> <span
  m='1241910'>end</span> <span m='1242120'>up</span> <span
  m='1242590'>being</span> <span m='1242770'>the</span> <span
  m='1242870'>delta</span> <span m='1243160'>numbers.</span> <span
  m='1244310'>So</span> <span m='1244360'>my</span> <span
  m='1244480'>algorithm</span> <span m='1244850'>is</span> <span
  m='1245000'>done</span> <span m='1245750'>when</span> <span
  m='1246210'>my</span> <span m='1246380'>d</span> <span
  m='1246570'>numbers</span> <span m='1247420'>shrink</span> <span
  m='1247800'>down.</span> <span m='1248520'>And</span> <span
  m='1248640'>I</span> <span m='1248690'>got</span> <span m='1249430'>the</span>
  <span m='1249660'>delta</span> <span m='1250030'>values,</span> <span
  m='1250490'>the</span> <span m='1250580'>correct</span> <span
  m='1250880'>delta</span> <span m='1251070'>values.</span> </p><p><span
  m='1252810'>But</span> <span m='1253160'>if</span> <span m='1253320'>I</span>
  <span m='1253610'>wanted</span> <span m='1253820'>to</span> <span
  m='1253980'>do</span> <span m='1254100'>this,</span> <span
  m='1256150'>sort</span> <span m='1256300'>of</span> <span m='1256390'>a</span>
  <span m='1256800'>seat</span> <span m='1257000'>of</span> <span
  m='1257080'>the</span> <span m='1257170'>pants</span> <span
  m='1257500'>approach,</span> <span m='1257990'>just</span> <span
  m='1258840'>go</span> <span m='1258970'>off</span> <span
  m='1259300'>and</span> <span m='1260270'>try</span> <span
  m='1260510'>and</span> <span m='1260700'>iteratively</span> <span
  m='1260920'>reduce</span> <span m='1261510'>these</span> <span
  m='1261700'>numbers,</span> <span m='1262030'>you</span> <span
  m='1262120'>say,</span> <span m='1262280'>well,</span> <span
  m='1262490'>this</span> <span m='1262620'>one</span> <span
  m='1262770'>was</span> <span m='1262910'>infinity.</span> <span
  m='1263860'>But</span> <span m='1264010'>clearly,</span> <span
  m='1264670'>if</span> <span m='1264780'>I</span> <span
  m='1264850'>start</span> <span m='1265150'>from</span> <span
  m='1265330'>S</span> <span m='1265710'>and I</span> <span
  m='1265780'>follow</span> <span m='1267240'>the</span> <span m='1267480'>edges
  in</span> <span m='1267980'>S,</span> <span m='1268690'>I'm</span> <span
  m='1268840'>going</span> <span m='1268950'>to</span> <span
  m='1268990'>be</span> <span m='1269060'>able</span> <span
  m='1269180'>to</span> <span m='1269240'>mark</span> <span
  m='1269510'>this</span> <span m='1269710'>as</span> <span m='1269820'>a</span>
  <span m='1269890'>one.</span> <span m='1271980'>And</span> <span
  m='1272300'>similarly</span> <span m='1272680'>here,</span> <span
  m='1272990'>I'm</span> <span m='1273070'>going</span> <span
  m='1273160'>to</span> <span m='1273200'>be</span> <span
  m='1273260'>able</span> <span m='1273380'>to</span> <span
  m='1273440'>mark</span> <span m='1273650'>this</span> <span
  m='1273810'>as</span> <span m='1273960'>a</span> <span m='1274040'>2.</span>
  </p><p><span m='1275630'>Now,</span> <span m='1275985'>I</span> <span
  m='1276340'>could</span> <span m='1276510'>arbitrarily</span> <span
  m='1277870'>pick</span> <span m='1278920'>this</span> <span
  m='1279520'>one</span> <span m='1279860'>here</span> <span
  m='1281000'>and</span> <span m='1282110'>this</span> <span
  m='1282320'>A</span> <span m='1283040'>vertex,</span> <span
  m='1283290'>and</span> <span m='1283380'>then</span> <span
  m='1283490'>start</span> <span m='1283870'>looking</span> <span
  m='1284200'>at</span> <span m='1285000'>the</span> <span
  m='1285120'>edges</span> <span m='1285500'>that</span> <span
  m='1285860'>emanate</span> <span m='1286310'>from</span> <span
  m='1286590'>the</span> <span m='1286990'>A</span> <span
  m='1287150'>vertex.</span> <span m='1288090'>And</span> <span
  m='1288420'>I</span> <span m='1288480'>could</span> <span
  m='1288620'>go</span> <span m='1288730'>off</span> <span
  m='1289060'>and</span> <span m='1291270'>mark</span> <span
  m='1291620'>this</span> <span m='1291910'>as</span> <span
  m='1293860'>6,</span> <span m='1294990'>for</span> <span
  m='1295150'>example.</span> <span m='1296470'>And</span> <span
  m='1297100'>if</span> <span m='1297260'>I</span> <span
  m='1297380'>start</span> <span m='1297670'>from</span> <span
  m='1297840'>here,</span> <span m='1298150'>I'd</span> <span
  m='1298250'>mark</span> <span m='1298440'>this</span> <span
  m='1298690'>as</span> <span m='1299720'>3.</span> </p><p><span
  m='1302380'>Now,</span> <span m='1303110'>is</span> <span
  m='1303280'>it</span> <span m='1303370'>in</span> <span
  m='1303490'>fact</span> <span m='1303810'>true</span> <span
  m='1305690'>that</span> <span m='1306060'>6</span> <span
  m='1306670'>equals</span> <span m='1308570'>delta</span> <span
  m='1309900'>S</span> <span m='1310490'>comma</span> <span m='1310820'>C</span>
  <span m='1311880'>equals</span> <span m='1312400'>6?</span> <span
  m='1314670'>No.</span> <span m='1316100'>What</span> <span
  m='1316660'>is</span> <span m='1316780'>in</span> <span
  m='1316890'>fact--</span> <span m='1317970'>is</span> <span
  m='1318080'>there</span> <span m='1318190'>a</span> <span
  m='1318240'>better</span> <span m='1318460'>way</span> <span
  m='1318680'>of</span> <span m='1318790'>getting</span> <span
  m='1319060'>to</span> <span m='1319180'>C?</span> <span m='1320550'>And</span>
  <span m='1320700'>what</span> <span m='1321250'>is</span> <span
  m='1321320'>the</span> <span m='1321400'>weight</span> <span
  m='1321600'>of</span> <span m='1321700'>that?</span> <span
  m='1322780'>What</span> <span m='1323580'>vertex</span> <span
  m='1323780'>do</span> <span m='1323860'>I</span> <span m='1323940'>have</span>
  <span m='1324050'>to</span> <span m='1324100'>go</span> <span
  m='1324260'>through?</span> </p><p><span m='1326594'>I mean,</span> <span
  m='1327080'>one</span> <span m='1327550'>way</span> <span
  m='1327790'>is</span> <span m='1328050'>to</span> <span m='1328170'>go</span>
  <span m='1330760'>from</span> <span m='1331010'>S</span> <span
  m='1331510'>to</span> <span m='1331650'>B</span> <span m='1332620'>to</span>
  <span m='1334270'>D</span> <span m='1337610'>to</span> <span
  m='1337830'>C,</span> <span m='1338030'>right?</span> <span
  m='1339180'>And</span> <span m='1339340'>that</span> <span
  m='1339460'>would</span> <span m='1339590'>give</span> <span
  m='1339710'>me</span> <span m='1340470'>5</span> <span
  m='1341090'>right?</span> <span m='1341520'>So</span> <span
  m='1341760'>that's</span> <span m='1341990'>5.</span> <span m='1343280'>Can
  I</span> <span m='1343410'>do</span> <span m='1343550'>better</span> <span
  m='1343740'>than</span> <span m='1343970'>5?</span> <span
  m='1346530'>Not</span> <span m='1346700'>in this</span> <span
  m='1346970'>graph.</span> <span m='1347770'>OK</span> </p><p><span
  m='1348930'>So</span> <span m='1350160'>it's</span> <span
  m='1350360'>not</span> <span m='1350610'>the</span> <span
  m='1350710'>case</span> <span m='1351780'>that</span> <span
  m='1352420'>the</span> <span m='1352770'>shortest</span> <span
  m='1353460'>length</span> <span m='1353940'>path</span> <span
  m='1355990'>gave</span> <span m='1356300'>you</span> <span
  m='1356680'>the</span> <span m='1359050'>smallest</span> <span
  m='1359460'>weight.</span> <span m='1360980'>I</span> <span
  m='1361050'>mean,</span> <span m='1361190'>that</span> <span
  m='1361230'>was</span> <span m='1361380'>one</span> <span
  m='1361540'>example</span> <span m='1361930'>of</span> <span
  m='1362000'>that.</span> <span m='1362600'>And</span> <span
  m='1362630'>I</span> <span m='1362680'>can</span> <span m='1362810'>go</span>
  <span m='1362980'>on</span> <span m='1363200'>an</span> <span
  m='1363430'>and</span> <span m='1363820'>bore</span> <span
  m='1364010'>you</span> <span m='1364150'>with</span> <span
  m='1364340'>filling</span> <span m='1364600'>in</span> <span
  m='1364690'>all</span> <span m='1364810'>of</span> <span
  m='1364860'>these</span> <span m='1365050'>numbers.</span> <span
  m='1365930'>But</span> <span m='1366090'>you</span> <span
  m='1366200'>can</span> <span m='1366290'>do</span> <span
  m='1366380'>that</span> <span m='1366550'>on</span> <span
  m='1366650'>your</span> <span m='1366840'>own.</span> <span
  m='1367980'>And</span> <span m='1368370'>it's</span> <span
  m='1368740'>really</span> <span m='1368900'>not</span> <span
  m='1369500'>particularly</span> <span m='1371090'>edifying</span> <span
  m='1371610'>to</span> <span m='1371710'>do</span> <span
  m='1371820'>that.</span> </p><p><span m='1373020'>But</span> <span
  m='1373270'>you</span> <span m='1373360'>get</span> <span m='1373480'>a</span>
  <span m='1373530'>sense</span> <span m='1373920'>of</span> <span
  m='1375140'>what</span> <span m='1375390'>you</span> <span
  m='1375480'>need</span> <span m='1375660'>to</span> <span
  m='1375710'>be</span> <span m='1375820'>able</span> <span
  m='1375980'>to</span> <span m='1376090'>do</span> <span m='1377270'>in</span>
  <span m='1377440'>order</span> <span m='1377650'>to</span> <span
  m='1377820'>converge</span> <span m='1378340'>on</span> <span
  m='1378520'>the</span> <span m='1378610'>delta.</span> <span
  m='1379430'>And</span> <span m='1379550'>it</span> <span
  m='1379620'>might</span> <span m='1379910'>take</span> <span
  m='1380610'>some</span> <span m='1380910'>doing.</span> <span
  m='1381600'>Because</span> <span m='1381850'>you</span> <span
  m='1381940'>have</span> <span m='1382080'>to</span> <span
  m='1382180'>somehow</span> <span m='1383320'>enumerate</span> <span
  m='1384860'>in</span> <span m='1385050'>an</span> <span
  m='1385160'>implicit</span> <span m='1385610'>way--</span> <span
  m='1386170'>you</span> <span m='1386270'>can't do it in</span> <span
  m='1386670'>an</span> <span m='1386830'>explicit</span> <span
  m='1387270'>way,</span> <span m='1387460'>because</span> <span
  m='1387700'>then</span> <span m='1387850'>there'd</span> <span
  m='1388020'>be</span> <span m='1388670'>an</span> <span
  m='1388770'>exponential</span> <span m='1389310'>number</span> <span
  m='1389530'>of</span> <span m='1389590'>paths.</span> <span
  m='1390370'>But</span> <span m='1390520'>you'd</span> <span
  m='1390640'>have</span> <span m='1390800'>to</span> <span
  m='1391300'>implicitly</span> <span m='1391930'>enumerate</span> <span
  m='1392670'>all</span> <span m='1392910'>the</span> <span
  m='1393010'>different</span> <span m='1393360'>ways</span> <span
  m='1394180'>that</span> <span m='1394310'>you</span> <span
  m='1394420'>can</span> <span m='1394560'>possibly</span> <span
  m='1395040'>get</span> <span m='1395320'>to</span> <span m='1395430'>a</span>
  <span m='1395480'>vertex</span> <span m='1396480'>and</span> <span
  m='1397400'>discover</span> <span m='1399030'>the</span> <span
  m='1399180'>shortest</span> <span m='1399530'>path</span> <span
  m='1400220'>through</span> <span m='1400390'>that</span> <span
  m='1400580'>process,</span> <span m='1401790'>all right.</span> <span
  m='1402490'>And</span> <span m='1402850'>so</span> <span m='1402990'>we</span>
  <span m='1403100'>have</span> <span m='1403260'>to</span> <span
  m='1403530'>be</span> <span m='1403680'>able</span> <span
  m='1403800'>to</span> <span m='1403890'>do</span> <span
  m='1403990'>that</span> <span m='1404240'>in</span> <span
  m='1404350'>these</span> <span m='1404480'>shortest</span> <span
  m='1404840'>path</span> <span m='1405080'>algorithms.</span> </p><p><span
  m='1406510'>And</span> <span m='1406650'>this</span> <span
  m='1406790'>is</span> <span m='1406930'>a</span> <span
  m='1407020'>simple</span> <span m='1407390'>graph</span> <span
  m='1408330'>that</span> <span m='1409400'>has</span> <span
  m='1410100'>positive</span> <span m='1410540'>weights,</span> <span
  m='1411290'>non-negative</span> <span m='1411790'>weights</span> <span
  m='1412170'>with</span> <span m='1412330'>edges.</span> <span
  m='1414160'>It</span> <span m='1414390'>gets</span> <span
  m='1414600'>more</span> <span m='1414800'>complicated</span> <span
  m='1416280'>when</span> <span m='1416880'>you</span> <span
  m='1416970'>have</span> <span m='1417190'>negative</span> <span
  m='1417510'>weights.</span> <span m='1418730'>But</span> <span
  m='1418880'>before</span> <span m='1419080'>I</span> <span
  m='1419130'>get</span> <span m='1419310'>to</span> <span
  m='1419390'>that,</span> <span m='1419820'>there's</span> <span
  m='1420030'>one</span> <span m='1420240'>other</span> <span
  m='1420420'>thing</span> <span m='1420640'>that</span> <span
  m='1422040'>I</span> <span m='1422070'>want</span> <span m='1422220'>to</span>
  <span m='1422270'>talk</span> <span m='1422430'>about</span> <span
  m='1422640'>here</span> <span m='1423010'>with</span> <span
  m='1423150'>respect</span> <span m='1423490'>to</span> <span
  m='1424310'>discovering</span> <span m='1424890'>the</span> <span
  m='1424990'>actual</span> <span m='1425510'>path.</span> </p><p><span
  m='1426900'>So</span> <span m='1427060'>what</span> <span
  m='1427280'>we</span> <span m='1427430'>did</span> <span
  m='1427620'>here</span> <span m='1428000'>was</span> <span
  m='1428560'>we</span> <span m='1428820'>had</span> <span
  m='1429230'>delta</span> <span m='1429550'>u,</span> <span
  m='1429935'>v</span> <span m='1430710'>that</span> <span
  m='1431000'>corresponded</span> <span m='1431580'>to</span> <span
  m='1433470'>the</span> <span m='1433790'>weight</span> <span
  m='1434230'>of</span> <span m='1434350'>the</span> <span
  m='1434420'>shortest</span> <span m='1434870'>path.</span> <span
  m='1435890'>But</span> <span m='1436400'>if</span> <span
  m='1436520'>you</span> <span m='1436650'>want</span> <span
  m='1437530'>the</span> <span m='1437700'>path</span> <span
  m='1438120'>itself,</span> <span m='1439940'>we</span> <span
  m='1440080'>need</span> <span m='1440260'>to</span> <span
  m='1440330'>have</span> <span m='1440550'>a</span> <span
  m='1440620'>way</span> <span m='1441090'>of</span> <span
  m='1442150'>finding</span> <span m='1442660'>the</span> <span
  m='1442770'>sequence</span> <span m='1443220'>of</span> <span
  m='1443310'>vertices</span> <span m='1443940'>that</span> <span
  m='1444090'>corresponds</span> <span m='1444640'>to</span> <span
  m='1444780'>the</span> <span m='1446840'>minimum</span> <span
  m='1447190'>weight</span> <span m='1447510'>path.</span> <span
  m='1448310'>And</span> <span m='1448580'>in</span> <span
  m='1448850'>particular,</span> <span m='1449730'>we're</span> <span
  m='1449830'>going</span> <span m='1449880'>to</span> <span
  m='1449920'>have</span> <span m='1450240'>to</span> <span
  m='1450480'>define</span> <span m='1451850'>what</span> <span
  m='1452140'>we</span> <span m='1452240'>call</span> <span
  m='1452510'>the</span> <span m='1453000'>predecessor</span> <span
  m='1453580'>relationship.</span> </p><p><span m='1456290'>And</span> <span
  m='1457950'>so</span> <span m='1458610'>what</span> <span m='1458780'>I</span>
  <span m='1458850'>have</span> <span m='1459150'>is</span> <span
  m='1460310'>d</span> <span m='1460710'>of</span> <span m='1460900'>V</span>
  <span m='1462220'>is</span> <span m='1462680'>the</span> <span
  m='1464820'>value</span> <span m='1465270'>inside</span> <span
  m='1465660'>the</span> <span m='1465740'>circle,</span> <span
  m='1470150'>which</span> <span m='1470300'>is</span> <span
  m='1470380'>the</span> <span m='1470460'>current</span> <span
  m='1470820'>weight.</span> <span m='1474890'>And</span> <span
  m='1475290'>as</span> <span m='1476145'>d</span> <span m='1476490'>is</span>
  <span m='1476950'>something</span> <span m='1477390'>you're very</span> <span
  m='1477600'>interested</span> <span m='1477950'>in,</span> <span
  m='1478400'>eventually you</span> <span m='1478720'>want</span> <span
  m='1479220'>it</span> <span m='1479380'>to</span> <span m='1479450'>go</span>
  <span m='1479600'>to</span> <span m='1479700'>delta.</span> <span
  m='1480270'>The</span> <span m='1480520'>other</span> <span
  m='1480810'>thing</span> <span m='1480950'>that</span> <span
  m='1481080'>you're</span> <span m='1481180'>very</span> <span
  m='1481380'>interested</span> <span m='1481760'>in--</span> <span
  m='1482330'>and</span> <span m='1482450'>this</span> <span
  m='1482570'>is</span> <span m='1483280'>really</span> <span
  m='1483510'>a</span> <span m='1483660'>fairly</span> <span
  m='1483930'>straightforward</span> <span m='1484400'>data</span> <span
  m='1484600'>structure</span> <span m='1485950'>corresponding</span> <span
  m='1486450'>to</span> <span m='1487870'>just</span> <span
  m='1488030'>the</span> <span m='1488120'>d</span> <span
  m='1488300'>number</span> <span m='1488720'>and</span> <span
  m='1489080'>this</span> <span m='1489390'>predecessor</span> <span
  m='1490050'>number.</span> <span m='1490910'>And</span> <span
  m='1492160'>pi</span> <span m='1492500'>of</span> <span m='1492650'>V</span>
  <span m='1493730'>is</span> <span m='1493970'>the</span> <span
  m='1495580'>predecessor</span> <span m='1497570'>vertex</span> <span
  m='1500530'>on</span> <span m='1500740'>the</span> <span
  m='1500830'>best</span> <span m='1501220'>path</span> <span
  m='1504570'>to</span> <span m='1504690'>V.</span> <span m='1506820'>And</span>
  <span m='1507290'>you</span> <span m='1507420'>said,</span> <span
  m='1507850'>pi</span> <span m='1508040'>of</span> <span m='1508170'>S</span>
  <span m='1509690'>equals</span> <span m='1509990'>NIL.</span> </p><p><span
  m='1513490'>And</span> <span m='1513670'>then</span> <span
  m='1513820'>you</span> <span m='1513920'>can</span> <span
  m='1514010'>think</span> <span m='1514120'>of</span> <span
  m='1514190'>this</span> <span m='1514670'>as</span> <span
  m='1515280'>this</span> <span m='1515480'>is</span> <span
  m='1515590'>eventually</span> <span m='1515950'>what</span> <span
  m='1516170'>we</span> <span m='1516280'>want,</span> <span
  m='1517330'>and</span> <span m='1517510'>this</span> <span
  m='1517690'>gets</span> <span m='1518630'>modified</span> <span
  m='1519090'>as</span> <span m='1519220'>well.</span> <span
  m='1520600'>So</span> <span m='1521420'>right</span> <span
  m='1521610'>now,</span> <span m='1522370'>when</span> <span
  m='1522770'>you're</span> <span m='1522960'>working</span> <span
  m='1524070'>and</span> <span m='1524520'>trying</span> <span
  m='1524720'>to</span> <span m='1524780'>find</span> <span
  m='1525130'>the</span> <span m='1525210'>path,</span> <span
  m='1525980'>you</span> <span m='1526110'>have</span> <span
  m='1526340'>some</span> <span m='1526550'>particular</span> <span
  m='1526970'>path</span> <span m='1527320'>that</span> <span
  m='1527420'>happens</span> <span m='1527720'>to</span> <span
  m='1527770'>be</span> <span m='1527850'>the</span> <span
  m='1527980'>current</span> <span m='1528390'>best</span> <span
  m='1528670'>path.</span> <span m='1529500'>And</span> <span
  m='1529910'>that's</span> <span m='1530230'>a</span> <span
  m='1530280'>sequence</span> <span m='1530770'>of</span> <span
  m='1531390'>vertices</span> <span m='1531930'>that</span> <span
  m='1532080'>you</span> <span m='1532220'>can</span> <span
  m='1532400'>get</span> <span m='1533060'>by</span> <span
  m='1533350'>following</span> <span m='1533790'>the</span> <span
  m='1533880'>predecessors.</span> </p><p><span m='1534550'>So</span> <span
  m='1534790'>once</span> <span m='1535090'>you're</span> <span
  m='1535380'>at</span> <span m='1536030'>a</span> <span
  m='1536140'>particular</span> <span m='1536560'>vertex</span> <span
  m='1537630'>E,</span> <span m='1538330'>you</span> <span
  m='1538460'>say</span> <span m='1539660'>all</span> <span
  m='1539760'>right,</span> <span m='1540250'>right</span> <span
  m='1540520'>now</span> <span m='1541530'>I</span> <span m='1541660'>can</span>
  <span m='1541810'>look</span> <span m='1542010'>at</span> <span
  m='1542630'>pi</span> <span m='1543040'>of</span> <span m='1543330'>E.</span>
  <span m='1544280'>And</span> <span m='1544560'>if</span> <span
  m='1544670'>that</span> <span m='1544930'>points</span> <span
  m='1545280'>me</span> <span m='1545520'>to</span> <span m='1545650'>C,</span>
  <span m='1546700'>then</span> <span m='1547310'>that's</span> <span
  m='1547550'>good.</span> <span m='1549190'>I'm</span> <span
  m='1549360'>going</span> <span m='1549480'>to</span> <span
  m='1549520'>look</span> <span m='1549630'>at</span> <span
  m='1550280'>pi</span> <span m='1550570'>of</span> <span m='1550670'>C.</span>
  <span m='1551440'>And</span> <span m='1551620'>that</span> <span
  m='1551640'>might</span> <span m='1551850'>point</span> <span
  m='1552120'>me</span> <span m='1552240'>to</span> <span m='1552360'>A,</span>
  <span m='1552805'>and</span> <span m='1553250'>so</span> <span
  m='1553390'>on</span> <span m='1553510'>and</span> <span m='1553600'>so</span>
  <span m='1553730'>forth.</span> </p><p><span m='1554320'>In</span> <span
  m='1554420'>this</span> <span m='1554580'>particular</span> <span
  m='1554920'>instance,</span> <span m='1556220'>pi</span> <span
  m='1556610'>of</span> <span m='1556760'>E</span> <span m='1557560'>is</span>
  <span m='1557750'>going</span> <span m='1557970'>to,</span> <span
  m='1558430'>when</span> <span m='1558670'>you're</span> <span
  m='1558800'>finally</span> <span m='1559150'>done,</span> <span
  m='1560500'>is</span> <span m='1560720'>going</span> <span
  m='1560910'>to</span> <span m='1560990'>point</span> <span m='1561483'>to
  A.</span> <span m='1562470'>And</span> <span m='1562670'>pi of A</span> <span
  m='1563000'>is</span> <span m='1563340'>going</span> <span
  m='1563490'>to</span> <span m='1563560'>point</span> <span m='1563960'>to
  S,</span> <span m='1564780'>all</span> <span m='1565040'>right,</span> <span
  m='1565250'>because</span> <span m='1565460'>that's</span> <span
  m='1566150'>the</span> <span m='1566480'>path</span> <span
  m='1567630'>that</span> <span m='1568600'>is the</span> <span
  m='1568670'>best</span> <span m='1568930'>path</span> <span
  m='1569260'>is</span> <span m='1569400'>this</span> <span
  m='1569550'>one.</span> <span m='1570010'>Like</span> <span
  m='1570290'>so</span> <span m='1571050'>and</span> <span
  m='1571200'>like</span> <span m='1571370'>that.</span> </p><p><span
  m='1572660'>And</span> <span m='1572990'>so</span> <span
  m='1573210'>those</span> <span m='1573470'>are</span> <span
  m='1573530'>the</span> <span m='1573620'>two</span> <span
  m='1573750'>data</span> <span m='1573940'>structures</span> <span
  m='1574380'>you</span> <span m='1574460'>need</span> <span
  m='1574610'>to</span> <span m='1574670'>keep</span> <span
  m='1574840'>in</span> <span m='1575470'>mind that</span> <span
  m='1575780'>you</span> <span m='1575890'>need</span> <span
  m='1576750'>to</span> <span m='1577060'>iterate</span> <span
  m='1577460'>on,</span> <span m='1578200'>this</span> <span
  m='1578680'>predecessor</span> <span m='1580270'>relationship</span> <span
  m='1581360'>and</span> <span m='1581970'>the</span> <span
  m='1582140'>current</span> <span m='1583780'>distance.</span> <span
  m='1584970'>And</span> <span m='1585500'>then</span> <span
  m='1585740'>this</span> <span m='1586390'>ends</span> <span
  m='1586630'>up</span> <span m='1586860'>being</span> <span
  m='1588010'>delta.</span> <span m='1589340'>You're</span> <span
  m='1589520'>done.</span> </p><p><span m='1591370'>And</span> <span
  m='1591670'>at</span> <span m='1591790'>that</span> <span
  m='1591930'>point,</span> <span m='1592370'>your</span> <span
  m='1592500'>predecessor</span> <span m='1593010'>relationship</span> <span
  m='1593510'>is</span> <span m='1593680'>correct.</span> <span
  m='1597140'>So</span> <span m='1597450'>that's the</span> <span
  m='1597570'>set</span> <span m='1597760'>up.</span> <span
  m='1599870'>The</span> <span m='1599990'>last</span> <span
  m='1600310'>complication</span> <span m='1600870'>I</span> <span
  m='1600890'>want</span> <span m='1601050'>to</span> <span
  m='1601100'>talk</span> <span m='1601280'>about</span> <span
  m='1601490'>here</span> <span m='1601800'>is</span> <span
  m='1602090'>negative</span> <span m='1603870'>weights.</span> <span
  m='1604790'>And</span> <span m='1605090'>it's, I</span> <span
  m='1605210'>think,</span> <span m='1605340'>appropriate</span> <span
  m='1605780'>to</span> <span m='1605870'>talk</span> <span
  m='1606050'>about</span> <span m='1606250'>it</span> <span
  m='1606340'>when</span> <span m='1606450'>we</span> <span
  m='1606540'>have</span> <span m='1607150'>Bellman-Ford</span> <span
  m='1607890'>up</span> <span m='1608030'>here.</span> <span
  m='1613730'>Which</span> <span m='1613820'>is</span> <span
  m='1613950'>really</span> <span m='1614100'>the</span> <span
  m='1614220'>general</span> <span m='1614600'>algorithm.</span> </p><p><span
  m='1620410'>So</span> <span m='1620590'>let's</span> <span
  m='1620750'>talk</span> <span m='1620970'>about--</span> <span
  m='1627310'>so</span> <span m='1627340'>the</span> <span
  m='1627430'>first</span> <span m='1627630'>question</span> <span
  m='1627940'>is</span> <span m='1628730'>why.</span> <span
  m='1629190'>Why</span> <span m='1629650'>do</span> <span
  m='1629760'>these</span> <span m='1630000'>things</span> <span
  m='1630240'>exist,</span> <span m='1631140'>other</span> <span
  m='1631310'>than</span> <span m='1631440'>making</span> <span m='1631780'>our
  lives</span> <span m='1632040'>more</span> <span m='1632180'>difficult?</span>
  <span m='1634380'>So</span> <span m='1634540'>give</span> <span
  m='1634650'>me</span> <span m='1634880'>an</span> <span
  m='1634980'>example.</span> <span m='1635780'>What is</span> <span
  m='1635860'>the</span> <span m='1635930'>motivation</span> <span
  m='1636730'>for</span> <span m='1637510'>a</span> <span
  m='1637600'>graph</span> <span m='1638040'>with</span> <span
  m='1638210'>negative</span> <span m='1638580'>weights?</span> </p><p><span
  m='1642330'>I</span> <span m='1642400'>mean,</span> <span m='1642790'>I</span>
  <span m='1642890'>really</span> <span m='1643070'>would</span> <span
  m='1643200'>like</span> <span m='1643390'>to</span> <span
  m='1643480'>know.</span> <span m='1643990'>The</span> <span
  m='1644080'>best</span> <span m='1644320'>motivation</span> <span
  m='1644810'>is</span> <span m='1644930'>definitely</span> <span
  m='1645300'>worth</span> <span m='1645490'>recursion.</span> <span
  m='1646450'>Then</span> <span m='1646750'>I</span> <span
  m='1646810'>can</span> <span m='1646920'>use it</span> <span
  m='1647190'>next</span> <span m='1647440'>time.</span> <span
  m='1648980'>Yeah,</span> <span m='1649370'>go ahead.</span> </p><p><span
  m='1649863'>AUDIENCE: I'm just</span> <span m='1650356'>thinking</span> <span
  m='1650849'>like</span> <span m='1651342'>if</span> <span
  m='1651835'>your</span> <span m='1654793'>goal,</span> <span m='1655286'>if
  your</span> <span m='1655779'>goal</span> <span
  m='1656765'>[INAUDIBLE].</span> <span m='1660709'>And</span> <span
  m='1661202'>some of them</span> <span m='1661695'>cost too much.</span> <span
  m='1662188'>Some</span> <span m='1662681'>of them</span> <span
  m='1663667'>get</span> <span m='1664160'>you money,</span> <span
  m='1664653'>and</span> <span m='1665146'>you want</span> <span m='1665639'>to
  know</span> <span m='1666132'>what--</span> <span m='1666625'>you're</span>
  <span m='1667118'>trying to</span> <span m='1668104'>find</span> <span
  m='1668597'>[INAUDIBLE].</span> </p><p><span m='1675499'>PROFESSOR:
  Sure.</span> <span m='1676485'>Yeah,</span> <span m='1676978'>I mean,</span>
  <span m='1677510'>I</span> <span m='1677890'>think</span> <span
  m='1678040'>that's a good</span> <span m='1678130'>motivation.</span> <span
  m='1682750'>I</span> <span m='1682900'>think</span> <span
  m='1683030'>driving,</span> <span m='1683780'>when</span> <span
  m='1683920'>you</span> <span m='1684000'>think</span> <span
  m='1684160'>about</span> <span m='1684390'>distances</span> <span
  m='1684980'>and</span> <span m='1685100'>so</span> <span
  m='1685270'>on,</span> <span m='1685690'>there's</span> <span
  m='1685870'>no</span> <span m='1686000'>notion</span> <span
  m='1686320'>of</span> <span m='1686410'>a</span> <span
  m='1686460'>negative</span> <span m='1686860'>distance,</span> <span
  m='1687530'>at</span> <span m='1687670'>least</span> <span
  m='1687800'>physically.</span> <span m='1689820'>But</span> <span
  m='1690170'>you</span> <span m='1690270'>can</span> <span
  m='1690360'>imagine</span> <span m='1690690'>that</span> <span
  m='1691780'>you</span> <span m='1692540'>could</span> <span
  m='1692640'>have</span> <span m='1692940'>a</span> <span
  m='1692990'>case</span> <span m='1693310'>where</span> <span
  m='1693560'>you're</span> <span m='1693670'>getting</span> <span
  m='1693860'>paid</span> <span m='1694200'>to</span> <span
  m='1694290'>drive</span> <span m='1694640'>or</span> <span
  m='1694730'>something,</span> <span m='1695110'>or</span> <span
  m='1695300'>it</span> <span m='1695680'>costs</span> <span m='1696020'>you
  to</span> <span m='1696120'>drive,</span> <span m='1697790'>and</span> <span
  m='1697900'>that</span> <span m='1698030'>would</span> <span
  m='1698100'>be</span> <span m='1698210'>one.</span> <span
  m='1698450'>Yeah,</span> <span m='1698700'>go</span> <span
  m='1698780'>ahead.</span> </p><p><span m='1698950'>AUDIENCE: It</span> <span
  m='1699414'>sounds like Monopoly.</span> <span m='1699878'>So</span> <span
  m='1700574'>the</span> <span m='1700806'>vertices</span> <span
  m='1701270'>are</span> <span m='1701386'>supposed</span> <span
  m='1701502'>to</span> <span m='1701618'>be</span> <span
  m='1701734'>[INAUDIBLE].</span> </p><p><span m='1704520'>PROFESSOR: Oh,</span>
  <span m='1704680'>if you</span> <span m='1704820'>land</span> <span
  m='1705170'>on</span> <span m='1705300'>something,</span> <span
  m='1705680'>you</span> <span m='1705770'>have</span> <span
  m='1705870'>to</span> <span m='1705940'>pay</span> <span
  m='1706120'>rent.</span> <span m='1706570'>Or</span> <span
  m='1707200'>sometimes</span> <span m='1707580'>you land on</span> <span
  m='1707930'>something and you</span> <span m='1708320'>actually</span> <span
  m='1708560'>get</span> <span m='1708730'>money.</span> </p><p><span
  m='1709010'>AUDIENCE: [INAUDIBLE].</span> </p><p><span m='1712860'>PROFESSOR:
  Takes</span> <span m='1713080'>you</span> <span m='1713210'>forward,</span>
  <span m='1713660'>backwards,</span> <span m='1714370'>right.</span> <span
  m='1714750'>Yeah</span> <span m='1714910'>go ahead.</span> </p><p><span
  m='1715886'>AUDIENCE: [INAUDIBLE].</span> </p><p><span m='1723710'>PROFESSOR:
  So</span> <span m='1723870'>that</span> <span m='1724740'>is</span> <span
  m='1725070'>such</span> <span m='1725530'>an</span> <span
  m='1725590'>interesting</span> <span m='1726040'>notion.</span> <span
  m='1726670'>Sometimes</span> <span m='1727090'>you</span> <span
  m='1727180'>may</span> <span m='1727320'>want</span> <span
  m='1727470'>to</span> <span m='1727520'>go.</span> <span
  m='1729230'>And</span> <span m='1729770'>maybe</span> <span
  m='1730130'>in</span> <span m='1730220'>this</span> <span
  m='1730460'>case,</span> <span m='1731280'>you're</span> <span
  m='1731490'>saying</span> <span m='1732080'>it's</span> <span
  m='1732230'>better</span> <span m='1732580'>to</span> <span
  m='1734630'>take</span> <span m='1734730'>your</span> <span
  m='1734830'>distance</span> <span m='1735060'>metric</span> <span
  m='1735490'>and</span> <span m='1735630'>go</span> <span
  m='1736240'>further</span> <span m='1736740'>away</span> <span
  m='1738030'>in</span> <span m='1738170'>order</span> <span
  m='1738340'>to</span> <span m='1738410'>get</span> <span
  m='1739060'>the</span> <span m='1739200'>best</span> <span
  m='1739470'>way</span> <span m='1739670'>of</span> <span
  m='1739760'>getting</span> <span m='1739970'>there,</span> <span
  m='1740220'>or</span> <span m='1740270'>something</span> <span
  m='1740500'>like</span> <span m='1740680'>that.</span> </p><p><span
  m='1741190'>AUDIENCE: [INAUDIBLE].</span> </p><p><span m='1748380'>PROFESSOR:
  Right.</span> <span m='1749160'>Sure.</span> <span m='1749560'>That'd</span>
  <span m='1749660'>be</span> <span m='1749760'>good.</span> <span
  m='1750290'>Right.</span> <span m='1750820'>Victor,</span> <span
  m='1751090'>you</span> <span m='1751190'>had</span> <span
  m='1751320'>your</span> <span m='1751470'>hand</span> <span
  m='1751650'>up.</span> </p><p><span m='1752229'>AUDIENCE: Yeah.</span> <span
  m='1752728'>I'm</span> <span m='1753227'>going to give</span> <span
  m='1753726'>[INAUDIBLE]</span> <span m='1754225'>on the</span> <span
  m='1754724'>highway,</span> <span m='1755223'>you can't</span> <span
  m='1755722'>[INAUDIBLE]</span> <span m='1756720'>distances</span> <span
  m='1757219'>[INAUDIBLE]</span> <span m='1757718'>negative.</span> <span
  m='1758217'>Well,</span> <span m='1758716'>if</span> <span
  m='1759215'>a</span> <span m='1759714'>government</span> <span
  m='1760213'>uses</span> <span m='1760712'>[INAUDIBLE]</span> <span
  m='1761710'>police</span> <span m='1762209'>to</span> <span
  m='1762708'>regulate</span> <span m='1763207'>traffic,</span> <span
  m='1763706'>then you might</span> <span m='1764205'>have</span> <span
  m='1764704'>a negative</span> <span m='1765203'>distance.</span> <span
  m='1766201'>Because</span> <span m='1766700'>obviously,</span> <span
  m='1767199'>you</span> <span m='1767365'>could</span> <span
  m='1767531'>go</span> <span m='1767698'>a certain</span> <span
  m='1768197'>way</span> <span m='1768696'>minus</span> <span
  m='1769195'>the</span> <span m='1769694'>[INAUDIBLE].</span> </p><p><span
  m='1771690'>PROFESSOR: Right.</span> <span m='1772290'>Yeah,</span> <span
  m='1772770'>that's</span> <span m='1773400'>a</span> <span
  m='1773420'>good</span> <span m='1773520'>example.</span> <span
  m='1775120'>One</span> <span m='1775170'>of the</span> <span
  m='1775470'>things</span> <span m='1775540'>that</span> <span
  m='1775680'>we</span> <span m='1775770'>have</span> <span
  m='1775920'>to</span> <span m='1776420'>think</span> <span
  m='1776750'>about</span> <span m='1777050'>is--</span> <span
  m='1777980'>and</span> <span m='1778150'>this</span> <span
  m='1778280'>is</span> <span m='1778360'>something</span> <span
  m='1778640'>that</span> <span m='1778760'>might</span> <span
  m='1778910'>come</span> <span m='1779090'>up,</span> <span
  m='1779310'>by</span> <span m='1779440'>the</span> <span
  m='1779530'>way,</span> <span m='1779740'>in</span> <span m='1779900'>a</span>
  <span m='1780010'>problem</span> <span m='1780360'>set</span> <span
  m='1780550'>or a</span> <span m='1780860'>quiz--</span> <span
  m='1781300'>which</span> <span m='1781740'>is,</span> <span
  m='1783310'>is</span> <span m='1783450'>there</span> <span
  m='1783620'>a</span> <span m='1783690'>way</span> <span m='1783910'>of</span>
  <span m='1784010'>shifting</span> <span m='1785260'>these</span> <span
  m='1785540'>weights</span> <span m='1786460'>to</span> <span
  m='1786690'>make</span> <span m='1786850'>them</span> <span
  m='1786900'>all</span> <span m='1787100'>positive?</span> <span
  m='1788540'>So</span> <span m='1788750'>the</span> <span
  m='1788860'>examples</span> <span m='1789730'>we've</span> <span
  m='1789840'>talked</span> <span m='1790120'>about,</span> <span
  m='1790930'>not</span> <span m='1791150'>clear</span> <span
  m='1791400'>to</span> <span m='1791470'>me</span> <span
  m='1792250'>that</span> <span m='1793070'>in</span> <span
  m='1793690'>the</span> <span m='1793900'>particular</span> <span
  m='1794320'>settings</span> <span m='1794820'>that</span> <span
  m='1794950'>we</span> <span m='1795070'>talked</span> <span
  m='1795320'>about</span> <span m='1796100'>that</span> <span
  m='1796420'>you</span> <span m='1796590'>can</span> <span
  m='1796770'>somehow</span> <span m='1798360'>create</span> <span
  m='1798660'>the</span> <span m='1798740'>base</span> <span
  m='1799130'>case</span> <span m='1799580'>to</span> <span
  m='1799640'>be</span> <span m='1799760'>0</span> <span
  m='1800600'>rather</span> <span m='1800850'>than</span> <span
  m='1801010'>being</span> <span m='1801230'>negative.</span> </p><p><span
  m='1803120'>So</span> <span m='1804640'>it</span> <span m='1804790'>may</span>
  <span m='1805160'>not</span> <span m='1805430'>be possible</span> <span
  m='1805780'>in</span> <span m='1805990'>a</span> <span
  m='1806040'>particular</span> <span m='1806360'>scenario.</span> <span
  m='1807370'>But</span> <span m='1808260'>if</span> <span
  m='1808370'>you</span> <span m='1808450'>can</span> <span
  m='1808570'>do</span> <span m='1808690'>that--</span> <span
  m='1809220'>and</span> <span m='1809350'>the</span> <span
  m='1809410'>reason</span> <span m='1809630'>I</span> <span
  m='1809670'>bring</span> <span m='1809850'>this</span> <span
  m='1810020'>up</span> <span m='1810180'>is</span> <span m='1810650'>if</span>
  <span m='1810780'>you</span> <span m='1810890'>can</span> <span
  m='1811010'>do</span> <span m='1811130'>that,</span> <span
  m='1811730'>suddenly</span> <span m='1812200'>instead</span> <span
  m='1812510'>of</span> <span m='1812610'>using</span> <span
  m='1812900'>an</span> <span m='1812980'>order</span> <span m='1813280'>V,
  E</span> <span m='1813700'>algorithm,</span> <span m='1814760'>if</span> <span
  m='1814910'>you</span> <span m='1815020'>can</span> <span
  m='1815150'>prove</span> <span m='1815380'>correctness</span> <span
  m='1816830'>of</span> <span m='1817250'>the</span> <span
  m='1817330'>final</span> <span m='1817650'>solution</span> <span
  m='1818120'>is</span> <span m='1818230'>exactly</span> <span
  m='1818680'>what</span> <span m='1818850'>you'd</span> <span m='1819090'>have
  gotten</span> <span m='1819770'>for</span> <span m='1819880'>the</span> <span
  m='1819970'>initial</span> <span m='1820300'>problem</span> <span
  m='1820630'>certification,</span> <span m='1821670'>you've</span> <span
  m='1821800'>gone</span> <span m='1822030'>from</span> <span
  m='1822180'>an</span> <span m='1822260'>order</span> <span
  m='1822570'>V,</span> <span m='1822755'>E</span> <span
  m='1822940'>algorithm</span> <span m='1823360'>to</span> <span
  m='1823470'>an</span> <span m='1823560'>order</span> <span
  m='1823820'>V</span> <span m='1824030'>log</span> <span m='1824270'>V</span>
  <span m='1824430'>algorithm.</span> <span m='1824940'>So</span> <span
  m='1825110'>that's</span> <span m='1825310'>a</span> <span
  m='1825360'>wonderful</span> <span m='1825710'>thing</span> <span
  m='1825870'>to</span> <span m='1825980'>do.</span> </p><p><span
  m='1826310'>So</span> <span m='1826830'>keep</span> <span
  m='1827010'>that</span> <span m='1827140'>in</span> <span
  m='1827240'>mind.</span> <span m='1828160'>Try</span> <span
  m='1828260'>and</span> <span m='1828370'>get</span> <span
  m='1828570'>rid</span> <span m='1828740'>of</span> <span
  m='1828860'>negative</span> <span m='1829180'>weight</span> <span
  m='1829400'>edges</span> <span m='1829800'>if</span> <span
  m='1829900'>you</span> <span m='1830030'>can</span> <span
  m='1830720'>without</span> <span m='1831030'>changing</span> <span
  m='1831370'>the</span> <span m='1831460'>problem</span> <span
  m='1831760'>certification.</span> <span m='1832730'>I</span> <span
  m='1833220'>saw a</span> <span m='1833480'>hand back</span> <span
  m='1833860'>there.</span> </p><p><span m='1834080'>AUDIENCE: Oh,</span> <span
  m='1834568'>no.</span> <span m='1835056'>I thought you</span> <span
  m='1835544'>were just</span> <span m='1836032'>asking</span> <span
  m='1836520'>the question,</span> <span m='1837008'>if we could</span> <span
  m='1837496'>do that?</span> <span m='1837984'>So</span> <span
  m='1838472'>I</span> <span m='1838960'>was just</span> <span
  m='1839448'>gettin</span> <span m='1839936'>ready to</span> <span
  m='1840424'>answer.</span> </p><p><span m='1841400'>PROFESSOR: OK,</span>
  <span m='1843850'>yeah,</span> <span m='1845560'>so</span> <span
  m='1846280'>that's</span> <span m='1846510'>something</span> <span
  m='1846780'>to keep</span> <span m='1846920'>in</span> <span
  m='1847270'>mind.</span> <span m='1847540'>One</span> <span
  m='1847850'>example</span> <span m='1848290'>that</span> <span
  m='1848430'>I</span> <span m='1848490'>think</span> <span
  m='1848750'>has</span> <span m='1848900'>come</span> <span
  m='1849040'>up</span> <span m='1849170'>here,</span> <span
  m='1849560'>which</span> <span m='1849940'>came</span> <span m='1850170'>up,
  I</span> <span m='1850370'>think,</span> <span m='1850530'>the</span> <span
  m='1850580'>last</span> <span m='1850790'>time</span> <span
  m='1850940'>I</span> <span m='1850980'>lectured</span> <span
  m='1851330'>was</span> <span m='1852310'>imagine</span> <span
  m='1852640'>that</span> <span m='1853170'>you're</span> <span
  m='1853450'>driving</span> <span m='1853930'>and</span> <span
  m='1854400'>there</span> <span m='1854620'>are all</span> <span
  m='1854810'>these</span> <span m='1855460'>advertisements.</span> <span
  m='1856240'>And</span> <span m='1856330'>you</span> <span
  m='1856420'>get</span> <span m='1856610'>paid</span> <span
  m='1856890'>to</span> <span m='1857360'>drive</span> <span
  m='1857710'>on</span> <span m='1857810'>a</span> <span
  m='1857870'>freeway.</span> <span m='1858750'>So</span> <span
  m='1858890'>the</span> <span m='1859070'>reverse</span> <span
  m='1859260'>toll.</span> </p><p><span m='1860270'>I mean,</span> <span
  m='1860420'>it's</span> <span m='1860490'>a</span> <span
  m='1860650'>reverse</span> <span m='1860820'>toll,</span> <span
  m='1861230'>because</span> <span m='1861940'>you</span> <span
  m='1862060'>get</span> <span m='1862200'>to</span> <span m='1862260'>go</span>
  <span m='1862400'>there and</span> <span m='1862660'>you</span> <span
  m='1862740'>have to see</span> <span m='1862900'>all</span> <span
  m='1863170'>these</span> <span m='1863350'>ads.</span> <span
  m='1864940'>And</span> <span m='1865450'>then</span> <span
  m='1866090'>I</span> <span m='1866250'>guess</span> <span
  m='1867620'>you</span> <span m='1867750'>drive</span> <span
  m='1868020'>pretty</span> <span m='1868200'>fast</span> <span
  m='1868510'>through</span> <span m='1868620'>those</span> <span
  m='1868840'>ads.</span> <span m='1869200'>But</span> <span
  m='1870700'>you</span> <span m='1870780'>have</span> <span
  m='1870920'>to</span> <span m='1870990'>go</span> <span
  m='1871130'>through.</span> <span m='1871380'>And</span> <span
  m='1871510'>so</span> <span m='1871590'>you</span> <span
  m='1872010'>get</span> <span m='1872180'>paid</span> <span
  m='1872510'>to</span> <span m='1872600'>go</span> <span
  m='1872740'>through</span> <span m='1872900'>those</span> <span
  m='1873600'>particular</span> <span m='1873910'>roads.</span> </p><p><span
  m='1874690'>And</span> <span m='1874810'>then</span> <span m='1874870'>what
  about</span> <span m='1875130'>social</span> <span
  m='1875500'>networks?</span> <span m='1876810'>I mean,</span> <span
  m='1876930'>there's</span> <span m='1877680'>liking</span> <span
  m='1878060'>people</span> <span m='1878460'>and</span> <span
  m='1878580'>disliking</span> <span m='1879090'>people.</span> <span
  m='1879550'>I</span> <span m='1879620'>mean,</span> <span
  m='1879740'>that</span> <span m='1879900'>sounds</span> <span
  m='1880150'>pretty--</span> <span m='1880470'>that's</span> <span
  m='1880770'>negative</span> <span m='1881190'>and</span> <span
  m='1881310'>positive.</span> <span m='1882270'>One</span> <span
  m='1882460'>could</span> <span m='1882560'>imagine</span> <span
  m='1882920'>that</span> <span m='1883030'>social</span> <span
  m='1883360'>networks</span> <span m='1883750'>would</span> <span
  m='1883870'>have</span> <span m='1884380'>positive</span> <span
  m='1885060'>weights</span> <span m='1885420'>and</span> <span
  m='1885490'>negative</span> <span m='1885840'>weights.</span> </p><p><span
  m='1886190'>I'm</span> <span m='1886570'>surprised</span> <span
  m='1887460'>one</span> <span m='1887580'>of</span> <span
  m='1887690'>you--</span> <span m='1887980'>I mean, I don't</span> <span
  m='1888240'>have</span> <span m='1888340'>an</span> <span
  m='1888400'>account</span> <span m='1888680'>on</span> <span
  m='1888780'>Facebook.</span> <span m='1889250'>But</span> <span
  m='1889390'>presumably,</span> <span m='1889860'>you</span> <span
  m='1889950'>guys</span> <span m='1890210'>do.</span> <span
  m='1892240'>So</span> <span m='1892460'>think</span> <span
  m='1892670'>of</span> <span m='1894196'>what's</span> <span
  m='1894590'>the--</span> <span m='1895550'>yeah,</span> <span
  m='1895980'>that's</span> <span m='1896200'>right.</span> <span
  m='1896400'>Well, I'm not</span> <span m='1896680'>sure</span> <span
  m='1896960'>how this</span> <span m='1897180'>works.</span> <span
  m='1897570'>But</span> <span m='1898530'>you</span> <span
  m='1898660'>guys</span> <span m='1898820'>figure it</span> <span
  m='1899100'>out.</span> </p><p><span m='1900410'>So</span> <span
  m='1900560'>why?</span> <span m='1901240'>Reverse</span> <span
  m='1901650'>tolls,</span> <span m='1902090'>social</span> <span
  m='1902620'>networks.</span> <span m='1907080'>Lots</span> <span
  m='1907300'>of</span> <span m='1907400'>things.</span> <span
  m='1911040'>Even</span> <span m='1911260'>if</span> <span
  m='1911330'>you're</span> <span m='1911470'>not</span> <span
  m='1911750'>convinced</span> <span m='1912060'>by</span> <span
  m='1912170'>the</span> <span m='1912260'>motivation,</span> <span
  m='1913140'>I</span> <span m='1913290'>will</span> <span
  m='1913660'>spend</span> <span m='1914010'>a</span> <span
  m='1914050'>whole</span> <span m='1914200'>lecture</span> <span
  m='1914570'>talking</span> <span m='1914840'>about</span> <span
  m='1914990'>Bellman-Ford.</span> <span m='1916690'>So</span> <span
  m='1916890'>that's</span> <span m='1917070'>just</span> <span
  m='1917260'>so</span> <span m='1917400'>that's</span> <span
  m='1917620'>clear.</span> </p><p><span m='1921020'>So</span> <span
  m='1921220'>the</span> <span m='1921380'>issue</span> <span
  m='1921680'>with</span> <span m='1921850'>the</span> <span
  m='1922150'>negative</span> <span m='1922460'>weight</span> <span
  m='1922690'>cycles</span> <span m='1924470'>is</span> <span
  m='1924630'>something</span> <span m='1924950'>that</span> <span
  m='1925560'>is</span> <span m='1925700'>worth</span> <span
  m='1925920'>spending</span> <span m='1926180'>a</span> <span
  m='1926220'>minute</span> <span m='1926470'>on.</span> <span
  m='1927780'>And</span> <span m='1928530'>I</span> <span
  m='1928650'>talked</span> <span m='1928930'>about</span> <span
  m='1929210'>the</span> <span m='1929300'>fact</span> <span
  m='1929590'>that</span> <span m='1929690'>you</span> <span
  m='1929780'>had</span> <span m='1930040'>an</span> <span
  m='1930220'>exponential</span> <span m='1931640'>number</span> <span
  m='1932030'>of</span> <span m='1932240'>paths.</span> <span
  m='1933100'>And</span> <span m='1933280'>that</span> <span
  m='1933500'>causes</span> <span m='1933910'>a</span> <span
  m='1933980'>bit</span> <span m='1934110'>of</span> <span m='1934200'>a</span>
  <span m='1934270'>problem,</span> <span m='1935820'>even</span> <span
  m='1936300'>in</span> <span m='1936440'>the</span> <span
  m='1936540'>case</span> <span m='1936820'>where</span> <span
  m='1936980'>you</span> <span m='1937070'>have</span> <span
  m='1937270'>positive</span> <span m='1938180'>weights.</span> <span
  m='1938610'>And</span> <span m='1938710'>I</span> <span
  m='1938760'>will</span> <span m='1938930'>revisit</span> <span
  m='1939350'>that</span> <span m='1939480'>example.</span> </p><p><span
  m='1940420'>But</span> <span m='1940650'>here's</span> <span
  m='1940940'>an</span> <span m='1941060'>even</span> <span
  m='1941310'>worse</span> <span m='1941630'>problem</span> <span
  m='1942780'>that</span> <span m='1942970'>corresponds</span> <span
  m='1943560'>to</span> <span m='1946220'>negative</span> <span
  m='1946620'>cycles.</span> <span m='1949610'>So</span> <span
  m='1949710'>eventually,</span> <span m='1950120'>you want</span> <span
  m='1950270'>to</span> <span m='1950360'>terminate.</span> <span
  m='1950990'>The</span> <span m='1951140'>faster</span> <span
  m='1951530'>you</span> <span m='1951660'>terminate,</span> <span
  m='1952240'>and</span> <span m='1952570'>if</span> <span
  m='1952740'>you</span> <span m='1952860'>can</span> <span
  m='1953090'>talk</span> <span m='1953330'>about</span> <span
  m='1954500'>asymptotic</span> <span m='1955000'>complexity,</span> <span
  m='1955850'>obviously</span> <span m='1956220'>that</span> <span
  m='1956370'>means</span> <span m='1956590'>that</span> <span
  m='1956960'>you've</span> <span m='1957170'>terminated</span> <span
  m='1958100'>within</span> <span m='1958450'>a</span> <span
  m='1958720'>worst</span> <span m='1958990'>case</span> <span
  m='1959230'>bound</span> <span m='1959520'>of</span> <span
  m='1959730'>time.</span> </p><p><span m='1961160'>And</span> <span
  m='1962080'>if</span> <span m='1962310'>that's</span> <span
  m='1962520'>exponential,</span> <span m='1963080'>that's</span> <span
  m='1963220'>bad.</span> <span m='1963680'>You'd</span> <span m='1963850'>want
  it</span> <span m='1964100'>to</span> <span m='1964150'>be</span> <span
  m='1964260'>small.</span> <span m='1965040'>But</span> <span
  m='1965270'>what</span> <span m='1965440'>if</span> <span
  m='1965530'>you</span> <span m='1965660'>didn't</span> <span
  m='1965830'>even</span> <span m='1966020'>terminate?</span> </p><p><span
  m='1967310'>So</span> <span m='1967900'>suppose</span> <span
  m='1968220'>you</span> <span m='1968310'>have</span> <span
  m='1968550'>something</span> <span m='1968880'>like</span> <span
  m='1971190'>this</span> <span m='1972610'>where</span> <span
  m='1972960'>you</span> <span m='1973020'>have</span> <span
  m='1973470'>a</span> <span m='1973610'>graph</span> <span
  m='1979950'>that</span> <span m='1980080'>has</span> <span
  m='1980280'>negative</span> <span m='1980570'>weights</span> <span
  m='1981960'>on</span> <span m='1982150'>some</span> <span
  m='1982400'>of</span> <span m='1982470'>the</span> <span
  m='1982550'>edges.</span> <span m='1984140'>But</span> <span
  m='1984720'>others</span> <span m='1985060'>are</span> <span
  m='1985140'>positive.</span> <span m='1985840'>So</span> <span
  m='1985970'>this</span> <span m='1986100'>one</span> <span
  m='1986230'>has</span> <span m='1986290'>a</span> <span
  m='1986350'>minus</span> <span m='1986690'>6.</span> <span
  m='1997380'>I</span> <span m='1997490'>think I got</span> <span
  m='1997760'>those</span> <span m='1998000'>right.</span> </p><p><span
  m='2000060'>So</span> <span m='2000230'>2</span> <span m='2000480'>for</span>
  <span m='2001340'>minus</span> <span m='2001690'>6</span> <span
  m='2002170'>over</span> <span m='2002350'>here,</span> <span
  m='2003560'>3,</span> <span m='2003940'>2,</span> <span m='2004500'>1,</span>
  <span m='2004760'>and</span> <span m='2004850'>minus</span> <span
  m='2005150'>2.</span> <span m='2006520'>So</span> <span m='2006680'>one
  thing</span> <span m='2006790'>that</span> <span m='2006900'>you</span> <span
  m='2006990'>notice</span> <span m='2007280'>from</span> <span
  m='2007440'>this</span> <span m='2007610'>graph</span> <span
  m='2008500'>is</span> <span m='2008690'>that</span> <span
  m='2009620'>you</span> <span m='2009790'>got</span> <span
  m='2010060'>this</span> <span m='2010350'>annoying</span> <span
  m='2011940'>cycle</span> <span m='2012510'>here.</span> <span
  m='2013700'>That's</span> <span m='2013970'>a</span> <span
  m='2014030'>negative</span> <span m='2014420'>weight</span> <span
  m='2014700'>cycle.</span> <span m='2015710'>And</span> <span
  m='2015760'>that's</span> <span m='2015930'>why</span> <span
  m='2016130'>I've</span> <span m='2016170'>picked</span> <span
  m='2016450'>this</span> <span m='2017205'>particular</span> <span
  m='2017590'>example.</span> </p><p><span m='2018130'>Minus</span> <span
  m='2018450'>6</span> <span m='2018710'>plus</span> <span m='2018950'>2</span>
  <span m='2019160'>is</span> <span m='2019270'>minus</span> <span
  m='2019570'>4.</span> <span m='2019860'>Minus</span> <span
  m='2020100'>4</span> <span m='2020270'>plus</span> <span m='2020460'>3</span>
  <span m='2020620'>is</span> <span m='2020720'>minus</span> <span
  m='2020980'>1.</span> <span m='2021910'>So</span> <span m='2022560'>if</span>
  <span m='2022680'>you</span> <span m='2022760'>had</span> <span
  m='2023020'>something</span> <span m='2023400'>where</span> <span
  m='2023780'>you</span> <span m='2023880'>can't</span> <span
  m='2024180'>depend</span> <span m='2025070'>on</span> <span
  m='2025220'>the</span> <span m='2025310'>fact</span> <span
  m='2025670'>that</span> <span m='2028540'>the</span> <span
  m='2028720'>D's</span> <span m='2029220'>are going</span> <span
  m='2029390'>to</span> <span m='2029440'>keep</span> <span
  m='2029740'>reducing.</span> <span m='2030870'>And</span> <span
  m='2031090'>that</span> <span m='2031310'>eventually,</span> <span
  m='2031690'>they'll</span> <span m='2031830'>stop</span> <span
  m='2032110'>reducing.</span> </p><p><span m='2033120'>Well,</span> <span
  m='2033270'>that's</span> <span m='2033470'>true.</span> <span
  m='2033870'>Eventually,</span> <span m='2034360'>they'll</span> <span
  m='2034590'>stop</span> <span m='2034790'>reducing.</span> <span
  m='2035240'>Because</span> <span m='2035460'>they're</span> <span
  m='2035700'>lower</span> <span m='2035910'>bounded</span> <span
  m='2036270'>by</span> <span m='2036410'>0</span> <span m='2037350'>when</span>
  <span m='2037490'>you</span> <span m='2037570'>have</span> <span
  m='2037770'>positive</span> <span m='2038250'>weight</span> <span
  m='2038560'>edges</span> <span m='2039620'>or</span> <span
  m='2039730'>non-negative</span> <span m='2040270'>weight</span> <span
  m='2040470'>edges.</span> <span m='2041290'>But</span> <span
  m='2041530'>if</span> <span m='2041620'>you</span> <span
  m='2041700'>have</span> <span m='2041950'>a</span> <span
  m='2042020'>graph</span> <span m='2042420'>with</span> <span
  m='2042500'>a</span> <span m='2042570'>negative</span> <span
  m='2042880'>cycle--</span> <span m='2044690'>and</span> <span
  m='2045720'>I</span> <span m='2045820'>mean,</span> <span
  m='2045940'>this</span> <span m='2046110'>is</span> <span m='2046240'>a</span>
  <span m='2046310'>recipe</span> <span m='2046660'>for</span> <span
  m='2046770'>an</span> <span m='2046930'>infinite</span> <span
  m='2047260'>loop,</span> <span m='2047610'>right--</span> <span
  m='2048969'>in</span> <span m='2049139'>your</span> <span
  m='2049290'>program,</span> <span m='2049900'>potentially</span> <span
  m='2050480'>a</span> <span m='2050530'>bug.</span> <span
  m='2050980'>But</span> <span m='2051389'>maybe</span> <span
  m='2051719'>not</span> <span m='2051880'>even</span> <span
  m='2052020'>a</span> <span m='2052070'>bug,</span> <span
  m='2052760'>not</span> <span m='2052929'>a</span> <span m='2052969'>bug</span>
  <span m='2053190'>in</span> <span m='2053280'>implementation,</span> <span
  m='2054380'>but</span> <span m='2054480'>a</span> <span m='2054520'>bug</span>
  <span m='2054730'>in</span> <span m='2054790'>the</span> <span
  m='2054880'>algorithm.</span> <span m='2055750'>Because</span> <span
  m='2056060'>this</span> <span m='2056290'>determination</span> <span
  m='2056920'>condition</span> <span m='2057850'>isn't</span> <span
  m='2058120'>set</span> <span m='2058380'>properly.</span> </p><p><span
  m='2059630'>So</span> <span m='2059989'>you</span> <span
  m='2060139'>can</span> <span m='2060219'>imagine</span> <span
  m='2060540'>that</span> <span m='2060659'>you would</span> <span
  m='2060790'>get</span> <span m='2061050'>to</span> <span m='2061120'>B</span>
  <span m='2062360'>and</span> <span m='2063280'>the</span> <span
  m='2063360'>first</span> <span m='2063630'>time--</span> <span
  m='2063850'>whoops,</span> <span m='2064100'>I'm</span> <span
  m='2064199'>missing</span> <span m='2064500'>a</span> <span
  m='2066060'>weight</span> <span m='2066300'>here.</span> <span
  m='2066860'>So</span> <span m='2066989'>you</span> <span
  m='2067090'>get</span> <span m='2067270'>to</span> <span m='2067340'>B.</span>
  <span m='2068110'>And</span> <span m='2068230'>you</span> <span
  m='2068320'>say,</span> <span m='2068719'>well,</span> <span
  m='2071650'>I'm</span> <span m='2071820'>done.</span> <span
  m='2072909'>Delta</span> <span m='2074010'>of</span> <span
  m='2074800'>SB</span> <span m='2075520'>is</span> <span m='2075690'>4.</span>
  </p><p><span m='2076739'>But</span> <span m='2076780'>that's</span> <span
  m='2076949'>not</span> <span m='2077120'>true.</span> <span
  m='2077840'>Because</span> <span m='2078100'>you</span> <span
  m='2078250'>could get</span> <span m='2078449'>to</span> <span
  m='2078650'>B.</span> <span m='2078830'>And</span> <span
  m='2078929'>then</span> <span m='2079219'>you</span> <span
  m='2079340'>could</span> <span m='2079489'>get</span> <span
  m='2079659'>back</span> <span m='2079940'>to</span> <span m='2080040'>B</span>
  <span m='2081030'>with</span> <span m='2081210'>the</span> <span
  m='2081320'>weight</span> <span m='2081560'>of</span> <span
  m='2081719'>3.</span> <span m='2082449'>And</span> <span
  m='2082560'>then</span> <span m='2082630'>you</span> <span m='2082760'>could
  do</span> <span m='2082860'>it</span> <span m='2082909'>again</span> <span
  m='2083370'>with the</span> <span m='2083489'>weight</span> <span
  m='2083639'>of</span> <span m='2083739'>2,</span> <span m='2084020'>and</span>
  <span m='2084159'>so</span> <span m='2084260'>on</span> <span
  m='2084400'>and</span> <span m='2084480'>so</span> <span
  m='2084620'>forth.</span> <span m='2085540'>So</span> <span
  m='2085600'>that's</span> <span m='2085810'>a</span> <span
  m='2085870'>problem.</span> </p><p><span m='2086989'>So</span> <span
  m='2087110'>what</span> <span m='2087300'>would</span> <span
  m='2087460'>you</span> <span m='2087590'>like</span> <span
  m='2088179'>an</span> <span m='2088340'>algorithm</span> <span
  m='2088790'>to</span> <span m='2088870'>do?</span> <span
  m='2089050'>What</span> <span m='2089250'>would</span> <span
  m='2089389'>you</span> <span m='2089500'>like</span> <span
  m='2090090'>the</span> <span m='2090179'>Bellman-Ford</span> <span
  m='2090969'>to</span> <span m='2091080'>do</span> <span
  m='2091300'>here?</span> <span m='2092719'>It's</span> <span
  m='2092920'>not</span> <span m='2093170'>the</span> <span
  m='2093260'>case</span> <span m='2093670'>that</span> <span
  m='2094100'>all</span> <span m='2094480'>of</span> <span
  m='2094659'>the</span> <span m='2095429'>delta</span> <span
  m='2095909'>values,</span> <span m='2096909'>that</span> <span
  m='2097050'>is</span> <span m='2097150'>the</span> <span
  m='2097210'>shortest</span> <span m='2097570'>path</span> <span
  m='2097810'>values,</span> <span m='2098230'>are</span> <span
  m='2098380'>undefined</span> <span m='2099200'>for</span> <span
  m='2099310'>this</span> <span m='2099530'>graph.</span> <span
  m='2100210'>Some</span> <span m='2100440'>of</span> <span
  m='2100520'>them</span> <span m='2100680'>are</span> <span
  m='2100820'>well</span> <span m='2101110'>defined.</span> </p><p><span
  m='2103410'>This</span> <span m='2103650'>one,</span> <span
  m='2103910'>you</span> <span m='2104010'>can't</span> <span
  m='2104240'>ever</span> <span m='2104450'>get</span> <span
  m='2104640'>back</span> <span m='2104870'>to</span> <span
  m='2105000'>it.</span> <span m='2105440'>So</span> <span
  m='2105700'>clearly,</span> <span m='2106820'>delta</span> <span
  m='2107210'>S,</span> <span m='2107900'>S</span> <span m='2108350'>is</span>
  <span m='2108560'>0.</span> <span m='2110040'>Everybody</span> <span
  m='2110360'>buy</span> <span m='2110540'>that?</span> <span
  m='2112150'>What</span> <span m='2112270'>about</span> <span
  m='2112450'>this</span> <span m='2112600'>one?</span> </p><p><span
  m='2114610'>It's</span> <span m='2114820'>2,</span> <span
  m='2115490'>right.</span> <span m='2116640'>Delta</span> <span
  m='2117360'>S,</span> <span m='2117690'>A</span> <span m='2118020'>is</span>
  <span m='2118240'>2.</span> <span m='2121320'>And</span> <span
  m='2121460'>everybody</span> <span m='2121760'>buys</span> <span
  m='2122010'>that,</span> <span m='2122270'>because</span> <span
  m='2122770'>there's just</span> <span m='2122900'>no</span> <span
  m='2123080'>way.</span> <span m='2123340'>You can't,</span> <span
  m='2123700'>you</span> <span m='2123820'>don't</span> <span
  m='2124040'>touch</span> <span m='2124370'>a</span> <span
  m='2124480'>negative</span> <span m='2124820'>weight</span> <span
  m='2125090'>cycle.</span> </p><p><span m='2125560'>You, in</span> <span
  m='2125710'>fact,</span> <span m='2125930'>don't</span> <span
  m='2126140'>touch</span> <span m='2126390'>a</span> <span
  m='2126460'>negative</span> <span m='2126800'>weight</span> <span
  m='2127040'>edge.</span> <span m='2127750'>But</span> <span
  m='2127860'>more</span> <span m='2128030'>importantly,</span> <span
  m='2128620'>you</span> <span m='2128720'>don't</span> <span
  m='2128840'>touch</span> <span m='2129130'>a</span> <span
  m='2129190'>negative</span> <span m='2129540'>weight</span> <span
  m='2129820'>cycle</span> <span m='2131400'>in</span> <span
  m='2131560'>order</span> <span m='2131730'>to</span> <span
  m='2131800'>get</span> <span m='2132030'>to</span> <span m='2132130'>A.</span>
  <span m='2132590'>And</span> <span m='2132690'>there's</span> <span
  m='2132830'>no</span> <span m='2132960'>way</span> <span m='2133120'>of</span>
  <span m='2133220'>touching</span> <span m='2133540'>that.</span> </p><p><span
  m='2134960'>On</span> <span m='2134990'>the</span> <span
  m='2135050'>other</span> <span m='2135210'>hand,</span> <span
  m='2137030'>anything</span> <span m='2137420'>that's</span> <span
  m='2137620'>in</span> <span m='2137760'>here</span> <span
  m='2138970'>you</span> <span m='2139120'>could</span> <span
  m='2139260'>run</span> <span m='2139540'>many</span> <span
  m='2139830'>times.</span> <span m='2140870'>And</span> <span
  m='2141070'>you</span> <span m='2141190'>could</span> <span
  m='2141360'>end</span> <span m='2141580'>up</span> <span
  m='2142600'>with</span> <span m='2142850'>whatever</span> <span
  m='2143170'>weight</span> <span m='2143360'>you</span> <span
  m='2143460'>wanted.</span> <span m='2144430'>There'd</span> <span
  m='2144500'>be</span> <span m='2144670'>a</span> <span
  m='2144780'>minus</span> <span m='2145140'>infinity</span> <span
  m='2145590'>weight.</span> </p><p><span m='2146940'>So</span> <span
  m='2147260'>what</span> <span m='2147450'>you</span> <span
  m='2147540'>want</span> <span m='2147740'>an</span> <span
  m='2147840'>algorithm</span> <span m='2148500'>that</span> <span
  m='2148680'>handles</span> <span m='2150310'>in</span> <span
  m='2150480'>particular</span> <span m='2150850'>negative</span> <span
  m='2151200'>cycles,</span> <span m='2151770'>which</span> <span
  m='2151920'>are</span> <span m='2151980'>the</span> <span
  m='2152080'>hard</span> <span m='2152360'>part</span> <span
  m='2152630'>here.</span> <span m='2153400'>Negative</span> <span
  m='2153700'>weights</span> <span m='2154140'>aren't</span> <span
  m='2154650'>the</span> <span m='2154760'>hard</span> <span
  m='2154990'>part</span> <span m='2155590'>if</span> <span
  m='2155750'>you</span> <span m='2155870'>can't</span> <span
  m='2156360'>run</span> <span m='2156750'>through</span> <span
  m='2156990'>these</span> <span m='2157320'>edges</span> <span
  m='2157630'>more</span> <span m='2157860'>than</span> <span
  m='2158020'>once.</span> <span m='2158960'>It's</span> <span
  m='2159070'>actually</span> <span m='2159330'>the</span> <span
  m='2159410'>negative</span> <span m='2159690'>cycles</span> <span
  m='2160220'>that are</span> <span m='2160420'>hard.</span> </p><p><span
  m='2161450'>And</span> <span m='2161950'>the</span> <span
  m='2162030'>negative</span> <span m='2162320'>cycles</span> <span
  m='2163010'>are</span> <span m='2163190'>going</span> <span
  m='2163500'>to</span> <span m='2163950'>make</span> <span
  m='2164980'>shortest</span> <span m='2165410'>path</span> <span
  m='2165710'>lengths</span> <span m='2166270'>indeterminate,</span> <span
  m='2167850'>but</span> <span m='2168050'>not</span> <span
  m='2168330'>necessarily</span> <span m='2169720'>for</span> <span
  m='2171120'>every</span> <span m='2171550'>node</span> <span
  m='2171980'>in</span> <span m='2172080'>the</span> <span
  m='2172160'>graph,</span> <span m='2172940'>like</span> <span
  m='2173250'>this</span> <span m='2173410'>example</span> <span
  m='2173830'>shows.</span> <span m='2174800'>So</span> <span
  m='2175310'>what</span> <span m='2175470'>you</span> <span
  m='2175540'>want</span> <span m='2175780'>your</span> <span
  m='2175950'>Bellman-Ford</span> <span m='2176500'>algorithm</span> <span
  m='2176830'>to</span> <span m='2176940'>do,</span> <span m='2177600'>or</span>
  <span m='2178260'>your</span> <span m='2178580'>shortest</span> <span
  m='2178870'>path</span> <span m='2179120'>algorithm</span> <span
  m='2180360'>that</span> <span m='2180730'>handles</span> <span
  m='2181120'>negative</span> <span m='2181460'>cycles</span> <span
  m='2181880'>to</span> <span m='2182000'>do,</span> <span m='2182620'>is</span>
  <span m='2183390'>to</span> <span m='2183590'>finish</span> <span
  m='2184290'>in</span> <span m='2184450'>reasonable</span> <span
  m='2184770'>amounts</span> <span m='2185020'>of</span> <span
  m='2185120'>time.</span> <span m='2185810'>Order</span> <span m='2186070'>V,
  E</span> <span m='2186570'>will</span> <span m='2186700'>take</span> <span
  m='2187690'>and</span> <span m='2188270'>give</span> <span
  m='2188590'>you</span> <span m='2188930'>the</span> <span
  m='2189090'>delta</span> <span m='2189470'>numbers</span> <span
  m='2190870'>for</span> <span m='2191680'>all</span> <span
  m='2191990'>of</span> <span m='2192090'>the</span> <span
  m='2192170'>vertices</span> <span m='2193540'>that</span> <span
  m='2194570'>actually</span> <span m='2194930'>have</span> <span
  m='2196000'>finite</span> <span m='2196420'>numbers</span> <span
  m='2197290'>and</span> <span m='2197440'>then</span> <span
  m='2197650'>mark</span> <span m='2198170'>all</span> <span
  m='2198410'>of</span> <span m='2198480'>these</span> <span
  m='2198640'>other</span> <span m='2198810'>vertices</span> <span
  m='2199150'>as</span> <span m='2199680'>being</span> <span
  m='2199990'>indeterminate,</span> <span m='2201110'>or</span> <span
  m='2201340'>essentially</span> <span m='2201720'>minus</span> <span
  m='2202010'>infinity.</span> <span m='2203140'>OK</span> </p><p><span
  m='2203720'>So</span> <span m='2203850'>that's</span> <span m='2204220'>your
  termination</span> <span m='2204720'>condition.</span> <span
  m='2205560'>It's</span> <span m='2206030'>different</span> <span
  m='2206450'>from</span> <span m='2206780'>the</span> <span
  m='2206880'>termination</span> <span m='2207330'>condition</span> <span
  m='2207770'>if</span> <span m='2207860'>you</span> <span
  m='2208370'>simply</span> <span m='2208680'>had</span> <span
  m='2208910'>non-negative</span> <span m='2209820'>edge</span> <span
  m='2210135'>weights.</span> <span m='2210920'>All</span> <span
  m='2210990'>right.</span> <span m='2211890'>So</span> <span
  m='2213240'>remember,</span> <span m='2213610'>it's</span> <span
  m='2213700'>cycles</span> <span m='2214260'>that</span> <span
  m='2214400'>cause</span> <span m='2214610'>a</span> <span
  m='2214680'>problem,</span> <span m='2215300'>not</span> <span
  m='2215520'>just</span> <span m='2215750'>the</span> <span
  m='2216100'>edges.</span> <span m='2217230'>And</span> <span
  m='2218590'>you</span> <span m='2218750'>have</span> <span
  m='2218880'>to</span> <span m='2218930'>do</span> <span
  m='2219060'>something</span> <span m='2219330'>about</span> <span
  m='2219510'>the</span> <span m='2219570'>cycles.</span> <span
  m='2220250'>But</span> <span m='2220540'>they</span> <span
  m='2220600'>may</span> <span m='2220690'>not</span> <span
  m='2220850'>affect</span> <span m='2221150'>the</span> <span
  m='2221220'>entire</span> <span m='2221980'>part</span> <span
  m='2222170'>of</span> <span m='2222250'>the</span> <span
  m='2222320'>computation.</span> </p><p><span m='2223210'>So</span> <span
  m='2223380'>if</span> <span m='2223460'>you</span> <span
  m='2223550'>don't</span> <span m='2223770'>know</span> <span
  m='2224670'>that</span> <span m='2224830'>you</span> <span
  m='2224920'>have</span> <span m='2225080'>a</span> <span
  m='2225330'>cycle</span> <span m='2225540'>or</span> <span
  m='2225630'>not,</span> <span m='2226890'>then</span> <span
  m='2227340'>you</span> <span m='2227540'>end</span> <span
  m='2227760'>up</span> <span m='2228666'>with</span> <span
  m='2230600'>having</span> <span m='2230890'>to</span> <span
  m='2230990'>use</span> <span m='2231200'>Bellman-Ford.</span> <span
  m='2232180'>And</span> <span m='2232350'>so</span> <span
  m='2232480'>that</span> <span m='2232620'>also</span> <span
  m='2232830'>tells</span> <span m='2233040'>you</span> <span
  m='2233140'>something</span> <span m='2233460'>which</span> <span
  m='2233590'>is</span> <span m='2233700'>interesting,</span> <span
  m='2234750'>which</span> <span m='2234870'>is</span> <span
  m='2235510'>Bellman-Ford</span> <span m='2236040'>has</span> <span
  m='2236260'>to</span> <span m='2236370'>detect</span> <span
  m='2236750'>negative</span> <span m='2237050'>cycles.</span> <span
  m='2238400'>If</span> <span m='2238530'>Bellman-Ford</span> <span
  m='2239190'>couldn't</span> <span m='2239390'>detect</span> <span
  m='2239740'>negative</span> <span m='2240020'>cycles,</span> <span
  m='2240880'>then</span> <span m='2241210'>how</span> <span
  m='2241430'>could</span> <span m='2241770'>it</span> <span
  m='2241870'>possibly</span> <span m='2242180'>be</span> <span
  m='2242330'>a</span> <span m='2242390'>correct</span> <span
  m='2242700'>algorithm</span> <span m='2243310'>for</span> <span
  m='2243570'>the</span> <span m='2243690'>arbitrary</span> <span
  m='2244180'>case?</span> </p><p><span m='2245090'>So</span> <span
  m='2245890'>Dijkstra</span> <span m='2246310'>doesn't</span> <span
  m='2246510'>have</span> <span m='2246650'>to</span> <span
  m='2246750'>do</span> <span m='2246840'>that.</span> <span
  m='2247380'>And</span> <span m='2247510'>that's</span> <span
  m='2247670'>why</span> <span m='2247800'>Dijkstra</span> <span m='2248240'>is
  simpler.</span> <span m='2249450'>All</span> <span m='2249530'>right.</span>
  </p><p><span m='2250720'>So</span> <span m='2251000'>let</span> <span
  m='2251120'>me</span> <span m='2253090'>talk</span> <span
  m='2253280'>about</span> <span m='2253460'>the</span> <span
  m='2253540'>general</span> <span m='2253880'>structure</span> <span
  m='2254850'>of</span> <span m='2256190'>shortest</span> <span
  m='2256550'>path</span> <span m='2256820'>algorithms.</span> <span
  m='2257600'>And</span> <span m='2258460'>the</span> <span m='2258620'>2</span>
  <span m='2258930'>important</span> <span m='2259330'>notions</span> <span
  m='2259760'>that</span> <span m='2259870'>I</span> <span
  m='2259900'>want</span> <span m='2260050'>to</span> <span
  m='2261890'>talk</span> <span m='2262060'>about</span> <span
  m='2262280'>here</span> <span m='2262750'>are</span> <span
  m='2264000'>the</span> <span m='2265470'>notion</span> <span
  m='2265820'>of</span> <span m='2265950'>relaxation,</span> <span
  m='2267040'>which</span> <span m='2267200'>we</span> <span
  m='2267290'>sort</span> <span m='2267460'>of</span> <span
  m='2267580'>did</span> <span m='2267790'>already</span> <span
  m='2269030'>when</span> <span m='2269740'>we</span> <span
  m='2270270'>ran</span> <span m='2270670'>through</span> <span
  m='2270820'>this</span> <span m='2271010'>example.</span> <span
  m='2271590'>But</span> <span m='2271640'>I</span> <span
  m='2271690'>need</span> <span m='2271840'>to</span> <span
  m='2271910'>formalize</span> <span m='2272480'>that.</span> <span
  m='2273460'>And</span> <span m='2273815'>then</span> <span
  m='2274170'>we'll</span> <span m='2274280'>go</span> <span
  m='2274420'>back</span> <span m='2274650'>and</span> <span
  m='2274780'>revisit</span> <span m='2275280'>this</span> <span
  m='2275820'>exponential</span> <span m='2279350'>graph</span> <span
  m='2279660'>example.</span> </p><p><span m='2283980'>So</span> <span
  m='2284150'>the</span> <span m='2284260'>general</span> <span
  m='2284590'>structural</span> <span m='2284895'>of</span> <span
  m='2285200'>shortest</span> <span m='2285600'>path</span> <span
  m='2285850'>algorithms</span> <span m='2286650'>are as</span> <span
  m='2286930'>follows.</span> <span m='2289260'>We're</span> <span
  m='2289360'>going to</span> <span m='2289470'>initialize</span> <span
  m='2293620'>for</span> <span m='2293820'>all</span> <span m='2294060'>u</span>
  <span m='2294270'>belonging</span> <span m='2294770'>to</span> <span
  m='2295610'>the</span> <span m='2296060'>vertex</span> <span
  m='2296470'>set,</span> <span m='2297290'>we</span> <span
  m='2297430'>set</span> <span m='2297730'>d</span> <span m='2297910'>v</span>
  <span m='2298150'>to</span> <span m='2298220'>be</span> <span
  m='2298510'>infinity.</span> <span m='2300380'>And</span> <span
  m='2300560'>we</span> <span m='2300750'>set</span> <span
  m='2301730'>the</span> <span m='2302170'>predecessor</span> <span
  m='2304030'>to</span> <span m='2304120'>be</span> <span
  m='2304240'>NIL.</span> </p><p><span m='2306260'>And</span> <span
  m='2306400'>then</span> <span m='2306610'>we'll</span> <span
  m='2306800'>set</span> <span m='2307440'>d</span> <span m='2307700'>of</span>
  <span m='2307830'>S</span> <span m='2308970'>to</span> <span
  m='2309300'>be</span> <span m='2309410'>0.</span> <span
  m='2311750'>We're</span> <span m='2311860'>talking</span> <span
  m='2312030'>about</span> <span m='2312190'>a</span> <span
  m='2312240'>single</span> <span m='2312540'>source,</span> <span
  m='2312930'>here.</span> <span m='2313400'>We'll</span> <span
  m='2313550'>set</span> <span m='2313750'>that</span> <span
  m='2313890'>to</span> <span m='2313960'>be</span> <span m='2314060'>0.</span>
  <span m='2315800'>And</span> <span m='2317630'>what</span> <span
  m='2317780'>we're</span> <span m='2317870'>going</span> <span
  m='2317980'>to</span> <span m='2318060'>do</span> <span m='2318250'>is</span>
  <span m='2318800'>essentially</span> <span m='2319450'>repeat.</span>
  </p><p><span m='2325110'>Select</span> <span m='2328870'>some</span> <span
  m='2329220'>edge</span> <span m='2330060'>u</span> <span
  m='2330330'>comma</span> <span m='2330650'>v.</span> <span
  m='2331800'>And</span> <span m='2332080'>I'm</span> <span
  m='2332140'>not</span> <span m='2332380'>specifying</span> <span
  m='2333250'>how.</span> <span m='2334240'>This</span> <span
  m='2334370'>is</span> <span m='2334770'>going</span> <span
  m='2334940'>to</span> <span m='2335420'>result</span> <span
  m='2335800'>in</span> <span m='2335870'>a</span> <span
  m='2335930'>different</span> <span m='2336160'>algorithm</span> <span
  m='2336560'>depending</span> <span m='2336890'>on</span> <span
  m='2336980'>the</span> <span m='2337070'>specifics</span> <span
  m='2337610'>of</span> <span m='2337700'>how.</span> </p><p><span
  m='2338640'>But</span> <span m='2339000'>the</span> <span
  m='2339150'>important</span> <span m='2339440'>notion</span> <span
  m='2339940'>is</span> <span m='2340400'>that</span> <span
  m='2340570'>we're</span> <span m='2340670'>going</span> <span
  m='2340820'>to</span> <span m='2340910'>relax</span> <span
  m='2344860'>edge</span> <span m='2347130'>u,</span> <span
  m='2347430'>v.</span> <span m='2349210'>And</span> <span
  m='2350110'>what</span> <span m='2350520'>the</span> <span
  m='2350680'>notion</span> <span m='2350940'>of</span> <span
  m='2350990'>relaxation</span> <span m='2351650'>is</span> <span
  m='2351980'>is</span> <span m='2352310'>that</span> <span
  m='2353190'>you're</span> <span m='2353340'>going</span> <span
  m='2353490'>to</span> <span m='2353580'>look</span> <span
  m='2353840'>at</span> <span m='2353910'>it.</span> <span
  m='2354140'>And</span> <span m='2354260'>you'll</span> <span
  m='2354360'>say,</span> <span m='2354660'>well,</span> <span
  m='2355180'>if</span> <span m='2355560'>d</span> <span m='2356015'>of</span>
  <span m='2356470'>v</span> <span m='2358390'>is</span> <span
  m='2358640'>greater</span> <span m='2359020'>than</span> <span
  m='2359520'>d</span> <span m='2359830'>of</span> <span m='2359990'>u</span>
  <span m='2361880'>plus</span> <span m='2362260'>w</span> <span
  m='2363370'>u,</span> <span m='2363700'>v,</span> <span
  m='2365800'>then</span> <span m='2366900'>I've</span> <span
  m='2367170'>discovered</span> <span m='2368560'>a</span> <span
  m='2368680'>better</span> <span m='2369000'>way</span> <span
  m='2369950'>of</span> <span m='2370130'>getting</span> <span
  m='2370470'>to</span> <span m='2370570'>v</span> <span m='2371750'>then</span>
  <span m='2372160'>I</span> <span m='2372250'>currently</span> <span
  m='2372720'>know.</span> </p><p><span m='2373640'>So</span> <span
  m='2373810'>d</span> <span m='2374040'>of</span> <span m='2374160'>v</span>
  <span m='2374960'>would</span> <span m='2375070'>currently</span> <span
  m='2375390'>be</span> <span m='2375540'>infinity,</span> <span
  m='2376100'>which</span> <span m='2376150'>means</span> <span
  m='2376310'>I</span> <span m='2376350'>haven't</span> <span
  m='2376650'>found</span> <span m='2377360'>a</span> <span
  m='2377460'>way</span> <span m='2377660'>of</span> <span
  m='2377760'>getting</span> <span m='2378010'>to</span> <span
  m='2378070'>v</span> <span m='2378370'>yet.</span> <span
  m='2379020'>But</span> <span m='2379810'>I</span> <span
  m='2379960'>know</span> <span m='2380180'>that</span> <span m='2380620'>d
  of</span> <span m='2381030'>u,</span> <span m='2381300'>for</span> <span
  m='2381420'>example,</span> <span m='2381790'>is</span> <span
  m='2381870'>a</span> <span m='2381940'>finite</span> <span
  m='2382290'>number.</span> <span m='2383110'>And I</span> <span
  m='2383260'>do</span> <span m='2383440'>know</span> <span
  m='2383630'>that</span> <span m='2383810'>this</span> <span
  m='2383980'>edge</span> <span m='2384220'>exists</span> <span
  m='2384620'>from</span> <span m='2384770'>u to</span> <span
  m='2385080'>v,</span> <span m='2385710'>which</span> <span
  m='2385840'>means</span> <span m='2386060'>that</span> <span
  m='2386210'>I</span> <span m='2386290'>can</span> <span
  m='2386450'>update</span> <span m='2386890'>the</span> <span
  m='2386970'>value</span> <span m='2387890'>of</span> <span
  m='2388060'>d</span> <span m='2388240'>of</span> <span m='2388320'>v.</span>
  <span m='2388910'>And</span> <span m='2389010'>that's</span> <span
  m='2389160'>what</span> <span m='2389300'>we</span> <span
  m='2389400'>call</span> <span m='2389630'>relaxation</span> <span
  m='2391460'>of</span> <span m='2391620'>the</span> <span
  m='2391690'>edge</span> <span m='2391960'>u,</span> <span
  m='2392160'>v.</span> </p><p><span m='2393550'>And</span> <span
  m='2393780'>so</span> <span m='2393890'>what</span> <span
  m='2394040'>you</span> <span m='2394140'>do</span> <span
  m='2394320'>here</span> <span m='2394690'>is</span> <span
  m='2396140'>if</span> <span m='2396620'>the if</span> <span
  m='2397050'>is</span> <span m='2397290'>true,</span> <span
  m='2397710'>then</span> <span m='2397780'>you</span> <span
  m='2397890'>set</span> <span m='2398220'>d,</span> <span m='2398643'>v</span>
  <span m='2399490'>to be</span> <span m='2400846'>d,</span> <span
  m='2401298'>u</span> <span m='2402450'>plus</span> <span m='2402880'>w</span>
  <span m='2404100'>u,</span> <span m='2404410'>v.</span> <span
  m='2405770'>And</span> <span m='2406270'>you'll</span> <span
  m='2406420'>also</span> <span m='2406890'>update</span> <span
  m='2407360'>the</span> <span m='2407960'>predecessor</span> <span
  m='2408540'>relationship,</span> <span m='2409570'>because</span> <span
  m='2409790'>the</span> <span m='2409870'>current</span> <span
  m='2411320'>best</span> <span m='2412400'>predecessor</span> <span
  m='2413900'>for</span> <span m='2415740'>v</span> <span m='2416430'>is</span>
  <span m='2416590'>going</span> <span m='2416730'>to</span> <span
  m='2416790'>be</span> <span m='2416960'>u.</span> <span m='2417826'>So</span>
  <span m='2418260'>that's</span> <span m='2418500'>the</span> <span
  m='2418580'>notion</span> <span m='2418920'>of</span> <span
  m='2419380'>relaxation.</span> </p><p><span m='2420900'>And</span> <span
  m='2422260'>I kind of</span> <span m='2422450'>ran out</span> <span
  m='2422630'>of</span> <span m='2422720'>room</span> <span
  m='2423030'>here.</span> <span m='2423880'>But</span> <span
  m='2425950'>you</span> <span m='2426120'>keep</span> <span
  m='2426310'>doing</span> <span m='2426510'>this.</span> <span m='2426930'>This
  repeat.</span> <span m='2428010'>So</span> <span m='2428480'>what</span> <span
  m='2429890'>is</span> <span m='2430000'>the</span> <span
  m='2430240'>repeat?</span> <span m='2430525'>Well,</span> <span
  m='2431180'>the</span> <span m='2431330'>repeat</span> <span
  m='2431830'>is</span> <span m='2432750'>until</span> <span
  m='2439310'>all</span> <span m='2439650'>edges</span> <span
  m='2442110'>have</span> <span m='2445360'>d of</span> <span
  m='2445660'>v</span> <span m='2447070'>less</span> <span
  m='2447360'>than</span> <span m='2447500'>or</span> <span
  m='2447650'>equal</span> <span m='2448030'>to</span> <span
  m='2449630'>d</span> <span m='2449920'>of</span> <span m='2450000'>u</span>
  <span m='2451300'>plus</span> <span m='2451560'>w</span> <span
  m='2451845'>u,</span> <span m='2452130'>v.</span> </p><p><span
  m='2456860'>And</span> <span m='2458220'>the</span> <span
  m='2458430'>assumption</span> <span m='2458700'>here</span> <span
  m='2458930'>is</span> <span m='2459010'>that</span> <span
  m='2459130'>you</span> <span m='2459200'>have</span> <span
  m='2459330'>no</span> <span m='2459500'>negative</span> <span
  m='2459790'>cycles.</span> <span m='2461940'>We</span> <span
  m='2462060'>need</span> <span m='2462300'>a</span> <span
  m='2462370'>different</span> <span m='2462710'>structure.</span> <span
  m='2465020'>The</span> <span m='2465260'>notion</span> <span
  m='2465540'>of</span> <span m='2465640'>relaxation</span> <span
  m='2466210'>is</span> <span m='2466460'>still going to</span> <span
  m='2466590'>be</span> <span m='2466720'>relevant.</span> <span
  m='2467840'>But</span> <span m='2468940'>don't</span> <span
  m='2469160'>think</span> <span m='2469310'>of</span> <span
  m='2469400'>this</span> <span m='2469990'>structure</span> <span
  m='2471650'>as</span> <span m='2471890'>being</span> <span
  m='2472980'>the</span> <span m='2473090'>structure</span> <span
  m='2473560'>that</span> <span m='2473890'>Bellman-Ford</span> <span
  m='2474490'>uses,</span> <span m='2474940'>or</span> <span
  m='2475740'>algorithms</span> <span m='2476190'>that</span> <span
  m='2477030'>can</span> <span m='2477240'>handle</span> <span
  m='2477610'>negative</span> <span m='2477880'>cycles</span> <span
  m='2478270'>use.</span> </p><p><span m='2479580'>So</span> <span
  m='2481010'>hopefully,</span> <span m='2481290'>you</span> <span
  m='2481340'>got</span> <span m='2481530'>the</span> <span
  m='2481600'>notion</span> <span m='2481850'>of</span> <span
  m='2481930'>relaxation,</span> <span m='2483370'>which</span> <span
  m='2483610'>is</span> <span m='2485290'>from</span> <span m='2485530'>a
  pictorial</span> <span m='2486000'>standpoint,</span> <span
  m='2486580'>it's</span> <span m='2486700'>simply</span> <span
  m='2486980'>something</span> <span m='2487660'>that</span> <span
  m='2488080'>we</span> <span m='2488190'>did</span> <span
  m='2489420'>when</span> <span m='2489580'>we</span> <span
  m='2489690'>looked</span> <span m='2489960'>at</span> <span
  m='2490750'>updating</span> <span m='2491220'>the</span> <span
  m='2491310'>value</span> <span m='2492430'>of</span> <span
  m='2492680'>6</span> <span m='2493060'>to</span> <span m='2493160'>5,</span>
  <span m='2493580'>for</span> <span m='2493700'>example.</span> <span
  m='2495150'>So</span> <span m='2495300'>we</span> <span
  m='2495400'>said</span> <span m='2496550'>through</span> <span
  m='2496730'>this</span> <span m='2496930'>process,</span> <span
  m='2498300'>if</span> <span m='2498560'>I</span> <span
  m='2499840'>relax</span> <span m='2500260'>this</span> <span
  m='2500410'>particular</span> <span m='2500770'>edge</span> <span
  m='2501490'>and</span> <span m='2501740'>d</span> <span m='2501930'>was</span>
  <span m='2502100'>already</span> <span m='2502430'>set</span> <span
  m='2502660'>up--</span> <span m='2502970'>let's</span> <span
  m='2503010'>say</span> <span m='2503120'>d,</span> <span
  m='2503620'>the</span> <span m='2504340'>vertex</span> <span
  m='2504790'>here</span> <span m='2505510'>had</span> <span
  m='2506100'>3.</span> <span m='2507230'>And</span> <span
  m='2507520'>this</span> <span m='2507660'>was</span> <span
  m='2507820'>originally</span> <span m='2508330'>6.</span> <span
  m='2509450'>And</span> <span m='2509690'>I</span> <span
  m='2509720'>look</span> <span m='2509910'>at</span> <span
  m='2509990'>it</span> <span m='2510130'>and</span> <span m='2510220'>I</span>
  <span m='2510290'>say,</span> <span m='2510900'>D</span> <span
  m='2511160'>of</span> <span m='2511260'>C</span> <span m='2511710'>is</span>
  <span m='2511870'>6.</span> </p><p><span m='2513620'>On</span> <span
  m='2513810'>other</span> <span m='2513970'>hand,</span> <span
  m='2515480'>6</span> <span m='2515940'>is</span> <span
  m='2516180'>greater</span> <span m='2516560'>than</span> <span
  m='2518200'>d</span> <span m='2518530'>of</span> <span m='2518840'>the</span>
  <span m='2519120'>vertex</span> <span m='2519620'>D,</span> <span
  m='2520570'>which</span> <span m='2520760'>happens</span> <span
  m='2521070'>to</span> <span m='2521150'>be</span> <span m='2521320'>3</span>
  <span m='2522080'>plus</span> <span m='2522380'>2.</span> <span
  m='2523060'>And</span> <span m='2523280'>since</span> <span
  m='2523490'>5</span> <span m='2523750'>is</span> <span m='2523860'>less</span>
  <span m='2524060'>than</span> <span m='2524200'>6,</span> <span
  m='2524670'>I</span> <span m='2524790'>can</span> <span
  m='2524980'>relax</span> <span m='2525480'>this</span> <span
  m='2525680'>edge</span> <span m='2526370'>and</span> <span
  m='2526520'>update</span> <span m='2526940'>the</span> <span
  m='2527010'>value</span> <span m='2527360'>of</span> <span
  m='2527450'>6</span> <span m='2527880'>to</span> <span m='2527980'>5.</span>
  <span m='2529610'>And</span> <span m='2529770'>then</span> <span
  m='2529900'>I</span> <span m='2530030'>update</span> <span
  m='2530470'>the</span> <span m='2530580'>predecessor</span> <span
  m='2531140'>relationship</span> <span m='2532690'>to</span> <span
  m='2533500'>have</span> <span m='2534490'>a</span> <span m='2534620'>pi</span>
  <span m='2535140'>of</span> <span m='2535230'>C</span> <span
  m='2535820'>to</span> <span m='2535950'>be</span> <span m='2536120'>D.</span>
  <span m='2537970'>That's</span> <span m='2538300'>the</span> <span
  m='2538370'>notion</span> <span m='2538630'>of</span> <span
  m='2538720'>relaxation.</span> <span m='2539460'>Fundamental</span> <span
  m='2540040'>notion.</span> <span m='2540610'>Going</span> <span
  m='2540730'>to</span> <span m='2541230'>use</span> <span m='2541530'>it</span>
  <span m='2541620'>in</span> <span m='2541770'>every</span> <span
  m='2542010'>algorithm</span> <span m='2543030'>that</span> <span
  m='2543420'>we</span> <span m='2543610'>talk</span> <span
  m='2543790'>about.</span> </p><p><span m='2544860'>When</span> <span
  m='2545100'>do you</span> <span m='2545260'>stop?</span> <span
  m='2546530'>Well,</span> <span m='2546880'>when</span> <span
  m='2546980'>you</span> <span m='2547080'>don't</span> <span
  m='2547180'>have</span> <span m='2547270'>negative</span> <span
  m='2547570'>cycles,</span> <span m='2548480'>there's</span> <span
  m='2548630'>a</span> <span m='2548700'>fairly</span> <span
  m='2549150'>clean</span> <span m='2551060'>termination</span> <span
  m='2551630'>condition,</span> <span m='2552740'>which</span> <span
  m='2553010'>says</span> <span m='2553190'>that</span> <span
  m='2553320'>you</span> <span m='2553430'>can't</span> <span
  m='2553750'>relax</span> <span m='2554005'>any of</span> <span m='2554260'>the
  edges</span> <span m='2554700'>any</span> <span m='2554870'>more.</span> <span
  m='2555940'>OK</span> <span m='2556980'>You</span> <span
  m='2557230'>get</span> <span m='2557520'>to</span> <span
  m='2557590'>the</span> <span m='2557690'>point</span> <span
  m='2558030'>where</span> <span m='2558870'>you</span> <span
  m='2559040'>have</span> <span m='2559650'>values</span> <span
  m='2560380'>that</span> <span m='2560510'>are</span> <span
  m='2560600'>associated</span> <span m='2561040'>with</span> <span
  m='2561200'>each</span> <span m='2561430'>of</span> <span
  m='2561540'>these</span> <span m='2561730'>vertices</span> <span
  m='2562210'>inside.</span> <span m='2563170'>And</span> <span
  m='2563280'>it</span> <span m='2563340'>doesn't</span> <span
  m='2563580'>matter</span> <span m='2563860'>what</span> <span
  m='2564120'>edge</span> <span m='2564340'>you</span> <span
  m='2564500'>pick,</span> <span m='2565150'>you</span> <span
  m='2565295'>can't</span> <span m='2565440'>improve</span> <span
  m='2565770'>them.</span> </p><p><span m='2567580'>So</span> <span
  m='2568910'>this</span> <span m='2569130'>termination</span> <span
  m='2569590'>condition,</span> <span m='2570650'>it</span> <span
  m='2570820'>could</span> <span m='2571340'>involve</span> <span
  m='2572190'>an</span> <span m='2572380'>order</span> <span
  m='2572820'>E</span> <span m='2573170'>check.</span> <span
  m='2574430'>So</span> <span m='2574680'>we're not</span> <span
  m='2574840'>talking</span> <span m='2575050'>complexity</span> <span
  m='2575570'>here</span> <span m='2575770'>yet</span> <span
  m='2577900'>in</span> <span m='2578080'>terms</span> <span
  m='2578280'>of</span> <span m='2578360'>being</span> <span
  m='2578710'>efficient.</span> </p><p><span m='2579190'>But</span> <span
  m='2579930'>you</span> <span m='2580100'>can</span> <span
  m='2580190'>imagine</span> <span m='2580630'>when</span> <span
  m='2580750'>I</span> <span m='2580820'>say</span> <span
  m='2581100'>until</span> <span m='2581530'>all</span> <span
  m='2581810'>edges</span> <span m='2582580'>cannot</span> <span
  m='2582900'>be</span> <span m='2583040'>relaxed,</span> <span
  m='2584080'>that</span> <span m='2584260'>you'd</span> <span m='2584360'>have
  to</span> <span m='2584540'>look</span> <span m='2584690'>at</span> <span
  m='2584750'>all</span> <span m='2584900'>the</span> <span
  m='2584980'>edges.</span> <span m='2585720'>And</span> <span
  m='2586120'>if</span> <span m='2586310'>any</span> <span m='2586470'>one
  of</span> <span m='2586650'>them</span> <span m='2586790'>can</span> <span
  m='2586880'>be</span> <span m='2587030'>relaxed,</span> <span
  m='2587740'>it's</span> <span m='2587830'>possible</span> <span
  m='2588160'>that</span> <span m='2588270'>another</span> <span
  m='2588530'>one</span> <span m='2589590'>can</span> <span
  m='2589790'>now</span> <span m='2589930'>be</span> <span
  m='2590100'>relaxed.</span> <span m='2591480'>So</span> <span
  m='2591940'>you've</span> <span m='2592080'>got</span> <span
  m='2592190'>to</span> <span m='2592470'>keep</span> <span
  m='2592680'>going</span> <span m='2592980'>until</span> <span
  m='2593160'>you</span> <span m='2593250'>get</span> <span
  m='2593390'>to</span> <span m='2593430'>the</span> <span
  m='2593530'>point</span> <span m='2593800'>where</span> <span
  m='2594300'>none</span> <span m='2594570'>of</span> <span
  m='2594670'>the</span> <span m='2594740'>edges</span> <span
  m='2595430'>can</span> <span m='2595560'>be</span> <span
  m='2595680'>relaxed.</span> </p><p><span m='2597610'>So</span> <span
  m='2598180'>this</span> <span m='2598410'>is</span> <span m='2598520'>a</span>
  <span m='2598580'>brute</span> <span m='2598850'>force</span> <span
  m='2599120'>algorithm.</span> <span m='2600040'>And</span> <span
  m='2600240'>it'll</span> <span m='2600450'>work.</span> <span
  m='2601420'>It'll</span> <span m='2601530'>just</span> <span m='2601740'>be
  slow.</span> <span m='2603720'>It'll</span> <span m='2603940'>work</span>
  <span m='2604350'>for</span> <span m='2604450'>known</span> <span
  m='2604650'>negative</span> <span m='2604990'>cycles.</span> <span
  m='2606110'>And</span> <span m='2606360'>if</span> <span
  m='2606480'>you</span> <span m='2606580'>just</span> <span
  m='2606940'>kind</span> <span m='2607070'>of</span> <span
  m='2607140'>randomly</span> <span m='2607620'>select</span> <span
  m='2607940'>these</span> <span m='2608130'>edges</span> <span
  m='2609290'>and</span> <span m='2609800'>just</span> <span
  m='2609970'>keep</span> <span m='2610130'>going,</span> <span
  m='2611020'>I'll</span> <span m='2611150'>give</span> <span
  m='2611280'>you</span> <span m='2611340'>an</span> <span
  m='2611390'>example</span> <span m='2611830'>where</span> <span
  m='2612000'>it</span> <span m='2612140'>works</span> <span
  m='2612430'>pretty</span> <span m='2612590'>badly</span> <span
  m='2615390'>in</span> <span m='2615740'>a</span> <span
  m='2615780'>minute.</span> <span m='2616880'>But</span> <span
  m='2617050'>this</span> <span m='2617230'>is</span> <span
  m='2617360'>an</span> <span m='2617450'>algorithm.</span> </p><p><span
  m='2618340'>So</span> <span m='2618450'>I</span> <span
  m='2618550'>guess</span> <span m='2619070'>I</span> <span
  m='2619150'>lied</span> <span m='2619490'>when</span> <span
  m='2619570'>I</span> <span m='2619620'>said</span> <span m='2619840'>we</span>
  <span m='2619940'>weren't</span> <span m='2620030'>going to</span> <span
  m='2620230'>give</span> <span m='2620400'>you</span> <span
  m='2620490'>an</span> <span m='2620580'>algorithm.</span> <span
  m='2622270'>It</span> <span m='2622460'>is</span> <span m='2622590'>an</span>
  <span m='2622700'>algorithm.</span> <span m='2623150'>It's</span> <span
  m='2623280'>just</span> <span m='2624030'>an</span> <span
  m='2624200'>algorithm</span> <span m='2625220'>that</span> <span
  m='2625480'>you</span> <span m='2625590'>never</span> <span
  m='2625790'>want</span> <span m='2625970'>to</span> <span
  m='2626010'>implement.</span> <span m='2627150'>You</span> <span
  m='2627310'>do</span> <span m='2627430'>want</span> <span
  m='2627560'>to</span> <span m='2627620'>implement</span> <span
  m='2627980'>the</span> <span m='2628080'>relaxation</span> <span
  m='2628630'>condition.</span> <span m='2629940'>But</span> <span
  m='2631140'>not</span> <span m='2631480'>this</span> <span
  m='2632480'>random</span> <span m='2632880'>way</span> <span
  m='2633140'>of</span> <span m='2633220'>selecting</span> <span
  m='2633720'>edges</span> <span m='2634540'>and</span> <span
  m='2634840'>having</span> <span m='2635130'>this</span> <span
  m='2635290'>termination</span> <span m='2635770'>condition</span> <span
  m='2636210'>that,</span> <span m='2637430'>in</span> <span
  m='2637690'>of</span> <span m='2637710'>itself,</span> <span
  m='2638470'>is</span> <span m='2638600'>an</span> <span
  m='2638700'>order</span> <span m='2639010'>E</span> <span
  m='2639230'>check.</span> </p><p><span m='2641770'>And</span> <span
  m='2641990'>one</span> <span m='2642150'>of</span> <span
  m='2642190'>the</span> <span m='2642260'>reasons</span> <span
  m='2642570'>why</span> <span m='2643310'>you</span> <span
  m='2643400'>don't</span> <span m='2643490'>want</span> <span
  m='2643580'>to</span> <span m='2643620'>implement</span> <span
  m='2643910'>this</span> <span m='2644040'>algorithm</span> <span
  m='2644850'>is</span> <span m='2645190'>coming</span> <span
  m='2645420'>up</span> <span m='2645540'>shortly</span> <span
  m='2646080'>in</span> <span m='2646530'>our</span> <span
  m='2647200'>exponential</span> <span m='2647710'>graph</span> <span
  m='2647930'>example.</span> <span m='2648710'>But</span> <span
  m='2649030'>let</span> <span m='2649150'>me</span> <span
  m='2650010'>make</span> <span m='2650220'>sure</span> <span
  m='2651140'>that</span> <span m='2651460'>people</span> <span
  m='2651640'>aren't</span> <span m='2651760'>bored.</span> <span
  m='2652530'>Any</span> <span m='2652740'>questions</span> <span
  m='2653100'>about</span> <span m='2653890'>the</span> <span
  m='2654070'>general</span> <span m='2654350'>structure,</span> <span
  m='2655040'>relaxation,</span> <span m='2656770'>anything?</span> <span
  m='2658156'>Are</span> <span m='2658550'>we</span> <span
  m='2658670'>good?</span> <span m='2659870'>OK.</span> </p><p><span
  m='2660550'>So</span> <span m='2660680'>you</span> <span
  m='2660810'>guys,</span> <span m='2661800'>I</span> <span
  m='2662280'>walk</span> <span m='2662600'>away</span> <span
  m='2662810'>from</span> <span m='2662970'>lecture</span> <span
  m='2663340'>thinking</span> <span m='2664050'>I've</span> <span
  m='2664190'>given</span> <span m='2664380'>this</span> <span
  m='2664490'>spectacular</span> <span m='2665130'>lecture</span> <span
  m='2665880'>and</span> <span m='2666000'>everybody</span> <span
  m='2666320'>understands.</span> <span m='2667170'>And</span> <span
  m='2667270'>then</span> <span m='2667380'>Victor</span> <span
  m='2667690'>tells</span> <span m='2667930'>me</span> <span
  m='2668510'>when</span> <span m='2668840'>he</span> <span
  m='2668990'>shows</span> <span m='2669200'>up</span> <span
  m='2669320'>in</span> <span m='2669420'>section</span> <span
  m='2669970'>in</span> <span m='2670020'>the</span> <span
  m='2670090'>morning,</span> <span m='2670610'>he</span> <span
  m='2670740'>says</span> <span m='2672260'>did</span> <span
  m='2672780'>people</span> <span m='2672990'>understand</span> <span
  m='2673540'>graphs?</span> <span m='2674050'>And</span> <span
  m='2674470'>everyone</span> <span m='2674780'>says</span> <span
  m='2675040'>no.</span> <span m='2676130'>Or</span> <span
  m='2676510'>did</span> <span m='2676700'>people</span> <span
  m='2676930'>understand</span> <span m='2677430'>x?</span> <span
  m='2677810'>And</span> <span m='2677950'>people</span> <span
  m='2678170'>say</span> <span m='2678340'>no.</span> </p><p><span
  m='2678850'>So</span> <span m='2679290'>at</span> <span
  m='2679420'>least</span> <span m='2679880'>tomorrow,</span> <span
  m='2680620'>tell</span> <span m='2680820'>Victor</span> <span
  m='2681360'>that</span> <span m='2681460'>you</span> <span
  m='2681540'>understood.</span> <span m='2683460'>Whether</span> <span
  m='2683670'>you</span> <span m='2683790'>did</span> <span
  m='2683980'>or</span> <span m='2684050'>not.</span> <span
  m='2685840'>So</span> <span m='2686000'>then</span> <span m='2686130'>I</span>
  <span m='2686220'>feel</span> <span m='2686400'>better.</span> </p><p><span
  m='2687090'>AUDIENCE: That's</span> <span m='2687870'>going to</span> <span
  m='2688346'>make</span> <span m='2688822'>my life real easy.</span>
  </p><p><span m='2689774'>PROFESSOR: Yeah,</span> <span
  m='2690250'>right.</span> <span m='2691680'>So</span> <span
  m='2691990'>good.</span> <span m='2693030'>Well,</span> <span
  m='2693780'>you</span> <span m='2693910'>probably</span> <span
  m='2694160'>like</span> <span m='2694580'>hearing</span> <span
  m='2694840'>stuff</span> <span m='2695070'>from</span> <span
  m='2695210'>Victor</span> <span m='2695540'>better</span> <span
  m='2695680'>than</span> <span m='2695850'>me</span> <span
  m='2696000'>anyway.</span> <span m='2696470'>That's</span> <span
  m='2698140'>the</span> <span m='2698230'>secret</span> <span
  m='2698580'>here,</span> <span m='2698830'>right?</span> </p><p><span
  m='2702770'>All</span> <span m='2702850'>right,</span> <span
  m='2703100'>so</span> <span m='2704230'>one</span> <span m='2704420'>of</span>
  <span m='2704470'>the</span> <span m='2704530'>reasons</span> <span
  m='2704810'>why</span> <span m='2705010'>you</span> <span
  m='2705100'>don't</span> <span m='2705240'>want</span> <span
  m='2705350'>to</span> <span m='2705390'>implement</span> <span
  m='2705820'>this</span> <span m='2705990'>algorithm</span> <span
  m='2709380'>is</span> <span m='2709680'>precisely</span> <span
  m='2710110'>this</span> <span m='2710300'>example</span> <span
  m='2711320'>that</span> <span m='2711640'>I</span> <span
  m='2711770'>put</span> <span m='2711940'>up.</span> <span
  m='2712850'>And</span> <span m='2713270'>this</span> <span
  m='2713440'>is</span> <span m='2713510'>a</span> <span
  m='2713580'>really</span> <span m='2713740'>neat</span> <span
  m='2713940'>example</span> <span m='2714660'>that</span> <span
  m='2714800'>I</span> <span m='2714850'>like</span> <span m='2715060'>a</span>
  <span m='2715120'>lot,</span> <span m='2716120'>because</span> <span
  m='2716380'>it</span> <span m='2716560'>points</span> <span
  m='2716890'>out</span> <span m='2717140'>two</span> <span
  m='2717300'>different</span> <span m='2717600'>things.</span> <span
  m='2720540'>It</span> <span m='2720700'>points</span> <span
  m='2721020'>out</span> <span m='2721250'>that</span> <span
  m='2721800'>exponential</span> <span m='2724330'>number</span> <span
  m='2724670'>of</span> <span m='2724760'>paths,</span> <span
  m='2725330'>an</span> <span m='2725390'>exponential</span> <span
  m='2725840'>number</span> <span m='2726050'>of</span> <span
  m='2726120'>paths</span> <span m='2727160'>in</span> <span
  m='2727260'>a</span> <span m='2727320'>graph,</span> <span
  m='2727840'>could</span> <span m='2728020'>cause</span> <span
  m='2728270'>a</span> <span m='2728340'>problem</span> <span
  m='2728760'>with</span> <span m='2728870'>this</span> <span
  m='2729010'>algorithm.</span> </p><p><span m='2730110'>The</span> <span
  m='2730330'>other thing</span> <span m='2730530'>that it</span> <span
  m='2730730'>points</span> <span m='2731060'>out</span> <span
  m='2731280'>is</span> <span m='2731420'>that</span> <span
  m='2732080'>we</span> <span m='2732180'>got</span> <span
  m='2732330'>issues</span> <span m='2733320'>with</span> <span
  m='2733500'>the</span> <span m='2733600'>weights</span> <span
  m='2734070'>of</span> <span m='2734170'>edges.</span> <span m='2735590'>One
  of</span> <span m='2735800'>the nice</span> <span
  m='2736090'>observations</span> <span m='2737640'>one</span> <span
  m='2737820'>of</span> <span m='2737900'>you</span> <span
  m='2738010'>made</span> <span m='2738400'>earlier</span> <span
  m='2738720'>on</span> <span m='2739480'>is</span> <span
  m='2739700'>that</span> <span m='2740370'>we</span> <span
  m='2740510'>had</span> <span m='2740730'>these</span> <span
  m='2740910'>neat</span> <span m='2741130'>algorithms</span> <span
  m='2742050'>that</span> <span m='2742210'>did</span> <span
  m='2742340'>not</span> <span m='2742560'>depend</span> <span
  m='2743000'>on</span> <span m='2743230'>the</span> <span
  m='2743350'>dynamic</span> <span m='2743810'>range</span> <span
  m='2744200'>of</span> <span m='2744300'>the</span> <span
  m='2744390'>weights.</span> </p><p><span m='2745760'>So</span> <span
  m='2746130'>let's</span> <span m='2746360'>just</span> <span
  m='2746530'>say</span> <span m='2746790'>that</span> <span
  m='2747560'>I</span> <span m='2747700'>in</span> <span m='2747820'>fact</span>
  <span m='2748150'>had</span> <span m='2748480'>an</span> <span
  m='2748570'>exponential</span> <span m='2749240'>range</span> <span
  m='2749590'>for</span> <span m='2749670'>the</span> <span
  m='2749790'>weights.</span> <span m='2750970'>I know</span> <span
  m='2751200'>4</span> <span m='2751450'>isn't</span> <span
  m='2751750'>exponential,</span> <span m='2753620'>but</span> <span
  m='2754600'>at</span> <span m='2754740'>some</span> <span
  m='2754920'>level,</span> <span m='2755220'>you</span> <span
  m='2755310'>could</span> <span m='2755420'>imagine</span> <span
  m='2755770'>that</span> <span m='2755900'>it's</span> <span
  m='2756790'>exponentially</span> <span m='2757500'>related</span> <span
  m='2757880'>to</span> <span m='2758000'>1</span> <span m='2758920'>or</span>
  <span m='2759120'>2.</span> <span m='2759980'>And</span> <span
  m='2760520'>the</span> <span m='2760710'>point</span> <span
  m='2760940'>here</span> <span m='2761190'>is</span> <span
  m='2761330'>that</span> <span m='2761660'>if</span> <span m='2761830'>I</span>
  <span m='2761910'>created</span> <span m='2762390'>a</span> <span
  m='2762450'>graph</span> <span m='2763780'>that</span> <span
  m='2766020'>looked</span> <span m='2766210'>like</span> <span
  m='2766470'>this,</span> <span m='2767920'>where</span> <span
  m='2770480'>I</span> <span m='2770560'>have</span> <span
  m='2770700'>V4,</span> <span m='2771680'>V5,</span> <span
  m='2772530'>V6,</span> <span m='2773800'>V7,</span> <span
  m='2773940'>V8,</span> <span m='2775270'>and</span> <span
  m='2775410'>it</span> <span m='2775470'>had</span> <span
  m='2775710'>this</span> <span m='2777450'>structure,</span> <span
  m='2779140'>then</span> <span m='2780390'>I'm</span> <span
  m='2780860'>going</span> <span m='2780990'>to</span> <span
  m='2781040'>end</span> <span m='2781260'>up</span> <span
  m='2781480'>having</span> <span m='2782710'>something</span> <span
  m='2783270'>like</span> <span m='2784690'>2</span> <span
  m='2784960'>raised</span> <span m='2785270'>to</span> <span
  m='2785390'>n</span> <span m='2785660'>over</span> <span m='2785970'>2</span>
  <span m='2787620'>weight</span> <span m='2788730'>if</span> <span
  m='2788910'>I</span> <span m='2789000'>have n</span> <span
  m='2789270'>vertices</span> <span m='2789990'>in</span> <span
  m='2790100'>this</span> <span m='2790300'>graph.</span> <span
  m='2790700'>Or</span> <span m='2790820'>at</span> <span
  m='2790950'>least</span> <span m='2791080'>the</span> <span
  m='2791180'>dynamic</span> <span m='2791610'>range</span> <span m='2792150'>of
  these</span> <span m='2792260'>weights</span> <span m='2793060'>is</span>
  <span m='2793210'>going</span> <span m='2793330'>to</span> <span
  m='2793370'>be</span> <span m='2793530'>2</span> <span
  m='2793830'>raised</span> <span m='2794230'>to</span> <span
  m='2794360'>n</span> <span m='2794640'>divided</span> <span
  m='2794960'>by</span> <span m='2795110'>2.</span> <span
  m='2795730'>Everybody</span> <span m='2796040'>buy</span> <span
  m='2796220'>that?</span> </p><p><span m='2799720'>So think</span> <span
  m='2799960'>of</span> <span m='2800050'>this</span> <span
  m='2800220'>graph</span> <span m='2800490'>as</span> <span
  m='2800630'>being</span> <span m='2801200'>a</span> <span
  m='2801270'>fragment</span> <span m='2801920'>of</span> <span
  m='2802040'>this</span> <span m='2802190'>large</span> <span
  m='2802750'>graph,</span> <span m='2803600'>which</span> <span
  m='2803980'>where</span> <span m='2804180'>n</span> <span
  m='2804420'>could</span> <span m='2804510'>be</span> <span
  m='2804760'>100</span> <span m='2805780'>and</span> <span
  m='2805960'>the</span> <span m='2806040'>weights</span> <span
  m='2806380'>could</span> <span m='2806520'>be</span> <span
  m='2806970'>2</span> <span m='2807100'>raised</span> <span
  m='2807370'>to</span> <span m='2807440'>50.</span> <span
  m='2808380'>And</span> <span m='2808540'>2</span> <span m='2808900'>raised
  to</span> <span m='2809160'>50</span> <span m='2809290'>isn't</span> <span
  m='2809520'>a</span> <span m='2809610'>number</span> <span
  m='2809920'>that</span> <span m='2810030'>we can't</span> <span
  m='2810330'>handle</span> <span m='2810650'>on</span> <span
  m='2810750'>a</span> <span m='2810830'>computer,</span> <span
  m='2811200'>right?</span> <span m='2811780'>It's</span> <span
  m='2811910'>still</span> <span m='2812090'>less</span> <span
  m='2812280'>than</span> <span m='2812390'>64</span> <span
  m='2812820'>bits,</span> <span m='2813160'>right?</span> <span
  m='2813720'>So</span> <span m='2814160'>it's</span> <span m='2814350'>a</span>
  <span m='2814400'>pretty</span> <span m='2814710'>reasonable</span> <span
  m='2815130'>example.</span> </p><p><span m='2816250'>And</span> <span
  m='2816450'>we</span> <span m='2816690'>talked</span> <span
  m='2816880'>about</span> <span m='2817310'>multiple</span> <span
  m='2817820'>precision</span> <span m='2818340'>arithmetic,</span> <span
  m='2819190'>infinite</span> <span m='2819550'>precision</span> <span
  m='2819950'>arithmetic.</span> <span m='2820440'>So</span> <span
  m='2820580'>we</span> <span m='2820680'>can</span> <span
  m='2820790'>handle</span> <span m='2821470'>arbitrary</span> <span
  m='2821940'>numbers</span> <span m='2822520'>of</span> <span
  m='2822650'>an</span> <span m='2822800'>arbitrary</span> <span
  m='2823220'>position.</span> <span m='2825030'>So</span> <span
  m='2825180'>there's</span> <span m='2825350'>nothing</span> <span
  m='2825600'>that's</span> <span m='2826360'>stopping</span> <span
  m='2827680'>us</span> <span m='2827940'>from</span> <span
  m='2828520'>putting</span> <span m='2828690'>square</span> <span
  m='2829050'>root</span> <span m='2829190'>of</span> <span m='2829320'>2</span>
  <span m='2830420'>and</span> <span m='2830600'>all</span> <span
  m='2830750'>sorts</span> <span m='2830970'>of</span> <span
  m='2831050'>things.</span> <span m='2831280'>We</span> <span
  m='2831350'>won't</span> <span m='2831550'>do</span> <span
  m='2831620'>imaginary</span> <span m='2832160'>numbers.</span> <span
  m='2832990'>But</span> <span m='2833690'>you</span> <span
  m='2833980'>could</span> <span m='2834200'>imagine</span> <span
  m='2834580'>putting</span> <span m='2835400'>numbers</span> <span
  m='2835790'>with</span> <span m='2836050'>a</span> <span
  m='2836700'>high</span> <span m='2837000'>dynamic</span> <span
  m='2837520'>range</span> <span m='2838010'>as</span> <span
  m='2838240'>edges</span> <span m='2839010'>in</span> <span
  m='2839180'>a</span> <span m='2839230'>particular</span> <span
  m='2839560'>graph</span> <span m='2840140'>and</span> <span
  m='2840250'>expect</span> <span m='2840700'>the</span> <span
  m='2840810'>Dijkstra,</span> <span m='2841690'>assuming</span> <span
  m='2842070'>that</span> <span m='2842200'>all</span> <span
  m='2842370'>of</span> <span m='2842440'>the</span> <span
  m='2842510'>edges</span> <span m='2842870'>are</span> <span
  m='2843580'>non-negative,</span> <span m='2844520'>that</span> <span
  m='2844640'>Dijkstra</span> <span m='2845060'>should</span> <span
  m='2845200'>be</span> <span m='2845300'>able</span> <span
  m='2845480'>to</span> <span m='2845650'>run</span> <span m='2845880'>on
  it.</span> </p><p><span m='2848090'>So</span> <span m='2848270'>what</span>
  <span m='2848420'>happens</span> <span m='2848780'>with</span> <span
  m='2848920'>this</span> <span m='2849670'>example?</span> <span
  m='2850760'>Well,</span> <span m='2851040'>with</span> <span
  m='2851100'>this</span> <span m='2851280'>example,</span> <span
  m='2851700'>here's</span> <span m='2851910'>what</span> <span
  m='2852050'>happens.</span> <span m='2853090'>Let's</span> <span
  m='2853300'>say</span> <span m='2853430'>that</span> <span
  m='2853580'>I</span> <span m='2853690'>ran</span> <span
  m='2854140'>this</span> <span m='2855070'>algorithm.</span> <span
  m='2856340'>And</span> <span m='2856890'>initially,</span> <span
  m='2857690'>I</span> <span m='2858640'>just</span> <span
  m='2858830'>followed</span> <span m='2859180'>this</span> <span
  m='2859570'>chain</span> <span m='2860080'>here.</span> <span
  m='2862210'>And</span> <span m='2862720'>I</span> <span
  m='2862850'>get--</span> <span m='2863510'>this</span> <span
  m='2863670'>starts</span> <span m='2863930'>with</span> <span
  m='2864070'>a</span> <span m='2864110'>0.</span> <span m='2865320'>And</span>
  <span m='2865620'>this</span> <span m='2865840'>is</span> <span
  m='2866000'>a</span> <span m='2866090'>4,</span> <span
  m='2866890'>because</span> <span m='2867100'>I</span> <span
  m='2867150'>get</span> <span m='2867350'>there</span> <span
  m='2867580'>with</span> <span m='2867630'>4.</span> <span
  m='2868530'>This</span> <span m='2868740'>one</span> <span
  m='2868900'>is</span> <span m='2869050'>8.</span> <span m='2870280'>And
  this</span> <span m='2870420'>is</span> <span m='2870600'>10.</span> <span
  m='2871650'>And</span> <span m='2871800'>this</span> <span
  m='2871940'>is</span> <span m='2872090'>12,</span> <span
  m='2873970'>13,</span> <span m='2874910'>14.</span> </p><p><span
  m='2877930'>And</span> <span m='2878340'>that's</span> <span
  m='2878610'>the</span> <span m='2878710'>initial</span> <span
  m='2879880'>pass.</span> <span m='2880740'>That's</span> <span
  m='2880970'>the</span> <span m='2881030'>selection.</span> <span
  m='2882990'>What</span> <span m='2883220'>ends</span> <span
  m='2883370'>up</span> <span m='2883490'>happening</span> <span
  m='2883950'>is</span> <span m='2884250'>that</span> <span
  m='2885880'>you</span> <span m='2886910'>could</span> <span
  m='2887040'>now</span> <span m='2887270'>relax</span> <span
  m='2888490'>at</span> <span m='2888690'>this--</span> <span
  m='2890020'>you</span> <span m='2890280'>see</span> <span
  m='2890590'>14.</span> <span m='2891430'>And</span> <span
  m='2891540'>let's</span> <span m='2891670'>say</span> <span
  m='2891770'>you</span> <span m='2891880'>relax</span> <span
  m='2892320'>this</span> <span m='2892600'>edge.</span> <span
  m='2893660'>You</span> <span m='2893770'>see</span> <span
  m='2893970'>that</span> <span m='2894420'>12</span> <span
  m='2894840'>and</span> <span m='2895120'>14,</span> <span
  m='2895620'>you've</span> <span m='2896315'>turned</span> <span
  m='2896620'>that</span> <span m='2896860'>into</span> <span
  m='2897020'>13.</span> </p><p><span m='2898940'>And</span> <span
  m='2899100'>then</span> <span m='2899400'>when</span> <span
  m='2899500'>you</span> <span m='2899600'>relax</span> <span
  m='2899960'>this</span> <span m='2900180'>edge,</span> <span
  m='2900960'>this</span> <span m='2901210'>turns</span> <span
  m='2901540'>into</span> <span m='2902240'>12.</span> <span
  m='2905020'>So</span> <span m='2905590'>you go</span> <span
  m='2905870'>through</span> <span m='2905990'>that</span> <span
  m='2906180'>process.</span> <span m='2907640'>Now,</span> <span
  m='2908330'>this</span> <span m='2908520'>one</span> <span
  m='2908670'>stays</span> <span m='2909020'>12.</span> <span
  m='2910510'>But</span> <span m='2910610'>now</span> <span
  m='2910800'>you</span> <span m='2910950'>relax</span> <span
  m='2911430'>this</span> <span m='2911690'>edge.</span> </p><p><span
  m='2912560'>And</span> <span m='2912720'>so</span> <span
  m='2912810'>this</span> <span m='2913060'>12</span> <span
  m='2913500'>becomes</span> <span m='2914190'>10.</span> <span
  m='2915350'>And</span> <span m='2915520'>then</span> <span
  m='2915630'>when</span> <span m='2915760'>this</span> <span
  m='2915990'>changes,</span> <span m='2917010'>you</span> <span
  m='2917140'>need</span> <span m='2917310'>to--</span> <span
  m='2918820'>if</span> <span m='2918960'>you</span> <span
  m='2919080'>relax</span> <span m='2919730'>this</span> <span
  m='2920300'>edge</span> <span m='2920630'>first,</span> <span
  m='2921830'>then</span> <span m='2921990'>this</span> <span
  m='2922210'>13</span> <span m='2922830'>is</span> <span
  m='2923410'>going</span> <span m='2923600'>to</span> <span
  m='2923660'>become</span> <span m='2924540'>11.</span> <span
  m='2925060'>It</span> <span m='2925440'>doesn't</span> <span
  m='2925650'>really</span> <span m='2925790'>matter.</span> <span
  m='2926440'>This</span> <span m='2926610'>becomes,</span> <span
  m='2928140'>I</span> <span m='2928250'>guess,</span> <span
  m='2928420'>11.</span> </p><p><span m='2929450'>And--</span> <span
  m='2930490'>is</span> <span m='2930620'>that</span> <span
  m='2930690'>right?</span> <span m='2931500'>Yup.</span> <span
  m='2931780'>This</span> <span m='2931940'>is</span> <span
  m='2932090'>11</span> <span m='2932470'>and</span> <span
  m='2932560'>that's</span> <span m='2932770'>11</span> <span
  m='2933100'>as</span> <span m='2933220'>well.</span> <span
  m='2935690'>It</span> <span m='2935840'>might</span> <span
  m='2936070'>start</span> <span m='2936260'>out</span> <span
  m='2936390'>being</span> <span m='2936570'>12</span> <span
  m='2937190'>if</span> <span m='2937320'>you</span> <span
  m='2937440'>relax</span> <span m='2937780'>this</span> <span
  m='2937970'>edge</span> <span m='2938230'>and</span> <span
  m='2938340'>that</span> <span m='2938520'>edge.</span> <span
  m='2939250'>So</span> <span m='2939280'>you</span> <span
  m='2939370'>might</span> <span m='2939530'>go</span> <span
  m='2939940'>to</span> <span m='2940100'>12</span> <span m='2940390'>to</span>
  <span m='2940680'>11,</span> <span m='2941450'>and</span> <span
  m='2941630'>so</span> <span m='2941740'>on</span> <span m='2941860'>and</span>
  <span m='2941950'>so</span> <span m='2942090'>forth.</span> </p><p><span
  m='2942920'>So</span> <span m='2943030'>for</span> <span m='2943170'>a</span>
  <span m='2943220'>pathological</span> <span m='2944540'>ordering,</span> <span
  m='2945920'>I</span> <span m='2946240'>won't</span> <span
  m='2946420'>belabor</span> <span m='2946710'>the</span> <span
  m='2946840'>point.</span> <span m='2947450'>But</span> <span
  m='2947580'>you</span> <span m='2947670'>see</span> <span
  m='2947830'>that</span> <span m='2947950'>you're</span> <span
  m='2948050'>going</span> <span m='2948250'>14,</span> <span
  m='2948593'>13,</span> <span m='2949280'>12,</span> <span
  m='2949700'>11</span> <span m='2950580'>with</span> <span m='2951540'>a</span>
  <span m='2951965'>bad</span> <span m='2952390'>ordering</span> <span
  m='2953630'>that</span> <span m='2953890'>corresponds</span> <span
  m='2954480'>to</span> <span m='2954580'>the</span> <span
  m='2954670'>selection</span> <span m='2955120'>of</span> <span
  m='2955220'>the</span> <span m='2955320'>edges.</span> <span
  m='2956990'>And</span> <span m='2957230'>so</span> <span m='2957720'>if</span>
  <span m='2958150'>the</span> <span m='2958620'>overall</span> <span
  m='2959150'>weight</span> <span m='2959460'>here</span> <span
  m='2960410'>and</span> <span m='2960580'>overall</span> <span
  m='2960940'>weight</span> <span m='2961170'>here,</span> <span
  m='2961530'>when</span> <span m='2961660'>you</span> <span
  m='2961740'>start</span> <span m='2962000'>out</span> <span
  m='2962150'>with,</span> <span m='2962360'>is</span> <span
  m='2962480'>going</span> <span m='2962640'>to</span> <span
  m='2962680'>be</span> <span m='2963050'>order</span> <span
  m='2963500'>2</span> <span m='2963620'>raised</span> <span
  m='2963910'>to</span> <span m='2964000'>n</span> <span m='2964230'>over</span>
  <span m='2964470'>2.</span> <span m='2965390'>OK</span> <span
  m='2966060'>And</span> <span m='2966420'>you</span> <span
  m='2966590'>could</span> <span m='2966780'>be,</span> <span
  m='2967290'>in</span> <span m='2967410'>this</span> <span
  m='2967570'>particular</span> <span m='2967870'>graph,</span> <span
  m='2969160'>relaxing</span> <span m='2969740'>edges</span> <span
  m='2970310'>an</span> <span m='2970440'>exponential</span> <span
  m='2971230'>number</span> <span m='2971470'>of</span> <span
  m='2971560'>times</span> <span m='2972640'>in</span> <span
  m='2972840'>order</span> <span m='2973090'>to</span> <span
  m='2975040'>finish.</span> </p><p><span m='2976940'>And</span> <span
  m='2977170'>so</span> <span m='2978070'>the</span> <span
  m='2978220'>number</span> <span m='2978450'>of</span> <span
  m='2978520'>times</span> <span m='2978780'>you</span> <span
  m='2978870'>relax</span> <span m='2979170'>an</span> <span
  m='2979270'>edge</span> <span m='2979840'>could</span> <span
  m='2980120'>be</span> <span m='2980670'>of</span> <span m='2980840'>the</span>
  <span m='2980920'>order</span> <span m='2981210'>of</span> <span
  m='2981300'>the</span> <span m='2981380'>weights</span> <span
  m='2982440'>that</span> <span m='2982640'>you</span> <span
  m='2982740'>start</span> <span m='2983010'>out</span> <span
  m='2983260'>with.</span> <span m='2983820'>And</span> <span
  m='2984670'>that</span> <span m='2985090'>makes</span> <span
  m='2985350'>this</span> <span m='2985520'>algorithm</span> <span
  m='2985910'>an</span> <span m='2985980'>exponential</span> <span
  m='2986470'>time</span> <span m='2986710'>algorithm.</span> <span
  m='2987220'>So</span> <span m='2987420'>clearly,</span> <span
  m='2987650'>we</span> <span m='2987750'>have</span> <span
  m='2987860'>to</span> <span m='2987910'>do</span> <span
  m='2988010'>better</span> <span m='2988270'>than</span> <span
  m='2988410'>that</span> <span m='2989050'>when</span> <span
  m='2989190'>it</span> <span m='2989260'>comes</span> <span
  m='2989470'>to</span> <span m='2989580'>Dijkstra</span> <span
  m='2991070'>or</span> <span m='2991260'>Bellman-Ford.</span> </p><p><span
  m='2992540'>So</span> <span m='2992810'>how</span> <span
  m='2992950'>are</span> <span m='2993020'>we</span> <span
  m='2993140'>going</span> <span m='2993270'>to</span> <span
  m='2993340'>do</span> <span m='2993460'>better</span> <span
  m='2993650'>than</span> <span m='2993820'>that?</span> <span
  m='2994840'>Yeah,</span> <span m='2995430'>question</span> <span
  m='2995780'>back</span> <span m='2995940'>there.</span> </p><p><span
  m='2996260'>AUDIENCE: Is it</span> <span m='2996746'>an</span> <span
  m='2997232'>issue</span> <span m='2997394'>that</span> <span
  m='2997556'>we're</span> <span m='2997718'>starting</span> <span
  m='2998204'>at the</span> <span m='2998690'>[INAUDIBLE]?</span> </p><p><span
  m='3003250'>PROFESSOR: You're</span> <span m='3003380'>exactly</span> <span
  m='3003810'>right.</span> <span m='3004140'>There's</span> <span
  m='3004300'>an</span> <span m='3004390'>issue</span> <span
  m='3004720'>with</span> <span m='3004900'>the</span> <span
  m='3004990'>ordering</span> <span m='3005480'>that</span> <span
  m='3005640'>we've</span> <span m='3005800'>chosen.</span> <span
  m='3007410'>But</span> <span m='3007740'>what</span> <span
  m='3007910'>you</span> <span m='3008000'>have</span> <span
  m='3008140'>to</span> <span m='3008210'>show</span> <span
  m='3008620'>is</span> <span m='3008780'>that</span> <span
  m='3008980'>for</span> <span m='3009150'>any</span> <span
  m='3009420'>graph,</span> <span m='3010920'>the</span> <span
  m='3011010'>particular</span> <span m='3011430'>ordering</span> <span
  m='3011800'>that</span> <span m='3011940'>you</span> <span
  m='3012080'>choose</span> <span m='3012790'>will</span> <span
  m='3013030'>result</span> <span m='3013510'>in</span> <span
  m='3013680'>V</span> <span m='3013860'>log</span> <span m='3014080'>V</span>
  <span m='3014360'>plus</span> <span m='3014520'>E</span> <span
  m='3015370'>and</span> <span m='3015780'>so</span> <span m='3015900'>on</span>
  <span m='3016040'>and</span> <span m='3016130'>so</span> <span
  m='3016270'>forth.</span> <span m='3016970'>So</span> <span
  m='3017020'>you're</span> <span m='3017200'>exactly</span> <span
  m='3017560'>right.</span> </p><p><span m='3017910'>I</span> <span
  m='3018020'>mean,</span> <span m='3018150'>it's</span> <span
  m='3018260'>an</span> <span m='3018350'>issue</span> <span m='3018610'>with
  the</span> <span m='3018760'>ordering</span> <span m='3019130'>we've</span>
  <span m='3019310'>chosen.</span> <span m='3020100'>This</span> <span
  m='3020290'>is</span> <span m='3020450'>a</span> <span
  m='3020530'>pathological</span> <span m='3021290'>ordering.</span> <span
  m='3022050'>It's</span> <span m='3022210'>just</span> <span
  m='3022670'>meaning</span> <span m='3023000'>to</span> <span
  m='3023100'>say</span> <span m='3023360'>that</span> <span
  m='3023570'>we</span> <span m='3023700'>have</span> <span
  m='3023850'>to</span> <span m='3023900'>be</span> <span
  m='3024030'>careful</span> <span m='3025010'>about</span> <span
  m='3025230'>how</span> <span m='3025580'>we</span> <span
  m='3025750'>select.</span> <span m='3027080'>If</span> <span
  m='3027420'>you</span> <span m='3027480'>selected</span> <span
  m='3027970'>wrong,</span> <span m='3028440'>you've</span> <span
  m='3028600'>got</span> <span m='3028780'>problems.</span> </p><p><span
  m='3030040'>And</span> <span m='3030180'>so</span> <span
  m='3030300'>the</span> <span m='3030400'>purpose</span> <span
  m='3030740'>of</span> <span m='3030990'>next</span> <span
  m='3031310'>week</span> <span m='3031960'>is</span> <span
  m='3032110'>going</span> <span m='3032240'>to</span> <span
  m='3032310'>be</span> <span m='3032510'>how</span> <span m='3032650'>do</span>
  <span m='3032720'>we</span> <span m='3032810'>select</span> <span
  m='3033150'>these</span> <span m='3033320'>edges</span> <span
  m='3033650'>properly.</span> <span m='3035360'>And</span> <span
  m='3035520'>so</span> <span m='3035600'>I</span> <span
  m='3035720'>leave</span> <span m='3036030'>you</span> <span
  m='3036210'>with</span> <span m='3037530'>this</span> <span
  m='3037730'>notion</span> <span m='3038300'>of,</span> <span
  m='3040070'>very</span> <span m='3040380'>simple</span> <span
  m='3040690'>notion</span> <span m='3041150'>of,</span> <span
  m='3041560'>optimal</span> <span m='3042070'>substructure</span> <span
  m='3043510'>using</span> <span m='3044200'>two</span> <span
  m='3044690'>very</span> <span m='3045050'>simple</span> <span
  m='3045460'>terms</span> <span m='3045990'>that</span> <span
  m='3046190'>you</span> <span m='3046300'>can</span> <span
  m='3046430'>prove</span> <span m='3046720'>in</span> <span
  m='3047260'>literally</span> <span m='3048035'>a</span> <span
  m='3048330'>line</span> <span m='3049240'>of</span> <span
  m='3049380'>text.</span> <span m='3050200'>And</span> <span
  m='3050310'>the</span> <span m='3050380'>first</span> <span
  m='3050660'>one</span> <span m='3050880'>says</span> <span
  m='3052110'>as</span> <span m='3052500'>subpaths</span> <span m='3054190'>of
  a</span> <span m='3054470'>shortest</span> <span m='3054970'>path</span> <span
  m='3059410'>are</span> <span m='3059690'>shortest</span> <span
  m='3060080'>paths.</span> </p><p><span m='3065520'>And</span> <span
  m='3065880'>all</span> <span m='3066100'>that</span> <span
  m='3066230'>means</span> <span m='3066550'>is</span> <span
  m='3067340'>if</span> <span m='3067490'>I</span> <span m='3067580'>had</span>
  <span m='3067850'>V0,</span> <span m='3069840'>and</span> <span
  m='3070010'>I</span> <span m='3070050'>went</span> <span m='3070260'>to</span>
  <span m='3070340'>V1,</span> <span m='3071920'>and</span> <span
  m='3072090'>I</span> <span m='3072140'>went</span> <span m='3072380'>to</span>
  <span m='3072470'>V2,</span> <span m='3072940'>and</span> <span
  m='3073070'>these</span> <span m='3074430'>are</span> <span
  m='3074510'>paths</span> <span m='3074880'>here.</span> <span
  m='3075500'>So</span> <span m='3075640'>this</span> <span
  m='3075840'>could</span> <span m='3075970'>be</span> <span
  m='3076100'>p01,</span> <span m='3077684'>p02,</span> <span
  m='3080640'>p03.</span> <span m='3082930'>And</span> <span
  m='3083110'>so</span> <span m='3083190'>there are</span> <span
  m='3083320'>many</span> <span m='3083550'>vertices</span> <span
  m='3084050'>potentially</span> <span m='3084460'>between</span> <span
  m='3084850'>V0</span> <span m='3085160'>and</span> <span
  m='3085290'>V1.</span> <span m='3086240'>And</span> <span
  m='3086390'>if</span> <span m='3086480'>you</span> <span
  m='3086660'>tell</span> <span m='3086900'>me</span> <span
  m='3087180'>that</span> <span m='3088230'>V0</span> <span
  m='3088470'>through</span> <span m='3089070'>V3,</span> <span
  m='3090010'>the</span> <span m='3090120'>concatenation</span> <span
  m='3090880'>of</span> <span m='3091010'>p01,</span> <span
  m='3091660'>p02,</span> <span m='3092290'>and,</span> <span
  m='3092970'>sorry,</span> <span m='3093240'>p03</span> <span m='3094460'>are
  a</span> <span m='3094720'>shortest</span> <span m='3095130'>path.</span>
  <span m='3100740'>If</span> <span m='3100920'>this</span> <span
  m='3101240'>is</span> <span m='3101480'>an</span> <span m='3101580'>SP,</span>
  <span m='3103000'>shortest</span> <span m='3103320'>path,</span> <span
  m='3103860'>then</span> <span m='3103990'>that</span> <span
  m='3104110'>implies</span> <span m='3104740'>that</span> <span
  m='3105520'>each</span> <span m='3105740'>of</span> <span
  m='3105890'>these</span> <span m='3107210'>are</span> <span
  m='3108200'>shortest</span> <span m='3108520'>paths</span> <span
  m='3108800'>as</span> <span m='3108920'>well.</span> </p><p><span
  m='3110030'>And</span> <span m='3110210'>that</span> <span
  m='3110320'>makes</span> <span m='3110490'>sense,</span> <span
  m='3110800'>because</span> <span m='3111720'>if</span> <span
  m='3111870'>in</span> <span m='3111990'>fact</span> <span
  m='3112530'>there</span> <span m='3112650'>was</span> <span
  m='3112750'>a</span> <span m='3112800'>better</span> <span
  m='3113120'>way</span> <span m='3113460'>of</span> <span
  m='3113580'>getting</span> <span m='3113850'>from</span> <span
  m='3114080'>V0</span> <span m='3114590'>to</span> <span m='3114690'>V1</span>
  <span m='3115740'>that</span> <span m='3115900'>was</span> <span
  m='3116060'>better</span> <span m='3116420'>than</span> <span
  m='3116620'>p01,</span> <span m='3117920'>why</span> <span
  m='3118100'>would</span> <span m='3118210'>you</span> <span
  m='3118320'>ever</span> <span m='3118500'>put</span> <span
  m='3118690'>p01</span> <span m='3119300'>in</span> <span
  m='3119420'>here?</span> <span m='3120200'>You</span> <span
  m='3120320'>would</span> <span m='3120410'>use</span> <span
  m='3120610'>that</span> <span m='3120830'>better</span> <span
  m='3121040'>way.</span> <span m='3122390'>So</span> <span
  m='3122530'>very</span> <span m='3122810'>simple.</span> <span
  m='3123580'>That's</span> <span m='3124050'>what's</span> <span
  m='3124290'>called</span> <span m='3124490'>the</span> <span
  m='3124560'>optimum</span> <span m='3125020'>substructure</span> <span
  m='3125670'>property.</span> </p><p><span m='3126810'>And</span> <span
  m='3127930'>this</span> <span m='3128130'>notion</span> <span
  m='3129980'>of</span> <span m='3130460'>the</span> <span
  m='3130640'>triangle</span> <span m='3131120'>inequality</span> <span
  m='3132190'>is</span> <span m='3132340'>also</span> <span
  m='3133370'>related</span> <span m='3133770'>to</span> <span
  m='3133860'>that.</span> <span m='3134440'>And</span> <span
  m='3134570'>that</span> <span m='3134740'>simply</span> <span
  m='3135070'>says</span> <span m='3136220'>that</span> <span
  m='3136710'>if</span> <span m='3136890'>I</span> <span m='3136980'>have</span>
  <span m='3138370'>something</span> <span m='3138720'>like</span> <span
  m='3138960'>this,</span> <span m='3141700'>that</span> <span
  m='3141930'>I</span> <span m='3141980'>have</span> <span
  m='3142420'>V0,</span> <span m='3143160'>V1,</span> <span
  m='3143890'>and</span> <span m='3144160'>V2,</span> <span
  m='3145460'>then</span> <span m='3148010'>when</span> <span
  m='3148110'>I</span> <span m='3148160'>look</span> <span m='3148400'>at</span>
  <span m='3148550'>the</span> <span m='3148660'>delta</span> <span
  m='3149140'>value</span> <span m='3150400'>of</span> <span
  m='3150600'>V0,</span> <span m='3151300'>V1,</span> <span
  m='3152810'>and</span> <span m='3153080'>I</span> <span
  m='3153130'>compare</span> <span m='3153490'>that</span> <span
  m='3153830'>with</span> <span m='3153950'>the</span> <span
  m='3154050'>delta</span> <span m='3154370'>values</span> <span
  m='3154820'>of</span> <span m='3154940'>V0,</span> <span
  m='3155400'>V2,</span> <span m='3156800'>and</span> <span
  m='3157970'>V2,</span> <span m='3158500'>V1,</span> <span
  m='3160590'>then</span> <span m='3161780'>this</span> <span
  m='3162360'>has</span> <span m='3162680'>got</span> <span
  m='3162850'>to</span> <span m='3163030'>be</span> <span
  m='3163420'>smaller</span> <span m='3163980'>than</span> <span
  m='3164350'>or</span> <span m='3164500'>equal</span> <span
  m='3164990'>to</span> <span m='3165710'>this</span> <span
  m='3166290'>plus</span> <span m='3166550'>that.</span> </p><p><span
  m='3168100'>And</span> <span m='3168230'>that</span> <span
  m='3168360'>again</span> <span m='3168730'>makes</span> <span
  m='3168950'>sense.</span> <span m='3169220'>Because</span> <span
  m='3169910'>if</span> <span m='3170380'>this</span> <span
  m='3172140'>plus</span> <span m='3172400'>this</span> <span
  m='3172640'>was</span> <span m='3172810'>smaller</span> <span
  m='3173150'>than</span> <span m='3173310'>that,</span> <span
  m='3174090'>well</span> <span m='3175420'>remember</span> <span
  m='3175660'>I'm</span> <span m='3175760'>talking</span> <span
  m='3175970'>about</span> <span m='3176220'>paths</span> <span
  m='3177340'>here,</span> <span m='3177790'>not</span> <span
  m='3178010'>edges.</span> <span m='3179030'>And</span> <span
  m='3179510'>the</span> <span m='3179670'>better</span> <span
  m='3179920'>way</span> <span m='3180120'>of</span> <span
  m='3180230'>getting</span> <span m='3180450'>to</span> <span
  m='3180520'>V1</span> <span m='3180890'>would</span> <span
  m='3181010'>be</span> <span m='3181130'>to</span> <span
  m='3181210'>follow--</span> <span m='3181790'>go</span> <span
  m='3181970'>through</span> <span m='3182180'>V2</span> <span
  m='3182960'>rather</span> <span m='3183140'>than</span> <span
  m='3183290'>following</span> <span m='3183590'>this</span> <span
  m='3183790'>path</span> <span m='3184030'>up</span> <span
  m='3184200'>on</span> <span m='3184330'>top.</span> </p><p><span
  m='3185640'>Amazingly,</span> <span m='3186390'>these</span> <span
  m='3186640'>two</span> <span m='3186770'>notions</span> <span
  m='3187240'>are</span> <span m='3187360'>going</span> <span
  m='3187480'>to</span> <span m='3187520'>be</span> <span
  m='3187640'>enough</span> <span m='3188340'>to</span> <span
  m='3188480'>take</span> <span m='3188730'>this</span> <span
  m='3188930'>algorithm</span> <span m='3189670'>and</span> <span
  m='3189850'>turn</span> <span m='3190020'>it</span> <span
  m='3190120'>into</span> <span m='3190860'>essentially</span> <span
  m='3191420'>a</span> <span m='3191610'>linear</span> <span
  m='3192000'>time</span> <span m='3192260'>algorithm.</span> <span
  m='3192980'>And</span> <span m='3193130'>we'll</span> <span
  m='3193230'>do</span> <span m='3193340'>that</span> <span
  m='3193740'>next</span> <span m='3193980'>time.</span> </p>
embedded_media:
  - uid: ac57b941302081d417b920816006e661
    parent_uid: a701d9c2591ce2a00362e8f085c9098d
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: Aa2sqUhIn-E
  - uid: 4da3a970c15e7b4e238eea8015c8002e
    parent_uid: a701d9c2591ce2a00362e8f085c9098d
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/Aa2sqUhIn-E/default.jpg'
  - uid: be08367b4f9908b02aa4641c4b5b2b0e
    parent_uid: a701d9c2591ce2a00362e8f085c9098d
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      https://itunes.apple.com/us/itunes-u/lecture-15-single-source-shortest/id585700718?i=126127753
  - uid: b811d3cbfb91f205a29be431da4febed
    parent_uid: a701d9c2591ce2a00362e8f085c9098d
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT6.006F11/MIT6_006F11_lec15_300k.mp4'
  - uid: 2ee5e68e8ab932532e2ba95d3ba3a36f
    parent_uid: a701d9c2591ce2a00362e8f085c9098d
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: Aa2sqUhIn-E
  - uid: 842f28c9836942f39fac8378b5ac72b2
    parent_uid: a701d9c2591ce2a00362e8f085c9098d
    id: Aa2sqUhIn-E.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-15-single-source-shortest-paths-problem/Aa2sqUhIn-E.srt
  - uid: 73887b2d26c8de25a7b4d121c938c6a0
    parent_uid: a701d9c2591ce2a00362e8f085c9098d
    id: Aa2sqUhIn-E.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-15-single-source-shortest-paths-problem/Aa2sqUhIn-E.pdf
  - uid: 83e6f23709bbfcd503ec092c7498c95b
    parent_uid: a701d9c2591ce2a00362e8f085c9098d
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: dc8dad9211f84ea03ec339ad8c025760
    parent_uid: a701d9c2591ce2a00362e8f085c9098d
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
