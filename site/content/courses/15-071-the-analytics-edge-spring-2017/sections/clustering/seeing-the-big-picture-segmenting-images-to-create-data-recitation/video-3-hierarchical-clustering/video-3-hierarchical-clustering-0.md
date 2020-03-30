---
title: 'Video 3: Hierarchical Clustering'
uid: 4c75ada9d638803de8ff2006e93353bd
parent_uid: 3b86be20f4841eecced880565b48fc62
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/seeing-the-big-picture-segmenting-images-to-create-data-recitation/video-3-hierarchical-clustering/video-3-hierarchical-clustering-0
short_url: video-3-hierarchical-clustering-0
inline_embed_id: 58176018video3hierarchicalclustering50922973
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4500'>In</span> <span m='4837'>our</span> <span
  m='5175'>previous</span> <span m='5513'>video,</span> <span m='5851'>we</span>
  <span m='6188'>found</span> <span m='6526'>the</span> <span
  m='6864'>distance</span> <span m='7202'>matrix,</span> <span
  m='7540'>which</span> <span m='7918'>computes</span> <span m='8297'>the</span>
  <span m='8675'>pairwise</span> <span m='9054'>distances</span> <span
  m='9432'>between</span> <span m='9811'>all</span> <span m='10190'>the</span>
  <span m='10597'>intensity</span> <span m='11004'>values</span> <span
  m='11411'>in</span> <span m='11818'>the</span> <span m='12225'>flower</span>
  <span m='12632'>vector.</span> </p><p><span m='13040'>Now</span> <span
  m='13381'>we</span> <span m='13722'>can</span> <span m='14064'>cluster</span>
  <span m='14405'>the</span> <span m='14747'>intensity</span> <span
  m='15088'>values</span> <span m='15430'>using</span> <span
  m='16260'>hierarchical</span> <span m='17090'>clustering.</span> </p><p><span
  m='17920'>So</span> <span m='18485'>we're</span> <span m='19051'>going</span>
  <span m='19617'>to</span> <span m='20182'>type</span> <span
  m='20748'>"cluster</span> <span m='21314'>intensity."</span> <span
  m='21880'>And</span> <span m='22146'>then</span> <span m='22412'>we're</span>
  <span m='22678'>going</span> <span m='22944'>to</span> <span
  m='23210'>use</span> <span m='23476'>the</span> <span m='23742'>hclust</span>
  <span m='24008'>function,</span> <span m='24274'>which</span> <span
  m='24540'>is</span> <span m='24910'>the</span> <span
  m='25280'>hierarchical</span> <span m='25650'>clustering</span> <span
  m='26020'>function</span> <span m='26390'>in</span> <span m='26760'>R,</span>
  <span m='27130'>which</span> <span m='27500'>takes</span> <span
  m='27868'>as</span> <span m='28237'>an</span> <span m='28605'>input</span>
  <span m='28974'>the</span> <span m='29342'>distance</span> <span
  m='29711'>matrix.</span> </p><p><span m='30080'>And</span> <span
  m='30383'>then</span> <span m='30686'>we're</span> <span
  m='30990'>going</span> <span m='31293'>to</span> <span
  m='31596'>specify</span> <span m='31900'>the</span> <span
  m='32203'>clustering</span> <span m='32506'>method</span> <span
  m='32810'>to</span> <span m='33690'>be</span> <span m='34570'>"word."</span>
  <span m='35450'>As</span> <span m='35815'>a</span> <span
  m='36180'>reminder,</span> <span m='36545'>the</span> <span
  m='36910'>"words"</span> <span m='37275'>method</span> <span
  m='37640'>is</span> <span m='37946'>a</span> <span m='38253'>minimum</span>
  <span m='38560'>variants</span> <span m='38866'>method,</span> <span
  m='39173'>which</span> <span m='39480'>tries</span> <span m='39932'>to</span>
  <span m='40385'>find</span> <span m='40838'>compact</span> <span
  m='41291'>and</span> <span m='41744'>spherical</span> <span
  m='42197'>clusters.</span> </p><p><span m='42650'>We</span> <span
  m='42909'>can</span> <span m='43168'>think</span> <span m='43427'>about</span>
  <span m='43686'>it</span> <span m='43945'>as</span> <span
  m='44204'>trying</span> <span m='44463'>to</span> <span
  m='44722'>minimize</span> <span m='44981'>the</span> <span
  m='45240'>variance</span> <span m='45500'>within</span> <span
  m='45968'>each</span> <span m='46437'>cluster</span> <span
  m='46906'>and</span> <span m='47375'>the</span> <span
  m='47843'>distance</span> <span m='48312'>among</span> <span
  m='48781'>clusters.</span> </p><p><span m='49250'>Now</span> <span
  m='49500'>we</span> <span m='49750'>can</span> <span m='50000'>plot</span>
  <span m='50250'>the</span> <span m='50500'>cluster</span> <span
  m='50750'>dendrogram.</span> </p><p><span m='51000'>So--</span> <span
  m='51585'>plot(clusterIntensity).</span> </p><p><span m='58060'>And</span>
  <span m='58514'>now</span> <span m='58968'>we</span> <span
  m='59422'>obtain</span> <span m='59877'>the</span> <span
  m='60331'>cluster</span> <span m='60785'>dendrogram.</span> </p><p><span
  m='61240'>Let's</span> <span m='61570'>have</span> <span m='61900'>here</span>
  <span m='62230'>a</span> <span m='62560'>little</span> <span
  m='62890'>aside</span> <span m='63220'>or</span> <span m='63550'>a</span>
  <span m='63880'>quick</span> <span m='64210'>reminder</span> <span
  m='64540'>about</span> <span m='64956'>how</span> <span m='65372'>to</span>
  <span m='65789'>read</span> <span m='66205'>a</span> <span
  m='66621'>dendrogram</span> <span m='67038'>and</span> <span
  m='67454'>make</span> <span m='67870'>sense</span> <span m='68287'>of</span>
  <span m='68703'>it.</span> </p><p><span m='69120'>Let</span> <span
  m='69557'>us</span> <span m='69995'>first</span> <span
  m='70432'>consider</span> <span m='70870'>this</span> <span
  m='71307'>toy</span> <span m='71745'>dendrogram</span> <span
  m='72182'>example.</span> </p><p><span m='72620'>The</span> <span
  m='72915'>lowest</span> <span m='73210'>row</span> <span m='73505'>of</span>
  <span m='73800'>nodes</span> <span m='74095'>represent</span> <span
  m='74390'>the</span> <span m='74866'>data</span> <span m='75343'>or</span>
  <span m='75820'>the</span> <span m='76296'>individual</span> <span
  m='76773'>observations,</span> <span m='77250'>and</span> <span
  m='77667'>the</span> <span m='78084'>remaining</span> <span
  m='78501'>nodes</span> <span m='78918'>represent</span> <span
  m='79335'>the</span> <span m='79752'>clusters.</span> </p><p><span
  m='80170'>The</span> <span m='80520'>vertical</span> <span
  m='80870'>lines</span> <span m='81220'>depict</span> <span
  m='81570'>the</span> <span m='81920'>distance</span> <span
  m='82270'>between</span> <span m='82760'>two</span> <span
  m='83250'>nodes</span> <span m='83740'>or</span> <span
  m='84230'>clusters.</span> </p><p><span m='84720'>The</span> <span
  m='85060'>taller</span> <span m='85400'>the</span> <span
  m='85740'>line,</span> <span m='86080'>the</span> <span m='86420'>more</span>
  <span m='86760'>dissimilar</span> <span m='87100'>the</span> <span
  m='87440'>clusters</span> <span m='87780'>are.</span> </p><p><span
  m='88120'>For</span> <span m='88715'>instance,</span> <span
  m='89310'>cluster</span> <span m='89906'>D-E-F</span> <span
  m='90501'>is</span> <span m='91097'>closer</span> <span m='91692'>to</span>
  <span m='92288'>cluster</span> <span m='92883'>B-C-D-E-F</span> <span
  m='93479'>than</span> <span m='94009'>cluster</span> <span
  m='94539'>B-C</span> <span m='95069'>is.</span> </p><p><span
  m='95600'>And</span> <span m='95860'>this</span> <span m='96120'>is</span>
  <span m='96380'>well</span> <span m='96640'>depicted</span> <span
  m='96900'>by</span> <span m='97160'>the</span> <span m='97420'>height</span>
  <span m='97680'>of</span> <span m='97940'>the</span> <span
  m='98200'>lines</span> <span m='98460'>connecting</span> <span
  m='98720'>each</span> <span m='99220'>of</span> <span
  m='99720'>clusters</span> <span m='100220'>B-C</span> <span
  m='100720'>and</span> <span m='101220'>D-E-F</span> <span m='101720'>to</span>
  <span m='102220'>their</span> <span m='102720'>parent</span> <span
  m='103220'>node.</span> </p><p><span m='103720'>Now</span> <span
  m='104099'>cutting</span> <span m='104479'>the</span> <span
  m='104859'>dendrogram</span> <span m='105239'>at</span> <span
  m='105619'>a</span> <span m='105999'>given</span> <span
  m='106379'>level</span> <span m='106759'>yields</span> <span
  m='107102'>a</span> <span m='107445'>certain</span> <span
  m='107788'>partitioning</span> <span m='108131'>of</span> <span
  m='108474'>the</span> <span m='108817'>data.</span> </p><p><span
  m='109160'>For</span> <span m='109489'>instance,</span> <span
  m='109818'>if</span> <span m='110147'>we</span> <span m='110476'>cut</span>
  <span m='110805'>the</span> <span m='111135'>tree</span> <span
  m='111464'>between</span> <span m='111793'>levels</span> <span
  m='112122'>two</span> <span m='112451'>and</span> <span
  m='112780'>three,</span> <span m='113110'>we</span> <span
  m='113718'>obtain</span> <span m='114327'>four</span> <span
  m='114936'>clusters,</span> <span m='115545'>A,</span> <span
  m='116154'>B-C,</span> <span m='116763'>D-E,</span> <span
  m='117372'>and</span> <span m='117981'>F.</span> </p><p><span
  m='118590'>If</span> <span m='118943'>we</span> <span m='119296'>cut</span>
  <span m='119649'>the</span> <span m='120002'>dendrogram</span> <span
  m='120355'>between</span> <span m='120708'>levels</span> <span
  m='121061'>three</span> <span m='121414'>and</span> <span
  m='121767'>four,</span> <span m='122120'>then</span> <span
  m='122738'>we</span> <span m='123357'>obtain</span> <span
  m='123976'>three</span> <span m='124595'>clusters,</span> <span
  m='125214'>A,</span> <span m='125833'>B-C,</span> <span m='126452'>and</span>
  <span m='127071'>D-E-F.</span> </p><p><span m='127690'>And</span> <span
  m='127952'>if</span> <span m='128215'>we</span> <span m='128478'>were</span>
  <span m='128740'>to</span> <span m='129003'>cut</span> <span
  m='129266'>the</span> <span m='129529'>dendrogram</span> <span
  m='129791'>between</span> <span m='130054'>levels</span> <span
  m='130317'>four</span> <span m='130580'>and</span> <span
  m='131202'>five,</span> <span m='131824'>then</span> <span
  m='132446'>we</span> <span m='133068'>obtain</span> <span
  m='133690'>two</span> <span m='134312'>clusters,</span> <span
  m='134934'>A</span> <span m='135556'>and</span> <span
  m='136178'>B-C-D-E-F.</span> </p><p><span m='136800'>What</span> <span
  m='137215'>to</span> <span m='137630'>choose,</span> <span
  m='138045'>two,</span> <span m='138460'>three,</span> <span
  m='138875'>or</span> <span m='139290'>four</span> <span
  m='139705'>clusters?</span> </p><p><span m='140120'>Well,</span> <span
  m='140514'>the</span> <span m='140908'>smaller</span> <span
  m='141303'>the</span> <span m='141697'>number</span> <span
  m='142092'>of</span> <span m='142486'>clusters,</span> <span
  m='142881'>the</span> <span m='143275'>coarser</span> <span
  m='143670'>the</span> <span m='144190'>clustering</span> <span
  m='144710'>is.</span> </p><p><span m='145230'>But</span> <span
  m='145557'>at</span> <span m='145885'>the</span> <span m='146212'>same</span>
  <span m='146540'>time,</span> <span m='146867'>having</span> <span
  m='147195'>many</span> <span m='147522'>clusters</span> <span
  m='147850'>may</span> <span m='148160'>be</span> <span m='148470'>too</span>
  <span m='148780'>much</span> <span m='149090'>of</span> <span
  m='149400'>a</span> <span m='149710'>stretch.</span> </p><p><span
  m='150020'>We</span> <span m='150443'>should</span> <span
  m='150867'>always</span> <span m='151291'>have</span> <span
  m='151715'>this</span> <span m='152138'>trade-off</span> <span
  m='152562'>in</span> <span m='152986'>mind.</span> </p><p><span
  m='153410'>Now</span> <span m='153800'>the</span> <span
  m='154190'>distance</span> <span m='154580'>information</span> <span
  m='154970'>between</span> <span m='155360'>clusters</span> <span
  m='155750'>can</span> <span m='156107'>guide</span> <span
  m='156465'>our</span> <span m='156823'>choice</span> <span
  m='157181'>of</span> <span m='157538'>the</span> <span
  m='157896'>number</span> <span m='158254'>of</span> <span
  m='158612'>clusters.</span> </p><p><span m='158970'>A</span> <span
  m='159226'>good</span> <span m='159482'>partition</span> <span
  m='159738'>belongs</span> <span m='159994'>to</span> <span m='160250'>a</span>
  <span m='160506'>cut</span> <span m='160763'>that</span> <span
  m='161019'>has</span> <span m='161275'>a</span> <span m='161531'>good</span>
  <span m='161787'>enough</span> <span m='162043'>room</span> <span
  m='162300'>to</span> <span m='162618'>move</span> <span m='162936'>up</span>
  <span m='163254'>and</span> <span m='163572'>down.</span> </p><p><span
  m='163890'>For</span> <span m='164168'>instance,</span> <span
  m='164446'>the</span> <span m='164725'>cut</span> <span
  m='165003'>between</span> <span m='165281'>levels</span> <span
  m='165560'>two</span> <span m='165838'>and</span> <span
  m='166116'>three</span> <span m='166395'>can</span> <span m='166673'>go</span>
  <span m='166951'>up</span> <span m='167230'>until</span> <span
  m='167635'>it</span> <span m='168040'>reaches</span> <span
  m='168445'>cluster</span> <span m='168850'>D-E-F.</span> <span
  m='169255'>The</span> <span m='169660'>cut</span> <span
  m='170065'>between</span> <span m='170470'>levels</span> <span
  m='170875'>three</span> <span m='171280'>and</span> <span
  m='171532'>four</span> <span m='171785'>has</span> <span
  m='172037'>more</span> <span m='172290'>room</span> <span m='172542'>to</span>
  <span m='172795'>move</span> <span m='173047'>until</span> <span
  m='173300'>it</span> <span m='173552'>reaches</span> <span
  m='173805'>the</span> <span m='174057'>cluster</span> <span
  m='174310'>B-C-D-E-F.</span> <span m='174738'>And</span> <span
  m='175166'>the</span> <span m='175594'>cut</span> <span
  m='176022'>between</span> <span m='176450'>levels</span> <span
  m='176878'>four</span> <span m='177306'>and</span> <span
  m='177734'>five</span> <span m='178162'>has</span> <span m='178590'>the</span>
  <span m='179086'>least</span> <span m='179583'>room.</span> </p><p><span
  m='180080'>So</span> <span m='180457'>it</span> <span m='180834'>seems</span>
  <span m='181211'>like</span> <span m='181588'>choosing</span> <span
  m='181965'>three</span> <span m='182342'>clusters</span> <span
  m='182720'>is</span> <span m='183384'>reasonable</span> <span
  m='184048'>in</span> <span m='184712'>this</span> <span
  m='185376'>case.</span> </p><p><span m='186040'>Going</span> <span
  m='186360'>back</span> <span m='186680'>to</span> <span m='187000'>our</span>
  <span m='187320'>dendrogram,</span> <span m='187640'>it</span> <span
  m='187960'>seems</span> <span m='188280'>that</span> <span
  m='188751'>having</span> <span m='189222'>two</span> <span
  m='189694'>clusters</span> <span m='190165'>or</span> <span
  m='190637'>three</span> <span m='191108'>clusters</span> <span
  m='191580'>is</span> <span m='191942'>reasonable</span> <span
  m='192304'>in</span> <span m='192666'>our</span> <span m='193028'>case.</span>
  </p><p><span m='193390'>We</span> <span m='193718'>can</span> <span
  m='194046'>actually</span> <span m='194375'>visualize</span> <span
  m='194703'>the</span> <span m='195031'>cuts</span> <span m='195360'>by</span>
  <span m='195738'>plotting</span> <span m='196117'>rectangles</span> <span
  m='196496'>around</span> <span m='196875'>the</span> <span
  m='197254'>clusters</span> <span m='197633'>on</span> <span
  m='198012'>this</span> <span m='198391'>tree.</span> </p><p><span
  m='198770'>To</span> <span m='199302'>do</span> <span m='199834'>so,</span>
  <span m='200366'>we</span> <span m='200898'>can</span> <span
  m='201431'>use</span> <span m='201963'>the</span> <span
  m='202495'>rect.hclust</span> <span m='203027'>function,</span> <span
  m='203560'>which</span> <span m='203935'>takes</span> <span
  m='204311'>as</span> <span m='204687'>an</span> <span m='205062'>input</span>
  <span m='205438'>clusterIntensiy,</span> <span m='205814'>which</span> <span
  m='206190'>is</span> <span m='206640'>our</span> <span m='207090'>tree.</span>
  </p><p><span m='207540'>And</span> <span m='207828'>then</span> <span
  m='208117'>we</span> <span m='208406'>can</span> <span
  m='208695'>specify</span> <span m='208984'>the</span> <span
  m='209273'>number</span> <span m='209562'>of</span> <span
  m='209851'>clusters</span> <span m='210140'>that</span> <span
  m='210346'>we</span> <span m='210553'>want.</span> </p><p><span
  m='210760'>So</span> <span m='211385'>let's</span> <span m='212010'>set</span>
  <span m='212635'>k=3.</span> </p><p><span m='213260'>And</span> <span
  m='213526'>we</span> <span m='213793'>can</span> <span m='214060'>color</span>
  <span m='214326'>the</span> <span m='214593'>borders</span> <span
  m='214860'>of</span> <span m='215126'>the</span> <span
  m='215393'>rectangles.</span> </p><p><span m='215660'>And</span> <span
  m='216130'>let's</span> <span m='216600'>color</span> <span
  m='217070'>them,</span> <span m='217540'>for</span> <span
  m='218010'>instance,</span> <span m='218480'>in</span> <span
  m='218950'>red.</span> </p><p><span m='219420'>Now</span> <span
  m='219818'>going</span> <span m='220216'>back</span> <span
  m='220615'>to</span> <span m='221013'>our</span> <span
  m='221411'>dendrogram,</span> <span m='221810'>now</span> <span
  m='222124'>we</span> <span m='222438'>can</span> <span m='222752'>see</span>
  <span m='223067'>the</span> <span m='223381'>three</span> <span
  m='223695'>clusters</span> <span m='224010'>in</span> <span
  m='224725'>these</span> <span m='225440'>red</span> <span
  m='226155'>rectangles.</span> </p><p><span m='226870'>Now</span> <span
  m='227223'>let</span> <span m='227576'>us</span> <span m='227929'>split</span>
  <span m='228282'>the</span> <span m='228635'>data</span> <span
  m='228988'>into</span> <span m='229341'>these</span> <span
  m='229694'>three</span> <span m='230047'>clusters.</span> </p><p><span
  m='230400'>We're</span> <span m='230656'>going</span> <span
  m='230913'>to</span> <span m='231170'>call</span> <span m='231426'>our</span>
  <span m='231683'>clusters,</span> <span m='231940'>for</span> <span
  m='233176'>instance,</span> <span m='234413'>flowerClusters.</span>
  </p><p><span m='235650'>And</span> <span m='236026'>then</span> <span
  m='236402'>we're</span> <span m='236778'>going</span> <span
  m='237154'>to</span> <span m='237530'>use</span> <span m='237906'>the</span>
  <span m='238282'>function</span> <span m='238658'>cut</span> <span
  m='239034'>tree.</span> </p><p><span m='239410'>And</span> <span
  m='239904'>literally,</span> <span m='240398'>this</span> <span
  m='240892'>function</span> <span m='241387'>cuts</span> <span
  m='241881'>the</span> <span m='242375'>dendrogram</span> <span
  m='242870'>into</span> <span m='243295'>however</span> <span
  m='243720'>many</span> <span m='244145'>clusters</span> <span
  m='244570'>we</span> <span m='244995'>want.</span> </p><p><span
  m='245420'>The</span> <span m='245720'>input</span> <span
  m='246020'>would</span> <span m='246320'>be</span> <span
  m='246620'>clusterIntensity.</span> </p><p><span m='249500'>And</span> <span
  m='249816'>then</span> <span m='250132'>we</span> <span m='250448'>have</span>
  <span m='250764'>to</span> <span m='251080'>specify</span> <span
  m='251396'>k=3,</span> <span m='251713'>because</span> <span
  m='252029'>we</span> <span m='252345'>would</span> <span
  m='252661'>like</span> <span m='252977'>to</span> <span m='253293'>have</span>
  <span m='253610'>three</span> <span m='255140'>clusters.</span> </p><p><span
  m='256670'>Now</span> <span m='256969'>let</span> <span m='257269'>us</span>
  <span m='257569'>output</span> <span m='257869'>the</span> <span
  m='258169'>flower</span> <span m='258469'>clusters</span> <span
  m='258769'>variable</span> <span m='259102'>to</span> <span
  m='259435'>see</span> <span m='259769'>how</span> <span m='260102'>it</span>
  <span m='260435'>looks.</span> </p><p><span m='260769'>So</span> <span
  m='262264'>flowerClusters.</span> </p><p><span m='263760'>And</span> <span
  m='264104'>we</span> <span m='264448'>see</span> <span m='264793'>that</span>
  <span m='265137'>the</span> <span m='265482'>flower</span> <span
  m='265826'>cluster</span> <span m='266171'>is</span> <span
  m='266515'>actually</span> <span m='266860'>a</span> <span
  m='267207'>vector</span> <span m='267554'>that</span> <span
  m='267901'>assigns</span> <span m='268248'>each</span> <span
  m='268595'>intensity</span> <span m='268942'>value</span> <span
  m='269289'>in</span> <span m='269636'>the</span> <span
  m='269983'>flower</span> <span m='270330'>vector</span> <span
  m='270705'>to</span> <span m='271080'>a</span> <span
  m='271455'>cluster.</span> </p><p><span m='271830'>It</span> <span
  m='272208'>actually</span> <span m='272587'>has</span> <span
  m='272966'>the</span> <span m='273345'>same</span> <span
  m='273724'>length,</span> <span m='274103'>which</span> <span
  m='274482'>is</span> <span m='274861'>2,005,</span> <span
  m='275240'>and</span> <span m='275687'>has</span> <span
  m='276135'>values</span> <span m='276582'>1,</span> <span m='277030'>2,</span>
  <span m='277477'>and</span> <span m='277925'>3,</span> <span
  m='278372'>which</span> <span m='278820'>correspond</span> <span
  m='279372'>to</span> <span m='279925'>each</span> <span
  m='280477'>cluster.</span> </p><p><span m='281030'>To</span> <span
  m='281342'>find</span> <span m='281655'>the</span> <span
  m='281968'>mean</span> <span m='282280'>intensity</span> <span
  m='282593'>value</span> <span m='282906'>of</span> <span
  m='283219'>each</span> <span m='283531'>of</span> <span m='283844'>our</span>
  <span m='284157'>clusters,</span> <span m='284470'>we</span> <span
  m='284825'>can</span> <span m='285180'>use</span> <span m='285536'>the</span>
  <span m='285891'>tapply</span> <span m='286247'>function</span> <span
  m='286602'>and</span> <span m='286958'>ask</span> <span m='287313'>R</span>
  <span m='287669'>to</span> <span m='288024'>group</span> <span
  m='288380'>the</span> <span m='288805'>values</span> <span
  m='289230'>in</span> <span m='289655'>the</span> <span
  m='290080'>flower</span> <span m='290505'>vector</span> <span
  m='290930'>according</span> <span m='291355'>to</span> <span
  m='291780'>the</span> <span m='292205'>flower</span> <span
  m='292630'>clusters,</span> <span m='293078'>and</span> <span
  m='293527'>then</span> <span m='293975'>apply</span> <span
  m='294424'>the</span> <span m='294872'>mean</span> <span
  m='295321'>statistic</span> <span m='295770'>to</span> <span
  m='296146'>each</span> <span m='296522'>of</span> <span m='296898'>the</span>
  <span m='297274'>groups.</span> </p><p><span m='297650'>What</span> <span
  m='297890'>we</span> <span m='298131'>obtain</span> <span m='298372'>is</span>
  <span m='298613'>that</span> <span m='298854'>the</span> <span
  m='299095'>first</span> <span m='299335'>cluster</span> <span
  m='299576'>has</span> <span m='299817'>a</span> <span m='300058'>mean</span>
  <span m='300299'>intensity</span> <span m='300540'>value</span> <span
  m='300993'>of</span> <span m='301447'>0.08,</span> <span
  m='301901'>which</span> <span m='302355'>is</span> <span
  m='302808'>closest</span> <span m='303262'>to</span> <span
  m='303716'>zero,</span> <span m='304170'>and</span> <span
  m='304411'>this</span> <span m='304653'>means</span> <span
  m='304895'>that</span> <span m='305136'>it</span> <span
  m='305378'>corresponds</span> <span m='305620'>to</span> <span
  m='305938'>the</span> <span m='306257'>darkest</span> <span
  m='306575'>shape</span> <span m='306894'>in</span> <span m='307212'>our</span>
  <span m='307531'>image.</span> </p><p><span m='307850'>And</span> <span
  m='308155'>then</span> <span m='308460'>the</span> <span
  m='308766'>third</span> <span m='309071'>cluster</span> <span
  m='309377'>here,</span> <span m='309682'>which</span> <span
  m='309988'>is</span> <span m='310293'>closest</span> <span
  m='310599'>to</span> <span m='310904'>1,</span> <span
  m='311210'>corresponds</span> <span m='311756'>to</span> <span
  m='312302'>the</span> <span m='312848'>fairest</span> <span
  m='313394'>shade.</span> </p><p><span m='313940'>And</span> <span
  m='314260'>now</span> <span m='314580'>the</span> <span m='314900'>fun</span>
  <span m='315220'>part.</span> </p><p><span m='315540'>Let</span> <span
  m='315850'>us</span> <span m='316160'>see</span> <span m='316470'>how</span>
  <span m='316780'>the</span> <span m='317090'>image</span> <span
  m='317400'>was</span> <span m='317710'>segmented.</span> </p><p><span
  m='318020'>To</span> <span m='318299'>output</span> <span m='318578'>an</span>
  <span m='318857'>image,</span> <span m='319136'>we</span> <span
  m='319415'>can</span> <span m='319694'>use</span> <span m='319973'>the</span>
  <span m='320252'>image</span> <span m='320531'>function</span> <span
  m='320810'>in</span> <span m='321181'>R,</span> <span m='321552'>which</span>
  <span m='321923'>takes</span> <span m='322294'>a</span> <span
  m='322665'>matrix</span> <span m='323036'>as</span> <span m='323407'>an</span>
  <span m='323778'>input.</span> </p><p><span m='324150'>But</span> <span
  m='324541'>the</span> <span m='324933'>variable</span> <span
  m='325325'>flowerClusters,</span> <span m='325717'>as</span> <span
  m='326109'>we</span> <span m='326500'>just</span> <span m='326892'>saw,</span>
  <span m='327284'>is</span> <span m='327676'>a</span> <span
  m='328068'>vector.</span> </p><p><span m='328460'>So</span> <span
  m='328780'>we</span> <span m='329100'>need</span> <span m='329420'>to</span>
  <span m='329740'>convert</span> <span m='330060'>it</span> <span
  m='330380'>into</span> <span m='330700'>a</span> <span
  m='331020'>matrix.</span> </p><p><span m='331340'>We</span> <span
  m='331572'>can</span> <span m='331805'>do</span> <span m='332038'>this</span>
  <span m='332270'>by</span> <span m='332503'>setting</span> <span
  m='332736'>the</span> <span m='332969'>dimension</span> <span
  m='333201'>of</span> <span m='333434'>this</span> <span
  m='333667'>variable</span> <span m='333900'>by</span> <span
  m='334306'>using</span> <span m='334712'>the</span> <span
  m='335118'>dimension</span> <span m='335524'>function.</span> </p><p><span
  m='335930'>So,</span> <span m='336306'>let's</span> <span
  m='336682'>use</span> <span m='337058'>the</span> <span
  m='337435'>dimension</span> <span m='337811'>function,</span> <span
  m='338187'>or</span> <span m='338563'>dim,</span> <span
  m='338940'>which</span> <span m='339654'>takes</span> <span
  m='340368'>as</span> <span m='341082'>input</span> <span
  m='341796'>flowerClusters.</span> </p><p><span m='342510'>And</span> <span
  m='342752'>then</span> <span m='342994'>we're</span> <span
  m='343236'>going</span> <span m='343478'>to</span> <span m='343721'>use</span>
  <span m='343963'>the</span> <span m='344205'>combined</span> <span
  m='344447'>function,</span> <span m='344690'>or</span> <span
  m='345030'>the</span> <span m='345370'>c</span> <span
  m='345710'>function.</span> </p><p><span m='346050'>And</span> <span
  m='346314'>its</span> <span m='346578'>first</span> <span
  m='346842'>argument</span> <span m='347106'>will</span> <span
  m='347370'>be</span> <span m='347634'>the</span> <span
  m='347898'>number</span> <span m='348162'>of</span> <span
  m='348426'>rows</span> <span m='348690'>that</span> <span m='348961'>we</span>
  <span m='349233'>want</span> <span m='349505'>for</span> <span
  m='349777'>the</span> <span m='350049'>matrix,</span> <span
  m='350320'>and</span> <span m='350592'>that</span> <span
  m='350864'>would</span> <span m='351136'>be</span> <span m='351408'>50.</span>
  </p><p><span m='351680'>And</span> <span m='351974'>the</span> <span
  m='352268'>second</span> <span m='352562'>argument</span> <span
  m='352856'>would</span> <span m='353150'>be</span> <span m='353444'>the</span>
  <span m='353738'>number</span> <span m='354032'>of</span> <span
  m='354326'>columns.</span> </p><p><span m='354620'>Why</span> <span
  m='354962'>did</span> <span m='355304'>we</span> <span m='355646'>use</span>
  <span m='355988'>50?</span> </p><p><span m='356330'>Simply</span> <span
  m='356828'>because</span> <span m='357326'>we</span> <span
  m='357824'>have</span> <span m='358322'>a</span> <span m='358820'>50</span>
  <span m='359318'>by</span> <span m='359816'>50</span> <span
  m='360314'>resolution</span> <span m='360812'>picture.</span> </p><p><span
  m='361310'>Now</span> <span m='361780'>pressing</span> <span
  m='362250'>Enter,</span> <span m='362720'>and</span> <span
  m='363190'>flowerClusters</span> <span m='363660'>looks</span> <span
  m='364235'>like</span> <span m='364810'>a</span> <span
  m='365385'>matrix.</span> </p><p><span m='365960'>Now</span> <span
  m='366257'>we</span> <span m='366554'>can</span> <span m='366851'>use</span>
  <span m='367148'>the</span> <span m='367445'>function</span> <span
  m='367742'>image,</span> <span m='368040'>which</span> <span
  m='368452'>takes</span> <span m='368864'>as</span> <span m='369276'>an</span>
  <span m='369688'>input</span> <span m='370100'>the</span> <span
  m='370512'>"flower</span> <span m='370924'>cl</span> <span
  m='371336'>clusters"</span> <span m='371748'>matrix.</span> </p><p><span
  m='372160'>And</span> <span m='372658'>let's</span> <span
  m='373157'>turn</span> <span m='373656'>off</span> <span m='374155'>the</span>
  <span m='374654'>axes</span> <span m='375153'>by</span> <span
  m='375652'>writing</span> <span m='376151'>axes="false."</span> <span
  m='376650'>And</span> <span m='377091'>now,</span> <span
  m='377532'>going</span> <span m='377973'>back</span> <span
  m='378415'>to</span> <span m='378856'>our</span> <span
  m='379297'>graphics</span> <span m='379738'>window,</span> <span
  m='380180'>we</span> <span m='380558'>can</span> <span m='380937'>see</span>
  <span m='381315'>our</span> <span m='381694'>segmented</span> <span
  m='382072'>image</span> <span m='382451'>here.</span> </p><p><span
  m='382830'>The</span> <span m='383180'>darkest</span> <span
  m='383530'>shade</span> <span m='383880'>corresponds</span> <span
  m='384230'>to</span> <span m='384580'>the</span> <span
  m='384930'>background,</span> <span m='385280'>and</span> <span
  m='385732'>this</span> <span m='386184'>is</span> <span
  m='386636'>actually</span> <span m='387088'>associated</span> <span
  m='387541'>with</span> <span m='387993'>the</span> <span
  m='388445'>first</span> <span m='388897'>cluster.</span> </p><p><span
  m='389350'>The</span> <span m='389559'>one</span> <span m='389768'>in</span>
  <span m='389977'>the</span> <span m='390186'>middle</span> <span
  m='390395'>is</span> <span m='390604'>the</span> <span m='390813'>core</span>
  <span m='391022'>of</span> <span m='391231'>the</span> <span
  m='391440'>flower,</span> <span m='391650'>and</span> <span
  m='391978'>this</span> <span m='392306'>is</span> <span
  m='392634'>cluster</span> <span m='392962'>2.</span> </p><p><span
  m='393290'>And</span> <span m='393593'>then</span> <span m='393897'>the</span>
  <span m='394201'>petals</span> <span m='394505'>correspond</span> <span
  m='394808'>to</span> <span m='395112'>cluster</span> <span
  m='395416'>3,</span> <span m='395720'>which</span> <span m='396195'>has</span>
  <span m='396670'>the</span> <span m='397145'>fairest</span> <span
  m='397620'>shade</span> <span m='398095'>in</span> <span m='398570'>our</span>
  <span m='399045'>image.</span> </p><p><span m='399520'>Let</span> <span
  m='399871'>us</span> <span m='400222'>now</span> <span m='400573'>check</span>
  <span m='400924'>how</span> <span m='401275'>the</span> <span
  m='401626'>original</span> <span m='401977'>image</span> <span
  m='402328'>looked.</span> </p><p><span m='402680'>Let's</span> <span
  m='403020'>go</span> <span m='403361'>back</span> <span m='403702'>to</span>
  <span m='404043'>the</span> <span m='404384'>console</span> <span
  m='404725'>and</span> <span m='405066'>then</span> <span
  m='405407'>maximize</span> <span m='405748'>it</span> <span
  m='406089'>here.</span> </p><p><span m='406430'>So</span> <span
  m='406685'>let's</span> <span m='406940'>go</span> <span
  m='407195'>back</span> <span m='407450'>to</span> <span m='407705'>our</span>
  <span m='407960'>image</span> <span m='408215'>function,</span> <span
  m='408470'>but</span> <span m='409021'>now</span> <span m='409572'>this</span>
  <span m='410123'>time</span> <span m='410674'>the</span> <span
  m='411225'>input</span> <span m='411776'>is</span> <span m='412327'>the</span>
  <span m='412878'>flower</span> <span m='413429'>matrix.</span> </p><p><span
  m='413980'>And</span> <span m='414256'>then</span> <span
  m='414532'>let's</span> <span m='414808'>keep</span> <span
  m='415085'>the</span> <span m='415361'>axis</span> <span m='415637'>as</span>
  <span m='415913'>false.</span> </p><p><span m='416190'>But</span> <span
  m='416566'>now,</span> <span m='416942'>how</span> <span
  m='417318'>about</span> <span m='417694'>we</span> <span m='418070'>add</span>
  <span m='418446'>an</span> <span m='418822'>additional</span> <span
  m='419198'>argument</span> <span m='419574'>regarding</span> <span
  m='419950'>the</span> <span m='420373'>color</span> <span
  m='420796'>scheme?</span> </p><p><span m='421220'>Let's</span> <span
  m='421560'>make</span> <span m='421900'>it</span> <span
  m='422240'>grayscale.</span> </p><p><span m='422580'>So</span> <span
  m='422940'>we're</span> <span m='423300'>going</span> <span
  m='423660'>to</span> <span m='424020'>take</span> <span m='424380'>the</span>
  <span m='424740'>color,</span> <span m='425100'>and</span> <span
  m='425452'>it's</span> <span m='425805'>going</span> <span
  m='426157'>to</span> <span m='426510'>take</span> <span m='426862'>the</span>
  <span m='427215'>function</span> <span m='427567'>gray.</span> </p><p><span
  m='427920'>And</span> <span m='428177'>the</span> <span
  m='428435'>input</span> <span m='428693'>to</span> <span
  m='428951'>this</span> <span m='429208'>function</span> <span
  m='429466'>is</span> <span m='429724'>a</span> <span
  m='429982'>sequence</span> <span m='430240'>of</span> <span
  m='430598'>values</span> <span m='430957'>that</span> <span
  m='431316'>goes</span> <span m='431675'>from</span> <span m='432034'>0</span>
  <span m='432393'>to</span> <span m='432752'>1,</span> <span
  m='433111'>which</span> <span m='433470'>actually</span> <span
  m='433853'>is</span> <span m='434236'>from</span> <span
  m='434620'>black</span> <span m='435003'>to</span> <span
  m='435386'>white.</span> </p><p><span m='435770'>And</span> <span
  m='436002'>then</span> <span m='436234'>we</span> <span m='436466'>have</span>
  <span m='436698'>to</span> <span m='436931'>also</span> <span
  m='437163'>specify</span> <span m='437395'>its</span> <span
  m='437627'>length,</span> <span m='437860'>and</span> <span
  m='438408'>that's</span> <span m='438957'>specified</span> <span
  m='439506'>as</span> <span m='440055'>256,</span> <span
  m='440603'>because</span> <span m='441152'>this</span> <span
  m='441701'>corresponds</span> <span m='442250'>to</span> <span
  m='442790'>the</span> <span m='443330'>convention</span> <span
  m='443870'>for</span> <span m='444410'>grayscale.</span> </p><p><span
  m='444950'>And</span> <span m='445240'>now,</span> <span
  m='445530'>going</span> <span m='445820'>back</span> <span
  m='446110'>to</span> <span m='446400'>our</span> <span
  m='446690'>image,</span> <span m='446980'>now</span> <span
  m='447402'>we</span> <span m='447824'>can</span> <span m='448246'>see</span>
  <span m='448668'>our</span> <span m='449091'>original</span> <span
  m='449513'>grayscale</span> <span m='449935'>image</span> <span
  m='450357'>here.</span> </p><p><span m='450780'>You</span> <span
  m='451090'>can</span> <span m='451401'>see</span> <span m='451712'>that</span>
  <span m='452023'>it</span> <span m='452334'>has</span> <span
  m='452645'>a</span> <span m='452956'>very,</span> <span m='453267'>very</span>
  <span m='453578'>low</span> <span m='453889'>resolution.</span> </p><p><span
  m='454200'>But</span> <span m='454466'>in</span> <span m='454732'>our</span>
  <span m='454998'>next</span> <span m='455264'>video,</span> <span
  m='455530'>we</span> <span m='455796'>will</span> <span m='456062'>try</span>
  <span m='456328'>to</span> <span m='456594'>segment</span> <span
  m='456860'>an</span> <span m='457222'>MRI</span> <span m='457585'>image</span>
  <span m='457947'>of</span> <span m='458310'>the</span> <span
  m='458672'>brain</span> <span m='459035'>that</span> <span
  m='459397'>has</span> <span m='459760'>a</span> <span m='460278'>much,</span>
  <span m='460796'>much</span> <span m='461314'>higher</span> <span
  m='461832'>resolution.</span> </p>
embedded_media:
  - uid: 017aeab5e81c1bf9ebbb648f6cf26c1a
    parent_uid: 4c75ada9d638803de8ff2006e93353bd
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: t8nLB1AmUgE
  - uid: e9fef96512a9a3bfab13e39ac177d6b8
    parent_uid: 4c75ada9d638803de8ff2006e93353bd
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: t8nLB1AmUgE
  - uid: e4dcff93e2415c6feb250581f5ce9662
    parent_uid: 4c75ada9d638803de8ff2006e93353bd
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/t8nLB1AmUgE/default.jpg'
  - uid: f41f7ea149f56cfe6145dd8e6f4764fa
    parent_uid: 4c75ada9d638803de8ff2006e93353bd
    id: t8nLB1AmUgE.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/seeing-the-big-picture-segmenting-images-to-create-data-recitation/video-3-hierarchical-clustering/video-3-hierarchical-clustering-0/t8nLB1AmUgE.srt
  - uid: bb82add35de286fa7bcd7db4e27241ff
    parent_uid: 4c75ada9d638803de8ff2006e93353bd
    id: t8nLB1AmUgE.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/seeing-the-big-picture-segmenting-images-to-create-data-recitation/video-3-hierarchical-clustering/video-3-hierarchical-clustering-0/t8nLB1AmUgE.pdf
  - uid: 6e860a81c9b8bef2fef569c5b22d99ce
    parent_uid: 4c75ada9d638803de8ff2006e93353bd
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 86be4e17730f29c65f88de5f0db91c1c
    parent_uid: 4c75ada9d638803de8ff2006e93353bd
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: da903e5266f6eb83f96920de5a27153f
    parent_uid: 4c75ada9d638803de8ff2006e93353bd
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_6.4.04_300k.mp4
type: courses
layout: video
---
