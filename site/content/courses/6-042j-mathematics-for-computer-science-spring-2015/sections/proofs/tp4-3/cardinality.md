---
title: Cardinality
uid: c2ca270d0bb3aaf664bff6334eac04a0
parent_uid: 7b14af4d984597ad410998ecc9fb9f71
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/cardinality
short_url: cardinality
inline_embed_id: 53042838cardinality99050396
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='390'>PROFESSOR: Cardinality</span> <span m='1510'>is</span> <span
  m='1950'>the</span> <span m='2029'>word</span> <span m='2330'>that's</span>
  <span m='2520'>used</span> <span m='2800'>to</span> <span
  m='2910'>refer</span> <span m='3220'>to</span> <span m='3310'>the</span> <span
  m='3400'>size</span> <span m='3890'>of</span> <span m='4110'>infinite</span>
  <span m='4610'>sets.</span> <span m='5860'>And</span> <span
  m='6050'>before</span> <span m='6360'>we</span> <span m='6470'>go</span> <span
  m='6640'>further,</span> <span m='7100'>let's</span> <span
  m='7950'>take</span> <span m='8160'>a</span> <span m='8220'>quick</span> <span
  m='9320'>look</span> <span m='9720'>at</span> <span m='9890'>why</span> <span
  m='10170'>we're</span> <span m='10350'>interested</span> <span
  m='10720'>in</span> <span m='10780'>infinite</span> <span
  m='11160'>sets</span> <span m='11860'>in</span> <span m='12030'>a</span> <span
  m='12090'>course</span> <span m='12500'>that's</span> <span
  m='12690'>Mathematics</span> <span m='13130'>for</span> <span
  m='13230'>Computer</span> <span m='13590'>Scientists.</span> <span
  m='14770'>Why</span> <span m='15070'>does</span> <span
  m='15290'>computer</span> <span m='15620'>science</span> <span
  m='16170'>care</span> <span m='16500'>about</span> <span
  m='16830'>infinite</span> <span m='17180'>sets?</span> <span
  m='17990'>Well,</span> <span m='18470'>like</span> <span
  m='18910'>every</span> <span m='19770'>data</span> <span
  m='20200'>structure</span> <span m='20690'>that</span> <span
  m='20910'>you'd</span> <span m='21020'>examine</span> <span
  m='21730'>in</span> <span m='21930'>computer</span> <span
  m='22310'>memory</span> <span m='22690'>is</span> <span
  m='22850'>finite</span> <span m='23470'>and</span> <span m='24640'>the</span>
  <span m='24850'>integers</span> <span m='26220'>individually</span> <span
  m='26840'>are</span> <span m='26880'>finite,</span> <span m='27350'>you</span>
  <span m='27490'>only</span> <span m='27600'>calculate</span> <span
  m='28240'>with</span> <span m='28370'>finite</span> <span
  m='28820'>things.</span> <span m='29700'>But,</span> <span
  m='30270'>the</span> <span m='30430'>infinite</span> <span
  m='30780'>abstraction</span> <span m='32110'>happens</span> <span
  m='32460'>right</span> <span m='32600'>at</span> <span m='32680'>the</span>
  <span m='32759'>beginning.</span> </p><p><span m='33210'>Although</span> <span
  m='33430'>any</span> <span m='33570'>given</span> <span
  m='33900'>integer</span> <span m='34770'>is</span> <span
  m='35000'>finite,</span> <span m='35430'>the</span> <span m='35490'>set</span>
  <span m='35680'>of</span> <span m='35780'>all</span> <span
  m='36040'>integers</span> <span m='36480'>is</span> <span
  m='36610'>infinite.</span> <span m='37350'>And</span> <span
  m='37600'>although</span> <span m='37880'>any</span> <span
  m='38050'>given</span> <span m='38840'>matrix</span> <span m='40130'>is</span>
  <span m='40340'>finite,</span> <span m='40680'>the</span> <span
  m='41020'>set</span> <span m='41370'>of</span> <span m='41560'>all</span>
  <span m='41880'>the</span> <span m='41980'>matrices</span> <span
  m='42600'>that</span> <span m='42790'>might</span> <span m='43090'>be</span>
  <span m='43270'>represented</span> <span m='45080'>in</span> <span
  m='45230'>a</span> <span m='45300'>computation</span> <span m='47440'>are
  an</span> <span m='47510'>infinite</span> <span m='47870'>set.</span> <span
  m='49490'>So,</span> <span m='51410'>we</span> <span m='51580'>take</span>
  <span m='52500'>infinite</span> <span m='52670'>sets</span> <span
  m='52850'>for</span> <span m='52970'>granted</span> <span m='53380'>and
  reason</span> <span m='53650'>about</span> <span m='53900'>them</span> <span
  m='53980'>all the</span> <span m='54320'>time.</span> </p><p><span
  m='56030'>The</span> <span m='56140'>second,</span> <span
  m='57210'>from</span> <span m='57420'>a</span> <span
  m='57490'>pedagogical</span> <span m='58150'>point</span> <span
  m='58420'>of</span> <span m='58560'>view,</span> <span
  m='60420'>introducing</span> <span m='61090'>the</span> <span
  m='61190'>concept</span> <span m='61770'>of</span> <span
  m='62010'>infinite</span> <span m='62400'>sets</span> <span
  m='62720'>and</span> <span m='62870'>reasoning</span> <span
  m='63200'>about</span> <span m='63450'>them</span> <span
  m='63570'>carefully</span> <span m='64650'>forces</span> <span
  m='65269'>you</span> <span m='65580'>to</span> <span m='66330'>go</span> <span
  m='66600'>beyond</span> <span m='66970'>your</span> <span
  m='67110'>intuition</span> <span m='67680'>and</span> <span
  m='67820'>really</span> <span m='68740'>follow</span> <span
  m='69250'>the</span> <span m='69380'>rules</span> <span m='69760'>and</span>
  <span m='69900'>reason</span> <span m='70380'>in</span> <span
  m='70500'>a</span> <span m='70530'>careful</span> <span
  m='70980'>mathematical</span> <span m='71670'>way.</span> <span
  m='72080'>Because</span> <span m='72820'>although</span> <span
  m='73370'>some</span> <span m='73780'>properties</span> <span
  m='74510'>that</span> <span m='74670'>you're</span> <span
  m='74770'>familiar</span> <span m='75240'>with</span> <span
  m='75400'>from</span> <span m='75570'>finite</span> <span
  m='75970'>sets</span> <span m='76230'>carry</span> <span m='76570'>over</span>
  <span m='76810'>to</span> <span m='76880'>infinite</span> <span
  m='77310'>sets,</span> <span m='77620'>others</span> <span
  m='77940'>don't.</span> <span m='78780'>And</span> <span m='78960'>in</span>
  <span m='79030'>order</span> <span m='79230'>to</span> <span
  m='79370'>know</span> <span m='79520'>which</span> <span m='79740'>is</span>
  <span m='79860'>which,</span> <span m='80160'>you</span> <span
  m='80300'>have</span> <span m='80570'>to</span> <span m='80690'>be</span>
  <span m='81260'>thinking</span> <span m='81710'>carefully</span> <span
  m='82250'>about</span> <span m='82710'>the</span> <span m='82870'>rules</span>
  <span m='83420'>and</span> <span m='83600'>properties</span> <span
  m='84240'>that</span> <span m='84410'>they</span> <span m='84600'>have,</span>
  <span m='84940'>as</span> <span m='85080'>opposed</span> <span
  m='85470'>to</span> <span m='85550'>just</span> <span m='85800'>going</span>
  <span m='86670'>by</span> <span m='87240'>intuition</span> <span
  m='87900'>and</span> <span m='88050'>familiar</span> <span
  m='88640'>properties.</span> </p><p><span m='89710'>And</span> <span
  m='89910'>finally,</span> <span m='91650'>the</span> <span
  m='92860'>reasoning</span> <span m='93510'>that</span> <span
  m='94910'>goes</span> <span m='95200'>into</span> <span
  m='95540'>comparing</span> <span m='96150'>the</span> <span
  m='96590'>sizes</span> <span m='97230'>of</span> <span
  m='97330'>infinite</span> <span m='97740'>sets,</span> <span
  m='98210'>which</span> <span m='98460'>is</span> <span m='98980'>the</span>
  <span m='99130'>topic</span> <span m='99550'>of</span> <span
  m='99670'>today's</span> <span m='100450'>video,</span> <span
  m='101670'>has</span> <span m='102410'>profound</span> <span
  m='103020'>implications</span> <span m='103670'>in</span> <span
  m='103750'>computer</span> <span m='104160'>science</span> <span
  m='104540'>because</span> <span m='104860'>it</span> <span
  m='105030'>leads</span> <span m='105420'>to</span> <span m='105600'>the</span>
  <span m='106280'>insight</span> <span m='106870'>about</span> <span
  m='107230'>the</span> <span m='107310'>logical</span> <span
  m='107980'>limits</span> <span m='108500'>of</span> <span
  m='108640'>computation</span> <span m='110100'>and</span> <span
  m='111170'>examples</span> <span m='111870'>of</span> <span
  m='112250'>specific</span> <span m='113050'>problems</span> <span
  m='113610'>that</span> <span m='113810'>computers</span> <span
  m='114460'>can't</span> <span m='114780'>solve,</span> <span
  m='115640'>which</span> <span m='115970'>we'll</span> <span
  m='116100'>be</span> <span m='116190'>taking</span> <span m='116620'>up</span>
  <span m='116780'>in</span> <span m='116840'>a</span> <span
  m='116910'>later</span> <span m='117220'>video.</span> <span
  m='118420'>But</span> <span m='118490'>for</span> <span m='118660'>now,</span>
  <span m='119640'>let's</span> <span m='119930'>go</span> <span
  m='120120'>back</span> <span m='120400'>to</span> <span m='120510'>the</span>
  <span m='120610'>topic</span> <span m='121070'>of</span> <span
  m='121170'>cardinality.</span> </p><p><span m='123000'>So,</span> <span
  m='124610'>there</span> <span m='124980'>was</span> <span
  m='125200'>this</span> <span m='126600'>mathematician</span> <span
  m='127310'>in</span> <span m='127430'>the</span> <span m='128529'>late</span>
  <span m='129009'>19th</span> <span m='129350'>century</span> <span
  m='129690'>named</span> <span m='129919'>Cantor</span> <span
  m='131470'>who</span> <span m='131610'>was</span> <span
  m='131760'>actually</span> <span m='132050'>working</span> <span
  m='132450'>on</span> <span m='133870'>Fourier's</span> <span
  m='134310'>series.</span> <span m='134860'>And</span> <span
  m='134980'>he</span> <span m='135140'>discovered</span> <span
  m='135760'>that</span> <span m='136560'>the</span> <span
  m='136660'>kind</span> <span m='136910'>of</span> <span
  m='136990'>series</span> <span m='137360'>that</span> <span
  m='137470'>he</span> <span m='137560'>was</span> <span
  m='137720'>working</span> <span m='138110'>with</span> <span
  m='139970'>diverged</span> <span m='140676'>in</span> <span
  m='141030'>infinitely</span> <span m='141570'>many</span> <span
  m='141830'>places,</span> <span m='142350'>which</span> <span
  m='142510'>sounds</span> <span m='142910'>kind</span> <span
  m='143120'>of</span> <span m='143200'>bad.</span> <span m='143770'>But</span>
  <span m='143950'>he</span> <span m='144090'>wanted</span> <span
  m='144450'>to</span> <span m='144770'>get</span> <span
  m='144930'>across</span> <span m='145290'>the</span> <span
  m='145420'>idea</span> <span m='145840'>that</span> <span m='146360'>it</span>
  <span m='146650'>didn't</span> <span m='146930'>diverge</span> <span
  m='147250'>in</span> <span m='147570'>very</span> <span m='147830'>many</span>
  <span m='148260'>infinite</span> <span m='148720'>places.</span> <span
  m='149480'>And</span> <span m='149760'>that</span> <span m='149980'>led</span>
  <span m='150160'>him</span> <span m='150380'>to</span> <span
  m='150500'>this</span> <span m='150730'>idea</span> <span m='151160'>of</span>
  <span m='151340'>comparing</span> <span m='151890'>the</span> <span
  m='151980'>sizes</span> <span m='152470'>of</span> <span
  m='152570'>infinite</span> <span m='152990'>sets.</span> </p><p><span
  m='154140'>So,</span> <span m='154900'>this</span> <span m='155200'>is</span>
  <span m='155770'>Cantor's</span> <span m='156260'>idea.</span> <span
  m='156610'>We</span> <span m='157080'>know</span> <span m='157340'>from</span>
  <span m='157540'>the</span> <span m='157600'>mapping</span> <span
  m='157920'>dilemma</span> <span m='158960'>that</span> <span
  m='159170'>if</span> <span m='159340'>you're</span> <span
  m='159430'>looking</span> <span m='159750'>at</span> <span
  m='159850'>finite</span> <span m='160450'>sets</span> <span
  m='160730'>A</span> <span m='161010'>and</span> <span m='161400'>B,</span>
  <span m='162100'>then</span> <span m='162910'>the</span> <span
  m='163060'>size</span> <span m='163530'>of</span> <span m='163630'>A</span>
  <span m='164020'>is</span> <span m='164170'>greater</span> <span
  m='164510'>than</span> <span m='164600'>or</span> <span
  m='164690'>equal</span> <span m='164910'>to</span> <span m='165010'>the</span>
  <span m='165100'>size</span> <span m='165480'>of</span> <span
  m='165670'>B</span> <span m='165900'>if</span> <span m='166150'>and</span>
  <span m='166280'>only</span> <span m='166670'>if</span> <span
  m='166940'>A</span> <span m='167480'>surj</span> <span m='168070'>B,</span>
  <span m='168330'>were</span> <span m='168450'>surj is</span> <span
  m='168950'>this</span> <span m='169120'>technical</span> <span
  m='169660'>relation</span> <span m='170560'>which</span> <span
  m='170860'>means</span> <span m='171410'>there</span> <span
  m='171570'>exists</span> <span m='171940'>a</span> <span
  m='172000'>surjection</span> <span m='172780'>function</span> <span
  m='174050'>from</span> <span m='174340'>A</span> <span m='174520'>to</span>
  <span m='174610'>B</span> <span m='174950'>that</span> <span
  m='175140'>is</span> <span m='175270'>a</span> <span
  m='175370'>function</span> <span m='176270'>with</span> <span
  m='176700'>greater</span> <span m='177070'>than</span> <span
  m='177200'>or</span> <span m='177340'>equal</span> <span m='177630'>to</span>
  <span m='177750'>one</span> <span m='178205'>arrow</span> <span
  m='178660'>into</span> <span m='178950'>every</span> <span
  m='179300'>element</span> <span m='179830'>of</span> <span
  m='180000'>B.</span> <span m='181670'>And</span> <span
  m='182010'>Cantor's</span> <span m='182370'>idea</span> <span
  m='182700'>was</span> <span m='182880'>saying,</span> <span
  m='183040'>well,</span> <span m='183200'>it</span> <span
  m='183360'>works</span> <span m='183640'>fine</span> <span
  m='184030'>for</span> <span m='184180'>finite</span> <span
  m='184660'>sets.</span> </p><p><span m='184860'>Why</span> <span
  m='184990'>don't</span> <span m='185200'>we</span> <span
  m='185770'>take</span> <span m='186420'>this</span> <span m='186630'>as</span>
  <span m='186850'>the</span> <span m='186930'>definition</span> <span
  m='187770'>of</span> <span m='187920'>what</span> <span m='188150'>we</span>
  <span m='188300'>mean</span> <span m='188730'>by</span> <span
  m='190210'>A</span> <span m='190620'>is</span> <span m='190780'>at</span>
  <span m='190880'>least</span> <span m='191200'>the</span> <span
  m='191280'>size</span> <span m='191680'>of</span> <span m='191810'>B</span>
  <span m='192010'>for</span> <span m='192170'>infinite</span> <span
  m='192590'>sets?</span> <span m='192920'>So,</span> <span
  m='193110'>we're</span> <span m='193220'>going</span> <span
  m='193350'>to</span> <span m='193420'>think</span> <span m='193700'>of</span>
  <span m='194060'>A</span> <span m='194320'>surj</span> <span
  m='194810'>B</span> <span m='195000'>now</span> <span m='195400'>as</span>
  <span m='195550'>saying,</span> <span m='196210'>A</span> <span
  m='196613'>is</span> <span m='197016'>as</span> <span m='197420'>big</span>
  <span m='197810'>as</span> <span m='198060'>B.</span> <span
  m='199800'>And</span> <span m='200010'>for</span> <span
  m='200140'>finite</span> <span m='200560'>sets,</span> <span
  m='201370'>it's</span> <span m='201570'>literally</span> <span
  m='202030'>true</span> <span m='202390'>that</span> <span m='202580'>A</span>
  <span m='202710'>surj</span> <span m='203080'>B</span> <span
  m='203250'>if</span> <span m='203390'>and</span> <span m='203490'>only</span>
  <span m='203680'>if</span> <span m='203820'>the</span> <span
  m='203920'>size</span> <span m='204310'>of</span> <span m='204430'>A</span>
  <span m='204610'>is</span> <span m='204760'>greater</span> <span m='205040'>or
  equal</span> <span m='205280'>to</span> <span m='205420'>the</span> <span
  m='205510'>size</span> <span m='205850'>of</span> <span m='205940'>B.</span>
  </p><p><span m='206530'>Now,</span> <span m='206710'>let</span> <span
  m='206870'>me</span> <span m='208010'>take</span> <span m='208230'>a</span>
  <span m='208270'>moment</span> <span m='208680'>to</span> <span
  m='208880'>say</span> <span m='209230'>that</span> <span
  m='209460'>this</span> <span m='209670'>notion</span> <span
  m='210010'>of</span> <span m='210120'>size</span> <span m='210750'>or</span>
  <span m='210860'>cardinality,</span> <span m='212920'>when you're
  talking</span> <span m='213300'>about</span> <span m='213510'>infinite</span>
  <span m='213860'>sets,</span> <span m='214130'>it's</span> <span
  m='214270'>kind</span> <span m='214510'>of</span> <span m='214600'>a</span>
  <span m='214680'>no-no.</span> <span m='215630'>There's</span> <span
  m='216610'>an</span> <span m='216720'>abstract</span> <span
  m='217260'>concept</span> <span m='217850'>of</span> <span
  m='218950'>what</span> <span m='219310'>cardinal</span> <span
  m='220030'>numbers</span> <span m='220480'>are,</span> <span
  m='220620'>what</span> <span m='220760'>these</span> <span
  m='220920'>infinite</span> <span m='221300'>numbers</span> <span
  m='221670'>are.</span> <span m='221820'>But</span> <span m='221950'>the</span>
  <span m='222020'>truth</span> <span m='222290'>is,</span> <span
  m='222440'>they're</span> <span m='222570'>technical</span> <span
  m='223050'>and</span> <span m='223170'>not</span> <span m='223360'>of</span>
  <span m='223430'>very</span> <span m='223640'>much</span> <span
  m='223840'>use.</span> <span m='224600'>So,</span> <span m='224770'>we</span>
  <span m='224920'>will</span> <span m='225050'>never</span> <span
  m='225320'>actually</span> <span m='225830'>be</span> <span
  m='225970'>talking</span> <span m='226370'>about</span> <span
  m='227255'>the</span> <span m='227690'>cardinality</span> <span
  m='228640'>or</span> <span m='228770'>size</span> <span m='229200'>of</span>
  <span m='229300'>an</span> <span m='229390'>infinite</span> <span
  m='229780'>set.</span> <span m='230100'>But</span> <span
  m='230270'>what</span> <span m='230430'>we</span> <span m='230550'>will</span>
  <span m='230850'>do</span> <span m='231290'>is</span> <span
  m='231530'>compare</span> <span m='232070'>them.</span> <span
  m='232270'>We're</span> <span m='232390'>going</span> <span
  m='232550'>to</span> <span m='232640'>have</span> <span m='232900'>a</span>
  <span m='233210'>nice</span> <span m='233640'>elementary</span> <span
  m='234640'>theory</span> <span m='235220'>of</span> <span
  m='235470'>the</span> <span m='235630'>idea</span> <span
  m='236170'>that</span> <span m='237250'>the</span> <span
  m='237410'>cardinality</span> <span m='238310'>of</span> <span
  m='238510'>one</span> <span m='238720'>set</span> <span m='239070'>is</span>
  <span m='239250'>greater</span> <span m='239630'>than</span> <span
  m='239790'>or</span> <span m='239890'>equal</span> <span m='240190'>to</span>
  <span m='240310'>the</span> <span m='240390'>cardinality</span> <span
  m='241150'>of</span> <span m='241370'>another</span> <span
  m='241690'>set.</span> <span m='242250'>And</span> <span m='242410'>the</span>
  <span m='242480'>basic</span> <span m='242850'>definition</span> <span
  m='243450'>is</span> <span m='243550'>going</span> <span m='243700'>to</span>
  <span m='243790'>be</span> <span m='243880'>based</span> <span
  m='244280'>on</span> <span m='244440'>surj.</span> </p><p><span
  m='246780'>Similarly,</span> <span m='247190'>bijection</span> <span
  m='247830'>is</span> <span m='247960'>even</span> <span
  m='248160'>easier.</span> <span m='249150'>A</span> <span
  m='249390'>bij</span> <span m='249810'>B</span> <span m='250570'>means</span>
  <span m='250960'>that</span> <span m='251120'>there's</span> <span
  m='251300'>a</span> <span m='251360'>bijection</span> <span
  m='251890'>from</span> <span m='252090'>A</span> <span m='252220'>to</span>
  <span m='252300'>B.</span> <span m='252670'>And</span> <span
  m='252820'>we're</span> <span m='252910'>going</span> <span
  m='253030'>to</span> <span m='253140'>interpret</span> <span
  m='253570'>that</span> <span m='253830'>as</span> <span
  m='253930'>saying</span> <span m='254190'>that</span> <span m='254370'>A
  and</span> <span m='254590'>B</span> <span m='254710'>are</span> <span
  m='254780'>the</span> <span m='254850'>same</span> <span
  m='255170'>size.</span> <span m='255990'>That</span> <span
  m='256200'>is,</span> <span m='256410'>for</span> <span
  m='256540'>finite</span> <span m='256959'>sets,</span> <span
  m='257260'>it</span> <span m='257370'>literally</span> <span
  m='257810'>means</span> <span m='258230'>A</span> <span m='258579'>and</span>
  <span m='258990'>B</span> <span m='259200'>have</span> <span
  m='259360'>the</span> <span m='259430'>same</span> <span
  m='259690'>number</span> <span m='259959'>of</span> <span
  m='260070'>elements.</span> <span m='261180'>We're</span> <span
  m='261350'>going</span> <span m='261490'>to</span> <span
  m='261600'>adopt</span> <span m='262400'>the</span> <span
  m='262560'>notion</span> <span m='262970'>of</span> <span m='263070'>a</span>
  <span m='263140'>bijective</span> <span m='263850'>relation</span> <span
  m='264800'>for</span> <span m='265030'>infinite</span> <span
  m='265610'>sets</span> <span m='265980'>as</span> <span
  m='266130'>meaning,</span> <span m='267140'>I</span> <span
  m='267280'>don't</span> <span m='267380'>know</span> <span
  m='267490'>what</span> <span m='267870'>their</span> <span
  m='268030'>size</span> <span m='268430'>is,</span> <span m='268690'>but</span>
  <span m='268770'>I</span> <span m='268860'>know</span> <span
  m='269090'>it's</span> <span m='269260'>the</span> <span
  m='269350'>same</span> <span m='269720'>because</span> <span
  m='270140'>there's</span> <span m='270330'>a</span> <span
  m='270390'>bijection</span> <span m='271040'>between</span> <span
  m='271295'>them.</span> <span m='271550'>There's</span> <span
  m='271770'>a</span> <span m='271820'>perfect</span> <span
  m='272310'>one</span> <span m='272450'>to</span> <span m='272550'>one</span>
  <span m='272750'>correspondence</span> <span m='273440'>between</span> <span
  m='274120'>As</span> <span m='274500'>and</span> <span m='274640'>Bs.</span>
  </p><p><span m='277560'>Let's</span> <span m='278160'>look</span> <span
  m='278530'>at</span> <span m='279550'>an</span> <span
  m='279670'>example</span> <span m='280150'>of</span> <span
  m='280290'>where</span> <span m='280440'>bijection</span> <span
  m='280950'>comes</span> <span m='281250'>up.</span> <span
  m='281840'>The</span> <span m='281970'>power</span> <span
  m='282390'>set</span> <span m='282650'>of</span> <span m='282770'>N--</span>
  <span m='283110'>if N</span> <span m='283390'>is</span> <span
  m='283520'>the</span> <span m='283590'>non-negative</span> <span
  m='284230'>integers--</span> <span m='285140'>the</span> <span
  m='285280'>power</span> <span m='285620'>set</span> <span m='285860'>of</span>
  <span m='285970'>N</span> <span m='286100'>is</span> <span
  m='286230'>all</span> <span m='286410'>the</span> <span
  m='286500'>subsets</span> <span m='287080'>of</span> <span
  m='287200'>non-negative</span> <span m='287800'>integers.</span> <span
  m='288460'>And</span> <span m='289070'>let</span> <span m='289340'>me</span>
  <span m='289450'>just</span> <span m='289660'>remark</span> <span
  m='290010'>that</span> <span m='290190'>there</span> <span
  m='290300'>is</span> <span m='290410'>an</span> <span
  m='290540'>obvious</span> <span m='291010'>bijection</span> <span
  m='291680'>between</span> <span m='292450'>the</span> <span
  m='292590'>subsets</span> <span m='293130'>of</span> <span
  m='293220'>integers</span> <span m='294010'>and</span> <span
  m='294270'>the</span> <span m='294480'>infinite</span> <span
  m='295330'>bit-strings,</span> <span m='295960'>the</span> <span
  m='296050'>infinite</span> <span m='296440'>strings</span> <span
  m='296780'>of</span> <span m='296870'>zeroes</span> <span
  m='297220'>and</span> <span m='297350'>ones.</span> <span
  m='297570'>So,</span> <span m='297790'>N</span> <span m='297950'>is</span>
  <span m='298130'>the</span> <span m='298220'>set</span> <span
  m='298850'>of</span> <span m='299070'>non-negative</span> <span
  m='299600'>integers,</span> <span m='299970'>0,</span> <span
  m='300200'>1,</span> <span m='300410'>2.</span> </p><p><span
  m='301600'>If</span> <span m='301820'>you</span> <span m='301900'>take</span>
  <span m='302200'>any</span> <span m='302460'>subset</span> <span
  m='303210'>of</span> <span m='303670'>N,</span> <span m='303970'>here's</span>
  <span m='304210'>one</span> <span m='304520'>with</span> <span
  m='304810'>has</span> <span m='305070'>0,</span> <span
  m='305400'>missing</span> <span m='305760'>1,</span> <span
  m='306250'>has</span> <span m='306520'>2</span> <span m='306680'>and</span>
  <span m='306780'>3,</span> <span m='307010'>missing</span> <span
  m='307300'>4,</span> <span m='307560'>5,</span> <span m='307870'>has</span>
  <span m='308030'>6,</span> <span m='308340'>and</span> <span
  m='308450'>so</span> <span m='308770'>on,</span> <span m='309360'>then</span>
  <span m='309560'>what</span> <span m='309810'>I</span> <span
  m='309900'>can</span> <span m='310100'>do</span> <span m='310370'>is</span>
  <span m='310750'>represent</span> <span m='312290'>such</span> <span
  m='312620'>a</span> <span m='312670'>subset,</span> <span
  m='313300'>possibly</span> <span m='313770'>an</span> <span
  m='313840'>infinite</span> <span m='314220'>subset</span> <span
  m='314690'>now,</span> <span m='315160'>by</span> <span m='315490'>an</span>
  <span m='315590'>infinite</span> <span m='316150'>sequence</span> <span
  m='316580'>of</span> <span m='316710'>ones</span> <span m='317040'>and</span>
  <span m='317180'>zeros.</span> <span m='317610'>Put in</span> <span
  m='317890'>ones</span> <span m='318390'>in</span> <span m='318500'>the</span>
  <span m='318570'>position</span> <span m='319140'>where</span> <span
  m='319680'>elements</span> <span m='320400'>in</span> <span
  m='320560'>the</span> <span m='320630'>subset</span> <span
  m='321120'>occur</span> <span m='321550'>and</span> <span
  m='321750'>zeroes</span> <span m='322280'>in</span> <span
  m='322410'>positions</span> <span m='323300'>where</span> <span
  m='323830'>elements</span> <span m='324360'>don't</span> <span
  m='324570'>occur.</span> <span m='325120'>This</span> <span
  m='325310'>was</span> <span m='325470'>exactly</span> <span
  m='325990'>the</span> <span m='326070'>same</span> <span
  m='326790'>bijection</span> <span m='327870'>that</span> <span
  m='328070'>we</span> <span m='328180'>had</span> <span m='328360'>found</span>
  <span m='328830'>between</span> <span m='330030'>the</span> <span
  m='330140'>non-negative--</span> <span m='334440'>the</span> <span
  m='334520'>bit-strings</span> <span m='335920'>and</span> <span
  m='336090'>the</span> <span m='336150'>finite</span> <span
  m='336610'>subsets</span> <span m='337350'>of</span> <span
  m='337620'>the</span> <span m='337700'>non-negative</span> <span
  m='338340'>integers.</span> <span m='339450'>But</span> <span
  m='339730'>now,</span> <span m='340070'>we're</span> <span
  m='340260'>just</span> <span m='340480'>extending</span> <span
  m='340980'>it</span> <span m='341130'>to</span> <span
  m='341620'>arbitrary</span> <span m='342200'>subsets</span> <span
  m='342720'>of</span> <span m='342810'>the</span> <span
  m='342880'>non-negative</span> <span m='343450'>integers.</span> </p><p><span
  m='343880'>So,</span> <span m='344070'>this</span> <span
  m='344260'>defines</span> <span m='344660'>a</span> <span
  m='344740'>bijection</span> <span m='345390'>between</span> <span
  m='346130'>any</span> <span m='346350'>subset</span> <span
  m='346770'>of</span> <span m='346860'>integers</span> <span
  m='347300'>corresponds</span> <span m='347860'>to</span> <span
  m='347980'>an</span> <span m='348050'>infinite</span> <span
  m='348480'>bit-strings.</span> <span m='349470'>And</span> <span
  m='349730'>conversely,</span> <span m='350400'>from</span> <span
  m='350600'>any</span> <span m='350850'>infinite</span> <span
  m='351120'>bit-string,</span> <span m='351630'>you</span> <span
  m='351740'>can</span> <span m='351920'>reconstruct</span> <span
  m='352690'>what</span> <span m='353360'>subset</span> <span
  m='353850'>it</span> <span m='353990'>refers</span> <span
  m='354440'>to.</span> <span m='354770'>So,</span> <span m='354960'>we
  use</span> <span m='355160'>this</span> <span m='355310'>notation</span> <span
  m='355860'>{0,1}</span> <span m='356520'>to</span> <span m='356690'>the</span>
  <span m='356880'>omega,</span> <span m='357900'>meaning</span> <span
  m='358680'>the</span> <span m='359000'>infinite</span> <span
  m='359610'>bit-strings</span> <span m='360210'>that</span> <span
  m='360340'>are</span> <span m='360430'>infinite</span> <span
  m='360890'>to</span> <span m='361010'>the right.</span> <span
  m='361265'>They</span> <span m='361520'>have</span> <span m='361720'>a</span>
  <span m='361810'>beginning.</span> <span m='362880'>In</span> <span
  m='363070'>comparison</span> <span m='363670'>to</span> <span
  m='363810'>{0,1}</span> <span m='364350'>superscript</span> <span
  m='364940'>star,</span> <span m='365610'>which</span> <span
  m='365850'>refers</span> <span m='366360'>to</span> <span
  m='366530'>the</span> <span m='367350'>finite</span> <span
  m='368290'>sets</span> <span m='368820'>of</span> <span
  m='368940'>bit-strings.</span> </p><p><span m='371110'>So</span> <span
  m='371280'>now,</span> <span m='371450'>let's</span> <span
  m='371690'>examine</span> <span m='372680'>the</span> <span
  m='374230'>standard</span> <span m='374890'>size</span> <span
  m='375300'>properties</span> <span m='375840'>that</span> <span
  m='375990'>you</span> <span m='376050'>would</span> <span
  m='376140'>expect</span> <span m='376620'>if</span> <span
  m='377270'>these</span> <span m='377550'>relationships</span> <span
  m='378440'>of</span> <span m='378610'>surj</span> <span m='378975'>and</span>
  <span m='379340'>bij</span> <span m='379750'>behaved</span> <span
  m='380320'>like</span> <span m='381560'>relationships</span> <span
  m='382280'>between</span> <span m='382650'>sizes.</span> <span
  m='383050'>So,</span> <span m='383450'>one</span> <span
  m='384110'>basic</span> <span m='384750'>property</span> <span
  m='385250'>that</span> <span m='385390'>finite</span> <span
  m='385790'>sizes</span> <span m='386200'>have</span> <span
  m='386530'>is</span> <span m='386780'>that</span> <span m='386920'>if</span>
  <span m='387120'>A</span> <span m='387320'>is</span> <span
  m='387470'>equal</span> <span m='387690'>to</span> <span m='387810'>B</span>
  <span m='388030'>and</span> <span m='388190'>B</span> <span
  m='388350'>is</span> <span m='388480'>equal</span> <span m='388700'>to</span>
  <span m='388810'>C</span> <span m='389070'>in</span> <span
  m='389180'>size,</span> <span m='390020'>then</span> <span
  m='390240'>the</span> <span m='390576'>size of</span> <span m='390912'>A and
  the</span> <span m='391250'>size</span> <span m='391580'>of</span> <span
  m='391680'>C</span> <span m='391930'>are</span> <span m='392030'>the</span>
  <span m='392110'>same.</span> <span m='392640'>That's</span> <span
  m='392810'>certainly</span> <span m='393150'>true</span> <span
  m='393300'>for</span> <span m='393430'>finite</span> <span
  m='393850'>sets.</span> <span m='394690'>Does</span> <span
  m='395020'>it</span> <span m='395120'>hold</span> <span m='395420'>for</span>
  <span m='395560'>infinite</span> <span m='396050'>sets,</span> <span
  m='396500'>where</span> <span m='396720'>now</span> <span
  m='397380'>equality</span> <span m='398020'>is</span> <span
  m='398130'>going</span> <span m='398270'>to</span> <span m='398350'>be</span>
  <span m='398470'>replaced</span> <span m='398980'>by</span> <span
  m='399385'>bij?</span> <span m='399790'>Well,</span> <span
  m='400170'>we</span> <span m='400340'>have</span> <span m='400510'>to</span>
  <span m='400610'>check</span> <span m='400920'>it.</span> </p><p><span
  m='401390'>Is</span> <span m='401610'>it</span> <span m='401720'>true</span>
  <span m='402030'>that</span> <span m='402190'>if</span> <span
  m='402400'>A</span> <span m='402950'>bij</span> <span m='403360'>B</span>
  <span m='403740'>and</span> <span m='403920'>B</span> <span
  m='404140'>bij</span> <span m='404500'>C</span> <span
  m='404880'>implies</span> <span m='405610'>A</span> <span
  m='405790'>bij</span> <span m='406260'>C,</span> <span m='407190'>well,</span>
  <span m='407700'>how</span> <span m='407830'>do</span> <span
  m='407920'>you</span> <span m='407980'>prove</span> <span
  m='408340'>that?</span> <span m='408910'>Well,</span> <span
  m='409420'>it's</span> <span m='409580'>true,</span> <span
  m='410210'>and</span> <span m='410420'>here's</span> <span
  m='410660'>how.</span> <span m='411720'>By</span> <span
  m='411910'>definition,</span> <span m='412780'>since</span> <span
  m='413350'>A</span> <span m='413580'>bij</span> <span m='414090'>B,</span>
  <span m='414720'>that</span> <span m='415030'>means</span> <span
  m='415460'>that</span> <span m='415660'>you</span> <span
  m='415730'>have</span> <span m='416090'>a</span> <span
  m='416200'>bijection</span> <span m='418230'>g</span> <span
  m='418660'>from</span> <span m='418980'>A</span> <span m='419180'>to</span>
  <span m='419260'>B.</span> <span m='420060'>And</span> <span
  m='420330'>since</span> <span m='420730'>B</span> <span m='421040'>bij</span>
  <span m='421420'>C,</span> <span m='421970'>you</span> <span
  m='422110'>have</span> <span m='422360'>a</span> <span
  m='422480'>bijection</span> <span m='423220'>f</span> <span
  m='423840'>from</span> <span m='424150'>B</span> <span m='424340'>to</span>
  <span m='424430'>C.</span> <span m='425390'>Now,</span> <span
  m='425600'>I</span> <span m='425700'>need</span> <span m='426010'>from</span>
  <span m='426180'>these</span> <span m='426390'>two</span> <span
  m='426580'>bijections</span> <span m='427310'>that</span> <span
  m='427430'>I'm</span> <span m='427580'>given,</span> <span m='429020'>I</span>
  <span m='429180'>need</span> <span m='429420'>to</span> <span
  m='429510'>find</span> <span m='429770'>a</span> <span
  m='429810'>bijection</span> <span m='430430'>between A</span> <span
  m='430810'>and</span> <span m='431270'>C.</span> <span m='431780'>Well,</span>
  <span m='431920'>that's</span> <span m='432160'>easy.</span> </p><p><span
  m='432550'>What</span> <span m='432760'>you</span> <span m='432860'>do</span>
  <span m='433490'>is</span> <span m='433750'>you</span> <span
  m='433880'>use</span> <span m='434150'>g</span> <span m='434430'>to</span>
  <span m='434530'>go</span> <span m='434750'>from</span> <span
  m='434950'>A</span> <span m='435130'>to</span> <span m='435220'>B,</span>
  <span m='435950'>and</span> <span m='436140'>then</span> <span
  m='436260'>you</span> <span m='436370'>use</span> <span m='436640'>f</span>
  <span m='436920'>to</span> <span m='437050'>go</span> <span
  m='437260'>from</span> <span m='437500'>B</span> <span m='437670'>to</span>
  <span m='437750'>C.</span> <span m='438840'>And</span> <span
  m='439030'>you</span> <span m='439110'>compose</span> <span
  m='439730'>them,</span> <span m='439950'>and</span> <span
  m='440160'>that</span> <span m='440390'>gives</span> <span
  m='440680'>you</span> <span m='441090'>the</span> <span
  m='441220'>needed</span> <span m='441580'>bijection</span> <span
  m='442300'>from</span> <span m='442510'>A</span> <span m='442640'>to</span>
  <span m='442730'>C.</span> <span m='443090'>So,</span> <span
  m='443550'>define</span> <span m='444140'>h</span> <span m='444420'>to</span>
  <span m='444540'>be</span> <span m='444980'>the</span> <span
  m='445090'>composition</span> <span m='446150'>of</span> <span
  m='446420'>f</span> <span m='446650'>and</span> <span m='446880'>g.</span>
  <span m='447590'>And</span> <span m='447750'>it's</span> <span
  m='447910'>easy</span> <span m='448200'>to</span> <span
  m='448270'>check</span> <span m='448910'>that</span> <span
  m='449130'>if</span> <span m='449350'>g</span> <span m='449660'>and</span>
  <span m='450150'>f</span> <span m='450460'>are</span> <span
  m='450580'>bijections,</span> <span m='451350'>then</span> <span
  m='451520'>their</span> <span m='451620'>composition</span> <span
  m='452350'>is a</span> <span m='452620'>bijection.</span> <span
  m='453570'>So,</span> <span m='453780'>that's</span> <span
  m='454020'>how</span> <span m='454190'>I</span> <span m='454280'>find</span>
  <span m='454740'>the</span> <span m='454820'>needed</span> <span
  m='455150'>bijection</span> <span m='455760'>from</span> <span m='455970'>A to
  C.</span> <span m='456500'>So,</span> <span m='456670'>this</span> <span
  m='456850'>property</span> <span m='457250'>works</span> <span
  m='457550'>out</span> <span m='457680'>just</span> <span
  m='457940'>fine.</span> </p><p><span m='458820'>The</span> <span
  m='459450'>similar</span> <span m='459830'>property</span> <span
  m='460210'>applies</span> <span m='460820'>to</span> <span
  m='461780'>at</span> <span m='461950'>least</span> <span m='462240'>as</span>
  <span m='462360'>big</span> <span m='462600'>as,</span> <span
  m='462730'>greater</span> <span m='463010'>than</span> <span
  m='463100'>or</span> <span m='463210'>equal</span> <span m='463470'>to.</span>
  <span m='463820'>For</span> <span m='464010'>finite</span> <span
  m='464410'>sets,</span> <span m='464770'>if</span> <span m='464920'>A</span>
  <span m='465090'>is</span> <span m='465210'>greater</span> <span
  m='465450'>than or equal to</span> <span m='465735'>B</span> <span
  m='466020'>and</span> <span m='466150'>B</span> <span m='466280'>is</span>
  <span m='466380'>greater than or equal to</span> <span m='466790'>C</span>
  <span m='467170'>in</span> <span m='467280'>size,</span> <span
  m='467950'>then</span> <span m='468280'>A is</span> <span m='468450'>greater
  than</span> <span m='468630'>or</span> <span m='468710'>equal</span> <span
  m='468890'>to</span> <span m='469010'>C.</span> <span m='469590'>And</span>
  <span m='469730'>actually,</span> <span m='470010'>the</span> <span
  m='470190'>same</span> <span m='470380'>argument</span> <span
  m='470980'>that</span> <span m='471180'>worked</span> <span
  m='471860'>for</span> <span m='472010'>bij</span> <span
  m='473070'>works</span> <span m='473430'>for surj,</span> <span
  m='474010'>because</span> <span m='474380'>the</span> <span
  m='474460'>composition</span> <span m='476460'>of</span> <span
  m='476540'>surjective</span> <span m='477110'>functions</span> <span
  m='477570'>is</span> <span m='477700'>a</span> <span
  m='477760'>surjective</span> <span m='478300'>function.</span> <span
  m='479050'>So,</span> <span m='479190'>if</span> <span m='479380'>A</span>
  <span m='479640'>surj</span> <span m='480050'>B</span> <span
  m='480300'>and</span> <span m='480430'>B</span> <span m='480610'>surj</span>
  <span m='480980'>C</span> <span m='481660'>implies</span> <span
  m='482280'>A</span> <span m='482510'>surj</span> <span m='483080'>C.</span>
  </p><p><span m='483660'>Now</span> <span m='484080'>again</span> <span
  m='484400'>remember,</span> <span m='485280'>although</span> <span
  m='485590'>we're</span> <span m='485780'>thinking</span> <span
  m='486280'>of</span> <span m='486380'>surj</span> <span m='486770'>as</span>
  <span m='486910'>meaning</span> <span m='487550'>greater</span> <span
  m='487860'>than</span> <span m='487980'>or</span> <span
  m='488060'>equal</span> <span m='488280'>to</span> <span m='488440'>in</span>
  <span m='488560'>size,</span> <span m='489910'>you</span> <span
  m='490080'>cannot</span> <span m='490580'>take</span> <span
  m='490900'>these</span> <span m='491140'>size</span> <span
  m='491540'>properties</span> <span m='492000'>for</span> <span
  m='492140'>granted.</span> <span m='492550'>They</span> <span
  m='492690'>have</span> <span m='492890'>to</span> <span m='492990'>be</span>
  <span m='493110'>proved.</span> <span m='493760'>Surj</span> <span
  m='494150'>has</span> <span m='494350'>a</span> <span
  m='494410'>technical</span> <span m='494940'>definition</span> <span
  m='495790'>having</span> <span m='496130'>to</span> <span m='496240'>do</span>
  <span m='496430'>with</span> <span m='496950'>surjective</span> <span
  m='497570'>functions,</span> <span m='498110'>functions</span> <span
  m='498490'>with</span> <span m='498640'>greater</span> <span m='498980'>than
  or equal</span> <span m='499140'>to</span> <span m='499240'>one</span> <span
  m='499450'>arrow</span> <span m='499860'>in.</span> <span
  m='500600'>That</span> <span m='502310'>is</span> <span m='502480'>not</span>
  <span m='502970'>the</span> <span m='503040'>same</span> <span
  m='503360'>as</span> <span m='503490'>talking</span> <span
  m='503820'>about</span> <span m='504160'>equality</span> <span
  m='504790'>of</span> <span m='505040'>some</span> <span m='505650'>kind</span>
  <span m='505880'>of</span> <span m='505980'>sizes.</span> </p><p><span
  m='507470'>Well,</span> <span m='507630'>let's</span> <span
  m='507830'>look</span> <span m='508010'>at</span> <span m='508070'>an</span>
  <span m='508160'>example</span> <span m='508690'>where</span> <span
  m='509400'>the</span> <span m='509630'>size</span> <span
  m='509970'>properties</span> <span m='510380'>hold</span> <span
  m='510680'>but</span> <span m='510850'>they're</span> <span
  m='510980'>less</span> <span m='511250'>obvious.</span> <span
  m='512039'>Because</span> <span m='513169'>here's</span> <span
  m='513780'>another</span> <span m='514110'>familiar</span> <span
  m='514870'>size</span> <span m='515270'>property.</span> <span
  m='516020'>If</span> <span m='516340'>A</span> <span m='516620'>and</span>
  <span m='516900'>B</span> <span m='517549'>are</span> <span
  m='517830'>each</span> <span m='518260'>of</span> <span m='518400'>size</span>
  <span m='518780'>greater</span> <span m='519200'>than or</span> <span
  m='519409'>equal</span> <span m='519620'>to</span> <span m='519679'>the</span>
  <span m='519789'>other</span> <span m='520049'>one,</span> <span
  m='520289'>then</span> <span m='520460'>they're</span> <span
  m='520590'>the</span> <span m='520690'>same</span> <span
  m='520970'>size.</span> <span m='521679'>So,</span> <span m='521929'>if</span>
  <span m='522309'>the</span> <span m='522419'>size</span> <span
  m='522730'>of</span> <span m='522809'>A</span> <span m='522929'>is</span>
  <span m='523039'>greater</span> <span m='523280'>than or equal to</span> <span
  m='523450'>the</span> <span m='523559'>size</span> <span m='523960'>of
  B</span> <span m='524350'>and</span> <span m='524470'>the</span> <span
  m='524530'>size</span> <span m='524830'>of</span> <span m='524950'>B</span>
  <span m='525110'>is</span> <span m='525220'>greater</span> <span
  m='525620'>than or equal to</span> <span m='525740'>the</span> <span
  m='525800'>size</span> <span m='526120'>of</span> <span m='526200'>A,</span>
  <span m='526910'>then</span> <span m='527410'>A</span> <span
  m='527770'>and</span> <span m='528100'>B</span> <span m='528260'>are</span>
  <span m='528310'>the</span> <span m='528400'>same</span> <span
  m='528680'>size.</span> <span m='529100'>Now,</span> <span
  m='529140'>this</span> <span m='529330'>is</span> <span
  m='529430'>certainly</span> <span m='529850'>true</span> <span
  m='530040'>for</span> <span m='530180'>finite</span> <span
  m='530580'>sets.</span> <span m='530930'>It's</span> <span
  m='531120'>kind</span> <span m='531330'>of,</span> <span m='531470'>you don't
  even</span> <span m='531750'>think</span> <span m='532030'>about</span> <span
  m='532770'>that</span> <span m='533000'>fact.</span> <span
  m='534760'>And</span> <span m='536170'>it</span> <span m='536360'>holds</span>
  <span m='536680'>for</span> <span m='536800'>infinite</span> <span
  m='537270'>sets.</span> <span m='537800'>But,</span> <span
  m='538370'>it's</span> <span m='538650'>not</span> <span m='538830'>so</span>
  <span m='539090'>obvious.</span> </p><p><span m='539730'>So,</span> <span
  m='539910'>what</span> <span m='540100'>we're</span> <span
  m='540180'>saying</span> <span m='540560'>is</span> <span
  m='541060'>that</span> <span m='541270'>if</span> <span m='541500'>I</span>
  <span m='541670'>have</span> <span m='541930'>a</span> <span
  m='541990'>surjective</span> <span m='542650'>function</span> <span
  m='543110'>from</span> <span m='543330'>A</span> <span m='543490'>to</span>
  <span m='543630'>B</span> <span m='544650'>and</span> <span
  m='544940'>I</span> <span m='545020'>have</span> <span
  m='545180'>another</span> <span m='545610'>surjective</span> <span
  m='546210'>function</span> <span m='546610'>from</span> <span
  m='546840'>B</span> <span m='547310'>to</span> <span m='547520'>A,</span>
  <span m='548200'>then</span> <span m='548910'>there's</span> <span
  m='549130'>a</span> <span m='549200'>bijection</span> <span m='550140'>between
  A</span> <span m='550610'>and</span> <span m='550980'>B.</span> <span
  m='551810'>And</span> <span m='551950'>the</span> <span
  m='552010'>problem</span> <span m='552500'>here</span> <span
  m='552750'>is</span> <span m='553340'>that</span> <span m='553740'>this</span>
  <span m='553970'>surjection</span> <span m='554710'>from</span> <span
  m='554890'>A</span> <span m='554960'>to</span> <span m='555040'>B</span> <span
  m='555200'>might</span> <span m='555420'>not</span> <span m='555590'>be</span>
  <span m='555700'>a</span> <span m='555770'>bijection.</span> <span
  m='556880'>And</span> <span m='557110'>this</span> <span
  m='557440'>surjection</span> <span m='558120'>from</span> <span
  m='558310'>B</span> <span m='558460'>to</span> <span m='558590'>A</span> <span
  m='558780'>might</span> <span m='559030'>also</span> <span
  m='559380'>not</span> <span m='559660'>be</span> <span m='559780'>a</span>
  <span m='559850'>bijection.</span> <span m='560640'>So,</span> <span
  m='560860'>where's</span> <span m='561150'>the</span> <span
  m='561230'>bijection</span> <span m='561820'>going</span> <span
  m='561940'>to</span> <span m='562020'>come</span> <span
  m='562240'>from?</span> <span m='562710'>I</span> <span m='562820'>have</span>
  <span m='563040'>to</span> <span m='563140'>build</span> <span
  m='563460'>it.</span> </p><p><span m='564170'>And</span> <span
  m='564710'>so,</span> <span m='564920'>this</span> <span m='565120'>is</span>
  <span m='565260'>not</span> <span m='565670'>an</span> <span
  m='565840'>obvious</span> <span m='566330'>property,</span> <span
  m='566840'>it's</span> <span m='567010'>true.</span> <span
  m='567320'>It's</span> <span m='567440'>called</span> <span
  m='567630'>the</span> <span m='567710'>Schroeder-Bernstein</span> <span
  m='568660'>Theorem.</span> <span m='569080'>And</span> <span
  m='569240'>the</span> <span m='569300'>trick,</span> <span
  m='569590'>basically,</span> <span m='570120'>is</span> <span
  m='570310'>you</span> <span m='570750'>take</span> <span m='571100'>the</span>
  <span m='572030'>bijection</span> <span m='572600'>from</span> <span
  m='572800'>A</span> <span m='572920'>to</span> <span m='573020'>B</span> <span
  m='573460'>and</span> <span m='573660'>the</span> <span
  m='573730'>bijection</span> <span m='574260'>from</span> <span
  m='574450'>B</span> <span m='574630'>to</span> <span m='574780'>A</span> <span
  m='575035'>and you</span> <span m='575290'>take</span> <span m='575510'>parts
  of</span> <span m='575800'>one</span> <span m='576160'>and</span> <span
  m='576260'>combine</span> <span m='576550'>it</span> <span
  m='576630'>with</span> <span m='576730'>parts</span> <span
  m='577020'>of</span> <span m='577090'>the</span> <span
  m='577200'>other.</span> <span m='577790'>And</span> <span
  m='578100'>in</span> <span m='578290'>a</span> <span
  m='579890'>slightly</span> <span m='580380'>ingenious</span> <span
  m='580910'>way</span> <span m='581240'>that</span> <span
  m='581500'>actually</span> <span m='581930'>is</span> <span
  m='582490'>contained</span> <span m='582990'>in</span> <span
  m='583080'>a</span> <span m='583470'>problem</span> <span m='583820'>in</span>
  <span m='583910'>the</span> <span m='583980'>text,</span> <span
  m='584680'>you</span> <span m='584840'>can</span> <span m='585060'>find</span>
  <span m='585860'>the</span> <span m='585980'>bijection</span> <span
  m='586660'>from</span> <span m='586890'>A</span> <span m='587030'>to</span>
  <span m='587160'>B,</span> <span m='587320'>but</span> <span
  m='587480'>it</span> <span m='587570'>does</span> <span m='587790'>take</span>
  <span m='587990'>a</span> <span m='588040'>little</span> <span
  m='588240'>bit</span> <span m='588380'>of</span> <span
  m='588480'>ingenuity.</span> <span m='589300'>So</span> <span
  m='589530'>this</span> <span m='589740'>is</span> <span m='589930'>a</span>
  <span m='590420'>size</span> <span m='590920'>property</span> <span
  m='591430'>that</span> <span m='591610'>works</span> <span
  m='592110'>for</span> <span m='592310'>surj</span> <span m='593200'>and</span>
  <span m='593430'>bij,</span> <span m='594320'>but</span> <span
  m='595830'>you</span> <span m='596000'>can't</span> <span
  m='596300'>say</span> <span m='596520'>it's</span> <span
  m='596670'>obvious.</span> </p><p><span m='598460'>Well,</span> <span
  m='598720'>let's</span> <span m='598960'>look</span> <span
  m='599150'>at</span> <span m='599230'>an</span> <span
  m='599370'>unfamiliar</span> <span m='599970'>size</span> <span
  m='600250'>property.</span> <span m='600540'>Something</span> <span
  m='600820'>that's</span> <span m='600980'>not</span> <span
  m='601260'>true</span> <span m='601770'>of</span> <span
  m='602230'>finite</span> <span m='602690'>sets</span> <span
  m='603000'>where</span> <span m='603220'>we</span> <span
  m='603680'>have</span> <span m='603940'>to</span> <span
  m='604030'>start</span> <span m='604390'>being</span> <span
  m='604600'>careful</span> <span m='605010'>and not</span> <span
  m='605220'>just</span> <span m='605470'>hand</span> <span
  m='605740'>wave</span> <span m='605990'>and</span> <span m='606100'>use</span>
  <span m='606290'>our</span> <span m='606410'>intuition</span> <span
  m='606870'>about</span> <span m='607090'>finite</span> <span
  m='607500'>sets.</span> <span m='607800'>Namely,</span> <span
  m='608630'>for</span> <span m='608900'>infinite</span> <span
  m='609440'>sizes,</span> <span m='610820'>size</span> <span
  m='611190'>plus</span> <span m='611440'>1</span> <span m='611630'>is</span>
  <span m='611770'>equal</span> <span m='612000'>to</span> <span
  m='612120'>size.</span> <span m='613170'>Now,</span> <span
  m='613400'>what</span> <span m='613660'>exactly</span> <span
  m='614070'>does</span> <span m='614250'>that</span> <span
  m='614540'>mean?</span> <span m='615280'>Well,</span> <span
  m='615480'>let's</span> <span m='615510'>just</span> <span
  m='615760'>illustrate</span> <span m='616280'>it</span> <span
  m='616410'>with</span> <span m='616560'>an</span> <span
  m='616670'>example.</span> <span m='617360'>In</span> <span
  m='617490'>fact,</span> <span m='617790'>in</span> <span
  m='617890'>some</span> <span m='617950'>ways,</span> <span
  m='618210'>you</span> <span m='618310'>can</span> <span m='618520'>the</span>
  <span m='618620'>definition</span> <span m='619160'>of</span> <span
  m='619250'>an</span> <span m='619330'>infinite</span> <span
  m='620190'>set</span> <span m='620650'>is</span> <span m='621310'>that</span>
  <span m='622130'>its</span> <span m='622350'>size</span> <span
  m='622670'>plus</span> <span m='622950'>1</span> <span m='623140'>is</span>
  <span m='623280'>equal</span> <span m='623540'>to</span> <span
  m='623700'>its</span> <span m='623860'>size.</span> </p><p><span
  m='625180'>Let's</span> <span m='625290'>look</span> <span
  m='625430'>at</span> <span m='625490'>a</span> <span m='625520'>simple</span>
  <span m='625880'>example.</span> <span m='626800'>So,</span> <span
  m='627050'>on</span> <span m='627130'>the</span> <span
  m='627200'>bottom,</span> <span m='627700'>I</span> <span
  m='627900'>have</span> <span m='628120'>the</span> <span
  m='628150'>non-negative</span> <span m='628760'>integers.</span> <span
  m='629790'>And</span> <span m='629980'>on</span> <span m='630070'>the</span>
  <span m='630130'>top,</span> <span m='630570'>I</span> <span
  m='630670'>have</span> <span m='630690'>the</span> <span
  m='630770'>positive</span> <span m='631270'>integers.</span> <span
  m='631670'>So,</span> <span m='631810'>I</span> <span m='631880'>can</span>
  <span m='632010'>get</span> <span m='632180'>from</span> <span
  m='632400'>the</span> <span m='632800'>positive</span> <span
  m='633310'>integers</span> <span m='633850'>to</span> <span
  m='634020'>the</span> <span m='634210'>non-negative</span> <span
  m='634800'>integers</span> <span m='635140'>just</span> <span
  m='635330'>by</span> <span m='635460'>throwing</span> <span
  m='635870'>in</span> <span m='636020'>zero.</span> <span m='636400'>So,</span>
  <span m='636570'>that's</span> <span m='636750'>where</span> <span
  m='636860'>the</span> <span m='636940'>plus</span> <span m='637205'>one</span>
  <span m='637470'>comes</span> <span m='637750'>from.</span> <span
  m='638320'>Here's</span> <span m='638580'>a</span> <span
  m='638630'>nice</span> <span m='638930'>infinite</span> <span
  m='639360'>set.</span> <span m='639960'>I</span> <span m='640260'>add</span>
  <span m='640520'>another</span> <span m='640860'>element</span> <span
  m='641350'>to</span> <span m='641540'>it,</span> <span m='641750'>and</span>
  <span m='641920'>I</span> <span m='641970'>get</span> <span
  m='642150'>another</span> <span m='642490'>infinite</span> <span
  m='642910'>set,</span> <span m='643560'>but</span> <span
  m='643930'>they</span> <span m='644240'>are</span> <span m='644500'>the</span>
  <span m='644590'>same</span> <span m='644920'>size.</span> <span
  m='646150'>I</span> <span m='646240'>have</span> <span m='646350'>to</span>
  <span m='646440'>show a</span> <span m='646720'>bijection</span> <span
  m='647290'>between</span> <span m='647640'>them</span> <span
  m='647770'>to</span> <span m='647870'>show</span> <span
  m='648070'>they're</span> <span m='648230'>the</span> <span
  m='648300'>set</span> <span m='648530'>size.</span> </p><p><span
  m='648740'>Well,</span> <span m='648840'>you</span> <span
  m='648970'>know</span> <span m='649090'>what</span> <span
  m='649240'>the</span> <span m='649310'>bijection</span> <span
  m='649880'>is.</span> <span m='650180'>Map</span> <span m='650460'>0</span>
  <span m='650700'>to</span> <span m='650810'>1,</span> <span
  m='651210'>1</span> <span m='651520'>to</span> <span m='651965'>2,</span>
  <span m='652410'>2 to 3.</span> <span m='653990'>This</span> <span
  m='654260'>is</span> <span m='654380'>a</span> <span
  m='654430'>bijection</span> <span m='655070'>which</span> <span m='655270'>you
  know</span> <span m='655630'>as</span> <span m='655990'>the</span> <span
  m='656100'>add</span> <span m='656410'>one</span> <span
  m='656620'>function.</span> <span m='657170'>The</span> <span
  m='657390'>add</span> <span m='657640'>one</span> <span
  m='657900'>function</span> <span m='658780'>maps</span> <span
  m='659430'>the</span> <span m='659580'>non-negative</span> <span
  m='660250'>integers</span> <span m='660670'>to</span> <span
  m='660780'>the</span> <span m='660860'>positive</span> <span
  m='661360'>integers,</span> <span m='662140'>and</span> <span
  m='662360'>it's</span> <span m='662510'>a</span> <span
  m='662560'>perfect</span> <span m='663040'>bijection.</span> <span
  m='664030'>Therefore,</span> <span m='665080'>adding</span> <span
  m='665460'>one</span> <span m='665640'>element</span> <span
  m='666130'>to</span> <span m='666260'>the</span> <span
  m='666440'>non-negative</span> <span m='667030'>integers--</span> <span
  m='667840'>to</span> <span m='667980'>the</span> <span
  m='668060'>positive</span> <span m='668490'>integers</span> <span
  m='668860'>does</span> <span m='669060'>not</span> <span m='669340'>get</span>
  <span m='669600'>me</span> <span m='669770'>a</span> <span
  m='669890'>larger</span> <span m='670280'>set,</span> <span m='670670'>it
  gets</span> <span m='670900'>me</span> <span m='671000'>another</span> <span
  m='671290'>set</span> <span m='671550'>of</span> <span m='671640'>the</span>
  <span m='671720'>same</span> <span m='672020'>size.</span> </p><p><span
  m='672780'>And</span> <span m='672930'>this</span> <span
  m='673080'>argument</span> <span m='673530'>actually</span> <span
  m='673910'>generalizes</span> <span m='675560'>to</span> <span
  m='676400'>any</span> <span m='676660'>infinite</span> <span
  m='677070'>set.</span> <span m='677370'>If</span> <span m='677520'>you</span>
  <span m='677600'>throw</span> <span m='677940'>in</span> <span
  m='678050'>one</span> <span m='678240'>extra</span> <span
  m='678520'>element,</span> <span m='679340'>you</span> <span
  m='679470'>could</span> <span m='679630'>still</span> <span
  m='679880'>find</span> <span m='680140'>a</span> <span
  m='680200'>bijection</span> <span m='681200'>between</span> <span
  m='681570'>the</span> <span m='681670'>original</span> <span
  m='682050'>set</span> <span m='682500'>and the</span> <span
  m='682720'>set</span> <span m='683020'>with</span> <span m='683190'>one</span>
  <span m='683380'>extra</span> <span m='683690'>element.</span> <span
  m='685870'>So,</span> <span m='686490'>N</span> <span m='686750'>is</span>
  <span m='686890'>the</span> <span m='686950'>same</span> <span
  m='687210'>size</span> <span m='687520'>as</span> <span m='687600'>the</span>
  <span m='687680'>positive</span> <span m='688140'>integers.</span>
  </p><p><span m='689110'>Well,</span> <span m='689310'>in</span> <span
  m='689410'>fact,</span> <span m='689910'>let's</span> <span
  m='690020'>look</span> <span m='690140'>at</span> <span m='690210'>this</span>
  <span m='690380'>one.</span> <span m='692530'>I</span> <span
  m='692710'>can</span> <span m='693460'>enumerate</span> <span
  m='694060'>on</span> <span m='694200'>the</span> <span m='694280'>top</span>
  <span m='695390'>all</span> <span m='695670'>the</span> <span
  m='695840'>integers,</span> <span m='696340'>both</span> <span
  m='696580'>positive</span> <span m='696980'>and</span> <span
  m='697080'>negative.</span> <span m='697730'>0,</span> <span
  m='698150'>1,</span> <span m='698430'>minus</span> <span m='698780'>1,</span>
  <span m='699010'>2,</span> <span m='699250'>minus</span> <span
  m='699610'>2,</span> <span m='699800'>and</span> <span m='699890'>so</span>
  <span m='700180'>on.</span> <span m='700590'>And</span> <span
  m='700870'>that</span> <span m='701080'>gives</span> <span
  m='701320'>me</span> <span m='702130'>the</span> <span m='702220'>set</span>
  <span m='702480'>consisting</span> <span m='702940'>of</span> <span
  m='703040'>all</span> <span m='703200'>the</span> <span
  m='703320'>integers.</span> <span m='703730'>And</span> <span
  m='703820'>over</span> <span m='704000'>here,</span> <span m='704270'>I</span>
  <span m='704330'>can</span> <span m='704510'>have</span> <span
  m='704740'>0,</span> <span m='705120'>1,</span> <span m='705350'>2,</span>
  <span m='705750'>just</span> <span m='705950'>the</span> <span
  m='706010'>non-negative</span> <span m='706610'>integers.</span> <span
  m='707400'>And</span> <span m='707750'>you</span> <span m='707890'>can</span>
  <span m='708050'>see</span> <span m='708280'>the</span> <span
  m='708460'>orderly</span> <span m='708980'>way</span> <span
  m='709250'>in</span> <span m='709360'>which</span> <span
  m='709600'>I've</span> <span m='709770'>listed</span> <span
  m='710570'>the</span> <span m='711840'>integers</span> <span
  m='712310'>at</span> <span m='712430'>the</span> <span m='712510'>top.</span>
  <span m='713150'>That</span> <span m='713380'>implicitly</span> <span
  m='713940'>defines</span> <span m='714320'>a</span> <span
  m='714370'>bijection.</span> </p><p><span m='714980'>I'm</span> <span
  m='715110'>going</span> <span m='715260'>to</span> <span m='715680'>map</span>
  <span m='716360'>zero</span> <span m='716840'>to</span> <span
  m='717020'>the</span> <span m='717600'>zeroeth</span> <span
  m='718260'>element</span> <span m='718730'>of</span> <span
  m='719550'>the</span> <span m='719620'>sequence</span> <span
  m='720030'>above.</span> <span m='720340'>1</span> <span m='720550'>to</span>
  <span m='720660'>1,</span> <span m='720920'>2</span> <span
  m='721150'>to</span> <span m='721240'>minus</span> <span m='721660'>1,</span>
  <span m='721920'>3</span> <span m='722190'>to</span> <span
  m='722280'>2,</span> <span m='722520'>4</span> <span m='722790'>to</span>
  <span m='722870'>minus</span> <span m='723280'>2.</span> <span
  m='723880'>And</span> <span m='724110'>in</span> <span m='724220'>this</span>
  <span m='724420'>way,</span> <span m='725350'>I</span> <span
  m='725870'>have</span> <span m='726110'>actually</span> <span
  m='726500'>defined</span> <span m='727410'>a</span> <span
  m='727470'>bijection</span> <span m='728520'>between</span> <span
  m='729490'>the</span> <span m='729670'>non-negative</span> <span
  m='730320'>integers</span> <span m='730800'>and</span> <span
  m='731120'>all</span> <span m='731370'>the</span> <span
  m='731500'>integers.</span> <span m='732120'>In</span> <span
  m='732220'>other</span> <span m='732260'>words,</span> <span
  m='732820'>you</span> <span m='732860'>take</span> <span
  m='733800'>half</span> <span m='734420'>of</span> <span m='734640'>the</span>
  <span m='734830'>integers,</span> <span m='735610'>namely</span> <span
  m='735960'>the</span> <span m='736040'>non-negative</span> <span
  m='736620'>integers,</span> <span m='737010'>and</span> <span
  m='737150'>it's</span> <span m='737290'>still</span> <span
  m='737560'>the</span> <span m='737640'>same</span> <span
  m='737930'>size</span> <span m='738290'>as</span> <span m='738420'>all</span>
  <span m='738680'>of</span> <span m='738800'>them.</span> <span
  m='739390'>There's</span> <span m='739600'>a</span> <span
  m='739660'>bijection</span> <span m='740310'>between</span> <span
  m='741190'>N</span> <span m='741740'>and</span> <span m='741970'>Z.</span>
  </p><p><span m='743080'>Now,</span> <span m='744400'>you</span> <span
  m='744520'>could</span> <span m='744690'>write</span> <span
  m='744880'>a</span> <span m='744920'>formula,</span> <span
  m='745570'>actually,</span> <span m='746000'>if</span> <span
  m='746120'>you</span> <span m='746210'>were</span> <span
  m='746330'>trying</span> <span m='746530'>to</span> <span
  m='746610'>figure</span> <span m='746950'>out</span> <span
  m='747500'>what</span> <span m='747900'>does</span> <span
  m='748300'>the</span> <span m='748390'>number</span> <span m='748780'>N</span>
  <span m='749140'>go</span> <span m='749330'>to?</span> <span
  m='749580'>What</span> <span m='750150'>positive</span> <span
  m='751220'>or</span> <span m='751380'>negative</span> <span
  m='751750'>integer?</span> <span m='752130'>There's</span> <span
  m='752270'>some</span> <span m='752500'>not</span> <span
  m='752690'>very</span> <span m='752920'>hard</span> <span
  m='753130'>formula</span> <span m='753610'>involving</span> <span
  m='754770'>dividing</span> <span m='755290'>N</span> <span
  m='755420'>by</span> <span m='755530'>two</span> <span m='755890'>and</span>
  <span m='756080'>rounding.</span> <span m='757090'>But,</span> <span
  m='757270'>that</span> <span m='757420'>doesn't</span> <span
  m='757720'>matter.</span> <span m='758040'>Once</span> <span
  m='758320'>I've</span> <span m='758400'>figured</span> <span
  m='758810'>out</span> <span m='759500'>some</span> <span
  m='760280'>sensible</span> <span m='760910'>way</span> <span
  m='761100'>to</span> <span m='761180'>list</span> <span m='761630'>all</span>
  <span m='761880'>the</span> <span m='762400'>elements</span> <span
  m='762990'>of</span> <span m='763150'>the</span> <span
  m='763270'>integers</span> <span m='763850'>in</span> <span
  m='763940'>a</span> <span m='764050'>row,</span> <span m='764760'>then</span>
  <span m='765010'>I</span> <span m='765160'>can</span> <span
  m='765390'>wind</span> <span m='765680'>them</span> <span m='765810'>up</span>
  <span m='765980'>against</span> <span m='766280'>the</span> <span
  m='766340'>non-negative</span> <span m='766980'>integers.</span> <span
  m='767480'>And</span> <span m='768010'>that</span> <span
  m='768310'>listing,</span> <span m='768810'>in</span> <span
  m='768920'>effect,</span> <span m='769310'>defines</span> <span
  m='770430'>the</span> <span m='770570'>mapping</span> <span
  m='771310'>in</span> <span m='771470'>a</span> <span
  m='771530'>perfectly</span> <span m='772000'>clear</span> <span
  m='772300'>way</span> <span m='772540'>without</span> <span
  m='772820'>necessarily</span> <span m='773470'>having</span> <span
  m='773770'>a</span> <span m='773820'>formula.</span> </p>
embedded_media:
  - uid: dc997c40c22515bd921550b2c89a3373
    parent_uid: c2ca270d0bb3aaf664bff6334eac04a0
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 08580a8fdf353515f3284d207c707d28
    parent_uid: c2ca270d0bb3aaf664bff6334eac04a0
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: 9288d85d98fe83a47b46a87b05366ab4
    parent_uid: c2ca270d0bb3aaf664bff6334eac04a0
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: QzSCf62kzjE
  - uid: 9ce888cfba7b637fd116b01c65a7771a
    parent_uid: c2ca270d0bb3aaf664bff6334eac04a0
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/QzSCf62kzjE/default.jpg'
  - uid: 19a8263a2393e926f5d0f1971765f2ef
    parent_uid: c2ca270d0bb3aaf664bff6334eac04a0
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: QzSCf62kzjE
  - uid: 15f1add3bef6eaf60b1cfefd48e8de07
    parent_uid: c2ca270d0bb3aaf664bff6334eac04a0
    id: QzSCf62kzjE.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/cardinality/QzSCf62kzjE.srt
  - uid: d7af2ffda77403442f88275cd4b30c9b
    parent_uid: c2ca270d0bb3aaf664bff6334eac04a0
    id: QzSCf62kzjE.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/proofs/tp4-3/cardinality/QzSCf62kzjE.pdf
  - uid: 1015e36c1138958be0b86a159b2d92d4
    parent_uid: c2ca270d0bb3aaf664bff6334eac04a0
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: b6dfdaa2af2501ef14671a58e9cb3b1e
    parent_uid: c2ca270d0bb3aaf664bff6334eac04a0
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 6adba25569e19d4764edfb2acfc17643
    parent_uid: c2ca270d0bb3aaf664bff6334eac04a0
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_cardinality_ipod.mp4
type: courses
layout: video
---
