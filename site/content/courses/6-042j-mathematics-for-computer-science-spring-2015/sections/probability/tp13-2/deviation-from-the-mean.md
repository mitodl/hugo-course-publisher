---
title: 'Deviation From The Mean: Video'
uid: 2d92edb39e3916de6359fda2b399d641
parent_uid: f195ee849b9aee3ccf61f90bea10cebb
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/deviation-from-the-mean
short_url: deviation-from-the-mean
inline_embed_id: 55024972deviationfromthemeanvideo79401104
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='1790'>ALBERT MEYER: In</span> <span m='2000'>the</span> <span
  m='2080'>last</span> <span m='2370'>lecture,</span> <span m='2760'>we</span>
  <span m='2790'>spent</span> <span m='3160'>time</span> <span
  m='3870'>talking</span> <span m='4210'>about</span> <span m='4640'>the</span>
  <span m='4760'>mean,</span> <span m='5030'>or</span> <span
  m='5150'>expectation,</span> <span m='5900'>and</span> <span
  m='5990'>its</span> <span m='6150'>properties,</span> <span
  m='6960'>most</span> <span m='7120'>important</span> <span m='7510'>one</span>
  <span m='7680'>being</span> <span m='7920'>linearity.</span> <span
  m='9260'>But</span> <span m='9500'>let's</span> <span m='9750'>step</span>
  <span m='10000'>back</span> <span m='10310'>now</span> <span
  m='10590'>and</span> <span m='10750'>think</span> <span
  m='10990'>about,</span> <span m='11660'>what</span> <span m='11970'>is</span>
  <span m='12220'>it</span> <span m='12410'>that</span> <span m='12580'>the
  mean</span> <span m='12810'>means?</span> <span m='13220'>Why</span> <span
  m='13400'>we</span> <span m='13610'>care</span> <span m='13930'>about</span>
  <span m='14230'>it?</span> <span m='14880'>We</span> <span
  m='15000'>have</span> <span m='15140'>this</span> <span
  m='15290'>intuitive</span> <span m='15830'>idea</span> <span
  m='16329'>that</span> <span m='16450'>if</span> <span m='16630'>you</span>
  <span m='16750'>do</span> <span m='16940'>things</span> <span
  m='17230'>long</span> <span m='17510'>enough,</span> <span m='18750'>if</span>
  <span m='19040'>you</span> <span m='19140'>keep</span> <span
  m='19770'>experimenting</span> <span m='20630'>with</span> <span
  m='20810'>the</span> <span m='20880'>same</span> <span m='22230'>random</span>
  <span m='22500'>variable</span> <span m='23090'>collecting</span> <span
  m='23500'>its</span> <span m='23640'>values,</span> <span m='24750'>its</span>
  <span m='24980'>long</span> <span m='25260'>run</span> <span
  m='25510'>average</span> <span m='25970'>will</span> <span m='26150'>be</span>
  <span m='26370'>about</span> <span m='26700'>the</span> <span
  m='26780'>same</span> <span m='27090'>as</span> <span m='27210'>its</span>
  <span m='27390'>mean.</span> <span m='27870'>Now,</span> <span
  m='28100'>we're</span> <span m='28220'>going</span> <span m='28370'>to</span>
  <span m='28440'>try</span> <span m='28650'>to</span> <span
  m='28760'>make</span> <span m='29020'>that</span> <span m='29260'>more</span>
  <span m='29450'>precise.</span> </p><p><span m='30650'>So</span> <span
  m='30870'>we're</span> <span m='30970'>going</span> <span m='31070'>to</span>
  <span m='31140'>talk</span> <span m='31390'>about</span> <span
  m='31610'>the</span> <span m='31700'>topic</span> <span m='32060'>of</span>
  <span m='32189'>deviation</span> <span m='32840'>from</span> <span
  m='33040'>the</span> <span m='33120'>mean,</span> <span m='33860'>or as</span>
  <span m='34090'>I</span> <span m='34140'>like</span> <span m='34430'>to</span>
  <span m='34530'>say,</span> <span m='35060'>what</span> <span
  m='35340'>does</span> <span m='35530'>the</span> <span m='35610'>mean</span>
  <span m='36110'>really</span> <span m='36390'>mean?</span> <span
  m='37290'>Why</span> <span m='37410'>do</span> <span m='37500'>we</span> <span
  m='37610'>care</span> <span m='37870'>about</span> <span m='38150'>it?</span>
  <span m='40260'>Well,</span> <span m='40460'>let's</span> <span
  m='40490'>look</span> <span m='40670'>at</span> <span m='40710'>an</span>
  <span m='40810'>example</span> <span m='41410'>that's</span> <span
  m='41480'>familiar</span> <span m='42630'>to</span> <span m='42700'>get</span>
  <span m='42890'>a</span> <span m='42980'>grip</span> <span m='43290'>on</span>
  <span m='43640'>the</span> <span m='43760'>specific</span> <span
  m='44320'>ideas</span> <span m='44680'>that</span> <span
  m='44780'>we're</span> <span m='44920'>interested</span> <span
  m='45200'>in.</span> <span m='45480'>So</span> <span m='45680'>suppose</span>
  <span m='45960'>I</span> <span m='46020'>toss</span> <span m='46440'>a</span>
  <span m='46510'>fair</span> <span m='46850'>coin</span> <span
  m='47080'>101</span> <span m='47760'>times.</span> <span
  m='49170'>Then,</span> <span m='49770'>I</span> <span m='49930'>know</span>
  <span m='50190'>that</span> <span m='50480'>the</span> <span
  m='50790'>expected</span> <span m='51440'>number,</span> <span
  m='53080'>since</span> <span m='54040'>all</span> <span m='54250'>the</span>
  <span m='54340'>values</span> <span m='54790'>from</span> <span
  m='55180'>zero</span> <span m='55670'>through</span> <span
  m='56970'>101</span> <span m='57550'>are</span> <span
  m='57630'>possible,</span> <span m='58310'>and</span> <span
  m='58430'>the</span> <span m='58500'>middle</span> <span
  m='58760'>value</span> <span m='59230'>is</span> <span m='59380'>the</span>
  <span m='59510'>expectation,</span> <span m='61250'>it's</span> <span
  m='61450'>50</span> <span m='61810'>and</span> <span m='62170'>1/2</span>
  <span m='62560'>heads.</span> <span m='63100'>Now,</span> <span
  m='63350'>I'm</span> <span m='63490'>never</span> <span m='63830'>going</span>
  <span m='64030'>to</span> <span m='64319'>get</span> <span
  m='64709'>exactly</span> <span m='65370'>50</span> <span m='65635'>and</span>
  <span m='65900'>1/2</span> <span m='66180'>heads.</span> <span
  m='66850'>The</span> <span m='66950'>probability</span> <span
  m='67385'>in</span> <span m='67820'>101</span> <span m='68480'>flips</span>
  <span m='68860'>of</span> <span m='68970'>getting</span> <span
  m='69850'>50</span> <span m='70070'>and</span> <span m='70290'>1/2</span>
  <span m='70510'>heads</span> <span m='70740'>is</span> <span
  m='70890'>zero</span> <span m='71470'>because</span> <span
  m='71700'>there's</span> <span m='71880'>no</span> <span m='72010'>way</span>
  <span m='72140'>to</span> <span m='72690'>flip</span> <span m='72960'>1/2
  a</span> <span m='73200'>head.</span> </p><p><span m='75150'>So</span> <span
  m='75570'>you don't</span> <span m='75870'>expect</span> <span
  m='76390'>the</span> <span m='76540'>expectation</span> <span
  m='76955'>in</span> <span m='77370'>that</span> <span m='77590'>sense.</span>
  <span m='78150'>No</span> <span m='78460'>given</span> <span
  m='79200'>measurement,</span> <span m='79750'>no</span> <span
  m='79960'>given</span> <span m='80250'>experiment</span> <span
  m='80820'>is</span> <span m='80950'>going</span> <span m='81060'>to</span>
  <span m='81110'>yield</span> <span m='81350'>the</span> <span
  m='81470'>expectation.</span> <span m='82140'>The</span> <span
  m='82210'>expectation</span> <span m='82840'>is</span> <span
  m='82970'>this</span> <span m='83170'>thing</span> <span m='83330'>that</span>
  <span m='83430'>we</span> <span m='83580'>expect</span> <span
  m='84000'>to</span> <span m='84100'>come</span> <span m='84340'>out</span>
  <span m='84560'>on</span> <span m='84770'>the</span> <span
  m='84910'>average.</span> <span m='86520'>Well,</span> <span
  m='86710'>we</span> <span m='86830'>can</span> <span m='86970'>ask,</span>
  <span m='87160'>what's</span> <span m='87340'>the</span> <span
  m='87440'>probability</span> <span m='88570'>of</span> <span
  m='88910'>getting</span> <span m='89460'>as</span> <span
  m='89650'>close</span> <span m='89960'>as</span> <span m='90060'>you</span>
  <span m='90160'>could</span> <span m='90300'>hope</span> <span
  m='90610'>to</span> <span m='90700'>get</span> <span m='91100'>to</span> <span
  m='91510'>the</span> <span m='92450'>expectation?</span> <span
  m='93300'>Namely,</span> <span m='93630'>what's</span> <span
  m='93800'>the</span> <span m='93890'>probability</span> <span
  m='94400'>of</span> <span m='94470'>getting</span> <span
  m='94750'>exactly</span> <span m='95390'>50</span> <span
  m='95820'>heads?</span> <span m='97240'>And</span> <span m='97460'>it's</span>
  <span m='97600'>about</span> <span m='97870'>1/13.</span> <span
  m='99120'>Or</span> <span m='100100'>if</span> <span m='100230'>you</span>
  <span m='100380'>ask,</span> <span m='100580'>what's</span> <span
  m='100720'>the</span> <span m='100800'>probability</span> <span
  m='101310'>of</span> <span m='101390'>getting</span> <span
  m='101650'>either</span> <span m='101860'>50</span> <span m='102310'>or</span>
  <span m='102360'>51</span> <span m='102920'>heads,</span> <span
  m='103420'>being</span> <span m='103710'>within</span> <span
  m='104450'>plus</span> <span m='104710'>or</span> <span
  m='104760'>minus</span> <span m='105090'>one</span> <span m='105940'>of</span>
  <span m='106090'>the</span> <span m='106220'>expectation?</span> <span
  m='107000'>It's</span> <span m='107150'>about</span> <span
  m='107460'>1/7.</span> </p><p><span m='109200'>OK,</span> <span
  m='110050'>let's</span> <span m='110300'>flip</span> <span
  m='110530'>more</span> <span m='110790'>coins</span> <span
  m='111150'>and</span> <span m='111260'>see</span> <span m='111400'>what</span>
  <span m='111560'>happens.</span> <span m='111980'>This</span> <span
  m='112150'>time</span> <span m='112350'>I'm</span> <span
  m='112410'>going</span> <span m='112520'>to</span> <span
  m='112590'>flip</span> <span m='112910'>1001</span> <span
  m='113740'>coins.</span> <span m='115250'>And</span> <span
  m='115410'>again,</span> <span m='115740'>the</span> <span
  m='115970'>expected</span> <span m='116660'>number</span> <span
  m='117000'>of</span> <span m='117080'>heads</span> <span m='117490'>is</span>
  <span m='117700'>500</span> <span m='118190'>and</span> <span
  m='118680'>1/2,</span> <span m='119170'>which</span> <span
  m='119400'>I'll</span> <span m='119760'>never</span> <span
  m='120240'>get</span> <span m='120390'>exactly.</span> <span
  m='121660'>The</span> <span m='121790'>probability</span> <span
  m='122620'>of</span> <span m='122800'>getting</span> <span
  m='123390'>exactly</span> <span m='124030'>500</span> <span
  m='124630'>heads</span> <span m='124920'>is</span> <span
  m='125030'>1/39,</span> <span m='125910'>and</span> <span
  m='126050'>the</span> <span m='126130'>probability</span> <span
  m='126730'>of</span> <span m='126830'>getting</span> <span
  m='127330'>within</span> <span m='127670'>one</span> <span
  m='128449'>of</span> <span m='128590'>the</span> <span
  m='128740'>expectation,</span> <span m='129610'>that</span> <span
  m='129759'>is</span> <span m='129930'>either</span> <span
  m='130740'>500</span> <span m='131330'>or</span> <span m='131420'>501</span>
  <span m='133250'>heads,</span> <span m='133610'>is</span> <span
  m='133840'>about</span> <span m='134210'>1/19.</span> </p><p><span
  m='135820'>Now,</span> <span m='135870'>these</span> <span
  m='136120'>numbers</span> <span m='136480'>have</span> <span
  m='136620'>gone</span> <span m='136950'>down</span> <span
  m='137310'>from</span> <span m='137470'>the</span> <span
  m='137560'>previous</span> <span m='138040'>numbers.</span> <span
  m='138400'>Remember,</span> <span m='138800'>it</span> <span
  m='138850'>was</span> <span m='139020'>about</span> <span
  m='139420'>1/7</span> <span m='140640'>and</span> <span
  m='140830'>we've</span> <span m='141000'>gone</span> <span
  m='141230'>down</span> <span m='141430'>to</span> <span
  m='141550'>1/19.</span> <span m='142380'>So</span> <span
  m='142640'>it's</span> <span m='142760'>actually</span> <span
  m='143860'>we're</span> <span m='144060'>less</span> <span
  m='144460'>likely</span> <span m='144980'>to</span> <span m='145100'>be</span>
  <span m='145380'>within</span> <span m='146220'>a</span> <span
  m='146290'>fixed</span> <span m='146620'>distance,</span> <span
  m='147040'>within</span> <span m='147360'>one</span> <span
  m='147850'>of</span> <span m='148010'>the</span> <span
  m='148150'>expectation</span> <span m='149290'>when</span> <span
  m='149510'>we</span> <span m='149650'>flip</span> <span m='149970'>more</span>
  <span m='150180'>coins.</span> <span m='151450'>So</span> <span
  m='151770'>as</span> <span m='151900'>the</span> <span
  m='152000'>number</span> <span m='152280'>of</span> <span
  m='152390'>tosses</span> <span m='152830'>grows,</span> <span
  m='153410'>the</span> <span m='153510'>number</span> <span
  m='153740'>of</span> <span m='153820'>heads</span> <span
  m='154650'>gets</span> <span m='154910'>less</span> <span
  m='155180'>likely</span> <span m='155620'>to</span> <span m='155700'>be</span>
  <span m='155900'>within</span> <span m='156330'>any</span> <span
  m='156650'>given</span> <span m='156990'>fixed</span> <span
  m='157410'>distance</span> <span m='157920'>of</span> <span
  m='158090'>the</span> <span m='158170'>mean.</span> <span
  m='159330'>But</span> <span m='159550'>things</span> <span
  m='159770'>get</span> <span m='159980'>better</span> <span
  m='160200'>when</span> <span m='160320'>we</span> <span
  m='160420'>start</span> <span m='160700'>looking</span> <span
  m='160960'>at</span> <span m='161070'>percentages.</span> </p><p><span
  m='162240'>So</span> <span m='162850'>what's</span> <span
  m='163260'>the</span> <span m='163370'>probability</span> <span
  m='164200'>of</span> <span m='164410'>being</span> <span
  m='165180'>within</span> <span m='165830'>1%</span> <span m='167190'>of</span>
  <span m='167400'>the</span> <span m='167490'>mean</span> <span
  m='167820'>if</span> <span m='167970'>I</span> <span m='168040'>toss</span>
  <span m='168360'>1,001</span> <span m='169150'>coins?</span> <span
  m='170740'>Well,</span> <span m='171210'>1%</span> <span m='171950'>of</span>
  <span m='172030'>1,001</span> <span m='172810'>is</span> <span
  m='172930'>about</span> <span m='173250'>10,</span> <span m='174080'>so</span>
  <span m='174370'>we're</span> <span m='174560'>talking</span> <span
  m='174870'>about</span> <span m='175060'>1%</span> <span m='175620'>of</span>
  <span m='175700'>the</span> <span m='175810'>1,001.</span> <span
  m='177270'>And</span> <span m='177490'>the</span> <span
  m='177570'>probability</span> <span m='178590'>of</span> <span
  m='178740'>being</span> <span m='179280'>within</span> <span
  m='180010'>10</span> <span m='180680'>of</span> <span m='180890'>500.5,</span>
  <span m='182990'>that</span> <span m='183130'>is</span> <span
  m='183300'>to</span> <span m='183400'>say</span> <span m='183590'>the</span>
  <span m='183710'>probability</span> <span m='184490'>of</span> <span
  m='184730'>being</span> <span m='185890'>within</span> <span
  m='186330'>510</span> <span m='187710'>and</span> <span m='188250'>490,</span>
  <span m='190590'>is</span> <span m='191550'>about</span> <span
  m='193070'>0.49.</span> <span m='194060'>It's</span> <span
  m='194280'>almost</span> <span m='194620'>50-50,</span> <span
  m='196120'>which</span> <span m='196430'>is</span> <span m='196570'>not</span>
  <span m='196840'>really</span> <span m='197130'>so</span> <span
  m='197340'>bad.</span> <span m='198320'>So</span> <span m='198420'>we</span>
  <span m='198570'>have</span> <span m='198730'>a</span> <span
  m='198790'>50/50</span> <span m='199450'>chance</span> <span
  m='199690'>of</span> <span m='199770'>actually</span> <span
  m='200010'>being</span> <span m='200220'>within</span> <span
  m='200470'>1%</span> <span m='202130'>of</span> <span m='202400'>the</span>
  <span m='202540'>expected</span> <span m='203160'>number</span> <span
  m='204020'>when</span> <span m='204250'>I</span> <span m='204330'>flip</span>
  <span m='205010'>1,001</span> <span m='205920'>coins.</span> </p><p><span
  m='207460'>So</span> <span m='208065'>what</span> <span m='208410'>we</span>
  <span m='208550'>can</span> <span m='208700'>start</span> <span
  m='209030'>to</span> <span m='209120'>say</span> <span m='209440'>is</span>
  <span m='209640'>that when</span> <span m='209920'>we're</span> <span
  m='210080'>trying</span> <span m='210300'>to</span> <span
  m='210360'>give</span> <span m='210610'>the</span> <span
  m='210700'>meaning</span> <span m='211120'>to</span> <span
  m='211230'>the</span> <span m='211330'>mean,</span> <span m='211970'>if</span>
  <span m='212060'>I</span> <span m='212150'>let</span> <span
  m='212450'>u</span> <span m='212690'>be</span> <span m='212820'>the</span>
  <span m='212930'>standard</span> <span m='213270'>abbreviation</span> <span
  m='213990'>for</span> <span m='214310'>expectation</span> <span
  m='214980'>of</span> <span m='215100'>R--</span> <span m='215170'>I'm</span>
  <span m='215300'>doing</span> <span m='215500'>that</span> <span
  m='215630'>just</span> <span m='215800'>so</span> <span
  m='215960'>it'll</span> <span m='216080'>fit</span> <span m='216280'>on</span>
  <span m='216400'>the</span> <span m='216470'>slide</span> <span
  m='216880'>nicely</span> <span m='217500'>in</span> <span
  m='217660'>formulas,</span> <span m='218230'>so</span> <span
  m='218450'>mu</span> <span m='218720'>is</span> <span m='218840'>the</span>
  <span m='218940'>expectation</span> <span m='219610'>of</span> <span
  m='219690'>R--</span> <span m='220450'>the</span> <span
  m='220560'>basic</span> <span m='220970'>question</span> <span
  m='221350'>we're</span> <span m='221570'>asking</span> <span
  m='221980'>is</span> <span m='222690'>two</span> <span m='222850'>basic</span>
  <span m='223210'>questions.</span> <span m='223660'>One</span> <span
  m='224020'>is,</span> <span m='224270'>what's</span> <span
  m='224510'>the</span> <span m='224620'>probability</span> <span
  m='225670'>that</span> <span m='225850'>the</span> <span
  m='225950'>random</span> <span m='226280'>variable</span> <span
  m='226890'>is</span> <span m='227140'>far</span> <span m='227630'>from</span>
  <span m='227990'>its</span> <span m='228200'>mean,</span> <span
  m='228580'>mu?</span> <span m='230258'>You</span> <span
  m='230660'>could</span> <span m='230840'>phrase</span> <span
  m='231200'>that</span> <span m='231410'>as,</span> <span
  m='231650'>what's</span> <span m='231850'>the</span> <span
  m='231940'>probability</span> <span m='232530'>that</span> <span
  m='232730'>the</span> <span m='232820'>distance</span> <span
  m='233350'>from</span> <span m='233570'>R</span> <span m='234070'>to</span>
  <span m='234210'>mu,</span> <span m='234730'>the</span> <span
  m='234840'>absolute</span> <span m='235180'>value</span> <span
  m='235470'>of</span> <span m='235570'>R</span> <span m='235690'>minus</span>
  <span m='236030'>mu</span> <span m='236150'>is</span> <span
  m='236330'>greater</span> <span m='236630'>than</span> <span
  m='236790'>some</span> <span m='237000'>amount,</span> <span
  m='237380'>x.</span> <span m='238490'>And</span> <span m='238680'>the</span>
  <span m='238750'>second</span> <span m='239150'>question</span> <span
  m='239590'>that</span> <span m='239690'>we</span> <span m='239790'>want</span>
  <span m='240020'>to</span> <span m='240100'>ask</span> <span
  m='240500'>is,</span> <span m='240950'>what's</span> <span
  m='241380'>the</span> <span m='241580'>average</span> <span
  m='242070'>deviation?</span> <span m='242560'>What's</span> <span
  m='242760'>the</span> <span m='242900'>expectation</span> <span
  m='245090'>of</span> <span m='245320'>the</span> <span
  m='245500'>distance</span> <span m='246020'>between</span> <span
  m='246550'>R</span> <span m='246800'>minus</span> <span m='247240'>mu?</span>
  <span m='247410'>What's</span> <span m='247740'>the</span> <span
  m='247860'>expected</span> <span m='248460'>value</span> <span
  m='248870'>of</span> <span m='249000'>r</span> <span m='249300'>minus</span>
  <span m='249830'>mu?</span> </p><p><span m='251640'>Now,</span> <span
  m='251930'>of</span> <span m='251980'>course,</span> <span
  m='252270'>we're</span> <span m='252520'>trying</span> <span
  m='252730'>to</span> <span m='253070'>make</span> <span
  m='253400'>sense</span> <span m='253730'>of</span> <span m='253830'>the</span>
  <span m='253910'>meaning</span> <span m='254230'>of</span> <span
  m='254290'>the</span> <span m='254400'>expectation,</span> <span
  m='255070'>in</span> <span m='255150'>terms</span> <span m='255420'>of</span>
  <span m='255490'>the</span> <span m='255610'>expectation</span> <span
  m='256310'>of</span> <span m='256380'>the</span> <span
  m='256459'>distance</span> <span m='257370'>between</span> <span m='257790'>R
  and this</span> <span m='258200'>expectation.</span> <span
  m='258860'>So</span> <span m='258990'>there's</span> <span m='259160'>a</span>
  <span m='259209'>little</span> <span m='259440'>bit</span> <span
  m='259570'>of</span> <span m='259640'>circularity</span> <span
  m='260329'>there,</span> <span m='260519'>but</span> <span
  m='260690'>let's</span> <span m='260899'>live</span> <span
  m='261060'>with</span> <span m='261230'>it</span> <span m='261450'>and</span>
  <span m='261680'>proceed.</span> </p><p><span m='264480'>Let's</span> <span
  m='264680'>look</span> <span m='264850'>at</span> <span
  m='264960'>example</span> <span m='265500'>to</span> <span
  m='266030'>crystallize</span> <span m='266540'>the</span> <span
  m='266680'>ideas</span> <span m='267040'>a little.</span> <span
  m='267270'>Let's</span> <span m='267450'>look</span> <span
  m='267600'>at</span> <span m='267720'>two</span> <span m='267840'>dice</span>
  <span m='268180'>with</span> <span m='268320'>the</span> <span
  m='268390'>same</span> <span m='268760'>mean.</span> <span
  m='269450'>The</span> <span m='269860'>green</span> <span
  m='270260'>die</span> <span m='270910'>is</span> <span m='271120'>going</span>
  <span m='271270'>to</span> <span m='271320'>be</span> <span
  m='272040'>a</span> <span m='272110'>standard</span> <span
  m='272620'>fair</span> <span m='272910'>die,</span> <span m='273850'>in</span>
  <span m='274040'>which</span> <span m='275330'>each</span> <span
  m='275640'>of</span> <span m='275810'>the</span> <span
  m='276180'>numbers</span> <span m='276560'>one</span> <span
  m='276760'>through</span> <span m='276930'>six</span> <span
  m='277270'>has</span> <span m='277470'>an</span> <span m='277570'>equal</span>
  <span m='277930'>probability</span> <span m='278950'>of</span> <span
  m='279330'>showing</span> <span m='279770'>up,</span> <span
  m='280270'>and</span> <span m='280780'>its</span> <span
  m='283120'>expected</span> <span m='283610'>value</span> <span
  m='283880'>is</span> <span m='283970'>exactly</span> <span
  m='284390'>going</span> <span m='284500'>to</span> <span m='284550'>be</span>
  <span m='284710'>the</span> <span m='284800'>midpoint</span> <span
  m='285330'>between</span> <span m='286110'>one</span> <span
  m='286390'>and</span> <span m='286490'>six,</span> <span m='288090'>or</span>
  <span m='288220'>3</span> <span m='288500'>and</span> <span
  m='288780'>1/2.</span> <span m='289340'>Now,</span> <span
  m='289490'>suppose</span> <span m='289860'>I</span> <span
  m='289920'>look</span> <span m='290220'>at</span> <span m='290360'>a</span>
  <span m='290460'>loaded</span> <span m='291020'>die,</span> <span
  m='291890'>die</span> <span m='292150'>two,</span> <span
  m='294170'>which</span> <span m='294500'>only</span> <span
  m='294840'>throws</span> <span m='295190'>a</span> <span m='295260'>one</span>
  <span m='295490'>or</span> <span m='295630'>a</span> <span
  m='295690'>six,</span> <span m='296140'>but</span> <span
  m='296330'>with</span> <span m='296510'>equal</span> <span
  m='296760'>probability.</span> <span m='298820'>Then,</span> <span
  m='299600'>it's</span> <span m='299810'>expectation</span> <span
  m='300440'>is</span> <span m='300820'>also</span> <span m='301120'>3</span>
  <span m='301340'>and</span> <span m='301570'>1/2,</span> <span
  m='301960'>by</span> <span m='302060'>the</span> <span m='302180'>same</span>
  <span m='302430'>reasoning.</span> </p><p><span m='303220'>So</span> <span
  m='303440'>here</span> <span m='303700'>are</span> <span
  m='303830'>these</span> <span m='304050'>two</span> <span
  m='304520'>different</span> <span m='304930'>die.</span> <span
  m='305570'>One</span> <span m='305930'>takes</span> <span
  m='306180'>the</span> <span m='306250'>values</span> <span
  m='306580'>one</span> <span m='306790'>through</span> <span
  m='306960'>six</span> <span m='307710'>equally</span> <span
  m='308100'>likely,</span> <span m='308590'>and the</span> <span
  m='308740'>other</span> <span m='308940'>takes</span> <span
  m='309200'>only</span> <span m='309420'>the</span> <span m='309540'>two</span>
  <span m='309700'>values</span> <span m='310070'>one</span> <span
  m='310290'>and</span> <span m='310390'>six,</span> <span m='310910'>but</span>
  <span m='311150'>they</span> <span m='311270'>have</span> <span
  m='311530'>the</span> <span m='311620'>same</span> <span
  m='311990'>expectation.</span> <span m='314570'>So</span> <span
  m='314850'>how</span> <span m='315020'>do</span> <span m='315160'>I</span>
  <span m='315530'>capture</span> <span m='316000'>the</span> <span
  m='316130'>difference?</span> <span m='316880'>Well,</span> <span
  m='317500'>if</span> <span m='317740'>I</span> <span m='317810'>look</span>
  <span m='318140'>at</span> <span m='318600'>the</span> <span
  m='318930'>expected</span> <span m='319790'>distance</span> <span
  m='320330'>of</span> <span m='320460'>the</span> <span m='320560'>fair</span>
  <span m='320860'>die</span> <span m='321170'>to</span> <span
  m='321390'>its</span> <span m='321550'>mean,</span> <span m='323130'>I</span>
  <span m='323210'>claim it's</span> <span m='323590'>one and</span> <span
  m='324020'>a half.</span> <span m='325320'>But</span> <span
  m='325630'>the</span> <span m='325750'>expected</span> <span
  m='326320'>distance</span> <span m='326790'>of the</span> <span
  m='326870'>loaded</span> <span m='327750'>die</span> <span
  m='328220'>from</span> <span m='328490'>its</span> <span
  m='328650'>mean--</span> <span m='329150'>same</span> <span
  m='329490'>mean</span> <span m='329770'>remember,</span> <span
  m='330020'>3</span> <span m='330260'>and</span> <span m='330500'>1/2--</span>
  <span m='331010'>is</span> <span m='331230'>actually</span> <span
  m='331710'>2</span> <span m='331910'>and</span> <span m='332110'>1/2.</span>
  <span m='332320'>In</span> <span m='332410'>fact,</span> <span
  m='332720'>the</span> <span m='332810'>second</span> <span
  m='333170'>die</span> <span m='333350'>is</span> <span
  m='333460'>always</span> <span m='333770'>exactly</span> <span
  m='334310'>2</span> <span m='334520'>and</span> <span m='334740'>1/2</span>
  <span m='335230'>from</span> <span m='335710'>its</span> <span
  m='336500'>expected</span> <span m='337090'>value.</span> </p><p><span
  m='338870'>Let's</span> <span m='338990'>look</span> <span
  m='339160'>at</span> <span m='339310'>the</span> <span m='339590'>PDFs</span>
  <span m='340100'>to</span> <span m='340460'>get</span> <span
  m='340620'>a</span> <span m='340660'>grip</span> <span m='340970'>on</span>
  <span m='341090'>understanding</span> <span m='341550'>what's</span> <span
  m='341760'>going</span> <span m='342000'>on.</span> <span m='342230'>So</span>
  <span m='342500'>here's</span> <span m='342810'>the</span> <span
  m='342930'>PDF</span> <span m='343640'>for</span> <span m='343820'>the</span>
  <span m='343950'>fair</span> <span m='344560'>die.</span> <span
  m='347970'>Over</span> <span m='348280'>one</span> <span
  m='348610'>through</span> <span m='348850'>six</span> <span
  m='349380'>the</span> <span m='349490'>probability</span> <span
  m='350090'>is</span> <span m='350200'>1/6,</span> <span m='350730'>so</span>
  <span m='350850'>each</span> <span m='350980'>of</span> <span
  m='351040'>those</span> <span m='351250'>green</span> <span
  m='353630'>spikes,</span> <span m='354770'>columns,</span> <span
  m='355210'>is</span> <span m='355320'>1/6</span> <span m='356810'>high.</span>
  <span m='357740'>And</span> <span m='358140'>their</span> <span
  m='358330'>total</span> <span m='359820'>is</span> <span m='359930'>the</span>
  <span m='360030'>probability</span> <span m='360750'>that</span> <span
  m='361030'>the</span> <span m='361190'>fair</span> <span m='361450'>die</span>
  <span m='361680'>takes</span> <span m='361970'>one</span> <span
  m='362130'>of</span> <span m='362180'>those</span> <span
  m='362400'>values</span> <span m='362820'>one</span> <span
  m='363100'>through</span> <span m='363310'>six</span> <span
  m='365150'>with</span> <span m='365340'>equal</span> <span
  m='365630'>likelihood.</span> </p><p><span m='367670'>Now,</span> <span
  m='368250'>the</span> <span m='368390'>expected</span> <span
  m='369000'>value</span> <span m='369780'>is</span> <span
  m='370160'>exactly</span> <span m='370680'>in</span> <span
  m='370790'>the</span> <span m='370860'>middle</span> <span
  m='371210'>at</span> <span m='371520'>3</span> <span m='371820'>and</span>
  <span m='372120'>1/2.</span> <span m='372880'>And</span> <span
  m='373320'>the</span> <span m='373730'>average</span> <span
  m='374440'>distance</span> <span m='375500'>of</span> <span
  m='375720'>these</span> <span m='375990'>points--</span> <span
  m='376850'>well,</span> <span m='377030'>you</span> <span
  m='377170'>can</span> <span m='377320'>see</span> <span m='377560'>that</span>
  <span m='377750'>a</span> <span m='377830'>third</span> <span
  m='378150'>of</span> <span m='378240'>the</span> <span m='378360'>time,</span>
  <span m='378670'>you're at</span> <span m='378850'>distance</span> <span
  m='379300'>1/2,</span> <span m='380230'>a</span> <span m='380240'>third</span>
  <span m='380630'>of</span> <span m='380740'>the</span> <span
  m='380870'>time,</span> <span m='381180'>that</span> <span
  m='381300'>is</span> <span m='381450'>when</span> <span m='381590'>you</span>
  <span m='381700'>take</span> <span m='381940'>the</span> <span
  m='382010'>values</span> <span m='382430'>2</span> <span m='382620'>and</span>
  <span m='382760'>5,</span> <span m='383090'>you</span> <span
  m='383290'>are</span> <span m='384100'>a</span> <span
  m='384200'>distance</span> <span m='384910'>exactly</span> <span m='385330'>1
  and</span> <span m='385670'>1/2.</span> <span m='386010'>And</span> <span
  m='386150'>another</span> <span m='386430'>third</span> <span
  m='386730'>of</span> <span m='386800'>the</span> <span m='386910'>time,</span>
  <span m='387590'>you're</span> <span m='387850'>at</span> <span
  m='387890'>distance</span> <span m='389060'>2</span> <span
  m='389260'>and</span> <span m='389470'>1/2</span> <span m='389680'>when</span>
  <span m='389780'>you</span> <span m='389890'>take</span> <span
  m='390100'>one</span> <span m='390520'>and</span> <span m='391280'>six.</span>
  <span m='391840'>And</span> <span m='392040'>that</span> <span
  m='392280'>averages</span> <span m='392790'>out</span> <span
  m='393000'>to</span> <span m='393080'>the</span> <span
  m='393180'>middle</span> <span m='393790'>value</span> <span
  m='394180'>of</span> <span m='394290'>1 and</span> <span
  m='394700'>1/2.</span> </p><p><span m='395870'>So</span> <span
  m='396110'>the</span> <span m='396270'>expected</span> <span
  m='397150'>deviation,</span> <span m='397830'>the</span> <span
  m='397950'>expected</span> <span m='398440'>distance,</span> <span
  m='398950'>of</span> <span m='399130'>the</span> <span m='399220'>fair</span>
  <span m='399480'>die</span> <span m='399700'>from</span> <span
  m='399920'>its</span> <span m='400040'>mean</span> <span m='400270'>is</span>
  <span m='400410'>1 and</span> <span m='400830'>1/2.</span> <span
  m='401720'>On</span> <span m='401810'>the</span> <span m='401920'>other</span>
  <span m='402030'>hand,</span> <span m='402300'>for</span> <span
  m='402400'>the</span> <span m='402500'>loaded</span> <span
  m='402730'>die,</span> <span m='403020'>as</span> <span m='403190'>we</span>
  <span m='403320'>said,</span> <span m='403620'>it's</span> <span
  m='403870'>always</span> <span m='404330'>exactly</span> <span
  m='404920'>2</span> <span m='405160'>and</span> <span m='405400'>1/2</span>
  <span m='405990'>from</span> <span m='406460'>its</span> <span
  m='406870'>expected</span> <span m='407380'>value,</span> <span
  m='407900'>which</span> <span m='408010'>means</span> <span
  m='408250'>its</span> <span m='408410'>expected</span> <span
  m='409160'>value</span> <span m='409550'>is</span> <span
  m='409670'>also</span> <span m='409980'>2</span> <span m='410240'>and</span>
  <span m='410500'>1/2.</span> <span m='411990'>So</span> <span
  m='412190'>we</span> <span m='412310'>can</span> <span m='412470'>start</span>
  <span m='412920'>to</span> <span m='413020'>see</span> <span
  m='413920'>the</span> <span m='414340'>difference</span> <span
  m='414960'>between</span> <span m='415390'>these</span> <span
  m='415670'>two</span> <span m='416660'>distributions</span> <span
  m='417450'>and</span> <span m='417570'>these</span> <span
  m='417820'>two</span> <span m='418150'>kinds</span> <span m='418500'>of</span>
  <span m='418760'>die.</span> <span m='420290'>Even</span> <span
  m='420560'>though</span> <span m='420670'>they</span> <span
  m='420780'>have</span> <span m='420940'>the</span> <span
  m='421010'>same</span> <span m='421280'>expectation,</span> <span
  m='422090'>one</span> <span m='422380'>of</span> <span m='422450'>them</span>
  <span m='422730'>is</span> <span m='423510'>more</span> <span
  m='423780'>likely</span> <span m='424450'>and</span> <span
  m='424550'>has</span> <span m='425250'>a</span> <span
  m='426370'>greater</span> <span m='426710'>expected</span> <span
  m='427300'>distance</span> <span m='427820'>from</span> <span
  m='428380'>its</span> <span m='428630'>mean.</span> </p><p><span
  m='429300'>And</span> <span m='429500'>the</span> <span
  m='429570'>moral</span> <span m='429990'>of</span> <span
  m='430100'>this</span> <span m='430180'>short</span> <span
  m='430520'>piece</span> <span m='430775'>is</span> <span
  m='431030'>that</span> <span m='431210'>the</span> <span
  m='431280'>mean</span> <span m='431530'>alone</span> <span
  m='431930'>is</span> <span m='432050'>not</span> <span m='432270'>a</span>
  <span m='432320'>good</span> <span m='432530'>predictor</span> <span
  m='433140'>of a</span> <span m='433290'>random</span> <span
  m='433670'>variable's</span> <span m='434170'>behavior,</span> <span
  m='435100'>as</span> <span m='435230'>you</span> <span m='435330'>might</span>
  <span m='435560'>suppose.</span> <span m='435940'>One</span> <span
  m='436600'>parameter,</span> <span m='437300'>one</span> <span
  m='437550'>number</span> <span m='437900'>is</span> <span
  m='438040'>not</span> <span m='438230'>going</span> <span m='438350'>to</span>
  <span m='438430'>capture</span> <span m='439000'>the</span> <span
  m='439040'>shape</span> <span m='439860'>of</span> <span m='440030'>a</span>
  <span m='440090'>PDF,</span> <span m='441250'>which</span> <span
  m='441610'>gives</span> <span m='441760'>you</span> <span
  m='442320'>more</span> <span m='442500'>full</span> <span
  m='442860'>information</span> <span m='443460'>about</span> <span
  m='443730'>the</span> <span m='443940'>distribution</span> <span
  m='444550'>of</span> <span m='444640'>values</span> <span m='445260'>of</span>
  <span m='445380'>a</span> <span m='445470'>random</span> <span
  m='445780'>variable.</span> <span m='446900'>And</span> <span
  m='447070'>we</span> <span m='447170'>need</span> <span m='447470'>some</span>
  <span m='447690'>more</span> <span m='447950'>information</span> <span
  m='448590'>than</span> <span m='448740'>just</span> <span
  m='449070'>the</span> <span m='449200'>expectation.</span> <span
  m='451600'>An</span> <span m='452080'>especially,</span> <span
  m='453390'>valuable</span> <span m='454010'>extra</span> <span
  m='454350'>piece</span> <span m='454600'>of</span> <span
  m='454720'>information</span> <span m='455750'>that's</span> <span
  m='456030'>still</span> <span m='456410'>well</span> <span
  m='456680'>less</span> <span m='456970'>than</span> <span
  m='457090'>the</span> <span m='457230'>overall</span> <span
  m='458090'>shape</span> <span m='458440'>of</span> <span m='458550'>the</span>
  <span m='458650'>PDF</span> <span m='459170'>of</span> <span
  m='459300'>the</span> <span m='459410'>random</span> <span
  m='459710'>variable,</span> <span m='460460'>is</span> <span
  m='460700'>knowing</span> <span m='461230'>its</span> <span
  m='461480'>probable</span> <span m='462010'>deviation</span> <span
  m='462720'>from</span> <span m='463010'>its</span> <span
  m='463170'>mean.</span> </p>
embedded_media:
  - uid: 39b2b54034196e48bfb03117d6c356fc
    parent_uid: 2d92edb39e3916de6359fda2b399d641
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 03673e67e40f1f2b244ba908f75059bc
    parent_uid: 2d92edb39e3916de6359fda2b399d641
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: 57aa08a2a4effcf29cb94f46c4291011
    parent_uid: 2d92edb39e3916de6359fda2b399d641
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: ALn1McUXg-c
  - uid: f20f1f7ad599120a9dd2919e622dd171
    parent_uid: 2d92edb39e3916de6359fda2b399d641
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/ALn1McUXg-c/default.jpg'
  - uid: 58151d18a7c59fec8b6fd6d786cbb09e
    parent_uid: 2d92edb39e3916de6359fda2b399d641
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: ALn1McUXg-c
  - uid: a2219c380ac6ae994abaf139108af95d
    parent_uid: 2d92edb39e3916de6359fda2b399d641
    id: ALn1McUXg-c.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/deviation-from-the-mean/ALn1McUXg-c.srt
  - uid: ca31bf10f593a1bc88c2f2d23c1a2ec2
    parent_uid: 2d92edb39e3916de6359fda2b399d641
    id: ALn1McUXg-c.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp13-2/deviation-from-the-mean/ALn1McUXg-c.pdf
  - uid: 165bfca4cce6bcd9acbc252e98dd1029
    parent_uid: 2d92edb39e3916de6359fda2b399d641
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 08d2f6e19b56372fdf92249c0e5158a5
    parent_uid: 2d92edb39e3916de6359fda2b399d641
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 1a03e7f5bab535f3c80ba32b76165a67
    parent_uid: 2d92edb39e3916de6359fda2b399d641
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_deviation_intro_ipod.mp4
type: courses
layout: video
---
