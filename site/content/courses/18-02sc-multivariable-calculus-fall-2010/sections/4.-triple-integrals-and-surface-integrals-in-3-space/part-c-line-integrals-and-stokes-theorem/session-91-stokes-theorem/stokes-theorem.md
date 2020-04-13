---
title: Stokes' Theorem
uid: 079c829fd16cbb1c7f208f883f412385
parent_uid: 369a5a9d53f8ab4da9f478cd9a5ab7c7
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/4.-triple-integrals-and-surface-integrals-in-3-space/part-c-line-integrals-and-stokes-theorem/session-91-stokes-theorem/stokes-theorem
short_url: stokes-theorem
inline_embed_id: 95631076stokes'theorem27153246
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='7220'>JOEL LEWIS: Hi.</span> <span m='7690'>Welcome</span> <span
  m='8020'>back</span> <span m='8250'>to</span> <span
  m='8340'>recitation.</span> <span m='9360'>In</span> <span
  m='9520'>lecture,</span> <span m='9940'>you've</span> <span
  m='10110'>been</span> <span m='10260'>learning</span> <span
  m='10560'>about</span> <span m='10850'>Stokes'</span> <span
  m='11310'>Theorem.</span> <span m='11600'>And</span> <span m='11890'>I</span>
  <span m='12060'>have</span> <span m='12180'>a</span> <span
  m='12220'>nice</span> <span m='12480'>question</span> <span
  m='12910'>here</span> <span m='13140'>for</span> <span m='13360'>you</span>
  <span m='13480'>that</span> <span m='13610'>can</span> <span
  m='13770'>put</span> <span m='13980'>Stokes'</span> <span
  m='14370'>Theorem</span> <span m='14650'>to</span> <span m='14750'>the</span>
  <span m='14840'>test.</span> </p><p><span m='15580'>So</span> <span
  m='15770'>what</span> <span m='15880'>I'd</span> <span m='15990'>like</span>
  <span m='16190'>you</span> <span m='16290'>to</span> <span m='16400'>do</span>
  <span m='16570'>is</span> <span m='16710'>I'd</span> <span
  m='16840'>like</span> <span m='17000'>you</span> <span m='17080'>to</span>
  <span m='17170'>consider</span> <span m='17650'>this</span> <span
  m='17880'>field</span> <span m='18330'>F.</span> <span m='19300'>So</span>
  <span m='19490'>its</span> <span m='19760'>components</span> <span
  m='20420'>are</span> <span m='20610'>2z,</span> <span m='21420'>x,</span>
  <span m='21780'>and</span> <span m='22000'>y.</span> <span
  m='22910'>And</span> <span m='23610'>the</span> <span m='23890'>surface</span>
  <span m='24530'>S</span> <span m='25110'>that</span> <span m='25220'>is</span>
  <span m='25330'>the</span> <span m='25430'>top</span> <span
  m='25890'>half</span> <span m='26250'>of</span> <span m='26390'>the</span>
  <span m='26500'>unit</span> <span m='26910'>sphere.</span> <span
  m='27450'>So</span> <span m='27650'>it's</span> <span m='27820'>the</span>
  <span m='28010'>sphere</span> <span m='28630'>of</span> <span
  m='28770'>radius</span> <span m='29190'>1</span> <span
  m='29590'>centered</span> <span m='29930'>at</span> <span m='30030'>the</span>
  <span m='30120'>origin,</span> <span m='30890'>but</span> <span
  m='31070'>only</span> <span m='31330'>its</span> <span m='31520'>top</span>
  <span m='31810'>half.</span> <span m='32080'>Only</span> <span
  m='32310'>the</span> <span m='32410'>part</span> <span m='32660'>where</span>
  <span m='32770'>z</span> <span m='32990'>is</span> <span
  m='33140'>greater</span> <span m='33400'>than</span> <span m='33490'>or</span>
  <span m='33580'>equal</span> <span m='33685'>to</span> <span
  m='33790'>0.</span> </p><p><span m='34540'>So</span> <span
  m='34720'>what</span> <span m='34830'>I'd</span> <span m='34930'>like</span>
  <span m='35110'>you</span> <span m='35190'>to</span> <span m='35280'>do</span>
  <span m='35650'>is</span> <span m='35860'>to</span> <span
  m='35950'>verify</span> <span m='36620'>Stokes'</span> <span
  m='37140'>Theorem</span> <span m='37480'>for</span> <span
  m='37600'>this</span> <span m='37720'>surface.</span> <span
  m='38540'>So</span> <span m='39110'>that</span> <span m='39300'>is,</span>
  <span m='39670'>I'd</span> <span m='39840'>like</span> <span
  m='40050'>you</span> <span m='40150'>to</span> <span m='40750'>compute</span>
  <span m='41650'>the</span> <span m='42860'>surface</span> <span
  m='43360'>integral</span> <span m='43950'>that</span> <span
  m='44080'>comes</span> <span m='44300'>from</span> <span
  m='44480'>Stokes'</span> <span m='44870'>Theorem</span> <span
  m='45140'>for</span> <span m='45250'>this</span> <span
  m='45370'>surface,</span> <span m='45980'>and</span> <span
  m='46470'>the</span> <span m='46570'>line</span> <span
  m='46870'>integral</span> <span m='47500'>that</span> <span
  m='47630'>comes</span> <span m='47920'>from</span> <span
  m='48060'>Stokes'</span> <span m='48430'>Theorem</span> <span
  m='48740'>for</span> <span m='48860'>the</span> <span
  m='48980'>surface,</span> <span m='49650'>and</span> <span
  m='49920'>check</span> <span m='50190'>that</span> <span
  m='50330'>they're</span> <span m='50470'>really</span> <span
  m='50770'>equal</span> <span m='51060'>to</span> <span m='51220'>each</span>
  <span m='51390'>other.</span> </p><p><span m='52030'>Now,</span> <span
  m='53110'>before</span> <span m='53460'>we</span> <span
  m='53590'>start,</span> <span m='53920'>we</span> <span
  m='54010'>should</span> <span m='54150'>just</span> <span m='54310'>say</span>
  <span m='54460'>one</span> <span m='55030'>brief</span> <span
  m='55320'>thing</span> <span m='55610'>about</span> <span
  m='56310'>compatible</span> <span m='56920'>orientation.</span> <span
  m='57610'>So</span> <span m='57730'>I</span> <span m='57800'>didn't</span>
  <span m='58100'>give</span> <span m='58270'>you</span> <span
  m='58430'>any</span> <span m='58620'>orientations,</span> <span
  m='59380'>but</span> <span m='59570'>of</span> <span m='59660'>course,</span>
  <span m='60130'>it</span> <span m='60290'>doesn't</span> <span
  m='60590'>matter</span> <span m='60860'>as</span> <span m='60960'>long</span>
  <span m='61170'>as</span> <span m='61260'>you</span> <span
  m='61350'>choose</span> <span m='61740'>ones</span> <span
  m='62080'>that</span> <span m='62180'>are</span> <span
  m='62240'>compatible.</span> <span m='63170'>So</span> <span
  m='63940'>if</span> <span m='64080'>you</span> <span m='64220'>think</span>
  <span m='64430'>about</span> <span m='64700'>your</span> <span
  m='64800'>rules</span> <span m='65330'>that</span> <span m='65470'>you</span>
  <span m='65580'>have</span> <span m='65990'>for</span> <span
  m='66130'>finding</span> <span m='66520'>them.</span> <span
  m='66620'>So</span> <span m='66740'>if</span> <span m='66830'>you</span> <span
  m='66940'>imagine</span> <span m='67310'>yourself</span> <span
  m='68000'>walking</span> <span m='68500'>along</span> <span
  m='68910'>this</span> <span m='69090'>boundary</span> <span
  m='69540'>circle</span> <span m='70260'>with</span> <span
  m='70460'>your</span> <span m='70600'>left</span> <span m='71010'>hand</span>
  <span m='71380'>out</span> <span m='71650'>over</span> <span
  m='71920'>that</span> <span m='72170'>sphere.</span> <span m='72940'>So</span>
  <span m='73160'>you'll</span> <span m='73580'>be</span> <span
  m='73720'>walking</span> <span m='74810'>in</span> <span m='75050'>this</span>
  <span m='75780'>counterclockwise</span> <span m='77350'>direction</span> <span
  m='78270'>when</span> <span m='78470'>your</span> <span m='79580'>head</span>
  <span m='79910'>is</span> <span m='80080'>sticking</span> <span
  m='80530'>out</span> <span m='80780'>of</span> <span m='80920'>the</span>
  <span m='81020'>sphere.</span> <span m='82040'>All</span> <span
  m='82255'>right?</span> </p><p><span m='82470'>So</span> <span
  m='83400'>in</span> <span m='83550'>other</span> <span m='83730'>words,</span>
  <span m='83970'>the</span> <span m='84200'>outward</span> <span
  m='84720'>orientation</span> <span m='85550'>on</span> <span
  m='85690'>the</span> <span m='85780'>sphere</span> <span m='86680'>is</span>
  <span m='87040'>compatible</span> <span m='87680'>with</span> <span
  m='87840'>the</span> <span m='87930'>counterclockwise</span> <span
  m='88920'>orientation</span> <span m='90640'>on</span> <span
  m='91010'>the</span> <span m='91090'>circle</span> <span m='92380'>that</span>
  <span m='92600'>is</span> <span m='92730'>the</span> <span
  m='92810'>boundary.</span> <span m='93130'>So</span> <span
  m='93220'>let's</span> <span m='93380'>actually</span> <span
  m='93680'>put</span> <span m='93850'>in</span> <span m='93950'>a</span> <span
  m='94020'>little</span> <span m='94650'>arrow</span> <span
  m='95030'>here</span> <span m='95340'>to</span> <span m='95980'>just</span>
  <span m='96190'>indicate</span> <span m='96640'>that</span> <span
  m='96745'>is</span> <span m='96850'>our</span> <span
  m='97440'>orientation</span> <span m='98140'>for</span> <span
  m='98250'>the</span> <span m='98360'>circle.</span> <span
  m='101730'>And</span> <span m='101900'>our</span> <span
  m='102000'>normal</span> <span m='102720'>is</span> <span m='103050'>an</span>
  <span m='103240'>outward-pointing</span> <span m='103750'>normal.</span> <span
  m='104010'>And</span> <span m='104110'>let's</span> <span
  m='104330'>call</span> <span m='104490'>our</span> <span
  m='104650'>circle</span> <span m='105300'>C,</span> <span
  m='106020'>and</span> <span m='106200'>our</span> <span m='106460'>S</span>
  <span m='106685'>is</span> <span m='106910'>our</span> <span
  m='107060'>sphere</span> <span m='107355'>is</span> <span
  m='107650'>our</span> <span m='107770'>surface.</span> <span
  m='108620'>OK.</span> <span m='109230'>So</span> <span m='109400'>just</span>
  <span m='109600'>so</span> <span m='109710'>we</span> <span
  m='109860'>have</span> <span m='110050'>the</span> <span
  m='110130'>same</span> <span m='110410'>notation.</span> <span
  m='112810'>Good.</span> </p><p><span m='113200'>So</span> <span
  m='113430'>why</span> <span m='113640'>don't</span> <span
  m='113850'>you</span> <span m='114470'>work</span> <span
  m='114730'>this</span> <span m='114930'>out,</span> <span
  m='115230'>compute</span> <span m='115470'>the</span> <span
  m='115710'>line</span> <span m='115950'>integral,</span> <span
  m='116630'>compute</span> <span m='116835'>the</span> <span
  m='117040'>surface</span> <span m='117420'>integral,</span> <span
  m='118150'>come</span> <span m='118380'>back,</span> <span
  m='118680'>and</span> <span m='118780'>we</span> <span m='118890'>can</span>
  <span m='119000'>work</span> <span m='119180'>them</span> <span
  m='119250'>out</span> <span m='119410'>together.</span> </p><p><span
  m='128180'>Hopefully</span> <span m='128650'>you</span> <span
  m='128720'>had</span> <span m='128920'>some</span> <span
  m='129070'>luck</span> <span m='129330'>working</span> <span
  m='129640'>on</span> <span m='129750'>this</span> <span
  m='129930'>problem.</span> <span m='130300'>We</span> <span
  m='130390'>have</span> <span m='130540'>two</span> <span
  m='130740'>things</span> <span m='131080'>to</span> <span
  m='131160'>compute.</span> <span m='132260'>I</span> <span
  m='132360'>think</span> <span m='132570'>I'm</span> <span
  m='132710'>going</span> <span m='132805'>to</span> <span
  m='132900'>start</span> <span m='133760'>with</span> <span
  m='133930'>the</span> <span m='134010'>line</span> <span
  m='134420'>integral.</span> </p><p><span m='136500'>So</span> <span
  m='136770'>let</span> <span m='136980'>me</span> <span m='137080'>write</span>
  <span m='137555'>that</span> <span m='137792'>down:</span> <span
  m='138030'>line</span> <span m='138620'>integral.</span> <span
  m='143240'>So</span> <span m='143670'>what</span> <span m='143830'>I</span>
  <span m='143910'>need</span> <span m='144160'>to</span> <span
  m='144240'>do</span> <span m='144380'>to</span> <span
  m='144480'>compute</span> <span m='144840'>the</span> <span
  m='144930'>line</span> <span m='145240'>integral</span> <span
  m='146040'>is</span> <span m='146250'>I</span> <span m='146370'>need</span>
  <span m='146620'>to</span> <span m='146730'>compute</span> <span
  m='147980'>the</span> <span m='148080'>integral</span> <span
  m='149770'>over</span> <span m='150530'>the</span> <span
  m='150640'>curve</span> <span m='151050'>C</span> <span m='153350'>of</span>
  <span m='153600'>F</span> <span m='154090'>dot</span> <span
  m='155690'>dr.</span> <span m='157170'>And</span> <span m='157340'>so</span>
  <span m='157450'>I</span> <span m='157550'>know</span> <span
  m='157770'>what</span> <span m='158020'>F</span> <span m='158350'>is</span>
  <span m='160080'>on</span> <span m='160390'>that</span> <span
  m='160650'>circle.</span> <span m='161290'>So</span> <span m='161450'>I</span>
  <span m='161540'>need</span> <span m='161780'>to</span> <span
  m='161880'>know</span> <span m='162040'>what</span> <span m='162350'>dr</span>
  <span m='162950'>is.</span> <span m='163680'>So</span> <span
  m='163840'>I</span> <span m='163900'>need</span> <span m='164060'>to</span>
  <span m='164130'>know</span> <span m='164250'>what</span> <span
  m='164360'>r</span> <span m='164485'>is.</span> <span m='164610'>I</span>
  <span m='164680'>need</span> <span m='164800'>a</span> <span
  m='164870'>parametrization</span> <span m='165140'>of</span> <span
  m='165410'>that</span> <span m='165980'>circle.</span> </p><p><span
  m='166400'>Well,</span> <span m='167070'>you</span> <span
  m='167190'>know,</span> <span m='167720'>that</span> <span
  m='167820'>is</span> <span m='167920'>a</span> <span m='167980'>pretty</span>
  <span m='168250'>easy</span> <span m='168510'>circle</span> <span
  m='168690'>to</span> <span m='168870'>parametrize.</span> <span
  m='169440'>It's</span> <span m='169610'>the</span> <span
  m='169730'>unit</span> <span m='169990'>circle</span> <span
  m='170370'>in</span> <span m='170490'>the</span> <span
  m='171110'>xy-plane.</span> <span m='171800'>So</span> <span
  m='172000'>we</span> <span m='172140'>have--</span> <span
  m='172530'>for</span> <span m='172690'>C,</span> <span m='173055'>we</span>
  <span m='173960'>have--</span> <span m='176450'>and</span> <span
  m='176660'>we're</span> <span m='177540'>wandering</span> <span
  m='178180'>around</span> <span m='178390'>it</span> <span
  m='178690'>counterclockwise.</span> <span m='179760'>So</span> <span
  m='180160'>it's</span> <span m='180330'>our</span> <span
  m='180430'>usual</span> <span m='180880'>parametrization.</span> <span
  m='181670'>It's</span> <span m='181800'>the</span> <span m='181890'>one</span>
  <span m='182030'>we</span> <span m='182150'>like.</span> </p><p><span
  m='182360'>So</span> <span m='182460'>we</span> <span m='182570'>have</span>
  <span m='183130'>x</span> <span m='183480'>equals</span> <span
  m='183890'>cosine</span> <span m='184510'>t,</span> <span m='185790'>y</span>
  <span m='187010'>equals</span> <span m='187440'>sine</span> <span
  m='188120'>t--</span> <span m='190030'>where</span> <span m='190840'>t</span>
  <span m='191190'>goes</span> <span m='191510'>from</span> <span
  m='191720'>0</span> <span m='194460'>to</span> <span m='194610'>2*pi--</span>
  <span m='195660'>and</span> <span m='195880'>this</span> <span
  m='196020'>is</span> <span m='196170'>in</span> <span m='196290'>three</span>
  <span m='196450'>dimensions,</span> <span m='196850'>so</span> <span
  m='197295'>the</span> <span m='197740'>other</span> <span
  m='198010'>part</span> <span m='198200'>of</span> <span m='198280'>the</span>
  <span m='198360'>parametrization</span> <span m='199120'>is</span> <span
  m='199240'>z</span> <span m='199520'>equals</span> <span m='199960'>0.</span>
  <span m='200730'>So</span> <span m='200890'>this</span> <span
  m='201060'>is</span> <span m='201190'>my</span> <span
  m='201330'>parametrization</span> <span m='204540'>of</span> <span
  m='204800'>this</span> <span m='205000'>circle.</span> <span
  m='206310'>OK,</span> <span m='207130'>so</span> <span m='207350'>let's</span>
  <span m='207620'>go</span> <span m='207790'>ahead</span> <span
  m='208070'>and</span> <span m='208730'>put</span> <span m='208950'>that</span>
  <span m='209180'>in.</span> </p><p><span m='209370'>So</span> <span
  m='212214'>the</span> <span m='212680'>integral</span> <span
  m='214020'>over</span> <span m='214330'>C</span> <span m='216050'>of</span>
  <span m='216310'>F</span> <span m='216830'>dot</span> <span
  m='218480'>dr</span> <span m='221190'>is</span> <span m='221325'>the</span>
  <span m='221460'>integral</span> <span m='222370'>from</span> <span
  m='222800'>0</span> <span m='224160'>to</span> <span m='224280'>2</span> <span
  m='224550'>pi.</span> <span m='225370'>So</span> <span m='225480'>we've</span>
  <span m='225660'>got</span> <span m='226000'>three</span> <span
  m='226200'>parts.</span> <span m='226670'>So</span> <span
  m='227010'>the</span> <span m='227350'>first</span> <span
  m='227770'>part--</span> <span m='228390'>so</span> <span m='228750'>F</span>
  <span m='229790'>is</span> <span m='231500'>2z,</span> <span
  m='232480'>x,</span> <span m='232770'>y.</span> <span m='233030'>So</span>
  <span m='233180'>it's</span> <span m='233690'>2z*dx</span> <span
  m='235250'>plus</span> <span m='235510'>x*dy</span> <span
  m='236660'>plus</span> <span m='237180'>y*dz.</span> <span
  m='237690'>But</span> <span m='237950'>z</span> <span m='238180'>is</span>
  <span m='238330'>0</span> <span m='239440'>on</span> <span
  m='239660'>this</span> <span m='239800'>whole</span> <span
  m='239980'>circle.</span> <span m='240900'>So</span> <span
  m='241030'>that</span> <span m='241880'>piece</span> <span
  m='242140'>just</span> <span m='242430'>dies.</span> <span
  m='243190'>And</span> <span m='243500'>dz</span> <span m='243780'>is</span>
  <span m='244060'>also</span> <span m='244380'>0,</span> <span
  m='244690'>so</span> <span m='244850'>that</span> <span
  m='244960'>piece</span> <span m='245070'>just</span> <span
  m='245270'>dies.</span> <span m='245470'>So</span> <span
  m='245540'>we're</span> <span m='245610'>just</span> <span
  m='245830'>left</span> <span m='246070'>with</span> <span
  m='246305'>x*dy.</span> <span m='247490'>So</span> <span
  m='247620'>this</span> <span m='247760'>is</span> <span
  m='247890'>equal</span> <span m='248180'>to</span> <span m='248310'>the</span>
  <span m='248470'>integral</span> <span m='249580'>x</span> <span
  m='251270'>dy.</span> </p><p><span m='251850'>Oh.</span> <span
  m='252020'>So</span> <span m='252200'>I</span> <span m='252280'>guess</span>
  <span m='252390'>this</span> <span m='252500'>is</span> <span
  m='252700'>not</span> <span m='252960'>from</span> <span m='253120'>0</span>
  <span m='253420'>to</span> <span m='253740'>2*pi.</span> <span
  m='254620'>This</span> <span m='254780'>is</span> <span
  m='254990'>still</span> <span m='255180'>over</span> <span
  m='255533'>C.</span> <span m='256240'>Sorry</span> <span
  m='256470'>about</span> <span m='256660'>that.</span> <span
  m='258570'>OK.</span> </p><p><span m='258910'>And</span> <span
  m='259090'>now</span> <span m='259360'>I</span> <span m='259430'>change</span>
  <span m='261900'>to</span> <span m='262030'>my</span> <span
  m='264890'>parametrization.</span> <span m='265805'>OK.</span> <span
  m='266170'>Yes.</span> <span m='266730'>Right.</span> <span
  m='266940'>So</span> <span m='267910'>this</span> <span m='268100'>is</span>
  <span m='268230'>still</span> <span m='268490'>in</span> <span
  m='268900'>dx,</span> <span m='269230'>dy,</span> <span m='269550'>dz</span>
  <span m='269880'>form,</span> <span m='270270'>so</span> <span
  m='270940'>it's</span> <span m='271120'>still</span> <span
  m='271620'>over</span> <span m='272025'>C.</span> </p><p><span
  m='272430'>Now</span> <span m='272580'>we</span> <span
  m='272710'>switch</span> <span m='273020'>to</span> <span
  m='273130'>the</span> <span m='273240'>dt</span> <span m='273760'>form,</span>
  <span m='274040'>so</span> <span m='274160'>now</span> <span
  m='274350'>t</span> <span m='274550'>is</span> <span m='274700'>going</span>
  <span m='274930'>from</span> <span m='275130'>0</span> <span
  m='275300'>to</span> <span m='275470'>2*pi.</span> <span m='276230'>OK,</span>
  <span m='276530'>so</span> <span m='276670'>now</span> <span
  m='276770'>we</span> <span m='276880'>have</span> <span
  m='276990'>x*dy.</span> <span m='277550'>So</span> <span m='278040'>x</span>
  <span m='278275'>is</span> <span m='278510'>cosine</span> <span
  m='279160'>t,</span> <span m='279780'>and</span> <span m='280040'>dy--</span>
  <span m='280750'>so</span> <span m='280900'>y</span> <span
  m='281260'>is</span> <span m='281400'>sine</span> <span m='281860'>t,</span>
  <span m='282430'>so</span> <span m='282580'>dy</span> <span
  m='283260'>is</span> <span m='283420'>cosine</span> <span m='283930'>t</span>
  <span m='284080'>dt.</span> <span m='284680'>So</span> <span
  m='284850'>this</span> <span m='285000'>is</span> <span
  m='285620'>cosine</span> <span m='286820'>t</span> <span
  m='287140'>times</span> <span m='287420'>cosine</span> <span
  m='287840'>t,</span> <span m='287985'>is</span> <span m='288130'>cosine</span>
  <span m='288550'>squared</span> <span m='289000'>t.</span> </p><p><span
  m='291090'>dt,</span> <span m='291490'>gosh.</span> <span m='291820'>So</span>
  <span m='291920'>now</span> <span m='292040'>you</span> <span
  m='292140'>have</span> <span m='292250'>to</span> <span
  m='292350'>remember</span> <span m='293410'>way</span> <span
  m='293600'>back</span> <span m='293890'>in</span> <span
  m='294030'>18.01</span> <span m='294790'>when</span> <span
  m='294940'>you</span> <span m='295040'>learned</span> <span
  m='295270'>how</span> <span m='295360'>to</span> <span
  m='295440'>compute</span> <span m='295840'>trig</span> <span
  m='296090'>integrals</span> <span m='296490'>like</span> <span
  m='296700'>this.</span> <span m='296920'>So</span> <span m='297020'>I</span>
  <span m='297100'>think</span> <span m='297660'>the</span> <span
  m='297770'>thing</span> <span m='298000'>that</span> <span
  m='298090'>we</span> <span m='298200'>do,</span> <span m='298870'>when</span>
  <span m='298983'>we</span> <span m='299096'>have</span> <span
  m='299210'>a</span> <span m='299435'>cosine</span> <span
  m='299660'>squared</span> <span m='299890'>t,</span> <span
  m='300050'>is</span> <span m='300210'>we</span> <span m='300320'>use</span>
  <span m='300450'>a</span> <span m='300510'>half-angle</span> <span
  m='301090'>formula.</span> <span m='301410'>So</span> <span
  m='301730'>let</span> <span m='301950'>me</span> <span m='302020'>come</span>
  <span m='302220'>back</span> <span m='302470'>down</span> <span
  m='302670'>here</span> <span m='303300'>just</span> <span m='303510'>to</span>
  <span m='303580'>finish</span> <span m='303900'>this</span> <span
  m='304090'>off</span> <span m='304390'>in</span> <span m='304520'>one</span>
  <span m='305750'>board.</span> </p><p><span m='306190'>OK,</span> <span
  m='306490'>so</span> <span m='307500'>cosine</span> <span
  m='307990'>squared</span> <span m='308330'>t</span> <span m='308560'>is</span>
  <span m='308680'>the</span> <span m='308980'>integral</span> <span
  m='309740'>from</span> <span m='310010'>0</span> <span m='310810'>to</span>
  <span m='310940'>2*pi.</span> <span m='311570'>So</span> <span
  m='311680'>cosine</span> <span m='312180'>squared</span> <span
  m='312460'>t</span> <span m='312970'>is</span> <span m='313260'>1</span> <span
  m='314270'>plus</span> <span m='315120'>cosine</span> <span
  m='316460'>2t</span> <span m='317900'>over</span> <span m='318210'>2,</span>
  <span m='319890'>dt.</span> <span m='320410'>And</span> <span
  m='320640'>now</span> <span m='320750'>cosine</span> <span
  m='321310'>2t,</span> <span m='322110'>as</span> <span m='322350'>t</span>
  <span m='322630'>goes</span> <span m='322900'>between</span> <span
  m='323320'>0</span> <span m='323710'>and</span> <span m='323910'>2*pi,</span>
  <span m='324720'>well,</span> <span m='324960'>that's</span> <span
  m='325430'>two</span> <span m='325720'>whole</span> <span
  m='326590'>loops</span> <span m='326895'>of</span> <span m='327200'>it.</span>
  <span m='327600'>Right?</span> <span m='327880'>Two</span> <span
  m='328050'>whole</span> <span m='328310'>periods</span> <span
  m='329160'>of</span> <span m='329330'>cosine</span> <span
  m='329830'>2t.</span> <span m='330650'>And</span> <span m='331380'>it's</span>
  <span m='331580'>a</span> <span m='331670'>trig</span> <span
  m='331960'>function.</span> <span m='332280'>It's</span> <span
  m='332390'>a</span> <span m='332470'>nice</span> <span
  m='332700'>cosine</span> <span m='333270'>function.</span> <span
  m='333680'>So</span> <span m='333820'>the</span> <span
  m='333950'>positive</span> <span m='334390'>parts</span> <span
  m='334510'>and</span> <span m='334630'>the</span> <span
  m='334700'>negative</span> <span m='335080'>parts</span> <span
  m='335270'>cancel.</span> </p><p><span m='335670'>The</span> <span
  m='336000'>cosine</span> <span m='336170'>2t</span> <span
  m='336620'>part,</span> <span m='337270'>when</span> <span
  m='337460'>we</span> <span m='337540'>integrate</span> <span
  m='337725'>it</span> <span m='337910'>from</span> <span m='338040'>0</span>
  <span m='338670'>to</span> <span m='338920'>2*pi,</span> <span
  m='339200'>that</span> <span m='339380'>gives</span> <span
  m='339430'>us</span> <span m='339480'>0.</span> <span m='340830'>So</span>
  <span m='340950'>we're</span> <span m='341070'>left</span> <span
  m='341310'>with</span> <span m='341440'>1/2</span> <span
  m='343650'>integrated</span> <span m='344110'>from</span> <span
  m='344290'>0</span> <span m='344590'>to</span> <span m='344770'>2*pi,</span>
  <span m='345340'>and</span> <span m='345550'>that's</span> <span
  m='345760'>just</span> <span m='345940'>going</span> <span
  m='346060'>to</span> <span m='346140'>give</span> <span m='346280'>us</span>
  <span m='346520'>1/2</span> <span m='346960'>of</span> <span
  m='347090'>2*pi,</span> <span m='347595'>so</span> <span
  m='347960'>that's</span> <span m='348390'>pi.</span> <span
  m='349202'>All</span> <span m='349610'>right.</span> <span
  m='350980'>So</span> <span m='351170'>good.</span> <span m='351480'>So</span>
  <span m='351580'>that</span> <span m='351730'>was</span> <span
  m='351805'>the</span> <span m='351880'>line</span> <span
  m='352190'>integral.</span> </p><p><span m='352700'>A</span> <span
  m='353030'>very</span> <span m='353330'>straightforward</span> <span
  m='354250'>thing.</span> <span m='354540'>We</span> <span
  m='354670'>had</span> <span m='354870'>our</span> <span
  m='355010'>circle</span> <span m='355960'>back</span> <span
  m='356260'>here.</span> <span m='357910'>We</span> <span m='358040'>had</span>
  <span m='358170'>our</span> <span m='358300'>field.</span> <span
  m='359150'>So</span> <span m='359380'>we</span> <span
  m='359760'>parametrized</span> <span m='361230'>the</span> <span
  m='361320'>curve</span> <span m='362010'>that</span> <span
  m='362170'>is</span> <span m='362400'>the</span> <span
  m='362530'>circle,</span> <span m='363120'>that</span> <span
  m='363280'>is</span> <span m='363440'>the</span> <span
  m='363540'>boundary.</span> <span m='364500'>And</span> <span
  m='364760'>then</span> <span m='364910'>we</span> <span m='365050'>just</span>
  <span m='365320'>computed</span> <span m='365740'>the</span> <span
  m='365910'>line</span> <span m='366080'>integral,</span> <span
  m='366690'>and</span> <span m='366860'>it</span> <span m='366920'>was</span>
  <span m='367040'>a</span> <span m='367110'>nice,</span> <span
  m='367930'>easy</span> <span m='368230'>one</span> <span m='368460'>to</span>
  <span m='368560'>do.</span> <span m='368750'>You</span> <span
  m='368890'>had</span> <span m='369040'>to</span> <span
  m='369150'>remember</span> <span m='369490'>one</span> <span
  m='369710'>little</span> <span m='369960'>trig</span> <span
  m='370210'>identity</span> <span m='370740'>in</span> <span
  m='370830'>order</span> <span m='371090'>to</span> <span m='371170'>do</span>
  <span m='371390'>it.</span> <span m='372170'>All</span> <span
  m='372335'>right.</span> <span m='373230'>That's</span> <span
  m='373570'>the</span> <span m='373670'>first</span> <span
  m='374000'>one.</span> </p><p><span m='374360'>So</span> <span
  m='377140'>let's</span> <span m='377360'>go</span> <span m='377490'>on</span>
  <span m='377670'>to</span> <span m='377760'>the</span> <span
  m='377850'>surface</span> <span m='378190'>integral.</span> <span
  m='385760'>So</span> <span m='385880'>the</span> <span
  m='385980'>surface</span> <span m='386330'>integral</span> <span
  m='387220'>that</span> <span m='387350'>you</span> <span
  m='387410'>have</span> <span m='387570'>to</span> <span
  m='387660'>compute</span> <span m='388290'>in</span> <span
  m='388450'>Stokes'</span> <span m='388870'>Theorem</span> <span
  m='389050'>is</span> <span m='389460'>you</span> <span m='389870'>have</span>
  <span m='389990'>to</span> <span m='390110'>compute</span> <span
  m='391530'>the</span> <span m='391620'>double</span> <span
  m='392030'>integral</span> <span m='393720'>over</span> <span
  m='393990'>your</span> <span m='394120'>surface</span> <span
  m='396000'>of</span> <span m='396420'>the</span> <span m='396662'>curl</span>
  <span m='396905'>of</span> <span m='397390'>F</span> <span
  m='399440'>dot</span> <span m='399900'>n</span> <span m='401730'>with</span>
  <span m='401930'>respect</span> <span m='402340'>to</span> <span
  m='402430'>surface</span> <span m='402760'>area.</span> <span
  m='403090'>So</span> <span m='404480'>this</span> <span m='404680'>is</span>
  <span m='404890'>the</span> <span m='405670'>integral</span> <span
  m='406090'>we</span> <span m='406240'>want to</span> <span
  m='406470'>compute</span> <span m='406820'>here.</span> <span
  m='407610'>So</span> <span m='407900'>OK.</span> <span m='408210'>So</span>
  <span m='408315'>the</span> <span m='408420'>first</span> <span
  m='408950'>thing</span> <span m='409140'>we're</span> <span
  m='409240'>going</span> <span m='409325'>to</span> <span
  m='409410'>need</span> <span m='409530'>is</span> <span
  m='409650'>we're</span> <span m='409740'>going</span> <span
  m='409820'>to</span> <span m='410370'>need</span> <span m='410580'>to</span>
  <span m='410660'>find</span> <span m='410890'>the</span> <span
  m='410960'>curl</span> <span m='411470'>of</span> <span m='411850'>F.</span>
  <span m='412440'>So</span> <span m='412900'>F--</span> <span
  m='414160'>let</span> <span m='414310'>me</span> <span m='414390'>just</span>
  <span m='414610'>write</span> <span m='414890'>it</span> <span
  m='415010'>here</span> <span m='415130'>so</span> <span m='415176'>we</span>
  <span m='415223'>don't</span> <span m='415270'>have</span> <span
  m='415450'>to</span> <span m='415540'>walk</span> <span m='415840'>all</span>
  <span m='415926'>the</span> <span m='416013'>way</span> <span
  m='416100'>back</span> <span m='416350'>over</span> <span
  m='416540'>there.</span> </p><p><span m='416920'>So</span> <span
  m='417170'>F</span> <span m='418370'>is</span> <span m='419740'>[2z,</span>
  <span m='421800'>x,</span> <span m='423580'>y].</span> <span
  m='424030'>So</span> <span m='424200'>curl</span> <span m='424720'>of</span>
  <span m='424810'>F--</span> <span m='425270'>OK,</span> <span
  m='426220'>you</span> <span m='426760'>should</span> <span
  m='426900'>have</span> <span m='427070'>lots</span> <span m='427340'>of</span>
  <span m='427450'>experience</span> <span m='427950'>computing</span> <span
  m='428370'>curls</span> <span m='428760'>by</span> <span
  m='428940'>now--</span> <span m='430010'>So</span> <span
  m='430150'>it's</span> <span m='430640'>going to</span> <span
  m='430870'>be</span> <span m='430980'>this--</span> <span m='432330'>I</span>
  <span m='432500'>always</span> <span m='432710'>think</span> <span
  m='432920'>of</span> <span m='433010'>it,</span> <span m='433690'>so</span>
  <span m='433880'>you've</span> <span m='434040'>got</span> <span
  m='434350'>these</span> <span m='434540'>little</span> <span
  m='435040'>2</span> <span m='435240'>by</span> <span m='435440'>2</span> <span
  m='435650'>determinants</span> <span m='436400'>with</span> <span
  m='436610'>the</span> <span m='436690'>partial</span> <span
  m='437140'>derivatives</span> <span m='437730'>in</span> <span
  m='437870'>them,</span> <span m='438370'>but</span> <span
  m='438570'>most</span> <span m='438870'>of</span> <span
  m='438970'>those</span> <span m='439160'>are</span> <span
  m='439230'>going</span> <span m='439315'>to</span> <span m='439400'>be</span>
  <span m='439500'>0.</span> <span m='440360'>We've</span> <span
  m='440630'>got</span> <span m='440780'>a</span> <span m='440860'>d_x</span>
  <span m='441850'>x</span> <span m='442260'>term</span> <span
  m='442720'>that's</span> <span m='442910'>coming</span> <span
  m='443230'>up</span> <span m='443340'>in</span> <span m='443480'>k,</span>
  <span m='443940'>and</span> <span m='444060'>a</span> <span
  m='444510'>d_y</span> <span m='445050'>y</span> <span m='445480'>term</span>
  <span m='445850'>that's</span> <span m='446020'>coming</span> <span
  m='446350'>up</span> <span m='446470'>in</span> <span m='446570'>i,</span>
  <span m='447410'>and</span> <span m='447600'>a</span> <span
  m='447660'>d_z</span> <span m='448720'>2z</span> <span m='449310'>term</span>
  <span m='450030'>that's</span> <span m='450250'>coming</span> <span
  m='450640'>up</span> <span m='451720'>in</span> <span m='452060'>j.</span>
  <span m='452520'>So</span> <span m='452720'>OK.</span> <span
  m='452970'>So</span> <span m='453720'>almost</span> <span
  m='454230'>half</span> <span m='454530'>the</span> <span
  m='454620'>terms</span> <span m='454910'>are</span> <span m='454980'>0.</span>
  </p><p><span m='455370'>The</span> <span m='455500'>others</span> <span
  m='455770'>are</span> <span m='455850'>really</span> <span
  m='456100'>easy</span> <span m='456310'>to</span> <span
  m='456390'>compute.</span> <span m='457160'>I</span> <span
  m='457560'>trust</span> <span m='458840'>that</span> <span
  m='459320'>you</span> <span m='459440'>can</span> <span m='460070'>also</span>
  <span m='461160'>compute</span> <span m='461580'>and</span> <span
  m='461670'>get</span> <span m='461790'>that</span> <span m='461900'>the</span>
  <span m='462000'>curl</span> <span m='462320'>is</span> <span
  m='462440'>[1,</span> <span m='462690'>2,</span> <span m='462890'>1]</span>
  <span m='463940'>here.</span> <span m='464300'>OK,</span> <span
  m='464540'>so</span> <span m='464670'>this</span> <span m='464820'>is</span>
  <span m='464940'>F.</span> <span m='465810'>This</span> <span
  m='466000'>is</span> <span m='466120'>curl</span> <span m='466510'>of</span>
  <span m='466665'>F.</span> <span m='466820'>Great.</span> <span
  m='467120'>So</span> <span m='467250'>OK.</span> <span m='467390'>So</span>
  <span m='467510'>that's</span> <span m='467710'>curl</span> <span
  m='468000'>of</span> <span m='468130'>F.</span> </p><p><span
  m='468260'>So</span> <span m='468560'>now</span> <span m='468740'>we</span>
  <span m='468870'>need</span> <span m='469480'>n.</span> <span
  m='471390'>Well,</span> <span m='471610'>let's</span> <span
  m='471670'>think.</span> <span m='472000'>So</span> <span m='472580'>we</span>
  <span m='472770'>need</span> <span m='472930'>the</span> <span
  m='473040'>unit</span> <span m='473520'>normal</span> <span
  m='473870'>to</span> <span m='474000'>our</span> <span
  m='474160'>surface.</span> <span m='475880'>So</span> <span
  m='476030'>back</span> <span m='476280'>at</span> <span m='476350'>the</span>
  <span m='476420'>beginning</span> <span m='477450'>before</span> <span
  m='477750'>we</span> <span m='477850'>started,</span> <span
  m='478260'>we</span> <span m='478370'>said</span> <span m='478510'>it</span>
  <span m='478580'>was</span> <span m='478710'>the</span> <span
  m='478870'>outward-pointing</span> <span m='479610'>normal.</span> <span
  m='480780'>So</span> <span m='480940'>we</span> <span m='481050'>need</span>
  <span m='481350'>the</span> <span m='481660'>outward-pointing</span> <span
  m='481990'>normal.</span> </p><p><span m='482460'>Well,</span> <span
  m='482690'>this</span> <span m='482820'>is</span> <span m='482930'>a</span>
  <span m='483030'>sphere,</span> <span m='483600'>right?</span> <span
  m='484360'>So</span> <span m='484530'>the</span> <span
  m='484650'>normal</span> <span m='485430'>is</span> <span
  m='485610'>parallel</span> <span m='486070'>to</span> <span
  m='486210'>the</span> <span m='486300'>position</span> <span
  m='486770'>vector.</span> <span m='487790'>So</span> <span
  m='487970'>that</span> <span m='488170'>means</span> <span m='488520'>n</span>
  <span m='488900'>should</span> <span m='489110'>be</span> <span
  m='489240'>parallel</span> <span m='493270'>to</span> <span
  m='493400'>the</span> <span m='493520'>vector</span> <span
  m='494950'>[x,</span> <span m='495390'>y,</span> <span m='495690'>z].</span>
  <span m='497850'>So</span> <span m='497990'>n</span> <span
  m='498130'>should</span> <span m='498260'>be</span> <span
  m='498370'>parallel</span> <span m='498960'>to</span> <span
  m='499140'>this</span> <span m='499260'>vector</span> <span
  m='499630'>[x,</span> <span m='499840'>y,</span> <span m='499970'>z],</span>
  <span m='500270'>but</span> <span m='500510'>in</span> <span
  m='500620'>fact,</span> <span m='501550'>we're</span> <span
  m='501690'>even</span> <span m='501950'>better</span> <span
  m='502370'>than</span> <span m='502480'>that.</span> <span
  m='502590'>We're</span> <span m='502690'>on</span> <span m='502930'>a</span>
  <span m='503110'>unit</span> <span m='503380'>sphere.</span> <span
  m='504380'>So</span> <span m='504940'>the</span> <span
  m='505150'>position</span> <span m='505620'>vector</span> <span
  m='505890'>has</span> <span m='506080'>length</span> <span
  m='506390'>of</span> <span m='506470'>1.</span> </p><p><span
  m='507230'>So</span> <span m='507530'>n</span> <span m='508200'>should</span>
  <span m='508410'>be</span> <span m='508510'>pointing</span> <span
  m='508910'>in</span> <span m='508980'>the</span> <span m='509050'>same</span>
  <span m='509350'>direction</span> <span m='509760'>as</span> <span
  m='509860'>this</span> <span m='509950'>vector,</span> <span
  m='510490'>and</span> <span m='510710'>they</span> <span
  m='510800'>both</span> <span m='511030'>have</span> <span
  m='511190'>length</span> <span m='511460'>1,</span> <span m='511660'>so</span>
  <span m='511770'>they</span> <span m='511825'>had</span> <span
  m='511880'>better</span> <span m='512090'>be</span> <span
  m='512230'>equal</span> <span m='512500'>to</span> <span
  m='512610'>each</span> <span m='512750'>other.</span> <span
  m='514460'>Great.</span> <span m='516520'>So</span> <span
  m='516730'>this</span> <span m='516910'>unit</span> <span
  m='517210'>normal</span> <span m='517570'>n</span> <span m='518480'>is</span>
  <span m='518750'>just</span> <span m='519050'>this</span> <span
  m='519530'>very</span> <span m='519770'>simple</span> <span
  m='520130'>vector,</span> <span m='520320'>[x,</span> <span
  m='520450'>y,</span> <span m='520680'>z].</span> <span m='521570'>If</span>
  <span m='521640'>it</span> <span m='521730'>had</span> <span
  m='521820'>been</span> <span m='521960'>a</span> <span
  m='522030'>bigger</span> <span m='522340'>sphere,</span> <span
  m='523120'>then</span> <span m='523850'>you</span> <span
  m='523980'>would</span> <span m='524090'>have</span> <span
  m='524230'>to</span> <span m='524330'>divide</span> <span
  m='524820'>this</span> <span m='525870'>by</span> <span m='526050'>the</span>
  <span m='526220'>radius</span> <span m='526700'>to</span> <span
  m='526830'>scale</span> <span m='527220'>it</span> <span
  m='527610'>appropriately.</span> <span m='530770'>All</span> <span
  m='530897'>right.</span> </p><p><span m='531280'>So</span> <span
  m='531440'>we've</span> <span m='531540'>got</span> <span
  m='531780'>curl</span> <span m='532050'>F.</span> <span
  m='532410'>We've</span> <span m='532570'>got</span> <span m='532850'>n.</span>
  <span m='534770'>So</span> <span m='534900'>the</span> <span
  m='535060'>integral</span> <span m='535390'>that</span> <span
  m='535520'>we</span> <span m='535630'>want</span> <span m='538450'>is</span>
  <span m='540040'>this</span> <span m='540340'>double</span> <span
  m='540630'>integral</span> <span m='542140'>over</span> <span
  m='542420'>the</span> <span m='542530'>surface</span> <span
  m='543750'>of</span> <span m='544160'>curl</span> <span m='544480'>F</span>
  <span m='544810'>dot</span> <span m='544970'>n.</span> <span
  m='545400'>So</span> <span m='545590'>that's</span> <span m='546570'>x</span>
  <span m='547520'>plus</span> <span m='548170'>2y</span> <span
  m='549670'>plus</span> <span m='550120'>z,</span> <span m='551870'>with</span>
  <span m='552030'>respect</span> <span m='552410'>to</span> <span
  m='552520'>surface</span> <span m='552870'>area.</span> <span
  m='554290'>OK.</span> </p><p><span m='554840'>Well,</span> <span
  m='555160'>now</span> <span m='555420'>we've</span> <span
  m='555510'>just</span> <span m='555700'>got</span> <span m='555830'>a</span>
  <span m='555880'>surface</span> <span m='556280'>integral.</span> <span
  m='556790'>It's</span> <span m='556940'>over</span> <span m='557160'>a</span>
  <span m='558990'>hemisphere.</span> <span m='559800'>Not</span> <span
  m='559980'>a</span> <span m='560030'>terrible</span> <span
  m='560500'>thing</span> <span m='560700'>to</span> <span
  m='560810'>parametrize.</span> <span m='561990'>So</span> <span
  m='562120'>that's</span> <span m='562320'>what</span> <span
  m='562440'>we</span> <span m='562530'>should</span> <span
  m='562660'>do.</span> <span m='562740'>We</span> <span
  m='562840'>should</span> <span m='562970'>go</span> <span
  m='563140'>in,</span> <span m='563570'>we</span> <span
  m='563680'>should</span> <span m='563830'>parametrize</span> <span
  m='564530'>it,</span> <span m='564850'>and</span> <span m='565050'>then</span>
  <span m='565160'>we</span> <span m='565250'>should</span> <span
  m='565880'>just</span> <span m='566080'>compute</span> <span
  m='566430'>it</span> <span m='566520'>like</span> <span m='566700'>a</span>
  <span m='566780'>surface</span> <span m='567120'>integral,</span> <span
  m='568050'>like</span> <span m='568280'>we</span> <span m='568380'>know</span>
  <span m='568520'>how</span> <span m='568630'>to</span> <span
  m='568760'>do.</span> </p><p><span m='569140'>So</span> <span
  m='569930'>before</span> <span m='570210'>we</span> <span
  m='570330'>start</span> <span m='570610'>though,</span> <span
  m='570720'>I</span> <span m='570810'>want</span> <span m='570905'>to</span>
  <span m='571000'>make</span> <span m='571160'>one</span> <span
  m='571490'>little</span> <span m='571830'>observation.</span> <span
  m='572640'>Well,</span> <span m='572880'>maybe</span> <span
  m='573110'>two</span> <span m='573290'>little</span> <span
  m='573610'>observations.</span> <span m='574430'>We</span> <span
  m='574600'>can</span> <span m='574750'>simplify</span> <span
  m='575100'>this.</span> <span m='576370'>All</span> <span
  m='576537'>right?</span> <span m='577040'>x.</span> </p><p><span
  m='579180'>We're</span> <span m='579350'>integrating</span> <span
  m='579990'>x</span> <span m='580760'>over</span> <span m='581010'>the</span>
  <span m='581120'>surface</span> <span m='581800'>of</span> <span
  m='582140'>a</span> <span m='582340'>hemisphere</span> <span
  m='582880'>centered</span> <span m='583260'>at</span> <span
  m='583350'>the</span> <span m='583450'>origin.</span> <span
  m='584820'>This</span> <span m='584990'>hemisphere</span> <span
  m='585530'>is</span> <span m='585660'>really</span> <span
  m='585950'>symmetric.</span> <span m='587150'>And</span> <span
  m='587330'>on</span> <span m='588130'>the</span> <span m='589140'>back</span>
  <span m='589515'>side--</span> <span m='589890'>the</span> <span
  m='589980'>part</span> <span m='590220'>where</span> <span m='590320'>x</span>
  <span m='590520'>is</span> <span m='590720'>negative--</span> <span
  m='592090'>we're</span> <span m='592250'>getting</span> <span
  m='592670'>negative</span> <span m='593150'>contributions</span> <span
  m='593890'>from</span> <span m='594050'>x.</span> <span m='594690'>And</span>
  <span m='594920'>on</span> <span m='595020'>the</span> <span
  m='595100'>front</span> <span m='595470'>side--</span> <span
  m='595850'>where</span> <span m='595970'>x</span> <span m='596090'>is</span>
  <span m='596210'>positive--</span> <span m='597170'>we're</span> <span
  m='597320'>getting</span> <span m='597530'>positive</span> <span
  m='598020'>contributions</span> <span m='598660'>from</span> <span
  m='598810'>x.</span> <span m='599310'>And</span> <span
  m='599530'>because</span> <span m='599900'>this</span> <span
  m='600120'>sphere</span> <span m='600355'>is</span> <span
  m='600590'>totally</span> <span m='601020'>symmetric,</span> <span
  m='601770'>those</span> <span m='602020'>just</span> <span
  m='602250'>cancel</span> <span m='602520'>out</span> <span
  m='602750'>completely.</span> </p><p><span m='604440'>So</span> <span
  m='604610'>when</span> <span m='604740'>we</span> <span
  m='604870'>integrate</span> <span m='605550'>x</span> <span
  m='609580'>over</span> <span m='609810'>the</span> <span
  m='609880'>whole</span> <span m='610060'>hemisphere,</span> <span
  m='612850'>it</span> <span m='612990'>just</span> <span
  m='613380'>kills</span> <span m='613640'>itself.</span> <span
  m='614060'>I</span> <span m='614180'>mean,</span> <span m='614320'>the</span>
  <span m='614430'>negative</span> <span m='614800'>parts</span> <span
  m='615040'>kill</span> <span m='615190'>the</span> <span
  m='615260'>positive</span> <span m='615540'>parts.</span> <span
  m='615710'>We</span> <span m='615800'>just</span> <span m='615990'>get</span>
  <span m='616435'>0.</span> </p><p><span m='616880'>Similarly,</span> <span
  m='618060'>this</span> <span m='618210'>hemisphere</span> <span
  m='618970'>is</span> <span m='619200'>symmetric</span> <span
  m='619680'>between</span> <span m='619970'>its</span> <span
  m='620090'>left</span> <span m='620430'>side</span> <span
  m='620690'>and</span> <span m='620810'>its</span> <span
  m='621010'>right</span> <span m='621220'>side,</span> <span
  m='622240'>and</span> <span m='622430'>so</span> <span m='623140'>the</span>
  <span m='623380'>parts</span> <span m='623720'>where</span> <span
  m='623890'>y</span> <span m='624220'>are</span> <span
  m='624510'>negative</span> <span m='625270'>cancel</span> <span
  m='625690'>out</span> <span m='625840'>exactly</span> <span
  m='626430'>the</span> <span m='626530'>parts</span> <span
  m='626860'>where</span> <span m='627350'>y</span> <span m='627520'>are</span>
  <span m='627690'>positive.</span> <span m='628770'>So</span> <span
  m='629150'>as</span> <span m='629260'>a</span> <span
  m='629590'>simplifying</span> <span m='630060'>step,</span> <span
  m='630320'>we</span> <span m='630420'>can</span> <span
  m='630560'>realize,</span> <span m='631010'>right</span> <span
  m='631240'>at</span> <span m='631330'>the</span> <span
  m='631430'>beginning,</span> <span m='632110'>that</span> <span
  m='632270'>this</span> <span m='632430'>is</span> <span
  m='632650'>actually</span> <span m='633120'>just</span> <span
  m='633420'>the</span> <span m='633720'>integral</span> <span
  m='634190'>over</span> <span m='634880'>S</span> <span m='635590'>of</span>
  <span m='635850'>z</span> <span m='637370'>with</span> <span
  m='637560'>respect</span> <span m='637930'>to</span> <span
  m='638010'>surface</span> <span m='638353'>area.</span> </p><p><span
  m='639040'>Now,</span> <span m='639420'>if</span> <span m='639520'>you</span>
  <span m='639620'>didn't</span> <span m='640050'>realize</span> <span
  m='640500'>that,</span> <span m='641040'>that's</span> <span
  m='641270'>OK.</span> <span m='642350'>What</span> <span m='642580'>you</span>
  <span m='642670'>would</span> <span m='642810'>have</span> <span
  m='642930'>done</span> <span m='643490'>is</span> <span m='643630'>you</span>
  <span m='643720'>would</span> <span m='643830'>have</span> <span
  m='643920'>done</span> <span m='644100'>the</span> <span
  m='644180'>parametrization</span> <span m='644990'>that</span> <span
  m='645090'>we're</span> <span m='645210'>about</span> <span
  m='645530'>to</span> <span m='645630'>do.</span> <span m='646280'>And</span>
  <span m='646490'>in</span> <span m='646640'>doing</span> <span
  m='646930'>that</span> <span m='647110'>parametrization,</span> <span
  m='648770'>you</span> <span m='649000'>would</span> <span
  m='649220'>have</span> <span m='649340'>found</span> <span
  m='649980'>that</span> <span m='650110'>you</span> <span
  m='650200'>were</span> <span m='650310'>integrating</span> <span
  m='650790'>something</span> <span m='651090'>like</span> <span
  m='651320'>cosine</span> <span m='651870'>theta</span> <span
  m='652240'>between</span> <span m='653220'>0</span> <span
  m='653550'>and</span> <span m='653790'>2*pi,</span> <span m='654290'>or</span>
  <span m='654410'>something</span> <span m='654790'>like</span> <span
  m='654980'>this.</span> <span m='655600'>And</span> <span
  m='655790'>that</span> <span m='656010'>would</span> <span
  m='656200'>have</span> <span m='656290'>given</span> <span
  m='656700'>you</span> <span m='656905'>0.</span> <span m='657110'>So</span>
  <span m='657780'>you</span> <span m='657980'>would</span> <span
  m='658100'>have</span> <span m='658200'>found</span> <span
  m='658810'>this</span> <span m='658940'>symmetry,</span> <span
  m='661250'>even</span> <span m='661500'>if</span> <span m='661600'>you</span>
  <span m='661680'>didn't</span> <span m='662090'>realize</span> <span
  m='662700'>it</span> <span m='662880'>right</span> <span
  m='663070'>now,</span> <span m='663290'>you</span> <span
  m='663420'>would</span> <span m='663520'>have</span> <span
  m='663610'>found</span> <span m='663950'>it</span> <span m='664070'>in</span>
  <span m='664170'>the</span> <span m='664260'>process</span> <span
  m='664780'>of</span> <span m='664890'>computing</span> <span
  m='665850'>this</span> <span m='666030'>integral,</span> <span
  m='666860'>but</span> <span m='667040'>it's</span> <span m='667130'>a</span>
  <span m='667200'>little</span> <span m='667470'>bit</span> <span
  m='667680'>easier</span> <span m='668000'>on</span> <span m='668220'>us</span>
  <span m='668640'>if</span> <span m='668780'>we</span> <span
  m='669250'>can</span> <span m='669410'>recognize</span> <span
  m='669950'>that</span> <span m='670120'>symmetry</span> <span
  m='670470'>first.</span> </p><p><span m='670910'>Now,</span> <span
  m='671240'>notice</span> <span m='671630'>that</span> <span
  m='672030'>z</span> <span m='672440'>doesn't</span> <span
  m='672740'>cancel,</span> <span m='673270'>because</span> <span
  m='673530'>this</span> <span m='673640'>is</span> <span m='673780'>just</span>
  <span m='673960'>the</span> <span m='674040'>top</span> <span
  m='674760'>hemisphere,</span> <span m='675470'>so</span> <span
  m='675630'>it</span> <span m='675700'>doesn't</span> <span
  m='675940'>have</span> <span m='676120'>a</span> <span
  m='676190'>bottom</span> <span m='676530'>half</span> <span
  m='676850'>to</span> <span m='676930'>cancel</span> <span
  m='677210'>out</span> <span m='677620'>with.</span> <span
  m='678030'>Right?</span> <span m='678250'>So</span> <span
  m='678350'>the</span> <span m='678545'>z</span> <span m='678740'>part</span>
  <span m='679040'>we</span> <span m='679140'>can't</span> <span
  m='679440'>use</span> <span m='680240'>this</span> <span
  m='680380'>easy</span> <span m='680710'>analysis</span> <span
  m='681220'>on.</span> <span m='681930'>If</span> <span m='682090'>we</span>
  <span m='682230'>integrated</span> <span m='682700'>this</span> <span
  m='682880'>z</span> <span m='683060'>over</span> <span m='683280'>the</span>
  <span m='683380'>whole</span> <span m='683700'>sphere--</span> <span
  m='684400'>if</span> <span m='684550'>we</span> <span m='684650'>had</span>
  <span m='684960'>the</span> <span m='685080'>other</span> <span
  m='685280'>half</span> <span m='685500'>of</span> <span m='685570'>the</span>
  <span m='685660'>sphere--</span> <span m='685960'>well,</span> <span
  m='686120'>then</span> <span m='686260'>that</span> <span
  m='686450'>would</span> <span m='686610'>also</span> <span
  m='686880'>give</span> <span m='687090'>us</span> <span m='687250'>0.</span>
  <span m='688550'>But</span> <span m='688710'>we</span> <span
  m='688800'>only</span> <span m='689020'>have</span> <span
  m='690960'>the</span> <span m='691090'>top</span> <span m='691320'>half</span>
  <span m='691550'>of</span> <span m='691610'>the</span> <span
  m='691690'>sphere.</span> <span m='691980'>So</span> <span
  m='692660'>it's</span> <span m='692840'>going</span> <span
  m='692940'>to</span> <span m='693040'>give</span> <span m='693190'>us</span>
  <span m='693260'>something</span> <span m='693540'>positive,</span> <span
  m='694010'>because</span> <span m='694190'>z</span> <span m='694315'>is</span>
  <span m='694440'>always</span> <span m='694720'>positive</span> <span
  m='694980'>up</span> <span m='695310'>there.</span> </p><p><span
  m='695940'>OK,</span> <span m='696180'>so</span> <span m='696740'>let's</span>
  <span m='696990'>actually</span> <span m='697730'>set</span> <span
  m='698060'>about</span> <span m='698690'>parametrizing</span> <span
  m='699380'>it.</span> <span m='699470'>We</span> <span m='699570'>want</span>
  <span m='699680'>to</span> <span m='699790'>parametrize</span> <span
  m='700880'>the</span> <span m='701030'>unit</span> <span
  m='701400'>sphere.</span> <span m='701800'>Well,</span> <span
  m='702150'>OK.</span> <span m='702440'>So</span> <span m='702580'>we</span>
  <span m='702700'>have</span> <span m='702840'>our</span> <span
  m='702950'>standard</span> <span m='703410'>parametrization</span> <span
  m='704430'>that</span> <span m='704570'>comes</span> <span
  m='704830'>from</span> <span m='704960'>spherical</span> <span
  m='705450'>coordinates.</span> <span m='706220'>So</span> <span
  m='706380'>rho</span> <span m='706700'>is</span> <span m='706900'>just</span>
  <span m='707140'>1.</span> <span m='708120'>Right?</span> <span
  m='708670'>So</span> <span m='709040'>x</span> <span m='710252'>is</span>
  <span m='710656'>equal</span> <span m='711060'>to,</span> <span
  m='711550'>it's</span> <span m='711950'>going</span> <span
  m='712350'>to</span> <span m='712550'>be</span> <span
  m='713900'>cosine--</span> </p><p><span m='714990'>You</span> <span
  m='715330'>know</span> <span m='715415'>what?</span> <span m='715500'>I</span>
  <span m='715690'>always</span> <span m='716140'>get</span> <span
  m='716290'>a</span> <span m='716350'>little</span> <span
  m='716570'>confused,</span> <span m='717060'>so</span> <span
  m='717160'>I'm</span> <span m='717280'>just</span> <span
  m='717430'>going</span> <span m='717520'>to</span> <span
  m='717610'>check,</span> <span m='718310'>carefully,</span> <span
  m='718830'>that</span> <span m='718950'>I'm</span> <span
  m='719100'>doing</span> <span m='719360'>this</span> <span
  m='719520'>perfectly</span> <span m='720110'>right.</span> </p><p><span
  m='721320'>x</span> <span m='721790'>is</span> <span m='721910'>going</span>
  <span m='721985'>to</span> <span m='722060'>be</span> <span
  m='722560'>cosine</span> <span m='722870'>theta</span> <span
  m='724080'>sine</span> <span m='725510'>phi.</span> <span
  m='726660'>Good.</span> <span m='727520'>y</span> <span m='728820'>is</span>
  <span m='729010'>going</span> <span m='729130'>to</span> <span
  m='729250'>be</span> <span m='729690'>sine</span> <span
  m='730980'>theta</span> <span m='732610'>sine</span> <span
  m='733200'>phi.</span> <span m='734370'>And</span> <span m='734650'>z</span>
  <span m='736170'>is</span> <span m='736440'>going</span> <span
  m='736570'>to</span> <span m='736700'>be</span> <span m='737240'>cosine</span>
  <span m='739110'>phi.</span> <span m='740250'>So</span> <span
  m='740440'>that's</span> <span m='740720'>our</span> <span
  m='740850'>parametrization.</span> </p><p><span m='742140'>But</span> <span
  m='743590'>we</span> <span m='743810'>need</span> <span
  m='744050'>bounds,</span> <span m='744450'>of</span> <span
  m='744560'>course,</span> <span m='744850'>on</span> <span
  m='745010'>theta</span> <span m='745220'>and</span> <span
  m='745400'>phi</span> <span m='745820'>in</span> <span m='745990'>order</span>
  <span m='746115'>to</span> <span m='746240'>properly</span> <span
  m='746740'>describe</span> <span m='747290'>just</span> <span
  m='747525'>this</span> <span m='747760'>hemisphere.</span> <span
  m='748470'>So</span> <span m='748670'>let's</span> <span
  m='748800'>think.</span> <span m='749000'>So</span> <span
  m='749110'>for</span> <span m='749280'>phi,</span> <span m='749790'>we</span>
  <span m='749990'>want</span> <span m='750240'>the</span> <span
  m='750320'>hemisphere</span> <span m='751600'>that</span> <span
  m='751810'>goes</span> <span m='752630'>from</span> <span
  m='753230'>the</span> <span m='753430'>z-axis</span> <span
  m='754300'>down</span> <span m='754640'>to</span> <span m='754760'>the</span>
  <span m='755420'>xy-plane.</span> <span m='756200'>So</span> <span
  m='756400'>that</span> <span m='756580'>means</span> <span
  m='756800'>we</span> <span m='756910'>want</span> <span m='757640'>0</span>
  <span m='759810'>to</span> <span m='759890'>be</span> <span
  m='760030'>less</span> <span m='760360'>than</span> <span m='760490'>or</span>
  <span m='760620'>equal</span> <span m='760810'>to</span> <span
  m='760900'>phi</span> <span m='761980'>to</span> <span m='762130'>be</span>
  <span m='762270'>less</span> <span m='762445'>than</span> <span
  m='762620'>or</span> <span m='762880'>equal</span> <span m='763140'>to</span>
  <span m='763840'>pi</span> <span m='764310'>over</span> <span
  m='764860'>2.</span> <span m='766150'>Right?</span> <span
  m='766430'>That</span> <span m='766570'>will</span> <span
  m='766710'>give</span> <span m='766910'>us</span> <span m='767490'>just</span>
  <span m='767700'>that</span> <span m='767890'>top</span> <span
  m='768170'>half.</span> </p><p><span m='768650'>And</span> <span
  m='768860'>we</span> <span m='768960'>want</span> <span m='769240'>the</span>
  <span m='769320'>whole</span> <span m='769530'>thing.</span> <span
  m='769760'>We</span> <span m='769850'>want</span> <span m='769970'>to</span>
  <span m='770030'>go</span> <span m='770100'>all</span> <span
  m='770280'>the</span> <span m='770370'>way</span> <span
  m='770470'>around.</span> <span m='771060'>So</span> <span
  m='771300'>we</span> <span m='771410'>want</span> <span m='772100'>0</span>
  <span m='773200'>less</span> <span m='773460'>than</span> <span
  m='773548'>or</span> <span m='773636'>equal</span> <span m='773725'>to</span>
  <span m='773990'>theta</span> <span m='775130'>less</span> <span
  m='775420'>than</span> <span m='775465'>or</span> <span
  m='775510'>equal</span> <span m='775850'>to</span> <span
  m='776300'>2*pi.</span> <span m='778970'>OK,</span> <span m='779190'>so</span>
  <span m='779350'>this</span> <span m='779500'>is</span> <span
  m='779810'>what</span> <span m='780010'>x,</span> <span m='780240'>y,</span>
  <span m='780470'>and</span> <span m='780610'>z</span> <span
  m='780780'>are.</span> <span m='781760'>These</span> <span
  m='782030'>are</span> <span m='782110'>the</span> <span
  m='782260'>bounds</span> <span m='782790'>for</span> <span
  m='782950'>our</span> <span m='783080'>parameters</span> <span
  m='784240'>phi</span> <span m='784540'>and</span> <span
  m='784870'>theta.</span> </p><p><span m='786320'>Now,</span> <span
  m='786500'>the</span> <span m='786620'>only</span> <span
  m='786860'>other</span> <span m='787050'>thing</span> <span
  m='787260'>we</span> <span m='787390'>need</span> <span m='787740'>is</span>
  <span m='787840'>we</span> <span m='787980'>need</span> <span
  m='788190'>to</span> <span m='788290'>know</span> <span m='788450'>what</span>
  <span m='788730'>dS</span> <span m='789310'>is.</span> <span
  m='790150'>So</span> <span m='790370'>in</span> <span
  m='790480'>spherical</span> <span m='791130'>coordinates,</span> <span
  m='792180'>we</span> <span m='792320'>know</span> <span m='792540'>that</span>
  <span m='792760'>dS--</span> <span m='795340'>I'll</span> <span
  m='795530'>put</span> <span m='795780'>it</span> <span m='795970'>right</span>
  <span m='796310'>above</span> <span m='796840'>here--</span> <span
  m='797420'>so</span> <span m='798000'>dS</span> <span m='799270'>is</span>
  <span m='799430'>equal</span> <span m='799750'>to</span> <span
  m='801300'>sine</span> <span m='802190'>phi</span> <span m='805230'>d</span>
  <span m='805380'>phi</span> <span m='805780'>d</span> <span
  m='806050'>theta.</span> <span m='806530'>Let</span> <span
  m='806650'>me</span> <span m='806940'>again</span> <span
  m='807280'>just</span> <span m='807530'>double-check</span> <span
  m='807930'>that,</span> <span m='808110'>that</span> <span
  m='808590'>I'm</span> <span m='808835'>not</span> <span
  m='809080'>doing</span> <span m='809290'>anything</span> <span
  m='809670'>silly.</span> </p><p><span m='812580'>So</span> <span
  m='813650'>dS</span> <span m='814100'>is</span> <span m='814220'>equal</span>
  <span m='814510'>to</span> <span m='814910'>sine</span> <span
  m='815770'>phi</span> <span m='816650'>d</span> <span m='817680'>phi</span>
  <span m='818060'>d</span> <span m='818350'>theta.</span> <span
  m='819120'>So</span> <span m='819240'>we've</span> <span m='819490'>got</span>
  <span m='820430'>our</span> <span m='820680'>parametrization.</span> <span
  m='821750'>We've</span> <span m='821930'>got</span> <span
  m='822110'>our</span> <span m='822290'>bounds</span> <span
  m='822640'>on</span> <span m='822750'>our</span> <span
  m='822870'>parameters.</span> <span m='823450'>We</span> <span
  m='823610'>know</span> <span m='823730'>what</span> <span m='823940'>dS</span>
  <span m='824100'>is.</span> <span m='824980'>And</span> <span
  m='825140'>we</span> <span m='825230'>have</span> <span m='825400'>the</span>
  <span m='825500'>integral</span> <span m='825790'>that</span> <span
  m='825920'>we</span> <span m='826030'>want</span> <span m='826190'>to</span>
  <span m='826250'>compute.</span> </p><p><span m='826750'>So</span> <span
  m='826920'>now</span> <span m='827020'>we</span> <span m='827150'>just</span>
  <span m='827280'>have</span> <span m='827370'>to</span> <span
  m='827470'>substitute</span> <span m='827900'>everything</span> <span
  m='828240'>in</span> <span m='828345'>and</span> <span
  m='828450'>actually</span> <span m='828790'>compute</span> <span
  m='829260'>it</span> <span m='829385'>as</span> <span m='829447'>an</span>
  <span m='829510'>iterated</span> <span m='829795'>integral.</span> <span
  m='830760'>Great.</span> <span m='831380'>So</span> <span
  m='831620'>let's</span> <span m='831870'>do</span> <span
  m='832020'>that.</span> <span m='832420'>So,</span> <span
  m='833560'>this</span> <span m='833860'>integral</span> <span
  m='834260'>that</span> <span m='834380'>we</span> <span
  m='834480'>want,</span> <span m='834930'>I'm</span> <span
  m='835100'>going</span> <span m='835200'>to</span> <span
  m='835300'>write</span> <span m='835500'>a</span> <span m='835560'>big</span>
  <span m='835870'>equal</span> <span m='836290'>sign</span> <span
  m='837340'>that's</span> <span m='837510'>going</span> <span
  m='837640'>to</span> <span m='837710'>carry</span> <span m='838110'>me</span>
  <span m='838230'>all</span> <span m='838430'>the</span> <span
  m='838510'>way</span> <span m='838640'>up</span> <span m='838830'>here.</span>
  </p><p><span m='840870'>That's</span> <span m='840923'>an</span> <span
  m='840976'>equal</span> <span m='841030'>sign.</span> <span
  m='842380'>All</span> <span m='842480'>right.</span> <span
  m='842580'>So</span> <span m='842790'>our</span> <span
  m='842960'>integral,</span> <span m='843565'>the</span> <span
  m='843920'>integral</span> <span m='844510'>over</span> <span
  m='844700'>S</span> <span m='844940'>of</span> <span m='845130'>z</span> <span
  m='846480'>with</span> <span m='846640'>respect</span> <span
  m='846970'>to</span> <span m='847050'>surface</span> <span
  m='847390'>area.</span> <span m='848010'>So</span> <span m='848710'>z</span>
  <span m='849530'>becomes</span> <span m='850040'>cosine</span> <span
  m='851370'>phi.</span> <span m='852700'>So</span> <span
  m='852910'>we've</span> <span m='853090'>got</span> <span
  m='853380'>our</span> <span m='853500'>double</span> <span
  m='853840'>integral</span> <span m='854100'>becomes</span> <span
  m='854380'>an</span> <span m='854440'>iterated</span> <span
  m='854645'>integral.</span> <span m='856070'>z</span> <span
  m='856500'>becomes</span> <span m='858840'>cosine</span> <span
  m='859410'>phi.</span> <span m='860670'>dS</span> <span
  m='861480'>becomes</span> <span m='862040'>sine</span> <span
  m='862500'>phi</span> <span m='862840'>d</span> <span m='863020'>phi</span>
  <span m='863290'>d</span> <span m='863490'>theta.</span> </p><p><span
  m='871380'>And</span> <span m='871830'>our</span> <span
  m='871950'>bounds.</span> <span m='872430'>So</span> <span
  m='872500'>let's</span> <span m='872650'>see:</span> <span
  m='873090'>phi</span> <span m='874030'>we</span> <span m='874180'>said</span>
  <span m='874490'>is</span> <span m='874640'>going</span> <span
  m='875040'>from</span> <span m='875290'>0</span> <span m='875700'>to</span>
  <span m='875810'>pi</span> <span m='876090'>over</span> <span
  m='876340'>2.</span> <span m='878510'>Zero,</span> <span m='879370'>pi</span>
  <span m='879505'>over</span> <span m='879640'>2.</span> <span
  m='881450'>And</span> <span m='882160'>theta</span> <span m='882560'>is</span>
  <span m='882730'>going</span> <span m='882990'>from</span> <span
  m='883190'>0</span> <span m='883982'>to</span> <span m='884380'>2*pi.</span>
  <span m='886480'>OK.</span> </p><p><span m='887200'>So</span> <span
  m='887350'>now</span> <span m='887550'>we</span> <span m='887650'>just</span>
  <span m='887820'>have</span> <span m='887970'>a</span> <span
  m='888030'>nice,</span> <span m='888360'>straightforward</span> <span
  m='889110'>iterated</span> <span m='889560'>integral</span> <span
  m='889930'>here</span> <span m='890090'>to</span> <span
  m='890190'>compute.</span> <span m='890750'>So</span> <span
  m='890910'>let's</span> <span m='891110'>do</span> <span m='891250'>the</span>
  <span m='891430'>inner</span> <span m='891620'>one</span> <span
  m='891910'>first.</span> <span m='894460'>So</span> <span
  m='894620'>we're</span> <span m='894750'>computing--</span> <span
  m='896282'>the</span> <span m='896660'>inner</span> <span
  m='897160'>integral</span> <span m='897940'>is</span> <span
  m='898150'>the</span> <span m='898230'>integral</span> <span
  m='898630'>from</span> <span m='898920'>0</span> <span m='900670'>to</span>
  <span m='900790'>pi</span> <span m='901120'>over</span> <span
  m='901360'>2,</span> <span m='902340'>of</span> <span m='902710'>cosine</span>
  <span m='903380'>phi</span> <span m='904930'>sine</span> <span
  m='905340'>phi</span> <span m='907060'>d</span> <span m='907270'>phi.</span>
  </p><p><span m='908050'>And</span> <span m='908260'>OK.</span> <span
  m='908500'>So</span> <span m='909100'>there</span> <span m='909320'>are</span>
  <span m='909760'>a</span> <span m='909890'>bunch</span> <span
  m='910230'>of</span> <span m='910290'>different</span> <span
  m='910560'>ways</span> <span m='910770'>you</span> <span
  m='910850'>could</span> <span m='910990'>do</span> <span
  m='911140'>this.</span> <span m='912060'>If</span> <span m='912170'>you</span>
  <span m='912270'>wanted</span> <span m='912490'>to</span> <span
  m='912570'>get</span> <span m='912700'>fancy,</span> <span
  m='913320'>you</span> <span m='913440'>could</span> <span m='913600'>do</span>
  <span m='913720'>a</span> <span m='913820'>double-angle</span> <span
  m='914500'>formula</span> <span m='914980'>here,</span> <span
  m='915220'>but</span> <span m='915370'>that's</span> <span
  m='915540'>really</span> <span m='915780'>more</span> <span
  m='916040'>fancy</span> <span m='916420'>than</span> <span
  m='916550'>you</span> <span m='916650'>need.</span> <span
  m='916880'>Because</span> <span m='917040'>this</span> <span
  m='917160'>is</span> <span m='917330'>like</span> <span m='918930'>sine</span>
  <span m='919360'>phi</span> <span m='919890'>times</span> <span
  m='920780'>d</span> <span m='921160'>sine</span> <span m='921510'>phi,</span>
  <span m='922210'>right?</span> <span m='922970'>So</span> <span
  m='923170'>this</span> <span m='923320'>is</span> <span
  m='923660'>equal</span> <span m='924095'>to--</span> <span
  m='925130'>another</span> <span m='925530'>way</span> <span
  m='925670'>of</span> <span m='925750'>saying</span> <span
  m='926020'>that</span> <span m='926180'>is</span> <span m='926290'>you</span>
  <span m='926370'>can</span> <span m='926510'>make</span> <span
  m='926700'>the</span> <span m='926780'>substitution</span> <span
  m='927550'>u</span> <span m='927720'>equals</span> <span
  m='928040'>sine</span> <span m='928515'>phi.</span> <span
  m='928990'>Anyhow,</span> <span m='929800'>this</span> <span
  m='929980'>is</span> <span m='930100'>all</span> <span m='931300'>Calc</span>
  <span m='931457'>I</span> <span m='931930'>stuff</span> <span
  m='932410'>that</span> <span m='932970'>hopefully</span> <span
  m='933350'>you're</span> <span m='933470'>pretty</span> <span
  m='933750'>familiar</span> <span m='934170'>with.</span> <span
  m='934650'>So</span> <span m='934860'>OK.</span> </p><p><span
  m='935050'>So</span> <span m='935210'>this</span> <span m='935390'>is</span>
  <span m='935620'>equal</span> <span m='935990'>to--</span> <span
  m='936660'>in</span> <span m='936860'>the</span> <span m='937190'>end,</span>
  <span m='937400'>we</span> <span m='937490'>get</span> <span
  m='937660'>sine</span> <span m='938580'>squared</span> <span
  m='939180'>phi</span> <span m='939650'>over</span> <span m='939970'>2,</span>
  <span m='940700'>between</span> <span m='942130'>0</span> <span
  m='943670'>and</span> <span m='943820'>pi</span> <span m='943970'>over</span>
  <span m='944120'>2.</span> <span m='944310'>OK.</span> <span
  m='944520'>So</span> <span m='944640'>we</span> <span m='944750'>plug</span>
  <span m='945040'>this</span> <span m='945160'>in.</span> <span
  m='945280'>So</span> <span m='945670'>sine</span> <span
  m='946130'>squared</span> <span m='946500'>pi</span> <span
  m='946685'>over</span> <span m='946870'>2,</span> <span
  m='947070'>that's</span> <span m='947710'>1/2,</span> <span
  m='948670'>minus--</span> <span m='949660'>sine</span> <span
  m='950070'>squared</span> <span m='950330'>0</span> <span
  m='950530'>over</span> <span m='950830'>2</span> <span m='950980'>is</span>
  <span m='951120'>0</span> <span m='951890'>over</span> <span
  m='952140'>2.</span> <span m='952280'>So</span> <span m='952450'>it's</span>
  <span m='952920'>just</span> <span m='953140'>1/2.</span> <span
  m='954200'>So</span> <span m='954280'>the</span> <span m='954410'>inner</span>
  <span m='954650'>integral</span> <span m='955360'>is</span> <span
  m='955550'>1/2.</span> <span m='956180'>So</span> <span
  m='956510'>let's</span> <span m='956990'>see</span> <span
  m='957200'>about</span> <span m='957420'>the</span> <span
  m='957520'>outer</span> <span m='957820'>one.</span> </p><p><span
  m='958906'>The</span> <span m='959260'>outer</span> <span
  m='959830'>integral</span> <span m='960550'>is</span> <span
  m='960780'>just</span> <span m='960980'>the</span> <span
  m='961140'>integral</span> <span m='962010'>from</span> <span
  m='962250'>0</span> <span m='963250'>to</span> <span m='963490'>2*pi</span>
  <span m='965230'>d</span> <span m='965410'>theta</span> <span
  m='966080'>of</span> <span m='966280'>whatever</span> <span
  m='966680'>the</span> <span m='966900'>inner</span> <span
  m='967180'>integral</span> <span m='967520'>was.</span> <span
  m='968100'>Well,</span> <span m='968260'>the</span> <span
  m='968370'>inner</span> <span m='968550'>integral</span> <span
  m='968980'>was</span> <span m='969070'>1/2.</span> <span m='970370'>So</span>
  <span m='970600'>the</span> <span m='970770'>integral</span> <span
  m='971110'>from</span> <span m='971330'>0</span> <span m='971630'>to</span>
  <span m='971720'>2*pi</span> <span m='972035'>of</span> <span
  m='972180'>1/2</span> <span m='973260'>is</span> <span m='974050'>pi.</span>
  <span m='974660'>Straightforward.</span> <span m='975650'>Good.</span> <span
  m='976000'>So</span> <span m='976280'>OK.</span> <span m='976490'>So</span>
  <span m='976630'>that's</span> <span m='976870'>what</span> <span
  m='977020'>the</span> <span m='977100'>surface</span> <span
  m='977910'>integral</span> <span m='978530'>gives</span> <span
  m='978760'>us.</span> </p><p><span m='979490'>So</span> <span
  m='979640'>let's</span> <span m='980180'>go</span> <span
  m='980340'>back</span> <span m='980650'>here</span> <span
  m='980900'>and</span> <span m='981040'>compare.</span> <span
  m='982090'>So</span> <span m='983320'>way</span> <span m='983630'>back</span>
  <span m='983920'>at</span> <span m='984000'>the</span> <span
  m='984090'>beginning</span> <span m='985710'>of</span> <span
  m='985940'>this</span> <span m='986750'>recitation,</span> <span
  m='987450'>we</span> <span m='987620'>did</span> <span m='988430'>the</span>
  <span m='988530'>line</span> <span m='988780'>integral</span> <span
  m='990800'>for</span> <span m='990940'>this</span> <span
  m='991440'>circle</span> <span m='992120'>that's</span> <span
  m='992340'>the</span> <span m='992440'>boundary</span> <span
  m='992910'>of</span> <span m='993030'>this</span> <span
  m='993170'>hemisphere,</span> <span m='993960'>and</span> <span
  m='994130'>we</span> <span m='994220'>got</span> <span m='994490'>pi.</span>
  <span m='995360'>And</span> <span m='995660'>just</span> <span
  m='995900'>now</span> <span m='996220'>what</span> <span m='996410'>we</span>
  <span m='996570'>did</span> <span m='997130'>is</span> <span
  m='997390'>we</span> <span m='997560'>had</span> <span m='998050'>the</span>
  <span m='998140'>surface</span> <span m='998500'>integral--</span> <span
  m='998850'>the</span> <span m='998960'>associated</span> <span
  m='999510'>surface</span> <span m='999880'>integral</span> <span
  m='1000160'>that</span> <span m='1000290'>we</span> <span
  m='1000390'>get</span> <span m='1000520'>from</span> <span
  m='1000650'>Stokes'</span> <span m='1001000'>Theorem,</span> <span
  m='1001280'>this</span> <span m='1001460'>curl</span> <span
  m='1001760'>F</span> <span m='1002090'>dot</span> <span m='1002240'>n</span>
  <span m='1002850'>dS.</span> <span m='1003570'>So</span> <span
  m='1004380'>we</span> <span m='1004530'>computed</span> <span
  m='1005540'>F</span> <span m='1005700'>and</span> <span
  m='1006180'>curl</span> <span m='1006470'>F</span> <span
  m='1006800'>and</span> <span m='1006980'>n.</span> <span
  m='1007320'>And</span> <span m='1007960'>then</span> <span
  m='1008790'>we'd</span> <span m='1008940'>noticed</span> <span
  m='1009320'>a</span> <span m='1009410'>little</span> <span
  m='1009610'>nice</span> <span m='1009840'>symmetry</span> <span
  m='1010340'>here.</span> </p><p><span m='1010580'>Although</span> <span
  m='1010840'>if</span> <span m='1010950'>you</span> <span
  m='1011050'>didn't</span> <span m='1011390'>notice</span> <span
  m='1011670'>it,</span> <span m='1011830'>you</span> <span
  m='1011900'>should</span> <span m='1012090'>have</span> <span
  m='1012730'>had</span> <span m='1012920'>no</span> <span
  m='1013070'>trouble</span> <span m='1013420'>computing</span> <span
  m='1014200'>the</span> <span m='1014350'>extra</span> <span
  m='1014670'>terms</span> <span m='1015060'>in</span> <span
  m='1015180'>the</span> <span m='1015300'>integral</span> <span
  m='1015970'>that</span> <span m='1016100'>you</span> <span
  m='1016180'>actually</span> <span m='1016520'>ended</span> <span
  m='1016720'>up</span> <span m='1016890'>with</span> <span
  m='1017150'>it.</span> <span m='1017240'>It</span> <span
  m='1017350'>would've</span> <span m='1017460'>been</span> <span
  m='1018090'>another</span> <span m='1018950'>couple</span> <span
  m='1019300'>of</span> <span m='1019400'>trig</span> <span
  m='1019690'>terms</span> <span m='1020140'>there</span> <span
  m='1020680'>after</span> <span m='1020980'>you</span> <span
  m='1021060'>made</span> <span m='1021230'>the</span> <span
  m='1021320'>substitution.</span> </p><p><span m='1022230'>So</span> <span
  m='1022430'>we</span> <span m='1022560'>parametrized</span> <span
  m='1023350'>our</span> <span m='1023480'>surface</span> <span
  m='1023900'>nicely.</span> <span m='1024320'>Because</span> <span
  m='1024510'>it's</span> <span m='1024660'>a</span> <span
  m='1024730'>sphere,</span> <span m='1025100'>it's</span> <span
  m='1025260'>easy</span> <span m='1025550'>to</span> <span
  m='1025660'>do.</span> <span m='1027650'>And</span> <span
  m='1027840'>then</span> <span m='1027960'>we</span> <span
  m='1028080'>computed</span> <span m='1028970'>the</span> <span
  m='1029070'>double</span> <span m='1029340'>integral</span> <span
  m='1029880'>and</span> <span m='1030050'>we</span> <span
  m='1030160'>also</span> <span m='1030510'>came</span> <span
  m='1030760'>out</span> <span m='1030890'>with</span> <span
  m='1031050'>pi.</span> <span m='1031780'>And</span> <span
  m='1031980'>we</span> <span m='1032080'>better</span> <span
  m='1032360'>have</span> <span m='1032460'>also</span> <span
  m='1032720'>come</span> <span m='1032900'>out</span> <span
  m='1033030'>with</span> <span m='1033160'>pi,</span> <span
  m='1033390'>because</span> <span m='1033650'>Stokes'</span> <span
  m='1033970'>Theorem</span> <span m='1034250'>tells</span> <span
  m='1034550'>us</span> <span m='1034690'>that</span> <span
  m='1034790'>the</span> <span m='1034900'>line</span> <span
  m='1035180'>integral</span> <span m='1035520'>and</span> <span
  m='1035610'>the</span> <span m='1035680'>surface</span> <span
  m='1035990'>integral</span> <span m='1036290'>have</span> <span
  m='1036450'>to</span> <span m='1036540'>give</span> <span
  m='1036670'>us</span> <span m='1036850'>the</span> <span
  m='1037077'>same</span> <span m='1037305'>value.</span> </p><p><span
  m='1038670'>So</span> <span m='1038830'>that's</span> <span
  m='1039070'>great.</span> <span m='1039290'>So</span> <span
  m='1039770'>that's</span> <span m='1040000'>exactly</span> <span
  m='1040410'>what</span> <span m='1040550'>we</span> <span
  m='1040635'>were</span> <span m='1040720'>hoping</span> <span
  m='1041020'>would</span> <span m='1041120'>happen.</span> <span
  m='1041790'>And</span> <span m='1042060'>now</span> <span
  m='1042140'>we've</span> <span m='1042380'>sort</span> <span
  m='1042660'>of</span> <span m='1043160'>convinced</span> <span
  m='1043600'>ourselves,</span> <span m='1044060'>hopefully,</span> <span
  m='1045020'>that</span> <span m='1046090'>through</span> <span
  m='1046320'>an</span> <span m='1046390'>example</span> <span
  m='1046730'>now,</span> <span m='1047090'>we</span> <span
  m='1047230'>have</span> <span m='1047350'>a</span> <span
  m='1047720'>feel</span> <span m='1048010'>for</span> <span
  m='1048310'>what</span> <span m='1048570'>sorts</span> <span
  m='1048830'>of</span> <span m='1048940'>things</span> <span
  m='1049260'>Stokes'</span> <span m='1049550'>Theorem</span> <span
  m='1049800'>can</span> <span m='1049950'>do</span> <span
  m='1050080'>for</span> <span m='1050423'>us.</span> <span
  m='1050766'>I'll</span> <span m='1050880'>end</span> <span
  m='1050995'>there.</span> </p>
embedded_media:
  - uid: f05a7609c8f92fedde38c6318a85cc91
    parent_uid: 079c829fd16cbb1c7f208f883f412385
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 2ieG1ka5pBw
  - uid: 2eefb4002dfad10f35a6658e48cb569c
    parent_uid: 079c829fd16cbb1c7f208f883f412385
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/2ieG1ka5pBw/default.jpg'
  - uid: b994938e248260ced776c979474fbda8
    parent_uid: 079c829fd16cbb1c7f208f883f412385
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 2ieG1ka5pBw
  - uid: a9fbb3d60d4216d88d1042af33097a06
    parent_uid: 079c829fd16cbb1c7f208f883f412385
    id: 2ieG1ka5pBw.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/4.-triple-integrals-and-surface-integrals-in-3-space/part-c-line-integrals-and-stokes-theorem/session-91-stokes-theorem/stokes-theorem/2ieG1ka5pBw.srt
  - uid: a0cf1dd75b7d487a430f0d0828367ce1
    parent_uid: 079c829fd16cbb1c7f208f883f412385
    id: 2ieG1ka5pBw.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/4.-triple-integrals-and-surface-integrals-in-3-space/part-c-line-integrals-and-stokes-theorem/session-91-stokes-theorem/stokes-theorem/2ieG1ka5pBw.pdf
  - uid: c9616adfd306bf0c6d39c7f54e410705
    parent_uid: 079c829fd16cbb1c7f208f883f412385
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: ef1b1b2b936a0c126aaee794cd20ac4d
    parent_uid: 079c829fd16cbb1c7f208f883f412385
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 3cc52471a07a6a3cf96b20a19b75abb4
    parent_uid: 079c829fd16cbb1c7f208f883f412385
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'http://itunes.apple.com/us/podcast/stokes-theorem/id414355340?i=90323147'
  - uid: 5aebbffdbc15e1c6e720c395ec528088
    parent_uid: 079c829fd16cbb1c7f208f883f412385
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_65_300k.mp4'
type: courses
layout: video
---
