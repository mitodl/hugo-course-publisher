---
title: 'Video 7: Cross-Validation'
uid: 445b933500d099ecc73b738b4a13049d
parent_uid: 6fc7a0e47d44d24efd6c876af7f8e2de
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/location-location-location-regression-trees-for-housing-data-recitation/video-7-cross-validation/video-7-cross-validation-0
short_url: video-7-cross-validation-0
inline_embed_id: 22492470video7crossvalidation6785155
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='5150'>OK,</span> <span m='5475'>so</span> <span
  m='5800'>now</span> <span m='6125'>we</span> <span m='6450'>know</span> <span
  m='6775'>what</span> <span m='7100'>CP</span> <span m='7425'>is,</span> <span
  m='7750'>we</span> <span m='8075'>can</span> <span m='8400'>go</span> <span
  m='8725'>ahead</span> <span m='9050'>and</span> <span m='9375'>build</span>
  <span m='9700'>one</span> <span m='10266'>last</span> <span
  m='10833'>tree</span> <span m='11400'>using</span> <span
  m='11966'>cross</span> <span m='12533'>validation.</span> </p><p><span
  m='13100'>So</span> <span m='13290'>we</span> <span m='13480'>need</span>
  <span m='13670'>to</span> <span m='13860'>make</span> <span
  m='14050'>sure</span> <span m='14240'>first</span> <span m='14430'>we</span>
  <span m='14620'>have</span> <span m='14810'>the</span> <span
  m='15000'>required</span> <span m='15190'>libraries</span> <span
  m='15894'>installed</span> <span m='16598'>and</span> <span
  m='17302'>in</span> <span m='18006'>use.</span> </p><p><span
  m='18710'>So</span> <span m='19226'>the</span> <span m='19742'>first</span>
  <span m='20258'>package</span> <span m='20775'>is</span> <span
  m='21291'>the</span> <span m='21807'>"caret"</span> <span
  m='22323'>package.</span> </p><p><span m='25720'>And</span> <span
  m='26438'>the</span> <span m='27157'>second</span> <span m='27876'>we</span>
  <span m='28595'>need</span> <span m='29313'>is</span> <span
  m='30032'>the</span> <span m='30751'>"e1071"</span> <span
  m='31470'>package.</span> </p><p><span m='32189'>OK.</span> </p><p><span
  m='33730'>So</span> <span m='34054'>we</span> <span m='34379'>need</span>
  <span m='34703'>to</span> <span m='35028'>tell</span> <span
  m='35352'>the</span> <span m='35677'>caret</span> <span
  m='36001'>package</span> <span m='36326'>how</span> <span
  m='36650'>exactly</span> <span m='36975'>we</span> <span m='37300'>want</span>
  <span m='37705'>to</span> <span m='38110'>do</span> <span m='38515'>our</span>
  <span m='38920'>parameter</span> <span m='39325'>tuning.</span> </p><p><span
  m='39730'>There</span> <span m='39986'>are</span> <span
  m='40242'>actually</span> <span m='40498'>quite</span> <span
  m='40754'>a</span> <span m='41010'>few</span> <span m='41266'>ways</span>
  <span m='41522'>of</span> <span m='41778'>doing</span> <span
  m='42034'>it.</span> </p><p><span m='42290'>But</span> <span
  m='42537'>we're</span> <span m='42785'>going</span> <span m='43033'>to</span>
  <span m='43281'>restrict</span> <span m='43528'>ourselves</span> <span
  m='43776'>in</span> <span m='44024'>this</span> <span m='44272'>course</span>
  <span m='44520'>to</span> <span m='44960'>just</span> <span
  m='45400'>10-fold</span> <span m='45840'>cross</span> <span
  m='46280'>validation,</span> <span m='46720'>as</span> <span
  m='47080'>was</span> <span m='47440'>explained</span> <span
  m='47800'>in</span> <span m='48160'>the</span> <span m='48520'>lecture.</span>
  </p><p><span m='48880'>So</span> <span m='49400'>let's</span> <span
  m='49920'>say</span> <span
  m='50440'>tr.control=trainControl(method="cv",</span> <span
  m='50960'>number=10).</span> </p><p><span m='65260'>OK,</span> <span
  m='65702'>that</span> <span m='66144'>was</span> <span m='66586'>easy</span>
  <span m='67028'>enough.</span> </p><p><span m='67470'>Now</span> <span
  m='67816'>we</span> <span m='68162'>need</span> <span m='68509'>to</span>
  <span m='68855'>tell</span> <span m='69201'>caret</span> <span
  m='69548'>which</span> <span m='69894'>range</span> <span m='70240'>of</span>
  <span m='70587'>CP</span> <span m='70933'>parameters</span> <span
  m='71280'>to</span> <span m='71776'>try</span> <span m='72273'>out.</span>
  </p><p><span m='72770'>Now</span> <span m='73227'>remember</span> <span
  m='73685'>that</span> <span m='74143'>CP</span> <span m='74601'>varies</span>
  <span m='75058'>between</span> <span m='75516'>0</span> <span
  m='75974'>and</span> <span m='76432'>1.</span> </p><p><span
  m='76890'>It's</span> <span m='77175'>likely</span> <span m='77460'>for</span>
  <span m='77745'>any</span> <span m='78030'>given</span> <span
  m='78315'>problem</span> <span m='78600'>that</span> <span m='78922'>we</span>
  <span m='79244'>don't</span> <span m='79566'>need</span> <span
  m='79888'>to</span> <span m='80211'>explore</span> <span m='80533'>the</span>
  <span m='80855'>whole</span> <span m='81177'>range.</span> </p><p><span
  m='81500'>I</span> <span m='81725'>happen</span> <span m='81951'>to</span>
  <span m='82176'>know,</span> <span m='82402'>by</span> <span
  m='82627'>the</span> <span m='82853'>fact</span> <span m='83078'>that</span>
  <span m='83304'>I</span> <span m='83530'>made</span> <span
  m='83853'>this</span> <span m='84177'>presentation</span> <span
  m='84500'>ahead</span> <span m='84824'>of</span> <span m='85148'>time,</span>
  <span m='85471'>that</span> <span m='85795'>the</span> <span
  m='86119'>value</span> <span m='86442'>of</span> <span m='86766'>CP</span>
  <span m='87090'>we're</span> <span m='87462'>going</span> <span
  m='87835'>to</span> <span m='88208'>pick</span> <span m='88581'>is</span>
  <span m='88954'>very</span> <span m='89327'>small.</span> </p><p><span
  m='89700'>So</span> <span m='90130'>what</span> <span m='90561'>I</span> <span
  m='90992'>want</span> <span m='91422'>to</span> <span m='91853'>do</span>
  <span m='92284'>is</span> <span m='92714'>make</span> <span m='93145'>a</span>
  <span m='93576'>grid</span> <span m='94006'>of</span> <span
  m='94437'>CP</span> <span m='94868'>values</span> <span m='95298'>to</span>
  <span m='95729'>try.</span> </p><p><span m='96160'>And</span> <span
  m='97727'>it</span> <span m='99294'>will</span> <span m='100861'>be</span>
  <span m='102429'>over</span> <span m='103996'>the</span> <span
  m='105563'>range</span> <span m='107130'>of</span> <span m='108698'>0</span>
  <span m='110265'>to</span> <span m='111832'>0.01.</span> </p><p><span
  m='113400'>OK,</span> <span m='113777'>so</span> <span m='114154'>how</span>
  <span m='114531'>does</span> <span m='114908'>what</span> <span
  m='115285'>I</span> <span m='115662'>wrote</span> <span m='116039'>feed</span>
  <span m='116416'>into</span> <span m='116793'>that?</span> </p><p><span
  m='117170'>Well,</span> <span m='118180'>1</span> <span
  m='119190'>times</span> <span m='120200'>0.001</span> <span
  m='121210'>is</span> <span m='122220'>obviously</span> <span
  m='123230'>0.001.</span> </p><p><span m='124240'>And</span> <span
  m='125178'>10</span> <span m='126117'>times</span> <span
  m='127055'>0.001</span> <span m='127994'>is</span> <span
  m='128932'>obviously</span> <span m='129871'>0.01.</span> </p><p><span
  m='130810'>0</span> <span m='131259'>to</span> <span m='131708'>5,</span>
  <span m='132157'>or</span> <span m='132606'>0</span> <span
  m='133055'>to</span> <span m='133504'>10,</span> <span m='133953'>means</span>
  <span m='134402'>the</span> <span m='134851'>numbers</span> <span
  m='135300'>0,</span> <span m='135649'>1,</span> <span m='135998'>2,</span>
  <span m='136347'>3,</span> <span m='136696'>4</span> <span
  m='137045'>5,</span> <span m='137394'>6,</span> <span m='137743'>7,</span>
  <span m='138092'>8,</span> <span m='138441'>9,</span> <span
  m='138790'>10.</span> </p><p><span m='139140'>So</span> <span
  m='140101'>0</span> <span m='141063'>to</span> <span m='142025'>10</span>
  <span m='142986'>times</span> <span m='143948'>0.001</span> <span
  m='144910'>is</span> <span m='145871'>those</span> <span
  m='146833'>numbers</span> <span m='147795'>scaled</span> <span
  m='148756'>by</span> <span m='149718'>0.001.</span> </p><p><span
  m='150680'>So</span> <span m='151131'>those</span> <span m='151583'>are</span>
  <span m='152035'>the</span> <span m='152487'>values</span> <span
  m='152939'>of</span> <span m='153390'>CP</span> <span m='153842'>that</span>
  <span m='154294'>caret</span> <span m='154746'>will</span> <span
  m='155198'>try.</span> </p><p><span m='155650'>So</span> <span
  m='156100'>let's</span> <span m='156550'>store</span> <span
  m='157000'>the</span> <span m='157450'>results</span> <span
  m='157900'>of</span> <span m='158350'>the</span> <span m='158800'>cross</span>
  <span m='159250'>validation</span> <span m='159700'>fitting</span> <span
  m='160150'>in</span> <span m='160594'>a</span> <span
  m='161038'>variable</span> <span m='161482'>called</span> <span
  m='161926'>tr.</span> </p><p><span m='162370'>And</span> <span
  m='162896'>we'll</span> <span m='163423'>use</span> <span
  m='163950'>the</span> <span m='164476'>train</span> <span
  m='165003'>function.</span> </p><p><span m='165530'>Predicting</span> <span
  m='167040'>MEDV</span> <span m='168550'>is</span> <span m='170060'>the</span>
  <span m='171570'>LAT,</span> <span m='173080'>LON,</span> <span
  m='174590'>CRIM,</span> <span m='176100'>zoning,</span> <span
  m='177610'>industry,</span> <span m='179120'>Charles</span> <span
  m='180868'>River,</span> <span m='182616'>pollution,</span> <span
  m='184365'>rooms,</span> <span m='186113'>age,</span> <span
  m='187861'>distance,</span> <span m='189610'>distance</span> <span
  m='190644'>from</span> <span m='191678'>highways,</span> <span
  m='192712'>tax,</span> <span m='193747'>and</span> <span
  m='194781'>pupil-teacher</span> <span m='195815'>ratio.</span> </p><p><span
  m='196850'>OK,</span> <span m='197705'>we're</span> <span
  m='198561'>using</span> <span m='199417'>the</span> <span
  m='200272'>train</span> <span m='201128'>data</span> <span
  m='201984'>set.</span> </p><p><span m='202840'>We're</span> <span
  m='203758'>using</span> <span m='204677'>trees</span> <span
  m='205595'>(rpart),</span> <span m='206514'>our</span> <span
  m='207432'>train</span> <span m='208351'>control</span> <span
  m='209270'>is</span> <span m='209789'>what</span> <span m='210308'>we</span>
  <span m='210827'>just</span> <span m='211346'>made</span> <span
  m='211865'>before,</span> <span m='212384'>and</span> <span
  m='212903'>our</span> <span m='213422'>tuning</span> <span
  m='213941'>grid</span> <span m='214460'>is</span> <span m='214966'>the</span>
  <span m='215473'>other</span> <span m='215980'>thing</span> <span
  m='216486'>we</span> <span m='216993'>just</span> <span
  m='217500'>made,</span> <span m='218006'>which</span> <span
  m='218513'>we</span> <span m='219020'>called</span> <span m='219526'>CP</span>
  <span m='220033'>grid.</span> </p><p><span m='220540'>And</span> <span
  m='220830'>it</span> <span m='221120'>whirrs</span> <span
  m='221410'>away.</span> </p><p><span m='221700'>And</span> <span
  m='221922'>what</span> <span m='222145'>its</span> <span
  m='222367'>doing</span> <span m='222590'>there</span> <span
  m='222812'>is</span> <span m='223035'>it's</span> <span
  m='223257'>trying</span> <span m='223480'>all</span> <span
  m='223702'>the</span> <span m='223925'>different</span> <span
  m='224147'>values</span> <span m='224370'>of</span> <span m='224754'>CP</span>
  <span m='225138'>that</span> <span m='225522'>we</span> <span
  m='225907'>asked</span> <span m='226291'>it</span> <span m='226675'>to.</span>
  </p><p><span m='227060'>So</span> <span m='227478'>we</span> <span
  m='227896'>can</span> <span m='228314'>see</span> <span m='228732'>what</span>
  <span m='229150'>it's</span> <span m='229568'>done</span> <span
  m='229986'>but</span> <span m='230404'>typing</span> <span
  m='230822'>tr.</span> </p><p><span m='231240'>You</span> <span
  m='231676'>can</span> <span m='232112'>see</span> <span m='232548'>it</span>
  <span m='232984'>tried</span> <span m='233420'>11</span> <span
  m='233856'>different</span> <span m='234292'>values</span> <span
  m='234728'>of</span> <span m='235164'>CP.</span> </p><p><span
  m='235600'>And</span> <span m='236116'>it</span> <span
  m='236633'>decided</span> <span m='237150'>that</span> <span
  m='237666'>CP</span> <span m='238183'>equals</span> <span
  m='238700'>0.001</span> <span m='239216'>was</span> <span
  m='239733'>the</span> <span m='240250'>best</span> <span
  m='240766'>because</span> <span m='241283'>it</span> <span
  m='241800'>had</span> <span m='242497'>the</span> <span m='243195'>best</span>
  <span m='243892'>RMSE--</span> <span m='244590'>Root</span> <span
  m='245287'>Mean</span> <span m='245985'>Square</span> <span
  m='246682'>Error.</span> </p><p><span m='247380'>And</span> <span
  m='248145'>it</span> <span m='248910'>was</span> <span m='249675'>5.03</span>
  <span m='250440'>for</span> <span m='251205'>0.001.</span> </p><p><span
  m='251970'>You</span> <span m='252494'>see</span> <span m='253019'>it's</span>
  <span m='253543'>pretty</span> <span m='254068'>insensitive</span> <span
  m='254592'>to</span> <span m='255117'>a</span> <span
  m='255641'>particular</span> <span m='256166'>value</span> <span
  m='256690'>of</span> <span m='257215'>CP.</span> </p><p><span
  m='257740'>So</span> <span m='258231'>it's</span> <span
  m='258723'>maybe</span> <span m='259215'>not</span> <span
  m='259706'>too</span> <span m='260198'>important.</span> </p><p><span
  m='260690'>It's</span> <span m='260975'>interesting</span> <span
  m='261261'>though</span> <span m='261546'>that</span> <span
  m='261832'>the</span> <span m='262117'>numbers</span> <span
  m='262403'>are</span> <span m='262688'>so</span> <span m='262974'>low.</span>
  </p><p><span m='263260'>I</span> <span m='263547'>tried</span> <span
  m='263834'>it</span> <span m='264121'>for</span> <span m='264409'>a</span>
  <span m='264696'>much</span> <span m='264983'>larger</span> <span
  m='265270'>range</span> <span m='265558'>of</span> <span m='265845'>CP</span>
  <span m='266132'>values,</span> <span m='266420'>and</span> <span
  m='266971'>the</span> <span m='267522'>best</span> <span
  m='268073'>solutions</span> <span m='268624'>are</span> <span
  m='269175'>always</span> <span m='269726'>very</span> <span
  m='270277'>close</span> <span m='270828'>to</span> <span m='271379'>0.</span>
  </p><p><span m='271930'>So</span> <span m='272302'>it</span> <span
  m='272675'>wants</span> <span m='273048'>us</span> <span m='273421'>to</span>
  <span m='273794'>build</span> <span m='274167'>a</span> <span
  m='274540'>very</span> <span m='274913'>detail-rich</span> <span
  m='275286'>tree.</span> </p><p><span m='275659'>So</span> <span
  m='275966'>let's</span> <span m='276274'>see</span> <span
  m='276582'>what</span> <span m='276889'>the</span> <span
  m='277197'>tree</span> <span m='277505'>that</span> <span
  m='277812'>that</span> <span m='278120'>value</span> <span
  m='278428'>of</span> <span m='278735'>CP</span> <span
  m='279043'>corresponds</span> <span m='279351'>to</span> <span
  m='279659'>is.</span> </p><p><span m='280159'>So</span> <span
  m='280442'>we</span> <span m='280726'>can</span> <span m='281010'>get</span>
  <span m='281294'>that</span> <span m='281578'>from</span> <span
  m='281862'>going</span> <span m='282146'>best.tree=tr$finalModel.</span>
  </p><p><span m='296100'>And</span> <span m='296520'>we</span> <span
  m='296940'>can</span> <span m='297360'>plot</span> <span
  m='297780'>that</span> <span m='298200'>tree.</span> </p><p><span
  m='298620'>So</span> <span m='299312'>that's</span> <span
  m='300005'>the</span> <span m='300697'>model</span> <span
  m='301390'>that</span> <span m='302082'>corresponds</span> <span
  m='302775'>to</span> <span m='303467'>0.001.</span> </p><p><span
  m='304160'>Plot</span> <span m='305735'>it.</span> </p><p><span
  m='307310'>Wow,</span> <span m='307773'>OK,</span> <span m='308237'>so</span>
  <span m='308701'>that's</span> <span m='309165'>a</span> <span
  m='309628'>very</span> <span m='310092'>detailed</span> <span
  m='310556'>tree.</span> </p><p><span m='311020'>You</span> <span
  m='311211'>see</span> <span m='311403'>that</span> <span m='311595'>it</span>
  <span m='311786'>looks</span> <span m='311978'>pretty</span> <span
  m='312170'>much</span> <span m='312361'>like</span> <span
  m='312553'>the</span> <span m='312745'>same</span> <span
  m='312936'>tree</span> <span m='313128'>we</span> <span m='313320'>had</span>
  <span m='313980'>before,</span> <span m='314640'>initially.</span>
  </p><p><span m='315300'>But</span> <span m='315515'>then</span> <span
  m='315730'>it</span> <span m='315945'>starts</span> <span m='316160'>to</span>
  <span m='316375'>get</span> <span m='316590'>much</span> <span
  m='316805'>more</span> <span m='317020'>detailed</span> <span
  m='317235'>at</span> <span m='317450'>the</span> <span
  m='317665'>bottom.</span> </p><p><span m='317880'>And</span> <span
  m='318113'>in</span> <span m='318346'>fact</span> <span m='318580'>if</span>
  <span m='318813'>you</span> <span m='319046'>can</span> <span
  m='319280'>see</span> <span m='319513'>close</span> <span
  m='319746'>enough,</span> <span m='319980'>there's</span> <span
  m='320265'>actually</span> <span m='320551'>latitude</span> <span
  m='320837'>and</span> <span m='321122'>longitude</span> <span
  m='321408'>in</span> <span m='321694'>there</span> <span
  m='321980'>right</span> <span m='322288'>down</span> <span
  m='322597'>at</span> <span m='322905'>the</span> <span
  m='323214'>bottom</span> <span m='323522'>as</span> <span
  m='323831'>well.</span> </p><p><span m='324140'>So</span> <span
  m='324498'>maybe</span> <span m='324857'>the</span> <span
  m='325215'>tree</span> <span m='325574'>is</span> <span
  m='325932'>finally</span> <span m='326291'>going</span> <span
  m='326650'>to</span> <span m='327118'>be</span> <span m='327586'>a</span>
  <span m='328055'>linear</span> <span m='328523'>regression</span> <span
  m='328991'>model.</span> </p><p><span m='329460'>Well,</span> <span
  m='329670'>we</span> <span m='329881'>can</span> <span m='330092'>test</span>
  <span m='330303'>that</span> <span m='330514'>out</span> <span
  m='330725'>same</span> <span m='330935'>way</span> <span m='331146'>as</span>
  <span m='331357'>we</span> <span m='331568'>did</span> <span
  m='331779'>before.</span> </p><p><span
  m='331990'>best.tree.pred=predict(best.tree,</span> <span
  m='333010'>newdata=test).</span> </p><p><span m='343070'>best.tree.sse,</span>
  <span m='343915'>the</span> <span m='344760'>Sum</span> <span
  m='345605'>of</span> <span m='346450'>Squared</span> <span
  m='347295'>Errors,</span> <span m='348140'>is</span> <span
  m='348912'>the</span> <span m='349685'>sum</span> <span m='350457'>of</span>
  <span m='351230'>the</span> <span m='352002'>best</span> <span
  m='352775'>tree's</span> <span m='353547'>predictions</span> <span
  m='354320'>minus</span> <span m='355688'>the</span> <span
  m='357056'>true</span> <span m='358424'>values</span> <span
  m='359792'>squared.</span> </p><p><span m='361160'>That</span> <span
  m='362722'>number</span> <span m='364285'>is</span> <span
  m='365847'>3,675.</span> </p><p><span m='367410'>So</span> <span
  m='367714'>if</span> <span m='368018'>you</span> <span m='368323'>can</span>
  <span m='368627'>remember</span> <span m='368932'>from</span> <span
  m='369236'>the</span> <span m='369541'>last</span> <span
  m='369845'>video,</span> <span m='370150'>the</span> <span
  m='370724'>tree</span> <span m='371298'>from</span> <span
  m='371872'>the</span> <span m='372446'>previous</span> <span
  m='373020'>video</span> <span m='373594'>actually</span> <span
  m='374168'>only</span> <span m='374742'>got</span> <span
  m='375316'>something</span> <span m='375890'>in</span> <span
  m='376103'>the</span> <span m='376316'>4,000s.</span> </p><p><span
  m='376530'>So</span> <span m='376740'>not</span> <span m='376950'>very</span>
  <span m='377160'>good.</span> </p><p><span m='377370'>So</span> <span
  m='377612'>we</span> <span m='377854'>have</span> <span
  m='378096'>actually</span> <span m='378338'>improved.</span> </p><p><span
  m='378580'>This</span> <span m='378875'>tree</span> <span m='379170'>is</span>
  <span m='379465'>better</span> <span m='379760'>on</span> <span
  m='380055'>the</span> <span m='380350'>testing</span> <span
  m='380645'>set</span> <span m='380940'>than</span> <span m='381348'>the</span>
  <span m='381756'>original</span> <span m='382165'>tree</span> <span
  m='382573'>we</span> <span m='382981'>created.</span> </p><p><span
  m='383390'>But,</span> <span m='383711'>you</span> <span m='384032'>may</span>
  <span m='384353'>also</span> <span m='384674'>remember</span> <span
  m='384995'>that</span> <span m='385316'>a</span> <span
  m='385637'>linear</span> <span m='385958'>regression</span> <span
  m='386280'>model</span> <span m='386741'>did</span> <span
  m='387202'>actually</span> <span m='387664'>better</span> <span
  m='388125'>than</span> <span m='388587'>that</span> <span
  m='389048'>still.</span> </p><p><span m='389510'>The</span> <span
  m='390161'>linear</span> <span m='390812'>regression</span> <span
  m='391463'>SSE</span> <span m='392115'>was</span> <span m='392766'>more</span>
  <span m='393417'>around</span> <span m='394068'>3,030.</span> </p><p><span
  m='394720'>So</span> <span m='395079'>the</span> <span m='395438'>best</span>
  <span m='395797'>tree</span> <span m='396156'>is</span> <span
  m='396516'>not</span> <span m='396875'>as</span> <span m='397234'>good</span>
  <span m='397593'>as</span> <span m='397953'>a</span> <span
  m='398312'>linear</span> <span m='398671'>regression</span> <span
  m='399030'>model.</span> </p><p><span m='399390'>But</span> <span
  m='400146'>cross</span> <span m='400903'>validation</span> <span
  m='401660'>did</span> <span m='402416'>improve</span> <span
  m='403173'>performance.</span> </p><p><span m='403930'>So</span> <span
  m='404311'>the</span> <span m='404692'>takeaway</span> <span
  m='405073'>is,</span> <span m='405455'>I</span> <span m='405836'>guess,</span>
  <span m='406217'>that</span> <span m='406598'>trees</span> <span
  m='406980'>aren't</span> <span m='407286'>always</span> <span
  m='407592'>the</span> <span m='407898'>best</span> <span
  m='408204'>method</span> <span m='408510'>you</span> <span
  m='408816'>have</span> <span m='409122'>available</span> <span
  m='409428'>to</span> <span m='409734'>you.</span> </p><p><span
  m='410040'>But</span> <span m='410600'>you</span> <span
  m='411160'>should</span> <span m='411720'>always</span> <span
  m='412280'>try</span> <span m='412840'>cross</span> <span
  m='413400'>validating</span> <span m='413960'>them</span> <span
  m='414240'>to</span> <span m='414521'>get</span> <span m='414802'>as</span>
  <span m='415083'>much</span> <span m='415364'>performance</span> <span
  m='415645'>out</span> <span m='415925'>of</span> <span m='416206'>them</span>
  <span m='416487'>as</span> <span m='416768'>you</span> <span
  m='417049'>can.</span> </p><p><span m='417330'>And</span> <span
  m='417737'>that's</span> <span m='418145'>the</span> <span
  m='418553'>end</span> <span m='418961'>of</span> <span m='419368'>the</span>
  <span m='419776'>presentation</span> <span m='420184'>Thank</span> <span
  m='420592'>you.</span> </p>
embedded_media:
  - uid: cb6fd9e8fcbee8075619b684d3bdc597
    parent_uid: 445b933500d099ecc73b738b4a13049d
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: IXwPD4R6V6M
  - uid: 91e80ea99a055093db5c39e7c89a0968
    parent_uid: 445b933500d099ecc73b738b4a13049d
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: IXwPD4R6V6M
  - uid: eea7713110da31b3988203af052fbaf4
    parent_uid: 445b933500d099ecc73b738b4a13049d
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/IXwPD4R6V6M/default.jpg'
  - uid: dbb6867157e446092c57a8f87d6f9e20
    parent_uid: 445b933500d099ecc73b738b4a13049d
    id: IXwPD4R6V6M.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/location-location-location-regression-trees-for-housing-data-recitation/video-7-cross-validation/video-7-cross-validation-0/IXwPD4R6V6M.srt
  - uid: 965767a2ce9f40f0b878c37f063471f8
    parent_uid: 445b933500d099ecc73b738b4a13049d
    id: IXwPD4R6V6M.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/location-location-location-regression-trees-for-housing-data-recitation/video-7-cross-validation/video-7-cross-validation-0/IXwPD4R6V6M.pdf
  - uid: 16382ba38e5d498f3dc9f57f9de4450e
    parent_uid: 445b933500d099ecc73b738b4a13049d
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 69322131097a699587b5e3ae3d4dda60
    parent_uid: 445b933500d099ecc73b738b4a13049d
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 0e0a95d6604f105690e5aed6fc5b118e
    parent_uid: 445b933500d099ecc73b738b4a13049d
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_4.4.08_300k.mp4
type: courses
layout: video
---
