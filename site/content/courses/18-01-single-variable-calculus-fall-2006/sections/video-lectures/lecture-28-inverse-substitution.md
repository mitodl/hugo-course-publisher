---
title: 'Lecture 28: Inverse Substitution'
uid: 9afe5a2aecd5e657d5baa178e0449d9c
parent_uid: eb1d53c3c4c145f03327e4698375e766
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-28-inverse-substitution
short_url: lecture-28-inverse-substitution
inline_embed_id: '72138119lecture28:inversesubstitution61233873'
about_this_resource_text: >-
  <div class="vidpad"><p><strong>Topics covered:</strong> Integration by inverse
  substitution; completing the square</p> <p><strong>Instructor:</strong> Prof.
  David Jerison</p></div>
related_resources_text: >-
  <div class="vidpad"><p>Lecture Notes (<a
  href="./resolveuid/27cbacec1a8547e176f6d2367e244153">PDF</a>)</p></div>
transcript: >-
  <p><span m='0'>The</span> <span m='30'>following</span> <span
  m='510'>content</span> <span m='1010'>is</span> <span m='1130'>provided</span>
  <span m='1240'>under a</span> <span m='1900'>Creative</span> <span
  m='2330'>Commons license.</span> <span m='3610'>Your</span> <span
  m='3810'>support</span> <span m='4330'>will</span> <span m='4460'>help</span>
  <span m='4730'>MIT</span> <span m='5190'>OpenCourseWare</span> <span
  m='5750'>continue</span> <span m='6740'>to offer</span> <span
  m='6900'>high</span> <span m='7130'>quality</span> <span
  m='7630'>educational</span> <span m='8250'>resources</span> <span
  m='8840'>for</span> <span m='8980'>free. To</span> <span m='9930'>make</span>
  <span m='10240'>a</span> <span m='10310'>donation</span> <span
  m='11070'>or</span> <span m='11240'>to</span> <span m='11410'>view</span>
  <span m='11550'>additional</span> <span m='11980'>materials</span> <span
  m='12540'>from hundreds</span> <span m='13040'>of</span> <span
  m='13180'>MIT</span> <span m='13300'>courses,</span> <span
  m='14150'>visit</span> <span m='15350'>MIT</span> <span
  m='15610'>OpenCourseWare</span> <span m='16150'>at</span> <span
  m='16770'>ocw.mit.edu.</span> </p><p><span m='21780'>PROFESSOR: So</span>
  <span m='23790'>we're</span> <span m='23950'>going</span> <span
  m='24110'>to</span> <span m='24170'>continue</span> <span m='24560'>to</span>
  <span m='24680'>talk</span> <span m='24900'>about</span> <span
  m='25750'>trig</span> <span m='26520'>integrals</span> <span
  m='27180'>and</span> <span m='27360'>trig</span> <span
  m='27570'>substitutions.</span> <span m='29420'>This</span> <span
  m='29580'>is</span> <span m='29840'>maybe</span> <span m='30100'>the</span>
  <span m='30210'>most</span> <span m='30500'>technical</span> <span
  m='31070'>part</span> <span m='31520'>of</span> <span m='31750'>this</span>
  <span m='31960'>course,</span> <span m='32260'>which</span> <span
  m='32460'>maybe</span> <span m='32770'>is</span> <span m='32970'>why</span>
  <span m='33200'>professor</span> <span m='33660'>Jerison</span> <span
  m='34090'>decided</span> <span m='34560'>to</span> <span m='34660'>just</span>
  <span m='34870'>take</span> <span m='35090'>a</span> <span
  m='35170'>leave,</span> <span m='35450'>go</span> <span m='35660'>AWOL</span>
  <span m='36220'>just</span> <span m='36500'>now and</span> <span
  m='36740'>let</span> <span m='36950'>me</span> <span m='37050'>take</span>
  <span m='37310'>over</span> <span m='37520'>for</span> <span
  m='37750'>him.</span> <span m='38610'>But</span> <span m='38760'>I'll</span>
  <span m='38870'>do</span> <span m='38960'>my</span> <span
  m='39090'>best</span> <span m='39890'>to</span> <span m='40420'>help
  you</span> <span m='40890'>learn</span> <span m='41150'>this</span> <span
  m='41330'>technique</span> <span m='41960'>and</span> <span
  m='43320'>it'll</span> <span m='43500'>be</span> <span m='43590'>useful</span>
  <span m='43880'>for</span> <span m='44020'>you.</span> <span
  m='45680'>So</span> <span m='45870'>we've</span> <span m='46010'>talked</span>
  <span m='46290'>about</span> <span m='47540'>trig</span> <span
  m='47850'>integrals</span> <span m='48400'>involving</span> <span
  m='48880'>sines</span> <span m='49380'>and</span> <span
  m='49520'>cosines</span> <span m='50350'>yesterday.</span> <span
  m='51460'>There's</span> <span m='51730'>another</span> <span
  m='51980'>whole</span> <span m='52260'>world</span> <span m='52660'>out</span>
  <span m='52850'>there</span> <span m='53060'>that</span> <span
  m='53220'>involves</span> <span m='53690'>these</span> <span
  m='53930'>other</span> <span m='54250'>trig</span> <span
  m='56530'>polynomials--</span> <span m='57300'>trig</span> <span
  m='57880'>functions,</span> <span m='58850'>secant</span> <span
  m='59110'>and</span> <span m='59540'>tangent.</span> <span
  m='60520'>Let</span> <span m='60670'>me</span> <span m='60740'>just</span>
  <span m='60990'>make</span> <span m='61160'>a</span> <span
  m='61220'>little</span> <span m='61430'>table to</span> <span
  m='61830'>remind</span> <span m='62310'>you</span> <span m='62410'>what</span>
  <span m='62630'>they</span> <span m='62820'>are.</span> <span
  m='63470'>Because</span> <span m='63650'>I</span> <span m='63770'>have</span>
  <span m='63950'>trouble</span> <span m='64220'>remembering</span> <span
  m='64710'>myself,</span> <span m='65210'>so</span> <span m='65390'>I</span>
  <span m='65500'>enjoy</span> <span m='65930'>the</span> <span
  m='66280'>opportunity</span> <span m='67040'>to</span> <span
  m='67190'>go</span> <span m='67370'>back</span> <span m='67630'>to</span>
  <span m='67700'>remind</span> <span m='68070'>myself</span> <span
  m='68480'>of</span> <span m='68600'>this</span> <span m='68720'>stuff.</span>
  </p><p><span m='69480'>Let's</span> <span m='69680'>see.</span> <span
  m='69820'>The</span> <span m='70070'>secant</span> <span m='71480'>is</span>
  <span m='71900'>one</span> <span m='72150'>over</span> <span
  m='72550'>one</span> <span m='72740'>of</span> <span m='72820'>those</span>
  <span m='73070'>things,</span> <span m='73430'>which</span> <span
  m='73600'>one</span> <span m='73790'>is</span> <span m='73940'>it?</span>
  <span m='75860'>It's</span> <span m='76050'>weird,</span> <span
  m='76370'>it's</span> <span m='76520'>1</span> <span m='76680'>over</span>
  <span m='76870'>the</span> <span m='76990'>cosine.</span> <span
  m='78420'>And</span> <span m='78750'>the</span> <span
  m='79460'>cosecant</span> <span m='79780'>is</span> <span m='81340'>1</span>
  <span m='81520'>over</span> <span m='81740'>the</span> <span
  m='81860'>sin.</span> <span m='84710'>Of</span> <span m='84860'>course</span>
  <span m='85120'>the</span> <span m='85230'>tangent,</span> <span
  m='86230'>we</span> <span m='86420'>know.</span> <span m='86800'>It's</span>
  <span m='87240'>the</span> <span m='87780'>sine</span> <span
  m='89040'>over</span> <span m='89240'>the</span> <span m='89350'>cosine</span>
  <span m='90960'>and</span> <span m='91060'>the</span> <span
  m='91150'>cotangent</span> <span m='91840'>is</span> <span
  m='91980'>the</span> <span m='92090'>other</span> <span m='92270'>way</span>
  <span m='92430'>around.</span> <span m='96000'>So</span> <span
  m='96140'>when</span> <span m='96260'>you</span> <span m='96350'>put</span>
  <span m='96510'>a</span> <span m='96600'>"co"</span> <span m='97080'>in</span>
  <span m='97230'>front</span> <span m='97490'>of</span> <span
  m='97600'>it,</span> <span m='97700'>it</span> <span
  m='100110'>exchanges</span> <span m='100900'>sine</span> <span
  m='101350'>and</span> <span m='101760'>cosine.</span> <span
  m='103590'>Well,</span> <span m='103900'>I</span> <span m='103990'>have</span>
  <span m='104130'>a</span> <span m='104200'>few</span> <span
  m='104460'>identities</span> <span m='105110'>involving</span> <span
  m='105670'>tangent</span> <span m='106160'>and secant</span> <span
  m='106840'>up</span> <span m='107020'>there,</span> <span m='107890'>in
  that</span> <span m='108090'>little</span> <span m='108340'>prepared</span>
  <span m='108820'>blackboard</span> <span m='109340'>up</span> <span
  m='109480'>above.</span> <span m='110270'>Maybe</span> <span
  m='110510'>I'll</span> <span m='110620'>just</span> <span m='110870'>go</span>
  <span m='111000'>through</span> <span m='111380'>and</span> <span
  m='112580'>check</span> <span m='112840'>that</span> <span
  m='113060'>out</span> <span m='113680'>to</span> <span m='113860'>make</span>
  <span m='114060'>sure</span> <span m='114290'>that</span> <span
  m='114400'>we're all</span> <span m='114630'>on</span> <span
  m='114860'>the</span> <span m='114950'>same</span> <span
  m='115210'>page</span> <span m='115540'>with</span> <span
  m='115720'>them.</span> </p><p><span m='117780'>So</span> <span
  m='117960'>I'm</span> <span m='118100'>going</span> <span m='118240'>to</span>
  <span m='118300'>claim</span> <span m='118620'>that</span> <span
  m='118770'>there's</span> <span m='119020'>this</span> <span
  m='119200'>trig</span> <span m='119480'>identity</span> <span
  m='120020'>at</span> <span m='120120'>the</span> <span m='120230'>top.</span>
  <span m='120560'>Secant</span> <span m='121050'>squared</span> <span
  m='123460'>is</span> <span m='123970'>1</span> <span m='124310'>plus</span>
  <span m='124630'>the</span> <span m='124720'>tangent.</span> <span
  m='127310'>So</span> <span m='127430'>let's</span> <span
  m='127680'>just</span> <span m='128160'>check</span> <span
  m='128490'>that</span> <span m='128730'>out.</span> <span m='130590'>So</span>
  <span m='130800'>the</span> <span m='130910'>secant</span> <span
  m='131090'>is</span> <span m='131590'>1</span> <span m='131760'>over</span>
  <span m='131940'>the</span> <span m='132050'>cosine,</span> <span
  m='132670'>so</span> <span m='132800'>secant</span> <span
  m='133210'>squared</span> <span m='133490'>is</span> <span m='133630'>1
  over</span> <span m='133960'>cosine</span> <span m='134430'>squared.</span>
  <span m='134890'>And</span> <span m='135000'>then</span> <span
  m='135610'>whenever</span> <span m='135930'>you</span> <span
  m='136030'>see</span> <span m='136210'>a</span> <span m='136290'>1</span>
  <span m='136670'>in</span> <span m='136770'>trigonometry,</span> <span
  m='137100'>you'll</span> <span m='137560'>always</span> <span
  m='137960'>have</span> <span m='138180'>the</span> <span
  m='138300'>option</span> <span m='138730'>of</span> <span
  m='138840'>writing</span> <span m='139210'>as</span> <span
  m='141070'>cos^2</span> <span m='141900'>+</span> <span
  m='142640'>sin^2.</span> <span m='147890'>And</span> <span
  m='148060'>if</span> <span m='148180'>I</span> <span m='148300'>do</span>
  <span m='148500'>that,</span> <span m='148760'>then</span> <span
  m='148910'>I</span> <span m='149000'>can</span> <span m='150290'>divide</span>
  <span m='150790'>the</span> <span m='151410'>cos^2</span> <span
  m='151760'>into</span> <span m='152000'>that</span> <span
  m='152210'>first</span> <span m='153680'>term.</span> <span
  m='154300'>And</span> <span m='154470'>I</span> <span m='154540'>get</span>
  <span m='154810'>1</span> <span m='155170'>+</span> <span m='155760'>sin^2 /
  cos^2.</span> <span m='156380'>/</span> <span m='157070'>^2.</span> <span
  m='157940'>Which</span> <span m='158330'>is</span> <span m='159000'>the</span>
  <span m='159100'>tangent</span> <span m='159690'>squared.</span> <span
  m='162430'>So</span> <span m='162590'>there</span> <span m='162730'>you</span>
  <span m='162820'>go.</span> <span m='164180'>That</span> <span
  m='164280'>checks</span> <span m='164680'>the</span> <span
  m='164760'>first</span> <span m='165060'>one.</span> <span
  m='167830'>That's</span> <span m='168080'>the</span> <span
  m='168170'>main</span> <span m='168410'>trig</span> <span
  m='168670'>identity</span> <span m='169190'>that's</span> <span
  m='169320'>going to</span> <span m='169550'>be</span> <span
  m='169680'>behind</span> <span m='170110'>what</span> <span
  m='170340'>I</span> <span m='170440'>talk</span> <span m='170710'>about</span>
  <span m='170960'>today.</span> <span m='171330'>That's</span> <span
  m='171570'>the</span> <span m='171670'>trigonometry</span> <span
  m='172350'>identity</span> <span m='172800'>part.</span> <span
  m='173460'>How</span> <span m='173600'>about</span> <span
  m='173880'>this</span> <span m='174110'>piece</span> <span
  m='174370'>of</span> <span m='175870'>calculus.</span> <span
  m='177040'>Can</span> <span m='177150'>we</span> <span
  m='177240'>calculate</span> <span m='177860'>what</span> <span
  m='178550'>the</span> <span m='178650'>derivative</span> <span
  m='179240'>of</span> <span m='180120'>tan x</span> <span m='181960'>is?</span>
  <span m='185490'>Actually,</span> <span m='185870'>I'm</span> <span
  m='185940'>going to</span> <span m='186120'>do</span> <span
  m='186240'>that</span> <span m='186420'>on</span> <span m='186530'>this</span>
  <span m='186680'>board.</span> </p><p><span m='192350'>So</span> <span
  m='194710'>tan x</span> <span m='195220'>=</span> <span m='195770'>sin</span>
  <span m='196040'>x</span> <span m='196420'>/</span> <span
  m='197050'>cos</span> <span m='197280'>x.</span> <span m='199110'>So</span>
  <span m='199340'>I</span> <span m='199450'>think</span> <span
  m='199690'>I</span> <span m='199790'>was</span> <span m='200010'>with</span>
  <span m='200210'>you</span> <span m='200410'>when</span> <span
  m='200620'>we</span> <span m='200940'>learned</span> <span
  m='201250'>about</span> <span m='201620'>the</span> <span
  m='202410'>quotient</span> <span m='202890'>rule.</span> <span
  m='203500'>Computing</span> <span m='204240'>the</span> <span
  m='204410'>derivative of a</span> <span m='205050'>quotient.</span> <span
  m='206030'>And</span> <span m='207110'>the</span> <span m='207200'>rule</span>
  <span m='207520'>is,</span> <span m='208120'>you</span> <span
  m='208220'>take</span> <span m='208460'>the numerator</span> <span
  m='210340'>and</span> <span m='210550'>you--</span> <span
  m='211370'>sorry,</span> <span m='211650'>you</span> <span
  m='211780'>take</span> <span m='212030'>the</span> <span
  m='212090'>derivative</span> <span m='212580'>of</span> <span
  m='212690'>the</span> <span m='212770'>numerator,</span> <span
  m='214330'>which</span> <span m='214570'>is</span> <span
  m='214720'>cosine.</span> <span m='216510'>And</span> <span
  m='216660'>you</span> <span m='216740'>multiply</span> <span m='217220'>it
  by</span> <span m='217430'>the</span> <span m='217550'>denominator,</span>
  <span m='218570'>so</span> <span m='218810'>that gives</span> <span
  m='218960'>you</span> <span m='219040'>cos^2.</span> <span
  m='221590'>And</span> <span m='221770'>then</span> <span m='221880'>you</span>
  <span m='221980'>take</span> <span m='222240'>the</span> <span
  m='222320'>numerator,</span> <span m='223470'>take</span> <span
  m='223690'>minus</span> <span m='224330'>the numerator,</span> <span
  m='226480'>and</span> <span m='226700'>multiply</span> <span
  m='227150'>that</span> <span m='227420'>by</span> <span m='227540'>the</span>
  <span m='227680'>derivative</span> <span m='227990'>of</span> <span
  m='228300'>the</span> <span m='228370'>denominator,</span> <span
  m='229400'>which</span> <span m='229620'>is</span> <span m='231470'>-sin
  x.</span> <span m='233240'>And</span> <span m='233390'>you</span> <span
  m='233470'>put</span> <span m='233620'>all</span> <span m='233790'>that</span>
  <span m='234000'>over</span> <span m='234220'>the</span> <span
  m='234320'>square</span> <span m='234740'>of</span> <span
  m='234860'>the</span> <span m='234970'>denominator.</span> <span
  m='237870'>And</span> <span m='238040'>now</span> <span m='238200'>I</span>
  <span m='238300'>look</span> <span m='238500'>at</span> <span
  m='238600'>that</span> <span m='238880'>and</span> <span
  m='239820'>before</span> <span m='240300'>my</span> <span
  m='240540'>eyes</span> <span m='240980'>I</span> <span m='241130'>see</span>
  <span m='241450'>the</span> <span m='241650'>same</span> <span
  m='242490'>trig</span> <span m='242770'>identity,</span> <span
  m='243850'>cos^2</span> <span m='244200'>+</span> <span
  m='244430'>sin^2</span> <span m='244710'>= 1,</span> <span
  m='245940'>appearing</span> <span m='246690'>there.</span> <span
  m='247420'>This</span> <span m='247610'>is</span> <span m='247730'>1</span>
  <span m='247950'>/</span> <span m='248300'>cos^2(x)</span> <span
  m='250710'>which</span> <span m='251050'>is</span> <span
  m='251600'>secant</span> <span m='252000'>squared.</span> <span
  m='253850'>And,</span> <span m='254700'>good.</span> <span
  m='255060'>So</span> <span m='255250'>that's</span> <span
  m='255490'>what</span> <span m='255630'>the</span> <span
  m='255710'>claim</span> <span m='256000'>was.</span> <span
  m='256230'>The</span> <span m='256320'>derivative</span> <span
  m='256630'>of</span> <span m='256880'>the</span> <span
  m='256990'>tangent</span> <span m='257520'>is</span> <span
  m='257780'>the</span> <span m='258010'>secant</span> <span
  m='258250'>squared.</span> </p><p><span m='260420'>That</span> <span
  m='260610'>immediately</span> <span m='261130'>gives</span> <span
  m='261400'>you</span> <span m='261530'>an</span> <span
  m='261630'>integral.</span> <span m='262260'>Namely,</span> <span
  m='262650'>the</span> <span m='262800'>integral</span> <span
  m='263280'>of</span> <span m='263370'>secant</span> <span
  m='263800'>squared</span> <span m='264340'>is</span> <span m='264570'>the
  tangent.</span> <span m='265240'>That's</span> <span m='265640'>the</span>
  <span m='265810'>fundamental</span> <span m='266270'>theorem of</span> <span
  m='266680'>calculus.</span> <span m='268510'>So</span> <span
  m='268710'>we</span> <span m='268860'>verified</span> <span
  m='269360'>the</span> <span m='269440'>first</span> <span
  m='269810'>integral</span> <span m='270280'>there.</span> <span
  m='272360'>Well,</span> <span m='272660'>let's</span> <span
  m='272940'>just</span> <span m='273200'>do</span> <span m='273310'>the</span>
  <span m='273420'>second</span> <span m='273790'>one</span> <span
  m='273960'>as</span> <span m='274110'>well.</span> <span m='274490'>So</span>
  <span m='274690'>if</span> <span m='274810'>I</span> <span
  m='274880'>want</span> <span m='275070'>to</span> <span
  m='275130'>differentiate</span> <span m='275760'>the</span> <span
  m='275860'>secant,</span> <span m='280280'>derivative</span> <span
  m='280500'>of</span> <span m='280600'>the</span> <span
  m='280800'>secant.</span> <span m='281360'>So</span> <span
  m='281560'>that's</span> <span m='281890'>d/dx</span> <span
  m='282220'>of</span> <span m='283350'>1</span> <span m='283880'>over</span>
  <span m='284160'>the</span> <span m='284270'>cosine.</span> <span
  m='286500'>And</span> <span m='286780'>again,</span> <span m='287040'>I</span>
  <span m='287080'>have</span> <span m='287260'>a</span> <span
  m='287320'>quotient.</span> <span m='287940'>This</span> <span
  m='288120'>one's</span> <span m='288300'>a</span> <span
  m='288350'>little</span> <span m='288590'>easier</span> <span
  m='288990'>because</span> <span m='289250'>the</span> <span
  m='289360'>numerator's</span> <span m='289900'>so</span> <span
  m='290080'>simple.</span> <span m='291010'>So</span> <span m='291190'>I</span>
  <span m='291270'>take</span> <span m='291520'>the</span> <span
  m='291630'>derivative</span> <span m='291990'>of</span> <span
  m='292120'>the</span> <span m='292230'>numerator,</span> <span
  m='293100'>which</span> <span m='293280'>is</span> <span m='293380'>0.</span>
  <span m='294310'>And</span> <span m='294560'>then</span> <span
  m='295100'>I</span> <span m='295240'>take</span> <span m='295470'>the</span>
  <span m='295560'>numerator,</span> <span m='296100'>I</span> <span
  m='296310'>take</span> <span m='296580'>minus</span> <span
  m='297150'>the</span> <span m='297240'>numerator</span> <span
  m='298140'>times</span> <span m='298470'>the</span> <span
  m='298570'>derivative</span> <span m='299280'>of</span> <span
  m='299660'>the</span> <span m='299750'>denominator.</span> <span
  m='300830'>Which</span> <span m='300970'>is</span> <span
  m='302450'>-sin</span> <span m='302720'>x,</span> <span m='303870'>and</span>
  <span m='304020'>put</span> <span m='304210'>all</span> <span
  m='304370'>that</span> <span m='305610'>over</span> <span
  m='305840'>the</span> <span m='305970'>square</span> <span
  m='307520'>of</span> <span m='307860'>the</span> <span m='307970'>same</span>
  <span m='308260'>denominator.</span> <span m='309900'>So</span> <span
  m='310080'>one</span> <span m='310280'>minus</span> <span
  m='310570'>sign</span> <span m='311390'>came</span> <span
  m='311690'>from</span> <span m='311960'>the</span> <span
  m='312080'>quotient</span> <span m='312530'>rule,</span> <span
  m='313020'>and</span> <span m='313200'>the</span> <span
  m='313290'>other</span> <span m='313440'>one</span> <span
  m='313600'>came</span> <span m='313910'>because</span> <span
  m='314100'>that's</span> <span m='314350'>the</span> <span
  m='314440'>derivative</span> <span m='314690'>of</span> <span
  m='314790'>the</span> <span m='314980'>cosine.</span> <span
  m='316580'>But</span> <span m='316780'>they</span> <span
  m='316890'>cancel,</span> <span m='317770'>and</span> <span
  m='318140'>so</span> <span m='318330'>I</span> <span m='318440'>get</span>
  <span m='318730'>sin</span> <span m='319160'>/</span> <span
  m='319380'>cos^2,</span> <span m='321010'>which</span> <span
  m='321360'>is</span> <span m='321780'>sin</span> <span m='321910'>/</span>
  <span m='322110'>cos times</span> <span m='322940'>1 /</span> <span
  m='323410'>cos</span> <span m='324380'>and</span> <span m='324600'>so</span>
  <span m='324730'>that's</span> <span m='325050'>the</span> <span
  m='325150'>secant,</span> <span m='325640'>that's</span> <span
  m='325810'>1</span> <span m='325970'>/</span> <span m='326120'>cos,</span>
  <span m='326220'>times</span> <span m='327690'>tan</span> <span
  m='329900'>x.</span> </p><p><span m='332160'>So,</span> <span
  m='332970'>not</span> <span m='333170'>hard.</span> <span
  m='334190'>That</span> <span m='334450'>verifies</span> <span
  m='335090'>that</span> <span m='335240'>the</span> <span
  m='335580'>derivative</span> <span m='335870'>of</span> <span
  m='336100'>secant</span> <span m='336300'>is</span> <span
  m='336800'>secant</span> <span m='337030'>tangent.</span> <span
  m='337990'>And</span> <span m='338250'>it</span> <span m='338410'>tells</span>
  <span m='338930'>you</span> <span m='340300'>that</span> <span
  m='340460'>the</span> <span m='340580'>integral</span> <span
  m='341030'>of</span> <span m='341110'>that</span> <span
  m='341290'>weird</span> <span m='341560'>thing</span> <span
  m='341800'>in</span> <span m='341910'>case</span> <span m='342120'>you</span>
  <span m='342230'>ever</span> <span m='342410'>want to</span> <span
  m='342650'>know,</span> <span m='343320'>the</span> <span
  m='343620'>integral</span> <span m='343830'>of</span> <span
  m='343950'>the</span> <span m='344050'>secant</span> <span
  m='344470'>tangent</span> <span m='345240'>is</span> <span
  m='345440'>the</span> <span m='345680'>secant.</span> <span
  m='347910'>Well,</span> <span m='348220'>there</span> <span m='348330'>are
  a</span> <span m='348390'>couple</span> <span m='348700'>more</span> <span
  m='349910'>integrals</span> <span m='350470'>that</span> <span
  m='350600'>I</span> <span m='350660'>want</span> <span m='350870'>to</span>
  <span m='350930'>do</span> <span m='351140'>for</span> <span
  m='351400'>you.</span> <span m='354000'>Where</span> <span m='354170'>I</span>
  <span m='354230'>can't</span> <span m='354540'>sort</span> <span
  m='354780'>of</span> <span m='354950'>work</span> <span
  m='355300'>backwards</span> <span m='355780'>like</span> <span
  m='356000'>that.</span> <span m='357050'>Let's</span> <span
  m='357430'>calculate the</span> <span m='360430'>integral</span> <span
  m='361420'>of</span> <span m='361610'>the</span> <span
  m='361710'>tangent.</span> <span m='367060'>Just</span> <span
  m='367330'>do</span> <span m='367440'>this</span> <span
  m='367560'>straight</span> <span m='367890'>out.</span> <span
  m='369380'>So</span> <span m='369570'>the</span> <span
  m='369670'>tangent</span> <span m='370090'>is</span> <span
  m='370460'>the</span> <span m='370570'>sine</span> <span
  m='370920'>divided</span> <span m='371320'>by</span> <span
  m='371440'>the</span> <span m='371550'>cosine.</span> <span
  m='382610'>And</span> <span m='385100'>now</span> <span
  m='385380'>there's</span> <span m='385620'>a</span> <span
  m='385700'>habit</span> <span m='386040'>of</span> <span
  m='386120'>mind,</span> <span m='386640'>that</span> <span m='386780'>I</span>
  <span m='386840'>hope</span> <span m='387100'>you</span> <span
  m='387210'>get</span> <span m='387390'>into.</span> <span
  m='388520'>When</span> <span m='388760'>you</span> <span m='388880'>see</span>
  <span m='389080'>the</span> <span m='389170'>cosine</span> <span
  m='389880'>and</span> <span m='390000'>you're</span> <span
  m='391760'>calculating</span> <span m='392720'>an</span> <span
  m='392860'>integral</span> <span m='393310'>like</span> <span
  m='393550'>this,</span> <span m='394350'>it's</span> <span
  m='394540'>useful</span> <span m='394950'>to</span> <span
  m='395520'>remember</span> <span m='395950'>what</span> <span
  m='396120'>the</span> <span m='396210'>derivative</span> <span
  m='396570'>of</span> <span m='396660'>the</span> <span
  m='396880'>cosine</span> <span m='397410'>is.</span> <span
  m='397700'>Because</span> <span m='398060'>maybe</span> <span
  m='398420'>it</span> <span m='398530'>shows</span> <span m='398940'>up</span>
  <span m='399210'>somewhere</span> <span m='399620'>else</span> <span
  m='399940'>in</span> <span m='400040'>the</span> <span
  m='400140'>integral.</span> <span m='401420'>And</span> <span
  m='401580'>that</span> <span m='401720'>happens</span> <span
  m='402150'>here.</span> <span m='403540'>So</span> <span
  m='403800'>that</span> <span m='404020'>suggests</span> <span
  m='404520'>we</span> <span m='404650'>make</span> <span m='404860'>a</span>
  <span m='404940'>substitution.</span> <span m='406400'>u</span> <span
  m='407000'>=</span> <span m='408260'>cos</span> <span m='409740'>x.</span>
  <span m='410300'>Which</span> <span m='410510'>means</span> <span
  m='411060'>du</span> <span m='411980'>=</span> <span m='412500'>-sin x
  dx.</span> <span m='415620'>That's</span> <span m='415920'>the</span> <span
  m='416010'>numerator,</span> <span m='416720'>except</span> <span
  m='417040'>for</span> <span m='417140'>the</span> <span
  m='417240'>minus</span> <span m='417540'>sign.</span> </p><p><span
  m='419020'>And</span> <span m='421090'>so</span> <span m='422110'>I</span>
  <span m='422250'>can</span> <span m='422440'>rewrite</span> <span
  m='422980'>this</span> <span m='423890'>as,</span> <span
  m='424830'>under</span> <span m='425080'>the</span> <span
  m='425210'>substitution,</span> <span m='428570'>I</span> <span
  m='428720'>can</span> <span m='428900'>rewrite</span> <span
  m='429330'>this</span> <span m='429780'>as</span> <span m='431310'>-du,</span>
  <span m='432300'>that's</span> <span m='432560'>the</span> <span
  m='432630'>numerator,</span> <span m='433120'>sin</span> <span
  m='433440'>x</span> <span m='433700'>dx</span> <span m='434160'>is</span>
  <span m='434740'>-du,</span> <span m='435800'>divided</span> <span
  m='436230'>by</span> <span m='436400'>u.</span> <span m='439600'>Well,</span>
  <span m='439960'>I</span> <span m='440050'>know</span> <span
  m='440200'>how</span> <span m='440300'>to</span> <span m='440420'>do</span>
  <span m='440540'>that</span> <span m='440780'>integral</span> <span
  m='441120'>too.</span> <span m='442150'>That</span> <span
  m='442450'>gives</span> <span m='442660'>me</span> <span m='442780'>the</span>
  <span m='442880'>natural</span> <span m='443360'>log,</span> <span
  m='443750'>doesn't</span> <span m='443950'>it.</span> <span
  m='444210'>So</span> <span m='444400'>this</span> <span m='444620'>is</span>
  <span m='446190'>-ln(u)</span> <span m='446260'>plus</span> <span
  m='447740'>a</span> <span m='447880'>constant.</span> <span
  m='451150'>I'm</span> <span m='451290'>not</span> <span
  m='451450'>quite</span> <span m='451720'>done.</span> <span
  m='452360'>I</span> <span m='452440'>have</span> <span m='452610'>to</span>
  <span m='452740'>back-substitute</span> <span m='454040'>and</span> <span
  m='454290'>replace</span> <span m='454750'>this</span> <span
  m='454990'>new</span> <span m='455180'>variable</span> <span
  m='455680'>that</span> <span m='455830'>I've</span> <span
  m='456080'>made</span> <span m='456310'>up,</span> <span
  m='456610'>called</span> <span m='456930'>u,</span> <span
  m='457680'>with</span> <span m='457960'>what</span> <span m='458120'>it</span>
  <span m='458220'>is.</span> <span m='459080'>And what</span> <span
  m='459330'>you</span> <span m='459460'>get</span> <span m='460190'>is</span>
  <span m='464420'>-ln(cos x).</span> <span m='466760'>So</span> <span
  m='466970'>the</span> <span m='467120'>integral</span> <span
  m='467190'>of</span> <span m='467390'>the</span> <span
  m='467540'>tangent</span> <span m='467950'>is</span> <span
  m='468070'>minus</span> <span m='468820'>log</span> <span
  m='469330'>cosine.</span> <span m='470410'>Now,</span> <span
  m='473910'>you</span> <span m='474030'>find</span> <span
  m='474420'>these</span> <span m='474630'>tables</span> <span
  m='475040'>of</span> <span m='475130'>integrals</span> <span
  m='475590'>in</span> <span m='475690'>the</span> <span m='475790'>back</span>
  <span m='476040'>of</span> <span m='476130'>the</span> <span
  m='476230'>book.</span> <span m='476910'>Things</span> <span
  m='477130'>like</span> <span m='477320'>that.</span> <span
  m='478320'>I'm</span> <span m='478530'>not</span> <span m='478680'>sure</span>
  <span m='478860'>how</span> <span m='479040'>much</span> <span
  m='479300'>memorization</span> <span m='480370'>Professor</span> <span
  m='480810'>Jerison is</span> <span m='481310'>going to</span> <span
  m='481490'>ask</span> <span m='481810'>of</span> <span m='481920'>you,</span>
  <span m='482520'>but</span> <span m='484050'>there</span> <span
  m='484210'>is</span> <span m='484380'>a</span> <span m='484460'>certain</span>
  <span m='484750'>amount</span> <span m='485030'>of</span> <span
  m='485100'>memorization</span> <span m='485770'>that</span> <span
  m='485870'>goes</span> <span m='486080'>on</span> <span m='486310'>in</span>
  <span m='486430'>calculus.</span> <span m='487050'>And this</span> <span
  m='487260'>is</span> <span m='487350'>one</span> <span m='487510'>of</span>
  <span m='487610'>the</span> <span m='487730'>kinds</span> <span
  m='488050'>of</span> <span m='488150'>things</span> <span
  m='488520'>that</span> <span m='488750'>you</span> <span
  m='488870'>probably</span> <span m='489350'>want to</span> <span
  m='489620'>know.</span> <span m='492380'>Let</span> <span m='492490'>me</span>
  <span m='492590'>do</span> <span m='492700'>one</span> <span
  m='492910'>more</span> <span m='493880'>integral.</span> </p><p><span
  m='495450'>I</span> <span m='495550'>think</span> <span m='495760'>I'm</span>
  <span m='495880'>making</span> <span m='496190'>my</span> <span
  m='496320'>way</span> <span m='496580'>through</span> <span
  m='496900'>a</span> <span m='497000'>prepared</span> <span
  m='497520'>board</span> <span m='497860'>here,</span> <span
  m='498100'>let's</span> <span m='498340'>see.</span> <span
  m='500350'>Good.</span> <span m='503060'>So the</span> <span
  m='503350'>integral</span> <span m='503530'>of the</span> <span
  m='503680'>tangent</span> <span m='504120'>is</span> <span
  m='504250'>minus</span> <span m='505010'>log</span> <span
  m='505280'>cosine.</span> <span m='508940'>I'd</span> <span
  m='509120'>also</span> <span m='509380'>like</span> <span m='509590'>to</span>
  <span m='509690'>know</span> <span m='509920'>what</span> <span
  m='510170'>the</span> <span m='510300'>integral</span> <span
  m='511620'>of</span> <span m='511820'>the</span> <span
  m='511980'>secant</span> <span m='512160'>of</span> <span m='512940'>x</span>
  <span m='514510'>is.</span> <span m='516090'>And</span> <span
  m='517030'>I</span> <span m='517140'>don't</span> <span m='517340'>know</span>
  <span m='517470'>a way</span> <span m='517900'>to</span> <span
  m='518400'>kind</span> <span m='518630'>of</span> <span m='518910'>go</span>
  <span m='519450'>straight</span> <span m='520020'>at</span> <span
  m='520380'>this,</span> <span m='521280'>but</span> <span
  m='521490'>let</span> <span m='521670'>me</span> <span m='521760'>show</span>
  <span m='522000'>you</span> <span m='522400'>a</span> <span
  m='522560'>way</span> <span m='522820'>to</span> <span m='523500'>think</span>
  <span m='523830'>your</span> <span m='523940'>way</span> <span
  m='524140'>through</span> <span m='524430'>to</span> <span
  m='524600'>it.</span> <span m='525580'>If</span> <span m='525750'>I</span>
  <span m='525890'>take</span> <span m='528490'>these</span> <span
  m='528850'>two</span> <span m='529610'>facts,</span> <span
  m='530260'>tangent</span> <span m='530690'>prime</span> <span
  m='531060'>is</span> <span m='532180'>what</span> <span m='532350'>it</span>
  <span m='532440'>is,</span> <span m='532720'>and</span> <span
  m='532860'>secant</span> <span m='533320'>prime</span> <span
  m='533670'>is</span> <span m='533810'>what</span> <span m='533980'>it</span>
  <span m='534090'>is,</span> <span m='534670'>and</span> <span m='534830'>add
  them</span> <span m='535330'>together,</span> <span m='536280'>I</span> <span
  m='536390'>get</span> <span m='536610'>this</span> <span
  m='536810'>fact.</span> <span m='537420'>That</span> <span
  m='537950'>the</span> <span m='538110'>derivative</span> <span
  m='539520'>of</span> <span m='540340'>the</span> <span m='540610'>sec</span>
  <span m='540880'>x</span> <span m='541530'>+</span> <span
  m='542410'>tan</span> <span m='542850'>x</span> <span m='544280'>is,</span>
  <span m='545400'>well,</span> <span m='546640'>it's</span> <span
  m='546910'>the</span> <span m='547020'>sum</span> <span m='547310'>of</span>
  <span m='547440'>these</span> <span m='547670'>two</span> <span
  m='547840'>things.</span> <span m='548350'>Secant</span> <span
  m='549440'>squared</span> <span m='549820'>plus</span> <span
  m='550060'>secant</span> <span m='550430'>tangent.</span> <span
  m='551060'>And</span> <span m='551250'>there's</span> <span
  m='551380'>a</span> <span m='551450'>secant</span> <span
  m='551890'>that</span> <span m='552000'>occurs</span> <span
  m='552320'>in</span> <span m='552430'>both</span> <span m='553250'>of</span>
  <span m='553380'>those</span> <span m='553620'>terms.</span> <span
  m='555180'>So</span> <span m='555470'>I'll</span> <span
  m='555560'>factor</span> <span m='556000'>it</span> <span
  m='556100'>out.</span> <span m='557140'>And</span> <span
  m='557300'>that</span> <span m='557440'>gives</span> <span
  m='557680'>me,</span> <span m='558990'>I'll</span> <span m='559140'>put</span>
  <span m='559590'>it</span> <span m='559710'>over</span> <span
  m='559880'>here.</span> <span m='561440'>There's</span> <span
  m='561720'>the</span> <span m='561820'>secant</span> <span m='562690'>of
  x</span> <span m='563040'>that occurs in</span> <span m='563150'>both</span>
  <span m='563390'>terms.</span> <span m='564590'>And</span> <span
  m='564790'>then</span> <span m='565000'>in</span> <span m='565180'>one</span>
  <span m='565390'>term,</span> <span m='565730'>there's</span> <span
  m='565890'>another</span> <span m='566180'>secant.</span> <span
  m='566390'>And</span> <span m='568030'>in</span> <span m='568170'>the</span>
  <span m='568280'>other</span> <span m='568470'>term,</span> <span
  m='568860'>there's</span> <span m='569000'>a tangent.</span> </p><p><span
  m='572740'>So</span> <span m='573360'>that's</span> <span
  m='573710'>interesting</span> <span m='574530'>somehow,</span> <span
  m='574960'>because</span> <span m='575360'>this</span> <span
  m='575510'>same</span> <span m='576090'>term</span> <span
  m='576520'>appears</span> <span m='576970'>on</span> <span
  m='577140'>both</span> <span m='577380'>sides</span> <span
  m='577770'>of</span> <span m='577860'>this</span> <span
  m='578070'>equation.</span> <span m='580200'>Let's</span> <span
  m='580430'>write</span> <span m='583730'>u,</span> <span m='584830'>for</span>
  <span m='584950'>that</span> <span m='587120'>sec x</span> <span
  m='587780'>+</span> <span m='588890'>tan x.</span> <span m='589160'>And so
  the</span> <span m='589280'>equation</span> <span m='589730'>that</span> <span
  m='589860'>I</span> <span m='589930'>get</span> <span m='590280'>is</span>
  <span m='590610'>u'</span> <span m='591750'>=</span> <span m='592280'>u</span>
  <span m='592610'>sec x.</span> <span m='600930'>I've</span> <span
  m='601080'>just</span> <span m='601330'>made</span> <span m='601550'>a</span>
  <span m='602780'>direct</span> <span m='603180'>substitution.</span> <span
  m='603860'>Just</span> <span m='604210'>decide</span> <span m='604760'>that
  I'm</span> <span m='604870'>going</span> <span m='605010'>to</span> <span
  m='605080'>write</span> <span m='605360'>u</span> <span m='605620'>for</span>
  <span m='605790'>that</span> <span m='606000'>single</span> <span
  m='606320'>thing</span> <span m='607240'>that</span> <span
  m='607360'>occurs</span> <span m='607730'>on</span> <span
  m='607880'>both</span> <span m='608100'>sides</span> <span
  m='608460'>of</span> <span m='608550'>the</span> <span
  m='608680'>equation.</span> <span m='609600'>So</span> <span
  m='609810'>u'</span> <span m='610780'>is</span> <span m='610940'>on</span>
  <span m='611070'>the</span> <span m='611160'>left,</span> <span
  m='611920'>and</span> <span m='612310'>u</span> <span m='612550'>*</span>
  <span m='613000'>sec</span> <span m='614060'>x is</span> <span
  m='614510'>on</span> <span m='614660'>the</span> <span
  m='614750'>right.</span> <span m='616440'>Well,</span> <span
  m='616550'>there's</span> <span m='616790'>my</span> <span
  m='616930'>secant.</span> <span m='618560'>That</span> <span
  m='618700'>I</span> <span m='618760'>was</span> <span m='618930'>trying</span>
  <span m='619160'>to</span> <span m='619260'>integrate.</span> <span
  m='620210'>And</span> <span m='620390'>what</span> <span m='620540'>it</span>
  <span m='620630'>tells</span> <span m='620930'>you</span> <span
  m='621080'>is</span> <span m='621430'>that</span> <span m='624610'>=</span>
  <span m='625270'>u'</span> <span m='625420'>/</span> <span
  m='627100'>u.</span> <span m='628560'>Just</span> <span
  m='628810'>divide</span> <span m='629410'>both</span> <span
  m='629620'>sides</span> <span m='630080'>by</span> <span m='630490'>u,</span>
  <span m='631010'>and</span> <span m='631200'>I</span> <span
  m='631280'>get</span> <span m='631710'>this</span> <span
  m='631890'>equation.</span> <span m='633710'>u'</span> <span
  m='633920'>/</span> <span m='634860'>u,</span> <span m='635550'>that</span>
  <span m='635720'>has</span> <span m='635920'>a</span> <span
  m='635980'>name.</span> <span m='636910'>Not</span> <span
  m='637090'>sure</span> <span m='637250'>that</span> <span
  m='637870'>professor</span> <span m='638450'>Jerison's</span> <span
  m='638880'>used</span> <span m='639100'>this</span> <span m='639320'>in</span>
  <span m='639390'>this</span> <span m='639530'>class,</span> <span
  m='639940'>but</span> <span m='640890'>u'</span> <span m='641360'>/</span>
  <span m='641560'>u,</span> <span m='641730'>we've</span> <span
  m='641890'>actually</span> <span m='642230'>used</span> <span
  m='642420'>something</span> <span m='642730'>like</span> <span
  m='642930'>that.</span> <span m='643270'>It's</span> <span
  m='643420'>on</span> <span m='643570'>the</span> <span m='643640'>board</span>
  <span m='643890'>right</span> <span m='644080'>now.</span> </p><p><span
  m='645560'>It's</span> <span m='645730'>a</span> <span
  m='645810'>logarithmic</span> <span m='646720'>derivative.</span> <span
  m='647650'>It</span> <span m='647850'>is</span> <span m='649600'>the</span>
  <span m='649690'>derivative</span> <span m='654620'>of</span> <span
  m='655400'>the</span> <span m='655490'>national</span> <span
  m='655860'>logarithm</span> <span m='656170'>of</span> <span
  m='656840'>u.</span> <span m='657750'>Maybe</span> <span
  m='658000'>it's</span> <span m='658110'>easier</span> <span
  m='658440'>to</span> <span m='658520'>read</span> <span m='658740'>this</span>
  <span m='658950'>from</span> <span m='659120'>right</span> <span
  m='659340'>to</span> <span m='659460'>left,</span> <span m='659940'>if</span>
  <span m='660080'>I</span> <span m='660140'>want to</span> <span
  m='660370'>calculate</span> <span m='660880'>the</span> <span
  m='660970'>derivative</span> <span m='661330'>of</span> <span
  m='661550'>the</span> <span m='661660'>logarithm,</span> <span
  m='662780'>well,</span> <span m='663270'>the</span> <span
  m='663370'>chain</span> <span m='663650'>rule</span> <span
  m='663980'>says</span> <span m='664240'>I</span> <span m='664320'>get</span>
  <span m='664520'>the</span> <span m='664600'>derivative</span> <span
  m='665060'>of</span> <span m='665190'>u</span> <span m='665960'>times</span>
  <span m='666380'>the</span> <span m='666530'>derivative</span> <span
  m='666830'>of</span> <span m='667120'>the</span> <span m='667210'>log</span>
  <span m='667470'>function,</span> <span m='668480'>which</span> <span
  m='668650'>is</span> <span m='668760'>1</span> <span m='668920'>/</span> <span
  m='669110'>u.</span> <span m='671100'>So</span> <span m='671320'>often</span>
  <span m='672080'>u' / u</span> <span m='672250'>is</span> <span
  m='672610'>called</span> <span m='672840'>the</span> <span
  m='672940'>logarithmic</span> <span m='673610'>derivative.</span> <span
  m='686010'>But</span> <span m='686170'>it's</span> <span
  m='686340'>done</span> <span m='686550'>what</span> <span m='686700'>I</span>
  <span m='686750'>wanted.</span> <span m='687130'>Because</span> <span
  m='687430'>it's</span> <span m='687570'>expressed</span> <span
  m='688160'>the</span> <span m='688430'>secant</span> <span
  m='688740'>as</span> <span m='688980'>a</span> <span
  m='689040'>derivative.</span> <span m='691740'>And</span> <span
  m='694000'>I</span> <span m='694180'>guess</span> <span m='694430'>I</span>
  <span m='694510'>should</span> <span m='694700'>put</span> <span
  m='694880'>in</span> <span m='695030'>what</span> <span m='697860'>u</span>
  <span m='698060'>is.</span> <span m='698630'>It's</span> <span
  m='700130'>the</span> <span m='700610'>secant</span> <span
  m='700780'>plus</span> <span m='701000'>the</span> <span
  m='701270'>tangent.</span> <span m='706090'>And so</span> <span
  m='706270'>that</span> <span m='706450'>implies</span> <span
  m='707380'>that</span> <span m='707520'>the</span> <span
  m='707690'>integral--</span> <span m='708500'>Integrate</span> <span
  m='708900'>both</span> <span m='709130'>sides.</span> <span
  m='709510'>That</span> <span m='709690'>says</span> <span
  m='709960'>that</span> <span m='710090'>the</span> <span
  m='710210'>integral</span> <span m='710820'>of</span> <span
  m='711040'>sec</span> <span m='711530'>x</span> <span m='712080'>dx,</span>
  <span m='713060'>is</span> <span m='716320'>ln(sec x + tan x).</span> <span
  m='722280'>So</span> <span m='723520'>that's</span> <span
  m='723870'>the</span> <span m='724650'>last</span> <span
  m='725050'>line</span> <span m='725370'>in</span> <span m='725480'>this</span>
  <span m='726440'>little</span> <span m='726780'>memo</span> <span
  m='727120'>that</span> <span m='727320'>I</span> <span
  m='727390'>created.</span> <span m='729500'>That</span> <span
  m='729660'>we</span> <span m='729770'>can</span> <span m='729920'>use</span>
  <span m='730170'>now</span> <span m='730360'>for</span> <span
  m='730480'>the</span> <span m='730580'>rest</span> <span m='730820'>of</span>
  <span m='730900'>the</span> <span m='731000'>class.</span> <span
  m='734500'>Any</span> <span m='734670'>questions</span> <span
  m='735070'>about</span> <span m='735320'>that</span> <span
  m='735490'>trick?</span> <span m='739320'>It's</span> <span
  m='739920'>a</span> <span m='740020'>trick,</span> <span m='740500'>I</span>
  <span m='740830'>have</span> <span m='741000'>nothing</span> <span
  m='741240'>more</span> <span m='741370'>to</span> <span m='741440'>say</span>
  <span m='741610'>about</span> <span m='741830'>it.</span> </p><p><span
  m='743740'>OK.</span> <span m='744540'>So,</span> <span m='748440'>the</span>
  <span m='748570'>next</span> <span m='748860'>thing</span> <span
  m='749060'>I--</span> <span m='749300'>oh</span> <span m='749600'>yes,</span>
  <span m='749870'>so</span> <span m='750000'>now</span> <span
  m='750210'>I</span> <span m='750260'>want</span> <span m='750460'>to</span>
  <span m='750520'>make</span> <span m='750720'>the</span> <span
  m='750780'>point</span> <span m='751130'>that</span> <span
  m='751570'>using</span> <span m='752160'>these</span> <span
  m='752600'>rules</span> <span m='753060'>and</span> <span
  m='753280'>some</span> <span m='755680'>thought,</span> <span
  m='756400'>you</span> <span m='756530'>can</span> <span m='757540'>now</span>
  <span m='757780'>integrate</span> <span m='758350'>most</span> <span
  m='759600'>trigonometric</span> <span m='760580'>polynomials.</span> <span
  m='761650'>Most</span> <span m='761870'>things</span> <span
  m='762170'>that</span> <span m='762290'>involve</span> <span
  m='762730'>powers</span> <span m='763700'>of</span> <span
  m='763910'>sines</span> <span m='764320'>and</span> <span m='764650'>cosines
  and</span> <span m='765050'>tangents</span> <span m='765750'>and</span> <span
  m='765880'>secants</span> <span m='766370'>and</span> <span
  m='766470'>everything</span> <span m='766780'>else.</span> <span
  m='768080'>For</span> <span m='768330'>example,</span> <span
  m='768890'>let's</span> <span m='769140'>try</span> <span m='769360'>to</span>
  <span m='769460'>integrate</span> <span m='769650'>the</span> <span
  m='772430'>integral</span> <span m='772960'>of</span> <span m='776580'>sec^4
  x.</span> <span m='779180'>Big</span> <span m='779380'>power</span> <span
  m='779930'>of</span> <span m='780120'>the</span> <span
  m='780360'>secant</span> <span m='780620'>function.</span> <span
  m='782130'>Well,</span> <span m='782290'>there are</span> <span
  m='782440'>too</span> <span m='782600'>many</span> <span
  m='782800'>secants</span> <span m='783290'>there</span> <span
  m='783450'>for</span> <span m='783700'>me.</span> <span m='783830'>So</span>
  <span m='784000'>let's</span> <span m='784240'>take</span> <span
  m='784480'>some</span> <span m='784720'>away.</span> <span
  m='785680'>And</span> <span m='786140'>I</span> <span m='786290'>can</span>
  <span m='786450'>take</span> <span m='786710'>them</span> <span
  m='786840'>away</span> <span m='787680'>by</span> <span
  m='787810'>using</span> <span m='788270'>that</span> <span
  m='788460'>trig</span> <span m='788710'>identity,</span> <span
  m='789730'>sec^2</span> <span m='790140'>=</span> <span m='790260'>1</span>
  <span m='790480'>+</span> <span m='790770'>tan^2.</span> <span
  m='792300'>So</span> <span m='792670'>I'm</span> <span m='792850'>going
  to</span> <span m='793030'>replace</span> <span m='793700'>two</span> <span
  m='794240'>of</span> <span m='794410'>those</span> <span
  m='794640'>secants</span> <span m='795550'>by</span> <span m='795740'>1</span>
  <span m='795960'>+</span> <span m='796260'>tan^2.</span> <span
  m='801790'>That</span> <span m='801970'>leaves</span> <span
  m='802230'>me</span> <span m='802360'>with</span> <span m='802550'>two</span>
  <span m='802760'>left</span> <span m='803000'>over.</span> <span
  m='805190'>Now</span> <span m='805380'>there</span> <span
  m='805540'>was</span> <span m='805740'>method</span> <span
  m='806150'>to</span> <span m='806220'>my</span> <span
  m='806360'>madness.</span> <span m='807920'>Because</span> <span
  m='808470'>I've</span> <span m='808670'>got</span> <span m='808860'>a</span>
  <span m='808920'>secant</span> <span m='809430'>squared</span> <span
  m='809900'>left</span> <span m='810170'>over</span> <span
  m='810400'>there.</span> <span m='811020'>And</span> <span
  m='811230'>secant</span> <span m='811670'>squared</span> <span
  m='812460'>is</span> <span m='812680'>the</span> <span
  m='812760'>derivative</span> <span m='813040'>of</span> <span
  m='813300'>tangent.</span> <span m='815280'>So</span> <span
  m='816750'>that</span> <span m='817060'>suggests</span> <span
  m='817670'>a</span> <span m='817780'>substitution.</span> <span
  m='820970'>Namely,</span> <span m='821570'>let's</span> <span
  m='821820'>say,</span> <span m='822300'>let's</span> <span
  m='822540'>let</span> <span m='823080'>u</span> <span m='823760'>=</span>
  <span m='824100'>tan x,</span> <span m='826110'>so</span> <span
  m='826300'>that</span> <span m='826560'>du</span> <span m='827680'>=</span>
  <span m='828190'>sec^2 x</span> <span m='828370'>dx.</span> <span
  m='830980'>And</span> <span m='831130'>I</span> <span m='831190'>have</span>
  <span m='831460'>both</span> <span m='831720'>terms</span> <span
  m='832160'>that</span> <span m='832290'>occur</span> <span
  m='833060'>in</span> <span m='833240'>my</span> <span
  m='834490'>integral</span> <span m='835700'>sitting</span> <span
  m='836010'>there</span> <span m='836180'>very</span> <span
  m='836430'>nicely.</span> <span m='841800'>So</span> <span
  m='842000'>this</span> <span m='843000'>is</span> <span m='843070'>the</span>
  <span m='843150'>possibility</span> <span m='843840'>of</span> <span
  m='843920'>making</span> <span m='844260'>this</span> <span
  m='844430'>substitution</span> <span m='845020'>and</span> <span
  m='845380'>seeing</span> <span m='845750'>a</span> <span
  m='845820'>secant</span> <span m='846290'>squared</span> <span
  m='846790'>up</span> <span m='846900'>here</span> <span m='847400'>as</span>
  <span m='847660'>part</span> <span m='848240'>of</span> <span
  m='848690'>the</span> <span m='848800'>differential</span> <span
  m='849530'>here.</span> <span m='850330'>That's</span> <span
  m='850560'>why</span> <span m='852010'>it</span> <span m='852210'>was</span>
  <span m='852350'>a</span> <span m='852410'>good</span> <span
  m='852580'>idea</span> <span m='852970'>for</span> <span m='853200'>me</span>
  <span m='853300'>to</span> <span m='853430'>take</span> <span
  m='853700'>two</span> <span m='853910'>of</span> <span m='854040'>the</span>
  <span m='854140'>secants</span> <span m='854310'>and</span> <span
  m='854770'>write</span> <span m='855040'>them</span> <span
  m='855210'>as</span> <span m='855470'>1</span> <span m='855680'>+</span> <span
  m='855960'>tan^2.</span> </p><p><span m='859170'>So</span> <span
  m='859360'>now</span> <span m='859550'>I</span> <span m='859630'>can</span>
  <span m='859830'>continue</span> <span m='860240'>this.</span> <span
  m='862250'>Under</span> <span m='862460'>that</span> <span
  m='862670'>substitution,</span> <span m='864290'>I</span> <span
  m='864430'>get</span> <span m='864780'>1.</span> <span m='865780'>Oh</span>
  <span m='865910'>yeah,</span> <span m='866190'>and</span> <span
  m='866490'>I</span> <span m='866580'>should</span> <span m='866870'>add</span>
  <span m='867760'>the</span> <span m='868320'>other</span> <span
  m='869450'>fact,</span> <span m='870000'>that--</span> <span
  m='872810'>Well</span> <span m='874070'>I</span> <span m='874200'>guess</span>
  <span m='875470'>it's</span> <span m='875710'>obvious</span> <span
  m='876160'>that</span> <span m='876490'>tangent</span> <span
  m='877070'>squared</span> <span m='877530'>is</span> <span
  m='877680'>u^2.</span> <span m='878460'>So I</span> <span
  m='878590'>get</span> <span m='878760'>1</span> <span m='878970'>+</span>
  <span m='879270'>u^2.</span> <span m='881070'>And</span> <span
  m='881400'>then</span> <span m='881580'>du--</span> <span
  m='882930'>sec^2</span> <span m='883250'>sec^2 x</span> <span
  m='883870'>dx,</span> <span m='885010'>that</span> <span m='885520'>is</span>
  <span m='885820'>du.</span> <span m='890110'>Well</span> <span
  m='890320'>that's</span> <span m='890510'>pretty</span> <span
  m='890700'>easy</span> <span m='890900'>to</span> <span
  m='891110'>integrate.</span> <span m='892430'>So</span> <span
  m='892690'>I</span> <span m='892790'>get</span> <span m='893560'>u</span>
  <span m='894000'>+</span> <span m='894820'>u^3</span> <span m='895360'>/
  3.</span> <span m='896690'>Plus</span> <span m='896980'>a</span> <span
  m='897050'>constant.</span> <span m='897950'>And</span> <span
  m='898160'>then</span> <span m='898270'>I</span> <span m='898340'>just</span>
  <span m='898610'>have</span> <span m='898810'>to</span> <span
  m='898940'>back-substitute.</span> <span m='900020'>Put</span> <span
  m='900220'>things</span> <span m='900470'>back</span> <span
  m='900770'>in</span> <span m='900850'>terms</span> <span m='901160'>of</span>
  <span m='901260'>the</span> <span m='901360'>original</span> <span
  m='901770'>variables.</span> <span m='903600'>And</span> <span
  m='903770'>that</span> <span m='903930'>gives</span> <span
  m='904170'>me</span> <span m='905140'>tan</span> <span m='905550'>x</span>
  <span m='907970'>plus</span> <span m='908250'>tangent</span> <span
  m='908590'>cubed</span> <span m='910310'>over 3.</span> <span m='912220'>And
  there's</span> <span m='912560'>the answer.</span> <span m='915610'>So</span>
  <span m='915820'>we</span> <span m='915970'>could</span> <span
  m='916080'>spend</span> <span m='916330'>a</span> <span m='916380'>lot</span>
  <span m='916560'>more</span> <span m='916750'>time</span> <span
  m='917070'>doing</span> <span m='917350'>more</span> <span
  m='917540'>examples</span> <span m='918170'>of</span> <span
  m='918980'>this</span> <span m='919190'>kind</span> <span m='919480'>of</span>
  <span m='920590'>polynomial</span> <span m='920800'>trig</span> <span
  m='921100'>thing.</span> <span m='921810'>It's</span> <span
  m='921960'>probably</span> <span m='922360'>best</span> <span
  m='922660'>for</span> <span m='922760'>you</span> <span m='922870'>to</span>
  <span m='923000'>do</span> <span m='923940'>some</span> <span
  m='924100'>practice</span> <span m='924560'>on</span> <span
  m='924690'>your</span> <span m='924840'>own.</span> <span
  m='927440'>Because</span> <span m='927610'>I</span> <span
  m='927680'>want</span> <span m='927840'>to</span> <span m='927900'>talk</span>
  <span m='928110'>about</span> <span m='929050'>other</span> <span
  m='929300'>things,</span> <span m='929580'>also.</span> <span
  m='930020'>And</span> <span m='931140'>what</span> <span m='931310'>I</span>
  <span m='931360'>want to</span> <span m='931570'>talk</span> <span
  m='931780'>about</span> <span m='932020'>is</span> <span m='932160'>the</span>
  <span m='932270'>use</span> <span m='932800'>of</span> <span
  m='933500'>these</span> <span m='933890'>trig</span> <span
  m='934340'>identities</span> <span m='935330'>in</span> <span
  m='935860'>making</span> <span m='936390'>really</span> <span
  m='937780'>trig</span> <span m='938270'>substitution</span> <span
  m='939380'>integration.</span> </p><p><span m='951590'>So</span> <span
  m='951870'>we</span> <span m='952360'>did</span> <span m='952520'>a</span>
  <span m='952570'>little</span> <span m='952820'>bit</span> <span
  m='952960'>of</span> <span m='953060'>this</span> <span
  m='953240'>yesterday,</span> <span m='954320'>and</span> <span
  m='954640'>I'll</span> <span m='954770'>show</span> <span
  m='954970'>you</span> <span m='955120'>some</span> <span
  m='955300'>more</span> <span m='955520'>examples</span> <span
  m='956070'>today.</span> <span m='956990'>Let's</span> <span
  m='957210'>start</span> <span m='957560'>with</span> <span m='957680'>a</span>
  <span m='957740'>pretty</span> <span m='957980'>hard</span> <span
  m='958290'>example</span> <span m='958720'>right</span> <span
  m='958920'>off</span> <span m='959080'>the</span> <span m='959170'>bat.</span>
  <span m='959520'>So</span> <span m='959760'>this</span> <span
  m='959930'>is</span> <span m='960020'>going to</span> <span
  m='960260'>be</span> <span m='963760'>the</span> <span
  m='963950'>integral</span> <span m='964910'>of</span> <span
  m='965020'>dx</span> <span m='965710'>over</span> <span m='966460'>x^2</span>
  <span m='966710'>times</span> <span m='967700'>the</span> <span
  m='967810'>square</span> <span m='968130'>root</span> <span
  m='968570'>of</span> <span m='969990'>1+x^2.</span> <span m='974690'>It's
  a</span> <span m='974780'>pretty</span> <span m='974970'>bad</span> <span
  m='975190'>looking</span> <span m='975430'>integral.</span> <span
  m='978120'>So</span> <span m='978800'>how</span> <span m='979000'>can</span>
  <span m='979120'>we</span> <span m='979240'>approach</span> <span
  m='979630'>this?</span> <span m='980190'>Well,</span> <span
  m='981560'>the</span> <span m='982060'>square</span> <span
  m='982600'>root</span> <span m='983000'>is</span> <span m='983290'>the</span>
  <span m='983420'>ugliest</span> <span m='983970'>part</span> <span
  m='984650'>of</span> <span m='984830'>the</span> <span
  m='984980'>integral,</span> <span m='985390'>I</span> <span
  m='985500'>think.</span> <span m='987240'>What</span> <span
  m='987490'>we</span> <span m='987580'>should</span> <span
  m='987730'>try</span> <span m='987940'>to</span> <span m='988040'>do</span>
  <span m='988310'>is</span> <span m='989100'>write</span> <span
  m='989410'>this</span> <span m='989520'>square</span> <span
  m='989870'>root</span> <span m='990160'>in</span> <span m='990320'>some</span>
  <span m='990590'>nicer</span> <span m='990970'>way.</span> <span
  m='991600'>That</span> <span m='991760'>is,</span> <span
  m='991980'>figure</span> <span m='992410'>out</span> <span m='992550'>a</span>
  <span m='992600'>way</span> <span m='992820'>to</span> <span
  m='992910'>write</span> <span m='994120'>1+x^2</span> <span
  m='994780'>as</span> <span m='995120'>a</span> <span m='995220'>square.</span>
  <span m='997180'>That'll</span> <span m='997890'>get</span> <span
  m='998080'>rid</span> <span m='998240'>of</span> <span m='998320'>the</span>
  <span m='998420'>square</span> <span m='998730'>root.</span> <span
  m='1000140'>So</span> <span m='1000400'>there</span> <span
  m='1000570'>is</span> <span m='1000760'>an</span> <span
  m='1000840'>example</span> <span m='1001360'>of</span> <span m='1002480'>a
  way</span> <span m='1002780'>to</span> <span m='1003160'>write</span> <span
  m='1003440'>1</span> <span m='1003800'>plus</span> <span
  m='1004150'>something</span> <span m='1004540'>squared</span> <span
  m='1005120'>in</span> <span m='1005220'>a</span> <span
  m='1005270'>different</span> <span m='1005600'>way.</span> <span
  m='1006140'>And</span> <span m='1006310'>it's</span> <span
  m='1006450'>right</span> <span m='1006630'>up</span> <span
  m='1006750'>there.</span> <span m='1007760'>sec^2</span> <span
  m='1008200'>=</span> <span m='1008310'>1</span> <span m='1008630'>+</span>
  <span m='1008950'>tan^2.</span> <span m='1010790'>So</span> <span
  m='1011040'>I</span> <span m='1011130'>want</span> <span m='1011340'>to</span>
  <span m='1011400'>use</span> <span m='1011690'>that</span> <span
  m='1011880'>idea.</span> <span m='1013450'>And</span> <span
  m='1014320'>when</span> <span m='1014560'>I</span> <span
  m='1014630'>see</span> <span m='1014900'>this</span> <span
  m='1015140'>form,</span> <span m='1015850'>that</span> <span
  m='1016050'>suggests</span> <span m='1016650'>that</span> <span
  m='1016770'>we</span> <span m='1016890'>make</span> <span m='1017280'>a</span>
  <span m='1017420'>trig</span> <span m='1017790'>substitution</span> <span
  m='1018470'>and</span> <span m='1019200'>write</span> <span
  m='1019520'>x</span> <span m='1020340'>as</span> <span m='1020740'>the</span>
  <span m='1020820'>tangent</span> <span m='1022940'>of</span> <span
  m='1023480'>some</span> <span m='1024280'>new</span> <span
  m='1024430'>variable.</span> <span m='1024900'>Which</span> <span
  m='1025100'>you</span> <span m='1025170'>might</span> <span
  m='1025340'>as</span> <span m='1025450'>well</span> <span
  m='1025640'>call</span> <span m='1025890'>theta,</span> <span
  m='1026140'>to</span> <span m='1026520'>because</span> <span
  m='1026670'>it's</span> <span m='1027040'>like</span> <span
  m='1027240'>an</span> <span m='1027320'>angle.</span> <span
  m='1029060'>Then</span> <span m='1030410'>1+x^2</span> <span
  m='1033870'>is</span> <span m='1034530'>the</span> <span
  m='1034640'>secant</span> <span m='1035060'>squared.</span> <span
  m='1035960'>According</span> <span m='1036350'>to</span> <span
  m='1036440'>that</span> <span m='1036620'>trig</span> <span
  m='1036850'>identity.</span> <span m='1038620'>And</span> <span
  m='1038820'>so</span> <span m='1038960'>the</span> <span
  m='1039080'>square</span> <span m='1039410'>root</span> <span
  m='1039880'>of</span> <span m='1040060'>1+x^2</span> <span
  m='1040260'>is</span> <span m='1042660'>sec(theta).</span> <span
  m='1049780'>Right?</span> <span m='1051070'>So</span> <span
  m='1051470'>this</span> <span m='1053640'>identity</span> <span m='1054370'>is
  the</span> <span m='1054480'>reason</span> <span m='1055360'>that</span> <span
  m='1055500'>the</span> <span m='1055630'>substitution</span> <span
  m='1056220'>is</span> <span m='1056450'>going</span> <span
  m='1056600'>to</span> <span m='1056660'>help</span> <span
  m='1056940'>us.</span> <span m='1057120'>Because</span> <span
  m='1057450'>it</span> <span m='1057760'>gets</span> <span
  m='1058000'>rid</span> <span m='1058290'>of</span> <span
  m='1058390'>the</span> <span m='1058490'>square</span> <span
  m='1058780'>root</span> <span m='1059430'>and</span> <span
  m='1059620'>replaces</span> <span m='1060140'>it</span> <span
  m='1060310'>by</span> <span m='1060450'>some</span> <span
  m='1060770'>other</span> <span m='1060970'>trig</span> <span
  m='1061260'>function.</span> </p><p><span m='1063550'>I'd</span> <span
  m='1063710'>better</span> <span m='1063960'>be</span> <span
  m='1064100'>able</span> <span m='1064290'>to</span> <span
  m='1064360'>get</span> <span m='1064500'>rid</span> <span
  m='1064650'>of</span> <span m='1064740'>the</span> <span
  m='1064850'>dx,</span> <span m='1065460'>too.</span> <span
  m='1066080'>That's</span> <span m='1066280'>part</span> <span
  m='1066560'>of</span> <span m='1066660'>the</span> <span
  m='1066770'>substitution</span> <span m='1067510'>process.</span> <span
  m='1068520'>But</span> <span m='1069100'>we</span> <span
  m='1069260'>can</span> <span m='1069400'>do</span> <span
  m='1069540'>that,</span> <span m='1069820'>because</span> <span
  m='1070110'>I</span> <span m='1070220'>know</span> <span
  m='1070520'>what</span> <span m='1070700'>the</span> <span
  m='1070790'>derivative</span> <span m='1071080'>of</span> <span
  m='1071240'>the</span> <span m='1071460'>tangent</span> <span
  m='1071920'>is.</span> <span m='1072440'>It's</span> <span
  m='1072680'>secant</span> <span m='1073020'>squared.</span> <span
  m='1076070'>So</span> <span m='1076540'>dx / d theta</span> <span
  m='1077640'>is</span> <span m='1077930'>sec^2(theta).</span> <span
  m='1078880'>So</span> <span m='1079080'>dx</span> <span m='1080110'>is</span>
  <span m='1080460'>sec^2(theta)</span> <span m='1080560'>d theta.</span> <span
  m='1084460'>So</span> <span m='1084660'>let's</span> <span
  m='1085460'>just</span> <span m='1085780'>substitute</span> <span
  m='1086460'>all of</span> <span m='1086680'>that</span> <span
  m='1086920'>stuff</span> <span m='1087350'>in,</span> <span
  m='1087820'>and</span> <span m='1088100'>rewrite</span> <span
  m='1088690'>the</span> <span m='1088790'>entire</span> <span
  m='1089220'>integral</span> <span m='1089730'>in</span> <span
  m='1089920'>terms</span> <span m='1090280'>of</span> <span
  m='1090390'>our</span> <span m='1090510'>new</span> <span
  m='1090690'>variable,</span> <span m='1091350'>theta.</span> <span
  m='1091750'>So</span> <span m='1092890'>dx</span> <span m='1093350'>is</span>
  <span m='1093450'>in</span> <span m='1093540'>the</span> <span
  m='1093620'>numerator.</span> <span m='1094570'>That's</span> <span
  m='1094940'>sec^2(theta)</span> <span m='1095250'>d theta.</span> <span
  m='1098210'>And</span> <span m='1098360'>then</span> <span
  m='1098480'>the</span> <span m='1098560'>denominator,</span> <span
  m='1099570'>well,</span> <span m='1099900'>it</span> <span
  m='1100000'>has</span> <span m='1100230'>an</span> <span
  m='1100320'>x^2.</span> <span m='1101350'>That's</span> <span
  m='1101600'>tan^2(theta).</span> <span m='1104740'>And</span> <span
  m='1104970'>then</span> <span m='1107440'>there's</span> <span
  m='1107730'>this</span> <span m='1107860'>square</span> <span
  m='1108210'>root.</span> <span m='1108660'>And</span> <span
  m='1109220'>we</span> <span m='1109780'>know</span> <span
  m='1110080'>what</span> <span m='1110330'>that</span> <span
  m='1110560'>is</span> <span m='1110800'>in</span> <span
  m='1110900'>terms</span> <span m='1111190'>of</span> <span
  m='1111280'>theta.</span> <span m='1111690'>It's</span> <span
  m='1111930'>sec(theta).</span> </p><p><span m='1116470'>OK,</span> <span
  m='1116920'>now.</span> <span m='1118960'>we've</span> <span
  m='1119930'>done</span> <span m='1120190'>the</span> <span
  m='1120540'>trig</span> <span m='1121070'>substitution.</span> <span
  m='1121920'>I've</span> <span m='1122210'>gotten</span> <span
  m='1122480'>rid</span> <span m='1122650'>of</span> <span
  m='1122750'>the</span> <span m='1122830'>square</span> <span
  m='1123150'>root,</span> <span m='1123940'>I've</span> <span
  m='1124280'>got</span> <span m='1124490'>everything</span> <span
  m='1124850'>in</span> <span m='1124940'>terms</span> <span
  m='1125220'>of</span> <span m='1125310'>trig</span> <span
  m='1125540'>functions</span> <span m='1126050'>of</span> <span
  m='1126130'>the</span> <span m='1126220'>new</span> <span
  m='1126340'>variable.</span> <span m='1128020'>Pretty</span> <span
  m='1128260'>complicated</span> <span m='1128800'>trig</span> <span
  m='1129020'>function.</span> <span m='1129860'>This</span> <span
  m='1130060'>often</span> <span m='1130360'>happens,</span> <span
  m='1130810'>you</span> <span m='1130930'>wind</span> <span
  m='1131220'>up</span> <span m='1131370'>with</span> <span m='1131530'>a</span>
  <span m='1131610'>complete</span> <span m='1132170'>scattering</span> <span
  m='1132750'>of</span> <span m='1132850'>different</span> <span
  m='1133140'>trig</span> <span m='1133370'>functions</span> <span
  m='1133820'>in</span> <span m='1133930'>the</span> <span
  m='1134000'>numerator</span> <span m='1134100'>and</span> <span
  m='1134450'>denominator</span> <span m='1135050'>and</span> <span
  m='1135160'>everything.</span> <span m='1136250'>A</span> <span
  m='1136400'>systematic</span> <span m='1137030'>thing</span> <span
  m='1137200'>to</span> <span m='1137330'>do</span> <span
  m='1137480'>here</span> <span m='1137700'>is</span> <span
  m='1137890'>to</span> <span m='1138060'>put</span> <span
  m='1138490'>everything</span> <span m='1138950'>in</span> <span
  m='1139070'>terms</span> <span m='1139460'>of</span> <span
  m='1139580'>sines</span> <span m='1139980'>and</span> <span
  m='1140290'>cosines.</span> <span m='1149110'>Unless</span> <span
  m='1149430'>you</span> <span m='1149830'>can</span> <span
  m='1150010'>see</span> <span m='1150230'>right</span> <span
  m='1150440'>away,</span> <span m='1150820'>how</span> <span
  m='1151100'>it's</span> <span m='1151230'>going</span> <span
  m='1151390'>to</span> <span m='1151460'>simplify,</span> <span m='1152600'>the
  systematic</span> <span m='1153330'>thing</span> <span m='1153620'>to do is
  to</span> <span m='1154060'>rewrite</span> <span m='1155010'>in</span> <span
  m='1155270'>terms</span> <span m='1155590'>of</span> <span
  m='1155700'>sines</span> <span m='1156220'>and</span> <span
  m='1156460'>cosines.</span> <span m='1157110'>So</span> <span
  m='1157310'>let's</span> <span m='1157520'>do</span> <span
  m='1157660'>that.</span> <span m='1159300'>So</span> <span
  m='1159520'>let's</span> <span m='1159720'>see.</span> <span
  m='1160260'>The</span> <span m='1160540'>secant</span> <span
  m='1160810'>squared,</span> <span m='1161840'>secant</span> <span
  m='1162270'>is</span> <span m='1162370'>1</span> <span m='1162550'>over</span>
  <span m='1162740'>cosine.</span> <span m='1163520'>So</span> <span
  m='1163740'>I'm</span> <span m='1163850'>going to</span> <span
  m='1164040'>put</span> <span m='1164200'>a</span> <span
  m='1164250'>cosine</span> <span m='1165530'>squared</span> <span
  m='1166830'>in</span> <span m='1166980'>the</span> <span
  m='1167070'>denominator.</span> <span m='1168920'>Oh,</span> <span
  m='1169080'>I</span> <span m='1169190'>guess</span> <span
  m='1169400'>the</span> <span m='1169490'>first</span> <span
  m='1169720'>thing</span> <span m='1169860'>I</span> <span
  m='1169930'>can</span> <span m='1170090'>do</span> <span m='1170260'>is</span>
  <span m='1170400'>cancel.</span> <span m='1172070'>Let's</span> <span
  m='1172280'>do</span> <span m='1172450'>that.</span> <span
  m='1173270'>That's</span> <span m='1173450'>clever.</span> <span
  m='1174200'>You were</span> <span m='1174440'>all</span> <span
  m='1174590'>thinking</span> <span m='1174840'>that</span> <span
  m='1175020'>too.</span> <span m='1175700'>Cancel</span> <span
  m='1176180'>those.</span> <span m='1177220'>So</span> <span
  m='1177420'>now</span> <span m='1177640'>I</span> <span
  m='1177700'>just</span> <span m='1177950'>get</span> <span
  m='1178120'>one</span> <span m='1178330'>cosine</span> <span
  m='1178620'>denominator</span> <span m='1179860'>from</span> <span
  m='1180030'>the</span> <span m='1180130'>secant</span> <span
  m='1180700'>there</span> <span m='1181280'>in</span> <span
  m='1181410'>the</span> <span m='1181480'>numerator.</span> <span
  m='1184440'>It's</span> <span m='1184580'>still</span> <span
  m='1184770'>pretty</span> <span m='1184980'>complicated,</span> <span
  m='1185560'>secant</span> <span m='1185700'>over</span> <span
  m='1185990'>tangent</span> <span m='1186430'>squared,</span> <span
  m='1186840'>who</span> <span m='1186940'>knows.</span> <span
  m='1188110'>Well,</span> <span m='1188320'>we'll</span> <span
  m='1188420'>find</span> <span m='1188680'>out.</span> <span
  m='1189410'>Because</span> <span m='1189650'>the</span> <span
  m='1189750'>tangent</span> <span m='1190330'>is</span> <span
  m='1190820'>sine</span> <span m='1191260'>over</span> <span
  m='1191520'>cosine.</span> <span m='1192450'>So</span> <span
  m='1192590'>I</span> <span m='1192660'>should</span> <span
  m='1192840'>put</span> <span m='1193010'>a</span> <span
  m='1193060'>sine</span> <span m='1193410'>squared</span> <span
  m='1194450'>where</span> <span m='1194600'>the</span> <span
  m='1194720'>tangent</span> <span m='1195140'>was,</span> <span m='1195940'>and
  a</span> <span m='1196160'>cosine</span> <span m='1196680'>squared</span>
  <span m='1197700'>up</span> <span m='1197880'>there.</span> <span
  m='1199330'>And I</span> <span m='1199890'>still</span> <span
  m='1200150'>have</span> <span m='1200290'>d theta.</span> <span
  m='1202180'>And</span> <span m='1202350'>now</span> <span
  m='1202460'>you</span> <span m='1202590'>see</span> <span
  m='1202760'>some</span> <span m='1202900'>more</span> <span
  m='1203070'>cancellation</span> <span m='1203670'>occurs.</span> <span
  m='1204300'>That's</span> <span m='1204570'>the</span> <span
  m='1204680'>virtue</span> <span m='1205110'>of</span> <span
  m='1205260'>writing</span> <span m='1205620'>things</span> <span
  m='1205990'>out</span> <span m='1206560'>in</span> <span
  m='1206750'>this</span> <span m='1206950'>way.</span> <span
  m='1207950'>So</span> <span m='1208170'>now,</span> <span
  m='1208590'>the</span> <span m='1209630'>square</span> <span
  m='1210610'>here</span> <span m='1211770'>cancels</span> <span
  m='1212290'>with</span> <span m='1212450'>this</span> <span
  m='1212900'>cosine.</span> <span m='1214940'>And</span> <span
  m='1215140'>I'm</span> <span m='1215280'>left</span> <span
  m='1215670'>with</span> <span m='1217490'>cos(theta)</span> <span
  m='1218310'>d</span> <span m='1218460'>theta</span> <span m='1219200'>/</span>
  <span m='1219660'>sin^2(theta).</span> <span m='1225340'>That's</span> <span
  m='1225530'>a</span> <span m='1225600'>little</span> <span
  m='1225800'>simpler.</span> </p><p><span m='1226860'>And</span> <span
  m='1228600'>it</span> <span m='1228740'>puts</span> <span
  m='1228980'>me</span> <span m='1229080'>in</span> <span m='1229180'>a</span>
  <span m='1229240'>position</span> <span m='1229760'>to</span> <span
  m='1230260'>use</span> <span m='1230580'>the</span> <span
  m='1230670'>same</span> <span m='1231010'>idea</span> <span
  m='1231470'>I</span> <span m='1231600'>just</span> <span
  m='1231930'>used.</span> <span m='1233300'>I</span> <span
  m='1233470'>see</span> <span m='1233690'>the</span> <span
  m='1233820'>sine</span> <span m='1234360'>here.</span> <span
  m='1235100'>I</span> <span m='1235240'>might</span> <span
  m='1235500'>look</span> <span m='1235690'>around</span> <span
  m='1236270'>in</span> <span m='1236480'>this</span> <span
  m='1236670'>integral</span> <span m='1237090'>to</span> <span
  m='1237190'>see</span> <span m='1237380'>if</span> <span
  m='1237500'>its</span> <span m='1237680'>derivative</span> <span
  m='1238250'>occurs</span> <span m='1239110'>anywhere.</span> <span
  m='1239940'>The</span> <span m='1240060'>differential</span> <span
  m='1240730'>of</span> <span m='1240880'>the</span> <span
  m='1240990'>sine</span> <span m='1241440'>is</span> <span
  m='1242200'>the</span> <span m='1242310'>cosine.</span> <span
  m='1243890'>And</span> <span m='1244090'>so</span> <span
  m='1245990'>I'm</span> <span m='1246520'>very</span> <span
  m='1246800'>much</span> <span m='1247220'>inclined</span> <span
  m='1248230'>to</span> <span m='1248380'>make</span> <span
  m='1248580'>another</span> <span m='1248880'>substitution.</span> <span
  m='1249720'>Say,</span> <span m='1249910'>u,</span> <span
  m='1250520'>direct</span> <span m='1250950'>substitution</span> <span
  m='1251570'>this</span> <span m='1251810'>time.</span> <span m='1254250'>And
  say</span> <span m='1254680'>u is</span> <span m='1255050'>the</span> <span
  m='1255140'>cosine</span> <span m='1255710'>of</span> <span
  m='1256000'>theta.</span> <span m='1256150'>Because</span> <span
  m='1256550'>then</span> <span m='1256930'>du--</span> <span
  m='1258390'>Oh,</span> <span m='1258640'>I'm</span> <span
  m='1258800'>sorry.</span> <span m='1259110'>Say,</span> <span m='1259320'>u
  is</span> <span m='1259640'>the</span> <span m='1259710'>sine</span> <span
  m='1260110'>of</span> <span m='1260250'>theta.</span> <span
  m='1261850'>Because</span> <span m='1262320'>then</span> <span
  m='1262460'>du</span> <span m='1263700'>is</span> <span
  m='1263970'>cos(theta)</span> <span m='1264460'>d theta.</span> <span
  m='1273540'>And</span> <span m='1273740'>then</span> <span
  m='1273920'>this</span> <span m='1274050'>integral</span> <span
  m='1274520'>becomes,</span> <span m='1275900'>well,</span> <span
  m='1276320'>the</span> <span m='1276410'>numerator</span> <span
  m='1276910'>just</span> <span m='1277220'>is</span> <span
  m='1277520'>du.</span> <span m='1280140'>The</span> <span
  m='1280350'>denominator</span> <span m='1280890'>is</span> <span
  m='1281260'>u^2.</span> <span m='1282660'>And</span> <span
  m='1283390'>I</span> <span m='1283530'>think</span> <span
  m='1283880'>we</span> <span m='1284010'>can</span> <span
  m='1284590'>break</span> <span m='1284880'>out</span> <span
  m='1284990'>the</span> <span m='1285070'>champagne,</span> <span
  m='1285550'>because</span> <span m='1287270'>we</span> <span
  m='1287390'>can</span> <span m='1287510'>integrate</span> <span
  m='1287850'>that</span> <span m='1288040'>one.</span> <span
  m='1288230'>Finally</span> <span m='1288660'>get</span> <span
  m='1288820'>rid</span> <span m='1288970'>of</span> <span
  m='1289060'>the</span> <span m='1289150'>integral</span> <span
  m='1289430'>sign.</span> <span m='1289710'>Yes sir.</span> </p><p><span
  m='1289860'>STUDENT: [INAUDIBLE]</span> </p><p><span m='1297920'>PROFESSOR:
  OK,</span> <span m='1298400'>how</span> <span m='1298500'>do</span> <span
  m='1298620'>I</span> <span m='1298730'>know</span> <span m='1298880'>to</span>
  <span m='1298990'>make</span> <span m='1299160'>u</span> <span
  m='1299340'>equal</span> <span m='1299620'>to</span> <span
  m='1299740'>sine</span> <span m='1300060'>rather</span> <span
  m='1300300'>than</span> <span m='1300450'>cosine.</span> <span
  m='1301640'>Because</span> <span m='1301970'>I</span> <span
  m='1302050'>want</span> <span m='1302340'>to</span> <span
  m='1302400'>see</span> <span m='1302680'>du</span> <span
  m='1303210'>appear</span> <span m='1303650'>up</span> <span
  m='1303830'>here.</span> <span m='1305540'>If</span> <span
  m='1305670'>I'd</span> <span m='1305810'>had</span> <span m='1306020'>a</span>
  <span m='1306070'>sine</span> <span m='1306460'>up</span> <span
  m='1306590'>here,</span> <span m='1307750'>that</span> <span
  m='1308160'>would</span> <span m='1308390'>be</span> <span
  m='1308530'>a</span> <span m='1308620'>signal</span> <span
  m='1309040'>to</span> <span m='1309200'>me</span> <span
  m='1309360'>that</span> <span m='1309520'>maybe</span> <span
  m='1309760'>I</span> <span m='1309840'>should</span> <span
  m='1310030'>say</span> <span m='1310640'>let</span> <span m='1310860'>u</span>
  <span m='1311080'>be</span> <span m='1311260'>the</span> <span
  m='1311610'>cosine.</span> <span m='1313510'>OK?</span> <span
  m='1314280'>Also,</span> <span m='1314770'>because</span> <span
  m='1315230'>this</span> <span m='1315460'>thing</span> <span
  m='1315710'>in</span> <span m='1315830'>the</span> <span
  m='1315930'>denominator is</span> <span m='1316630'>something</span> <span
  m='1316980'>I</span> <span m='1317060'>want to</span> <span
  m='1317290'>get</span> <span m='1317480'>rid</span> <span
  m='1317660'>of.</span> <span m='1317870'>It's</span> <span
  m='1318040'>in</span> <span m='1318120'>the</span> <span
  m='1318200'>denominator.</span> <span m='1319050'>So</span> <span
  m='1319330'>I'll</span> <span m='1319450'>get</span> <span
  m='1319640'>rid</span> <span m='1319830'>of</span> <span m='1319930'>it</span>
  <span m='1320050'>by</span> <span m='1320160'>wishful</span> <span
  m='1320570'>thinking</span> <span m='1321030'>and</span> <span
  m='1321150'>just</span> <span m='1321370'>call</span> <span
  m='1321620'>it</span> <span m='1321710'>something</span> <span
  m='1322080'>else.</span> <span m='1324940'>It</span> <span
  m='1325100'>works</span> <span m='1325340'>pretty</span> <span
  m='1325550'>well</span> <span m='1325840'>in</span> <span
  m='1325950'>this</span> <span m='1326110'>case.</span> <span
  m='1327010'>Wishful</span> <span m='1327320'>thinking</span> <span
  m='1327630'>doesn't</span> <span m='1327880'>always</span> <span
  m='1328100'>work</span> <span m='1328310'>so</span> <span
  m='1328450'>well.</span> <span m='1330400'>So</span> <span
  m='1330590'>I</span> <span m='1330680'>integrate</span> <span
  m='1331700'>u^(-2) du,</span> <span m='1333240'>and</span> <span
  m='1333410'>I</span> <span m='1333480'>get</span> <span m='1333840'>-</span>
  <span m='1334690'>-1/u</span> <span m='1337720'>plus</span> <span
  m='1337950'>a</span> <span m='1338020'>constant,</span> <span
  m='1338510'>and</span> <span m='1338630'>I'm</span> <span
  m='1338750'>done</span> <span m='1339070'>with</span> <span
  m='1339300'>the</span> <span m='1339380'>calculus</span> <span
  m='1340050'>part</span> <span m='1340530'>of</span> <span
  m='1340700'>this</span> <span m='1340900'>problem.</span> <span
  m='1341340'>I've</span> <span m='1341550'>done</span> <span
  m='1341770'>the</span> <span m='1341890'>integral now.</span> <span
  m='1342580'>Gotten</span> <span m='1342890'>rid</span> <span
  m='1343070'>of</span> <span m='1343140'>the</span> <span
  m='1343260'>integral</span> <span m='1343570'>sign.</span> <span
  m='1345790'>But</span> <span m='1346010'>I'm</span> <span
  m='1346090'>not</span> <span m='1346250'>quite</span> <span
  m='1346490'>done</span> <span m='1346690'>with</span> <span
  m='1346830'>the</span> <span m='1346930'>problem</span> <span
  m='1347360'>yet,</span> <span m='1347640'>because</span> <span
  m='1348140'>I</span> <span m='1348290'>have</span> <span m='1348510'>to</span>
  <span m='1348620'>work</span> <span m='1348910'>my</span> <span
  m='1349050'>way</span> <span m='1349310'>back</span> <span
  m='1349640'>through</span> <span m='1350070'>two</span> <span
  m='1350460'>substitutions.</span> <span m='1351320'>First,</span> <span
  m='1351750'>this</span> <span m='1351960'>one.</span> <span
  m='1353120'>And</span> <span m='1353340'>then</span> <span
  m='1353530'>this</span> <span m='1353750'>one.</span> <span
  m='1354620'>So</span> <span m='1354830'>this</span> <span
  m='1355340'>first</span> <span m='1355640'>substitution</span> <span
  m='1356350'>isn't</span> <span m='1356600'>so</span> <span
  m='1356790'>bad</span> <span m='1357090'>to</span> <span
  m='1357170'>get</span> <span m='1357350'>rid</span> <span
  m='1357540'>of,</span> <span m='1357740'>to</span> <span
  m='1357900'>undo,</span> <span m='1358800'>to</span> <span
  m='1358970'>back-substitute.</span> <span m='1360200'>Because</span> <span
  m='1361360'>u</span> <span m='1361710'>is</span> <span m='1361890'>just</span>
  <span m='1362170'>sin(theta).</span> <span m='1363630'>And</span> <span
  m='1363860'>so</span> <span m='1364310'>1/u</span> <span
  m='1364970'>is,</span> <span m='1365500'>I</span> <span
  m='1365600'>guess</span> <span m='1365830'>a</span> <span
  m='1365880'>fancy</span> <span m='1366540'>way</span> <span
  m='1366740'>to</span> <span m='1366820'>write</span> <span
  m='1367060'>it</span> <span m='1367160'>is</span> <span m='1367320'>the</span>
  <span m='1367590'>cosecant</span> <span m='1369190'>of</span> <span
  m='1369360'>theta.</span> <span m='1372540'>1</span> <span
  m='1372710'>over</span> <span m='1372940'>the</span> <span
  m='1373060'>sine</span> <span m='1373720'>is</span> <span
  m='1374020'>the</span> <span m='1374100'>cosecant.</span> <span
  m='1374890'>So</span> <span m='1375520'>I</span> <span m='1375630'>get</span>
  <span m='1376670'>-csc(theta)</span> <span m='1377170'>plus</span> <span
  m='1377800'>a</span> <span m='1377860'>constant.</span> <span m='1380690'>Is
  there</span> <span m='1380820'>a</span> <span m='1380880'>question</span>
  <span m='1381200'>in</span> <span m='1381260'>the</span> <span
  m='1381320'>back?</span> <span m='1381590'>Yes sir?</span> </p><p><span
  m='1381680'>STUDENT: [INAUDIBLE]</span> </p><p><span m='1387010'>PROFESSOR:
  I'm</span> <span m='1387240'>sorry,</span> <span m='1387530'>my</span> <span
  m='1388010'>hearing</span> <span m='1388220'>is</span> <span
  m='1388430'>so</span> <span m='1388570'>bad.</span> </p><p><span
  m='1389000'>STUDENT: [INAUDIBLE]</span> </p><p><span m='1392500'>PROFESSOR:
  How did</span> <span m='1394440'>I know</span> <span m='1395390'>this
  substitution</span> <span m='1396070'>in</span> <span m='1396160'>the</span>
  <span m='1396250'>first</span> <span m='1396520'>place.</span> <span
  m='1399950'>It's</span> <span m='1400150'>because</span> <span
  m='1400550'>of</span> <span m='1400670'>the</span> <span m='1400760'>1</span>
  <span m='1401020'>+</span> <span m='1401310'>x^2.</span> <span
  m='1402510'>And</span> <span m='1402680'>I</span> <span m='1402740'>want
  to</span> <span m='1402990'>make</span> <span m='1403210'>use</span> <span
  m='1403540'>of</span> <span m='1403650'>the</span> <span
  m='1403750'>trig</span> <span m='1403990'>identity</span> <span
  m='1404510'>in</span> <span m='1404600'>the</span> <span
  m='1404740'>upper</span> <span m='1404920'>left-hand</span> <span
  m='1405400'>corner.</span> <span m='1406380'>I'll</span> <span
  m='1406550'>make</span> <span m='1406740'>you</span> <span
  m='1406870'>a</span> <span m='1406930'>table</span> <span
  m='1407360'>in</span> <span m='1407480'>a</span> <span m='1407520'>few</span>
  <span m='1407710'>minutes</span> <span m='1408110'>that</span> <span
  m='1408280'>will</span> <span m='1409230'>put</span> <span
  m='1409430'>all</span> <span m='1409610'>this</span> <span
  m='1409830'>in</span> <span m='1409920'>a</span> <span
  m='1410040'>bigger</span> <span m='1410290'>context.</span> <span
  m='1410870'>And</span> <span m='1410970'>I</span> <span
  m='1411030'>think</span> <span m='1411200'>it'll</span> <span
  m='1411380'>help</span> <span m='1411580'>you</span> <span
  m='1411680'>then.</span> <span m='1412350'>OK,</span> <span m='1412760'>I'll
  promise.</span> <span m='1415880'>So,</span> <span m='1417230'>what</span>
  <span m='1417470'>I</span> <span m='1417520'>want</span> <span
  m='1417720'>to</span> <span m='1418140'>try</span> <span m='1418370'>to</span>
  <span m='1418700'>talk</span> <span m='1418970'>about</span> <span
  m='1419320'>right</span> <span m='1419570'>now</span> <span
  m='1420030'>is</span> <span m='1420320'>how</span> <span m='1421130'>to</span>
  <span m='1421220'>rewrite</span> <span m='1422140'>a</span> <span
  m='1422300'>term</span> <span m='1422710'>like</span> <span
  m='1422990'>this.</span> <span m='1423710'>A</span> <span
  m='1423800'>trig</span> <span m='1424150'>term</span> <span
  m='1424480'>like</span> <span m='1424750'>this,</span> <span
  m='1425080'>back</span> <span m='1425450'>in</span> <span
  m='1425550'>terms</span> <span m='1426110'>of</span> <span
  m='1426450'>x.</span> <span m='1427240'>So</span> <span m='1427480'>I</span>
  <span m='1427570'>want</span> <span m='1427770'>to</span> <span
  m='1427860'>undo</span> <span m='1428740'>this</span> <span
  m='1429750'>trick</span> <span m='1430070'>substitution.</span> <span
  m='1431020'>This</span> <span m='1431190'>is</span> <span m='1431280'>a</span>
  <span m='1431350'>trig</span> <span m='1431610'>sub.</span> <span
  m='1435190'>And</span> <span m='1435920'>what</span> <span
  m='1436130'>I</span> <span m='1436180'>want</span> <span m='1436380'>to</span>
  <span m='1436450'>do</span> <span m='1436600'>now</span> <span
  m='1436890'>is</span> <span m='1437030'>try</span> <span m='1437240'>to</span>
  <span m='1437420'>undo</span> <span m='1437910'>that</span> <span
  m='1438170'>trig</span> <span m='1438400'>sub.</span> <span m='1439350'>And
  I'll</span> <span m='1439500'>show</span> <span m='1439670'>you</span> <span
  m='1439830'>a</span> <span m='1439880'>general</span> <span
  m='1440550'>method</span> <span m='1440970'>for</span> <span
  m='1441320'>undoing</span> <span m='1442070'>trig</span> <span
  m='1442350'>substitutions.</span> <span m='1443210'>This</span> <span
  m='1443390'>happens</span> <span m='1443760'>quite</span> <span
  m='1444050'>often.</span> <span m='1445100'>I</span> <span
  m='1445210'>don't</span> <span m='1445420'>know</span> <span
  m='1445550'>what</span> <span m='1445720'>the</span> <span
  m='1445800'>cosecant</span> <span m='1446180'>of</span> <span
  m='1446410'>theta</span> <span m='1446860'>is.</span> <span
  m='1447150'>But</span> <span m='1447310'>I</span> <span m='1447400'>do</span>
  <span m='1447610'>know</span> <span m='1447740'>what</span> <span
  m='1447910'>the</span> <span m='1447990'>tangent</span> <span
  m='1448480'>of</span> <span m='1448670'>theta</span> <span
  m='1448890'>is.</span> <span m='1451290'>So</span> <span m='1451480'>I</span>
  <span m='1451570'>want</span> <span m='1451770'>to</span> <span
  m='1451830'>make</span> <span m='1452000'>a</span> <span
  m='1452070'>relation</span> <span m='1452560'>between</span> <span
  m='1453000'>them.</span> <span m='1454060'>OK,</span> <span
  m='1454280'>so</span> <span m='1454570'>undoing.</span> <span
  m='1460920'>Trig</span> <span m='1461720'>subs.</span> </p><p><span
  m='1464420'>So</span> <span m='1464680'>let's</span> <span
  m='1465330'>go</span> <span m='1465490'>back</span> <span
  m='1465850'>to</span> <span m='1465990'>where</span> <span
  m='1467000'>trigonometry</span> <span m='1467860'>always</span> <span
  m='1468240'>comes</span> <span m='1468550'>from,</span> <span
  m='1469420'>this</span> <span m='1469690'>right</span> <span
  m='1469920'>angled</span> <span m='1470430'>triangle.</span> <span
  m='1472130'>The</span> <span m='1472330'>theta</span> <span
  m='1473020'>in</span> <span m='1473140'>the</span> <span
  m='1473210'>corner,</span> <span m='1473930'>and</span> <span
  m='1474130'>then</span> <span m='1474280'>these</span> <span
  m='1474490'>three</span> <span m='1474740'>sides.</span> <span
  m='1475540'>This</span> <span m='1475720'>one's</span> <span
  m='1475920'>called</span> <span m='1476210'>the</span> <span
  m='1476430'>hypotenuse.</span> <span m='1477590'>This</span> <span
  m='1477860'>one</span> <span m='1478160'>is</span> <span
  m='1478280'>called</span> <span m='1478550'>the</span> <span
  m='1478680'>adjacent</span> <span m='1479220'>side,</span> <span
  m='1481430'>and</span> <span m='1481570'>that</span> <span
  m='1481730'>one's</span> <span m='1481900'>called</span> <span
  m='1482110'>the</span> <span m='1482240'>opposite</span> <span
  m='1482680'>side.</span> <span m='1485690'>And now,</span> <span
  m='1486760'>let's</span> <span m='1487040'>find</span> <span
  m='1487300'>out</span> <span m='1487500'>where</span> <span m='1488720'>x
  lies</span> <span m='1490120'>in</span> <span m='1490350'>this</span> <span
  m='1491380'>triangle.</span> <span m='1492040'>Let's</span> <span
  m='1492230'>try</span> <span m='1492410'>to</span> <span
  m='1492510'>write</span> <span m='1492750'>the</span> <span
  m='1492850'>sides</span> <span m='1493230'>of</span> <span
  m='1493320'>this</span> <span m='1493470'>triangle</span> <span
  m='1493910'>in</span> <span m='1494050'>terms</span> <span
  m='1494390'>of</span> <span m='1494580'>x.</span> <span m='1495500'>And
  what</span> <span m='1495700'>I</span> <span m='1495770'>know</span> <span
  m='1496020'>is,</span> <span m='1496320'>x is the</span> <span
  m='1496790'>tangent of</span> <span m='1497250'>theta.</span> <span
  m='1498670'>So</span> <span m='1498880'>the</span> <span
  m='1498970'>tangent</span> <span m='1499400'>of</span> <span
  m='1499520'>theta,</span> <span m='1500270'>tangent of</span> <span
  m='1500760'>this</span> <span m='1500950'>angle,</span> <span
  m='1501310'>is</span> <span m='1501730'>opposite</span> <span
  m='1502300'>divided</span> <span m='1502690'>by</span> <span
  m='1502860'>adjacent.</span> <span m='1503830'>Did you</span> <span
  m='1504000'>learn</span> <span m='1504240'>SOH CAH TOA?</span> <span
  m='1505890'>OK,</span> <span m='1506250'>so</span> <span
  m='1506490'>it's</span> <span m='1506640'>opposite</span> <span
  m='1507140'>divided</span> <span m='1507580'>by</span> <span
  m='1507780'>adjacent.</span> <span m='1509520'>Is</span> <span m='1509750'>the
  tangent.</span> <span m='1510580'>So</span> <span m='1511700'>there are</span>
  <span m='1512540'>different</span> <span m='1512950'>ways</span> <span
  m='1513180'>to</span> <span m='1513270'>do</span> <span
  m='1513410'>that,</span> <span m='1513650'>but</span> <span
  m='1513770'>why</span> <span m='1513940'>not</span> <span
  m='1514150'>just</span> <span m='1514380'>do</span> <span
  m='1514510'>it</span> <span m='1514610'>in</span> <span m='1514690'>the</span>
  <span m='1514770'>simplest</span> <span m='1515320'>way</span> <span
  m='1515530'>and</span> <span m='1515740'>suppose</span> <span
  m='1516010'>that</span> <span m='1516150'>the</span> <span
  m='1516280'>adjacent</span> <span m='1516830'>is</span> <span
  m='1516980'>1,</span> <span m='1517970'>and</span> <span
  m='1518090'>the</span> <span m='1518190'>opposite</span> <span
  m='1518530'>is</span> <span m='1518650'>x.</span> </p><p><span
  m='1521950'>This</span> <span m='1522160'>is</span> <span
  m='1522990'>correct</span> <span m='1523500'>now,</span> <span
  m='1523740'>isn't</span> <span m='1523950'>it?</span> <span
  m='1524530'>I</span> <span m='1524630'>get</span> <span m='1524800'>the</span>
  <span m='1524890'>correct</span> <span m='1526150'>value</span> <span
  m='1526600'>for</span> <span m='1526740'>the</span> <span
  m='1526830'>tangent</span> <span m='1527240'>of</span> <span
  m='1527330'>theta</span> <span m='1527890'>by</span> <span
  m='1528210'>saying</span> <span m='1528550'>that</span> <span
  m='1528670'>the</span> <span m='1528770'>lengths</span> <span
  m='1529180'>of</span> <span m='1529320'>those</span> <span
  m='1529620'>are</span> <span m='1530360'>1</span> <span m='1531180'>and</span>
  <span m='1531470'>x.</span> <span m='1532910'>And</span> <span
  m='1533090'>that</span> <span m='1533230'>means</span> <span
  m='1533500'>that</span> <span m='1533650'>the</span> <span
  m='1533860'>hypotenuse</span> <span m='1534380'>has</span> <span
  m='1534640'>length</span> <span m='1534950'>1</span> <span
  m='1536040'>+</span> <span m='1536770'>x^2.</span> <span
  m='1539160'>Well,</span> <span m='1539400'>here's</span> <span
  m='1539720'>a</span> <span m='1539780'>triangle.</span> <span
  m='1540840'>I'm</span> <span m='1541070'>interested</span> <span
  m='1541550'>in</span> <span m='1541650'>computing</span> <span
  m='1542110'>the</span> <span m='1542450'>cosecant</span> <span
  m='1542590'>of</span> <span m='1543010'>theta.</span> <span
  m='1544060'>Where's</span> <span m='1544450'>that</span> <span
  m='1544680'>appear</span> <span m='1545370'>in</span> <span
  m='1545530'>the</span> <span m='1545610'>triangle?</span> <span
  m='1550840'>Well,</span> <span m='1551180'>let's</span> <span
  m='1551370'>see.</span> <span m='1551510'>The</span> <span
  m='1551610'>cosecant</span> <span m='1551870'>of</span> <span
  m='1551990'>theta</span> <span m='1553490'>is</span> <span
  m='1553800'>1</span> <span m='1554050'>over</span> <span
  m='1554270'>the</span> <span m='1554400'>sine.</span> <span
  m='1555570'>And</span> <span m='1555710'>the</span> <span
  m='1555780'>sine</span> <span m='1556550'>is</span> <span
  m='1559210'>opposite</span> <span m='1559730'>over</span> <span
  m='1560040'>hypotenuse.</span> <span m='1562830'>So</span> <span
  m='1563070'>the</span> <span m='1563180'>cosecant</span> <span
  m='1564070'>is</span> <span m='1564500'>hypotenuse</span> <span
  m='1565990'>over</span> <span m='1566640'>opposite.</span> <span
  m='1575240'>And</span> <span m='1576530'>the</span> <span
  m='1576630'>hypotenuse</span> <span m='1577490'>is</span> <span
  m='1577800'>the</span> <span m='1577930'>square</span> <span
  m='1578230'>root</span> <span m='1578420'>of</span> <span m='1578520'>1</span>
  <span m='1578720'>+</span> <span m='1578950'>x^2,</span> <span
  m='1580680'>and</span> <span m='1580950'>the</span> <span
  m='1581930'>opposite</span> <span m='1583560'>is</span> <span
  m='1584030'>x.</span> <span m='1584680'>And</span> <span m='1584960'>so</span>
  <span m='1585380'>I've</span> <span m='1585640'>done</span> <span
  m='1585860'>it.</span> <span m='1586200'>I've</span> <span
  m='1586450'>undone</span> <span m='1587920'>the</span> <span
  m='1588030'>trig</span> <span m='1588510'>substitution.</span> <span
  m='1589650'>I've</span> <span m='1589790'>figured</span> <span
  m='1590220'>out</span> <span m='1590480'>what</span> <span
  m='1590700'>this</span> <span m='1590910'>cosecant</span> <span
  m='1591320'>of</span> <span m='1591830'>theta</span> <span
  m='1592100'>is,</span> <span m='1593030'>in</span> <span
  m='1593190'>terms</span> <span m='1593650'>of</span> <span
  m='1593970'>x.</span> <span m='1595360'>And</span> <span m='1595550'>so</span>
  <span m='1595730'>the</span> <span m='1595840'>final</span> <span
  m='1596150'>answer</span> <span m='1596560'>is</span> <span
  m='1596980'>minus</span> <span m='1597930'>the square</span> <span
  m='1598340'>root</span> <span m='1598610'>of</span> <span
  m='1598730'>1+x^2,</span> <span m='1599490'>over</span> <span
  m='1600170'>x,</span> <span m='1601450'>plus</span> <span m='1601690'>a</span>
  <span m='1601760'>constant,</span> <span m='1602670'>and</span> <span
  m='1602800'>there's</span> <span m='1602990'>an</span> <span
  m='1603090'>answer</span> <span m='1603470'>to</span> <span
  m='1603610'>the</span> <span m='1603740'>original</span> <span
  m='1606170'>problem.</span> </p><p><span m='1613030'>This</span> <span
  m='1614580'>took</span> <span m='1614850'>two</span> <span
  m='1615020'>boards</span> <span m='1615500'>to</span> <span
  m='1615610'>go</span> <span m='1615760'>through</span> <span
  m='1616030'>this.</span> <span m='1617160'>I</span> <span
  m='1617550'>illustrated</span> <span m='1617860'>several</span> <span
  m='1618190'>things.</span> <span m='1620800'>Actually,</span> <span
  m='1621130'>this</span> <span m='1621590'>three</span> <span
  m='1621870'>half</span> <span m='1622200'>boards.</span> <span
  m='1622870'>I</span> <span m='1623010'>illustrated</span> <span
  m='1623620'>this</span> <span m='1623810'>use</span> <span
  m='1624040'>of</span> <span m='1624130'>trig</span> <span
  m='1624380'>substitution,</span> <span m='1625190'>and</span> <span
  m='1625330'>I'll</span> <span m='1625460'>come</span> <span
  m='1625620'>back</span> <span m='1625820'>to</span> <span
  m='1625910'>that</span> <span m='1626110'>in a</span> <span
  m='1626260'>second.</span> <span m='1627910'>I</span> <span
  m='1628240'>illustrated</span> <span m='1629260'>patience.</span> <span
  m='1630870'>I</span> <span m='1631060'>illustrated</span> <span
  m='1632550'>rewriting</span> <span m='1633100'>things</span> <span
  m='1633420'>in</span> <span m='1633510'>terms</span> <span
  m='1633810'>of</span> <span m='1633920'>sines</span> <span
  m='1634240'>and</span> <span m='1634570'>cosines,</span> <span
  m='1635320'>and</span> <span m='1635510'>then</span> <span
  m='1635620'>making</span> <span m='1635930'>a</span> <span
  m='1635990'>direct</span> <span m='1636380'>substitution</span> <span
  m='1637080'>to</span> <span m='1637460'>evaluate</span> <span m='1638090'>an
  integral</span> <span m='1638440'>like</span> <span m='1638640'>this.</span>
  <span m='1639550'>And</span> <span m='1639740'>then</span> <span
  m='1639880'>there's</span> <span m='1640090'>this</span> <span
  m='1640360'>undoing</span> <span m='1640990'>all</span> <span
  m='1641190'>of</span> <span m='1641350'>those</span> <span
  m='1641540'>substitutions.</span> <span m='1643520'>And</span> <span
  m='1643660'>it</span> <span m='1643760'>culminated</span> <span
  m='1644310'>with</span> <span m='1644450'>undoing</span> <span
  m='1644970'>the</span> <span m='1645060'>trig</span> <span
  m='1645440'>sub.</span> <span m='1645670'>So</span> <span
  m='1646660'>let's</span> <span m='1646850'>play</span> <span
  m='1647050'>a</span> <span m='1647100'>game</span> <span
  m='1647420'>here.</span> <span m='1651100'>Why</span> <span
  m='1651280'>don't</span> <span m='1651360'>we</span> <span
  m='1653090'>play</span> <span m='1653280'>the</span> <span
  m='1653370'>game</span> <span m='1653660'>where</span> <span
  m='1654860'>you</span> <span m='1655070'>give</span> <span
  m='1655360'>me--</span> <span m='1657680'>So,</span> <span
  m='1663880'>there's</span> <span m='1664620'>a</span> <span
  m='1664720'>step</span> <span m='1665120'>in</span> <span
  m='1665210'>here</span> <span m='1665400'>that</span> <span
  m='1665560'>I</span> <span m='1665610'>should</span> <span
  m='1665820'>have</span> <span m='1665930'>done.</span> <span
  m='1666970'>I</span> <span m='1667070'>should've</span> <span
  m='1667420'>said</span> <span m='1668170'>this</span> <span
  m='1668870'>is</span> <span m='1672260'>-cos(arctan(theta))</span> <span
  m='1675700'>plus</span> <span m='1676390'>a</span> <span
  m='1676670'>constant.</span> <span m='1678960'>The</span> <span
  m='1679070'>most</span> <span m='1679290'>straightforward</span> <span
  m='1679850'>thing</span> <span m='1680010'>you</span> <span
  m='1680130'>can</span> <span m='1680250'>do</span> <span m='1680520'>is</span>
  <span m='1680740'>to</span> <span m='1680880'>say</span> <span
  m='1681120'>since</span> <span m='1681410'>x is</span> <span m='1681830'>the
  tangent</span> <span m='1682290'>of</span> <span m='1682360'>theta,</span>
  <span m='1682760'>that</span> <span m='1682940'>means</span> <span
  m='1683260'>that--</span> <span m='1684920'>sorry,</span> <span m='1685260'>if
  x,</span> <span m='1685980'>that</span> <span m='1686140'>means</span> <span
  m='1686370'>that</span> <span m='1686500'>theta</span> <span
  m='1686950'>is</span> <span m='1687140'>the</span> <span
  m='1687410'>arctangent</span> <span m='1687970'>of</span> <span
  m='1688090'>x.</span> <span m='1688970'>And</span> <span m='1689110'>so</span>
  <span m='1689280'>let's</span> <span m='1689490'>just</span> <span
  m='1689760'>put</span> <span m='1689950'>in</span> <span
  m='1690120'>theta</span> <span m='1690550'>as</span> <span
  m='1690830'>the</span> <span m='1691020'>arctangent</span> <span
  m='1691500'>of x,</span> <span m='1691950'>and</span> <span
  m='1692050'>that's</span> <span m='1692250'>what</span> <span
  m='1692390'>you</span> <span m='1692510'>get.</span> <span
  m='1692760'>So</span> <span m='1692940'>really,</span> <span
  m='1693250'>what</span> <span m='1693390'>I</span> <span
  m='1693450'>just</span> <span m='1693720'>did</span> <span
  m='1693930'>for</span> <span m='1694130'>you</span> <span
  m='1695020'>was</span> <span m='1695340'>to</span> <span
  m='1695440'>show</span> <span m='1695640'>you</span> <span
  m='1695810'>a</span> <span m='1695870'>way</span> <span m='1696060'>to</span>
  <span m='1696190'>compute</span> <span m='1696620'>some</span> <span
  m='1696890'>trig</span> <span m='1698300'>function</span> <span
  m='1699270'>applied</span> <span m='1699720'>to</span> <span
  m='1699900'>the</span> <span m='1700890'>inverse</span> <span
  m='1701410'>of</span> <span m='1701510'>another</span> <span
  m='1701790'>trig</span> <span m='1702060'>function.</span> <span
  m='1703900'>I</span> <span m='1704010'>computed</span> <span
  m='1705020'>cosecant</span> <span m='1705550'>of</span> <span
  m='1705930'>the</span> <span m='1706020'>arctangent</span> <span
  m='1707150'>by</span> <span m='1707350'>this</span> <span
  m='1707560'>trick.</span> </p><p><span m='1709860'>So</span> <span
  m='1710090'>now,</span> <span m='1710320'>let's</span> <span
  m='1710550'>play</span> <span m='1710730'>the</span> <span
  m='1710830'>game</span> <span m='1711180'>where</span> <span
  m='1711310'>you</span> <span m='1711480'>give</span> <span
  m='1711710'>me</span> <span m='1712260'>a</span> <span m='1712770'>trig</span>
  <span m='1713500'>function</span> <span m='1713980'>and</span> <span
  m='1714200'>an</span> <span m='1714310'>inverse</span> <span
  m='1714670'>trig</span> <span m='1714900'>function, and</span> <span
  m='1715400'>I</span> <span m='1715540'>try</span> <span m='1715750'>to</span>
  <span m='1715850'>compute</span> <span m='1716270'>what</span> <span
  m='1717190'>the</span> <span m='1717310'>composite</span> <span
  m='1717810'>is.</span> <span m='1726950'>OK.</span> <span
  m='1727510'>So</span> <span m='1736280'>who</span> <span
  m='1736580'>can</span> <span m='1736740'>give</span> <span
  m='1736900'>me</span> <span m='1737020'>a</span> <span m='1737080'>trig</span>
  <span m='1737310'>function.</span> <span m='1738530'>Has</span> <span
  m='1738760'>to</span> <span m='1738840'>be</span> <span m='1738920'>one</span>
  <span m='1739100'>of</span> <span m='1739170'>these</span> <span
  m='1739720'>standard</span> <span m='1740070'>ones.</span> </p><p><span
  m='1743310'>STUDENT: Tan.</span> </p><p><span m='1743900'>PROFESSOR:
  Tangent.</span> <span m='1744870'>Alright.</span> <span m='1747180'>How</span>
  <span m='1747280'>about</span> <span m='1747440'>another</span> <span
  m='1747720'>one?</span> </p><p><span m='1747950'>STUDENT: Sine.</span>
  </p><p><span m='1751120'>PROFESSOR: Sine.</span> <span m='1752350'>Do</span>
  <span m='1752440'>we</span> <span m='1752680'>have</span> <span
  m='1752980'>agreement</span> <span m='1753260'>on</span> <span
  m='1753340'>sine.</span> </p><p><span m='1755180'>STUDENT: [INAUDIBLE]</span>
  </p><p><span m='1756910'>PROFESSOR: Secant?</span> </p><p><span
  m='1757760'>STUDENT: [INAUDIBLE]</span> </p><p><span m='1768530'>PROFESSOR:
  Right,</span> <span m='1768870'>csc</span> <span m='1768930'>has the</span>
  <span m='1769130'>best cheer.</span> <span m='1769510'>So that's the
  game.</span> <span m='1769580'>We have</span> <span m='1769710'>to</span>
  <span m='1769800'>compute,</span> <span m='1770180'>try</span> <span
  m='1770340'>to</span> <span m='1770430'>compute,</span> <span
  m='1770800'>that</span> <span m='1771010'>composite.</span> <span
  m='1775050'>Something</span> <span m='1775350'>wrong</span> <span
  m='1775490'>with</span> <span m='1775640'>this?</span> </p><p><span
  m='1775950'>STUDENT: [INAUDIBLE]</span> </p><p><span m='1785640'>PROFESSOR:
  What</span> <span m='1785790'>does</span> <span m='1785880'>acceptable</span>
  <span m='1786430'>mean?</span> <span m='1787000'>Don't</span> <span
  m='1787240'>you</span> <span m='1787370'>think--</span> <span
  m='1788050'>so</span> <span m='1788210'>the</span> <span
  m='1788290'>question</span> <span m='1788640'>is,</span> <span
  m='1788810'>isn't</span> <span m='1789250'>this</span> <span
  m='1789460'>a</span> <span m='1789530'>perfectly</span> <span
  m='1790000'>acceptable</span> <span m='1790570'>final</span> <span
  m='1790910'>answer.</span> <span m='1791900'>It's</span> <span
  m='1792160'>a</span> <span m='1792250'>correct</span> <span
  m='1792720'>final</span> <span m='1793070'>answer.</span> <span
  m='1793760'>But</span> <span m='1794360'>this</span> <span
  m='1794560'>is</span> <span m='1794690'>much</span> <span
  m='1794990'>more</span> <span m='1795790'>insightful.</span> <span
  m='1796850'>And</span> <span m='1798170'>after</span> <span
  m='1798490'>all</span> <span m='1798630'>the</span> <span
  m='1798740'>original</span> <span m='1799280'>thing</span> <span
  m='1799650'>was</span> <span m='1799870'>involving</span> <span
  m='1800390'>square</span> <span m='1800660'>roots</span> <span
  m='1800940'>and</span> <span m='1801070'>things,</span> <span
  m='1801400'>this</span> <span m='1801570'>is</span> <span
  m='1801690'>the</span> <span m='1801860'>kind</span> <span
  m='1802160'>of</span> <span m='1802270'>thing</span> <span
  m='1802460'>you</span> <span m='1802550'>might</span> <span
  m='1802780'>hope</span> <span m='1803090'>for</span> <span
  m='1803370'>is</span> <span m='1803470'>an answer.</span> <span
  m='1803920'>This</span> <span m='1804090'>is</span> <span
  m='1804290'>just</span> <span m='1804540'>a</span> <span
  m='1804590'>nicer</span> <span m='1805190'>answer</span> <span
  m='1805580'>for</span> <span m='1805740'>sure.</span> <span
  m='1807720'>And</span> <span m='1807970'>likely</span> <span m='1808170'>to
  be</span> <span m='1808470'>more</span> <span m='1808660'>useful</span> <span
  m='1809100'>to</span> <span m='1809260'>you</span> <span
  m='1809480'>when</span> <span m='1809780'>you</span> <span
  m='1809860'>go</span> <span m='1810020'>on</span> <span m='1810210'>and</span>
  <span m='1810340'>use</span> <span m='1810580'>that</span> <span
  m='1810740'>answer</span> <span m='1811030'>for</span> <span
  m='1811150'>something</span> <span m='1811510'>else.</span> <span
  m='1813830'>OK,</span> <span m='1814180'>so</span> <span
  m='1814380'>let's</span> <span m='1814570'>try</span> <span
  m='1814760'>to</span> <span m='1815080'>do</span> <span
  m='1815380'>this</span> <span m='1816180'>this.</span> <span
  m='1818610'>Undo</span> <span m='1819070'>a</span> <span
  m='1819150'>trig</span> <span m='1819430'>substitution</span> <span
  m='1820050'>that</span> <span m='1820340'>involved</span> <span
  m='1820690'>a</span> <span m='1821040'>cosecant.</span> <span
  m='1822260'>And</span> <span m='1822500'>I</span> <span
  m='1822560'>manipulate</span> <span m='1823160'>around,</span> <span
  m='1823460'>and</span> <span m='1823550'>I</span> <span
  m='1823610'>find</span> <span m='1823910'>myself</span> <span
  m='1824340'>trying</span> <span m='1824640'>to</span> <span
  m='1824810'>find</span> <span m='1825110'>out</span> <span
  m='1825240'>what's</span> <span m='1825540'>the</span> <span
  m='1825640'>tangent</span> <span m='1826180'>of</span> <span
  m='1826310'>theta.</span> <span m='1827540'>So</span> <span
  m='1827950'>here's</span> <span m='1828150'>how</span> <span
  m='1828300'>we</span> <span m='1828390'>go</span> <span
  m='1828560'>about</span> <span m='1828820'>it.</span> <span
  m='1829240'>I</span> <span m='1829400'>draw</span> <span
  m='1829650'>this</span> <span m='1829810'>triangle.</span> <span
  m='1833970'>Theta</span> <span m='1834500'>is</span> <span
  m='1834670'>the</span> <span m='1834800'>angle</span> <span
  m='1835150'>here.</span> <span m='1837590'>This</span> <span
  m='1837760'>is</span> <span m='1837860'>the</span> <span
  m='1837960'>adjacent,</span> <span m='1839340'>opposite,</span> <span
  m='1840770'>hypotenuse.</span> <span m='1843570'>So,</span> <span
  m='1844130'>the</span> <span m='1844230'>first</span> <span
  m='1844520'>thing</span> <span m='1844830'>is</span> <span
  m='1845160'>how</span> <span m='1845360'>can</span> <span m='1845500'>I</span>
  <span m='1845940'>make</span> <span m='1846230'>the</span> <span
  m='1846610'>cosecant</span> <span m='1847090'>appear</span> <span
  m='1847200'>here,</span> <span m='1849030'>csc</span> <span
  m='1849540'>x.</span> <span m='1849950'>What</span> <span
  m='1850150'>dimensions</span> <span m='1850790'>should</span> <span
  m='1850990'>I</span> <span m='1851060'>give</span> <span m='1851380'>to</span>
  <span m='1851520'>the</span> <span m='1851650'>sides</span> <span
  m='1852270'>in</span> <span m='1852400'>order</span> <span
  m='1852640'>for</span> <span m='1852780'>the</span> <span
  m='1852870'>cosecant</span> <span m='1853280'>of</span> <span
  m='1853600'>x,</span> <span m='1859720'>sorry,</span> <span
  m='1860130'>in</span> <span m='1860210'>order</span> <span
  m='1860940'>for</span> <span m='1861090'>theta</span> <span
  m='1861400'>to</span> <span m='1861650'>be</span> <span m='1861800'>the</span>
  <span m='1862170'>cosecant</span> <span m='1862500'>of x.</span> <span
  m='1862880'>This</span> <span m='1863030'>thing</span> <span
  m='1863230'>is</span> <span m='1863390'>theta.</span> <span
  m='1865280'>So,</span> <span m='1865720'>that</span> <span
  m='1865910'>means</span> <span m='1866150'>that</span> <span
  m='1869390'>the</span> <span m='1871490'>cosecant</span> <span
  m='1874860'>of</span> <span m='1875050'>x--</span> <span
  m='1877810'>that</span> <span m='1877960'>means</span> <span
  m='1878130'>the</span> <span m='1878240'>cosecant</span> <span
  m='1878560'>of</span> <span m='1878820'>theta</span> <span
  m='1879180'>should</span> <span m='1879360'>be</span> <span
  m='1879510'>x.</span> <span m='1884830'>Theta</span> <span
  m='1885090'>is</span> <span m='1885260'>the</span> <span
  m='1885350'>arccosecant,</span> <span m='1886220'>so</span> <span
  m='1886560'>x</span> <span m='1887400'>is</span> <span m='1887660'>the</span>
  <span m='1887900'>cosecant</span> <span m='1888230'>of</span> <span
  m='1888690'>theta.</span> <span m='1888970'>So,</span> <span
  m='1889410'>what'll</span> <span m='1889650'>I</span> <span
  m='1889750'>take</span> <span m='1890080'>the</span> <span
  m='1890330'>sides</span> <span m='1890860'>to be,</span> <span
  m='1891180'>to</span> <span m='1891290'>get</span> <span
  m='1891470'>the</span> <span m='1891570'>cosecant?</span> <span
  m='1891980'>The</span> <span m='1892110'>cosecant</span> <span
  m='1892390'>is</span> <span m='1892630'>1</span> <span m='1892740'>over</span>
  <span m='1894680'>the sine.</span> <span m='1897050'>And</span> <span
  m='1897240'>the</span> <span m='1897310'>sine</span> <span
  m='1902870'>is</span> <span m='1903090'>the</span> <span
  m='1903350'>opposite</span> <span m='1904030'>over</span> <span
  m='1904360'>the</span> <span m='1905140'>hypotenuse.</span> <span
  m='1907960'>So</span> <span m='1908220'>I</span> <span m='1908330'>get</span>
  <span m='1908670'>hypotenuse</span> <span m='1909160'>over</span> <span
  m='1909420'>opposite.</span> <span m='1909910'>And</span> <span
  m='1910030'>that's</span> <span m='1910200'>supposed</span> <span
  m='1910540'>to</span> <span m='1910620'>be</span> <span
  m='1910710'>what</span> <span m='1910900'>x is.</span> <span
  m='1913750'>So</span> <span m='1915010'>I</span> <span
  m='1915150'>could</span> <span m='1915340'>make</span> <span
  m='1915580'>the</span> <span m='1915690'>opposite</span> <span
  m='1916180'>anything</span> <span m='1916540'>I</span> <span
  m='1916640'>want,</span> <span m='1917380'>but</span> <span
  m='1917600'>the</span> <span m='1917700'>simplest</span> <span
  m='1918130'>thing is</span> <span m='1918400'>to</span> <span
  m='1918510'>make</span> <span m='1918700'>it</span> <span
  m='1918810'>1.</span> <span m='1919190'>Let's</span> <span
  m='1919430'>do</span> <span m='1919590'>that.</span> <span
  m='1920080'>And</span> <span m='1920400'>then</span> <span
  m='1920530'>what</span> <span m='1920650'>does</span> <span
  m='1920760'>that</span> <span m='1920910'>mean</span> <span
  m='1921500'>about</span> <span m='1921740'>the</span> <span
  m='1921810'>rest</span> <span m='1922060'>of</span> <span
  m='1922150'>the</span> <span m='1922240'>sides?</span> <span
  m='1924300'>Hypotenuse</span> <span m='1924710'>had</span> <span
  m='1925000'>better</span> <span m='1925210'>be x.</span> <span m='1926270'>And
  then</span> <span m='1926450'>I've</span> <span m='1926650'>recovered</span>
  <span m='1927120'>this.</span> <span m='1927350'>So</span> <span
  m='1927570'>here's</span> <span m='1927880'>a</span> <span
  m='1927940'>triangle</span> <span m='1928840'>that</span> <span
  m='1928960'>exhibits the</span> <span m='1929590'>correct</span> <span
  m='1930110'>angle.</span> <span m='1932350'>This</span> <span
  m='1932500'>remaining</span> <span m='1932930'>side</span> <span
  m='1933250'>is</span> <span m='1933370'>going to</span> <span
  m='1933570'>be</span> <span m='1933640'>useful</span> <span
  m='1933990'>to</span> <span m='1934200'>us.</span> <span
  m='1934680'>And</span> <span m='1934950'>it</span> <span m='1935100'>is</span>
  <span m='1937090'>the</span> <span m='1937540'>square root</span> <span
  m='1938020'>of</span> <span m='1938350'>x^2 - 1.</span> </p><p><span
  m='1940550'>So</span> <span m='1940970'>I've</span> <span
  m='1941200'>got</span> <span m='1941410'>a</span> <span
  m='1941480'>triangle</span> <span m='1942210'>of</span> <span
  m='1942790'>the</span> <span m='1942890'>correct</span> <span
  m='1943300'>angle</span> <span m='1943590'>theta,</span> <span
  m='1944060'>and</span> <span m='1944220'>now</span> <span m='1944370'>I</span>
  <span m='1944440'>want</span> <span m='1944650'>to</span> <span
  m='1944710'>compute the</span> <span m='1945110'>tangent</span> <span
  m='1946110'>of</span> <span m='1946260'>that</span> <span
  m='1946460'>angle.</span> <span m='1947400'>Well,</span> <span
  m='1947500'>that's</span> <span m='1947710'>easy.</span> <span
  m='1948350'>That's</span> <span m='1948700'>opposite</span> <span
  m='1949260'>divided</span> <span m='1949690'>by</span> <span
  m='1949890'>adjacent.</span> <span m='1951020'>So</span> <span
  m='1951150'>I</span> <span m='1951250'>get</span> <span m='1951490'>1</span>
  <span m='1952370'>over</span> <span m='1952630'>the</span> <span
  m='1952730'>square</span> <span m='1953030'>root of</span> <span
  m='1954400'>x^2 - 1.</span> <span m='1958270'>Very</span> <span
  m='1958510'>flexible</span> <span m='1959010'>tool</span> <span
  m='1959600'>that'll</span> <span m='1959870'>be</span> <span
  m='1959990'>useful</span> <span m='1960320'>to</span> <span m='1960460'>you
  in</span> <span m='1960720'>many</span> <span m='1960940'>different</span>
  <span m='1961910'>times.</span> <span m='1962200'>Whenever</span> <span
  m='1962510'>you</span> <span m='1962610'>have</span> <span
  m='1962770'>to</span> <span m='1962870'>undo</span> <span m='1963210'>a</span>
  <span m='1963310'>trig</span> <span m='1963580'>substitution,</span> <span
  m='1964170'>this</span> <span m='1965230'>is</span> <span
  m='1965320'>likely</span> <span m='1965660'>to</span> <span
  m='1965750'>be</span> <span m='1966040'>useful.</span> </p><p><span
  m='1969100'>OK,</span> <span m='1970450'>that</span> <span
  m='1970580'>was</span> <span m='1970680'>a</span> <span
  m='1970740'>good</span> <span m='1970880'>game.</span> <span
  m='1971750'>No</span> <span m='1971920'>winners</span> <span
  m='1972260'>in</span> <span m='1972350'>this</span> <span
  m='1972510'>game.</span> <span m='1972740'>We're all</span> <span
  m='1972970'>winners.</span> <span m='1973700'>No</span> <span
  m='1973880'>losers,</span> <span m='1974290'>we're all winners.</span> <span
  m='1981970'>OK.</span> <span m='1982740'>So,</span> <span
  m='1984530'>good.</span> <span m='1986340'>So</span> <span
  m='1986540'>let</span> <span m='1986680'>me</span> <span
  m='1986760'>make</span> <span m='1986970'>this</span> <span
  m='1987130'>table</span> <span m='1987610'>of</span> <span
  m='1987730'>the</span> <span m='1987810'>different</span> <span
  m='1988120'>trig</span> <span m='1988430'>substitutions,</span> <span
  m='1989810'>and</span> <span m='1989970'>how</span> <span
  m='1990140'>they</span> <span m='1990300'>can</span> <span
  m='1990440'>be</span> <span m='1990540'>useful.</span> <span
  m='1991010'>Summary</span> <span m='1991530'>of</span> <span
  m='1998690'>trig</span> <span m='1998980'>substitutions.</span> <span
  m='2000520'>So</span> <span m='2000690'>over</span> <span
  m='2000890'>here,</span> <span m='2001210'>we</span> <span
  m='2001370'>have,</span> <span m='2004120'>if</span> <span
  m='2004330'>you</span> <span m='2004480'>see,</span> <span
  m='2008540'>so</span> <span m='2008770'>if</span> <span
  m='2008960'>your</span> <span m='2009250'>integrand</span> <span
  m='2010690'>contains,</span> <span m='2025240'>make</span> <span
  m='2025450'>a</span> <span m='2025510'>substitution</span> <span
  m='2034010'>to</span> <span m='2034180'>get.</span> <span
  m='2038090'>So</span> <span m='2038440'>if</span> <span
  m='2038600'>your</span> <span m='2038730'>integrand</span> <span
  m='2039250'>contains,</span> <span m='2040910'>I'll</span> <span
  m='2041150'>write</span> <span m='2041400'>these</span> <span
  m='2041600'>things</span> <span m='2041840'>out</span> <span
  m='2042000'>as</span> <span m='2042150'>square roots.</span> <span
  m='2042710'>If it</span> <span m='2042840'>contains</span> <span
  m='2043350'>the</span> <span m='2043860'>square</span> <span
  m='2044220'>root</span> <span m='2044890'>a^2</span> <span
  m='2045360'>-</span> <span m='2045770'>x^2,</span> <span
  m='2047670'>this</span> <span m='2047880'>is</span> <span
  m='2047980'>what</span> <span m='2048130'>we</span> <span
  m='2048230'>talked</span> <span m='2048520'>about</span> <span
  m='2048760'>on</span> <span m='2048910'>Thursday.</span> <span
  m='2050560'>When</span> <span m='2050770'>I</span> <span
  m='2050850'>was</span> <span m='2051020'>trying</span> <span
  m='2051280'>to</span> <span m='2051400'>find</span> <span
  m='2051680'>the</span> <span m='2051790'>area of</span> <span
  m='2052390'>that</span> <span m='2052590'>piece</span> <span
  m='2052810'>of</span> <span m='2052890'>a</span> <span
  m='2052980'>circle.</span> <span m='2054470'>There,</span> <span
  m='2055260'>I</span> <span m='2055410'>suggested</span> <span
  m='2056040'>that</span> <span m='2056170'>we</span> <span
  m='2056270'>should</span> <span m='2056430'>make</span> <span
  m='2056710'>the</span> <span m='2057130'>substitution</span> <span
  m='2058130'>x</span> <span m='2059050'>=</span> <span m='2059290'>a</span>
  <span m='2059780'>cos(theta).</span> <span m='2062890'>Or,</span> <span
  m='2065930'>x</span> <span m='2066680'>= a</span> <span
  m='2067530'>sin(theta).</span> <span m='2068920'>Either</span> <span
  m='2069180'>one</span> <span m='2070310'>works</span> <span
  m='2070640'>just</span> <span m='2070930'>as</span> <span
  m='2071040'>well.</span> <span m='2071400'>And</span> <span
  m='2071540'>there's</span> <span m='2071730'>no</span> <span
  m='2071870'>way</span> <span m='2072050'>to</span> <span
  m='2072220'>prefer</span> <span m='2072620'>one</span> <span
  m='2072810'>over</span> <span m='2072980'>the</span> <span
  m='2073120'>other.</span> <span m='2076430'>And</span> <span
  m='2076690'>when</span> <span m='2076830'>you</span> <span
  m='2076930'>make</span> <span m='2077170'>the</span> <span
  m='2077290'>substitution,</span> <span m='2078400'>x =</span> <span
  m='2079170'>a</span> <span m='2080460'>cos(theta),</span> <span
  m='2081110'>you</span> <span m='2081220'>get</span> <span
  m='2081640'>a^2</span> <span m='2082410'>-</span> <span m='2082910'>a^2
  cos^2(theta).</span> <span m='2084030'>theta.</span> <span
  m='2085340'>1</span> <span m='2085570'>-</span> <span m='2085850'>cos^2</span>
  <span m='2086250'>is</span> <span m='2086890'>sin^2.</span> <span
  m='2088280'>So</span> <span m='2088410'>you</span> <span
  m='2088530'>get</span> <span m='2088780'>a sin(theta).</span> <span
  m='2095270'>So</span> <span m='2095990'>this</span> <span
  m='2096240'>expression</span> <span m='2096910'>becomes</span> <span
  m='2097410'>equal</span> <span m='2097950'>to</span> <span
  m='2098570'>this</span> <span m='2098880'>expression</span> <span
  m='2099880'>under</span> <span m='2100660'>that</span> <span
  m='2102040'>substitution.</span> <span m='2103950'>And</span> <span
  m='2104150'>then</span> <span m='2104250'>you</span> <span
  m='2104350'>go</span> <span m='2104470'>on.</span> <span
  m='2104800'>Then</span> <span m='2104910'>you've</span> <span
  m='2105050'>gotten</span> <span m='2105320'>rid</span> <span
  m='2105470'>of</span> <span m='2105570'>the</span> <span
  m='2105670'>square</span> <span m='2105940'>root,</span> <span
  m='2106660'>and</span> <span m='2106860'>you've</span> <span
  m='2106980'>got</span> <span m='2107130'>a</span> <span
  m='2107180'>trigonometric</span> <span m='2107880'>integral</span> <span
  m='2108250'>that</span> <span m='2108370'>you</span> <span
  m='2108500'>have</span> <span m='2108670'>to</span> <span
  m='2108760'>try</span> <span m='2108960'>to</span> <span
  m='2109080'>do.</span> <span m='2110610'>If</span> <span
  m='2110790'>you</span> <span m='2110890'>made</span> <span
  m='2111070'>the</span> <span m='2111170'>substitution</span> <span
  m='2111970'>a</span> <span m='2112280'>sin(theta),</span> <span
  m='2113140'>you'd</span> <span m='2113240'>get</span> <span
  m='2113510'>a</span> <span m='2113630'>a^2</span> <span m='2114060'>-</span>
  <span m='2114680'>a^2 sin^2,</span> <span m='2117560'>which</span> <span
  m='2118340'>is</span> <span m='2118880'>a cos(theta).</span> <span
  m='2121580'>And</span> <span m='2121790'>then</span> <span
  m='2121940'>you</span> <span m='2122070'>can</span> <span
  m='2122200'>go</span> <span m='2122370'>ahead</span> <span
  m='2122620'>as</span> <span m='2122740'>well.</span> <span
  m='2124530'>We</span> <span m='2124690'>just</span> <span
  m='2124940'>saw</span> <span m='2125230'>another</span> <span
  m='2125540'>example.</span> <span m='2126430'>Namely,</span> <span
  m='2126820'>if</span> <span m='2126930'>you</span> <span
  m='2127050'>have</span> <span m='2127620'>a^2 + x^2.</span> <span
  m='2129510'>That's</span> <span m='2129830'>like</span> <span
  m='2130080'>the</span> <span m='2130180'>example</span> <span
  m='2130640'>we</span> <span m='2130770'>had</span> <span m='2131480'>up</span>
  <span m='2131690'>here.</span> <span m='2132190'>a</span> <span
  m='2132550'>=</span> <span m='2132880'>1</span> <span m='2133420'>in</span>
  <span m='2133530'>this</span> <span m='2133680'>example.</span> <span
  m='2135530'>What</span> <span m='2135700'>did</span> <span
  m='2135770'>we</span> <span m='2135910'>do?</span> <span m='2136510'>We</span>
  <span m='2137510'>tried</span> <span m='2137780'>the</span> <span
  m='2137870'>substitution</span> <span m='2139090'>x =</span> <span
  m='2139310'>a tan(theta).</span> <span m='2142150'>And</span> <span
  m='2142300'>the</span> <span m='2142380'>reason</span> <span
  m='2142700'>is</span> <span m='2143100'>that</span> <span m='2143240'>I</span>
  <span m='2143310'>can</span> <span m='2143490'>plug</span> <span
  m='2143800'>into</span> <span m='2144050'>the</span> <span
  m='2144150'>trig</span> <span m='2144390'>identity</span> <span
  m='2144910'>up</span> <span m='2145060'>here</span> <span
  m='2145300'>in</span> <span m='2145420'>the</span> <span
  m='2145540'>upper</span> <span m='2145740'>left.</span> <span
  m='2146950'>And</span> <span m='2147170'>replace</span> <span m='2148280'>a^2
  + x^2</span> <span m='2149910'>by</span> <span m='2150490'>a
  sec(theta).</span> <span m='2155020'>Square</span> <span
  m='2155390'>root</span> <span m='2155770'>of</span> <span
  m='2156010'>the</span> <span m='2156630'>secant</span> <span
  m='2157010'>squared.</span> <span m='2159790'>There's</span> <span
  m='2160050'>one</span> <span m='2160270'>more</span> <span
  m='2161440'>thing</span> <span m='2162160'>in</span> <span
  m='2162340'>this</span> <span m='2162500'>table.</span> <span
  m='2163410'>Sort</span> <span m='2163790'>of,</span> <span
  m='2163880'>the</span> <span m='2163990'>only</span> <span
  m='2164500'>remaining</span> <span m='2165650'>sum or</span> <span
  m='2166130'>difference of</span> <span m='2166910'>terms</span> <span
  m='2167330'>like</span> <span m='2167550'>this.</span> <span
  m='2167820'>And</span> <span m='2167940'>that's</span> <span
  m='2168200'>what</span> <span m='2168350'>happens</span> <span
  m='2168720'>if</span> <span m='2168870'>you</span> <span
  m='2168940'>have</span> <span m='2169180'>x^2 - a^2.</span> <span
  m='2174050'>So</span> <span m='2174370'>there,</span> <span
  m='2174950'>I</span> <span m='2175200'>think</span> <span
  m='2175530'>we</span> <span m='2175640'>can</span> <span
  m='2175780'>make</span> <span m='2175980'>a</span> <span
  m='2176040'>substitution</span> <span m='2177620'>a sec(theta).</span> <span
  m='2181300'>Because,</span> <span m='2181660'>after</span> <span
  m='2181990'>all,</span> <span m='2182900'>sec^2(theta)--</span> <span
  m='2185660'>so</span> <span m='2187050'>x^2 - a^2--</span> <span
  m='2187370'>Sorry.</span> <span m='2192310'>Let's</span> <span
  m='2192440'>see</span> <span m='2192570'>what</span> <span
  m='2192680'>happens</span> <span m='2192990'>when</span> <span
  m='2193090'>I</span> <span m='2193150'>make</span> <span
  m='2193370'>that</span> <span m='2193470'>substitution.</span> <span
  m='2194790'>x^2 - a^2</span> <span m='2196030'>=</span> <span m='2198010'>a^2
  sec^2(theta)</span> <span m='2199310'>-</span> <span m='2199590'>a^2.</span>
  <span m='2202850'>Under</span> <span m='2203140'>this</span> <span
  m='2203270'>substitution.</span> <span m='2205460'>That's</span> <span
  m='2206380'>sec^2</span> <span m='2206700'>-</span> <span
  m='2207040'>1.</span> <span m='2208690'>Well,</span> <span
  m='2209330'>put</span> <span m='2209500'>the</span> <span m='2209590'>1</span>
  <span m='2209860'>on</span> <span m='2209980'>the</span> <span
  m='2210080'>other</span> <span m='2210260'>side.</span> <span
  m='2211390'>And</span> <span m='2211570'>you</span> <span
  m='2211650'>find</span> <span m='2212520'>tan^2,</span> <span
  m='2213020'>coming</span> <span m='2213320'>out.</span> <span
  m='2213720'>So</span> <span m='2213930'>this</span> <span
  m='2214120'>is</span> <span m='2214250'>a</span> <span m='2214410'>a^2</span>
  <span m='2216420'>tan^2(theta).</span> <span m='2219440'>And</span> <span
  m='2219640'>so</span> <span m='2219740'>that's</span> <span
  m='2219960'>what</span> <span m='2220070'>you</span> <span
  m='2220190'>get,</span> <span m='2220680'>a</span> <span
  m='2221400'>times</span> <span m='2221740'>tan(theta).</span> <span
  m='2222680'>After</span> <span m='2222960'>I</span> <span
  m='2223020'>take</span> <span m='2223250'>the</span> <span
  m='2223340'>square</span> <span m='2223630'>root,</span> <span
  m='2224450'>I</span> <span m='2224580'>get</span> <span m='2225530'>a
  tan(theta).</span> <span m='2227850'>So</span> <span m='2228220'>these</span>
  <span m='2228300'>are</span> <span m='2229010'>the</span> <span
  m='2229110'>three</span> <span m='2229540'>basic</span> <span
  m='2230800'>trig</span> <span m='2231680'>substitution</span> <span
  m='2232590'>forms.</span> <span m='2233080'>Where</span> <span
  m='2233240'>trig</span> <span m='2233580'>substitutions</span> <span
  m='2234150'>are</span> <span m='2234240'>useful</span> <span
  m='2235190'>to</span> <span m='2235400'>get</span> <span
  m='2235580'>rid</span> <span m='2235760'>of</span> <span
  m='2235830'>expressions</span> <span m='2236390'>like</span> <span
  m='2236600'>this,</span> <span m='2237110'>and</span> <span
  m='2237340'>replace</span> <span m='2237750'>them</span> <span
  m='2237920'>by</span> <span m='2238120'>trigonometric</span> <span
  m='2239060'>expressions.</span> <span m='2242670'>And</span> <span
  m='2242790'>then</span> <span m='2242890'>you use</span> <span
  m='2243140'>this</span> <span m='2243330'>trick,</span> <span
  m='2243770'>you</span> <span m='2243910'>do</span> <span
  m='2244070'>the</span> <span m='2244190'>integral</span> <span
  m='2244560'>if</span> <span m='2244670'>you</span> <span
  m='2244740'>can</span> <span m='2245140'>and</span> <span
  m='2245290'>then</span> <span m='2245420'>you use</span> <span
  m='2245740'>this</span> <span m='2245920'>trick</span> <span
  m='2246140'>to</span> <span m='2246250'>get</span> <span
  m='2246400'>rid</span> <span m='2246580'>of</span> <span
  m='2246670'>the</span> <span m='2246780'>theta</span> <span
  m='2247030'>at</span> <span m='2247210'>the</span> <span
  m='2247330'>end.</span> </p><p><span m='2257460'>So</span> <span
  m='2257650'>now,</span> <span m='2258130'>the</span> <span
  m='2258230'>last</span> <span m='2258540'>thing</span> <span
  m='2258690'>I</span> <span m='2258760'>want</span> <span m='2258980'>to</span>
  <span m='2259300'>talk</span> <span m='2259540'>about</span> <span
  m='2259790'>today</span> <span m='2260630'>is</span> <span
  m='2261360'>called</span> <span m='2261740'>completing the</span> <span
  m='2262420'>square.</span> <span m='2279180'>And</span> <span
  m='2279310'>that</span> <span m='2279460'>comes</span> <span
  m='2279740'>in</span> <span m='2279960'>because</span> <span
  m='2281600'>unfortunately,</span> <span m='2283440'>not</span> <span
  m='2285790'>every</span> <span m='2286690'>square</span> <span
  m='2287280'>root</span> <span m='2287550'>of</span> <span m='2287640'>a</span>
  <span m='2287700'>quadratic</span> <span m='2288350'>has</span> <span
  m='2288610'>such</span> <span m='2288810'>a</span> <span
  m='2288880'>simple</span> <span m='2289210'>form.</span> <span
  m='2290390'>You</span> <span m='2290590'>will</span> <span
  m='2290770'>often</span> <span m='2292000'>encounter</span> <span
  m='2292530'>things</span> <span m='2294890'>that</span> <span
  m='2295070'>are</span> <span m='2295180'>not</span> <span
  m='2295800'>just</span> <span m='2296200'>the</span> <span
  m='2296290'>square</span> <span m='2296660'>root</span> <span
  m='2297020'>of</span> <span m='2297220'>something</span> <span
  m='2297630'>simple.</span> <span m='2298080'>Like</span> <span
  m='2298300'>one</span> <span m='2298450'>of</span> <span
  m='2298550'>these</span> <span m='2298800'>forms.</span> <span
  m='2299140'>Like</span> <span m='2299430'>there</span> <span
  m='2299600'>might</span> <span m='2299980'>be</span> <span
  m='2300360'>a</span> <span m='2300660'>middle</span> <span
  m='2300840'>term</span> <span m='2302680'>in</span> <span
  m='2302930'>there.</span> <span m='2307730'>I</span> <span
  m='2307820'>don't</span> <span m='2308040'>actually</span> <span
  m='2308390'>have</span> <span m='2308550'>time</span> <span
  m='2308780'>to</span> <span m='2308840'>show</span> <span
  m='2309020'>you</span> <span m='2309120'>an</span> <span
  m='2309200'>example</span> <span m='2310400'>of</span> <span
  m='2310600'>how</span> <span m='2310750'>this</span> <span
  m='2310950'>comes</span> <span m='2311220'>out</span> <span
  m='2311460'>in</span> <span m='2311590'>a</span> <span m='2311720'>sort</span>
  <span m='2312000'>of</span> <span m='2312170'>practical</span> <span
  m='2312700'>example.</span> <span m='2313200'>But</span> <span
  m='2313330'>it</span> <span m='2313510'>does</span> <span
  m='2313760'>happen</span> <span m='2314780'>quite</span> <span
  m='2315140'>frequently.</span> <span m='2315760'>And</span> <span
  m='2316560'>so</span> <span m='2316720'>I</span> <span m='2316790'>want
  to</span> <span m='2317020'>show</span> <span m='2317210'>you</span> <span
  m='2317350'>how</span> <span m='2317520'>to</span> <span
  m='2317640'>deal</span> <span m='2318000'>with</span> <span
  m='2318220'>things</span> <span m='2318580'>like</span> <span
  m='2318860'>the</span> <span m='2318960'>following</span> <span
  m='2319460'>example.</span> <span m='2320550'>Let's try</span> <span
  m='2320740'>to</span> <span m='2320860'>integrate</span> <span
  m='2322630'>dx</span> <span m='2323380'>over</span> <span
  m='2325660'>x^2</span> <span m='2325980'>+</span> <span m='2326400'>4x,
  the</span> <span m='2328360'>square</span> <span m='2328710'>root</span> <span
  m='2329080'>of</span> <span m='2331710'>x^2</span> <span m='2331920'>+</span>
  <span m='2332530'>4x.</span> </p><p><span m='2335090'>So</span> <span
  m='2335260'>there's</span> <span m='2335450'>a</span> <span
  m='2335500'>square</span> <span m='2335840'>root</span> <span
  m='2336170'>of</span> <span m='2337090'>some</span> <span
  m='2337320'>square,</span> <span m='2337880'>some</span> <span
  m='2338030'>quadratic.</span> <span m='2339010'>It's</span> <span
  m='2339240'>very</span> <span m='2339490'>much</span> <span
  m='2339760'>like</span> <span m='2340380'>this</span> <span
  m='2340600'>business.</span> <span m='2342010'>But</span> <span
  m='2342280'>it</span> <span m='2342360'>isn't</span> <span
  m='2342970'>of</span> <span m='2343240'>any</span> <span m='2343510'>of</span>
  <span m='2343650'>these</span> <span m='2343910'>forms.</span> <span
  m='2344830'>And</span> <span m='2344960'>so</span> <span
  m='2345110'>what</span> <span m='2345230'>I</span> <span
  m='2345270'>want</span> <span m='2345470'>to</span> <span
  m='2345540'>do</span> <span m='2345810'>is</span> <span
  m='2346030'>show</span> <span m='2346190'>you</span> <span
  m='2346360'>how</span> <span m='2346520'>to</span> <span
  m='2346610'>rewrite</span> <span m='2347090'>it</span> <span
  m='2347980'>in</span> <span m='2348240'>one</span> <span m='2348370'>of</span>
  <span m='2348480'>those</span> <span m='2348720'>forms</span> <span
  m='2349190'>using</span> <span m='2349640'>substitution,</span> <span
  m='2350540'>again.</span> <span m='2351120'>All</span> <span
  m='2351540'>this</span> <span m='2351940'>is</span> <span
  m='2352360'>about</span> <span m='2352660'>substitution.</span> <span
  m='2354520'>So</span> <span m='2354700'>the</span> <span
  m='2354790'>game</span> <span m='2358110'>is</span> <span
  m='2358520'>to</span> <span m='2358980'>rewrite</span> <span
  m='2360890'>quadratic</span> <span m='2365070'>as</span> <span
  m='2365720'>something</span> <span m='2366100'>like</span> <span m='2367470'>x
  plus</span> <span m='2368040'>something</span> <span m='2368470'>or</span>
  <span m='2368630'>other.</span> <span m='2370950'>Plus</span> <span
  m='2371250'>some</span> <span m='2371490'>other</span> <span
  m='2371700'>constant.</span> <span m='2372470'>So</span> <span
  m='2372800'>write</span> <span m='2373150'>it,</span> <span
  m='2373310'>try</span> <span m='2373500'>to</span> <span
  m='2373590'>write</span> <span m='2373910'>it,</span> <span
  m='2374040'>in</span> <span m='2374180'>the</span> <span
  m='2374270'>form</span> <span m='2375030'>of a</span> <span
  m='2375140'>square</span> <span m='2375690'>plus</span> <span
  m='2375990'>or</span> <span m='2376090'>minus</span> <span
  m='2377910'>another</span> <span m='2378210'>constant.</span> <span
  m='2382340'>And</span> <span m='2382540'>then</span> <span
  m='2382640'>we'll</span> <span m='2382750'>go</span> <span
  m='2382890'>on</span> <span m='2383070'>from</span> <span
  m='2383260'>there.</span> <span m='2385170'>So</span> <span
  m='2385420'>let's</span> <span m='2385690'>do</span> <span
  m='2385870'>that</span> <span m='2386090'>in</span> <span
  m='2386210'>this</span> <span m='2386390'>case.</span> <span
  m='2387300'>x^2,</span> <span m='2388330'>x^2</span> <span
  m='2388960'>+</span> <span m='2389290'>4x.</span> <span
  m='2391110'>Well,</span> <span m='2391420'>if</span> <span
  m='2391610'>you</span> <span m='2391710'>square</span> <span
  m='2392180'>this</span> <span m='2392420'>form</span> <span
  m='2392780'>out,</span> <span m='2393390'>then</span> <span
  m='2393620'>the</span> <span m='2393710'>middle</span> <span
  m='2393990'>term</span> <span m='2394320'>is</span> <span m='2394440'>going
  to</span> <span m='2394640'>be</span> <span m='2395230'>2ax.</span> <span
  m='2397280'>So</span> <span m='2397430'>that,</span> <span
  m='2397890'>since</span> <span m='2398150'>I</span> <span
  m='2399050'>have</span> <span m='2399440'>a</span> <span
  m='2399530'>middle</span> <span m='2399790'>term</span> <span
  m='2400150'>here,</span> <span m='2400920'>I</span> <span
  m='2401100'>pretty</span> <span m='2401360'>much</span> <span
  m='2401620'>know</span> <span m='2401860'>what</span> <span
  m='2402090'>a</span> <span m='2402420'>has</span> <span m='2402730'>to</span>
  <span m='2402840'>be.</span> <span m='2403640'>The</span> <span
  m='2403790'>only</span> <span m='2404000'>choice</span> <span
  m='2404660'>in</span> <span m='2404760'>order</span> <span
  m='2404990'>to</span> <span m='2405100'>get</span> <span
  m='2405430'>something</span> <span m='2405790'>like</span> <span
  m='2406200'>x^2</span> <span m='2406480'>+</span> <span m='2406700'>4x</span>
  <span m='2408020'>out</span> <span m='2408220'>of</span> <span
  m='2408330'>this,</span> <span m='2409130'>is</span> <span
  m='2409320'>to</span> <span m='2409470'>take</span> <span m='2409760'>a</span>
  <span m='2410030'>to</span> <span m='2410190'>be</span> <span
  m='2410940'>2.</span> <span m='2411440'>Because</span> <span
  m='2411980'>then,</span> <span m='2413390'>this</span> <span
  m='2413550'>is</span> <span m='2413660'>what</span> <span
  m='2413800'>you</span> <span m='2413900'>get.</span> <span
  m='2416950'>This</span> <span m='2417110'>isn't</span> <span
  m='2417310'>quite</span> <span m='2417530'>right</span> <span
  m='2417770'>yet,</span> <span m='2418070'>but</span> <span
  m='2418300'>let's</span> <span m='2418460'>compute</span> <span
  m='2418820'>what</span> <span m='2418970'>I</span> <span
  m='2419030'>have</span> <span m='2419330'>here.</span> <span
  m='2419790'>x^2</span> <span m='2420270'>+</span> <span m='2420800'>4x,</span>
  <span m='2421790'>so</span> <span m='2421960'>far</span> <span
  m='2422190'>so</span> <span m='2422390'>good,</span> <span
  m='2423070'>plus</span> <span m='2423630'>4,</span> <span
  m='2424490'>and</span> <span m='2424690'>I</span> <span
  m='2424750'>don't</span> <span m='2424970'>have</span> <span
  m='2425120'>a</span> <span m='2425190'>plus</span> <span m='2425490'>4</span>
  <span m='2425700'>here.</span> <span m='2426190'>So</span> <span
  m='2426420'>I</span> <span m='2426500'>have</span> <span m='2426680'>to</span>
  <span m='2426790'>fix</span> <span m='2427100'>that</span> <span
  m='2427340'>by</span> <span m='2427480'>subtracting</span> <span
  m='2428160'>4.</span> <span m='2431510'>So</span> <span
  m='2431610'>that's</span> <span m='2431790'>what</span> <span
  m='2431920'>I</span> <span m='2432000'>mean.</span> <span
  m='2432310'>I've</span> <span m='2432430'>completed</span> <span
  m='2432970'>the</span> <span m='2433060'>square.</span> <span
  m='2433370'>The</span> <span m='2433490'>word</span> <span
  m='2433760'>for</span> <span m='2433910'>this</span> <span
  m='2434730'>process</span> <span m='2435740'>of</span> <span
  m='2436050'>eliminating</span> <span m='2436960'>the</span> <span
  m='2437080'>middle</span> <span m='2437410'>term</span> <span
  m='2438370'>by</span> <span m='2439210'>using</span> <span
  m='2439610'>the</span> <span m='2439750'>square</span> <span
  m='2440450'>of</span> <span m='2440690'>an</span> <span
  m='2440770'>expression</span> <span m='2441310'>like</span> <span
  m='2441530'>that.</span> <span m='2441850'>That's</span> <span
  m='2442030'>called</span> <span m='2442870'>completing</span> <span
  m='2443310'>the</span> <span m='2443410'>square.</span> </p><p><span
  m='2444830'>And</span> <span m='2445010'>we</span> <span
  m='2445130'>can</span> <span m='2445260'>use</span> <span
  m='2445600'>that</span> <span m='2445790'>process</span> <span
  m='2446650'>to</span> <span m='2446840'>compute</span> <span
  m='2447530'>this</span> <span m='2447870'>integral.</span> <span
  m='2448010'>So</span> <span m='2448580'>let's</span> <span
  m='2448850'>do</span> <span m='2448980'>that.</span> <span
  m='2451040'>So</span> <span m='2451240'>I</span> <span m='2451360'>can</span>
  <span m='2451490'>rewrite</span> <span m='2451930'>this</span> <span
  m='2452110'>integral,</span> <span m='2453060'>rewrite</span> <span
  m='2453440'>this</span> <span m='2453700'>denominator</span> <span
  m='2454170'>like</span> <span m='2454410'>this.</span> <span
  m='2460100'>And</span> <span m='2460290'>then</span> <span
  m='2460390'>I'm</span> <span m='2460490'>going to</span> <span
  m='2460680'>try</span> <span m='2460910'>to</span> <span
  m='2461000'>use</span> <span m='2461340'>one</span> <span
  m='2461500'>of</span> <span m='2461610'>these</span> <span
  m='2462510'>forms</span> <span m='2462950'>over</span> <span
  m='2463150'>here.</span> <span m='2463860'>So</span> <span
  m='2464620'>in</span> <span m='2464760'>order</span> <span
  m='2465030'>to</span> <span m='2465160'>get</span> <span m='2465360'>a</span>
  <span m='2465420'>single</span> <span m='2466300'>variable</span> <span
  m='2467620'>there,</span> <span m='2467900'>instead</span> <span
  m='2468270'>of</span> <span m='2468380'>something</span> <span
  m='2468690'>complicated</span> <span m='2469370'>like</span> <span
  m='2469760'>x</span> <span m='2470810'>+</span> <span m='2471130'>2,</span>
  <span m='2472500'>I'm</span> <span m='2472650'>inclined</span> <span
  m='2473090'>to</span> <span m='2473200'>come</span> <span
  m='2473420'>up</span> <span m='2473530'>with</span> <span
  m='2473680'>another</span> <span m='2474310'>variable</span> <span
  m='2474760'>name</span> <span m='2475090'>and</span> <span
  m='2475370'>write</span> <span m='2476540'>it</span> <span
  m='2476700'>equal,</span> <span m='2477100'>write x</span> <span
  m='2477560'>+</span> <span m='2477830'>2</span> <span m='2479050'>as</span>
  <span m='2479300'>that</span> <span m='2479480'>other</span> <span
  m='2479660'>variable</span> <span m='2479940'>name.</span> <span
  m='2480330'>So</span> <span m='2480480'>here's</span> <span
  m='2480680'>another</span> <span m='2480940'>little</span> <span
  m='2481160'>direct</span> <span m='2481520'>substitution.</span> <span
  m='2485780'>u</span> <span m='2487790'>=</span> <span m='2487950'>x</span>
  <span m='2488160'>+</span> <span m='2488430'>2.</span> <span
  m='2489950'>Figure</span> <span m='2490180'>out</span> <span
  m='2490300'>what</span> <span m='2490450'>du</span> <span
  m='2490820'>is.</span> <span m='2491260'>That's</span> <span
  m='2491530'>pretty</span> <span m='2491840'>easy.</span> <span
  m='2496610'>And</span> <span m='2496830'>then</span> <span
  m='2496990'>rewrite</span> <span m='2497400'>the</span> <span
  m='2497500'>integral</span> <span m='2499730'>in</span> <span
  m='2499870'>those</span> <span m='2500140'>terms.</span> <span
  m='2501580'>So</span> <span m='2501730'>dx</span> <span m='2501880'>=</span>
  <span m='2502000'>du.</span> <span m='2504880'>And</span> <span
  m='2505030'>then</span> <span m='2505200'>in</span> <span
  m='2505520'>the</span> <span m='2506430'>denominator I</span> <span
  m='2506550'>have,</span> <span m='2507270'>well,</span> <span
  m='2507650'>I</span> <span m='2507720'>have</span> <span
  m='2507870'>the</span> <span m='2507930'>square</span> <span
  m='2508240'>root</span> <span m='2508420'>of</span> <span
  m='2508530'>that.</span> <span m='2509100'>Oh</span> <span
  m='2509230'>yeah,</span> <span m='2510190'>so</span> <span
  m='2510430'>I</span> <span m='2510540'>think</span> <span
  m='2510950'>as</span> <span m='2511090'>part</span> <span
  m='2511330'>of</span> <span m='2511420'>this</span> <span m='2511640'>I'll
  write</span> <span m='2512040'>out</span> <span m='2512230'>what</span> <span
  m='2514210'>x^2</span> <span m='2514790'>+</span> <span m='2515100'>4x</span>
  <span m='2515370'>is.</span> <span m='2516550'>The</span> <span
  m='2516640'>point</span> <span m='2516960'>is,</span> <span
  m='2517420'>it's</span> <span m='2517630'>equal</span> <span
  m='2517920'>to</span> <span m='2518260'>u^2 - 4.</span> <span m='2524170'>x^2
  +</span> <span m='2524370'>4x</span> <span m='2524860'>=</span> <span
  m='2526220'>u^2 - 4.</span> </p><p><span m='2532950'>There's</span> <span
  m='2533170'>the</span> <span m='2533290'>data</span> <span
  m='2534750'>box</span> <span m='2535800'>containing</span> <span
  m='2536550'>the</span> <span m='2536680'>substitution</span> <span
  m='2537530'>data.</span> <span m='2540260'>And</span> <span
  m='2541300'>so</span> <span m='2541500'>now</span> <span m='2541660'>I</span>
  <span m='2541720'>can</span> <span m='2541890'>put</span> <span
  m='2542060'>that</span> <span m='2542270'>in.</span> <span
  m='2542640'>I</span> <span m='2542820'>have</span> <span
  m='2543240'>x^2</span> <span m='2543520'>+</span> <span m='2543730'>4x</span>
  <span m='2544260'>there.</span> <span m='2544960'>In</span> <span
  m='2545070'>terms</span> <span m='2545350'>of</span> <span
  m='2545440'>u,</span> <span m='2545690'>that's</span> <span
  m='2546120'>u^2</span> <span m='2546510'>-</span> <span m='2546700'>4.</span>
  <span m='2551330'>Well,</span> <span m='2551510'>now</span> <span
  m='2551750'>I'm</span> <span m='2551850'>in a</span> <span
  m='2551900'>happier</span> <span m='2552270'>position</span> <span
  m='2552750'>because</span> <span m='2553140'>I</span> <span
  m='2553230'>can</span> <span m='2553390'>look</span> <span
  m='2553690'>for</span> <span m='2554080'>u^2</span> <span m='2554480'>-</span>
  <span m='2554800'>4</span> <span m='2555140'>for</span> <span
  m='2555290'>something</span> <span m='2555600'>like</span> <span
  m='2555810'>that</span> <span m='2556050'>in</span> <span
  m='2556150'>my</span> <span m='2556290'>table</span> <span
  m='2556720'>here.</span> <span m='2557060'>And</span> <span
  m='2557260'>it</span> <span m='2557340'>actually</span> <span
  m='2557740'>sits</span> <span m='2558040'>down</span> <span
  m='2558290'>here.</span> <span m='2560430'>So</span> <span
  m='2561050'>except</span> <span m='2561380'>for</span> <span
  m='2561470'>the</span> <span m='2561590'>use</span> <span
  m='2561830'>of</span> <span m='2561930'>the</span> <span
  m='2562020'>letter</span> <span m='2563180'>x here</span> <span
  m='2563550'>instead</span> <span m='2563940'>of</span> <span
  m='2564030'>u</span> <span m='2564370'>over</span> <span
  m='2564600'>there.</span> <span m='2565470'>That</span> <span
  m='2565640'>tells</span> <span m='2565930'>me</span> <span
  m='2566050'>what</span> <span m='2566210'>I</span> <span
  m='2566260'>want.</span> <span m='2567510'>So to</span> <span
  m='2568060'>handle</span> <span m='2568480'>this,</span> <span
  m='2569840'>what</span> <span m='2570140'>I</span> <span
  m='2570220'>should</span> <span m='2570430'>use</span> <span
  m='2570770'>is</span> <span m='2571340'>a</span> <span m='2571390'>trig</span>
  <span m='2571740'>substitution.</span> <span m='2575100'>And</span> <span
  m='2575220'>the</span> <span m='2575300'>trig</span> <span
  m='2575740'>substitution</span> <span m='2576230'>that's</span> <span
  m='2576370'>suggested</span> <span m='2577070'>is,</span> <span
  m='2578020'>according</span> <span m='2578410'>to</span> <span
  m='2578500'>the</span> <span m='2578600'>bottom</span> <span
  m='2578920'>line</span> <span m='2579370'>with</span> <span
  m='2579710'>a</span> <span m='2580280'>=</span> <span m='2581550'>2,</span>
  <span m='2582360'>so</span> <span m='2582640'>a^2</span> <span
  m='2582820'>=</span> <span m='2583360'>4.</span> <span m='2583870'>The</span>
  <span m='2584910'>suggestion</span> <span m='2585560'>is,</span> <span
  m='2585820'>I</span> <span m='2585930'>should</span> <span
  m='2586150'>take</span> <span m='2586960'>x--</span> <span
  m='2587600'>But</span> <span m='2587810'>I'd</span> <span
  m='2587880'>better</span> <span m='2588130'>not</span> <span
  m='2588330'>use</span> <span m='2588550'>the</span> <span
  m='2588650'>letter</span> <span m='2588970'>x</span> <span m='2589380'>any
  more.</span> <span m='2593970'>But</span> <span m='2594080'>I</span> <span
  m='2594130'>don't</span> <span m='2594350'>have</span> <span
  m='2594510'>a</span> <span m='2594570'>letter</span> <span
  m='2595050'>x,</span> <span m='2595110'>I have the</span> <span
  m='2595280'>letter</span> <span m='2595640'>u.</span> <span
  m='2595950'>I</span> <span m='2596050'>should</span> <span
  m='2596240'>take</span> <span m='2597070'>u</span> <span
  m='2597820'>equal</span> <span m='2598200'>to</span> <span
  m='2598780'>2</span> <span m='2599670'>secant.</span> <span
  m='2601310'>And</span> <span m='2601470'>then</span> <span
  m='2601650'>some</span> <span m='2601860'>letter</span> <span
  m='2602130'>I</span> <span m='2602220'>haven't</span> <span
  m='2602480'>used</span> <span m='2602750'>before.</span> <span
  m='2603110'>And</span> <span m='2603260'>theta</span> <span
  m='2604210'>is</span> <span m='2604770'>available.</span> <span
  m='2608820'>This</span> <span m='2608980'>is</span> <span m='2609070'>a</span>
  <span m='2609150'>look-up</span> <span m='2609610'>table</span> <span
  m='2609970'>process.</span> <span m='2610560'>I</span> <span
  m='2610670'>see</span> <span m='2610940'>the</span> <span
  m='2611120'>square</span> <span m='2611460'>root</span> <span
  m='2611690'>of</span> <span m='2611950'>u^2</span> <span m='2612320'>-</span>
  <span m='2612660'>4,</span> <span m='2613240'>I</span> <span
  m='2613350'>see</span> <span m='2613600'>that</span> <span
  m='2613770'>that's</span> <span m='2614040'>of</span> <span
  m='2614160'>this</span> <span m='2614340'>form.</span> <span
  m='2615250'>I'm</span> <span m='2615860'>instructed</span> <span
  m='2616490'>to</span> <span m='2616620'>make</span> <span
  m='2616870'>this</span> <span m='2617020'>substitution.</span> <span
  m='2618230'>And</span> <span m='2618340'>that's</span> <span
  m='2618500'>what</span> <span m='2618620'>I</span> <span
  m='2618670'>just</span> <span m='2618910'>did.</span> <span
  m='2620540'>Let's</span> <span m='2620740'>see</span> <span
  m='2620890'>how</span> <span m='2621060'>it</span> <span
  m='2621130'>works</span> <span m='2621380'>out.</span> </p><p><span
  m='2623600'>So</span> <span m='2623860'>that</span> <span
  m='2624030'>means</span> <span m='2624280'>the</span> <span
  m='2624420'>du</span> <span m='2625560'>is</span> <span m='2625970'>2,</span>
  <span m='2626370'>OK.</span> <span m='2627690'>What's</span> <span
  m='2627970'>the</span> <span m='2628070'>derivative</span> <span
  m='2628590'>of</span> <span m='2628700'>the</span> <span
  m='2628770'>secant?</span> <span m='2630480'>Secant</span> <span
  m='2630730'>tangent.</span> <span m='2632660'>So</span> <span
  m='2632890'>du</span> <span m='2633350'>=</span> <span m='2633540'>2</span>
  <span m='2635140'>sec(theta)</span> <span m='2635620'>tan(theta).</span> <span
  m='2639050'>And</span> <span m='2640190'>u^2 - 4 is,</span> <span
  m='2643360'>here's</span> <span m='2643620'>the</span> <span
  m='2643720'>payoff.</span> <span m='2645690'>I'm</span> <span
  m='2645870'>supposed</span> <span m='2646190'>to</span> <span
  m='2646300'>be</span> <span m='2646390'>able</span> <span
  m='2646590'>to</span> <span m='2646650'>rewrite</span> <span
  m='2647170'>that</span> <span m='2647410'>in</span> <span
  m='2647530'>terms</span> <span m='2647890'>of</span> <span
  m='2648560'>the</span> <span m='2648660'>tangent.</span> <span
  m='2649350'>According</span> <span m='2649780'>to</span> <span
  m='2649900'>this.</span> <span m='2650870'>u</span> <span
  m='2651030'>u^2</span> <span m='2651390'>-</span> <span m='2651700'>4</span>
  <span m='2652580'>is</span> <span m='2656500'>4</span> <span
  m='2656900'>secant</span> <span m='2657330'>squared</span> <span
  m='2657740'>minus</span> <span m='2658050'>4.</span> <span
  m='2659650'>And</span> <span m='2659880'>secant</span> <span
  m='2660210'>squared</span> <span m='2660560'>minus</span> <span
  m='2660850'>1</span> <span m='2661090'>is</span> <span
  m='2661250'>tangent</span> <span m='2661660'>squared.</span> <span
  m='2662450'>So</span> <span m='2662670'>this</span> <span
  m='2662900'>is</span> <span m='2663400'>4 tan^2(theta).</span> <span
  m='2670890'>Right,</span> <span m='2671200'>yeah?</span> </p><p><span
  m='2677500'>STUDENT: [INAUDIBLE]</span> </p><p><span m='2677640'>PROFESSOR:
  But I</span> <span m='2677740'>squared</span> <span m='2681920'>it.</span>
  <span m='2682200'>And now I'll</span> <span m='2682480'>square</span> <span
  m='2682790'>root</span> <span m='2683040'>it.</span> <span
  m='2684180'>And</span> <span m='2684310'>I'll</span> <span
  m='2684430'>get</span> <span m='2684620'>a</span> <span m='2684730'>2</span>
  <span m='2685890'>and</span> <span m='2686090'>this</span> <span
  m='2686220'>tangent</span> <span m='2686730'>will go</span> <span
  m='2686890'>away.</span> <span m='2690650'>So</span> <span
  m='2690850'>there's</span> <span m='2691070'>my</span> <span
  m='2691200'>data</span> <span m='2691460'>box</span> <span
  m='2691810'>for</span> <span m='2691960'>this</span> <span
  m='2692090'>substitution.</span> <span m='2696130'>And</span> <span
  m='2696490'>let's</span> <span m='2696630'>go</span> <span m='2696810'>on
  to</span> <span m='2697050'>another</span> <span m='2697270'>board.</span>
  <span m='2715560'>So</span> <span m='2716580'>where</span> <span
  m='2716760'>I'm</span> <span m='2716880'>at</span> <span m='2717220'>is</span>
  <span m='2718340'>the</span> <span m='2718460'>integral</span> <span
  m='2719220'>of</span> <span m='2719370'>du</span> <span
  m='2719870'>over</span> <span m='2720150'>the</span> <span
  m='2720260'>square</span> <span m='2720590'>root</span> <span
  m='2720980'>of</span> <span m='2721850'>u^2 - 4.</span> <span
  m='2726850'>And</span> <span m='2727030'>I</span> <span
  m='2727100'>have</span> <span m='2727290'>all</span> <span
  m='2728900'>the</span> <span m='2729010'>data</span> <span
  m='2729300'>I</span> <span m='2729420'>need</span> <span
  m='2729750'>here</span> <span m='2730060'>to</span> <span
  m='2730210'>rewrite</span> <span m='2730680'>that</span> <span
  m='2730900'>in</span> <span m='2731010'>terms</span> <span
  m='2731340'>of</span> <span m='2731420'>theta.</span> <span
  m='2733090'>So</span> <span m='2733290'>du</span> <span m='2734200'>=</span>
  <span m='2734640'>2</span> <span m='2735780'>sec(theta)</span> <span
  m='2736160'>tan(theta)</span> <span m='2737780'>d theta.</span> <span
  m='2741720'>And</span> <span m='2742000'>the</span> <span
  m='2742080'>denominator</span> <span m='2742740'>is</span> <span
  m='2743280'>2</span> <span m='2744070'>tan(theta).</span> <span
  m='2747760'>Ha.</span> <span m='2748590'>Well,</span> <span
  m='2748940'>so</span> <span m='2749180'>some</span> <span
  m='2749410'>very</span> <span m='2750150'>nice</span> <span
  m='2750510'>simplification</span> <span m='2751360'>happens</span> <span
  m='2751810'>here.</span> <span m='2753040'>The</span> <span
  m='2753150'>2's</span> <span m='2753460'>cancel.</span> <span
  m='2755940'>And</span> <span m='2756180'>the</span> <span
  m='2756240'>tangents</span> <span m='2756730'>cancel.</span> <span
  m='2758260'>And</span> <span m='2758410'>I'm</span> <span
  m='2758530'>left</span> <span m='2758810'>with</span> <span
  m='2758940'>trying</span> <span m='2759230'>to</span> <span
  m='2759990'>work</span> <span m='2760280'>with</span> <span
  m='2760530'>the</span> <span m='2760620'>integral,</span> <span
  m='2761600'>sec(theta)</span> <span m='2761800'>d theta.</span> <span
  m='2763920'>And</span> <span m='2764090'>luckily</span> <span
  m='2764460'>enough</span> <span m='2764810'>at</span> <span
  m='2764900'>the</span> <span m='2765010'>very</span> <span
  m='2765270'>beginning</span> <span m='2765670'>of</span> <span
  m='2765760'>the</span> <span m='2765920'>hour,</span> <span
  m='2766610'>I</span> <span m='2766860'>worked</span> <span
  m='2767180'>out</span> <span m='2767360'>how</span> <span
  m='2767510'>to</span> <span m='2767590'>compute</span> <span
  m='2768030'>the</span> <span m='2768140'>integral</span> <span
  m='2768480'>of</span> <span m='2768690'>the</span> <span
  m='2768930'>secant</span> <span m='2769430'>of</span> <span m='2769790'>theta.
  And</span> <span m='2769980'>there</span> <span m='2770130'>it</span> <span
  m='2770210'>is.</span> <span m='2771670'>So</span> <span
  m='2773490'>this</span> <span m='2773840'>is</span> <span
  m='2776360'>ln(sec(theta) + tan(theta))</span> <span m='2781100'>plus</span>
  <span m='2781330'>a</span> <span m='2781390'>constant.</span> </p><p><span
  m='2785000'>And</span> <span m='2785430'>we're</span> <span
  m='2785620'>done</span> <span m='2786020'>with</span> <span
  m='2786340'>the</span> <span m='2786450'>calculus</span> <span
  m='2787030'>part.</span> <span m='2787660'>There's</span> <span
  m='2787860'>no</span> <span m='2787980'>more</span> <span
  m='2788160'>integral</span> <span m='2788710'>there.</span> <span
  m='2789390'>But</span> <span m='2789570'>I</span> <span
  m='2789640'>still</span> <span m='2790160'>am</span> <span
  m='2790290'>not</span> <span m='2790470'>quite</span> <span
  m='2790710'>done</span> <span m='2790910'>with</span> <span
  m='2791020'>the</span> <span m='2791100'>problem,</span> <span
  m='2791490'>because</span> <span m='2792030'>again</span> <span
  m='2792550'>I</span> <span m='2792670'>have</span> <span
  m='2792920'>these</span> <span m='2793170'>two</span> <span
  m='2793630'>substitutions</span> <span m='2794570'>to</span> <span
  m='2794710'>try</span> <span m='2794930'>to</span> <span
  m='2795210'>undo.</span> <span m='2797180'>So</span> <span
  m='2797350'>let's</span> <span m='2797560'>undo</span> <span
  m='2797890'>them</span> <span m='2798690'>one</span> <span
  m='2798900'>by</span> <span m='2799070'>one.</span> <span
  m='2800220'>Let's</span> <span m='2800500'>see.</span> <span
  m='2802240'>I</span> <span m='2802370'>have</span> <span
  m='2802630'>this</span> <span m='2802810'>trig</span> <span
  m='2803100'>substitution</span> <span m='2803850'>here.</span> <span
  m='2804130'>And</span> <span m='2804230'>I</span> <span
  m='2804320'>could</span> <span m='2804510'>use</span> <span
  m='2804750'>my</span> <span m='2804910'>triangle</span> <span
  m='2805430'>trick,</span> <span m='2805770'>if</span> <span
  m='2805900'>I</span> <span m='2805990'>need</span> <span
  m='2806260'>to.</span> <span m='2807210'>But</span> <span
  m='2807450'>maybe</span> <span m='2807750'>I</span> <span
  m='2807840'>don't</span> <span m='2808090'>need</span> <span
  m='2808320'>to.</span> <span m='2809280'>Let's</span> <span
  m='2809500'>see,</span> <span m='2809670'>do</span> <span m='2809820'>I</span>
  <span m='2809940'>know</span> <span m='2810190'>what</span> <span
  m='2810360'>the</span> <span m='2810460'>secant</span> <span
  m='2810880'>of</span> <span m='2810980'>theta</span> <span
  m='2811220'>is</span> <span m='2811580'>in</span> <span
  m='2811680'>terms</span> <span m='2812000'>of</span> <span
  m='2812100'>u?</span> <span m='2813090'>Well,</span> <span
  m='2813370'>I</span> <span m='2813460'>do.</span> <span m='2814620'>So</span>
  <span m='2814890'>I</span> <span m='2815000'>get</span> <span
  m='2815310'>ln(u/2).</span> <span m='2818980'>Do</span> <span
  m='2819130'>I</span> <span m='2819240'>know</span> <span
  m='2819430'>what</span> <span m='2819590'>the</span> <span
  m='2819680'>tangent</span> <span m='2820150'>is</span> <span
  m='2820430'>in</span> <span m='2820550'>terms</span> <span
  m='2820930'>of</span> <span m='2821050'>u?</span> <span
  m='2821740'>Well,</span> <span m='2822210'>I</span> <span
  m='2822310'>do.</span> <span m='2822730'>It's</span> <span
  m='2822940'>here.</span> <span m='2824180'>So</span> <span
  m='2824350'>I</span> <span m='2824430'>lucked</span> <span
  m='2824850'>out,</span> <span m='2825500'>in</span> <span
  m='2825640'>this</span> <span m='2825840'>case.</span> <span
  m='2826500'>And</span> <span m='2826650'>I</span> <span
  m='2826690'>don't</span> <span m='2826920'>have</span> <span
  m='2827100'>to</span> <span m='2827200'>go</span> <span
  m='2827340'>through</span> <span m='2827650'>and</span> <span
  m='2827770'>use</span> <span m='2827980'>that</span> <span
  m='2828140'>triangle</span> <span m='2828600'>trick.</span> </p><p><span
  m='2829930'>So</span> <span m='2830890'>the</span> <span
  m='2830990'>tangent</span> <span m='2831490'>of</span> <span
  m='2831660'>theta</span> <span m='2832420'>is</span> <span
  m='2832670'>the</span> <span m='2832770'>square</span> <span
  m='2833070'>root</span> <span m='2833610'>of</span> <span m='2833940'>u^2 -
  4,</span> <span m='2834430'>over</span> <span m='2835460'>2.</span> <span
  m='2839000'>Good.</span> <span m='2840080'>So</span> <span
  m='2840500'>I've</span> <span m='2840870'>undone</span> <span
  m='2841850'>this</span> <span m='2842110'>trig</span> <span
  m='2842430'>substitution.</span> <span m='2844220'>I'm</span> <span
  m='2844570'>not</span> <span m='2844770'>quite</span> <span
  m='2845030'>done</span> <span m='2845240'>yet</span> <span
  m='2845500'>because</span> <span m='2846080'>my</span> <span
  m='2846540'>answer</span> <span m='2846910'>is</span> <span
  m='2847090'>involved</span> <span m='2847480'>with</span> <span
  m='2847630'>u.</span> <span m='2848440'>And</span> <span
  m='2848600'>what</span> <span m='2848730'>I</span> <span
  m='2848770'>wanted</span> <span m='2849240'>originally</span> <span
  m='2849790'>was</span> <span m='2849990'>x.</span> <span
  m='2850780'>But</span> <span m='2850920'>this</span> <span
  m='2851120'>direct</span> <span m='2851480'>substitution</span> <span
  m='2852950'>that</span> <span m='2853110'>I</span> <span
  m='2853180'>started</span> <span m='2853580'>with</span> <span
  m='2853780'>is</span> <span m='2853910'>really</span> <span
  m='2854270'>easy</span> <span m='2854550'>to</span> <span
  m='2854680'>deal</span> <span m='2854950'>with.</span> <span
  m='2855250'>I</span> <span m='2855360'>can</span> <span
  m='2855520'>just</span> <span m='2855810'>put x</span> <span
  m='2856410'>+</span> <span m='2856680'>2</span> <span m='2856950'>every
  time</span> <span m='2857470'>I</span> <span m='2857540'>see a</span> <span
  m='2857870'>u.</span> <span m='2859780'>So</span> <span
  m='2859930'>this</span> <span m='2860140'>is</span> <span
  m='2860270'>the</span> <span m='2860360'>natural</span> <span
  m='2860740'>logarithm</span> <span m='2861260'>of</span> <span
  m='2862380'>(x+2)/2</span> <span m='2864860'>plus</span> <span
  m='2865180'>the</span> <span m='2865280'>square</span> <span
  m='2865590'>root...</span> <span m='2866090'>What's</span> <span
  m='2866440'>going to</span> <span m='2866690'>happen</span> <span
  m='2867080'>when</span> <span m='2867250'>I</span> <span m='2867330'>put
  x</span> <span m='2867920'>+</span> <span m='2868200'>2</span> <span
  m='2868450'>in</span> <span m='2868590'>place</span> <span
  m='2868900'>for</span> <span m='2869050'>u</span> <span
  m='2869460'>here?</span> <span m='2871330'>You</span> <span
  m='2871460'>know</span> <span m='2871680'>what</span> <span
  m='2871860'>you</span> <span m='2871990'>get.</span> <span
  m='2874490'>You</span> <span m='2874640'>get</span> <span
  m='2874810'>exactly</span> <span m='2877080'>what</span> <span
  m='2877250'>we</span> <span m='2877350'>started</span> <span
  m='2877690'>with.</span> <span m='2879230'>Right?</span> <span
  m='2880260'>I</span> <span m='2880350'>put</span> <span m='2880590'>x +</span>
  <span m='2881040'>2</span> <span m='2881220'>in</span> <span m='2881340'>place
  of</span> <span m='2881750'>the</span> <span m='2881850'>u</span> <span
  m='2883410'>here.</span> <span m='2884850'>I</span> <span
  m='2885010'>get</span> <span m='2886370'>x^2</span> <span m='2887120'>+</span>
  <span m='2887370'>4x.</span> <span m='2893210'>So</span> <span
  m='2893550'>I've</span> <span m='2893710'>gotten</span> <span
  m='2893960'>back</span> <span m='2894270'>to</span> <span m='2894490'>a</span>
  <span m='2894560'>function</span> <span m='2894980'>purely</span> <span
  m='2895330'>in</span> <span m='2895410'>terms</span> <span
  m='2895680'>of</span> <span m='2895790'>x</span> <span m='2899330'>OK,</span>
  <span m='2899920'>that's</span> <span m='2900070'>a</span> <span
  m='2900140'>good</span> <span m='2900280'>place</span> <span
  m='2900520'>to</span> <span m='2900630'>quit.</span> <span
  m='2901200'>Have</span> <span m='2901360'>a</span> <span
  m='2901730'>great</span> <span m='2902710'>little</span> <span
  m='2903420'>one-day</span> <span m='2903830'>break.</span> <span
  m='2904840'>I</span> <span m='2905450'>guess</span> <span m='2905580'>this
  class</span> <span m='2905880'>doesn't</span> <span m='2906030'>meet</span>
  <span m='2906190'>on</span> <span m='2906320'>Monday</span> <span
  m='2906580'>anyway.</span> <span m='2907320'>Bye.</span> </p>
embedded_media:
  - uid: 7fd746c58dc3fa68a76b770c7e4f22ed
    parent_uid: 9afe5a2aecd5e657d5baa178e0449d9c
    id: lec28.jpg
    title: Lecture 28
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-28-inverse-substitution/lec28.jpg
  - uid: e1a009ef577c8c65659e43404436460e
    parent_uid: 9afe5a2aecd5e657d5baa178e0449d9c
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: CXKoCMVqM9s
  - uid: e35a8beaaac92927a5d9d7e615a5b02f
    parent_uid: 9afe5a2aecd5e657d5baa178e0449d9c
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/CXKoCMVqM9s/default.jpg'
  - uid: 1fff34e0eef17cf8990451c27b1ae8f1
    parent_uid: 9afe5a2aecd5e657d5baa178e0449d9c
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id354869053'
  - uid: d2891c0083b840c5fbceac1dba6a3047
    parent_uid: 9afe5a2aecd5e657d5baa178e0449d9c
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18.01JF07/ocw-18.01-f07-lec28_300k.mp4'
  - uid: 667cd8bb447936316218a004a2e82746
    parent_uid: 9afe5a2aecd5e657d5baa178e0449d9c
    id: Video-VideoLecturesnet-Stream
    title: Video-VideoLectures.net-Stream
    type: Video
    media_location: 'http://videolectures.net/mit1801f06_single_variable_calculus/'
  - uid: 1c8432712f30a56f6012df629e6b99e5
    parent_uid: 9afe5a2aecd5e657d5baa178e0449d9c
    id: Thumbnail-OCW-JPG
    title: Thumbnail-OCW-JPG
    type: Thumbnail
  - uid: b7c46c40ee6325e9b84f6d3b95a16d13
    parent_uid: 9afe5a2aecd5e657d5baa178e0449d9c
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: CXKoCMVqM9s
  - uid: 98da17983ec97d340e149456c8e38f5f
    parent_uid: 9afe5a2aecd5e657d5baa178e0449d9c
    id: CXKoCMVqM9s.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-28-inverse-substitution/CXKoCMVqM9s.srt
  - uid: d37dbf3b71f85754cee509c6f7b8f490
    parent_uid: 9afe5a2aecd5e657d5baa178e0449d9c
    id: CXKoCMVqM9s.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01-single-variable-calculus-fall-2006/video-lectures/lecture-28-inverse-substitution/CXKoCMVqM9s.pdf
  - uid: 454e22020e2f48332623f79556c6cbfb
    parent_uid: 9afe5a2aecd5e657d5baa178e0449d9c
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 575629c380869e892c0ea9aadafd4c91
    parent_uid: 9afe5a2aecd5e657d5baa178e0449d9c
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
