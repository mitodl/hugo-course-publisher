---
title: Bipartite Matching
uid: 793b4c3c257e998fd36d8cdd434d656a
parent_uid: 68230ebe4f1e941843d991caad882931
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/bipartite-matching-video/bipartite-matching-0
short_url: bipartite-matching-0
inline_embed_id: 42897888bipartitematching50374003
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='860'>PROFESSOR:</span> <span m='1130'>The</span> <span
  m='1330'>stable</span> <span m='1660'>match</span> <span
  m='2029'>problem</span> <span m='2420'>that</span> <span m='2540'>we</span>
  <span m='2660'>just</span> <span m='2890'>looked</span> <span
  m='3160'>at</span> <span m='3380'>is</span> <span m='3550'>one</span> <span
  m='3760'>example</span> <span m='4410'>of</span> <span m='4740'>a</span> <span
  m='5170'>bipartite</span> <span m='5960'>matching</span> <span
  m='6350'>problem.</span> <span m='7330'>So</span> <span m='7520'>the</span>
  <span m='7610'>setup</span> <span m='7960'>with</span> <span m='8090'>a</span>
  <span m='8119'>bipartite</span> <span m='8910'>matching</span> <span
  m='9240'>problem</span> <span m='9660'>is</span> <span m='9780'>you've</span>
  <span m='9940'>got</span> <span m='10160'>a</span> <span
  m='10740'>simple</span> <span m='11110'>graph.</span> <span
  m='12050'>And</span> <span m='12320'>the</span> <span
  m='12410'>vertices</span> <span m='13020'>are</span> <span
  m='13090'>split</span> <span m='13370'>into</span> <span m='13570'>two</span>
  <span m='13790'>groups,</span> <span m='14440'>as</span> <span
  m='14750'>in</span> <span m='15530'>the</span> <span m='16670'>stable</span>
  <span m='17060'>matching</span> <span m='17360'>problem,</span> <span
  m='17600'>we</span> <span m='17680'>can</span> <span m='17800'>call</span>
  <span m='17980'>them</span> <span m='18160'>the</span> <span
  m='18260'>girls</span> <span m='18560'>and</span> <span m='18650'>the</span>
  <span m='18710'>boys,</span> <span m='19210'>the</span> <span
  m='19280'>G</span> <span m='19600'>and</span> <span m='19740'>the</span> <span
  m='19810'>b.</span> </p><p><span m='21340'>So</span> <span
  m='21550'>the</span> <span m='21640'>definition</span> <span
  m='22070'>of</span> <span m='22140'>a</span> <span m='22680'>bipartite</span>
  <span m='23390'>graph</span> <span m='23980'>is</span> <span
  m='24250'>a</span> <span m='24320'>graph</span> <span m='24690'>where</span>
  <span m='25010'>there</span> <span m='25200'>are</span> <span
  m='25310'>some</span> <span m='25610'>vertices</span> <span
  m='26550'>called</span> <span m='26760'>the</span> <span m='26820'>left</span>
  <span m='27090'>vertices</span> <span m='28080'>and</span> <span
  m='28470'>a</span> <span m='28600'>disjoint</span> <span m='29140'>set</span>
  <span m='29430'>of</span> <span m='29580'>vertices</span> <span
  m='30070'>called</span> <span m='30260'>the</span> <span
  m='30350'>right</span> <span m='30580'>vertices.</span> <span
  m='30800'>And</span> <span m='31140'>every</span> <span
  m='31390'>vertex</span> <span m='31830'>is</span> <span
  m='31950'>either</span> <span m='32229'>left</span> <span m='32530'>or</span>
  <span m='32630'>right.</span> <span m='33050'>And</span> <span
  m='33380'>edges</span> <span m='33780'>only</span> <span m='34090'>go</span>
  <span m='34310'>between</span> <span m='34730'>a</span> <span
  m='34850'>left</span> <span m='35110'>vertex</span> <span m='35680'>and</span>
  <span m='35820'>a</span> <span m='35880'>right</span> <span
  m='36150'>vertex.</span> </p><p><span m='37350'>Now,</span> <span
  m='37410'>in</span> <span m='37560'>this</span> <span m='37740'>case,</span>
  <span m='38250'>the</span> <span m='38360'>matching</span> <span
  m='38740'>problem that</span> <span m='39100'>we</span> <span
  m='39310'>want</span> <span m='39480'>to</span> <span
  m='39540'>consider</span> <span m='40100'>is</span> <span
  m='40880'>that</span> <span m='41690'>there</span> <span m='41820'>is</span>
  <span m='41890'>a</span> <span m='41960'>specification</span> <span
  m='43170'>that</span> <span m='43370'>each</span> <span m='43620'>girl</span>
  <span m='44130'>is</span> <span m='44320'>willing</span> <span
  m='44760'>to</span> <span m='44910'>be</span> <span m='45620'>paired</span>
  <span m='46070'>with</span> <span m='46250'>certain</span> <span
  m='46560'>boys,</span> <span m='49260'>but</span> <span m='49470'>not</span>
  <span m='49680'>all</span> <span m='49880'>of</span> <span
  m='50290'>them.</span> <span m='50600'>So</span> <span m='50820'>we</span>
  <span m='50920'>can</span> <span m='51060'>specify</span> <span
  m='51620'>that</span> <span m='51970'>by</span> <span m='52490'>adding</span>
  <span m='52900'>edges</span> <span m='53620'>where,</span> <span
  m='54070'>if</span> <span m='54310'>this</span> <span m='54710'>is</span>
  <span m='54830'>the</span> <span m='54900'>first</span> <span
  m='55230'>girl</span> <span m='55460'>on</span> <span m='55590'>the</span>
  <span m='55660'>list,</span> <span m='56130'>and</span> <span
  m='56270'>she</span> <span m='56430'>is</span> <span m='56570'>willing</span>
  <span m='56910'>to</span> <span m='57020'>be</span> <span
  m='57160'>paired</span> <span m='57720'>with</span> <span m='57970'>the</span>
  <span m='58040'>second</span> <span m='58430'>boy</span> <span
  m='58830'>and</span> <span m='58990'>the</span> <span m='59060'>last</span>
  <span m='59470'>boy.</span> <span m='59850'>And that's</span> <span
  m='60160'>what</span> <span m='60280'>those</span> <span m='60520'>two</span>
  <span m='60760'>edges</span> <span m='61780'>indicate.</span> <span
  m='62260'>So</span> <span m='62520'>edges</span> <span m='62780'>are</span>
  <span m='62850'>signaling</span> <span m='63350'>compatibility</span> <span
  m='64709'>constraints</span> <span m='65540'>on</span> <span
  m='65900'>matching</span> <span m='66450'>up</span> <span m='66860'>the</span>
  <span m='66990'>girls</span> <span m='67310'>and</span> <span
  m='67400'>the</span> <span m='67470'>boys.</span> </p><p><span
  m='67950'>And</span> <span m='68100'>what</span> <span m='68270'>we're</span>
  <span m='68360'>trying</span> <span m='68640'>to</span> <span
  m='68770'>accomplish</span> <span m='69690'>is</span> <span
  m='70420'>getting</span> <span m='71010'>all</span> <span m='71250'>of</span>
  <span m='71340'>the</span> <span m='71420'>girls</span> <span
  m='71760'>matched</span> <span m='72180'>with</span> <span m='72330'>a</span>
  <span m='72400'>unique</span> <span m='72800'>boy--</span> <span
  m='73530'>match</span> <span m='73880'>each</span> <span m='74140'>girl</span>
  <span m='74390'>to</span> <span m='74610'>a</span> <span
  m='74690'>unique</span> <span m='75320'>compatible</span> <span
  m='76070'>boy.</span> <span m='76970'>So</span> <span m='77180'>there's</span>
  <span m='77430'>an</span> <span m='77510'>example</span> <span
  m='78020'>of</span> <span m='78130'>a</span> <span m='78180'>match,</span>
  <span m='78600'>where</span> <span m='78870'>there</span> <span
  m='79000'>is</span> <span m='79090'>one</span> <span
  m='80560'>highlighted</span> <span m='81640'>magenta</span> <span
  m='82170'>edge</span> <span m='82600'>out</span> <span m='82820'>of</span>
  <span m='83000'>each</span> <span m='83330'>girl.</span> <span
  m='84240'>And</span> <span m='84550'>they</span> <span m='84890'>go</span>
  <span m='85160'>to</span> <span m='85260'>different</span> <span
  m='86070'>boys.</span> <span m='86500'>So</span> <span
  m='87080'>formally,</span> <span m='87670'>we</span> <span
  m='87840'>want</span> <span m='88200'>a</span> <span
  m='88670'>bijection</span> <span m='89770'>from</span> <span
  m='90110'>the</span> <span m='90190'>girls</span> <span m='90690'>to</span>
  <span m='90810'>the</span> <span m='90890'>boys</span> <span
  m='92440'>that</span> <span m='92620'>follows</span> <span
  m='93130'>edges.</span> </p><p><span m='95200'>Well,</span> <span
  m='95600'>let's</span> <span m='95870'>look</span> <span m='96060'>at</span>
  <span m='96140'>a</span> <span m='96310'>case</span> <span
  m='96710'>where</span> <span m='98430'>I</span> <span m='98580'>can't</span>
  <span m='98890'>find</span> <span m='99130'>a</span> <span
  m='99170'>match.</span> <span m='99630'>Suppose</span> <span
  m='100110'>that</span> <span m='100280'>that</span> <span
  m='100570'>edge</span> <span m='100990'>was</span> <span
  m='101220'>missing.</span> <span m='101650'>We</span> <span
  m='101920'>used</span> <span m='102260'>that</span> <span
  m='102820'>edge</span> <span m='103030'>in</span> <span m='103150'>the</span>
  <span m='103220'>match.</span> <span m='103610'>But</span> <span
  m='103760'>let's</span> <span m='103980'>suppose</span> <span
  m='104410'>it</span> <span m='104480'>was</span> <span m='104700'>not</span>
  <span m='105060'>there.</span> <span m='106200'>Let's</span> <span
  m='106430'>get</span> <span m='106640'>rid</span> <span m='106810'>of</span>
  <span m='106940'>it.</span> </p><p><span m='107630'>And</span> <span
  m='108780'>what</span> <span m='109220'>we</span> <span m='109330'>find</span>
  <span m='109730'>now</span> <span m='110080'>is</span> <span
  m='110470'>that</span> <span m='110710'>this</span> <span
  m='111520'>last</span> <span m='111990'>girl</span> <span m='112340'>no</span>
  <span m='112530'>longer</span> <span m='112950'>can</span> <span
  m='113190'>be</span> <span m='113790'>matched</span> <span
  m='114830'>to</span> <span m='115050'>this</span> <span
  m='115210'>second</span> <span m='115660'>boy,</span> <span
  m='115960'>which</span> <span m='116180'>is</span> <span
  m='116280'>what</span> <span m='116440'>we</span> <span
  m='116540'>previously</span> <span m='117240'>had.</span> <span
  m='117850'>So</span> <span m='118240'>let's</span> <span m='118480'>try</span>
  <span m='118640'>to</span> <span m='118720'>find</span> <span
  m='118990'>some</span> <span m='119170'>other</span> <span
  m='119360'>match.</span> <span m='119950'>And</span> <span
  m='120110'>there</span> <span m='120230'>isn't</span> <span
  m='120490'>any.</span> <span m='120970'>And the</span> <span
  m='121225'>reason</span> <span m='121480'>is</span> <span
  m='122100'>that</span> <span m='122290'>if</span> <span m='122450'>you</span>
  <span m='122550'>look</span> <span m='122740'>at</span> <span
  m='122860'>this</span> <span m='123080'>group</span> <span
  m='123420'>of</span> <span m='123520'>three</span> <span
  m='123850'>girls</span> <span m='124290'>on</span> <span m='124440'>the</span>
  <span m='124520'>left</span> <span m='125730'>and</span> <span
  m='126230'>you</span> <span m='126450'>look</span> <span m='126760'>at</span>
  <span m='127210'>all</span> <span m='127710'>of</span> <span
  m='127950'>the</span> <span m='128030'>boys</span> <span m='128500'>on</span>
  <span m='128690'>the</span> <span m='128780'>right</span> <span
  m='129110'>that</span> <span m='129280'>they</span> <span
  m='129430'>are</span> <span m='129500'>collectively</span> <span
  m='130330'>compatible</span> <span m='131020'>with--</span> <span
  m='131220'>that</span> <span m='131390'>is,</span> <span m='131640'>one</span>
  <span m='132040'>of</span> <span m='132180'>these</span> <span
  m='132410'>three</span> <span m='132630'>girls</span> <span
  m='133020'>at</span> <span m='133130'>least</span> <span m='133730'>is</span>
  <span m='133970'>willing</span> <span m='134350'>to</span> <span
  m='134510'>be</span> <span m='134820'>paired</span> <span
  m='135320'>with</span> <span m='135910'>one</span> <span m='136190'>of</span>
  <span m='136270'>the</span> <span m='136340'>boys</span> <span
  m='136650'>on</span> <span m='136770'>the</span> <span
  m='136850'>right--</span> <span m='137310'>there</span> <span
  m='137490'>are</span> <span m='137600'>only</span> <span m='137880'>two</span>
  <span m='138120'>boys</span> <span m='138670'>that</span> <span
  m='138810'>have</span> <span m='139020'>to</span> <span m='139120'>be</span>
  <span m='139260'>shared</span> <span m='139580'>among</span> <span
  m='139860'>three</span> <span m='140160'>girls.</span> </p><p><span
  m='141020'>And</span> <span m='141260'>that</span> <span m='141660'>is</span>
  <span m='142420'>one</span> <span m='142720'>example</span> <span
  m='143720'>of</span> <span m='144080'>what's</span> <span
  m='144260'>called</span> <span m='144490'>a</span> <span
  m='144530'>bottleneck.</span> <span m='145190'>So</span> <span
  m='145390'>we</span> <span m='145740'>have</span> <span
  m='145900'>three</span> <span m='146200'>girls.</span> <span
  m='146560'>And</span> <span m='146690'>collectively,</span> <span
  m='147470'>they</span> <span m='147640'>only</span> <span
  m='147920'>like</span> <span m='148250'>two</span> <span
  m='148410'>boys.</span> <span m='149300'>There</span> <span
  m='149490'>just</span> <span m='149820'>are</span> <span m='149890'>not</span>
  <span m='150220'>enough</span> <span m='150580'>boys</span> <span
  m='150930'>to</span> <span m='151030'>go</span> <span m='151200'>around</span>
  <span m='151540'>for</span> <span m='151660'>these</span> <span
  m='151900'>girls.</span> <span m='152750'>That</span> <span
  m='152990'>proves</span> <span m='153440'>that</span> <span
  m='153550'>a</span> <span m='153590'>match</span> <span m='153940'>is</span>
  <span m='154050'>not</span> <span m='154210'>going</span> <span
  m='154350'>to</span> <span m='154410'>be</span> <span
  m='154520'>possible.</span> </p><p><span m='156970'>So</span> <span
  m='157620'>more</span> <span m='157800'>generally,</span> <span
  m='158540'>if</span> <span m='158630'>you</span> <span m='158740'>have</span>
  <span m='158980'>a</span> <span m='159040'>set</span> <span
  m='159870'>S</span> <span m='160320'>of</span> <span m='160510'>girls</span>
  <span m='160850'>on</span> <span m='160970'>the</span> <span
  m='161050'>left</span> <span m='161720'>and</span> <span m='161990'>you</span>
  <span m='162090'>look</span> <span m='162290'>at</span> <span
  m='162410'>the</span> <span m='162560'>image</span> <span m='163010'>of</span>
  <span m='163150'>S</span> <span m='163870'>under</span> <span
  m='164230'>the</span> <span m='164470'>edge</span> <span
  m='164810'>relation--</span> <span m='165430'>that</span> <span
  m='165590'>is</span> <span m='165800'>E</span> <span m='165980'>of</span>
  <span m='166130'>S,</span> <span m='166700'>which</span> <span
  m='167030'>is</span> <span m='167300'>collectively</span> <span
  m='168020'>the</span> <span m='168110'>set</span> <span m='168370'>of</span>
  <span m='168560'>all</span> <span m='168850'>of</span> <span
  m='168980'>the</span> <span m='169070'>boys</span> <span
  m='169870'>that</span> <span m='170050'>are</span> <span
  m='170100'>compatible</span> <span m='170820'>with</span> <span
  m='171040'>one</span> <span m='171320'>or</span> <span m='171450'>more</span>
  <span m='171920'>of</span> <span m='172090'>the</span> <span
  m='172180'>girls</span> <span m='172540'>in</span> <span m='172710'>S--</span>
  <span m='173482'>then</span> <span m='173870'>whenever</span> <span
  m='174260'>you</span> <span m='174400'>have--</span> <span
  m='175000'>So</span> <span m='175170'>we</span> <span
  m='175260'>previously</span> <span m='175710'>just</span> <span
  m='175890'>had</span> <span m='176000'>an</span> <span
  m='176060'>example</span> <span m='176430'>where</span> <span
  m='176540'>S</span> <span m='176740'>was</span> <span m='176950'>3</span>
  <span m='177650'>and</span> <span m='177900'>E</span> <span
  m='178070'>of</span> <span m='178210'>S</span> <span m='178710'>was</span>
  <span m='179070'>2.</span> <span m='179840'>And</span> <span
  m='180190'>because</span> <span m='180650'>3</span> <span
  m='180870'>was</span> <span m='181030'>greater</span> <span
  m='181330'>than</span> <span m='181490'>2--</span> <span
  m='181720'>because</span> <span m='182060'>S</span> <span
  m='182250'>was</span> <span m='182410'>greater</span> <span
  m='182660'>than</span> <span m='182810'>E of</span> <span
  m='183110'>S--</span> <span m='183280'>we</span> <span m='183440'>were</span>
  <span m='183580'>bottlenecked.</span> <span m='184520'>And</span> <span
  m='184730'>we</span> <span m='184820'>couldn't</span> <span
  m='185100'>possibly</span> <span m='185580'>find</span> <span
  m='185870'>a</span> <span m='185900'>match.</span> </p><p><span
  m='186230'>And</span> <span m='186320'>more</span> <span
  m='186430'>generally,</span> <span m='187410'>the</span> <span
  m='187560'>definition</span> <span m='188060'>of</span> <span
  m='188130'>a</span> <span m='188210'>bottleneck</span> <span
  m='188860'>is</span> <span m='189480'>that</span> <span m='189650'>if</span>
  <span m='189810'>you</span> <span m='189910'>have</span> <span
  m='190160'>a</span> <span m='190500'>set</span> <span m='190970'>where</span>
  <span m='191170'>the</span> <span m='191330'>size</span> <span
  m='191820'>of</span> <span m='191940'>S</span> <span m='192540'>is</span>
  <span m='192890'>greater</span> <span m='193400'>than</span> <span
  m='193620'>the</span> <span m='193680'>size</span> <span m='194130'>of</span>
  <span m='194260'>the</span> <span m='194410'>image</span> <span
  m='194780'>of</span> <span m='194930'>S,</span> <span m='195760'>then</span>
  <span m='196060'>that's</span> <span m='196300'>called</span> <span
  m='196600'>a</span> <span m='196630'>bottleneck.</span> <span
  m='197630'>And</span> <span m='197850'>the</span> <span
  m='197910'>first</span> <span m='198510'>observation</span> <span
  m='199160'>we</span> <span m='199270'>can</span> <span m='199450'>make</span>
  <span m='199670'>is</span> <span m='199760'>the</span> <span
  m='199840'>bottleneck</span> <span m='200380'>lemma</span> <span
  m='200640'>says</span> <span m='201050'>that</span> <span m='202730'>a</span>
  <span m='203010'>bottleneck</span> <span m='203520'>is</span> <span
  m='203640'>a</span> <span m='203700'>set</span> <span m='204170'>S</span>
  <span m='204450'>of</span> <span m='204570'>girls</span> <span
  m='204900'>without</span> <span m='205210'>enough</span> <span
  m='205510'>boys.</span> <span m='207090'>And</span> <span m='209280'>if</span>
  <span m='210200'>S</span> <span m='210840'>is</span> <span
  m='211280'>greater</span> <span m='211740'>than</span> <span
  m='211940'>E</span> <span m='212110'>of</span> <span m='212240'>S,</span>
  <span m='212470'>that's</span> <span m='212680'>called</span> <span
  m='212920'>a</span> <span m='212980'>bottleneck.</span> <span
  m='214000'>And</span> <span m='214200'>when</span> <span
  m='214380'>there</span> <span m='214540'>is</span> <span
  m='214750'>one,</span> <span m='214960'>no</span> <span
  m='215160'>match</span> <span m='215480'>is</span> <span
  m='215600'>possible,</span> <span m='216780'>obviously.</span> </p><p><span
  m='218520'>So</span> <span m='219170'>this</span> <span m='219430'>is</span>
  <span m='219620'>a</span> <span m='219730'>reason</span> <span
  m='220130'>why</span> <span m='220370'>there</span> <span
  m='220520'>might</span> <span m='220790'>not</span> <span m='220990'>be</span>
  <span m='221130'>a</span> <span m='221190'>match,</span> <span
  m='221760'>is</span> <span m='222100'>that</span> <span
  m='222290'>there</span> <span m='222390'>is</span> <span m='222470'>a</span>
  <span m='222530'>bottleneck.</span> <span m='224010'>Now,</span> <span
  m='224260'>a</span> <span m='224370'>rather</span> <span
  m='224630'>deep</span> <span m='224910'>theorem</span> <span
  m='225390'>is</span> <span m='225670'>conversely,</span> <span
  m='227090'>if</span> <span m='227370'>there</span> <span m='227540'>are</span>
  <span m='227630'>no</span> <span m='227830'>bottlenecks,</span> <span
  m='229000'>then</span> <span m='229260'>in</span> <span m='229380'>fact</span>
  <span m='229810'>there</span> <span m='229980'>is</span> <span
  m='230230'>a</span> <span m='230280'>match.</span> <span
  m='230690'>This</span> <span m='230850'>is</span> <span
  m='230980'>known</span> <span m='231150'>as</span> <span
  m='231260'>Hall's</span> <span m='231800'>theorem.</span> <span
  m='232720'>It's</span> <span m='232830'>not</span> <span
  m='233360'>obvious,</span> <span m='234660'>although</span> <span
  m='234800'>we'll</span> <span m='234950'>find</span> <span
  m='235220'>an</span> <span m='235680'>understandable</span> <span
  m='236330'>proof</span> <span m='236630'>of</span> <span m='236790'>it.</span>
  <span m='237190'>And</span> <span m='237400'>that's</span> <span
  m='237630'>what</span> <span m='237760'>we're</span> <span
  m='237850'>going</span> <span m='237990'>to</span> <span m='238060'>do</span>
  <span m='238320'>in</span> <span m='238490'>the</span> <span
  m='238560'>next</span> <span m='238820'>segment.</span> </p>
embedded_media:
  - uid: 5566d15c539968a0a87895e20924a16e
    parent_uid: 793b4c3c257e998fd36d8cdd434d656a
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: f67a64293d2b7806282ab6740e580800
    parent_uid: 793b4c3c257e998fd36d8cdd434d656a
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: eb1a4aa4ca237b9ccfa93cb2b9a1abd6
    parent_uid: 793b4c3c257e998fd36d8cdd434d656a
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: HZLKDC9OSaQ
  - uid: 1ec1be362ff9267448fb34f858eac90c
    parent_uid: 793b4c3c257e998fd36d8cdd434d656a
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/HZLKDC9OSaQ/default.jpg'
  - uid: 17b93d5dfba5080907efa4907082c32d
    parent_uid: 793b4c3c257e998fd36d8cdd434d656a
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: HZLKDC9OSaQ
  - uid: 74594b30364d821952f1d1baa25945bc
    parent_uid: 793b4c3c257e998fd36d8cdd434d656a
    id: HZLKDC9OSaQ.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/bipartite-matching-video/bipartite-matching-0/HZLKDC9OSaQ.srt
  - uid: c76bf7f3fef287782986e19b75295062
    parent_uid: 793b4c3c257e998fd36d8cdd434d656a
    id: HZLKDC9OSaQ.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/structures/stable-matching/bipartite-matching-video/bipartite-matching-0/HZLKDC9OSaQ.pdf
  - uid: 479eb504a2718d450437102e40c9685a
    parent_uid: 793b4c3c257e998fd36d8cdd434d656a
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: ae042c25d3e8d930eef1905e70d9c1bf
    parent_uid: 793b4c3c257e998fd36d8cdd434d656a
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 76f7470842105d91404f00ea256e65cb
    parent_uid: 793b4c3c257e998fd36d8cdd434d656a
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_bipartitematch_video_ipod.mp4
type: courses
layout: video
---
