---
title: 'Video 3: Vectors and Data Frames'
uid: 5c2a43b01c80bbe2f87039d8c132f17e
parent_uid: db37fee9220d4ca01ae046baacb7fc38
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/an-introduction-to-analytics/working-with-data-an-introduction-to-r/video-3-vectors-and-data-frames/video-3-vectors-and-data-frames-0
short_url: video-3-vectors-and-data-frames-0
inline_embed_id: 27969926video3vectorsanddataframes73758532
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4500'>So</span> <span m='4861'>far,</span> <span
  m='5222'>all</span> <span m='5583'>of</span> <span m='5944'>our</span> <span
  m='6305'>output</span> <span m='6666'>values</span> <span m='7027'>and</span>
  <span m='7388'>variables</span> <span m='7750'>have</span> <span
  m='8310'>been</span> <span m='8870'>single</span> <span
  m='9430'>numbers.</span> </p><p><span m='9990'>You</span> <span
  m='10370'>can</span> <span m='10750'>also</span> <span m='11130'>create</span>
  <span m='11510'>more</span> <span m='11890'>advanced</span> <span
  m='12270'>data</span> <span m='12650'>structures</span> <span
  m='13030'>in</span> <span m='13410'>R</span> <span m='13790'>like</span> <span
  m='14404'>vectors</span> <span m='15018'>and</span> <span
  m='15632'>data</span> <span m='16246'>frames.</span> </p><p><span
  m='16860'>A</span> <span m='17296'>vector</span> <span m='17733'>is</span>
  <span m='18170'>a</span> <span m='18606'>series</span> <span
  m='19043'>of</span> <span m='19480'>numbers</span> <span m='19916'>or</span>
  <span m='20353'>characters</span> <span m='20790'>stored</span> <span
  m='21310'>as</span> <span m='21830'>the</span> <span m='22350'>same</span>
  <span m='22870'>object.</span> </p><p><span m='23390'>You</span> <span
  m='23735'>can</span> <span m='24081'>create</span> <span m='24427'>a</span>
  <span m='24773'>vector</span> <span m='25119'>in</span> <span
  m='25465'>R</span> <span m='25810'>using</span> <span m='26156'>the</span>
  <span m='26502'>c</span> <span m='26848'>function,</span> <span
  m='27194'>which</span> <span m='27540'>stands</span> <span
  m='28356'>for</span> <span m='29173'>combine.</span> </p><p><span
  m='29990'>In</span> <span m='31778'>your</span> <span m='33567'>R</span> <span
  m='35356'>console,</span> <span m='37145'>type</span> <span
  m='38934'>c(2,3,5,8,13)</span> <span m='40723'>and</span> <span
  m='42512'>hit</span> <span m='44301'>Enter.</span> </p><p><span
  m='46090'>This</span> <span m='46520'>creates</span> <span m='46950'>a</span>
  <span m='47380'>vector</span> <span m='47810'>of</span> <span
  m='48240'>five</span> <span m='48670'>numbers</span> <span
  m='49100'>all</span> <span m='49530'>stored</span> <span m='49960'>as</span>
  <span m='50622'>the</span> <span m='51285'>same</span> <span
  m='51947'>object.</span> </p><p><span m='52610'>To</span> <span
  m='52957'>learn</span> <span m='53304'>more</span> <span
  m='53651'>about</span> <span m='53998'>vectors</span> <span
  m='54345'>in</span> <span m='54692'>R,</span> <span m='55040'>let's</span>
  <span m='55436'>enter</span> <span m='55832'>some</span> <span
  m='56228'>data</span> <span m='56624'>into</span> <span m='57020'>R</span>
  <span m='57416'>about</span> <span m='57812'>the</span> <span
  m='58208'>life</span> <span m='58604'>expectancies</span> <span
  m='59000'>in</span> <span m='59670'>different</span> <span
  m='60340'>countries.</span> </p><p><span m='61010'>We'll</span> <span
  m='61388'>first</span> <span m='61767'>create</span> <span m='62146'>a</span>
  <span m='62525'>vector</span> <span m='62904'>of</span> <span
  m='63283'>country</span> <span m='63662'>names</span> <span
  m='64041'>called</span> <span m='64420'>Country</span> <span
  m='65084'>using</span> <span m='65748'>the</span> <span m='66412'>c</span>
  <span m='67076'>function.</span> </p><p><span m='67740'>We'll</span> <span
  m='68165'>put</span> <span m='68591'>each</span> <span
  m='69017'>country</span> <span m='69442'>name</span> <span m='69868'>in</span>
  <span m='70294'>quotes</span> <span m='70720'>since</span> <span
  m='71285'>we</span> <span m='71851'>are</span> <span m='72417'>typing</span>
  <span m='72982'>characters</span> <span m='73548'>not</span> <span
  m='74114'>numbers.</span> </p><p><span m='74680'>So</span> <span
  m='75435'>in</span> <span m='76191'>your</span> <span m='76947'>R</span> <span
  m='77702'>console,</span> <span m='78458'>type</span> <span
  m='79214'>Country</span> <span m='79970'>equals</span> <span
  m='80666'>and</span> <span m='81363'>then</span> <span m='82060'>c</span>
  <span m='82756'>for</span> <span m='83453'>the</span> <span
  m='84150'>combine</span> <span m='84846'>function,</span> <span
  m='85543'>parentheses</span> <span m='86240'>and</span> <span
  m='89346'>then</span> <span m='92453'>"Brazil",</span> <span
  m='95560'>"China",</span> <span m='98666'>"India",</span> <span
  m='101773'>"Switzerland",</span> <span m='104880'>and</span> <span
  m='105773'>then</span> <span m='106666'>"USA".</span> </p><p><span
  m='107560'>Close</span> <span m='108134'>the</span> <span
  m='108709'>parentheses</span> <span m='109284'>and</span> <span
  m='109859'>hit</span> <span m='110434'>Enter.</span> </p><p><span
  m='111009'>Now,</span> <span m='111489'>let's</span> <span
  m='111969'>create</span> <span m='112449'>a</span> <span
  m='112929'>second</span> <span m='113409'>vector.</span> </p><p><span
  m='113890'>This</span> <span m='114223'>time</span> <span
  m='114556'>with</span> <span m='114890'>the</span> <span
  m='115223'>life</span> <span m='115556'>expectancies</span> <span
  m='115890'>of</span> <span m='116327'>these</span> <span
  m='116765'>five</span> <span m='117202'>countries</span> <span
  m='117640'>in</span> <span m='118077'>the</span> <span m='118515'>same</span>
  <span m='118952'>order</span> <span m='119390'>that</span> <span
  m='119791'>we</span> <span m='120193'>entered</span> <span
  m='120595'>the</span> <span m='120996'>country</span> <span
  m='121398'>names.</span> </p><p><span m='121800'>We'll</span> <span
  m='122935'>call</span> <span m='124070'>this</span> <span
  m='125205'>one</span> <span m='126340'>LifeExpectancy</span> <span
  m='127475'>=</span> <span m='128610'>c(74,76,65,83,79)</span> <span
  m='132967'>and</span> <span m='137325'>hit</span> <span
  m='141682'>Enter.</span> </p><p><span m='146040'>Now</span> <span
  m='146687'>if</span> <span m='147334'>you</span> <span m='147981'>take</span>
  <span m='148629'>a</span> <span m='149276'>look</span> <span
  m='149923'>at</span> <span m='150570'>both</span> <span
  m='151218'>Country</span> <span m='151865'>and</span> <span
  m='152512'>LifeExpectancy,</span> <span m='153160'>you</span> <span
  m='153582'>can</span> <span m='154004'>see</span> <span m='154426'>that</span>
  <span m='154848'>Country</span> <span m='155271'>has</span> <span
  m='155693'>five</span> <span m='156115'>character</span> <span
  m='156537'>values</span> <span m='156960'>and</span> <span
  m='157795'>LifeExpectancy</span> <span m='158630'>has</span> <span
  m='159465'>five</span> <span m='160300'>numerical</span> <span
  m='161135'>values.</span> </p><p><span m='161970'>A</span> <span
  m='162311'>word</span> <span m='162653'>of</span> <span
  m='162995'>warning--</span> <span m='163336'>you</span> <span
  m='163678'>shouldn't</span> <span m='164020'>try</span> <span
  m='164460'>to</span> <span m='164900'>combine</span> <span
  m='165340'>characters</span> <span m='165780'>and</span> <span
  m='166220'>numbers</span> <span m='166660'>in</span> <span
  m='167100'>the</span> <span m='167540'>same</span> <span
  m='167980'>vector.</span> </p><p><span m='168420'>R</span> <span
  m='168824'>only</span> <span m='169228'>allows</span> <span
  m='169633'>one</span> <span m='170037'>data</span> <span
  m='170442'>type</span> <span m='170846'>in</span> <span m='171251'>each</span>
  <span m='171655'>vector</span> <span m='172060'>so</span> <span
  m='172421'>all</span> <span m='172782'>of</span> <span m='173143'>the</span>
  <span m='173504'>numbers</span> <span m='173865'>will</span> <span
  m='174226'>be</span> <span m='174587'>converted</span> <span
  m='174948'>to</span> <span m='175309'>characters.</span> </p><p><span
  m='175670'>This</span> <span m='175934'>is</span> <span m='176198'>bad</span>
  <span m='176462'>because</span> <span m='176727'>it</span> <span
  m='176991'>won't</span> <span m='177255'>allow</span> <span
  m='177520'>us</span> <span m='177920'>to</span> <span m='178320'>do</span>
  <span m='178720'>any</span> <span m='179120'>numerical</span> <span
  m='179520'>calculations</span> <span m='179920'>with</span> <span
  m='180320'>the</span> <span m='180720'>numbers,</span> <span
  m='181120'>like</span> <span m='181785'>compute</span> <span
  m='182450'>the</span> <span m='183115'>mean.</span> </p><p><span
  m='183780'>If</span> <span m='184077'>you</span> <span m='184374'>want</span>
  <span m='184671'>to</span> <span m='184968'>display</span> <span
  m='185265'>an</span> <span m='185562'>element</span> <span
  m='185859'>of</span> <span m='186156'>a</span> <span m='186453'>vector,</span>
  <span m='186750'>use</span> <span m='187293'>square</span> <span
  m='187836'>brackets.</span> </p><p><span m='188380'>For</span> <span
  m='189058'>example,</span> <span m='189736'>we</span> <span
  m='190414'>could</span> <span m='191092'>type</span> <span
  m='191770'>CountryCountry[1]</span> <span m='192448'>to</span> <span
  m='193126'>get</span> <span m='193804'>the</span> <span
  m='194482'>first</span> <span m='195160'>element</span> <span
  m='195713'>of</span> <span m='196266'>the</span> <span
  m='196820'>Country</span> <span m='197373'>vector,</span> <span
  m='197926'>Brazil.</span> </p><p><span m='198480'>Or</span> <span
  m='199434'>we</span> <span m='200388'>could</span> <span
  m='201342'>type</span> <span m='202297'>LifeExpectancyLifeExpectancy[3]</span>
  <span m='203251'>to</span> <span m='204205'>get</span> <span
  m='205160'>the</span> <span m='205830'>third</span> <span
  m='206500'>element</span> <span m='207170'>of</span> <span
  m='207840'>LifeExpectancy,</span> <span m='208510'>65,</span> <span
  m='209180'>corresponding</span> <span m='210386'>to</span> <span
  m='211593'>India.</span> </p><p><span m='212800'>Another</span> <span
  m='213212'>nice</span> <span m='213625'>function</span> <span
  m='214037'>to</span> <span m='214450'>create</span> <span
  m='214862'>vectors</span> <span m='215275'>in</span> <span m='215687'>R</span>
  <span m='216100'>is</span> <span m='216601'>the</span> <span
  m='217102'>seq</span> <span m='217603'>function</span> <span
  m='218104'>which</span> <span m='218605'>creates</span> <span
  m='219106'>a</span> <span m='219607'>sequence</span> <span
  m='220108'>of</span> <span m='220609'>numbers.</span> </p><p><span
  m='221110'>Try</span> <span m='224170'>typing</span> <span
  m='227230'>seq(0,100,2).</span> </p><p><span m='230290'>Close</span> <span
  m='230828'>the</span> <span m='231366'>parentheses</span> <span
  m='231905'>and</span> <span m='232443'>hit</span> <span
  m='232981'>Enter.</span> </p><p><span m='233520'>This</span> <span
  m='233966'>gives</span> <span m='234412'>a</span> <span
  m='234858'>sequence</span> <span m='235304'>of</span> <span
  m='235750'>numbers</span> <span m='236196'>from</span> <span
  m='236642'>0</span> <span m='237088'>to</span> <span m='237534'>100,</span>
  <span m='237980'>starting</span> <span m='238433'>at</span> <span
  m='238886'>zero,</span> <span m='239339'>the</span> <span
  m='239792'>first</span> <span m='240245'>argument</span> <span
  m='240698'>to</span> <span m='241151'>the</span> <span m='241604'>seq</span>
  <span m='242057'>function,</span> <span m='242510'>ending</span> <span
  m='242993'>at</span> <span m='243476'>100,</span> <span m='243959'>the</span>
  <span m='244442'>second</span> <span m='244925'>argument</span> <span
  m='245408'>to</span> <span m='245891'>the</span> <span m='246374'>seq</span>
  <span m='246857'>function,</span> <span m='247340'>and</span> <span
  m='247682'>the</span> <span m='248025'>numbers</span> <span
  m='248367'>are</span> <span m='248710'>in</span> <span
  m='249052'>increments</span> <span m='249395'>of</span> <span
  m='249737'>two,</span> <span m='250080'>the</span> <span
  m='250545'>third</span> <span m='251011'>argument</span> <span
  m='251477'>to</span> <span m='251942'>the</span> <span m='252408'>seq</span>
  <span m='252874'>function.</span> </p><p><span m='253340'>This</span> <span
  m='253607'>can</span> <span m='253875'>be</span> <span
  m='254143'>useful</span> <span m='254411'>if</span> <span
  m='254678'>you</span> <span m='254946'>want</span> <span m='255214'>to</span>
  <span m='255482'>create</span> <span m='255750'>a</span> <span
  m='256640'>unique</span> <span m='257530'>identifier</span> <span
  m='258420'>for</span> <span m='259310'>observations.</span> </p><p><span
  m='260200'>Now,</span> <span m='260592'>let's</span> <span
  m='260985'>combine</span> <span m='261378'>our</span> <span
  m='261771'>vectors</span> <span m='262164'>into</span> <span
  m='262557'>what</span> <span m='262950'>we</span> <span m='263303'>call</span>
  <span m='263657'>a</span> <span m='264011'>data</span> <span
  m='264365'>frame</span> <span m='264719'>in</span> <span m='265073'>R.</span>
  <span m='265426'>This</span> <span m='265780'>will</span> <span
  m='266134'>be</span> <span m='266488'>an</span> <span
  m='266842'>important</span> <span m='267196'>data</span> <span
  m='267550'>structure</span> <span m='267848'>for</span> <span
  m='268147'>us</span> <span m='268446'>because</span> <span
  m='268745'>all</span> <span m='269043'>of</span> <span m='269342'>the</span>
  <span m='269641'>data</span> <span m='269940'>files</span> <span
  m='270274'>we'll</span> <span m='270608'>work</span> <span
  m='270942'>with</span> <span m='271277'>in</span> <span m='271611'>this</span>
  <span m='271945'>course</span> <span m='272280'>will</span> <span
  m='272701'>be</span> <span m='273123'>loaded</span> <span m='273545'>as</span>
  <span m='273966'>data</span> <span m='274388'>frames.</span> </p><p><span
  m='274810'>Additionally,</span> <span m='275279'>many</span> <span
  m='275748'>algorithms</span> <span m='276217'>in</span> <span
  m='276686'>R</span> <span m='277155'>require</span> <span
  m='277624'>all</span> <span m='278093'>of</span> <span m='278562'>the</span>
  <span m='279031'>data</span> <span m='279500'>to</span> <span
  m='279904'>be</span> <span m='280308'>in</span> <span m='280712'>a</span>
  <span m='281116'>single</span> <span m='281520'>object</span> <span
  m='281924'>like</span> <span m='282328'>a</span> <span m='282732'>data</span>
  <span m='283136'>frame.</span> </p><p><span m='283540'>We'll</span> <span
  m='284330'>call</span> <span m='285120'>our</span> <span
  m='285910'>data</span> <span m='286700'>frame</span> <span
  m='287490'>CountryData</span> <span m='288280'>and</span> <span
  m='288996'>then</span> <span m='289713'>use</span> <span m='290430'>the</span>
  <span m='291146'>data.frame</span> <span m='291863'>function</span> <span
  m='292580'>to</span> <span m='293445'>combine</span> <span
  m='294311'>Country</span> <span m='295177'>and</span> <span
  m='296043'>LifeExpectancy.</span> </p><p><span m='296909'>So</span> <span
  m='297709'>after</span> <span m='298509'>typing</span> <span
  m='299309'>CountryData</span> <span m='300109'>=</span> <span
  m='300909'>data.frame,</span> <span m='301710'>in</span> <span
  m='302511'>parentheses</span> <span m='303313'>type</span> <span
  m='304115'>Country</span> <span m='304916'>comma</span> <span
  m='305718'>LifeExpectancy.</span> </p><p><span m='309800'>Then</span> <span
  m='310222'>close</span> <span m='310645'>the</span> <span
  m='311068'>parentheses</span> <span m='311491'>and</span> <span
  m='311914'>hit</span> <span m='312337'>Enter.</span> </p><p><span
  m='312760'>Let's</span> <span m='313202'>take</span> <span m='313644'>a</span>
  <span m='314086'>look</span> <span m='314528'>at</span> <span
  m='314971'>CountryData</span> <span m='315413'>by</span> <span
  m='315855'>typing</span> <span m='316297'>CountryData</span> <span
  m='316740'>and</span> <span m='317316'>hitting</span> <span
  m='317893'>Enter.</span> </p><p><span m='318470'>It</span> <span
  m='318953'>has</span> <span m='319436'>two</span> <span
  m='319920'>columns,</span> <span m='320403'>our</span> <span
  m='320886'>variables,</span> <span m='321370'>and</span> <span
  m='322022'>five</span> <span m='322674'>rows,</span> <span
  m='323326'>our</span> <span m='323978'>observations.</span> </p><p><span
  m='324630'>It's</span> <span m='324935'>similar</span> <span
  m='325240'>to</span> <span m='325545'>how</span> <span m='325850'>you</span>
  <span m='326155'>might</span> <span m='326460'>organize</span> <span
  m='326765'>data</span> <span m='327070'>in</span> <span m='327748'>a</span>
  <span m='328426'>spreadsheet</span> <span m='329105'>software</span> <span
  m='329783'>like</span> <span m='330461'>Excel.</span> </p><p><span
  m='331140'>Let's</span> <span m='331410'>say</span> <span m='331680'>we</span>
  <span m='331950'>now</span> <span m='332220'>want</span> <span
  m='332490'>to</span> <span m='332760'>add</span> <span
  m='333030'>another</span> <span m='333300'>variable</span> <span
  m='333570'>to</span> <span m='333840'>our</span> <span m='334110'>data</span>
  <span m='334380'>frame--</span> <span m='334971'>the</span> <span
  m='335562'>population</span> <span m='336153'>in</span> <span
  m='336745'>thousands</span> <span m='337336'>of</span> <span
  m='337927'>each</span> <span m='338518'>country.</span> </p><p><span
  m='339110'>We</span> <span m='339393'>can</span> <span m='339676'>do</span>
  <span m='339959'>this</span> <span m='340242'>by</span> <span
  m='340526'>using</span> <span m='340809'>a</span> <span
  m='341092'>dollar</span> <span m='341375'>sign</span> <span
  m='341659'>to</span> <span m='342015'>link</span> <span m='342372'>the</span>
  <span m='342729'>new</span> <span m='343086'>data</span> <span
  m='343442'>into</span> <span m='343799'>the</span> <span
  m='344156'>data</span> <span m='344513'>frame.</span> </p><p><span
  m='344870'>So</span> <span m='345323'>we'll</span> <span
  m='345777'>type</span> <span m='346231'>the</span> <span
  m='346685'>name</span> <span m='347139'>of</span> <span m='347593'>our</span>
  <span m='348047'>data</span> <span m='348501'>frame,</span> <span
  m='348955'>CountryData,</span> <span m='349409'>and</span> <span
  m='349725'>then</span> <span m='350042'>a</span> <span
  m='350359'>dollar</span> <span m='350676'>sign</span> <span
  m='350992'>followed</span> <span m='351309'>by</span> <span
  m='351626'>the</span> <span m='351943'>name</span> <span m='352260'>of</span>
  <span m='352630'>the</span> <span m='353000'>new</span> <span
  m='353370'>variable</span> <span m='353740'>we</span> <span
  m='354110'>want</span> <span m='354480'>to</span> <span m='354850'>add,</span>
  <span m='355220'>Population.</span> </p><p><span m='358390'>Then</span> <span
  m='358821'>we'll</span> <span m='359252'>set</span> <span
  m='359683'>this</span> <span m='360114'>equal</span> <span
  m='360545'>to</span> <span m='360976'>c,</span> <span m='361407'>and</span>
  <span m='361838'>in</span> <span m='362269'>parentheses</span> <span
  m='362700'>the</span> <span m='363201'>population</span> <span
  m='363702'>in</span> <span m='364204'>thousands</span> <span
  m='364705'>of</span> <span m='365207'>each</span> <span
  m='365708'>country.</span> </p><p><span m='366210'>So</span> <span
  m='369558'>199000,</span> <span m='372907'>1390000,</span> <span
  m='376255'>1240000,</span> <span m='379604'>7997,</span> <span
  m='382952'>and</span> <span m='386301'>318000.</span> </p><p><span
  m='389650'>Close</span> <span m='390148'>the</span> <span
  m='390646'>parentheses</span> <span m='391145'>and</span> <span
  m='391643'>hit</span> <span m='392141'>Enter.</span> </p><p><span
  m='392640'>Now</span> <span m='393086'>if</span> <span m='393532'>you</span>
  <span m='393978'>take</span> <span m='394425'>a</span> <span
  m='394871'>look</span> <span m='395317'>at</span> <span
  m='395763'>CountryData</span> <span m='396210'>you</span> <span
  m='396658'>should</span> <span m='397106'>see</span> <span
  m='397554'>that</span> <span m='398002'>we</span> <span m='398450'>have</span>
  <span m='398898'>a</span> <span m='399346'>third</span> <span
  m='399794'>column,</span> <span m='400242'>Population.</span> </p><p><span
  m='400690'>We'll</span> <span m='401052'>use</span> <span
  m='401415'>this</span> <span m='401777'>dollar</span> <span
  m='402140'>sign</span> <span m='402502'>notation</span> <span
  m='402865'>a</span> <span m='403227'>lot</span> <span m='403590'>and</span>
  <span m='403917'>we'll</span> <span m='404244'>talk</span> <span
  m='404571'>about</span> <span m='404898'>it</span> <span
  m='405225'>more</span> <span m='405552'>later</span> <span
  m='405879'>in</span> <span m='406206'>this</span> <span
  m='406533'>lecture.</span> </p><p><span m='406860'>Note</span> <span
  m='407133'>that</span> <span m='407406'>we</span> <span m='407680'>had</span>
  <span m='407953'>to</span> <span m='408226'>give</span> <span
  m='408500'>the</span> <span m='408773'>population</span> <span
  m='409046'>values</span> <span m='409320'>in</span> <span
  m='409762'>the</span> <span m='410205'>correct</span> <span
  m='410647'>order.</span> </p><p><span m='411090'>R</span> <span
  m='411539'>will</span> <span m='411988'>just</span> <span
  m='412437'>combine</span> <span m='412886'>the</span> <span
  m='413335'>vectors</span> <span m='413784'>in</span> <span
  m='414233'>the</span> <span m='414682'>order</span> <span
  m='415131'>they're</span> <span m='415580'>typed.</span> </p><p><span
  m='416030'>Now,</span> <span m='416460'>suppose</span> <span
  m='416890'>we</span> <span m='417320'>want</span> <span m='417750'>to</span>
  <span m='418180'>add</span> <span m='418610'>two</span> <span
  m='419040'>new</span> <span m='419470'>observations</span> <span
  m='419900'>for</span> <span m='420330'>Australia</span> <span
  m='420760'>and</span> <span m='421525'>Greece.</span> </p><p><span
  m='422290'>We</span> <span m='422783'>first</span> <span
  m='423277'>need</span> <span m='423771'>to</span> <span
  m='424265'>create</span> <span m='424758'>new</span> <span
  m='425252'>Country,</span> <span m='425746'>LifeExpectancy</span> <span
  m='426240'>and</span> <span m='426983'>Population</span> <span
  m='427726'>vectors.</span> </p><p><span m='428470'>So</span> <span
  m='428808'>we</span> <span m='429146'>will</span> <span m='429484'>now</span>
  <span m='429822'>set</span> <span m='430160'>Country</span> <span
  m='430498'>equal</span> <span m='430836'>to</span> <span m='431174'>the</span>
  <span m='431512'>names</span> <span m='431850'>of</span> <span
  m='433164'>the</span> <span m='434478'>new</span> <span
  m='435792'>countries,</span> <span m='437107'>Australia</span> <span
  m='438421'>and</span> <span m='439735'>Greece.</span> </p><p><span
  m='445790'>We'll</span> <span m='446454'>set</span> <span
  m='447118'>LifeExpectancy</span> <span m='447783'>equal</span> <span
  m='448447'>to</span> <span m='449112'>the</span> <span m='449776'>new</span>
  <span m='450441'>life</span> <span m='451105'>expectancies,</span> <span
  m='451770'>82</span> <span m='452894'>and</span> <span m='454018'>81,</span>
  <span m='455142'>and</span> <span m='456267'>we'll</span> <span
  m='457391'>call</span> <span m='458515'>Population</span> <span
  m='459640'>a</span> <span m='460230'>vector</span> <span m='460820'>of</span>
  <span m='461410'>the</span> <span m='462000'>populations</span> <span
  m='462590'>of</span> <span m='463180'>these</span> <span
  m='463770'>countries</span> <span m='464360'>23050</span> <span
  m='464950'>and</span> <span m='466895'>11125.</span> </p><p><span
  m='468840'>Then</span> <span m='469206'>we</span> <span m='469572'>can</span>
  <span m='469938'>create</span> <span m='470305'>a</span> <span
  m='470671'>new</span> <span m='471037'>data</span> <span
  m='471403'>frame.</span> </p><p><span m='471770'>We'll</span> <span
  m='472252'>call</span> <span m='472734'>this</span> <span
  m='473216'>one</span> <span m='473698'>NewCountryData</span> <span
  m='474181'>and</span> <span m='474663'>we'll</span> <span
  m='475145'>set</span> <span m='475627'>it</span> <span m='476110'>equal</span>
  <span m='476586'>to</span> <span m='477062'>data.frame(Country,</span> <span
  m='477538'>LifeExpectancy,</span> <span m='478014'>Population).</span>
  </p><p><span m='495170'>Note</span> <span m='495507'>that</span> <span
  m='495844'>we</span> <span m='496181'>combined</span> <span
  m='496518'>three</span> <span m='496855'>vectors</span> <span
  m='497192'>here</span> <span m='497530'>with</span> <span
  m='498172'>the</span> <span m='498815'>data.frame</span> <span
  m='499457'>function.</span> </p><p><span m='500100'>If</span> <span
  m='500910'>we</span> <span m='501720'>take</span> <span m='502530'>a</span>
  <span m='503340'>look</span> <span m='504150'>at</span> <span
  m='504960'>NewCountryData,</span> <span m='505770'>we</span> <span
  m='506275'>can</span> <span m='506781'>see</span> <span m='507286'>that</span>
  <span m='507792'>it's</span> <span m='508297'>very</span> <span
  m='508803'>similar</span> <span m='509308'>to</span> <span
  m='509814'>CountryData.</span> </p><p><span m='510320'>Lastly,</span> <span
  m='511028'>let's</span> <span m='511736'>combine</span> <span
  m='512445'>CountryData</span> <span m='513153'>and</span> <span
  m='513861'>NewCountryData</span> <span m='514570'>with</span> <span
  m='515100'>the</span> <span m='515630'>rbind</span> <span
  m='516160'>function</span> <span m='516690'>which</span> <span
  m='517220'>combines</span> <span m='517750'>data</span> <span
  m='518241'>frames</span> <span m='518733'>by</span> <span
  m='519225'>stacking</span> <span m='519716'>the</span> <span
  m='520208'>rows.</span> </p><p><span m='520700'>We'll</span> <span
  m='521540'>call</span> <span m='522380'>this</span> <span
  m='523220'>new</span> <span m='524060'>data</span> <span
  m='524900'>frame</span> <span m='525740'>AllCountryData</span> <span
  m='526580'>and</span> <span m='527097'>we'll</span> <span
  m='527615'>use</span> <span m='528132'>the</span> <span
  m='528650'>rbind</span> <span m='529167'>function</span> <span
  m='529685'>to</span> <span m='530202'>combine</span> <span
  m='530720'>CountryData,</span> <span m='531830'>and</span> <span
  m='532940'>NewCountryData.</span> </p><p><span m='540320'>If</span> <span
  m='541040'>we</span> <span m='541760'>take</span> <span m='542480'>a</span>
  <span m='543200'>look</span> <span m='543920'>at</span> <span
  m='544640'>AllCountryData</span> <span m='545360'>we</span> <span
  m='545742'>can</span> <span m='546125'>see</span> <span m='546508'>that</span>
  <span m='546890'>it</span> <span m='547273'>has</span> <span
  m='547656'>the</span> <span m='548039'>three</span> <span
  m='548421'>variables</span> <span m='548804'>from</span> <span
  m='549187'>before</span> <span m='549570'>and</span> <span
  m='550415'>all</span> <span m='551260'>seven</span> <span
  m='552105'>observations.</span> </p><p><span m='552950'>The</span> <span
  m='553274'>functions</span> <span m='553598'>we've</span> <span
  m='553922'>used</span> <span m='554247'>in</span> <span m='554571'>this</span>
  <span m='554895'>video</span> <span m='555220'>have</span> <span
  m='555565'>allowed</span> <span m='555911'>us</span> <span
  m='556257'>to</span> <span m='556602'>create</span> <span
  m='556948'>data</span> <span m='557294'>structures</span> <span
  m='557640'>and</span> <span m='558031'>modify</span> <span
  m='558423'>data</span> <span m='558815'>structures</span> <span
  m='559207'>in</span> <span m='559599'>R.</span> <span m='559990'>But</span>
  <span m='560382'>most</span> <span m='560774'>of</span> <span
  m='561166'>the</span> <span m='561558'>time</span> <span
  m='561950'>you'll</span> <span m='562252'>be</span> <span
  m='562554'>reading</span> <span m='562856'>in</span> <span
  m='563158'>data</span> <span m='563460'>from</span> <span m='563762'>an</span>
  <span m='564064'>external</span> <span m='564366'>file,</span> <span
  m='564668'>which</span> <span m='564970'>we'll</span> <span
  m='565400'>do</span> <span m='565830'>in</span> <span m='566260'>the</span>
  <span m='566690'>next</span> <span m='567120'>video.</span> </p>
embedded_media:
  - uid: 1125715b49af337b6faeb1aecedfdc89
    parent_uid: 5c2a43b01c80bbe2f87039d8c132f17e
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: MvERdFp8mvI
  - uid: 9577a409ddb343b840e348b1577d257e
    parent_uid: 5c2a43b01c80bbe2f87039d8c132f17e
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: MvERdFp8mvI
  - uid: 5fc1bcb94dc2ac8d9473a558f2fff423
    parent_uid: 5c2a43b01c80bbe2f87039d8c132f17e
    id: MvERdFp8mvI.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/an-introduction-to-analytics/working-with-data-an-introduction-to-r/video-3-vectors-and-data-frames/video-3-vectors-and-data-frames-0/MvERdFp8mvI.srt
  - uid: b2191eb86608231242cdc55ab9240cbd
    parent_uid: 5c2a43b01c80bbe2f87039d8c132f17e
    id: MvERdFp8mvI.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/an-introduction-to-analytics/working-with-data-an-introduction-to-r/video-3-vectors-and-data-frames/video-3-vectors-and-data-frames-0/MvERdFp8mvI.pdf
  - uid: c94d5807db7c39d7cc22a39d97d596cc
    parent_uid: 5c2a43b01c80bbe2f87039d8c132f17e
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 3e214906c8e119d55ccd30bb08670435
    parent_uid: 5c2a43b01c80bbe2f87039d8c132f17e
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 8d341427fb54455983a70e5faa3e53d2
    parent_uid: 5c2a43b01c80bbe2f87039d8c132f17e
    id: Thumbnail-YouTube-JPG_1
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/MvERdFp8mvI/default.jpg'
  - uid: 2ccf19b6a68cdc22855e62e30e6752ff
    parent_uid: 5c2a43b01c80bbe2f87039d8c132f17e
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_1.3.06_300k.mp4
type: courses
layout: video
---
