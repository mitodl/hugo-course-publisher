---
title: 'Lecture 24: Cache-Oblivious Algorithms: Searching & Sorting'
uid: efc8b80e509595eb8d26e020f63b3e70
parent_uid: 59a7a862feb85c8b52509910c07728e5
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-24-cache-oblivious-algorithms-searching-sorting
short_url: lecture-24-cache-oblivious-algorithms-searching-sorting
inline_embed_id: '10178267lecture24:cache-obliviousalgorithms:searching&sorting55611357'
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Demaine continues
  with cache-oblivious algorithms, including their applications in searching and
  sorting.</p> <p><strong>Instructors:</strong> Erik Demaine</p>
related_resources_text: ''
transcript: >-
  <p><span m='80'>The</span> <span m='190'>following</span> <span
  m='630'>content</span> <span m='1220'>is</span> <span m='1340'>provided</span>
  <span m='1780'>under</span> <span m='2060'>a</span> <span
  m='2100'>Creative</span> <span m='2500'>Commons</span> <span
  m='2910'>license.</span> <span m='4010'>Your</span> <span
  m='4210'>support</span> <span m='4710'>will</span> <span m='4870'>help</span>
  <span m='5110'>MIT</span> <span m='5570'>OpenCourseWare</span> <span
  m='6360'>continue</span> <span m='6870'>to</span> <span m='6950'>offer</span>
  <span m='7360'>high-quality</span> <span m='8119'>educational</span> <span
  m='8750'>resources</span> <span m='9370'>for</span> <span
  m='9520'>free.</span> <span m='10730'>To</span> <span m='10830'>make</span>
  <span m='10940'>a</span> <span m='10980'>donation</span> <span
  m='11670'>or</span> <span m='11940'>view</span> <span
  m='12380'>additional</span> <span m='12800'>materials</span> <span
  m='13340'>from</span> <span m='13490'>hundreds</span> <span
  m='13920'>of</span> <span m='14030'>MIT</span> <span m='14460'>courses,</span>
  <span m='15580'>visit</span> <span m='15780'>MIT</span> <span
  m='16210'>OpenCourseWare</span> <span m='17250'>at</span> <span
  m='17420'>ocw.mit.edu.</span> </p><p><span m='21720'>PROFESSOR: All</span>
  <span m='21800'>right,</span> <span m='22070'>welcome</span> <span
  m='22380'>to</span> <span m='22520'>the</span> <span m='22710'>final</span>
  <span m='23380'>lecture</span> <span m='23940'>of</span> <span
  m='24210'>6046.</span> <span m='25520'>Today</span> <span m='26060'>we</span>
  <span m='26280'>continue</span> <span m='26760'>our</span> <span
  m='26910'>theme</span> <span m='27170'>of</span> <span m='27300'>cache</span>
  <span m='27650'>oblivious</span> <span m='28220'>algorithms.</span> <span
  m='28890'>We're</span> <span m='29030'>going</span> <span m='29160'>to</span>
  <span m='29240'>look</span> <span m='29470'>at</span> <span
  m='29620'>two</span> <span m='29770'>of</span> <span m='29820'>the</span>
  <span m='29900'>most</span> <span m='30200'>basic</span> <span
  m='30580'>problems</span> <span m='30990'>in</span> <span
  m='31090'>computer</span> <span m='31420'>science--</span> <span
  m='32259'>searching</span> <span m='32830'>and</span> <span
  m='33040'>sorting,</span> <span m='34140'>a</span> <span
  m='34820'>little</span> <span m='35040'>bit</span> <span m='35200'>of</span>
  <span m='35300'>each.</span> <span m='36080'>And</span> <span
  m='36220'>then</span> <span m='36330'>I'll</span> <span m='36420'>tell</span>
  <span m='36580'>you</span> <span m='36630'>a</span> <span
  m='36650'>little</span> <span m='36880'>bit</span> <span
  m='37030'>about</span> <span m='37870'>what</span> <span
  m='38190'>class</span> <span m='38510'>you</span> <span m='38610'>might</span>
  <span m='38820'>take</span> <span m='39060'>after</span> <span
  m='39310'>this</span> <span m='39500'>one.</span> </p><p><span
  m='41450'>So</span> <span m='42220'>brief</span> <span m='42480'>recap</span>
  <span m='42990'>of</span> <span m='43100'>the</span> <span
  m='43180'>model,</span> <span m='43710'>we</span> <span
  m='43840'>introduced</span> <span m='44290'>two</span> <span
  m='44630'>models</span> <span m='44970'>of</span> <span
  m='45060'>computation</span> <span m='45400'>although</span> <span
  m='45860'>one</span> <span m='46070'>was</span> <span m='46200'>just</span>
  <span m='46390'>a</span> <span m='46440'>variation</span> <span
  m='47000'>of</span> <span m='47090'>the</span> <span m='47240'>other.</span>
  <span m='48430'>The</span> <span m='48440'>base</span> <span
  m='48660'>model</span> <span m='49560'>is</span> <span m='49770'>an</span>
  <span m='49830'>external</span> <span m='50320'>memory</span> <span
  m='50650'>model.</span> <span m='51020'>This</span> <span m='51180'>is</span>
  <span m='51290'>a</span> <span m='51400'>two-level</span> <span
  m='52380'>memory</span> <span m='52770'>hierarchy.</span> <span
  m='53820'>CPU</span> <span m='54320'>and</span> <span m='54430'>cache,</span>
  <span m='54880'>we view</span> <span m='55210'>as</span> <span
  m='55330'>one.</span> <span m='55890'>So</span> <span m='56220'>there's</span>
  <span m='56630'>instant</span> <span m='57140'>communication</span> <span
  m='57730'>between</span> <span m='58080'>them,</span> <span
  m='58240'>which</span> <span m='58420'>means</span> <span
  m='59170'>what</span> <span m='59370'>you're</span> <span
  m='59500'>computing</span> <span m='60050'>on</span> <span
  m='60760'>can</span> <span m='61620'>involve</span> <span
  m='62900'>this</span> <span m='63140'>cache</span> <span m='63610'>of</span>
  <span m='63740'>size</span> <span m='64099'>m--</span> <span
  m='64590'>total</span> <span m='64840'>size</span> <span m='65129'>of</span>
  <span m='65180'>the</span> <span m='65269'>cache is</span> <span
  m='65670'>m--</span> <span m='66110'>words.</span> <span m='67320'>The</span>
  <span m='67490'>cache</span> <span m='67830'>is</span> <span
  m='67920'>divided</span> <span m='68340'>into</span> <span
  m='68550'>these</span> <span m='68760'>blocks</span> <span m='69820'>of</span>
  <span m='70020'>size</span> <span m='70370'>b</span> <span
  m='70780'>each.</span> <span m='71110'>So</span> <span
  m='71440'>they're</span> <span m='71640'>m over</span> <span
  m='72060'>b</span> <span m='72250'>blocks.</span> </p><p><span
  m='74110'>And</span> <span m='75860'>your</span> <span
  m='76170'>problem</span> <span m='76480'>doesn't</span> <span
  m='76760'>fit</span> <span m='76920'>here,</span> <span
  m='77200'>presumably,</span> <span m='77710'>or the</span> <span
  m='77880'>problem's</span> <span m='78240'>not</span> <span
  m='78320'>very</span> <span m='78530'>interesting.</span> <span
  m='79730'>So</span> <span m='79890'>your</span> <span m='80180'>problem</span>
  <span m='80570'>size</span> <span m='80830'>n</span> <span m='81130'>is</span>
  <span m='81280'>going</span> <span m='81430'>to</span> <span
  m='81810'>require</span> <span m='82590'>storing</span> <span
  m='82990'>your</span> <span m='83140'>information</span> <span
  m='83590'>on</span> <span m='83710'>disk.</span> <span m='84220'>So</span>
  <span m='84320'>the</span> <span m='84420'>input</span> <span
  m='84650'>is</span> <span m='84760'>really</span> <span
  m='84960'>provided</span> <span m='85380'>over</span> <span
  m='85570'>here.</span> <span m='86400'>Disk</span> <span m='86970'>is</span>
  <span m='87070'>basically</span> <span m='87390'>infinite</span> <span
  m='87670'>in</span> <span m='87950'>size.</span> <span m='88370'>It's</span>
  <span m='88500'>also</span> <span m='88800'>partitioned</span> <span
  m='89250'>into</span> <span m='89410'>blocks.</span> <span
  m='90170'>And</span> <span m='91290'>you</span> <span m='91440'>can't</span>
  <span m='91710'>access</span> <span m='92060'>individual</span> <span
  m='92470'>items</span> <span m='92780'>here.</span> <span m='92930'>You</span>
  <span m='93030'>can</span> <span m='93140'>only</span> <span
  m='93370'>access</span> <span m='93760'>entire</span> <span
  m='94100'>blocks.</span> </p><p><span m='94480'>So</span> <span
  m='94760'>the</span> <span m='94860'>model</span> <span m='95210'>is</span>
  <span m='95710'>you</span> <span m='95990'>say,</span> <span
  m='96320'>I</span> <span m='96390'>want</span> <span m='96550'>to</span> <span
  m='96610'>read</span> <span m='96780'>this</span> <span m='96950'>block</span>
  <span m='97390'>and</span> <span m='97580'>put</span> <span
  m='97770'>it</span> <span m='97910'>here.</span> <span m='98670'>I</span>
  <span m='98750'>want</span> <span m='98890'>to</span> <span
  m='98950'>write</span> <span m='99140'>this</span> <span
  m='99280'>block</span> <span m='99570'>out</span> <span m='99830'>and</span>
  <span m='99920'>put</span> <span m='100070'>it</span> <span
  m='100150'>here.</span> <span m='100960'>That's</span> <span
  m='101160'>what</span> <span m='101230'>you're</span> <span
  m='101350'>allowed</span> <span m='101550'>to</span> <span
  m='101650'>do</span> <span m='101860'>in</span> <span m='101980'>the</span>
  <span m='102050'>external</span> <span m='102380'>memory</span> <span
  m='102680'>model.</span> <span m='103250'>And</span> <span
  m='103450'>what</span> <span m='103650'>we</span> <span
  m='103820'>count</span> <span m='104220'>is</span> <span m='104330'>how</span>
  <span m='104570'>many</span> <span m='104880'>block-memory</span> <span
  m='105820'>transfers</span> <span m='106290'>we</span> <span
  m='106410'>do.</span> <span m='106630'>We call</span> <span
  m='106740'>those</span> <span m='106980'>memory</span> <span
  m='107270'>transfers.</span> <span m='107900'>So</span> <span
  m='108240'>you</span> <span m='108320'>want</span> <span m='108440'>to</span>
  <span m='108480'>minimize</span> <span m='108910'>that.</span> <span
  m='109520'>And</span> <span m='110370'>usually you</span> <span
  m='110760'>don't</span> <span m='110910'>worry</span> <span
  m='111100'>too</span> <span m='111250'>much</span> <span
  m='111450'>about</span> <span m='111620'>what</span> <span
  m='111750'>happens</span> <span m='112080'>in</span> <span
  m='112160'>here,</span> <span m='112420'>although</span> <span
  m='112560'>you</span> <span m='112670'>could</span> <span
  m='112790'>also</span> <span m='113090'>minimize</span> <span
  m='113550'>regular</span> <span m='113990'>running</span> <span
  m='114240'>time</span> <span m='115130'>as</span> <span m='115310'>we</span>
  <span m='115430'>usually</span> <span m='115700'>do.</span> </p><p><span
  m='117010'>The</span> <span m='117130'>cache</span> <span
  m='117390'>oblivious</span> <span m='117800'>variation</span> <span
  m='118460'>is</span> <span m='118600'>that</span> <span m='119150'>the</span>
  <span m='119390'>algorithm</span> <span m='119910'>is</span> <span
  m='120040'>not</span> <span m='120260'>allowed</span> <span
  m='120580'>to</span> <span m='120690'>know</span> <span m='120890'>the</span>
  <span m='120990'>cache</span> <span m='121320'>parameters.</span> <span
  m='121870'>It's</span> <span m='122000'>not</span> <span
  m='122190'>allowed</span> <span m='122520'>to</span> <span
  m='122630'>know</span> <span m='122800'>the</span> <span
  m='122890'>block</span> <span m='123190'>size.</span> <span m='124150'>Sorry,
  it's</span> <span m='124540'>also</span> <span m='124860'>block</span> <span
  m='125170'>size</span> <span m='125450'>b</span> <span m='125780'>in</span>
  <span m='125950'>the</span> <span m='126180'>disk.</span> <span
  m='126700'>So</span> <span m='126710'>they</span> <span
  m='126810'>match.</span> <span m='128509'>And</span> <span
  m='128960'>you're</span> <span m='129220'>not</span> <span
  m='129389'>allowed</span> <span m='129669'>to</span> <span
  m='129770'>know</span> <span m='129970'>the</span> <span
  m='130060'>cache</span> <span m='130380'>size,</span> <span
  m='130889'>m.</span> <span m='133150'>Because</span> <span
  m='133540'>of</span> <span m='133610'>that,</span> <span m='134620'>all</span>
  <span m='134840'>the</span> <span m='134930'>block</span> <span
  m='135530'>reads</span> <span m='135780'>and</span> <span
  m='135880'>writes</span> <span m='136150'>are</span> <span
  m='136210'>done</span> <span m='136410'>automatically.</span> <span
  m='137160'>So</span> <span m='137360'>the</span> <span m='137460'>model</span>
  <span m='137820'>is,</span> <span m='138550'>whenever</span> <span
  m='138950'>you</span> <span m='139180'>access</span> <span
  m='139710'>an</span> <span m='139830'>item,</span> <span m='140190'>you</span>
  <span m='140290'>view</span> <span m='140460'>the</span> <span
  m='140780'>disk</span> <span m='141070'>as</span> <span m='141190'>just</span>
  <span m='141470'>written</span> <span m='142510'>row</span> <span
  m='142650'>by</span> <span m='142790'>row--</span> <span
  m='143130'>sequentially</span> <span m='143850'>block</span> <span
  m='144060'>by</span> <span m='144160'>block.</span> <span m='145570'>So</span>
  <span m='145890'>in</span> <span m='145980'>linear</span> <span
  m='146275'>eyes,</span> <span m='146570'>it</span> <span
  m='146680'>looks</span> <span m='146940'>like</span> <span
  m='147140'>this,</span> <span m='148120'>partitioned</span> <span
  m='148780'>into</span> <span m='148970'>blocks.</span> </p><p><span
  m='150610'>And</span> <span m='150860'>so</span> <span
  m='150990'>whenever</span> <span m='151240'>you</span> <span
  m='151370'>touch</span> <span m='151610'>an</span> <span
  m='151720'>item,</span> <span m='152780'>the</span> <span
  m='153060'>system</span> <span m='153420'>automatically</span> <span
  m='154150'>loads</span> <span m='154620'>that</span> <span
  m='154990'>block.</span> <span m='155330'>If</span> <span
  m='155420'>it's</span> <span m='155570'>not</span> <span
  m='155770'>already</span> <span m='156030'>in</span> <span
  m='156160'>cache,</span> <span m='156880'>it</span> <span
  m='157020'>loads</span> <span m='157290'>it</span> <span m='157360'>in.</span>
  <span m='157520'>If it's</span> <span m='157570'>already in</span> <span
  m='158000'>cache,</span> <span m='158470'>it's free.</span> <span
  m='160490'>When</span> <span m='160780'>you</span> <span
  m='160960'>load</span> <span m='161220'>a</span> <span m='162230'>block</span>
  <span m='162540'>in,</span> <span m='162770'>you</span> <span
  m='162870'>probably</span> <span m='163220'>already</span> <span
  m='163410'>have</span> <span m='163630'>something</span> <span
  m='164040'>there.</span> <span m='164250'>So</span> <span m='165380'>if</span>
  <span m='165550'>the</span> <span m='165640'>cache</span> <span
  m='165890'>is</span> <span m='166000'>already</span> <span
  m='166220'>full,</span> <span m='166490'>you</span> <span
  m='166570'>have</span> <span m='166690'>to</span> <span
  m='166790'>decide</span> <span m='167080'>which</span> <span
  m='167200'>one</span> <span m='167340'>to</span> <span
  m='167440'>evict.</span> <span m='168250'>And</span> <span
  m='168630'>we</span> <span m='168720'>had</span> <span m='168850'>a</span>
  <span m='168900'>couple of</span> <span m='169210'>strategies.</span> <span
  m='169800'>But</span> <span m='169960'>the</span> <span m='170060'>one</span>
  <span m='170270'>I</span> <span m='170390'>defined</span> <span
  m='171270'>was</span> <span m='171570'>the</span> <span
  m='171680'>least-recently-used</span> <span m='172710'>block.</span> <span
  m='173130'>So</span> <span m='173290'>whichever</span> <span
  m='173640'>one</span> <span m='173930'>in</span> <span m='174070'>the</span>
  <span m='174150'>cache</span> <span m='174530'>that's</span> <span
  m='174660'>least</span> <span m='174970'>recently</span> <span
  m='175290'>been</span> <span m='175450'>used</span> <span m='175730'>by</span>
  <span m='175890'>the</span> <span m='175980'>CPU,</span> <span
  m='176800'>that's</span> <span m='177040'>the</span> <span
  m='177140'>one</span> <span m='177320'>that</span> <span
  m='177390'>gets</span> <span m='177780'>written</span> <span
  m='178040'>out,</span> <span m='178390'>back</span> <span m='178620'>to</span>
  <span m='178710'>disk</span> <span m='178970'>where</span> <span
  m='179250'>it</span> <span m='179570'>originally</span> <span
  m='179960'>came</span> <span m='180220'>from.</span> <span
  m='181460'>And</span> <span m='181560'>that's</span> <span m='181895'>it.
  That's</span> <span m='182230'>the</span> <span m='182300'>model.</span>
  </p><p><span m='183830'>OK,</span> <span m='183930'>this</span> <span
  m='184080'>is</span> <span m='184190'>a</span> <span m='184270'>pretty</span>
  <span m='184510'>good</span> <span m='184680'>model</span> <span
  m='184960'>of</span> <span m='185040'>how</span> <span m='188150'>real</span>
  <span m='188330'>caches</span> <span m='188700'>work.</span> <span
  m='188970'>Although</span> <span m='189140'>this</span> <span
  m='189340'>last</span> <span m='189590'>part</span> <span m='190470'>is</span>
  <span m='190800'>not</span> <span m='191130'>how</span> <span
  m='191320'>all</span> <span m='191690'>real</span> <span
  m='191880'>caches</span> <span m='192220'>work.</span> <span
  m='192410'>It's</span> <span m='192540'>close.</span> <span
  m='194280'>And</span> <span m='194730'>at</span> <span m='195010'>the</span>
  <span m='195080'>very</span> <span m='195320'>end,</span> <span
  m='195540'>I</span> <span m='195560'>mentioned</span> <span
  m='195940'>this</span> <span m='196150'>theorem</span> <span
  m='196560'>that</span> <span m='197140'>Why</span> <span m='197430'>LRU</span>
  <span m='198020'>is</span> <span m='198460'>good.</span> <span
  m='200610'>And</span> <span m='201840'>if</span> <span m='202010'>you</span>
  <span m='202150'>take</span> <span m='202500'>the</span> <span
  m='203040'>number</span> <span m='203530'>of</span> <span
  m='203600'>block</span> <span m='204830'>evictions--</span> <span
  m='207170'>the</span> <span m='207290'>number</span> <span
  m='207600'>of</span> <span m='207750'>block</span> <span
  m='208040'>reads,</span> <span m='208930'>equivalently--</span> <span
  m='209720'>then</span> <span m='209930'>LRU</span> <span m='210730'>has</span>
  <span m='210980'>to</span> <span m='211080'>do</span> <span
  m='211390'>on</span> <span m='211500'>a</span> <span m='211550'>cache</span>
  <span m='211890'>of</span> <span m='211960'>size</span> <span
  m='212830'>m.</span> <span m='214530'>Then</span> <span
  m='214960'>that's</span> <span m='215270'>going</span> <span
  m='215480'>to</span> <span m='215600'>be,</span> <span m='215770'>at</span>
  <span m='215850'>most,</span> <span m='216150'>twice</span> <span
  m='216940'>whatever</span> <span m='217280'>the</span> <span
  m='217390'>best</span> <span m='217850'>possible</span> <span
  m='218400'>thing</span> <span m='218670'>you</span> <span
  m='218780'>could</span> <span m='218950'>do</span> <span m='220260'>is</span>
  <span m='220720'>given</span> <span m='221040'>a</span> <span
  m='221090'>cache</span> <span m='221420'>of</span> <span
  m='221490'>size</span> <span m='221840'>m</span> <span m='222030'>over</span>
  <span m='222270'>2.</span> </p><p><span m='223370'>So</span> <span
  m='223610'>we're</span> <span m='223760'>restricting</span> <span
  m='224440'>OPT.</span> <span m='224860'>We're kind</span> <span
  m='225030'>of</span> <span m='225120'>tying</span> <span
  m='225640'>OPT's</span> <span m='225950'>hands</span> <span
  m='226360'>behind</span> <span m='226680'>his</span> <span
  m='226840'>back</span> <span m='227090'>a</span> <span
  m='227150'>little</span> <span m='227430'>bit</span> <span
  m='227680'>by</span> <span m='227810'>decreasing</span> <span
  m='228300'>m</span> <span m='228420'>by</span> <span m='228540'>a</span> <span
  m='228600'>factor</span> <span m='228920'>of</span> <span m='229510'>2.</span>
  <span m='230100'>But</span> <span m='230240'>then</span> <span
  m='230430'>we</span> <span m='230530'>get</span> <span m='230770'>a</span>
  <span m='230830'>factor</span> <span m='231160'>of</span> <span
  m='231230'>2</span> <span m='231640'>approximation,</span> <span
  m='232840'>basically.</span> <span m='233150'>So</span> <span
  m='233310'>this</span> <span m='233500'>was</span> <span m='233640'>the</span>
  <span m='233770'>resource</span> <span m='234150'>augmentation.</span> <span
  m='235150'>And</span> <span m='235290'>this</span> <span m='235420'>is</span>
  <span m='235530'>regular</span> <span m='235850'>approximation</span> <span
  m='236540'>algorithms.</span> <span m='237380'>In</span> <span
  m='237540'>general,</span> <span m='238000'>this</span> <span
  m='238060'>is</span> <span m='238170'>a</span> <span m='238250'>world</span>
  <span m='238640'>called</span> <span m='239580'>online</span> <span
  m='239960'>algorithms,</span> <span m='242560'>which</span> <span
  m='242880'>is</span> <span m='243000'>a</span> <span m='243070'>whole</span>
  <span m='244610'>field.</span> <span m='246360'>I'm</span> <span
  m='246410'>just</span> <span m='246610'>going</span> <span
  m='246730'>to</span> <span m='246780'>mention</span> <span
  m='247110'>it</span> <span m='247220'>briefly</span> <span
  m='247590'>here.</span> </p><p><span m='249430'>The</span> <span
  m='249660'>distinction</span> <span m='250130'>here</span> <span
  m='250320'>is</span> <span m='250460'>LRU,</span> <span m='251560'>or</span>
  <span m='251830'>whatever</span> <span m='252270'>we</span> <span
  m='252460'>implement</span> <span m='252840'>in</span> <span
  m='252960'>a</span> <span m='253030'>real</span> <span
  m='253240'>system,</span> <span m='254090'>has</span> <span
  m='254370'>to</span> <span m='254460'>make</span> <span m='254620'>a</span>
  <span m='254690'>decision</span> <span m='255200'>based</span> <span
  m='255610'>only</span> <span m='255950'>on</span> <span m='256070'>the</span>
  <span m='256160'>past</span> <span m='257380'>of</span> <span
  m='257529'>what's</span> <span m='257709'>happened.</span> <span
  m='259360'>The</span> <span m='259450'>system,</span> <span
  m='260010'>we're</span> <span m='260149'>assuming,</span> <span
  m='260610'>doesn't</span> <span m='260930'>know</span> <span
  m='261060'>the</span> <span m='261170'>future.</span> <span
  m='262610'>So</span> <span m='263560'>in a</span> <span
  m='264120'>compiler,</span> <span m='264210'>maybe</span> <span
  m='264460'>you</span> <span m='264570'>could</span> <span
  m='264690'>try</span> <span m='264820'>to</span> <span
  m='264920'>predict</span> <span m='265220'>the</span> <span
  m='265300'>future</span> <span m='265790'>and</span> <span
  m='265940'>do</span> <span m='266040'>something.</span> <span
  m='266870'>But</span> <span m='267170'>on</span> <span m='267360'>a</span>
  <span m='267540'>CPU,</span> <span m='268140'>it</span> <span
  m='268300'>doesn't</span> <span m='268570'>know</span> <span
  m='268710'>what</span> <span m='268830'>instruction's</span> <span
  m='269370'>going</span> <span m='269490'>to</span> <span
  m='269550'>come</span> <span m='269780'>next,</span> <span
  m='270610'>10</span> <span m='270850'>steps</span> <span m='271150'>in</span>
  <span m='271220'>the</span> <span m='271290'>future.</span> <span
  m='272040'>So</span> <span m='273040'>you</span> <span m='273180'>just</span>
  <span m='273330'>have</span> <span m='273440'>to</span> <span
  m='273530'>make</span> <span m='273680'>a</span> <span
  m='273710'>decision</span> <span m='274070'>now,</span> <span
  m='274270'>sort</span> <span m='274440'>of</span> <span m='274510'>your</span>
  <span m='274620'>best</span> <span m='274920'>guess.</span> <span
  m='275220'>And</span> <span m='275290'>least</span> <span
  m='275500'>recently</span> <span m='275850'>used</span> <span
  m='276160'>is</span> <span m='276270'>a</span> <span m='276330'>good</span>
  <span m='277020'>best</span> <span m='277270'>guess.</span> </p><p><span
  m='278490'>OPT,</span> <span m='278770'>on</span> <span m='278940'>the</span>
  <span m='279070'>other</span> <span m='279230'>hand,</span> <span
  m='280280'>we're</span> <span m='280420'>giving</span> <span
  m='280700'>a</span> <span m='280770'>lot</span> <span m='281060'>of</span>
  <span m='281160'>power.</span> <span m='282340'>This</span> <span
  m='282550'>is</span> <span m='282680'>what</span> <span m='282840'>we</span>
  <span m='282960'>call</span> <span m='283330'>an</span> <span
  m='283520'>offline</span> <span m='283940'>algorithm.</span> <span
  m='288550'>It's</span> <span m='288770'>like</span> <span m='289000'>the
  Q</span> <span m='289130'>in</span> <span m='289500'><i>Star</i></span> <span
  m='289870'><i>Trek:</i></span> <span m='290080'><i>Next</i></span> <span
  m='290360'><i>Generation</i></span> <span m='290880'>or</span> <span
  m='290990'>some</span> <span m='291210'>other</span> <span
  m='291920'>mythical</span> <span m='292270'>being.</span> <span
  m='292920'>It</span> <span m='293080'>lives</span> <span
  m='293390'>outside</span> <span m='293940'>of</span> <span
  m='294040'>the</span> <span m='294130'>timeline.</span> <span
  m='294640'>It</span> <span m='294720'>can</span> <span m='294860'>see</span>
  <span m='295110'>all</span> <span m='295420'>of</span> <span
  m='295520'>time</span> <span m='296390'>and</span> <span
  m='296470'>say,</span> <span m='297190'>I</span> <span m='297320'>think</span>
  <span m='297520'>I'll</span> <span m='297750'>evict</span> <span
  m='298170'>this</span> <span m='298470'>block.</span> <span m='298910'>This
  is</span> <span m='299110'>like</span> <span m='299270'>the</span> <span
  m='299360'>waste</span> <span m='299570'>of</span> <span m='299840'>Q's</span>
  <span m='300190'>resources.</span> <span m='300830'>But</span> <span
  m='301320'>I'll</span> <span m='301540'>evict</span> <span
  m='301720'>this</span> <span m='301910'>block</span> <span
  m='302100'>because</span> <span m='302270'>I</span> <span
  m='302340'>know</span> <span m='302590'>it's</span> <span
  m='302780'>going</span> <span m='302970'>to</span> <span m='303090'>be</span>
  <span m='303290'>used</span> <span m='303730'>for</span> <span
  m='303980'>this</span> <span m='304230'>in</span> <span m='304350'>the</span>
  <span m='304440'>future.</span> </p><p><span m='305880'>LRU</span> <span
  m='306470'>is</span> <span m='306720'>evicting</span> <span
  m='307090'>the</span> <span m='307180'>thing</span> <span
  m='307390'>that</span> <span m='307490'>was</span> <span
  m='307660'>used</span> <span m='308030'>farthest</span> <span
  m='308470'>in</span> <span m='308610'>the</span> <span m='308690'>past.</span>
  <span m='310060'>There's</span> <span m='310370'>a</span> <span
  m='310750'>difference</span> <span m='311130'>there.</span> <span
  m='311380'>And</span> <span m='311450'>it</span> <span m='311530'>could</span>
  <span m='311720'>be</span> <span m='311860'>a</span> <span
  m='311910'>big</span> <span m='312100'>difference.</span> <span
  m='313350'>But</span> <span m='313660'>it</span> <span m='314040'>turns</span>
  <span m='314270'>out</span> <span m='314410'>they're</span> <span
  m='314510'>related in</span> <span m='314820'>this</span> <span
  m='315130'>way.</span> <span m='315620'>So</span> <span m='315790'>this</span>
  <span m='316000'>is</span> <span m='316120'>what we call</span> <span
  m='316380'>an</span> <span m='316650'>online</span> <span
  m='316920'>algorithm,</span> <span m='317830'>meaning</span> <span
  m='318950'>you</span> <span m='319010'>have</span> <span m='319190'>to</span>
  <span m='319280'>make</span> <span m='319430'>decisions</span> <span
  m='319840'>as</span> <span m='320040'>you</span> <span m='320170'>go.</span>
  <span m='320750'>The</span> <span m='320860'>offline</span> <span
  m='321190'>algorithm</span> <span m='321550'>gets</span> <span
  m='321750'>to</span> <span m='321840'>see</span> <span m='322020'>the</span>
  <span m='322100'>future</span> <span m='322570'>and</span> <span
  m='322690'>optimize</span> <span m='323160'>accordingly.</span> <span
  m='324000'>Both</span> <span m='324180'>are</span> <span
  m='324280'>computable,</span> <span m='325470'>but</span> <span
  m='325640'>this</span> <span m='325870'>one's</span> <span
  m='325980'>only</span> <span m='326170'>computable</span> <span
  m='326630'>if</span> <span m='326710'>you know the</span> <span
  m='327020'>future,</span> <span m='327430'>which</span> <span
  m='328660'>we</span> <span m='328790'>don't.</span> </p><p><span
  m='331940'>What</span> <span m='332160'>I</span> <span
  m='332190'>haven't</span> <span m='332450'>done</span> <span
  m='332590'>is</span> <span m='332700'>prove</span> <span
  m='332930'>this</span> <span m='333120'>theorem.</span> <span
  m='333660'>It's</span> <span m='333760'>actually</span> <span
  m='334020'>really</span> <span m='334550'>easy</span> <span
  m='334780'>proof.</span> <span m='337030'>So</span> <span
  m='337110'>let's</span> <span m='337330'>do</span> <span m='337470'>it.</span>
  <span m='341690'>I</span> <span m='341790'>want</span> <span
  m='341960'>to</span> <span m='342010'>take</span> <span m='342510'>the</span>
  <span m='342660'>timeline</span> <span m='344490'>and</span> <span
  m='345050'>divide</span> <span m='345440'>it</span> <span
  m='345620'>into</span> <span m='349950'>phases.</span> <span
  m='351612'>Phases</span> <span m='352070'>sounds</span> <span
  m='352440'>cool.</span> <span m='372420'>So</span> <span
  m='372760'>this</span> <span m='372970'>is</span> <span
  m='373080'>going</span> <span m='373200'>to</span> <span m='373260'>be</span>
  <span m='373380'>an</span> <span m='373450'>analysis.</span> <span
  m='373770'>And</span> <span m='374090'>in an</span> <span
  m='374200'>analysis,</span> <span m='374950'>we're</span> <span
  m='375100'>allowed</span> <span m='375340'>to</span> <span
  m='375440'>know</span> <span m='375550'>the</span> <span
  m='375640'>future</span> <span m='376160'>because</span> <span
  m='376340'>we're</span> <span m='376450'>trying</span> <span
  m='376750'>to</span> <span m='376800'>imagine</span> <span
  m='377130'>what</span> <span m='377290'>OPT</span> <span
  m='377550'>could</span> <span m='377780'>do</span> <span
  m='378100'>relative</span> <span m='378450'>to</span> <span
  m='378690'>LRU.</span> <span m='379260'>So</span> <span
  m='379400'>we're</span> <span m='379480'>fixing</span> <span
  m='379840'>the</span> <span m='379960'>algorithm.</span> <span
  m='380450'>It's</span> <span m='380590'>obviously</span> <span
  m='380900'>not</span> <span m='381110'>using</span> <span
  m='381360'>the</span> <span m='381440'>future.</span> <span
  m='382150'>When</span> <span m='382280'>we</span> <span
  m='382420'>analyze</span> <span m='382890'>it,</span> <span
  m='383010'>we're</span> <span m='383220'>assuming</span> <span
  m='383530'>we</span> <span m='383630'>do</span> <span m='383780'>know</span>
  <span m='383930'>the</span> <span m='384030'>future.</span> <span
  m='384340'>We</span> <span m='384430'>know</span> <span m='384600'>the</span>
  <span m='384740'>entire</span> <span m='385180'>timeline.</span> </p><p><span
  m='386100'>So</span> <span m='386360'>all</span> <span m='386530'>the</span>
  <span m='386630'>algorithms</span> <span m='387000'>we</span> <span
  m='387090'>covered</span> <span m='387310'>last</span> <span
  m='387570'>time,</span> <span m='387800'>all</span> <span
  m='387890'>the</span> <span m='387960'>ones</span> <span m='388140'>we</span>
  <span m='388230'>covered</span> <span m='388500'>today</span> <span
  m='389100'>you</span> <span m='389240'>can</span> <span
  m='389370'>think</span> <span m='389590'>of</span> <span m='389700'>as</span>
  <span m='389780'>just</span> <span m='389960'>making</span> <span
  m='390230'>a</span> <span m='390290'>sequence</span> <span
  m='390790'>of</span> <span m='390940'>accesses.</span> <span
  m='392470'>They're</span> <span m='392870'>making</span> <span
  m='393150'>sequences</span> <span m='393480'>of</span> <span
  m='393570'>accesses</span> <span m='394050'>to</span> <span
  m='394180'>elements.</span> <span m='395010'>But</span> <span
  m='396070'>if</span> <span m='396490'>we</span> <span m='396690'>assume</span>
  <span m='396950'>we</span> <span m='397040'>know</span> <span
  m='397190'>what</span> <span m='397330'>b</span> <span m='397530'>is,</span>
  <span m='398130'>that's</span> <span m='398350'>just</span> <span
  m='398530'>a</span> <span m='398570'>sequence</span> <span
  m='398920'>of</span> <span m='399010'>accesses</span> <span
  m='399620'>to</span> <span m='399710'>blocks.</span> <span
  m='401000'>OK</span> <span m='401220'>so</span> <span m='401990'>you</span>
  <span m='402140'>can</span> <span m='402240'>just</span> <span
  m='402390'>think</span> <span m='402610'>of</span> <span m='402870'>the</span>
  <span m='402990'>timeline</span> <span m='403590'>as</span> <span
  m='403760'>a</span> <span m='403830'>sequence</span> <span
  m='404330'>of</span> <span m='404550'>block</span> <span
  m='405510'>IDs.</span> <span m='407010'>And</span> <span m='407690'>if</span>
  <span m='407960'>you</span> <span m='408240'>access</span> <span
  m='408550'>a</span> <span m='408860'>block</span> <span
  m='408970'>that's</span> <span m='409140'>currently</span> <span
  m='409930'>stored</span> <span m='410210'>in</span> <span
  m='410300'>cache,</span> <span m='410680'>it's</span> <span
  m='410820'>free.</span> <span m='411400'>Otherwise,</span> <span
  m='411770'>you</span> <span m='411860'>pay</span> <span m='412060'>1.</span>
  </p><p><span m='413380'>All</span> <span m='413880'>right,</span> <span
  m='414090'>so</span> <span m='414330'>I'm</span> <span m='414440'>just</span>
  <span m='414610'>going</span> <span m='414740'>to</span> <span
  m='414920'>look</span> <span m='415140'>at</span> <span m='415210'>the</span>
  <span m='415320'>timeline</span> <span m='415770'>of</span> <span
  m='415860'>all</span> <span m='415970'>these</span> <span
  m='416150'>accesses</span> <span m='417110'>and</span> <span
  m='417270'>say,</span> <span m='417520'>well,</span> <span
  m='419700'>take</span> <span m='419960'>a</span> <span
  m='420310'>prefix</span> <span m='420760'>of</span> <span
  m='420890'>the</span> <span m='421010'>accesses</span> <span
  m='421530'>until</span> <span m='422950'>I</span> <span m='423080'>get</span>
  <span m='423370'>to</span> <span m='424770'>m</span> <span
  m='424990'>over</span> <span m='425200'>b</span> <span
  m='425460'>distinct</span> <span m='426810'>blocks,</span> <span
  m='427590'>block</span> <span m='427830'>IDs.</span> <span
  m='428640'>Keep</span> <span m='428860'>going</span> <span
  m='429220'>until,</span> <span m='430710'>if</span> <span m='430890'>I</span>
  <span m='430960'>went</span> <span m='431170'>one</span> <span
  m='431420'>more,</span> <span m='431900'>I'd</span> <span
  m='431990'>have</span> <span m='432210'>m</span> <span m='432370'>over</span>
  <span m='432530'>b</span> <span m='432680'>plus</span> <span
  m='432920'>1</span> <span m='433460'>distinct</span> <span
  m='433820'>blocks.</span> <span m='434230'>So</span> <span
  m='434330'>it's</span> <span m='434440'>a</span> <span
  m='434480'>maximal</span> <span m='435510'>prefix</span> <span
  m='436080'>of</span> <span m='436260'>m</span> <span m='436460'>over</span>
  <span m='436660'>b</span> <span m='436810'>distinct</span> <span
  m='437160'>blocks.</span> <span m='437780'>Cut</span> <span
  m='438080'>there.</span> <span m='439080'>And</span> <span
  m='439230'>then</span> <span m='439490'>repeat.</span> <span
  m='439940'>So</span> <span m='440230'>start</span> <span
  m='440480'>over.</span> <span m='440960'>Start</span> <span
  m='441210'>counting</span> <span m='441460'>at</span> <span
  m='441530'>zero.</span> <span m='442810'>Extend</span> <span
  m='443190'>until</span> <span m='443420'>I</span> <span m='443490'>have</span>
  <span m='443680'>m</span> <span m='443850'>over</span> <span
  m='444060'>b</span> <span m='445130'>distinct</span> <span
  m='445590'>block</span> <span m='445880'>accesses.</span> <span
  m='446400'>And</span> <span m='446500'>if</span> <span m='446640'>I</span>
  <span m='446670'>went</span> <span m='446900'>one</span> <span
  m='447070'>more,</span> <span m='447340'>I'd have</span> <span
  m='447530'>m</span> <span m='447690'>over</span> <span m='447920'>b</span>
  <span m='448090'>plus</span> <span m='448330'>1</span> <span m='448746'>and
  so</span> <span m='449162'>on.</span> </p><p><span m='449580'>So</span> <span
  m='449830'>the</span> <span m='449970'>timeline</span> <span
  m='451440'>gets</span> <span m='451630'>divided.</span> <span
  m='452160'>Who</span> <span m='452310'>knows?</span> <span
  m='452660'>It</span> <span m='452720'>could</span> <span m='452860'>be</span>
  <span m='452960'>totally</span> <span m='453420'>irregular.</span> <span
  m='454660'>If</span> <span m='454740'>you</span> <span
  m='454850'>access</span> <span m='455140'>the</span> <span
  m='455210'>same</span> <span m='455480'>blocks</span> <span
  m='455800'>many</span> <span m='456040'>times,</span> <span
  m='457120'>you</span> <span m='457270'>could</span> <span
  m='457430'>get</span> <span m='457540'>along</span> <span
  m='457830'>for</span> <span m='458340'>a</span> <span m='458570'>very</span>
  <span m='458820'>long</span> <span m='459080'>time</span> <span
  m='459470'>and</span> <span m='459560'>only</span> <span
  m='459810'>access</span> <span m='460150'>m</span> <span
  m='460290'>over</span> <span m='460470'>b</span> <span
  m='460600'>distinct</span> <span m='460930'>blocks.</span> <span
  m='461220'>Who</span> <span m='461320'>knows?</span> <span
  m='461790'>The</span> <span m='462180'>algorithm</span> <span
  m='462630'>definitely</span> <span m='462990'>doesn't know</span> <span
  m='463410'>because</span> <span m='463610'>it</span> <span
  m='463690'>doesn't</span> <span m='463870'>know</span> <span m='464060'>m
  or</span> <span m='464290'>b.</span> <span m='464930'>But</span> <span
  m='465400'>from an</span> <span m='465650'>analysis</span> <span
  m='466160'>perspective,</span> <span m='466570'>we</span> <span
  m='466680'>can</span> <span m='466790'>just</span> <span
  m='467100'>count</span> <span m='467320'>these</span> <span
  m='467490'>things.</span> <span m='467920'>So each</span> <span
  m='468150'>of</span> <span m='468220'>these</span> <span m='468750'>has</span>
  <span m='468960'>exactly</span> <span m='470070'>m</span> <span
  m='470260'>over</span> <span m='470460'>b</span> <span
  m='470690'>distinct</span> <span m='471130'>accesses,</span> <span
  m='475990'>distinct</span> <span m='476320'>block</span> <span
  m='476670'>IDs.</span> </p><p><span m='477860'>So</span> <span
  m='479880'>I</span> <span m='480220'>have</span> <span m='480490'>two</span>
  <span m='480740'>claims</span> <span m='481870'>about</span> <span
  m='483500'>such</span> <span m='483830'>a</span> <span
  m='484360'>phase.</span> <span m='485610'>First</span> <span
  m='485930'>claim</span> <span m='487680'>is</span> <span
  m='487860'>that</span> <span m='488090'>LRU</span> <span
  m='490900'>with</span> <span m='491090'>a</span> <span m='491140'>cache</span>
  <span m='491440'>of</span> <span m='491520'>size</span> <span
  m='491820'>m</span> <span m='494260'>on</span> <span m='494570'>one</span>
  <span m='494750'>phase</span> <span m='497940'>is,</span> <span
  m='498010'>at</span> <span m='498100'>most,</span> <span
  m='498840'>what?</span> <span m='504410'>It's</span> <span
  m='504840'>easy.</span> </p><p><span m='508585'>STUDENT: M over b.</span>
  </p><p><span m='509540'>PROFESSOR: M</span> <span m='509730'>over</span> <span
  m='509950'>b.</span> <span m='513900'>The claim is,</span> <span
  m='514250'>at</span> <span m='514309'>most,</span> <span m='514580'>m</span>
  <span m='514710'>over</span> <span m='514909'>b</span> <span
  m='516400'>basically</span> <span m='516690'>because</span> <span
  m='517140'>the LRU</span> <span m='517460'>is</span> <span
  m='517669'>not</span> <span m='518289'>brain</span> <span
  m='518610'>dead.</span> <span m='521789'>Well,</span> <span
  m='522390'>you're</span> <span m='522590'>accessing</span> <span
  m='523049'>these</span> <span m='524200'>blocks.</span> <span
  m='525360'>And</span> <span m='525590'>they've</span> <span
  m='525770'>all</span> <span m='526010'>been</span> <span
  m='526230'>accessed</span> <span m='526600'>more</span> <span
  m='526810'>recently.</span> <span m='527480'>I</span> <span
  m='527570'>mean,</span> <span m='527760'>let's</span> <span
  m='527930'>look</span> <span m='528060'>at</span> <span m='528130'>this</span>
  <span m='528320'>phase.</span> <span m='529170'>All</span> <span
  m='529370'>the</span> <span m='529440'>blocks</span> <span m='529750'>that
  you</span> <span m='529920'>touch</span> <span m='530220'>here</span> <span
  m='530460'>have</span> <span m='530640'>been</span> <span
  m='530730'>accessed</span> <span m='531020'>more</span> <span
  m='531190'>recently</span> <span m='531560'>than</span> <span
  m='531740'>whatever</span> <span m='532040'>came</span> <span
  m='532220'>before.</span> <span m='532570'>That's</span> <span
  m='532850'>the</span> <span m='532920'>definition</span> <span
  m='533450'>of</span> <span m='533620'>this</span> <span
  m='533790'>timeline.</span> <span m='534290'>This</span> <span
  m='534450'>is</span> <span m='534580'>an</span> <span m='534670'>order</span>
  <span m='534870'>by</span> <span m='535020'>time.</span> <span
  m='535980'>So</span> <span m='536420'>anything</span> <span
  m='536730'>you</span> <span m='536850'>load</span> <span m='537120'>in</span>
  <span m='537260'>here,</span> <span m='537800'>you</span> <span
  m='537980'>will</span> <span m='538120'>keep</span> <span
  m='538800'>preferentially</span> <span m='539580'>over</span> <span
  m='539810'>the</span> <span m='539930'>things</span> <span
  m='540210'>that</span> <span m='540320'>are</span> <span m='540430'>not</span>
  <span m='540730'>in</span> <span m='540880'>the</span> <span
  m='540970'>phase</span> <span m='541540'>because</span> <span
  m='541760'>everything</span> <span m='542140'>in</span> <span
  m='542210'>the</span> <span m='542300'>phase has</span> <span
  m='542660'>been</span> <span m='542780'>accessed</span> <span
  m='543080'>more</span> <span m='543230'>recently.</span> </p><p><span
  m='544190'>So</span> <span m='544600'>maybe,</span> <span
  m='545630'>eventually,</span> <span m='546050'>you</span> <span
  m='546150'>load</span> <span m='546440'>all</span> <span m='546780'>m
  over</span> <span m='547160'>b</span> <span m='547630'>blocks</span> <span
  m='547980'>that</span> <span m='548110'>are</span> <span m='548190'>in</span>
  <span m='548270'>the</span> <span m='548350'>phase.</span> <span
  m='549270'>Everything</span> <span m='549700'>else</span> <span
  m='549880'>you</span> <span m='549980'>touch,</span> <span
  m='551030'>by</span> <span m='551220'>definition</span> <span
  m='551820'>of</span> <span m='551960'>a</span> <span m='552010'>phase,</span>
  <span m='552480'>are</span> <span m='552590'>the</span> <span
  m='552680'>same</span> <span m='553010'>blocks.</span> <span
  m='553440'>So</span> <span m='553540'>they</span> <span m='553650'>will</span>
  <span m='553890'>remain in</span> <span m='554350'>cache.</span> <span
  m='555400'>And</span> <span m='555750'>that's</span> <span m='555920'>all it
  will</span> <span m='556180'>cost,</span> <span m='556800'>m</span> <span
  m='556950'>over</span> <span m='557140'>b</span> <span
  m='557810'>memory</span> <span m='557990'>transfers</span> <span
  m='558460'>per</span> <span m='558760'>phase.</span> <span
  m='559820'>So</span> <span m='559980'>this</span> <span m='560120'>is</span>
  <span m='560190'>basically</span> <span m='560630'>ignoring</span> <span
  m='561210'>any</span> <span m='561370'>carry</span> <span
  m='561780'>over</span> <span m='561970'>from</span> <span
  m='562130'>phase</span> <span m='562390'>to</span> <span
  m='562470'>phase.</span> <span m='562850'>This</span> <span
  m='563010'>is</span> <span m='563170'>a</span> <span
  m='563670'>conservative</span> <span m='564420'>upper</span> <span
  m='564680'>bounds.</span> <span m='565270'>But</span> <span
  m='565710'>it's</span> <span m='565890'>an</span> <span
  m='565960'>upper</span> <span m='566150'>bounds.</span> </p><p><span
  m='568530'>And</span> <span m='568720'>then</span> <span m='568840'>the</span>
  <span m='568950'>other</span> <span m='569100'>question</span> <span
  m='569410'>is,</span> <span m='569510'>what</span> <span
  m='569760'>could</span> <span m='569920'>OPT do?</span> <span
  m='577260'>So</span> <span m='577560'>OPT--</span> <span
  m='579170'>remember,</span> <span m='579510'>we're</span> <span
  m='579660'>tying</span> <span m='580610'>its</span> <span
  m='580800'>hands</span> <span m='581100'>behind</span> <span
  m='581190'>its</span> <span m='581500'>back.</span> <span m='582160'>It</span>
  <span m='582320'>only</span> <span m='582530'>has</span> <span
  m='582720'>a</span> <span m='582780'>cache</span> <span m='583070'>of</span>
  <span m='583130'>size</span> <span m='583450'>m</span> <span
  m='583630'>over</span> <span m='583830'>2.</span> <span m='584860'>And</span>
  <span m='584970'>then</span> <span m='585080'>we're</span> <span
  m='585190'>evaluating</span> <span m='585510'>on</span> <span
  m='585830'>a</span> <span m='586110'>phase.</span> <span m='590290'>I</span>
  <span m='590400'>want</span> <span m='590540'>to</span> <span
  m='590610'>claim</span> <span m='590820'>that</span> <span
  m='590940'>OPT</span> <span m='591390'>is,</span> <span
  m='592710'>well,</span> <span m='593050'>at</span> <span
  m='593180'>least</span> <span m='593580'>half</span> <span
  m='593800'>of</span> <span m='593880'>that</span> <span m='594140'>if</span>
  <span m='594200'>I</span> <span m='594460'>want</span> <span
  m='594580'>to</span> <span m='594650'>get</span> <span m='594790'>a</span>
  <span m='594850'>factor</span> <span m='595210'>of</span> <span
  m='595290'>2.</span> <span m='600260'>So</span> <span m='600370'>I</span>
  <span m='600430'>claim</span> <span m='600670'>it's</span> <span
  m='600810'>at</span> <span m='600880'>least</span> <span m='601150'>1/2</span>
  <span m='602010'>m</span> <span m='602190'>over</span> <span
  m='602410'>b.</span> </p><p><span m='603700'>Why?</span> <span
  m='606180'>Now</span> <span m='606470'>we</span> <span m='606570'>have</span>
  <span m='606690'>to</span> <span m='606770'>think</span> <span
  m='606970'>about</span> <span m='607230'>carry</span> <span
  m='607600'>over.</span> <span m='608330'>So</span> <span m='608940'>OPT
  did</span> <span m='609410'>something</span> <span m='609890'>in</span> <span
  m='609980'>this</span> <span m='610210'>phase.</span> <span
  m='611140'>And</span> <span m='611200'>then</span> <span
  m='611320'>we're</span> <span m='611440'>wondering</span> <span
  m='611860'>what</span> <span m='612000'>happens</span> <span
  m='612400'>in</span> <span m='612500'>the</span> <span m='612580'>very</span>
  <span m='612820'>next</span> <span m='613160'>phase.</span> <span
  m='613560'>So</span> <span m='613730'>some</span> <span m='614030'>of</span>
  <span m='614130'>these</span> <span m='614340'>blocks</span> <span
  m='615230'>may be</span> <span m='615510'>shared</span> <span m='615970'>with
  these</span> <span m='616140'>blocks.</span> <span m='616520'>We</span> <span
  m='616620'>don't</span> <span m='616760'>know.</span> <span
  m='617150'>I</span> <span m='617210'>mean,</span> <span
  m='617360'>there's</span> <span m='617650'>some</span> <span
  m='617900'>set</span> <span m='618100'>of</span> <span
  m='618170'>blocks.</span> <span m='618480'>We</span> <span
  m='618590'>know</span> <span m='618770'>that</span> <span
  m='619380'>this</span> <span m='619570'>very</span> <span
  m='619800'>first</span> <span m='620120'>block</span> <span
  m='620460'>was</span> <span m='620710'>not</span> <span m='620980'>in</span>
  <span m='621110'>the</span> <span m='621210'>set,</span> <span
  m='621590'>otherwise</span> <span m='622220'>the</span> <span
  m='622310'>phase</span> <span m='622540'>would have been</span> <span
  m='622820'>longer.</span> <span m='623540'>But</span> <span
  m='623770'>maybe</span> <span m='624020'>some</span> <span
  m='624230'>later</span> <span m='624530'>block</span> <span
  m='624840'>happens</span> <span m='625160'>to repeat</span> <span
  m='625490'>some</span> <span m='625820'>block</span> <span
  m='626200'>that's</span> <span m='626360'>over</span> <span
  m='626540'>there.</span> <span m='627400'>We</span> <span m='627590'>don't
  really</span> <span m='627810'>know.</span> <span m='627980'>There</span>
  <span m='628110'>could</span> <span m='628270'>be</span> <span
  m='628390'>some</span> <span m='628560'>carry</span> <span
  m='628890'>over.</span> </p><p><span m='630060'>So</span> <span
  m='630220'>how</span> <span m='630540'>lucky</span> <span
  m='630940'>could</span> <span m='631130'>OPT</span> <span
  m='631440'>be?</span> <span m='631930'>At</span> <span m='632180'>this</span>
  <span m='632440'>moment</span> <span m='632930'>in</span> <span
  m='633050'>time,</span> <span m='633910'>at</span> <span m='634030'>the</span>
  <span m='634110'>beginning</span> <span m='634770'>of</span> <span
  m='635010'>the</span> <span m='635090'>phase</span> <span
  m='635400'>we're</span> <span m='635500'>looking</span> <span
  m='635800'>at,</span> <span m='636840'>it</span> <span m='636970'>could</span>
  <span m='637160'>be</span> <span m='637310'>the</span> <span
  m='637470'>entire</span> <span m='638140'>cache</span> <span
  m='639350'>has</span> <span m='639580'>things</span> <span
  m='639810'>that</span> <span m='639930'>we</span> <span
  m='640050'>want,</span> <span m='641060'>has</span> <span
  m='641950'>blocks</span> <span m='642400'>that</span> <span
  m='642520'>appear</span> <span m='643300'>in</span> <span
  m='643520'>this</span> <span m='644010'>phase.</span> <span
  m='644730'>That's</span> <span m='644950'>the</span> <span
  m='645040'>maximum</span> <span m='645480'>carry</span> <span
  m='645720'>over,</span> <span m='646010'>the</span> <span
  m='646130'>entire</span> <span m='646490'>cache.</span> <span m='647800'>So
  sort</span> <span m='648055'>of the</span> <span m='648310'>best</span> <span
  m='648600'>case</span> <span m='648860'>for</span> <span m='648990'>OPT</span>
  <span m='651210'>is</span> <span m='651380'>that</span> <span
  m='651520'>the</span> <span m='651770'>entire</span> <span
  m='652360'>cache</span> <span m='656750'>is</span> <span
  m='656860'>useful,</span> <span m='660490'>meaning</span> <span
  m='661020'>it</span> <span m='661390'>contains</span> <span
  m='665550'>blocks</span> <span m='667390'>in</span> <span
  m='667570'>the</span> <span m='667660'>phase</span> <span
  m='668140'>that</span> <span m='668340'>we're</span> <span
  m='668650'>interested</span> <span m='669140'>in--</span> <span
  m='669330'>the</span> <span m='669490'>phase</span> <span
  m='669710'>we're</span> <span m='669840'>looking</span> <span
  m='670150'>at--</span> <span m='670956'>at</span> <span m='671360'>the</span>
  <span m='671470'>start</span> <span m='671820'>of</span> <span
  m='671920'>the</span> <span m='672010'>phase.</span> <span
  m='676890'>That's</span> <span m='677110'>the</span> <span
  m='677180'>best</span> <span m='677430'>case.</span> </p><p><span
  m='677720'>But</span> <span m='677980'>because</span> <span
  m='678410'>we</span> <span m='678540'>gave</span> <span m='678780'>up</span>
  <span m='679040'>only</span> <span m='679300'>m</span> <span
  m='679520'>over</span> <span m='679700'>2,</span> <span m='680320'>that</span>
  <span m='680510'>means,</span> <span m='681750'>at</span> <span
  m='681900'>most,</span> <span m='683640'>one</span> <span
  m='683910'>half</span> <span m='684580'>m</span> <span m='684740'>over</span>
  <span m='684940'>b</span> <span m='686250'>blocks.</span> <span
  m='687120'>This</span> <span m='687270'>was</span> <span
  m='687410'>cache</span> <span m='687710'>size.</span> <span
  m='688090'>This</span> <span m='688230'>is</span> <span m='688870'>the</span>
  <span m='688900'>number</span> <span m='689100'>of</span> <span
  m='689150'>blocks</span> <span m='689510'>in</span> <span
  m='689600'>the</span> <span m='689670'>cache.</span> <span
  m='693370'>At</span> <span m='693460'>most,</span> <span
  m='693560'>this</span> <span m='693820'>many</span> <span
  m='694080'>blocks</span> <span m='694550'>will</span> <span
  m='694740'>be</span> <span m='694980'>free,</span> <span
  m='696790'>won't</span> <span m='696970'>cost</span> <span
  m='697290'>anything</span> <span m='697640'>for</span> <span
  m='697780'>OPT.</span> <span m='699460'>But</span> <span m='699660'>by</span>
  <span m='699770'>definition,</span> <span m='700850'>the</span> <span
  m='700940'>phase</span> <span m='701310'>has</span> <span m='701620'>m</span>
  <span m='701860'>over</span> <span m='702080'>b</span> <span
  m='702300'>distinct</span> <span m='702670'>blocks.</span> <span
  m='703540'>So</span> <span m='703650'>half</span> <span m='703880'>of</span>
  <span m='703920'>them</span> <span m='704040'>will</span> <span
  m='704120'>be</span> <span m='704250'>free.</span> <span m='704450'>The</span>
  <span m='704600'>other</span> <span m='704810'>half,</span> <span
  m='705270'>OPT</span> <span m='705530'>is</span> <span m='705630'>going</span>
  <span m='705750'>to</span> <span m='705800'>have</span> <span
  m='706000'>to</span> <span m='706110'>load</span> <span m='706340'>in.</span>
  </p><p><span m='707850'>So</span> <span m='708010'>it's</span> <span
  m='708140'>a</span> <span m='708850'>kind</span> <span m='709170'>of</span>
  <span m='709480'>trivial</span> <span m='709910'>analysis.</span> <span
  m='710500'>It's</span> <span m='710620'>amazing</span> <span
  m='710950'>this</span> <span m='711100'>proof is</span> <span
  m='711400'>so</span> <span m='711540'>simple.</span> <span
  m='714040'>It's</span> <span m='714200'>all</span> <span
  m='714350'>about</span> <span m='714680'>setting</span> <span
  m='714910'>things</span> <span m='715120'>up</span> <span
  m='715300'>right.</span> <span m='716520'>If</span> <span
  m='716660'>you</span> <span m='716750'>define</span> <span
  m='717130'>phases</span> <span m='717590'>that</span> <span
  m='717700'>are</span> <span m='717810'>good</span> <span m='717990'>for</span>
  <span m='718150'>LRU,</span> <span m='719890'>then</span> <span
  m='720090'>they're</span> <span m='720240'>also</span> <span
  m='720570'>bad</span> <span m='720930'>for</span> <span m='721100'>OPT</span>
  <span m='721460'>when it</span> <span m='721630'>has</span> <span
  m='721880'>cache at</span> <span m='722300'>half</span> <span
  m='722630'>the</span> <span m='722700'>size.</span> <span
  m='723730'>And</span> <span m='723940'>so</span> <span m='724070'>OPT</span>
  <span m='724320'>has</span> <span m='724490'>to</span> <span
  m='724580'>pay</span> <span m='724730'>at</span> <span m='724810'>least</span>
  <span m='725020'>half what</span> <span m='725460'>LRU</span> <span
  m='725920'>is</span> <span m='726060'>definitely</span> <span
  m='726400'>paying.</span> <span m='727570'>Here</span> <span
  m='727810'>we</span> <span m='727930'>can</span> <span
  m='728040'>forget</span> <span m='728310'>about</span> <span
  m='728540'>carry</span> <span m='728820'>over.</span> <span
  m='729060'>Here</span> <span m='729280'>we're</span> <span
  m='729410'>bounding</span> <span m='729790'>the</span> <span
  m='729870'>carry</span> <span m='730160'>over</span> <span
  m='730760'>just</span> <span m='730940'>by</span> <span
  m='731050'>making</span> <span m='731340'>the</span> <span
  m='731430'>cache</span> <span m='731730'>smaller.</span> <span
  m='732980'>That's</span> <span m='733200'>it.</span> <span
  m='733420'>So</span> <span m='734110'>this</span> <span m='734330'>is</span>
  <span m='734440'>a</span> <span m='734490'>most</span> <span
  m='734720'>twice</span> <span m='734970'>that.</span> <span
  m='736140'>And</span> <span m='736270'>so</span> <span m='736360'>we</span>
  <span m='736460'>get</span> <span m='736640'>the</span> <span
  m='736720'>theorem.</span> </p><p><span m='739230'>I</span> <span
  m='739290'>mean,</span> <span m='739520'>changing</span> <span
  m='739890'>the</span> <span m='739990'>cache</span> <span
  m='740250'>size</span> <span m='740480'>could</span> <span
  m='740680'>dramatically</span> <span m='741480'>change</span> <span
  m='741840'>the</span> <span m='741940'>number</span> <span
  m='742380'>of</span> <span m='743670'>cache</span> <span
  m='743960'>reads</span> <span m='744230'>that</span> <span
  m='744330'>you</span> <span m='744420'>have</span> <span m='744670'>to</span>
  <span m='744780'>do</span> <span m='745010'>or</span> <span
  m='745520'>disk</span> <span m='746200'>reads</span> <span
  m='746540'>it</span> <span m='746610'>you</span> <span m='746690'>have</span>
  <span m='746870'>to</span> <span m='746960'>do</span> <span
  m='747100'>into</span> <span m='747250'>cache.</span> <span
  m='749300'>But</span> <span m='749660'>in</span> <span m='749840'>all</span>
  <span m='750140'>of</span> <span m='750220'>the</span> <span
  m='750350'>algorithms</span> <span m='750730'>we</span> <span
  m='750830'>will</span> <span m='751000'>cover,</span> <span
  m='752360'>we're</span> <span m='752550'>giving</span> <span
  m='752820'>some</span> <span m='753060'>bound</span> <span
  m='753520'>in</span> <span m='753640'>terms</span> <span m='753920'>of</span>
  <span m='754030'>m.</span> <span m='754510'>That</span> <span
  m='754710'>bound</span> <span m='754990'>will</span> <span
  m='755120'>always</span> <span m='755440'>be,</span> <span
  m='756170'>at</span> <span m='756260'>most,</span> <span
  m='756470'>some</span> <span m='756980'>polynomial</span> <span
  m='757630'>dependence</span> <span m='758080'>in</span> <span
  m='758180'>m.</span> <span m='758850'>Usually</span> <span
  m='759010'>it's</span> <span m='759220'>like</span> <span m='759390'>a</span>
  <span m='759480'>1</span> <span m='759680'>over</span> <span m='760410'>m,
  1</span> <span m='760910'>over</span> <span m='761110'>square</span> <span
  m='761380'>root</span> <span m='761460'>of</span> <span m='761550'>m,</span>
  <span m='761985'>1</span> <span m='762420'>over</span> <span
  m='762580'>log</span> <span m='762940'>m,</span> <span
  m='763190'>something</span> <span m='763470'>like</span> <span
  m='763650'>that.</span> <span m='765090'>All</span> <span m='765390'>of</span>
  <span m='765490'>those</span> <span m='765710'>bounds</span> <span
  m='766130'>will</span> <span m='766260'>only</span> <span m='766480'>be</span>
  <span m='766580'>affected</span> <span m='766940'>by</span> <span
  m='767070'>a</span> <span m='767130'>constant</span> <span
  m='767510'>factor</span> <span m='768440'>when</span> <span
  m='768610'>you</span> <span m='768720'>change</span> <span m='769160'>m</span>
  <span m='769360'>by</span> <span m='769500'>a</span> <span
  m='769560'>constant</span> <span m='769900'>factor.</span> <span
  m='770610'>So</span> <span m='771350'>this</span> <span m='771520'>is</span>
  <span m='771640'>good</span> <span m='771790'>enough</span> <span
  m='772320'>for</span> <span m='773160'>cache</span> <span
  m='773570'>oblivious</span> <span m='773770'>algorithms.</span> </p><p><span
  m='776820'>All</span> <span m='776910'>right,</span> <span
  m='777390'>so</span> <span m='777740'>that's</span> <span
  m='778080'>sort</span> <span m='778320'>of</span> <span
  m='778970'>review</span> <span m='779355'>of</span> <span
  m='779740'>why</span> <span m='779990'>this</span> <span m='780150'>model
  is</span> <span m='780560'>reasonable.</span> <span m='782580'>LRU</span>
  <span m='783080'>is</span> <span m='783520'>good.</span> <span
  m='784520'>So</span> <span m='784830'>now</span> <span m='785530'>we're</span>
  <span m='785710'>going</span> <span m='785790'>to</span> <span
  m='785850'>talk</span> <span m='786050'>about</span> <span
  m='786300'>two</span> <span m='786500'>basic</span> <span
  m='786810'>problems--</span> <span m='787180'>searching</span> <span
  m='788030'>for</span> <span m='788160'>stuff</span> <span m='789230'>in</span>
  <span m='789420'>array,</span> <span m='790210'>sorting</span> <span
  m='791160'>an</span> <span m='791280'>array</span> <span m='792470'>in</span>
  <span m='792740'>both</span> <span m='793040'>of</span> <span
  m='793130'>these</span> <span m='793310'>models.</span> <span
  m='794050'>We</span> <span m='794170'>won't</span> <span m='794430'>be</span>
  <span m='794570'>able</span> <span m='794760'>to</span> <span
  m='794870'>do</span> <span m='794990'>everything</span> <span
  m='795370'>cache</span> <span m='795610'>obliviously</span> <span
  m='796050'>today.</span> <span m='796430'>But</span> <span
  m='796780'>they're</span> <span m='797220'>are</span> <span
  m='797450'>all</span> <span m='797690'>possible.</span> <span
  m='798370'>It</span> <span m='798740'>just</span> <span
  m='798850'>takes</span> <span m='799270'>more</span> <span
  m='799460'>time</span> <span m='799740'>than</span> <span m='799880'>we</span>
  <span m='799980'>have.</span> <span m='801510'>We'll</span> <span
  m='801710'>give</span> <span m='801870'>you</span> <span
  m='801990'>more</span> <span m='802170'>of</span> <span m='802220'>a</span>
  <span m='802280'>flavor</span> <span m='802680'>of</span> <span
  m='802740'>how</span> <span m='802930'>these</span> <span
  m='803650'>things</span> <span m='803810'>work.</span> <span
  m='804150'>Again,</span> <span m='804360'>the</span> <span
  m='804450'>theme</span> <span m='804690'>is</span> <span
  m='804790'>going</span> <span m='804940'>to</span> <span m='805010'>be</span>
  <span m='805320'>divide</span> <span m='805570'>and</span> <span
  m='805660'>conquer,</span> <span m='807900'>my</span> <span
  m='808040'>glass</span> <span m='808370'>class.</span> </p><p><span
  m='817240'>So</span> <span m='817750'>let's</span> <span m='818180'>say</span>
  <span m='818330'>we</span> <span m='818460'>have</span> <span
  m='818740'>n</span> <span m='819210'>elements.</span> <span
  m='820590'>Let's</span> <span m='820820'>say,</span> <span
  m='821120'>for</span> <span m='821290'>simplicity,</span> <span
  m='822020'>we're</span> <span m='822150'>in</span> <span m='822250'>the</span>
  <span m='822320'>comparison</span> <span m='822860'>models.</span> <span
  m='823240'>So all</span> <span m='823480'>we</span> <span
  m='823590'>can</span> <span m='823710'>really</span> <span
  m='823900'>do</span> <span m='824030'>with</span> <span
  m='824140'>those</span> <span m='824320'>elements</span> <span
  m='824700'>is</span> <span m='824820'>compare</span> <span
  m='825160'>them--</span> <span m='825700'>less</span> <span
  m='825970'>than,</span> <span m='826290'>greater</span> <span
  m='826400'>than,</span> <span m='826710'>equal.</span> <span
  m='829670'>And</span> <span m='830000'>let's</span> <span
  m='830200'>say</span> <span m='830390'>we</span> <span m='830560'>want</span>
  <span m='830850'>to</span> <span m='830970'>do</span> <span
  m='832190'>search</span> <span m='832620'>in</span> <span
  m='832700'>the</span> <span m='832780'>comparison</span> <span
  m='833220'>model,</span> <span m='833540'>which</span> <span
  m='833960'>I'll</span> <span m='834150'>think of</span> <span
  m='834460'>as</span> <span m='834650'>a</span> <span
  m='834750'>predecessor</span> <span m='835650'>search.</span> </p><p><span
  m='841770'>So</span> <span m='841980'>given</span> <span m='842270'>a</span>
  <span m='842320'>new</span> <span m='842480'>element</span> <span
  m='842820'>x,</span> <span m='843150'>I</span> <span m='843210'>want</span>
  <span m='843400'>to</span> <span m='843460'>find,</span> <span
  m='843770'>what</span> <span m='843930'>is</span> <span m='844050'>the</span>
  <span m='844150'>previous</span> <span m='844510'>element?</span> <span
  m='845880'>What's</span> <span m='846130'>the</span> <span
  m='846400'>largest</span> <span m='846810'>element</span> <span
  m='847100'>smaller</span> <span m='847410'>than</span> <span
  m='847560'>x</span> <span m='848320'>in</span> <span m='848530'>my</span>
  <span m='848880'>set?</span> <span m='849520'>I'm</span> <span
  m='849810'>thinking</span> <span m='850140'>of</span> <span m='850250'>these
  n</span> <span m='850570'>elements</span> <span m='851180'>as</span> <span
  m='851400'>static,</span> <span m='853000'>let's</span> <span
  m='853230'>say.</span> <span m='854130'>You</span> <span m='854270'>can</span>
  <span m='854400'>generalize</span> <span m='854950'>everything</span> <span
  m='855310'>I</span> <span m='855370'>say</span> <span m='855610'>to</span>
  <span m='855760'>have</span> <span m='855990'>insertions</span> <span
  m='856440'>and</span> <span m='856560'>deletions.</span> <span
  m='857640'>But</span> <span m='857920'>let's</span> <span
  m='858190'>not</span> <span m='858670'>worry</span> <span
  m='858810'>about</span> <span m='859020'>that</span> <span
  m='859660'>for</span> <span m='859800'>now.</span> <span m='862030'>I</span>
  <span m='862170'>just</span> <span m='862420'>want</span> <span
  m='862630'>to</span> <span m='862690'>store</span> <span
  m='862970'>them</span> <span m='863170'>somehow</span> <span
  m='864190'>in</span> <span m='864340'>order</span> <span m='864500'>to</span>
  <span m='864690'>enable</span> <span m='865040'>search.</span> <span
  m='866210'>So</span> <span m='866530'>any</span> <span
  m='866820'>suggestions</span> <span m='867880'>in</span> <span
  m='868310'>external</span> <span m='868810'>memory</span> <span
  m='869160'>model</span> <span m='870120'>or</span> <span
  m='870270'>cache</span> <span m='870540'>oblivious</span> <span
  m='870810'>model?</span> <span m='871410'>How</span> <span
  m='871600'>would</span> <span m='871720'>you</span> <span m='871820'>do</span>
  <span m='871950'>this?</span> </p><p><span m='872950'>[STUDENT COUGHS]</span>
  </p><p></p><p><span m='878490'>This may</span> <span m='878640'>sound</span>
  <span m='879000'>easy,</span> <span m='879240'>but</span> <span
  m='879400'>it's</span> <span m='879560'>not.</span> <span
  m='881020'>But</span> <span m='881220'>that's</span> <span
  m='881450'>OK.</span> <span m='881860'>You know,</span> <span
  m='882100'>I</span> <span m='882190'>like</span> <span m='882560'>easy</span>
  <span m='882960'>answers,</span> <span m='883600'>simple</span> <span
  m='883890'>answers.</span> <span m='888200'>There's</span> <span
  m='888440'>two</span> <span m='888590'>simple</span> <span
  m='888910'>answers.</span> <span m='889280'>One</span> <span
  m='889380'>is</span> <span m='889770'>correct,</span> <span
  m='890110'>one</span> <span m='890270'>is</span> <span
  m='890430'>wrong.</span> <span m='891160'>But</span> <span m='891260'>I</span>
  <span m='891330'>like</span> <span m='891550'>both,</span> <span
  m='892060'>so</span> <span m='892340'>I</span> <span m='892420'>want</span>
  <span m='892540'>to</span> <span m='892590'>analyze</span> <span
  m='892940'>both.</span> <span m='895240'>Yeah?</span> </p><p><span
  m='895740'>STUDENT: Store</span> <span m='896240'>them</span> <span
  m='897240'>sorted</span> <span m='897740'>in</span> <span
  m='898240'>order?</span> </p><p><span m='898740'>PROFESSOR: Store</span> <span
  m='899000'>them</span> <span m='899150'>sorted</span> <span
  m='899470'>in</span> <span m='899620'>order,</span> <span
  m='899970'>good.</span> <span m='900940'>That's</span> <span
  m='902360'>how</span> <span m='902510'>we'd</span> <span
  m='902590'>normally</span> <span m='902960'>solve</span> <span
  m='903200'>this</span> <span m='903320'>problem.</span> <span
  m='903620'>So</span> <span m='903860'>let's</span> <span m='904080'>see</span>
  <span m='904210'>how</span> <span m='904340'>it</span> <span
  m='904440'>does.</span> <span m='909320'>I</span> <span m='909420'>thought
  I</span> <span m='909570'>had</span> <span m='909630'>solution,</span> <span
  m='910040'>too,</span> <span m='910230'>here.</span> <span m='910540'>But
  that's</span> <span m='910830'>OK.</span> <span m='913180'>Binary</span> <span
  m='913520'>search</span> <span m='915570'>in</span> <span m='915690'>a</span>
  <span m='915750'>sorted</span> <span m='916070'>array,</span> <span
  m='922750'>sort</span> <span m='923230'>the</span> <span
  m='923350'>elements</span> <span m='923740'>in</span> <span
  m='923860'>order.</span> <span m='925960'>And</span> <span
  m='926120'>then</span> <span m='926320'>to</span> <span m='926430'>do</span>
  <span m='926640'>a</span> <span m='926730'>query,</span> <span
  m='927470'>binary</span> <span m='927750'>search</span> <span
  m='928040'>on</span> <span m='928190'>it.</span> </p><p><span
  m='928810'>So</span> <span m='929460'>you</span> <span
  m='929540'>remember</span> <span m='929820'>binary</span> <span
  m='930100'>search.</span> <span m='930610'>You've got an</span> <span
  m='931030'>array.</span> <span m='932050'>You</span> <span
  m='932130'>start</span> <span m='932320'>in</span> <span m='932370'>the</span>
  <span m='932440'>middle.</span> <span m='933690'>Then</span> <span
  m='934030'>let's</span> <span m='934290'>say</span> <span
  m='934560'>the</span> <span m='934670'>element</span> <span
  m='935030'>looking</span> <span m='935300'>for</span> <span
  m='935430'>is</span> <span m='935490'>way</span> <span m='935650'>over</span>
  <span m='935810'>here.</span> <span m='936480'>So then</span> <span
  m='936660'>we'll</span> <span m='936750'>go</span> <span
  m='936880'>over</span> <span m='937080'>this</span> <span
  m='937280'>way</span> <span m='937830'>and</span> <span m='938110'>go</span>
  <span m='938300'>there,</span> <span m='939010'>this</span> <span
  m='939240'>way,</span> <span m='939980'>there,</span> <span
  m='940930'>this</span> <span m='941080'>way,</span> <span
  m='942830'>log</span> <span m='943140'>n</span> <span m='943490'>time.</span>
  <span m='944870'>I</span> <span m='944900'>mean,</span> <span
  m='945850'>binary</span> <span m='946170'>search</span> <span
  m='946450'>is,</span> <span m='946570'>in a</span> <span
  m='946680'>certain</span> <span m='946910'>sense,</span> <span
  m='947130'>a</span> <span m='947190'>divide</span> <span m='947500'>and</span>
  <span m='947600'>conquer</span> <span m='947960'>algorithm.</span> <span
  m='948330'>You</span> <span m='948440'>only</span> <span
  m='948610'>recurse</span> <span m='948970'>on</span> <span
  m='949070'>one</span> <span m='949310'>side,</span> <span
  m='949710'>but</span> <span m='949850'>it's</span> <span
  m='949990'>divide</span> <span m='950200'>and</span> <span
  m='950280'>conquer.</span> <span m='951920'>So</span> <span m='952280'>divide
  and</span> <span m='952610'>conquer is</span> <span m='952970'>good.</span>
  <span m='953180'>Surely</span> <span m='953540'>binary</span> <span
  m='953850'>search</span> <span m='954110'>is</span> <span
  m='954230'>good.</span> <span m='955770'>If</span> <span
  m='955870'>only</span> <span m='956210'>it</span> <span m='956300'>were</span>
  <span m='956390'>that</span> <span m='956590'>simple.</span> </p><p><span
  m='958190'>So</span> <span m='959065'>sort of</span> <span
  m='959490'>orthogonal</span> <span m='960000'>to</span> <span
  m='960090'>this</span> <span m='960270'>picture--</span> <span
  m='961290'>maybe</span> <span m='961650'>I'll</span> <span
  m='961740'>just</span> <span m='961890'>draw</span> <span m='962070'>it</span>
  <span m='962150'>on</span> <span m='962270'>one</span> <span
  m='962430'>side--</span> <span m='963620'>there's</span> <span
  m='963840'>a</span> <span m='963900'>division</span> <span
  m='964300'>into</span> <span m='964500'>blocks.</span> <span
  m='966350'>And</span> <span m='966690'>in a cache</span> <span
  m='966740'>oblivious</span> <span m='967190'>setting,</span> <span
  m='967480'>we</span> <span m='967590'>don't</span> <span
  m='967740'>know</span> <span m='967860'>where</span> <span
  m='967960'>that</span> <span m='968210'>falls.</span> <span
  m='970120'>But</span> <span m='971330'>the</span> <span
  m='971450'>point</span> <span m='971740'>is,</span> <span
  m='972370'>for</span> <span m='972510'>the</span> <span m='972620'>most</span>
  <span m='972870'>part,</span> <span m='973930'>every</span> <span
  m='974270'>one</span> <span m='974490'>of</span> <span m='974590'>these</span>
  <span m='976500'>accesses</span> <span m='977050'>we do</span> <span
  m='977345'>as we</span> <span m='977640'>go</span> <span
  m='977840'>farther</span> <span m='978200'>and farther</span> <span
  m='978480'>to</span> <span m='978600'>the</span> <span
  m='978700'>right--</span> <span m='980610'>almost</span> <span
  m='981090'>all</span> <span m='981260'>of</span> <span m='981300'>them</span>
  <span m='981420'>will</span> <span m='981520'>be</span> <span
  m='981690'>in</span> <span m='981780'>a</span> <span
  m='981850'>different</span> <span m='982270'>block.</span> <span
  m='982860'>The</span> <span m='982940'>middle</span> <span
  m='983190'>one</span> <span m='983410'>is</span> <span m='983900'>very</span>
  <span m='984170'>far</span> <span m='984390'>away</span> <span
  m='984610'>from</span> <span m='984790'>the</span> <span m='984880'>3/4</span>
  <span m='985390'>mark.</span> </p><p><span m='985670'>It is</span> <span
  m='985770'>very</span> <span m='985980'>far</span> <span
  m='986180'>away</span> <span m='986340'>from</span> <span
  m='986480'>the</span> <span m='986550'>7/8</span> <span
  m='987020'>mark,</span> <span m='987570'>and</span> <span m='987780'>so</span>
  <span m='987940'>on,</span> <span m='988800'>up</span> <span
  m='988990'>until</span> <span m='989540'>the</span> <span
  m='989610'>very</span> <span m='989900'>end.</span> <span m='990860'>Let's
  say</span> <span m='991040'>we're</span> <span m='991180'>searching</span>
  <span m='991480'>for</span> <span m='991570'>the</span> <span
  m='991670'>max.</span> <span m='991980'>So</span> <span m='992090'>this</span>
  <span m='992360'>will</span> <span m='992470'>hold</span> <span
  m='992690'>for</span> <span m='992830'>all</span> <span m='993110'>of
  them.</span> <span m='993800'>At</span> <span m='993960'>the</span> <span
  m='994110'>end,</span> <span m='995310'>once</span> <span
  m='995540'>we're</span> <span m='996250'>within</span> <span
  m='996560'>a</span> <span m='996930'>problem</span> <span m='997270'>of</span>
  <span m='997350'>size</span> <span m='997720'>order</span> <span
  m='997930'>b,</span> <span m='998860'>then</span> <span
  m='999020'>there's</span> <span m='999150'>only a</span> <span
  m='999390'>constant</span> <span m='999750'>number of</span> <span
  m='999980'>blocks</span> <span m='1000300'>that</span> <span
  m='1000380'>we're</span> <span m='1000490'>touching.</span> <span
  m='1001180'>And</span> <span m='1001430'>so</span> <span
  m='1001550'>from</span> <span m='1001720'>then</span> <span
  m='1001900'>on,</span> <span m='1002380'>everything</span> <span
  m='1002710'>will</span> <span m='1002800'>be</span> <span
  m='1002950'>free,</span> <span m='1003370'>basically.</span> </p><p><span
  m='1004440'>So</span> <span m='1004540'>if</span> <span m='1004640'>you</span>
  <span m='1004820'>think</span> <span m='1005020'>about</span> <span
  m='1005220'>it</span> <span m='1005300'>carefully,</span> <span
  m='1008880'>the</span> <span m='1009000'>obvious</span> <span
  m='1009370'>upper</span> <span m='1009630'>bound--</span> <span
  m='1010740'>this</span> <span m='1010910'>is</span> <span
  m='1011040'>our</span> <span m='1011150'>usual</span> <span
  m='1011650'>recurrence</span> <span m='1012310'>for</span> <span
  m='1014930'>binary</span> <span m='1015220'>search--</span> <span
  m='1015510'>would</span> <span m='1015620'>be</span> <span
  m='1016360'>constant.</span> <span m='1019290'>And</span> <span
  m='1019420'>what</span> <span m='1019630'>we</span> <span
  m='1019780'>hope</span> <span m='1019990'>to</span> <span
  m='1020070'>gain</span> <span m='1020340'>here</span> <span
  m='1020490'>is,</span> <span m='1020560'>basically,</span> <span
  m='1020900'>a</span> <span m='1020950'>better</span> <span
  m='1021190'>base</span> <span m='1021490'>case.</span> <span
  m='1021890'>And</span> <span m='1021990'>I</span> <span
  m='1022090'>claim</span> <span m='1022300'>that</span> <span
  m='1022480'>all</span> <span m='1022680'>you</span> <span
  m='1022820'>get</span> <span m='1023120'>in</span> <span
  m='1023200'>terms</span> <span m='1023430'>of</span> <span
  m='1023490'>base</span> <span m='1023730'>case</span> <span
  m='1023950'>here</span> <span m='1024170'>is</span> <span m='1024390'>t</span>
  <span m='1024750'>of</span> <span m='1024910'>b</span> <span
  m='1025569'>equals</span> <span m='1026119'>order</span> <span
  m='1026400'>1.</span> <span m='1028349'>And,</span> <span
  m='1028769'>if</span> <span m='1029190'>you</span> <span
  m='1029310'>think</span> <span m='1029460'>about</span> <span
  m='1029750'>it,</span> <span m='1030329'>this</span> <span
  m='1030440'>just</span> <span m='1030640'>solves</span> <span
  m='1030910'>to</span> <span m='1031599'>log</span> <span m='1032000'>n</span>
  <span m='1032859'>minus</span> <span m='1033480'>log</span> <span
  m='1033869'>b,</span> <span m='1036210'>which</span> <span
  m='1036369'>is</span> <span m='1036470'>the</span> <span
  m='1036550'>same</span> <span m='1036819'>thing</span> <span
  m='1037170'>as</span> <span m='1037480'>log</span> <span m='1038579'>n</span>
  <span m='1039609'>over</span> <span m='1039880'>b,</span> <span
  m='1041839'>which</span> <span m='1042089'>is</span> <span
  m='1042250'>a</span> <span m='1042730'>small</span> <span
  m='1043050'>improvement</span> <span m='1044170'>over</span> <span
  m='1044440'>just</span> <span m='1044680'>regular</span> <span
  m='1045020'>log</span> <span m='1045500'>n but</span> <span
  m='1045670'>not</span> <span m='1045869'>a</span> <span m='1045910'>big</span>
  <span m='1046109'>improvement.</span> </p><p><span m='1046640'>I</span> <span
  m='1046760'>claim</span> <span m='1047069'>we</span> <span
  m='1047180'>can</span> <span m='1047290'>do</span> <span
  m='1047400'>better.</span> <span m='1050070'>You've</span> <span
  m='1050230'>actually</span> <span m='1050500'>seen</span> <span
  m='1050750'>how</span> <span m='1050900'>to</span> <span m='1051000'>do</span>
  <span m='1051130'>better.</span> <span m='1054360'>But</span> <span
  m='1054710'>maybe</span> <span m='1055340'>we</span> <span
  m='1055460'>didn't</span> <span m='1055660'>tell</span> <span
  m='1055850'>you.</span> <span m='1057140'>So</span> <span
  m='1057440'>it's</span> <span m='1057580'>a</span> <span
  m='1057630'>data</span> <span m='1057830'>structure</span> <span
  m='1058220'>you've</span> <span m='1058320'>seen</span> <span
  m='1058430'>already--</span> <span m='1060710'>b</span> <span
  m='1060880'>tree,</span> <span m='1061330'>yeah.</span> <span
  m='1067810'>So</span> <span m='1069180'>because</span> <span
  m='1069400'>we</span> <span m='1069500'>weren't</span> <span
  m='1069660'>thinking</span> <span m='1070000'>about</span> <span
  m='1070830'>this</span> <span m='1071020'>memory</span> <span
  m='1071320'>hierarchy</span> <span m='1071750'>business</span> <span
  m='1072910'>when</span> <span m='1073110'>we</span> <span
  m='1073210'>said</span> <span m='1073430'>b</span> <span
  m='1073580'>tree,</span> <span m='1073860'>we</span> <span
  m='1074030'>meant</span> <span m='1074300'>like</span> <span
  m='1074870'>2-4</span> <span m='1075420'>trees</span> <span
  m='1075970'>or</span> <span m='1077100'>5-10</span> <span
  m='1077940'>trees</span> <span m='1078450'>or</span> <span
  m='1078530'>some</span> <span m='1079390'>constant</span> <span
  m='1080070'>bound</span> <span m='1080520'>on</span> <span
  m='1081010'>the</span> <span m='1081120'>degree</span> <span
  m='1081430'>of</span> <span m='1081510'>each</span> <span
  m='1081720'>node.</span> </p><p><span m='1082330'>But</span> <span
  m='1082500'>if</span> <span m='1082590'>you</span> <span
  m='1082720'>make</span> <span m='1083540'>the</span> <span
  m='1083640'>degree</span> <span m='1083920'>of</span> <span
  m='1084000'>the</span> <span m='1084090'>node</span> <span
  m='1085016'>b--</span> <span m='1086310'>or</span> <span
  m='1086490'>some</span> <span m='1087100'>theta</span> <span
  m='1087430'>b,</span> <span m='1088740'>b</span> <span
  m='1089330'>approximate--</span> <span m='1090180'>so</span> <span
  m='1090340'>you</span> <span m='1090490'>allow</span> <span
  m='1091030'>a</span> <span m='1091320'>big</span> <span
  m='1091510'>branching</span> <span m='1091910'>factor.</span> <span
  m='1092560'>It's</span> <span m='1092580'>got</span> <span
  m='1092710'>to</span> <span m='1092760'>be</span> <span
  m='1092860'>somewhere,</span> <span m='1093310'>let's</span> <span
  m='1093450'>say,</span> <span m='1093560'>between b</span> <span
  m='1093860'>over</span> <span m='1094200'>2</span> <span
  m='1094550'>and</span> <span m='1094660'>b.</span> <span
  m='1096340'>Then</span> <span m='1096950'>we</span> <span
  m='1097090'>can</span> <span m='1097190'>store</span> <span
  m='1097510'>all</span> <span m='1097720'>of</span> <span
  m='1097800'>these</span> <span m='1097960'>pointers</span> <span
  m='1098440'>and</span> <span m='1098530'>all of</span> <span
  m='1098710'>these</span> <span m='1098910'>keys</span> <span
  m='1099430'>in</span> <span m='1099890'>a</span> <span
  m='1099950'>constant</span> <span m='1100290'>number</span> <span
  m='1100530'>of</span> <span m='1100580'>blocks.</span> <span
  m='1101790'>And</span> <span m='1101990'>so</span> <span m='1103910'>if</span>
  <span m='1104020'>we're</span> <span m='1104080'>doing</span> <span
  m='1104350'>just</span> <span m='1104470'>search,</span> <span
  m='1105330'>as</span> <span m='1105530'>we</span> <span
  m='1105630'>navigate</span> <span m='1106110'>down</span> <span
  m='1106780'>the b</span> <span m='1106880'>tree</span> <span
  m='1107660'>we'll</span> <span m='1107820'>spend</span> <span
  m='1108450'>order</span> <span m='1108700'>1</span> <span
  m='1108990'>block</span> <span m='1109330'>reads</span> <span
  m='1110220'>to</span> <span m='1110590'>load</span> <span
  m='1110800'>in</span> <span m='1110900'>this</span> <span
  m='1111120'>node</span> <span m='1111470'>and</span> <span
  m='1111600'>then</span> <span m='1111760'>figure</span> <span
  m='1112040'>out</span> <span m='1112110'>which</span> <span
  m='1112270'>way</span> <span m='1112390'>to</span> <span
  m='1112470'>go.</span> </p><p><span m='1113210'>And</span> <span
  m='1113270'>then</span> <span m='1113500'>let's</span> <span
  m='1113640'>say</span> <span m='1113730'>it's</span> <span
  m='1113880'>this</span> <span m='1114030'>way.</span> <span
  m='1114960'>And</span> <span m='1115070'>then</span> <span
  m='1115190'>we'll</span> <span m='1115270'>spend</span> <span
  m='1115700'>order</span> <span m='1116010'>1</span> <span
  m='1116450'>memory</span> <span m='1116750'>transfers</span> <span
  m='1117320'>to</span> <span m='1117430'>read</span> <span
  m='1117590'>this</span> <span m='1117780'>node</span> <span
  m='1118330'>then</span> <span m='1118470'>figure</span> <span
  m='1118690'>out</span> <span m='1118770'>which</span> <span
  m='1118930'>way</span> <span m='1119050'>to</span> <span
  m='1119130'>go.</span> <span m='1119820'>So</span> <span
  m='1119940'>the</span> <span m='1120050'>cost</span> <span
  m='1120480'>is</span> <span m='1120590'>going</span> <span
  m='1120730'>to</span> <span m='1120790'>be</span> <span
  m='1120950'>proportional</span> <span m='1121550'>to</span> <span
  m='1121670'>the</span> <span m='1121740'>height</span> <span
  m='1121990'>of</span> <span m='1122080'>the</span> <span
  m='1122170'>tree,</span> <span m='1123080'>which</span> <span
  m='1124610'>is</span> <span m='1125000'>just</span> <span
  m='1125540'>log</span> <span m='1126120'>base</span> <span
  m='1126490'>b</span> <span m='1127120'>of</span> <span m='1127250'>n</span>
  <span m='1128050'>up</span> <span m='1128450'>to the</span> <span
  m='1128850'>constant</span> <span m='1129410'>factors</span> <span
  m='1130610'>because</span> <span m='1131250'>we're</span> <span
  m='1131360'>between</span> <span m='1131930'>b over</span> <span
  m='1132280'>2</span> <span m='1132610'>and</span> <span m='1132740'>b.</span>
  <span m='1133090'>But</span> <span m='1133230'>that</span> <span
  m='1133400'>will</span> <span m='1133730'>affect</span> <span
  m='1134010'>this</span> <span m='1134220'>by</span> <span m='1135210'>a</span>
  <span m='1135270'>factor of</span> <span m='1135700'>2.</span> </p><p><span
  m='1138760'>So</span> <span m='1139330'>we</span> <span m='1139490'>can</span>
  <span m='1139630'>do</span> <span m='1139760'>search</span> <span
  m='1140310'>in</span> <span m='1140430'>a</span> <span m='1140470'>b</span>
  <span m='1140660'>tree</span> <span m='1141450'>in</span> <span
  m='1141750'>the</span> <span m='1141820'>log</span> <span
  m='1142190'>base</span> <span m='1142470'>b</span> <span m='1142640'>of</span>
  <span m='1142730'>n</span> <span m='1143660'>memory</span> <span
  m='1143950'>transfers.</span> <span m='1151900'>OK,</span> <span
  m='1152140'>remember,</span> <span m='1152460'>log</span> <span
  m='1152690'>base</span> <span m='1152900'>b</span> <span m='1153040'>of</span>
  <span m='1153120'>n</span> <span m='1154300'>is</span> <span
  m='1154590'>log</span> <span m='1154950'>n</span> <span
  m='1156130'>divided</span> <span m='1156590'>by</span> <span
  m='1156720'>log</span> <span m='1157020'>b.</span> <span m='1159310'>So</span>
  <span m='1159540'>this</span> <span m='1159730'>is</span> <span
  m='1159840'>a</span> <span m='1159890'>lot</span> <span
  m='1160120'>better.</span> <span m='1160400'>Here</span> <span
  m='1160680'>we</span> <span m='1160790'>had</span> <span
  m='1161010'>log</span> <span m='1161300'>n</span> <span
  m='1161470'>minus</span> <span m='1161900'>log</span> <span
  m='1162110'>b.</span> <span m='1162650'>Now</span> <span m='1162820'>we</span>
  <span m='1162900'>have</span> <span m='1163060'>log</span> <span
  m='1163320'>n</span> <span m='1163420'>divided</span> <span
  m='1163830'>by</span> <span m='1163950'>log</span> <span m='1164170'>b.</span>
  <span m='1164910'>And</span> <span m='1165080'>this</span> <span
  m='1165330'>turns</span> <span m='1165560'>out</span> <span
  m='1165690'>to</span> <span m='1165750'>be</span> <span
  m='1165880'>optimal.</span> <span m='1167200'>In the</span> <span
  m='1167330'>comparison</span> <span m='1167770'>model,</span> <span
  m='1168090'>this</span> <span m='1168260'>is</span> <span
  m='1168380'>the</span> <span m='1168440'>best</span> <span
  m='1168740'>you</span> <span m='1168840'>can</span> <span
  m='1168950'>hope</span> <span m='1169130'>to</span> <span
  m='1169220'>do,</span> <span m='1170810'>so</span> <span
  m='1171830'>good</span> <span m='1171970'>news.</span> </p><p><span
  m='1173500'>The bad</span> <span m='1173720'>news</span> <span
  m='1174460'>is</span> <span m='1174690'>we</span> <span
  m='1175040'>kind</span> <span m='1175260'>of</span> <span
  m='1175360'>critically</span> <span m='1175790'>needed</span> <span
  m='1176060'>to</span> <span m='1176150'>know</span> <span m='1176310'>what
  b</span> <span m='1176500'>was.</span> <span m='1181540'>B trees</span> <span
  m='1182490'>really</span> <span m='1182790'>only</span> <span
  m='1182970'>make</span> <span m='1183150'>sense</span> <span
  m='1185270'>if</span> <span m='1185420'>you</span> <span
  m='1185670'>what</span> <span m='1185840'>b</span> <span
  m='1186040'>is.</span> <span m='1186230'>You</span> <span
  m='1186340'>need</span> <span m='1186520'>to</span> <span
  m='1186610'>know</span> <span m='1186800'>the</span> <span
  m='1186890'>branching</span> <span m='1187280'>factor.</span> <span
  m='1188310'>So</span> <span m='1188430'>this</span> <span
  m='1188570'>is</span> <span m='1188680'>not</span> <span m='1188870'>a</span>
  <span m='1188910'>cache</span> <span m='1189150'>oblivious</span> <span
  m='1189570'>data</span> <span m='1189780'>structure.</span> <span
  m='1190620'>But</span> <span m='1190840'>it</span> <span
  m='1190890'>has</span> <span m='1191080'>other</span> <span
  m='1191280'>nice</span> <span m='1191520'>things.</span> <span
  m='1191770'>We</span> <span m='1191890'>can</span> <span
  m='1192000'>actually</span> <span m='1192240'>do</span> <span
  m='1192380'>inserts</span> <span m='1192780'>and</span> <span
  m='1192880'>deletes,</span> <span m='1193230'>as</span> <span
  m='1193340'>well.</span> <span m='1193660'>So</span> <span m='1193770'>I
  said</span> <span m='1194160'>static,</span> <span m='1194550'>but</span>
  <span m='1194990'>if</span> <span m='1195040'>you</span> <span
  m='1195140'>want</span> <span m='1195330'>dynamic</span> <span
  m='1195860'>insert</span> <span m='1196190'>and</span> <span
  m='1196300'>deleting</span> <span m='1196640'>elements,</span> <span
  m='1197420'>you</span> <span m='1197540'>can</span> <span
  m='1197640'>also</span> <span m='1197930'>do</span> <span
  m='1198050'>those</span> <span m='1198280'>in</span> <span
  m='1198370'>log</span> <span m='1198620'>base</span> <span
  m='1198850'>b</span> <span m='1199000'>of</span> <span m='1199090'>n</span>
  <span m='1199220'>memory</span> <span m='1199480'>transfers</span> <span
  m='1199940'>using</span> <span m='1200230'>exactly</span> <span
  m='1200700'>the</span> <span m='1200830'>algorithms</span> <span
  m='1201310'>we've</span> <span m='1201410'>seen</span> <span
  m='1201670'>with</span> <span m='1201750'>splits</span> <span m='1202130'>and
  merges.</span> </p><p><span m='1203400'>So</span> <span m='1203850'>all</span>
  <span m='1204030'>that's</span> <span m='1204260'>good.</span> <span
  m='1208390'>But</span> <span m='1208530'>I</span> <span
  m='1208600'>want</span> <span m='1208750'>to</span> <span
  m='1208800'>do</span> <span m='1208920'>it</span> <span
  m='1208980'>cache</span> <span m='1209340'>obviously--</span> <span
  m='1211210'>just</span> <span m='1211450'>the</span> <span
  m='1211550'>search</span> <span m='1211890'>for</span> <span
  m='1212000'>now.</span> <span m='1217400'>And</span> <span
  m='1217760'>this</span> <span m='1217930'>is</span> <span
  m='1218060'>not</span> <span m='1218270'>obvious.</span> <span
  m='1219890'>But</span> <span m='1220740'>it's</span> <span
  m='1220900'>our</span> <span m='1221010'>good</span> <span
  m='1221200'>friend</span> <span m='1221940'>van</span> <span
  m='1222120'>Emde</span> <span m='1222290'>Boas.</span> <span
  m='1231420'>So</span> <span m='1232240'>despite</span> <span
  m='1232750'>the</span> <span m='1232830'>name,</span> <span
  m='1233240'>this</span> <span m='1233450'>is</span> <span
  m='1234350'>not</span> <span m='1234750'>a</span> <span
  m='1234810'>data</span> <span m='1235030'>structure</span> <span
  m='1235360'>that</span> <span m='1235470'>van Emde</span> <span
  m='1235740'>Boas.</span> <span m='1237720'>But</span> <span
  m='1237840'>it's</span> <span m='1237960'>inspired</span> <span
  m='1238700'>by</span> <span m='1238920'>the</span> <span
  m='1239070'>data</span> <span m='1239280'>structure</span> <span
  m='1239590'>that</span> <span m='1239710'>we</span> <span
  m='1239840'>covered.</span> </p><p><span m='1241150'>And</span> <span
  m='1241530'>it's</span> <span m='1241660'>actually</span> <span
  m='1242260'>a</span> <span m='1242620'>solution</span> <span
  m='1243090'>by</span> <span m='1243520'>Harold</span> <span
  m='1243790'>[INAUDIBLE],</span> <span m='1244350'>who</span> <span
  m='1244840'>did the</span> <span m='1244960'>m-edge</span> <span
  m='1245460'>thesis</span> <span m='1245850'>on</span> <span
  m='1246000'>this</span> <span m='1246160'>work.</span> <span
  m='1247010'>In</span> <span m='1247170'>the</span> <span
  m='1247270'>conclusion,</span> <span m='1247730'>it's</span> <span
  m='1247880'>like,</span> <span m='1248080'>oh,</span> <span
  m='1248390'>by</span> <span m='1248470'>the</span> <span
  m='1248600'>way,</span> <span m='1248940'>here's</span> <span m='1249040'>how
  you do</span> <span m='1249310'>search.</span> <span m='1249950'>It
  seems</span> <span m='1250260'>like</span> <span m='1250420'>the</span> <span
  m='1250500'>best</span> <span m='1250770'>page</span> <span
  m='1251050'>of</span> <span m='1251120'>that</span> <span
  m='1251300'>thesis.</span> <span m='1254030'>And</span> <span
  m='1254140'>then</span> <span m='1254250'>I</span> <span
  m='1254310'>think</span> <span m='1254490'>we</span> <span
  m='1254670'>called</span> <span m='1254990'>it</span> <span m='1255150'>van
  Emde</span> <span m='1255490'>Boas</span> <span m='1255830'>because</span>
  <span m='1256140'>we</span> <span m='1256330'>thought</span> <span
  m='1256550'>it</span> <span m='1256710'>was</span> <span
  m='1257060'>reminiscent.</span> </p><p><span m='1258870'>So</span> <span
  m='1259040'>here's</span> <span m='1259250'>the</span> <span
  m='1259350'>idea.</span> <span m='1261960'>Take</span> <span
  m='1262240'>all</span> <span m='1262460'>the</span> <span
  m='1262810'>items</span> <span m='1263160'>you</span> <span
  m='1263270'>want</span> <span m='1263420'>to</span> <span
  m='1263480'>store.</span> <span m='1263990'>And</span> <span
  m='1264160'>you're</span> <span m='1264520'>really</span> <span
  m='1264830'>tempted</span> <span m='1265160'>to</span> <span
  m='1265230'>store</span> <span m='1265410'>them</span> <span
  m='1265540'>in</span> <span m='1265610'>sorted</span> <span
  m='1265930'>order,</span> <span m='1266260'>but</span> <span
  m='1266290'>I'm</span> <span m='1266390'>not</span> <span
  m='1266560'>going</span> <span m='1266670'>to</span> <span
  m='1266750'>do</span> <span m='1266870'>that.</span> <span
  m='1267820'>I'm</span> <span m='1267930'>going</span> <span
  m='1268010'>to</span> <span m='1268050'>use</span> <span
  m='1268220'>some</span> <span m='1268400'>other</span> <span
  m='1268810'>divide</span> <span m='1269090'>and</span> <span
  m='1269180'>conquer</span> <span m='1269500'>order.</span> <span
  m='1270400'>First</span> <span m='1270630'>thing</span> <span
  m='1270790'>I'm</span> <span m='1270850'>going</span> <span
  m='1270960'>to</span> <span m='1271030'>do</span> <span m='1271200'>is</span>
  <span m='1271320'>take</span> <span m='1271540'>those</span> <span
  m='1271700'>elements,</span> <span m='1272650'>put</span> <span
  m='1272900'>them</span> <span m='1273610'>in</span> <span m='1273850'>a</span>
  <span m='1274190'>perfectly</span> <span m='1274750'>balanced</span> <span
  m='1275330'>binary</span> <span m='1275680'>search</span> <span
  m='1275990'>tree.</span> <span m='1276280'>So</span> <span
  m='1276450'>this</span> <span m='1276590'>is</span> <span m='1276710'>a</span>
  <span m='1277000'>BSTT--</span> <span m='1278700'>not</span> <span
  m='1278900'>a</span> <span m='1278950'>b</span> <span m='1279050'>tree,</span>
  <span m='1279810'>just a</span> <span m='1280040'>binary</span> <span
  m='1280750'>tree</span> <span m='1281780'>because</span> <span
  m='1282090'>I</span> <span m='1282150'>don't</span> <span
  m='1282290'>know</span> <span m='1282450'>what</span> <span
  m='1282520'>b</span> <span m='1282680'>is.</span> <span m='1284050'>So</span>
  <span m='1284540'>then</span> <span m='1285030'>maybe</span> <span
  m='1285310'>the</span> <span m='1285390'>median's</span> <span
  m='1285790'>up</span> <span m='1285940'>here.</span> <span m='1286380'>And
  then there's</span> <span m='1286770'>two</span> <span
  m='1286950'>children</span> <span m='1287520'>and</span> <span
  m='1287760'>so</span> <span m='1287870'>on.</span> <span
  m='1289200'>OK,</span> <span m='1289380'>the</span> <span
  m='1289450'>mean's</span> <span m='1289840'>over</span> <span
  m='1290040'>here.</span> <span m='1290340'>The</span> <span m='1290640'>max
  is</span> <span m='1291030'>over</span> <span m='1291210'>here,</span> <span
  m='1291580'>a</span> <span m='1291680'>regular</span> <span
  m='1291900'>BST.</span> </p><p><span m='1292880'>Now</span> <span
  m='1293030'>we</span> <span m='1293140'>know</span> <span
  m='1293270'>how</span> <span m='1293390'>to</span> <span
  m='1293490'>search</span> <span m='1293780'>in</span> <span
  m='1293860'>a</span> <span m='1293930'>tree.</span> <span
  m='1294360'>You</span> <span m='1294440'>just</span> <span
  m='1294630'>walk</span> <span m='1294860'>down.</span> <span
  m='1297290'>The</span> <span m='1297390'>big</span> <span
  m='1297590'>question</span> <span m='1297920'>is,</span> <span
  m='1298260'>in</span> <span m='1298430'>what</span> <span
  m='1298800'>order</span> <span m='1299240'>should</span> <span
  m='1299460'>I</span> <span m='1299510'>store</span> <span
  m='1299820'>these</span> <span m='1300050'>nodes?</span> <span m='1301200'>If
  I just store</span> <span m='1301560'>them</span> <span m='1301700'>in</span>
  <span m='1301770'>a</span> <span m='1301820'>random</span> <span
  m='1302100'>order,</span> <span m='1302380'>this</span> <span
  m='1302550'>is</span> <span m='1302590'>going</span> <span
  m='1302700'>to</span> <span m='1302770'>be</span> <span
  m='1302870'>super</span> <span m='1303170'>bad--</span> <span
  m='1303500'>log</span> <span m='1303775'>n</span> <span
  m='1304890'>memory</span> <span m='1305180'>transfers.</span> <span
  m='1305790'>But</span> <span m='1305980'>I</span> <span
  m='1306050'>claim,</span> <span m='1306600'>if</span> <span
  m='1306810'>I</span> <span m='1306880'>do</span> <span m='1307000'>a</span>
  <span m='1307050'>clever</span> <span m='1307380'>order,</span> <span
  m='1308180'>I</span> <span m='1308340'>can</span> <span
  m='1308520'>achieve</span> <span m='1308990'>log</span> <span
  m='1309240'>base</span> <span m='1309490'>b</span> <span m='1309650'>of</span>
  <span m='1309760'>n,</span> <span m='1309900'>which</span> <span
  m='1310050'>is</span> <span m='1310150'>optimal.</span> </p><p><span
  m='1312320'>So</span> <span m='1313980'>van Emde</span> <span
  m='1314340'>Boas</span> <span m='1316480'>suggests</span> <span
  m='1317820'>cutting</span> <span m='1318170'>this</span> <span
  m='1318400'>tree</span> <span m='1319220'>in</span> <span
  m='1319370'>the</span> <span m='1319440'>middle.</span> <span
  m='1321420'>Why</span> <span m='1321600'>in</span> <span
  m='1321680'>the</span> <span m='1321740'>middle?</span> <span
  m='1322080'>This</span> <span m='1322270'>was</span> <span
  m='1322510'>n</span> <span m='1322800'>nodes</span> <span
  m='1323100'>over</span> <span m='1323280'>here.</span> <span
  m='1324730'>And</span> <span m='1324980'>we're</span> <span
  m='1325090'>breaking</span> <span m='1325520'>it</span> <span
  m='1325610'>up</span> <span m='1325840'>into</span> <span m='1327475'>a</span>
  <span m='1327820'>square</span> <span m='1328310'>root</span> <span
  m='1328390'>of</span> <span m='1328440'>n nodes</span> <span
  m='1328930'>at</span> <span m='1329010'>the</span> <span
  m='1329120'>top</span> <span m='1330250'>because</span> <span
  m='1330560'>the</span> <span m='1330740'>height</span> <span
  m='1331000'>of</span> <span m='1331100'>this</span> <span
  m='1331460'>overall</span> <span m='1331950'>tree</span> <span
  m='1332780'>is</span> <span m='1333090'>log</span> <span m='1333420'>n.</span>
  <span m='1334530'>If</span> <span m='1334680'>we</span> <span
  m='1334760'>split</span> <span m='1335010'>it</span> <span
  m='1335140'>in</span> <span m='1335260'>half,</span> <span
  m='1336100'>the</span> <span m='1336200'>height</span> <span
  m='1336390'>of</span> <span m='1336490'>the</span> <span
  m='1336580'>tree</span> <span m='1336940'>is</span> <span
  m='1337120'>half</span> <span m='1337450'>log</span> <span
  m='1337710'>n.</span> <span m='1339010'>2</span> <span m='1339310'>to
  the</span> <span m='1339410'>half</span> <span m='1339670'>log</span> <span
  m='1339910'>n</span> <span m='1340530'>is</span> <span m='1340760'>root</span>
  <span m='1340900'>n.</span> <span m='1341310'>I'm</span> <span
  m='1341660'>losing</span> <span m='1341900'>some</span> <span
  m='1342060'>constant</span> <span m='1342400'>factors,</span> <span
  m='1342850'>but</span> <span m='1342990'>let's</span> <span
  m='1343120'>just</span> <span m='1343230'>call it</span> <span
  m='1343480'>root</span> <span m='1343660'>n.</span> </p><p><span
  m='1344710'>Then</span> <span m='1344960'>we've</span> <span
  m='1345110'>got,</span> <span m='1346120'>at</span> <span
  m='1346250'>the</span> <span m='1346330'>bottom,</span> <span
  m='1346850'>everything</span> <span m='1347180'>looks</span> <span
  m='1347320'>the</span> <span m='1347400'>same.</span> <span
  m='1347650'>We're</span> <span m='1347740'>going</span> <span
  m='1347880'>to</span> <span m='1347920'>have</span> <span m='1348110'>a</span>
  <span m='1348150'>whole</span> <span m='1348430'>bunch</span> <span
  m='1348660'>of</span> <span m='1348740'>trees</span> <span
  m='1349680'>of</span> <span m='1349830'>size</span> <span
  m='1350920'>square</span> <span m='1351190'>root</span> <span
  m='1351270'>of</span> <span m='1351320'>n,</span> <span
  m='1353490'>hopefully.</span> <span m='1355780'>OK,</span> <span
  m='1355830'>that's</span> <span m='1356030'>what</span> <span
  m='1356130'>happens</span> <span m='1356980'>when</span> <span
  m='1357220'>I</span> <span m='1357390'>cut</span> <span m='1358320'>in</span>
  <span m='1358420'>the</span> <span m='1358480'>middle</span> <span
  m='1358710'>level.</span> <span m='1361340'>Then</span> <span
  m='1361660'>I</span> <span m='1361770'>recurse.</span> <span
  m='1363560'>And</span> <span m='1363900'>what</span> <span
  m='1364050'>am</span> <span m='1364160'>I</span> <span
  m='1364240'>recursing?</span> <span m='1364700'>What</span> <span
  m='1364830'>am</span> <span m='1364940'>I</span> <span
  m='1365020'>doing?</span> <span m='1365550'>This</span> <span
  m='1365710'>is</span> <span m='1365820'>a</span> <span
  m='1365920'>layout.</span> </p><p><span m='1367060'>Last</span> <span
  m='1367300'>time,</span> <span m='1367520'>we</span> <span
  m='1367620'>did</span> <span m='1368320'>a</span> <span
  m='1368410'>very</span> <span m='1368660'>similar</span> <span
  m='1369060'>thing</span> <span m='1369410'>with</span> <span
  m='1370070'>matrices.</span> <span m='1371020'>We</span> <span m='1371180'>had
  an</span> <span m='1371330'>n</span> <span m='1371510'>by</span> <span
  m='1371650'>n</span> <span m='1371790'>matrix.</span> <span
  m='1372210'>We</span> <span m='1372320'>divided</span> <span m='1372780'>it
  into</span> <span m='1373040'>four</span> <span m='1373490'>n</span> <span
  m='1373630'>over</span> <span m='1373810'>2</span> <span m='1373960'>by</span>
  <span m='1374090'>n</span> <span m='1374240'>over</span> <span
  m='1374390'>2</span> <span m='1374510'>matrices.</span> <span
  m='1375350'>We</span> <span m='1375530'>recursively</span> <span
  m='1376410'>laid</span> <span m='1376770'>out</span> <span
  m='1377160'>the</span> <span m='1377800'>1/4,</span> <span
  m='1379420'>wrote</span> <span m='1379710'>those</span> <span
  m='1379910'>out</span> <span m='1380080'>in</span> <span
  m='1380230'>order</span> <span m='1380530'>so it was</span> <span
  m='1380850'>consecutive.</span> <span m='1381830'>Then</span> <span
  m='1382010'>we</span> <span m='1382120'>laid</span> <span
  m='1382370'>out</span> <span m='1382630'>the</span> <span
  m='1383090'>next</span> <span m='1383340'>quarter,</span> <span
  m='1383960'>next</span> <span m='1384190'>quarter,</span> <span
  m='1384840'>next</span> <span m='1384960'>quarter.</span> <span
  m='1385430'>The</span> <span m='1385720'>order</span> <span
  m='1386050'>of</span> <span m='1386110'>the</span> <span
  m='1386210'>quarters</span> <span m='1386640'>didn't</span> <span
  m='1386850'>matter.</span> <span m='1387240'>What</span> <span
  m='1387270'>mattered</span> <span m='1387650'>is that</span> <span
  m='1387740'>each</span> <span m='1388000'>quarter</span> <span
  m='1388350'>of</span> <span m='1388410'>the</span> <span
  m='1388490'>matrix</span> <span m='1388840'>was</span> <span
  m='1388890'>stored</span> <span m='1389130'>as</span> <span
  m='1389230'>a</span> <span m='1389290'>consecutive</span> <span
  m='1389950'>unit</span> <span m='1390640'>so when</span> <span
  m='1391210'>recursed,</span> <span m='1391900'>good</span> <span
  m='1392050'>things</span> <span m='1392270'>happened.</span> </p><p><span
  m='1393150'>Same</span> <span m='1393400'>thing</span> <span
  m='1393580'>here,</span> <span m='1394090'>except</span> <span
  m='1394340'>now</span> <span m='1394530'>I</span> <span
  m='1394610'>have</span> <span m='1395100'>roughly</span> <span
  m='1395500'>square</span> <span m='1395830'>root</span> <span
  m='1395900'>of</span> <span m='1395980'>n</span> <span m='1396210'>plus</span>
  <span m='1396480'>1.</span> <span m='1398720'>Chunks,</span> <span
  m='1399320'>little</span> <span m='1399500'>triangles--</span> <span
  m='1400550'>I'm</span> <span m='1400670'>going</span> <span
  m='1400760'>to</span> <span m='1400800'>recursively</span> <span
  m='1401470'>lay</span> <span m='1401640'>them</span> <span
  m='1401830'>out.</span> <span m='1412590'>And</span> <span
  m='1412750'>then</span> <span m='1412880'>I'm</span> <span
  m='1412960'>going</span> <span m='1413060'>to</span> <span
  m='1413140'>concatenate</span> <span m='1413920'>those</span> <span
  m='1414110'>layouts.</span> <span m='1415190'>So</span> <span
  m='1415520'>this</span> <span m='1415800'>one,</span> <span
  m='1417800'>I'm</span> <span m='1417900'>going to</span> <span
  m='1418190'>recursively</span> <span m='1418550'>figure</span> <span
  m='1418790'>out</span> <span m='1418880'>what</span> <span
  m='1419040'>order</span> <span m='1419280'>to</span> <span
  m='1419350'>store</span> <span m='1419530'>those</span> <span
  m='1419700'>nodes</span> <span m='1419970'>and</span> <span
  m='1420040'>then</span> <span m='1420150'>put</span> <span
  m='1420410'>those</span> <span m='1420600'>all</span> <span
  m='1421040'>as</span> <span m='1421300'>consecutive</span> <span
  m='1421610'>in</span> <span m='1421920'>the</span> <span
  m='1422190'>array.</span> <span m='1423180'>And</span> <span
  m='1423320'>then</span> <span m='1423440'>this</span> <span
  m='1423630'>one</span> <span m='1424380'>goes</span> <span
  m='1424680'>here.</span> <span m='1425750'>This</span> <span
  m='1425980'>one</span> <span m='1426370'>goes</span> <span
  m='1426650'>here.</span> </p><p><span m='1427380'>Actually,</span> <span
  m='1427660'>the</span> <span m='1427780'>order</span> <span
  m='1427970'>doesn't</span> <span m='1428170'>matter.</span> <span
  m='1429100'>But</span> <span m='1429480'>you</span> <span
  m='1429780'>might</span> <span m='1429960'>as</span> <span
  m='1430060'>well</span> <span m='1430440'>preserve</span> <span
  m='1430920'>the</span> <span m='1430930'>order.</span> <span
  m='1431260'>So</span> <span m='1431570'>do</span> <span m='1431670'>the</span>
  <span m='1431810'>top</span> <span m='1432060'>one,</span> <span
  m='1432560'>then</span> <span m='1432720'>the</span> <span
  m='1432790'>bottom</span> <span m='1433080'>ones</span> <span
  m='1433300'>in</span> <span m='1433390'>order.</span> <span
  m='1435260'>And</span> <span m='1435480'>so,</span> <span
  m='1435600'>recursively,</span> <span m='1436210'>each</span> <span
  m='1436430'>of</span> <span m='1436500'>these</span> <span
  m='1436700'>ones</span> <span m='1436930'>is</span> <span
  m='1437020'>going</span> <span m='1437140'>to</span> <span
  m='1437190'>get</span> <span m='1437360'>cut</span> <span
  m='1437560'>in</span> <span m='1437650'>the</span> <span
  m='1437720'>middle.</span> <span m='1438400'>Recursively</span> <span
  m='1438880'>lay</span> <span m='1439000'>out</span> <span
  m='1439140'>the</span> <span m='1439230'>top,</span> <span
  m='1439680'>then</span> <span m='1439890'>the</span> <span
  m='1439950'>next</span> <span m='1440190'>one.</span> <span
  m='1440420'>Let's</span> <span m='1440660'>do</span> <span
  m='1440810'>an</span> <span m='1440900'>example.</span> <span
  m='1451940'>Let's</span> <span m='1451990'>do</span> <span
  m='1452100'>an</span> <span m='1452180'>actual</span> <span
  m='1452520'>tree.</span> </p><p><span m='1454510'>This</span> <span
  m='1454710'>is</span> <span m='1454920'>actually</span> <span
  m='1457620'>my</span> <span m='1457740'>favorite</span> <span
  m='1458120'>diagram</span> <span m='1458390'>to</span> <span
  m='1458660'>draw</span> <span m='1459270'>or</span> <span
  m='1459350'>something.</span> <span m='1460350'>My</span> <span
  m='1460490'>most</span> <span m='1460880'>frequently</span> <span
  m='1461320'>drawn</span> <span m='1461600'>diagram,</span> <span
  m='1465390'>complete</span> <span m='1465790'>binary</span> <span
  m='1466140'>tree</span> <span m='1467580'>on</span> <span
  m='1467890'>eight</span> <span m='1468400'>children,</span> <span
  m='1469290'>eight</span> <span m='1469480'>leaves.</span> <span
  m='1470410'>So</span> <span m='1470610'>this</span> <span
  m='1470760'>is</span> <span m='1470850'>15</span> <span
  m='1471340'>nodes.</span> <span m='1473156'>It</span> <span
  m='1473610'>happens</span> <span m='1474040'>to</span> <span
  m='1474130'>have</span> <span m='1474500'>a</span> <span
  m='1474550'>height</span> <span m='1474840'>that's</span> <span
  m='1475030'>a</span> <span m='1475080'>power</span> <span
  m='1475330'>of</span> <span m='1475440'>2,</span> <span m='1475780'>so</span>
  <span m='1475920'>this</span> <span m='1476290'>algorithm</span> <span
  m='1476680'>works</span> <span m='1476910'>especially</span> <span
  m='1477300'>well.</span> <span m='1477640'>So</span> <span
  m='1477880'>I'm</span> <span m='1478000'>going</span> <span
  m='1478080'>to</span> <span m='1478120'>split it</span> <span
  m='1478380'>in</span> <span m='1478490'>half,</span> <span
  m='1479800'>then</span> <span m='1479980'>recursively</span> <span
  m='1480560'>lay</span> <span m='1480690'>out</span> <span
  m='1480830'>the</span> <span m='1480940'>top.</span> <span m='1481630'>To lay
  out</span> <span m='1481940'>the</span> <span m='1482030'>top,</span> <span
  m='1482340'>I'm</span> <span m='1482420'>going</span> <span
  m='1482530'>to</span> <span m='1482590'>split it</span> <span
  m='1482900'>in</span> <span m='1483060'>half.</span> <span m='1483720'>Then
  I'm</span> <span m='1484180'>going to</span> <span
  m='1484230'>recursively</span> <span m='1484495'>lay</span> <span
  m='1484760'>out</span> <span m='1484890'>the</span> <span
  m='1484990'>top.</span> </p><p><span m='1485260'>Well,</span> <span
  m='1485440'>single</span> <span m='1485760'>node--</span> <span
  m='1486330'>it's</span> <span m='1486440'>pretty</span> <span
  m='1486640'>clear</span> <span m='1486860'>what</span> <span
  m='1486990'>order</span> <span m='1487200'>to</span> <span
  m='1487270'>put</span> <span m='1487450'>it</span> <span m='1487530'>in</span>
  <span m='1487670'>with</span> <span m='1487820'>respect</span> <span
  m='1488130'>to</span> <span m='1488210'>itself.</span> <span
  m='1488960'>So</span> <span m='1489130'>that</span> <span
  m='1489360'>goes</span> <span m='1489570'>first,</span> <span
  m='1491030'>then</span> <span m='1491300'>this,</span> <span
  m='1492760'>then</span> <span m='1492890'>this.</span> <span
  m='1493740'>Then</span> <span m='1493770'>I</span> <span
  m='1493830'>finish</span> <span m='1494300'>the</span> <span
  m='1494390'>first</span> <span m='1494700'>recursion.</span> <span
  m='1495740'>Next,</span> <span m='1496140'>I'm</span> <span
  m='1496290'>going</span> <span m='1496530'>to</span> <span
  m='1496780'>recursively</span> <span m='1498680'>lay out</span> <span
  m='1499130'>this</span> <span m='1499400'>thing</span> <span
  m='1499800'>by</span> <span m='1499930'>cutting</span> <span
  m='1500290'>it</span> <span m='1500390'>in</span> <span
  m='1500410'>half,</span> <span m='1501200'>laying</span> <span
  m='1501480'>out</span> <span m='1501610'>the</span> <span
  m='1501690'>top,</span> <span m='1502730'>then</span> <span
  m='1502900'>the</span> <span m='1502980'>bottom</span> <span
  m='1503290'>parts.</span> <span m='1504540'>OK,</span> <span
  m='1504750'>then</span> <span m='1504940'>I'm going to</span> <span
  m='1505070'>recursively</span> <span m='1505530'>layout</span> <span
  m='1505900'>this--</span> <span m='1507150'>7,</span> <span
  m='1508150'>8,</span> <span m='1509150'>9,</span> <span m='1510150'>10,</span>
  <span m='1511150'>11,</span> <span m='1512150'>12,</span> <span
  m='1513608'>13,</span> <span m='1515066'>14,</span> <span
  m='1516038'>15.</span> </p><p><span m='1516530'>It</span> <span
  m='1516590'>gets</span> <span m='1516760'>even</span> <span
  m='1516970'>more</span> <span m='1517160'>exciting</span> <span
  m='1517690'>the</span> <span m='1517790'>next</span> <span
  m='1517890'>level</span> <span m='1518100'>up.</span> <span
  m='1518410'>But</span> <span m='1520020'>it</span> <span
  m='1520270'>would</span> <span m='1520410'>take</span> <span
  m='1520590'>a</span> <span m='1520670'>long</span> <span
  m='1521100'>time</span> <span m='1521350'>to</span> <span
  m='1521480'>draw</span> <span m='1521730'>this.</span> <span
  m='1522030'>But</span> <span m='1522200'>just</span> <span
  m='1522350'>imagine</span> <span m='1522680'>this</span> <span
  m='1523250'>repeated.</span> <span m='1523840'>So</span> <span
  m='1523920'>that</span> <span m='1524080'>would</span> <span
  m='1524170'>be</span> <span m='1524300'>just</span> <span
  m='1524530'>the</span> <span m='1524610'>top</span> <span
  m='1524950'>half</span> <span m='1525260'>of</span> <span
  m='1525340'>some</span> <span m='1525570'>tree.</span> <span
  m='1526920'>Cut</span> <span m='1527170'>here,</span> <span
  m='1528050'>and</span> <span m='1528180'>then</span> <span
  m='1528280'>you</span> <span m='1528370'>do</span> <span
  m='1528470'>the</span> <span m='1528580'>same</span> <span
  m='1528910'>thing</span> <span m='1529200'>here</span> <span
  m='1529600'>and</span> <span m='1529710'>here</span> <span
  m='1529970'>and</span> <span m='1530040'>here.</span> <span
  m='1530200'>This</span> <span m='1530350'>is</span> <span
  m='1530500'>very</span> <span m='1530810'>different</span> <span
  m='1531200'>from</span> <span m='1531560'>in-order</span> <span
  m='1531880'>traversal</span> <span m='1532320'>or</span> <span
  m='1532590'>any</span> <span m='1532770'>other</span> <span
  m='1532960'>order</span> <span m='1533180'>that</span> <span
  m='1533320'>we've</span> <span m='1533470'>seen.</span> <span
  m='1534200'>This</span> <span m='1534400'>is</span> <span
  m='1534620'>the</span> <span m='1534820'>van</span> <span
  m='1535120'>Emde</span> <span m='1535300'>Boas</span> <span
  m='1535630'>order.</span> </p><p><span m='1537160'>And</span> <span
  m='1537310'>this</span> <span m='1537600'>numbering</span> <span
  m='1538150'>is</span> <span m='1538230'>supposed</span> <span
  m='1538480'>to</span> <span m='1538540'>be</span> <span m='1538720'>the</span>
  <span m='1538970'>order</span> <span m='1539280'>that</span> <span
  m='1539430'>I</span> <span m='1539490'>store</span> <span
  m='1539710'>the</span> <span m='1539820'>nodes.</span> <span
  m='1540100'>So</span> <span m='1540240'>when</span> <span m='1540380'>I</span>
  <span m='1540420'>write</span> <span m='1540640'>this</span> <span
  m='1541350'>into</span> <span m='1541740'>memory,</span> <span
  m='1542300'>it's</span> <span m='1542440'>going</span> <span
  m='1542540'>to</span> <span m='1542610'>look</span> <span
  m='1542760'>like</span> <span m='1542940'>this--</span> <span
  m='1545000'>just</span> <span m='1545190'>the</span> <span
  m='1545270'>nodes</span> <span m='1545610'>in</span> <span
  m='1545740'>order.</span> <span m='1546960'>And</span> <span
  m='1547150'>when</span> <span m='1547300'>I'm</span> <span
  m='1547370'>drawing</span> <span m='1547630'>a</span> <span
  m='1547690'>circle--</span> <span m='1548570'>wow,</span> <span
  m='1548906'>this</span> <span m='1549242'>is going to</span> <span
  m='1549580'>get tedious.</span> <span m='1553250'>And</span> <span
  m='1553340'>then</span> <span m='1554080'>there's</span> <span
  m='1554440'>pointers</span> <span m='1554940'>here.</span> <span
  m='1555120'>Every</span> <span m='1555280'>time</span> <span
  m='1555470'>I</span> <span m='1555520'>draw</span> <span m='1555680'>a</span>
  <span m='1555740'>circle,</span> <span m='1556100'>there's</span> <span
  m='1556190'>a</span> <span m='1556240'>left</span> <span m='1556460'>pointer
  and a</span> <span m='1556830'>right</span> <span m='1557040'>pointer.</span>
  <span m='1557310'>So</span> <span m='1557450'>1's</span> <span
  m='1557730'>going</span> <span m='1557840'>to</span> <span m='1557900'>point
  to</span> <span m='1558373'>2 and</span> <span m='1558846'>3.</span> <span
  m='1560380'>2 is</span> <span m='1560910'>going</span> <span
  m='1561040'>to</span> <span m='1561100'>point</span> <span
  m='1561390'>to</span> <span m='1561500'>4</span> <span m='1562700'>and</span>
  <span m='1563590'>7.</span> <span m='1565070'>So</span> <span
  m='1565280'>just</span> <span m='1565470'>take</span> <span
  m='1565620'>the</span> <span m='1565720'>regular</span> <span
  m='1566050'>binary</span> <span m='1566320'>search</span> <span
  m='1566540'>tree,</span> <span m='1566690'>but</span> <span
  m='1566850'>store</span> <span m='1567160'>it in</span> <span
  m='1567260'>this</span> <span m='1567400'>really</span> <span
  m='1567640'>weird</span> <span m='1567920'>order.</span> <span
  m='1568940'>I</span> <span m='1569100'>claim</span> <span
  m='1569800'>this</span> <span m='1570010'>will</span> <span
  m='1570130'>work</span> <span m='1570390'>really</span> <span
  m='1570710'>well,</span> <span m='1571780'>log</span> <span
  m='1571980'>base</span> <span m='1572170'>b</span> <span m='1572310'>of</span>
  <span m='1572390'>n</span> <span m='1572550'>search.</span> </p><p><span
  m='1573750'>Let's</span> <span m='1574120'>analyze</span> <span
  m='1574570'>it.</span> <span m='1578850'>Good</span> <span
  m='1578980'>first</span> <span m='1579230'>time,</span> <span
  m='1579930'>this</span> <span m='1580140'>is a</span> <span
  m='1580400'>cache</span> <span m='1580670'>oblivious</span> <span
  m='1581600'>layout.</span> <span m='1582220'>I didn't</span> <span
  m='1582330'>use</span> <span m='1582520'>b</span> <span m='1582720'>at</span>
  <span m='1582790'>all.</span> <span m='1583330'>There's</span> <span
  m='1583480'>no</span> <span m='1583600'>b</span> <span
  m='1583830'>here.</span> <span m='1584380'>Start</span> <span
  m='1584600'>with</span> <span m='1584710'>a</span> <span
  m='1584750'>binary</span> <span m='1585150'>tree.</span> <span
  m='1586320'>And</span> <span m='1586540'>I</span> <span
  m='1586610'>just</span> <span m='1587400'>do</span> <span
  m='1587560'>this</span> <span m='1587680'>recursion.</span> <span
  m='1588140'>It</span> <span m='1588210'>gives</span> <span
  m='1588400'>me</span> <span m='1588580'>a</span> <span
  m='1588910'>linear</span> <span m='1589260'>order</span> <span
  m='1589510'>to</span> <span m='1589590'>put</span> <span
  m='1589810'>the</span> <span m='1590010'>nodes</span> <span
  m='1590320'>in.</span> <span m='1590620'>I'm</span> <span
  m='1591010'>just</span> <span m='1591120'>going</span> <span
  m='1591230'>to</span> <span m='1591280'>store</span> <span
  m='1591510'>them</span> <span m='1591670'>in</span> <span
  m='1591730'>that</span> <span m='1591910'>order.</span> <span
  m='1592330'>It's</span> <span m='1592560'>linear</span> <span
  m='1592830'>size,</span> <span m='1593250'>all that.</span> </p><p><span
  m='1598630'>Now</span> <span m='1598960'>in</span> <span
  m='1599120'>the</span> <span m='1599270'>analysis,</span> <span
  m='1600060'>again,</span> <span m='1600400'>I'm</span> <span
  m='1600560'>allowed</span> <span m='1600990'>to</span> <span
  m='1601110'>know</span> <span m='1601640'>b.</span> <span
  m='1603260'>So</span> <span m='1604220'>let's say</span> <span
  m='1604320'>b</span> <span m='1604650'>is</span> <span m='1605010'>b.</span>
  <span m='1605735'>And</span> <span m='1606750'>let's</span> <span
  m='1607180'>consider</span> <span m='1610190'>the</span> <span
  m='1610340'>level</span> <span m='1610660'>of</span> <span
  m='1610760'>recursion.</span> <span m='1618070'>Let's</span> <span
  m='1618260'>say</span> <span m='1618450'>the</span> <span
  m='1618710'>first</span> <span m='1620220'>level</span> <span
  m='1620520'>of</span> <span m='1620620'>recursion,</span> <span
  m='1622610'>where</span> <span m='1625490'>the</span> <span
  m='1625600'>triangles</span> <span m='1626190'>have</span> <span
  m='1626440'>less than or</span> <span m='1626700'>equal</span> <span
  m='1626970'>to</span> <span m='1627030'>b</span> <span
  m='1627260'>nodes.</span> <span m='1629030'>So</span> <span
  m='1629370'>I'm</span> <span m='1629550'>thinking</span> <span
  m='1629800'>of</span> <span m='1629860'>this</span> <span
  m='1630020'>picture.</span> <span m='1631330'>I</span> <span
  m='1631410'>cut</span> <span m='1632260'>in</span> <span
  m='1632330'>the</span> <span m='1632400'>middle.</span> </p><p><span
  m='1633290'>Then</span> <span m='1633510'>I</span> <span
  m='1633580'>recursively</span> <span m='1634200'>cut</span> <span
  m='1634400'>in</span> <span m='1634480'>the</span> <span
  m='1634550'>middle</span> <span m='1635040'>of</span> <span
  m='1635230'>all</span> <span m='1635380'>the</span> <span
  m='1635450'>pieces.</span> <span m='1635755'>Then I</span> <span
  m='1636060'>recursively</span> <span m='1636600'>cut</span> <span
  m='1636770'>in</span> <span m='1636850'>the</span> <span
  m='1636920'>middle.</span> <span m='1637940'>I</span> <span
  m='1638030'>started</span> <span m='1638400'>out</span> <span
  m='1638590'>with</span> <span m='1638720'>a</span> <span
  m='1638760'>height</span> <span m='1638960'>of</span> <span
  m='1639050'>log</span> <span m='1639340'>n</span> <span m='1640820'>and</span>
  <span m='1641060'>size</span> <span m='1641360'>n.</span> <span
  m='1642320'>I</span> <span m='1642440'>keep</span> <span
  m='1642690'>cutting,</span> <span m='1643090'>basically</span> <span
  m='1643380'>square</span> <span m='1643740'>rooting</span> <span
  m='1643990'>the</span> <span m='1644070'>size.</span> <span
  m='1645170'>At</span> <span m='1645310'>some</span> <span
  m='1645530'>point,</span> <span m='1646050'>when</span> <span
  m='1646220'>I</span> <span m='1646270'>cut,</span> <span m='1647090'>I</span>
  <span m='1647220'>get</span> <span m='1647500'>triangles</span> <span
  m='1648030'>that</span> <span m='1648150'>are</span> <span
  m='1648280'>size,</span> <span m='1649210'>at</span> <span
  m='1649580'>most,</span> <span m='1650070'>square</span> <span
  m='1650310'>root</span> <span m='1650400'>of</span> <span
  m='1650480'>b.</span> </p><p><span m='1650680'>So</span> <span
  m='1650850'>the</span> <span m='1651070'>tree</span> <span
  m='1651520'>now</span> <span m='1652190'>will</span> <span
  m='1652380'>look--</span> <span m='1657520'>actually,</span> <span
  m='1657870'>let</span> <span m='1657980'>me</span> <span
  m='1658080'>draw</span> <span m='1658420'>a</span> <span
  m='1658510'>bigger</span> <span m='1658770'>picture.</span> <span
  m='1675670'>Let's</span> <span m='1676190'>start down</span> <span
  m='1676570'>here.</span> <span m='1677390'>So</span> <span
  m='1677540'>I've</span> <span m='1677630'>got</span> <span
  m='1677800'>triangle</span> <span m='1678070'>less than</span> <span
  m='1678340'>or</span> <span m='1678430'>equal</span> <span
  m='1678690'>to</span> <span m='1678730'>b,</span> <span m='1680230'>triangle
  less</span> <span m='1680565'>than or</span> <span m='1680900'>equal to</span>
  <span m='1681010'>b.</span> <span m='1727650'>This</span> <span
  m='1727860'>is</span> <span m='1727980'>some</span> <span
  m='1728590'>attempt</span> <span m='1728900'>to</span> <span
  m='1728990'>draw</span> <span m='1729600'>a</span> <span
  m='1729690'>general</span> <span m='1730060'>tree.</span> </p><p><span
  m='1732230'>And</span> <span m='1732960'>first</span> <span
  m='1733230'>we</span> <span m='1733310'>cut</span> <span m='1733490'>in</span>
  <span m='1733570'>the</span> <span m='1733640'>middle</span> <span
  m='1733830'>level.</span> <span m='1734250'>Then</span> <span
  m='1734370'>we</span> <span m='1734450'>cut</span> <span m='1734590'>in</span>
  <span m='1734660'>the</span> <span m='1734730'>middle</span> <span
  m='1734920'>levels.</span> <span m='1735240'>And let's</span> <span
  m='1735440'>say,</span> <span m='1735620'>at</span> <span
  m='1735790'>that</span> <span m='1736010'>moment,</span> <span
  m='1737700'>all</span> <span m='1738030'>of</span> <span
  m='1738150'>the</span> <span m='1738660'>leftover</span> <span
  m='1739090'>trees</span> <span m='1739480'>have,</span> <span
  m='1740230'>at</span> <span m='1740310'>most,</span> <span
  m='1740520'>b</span> <span m='1740680'>nodes</span> <span
  m='1740940'>in</span> <span m='1741030'>them.</span> <span
  m='1741960'>It's</span> <span m='1742120'>going</span> <span
  m='1742210'>to</span> <span m='1742260'>happen</span> <span
  m='1742550'>at</span> <span m='1742640'>some</span> <span
  m='1742800'>point.</span> <span m='1743860'>It's</span> <span
  m='1743960'>going</span> <span m='1744060'>to</span> <span
  m='1744110'>happen</span> <span m='1744730'>after</span> <span
  m='1747540'>roughly</span> <span m='1747900'>log</span> <span
  m='1748280'>n</span> <span m='1748410'>minus</span> <span
  m='1748780'>log</span> <span m='1749160'>b</span> <span
  m='1749400'>levels</span> <span m='1749740'>of</span> <span
  m='1749880'>recursion.</span> <span m='1752110'>The</span> <span
  m='1752170'>heights</span> <span m='1752480'>here</span> <span
  m='1753140'>will</span> <span m='1753300'>be</span> <span
  m='1753590'>roughly</span> <span m='1753960'>log</span> <span
  m='1754240'>b.</span> <span m='1757830'>We</span> <span
  m='1757930'>keep</span> <span m='1758100'>cutting</span> <span
  m='1758350'>in</span> <span m='1758400'>half,</span> <span m='1758690'>still
  with</span> <span m='1758890'>height</span> <span m='1759160'>log</span> <span
  m='1759390'>b.</span> <span m='1759800'>Then</span> <span
  m='1759980'>we</span> <span m='1760070'>know</span> <span
  m='1760210'>the</span> <span m='1760290'>size</span> <span
  m='1760590'>of</span> <span m='1760640'>it's</span> <span
  m='1761060'>b.</span> </p><p><span m='1763910'>OK,</span> <span
  m='1764120'>so</span> <span m='1764510'>this</span> <span
  m='1764710'>is</span> <span m='1764810'>a</span> <span
  m='1764880'>picture</span> <span m='1765650'>that</span> <span
  m='1766020'>exists</span> <span m='1766380'>in</span> <span
  m='1766470'>some</span> <span m='1766690'>sense.</span> <span
  m='1766920'>What</span> <span m='1767110'>we</span> <span
  m='1767240'>know</span> <span m='1767910'>is</span> <span
  m='1768170'>that</span> <span m='1768290'>each</span> <span
  m='1768520'>of</span> <span m='1768600'>these</span> <span
  m='1768790'>triangles</span> <span m='1769460'>is</span> <span
  m='1769580'>stored</span> <span m='1769930'>consecutively.</span> <span
  m='1770900'>By</span> <span m='1771080'>this</span> <span
  m='1771250'>recursive</span> <span m='1771680'>layout,</span> <span
  m='1772640'>we</span> <span m='1772790'>guarantee</span> <span
  m='1774440'>that,</span> <span m='1775430'>at</span> <span
  m='1775610'>any</span> <span m='1775930'>level of</span> <span
  m='1776280'>recursion,</span> <span m='1777400'>each</span> <span
  m='1777720'>chunk</span> <span m='1778310'>is</span> <span
  m='1778480'>stored</span> <span m='1778710'>consecutively.</span> <span
  m='1780400'>So,</span> <span m='1781140'>in</span> <span
  m='1781240'>particular,</span> <span m='1781720'>this</span> <span
  m='1781980'>level--</span> <span m='1783980'>level</span> <span
  m='1784480'>b--</span> <span m='1785550'>is</span> <span
  m='1786090'>nice.</span> <span m='1787020'>So</span> <span
  m='1787200'>what</span> <span m='1787340'>that</span> <span
  m='1787520'>tells</span> <span m='1787820'>us</span> <span
  m='1788050'>is</span> <span m='1788270'>that</span> <span
  m='1789440'>each</span> <span m='1790620'>triangle</span> <span
  m='1791250'>with,</span> <span m='1791380'>at</span> <span
  m='1791470'>most,</span> <span m='1791720'>b</span> <span
  m='1791900'>elements</span> <span m='1795605'>is</span> <span
  m='1795900'>consecutive,</span> <span m='1799470'>which</span> <span
  m='1799680'>means</span> <span m='1800790'>it</span> <span
  m='1800970'>occupies</span> <span m='1803890'>at</span> <span
  m='1804060'>most</span> <span m='1804490'>two</span> <span
  m='1805290'>blocks.</span> </p><p><span m='1807280'>If we're</span> <span
  m='1807360'>lucky,</span> <span m='1807860'>it's</span> <span
  m='1807900'>one.</span> <span m='1808410'>But</span> <span
  m='1808640'>if</span> <span m='1808760'>we're</span> <span
  m='1808890'>unlucky</span> <span m='1809380'>in</span> <span
  m='1809490'>terms</span> <span m='1809800'>of--</span> <span
  m='1810910'>here's</span> <span m='1811200'>memory.</span> <span
  m='1811850'>Here's</span> <span m='1811910'>how</span> <span
  m='1812050'>it's</span> <span m='1812120'>split</span> <span
  m='1812460'>into</span> <span m='1812660'>blocks.</span> <span
  m='1813600'>Maybe</span> <span m='1815990'>it's</span> <span
  m='1816160'>consecutive,</span> <span m='1816760'>but</span> <span
  m='1816930'>it</span> <span m='1817030'>crosses</span> <span
  m='1817540'>a</span> <span m='1817600'>block</span> <span
  m='1817890'>boundary.</span> <span m='1819260'>But</span> <span
  m='1819580'>the</span> <span m='1819930'>distance</span> <span
  m='1820410'>between</span> <span m='1820750'>these</span> <span
  m='1820940'>two</span> <span m='1821150'>lines</span> <span
  m='1821540'>is</span> <span m='1821690'>b</span> <span m='1822510'>and</span>
  <span m='1822760'>b.</span> <span m='1823610'>And</span> <span
  m='1823960'>the</span> <span m='1824210'>length</span> <span
  m='1824630'>of</span> <span m='1824730'>the</span> <span
  m='1824840'>blue</span> <span m='1825030'>thing</span> <span
  m='1825330'>is</span> <span m='1825470'>b.</span> <span m='1826210'>So</span>
  <span m='1826490'>you</span> <span m='1826600'>can</span> <span
  m='1826720'>only</span> <span m='1826930'>cross</span> <span
  m='1827210'>one</span> <span m='1827390'>line.</span> <span
  m='1828200'>So</span> <span m='1828320'>you</span> <span
  m='1828530'>fit</span> <span m='1828780'>in</span> <span
  m='1829010'>two</span> <span m='1829190'>blocks.</span> <span
  m='1829720'>Each</span> <span m='1829840'>of</span> <span
  m='1829930'>these</span> <span m='1830100'>triangles</span> <span
  m='1830530'>fits</span> <span m='1830720'>in two</span> <span
  m='1830970'>blocks.</span> </p><p><span m='1832810'>Now,</span> <span
  m='1833400'>let's</span> <span m='1833690'>think</span> <span
  m='1833890'>about</span> <span m='1834380'>search</span> <span
  m='1834750'>algorithm.</span> <span m='1835480'>We're</span> <span
  m='1835600'>going</span> <span m='1835730'>to</span> <span
  m='1835800'>do</span> <span m='1836150'>regular</span> <span
  m='1837540'>binary</span> <span m='1838030'>search</span> <span
  m='1838400'>in</span> <span m='1838500'>a</span> <span
  m='1838550'>binary</span> <span m='1838920'>search</span> <span
  m='1839230'>tree.</span> <span m='1840100'>We</span> <span
  m='1840200'>start</span> <span m='1840340'>at</span> <span
  m='1840410'>the</span> <span m='1840500'>root.</span> <span
  m='1840990'>We</span> <span m='1841100'>compare</span> <span
  m='1841420'>to</span> <span m='1841500'>x.</span> <span m='1842140'>We</span>
  <span m='1842220'>go</span> <span m='1842380'>left</span> <span
  m='1842590'>to</span> <span m='1842700'>right.</span> <span
  m='1843380'>Then</span> <span m='1843690'>we</span> <span
  m='1843770'>go</span> <span m='1843890'>left</span> <span
  m='1844110'>to</span> <span m='1844170'>right,</span> <span
  m='1844410'>left</span> <span m='1844590'>to</span> <span
  m='1844700'>right.</span> <span m='1845260'>Eventually</span> <span
  m='1845690'>we</span> <span m='1845850'>find</span> <span
  m='1846270'>the</span> <span m='1846370'>predecessor</span> <span
  m='1846660'>or</span> <span m='1846950'>the</span> <span
  m='1847060'>successor</span> <span m='1848070'>or,</span> <span
  m='1848210'>ideally,</span> <span m='1848500'>the</span> <span
  m='1848630'>element</span> <span m='1848990'>we're</span> <span
  m='1849100'>actually</span> <span m='1849340'>searching</span> <span
  m='1849680'>for.</span> <span m='1850590'>And</span> <span
  m='1851710'>so</span> <span m='1851900'>what</span> <span
  m='1852050'>we're</span> <span m='1852160'>doing</span> <span
  m='1852530'>is</span> <span m='1852700'>following</span> <span
  m='1854110'>some</span> <span m='1855590'>root-to-node</span> <span
  m='1857070'>path</span> <span m='1858580'>in</span> <span
  m='1858750'>the</span> <span m='1858840'>tree.</span> <span
  m='1859210'>Maybe</span> <span m='1859400'>we</span> <span
  m='1859540'>stop</span> <span m='1859820'>early.</span> <span m='1860320'>In
  the</span> <span m='1860570'>worst</span> <span m='1860780'>case,</span> <span
  m='1860950'>we</span> <span m='1861010'>go</span> <span
  m='1861090'>down</span> <span m='1861270'>to a</span> <span
  m='1861410'>leaf.</span> <span m='1861760'>But</span> <span
  m='1861880'>it's</span> <span m='1862410'>a</span> <span
  m='1862530'>vertical</span> <span m='1863270'>path.</span> <span
  m='1863590'>You only</span> <span m='1863790'>go</span> <span
  m='1863970'>down.</span> </p><p><span m='1866500'>Over</span> <span
  m='1866720'>here,</span> <span m='1867940'>same</span> <span
  m='1868150'>thing.</span> <span m='1869150'>Let's</span> <span
  m='1869510'>say,</span> <span m='1870010'>because these</span> <span
  m='1870220'>are</span> <span m='1870420'>the</span> <span
  m='1870520'>ones</span> <span m='1870720'>I</span> <span
  m='1870790'>drew,</span> <span m='1871900'>you</span> <span
  m='1872110'>go</span> <span m='1872620'>here</span> <span
  m='1873020'>somewhere.</span> <span m='1877830'>But in</span> <span
  m='1878080'>general,</span> <span m='1878460'>you're</span> <span
  m='1878530'>following</span> <span m='1878950'>some</span> <span
  m='1879780'>root-to-node</span> <span m='1880280'>path.</span> <span
  m='1881760'>And</span> <span m='1881950'>you're</span> <span
  m='1882080'>visiting</span> <span m='1882980'>some</span> <span
  m='1883320'>sequence</span> <span m='1883740'>of</span> <span
  m='1883840'>triangles.</span> <span m='1885990'>Each</span> <span
  m='1886240'>triangle</span> <span m='1887060'>fits</span> <span
  m='1887340'>in,</span> <span m='1887610'>basically,</span> <span
  m='1888110'>one</span> <span m='1888330'>block.</span> <span
  m='1888660'>Let's</span> <span m='1888860'>assume,</span> <span
  m='1889670'>as</span> <span m='1889880'>usual,</span> <span
  m='1890640'>m</span> <span m='1890830'>over</span> <span m='1891010'>b</span>
  <span m='1891230'>is</span> <span m='1891360'>at</span> <span
  m='1891440'>least</span> <span m='1891880'>two.</span> <span m='1892910'>So
  you can</span> <span m='1893200'>store</span> <span m='1893370'>at</span>
  <span m='1893420'>least</span> <span m='1893640'>two</span> <span
  m='1893760'>blocks,</span> <span m='1894220'>which</span> <span
  m='1894250'>means,</span> <span m='1894420'>once</span> <span
  m='1894620'>you</span> <span m='1894720'>start</span> <span
  m='1894970'>touching</span> <span m='1895270'>a</span> <span
  m='1895320'>triangle,</span> <span m='1896230'>all</span> <span
  m='1896460'>further</span> <span m='1896750'>touches</span> <span
  m='1897100'>are</span> <span m='1897190'>free.</span> <span
  m='1897620'>The</span> <span m='1897710'>first</span> <span
  m='1898000'>one,</span> <span m='1898170'>you</span> <span
  m='1898290'>have</span> <span m='1898440'>to</span> <span
  m='1898530'>pay</span> <span m='1898790'>the</span> <span m='1898900'>load
  in,</span> <span m='1899310'>maybe</span> <span m='1899530'>these</span> <span
  m='1899700'>two</span> <span m='1899840'>blocks.</span> <span
  m='1900740'>Every</span> <span m='1901020'>subsequent</span> <span
  m='1901550'>touch</span> <span m='1901820'>as</span> <span
  m='1901990'>you</span> <span m='1902110'>go</span> <span
  m='1902250'>down</span> <span m='1902480'>this</span> <span
  m='1902640'>path</span> <span m='1903290'>is</span> <span
  m='1903500'>free.</span> </p><p><span m='1904300'>Then</span> <span
  m='1904530'>you</span> <span m='1904620'>go</span> <span m='1904740'>to</span>
  <span m='1904860'>a</span> <span m='1904920'>new</span> <span
  m='1905120'>triangle.</span> <span m='1905960'>That</span> <span
  m='1906130'>could</span> <span m='1906260'>be</span> <span
  m='1906420'>somewhere</span> <span m='1906730'>completely</span> <span
  m='1907120'>different.</span> <span m='1907410'>We</span> <span
  m='1907490'>don't</span> <span m='1907590'>really</span> <span
  m='1907800'>now,</span> <span m='1908850'>but</span> <span m='1909110'>it's
  some</span> <span m='1909320'>other two</span> <span
  m='1909510'>blocks.</span> <span m='1910080'>And</span> <span
  m='1910240'>as</span> <span m='1910420'>long</span> <span
  m='1910620'>as</span> <span m='1910680'>you</span> <span
  m='1910770'>stay</span> <span m='1910980'>within</span> <span
  m='1911220'>the</span> <span m='1911320'>triangle,</span> <span
  m='1911710'>it's</span> <span m='1911840'>free.</span> <span
  m='1913250'>So</span> <span m='1913700'>the</span> <span
  m='1913840'>cost</span> <span m='1914400'>is</span> <span
  m='1914510'>going</span> <span m='1914650'>to</span> <span
  m='1914710'>be,</span> <span m='1914860'>at</span> <span
  m='1914950'>most,</span> <span m='1915440'>twice</span> <span
  m='1916440'>the</span> <span m='1916540'>number</span> <span
  m='1917110'>of</span> <span m='1917370'>triangles</span> <span
  m='1917930'>that</span> <span m='1918020'>you</span> <span
  m='1918150'>visit.</span> <span m='1921360'>MTN</span> <span
  m='1924040'>is</span> <span m='1924320'>going</span> <span
  m='1924480'>to</span> <span m='1924560'>be,</span> <span m='1925000'>at</span>
  <span m='1925110'>most,</span> <span m='1925960'>twice</span> <span
  m='1927050'>the</span> <span m='1927140'>number</span> <span
  m='1927610'>of</span> <span m='1929310'>triangles</span> <span
  m='1931130'>visited</span> <span m='1933490'>by</span> <span
  m='1933930'>a</span> <span m='1934050'>root-to-node</span> <span
  m='1934630'>path,</span> <span m='1936350'>a</span> <span
  m='1936430'>downward</span> <span m='1936860'>path</span> <span
  m='1937310'>in</span> <span m='1937550'>the</span> <span
  m='1937630'>binary</span> <span m='1937900'>search</span> <span
  m='1938170'>tree.</span> </p><p><span m='1942840'>OK,</span> <span
  m='1943200'>now</span> <span m='1943340'>to</span> <span
  m='1943430'>figure</span> <span m='1943790'>that</span> <span
  m='1944040'>out</span> <span m='1944730'>we</span> <span
  m='1944920'>need</span> <span m='1945220'>not</span> <span
  m='1945420'>only</span> <span m='1945630'>an</span> <span
  m='1945700'>upper</span> <span m='1945990'>bound</span> <span
  m='1946220'>on</span> <span m='1946270'>how</span> <span
  m='1946400'>big</span> <span m='1946570'>the</span> <span
  m='1946650'>triangles</span> <span m='1947120'>are</span> <span
  m='1947320'>but</span> <span m='1947430'>also</span> <span
  m='1947690'>a</span> <span m='1947740'>lower</span> <span
  m='1948020'>bound.</span> <span m='1948810'>I</span> <span
  m='1948940'>said</span> <span m='1949190'>the</span> <span
  m='1949260'>height</span> <span m='1949460'>of</span> <span
  m='1949550'>the</span> <span m='1949640'>tree</span> <span
  m='1950010'>is</span> <span m='1950130'>about</span> <span
  m='1950400'>log</span> <span m='1950650'>b.</span> <span
  m='1951830'>It's</span> <span m='1952040'>close.</span> <span
  m='1953610'>Maybe</span> <span m='1954270'>you</span> <span
  m='1954410'>have</span> <span m='1954630'>triangles</span> <span
  m='1955050'>of</span> <span m='1955110'>size</span> <span m='1955410'>b</span>
  <span m='1955620'>plus</span> <span m='1955920'>1,</span> <span
  m='1956290'>which</span> <span m='1956430'>is</span> <span
  m='1956550'>a</span> <span m='1956610'>little</span> <span
  m='1956890'>bit</span> <span m='1957070'>too</span> <span
  m='1957230'>big.</span> <span m='1958900'>So</span> <span
  m='1959070'>let's</span> <span m='1959240'>think</span> <span
  m='1959380'>about</span> <span m='1959580'>that</span> <span
  m='1959740'>case.</span> <span m='1960580'>You have</span> <span
  m='1961020'>b</span> <span m='1961180'>plus</span> <span m='1961400'>1</span>
  <span m='1961620'>nodes.</span> <span m='1962820'>And</span> <span
  m='1963000'>then</span> <span m='1963130'>you</span> <span
  m='1963290'>end</span> <span m='1963490'>up</span> <span
  m='1964090'>cutting</span> <span m='1964550'>in</span> <span
  m='1964680'>the</span> <span m='1964760'>middle</span> <span
  m='1964990'>level.</span> </p><p><span m='1966740'>So</span> <span
  m='1966790'>before,</span> <span m='1967240'>you</span> <span
  m='1967350'>had</span> <span m='1967530'>a</span> <span
  m='1967550'>height</span> <span m='1967840'>of</span> <span
  m='1968050'>almost</span> <span m='1968450'>log</span> <span
  m='1968680'>b--</span> <span m='1968900'>slightly</span> <span
  m='1969260'>more</span> <span m='1969400'>than</span> <span m='1969540'>log
  b.</span> <span m='1970790'>Then,</span> <span m='1971080'>when</span> <span
  m='1971160'>you</span> <span m='1971250'>cut</span> <span
  m='1971420'>it</span> <span m='1971520'>in</span> <span
  m='1971620'>half,</span> <span m='1971910'>the</span> <span
  m='1972010'>new</span> <span m='1972170'>heights</span> <span
  m='1972490'>will</span> <span m='1972620'>be</span> <span
  m='1973360'>half</span> <span m='1973660'>log</span> <span
  m='1973900'>b.</span> <span m='1976360'>And</span> <span
  m='1976560'>then</span> <span m='1976670'>you'll</span> <span
  m='1976840'>have</span> <span m='1977070'>only</span> <span
  m='1977390'>square</span> <span m='1977830'>root</span> <span
  m='1977970'>of</span> <span m='1978060'>b</span> <span
  m='1978770'>items</span> <span m='1979320'>in</span> <span
  m='1979560'>the</span> <span m='1979650'>triangle.</span> <span
  m='1980360'>So</span> <span m='1980480'>that</span> <span
  m='1980600'>may</span> <span m='1980720'>seem</span> <span
  m='1980960'>problematic.</span> <span m='1982180'>These</span> <span
  m='1982370'>things</span> <span m='1982770'>are, at</span> <span
  m='1983100'>most,</span> <span m='1983400'>b.</span> <span
  m='1983790'>They're</span> <span m='1984060'>also</span> <span
  m='1984270'>at</span> <span m='1984370'>least</span> <span
  m='1984840'>square</span> <span m='1985170'>root</span> <span
  m='1985340'>b.</span> <span m='1989180'>The</span> <span
  m='1989230'>height</span> <span m='1990820'>of</span> <span
  m='1991090'>a</span> <span m='1991140'>triangle</span> <span
  m='1993730'>at</span> <span m='1993850'>this</span> <span
  m='1994020'>level</span> <span m='1995360'>is</span> <span
  m='1995550'>somewhere</span> <span m='1995940'>between</span> <span
  m='1997210'>half</span> <span m='1997580'>log</span> <span
  m='1997890'>b</span> <span m='2001260'>and</span> <span m='2001430'>log</span>
  <span m='2001670'>b.</span> </p><p><span m='2005055'>Basically,</span> <span
  m='2005340'>we're</span> <span m='2005570'>binary</span> <span
  m='2005950'>searching</span> <span m='2006390'>on</span> <span
  m='2006480'>height.</span> <span m='2006890'>We're</span> <span
  m='2007000'>stopping</span> <span m='2007580'>when</span> <span
  m='2007720'>we</span> <span m='2007950'>divide it</span> <span
  m='2008350'>by</span> <span m='2008490'>2.</span> <span m='2008840'>And
  we</span> <span m='2008940'>get</span> <span m='2009090'>something</span>
  <span m='2009380'>less</span> <span m='2009620'>than</span> <span
  m='2009780'>log</span> <span m='2010040'>B</span> <span m='2011580'>in</span>
  <span m='2011710'>height.</span> <span m='2012360'>Luckily,</span> <span
  m='2013090'>we</span> <span m='2013380'>only</span> <span
  m='2013630'>care</span> <span m='2013890'>about</span> <span
  m='2014120'>heights.</span> <span m='2014490'>We</span> <span
  m='2014600'>don't</span> <span m='2014800'>care</span> <span
  m='2015060'>that</span> <span m='2015150'>there's</span> <span
  m='2015320'>only</span> <span m='2015530'>root</span> <span
  m='2015760'>b</span> <span m='2015930'>items</span> <span
  m='2016280'>here.</span> <span m='2016660'>That</span> <span
  m='2016790'>may</span> <span m='2016900'>seem</span> <span
  m='2017160'>inefficient,</span> <span m='2018310'>but</span> <span
  m='2018450'>because</span> <span m='2018710'>everything's</span> <span
  m='2019180'>in a</span> <span m='2019450'>log</span> <span
  m='2019720'>here--</span> <span m='2020480'>because</span> <span
  m='2020680'>we</span> <span m='2020770'>only</span> <span
  m='2020960'>care</span> <span m='2021110'>about</span> <span
  m='2021360'>log</span> <span m='2021830'>b</span> <span m='2022050'>in</span>
  <span m='2022140'>the</span> <span m='2022230'>running</span> <span
  m='2022480'>time,</span> <span m='2023570'>and</span> <span
  m='2023840'>we're</span> <span m='2023960'>basically</span> <span
  m='2024400'>approximating</span> <span m='2025150'>log</span> <span
  m='2025450'>b</span> <span m='2025630'>within</span> <span
  m='2025880'>a</span> <span m='2025930'>factor</span> <span
  m='2026270'>of</span> <span m='2026350'>2--</span> <span
  m='2027280'>everything's</span> <span m='2027660'>going</span> <span
  m='2027770'>to</span> <span m='2027840'>work</span> <span
  m='2028390'>up</span> <span m='2028550'>to</span> <span
  m='2028640'>constant</span> <span m='2028950'>factors.</span> </p><p><span
  m='2030860'>In</span> <span m='2030970'>other</span> <span
  m='2031140'>words,</span> <span m='2031850'>if</span> <span
  m='2031900'>you</span> <span m='2032190'>look</span> <span
  m='2032380'>at</span> <span m='2032430'>this</span> <span
  m='2032600'>path,</span> <span m='2032880'>we</span> <span
  m='2032970'>know</span> <span m='2033070'>the</span> <span
  m='2033190'>length</span> <span m='2033470'>of</span> <span
  m='2033530'>the</span> <span m='2033620'>path is</span> <span
  m='2034020'>log</span> <span m='2034380'>n.</span> <span m='2035080'>We</span>
  <span m='2035200'>know</span> <span m='2035320'>the</span> <span
  m='2036590'>height</span> <span m='2036910'>of</span> <span
  m='2037010'>each</span> <span m='2037170'>of</span> <span
  m='2037250'>these</span> <span m='2037440'>triangles</span> <span
  m='2038400'>is</span> <span m='2038600'>at</span> <span
  m='2038700'>least</span> <span m='2039460'>half</span> <span
  m='2039840'>log</span> <span m='2040150'>b.</span> <span
  m='2040890'>That</span> <span m='2041030'>means</span> <span
  m='2041200'>the</span> <span m='2041270'>number</span> <span
  m='2041590'>of</span> <span m='2041650'>triangles</span> <span
  m='2042080'>you</span> <span m='2042180'>visit</span> <span
  m='2043490'>is</span> <span m='2049060'>log</span> <span m='2049449'>n</span>
  <span m='2049860'>divided</span> <span m='2050270'>by</span> <span
  m='2050800'>half</span> <span m='2051460'>log</span> <span
  m='2051699'>b.</span> <span m='2066320'>And the</span> <span
  m='2066520'>length</span> <span m='2066750'>of</span> <span
  m='2066820'>the</span> <span m='2066909'>path</span> <span
  m='2071228'>is</span> <span m='2071710'>log</span> <span m='2072049'>n.</span>
  <span m='2073030'>So</span> <span m='2073480'>the</span> <span
  m='2073620'>number</span> <span m='2074090'>of</span> <span
  m='2074330'>triangles</span> <span m='2074810'>on</span> <span
  m='2074909'>the</span> <span m='2074989'>path</span> <span
  m='2079803'>is,</span> <span m='2080270'>at</span> <span
  m='2080350'>most,</span> <span m='2081200'>log</span> <span
  m='2081560'>n</span> <span m='2082210'>divided</span> <span
  m='2082570'>by</span> <span m='2082750'>how</span> <span
  m='2082929'>much</span> <span m='2083210'>progress</span> <span
  m='2083590'>we</span> <span m='2083670'>make</span> <span
  m='2083870'>for</span> <span m='2084000'>each</span> <span
  m='2084190'>triangle,</span> <span m='2085070'>which</span> <span
  m='2085150'>is</span> <span m='2085250'>half</span> <span
  m='2085550'>log</span> <span m='2085770'>b--</span> <span
  m='2087670'>also</span> <span m='2087960'>known</span> <span
  m='2088210'>as</span> <span m='2088530'>2</span> <span
  m='2088790'>times</span> <span m='2090000'>log</span> <span
  m='2090239'>base</span> <span m='2090469'>b</span> <span m='2090600'>of</span>
  <span m='2090679'>n.</span> </p><p><span m='2093750'>And</span> <span
  m='2093900'>then</span> <span m='2094080'>we</span> <span
  m='2094190'>get</span> <span m='2094480'>the</span> <span m='2095739'>number
  of</span> <span m='2096010'>memory</span> <span m='2096280'>transfers</span>
  <span m='2096739'>is,</span> <span m='2096880'>at</span> <span
  m='2096949'>most,</span> <span m='2097230'>twice</span> <span
  m='2097600'>that.</span> <span m='2098490'>So</span> <span
  m='2099330'>the</span> <span m='2099410'>number of memory</span> <span
  m='2099810'>transfers</span> <span m='2101650'>is</span> <span
  m='2101770'>going</span> <span m='2101890'>to</span> <span
  m='2101950'>be,</span> <span m='2102080'>at</span> <span
  m='2102160'>most,</span> <span m='2102440'>4</span> <span
  m='2103500'>times</span> <span m='2103710'>log</span> <span
  m='2103920'>base</span> <span m='2104130'>b</span> <span m='2104260'>of</span>
  <span m='2104340'>n.</span> <span m='2107550'>And</span> <span
  m='2107630'>that's</span> <span m='2108040'>order</span> <span
  m='2108750'>log</span> <span m='2108930'>base</span> <span
  m='2109130'>b</span> <span m='2109240'>of</span> <span m='2109320'>n,</span>
  <span m='2110100'>which</span> <span m='2110340'>is</span> <span
  m='2110950'>optimal.</span> <span m='2112520'>Now</span> <span
  m='2112740'>we</span> <span m='2112910'>don't</span> <span
  m='2113130'>need</span> <span m='2113310'>to</span> <span m='2113510'>know 
  b.</span> <span m='2118354'>How's that</span> <span m='2118850'>for</span>
  <span m='2118890'>a</span> <span m='2119300'>cheat?</span> </p><p><span
  m='2120350'>So</span> <span m='2121710'>we</span> <span m='2121850'>get</span>
  <span m='2122040'>optimal</span> <span m='2122530'>running</span> <span
  m='2122770'>time,</span> <span m='2123210'>except</span> <span
  m='2123550'>for</span> <span m='2123630'>the</span> <span
  m='2123790'>constant</span> <span m='2124230'>factor.</span> <span
  m='2124580'>Admittedly,</span> <span m='2124960'>this</span> <span
  m='2125080'>is</span> <span m='2125190'>not</span> <span
  m='2125420'>perfect.</span> <span m='2125840'>B</span> <span
  m='2125980'>trees</span> <span m='2126820'>get</span> <span
  m='2127040'>basically</span> <span m='2127420'>1</span> <span
  m='2127900'>times</span> <span m='2128220'>log</span> <span
  m='2128420'>base</span> <span m='2128640'>b</span> <span m='2128770'>of</span>
  <span m='2128860'>n.</span> <span m='2129670'>This</span> <span
  m='2130060'>cache</span> <span m='2130300'>oblivious</span> <span
  m='2131150'>binary</span> <span m='2131480'>search</span> <span
  m='2132230'>gives</span> <span m='2132430'>you</span> <span
  m='2132580'>4</span> <span m='2132990'>times</span> <span
  m='2133270'>log</span> <span m='2133470'>base</span> <span
  m='2133680'>b</span> <span m='2133830'>of</span> <span m='2133910'>n.</span>
  <span m='2134770'>But</span> <span m='2134910'>this</span> <span
  m='2135060'>was</span> <span m='2135240'>a</span> <span
  m='2135330'>rough</span> <span m='2135560'>analysis.</span> <span
  m='2136120'>You</span> <span m='2136220'>can</span> <span
  m='2136350'>actually</span> <span m='2136640'>get</span> <span
  m='2136840'>that</span> <span m='2136990'>down</span> <span
  m='2137220'>to</span> <span m='2137330'>like</span> <span
  m='2138230'>1.4</span> <span m='2139520'>times</span> <span
  m='2139880'>log</span> <span m='2140090'>base</span> <span
  m='2140330'>b</span> <span m='2140480'>of</span> <span m='2140550'>n.</span>
  <span m='2140720'>And</span> <span m='2140810'>that's</span> <span
  m='2141060'>tight.</span> <span m='2141710'>So</span> <span
  m='2141840'>you</span> <span m='2141900'>can't</span> <span
  m='2142110'>do</span> <span m='2142250'>quite</span> <span
  m='2142600'>as</span> <span m='2142710'>well</span> <span
  m='2142960'>with</span> <span m='2143090'>cache</span> <span
  m='2143310'>oblivious</span> <span m='2143750'>as</span> <span
  m='2145640'>external</span> <span m='2145990'>memory</span> <span
  m='2146340'>but</span> <span m='2146780'>close.</span> </p><p><span
  m='2148850'>And</span> <span m='2149030'>that's</span> <span
  m='2149170'>sort</span> <span m='2149340'>of</span> <span
  m='2149430'>the</span> <span m='2150160'>story</span> <span
  m='2150500'>here.</span> <span m='2150830'>If</span> <span
  m='2151050'>you</span> <span m='2151150'>ignore</span> <span
  m='2151240'>constant</span> <span m='2151520'>factors,</span> <span
  m='2151850'>all</span> <span m='2152010'>is</span> <span
  m='2152130'>good.</span> <span m='2152780'>In</span> <span
  m='2152960'>practice,</span> <span m='2153900'>where</span> <span
  m='2154010'>you</span> <span m='2154120'>potentially</span> <span
  m='2154670'>win</span> <span m='2155510'>is</span> <span
  m='2155710'>that,</span> <span m='2156490'>if</span> <span
  m='2156670'>you</span> <span m='2156810'>designed</span> <span
  m='2157300'>a</span> <span m='2157360'>b</span> <span m='2157550'>tree</span>
  <span m='2157760'>for</span> <span m='2157950'>specific</span> <span
  m='2158240'>b,</span> <span m='2158530'>you're</span> <span
  m='2158870'>going</span> <span m='2158980'>to</span> <span
  m='2159060'>do</span> <span m='2159220'>really</span> <span
  m='2159550'>great</span> <span m='2159830'>for</span> <span
  m='2159920'>that</span> <span m='2160220'>level</span> <span
  m='2160540'>of</span> <span m='2160600'>the</span> <span
  m='2160670'>memory</span> <span m='2160950'>hierarchy.</span> <span
  m='2161410'>But</span> <span m='2161560'>in</span> <span
  m='2161630'>reality,</span> <span m='2162070'>there's</span> <span
  m='2162230'>many</span> <span m='2162540'>levels</span> <span m='2162910'>to
  the</span> <span m='2163010'>memory</span> <span m='2163270'>hierarchy.</span>
  <span m='2163780'>They</span> <span m='2163930'>all</span> <span
  m='2164190'>matter.</span> <span m='2165150'>Cache</span> <span
  m='2165400'>oblivious</span> <span m='2165830'>is</span> <span
  m='2165950'>going</span> <span m='2166080'>to</span> <span
  m='2166270'>win</span> <span m='2166590'>a</span> <span m='2166660'>lot</span>
  <span m='2167440'>because</span> <span m='2167710'>it's</span> <span
  m='2167870'>optimal</span> <span m='2168320'>at all</span> <span
  m='2168570'>levels</span> <span m='2168810'>simultaneously.</span> <span
  m='2170140'>It's</span> <span m='2170290'>really</span> <span
  m='2170620'>hard</span> <span m='2170820'>to</span> <span
  m='2170880'>build</span> <span m='2171070'>a</span> <span m='2171110'>b</span>
  <span m='2171410'>tree</span> <span m='2171770'>that's</span> <span
  m='2171940'>optimal</span> <span m='2172360'>for</span> <span
  m='2173000'>many</span> <span m='2173220'>values</span> <span
  m='2173530'>of</span> <span m='2173610'>b</span> <span
  m='2173830'>simultaneously.</span> </p><p><span m='2177010'>OK</span> <span
  m='2177390'>so</span> <span m='2178510'>that</span> <span
  m='2178860'>is</span> <span m='2179840'>search.</span> <span
  m='2180490'>Any</span> <span m='2180620'>questions</span> <span
  m='2181630'>before</span> <span m='2181950'>we</span> <span
  m='2182040'>go</span> <span m='2182170'>on</span> <span m='2182360'>to</span>
  <span m='2182460'>source?</span> </p><p><span m='2184320'>[STUDENTS
  COUGHING]</span> </p><p></p><p><span m='2188460'>One</span> <span
  m='2188670'>obvious</span> <span m='2188950'>question</span> <span
  m='2189290'>is,</span> <span m='2189420'>what</span> <span
  m='2189570'>about</span> <span m='2189820'>dynamic?</span> <span
  m='2191190'>Again,</span> <span m='2191430'>I said</span> <span
  m='2191860'>static.</span> <span m='2192700'>Obviously</span> <span
  m='2192960'>the</span> <span m='2193140'>elements</span> <span
  m='2193570'>aren't</span> <span m='2193700'>changing</span> <span
  m='2194090'>here.</span> <span m='2195650'>Just</span> <span
  m='2195880'>doing</span> <span m='2196080'>search</span> <span
  m='2196780'>in</span> <span m='2196930'>log</span> <span
  m='2197130'>base</span> <span m='2197340'>b</span> <span m='2197470'>of</span>
  <span m='2197560'>n,</span> <span m='2198245'>it</span> <span
  m='2198560'>turns</span> <span m='2198840'>out</span> <span
  m='2199070'>you</span> <span m='2199210'>can</span> <span
  m='2199420'>do</span> <span m='2200150'>insert,</span> <span
  m='2200830'>delete,</span> <span m='2201450'>and</span> <span
  m='2201660'>search</span> <span m='2202510'>in</span> <span
  m='2202670'>log</span> <span m='2202920'>base</span> <span
  m='2203140'>b</span> <span m='2203290'>of</span> <span m='2203390'>n</span>
  <span m='2203960'>memory</span> <span m='2204220'>transfers</span> <span
  m='2204850'>per</span> <span m='2207200'>operation.</span> <span
  m='2209120'>This</span> <span m='2210270'>was</span> <span
  m='2210340'>my</span> <span m='2210520'>first</span> <span
  m='2210790'>result</span> <span m='2211080'>in</span> <span
  m='2211240'>cache</span> <span m='2211530'>oblivious</span> <span
  m='2212220'>land.</span> <span m='2213710'>It's</span> <span
  m='2213940'>when</span> <span m='2214110'>I</span> <span
  m='2214160'>met</span> <span m='2214590'>Charles Leiserson,</span> <span
  m='2215090'>actually.</span> </p><p><span m='2232080'>But</span> <span
  m='2232250'>I'm</span> <span m='2232330'>not</span> <span
  m='2232490'>going</span> <span m='2232580'>to</span> <span
  m='2232640'>cover</span> <span m='2232970'>it.</span> <span
  m='2233210'>If</span> <span m='2233260'>you</span> <span
  m='2233460'>want</span> <span m='2233650'>to</span> <span
  m='2233710'>know</span> <span m='2233930'>how,</span> <span
  m='2234560'>you</span> <span m='2234700'>should</span> <span
  m='2234870'>take</span> <span m='2235070'>6851,</span> <span
  m='2235725'>Advanced</span> <span m='2236340'>Data</span> <span
  m='2236510'>Structures,</span> <span m='2237840'>which</span> <span
  m='2238080'>talks</span> <span m='2238310'>about</span> <span
  m='2238470'>all</span> <span m='2238570'>sorts</span> <span
  m='2238810'>of</span> <span m='2238960'>things</span> <span
  m='2239190'>like</span> <span m='2239330'>this</span> <span
  m='2239510'>but</span> <span m='2239690'>dynamic.</span> <span
  m='2243930'>It</span> <span m='2244285'>turns</span> <span
  m='2244640'>out</span> <span m='2248000'>there's</span> <span
  m='2248160'>a</span> <span m='2248230'>lot</span> <span
  m='2248440'>more</span> <span m='2248640'>to</span> <span
  m='2248710'>say</span> <span m='2248940'>about</span> <span
  m='2249210'>this</span> <span m='2249880'>universe.</span> <span
  m='2250360'>And</span> <span m='2250570'>I</span> <span
  m='2250610'>want</span> <span m='2250790'>to</span> <span
  m='2250850'>go</span> <span m='2250940'>in</span> <span m='2251060'>to</span>
  <span m='2251170'>sorting</span> <span m='2252190'>instead</span> <span
  m='2252470'>of talking</span> <span m='2252740'>about how</span> <span
  m='2253090'>to</span> <span m='2253190'>make</span> <span
  m='2253360'>that</span> <span m='2253530'>dynamic</span> <span
  m='2254540'>because,</span> <span m='2255040'>oh,</span> <span
  m='2255320'>OK,</span> <span m='2255600'>search</span> <span
  m='2255930'>log</span> <span m='2256110'>base</span> <span
  m='2256310'>b</span> <span m='2256440'>of n,</span> <span
  m='2257070'>that</span> <span m='2257220'>was</span> <span
  m='2257350'>optimal.</span> </p><p><span m='2258390'>I</span> <span
  m='2258500'>said,</span> <span m='2258740'>oh,</span> <span
  m='2258830'>you</span> <span m='2258940'>can</span> <span
  m='2259070'>also</span> <span m='2259320'>do</span> <span
  m='2259460'>insert</span> <span m='2259800'>and</span> <span
  m='2259920'>delete</span> <span m='2260250'>in</span> <span
  m='2260350'>log</span> <span m='2260550'>base</span> <span m='2260740'>b of
  n.</span> <span m='2260900'>It</span> <span m='2261370'>turns</span> <span
  m='2261580'>out</span> <span m='2261690'>that's</span> <span
  m='2261910'>not</span> <span m='2262170'>optimal.</span> <span
  m='2263440'>It's</span> <span m='2263630'>as</span> <span
  m='2263790'>good</span> <span m='2263970'>as</span> <span m='2264120'>b</span>
  <span m='2264360'>trees.</span> <span m='2264750'>But</span> <span
  m='2264900'>you</span> <span m='2265060'>can</span> <span
  m='2265270'>do</span> <span m='2265510'>better.</span> <span m='2267350'>B
  trees</span> <span m='2267720'>are</span> <span m='2267800'>not</span> <span
  m='2268200'>good</span> <span m='2268440'>at</span> <span
  m='2268600'>updates.</span> <span m='2269560'>And</span> <span
  m='2269870'>if</span> <span m='2269960'>you've</span> <span
  m='2270080'>ever</span> <span m='2270250'>worked</span> <span
  m='2270420'>with</span> <span m='2270480'>a</span> <span
  m='2270580'>database,</span> <span m='2271040'>you</span> <span
  m='2271370'>may</span> <span m='2271580'>know</span> <span
  m='2271780'>this.</span> <span m='2272180'>If you have</span> <span
  m='2272220'>a lot</span> <span m='2272440'>of</span> <span
  m='2272520'>updates,</span> <span m='2272890'>b</span> <span
  m='2273010'>trees</span> <span m='2273250'>are</span> <span
  m='2273380'>really</span> <span m='2273650'>slow.</span> <span
  m='2274800'>They're</span> <span m='2274920'>good</span> <span
  m='2275090'>for</span> <span m='2275220'>searches,</span> <span
  m='2276360'>not</span> <span m='2276550'>good</span> <span
  m='2276680'>for</span> <span m='2276790'>updates.</span> <span
  m='2277140'>You</span> <span m='2277240'>can</span> <span
  m='2277380'>do</span> <span m='2277520'>a</span> <span m='2277540'>lot</span>
  <span m='2277740'>better.</span> <span m='2278930'>And</span> <span
  m='2279110'>that</span> <span m='2279260'>will</span> <span
  m='2279360'>be</span> <span m='2279490'>exhibited</span> <span
  m='2280020'>by</span> <span m='2280400'>sorting.</span> </p><p><span
  m='2281870'>So</span> <span m='2282210'>sorting--</span> <span
  m='2282630'>I</span> <span m='2282670'>think</span> <span m='2283060'>you know
  the</span> <span m='2283130'>problem.</span> <span m='2283570'>You're</span>
  <span m='2283780'>given</span> <span m='2284080'>n</span> <span
  m='2284260'>elements</span> <span m='2284580'>in</span> <span
  m='2284900'>an</span> <span m='2285140'>array</span> <span
  m='2285900'>in</span> <span m='2286070'>some</span> <span
  m='2286320'>arbitrary</span> <span m='2286840'>order.</span> <span
  m='2287360'>You</span> <span m='2287490'>want</span> <span
  m='2287590'>to</span> <span m='2287650'>put</span> <span
  m='2287880'>them</span> <span m='2288040'>into</span> <span
  m='2288200'>sorted</span> <span m='2288550'>order.</span> <span
  m='2288940'>Or,</span> <span m='2289240'>equivalently,</span> <span
  m='2289760'>you</span> <span m='2289860'>want</span> <span
  m='2289970'>to</span> <span m='2290010'>put</span> <span
  m='2290170'>them</span> <span m='2290310'>into</span> <span
  m='2290480'>a</span> <span m='2290700'>van Emde</span> <span
  m='2290820'>Boas</span> <span m='2291060'>order.</span> <span m='2291720'>Once
  their</span> <span m='2291900'>sorted,</span> <span m='2292400'>it's</span>
  <span m='2292540'>not</span> <span m='2292710'>too</span> <span
  m='2292810'>hard</span> <span m='2293040'>to</span> <span
  m='2293120'>transfer</span> <span m='2294010'>into</span> <span
  m='2294190'>this</span> <span m='2294400'>order.</span> <span
  m='2294810'>So</span> <span m='2294990'>you</span> <span
  m='2295110'>can</span> <span m='2295220'>do</span> <span
  m='2295300'>search</span> <span m='2295560'>fast or</span> <span
  m='2296020'>whatever.</span> </p><p><span m='2297020'>Sorting</span> <span
  m='2297450'>is</span> <span m='2297570'>a</span> <span m='2297630'>very</span>
  <span m='2297830'>basic</span> <span m='2298150'>thing</span> <span
  m='2298300'>we</span> <span m='2298390'>like</span> <span
  m='2298570'>to</span> <span m='2298670'>do.</span> <span
  m='2301080'>And</span> <span m='2301580'>the</span> <span
  m='2302240'>obvious</span> <span m='2302740'>way</span> <span
  m='2302930'>to</span> <span m='2303030'>sort</span> <span
  m='2304090'>when</span> <span m='2304250'>you</span> <span
  m='2304350'>have,</span> <span m='2305300'>basically,</span> <span
  m='2305720'>a--</span> <span m='2306270'>let's</span> <span
  m='2306470'>pretend</span> <span m='2306800'>we</span> <span
  m='2306890'>have</span> <span m='2307100'>this</span> <span
  m='2307240'>b</span> <span m='2307390'>tree</span> <span
  m='2307670'>data</span> <span m='2307950'>structure,</span> <span
  m='2308660'>cache</span> <span m='2308910'>oblivious</span> <span
  m='2309370'>even.</span> <span m='2309630'>Or</span> <span
  m='2309790'>we</span> <span m='2309910'>just</span> <span
  m='2310060'>use</span> <span m='2310190'>regular</span> <span
  m='2310530'>b</span> <span m='2310670'>trees.</span> <span
  m='2310840'>Let's</span> <span m='2311100'>use</span> <span
  m='2311230'>regular</span> <span m='2311490'>b</span> <span
  m='2311620'>trees.</span> <span m='2312290'>Forget</span> <span
  m='2312510'>about</span> <span m='2312700'>cache</span> <span
  m='2312890'>oblivious.</span> <span m='2313230'>External</span> <span
  m='2313560'>memory,</span> <span m='2314500'>we</span> <span
  m='2314600'>know</span> <span m='2314710'>how</span> <span
  m='2314830'>to</span> <span m='2314930'>do</span> <span m='2315050'>b</span>
  <span m='2315220'>trees.</span> <span m='2315470'>We</span> <span
  m='2315570'>know</span> <span m='2315680'>how</span> <span
  m='2315790'>to</span> <span m='2315850'>insert</span> <span
  m='2316160'>into</span> <span m='2316350'>a</span> <span m='2316400'>b</span>
  <span m='2316500'>tree.</span> </p><p><span m='2317180'>So</span> <span
  m='2317940'>the</span> <span m='2318220'>obvious</span> <span
  m='2319120'>way</span> <span m='2319320'>to</span> <span
  m='2319440'>sort</span> <span m='2320210'>is</span> <span
  m='2320460'>to</span> <span m='2320640'>do</span> <span m='2320940'>n</span>
  <span m='2321290'>inserts</span> <span m='2324670'>into,</span> <span
  m='2326140'>if</span> <span m='2326290'>you</span> <span
  m='2326420'>want,</span> <span m='2326700'>a</span> <span
  m='2326760'>cache</span> <span m='2327030'>oblivious</span> <span
  m='2327400'>b tree</span> <span m='2328130'>or</span> <span
  m='2328610'>just</span> <span m='2328790'>a</span> <span
  m='2328830'>regular</span> <span m='2329150'>b</span> <span
  m='2329300'>tree.</span> <span m='2331050'>How</span> <span
  m='2331220'>long</span> <span m='2331320'>does</span> <span
  m='2331470'>that</span> <span m='2331640'>take?</span> <span
  m='2332990'>N</span> <span m='2333430'>times</span> <span
  m='2333890'>log</span> <span m='2334080'>base</span> <span
  m='2334280'>b</span> <span m='2334400'>of</span> <span m='2334450'>n.</span>
  <span m='2345290'>It</span> <span m='2345450'>sounds</span> <span
  m='2345670'>OK.</span> <span m='2346520'>But</span> <span
  m='2346920'>it's</span> <span m='2347070'>not</span> <span
  m='2347330'>optimal.</span> <span m='2348680'>It's</span> <span
  m='2348770'>actually</span> <span m='2349050'>really</span> <span
  m='2349600'>slow</span> <span m='2350300'>compared</span> <span
  m='2350660'>to</span> <span m='2350740'>what</span> <span m='2350900'>you
  can</span> <span m='2351315'>do.</span> <span m='2352145'>You</span> <span
  m='2352560'>can</span> <span m='2352660'>do,</span> <span
  m='2352780'>roughly,</span> <span m='2353080'>a factor</span> <span
  m='2353490'>of b</span> <span m='2353870'>faster.</span> </p><p><span
  m='2359240'>But</span> <span m='2359390'>it's</span> <span
  m='2359530'>the</span> <span m='2359570'>best</span> <span
  m='2359760'>we</span> <span m='2359860'>know</span> <span
  m='2359960'>how</span> <span m='2360080'>to</span> <span m='2360180'>do</span>
  <span m='2360290'>so</span> <span m='2360470'>far.</span> <span
  m='2360900'>So</span> <span m='2361370'>the</span> <span
  m='2361830'>goal</span> <span m='2362110'>is</span> <span
  m='2362240'>to</span> <span m='2362350'>do</span> <span
  m='2362500'>better.</span> <span m='2363310'>And,</span> <span
  m='2363530'>basically,</span> <span m='2363940'>what's</span> <span
  m='2364250'>going</span> <span m='2364540'>on</span> <span
  m='2364670'>is</span> <span m='2364760'>we</span> <span m='2364860'>can</span>
  <span m='2364960'>do</span> <span m='2365050'>inserts.</span> <span
  m='2365640'>In</span> <span m='2365790'>this</span> <span
  m='2365980'>universe,</span> <span m='2366570'>we</span> <span m='2366700'>can
  do</span> <span m='2366910'>inserts</span> <span m='2367300'>and</span> <span
  m='2367390'>deletes</span> <span m='2367710'>faster</span> <span
  m='2368370'>than</span> <span m='2368530'>we</span> <span
  m='2368620'>can</span> <span m='2368750'>do</span> <span
  m='2368870'>searches,</span> <span m='2369765'>which is a</span> <span
  m='2370030'>little</span> <span m='2370300'>weird.</span> <span
  m='2372570'>It</span> <span m='2372700'>will</span> <span
  m='2372860'>become</span> <span m='2373230'>clearer</span> <span
  m='2373620'>as</span> <span m='2373770'>we</span> <span m='2373970'>go</span>
  <span m='2374140'>through.</span> </p><p><span m='2375610'>So</span> <span
  m='2376530'>what's</span> <span m='2376750'>another</span> <span
  m='2377110'>natural</span> <span m='2377590'>way</span> <span
  m='2378470'>to</span> <span m='2378640'>sort?</span> <span
  m='2379370'>What</span> <span m='2379980'>means</span> <span
  m='2380290'>to</span> <span m='2380380'>sorting</span> <span
  m='2380680'>algorithm</span> <span m='2381030'>that</span> <span
  m='2381170'>we've</span> <span m='2381300'>covered</span> <span
  m='2382140'>are</span> <span m='2382300'>optimal</span> <span
  m='2382790'>in</span> <span m='2382890'>the</span> <span
  m='2382980'>comparison</span> <span m='2383420'>model?</span> </p><p><span
  m='2384137'>STUDENT: Merge sort.</span> </p><p><span m='2385300'>PROFESSOR:
  Merge</span> <span m='2385550'>sort,</span> <span m='2385970'>that's</span>
  <span m='2386200'>a</span> <span m='2386250'>good</span> <span
  m='2386400'>one.</span> <span m='2386860'>We</span> <span
  m='2387240'>could</span> <span m='2387380'>do</span> <span
  m='2387510'>quick</span> <span m='2387720'>sort,</span> <span
  m='2387970'>too,</span> <span m='2388440'>I</span> <span
  m='2388530'>guess.</span> <span m='2389410'>I'll</span> <span
  m='2389540'>stick</span> <span m='2389750'>to</span> <span
  m='2389840'>merge</span> <span m='2390070'>sort.</span> <span
  m='2391490'>Merge</span> <span m='2391690'>sort's</span> <span
  m='2391990'>nice</span> <span m='2392320'>because</span> <span
  m='2393140'>A,</span> <span m='2393430'>it's</span> <span
  m='2393670'>divide</span> <span m='2393940'>and</span> <span
  m='2394030'>conquer.</span> <span m='2395010'>And</span> <span
  m='2395390'>we</span> <span m='2395500'>like</span> <span
  m='2395700'>divide</span> <span m='2395940'>and</span> <span
  m='2396020'>conquer.</span> <span m='2396340'>It seems</span> <span
  m='2396580'>to</span> <span m='2396680'>work,</span> <span
  m='2396920'>if</span> <span m='2397040'>we</span> <span m='2397140'>do</span>
  <span m='2397280'>it</span> <span m='2397340'>right.</span> <span
  m='2398570'>And</span> <span m='2399020'>it's</span> <span
  m='2399120'>also</span> <span m='2399310'>cache</span> <span
  m='2399540'>oblivious.</span> <span m='2400400'>There's</span> <span
  m='2400560'>no</span> <span m='2400700'>b</span> <span m='2400970'>in
  merge</span> <span m='2401340'>sort.</span> <span m='2401510'>We</span> <span
  m='2401630'>didn't</span> <span m='2401790'>even</span> <span
  m='2401950'>know</span> <span m='2402120'>what</span> <span
  m='2402180'>b</span> <span m='2402340'>was.</span> <span m='2402650'>So</span>
  <span m='2403100'>great,</span> <span m='2403710'>merge</span> <span
  m='2403900'>sort</span> <span m='2404910'>is</span> <span m='2405160'>divide
  and</span> <span m='2405460'>conquer and</span> <span m='2405830'>cache</span>
  <span m='2406070'>oblivious.</span> </p><p><span m='2406570'>So</span> <span
  m='2406630'>how</span> <span m='2407430'>much</span> <span
  m='2407760'>does</span> <span m='2407910'>it</span> <span
  m='2408020'>cost?</span> <span m='2408650'>Well,</span> <span
  m='2409680'>let's</span> <span m='2409950'>think</span> <span
  m='2410120'>about</span> <span m='2410380'>merge</span> <span
  m='2410590'>sort.</span> <span m='2411020'>You</span> <span
  m='2411120'>take</span> <span m='2411370'>an</span> <span
  m='2411510'>array.</span> <span m='2413630'>You divide</span> <span
  m='2413730'>it</span> <span m='2413990'>in</span> <span
  m='2414080'>half.</span> <span m='2415640'>That</span> <span
  m='2415860'>takes</span> <span m='2416060'>zero</span> <span
  m='2416290'>time.</span> <span m='2416570'>That's</span> <span
  m='2416700'>just</span> <span m='2416860'>a</span> <span
  m='2416910'>conceptual</span> <span m='2417420'>thing.</span> <span
  m='2417960'>You</span> <span m='2418110'>recursively</span> <span
  m='2418670'>sort</span> <span m='2418980'>this</span> <span
  m='2419150'>part.</span> <span m='2419760'>You</span> <span
  m='2419900'>recursively</span> <span m='2420350'>sort</span> <span
  m='2420530'>this</span> <span m='2420750'>part.</span> <span
  m='2421060'>That</span> <span m='2421190'>looks</span> <span
  m='2421390'>good</span> <span m='2421600'>because</span> <span
  m='2422420'>those</span> <span m='2422600'>items</span> <span
  m='2422900'>are</span> <span m='2423010'>consecutive.</span> <span
  m='2423700'>So</span> <span m='2423860'>that</span> <span
  m='2424040'>recursion</span> <span m='2424500'>is</span> <span
  m='2424610'>going</span> <span m='2424750'>to</span> <span
  m='2424820'>be</span> <span m='2425060'>an</span> <span m='2425160'>honest
  to</span> <span m='2425540'>goodness</span> <span m='2425810'>recursion</span>
  <span m='2426300'>on</span> <span m='2426460'>an</span> <span
  m='2426580'>array.</span> <span m='2427920'>So</span> <span
  m='2428340'>we</span> <span m='2428480'>can</span> <span
  m='2428720'>write</span> <span m='2428940'>a</span> <span
  m='2428990'>recurrence.</span> </p><p><span m='2430470'>And</span> <span
  m='2430650'>then</span> <span m='2430820'>we</span> <span
  m='2430910'>have</span> <span m='2431000'>to</span> <span
  m='2431090'>merge</span> <span m='2431410'>the</span> <span
  m='2431520'>two</span> <span m='2431680'>parts.</span> <span m='2433200'>So
  in</span> <span m='2433390'>merge,</span> <span m='2435060'>we</span> <span
  m='2435160'>take</span> <span m='2435350'>the</span> <span
  m='2435430'>first</span> <span m='2435690'>element</span> <span
  m='2435880'>of</span> <span m='2435960'>each</span> <span
  m='2436250'>guy.</span> <span m='2436710'>We compare</span> <span
  m='2437060'>them,</span> <span m='2437320'>output</span> <span
  m='2437580'>one</span> <span m='2437780'>of</span> <span
  m='2437860'>them,</span> <span m='2438280'>advance</span> <span
  m='2438630'>that</span> <span m='2438830'>one,</span> <span
  m='2439470'>compare,</span> <span m='2440020'>output</span> <span
  m='2440310'>one</span> <span m='2440470'>of</span> <span
  m='2440550'>them,</span> <span m='2441650'>advance</span> <span
  m='2441810'>that</span> <span m='2442010'>guy.</span> <span
  m='2443790'>That's</span> <span m='2443980'>three</span> <span
  m='2444200'>parallel</span> <span m='2444570'>scans.</span> <span
  m='2445640'>We're</span> <span m='2445730'>scanning</span> <span
  m='2446220'>in</span> <span m='2446300'>this</span> <span
  m='2446480'>array.</span> <span m='2447120'>We're</span> <span
  m='2447240'>scanning</span> <span m='2447710'>in</span> <span
  m='2447770'>this</span> <span m='2447960'>array.</span> <span
  m='2448920'>We're</span> <span m='2449050'>always</span> <span
  m='2449340'>advancing</span> <span m='2449750'>forward,</span> <span
  m='2450770'>which</span> <span m='2450960'>means</span> <span
  m='2451180'>as</span> <span m='2451300'>long</span> <span
  m='2451580'>as</span> <span m='2451690'>we</span> <span
  m='2451820'>store</span> <span m='2453050'>the</span> <span
  m='2453270'>first</span> <span m='2453650'>block</span> <span
  m='2454505'>of</span> <span m='2454810'>this</span> <span
  m='2454960'>guy</span> <span m='2455720'>and</span> <span
  m='2456040'>the</span> <span m='2456100'>first</span> <span
  m='2456420'>block</span> <span m='2456730'>of</span> <span
  m='2456820'>this</span> <span m='2457020'>guy</span> <span m='2457220'>who
  knows</span> <span m='2457550'>how</span> <span m='2457740'>it's</span> <span
  m='2457860'>aligned--</span> </p><p><span m='2459130'>But</span> <span
  m='2459610'>we'll</span> <span m='2459770'>read</span> <span
  m='2459940'>these</span> <span m='2460090'>items</span> <span
  m='2460390'>one</span> <span m='2460570'>by</span> <span
  m='2460720'>one</span> <span m='2462470'>until</span> <span
  m='2462820'>we</span> <span m='2463010'>finish</span> <span
  m='2463280'>that</span> <span m='2463490'>block.</span> <span
  m='2463870'>Then</span> <span m='2464060'>we'll</span> <span
  m='2464170'>just</span> <span m='2464340'>read</span> <span
  m='2464470'>the</span> <span m='2464550'>next</span> <span
  m='2464760'>block,</span> <span m='2465460'>read</span> <span
  m='2465610'>those</span> <span m='2465800'>one</span> <span
  m='2465970'>by</span> <span m='2466110'>one.</span> <span
  m='2467890'>And</span> <span m='2468110'>similarly</span> <span
  m='2468570'>for</span> <span m='2468690'>the</span> <span
  m='2468830'>output</span> <span m='2469160'>array,</span> <span
  m='2469870'>we</span> <span m='2470040'>first</span> <span
  m='2471100'>start</span> <span m='2471390'>filling</span> <span
  m='2471910'>a</span> <span m='2471970'>block.</span> <span
  m='2472380'>Once</span> <span m='2472570'>it's</span> <span
  m='2472720'>filled,</span> <span m='2473610'>we</span> <span
  m='2473790'>can</span> <span m='2473900'>kick</span> <span
  m='2474070'>that</span> <span m='2474220'>one</span> <span
  m='2474380'>out</span> <span m='2474660'>and</span> <span
  m='2474800'>read</span> <span m='2474950'>the</span> <span
  m='2475020'>next</span> <span m='2475260'>one.</span> <span
  m='2475700'>As</span> <span m='2475900'>long</span> <span
  m='2476190'>as</span> <span m='2476300'>m</span> <span m='2476470'>over</span>
  <span m='2476690'>b</span> <span m='2476870'>is</span> <span
  m='2477000'>at</span> <span m='2477080'>least</span> <span
  m='2477380'>3,</span> <span m='2479360'>we</span> <span m='2479520'>can</span>
  <span m='2479680'>afford</span> <span m='2480000'>this</span> <span
  m='2480210'>three-parallel</span> <span m='2480960'>scan.</span> <span
  m='2483210'>It's</span> <span m='2483350'>not</span> <span
  m='2483510'>really</span> <span m='2483770'>parallel.</span> <span
  m='2484240'>It's more</span> <span m='2484570'>like</span> <span
  m='2484840'>inter-leaf</span> <span m='2485110'>scans.</span> <span
  m='2486580'>But we're</span> <span m='2486960'>basically</span> <span
  m='2487320'>scanning</span> <span m='2487650'>in</span> <span
  m='2487710'>here</span> <span m='2488040'>while</span> <span
  m='2488220'>we're</span> <span m='2488370'>also</span> <span
  m='2488640'>scanning in</span> <span m='2489070'>here</span> <span
  m='2489350'>and</span> <span m='2489720'>scanning</span> <span
  m='2490380'>in</span> <span m='2490510'>the</span> <span
  m='2490640'>output</span> <span m='2490910'>array.</span> </p><p><span
  m='2492170'>And</span> <span m='2492520'>we</span> <span
  m='2492620'>can</span> <span m='2492770'>merge</span> <span
  m='2494390'>two</span> <span m='2494650'>sorted</span> <span
  m='2495010'>arrays</span> <span m='2495400'>into</span> <span
  m='2495600'>a</span> <span m='2495680'>new</span> <span
  m='2495790'>sorted</span> <span m='2496130'>array</span> <span
  m='2496880'>in</span> <span m='2497960'>scan</span> <span
  m='2498370'>time,</span> <span m='2498730'>n over</span> <span
  m='2499100'>be</span> <span m='2499940'>plus 1.</span> <span
  m='2502320'>So</span> <span m='2502520'>that</span> <span
  m='2502730'>means</span> <span m='2504460'>the</span> <span
  m='2504520'>number</span> <span m='2504760'>of</span> <span
  m='2504810'>memory</span> <span m='2505080'>transfers</span> <span
  m='2508710'>is</span> <span m='2509130'>2</span> <span
  m='2509450'>times</span> <span m='2509940'>the</span> <span m='2510000'>number
  of</span> <span m='2510240'>memory</span> <span m='2510530'>transfers</span>
  <span m='2511890'>for</span> <span m='2512090'>half</span> <span
  m='2512370'>the</span> <span m='2512460'>size,</span> <span
  m='2513350'>like</span> <span m='2513520'>regular</span> <span
  m='2513850'>merge</span> <span m='2514070'>sort,</span> <span
  m='2515180'>plus</span> <span m='2517270'>n</span> <span
  m='2517440'>over</span> <span m='2517620'>b</span> <span
  m='2517760'>plus</span> <span m='2518010'>1.</span> <span
  m='2518960'>That's</span> <span m='2519180'>our</span> <span
  m='2519280'>recurrence.</span> <span m='2521060'>Now</span> <span
  m='2521260'>we</span> <span m='2521360'>just</span> <span
  m='2521500'>need</span> <span m='2521580'>to</span> <span
  m='2521650'>solve</span> <span m='2521990'>it.</span> </p><p><span
  m='2522120'>Well,</span> <span m='2522450'>before</span> <span
  m='2522850'>we</span> <span m='2522970'>solve</span> <span
  m='2523300'>it,</span> <span m='2523450'>in</span> <span
  m='2523550'>this</span> <span m='2523590'>case</span> <span
  m='2523810'>we</span> <span m='2523950'>always</span> <span
  m='2524120'>have</span> <span m='2524260'>to</span> <span
  m='2524350'>be</span> <span m='2524470'>careful</span> <span
  m='2525470'>with</span> <span m='2525630'>the</span> <span
  m='2525690'>base</span> <span m='2525950'>case.</span> <span
  m='2527390'>Base</span> <span m='2527700'>case</span> <span
  m='2527970'>is</span> <span m='2529210'>MT</span> <span m='2529600'>of</span>
  <span m='2530380'>m.</span> <span m='2532500'>This is</span> <span
  m='2532700'>the</span> <span m='2532770'>best</span> <span
  m='2533050'>base</span> <span m='2533270'>case</span> <span
  m='2533470'>we</span> <span m='2533590'>could</span> <span
  m='2533700'>use.</span> <span m='2534100'>Let's</span> <span
  m='2534260'>use</span> <span m='2534450'>it.</span> <span
  m='2536260'>When</span> <span m='2536480'>I</span> <span
  m='2536870'>reach</span> <span m='2537300'>an</span> <span
  m='2537470'>array</span> <span m='2537640'>of</span> <span
  m='2537720'>size</span> <span m='2538020'>m,</span> <span m='2539150'>I</span>
  <span m='2539310'>read</span> <span m='2539530'>the</span> <span
  m='2539610'>whole</span> <span m='2539800'>thing.</span> <span
  m='2540860'>And</span> <span m='2541160'>then</span> <span
  m='2541380'>that's</span> <span m='2541730'>all</span> <span
  m='2541880'>I</span> <span m='2541960'>can</span> <span
  m='2542120'>pay.</span> <span m='2542400'>So</span> <span m='2544430'>I</span>
  <span m='2544550'>won't</span> <span m='2544750'>incur</span> <span
  m='2545040'>any</span> <span m='2545170'>more</span> <span
  m='2545340'>cost</span> <span m='2545710'>as</span> <span
  m='2545790'>long</span> <span m='2545980'>as</span> <span m='2546100'>I</span>
  <span m='2546140'>stay</span> <span m='2546370'>within</span> <span
  m='2546660'>that</span> <span m='2547150'>region</span> <span m='2547460'>of
  size</span> <span m='2547700'>m.</span> <span m='2547940'>Maybe</span> <span
  m='2548470'>I</span> <span m='2548520'>should</span> <span
  m='2548710'>put</span> <span m='2549510'>some</span> <span
  m='2549770'>constant</span> <span m='2550300'>times</span> <span
  m='2550560'>m</span> <span m='2550770'>because</span> <span
  m='2551080'>this</span> <span m='2551220'>is</span> <span
  m='2551340'>not</span> <span m='2551640'>in</span> <span
  m='2551760'>place</span> <span m='2552050'>algorithm,</span> <span
  m='2553010'>so</span> <span m='2553400'>maybe</span> <span
  m='2554020'>1/3</span> <span m='2555040'>m</span> <span
  m='2555610'>something.</span> <span m='2556460'>As</span> <span
  m='2556520'>long</span> <span m='2556700'>as</span> <span
  m='2556850'>I'm</span> <span m='2557660'>not</span> <span
  m='2557860'>too</span> <span m='2558020'>close</span> <span
  m='2558310'>to</span> <span m='2558390'>the</span> <span
  m='2558490'>cache</span> <span m='2558750'>size,</span> <span
  m='2559630'>I</span> <span m='2559750'>will</span> <span
  m='2559870'>only</span> <span m='2560130'>pay</span> <span
  m='2560450'>m</span> <span m='2560690'>over</span> <span m='2560890'>b</span>
  <span m='2561060'>memory</span> <span m='2561350'>transfers.</span> <span
  m='2564360'>So</span> <span m='2564560'>far</span> <span m='2564750'>so</span>
  <span m='2564890'>good.</span> </p><p><span m='2575450'>Now</span> <span
  m='2575670'>we</span> <span m='2575760'>just</span> <span
  m='2575890'>solve</span> <span m='2576050'>the</span> <span
  m='2576190'>recurrence.</span> <span m='2577550'>This</span> <span
  m='2577590'>is</span> <span m='2577720'>a</span> <span m='2577790'>nice</span>
  <span m='2578080'>recurrence,</span> <span m='2579980'>very</span> <span
  m='2580190'>similar</span> <span m='2580550'>to</span> <span
  m='2580660'>the</span> <span m='2580760'>old</span> <span
  m='2580920'>merge-sort</span> <span m='2581290'>recurrence.</span> <span
  m='2581660'>We</span> <span m='2581730'>just</span> <span
  m='2581900'>have</span> <span m='2582030'>a</span> <span
  m='2582080'>different</span> <span m='2582420'>thing</span> <span
  m='2583100'>in</span> <span m='2583220'>the</span> <span
  m='2583330'>additive</span> <span m='2583670'>term.</span> <span
  m='2584270'>And</span> <span m='2584380'>we</span> <span
  m='2584450'>have</span> <span m='2584550'>a</span> <span
  m='2584600'>different</span> <span m='2584890'>base</span> <span
  m='2585130'>case.</span> <span m='2586120'>The</span> <span
  m='2586160'>way</span> <span m='2586290'>I</span> <span
  m='2586320'>like</span> <span m='2586510'>to</span> <span
  m='2586600'>solve</span> <span m='2587020'>nice</span> <span
  m='2587210'>recurrences</span> <span m='2588360'>is</span> <span
  m='2589030'>with</span> <span m='2589210'>recursion</span> <span
  m='2589620'>trees.</span> <span m='2589940'>This</span> <span
  m='2590080'>is</span> <span m='2590190'>actually a</span> <span
  m='2590470'>trick</span> <span m='2590690'>I</span> <span
  m='2590740'>learned</span> <span m='2591040'>by</span> <span
  m='2591160'>teaching</span> <span m='2591520'>this</span> <span
  m='2591690'>class.</span> <span m='2592150'>Before</span> <span
  m='2592390'>this,</span> <span m='2593180'>cache</span> <span
  m='2593570'>oblivious</span> <span m='2593760'>was</span> <span
  m='2593920'>really</span> <span m='2594350'>painful</span> <span
  m='2594740'>to</span> <span m='2594850'>me</span> <span
  m='2594960'>because</span> <span m='2595240'>I</span> <span
  m='2595330'>could</span> <span m='2595510'>never</span> <span
  m='2595740'>solve</span> <span m='2595900'>the</span> <span
  m='2596100'>currencies.</span> <span m='2597090'>Then</span> <span
  m='2597190'>I</span> <span m='2597290'>thought</span> <span
  m='2597340'>the</span> <span m='2597410'>class</span> <span
  m='2597735'>and</span> <span m='2598060'>was like,</span> <span
  m='2598150'>oh,</span> <span m='2598480'>this is</span> <span
  m='2598560'>easy.</span> <span m='2599746'>I</span> <span
  m='2600140'>hope</span> <span m='2600350'>the</span> <span
  m='2600440'>same</span> <span m='2600710'>transformation</span> <span
  m='2601220'>happens</span> <span m='2601490'>to</span> <span
  m='2601570'>you.</span> </p><p><span m='2601840'>You'll</span> <span
  m='2602340'>see</span> <span m='2602500'>how</span> <span
  m='2603280'>easy</span> <span m='2603620'>it</span> <span
  m='2603690'>is</span> <span m='2603890'>once</span> <span
  m='2604650'>we</span> <span m='2604930'>do</span> <span
  m='2605020'>this</span> <span m='2605210'>example.</span> <span
  m='2608400'>OK,</span> <span m='2608590'>this</span> <span
  m='2608750'>is</span> <span m='2608920'>merge</span> <span
  m='2609180'>sort.</span> <span m='2610470'>Remember</span> <span
  m='2610700'>recursion</span> <span m='2611110'>tree,</span> <span
  m='2611340'>in every</span> <span m='2611630'>node</span> <span
  m='2611960'>you</span> <span m='2612070'>put</span> <span
  m='2612430'>the</span> <span m='2613490'>additive</span> <span
  m='2613930'>cost</span> <span m='2615710'>so</span> <span
  m='2615920'>that,</span> <span m='2616080'>if</span> <span
  m='2616210'>you</span> <span m='2616360'>added</span> <span
  m='2616680'>up</span> <span m='2617220'>the</span> <span
  m='2617340'>cost</span> <span m='2617740'>of</span> <span
  m='2617840'>all</span> <span m='2618030'>of</span> <span
  m='2618110'>these</span> <span m='2618290'>nodes,</span> <span
  m='2618680'>you</span> <span m='2618810'>would</span> <span
  m='2618960'>get</span> <span m='2619190'>the</span> <span
  m='2619340'>total</span> <span m='2619840'>value</span> <span
  m='2620230'>of</span> <span m='2620420'>this</span> <span
  m='2620600'>expands</span> <span m='2621060'>to</span> <span
  m='2621750'>because</span> <span m='2621950'>we're</span> <span
  m='2622190'>basically</span> <span m='2622600'>making</span> <span
  m='2622970'>two</span> <span m='2623260'>children</span> <span
  m='2624160'>of</span> <span m='2624300'>size</span> <span m='2624560'>n</span>
  <span m='2624660'>over</span> <span m='2624840'>2.</span> </p><p><span
  m='2625640'>And</span> <span m='2625870'>then</span> <span
  m='2626030'>we're</span> <span m='2626140'>putting,</span> <span
  m='2626520'>at</span> <span m='2626660'>the</span> <span
  m='2626760'>root,</span> <span m='2627000'>this</span> <span
  m='2627200'>cost,</span> <span m='2628190'>which</span> <span
  m='2628370'>means,</span> <span m='2628590'>if</span> <span
  m='2628680'>you</span> <span m='2628930'>add</span> <span
  m='2629140'>up</span> <span m='2629260'>all</span> <span m='2629500'>of</span>
  <span m='2629620'>these</span> <span m='2629850'>nodes,</span> <span
  m='2631020'>you're</span> <span m='2631230'>getting</span> <span
  m='2631510'>all</span> <span m='2631760'>of</span> <span
  m='2631850'>these</span> <span m='2632050'>costs.</span> <span
  m='2632540'>And</span> <span m='2632670'>that's</span> <span
  m='2632880'>the</span> <span m='2632960'>total</span> <span
  m='2633170'>cost.</span> <span m='2634830'>So</span> <span
  m='2634920'>it's</span> <span m='2635030'>n</span> <span m='2635160'>over
  b</span> <span m='2635440'>at</span> <span m='2635480'>the</span> <span
  m='2635570'>top.</span> <span m='2636440'>Then</span> <span
  m='2636650'>it's</span> <span m='2636870'>going</span> <span
  m='2636990'>to</span> <span m='2637050'>be</span> <span m='2637220'>n</span>
  <span m='2637340'>over</span> <span m='2637510'>2</span> <span
  m='2637960'>divided</span> <span m='2638240'>by</span> <span
  m='2638350'>b</span> <span m='2638780'>and</span> <span m='2638900'>so</span>
  <span m='2639060'>on.</span> <span m='2639230'>I'm</span> <span
  m='2639360'>omitting</span> <span m='2639810'>the</span> <span
  m='2639890'>plus 1</span> <span m='2640380'>just</span> <span
  m='2640590'>for</span> <span m='2640700'>cleanliness.</span> <span
  m='2642290'>You'd</span> <span m='2642510'>actually</span> <span
  m='2642870'>have</span> <span m='2643070'>to</span> <span
  m='2643460'>count.</span> </p><p><span m='2645480'>And</span> <span
  m='2645630'>this</span> <span m='2645780'>keeps</span> <span
  m='2646040'>going</span> <span m='2646400'>until</span> <span
  m='2646690'>we</span> <span m='2646820'>hit</span> <span
  m='2647010'>the</span> <span m='2647090'>base</span> <span
  m='2647360'>case.</span> <span m='2647660'>This</span> <span
  m='2647830'>is</span> <span m='2647910'>where</span> <span
  m='2648050'>things</span> <span m='2648310'>are</span> <span
  m='2648390'>a</span> <span m='2648490'>little</span> <span
  m='2648590'>different</span> <span m='2648960'>from</span> <span
  m='2649100'>regular</span> <span m='2649390'>merge</span> <span
  m='2649590'>sort,</span> <span m='2649850'>other</span> <span
  m='2650050'>than</span> <span m='2650230'>the</span> <span
  m='2650300'>divided</span> <span m='2650640'>by</span> <span
  m='2650770'>b.</span> <span m='2653360'>We</span> <span
  m='2653530'>stop</span> <span m='2654060'>when</span> <span
  m='2654210'>we</span> <span m='2654340'>reach</span> <span
  m='2654540'>something</span> <span m='2654870'>at</span> <span
  m='2654940'>size</span> <span m='2655310'>m.</span> <span
  m='2657280'>So</span> <span m='2657420'>at the</span> <span
  m='2657560'>leaf</span> <span m='2657840'>level,</span> <span
  m='2658160'>we</span> <span m='2658250'>have</span> <span
  m='2658380'>something</span> <span m='2658690'>of size</span> <span
  m='2659020'>m,</span> <span m='2659390'>which</span> <span
  m='2659580'>means</span> <span m='2659880'>we</span> <span
  m='2659940'>basically</span> <span m='2660250'>have</span> <span
  m='2661000'>m</span> <span m='2661220'>over</span> <span m='2661440'>b</span>
  <span m='2662620'>in</span> <span m='2662790'>each</span> <span
  m='2663000'>leaf.</span> <span m='2664540'>And</span> <span
  m='2664730'>then</span> <span m='2664870'>we</span> <span
  m='2664940'>should</span> <span m='2665100'>think</span> <span
  m='2665250'>about</span> <span m='2665480'>how</span> <span
  m='2665700'>many</span> <span m='2665960'>leaves</span> <span
  m='2666280'>there</span> <span m='2666510'>are.</span> <span
  m='2673020'>This</span> <span m='2673160'>is</span> <span
  m='2673250'>just</span> <span m='2673420'>n</span> <span
  m='2673570'>over</span> <span m='2673780'>m</span> <span
  m='2673960'>leaves,</span> <span m='2674440'>I</span> <span
  m='2674810'>guess.</span> </p><p><span m='2676020'>There's lots</span> <span
  m='2676480'>of</span> <span m='2676620'>ways to</span> <span
  m='2676770'>see</span> <span m='2677050'>that.</span> <span
  m='2678650'>One</span> <span m='2678890'>way</span> <span
  m='2679000'>to</span> <span m='2679070'>think</span> <span
  m='2679250'>about</span> <span m='2679490'>it is</span> <span
  m='2679720'>we're</span> <span m='2679960'>conserving</span> <span
  m='2680640'>mass.</span> <span m='2681090'>We</span> <span
  m='2681200'>started</span> <span m='2681530'>with</span> <span
  m='2681700'>n</span> <span m='2681900'>items.</span> <span
  m='2682610'>Split</span> <span m='2682870'>it in</span> <span
  m='2683020'>half,</span> <span m='2683280'>split</span> <span m='2683490'>it
  in</span> <span m='2683630'>half.</span> <span m='2684370'>So</span> <span
  m='2684540'>the</span> <span m='2684800'>number</span> <span
  m='2685000'>of</span> <span m='2685080'>items</span> <span
  m='2685360'>is</span> <span m='2685450'>remaining</span> <span
  m='2685790'>fixed.</span> <span m='2686740'>Then at</span> <span
  m='2686970'>the</span> <span m='2687040'>bottom</span> <span
  m='2687340'>we</span> <span m='2687430'>have</span> <span m='2687640'>m</span>
  <span m='2687860'>items.</span> <span m='2689020'>And</span> <span
  m='2689130'>so</span> <span m='2689240'>the</span> <span
  m='2689360'>number</span> <span m='2689600'>of</span> <span
  m='2689680'>leaves</span> <span m='2689870'>has</span> <span
  m='2690100'>to</span> <span m='2690190'>be</span> <span
  m='2690340'>exactly</span> <span m='2690740'>n</span> <span
  m='2690850'>over</span> <span m='2691050'>m</span> <span
  m='2691280'>because</span> <span m='2692090'>the</span> <span
  m='2692210'>total</span> <span m='2692500'>should</span> <span
  m='2692670'>be</span> <span m='2692860'>n.</span> </p><p><span
  m='2694150'>You</span> <span m='2694300'>can</span> <span
  m='2694430'>also</span> <span m='2694650'>think</span> <span
  m='2694820'>of</span> <span m='2694890'>it</span> <span m='2694950'>as</span>
  <span m='2695070'>2</span> <span m='2695270'>to</span> <span
  m='2695340'>the</span> <span m='2695450'>power</span> <span
  m='2696570'>log</span> <span m='2696840'>of</span> <span
  m='2696910'>that.</span> <span m='2698310'>We</span> <span
  m='2698500'>have,</span> <span m='2698820'>usually,</span> <span
  m='2699170'>log</span> <span m='2699490'>n</span> <span
  m='2699670'>levels.</span> <span m='2700130'>But</span> <span
  m='2700270'>we're</span> <span m='2700380'>cutting</span> <span
  m='2700730'>off</span> <span m='2700890'>a</span> <span m='2700940'>log</span>
  <span m='2701310'>m</span> <span m='2701550'>at</span> <span
  m='2701640'>the</span> <span m='2701720'>bottom.</span> <span
  m='2702060'>So</span> <span m='2702200'>it's</span> <span
  m='2702730'>log</span> <span m='2703060'>n</span> <span
  m='2703340'>minus</span> <span m='2703680'>log</span> <span
  m='2703970'>m</span> <span m='2704400'>as</span> <span m='2704640'>the</span>
  <span m='2704730'>height.</span> <span m='2706240'>I'll</span> <span
  m='2706710'>actually</span> <span m='2706940'>need</span> <span
  m='2707120'>that.</span> <span m='2707750'>The</span> <span
  m='2707800'>height</span> <span m='2707960'>of</span> <span
  m='2708030'>this</span> <span m='2708210'>tree</span> <span
  m='2708910'>is</span> <span m='2709270'>log</span> <span m='2710380'>n</span>
  <span m='2711490'>minus</span> <span m='2711990'>log</span> <span
  m='2712320'>m,</span> <span m='2713510'>also</span> <span
  m='2713800'>known</span> <span m='2714040'>as</span> <span
  m='2714230'>log</span> <span m='2715580'>n/m.</span> </p><p><span
  m='2718930'>OK,</span> <span m='2719160'>so</span> <span
  m='2719500'>we've</span> <span m='2719660'>drawn</span> <span
  m='2719890'>this</span> <span m='2720040'>tree.</span> <span
  m='2721140'>Now,</span> <span m='2721390'>what</span> <span
  m='2721550'>we</span> <span m='2721670'>usually</span> <span
  m='2721940'>do</span> <span m='2722280'>is</span> <span m='2722550'>add</span>
  <span m='2722800'>up</span> <span m='2722980'>level</span> <span
  m='2723240'>by</span> <span m='2723390'>level.</span> <span
  m='2723730'>That</span> <span m='2723900'>usually</span> <span
  m='2724330'>gives</span> <span m='2724650'>a</span> <span
  m='2724700'>very</span> <span m='2724930'>clean</span> <span
  m='2725200'>answer.</span> <span m='2726290'>So</span> <span
  m='2726620'>we</span> <span m='2726800'>add</span> <span m='2727020'>up
  the</span> <span m='2727110'>top</span> <span m='2727380'>level.</span> <span
  m='2727680'>That's</span> <span m='2728320'>n</span> <span
  m='2728440'>over</span> <span m='2728610'>b.</span> <span
  m='2729620'>We</span> <span m='2729760'>add</span> <span m='2729930'>up</span>
  <span m='2730080'>the</span> <span m='2730160'>second</span> <span
  m='2730430'>level.</span> <span m='2730810'>That's</span> <span
  m='2731850'>n</span> <span m='2732000'>over</span> <span m='2732160'>b,</span>
  <span m='2732630'>by</span> <span m='2732750'>conservation</span> <span
  m='2733310'>of</span> <span m='2733360'>mass</span> <span
  m='2733660'>again</span> <span m='2734395'>and</span> <span
  m='2734830'>because</span> <span m='2735210'>this</span> <span
  m='2735350'>was</span> <span m='2735440'>a</span> <span
  m='2735520'>linear</span> <span m='2735820'>function.</span> <span
  m='2737490'>So</span> <span m='2737750'>each</span> <span
  m='2738040'>level,</span> <span m='2738380'>in</span> <span
  m='2738470'>fact,</span> <span m='2738760'>is</span> <span
  m='2738850'>going</span> <span m='2738970'>to</span> <span
  m='2739030'>be</span> <span m='2739130'>exactly</span> <span
  m='2739570'>n</span> <span m='2739670'>over</span> <span m='2739860'>b</span>
  <span m='2740010'>cost.</span> </p><p><span m='2741870'>We</span> <span
  m='2742070'>should</span> <span m='2742220'>be</span> <span
  m='2742320'>a</span> <span m='2742370'>little</span> <span
  m='2742570'>careful</span> <span m='2742870'>about</span> <span
  m='2743070'>the</span> <span m='2743160'>bottom</span> <span
  m='2743520'>because</span> <span m='2743780'>the</span> <span
  m='2743860'>base</span> <span m='2744150'>case--</span> <span m='2744440'>I
  mean,</span> <span m='2744730'>it</span> <span m='2744850'>happens</span>
  <span m='2745270'>that</span> <span m='2745310'>the</span> <span
  m='2745390'>base</span> <span m='2745620'>case</span> <span
  m='2745840'>matches</span> <span m='2746230'>this.</span> <span
  m='2746480'>But</span> <span m='2746620'>it's</span> <span
  m='2746750'>always</span> <span m='2746950'>good</span> <span
  m='2747080'>practice</span> <span m='2747480'>to</span> <span
  m='2747820'>think</span> <span m='2747990'>about</span> <span
  m='2748220'>the</span> <span m='2748300'>leaf</span> <span
  m='2748540'>level</span> <span m='2748840'>separately.</span> <span
  m='2750260'>But</span> <span m='2750450'>the</span> <span
  m='2750520'>leaf</span> <span m='2750750'>level</span> <span
  m='2751050'>is</span> <span m='2751140'>just</span> <span m='2751380'>m</span>
  <span m='2751580'>over</span> <span m='2751770'>b</span> <span
  m='2752250'>times</span> <span m='2752680'>n</span> <span
  m='2752840'>over</span> <span m='2753050'>m</span> <span m='2753900'>The
  m's</span> <span m='2754280'>cancel,</span> <span m='2755670'>so</span> <span
  m='2755900'>m</span> <span m='2756140'>over</span> <span m='2756350'>b</span>
  <span m='2757860'>times</span> <span m='2758500'>n</span> <span
  m='2758690'>over</span> <span m='2758930'>m.</span> <span
  m='2760720'>This</span> <span m='2760930'>is</span> <span m='2761180'>n</span>
  <span m='2761400'>over</span> <span m='2761530'>b.</span> <span
  m='2763100'>So</span> <span m='2763410'>every</span> <span m='2763770'>level
  is</span> <span m='2764190'>n</span> <span m='2764320'>over</span> <span
  m='2764500'>b.</span> <span m='2766632'>The</span> <span
  m='2767100'>number</span> <span m='2767390'>of</span> <span
  m='2767450'>levels</span> <span m='2768620'>is</span> <span
  m='2769090'>log</span> <span m='2769730'>of</span> <span m='2770660'>n over
  m.</span> <span m='2774660'>Cool.</span> <span m='2775830'>So</span> <span
  m='2776380'>the</span> <span m='2776810'>number of</span> <span
  m='2777050'>memory</span> <span m='2777310'>transfers</span> <span
  m='2778730'>is</span> <span m='2778870'>just</span> <span
  m='2779020'>the</span> <span m='2779100'>product</span> <span
  m='2779500'>of</span> <span m='2779550'>those</span> <span
  m='2779750'>two</span> <span m='2779890'>things.</span> <span
  m='2783770'>It's</span> <span m='2784020'>n</span> <span
  m='2784170'>over</span> <span m='2784360'>b</span> <span
  m='2785640'>times</span> <span m='2786080'>that</span> <span
  m='2786290'>log,</span> <span m='2787690'>log</span> <span m='2788900'>n over
  m.</span> </p><p><span m='2791720'>Now</span> <span m='2792010'>let's</span>
  <span m='2792230'>compare.</span> <span m='2795650'>That's</span> <span
  m='2795840'>sorting.</span> <span m='2797560'>Over</span> <span
  m='2797810'>here,</span> <span m='2798060'>we</span> <span
  m='2798200'>had</span> <span m='2798430'>a</span> <span
  m='2798470'>running</span> <span m='2798700'>time</span> <span
  m='2798990'>of</span> <span m='2799200'>n</span> <span
  m='2799790'>times</span> <span m='2800340'>log</span> <span
  m='2800630'>base</span> <span m='2800890'>b</span> <span m='2801160'>of</span>
  <span m='2801340'>n.</span> <span m='2804430'>So</span> <span
  m='2805480'>this</span> <span m='2805700'>is</span> <span m='2807000'>n</span>
  <span m='2807210'>log</span> <span m='2807490'>n</span> <span
  m='2809090'>divided</span> <span m='2809490'>by</span> <span
  m='2809620'>log</span> <span m='2809990'>b.</span> <span
  m='2811620'>Log</span> <span m='2811740'>base b</span> <span m='2812210'>is
  the</span> <span m='2812310'>same</span> <span m='2812520'>as</span> <span
  m='2812620'>dividing</span> <span m='2812980'>by</span> <span
  m='2813090'>log</span> <span m='2813330'>b.</span> <span m='2814130'>So</span>
  <span m='2814280'>n</span> <span m='2814440'>log</span> <span
  m='2814670'>n</span> <span m='2814790'>divided</span> <span
  m='2815100'>by</span> <span m='2815260'>log--</span> <span
  m='2815820'>we</span> <span m='2816010'>had</span> <span
  m='2816190'>regular</span> <span m='2816520'>sorting</span> <span
  m='2816830'>time.</span> <span m='2817130'>And</span> <span
  m='2817190'>then</span> <span m='2817270'>we</span> <span
  m='2817350'>divided</span> <span m='2817700'>by</span> <span
  m='2817820'>log</span> <span m='2818110'>b.</span> </p><p><span
  m='2818820'>Over</span> <span m='2819070'>here,</span> <span
  m='2819420'>we</span> <span m='2819570'>have</span> <span
  m='2820250'>basically</span> <span m='2820960'>regular</span> <span
  m='2821330'>sorting</span> <span m='2821630'>time.</span> <span
  m='2822860'>But</span> <span m='2822970'>now</span> <span
  m='2823180'>we're</span> <span m='2823290'>dividing</span> <span
  m='2823740'>by</span> <span m='2824230'>b.</span> <span
  m='2825610'>That's</span> <span m='2825810'>a</span> <span
  m='2825860'>huge</span> <span m='2826250'>improvement--</span> <span
  m='2827190'>a</span> <span m='2827300'>b</span> <span
  m='2827470'>divided</span> <span m='2827790'>by</span> <span
  m='2827890'>log</span> <span m='2828150'>b</span> <span
  m='2828330'>improvement.</span> <span m='2830840'>I</span> <span
  m='2830920'>mean,</span> <span m='2831120'>think</span> <span
  m='2831360'>of</span> <span m='2831510'>the</span> <span m='2831750'>b
  being</span> <span m='2832010'>like</span> <span m='2832220'>a</span> <span
  m='2832280'>million.</span> <span m='2833410'>So</span> <span
  m='2833570'>before</span> <span m='2833990'>we</span> <span
  m='2834140'>were</span> <span m='2834250'>dividing</span> <span
  m='2834680'>by</span> <span m='2835330'>20,</span> <span
  m='2836960'>which</span> <span m='2837060'>is</span> <span
  m='2837340'>OK.</span> <span m='2838570'>But</span> <span
  m='2838710'>now</span> <span m='2838890'>we're</span> <span
  m='2838960'>dividing</span> <span m='2839280'>by</span> <span
  m='2839610'>a</span> <span m='2839710'>million.</span> <span
  m='2840240'>That's</span> <span m='2840540'>better.</span> <span
  m='2842020'>So</span> <span m='2842620'>this</span> <span
  m='2842860'>way</span> <span m='2843020'>of</span> <span
  m='2843100'>sorting</span> <span m='2843510'>is</span> <span
  m='2843710'>so</span> <span m='2844370'>much</span> <span
  m='2844610'>better</span> <span m='2844980'>than</span> <span
  m='2846980'>this</span> <span m='2847150'>way</span> <span
  m='2847260'>of</span> <span m='2847340'>sorting.</span> <span
  m='2848510'>It's</span> <span m='2848680'>still</span> <span
  m='2849170'>not</span> <span m='2849400'>optimal,</span> <span
  m='2851020'>but</span> <span m='2851230'>we're</span> <span
  m='2851340'>getting</span> <span m='2851530'>better.</span> </p><p><span
  m='2865650'>We</span> <span m='2865700'>can</span> <span
  m='2865840'>actually</span> <span m='2866360'>get</span> <span
  m='2866680'>sort</span> <span m='2866830'>of</span> <span
  m='2866890'>the</span> <span m='2866970'>best</span> <span
  m='2867280'>of</span> <span m='2867350'>both</span> <span
  m='2867630'>worlds--</span> <span m='2868930'>divide</span> <span
  m='2869320'>by</span> <span m='2869440'>b</span> <span m='2869800'>and</span>
  <span m='2870150'>divide</span> <span m='2870490'>by</span> <span
  m='2870610'>log</span> <span m='2870890'>b,</span> <span m='2872120'>I</span>
  <span m='2872220'>claim.</span> <span m='2874800'>But</span> <span
  m='2874930'>we</span> <span m='2875030'>need</span> <span m='2875180'>a</span>
  <span m='2875260'>new</span> <span m='2875420'>algorithm.</span> <span
  m='2877520'>Any</span> <span m='2877730'>suggestions</span> <span
  m='2878370'>for</span> <span m='2878760'>another</span> <span
  m='2879080'>algorithm?</span> </p><p><span m='2889170'>STUDENT: Divide</span>
  <span m='2889667'>into</span> <span m='2891655'>block size</span> <span
  m='2892152'>b.</span> </p><p><span m='2893650'>PROFESSOR: I</span> <span
  m='2893730'>want</span> <span m='2893950'>to</span> <span
  m='2894160'>divide</span> <span m='2894920'>into</span> <span
  m='2895300'>block</span> <span m='2895840'>size</span> <span
  m='2896440'>b.</span> <span m='2897120'>So,</span> <span
  m='2897510'>you</span> <span m='2897650'>mean</span> <span
  m='2898030'>a</span> <span m='2898350'>merge</span> <span
  m='2898600'>sort?</span> </p><p><span m='2898955'>STUDENT: Yes.</span>
  </p><p><span m='2899940'>PROFESSOR: So</span> <span m='2900000'>merge</span>
  <span m='2900310'>sort,</span> <span m='2900830'>I</span> <span
  m='2900890'>take</span> <span m='2901110'>my</span> <span
  m='2901260'>array.</span> <span m='2901670'>I</span> <span m='2901740'>divide
  it</span> <span m='2902210'>into</span> <span m='2902470'>blocks</span> <span
  m='2902990'>the</span> <span m='2903040'>size</span> <span
  m='2903320'>b.</span> <span m='2904306'>I</span> <span
  m='2904800'>could</span> <span m='2904970'>sort</span> <span
  m='2905210'>each</span> <span m='2905370'>one</span> <span
  m='2906410'>in</span> <span m='2906560'>one</span> <span
  m='2906910'>memory</span> <span m='2907180'>transfer.</span> <span
  m='2908590'>And</span> <span m='2908800'>then</span> <span
  m='2909280'>I</span> <span m='2909350'>need</span> <span m='2909570'>to</span>
  <span m='2909670'>merge</span> <span m='2910040'>them.</span> <span
  m='2911120'>So</span> <span m='2911280'>then</span> <span
  m='2911460'>I've</span> <span m='2911620'>got</span> <span
  m='2912170'>n</span> <span m='2912520'>divided</span> <span
  m='2913000'>by</span> <span m='2913190'>b</span> <span
  m='2914230'>sorted</span> <span m='2914690'>arrays.</span> <span
  m='2916680'>I</span> <span m='2916750'>don't</span> <span
  m='2916900'>know</span> <span m='2917020'>how</span> <span
  m='2917150'>to</span> <span m='2917230'>merge</span> <span
  m='2917500'>them.</span> <span m='2918890'>It's</span> <span
  m='2919020'>going</span> <span m='2919140'>to</span> <span
  m='2919200'>be</span> <span m='2919310'>hard,</span> <span
  m='2919660'>but</span> <span m='2920070'>very</span> <span
  m='2920290'>close.</span> </p><p><span m='2921640'>So</span> <span
  m='2921900'>the</span> <span m='2922170'>answer</span> <span
  m='2922580'>is</span> <span m='2922780'>indeed</span> <span
  m='2923930'>merge</span> <span m='2924170'>sort.</span> <span
  m='2929220'>What</span> <span m='2929430'>we</span> <span
  m='2929550'>covered</span> <span m='2929810'>before</span> <span
  m='2930290'>is</span> <span m='2930810'>binary</span> <span
  m='2931240'>merge</span> <span m='2931460'>sort.</span> <span
  m='2931670'>You</span> <span m='2931730'>split</span> <span
  m='2931940'>into</span> <span m='2932170'>two</span> <span
  m='2932380'>groups.</span> <span m='2933810'>What</span> <span
  m='2933960'>I</span> <span m='2934010'>want</span> <span m='2934210'>to</span>
  <span m='2934280'>do</span> <span m='2934410'>now</span> <span
  m='2935790'>is</span> <span m='2935960'>split</span> <span
  m='2936260'>into</span> <span m='2936720'>some</span> <span
  m='2936990'>other</span> <span m='2937230'>number</span> <span
  m='2937530'>of</span> <span m='2937610'>groups.</span> <span
  m='2938050'>So</span> <span m='2938150'>that</span> <span
  m='2938220'>was</span> <span m='2938390'>n</span> <span
  m='2938590'>over</span> <span m='2938840'>b</span> <span
  m='2939030'>groups.</span> <span m='2939370'>That's</span> <span
  m='2939610'>too</span> <span m='2939860'>many</span> <span
  m='2940610'>because</span> <span m='2940770'>merging</span> <span
  m='2941140'>n</span> <span m='2941240'>over</span> <span m='2941430'>b</span>
  <span m='2941600'>arrays</span> <span m='2941920'>is</span> <span
  m='2942050'>hard.</span> <span m='2943920'>Merging</span> <span
  m='2944300'>two</span> <span m='2944530'>arrays</span> <span
  m='2944870'>was</span> <span m='2944990'>easy.</span> <span
  m='2946840'>Assuming</span> <span m='2947170'>m</span> <span
  m='2947320'>over</span> <span m='2947480'>b</span> <span
  m='2947630'>was</span> <span m='2947760'>at least</span> <span
  m='2947940'>3,</span> <span m='2948580'>I</span> <span
  m='2948730'>could</span> <span m='2948890'>merge</span> <span
  m='2949110'>these</span> <span m='2949280'>guys</span> <span
  m='2949740'>just</span> <span m='2949950'>by</span> <span
  m='2950110'>parallel</span> <span m='2950510'>scans.</span> <span
  m='2953460'>So</span> <span m='2953950'>you</span> <span
  m='2954080'>have</span> <span m='2954160'>the right</span> <span
  m='2954420'>bound?</span> </p><p><span m='2955097'>STUDENT: B way.</span>
  </p><p><span m='2956440'>PROFESSOR: B</span> <span m='2956660'>way,</span>
  <span m='2960130'>maybe.</span> </p><p><span m='2961586'>STUDENT: Square
  root</span> <span m='2962014'>of b.</span> </p><p><span m='2963300'>PROFESSOR:
  Square</span> <span m='2963640'>root</span> <span m='2963740'>of</span> <span
  m='2963810'>b?</span> <span m='2965000'>That's</span> <span
  m='2965140'>what</span> <span m='2965260'>I</span> <span
  m='2965560'>like</span> <span m='2965730'>to</span> <span
  m='2965790'>call</span> <span m='2965990'>root</span> <span
  m='2966220'>beer.</span> </p><p><span m='2966680'>[LAUGHTER]</span>
  </p><p></p><p><span m='2969880'>Nope.</span> <span m='2971050'>I</span> <span
  m='2971190'>do</span> <span m='2971480'>call</span> <span
  m='2971700'>it</span> <span m='2971850'>that.</span> <span
  m='2973170'>Yeah?</span> </p><p><span m='2974305'>STUDENT: M</span> <span
  m='2974710'>over</span> <span m='2975115'>b?</span> </p><p><span
  m='2975520'>PROFESSOR: M</span> <span m='2975830'>over</span> <span
  m='2976060'>b,</span> <span m='2976370'>that's</span> <span m='2976770'>what
  I'm</span> <span m='2976890'>looking</span> <span m='2977020'>for!</span>
  <span m='2978350'>Why</span> <span m='2978420'>m</span> <span
  m='2978530'>over</span> <span m='2978830'>b?</span> </p><p><span
  m='2979682'>STUDENT: I</span> <span m='2980144'>was just thinking of
  the</span> <span m='2980606'>bottom layer</span> <span m='2981068'>of</span>
  <span m='2981530'>the</span> <span m='2982454'>[INAUDIBLE]</span> <span
  m='2983378'>binary</span> <span m='2983840'>merge</span> <span
  m='2984302'>sort.</span> </p><p><span m='2985270'>PROFESSOR: Because</span>
  <span m='2985540'>m</span> <span m='2985710'>over</span> <span
  m='2985890'>b</span> <span m='2986000'>is</span> <span m='2986120'>up</span>
  <span m='2986280'>here?</span> <span m='2986490'>Nice.</span> </p><p><span
  m='2986710'>[LAUGHTER]</span> </p><p></p><p><span m='2988960'>Not</span> <span
  m='2989170'>the</span> <span m='2989260'>right</span> <span
  m='2989440'>reason,</span> <span m='2989730'>but</span> <span m='2989920'>you
  get a</span> <span m='2990215'>Frisbee</span> <span m='2990510'>anyway.</span>
  <span m='2992558'>All right,</span> <span m='2992980'>let's see</span> <span
  m='2993070'>if I can</span> <span m='2993270'>do this.</span> <span
  m='2995970'>Would you</span> <span m='2996060'>like</span> <span
  m='2996180'>another</span> <span m='2996400'>one?</span> <span m='2997310'>Add
  to</span> <span m='2997460'>your</span> <span m='2997600'>collection.</span>
  </p><p><span m='2998130'>All right,</span> <span m='3000520'>so</span> <span
  m='3000680'>m</span> <span m='3000860'>over b</span> <span m='3001200'>is
  the</span> <span m='3001280'>right</span> <span m='3001440'>answer--</span>
  <span m='3001750'>wrong</span> <span m='3001960'>reason,</span> <span
  m='3002330'>but</span> <span m='3002490'>that's</span> <span
  m='3002690'>OK.</span> <span m='3005080'>It</span> <span
  m='3005210'>all</span> <span m='3005370'>comes</span> <span
  m='3005640'>down</span> <span m='3005910'>to</span> <span
  m='3006010'>this</span> <span m='3006200'>merge</span> <span
  m='3006550'>step.</span> <span m='3007220'>So</span> <span
  m='3007390'>m</span> <span m='3007620'>over</span> <span m='3007810'>b</span>
  <span m='3008400'>way</span> <span m='3008650'>means</span> <span
  m='3009020'>I</span> <span m='3009160'>take</span> <span m='3009420'>my</span>
  <span m='3009520'>problem</span> <span m='3009920'>of size</span> <span
  m='3010060'>n.</span> <span m='3010500'>Let's</span> <span m='3010970'>draw it
  out.</span> <span m='3012690'>I</span> <span m='3012810'>divide</span> <span
  m='3013360'>into</span> <span m='3013640'>chunks.</span> <span
  m='3015390'>I</span> <span m='3015500'>want</span> <span
  m='3015760'>the</span> <span m='3015850'>number</span> <span
  m='3016740'>of</span> <span m='3016920'>chunks</span> <span
  m='3017320'>that</span> <span m='3017430'>I</span> <span
  m='3017490'>divide</span> <span m='3017880'>into</span> <span
  m='3018370'>to</span> <span m='3018470'>be m</span> <span
  m='3018900'>over</span> <span m='3019110'>b,</span> <span
  m='3020310'>meaning</span> <span m='3020660'>each</span> <span
  m='3020900'>of</span> <span m='3020960'>these</span> <span
  m='3021150'>has</span> <span m='3021370'>size</span> <span
  m='3022170'>n</span> <span m='3023040'>over</span> <span m='3023440'>m</span>
  <span m='3023660'>over</span> <span m='3023870'>b.</span> <span
  m='3025830'>That's</span> <span m='3026050'>weird.</span> <span
  m='3026660'>This</span> <span m='3026840'>is</span> <span
  m='3027180'>natural</span> <span m='3027630'>because</span> <span
  m='3027800'>this</span> <span m='3027920'>is</span> <span
  m='3028040'>how</span> <span m='3028270'>many</span> <span
  m='3029030'>blocks</span> <span m='3029470'>I</span> <span
  m='3029540'>can</span> <span m='3029710'>have in</span> <span
  m='3030030'>cache.</span> </p><p><span m='3032310'>I</span> <span
  m='3032430'>care</span> <span m='3032650'>about</span> <span
  m='3032860'>that</span> <span m='3033050'>because,</span> <span
  m='3033330'>if</span> <span m='3033460'>I</span> <span m='3033520'>want</span>
  <span m='3033750'>to</span> <span m='3033830'>do</span> <span
  m='3034020'>a</span> <span m='3034080'>multi-way</span> <span
  m='3034590'>merge,</span> <span m='3034990'>you</span> <span
  m='3035170'>can</span> <span m='3035330'>mimic</span> <span
  m='3035670'>the</span> <span m='3035760'>same</span> <span
  m='3036040'>binary</span> <span m='3036400'>merge.</span> <span
  m='3036680'>You</span> <span m='3036770'>look</span> <span
  m='3036930'>at</span> <span m='3036980'>the</span> <span
  m='3037060'>first</span> <span m='3037430'>item</span> <span
  m='3038140'>of</span> <span m='3038340'>each</span> <span
  m='3038590'>of</span> <span m='3038690'>the</span> <span
  m='3039570'>sorted</span> <span m='3039940'>arrays.</span> <span
  m='3040610'>You</span> <span m='3040750'>compare</span> <span
  m='3041210'>them.</span> <span m='3041750'>In</span> <span
  m='3041850'>this</span> <span m='3041990'>model,</span> <span
  m='3042300'>comparisons</span> <span m='3042720'>are</span> <span
  m='3042780'>free.</span> <span m='3043000'>Let's not even</span> <span
  m='3043360'>worry</span> <span m='3043610'>about</span> <span
  m='3043860'>it.</span> <span m='3043940'>In</span> <span
  m='3044070'>reality,</span> <span m='3044670'>use</span> <span
  m='3044760'>a</span> <span m='3044810'>priority</span> <span
  m='3045190'>queue,</span> <span m='3045840'>but</span> <span
  m='3046100'>all</span> <span m='3046180'>right.</span> <span
  m='3046760'>So</span> <span m='3047090'>you</span> <span
  m='3047190'>find</span> <span m='3047470'>the</span> <span
  m='3047540'>minimum</span> <span m='3047930'>of</span> <span
  m='3048030'>these.</span> <span m='3049000'>Let's</span> <span m='3049120'>say
  it's</span> <span m='3049250'>this</span> <span m='3049410'>one.</span> <span
  m='3049840'>And you</span> <span m='3050030'>output</span> <span
  m='3050400'>that,</span> <span m='3050950'>and</span> <span
  m='3051100'>then</span> <span m='3051210'>you</span> <span
  m='3051310'>advance.</span> </p><p><span m='3052570'>Same</span> <span
  m='3052900'>algorithm,</span> <span m='3053490'>that</span> <span
  m='3053660'>will</span> <span m='3053770'>merge</span> <span
  m='3054660'>however</span> <span m='3055010'>many</span> <span
  m='3055260'>arrays</span> <span m='3055470'>you</span> <span
  m='3055570'>have.</span> <span m='3057090'>The</span> <span
  m='3057230'>issue</span> <span m='3057580'>is,</span> <span
  m='3057760'>for</span> <span m='3057860'>this</span> <span
  m='3058080'>to</span> <span m='3058190'>be</span> <span
  m='3058450'>efficient</span> <span m='3058900'>like</span> <span
  m='3059080'>it</span> <span m='3059170'>was</span> <span
  m='3059400'>here,</span> <span m='3060130'>we</span> <span
  m='3060310'>need</span> <span m='3060500'>to</span> <span
  m='3060560'>be</span> <span m='3060730'>able</span> <span
  m='3060910'>to</span> <span m='3060970'>store</span> <span
  m='3061350'>the</span> <span m='3061490'>first</span> <span
  m='3061900'>block</span> <span m='3062960'>of</span> <span
  m='3063220'>each</span> <span m='3063510'>of</span> <span
  m='3063600'>these</span> <span m='3063800'>arrays.</span> <span
  m='3065100'>How</span> <span m='3065260'>many</span> <span
  m='3065460'>blocks</span> <span m='3065810'>we</span> <span
  m='3065910'>have</span> <span m='3066020'>room</span> <span
  m='3066220'>for?</span> <span m='3066970'>M</span> <span
  m='3067150'>over</span> <span m='3067360'>b.</span> <span
  m='3067740'>This</span> <span m='3067900'>is</span> <span
  m='3068010'>maxing</span> <span m='3068520'>out</span> <span
  m='3068710'>merge</span> <span m='3068960'>sort.</span> <span
  m='3069300'>This</span> <span m='3069450'>is</span> <span
  m='3069570'>exactly</span> <span m='3070190'>the</span> <span
  m='3070280'>number</span> <span m='3070640'>of</span> <span
  m='3070700'>blocks</span> <span m='3071090'>that</span> <span
  m='3071190'>we</span> <span m='3071290'>can</span> <span
  m='3071320'>store.</span> <span m='3072620'>And</span> <span
  m='3072810'>so</span> <span m='3072990'>if</span> <span m='3073070'>we</span>
  <span m='3073140'>do</span> <span m='3073260'>m</span> <span
  m='3073460'>over</span> <span m='3073620'>b</span> <span
  m='3073760'>way</span> <span m='3073890'>merge</span> <span
  m='3074120'>sort,</span> <span m='3074730'>merge</span> <span
  m='3075110'>remains</span> <span m='3075700'>cheap.</span> </p><p><span
  m='3078080'>An</span> <span m='3078240'>m</span> <span m='3078420'>over</span>
  <span m='3078610'>b</span> <span m='3078820'>way</span> <span
  m='3078990'>merge</span> <span m='3080910'>costs</span> <span
  m='3084270'>n</span> <span m='3084470'>over</span> <span m='3084700'>b</span>
  <span m='3084900'>plus</span> <span m='3085150'>1,</span> <span
  m='3086790'>just</span> <span m='3087010'>like</span> <span
  m='3087170'>before.</span> <span m='3088000'>It's</span> <span
  m='3088280'>m</span> <span m='3088590'>over</span> <span m='3088940'>b</span>
  <span m='3089470'>parallel</span> <span m='3089970'>scans.</span> <span
  m='3091810'>M</span> <span m='3092030'>over</span> <span m='3092210'>b</span>
  <span m='3092430'>is</span> <span m='3092550'>exactly</span> <span
  m='3093250'>the</span> <span m='3093360'>number of</span> <span
  m='3093640'>scans</span> <span m='3093920'>we</span> <span
  m='3094000'>can</span> <span m='3094130'>handle.</span> <span
  m='3095270'>OK,</span> <span m='3095470'>technically</span> <span
  m='3096140'>we</span> <span m='3096300'>have,</span> <span
  m='3096890'>with</span> <span m='3097060'>this</span> <span
  m='3097210'>picture,</span> <span m='3097500'>m</span> <span
  m='3097690'>over</span> <span m='3097870'>b</span> <span
  m='3098040'>plus</span> <span m='3098360'>1</span> <span
  m='3098590'>scans.</span> <span m='3099070'>So</span> <span
  m='3099250'>I</span> <span m='3099340'>need</span> <span m='3099530'>to</span>
  <span m='3099610'>write</span> <span m='3099910'>m</span> <span
  m='3100110'>over</span> <span m='3100320'>b</span> <span
  m='3100630'>minus</span> <span m='3100930'>1.</span> <span
  m='3101480'>But</span> <span m='3102820'>it won't</span> <span
  m='3102970'>make</span> <span m='3103130'>a</span> <span
  m='3103180'>difference.</span> </p><p><span m='3105130'>OK,</span> <span
  m='3105460'>so</span> <span m='3105780'>let's</span> <span
  m='3105960'>write</span> <span m='3106080'>down the</span> <span
  m='3106250'>recurrence.</span> <span m='3106620'>It's</span> <span
  m='3106990'>pretty</span> <span m='3107180'>similar.</span> </p><p><span
  m='3108680'>Memory</span> <span m='3108870'>transfer's</span> <span
  m='3109670'>size</span> <span m='3110100'>m.</span> <span
  m='3110460'>We</span> <span m='3110570'>have</span> <span m='3111420'>m</span>
  <span m='3111680'>over</span> <span m='3111910'>b</span> <span
  m='3112930'>sub</span> <span m='3113210'>problems</span> <span
  m='3115110'>of</span> <span m='3115270'>size</span> <span m='3116200'>n</span>
  <span m='3116630'>divided</span> <span m='3117080'>by</span> <span
  m='3117300'>m</span> <span m='3117500'>over</span> <span m='3117680'>b.</span>
  <span m='3118710'>It's</span> <span m='3119160'>Still</span> <span
  m='3119380'>conservation</span> <span m='3119930'>of</span> <span
  m='3119990'>mass.</span> <span m='3121070'>And</span> <span
  m='3121280'>then</span> <span m='3121390'>we</span> <span
  m='3121460'>have</span> <span m='3121590'>plus</span> <span
  m='3122320'>the</span> <span m='3122370'>same</span> <span
  m='3122590'>thing</span> <span m='3122760'>as</span> <span
  m='3122930'>before,</span> <span m='3123350'>n</span> <span
  m='3123520'>over</span> <span m='3123740'>b</span> <span
  m='3124940'>plus</span> <span m='3125270'>1.</span> <span
  m='3126200'>So</span> <span m='3126330'>it's</span> <span
  m='3126430'>exactly</span> <span m='3126930'>the</span> <span
  m='3127030'>same</span> <span m='3127240'>recurrence</span> <span
  m='3127640'>we</span> <span m='3127720'>had</span> <span
  m='3127910'>before.</span> <span m='3129120'>We're</span> <span
  m='3129320'>splitting</span> <span m='3129710'>into</span> <span
  m='3129880'>more</span> <span m='3130180'>problems.</span> <span
  m='3130640'>But</span> <span m='3130780'>the</span> <span
  m='3130870'>sums</span> <span m='3131240'>are</span> <span
  m='3131300'>going</span> <span m='3131420'>to</span> <span
  m='3131470'>be</span> <span m='3131580'>the</span> <span
  m='3131670'>same.</span> <span m='3131960'>It's still</span> <span
  m='3132180'>going</span> <span m='3132290'>to</span> <span
  m='3132350'>add</span> <span m='3132500'>up</span> <span m='3132600'>to</span>
  <span m='3132680'>n</span> <span m='3132830'>over</span> <span
  m='3133040'>b</span> <span m='3133230'>at</span> <span m='3133290'>each</span>
  <span m='3133430'>step</span> <span m='3133720'>because</span> <span
  m='3134160'>conservation</span> <span m='3134650'>of</span> <span
  m='3134690'>mass.</span> <span m='3135020'>And</span> <span
  m='3135100'>we</span> <span m='3135180'>didn't</span> <span
  m='3135360'>change</span> <span m='3135590'>this.</span> <span
  m='3136700'>So</span> <span m='3137190'>level</span> <span
  m='3137430'>by</span> <span m='3137540'>level</span> <span
  m='3137850'>looks</span> <span m='3138030'>the</span> <span
  m='3138080'>same.</span> <span m='3138750'>The</span> <span
  m='3138810'>only</span> <span m='3139080'>thing</span> <span
  m='3139320'>that</span> <span m='3139460'>changes</span> <span
  m='3139970'>is</span> <span m='3140110'>the</span> <span
  m='3140190'>number</span> <span m='3140600'>of</span> <span
  m='3140680'>levels.</span> </p><p><span m='3142920'>Now</span> <span
  m='3143260'>we're</span> <span m='3143380'>taking</span> <span
  m='3143690'>n.</span> <span m='3143890'>We're</span> <span
  m='3144000'>dividing</span> <span m='3144530'>by</span> <span
  m='3144670'>m</span> <span m='3144900'>over</span> <span m='3145080'>b</span>
  <span m='3145270'>in</span> <span m='3145350'>each</span> <span
  m='3145510'>step.</span> <span m='3146870'>So</span> <span
  m='3147110'>the</span> <span m='3147750'>height</span> <span
  m='3148040'>of</span> <span m='3148130'>the</span> <span
  m='3148230'>tree,</span> <span m='3148730'>the number of</span> <span
  m='3149020'>levels</span> <span m='3149370'>of</span> <span
  m='3151580'>the</span> <span m='3151670'>recursion</span> <span
  m='3152150'>tree</span> <span m='3154680'>now</span> <span
  m='3155170'>is--</span> <span m='3156580'>before</span> <span m='3157040'>it
  was</span> <span m='3157220'>log</span> <span m='3157500'>base</span> <span
  m='3157880'>2</span> <span m='3159230'>of</span> <span m='3159360'>n</span>
  <span m='3159470'>over</span> <span m='3159670'>n.</span> <span
  m='3160400'>Now</span> <span m='3160710'>it's</span> <span
  m='3160840'>going</span> <span m='3160950'>to</span> <span
  m='3161010'>be</span> <span m='3161170'>log</span> <span
  m='3162020'>base</span> <span m='3163280'>m</span> <span
  m='3163510'>over</span> <span m='3163780'>b</span> <span m='3166460'>of</span>
  <span m='3167770'>n</span> <span m='3167940'>over</span> <span
  m='3168190'>m.</span> <span m='3171440'>If</span> <span
  m='3171510'>you're</span> <span m='3171630'>careful,</span> <span
  m='3172170'>I</span> <span m='3172260'>guess</span> <span
  m='3172520'>there's</span> <span m='3172810'>a</span> <span
  m='3172900'>plus</span> <span m='3173260'>1</span> <span
  m='3174340'>for</span> <span m='3174480'>the</span> <span
  m='3174600'>leaf</span> <span m='3174850'>level.</span> </p><p><span
  m='3175105'>I</span> <span m='3175360'>actually</span> <span
  m='3175710'>want</span> <span m='3175920'>to</span> <span
  m='3176140'>mention</span> <span m='3176530'>this</span> <span
  m='3176680'>plus 1.</span> <span m='3177210'>Unlike</span> <span
  m='3177530'>the</span> <span m='3177620'>other</span> <span m='3177790'>plus
  1's,</span> <span m='3178730'>I've got to</span> <span
  m='3178930'>mention</span> <span m='3179250'>this</span> <span
  m='3179400'>one</span> <span m='3179620'>because</span> <span
  m='3180930'>this</span> <span m='3181250'>is</span> <span
  m='3181360'>not</span> <span m='3181650'>how</span> <span m='3181800'>I</span>
  <span m='3181920'>usually</span> <span m='3182290'>think</span> <span
  m='3182460'>of</span> <span m='3182530'>the</span> <span
  m='3182620'>number</span> <span m='3182890'>of</span> <span
  m='3182940'>levels.</span> <span m='3184520'>I'll</span> <span
  m='3184630'>show</span> <span m='3184790'>you</span> <span
  m='3184940'>why.</span> <span m='3186410'>If</span> <span
  m='3186460'>you</span> <span m='3186570'>just</span> <span
  m='3186830'>change</span> <span m='3187070'>it</span> <span
  m='3187150'>by</span> <span m='3187300'>one,</span> <span
  m='3187650'>you</span> <span m='3187770'>get</span> <span m='3188020'>a</span>
  <span m='3188170'>slightly</span> <span m='3188530'>cleaner</span> <span
  m='3189290'>formula.</span> <span m='3189700'>This</span> <span
  m='3189880'>has</span> <span m='3190000'>got</span> <span
  m='3190180'>m's</span> <span m='3190390'>all</span> <span
  m='3190540'>over</span> <span m='3190660'>the</span> <span
  m='3190750'>place.</span> <span m='3194030'>So</span> <span
  m='3194280'>I</span> <span m='3194430'>just</span> <span
  m='3194600'>want</span> <span m='3194730'>to</span> <span
  m='3194810'>rewrite</span> <span m='3197100'>n</span> <span
  m='3197300'>over</span> <span m='3197540'>m</span> <span
  m='3197830'>here.</span> <span m='3198420'>Then</span> <span
  m='3198540'>we'll</span> <span m='3198630'>see</span> <span
  m='3198780'>how</span> <span m='3198920'>good</span> <span
  m='3199080'>this</span> <span m='3199480'>is.</span> <span m='3200280'>This
  is</span> <span m='3200380'>just</span> <span m='3200750'>pedantics.</span>
  <span m='3202150'>Log</span> <span m='3202540'>base</span> <span
  m='3202970'>m</span> <span m='3203140'>over</span> <span m='3203320'>b</span>
  <span m='3203890'>of</span> <span m='3204580'>n--</span> <span
  m='3205190'>I</span> <span m='3205320'>really</span> <span
  m='3205570'>want</span> <span m='3205760'>n</span> <span
  m='3205910'>over</span> <span m='3206170'>b.</span> <span
  m='3207830'>To</span> <span m='3207970'>make</span> <span
  m='3208180'>this</span> <span m='3208380'>n</span> <span
  m='3208500'>over</span> <span m='3208670'>b,</span> <span m='3209110'>I
  need</span> <span m='3209320'>to</span> <span m='3209600'>multiply</span>
  <span m='3210250'>by</span> <span m='3210450'>b,</span> <span
  m='3211170'>divide</span> <span m='3211510'>by</span> <span
  m='3211670'>m.</span> <span m='3212690'>OK,</span> <span
  m='3212900'>these</span> <span m='3213060'>are</span> <span
  m='3213100'>the</span> <span m='3213210'>same</span> <span
  m='3213450'>thing.</span> <span m='3214010'>M</span> <span
  m='3214200'>over</span> <span m='3214390'>m,</span> <span
  m='3214660'>b's</span> <span m='3214870'>cancel.</span> </p><p><span
  m='3217460'>But</span> <span m='3217720'>I</span> <span
  m='3217840'>have</span> <span m='3217980'>a</span> <span
  m='3218030'>log</span> <span m='3218370'>of</span> <span m='3218450'>a</span>
  <span m='3218520'>product.</span> <span m='3219140'>I</span> <span
  m='3219240'>can</span> <span m='3219270'>separate</span> <span
  m='3219710'>that</span> <span m='3219880'>out.</span> <span
  m='3222270'>Let's</span> <span m='3222590'>go</span> <span
  m='3222930'>over</span> <span m='3223120'>here.</span> <span
  m='3224000'>This</span> <span m='3224560'>is</span> <span
  m='3225160'>log</span> <span m='3228610'>base</span> <span
  m='3228870'>m</span> <span m='3229070'>over</span> <span m='3229300'>b</span>
  <span m='3230220'>of n</span> <span m='3230680'>over</span> <span
  m='3230880'>b--</span> <span m='3231090'>this is</span> <span
  m='3231400'>what</span> <span m='3231560'>I</span> <span
  m='3231620'>like--</span> <span m='3232970'>and</span> <span
  m='3233110'>then,</span> <span m='3233300'>basically,</span> <span
  m='3233630'>minus</span> <span m='3235370'>log</span> <span
  m='3235880'>base</span> <span m='3236150'>m</span> <span
  m='3236360'>over</span> <span m='3236580'>b</span> <span m='3237570'>of</span>
  <span m='3237790'>m</span> <span m='3237970'>over</span> <span
  m='3238180'>b.</span> </p><p><span m='3239342'>STUDENT: It's b</span> <span
  m='3239740'>over m.</span> </p><p><span m='3241400'>PROFESSOR: I</span> <span
  m='3241470'>put</span> <span m='3241640'>a</span> <span
  m='3241680'>minus,</span> <span m='3242330'>so</span> <span
  m='3242540'>it's</span> <span m='3242680'>m</span> <span
  m='3242860'>over</span> <span m='3243060'>b.</span> <span
  m='3243300'>If</span> <span m='3243500'>I</span> <span m='3243550'>put</span>
  <span m='3243720'>a</span> <span m='3243770'>plus,</span> <span
  m='3244090'>it</span> <span m='3244150'>would</span> <span
  m='3244250'>be</span> <span m='3244370'>b</span> <span m='3244540'>over</span>
  <span m='3244730'>m.</span> <span m='3245260'>But,</span> <span m='3245390'>in
  fact,</span> <span m='3245670'>m</span> <span m='3245840'>is</span> <span
  m='3245930'>bigger</span> <span m='3246130'>than</span> <span
  m='3246260'>b.</span> <span m='3246480'>So</span> <span m='3246650'>I</span>
  <span m='3246700'>want</span> <span m='3246910'>it</span> <span
  m='3246980'>this</span> <span m='3247160'>way.</span> <span
  m='3248690'>And</span> <span m='3248980'>now</span> <span
  m='3249510'>it's</span> <span m='3249660'>obvious</span> <span
  m='3250060'>this</span> <span m='3250220'>is</span> <span
  m='3250350'>1.</span> <span m='3251400'>So</span> <span
  m='3251540'>these</span> <span m='3251710'>cancel.</span> <span
  m='3253330'>So</span> <span m='3253570'>that's</span> <span
  m='3253770'>why</span> <span m='3253930'>I wanted the</span> <span
  m='3254190'>1,</span> <span m='3254450'>just</span> <span
  m='3254620'>to</span> <span m='3254680'>get</span> <span
  m='3254830'>rid</span> <span m='3254950'>of</span> <span
  m='3255000'>that.</span> <span m='3255530'>It</span> <span
  m='3255630'>doesn't</span> <span m='3255890'>really</span> <span
  m='3256070'>matter,</span> <span m='3256380'>just</span> <span
  m='3256570'>a</span> <span m='3256620'>plus</span> <span m='3256880'>1.</span>
  <span m='3257500'>But</span> <span m='3257920'>it's</span> <span
  m='3258130'>a</span> <span m='3258250'>cooler</span> <span
  m='3258580'>way</span> <span m='3258820'>to</span> <span
  m='3258920'>see</span> <span m='3260150'>that,</span> <span
  m='3260590'>in</span> <span m='3260690'>some</span> <span
  m='3260740'>sense,</span> <span m='3261080'>this</span> <span
  m='3261360'>is</span> <span m='3261680'>the</span> <span
  m='3261810'>right</span> <span m='3262070'>answer</span> <span m='3262520'>of
  the</span> <span m='3262730'>height</span> <span m='3263010'>of</span> <span
  m='3263110'>the</span> <span m='3263220'>tree.</span> </p><p><span
  m='3264300'>Now,</span> <span m='3264650'>we're</span> <span
  m='3264810'>paying</span> <span m='3265350'>n</span> <span
  m='3265520'>over</span> <span m='3265740'>b</span> <span m='3265980'>at</span>
  <span m='3266110'>each</span> <span m='3266320'>recursive</span> <span
  m='3266780'>level.</span> <span m='3267530'>So</span> <span
  m='3267770'>the</span> <span m='3267870'>total</span> <span
  m='3268190'>cost</span> <span m='3271380'>is</span> <span
  m='3271900'>what's</span> <span m='3272120'>called</span> <span
  m='3272500'>the</span> <span m='3272590'>sorting</span> <span
  m='3272930'>bound.</span> <span m='3273280'>This</span> <span
  m='3273460'>is</span> <span m='3273560'>optimal,</span> <span
  m='3274590'>n</span> <span m='3274790'>over</span> <span m='3274990'>b</span>
  <span m='3275690'>times</span> <span m='3275900'>log</span> <span
  m='3276760'>base</span> <span m='3277030'>m</span> <span
  m='3277250'>over</span> <span m='3277440'>b</span> <span m='3278691'>of
  n</span> <span m='3279110'>over</span> <span m='3279330'>b.</span> <span
  m='3280900'>Oh</span> <span m='3281020'>my</span> <span
  m='3281150'>gosh,</span> <span m='3281450'>what</span> <span
  m='3281580'>a</span> <span m='3281630'>mouthful.</span> <span
  m='3282100'>But</span> <span m='3282250'>every</span> <span
  m='3282610'>person</span> <span m='3282990'>who does</span> <span
  m='3283160'>external</span> <span m='3283470'>memory</span> <span
  m='3283780'>algorithms</span> <span m='3284330'>and</span> <span
  m='3284510'>cache oblivious</span> <span m='3284940'>algorithms</span> <span
  m='3286620'>knows</span> <span m='3286870'>this.</span> <span m='3287240'>It
  is</span> <span m='3288350'>the</span> <span m='3288470'>truth,</span> <span
  m='3288790'>it</span> <span m='3289110'>turns</span> <span
  m='3289320'>out.</span> <span m='3289440'>There's</span> <span
  m='3289570'>a</span> <span m='3289620'>matching</span> <span
  m='3289930'>lower</span> <span m='3290140'>bound.</span> </p><p><span
  m='3290800'>It's a</span> <span m='3290940'>weird</span> <span
  m='3291180'>bound.</span> <span m='3291620'>But</span> <span
  m='3291790'>let's</span> <span m='3291980'>compare</span> <span
  m='3292340'>it</span> <span m='3292410'>to</span> <span
  m='3292520'>what</span> <span m='3292690'>we</span> <span
  m='3292800'>know.</span> <span m='3294040'>So</span> <span
  m='3294270'>we</span> <span m='3294370'>started</span> <span
  m='3294780'>out</span> <span m='3295170'>with</span> <span
  m='3295420'>n</span> <span m='3295580'>log</span> <span m='3295860'>n</span>
  <span m='3296100'>divided</span> <span m='3296450'>by</span> <span
  m='3296570'>log</span> <span m='3297020'>b.</span> <span
  m='3297780'>Then</span> <span m='3297940'>we</span> <span
  m='3298050'>got</span> <span m='3298310'>n</span> <span m='3298470'>log</span>
  <span m='3298730'>n</span> <span m='3298850'>divided</span> <span
  m='3299240'>by</span> <span m='3299410'>b.</span> <span
  m='3301420'>Let's</span> <span m='3301590'>ignore--</span> <span m='3301875'>I
  mean,</span> <span m='3302160'>this</span> <span m='3302430'>has</span> <span
  m='3302630'>almost</span> <span m='3302960'>no</span> <span
  m='3303090'>effect,</span> <span m='3303490'>the</span> <span
  m='3303590'>part</span> <span m='3303800'>in</span> <span
  m='3303910'>here.</span> <span m='3304660'>Now</span> <span
  m='3305030'>we</span> <span m='3305130'>have</span> <span m='3305730'>n</span>
  <span m='3306020'>log</span> <span m='3306470'>n</span> <span
  m='3307210'>divided</span> <span m='3307620'>by</span> <span
  m='3307780'>b</span> <span m='3308165'>and</span> <span
  m='3308550'>divided</span> <span m='3308940'>by</span> <span
  m='3309070'>log</span> <span m='3309440'>m</span> <span
  m='3309600'>over</span> <span m='3309780'>b.</span> <span
  m='3311400'>It's</span> <span m='3311780'>not</span> <span
  m='3312010'>quite</span> <span m='3312350'>dividing</span> <span
  m='3312670'>by</span> <span m='3312780'>log</span> <span m='3313080'>b.</span>
  <span m='3313310'>But</span> <span m='3313470'>it</span> <span
  m='3313910'>turns</span> <span m='3314130'>out</span> <span
  m='3314240'>it's</span> <span m='3314390'>almost</span> <span
  m='3314850'>always</span> <span m='3315050'>the</span> <span
  m='3315130'>same.</span> </p><p><span m='3317170'>In some</span> <span
  m='3317370'>sense,</span> <span m='3317560'>this</span> <span
  m='3317710'>could</span> <span m='3317840'>be</span> <span
  m='3318020'>better.</span> <span m='3319020'>If you're</span> <span
  m='3319130'>cache</span> <span m='3319430'>is</span> <span
  m='3319560'>big,</span> <span m='3319950'>now</span> <span
  m='3320110'>you're</span> <span m='3320220'>dividing</span> <span
  m='3320570'>by</span> <span m='3320700'>log</span> <span m='3321140'>m,</span>
  <span m='3321460'>roughly.</span> <span m='3322270'>Before,</span> <span
  m='3322580'>you were</span> <span m='3322710'>only</span> <span
  m='3322880'>dividing</span> <span m='3323210'>by</span> <span
  m='3323330'>log</span> <span m='3323600'>b.</span> <span
  m='3324960'>And</span> <span m='3325480'>it</span> <span
  m='3325520'>turns</span> <span m='3325700'>out</span> <span
  m='3325840'>this</span> <span m='3325970'>is</span> <span
  m='3326040'>the</span> <span m='3326120'>best</span> <span
  m='3326390'>you</span> <span m='3326490'>can</span> <span
  m='3326620'>do.</span> <span m='3327540'>So</span> <span
  m='3327980'>this</span> <span m='3328120'>is</span> <span
  m='3328230'>going</span> <span m='3328360'>to</span> <span
  m='3328420'>be</span> <span m='3328630'>a</span> <span
  m='3328710'>little</span> <span m='3328990'>bit</span> <span
  m='3329160'>better</span> <span m='3329460'>than</span> <span
  m='3330270'>merge</span> <span m='3330460'>sort.</span> <span
  m='3330780'>If</span> <span m='3330900'>your</span> <span
  m='3331020'>cache</span> <span m='3331500'>is</span> <span
  m='3334310'>16</span> <span m='3334840'>gigabytes,</span> <span
  m='3335420'>like</span> <span m='3335630'>your</span> <span
  m='3335830'>RAM</span> <span m='3336500'>caching</span> <span
  m='3336940'>your</span> <span m='3338810'>disk,</span> <span
  m='3339760'>then</span> <span m='3339840'>log</span> <span
  m='3340170'>m</span> <span m='3340390'>is</span> <span
  m='3340920'>pretty</span> <span m='3341220'>big.</span> <span
  m='3341985'>It's</span> <span m='3342250'>going</span> <span
  m='3342350'>to</span> <span m='3342410'>be</span> <span m='3342560'>32</span>
  <span m='3343240'>or</span> <span m='3343350'>something,</span> <span
  m='3344920'>34</span> <span m='3346420'>I</span> <span
  m='3346570'>guess</span> <span m='3347790'>log</span> <span
  m='3348280'>m.</span> </p><p><span m='3348635'>OK,</span> <span m='3348990'>I
  have</span> <span m='3349120'>to</span> <span m='3349220'>divide</span> <span
  m='3349520'>by</span> <span m='3349670'>b.</span> <span m='3350040'>So</span>
  <span m='3350190'>it's</span> <span m='3350310'>not</span> <span
  m='3350450'>that</span> <span m='3350680'>good.</span> <span m='3350920'>But
  still,</span> <span m='3351250'>I'm</span> <span m='3351480'>getting</span>
  <span m='3351700'>an</span> <span m='3351760'>improvement</span> <span
  m='3352200'>over</span> <span m='3352410'>regular</span> <span
  m='3352820'>binary</span> <span m='3353180'>merge</span> <span
  m='3353380'>sort.</span> <span m='3354250'>And</span> <span
  m='3354810'>you</span> <span m='3355010'>would</span> <span
  m='3355170'>see</span> <span m='3355310'>that</span> <span
  m='3355470'>improvement.</span> <span m='3355810'>These</span> <span
  m='3355960'>are</span> <span m='3356350'>big</span> <span
  m='3356700'>factors.</span> <span m='3357210'>The</span> <span
  m='3357290'>big</span> <span m='3357530'>thing,</span> <span
  m='3357910'>of</span> <span m='3358010'>course,</span> <span
  m='3358250'>is</span> <span m='3358340'>dividing it</span> <span
  m='3358640'>by</span> <span m='3358760'>b.</span> <span m='3359440'>But</span>
  <span m='3359600'>dividing</span> <span m='3359930'>by</span> <span
  m='3360040'>log</span> <span m='3360440'>of</span> <span m='3360540'>m</span>
  <span m='3360710'>over</span> <span m='3360880'>b is</span> <span
  m='3361110'>also</span> <span m='3362080'>nice</span> <span m='3362550'>and
  the</span> <span m='3363020'>best</span> <span m='3363250'>you</span> <span
  m='3363330'>can</span> <span m='3363440'>do.</span> </p><p><span
  m='3364790'>OK,</span> <span m='3365030'>obviously</span> <span
  m='3365520'>I</span> <span m='3365600'>needed</span> <span
  m='3365910'>to</span> <span m='3366030'>know</span> <span
  m='3366300'>what</span> <span m='3366500'>m and</span> <span
  m='3366970'>b</span> <span m='3367220'>were</span> <span
  m='3367560'>here.</span> <span m='3368460'>So</span> <span
  m='3368630'>the</span> <span m='3368750'>natural</span> <span
  m='3369170'>question</span> <span m='3369670'>next</span> <span
  m='3370030'>is</span> <span m='3370340'>cache</span> <span
  m='3370630'>oblivious</span> <span m='3372470'>sorting.</span> <span
  m='3374290'>And</span> <span m='3374490'>that</span> <span
  m='3374640'>would</span> <span m='3374780'>take</span> <span
  m='3375330'>another</span> <span m='3375630'>lecture</span> <span
  m='3376010'>to</span> <span m='3376100'>cover.</span> <span
  m='3376550'>So</span> <span m='3377400'>I'm</span> <span
  m='3377470'>not</span> <span m='3377610'>going</span> <span
  m='3377710'>to</span> <span m='3377820'>do</span> <span m='3377950'>it</span>
  <span m='3378030'>here.</span> <span m='3378570'>But</span> <span
  m='3378730'>it</span> <span m='3378840'>can</span> <span m='3379020'>be</span>
  <span m='3379150'>done.</span> <span m='3379600'>Cache</span> <span
  m='3380100'>obliviously,</span> <span m='3380600'>you</span> <span
  m='3380710'>can</span> <span m='3380760'>achieve</span> <span
  m='3381070'>the</span> <span m='3381150'>same</span> <span
  m='3381420'>thing.</span> <span m='3382720'>And</span> <span
  m='3382900'>I'll</span> <span m='3383010'>give</span> <span
  m='3383150'>you</span> <span m='3383530'>the</span> <span
  m='3383780'>intuition.</span> </p><p><span m='3384760'>There's</span> <span
  m='3385060'>one</span> <span m='3385260'>catch.</span> <span
  m='3385595'>Let</span> <span m='3385930'>me</span> <span
  m='3386030'>mention</span> <span m='3386330'>the</span> <span
  m='3386420'>catch.</span> <span m='3403930'>So</span> <span
  m='3404110'>cache</span> <span m='3404540'>oblivious</span> <span
  m='3405010'>sorting--</span> <span m='3411710'>to</span> <span
  m='3411840'>do</span> <span m='3412200'>optimal</span> <span
  m='3412770'>cache</span> <span m='3413160'>oblivious</span> <span
  m='3413435'>sorting</span> <span m='3413710'>like</span> <span
  m='3413880'>that</span> <span m='3414080'>bound,</span> <span
  m='3414950'>it</span> <span m='3415230'>turns</span> <span
  m='3415560'>out</span> <span m='3416780'>you</span> <span
  m='3416940'>need</span> <span m='3417390'>an</span> <span
  m='3417500'>assumption</span> <span m='3419190'>called</span> <span
  m='3419620'>the</span> <span m='3419730'>tall-cache</span> <span
  m='3420300'>assumption.</span> <span m='3431840'>Simple</span> <span
  m='3432210'>form</span> <span m='3432480'>of</span> <span
  m='3432560'>the</span> <span m='3432670'>tall-cache</span> <span
  m='3433130'>assumption</span> <span m='3433540'>is that</span> <span
  m='3434036'>m</span> <span m='3435524'>is</span> <span m='3436020'>at</span>
  <span m='3436120'>least</span> <span m='3436850'>b</span> <span
  m='3437150'>squared.</span> <span m='3439810'>What</span> <span
  m='3439980'>that</span> <span m='3440170'>means</span> <span
  m='3440690'>is</span> <span m='3441120'>m</span> <span m='3441330'>over</span>
  <span m='3441540'>b</span> <span m='3443310'>is</span> <span
  m='3443480'>at</span> <span m='3443540'>least</span> <span
  m='3443940'>b.</span> </p><p><span m='3445250'>In</span> <span
  m='3445300'>other</span> <span m='3445430'>words,</span> <span
  m='3446640'>the</span> <span m='3446700'>cache</span> <span
  m='3447050'>is</span> <span m='3447190'>taller</span> <span
  m='3447640'>than</span> <span m='3447830'>it</span> <span
  m='3447930'>is</span> <span m='3448090'>wide,</span> <span
  m='3448900'>the</span> <span m='3449030'>way</span> <span
  m='3449200'>I've</span> <span m='3449300'>been</span> <span
  m='3449420'>drawing</span> <span m='3449710'>it.</span> <span
  m='3449870'>That's</span> <span m='3450050'>why it's</span> <span
  m='3450250'>called</span> <span m='3450440'>the</span> <span
  m='3450510'>tall-cache</span> <span m='3451090'>assumption.</span> <span
  m='3452100'>And if</span> <span m='3452200'>you</span> <span
  m='3452300'>look</span> <span m='3452340'>at</span> <span
  m='3452410'>real</span> <span m='3452600'>caches,</span> <span
  m='3453110'>this</span> <span m='3453350'>is</span> <span
  m='3453510'>usually</span> <span m='3453890'>the</span> <span
  m='3453990'>case.</span> <span m='3456320'>I don't</span> <span
  m='3456460'>know of a</span> <span m='3456810'>great</span> <span
  m='3457110'>reason</span> <span m='3457350'>why</span> <span
  m='3457500'>it</span> <span m='3457580'>should</span> <span
  m='3457890'>be</span> <span m='3457990'>the</span> <span
  m='3458080'>case.</span> <span m='3458380'>But</span> <span
  m='3458730'>it</span> <span m='3458960'>usually</span> <span
  m='3459320'>is,</span> <span m='3460010'>so</span> <span
  m='3460350'>all</span> <span m='3460600'>is</span> <span
  m='3460690'>well.</span> <span m='3461780'>You</span> <span
  m='3461860'>can</span> <span m='3461980'>do</span> <span m='3462070'>cache
  oblivious</span> <span m='3462540'>sorting.</span> <span m='3462860'>It
  turns</span> <span m='3463080'>out,</span> <span m='3463140'>if</span> <span
  m='3463230'>you</span> <span m='3463320'>don't</span> <span
  m='3463570'>have</span> <span m='3463730'>this</span> <span
  m='3463880'>assumption,</span> <span m='3464750'>you</span> <span
  m='3464880'>cannot</span> <span m='3465280'>achieve</span> <span
  m='3465590'>this</span> <span m='3465770'>bound.</span> <span
  m='3467140'>We</span> <span m='3467320'>don't</span> <span
  m='3467470'>know</span> <span m='3467880'>what</span> <span
  m='3468110'>bound</span> <span m='3468270'>you</span> <span
  m='3468400'>can</span> <span m='3468620'>achieve.</span> <span
  m='3469080'>But</span> <span m='3469120'>we</span> <span
  m='3469220'>just</span> <span m='3469400'>know</span> <span
  m='3469550'>this</span> <span m='3469770'>one</span> <span
  m='3470130'>is</span> <span m='3470300'>not</span> <span
  m='3470510'>possible.</span> <span m='3471060'>You</span> <span
  m='3471180'>can</span> <span m='3471310'>get</span> <span m='3471420'>a</span>
  <span m='3471480'>contradiction</span> <span m='3472060'>if</span> <span
  m='3472180'>you</span> <span m='3472290'>achieve</span> <span
  m='3472570'>that</span> <span m='3473200'>without</span> <span
  m='3473530'>tall</span> <span m='3473720'>cache.</span> </p><p><span
  m='3474530'>So</span> <span m='3474730'>it's</span> <span m='3474840'>a</span>
  <span m='3474900'>little</span> <span m='3475070'>bit</span> <span
  m='3475230'>weird.</span> <span m='3475660'>You have</span> <span
  m='3476100'>to</span> <span m='3476220'>make</span> <span
  m='3476420'>one</span> <span m='3476610'>bonus</span> <span
  m='3476790'>assumption.</span> <span m='3477330'>You</span> <span
  m='3477480'>can</span> <span m='3477600'>make</span> <span
  m='3477780'>a</span> <span m='3477980'>somewhat</span> <span
  m='3478340'>weaker</span> <span m='3478620'>form</span> <span
  m='3478900'>of</span> <span m='3479000'>it,</span> <span
  m='3479130'>which</span> <span m='3479370'>is</span> <span
  m='3480370'>m</span> <span m='3481600'>is</span> <span
  m='3482010'>omega</span> <span m='3483450'>b</span> <span
  m='3483900'>to</span> <span m='3484040'>the</span> <span
  m='3484310'>1.000000001.</span> <span m='3488870'>That</span> <span
  m='3488990'>will</span> <span m='3489140'>do.</span> <span
  m='3489840'>In</span> <span m='3489950'>general,</span> <span
  m='3490400'>1</span> <span m='3490670'>plus</span> <span
  m='3490890'>epsilon.</span> <span m='3491360'>Any</span> <span
  m='3491530'>epsilon</span> <span m='3491950'>will</span> <span
  m='3492060'>be</span> <span m='3492180'>fine.</span> <span
  m='3493070'>We</span> <span m='3493090'>just</span> <span
  m='3493280'>mean</span> <span m='3493460'>that</span> <span
  m='3493530'>the</span> <span m='3493750'>number</span> <span
  m='3494250'>of</span> <span m='3494350'>blocks</span> <span
  m='3495540'>is</span> <span m='3495710'>at</span> <span
  m='3495790'>least</span> <span m='3496060'>some</span> <span
  m='3496340'>b</span> <span m='3496560'>to the</span> <span
  m='3496700'>epsilon,</span> <span m='3497650'>where</span> <span
  m='3498090'>epsilon's</span> <span m='3498380'>a</span> <span
  m='3498640'>constant</span> <span m='3499150'>bigger</span> <span
  m='3499390'>than</span> <span m='3499600'>zero.</span> </p><p><span
  m='3502100'>OK,</span> <span m='3502350'>then</span> <span
  m='3502540'>you</span> <span m='3502640'>can</span> <span
  m='3502750'>do</span> <span m='3502850'>cache oblivious</span> <span
  m='3503350'>sorting.</span> <span m='3503700'>Let</span> <span
  m='3503840'>me</span> <span m='3503950'>tell</span> <span
  m='3504150'>you</span> <span m='3504290'>how.</span> <span
  m='3505880'>We</span> <span m='3506030'>want</span> <span
  m='3506380'>to</span> <span m='3506460'>do</span> <span m='3506970'>m</span>
  <span m='3507220'>over</span> <span m='3507410'>b</span> <span
  m='3507600'>way</span> <span m='3507750'>merge</span> <span
  m='3508020'>sort.</span> <span m='3509110'>But</span> <span
  m='3509160'>we</span> <span m='3509260'>don't</span> <span
  m='3509390'>know</span> <span m='3509530'>how</span> <span
  m='3509640'>to</span> <span m='3509740'>do--</span> <span
  m='3510090'>we</span> <span m='3510140'>don't</span> <span
  m='3510260'>know</span> <span m='3510360'>what</span> <span
  m='3510450'>m</span> <span m='3510735'>over</span> <span m='3511020'>b</span>
  <span m='3511250'>is.</span> <span m='3511800'>So</span> <span
  m='3512070'>instead,</span> <span m='3512820'>we're</span> <span
  m='3513020'>going</span> <span m='3513120'>to</span> <span
  m='3513180'>do</span> <span m='3513300'>something</span> <span
  m='3513620'>like</span> <span m='3514770'>n</span> <span m='3515110'>to
  the</span> <span m='3515260'>epsilon</span> <span m='3515820'>way</span> <span
  m='3517890'>merge</span> <span m='3518120'>sort.</span> <span
  m='3523230'>That's</span> <span m='3523420'>a</span> <span
  m='3523550'>so-so</span> <span m='3524150'>interpretation.</span> <span
  m='3524850'>This</span> <span m='3525010'>is</span> <span
  m='3525310'>back</span> <span m='3525530'>to</span> <span
  m='3525610'>your</span> <span m='3525740'>idea</span> <span
  m='3526080'>roughly.</span> <span m='3527030'>We're</span> <span
  m='3527250'>dividing</span> <span m='3528220'>into</span> <span
  m='3529830'>a</span> <span m='3529980'>lot</span> <span m='3530250'>of</span>
  <span m='3530330'>chunks.</span> </p><p><span m='3532220'>And</span> <span
  m='3532460'>then</span> <span m='3532660'>we</span> <span
  m='3532780'>don't</span> <span m='3532900'>know</span> <span
  m='3532970'>how</span> <span m='3533120'>to</span> <span
  m='3533210'>merge</span> <span m='3533470'>them</span> <span
  m='3533640'>anymore</span> <span m='3534130'>because</span> <span
  m='3534320'>we</span> <span m='3534460'>can't</span> <span
  m='3534740'>do</span> <span m='3536810'>regular</span> <span
  m='3537170'>merge</span> <span m='3537860'>with</span> <span m='3538010'>n
  to</span> <span m='3538180'>the</span> <span m='3538280'>epsilon</span> <span
  m='3538590'>chunks</span> <span m='3538930'>it could</span> <span
  m='3539080'>be</span> <span m='3539200'>n to</span> <span m='3539400'>the
  epsilon's</span> <span m='3539790'>too</span> <span m='3539890'>big.</span>
  <span m='3540990'>So</span> <span m='3541290'>how</span> <span
  m='3541390'>do</span> <span m='3541460'>we</span> <span m='3541550'>do</span>
  <span m='3541680'>it?</span> <span m='3541980'>We</span> <span
  m='3542330'>do</span> <span m='3542510'>a</span> <span
  m='3542580'>divide</span> <span m='3542680'>and</span> <span
  m='3543010'>conquer</span> <span m='3543380'>merge.</span> <span
  m='3544770'>This</span> <span m='3544950'>is</span> <span
  m='3545080'>actually</span> <span m='3545410'>called</span> <span
  m='3546960'>funnel</span> <span m='3547270'>sort</span> <span
  m='3549200'>because</span> <span m='3549710'>the</span> <span
  m='3549810'>way</span> <span m='3549990'>you</span> <span
  m='3550100'>do</span> <span m='3550240'>a</span> <span
  m='3550300'>divide</span> <span m='3550590'>and</span> <span
  m='3550680'>conquer</span> <span m='3551510'>merge</span> <span
  m='3552290'>looks</span> <span m='3552810'>kind</span> <span
  m='3552940'>of</span> <span m='3553070'>like</span> <span m='3553230'>a</span>
  <span m='3553290'>funnel.</span> </p><p><span m='3553930'>Actually,</span>
  <span m='3554220'>it looks</span> <span m='3554390'>a</span> <span
  m='3554450'>lot</span> <span m='3554710'>like</span> <span
  m='3554900'>the</span> <span m='3554990'>triangles</span> <span m='3555410'>we
  were</span> <span m='3555560'>drawing</span> <span m='3555850'>earlier.</span>
  <span m='3556910'>It's</span> <span m='3557100'>just</span> <span
  m='3557300'>a</span> <span m='3557360'>lot</span> <span m='3557620'>messier
  to</span> <span m='3558050'>analyze.</span> <span m='3558510'>So</span> <span
  m='3558990'>I'm</span> <span m='3559405'>not</span> <span
  m='3559690'>going</span> <span m='3559770'>to</span> <span
  m='3559840'>do</span> <span m='3559960'>it</span> <span
  m='3560020'>here.</span> <span m='3560360'>It would</span> <span
  m='3560760'>take</span> <span m='3560940'>another</span> <span
  m='3561250'>40</span> <span m='3561510'>minutes</span> <span
  m='3561810'>or</span> <span m='3561880'>so.</span> <span
  m='3563570'>But</span> <span m='3563780'>that's</span> <span
  m='3563980'>some</span> <span m='3564240'>intuition</span> <span
  m='3564770'>of</span> <span m='3564870'>how</span> <span
  m='3565050'>you</span> <span m='3565190'>do</span> <span
  m='3566050'>cache</span> <span m='3566340'>oblivious</span> <span
  m='3567080'>merge</span> <span m='3567310'>sort.</span> <span
  m='3570270'>That's what I</span> <span m='3570720'>want to say</span> <span
  m='3570840'>cache</span> <span m='3571160'>oblivious</span> <span
  m='3572080'>stuff.</span> <span m='3572750'>Oh,</span> <span
  m='3572960'>one</span> <span m='3573100'>more</span> <span
  m='3573240'>thing!</span> </p><p><span m='3575600'>One</span> <span
  m='3575690'>more</span> <span m='3575870'>cool</span> <span
  m='3576050'>thing</span> <span m='3576210'>you</span> <span
  m='3576330'>can</span> <span m='3576470'>do--</span> <span m='3580650'>I'm
  a</span> <span m='3580710'>data</span> <span m='3580940'>structures</span>
  <span m='3581330'>guy.</span> <span m='3581580'>So</span> <span
  m='3582310'>sorting</span> <span m='3582710'>is</span> <span
  m='3582830'>nice.</span> <span m='3583720'>But</span> <span
  m='3583840'>what</span> <span m='3583980'>I</span> <span
  m='3584150'>really</span> <span m='3584410'>like</span> <span
  m='3584650'>are</span> <span m='3584730'>priority</span> <span
  m='3585190'>queues</span> <span m='3586160'>because</span> <span
  m='3586400'>they're</span> <span m='3586550'>more</span> <span
  m='3586760'>general</span> <span m='3587100'>than</span> <span
  m='3587220'>sorting.</span> <span m='3589400'>We</span> <span
  m='3589520'>started</span> <span m='3589900'>out</span> <span
  m='3590080'>by</span> <span m='3590210'>saying,</span> <span
  m='3590580'>hey,</span> <span m='3590730'>look.</span> <span
  m='3590940'>If</span> <span m='3591010'>you</span> <span
  m='3591130'>want</span> <span m='3591250'>to</span> <span
  m='3591300'>sort</span> <span m='3591615'>and you</span> <span
  m='3591930'>use</span> <span m='3592140'>a</span> <span m='3592190'>b</span>
  <span m='3592290'>tree,</span> <span m='3592870'>you</span> <span
  m='3592970'>get</span> <span m='3593100'>a</span> <span
  m='3593280'>really</span> <span m='3593640'>bad</span> <span
  m='3593910'>running</span> <span m='3594170'>time.</span> <span
  m='3595310'>That's</span> <span m='3595720'>weird</span> <span
  m='3596500'>because</span> <span m='3596680'>usually</span> <span
  m='3597400'>BST</span> <span m='3597840'>sort</span> <span
  m='3598130'>is</span> <span m='3598260'>good</span> <span
  m='3598550'>in</span> <span m='3598670'>a</span> <span
  m='3598770'>regular</span> <span m='3599220'>comparison</span> <span
  m='3599660'>model.</span> <span m='3599960'>It's</span> <span
  m='3600060'>n</span> <span m='3600170'>log</span> <span m='3600400'>n.</span>
  </p><p><span m='3601840'>So</span> <span m='3602070'>b</span> <span
  m='3602210'>trees</span> <span m='3602490'>are</span> <span
  m='3602550'>clearly</span> <span m='3602830'>not what</span> <span
  m='3603080'>we</span> <span m='3603220'>want.</span> <span
  m='3603470'>Is</span> <span m='3603610'>there</span> <span
  m='3603690'>some</span> <span m='3603890'>other</span> <span
  m='3604160'>thing</span> <span m='3604380'>we</span> <span
  m='3604450'>want?</span> <span m='3604810'>And it</span> <span
  m='3605030'>turns</span> <span m='3605440'>out,</span> <span
  m='3605600'>yes.</span> <span m='3609330'>You</span> <span
  m='3609510'>can</span> <span m='3609680'>build</span> <span
  m='3609900'>a</span> <span m='3609940'>priority</span> <span
  m='3610390'>queue,</span> <span m='3611670'>which</span> <span
  m='3612020'>supports</span> <span m='3613020'>insert</span> <span
  m='3613910'>and</span> <span m='3614080'>delete</span> <span
  m='3614340'>min</span> <span m='3614670'>and</span> <span m='3614830'>a</span>
  <span m='3614870'>bunch</span> <span m='3615070'>of</span> <span
  m='3615140'>other</span> <span m='3615330'>operations.</span> <span
  m='3616400'>Each</span> <span m='3616590'>of</span> <span
  m='3616650'>those</span> <span m='3616810'>operations</span> <span
  m='3617460'>costs</span> <span m='3618240'>1</span> <span
  m='3618440'>over</span> <span m='3618620'>b</span> <span
  m='3619310'>log</span> <span m='3619710'>base</span> <span
  m='3620090'>m</span> <span m='3620270'>over</span> <span m='3620470'>b</span>
  <span m='3621730'>of</span> <span m='3621860'>n over</span> <span
  m='3622030'>b</span> <span m='3623530'>amortized</span> <span
  m='3627800'>memory</span> <span m='3628255'>transfers--</span> <span
  m='3633570'>a bit</span> <span m='3633630'>of</span> <span
  m='3633700'>a</span> <span m='3633760'>mouthful</span> <span
  m='3634170'>again.</span> </p><p><span m='3634760'>But</span> <span
  m='3635230'>if</span> <span m='3635470'>you</span> <span
  m='3635620'>compare</span> <span m='3635950'>this</span> <span
  m='3636210'>bound</span> <span m='3637340'>with</span> <span
  m='3638720'>this</span> <span m='3638930'>bound,</span> <span
  m='3639420'>it's</span> <span m='3639760'>exactly</span> <span
  m='3640110'>the</span> <span m='3640170'>same.</span> <span
  m='3640390'>But</span> <span m='3640500'>I</span> <span
  m='3640560'>divided</span> <span m='3640920'>by</span> <span
  m='3641100'>n,</span> <span m='3642150'>which</span> <span
  m='3642350'>means</span> <span m='3643660'>if</span> <span
  m='3643900'>I</span> <span m='3644960'>insert</span> <span
  m='3646270'>with</span> <span m='3646440'>this</span> <span
  m='3646610'>cost</span> <span m='3647000'>n</span> <span
  m='3647220'>times,</span> <span m='3648240'>I</span> <span
  m='3648320'>pay</span> <span m='3648520'>the</span> <span
  m='3648620'>sorting</span> <span m='3648910'>bound.</span> <span
  m='3649140'>If</span> <span m='3649250'>I</span> <span
  m='3649320'>delete</span> <span m='3649690'>min</span> <span
  m='3650280'>with</span> <span m='3650670'>this</span> <span
  m='3650920'>bound</span> <span m='3651560'>n</span> <span
  m='3651770'>times,</span> <span m='3652200'>I</span> <span
  m='3652300'>get</span> <span m='3652480'>the</span> <span
  m='3652560'>sorting</span> <span m='3652830'>bound.</span> <span
  m='3653570'>So if I</span> <span m='3653680'>insert</span> <span
  m='3654000'>n</span> <span m='3654130'>times</span> <span m='3654470'>and
  then</span> <span m='3654620'>delete</span> <span m='3654860'>all</span> <span
  m='3654970'>the</span> <span m='3655100'>items</span> <span
  m='3655390'>out,</span> <span m='3656310'>I've</span> <span
  m='3656480'>sorted</span> <span m='3656880'>the</span> <span
  m='3657020'>items</span> <span m='3658520'>in</span> <span
  m='3658820'>sorting</span> <span m='3659220'>bound</span> <span
  m='3659470'>time.</span> <span m='3659790'>So</span> <span
  m='3659940'>this</span> <span m='3660130'>is</span> <span
  m='3660220'>the</span> <span m='3660360'>data</span> <span
  m='3660660'>structure</span> <span m='3661570'>generalization</span> <span
  m='3663040'>of</span> <span m='3663220'>that</span> <span
  m='3663430'>sorting</span> <span m='3663750'>algorithm.</span> </p><p><span
  m='3664640'>Now,</span> <span m='3664790'>this</span> <span
  m='3665060'>is</span> <span m='3665210'>even</span> <span
  m='3665450'>harder</span> <span m='3665780'>to</span> <span
  m='3665880'>do.</span> <span m='3667790'>Originally,</span> <span
  m='3668130'>it was</span> <span m='3668250'>done</span> <span
  m='3668670'>external</span> <span m='3669030'>memory.</span> <span
  m='3669440'>It's</span> <span m='3669610'>called</span> <span
  m='3669820'>buffer</span> <span m='3670070'>trees.</span> <span
  m='3671000'>Then</span> <span m='3671550'>we</span> <span
  m='3671740'>did</span> <span m='3671880'>it</span> <span
  m='3672230'>cache</span> <span m='3672580'>obliviously.</span> <span
  m='3673020'>It's</span> <span m='3673170'>called</span> <span
  m='3673580'>cache</span> <span m='3673840'>oblivious</span> <span
  m='3674120'>priority</span> <span m='3674500'>queues.</span> <span
  m='3674800'>We</span> <span m='3674890'>weren't</span> <span
  m='3674990'>very</span> <span m='3675200'>creative.</span> <span
  m='3676950'>But</span> <span m='3677180'>it</span> <span
  m='3677300'>can</span> <span m='3677500'>be</span> <span
  m='3677600'>done.</span> <span m='3677960'>And,</span> <span
  m='3678140'>again,</span> <span m='3678340'>if</span> <span
  m='3678450'>you</span> <span m='3678570'>want</span> <span
  m='3678700'>to</span> <span m='3678760'>learn</span> <span
  m='3679130'>more,</span> <span m='3679910'>you</span> <span
  m='3680000'>should</span> <span m='3680200'>take</span> <span
  m='3681210'>6851,</span> <span m='3682910'>Advanced</span> <span
  m='3683260'>Data</span> <span m='3683440'>Structures,</span> <span
  m='3685010'>which</span> <span m='3685300'>leads</span> <span
  m='3685500'>us</span> <span m='3685610'>into</span> <span
  m='3685790'>the</span> <span m='3685890'>next</span> <span
  m='3686130'>topic,</span> <span m='3686970'>what</span> <span
  m='3687130'>class</span> <span m='3687430'>you</span> <span
  m='3687530'>should</span> <span m='3687700'>take</span> <span
  m='3687920'>next--</span> <span m='3690050'>classes,</span> <span
  m='3691060'>that's what</span> <span m='3691190'>I mean to</span> <span
  m='3691590'>say.</span> </p><p><span m='3704510'>So</span> <span
  m='3704730'>a</span> <span m='3704760'>lot</span> <span m='3704930'>of</span>
  <span m='3705000'>bias</span> <span m='3705350'>here.</span> <span
  m='3705610'>And</span> <span m='3705990'>well</span> <span
  m='3706770'>I'm</span> <span m='3706910'>just</span> <span
  m='3707060'>going</span> <span m='3707180'>to</span> <span
  m='3707240'>give</span> <span m='3707380'>a</span> <span
  m='3707420'>lot</span> <span m='3707610'>of</span> <span
  m='3707660'>classes.</span> <span m='3708280'>There's</span> <span
  m='3708640'>a</span> <span m='3708700'>lot</span> <span m='3708960'>of</span>
  <span m='3709010'>them.</span> <span m='3709850'>I</span> <span
  m='3709950'>believe</span> <span m='3710280'>this</span> <span
  m='3710470'>is</span> <span m='3710610'>in</span> <span
  m='3710760'>roughly</span> <span m='3711110'>numerical</span> <span
  m='3711660'>order</span> <span m='3712740'>almost.</span> <span
  m='3713705'>It</span> <span m='3714020'>changed</span> <span
  m='3714300'>a</span> <span m='3714340'>little</span> <span
  m='3714500'>bit--</span> <span m='3717170'>so</span> <span
  m='3717380'>many</span> <span m='3717580'>classes.</span> <span
  m='3720465'>Are you</span> <span m='3720960'>OK</span> <span
  m='3721140'>with</span> <span m='3721270'>numbers,</span> <span m='3721620'>or
  do you</span> <span m='3721740'>want</span> <span m='3722030'>titles?</span>
  </p><p><span m='3726030'>The</span> <span m='3726270'>obvious</span> <span
  m='3726650'>follow-on</span> <span m='3727150'>course</span> <span
  m='3727540'>to</span> <span m='3727670'>this</span> <span
  m='3727870'>class</span> <span m='3728300'>is</span> <span
  m='3728520'>6854,</span> <span m='3729380'>which</span> <span
  m='3729540'>is</span> <span m='3729650'>Advanced</span> <span
  m='3730130'>Algorithms.</span> <span m='3730810'>It's</span> <span
  m='3730990'>the</span> <span m='3731140'>first</span> <span
  m='3731690'>graduate</span> <span m='3732600'>algorithms</span> <span
  m='3733010'>class.</span> <span m='3733330'>This</span> <span
  m='3733470'>is</span> <span m='3733580'>the</span> <span
  m='3733730'>last</span> <span m='3734310'>undergraduate</span> <span
  m='3734870'>class,</span> <span m='3735210'>roughly</span> <span
  m='3735540'>speaking,</span> <span m='3736500'>with the</span> <span
  m='3736640'>exception of</span> <span m='3737020'>6047.</span> <span
  m='3737830'>But</span> <span m='3738640'>in terms</span> <span
  m='3738940'>of</span> <span m='3739010'>straight,</span> <span
  m='3739500'>general</span> <span m='3739870'>algorithms,</span> <span
  m='3740420'>this</span> <span m='3740590'>would</span> <span
  m='3740680'>be</span> <span m='3740840'>the</span> <span
  m='3740980'>natural</span> <span m='3741280'>class.</span> <span
  m='3742180'>It's only</span> <span m='3742320'>in</span> <span
  m='3742410'>the</span> <span m='3742470'>fall--</span> <span
  m='3742880'>sadly,</span> <span m='3743150'>not</span> <span
  m='3743340'>next</span> <span m='3743580'>fall.</span> <span
  m='3744630'>But</span> <span m='3745210'>in</span> <span
  m='3745330'>general,</span> <span m='3745800'>it's</span> <span
  m='3745870'>a</span> <span m='3745910'>cool</span> <span
  m='3746080'>class.</span> <span m='3746410'>It's</span> <span m='3746540'>a
  very</span> <span m='3746740'>broad</span> <span m='3747060'>overview</span>
  <span m='3747350'>of</span> <span m='3747420'>algorithms</span> <span
  m='3747840'>but</span> <span m='3748190'>much</span> <span
  m='3748610'>more</span> <span m='3751060'>hard</span> <span
  m='3751310'>core,</span> <span m='3751720'>I</span> <span
  m='3751830'>guess.</span> <span m='3753300'>It's</span> <span
  m='3753930'>an</span> <span m='3754150'>intense</span> <span
  m='3754460'>class</span> <span m='3754740'>but</span> <span
  m='3754850'>covers</span> <span m='3755040'>a</span> <span
  m='3755130'>lot</span> <span m='3755360'>of</span> <span
  m='3755440'>fields,</span> <span m='3756090'>a</span> <span
  m='3756140'>lot</span> <span m='3756340'>of</span> <span m='3756510'>areas
  of</span> <span m='3756910'>algorithms.</span> </p><p><span
  m='3757790'>Then</span> <span m='3758010'>all</span> <span
  m='3758230'>the</span> <span m='3758320'>other</span> <span
  m='3758470'>ones</span> <span m='3758680'>I'm going to list</span> <span
  m='3759120'>are</span> <span m='3759260'>more</span> <span
  m='3759470'>specialized.</span> <span m='3760330'>So</span> <span
  m='3760930'>6047</span> <span m='3762210'>is</span> <span
  m='3762430'>Computational</span> <span m='3762970'>Biology.</span> <span
  m='3763570'>So</span> <span m='3763700'>if</span> <span
  m='3763760'>you're</span> <span m='3763850'>interested</span> <span
  m='3764120'>in</span> <span m='3764170'>biology,</span> <span
  m='3764430'>you</span> <span m='3764690'>want</span> <span
  m='3764870'>algorithms</span> <span m='3765230'>applied</span> <span
  m='3765490'>to</span> <span m='3765590'>biology.</span> <span
  m='3766400'>That's a</span> <span m='3766640'>cool</span> <span
  m='3766790'>class.</span> <span m='3767160'>It's</span> <span
  m='3767340'>also</span> <span m='3767580'>an</span> <span
  m='3767640'>undergrad</span> <span m='3768000'>class.</span> <span
  m='3768700'>Everything</span> <span m='3769080'>else</span> <span
  m='3769300'>here--</span> <span m='3769720'>I</span> <span
  m='3769800'>mean,</span> <span m='3770070'>you</span> <span
  m='3770160'>know</span> <span m='3770280'>the</span> <span
  m='3770380'>story.</span> <span m='3771040'>You</span> <span
  m='3771160'>take</span> <span m='3771500'>grad</span> <span
  m='3771900'>classes</span> <span m='3772230'>all</span> <span
  m='3772330'>the</span> <span m='3772430'>time,</span> <span
  m='3772960'>or</span> <span m='3773130'>you</span> <span
  m='3773250'>will</span> <span m='3773870'>soon</span> <span
  m='3775530'>if</span> <span m='3775690'>you</span> <span
  m='3775810'>want</span> <span m='3775920'>to</span> <span
  m='3775980'>do</span> <span m='3776100'>more</span> <span
  m='3776300'>algorithms.</span> </p><p><span m='3778020'>So</span> <span
  m='3779290'>6850</span> <span m='3780700'>is</span> <span
  m='3780950'>computational</span> <span m='3781590'>geometry.</span> <span
  m='3782270'>I think it's</span> <span m='3782500'>called</span> <span
  m='3782690'>Geometric</span> <span m='3783170'>Algorithms.</span> <span
  m='3784290'>So</span> <span m='3784430'>we've</span> <span
  m='3784550'>seen</span> <span m='3784720'>a</span> <span
  m='3784760'>couple</span> <span m='3785060'>examples,</span> <span
  m='3785460'>like</span> <span m='3785600'>the</span> <span
  m='3785680'>convex</span> <span m='3786100'>hull</span> <span
  m='3786330'>divide-and-conquer</span> <span m='3787010'>algorithm</span> <span
  m='3788380'>and</span> <span m='3788850'>the</span> <span
  m='3788970'>range</span> <span m='3789320'>trees.</span> <span
  m='3790420'>Those</span> <span m='3790640'>are</span> <span
  m='3790710'>two</span> <span m='3790850'>examples</span> <span
  m='3791300'>of</span> <span m='3791430'>geometric</span> <span
  m='3791890'>algorithms</span> <span m='3792270'>where you</span> <span
  m='3792430'>have</span> <span m='3792600'>points</span> <span
  m='3793100'>and</span> <span m='3793220'>lines</span> <span
  m='3793650'>and</span> <span m='3793770'>stuff--</span> <span
  m='3794120'>maybe</span> <span m='3794350'>in</span> <span
  m='3794420'>two</span> <span m='3794550'>dimensions,</span> <span
  m='3794970'>maybe</span> <span m='3795180'>in</span> <span
  m='3795240'>three</span> <span m='3795410'>dimensions,</span> <span
  m='3795840'>maybe</span> <span m='3796130'>log</span> <span
  m='3796470'>n</span> <span m='3796580'>dimensions.</span> <span
  m='3798590'>If</span> <span m='3798740'>you</span> <span
  m='3798830'>like</span> <span m='3798970'>that</span> <span
  m='3799170'>stuff,</span> <span m='3799540'>you should take</span> <span
  m='3799800'>computational</span> <span m='3800400'>geometry.</span> <span
  m='3801980'>This</span> <span m='3802310'>is</span> <span
  m='3802450'>the</span> <span m='3802580'>devil</span> <span
  m='3802840'>that</span> <span m='3802940'>lad me</span> <span
  m='3803120'>into</span> <span m='3803390'>algorithms</span> <span
  m='3803830'>in</span> <span m='3803900'>the</span> <span
  m='3803970'>first</span> <span m='3804220'>place.</span> <span
  m='3804830'>Cool</span> <span m='3804930'>stuff.</span> </p><p><span
  m='3806640'>6849</span> <span m='3807770'>is</span> <span
  m='3807980'>my</span> <span m='3808150'>class</span> <span
  m='3808580'>on</span> <span m='3808920'>folding</span> <span
  m='3809560'>algorithms.</span> <span m='3810090'>This</span> <span
  m='3810240'>is</span> <span m='3810390'>a</span> <span
  m='3811860'>special</span> <span m='3812260'>type</span> <span
  m='3812700'>of</span> <span m='3813010'>geometric</span> <span
  m='3813430'>algorithms</span> <span m='3813830'>where</span> <span
  m='3814020'>we</span> <span m='3814190'>think</span> <span
  m='3814370'>about</span> <span m='3815070'>paper</span> <span
  m='3815340'>folding</span> <span m='3816000'>and</span> <span
  m='3816380'>robotic</span> <span m='3816800'>arm</span> <span
  m='3817020'>folding</span> <span m='3817710'>and</span> <span
  m='3817950'>protein</span> <span m='3818260'>folding</span> <span
  m='3818720'>and</span> <span m='3818810'>things</span> <span
  m='3818990'>like</span> <span m='3819120'>that.</span> <span
  m='3820440'>So</span> <span m='3820470'>that's</span> <span
  m='3820700'>a</span> <span m='3820750'>bit</span> <span m='3820920'>of
  a</span> <span m='3821030'>specialized</span> <span m='3821540'>class.</span>
  <span m='3821970'>6851,</span> <span m='3822670'>I've</span> <span
  m='3822760'>mentioned</span> <span m='3823100'>three</span> <span
  m='3823380'>times</span> <span m='3823770'>now--</span> <span
  m='3824580'>Advanced</span> <span m='3824930'>Data</span> <span
  m='3825140'>Structures.</span> <span m='3826720'>Then</span> <span
  m='3826970'>we've</span> <span m='3827130'>got</span> <span
  m='3827450'>6852,</span> <span m='3828382'>its</span> <span
  m='3828850'>neighbor.</span> <span m='3829660'>This</span> <span
  m='3829850'>is</span> <span m='3830130'>Nancy's</span> <span
  m='3830530'>Distributed</span> <span m='3831020'>Algorithms</span> <span
  m='3831460'>class.</span> <span m='3831860'>So if</span> <span
  m='3831990'>you</span> <span m='3832110'>liked</span> <span
  m='3832430'>the</span> <span m='3832580'>week</span> <span
  m='3832790'>of</span> <span m='3832880'>distributed</span> <span
  m='3833340'>algorithms,</span> <span m='3833730'>there's</span> <span
  m='3833880'>a</span> <span m='3833930'>whole</span> <span
  m='3834170'>class</span> <span m='3834500'>on</span> <span
  m='3834650'>it.</span> <span m='3835970'>She</span> <span
  m='3836170'>wrote</span> <span m='3836340'>the</span> <span
  m='3836410'>textbook</span> <span m='3836780'>for it.</span> </p><p><span
  m='3838370'>Then</span> <span m='3838770'>there's</span> <span
  m='3838930'>6853.</span> <span m='3841660'>This</span> <span
  m='3841830'>is</span> <span m='3841970'>Algorithmic</span> <span
  m='3842460'>Game</span> <span m='3842780'>Theory.</span> <span
  m='3843570'>If</span> <span m='3843780'>you</span> <span
  m='3843920'>care</span> <span m='3844190'>about</span> <span
  m='3845150'>algorithms</span> <span m='3846820'>involving</span> <span
  m='3847290'>multiple</span> <span m='3847710'>players--</span> <span
  m='3848300'>and</span> <span m='3848460'>the</span> <span
  m='3848540'>players</span> <span m='3849020'>are</span> <span
  m='3849180'>each</span> <span m='3849370'>selfish.</span> <span
  m='3850060'>And</span> <span m='3850260'>they</span> <span
  m='3850370'>have</span> <span m='3850530'>no</span> <span
  m='3850750'>reason</span> <span m='3851020'>to</span> <span
  m='3851100'>tell</span> <span m='3851270'>you</span> <span
  m='3851350'>the</span> <span m='3851460'>truth.</span> <span
  m='3851780'>And</span> <span m='3851930'>still</span> <span
  m='3852170'>you</span> <span m='3852270'>want</span> <span
  m='3852380'>to</span> <span m='3852440'>compute</span> <span
  m='3852800'>something</span> <span m='3853620'>like</span> <span
  m='3854120'>minimum</span> <span m='3854440'>spanning</span> <span
  m='3854790'>tree,</span> <span m='3855040'>or</span> <span
  m='3855110'>pick</span> <span m='3855270'>your</span> <span
  m='3855370'>favorite</span> <span m='3855680'>thing.</span> <span
  m='3856270'>Everyone's</span> <span m='3856670'>lying</span> <span
  m='3857030'>about</span> <span m='3857240'>the</span> <span
  m='3857340'>edge</span> <span m='3857500'>weights.</span> <span
  m='3857780'>And</span> <span m='3857870'>still</span> <span
  m='3858150'>you</span> <span m='3858280'>want</span> <span
  m='3858410'>to</span> <span m='3858460'>figure</span> <span
  m='3858770'>out</span> <span m='3859180'>how</span> <span
  m='3859360'>to</span> <span m='3859480'>design</span> <span
  m='3860510'>a</span> <span m='3860620'>mechanism</span> <span
  m='3861390'>like</span> <span m='3861580'>an</span> <span
  m='3862070'>auction</span> <span m='3862560'>so</span> <span
  m='3862720'>that</span> <span m='3862840'>you</span> <span
  m='3862960'>actually</span> <span m='3863410'>end</span> <span
  m='3863580'>up</span> <span m='3863680'>buying</span> <span
  m='3864070'>a</span> <span m='3864110'>minimum</span> <span
  m='3864380'>spanning</span> <span m='3864710'>tree.</span> <span
  m='3865170'>You</span> <span m='3865300'>can</span> <span
  m='3865430'>do</span> <span m='3865570'>that.</span> <span
  m='3866260'>And</span> <span m='3866450'>if</span> <span
  m='3866540'>you</span> <span m='3866630'>want</span> <span
  m='3866750'>to</span> <span m='3866790'>know</span> <span
  m='3866900'>how,</span> <span m='3867160'>you</span> <span m='3867370'>should
  take</span> <span m='3867540'>6853.</span> </p><p><span m='3869876'>What else
  do</span> <span m='3870260'>we</span> <span m='3870330'>have?</span> <span
  m='3872290'>6855</span> <span m='3874470'>is</span> <span
  m='3874680'>Network</span> <span m='3875000'>Optimization.</span> <span
  m='3875860'>So</span> <span m='3876510'>this</span> <span
  m='3876670'>is</span> <span m='3876770'>like</span> <span
  m='3876920'>the</span> <span m='3877000'>natural</span> <span
  m='3877330'>follow</span> <span m='3877650'>on</span> <span
  m='3877770'>of</span> <span m='3877890'>network</span> <span
  m='3878220'>flows.</span> <span m='3878750'>If you</span> <span
  m='3878900'>like</span> <span m='3879040'>network</span> <span
  m='3879300'>flows</span> <span m='3879620'>and</span> <span
  m='3879940'>things</span> <span m='3880110'>like</span> <span
  m='3880250'>that,</span> <span m='3880900'>there's</span> <span
  m='3881140'>a</span> <span m='3881190'>whole</span> <span
  m='3881690'>universe</span> <span m='3882140'>called</span> <span
  m='3882290'>network</span> <span m='3882570'>optimization.</span> <span
  m='3883760'>It has</span> <span m='3884060'>lots</span> <span
  m='3884320'>of</span> <span m='3884410'>fancy,</span> <span
  m='3885210'>basically,</span> <span m='3885510'>graph</span> <span
  m='3885780'>algorithms</span> <span m='3886160'>where</span> <span
  m='3886280'>you're</span> <span m='3886390'>minimizing</span> <span
  m='3886960'>or</span> <span m='3887010'>maximizing</span> <span
  m='3887640'>something.</span> <span m='3891090'>OK,</span> <span
  m='3891200'>this</span> <span m='3891360'>is</span> <span
  m='3892250'>fortuitous</span> <span m='3892870'>alignment.</span> <span
  m='3893930'>6856</span> <span m='3894770'>is</span> <span
  m='3894890'>kind</span> <span m='3895220'>of</span> <span m='3896100'>a</span>
  <span m='3896160'>friend</span> <span m='3896710'>of</span> <span
  m='3897040'>6854.</span> <span m='3898080'>These</span> <span
  m='3898230'>are</span> <span m='3898290'>both</span> <span
  m='3898520'>taught</span> <span m='3898750'>by</span> <span
  m='3899140'>David</span> <span m='3899690'>Carter.</span> </p><p><span
  m='3900660'>This</span> <span m='3900910'>is</span> <span
  m='3901150'>Randomized</span> <span m='3901780'>Algorithms.</span> <span
  m='3902540'>So</span> <span m='3902670'>this</span> <span
  m='3902850'>is</span> <span m='3902990'>a</span> <span m='3903050'>more</span>
  <span m='3903250'>specialized</span> <span m='3904660'>approach.</span> <span
  m='3906180'>I don't</span> <span m='3906240'>think</span> <span
  m='3906550'>you</span> <span m='3906660'>need</span> <span
  m='3907040'>one</span> <span m='3907250'>to</span> <span
  m='3907380'>take</span> <span m='3907550'>the</span> <span
  m='3907660'>other.</span> <span m='3907890'>But</span> <span
  m='3908550'>this</span> <span m='3908750'>is</span> <span
  m='3908820'>the</span> <span m='3908900'>usual</span> <span
  m='3909150'>starting</span> <span m='3909480'>class.</span> <span
  m='3909920'>And</span> <span m='3910210'>this</span> <span
  m='3910390'>is</span> <span m='3910610'>specifically</span> <span
  m='3911360'>about</span> <span m='3912210'>how</span> <span
  m='3912460'>randomization</span> <span m='3913140'>makes</span> <span
  m='3913350'>algorithms</span> <span m='3913820'>faster</span> <span
  m='3914410'>or</span> <span m='3914490'>simpler.</span> <span
  m='3915180'>Usually</span> <span m='3915470'>they're</span> <span
  m='3915620'>harder</span> <span m='3915950'>to</span> <span
  m='3916070'>analyze.</span> <span m='3916720'>But</span> <span
  m='3916830'>you</span> <span m='3916930'>get</span> <span
  m='3917120'>very</span> <span m='3917320'>simple</span> <span
  m='3917640'>algorithms</span> <span m='3918090'>that</span> <span
  m='3918240'>run</span> <span m='3918440'>just</span> <span
  m='3918680'>as</span> <span m='3918770'>well</span> <span
  m='3919070'>as</span> <span m='3919250'>their</span> <span
  m='3919400'>deterministic</span> <span m='3920030'>versions.</span> <span
  m='3920810'>Sometimes</span> <span m='3921200'>you</span> <span
  m='3921310'>can</span> <span m='3921410'>do</span> <span
  m='3921560'>even</span> <span m='3921800'>better</span> <span
  m='3922650'>than</span> <span m='3922790'>the</span> <span
  m='3922900'>deterministic</span> <span m='3923410'>versions.</span>
  </p><p><span m='3924900'>Then</span> <span m='3925180'>there's</span> <span
  m='3925420'>the</span> <span m='3925500'>security</span> <span
  m='3926820'>universe.</span> <span m='3927750'>This</span> <span
  m='3927840'>is</span> <span m='3928010'>a</span> <span
  m='3928720'>great</span> <span m='3928970'>numerical</span> <span
  m='3929660'>coincidence--</span> <span m='3930700'>probably</span> <span
  m='3930960'>not</span> <span m='3931120'>a</span> <span
  m='3931170'>coincidence.</span> <span m='3931730'>But</span> <span
  m='3931890'>there's</span> <span m='3932050'>6857</span> <span
  m='3933040'>and</span> <span m='3933210'>6875.</span> <span m='3934990'>I
  have</span> <span m='3935160'>to</span> <span m='3935320'>remember</span>
  <span m='3935460'>which</span> <span m='3935640'>is</span> <span
  m='3935740'>which.</span> <span m='3936360'>6857</span> <span
  m='3937430'>is</span> <span m='3937600'>Applied</span> <span
  m='3938040'>Cryptography.</span> <span m='3938680'>6875</span> <span
  m='3939360'>is</span> <span m='3939560'>Theoretical</span> <span
  m='3940000'>Cryptography,</span> <span m='3940720'>at</span> <span
  m='3940770'>least</span> <span m='3941030'>as</span> <span
  m='3941220'>I</span> <span m='3941330'>read</span> <span
  m='3941550'>it.</span> <span m='3942530'>So</span> <span
  m='3943160'>they</span> <span m='3943280'>have</span> <span
  m='3943490'>similar</span> <span m='3943940'>topics.</span> <span
  m='3944360'>But</span> <span m='3944520'>this</span> <span
  m='3944670'>is</span> <span m='3944790'>more</span> <span
  m='3945120'>thinking</span> <span m='3945390'>about</span> <span
  m='3945670'>how</span> <span m='3945810'>you</span> <span
  m='3945980'>really</span> <span m='3946380'>achieve</span> <span
  m='3946690'>security</span> <span m='3947510'>and</span> <span
  m='3947770'>crypto</span> <span m='3948010'>systems</span> <span
  m='3948450'>and</span> <span m='3948540'>things</span> <span
  m='3948710'>like</span> <span m='3948830'>that.</span> <span
  m='3949560'>And</span> <span m='3949720'>this</span> <span
  m='3949870'>one</span> <span m='3950050'>is</span> <span
  m='3950180'>more</span> <span m='3951750'>algorithm</span> <span
  m='3952290'>based.</span> <span m='3952740'>And</span> <span
  m='3952840'>what</span> <span m='3953010'>kind</span> <span
  m='3953210'>of</span> <span m='3953330'>theoretical</span> <span
  m='3953740'>assumptions</span> <span m='3954170'>do you</span> <span
  m='3954300'>need</span> <span m='3954470'>to</span> <span
  m='3954540'>prove</span> <span m='3954830'>certain</span> <span
  m='3955250'>things?</span> <span m='3955440'>This is more</span> <span
  m='3955650'>proof</span> <span m='3955940'>based.</span> <span
  m='3956210'>And</span> <span m='3956480'>this is</span> <span
  m='3957450'>more</span> <span m='3957910'>connecting</span> <span
  m='3958320'>to</span> <span m='3958430'>systems,</span> <span
  m='3959970'>both</span> <span m='3960750'>great</span> <span
  m='3961470'>topics.</span> </p><p><span m='3963840'>And</span> <span
  m='3964120'>I</span> <span m='3964170'>have</span> <span
  m='3964360'>one</span> <span m='3964530'>more</span> <span
  m='3964730'>out</span> <span m='3964840'>of</span> <span
  m='3964940'>order,</span> <span m='3965760'>I guess</span> <span
  m='3965940'>just</span> <span m='3966090'>because</span> <span
  m='3966250'>it's</span> <span m='3966400'>a</span> <span
  m='3966460'>recent</span> <span m='3966730'>addition.</span> <span
  m='3967520'>6816</span> <span m='3969690'>is</span> <span
  m='3969870'>Multicore</span> <span m='3970530'>Programming.</span> <span
  m='3971475'>That</span> <span m='3971850'>has</span> <span
  m='3972010'>a</span> <span m='3972070'>lot</span> <span m='3972230'>of</span>
  <span m='3972320'>algorithms,</span> <span m='3972730'>too.</span> <span
  m='3973950'>And</span> <span m='3975260'>this</span> <span
  m='3975490'>is</span> <span m='3975580'>all</span> <span
  m='3975710'>about</span> <span m='3976090'>parallel</span> <span
  m='3976760'>computation.</span> <span m='3977980'>When</span> <span
  m='3978120'>you</span> <span m='3978170'>have</span> <span
  m='3978340'>multiple</span> <span m='3978700'>cores</span> <span
  m='3979000'>on</span> <span m='3979070'>your</span> <span
  m='3979180'>computer,</span> <span m='3979890'>how</span> <span
  m='3980100'>can</span> <span m='3980210'>you</span> <span
  m='3980340'>compute</span> <span m='3980770'>things</span> <span
  m='3981130'>like</span> <span m='3981380'>these</span> <span
  m='3981570'>things</span> <span m='3982150'>faster</span> <span
  m='3982790'>than</span> <span m='3982940'>everything</span> <span
  m='3983250'>we've</span> <span m='3983370'>done?</span> <span
  m='3984340'>It's</span> <span m='3984720'>yet</span> <span
  m='3984980'>another</span> <span m='3985260'>universe</span> <span
  m='3985690'>that</span> <span m='3985800'>we</span> <span
  m='3985880'>haven't</span> <span m='3986100'>even</span> <span
  m='3986290'>touched</span> <span m='3986610'>on in</span> <span
  m='3986850'>this</span> <span m='3986980'>class.</span> <span
  m='3987670'>But</span> <span m='3987820'>it's</span> <span
  m='3987980'>cool</span> <span m='3988140'>stuff,</span> <span
  m='3988840'>and</span> <span m='3989050'>you</span> <span
  m='3989140'>might</span> <span m='3989300'>consider</span> <span
  m='3989660'>it.</span> </p><p><span m='3991030'>Then</span> <span
  m='3991360'>we</span> <span m='3991500'>move</span> <span
  m='3991740'>on</span> <span m='3991960'>to</span> <span
  m='3993160'>other</span> <span m='3993390'>theory</span> <span
  m='3993680'>classes.</span> <span m='3994890'>That</span> <span
  m='3995090'>was</span> <span m='3995210'>algorithms.</span> <span
  m='3997100'>Some</span> <span m='3997210'>more</span> <span
  m='3997520'>obvious</span> <span m='3997850'>candidates,</span> <span
  m='3998330'>if</span> <span m='3998440'>you</span> <span
  m='3998570'>like</span> <span m='3998860'>pure</span> <span
  m='3999010'>theory,</span> <span m='4000080'>are</span> <span
  m='4000580'>6045</span> <span m='4001420'>6840.</span> <span
  m='4002050'>This</span> <span m='4002240'>is</span> <span
  m='4002400'>the</span> <span m='4002530'>undergrad</span> <span
  m='4002880'>version.</span> <span m='4003230'>This is the</span> <span
  m='4003340'>grad</span> <span m='4003550'>version.</span> <span
  m='4003800'>Although,</span> <span m='4003900'>by now</span> <span
  m='4004195'>the</span> <span m='4004490'>classes</span> <span
  m='4004860'>are</span> <span m='4004960'>quite</span> <span
  m='4005240'>different.</span> <span m='4005720'>So</span> <span
  m='4005790'>they</span> <span m='4006050'>cover</span> <span
  m='4006290'>different</span> <span m='4006550'>things.</span> <span
  m='4007300'>Some</span> <span m='4007330'>of</span> <span
  m='4007400'>you</span> <span m='4007500'>are</span> <span
  m='4007530'>already</span> <span m='4007770'>taking</span> <span
  m='4008070'>6045.</span> <span m='4008790'>It's</span> <span
  m='4008900'>right</span> <span m='4009050'>before</span> <span
  m='4009330'>this</span> <span m='4009510'>lecture.</span> </p><p><span
  m='4010550'>These</span> <span m='4010700'>are</span> <span
  m='4010810'>general</span> <span m='4012950'>theory</span> <span
  m='4013230'>of</span> <span m='4013320'>computation</span> <span
  m='4013980'>classes,</span> <span m='4014430'>atomita,</span> <span
  m='4015190'>complexity,</span> <span m='4015970'>things</span> <span
  m='4016190'>like</span> <span m='4016360'>that.</span> <span
  m='4017240'>If</span> <span m='4017370'>you</span> <span
  m='4017490'>like</span> <span m='4017770'>the</span> <span
  m='4018040'>brief</span> <span m='4018470'>NP</span> <span
  m='4018750'>completeness</span> <span m='4019260'>lecture,</span> <span
  m='4020230'>then</span> <span m='4020450'>you</span> <span
  m='4020550'>might</span> <span m='4020770'>like</span> <span
  m='4021100'>this</span> <span m='4021200'>stuff.</span> <span
  m='4022150'>There's</span> <span m='4022510'>so</span> <span
  m='4022740'>many</span> <span m='4022950'>more</span> <span
  m='4023130'>complexity</span> <span m='4023570'>classes</span> <span
  m='4023990'>and</span> <span m='4024090'>other</span> <span
  m='4024280'>cool</span> <span m='4024480'>things</span> <span
  m='4024690'>you</span> <span m='4024810'>can</span> <span
  m='4024950'>do.</span> </p><p><span m='4026060'>If</span> <span
  m='4026130'>you</span> <span m='4026260'>really</span> <span
  m='4026550'>like</span> <span m='4026760'>it,</span> <span
  m='4026880'>there's</span> <span m='4027030'>advanced</span> <span
  m='4027400'>complexity</span> <span m='4027900'>theory.</span> <span
  m='4029190'>There's,</span> <span m='4030170'>basically,</span> <span
  m='4030590'>randomized</span> <span m='4031160'>complexity</span> <span
  m='4031670'>theory--</span> <span m='4032280'>how</span> <span
  m='4032500'>randomness</span> <span m='4032930'>affects</span> <span
  m='4033640'>just</span> <span m='4033880'>the</span> <span
  m='4033960'>complexity</span> <span m='4034360'>side,</span> <span
  m='4034620'>not</span> <span m='4034810'>algorithms.</span> <span
  m='4035950'>Then</span> <span m='4036470'>there's</span> <span
  m='4037310'>quantum</span> <span m='4037810'>complexity</span> <span
  m='4038340'>theory</span> <span m='4039330'>if you</span> <span
  m='4039440'>care</span> <span m='4039610'>about</span> <span
  m='4039790'>quantum</span> <span m='4040060'>computers.</span> <span
  m='4041430'>As</span> <span m='4041660'>Scott</span> <span
  m='4042030'>says,</span> <span m='4042320'>it's</span> <span
  m='4043020'>proving</span> <span m='4043620'>things</span> <span
  m='4043800'>you</span> <span m='4043890'>can't</span> <span
  m='4044210'>do</span> <span m='4044800'>with</span> <span
  m='4044970'>computers</span> <span m='4045450'>we</span> <span
  m='4045550'>don't</span> <span m='4045670'>have.</span> </p><p><span
  m='4046110'>[LAUGHTER]</span> </p><p></p><p><span m='4049900'>It's</span>
  <span m='4050080'>complexity.</span> <span m='4050610'>It's</span> <span
  m='4050740'>all</span> <span m='4050870'>about</span> <span
  m='4051080'>lower</span> <span m='4051300'>bounds.</span> <span
  m='4052790'>And</span> <span m='4052980'>then</span> <span
  m='4053140'>there's</span> <span m='4053370'>coding</span> <span
  m='4053710'>theory,</span> <span m='4054140'>which</span> <span
  m='4054380'>is</span> <span m='4054490'>another</span> <span
  m='4054760'>universe.</span> <span m='4055970'>It's</span> <span
  m='4056190'>actually</span> <span m='4056650'>closely</span> <span
  m='4057160'>related</span> <span m='4057600'>to--</span> <span
  m='4058580'>it</span> <span m='4058710'>comes</span> <span
  m='4059030'>out</span> <span m='4059190'>of</span> <span
  m='4059620'>signals</span> <span m='4060170'>and</span> <span
  m='4060380'>systems</span> <span m='4060930'>and</span> <span
  m='4061280'>electrical</span> <span m='4061670'>engineering.</span> <span
  m='4062410'>But</span> <span m='4062710'>by</span> <span
  m='4062820'>now</span> <span m='4063040'>it's</span> <span
  m='4063620'>closely</span> <span m='4063970'>related</span> <span
  m='4064310'>to</span> <span m='4064470'>complexity</span> <span
  m='4064980'>theory.</span> <span m='4065350'>You</span> <span
  m='4065500'>can</span> <span m='4065610'>use</span> <span
  m='4066270'>bounds</span> <span m='4066550'>on</span> <span
  m='4066650'>codes</span> <span m='4067010'>to</span> <span
  m='4067090'>prove</span> <span m='4067380'>things</span> <span
  m='4067670'>about</span> <span m='4068900'>complexity</span> <span
  m='4069310'>theory.</span> <span m='4069640'>Anyway,</span> <span
  m='4071620'>choose</span> <span m='4071810'>your</span> <span
  m='4071940'>own</span> <span m='4072020'>adventure.</span> </p><p><span
  m='4074220'>Now</span> <span m='4075240'>I</span> <span
  m='4075400'>have</span> <span m='4075550'>one</span> <span
  m='4075870'>last</span> <span m='4076170'>topic,</span> <span
  m='4076600'>which</span> <span m='4076630'>was</span> <span
  m='4076740'>not</span> <span m='4076950'>on</span> <span
  m='4077030'>the</span> <span m='4077140'>outline.</span> <span
  m='4077440'>This</span> <span m='4077560'>is</span> <span m='4077660'>a</span>
  <span m='4077710'>bit</span> <span m='4077840'>of</span> <span
  m='4077930'>a</span> <span m='4077990'>surprise.</span> <span m='4081140'>It's
  a</span> <span m='4081250'>boring</span> <span m='4081470'>surprise.</span>
  <span m='4082000'>I</span> <span m='4082160'>want</span> <span
  m='4082320'>to</span> <span m='4082400'>remind</span> <span
  m='4082780'>you</span> <span m='4083660'>to</span> <span
  m='4083880'>fill</span> <span m='4084140'>out</span> <span
  m='4084650'>student</span> <span m='4084910'>evaluations.</span> </p><p><span
  m='4085345'>[LAUGHTER]</span> </p><p></p><p><span m='4087700'>Because,</span>
  <span m='4088030'>you</span> <span m='4088360'>know,</span> <span
  m='4088470'>we</span> <span m='4088600'>want</span> <span
  m='4088750'>to</span> <span m='4088800'>know</span> <span
  m='4088930'>how</span> <span m='4089100'>we</span> <span
  m='4089190'>did</span> <span m='4089480'>and</span> <span
  m='4089640'>how</span> <span m='4090100'>we</span> <span
  m='4090280'>can</span> <span m='4090530'>continue</span> <span
  m='4090910'>to</span> <span m='4091010'>improve</span> <span
  m='4091260'>the</span> <span m='4091340'>class.</span> <span
  m='4091700'>But</span> <span m='4091960'>really</span> <span
  m='4092250'>we</span> <span m='4092360'>want</span> <span
  m='4092570'>to</span> <span m='4092610'>know</span> <span
  m='4092860'>who's</span> <span m='4093140'>the</span> <span
  m='4093180'>better</span> <span m='4093380'>teacher.</span> <span
  m='4096200'>But</span> <span m='4096359'>more</span> <span
  m='4096750'>importantly</span> <span m='4097854'>than</span> <span
  m='4098140'>who</span> <span m='4098319'>is</span> <span
  m='4098460'>the</span> <span m='4098540'>better</span> <span
  m='4098810'>teacher,</span> <span m='4100160'>I</span> <span
  m='4100240'>think</span> <span m='4100460'>we</span> <span
  m='4100609'>all</span> <span m='4100850'>have</span> <span
  m='4101229'>a</span> <span m='4101279'>dying</span> <span
  m='4101720'>question,</span> <span m='4102180'>which</span> <span
  m='4102420'>is</span> <span m='4102960'>who</span> <span m='4103330'>is</span>
  <span m='4103550'>the</span> <span m='4103630'>better</span> <span
  m='4103990'>Frisbee</span> <span m='4104670'>thrower?</span> <span
  m='4105910'>So</span> <span m='4107180'>I</span> <span m='4107340'>want</span>
  <span m='4107500'>to</span> <span m='4107540'>invite</span> <span
  m='4108010'>Srini</span> <span m='4108600'>Devadas,</span> <span
  m='4109540'>our</span> <span m='4109850'>co-lecturer</span> <span
  m='4110470'>here,</span> <span m='4110710'>to</span> <span
  m='4112050'>a</span> <span m='4112149'>duel.</span> </p><p><span
  m='4113146'>[LAUGHTER AND APPLAUSE]</span> </p><p></p><p><span
  m='4118978'>SRINI DEVADAS: I</span> <span m='4119470'>think</span> <span
  m='4119640'>you</span> <span m='4119740'>mean,</span> <span
  m='4121220'>no</span> <span m='4121439'>contest.</span> </p><p><span
  m='4122170'>[LAUGHTER]</span> </p><p></p><p><span m='4124090'>PROFESSOR:
  Not</span> <span m='4124370'>so</span> <span m='4124630'>sure.</span> <span
  m='4125350'>Maybe--</span> <span m='4126630'>actually,</span> <span
  m='4127090'>I'm</span> <span m='4127180'>pretty</span> <span
  m='4127370'>sure.</span> </p><p><span m='4127720'>[LAUGHTER]</span>
  </p><p></p><p><span m='4130330'>I</span> <span m='4130800'>want</span> <span
  m='4130979'>to</span> <span m='4131050'>take</span> <span
  m='4131250'>you</span> <span m='4131390'>on,</span> <span
  m='4131560'>man.</span> <span m='4132040'>Blue or</span> <span
  m='4132279'>purple?</span> </p><p><span m='4135250'>SRINI DEVADAS:
  Blue.</span> </p><p><span m='4136040'>PROFESSOR: Good choice.</span>
  </p><p><span m='4136460'>SRINI DEVADAS: Blue's</span> <span
  m='4136689'>better,</span> <span m='4137010'>remember?</span> </p><p><span
  m='4137909'>[LAUGHTER]</span> </p><p><span m='4138850'>PROFESSOR:
  Purple's</span> <span m='4139149'>better,</span> <span
  m='4139479'>remember?</span> </p><p><span m='4139734'>[LAUGHTER]</span>
  </p><p></p><p><span m='4141840'>All</span> <span m='4141930'>right,</span>
  <span m='4143330'>so</span> <span m='4143569'>how</span> <span
  m='4143970'>are</span> <span m='4144000'>we</span> <span
  m='4144090'>going</span> <span m='4144180'>to</span> <span
  m='4144240'>do</span> <span m='4144370'>this?</span> </p><p><span
  m='4144634'>SRINI DEVADAS: So,</span> <span m='4145490'>you</span> <span
  m='4145689'>guys</span> <span m='4145970'>get</span> <span
  m='4146130'>to</span> <span m='4146220'>cheer</span> <span
  m='4146840'>and</span> <span m='4147100'>bet.</span> </p><p><span
  m='4148063'>PROFESSOR: Bet?</span> <span m='4149880'>I</span> <span
  m='4150350'>don't</span> <span m='4150590'>think</span> <span
  m='4150850'>we</span> <span m='4150990'>can</span> <span
  m='4151149'>condone</span> <span m='4151500'>them</span> <span
  m='4151640'>betting</span> <span m='4151920'>money.</span> <span
  m='4152439'>I</span> <span m='4152510'>think</span> <span
  m='4153450'>maybe</span> <span m='4153670'>they</span> <span
  m='4153760'>can</span> <span m='4153880'>bet their</span> <span
  m='4154160'>Frisbees.</span> <span m='4154880'>Anyone</span> <span
  m='4155130'>got</span> <span m='4155279'>a</span> <span
  m='4155330'>Frisbee</span> <span m='4155750'>on</span> <span
  m='4155870'>them?</span> <span m='4156000'>We can</span> <span
  m='4156290'>bet</span> <span m='4156990'>those.</span> </p><p><span
  m='4157370'>SRINI DEVADAS: Yeah,</span> <span m='4157750'>all right.</span>
  </p><p><span m='4159069'>PROFESSOR: All right,</span> <span
  m='4159580'>maybe</span> <span m='4159779'>not.</span> </p><p><span
  m='4160490'>SRINI DEVADAS: Put</span> <span m='4160580'>your</span> <span
  m='4160800'>Frisbees</span> <span m='4161130'>on</span> <span
  m='4161310'>me</span> <span m='4161660'>here.</span> </p><p><span
  m='4163874'>PROFESSOR: All right.</span> </p><p><span m='4165189'>SRINI
  DEVADAS: All</span> <span m='4165300'>right,</span> <span
  m='4165550'>so</span> <span m='4167430'>some</span> <span
  m='4167630'>rules</span> <span m='4167979'>here--</span> <span
  m='4168700'>we</span> <span m='4168819'>actually</span> <span
  m='4169080'>talked</span> <span m='4169319'>about</span> <span
  m='4169540'>this.</span> <span m='4172450'>So</span> <span
  m='4172620'>the</span> <span m='4172710'>way</span> <span m='4172920'>this
  is</span> <span m='4173080'>going</span> <span m='4173189'>to</span> <span
  m='4173270'>work--</span> <span m='4173680'>I</span> <span
  m='4173770'>mean,</span> <span m='4174050'>it's going to be</span> <span
  m='4174130'>algorithmic,</span> <span m='4174710'>obviously.</span> <span
  m='4176740'>And</span> <span m='4177000'>we</span> <span
  m='4177090'>get</span> <span m='4177220'>to</span> <span
  m='4177290'>choose</span> <span m='4177590'>our</span> <span
  m='4177700'>algorithm,</span> <span m='4178160'>maybe</span> <span
  m='4178250'>with</span> <span m='4178359'>a</span> <span
  m='4178410'>little</span> <span m='4178569'>game</span> <span
  m='4178840'>theory</span> <span m='4179200'>here.</span> <span
  m='4179729'>We're</span> <span m='4179859'>going</span> <span
  m='4179960'>to</span> <span m='4180050'>toss</span> <span
  m='4180350'>the</span> <span m='4180410'>coin.</span> <span
  m='4181109'>And</span> <span m='4181220'>we're</span> <span
  m='4181310'>going</span> <span m='4181399'>to</span> <span
  m='4181439'>decide</span> <span m='4181819'>who</span> <span
  m='4181960'>goes</span> <span m='4182189'>first.</span> <span
  m='4183359'>So</span> <span m='4184270'>won't</span> <span
  m='4184580'>spin</span> <span m='4184680'>the</span> <span
  m='4184770'>Frisbee.</span> <span m='4185200'>Remember</span> <span
  m='4185450'>what</span> <span m='4185569'>happened</span> <span
  m='4185830'>with</span> <span m='4185950'>that?</span> <span
  m='4187330'>So</span> <span m='4187620'>you</span> <span
  m='4187810'>get</span> <span m='4187990'>to</span> <span
  m='4188960'>call</span> <span m='4189590'>heads</span> <span m='4189819'>or
  tails</span> <span m='4190495'>while it's</span> <span
  m='4190750'>spinning.</span> </p><p><span m='4191069'>PROFESSOR: Oh,</span>
  <span m='4191210'>while</span> <span m='4191470'>it's spinning.</span>
  </p><p><span m='4191910'>SRINI DEVADAS: While</span> <span
  m='4192069'>it's</span> <span m='4192270'>spinning.</span> <span
  m='4192609'>This is our</span> <span m='4192990'>Super</span> <span
  m='4193250'>Bowl.</span> </p><p><span m='4195610'>PROFESSOR: Heads!</span>
  <span m='4197300'>Oh,</span> <span m='4197700'>a</span> <span
  m='4198100'>trick.</span> <span m='4199330'>Tails.</span> </p><p><span
  m='4199890'>SRINI DEVADAS: Tails,</span> <span m='4200420'>all</span> <span
  m='4200520'>right.</span> <span m='4202500'>You're</span> <span
  m='4202650'>going</span> <span m='4202750'>to</span> <span
  m='4202820'>throw</span> <span m='4203020'>first.</span> </p><p><span
  m='4203810'>PROFESSOR: OK,</span> <span m='4204430'>that's your</span> <span
  m='4204715'>choice.</span> </p><p><span m='4205000'>SRINI DEVADAS: And</span>
  <span m='4205820'>I</span> <span m='4205930'>don't</span> <span
  m='4206060'>know if</span> <span m='4206230'>you've</span> <span
  m='4206370'>heard</span> <span m='4206990'>the</span> <span
  m='4207600'>legend</span> <span m='4208220'>of</span> <span
  m='4208340'>William</span> <span m='4208770'>Tell.</span> <span
  m='4209720'>How</span> <span m='4209860'>many</span> <span
  m='4210020'>of</span> <span m='4210100'>you have</span> <span
  m='4210290'>heard</span> <span m='4210540'>the</span> <span
  m='4210630'>legend</span> <span m='4211040'>of</span> <span
  m='4211130'>William</span> <span m='4211460'>Tell?</span> <span
  m='4212510'>All</span> <span m='4212620'>right.</span> <span
  m='4213470'>So</span> <span m='4213630'>that</span> <span
  m='4213790'>was</span> <span m='4213960'>a</span> <span
  m='4214790'>14th</span> <span m='4215340'>century</span> <span
  m='4215960'>Swiss</span> <span m='4216330'>legend</span> <span
  m='4217070'>where</span> <span m='4217380'>there</span> <span
  m='4217570'>was</span> <span m='4217820'>this</span> <span
  m='4218510'>archer</span> <span m='4219220'>who</span> <span
  m='4219690'>was</span> <span m='4219930'>renowned</span> <span
  m='4220440'>for</span> <span m='4220610'>his</span> <span
  m='4221790'>skill.</span> <span m='4222680'>And</span> <span
  m='4222800'>he</span> <span m='4222870'>was</span> <span
  m='4223010'>forced</span> <span m='4223430'>by</span> <span
  m='4223560'>this</span> <span m='4223770'>villainous</span> <span
  m='4224310'>king</span> <span m='4225090'>to</span> <span
  m='4225250'>shoot</span> <span m='4225570'>an</span> <span
  m='4225710'>apple</span> <span m='4226540'>off</span> <span
  m='4226820'>the</span> <span m='4226960'>top</span> <span
  m='4227280'>of</span> <span m='4227370'>his</span> <span
  m='4227490'>son's</span> <span m='4227970'>head.</span> </p><p><span
  m='4229880'>PROFESSOR: Yikes.</span> </p><p><span m='4230370'>SRINI DEVADAS:
  So</span> <span m='4231460'>we're</span> <span m='4231640'>going</span> <span
  m='4232260'>to</span> <span m='4232380'>reenact</span> <span
  m='4232900'>that.</span> </p><p><span m='4233260'>[LAUGHTER]</span>
  </p><p></p><p><span m='4235310'>PROFESSOR: Did</span> <span
  m='4235480'>you</span> <span m='4235570'>bring</span> <span
  m='4235730'>your</span> <span m='4235830'>daughter?</span> </p><p><span
  m='4236165'>[LAUGHTER AND APPLAUSE]</span> </p><p></p><p><span
  m='4241030'>SRINI DEVADAS: I</span> <span m='4241420'>was</span> <span
  m='4241730'>thinking</span> <span m='4242110'>TAs.</span> </p><p><span
  m='4245110'>PROFESSOR: Our</span> <span m='4245210'>"sons."</span>
  </p><p><span m='4245760'>SRINI DEVADAS: But</span> <span
  m='4246120'>there's</span> <span m='4246270'>a</span> <span
  m='4246310'>big</span> <span m='4246540'>difference</span> <span
  m='4246920'>between</span> <span m='4247270'>the</span> <span
  m='4247450'>21st</span> <span m='4248060'>century</span> <span
  m='4248580'>and</span> <span m='4248680'>the</span> <span
  m='4248760'>14th</span> <span m='4249230'>century.</span> <span
  m='4250020'>What</span> <span m='4250230'>is</span> <span
  m='4250380'>that?</span> </p><p><span m='4251245'>STUDENT: You get
  sued.</span> </p><p><span m='4252155'>[INTERPOSING VOICES]</span> </p><p><span
  m='4252610'>PROFESSOR: You get</span> <span m='4252990'>sued,</span> <span
  m='4253300'>yeah.</span> </p><p><span m='4254040'>SRINI DEVADAS: Now</span>
  <span m='4254190'>there's</span> <span m='4254480'>many</span> <span
  m='4254700'>more</span> <span m='4254880'>lawsuits</span> <span
  m='4255880'>in</span> <span m='4256020'>the</span> <span
  m='4256370'>21st</span> <span m='4256600'>century.</span> <span
  m='4257950'>So</span> <span m='4258190'>we</span> <span
  m='4258330'>want</span> <span m='4258480'>to</span> <span m='4258540'>avoid
  lawsuits.</span> </p><p><span m='4258770'>STUDENT: Genetically modified
  apples.</span> </p><p><span m='4260980'>PROFESSOR: And</span> <span
  m='4261220'>genetically</span> <span m='4261520'>modified</span> <span
  m='4261830'>apples,</span> <span m='4262110'>also.</span> </p><p><span
  m='4262620'>SRINI DEVADAS: Electronically</span> <span
  m='4263090'>modified</span> <span m='4263560'>Apples,</span> <span
  m='4263920'>yeah</span> <span m='4264040'>that's going</span> <span
  m='4264220'>to be</span> <span m='4264620'>another</span> <span
  m='4264810'>difference.</span> <span m='4265520'>So</span> <span
  m='4265650'>we</span> <span m='4265720'>decided</span> <span
  m='4266150'>we'd</span> <span m='4266280'>just</span> <span
  m='4266630'>throw</span> <span m='4266830'>Frisbees</span> <span
  m='4267310'>at</span> <span m='4267390'>each</span> <span
  m='4267620'>other.</span> </p><p><span m='4270730'>PROFESSOR: So</span> <span
  m='4270880'>I'm</span> <span m='4271360'>going</span> <span
  m='4271460'>to</span> <span m='4271520'>throw to</span> <span
  m='4271740'>you</span> <span m='4272030'>and try</span> <span
  m='4272210'>to</span> <span m='4272290'>hit</span> <span m='4272410'>an</span>
  <span m='4272710'>apple</span> <span m='4273040'>off of your head.</span>
  </p><p><span m='4273800'>SRINI DEVADAS: Yeah,</span> <span
  m='4274330'>well</span> <span m='4274720'>you</span> <span
  m='4274860'>might</span> <span m='4275000'>want</span> <span
  m='4275090'>to</span> <span m='4275140'>tell</span> <span
  m='4275300'>them</span> <span m='4275570'>what</span> <span
  m='4275740'>we</span> <span m='4275840'>decided</span> <span m='4276280'>about
  the</span> <span m='4276760'>apple.</span> </p><p><span m='4277140'>PROFESSOR:
  Well,</span> <span m='4277300'>I brought</span> <span m='4278170'>an</span>
  <span m='4278640'>easy-to-hit</span> <span m='4279280'>apple,</span> <span
  m='4279860'>a</span> <span m='4280050'>nice</span> <span
  m='4280250'>big</span> <span m='4280590'>apple,</span> <span
  m='4281090'>the</span> <span m='4281320'>cowboy</span> <span
  m='4281660'>hat.</span> </p><p><span m='4281880'>SRINI DEVADAS: Cowboy</span>
  <span m='4282160'>hat.</span> </p><p><span m='4283400'>PROFESSOR: That
  should</span> <span m='4283620'>be a little</span> <span
  m='4284005'>easier.</span> </p><p><span m='4284390'>SRINI DEVADAS: So</span>
  <span m='4284550'>I</span> <span m='4284610'>get</span> <span
  m='4285000'>to</span> <span m='4285140'>wear</span> <span
  m='4285260'>that</span> <span m='4285390'>had</span> <span
  m='4285650'>first</span> <span m='4286580'>because</span> <span
  m='4287190'>you're</span> <span m='4287290'>going</span> <span
  m='4287390'>to</span> <span m='4287470'>throw</span> <span
  m='4287690'>first.</span> </p><p><span m='4288410'>PROFESSOR: OK.</span>
  </p><p><span m='4288690'>SRINI DEVADAS: And</span> <span
  m='4289610'>this</span> <span m='4289780'>is</span> <span
  m='4289930'>really</span> <span m='4290090'>simple,</span> <span
  m='4290410'>guys.</span> <span m='4291750'>Knock</span> <span
  m='4292090'>the</span> <span m='4292170'>hat</span> <span
  m='4292410'>off,</span> <span m='4293670'>I</span> <span
  m='4293830'>guess</span> <span m='4294220'>from</span> <span
  m='4294500'>the</span> <span m='4294590'>furthest</span> <span
  m='4295070'>distance,</span> <span m='4296420'>and</span> <span
  m='4296870'>win.</span> <span m='4299000'>In your case,</span> <span
  m='4299440'>lose</span> <span m='4299850'>but</span> <span
  m='4300030'>yeah.</span> </p><p><span m='4300260'>PROFESSOR: Now</span> <span
  m='4301290'>for</span> <span m='4301430'>the</span> <span
  m='4302270'>PETA</span> <span m='4302570'>people</span> <span
  m='4302910'>in</span> <span m='4302980'>the</span> <span
  m='4303110'>audience,</span> <span m='4303510'>I</span> <span
  m='4303590'>want</span> <span m='4303880'>your</span> <span
  m='4304140'>assure</span> <span m='4304400'>no</span> <span
  m='4304660'>humans</span> <span m='4305050'>will</span> <span
  m='4305170'>be</span> <span m='4305710'>harmed</span> <span
  m='4305970'>during</span> <span m='4306220'>this</span> <span
  m='4306360'>performance,</span> <span m='4307540'>only</span> <span
  m='4307750'>professors.</span> </p><p><span m='4308125'>[LAUGHTER]</span>
  </p><p><span m='4309930'>And</span> <span m='4310330'>maybe</span> <span
  m='4310910'>egos,</span> <span m='4311660'>pride.</span> </p><p><span
  m='4314920'>SRINI DEVADAS: Seven.</span> <span m='4315160'>I think</span>
  <span m='4315570'>seven</span> <span m='4315800'>is</span> <span
  m='4315900'>a</span> <span m='4315930'>good</span> <span
  m='4316060'>number.</span> </p><p><span m='4318130'>PROFESSOR: Seven</span>
  <span m='4318430'>for--</span> </p><p><span m='4318740'>SRINI DEVADAS: You
  get</span> <span m='4318950'>to--</span> </p><p><span m='4319280'>PROFESSOR:
  I'm going to  grab</span> <span m='4319540'>purple.</span> </p><p><span
  m='4320180'>SRINI DEVADAS: You</span> <span m='4320390'>get</span> <span
  m='4320550'>to</span> <span m='4320650'>pick.</span> <span
  m='4322730'>You</span> <span m='4322850'>can</span> <span
  m='4322950'>stand</span> <span m='4323260'>right</span> <span
  m='4323440'>here.</span> <span m='4323720'>That's</span> <span
  m='4323890'>probably</span> <span m='4324630'>what's</span> <span
  m='4325060'>good</span> <span m='4325230'>for</span> <span
  m='4325340'>you.</span> </p><p><span m='4326100'>[LAUGHTER]</span>
  </p><p></p><p><span m='4328440'>Or</span> <span m='4328610'>you</span> <span
  m='4328750'>can</span> <span m='4328890'>go</span> <span m='4329090'>all the
  way</span> <span m='4329410'>up</span> <span m='4329570'>there.</span> <span
  m='4330760'>And</span> <span m='4331420'>after</span> <span
  m='4331520'>you</span> <span m='4331570'>knock</span> <span
  m='4332250'>this</span> <span m='4332390'>hat</span> <span
  m='4332610'>off,</span> <span m='4332810'>I'm</span> <span
  m='4332910'>going</span> <span m='4333010'>to</span> <span
  m='4333050'>have</span> <span m='4333170'>to match</span> <span
  m='4333425'>you.</span> </p><p><span m='4334900'>PROFESSOR: All right.</span>
  </p><p><span m='4335230'>SRINI DEVADAS: So</span> <span
  m='4335800'>furthest</span> <span m='4336250'>away</span> <span
  m='4336310'>wins.</span> </p><p><span m='4337060'>PROFESSOR: I think</span>
  <span m='4337450'>I'll</span> <span m='4337820'>try</span> <span
  m='4338080'>from</span> <span m='4338210'>about</span> <span
  m='4338460'>here.</span> </p><p><span m='4338710'>SRINI DEVADAS: Right.</span>
  <span m='4339280'>Ah!</span> <span m='4341520'>I've</span> <span
  m='4342230'>got to</span> <span m='4342390'>look</span> <span
  m='4342600'>good</span> <span m='4342710'>here,</span> <span
  m='4342910'>man.</span> </p><p><span m='4344170'>PROFESSOR: I</span> <span
  m='4344320'>have to</span> <span m='4344500'>do it without</span> <span
  m='4344940'>looking.</span> </p><p><span m='4345090'>SRINI DEVADAS: I'm</span>
  <span m='4345240'>going</span> <span m='4345370'>to</span> <span
  m='4345420'>stand</span> <span m='4347700'>right</span> <span
  m='4347850'>here.</span> </p><p><span m='4348290'>PROFESSOR: OK.</span>
  </p><p><span m='4349920'>SRINI DEVADAS: OK.</span> <span
  m='4350728'>Ah!</span> </p><p><span m='4351206'>[LAUGHTER]</span>
  </p><p></p><p><span m='4353600'>I've</span> <span m='4353950'>got to</span>
  <span m='4354140'>gear</span> <span m='4354370'>up for</span> <span
  m='4354700'>this.</span> </p><p><span m='4355080'>PROFESSOR: OK.</span>
  </p><p><span m='4355870'>SRINI DEVADAS: Look,</span> <span m='4356290'>I know
  how</span> <span m='4356550'>well you throw.</span> </p><p><span
  m='4357003'>PROFESSOR: Are you</span> <span m='4357456'>scared?</span> <span
  m='4361190'>That's</span> <span m='4361410'>embarrassing.</span> </p><p><span
  m='4363660'>SRINI DEVADAS: Ah!</span> <span m='4365680'>I</span> <span
  m='4365940'>can't</span> <span m='4366140'>deal</span> <span
  m='4366310'>with</span> <span m='4366440'>this.</span> <span
  m='4368110'>I</span> <span m='4368230'>just</span> <span
  m='4368420'>have</span> <span m='4368530'>no</span> <span
  m='4368730'>confidence</span> <span m='4369490'>in</span> <span
  m='4369660'>the</span> <span m='4369760'>way</span> <span
  m='4369910'>you</span> <span m='4369990'>throw.</span> <span
  m='4371340'>So</span> <span m='4372110'>I</span> <span
  m='4372290'>borrowed</span> <span m='4372880'>this.</span> </p><p><span
  m='4373310'>[LAUGHTER]</span> </p><p></p><p><span m='4379420'>Since</span>
  <span m='4379650'>this</span> <span m='4379880'>is</span> <span
  m='4380020'>mine,</span> <span m='4380355'>it's</span> <span
  m='4380690'>going</span> <span m='4380790'>to</span> <span
  m='4380870'>cost</span> <span m='4381250'>you</span> <span
  m='4381400'>a</span> <span m='4381580'>throw</span> <span m='4382600'>to
  wear</span> <span m='4382780'>this.</span> </p><p><span m='4383060'>PROFESSOR:
  Hey!</span> </p><p><span m='4383930'>SRINI DEVADAS: No,</span> <span
  m='4384305'>all right.</span> <span m='4384680'>Whatever, fair.</span> <span
  m='4386420'>All right.</span> <span m='4387150'>Now I'm</span> <span
  m='4387410'>feeling</span> <span m='4387590'>much</span> <span
  m='4387790'>better</span> <span m='4387940'>about</span> <span
  m='4388170'>this.</span> <span m='4389880'>I</span> <span
  m='4389980'>won't</span> <span m='4390190'>claim</span> <span
  m='4390500'>to</span> <span m='4390560'>have</span> <span m='4390720'>a</span>
  <span m='4390790'>pretty</span> <span m='4391070'>face.</span> <span
  m='4391630'>But</span> <span m='4392010'>I</span> <span
  m='4392130'>like</span> <span m='4392390'>it</span> <span
  m='4392520'>just</span> <span m='4392760'>the</span> <span
  m='4392840'>way</span> <span m='4392980'>it</span> <span
  m='4393060'>is,</span> <span m='4394950'>just</span> <span
  m='4395240'>the</span> <span m='4395330'>way</span> <span
  m='4395510'>it</span> <span m='4395580'>is.</span> </p><p><span
  m='4396050'>PROFESSOR: All</span> <span m='4396180'>right.</span> <span
  m='4396480'>Well,</span> <span m='4397230'>since</span> <span
  m='4397470'>we</span> <span m='4397550'>have</span> <span m='4397660'>a</span>
  <span m='4397690'>little</span> <span m='4397840'>more</span> <span
  m='4398000'>protection,</span> <span m='4398410'>maybe</span> <span
  m='4398620'>I'll</span> <span m='4398710'>start</span> <span
  m='4398930'>from</span> <span m='4399030'>farther</span> <span
  m='4399290'>back.</span> </p><p><span m='4399780'>SRINI DEVADAS: All
  right.</span> <span m='4400580'>I</span> <span m='4400980'>think I'll</span>
  <span m='4401245'>hold</span> <span m='4401510'>this</span> <span
  m='4401670'>up</span> <span m='4401820'>here</span> <span m='4402110'>like
  that.</span> </p><p><span m='4402820'>PROFESSOR: OK.</span> <span
  m='4403280'>So I</span> <span m='4403575'>just have</span> <span
  m='4403870'>to hit</span> <span m='4404120'>the hat off,</span> <span
  m='4404500'>right?</span> <span m='4404720'>Easy.</span> </p><p><span
  m='4405015'>SRINI DEVADAS: Yup.</span> </p><p><span
  m='4405310'>[LAUGHTER]</span> </p><p></p><p><span m='4415660'>PROFESSOR:
  You</span> <span m='4415820'>can</span> <span m='4415920'>keep</span> <span
  m='4416110'>that.</span> <span m='4418490'>Oh</span> <span
  m='4418750'>right,</span> <span m='4419070'>so</span> <span
  m='4419210'>I'm</span> <span m='4419370'>going</span> <span
  m='4419520'>to</span> <span m='4419570'>get</span> <span
  m='4419710'>closer.</span> <span m='4420360'>One</span> <span
  m='4420570'>step</span> <span m='4420840'>closer.</span> <span
  m='4421690'>Luckily,</span> <span m='4422060'>my</span> <span
  m='4422240'>steps</span> <span m='4422630'>are</span> <span
  m='4422750'>much</span> <span m='4422980'>bigger</span> <span m='4423650'>than
  your</span> <span m='4424120'>steps.</span> <span m='4424990'>OK,</span> <span
  m='4425430'>throw</span> <span m='4425520'>2.</span> </p><p><span
  m='4426438'>[LAUGHTER]</span> </p><p></p><p><span m='4429860'>Throw</span>
  <span m='4430200'>three.</span> </p><p><span m='4432209'>[LAUGHTER]</span>
  </p><p></p><p><span m='4435450'>Throw</span> <span m='4435760'>four.</span>
  </p><p><span m='4436890'>SRINI DEVADAS: That didn't</span> <span
  m='4437150'>even</span> <span m='4437475'>hurt.</span> <span
  m='4439050'>Come</span> <span m='4439736'>on,</span> <span
  m='4440080'>man!</span> <span m='4441340'>Throw</span> <span m='4441710'>a
  little</span> <span m='4441940'>harder</span> <span m='4442180'>here!</span>
  </p><p><span m='4444128'>PROFESSOR: Oh!</span> </p><p><span
  m='4444614'>[CHEERING AND APPLAUSE]</span> </p><p></p><p><span
  m='4449474'>SRINI DEVADAS: All right,</span> <span m='4449960'>mark</span>
  <span m='4450455'>it.</span> </p><p><span m='4450950'>PROFESSOR: All</span>
  <span m='4451290'>right,</span> <span m='4451820'>I marked</span> <span
  m='4452020'>my spot.</span> </p><p><span m='4452680'>SRINI DEVADAS:
  You've</span> <span m='4452800'>got</span> <span m='4452930'>a</span> <span
  m='4452980'>couple</span> <span m='4453200'>more throws</span> <span
  m='4453400'>here</span> <span m='4454000'>to do</span> <span
  m='4454310'>better.</span> </p><p><span m='4454600'>PROFESSOR: More</span>
  <span m='4454800'>throws?</span> </p><p><span m='4456360'>SRINI DEVADAS: You
  can do</span> <span m='4456510'>better.</span> </p><p><span
  m='4456600'>PROFESSOR: Wait,</span> <span m='4456700'>to</span> <span
  m='4456890'>go</span> <span m='4457020'>back.</span> </p><p><span
  m='4457550'>SRINI DEVADAS: You've got a</span> <span m='4457610'>couple</span>
  <span m='4457860'>more,</span> <span m='4458110'>yeah.</span> </p><p><span
  m='4465600'>PROFESSOR: You almost</span> <span m='4465810'>hit</span> <span
  m='4465940'>me.</span> </p><p><span m='4466380'>[LAUGHTER]</span>
  </p><p></p><p><span m='4468696'>[GROANING]</span> </p><p><span m='4469980'>I'm
  getting</span> <span m='4470230'>better!</span> <span m='4472202'>Not
  much--</span> <span m='4473120'>can</span> <span m='4473450'>I</span> <span
  m='4473570'>go</span> <span m='4473720'>back</span> <span
  m='4473980'>now?</span> </p><p><span m='4474260'>SRINI DEVADAS: Yeah,
  sure.</span> </p><p><span m='4474540'>PROFESSOR: I don't</span> <span
  m='4474895'>know</span> <span m='4475250'>the</span> <span
  m='4475420'>rules.</span> </p><p><span m='4478160'>[APPLAUSE]</span>
  </p><p></p><p><span m='4482590'>SRINI DEVADAS: Goodness.</span> </p><p><span
  m='4485040'>PROFESSOR: No</span> <span m='4485510'>contest,</span> <span
  m='4485825'>right?</span> </p><p><span m='4486140'>SRINI DEVADAS: I'm getting
  a little worried</span> <span m='4486560'>here.</span> </p><p><span
  m='4487320'>PROFESSOR: One</span> <span m='4487530'>more</span> <span
  m='4487670'>Frisbee.</span> <span m='4489986'>Two</span> <span
  m='4490420'>more</span> <span m='4490580'>Frisbees.</span> <span
  m='4493090'>Hey,</span> <span m='4493440'>that was</span> <span
  m='4493730'>your</span> <span m='4493840'>Frisbee.</span> </p><p><span
  m='4494200'>SRINI DEVADAS: One</span> <span m='4494460'>more.</span> <span
  m='4497330'>All</span> <span m='4497550'>right.</span> </p><p><span
  m='4497820'>PROFESSOR: I</span> <span m='4497980'>think</span> <span
  m='4498530'>we've</span> <span m='4499400'>done</span> <span
  m='4499570'>binary</span> <span m='4499880'>search</span> <span
  m='4500150'>here.</span> </p><p><span m='4500555'>[APPLAUSE]</span>
  </p><p></p><p><span m='4503960'>SRINI DEVADAS: You need this.</span> <span
  m='4505960'>And</span> <span m='4506500'>you</span> <span
  m='4506630'>don't</span> <span m='4506750'>really</span> <span
  m='4507070'>need</span> <span m='4507420'>this,</span> <span
  m='4508320'>but</span> <span m='4508910'>I'll give</span> <span m='4509380'>it
  to you.</span> </p><p><span m='4510860'>PROFESSOR: So</span> <span
  m='4511060'>much</span> <span m='4511260'>confidence.</span> <span
  m='4511710'>Well,</span> <span m='4512060'>I</span> <span
  m='4512220'>have</span> <span m='4512370'>so much</span> <span
  m='4512745'>confidence</span> <span m='4513120'>in</span> <span
  m='4513190'>you</span> <span m='4513440'>I</span> <span m='4514520'>brought
  some</span> <span m='4514870'>extra</span> <span m='4515140'>Frisbees.</span>
  </p><p><span m='4516656'>[LAUGHTER]</span> </p><p></p><p><span
  m='4521970'>SRINI DEVADAS: I</span> <span m='4522100'>get to use</span> <span
  m='4522470'>all of them,</span> <span m='4522930'>huh?</span> </p><p><span
  m='4524800'>PROFESSOR: You need</span> <span m='4525130'>it, man.</span>
  </p><p><span m='4526080'>SRINI DEVADAS: All</span> <span
  m='4526280'>right.</span> <span m='4526710'>No,</span> <span m='4527150'>we're
  going</span> <span m='4527230'>to</span> <span m='4527270'>be</span> <span
  m='4527390'>fair.</span> <span m='4527700'>You</span> <span
  m='4527850'>threw</span> <span m='4528060'>seven.</span> <span m='4528560'>I'm
  going to throw</span> <span m='4529060'>seven.</span> <span
  m='4529560'>1,</span> <span m='4530060'>2,</span> <span m='4531060'>3,</span>
  <span m='4531560'>4,</span> <span m='4532560'>5,</span> <span
  m='4534014'>6,</span> <span m='4535540'>7.</span> <span
  m='4537140'>You've</span> <span m='4537290'>got</span> <span
  m='4537410'>a</span> <span m='4537520'>bit</span> <span m='4537740'>of</span>
  <span m='4537830'>a</span> <span m='4537860'>big</span> <span
  m='4538080'>head</span> <span m='4538510'>here.</span> </p><p><span
  m='4540650'>PROFESSOR: Do this.</span> <span m='4541180'>All</span> <span
  m='4541320'>right,</span> <span m='4541590'>so</span> <span m='4541860'>I
  put</span> <span m='4542130'>the</span> <span m='4542220'>hat</span> <span
  m='4542510'>on</span> <span m='4542690'>the</span> <span
  m='4542830'>head.</span> <span m='4543690'>OK.</span> <span
  m='4544800'>Where</span> <span m='4545200'>were you</span> <span
  m='4545300'>standing,</span> <span m='4545730'>by</span> <span
  m='4545870'>the</span> <span m='4545980'>way?</span> <span
  m='4547410'>Way</span> <span m='4547520'>back</span> <span
  m='4547780'>here,</span> <span m='4548230'>right?</span> </p><p><span
  m='4548580'>SRINI DEVADAS: No,</span> <span m='4549080'>nope.</span> <span
  m='4549580'>I</span> <span m='4549740'>was</span> <span
  m='4550410'>right</span> <span m='4550640'>there.</span> </p><p><span
  m='4551780'>PROFESSOR: OK.</span> </p><p><span m='4552540'>SRINI DEVADAS:
  Right</span> <span m='4552930'>there.</span> </p><p><span
  m='4553200'>PROFESSOR: All right,</span> <span m='4553470'>right here.</span>
  <span m='4555600'>Can I</span> <span m='4555720'>hold</span> <span
  m='4555930'>onto</span> <span m='4556090'>the hat?</span> </p><p><span
  m='4557210'>SRINI DEVADAS: No!</span> <span m='4558380'>You can hold on</span>
  <span m='4558800'>to your helmet!</span> </p><p><span m='4559710'>PROFESSOR:
  All right.</span> </p><p><span m='4561470'>SRINI DEVADAS: Wow.</span>
  </p><p><span m='4564018'>PROFESSOR: Ah!</span> </p><p><span
  m='4564510'>[LAUGHTER]</span> </p><p></p><p><span m='4568350'>How</span> <span
  m='4568620'>many</span> <span m='4568880'>throws--</span> </p><p><span
  m='4569500'>SRINI DEVADAS: Maybe I should</span> <span m='4569660'>start 
  from</span> <span m='4570081'>right here.</span> </p><p><span
  m='4572190'>[GROANING]</span> </p><p><span m='4573470'>PROFESSOR: Phew.</span>
  <span m='4573950'>That</span> <span m='4574430'>was</span> <span
  m='4574710'>close.</span> </p><p><span m='4578674'>SRINI DEVADAS: Oh, I</span>
  <span m='4579140'>grazed</span> <span m='4579420'>it!</span> <span
  m='4580320'>But</span> <span m='4580450'>it's</span> <span
  m='4580810'>supposed</span> <span m='4581130'>to</span> <span
  m='4581210'>fall</span> <span m='4581550'>off.</span> </p><p><span
  m='4584040'>PROFESSOR: What,</span> <span m='4584220'>my</span> <span
  m='4584360'>head?</span> </p><p><span m='4585200'>[LAUGHTER]</span>
  </p><p><span m='4586860'>SRINI DEVADAS: Getting</span> <span m='4587010'>kind
  of</span> <span m='4587270'>tight here,</span> <span m='4587620'>guys.</span>
  <span m='4591270'>Wow.</span> </p><p><span m='4596776'>[YELLING AND
  GROANING]</span> </p><p><span m='4598752'>Does that</span> <span
  m='4599246'>count?</span> </p><p><span m='4600234'>STUDENT: No!</span>
  </p><p><span m='4600730'>SRINI DEVADAS: It</span> <span
  m='4600860'>does</span> <span m='4601110'>count.</span> </p><p><span
  m='4601420'>STUDENT: No!</span> </p><p><span m='4602244'>SRINI DEVADAS: It's a
  tie.</span> <span m='4603070'>So</span> <span m='4603320'>far,</span> <span
  m='4603540'>it's</span> <span m='4603640'>a</span> <span
  m='4603760'>tie.</span> <span m='4604250'>So far,</span> <span
  m='4604740'>it's a</span> <span m='4604900'>tie!</span> <span m='4605890'>All
  right,</span> <span m='4606385'>if I knock</span> <span m='4606880'>it
  off,</span> <span m='4607060'>I win.</span> </p><p><span
  m='4607690'>[LAUGHTER]</span> </p><p><span m='4609530'>[GROANING]</span>
  </p><p><span m='4611370'>There</span> <span m='4611650'>you</span> <span
  m='4612020'>you.</span> </p><p><span m='4612877'>PROFESSOR: Is that it?</span>
  </p><p><span m='4613364'>[APPLAUSE]</span> </p><p></p><p><span
  m='4618234'>SRINI DEVADAS: This was</span> <span m='4618730'>fair and</span>
  <span m='4619045'>square.</span> <span m='4620400'>We</span> <span
  m='4620520'>want</span> <span m='4620750'>the</span> <span
  m='4620820'>world</span> <span m='4621210'>to</span> <span
  m='4621300'>know</span> <span m='4622060'>that</span> <span
  m='4622240'>we</span> <span m='4622320'>did</span> <span
  m='4622560'>not</span> <span m='4623090'>deflate</span> <span
  m='4623690'>these</span> <span m='4623930'>Frisbees.</span> </p><p><span
  m='4624590'>[LAUGHTER]</span> </p><p></p><p><span
  m='4627946'>[APPLAUSE]</span> </p><p></p><p><span m='4635180'>So</span> <span
  m='4636710'>not</span> <span m='4636900'>only</span> <span m='4637110'>did
  we</span> <span m='4637260'>do</span> <span m='4637480'>a</span> <span
  m='4637540'>bad</span> <span m='4637920'>job</span> <span
  m='4638220'>of</span> <span m='4638320'>throwing</span> <span
  m='4638600'>Frisbee</span> <span m='4638940'>to</span> <span
  m='4639070'>you</span> <span m='4639210'>guys,</span> <span
  m='4639930'>we</span> <span m='4640060'>didn't</span> <span
  m='4640200'>throw</span> <span m='4640440'>enough</span> <span
  m='4640910'>Frisbees,</span> <span m='4641410'>as</span> <span
  m='4641520'>you</span> <span m='4641640'>can</span> <span
  m='4641760'>see,</span> <span m='4642420'>through</span> <span
  m='4642570'>the</span> <span m='4642690'>term.</span> <span
  m='4643280'>So</span> <span m='4644070'>if</span> <span m='4644180'>you</span>
  <span m='4644280'>want</span> <span m='4644440'>a</span> <span
  m='4644530'>Frisbee,</span> <span m='4645880'>pick</span> <span
  m='4646150'>one</span> <span m='4646330'>up.</span> <span
  m='4646730'>And</span> <span m='4647940'>if</span> <span
  m='4648080'>you're</span> <span m='4648220'>embarrassed</span> <span
  m='4648790'>about</span> <span m='4649030'>throwing</span> <span
  m='4649350'>Frisbees</span> <span m='4649890'>with</span> <span
  m='4650300'>this</span> <span m='4650560'>lettering</span> <span
  m='4650840'>on it,</span> <span m='4651770'>I've</span> <span
  m='4651910'>got</span> <span m='4652080'>two</span> <span
  m='4652220'>words</span> <span m='4652480'>for</span> <span
  m='4652590'>you--</span> <span m='4653010'>paint</span> <span
  m='4653260'>remover.</span> <span m='4654500'>All right,</span> <span
  m='4655110'>have</span> <span m='4655455'>a</span> <span
  m='4655800'>good</span> <span m='4655980'>summer.</span> <span
  m='4656390'>And</span> <span m='4656930'>have</span> <span
  m='4657190'>fun</span> <span m='4657420'>on</span> <span m='4657530'>the
  final</span> <span m='4657830'>exam.</span> </p><p><span
  m='4658430'>[APPLAUSE]</span> </p><p></p>
embedded_media:
  - uid: 02334f1ca7d98f301063bd35922e549d
    parent_uid: efc8b80e509595eb8d26e020f63b3e70
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: C6EWVBNCxsc
  - uid: 62a394296d79b0956cbda58cf33bcea3
    parent_uid: efc8b80e509595eb8d26e020f63b3e70
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/C6EWVBNCxsc/default.jpg'
  - uid: df8cba2c113ce62c070f8c97731823d4
    parent_uid: efc8b80e509595eb8d26e020f63b3e70
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
  - uid: bb327828e2f216f0d295eae76202ef32
    parent_uid: efc8b80e509595eb8d26e020f63b3e70
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec24_300k.mp4'
  - uid: 36f077216afa3e40fd0eb070a7ff0437
    parent_uid: efc8b80e509595eb8d26e020f63b3e70
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: C6EWVBNCxsc
  - uid: 981d44d03ebef1f0e9ac66e2a09f116a
    parent_uid: efc8b80e509595eb8d26e020f63b3e70
    id: C6EWVBNCxsc.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-24-cache-oblivious-algorithms-searching-sorting/C6EWVBNCxsc.srt
  - uid: ca375002d1545daab813c10dec23fab8
    parent_uid: efc8b80e509595eb8d26e020f63b3e70
    id: C6EWVBNCxsc.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-24-cache-oblivious-algorithms-searching-sorting/C6EWVBNCxsc.pdf
  - uid: 08e8672e870379b6ea8c0b04c84d2c1c
    parent_uid: efc8b80e509595eb8d26e020f63b3e70
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 2dae1b0ccc2d0a64583d6f82538decf7
    parent_uid: efc8b80e509595eb8d26e020f63b3e70
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
