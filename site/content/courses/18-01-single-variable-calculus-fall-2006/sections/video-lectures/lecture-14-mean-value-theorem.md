---
title: 'Lecture 14: Mean Value Theorem'
uid: b7b79337348fa21bbf46f1c7bd6565d4
parent_uid: eb1d53c3c4c145f03327e4698375e766
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-14-mean-value-theorem
short_url: lecture-14-mean-value-theorem
inline_embed_id: '22169186lecture14:meanvaluetheorem85564022'
about_this_resource_text: >-
  <div class="vidpad"><p><strong>Topics covered:</strong> Mean value theorem;
  Inequalities</p> <p><strong>Instructor:</strong> Prof. David Jerison</p></div>
related_resources_text: >-
  <div class="vidpad"><p>Lecture Notes (<a
  href="./resolveuid/1a211af8e4860b63b801aa3d6e7a2e95">PDF</a>)</p></div>
transcript: >-
  <p><span m='0'>The</span> <span m='90'>following</span> <span
  m='520'>content</span> <span m='1270'>is</span> <span m='1420'>provided</span>
  <span m='1680'>under a</span> <span m='1870'>Creative</span> <span
  m='2330'>Commons</span> <span m='2730'>license.</span> <span
  m='3610'>Your</span> <span m='3810'>support</span> <span m='4330'>will</span>
  <span m='4460'>help</span> <span m='4730'>MIT</span> <span
  m='5190'>OpenCourseWare</span> <span m='5990'>continue to</span> <span
  m='6520'>offer</span> <span m='6890'>high</span> <span m='7140'>quality</span>
  <span m='7620'>educational</span> <span m='8250'>resources</span> <span
  m='8830'>for</span> <span m='8980'>free.</span> <span m='10010'>To make</span>
  <span m='10250'>a</span> <span m='10310'>donation,</span> <span
  m='11070'>or</span> <span m='11240'>to</span> <span m='11410'>view</span>
  <span m='11550'>additional</span> <span m='11980'>materials</span> <span
  m='12540'>from hundreds</span> <span m='12930'>of</span> <span
  m='13160'>MIT</span> <span m='13310'>courses,</span> <span
  m='13500'>visit</span> <span m='13600'>MIT</span> <span
  m='14060'>OpenCourseWare</span> <span m='15870'>at</span> <span
  m='16890'>ocw.mit.edu.</span> </p><p><span m='22190'>PROFESSOR: What
  we're</span> <span m='22380'>going</span> <span m='22520'>to</span> <span
  m='22600'>talk</span> <span m='22840'>about</span> <span
  m='23100'>today</span> <span m='23380'>is</span> <span m='23850'>a</span>
  <span m='23920'>continuation</span> <span m='24750'>of</span> <span
  m='24840'>last</span> <span m='25260'>time.</span> <span m='26750'>I</span>
  <span m='26840'>want</span> <span m='27140'>to</span> <span
  m='27500'>review</span> <span m='27970'>Newton's</span> <span
  m='28340'>method</span> <span m='28750'>because</span> <span
  m='28990'>I</span> <span m='29070'>want</span> <span m='29240'>to</span> <span
  m='29300'>talk</span> <span m='29600'>to</span> <span m='29680'>you</span>
  <span m='29750'>about</span> <span m='29990'>its</span> <span
  m='30220'>accuracy.</span> <span m='41220'>So</span> <span m='41790'>if</span>
  <span m='42000'>you</span> <span m='42110'>remember,</span> <span
  m='43240'>the way</span> <span m='43480'>Newton's</span> <span
  m='43870'>method</span> <span m='44230'>works</span> <span m='45530'>is</span>
  <span m='45730'>this.</span> <span m='46090'>If</span> <span
  m='46210'>you</span> <span m='46320'>have</span> <span m='46540'>a</span>
  <span m='47400'>curve</span> <span m='48680'>and</span> <span
  m='48830'>you</span> <span m='48910'>want to</span> <span
  m='49140'>know</span> <span m='49280'>whether</span> <span m='49790'>it</span>
  <span m='50150'>crosses</span> <span m='50620'>the</span> <span
  m='50880'>axis.</span> <span m='52730'>And</span> <span m='52880'>you</span>
  <span m='52960'>don't</span> <span m='53170'>know</span> <span
  m='53250'>where</span> <span m='53430'>this</span> <span
  m='53690'>point</span> <span m='54100'>is,</span> <span m='54850'>this</span>
  <span m='55030'>point</span> <span m='55280'>which</span> <span
  m='55450'>I'll</span> <span m='55570'>call</span> <span m='55820'>x</span>
  <span m='56450'>here,</span> <span m='59590'>what</span> <span
  m='59760'>you</span> <span m='59890'>do</span> <span m='60100'>is</span> <span
  m='60260'>you</span> <span m='60360'>take</span> <span m='60580'>a</span>
  <span m='60680'>guess.</span> <span m='61250'>Maybe</span> <span
  m='61720'>you</span> <span m='61840'>take</span> <span m='62080'>a</span>
  <span m='62130'>point</span> <span m='62440'>x_0</span> <span
  m='62950'>here.</span> <span m='63590'>And</span> <span m='63700'>then</span>
  <span m='63790'>you</span> <span m='63880'>go</span> <span
  m='64070'>down</span> <span m='65220'>to</span> <span m='65330'>this</span>
  <span m='65510'>point</span> <span m='65770'>on</span> <span
  m='65840'>the</span> <span m='65920'>graph,</span> <span m='66640'>and</span>
  <span m='66760'>you</span> <span m='66830'>draw</span> <span m='67130'>the
  tangent</span> <span m='67690'>line.</span> <span m='68930'>I'll</span> <span
  m='69070'>draw</span> <span m='69280'>these</span> <span m='69470'>in</span>
  <span m='69560'>a</span> <span m='69610'>couple</span> <span
  m='69890'>of</span> <span m='69960'>different</span> <span
  m='70210'>colors</span> <span m='70560'>so</span> <span m='70670'>that</span>
  <span m='70770'>you</span> <span m='70880'>can</span> <span
  m='71000'>see</span> <span m='71200'>the</span> <span
  m='71310'>difference</span> <span m='71690'>between</span> <span
  m='72200'>them.</span> </p><p><span m='73180'>So</span> <span
  m='73340'>here's</span> <span m='73570'>a</span> <span
  m='73640'>tangent</span> <span m='74150'>line.</span> <span
  m='74410'>It's</span> <span m='74540'>coming</span> <span m='74870'>out</span>
  <span m='75040'>like</span> <span m='75280'>that.</span> <span
  m='78280'>And</span> <span m='78650'>that</span> <span m='78840'>one</span>
  <span m='78970'>is</span> <span m='79070'>going to</span> <span
  m='79230'>get</span> <span m='79410'>a</span> <span m='79460'>little</span>
  <span m='79690'>closer</span> <span m='80750'>to</span> <span
  m='80880'>our</span> <span m='81520'>target</span> <span
  m='82000'>point.</span> <span m='83090'>But</span> <span m='83330'>now</span>
  <span m='83490'>the</span> <span m='83620'>trick</span> <span
  m='83970'>is,</span> <span m='84550'>and</span> <span m='85260'>this</span>
  <span m='85630'>is</span> <span m='85990'>rather</span> <span
  m='86330'>hard</span> <span m='86550'>to</span> <span m='86640'>see</span>
  <span m='87040'>because</span> <span m='87310'>the</span> <span
  m='87390'>scale</span> <span m='87760'>gets</span> <span
  m='87970'>small</span> <span m='88310'>incredibly</span> <span
  m='88970'>fast,</span> <span m='90060'>is</span> <span m='90230'>that
  if</span> <span m='90370'>you</span> <span m='90470'>go</span> <span
  m='90610'>right</span> <span m='90880'>up</span> <span m='91030'>from</span>
  <span m='91270'>that,</span> <span m='92500'>and</span> <span
  m='92770'>you</span> <span m='92850'>do</span> <span m='92980'>this</span>
  <span m='93140'>same</span> <span m='93520'>trick</span> <span
  m='93800'>over</span> <span m='94140'>again.</span> <span
  m='94420'>That</span> <span m='94570'>is,</span> <span m='94670'>this</span>
  <span m='94820'>is</span> <span m='94910'>your</span> <span
  m='95050'>second</span> <span m='95610'>guess,</span> <span
  m='96040'>x_1,</span> <span m='98090'>and</span> <span m='98290'>now</span>
  <span m='98400'>you</span> <span m='98540'>draw</span> <span
  m='98800'>the</span> <span m='98910'>second</span> <span
  m='99410'>tangent</span> <span m='99890'>line.</span> <span
  m='101360'>Which</span> <span m='101560'>is</span> <span m='101670'>going
  to</span> <span m='101830'>come</span> <span m='102020'>down</span> <span
  m='102260'>this</span> <span m='102470'>way.</span> <span
  m='104680'>That's</span> <span m='104970'>really</span> <span
  m='105470'>close.</span> <span m='106290'>You</span> <span
  m='106470'>can</span> <span m='106610'>see</span> <span m='107470'>here</span>
  <span m='107810'>on</span> <span m='107950'>the</span> <span
  m='108020'>chalkboard,</span> <span m='108570'>it's</span> <span
  m='108720'>practically</span> <span m='109800'>the</span> <span
  m='109930'>same</span> <span m='110310'>as</span> <span m='110430'>the</span>
  <span m='110550'>dot</span> <span m='110920'>of</span> <span
  m='111050'>x.</span> <span m='111740'>So</span> <span m='111930'>that's</span>
  <span m='112670'>the</span> <span m='112770'>next</span> <span
  m='113190'>guess.</span> <span m='114610'>Which</span> <span
  m='114870'>is</span> <span m='115020'>x_2.</span> <span m='116860'>And</span>
  <span m='117830'>I</span> <span m='117980'>want</span> <span
  m='118280'>to</span> <span m='118630'>analyze,</span> <span
  m='119270'>now,</span> <span m='120760'>how</span> <span
  m='121040'>close</span> <span m='121450'>it</span> <span
  m='121640'>gets.</span> <span m='123620'>And</span> <span
  m='123750'>just</span> <span m='124090'>describe</span> <span
  m='124670'>to</span> <span m='124790'>you</span> <span m='125410'>how</span>
  <span m='125620'>it</span> <span m='125710'>works.</span> <span
  m='125990'>So</span> <span m='126110'>let</span> <span m='126230'>me</span>
  <span m='126300'>just</span> <span m='126530'>remind</span> <span
  m='127030'>you</span> <span m='127690'>of</span> <span m='127840'>the</span>
  <span m='127940'>formulas,</span> <span m='128530'>too.</span> <span
  m='129060'>It's</span> <span m='129540'>worth</span> <span
  m='129770'>having</span> <span m='130100'>them</span> <span
  m='130200'>in</span> <span m='130280'>your</span> <span
  m='130410'>head.</span> </p><p><span m='131150'>So</span> <span
  m='132590'>the</span> <span m='132770'>formula</span> <span
  m='133180'>for</span> <span m='133310'>the</span> <span m='133410'>next</span>
  <span m='133770'>one</span> <span m='134140'>is</span> <span
  m='136310'>this.</span> <span m='139240'>And</span> <span
  m='139550'>then</span> <span m='139690'>the</span> <span
  m='139790'>idea</span> <span m='140330'>is</span> <span m='140780'>just</span>
  <span m='141130'>to</span> <span m='141210'>repeat</span> <span
  m='141840'>this</span> <span m='142090'>process.</span> <span
  m='143570'>Which</span> <span m='144070'>has</span> <span m='144450'>a</span>
  <span m='144860'>fancy</span> <span m='145310'>name,</span> <span
  m='147260'>in</span> <span m='147880'>algorithms,</span> <span
  m='148540'>which</span> <span m='148720'>is</span> <span m='148950'>to</span>
  <span m='149140'>iterate,</span> <span m='149840'>if</span> <span
  m='149970'>you</span> <span m='150080'>like.</span> <span m='151210'>So</span>
  <span m='151350'>we</span> <span m='151470'>repeat</span> <span
  m='151870'>the</span> <span m='151960'>process.</span> <span
  m='152530'>And</span> <span m='152650'>that</span> <span
  m='152830'>means,</span> <span m='153060'>for</span> <span
  m='153220'>example,</span> <span m='153930'>we</span> <span
  m='154040'>generate</span> <span m='154790'>x_2</span> <span
  m='154990'>from</span> <span m='155140'>x_1</span> <span m='155720'>by</span>
  <span m='155860'>the</span> <span m='155980'>same</span> <span
  m='156310'>formula.</span> <span m='161730'>And</span> <span
  m='161860'>we</span> <span m='161960'>did</span> <span m='162100'>this</span>
  <span m='162270'>last</span> <span m='162710'>time.</span> <span
  m='163170'>And,</span> <span m='163480'>more</span> <span
  m='163660'>generally,</span> <span m='164720'>the</span> <span
  m='165410'>(n+1)st</span> <span m='166530'>is</span> <span
  m='166690'>generated</span> <span m='167180'>from</span> <span
  m='167340'>the</span> <span m='167460'>nth</span> <span
  m='167930'>guess,</span> <span m='169750'>by</span> <span
  m='169880'>this</span> <span m='170110'>formula</span> <span
  m='170550'>here.</span> <span m='175150'>So</span> <span
  m='177230'>what</span> <span m='177400'>I'd</span> <span
  m='177490'>like</span> <span m='177690'>to</span> <span m='177810'>do</span>
  <span m='178010'>is</span> <span m='178190'>just</span> <span
  m='178590'>draw</span> <span m='178940'>the</span> <span
  m='179040'>picture</span> <span m='180050'>of</span> <span
  m='180380'>one</span> <span m='180810'>step</span> <span m='182820'>a</span>
  <span m='182970'>little</span> <span m='183190'>bit</span> <span
  m='183340'>more</span> <span m='183520'>closely.</span> <span
  m='183920'>So</span> <span m='184050'>I</span> <span m='184110'>want to</span>
  <span m='184320'>blow</span> <span m='184700'>up</span> <span
  m='184910'>the</span> <span m='185010'>picture,</span> <span
  m='185380'>which</span> <span m='185580'>is</span> <span
  m='186160'>above</span> <span m='186480'>me</span> <span
  m='186680'>there.</span> <span m='190880'>That's</span> <span
  m='191070'>a</span> <span m='191140'>little</span> <span m='191330'>too</span>
  <span m='191510'>high.</span> <span m='191950'>Where</span> <span
  m='193050'>are my</span> <span m='194150'>erasers?</span> <span m='196750'>Got
  to</span> <span m='197020'>get</span> <span m='197260'>it a</span> <span
  m='197320'>little</span> <span m='197620'>lower</span> <span
  m='197840'>than</span> <span m='198000'>that,</span> <span
  m='198390'>since</span> <span m='198640'>I'm</span> <span m='198750'>going
  to</span> <span m='199480'>depict</span> <span m='199840'>everything</span>
  <span m='200220'>above</span> <span m='200730'>the</span> <span
  m='201400'>line</span> <span m='201690'>here.</span> <span
  m='201890'>So</span> <span m='202050'>here's</span> <span m='202330'>my</span>
  <span m='202460'>curve</span> <span m='202760'>coming</span> <span
  m='203120'>down.</span> <span m='204180'>And</span> <span
  m='204350'>suppose</span> <span m='205700'>that</span> <span
  m='206560'>x_1</span> <span m='208180'>is</span> <span m='208340'>here,</span>
  <span m='209470'>so</span> <span m='209660'>this</span> <span
  m='209840'>is</span> <span m='210190'>directly</span> <span
  m='210620'>above</span> <span m='210900'>it</span> <span m='210990'>is</span>
  <span m='211170'>this</span> <span m='211360'>point</span> <span
  m='211660'>here.</span> <span m='212170'>And</span> <span
  m='212350'>then</span> <span m='212970'>as</span> <span m='213130'>I</span>
  <span m='213220'>drew</span> <span m='213490'>it,</span> <span
  m='213620'>this</span> <span m='214160'>green</span> <span
  m='215040'>tangent</span> <span m='216640'>coming</span> <span
  m='216930'>down</span> <span m='218040'>like</span> <span
  m='218260'>that.</span> <span m='218530'>It's</span> <span m='218650'>a</span>
  <span m='218710'>little</span> <span m='218920'>bit</span> <span
  m='219050'>closer,</span> <span m='219920'>and</span> <span
  m='220080'>this</span> <span m='220270'>was</span> <span m='220450'>the</span>
  <span m='220540'>place,</span> <span m='221240'>x_2,</span> <span
  m='222970'>and</span> <span m='223270'>then</span> <span
  m='223450'>here</span> <span m='223640'>was</span> <span m='224540'>x,</span>
  <span m='225160'>our</span> <span m='225310'>target,</span> <span
  m='226210'>which</span> <span m='226440'>is</span> <span
  m='226530'>where</span> <span m='226660'>the</span> <span
  m='226750'>curve</span> <span m='227110'>crosses</span> <span
  m='227490'>as</span> <span m='227610'>opposed</span> <span
  m='227950'>to</span> <span m='228020'>the</span> <span
  m='228120'>straight</span> <span m='228880'>tangent</span> <span
  m='229390'>line</span> <span m='229580'>crossing.</span> </p><p><span
  m='232600'>So</span> <span m='232730'>that's</span> <span
  m='233030'>the</span> <span m='233100'>picture</span> <span
  m='233740'>that</span> <span m='233920'>I</span> <span m='233970'>want</span>
  <span m='234250'>you</span> <span m='234360'>to</span> <span
  m='234430'>keep</span> <span m='234720'>in</span> <span
  m='234800'>mind.</span> <span m='236310'>And</span> <span
  m='236520'>now,</span> <span m='236900'>we're</span> <span
  m='237150'>just</span> <span m='237380'>going to</span> <span
  m='237650'>do</span> <span m='238030'>a</span> <span m='238150'>very</span>
  <span m='238440'>qualitative</span> <span m='240080'>kind</span> <span
  m='240440'>of</span> <span m='241160'>error</span> <span
  m='241490'>analysis.</span> <span m='243450'>So</span> <span m='243740'>here's
  our</span> <span m='244030'>error</span> <span m='244310'>analysis.</span>
  <span m='252960'>And</span> <span m='254260'>we're</span> <span
  m='254560'>starting</span> <span m='255070'>out,</span> <span
  m='257140'>the</span> <span m='257320'>distance</span> <span
  m='258120'>between</span> <span m='258960'>x_1</span> <span
  m='259180'>and</span> <span m='259350'>x</span> <span m='259720'>is</span>
  <span m='259870'>what</span> <span m='260020'>we</span> <span m='260120'>want
  to</span> <span m='260300'>measure.</span> <span m='260480'>In</span> <span
  m='260640'>other</span> <span m='260760'>words,</span> <span
  m='260910'>how</span> <span m='261120'>close</span> <span m='261550'>we are
  to</span> <span m='261840'>where</span> <span m='262460'>we're</span> <span
  m='262570'>heading.</span> <span m='263530'>And</span> <span
  m='264090'>so</span> <span m='264310'>I've</span> <span
  m='264460'>called</span> <span m='264790'>that,</span> <span
  m='265130'>I'm</span> <span m='265220'>going to</span> <span
  m='265350'>call</span> <span m='265550'>that</span> <span
  m='265790'>Error</span> <span m='266120'>1.</span> <span
  m='266600'>That's</span> <span m='266910'>x</span> <span m='267260'>-</span>
  <span m='267680'>x1,</span> <span m='268630'>in</span> <span
  m='268980'>absolute</span> <span m='269460'>value.</span> <span
  m='271440'>And</span> <span m='271590'>then,</span> <span
  m='272250'>E_2</span> <span m='272940'>would</span> <span m='273190'>be
  x</span> <span m='274180'>-</span> <span m='274500'>x_2,</span> <span
  m='275430'>in</span> <span m='275510'>absolute</span> <span
  m='275800'>value.</span> <span m='277010'>And</span> <span
  m='277250'>so</span> <span m='277510'>forth.</span> <span
  m='279100'>And,</span> <span m='279470'>last</span> <span
  m='279960'>time,</span> <span m='280330'>when</span> <span m='280490'>I</span>
  <span m='280570'>was</span> <span m='280800'>estimating</span> <span
  m='281380'>the</span> <span m='281460'>size</span> <span m='281860'>of</span>
  <span m='281970'>this--</span> <span m='284190'>So</span> <span
  m='284390'>E_n</span> <span m='284630'>would be</span> <span
  m='285060'>whatever</span> <span m='285370'>it was.</span> <span
  m='285870'>Last</span> <span m='286290'>time,</span> <span
  m='286520'>remember,</span> <span m='286900'>we</span> <span
  m='287030'>did</span> <span m='287220'>it</span> <span m='288540'>for</span>
  <span m='289030'>a</span> <span m='289350'>specific</span> <span
  m='290720'>case.</span> <span m='291900'>So</span> <span
  m='292000'>last</span> <span m='292460'>time,</span> <span m='293870'>I</span>
  <span m='293990'>actually</span> <span m='294390'>wrote</span> <span
  m='294710'>down</span> <span m='295010'>the</span> <span
  m='295070'>numbers.</span> <span m='296020'>And</span> <span
  m='296270'>they</span> <span m='296490'>were</span> <span
  m='296630'>these</span> <span m='296850'>numbers,</span> <span
  m='297450'>maybe</span> <span m='297700'>you</span> <span
  m='297780'>could</span> <span m='297910'>call</span> <span
  m='298150'>them</span> <span m='298350'>E_n,</span> <span
  m='299170'>which</span> <span m='299380'>was</span> <span
  m='299530'>the</span> <span m='299720'>absolute</span> <span m='300160'>value
  of</span> <span m='300570'>square root of</span> <span m='301010'>5</span>
  <span m='301370'>minus</span> <span m='302480'>x_n.</span> <span
  m='303270'>These</span> <span m='303520'>are</span> <span
  m='303640'>the</span> <span m='303750'>sizes</span> <span
  m='304280'>that</span> <span m='304400'>I</span> <span m='304450'>was</span>
  <span m='304600'>writing</span> <span m='304920'>down</span> <span
  m='305700'>last</span> <span m='306110'>time.</span> <span
  m='306610'>And</span> <span m='306830'>I</span> <span m='306880'>just</span>
  <span m='307130'>want to</span> <span m='307320'>talk</span> <span
  m='307610'>about</span> <span m='307890'>in</span> <span
  m='308060'>general</span> <span m='308520'>what</span> <span
  m='308670'>to</span> <span m='308880'>expect.</span> <span
  m='311620'>That</span> <span m='311820'>worked</span> <span
  m='312410'>amazingly</span> <span m='313020'>well,</span> <span
  m='313340'>and</span> <span m='313430'>I</span> <span m='313480'>want
  to</span> <span m='313670'>show</span> <span m='313880'>you</span> <span
  m='313990'>that</span> <span m='314140'>that's</span> <span
  m='314420'>true</span> <span m='314670'>pretty</span> <span
  m='314910'>much</span> <span m='315160'>in</span> <span
  m='315260'>general.</span> </p><p><span m='316990'>So</span> <span
  m='317240'>the</span> <span m='317360'>first</span> <span
  m='317780'>distance,</span> <span m='318830'>again,</span> <span
  m='319370'>is</span> <span m='319510'>E_1,</span> <span m='322260'>is</span>
  <span m='322690'>this</span> <span m='322890'>distance</span> <span
  m='323110'>here.</span> <span m='323660'>That's</span> <span
  m='323770'>the</span> <span m='324050'>E_1.</span> <span m='325190'>And</span>
  <span m='325420'>then</span> <span m='325530'>this</span> <span
  m='325720'>shorter</span> <span m='326180'>distance,</span> <span
  m='327140'>here,</span> <span m='327570'>this</span> <span
  m='327810'>little</span> <span m='328040'>bit,</span> <span m='329560'>which
  I'll</span> <span m='329870'>mark</span> <span m='330180'>maybe in</span>
  <span m='330530'>green,</span> <span m='332440'>is</span> <span
  m='335650'>E_2.</span> <span m='337410'>So</span> <span m='337580'>how</span>
  <span m='337730'>much</span> <span m='338000'>shorter</span> <span
  m='339070'>is</span> <span m='339270'>E_1</span> <span m='339480'>than</span>
  <span m='340090'>E_2?</span> <span m='340970'>Well,</span> <span
  m='341400'>the</span> <span m='341560'>idea</span> <span m='342040'>is</span>
  <span m='342240'>pretty</span> <span m='342560'>simple.</span> <span
  m='344080'>It's</span> <span m='344380'>that</span> <span m='344840'>if</span>
  <span m='345030'>this</span> <span m='345260'>distance</span> <span
  m='345820'>and</span> <span m='346050'>this</span> <span
  m='346280'>vertical</span> <span m='346650'>distance,</span> <span
  m='346910'>they are</span> <span m='347020'>probably</span> <span
  m='347330'>about</span> <span m='347550'>the</span> <span
  m='347650'>same</span> <span m='348410'>as</span> <span m='348500'>the</span>
  <span m='348590'>perpendicular</span> <span m='349170'>distance.</span> <span
  m='349520'>And</span> <span m='349640'>this</span> <span m='349750'>is</span>
  <span m='349870'>basically</span> <span m='350360'>the</span> <span
  m='350450'>situation</span> <span m='351550'>of</span> <span
  m='351710'>a</span> <span m='351810'>curve</span> <span
  m='352390'>touching</span> <span m='352820'>a</span> <span
  m='352890'>tangent</span> <span m='353420'>line.</span> <span
  m='354140'>Then</span> <span m='354320'>the</span> <span
  m='354420'>separation</span> <span m='355670'>is</span> <span
  m='355880'>going</span> <span m='356090'>to</span> <span m='356150'>be</span>
  <span m='356280'>quadratic.</span> <span m='358010'>And</span> <span
  m='358200'>that's</span> <span m='358390'>basically</span> <span
  m='358880'>what's</span> <span m='359120'>going</span> <span
  m='359330'>to</span> <span m='359390'>happen.</span> <span
  m='360150'>So,</span> <span m='360390'>in</span> <span m='360480'>other</span>
  <span m='360670'>words</span> <span m='361630'>the</span> <span
  m='362000'>distance</span> <span m='362960'>E_2</span> <span
  m='363780'>is</span> <span m='363950'>going</span> <span m='364170'>to</span>
  <span m='364240'>be</span> <span m='364440'>about</span> <span
  m='364810'>the</span> <span m='364950'>square</span> <span m='365780'>of
  the</span> <span m='365900'>distance</span> <span m='366330'>E_1.</span> <span
  m='366530'>And</span> <span m='367360'>that's</span> <span
  m='367630'>really</span> <span m='367900'>the</span> <span
  m='368020'>only</span> <span m='368960'>feature</span> <span m='370590'>of
  this that</span> <span m='370720'>I</span> <span m='370770'>want</span> <span
  m='371040'>to</span> <span m='371160'>point</span> <span
  m='371450'>out.</span> <span m='371620'>So,</span> <span
  m='371810'>approximately,</span> <span m='373210'>this</span> <span
  m='373470'>is</span> <span m='373610'>the</span> <span m='373690'>situation
  that</span> <span m='374660'>we're</span> <span m='374890'>going</span> <span
  m='375100'>to</span> <span m='375170'>get.</span> <span m='377880'>And</span>
  <span m='378070'>so</span> <span m='378200'>what</span> <span
  m='378380'>that</span> <span m='378640'>means</span> <span
  m='379040'>is,</span> <span m='380340'>and</span> <span
  m='381030'>maybe</span> <span m='381690'>thinking</span> <span
  m='382080'>from</span> <span m='382270'>last</span> <span
  m='382730'>time,</span> <span m='383140'>what</span> <span
  m='383290'>we</span> <span m='383460'>had</span> <span m='384140'>was</span>
  <span m='384380'>something</span> <span m='384740'>roughly</span> <span
  m='385030'>like</span> <span m='385270'>this.</span> <span
  m='385760'>You</span> <span m='385880'>have</span> <span m='386010'>an</span>
  <span m='386200'>E_0,</span> <span m='386650'>you</span> <span
  m='386770'>have</span> <span m='386940'>an</span> <span m='387200'>E_1,</span>
  <span m='387970'>you</span> <span m='388070'>have an</span> <span
  m='388540'>E_2,</span> <span m='389060'>you</span> <span m='389200'>have
  an</span> <span m='389470'>E_3,</span> <span m='390610'>and</span> <span
  m='390830'>so</span> <span m='391010'>forth.</span> <span m='391590'>Maybe
  I'll</span> <span m='391980'>write down</span> <span m='392430'>E_4</span>
  <span m='393640'>here.</span> <span m='394370'>And</span> <span
  m='394660'>last</span> <span m='395070'>time,</span> <span
  m='395340'>this</span> <span m='395540'>was</span> <span
  m='395650'>about</span> <span m='395960'>10^(-1).</span> <span
  m='397330'>So</span> <span m='397520'>the</span> <span
  m='397630'>expectation</span> <span m='398540'>based</span> <span
  m='398870'>on</span> <span m='399010'>this</span> <span m='399200'>rule</span>
  <span m='399650'>is</span> <span m='399990'>that</span> <span
  m='400530'>the</span> <span m='400700'>next</span> <span m='400990'>error's
  the</span> <span m='401400'>square of the</span> <span
  m='402120'>previous</span> <span m='402530'>one.</span> <span
  m='402710'>So</span> <span m='402830'>that's</span> <span
  m='403060'>10^(-2).</span> <span m='404500'>The</span> <span
  m='404750'>next</span> <span m='405010'>one</span> <span m='405150'>is</span>
  <span m='405280'>the</span> <span m='405380'>square</span> <span
  m='406400'>of</span> <span m='406560'>the</span> <span
  m='406630'>previous</span> <span m='407020'>one.</span> <span
  m='407140'>So</span> <span m='407260'>that's</span> <span
  m='407500'>10^(-4).</span> <span m='409090'>And</span> <span
  m='409200'>the</span> <span m='409260'>next</span> <span m='409530'>one</span>
  <span m='409700'>is</span> <span m='409810'>the</span> <span
  m='409870'>square</span> <span m='410070'>of</span> <span
  m='410150'>that,</span> <span m='410340'>that's</span> <span
  m='410570'>10^(-8).</span> <span m='412330'>And</span> <span
  m='412490'>this</span> <span m='412620'>one is</span> <span
  m='412820'>10^(-16).</span> </p><p><span m='415980'>So</span> <span
  m='416560'>the</span> <span m='416760'>thing</span> <span
  m='416960'>that's</span> <span m='417290'>impressive</span> <span
  m='417970'>about</span> <span m='418590'>this</span> <span
  m='418930'>list</span> <span m='419180'>of</span> <span
  m='419250'>numbers</span> <span m='419550'>is</span> <span
  m='419640'>you</span> <span m='419770'>can</span> <span m='419910'>see</span>
  <span m='420190'>that</span> <span m='420380'>the</span> <span
  m='420490'>number</span> <span m='420830'>of</span> <span
  m='420960'>digits</span> <span m='421980'>of</span> <span
  m='422170'>accuracy</span> <span m='422780'>doubles</span> <span
  m='423490'>at</span> <span m='423630'>each</span> <span
  m='423850'>stage.</span> <span m='429590'>Accuracy</span> <span
  m='433210'>doubles</span> <span m='436280'>at</span> <span
  m='436840'>each</span> <span m='438700'>step.</span> <span
  m='440760'>The</span> <span m='441570'>number</span> <span
  m='441920'>of</span> <span m='442020'>digits</span> <span m='442330'>of</span>
  <span m='442420'>accuracy</span> <span m='442870'>doubles at</span> <span
  m='443300'>each</span> <span m='443460'>step.</span> <span
  m='443710'>So,</span> <span m='444050'>very,</span> <span
  m='444500'>very</span> <span m='444720'>quickly</span> <span
  m='445080'>you</span> <span m='445200'>get</span> <span m='446420'>past</span>
  <span m='447580'>the</span> <span m='447720'>accuracy</span> <span
  m='448150'>of</span> <span m='448290'>your</span> <span
  m='448390'>calculator,</span> <span m='449210'>as you saw</span> <span
  m='449430'>on</span> <span m='449690'>your</span> <span
  m='449800'>problem</span> <span m='450340'>set.</span> <span
  m='451150'>And</span> <span m='453060'>this</span> <span
  m='453260'>thing</span> <span m='453460'>works</span> <span
  m='453760'>beautifully.</span> <span m='454220'>So,</span> <span
  m='455350'>let</span> <span m='455520'>me</span> <span m='455940'>just</span>
  <span m='456490'>summarize</span> <span m='457520'>by</span> <span
  m='457670'>saying</span> <span m='458020'>that</span> <span
  m='458160'>Newton's</span> <span m='460260'>method</span> <span
  m='462700'>works</span> <span m='466250'>very</span> <span
  m='468220'>well.</span> <span m='469680'>By</span> <span
  m='469810'>which</span> <span m='470050'>I</span> <span m='470120'>mean</span>
  <span m='471010'>this</span> <span m='471310'>kind</span> <span
  m='471540'>of</span> <span m='471620'>rate.</span> <span m='472250'>And</span>
  <span m='473240'>I</span> <span m='473370'>want to</span> <span
  m='473600'>be</span> <span m='473710'>just</span> <span
  m='473940'>slightly</span> <span m='474290'>specific.</span> <span
  m='475450'>If--</span> <span m='476800'>there are</span> <span
  m='477200'>really</span> <span m='477500'>two</span> <span
  m='477800'>conditions</span> <span m='478630'>disguised</span> <span
  m='479580'>in</span> <span m='479730'>this,</span> <span
  m='480490'>that</span> <span m='480730'>are</span> <span
  m='480790'>going</span> <span m='481070'>on.</span> <span
  m='481480'>One</span> <span m='481710'>is</span> <span m='481890'>that</span>
  <span m='482110'>f'</span> <span m='482820'>has</span> <span
  m='483150'>to</span> <span m='483250'>be,</span> <span m='483810'>not</span>
  <span m='484130'>to</span> <span m='484290'>big--</span> <span
  m='484800'>to</span> <span m='485030'>be</span> <span m='485180'>not</span>
  <span m='485650'>small.</span> <span m='489890'>And</span> <span
  m='492600'>f''</span> <span m='494220'>has</span> <span m='494460'>to</span>
  <span m='494560'>be</span> <span m='494840'>not</span> <span
  m='495150'>too</span> <span m='495260'>big.</span> <span
  m='499730'>That's</span> <span m='499950'>roughly</span> <span
  m='500350'>speaking</span> <span m='500710'>what's</span> <span
  m='500890'>going</span> <span m='501130'>on.</span> <span
  m='501290'>I'll</span> <span m='501330'>explain</span> <span
  m='501780'>these</span> <span m='501960'>in</span> <span
  m='502070'>just</span> <span m='502290'>a</span> <span
  m='502340'>second.</span> <span m='503320'>And</span> <span
  m='505190'>x_0</span> <span m='507740'>starts</span> <span
  m='510580'>nearby.</span> <span m='514050'>Nearby</span> <span
  m='514450'>the</span> <span m='514810'>target</span> <span
  m='515850'>value</span> <span m='516270'>x.</span> </p><p><span
  m='517490'>So</span> <span m='517810'>that's</span> <span
  m='518010'>really</span> <span m='518600'>what's</span> <span
  m='518850'>going</span> <span m='519150'>on</span> <span
  m='519390'>here.</span> <span m='522050'>So</span> <span m='522180'>let</span>
  <span m='522340'>me</span> <span m='522590'>just</span> <span
  m='523500'>illustrate to</span> <span m='524080'>you.</span> <span
  m='524610'>So</span> <span m='524950'>I'm</span> <span m='525080'>not</span>
  <span m='525240'>going</span> <span m='525420'>to</span> <span
  m='525490'>explain</span> <span m='525960'>this,</span> <span
  m='527080'>except</span> <span m='527910'>to</span> <span
  m='528020'>say</span> <span m='528520'>the</span> <span
  m='528610'>reason</span> <span m='528920'>why</span> <span
  m='529060'>this</span> <span m='529170'>second</span> <span
  m='529550'>derivative</span> <span m='529980'>gets</span> <span
  m='530220'>involved</span> <span m='531120'>is</span> <span
  m='531560'>that</span> <span m='531680'>it's</span> <span
  m='531800'>how</span> <span m='532010'>curved</span> <span
  m='532700'>the</span> <span m='532800'>curve</span> <span
  m='533170'>is,</span> <span m='533360'>that</span> <span m='533590'>how</span>
  <span m='533730'>far</span> <span m='534010'>away</span> <span
  m='534410'>you</span> <span m='534610'>get.</span> <span m='535330'>If</span>
  <span m='535730'>the</span> <span m='536020'>second</span> <span
  m='536290'>derivative</span> <span m='536550'>were</span> <span
  m='536730'>0,</span> <span m='537540'>that</span> <span
  m='537690'>would</span> <span m='537780'>be</span> <span m='537870'>the</span>
  <span m='537970'>best</span> <span m='538260'>possible</span> <span
  m='538610'>case.</span> <span m='538840'>Then</span> <span
  m='538950'>we</span> <span m='539050'>would</span> <span m='539170'>get</span>
  <span m='539330'>it</span> <span m='539410'>on</span> <span
  m='539560'>the</span> <span m='539630'>nose.</span> <span m='540660'>If</span>
  <span m='541680'>the</span> <span m='541770'>second</span> <span
  m='542020'>derivative</span> <span m='542150'>is</span> <span
  m='542280'>not</span> <span m='542500'>too</span> <span m='542630'>big,</span>
  <span m='542890'>that</span> <span m='542940'>means the</span> <span
  m='543160'>quadratic</span> <span m='543890'>part</span> <span
  m='544680'>is</span> <span m='544830'>not</span> <span m='545060'>too</span>
  <span m='545180'>big.</span> <span m='545360'>So</span> <span
  m='545490'>we</span> <span m='545570'>don't</span> <span m='545750'>get</span>
  <span m='545890'>away</span> <span m='546130'>very</span> <span
  m='546390'>far</span> <span m='546710'>from</span> <span m='546860'>the</span>
  <span m='546940'>green</span> <span m='547170'>line</span> <span
  m='547820'>to</span> <span m='547940'>the</span> <span m='548030'>curve</span>
  <span m='548350'>itself.</span> <span m='554110'>The</span> <span
  m='554310'>other</span> <span m='554500'>thing</span> <span
  m='554660'>to</span> <span m='554770'>say</span> <span m='555790'>is,</span>
  <span m='556220'>as</span> <span m='556380'>I</span> <span
  m='556480'>said,</span> <span m='557460'>that</span> <span
  m='557610'>x_0</span> <span m='557910'>needs</span> <span m='558150'>to</span>
  <span m='558250'>start</span> <span m='558590'>nearby.</span> <span
  m='559050'>So</span> <span m='559680'>I'll</span> <span
  m='560330'>explain</span> <span m='560750'>that</span> <span
  m='560920'>by</span> <span m='561080'>explaining</span> <span
  m='561520'>what</span> <span m='561970'>maybe</span> <span
  m='562200'>could</span> <span m='562370'>go</span> <span
  m='562550'>wrong.</span> <span m='563310'>So</span> <span
  m='564450'>the</span> <span m='564590'>ways</span> <span m='567130'>the</span>
  <span m='567200'>method</span> <span m='567480'>can</span> <span
  m='567720'>fail,</span> <span m='574910'>and</span> <span
  m='575640'>one</span> <span m='576830'>example</span> <span
  m='579420'>which</span> <span m='579720'>actually</span> <span
  m='580080'>would</span> <span m='580210'>have</span> <span
  m='580340'>happened</span> <span m='581800'>in</span> <span
  m='581940'>our</span> <span m='583800'>example</span> <span
  m='584250'>from</span> <span m='584410'>last</span> <span
  m='584750'>time,</span> <span m='585080'>which</span> <span
  m='585230'>was</span> <span m='585470'>y</span> <span m='585690'>=</span>
  <span m='585850'>x^2</span> <span m='587410'>-</span> <span
  m='587710'>5,</span> <span m='589160'>is</span> <span
  m='589750'>suppose</span> <span m='590260'>we'd</span> <span
  m='590390'>started</span> <span m='590870'>x_0</span> <span
  m='591410'>over</span> <span m='591750'>here.</span> <span
  m='594840'>Then</span> <span m='595050'>this</span> <span
  m='595240'>thing</span> <span m='595380'>would</span> <span
  m='595490'>have</span> <span m='595590'>gone</span> <span
  m='595840'>off</span> <span m='596540'>to</span> <span m='596670'>the</span>
  <span m='596760'>left,</span> <span m='597430'>and</span> <span
  m='597570'>we</span> <span m='597680'>would</span> <span
  m='597800'>have</span> <span m='597890'>landed</span> <span
  m='598380'>on</span> <span m='599890'>not</span> <span m='600240'>the</span>
  <span m='600320'>square</span> <span m='600580'>root of 5</span> <span
  m='600980'>but</span> <span m='601160'>the</span> <span
  m='601290'>other</span> <span m='601500'>root.</span> <span
  m='603030'>So</span> <span m='603280'>if</span> <span m='603430'>it's</span>
  <span m='603600'>too</span> <span m='603760'>far</span> <span
  m='604070'>away,</span> <span m='605240'>then</span> <span
  m='605690'>we</span> <span m='605800'>get</span> <span m='605980'>the</span>
  <span m='606060'>wrong</span> <span m='606340'>root.</span> </p><p><span
  m='611750'>So</span> <span m='611870'>that's</span> <span m='612130'>an</span>
  <span m='612210'>example,</span> <span m='613930'>explaining</span> <span
  m='614650'>that</span> <span m='614840'>the</span> <span m='615150'>x_0</span>
  <span m='615300'>needs</span> <span m='615590'>to</span> <span
  m='615680'>start</span> <span m='616150'>near</span> <span
  m='616510'>the</span> <span m='617180'>root</span> <span
  m='617420'>that</span> <span m='617520'>we're</span> <span
  m='618180'>talking</span> <span m='618500'>about.</span> <span
  m='618710'>Otherwise,</span> <span m='620390'>the</span> <span
  m='620610'>method</span> <span m='620930'>doesn't</span> <span
  m='621200'>know</span> <span m='621460'>which</span> <span
  m='621860'>root</span> <span m='622060'>you're</span> <span
  m='622260'>asking</span> <span m='622650'>for.</span> <span
  m='622940'>It</span> <span m='623010'>only</span> <span
  m='623220'>knows</span> <span m='623470'>where</span> <span
  m='623610'>you</span> <span m='623750'>started.</span> <span
  m='624580'>So</span> <span m='624790'>it</span> <span m='624880'>may</span>
  <span m='625010'>go</span> <span m='625170'>off</span> <span
  m='625390'>to</span> <span m='625490'>the</span> <span m='625570'>wrong</span>
  <span m='625860'>place.</span> <span m='627310'>OK,</span> <span
  m='632270'>it</span> <span m='632400'>can't</span> <span
  m='632640'>read</span> <span m='632800'>your</span> <span
  m='632910'>mind.</span> <span m='634430'>Yes,</span> <span
  m='634930'>question.</span> </p><p><span m='635350'>STUDENT:
  [INAUDIBLE]</span> </p><p><span m='642610'>PROFESSOR: Oh,</span> <span
  m='644060'>good question.</span> <span m='644460'>So</span> <span
  m='644650'>the</span> <span m='646560'>question</span> <span
  m='647000'>was,</span> <span m='647400'>what</span> <span m='647660'>if</span>
  <span m='647770'>the</span> <span m='647850'>first</span> <span
  m='648200'>error</span> <span m='648550'>is</span> <span
  m='648750'>larger</span> <span m='649100'>than</span> <span
  m='649260'>1.</span> <span m='649550'>Are</span> <span m='649740'>you</span>
  <span m='649890'>in</span> <span m='650010'>trouble?</span> <span
  m='651220'>And</span> <span m='651470'>the</span> <span
  m='651610'>answer</span> <span m='652030'>is,</span> <span
  m='652720'>absolutely,</span> <span m='653460'>yes.</span> <span
  m='656000'>If</span> <span m='656270'>you</span> <span m='656380'>have</span>
  <span m='656640'>quadratic</span> <span m='657140'>behavior,</span> <span
  m='657500'>you</span> <span m='657650'>can</span> <span m='657830'>see.</span>
  <span m='658110'>If</span> <span m='658200'>you</span> <span
  m='658280'>have</span> <span m='658400'>a</span> <span
  m='658470'>quadratic</span> <span m='659170'>nearby,</span> <span
  m='660230'>it's</span> <span m='660800'>pretty</span> <span
  m='661030'>close</span> <span m='661350'>to</span> <span m='661450'>the</span>
  <span m='661540'>straight</span> <span m='661920'>line.</span> <span
  m='662820'>But</span> <span m='663070'>far</span> <span
  m='663390'>away,</span> <span m='663610'>a</span> <span
  m='663710'>parabola</span> <span m='664060'>is</span> <span
  m='664340'>miles</span> <span m='664970'>from</span> <span m='665170'>a</span>
  <span m='665230'>straight</span> <span m='665580'>line.</span> <span
  m='665900'>It's</span> <span m='666090'>way,</span> <span
  m='666500'>way,</span> <span m='666710'>way</span> <span m='666910'>far</span>
  <span m='667160'>away.</span> <span m='668180'>So</span> <span
  m='668590'>if</span> <span m='668770'>you're</span> <span
  m='669180'>foolish</span> <span m='669580'>enough</span> <span
  m='669940'>to</span> <span m='670050'>start</span> <span
  m='671590'>over</span> <span m='672330'>here,</span> <span
  m='674010'>you</span> <span m='674180'>may</span> <span m='674340'>have</span>
  <span m='674560'>some</span> <span m='674760'>trouble</span> <span
  m='675770'>making</span> <span m='676100'>progress.</span> <span
  m='677150'>Actually,</span> <span m='678600'>it</span> <span
  m='678740'>isn't,</span> <span m='679160'>when</span> <span
  m='679530'>I--</span> <span m='679640'>that</span> <span
  m='679930'>little</span> <span m='680170'>wiggle</span> <span
  m='680430'>there</span> <span m='680580'>just</span> <span
  m='680790'>meant</span> <span m='680940'>proportional</span> <span
  m='681710'>to.</span> <span m='682010'>In</span> <span m='682140'>fact,</span>
  <span m='682590'>in</span> <span m='682710'>the</span> <span
  m='682800'>particular</span> <span m='683380'>case</span> <span
  m='683620'>of</span> <span m='683690'>a</span> <span
  m='683770'>parabola,</span> <span m='684570'>it</span> <span
  m='684740'>manages</span> <span m='685270'>to</span> <span
  m='685360'>get</span> <span m='685590'>back. It</span> <span
  m='686030'>saves</span> <span m='686420'>itself.</span> <span
  m='687150'>But</span> <span m='687370'>there's</span> <span
  m='687550'>no</span> <span m='687740'>guarantee</span> <span
  m='688360'>of</span> <span m='688950'>that</span> <span m='689280'>sort</span>
  <span m='689500'>of</span> <span m='689600'>thing.</span> <span
  m='690010'>You</span> <span m='690230'>really</span> <span
  m='690470'>do</span> <span m='690620'>want</span> <span m='690900'>to</span>
  <span m='690970'>start</span> <span m='691310'>reasonably</span> <span
  m='691780'>close.</span> <span m='692790'>Yep.</span> </p><p><span
  m='693350'>STUDENT: [INAUDIBLE]</span> </p><p><span m='700140'>PROFESSOR:
  What</span> <span m='700400'>you</span> <span m='700500'>have</span> <span
  m='700680'>to</span> <span m='700770'>do</span> <span m='700900'>is</span>
  <span m='701000'>you</span> <span m='701060'>have</span> <span
  m='701160'>to</span> <span m='701250'>watch</span> <span
  m='701680'>out.</span> <span m='702580'>That</span> <span
  m='702940'>is,</span> <span m='704090'>it's</span> <span
  m='704250'>hard</span> <span m='704580'>to</span> <span m='704680'>know</span>
  <span m='704830'>what</span> <span m='705050'>assumptions</span> <span
  m='705630'>to</span> <span m='705720'>make</span> <span
  m='705910'>about</span> <span m='706140'>x_0.</span> <span
  m='706790'>You</span> <span m='707510'>plug</span> <span m='707880'>it</span>
  <span m='707940'>into</span> <span m='708100'>the</span> <span
  m='708160'>machine</span> <span m='708500'>and you</span> <span
  m='708600'>see</span> <span m='708770'>what</span> <span m='708900'>you</span>
  <span m='709010'>get.</span> <span m='710250'>And</span> <span
  m='711590'>either it</span> <span m='711860'>works</span> <span m='712140'>or
  it</span> <span m='712280'>doesn't.</span> <span m='713330'>You</span> <span
  m='713550'>can</span> <span m='713710'>tell</span> <span
  m='714010'>that</span> <span m='714120'>it's</span> <span
  m='714250'>marching</span> <span m='714620'>toward</span> <span
  m='714820'>a</span> <span m='714890'>specific</span> <span
  m='715310'>place,</span> <span m='715560'>and</span> <span
  m='715660'>you</span> <span m='715750'>can</span> <span m='715860'>tell</span>
  <span m='716030'>that</span> <span m='716130'>that</span> <span
  m='716290'>place</span> <span m='716510'>probably</span> <span m='716940'>is
  a</span> <span m='717080'>zero,</span> <span m='717600'>usually.</span> <span
  m='718400'>But</span> <span m='718610'>maybe</span> <span
  m='718870'>it's</span> <span m='719010'>not</span> <span m='719240'>the</span>
  <span m='719310'>one</span> <span m='719470'>you</span> <span
  m='719560'>were</span> <span m='719670'>looking</span> <span
  m='719960'>for.</span> <span m='720510'>So in</span> <span
  m='720700'>other</span> <span m='720840'>words,</span> <span
  m='720920'>you</span> <span m='720980'>have</span> <span m='721070'>to</span>
  <span m='721140'>use</span> <span m='721320'>your</span> <span
  m='721420'>head.</span> <span m='721870'>You</span> <span
  m='721960'>run</span> <span m='722180'>the</span> <span
  m='722270'>program</span> <span m='722730'>and then</span> <span
  m='722860'>you</span> <span m='722930'>see</span> <span m='723100'>what</span>
  <span m='723250'>it</span> <span m='723340'>does.</span> <span
  m='725230'>And</span> <span m='725450'>if</span> <span
  m='725540'>you're</span> <span m='725670'>lucky--</span> <span
  m='726420'>the</span> <span m='726580'>problem</span> <span
  m='726950'>is,</span> <span m='727070'>if</span> <span m='727190'>you</span>
  <span m='727270'>have</span> <span m='727420'>no</span> <span
  m='727630'>idea</span> <span m='728000'>where</span> <span
  m='728120'>the</span> <span m='728290'>zero</span> <span m='728460'>is,</span>
  <span m='729020'>you</span> <span m='729140'>may</span> <span
  m='729740'>just</span> <span m='730430'>wander</span> <span
  m='730860'>around</span> <span m='731140'>forever.</span> <span
  m='732270'>As</span> <span m='732630'>we'll</span> <span m='732780'>see</span>
  <span m='732950'>in</span> <span m='733060'>a</span> <span
  m='733130'>second.</span> </p><p><span m='734720'>So</span> <span
  m='734880'>the</span> <span m='734980'>next</span> <span
  m='737280'>example</span> <span m='738290'>here</span> <span
  m='739150'>is</span> <span m='739980'>the</span> <span
  m='740130'>following.</span> <span m='740870'>I</span> <span
  m='741080'>said</span> <span m='741390'>that</span> <span m='741610'>f'</span>
  <span m='742760'>has</span> <span m='743030'>to</span> <span
  m='743120'>be</span> <span m='743210'>not</span> <span m='743530'>too</span>
  <span m='743700'>small.</span> <span m='744590'>There's</span> <span
  m='744840'>a</span> <span m='744910'>real</span> <span
  m='745480'>catastrophe</span> <span m='746140'>hiding</span> <span
  m='746710'>just</span> <span m='746970'>inside</span> <span
  m='747380'>this</span> <span m='747600'>picture.</span> <span
  m='748250'>Which</span> <span m='748520'>is</span> <span m='748630'>the</span>
  <span m='748690'>transition</span> <span m='749400'>between</span> <span
  m='749730'>when</span> <span m='749860'>you</span> <span
  m='749940'>find</span> <span m='750280'>the</span> <span
  m='750350'>positive</span> <span m='750830'>root and</span> <span
  m='751040'>when</span> <span m='751230'>you</span> <span
  m='751300'>find</span> <span m='751510'>the</span> <span
  m='751570'>negative</span> <span m='752210'>root here.</span> <span
  m='752890'>Which</span> <span m='753160'>is,</span> <span m='753270'>if</span>
  <span m='753400'>you're</span> <span m='753520'>right</span> <span
  m='753810'>down</span> <span m='754130'>here.</span> <span
  m='755480'>If</span> <span m='755600'>you</span> <span m='755690'>were</span>
  <span m='755820'>foolish</span> <span m='756230'>enough</span> <span
  m='756420'>to</span> <span m='756510'>get</span> <span m='756750'>0,</span>
  <span m='757860'>then</span> <span m='758040'>what's</span> <span
  m='758290'>going to</span> <span m='758490'>happen</span> <span
  m='758830'>is</span> <span m='759040'>your</span> <span
  m='759210'>tangent</span> <span m='759760'>line</span> <span
  m='761060'>is</span> <span m='761250'>horizontal.</span> <span
  m='761940'>It</span> <span m='762120'>doesn't</span> <span
  m='762440'>even</span> <span m='762780'>meet the</span> <span
  m='762980'>axis.</span> <span m='764610'>So</span> <span m='765340'>in</span>
  <span m='765500'>the</span> <span m='765580'>formula,</span> <span
  m='766060'>you</span> <span m='766190'>can</span> <span m='766310'>see</span>
  <span m='766450'>that's</span> <span m='766650'>a</span> <span
  m='766710'>catastrophe.</span> <span m='767840'>Because</span> <span
  m='768090'>there's</span> <span m='768240'>an</span> <span
  m='768340'>f'</span> <span m='768970'>in</span> <span m='769060'>the</span>
  <span m='769150'>denominator.</span> <span m='773030'>So</span> <span
  m='773130'>that's</span> <span m='773290'>0.</span> <span
  m='773530'>That's</span> <span m='773880'>undefined.</span> <span
  m='775000'>It's</span> <span m='775160'>not</span> <span
  m='775410'>surprising,</span> <span m='775920'>it's</span> <span
  m='776100'>consistent</span> <span m='776290'>that</span> <span
  m='776560'>the</span> <span m='777430'>parallel</span> <span
  m='777860'>line</span> <span m='778040'>doesn't</span> <span
  m='778300'>meet</span> <span m='778530'>the axis.</span> <span
  m='779480'>And</span> <span m='779830'>you</span> <span m='779900'>have</span>
  <span m='780150'>no</span> <span m='781170'>x_1.</span> <span
  m='781940'>So</span> <span m='782160'>you</span> <span m='782400'>had--</span>
  <span m='782980'>So</span> <span m='783440'>if</span> <span
  m='783640'>you</span> <span m='783740'>like,</span> <span
  m='784240'>another</span> <span m='785630'>point</span> <span
  m='786060'>here</span> <span m='786370'>is</span> <span m='789220'>that</span>
  <span m='789570'>f' =</span> <span m='790540'>0</span> <span
  m='791700'>is</span> <span m='791870'>a</span> <span
  m='791950'>disaster.</span> <span m='792870'>A</span> <span
  m='796800'>disaster</span> <span m='797490'>for</span> <span
  m='797830'>the</span> <span m='799490'>method.</span> <span
  m='804310'>Because</span> <span m='804630'>the</span> <span
  m='804750'>next--</span> <span m='806010'>So</span> <span m='806180'>say,
  if</span> <span m='806790'>f(x_0)</span> <span m='807870'>=</span> <span
  m='808220'>0,</span> <span m='808620'>then</span> <span m='809140'>x_1</span>
  <span m='809530'>is</span> <span m='809710'>undefined.</span> </p><p><span
  m='814700'>And</span> <span m='814990'>finally,</span> <span
  m='815810'>there's</span> <span m='816350'>one</span> <span
  m='816610'>other</span> <span m='816870'>weird</span> <span
  m='817190'>thing</span> <span m='817420'>that</span> <span
  m='817560'>can</span> <span m='817700'>happen.</span> <span
  m='819170'>Which</span> <span m='819540'>is,</span> <span
  m='820270'>which</span> <span m='820870'>I'll</span> <span
  m='820960'>just</span> <span m='821190'>draw</span> <span m='821460'>a</span>
  <span m='821530'>picture</span> <span m='821950'>of</span> <span
  m='822090'>schematically.</span> <span m='823460'>Which</span> <span
  m='823960'>you</span> <span m='824100'>can</span> <span m='824270'>get</span>
  <span m='824470'>from</span> <span m='824640'>a</span> <span
  m='824700'>wiggle.</span> <span m='827150'>So</span> <span
  m='827360'>this</span> <span m='827590'>wiggle</span> <span
  m='827860'>has</span> <span m='828150'>three</span> <span
  m='828550'>roots.</span> <span m='829260'>The</span> <span
  m='829490'>way</span> <span m='829630'>I've</span> <span
  m='829810'>drawn</span> <span m='830290'>it.</span> <span
  m='832060'>And</span> <span m='832590'>it</span> <span m='832810'>can</span>
  <span m='833300'>be</span> <span m='833610'>that</span> <span
  m='833740'>you</span> <span m='833870'>can</span> <span
  m='833990'>start</span> <span m='834390'>over</span> <span
  m='834590'>here</span> <span m='834790'>with</span> <span
  m='834940'>your</span> <span m='835090'>x_0.</span> <span
  m='836720'>And</span> <span m='836950'>draw your</span> <span
  m='837250'>tangent</span> <span m='837820'>line</span> <span
  m='838040'>and</span> <span m='838160'>go</span> <span m='838340'>over</span>
  <span m='838560'>here</span> <span m='839470'>to</span> <span
  m='839640'>an</span> <span m='839750'>x_1.</span> <span m='841200'>And</span>
  <span m='841500'>then</span> <span m='841630'>that</span> <span
  m='841830'>tangent</span> <span m='842210'>line</span> <span
  m='842350'>will</span> <span m='842450'>take</span> <span
  m='842670'>you</span> <span m='842760'>right</span> <span
  m='843060'>back</span> <span m='843950'>to</span> <span m='844070'>the</span>
  <span m='844370'>x_0.</span> <span m='845510'>I</span> <span
  m='845590'>didn't</span> <span m='845810'>draw it</span> <span
  m='846240'>quite</span> <span m='846550'>right,</span> <span
  m='846840'>but</span> <span m='848450'>that's</span> <span
  m='848650'>about</span> <span m='848900'>right.</span> <span
  m='849560'>So</span> <span m='849820'>it</span> <span m='850550'>goes</span>
  <span m='850780'>over</span> <span m='850970'>like</span> <span
  m='851160'>this.</span> </p><p><span m='851330'>So</span> <span
  m='851450'>let</span> <span m='851590'>me</span> <span m='851710'>draw</span>
  <span m='851910'>the</span> <span m='852050'>two tangent</span> <span
  m='852170'>lines,</span> <span m='853320'>so</span> <span
  m='853520'>that</span> <span m='853610'>you</span> <span m='853730'>can</span>
  <span m='853860'>see</span> <span m='854080'>it</span> <span
  m='854140'>properly.</span> <span m='854760'>Sorry,</span> <span
  m='855280'>I</span> <span m='855370'>messed</span> <span m='855700'>it</span>
  <span m='855800'>up.</span> <span m='856660'>So</span> <span
  m='856850'>here</span> <span m='857060'>are the</span> <span m='857220'>two
  tangent</span> <span m='857350'>lines.</span> <span m='858030'>This</span>
  <span m='858290'>guy</span> <span m='859300'>and</span> <span
  m='859610'>this</span> <span m='859810'>guy.</span> <span
  m='860870'>And</span> <span m='861220'>it</span> <span m='861520'>just</span>
  <span m='861890'>goes</span> <span m='862890'>back</span> <span
  m='863190'>and</span> <span m='863300'>forth.</span> <span
  m='864010'>x_0</span> <span m='864240'>cycles</span> <span m='865180'>to
  x_1,</span> <span m='865950'>and</span> <span m='866260'>x_1</span> <span
  m='866410'>goes</span> <span m='866630'>back</span> <span m='866960'>to</span>
  <span m='867350'>x_0.</span> <span m='867520'>We</span> <span
  m='867690'>have</span> <span m='867820'>a</span> <span
  m='867870'>cycle.</span> <span m='870200'>And</span> <span
  m='870480'>it</span> <span m='870710'>never</span> <span
  m='871300'>goes</span> <span m='871560'>anywhere.</span> <span
  m='872090'>This</span> <span m='872290'>is,</span> <span m='873850'>the</span>
  <span m='873950'>grass</span> <span m='874320'>is</span> <span
  m='874440'>always</span> <span m='874770'>greener.</span> <span
  m='875080'>It's</span> <span m='875260'>over</span> <span
  m='875440'>here,</span> <span m='875630'>it thinks,</span> <span
  m='875840'>oh,</span> <span m='876190'>I</span> <span m='876290'>really</span>
  <span m='876540'>would</span> <span m='876680'>prefer</span> <span
  m='876970'>to</span> <span m='877050'>go</span> <span m='877170'>to</span>
  <span m='877250'>this</span> <span m='877940'>zero</span> <span
  m='878230'>and</span> <span m='878340'>then</span> <span m='878850'>it
  thinks</span> <span m='879150'>oh,</span> <span m='879340'>I</span> <span
  m='879590'>want</span> <span m='879760'>to</span> <span m='879820'>go</span>
  <span m='879910'>back.</span> <span m='880840'>And it</span> <span
  m='881030'>goes</span> <span m='881270'>back</span> <span
  m='881560'>and</span> <span m='881670'>forth,</span> <span m='882070'>and
  back</span> <span m='882300'>and</span> <span m='882400'>forth.</span>
  </p><p><span m='883650'>Grass</span> <span m='883950'>is</span> <span
  m='884050'>always</span> <span m='884320'>greener</span> <span
  m='884640'>on</span> <span m='884790'>the</span> <span m='884880'>other</span>
  <span m='885050'>side</span> <span m='885360'>of</span> <span
  m='885430'>the</span> <span m='885520'>fence.</span> <span
  m='887060'>Never,</span> <span m='887520'>never</span> <span
  m='887990'>gets</span> <span m='888290'>anywhere.</span> <span
  m='890090'>So</span> <span m='890300'>those</span> <span m='890560'>are</span>
  <span m='890640'>the</span> <span m='890990'>sorts</span> <span
  m='891400'>of</span> <span m='891560'>things</span> <span
  m='891920'>that</span> <span m='892050'>can</span> <span m='892170'>go</span>
  <span m='892300'>wrong</span> <span m='892510'>with</span> <span
  m='892650'>Newton's</span> <span m='892830'>method.</span> <span
  m='893490'>Nevertheless,</span> <span m='894030'>it's</span> <span
  m='894270'>fantastic.</span> <span m='895210'>It works</span> <span
  m='895540'>very</span> <span m='895900'>well,</span> <span
  m='897610'>in</span> <span m='897940'>a</span> <span m='898150'>lot</span>
  <span m='898380'>of</span> <span m='898490'>situations.</span> <span
  m='899740'>And</span> <span m='900020'>solves</span> <span
  m='900500'>basically</span> <span m='901490'>any</span> <span
  m='901850'>equation</span> <span m='902470'>that</span> <span
  m='902570'>you</span> <span m='902660'>can</span> <span
  m='902780'>imagine,</span> <span m='903510'>numerically.</span> </p><p><span
  m='911050'>Next</span> <span m='911360'>we're</span> <span m='911450'>going
  to</span> <span m='911590'>move</span> <span m='911850'>on.</span> <span
  m='912060'>We're</span> <span m='912150'>going to</span> <span
  m='912290'>move</span> <span m='912450'>on</span> <span m='912600'>to</span>
  <span m='912690'>something</span> <span m='913000'>which</span> <span
  m='913150'>is</span> <span m='913240'>a</span> <span m='913300'>little</span>
  <span m='913550'>theoretical.</span> <span m='915730'>Which</span> <span
  m='915940'>is</span> <span m='916070'>the</span> <span m='916160'>mean</span>
  <span m='916370'>value</span> <span m='916790'>theorem.</span> <span
  m='918170'>And</span> <span m='918390'>that</span> <span
  m='918580'>will</span> <span m='920050'>allow</span> <span
  m='920480'>us</span> <span m='920830'>in</span> <span m='921090'>just</span>
  <span m='921590'>a</span> <span m='921700'>day</span> <span
  m='921920'>or</span> <span m='922050'>so</span> <span m='922410'>to</span>
  <span m='922550'>launch</span> <span m='923020'>into</span> <span
  m='924560'>the</span> <span m='924710'>ideas</span> <span m='925100'>of</span>
  <span m='925220'>integration,</span> <span m='926150'>which</span> <span
  m='926350'>is</span> <span m='926520'>the</span> <span m='926930'>whole</span>
  <span m='927210'>second</span> <span m='927510'>half</span> <span
  m='929120'>of the</span> <span m='929390'>course.</span> <span
  m='931140'>So</span> <span m='931970'>let's</span> <span m='933200'>get</span>
  <span m='933390'>started</span> <span m='933810'>with</span> <span
  m='934020'>that.</span> <span m='950200'>The</span> <span
  m='950340'>mean</span> <span m='950590'>value</span> <span
  m='951090'>theorem</span> <span m='952000'>will</span> <span
  m='952570'>henceforth</span> <span m='953970'>be</span> <span
  m='954230'>abbreviated</span> <span m='954960'>MVT.</span> </p><p><span
  m='957030'>So</span> <span m='957220'>I</span> <span m='957300'>don't</span>
  <span m='957500'>have</span> <span m='957650'>to</span> <span
  m='957750'>write</span> <span m='958200'>quite</span> <span
  m='958520'>as</span> <span m='958630'>much</span> <span
  m='959250'>every</span> <span m='959480'>time</span> <span m='959780'>I</span>
  <span m='959840'>refer</span> <span m='960270'>to</span> <span
  m='960490'>it.</span> <span m='963750'>The</span> <span m='963980'>mean</span>
  <span m='964180'>value</span> <span m='964570'>theorem,</span> <span
  m='965980'>colloquially,</span> <span m='967290'>says</span> <span
  m='967660'>the</span> <span m='967760'>following.</span> <span
  m='969530'>If</span> <span m='971900'>you</span> <span m='972040'>go</span>
  <span m='973190'>from</span> <span m='974750'>Boston</span> <span
  m='977590'>to</span> <span m='978510'>LA,</span> <span m='980030'>which</span>
  <span m='980250'>I</span> <span m='980310'>think</span> <span
  m='981470'>a</span> <span m='981570'>lot</span> <span m='981770'>of</span>
  <span m='982550'>Red</span> <span m='982740'>Sox</span> <span
  m='983040'>fans</span> <span m='983290'>are</span> <span m='983350'>going
  to</span> <span m='983480'>want to</span> <span m='983730'>do</span> <span
  m='983860'>soon,</span> <span m='984870'>so</span> <span
  m='985040'>that's</span> <span m='986600'>3,000</span> <span
  m='987290'>miles.</span> <span m='991110'>In</span> <span m='993010'>6</span>
  <span m='993410'>hours,</span> <span m='997650'>then</span> <span
  m='999600'>at</span> <span m='1000240'>some time</span> <span
  m='1005700'>you</span> <span m='1007800'>are</span> <span
  m='1009550'>going</span> <span m='1011380'>at</span> <span
  m='1013710'>a</span> <span m='1013790'>certain</span> <span
  m='1014180'>speed.</span> <span m='1015640'>The</span> <span
  m='1015780'>average</span> <span m='1016310'>of</span> <span
  m='1016490'>this</span> <span m='1016830'>speed.</span> <span
  m='1021360'>Average,</span> <span m='1023770'>so,</span> <span
  m='1024740'>speed,</span> <span m='1025730'>which</span> <span
  m='1025970'>in</span> <span m='1026090'>this</span> <span
  m='1026320'>case</span> <span m='1028090'>is</span> <span
  m='1028320'>what?</span> <span m='1028850'>So</span> <span
  m='1028940'>we're</span> <span m='1029080'>going</span> <span
  m='1029340'>at</span> <span m='1029430'>the</span> <span
  m='1029550'>average</span> <span m='1029950'>speed.</span> <span
  m='1030770'>That's</span> <span m='1031130'>3,000</span> <span
  m='1032990'>miles</span> <span m='1034060'>times</span> <span
  m='1035550'>6</span> <span m='1035910'>hours,</span> <span
  m='1036890'>so</span> <span m='1037060'>that's</span> <span
  m='1037560'>500</span> <span m='1038960'>miles</span> <span
  m='1040290'>per</span> <span m='1040490'>hour.</span> <span
  m='1041420'>Exactly.</span> </p><p><span m='1043340'>So</span> <span
  m='1043520'>some time</span> <span m='1044290'>on</span> <span
  m='1044400'>your</span> <span m='1044540'>journey--</span> <span
  m='1045010'>of</span> <span m='1045920'>course,</span> <span
  m='1046150'>some</span> <span m='1046300'>of</span> <span
  m='1046370'>the</span> <span m='1046430'>time</span> <span
  m='1046660'>you're</span> <span m='1046770'>going</span> <span
  m='1046990'>more</span> <span m='1047180'>than</span> <span
  m='1047310'>500</span> <span m='1047740'>miles</span> <span
  m='1047940'>an</span> <span m='1048030'>hour,</span> <span
  m='1048150'>sometimes</span> <span m='1048530'>you</span> <span
  m='1048590'>are</span> <span m='1048680'>going</span> <span
  m='1048890'>less.</span> <span m='1049610'>And</span> <span m='1049920'>some
  time</span> <span m='1050620'>you</span> <span m='1050680'>must've</span>
  <span m='1051100'>been</span> <span m='1051230'>going</span> <span
  m='1052230'>500</span> <span m='1052670'>miles</span> <span
  m='1052910'>an</span> <span m='1053000'>hour</span> <span
  m='1053220'>exactly.</span> <span m='1055110'>That's</span> <span
  m='1055430'>the</span> <span m='1055510'>mean</span> <span
  m='1055690'>value</span> <span m='1056160'>theorem.</span> <span
  m='1057520'>The</span> <span m='1057600'>reason</span> <span
  m='1057860'>why</span> <span m='1058050'>it's</span> <span
  m='1058290'>called</span> <span m='1058760'>mean</span> <span
  m='1059100'>value</span> <span m='1059470'>theorem</span> <span
  m='1059890'>is</span> <span m='1060120'>that</span> <span
  m='1060300'>word</span> <span m='1060540'>mean</span> <span
  m='1061620'>is</span> <span m='1061780'>the</span> <span
  m='1061860'>same</span> <span m='1062190'>as</span> <span
  m='1062360'>the</span> <span m='1062450'>word</span> <span
  m='1063120'>average.</span> </p><p><span m='1075440'>So</span> <span
  m='1075620'>now</span> <span m='1075890'>I'm</span> <span
  m='1075990'>going</span> <span m='1076120'>to</span> <span
  m='1076200'>state</span> <span m='1076760'>it</span> <span
  m='1077090'>in</span> <span m='1077490'>math</span> <span
  m='1077930'>symbols,</span> <span m='1078410'>the</span> <span
  m='1078520'>same</span> <span m='1078800'>theorem.</span> <span
  m='1088160'>And</span> <span m='1088670'>it's</span> <span
  m='1088900'>a</span> <span m='1088970'>formula.</span> <span
  m='1090470'>It</span> <span m='1090680'>says</span> <span
  m='1092120'>that</span> <span m='1093180'>the</span> <span
  m='1093340'>difference</span> <span m='1093740'>quotient -</span> <span
  m='1098810'>so</span> <span m='1099080'>this</span> <span
  m='1099290'>is</span> <span m='1099580'>the</span> <span
  m='1099690'>distance</span> <span m='1100060'>traveled</span> <span
  m='1100410'>divided</span> <span m='1100820'>by</span> <span
  m='1100980'>the</span> <span m='1101170'>time</span> <span
  m='1101690'>elapsed,</span> <span m='1103230'>that's</span> <span
  m='1103440'>the</span> <span m='1103630'>average</span> <span
  m='1104680'>speed -</span> <span m='1105570'>is</span> <span
  m='1105870'>equal</span> <span m='1106280'>to</span> <span
  m='1107210'>the</span> <span m='1107440'>infinitesimal</span> <span
  m='1108370'>speed</span> <span m='1109860'>for</span> <span
  m='1110080'>some</span> <span m='1114060'>time</span> <span
  m='1114400'>in</span> <span m='1114530'>between.</span> <span
  m='1115320'>So</span> <span m='1115540'>some</span> <span
  m='1115960'>c,</span> <span m='1116940'>which</span> <span
  m='1117150'>is</span> <span m='1117420'>in</span> <span
  m='1117600'>between</span> <span m='1119330'>a</span> <span
  m='1119500'>and</span> <span m='1119700'>b--</span> <span
  m='1126120'>I'm</span> <span m='1126400'>not</span> <span
  m='1126650'>quite</span> <span m='1126970'>done.</span> <span
  m='1128590'>It's</span> <span m='1128790'>a</span> <span
  m='1128860'>real</span> <span m='1129180'>theorem,</span> <span
  m='1129740'>it</span> <span m='1129850'>has</span> <span
  m='1130060'>hypotheses.</span> <span m='1133130'>I've</span> <span
  m='1133620'>told</span> <span m='1133840'>you</span> <span
  m='1133910'>the</span> <span m='1134010'>conclusion</span> <span
  m='1134600'>first,</span> <span m='1136230'>but</span> <span
  m='1136790'>there</span> <span m='1136940'>are</span> <span
  m='1137130'>some</span> <span m='1137300'>hypotheses,</span> <span
  m='1137890'>they're</span> <span m='1138030'>straightforward</span> <span
  m='1138740'>hypotheses.</span> <span m='1139650'>Provided</span> <span
  m='1140160'>f</span> <span m='1141000'>is</span> <span
  m='1142220'>differentiable,</span> <span m='1143040'>that</span> <span
  m='1143200'>is,</span> <span m='1143320'>it</span> <span
  m='1143400'>has</span> <span m='1143630'>a</span> <span
  m='1143680'>derivative</span> <span m='1149310'>in</span> <span
  m='1149460'>the</span> <span m='1149580'>interval</span> <span
  m='1150330'>a</span> <span m='1150790'>&lt;</span> <span m='1151140'>x</span>
  <span m='1151610'>&lt;</span> <span m='1152010'>b.</span> <span
  m='1152820'>And</span> <span m='1154540'>continuous</span> <span
  m='1159140'>in</span> <span m='1160280'>a</span> <span
  m='1160640'>&lt;=</span> <span m='1161160'>x &lt;= b.</span> </p><p><span
  m='1169110'>There has to</span> <span m='1169200'>be</span> <span
  m='1169810'>a</span> <span m='1169940'>sense</span> <span
  m='1170330'>that</span> <span m='1170420'>you</span> <span
  m='1170500'>can</span> <span m='1170630'>make</span> <span
  m='1170830'>out</span> <span m='1171000'>of</span> <span
  m='1171090'>the</span> <span m='1171180'>speed,</span> <span
  m='1172080'>or</span> <span m='1172200'>the</span> <span
  m='1172280'>rate</span> <span m='1172480'>of</span> <span
  m='1172560'>change</span> <span m='1173570'>of</span> <span m='1173910'>f
  at</span> <span m='1174160'>each</span> <span m='1174440'>intermediate</span>
  <span m='1175100'>point.</span> <span m='1176140'>And</span> <span
  m='1177050'>in</span> <span m='1177180'>order</span> <span
  m='1177390'>for</span> <span m='1177600'>the</span> <span
  m='1177790'>values</span> <span m='1179060'>at</span> <span
  m='1179190'>the</span> <span m='1179330'>ends</span> <span
  m='1179730'>to</span> <span m='1179820'>make</span> <span
  m='1180020'>sense,</span> <span m='1180340'>it</span> <span
  m='1180430'>has</span> <span m='1180600'>to</span> <span m='1180690'>be</span>
  <span m='1180780'>continuous.</span> <span m='1181200'>There has</span> <span
  m='1181390'>to</span> <span m='1181500'>be</span> <span m='1181560'>a</span>
  <span m='1181640'>link</span> <span m='1182390'>between</span> <span
  m='1182710'>the</span> <span m='1182780'>values</span> <span
  m='1183130'>at</span> <span m='1183220'>the</span> <span
  m='1183340'>ends</span> <span m='1184470'>and</span> <span
  m='1186080'>what's</span> <span m='1186380'>going</span> <span
  m='1186620'>on</span> <span m='1186780'>in</span> <span
  m='1186890'>between.</span> <span m='1187480'>If</span> <span
  m='1187790'>it</span> <span m='1187870'>were</span> <span
  m='1187980'>discontinuous,</span> <span m='1188710'>there</span> <span
  m='1188830'>would</span> <span m='1188950'>be</span> <span
  m='1189080'>no</span> <span m='1189280'>relation</span> <span
  m='1190280'>between</span> <span m='1190620'>the</span> <span
  m='1191110'>left</span> <span m='1191480'>and</span> <span
  m='1191600'>right</span> <span m='1191830'>values</span> <span
  m='1192330'>and</span> <span m='1192450'>the</span> <span
  m='1192510'>rest</span> <span m='1192840'>of</span> <span
  m='1192920'>the</span> <span m='1192990'>function.</span> <span
  m='1195970'>So</span> <span m='1196100'>here's</span> <span
  m='1196380'>the</span> <span m='1196550'>theorem,</span> <span
  m='1197370'>conclusion</span> <span m='1198380'>and its</span> <span
  m='1198970'>hypothesis.</span> <span m='1200160'>And</span> <span
  m='1200600'>it</span> <span m='1200920'>means</span> <span
  m='1201250'>what</span> <span m='1201440'>I</span> <span
  m='1201840'>said</span> <span m='1202160'>more</span> <span
  m='1202400'>colloquially</span> <span m='1203450'>up above.</span> <span
  m='1211780'>Now,</span> <span m='1211990'>I'm</span> <span
  m='1212340'>going</span> <span m='1212530'>to</span> <span
  m='1212590'>prove</span> <span m='1213020'>this</span> <span
  m='1213780'>theorem</span> <span m='1213970'>immediately.</span> <span
  m='1214540'>At</span> <span m='1214620'>least,</span> <span
  m='1215720'>give</span> <span m='1215870'>a</span> <span
  m='1215930'>geometric</span> <span m='1217160'>intuitive</span> <span
  m='1217650'>argument,</span> <span m='1218110'>which</span> <span
  m='1218280'>is</span> <span m='1218370'>not</span> <span
  m='1218640'>very</span> <span m='1218850'>different</span> <span
  m='1219660'>from</span> <span m='1219850'>the</span> <span
  m='1219930'>one</span> <span m='1220140'>that's</span> <span
  m='1220350'>given</span> <span m='1221220'>in</span> <span
  m='1221390'>a</span> <span m='1221830'>very</span> <span
  m='1222070'>systematic</span> <span m='1224000'>treatment.</span> <span
  m='1226410'>So</span> <span m='1226520'>here's</span> <span
  m='1226840'>the</span> <span m='1226920'>proof</span> <span
  m='1227510'>of</span> <span m='1227670'>the</span> <span
  m='1228150'>mean</span> <span m='1228320'>value</span> <span
  m='1228720'>theorem.</span> <span m='1234280'>It's</span> <span
  m='1234420'>really</span> <span m='1234660'>just</span> <span
  m='1234870'>a</span> <span m='1234910'>picture.</span> <span
  m='1236860'>So</span> <span m='1237070'>here's</span> <span
  m='1237320'>a</span> <span m='1237390'>place,</span> <span
  m='1238410'>and</span> <span m='1238600'>here's</span> <span
  m='1238780'>another</span> <span m='1239040'>place</span> <span
  m='1239370'>on</span> <span m='1239510'>the</span> <span
  m='1239580'>graph.</span> <span m='1242880'>And</span> <span
  m='1243020'>the</span> <span m='1243080'>graph is</span> <span
  m='1243540'>going</span> <span m='1243770'>along</span> <span
  m='1244020'>like</span> <span m='1244250'>this,</span> <span
  m='1244770'>let's</span> <span m='1244960'>say.</span> <span
  m='1247180'>And</span> <span m='1247720'>this</span> <span
  m='1248150'>line</span> <span m='1248510'>here</span> <span
  m='1248700'>is</span> <span m='1248960'>the</span> <span
  m='1249070'>secant</span> <span m='1249510'>line.</span> <span
  m='1250700'>So</span> <span m='1250910'>this</span> <span
  m='1251120'>is</span> <span m='1252500'>(a, f(a))</span> <span
  m='1253990'>down</span> <span m='1254360'>here.</span> <span
  m='1255310'>And</span> <span m='1255590'>this</span> <span
  m='1255690'>is</span> <span m='1256130'>(b, f(b))</span> <span
  m='1258330'>up</span> <span m='1258530'>there.</span> <span
  m='1259320'>And</span> <span m='1260340'>this</span> <span
  m='1260890'>segment</span> <span m='1261380'>is</span> <span
  m='1261510'>the</span> <span m='1261700'>secant,</span> <span
  m='1262250'>its</span> <span m='1262520'>slope is the</span> <span
  m='1263120'>slope</span> <span m='1263530'>that we're</span> <span
  m='1263630'>aiming</span> <span m='1264220'>for.</span> <span
  m='1264480'>The</span> <span m='1264750'>slope of</span> <span
  m='1265090'>that</span> <span m='1265360'>line</span> <span
  m='1266040'>is</span> <span m='1266350'>the</span> <span
  m='1266440'>left-hand</span> <span m='1267110'>side</span> <span
  m='1268250'>of</span> <span m='1268420'>this</span> <span
  m='1268990'>formula</span> <span m='1269400'>here.</span> <span
  m='1271190'>So</span> <span m='1271380'>we</span> <span
  m='1271510'>need</span> <span m='1271890'>to</span> <span
  m='1272000'>find</span> <span m='1272390'>something</span> <span
  m='1272950'>with</span> <span m='1273160'>that</span> <span
  m='1273390'>slope.</span> </p><p><span m='1274160'>And</span> <span
  m='1274320'>what</span> <span m='1274430'>we</span> <span
  m='1274530'>need</span> <span m='1274680'>to</span> <span
  m='1274760'>find</span> <span m='1275000'>is</span> <span m='1275100'>a</span>
  <span m='1275170'>tangent</span> <span m='1275730'>line</span> <span
  m='1275940'>with</span> <span m='1276090'>that</span> <span
  m='1276270'>slope,</span> <span m='1276520'>because</span> <span
  m='1277410'>what's</span> <span m='1277600'>on</span> <span
  m='1277700'>the</span> <span m='1277770'>right-hand</span> <span
  m='1278120'>side</span> <span m='1278340'>is</span> <span
  m='1278430'>the</span> <span m='1278520'>slope</span> <span
  m='1278800'>of</span> <span m='1278900'>a tangent</span> <span
  m='1279400'>line.</span> <span m='1280220'>So</span> <span
  m='1280610'>here's</span> <span m='1280920'>how</span> <span
  m='1281050'>we</span> <span m='1281260'>construct it.</span> <span
  m='1282340'>We</span> <span m='1282550'>take</span> <span m='1282790'>a</span>
  <span m='1282850'>parallel</span> <span m='1283510'>line,</span> <span
  m='1285150'>down</span> <span m='1285540'>here.</span> <span
  m='1287240'>And</span> <span m='1287570'>then</span> <span
  m='1287720'>we</span> <span m='1287870'>just</span> <span
  m='1289080'>translate it</span> <span m='1289840'>up,</span> <span
  m='1290300'>leaving</span> <span m='1290640'>it</span> <span
  m='1290780'>parallel, we</span> <span m='1291470'>move</span> <span
  m='1291690'>it</span> <span m='1291770'>up.</span> <span
  m='1292750'>Towards</span> <span m='1293120'>this</span> <span
  m='1293370'>one.</span> <span m='1294080'>Until</span> <span
  m='1294430'>it</span> <span m='1294560'>touches.</span> <span
  m='1298410'>And</span> <span m='1298680'>where</span> <span
  m='1298920'>it</span> <span m='1299020'>touches,</span> <span
  m='1300310'>at</span> <span m='1300480'>this</span> <span
  m='1300660'>point</span> <span m='1301030'>of</span> <span
  m='1301320'>tangency,</span> <span m='1302160'>down</span> <span
  m='1302520'>there,</span> <span m='1303040'>I've</span> <span
  m='1303120'>just</span> <span m='1303420'>found</span> <span
  m='1303790'>my</span> <span m='1303940'>value</span> <span m='1304640'>of
  c.</span> <span m='1307490'>And</span> <span m='1307750'>you</span> <span
  m='1307850'>can</span> <span m='1308010'>see</span> <span
  m='1308340'>that</span> <span m='1308470'>if</span> <span m='1308590'>the
  tangent</span> <span m='1309030'>line</span> <span m='1309210'>is</span> <span
  m='1309360'>parallel</span> <span m='1309830'>to</span> <span
  m='1309940'>this</span> <span m='1310150'>line,</span> <span
  m='1310400'>that's</span> <span m='1310590'>exactly</span> <span
  m='1311160'>the</span> <span m='1311280'>equation</span> <span
  m='1311840'>we</span> <span m='1311960'>want.</span> <span
  m='1313180'>So</span> <span m='1313360'>this</span> <span
  m='1313620'>thing</span> <span m='1313790'>has</span> <span
  m='1314030'>slope</span> <span m='1317880'>f'(c).</span> <span
  m='1319910'>And</span> <span m='1320190'>this</span> <span
  m='1320360'>other</span> <span m='1320640'>one</span> <span
  m='1321390'>has</span> <span m='1321670'>slope</span> <span
  m='1325880'>equal</span> <span m='1326180'>to</span> <span
  m='1326300'>this</span> <span m='1326490'>complicated</span> <span
  m='1327150'>expression,</span> <span m='1328690'>(f(b) - f(a))</span> <span
  m='1329440'>/</span> <span m='1329850'>(b</span> <span m='1329990'>-</span>
  <span m='1330440'>a).</span> </p><p><span m='1335970'>That</span> <span
  m='1336270'>is</span> <span m='1336510'>almost</span> <span
  m='1337100'>the</span> <span m='1337220'>end</span> <span
  m='1337430'>of</span> <span m='1337550'>the</span> <span
  m='1337620'>proof.</span> <span m='1339840'>There's</span> <span
  m='1340070'>one</span> <span m='1340540'>problem.</span> <span
  m='1345330'>So,</span> <span m='1345740'>again,</span> <span
  m='1346600'>we</span> <span m='1346910'>move a</span> <span
  m='1347520'>parallel</span> <span m='1348000'>line</span> <span
  m='1348280'>up.</span> <span m='1349880'>Move</span> <span m='1351630'>up the
  parallel</span> <span m='1355700'>line until</span> <span
  m='1356040'>it</span> <span m='1356150'>touches.</span> <span
  m='1363310'>There's</span> <span m='1363490'>a</span> <span
  m='1363560'>little</span> <span m='1363790'>subtlety</span> <span
  m='1364430'>here,</span> <span m='1364630'>which</span> <span
  m='1364860'>I</span> <span m='1364920'>just</span> <span
  m='1365170'>want</span> <span m='1365340'>to</span> <span
  m='1365400'>emphasize.</span> <span m='1366300'>Which</span> <span
  m='1366620'>is</span> <span m='1366740'>that</span> <span
  m='1366880'>that</span> <span m='1367150'>dotted</span> <span
  m='1367410'>line</span> <span m='1367660'>keeps</span> <span
  m='1367970'>on</span> <span m='1368180'>going</span> <span
  m='1368610'>here.</span> <span m='1369210'>But</span> <span
  m='1369440'>when</span> <span m='1369550'>we</span> <span
  m='1369670'>bring</span> <span m='1369940'>it</span> <span
  m='1370030'>up,</span> <span m='1370790'>we're</span> <span
  m='1371020'>going</span> <span m='1371220'>to</span> <span
  m='1371290'>ignore</span> <span m='1371810'>what's</span> <span
  m='1372050'>happening</span> <span m='1372510'>outside</span> <span
  m='1373210'>of</span> <span m='1373380'>a.</span> <span m='1374500'>And</span>
  <span m='1374900'>beyond</span> <span m='1375470'>b,</span> <span
  m='1376270'>alright?</span> <span m='1376870'>So</span> <span
  m='1376990'>we're</span> <span m='1377090'>just</span> <span
  m='1377310'>going</span> <span m='1377440'>to</span> <span
  m='1377530'>ignore</span> <span m='1377930'>the</span> <span
  m='1378030'>rest</span> <span m='1378320'>of</span> <span
  m='1378390'>the</span> <span m='1378480'>graph.</span> <span
  m='1381590'>But</span> <span m='1381760'>there</span> <span
  m='1381920'>is</span> <span m='1382180'>one</span> <span
  m='1382430'>thing</span> <span m='1382620'>that</span> <span
  m='1382720'>can</span> <span m='1382880'>go</span> <span
  m='1383090'>wrong.</span> <span m='1386090'>So</span> <span
  m='1386340'>if</span> <span m='1387390'>it</span> <span
  m='1387550'>does</span> <span m='1387750'>not</span> <span
  m='1388080'>touch,</span> <span m='1393950'>then</span> <span
  m='1394200'>the</span> <span m='1394280'>picture</span> <span
  m='1394660'>looks</span> <span m='1394900'>likes</span> <span
  m='1395220'>this.</span> <span m='1396800'>Here are</span> <span
  m='1397020'>the</span> <span m='1397160'>same</span> <span
  m='1397440'>two</span> <span m='1397580'>points.</span> <span
  m='1398230'>And</span> <span m='1398360'>the</span> <span
  m='1398420'>graph</span> <span m='1398790'>is</span> <span
  m='1398910'>all</span> <span m='1399160'>above.</span> <span
  m='1400240'>And</span> <span m='1400380'>we</span> <span
  m='1400490'>brought</span> <span m='1400800'>up</span> <span
  m='1400910'>our</span> <span m='1401180'>thing.</span> <span
  m='1402060'>And</span> <span m='1402180'>it</span> <span
  m='1402250'>went</span> <span m='1402470'>like</span> <span
  m='1402700'>that.</span> <span m='1403960'>So</span> <span
  m='1404130'>we</span> <span m='1404280'>didn't</span> <span
  m='1405490'>construct a</span> <span m='1406020'>tangent</span> <span
  m='1406520'>line.</span> <span m='1407480'>If</span> <span
  m='1408010'>this</span> <span m='1408210'>happens.</span> <span
  m='1409520'>So</span> <span m='1409630'>we're</span> <span
  m='1409750'>in</span> <span m='1409850'>trouble,</span> <span
  m='1410750'>in</span> <span m='1410900'>that</span> <span
  m='1411160'>point.</span> <span m='1411980'>In</span> <span
  m='1412430'>this</span> <span m='1412560'>situation,</span> <span
  m='1413280'>sorry.</span> <span m='1417010'>But</span> <span
  m='1417240'>there's</span> <span m='1417450'>a</span> <span
  m='1417520'>trick,</span> <span m='1418030'>which</span> <span
  m='1418210'>is</span> <span m='1418310'>a</span> <span
  m='1418390'>straightforward</span> <span m='1419120'>trick.</span> <span
  m='1420860'>Then</span> <span m='1424820'>bring</span> <span
  m='1425260'>the</span> <span m='1425530'>tangent</span> <span
  m='1425990'>lines</span> <span m='1426190'>down</span> <span
  m='1426510'>from</span> <span m='1426650'>the</span> <span
  m='1426730'>top.</span> <span m='1435810'>So</span> <span
  m='1435940'>parallel</span> <span m='1436340'>lines,</span> <span
  m='1436710'>sorry,</span> <span m='1436850'>not</span> <span
  m='1437070'>tangent lines.</span> <span m='1438040'>Parallel</span> <span
  m='1438450'>lines.</span> <span m='1446580'>From</span> <span
  m='1447470'>above.</span> <span m='1451600'>So,</span> <span
  m='1453900'>that's</span> <span m='1454140'>the</span> <span
  m='1454220'>whole</span> <span m='1454410'>story.</span> <span
  m='1456380'>That's</span> <span m='1456550'>how</span> <span
  m='1456660'>we</span> <span m='1456790'>cook</span> <span
  m='1457030'>up</span> <span m='1457680'>this</span> <span
  m='1461150'>point</span> <span m='1461530'>c,</span> <span
  m='1462120'>with</span> <span m='1462290'>the</span> <span
  m='1462370'>right</span> <span m='1462620'>properties.</span> </p><p><span
  m='1483460'>I</span> <span m='1483660'>want</span> <span m='1483890'>to</span>
  <span m='1483980'>point</span> <span m='1484280'>out</span> <span
  m='1484510'>just</span> <span m='1484790'>one</span> <span
  m='1485210'>more</span> <span m='1485470'>theoretical</span> <span
  m='1486230'>thing.</span> <span m='1486640'>And</span> <span
  m='1486800'>then</span> <span m='1487260'>the</span> <span
  m='1487420'>rest,</span> <span m='1487960'>we're</span> <span
  m='1488190'>going</span> <span m='1488360'>to</span> <span
  m='1488420'>be</span> <span m='1488490'>drawing</span> <span
  m='1488830'>conclusions.</span> <span m='1490150'>So there's</span> <span
  m='1490330'>one</span> <span m='1490500'>more</span> <span
  m='1490670'>theoretical</span> <span m='1491240'>remark</span> <span
  m='1491670'>about</span> <span m='1491970'>the</span> <span
  m='1492060'>proof,</span> <span m='1493170'>which</span> <span
  m='1493430'>is</span> <span m='1494080'>something</span> <span
  m='1494480'>that</span> <span m='1494700'>is</span> <span
  m='1495490'>fairly</span> <span m='1495880'>important</span> <span
  m='1496970'>to</span> <span m='1497140'>understand.</span> <span
  m='1499130'>When</span> <span m='1499310'>you</span> <span
  m='1499390'>understand</span> <span m='1499590'>a</span> <span
  m='1499910'>proof,</span> <span m='1500970'>you</span> <span
  m='1501190'>should</span> <span m='1501350'>always</span> <span
  m='1501640'>be</span> <span m='1501760'>thinking</span> <span
  m='1502120'>about</span> <span m='1502980'>why</span> <span
  m='1503400'>the</span> <span m='1503490'>hypotheses</span> <span
  m='1504530'>are</span> <span m='1504660'>necessary.</span> <span
  m='1506170'>Where</span> <span m='1506470'>do</span> <span
  m='1506580'>I</span> <span m='1506690'>use</span> <span m='1507100'>the</span>
  <span m='1507180'>hypothesis.</span> <span m='1508280'>And</span> <span
  m='1508550'>I</span> <span m='1508580'>want</span> <span m='1508770'>to</span>
  <span m='1508830'>give</span> <span m='1508970'>you</span> <span
  m='1509100'>an</span> <span m='1509180'>example</span> <span
  m='1509980'>the</span> <span m='1510070'>proof</span> <span
  m='1510560'>doesn't</span> <span m='1510890'>work</span> <span
  m='1511320'>to</span> <span m='1511420'>show</span> <span
  m='1511710'>you</span> <span m='1512440'>that</span> <span
  m='1512610'>the</span> <span m='1512700'>hypothesis</span> <span
  m='1513720'>is</span> <span m='1513840'>an</span> <span
  m='1513920'>important</span> <span m='1514470'>one.</span> <span
  m='1515350'>So</span> <span m='1515570'>the</span> <span
  m='1515730'>example</span> <span m='1516220'>is</span> <span
  m='1516360'>the</span> <span m='1516470'>following.</span> <span
  m='1517230'>I'll</span> <span m='1517370'>just</span> <span
  m='1517580'>take</span> <span m='1517830'>a</span> <span
  m='1517900'>function</span> <span m='1518340'>which</span> <span
  m='1518510'>is</span> <span m='1518710'>two</span> <span
  m='1520590'>straight</span> <span m='1521000'>lines</span> <span
  m='1521350'>like</span> <span m='1521630'>this.</span> <span
  m='1522400'>And</span> <span m='1522960'>if</span> <span
  m='1523110'>you</span> <span m='1523210'>try</span> <span
  m='1523530'>to</span> <span m='1523650'>perform</span> <span
  m='1524090'>this</span> <span m='1524280'>trick</span> <span
  m='1527200'>with</span> <span m='1527390'>these</span> <span
  m='1527550'>things,</span> <span m='1527920'>then</span> <span
  m='1528040'>it's</span> <span m='1528150'>going to</span> <span
  m='1528310'>come</span> <span m='1528590'>up</span> <span
  m='1528750'>and</span> <span m='1528840'>it's</span> <span
  m='1528960'>going</span> <span m='1529120'>to</span> <span
  m='1529200'>touch</span> <span m='1529620'>here.</span> <span
  m='1532380'>But</span> <span m='1532570'>the</span> <span
  m='1532650'>problem</span> <span m='1533160'>is</span> <span
  m='1533800'>that</span> <span m='1534130'>the</span> <span
  m='1534820'>tangent</span> <span m='1535410'>line</span> <span
  m='1535620'>is</span> <span m='1535750'>not</span> <span
  m='1536070'>defined</span> <span m='1536560'>here.</span> <span
  m='1536740'>There are</span> <span m='1536900'>lots</span> <span
  m='1537200'>of</span> <span m='1537290'>tangents,</span> <span
  m='1538220'>and</span> <span m='1538470'>there's</span> <span
  m='1538660'>no</span> <span m='1538900'>derivative</span> <span
  m='1539410'>at</span> <span m='1539510'>this</span> <span
  m='1539740'>point.</span> <span m='1540610'>So</span> <span
  m='1541330'>the</span> <span m='1541560'>derivative</span> <span
  m='1542090'>doesn't</span> <span m='1542400'>exist</span> <span
  m='1542920'>here.</span> <span m='1544860'>So</span> <span
  m='1545360'>this</span> <span m='1545540'>is</span> <span
  m='1545670'>the</span> <span m='1545800'>claim</span> <span
  m='1546220'>that</span> <span m='1546450'>one</span> <span
  m='1546710'>bad</span> <span m='1547150'>point</span> <span
  m='1547660'>ruins</span> <span m='1551010'>the</span> <span
  m='1551100'>proof.</span> <span m='1557230'>We</span> <span
  m='1557360'>need</span> <span m='1560230'>f'</span> <span
  m='1561360'>to</span> <span m='1561580'>exist</span> <span
  m='1564790'>at</span> <span m='1564970'>all--</span> <span
  m='1566150'>so,</span> <span m='1567180'>f'(x)</span> <span
  m='1567280'>to</span> <span m='1567680'>exist at</span> <span m='1568000'>all
  x</span> <span m='1568730'>in</span> <span m='1568880'>between.</span> <span
  m='1574340'>Can't</span> <span m='1574640'>get</span> <span
  m='1574780'>away</span> <span m='1575640'>even</span> <span
  m='1575950'>with</span> <span m='1576140'>one</span> <span
  m='1577620'>defective</span> <span m='1578260'>point.</span> </p><p><span
  m='1590980'>Now</span> <span m='1591220'>it's</span> <span
  m='1591400'>time</span> <span m='1591630'>to</span> <span
  m='1591730'>draw</span> <span m='1592010'>some</span> <span
  m='1592230'>consequences.</span> <span m='1600620'>And</span> <span
  m='1601930'>the</span> <span m='1602770'>main</span> <span
  m='1603170'>consequence</span> <span m='1605140'>is</span> <span
  m='1605400'>going</span> <span m='1605670'>to</span> <span
  m='1607420'>have</span> <span m='1607630'>to</span> <span
  m='1607720'>do</span> <span m='1607890'>with</span> <span
  m='1608420'>applications</span> <span m='1609090'>to</span> <span
  m='1609190'>graphing.</span> <span m='1617880'>But</span> <span
  m='1618280'>we'll</span> <span m='1618460'>see</span> <span
  m='1619520'>tomorrow</span> <span m='1620100'>and</span> <span
  m='1620270'>for</span> <span m='1620380'>the</span> <span
  m='1620450'>rest</span> <span m='1620650'>of</span> <span
  m='1620710'>the</span> <span m='1620790'>course</span> <span
  m='1621090'>that</span> <span m='1621220'>this</span> <span
  m='1621960'>is</span> <span m='1622290'>even</span> <span
  m='1622550'>more</span> <span m='1622780'>significant.</span> <span
  m='1623920'>It's</span> <span m='1624080'>significant to</span> <span
  m='1624650'>all</span> <span m='1624950'>the</span> <span
  m='1625060'>rest</span> <span m='1625320'>of</span> <span
  m='1625410'>calculus.</span> <span m='1629790'>I'm</span> <span
  m='1630060'>going to</span> <span m='1630240'>list</span> <span
  m='1631130'>three</span> <span m='1631340'>consequences</span> <span
  m='1632100'>which</span> <span m='1632290'>you're</span> <span
  m='1632440'>quite</span> <span m='1632720'>familiar</span> <span
  m='1633190'>with</span> <span m='1633410'>already.</span> <span
  m='1634890'>So,</span> <span m='1635010'>the</span> <span
  m='1635120'>first</span> <span m='1635450'>one</span> <span
  m='1635610'>is</span> <span m='1635860'>if</span> <span m='1636860'>f'</span>
  <span m='1637170'>is</span> <span m='1637750'>positive,</span> <span
  m='1639280'>then</span> <span m='1640400'>f</span> <span m='1641350'>is</span>
  <span m='1641960'>increasing.</span> <span m='1647550'>And</span> <span
  m='1649290'>the</span> <span m='1649420'>second</span> <span
  m='1649750'>one</span> <span m='1649940'>is</span> <span m='1650180'>if</span>
  <span m='1650850'>f'</span> <span m='1651380'>is</span> <span
  m='1651520'>negative,</span> <span m='1652830'>then</span> <span m='1654490'>f
  is</span> <span m='1655780'>decreasing.</span> <span m='1660430'>And</span>
  <span m='1660560'>the</span> <span m='1660640'>last</span> <span
  m='1661070'>one</span> <span m='1662500'>seems</span> <span
  m='1662810'>like</span> <span m='1663020'>the</span> <span
  m='1663110'>simplest.</span> <span m='1664130'>But</span> <span
  m='1664390'>even</span> <span m='1664750'>this</span> <span
  m='1664960'>one</span> <span m='1665180'>alone</span> <span
  m='1666340'>is</span> <span m='1666620'>the</span> <span
  m='1666830'>key</span> <span m='1667060'>to</span> <span
  m='1667210'>everything.</span> <span m='1668460'>If</span> <span
  m='1668810'>f'</span> <span m='1669000'>=</span> <span m='1669520'>0,</span>
  <span m='1672430'>then</span> <span m='1673900'>f</span> <span
  m='1674970'>is</span> <span m='1675930'>constant.</span> <span
  m='1683340'>These</span> <span m='1683680'>are</span> <span
  m='1684500'>three</span> <span m='1684960'>consequences,</span> <span
  m='1685900'>now,</span> <span m='1687080'>of</span> <span
  m='1687500'>the</span> <span m='1690560'>mean</span> <span
  m='1690750'>value</span> <span m='1691260'>theorem.</span> <span
  m='1693490'>And</span> <span m='1693650'>let</span> <span
  m='1693830'>me</span> <span m='1694740'>show</span> <span
  m='1694910'>you</span> <span m='1695050'>how</span> <span
  m='1695700'>they're</span> <span m='1695850'>proved.</span> </p><p><span
  m='1697130'>I</span> <span m='1697320'>just</span> <span
  m='1698170'>told</span> <span m='1698600'>you</span> <span
  m='1698730'>that</span> <span m='1698890'>they</span> <span
  m='1699010'>were</span> <span m='1699190'>true,</span> <span
  m='1699820'>maybe,</span> <span m='1701450'>a while</span> <span
  m='1701880'>ago.</span> <span m='1702870'>And</span> <span
  m='1704480'>certainly</span> <span m='1704880'>I</span> <span
  m='1705320'>mentioned</span> <span m='1705810'>the</span> <span
  m='1705890'>first</span> <span m='1706280'>two.</span> <span
  m='1707030'>The</span> <span m='1707180'>last</span> <span
  m='1707590'>one</span> <span m='1707720'>was</span> <span
  m='1707880'>so</span> <span m='1708130'>simple</span> <span
  m='1708590'>that</span> <span m='1709050'>we</span> <span
  m='1709290'>maybe</span> <span m='1709540'>just</span> <span
  m='1709780'>swept</span> <span m='1710120'>it</span> <span
  m='1710200'>under</span> <span m='1710380'>the</span> <span
  m='1710460'>rug.</span> <span m='1710810'>You did</span> <span
  m='1711000'>use</span> <span m='1711240'>it</span> <span m='1711430'>on</span>
  <span m='1711550'>a</span> <span m='1712070'>problem</span> <span
  m='1712690'>set,</span> <span m='1713250'>once</span> <span
  m='1713500'>or</span> <span m='1713580'>twice.</span> <span
  m='1716570'>But</span> <span m='1716780'>it</span> <span
  m='1716860'>turns</span> <span m='1717200'>out</span> <span
  m='1717460'>that</span> <span m='1717590'>this</span> <span
  m='1717770'>actually</span> <span m='1718150'>requires</span> <span
  m='1718760'>proof,</span> <span m='1719140'>and</span> <span
  m='1719240'>we're</span> <span m='1719350'>going</span> <span
  m='1719480'>to</span> <span m='1719550'>give</span> <span m='1720620'>the
  proof right</span> <span m='1720850'>now.</span> <span m='1728010'>The</span>
  <span m='1728400'>way</span> <span m='1728600'>that</span> <span
  m='1728750'>the</span> <span m='1728840'>proof</span> <span
  m='1729200'>goes</span> <span m='1730400'>is</span> <span
  m='1730770'>simply</span> <span m='1731260'>to</span> <span
  m='1731430'>write</span> <span m='1731840'>down,</span> <span
  m='1732190'>to</span> <span m='1732340'>rewrite</span> <span
  m='1732820'>star.</span> <span m='1734500'>Rewrite</span> <span
  m='1734920'>our</span> <span m='1735040'>formula.</span> <span
  m='1739440'>Which</span> <span m='1739840'>says</span> <span
  m='1740300'>that</span> <span m='1742450'>(f(b) - f(a))</span> <span
  m='1743530'>/</span> <span m='1743750'>(b</span> <span m='1743920'>-</span>
  <span m='1744370'>a)</span> <span m='1745160'>= f'(c).</span> <span
  m='1750050'>And</span> <span m='1750630'>you</span> <span
  m='1751080'>see</span> <span m='1752040'>I've</span> <span m='1752170'>written
  it</span> <span m='1752650'>from</span> <span m='1752790'>left</span> <span
  m='1753040'>to</span> <span m='1753140'>right</span> <span
  m='1753440'>here</span> <span m='1753730'>to</span> <span
  m='1753900'>say</span> <span m='1754180'>that</span> <span
  m='1754350'>the</span> <span m='1754440'>right-hand</span> <span
  m='1754930'>side</span> <span m='1755460'>information</span> <span
  m='1756110'>about</span> <span m='1756360'>the</span> <span
  m='1756470'>derivative</span> <span m='1757120'>is</span> <span
  m='1757350'>going to</span> <span m='1757520'>be</span> <span
  m='1757600'>giving</span> <span m='1757850'>the</span> <span
  m='1757950'>information</span> <span m='1758480'>about</span> <span
  m='1758710'>the</span> <span m='1758800'>function.</span> <span
  m='1759340'>That's</span> <span m='1759590'>the</span> <span
  m='1759680'>way</span> <span m='1759790'>I'm</span> <span
  m='1759910'>going</span> <span m='1760140'>to</span> <span
  m='1760250'>read</span> <span m='1760520'>it.</span> <span
  m='1762230'>In</span> <span m='1762390'>order</span> <span
  m='1762620'>to</span> <span m='1765220'>express</span> <span
  m='1765730'>this,</span> <span m='1765920'>though,</span> <span
  m='1766220'>I'm</span> <span m='1766360'>going to</span> <span
  m='1766770'>just</span> <span m='1767720'>rewrite</span> <span
  m='1768340'>it</span> <span m='1768440'>a</span> <span
  m='1768490'>couple</span> <span m='1768760'>of</span> <span
  m='1768860'>times</span> <span m='1769430'>here.</span> <span
  m='1770760'>So</span> <span m='1770840'>here's</span> <span
  m='1771420'>f(a),</span> <span m='1772330'>multiplying</span> <span
  m='1772970'>through</span> <span m='1773980'>by</span> <span
  m='1774140'>the</span> <span m='1774250'>denominator.</span> <span
  m='1777360'>And</span> <span m='1777650'>now</span> <span
  m='1777780'>I'm</span> <span m='1777910'>going</span> <span
  m='1778050'>to</span> <span m='1778110'>write</span> <span
  m='1778370'>it</span> <span m='1778580'>in</span> <span
  m='1779100'>another</span> <span m='1779440'>customary</span> <span
  m='1780130'>form</span> <span m='1780470'>for</span> <span
  m='1780630'>the</span> <span m='1780720'>mean</span> <span
  m='1780920'>value</span> <span m='1781470'>theorem.</span> <span
  m='1782300'>Which</span> <span m='1782560'>is</span> <span
  m='1783170'>f(b)</span> <span m='1784080'>=</span> <span
  m='1784720'>f(a)</span> <span m='1784890'>+</span> <span m='1785050'>f'(c)
  (b-a).</span> <span m='1791300'>So</span> <span m='1791420'>here's</span>
  <span m='1791670'>another</span> <span m='1792550'>version.</span> <span
  m='1793600'>I should</span> <span m='1793790'>probably</span> <span
  m='1794250'>have put</span> <span m='1794510'>this</span> <span
  m='1794730'>one</span> <span m='1794910'>in</span> <span
  m='1794990'>the</span> <span m='1795080'>box</span> <span
  m='1795440'>to</span> <span m='1795540'>begin</span> <span
  m='1795770'>with</span> <span m='1795970'>anyway.</span> <span
  m='1799870'>And,</span> <span m='1800320'>just</span> <span
  m='1801310'>changing</span> <span m='1801800'>it</span> <span
  m='1801860'>around</span> <span m='1802970'>algebraically,</span> <span
  m='1803800'>it's</span> <span m='1804060'>this</span> <span
  m='1805230'>fact</span> <span m='1805610'>here.</span> <span
  m='1807160'>They're</span> <span m='1807290'>the</span> <span
  m='1807400'>same</span> <span m='1807710'>thing.</span> <span
  m='1813310'>And</span> <span m='1813630'>now</span> <span
  m='1815480'>with</span> <span m='1815670'>the</span> <span
  m='1815760'>formula</span> <span m='1816140'>written</span> <span
  m='1816380'>in</span> <span m='1816600'>this</span> <span
  m='1817030'>form,</span> <span m='1817760'>I</span> <span
  m='1818040'>claim</span> <span m='1818500'>that</span> <span
  m='1818610'>I</span> <span m='1818660'>can</span> <span
  m='1818840'>check</span> <span m='1819220'>these three</span> <span
  m='1819630'>facts.</span> </p><p><span m='1824060'>Let's</span> <span
  m='1824260'>start</span> <span m='1824540'>with</span> <span
  m='1824650'>the</span> <span m='1824730'>first</span> <span
  m='1825090'>one.</span> <span m='1826680'>I'm</span> <span
  m='1826970'>going</span> <span m='1827190'>to</span> <span
  m='1827280'>set</span> <span m='1827600'>things</span> <span
  m='1827930'>up</span> <span m='1828140'>always</span> <span
  m='1828630'>so</span> <span m='1828890'>that</span> <span m='1829150'>a</span>
  <span m='1829490'>&lt;</span> <span m='1830180'>b.</span> <span
  m='1833580'>And</span> <span m='1834150'>that's</span> <span
  m='1834650'>the</span> <span m='1834840'>setup</span> <span
  m='1835150'>of</span> <span m='1835250'>the</span> <span
  m='1836110'>theorem.</span> <span m='1836840'>And</span> <span
  m='1837090'>so</span> <span m='1837210'>that</span> <span
  m='1837390'>means</span> <span m='1837590'>that</span> <span
  m='1837750'>b</span> <span m='1837900'>-</span> <span m='1838340'>a</span>
  <span m='1838490'>is</span> <span m='1838740'>positive.</span> <span
  m='1842010'>Which</span> <span m='1842310'>means</span> <span
  m='1842530'>that</span> <span m='1842690'>this</span> <span
  m='1842870'>factor</span> <span m='1843330'>over</span> <span
  m='1843540'>here</span> <span m='1843790'>is a</span> <span
  m='1843950'>positive</span> <span m='1844490'>number.</span> <span
  m='1848190'>If</span> <span m='1848400'>f'</span> <span m='1849750'>is</span>
  <span m='1849960'>positive,</span> <span m='1855150'>which</span> <span
  m='1855400'>is</span> <span m='1855500'>what</span> <span
  m='1855660'>happens</span> <span m='1856000'>in</span> <span
  m='1856070'>the</span> <span m='1856140'>first</span> <span
  m='1856480'>case,</span> <span m='1856770'>that's</span> <span
  m='1856970'>the</span> <span m='1857080'>assumption</span> <span
  m='1857520'>that</span> <span m='1857610'>we're</span> <span
  m='1857730'>making,</span> <span m='1858830'>then</span> <span
  m='1859410'>this</span> <span m='1859630'>is</span> <span m='1859750'>a</span>
  <span m='1859810'>positive</span> <span m='1860300'>number.</span> <span
  m='1861210'>And</span> <span m='1861410'>so</span> <span
  m='1862010'>f(b)</span> <span m='1862230'>&gt;</span> <span
  m='1862540'>f(a).</span> <span m='1868690'>Which</span> <span
  m='1868870'>means</span> <span m='1869080'>that</span> <span
  m='1869200'>it's</span> <span m='1869320'>increasing. It</span> <span
  m='1869810'>goes</span> <span m='1870190'>up</span> <span
  m='1871110'>as</span> <span m='1871640'>the</span> <span
  m='1871860'>value</span> <span m='1872490'>goes up.</span> <span
  m='1873900'>Similarly,</span> <span m='1875170'>if</span> <span
  m='1875590'>f'(c)</span> <span m='1876660'>is</span> <span
  m='1876840'>negative,</span> <span m='1879220'>then</span> <span
  m='1879700'>this</span> <span m='1879850'>is</span> <span m='1879950'>a</span>
  <span m='1880010'>positive</span> <span m='1880520'>times</span> <span
  m='1880780'>a</span> <span m='1880870'>negative</span> <span
  m='1881080'>number,</span> <span m='1881280'>this</span> <span
  m='1881410'>is</span> <span m='1881520'>negative.</span> <span
  m='1882830'>f(b)</span> <span m='1883200'>&lt;</span> <span
  m='1884160'>f(a).</span> <span m='1885610'>So</span> <span
  m='1886250'>it</span> <span m='1886370'>goes</span> <span
  m='1886590'>the</span> <span m='1886710'>other</span> <span
  m='1886880'>way.</span> <span m='1897850'>Maybe</span> <span m='1898160'>I'll
  write this way. And finally,</span> <span m='1900200'>if</span> <span
  m='1900720'>f'(c) =</span> <span m='1902280'>0,</span> <span
  m='1904070'>then</span> <span m='1905060'>f(b)</span> <span
  m='1906390'>=</span> <span m='1907030'>f(a).</span> <span
  m='1909910'>Which</span> <span m='1910100'>if</span> <span
  m='1910190'>you</span> <span m='1910330'>apply it</span> <span
  m='1910770'>to</span> <span m='1910900'>all</span> <span
  m='1911090'>possible</span> <span m='1911640'>ends,</span> <span
  m='1912110'>means</span> <span m='1913110'>if</span> <span
  m='1913350'>you</span> <span m='1913430'>can</span> <span
  m='1913560'>do</span> <span m='1913690'>it</span> <span m='1913810'>for</span>
  <span m='1913990'>every</span> <span m='1914250'>interval,</span> <span
  m='1914640'>which</span> <span m='1914780'>you</span> <span
  m='1914920'>can,</span> <span m='1916110'>then</span> <span
  m='1916450'>that</span> <span m='1916610'>means</span> <span m='1916810'>that
  f</span> <span m='1917040'>is</span> <span m='1917170'>constant.</span> <span
  m='1917940'>It</span> <span m='1918120'>never</span> <span
  m='1918350'>gets</span> <span m='1918600'>to</span> <span
  m='1918690'>change</span> <span m='1919070'>values.</span> <span
  m='1932640'>Well</span> <span m='1933960'>you</span> <span
  m='1934100'>might</span> <span m='1934310'>have</span> <span
  m='1934440'>believed</span> <span m='1935530'>these</span> <span
  m='1935770'>facts</span> <span m='1936220'>already.</span> <span
  m='1937260'>But</span> <span m='1937900'>I</span> <span
  m='1938000'>just</span> <span m='1938480'>want</span> <span
  m='1938670'>to</span> <span m='1938730'>emphasize</span> <span m='1939440'>to
  you</span> <span m='1939630'>that</span> <span m='1939950'>this</span> <span
  m='1940180'>turns</span> <span m='1940460'>out</span> <span
  m='1940670'>to</span> <span m='1940790'>be</span> <span m='1941540'>the</span>
  <span m='1941690'>one</span> <span m='1941990'>key</span> <span
  m='1942240'>link</span> <span m='1942880'>between</span> <span
  m='1943280'>infinitesimals,</span> <span m='1943670'>between</span> <span
  m='1944640'>limits</span> <span m='1945310'>and</span> <span
  m='1945520'>these</span> <span m='1945680'>actual</span> <span
  m='1946170'>differences.</span> <span m='1947610'>Before,</span> <span
  m='1948280'>we</span> <span m='1948440'>were</span> <span
  m='1948580'>saying</span> <span m='1949030'>that</span> <span
  m='1949200'>the</span> <span m='1949290'>difference</span> <span
  m='1949680'>quotient</span> <span m='1950240'>was</span> <span
  m='1950400'>approximately</span> <span m='1951320'>equal</span> <span
  m='1951600'>to the</span> <span m='1951970'>derivative.</span> <span
  m='1952530'>Now</span> <span m='1952680'>we're</span> <span
  m='1952820'>saying</span> <span m='1953100'>that it's</span> <span
  m='1953360'>exactly</span> <span m='1954080'>equal</span> <span
  m='1954390'>to</span> <span m='1954950'>a</span> <span
  m='1955060'>derivative.</span> <span m='1955520'>Although</span> <span
  m='1955860'>we</span> <span m='1956040'>don't</span> <span
  m='1956250'>know</span> <span m='1956360'>exactly</span> <span
  m='1956800'>which</span> <span m='1957150'>point</span> <span
  m='1957690'>to</span> <span m='1957860'>use.</span> <span
  m='1958930'>It's</span> <span m='1959270'>some</span> <span
  m='1959790'>point</span> <span m='1960210'>in</span> <span
  m='1960350'>between.</span> <span m='1967150'>I'm</span> <span
  m='1967300'>going to</span> <span m='1967700'>be</span> <span
  m='1968030'>deducing</span> <span m='1968340'>some</span> <span
  m='1968500'>other</span> <span m='1968670'>consequences</span> <span
  m='1969410'>in</span> <span m='1969500'>a</span> <span
  m='1969560'>second,</span> <span m='1969900'>but let</span> <span
  m='1970320'>me</span> <span m='1970530'>stop</span> <span
  m='1970870'>for</span> <span m='1971200'>second</span> <span
  m='1971690'>to</span> <span m='1971800'>make</span> <span m='1971960'>sure
  that</span> <span m='1972560'>everybody's</span> <span m='1972910'>on</span>
  <span m='1973050'>board.</span> <span m='1973270'>Especially</span> <span
  m='1973650'>since</span> <span m='1973850'>I've</span> <span
  m='1973960'>finished</span> <span m='1974330'>the</span> <span
  m='1974430'>blackboards</span> <span m='1974750'>here.</span> <span
  m='1976880'>Before</span> <span m='1977200'>we--</span> <span
  m='1978570'>everybody</span> <span m='1978880'>happy?</span> </p><p><span
  m='1979510'>One</span> <span m='1979680'>question.</span> </p><p><span
  m='1980100'>STUDENT: [INAUDIBLE]</span> </p><p><span
  m='1989660'>PROFESSOR:</span> <span m='1989751'>I'm</span> <span
  m='1989842'>just</span> <span m='1989933'>going</span> <span
  m='1990024'>to</span> <span m='1990115'>repeat</span> <span
  m='1990206'>your</span> <span m='1990297'>question</span> <span
  m='1990390'>first.</span> <span m='1990950'>I'm</span> <span
  m='1991220'>a</span> <span m='1991280'>little</span> <span
  m='1991540'>bit</span> <span m='1991730'>confused,</span> <span
  m='1992490'>you</span> <span m='1992600'>said,</span> <span
  m='1992950'>about</span> <span m='1993300'>what</span> <span
  m='1993630'>guarantees</span> <span m='1994350'>that</span> <span
  m='1994490'>there's</span> <span m='1994660'>a</span> <span
  m='1994720'>point</span> <span m='1995010'>of</span> <span
  m='1995110'>tangency.</span> <span m='1996230'>That's</span> <span
  m='1996440'>what</span> <span m='1996550'>you</span> <span
  m='1996670'>said.</span> <span m='1999030'>So</span> <span
  m='1999360'>do</span> <span m='1999480'>you</span> <span
  m='1999540'>want</span> <span m='1999730'>to</span> <span
  m='1999840'>elaborate,</span> <span m='2000320'>or</span> <span
  m='2000430'>do</span> <span m='2000540'>you</span> <span
  m='2000780'>want</span> <span m='2000970'>to</span> <span m='2001070'>want
  to</span> <span m='2001250'>stop</span> <span m='2001530'>with</span> <span
  m='2002570'>what</span> <span m='2002710'>you</span> <span
  m='2002790'>just</span> <span m='2002950'>said?</span> <span
  m='2003240'>What</span> <span m='2003410'>is</span> <span
  m='2003520'>it</span> <span m='2003610'>that</span> <span
  m='2003710'>confuses</span> <span m='2004210'>you?</span> </p><p><span
  m='2004360'>STUDENT: [INAUDIBLE]</span> </p><p><span m='2009010'>PROFESSOR:
  Yeah.</span> </p><p><span m='2009430'>STUDENT: [INAUDIBLE]</span> </p><p><span
  m='2023500'>PROFESSOR: So</span> <span m='2023860'>I'm</span> <span
  m='2024070'>not</span> <span m='2024300'>claiming</span> <span
  m='2024700'>that</span> <span m='2024830'>there's</span> <span
  m='2025120'>only</span> <span m='2025500'>one</span> <span
  m='2025790'>point.</span> <span m='2026530'>This</span> <span
  m='2026710'>could</span> <span m='2026890'>wiggle</span> <span
  m='2027060'>a</span> <span m='2027230'>lot</span> <span m='2027430'>of</span>
  <span m='2027500'>times</span> <span m='2027770'>and</span> <span
  m='2027980'>it maybe</span> <span m='2028180'>touches</span> <span
  m='2028540'>at</span> <span m='2028610'>ten</span> <span
  m='2028970'>places.</span> <span m='2029990'>In</span> <span
  m='2030080'>other</span> <span m='2030220'>words,</span> <span
  m='2030440'>it's</span> <span m='2030680'>OK</span> <span
  m='2031090'>with</span> <span m='2031310'>me</span> <span
  m='2032610'>if</span> <span m='2032770'>it</span> <span
  m='2032870'>touches</span> <span m='2033340'>more</span> <span
  m='2033480'>than</span> <span m='2033600'>once.</span> <span
  m='2034640'>Then</span> <span m='2034820'>I</span> <span
  m='2034890'>just</span> <span m='2035130'>have</span> <span
  m='2035370'>more,</span> <span m='2035850'>the more</span> <span
  m='2036060'>the</span> <span m='2036170'>merrier.</span> <span
  m='2036830'>In</span> <span m='2036930'>other</span> <span
  m='2037080'>words,</span> <span m='2038170'>I</span> <span
  m='2038270'>don't</span> <span m='2038420'>want</span> <span
  m='2038600'>there</span> <span m='2038710'>necessarily</span> <span
  m='2039350'>only</span> <span m='2039560'>to</span> <span
  m='2039680'>be</span> <span m='2039800'>one.</span> <span
  m='2040050'>It</span> <span m='2040140'>could</span> <span
  m='2040330'>come</span> <span m='2040530'>down</span> <span
  m='2040790'>like</span> <span m='2041020'>this.</span> <span
  m='2042720'>And</span> <span m='2042910'>touch</span> <span
  m='2043140'>a</span> <span m='2043180'>second</span> <span
  m='2043510'>time.</span> <span m='2045140'>Is</span> <span
  m='2045290'>that</span> <span m='2045520'>what</span> <span
  m='2045630'>was</span> <span m='2045780'>concerning</span> <span
  m='2046400'>you?</span> <span m='2049290'>So</span> <span
  m='2049720'>in</span> <span m='2049850'>mathematics,</span> <span
  m='2050360'>when</span> <span m='2050850'>we</span> <span
  m='2051160'>claim</span> <span m='2051460'>that this</span> <span
  m='2051580'>is</span> <span m='2051750'>true</span> <span
  m='2051880'>for</span> <span m='2052010'>some</span> <span
  m='2053080'>point,</span> <span m='2053500'>we</span> <span
  m='2053610'>don't</span> <span m='2053870'>necessarily</span> <span
  m='2054410'>mean</span> <span m='2054530'>that</span> <span
  m='2054640'>it</span> <span m='2054790'>doesn't</span> <span
  m='2055100'>work</span> <span m='2055320'>for</span> <span
  m='2055480'>others.</span> <span m='2056210'>In fact, if</span> <span
  m='2056620'>the</span> <span m='2056730'>function</span> <span
  m='2057050'>is</span> <span m='2057210'>constant,</span> <span
  m='2058310'>this</span> <span m='2058680'>is</span> <span m='2058890'>0</span>
  <span m='2059240'>and</span> <span m='2059330'>in</span> <span
  m='2059420'>fact</span> <span m='2059710'>this</span> <span
  m='2059840'>equation is</span> <span m='2060310'>true</span> <span
  m='2060460'>for</span> <span m='2060630'>every</span> <span
  m='2061000'>c.</span> <span m='2065960'>That</span> <span
  m='2066240'>satisfies your question?</span> <span m='2070840'>The</span> <span
  m='2071050'>fact</span> <span m='2071320'>that</span> <span
  m='2071390'>this</span> <span m='2071550'>point</span> <span
  m='2071830'>exists</span> <span m='2072160'>actually</span> <span
  m='2072680'>is</span> <span m='2072860'>a</span> <span
  m='2072930'>touchy</span> <span m='2073250'>point.</span> <span
  m='2073620'>I</span> <span m='2073770'>just</span> <span
  m='2074110'>convinced</span> <span m='2074500'>you</span> <span m='2074620'>of
  it</span> <span m='2074790'>visually.</span> <span m='2075320'>It's</span>
  <span m='2075410'>a</span> <span m='2075520'>geometric</span> <span
  m='2076100'>issue,</span> <span m='2076730'>whether</span> <span
  m='2077460'>you're</span> <span m='2077610'>allowed</span> <span
  m='2077920'>to</span> <span m='2078020'>do</span> <span
  m='2078180'>this.</span> <span m='2079030'>Indeed,</span> <span
  m='2080540'>it</span> <span m='2080660'>has</span> <span m='2080890'>to</span>
  <span m='2080970'>do</span> <span m='2081090'>with</span> <span
  m='2081230'>the</span> <span m='2081380'>existence</span> <span
  m='2081840'>of</span> <span m='2081930'>tangent lines</span> <span
  m='2082580'>and</span> <span m='2082730'>more</span> <span
  m='2083420'>analysis</span> <span m='2084150'>than</span> <span
  m='2084360'>we</span> <span m='2084470'>can</span> <span m='2084580'>do</span>
  <span m='2084710'>in</span> <span m='2084810'>this</span> <span
  m='2084960'>class.</span> <span m='2086250'>Yeah.</span> <span
  m='2086620'>Another</span> <span m='2086860'>question.</span> </p><p><span
  m='2087260'>STUDENT: [INAUDIBLE]</span> </p><p><span m='2088880'>PROFESSOR:
  Pardon</span> <span m='2089110'>me.</span> </p><p><span m='2091050'>STUDENT:
  [INAUDIBLE]</span> </p><p><span m='2091270'>PROFESSOR: The</span> <span
  m='2091470'>question</span> <span m='2091930'>is,</span> <span
  m='2092260'>what's</span> <span m='2092640'>the</span> <span
  m='2092770'>difference</span> <span m='2093160'>between</span> <span
  m='2093570'>this</span> <span m='2093920'>and</span> <span
  m='2094050'>the</span> <span m='2094120'>linear</span> <span
  m='2094450'>approximation.</span> <span m='2096780'>And</span> <span
  m='2097610'>I</span> <span m='2097790'>think,</span> <span
  m='2101720'>let</span> <span m='2101900'>me</span> <span
  m='2102030'>see</span> <span m='2102210'>if</span> <span m='2102320'>I</span>
  <span m='2103400'>can</span> <span m='2103550'>describe</span> <span
  m='2104190'>that.</span> <span m='2111010'>I'll</span> <span
  m='2111240'>leave</span> <span m='2111560'>the</span> <span
  m='2111820'>theorem</span> <span m='2112090'>on</span> <span
  m='2112210'>the</span> <span m='2112270'>board.</span> <span
  m='2112520'>I'm</span> <span m='2112640'>going to</span> <span
  m='2112800'>get</span> <span m='2113030'>rid</span> <span
  m='2113200'>of</span> <span m='2113310'>the</span> <span
  m='2113430'>colloquial</span> <span m='2114100'>version</span> <span
  m='2114490'>of</span> <span m='2114580'>the</span> <span
  m='2114720'>theorem.</span> <span m='2119380'>And</span> <span
  m='2119520'>I'll</span> <span m='2119620'>try</span> <span
  m='2119880'>to</span> <span m='2119990'>describe</span> <span
  m='2120560'>to</span> <span m='2120730'>you</span> <span
  m='2121790'>the</span> <span m='2121920'>difference</span> <span
  m='2124930'>between</span> <span m='2125430'>this</span> <span
  m='2126200'>and</span> <span m='2126380'>the</span> <span
  m='2126440'>linear</span> <span m='2126750'>approximation.</span> <span
  m='2132130'>I</span> <span m='2132210'>was</span> <span
  m='2132340'>planning</span> <span m='2132610'>to</span> <span
  m='2132690'>do</span> <span m='2132810'>that</span> <span
  m='2133620'>in</span> <span m='2133780'>a</span> <span
  m='2133830'>while,</span> <span m='2134220'>but</span> <span
  m='2134970'>we'll</span> <span m='2135150'>do</span> <span
  m='2135270'>it</span> <span m='2135380'>right</span> <span
  m='2135600'>now</span> <span m='2135820'>since</span> <span
  m='2136110'>that's</span> <span m='2136340'>what</span> <span
  m='2136450'>you're</span> <span m='2136630'>asking.</span> <span
  m='2136890'>That's</span> <span m='2137100'>fine.</span> <span
  m='2137660'>So</span> <span m='2139450'>here's</span> <span
  m='2139670'>the</span> <span m='2139760'>situation.</span> <span
  m='2145570'>The</span> <span m='2145750'>linear</span> <span
  m='2146080'>approximation,</span> <span m='2147610'>so let's say</span> <span
  m='2148090'>comparison</span> <span m='2151660'>with</span> <span
  m='2152540'>linear</span> <span m='2152860'>approximation.</span> <span
  m='2157390'>They're</span> <span m='2157530'>very</span> <span
  m='2157770'>closely</span> <span m='2158260'>related.</span> <span
  m='2159710'>The</span> <span m='2159940'>linear</span> <span
  m='2160150'>approximation</span> <span m='2160910'>says</span> <span
  m='2161230'>the</span> <span m='2161320'>change</span> <span
  m='2161680'>in</span> <span m='2161750'>f</span> <span m='2162090'>over</span>
  <span m='2162220'>the</span> <span m='2162300'>change</span> <span
  m='2162710'>in x,</span> <span m='2163440'>that's</span> <span
  m='2163780'>the</span> <span m='2163870'>left-hand</span> <span
  m='2164390'>side</span> <span m='2165100'>of</span> <span
  m='2165220'>this</span> <span m='2165830'>thing,</span> <span
  m='2166290'>is</span> <span m='2166640'>approximately</span> <span
  m='2168530'>f'(a).</span> <span m='2169980'>For</span> <span
  m='2170180'>b</span> <span m='2170720'>near</span> <span m='2172630'>a,</span>
  <span m='2173750'>and b</span> <span m='2174090'>-</span> <span
  m='2174550'>a</span> <span m='2175150'>=</span> <span m='2175360'>delta</span>
  <span m='2175430'>x.</span> <span m='2181200'>This</span> <span
  m='2181470'>statement,</span> <span m='2182030'>which</span> <span
  m='2182210'>is</span> <span m='2182320'>in</span> <span m='2182410'>the</span>
  <span m='2182490'>box,</span> <span m='2182940'>which</span> <span
  m='2183110'>is</span> <span m='2183200'>sitting</span> <span
  m='2183470'>right</span> <span m='2183670'>up</span> <span
  m='2183890'>there,</span> <span m='2185130'>is</span> <span
  m='2185350'>the</span> <span m='2185510'>statement</span> <span
  m='2185980'>that</span> <span m='2186640'>this</span> <span
  m='2186940'>change</span> <span m='2187460'>in</span> <span
  m='2188110'>f</span> <span m='2188270'>is</span> <span
  m='2189220'>actually</span> <span m='2189740'>equal</span> <span
  m='2190210'>to</span> <span m='2190400'>something.</span> <span
  m='2191330'>Not</span> <span m='2191550'>approximately</span> <span
  m='2192350'>equal</span> <span m='2192610'>to</span> <span
  m='2192830'>it.</span> <span m='2193180'>It's</span> <span
  m='2193480'>equal</span> <span m='2193900'>to</span> <span
  m='2194080'>f'</span> <span m='2194380'>of</span> <span m='2194970'>some
  c.</span> <span m='2197670'>And</span> <span m='2197850'>the</span> <span
  m='2197920'>problem</span> <span m='2198290'>here</span> <span
  m='2198530'>is</span> <span m='2198750'>that</span> <span
  m='2199020'>we</span> <span m='2199210'>don't</span> <span
  m='2199500'>know</span> <span m='2199650'>exactly</span> <span
  m='2200070'>which</span> <span m='2200350'>c.</span> <span
  m='2201330'>This</span> <span m='2201480'>is</span> <span
  m='2201600'>for</span> <span m='2201750'>some</span> <span
  m='2202190'>c.</span> <span m='2203930'>Between</span> <span
  m='2206770'>a</span> <span m='2208330'>and b.</span> <span
  m='2213190'>Right,</span> <span m='2213620'>so.</span> <span
  m='2214810'>That's</span> <span m='2215450'>the</span> <span
  m='2215550'>difference</span> <span m='2216500'>between</span> <span
  m='2216930'>the</span> <span m='2217030'>two.</span> <span
  m='2219190'>And</span> <span m='2221320'>let</span> <span
  m='2221570'>me</span> <span m='2224400'>elaborate</span> <span
  m='2235800'>a</span> <span m='2235930'>little</span> <span
  m='2236180'>bit.</span> </p><p><span m='2239700'>If</span> <span
  m='2239900'>you're</span> <span m='2240010'>trying</span> <span
  m='2240360'>to</span> <span m='2240470'>understand</span> <span
  m='2242080'>what</span> <span m='2244660'>(f(b) - f(a))</span> <span
  m='2245910'>/</span> <span m='2246450'>(b</span> <span m='2246610'>-</span>
  <span m='2247050'>a)</span> <span m='2247320'>is,</span> <span
  m='2249180'>the</span> <span m='2249400'>mean</span> <span
  m='2249620'>value</span> <span m='2250120'>theorem</span> <span
  m='2250420'>is</span> <span m='2250600'>telling</span> <span
  m='2250940'>you</span> <span m='2251050'>for</span> <span
  m='2251280'>sure</span> <span m='2252680'>that</span> <span
  m='2252840'>it's</span> <span m='2253000'>equal</span> <span
  m='2253370'>to</span> <span m='2253510'>this</span> <span
  m='2254690'>f'(c).</span> <span m='2255530'>So</span> <span
  m='2255680'>that</span> <span m='2255920'>means</span> <span
  m='2256300'>it's</span> <span m='2256470'>less</span> <span
  m='2256930'>than</span> <span m='2257050'>or</span> <span
  m='2257160'>equal</span> <span m='2257440'>to</span> <span
  m='2257590'>the</span> <span m='2257690'>largest</span> <span
  m='2258230'>possible</span> <span m='2259240'>value</span> <span
  m='2259860'>on</span> <span m='2260100'>the--</span> <span
  m='2260940'>largest</span> <span m='2261500'>value</span> <span
  m='2262390'>you</span> <span m='2262570'>can</span> <span
  m='2262730'>get,</span> <span m='2262970'>for</span> <span
  m='2263140'>sure.</span> <span m='2264280'>And</span> <span
  m='2264490'>this</span> <span m='2264650'>is</span> <span
  m='2264940'>on</span> <span m='2267230'>the</span> <span
  m='2267350'>whole</span> <span m='2267590'>interval.</span> <span
  m='2268110'>And</span> <span m='2268250'>I'm</span> <span
  m='2268330'>going</span> <span m='2268450'>to</span> <span
  m='2268540'>include</span> <span m='2268940'>the</span> <span
  m='2269130'>ends,</span> <span m='2269980'>because</span> <span
  m='2270220'>when</span> <span m='2270320'>you</span> <span
  m='2270400'>take</span> <span m='2270640'>a</span> <span m='2270690'>max
  it's</span> <span m='2271070'>sometimes</span> <span
  m='2271580'>achieved</span> <span m='2272030'>at</span> <span
  m='2272120'>the</span> <span m='2272270'>ends.</span> <span
  m='2274050'>And</span> <span m='2274300'>similarly,</span> <span
  m='2275070'>because</span> <span m='2275480'>it's</span> <span
  m='2275820'>f'(c),</span> <span m='2276420'>it's</span> <span
  m='2276590'>definitely</span> <span m='2278510'>bigger</span> <span
  m='2278770'>than</span> <span m='2278970'>the</span> <span
  m='2279060'>min</span> <span m='2280440'>on</span> <span
  m='2280620'>this</span> <span m='2280740'>same</span> <span
  m='2283160'>interval</span> <span m='2283620'>here.</span> <span
  m='2287030'>This</span> <span m='2287350'>is</span> <span
  m='2287550'>all</span> <span m='2287880'>you</span> <span
  m='2288070'>can</span> <span m='2288270'>say</span> <span
  m='2289520'>based</span> <span m='2289720'>on</span> <span
  m='2290520'>the</span> <span m='2291350'>mean</span> <span
  m='2291540'>value</span> <span m='2291980'>theorem.</span> <span
  m='2293420'>All</span> <span m='2293610'>you</span> <span
  m='2293760'>know</span> <span m='2293980'>is</span> <span
  m='2294160'>this.</span> <span m='2294620'>And</span> <span
  m='2294840'>colloquially,</span> <span m='2296550'>what</span> <span
  m='2296860'>that</span> <span m='2297150'>means</span> <span
  m='2297710'>is</span> <span m='2298430'>that</span> <span
  m='2298620'>the</span> <span m='2298800'>average</span> <span
  m='2299400'>speed</span> <span m='2302790'>is</span> <span
  m='2303070'>between</span> <span m='2303550'>the</span> <span
  m='2303630'>maximum</span> <span m='2305690'>and</span> <span m='2306020'>the
  minimum.</span> <span m='2309000'>Not</span> <span m='2309310'>very</span>
  <span m='2309570'>surprising.</span> <span m='2311450'>The</span> <span
  m='2311760'>mean</span> <span m='2312020'>value</span> <span
  m='2312350'>theorem</span> <span m='2312520'>is</span> <span
  m='2312660'>supposed</span> <span m='2313120'>to</span> <span
  m='2313200'>be</span> <span m='2314510'>very</span> <span
  m='2314930'>intuitively</span> <span m='2315430'>obvious.</span> <span
  m='2316480'>It's</span> <span m='2316640'>saying</span> <span
  m='2316850'>the</span> <span m='2317030'>average</span> <span
  m='2317490'>speed</span> <span m='2318270'>is</span> <span
  m='2318810'>trapped</span> <span m='2319370'>between</span> <span
  m='2319750'>the</span> <span m='2319810'>maximum</span> <span
  m='2320380'>speed</span> <span m='2320730'>and</span> <span
  m='2320820'>the</span> <span m='2320880'>minimum</span> <span
  m='2321270'>speed.</span> <span m='2322850'>For</span> <span
  m='2323020'>sure,</span> <span m='2323390'>that's</span> <span
  m='2324240'>something,</span> <span m='2324640'>that's</span> <span
  m='2324830'>why--</span> <span m='2325110'>incidentally</span> <span
  m='2326060'>this</span> <span m='2326490'>wasn't</span> <span
  m='2326870'>really</span> <span m='2327110'>proved</span> <span
  m='2327690'>when</span> <span m='2328340'>Newton</span> <span
  m='2328560'>and</span> <span m='2328680'>Leibniz</span> <span
  m='2329180'>were</span> <span m='2329360'>around.</span> <span
  m='2330350'>But,</span> <span m='2330890'>let's</span> <span m='2331510'>write
  this</span> <span m='2331890'>so</span> <span m='2332040'>that</span> <span
  m='2332140'>you</span> <span m='2332220'>can</span> <span m='2332360'>read
  it.</span> <span m='2332860'>Average speed</span> <span m='2334700'>is</span>
  <span m='2337010'>between</span> <span m='2337560'>the</span> <span
  m='2337630'>max and the</span> <span m='2338100'>min.</span> <span
  m='2341350'>But</span> <span m='2341540'>nobody</span> <span
  m='2341800'>had</span> <span m='2341960'>any</span> <span
  m='2342080'>trouble,</span> <span m='2342840'>they</span> <span
  m='2343290'>didn't</span> <span m='2343930'>disbelieve it</span> <span
  m='2344960'>because</span> <span m='2345530'>it's</span> <span
  m='2346060'>a</span> <span m='2346120'>very</span> <span
  m='2346350'>natural</span> <span m='2346820'>thing.</span> </p><p><span
  m='2349750'>Now</span> <span m='2352290'>if,</span> <span
  m='2352480'>for</span> <span m='2352670'>example,</span> <span
  m='2354440'>I</span> <span m='2354570'>take</span> <span
  m='2354860'>any</span> <span m='2355140'>kind</span> <span
  m='2355360'>of</span> <span m='2355430'>linear</span> <span
  m='2355740'>approximation,</span> <span m='2356980'>say,</span> <span
  m='2357170'>for</span> <span m='2357310'>instance,</span> <span
  m='2358200'>e^x</span> <span m='2359110'>is</span> <span
  m='2359310'>approximately</span> <span m='2360100'>1</span> <span
  m='2360370'>+</span> <span m='2360710'>x.</span> <span m='2365670'>Then</span>
  <span m='2366300'>I'm</span> <span m='2366460'>making</span> <span
  m='2367010'>the</span> <span m='2367090'>guess--</span> <span
  m='2367860'>no,</span> <span m='2368880'>I don't</span> <span
  m='2369110'>want</span> <span m='2369230'>to</span> <span m='2369290'>say
  this</span> <span m='2369520'>yet.</span> <span m='2370620'>That's</span>
  <span m='2370850'>not</span> <span m='2371060'>going to</span> <span
  m='2371480'>explain</span> <span m='2371890'>it</span> <span
  m='2371980'>to</span> <span m='2372100'>you</span> <span
  m='2372180'>well</span> <span m='2372360'>enough.</span> <span
  m='2375830'>What</span> <span m='2376160'>we're</span> <span
  m='2376300'>saying,</span> <span m='2376880'>so</span> <span
  m='2377330'>this</span> <span m='2377640'>is</span> <span
  m='2377780'>the</span> <span m='2377900'>mean</span> <span
  m='2378160'>value</span> <span m='2378610'>here.</span> <span
  m='2378690'>This</span> <span m='2378940'>is</span> <span
  m='2379040'>what</span> <span m='2379160'>the</span> <span
  m='2379240'>mean</span> <span m='2379400'>value</span> <span
  m='2380550'>theorem says.</span> <span m='2380840'>And here's</span> <span
  m='2381340'>the</span> <span m='2381410'>linear</span> <span
  m='2381740'>approximation.</span> <span m='2387270'>The</span> <span
  m='2387530'>linear</span> <span m='2387650'>approximation</span> <span
  m='2388460'>is</span> <span m='2388670'>saying</span> <span
  m='2388910'>that</span> <span m='2389040'>the</span> <span
  m='2389150'>average</span> <span m='2389710'>speed</span> <span
  m='2392140'>is</span> <span m='2392410'>approximately</span> <span
  m='2393700'>the</span> <span m='2393960'>initial</span> <span
  m='2394350'>speed,</span> <span m='2398680'>or</span> <span
  m='2399020'>possibly</span> <span m='2399550'>the</span> <span
  m='2399650'>final speed.</span> <span m='2401900'>So</span> <span
  m='2404000'>if</span> <span m='2404200'>a</span> <span m='2404430'>is</span>
  <span m='2404637'>the</span> <span m='2404844'>left</span> <span
  m='2405051'>endpoint,</span> <span m='2405260'>then</span> <span
  m='2405630'>it's</span> <span m='2405850'>the</span> <span
  m='2406030'>initial</span> <span m='2406380'>speed.</span> <span
  m='2407140'>If</span> <span m='2407320'>it</span> <span
  m='2407400'>happens</span> <span m='2407710'>to</span> <span
  m='2407770'>be</span> <span m='2407850'>the</span> <span
  m='2407920'>right</span> <span m='2408120'>endpoint,</span> <span
  m='2408470'>if the</span> <span m='2408950'>value</span> <span m='2409260'>of
  x</span> <span m='2409630'>is to</span> <span m='2409750'>the</span> <span
  m='2409840'>left</span> <span m='2410690'>then</span> <span
  m='2410840'>it's</span> <span m='2411010'>the</span> <span
  m='2411110'>final</span> <span m='2411650'>speed.</span> <span
  m='2413460'>So</span> <span m='2413680'>those</span> <span
  m='2413960'>are</span> <span m='2414060'>the--</span> <span
  m='2414680'>so</span> <span m='2414830'>you</span> <span
  m='2414940'>can</span> <span m='2415110'>see</span> <span
  m='2415420'>it's</span> <span m='2415570'>approximately</span> <span
  m='2416250'>right.</span> <span m='2416640'>Because</span> <span
  m='2417330'>the</span> <span m='2417450'>speed,</span> <span
  m='2418010'>when</span> <span m='2418140'>you're</span> <span m='2418250'>on
  a</span> <span m='2418520'>short</span> <span m='2418850'>interval,</span>
  <span m='2419180'>shouldn't</span> <span m='2419420'>be</span> <span
  m='2419510'>varying</span> <span m='2419800'>very</span> <span
  m='2420110'>much.</span> <span m='2420530'>The max and the min</span> <span
  m='2420940'>should</span> <span m='2421290'>be</span> <span
  m='2421340'>pretty</span> <span m='2421560'>close</span> <span
  m='2421860'>together.</span> <span m='2422430'>So</span> <span
  m='2422660'>that's</span> <span m='2422910'>why</span> <span
  m='2423080'>the</span> <span m='2423190'>linear</span> <span
  m='2423340'>approximation</span> <span m='2424090'>is</span> <span
  m='2424190'>reasonable.</span> <span m='2425630'>And</span> <span
  m='2425900'>this</span> <span m='2426040'>is</span> <span
  m='2426180'>telling</span> <span m='2426550'>you</span> <span
  m='2426850'>absolutely,</span> <span m='2427800'>it's</span> <span
  m='2428330'>no</span> <span m='2429880'>less</span> <span
  m='2430230'>than</span> <span m='2430350'>the</span> <span
  m='2430430'>min</span> <span m='2430760'>and</span> <span
  m='2430960'>no</span> <span m='2431080'>more</span> <span
  m='2431310'>than</span> <span m='2431480'>the max.</span> <span
  m='2434410'>Yeah.</span> </p><p><span m='2434640'>STUDENT: [INAUDIBLE]</span>
  </p><p><span m='2441390'>PROFESSOR: The little</span> <span
  m='2441700'>kink?</span> </p><p><span m='2442090'>STUDENT: [INAUDIBLE]</span>
  </p><p><span m='2446110'>PROFESSOR: If</span> <span m='2446300'>you</span>
  <span m='2446430'>approach</span> <span m='2446870'>from</span> <span
  m='2447060'>the</span> <span m='2447160'>top.</span> <span
  m='2447740'>So</span> <span m='2448480'>if</span> <span
  m='2448690'>it's</span> <span m='2448820'>still</span> <span
  m='2449080'>under</span> <span m='2449270'>here</span> <span
  m='2449490'>I</span> <span m='2449590'>can</span> <span
  m='2449750'>show</span> <span m='2450000'>you</span> <span
  m='2450150'>it</span> <span m='2450260'>again.</span> <span
  m='2450590'>Oh</span> <span m='2450690'>yeah,</span> <span
  m='2451040'>it's</span> <span m='2451110'>still</span> <span
  m='2451300'>there.</span> <span m='2451590'>Good.</span> </p><p><span
  m='2451900'>STUDENT: [INAUDIBLE]</span> </p><p><span m='2454630'>PROFESSOR:
  Oh,</span> <span m='2454860'>the</span> <span m='2454990'>one</span> <span
  m='2455150'>with</span> <span m='2455690'>the</span> <span
  m='2455780'>wiggle</span> <span m='2455960'>on</span> <span
  m='2456160'>top?</span> <span m='2456830'>Yeah,</span> <span
  m='2457120'>this</span> <span m='2457410'>one</span> <span
  m='2457570'>you</span> <span m='2457730'>can't.</span> <span
  m='2458160'>Because</span> <span m='2458380'>there's</span> <span
  m='2458530'>nothing</span> <span m='2458790'>to</span> <span
  m='2458890'>touch</span> <span m='2459200'>and</span> <span
  m='2459300'>it</span> <span m='2459380'>also</span> <span
  m='2459690'>fails</span> <span m='2460010'>from</span> <span
  m='2460130'>the</span> <span m='2460190'>bottom</span> <span
  m='2460480'>because</span> <span m='2460750'>there's</span> <span
  m='2460920'>this</span> <span m='2461030'>bad</span> <span
  m='2461370'>point.</span> <span m='2462160'>From</span> <span
  m='2462400'>the</span> <span m='2462640'>top,</span> <span
  m='2463550'>it</span> <span m='2463700'>could</span> <span
  m='2463960'>work.</span> <span m='2464250'>It</span> <span
  m='2464380'>can</span> <span m='2464510'>certainly</span> <span
  m='2464840'>work</span> <span m='2465050'>both</span> <span
  m='2465280'>ways.</span> <span m='2465550'>So,</span> <span
  m='2465690'>for</span> <span m='2465900'>example.</span> <span
  m='2467760'>See</span> <span m='2467970'>if</span> <span m='2468090'>you're
  a</span> <span m='2468260'>machine,</span> <span m='2469530'>you</span> <span
  m='2469660'>maybe</span> <span m='2469940'>don't</span> <span
  m='2470180'>have</span> <span m='2470380'>a</span> <span
  m='2470660'>way</span> <span m='2470800'>of</span> <span
  m='2470900'>doing</span> <span m='2471130'>this.</span> <span m='2471310'>But
  if</span> <span m='2471460'>you're a</span> <span m='2471580'>human</span>
  <span m='2471860'>being</span> <span m='2472090'>you</span> <span
  m='2472160'>can</span> <span m='2472290'>spot</span> <span
  m='2472640'>all</span> <span m='2472860'>the</span> <span
  m='2472960'>places.</span> <span m='2474330'>There are</span> <span
  m='2474500'>a</span> <span m='2474570'>bunch</span> <span
  m='2474820'>of</span> <span m='2474930'>spots</span> <span
  m='2476170'>where</span> <span m='2476280'>the</span> <span
  m='2476380'>slope</span> <span m='2476730'>is</span> <span
  m='2476860'>right.</span> <span m='2477990'>And it's</span> <span
  m='2478220'>perfectly</span> <span m='2478650'>OK.</span> <span
  m='2480770'>All</span> <span m='2481180'>of</span> <span
  m='2481300'>them</span> <span m='2481390'>work.</span> </p><p><span
  m='2481780'>STUDENT: [INAUDIBLE]</span> </p><p><span m='2485350'>PROFESSOR:
  It's</span> <span m='2485560'>not</span> <span m='2486030'>that the</span>
  <span m='2486120'>c</span> <span m='2486360'>is</span> <span
  m='2486490'>the</span> <span m='2486590'>same.</span> <span
  m='2486930'>It's</span> <span m='2487050'>just</span> <span
  m='2487250'>we've</span> <span m='2487410'>now</span> <span
  m='2487640'>found</span> <span m='2488530'>one,</span> <span
  m='2488770'>two,</span> <span m='2488960'>three,</span> <span
  m='2489200'>four,</span> <span m='2489470'>five</span> <span
  m='2490090'>c's</span> <span m='2490430'>for</span> <span
  m='2490530'>which</span> <span m='2490720'>it</span> <span
  m='2490810'>works.</span> </p><p><span m='2491160'>STUDENT: [INAUDIBLE]</span>
  <span m='2497660'>PROFESSOR: If</span> <span m='2497830'>you're</span> <span
  m='2498030'>asked</span> <span m='2498560'>to</span> <span
  m='2498650'>find</span> <span m='2499050'>a</span> <span m='2499150'>c,</span>
  <span m='2500390'>so</span> <span m='2500660'>first</span> <span
  m='2500950'>of</span> <span m='2501070'>all</span> <span
  m='2501820'>that's</span> <span m='2502130'>kind</span> <span m='2502520'>of
  a</span> <span m='2502610'>phony</span> <span m='2503100'>question.</span>
  <span m='2504960'>There are</span> <span m='2505150'>some</span> <span
  m='2505330'>questions</span> <span m='2505840'>on</span> <span
  m='2505970'>your</span> <span m='2506070'>problem</span> <span
  m='2506550'>set</span> <span m='2506730'>which</span> <span
  m='2506930'>ask</span> <span m='2507210'>you</span> <span
  m='2507280'>to</span> <span m='2507370'>find</span> <span m='2507660'>a</span>
  <span m='2507710'>c.</span> <span m='2508340'>That</span> <span
  m='2508530'>actually</span> <span m='2508940'>is</span> <span
  m='2510390'>struggling</span> <span m='2510930'>to</span> <span
  m='2511030'>get</span> <span m='2511180'>you</span> <span
  m='2511240'>to</span> <span m='2511310'>understand</span> <span
  m='2511740'>what</span> <span m='2511850'>the</span> <span
  m='2511930'>statement</span> <span m='2512360'>of</span> <span
  m='2512430'>the</span> <span m='2512510'>mean</span> <span
  m='2512690'>value</span> <span m='2513130'>theorem</span> <span
  m='2513320'>is,</span> <span m='2514310'>but</span> <span
  m='2514660'>you</span> <span m='2514830'>should</span> <span
  m='2515700'>not</span> <span m='2516060'>pay</span> <span m='2516340'>a</span>
  <span m='2516890'>lot</span> <span m='2517100'>of</span> <span
  m='2517180'>attention</span> <span m='2517600'>to</span> <span
  m='2517690'>those</span> <span m='2517910'>questions.</span> <span
  m='2518890'>They're</span> <span m='2519030'>not</span> <span
  m='2519350'>very</span> <span m='2519580'>impressive.</span> <span
  m='2521870'>But,</span> <span m='2522100'>of</span> <span
  m='2522240'>course,</span> <span m='2522650'>you</span> <span
  m='2522750'>would</span> <span m='2522840'>have</span> <span
  m='2522990'>to</span> <span m='2523100'>find</span> <span
  m='2523340'>all</span> <span m='2523510'>the--</span> <span
  m='2524370'>if</span> <span m='2524540'>it</span> <span
  m='2524650'>asked</span> <span m='2524890'>you</span> <span
  m='2524950'>to</span> <span m='2525010'>find</span> <span
  m='2525300'>one,</span> <span m='2525570'>you find</span> <span
  m='2525850'>one.</span> <span m='2526110'>If</span> <span
  m='2526260'>you</span> <span m='2527030'>can</span> <span
  m='2527180'>find</span> <span m='2527450'>some</span> <span
  m='2527590'>more,</span> <span m='2527790'>fine.</span> <span
  m='2530950'>You</span> <span m='2531120'>can</span> <span
  m='2531280'>pick</span> <span m='2531460'>whichever</span> <span
  m='2531820'>one</span> <span m='2532000'>you</span> <span
  m='2532060'>want.</span> <span m='2533470'>Mean</span> <span
  m='2533640'>value</span> <span m='2533950'>theorem</span> <span
  m='2534230'>just</span> <span m='2534450'>doesn't</span> <span
  m='2535780'>care.</span> <span m='2536560'>The</span> <span m='2536670'>mean
  value</span> <span m='2536780'>theorem</span> <span m='2537300'>doesn't</span>
  <span m='2537590'>care</span> <span m='2538190'>because</span> <span
  m='2538540'>actually,</span> <span m='2539230'>the</span> <span
  m='2539380'>mean</span> <span m='2539630'>value theorem</span> <span
  m='2539840'>is</span> <span m='2540470'>never</span> <span
  m='2541060'>used</span> <span m='2541900'>except to--</span> <span
  m='2543980'>in</span> <span m='2544100'>real</span> <span
  m='2544340'>life,</span> <span m='2544730'>except</span> <span
  m='2545750'>in</span> <span m='2545980'>this</span> <span
  m='2546580'>context</span> <span m='2547170'>here.</span> <span
  m='2548020'>You</span> <span m='2548320'>can</span> <span
  m='2548640'>never</span> <span m='2549430'>nail</span> <span
  m='2549820'>down</span> <span m='2550120'>which</span> <span
  m='2550360'>c</span> <span m='2550810'>it is,</span> <span
  m='2551640'>so</span> <span m='2551870'>the</span> <span
  m='2552000'>only</span> <span m='2552360'>thing</span> <span
  m='2552510'>you</span> <span m='2552580'>can</span> <span
  m='2552740'>say</span> <span m='2553140'>is</span> <span
  m='2553450'>that</span> <span m='2553590'>you're</span> <span
  m='2553720'>going</span> <span m='2554030'>slower</span> <span
  m='2554410'>than</span> <span m='2554560'>the</span> <span
  m='2554820'>maximum</span> <span m='2555320'>speed</span> <span
  m='2555980'>and</span> <span m='2556230'>faster</span> <span m='2556650'>than
  the</span> <span m='2556880'>minimum</span> <span m='2557170'>speed.</span>
  <span m='2560500'>Sorry, say</span> <span m='2560910'>that</span> <span
  m='2561030'>again?</span> </p><p><span m='2561330'>STUDENT: [INAUDIBLE]</span>
  </p><p><span m='2567360'>PROFESSOR: If</span> <span m='2567530'>you're</span>
  <span m='2567680'>asked</span> <span m='2568040'>for</span> <span
  m='2568150'>a</span> <span m='2568200'>specific</span> <span
  m='2568670'>c,</span> <span m='2568890'>you</span> <span
  m='2568990'>have</span> <span m='2569170'>to</span> <span
  m='2570140'>find</span> <span m='2570400'>a</span> <span
  m='2570450'>specific</span> <span m='2570920'>c.</span> <span
  m='2571080'>And</span> <span m='2571190'>it</span> <span
  m='2571260'>has</span> <span m='2571510'>to</span> <span m='2571610'>be</span>
  <span m='2571830'>in</span> <span m='2572020'>the</span> <span
  m='2572100'>range.</span> <span m='2573070'>In</span> <span
  m='2573210'>between,</span> <span m='2573610'>it</span> <span
  m='2573680'>has</span> <span m='2573920'>to</span> <span m='2574010'>be</span>
  <span m='2575200'>in</span> <span m='2575350'>here.</span> </p><p><span
  m='2584420'>So</span> <span m='2584760'>now</span> <span m='2585150'>I</span>
  <span m='2585250'>want</span> <span m='2585470'>to</span> <span
  m='2585950'>tell</span> <span m='2586110'>you</span> <span
  m='2586210'>about</span> <span m='2586500'>another</span> <span
  m='2586820'>kind</span> <span m='2587130'>of</span> <span
  m='2587200'>application,</span> <span m='2587880'>which</span> <span
  m='2588070'>is</span> <span m='2588160'>really</span> <span
  m='2588380'>just</span> <span m='2588560'>a</span> <span
  m='2588640'>consequence</span> <span m='2590140'>of</span> <span
  m='2590930'>what</span> <span m='2591100'>I've</span> <span
  m='2591200'>described</span> <span m='2591700'>here.</span> <span
  m='2602070'>I</span> <span m='2602240'>should</span> <span
  m='2602440'>emphasize,</span> <span m='2603040'>by the way,</span> <span
  m='2603220'>this,</span> <span m='2603830'>probably,</span> <span
  m='2606050'>should</span> <span m='2606380'>be</span> <span
  m='2606490'>doing</span> <span m='2606770'>this.</span> <span
  m='2607420'>I</span> <span m='2607490'>guess</span> <span
  m='2608480'>we've</span> <span m='2608730'>never</span> <span
  m='2608990'>used</span> <span m='2610510'>this</span> <span
  m='2610730'>color</span> <span m='2611090'>here.</span> <span m='2612120'>It's
  popular.</span> <span m='2612950'>This is pink.</span> <span
  m='2613640'>So</span> <span m='2613770'>this</span> <span
  m='2613950'>one</span> <span m='2614070'>is</span> <span m='2614290'>so</span>
  <span m='2614420'>good.</span> <span m='2615480'>So</span> <span
  m='2615630'>since</span> <span m='2618150'>we're</span> <span
  m='2618270'>going to</span> <span m='2618400'>do</span> <span
  m='2619100'>this.</span> <span m='2627360'>So</span> <span
  m='2627780'>the</span> <span m='2627950'>reason</span> <span
  m='2628260'>why</span> <span m='2629020'>the</span> <span
  m='2630040'>exclamation</span> <span m='2630700'>points</span> <span
  m='2630960'>are</span> <span m='2631070'>temporary,</span> <span
  m='2632210'>this</span> <span m='2632380'>is</span> <span
  m='2632510'>such</span> <span m='2632720'>an</span> <span
  m='2632790'>obvious</span> <span m='2633340'>fact.</span> <span
  m='2634150'>But</span> <span m='2636580'>this</span> <span
  m='2636820'>is</span> <span m='2637010'>the</span> <span
  m='2637110'>way</span> <span m='2637370'>that</span> <span
  m='2637530'>you're</span> <span m='2637830'>going</span> <span
  m='2638090'>to</span> <span m='2638170'>want</span> <span
  m='2638390'>to</span> <span m='2638480'>use</span> <span
  m='2638730'>the</span> <span m='2638780'>mean</span> <span
  m='2638940'>value</span> <span m='2639310'>theorem,</span> <span
  m='2639440'>and</span> <span m='2639570'>this</span> <span
  m='2639690'>is</span> <span m='2639800'>the</span> <span
  m='2639960'>only</span> <span m='2640300'>way</span> <span
  m='2640450'>you</span> <span m='2640560'>need</span> <span
  m='2640890'>to</span> <span m='2641010'>understand</span> <span
  m='2641650'>the</span> <span m='2641750'>mean value theorem.</span> <span
  m='2642670'>On</span> <span m='2642880'>your</span> <span
  m='2643000'>test,</span> <span m='2643440'>or</span> <span
  m='2643820'>ever</span> <span m='2644290'>in</span> <span
  m='2644390'>your</span> <span m='2644510'>whole</span> <span
  m='2644720'>life.</span> <span m='2646520'>So</span> <span
  m='2647100'>this</span> <span m='2647310'>is</span> <span
  m='2647970'>the</span> <span m='2648040'>way</span> <span m='2648360'>it will
  be</span> <span m='2648550'>used.</span> <span m='2650630'>As</span> <span
  m='2650790'>I</span> <span m='2650870'>will</span> <span
  m='2651010'>make</span> <span m='2651220'>very</span> <span
  m='2651450'>clear</span> <span m='2651660'>when</span> <span
  m='2651810'>we</span> <span m='2651940'>review</span> <span
  m='2652330'>for</span> <span m='2652540'>the</span> <span
  m='2652720'>exam.</span> </p><p><span m='2657140'>In</span> <span
  m='2657320'>practice</span> <span m='2657880'>what</span> <span
  m='2658010'>happens</span> <span m='2658300'>is</span> <span
  m='2658400'>you</span> <span m='2658530'>even</span> <span
  m='2658790'>forget</span> <span m='2659060'>about</span> <span m='2659280'>the
  mean</span> <span m='2659470'>value</span> <span m='2659880'>theorem,</span>
  <span m='2660050'>and</span> <span m='2660150'>what</span> <span
  m='2660300'>you</span> <span m='2660380'>remember</span> <span
  m='2661130'>is</span> <span m='2661340'>these</span> <span
  m='2661740'>three</span> <span m='2662080'>properties</span> <span
  m='2662740'>here.</span> <span m='2664360'>Which</span> <span
  m='2664550'>are</span> <span m='2664630'>themselves</span> <span
  m='2665220'>consequences</span> <span m='2666000'>of</span> <span
  m='2666090'>the</span> <span m='2666180'>mean</span> <span
  m='2666370'>value</span> <span m='2666830'>theorem.</span> <span
  m='2667720'>So</span> <span m='2667850'>these</span> <span
  m='2668080'>are</span> <span m='2668140'>the</span> <span
  m='2668230'>ones</span> <span m='2668640'>that</span> <span
  m='2668760'>I</span> <span m='2668840'>want</span> <span m='2669160'>to</span>
  <span m='2669480'>illustrate</span> <span m='2670110'>now.</span> <span
  m='2671950'>In</span> <span m='2672090'>my</span> <span
  m='2672230'>next</span> <span m='2673560'>discussion</span> <span
  m='2674550'>here.</span> <span m='2675710'>I'm</span> <span
  m='2675890'>just</span> <span m='2676060'>going to</span> <span
  m='2676210'>talk</span> <span m='2676490'>about</span> <span
  m='2676820'>inequalities.</span> <span m='2682420'>Inequalities</span> <span
  m='2683710'>are</span> <span m='2683990'>relationships</span> <span
  m='2685430'>between</span> <span m='2685830'>functions.</span> <span
  m='2686930'>And</span> <span m='2687100'>I'm</span> <span m='2687200'>going
  to</span> <span m='2687340'>prove</span> <span m='2687650'>a</span> <span
  m='2687730'>couple</span> <span m='2688140'>of them</span> <span
  m='2688390'>using</span> <span m='2689310'>the</span> <span
  m='2689470'>properties</span> <span m='2690170'>over</span> <span
  m='2690420'>there,</span> <span m='2690640'>the</span> <span
  m='2690730'>properties</span> <span m='2691240'>that</span> <span
  m='2691790'>functions</span> <span m='2692300'>with</span> <span
  m='2692460'>positive</span> <span m='2692910'>derivatives</span> <span
  m='2693380'>are</span> <span m='2693470'>increasing.</span> <span
  m='2696900'>Here's</span> <span m='2697170'>an</span> <span
  m='2697240'>example.</span> <span m='2698900'>e^x</span> <span
  m='2699580'>&gt;</span> <span m='2700650'>1</span> <span m='2700900'>+
  x,</span> <span m='2701290'>where x</span> <span m='2702030'>&gt;</span> <span
  m='2703040'>0.</span> <span m='2708390'>The</span> <span
  m='2708540'>proof</span> <span m='2708850'>is</span> <span
  m='2709000'>the</span> <span m='2709110'>following.</span> <span
  m='2710940'>I</span> <span m='2711080'>consider--</span> <span
  m='2711920'>So</span> <span m='2712020'>here's</span> <span m='2712250'>a
  proof.</span> <span m='2716070'>I</span> <span m='2716370'>consider</span>
  <span m='2716810'>the</span> <span m='2716920'>function</span> <span
  m='2717710'>f(x),</span> <span m='2720040'>which</span> <span
  m='2720280'>is</span> <span m='2720570'>the</span> <span
  m='2720700'>difference.</span> <span m='2721550'>e^x</span> <span
  m='2721840'>-</span> <span m='2722260'>(1+x).</span> <span
  m='2727360'>I</span> <span m='2727540'>observe</span> <span
  m='2728890'>that</span> <span m='2729040'>it</span> <span
  m='2729120'>starts</span> <span m='2732620'>at</span> <span
  m='2733230'>f(0)</span> <span m='2734120'>equal</span> <span
  m='2734540'>to,</span> <span m='2734940'>well,</span> <span
  m='2735180'>that's</span> <span m='2735890'>e^0</span> <span
  m='2736580'>-</span> <span m='2737140'>(1+0),</span> <span m='2739650'>which
  is 0.</span> <span m='2742110'>And,</span> <span m='2743360'>it</span> <span
  m='2743520'>keeps</span> <span m='2743800'>on</span> <span
  m='2743990'>going.</span> <span m='2745510'>f'(x)</span> <span
  m='2746570'>is</span> <span m='2747070'>e^x,</span> <span
  m='2748100'>if</span> <span m='2748250'>I</span> <span
  m='2748350'>differentiate</span> <span m='2748950'>here,</span> <span
  m='2749590'>the</span> <span m='2749680'>1</span> <span
  m='2749890'>goes</span> <span m='2750110'>away.</span> <span
  m='2750310'>I</span> <span m='2750400'>get</span> <span
  m='2751070'>minus</span> <span m='2751430'>1.</span> <span
  m='2754160'>That's</span> <span m='2754460'>the</span> <span
  m='2754550'>derivative</span> <span m='2754920'>of</span> <span
  m='2755040'>the</span> <span m='2755110'>function.</span> <span
  m='2755700'>And</span> <span m='2755960'>this function,</span> <span
  m='2756520'>because</span> <span m='2757370'>e^x</span> <span
  m='2757790'>&gt;</span> <span m='2758150'>1</span> <span m='2758710'>for
  x</span> <span m='2759000'>positive,</span> <span m='2759430'>is</span> <span
  m='2759570'>positive.</span> <span m='2763750'>As x</span> <span
  m='2764250'>gets</span> <span m='2764520'>bigger</span> <span
  m='2764760'>and</span> <span m='2764880'>bigger,</span> <span
  m='2765650'>this</span> <span m='2766090'>rate</span> <span
  m='2766370'>of</span> <span m='2766440'>increase is</span> <span
  m='2767750'>positive.</span> <span m='2768290'>And</span> <span
  m='2768460'>therefore,</span> <span m='2770410'>three</span> <span
  m='2770580'>dots,</span> <span m='2771110'>that's</span> <span
  m='2771380'>therefore,</span> <span m='2773940'>f(x)</span> <span
  m='2775290'>is</span> <span m='2775630'>bigger</span> <span
  m='2775880'>than</span> <span m='2776290'>its</span> <span
  m='2776360'>starting</span> <span m='2776870'>place,</span> <span
  m='2778460'>for</span> <span m='2779940'>x &gt;</span> <span
  m='2781370'>0.</span> <span m='2783350'>If</span> <span
  m='2783500'>it's</span> <span m='2783870'>increasing,</span> <span
  m='2785300'>then</span> <span m='2785810'>that's--</span> <span
  m='2786520'>in</span> <span m='2786660'>particular,</span> <span
  m='2787100'>it's</span> <span m='2787220'>increasing</span> <span
  m='2787650'>starting</span> <span m='2788030'>from</span> <span
  m='2788230'>0.</span> <span m='2788730'>So</span> <span
  m='2789160'>this</span> <span m='2789320'>is</span> <span
  m='2789430'>true.</span> <span m='2790340'>Now,</span> <span
  m='2790700'>all</span> <span m='2790860'>I</span> <span
  m='2790910'>have</span> <span m='2791140'>to</span> <span
  m='2791240'>do</span> <span m='2792070'>is</span> <span
  m='2792970'>read</span> <span m='2793670'>what</span> <span
  m='2793920'>this</span> <span m='2794280'>inequality</span> <span
  m='2795100'>says.</span> <span m='2796000'>And</span> <span
  m='2796240'>what</span> <span m='2796370'>it</span> <span
  m='2796460'>says</span> <span m='2797020'>is</span> <span
  m='2797370'>that</span> <span m='2797900'>e^x,</span> <span
  m='2798150'>just</span> <span m='2798650'>plug</span> <span
  m='2799020'>in</span> <span m='2799180'>for</span> <span
  m='2799460'>f(x),</span> <span m='2799860'>which</span> <span
  m='2800030'>is</span> <span m='2800170'>right</span> <span
  m='2800370'>here,</span> <span m='2801410'>minus (1+x)</span> <span
  m='2802640'>is</span> <span m='2803780'>greater</span> <span
  m='2804040'>than</span> <span m='2804490'>the</span> <span
  m='2804730'>starting</span> <span m='2805130'>value,</span> <span
  m='2805410'>which</span> <span m='2805570'>was</span> <span
  m='2805730'>0.</span> <span m='2808590'>Now,</span> <span m='2808890'>I</span>
  <span m='2808960'>put</span> <span m='2809610'>the</span> <span
  m='2810590'>thing</span> <span m='2810760'>that's</span> <span
  m='2810920'>negative</span> <span m='2811220'>on</span> <span
  m='2811330'>the</span> <span m='2811410'>other</span> <span
  m='2811580'>side.</span> <span m='2812050'>So</span> <span
  m='2812160'>that's</span> <span m='2812390'>the</span> <span
  m='2812470'>same</span> <span m='2812790'>thing</span> <span
  m='2813550'>as</span> <span m='2813810'>e^x &gt;</span> <span
  m='2815100'>1</span> <span m='2815140'>+ x.</span> <span
  m='2821550'>That's</span> <span m='2821840'>a</span> <span
  m='2821970'>typical</span> <span m='2822610'>inequality.</span> <span
  m='2824330'>And</span> <span m='2824550'>now,</span> <span
  m='2825110'>we'll</span> <span m='2825290'>use</span> <span
  m='2825860'>this</span> <span m='2826200'>principle</span> <span
  m='2826770'>again.</span> <span m='2831150'>Oh</span> <span
  m='2831300'>gee,</span> <span m='2831770'>I</span> <span
  m='2831900'>erased</span> <span m='2832310'>the</span> <span
  m='2832380'>wrong</span> <span m='2832650'>thing.</span> <span
  m='2832900'>I</span> <span m='2832960'>erased</span> <span
  m='2833270'>the</span> <span m='2834440'>statement</span> <span
  m='2834800'>and</span> <span m='2834890'>not</span> <span
  m='2835050'>the</span> <span m='2835140'>proof.</span> <span
  m='2835490'>Well,</span> <span m='2835970'>hide</span> <span
  m='2836100'>the</span> <span m='2836230'>proof.</span> </p><p><span
  m='2843340'>The</span> <span m='2843430'>next</span> <span
  m='2843740'>thing</span> <span m='2843930'>I</span> <span
  m='2843980'>want</span> <span m='2844150'>to</span> <span m='2844210'>prove
  to</span> <span m='2844410'>you</span> <span m='2844520'>is</span> <span
  m='2844760'>that</span> <span m='2845020'>e^x</span> <span
  m='2845580'>&gt;</span> <span m='2846100'>1</span> <span m='2846350'>+</span>
  <span m='2847350'>x</span> <span m='2847730'>+ x^2 / 2.</span> <span
  m='2853090'>So,</span> <span m='2853260'>how</span> <span
  m='2853400'>do</span> <span m='2853490'>I</span> <span m='2853590'>do</span>
  <span m='2853770'>that?</span> <span m='2854300'>I</span> <span
  m='2854510'>introduce</span> <span m='2854940'>a</span> <span
  m='2855000'>function</span> <span m='2855600'>g(x),</span> <span
  m='2856100'>which</span> <span m='2856290'>is</span> <span
  m='2856470'>e^x</span> <span m='2857050'>minus</span> <span
  m='2857610'>this.</span> <span m='2862220'>And</span> <span
  m='2862450'>now,</span> <span m='2862580'>I'm</span> <span
  m='2862790'>just</span> <span m='2862920'>going</span> <span
  m='2863040'>to</span> <span m='2863100'>do</span> <span
  m='2863230'>exactly</span> <span m='2863740'>the</span> <span
  m='2863850'>same</span> <span m='2864140'>thing</span> <span
  m='2864340'>I</span> <span m='2864410'>did</span> <span
  m='2864620'>before.</span> <span m='2865780'>Which</span> <span
  m='2866060'>is,</span> <span m='2866160'>I</span> <span m='2866250'>get</span>
  <span m='2866480'>started</span> <span m='2867480'>with</span> <span
  m='2867960'>g(0),</span> <span m='2869180'>which</span> <span
  m='2869390'>is</span> <span m='2869510'>1</span> <span m='2869880'>-</span>
  <span m='2870740'>1.</span> <span m='2871870'>Which</span> <span
  m='2872120'>is</span> <span m='2872190'>0.</span> <span m='2873680'>And</span>
  <span m='2875240'>g'(x)</span> <span m='2877120'>is</span> <span
  m='2877750'>e^x</span> <span m='2878810'>minus -</span> <span
  m='2879730'>now,</span> <span m='2879870'>look</span> <span
  m='2880040'>at</span> <span m='2880120'>what</span> <span
  m='2880250'>happens</span> <span m='2880520'>when</span> <span
  m='2880640'>I</span> <span m='2880690'>differentiate</span> <span
  m='2881450'>this.</span> <span m='2883590'>The</span> <span
  m='2883710'>1</span> <span m='2883900'>goes</span> <span
  m='2884130'>away.</span> <span m='2884870'>The</span> <span
  m='2885040'>x</span> <span m='2885480'>gives me</span> <span
  m='2885620'>a</span> <span m='2885770'>1,</span> <span m='2886650'>and</span>
  <span m='2886820'>the</span> <span m='2886900'>x^2 / 2</span> <span
  m='2887700'>gives</span> <span m='2887920'>me</span> <span
  m='2888190'>a</span> <span m='2888230'>plus</span> <span m='2888510'>x.</span>
  <span m='2890600'>And</span> <span m='2891030'>this</span> <span
  m='2891340'>one</span> <span m='2891600'>is</span> <span
  m='2891760'>positive</span> <span m='2892870'>for x</span> <span
  m='2893310'>&gt;</span> <span m='2893830'>0,</span> <span
  m='2894970'>because</span> <span m='2895330'>of</span> <span
  m='2895430'>step</span> <span m='2895790'>1.</span> <span
  m='2898190'>Because</span> <span m='2898470'>of</span> <span
  m='2898570'>the</span> <span m='2898650'>previous</span> <span
  m='2899950'>one</span> <span m='2900160'>that</span> <span
  m='2900290'>I</span> <span m='2900410'>did.</span> <span m='2901840'>So</span>
  <span m='2901990'>this</span> <span m='2902200'>one</span> <span
  m='2902360'>is</span> <span m='2902480'>increasing.</span> <span
  m='2905190'>g</span> <span m='2905650'>is</span> <span
  m='2906520'>increasing.</span> <span m='2908340'>Which</span> <span
  m='2908570'>says</span> <span m='2909120'>that</span> <span
  m='2909670'>g(x)</span> <span m='2910720'>&gt;</span> <span
  m='2911310'>g(0).</span> <span m='2913350'>And</span> <span
  m='2913450'>if</span> <span m='2913540'>you</span> <span
  m='2913660'>just</span> <span m='2913910'>read</span> <span
  m='2914190'>that</span> <span m='2914410'>off,</span> <span m='2915680'>it's
  exactly</span> <span m='2916240'>the</span> <span m='2916340'>same</span>
  <span m='2916620'>as</span> <span m='2916730'>our</span> <span
  m='2916890'>inequality</span> <span m='2917060'>here.</span> <span
  m='2917730'>e^x</span> <span m='2917980'>&gt;</span> <span m='2919110'>1 +
  x</span> <span m='2920680'>+</span> <span m='2920990'>x^2 / 2.</span> <span
  m='2928270'>Now,</span> <span m='2928650'>you</span> <span
  m='2928810'>can</span> <span m='2929000'>keep</span> <span
  m='2929310'>on</span> <span m='2929530'>going</span> <span
  m='2929960'>with</span> <span m='2930160'>this</span> <span
  m='2931400'>essentially</span> <span m='2932060'>forever.</span> <span
  m='2934010'>And</span> <span m='2934430'>let</span> <span
  m='2934590'>me</span> <span m='2934670'>just</span> <span
  m='2935100'>write</span> <span m='2935390'>down</span> <span
  m='2935730'>what</span> <span m='2935930'>you get.</span> <span
  m='2938510'>You</span> <span m='2938680'>get</span> <span
  m='2939460'>e^x</span> <span m='2940740'>is greater than</span> <span
  m='2941440'>1</span> <span m='2941740'>plus</span> <span m='2942090'>x</span>
  <span m='2943100'>plus</span> <span m='2943660'>x^2 / 2,</span> <span
  m='2944910'>the</span> <span m='2945010'>next</span> <span
  m='2945330'>one</span> <span m='2945540'>turns</span> <span
  m='2945810'>out</span> <span m='2945950'>to</span> <span m='2946030'>be x^3 /
  (3*2).</span> <span m='2950460'>x^4 / (4*3*2).</span> <span
  m='2954850'>And</span> <span m='2955120'>you</span> <span
  m='2955210'>can</span> <span m='2955510'>do</span> <span
  m='2955730'>whatever</span> <span m='2956020'>you</span> <span
  m='2956120'>want.</span> <span m='2956820'>You</span> <span
  m='2956930'>can</span> <span m='2957070'>do</span> <span
  m='2957200'>others.</span> <span m='2959490'>And</span> <span
  m='2959970'>this</span> <span m='2960130'>is</span> <span
  m='2960260'>like</span> <span m='2960610'>the</span> <span
  m='2960750'>tortoise</span> <span m='2961230'>and</span> <span
  m='2961340'>the</span> <span m='2961400'>hare.</span> <span
  m='2962860'>This</span> <span m='2963020'>is</span> <span
  m='2963150'>the</span> <span m='2963220'>tortoise,</span> <span
  m='2965240'>and</span> <span m='2965390'>this</span> <span
  m='2965510'>is</span> <span m='2965600'>the</span> <span m='2965730'>hare,
  it's</span> <span m='2966160'>always</span> <span m='2966500'>ahead.</span>
  <span m='2967740'>But</span> <span m='2967920'>eventually,</span> <span
  m='2968700'>if</span> <span m='2968810'>you</span> <span m='2968900'>go</span>
  <span m='2969250'>infinitely</span> <span m='2969770'>far,</span> <span
  m='2970100'>it</span> <span m='2970220'>catches</span> <span
  m='2970650'>up.</span> <span m='2971910'>So</span> <span
  m='2972080'>this</span> <span m='2974020'>turns</span> <span
  m='2974260'>out</span> <span m='2974420'>to</span> <span m='2974520'>be</span>
  <span m='2974700'>exactly</span> <span m='2975190'>equal</span> <span
  m='2975570'>to</span> <span m='2975720'>e^x</span> <span m='2976900'>in</span>
  <span m='2977050'>the</span> <span m='2977130'>limit.</span> <span
  m='2978190'>And</span> <span m='2978410'>we'll</span> <span
  m='2978550'>talk</span> <span m='2978750'>about</span> <span
  m='2978990'>that</span> <span m='2979230'>maybe</span> <span
  m='2979500'>at</span> <span m='2979580'>the</span> <span
  m='2979740'>end</span> <span m='2979920'>of</span> <span m='2979990'>the
  course.</span> </p>
embedded_media:
  - uid: 1e8cec51253cad834589811657eaf37d
    parent_uid: b7b79337348fa21bbf46f1c7bd6565d4
    id: lec14.jpg
    title: Lecture 14
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-14-mean-value-theorem/lec14.jpg
  - uid: 57d37b06d4bd5437cf8a323634850e40
    parent_uid: b7b79337348fa21bbf46f1c7bd6565d4
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 4Q37iOyBq44
  - uid: efb0265d0d649d4804c87f3de11e76b1
    parent_uid: b7b79337348fa21bbf46f1c7bd6565d4
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/4Q37iOyBq44/default.jpg'
  - uid: 7ea91dc27402f94b04e051198d780bb9
    parent_uid: b7b79337348fa21bbf46f1c7bd6565d4
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id354869053'
  - uid: f2ad13df8ca9d86a39aa7f37054f5260
    parent_uid: b7b79337348fa21bbf46f1c7bd6565d4
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18.01JF07/ocw-18.01-f07-lec14_300k.mp4'
  - uid: a20065aa98d75152efed067d7fcbf006
    parent_uid: b7b79337348fa21bbf46f1c7bd6565d4
    id: Video-VideoLecturesnet-Stream
    title: Video-VideoLectures.net-Stream
    type: Video
    media_location: 'http://videolectures.net/mit1801f06_single_variable_calculus/'
  - uid: 3e180a40e1ddd150866743d363bbaeac
    parent_uid: b7b79337348fa21bbf46f1c7bd6565d4
    id: Thumbnail-OCW-JPG
    title: Thumbnail-OCW-JPG
    type: Thumbnail
  - uid: 50843f70c8a9b1c6439d591443251922
    parent_uid: b7b79337348fa21bbf46f1c7bd6565d4
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 4Q37iOyBq44
  - uid: 555532dc0b4d850727684f49588b47f2
    parent_uid: b7b79337348fa21bbf46f1c7bd6565d4
    id: 4Q37iOyBq44.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-14-mean-value-theorem/4Q37iOyBq44.srt
  - uid: bf87c7c661858ffe760407f8ac961ad8
    parent_uid: b7b79337348fa21bbf46f1c7bd6565d4
    id: 4Q37iOyBq44.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-14-mean-value-theorem/4Q37iOyBq44.pdf
  - uid: 1db486109cdd31ddd4a03a15476f2da1
    parent_uid: b7b79337348fa21bbf46f1c7bd6565d4
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 09382a1bb70e56dc9f5d0743f5725d97
    parent_uid: b7b79337348fa21bbf46f1c7bd6565d4
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
