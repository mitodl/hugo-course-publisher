---
title: Computing Antiderivatives
uid: c85a5bb7d874a76062485fc3dc7d3704
parent_uid: 876df37c3cbc00d47b666c04e5047a17
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-2-applications-of-differentiation/part-c-mean-value-theorem-antiderivatives-and-differential-equations/session-37-antiderivatives/computing-antiderivatives
short_url: computing-antiderivatives
inline_embed_id: 92329236computingantiderivatives48669412
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='6990'>PROFESSOR: Hi.</span> <span m='7450'>Welcome</span> <span
  m='7780'>back</span> <span m='7980'>to</span> <span
  m='8070'>recitation.</span> <span m='9050'>We've</span> <span
  m='9310'>been</span> <span m='9460'>talking in</span> <span
  m='9890'>lecture</span> <span m='10240'>about</span> <span
  m='10570'>antiderivatives.</span> <span m='11710'>So</span> <span
  m='12100'>I</span> <span m='12220'>have</span> <span m='12410'>here a</span>
  <span m='12640'>problem</span> <span m='13480'>for</span> <span
  m='13710'>you.</span> <span m='13850'>Just</span> <span m='14050'>an</span>
  <span m='14150'>exercise</span> <span m='14900'>about</span> <span
  m='15200'>computing</span> <span m='15580'>an</span> <span
  m='15650'>antiderivative.</span> </p><p><span m='16310'>So</span> <span
  m='16920'>the</span> <span m='17060'>question</span> <span m='17440'>is
  to</span> <span m='17600'>compute</span> <span m='18050'>an</span> <span
  m='18370'>antiderivative</span> <span m='18710'>of</span> <span
  m='19540'>this</span> <span m='19750'>big</span> <span
  m='20010'>fraction.</span> <span m='20510'>So</span> <span m='20850'>on</span>
  <span m='21040'>top</span> <span m='21330'>it's</span> <span
  m='21460'>got</span> <span m='21950'>x to</span> <span m='22050'>the</span>
  <span m='22190'>eighth</span> <span m='22600'>plus</span> <span
  m='22940'>2x</span> <span m='23090'>cubed</span> <span m='24180'>minus</span>
  <span m='24510'>x</span> <span m='24840'>to</span> <span m='24970'>the</span>
  <span m='25090'>2/3</span> <span m='26100'>minus</span> <span
  m='26510'>3,</span> <span m='27360'>that</span> <span m='27570'>whole</span>
  <span m='27780'>thing</span> <span m='28260'>over</span> <span
  m='28590'>x</span> <span m='28880'>squared.</span> </p><p><span
  m='30330'>So</span> <span m='31190'>just</span> <span m='31460'>a</span> <span
  m='31790'>quick</span> <span m='32210'>linguistic</span> <span
  m='32770'>note</span> <span m='32960'>about</span> <span m='33520'>why</span>
  <span m='33760'>I</span> <span m='33830'>said</span> <span m='34530'>an</span>
  <span m='34740'>antiderivative</span> <span m='35730'>instead</span> <span
  m='36050'>of</span> <span m='36150'>the</span> <span
  m='36480'>antiderivative,</span> <span m='37430'>and</span> <span
  m='37690'>then</span> <span m='37800'>I'll</span> <span m='38140'>let</span>
  <span m='38300'>you</span> <span m='38440'>work</span> <span
  m='38740'>on</span> <span m='38880'>it</span> <span m='38960'>a</span> <span
  m='39030'>little.</span> <span m='39370'>So</span> <span m='39760'>an</span>
  <span m='40170'>antiderivative.</span> <span m='40660'>There are</span> <span
  m='40790'>many</span> <span m='41120'>functions</span> <span
  m='41840'>whose</span> <span m='42530'>derivative</span> <span
  m='43010'>is</span> <span m='43440'>this</span> <span m='43590'>function.
  Right?</span> <span m='44630'>So</span> <span m='45400'>they</span> <span
  m='45600'>all</span> <span m='45780'>differ</span> <span m='46040'>from</span>
  <span m='46220'>each</span> <span m='46390'>other</span> <span
  m='46580'>by</span> <span m='47510'>constants.</span> <span
  m='49450'>So</span> <span m='50350'>I</span> <span m='50430'>would</span>
  <span m='50610'>be</span> <span m='50710'>happy</span> <span
  m='50970'>with</span> <span m='51130'>any</span> <span m='51560'>one</span>
  <span m='51990'>as</span> <span m='52310'>an</span> <span
  m='52390'>answer</span> <span m='52740'>to this</span> <span
  m='52900'>question.</span> <span m='53230'>That's</span> <span
  m='53440'>why</span> <span m='53610'>I</span> <span m='53750'>chose</span>
  <span m='54210'>the</span> <span m='54670'>word</span> <span
  m='54950'>an</span> <span m='56500'>antiderivative.</span> <span
  m='57350'>So</span> <span m='57770'>I'm</span> <span m='57970'>looking</span>
  <span m='58230'>for</span> <span m='58370'>a</span> <span
  m='58430'>function</span> <span m='58960'>whose</span> <span
  m='59270'>derivative</span> <span m='59810'>is</span> <span
  m='59980'>equal</span> <span m='60300'>to</span> <span m='60430'>this</span>
  <span m='60630'>function.</span> <span m='61600'>So</span> <span
  m='62200'>why</span> <span m='62380'>don't</span> <span m='62470'>you</span>
  <span m='62550'>take</span> <span m='62760'>a</span> <span
  m='62800'>couple</span> <span m='63050'>minutes,</span> <span
  m='63630'>work</span> <span m='64030'>this</span> <span m='64210'>out,</span>
  <span m='64620'>come</span> <span m='64820'>back</span> <span
  m='65090'>and</span> <span m='65670'>you</span> <span m='65810'>can</span>
  <span m='65980'>check</span> <span m='66180'>your</span> <span
  m='66300'>answer</span> <span m='66550'>against</span> <span
  m='66860'>my</span> <span m='66970'>work.</span> </p><p><span m='76880'>OK,
  welcome</span> <span m='77210'>back.</span> <span m='77680'>So</span> <span
  m='78200'>we</span> <span m='78420'>were</span> <span m='78560'>just</span>
  <span m='78800'>talking</span> <span m='79160'>about</span> <span
  m='79770'>this</span> <span m='80160'>antiderivative</span> <span
  m='80920'>here.</span> <span m='81290'>So</span> <span m='82180'>one</span>
  <span m='82480'>thing</span> <span m='82700'>you'll</span> <span
  m='83100'>notice</span> <span m='83450'>about</span> <span
  m='83690'>this</span> <span m='83820'>function</span> <span
  m='84140'>is</span> <span m='84270'>that</span> <span m='84390'>I've</span>
  <span m='84520'>written</span> <span m='84750'>this</span> <span
  m='84910'>in</span> <span m='85000'>a</span> <span m='85080'>sort</span> <span
  m='85260'>of a</span> <span m='85330'>silly</span> <span
  m='85640'>form.</span> <span m='86190'>And</span> <span m='86470'>it's</span>
  <span m='86760'>probably</span> <span m='87490'>a</span> <span
  m='87610'>lot</span> <span m='88220'>easier</span> <span m='88530'>to</span>
  <span m='88610'>get</span> <span m='89120'>a</span> <span
  m='89180'>feel</span> <span m='89560'>for</span> <span m='89710'>what</span>
  <span m='89940'>this</span> <span m='90120'>function</span> <span
  m='90480'>is</span> <span m='90640'>if</span> <span m='90740'>you</span> <span
  m='91060'>break</span> <span m='91480'>this</span> <span
  m='91650'>fraction</span> <span m='92090'>apart</span> <span
  m='92660'>into</span> <span m='93000'>its</span> <span
  m='93100'>several</span> <span m='93430'>pieces.</span> <span
  m='93790'>So</span> <span m='93890'>for</span> <span m='94050'>example,</span>
  <span m='94545'>x</span> <span m='95040'>to</span> <span m='95150'>the</span>
  <span m='95290'>eighth</span> <span m='95580'>over</span> <span
  m='96320'>x</span> <span m='96610'>squared</span> <span m='97060'>is</span>
  <span m='97190'>just x--</span> <span m='97840'>So,</span> <span
  m='98130'>well</span> <span m='98310'>OK,</span> <span m='98460'>so</span>
  <span m='98550'>let</span> <span m='98780'>me,</span> <span
  m='98960'>this</span> <span m='99380'>antiderivative</span> <span
  m='100060'>that</span> <span m='100180'>I'm</span> <span
  m='100280'>interested</span> <span m='100730'>in,</span> <span
  m='101130'>antiderivative</span> <span m='101790'>of</span> <span m='101880'>x
  to</span> <span m='102380'>the</span> <span m='102570'>eighth</span> <span
  m='103350'>plus</span> <span m='103790'>2x</span> <span
  m='103980'>cubed</span> <span m='105540'>minus</span> <span m='106120'>x 
  to</span> <span m='106560'>the</span> <span m='107520'>2/3</span> <span
  m='108290'>minus</span> <span m='108730'>3,</span> <span m='110660'>over
  x</span> <span m='111160'>squared dx.</span> <span m='112620'>So</span> <span
  m='112970'>I've</span> <span m='113090'>written</span> <span
  m='113370'>this</span> <span m='113520'>in</span> <span m='113610'>a</span>
  <span m='113710'>silly</span> <span m='114020'>form</span> <span
  m='114440'>and</span> <span m='114670'>you</span> <span m='114750'>can</span>
  <span m='114880'>get</span> <span m='115030'>it</span> <span
  m='115120'>in</span> <span m='115200'>a</span> <span m='115250'>nicer</span>
  <span m='115690'>form</span> <span m='116210'>if</span> <span
  m='116470'>you</span> <span m='116860'>just</span> <span
  m='117170'>realize</span> <span m='117690'>that, you know,</span> <span
  m='118170'>this</span> <span m='118400'>is</span> <span m='118900'>just</span>
  <span m='119130'>a sum of</span> <span m='119600'>powers</span> <span
  m='120060'>of</span> <span m='120150'>x</span> <span m='120760'>that</span>
  <span m='120910'>I've</span> <span m='121620'>put</span> <span
  m='121800'>over</span> <span m='122010'>this</span> <span
  m='122120'>silly</span> <span m='122790'>common</span> <span
  m='123100'>denominator.</span> </p><p><span m='124740'>So</span> <span
  m='125200'>our</span> <span m='125370'>life</span> <span
  m='125600'>will</span> <span m='125700'>be</span> <span m='125800'>a</span>
  <span m='125860'>little</span> <span m='126020'>simpler</span> <span
  m='126320'>if</span> <span m='126620'>we</span> <span m='126810'>write</span>
  <span m='127110'>this</span> <span m='127270'>out</span> <span
  m='127560'>by</span> <span m='127690'>splitting</span> <span
  m='128110'>it</span> <span m='128200'>up</span> <span m='129710'>into</span>
  <span m='130020'>the</span> <span m='130360'>separate</span> <span
  m='130710'>fractions.</span> <span m='131440'>So</span> <span m='131670'>if
  I</span> <span m='131830'>do</span> <span m='132010'>that,</span> <span
  m='132240'>this</span> <span m='132390'>is</span> <span m='132520'>just</span>
  <span m='132730'>equal</span> <span m='133010'>to</span> <span
  m='133760'>the</span> <span m='134080'>antiderivative</span> <span
  m='134460'>of well,</span> <span m='135380'>x</span> <span
  m='135850'>to</span> <span m='135960'>the</span> <span
  m='136120'>eighth</span> <span m='137010'>over</span> <span
  m='137250'>x</span> <span m='137550'>squared.</span> <span
  m='138000'>That's</span> <span m='138470'>x to</span> <span
  m='138570'>the</span> <span m='138680'>sixth.</span> <span
  m='139830'>And</span> <span m='140320'>2</span> <span m='140520'>x
  cubed</span> <span m='141190'>over</span> <span m='141370'>x</span> <span
  m='141610'>squared</span> <span m='141930'>is</span> <span
  m='142020'>just</span> <span m='142450'>x.</span> <span m='143320'>So</span>
  <span m='143725'>I</span> <span m='144130'>have</span> <span
  m='144535'>x--</span> <span m='145195'>sorry,</span> <span
  m='145450'>it's</span> <span m='145670'>2x--</span> <span
  m='147130'>plus</span> <span m='147910'>2x.</span> </p><p><span
  m='149160'>Now, OK</span> <span m='150200'>so</span> <span m='151140'>x</span>
  <span m='151610'>to</span> <span m='151750'>the</span> <span
  m='151850'>2/3</span> <span m='152870'>over</span> <span m='153150'>x</span>
  <span m='153450'>squared.</span> <span m='154170'>So</span> <span
  m='154390'>that's</span> <span m='154670'>x</span> <span m='154950'>to</span>
  <span m='155110'>the</span> <span m='155600'>2/3</span> <span
  m='156340'>minus</span> <span m='156830'>2.</span> <span
  m='157610'>Which</span> <span m='157900'>is</span> <span m='159320'>x</span>
  <span m='159780'>to the</span> <span m='160580'>minus</span> <span
  m='161940'>4/3.</span> <span m='164150'>And</span> <span
  m='165450'>minus</span> <span m='166020'>3</span> <span m='166350'>over</span>
  <span m='166580'>x</span> <span m='166870'>squared,</span> <span
  m='167440'>so</span> <span m='167640'>OK,</span> <span m='167860'>so</span>
  <span m='167990'>we</span> <span m='168100'>could</span> <span
  m='168230'>write</span> <span m='168450'>that</span> <span
  m='168620'>as</span> <span m='168720'>minus</span> <span m='169030'>3</span>
  <span m='169260'>over</span> <span m='169480'>x</span> <span
  m='169660'>squared,</span> <span m='170080'>or</span> <span
  m='170830'>maybe</span> <span m='171120'>it's</span> <span m='171270'>a</span>
  <span m='171340'>little</span> <span m='172620'>more</span> <span
  m='172820'>convenient</span> <span m='173300'>to</span> <span
  m='173370'>write</span> <span m='173530'>it</span> <span m='173620'>as</span>
  <span m='173770'>minus</span> <span m='174220'>3</span> <span
  m='175210'>x</span> <span m='175650'>to</span> <span m='175780'>the</span>
  <span m='175870'>minus</span> <span m='176210'>2,</span> <span
  m='177040'>dx.</span> <span m='179250'>So</span> <span m='179460'>far</span>
  <span m='179690'>I</span> <span m='179740'>haven't</span> <span
  m='180080'>really</span> <span m='180560'>done</span> <span
  m='180840'>anything, you know.</span> <span m='181580'>A</span> <span
  m='181740'>little</span> <span m='181940'>bit</span> <span
  m='182080'>of</span> <span m='182960'>algebra</span> <span
  m='183390'>here.</span> </p><p><span m='183930'>OK,</span> <span
  m='184240'>but</span> <span m='184400'>now</span> <span m='184700'>we</span>
  <span m='184820'>know</span> <span m='185850'>that</span> <span
  m='187240'>we've</span> <span m='187910'>seen</span> <span m='188180'>a</span>
  <span m='188250'>formula</span> <span m='188770'>for</span> <span
  m='189700'>antidifferentiating</span> <span m='190860'>a</span> <span
  m='191000'>single</span> <span m='191320'>power</span> <span m='191690'>of
  x.</span> <span m='191980'>I</span> <span m='192090'>mean</span> <span
  m='192220'>we</span> <span m='192320'>know</span> <span m='192530'>how</span>
  <span m='192660'>to</span> <span m='193300'>differentiate</span> <span
  m='193950'>a</span> <span m='194000'>single</span> <span
  m='194290'>power</span> <span m='194630'>of x,</span> <span
  m='194860'>and</span> <span m='195050'>so</span> <span m='195590'>to</span>
  <span m='195720'>do</span> <span m='195850'>an</span> <span
  m='195940'>antiderivative</span> <span m='196640'>is</span> <span
  m='196780'>just</span> <span m='197040'>the</span> <span
  m='197620'>inverse</span> <span m='198020'>process.</span> <span
  m='199780'>And</span> <span m='201450'>we</span> <span m='201620'>also</span>
  <span m='201960'>know</span> <span m='202620'>that</span> <span
  m='202810'>when</span> <span m='202980'>you</span> <span
  m='203110'>have</span> <span m='203460'>the</span> <span
  m='203550'>derivative</span> <span m='204070'>of</span> <span m='204230'>a
  sum,</span> <span m='204730'>it's</span> <span m='204910'>the</span> <span
  m='205020'>sum</span> <span m='205240'>of</span> <span
  m='205360'>derivatives.</span> <span m='206110'>And</span> <span
  m='206360'>so</span> <span m='207410'>consequently,</span> <span
  m='208280'>if</span> <span m='208440'>you</span> <span m='208570'>have
  the</span> <span m='208760'>antiderivative</span> <span m='209830'>of</span>
  <span m='210000'>a</span> <span m='210060'>sum,</span> <span
  m='210420'>it's</span> <span m='210590'>just</span> <span
  m='210770'>the</span> <span m='210860'>sum</span> <span m='211170'>of</span>
  <span m='211260'>the</span> <span m='211360'>antiderivatives.</span> <span
  m='212420'>So</span> <span m='212630'>we</span> <span m='212750'>can</span>
  <span m='212920'>write</span> <span m='213230'>this</span> <span
  m='213440'>out</span> <span m='214210'>into</span> <span m='215070'>its</span>
  <span m='215210'>constituent</span> <span m='215790'>parts.</span> <span
  m='216510'>So</span> <span m='216680'>it's</span> <span m='216810'>the</span>
  <span m='216880'>antiderivative</span> <span m='217470'>of</span> <span
  m='217530'>x</span> <span m='218150'>to</span> <span m='218240'>the</span>
  <span m='218320'>sixth</span> <span m='219800'>dx</span> <span
  m='221110'>plus--</span> <span m='223020'>now</span> <span
  m='223120'>of</span> <span m='223180'>course</span> <span
  m='223370'>you</span> <span m='223450'>don't</span> <span
  m='223650'>have</span> <span m='224000'>to</span> <span m='224360'>do</span>
  <span m='224510'>this.</span> <span m='224890'>You</span> <span
  m='225010'>could</span> <span m='225530'>probably</span> <span
  m='226210'>proceed</span> <span m='226680'>just</span> <span
  m='226880'>from</span> <span m='227260'>this</span> <span
  m='227550'>step</span> <span m='227840'>onwards, or,</span> <span
  m='229240'>but</span> <span m='230350'>I</span> <span m='230470'>don't</span>
  <span m='230670'>see</span> <span m='230810'>any</span> <span m='230980'>harm
  in</span> <span m='231980'>actually</span> <span m='232880'>splitting</span>
  <span m='233135'>it</span> <span m='233390'>up</span> <span
  m='233570'>myself.</span> </p><p><span m='234120'>So</span> <span
  m='235170'>antiderivative</span> <span m='235760'>of</span> <span
  m='235930'>2x*dx</span> <span m='236970'>minus, OK,</span> <span
  m='239340'>x</span> <span m='239720'>to</span> <span m='239840'>the</span>
  <span m='240250'>minus</span> <span m='241480'>4/3</span> <span
  m='242100'>dx</span> <span m='244470'>plus</span> <span
  m='246180'>minus</span> <span m='246640'>3</span> <span m='247040'>x</span>
  <span m='247380'>to the</span> <span m='248530'>minus</span> <span
  m='248915'>2</span> <span m='249300'>dx.</span> </p><p><span
  m='250570'>So</span> <span m='250710'>I've</span> <span m='250810'>just</span>
  <span m='250980'>split</span> <span m='251330'>it up</span> <span
  m='251490'>into</span> <span m='251670'>a</span> <span m='251720'>bunch</span>
  <span m='251930'>of</span> <span m='252000'>pieces.</span> <span
  m='252470'>I</span> <span m='252580'>guess</span> <span m='253220'>this</span>
  <span m='253430'>one</span> <span m='253610'>I</span> <span
  m='253690'>sort</span> <span m='253860'>of</span> <span
  m='253940'>pulled</span> <span m='254230'>the</span> <span
  m='254330'>minus</span> <span m='254700'>sign</span> <span
  m='254950'>out</span> <span m='255160'>and</span> <span m='255290'>this</span>
  <span m='255450'>one</span> <span m='255600'>I</span> <span
  m='255680'>didn't.</span> <span m='255950'>But</span> <span
  m='256260'>you</span> <span m='256410'>know,</span> <span
  m='256520'>whatever.</span> <span m='258090'>Either</span> <span
  m='258940'>way.</span> <span m='260020'>OK</span> <span m='260320'>so</span>
  <span m='260460'>now</span> <span m='260920'>we</span> <span
  m='261040'>just</span> <span m='261210'>need</span> <span m='261380'>to</span>
  <span m='261510'>remember</span> <span m='261980'>our</span> <span
  m='262570'>formulas</span> <span m='263130'>for</span> <span
  m='263930'>taking</span> <span m='264230'>the</span> <span
  m='264320'>antiderivative</span> <span m='264890'>of</span> <span
  m='265430'>a</span> <span m='265500'>power</span> <span m='265830'>of</span>
  <span m='265960'>x.</span> <span m='266740'>So</span> <span
  m='267450'>in</span> <span m='267600'>order</span> <span m='267840'>to</span>
  <span m='268080'>that,</span> <span m='268480'>so</span> <span
  m='268610'>when</span> <span m='268710'>you</span> <span
  m='268930'>take</span> <span m='269300'>a</span> <span
  m='269520'>derivative,</span> <span m='271140'>the</span> <span
  m='271720'>power</span> <span m='272920'>goes</span> <span
  m='273200'>down</span> <span m='273530'>by</span> <span m='273710'>one.</span>
  <span m='274510'>So</span> <span m='274720'>if</span> <span
  m='274790'>you</span> <span m='274890'>take</span> <span m='275090'>an</span>
  <span m='275290'>antiderivative</span> <span m='275920'>to</span> <span
  m='276350'>the</span> <span m='276460'>power</span> <span
  m='276760'>will</span> <span m='276880'>always</span> <span
  m='277100'>go</span> <span m='277250'>up</span> <span m='277550'>by</span>
  <span m='277730'>one.</span> </p><p><span m='278660'>So</span> <span
  m='280440'>in</span> <span m='280570'>this</span> <span m='280740'>case</span>
  <span m='281030'>you</span> <span m='281170'>get,</span> <span
  m='281665'>so</span> <span m='282160'>you're</span> <span
  m='282290'>going</span> <span m='282380'>to</span> <span m='282570'>get</span>
  <span m='282950'>x</span> <span m='284120'>to</span> <span
  m='284260'>the</span> <span m='284370'>seventh.</span> <span
  m='285880'>And</span> <span m='286250'>now</span> <span m='286900'>when</span>
  <span m='287090'>you</span> <span m='287180'>differentiate</span> <span
  m='287946'>x</span> <span m='288330'>to</span> <span m='288430'>the</span>
  <span m='288530'>seventh,</span> <span m='289410'>a</span> <span
  m='289560'>7</span> <span m='290030'>comes</span> <span m='290330'>down</span>
  <span m='290560'>in</span> <span m='290630'>front, right?</span> <span
  m='291170'>You</span> <span m='291350'>get</span> <span m='291470'>7</span>
  <span m='291890'>x</span> <span m='292090'>to</span> <span
  m='292190'>the</span> <span m='292280'>sixth.</span> <span
  m='292940'>So</span> <span m='293140'>in</span> <span m='293220'>order</span>
  <span m='293530'>to</span> <span m='293680'>get</span> <span
  m='293910'>just</span> <span m='294140'>x to</span> <span
  m='294510'>the</span> <span m='294600'>sixth,</span> <span
  m='295360'>we</span> <span m='295510'>have</span> <span m='295620'>to</span>
  <span m='295850'>also</span> <span m='296140'>divide</span> <span
  m='296690'>by</span> <span m='296850'>that</span> <span m='297470'>7</span>
  <span m='297870'>there.</span> <span m='298320'>So</span> <span m='298720'>x
  to</span> <span m='299050'>the</span> <span m='299130'>sixth, the</span> <span
  m='299630'>antiderivative</span> <span m='300250'>is x</span> <span
  m='300670'>to</span> <span m='300760'>the</span> <span
  m='300860'>seventh</span> <span m='301580'>over</span> <span
  m='301770'>7.</span> <span m='302720'>2x,</span> <span m='303870'>so</span>
  <span m='304060'>that's</span> <span m='304250'>going to</span> <span
  m='304470'>give</span> <span m='304610'>us</span> <span m='304820'>plus</span>
  <span m='306600'>2</span> <span m='307370'>x</span> <span
  m='307650'>squared</span> <span m='308370'>over</span> <span
  m='308710'>2.</span> <span m='309560'>Or</span> <span m='309790'>if</span>
  <span m='309870'>you</span> <span m='309990'>like,</span> <span
  m='310210'>you</span> <span m='310310'>could</span> <span
  m='310450'>just</span> <span m='310860'>recognize</span> <span
  m='311410'>right</span> <span m='311580'>away</span> <span
  m='311780'>that</span> <span m='311940'>2x</span> <span m='312500'>is
  the</span> <span m='312590'>derivative</span> <span m='312970'>of</span> <span
  m='313110'>x</span> <span m='313410'>squared.</span> </p><p><span
  m='316100'>Minus--</span> <span m='316790'>OK</span> <span
  m='317120'>now</span> <span m='317260'>we've</span> <span
  m='317400'>got</span> <span m='317560'>minus</span> <span
  m='317890'>powers.</span> <span m='318870'>Rather,</span> <span
  m='319120'>negative</span> <span m='319550'>powers,</span> <span
  m='319910'>so</span> <span m='320620'>that</span> <span
  m='320800'>always</span> <span m='321550'>is</span> <span m='321700'>a</span>
  <span m='321770'>little</span> <span m='322120'>trickier</span> <span
  m='322600'>to</span> <span m='323450'>keep</span> <span
  m='323650'>track</span> <span m='323920'>of.</span> <span m='324210'>So</span>
  <span m='324380'>again,</span> <span m='324660'>the</span> <span
  m='324740'>same</span> <span m='324980'>thing</span> <span
  m='325180'>is</span> <span m='325280'>true</span> <span
  m='325480'>though.</span> <span m='325760'>You</span> <span
  m='325930'>have</span> <span m='326820'>to, you</span> <span
  m='327030'>add</span> <span m='327210'>one</span> <span m='327570'>to</span>
  <span m='327700'>the</span> <span m='328460'>exponent.</span> <span
  m='328910'>The</span> <span m='329070'>exponent</span> <span
  m='329520'>goes</span> <span m='329670'>up</span> <span m='329830'>by</span>
  <span m='329970'>one</span> <span m='330200'>when</span> <span
  m='330330'>you</span> <span m='330410'>take</span> <span m='330590'>an</span>
  <span m='330660'>antiderivative.</span> <span m='330890'>It</span> <span
  m='331290'>goes</span> <span m='331500'>down</span> <span m='331730'>by</span>
  <span m='331870'>one when</span> <span m='332210'>you take a</span> <span
  m='332350'>derivative.</span> <span m='333440'>So</span> <span
  m='333570'>when</span> <span m='333680'>you</span> <span m='333860'>add</span>
  <span m='334200'>1</span> <span m='334510'>to</span> <span
  m='334620'>minus</span> <span m='335040'>4/3</span> <span
  m='336200'>you</span> <span m='336450'>get</span> <span
  m='336660'>minus</span> <span m='337110'>1/3.</span> <span
  m='338270'>So</span> <span m='338490'>we</span> <span m='338590'>have</span>
  <span m='339652'>x</span> <span m='340040'>to</span> <span
  m='340190'>the</span> <span m='340390'>minus</span> <span
  m='341890'>1/3.</span> <span m='343240'>And</span> <span m='343470'>now
  I</span> <span m='343620'>have</span> <span m='343800'>to</span> <span
  m='343910'>divide</span> <span m='344520'>by</span> <span
  m='345600'>minus</span> <span m='347180'>1/3.</span> <span
  m='348100'>When</span> <span m='348340'>I</span> <span m='348400'>take</span>
  <span m='348620'>a</span> <span m='348720'>derivative</span> <span
  m='349100'>here, we get--</span> <span m='349350'>of</span> <span m='350990'>x
  to the</span> <span m='351360'>minus</span> <span m='351670'>1/3,</span> <span
  m='352140'>I</span> <span m='352200'>get</span> <span m='353580'>minus</span>
  <span m='354140'>1/3</span> <span m='354430'>x</span> <span
  m='355240'>to</span> <span m='355380'>the</span> <span m='356120'>minus</span>
  <span m='356490'>4/3.</span> <span m='356990'>So</span> <span
  m='357140'>I</span> <span m='357210'>need to</span> <span
  m='357420'>divide</span> <span m='357880'>by</span> <span
  m='358010'>that</span> <span m='358180'>minus</span> <span m='358470'>1/3.
  OK.</span> </p><p><span m='360040'>And finally</span> <span m='360910'>here
  so</span> <span m='361400'>minus</span> <span m='362110'>3</span> <span
  m='362565'>x</span> <span m='363020'>to</span> <span m='363120'>the</span>
  <span m='363190'>minus</span> <span m='363640'>2.</span> <span m='364620'>So
  OK, so</span> <span m='365190'>just</span> <span m='365400'>like</span> <span
  m='365570'>this</span> <span m='365690'>first</span> <span
  m='365970'>one,</span> <span m='366100'>you</span> <span
  m='366580'>might</span> <span m='366770'>recognize</span> <span
  m='367300'>that</span> <span m='367790'>right</span> <span
  m='368030'>off</span> <span m='368250'>as</span> <span m='368380'>the</span>
  <span m='368470'>derivative</span> <span m='368980'>of</span> <span
  m='369110'>x to</span> <span m='369450'>the</span> <span
  m='369520'>minus</span> <span m='369870'>3. So this is plus--</span> <span
  m='373770'>Oh!</span> <span m='374760'>Ha</span> <span m='375100'>ha!</span>
  <span m='375990'>You</span> <span m='376210'>could</span> <span
  m='376630'>do</span> <span m='376780'>that</span> <span m='377050'>if</span>
  <span m='377210'>you</span> <span m='377340'>were</span> <span
  m='377760'>completely</span> <span m='378220'>confused</span> <span
  m='378930'>like</span> <span m='379190'>me.</span> <span m='380180'>So right,
  so</span> <span m='382045'>x to the</span> <span m='382740'>minus</span> <span
  m='383030'>2,</span> <span m='383400'>it</span> <span
  m='384070'>increased</span> <span m='384530'>by</span> <span
  m='384650'>one.</span> <span m='385470'>Increases</span> <span
  m='385960'>by</span> <span m='386100'>1.</span> <span m='386570'>So when
  it</span> <span m='386890'>increases</span> <span m='387300'>by</span> <span
  m='387410'>1,</span> <span m='387560'>you</span> <span m='387620'>get</span>
  <span m='387750'>minus</span> <span m='388100'>1</span> <span
  m='388460'>not</span> <span m='388730'>minus</span> <span m='388880'>3.</span>
  <span m='389220'>Oh! OK, good.</span> </p><p><span m='390810'>So</span> <span
  m='391430'>this</span> <span m='391650'>is</span> <span
  m='392220'>minus</span> <span m='393020'>3</span> <span
  m='394480'>times</span> <span m='394940'>x</span> <span m='395340'>to</span>
  <span m='395480'>the</span> <span m='396040'>minus</span> <span
  m='396500'>1</span> <span m='397430'>over</span> <span m='398590'>minus</span>
  <span m='399030'>1.</span> <span m='399730'>OK.</span> <span
  m='400480'>That's</span> <span m='400690'>much</span> <span m='400870'>better.
  And if you like, right,</span> <span m='402590'>so, OK, so</span> <span
  m='403260'>we</span> <span m='403370'>could--</span> <span
  m='403920'>any</span> <span m='404420'>constant we</span> <span
  m='404920'>add</span> <span m='405100'>to</span> <span m='405200'>this,</span>
  <span m='405380'>it'll</span> <span m='405530'>still</span> <span
  m='405750'>be</span> <span m='405890'>an</span> <span
  m='406200'>antiderivative.</span> <span m='407400'>And</span> <span
  m='407590'>now</span> <span m='407680'>we</span> <span m='407820'>can</span>
  <span m='407940'>do</span> <span m='408060'>a</span> <span
  m='408150'>little</span> <span m='408340'>bit</span> <span
  m='408490'>of</span> <span m='408720'>arithmetic</span> <span
  m='409320'>to</span> <span m='409820'>arrange</span> <span
  m='410190'>this</span> <span m='410450'>into</span> <span
  m='410480'>nicer</span> <span m='410780'>forms</span> <span
  m='411410'>if</span> <span m='411610'>you</span> <span
  m='411720'>wanted.</span> <span m='412380'>So</span> <span
  m='412550'>you</span> <span m='412660'>could</span> <span
  m='412830'>rewrite</span> <span m='413250'>this</span> <span m='414100'>as
  say,</span> <span m='415560'>x to</span> <span m='415980'>the</span> <span
  m='416080'>seventh</span> <span m='417530'>over</span> <span
  m='417720'>7</span> <span m='419100'>plus</span> <span m='419650'>x</span>
  <span m='419910'>squared</span> <span m='422770'>plus</span> <span
  m='424100'>3</span> <span m='424890'>x</span> <span m='425730'>to</span> <span
  m='425840'>the</span> <span m='425930'>minus</span> <span
  m='426290'>1/3</span> <span m='430100'>plus</span> <span m='431490'>3</span>
  <span m='431810'>x</span> <span m='432230'>to the</span> <span
  m='432650'>minus</span> <span m='433110'>1</span> <span m='434540'>plus</span>
  <span m='434840'>a constant.</span> </p><p><span m='435370'>Now,</span> <span
  m='435860'>suppose</span> <span m='436290'>you</span> <span
  m='436400'>got</span> <span m='436620'>here</span> <span m='437260'>and</span>
  <span m='437460'>suppose</span> <span m='438350'>that</span> <span
  m='439220'>you</span> <span m='439400'>did</span> <span m='439510'>the</span>
  <span m='439650'>same</span> <span m='439900'>mistake</span> <span
  m='440280'>that</span> <span m='440400'>I</span> <span m='440490'>just</span>
  <span m='440740'>made.</span> <span m='441850'>And</span> <span
  m='442090'>you</span> <span m='442590'>had</span> <span
  m='442760'>accidentally</span> <span m='443710'>thought</span> <span
  m='443970'>that</span> <span m='444090'>this</span> <span
  m='444260'>was</span> <span m='444340'>going to</span> <span
  m='444500'>be</span> <span m='444590'>a</span> <span m='444640'>minus</span>
  <span m='444980'>1/3</span> <span m='445320'>power</span> <span
  m='445600'>instead</span> <span m='445850'>of</span> <span m='445910'>a</span>
  <span m='445970'>minus</span> <span m='446250'>first</span> <span
  m='446610'>power.</span> <span m='447280'>So how would you,</span> <span
  m='449470'>is</span> <span m='449600'>there</span> <span m='449730'>any</span>
  <span m='449880'>way that</span> <span m='450360'>you</span> <span
  m='450550'>can</span> <span m='450700'>prevent</span> <span
  m='451100'>yourself</span> <span m='451480'>making</span> <span
  m='451790'>that</span> <span m='451950'>mistake?</span> <span
  m='452430'>Well</span> <span m='452860'>there</span> <span
  m='452980'>actually</span> <span m='453400'>is.</span> <span
  m='453730'>So</span> <span m='453830'>one</span> <span m='454070'>nice</span>
  <span m='454330'>thing</span> <span m='454510'>about</span> <span
  m='455000'>antiderivatives</span> <span m='456070'>is</span> <span
  m='456280'>that</span> <span m='456370'>it's</span> <span
  m='456500'>really</span> <span m='456860'>easy</span> <span
  m='457200'>to</span> <span m='457310'>check</span> <span
  m='457580'>your</span> <span m='457690'>work.</span> <span
  m='457870'>After</span> <span m='458180'>you've</span> <span
  m='458300'>computed</span> <span m='458750'>an</span> <span
  m='458940'>antiderivative,</span> <span m='460030'>or</span> <span
  m='460200'>something</span> <span m='460530'>that</span> <span
  m='460640'>you</span> <span m='460740'>think</span> <span m='461030'>is</span>
  <span m='461140'>antiderivative,</span> <span m='462090'>you</span> <span
  m='462270'>can</span> <span m='462380'>always</span> <span
  m='462680'>go</span> <span m='462790'>back</span> <span m='463050'>and</span>
  <span m='463210'>take</span> <span m='463530'>the</span> <span
  m='463640'>derivative</span> <span m='464030'>of</span> <span
  m='464240'>the</span> <span m='464350'>thing</span> <span
  m='464530'>that</span> <span m='464650'>you've</span> <span
  m='464800'>computed</span> <span m='465420'>and</span> <span
  m='465640'>check</span> <span m='465970'>that</span> <span
  m='466080'>it's</span> <span m='466200'>equal</span> <span
  m='466470'>to</span> <span m='466550'>what</span> <span m='466710'>you</span>
  <span m='466800'>started</span> <span m='467130'>with.</span> <span
  m='467630'>So</span> <span m='468890'>if you, if</span> <span
  m='469830'>you're</span> <span m='470510'>ever</span> <span
  m='470770'>worried</span> <span m='471240'>that</span> <span
  m='471370'>you</span> <span m='471450'>made</span> <span m='471640'>a</span>
  <span m='471680'>mistake</span> <span m='472400'>computing</span> <span
  m='472760'>an</span> <span m='472820'>antiderivative,</span> <span
  m='473830'>one</span> <span m='474070'>thing</span> <span
  m='474210'>you</span> <span m='474310'>can</span> <span
  m='474420'>always</span> <span m='474670'>do</span> <span m='474980'>is</span>
  <span m='475240'>take</span> <span m='475440'>a</span> <span
  m='475490'>derivative</span> <span m='476090'>of</span> <span
  m='476210'>what</span> <span m='476360'>you've</span> <span
  m='476480'>got</span> <span m='476660'>at</span> <span m='476740'>the</span>
  <span m='476860'>end.</span> </p><p><span m='477300'>So</span> <span
  m='477470'>if we</span> <span m='477590'>take</span> <span m='477770'>a</span>
  <span m='477820'>derivative</span> <span m='478260'>here</span> <span
  m='478450'>we</span> <span m='478580'>get</span> <span m='479120'>x to</span>
  <span m='479500'>the</span> <span m='479600'>sixth</span> <span
  m='480460'>plus</span> <span m='480850'>2x</span> <span
  m='482150'>minus</span> <span m='482590'>x</span> <span m='483030'>to</span>
  <span m='483110'>the</span> <span m='483180'>minus</span> <span
  m='483480'>4/3</span> <span m='484730'>minus</span> <span m='485290'>3</span>
  <span m='485670'>x to</span> <span m='485930'>the</span> <span
  m='486050'>minus</span> <span m='486390'>2. OK?</span> <span
  m='488240'>So</span> <span m='488770'>that</span> <span m='488990'>was</span>
  <span m='489110'>just</span> <span m='489590'>using</span> <span
  m='489990'>our</span> <span m='490450'>rule</span> <span m='490730'>for</span>
  <span m='490870'>powers</span> <span m='491370'>one</span> <span
  m='491610'>by</span> <span m='491770'>one. And OK,</span> <span
  m='492660'>so</span> <span m='492770'>you</span> <span m='492900'>say</span>
  <span m='493140'>that</span> <span m='493420'>out</span> <span
  m='493630'>loud</span> <span m='493980'>or</span> <span
  m='494180'>write</span> <span m='494430'>it</span> <span
  m='494530'>down</span> <span m='494960'>and</span> <span
  m='495200'>then</span> <span m='495300'>you</span> <span
  m='495410'>just</span> <span m='495660'>check.</span> <span
  m='496060'>Right?</span> <span m='496350'>So</span> <span m='496910'>I</span>
  <span m='496990'>said</span> <span m='497200'>that,</span> <span m='497470'>so
  </span> <span m='498380'>that's</span> <span m='498690'>exactly</span> <span
  m='499170'>the</span> <span m='499280'>same</span> <span
  m='499540'>thing</span> <span m='499720'>we've</span> <span
  m='499870'>got</span> <span m='500070'>right</span> <span m='500240'>here.
  Yeah?</span> <span m='501310'>So</span> <span m='502230'>x</span> <span
  m='502720'>to</span> <span m='502790'>the</span> <span m='502870'>sixth</span>
  <span m='503160'>plus</span> <span m='503370'>2x</span> <span
  m='503730'>minus</span> <span m='504020'>x</span> <span m='504230'>to</span>
  <span m='504380'>the minus</span> <span m='504590'>4/3</span> <span
  m='505340'>minus</span> <span m='505670'>3x</span> <span m='506240'>to the
  minus</span> <span m='506590'>2.</span> </p><p><span m='507490'>So</span>
  <span m='509020'>one</span> <span m='509340'>of</span> <span
  m='509420'>the</span> <span m='509500'>nicest</span> <span
  m='509970'>things</span> <span m='510210'>about</span> <span
  m='510440'>antiderivatives,</span> <span m='511620'>they</span> <span
  m='511760'>can</span> <span m='511880'>be</span> <span
  m='511980'>difficult</span> <span m='512520'>to</span> <span
  m='512890'>figure</span> <span m='513240'>out</span> <span
  m='513370'>in</span> <span m='513450'>the</span> <span m='513530'>first</span>
  <span m='513860'>place,</span> <span m='514330'>but</span> <span
  m='514590'>after</span> <span m='514910'>you've</span> <span
  m='515110'>got</span> <span m='515400'>something</span> <span
  m='515710'>that</span> <span m='515820'>you</span> <span
  m='515930'>think</span> <span m='516220'>is</span> <span
  m='516340'>antiderivative</span> <span m='517350'>it's</span> <span
  m='517540'>very</span> <span m='517850'>easy</span> <span m='518140'>to</span>
  <span m='518240'>go</span> <span m='518400'>back</span> <span
  m='518870'>and</span> <span m='519100'>check</span> <span
  m='519580'>whether</span> <span m='519900'>you</span> <span
  m='520020'>did</span> <span m='520190'>it</span> <span
  m='520410'>correctly</span> <span m='521080'>by</span> <span
  m='521210'>taking</span> <span m='521600'>the</span> <span
  m='521700'>derivative</span> <span m='522300'>and</span> <span
  m='522590'>making</span> <span m='522840'>sure</span> <span
  m='523080'>that</span> <span m='523200'>it</span> <span
  m='523320'>matches</span> <span m='524020'>the</span> <span
  m='525800'>thing</span> <span m='526050'>that</span> <span
  m='526170'>you</span> <span m='526250'>were</span> <span
  m='526350'>trying</span> <span m='526660'>to</span> <span
  m='526880'>antidifferentiate</span> <span m='527580'>at</span> <span
  m='527710'>the</span> <span m='527790'>beginning.</span> <span
  m='528750'>So</span> <span m='528950'>that's that.</span> </p>
embedded_media:
  - uid: e552551027f3613e7e45e91c481e6886
    parent_uid: c85a5bb7d874a76062485fc3dc7d3704
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: v90JNWCTupk
  - uid: 4957bf2d9c9c158aa12ba305bb594aab
    parent_uid: c85a5bb7d874a76062485fc3dc7d3704
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/v90JNWCTupk/default.jpg'
  - uid: de8ee26865299dc5369386244a8bf47a
    parent_uid: c85a5bb7d874a76062485fc3dc7d3704
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: v90JNWCTupk
  - uid: 6705dd11d43b7a0467a268211a8872f0
    parent_uid: c85a5bb7d874a76062485fc3dc7d3704
    id: v90JNWCTupk.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-2-applications-of-differentiation/part-c-mean-value-theorem-antiderivatives-and-differential-equations/session-37-antiderivatives/computing-antiderivatives/v90JNWCTupk.srt
  - uid: 2e434c3677677b51cba29e31b12e44c7
    parent_uid: c85a5bb7d874a76062485fc3dc7d3704
    id: v90JNWCTupk.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-01sc-single-variable-calculus-fall-2010/unit-2-applications-of-differentiation/part-c-mean-value-theorem-antiderivatives-and-differential-equations/session-37-antiderivatives/computing-antiderivatives/v90JNWCTupk.pdf
  - uid: 2b9bff42170d85832dab705f8cbb675e
    parent_uid: c85a5bb7d874a76062485fc3dc7d3704
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 67a8eca879261f2fdba0701bd4315c3c
    parent_uid: c85a5bb7d874a76062485fc3dc7d3704
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: e8373abde34d1d2659afc705ae196094
    parent_uid: c85a5bb7d874a76062485fc3dc7d3704
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/computing-antiderivatives/id414308064?i=90319189
  - uid: f9208a6f21befad1e2c111300a155b84
    parent_uid: c85a5bb7d874a76062485fc3dc7d3704
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_01SCF10/MIT18_01SCF10Rec_31_300k.mp4'
type: courses
layout: video
---
