---
title: 'Lecture 6: Regression Analysis'
uid: 28a7cf993a93a0278ad3de777e055c1e
parent_uid: d23a85587c0c7524ea054e655c999532
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-6-regression-analysis
short_url: lecture-6-regression-analysis
inline_embed_id: '18755284lecture6:regressionanalysis77438795'
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture introduces the mathematical and
  statistical foundations of regression analysis, particularly linear
  regression.</p> <p><strong>Instructor:</strong> Dr. Peter Kempthorne</p>
related_resources_text: ''
transcript: >-
  <p><span m='60'>The</span> <span m='190'>following</span> <span
  m='630'>content</span> <span m='1220'>is</span> <span m='1340'>provided</span>
  <span m='1780'>under</span> <span m='2060'>a</span> <span
  m='2100'>Creative</span> <span m='2500'>Commons</span> <span
  m='2910'>license.</span> <span m='4019'>Your</span> <span
  m='4210'>support</span> <span m='4710'>will</span> <span m='4870'>help</span>
  <span m='5110'>MIT</span> <span m='5570'>OpenCourseWare</span> <span
  m='6360'>continue</span> <span m='6870'>to</span> <span m='6950'>offer</span>
  <span m='7360'>high</span> <span m='7600'>quality</span> <span
  m='8119'>educational</span> <span m='8750'>resources</span> <span
  m='9370'>for</span> <span m='9520'>free.</span> <span m='10730'>To</span>
  <span m='10830'>make</span> <span m='10940'>a</span> <span
  m='10980'>donation</span> <span m='11670'>or</span> <span
  m='11940'>view</span> <span m='12380'>additional</span> <span
  m='12800'>materials</span> <span m='13340'>from</span> <span
  m='13490'>hundreds</span> <span m='13920'>of</span> <span m='14030'>MIT</span>
  <span m='14460'>courses,</span> <span m='15570'>visit</span> <span
  m='15780'>MIT</span> <span m='16210'>OpenCourseWare</span> <span
  m='17260'>at</span> <span m='17420'>ocw.mit.edu.</span> </p><p><span
  m='21490'>PROFESSOR: Today's</span> <span m='21660'>topic</span> <span
  m='22000'>is</span> <span m='22370'>regression</span> <span
  m='23090'>analysis.</span> <span m='24620'>And</span> <span
  m='25700'>this</span> <span m='26100'>subject</span> <span m='27060'>is</span>
  <span m='27300'>one</span> <span m='27670'>that</span> <span
  m='28230'>we're</span> <span m='28950'>going</span> <span m='29060'>to</span>
  <span m='29150'>cover it</span> <span m='29580'>today</span> <span
  m='30240'>covering</span> <span m='30740'>the</span> <span
  m='30920'>mathematical</span> <span m='32290'>and</span> <span
  m='32610'>statistical</span> <span m='33170'>foundations</span> <span
  m='34415'>of</span> <span m='34810'>regression</span> <span
  m='35620'>and</span> <span m='35930'>focus</span> <span
  m='36740'>particularly</span> <span m='37150'>on</span> <span
  m='37390'>linear</span> <span m='37740'>regression.</span> <span
  m='38720'>This</span> <span m='38980'>methodology</span> <span
  m='41080'>is</span> <span m='41830'>perhaps</span> <span m='42420'>the</span>
  <span m='42630'>most</span> <span m='43030'>powerful</span> <span
  m='43740'>method</span> <span m='44840'>in</span> <span
  m='45220'>statistical</span> <span m='45800'>modeling.</span> <span
  m='47630'>And</span> <span m='48060'>the</span> <span
  m='48220'>foundations</span> <span m='49050'>of</span> <span
  m='49210'>it,</span> <span m='49380'>I</span> <span m='49440'>think,</span>
  <span m='49640'>are</span> <span m='49740'>very,</span> <span
  m='50130'>very</span> <span m='50250'>important</span> <span
  m='50740'>to</span> <span m='50800'>understand</span> <span
  m='51460'>and</span> <span m='51550'>master,</span> <span m='52740'>and</span>
  <span m='52850'>they'll</span> <span m='53040'>help</span> <span
  m='53370'>you</span> <span m='54470'>in</span> <span m='54730'>any</span>
  <span m='55150'>kind</span> <span m='55450'>of</span> <span
  m='55560'>statistical</span> <span m='55860'>modeling</span> <span
  m='56320'>exercise</span> <span m='56870'>you</span> <span
  m='57000'>might</span> <span m='58390'>entertain</span> <span
  m='60060'>during</span> <span m='60610'>or</span> <span m='60730'>after</span>
  <span m='61020'>this</span> <span m='61260'>course.</span> </p><p><span
  m='62870'>And</span> <span m='63280'>its</span> <span
  m='63530'>popularity</span> <span m='64769'>in</span> <span
  m='64930'>finance</span> <span m='66340'>is</span> <span
  m='66640'>very,</span> <span m='66970'>very</span> <span
  m='67080'>high,</span> <span m='67320'>but</span> <span m='67470'>it's</span>
  <span m='67610'>also</span> <span m='68330'>a</span> <span
  m='68410'>very</span> <span m='68680'>popular</span> <span
  m='69110'>methodology</span> <span m='70540'>in</span> <span
  m='71210'>all</span> <span m='71500'>other</span> <span
  m='71710'>disciplines</span> <span m='73360'>that do</span> <span
  m='73570'>applied</span> <span m='73990'>statistics.</span> <span
  m='75630'>So</span> <span m='76180'>let's</span> <span m='76480'>begin</span>
  <span m='77360'>with</span> <span m='78240'>setting</span> <span
  m='78630'>up</span> <span m='79730'>the</span> <span m='80710'>multiple</span>
  <span m='81420'>linear</span> <span m='82110'>regression</span> <span
  m='83410'>problem.</span> <span m='84490'>So</span> <span m='85170'>we</span>
  <span m='85410'>begin</span> <span m='85820'>with</span> <span
  m='85960'>a</span> <span m='86080'>data</span> <span m='86390'>set</span>
  <span m='87610'>that</span> <span m='87840'>consists</span> <span
  m='88410'>of</span> <span m='89800'>data</span> <span
  m='90870'>observations</span> <span m='91760'>on</span> <span
  m='92260'>different</span> <span m='92700'>cases,</span> <span
  m='93520'>a</span> <span m='93610'>number</span> <span m='93940'>of</span>
  <span m='94030'>cases.</span> <span m='94640'>So</span> <span
  m='95030'>we</span> <span m='95160'>have</span> <span m='96470'>n</span> <span
  m='96780'>cases</span> <span m='97870'>indexed</span> <span
  m='98340'>by</span> <span m='98590'>i.</span> </p><p><span
  m='100110'>And</span> <span m='100500'>there's</span> <span
  m='101520'>a</span> <span m='101660'>single</span> <span
  m='102050'>variable,</span> <span m='102570'>a</span> <span
  m='102610'>dependent</span> <span m='103280'>variable or</span> <span
  m='103780'>response</span> <span m='104410'>variable,</span> <span
  m='105000'>which</span> <span m='105120'>is</span> <span m='105370'>the</span>
  <span m='105520'>variable</span> <span m='106080'>of</span> <span
  m='106140'>focus.</span> <span m='107970'>And</span> <span
  m='108170'>we'll</span> <span m='108600'>denote </span> <span
  m='108980'>that</span> <span m='109200'>y</span> <span m='109530'>sub</span>
  <span m='109750'>i.</span> <span m='112040'>And</span> <span
  m='113600'>together</span> <span m='114040'>with</span> <span
  m='114330'>that</span> <span m='114560'>for</span> <span
  m='114700'>each</span> <span m='114870'>of</span> <span m='114930'>the</span>
  <span m='115030'>cases,</span> <span m='115550'>there</span> <span
  m='116080'>are</span> <span m='116400'>explanatory</span> <span
  m='117350'>variables</span> <span m='118070'>that we</span> <span
  m='118470'>might</span> <span m='118750'>observe.</span> <span
  m='119640'>So</span> <span m='121040'>the</span> <span m='121790'>yi's,</span>
  <span m='122650'>the</span> <span m='122760'>dependent</span> <span
  m='123280'>variables,</span> <span m='124330'>could</span> <span
  m='124630'>be</span> <span m='125070'>returns</span> <span
  m='125680'>on</span> <span m='125920'>stocks.</span> <span
  m='127670'>The</span> <span m='128410'>explanatory</span> <span
  m='129050'>variables</span> <span m='129620'>could</span> <span
  m='129850'>be</span> <span m='130699'>underlying</span> <span
  m='131260'>characteristics</span> <span m='132160'>of</span> <span
  m='132320'>those</span> <span m='132580'>stocks</span> <span
  m='133730'>over</span> <span m='133940'>a</span> <span m='133980'>given</span>
  <span m='134240'>period.</span> <span m='136410'>The</span> <span
  m='138130'>dependent</span> <span m='138680'>variable</span> <span
  m='139140'>could</span> <span m='139460'>be</span> <span m='140340'>the</span>
  <span m='140680'>change</span> <span m='141090'>in</span> <span
  m='141250'>value</span> <span m='142356'>of</span> <span m='143090'>an</span>
  <span m='143270'>index,</span> <span m='143690'>the</span> <span
  m='144110'>S&amp;P</span> <span m='144590'>500</span> <span
  m='145100'>index</span> <span m='146120'>or</span> <span m='146790'>the</span>
  <span m='146930'>yield</span> <span m='147300'>rate,</span> <span
  m='148360'>and the</span> <span m='148600'>explanatory</span> <span
  m='149330'>variables</span> <span m='149960'>can</span> <span
  m='150220'>be</span> <span m='150540'>various</span> <span
  m='151050'>macroeconomic</span> <span m='151960'>factors</span> <span
  m='152530'>or</span> <span m='152620'>other</span> <span
  m='152780'>factors</span> <span m='153220'>that</span> <span
  m='153390'>might</span> <span m='153630'>be</span> <span
  m='153720'>used</span> <span m='153990'>to</span> <span
  m='154130'>explain</span> <span m='155540'>how</span> <span
  m='156190'>the</span> <span m='156880'>response</span> <span
  m='157460'>variable</span> <span m='158400'>changes</span> <span
  m='159430'>and</span> <span m='159860'>takes on</span> <span
  m='160100'>its</span> <span m='160410'>value.</span> </p><p><span
  m='161510'>Let's</span> <span m='161750'>go</span> <span
  m='161900'>through</span> <span m='162120'>various</span> <span
  m='162500'>goals</span> <span m='162910'>of</span> <span
  m='163510'>regression</span> <span m='163960'>analysis.</span> <span
  m='164880'>OK,</span> <span m='165130'>first</span> <span m='165500'>it</span>
  <span m='165560'>can</span> <span m='165690'>be</span> <span
  m='165930'>to</span> <span m='166600'>extract</span> <span
  m='166945'>or</span> <span m='167290'>exploit</span> <span
  m='167780'>the</span> <span m='167890'>relationship</span> <span
  m='168510'>between</span> <span m='168830'>the</span> <span
  m='168930'>dependent</span> <span m='169400'>variable</span> <span
  m='169790'>and</span> <span m='169900'>the</span> <span
  m='170020'>independent</span> <span m='170550'>variable.</span> <span
  m='171720'>And</span> <span m='172470'>examples</span> <span
  m='173010'>of</span> <span m='173080'>this</span> <span m='173300'>are</span>
  <span m='173760'>prediction.</span> <span m='175010'>Indeed,</span> <span
  m='175370'>in</span> <span m='176020'>finance</span> <span
  m='176530'>that's</span> <span m='176780'>where</span> <span
  m='177290'>I</span> <span m='177830'>used</span> <span
  m='178210'>regression</span> <span m='178690'>analysis</span> <span
  m='179460'>most.</span> <span m='180075'>We</span> <span
  m='180340'>want</span> <span m='180520'>to</span> <span
  m='180570'>predict</span> <span m='181020'>what's</span> <span
  m='181290'>going</span> <span m='181370'>to</span> <span
  m='181420'>happen</span> <span m='182110'>and</span> <span
  m='182500'>take</span> <span m='182740'>actions to</span> <span
  m='183190'>take</span> <span m='183750'>advantage</span> <span
  m='184150'>of</span> <span m='184210'>that.</span> </p><p><span
  m='185230'>One</span> <span m='185430'>can</span> <span m='185590'>also</span>
  <span m='186270'>use</span> <span m='186560'>regression</span> <span
  m='186940'>analysis</span> <span m='187570'>to</span> <span
  m='188250'>talk</span> <span m='188490'>about</span> <span
  m='188720'>causal</span> <span m='189240'>inference.</span> <span
  m='190940'>What</span> <span m='191380'>factors</span> <span
  m='192360'>are</span> <span m='192560'>really</span> <span
  m='192830'>driving</span> <span m='194390'>a</span> <span
  m='194780'>dependent</span> <span m='195270'>variable?</span> <span
  m='196240'>And</span> <span m='196490'>so</span> <span m='197050'>one</span>
  <span m='197290'>can</span> <span m='197800'>actually</span> <span
  m='198280'>test</span> <span m='198700'>hypotheses</span> <span
  m='199570'>about</span> <span m='199880'>what</span> <span
  m='201010'>are</span> <span m='201340'>true</span> <span
  m='201720'>causal</span> <span m='202860'>factors</span> <span
  m='203480'>underlying</span> <span m='203930'>the</span> <span
  m='204040'>relationships</span> <span m='204620'>between</span> <span
  m='204920'>the</span> <span m='204990'>variables.</span> </p><p><span
  m='207250'>Another</span> <span m='207590'>application</span> <span
  m='208370'>is</span> <span m='209430'>for</span> <span m='209690'>just</span>
  <span m='209980'>simple</span> <span m='210370'>approximation.</span> <span
  m='212430'>As</span> <span m='212810'>mathematicians,</span> <span
  m='214240'>you're</span> <span m='214430'>all</span> <span
  m='214630'>very</span> <span m='214870'>familiar</span> <span
  m='215440'>with</span> <span m='215780'>how</span> <span
  m='216830'>smooth</span> <span m='217730'>functions</span> <span
  m='218620'>can</span> <span m='218970'>be</span> <span m='219890'>that</span>
  <span m='220080'>are</span> <span m='220280'>smooth</span> <span
  m='220700'>in</span> <span m='220790'>the</span> <span m='220880'>sense</span>
  <span m='221120'>of</span> <span m='221220'>being</span> <span
  m='221460'>differentiable</span> <span m='222680'>and</span> <span
  m='222840'>bounded.</span> <span m='223250'>Those</span> <span
  m='223520'>can</span> <span m='223660'>be</span> <span
  m='223820'>approximated</span> <span m='224390'>well</span> <span
  m='224650'>by a</span> <span m='224930'>Taylor</span> <span
  m='225310'>series</span> <span m='226790'>if</span> <span
  m='226960'>you</span> <span m='227040'>have</span> <span m='227190'>a</span>
  <span m='227240'>function</span> <span m='227560'>of</span> <span
  m='227640'>a</span> <span m='227690'>single</span> <span
  m='228030'>variable</span> <span m='228460'>or</span> <span
  m='228490'>even</span> <span m='228690'>a</span> <span
  m='228780'>multivariable</span> <span m='231440'>function.</span> <span
  m='233240'>So</span> <span m='234140'>one</span> <span m='234360'>can</span>
  <span m='234510'>use</span> <span m='234760'>regression</span> <span
  m='235240'>analysis</span> <span m='235840'>to</span> <span
  m='236000'>actually</span> <span m='237090'>approximate</span> <span
  m='238270'>functions</span> <span m='239510'>nicely.</span> </p><p><span
  m='240460'>And</span> <span m='241110'>one</span> <span m='241350'>can</span>
  <span m='241500'>also</span> <span m='242020'>use</span> <span
  m='243360'>regression</span> <span m='243780'>analysis</span> <span
  m='244370'>to</span> <span m='245640'>uncover</span> <span
  m='247450'>functional</span> <span m='247890'>relationships</span> <span
  m='248600'>and</span> <span m='249000'>validate</span> <span
  m='249560'>functional</span> <span m='249950'>relationships</span> <span
  m='250740'>amongst</span> <span m='251030'>the</span> <span
  m='251280'>variables.</span> <span m='254270'>So</span> <span
  m='254420'>let's</span> <span m='254710'>set</span> <span m='254880'>up</span>
  <span m='255270'>the</span> <span m='255380'>general</span> <span
  m='255740'>linear</span> <span m='256050'>model</span> <span
  m='257130'>from</span> <span m='257339'>a</span> <span
  m='257430'>mathematical</span> <span m='258260'>standpoint</span> <span
  m='258880'>to</span> <span m='258959'>begin</span> <span
  m='259290'>with.</span> <span m='259570'>In</span> <span
  m='259730'>this</span> <span m='261240'>lecture,</span> <span
  m='262150'>OK,</span> <span m='262340'>we're</span> <span
  m='262470'>going</span> <span m='262560'>to</span> <span
  m='262640'>start</span> <span m='262910'>off</span> <span
  m='263160'>with</span> <span m='266070'>discussing</span> <span
  m='266630'>ordinary</span> <span m='267090'>least</span> <span
  m='267320'>squares,</span> <span m='267950'>which</span> <span
  m='268050'>is</span> <span m='268140'>a</span> <span m='268210'>purely</span>
  <span m='268600'>mathematical</span> <span m='269780'>criterion</span> <span
  m='270510'>for</span> <span m='270840'>how</span> <span m='271070'>you</span>
  <span m='271390'>specify</span> <span m='272090'>regression</span> <span
  m='272610'>models.</span> <span m='273580'>And</span> <span
  m='273710'>then</span> <span m='273810'>we're</span> <span
  m='273920'>going</span> <span m='274130'>to</span> <span
  m='274240'>turn</span> <span m='274680'>to</span> <span m='276280'>the</span>
  <span m='276470'>Gauss</span> <span m='276810'>Markov</span> <span
  m='277340'>theorem</span> <span m='278130'>which</span> <span
  m='278350'>incorporates</span> <span m='279090'>some</span> <span
  m='279260'>statistical</span> <span m='280160'>modeling</span> <span
  m='280700'>principles</span> <span m='281490'>there.</span> <span
  m='282265'>They're</span> <span m='282620'>essentially</span> <span
  m='283090'>weak</span> <span m='283460'>principles.</span> </p><p><span
  m='285170'>And</span> <span m='285420'>then</span> <span m='285900'>we</span>
  <span m='286210'>will</span> <span m='286800'>turn</span> <span
  m='287180'>to</span> <span m='288410'>formal</span> <span
  m='289230'>models</span> <span m='289570'>with</span> <span
  m='289770'>normal</span> <span m='290510'>linear</span> <span
  m='290880'>regression</span> <span m='291330'>models,</span> <span
  m='292160'>and</span> <span m='292350'>then</span> <span
  m='292530'>consider</span> <span m='292940'>extensions</span> <span
  m='293510'>of those</span> <span m='293900'>to</span> <span
  m='295000'>broader</span> <span m='295380'>classes.</span> <span
  m='298250'>Now</span> <span m='298510'>we're</span> <span m='298670'>in</span>
  <span m='298770'>the</span> <span m='298860'>mathematical</span> <span
  m='299520'>context.</span> <span m='300600'>And</span> <span
  m='300990'>a</span> <span m='301590'>linear</span> <span
  m='301930'>model</span> <span m='303110'>is</span> <span
  m='303460'>basically</span> <span m='304620'>attempting</span> <span
  m='305180'>to</span> <span m='305280'>model</span> <span m='305580'>the</span>
  <span m='305690'>conditional</span> <span m='306400'>distribution</span> <span
  m='307460'>of</span> <span m='308110'>the</span> <span
  m='308220'>response</span> <span m='308780'>variable</span> <span
  m='309290'>yi</span> <span m='310390'>given</span> <span m='311030'>the</span>
  <span m='311450'>independent</span> <span m='312020'>variables</span> <span
  m='313300'>xi.</span> </p><p><span m='314580'>And</span> <span
  m='316010'>the</span> <span m='317740'>conditional</span> <span
  m='318500'>distribution</span> <span m='319390'>of</span> <span
  m='319710'>the</span> <span m='319810'>response</span> <span
  m='320400'>variable</span> <span m='321050'>is</span> <span
  m='321320'>modeled</span> <span m='321820'>simply</span> <span
  m='322260'>as</span> <span m='322630'>a</span> <span m='323430'>linear</span>
  <span m='323940'>function</span> <span m='325050'>of</span> <span
  m='325540'>the</span> <span m='325730'>independent</span> <span
  m='326210'>variables.</span> <span m='327230'>So</span> <span
  m='328210'>the</span> <span m='328570'>xi's,</span> <span m='330470'>xi</span>
  <span m='330830'>one</span> <span m='331190'>through</span> <span
  m='331410'>xip,</span> <span m='332880'>are</span> <span m='333040'>the</span>
  <span m='333210'>key</span> <span m='333780'>explanatory</span> <span
  m='334460'>variables</span> <span m='335230'>that</span> <span
  m='335680'>relate</span> <span m='336090'>to</span> <span
  m='336190'>the</span> <span m='336400'>response</span> <span
  m='336850'>variables,</span> <span m='337160'>possibly.</span> <span
  m='338340'>And</span> <span m='339500'>the</span> <span
  m='339680'>beta--</span> <span m='340240'>one</span> <span
  m='340600'>beta,</span> <span m='340940'>two</span> <span
  m='341140'>beta,</span> <span m='341850'>or</span> <span
  m='343570'>beta</span> <span m='343980'>p--</span> <span m='345850'>are</span>
  <span m='346345'>the</span> <span m='347830'>regression</span> <span
  m='348370'>parameters</span> <span m='349240'>which</span> <span
  m='349480'>would</span> <span m='349640'>be</span> <span
  m='349870'>used</span> <span m='350720'>defining</span> <span
  m='351400'>that</span> <span m='351800'>linear</span> <span
  m='351980'>relationship.</span> </p><p><span m='353190'>So</span> <span
  m='355500'>this</span> <span m='355990'>relationship</span> <span
  m='358710'>has</span> <span m='359720'>residuals,</span> <span
  m='361360'>epsilon</span> <span m='361910'>i,</span> <span
  m='363680'>basically</span> <span m='364610'>where</span> <span
  m='364830'>there's</span> <span m='365150'>uncertainty</span> <span
  m='365860'>in</span> <span m='365970'>the</span> <span
  m='366060'>data--</span> <span m='367320'>whether</span> <span
  m='367610'>it's</span> <span m='367730'>either</span> <span
  m='368050'>due</span> <span m='368330'>to a</span> <span
  m='368540'>measurement</span> <span m='369030'>error</span> <span
  m='369370'>or</span> <span m='370580'>modeling</span> <span
  m='371100'>error</span> <span m='371410'>or</span> <span
  m='372620'>underlying</span> <span m='373500'>stochastic</span> <span
  m='373970'>processes</span> <span m='374470'>that are</span> <span
  m='374600'>driving the</span> <span m='374960'>error.</span> <span
  m='375980'>This</span> <span m='376160'>epsilon</span> <span
  m='376640'>i</span> <span m='377160'>is</span> <span m='377620'>a</span> <span
  m='377760'>residual</span> <span m='378170'>error</span> <span
  m='378410'>variable</span> <span m='379340'>that</span> <span
  m='380010'>will</span> <span m='381680'>indicate</span> <span
  m='382240'>how</span> <span m='382880'>this</span> <span
  m='383160'>linear</span> <span m='383470'>relationship</span> <span
  m='384090'>varies</span> <span m='384440'>across</span> <span
  m='384970'>the</span> <span m='385050'>different</span> <span
  m='385350'>n</span> <span m='385590'>cases.</span> </p><p><span
  m='390590'>So</span> <span m='391470'>OK,</span> <span m='392240'>how</span>
  <span m='392470'>broad</span> <span m='392920'>are</span> <span
  m='393040'>the</span> <span m='393130'>models?</span> <span
  m='393520'>Well,</span> <span m='393650'>the</span> <span
  m='393720'>models</span> <span m='394050'>really</span> <span
  m='394330'>are</span> <span m='394640'>very</span> <span
  m='395640'>broad.</span> <span m='398080'>First</span> <span
  m='398330'>of</span> <span m='398410'>all,</span> <span
  m='398570'>polynomial</span> <span m='399170'>approximation</span> <span
  m='400020'>is</span> <span m='400220'>indicated</span> <span
  m='400720'>here.</span> <span m='401505'>It</span> <span
  m='401820'>corresponds,</span> <span m='402590'>essentially,</span> <span
  m='403100'>to</span> <span m='404302'>a</span> <span
  m='404720'>truncated</span> <span m='405300'>Taylor</span> <span
  m='405630'>series</span> <span m='405930'>approximation</span> <span
  m='407050'>to</span> <span m='408250'>a</span> <span
  m='408440'>functional</span> <span m='408860'>form.</span> <span
  m='411730'>With</span> <span m='412770'>variables</span> <span
  m='413350'>that</span> <span m='413780'>exhibit</span> <span
  m='414320'>cyclical</span> <span m='414950'>behavior,</span> <span
  m='416240'>Fourier</span> <span m='417200'>series,</span> <span
  m='418040'>can</span> <span m='418330'>be</span> <span
  m='419950'>applied</span> <span m='420360'>in</span> <span m='420770'>a</span>
  <span m='421060'>linear</span> <span m='421350'>regression</span> <span
  m='421750'>context.</span> </p><p><span m='423200'>How</span> <span
  m='423420'>many</span> <span m='423610'>people</span> <span m='423940'>in
  here</span> <span m='424700'>are</span> <span m='424860'>familiar</span> <span
  m='425200'>with</span> <span m='425320'>Fourier</span> <span
  m='425740'>series?</span> <span m='428580'>Almost</span> <span
  m='428970'>everybody.</span> <span m='429870'>So</span> <span
  m='430530'>Fourier</span> <span m='430900'>series</span> <span
  m='431960'>basically</span> <span m='432800'>provide</span> <span
  m='433530'>a</span> <span m='434190'>set</span> <span m='434560'>of</span>
  <span m='434780'>basis</span> <span m='435230'>functions</span> <span
  m='435670'>that</span> <span m='435750'>allow</span> <span
  m='435990'>you</span> <span m='436160'>to</span> <span
  m='437220'>closely</span> <span m='437650'>approximate</span> <span
  m='438500'>most</span> <span m='438780'>functions.</span> <span
  m='439250'>And</span> <span m='439440'>certainly</span> <span
  m='439760'>with</span> <span m='439970'>bounded</span> <span
  m='440400'>functions</span> <span m='441540'>that</span> <span
  m='441720'>possibly</span> <span m='442090'>have</span> <span
  m='442370'>a</span> <span m='442650'>cyclical</span> <span
  m='443160'>structure</span> <span m='443570'>to</span> <span
  m='443680'>them,</span> <span m='444510'>it</span> <span
  m='444870'>provides</span> <span m='445330'>a</span> <span
  m='445710'>complete</span> <span m='446070'>description.</span> <span
  m='447120'>So</span> <span m='447710'>we</span> <span m='447920'>could</span>
  <span m='448060'>apply</span> <span m='448420'>Fourier</span> <span
  m='448810'>series</span> <span m='449230'>here.</span> </p><p><span
  m='450940'>Finally,</span> <span m='452070'>time</span> <span
  m='452760'>series</span> <span m='453110'>regressions</span> <span
  m='454670'>where</span> <span m='455430'>the</span> <span
  m='455720'>cases</span> <span m='456410'>i</span> <span m='457540'>one</span>
  <span m='457790'>through</span> <span m='458090'>n</span> <span
  m='458640'>are</span> <span m='458830'>really</span> <span
  m='459110'>indexes</span> <span m='459680'>of</span> <span
  m='459760'>different</span> <span m='460090'>time</span> <span
  m='460390'>points</span> <span m='461330'>can</span> <span
  m='461470'>be</span> <span m='461610'>applied.</span> <span
  m='462360'>And</span> <span m='462620'>so</span> <span m='464120'>the</span>
  <span m='464710'>independent</span> <span m='465370'>variables</span> <span
  m='466370'>can</span> <span m='466650'>be</span> <span
  m='466880'>variables</span> <span m='467550'>that</span> <span
  m='467750'>are</span> <span m='468410'>observable</span> <span
  m='469610'>at</span> <span m='469790'>a</span> <span m='469820'>given</span>
  <span m='470130'>time</span> <span m='470430'>point</span> <span
  m='470660'>or</span> <span m='470850'>known</span> <span m='471170'>at</span>
  <span m='471230'>a</span> <span m='471310'>given</span> <span
  m='471530'>time.</span> <span m='471910'>So</span> <span m='472050'>those
  can</span> <span m='472300'>include</span> <span m='472890'>lags</span> <span
  m='473880'>of</span> <span m='474320'>the</span> <span
  m='474410'>response</span> <span m='474970'>variables.</span> <span
  m='475810'>So</span> <span m='477080'>we'll</span> <span m='477350'>see</span>
  <span m='477670'>actually</span> <span m='477980'>when</span> <span
  m='478090'>we</span> <span m='478200'>talk</span> <span
  m='478410'>about</span> <span m='478630'>time</span> <span
  m='478930'>series</span> <span m='480530'>that</span> <span
  m='480800'>there's</span> <span m='481250'>auto</span> <span
  m='481510'>regressive</span> <span m='482260'>time</span> <span
  m='482550'>series</span> <span m='482880'>models</span> <span
  m='484266'>that</span> <span m='484690'>can be</span> <span
  m='484810'>specified.</span> <span m='485870'>And</span> <span
  m='486080'>those</span> <span m='486460'>are</span> <span
  m='488240'>very</span> <span m='488620'>broadly</span> <span
  m='489230'>applied</span> <span m='489680'>in</span> <span
  m='491070'>finance.</span> </p><p><span m='498900'>All</span> <span
  m='499010'>right,</span> <span m='499240'>so</span> <span
  m='500330'>let's</span> <span m='500570'>go</span> <span
  m='500730'>through</span> <span m='501290'>what</span> <span
  m='501490'>the</span> <span m='501580'>steps</span> <span
  m='501960'>are</span> <span m='502190'>for</span> <span
  m='502680'>fitting</span> <span m='503510'>a</span> <span
  m='503870'>regression</span> <span m='504460'>model.</span> <span
  m='507680'>First,</span> <span m='509200'>one</span> <span
  m='509430'>wants</span> <span m='509640'>to</span> <span
  m='509750'>propose</span> <span m='510270'>a</span> <span
  m='510360'>model</span> <span m='511760'>in</span> <span
  m='511850'>terms</span> <span m='512120'>of</span> <span
  m='512600'>what</span> <span m='512880'>is</span> <span m='513070'>it
  that</span> <span m='513230'>we</span> <span m='513490'>have</span> <span
  m='513600'>to</span> <span m='513690'>identify</span> <span
  m='514230'>or</span> <span m='514510'>be</span> <span
  m='514860'>interested</span> <span m='515270'>in</span> <span
  m='515330'>a</span> <span m='515390'>particular</span> <span
  m='515750'>response</span> <span m='516289'>variable.</span> <span
  m='518727'>And</span> <span m='520179'>critical</span> <span
  m='520620'>here</span> <span m='520960'>is</span> <span
  m='521159'>specifying</span> <span m='521870'>the</span> <span
  m='521980'>scale</span> <span m='522934'>of</span> <span
  m='523200'>that</span> <span m='524159'>response</span> <span
  m='524700'>variable.</span> <span m='527010'>Choongbum</span> <span
  m='527400'>was</span> <span m='528380'>discussing</span> <span
  m='529700'>problems</span> <span m='530190'>of</span> <span
  m='530330'>modeling</span> <span m='530900'>stock</span> <span
  m='531280'>prices.</span> <span m='532450'>If,</span> <span
  m='533040'>say,</span> <span m='533450'>y</span> <span m='533900'>is</span>
  <span m='534140'>the</span> <span m='534240'>stock</span> <span
  m='534550'>price?</span> <span m='535030'>Well,</span> <span
  m='535780'>it</span> <span m='535920'>may</span> <span m='536170'>be</span>
  <span m='536470'>that</span> <span m='537400'>it's</span> <span
  m='538250'>more</span> <span m='538700'>appropriate</span> <span
  m='539510'>to</span> <span m='539680'>consider</span> <span
  m='540090'>modeling</span> <span m='540540'>it</span> <span
  m='540650'>on</span> <span m='540840'>a</span> <span
  m='540910'>logarithmic</span> <span m='541720'>scale</span> <span
  m='542560'>than</span> <span m='542750'>on</span> <span m='542920'>a</span>
  <span m='542990'>linear</span> <span m='543380'>scale.</span> </p><p><span
  m='546320'>Who</span> <span m='546460'>can</span> <span m='546590'>tell</span>
  <span m='546790'>me</span> <span m='547070'>why</span> <span
  m='547440'>that</span> <span m='547890'>would</span> <span
  m='548030'>be</span> <span m='548210'>a</span> <span m='548770'>good</span>
  <span m='548980'>idea?</span> </p><p><span m='549780'>AUDIENCE: Because</span>
  <span m='550270'>the</span> <span m='550760'>changes</span> <span
  m='551250'>might</span> <span m='551740'>become</span> <span
  m='552720'>more</span> <span m='553210'>perception of the price</span> <span
  m='553700'>rather than</span> <span m='554190'>absolute changes in</span>
  <span m='554680'>price.</span> </p><p><span m='556650'>PROFESSOR: Very</span>
  <span m='556870'>good,</span> <span m='557160'>yeah.</span> <span
  m='557490'>So</span> <span m='558480'>price</span> <span
  m='558890'>changes</span> <span m='559560'>basically</span> <span
  m='559980'>on</span> <span m='560240'>the</span> <span
  m='560340'>percentage</span> <span m='560860'>scale</span> <span
  m='561540'>which</span> <span m='562040'>log</span> <span
  m='562320'>changes</span> <span m='562710'>would</span> <span
  m='562880'>be</span> <span m='563930'>maybe</span> <span
  m='564890'>much</span> <span m='565120'>better</span> <span
  m='565340'>predicted</span> <span m='565680'>by</span> <span
  m='565820'>knowing</span> <span m='566140'>factors</span> <span
  m='566750'>than</span> <span m='567830'>the</span> <span
  m='567960'>absolute</span> <span m='568400'>price</span> <span
  m='569157'>level.</span> <span m='570410'>OK,</span> <span
  m='570960'>and</span> <span m='572380'>so</span> <span m='574350'>we</span>
  <span m='574480'>have</span> <span m='574630'>to</span> <span
  m='574730'>have</span> <span m='575520'>a</span> <span
  m='575630'>collection</span> <span m='575940'>of</span> <span
  m='576010'>independent</span> <span m='576530'>variables,</span> <span
  m='577970'>which</span> <span m='578470'>to</span> <span
  m='578630'>include</span> <span m='578980'>in</span> <span
  m='579060'>the</span> <span m='579120'>model.</span> <span
  m='580070'>And</span> <span m='580630'>it's</span> <span
  m='580780'>important</span> <span m='581290'>to</span> <span
  m='582140'>think</span> <span m='582320'>about</span> <span
  m='582590'>how</span> <span m='582970'>general</span> <span
  m='583480'>this</span> <span m='583900'>set</span> <span m='584140'>up</span>
  <span m='584290'>is.</span> <span m='584590'>I mean,</span> <span
  m='584800'>the</span> <span m='584870'>independent</span> <span
  m='585480'>variables</span> <span m='586450'>can</span> <span
  m='586650'>be</span> <span m='586810'>functions,</span> <span
  m='587710'>lag</span> <span m='588120'>values</span> <span
  m='588510'>of</span> <span m='588610'>the</span> <span
  m='588690'>response</span> <span m='589210'>variable.</span> <span
  m='590140'>They</span> <span m='590310'>can</span> <span m='590580'>be</span>
  <span m='591020'>different</span> <span m='591460'>functional</span> <span
  m='591850'>forms</span> <span m='592270'>of</span> <span
  m='592380'>other</span> <span m='592580'>independent</span> <span
  m='593030'>variables.</span> </p><p><span m='593670'>So</span> <span
  m='594560'>the</span> <span m='594700'>fact</span> <span
  m='595030'>that</span> <span m='595140'>we're</span> <span
  m='595310'>talking</span> <span m='595650'>about</span> <span
  m='596520'>a</span> <span m='597310'>linear</span> <span
  m='597740'>regression</span> <span m='598280'>model</span> <span
  m='598720'>here</span> <span m='599170'>is</span> <span m='600420'>it's</span>
  <span m='600650'>not</span> <span m='601010'>so</span> <span
  m='601430'>when</span> <span m='601660'>the</span> <span
  m='601750'>team</span> <span m='602040'>in</span> <span
  m='602140'>terms</span> <span m='602390'>of</span> <span m='602490'>the</span>
  <span m='602580'>linearity.</span> <span m='603590'>We</span> <span
  m='603710'>can</span> <span m='603800'>really</span> <span
  m='604030'>capture</span> <span m='604450'>lot</span> <span
  m='604650'>of</span> <span m='605050'>nonlinear</span> <span
  m='605300'>behavior</span> <span m='606050'>in this</span> <span
  m='606340'>framework.</span> <span m='607730'>So</span> <span
  m='607840'>then</span> <span m='608070'>third,</span> <span
  m='608530'>we</span> <span m='608560'>need</span> <span m='609782'>to</span>
  <span m='610210'>address</span> <span m='610650'>the</span> <span
  m='610770'>assumptions</span> <span m='611290'>about</span> <span
  m='611570'>the</span> <span m='611640'>distribution</span> <span
  m='613440'>of</span> <span m='613610'>the</span> <span
  m='613710'>residuals,</span> <span m='614410'>epsilon,</span> <span
  m='615020'>over</span> <span m='615230'>the</span> <span
  m='615320'>cases.</span> <span m='616820'>So</span> <span
  m='618600'>that</span> <span m='618750'>has</span> <span m='618950'>to</span>
  <span m='619020'>be</span> <span m='619130'>specified.</span> </p><p><span
  m='621150'>Once</span> <span m='621490'>we've</span> <span
  m='622220'>set</span> <span m='622550'>up</span> <span m='622720'>the</span>
  <span m='622800'>model</span> <span m='623130'>in</span> <span
  m='623230'>terms</span> <span m='623610'>of</span> <span
  m='624470'>identifying</span> <span m='625640'>the</span> <span
  m='625760'>response</span> <span m='626280'>of</span> <span m='626390'>the
  explanatory</span> <span m='626780'>variables</span> <span m='627160'>and
  the</span> <span m='627300'>assumptions</span> <span
  m='628010'>underlying</span> <span m='629075'>the</span> <span
  m='629420'>distribution</span> <span m='629700'>of</span> <span
  m='629980'>the</span> <span m='630080'>residuals,</span> <span
  m='631930'>we</span> <span m='631980'>need</span> <span m='632140'>to</span>
  <span m='632210'>specify</span> <span m='633390'>a</span> <span
  m='633510'>criterion</span> <span m='634400'>for</span> <span
  m='634630'>judging</span> <span m='635080'>different</span> <span
  m='635420'>estimators.</span> <span m='636550'>So</span> <span
  m='637270'>given</span> <span m='638370'>a</span> <span
  m='638480'>particular</span> <span m='639050'>setup,</span> <span
  m='639830'>what</span> <span m='639990'>we</span> <span m='640090'>want</span>
  <span m='640330'>to</span> <span m='640420'>do</span> <span
  m='640840'>is</span> <span m='641250'>be</span> <span m='641490'>able</span>
  <span m='641660'>to</span> <span m='642350'>define</span> <span
  m='644250'>a</span> <span m='644660'>methodology</span> <span
  m='645570'>for</span> <span m='647260'>specifying</span> <span
  m='648000'>the</span> <span m='648100'>regression</span> <span
  m='648570'>parameters</span> <span m='649940'>so</span> <span m='650170'>that
  we</span> <span m='650260'>can</span> <span m='650370'>then</span> <span
  m='650580'>use</span> <span m='650940'>this</span> <span
  m='651380'>regression</span> <span m='651880'>model</span> <span
  m='652250'>for</span> <span m='652910'>prediction</span> <span
  m='654010'>or</span> <span m='654920'>whatever</span> <span
  m='655205'>our</span> <span m='655490'>purpose</span> <span
  m='655825'>is.</span> </p><p><span m='656670'>So</span> <span
  m='659560'>the</span> <span m='659730'>second</span> <span
  m='660060'>thing</span> <span m='660180'>we</span> <span
  m='660260'>want</span> <span m='660440'>to</span> <span m='660500'>do</span>
  <span m='660700'>is</span> <span m='661470'>define</span> <span
  m='661890'>a</span> <span m='661960'>criterion</span> <span
  m='662630'>for</span> <span m='662760'>how</span> <span m='662960'>we</span>
  <span m='663120'>might</span> <span m='663460'>judge</span> <span
  m='663870'>different</span> <span m='664690'>estimators</span> <span
  m='665350'>of</span> <span m='665680'>the</span> <span
  m='666380'>progression</span> <span m='666880'>parameters.</span> <span
  m='669090'>We're</span> <span m='669670'>going</span> <span
  m='669770'>to</span> <span m='669830'>go</span> <span
  m='669990'>through</span> <span m='670490'>several</span> <span
  m='670820'>of</span> <span m='670900'>those.</span> <span m='671210'>And
  you'll</span> <span m='671400'>see</span> <span m='671610'>those--</span>
  <span m='672640'>least</span> <span m='672920'>squares</span> <span
  m='673960'>is</span> <span m='674230'>the</span> <span m='674340'>first</span>
  <span m='674640'>one,</span> <span m='675200'>but</span> <span
  m='675390'>there are</span> <span m='675510'>actually</span> <span
  m='675780'>more</span> <span m='676010'>general</span> <span
  m='676880'>ones.</span> <span m='677210'>In</span> <span
  m='677340'>fact,</span> <span m='677700'>the</span> <span
  m='677780'>last</span> <span m='678100'>section</span> <span
  m='678460'>of</span> <span m='678580'>this</span> <span
  m='678810'>lecture</span> <span m='679290'>on</span> <span
  m='679490'>generalized</span> <span m='680140'>estimators</span> <span
  m='680570'>will</span> <span m='680700'>cover</span> <span
  m='680930'>those</span> <span m='681250'>as</span> <span
  m='681370'>well.</span> </p><p><span m='682930'>Third,</span> <span
  m='683790'>we</span> <span m='683990'>need</span> <span m='684150'>to</span>
  <span m='684220'>characterize</span> <span m='684800'>the</span> <span
  m='684880'>best</span> <span m='685140'>estimator</span> <span
  m='685740'>and</span> <span m='685940'>apply</span> <span m='686290'>it</span>
  <span m='686620'>to</span> <span m='686750'>the</span> <span
  m='686830'>given</span> <span m='687080'>data.</span> <span
  m='687600'>So</span> <span m='688240'>once</span> <span m='688450'>we</span>
  <span m='688620'>choose</span> <span m='689190'>a</span> <span
  m='689300'>criterion</span> <span m='689990'>for</span> <span
  m='690220'>how</span> <span m='690460'>good</span> <span m='691540'>an</span>
  <span m='691700'>estimate of</span> <span m='692100'>regression</span> <span
  m='692480'>parameters</span> <span m='692900'>is,</span> <span
  m='693170'>then</span> <span m='693350'>we</span> <span m='695220'>have</span>
  <span m='695440'>to</span> <span m='695540'>have</span> <span
  m='695670'>a</span> <span m='695870'>technology</span> <span
  m='696520'>for</span> <span m='696670'>solving</span> <span
  m='697080'>for</span> <span m='697200'>that.</span> <span
  m='698060'>And</span> <span m='698260'>then</span> <span
  m='699890'>fourth,</span> <span m='700750'>we</span> <span
  m='701000'>need</span> <span m='701210'>to</span> <span
  m='701300'>check</span> <span m='701580'>our</span> <span
  m='701720'>assumptions.</span> </p><p><span m='703030'>Now,</span> <span
  m='704730'>it's</span> <span m='705020'>very</span> <span
  m='705310'>often</span> <span m='705590'>the</span> <span
  m='705670'>case</span> <span m='706170'>that</span> <span m='707340'>at</span>
  <span m='707770'>this</span> <span m='708010'>fourth</span> <span
  m='708270'>step,</span> <span m='708630'>where</span> <span
  m='708770'>you're</span> <span m='708910'>checking</span> <span
  m='709250'>the</span> <span m='709380'>assumptions</span> <span
  m='709695'>that</span> <span m='710010'>you've</span> <span
  m='710240'>made,</span> <span m='711160'>you'll</span> <span
  m='711430'>discover</span> <span m='712380'>features</span> <span
  m='712820'>of</span> <span m='713020'>your</span> <span m='713160'>data</span>
  <span m='714440'>or</span> <span m='714610'>the</span> <span
  m='714720'>process</span> <span m='715370'>that it's</span> <span
  m='715680'>modeling</span> <span m='716210'>that</span> <span
  m='717130'>make</span> <span m='717460'>you</span> <span
  m='718200'>want</span> <span m='718550'>to</span> <span
  m='718750'>expand</span> <span m='719260'>upon</span> <span
  m='719560'>your</span> <span m='719680'>assumptions</span> <span
  m='720130'>or</span> <span m='720220'>change</span> <span
  m='720510'>your</span> <span m='720800'>assumptions.</span> <span
  m='721520'>And</span> <span m='721620'>so</span> <span
  m='722660'>checking</span> <span m='722970'>the</span> <span
  m='723070'>assumptions</span> <span m='723960'>is</span> <span
  m='725000'>a</span> <span m='725360'>critical</span> <span
  m='725740'>part</span> <span m='726410'>of</span> <span m='726560'>any</span>
  <span m='726640'>modeling</span> <span m='727110'>process.</span> <span
  m='728170'>And</span> <span m='728390'>then</span> <span m='728590'>if</span>
  <span m='728750'>necessary,</span> <span m='729960'>modify</span> <span
  m='730480'>the</span> <span m='730600'>model</span> <span
  m='731120'>and</span> <span m='731230'>assumptions</span> <span
  m='731830'>and</span> <span m='732500'>repeat</span> <span
  m='732900'>this</span> <span m='733070'>process.</span> </p><p><span
  m='735260'>What</span> <span m='735660'>I</span> <span m='735720'>can</span>
  <span m='735890'>tell</span> <span m='736120'>you</span> <span
  m='736310'>is</span> <span m='736620'>that</span> <span m='736980'>this</span>
  <span m='738440'>sort</span> <span m='738660'>of</span> <span
  m='739030'>protocol</span> <span m='739800'>for</span> <span
  m='739930'>how</span> <span m='740430'>you</span> <span m='740540'>fit</span>
  <span m='740810'>models</span> <span m='741280'>is</span> <span
  m='742980'>what</span> <span m='744520'>I've</span> <span
  m='744620'>applied</span> <span m='745580'>many,</span> <span
  m='745940'>many</span> <span m='746070'>times.</span> <span
  m='746680'>And</span> <span m='747520'>if</span> <span m='747710'>you</span>
  <span m='747970'>are</span> <span m='748420'>lucky</span> <span
  m='749170'>in</span> <span m='749310'>a</span> <span
  m='749390'>particular</span> <span m='750410'>problem</span> <span
  m='750870'>area,</span> <span m='751870'>the</span> <span
  m='751990'>very</span> <span m='752210'>simple</span> <span
  m='752550'>models</span> <span m='752960'>will</span> <span
  m='753160'>work</span> <span m='753400'>well</span> <span
  m='754430'>with</span> <span m='755490'>small</span> <span
  m='755870'>changes</span> <span m='756280'>in</span> <span
  m='756350'>assumptions.</span> <span m='757340'>But</span> <span
  m='757580'>when</span> <span m='757750'>you</span> <span m='757840'>get</span>
  <span m='758040'>challenging</span> <span m='758540'>problems,</span> <span
  m='759450'>then</span> <span m='761480'>this</span> <span
  m='761680'>item</span> <span m='761910'>five</span> <span m='762660'>of</span>
  <span m='763010'>modify</span> <span m='763480'>the</span> <span
  m='763590'>model</span> <span m='763900'>and/or</span> <span
  m='764110'>assumptions</span> <span m='764890'>is</span> <span
  m='765770'>critical.</span> </p><p><span m='766300'>And</span> <span
  m='767440'>in</span> <span m='767610'>statistical</span> <span
  m='768200'>modeling,</span> <span m='769750'>my</span> <span
  m='770200'>philosophy</span> <span m='770790'>is</span> <span
  m='770910'>you</span> <span m='771060'>really</span> <span
  m='771300'>want</span> <span m='771690'>to,</span> <span m='772260'>as</span>
  <span m='772360'>much</span> <span m='772580'>as</span> <span
  m='772680'>possible,</span> <span m='773340'>tailor</span> <span
  m='773750'>the</span> <span m='773850'>model</span> <span m='774270'>to</span>
  <span m='774480'>the</span> <span m='774620'>process</span> <span
  m='775050'>you're modeling.</span> <span m='775390'>You</span> <span
  m='775540'>don't</span> <span m='775730'>want</span> <span
  m='776000'>to</span> <span m='777310'>fit</span> <span m='777590'>a</span>
  <span m='777650'>square</span> <span m='778020'>peg in a</span> <span
  m='778390'>round</span> <span m='778680'>hole</span> <span m='779070'>and
  just</span> <span m='779290'>apply,</span> <span m='779790'>say,</span> <span
  m='780110'>simple</span> <span m='780400'>linear</span> <span
  m='780700'>regression</span> <span m='781200'>to</span> <span
  m='781300'>everything.</span> <span m='782510'>You</span> <span
  m='782710'>want</span> <span m='783040'>to</span> <span
  m='783280'>apply</span> <span m='783740'>it</span> <span
  m='784600'>when</span> <span m='784770'>the</span> <span
  m='784860'>assumptions</span> <span m='785400'>are</span> <span
  m='785480'>valid.</span> <span m='786340'>If</span> <span
  m='786630'>the</span> <span m='786700'>assumptions</span> <span
  m='787110'>aren't</span> <span m='787220'>valid,</span> <span
  m='787600'>maybe</span> <span m='787810'>you</span> <span
  m='787940'>can</span> <span m='788950'>change</span> <span
  m='789310'>the</span> <span m='789720'>specification</span> <span
  m='790035'>of</span> <span m='790350'>the</span> <span
  m='790420'>problem</span> <span m='790680'>so</span> <span m='790980'>a</span>
  <span m='791090'>linear</span> <span m='791360'>model</span> <span
  m='791660'>is</span> <span m='792160'>still</span> <span
  m='792460'>applicable</span> <span m='793360'>in</span> <span
  m='793580'>a</span> <span m='793770'>changed</span> <span
  m='794890'>framework.</span> </p><p><span m='796060'>But</span> <span
  m='796260'>if</span> <span m='796420'>not,</span> <span m='796790'>then</span>
  <span m='796970'>you'll</span> <span m='797140'>want</span> <span
  m='797450'>to</span> <span m='797720'>extend</span> <span m='798530'>to</span>
  <span m='798950'>other</span> <span m='799190'>kinds</span> <span
  m='799460'>of</span> <span m='799570'>models.</span> <span
  m='800250'>But</span> <span m='800560'>what</span> <span
  m='800850'>we'll</span> <span m='801010'>be</span> <span
  m='801170'>doing--</span> <span m='801790'>or</span> <span
  m='801900'>what</span> <span m='802120'>you</span> <span
  m='802260'>will</span> <span m='802380'>be</span> <span
  m='802510'>doing</span> <span m='802850'>if</span> <span m='802940'>you</span>
  <span m='803060'>do</span> <span m='803220'>that--</span> <span
  m='803550'>is</span> <span m='804050'>basically</span> <span
  m='804340'>applying</span> <span m='804680'>all</span> <span
  m='805200'>the</span> <span m='805370'>same</span> <span
  m='805720'>principles</span> <span m='806390'>that</span> <span
  m='806690'>are</span> <span m='807620'>developed</span> <span
  m='808120'>in</span> <span m='808260'>the</span> <span
  m='808960'>linear</span> <span m='809550'>modeling</span> <span
  m='809980'>framework.</span> <span m='815750'>OK,</span> <span
  m='817130'>now</span> <span m='817610'>let's</span> <span
  m='818250'>see.</span> <span m='818320'>I</span> <span
  m='818340'>wanted</span> <span m='818490'>to</span> <span
  m='818550'>make</span> <span m='818770'>some</span> <span
  m='818930'>comments</span> <span m='819500'>here</span> <span
  m='819860'>about</span> <span m='821480'>specifying</span> <span
  m='822210'>assumptions</span> <span m='822750'>for</span> <span
  m='822850'>the</span> <span m='822990'>residual</span> <span
  m='823510'>distribution.</span> </p><p><span m='827600'>What</span> <span
  m='827740'>kind</span> <span m='827880'>of</span> <span
  m='827970'>assumptions</span> <span m='828600'>might</span> <span
  m='828890'>we</span> <span m='829180'>make?</span> <span m='829620'>OK,</span>
  <span m='829740'>would</span> <span m='829860'>anyone</span> <span
  m='830120'>like</span> <span m='830330'>to</span> <span
  m='830440'>suggest</span> <span m='831310'>some</span> <span
  m='831510'>assumptions</span> <span m='832840'>you</span> <span
  m='833120'>might</span> <span m='833420'>make</span> <span m='834245'>in
  a</span> <span m='834710'>linear</span> <span m='835175'>regression</span>
  <span m='835640'>model</span> <span m='836105'>for</span> <span
  m='836570'>the</span> <span m='837035'>residuals?</span> <span
  m='838310'>Yes?</span> <span m='838980'>What's</span> <span
  m='839340'>your</span> <span m='839460'>name,</span> <span m='839660'>by the
  way?</span> </p><p><span m='840006'>AUDIENCE: My name</span> <span
  m='840352'>is Will.</span> </p><p><span m='840700'>PROFESSOR: Will,</span>
  <span m='840910'>OK.</span> <span m='841370'>Will</span> <span
  m='841590'>what?</span> </p><p><span m='842455'>[? AUDIENCE: Ossler. ?]</span>
  </p><p><span m='842900'>PROFESSOR: [? Ossler, ?]</span> <span
  m='843300'>great.</span> <span m='843460'>OK, thank</span> <span
  m='843840'>you,</span> <span m='844020'>Will.</span> </p><p><span
  m='844910'>AUDIENCE: It</span> <span m='845070'>might</span> <span
  m='845260'>be--</span> <span m='846010'>or</span> <span m='846210'>we</span>
  <span m='846340'>might want</span> <span m='846620'>to</span> <span
  m='846750'>say</span> <span m='846910'>that the</span> <span
  m='847370'>residual</span> <span m='847950'>might</span> <span
  m='848170'>be</span> <span m='848830'>normally</span> <span
  m='849200'>distributed</span> <span m='850000'>and</span> <span
  m='850110'>it</span> <span m='850220'>might</span> <span m='850560'>not</span>
  <span m='850990'>depend</span> <span m='851280'>too</span> <span
  m='851430'>much</span> <span m='852710'>on</span> <span m='853160'>what</span>
  <span m='853410'>value</span> <span m='853830'>of</span> <span m='857132'>the
  input</span> <span m='857598'>variable</span> <span m='858064'>we'd</span>
  <span m='858530'>use.</span> </p><p><span m='859000'>PROFESSOR: OK.</span>
  <span m='860540'>Anyone</span> <span m='860710'>else?</span> <span
  m='863870'>OK.</span> <span m='864310'>Well,</span> <span
  m='865030'>that</span> <span m='865380'>certainly</span> <span
  m='865800'>is</span> <span m='867000'>an</span> <span
  m='867100'>excellent</span> <span m='867620'>place</span> <span
  m='867930'>to</span> <span m='868030'>start</span> <span m='868970'>in</span>
  <span m='869150'>terms</span> <span m='869510'>of</span> <span
  m='869760'>starting</span> <span m='870270'>with</span> <span
  m='871300'>a</span> <span m='871400'>distribution</span> <span
  m='872110'>that's</span> <span m='873510'>familiar.</span> <span
  m='875590'>Familiar</span> <span m='875800'>is</span> <span
  m='875870'>always</span> <span m='876120'>good.</span> <span
  m='876390'>Although</span> <span m='876560'>it's</span> <span
  m='876680'>not</span> <span m='877130'>something that</span> <span
  m='877520'>should</span> <span m='877690'>be</span> <span
  m='877790'>necessary,</span> <span m='878370'>but</span> <span
  m='878830'>we</span> <span m='879080'>know</span> <span m='879440'>from</span>
  <span m='880270'>some of</span> <span m='880540'>Choongbum's</span> <span
  m='881510'>lecture</span> <span m='883610'>areas</span> <span
  m='884210'>that</span> <span m='884900'>Gaussian</span> <span
  m='885170'>and</span> <span m='885440'>normal</span> <span
  m='885770'>distributions</span> <span m='886470'>arise</span> <span
  m='887800'>in</span> <span m='887950'>many</span> <span
  m='888200'>settings</span> <span m='888670'>where</span> <span
  m='889410'>we're</span> <span m='889670'>taking</span> <span
  m='890700'>basically</span> <span m='891100'>sums</span> <span
  m='891640'>of</span> <span m='892280'>independent,</span> <span
  m='892940'>random</span> <span m='893210'>variables.</span> <span
  m='893900'>And</span> <span m='894220'>so</span> <span m='894430'>it</span>
  <span m='894500'>may</span> <span m='894640'>be</span> <span
  m='894790'>that</span> <span m='894940'>these</span> <span
  m='895110'>residuals</span> <span m='895740'>are</span> <span
  m='895840'>like</span> <span m='896110'>that.</span> </p><p><span
  m='898180'>Anyway,</span> <span m='899350'>a</span> <span
  m='901080'>slightly</span> <span m='901690'>simpler</span> <span
  m='902590'>or</span> <span m='903540'>weaker</span> <span
  m='904410'>condition</span> <span m='904910'>is</span> <span
  m='905210'>to</span> <span m='906490'>use</span> <span m='907460'>the</span>
  <span m='907970'>Gauss--</span> <span m='908900'>what</span> <span
  m='909140'>are</span> <span m='909230'>called</span> <span
  m='909670'>in</span> <span m='909940'>statistics the</span> <span
  m='910280'>Gauss</span> <span m='910650'>Markov</span> <span
  m='910950'>assumptions.</span> <span m='912400'>And</span> <span
  m='912600'>these</span> <span m='912880'>are</span> <span
  m='913410'>assumptions</span> <span m='913880'>where</span> <span
  m='914120'>we're</span> <span m='914290'>only</span> <span
  m='915340'>concerned</span> <span m='915900'>with</span> <span
  m='916200'>the</span> <span m='916280'>means</span> <span m='918230'>or</span>
  <span m='918470'>averages,</span> <span m='919370'>statistically,</span> <span
  m='920390'>and</span> <span m='920820'>the</span> <span
  m='921020'>variances</span> <span m='921960'>of</span> <span
  m='922290'>the</span> <span m='922420'>residuals.</span> <span
  m='923210'>And</span> <span m='923360'>so</span> <span m='923530'>we</span>
  <span m='923630'>assume</span> <span m='923950'>that</span> <span
  m='924120'>there's</span> <span m='924440'>zero</span> <span
  m='924760'>mean.</span> <span m='926160'>So</span> <span m='926340'>on</span>
  <span m='926500'>average,</span> <span m='926930'>they're</span> <span
  m='927050'>not</span> <span m='927350'>adding</span> <span m='928680'>a</span>
  <span m='928740'>bias</span> <span m='929210'>up</span> <span
  m='929360'>or</span> <span m='929440'>down</span> <span m='930230'>to</span>
  <span m='930450'>the</span> <span m='930860'>dependent</span> <span
  m='931680'>variable.</span> </p><p><span m='932580'>And</span> <span
  m='933950'>those</span> <span m='934260'>have</span> <span m='934450'>a</span>
  <span m='934550'>constant</span> <span m='935250'>variance.</span> <span
  m='936920'>So</span> <span m='937960'>the</span> <span m='938150'>level</span>
  <span m='938530'>of</span> <span m='938640'>uncertainty</span> <span
  m='939530'>in</span> <span m='939730'>our</span> <span m='939880'>model</span>
  <span m='940830'>doesn't</span> <span m='941120'>depend</span> <span
  m='941500'>on</span> <span m='941640'>the</span> <span m='941730'>case.</span>
  <span m='943210'>And</span> <span m='943660'>so</span> <span
  m='944800'>indeed,</span> <span m='945470'>if</span> <span
  m='946170'>errors</span> <span m='946670'>on</span> <span
  m='946780'>the</span> <span m='946860'>percentage</span> <span
  m='947290'>scale</span> <span m='947660'>are more</span> <span
  m='947870'>appropriate,</span> <span m='948450'>then</span> <span
  m='949520'>one</span> <span m='949750'>could</span> <span
  m='950240'>look</span> <span m='950520'>at,</span> <span
  m='950740'>say,</span> <span m='951250'>a</span> <span m='951730'>time</span>
  <span m='952040'>series</span> <span m='952350'>of</span> <span
  m='952450'>prices</span> <span m='952910'>that</span> <span
  m='953040'>you're</span> <span m='953170'>trying</span> <span
  m='953450'>to</span> <span m='953510'>model.</span> <span m='953970'>And
  it</span> <span m='954260'>may</span> <span m='954430'>be</span> <span
  m='955120'>that</span> <span m='955550'>on</span> <span m='955690'>the</span>
  <span m='955770'>log</span> <span m='956110'>scale,</span> <span
  m='956970'>that</span> <span m='957170'>constant</span> <span
  m='957660'>variance</span> <span m='958020'>looks</span> <span
  m='958250'>much</span> <span m='958490'>more</span> <span
  m='958670'>appropriate</span> <span m='959160'>than</span> <span
  m='959435'>on</span> <span m='959710'>the</span> <span
  m='959790'>original</span> <span m='960160'>scale,</span> <span
  m='960440'>which</span> <span m='960845'>would</span> <span
  m='961250'>happen.</span> </p><p><span m='962180'>And</span> <span
  m='962370'>then</span> <span m='962580'>a</span> <span m='963420'>third</span>
  <span m='964600'>attribute</span> <span m='964915'>of the</span> <span
  m='965230'>Gauss</span> <span m='965670'>Markov</span> <span
  m='966120'>assumptions</span> <span m='966660'>is</span> <span
  m='967320'>that</span> <span m='967570'>the</span> <span
  m='967780'>residuals</span> <span m='968350'>are</span> <span
  m='968570'>uncorrelated.</span> <span m='970740'>So</span> <span
  m='972860'>now</span> <span m='973070'>uncorrelated</span> <span
  m='974690'>does</span> <span m='974940'>not</span> <span
  m='975270'>mean</span> <span m='975900'>independent</span> <span
  m='976770'>or</span> <span m='976870'>statistically</span> <span
  m='977540'>independent.</span> <span m='978210'>So</span> <span
  m='978360'>this</span> <span m='978590'>is</span> <span m='978790'>a</span>
  <span m='978880'>somewhat</span> <span m='979320'>weak</span> <span
  m='979760'>condition,</span> <span m='980350'>or</span> <span
  m='980470'>weaker</span> <span m='980940'>condition,</span> <span
  m='981470'>than</span> <span m='981640'>independence</span> <span
  m='981995'>of the</span> <span m='982350'>residuals.</span> <span
  m='984326'>But</span> <span m='984820'>in</span> <span m='984970'>the</span>
  <span m='985060'>Gauss</span> <span m='985350'>Markov</span> <span
  m='985720'>setting,</span> <span m='986130'>we're</span> <span
  m='986280'>just</span> <span m='986480'>setting</span> <span
  m='986760'>up</span> <span m='988650'>basically</span> <span
  m='989000'>a</span> <span m='989070'>reduced</span> <span
  m='989460'>set</span> <span m='989650'>of</span> <span
  m='989720'>assumptions</span> <span m='990170'>that</span> <span
  m='990270'>we</span> <span m='990390'>might</span> <span
  m='990800'>apply</span> <span m='991210'>to</span> <span m='991360'>fit
  the</span> <span m='991810'>model.</span> </p><p><span m='993610'>If</span>
  <span m='993810'>we</span> <span m='994130'>extend</span> <span
  m='994690'>upon</span> <span m='995040'>that,</span> <span
  m='995900'>we</span> <span m='996130'>can</span> <span m='996280'>then</span>
  <span m='996620'>consider</span> <span m='997520'>normal</span> <span
  m='998040'>linear</span> <span m='998390'>regression</span> <span
  m='998890'>models,</span> <span m='1000040'>which</span> <span
  m='1001470'>Will</span> <span m='1002050'>just</span> <span
  m='1002940'>suggested.</span> <span m='1004050'>And</span> <span
  m='1004280'>in</span> <span m='1004390'>this</span> <span
  m='1004600'>case,</span> <span m='1006290'>those</span> <span
  m='1006810'>could</span> <span m='1006960'>be</span> <span
  m='1007100'>assumed</span> <span m='1007500'>to</span> <span
  m='1007580'>be</span> <span m='1008140'>independent</span> <span
  m='1008930'>and</span> <span m='1009080'>identically</span> <span
  m='1009540'>distributed--</span> <span m='1010110'>IID</span> <span
  m='1010440'>is</span> <span m='1011110'>that</span> <span
  m='1011430'>notation</span> <span m='1012170'>for</span> <span
  m='1012230'>that--</span> <span m='1013150'>with</span> <span
  m='1014490'>Gaussian</span> <span m='1014820'>or</span> <span
  m='1015140'>normal.</span> <span m='1015680'>With</span> <span
  m='1015830'>mean</span> <span m='1016100'>0</span> <span
  m='1016380'>and</span> <span m='1016510'>variance</span> <span
  m='1016870'>sigma</span> <span m='1017130'>squared.</span> <span
  m='1020590'>We</span> <span m='1020740'>can</span> <span
  m='1020850'>extend</span> <span m='1021380'>upon</span> <span
  m='1021720'>that</span> <span m='1022270'>to</span> <span
  m='1022600'>consider</span> <span m='1023050'>generalized</span> <span
  m='1023790'>Gauss</span> <span m='1024069'>Markov</span> <span
  m='1024520'>assumptions</span> <span m='1025980'>where</span> <span
  m='1026430'>we</span> <span m='1026619'>maintain</span> <span
  m='1027140'>still</span> <span m='1027440'>the</span> <span
  m='1027500'>0</span> <span m='1027859'>mean</span> <span
  m='1028220'>for</span> <span m='1028349'>the</span> <span
  m='1028460'>residuals,</span> <span m='1029750'>but</span> <span
  m='1030450'>the</span> <span m='1030619'>general--</span> <span
  m='1031329'>we</span> <span m='1031589'>might</span> <span
  m='1031829'>have</span> <span m='1032130'>a</span> <span
  m='1032670'>covariance</span> <span m='1033400'>matrix</span> <span
  m='1034599'>which</span> <span m='1035990'>does</span> <span
  m='1036190'>not</span> <span m='1036380'>correspond</span> <span
  m='1037040'>to</span> <span m='1037230'>independent</span> <span
  m='1037890'>and</span> <span m='1038010'>identically</span> <span
  m='1038560'>distributed</span> <span m='1039089'>random</span> <span
  m='1039400'>variables.</span> </p><p><span m='1040680'>Now,</span> <span
  m='1041400'>let's</span> <span m='1041569'>see.</span> <span
  m='1041760'>In</span> <span m='1042020'>the</span> <span
  m='1042380'>discussion</span> <span m='1043349'>of</span> <span
  m='1043440'>probability</span> <span m='1044040'>theory,</span> <span
  m='1045000'>we</span> <span m='1045180'>really</span> <span
  m='1045480'>haven't</span> <span m='1045869'>talked</span> <span
  m='1046940'>yet</span> <span m='1047430'>about</span> <span
  m='1047950'>matrix</span> <span m='1048500'>valued</span> <span
  m='1049030'>random</span> <span m='1049400'>variables,</span> <span
  m='1050130'>right?</span> <span m='1051490'>But</span> <span
  m='1052590'>how</span> <span m='1052710'>many</span> <span
  m='1052900'>people</span> <span m='1053180'>in</span> <span
  m='1053220'>the</span> <span m='1053290'>class</span> <span
  m='1053680'>have</span> <span m='1054360'>covered</span> <span
  m='1054800'>matrix</span> <span m='1055270'>value</span> <span
  m='1055920'>or</span> <span m='1056040'>vector</span> <span
  m='1056430'>valued</span> <span m='1056780'>random</span> <span
  m='1057110'>variables</span> <span m='1057380'>before?</span> <span
  m='1059660'>OK,</span> <span m='1060000'>just</span> <span
  m='1060200'>a</span> <span m='1060250'>handful.</span> </p><p><span
  m='1061120'>Well,</span> <span m='1062210'>a</span> <span
  m='1062660'>vector</span> <span m='1063240'>valued</span> <span
  m='1064290'>random</span> <span m='1064770'>variable,</span> <span
  m='1067290'>we</span> <span m='1067370'>think</span> <span
  m='1067660'>of</span> <span m='1068580'>the</span> <span
  m='1068760'>values</span> <span m='1069720'>of</span> <span
  m='1069930'>these</span> <span m='1070270'>n</span> <span
  m='1071090'>cases</span> <span m='1071740'>for</span> <span
  m='1071870'>the</span> <span m='1072010'>dependent</span> <span
  m='1072640'>variable</span> <span m='1073700'>to</span> <span
  m='1073840'>be</span> <span m='1074020'>an</span> <span m='1074130'>n</span>
  <span m='1074510'>valued</span> <span m='1075320'>and n</span> <span
  m='1075750'>vector</span> <span m='1077200'>of</span> <span
  m='1078210'>random</span> <span m='1078620'>variables.</span> <span
  m='1079950'>And</span> <span m='1080230'>so</span> <span m='1080840'>we</span>
  <span m='1081060'>can</span> <span m='1081590'>generalize</span> <span
  m='1082950'>the</span> <span m='1083570'>variance</span> <span
  m='1085600'>of</span> <span m='1086360'>individual</span> <span
  m='1086920'>random</span> <span m='1087260'>variables</span> <span
  m='1087770'>to</span> <span m='1087880'>the</span> <span
  m='1088000'>variance</span> <span m='1088510'>covariance</span> <span
  m='1089140'>matrix</span> <span m='1090410'>of</span> <span
  m='1090705'>the</span> <span m='1091740'>collection.</span> <span
  m='1092870'>And</span> <span m='1093120'>so</span> <span
  m='1093920'>you</span> <span m='1094110'>have</span> <span
  m='1095300'>a</span> <span m='1095760'>covariance</span> <span
  m='1096430'>matrix</span> <span m='1097590'>characterizing</span> <span
  m='1098490'>the</span> <span m='1098620'>variance</span> <span
  m='1099720'>of</span> <span m='1099940'>the</span> <span m='1100100'>n</span>
  <span m='1100280'>vector</span> <span m='1101270'>which</span> <span
  m='1101950'>gives</span> <span m='1102420'>us</span> <span
  m='1102780'>the--</span> <span m='1105180'>the</span> <span
  m='1105360'>ij</span> <span m='1105930'>element</span> <span
  m='1106650'>gives</span> <span m='1106910'>us</span> <span
  m='1107140'>the</span> <span m='1109400'>value</span> <span
  m='1109810'>of</span> <span m='1109960'>the</span> <span
  m='1111190'>covariance.</span> </p><p><span m='1111640'>All right,</span>
  <span m='1111900'>let</span> <span m='1112150'>me</span> <span
  m='1115910'>put</span> <span m='1116140'>the</span> <span
  m='1116760'>screen</span> <span m='1117230'>up and</span> <span
  m='1117970'>just</span> <span m='1118130'>write</span> <span m='1118330'>that
  on</span> <span m='1118710'>the board</span> <span m='1119040'>so that</span>
  <span m='1119150'>you're</span> <span m='1120258'>familiar</span> <span
  m='1120736'>with that.</span> <span m='1129820'>All</span> <span
  m='1129950'>right,</span> <span m='1130130'>so</span> <span
  m='1130310'>we</span> <span m='1130410'>have</span> <span
  m='1135240'>y1,</span> <span m='1136610'>y2</span> <span
  m='1137040'>down</span> <span m='1137330'>to</span> <span
  m='1137630'>yn,</span> <span m='1138270'>our</span> <span m='1139570'>m</span>
  <span m='1139900'>values</span> <span m='1140430'>of</span> <span
  m='1140550'>our</span> <span m='1141360'>response</span> <span
  m='1141890'>variable.</span> <span m='1143070'>And</span> <span
  m='1146560'>we</span> <span m='1146770'>can</span> <span
  m='1148290'>basically</span> <span m='1148800'>talk</span> <span
  m='1149070'>about</span> <span m='1149340'>the</span> <span
  m='1149450'>expectation</span> <span m='1150755'>of</span> <span
  m='1151010'>that</span> <span m='1152430'>being</span> <span
  m='1153060'>equal</span> <span m='1153510'>to</span> <span
  m='1155740'>mu</span> <span m='1156030'>1,</span> <span m='1156650'>mu</span>
  <span m='1157055'>2,</span> <span m='1157460'>down</span> <span
  m='1157700'>to</span> <span m='1157850'>mu</span> <span m='1158303'>n.</span>
  </p><p><span m='1161021'>And</span> <span m='1167380'>the</span> <span
  m='1167860'>covariance</span> <span m='1168510'>matrix</span> <span
  m='1169680'>of</span> <span m='1173070'>y1,</span> <span
  m='1174170'>y2,</span> <span m='1174450'>down to</span> <span
  m='1174790'>yn</span> <span m='1178270'>is</span> <span
  m='1178370'>equal</span> <span m='1178690'>to</span> <span
  m='1180390'>a</span> <span m='1180540'>matrix</span> <span
  m='1182140'>with</span> <span m='1183200'>the</span> <span
  m='1183320'>variance</span> <span m='1184290'>of</span> <span
  m='1184430'>y1</span> <span m='1186060'>in</span> <span m='1186230'>the</span>
  <span m='1186380'>upper</span> <span m='1187460'>1,</span> <span
  m='1187760'>1</span> <span m='1187990'>element,</span> <span
  m='1189410'>and</span> <span m='1189500'>the</span> <span
  m='1189620'>variance</span> <span m='1191080'>of</span> <span
  m='1191240'>y2</span> <span m='1192700'>in</span> <span m='1192880'>the</span>
  <span m='1193020'>2,</span> <span m='1193280'>2</span> <span
  m='1193540'>element,</span> <span m='1198410'>and</span> <span
  m='1198760'>the</span> <span m='1198820'>variance</span> <span
  m='1199580'>of</span> <span m='1199750'>yn</span> <span m='1201940'>in</span>
  <span m='1202090'>the</span> <span m='1202330'>nth</span> <span
  m='1203910'>column</span> <span m='1204360'>and nth</span> <span
  m='1204760'>row.</span> <span m='1205890'>And</span> <span
  m='1206740'>in</span> <span m='1206940'>the</span> <span m='1207100'>i</span>
  <span m='1207450'>j-th</span> <span m='1207780'>row,</span> <span
  m='1209230'>ij,</span> <span m='1212790'>we</span> <span
  m='1212920'>have</span> <span m='1213060'>the</span> <span
  m='1213170'>covariance</span> <span m='1213870'>between</span> <span
  m='1215080'>yi</span> <span m='1215610'>and</span> <span
  m='1216020'>yj.</span> </p><p><span m='1218550'>So</span> <span
  m='1219770'>we're</span> <span m='1219920'>going</span> <span
  m='1220010'>to</span> <span m='1220070'>use</span> <span
  m='1221200'>matrices</span> <span m='1221990'>to</span> <span
  m='1222130'>represent</span> <span m='1222650'>covariances.</span> <span
  m='1224070'>And</span> <span m='1224330'>that's</span> <span
  m='1224550'>something</span> <span m='1224880'>which</span> <span
  m='1225830'>I</span> <span m='1225970'>want</span> <span
  m='1226310'>everyone</span> <span m='1226670'>to</span> <span
  m='1226730'>get</span> <span m='1226910'>very</span> <span
  m='1227130'>familiar</span> <span m='1227490'>with</span> <span
  m='1228050'>because</span> <span m='1228680'>we're</span> <span
  m='1228900'>going</span> <span m='1229190'>to assume that</span> <span
  m='1229520'>we</span> <span m='1230230'>are</span> <span
  m='1230460'>comfortable</span> <span m='1230715'>with those,</span> <span
  m='1231750'>and</span> <span m='1232140'>apply</span> <span
  m='1232490'>matrix</span> <span m='1232990'>algebra</span> <span
  m='1233690'>with</span> <span m='1233920'>these</span> <span
  m='1234540'>kinds</span> <span m='1234970'>of</span> <span
  m='1235710'>constructs.</span> <span m='1238470'>So</span> <span
  m='1238610'>the</span> <span m='1238750'>generalized</span> <span
  m='1239190'>Gauss</span> <span m='1239440'>Markov</span> <span
  m='1240440'>theorem</span> <span m='1241300'>assumes</span> <span
  m='1242230'>a</span> <span m='1242550'>general</span> <span
  m='1242960'>covariance</span> <span m='1243490'>matrix</span> <span
  m='1243960'>where</span> <span m='1244900'>you</span> <span
  m='1245060'>can</span> <span m='1245220'>have</span> <span
  m='1247850'>nonzero</span> <span m='1248890'>covariances</span> <span
  m='1250400'>between</span> <span m='1250970'>the</span> <span
  m='1251110'>independent</span> <span m='1251600'>variables</span> <span
  m='1252260'>or</span> <span m='1252380'>the</span> <span
  m='1252520'>dependent</span> <span m='1252950'>variables and the</span> <span
  m='1253330'>residuals.</span> <span m='1254440'>And</span> <span
  m='1257320'>those</span> <span m='1257610'>can</span> <span
  m='1257700'>be</span> <span m='1257810'>correlated.</span> </p><p><span
  m='1258450'>Now,</span> <span m='1260060'>who</span> <span
  m='1260340'>can</span> <span m='1262000'>come</span> <span
  m='1262230'>up</span> <span m='1262340'>with</span> <span
  m='1262450'>an</span> <span m='1262530'>example</span> <span
  m='1263160'>of</span> <span m='1263430'>why</span> <span
  m='1265030'>the</span> <span m='1265210'>residuals</span> <span
  m='1266100'>might</span> <span m='1266370'>be</span> <span
  m='1266520'>correlated</span> <span m='1268180'>in</span> <span
  m='1270605'>a</span> <span m='1271000'>regression</span> <span
  m='1271510'>model?</span> <span m='1275134'>Dan?</span> <span
  m='1276490'>OK.</span> <span m='1277390'>That's</span> <span
  m='1278180'>a</span> <span m='1278300'>really</span> <span
  m='1278530'>good</span> <span m='1278680'>example</span> <span
  m='1279380'>because</span> <span m='1279810'>it's</span> <span
  m='1279980'>nonlinear.</span> <span m='1281100'>If</span> <span
  m='1281220'>you</span> <span m='1281370'>imagine</span> <span
  m='1282090'>sort</span> <span m='1282240'>of</span> <span m='1282330'>a</span>
  <span m='1282400'>simple</span> <span m='1283720'>nonlinear</span> <span
  m='1284350'>curve</span> <span m='1284720'>and</span> <span
  m='1284780'>you</span> <span m='1284880'>try</span> <span
  m='1285060'>to</span> <span m='1285160'>fit</span> <span m='1285390'>a</span>
  <span m='1285460'>straight</span> <span m='1285800'>line</span> <span
  m='1286130'>to</span> <span m='1286340'>it,</span> <span
  m='1287070'>then</span> <span m='1288110'>the</span> <span
  m='1288320'>residuals</span> <span m='1290660'>from</span> <span
  m='1290960'>that</span> <span m='1291220'>linear</span> <span
  m='1291580'>fit</span> <span m='1292080'>are going</span> <span m='1292450'>to
  be</span> <span m='1292910'>consistently</span> <span m='1293620'>above</span>
  <span m='1293970'>or</span> <span m='1294070'>below</span> <span
  m='1294440'>the</span> <span m='1294560'>line</span> <span
  m='1295100'>depending</span> <span m='1295510'>on</span> <span
  m='1295640'>where</span> <span m='1295860'>you</span> <span
  m='1296040'>are</span> <span m='1296260'>in</span> <span
  m='1296370'>the</span> <span m='1296440'>nonlinearity</span> <span
  m='1297230'>how</span> <span m='1297630'>it might</span> <span
  m='1297850'>be</span> <span m='1297980'>fitting.</span> <span
  m='1298820'>So</span> <span m='1298930'>that's</span> <span
  m='1299150'>one</span> <span m='1299390'>example</span> <span
  m='1299850'>where</span> <span m='1300000'>that</span> <span
  m='1300240'>could</span> <span m='1300360'>arise.</span> <span
  m='1302410'>Any</span> <span m='1302620'>other</span> <span
  m='1303160'>possibilities?</span> </p><p><span m='1306090'>Well,</span> <span
  m='1306850'>next</span> <span m='1307190'>week</span> <span
  m='1308330'>we'll</span> <span m='1308530'>be</span> <span
  m='1308680'>talking</span> <span m='1308930'>about</span> <span
  m='1309120'>some</span> <span m='1309250'>time</span> <span
  m='1309560'>series</span> <span m='1309880'>models.</span> <span
  m='1310380'>And</span> <span m='1310510'>there</span> <span
  m='1310650'>can</span> <span m='1310790'>be</span> <span
  m='1311510'>time</span> <span m='1312170'>dependence</span> <span
  m='1313240'>amongst</span> <span m='1313870'>variables</span> <span
  m='1314650'>where</span> <span m='1314840'>there</span> <span
  m='1315110'>are</span> <span m='1315330'>some</span> <span
  m='1315610'>underlying</span> <span m='1316220'>factors</span> <span
  m='1316920'>maybe</span> <span m='1317170'>that are</span> <span
  m='1317380'>driving</span> <span m='1317850'>the</span> <span
  m='1317950'>process.</span> <span m='1318850'>And</span> <span
  m='1319140'>those</span> <span m='1319770'>ongoing</span> <span
  m='1320060'>factors</span> <span m='1320940'>can</span> <span
  m='1321170'>persist</span> <span m='1322030'>in</span> <span
  m='1323090'>making</span> <span m='1323470'>the</span> <span
  m='1323620'>linear</span> <span m='1323950'>relationship</span> <span
  m='1325480'>over</span> <span m='1325960'>or</span> <span
  m='1326220'>under</span> <span m='1329180'>gauge</span> <span
  m='1329700'>the</span> <span m='1329950'>dependent</span> <span
  m='1330400'>variable.</span> <span m='1331300'>So</span> <span
  m='1331460'>that</span> <span m='1331750'>can</span> <span
  m='1332080'>happen</span> <span m='1332335'>as</span> <span
  m='1332590'>well.</span> </p><p><span m='1333850'>All</span> <span
  m='1333960'>right,</span> <span m='1336230'>yes?</span> </p><p><span
  m='1337410'>AUDIENCE: The Gauss</span> <span m='1337880'>Markov</span> <span
  m='1338350'>is just</span> <span m='1338820'>the diagonal case?</span>
  </p><p><span m='1340230'>PROFESSOR: Yes,</span> <span m='1340700'>the</span>
  <span m='1340720'>Gauss</span> <span m='1340970'>Markov is</span> <span
  m='1341300'>simply</span> <span m='1341560'>the</span> <span
  m='1341690'>diagonal</span> <span m='1342120'>case.</span> <span
  m='1342490'>And</span> <span m='1343210'>explicitly</span> <span
  m='1343940'>if</span> <span m='1344070'>we</span> <span
  m='1344210'>replace</span> <span m='1344700'>y's</span> <span
  m='1345310'>here</span> <span m='1345550'>by</span> <span
  m='1345830'>the</span> <span m='1346340'>residuals,</span> <span
  m='1347090'>epsilon,</span> <span m='1348010'>one</span> <span
  m='1348240'>through</span> <span m='1348610'>epsilon</span> <span
  m='1349000'>n,</span> <span m='1350280'>then</span> <span
  m='1350780'>that</span> <span m='1351160'>diagonal</span> <span
  m='1352470'>matrix</span> <span m='1353200'>with a</span> <span
  m='1355780'>constant</span> <span m='1356280'>diagonal</span> <span
  m='1356930'>is</span> <span m='1357170'>the</span> <span
  m='1357960'>simple</span> <span m='1358290'>Gauss</span> <span
  m='1358610'>Markov</span> <span m='1358930'>assumption,</span> <span
  m='1361475'>yeah.</span> <span m='1365270'>Now,</span> <span
  m='1367620'>I'm</span> <span m='1367760'>sure it</span> <span
  m='1367960'>comes</span> <span m='1368180'>as</span> <span
  m='1368310'>no</span> <span m='1368450'>surprise</span> <span
  m='1368920'>that</span> <span m='1369300'>Gaussian</span> <span
  m='1369710'>distributions</span> <span m='1370240'>don't</span> <span
  m='1370400'>always</span> <span m='1370690'>fit</span> <span
  m='1370850'>everything.</span> <span m='1371450'>And</span> <span
  m='1371690'>so</span> <span m='1372760'>one</span> <span
  m='1373000'>needs</span> <span m='1373200'>to</span> <span
  m='1373280'>get</span> <span m='1373450'>clever</span> <span
  m='1374090'>with</span> <span m='1374460'>extending</span> <span
  m='1375350'>the</span> <span m='1376680'>models</span> <span
  m='1377240'>to</span> <span m='1380760'>other</span> <span
  m='1381060'>cases.</span> </p><p><span m='1381560'>And</span> <span
  m='1382070'>there</span> <span m='1382551'>are--</span> <span m='1384960'>I
  know--</span> <span m='1385370'>Laplace</span> <span
  m='1385830'>distributions,</span> <span m='1386780'>Pareto</span> <span
  m='1387280'>distributions,</span> <span m='1387920'>contaminated</span> <span
  m='1388600'>normal</span> <span m='1388990'>distributions,</span> <span
  m='1389760'>which</span> <span m='1389940'>can</span> <span
  m='1390060'>be</span> <span m='1390150'>used</span> <span
  m='1390590'>to</span> <span m='1391990'>fit</span> <span
  m='1393000'>regression</span> <span m='1393510'>models.</span> <span
  m='1394000'>And</span> <span m='1395890'>these</span> <span
  m='1396500'>general</span> <span m='1397140'>cases</span> <span
  m='1397710'>really</span> <span m='1400960'>extend</span> <span
  m='1401500'>the</span> <span m='1401590'>applicability</span> <span
  m='1402330'>of</span> <span m='1402590'>regression</span> <span
  m='1403100'>models</span> <span m='1403450'>to</span> <span
  m='1404180'>many</span> <span m='1404470'>interesting</span> <span
  m='1406090'>settings.</span> <span m='1408610'>So</span> <span
  m='1409120'>let's</span> <span m='1411320'>turn</span> <span
  m='1411620'>to</span> <span m='1411840'>specify</span> <span
  m='1413260'>the</span> <span m='1414000'>estimator</span> <span
  m='1414510'>criterion</span> <span m='1414825'>in two.</span> </p><p><span
  m='1415530'>So</span> <span m='1415650'>how</span> <span m='1415810'>do</span>
  <span m='1415890'>we</span> <span m='1416050'>judge</span> <span
  m='1416410'>what's</span> <span m='1416670'>a</span> <span
  m='1416730'>good</span> <span m='1417250'>estimate</span> <span
  m='1417670'>of</span> <span m='1417890'>the</span> <span
  m='1418710'>regression</span> <span m='1419590'>parameters?</span> <span
  m='1420580'>Well,</span> <span m='1421720'>we're</span> <span
  m='1421900'>going</span> <span m='1422190'>to</span> <span
  m='1422270'>cover</span> <span m='1422560'>least</span> <span
  m='1422800'>squares,</span> <span m='1423480'>maximum</span> <span
  m='1424020'>likelihood,</span> <span m='1425390'>robust</span> <span
  m='1426890'>methods,</span> <span m='1427950'>which</span> <span
  m='1428050'>are</span> <span m='1428150'>contamination</span> <span
  m='1429570'>resistant.</span> <span m='1430990'>And</span> <span
  m='1432490'>other</span> <span m='1432730'>methods</span> <span
  m='1433090'>exist</span> <span m='1433650'>that</span> <span
  m='1433960'>we</span> <span m='1434270'>will</span> <span
  m='1434990'>mention</span> <span m='1435470'>but</span> <span
  m='1436340'>not</span> <span m='1436620'>get</span> <span
  m='1436750'>into</span> <span m='1437010'>really in the</span> <span
  m='1437320'>lectures</span> <span m='1437595'>are</span> <span
  m='1437870'>Bayes</span> <span m='1438530'>methods</span> <span
  m='1439640'>and</span> <span m='1439900'>accommodating</span> <span
  m='1440355'>incomplete</span> <span m='1440810'>or</span> <span
  m='1441060'>missing</span> <span m='1441440'>data.</span> </p><p><span
  m='1443390'>Essentially,</span> <span m='1443930'>as</span> <span
  m='1445990'>your</span> <span m='1446190'>approach</span> <span
  m='1446630'>to</span> <span m='1447340'>modeling</span> <span
  m='1447730'>a</span> <span m='1447790'>problem</span> <span
  m='1448150'>gets</span> <span m='1448420'>more</span> <span
  m='1448640'>and</span> <span m='1448710'>more</span> <span
  m='1448980'>realistic,</span> <span m='1450040'>you</span> <span
  m='1450120'>start</span> <span m='1450400'>adding</span> <span
  m='1450990'>more</span> <span m='1451260'>and</span> <span
  m='1451330'>more</span> <span m='1452240'>complexity</span> <span
  m='1453080'>as it's</span> <span m='1453770'>needed.</span> <span
  m='1454580'>And</span> <span m='1455630'>certainly</span> <span
  m='1457720'>issues</span> <span m='1458230'>of--</span> <span
  m='1460030'>well,</span> <span m='1460580'>robust</span> <span
  m='1462320'>methods</span> <span m='1464450'>is</span> <span
  m='1464670'>where</span> <span m='1465370'>you</span> <span
  m='1465550'>assume</span> <span m='1465940'>most</span> <span
  m='1466270'>of</span> <span m='1466360'>the</span> <span
  m='1466440'>data</span> <span m='1466920'>arrives</span> <span
  m='1467330'>under</span> <span m='1467530'>normal</span> <span
  m='1467840'>conditions,</span> <span m='1468290'>but</span> <span
  m='1468460'>once in</span> <span m='1468640'>a</span> <span m='1468790'>while
  there</span> <span m='1468990'>may be</span> <span m='1469450'>some</span>
  <span m='1470050'>problem</span> <span m='1470305'>with the</span> <span
  m='1470560'>data.</span> <span m='1471710'>And</span> <span
  m='1472790'>you</span> <span m='1472940'>don't</span> <span
  m='1473180'>want</span> <span m='1473340'>your</span> <span
  m='1473460'>methodology</span> <span m='1474160'>just</span> <span
  m='1474390'>to</span> <span m='1474450'>break</span> <span
  m='1474710'>down</span> <span m='1475290'>if</span> <span
  m='1475730'>there</span> <span m='1475860'>happens</span> <span
  m='1476750'>to</span> <span m='1476830'>be</span> <span
  m='1477030'>some</span> <span m='1478620'>outliers</span> <span
  m='1479260'>in</span> <span m='1479310'>the</span> <span m='1479490'>data
  or</span> <span m='1479780'>contamination.</span> </p><p><span
  m='1481090'>Bayes</span> <span m='1481800'>methodologies</span> <span
  m='1484040'>are</span> <span m='1486510'>the</span> <span
  m='1486650'>technology</span> <span m='1487200'>for</span> <span
  m='1487310'>incorporating</span> <span m='1488190'>subjective</span> <span
  m='1489310'>beliefs</span> <span m='1490300'>into</span> <span
  m='1492920'>statistical</span> <span m='1493460'>models.</span> <span
  m='1494310'>And</span> <span m='1495320'>I</span> <span
  m='1495480'>think</span> <span m='1495640'>it's</span> <span
  m='1495830'>fair</span> <span m='1496080'>to</span> <span
  m='1496170'>say</span> <span m='1496440'>that</span> <span
  m='1496870'>probably</span> <span m='1497190'>all</span> <span
  m='1497650'>statistical</span> <span m='1498170'>modeling</span> <span
  m='1499580'>is</span> <span m='1500130'>essentially</span> <span
  m='1500610'>subjective.</span> <span m='1501720'>And</span> <span
  m='1501950'>so</span> <span m='1502260'>if</span> <span
  m='1502430'>you're</span> <span m='1502620'>going</span> <span
  m='1502920'>to</span> <span m='1503050'>be</span> <span
  m='1504190'>good</span> <span m='1504800'>at</span> <span
  m='1504990'>statistical</span> <span m='1505320'>modeling,</span> <span
  m='1505820'>you</span> <span m='1505940'>want</span> <span
  m='1506220'>to</span> <span m='1506310'>be</span> <span
  m='1506440'>sure</span> <span m='1506750'>that</span> <span
  m='1506940'>you're</span> <span m='1507370'>effectively</span> <span
  m='1507990'>incorporating</span> <span m='1508830'>subjective</span> <span
  m='1509350'>information</span> <span m='1509710'>in that.</span> <span
  m='1510070'>And so</span> <span m='1510490'>Bayes</span> <span
  m='1510900'>methodologies</span> <span m='1512260'>are</span> <span
  m='1512390'>very,</span> <span m='1512720'>very</span> <span
  m='1512820'>useful,</span> <span m='1513400'>and</span> <span
  m='1513720'>indeed</span> <span m='1514730'>pretty</span> <span
  m='1514920'>much</span> <span m='1515080'>required</span> <span
  m='1515710'>to</span> <span m='1515960'>engage</span> <span
  m='1516460'>in</span> <span m='1517230'>appropriate</span> <span
  m='1517870'>modeling.</span> </p><p><span m='1519610'>And</span> <span
  m='1519670'>then</span> <span m='1519820'>finally,</span> <span
  m='1520290'>accommodate</span> <span m='1520680'>incomplete</span> <span
  m='1521270'>or</span> <span m='1521330'>missing</span> <span
  m='1521700'>data.</span> <span m='1522700'>The</span> <span
  m='1522860'>world</span> <span m='1523180'>is</span> <span
  m='1523480'>always</span> <span m='1524400'>sort</span> <span
  m='1524570'>of</span> <span m='1525240'>cruel</span> <span
  m='1525720'>in</span> <span m='1525830'>terms</span> <span
  m='1526210'>of</span> <span m='1526635'>you</span> <span
  m='1526920'>often</span> <span m='1527690'>are</span> <span
  m='1528370'>missing</span> <span m='1529400'>what</span> <span
  m='1529570'>you</span> <span m='1529670'>think</span> <span
  m='1529880'>is</span> <span m='1530000'>critical</span> <span
  m='1530340'>information</span> <span m='1530900'>to</span> <span
  m='1530990'>do</span> <span m='1531120'>your</span> <span
  m='1531280'>analysis.</span> <span m='1532060'>And so</span> <span
  m='1532530'>how</span> <span m='1532750'>do</span> <span
  m='1532820'>you</span> <span m='1533150'>deal</span> <span
  m='1533530'>with</span> <span m='1533940'>situations</span> <span
  m='1534520'>where</span> <span m='1535260'>you</span> <span
  m='1535390'>have</span> <span m='1537210'>some</span> <span
  m='1537370'>holes</span> <span m='1537820'>in</span> <span
  m='1537890'>your</span> <span m='1538020'>data?</span> <span
  m='1539680'>Statistical</span> <span m='1540320'>models</span> <span
  m='1540900'>provide</span> <span m='1541670'>good</span> <span
  m='1543490'>methods</span> <span m='1544190'>and</span> <span
  m='1544340'>tools</span> <span m='1544720'>for</span> <span
  m='1545480'>dealing</span> <span m='1545750'>with</span> <span
  m='1545880'>that</span> <span m='1546120'>situation.</span> </p><p><span
  m='1549160'>OK.</span> <span m='1549720'>Then</span> <span
  m='1550580'>let's</span> <span m='1550780'>see.</span> <span
  m='1550960'>In</span> <span m='1551420'>case</span> <span
  m='1551730'>analyses</span> <span m='1553120'>for</span> <span
  m='1553260'>checking</span> <span m='1553610'>assumptions,</span> <span
  m='1555930'>let</span> <span m='1556285'>me</span> <span m='1556640'>go</span>
  <span m='1556830'>through</span> <span m='1557120'>this.</span> <span
  m='1560560'>Basically</span> <span m='1561870'>when</span> <span
  m='1562090'>you</span> <span m='1562250'>fit</span> <span m='1562500'>a</span>
  <span m='1562530'>regression</span> <span m='1563050'>model,</span> <span
  m='1563790'>you</span> <span m='1564460'>check</span> <span
  m='1564730'>assumptions</span> <span m='1565320'>by</span> <span
  m='1565870'>looking</span> <span m='1566250'>at</span> <span
  m='1566500'>the</span> <span m='1566600'>residuals,</span> <span
  m='1567390'>which</span> <span m='1567680'>are</span> <span
  m='1568490'>the</span> <span m='1569530'>basically</span> <span
  m='1570020'>estimates</span> <span m='1570790'>of</span> <span
  m='1571030'>the</span> <span m='1573350'>epsilons,</span> <span
  m='1574662'>the</span> <span m='1575130'>deviations</span> <span
  m='1576330'>of</span> <span m='1576790'>the</span> <span
  m='1578790'>dependent</span> <span m='1579320'>variable</span> <span
  m='1579680'>from</span> <span m='1579950'>their</span> <span
  m='1580130'>predictions.</span> <span m='1582359'>And</span> <span
  m='1583840'>what</span> <span m='1584070'>one</span> <span
  m='1584210'>wants</span> <span m='1584460'>to</span> <span
  m='1584550'>do</span> <span m='1585090'>is</span> <span
  m='1585610'>analyze</span> <span m='1585930'>these</span> <span
  m='1586660'>to</span> <span m='1586960'>determine</span> <span
  m='1587400'>whether</span> <span m='1587750'>our</span> <span
  m='1587990'>assumptions</span> <span m='1588500'>are</span> <span
  m='1588610'>appropriate.</span> </p><p><span m='1589660'>OK,</span> <span
  m='1589860'>but</span> <span m='1590000'>the</span> <span
  m='1590050'>Gauss</span> <span m='1590330'>Markov</span> <span
  m='1590750'>assumptions</span> <span m='1592040'>would</span> <span
  m='1592300'>be,</span> <span m='1593460'>do</span> <span
  m='1593570'>these</span> <span m='1593790'>appear</span> <span
  m='1594050'>to</span> <span m='1594110'>have</span> <span
  m='1594300'>constant</span> <span m='1594880'>variance?</span> <span
  m='1596170'>And</span> <span m='1596310'>it</span> <span
  m='1596400'>may</span> <span m='1596620'>be</span> <span
  m='1596950'>that</span> <span m='1597170'>their</span> <span
  m='1597350'>variance</span> <span m='1597810'>depends</span> <span
  m='1598330'>on</span> <span m='1598770'>time,</span> <span
  m='1600270'>if</span> <span m='1601280'>the</span> <span m='1601530'>i
  is</span> <span m='1601860'>indexing</span> <span m='1602270'>time.</span>
  <span m='1605450'>Residuals</span> <span m='1605950'>might</span> <span
  m='1606230'>depend</span> <span m='1606560'>on</span> <span
  m='1606650'>the</span> <span m='1606700'>other</span> <span
  m='1607150'>variables</span> <span m='1607740'>as</span> <span
  m='1607860'>well,</span> <span m='1608190'>and one</span> <span
  m='1608410'>wants</span> <span m='1608690'>to</span> <span
  m='1610050'>determine</span> <span m='1610700'>that</span> <span
  m='1610940'>that</span> <span m='1611190'>isn't the</span> <span
  m='1611280'>case.</span> <span m='1613610'>There</span> <span
  m='1613760'>are</span> <span m='1613790'>also</span> <span
  m='1614150'>influence</span> <span m='1615120'>diagnostics</span> <span
  m='1616590'>identifying</span> <span m='1617190'>cases</span> <span
  m='1617660'>which</span> <span m='1617850'>are</span> <span
  m='1617910'>highly</span> <span m='1618270'>influential.</span> </p><p><span
  m='1620330'>It</span> <span m='1620490'>turns</span> <span
  m='1620810'>out</span> <span m='1621100'>that</span> <span
  m='1621750'>when</span> <span m='1622920'>you</span> <span
  m='1623870'>are</span> <span m='1624770'>building</span> <span
  m='1625150'>a</span> <span m='1625180'>regression</span> <span
  m='1625620'>model</span> <span m='1625920'>with</span> <span
  m='1626090'>data,</span> <span m='1628350'>you</span> <span
  m='1628510'>treat</span> <span m='1629480'>all</span> <span
  m='1629750'>the</span> <span m='1629840'>cases</span> <span
  m='1630430'>as</span> <span m='1630560'>if</span> <span
  m='1630750'>they're</span> <span m='1631520'>equally</span> <span
  m='1631920'>important.</span> <span m='1632830'>Well,</span> <span
  m='1633390'>it</span> <span m='1633530'>may</span> <span m='1633710'>be</span>
  <span m='1633930'>that</span> <span m='1634100'>certain</span> <span
  m='1634410'>cases</span> <span m='1635390'>are</span> <span
  m='1635630'>really</span> <span m='1635810'>critical</span> <span
  m='1636370'>to</span> <span m='1636600'>estimated</span> <span
  m='1637160'>certain</span> <span m='1637860'>factors.</span> <span
  m='1639540'>And</span> <span m='1640210'>it</span> <span
  m='1640380'>may</span> <span m='1640580'>be</span> <span
  m='1640950'>that</span> <span m='1642220'>much</span> <span
  m='1642640'>of</span> <span m='1642940'>the</span> <span
  m='1643980'>inference</span> <span m='1644560'>about</span> <span
  m='1644880'>how</span> <span m='1645180'>important</span> <span
  m='1645650'>a</span> <span m='1645740'>certain</span> <span
  m='1646060'>factor</span> <span m='1646505'>is</span> <span
  m='1647260'>is</span> <span m='1647410'>determined</span> <span
  m='1647940'>by</span> <span m='1648110'>very</span> <span
  m='1648440'>small</span> <span m='1648800'>number</span> <span
  m='1649160'>of</span> <span m='1649200'>points.</span> <span
  m='1650550'>So</span> <span m='1650690'>even</span> <span
  m='1650920'>though</span> <span m='1651030'>you</span> <span
  m='1651160'>have</span> <span m='1651380'>a</span> <span
  m='1651510'>massive</span> <span m='1652190'>data</span> <span
  m='1652540'>set</span> <span m='1652875'>that</span> <span
  m='1653210'>you're</span> <span m='1653340'>using</span> <span m='1653710'>to
  fit</span> <span m='1653960'>a</span> <span m='1654000'>model,</span> <span
  m='1654265'>it</span> <span m='1654530'>could</span> <span
  m='1654750'>be</span> <span m='1654980'>that</span> <span
  m='1656050'>some</span> <span m='1656260'>of</span> <span
  m='1656330'>the</span> <span m='1656410'>structure</span> <span
  m='1656675'>is</span> <span m='1656940'>driven</span> <span
  m='1657250'>by</span> <span m='1657490'>a</span> <span m='1657550'>very</span>
  <span m='1658070'>small</span> <span m='1658450'>number</span> <span
  m='1658750'>of</span> <span m='1658790'>cases.</span> <span
  m='1659600'>So</span> <span m='1659790'>influence</span> <span
  m='1660250'>diagnostics</span> <span m='1661060'>give</span> <span
  m='1661240'>you</span> <span m='1661510'>a</span> <span m='1661620'>way</span>
  <span m='1662220'>of</span> <span m='1662700'>analyzing</span> <span
  m='1663260'>that.</span> </p><p><span m='1665100'>In</span> <span
  m='1665350'>the</span> <span m='1665490'>problem</span> <span
  m='1665920'>set</span> <span m='1666320'>for</span> <span
  m='1667110'>this</span> <span m='1668300'>lecture,</span> <span
  m='1670730'>you'll</span> <span m='1670850'>be</span> <span
  m='1671040'>deriving</span> <span m='1671740'>some</span> <span
  m='1672070'>influence</span> <span m='1672660'>diagnostics</span> <span
  m='1673470'>for</span> <span m='1673610'>linear</span> <span
  m='1673950'>regression</span> <span m='1674450'>models</span> <span
  m='1674880'>and</span> <span m='1675000'>seeing</span> <span
  m='1675190'>how</span> <span m='1675380'>they're</span> <span
  m='1675510'>mathematically</span> <span m='1676580'>defined.</span> <span
  m='1677790'>And</span> <span m='1678480'>I'll</span> <span
  m='1678620'>be</span> <span m='1679030'>distributing</span> <span
  m='1679590'>a</span> <span m='1680090'>case</span> <span
  m='1680410'>study</span> <span m='1680750'>which</span> <span
  m='1681150'>illustrates</span> <span m='1682390'>fitting</span> <span
  m='1683370'>linear</span> <span m='1683810'>regression</span> <span
  m='1684290'>models</span> <span m='1685180'>for</span> <span
  m='1685370'>asset</span> <span m='1685720'>prices.</span> <span
  m='1686350'>And</span> <span m='1686620'>you</span> <span
  m='1686700'>can</span> <span m='1686860'>see</span> <span
  m='1687060'>how</span> <span m='1687330'>those</span> <span
  m='1689500'>play</span> <span m='1689830'>out</span> <span
  m='1690580'>with</span> <span m='1690870'>some</span> <span
  m='1690990'>practical</span> <span m='1691440'>examples.</span> </p><p><span
  m='1696170'>OK,</span> <span m='1696480'>finally</span> <span
  m='1697040'>there's</span> <span m='1697570'>outlier</span> <span
  m='1698070'>detection.</span> <span m='1701210'>With</span> <span
  m='1701360'>outliers,</span> <span m='1704180'>it's</span> <span
  m='1704930'>interesting.</span> <span m='1705790'>The</span> <span
  m='1707500'>exceptions</span> <span m='1708730'>in</span> <span
  m='1708940'>data</span> <span m='1709760'>are</span> <span
  m='1710000'>often</span> <span m='1710340'>the</span> <span
  m='1710400'>most</span> <span m='1710680'>interesting.</span> <span
  m='1713100'>It's</span> <span m='1713560'>important</span> <span
  m='1714120'>in</span> <span m='1715600'>modeling</span> <span
  m='1715960'>to</span> <span m='1716030'>understand</span> <span
  m='1716560'>whether</span> <span m='1716950'>certain</span> <span
  m='1718090'>cases</span> <span m='1718670'>are</span> <span
  m='1718990'>unusual.</span> <span m='1720700'>And</span> <span
  m='1723530'>sometimes</span> <span m='1724080'>their</span> <span
  m='1724810'>degree</span> <span m='1725220'>of</span> <span
  m='1726120'>idiosyncrasy</span> <span m='1727600'>can</span> <span
  m='1727780'>be</span> <span m='1727930'>explained</span> <span
  m='1728680'>away</span> <span m='1729270'>so</span> <span
  m='1729440'>that</span> <span m='1729580'>one</span> <span
  m='1730100'>essentially</span> <span m='1730580'>discards</span> <span
  m='1731090'>those</span> <span m='1731290'>outliers.</span> <span
  m='1731710'>But</span> <span m='1732680'>other</span> <span
  m='1732950'>times,</span> <span m='1733390'>those</span> <span
  m='1733970'>idiosyncrasies</span> <span m='1734790'>lead</span> <span
  m='1735200'>to</span> <span m='1736020'>extensions</span> <span
  m='1736730'>of</span> <span m='1736880'>the</span> <span
  m='1736950'>model.</span> <span m='1737890'>And</span> <span
  m='1738900'>so</span> <span m='1739470'>outlier</span> <span
  m='1739940'>detection</span> <span m='1741070'>can</span> <span
  m='1741160'>be</span> <span m='1741300'>very</span> <span
  m='1741560'>important</span> <span m='1742820'>for</span> <span
  m='1744010'>validating</span> <span m='1744345'>a</span> <span
  m='1744680'>model.</span> </p><p><span m='1745980'>OK,</span> <span
  m='1746250'>so</span> <span m='1746460'>with that</span> <span
  m='1746670'>introduction</span> <span m='1747330'>to</span> <span
  m='1747730'>regression,</span> <span m='1749740'>linear</span> <span
  m='1750020'>regression,</span> <span m='1750970'>let's</span> <span
  m='1751110'>talk</span> <span m='1751310'>about</span> <span
  m='1751500'>ordinary</span> <span m='1751900'>least</span> <span
  m='1752100'>squares.</span> <span m='1754606'>Ah.</span> <span
  m='1759075'>OK,</span> <span m='1759910'>the</span> <span
  m='1760090'>least</span> <span m='1760330'>squares</span> <span
  m='1760710'>criterion</span> <span m='1762820'>is</span> <span m='1763370'>for
  a</span> <span m='1763590'>given</span> <span m='1763870'>a</span> <span
  m='1763910'>regression</span> <span m='1764360'>parameter,</span> <span
  m='1764820'>beta,</span> <span m='1766040'>which</span> <span
  m='1766340'>is</span> <span m='1766790'>considered</span> <span
  m='1767120'>to</span> <span m='1767450'>be</span> <span m='1768740'>a</span>
  <span m='1768850'>column</span> <span m='1769270'>vector--</span> <span
  m='1770530'>so</span> <span m='1770730'>I'm</span> <span
  m='1770880'>taking</span> <span m='1771100'>the</span> <span
  m='1771210'>transpose</span> <span m='1771850'>of</span> <span
  m='1771960'>a</span> <span m='1772030'>row</span> <span
  m='1772220'>vector.</span> <span m='1775920'>The</span> <span
  m='1776020'>least</span> <span m='1776210'>squares</span> <span
  m='1776570'>criterion</span> <span m='1777450'>is</span> <span
  m='1778420'>to</span> <span m='1779060'>basically</span> <span
  m='1779410'>take</span> <span m='1779610'>the</span> <span
  m='1779710'>sum</span> <span m='1780120'>of</span> <span
  m='1780250'>squared</span> <span m='1780710'>deviations</span> <span
  m='1781390'>from</span> <span m='1781720'>the</span> <span
  m='1781960'>actual</span> <span m='1782840'>value</span> <span
  m='1783170'>of</span> <span m='1783270'>the</span> <span
  m='1783370'>response</span> <span m='1783720'>variable</span> <span
  m='1784030'>from</span> <span m='1784400'>its</span> <span
  m='1784810'>linear</span> <span m='1785260'>prediction.</span> </p><p><span
  m='1786160'>So</span> <span m='1786760'>yi</span> <span
  m='1787080'>minus</span> <span m='1787380'>y</span> <span
  m='1787520'>hat</span> <span m='1787780'>i,</span> <span
  m='1788020'>we're</span> <span m='1788170'>just</span> <span
  m='1788420'>plugging</span> <span m='1788760'>in</span> <span
  m='1788850'>for</span> <span m='1788990'>y</span> <span m='1789160'>hat</span>
  <span m='1789440'>i</span> <span m='1789640'>the</span> <span
  m='1789790'>linear</span> <span m='1790100'>function</span> <span
  m='1790980'>of</span> <span m='1791180'>the</span> <span
  m='1791310'>independent</span> <span m='1791830'>variables</span> <span
  m='1793740'>and</span> <span m='1794190'>the</span> <span
  m='1794630'>squaring</span> <span m='1795130'>that.</span> <span
  m='1798270'>In</span> <span m='1798360'>the</span> <span
  m='1798460'>ordinary</span> <span m='1799060'>least</span> <span
  m='1799310'>squares</span> <span m='1800290'>estimate,</span> <span
  m='1800870'>beta</span> <span m='1801160'>hat,</span> <span
  m='1801570'>minimizes</span> <span m='1802480'>this</span> <span
  m='1803560'>function.</span> <span m='1805490'>So</span> <span
  m='1806780'>in</span> <span m='1806950'>order</span> <span
  m='1807110'>to</span> <span m='1807260'>solve</span> <span
  m='1807730'>for</span> <span m='1807850'>this,</span> <span
  m='1809060'>we're</span> <span m='1809250'>going</span> <span
  m='1809340'>to</span> <span m='1809380'>use</span> <span
  m='1809670'>matrices.</span> <span m='1811520'>And</span> <span
  m='1812860'>so</span> <span m='1813060'>we're</span> <span
  m='1813190'>going</span> <span m='1813300'>to</span> <span
  m='1813380'>take</span> <span m='1813750'>the</span> <span
  m='1813970'>y</span> <span m='1814510'>vector,</span> <span
  m='1815850'>the</span> <span m='1815960'>vector</span> <span
  m='1816430'>of</span> <span m='1816560'>n</span> <span
  m='1816810'>values</span> <span m='1817150'>of</span> <span
  m='1817250'>the</span> <span m='1817340'>dependent</span> <span
  m='1817860'>variable,</span> <span m='1818700'>the</span> <span
  m='1818780'>response</span> <span m='1819290'>variable,</span> <span
  m='1819960'>and</span> <span m='1820170'>x,</span> <span
  m='1820990'>the</span> <span m='1821080'>matrix</span> <span
  m='1821710'>of</span> <span m='1822430'>values</span> <span
  m='1822720'>of</span> <span m='1822800'>the</span> <span
  m='1822890'>independent</span> <span m='1823300'>variable.</span> </p><p><span
  m='1824210'>It's</span> <span m='1824420'>important</span> <span
  m='1824900'>in</span> <span m='1824980'>this</span> <span
  m='1825600'>set</span> <span m='1825880'>up</span> <span m='1826140'>to</span>
  <span m='1827390'>keep</span> <span m='1828250'>straight</span> <span
  m='1828800'>that</span> <span m='1829660'>cases</span> <span
  m='1830220'>go</span> <span m='1830440'>by</span> <span
  m='1830630'>rows</span> <span m='1831910'>and</span> <span
  m='1832500'>columns</span> <span m='1832990'>go</span> <span
  m='1833200'>by</span> <span m='1834140'>values</span> <span
  m='1834440'>of</span> <span m='1834520'>the</span> <span
  m='1834830'>independent</span> <span m='1835100'>variable.</span> <span
  m='1841410'>Boy,</span> <span m='1841600'>this thing</span> <span
  m='1841800'>is</span> <span m='1842090'>ultra</span> <span
  m='1842530'>sensitive.</span> <span m='1844455'>Excuse me.</span> <span
  m='1849405'>Do I turn off the</span> <span m='1849910'>touchpad</span> <span
  m='1850280'>here?</span> <span m='1850650'>OK.</span> <span
  m='1853050'>So</span> <span m='1856370'>we</span> <span m='1856450'>can</span>
  <span m='1856570'>now</span> <span m='1856760'>define</span> <span
  m='1859120'>our</span> <span m='1859930'>fitted</span> <span
  m='1860210'>value,</span> <span m='1860550'>y</span> <span
  m='1860830'>hat,</span> <span m='1861990'>to</span> <span
  m='1862250'>be</span> <span m='1862500'>equal</span> <span
  m='1862820'>to</span> <span m='1863110'>the</span> <span
  m='1863250'>matrix</span> <span m='1863820'>x</span> <span
  m='1864310'>times</span> <span m='1864670'>beta.</span> </p><p><span
  m='1866330'>And</span> <span m='1866480'>with</span> <span
  m='1866650'>matrix</span> <span m='1867060'>multiplication,</span> <span
  m='1868050'>that</span> <span m='1868710'>results</span> <span
  m='1869170'>in</span> <span m='1869950'>the</span> <span m='1870320'>y</span>
  <span m='1870530'>hat</span> <span m='1870740'>1</span> <span
  m='1870940'>through</span> <span m='1871150'>y hat</span> <span
  m='1871380'>n.</span> <span m='1873350'>And</span> <span m='1873640'>q
  of</span> <span m='1873980'>beta</span> <span m='1875260'>can</span> <span
  m='1875410'>basically</span> <span m='1876010'>be</span> <span
  m='1876700'>written</span> <span m='1877340'>as</span> <span
  m='1878450'>y</span> <span m='1878810'>minus</span> <span m='1879170'>x</span>
  <span m='1879440'>beta</span> <span m='1880800'>transposed</span> <span
  m='1881820'>y</span> <span m='1882020'>minus</span> <span m='1882330'>x</span>
  <span m='1882640'>beta.</span> <span m='1883330'>So</span> <span
  m='1883550'>this</span> <span m='1883830'>term</span> <span
  m='1884150'>here</span> <span m='1884660'>is</span> <span
  m='1884810'>an</span> <span m='1884920'>n</span> <span
  m='1885140'>vector</span> <span m='1885680'>minus</span> <span
  m='1886330'>the</span> <span m='1886490'>product</span> <span
  m='1887580'>of</span> <span m='1887910'>the</span> <span m='1888030'>x</span>
  <span m='1888250'>matrix</span> <span m='1888730'>times</span> <span
  m='1888990'>beta, which</span> <span m='1889330'>is</span> <span
  m='1889500'>another</span> <span m='1889755'>n</span> <span
  m='1890010'>vector.</span> <span m='1890990'>And</span> <span
  m='1891100'>we're</span> <span m='1891220'>just</span> <span
  m='1891440'>taking</span> <span m='1891900'>the</span> <span
  m='1892290'>cross</span> <span m='1892660'>product</span> <span
  m='1893080'>of</span> <span m='1893180'>that.</span> </p><p><span
  m='1897410'>And</span> <span m='1897910'>the</span> <span
  m='1898010'>ordinary</span> <span m='1898380'>least</span> <span
  m='1898610'>squares</span> <span m='1899060'>estimate</span> <span
  m='1899500'>for</span> <span m='1899690'>beta</span> <span
  m='1901460'>solves</span> <span m='1902970'>the</span> <span
  m='1903120'>derivative</span> <span m='1904350'>of</span> <span
  m='1905300'>this</span> <span m='1905520'>criterion</span> <span
  m='1906200'>equaling</span> <span m='1906740'>0.</span> <span
  m='1907650'>Now,</span> <span m='1910930'>that's</span> <span
  m='1911750'>in</span> <span m='1911880'>fact</span> <span
  m='1912230'>true,</span> <span m='1912900'>but</span> <span
  m='1913820'>who</span> <span m='1913990'>can</span> <span
  m='1914130'>tell</span> <span m='1914290'>me</span> <span
  m='1914430'>why</span> <span m='1914770'>that's</span> <span
  m='1915060'>true?</span> <span m='1920380'>Say</span> <span
  m='1920530'>again?</span> </p><p><span m='1920860'>AUDIENCE: Is that
  minimum?</span> </p><p><span m='1921750'>PROFESSOR: OK.</span> <span
  m='1922260'>So</span> <span m='1923970'>your</span> <span
  m='1924110'>name?</span> </p><p><span m='1924763'>AUDIENCE: Seth.</span>
  </p><p><span m='1925610'>PROFESSOR: Seth?</span> <span
  m='1926356'>Seth.</span> <span m='1926812'>Very good,</span> <span
  m='1927270'>Seth.</span> <span m='1927760'>Thanks,</span> <span
  m='1928220'>Seth.</span> <span m='1928850'>So</span> <span
  m='1929720'>if</span> <span m='1930140'>we</span> <span
  m='1930250'>want</span> <span m='1930580'>to</span> <span
  m='1931100'>find</span> <span m='1931410'>a</span> <span
  m='1931510'>minimum</span> <span m='1931940'>of</span> <span
  m='1932070'>q,</span> <span m='1933200'>then</span> <span
  m='1933480'>that</span> <span m='1933720'>minimum</span> <span
  m='1934410'>will</span> <span m='1934890'>have,</span> <span
  m='1935650'>if</span> <span m='1935820'>it's</span> <span m='1935970'>a</span>
  <span m='1936030'>smooth</span> <span m='1936350'>function,</span> <span
  m='1937120'>will</span> <span m='1937390'>have</span> <span
  m='1938030'>a</span> <span m='1938340'>minimum</span> <span
  m='1939300'>slope</span> <span m='1939610'>equals</span> <span
  m='1939930'>0.</span> <span m='1940950'>Now,</span> <span
  m='1941090'>how</span> <span m='1941240'>do</span> <span m='1941320'>we</span>
  <span m='1941420'>know</span> <span m='1941580'>whether</span> <span
  m='1941770'>it's</span> <span m='1941890'>a</span> <span
  m='1941960'>minimum</span> <span m='1942400'>or</span> <span
  m='1942450'>not?</span> <span m='1943405'>It</span> <span
  m='1943720'>could</span> <span m='1943900'>be</span> <span
  m='1944060'>a</span> <span m='1944110'>maximum.</span> </p><p><span
  m='1945870'>AUDIENCE: [INAUDIBLE]?</span> </p><p><span m='1949160'>PROFESSOR:
  OK,</span> <span m='1949870'>right.</span> <span m='1950430'>So</span> <span
  m='1951170'>in</span> <span m='1951320'>fact,</span> <span
  m='1952150'>this</span> <span m='1952450'>is</span> <span
  m='1952800'>a--</span> <span m='1953160'>q</span> <span m='1953480'>of</span>
  <span m='1953720'>beta</span> <span m='1954050'>is</span> <span
  m='1954280'>a</span> <span m='1954550'>convex</span> <span
  m='1955840'>function</span> <span m='1956865'>of</span> <span
  m='1957290'>beta.</span> <span m='1959160'>And</span> <span
  m='1959360'>so</span> <span m='1960110'>its</span> <span
  m='1960940'>second</span> <span m='1961440'>derivative</span> <span
  m='1963110'>is</span> <span m='1963610'>positive.</span> <span
  m='1964770'>And</span> <span m='1966180'>if</span> <span
  m='1966330'>you</span> <span m='1967800'>basically</span> <span
  m='1968770'>think</span> <span m='1969170'>about</span> <span
  m='1970290'>the</span> <span m='1971050'>set--</span> <span
  m='1971740'>basically,</span> <span m='1972140'>this</span> <span
  m='1972350'>is</span> <span m='1972620'>the</span> <span
  m='1972710'>first</span> <span m='1973070'>derivative</span> <span
  m='1973510'>of</span> <span m='1973630'>q</span> <span m='1973870'>with</span>
  <span m='1973980'>respect</span> <span m='1974310'>to</span> <span
  m='1974380'>beta</span> <span m='1974580'>equaling</span> <span
  m='1974930'>0.</span> <span m='1975680'>If</span> <span m='1975860'>you</span>
  <span m='1975980'>were</span> <span m='1976080'>to</span> <span
  m='1976160'>solve</span> <span m='1976620'>for</span> <span
  m='1976910'>the</span> <span m='1977070'>second</span> <span
  m='1977550'>derivative</span> <span m='1978060'>of</span> <span
  m='1978180'>q</span> <span m='1978420'>with</span> <span
  m='1978550'>respect</span> <span m='1978950'>to</span> <span
  m='1979020'>beta,</span> <span m='1980180'>well,</span> <span
  m='1980410'>beta</span> <span m='1981340'>is</span> <span m='1981850'>a</span>
  <span m='1982030'>p</span> <span m='1982210'>vector.</span> <span
  m='1983110'>So</span> <span m='1983280'>the</span> <span
  m='1983400'>second</span> <span m='1983760'>derivative</span> <span
  m='1984200'>is</span> <span m='1984320'>actually</span> <span
  m='1984560'>a</span> <span m='1984620'>second</span> <span
  m='1984940'>derivative</span> <span m='1985400'>matrix,</span> <span
  m='1987690'>and</span> <span m='1987850'>that</span> <span
  m='1988090'>matrix,</span> <span m='1991240'>you</span> <span
  m='1991470'>can</span> <span m='1992080'>solve</span> <span m='1992400'>for
  it.</span> <span m='1992540'>It</span> <span m='1992590'>will</span> <span
  m='1992710'>be</span> <span m='1992850'>x</span> <span
  m='1993080'>transpose</span> <span m='1993640'>x,</span> <span
  m='1993940'>which</span> <span m='1994170'>is</span> <span
  m='1994360'>a</span> <span m='1995090'>positive,</span> <span
  m='1996480'>definite</span> <span m='1997370'>or</span> <span
  m='1997650'>semi-definite</span> <span m='1998250'>matrix.</span> <span
  m='1998730'>So</span> <span m='1998995'>it</span> <span
  m='1999260'>basically</span> <span m='2000160'>had a</span> <span
  m='2000560'>positive</span> <span m='2000825'>derivative</span> <span
  m='2001090'>there.</span> </p><p><span m='2003950'>So</span> <span
  m='2004290'>anyway,</span> <span m='2005110'>this</span> <span
  m='2005820'>ordinary</span> <span m='2006190'>least</span> <span
  m='2006380'>squares</span> <span m='2006740'>estimates</span> <span
  m='2007210'>will</span> <span m='2007470'>solve</span> <span
  m='2008060'>this</span> <span m='2009660'>dq of</span> <span
  m='2010040'>beta</span> <span m='2010290'>by</span> <span
  m='2010470'>beta</span> <span m='2010720'>equals</span> <span
  m='2011030'>0.</span> <span m='2012370'>What</span> <span
  m='2012580'>does</span> <span m='2012750'>dq</span> <span
  m='2012890'>beta</span> <span m='2014840'>by</span> <span m='2015150'>d</span>
  <span m='2015270'>beta</span> <span m='2015560'>j?</span> <span
  m='2016330'>Well,</span> <span m='2016700'>you</span> <span
  m='2016840'>just</span> <span m='2017080'>take</span> <span
  m='2018390'>the</span> <span m='2019190'>derivative</span> <span
  m='2019860'>of</span> <span m='2020120'>this</span> <span
  m='2020510'>sum.</span> <span m='2024530'>So</span> <span
  m='2024750'>we're</span> <span m='2024910'>taking</span> <span
  m='2025270'>the</span> <span m='2025430'>sum</span> <span
  m='2026300'>of</span> <span m='2026610'>all</span> <span
  m='2026860'>these</span> <span m='2027090'>elements.</span> <span
  m='2030280'>And</span> <span m='2031710'>if</span> <span
  m='2031830'>you</span> <span m='2031950'>take</span> <span
  m='2032250'>the</span> <span m='2033020'>derivative--</span> <span
  m='2033390'>well,</span> <span m='2033640'>OK,</span> <span
  m='2034060'>the</span> <span m='2034200'>derivative</span> <span
  m='2035230'>is</span> <span m='2035400'>a</span> <span
  m='2035470'>linear</span> <span m='2036600'>operator.</span> <span
  m='2037210'>So</span> <span m='2037500'>the</span> <span
  m='2037640'>derivative</span> <span m='2038120'>of</span> <span
  m='2038210'>a</span> <span m='2038290'>sum</span> <span m='2038670'>is</span>
  <span m='2038810'>the</span> <span m='2038910'>sum</span> <span
  m='2039220'>of</span> <span m='2039290'>the</span> <span
  m='2039360'>derivatives.</span> </p><p><span m='2040450'>So</span> <span
  m='2040720'>we</span> <span m='2040860'>take</span> <span
  m='2041190'>the</span> <span m='2041410'>summation</span> <span
  m='2041950'>out</span> <span m='2042820'>and</span> <span
  m='2042930'>we</span> <span m='2043030'>take</span> <span
  m='2043250'>the</span> <span m='2043350'>derivative</span> <span
  m='2043770'>of</span> <span m='2043870'>each</span> <span
  m='2044150'>term,</span> <span m='2046180'>so</span> <span
  m='2046200'>we</span> <span m='2046270'>get</span> <span m='2046450'>2</span>
  <span m='2046820'>minus</span> <span m='2047160'>xij,</span> <span
  m='2048260'>then</span> <span m='2049230'>the</span> <span
  m='2049330'>thing</span> <span m='2049500'>in</span> <span
  m='2049590'>square</span> <span m='2049929'>brackets,</span> <span
  m='2050360'>yi</span> <span m='2050640'>minus</span> <span
  m='2050920'>that.</span> <span m='2055239'>And</span> <span
  m='2055420'>what</span> <span m='2055590'>is</span> <span
  m='2055750'>that?</span> <span m='2056139'>Well,</span> <span
  m='2056460'>in</span> <span m='2056650'>matrix</span> <span
  m='2057120'>notation,</span> <span m='2058500'>if</span> <span
  m='2058650'>we</span> <span m='2058780'>let</span> <span
  m='2059090'>this</span> <span m='2059340'>sort</span> <span
  m='2059630'>of</span> <span m='2059820'>bold</span> <span m='2060310'>x</span>
  <span m='2060670'>sub</span> <span m='2060949'>squared</span> <span
  m='2061530'>j</span> <span m='2062120'>denote</span> <span
  m='2062469'>the</span> <span m='2062540'>j-th</span> <span
  m='2062840'>column</span> <span m='2063829'>of the</span> <span
  m='2064270'>independent</span> <span m='2064600'>variables,</span> <span
  m='2065670'>then</span> <span m='2066389'>this</span> <span
  m='2066560'>is</span> <span m='2066679'>minus</span> <span
  m='2067090'>2.</span> <span m='2068219'>Basically,</span> <span
  m='2068540'>the</span> <span m='2068690'>j-th</span> <span
  m='2068969'>column</span> <span m='2069850'>of</span> <span
  m='2069989'>x</span> <span m='2070719'>transpose</span> <span
  m='2071580'>times</span> <span m='2072900'>y</span> <span
  m='2073159'>minus</span> <span m='2073540'>x</span> <span
  m='2073830'>beta.</span> </p><p><span m='2075350'>So</span> <span
  m='2075969'>this</span> <span m='2077163'>j-th</span> <span
  m='2077510'>equation</span> <span m='2081320'>for</span> <span
  m='2081670'>ordinary least</span> <span m='2081989'>squares</span> <span
  m='2082940'>has</span> <span m='2083219'>that</span> <span
  m='2083429'>representation</span> <span m='2083904'>in</span> <span
  m='2084380'>terms</span> <span m='2084909'>in</span> <span
  m='2085050'>matrix</span> <span m='2085480'>notation.</span> <span
  m='2086980'>Now</span> <span m='2087120'>if</span> <span m='2087210'>we</span>
  <span m='2087350'>put</span> <span m='2087580'>that</span> <span
  m='2087760'>all</span> <span m='2087860'>together,</span> <span
  m='2091100'>we</span> <span m='2091260'>basically</span> <span
  m='2091860'>can</span> <span m='2092639'>define</span> <span
  m='2093520'>this</span> <span m='2093880'>derivative</span> <span
  m='2094420'>of</span> <span m='2094570'>q</span> <span m='2094850'>with</span>
  <span m='2094960'>respect</span> <span m='2095400'>to</span> <span
  m='2095600'>the</span> <span m='2095900'>different</span> <span
  m='2096150'>regression</span> <span m='2096580'>parameters</span> <span
  m='2097740'>as</span> <span m='2099660'>basically</span> <span
  m='2100590'>the</span> <span m='2100730'>minus</span> <span
  m='2101110'>twice</span> <span m='2101740'>the</span> <span
  m='2101890'>j-th</span> <span m='2102200'>column</span> <span
  m='2103620'>stacked</span> <span m='2104910'>times</span> <span
  m='2105440'>y</span> <span m='2105640'>minus</span> <span m='2105920'>x</span>
  <span m='2106130'>beta,</span> <span m='2106390'>which</span> <span
  m='2106560'>is</span> <span m='2106650'>simply</span> <span
  m='2107310'>minus</span> <span m='2107610'>2x</span> <span
  m='2108130'>transpose,</span> <span m='2109400'>y</span> <span
  m='2109570'>minus</span> <span m='2109870'>x</span> <span
  m='2110120'>beta.</span> </p><p><span m='2111040'>And</span> <span
  m='2111280'>this</span> <span m='2112490'>has</span> <span
  m='2112800'>to</span> <span m='2112870'>equal</span> <span
  m='2113200'>0.</span> <span m='2114870'>And</span> <span m='2116530'>if</span>
  <span m='2116790'>we</span> <span m='2116970'>just</span> <span
  m='2117220'>simplify,</span> <span m='2118130'>taking</span> <span
  m='2118390'>out</span> <span m='2118550'>the</span> <span
  m='2118660'>two,</span> <span m='2119550'>we</span> <span
  m='2119700'>get</span> <span m='2119960'>this</span> <span
  m='2120250'>set</span> <span m='2120400'>of</span> <span
  m='2120490'>equations.</span> <span m='2122140'>It</span> <span
  m='2122520'>must</span> <span m='2122860'>be</span> <span
  m='2122980'>satisfied</span> <span m='2123560'>by</span> <span
  m='2123910'>the</span> <span m='2124240'>ordinary</span> <span
  m='2124670'>least</span> <span m='2124830'>squares</span> <span
  m='2125560'>estimate,</span> <span m='2126160'>beta.</span> <span
  m='2127190'>And</span> <span m='2127450'>that's</span> <span
  m='2127790'>called</span> <span m='2128280'>the</span> <span
  m='2128780'>normal</span> <span m='2129200'>equation</span> <span
  m='2131660'>books</span> <span m='2131960'>on</span> <span
  m='2132540'>regression</span> <span m='2133010'>modeling.</span> <span
  m='2135270'>So</span> <span m='2135340'>let's</span> <span
  m='2135570'>consider</span> <span m='2136020'>how</span> <span
  m='2136250'>we</span> <span m='2136410'>solve</span> <span
  m='2136860'>that.</span> <span m='2137310'>Well,</span> <span
  m='2138300'>we</span> <span m='2138440'>can</span> <span
  m='2138570'>reexpress</span> <span m='2139280'>that</span> <span
  m='2139950'>by</span> <span m='2140550'>multiplying</span> <span
  m='2141070'>through</span> <span m='2142380'>the</span> <span
  m='2142830'>x</span> <span m='2143100'>transpose</span> <span
  m='2144000'>on</span> <span m='2144240'>each</span> <span
  m='2144430'>of</span> <span m='2144530'>the</span> <span
  m='2144630'>terms.</span> <span m='2146010'>And</span> <span
  m='2146220'>then</span> <span m='2149670'>beta</span> <span
  m='2149990'>hat</span> <span m='2150380'>basically</span> <span
  m='2150730'>solves</span> <span m='2151330'>this</span> <span
  m='2152750'>equation.</span> </p><p><span m='2154770'>And</span> <span
  m='2155010'>if</span> <span m='2155590'>x</span> <span
  m='2155810'>transpose</span> <span m='2156360'>x</span> <span
  m='2156560'>inverse</span> <span m='2157050'>exists,</span> <span
  m='2158170'>we</span> <span m='2158190'>get</span> <span
  m='2158370'>beta</span> <span m='2158570'>hat</span> <span
  m='2158830'>is</span> <span m='2158970'>equal</span> <span
  m='2159240'>to</span> <span m='2160290'>x</span> <span
  m='2160520'>transpose</span> <span m='2161070'>x</span> <span
  m='2161290'>inverse</span> <span m='2162120'>x</span> <span
  m='2162385'>transpose</span> <span m='2162650'>y.</span> <span
  m='2164920'>So</span> <span m='2165940'>with</span> <span
  m='2167710'>matrix</span> <span m='2168320'>algebra,</span> <span
  m='2169810'>we</span> <span m='2169970'>can</span> <span
  m='2170090'>actually</span> <span m='2170350'>solve</span> <span
  m='2170730'>this.</span> <span m='2171030'>And</span> <span
  m='2171240'>matrix</span> <span m='2171640'>algebra</span> <span
  m='2172110'>is</span> <span m='2173160'>going</span> <span
  m='2173420'>to</span> <span m='2173520'>be</span> <span
  m='2174530'>very</span> <span m='2175040'>important</span> <span
  m='2175420'>to</span> <span m='2175500'>this</span> <span
  m='2175690'>lecture</span> <span m='2176110'>and</span> <span
  m='2176340'>other</span> <span m='2176520'>lectures.</span> <span
  m='2176910'>So</span> <span m='2177640'>if</span> <span
  m='2177840'>this</span> <span m='2178060'>stuff</span> <span
  m='2178390'>is--</span> <span m='2178850'>if</span> <span
  m='2178920'>you're</span> <span m='2179040'>a</span> <span
  m='2179080'>bit</span> <span m='2179260'>rusty</span> <span
  m='2179620'>on</span> <span m='2179710'>this,</span> <span
  m='2180260'>do</span> <span m='2181780'>brush</span> <span
  m='2182050'>up.</span> <span m='2186370'>This</span> <span
  m='2186820'>particular</span> <span m='2187410'>solution</span> <span
  m='2187920'>for</span> <span m='2188190'>beta</span> <span
  m='2188700'>hat</span> <span m='2189610'>assumes</span> <span
  m='2190410'>that</span> <span m='2191320'>x</span> <span
  m='2191920'>transpose</span> <span m='2192610'>x</span> <span
  m='2193660'>inverse</span> <span m='2195150'>exists.</span> </p><p><span
  m='2197980'>Who</span> <span m='2198120'>can</span> <span
  m='2198290'>tell</span> <span m='2198540'>me</span> <span
  m='2200900'>what</span> <span m='2202300'>assumptions</span> <span
  m='2202780'>do</span> <span m='2202920'>need</span> <span
  m='2203110'>to</span> <span m='2203180'>make</span> <span
  m='2203500'>for</span> <span m='2204030'>x</span> <span
  m='2204290'>transpose</span> <span m='2204860'>x</span> <span m='2206360'>to
  have</span> <span m='2206750'>an</span> <span m='2207020'>inverse?</span>
  <span m='2212110'>I'll</span> <span m='2212290'>call</span> <span
  m='2212500'>you in a</span> <span m='2212760'>second</span> <span
  m='2213210'>if no</span> <span m='2213630'>one</span> <span
  m='2213740'>else</span> <span m='2213840'>does.</span> <span
  m='2215910'>Somebody</span> <span m='2216720'>just</span> <span
  m='2217188'>said</span> <span m='2217656'>something.</span> <span
  m='2219528'>Someone</span> <span m='2219996'>else.</span> <span
  m='2221400'>No?</span> <span m='2221870'>All right. OK,</span> <span
  m='2222110'>Will.</span> </p><p><span m='2222400'>AUDIENCE: So</span> <span
  m='2222550'>x</span> <span m='2222600'>transpose</span> <span
  m='2223010'>x</span> <span m='2223420'>inverse</span> <span m='2223860'>needs
  to</span> <span m='2224353'>have</span> <span m='2224846'>full</span> <span
  m='2225339'>rank,</span> <span m='2225832'>which means that</span> <span
  m='2226325'>each of the</span> <span m='2226818'>submatrices</span> <span
  m='2227804'>needs</span> <span m='2228297'>to have</span> <span
  m='2230269'>a</span> <span m='2230762'>smaller</span> <span
  m='2231255'>range.</span> </p><p><span m='2231750'>PROFESSOR: OK,</span> <span
  m='2232090'>so</span> <span m='2233640'>Will</span> <span
  m='2233870'>said,</span> <span m='2234250'>basically,</span> <span
  m='2234580'>the</span> <span m='2234790'>matrix</span> <span m='2235130'>x
  needs</span> <span m='2235480'>to have</span> <span m='2235730'>full</span>
  <span m='2236020'>rank.</span> <span m='2237250'>And</span> <span
  m='2237480'>so</span> <span m='2237990'>if</span> <span m='2238200'>x</span>
  <span m='2238420'>has</span> <span m='2238630'>full</span> <span
  m='2238950'>rank,</span> <span m='2240020'>then--</span> <span
  m='2243062'>well,</span> <span m='2243470'>let's</span> <span
  m='2243800'>see.</span> <span m='2243990'>If</span> <span m='2244140'>x
  has</span> <span m='2244550'>full</span> <span m='2244830'>rank,</span> <span
  m='2246420'>then</span> <span m='2247890'>the</span> <span
  m='2248050'>singular</span> <span m='2248430'>value</span> <span
  m='2248690'>decomposition</span> <span m='2249340'>which</span> <span
  m='2249480'>was</span> <span m='2249650'>in</span> <span
  m='2249780'>the</span> <span m='2249860'>very</span> <span
  m='2250140'>first</span> <span m='2251000'>class</span> <span
  m='2254160'>can</span> <span m='2254840'>exist.</span> <span
  m='2255990'>And</span> <span m='2256550'>you</span> <span
  m='2256770'>have</span> <span m='2257470'>basically</span> <span
  m='2258490'>p</span> <span m='2259410'>singular</span> <span
  m='2259880'>values</span> <span m='2260330'>that</span> <span
  m='2260430'>are</span> <span m='2260580'>all</span> <span
  m='2261310'>non-zero.</span> <span m='2262730'>And</span> <span
  m='2263750'>x</span> <span m='2264010'>transpose</span> <span
  m='2264740'>x</span> <span m='2265100'>can</span> <span m='2265300'>be</span>
  <span m='2265440'>expressed</span> <span m='2266100'>as</span> <span
  m='2266720'>sort</span> <span m='2267080'>of</span> <span
  m='2267440'>a,</span> <span m='2268920'>from</span> <span
  m='2269100'>the</span> <span m='2269180'>singular</span> <span
  m='2269490'>value</span> <span m='2269750'>decomposition,</span> <span
  m='2270610'>as</span> <span m='2270740'>one</span> <span m='2270970'>of</span>
  <span m='2271070'>the</span> <span m='2271190'>orthogonal</span> <span
  m='2271740'>matrices</span> <span m='2272340'>times</span> <span
  m='2272710'>the</span> <span m='2272800'>square</span> <span
  m='2273110'>of</span> <span m='2273200'>the</span> <span
  m='2274000'>singular</span> <span m='2274370'>values</span> <span
  m='2274880'>times</span> <span m='2275200'>that</span> <span
  m='2275410'>same</span> <span m='2275730'>matrix</span> <span
  m='2276130'>transpose,</span> <span m='2277145'>if you</span> <span
  m='2277560'>recall</span> <span m='2277970'>that</span> <span
  m='2278280'>definition.</span> </p><p><span m='2279390'>So</span> <span
  m='2279520'>that</span> <span m='2279820'>actually</span> <span
  m='2280130'>is-- it</span> <span m='2280280'>basically</span> <span
  m='2282420'>provides</span> <span m='2282950'>a</span> <span
  m='2283010'>solution</span> <span m='2283470'>for</span> <span
  m='2283890'>x</span> <span m='2284070'>transpose</span> <span
  m='2284560'>x</span> <span m='2285050'>inverse,</span> <span
  m='2285500'>indeed,</span> <span m='2286590'>from</span> <span
  m='2286670'>the</span> <span m='2286760'>singular</span> <span
  m='2287090'>value</span> <span m='2287350'>decomposition</span> <span
  m='2287750'>of</span> <span m='2288150'>x.</span> <span m='2288810'>But</span>
  <span m='2289050'>what's</span> <span m='2289340'>required</span> <span
  m='2289800'>is</span> <span m='2289920'>that</span> <span
  m='2289990'>you</span> <span m='2290100'>have</span> <span
  m='2290390'>a</span> <span m='2290460'>full</span> <span
  m='2290870'>rank</span> <span m='2291150'>in x.</span> <span
  m='2291910'>And</span> <span m='2292300'>what</span> <span
  m='2292530'>that</span> <span m='2292780'>means</span> <span
  m='2293130'>is</span> <span m='2293290'>that</span> <span
  m='2293710'>you</span> <span m='2293860'>can't</span> <span
  m='2294160'>have</span> <span m='2294450'>independent</span> <span
  m='2295020'>variables</span> <span m='2295760'>that</span> <span
  m='2296620'>are</span> <span m='2299560'>explained</span> <span
  m='2300120'>by</span> <span m='2300300'>other</span> <span
  m='2300530'>independent</span> <span m='2301050'>variables.</span> <span
  m='2301950'>So</span> <span m='2302060'>different</span> <span
  m='2302510'>columns</span> <span m='2303050'>of</span> <span
  m='2303200'>x</span> <span m='2304150'>have</span> <span m='2304410'>to</span>
  <span m='2304630'>be</span> <span m='2308280'>linear,</span> <span
  m='2309010'>or</span> <span m='2309110'>they</span> <span
  m='2309210'>can't</span> <span m='2309580'>linearly</span> <span
  m='2310110'>dependent</span> <span m='2310580'>on</span> <span
  m='2310760'>any</span> <span m='2310990'>other</span> <span
  m='2311170'>columns of</span> <span m='2311680'>x.</span> <span
  m='2312670'>Otherwise,</span> <span m='2313330'>you</span> <span
  m='2313440'>would</span> <span m='2313530'>have</span> <span
  m='2313740'>reduced</span> <span m='2314205'>rank.</span> </p><p><span
  m='2317460'>So</span> <span m='2317930'>now</span> <span m='2318180'>if</span>
  <span m='2318960'>beta</span> <span m='2319210'>hat</span> <span
  m='2319490'>doesn't</span> <span m='2322950'>have</span> <span
  m='2323300'>full</span> <span m='2323650'>rank,</span> <span
  m='2324570'>then</span> <span m='2325280'>our</span> <span
  m='2325580'>least</span> <span m='2325790'>squares</span> <span
  m='2326120'>estimate</span> <span m='2326740'>of</span> <span
  m='2326910'>beta</span> <span m='2327400'>might</span> <span
  m='2327810'>be</span> <span m='2328140'>non-unique.</span> <span
  m='2329380'>And</span> <span m='2329430'>in</span> <span
  m='2329520'>fact,</span> <span m='2330860'>it</span> <span
  m='2331080'>is</span> <span m='2331270'>the</span> <span
  m='2331360'>case</span> <span m='2331790'>that</span> <span
  m='2332750'>if</span> <span m='2333010'>you</span> <span
  m='2333280'>are</span> <span m='2333510'>really</span> <span
  m='2333830'>interested</span> <span m='2334360'>in</span> <span
  m='2334490'>just</span> <span m='2334830'>predicting</span> <span
  m='2335600'>values</span> <span m='2335950'>of</span> <span
  m='2336020'>a</span> <span m='2336080'>dependent</span> <span
  m='2336580'>variable,</span> <span m='2337110'>then</span> <span
  m='2339180'>having</span> <span m='2341670'>non-unique</span> <span
  m='2341990'>unique</span> <span m='2342450'>least</span> <span
  m='2342660'>squares</span> <span m='2342970'>estimates</span> <span
  m='2343440'>isn't</span> <span m='2343810'>as</span> <span
  m='2343980'>much</span> <span m='2344180'>of</span> <span m='2344270'>a</span>
  <span m='2344340'>problem,</span> <span m='2344820'>because</span> <span
  m='2345030'>you</span> <span m='2345140'>still</span> <span
  m='2345530'>get</span> <span m='2345690'>estimates</span> <span
  m='2346140'>out of</span> <span m='2346340'>that.</span> <span
  m='2347090'>But</span> <span m='2348150'>for</span> <span
  m='2348310'>now,</span> <span m='2348550'>we</span> <span
  m='2348720'>want</span> <span m='2349060'>to</span> <span
  m='2349180'>assume</span> <span m='2349530'>that</span> <span
  m='2349800'>there's</span> <span m='2350660'>full</span> <span
  m='2350880'>column</span> <span m='2351200'>rank</span> <span m='2351510'>in
  the</span> <span m='2352010'>independent variables.</span> </p><p><span
  m='2356010'>All</span> <span m='2356510'>right.</span> <span
  m='2357510'>Now,</span> <span m='2357900'>if</span> <span
  m='2358130'>we</span> <span m='2358830'>plug</span> <span
  m='2359223'>in</span> <span m='2360010'>the</span> <span
  m='2360990'>value</span> <span m='2361650'>of</span> <span
  m='2361810'>the</span> <span m='2361920'>solution</span> <span
  m='2368180'>for</span> <span m='2368970'>the</span> <span
  m='2369860'>least</span> <span m='2370100'>squares</span> <span
  m='2370930'>estimate,</span> <span m='2372110'>we</span> <span
  m='2372600'>get</span> <span m='2373710'>fitted</span> <span
  m='2374040'>values</span> <span m='2374780'>for</span> <span
  m='2376310'>the</span> <span m='2376420'>response</span> <span
  m='2376940'>variable,</span> <span m='2378090'>which</span> <span
  m='2378610'>are</span> <span m='2379590'>simply</span> <span
  m='2380120'>the</span> <span m='2380240'>matrix</span> <span
  m='2380830'>x</span> <span m='2381420'>times</span> <span
  m='2381960'>beta</span> <span m='2382280'>hat.</span> <span
  m='2384370'>And</span> <span m='2384600'>this</span> <span
  m='2385870'>expression</span> <span m='2386550'>for</span> <span
  m='2387710'>the</span> <span m='2387820'>fitted</span> <span
  m='2388220'>values</span> <span m='2392070'>is</span> <span
  m='2393820'>basically</span> <span m='2394120'>x</span> <span
  m='2394440'>times</span> <span m='2394670'>x</span> <span
  m='2394830'>transpose</span> <span m='2395300'>x</span> <span
  m='2395470'>inverse</span> <span m='2395850'>x</span> <span
  m='2396050'>transpose</span> <span m='2396710'>y,</span> <span
  m='2398570'>which</span> <span m='2399200'>we</span> <span
  m='2399420'>can</span> <span m='2399580'>represent</span> <span
  m='2400140'>as</span> <span m='2400440'>hy.</span> </p><p><span
  m='2401330'>Basically,</span> <span m='2403280'>this</span> <span
  m='2403770'>h</span> <span m='2404460'>matrix</span> <span
  m='2406750'>in</span> <span m='2406920'>linear</span> <span
  m='2407240'>models</span> <span m='2407610'>and</span> <span
  m='2407720'>statistics</span> <span m='2408160'>is</span> <span
  m='2408330'>called</span> <span m='2408630'>the</span> <span
  m='2408700'>hat</span> <span m='2409020'>matrix.</span> <span
  m='2409770'>It's</span> <span m='2409960'>basically</span> <span
  m='2410630'>a</span> <span m='2410770'>projection</span> <span
  m='2411800'>matrix</span> <span m='2412310'>that</span> <span
  m='2412450'>takes</span> <span m='2413530'>the</span> <span
  m='2413650'>linear</span> <span m='2414020'>vector,</span> <span
  m='2414770'>or</span> <span m='2414930'>the</span> <span
  m='2415350'>vector</span> <span m='2415880'>of</span> <span
  m='2418770'>values</span> <span m='2419120'>of</span> <span
  m='2419200'>the</span> <span m='2419270'>response</span> <span
  m='2419800'>variable,</span> <span m='2420620'>into</span> <span
  m='2421510'>the</span> <span m='2422530'>fitted</span> <span
  m='2422790'>values.</span> <span m='2424290'>So</span> <span
  m='2426090'>this</span> <span m='2428080'>hat</span> <span
  m='2428380'>matrix</span> <span m='2429040'>is</span> <span
  m='2430080'>quite</span> <span m='2430340'>important.</span> <span
  m='2434640'>The</span> <span m='2434850'>problem</span> <span
  m='2435180'>set's</span> <span m='2435560'>going</span> <span
  m='2435750'>to</span> <span m='2435820'>cover</span> <span
  m='2436400'>some</span> <span m='2436680'>features,</span> <span
  m='2437745'>go into</span> <span m='2438130'>some</span> <span
  m='2438290'>properties</span> <span m='2438980'>of</span> <span
  m='2439100'>the hat</span> <span m='2439420'>matrix.</span> </p><p><span
  m='2442790'>Does</span> <span m='2443010'>anyone</span> <span
  m='2445280'>want</span> <span m='2445450'>to</span> <span
  m='2445490'>make</span> <span m='2445690'>any</span> <span
  m='2445830'>comments</span> <span m='2446280'>about</span> <span
  m='2448420'>this</span> <span m='2448560'>hat</span> <span
  m='2448840'>matrix?</span> <span m='2449180'>It's</span> <span
  m='2449270'>actually</span> <span m='2449540'>a</span> <span
  m='2449590'>very</span> <span m='2449840'>special</span> <span
  m='2450240'>type</span> <span m='2450530'>of</span> <span
  m='2450870'>matrix.</span> <span m='2452290'>Does</span> <span
  m='2452420'>anyone</span> <span m='2452620'>want</span> <span
  m='2452890'>to</span> <span m='2453440'>point</span> <span
  m='2453690'>out</span> <span m='2453890'>what</span> <span
  m='2454090'>that</span> <span m='2454350'>special</span> <span
  m='2455670'>type</span> <span m='2455950'>is?</span> <span
  m='2460420'>It's</span> <span m='2460640'>a</span> <span
  m='2460700'>projection</span> <span m='2461390'>matrix,</span> <span
  m='2461970'>OK.</span> <span m='2462862'>Yeah.</span> <span
  m='2463310'>And</span> <span m='2463690'>in</span> <span
  m='2464460'>linear</span> <span m='2465920'>algebra,</span> <span
  m='2466640'>projection</span> <span m='2467470'>matrices</span> <span
  m='2468490'>have</span> <span m='2468920'>some</span> <span
  m='2469080'>very</span> <span m='2469320'>special</span> <span
  m='2469720'>properties.</span> <span m='2471970'>And</span> <span
  m='2473590'>it's</span> <span m='2473750'>actually</span> <span
  m='2474625'>an</span> <span m='2475030'>orthogonal</span> <span
  m='2475810'>projection</span> <span m='2476420'>matrix.</span> </p><p><span
  m='2477400'>And</span> <span m='2477640'>so</span> <span m='2478850'>if</span>
  <span m='2479040'>you're</span> <span m='2479710'>interested</span> <span
  m='2480360'>in</span> <span m='2480590'>that</span> <span
  m='2481620'>feature,</span> <span m='2484030'>you</span> <span
  m='2484280'>should</span> <span m='2484520'>look</span> <span
  m='2484710'>into</span> <span m='2484970'>that.</span> <span
  m='2485290'>But</span> <span m='2486170'>it's</span> <span
  m='2486310'>really</span> <span m='2486620'>a very</span> <span
  m='2487290'>rich</span> <span m='2489310'>set</span> <span
  m='2489480'>of</span> <span m='2489560'>properties</span> <span
  m='2490270'>associated</span> <span m='2490670'>with</span> <span
  m='2490750'>this</span> <span m='2490890'>hat</span> <span
  m='2491120'>matrix.</span> <span m='2491510'>It's</span> <span
  m='2491980'>an</span> <span m='2492130'>orthogonal</span> <span
  m='2492630'>projection,</span> <span m='2495010'>and</span> <span
  m='2495280'>it's--</span> <span m='2496730'>let's</span> <span
  m='2496870'>see.</span> <span m='2496970'>What's</span> <span
  m='2497340'>it</span> <span m='2497440'>projecting?</span> <span
  m='2498180'>It's</span> <span m='2498370'>projecting</span> <span
  m='2498870'>from</span> <span m='2499230'>n</span> <span
  m='2499540'>space</span> <span m='2500030'>into</span> <span
  m='2500410'>what?</span> <span m='2504570'>Go</span> <span
  m='2504710'>ahead.</span> <span m='2505150'>What's</span> <span
  m='2505690'>your</span> <span m='2505850'>name?</span> </p><p><span
  m='2506596'>AUDIENCE: Ethan.</span> </p><p><span m='2507062'>PROFESSOR:
  Ethan,</span> <span m='2507530'>OK.</span> </p><p><span m='2507870'>AUDIENCE:
  Into space called x.</span> </p><p><span m='2511750'>PROFESSOR:
  Basically,</span> <span m='2512200'>yeah. It's</span> <span
  m='2512550'>projecting</span> <span m='2513120'>into</span> <span
  m='2513370'>the</span> <span m='2513700'>column</span> <span
  m='2514140'>space</span> <span m='2514395'>of</span> <span
  m='2514650'>x.</span> <span m='2515930'>So</span> <span
  m='2518170'>that's</span> <span m='2518380'>what</span> <span
  m='2518840'>linear</span> <span m='2519130'>regression</span> <span
  m='2519425'>is</span> <span m='2519720'>doing.</span> <span
  m='2520730'>So</span> <span m='2521880'>in</span> <span
  m='2522660'>focusing</span> <span m='2523470'>and</span> <span
  m='2523650'>understanding</span> <span m='2524350'>linear</span> <span
  m='2524690'>regression,</span> <span m='2525220'>you</span> <span
  m='2525320'>can</span> <span m='2525360'>think</span> <span
  m='2525610'>of,</span> <span m='2526050'>how</span> <span
  m='2526240'>do</span> <span m='2526320'>we</span> <span m='2526500'>get</span>
  <span m='2526740'>estimates</span> <span m='2527100'>of</span> <span
  m='2527220'>this</span> <span m='2527460'>p</span> <span
  m='2527580'>vector?</span> <span m='2528620'>That's</span> <span
  m='2528860'>all</span> <span m='2529050'>very</span> <span
  m='2529310'>good</span> <span m='2529760'>and</span> <span
  m='2530000'>useful,</span> <span m='2530590'>and</span> <span
  m='2530880'>we'll</span> <span m='2531160'>do</span> <span
  m='2531270'>a</span> <span m='2531320'>lot</span> <span m='2531490'>of</span>
  <span m='2531540'>that.</span> <span m='2531880'>But</span> <span
  m='2532290'>you</span> <span m='2532400'>can</span> <span
  m='2532520'>also</span> <span m='2532720'>think</span> <span
  m='2532890'>of</span> <span m='2532990'>it</span> <span m='2533370'>as,</span>
  <span m='2533650'>what's</span> <span m='2533880'>happening</span> <span
  m='2534290'>in</span> <span m='2534380'>the</span> <span m='2534520'>n</span>
  <span m='2534690'>dimensional</span> <span m='2535190'>space?</span> <span
  m='2535750'>So</span> <span m='2536570'>you</span> <span
  m='2536660'>basically</span> <span m='2537030'>are</span> <span
  m='2537130'>representing</span> <span m='2537660'>this</span> <span
  m='2537870'>n</span> <span m='2538060'>dimensional</span> <span
  m='2539080'>vector</span> <span m='2539470'>y</span> <span
  m='2540520'>by</span> <span m='2540920'>its</span> <span
  m='2541140'>projection</span> <span m='2541960'>onto</span> <span
  m='2542270'>the</span> <span m='2542380'>column</span> <span
  m='2542730'>space.</span> </p><p><span m='2549730'>Now,</span> <span
  m='2549940'>the</span> <span m='2550080'>residuals</span> <span
  m='2551990'>are</span> <span m='2552150'>basically</span> <span
  m='2552470'>the</span> <span m='2552600'>difference</span> <span
  m='2552920'>between</span> <span m='2553260'>the</span> <span
  m='2553330'>response</span> <span m='2555720'>value</span> <span
  m='2556250'>and</span> <span m='2556610'>the</span> <span
  m='2556920'>fitted</span> <span m='2557280'>value.</span> <span
  m='2558320'>And</span> <span m='2558590'>this</span> <span
  m='2559750'>can</span> <span m='2559920'>be</span> <span
  m='2560350'>expressed</span> <span m='2561770'>as</span> <span
  m='2562550'>y</span> <span m='2562810'>minus</span> <span m='2563160'>y</span>
  <span m='2563340'>hat,</span> <span m='2563960'>or</span> <span
  m='2565160'>in</span> <span m='2565340'>minus</span> <span
  m='2565690'>h</span> <span m='2566840'>times</span> <span
  m='2567290'>y.</span> <span m='2568370'>And</span> <span m='2570520'>it</span>
  <span m='2570700'>turns</span> <span m='2571070'>out</span> <span
  m='2571370'>that</span> <span m='2572690'>in</span> <span
  m='2573110'>minus</span> <span m='2573530'>h</span> <span
  m='2573910'>is</span> <span m='2574170'>also</span> <span m='2575690'>a</span>
  <span m='2575780'>projection</span> <span m='2578110'>matrix,</span> <span
  m='2578700'>and</span> <span m='2579050'>it's</span> <span
  m='2579270'>projecting</span> <span m='2580230'>the</span> <span
  m='2580350'>data</span> <span m='2581140'>onto</span> <span
  m='2581490'>the</span> <span m='2581620'>space</span> <span
  m='2582840'>orthogonal</span> <span m='2583950'>to</span> <span
  m='2584580'>the</span> <span m='2584690'>column</span> <span
  m='2584960'>space</span> <span m='2585320'>of</span> <span
  m='2585773'>x.</span> </p><p><span m='2586680'>And</span> <span
  m='2588342'>to</span> <span m='2588800'>show</span> <span
  m='2589280'>that</span> <span m='2589450'>that's</span> <span
  m='2589770'>true,</span> <span m='2591240'>if</span> <span
  m='2591340'>we</span> <span m='2591610'>consider</span> <span
  m='2591980'>the</span> <span m='2592140'>normal</span> <span
  m='2592570'>equations--</span> <span m='2593430'>which</span> <span
  m='2593530'>are</span> <span m='2593620'>x</span> <span
  m='2593820'>transpose</span> <span m='2594300'>y</span> <span
  m='2594470'>minus</span> <span m='2594730'>x</span> <span
  m='2594980'>beta--</span> <span m='2596420'>hat</span> <span
  m='2596730'>equaling</span> <span m='2597170'>0,</span> <span
  m='2598350'>that</span> <span m='2598570'>basically</span> <span
  m='2598890'>is</span> <span m='2599020'>x</span> <span
  m='2599260'>transpose</span> <span m='2599970'>epsilon</span> <span
  m='2600430'>hat</span> <span m='2600890'>equals</span> <span
  m='2601240'>0.</span> <span m='2602310'>And</span> <span m='2602490'>so</span>
  <span m='2603510'>from</span> <span m='2604240'>the</span> <span
  m='2604370'>normal</span> <span m='2604810'>equations,</span> <span
  m='2605410'>we</span> <span m='2605560'>can</span> <span
  m='2605660'>see</span> <span m='2606050'>of</span> <span
  m='2606250'>what</span> <span m='2606510'>they</span> <span
  m='2606880'>mean</span> <span m='2607420'>is</span> <span
  m='2607610'>they</span> <span m='2607750'>mean</span> <span
  m='2608040'>that</span> <span m='2608640'>the</span> <span
  m='2609570'>residual</span> <span m='2610660'>vector</span> <span
  m='2611260'>epsilon</span> <span m='2611720'>hat</span> <span
  m='2612170'>is</span> <span m='2613380'>orthogonal</span> <span
  m='2614390'>to</span> <span m='2615030'>each</span> <span
  m='2615260'>of</span> <span m='2615390'>the</span> <span
  m='2615480'>columns</span> <span m='2615920'>of</span> <span
  m='2616020'>x.</span> <span m='2616550'>You</span> <span m='2616650'>can
  take</span> <span m='2616890'>any</span> <span m='2617060'>column</span> <span
  m='2617390'>in</span> <span m='2617490'>x,</span> <span
  m='2617810'>multiply</span> <span m='2618280'>that</span> <span
  m='2618570'>by</span> <span m='2619260'>the</span> <span
  m='2619360'>residual</span> <span m='2619840'>vector,</span> <span
  m='2620370'>and get</span> <span m='2620720'>0</span> <span
  m='2621290'>coming</span> <span m='2621610'>out.</span> <span
  m='2622210'>So</span> <span m='2624110'>that's</span> <span
  m='2624590'>a</span> <span m='2624640'>feature</span> <span
  m='2625080'>of</span> <span m='2625505'>the</span> <span
  m='2626780'>residuals</span> <span m='2627760'>as</span> <span
  m='2628100'>they</span> <span m='2628270'>relate</span> <span
  m='2628640'>to</span> <span m='2628740'>the</span> <span
  m='2628960'>independent</span> <span m='2629410'>variables.</span>
  </p><p><span m='2631660'>OK,</span> <span m='2633240'>all</span> <span
  m='2633410'>right.</span> <span m='2633940'>So</span> <span
  m='2636000'>at</span> <span m='2636150'>this</span> <span
  m='2636340'>point,</span> <span m='2636660'>we've</span> <span
  m='2636830'>gone</span> <span m='2637090'>through</span> <span
  m='2638520'>really</span> <span m='2638830'>not</span> <span
  m='2640140'>talking</span> <span m='2640520'>about</span> <span
  m='2640860'>any</span> <span m='2641210'>statistical</span> <span
  m='2641770'>properties</span> <span m='2642660'>to</span> <span
  m='2642810'>specify</span> <span m='2643360'>the</span> <span
  m='2643470'>betas.</span> <span m='2643840'>All</span> <span
  m='2643900'>we've</span> <span m='2644040'>done</span> <span
  m='2644280'>is</span> <span m='2644420'>talked.</span> <span
  m='2644910'>We've</span> <span m='2645140'>introduced</span> <span
  m='2645560'>the</span> <span m='2645650'>least</span> <span
  m='2645860'>squares</span> <span m='2646210'>criterion</span> <span
  m='2646515'>and</span> <span m='2646820'>said,</span> <span
  m='2647110'>what</span> <span m='2647390'>value</span> <span
  m='2648425'>of</span> <span m='2648830'>the</span> <span
  m='2648950'>beta</span> <span m='2649230'>vector</span> <span
  m='2649770'>minimizes</span> <span m='2650680'>that least</span> <span
  m='2650870'>squares</span> <span m='2651230'>criterion?</span> <span
  m='2653260'>Let's</span> <span m='2653400'>turn</span> <span
  m='2653760'>to</span> <span m='2655501'>the</span> <span
  m='2655910'>Gauss</span> <span m='2656200'>Markov</span> <span
  m='2656750'>theorem</span> <span m='2657470'>and</span> <span
  m='2657650'>start</span> <span m='2657980'>introducing</span> <span
  m='2658930'>some</span> <span m='2660100'>statistical</span> <span
  m='2661200'>properties,</span> <span m='2662240'>probability</span> <span
  m='2663260'>properties.</span> </p><p><span m='2664190'>So</span> <span
  m='2665160'>with</span> <span m='2665330'>our</span> <span
  m='2665470'>data,</span> <span m='2666230'>yx--</span> <span
  m='2667690'>yes?</span> <span m='2668970'>Yes.</span> </p><p><span
  m='2669445'>AUDIENCE: [INAUDIBLE]?</span> </p><p><span m='2676110'>PROFESSOR:
  That</span> <span m='2676520'>epsilon--</span> </p><p><span
  m='2677268'>AUDIENCE: [INAUDIBLE]?</span> </p><p><span m='2681480'>PROFESSOR:
  OK.</span> <span m='2682890'>Let</span> <span m='2682970'>me</span> <span
  m='2683060'>go</span> <span m='2683180'>back</span> <span
  m='2683430'>to</span> <span m='2683510'>that.</span> <span
  m='2687830'>It's</span> <span m='2689510'>that</span> <span
  m='2690370'>x,</span> <span m='2690850'>the</span> <span
  m='2690980'>columns</span> <span m='2691450'>of</span> <span
  m='2691560'>x,</span> <span m='2692620'>and</span> <span
  m='2693020'>the</span> <span m='2693110'>column</span> <span
  m='2693500'>vector</span> <span m='2694640'>of</span> <span
  m='2695130'>the</span> <span m='2695510'>residual</span> <span
  m='2697250'>are</span> <span m='2697560'>orthogonal</span> <span
  m='2698220'>to</span> <span m='2698380'>each</span> <span
  m='2698570'>other.</span> <span m='2699660'>So</span> <span
  m='2700620'>we're</span> <span m='2700800'>not</span> <span
  m='2701030'>doing</span> <span m='2701290'>a</span> <span
  m='2701360'>projection</span> <span m='2702060'>onto</span> <span
  m='2702500'>a</span> <span m='2702550'>null</span> <span
  m='2702810'>space.</span> <span m='2704330'>This</span> <span
  m='2705080'>is</span> <span m='2705180'>just</span> <span m='2705400'>a</span>
  <span m='2705460'>statement</span> <span m='2706010'>that</span> <span
  m='2707030'>those</span> <span m='2709570'>values,</span> <span
  m='2710630'>or</span> <span m='2710750'>those</span> <span
  m='2711050'>column</span> <span m='2711440'>vectors,</span> <span
  m='2712460'>are</span> <span m='2712810'>orthogonal</span> <span
  m='2713530'>to</span> <span m='2713710'>each</span> <span
  m='2713910'>other.</span> </p><p><span m='2715160'>And</span> <span
  m='2716240'>just</span> <span m='2716510'>to</span> <span
  m='2716900'>recap,</span> <span m='2717600'>the</span> <span
  m='2719630'>epsilon</span> <span m='2720340'>is</span> <span
  m='2720530'>a</span> <span m='2720610'>projection</span> <span
  m='2721270'>of</span> <span m='2721390'>y</span> <span m='2722010'>onto</span>
  <span m='2723600'>the</span> <span m='2723730'>space</span> <span
  m='2724290'>orthogonal</span> <span m='2725190'>to</span> <span
  m='2725500'>the</span> <span m='2725590'>column</span> <span
  m='2725940'>space.</span> <span m='2727060'>And</span> <span
  m='2727430'>y</span> <span m='2727720'>hat is a</span> <span
  m='2728220'>projection</span> <span m='2729190'>onto</span> <span
  m='2730260'>the</span> <span m='2730360'>column</span> <span
  m='2730830'>space</span> <span m='2731145'>of</span> <span
  m='2731460'>y.</span> <span m='2732788'>And</span> <span
  m='2734240'>these</span> <span m='2734760'>projections</span> <span
  m='2735380'>are</span> <span m='2735820'>all</span> <span
  m='2736260'>orthogonal</span> <span m='2737080'>projections,</span> <span
  m='2737405'>and</span> <span m='2737730'>so</span> <span
  m='2739360'>they</span> <span m='2739880'>happen</span> <span
  m='2740620'>to</span> <span m='2741840'>result</span> <span
  m='2742360'>in</span> <span m='2743490'>the</span> <span
  m='2743960'>projected</span> <span m='2744560'>value</span> <span
  m='2744840'>epsilon</span> <span m='2745190'>hat</span> <span
  m='2745740'>must</span> <span m='2745980'>be</span> <span
  m='2746090'>orthogonal</span> <span m='2746930'>to</span> <span
  m='2747710'>the</span> <span m='2747800'>column</span> <span
  m='2748040'>space</span> <span m='2748330'>of</span> <span
  m='2748440'>x</span> <span m='2748770'>if</span> <span m='2749810'>you</span>
  <span m='2749910'>project</span> <span m='2750175'>it</span> <span
  m='2750440'>out.</span> <span m='2753080'>OK?</span> <span
  m='2754300'>All</span> <span m='2754715'>right.</span> </p><p><span
  m='2755130'>So</span> <span m='2755730'>the</span> <span
  m='2755860'>Gauss</span> <span m='2756160'>Markov</span> <span
  m='2756610'>theorem,</span> <span m='2758810'>we</span> <span
  m='2758960'>have</span> <span m='2759090'>data,</span> <span
  m='2759390'>y</span> <span m='2759690'>and</span> <span m='2760115'>x</span>
  <span m='2760540'>again.</span> <span m='2762240'>And</span> <span
  m='2762460'>now</span> <span m='2762860'>we're</span> <span
  m='2762980'>going</span> <span m='2763070'>to</span> <span
  m='2763160'>think</span> <span m='2763450'>of</span> <span
  m='2764510'>the</span> <span m='2764730'>observed</span> <span
  m='2765260'>data,</span> <span m='2765810'>little</span> <span
  m='2765940'>y,</span> <span m='2766343'>1</span> <span
  m='2767150'>through</span> <span m='2767390'>yn,</span> <span
  m='2768000'>is</span> <span m='2768200'>actually</span> <span
  m='2768640'>an</span> <span m='2768720'>observation</span> <span
  m='2769410'>of</span> <span m='2769560'>the</span> <span
  m='2769680'>random</span> <span m='2770070'>vector</span> <span
  m='2771100'>capital</span> <span m='2772050'>Y</span> <span
  m='2773520'>composed</span> <span m='2774400'>of</span> <span
  m='2774540'>random</span> <span m='2774900'>variables</span> <span
  m='2775350'>y1</span> <span m='2776220'>up</span> <span m='2776610'>to</span>
  <span m='2776900'>yn.</span> <span m='2779610'>And</span> <span
  m='2780760'>the</span> <span m='2781940'>expectation</span> <span
  m='2782950'>of</span> <span m='2783080'>this</span> <span
  m='2783310'>vector</span> <span m='2785120'>conditional</span> <span
  m='2786020'>on</span> <span m='2786720'>the</span> <span
  m='2786900'>values</span> <span m='2787240'>of</span> <span
  m='2787330'>the</span> <span m='2787440'>independent</span> <span
  m='2787960'>variables</span> <span m='2788740'>and</span> <span
  m='2788940'>their</span> <span m='2789080'>regression</span> <span
  m='2789430'>parameters</span> <span m='2789960'>given</span> <span
  m='2790210'>by</span> <span m='2790400'>x</span> <span
  m='2790680'>beta,</span> <span m='2791140'>so</span> <span
  m='2792520'>the</span> <span m='2793940'>dependent</span> <span
  m='2794520'>variable</span> <span m='2795550'>vector</span> <span
  m='2796490'>has</span> <span m='2797730'>expectation</span> <span
  m='2798640'>given</span> <span m='2799010'>by</span> <span
  m='2800180'>the</span> <span m='2800290'>product</span> <span
  m='2800880'>of</span> <span m='2800980'>the</span> <span
  m='2801070'>independent</span> <span m='2801460'>variables</span> <span
  m='2801770'>matrix</span> <span m='2802230'>times</span> <span
  m='2802630'>the</span> <span m='2802890'>regression</span> <span
  m='2803340'>parameters.</span> </p><p><span m='2804750'>And</span> <span
  m='2804940'>the</span> <span m='2805030'>covariance</span> <span
  m='2805650'>matrix</span> <span m='2806070'>of</span> <span
  m='2806200'>y</span> <span m='2807480'>given</span> <span m='2807720'>x</span>
  <span m='2808170'>and beta</span> <span m='2808425'>is</span> <span
  m='2808680'>sigma</span> <span m='2809010'>squared</span> <span
  m='2809380'>times</span> <span m='2810110'>the</span> <span
  m='2810380'>identity</span> <span m='2810930'>matrix,</span> <span
  m='2811790'>the</span> <span m='2811920'>n</span> <span
  m='2812080'>dimensional</span> <span m='2812870'>identity</span> <span
  m='2813360'>matrix.</span> <span m='2814330'>So</span> <span
  m='2814450'>the</span> <span m='2814600'>identity</span> <span
  m='2815060'>matrix</span> <span m='2816010'>has</span> <span
  m='2816210'>1's</span> <span m='2816560'>along</span> <span
  m='2816830'>the</span> <span m='2816920'>diagonal</span> <span
  m='2817940'>n</span> <span m='2818120'>dimensional</span> <span
  m='2818620'>and</span> <span m='2818750'>0's</span> <span
  m='2819110'>off</span> <span m='2819330'>the</span> <span
  m='2819410'>diagonal.</span> <span m='2820480'>So</span> <span
  m='2821470'>the</span> <span m='2823260'>variances</span> <span
  m='2824490'>of</span> <span m='2824680'>the</span> <span
  m='2824770'>y's</span> <span m='2825170'>are</span> <span
  m='2825640'>the</span> <span m='2825790'>diagonal</span> <span
  m='2826280'>entries,</span> <span m='2826980'>those</span> <span
  m='2827100'>are</span> <span m='2827190'>all</span> <span
  m='2827440'>the</span> <span m='2827530'>same,</span> <span
  m='2827830'>sigma</span> <span m='2828160'>squared.</span> <span
  m='2828830'>And</span> <span m='2829130'>the</span> <span
  m='2829230'>covariance</span> <span m='2830020'>between</span> <span
  m='2830390'>any</span> <span m='2830630'>two</span> <span
  m='2831230'>are</span> <span m='2832580'>equal</span> <span
  m='2832820'>to</span> <span m='2832890'>0</span> <span
  m='2833430'>conditional.</span> </p><p><span m='2841530'>OK,</span> <span
  m='2841740'>now</span> <span m='2841920'>the</span> <span
  m='2842010'>Gauss</span> <span m='2842280'>Markov</span> <span
  m='2842720'>theorem.</span> <span m='2845260'>This</span> <span
  m='2845390'>is</span> <span m='2847250'>a</span> <span
  m='2847570'>terrific</span> <span m='2848080'>result</span> <span
  m='2849110'>in</span> <span m='2849570'>linear</span> <span
  m='2850070'>models</span> <span m='2850990'>theory.</span> <span
  m='2851790'>And</span> <span m='2852080'>it's</span> <span
  m='2852880'>terrific</span> <span m='2853470'>in</span> <span
  m='2853620'>terms</span> <span m='2853980'>of</span> <span
  m='2854330'>the</span> <span m='2854420'>mathematical</span> <span
  m='2855400'>content</span> <span m='2856040'>of</span> <span
  m='2856220'>it.</span> <span m='2857790'>I</span> <span
  m='2858100'>think</span> <span m='2858330'>it's--</span> <span
  m='2860740'>for</span> <span m='2860950'>a</span> <span
  m='2860990'>math</span> <span m='2861340'>class,</span> <span
  m='2861700'>it's</span> <span m='2861830'>really</span> <span
  m='2862600'>a</span> <span m='2862810'>nice</span> <span
  m='2863300'>theorem</span> <span m='2863850'>to</span> <span
  m='2864540'>introduce</span> <span m='2865020'>you</span> <span
  m='2865160'>to</span> <span m='2865570'>and</span> <span
  m='2866390'>highlight</span> <span m='2866910'>the</span> <span
  m='2867010'>power</span> <span m='2868010'>of,</span> <span
  m='2871010'>I</span> <span m='2871110'>guess,</span> <span
  m='2871310'>results</span> <span m='2871760'>that</span> <span
  m='2872000'>can</span> <span m='2872160'>arise</span> <span
  m='2872750'>from</span> <span m='2874000'>applying</span> <span
  m='2874410'>the</span> <span m='2874540'>theory.</span> </p><p><span
  m='2875570'>And</span> <span m='2875770'>so</span> <span m='2878790'>to</span>
  <span m='2879070'>set</span> <span m='2879260'>this</span> <span
  m='2879440'>theorem</span> <span m='2879740'>up,</span> <span
  m='2879950'>we</span> <span m='2880120'>want</span> <span
  m='2880320'>to</span> <span m='2880390'>think</span> <span
  m='2880620'>about</span> <span m='2882390'>trying</span> <span
  m='2883130'>to</span> <span m='2883270'>estimate</span> <span
  m='2883970'>some</span> <span m='2885020'>function</span> <span
  m='2885710'>of</span> <span m='2885950'>the</span> <span
  m='2886150'>regression</span> <span m='2886560'>parameters.</span> <span
  m='2887770'>And</span> <span m='2887950'>so</span> <span
  m='2888170'>OK,</span> <span m='2889010'>our</span> <span
  m='2889140'>problem</span> <span m='2889830'>is</span> <span
  m='2891470'>with</span> <span m='2892130'>ordinary</span> <span
  m='2892500'>least</span> <span m='2892690'>squares--</span> <span
  m='2894060'>it</span> <span m='2894130'>was,</span> <span
  m='2894410'>how</span> <span m='2894560'>do</span> <span m='2894640'>we</span>
  <span m='2894740'>specify</span> <span m='2895300'>the</span> <span
  m='2895410'>regression</span> <span m='2895830'>parameters,</span> <span
  m='2896300'>beta</span> <span m='2896570'>1</span> <span
  m='2896770'>through</span> <span m='2896930'>beta</span> <span
  m='2897190'>p?</span> <span m='2898180'>Let's</span> <span
  m='2898420'>consider</span> <span m='2899450'>a</span> <span
  m='2899640'>general</span> <span m='2902550'>target</span> <span
  m='2902960'>of</span> <span m='2903050'>interest,</span> <span
  m='2903510'>which</span> <span m='2903680'>is</span> <span
  m='2903820'>a</span> <span m='2903900'>linear</span> <span
  m='2904440'>combination</span> <span m='2905220'>of</span> <span
  m='2905660'>the</span> <span m='2906090'>betas.</span> </p><p><span
  m='2906660'>So</span> <span m='2907530'>we</span> <span
  m='2907700'>want</span> <span m='2908080'>to</span> <span
  m='2909160'>predict</span> <span m='2910760'>a</span> <span
  m='2910890'>parameter,</span> <span m='2911580'>theta,</span> <span
  m='2911900'>which</span> <span m='2912090'>is</span> <span
  m='2912200'>some</span> <span m='2912570'>linear</span> <span
  m='2914510'>combination</span> <span m='2915560'>of</span> <span
  m='2915740'>the</span> <span m='2915850'>regression</span> <span
  m='2916340'>parameters.</span> <span m='2917530'>And</span> <span
  m='2918520'>because</span> <span m='2920590'>that</span> <span
  m='2920750'>linear</span> <span m='2921060'>combination</span> <span
  m='2921550'>of the</span> <span m='2921620'>regression</span> <span
  m='2922000'>parameters</span> <span m='2922360'>corresponds</span> <span
  m='2923200'>to</span> <span m='2924270'>the</span> <span
  m='2926920'>expectation</span> <span m='2928120'>of</span> <span
  m='2929220'>the</span> <span m='2929370'>response</span> <span
  m='2929920'>variable</span> <span m='2931020'>corresponding</span> <span
  m='2931440'>to</span> <span m='2931530'>a</span> <span
  m='2931580'>given</span> <span m='2931840'>row</span> <span m='2932090'>of
  the</span> <span m='2932200'>independent</span> <span
  m='2932610'>variables</span> <span m='2933000'>matrix,</span> <span
  m='2933970'>this</span> <span m='2934040'>is</span> <span
  m='2934140'>just</span> <span m='2934360'>a</span> <span
  m='2934450'>generalization</span> <span m='2935310'>of</span> <span
  m='2935390'>trying</span> <span m='2935690'>to</span> <span
  m='2935740'>estimate</span> <span m='2936200'>the</span> <span
  m='2936290'>means</span> <span m='2936770'>of</span> <span
  m='2937230'>the</span> <span m='2937840'>regression</span> <span
  m='2938300'>model</span> <span m='2939240'>at</span> <span
  m='2939780'>different</span> <span m='2940100'>points</span> <span
  m='2940430'>in</span> <span m='2940490'>the</span> <span
  m='2940580'>space,</span> <span m='2941410'>or</span> <span
  m='2941880'>to</span> <span m='2942010'>be</span> <span
  m='2942160'>estimating</span> <span m='2942820'>other</span> <span
  m='2943750'>quantities</span> <span m='2944410'>that</span> <span
  m='2944900'>might</span> <span m='2946060'>arise.</span> </p><p><span
  m='2946720'>So</span> <span m='2947370'>this is</span> <span
  m='2947600'>really</span> <span m='2947900'>a</span> <span
  m='2947940'>very</span> <span m='2948240'>general</span> <span
  m='2948700'>kind</span> <span m='2948940'>of</span> <span
  m='2949070'>thing</span> <span m='2949340'>to</span> <span
  m='2949490'>want</span> <span m='2949850'>to</span> <span
  m='2949970'>estimate.</span> <span m='2950540'>It</span> <span
  m='2950650'>certainly</span> <span m='2950890'>is</span> <span
  m='2950960'>appropriate</span> <span m='2951350'>for</span> <span
  m='2951490'>predictions.</span> <span m='2953560'>And</span> <span
  m='2955410'>if</span> <span m='2955830'>we</span> <span
  m='2956080'>consider</span> <span m='2956620'>the</span> <span
  m='2956850'>least</span> <span m='2957160'>squares</span> <span
  m='2957750'>estimate</span> <span m='2958530'>by</span> <span
  m='2958670'>just</span> <span m='2958910'>plugging</span> <span
  m='2959280'>in</span> <span m='2959800'>theta</span> <span
  m='2960040'>hat</span> <span m='2960430'>one</span> <span
  m='2960710'>through</span> <span m='2960920'>beta</span> <span
  m='2961170'>hat</span> <span m='2961525'>p,</span> <span
  m='2962200'>solve</span> <span m='2962760'>by</span> <span
  m='2962920'>the</span> <span m='2963040'>least</span> <span
  m='2963260'>squares--</span> <span m='2964260'>well,</span> <span
  m='2968120'>it</span> <span m='2968310'>turns</span> <span
  m='2968640'>out</span> <span m='2968990'>that</span> <span
  m='2970260'>those</span> <span m='2971770'>are</span> <span
  m='2972210'>an</span> <span m='2972390'>unbiased</span> <span
  m='2973230'>estimator</span> <span m='2973800'>of</span> <span
  m='2976170'>the</span> <span m='2976290'>parameter</span> <span
  m='2976900'>theta.</span> <span m='2978030'>So if</span> <span
  m='2978360'>we're</span> <span m='2978470'>trying</span> <span
  m='2978710'>to</span> <span m='2978760'>estimate</span> <span
  m='2979210'>this</span> <span m='2979460'>combination</span> <span
  m='2979770'>of</span> <span m='2980080'>these unknown</span> <span
  m='2980500'>parameters,</span> <span m='2981540'>you</span> <span
  m='2981650'>plug in</span> <span m='2981950'>the</span> <span
  m='2982030'>least</span> <span m='2982240'>squares</span> <span
  m='2982580'>estimate.</span> <span m='2983540'>You're</span> <span
  m='2983670'>going</span> <span m='2983780'>to</span> <span
  m='2983840'>get</span> <span m='2983960'>an</span> <span
  m='2984050'>estimator</span> <span m='2984360'>that's</span> <span
  m='2984920'>unbiased.</span> </p><p><span m='2987350'>Who</span> <span
  m='2987470'>can</span> <span m='2987640'>tell</span> <span
  m='2988030'>me</span> <span m='2988230'>what</span> <span
  m='2988480'>unbiased</span> <span m='2988950'>is?</span> <span
  m='2989330'>It's probably</span> <span m='2989723'>going to be</span> <span
  m='2990116'>a new</span> <span m='2990510'>concept</span> <span
  m='2990940'>for</span> <span m='2991330'>some</span> <span
  m='2991500'>people</span> <span m='2991967'>here.</span> <span
  m='2994770'>Anyone?</span> <span m='2996000'>OK,</span> <span
  m='2996260'>well</span> <span m='2996570'>it's</span> <span
  m='2996870'>a</span> <span m='2997270'>basic</span> <span
  m='2997800'>property</span> <span m='2998370'>of</span> <span
  m='2999150'>estimators</span> <span m='2999810'>in</span> <span
  m='2999950'>statistics</span> <span m='3000720'>where</span> <span
  m='3001500'>the</span> <span m='3001640'>expectation</span> <span
  m='3002630'>of</span> <span m='3002860'>this</span> <span
  m='3004100'>statistic</span> <span m='3004800'>is</span> <span
  m='3005350'>the</span> <span m='3005470'>true</span> <span
  m='3005700'>parameter.</span> <span m='3006720'>So</span> <span
  m='3007760'>it</span> <span m='3007870'>doesn't,</span> <span
  m='3008480'>on</span> <span m='3008700'>average,</span> <span
  m='3009720'>probabilistically,</span> <span m='3010590'>it</span> <span
  m='3010680'>doesn't</span> <span m='3010940'>over or</span> <span
  m='3011280'>underestimate</span> <span m='3011990'>the</span> <span
  m='3012380'>value.</span> <span m='3012860'>So</span> <span
  m='3013000'>that's</span> <span m='3013270'>what</span> <span
  m='3013740'>unbiased</span> <span m='3014240'>means.</span> </p><p><span
  m='3014740'>Now,</span> <span m='3014970'>it's</span> <span
  m='3015140'>also</span> <span m='3015510'>a</span> <span
  m='3015630'>linear</span> <span m='3016020'>estimator</span> <span
  m='3016520'>of</span> <span m='3016720'>theta</span> <span
  m='3017880'>in</span> <span m='3018050'>terms</span> <span
  m='3018400'>of</span> <span m='3019660'>this</span> <span
  m='3020010'>theta</span> <span m='3020370'>hat</span> <span
  m='3021270'>being</span> <span m='3022060'>a</span> <span
  m='3022150'>particular</span> <span m='3022680'>linear</span> <span
  m='3023090'>combination</span> <span m='3023810'>of</span> <span
  m='3023930'>the</span> <span m='3025640'>dependent</span> <span
  m='3025940'>variables.</span> <span m='3026750'>So</span> <span
  m='3027580'>with</span> <span m='3027790'>our</span> <span
  m='3027980'>original</span> <span m='3028690'>response</span> <span
  m='3029320'>variable</span> <span m='3030180'>y,</span> <span
  m='3031350'>in</span> <span m='3031390'>the</span> <span
  m='3032090'>case</span> <span m='3032360'>of</span> <span
  m='3032900'>y1</span> <span m='3033420'>through</span> <span
  m='3033600'>yn,</span> <span m='3035300'>this</span> <span
  m='3035590'>theta</span> <span m='3035800'>hat</span> <span
  m='3036080'>is</span> <span m='3036360'>simply</span> <span
  m='3037510'>a</span> <span m='3037630'>linear</span> <span
  m='3037950'>combination</span> <span m='3039010'>of</span> <span
  m='3039485'>all the</span> <span m='3039870'>y's.</span> <span
  m='3040530'>And</span> <span m='3041570'>now</span> <span
  m='3041740'>why</span> <span m='3041990'>is</span> <span
  m='3042090'>that</span> <span m='3042330'>true?</span> </p><p><span
  m='3042560'>Well,</span> <span m='3043150'>we</span> <span
  m='3043320'>know</span> <span m='3043540'>that</span> <span
  m='3043760'>beta</span> <span m='3044090'>hat,</span> <span
  m='3046620'>from</span> <span m='3046840'>the</span> <span
  m='3046920'>normal</span> <span m='3047640'>equations,</span> <span
  m='3049246'>is</span> <span m='3049640'>solved by</span> <span
  m='3049950'>x</span> <span m='3050180'>transpose</span> <span
  m='3050660'>x</span> <span m='3050870'>inverse</span> <span
  m='3051250'>x</span> <span m='3051410'>transpose</span> <span
  m='3051890'>y.</span> <span m='3052490'>So</span> <span
  m='3052650'>it's</span> <span m='3052770'>a</span> <span
  m='3052850'>linear</span> <span m='3053200'>transform</span> <span
  m='3054230'>of</span> <span m='3054560'>the</span> <span m='3054670'>y</span>
  <span m='3054910'>vector.</span> <span m='3056200'>So</span> <span
  m='3056330'>if</span> <span m='3056450'>we</span> <span
  m='3056590'>take</span> <span m='3056790'>a</span> <span
  m='3056850'>linear</span> <span m='3057160'>combination</span> <span
  m='3057780'>of</span> <span m='3057880'>those</span> <span
  m='3058160'>components,</span> <span m='3058960'>it's</span> <span
  m='3059030'>also</span> <span m='3059280'>another</span> <span
  m='3059560'>linear</span> <span m='3059860'>combination</span> <span
  m='3060480'>of</span> <span m='3060740'>the y</span> <span
  m='3060990'>vector.</span> <span m='3061490'>So</span> <span
  m='3062150'>this</span> <span m='3062330'>is</span> <span m='3062460'>a</span>
  <span m='3062550'>linear</span> <span m='3063480'>function</span> <span
  m='3064210'>of</span> <span m='3064670'>the</span> <span
  m='3065060'>underlying--</span> <span m='3066090'>of</span> <span
  m='3066450'>the</span> <span m='3066630'>response</span> <span
  m='3067610'>variables.</span> </p><p><span m='3068830'>Now,</span> <span
  m='3070460'>the</span> <span m='3070620'>Gauss</span> <span
  m='3070880'>Markov</span> <span m='3071400'>theorem</span> <span
  m='3071720'>says</span> <span m='3072130'>that,</span> <span
  m='3073820'>if</span> <span m='3074140'>the</span> <span
  m='3074280'>Gauss</span> <span m='3074400'>Markov</span> <span
  m='3074710'>assumptions</span> <span m='3075370'>apply,</span> <span
  m='3076350'>then</span> <span m='3076540'>the</span> <span
  m='3076670'>estimator</span> <span m='3077180'>theta</span> <span
  m='3077450'>that</span> <span m='3077640'>has</span> <span
  m='3078040'>the</span> <span m='3078290'>smallest</span> <span
  m='3078920'>variance</span> <span m='3080230'>amongst</span> <span
  m='3081380'>all</span> <span m='3083270'>linear</span> <span
  m='3083830'>unbiased</span> <span m='3084340'>estimators</span> <span
  m='3084880'>of</span> <span m='3084970'>theta.</span> <span
  m='3085750'>So</span> <span m='3086380'>it</span> <span
  m='3086530'>actually</span> <span m='3087525'>is</span> <span
  m='3087900'>like</span> <span m='3088120'>the</span> <span
  m='3088330'>optimal</span> <span m='3088620'>one,</span> <span
  m='3088910'>as</span> <span m='3089345'>long</span> <span
  m='3089780'>as</span> <span m='3090130'>this is</span> <span
  m='3090220'>our</span> <span m='3090780'>criteria.</span> <span
  m='3092070'>And</span> <span m='3092540'>this</span> <span
  m='3092710'>is</span> <span m='3092870'>really</span> <span
  m='3093150'>a</span> <span m='3093210'>very</span> <span
  m='3094150'>powerful</span> <span m='3094700'>result.</span> <span
  m='3096340'>And</span> <span m='3097950'>to</span> <span
  m='3098320'>prove</span> <span m='3098610'>it,</span> <span
  m='3099260'>it's</span> <span m='3099830'>very</span> <span
  m='3100120'>easy.</span> <span m='3102482'>Let's</span> <span
  m='3102928'>see.</span> </p><p><span m='3105610'>Actually,</span> <span
  m='3105830'>these</span> <span m='3106090'>notes</span> <span
  m='3106380'>are</span> <span m='3106470'>going</span> <span
  m='3106650'>to</span> <span m='3106710'>be</span> <span
  m='3106840'>distributed.</span> <span m='3107750'>So</span> <span
  m='3108010'>I'm</span> <span m='3108220'>going</span> <span
  m='3108590'>to</span> <span m='3109880'>go</span> <span
  m='3110060'>through</span> <span m='3110270'>this</span> <span
  m='3110520'>very,</span> <span m='3110910'>very</span> <span
  m='3111080'>quickly</span> <span m='3113890'>and</span> <span
  m='3114270'>come</span> <span m='3114470'>back</span> <span
  m='3114740'>to</span> <span m='3114870'>it</span> <span
  m='3114960'>later</span> <span m='3115250'>if</span> <span
  m='3115350'>we</span> <span m='3115460'>have</span> <span
  m='3115570'>more</span> <span m='3115780'>time.</span> <span
  m='3116300'>But</span> <span m='3118650'>you</span> <span
  m='3118820'>basically--</span> <span m='3119750'>the</span> <span
  m='3119950'>argument</span> <span m='3120520'>for</span> <span
  m='3120780'>the</span> <span m='3120960'>proof</span> <span
  m='3121330'>here</span> <span m='3121670'>is</span> <span
  m='3122210'>you</span> <span m='3122340'>consider</span> <span
  m='3123460'>another</span> <span m='3124240'>linear</span> <span
  m='3124630'>estimate,</span> <span m='3125530'>which</span> <span
  m='3125750'>is</span> <span m='3126090'>also</span> <span
  m='3126470'>an</span> <span m='3126550'>unbiased</span> <span
  m='3127070'>estimate.</span> <span m='3128410'>So</span> <span
  m='3128550'>let's</span> <span m='3128750'>consider</span> <span
  m='3129970'>a</span> <span m='3130090'>competitor</span> <span
  m='3130760'>to</span> <span m='3130860'>the</span> <span
  m='3130940'>least</span> <span m='3131160'>squares</span> <span
  m='3132300'>value</span> <span m='3133540'>and</span> <span
  m='3134200'>then</span> <span m='3134420'>look</span> <span
  m='3134670'>at</span> <span m='3134810'>the</span> <span
  m='3134930'>difference</span> <span m='3135700'>between</span> <span
  m='3136230'>that</span> <span m='3136490'>estimator</span> <span
  m='3137710'>and</span> <span m='3138851'>theta</span> <span
  m='3139272'>hat.</span> </p><p><span m='3140960'>And</span> <span
  m='3141280'>so</span> <span m='3142370'>that</span> <span
  m='3142610'>can</span> <span m='3142720'>be</span> <span
  m='3142920'>characterized</span> <span m='3144300'>as</span> <span
  m='3145370'>basically</span> <span m='3147130'>this</span> <span
  m='3147430'>vector,</span> <span m='3147880'>f</span> <span
  m='3148190'>transpose</span> <span m='3148850'>y.</span> <span
  m='3152010'>And</span> <span m='3153390'>this</span> <span
  m='3154150'>difference</span> <span m='3154810'>in</span> <span
  m='3154940'>the</span> <span m='3155070'>estimates</span> <span
  m='3155970'>must</span> <span m='3156270'>have</span> <span
  m='3156470'>expectation</span> <span m='3157460'>0.</span> <span
  m='3160030'>So</span> <span m='3160390'>basically,</span> <span m='3160790'>if
  we</span> <span m='3160950'>look</span> <span m='3161150'>at-- if</span> <span
  m='3161440'>theta</span> <span m='3161770'>tilde</span> <span
  m='3161980'>is</span> <span m='3162160'>unbiased,</span> <span
  m='3162790'>then</span> <span m='3163820'>this</span> <span
  m='3164710'>expression</span> <span m='3165240'>here</span> <span
  m='3165860'>is</span> <span m='3165990'>going</span> <span
  m='3166200'>to</span> <span m='3166260'>be</span> <span
  m='3166400'>equal</span> <span m='3166680'>to</span> <span
  m='3166790'>zero--</span> <span m='3167700'>which</span> <span
  m='3167920'>means</span> <span m='3168280'>that</span> <span
  m='3168540'>f,</span> <span m='3170580'>the</span> <span
  m='3171580'>difference</span> <span m='3171940'>in</span> <span
  m='3172020'>these</span> <span m='3172230'>two</span> <span
  m='3172460'>estimators,</span> <span m='3176880'>f</span> <span
  m='3177100'>defines</span> <span m='3177670'>the</span> <span
  m='3177750'>difference</span> <span m='3178070'>in</span> <span
  m='3178130'>the</span> <span m='3178220'>two</span> <span
  m='3178410'>estimators,</span> <span m='3179230'>has</span> <span
  m='3179470'>to</span> <span m='3179530'>be</span> <span
  m='3179680'>orthogonal</span> <span m='3180240'>to</span> <span
  m='3180340'>the</span> <span m='3180440'>column</span> <span
  m='3180780'>space</span> <span m='3181140'>of</span> <span
  m='3181230'>x.</span> </p><p><span m='3182120'>And</span> <span
  m='3184190'>with</span> <span m='3184430'>this</span> <span
  m='3185940'>result,</span> <span m='3187680'>one</span> <span
  m='3187990'>then</span> <span m='3192930'>uses</span> <span
  m='3193350'>this</span> <span m='3193590'>orthogonality</span> <span
  m='3195045'>of f</span> <span m='3195430'>and</span> <span
  m='3195870'>d</span> <span m='3196760'>to</span> <span
  m='3196960'>evaluate</span> <span m='3197530'>the</span> <span
  m='3197990'>variance</span> <span m='3198610'>of</span> <span
  m='3198770'>theta</span> <span m='3199090'>tilde.</span> <span
  m='3200040'>And</span> <span m='3200280'>in</span> <span
  m='3200440'>this</span> <span m='3200790'>proof,</span> <span
  m='3202090'>the</span> <span m='3202470'>mathematical</span> <span
  m='3203320'>argument</span> <span m='3203760'>here</span> <span
  m='3204120'>is</span> <span m='3205310'>really</span> <span
  m='3206340'>something--</span> <span m='3207640'>I</span> <span
  m='3207880'>should</span> <span m='3208200'>put</span> <span
  m='3208460'>some</span> <span m='3208570'>asterisks</span> <span
  m='3209535'>on a</span> <span m='3209880'>few</span> <span
  m='3210050'>lines</span> <span m='3210420'>here.</span> <span
  m='3211140'>This</span> <span m='3211540'>expression</span> <span
  m='3212150'>here</span> <span m='3213280'>is</span> <span
  m='3213440'>actually</span> <span m='3213780'>very</span> <span
  m='3214120'>important.</span> <span m='3215850'>We're</span> <span
  m='3216010'>basically</span> <span m='3216400'>looking</span> <span
  m='3216800'>at</span> <span m='3218560'>the</span> <span
  m='3219260'>decomposition</span> <span m='3220120'>of</span> <span
  m='3220250'>the</span> <span m='3220340'>variance</span> <span
  m='3221210'>to</span> <span m='3221330'>be</span> <span m='3221470'>the</span>
  <span m='3221570'>variance</span> <span m='3222220'>of</span> <span
  m='3222960'>B</span> <span m='3223250'>transpose</span> <span
  m='3223850'>y,</span> <span m='3224380'>which</span> <span
  m='3224620'>is</span> <span m='3224820'>the</span> <span
  m='3224900'>variance</span> <span m='3225540'>of</span> <span
  m='3226530'>the</span> <span m='3226670'>sum</span> <span
  m='3226890'>of</span> <span m='3227010'>these</span> <span
  m='3227260'>two</span> <span m='3227440'>random</span> <span
  m='3227750'>variables.</span> </p><p><span m='3229350'>So</span> <span
  m='3230350'>the</span> <span m='3230460'>page</span> <span
  m='3230850'>before</span> <span m='3231980'>basically</span> <span
  m='3233420'>defined</span> <span m='3234010'>d</span> <span
  m='3234470'>and</span> <span m='3234940'>f</span> <span m='3235880'>such
  that</span> <span m='3236070'>this</span> <span m='3236260'>is</span> <span
  m='3236400'>true.</span> <span m='3237560'>Now</span> <span
  m='3237870'>when</span> <span m='3238160'>you</span> <span
  m='3238310'>consider</span> <span m='3238690'>the</span> <span
  m='3239080'>variance</span> <span m='3239720'>of</span> <span
  m='3239900'>a</span> <span m='3239970'>sum,</span> <span
  m='3242370'>it's</span> <span m='3242590'>not</span> <span
  m='3242850'>the</span> <span m='3242950'>sum</span> <span
  m='3243200'>of</span> <span m='3243260'>the</span> <span
  m='3243340'>variances.</span> <span m='3245870'>It's</span> <span
  m='3246080'>the</span> <span m='3246380'>sum</span> <span
  m='3246710'>of</span> <span m='3246760'>the</span> <span
  m='3246840'>variances</span> <span m='3247490'>plus</span> <span
  m='3249250'>twice</span> <span m='3249730'>the</span> <span
  m='3249850'>sum</span> <span m='3250080'>of</span> <span
  m='3250160'>the</span> <span m='3250230'>covariances.</span> <span
  m='3252170'>And</span> <span m='3252380'>so</span> <span
  m='3253980'>when</span> <span m='3254220'>you</span> <span
  m='3254560'>are</span> <span m='3255400'>calculating</span> <span
  m='3257410'>variances</span> <span m='3258795'>of</span> <span
  m='3259270'>sums</span> <span m='3259630'>of</span> <span
  m='3259770'>random</span> <span m='3260070'>variables,</span> <span
  m='3260450'>you</span> <span m='3260550'>have</span> <span
  m='3260680'>to</span> <span m='3260950'>really</span> <span
  m='3261230'>keep</span> <span m='3261430'>track</span> <span
  m='3262630'>of</span> <span m='3262730'>the</span> <span
  m='3262760'>covariance</span> <span m='3263085'>terms.</span> </p><p><span
  m='3264180'>In</span> <span m='3264350'>this</span> <span
  m='3264560'>case,</span> <span m='3265000'>this</span> <span
  m='3265330'>argument</span> <span m='3265790'>shows</span> <span
  m='3266200'>that</span> <span m='3266560'>the</span> <span
  m='3266840'>covariance</span> <span m='3267280'>terms are,</span> <span
  m='3267710'>in fact,</span> <span m='3268050'>0,</span> <span
  m='3269320'>and</span> <span m='3269490'>you</span> <span m='3269600'>get
  the</span> <span m='3269930'>result</span> <span m='3270270'>popping</span>
  <span m='3270690'>out.</span> <span m='3272804'>But</span> <span
  m='3273230'>that's</span> <span m='3273540'>really</span> <span
  m='3273880'>a--</span> <span m='3277520'>in</span> <span m='3277830'>an</span>
  <span m='3277970'>econometrics</span> <span m='3278620'>class,</span> <span
  m='3278890'>they'll</span> <span m='3279340'>talk</span> <span
  m='3279550'>about</span> <span m='3279820'>blue</span> <span
  m='3280150'>estimates</span> <span m='3282250'>of</span> <span
  m='3282615'>regression,</span> <span m='3282980'>or</span> <span
  m='3283200'>the</span> <span m='3283270'>blue</span> <span
  m='3283500'>property</span> <span m='3284050'>of</span> <span m='3284310'>the
  least</span> <span m='3284440'>squares</span> <span
  m='3284730'>estimates.</span> <span m='3285100'>That's</span> <span
  m='3285370'>where</span> <span m='3285630'>that comes</span> <span
  m='3285800'>from.</span> <span m='3287260'>All</span> <span
  m='3287340'>right,</span> <span m='3287560'>so</span> <span
  m='3288120'>let's</span> <span m='3288440'>now</span> <span
  m='3289080'>consider</span> <span m='3289490'>generalizing</span> <span
  m='3291670'>from</span> <span m='3291920'>Gauss</span> <span
  m='3292220'>Markov</span> <span m='3293090'>to</span> <span
  m='3294780'>allow</span> <span m='3295120'>for</span> <span
  m='3297940'>unequal</span> <span m='3298510'>variances</span> <span
  m='3300290'>and</span> <span m='3302680'>possibly</span> <span
  m='3303170'>correlated</span> <span m='3304660'>nonzero</span> <span
  m='3305310'>covariances</span> <span m='3306000'>between</span> <span
  m='3306720'>the</span> <span m='3307000'>components.</span> <span
  m='3308710'>And</span> <span m='3310550'>in</span> <span
  m='3310660'>this</span> <span m='3310870'>case,</span> <span
  m='3312300'>the</span> <span m='3312390'>regression</span> <span
  m='3312870'>model</span> <span m='3313150'>has</span> <span
  m='3313360'>the</span> <span m='3313470'>same</span> <span
  m='3313770'>linear</span> <span m='3314170'>set</span> <span
  m='3314400'>up.</span> <span m='3314560'>The</span> <span
  m='3314670'>only</span> <span m='3314880'>difference</span> <span
  m='3315310'>is</span> <span m='3315570'>the</span> <span
  m='3315700'>expectation</span> <span m='3316970'>of</span> <span
  m='3317100'>the</span> <span m='3317180'>residual</span> <span
  m='3317660'>vector</span> <span m='3318800'>is</span> <span
  m='3319060'>still</span> <span m='3319380'>0.</span> <span
  m='3319730'>But</span> <span m='3319910'>the</span> <span
  m='3320870'>covariance</span> <span m='3321550'>matrix</span> <span
  m='3322000'>of</span> <span m='3322090'>the</span> <span
  m='3322170'>residual</span> <span m='3322640'>vector</span> <span
  m='3322920'>is</span> <span m='3323200'>sigma</span> <span
  m='3323550'>squared,</span> <span m='3325280'>a</span> <span
  m='3325530'>single</span> <span m='3325890'>parameter</span> <span
  m='3326330'>times,</span> <span m='3326690'>let's say</span> <span
  m='3327260'>capital</span> <span m='3327870'>sigma.</span> </p><p><span
  m='3329850'>And</span> <span m='3331330'>we'll</span> <span
  m='3331510'>assume</span> <span m='3331840'>here</span> <span
  m='3332080'>that</span> <span m='3332300'>this</span> <span
  m='3332510'>capital</span> <span m='3332990'>sigma</span> <span
  m='3333530'>matrix</span> <span m='3335100'>is</span> <span
  m='3335560'>a</span> <span m='3335865'>known</span> <span m='3336170'>n</span>
  <span m='3336340'>by</span> <span m='3336530'>n</span> <span
  m='3336800'>positive</span> <span m='3337300'>definite</span> <span
  m='3338550'>matrix</span> <span m='3339000'>specifying</span> <span
  m='3339520'>relative</span> <span m='3339890'>variances</span> <span
  m='3340450'>and</span> <span m='3340500'>correlations</span> <span
  m='3341240'>between</span> <span m='3341690'>the</span> <span
  m='3341810'>observations.</span> <span m='3347580'>OK.</span> <span
  m='3351500'>Well,</span> <span m='3352300'>in</span> <span
  m='3352470'>order</span> <span m='3352630'>to</span> <span
  m='3352770'>solve</span> <span m='3353630'>for</span> <span
  m='3355890'>regression</span> <span m='3356360'>estimates</span> <span
  m='3359392'>under</span> <span m='3359730'>these</span> <span
  m='3361800'>generalized</span> <span m='3362620'>Gauss</span> <span
  m='3362880'>Markov</span> <span m='3363290'>assumptions,</span> <span
  m='3364400'>we</span> <span m='3364500'>can</span> <span
  m='3364530'>transform</span> <span m='3365300'>the</span> <span
  m='3365420'>data</span> <span m='3366290'>yx</span> <span
  m='3367460'>to</span> <span m='3367850'>y</span> <span m='3368220'>star</span>
  <span m='3368750'>equals</span> <span m='3369100'>sigma</span> <span
  m='3369570'>to the</span> <span m='3370060'>minus</span> <span
  m='3370360'>1/2</span> <span m='3370720'>y</span> <span m='3371560'>and</span>
  <span m='3371790'>x</span> <span m='3373170'>to</span> <span
  m='3373260'>x</span> <span m='3373500'>star,</span> <span
  m='3374070'>which</span> <span m='3374240'>is</span> <span
  m='3374420'>sigma</span> <span m='3374550'>to the minus</span> <span
  m='3374790'>1/2</span> <span m='3375110'>x.</span> </p><p><span
  m='3377670'>And</span> <span m='3378700'>this</span> <span
  m='3379080'>model</span> <span m='3380880'>then</span> <span
  m='3381210'>becomes</span> <span m='3382700'>a</span> <span
  m='3382810'>model,</span> <span m='3383450'>a</span> <span
  m='3383570'>linear</span> <span m='3383990'>regression</span> <span
  m='3384470'>model,</span> <span m='3384850'>in</span> <span
  m='3385020'>terms</span> <span m='3385350'>of</span> <span
  m='3385530'>y</span> <span m='3385880'>star</span> <span
  m='3386800'>and</span> <span m='3386960'>x</span> <span
  m='3387190'>star.</span> <span m='3389640'>We're</span> <span
  m='3389800'>basically</span> <span m='3390350'>multiplying</span> <span
  m='3390890'>this</span> <span m='3391060'>regression</span> <span
  m='3391500'>model</span> <span m='3391840'>by</span> <span
  m='3392930'>sigma</span> <span m='3393460'>to</span> <span
  m='3393720'>the</span> <span m='3393810'>minus</span> <span
  m='3394110'>1/2</span> <span m='3394910'>across.</span> <span
  m='3396320'>And</span> <span m='3397310'>epsilon</span> <span
  m='3397790'>star</span> <span m='3399700'>actually</span> <span
  m='3400220'>has</span> <span m='3401640'>a</span> <span
  m='3402050'>covariance</span> <span m='3402990'>matrix</span> <span
  m='3403700'>equal</span> <span m='3404020'>to</span> <span
  m='3404170'>sigma</span> <span m='3404470'>squared</span> <span
  m='3404840'>times</span> <span m='3405120'>the</span> <span
  m='3405240'>identity.</span> <span m='3405770'>So</span> <span
  m='3406670'>if</span> <span m='3406940'>we</span> <span
  m='3407170'>just</span> <span m='3407420'>take</span> <span
  m='3407640'>a</span> <span m='3408450'>linear</span> <span
  m='3408870'>transformation</span> <span m='3410380'>of</span> <span
  m='3410730'>the</span> <span m='3411100'>original</span> <span
  m='3411700'>data,</span> <span m='3413620'>we</span> <span
  m='3413820'>get</span> <span m='3415370'>a</span> <span
  m='3415490'>representation</span> <span m='3416260'>of</span> <span
  m='3416320'>the</span> <span m='3416400'>regression</span> <span
  m='3416810'>model</span> <span m='3417130'>that</span> <span
  m='3417250'>satisfies</span> <span m='3417890'>the</span> <span
  m='3418050'>original</span> <span m='3418480'>Gauss</span> <span
  m='3418810'>Markov</span> <span m='3419240'>assumptions.</span> </p><p><span
  m='3420880'>And</span> <span m='3421000'>what</span> <span
  m='3421130'>we</span> <span m='3421240'>had</span> <span m='3421520'>to</span>
  <span m='3421580'>do</span> <span m='3421890'>was</span> <span
  m='3422710'>basically</span> <span m='3423410'>do</span> <span
  m='3423610'>a</span> <span m='3423640'>linear</span> <span
  m='3423950'>transformation</span> <span m='3424750'>that</span> <span
  m='3424810'>makes</span> <span m='3425090'>the</span> <span
  m='3425360'>response</span> <span m='3425920'>variables</span> <span
  m='3427100'>all</span> <span m='3427340'>have</span> <span
  m='3428270'>constant</span> <span m='3428800'>variance</span> <span
  m='3429270'>and</span> <span m='3429640'>be</span> <span
  m='3430030'>uncorrelated.</span> <span m='3433980'>So</span> <span
  m='3434170'>with</span> <span m='3434320'>that,</span> <span
  m='3436640'>we</span> <span m='3436830'>then</span> <span
  m='3437200'>have</span> <span m='3437510'>the</span> <span
  m='3437620'>least</span> <span m='3437830'>squares</span> <span
  m='3438170'>estimate</span> <span m='3438530'>of</span> <span
  m='3438640'>beta</span> <span m='3439740'>is</span> <span
  m='3441280'>the</span> <span m='3441430'>least</span> <span
  m='3441620'>squares,</span> <span m='3442250'>the</span> <span
  m='3442380'>ordinary</span> <span m='3442750'>least</span> <span
  m='3442940'>squares,</span> <span m='3443850'>in</span> <span
  m='3443960'>terms</span> <span m='3444180'>of</span> <span
  m='3444280'>y</span> <span m='3444510'>star</span> <span m='3444830'>and
  x</span> <span m='3445190'>star.</span> <span m='3446250'>And</span> <span
  m='3446480'>so</span> <span m='3446990'>plugging</span> <span
  m='3447470'>that</span> <span m='3447710'>in,</span> <span m='3449270'>we
  then</span> <span m='3449740'>have</span> <span m='3449880'>x</span> <span
  m='3450090'>star</span> <span m='3450410'>transpose</span> <span
  m='3450900'>x</span> <span m='3451210'>star</span> <span
  m='3451910'>inverse</span> <span m='3452360'>x star</span> <span
  m='3452740'>transpose</span> <span m='3453140'>y</span> <span
  m='3453360'>star.</span> <span m='3454310'>And if</span> <span
  m='3454480'>you</span> <span m='3454580'>multiply</span> <span
  m='3455110'>through,</span> <span m='3455600'>that's</span> <span
  m='3455850'>how</span> <span m='3456410'>the</span> <span
  m='3456710'>formula</span> <span m='3456920'>changes.</span> </p><p><span
  m='3461600'>So</span> <span m='3461800'>this</span> <span
  m='3462090'>formula</span> <span m='3463490'>characterizing</span> <span
  m='3464210'>the</span> <span m='3464600'>least</span> <span
  m='3464810'>squares</span> <span m='3465140'>estimate</span> <span
  m='3465600'>under</span> <span m='3465930'>this</span> <span
  m='3466220'>generalized</span> <span m='3466730'>set</span> <span
  m='3466900'>of</span> <span m='3466980'>assumptions</span> <span
  m='3468850'>highlights</span> <span m='3470430'>what</span> <span
  m='3472250'>you</span> <span m='3472350'>need</span> <span
  m='3472570'>to</span> <span m='3472660'>do</span> <span m='3473180'>to</span>
  <span m='3474900'>be</span> <span m='3475010'>able</span> <span
  m='3475150'>to</span> <span m='3475200'>apply</span> <span
  m='3475510'>that</span> <span m='3475770'>theorem.</span> <span
  m='3476900'>So</span> <span m='3478140'>with</span> <span
  m='3478890'>response</span> <span m='3479670'>values</span> <span
  m='3480480'>that</span> <span m='3480620'>have</span> <span
  m='3480830'>very</span> <span m='3481150'>large</span> <span
  m='3481500'>variances,</span> <span m='3483140'>you</span> <span
  m='3483280'>basically</span> <span m='3483730'>want</span> <span
  m='3484050'>to</span> <span m='3484440'>discount</span> <span
  m='3485040'>those</span> <span m='3486280'>by</span> <span
  m='3486830'>the</span> <span m='3486960'>sigma</span> <span
  m='3487240'>inverse.</span> <span m='3490275'>And</span> <span
  m='3491249'>that's</span> <span m='3492710'>part</span> <span
  m='3492940'>of</span> <span m='3492980'>the</span> <span m='3493070'>way
  in</span> <span m='3493400'>which these</span> <span
  m='3493730'>generalized</span> <span m='3494060'>least</span> <span
  m='3494280'>squares</span> <span m='3494810'>work.</span> <span
  m='3495940'>All</span> <span m='3496030'>right.</span> </p><p><span
  m='3497120'>So</span> <span m='3497270'>now</span> <span
  m='3497630'>let's</span> <span m='3497800'>turn</span> <span
  m='3498090'>to</span> <span m='3498730'>distribution</span> <span
  m='3499510'>theory</span> <span m='3499960'>for</span> <span
  m='3500120'>normal</span> <span m='3500670'>regression</span> <span
  m='3501240'>models.</span> <span m='3505480'>Let's</span> <span
  m='3505950'>assume</span> <span m='3506670'>that</span> <span
  m='3507200'>the</span> <span m='3507390'>residuals</span> <span
  m='3507990'>are</span> <span m='3508820'>normals</span> <span
  m='3509980'>with</span> <span m='3510180'>mean</span> <span
  m='3510430'>0</span> <span m='3510750'>and variance</span> <span
  m='3511225'>sigma</span> <span m='3511700'>squared.</span> <span
  m='3517880'>OK,</span> <span m='3518140'>the</span> <span
  m='3519040'>conditioning</span> <span m='3520060'>on</span> <span
  m='3520390'>the</span> <span m='3520760'>values</span> <span
  m='3521130'>of</span> <span m='3521220'>the</span> <span
  m='3521290'>independent</span> <span m='3521790'>variable,</span> <span
  m='3522360'>the</span> <span m='3522460'>y's,</span> <span
  m='3523210'>the</span> <span m='3523460'>response</span> <span
  m='3523920'>variables,</span> <span m='3524160'>are</span> <span
  m='3524240'>going</span> <span m='3524460'>to</span> <span
  m='3524510'>be</span> <span m='3524630'>independent</span> <span
  m='3526100'>over</span> <span m='3528750'>the</span> <span
  m='3528950'>index</span> <span m='3529330'>i.</span> <span
  m='3529970'>They're</span> <span m='3530100'>not</span> <span
  m='3530320'>going</span> <span m='3530490'>to</span> <span
  m='3530540'>be</span> <span m='3530690'>identically</span> <span
  m='3531290'>distributed</span> <span m='3531890'>because</span> <span
  m='3532160'>they</span> <span m='3532270'>have</span> <span
  m='3532470'>different</span> <span m='3532940'>meanings,</span> <span
  m='3534240'>mu</span> <span m='3534580'>i,</span> <span m='3534920'>for</span>
  <span m='3535160'>the</span> <span m='3536850'>dependent</span> <span
  m='3537230'>variable</span> <span m='3537460'>yi.</span> <span
  m='3538610'>But</span> <span m='3538720'>they</span> <span
  m='3538820'>will</span> <span m='3539040'>have</span> <span
  m='3539290'>a</span> <span m='3540160'>constant</span> <span
  m='3540650'>variance.</span> </p><p><span m='3542060'>And</span> <span
  m='3543720'>what</span> <span m='3543890'>we</span> <span
  m='3544000'>can</span> <span m='3544230'>do</span> <span m='3545360'>is</span>
  <span m='3547390'>basically</span> <span m='3548700'>condition</span> <span
  m='3549310'>on</span> <span m='3549500'>x</span> <span m='3550490'>beta</span>
  <span m='3550930'>and</span> <span m='3551190'>sigma</span> <span
  m='3551500'>squared</span> <span m='3553040'>and</span> <span
  m='3553330'>then</span> <span m='3553690'>represent</span> <span
  m='3554320'>this</span> <span m='3554560'>model</span> <span
  m='3555580'>in</span> <span m='3555820'>terms</span> <span
  m='3556500'>of</span> <span m='3557110'>the</span> <span
  m='3557250'>distribution</span> <span m='3558570'>of</span> <span
  m='3558870'>the</span> <span m='3559020'>epsilons.</span> <span
  m='3560280'>So</span> <span m='3560450'>if</span> <span
  m='3560530'>we're</span> <span m='3560640'>conditioning</span> <span
  m='3561230'>on</span> <span m='3561330'>x</span> <span m='3562140'>and</span>
  <span m='3562300'>beta,</span> <span m='3563140'>this</span> <span
  m='3563370'>x</span> <span m='3563640'>beta</span> <span m='3564390'>is</span>
  <span m='3564490'>a</span> <span m='3564560'>constant</span> <span
  m='3565720'>known.</span> <span m='3566395'>we've</span> <span
  m='3566660'>conditioned</span> <span m='3567060'>on it.</span> <span
  m='3567950'>And</span> <span m='3568660'>the</span> <span
  m='3568830'>remaining</span> <span m='3569290'>uncertainty</span> <span
  m='3569860'>is</span> <span m='3570000'>in</span> <span m='3570120'>the</span>
  <span m='3570200'>residual</span> <span m='3570640'>vector,</span> <span
  m='3571520'>which</span> <span m='3571720'>is</span> <span
  m='3571850'>assumed</span> <span m='3572300'>to</span> <span
  m='3572390'>be</span> <span m='3575050'>all</span> <span
  m='3576270'>independent</span> <span m='3576590'>and</span> <span
  m='3576910'>identically</span> <span m='3577320'>distributed</span> <span
  m='3577780'>normal</span> <span m='3578080'>random</span> <span
  m='3578580'>variables.</span> </p><p><span m='3579220'>Now,</span> <span
  m='3579340'>this</span> <span m='3579520'>is</span> <span
  m='3579580'>the</span> <span m='3579680'>first</span> <span
  m='3580000'>time</span> <span m='3580280'>you'll</span> <span
  m='3580480'>see</span> <span m='3580680'>this</span> <span
  m='3580890'>notation,</span> <span m='3582590'>capital</span> <span
  m='3582980'>N</span> <span m='3583200'>sub</span> <span
  m='3583420'>little</span> <span m='3583680'>n,</span> <span
  m='3585240'>for</span> <span m='3585650'>a</span> <span
  m='3585880'>random</span> <span m='3587430'>vector.</span> <span
  m='3588400'>It's</span> <span m='3588860'>a</span> <span
  m='3589310'>multivariate</span> <span m='3590170'>normal</span> <span
  m='3591030'>random</span> <span m='3591380'>variable</span> <span
  m='3593090'>where</span> <span m='3593540'>you</span> <span
  m='3593720'>consider</span> <span m='3594180'>an n</span> <span
  m='3594410'>vector</span> <span m='3595620'>where</span> <span
  m='3595870'>each</span> <span m='3596140'>component</span> <span
  m='3597100'>is</span> <span m='3597540'>normally</span> <span
  m='3597920'>distributed,</span> <span m='3599340'>with</span> <span
  m='3599620'>mean</span> <span m='3600050'>given</span> <span
  m='3600340'>by</span> <span m='3600580'>some</span> <span
  m='3601910'>corresponding</span> <span m='3602430'>mean</span> <span
  m='3602650'>vector,</span> <span m='3604090'>and</span> <span
  m='3604320'>a</span> <span m='3604410'>covariance</span> <span
  m='3605000'>matrix</span> <span m='3605510'>given</span> <span
  m='3605780'>by</span> <span m='3607050'>a</span> <span
  m='3607485'>covariance</span> <span m='3608040'>matrix.</span> <span
  m='3610200'>In</span> <span m='3610400'>terms</span> <span
  m='3610800'>of</span> <span m='3611980'>independent</span> <span
  m='3612690'>and</span> <span m='3612860'>identically</span> <span
  m='3613430'>distributed</span> <span m='3614470'>values,</span> <span
  m='3616150'>the</span> <span m='3617440'>probability</span> <span
  m='3618080'>structure</span> <span m='3618470'>here</span> <span
  m='3618680'>is</span> <span m='3618790'>totally</span> <span
  m='3619160'>well-defined.</span> </p><p><span m='3621250'>Anyone</span> <span
  m='3621590'>here</span> <span m='3621780'>who's</span> <span
  m='3621890'>taken</span> <span m='3622140'>a</span> <span
  m='3622220'>beginning</span> <span m='3622600'>probability</span> <span
  m='3623950'>class</span> <span m='3624760'>knows</span> <span
  m='3625170'>what</span> <span m='3625410'>the</span> <span
  m='3625490'>density</span> <span m='3625900'>function</span> <span
  m='3626240'>is</span> <span m='3626420'>for</span> <span
  m='3626550'>this</span> <span m='3626800'>multivariate</span> <span
  m='3627320'>normal</span> <span m='3627690'>distribution</span> <span
  m='3628340'>because</span> <span m='3628600'>it's</span> <span
  m='3628770'>the</span> <span m='3628850'>product</span> <span
  m='3629320'>of</span> <span m='3629440'>the</span> <span
  m='3629940'>independent</span> <span m='3631730'>density</span> <span
  m='3632180'>functions</span> <span m='3632690'>for</span> <span
  m='3633250'>the</span> <span m='3633350'>independent</span> <span
  m='3633810'>components,</span> <span m='3634960'>because</span> <span
  m='3635140'>they're</span> <span m='3635260'>all</span> <span
  m='3635420'>independent</span> <span m='3635820'>random</span> <span
  m='3636040'>variables.</span> <span m='3637170'>So</span> <span
  m='3637330'>this</span> <span m='3637540'>multivariate</span> <span
  m='3638280'>normal</span> <span m='3638830'>random</span> <span
  m='3639270'>vector</span> <span m='3640190'>has</span> <span
  m='3640650'>a</span> <span m='3641360'>density</span> <span
  m='3641800'>function</span> <span m='3642860'>which</span> <span
  m='3643400'>you</span> <span m='3643530'>can</span> <span
  m='3643690'>write</span> <span m='3644250'>down,</span> <span
  m='3645100'>given</span> <span m='3645390'>this is</span> <span
  m='3645780'>your</span> <span m='3646020'>first</span> <span
  m='3646310'>probability</span> <span m='3646788'>class.</span> </p><p><span
  m='3651090'>OK,</span> <span m='3651450'>here</span> <span
  m='3651710'>I'm</span> <span m='3651800'>just</span> <span
  m='3652010'>highlighting</span> <span m='3653035'>or</span> <span
  m='3654430'>defining</span> <span m='3654960'>the</span> <span
  m='3655070'>new</span> <span m='3655310'>vector</span> <span
  m='3655750'>for</span> <span m='3656040'>the</span> <span
  m='3656160'>means</span> <span m='3656840'>of</span> <span
  m='3657030'>the</span> <span m='3659050'>cases</span> <span
  m='3659980'>of</span> <span m='3660330'>the</span> <span
  m='3660450'>data.</span> <span m='3661670'>And</span> <span
  m='3662080'>the</span> <span m='3662170'>covariance</span> <span
  m='3662780'>matrix</span> <span m='3663710'>sigma</span> <span
  m='3664790'>is</span> <span m='3665150'>this</span> <span
  m='3665410'>diagonal</span> <span m='3665890'>matrix.</span> <span
  m='3668940'>And</span> <span m='3669390'>so</span> <span
  m='3670880'>basically</span> <span m='3671070'>sigma</span> <span
  m='3671520'>ij</span> <span m='3672850'>is</span> <span
  m='3674790'>equal</span> <span m='3675350'>to</span> <span
  m='3678510'>sigma</span> <span m='3678730'>squared</span> <span
  m='3679080'>times</span> <span m='3679450'>the</span> <span
  m='3679580'>Kronecker</span> <span m='3680510'>delta</span> <span
  m='3682070'>for</span> <span m='3682110'>the</span> <span
  m='3682570'>ij</span> <span m='3682720'>element.</span> <span
  m='3683790'>Now</span> <span m='3686400'>what</span> <span
  m='3686580'>we</span> <span m='3686690'>want</span> <span
  m='3686890'>to</span> <span m='3686990'>do</span> <span m='3687500'>is,</span>
  <span m='3687960'>under</span> <span m='3688210'>the</span> <span
  m='3688370'>assumptions</span> <span m='3688940'>of</span> <span
  m='3689800'>normally</span> <span m='3690250'>distributed</span> <span
  m='3692660'>residuals,</span> <span m='3693845'>to</span> <span
  m='3695180'>solve</span> <span m='3695600'>for</span> <span
  m='3696150'>the</span> <span m='3696290'>distribution</span> <span
  m='3697040'>of</span> <span m='3697270'>the</span> <span
  m='3697370'>least</span> <span m='3697580'>squares</span> <span
  m='3697990'>estimators.</span> <span m='3698700'>We</span> <span
  m='3698790'>want</span> <span m='3699010'>to know,</span> <span
  m='3699060'>basically,</span> <span m='3700630'>what</span> <span
  m='3700820'>kind</span> <span m='3700950'>of</span> <span
  m='3701020'>distribution</span> <span m='3701550'>does</span> <span
  m='3701730'>it</span> <span m='3701860'>have?</span> </p><p><span
  m='3702890'>Because</span> <span m='3703270'>what</span> <span
  m='3703450'>we</span> <span m='3703560'>want</span> <span
  m='3703680'>to</span> <span m='3703720'>be</span> <span
  m='3703830'>able</span> <span m='3703980'>to</span> <span
  m='3704080'>do</span> <span m='3704360'>is</span> <span m='3704870'>to</span>
  <span m='3704970'>determine</span> <span m='3705460'>whether</span> <span
  m='3705800'>estimates</span> <span m='3706330'>are</span> <span
  m='3707500'>particularly</span> <span m='3707810'>large or</span> <span
  m='3708250'>not.</span> <span m='3709020'>And</span> <span
  m='3709150'>maybe</span> <span m='3709650'>there's</span> <span
  m='3709860'>no</span> <span m='3710050'>structure</span> <span
  m='3710450'>at</span> <span m='3710520'>all</span> <span m='3710850'>and
  the</span> <span m='3711140'>regression</span> <span
  m='3711700'>parameters</span> <span m='3712190'>are</span> <span
  m='3712280'>0</span> <span m='3714920'>so</span> <span m='3715080'>that</span>
  <span m='3715260'>there's</span> <span m='3715420'>no</span> <span
  m='3715600'>dependence</span> <span m='3716100'>on</span> <span
  m='3716260'>a</span> <span m='3716320'>given</span> <span
  m='3716570'>factor.</span> <span m='3717510'>And</span> <span m='3717590'>we
  need to</span> <span m='3717830'>be</span> <span m='3717920'>able</span> <span
  m='3718010'>to</span> <span m='3718110'>judge</span> <span
  m='3718420'>how</span> <span m='3719170'>significant</span> <span
  m='3719400'>that</span> <span m='3719820'>is.</span> <span
  m='3720400'>So</span> <span m='3720520'>we</span> <span
  m='3720590'>need</span> <span m='3720760'>to</span> <span
  m='3720820'>know</span> <span m='3721110'>what</span> <span
  m='3721350'>the</span> <span m='3722320'>distribution</span> <span
  m='3723010'>is</span> <span m='3723290'>of</span> <span m='3723430'>our</span>
  <span m='3725570'>least</span> <span m='3725750'>squares</span> <span
  m='3726030'>estimate.</span> </p><p><span m='3726410'>So</span> <span
  m='3726460'>what</span> <span m='3726600'>we're</span> <span
  m='3726710'>going</span> <span m='3726950'>to</span> <span
  m='3727030'>do</span> <span m='3727750'>is</span> <span
  m='3728190'>apply</span> <span m='3728530'>moment</span> <span
  m='3728860'>generating</span> <span m='3729160'>functions</span> <span
  m='3729520'>to</span> <span m='3729630'>derive</span> <span
  m='3729940'>the</span> <span m='3730000'>joint</span> <span
  m='3730250'>distribution</span> <span m='3730740'>of</span> <span
  m='3730880'>y</span> <span m='3731540'>and</span> <span m='3731690'>the</span>
  <span m='3731750'>joint</span> <span m='3731990'>distribution</span> <span
  m='3732285'>of</span> <span m='3732580'>beta</span> <span
  m='3733077'>hat.</span> <span m='3737060'>And</span> <span
  m='3737380'>so</span> <span m='3739760'>Choongbum</span> <span
  m='3740870'>introduced</span> <span m='3741350'>the</span> <span
  m='3741420'>moment</span> <span m='3741700'>generating</span> <span
  m='3742110'>function</span> <span m='3742560'>for</span> <span
  m='3743560'>individual</span> <span m='3744280'>random</span> <span
  m='3744600'>variables</span> <span m='3745840'>for</span> <span
  m='3746030'>single</span> <span m='3746350'>variate</span> <span
  m='3746680'>random</span> <span m='3747050'>variables.</span> <span
  m='3747320'>For</span> <span m='3747450'>n</span> <span
  m='3747680'>variate</span> <span m='3747930'>random</span> <span
  m='3748250'>variables,</span> <span m='3749950'>we</span> <span
  m='3750100'>can</span> <span m='3750220'>define</span> <span
  m='3751030'>the</span> <span m='3751190'>moment</span> <span
  m='3751510'>generating</span> <span m='3751990'>function</span> <span
  m='3753180'>of</span> <span m='3753510'>the</span> <span m='3753650'>y</span>
  <span m='3754040'>vector</span> <span m='3755190'>to</span> <span
  m='3755320'>be</span> <span m='3755530'>the</span> <span
  m='3755680'>expectation</span> <span m='3756410'>of</span> <span
  m='3756560'>e'</span> <span m='3756800'>to</span> <span m='3756890'>the</span>
  <span m='3757900'>t</span> <span m='3758150'>transpose</span> <span
  m='3758720'>y.</span> </p><p><span m='3758990'>So</span> <span
  m='3759170'>t</span> <span m='3760000'>is</span> <span m='3760200'>an</span>
  <span m='3760330'>argument</span> <span m='3760750'>of</span> <span
  m='3760790'>the</span> <span m='3760840'>moment</span> <span
  m='3761110'>generating</span> <span m='3761420'>function.</span> <span
  m='3761840'>It's</span> <span m='3762000'>another</span> <span
  m='3762260'>n</span> <span m='3762510'>vector.</span> <span
  m='3763660'>And</span> <span m='3763820'>it's</span> <span
  m='3764070'>equal</span> <span m='3764360'>to</span> <span
  m='3764440'>the</span> <span m='3764530'>expectation</span> <span
  m='3764945'>of e</span> <span m='3765360'>to the</span> <span
  m='3765730'>t1</span> <span m='3766340'>y1</span> <span
  m='3766660'>plus</span> <span m='3767090'>t2</span> <span
  m='3767385'>y2</span> <span m='3767680'>up to</span> <span
  m='3767900'>tn</span> <span m='3768100'>yn.</span> <span m='3768840'>So</span>
  <span m='3769000'>this</span> <span m='3769210'>is</span> <span
  m='3769815'>a</span> <span m='3770150'>very</span> <span
  m='3770370'>simple</span> <span m='3771510'>definition.</span> </p><p><span
  m='3773930'>Because</span> <span m='3774360'>of</span> <span
  m='3774480'>independence,</span> <span m='3776550'>the</span> <span
  m='3776690'>expectation</span> <span m='3778260'>of</span> <span
  m='3778910'>the</span> <span m='3779020'>products,</span> <span
  m='3780960'>or</span> <span m='3781120'>this</span> <span
  m='3781420'>exponential</span> <span m='3782050'>sum</span> <span
  m='3782380'>is</span> <span m='3782440'>the</span> <span
  m='3782620'>product</span> <span m='3783280'>of</span> <span
  m='3783350'>the</span> <span m='3783450'>exponentials.</span> <span
  m='3785240'>And</span> <span m='3785650'>so</span> <span
  m='3786480'>this</span> <span m='3786850'>moment</span> <span
  m='3787120'>generating</span> <span m='3787420'>function</span> <span
  m='3787810'>is</span> <span m='3787930'>simply</span> <span
  m='3788840'>the</span> <span m='3789500'>product</span> <span
  m='3790480'>of</span> <span m='3790680'>the</span> <span
  m='3790750'>moment</span> <span m='3791040'>generating</span> <span
  m='3791380'>functions</span> <span m='3791730'>for</span> <span
  m='3791930'>y1</span> <span m='3792250'>up</span> <span
  m='3792570'>through</span> <span m='3792850'>yn.</span> <span
  m='3795190'>And</span> <span m='3795820'>I</span> <span
  m='3795950'>think--</span> <span m='3796340'>I don't</span> <span
  m='3796730'>know if it</span> <span m='3796800'>was</span> <span
  m='3796960'>in</span> <span m='3797030'>the</span> <span
  m='3797100'>first</span> <span m='3797340'>problem</span> <span
  m='3797640'>set</span> <span m='3798180'>or</span> <span m='3798490'>in</span>
  <span m='3798600'>the</span> <span m='3798670'>first</span> <span
  m='3798940'>lecture,</span> <span m='3799740'>but</span> <span
  m='3800440'>e</span> <span m='3800740'>to the ti</span> <span
  m='3801040'>mu</span> <span m='3801200'>i</span> <span m='3801680'>plus</span>
  <span m='3801960'>a</span> <span m='3802010'>1/2</span> <span
  m='3802330'>ti</span> <span m='3802670'>squared</span> <span
  m='3803010'>sigma</span> <span m='3803260'>squared</span> <span
  m='3803720'>was</span> <span m='3804020'>the</span> <span
  m='3804100'>moment</span> <span m='3804355'>generating</span> <span
  m='3804610'>function</span> <span m='3805000'>for</span> <span
  m='3805300'>the</span> <span m='3805400'>single</span> <span
  m='3806220'>univariate</span> <span m='3808310'>normal</span> <span
  m='3808610'>random</span> <span m='3808830'>variable,</span> <span
  m='3809230'>meaning</span> <span m='3809470'>ui</span> <span
  m='3809940'>invariance</span> <span m='3810430'>sigma</span> <span
  m='3810710'>squared.</span> </p><p><span m='3812340'>And</span> <span
  m='3812420'>so</span> <span m='3812540'>if</span> <span m='3812630'>we</span>
  <span m='3812740'>have</span> <span m='3813030'>n</span> <span
  m='3813230'>of</span> <span m='3813340'>these,</span> <span
  m='3814440'>we</span> <span m='3814580'>take</span> <span
  m='3814790'>their</span> <span m='3814910'>product.</span> <span
  m='3816780'>And</span> <span m='3817720'>the</span> <span
  m='3818670'>moment</span> <span m='3818990'>generating</span> <span
  m='3819280'>function</span> <span m='3819720'>for</span> <span
  m='3820400'>y</span> <span m='3820940'>is</span> <span
  m='3821140'>simply</span> <span m='3821940'>e to</span> <span
  m='3822240'>the</span> <span m='3822590'>t</span> <span
  m='3822780'>transpose</span> <span m='3823500'>me</span> <span
  m='3824160'>plus</span> <span m='3824360'>1/2</span> <span
  m='3824700'>t</span> <span m='3825300'>transpose</span> <span
  m='3826747'>sigma of</span> <span m='3827194'>t.</span> <span
  m='3828090'>And</span> <span m='3828330'>so</span> <span
  m='3829080'>for</span> <span m='3829620'>this</span> <span
  m='3830100'>multivariate</span> <span m='3830760'>normal</span> <span
  m='3831060'>distribution,</span> <span m='3833020'>this</span> <span
  m='3833490'>is</span> <span m='3834140'>its</span> <span
  m='3834420'>moment</span> <span m='3834830'>generating</span> <span
  m='3835280'>function.</span> <span m='3837630'>And</span> <span
  m='3839300'>this</span> <span m='3839910'>happens</span> <span
  m='3840550'>to</span> <span m='3840660'>be</span> <span m='3841190'>the</span>
  <span m='3843960'>distribution</span> <span m='3844830'>of</span> <span
  m='3845050'>y</span> <span m='3846070'>is</span> <span m='3846930'>a</span>
  <span m='3847040'>multivariate</span> <span m='3847550'>normal</span> <span
  m='3847860'>with</span> <span m='3847990'>mean u</span> <span
  m='3849160'>and</span> <span m='3849370'>covariance</span> <span
  m='3849900'>matrix</span> <span m='3850165'>sigma.</span> </p><p><span
  m='3851940'>So</span> <span m='3852600'>a</span> <span m='3853970'>fact</span>
  <span m='3854420'>that</span> <span m='3854540'>we're</span> <span
  m='3854680'>going</span> <span m='3854920'>to</span> <span
  m='3854970'>use</span> <span m='3856080'>is</span> <span
  m='3856600'>that</span> <span m='3857270'>if</span> <span
  m='3857690'>we're</span> <span m='3858400'>working</span> <span
  m='3858740'>with</span> <span m='3858930'>multivariate</span> <span
  m='3859400'>normal</span> <span m='3859710'>random</span> <span
  m='3859970'>variables,</span> <span m='3860930'>this</span> <span
  m='3861070'>is</span> <span m='3861450'>the</span> <span
  m='3862290'>structure</span> <span m='3862690'>of</span> <span
  m='3862770'>their</span> <span m='3862870'>moment</span> <span
  m='3863140'>generating</span> <span m='3863470'>functions.</span> <span
  m='3864520'>And</span> <span m='3864730'>so</span> <span m='3865020'>if</span>
  <span m='3865220'>we</span> <span m='3865660'>solve</span> <span
  m='3866150'>for</span> <span m='3866270'>the</span> <span
  m='3866360'>moment</span> <span m='3866615'>generation</span> <span
  m='3866870'>function</span> <span m='3867230'>of</span> <span
  m='3867320'>some</span> <span m='3867570'>other</span> <span
  m='3867960'>item</span> <span m='3868200'>of</span> <span
  m='3868320'>interest</span> <span m='3869280'>and</span> <span
  m='3869480'>recognize</span> <span m='3870120'>that</span> <span
  m='3870430'>it</span> <span m='3870740'>has</span> <span
  m='3870980'>the</span> <span m='3871070'>same</span> <span
  m='3871330'>form,</span> <span m='3871840'>we</span> <span
  m='3871990'>can</span> <span m='3872900'>conclude</span> <span
  m='3873175'>that</span> <span m='3873450'>it's</span> <span
  m='3873670'>also</span> <span m='3874010'>a</span> <span
  m='3874250'>multivariate</span> <span m='3874530'>normal</span> <span
  m='3874810'>random</span> <span m='3875273'>variable.</span> </p><p><span
  m='3879440'>So</span> <span m='3879540'>let's</span> <span
  m='3879750'>do</span> <span m='3879940'>that.</span> <span
  m='3881330'>Let's</span> <span m='3881460'>solve</span> <span
  m='3881770'>for</span> <span m='3882590'>the</span> <span
  m='3884140'>moment</span> <span m='3884430'>generation</span> <span
  m='3884720'>function</span> <span m='3885270'>of</span> <span
  m='3885430'>the</span> <span m='3885510'>least</span> <span
  m='3885710'>squares</span> <span m='3886000'>estimate, beta</span> <span
  m='3886330'>hat.</span> <span m='3888120'>Now</span> <span
  m='3888640'>rather</span> <span m='3888930'>than</span> <span
  m='3889030'>dealing</span> <span m='3889430'>with</span> <span
  m='3890070'>an</span> <span m='3890250'>n</span> <span
  m='3890520'>vector,</span> <span m='3890980'>we're</span> <span
  m='3891110'>dealing</span> <span m='3891350'>with</span> <span
  m='3891440'>a</span> <span m='3891550'>p</span> <span
  m='3891780'>vector</span> <span m='3892540'>of</span> <span
  m='3892730'>the</span> <span m='3892800'>betas,</span> <span
  m='3893790'>beta</span> <span m='3893990'>hats.</span> <span
  m='3895280'>And</span> <span m='3895500'>this</span> <span
  m='3895700'>is</span> <span m='3895810'>simply</span> <span
  m='3896080'>the</span> <span m='3896220'>definition</span> <span
  m='3896730'>of</span> <span m='3896800'>the</span> <span
  m='3896890'>moment</span> <span m='3897170'>generating</span> <span
  m='3897530'>function.</span> </p><p><span m='3900240'>If</span> <span
  m='3900490'>we</span> <span m='3901360'>plug-in</span> <span
  m='3902090'>for</span> <span m='3903960'>basically</span> <span
  m='3904810'>what</span> <span m='3905080'>the</span> <span
  m='3905170'>functional</span> <span m='3905770'>form</span> <span
  m='3906160'>is</span> <span m='3906380'>for</span> <span
  m='3906680'>the</span> <span m='3906960'>ordinary</span> <span
  m='3907340'>least</span> <span m='3907540'>squares</span> <span
  m='3907920'>estimates</span> <span m='3909160'>and</span> <span
  m='3909280'>how</span> <span m='3909440'>they</span> <span
  m='3909550'>depend</span> <span m='3909960'>on</span> <span
  m='3910060'>the</span> <span m='3910180'>underlying</span> <span
  m='3910630'>y,</span> <span m='3912500'>then</span> <span
  m='3913790'>we</span> <span m='3913960'>basically--</span> <span
  m='3916770'>OK,</span> <span m='3917900'>we</span> <span
  m='3918050'>have</span> <span m='3918900'>A</span> <span
  m='3919280'>equal</span> <span m='3919660'>to,</span> <span
  m='3919880'>essentially,</span> <span m='3920480'>the</span> <span
  m='3920780'>linear</span> <span m='3921100'>projection</span> <span
  m='3921520'>of</span> <span m='3921620'>y.</span> <span
  m='3921860'>That</span> <span m='3921960'>gives</span> <span
  m='3922170'>us</span> <span m='3922300'>the</span> <span
  m='3922390'>least</span> <span m='3922590'>squares</span> <span
  m='3922950'>estimate.</span> <span m='3924530'>And</span> <span
  m='3925070'>then</span> <span m='3925570'>we</span> <span
  m='3925800'>can</span> <span m='3927330'>say</span> <span
  m='3927540'>that</span> <span m='3927760'>this</span> <span
  m='3928010'>moment</span> <span m='3928400'>generating</span> <span
  m='3928800'>function</span> <span m='3929180'>for</span> <span
  m='3929350'>beta</span> <span m='3929640'>hat</span> <span
  m='3930690'>is</span> <span m='3930920'>equal</span> <span
  m='3931260'>to</span> <span m='3933790'>the</span> <span
  m='3933920'>expectation</span> <span m='3934260'>of</span> <span m='3934600'>E
  to the</span> <span m='3934970'>t</span> <span m='3935200'>transpose</span>
  <span m='3935810'>y,</span> <span m='3936030'>where</span> <span
  m='3936290'>little</span> <span m='3936570'>t</span> <span
  m='3937110'>is</span> <span m='3937560'>a</span> <span
  m='3937720'>transpose</span> <span m='3938410'>tau.</span> </p><p><span
  m='3940650'>Well,</span> <span m='3940810'>we</span> <span
  m='3940950'>know</span> <span m='3941230'>what</span> <span
  m='3941420'>this</span> <span m='3941690'>is.</span> <span m='3941960'>This
  is</span> <span m='3942100'>the</span> <span m='3942180'>moment</span> <span
  m='3942450'>generating</span> <span m='3942790'>function</span> <span
  m='3943150'>of</span> <span m='3943270'>x--</span> <span
  m='3944130'>sorry,</span> <span m='3944450'>of</span> <span
  m='3944540'>y--</span> <span m='3945400'>evaluated</span> <span
  m='3946080'>at</span> <span m='3946260'>the</span> <span
  m='3947030'>vector</span> <span m='3948450'>little</span> <span
  m='3948770'>t.</span> <span m='3950080'>So</span> <span m='3950220'>we</span>
  <span m='3950310'>just</span> <span m='3950480'>need</span> <span
  m='3950610'>to</span> <span m='3950680'>plug</span> <span
  m='3950980'>in</span> <span m='3951705'>little</span> <span
  m='3952130'>t,</span> <span m='3953636'>that</span> <span
  m='3954070'>expression</span> <span m='3954345'>of</span> <span
  m='3954620'>A</span> <span m='3955190'>transpose</span> <span
  m='3955670'>tau.</span> <span m='3956280'>So</span> <span
  m='3956430'>let's</span> <span m='3956670'>do</span> <span
  m='3956830'>that.</span> <span m='3959370'>And</span> <span
  m='3960210'>you</span> <span m='3960340'>do</span> <span
  m='3960520'>that</span> <span m='3960880'>and</span> <span
  m='3961260'>it</span> <span m='3961500'>turns</span> <span
  m='3961800'>out</span> <span m='3962030'>to be</span> <span
  m='3962380'>E</span> <span m='3962730'>to the t</span> <span
  m='3962940'>transpose</span> <span m='3963580'>mu</span> <span
  m='3964740'>plus</span> <span m='3965010'>that.</span> <span
  m='3966324'>And</span> <span m='3970620'>we</span> <span m='3970770'>go</span>
  <span m='3971030'>through</span> <span m='3971280'>a</span> <span
  m='3971330'>number</span> <span m='3971640'>of</span> <span
  m='3971740'>calculations.</span> </p><p><span m='3973450'>And</span> <span
  m='3973590'>at</span> <span m='3973680'>the</span> <span
  m='3973830'>end</span> <span m='3973970'>of</span> <span
  m='3974020'>the</span> <span m='3974130'>day,</span> <span
  m='3975190'>we</span> <span m='3975250'>get</span> <span m='3975440'>that
  the</span> <span m='3975590'>moment</span> <span m='3975990'>generating</span>
  <span m='3976310'>function</span> <span m='3976800'>is</span> <span
  m='3977040'>just</span> <span m='3977930'>E to</span> <span
  m='3978140'>the</span> <span m='3978360'>tau</span> <span
  m='3978800'>transpose</span> <span m='3979270'>beta</span> <span
  m='3979730'>plus</span> <span m='3980000'>a</span> <span
  m='3980060'>1/2</span> <span m='3980280'>tau</span> <span
  m='3980580'>transpose</span> <span m='3981230'>this</span> <span
  m='3981500'>matrix</span> <span m='3982000'>tau.</span> <span
  m='3983740'>And</span> <span m='3983900'>that</span> <span
  m='3984270'>is</span> <span m='3984550'>the</span> <span
  m='3984620'>moment</span> <span m='3985110'>generation</span> <span
  m='3985610'>function</span> <span m='3986050'>of a</span> <span
  m='3986490'>multivariate</span> <span m='3987050'>normal.</span> <span
  m='3988490'>So</span> <span m='3988630'>these</span> <span
  m='3988930'>few</span> <span m='3989110'>lines</span> <span
  m='3989720'>that</span> <span m='3989910'>you</span> <span
  m='3990040'>can</span> <span m='3990210'>go</span> <span
  m='3990400'>through</span> <span m='3990920'>after</span> <span
  m='3991280'>class</span> <span m='3992280'>basically</span> <span
  m='3993110'>solve</span> <span m='3993490'>for</span> <span
  m='3993660'>the</span> <span m='3993760'>moment</span> <span
  m='3994030'>generating</span> <span m='3994320'>function</span> <span
  m='3994650'>of</span> <span m='3994730'>beta</span> <span
  m='3994960'>hat.</span> <span m='3995960'>And</span> <span
  m='3996100'>because</span> <span m='3996660'>we</span> <span
  m='3996810'>can</span> <span m='3996930'>recognize</span> <span
  m='3997510'>this</span> <span m='3997770'>as</span> <span
  m='3997930'>the</span> <span m='3998090'>MGF</span> <span
  m='3999456'>of</span> <span m='3999890'>a</span> <span
  m='3999930'>multivariate</span> <span m='4000450'>normal,</span> <span
  m='4000870'>we</span> <span m='4001155'>know</span> <span
  m='4001440'>that</span> <span m='4001820'>that's--</span> <span
  m='4004490'>beta</span> <span m='4004620'>hat is</span> <span
  m='4004960'>a</span> <span m='4005010'>multivariate</span> <span
  m='4005530'>normal,</span> <span m='4005870'>with</span> <span
  m='4006330'>mean,</span> <span m='4007120'>the</span> <span
  m='4007210'>true</span> <span m='4007450'>beta,</span> <span
  m='4008140'>and</span> <span m='4008380'>covariance</span> <span
  m='4008970'>matrix</span> <span m='4010020'>given</span> <span
  m='4010320'>by</span> <span m='4010980'>the</span> <span
  m='4011130'>object</span> <span m='4011580'>in</span> <span
  m='4011740'>square</span> <span m='4012100'>brackets</span> <span
  m='4012610'>there.</span> </p><p><span m='4014390'>OK,</span> <span
  m='4016170'>so</span> <span m='4018790'>this</span> <span
  m='4019800'>is</span> <span m='4020070'>essentially</span> <span
  m='4020550'>the</span> <span m='4020910'>conclusion</span> <span
  m='4021590'>of</span> <span m='4021770'>that</span> <span
  m='4022260'>previous</span> <span m='4022850'>analysis.</span> <span
  m='4025040'>The</span> <span m='4025130'>marginal</span> <span
  m='4025660'>distribution</span> <span m='4026290'>of</span> <span
  m='4026430'>each</span> <span m='4026650'>of</span> <span
  m='4026780'>the</span> <span m='4026880'>beta</span> <span
  m='4027470'>hats</span> <span m='4028410'>is</span> <span
  m='4028950'>given</span> <span m='4029240'>by</span> <span
  m='4029470'>beta</span> <span m='4029770'>hat--</span> <span
  m='4031745'>by</span> <span m='4032020'>a</span> <span
  m='4032120'>univariate</span> <span m='4032730'>normal</span> <span
  m='4032990'>distribution</span> <span m='4033490'>with</span> <span
  m='4033640'>mean</span> <span m='4033850'>beta</span> <span
  m='4034200'>j</span> <span m='4035160'>and</span> <span
  m='4036140'>variance</span> <span m='4036470'>equal to</span> <span
  m='4036700'>the</span> <span m='4036810'>diagonal.</span> <span
  m='4038490'>Now</span> <span m='4039280'>at</span> <span
  m='4039440'>this</span> <span m='4039620'>point,</span> <span
  m='4040220'>saying</span> <span m='4040620'>that</span> <span
  m='4041510'>is</span> <span m='4041930'>like</span> <span
  m='4042700'>an</span> <span m='4042790'>assertion.</span> <span
  m='4045190'>But</span> <span m='4046310'>one</span> <span
  m='4046490'>can</span> <span m='4046610'>actually</span> <span
  m='4047010'>prove</span> <span m='4047500'>that</span> <span
  m='4047950'>very</span> <span m='4048410'>easily,</span> <span
  m='4048750'>given</span> <span m='4050710'>this</span> <span
  m='4050890'>sequence</span> <span m='4051185'>of</span> <span
  m='4052750'>argument.</span> <span m='4053290'>And</span> <span
  m='4053760'>can</span> <span m='4053940'>anyone</span> <span
  m='4054120'>tell</span> <span m='4054270'>me</span> <span
  m='4055470'>why</span> <span m='4055630'>this is</span> <span
  m='4056126'>true?</span> </p><p><span m='4063080'>Let</span> <span
  m='4063210'>me</span> <span m='4063330'>tell</span> <span
  m='4063700'>you.</span> <span m='4064390'>If</span> <span
  m='4064540'>you</span> <span m='4064720'>consider</span> <span
  m='4065240'>plugging</span> <span m='4065720'>in</span> <span
  m='4066240'>the</span> <span m='4066370'>moment</span> <span
  m='4066710'>generating</span> <span m='4067180'>function,</span> <span
  m='4067850'>the</span> <span m='4068240'>value</span> <span
  m='4068940'>tau,</span> <span m='4070290'>where</span> <span
  m='4070560'>only</span> <span m='4070800'>the</span> <span
  m='4070970'>j-th</span> <span m='4071810'>entry</span> <span
  m='4072320'>is</span> <span m='4072480'>non-zero,</span> <span
  m='4073990'>then</span> <span m='4074320'>you</span> <span
  m='4074460'>have</span> <span m='4074870'>the</span> <span
  m='4075280'>monitoring</span> <span m='4075730'>function</span> <span
  m='4076120'>of</span> <span m='4076290'>the j-th</span> <span
  m='4076410'>component</span> <span m='4077715'>of</span> <span
  m='4078080'>beta</span> <span m='4078460'>hat.</span> <span
  m='4079310'>And</span> <span m='4079910'>that's</span> <span
  m='4081545'>a</span> <span m='4081980'>Gaussian</span> <span
  m='4082950'>moment</span> <span m='4083190'>generating</span> <span
  m='4083510'>function.</span> <span m='4083880'>So</span> <span
  m='4084080'>the</span> <span m='4084560'>marginal</span> <span
  m='4085020'>distribution</span> <span m='4085620'>of</span> <span
  m='4085720'>the j-th</span> <span m='4085790'>component</span> <span
  m='4086540'>is</span> <span m='4087430'>normal.</span> <span
  m='4088190'>So</span> <span m='4088340'>you</span> <span
  m='4088490'>get</span> <span m='4088690'>that</span> <span
  m='4089450'>almost</span> <span m='4089730'>for</span> <span
  m='4089850'>free</span> <span m='4090360'>from</span> <span
  m='4090550'>this</span> <span m='4090650'>multivariate</span> <span
  m='4090960'>analysis.</span> </p><p><span m='4093680'>And</span> <span
  m='4093990'>so</span> <span m='4094100'>there's</span> <span
  m='4094270'>no</span> <span m='4094500'>hand</span> <span
  m='4094870'>waving</span> <span m='4095220'>going</span> <span
  m='4095530'>on</span> <span m='4096760'>in</span> <span
  m='4097380'>having</span> <span m='4097630'>that</span> <span
  m='4097750'>result.</span> <span m='4098014'>This</span> <span
  m='4098279'>actually</span> <span m='4098609'>follows</span> <span
  m='4099359'>directly</span> <span m='4099740'>from</span> <span
  m='4099920'>the</span> <span m='4099979'>moment</span> <span
  m='4100229'>generating</span> <span m='4100609'>functions.</span> <span
  m='4102760'>OK,</span> <span m='4103210'>let's</span> <span
  m='4104420'>now</span> <span m='4104689'>turn</span> <span
  m='4105010'>to</span> <span m='4105149'>another</span> <span
  m='4105439'>topic.</span> <span m='4106870'>Related,</span> <span
  m='4107910'>but it's</span> <span m='4108200'>the</span> <span
  m='4108510'>qr</span> <span m='4108979'>decomposition</span> <span
  m='4109649'>of</span> <span m='4109750'>x.</span> </p><p><span
  m='4112200'>So</span> <span m='4112880'>we</span> <span
  m='4113029'>have</span> <span m='4114000'>what</span> <span
  m='4114130'>are</span> <span m='4114250'>independent</span> <span
  m='4114700'>variables.</span> <span m='4116870'>x,</span> <span
  m='4117220'>we</span> <span m='4117380'>want</span> <span
  m='4117689'>to</span> <span m='4117840'>express</span> <span
  m='4118390'>this</span> <span m='4119340'>as</span> <span m='4121010'>a</span>
  <span m='4121120'>product</span> <span m='4121630'>of</span> <span
  m='4121779'>an</span> <span m='4121970'>orthonormal</span> <span
  m='4122729'>matrix</span> <span m='4123830'>q</span> <span
  m='4124740'>which</span> <span m='4124920'>is</span> <span
  m='4125020'>n</span> <span m='4125210'>by</span> <span m='4125410'>p,</span>
  <span m='4126609'>and</span> <span m='4127050'>an</span> <span
  m='4127200'>upper</span> <span m='4127500'>triangular</span> <span
  m='4128740'>matrix,</span> <span m='4129240'>r.</span> <span
  m='4131684'>So</span> <span m='4135130'>it</span> <span
  m='4135330'>turns</span> <span m='4135660'>out</span> <span
  m='4135979'>that</span> <span m='4136729'>any</span> <span
  m='4137500'>matrix,</span> <span m='4138760'>n</span> <span
  m='4138950'>by</span> <span m='4139120'>p</span> <span
  m='4139290'>matrix,</span> <span m='4139750'>can</span> <span
  m='4139979'>be</span> <span m='4140090'>expressed</span> <span
  m='4140620'>in</span> <span m='4140710'>this</span> <span
  m='4140950'>form.</span> <span m='4142130'>And</span> <span
  m='4142420'>we'll</span> <span m='4143160'>quickly</span> <span
  m='4143490'>show</span> <span m='4143800'>you</span> <span
  m='4143979'>how</span> <span m='4144270'>that</span> <span
  m='4145740'>can</span> <span m='4145960'>be</span> <span
  m='4146160'>accomplished.</span> <span m='4147260'>We</span> <span
  m='4147370'>can</span> <span m='4147470'>accomplish</span> <span
  m='4147939'>that</span> <span m='4148220'>by</span> <span
  m='4149680'>conducting</span> <span m='4150180'>a</span> <span
  m='4150260'>Gram-Schmidt</span> <span m='4151979'>orthonormalization</span>
  <span m='4153479'>of</span> <span m='4153859'>the</span> <span
  m='4154970'>independent</span> <span m='4155410'>variables</span> <span
  m='4155830'>matrix</span> <span m='4156290'>x.</span> </p><p><span
  m='4157580'>And</span> <span m='4160550'>let's</span> <span
  m='4160770'>see.</span> <span m='4161540'>So</span> <span
  m='4162620'>if</span> <span m='4162890'>we</span> <span
  m='4163000'>define</span> <span m='4163580'>r,</span> <span
  m='4164399'>the</span> <span m='4164590'>upper</span> <span
  m='4164859'>triangular</span> <span m='4165609'>matrix</span> <span
  m='4166120'>in</span> <span m='4166210'>the</span> <span m='4166310'>qr</span>
  <span m='4166689'>decomposition,</span> <span m='4167500'>to</span> <span
  m='4167580'>have</span> <span m='4168950'>0's</span> <span
  m='4169420'>off</span> <span m='4169710'>the</span> <span
  m='4169810'>diagonal</span> <span m='4170290'>below</span> <span
  m='4171424'>and</span> <span m='4171821'>then</span> <span
  m='4172220'>possibly</span> <span m='4172729'>nonzero</span> <span
  m='4173490'>value</span> <span m='4174689'>along</span> <span
  m='4174979'>the</span> <span m='4175080'>diagonal</span> <span
  m='4175710'>into</span> <span m='4175990'>the</span> <span
  m='4176109'>right,</span> <span m='4177220'>we're</span> <span
  m='4177370'>just</span> <span m='4177590'>going</span> <span
  m='4177790'>to</span> <span m='4177870'>solve</span> <span
  m='4178410'>for</span> <span m='4179990'>q</span> <span m='4180319'>and</span>
  <span m='4180439'>r</span> <span m='4181500'>through</span> <span
  m='4181810'>this</span> <span m='4182040'>Gram-Schmidt</span> <span
  m='4184180'>process.</span> <span m='4185260'>So</span> <span
  m='4185810'>the</span> <span m='4185939'>first</span> <span
  m='4186260'>column</span> <span m='4186550'>of</span> <span
  m='4186670'>x</span> <span m='4187939'>is</span> <span
  m='4188439'>equal</span> <span m='4188770'>to</span> <span
  m='4189670'>the</span> <span m='4189770'>first</span> <span
  m='4190090'>column</span> <span m='4190439'>of</span> <span
  m='4190569'>q</span> <span m='4191720'>times</span> <span
  m='4193090'>the</span> <span m='4193200'>first</span> <span
  m='4195200'>element,</span> <span m='4196040'>the</span> <span
  m='4196150'>top</span> <span m='4196410'>left</span> <span
  m='4196680'>corner</span> <span m='4197430'>of</span> <span
  m='4197750'>the</span> <span m='4197820'>matrix</span> <span
  m='4198250'>r.</span> </p><p><span m='4200240'>And</span> <span
  m='4201020'>if</span> <span m='4201220'>we</span> <span
  m='4201390'>take</span> <span m='4202840'>the</span> <span
  m='4203000'>cross</span> <span m='4203430'>product</span> <span
  m='4203880'>of</span> <span m='4203980'>that</span> <span
  m='4204440'>vector</span> <span m='4205050'>with</span> <span
  m='4205240'>itself,</span> <span m='4208130'>then</span> <span
  m='4209780'>we</span> <span m='4209950'>get</span> <span
  m='4210310'>this</span> <span m='4210520'>expression</span> <span
  m='4211020'>for</span> <span m='4211340'>r</span> <span
  m='4211800'>when</span> <span m='4212720'>1</span> <span
  m='4213180'>squared--</span> <span m='4214600'>we</span> <span
  m='4214880'>can</span> <span m='4215260'>basically</span> <span
  m='4215670'>solve</span> <span m='4215960'>for</span> <span
  m='4216070'>r</span> <span m='4216460'>1,1</span> <span m='4216850'>as</span>
  <span m='4217130'>the</span> <span m='4217570'>square</span> <span
  m='4217990'>root</span> <span m='4218270'>of</span> <span m='4218390'>this
  dot</span> <span m='4218860'>product.</span> <span m='4219590'>And</span>
  <span m='4219830'>Q1</span> <span m='4220370'>is</span> <span
  m='4220480'>simply</span> <span m='4220720'>the</span> <span
  m='4220830'>first</span> <span m='4221110'>column</span> <span
  m='4221370'>of</span> <span m='4221500'>x</span> <span
  m='4221730'>divided</span> <span m='4222090'>by</span> <span
  m='4222290'>that</span> <span m='4222920'>square</span> <span
  m='4223220'>root.</span> <span m='4223500'>So</span> <span
  m='4224300'>this</span> <span m='4225690'>first</span> <span
  m='4226010'>element</span> <span m='4226300'>of</span> <span
  m='4226380'>the</span> <span m='4226450'>queue</span> <span
  m='4226650'>matrix</span> <span m='4227260'>and</span> <span
  m='4227480'>the</span> <span m='4227550'>first</span> <span
  m='4227820'>element</span> <span m='4228090'>r,</span> <span
  m='4229440'>this</span> <span m='4230220'>can</span> <span
  m='4230380'>be</span> <span m='4230480'>solved</span> <span
  m='4230780'>for</span> <span m='4231190'>right</span> <span
  m='4231350'>away.</span> </p><p><span m='4232210'>Then</span> <span
  m='4232650'>let's</span> <span m='4232900'>solve</span> <span
  m='4233260'>for</span> <span m='4233680'>the</span> <span
  m='4235980'>second</span> <span m='4236730'>column</span> <span
  m='4237220'>of</span> <span m='4237650'>Q</span> <span m='4238100'>and</span>
  <span m='4239410'>the</span> <span m='4241180'>second</span> <span
  m='4241590'>column</span> <span m='4242090'>of</span> <span
  m='4242470'>the</span> <span m='4242620'>R</span> <span
  m='4242790'>matrix.</span> <span m='4243310'>Well,</span> <span
  m='4243680'>x2,</span> <span m='4244720'>the</span> <span
  m='4244840'>second</span> <span m='4245180'>column</span> <span
  m='4245500'>of</span> <span m='4245580'>the</span> <span m='4245680'>x</span>
  <span m='4245900'>matrix,</span> <span m='4246860'>is</span> <span
  m='4248400'>the</span> <span m='4249950'>first</span> <span
  m='4250570'>column</span> <span m='4251450'>of</span> <span
  m='4251670'>q</span> <span m='4252190'>times</span> <span
  m='4252660'>R1,</span> <span m='4253770'>2,</span> <span
  m='4256090'>plus</span> <span m='4256310'>the</span> <span
  m='4256400'>second</span> <span m='4256710'>column</span> <span
  m='4257100'>of</span> <span m='4257290'>Q</span> <span
  m='4257610'>times</span> <span m='4257950'>r</span> <span
  m='4258160'>2,2.</span> <span m='4262250'>And</span> <span
  m='4262390'>if</span> <span m='4262520'>we</span> <span
  m='4262660'>multiply</span> <span m='4263640'>this</span> <span
  m='4265120'>expression</span> <span m='4266060'>by</span> <span
  m='4266390'>Q1</span> <span m='4267000'>transpose,</span> <span
  m='4269300'>then</span> <span m='4270820'>we</span> <span
  m='4270990'>basically</span> <span m='4271440'>get</span> <span
  m='4272510'>this</span> <span m='4272720'>expression</span> <span
  m='4273520'>for</span> <span m='4275460'>r 1,2.</span> <span
  m='4279780'>So</span> <span m='4280290'>we</span> <span
  m='4280470'>actually</span> <span m='4281640'>have</span> <span
  m='4281810'>just</span> <span m='4281940'>solved</span> <span
  m='4282310'>for</span> <span m='4282470'>r 1,2.</span> </p><p><span
  m='4284240'>And</span> <span m='4286660'>Q2</span> <span m='4288910'>is</span>
  <span m='4291580'>solved</span> <span m='4291930'>for</span> <span
  m='4294310'>by</span> <span m='4294480'>the</span> <span
  m='4294610'>arguments</span> <span m='4295010'>given</span> <span
  m='4295460'>here.</span> <span m='4295910'>So</span> <span
  m='4296100'>basically,</span> <span m='4296560'>we</span> <span
  m='4297620'>successively</span> <span m='4299060'>are</span> <span
  m='4299360'>orthogonalizing</span> <span m='4301070'>columns</span> <span
  m='4301480'>of</span> <span m='4301600'>x</span> <span m='4301950'>to</span>
  <span m='4302240'>the</span> <span m='4302310'>previous</span> <span
  m='4302700'>columns</span> <span m='4303090'>of x</span> <span
  m='4303480'>through</span> <span m='4303860'>this</span> <span
  m='4304300'>Gram-Schmidt</span> <span m='4304770'>process.</span> <span
  m='4305850'>And</span> <span m='4306380'>it</span> <span
  m='4306590'>basically</span> <span m='4307010'>can be</span> <span
  m='4307180'>repeated</span> <span m='4307640'>through</span> <span
  m='4307920'>all</span> <span m='4308090'>the</span> <span
  m='4308170'>columns.</span> </p><p><span m='4311030'>Now</span> <span
  m='4311230'>with</span> <span m='4311460'>this</span> <span
  m='4311670'>QR</span> <span m='4312160'>decomposition,</span> <span
  m='4314020'>what</span> <span m='4314210'>we</span> <span
  m='4314330'>get</span> <span m='4315410'>is</span> <span m='4316380'>a</span>
  <span m='4316500'>really</span> <span m='4316780'>nice</span> <span
  m='4317180'>form</span> <span m='4317610'>for</span> <span
  m='4318530'>the</span> <span m='4318640'>least</span> <span
  m='4318890'>squares</span> <span m='4320200'>estimate.</span> <span
  m='4321470'>Basically,</span> <span m='4322800'>it</span> <span
  m='4323040'>simplifies</span> <span m='4323900'>to</span> <span
  m='4324990'>the</span> <span m='4325110'>inverse</span> <span
  m='4325460'>of</span> <span m='4325580'>R</span> <span
  m='4325820'>times</span> <span m='4326090'>Q</span> <span
  m='4326250'>transpose</span> <span m='4327080'>y.</span> <span
  m='4328220'>And</span> <span m='4329910'>this</span> <span
  m='4332830'>basically</span> <span m='4334030'>means</span> <span
  m='4334400'>that</span> <span m='4334680'>you</span> <span
  m='4335490'>can</span> <span m='4336130'>solve</span> <span
  m='4336530'>for</span> <span m='4336650'>least</span> <span
  m='4336850'>squares</span> <span m='4337190'>estimates</span> <span
  m='4337660'>by</span> <span m='4338710'>calculating</span> <span
  m='4339240'>the</span> <span m='4339320'>QR</span> <span
  m='4339720'>decomposition,</span> <span m='4340490'>which</span> <span
  m='4340630'>is</span> <span m='4340740'>a</span> <span m='4340780'>very</span>
  <span m='4340980'>simple</span> <span m='4341420'>linear</span> <span
  m='4341750'>algebra</span> <span m='4342150'>operation,</span> <span
  m='4343130'>and then</span> <span m='4343370'>just</span> <span
  m='4343560'>do</span> <span m='4343700'>a</span> <span
  m='4343810'>couple</span> <span m='4344090'>of</span> <span
  m='4344440'>matrix</span> <span m='4345150'>products</span> <span
  m='4345890'>to</span> <span m='4346710'>get</span> <span
  m='4346950'>the--</span> <span m='4347952'>well,</span> <span m='4348340'>you
  do</span> <span m='4348510'>have to</span> <span m='4348950'>do a</span> <span
  m='4349090'>matrix</span> <span m='4349480'>inverse</span> <span
  m='4349850'>with</span> <span m='4349980'>R</span> <span m='4351310'>to</span>
  <span m='4351390'>get</span> <span m='4351580'>that</span> <span
  m='4351730'>out.</span> </p><p><span m='4353730'>And</span> <span
  m='4354450'>the</span> <span m='4354720'>covariance</span> <span
  m='4355260'>matrix</span> <span m='4355730'>of</span> <span
  m='4355830'>beta</span> <span m='4356090'>hat</span> <span
  m='4357810'>is</span> <span m='4359300'>equal</span> <span
  m='4359640'>to</span> <span m='4361310'>sigma</span> <span
  m='4361630'>squared</span> <span m='4362000'>x</span> <span
  m='4362200'>transpose</span> <span m='4362810'>x</span> <span
  m='4363060'>inverse.</span> <span m='4364480'>And</span> <span
  m='4366590'>in</span> <span m='4366790'>terms</span> <span
  m='4367080'>of</span> <span m='4367180'>the</span> <span
  m='4367300'>covariance</span> <span m='4367970'>matrix,</span> <span
  m='4370470'>what</span> <span m='4370900'>is</span> <span
  m='4372070'>implicit</span> <span m='4372690'>here</span> <span
  m='4373330'>but</span> <span m='4373660'>you</span> <span
  m='4373800'>should</span> <span m='4373960'>make</span> <span
  m='4374150'>explicit</span> <span m='4374730'>in your</span> <span
  m='4375040'>study,</span> <span m='4375870'>is</span> <span
  m='4376280'>if</span> <span m='4376460'>you</span> <span
  m='4376620'>consider</span> <span m='4379790'>taking</span> <span
  m='4380820'>a</span> <span m='4382630'>matrix,</span> <span
  m='4384010'>R</span> <span m='4384330'>inverse</span> <span
  m='4384800'>Q</span> <span m='4385030'>transpose</span> <span
  m='4386190'>times</span> <span m='4386810'>y,</span> <span
  m='4388040'>the</span> <span m='4388180'>only</span> <span
  m='4388350'>thing</span> <span m='4388660'>that's</span> <span
  m='4388800'>random</span> <span m='4389110'>there is</span> <span
  m='4389370'>that</span> <span m='4389550'>y</span> <span
  m='4389840'>vector,</span> <span m='4391310'>OK?</span> <span
  m='4391660'>The</span> <span m='4391840'>covariance</span> <span
  m='4392450'>of</span> <span m='4392760'>a</span> <span
  m='4392880'>matrix</span> <span m='4394030'>times</span> <span
  m='4394680'>a</span> <span m='4395030'>random</span> <span
  m='4395090'>vector</span> <span m='4396720'>is</span> <span
  m='4397590'>that</span> <span m='4397910'>matrix</span> <span
  m='4398440'>times</span> <span m='4398710'>the</span> <span
  m='4398830'>covariance</span> <span m='4399770'>of</span> <span
  m='4399960'>the</span> <span m='4400060'>vector</span> <span
  m='4400780'>times</span> <span m='4401070'>the</span> <span
  m='4401160'>transpose</span> <span m='4401850'>of</span> <span
  m='4401920'>the</span> <span m='4401990'>matrix.</span> </p><p><span
  m='4402960'>So</span> <span m='4403320'>if</span> <span m='4403450'>you</span>
  <span m='4403560'>take</span> <span m='4403810'>a</span> <span
  m='4404590'>matrix</span> <span m='4405110'>transformation</span> <span
  m='4406770'>of</span> <span m='4407680'>a</span> <span
  m='4407760'>random</span> <span m='4408110'>vector,</span> <span
  m='4409300'>then</span> <span m='4409410'>the</span> <span
  m='4409520'>covariance</span> <span m='4410510'>of</span> <span
  m='4411250'>that</span> <span m='4411790'>transformation</span> <span
  m='4412935'>has</span> <span m='4413230'>that</span> <span
  m='4413400'>form.</span> <span m='4413660'>So</span> <span
  m='4413870'>that's</span> <span m='4414670'>where</span> <span
  m='4414930'>this</span> <span m='4415570'>covariance</span> <span
  m='4416900'>matrix</span> <span m='4417796'>is</span> <span
  m='4418490'>coming</span> <span m='4418820'>into</span> <span
  m='4419020'>play.</span> <span m='4421110'>And</span> <span
  m='4421970'>from</span> <span m='4422260'>the</span> <span
  m='4422700'>MGF,</span> <span m='4423450'>the</span> <span
  m='4423550'>moment</span> <span m='4423780'>generating</span> <span
  m='4424040'>function,</span> <span m='4424410'>for</span> <span
  m='4424710'>the</span> <span m='4424830'>least</span> <span
  m='4425010'>squares</span> <span m='4425330'>estimate,</span> <span
  m='4426220'>this</span> <span m='4428370'>basically</span> <span
  m='4428660'>comes</span> <span m='4428960'>out</span> <span m='4429110'>of
  the</span> <span m='4429180'>moment</span> <span m='4429440'>generating</span>
  <span m='4429780'>function</span> <span m='4430380'>definition</span> <span
  m='4430930'>as</span> <span m='4431030'>well.</span> </p><p><span
  m='4431943'>And</span> <span m='4434310'>if</span> <span m='4434490'>we</span>
  <span m='4434650'>take</span> <span m='4435030'>x</span> <span
  m='4435280'>transpose</span> <span m='4435860'>x,</span> <span
  m='4436140'>plugging</span> <span m='4436480'>in</span> <span
  m='4436970'>the</span> <span m='4437400'>QR</span> <span
  m='4438150'>decomposition,</span> <span m='4439410'>only</span> <span
  m='4439620'>the</span> <span m='4439810'>R's</span> <span
  m='4440830'>play</span> <span m='4441100'>out,</span> <span m='4441864'>giving
  you</span> <span m='4442298'>that.</span> <span m='4443600'>Now,</span> <span
  m='4443950'>this</span> <span m='4444190'>also</span> <span
  m='4444500'>gives</span> <span m='4444760'>us</span> <span
  m='4444930'>a</span> <span m='4444990'>very</span> <span
  m='4445240'>nice</span> <span m='4445550'>form</span> <span
  m='4445870'>for</span> <span m='4446150'>the</span> <span
  m='4446230'>hat</span> <span m='4446510'>matrix,</span> <span
  m='4447620'>which</span> <span m='4450050'>turns</span> <span
  m='4450300'>out</span> <span m='4450450'>to</span> <span
  m='4450530'>just</span> <span m='4450760'>be</span> <span m='4451130'>Q</span>
  <span m='4451440'>times</span> <span m='4451760'>Q</span> <span
  m='4451980'>transpose.</span> <span m='4453490'>So</span> <span
  m='4455590'>that's</span> <span m='4458035'>a</span> <span
  m='4458530'>very</span> <span m='4458770'>simple</span> <span
  m='4460040'>form.</span> </p><p><span m='4465290'>So</span> <span
  m='4465460'>now</span> <span m='4466540'>with</span> <span
  m='4466820'>the</span> <span m='4466990'>distribution</span> <span
  m='4467740'>theory,</span> <span m='4468160'>this</span> <span
  m='4468390'>next</span> <span m='4468690'>section</span> <span
  m='4470580'>is</span> <span m='4470800'>going</span> <span
  m='4471140'>to</span> <span m='4474150'>actually</span> <span
  m='4474460'>prove</span> <span m='4475190'>what's</span> <span
  m='4475790'>really</span> <span m='4476870'>a</span> <span
  m='4477010'>fundamental</span> <span m='4477600'>result</span> <span
  m='4477970'>about</span> <span m='4478260'>normal</span> <span
  m='4478610'>linear</span> <span m='4478920'>regression</span> <span
  m='4479400'>models.</span> <span m='4480380'>And</span> <span
  m='4480940'>I'm</span> <span m='4481030'>going</span> <span
  m='4481120'>to</span> <span m='4481170'>go</span> <span
  m='4481360'>through</span> <span m='4481560'>this</span> <span
  m='4481920'>somewhat</span> <span m='4482260'>quickly</span> <span
  m='4484750'>just</span> <span m='4485210'>so</span> <span
  m='4485410'>that</span> <span m='4485540'>we</span> <span
  m='4485760'>cover</span> <span m='4486270'>what</span> <span
  m='4486540'>the</span> <span m='4487150'>main</span> <span
  m='4487390'>ideas</span> <span m='4487840'>are</span> <span m='4488280'>of
  the</span> <span m='4488590'>theorem.</span> <span m='4489290'>But</span>
  <span m='4490450'>the</span> <span m='4490600'>details,</span> <span
  m='4491220'>I</span> <span m='4491320'>think,</span> <span
  m='4491550'>are</span> <span m='4491880'>very</span> <span
  m='4492550'>straightforward.</span> </p><p><span m='4493930'>And</span> <span
  m='4494260'>these</span> <span m='4495140'>course</span> <span
  m='4495490'>notes</span> <span m='4495810'>that</span> <span
  m='4496020'>will</span> <span m='4496180'>be</span> <span
  m='4496340'>posted</span> <span m='4496760'>online</span> <span
  m='4497250'>will</span> <span m='4497400'>go</span> <span
  m='4497590'>through</span> <span m='4497810'>the</span> <span
  m='4497910'>various</span> <span m='4498260'>steps</span> <span
  m='4498710'>of</span> <span m='4498910'>the</span> <span
  m='4499020'>analysis.</span> <span m='4503390'>OK,</span> <span
  m='4504470'>so</span> <span m='4504960'>there's</span> <span
  m='4506120'>an</span> <span m='4506210'>important</span> <span
  m='4506680'>theorem</span> <span m='4506910'>here</span> <span
  m='4507160'>which</span> <span m='4507380'>is</span> <span
  m='4507560'>for</span> <span m='4507710'>any</span> <span
  m='4508860'>matrix</span> <span m='4509420'>A,</span> <span
  m='4509680'>m</span> <span m='4509880'>by</span> <span m='4510110'>n,</span>
  <span m='4511660'>you</span> <span m='4511790'>consider</span> <span
  m='4512490'>transforming</span> <span m='4514100'>the</span> <span
  m='4514750'>random</span> <span m='4515080'>vector</span> <span
  m='4515400'>y</span> <span m='4515860'>by</span> <span m='4516210'>this</span>
  <span m='4516440'>matrix</span> <span m='4516980'>A.</span> <span
  m='4517980'>It is</span> <span m='4518250'>also</span> <span
  m='4519460'>a</span> <span m='4521010'>random</span> <span
  m='4521440'>normal</span> <span m='4521820'>vector.</span> <span
  m='4523600'>And</span> <span m='4523860'>its</span> <span
  m='4524140'>distribution</span> <span m='4525790'>is</span> <span
  m='4526000'>going</span> <span m='4526280'>to</span> <span
  m='4526330'>have</span> <span m='4526980'>a</span> <span
  m='4527040'>mean</span> <span m='4527810'>and</span> <span
  m='4528210'>covariance</span> <span m='4528780'>matrix</span> <span
  m='4529730'>given</span> <span m='4530090'>by</span> <span
  m='4531030'>mu</span> <span m='4531330'>z and</span> <span
  m='4531630'>sigma</span> <span m='4531990'>z,</span> <span
  m='4532240'>which</span> <span m='4532460'>have</span> <span
  m='4532640'>this</span> <span m='4532770'>simple</span> <span
  m='4534530'>expression</span> <span m='4535000'>in</span> <span
  m='4535060'>terms</span> <span m='4535390'>of</span> <span
  m='4535580'>the</span> <span m='4535730'>matrix</span> <span
  m='4536340'>A</span> <span m='4537130'>and</span> <span m='4537540'>the</span>
  <span m='4537710'>underlying</span> <span m='4538220'>means</span> <span
  m='4538710'>and</span> <span m='4538950'>covariances</span> <span
  m='4539540'>of</span> <span m='4540510'>y.</span> </p><p><span
  m='4544880'>OK,</span> <span m='4545200'>earlier</span> <span
  m='4545780'>we</span> <span m='4546160'>actually</span> <span
  m='4546660'>applied</span> <span m='4547180'>this</span> <span
  m='4547590'>theorem</span> <span m='4548620'>with</span> <span
  m='4550350'>A</span> <span m='4550870'>corresponding</span> <span
  m='4551460'>to</span> <span m='4551530'>the</span> <span
  m='4551620'>matrix</span> <span m='4552110'>that</span> <span
  m='4552490'>generates</span> <span m='4552970'>the</span> <span
  m='4553060'>least</span> <span m='4553260'>squares</span> <span
  m='4553600'>estimates.</span> <span m='4554920'>So</span> <span
  m='4555390'>with A</span> <span m='4555590'>equal</span> <span
  m='4555850'>to</span> <span m='4556100'>x</span> <span
  m='4556220'>transpose</span> <span m='4556730'>x</span> <span
  m='4556950'>inverse,</span> <span m='4557900'>we</span> <span
  m='4558110'>actually</span> <span m='4558870'>previously</span> <span
  m='4559360'>went</span> <span m='4559530'>through</span> <span
  m='4559740'>the</span> <span m='4559870'>solution</span> <span
  m='4560350'>for</span> <span m='4560810'>what's</span> <span
  m='4561060'>the</span> <span m='4561160'>distribution</span> <span
  m='4561680'>of</span> <span m='4561800'>beta</span> <span
  m='4562040'>hat.</span> <span m='4564040'>And</span> <span
  m='4564420'>with</span> <span m='4565240'>any</span> <span
  m='4565560'>other</span> <span m='4566050'>matrix</span> <span
  m='4566530'>A,</span> <span m='4566730'>we</span> <span m='4566870'>can</span>
  <span m='4566960'>go</span> <span m='4567100'>through</span> <span
  m='4567260'>the</span> <span m='4567350'>same</span> <span
  m='4568080'>analysis</span> <span m='4569060'>and</span> <span
  m='4569230'>get</span> <span m='4569380'>the</span> <span
  m='4569470'>distribution.</span> </p><p><span m='4573820'>So</span> <span
  m='4574050'>if</span> <span m='4574290'>we</span> <span m='4574480'>do</span>
  <span m='4574700'>that</span> <span m='4575183'>here,</span> <span
  m='4579530'>well,</span> <span m='4580100'>we</span> <span
  m='4580280'>can</span> <span m='4580400'>actually</span> <span
  m='4580690'>prove</span> <span m='4580990'>this</span> <span
  m='4581810'>important</span> <span m='4582370'>theorem,</span> <span
  m='4582670'>which</span> <span m='4582890'>says</span> <span
  m='4583500'>that</span> <span m='4586150'>with</span> <span
  m='4586390'>least</span> <span m='4586650'>squares</span> <span
  m='4587070'>estimates</span> <span m='4587335'>of</span> <span
  m='4589210'>normal</span> <span m='4589530'>linear</span> <span
  m='4589850'>regression</span> <span m='4590290'>models,</span> <span
  m='4592370'>our</span> <span m='4593410'>least</span> <span
  m='4593670'>squares</span> <span m='4594010'>estimate</span> <span
  m='4594470'>beta</span> <span m='4594710'>hat</span> <span
  m='4595890'>and</span> <span m='4596970'>our</span> <span
  m='4598040'>residual</span> <span m='4598540'>vector</span> <span
  m='4598820'>epsilon</span> <span m='4599210'>hat</span> <span
  m='4600050'>are</span> <span m='4600260'>independent</span> <span
  m='4600900'>random</span> <span m='4601180'>variables.</span> <span
  m='4603040'>So</span> <span m='4603770'>when</span> <span
  m='4604030'>we</span> <span m='4605140'>construct</span> <span
  m='4605700'>these</span> <span m='4607250'>statistics,</span> <span
  m='4608520'>they</span> <span m='4608770'>are</span> <span
  m='4609000'>statistically</span> <span m='4609670'>independent</span> <span
  m='4610290'>of</span> <span m='4610420'>each</span> <span
  m='4610620'>other.</span> </p><p><span m='4611860'>And</span> <span
  m='4612650'>the</span> <span m='4613760'>distribution</span> <span
  m='4614340'>of</span> <span m='4614410'>beta</span> <span
  m='4614630'>hat</span> <span m='4614970'>is</span> <span
  m='4615230'>multivariate</span> <span m='4615850'>normal.</span> <span
  m='4617580'>The</span> <span m='4618360'>sum</span> <span
  m='4619100'>of</span> <span m='4619310'>the</span> <span
  m='4619410'>squared</span> <span m='4620080'>residuals</span> <span
  m='4622120'>is,</span> <span m='4622300'>in</span> <span
  m='4622630'>fact,</span> <span m='4624730'>a</span> <span
  m='4626140'>multiple</span> <span m='4626800'>of</span> <span
  m='4626950'>a</span> <span m='4627040'>chi</span> <span
  m='4627380'>squared</span> <span m='4628205'>random</span> <span
  m='4628690'>variable.</span> <span m='4629660'>Now</span> <span
  m='4631380'>who</span> <span m='4631550'>in</span> <span
  m='4631640'>here</span> <span m='4632950'>can</span> <span
  m='4633050'>tell</span> <span m='4633160'>me</span> <span
  m='4633270'>what</span> <span m='4633430'>a</span> <span
  m='4633540'>chi</span> <span m='4633700'>squared</span> <span
  m='4635250'>random</span> <span m='4635510'>variable</span> <span
  m='4636010'>is?</span> <span m='4637405'>Anyone?</span> </p><p><span
  m='4638335'>AUDIENCE: [INAUDIBLE]?</span> </p><p><span m='4641590'>PROFESSOR:
  Yes,</span> <span m='4641855'>that's</span> <span m='4642120'>right.</span>
  <span m='4643010'>So</span> <span m='4643190'>a</span> <span
  m='4643300'>chi</span> <span m='4643540'>squared</span> <span
  m='4643890'>random</span> <span m='4644200'>variable</span> <span
  m='4644630'>with</span> <span m='4644700'>one</span> <span
  m='4644920'>degree</span> <span m='4645180'>of</span> <span
  m='4645250'>freedom</span> <span m='4645610'>is</span> <span
  m='4646720'>a</span> <span m='4646810'>squared</span> <span
  m='4647320'>normal</span> <span m='4647660'>zero</span> <span
  m='4647930'>one</span> <span m='4648430'>random</span> <span
  m='4648740'>variable.</span> <span m='4649710'>A</span> <span
  m='4649840'>chi</span> <span m='4650040'>squared</span> <span
  m='4650360'>with</span> <span m='4650470'>two</span> <span
  m='4650620'>degrees</span> <span m='4650910'>of</span> <span
  m='4651030'>freedom</span> <span m='4651360'>is</span> <span
  m='4651450'>the</span> <span m='4651530'>sum</span> <span
  m='4651730'>of</span> <span m='4651860'>two</span> <span
  m='4652130'>independent</span> <span m='4653780'>normals</span> <span
  m='4655040'>0</span> <span m='4655290'>1</span> <span
  m='4655680'>squared.</span> <span m='4656420'>And</span> <span
  m='4656960'>so</span> <span m='4658170'>the</span> <span
  m='4658770'>sum</span> <span m='4659190'>of</span> <span m='4659360'>n</span>
  <span m='4660270'>squared</span> <span m='4660760'>residuals</span> <span
  m='4661320'>is,</span> <span m='4661440'>in</span> <span
  m='4661600'>fact,</span> <span m='4663000'>an</span> <span
  m='4663130'>n</span> <span m='4663300'>minus</span> <span m='4663700'>p</span>
  <span m='4665508'>chi</span> <span m='4665960'>squared</span> <span
  m='4666265'>random</span> <span m='4666570'>variable</span> <span
  m='4667070'>scale</span> <span m='4667440'>it by</span> <span
  m='4667935'>sigma squared.</span> </p><p><span m='4669420'>And</span> <span
  m='4669830'>for</span> <span m='4670070'>each</span> <span
  m='4671230'>component</span> <span m='4672180'>j,</span> <span
  m='4674390'>if</span> <span m='4674600'>we</span> <span
  m='4674780'>take</span> <span m='4675870'>the</span> <span
  m='4677690'>difference</span> <span m='4678210'>between</span> <span
  m='4678700'>the</span> <span m='4679270'>least</span> <span
  m='4679470'>squares</span> <span m='4679770'>estimate</span> <span
  m='4680280'>beta</span> <span m='4680500'>hat</span> <span
  m='4680740'>j</span> <span m='4681080'>and</span> <span m='4681420'>beta
  j</span> <span m='4681760'>and</span> <span m='4681950'>divide</span> <span
  m='4682340'>through</span> <span m='4682650'>by</span> <span
  m='4683420'>this</span> <span m='4683710'>estimate</span> <span
  m='4684810'>of</span> <span m='4685690'>the</span> <span
  m='4687700'>standard</span> <span m='4688190'>deviation</span> <span
  m='4689510'>of</span> <span m='4689760'>that,</span> <span
  m='4690810'>then</span> <span m='4692320'>that</span> <span
  m='4692670'>will,</span> <span m='4692870'>in</span> <span
  m='4693030'>fact,</span> <span m='4693360'>have</span> <span
  m='4693520'>a</span> <span m='4693600'>t</span> <span
  m='4693840'>distribution</span> <span m='4694530'>on</span> <span
  m='4694820'>n</span> <span m='4695145'>minus</span> <span m='4695470'>p</span>
  <span m='4695740'>degrees of</span> <span m='4696010'>freedom.</span> <span
  m='4697280'>And</span> <span m='4699250'>let's</span> <span
  m='4699440'>see,</span> <span m='4699670'>a</span> <span m='4700530'>t</span>
  <span m='4700850'>distribution</span> <span m='4702350'>in</span> <span
  m='4703010'>probability</span> <span m='4703650'>theory</span> <span
  m='4705040'>is</span> <span m='4706780'>the</span> <span
  m='4707070'>ratio</span> <span m='4708450'>of</span> <span
  m='4708580'>a</span> <span m='4708680'>normal</span> <span
  m='4709160'>random</span> <span m='4709550'>variable</span> <span
  m='4711410'>to</span> <span m='4713450'>an</span> <span
  m='4713640'>independent</span> <span m='4715520'>chi</span> <span
  m='4715740'>squared</span> <span m='4716200'>random variable,</span> <span
  m='4716420'>or</span> <span m='4716780'>the</span> <span
  m='4716950'>root</span> <span m='4717220'>of</span> <span
  m='4717330'>an</span> <span m='4717440'>independent</span> <span
  m='4717920'>chi</span> <span m='4718100'>squared</span> <span
  m='4718420'>random</span> <span m='4718815'>variable.</span> </p><p><span
  m='4719210'>So</span> <span m='4721990'>basically</span> <span
  m='4722490'>these</span> <span m='4722840'>properties</span> <span
  m='4724780'>characterize</span> <span m='4725780'>our</span> <span
  m='4727620'>regression</span> <span m='4728360'>parameter</span> <span
  m='4728820'>estimates</span> <span m='4729700'>and</span> <span
  m='4730010'>t</span> <span m='4730220'>statistics</span> <span
  m='4730970'>for</span> <span m='4732240'>those</span> <span
  m='4732530'>estimates.</span> <span m='4734780'>Now,</span> <span
  m='4735940'>OK,</span> <span m='4736280'>in</span> <span
  m='4736660'>the</span> <span m='4738060'>course</span> <span
  m='4738480'>notes,</span> <span m='4739230'>there's</span> <span
  m='4739490'>a</span> <span m='4740400'>moderately</span> <span
  m='4740960'>long</span> <span m='4741250'>proof.</span> <span
  m='4741670'>But</span> <span m='4741960'>all</span> <span
  m='4742170'>the</span> <span m='4742270'>details</span> <span
  m='4743130'>are</span> <span m='4743870'>given,</span> <span
  m='4744930'>and</span> <span m='4745210'>I'll</span> <span
  m='4745320'>be</span> <span m='4745410'>happy</span> <span
  m='4745780'>to</span> <span m='4745890'>go</span> <span
  m='4746070'>through</span> <span m='4746360'>any</span> <span
  m='4746640'>of</span> <span m='4746960'>those</span> <span
  m='4747280'>details</span> <span m='4747690'>with</span> <span
  m='4747790'>people</span> <span m='4748110'>during</span> <span
  m='4748370'>office</span> <span m='4748750'>hours.</span> </p><p><span
  m='4751050'>Let</span> <span m='4751260'>me</span> <span
  m='4752810'>just</span> <span m='4753060'>push</span> <span
  m='4753320'>on</span> <span m='4753760'>to--</span> <span
  m='4758152'>let's</span> <span m='4759130'>see.</span> <span
  m='4759500'>We</span> <span m='4759620'>have</span> <span
  m='4760150'>maybe</span> <span m='4761320'>two</span> <span
  m='4761480'>minutes</span> <span m='4761810'>left</span> <span m='4762260'>in
  the</span> <span m='4762630'>class.</span> <span m='4765860'>Let</span> <span
  m='4766000'>me</span> <span m='4766150'>just</span> <span
  m='4767370'>talk</span> <span m='4768070'>about</span> <span
  m='4769240'>maximum</span> <span m='4770200'>likelihood</span> <span
  m='4770870'>estimation.</span> <span m='4772440'>And</span> <span
  m='4773710'>in</span> <span m='4776150'>fitting</span> <span
  m='4776600'>models</span> <span m='4777030'>and</span> <span
  m='4777150'>statistics,</span> <span m='4777850'>maximum</span> <span
  m='4778230'>likelihood</span> <span m='4778550'>estimation</span> <span
  m='4779090'>comes</span> <span m='4779380'>up</span> <span
  m='4779560'>again</span> <span m='4779780'>and</span> <span
  m='4779920'>again.</span> <span m='4781030'>And</span> <span
  m='4781980'>with</span> <span m='4783670'>normal</span> <span
  m='4784280'>linear</span> <span m='4784600'>regression</span> <span
  m='4785000'>models,</span> <span m='4785295'>it</span> <span
  m='4785590'>turns</span> <span m='4785900'>out</span> <span
  m='4786150'>that</span> <span m='4786640'>ordinary</span> <span
  m='4786990'>least</span> <span m='4787170'>squares</span> <span
  m='4787490'>estimate</span> <span m='4787880'>are, in</span> <span
  m='4787950'>fact,</span> <span m='4788250'>our</span> <span
  m='4788450'>maximum</span> <span m='4788960'>likelihood</span> <span
  m='4789370'>estimates.</span> </p><p><span m='4791690'>And</span> <span
  m='4792660'>what</span> <span m='4792960'>we</span> <span
  m='4793250'>want</span> <span m='4793560'>to</span> <span
  m='4793670'>do</span> <span m='4794240'>with</span> <span m='4795526'>a</span>
  <span m='4795940'>maximum</span> <span m='4796480'>likelihood</span> <span
  m='4797570'>is</span> <span m='4798330'>to</span> <span
  m='4799500'>maximize.</span> <span m='4802000'>We</span> <span
  m='4802140'>want</span> <span m='4802370'>to</span> <span
  m='4802460'>define</span> <span m='4804310'>the</span> <span
  m='4804490'>likelihood</span> <span m='4804950'>function,</span> <span
  m='4805420'>which</span> <span m='4805640'>is</span> <span
  m='4805950'>the</span> <span m='4806520'>density</span> <span
  m='4807110'>function</span> <span m='4807880'>for</span> <span
  m='4808400'>the</span> <span m='4808570'>data</span> <span
  m='4809090'>given</span> <span m='4809290'>the</span> <span
  m='4809410'>unknown</span> <span m='4809740'>parameters.</span> <span
  m='4812110'>And</span> <span m='4814850'>this</span> <span
  m='4815230'>density</span> <span m='4815660'>function</span> <span
  m='4815990'>is</span> <span m='4816100'>simply</span> <span
  m='4816390'>the</span> <span m='4816510'>density</span> <span
  m='4816930'>function</span> <span m='4817250'>for a</span> <span
  m='4817440'>multivariate</span> <span m='4818020'>normal</span> <span
  m='4818370'>random</span> <span m='4818720'>variable.</span> <span
  m='4820310'>And</span> <span m='4821360'>the</span> <span
  m='4821640'>maximum</span> <span m='4822310'>likelihood</span> <span
  m='4824010'>estimates</span> <span m='4824630'>are</span> <span
  m='4825670'>the</span> <span m='4826070'>estimates</span> <span
  m='4826570'>of</span> <span m='4826650'>the</span> <span
  m='4826750'>underlying</span> <span m='4827070'>parameters</span> <span
  m='4828120'>that</span> <span m='4829400'>basically</span> <span
  m='4829680'>maximize</span> <span m='4830880'>the</span> <span
  m='4830970'>density</span> <span m='4831350'>function.</span> <span
  m='4831650'>So it's</span> <span m='4831970'>the</span> <span
  m='4832050'>values</span> <span m='4832480'>of</span> <span
  m='4832560'>the</span> <span m='4832660'>underlying</span> <span
  m='4833070'>parameters</span> <span m='4834200'>that</span> <span
  m='4834340'>make</span> <span m='4834600'>the</span> <span
  m='4834710'>data</span> <span m='4835550'>that</span> <span
  m='4835700'>was</span> <span m='4835840'>observed</span> <span
  m='4836350'>the</span> <span m='4836420'>most</span> <span
  m='4836710'>likely.</span> </p><p><span m='4840520'>And</span> <span
  m='4840790'>if</span> <span m='4841000'>you</span> <span
  m='4841460'>plug</span> <span m='4841895'>in</span> <span
  m='4842870'>the</span> <span m='4844000'>values</span> <span
  m='4845290'>of</span> <span m='4845510'>the</span> <span
  m='4846230'>density</span> <span m='4846660'>function,</span> <span
  m='4849110'>basically</span> <span m='4849810'>we</span> <span
  m='4849990'>have</span> <span m='4851200'>these</span> <span
  m='4851940'>independent</span> <span m='4852810'>random</span> <span
  m='4853150'>variables,</span> <span m='4853680'>yi,</span> <span
  m='4855960'>whose</span> <span m='4856230'>product</span> <span
  m='4857200'>is</span> <span m='4857490'>the</span> <span
  m='4857610'>joint</span> <span m='4857900'>density.</span> <span
  m='4860540'>The</span> <span m='4861440'>likelihood</span> <span
  m='4862020'>function</span> <span m='4863250'>turns</span> <span
  m='4863690'>out</span> <span m='4865466'>to</span> <span m='4865920'>be</span>
  <span m='4867280'>basically</span> <span m='4867430'>a</span> <span
  m='4867600'>function</span> <span m='4868470'>of</span> <span
  m='4868580'>the</span> <span m='4868670'>least</span> <span
  m='4868850'>squares</span> <span m='4869200'>criterion.</span> <span
  m='4871260'>So</span> <span m='4871430'>if</span> <span m='4871530'>you</span>
  <span m='4871640'>fit</span> <span m='4871910'>models</span> <span
  m='4872165'>by</span> <span m='4872420'>least</span> <span
  m='4872650'>squares,</span> <span m='4874980'>you're</span> <span
  m='4875280'>consistent</span> <span m='4875755'>with</span> <span
  m='4876230'>doing</span> <span m='4876560'>something</span> <span
  m='4877170'>decent</span> <span m='4877645'>in at</span> <span
  m='4878120'>least</span> <span m='4878480'>applying</span> <span
  m='4878820'>the</span> <span m='4878900'>maximum</span> <span
  m='4879330'>likelihood</span> <span m='4879700'>principle</span> <span
  m='4880180'>if</span> <span m='4880310'>you</span> <span
  m='4880420'>had</span> <span m='4880830'>a</span> <span
  m='4880920'>normal</span> <span m='4881380'>linear</span> <span
  m='4881675'>regression</span> <span m='4881970'>model.</span> </p><p><span
  m='4883720'>And</span> <span m='4885140'>it's</span> <span
  m='4885830'>useful</span> <span m='4886230'>to</span> <span
  m='4886350'>know</span> <span m='4887050'>when</span> <span
  m='4887730'>your</span> <span m='4888050'>statistical</span> <span
  m='4889700'>estimation</span> <span m='4891730'>algorithms</span> <span
  m='4892600'>are</span> <span m='4892860'>consistent</span> <span
  m='4893540'>with</span> <span m='4894790'>certain</span> <span
  m='4896650'>principles</span> <span m='4897230'>like</span> <span
  m='4897460'>maximum</span> <span m='4897940'>likelihood</span> <span
  m='4898370'>estimation</span> <span m='4899290'>or</span> <span
  m='4899630'>others.</span> <span m='4901620'>So</span> <span
  m='4901740'>let</span> <span m='4901850'>me,</span> <span m='4902730'>I</span>
  <span m='4902910'>guess,</span> <span m='4903120'>finish</span> <span
  m='4903410'>there.</span> <span m='4903930'>And</span> <span
  m='4905280'>next</span> <span m='4905600'>time,</span> <span
  m='4906100'>I</span> <span m='4906310'>will</span> <span
  m='4907950'>just</span> <span m='4908420'>talk</span> <span
  m='4908690'>a</span> <span m='4908750'>little</span> <span
  m='4908950'>bit</span> <span m='4909100'>about</span> <span
  m='4909540'>generalized</span> <span m='4910220'>M</span> <span
  m='4910450'>estimators.</span> <span m='4912780'>Those</span> <span
  m='4913020'>provide</span> <span m='4914050'>a</span> <span
  m='4914230'>class</span> <span m='4914610'>of</span> <span
  m='4914720'>estimators</span> <span m='4915160'>that</span> <span
  m='4915240'>can</span> <span m='4915590'>be</span> <span
  m='4915740'>used</span> <span m='4916160'>for</span> <span
  m='4922560'>finding</span> <span m='4922920'>robust</span> <span
  m='4923370'>estimates</span> <span m='4924420'>and</span> <span
  m='4924630'>also</span> <span m='4925150'>quantile</span> <span
  m='4926310'>estimates</span> <span m='4927110'>of</span> <span
  m='4927260'>regression</span> <span m='4927710'>parameters</span> <span
  m='4928290'>which</span> <span m='4929770'>are</span> <span
  m='4929870'>very</span> <span m='4930770'>interesting.</span> </p>
embedded_media:
  - uid: ba5ae1f31f80bd2549792d3d5914d5d8
    parent_uid: 28a7cf993a93a0278ad3de777e055c1e
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: l1kLCrxL9Hk
  - uid: 21935ef21f167874631953ff3ce85cf2
    parent_uid: 28a7cf993a93a0278ad3de777e055c1e
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/l1kLCrxL9Hk/default.jpg'
  - uid: 09407c68897b1532eaec965b2346fcb7
    parent_uid: 28a7cf993a93a0278ad3de777e055c1e
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id954073595'
  - uid: f51753041b2e09503d324f189a3d55f9
    parent_uid: 28a7cf993a93a0278ad3de777e055c1e
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18.S096F13/MIT18_S096F13_lec06_300k.mp4'
  - uid: 6b22ab3787c055675787f7102e2bbc54
    parent_uid: 28a7cf993a93a0278ad3de777e055c1e
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: l1kLCrxL9Hk
  - uid: 383dc0bf3ec1a08462a7b38f17dec68f
    parent_uid: 28a7cf993a93a0278ad3de777e055c1e
    id: l1kLCrxL9Hk.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-6-regression-analysis/l1kLCrxL9Hk.srt
  - uid: 9ab55fc664665a04bbc54003eaca40a5
    parent_uid: 28a7cf993a93a0278ad3de777e055c1e
    id: l1kLCrxL9Hk.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-6-regression-analysis/l1kLCrxL9Hk.pdf
  - uid: 31660279093f25d5745a0516ba170c2d
    parent_uid: 28a7cf993a93a0278ad3de777e055c1e
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: c40de8e8545fe4be4aca05158a0328ad
    parent_uid: 28a7cf993a93a0278ad3de777e055c1e
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
