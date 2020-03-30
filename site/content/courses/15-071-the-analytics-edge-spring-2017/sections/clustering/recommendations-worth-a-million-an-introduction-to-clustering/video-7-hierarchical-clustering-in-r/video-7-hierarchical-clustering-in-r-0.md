---
title: 'Video 7: Hierarchical Clustering in R'
uid: 586e592dafc455b019b27dd6d67ab5bb
parent_uid: c0ef063dc722b998a530922a135bd19e
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-7-hierarchical-clustering-in-r/video-7-hierarchical-clustering-in-r-0
short_url: video-7-hierarchical-clustering-in-r-0
inline_embed_id: 48407547video7hierarchicalclusteringinr38618455
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4490'>In</span> <span m='4971'>this</span> <span
  m='5452'>video</span> <span m='5934'>we'll</span> <span m='6415'>use</span>
  <span m='6897'>hierarchical</span> <span m='7378'>clustering</span> <span
  m='7860'>to</span> <span m='8218'>cluster</span> <span m='8576'>the</span>
  <span m='8935'>movies</span> <span m='9293'>in</span> <span
  m='9651'>the</span> <span m='10010'>movie</span> <span m='10368'>lens</span>
  <span m='10726'>data</span> <span m='11085'>set</span> <span
  m='11443'>by</span> <span m='11801'>genre.</span> </p><p><span
  m='12160'>After</span> <span m='12491'>we</span> <span m='12823'>make</span>
  <span m='13155'>our</span> <span m='13486'>clusters,</span> <span
  m='13818'>we'll</span> <span m='14150'>see</span> <span m='14573'>how</span>
  <span m='14996'>they</span> <span m='15420'>can</span> <span
  m='15843'>be</span> <span m='16266'>used</span> <span m='16690'>to</span>
  <span m='17113'>make</span> <span m='17536'>recommendations.</span>
  </p><p><span m='17960'>There</span> <span m='18425'>are</span> <span
  m='18891'>two</span> <span m='19357'>steps</span> <span m='19822'>to</span>
  <span m='20288'>hierarchical</span> <span m='20754'>clustering.</span>
  </p><p><span m='21220'>First</span> <span m='21537'>we</span> <span
  m='21854'>have</span> <span m='22171'>to</span> <span m='22488'>compute</span>
  <span m='22805'>the</span> <span m='23122'>distances</span> <span
  m='23439'>between</span> <span m='23756'>all</span> <span
  m='24073'>data</span> <span m='24390'>points.</span> </p><p><span
  m='25450'>And</span> <span m='25818'>then</span> <span m='26187'>we</span>
  <span m='26556'>need</span> <span m='26925'>to</span> <span
  m='27293'>cluster</span> <span m='27662'>the</span> <span
  m='28031'>points.</span> </p><p><span m='28400'>To</span> <span
  m='28795'>compute</span> <span m='29190'>the</span> <span
  m='29585'>distances</span> <span m='29980'>we</span> <span
  m='30375'>can</span> <span m='30770'>use</span> <span m='31165'>the</span>
  <span m='31560'>dist</span> <span m='31955'>function.</span> </p><p><span
  m='32350'>We</span> <span m='32747'>only</span> <span m='33144'>want</span>
  <span m='33541'>a</span> <span m='33938'>cluster</span> <span
  m='34335'>movies</span> <span m='34732'>on</span> <span m='35129'>the</span>
  <span m='35526'>genre</span> <span m='35923'>variable,</span> <span
  m='36320'>not</span> <span m='36690'>on</span> <span m='37061'>the</span>
  <span m='37432'>title</span> <span m='37803'>variable,</span> <span
  m='38174'>so</span> <span m='38545'>we'll</span> <span
  m='38916'>cluster</span> <span m='39287'>on</span> <span
  m='39658'>columns</span> <span m='40029'>two</span> <span
  m='40400'>through</span> <span m='41200'>20.</span> </p><p><span
  m='42000'>So</span> <span m='42536'>let's</span> <span m='43073'>call</span>
  <span m='43610'>the</span> <span m='44146'>output</span> <span
  m='44683'>distances,</span> <span m='45220'>and</span> <span
  m='45537'>we'll</span> <span m='45854'>use</span> <span m='46171'>the</span>
  <span m='46489'>dist</span> <span m='46806'>function,</span> <span
  m='47123'>where</span> <span m='47440'>the</span> <span m='47758'>first</span>
  <span m='48075'>argument</span> <span m='48392'>is</span> <span
  m='48710'>moviesmovies[2:20],</span> <span m='49348'>this</span> <span
  m='49987'>is</span> <span m='50626'>what</span> <span m='51265'>we</span>
  <span m='51904'>want</span> <span m='52543'>to</span> <span
  m='53182'>cluster</span> <span m='53821'>on.</span> </p><p><span
  m='54460'>And</span> <span m='55303'>the</span> <span m='56146'>second</span>
  <span m='56990'>argument</span> <span m='57833'>is</span> <span
  m='58676'>method="euclidean",</span> <span m='59520'>meaning</span> <span
  m='60087'>that</span> <span m='60655'>we</span> <span m='61222'>want</span>
  <span m='61790'>to</span> <span m='62357'>use</span> <span
  m='62925'>euclidean</span> <span m='63492'>distance.</span> </p><p><span
  m='64060'>Now</span> <span m='64460'>let's</span> <span
  m='64860'>cluster</span> <span m='65260'>our</span> <span
  m='65660'>movies</span> <span m='66060'>using</span> <span
  m='66460'>the</span> <span m='66860'>hclust</span> <span
  m='67260'>function</span> <span m='67660'>for</span> <span
  m='68426'>hierarchical</span> <span m='69193'>clustering.</span> </p><p><span
  m='69960'>We'll</span> <span m='70610'>call</span> <span m='71260'>the</span>
  <span m='71910'>output</span> <span m='72560'>clusterMovies,</span> <span
  m='73210'>and</span> <span m='73761'>use</span> <span m='74312'>hclust</span>
  <span m='74863'>where</span> <span m='75414'>the</span> <span
  m='75965'>first</span> <span m='76516'>argument</span> <span
  m='77067'>is</span> <span m='77618'>distances,</span> <span
  m='78170'>the</span> <span m='78558'>output</span> <span m='78946'>of</span>
  <span m='79335'>the</span> <span m='79723'>dist</span> <span
  m='80111'>function.</span> </p><p><span m='80500'>And</span> <span
  m='80785'>the</span> <span m='81070'>second</span> <span
  m='81355'>argument</span> <span m='81640'>is</span> <span
  m='81925'>method="ward".</span> </p><p><span m='85210'>The</span> <span
  m='85705'>ward</span> <span m='86200'>method</span> <span
  m='86695'>cares</span> <span m='87190'>about</span> <span m='87685'>the</span>
  <span m='88180'>distance</span> <span m='88675'>between</span> <span
  m='89170'>clusters</span> <span m='89665'>using</span> <span
  m='90160'>centroid</span> <span m='90530'>distance,</span> <span
  m='90900'>and</span> <span m='91270'>also</span> <span m='91640'>the</span>
  <span m='92010'>variance</span> <span m='92380'>in</span> <span
  m='92750'>each</span> <span m='93120'>of</span> <span m='93893'>the</span>
  <span m='94666'>clusters.</span> </p><p><span m='95440'>Now</span> <span
  m='95847'>let's</span> <span m='96255'>plot</span> <span m='96663'>the</span>
  <span m='97071'>dendrogram</span> <span m='97478'>of</span> <span
  m='97886'>our</span> <span m='98294'>clustering</span> <span
  m='98702'>algorithm</span> <span m='99110'>by</span> <span
  m='99560'>typing</span> <span m='100010'>plot,</span> <span
  m='100460'>and</span> <span m='100910'>then</span> <span m='101360'>in</span>
  <span m='101810'>parentheses</span> <span m='102260'>clusterMovies.</span>
  </p><p><span m='106560'>This</span> <span m='106900'>dendrogram</span> <span
  m='107240'>might</span> <span m='107580'>look</span> <span m='107920'>a</span>
  <span m='108260'>little</span> <span m='108600'>strange.</span> </p><p><span
  m='108940'>We</span> <span m='109345'>have</span> <span m='109750'>all</span>
  <span m='110155'>this</span> <span m='110560'>black</span> <span
  m='110965'>along</span> <span m='111370'>the</span> <span
  m='111775'>bottom.</span> </p><p><span m='112180'>Remember</span> <span
  m='112574'>that</span> <span m='112968'>the</span> <span
  m='113362'>dendrogram</span> <span m='113756'>lists</span> <span
  m='114150'>all</span> <span m='114493'>of</span> <span m='114837'>that</span>
  <span m='115181'>data</span> <span m='115525'>points</span> <span
  m='115868'>along</span> <span m='116212'>the</span> <span
  m='116556'>bottom.</span> </p><p><span m='116900'>But</span> <span
  m='117215'>when</span> <span m='117530'>there</span> <span
  m='117845'>are</span> <span m='118160'>over</span> <span
  m='118475'>1,000</span> <span m='118790'>data</span> <span
  m='119105'>points</span> <span m='119420'>it's</span> <span
  m='119920'>impossible</span> <span m='120420'>to</span> <span
  m='120920'>read.</span> </p><p><span m='121420'>We'll</span> <span
  m='121736'>see</span> <span m='122052'>later</span> <span
  m='122369'>how</span> <span m='122685'>to</span> <span
  m='123001'>assign</span> <span m='123318'>our</span> <span
  m='123634'>clusters</span> <span m='123950'>to</span> <span
  m='124267'>groups</span> <span m='124583'>so</span> <span
  m='124900'>that</span> <span m='125310'>we</span> <span m='125721'>can</span>
  <span m='126132'>analyze</span> <span m='126543'>which</span> <span
  m='126954'>data</span> <span m='127364'>points</span> <span
  m='127775'>are</span> <span m='128186'>in</span> <span m='128597'>which</span>
  <span m='129008'>cluster.</span> </p><p><span m='129419'>So</span> <span
  m='129800'>looking</span> <span m='130181'>at</span> <span
  m='130563'>this</span> <span m='130944'>dendrogram,</span> <span
  m='131325'>how</span> <span m='131707'>many</span> <span
  m='132088'>clusters</span> <span m='132470'>would</span> <span
  m='132913'>you</span> <span m='133356'>pick?</span> </p><p><span
  m='133800'>It</span> <span m='134215'>looks</span> <span
  m='134630'>like</span> <span m='135045'>maybe</span> <span
  m='135460'>three</span> <span m='135875'>or</span> <span
  m='136290'>four</span> <span m='136705'>clusters</span> <span
  m='137120'>would</span> <span m='137453'>be</span> <span m='137786'>a</span>
  <span m='138120'>good</span> <span m='138453'>choice</span> <span
  m='138786'>according</span> <span m='139120'>to</span> <span
  m='139453'>the</span> <span m='139786'>dendrogram.</span> </p><p><span
  m='140120'>But</span> <span m='140491'>let's</span> <span
  m='140862'>keep</span> <span m='141233'>our</span> <span
  m='141605'>application</span> <span m='141976'>in</span> <span
  m='142347'>mind,</span> <span m='142718'>too.</span> </p><p><span
  m='143090'>We</span> <span m='143450'>probably</span> <span
  m='143810'>want</span> <span m='144170'>more</span> <span
  m='144530'>than</span> <span m='144890'>two,</span> <span
  m='145250'>three,</span> <span m='145610'>or</span> <span
  m='145970'>even</span> <span m='146330'>four</span> <span
  m='146690'>clusters</span> <span m='147050'>of</span> <span
  m='147651'>movies</span> <span m='148252'>to</span> <span
  m='148854'>make</span> <span m='149455'>recommendations</span> <span
  m='150057'>to</span> <span m='150658'>users.</span> </p><p><span
  m='151260'>It</span> <span m='151484'>looks</span> <span
  m='151708'>like</span> <span m='151932'>there's</span> <span
  m='152156'>a</span> <span m='152380'>nice</span> <span m='152604'>spot</span>
  <span m='152829'>down</span> <span m='153459'>here</span> <span
  m='154089'>where</span> <span m='154719'>there's</span> <span
  m='155349'>10</span> <span m='155979'>clusters.</span> </p><p><span
  m='156610'>This</span> <span m='157075'>is</span> <span
  m='157541'>probably</span> <span m='158007'>better</span> <span
  m='158472'>for</span> <span m='158938'>our</span> <span
  m='159404'>application.</span> </p><p><span m='159870'>We</span> <span
  m='160291'>could</span> <span m='160713'>select</span> <span
  m='161135'>even</span> <span m='161556'>more</span> <span
  m='161978'>clusters</span> <span m='162400'>if</span> <span
  m='162803'>we</span> <span m='163206'>want</span> <span m='163610'>to</span>
  <span m='164013'>have</span> <span m='164416'>very</span> <span
  m='164820'>specific</span> <span m='165223'>genre</span> <span
  m='165626'>groups.</span> </p><p><span m='166030'>If</span> <span
  m='166263'>you</span> <span m='166497'>want</span> <span m='166731'>a</span>
  <span m='166965'>lot</span> <span m='167198'>of</span> <span
  m='167432'>clusters</span> <span m='167666'>it's</span> <span
  m='167900'>hard</span> <span m='168216'>to</span> <span m='168533'>pick</span>
  <span m='168850'>the</span> <span m='169166'>right</span> <span
  m='169483'>number</span> <span m='169800'>from</span> <span
  m='170116'>the</span> <span m='170433'>dendrogram.</span> </p><p><span
  m='170750'>You</span> <span m='171067'>need</span> <span m='171385'>to</span>
  <span m='171703'>use</span> <span m='172021'>your</span> <span
  m='172338'>understanding</span> <span m='172656'>of</span> <span
  m='172974'>the</span> <span m='173292'>problem</span> <span
  m='173610'>to</span> <span m='174011'>pick</span> <span m='174413'>the</span>
  <span m='174815'>number</span> <span m='175216'>of</span> <span
  m='175618'>clusters.</span> </p><p><span m='176020'>Let's</span> <span
  m='176360'>stick</span> <span m='176700'>with</span> <span
  m='177040'>10</span> <span m='177380'>clusters</span> <span
  m='177720'>for</span> <span m='178060'>now,</span> <span
  m='178400'>combining</span> <span m='178775'>what</span> <span
  m='179151'>we</span> <span m='179527'>learned</span> <span
  m='179902'>from</span> <span m='180278'>the</span> <span
  m='180654'>dendrogram</span> <span m='181030'>with</span> <span
  m='181623'>our</span> <span m='182216'>understanding</span> <span
  m='182810'>of</span> <span m='183403'>the</span> <span
  m='183996'>problem.</span> </p><p><span m='184590'>Now</span> <span
  m='184977'>back</span> <span m='185364'>in</span> <span m='185751'>our</span>
  <span m='186138'>R</span> <span m='186525'>console</span> <span
  m='186912'>we</span> <span m='187300'>can</span> <span m='187687'>label</span>
  <span m='188074'>each</span> <span m='188461'>of</span> <span
  m='188848'>the</span> <span m='189235'>data</span> <span
  m='189622'>points</span> <span m='190010'>according</span> <span
  m='190326'>to</span> <span m='190643'>what</span> <span
  m='190960'>cluster</span> <span m='191276'>it</span> <span
  m='191593'>belongs</span> <span m='191910'>to</span> <span
  m='192516'>using</span> <span m='193122'>the</span> <span
  m='193728'>cutree</span> <span m='194334'>function.</span> </p><p><span
  m='194940'>So</span> <span m='195462'>let's</span> <span
  m='195985'>type</span> <span
  m='196507'>clusterGroups=cutree(clusterMovies,</span> <span
  m='197030'>k=10).</span> </p><p><span m='212450'>Now</span> <span
  m='212773'>let's</span> <span m='213096'>figure</span> <span
  m='213420'>out</span> <span m='213743'>what</span> <span m='214066'>the</span>
  <span m='214390'>clusters</span> <span m='214713'>are</span> <span
  m='215036'>like.</span> </p><p><span m='215360'>We'll</span> <span
  m='215735'>use</span> <span m='216111'>the</span> <span
  m='216487'>tapply</span> <span m='216862'>function</span> <span
  m='217238'>to</span> <span m='217614'>compute</span> <span
  m='217990'>the</span> <span m='218463'>percentage</span> <span
  m='218936'>of</span> <span m='219410'>movies</span> <span m='219883'>in</span>
  <span m='220356'>each</span> <span m='220830'>genre</span> <span
  m='221303'>and</span> <span m='221776'>cluster.</span> </p><p><span
  m='222250'>So</span> <span m='222670'>let's</span> <span
  m='223091'>type</span> <span m='223512'>tapply,</span> <span
  m='223933'>and</span> <span m='224354'>then</span> <span
  m='224775'>give</span> <span m='225196'>us</span> <span m='225617'>the</span>
  <span m='226038'>first</span> <span m='226459'>argument,</span> <span
  m='226880'>movies$Action--</span> <span m='227728'>we'll</span> <span
  m='228576'>start</span> <span m='229425'>the</span> <span
  m='230273'>action</span> <span m='231121'>genre--</span> <span
  m='231970'>and</span> <span m='233106'>then</span> <span
  m='234243'>clusterGroups,</span> <span m='235380'>and</span> <span
  m='236516'>then</span> <span m='237653'>mean.</span> </p><p><span
  m='238790'>So</span> <span m='239106'>what</span> <span m='239422'>does</span>
  <span m='239738'>this</span> <span m='240054'>do?</span> </p><p><span
  m='240370'>It</span> <span m='240778'>divides</span> <span
  m='241187'>our</span> <span m='241596'>data</span> <span
  m='242005'>points</span> <span m='242414'>into</span> <span
  m='242823'>the</span> <span m='243232'>10</span> <span
  m='243641'>clusters</span> <span m='244050'>and</span> <span
  m='244423'>then</span> <span m='244796'>computes</span> <span
  m='245170'>the</span> <span m='245543'>average</span> <span
  m='245916'>value</span> <span m='246290'>of</span> <span m='246778'>the</span>
  <span m='247267'>action</span> <span m='247755'>variable</span> <span
  m='248244'>for</span> <span m='248732'>each</span> <span
  m='249221'>cluster.</span> </p><p><span m='249710'>Remember</span> <span
  m='250078'>that</span> <span m='250446'>the</span> <span
  m='250814'>action</span> <span m='251182'>variable</span> <span
  m='251550'>is</span> <span m='251968'>a</span> <span m='252387'>binary</span>
  <span m='252806'>variable</span> <span m='253225'>with</span> <span
  m='253644'>value</span> <span m='254063'>0</span> <span m='254482'>or</span>
  <span m='254901'>1.</span> </p><p><span m='255320'>So</span> <span
  m='255701'>by</span> <span m='256082'>computing</span> <span
  m='256463'>the</span> <span m='256845'>average</span> <span
  m='257226'>of</span> <span m='257607'>this</span> <span
  m='257988'>variable</span> <span m='258370'>we're</span> <span
  m='258728'>computing</span> <span m='259086'>the</span> <span
  m='259444'>percentage</span> <span m='259802'>of</span> <span
  m='260160'>movies</span> <span m='260519'>in</span> <span
  m='261002'>that</span> <span m='261486'>cluster</span> <span
  m='261970'>that</span> <span m='262454'>belong</span> <span
  m='262938'>in</span> <span m='263422'>that</span> <span
  m='263906'>genre.</span> </p><p><span m='264390'>So</span> <span
  m='264808'>we</span> <span m='265226'>can</span> <span m='265644'>see</span>
  <span m='266062'>here</span> <span m='266480'>that</span> <span
  m='266899'>in</span> <span m='267317'>cluster</span> <span
  m='267735'>2,</span> <span m='268153'>about</span> <span m='268571'>78%</span>
  <span m='268990'>of</span> <span m='269471'>the</span> <span
  m='269952'>movies</span> <span m='270434'>have</span> <span
  m='270915'>the</span> <span m='271397'>action</span> <span
  m='271878'>genre</span> <span m='272360'>label,</span> <span
  m='272807'>whereas</span> <span m='273255'>in</span> <span
  m='273703'>cluster</span> <span m='274151'>4</span> <span
  m='274598'>none</span> <span m='275046'>of</span> <span m='275494'>the</span>
  <span m='275942'>movies</span> <span m='276390'>are</span> <span
  m='276900'>labeled</span> <span m='277410'>as</span> <span
  m='277920'>action</span> <span m='278430'>movies.</span> </p><p><span
  m='278940'>Let's</span> <span m='279324'>try</span> <span
  m='279708'>this</span> <span m='280092'>again,</span> <span
  m='280477'>but</span> <span m='280861'>this</span> <span
  m='281245'>time</span> <span m='281630'>let's</span> <span
  m='281903'>look</span> <span m='282176'>at</span> <span m='282450'>the</span>
  <span m='282723'>romance</span> <span m='282996'>genre.</span> </p><p><span
  m='287050'>Here</span> <span m='287366'>we</span> <span m='287683'>can</span>
  <span m='288000'>see</span> <span m='288316'>that</span> <span
  m='288633'>all</span> <span m='288950'>of</span> <span m='289266'>the</span>
  <span m='289583'>movies</span> <span m='289900'>in</span> <span
  m='290216'>clusters</span> <span m='290533'>six</span> <span
  m='290850'>and</span> <span m='291395'>seven</span> <span
  m='291940'>are</span> <span m='292485'>labeled</span> <span
  m='293030'>as</span> <span m='293575'>romance</span> <span
  m='294120'>movies,</span> <span m='294665'>whereas</span> <span
  m='295210'>only</span> <span m='295755'>4%</span> <span m='296300'>of</span>
  <span m='296674'>the</span> <span m='297049'>movies</span> <span
  m='297423'>in</span> <span m='297798'>cluster</span> <span
  m='298172'>two</span> <span m='298547'>are</span> <span
  m='298921'>labeled</span> <span m='299296'>as</span> <span
  m='299670'>romance</span> <span m='300045'>movies.</span> </p><p><span
  m='300420'>We</span> <span m='300871'>can</span> <span
  m='301322'>repeat</span> <span m='301774'>this</span> <span
  m='302225'>for</span> <span m='302677'>each</span> <span
  m='303128'>genre.</span> </p><p><span m='303580'>If</span> <span
  m='303854'>you</span> <span m='304128'>do</span> <span m='304403'>you</span>
  <span m='304677'>can</span> <span m='304952'>create</span> <span
  m='305226'>a</span> <span m='305501'>large</span> <span
  m='305775'>table</span> <span m='306050'>to</span> <span
  m='306431'>better</span> <span m='306813'>analyze</span> <span
  m='307195'>the</span> <span m='307577'>clusters,</span> <span
  m='307959'>which</span> <span m='308340'>I</span> <span
  m='308722'>saved</span> <span m='309104'>to</span> <span m='309486'>a</span>
  <span m='309868'>spreadsheet.</span> </p><p><span m='310250'>Lets</span> <span
  m='310465'>take</span> <span m='310680'>a</span> <span m='310895'>look.</span>
  </p><p><span m='313730'>Here</span> <span m='314115'>we</span> <span
  m='314500'>have</span> <span m='314885'>in</span> <span m='315270'>each</span>
  <span m='315655'>column</span> <span m='316040'>the</span> <span
  m='316425'>cluster,</span> <span m='316810'>and</span> <span
  m='317298'>in</span> <span m='317786'>each</span> <span m='318275'>row</span>
  <span m='318763'>the</span> <span m='319251'>genre.</span> </p><p><span
  m='319740'>I</span> <span m='320108'>highlighted</span> <span
  m='320476'>the</span> <span m='320845'>cells</span> <span
  m='321213'>that</span> <span m='321581'>have</span> <span m='321950'>a</span>
  <span m='322444'>higher</span> <span m='322938'>than</span> <span
  m='323432'>average</span> <span m='323926'>value.</span> </p><p><span
  m='324420'>So</span> <span m='324750'>we</span> <span m='325081'>can</span>
  <span m='325412'>see</span> <span m='325743'>here</span> <span
  m='326074'>in</span> <span m='326405'>cluster</span> <span
  m='326735'>2,</span> <span m='327066'>as</span> <span m='327397'>we</span>
  <span m='327728'>saw</span> <span m='328059'>before,</span> <span
  m='328390'>that</span> <span m='328829'>cluster</span> <span
  m='329268'>2</span> <span m='329707'>has</span> <span m='330146'>a</span>
  <span m='330585'>high</span> <span m='331024'>number</span> <span
  m='331463'>of</span> <span m='331902'>action</span> <span
  m='332341'>movies.</span> </p><p><span m='332780'>Cluster</span> <span
  m='333173'>1</span> <span m='333566'>has</span> <span m='333959'>a</span>
  <span m='334352'>little</span> <span m='334745'>bit</span> <span
  m='335138'>of</span> <span m='335531'>everything,</span> <span
  m='335924'>some</span> <span m='336317'>animation,</span> <span
  m='336710'>children's,</span> <span m='337490'>fantasy,</span> <span
  m='338270'>musicals,</span> <span m='339050'>war</span> <span
  m='339830'>and</span> <span m='340610'>westerns.</span> </p><p><span
  m='341390'>So</span> <span m='341861'>I'm</span> <span
  m='342332'>calling</span> <span m='342804'>this</span> <span
  m='343275'>the</span> <span m='343747'>miscellaneous</span> <span
  m='344218'>cluster.</span> </p><p><span m='344690'>Cluster</span> <span
  m='345032'>2</span> <span m='345374'>has</span> <span m='345716'>a</span>
  <span m='346058'>lot</span> <span m='346401'>of</span> <span
  m='346743'>the</span> <span m='347085'>action,</span> <span
  m='347427'>adventure,</span> <span m='347770'>and</span> <span
  m='348583'>sci-fi</span> <span m='349396'>movies.</span> </p><p><span
  m='350210'>Cluster</span> <span m='350873'>3</span> <span
  m='351537'>has</span> <span m='352201'>the</span> <span
  m='352865'>crime,</span> <span m='353528'>mystery,</span> <span
  m='354192'>thriller</span> <span m='354856'>movies.</span> </p><p><span
  m='355520'>Cluster</span> <span m='356325'>4</span> <span
  m='357130'>exclusively</span> <span m='357935'>has</span> <span
  m='358740'>drama</span> <span m='359545'>movies.</span> </p><p><span
  m='360350'>Cluster</span> <span m='361288'>5,</span> <span
  m='362226'>exclusively</span> <span m='363164'>has</span> <span
  m='364102'>comedies.</span> </p><p><span m='365040'>Cluster</span> <span
  m='365577'>6</span> <span m='366115'>has</span> <span m='366653'>a</span>
  <span m='367191'>lot</span> <span m='367728'>of</span> <span
  m='368266'>the</span> <span m='368804'>romance</span> <span
  m='369342'>movies.</span> </p><p><span m='369880'>Cluster</span> <span
  m='370336'>7</span> <span m='370792'>has</span> <span m='371248'>movies</span>
  <span m='371704'>that</span> <span m='372160'>are</span> <span
  m='372616'>comedies</span> <span m='373072'>and</span> <span
  m='373528'>romance</span> <span m='373984'>movies.</span> </p><p><span
  m='374440'>So</span> <span m='374937'>I'm</span> <span
  m='375434'>calling</span> <span m='375931'>these</span> <span
  m='376428'>the</span> <span m='376925'>romantic</span> <span
  m='377422'>comedies.</span> </p><p><span m='377920'>Cluster</span> <span
  m='378640'>8</span> <span m='379360'>has</span> <span m='380080'>the</span>
  <span m='380800'>documentaries.</span> </p><p><span m='381520'>Cluster</span>
  <span m='381904'>9</span> <span m='382288'>has</span> <span
  m='382672'>the</span> <span m='383056'>movies</span> <span
  m='383440'>that</span> <span m='383824'>are</span> <span
  m='384208'>comedies</span> <span m='384592'>and</span> <span
  m='384976'>dramas,</span> <span m='385360'>so</span> <span
  m='385957'>the</span> <span m='386555'>dramatic</span> <span
  m='387152'>comedies.</span> </p><p><span m='387750'>And</span> <span
  m='388272'>cluster</span> <span m='388795'>10</span> <span
  m='389318'>has</span> <span m='389841'>the</span> <span
  m='390364'>horror</span> <span m='390887'>flicks.</span> </p><p><span
  m='391410'>Knowing</span> <span m='391846'>common</span> <span
  m='392283'>movie</span> <span m='392720'>genres,</span> <span
  m='393156'>these</span> <span m='393593'>cluster</span> <span
  m='394030'>seem</span> <span m='394398'>to</span> <span m='394767'>make</span>
  <span m='395135'>a</span> <span m='395504'>lot</span> <span
  m='395872'>of</span> <span m='396241'>sense.</span> </p><p><span
  m='396610'>So</span> <span m='396956'>now,</span> <span m='397302'>back</span>
  <span m='397648'>in</span> <span m='397995'>our</span> <span
  m='398341'>rconsole,</span> <span m='398687'>let's</span> <span
  m='399033'>see</span> <span m='399380'>how</span> <span
  m='399709'>these</span> <span m='400038'>clusters</span> <span
  m='400367'>could</span> <span m='400696'>be</span> <span
  m='401025'>used</span> <span m='401354'>in</span> <span m='401683'>a</span>
  <span m='402012'>recommendation</span> <span m='402341'>system.</span>
  </p><p><span m='405220'>Remember</span> <span m='405601'>that</span> <span
  m='405982'>Amy</span> <span m='406363'>liked</span> <span
  m='406744'>the</span> <span m='407125'>movie</span> <span
  m='407506'>Men</span> <span m='407887'>in</span> <span
  m='408268'>Black.</span> </p><p><span m='408650'>Let's</span> <span
  m='408966'>figure</span> <span m='409282'>out</span> <span
  m='409598'>what</span> <span m='409914'>cluster</span> <span
  m='410230'>Men</span> <span m='410546'>in</span> <span m='410862'>Black</span>
  <span m='411178'>is</span> <span m='411494'>in.</span> </p><p><span
  m='411810'>We'll</span> <span m='412265'>use</span> <span
  m='412720'>the</span> <span m='413176'>subset</span> <span
  m='413631'>function</span> <span m='414087'>to</span> <span
  m='414542'>take</span> <span m='414998'>a</span> <span
  m='415453'>subset</span> <span m='415909'>of</span> <span
  m='416364'>movies</span> <span m='416820'>and</span> <span
  m='417035'>only</span> <span m='417250'>look</span> <span m='417466'>at</span>
  <span m='417681'>the</span> <span m='417897'>movies</span> <span
  m='418112'>where</span> <span m='418328'>the</span> <span
  m='418543'>Title="Men</span> <span m='418759'>in</span> <span
  m='418974'>Black</span> <span m='419190'>(1997)".</span> </p><p><span
  m='428000'>Close</span> <span m='428408'>the</span> <span
  m='428816'>quotes</span> <span m='429225'>in</span> <span
  m='429633'>the</span> <span m='430041'>parentheses.</span> </p><p><span
  m='430450'>I</span> <span m='430644'>knew</span> <span m='430839'>that</span>
  <span m='431033'>this</span> <span m='431228'>is</span> <span
  m='431422'>the</span> <span m='431617'>title</span> <span m='431811'>of</span>
  <span m='432006'>Men</span> <span m='432200'>in</span> <span
  m='432395'>Black</span> <span m='432590'>because</span> <span
  m='433016'>I</span> <span m='433443'>looked</span> <span m='433870'>it</span>
  <span m='434296'>up</span> <span m='434723'>in</span> <span
  m='435150'>our</span> <span m='435576'>data</span> <span
  m='436003'>set.</span> </p><p><span m='436430'>So</span> <span
  m='436803'>it</span> <span m='437177'>looks</span> <span
  m='437550'>like</span> <span m='437924'>Men</span> <span m='438297'>in</span>
  <span m='438671'>Black</span> <span m='439045'>is</span> <span
  m='439418'>the</span> <span m='439792'>257th</span> <span
  m='440165'>row</span> <span m='440539'>in</span> <span m='440912'>our</span>
  <span m='441286'>data.</span> </p><p><span m='441660'>So</span> <span
  m='442117'>which</span> <span m='442575'>cluster</span> <span
  m='443033'>did</span> <span m='443491'>the</span> <span
  m='443948'>257th</span> <span m='444406'>movie</span> <span
  m='444864'>go</span> <span m='445322'>into?</span> </p><p><span
  m='445780'>We</span> <span m='446118'>can</span> <span
  m='446457'>figure</span> <span m='446796'>this</span> <span
  m='447135'>out</span> <span m='447473'>by</span> <span
  m='447812'>typing</span> <span
  m='448151'>clusterGroupsclusterGroups[257].</span> </p><p><span
  m='454110'>It</span> <span m='454439'>looks</span> <span
  m='454768'>like</span> <span m='455097'>Men</span> <span m='455426'>in</span>
  <span m='455755'>Black</span> <span m='456084'>went</span> <span
  m='456413'>into</span> <span m='456742'>cluster</span> <span
  m='457071'>2.</span> </p><p><span m='457400'>That</span> <span
  m='457638'>make</span> <span m='457877'>sense</span> <span
  m='458115'>since</span> <span m='458354'>we</span> <span
  m='458592'>just</span> <span m='458831'>saw</span> <span
  m='459070'>that</span> <span m='459582'>cluster</span> <span
  m='460094'>2</span> <span m='460606'>is</span> <span m='461118'>the</span>
  <span m='461631'>action,</span> <span m='462143'>adventure,</span> <span
  m='462655'>sci-fi</span> <span m='463167'>cluster.</span> </p><p><span
  m='463680'>So</span> <span m='463925'>let's</span> <span
  m='464171'>create</span> <span m='464416'>a</span> <span m='464662'>new</span>
  <span m='464907'>data</span> <span m='465153'>set</span> <span
  m='465398'>with</span> <span m='465644'>just</span> <span
  m='465890'>the</span> <span m='466274'>movies</span> <span
  m='466658'>from</span> <span m='467042'>cluster</span> <span
  m='467426'>two.</span> </p><p><span m='467810'>We'll</span> <span
  m='468242'>call</span> <span m='468674'>it</span> <span
  m='469106'>cluster</span> <span m='469538'>two,</span> <span
  m='469970'>and</span> <span m='470402'>use</span> <span m='470834'>the</span>
  <span m='471266'>subset</span> <span m='471698'>function</span> <span
  m='472130'>to</span> <span m='472475'>take</span> <span m='472820'>a</span>
  <span m='473165'>subset</span> <span m='473510'>of</span> <span
  m='473855'>movies</span> <span m='474200'>only</span> <span
  m='474545'>taking</span> <span m='474890'>the</span> <span
  m='475316'>observations</span> <span m='475743'>for</span> <span
  m='476170'>which</span> <span m='476596'>clusterGroups</span> <span
  m='477023'>is</span> <span m='477450'>equal</span> <span m='477876'>to</span>
  <span m='478303'>2.</span> </p><p><span m='481250'>Let's</span> <span
  m='481499'>look</span> <span m='481748'>at</span> <span m='481997'>the</span>
  <span m='482246'>first</span> <span m='482495'>10</span> <span
  m='482744'>titles</span> <span m='482993'>in</span> <span
  m='483242'>this</span> <span m='483491'>cluster.</span> </p><p><span
  m='483740'>We</span> <span m='484097'>can</span> <span m='484454'>do</span>
  <span m='484811'>this</span> <span m='485168'>by</span> <span
  m='485525'>typing</span> <span
  m='485882'>cluster2$Titlecluster2$Title[1:10].</span> </p><p><span
  m='492920'>So</span> <span m='493243'>it</span> <span m='493566'>looks</span>
  <span m='493889'>like</span> <span m='494212'>good</span> <span
  m='494535'>movies</span> <span m='494858'>to</span> <span
  m='495181'>recommend</span> <span m='495504'>to</span> <span
  m='495827'>Amy,</span> <span m='496150'>according</span> <span
  m='496608'>to</span> <span m='497066'>our</span> <span
  m='497524'>clustering</span> <span m='497982'>algorithm,</span> <span
  m='498440'>would</span> <span m='499046'>be</span> <span
  m='499653'>movies</span> <span m='500260'>like</span> <span
  m='500866'>Apollo</span> <span m='501473'>13</span> <span
  m='502080'>and</span> <span m='502686'>Jurassic</span> <span
  m='503293'>Park.</span> </p><p><span m='503900'>In</span> <span
  m='504244'>this</span> <span m='504588'>video</span> <span
  m='504932'>we</span> <span m='505277'>saw</span> <span m='505621'>how</span>
  <span m='505965'>clustering</span> <span m='506310'>can</span> <span
  m='506713'>be</span> <span m='507116'>applied</span> <span
  m='507520'>to</span> <span m='507923'>create</span> <span m='508326'>a</span>
  <span m='508730'>movie</span> <span m='509133'>recommendation</span> <span
  m='509536'>system.</span> </p><p><span m='509940'>In</span> <span
  m='510341'>the</span> <span m='510743'>next</span> <span
  m='511145'>video,</span> <span m='511546'>we'll</span> <span
  m='511948'>conclude</span> <span m='512350'>by</span> <span
  m='512700'>learning</span> <span m='513050'>who</span> <span
  m='513400'>ended</span> <span m='513750'>up</span> <span
  m='514100'>winning</span> <span m='514450'>the</span> <span
  m='514800'>million</span> <span m='515150'>dollar</span> <span
  m='515500'>Netflix</span> <span m='515850'>prize.</span> </p>
embedded_media:
  - uid: 2570c84053a27f8ce9f98b82c5cc88dc
    parent_uid: 586e592dafc455b019b27dd6d67ab5bb
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: GPOUGpF-Sno
  - uid: aacde8195ff28cdaeae6bb4b5302d497
    parent_uid: 586e592dafc455b019b27dd6d67ab5bb
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: GPOUGpF-Sno
  - uid: 98c371913024fabbdc1ebc4689a9117f
    parent_uid: 586e592dafc455b019b27dd6d67ab5bb
    id: Thumbnail-YouTube-JPG_1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/GPOUGpF-Sno/default.jpg'
  - uid: 9c4409f8786fc785db68701b7f1edbba
    parent_uid: 586e592dafc455b019b27dd6d67ab5bb
    id: GPOUGpF-Sno.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-7-hierarchical-clustering-in-r/video-7-hierarchical-clustering-in-r-0/GPOUGpF-Sno.srt
  - uid: 8a3d9959e01d608d9601ef7db4cc4769
    parent_uid: 586e592dafc455b019b27dd6d67ab5bb
    id: GPOUGpF-Sno.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/clustering/recommendations-worth-a-million-an-introduction-to-clustering/video-7-hierarchical-clustering-in-r/video-7-hierarchical-clustering-in-r-0/GPOUGpF-Sno.pdf
  - uid: 7e03c64f84a9fd46e4570efaf4174b56
    parent_uid: 586e592dafc455b019b27dd6d67ab5bb
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 08cc81b478499255cdf993381526418a
    parent_uid: 586e592dafc455b019b27dd6d67ab5bb
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 6b7ae2b689bbe45b4ab825ce115b945b
    parent_uid: 586e592dafc455b019b27dd6d67ab5bb
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_6.2.13_300k.mp4
type: courses
layout: video
---
