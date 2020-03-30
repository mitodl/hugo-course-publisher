---
title: 'Video 1: The Supreme Court'
uid: a191f0227c32a83498979461dc407176
parent_uid: 11f9b44dc2960689414b8c313764a18d
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-1-the-supreme-court-0
short_url: video-1-the-supreme-court-0
inline_embed_id: 66108291video1thesupremecourt1505165
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='9490'>In</span> <span m='9812'>this</span> <span
  m='10135'>lecture,</span> <span m='10458'>we'll</span> <span
  m='10781'>see</span> <span m='11104'>how</span> <span
  m='11427'>analytics</span> <span m='11750'>can</span> <span
  m='12048'>be</span> <span m='12346'>used</span> <span m='12645'>to</span>
  <span m='12943'>predict</span> <span m='13241'>the</span> <span
  m='13540'>outcomes</span> <span m='13838'>of</span> <span
  m='14136'>cases</span> <span m='14435'>in</span> <span m='14733'>the</span>
  <span m='15031'>United</span> <span m='15330'>States</span> <span
  m='16080'>Supreme</span> <span m='16830'>Court.</span> </p><p><span
  m='17580'>This</span> <span m='17888'>seems</span> <span m='18197'>like</span>
  <span m='18505'>a</span> <span m='18814'>very</span> <span
  m='19122'>unconventional</span> <span m='19431'>use</span> <span
  m='19740'>of</span> <span m='20172'>analytics,</span> <span
  m='20604'>but</span> <span m='21036'>in</span> <span m='21468'>2002</span>
  <span m='21900'>a</span> <span m='22332'>group</span> <span
  m='22764'>of</span> <span m='23196'>political</span> <span
  m='23628'>science</span> <span m='24060'>and</span> <span m='24438'>law</span>
  <span m='24816'>academics</span> <span m='25195'>decided</span> <span
  m='25573'>to</span> <span m='25951'>test</span> <span m='26330'>if</span>
  <span m='26708'>a</span> <span m='27086'>model</span> <span
  m='27465'>can</span> <span m='27843'>do</span> <span m='28221'>better</span>
  <span m='28600'>than</span> <span m='28884'>a</span> <span
  m='29168'>group</span> <span m='29452'>of</span> <span
  m='29737'>experts</span> <span m='30021'>at</span> <span
  m='30305'>predicting</span> <span m='30590'>the</span> <span
  m='31088'>decisions</span> <span m='31586'>of</span> <span
  m='32085'>the</span> <span m='32583'>Supreme</span> <span
  m='33081'>Court.</span> </p><p><span m='33580'>In</span> <span
  m='33956'>this</span> <span m='34332'>case,</span> <span m='34708'>a</span>
  <span m='35085'>very</span> <span m='35461'>interpretable</span> <span
  m='35837'>analytics</span> <span m='36213'>method</span> <span
  m='36590'>was</span> <span m='37411'>used,</span> <span
  m='38232'>called</span> <span m='39054'>classification</span> <span
  m='39875'>and</span> <span m='40697'>regression</span> <span
  m='41518'>trees.</span> </p><p><span m='42340'>The</span> <span
  m='42651'>legal</span> <span m='42962'>system</span> <span m='43274'>of</span>
  <span m='43585'>the</span> <span m='43897'>United</span> <span
  m='44208'>States</span> <span m='44520'>operates</span> <span
  m='44851'>at</span> <span m='45182'>the</span> <span m='45514'>state</span>
  <span m='45845'>level</span> <span m='46177'>and</span> <span
  m='46508'>at</span> <span m='46840'>the</span> <span m='47392'>federal</span>
  <span m='47944'>or</span> <span m='48496'>country-wide</span> <span
  m='49048'>level.</span> </p><p><span m='49600'>The</span> <span
  m='49917'>federal</span> <span m='50235'>level</span> <span
  m='50553'>is</span> <span m='50871'>necessary</span> <span m='51188'>to</span>
  <span m='51506'>deal</span> <span m='51824'>with</span> <span
  m='52142'>cases</span> <span m='52460'>beyond</span> <span
  m='52870'>the</span> <span m='53280'>scope</span> <span m='53690'>of</span>
  <span m='54100'>state</span> <span m='54510'>law,</span> <span
  m='54920'>like</span> <span m='55330'>disputes</span> <span
  m='55740'>between</span> <span m='56150'>states,</span> <span
  m='56560'>and</span> <span m='57186'>violations</span> <span
  m='57812'>of</span> <span m='58438'>federal</span> <span
  m='59064'>laws.</span> </p><p><span m='59690'>The</span> <span
  m='60091'>federal</span> <span m='60492'>court</span> <span
  m='60893'>is</span> <span m='61295'>divided</span> <span m='61696'>into</span>
  <span m='62097'>three</span> <span m='62498'>levels--</span> <span
  m='62900'>district</span> <span m='63611'>courts,</span> <span
  m='64322'>circuit</span> <span m='65033'>courts,</span> <span
  m='65745'>and</span> <span m='66456'>the</span> <span m='67167'>Supreme</span>
  <span m='67878'>Court.</span> </p><p><span m='68590'>Cases</span> <span
  m='68963'>start</span> <span m='69336'>at</span> <span m='69710'>the</span>
  <span m='70083'>district</span> <span m='70456'>courts,</span> <span
  m='70830'>where</span> <span m='71235'>an</span> <span
  m='71641'>initial</span> <span m='72046'>decision</span> <span
  m='72452'>is</span> <span m='72857'>made</span> <span m='73263'>about</span>
  <span m='73668'>the</span> <span m='74074'>case.</span> </p><p><span
  m='74480'>The</span> <span m='74794'>circuit</span> <span
  m='75108'>courts</span> <span m='75423'>hear</span> <span
  m='75737'>appeals</span> <span m='76052'>from</span> <span
  m='76366'>the</span> <span m='76681'>district</span> <span
  m='76995'>courts,</span> <span m='77310'>and</span> <span m='77678'>can</span>
  <span m='78047'>change</span> <span m='78416'>the</span> <span
  m='78785'>decision</span> <span m='79153'>that</span> <span
  m='79522'>was</span> <span m='79891'>made.</span> </p><p><span
  m='80260'>The</span> <span m='80627'>Supreme</span> <span
  m='80994'>Court</span> <span m='81361'>is</span> <span m='81728'>the</span>
  <span m='82095'>highest</span> <span m='82462'>level</span> <span
  m='82830'>in</span> <span m='83159'>the</span> <span m='83488'>American</span>
  <span m='83817'>legal</span> <span m='84146'>system</span> <span
  m='84475'>and</span> <span m='84804'>makes</span> <span m='85133'>the</span>
  <span m='85462'>final</span> <span m='85791'>decision</span> <span
  m='86120'>on</span> <span m='86370'>cases.</span> </p><p><span
  m='89420'>The</span> <span m='89761'>Supreme</span> <span
  m='90102'>Court</span> <span m='90444'>of</span> <span m='90785'>the</span>
  <span m='91127'>United</span> <span m='91468'>States</span> <span
  m='91810'>consists</span> <span m='92363'>of</span> <span
  m='92916'>nine</span> <span m='93470'>judges,</span> <span m='94023'>or</span>
  <span m='94576'>justices,</span> <span m='95130'>who</span> <span
  m='95538'>are</span> <span m='95946'>appointed</span> <span
  m='96355'>by</span> <span m='96763'>the</span> <span
  m='97171'>President.</span> </p><p><span m='97580'>This</span> <span
  m='98002'>image</span> <span m='98425'>shows</span> <span m='98847'>the</span>
  <span m='99270'>nine</span> <span m='99692'>Supreme</span> <span
  m='100115'>Court</span> <span m='100537'>justices</span> <span
  m='100960'>from</span> <span m='101597'>the</span> <span
  m='102234'>time</span> <span m='102871'>period</span> <span
  m='103508'>1994</span> <span m='104145'>through</span> <span
  m='104782'>2005.</span> </p><p><span m='105420'>This</span> <span
  m='105690'>was</span> <span m='105960'>the</span> <span
  m='106230'>longest</span> <span m='106500'>period</span> <span
  m='106770'>of</span> <span m='107040'>time</span> <span m='107310'>with</span>
  <span m='107799'>the</span> <span m='108288'>same</span> <span
  m='108777'>set</span> <span m='109266'>of</span> <span
  m='109755'>justices</span> <span m='110244'>in</span> <span
  m='110733'>over</span> <span m='111222'>180</span> <span
  m='111711'>years.</span> </p><p><span m='112200'>The</span> <span
  m='112638'>people</span> <span m='113077'>appointed</span> <span
  m='113516'>as</span> <span m='113955'>Supreme</span> <span
  m='114394'>Court</span> <span m='114833'>justices</span> <span
  m='115272'>are</span> <span m='115711'>usually</span> <span
  m='116150'>distinguished</span> <span m='116812'>judges,</span> <span
  m='117474'>professors</span> <span m='118136'>of</span> <span
  m='118798'>law,</span> <span m='119460'>or</span> <span
  m='120106'>state</span> <span m='120752'>or</span> <span
  m='121398'>federal</span> <span m='122044'>atttorneys.</span> </p><p><span
  m='122690'>The</span> <span m='123043'>Supreme</span> <span
  m='123396'>Court</span> <span m='123750'>of</span> <span m='124103'>the</span>
  <span m='124456'>United</span> <span m='124810'>States,</span> <span
  m='125163'>or</span> <span m='125516'>SCOTUS,</span> <span
  m='125870'>decides</span> <span m='126295'>on</span> <span
  m='126720'>the</span> <span m='127145'>most</span> <span
  m='127570'>difficult</span> <span m='127995'>and</span> <span
  m='128420'>controversial</span> <span m='128845'>cases</span> <span
  m='129270'>in</span> <span m='129777'>the</span> <span
  m='130285'>United</span> <span m='130792'>States.</span> </p><p><span
  m='131300'>These</span> <span m='131718'>cases</span> <span
  m='132136'>often</span> <span m='132555'>involve</span> <span
  m='132973'>an</span> <span m='133391'>interpretation</span> <span
  m='133810'>of</span> <span m='134347'>the</span> <span
  m='134885'>Constitution,</span> <span m='135422'>and</span> <span
  m='135960'>have</span> <span m='136497'>significant</span> <span
  m='137035'>social,</span> <span m='137572'>political,</span> <span
  m='138110'>and</span> <span m='138510'>economic</span> <span
  m='138910'>consequences.</span> </p><p><span m='142020'>There</span> <span
  m='142416'>have</span> <span m='142812'>been</span> <span
  m='143208'>many</span> <span m='143605'>significant</span> <span
  m='144001'>and</span> <span m='144397'>groundbreaking</span> <span
  m='144793'>decisions</span> <span m='145190'>made</span> <span
  m='145588'>by</span> <span m='145986'>the</span> <span
  m='146384'>Supreme</span> <span m='146782'>Court.</span> </p><p><span
  m='147180'>These</span> <span m='147561'>are</span> <span m='147942'>a</span>
  <span m='148323'>few</span> <span m='148704'>notable</span> <span
  m='149085'>decisions</span> <span m='149466'>that</span> <span
  m='149847'>were</span> <span m='150228'>made.</span> </p><p><span
  m='150610'>In</span> <span m='151091'>1942,</span> <span m='151573'>the</span>
  <span m='152055'>Supreme</span> <span m='152536'>Court</span> <span
  m='153018'>decided</span> <span m='153500'>on</span> <span
  m='153958'>the</span> <span m='154416'>Wickard</span> <span
  m='154875'>v.</span> <span m='155333'>Filburn</span> <span
  m='155791'>case.</span> </p><p><span m='156250'>This</span> <span
  m='156595'>case</span> <span m='156941'>recognized</span> <span
  m='157286'>the</span> <span m='157632'>power</span> <span m='157977'>of</span>
  <span m='158323'>the</span> <span m='158668'>federal</span> <span
  m='159014'>government</span> <span m='159360'>to</span> <span
  m='160032'>regulate</span> <span m='160705'>economic</span> <span
  m='161377'>activity.</span> </p><p><span m='162050'>Filburn</span> <span
  m='162337'>was</span> <span m='162624'>a</span> <span
  m='162911'>farmer,</span> <span m='163198'>who</span> <span
  m='163485'>was</span> <span m='163772'>growing</span> <span
  m='164060'>wheat</span> <span m='164672'>for</span> <span
  m='165285'>on-farm</span> <span m='165897'>consumption.</span> </p><p><span
  m='166510'>However,</span> <span m='166897'>the</span> <span
  m='167285'>US</span> <span m='167673'>had</span> <span
  m='168061'>established</span> <span m='168448'>limits</span> <span
  m='168836'>on</span> <span m='169224'>wheat</span> <span
  m='169612'>production,</span> <span m='170000'>and</span> <span
  m='170570'>Filburn</span> <span m='171140'>was</span> <span
  m='171710'>exceeding</span> <span m='172280'>those</span> <span
  m='172850'>limits.</span> </p><p><span m='173420'>So</span> <span
  m='173698'>even</span> <span m='173977'>though</span> <span
  m='174256'>the</span> <span m='174535'>extra</span> <span
  m='174814'>wheat</span> <span m='175093'>he</span> <span m='175372'>was</span>
  <span m='175651'>producing</span> <span m='175930'>was</span> <span
  m='176193'>for</span> <span m='176456'>his</span> <span m='176719'>own</span>
  <span m='176982'>use</span> <span m='177245'>and</span> <span
  m='177508'>he</span> <span m='177771'>had</span> <span m='178034'>no</span>
  <span m='178297'>intention</span> <span m='178560'>of</span> <span
  m='178823'>selling</span> <span m='179086'>it,</span> <span
  m='179350'>he</span> <span m='179810'>was</span> <span
  m='180270'>forced</span> <span m='180730'>to</span> <span
  m='181190'>destroy</span> <span m='181650'>it.</span> </p><p><span
  m='182110'>In</span> <span m='182498'>1973,</span> <span m='182886'>the</span>
  <span m='183274'>Supreme</span> <span m='183662'>Court</span> <span
  m='184050'>decided</span> <span m='184439'>on</span> <span
  m='184827'>the</span> <span m='185215'>Roe</span> <span m='185603'>v.</span>
  <span m='185991'>Wade</span> <span m='186380'>case,</span> <span
  m='186789'>one</span> <span m='187198'>of</span> <span m='187607'>the</span>
  <span m='188016'>most</span> <span m='188425'>well-known</span> <span
  m='188834'>cases</span> <span m='189243'>to</span> <span
  m='189652'>this</span> <span m='190061'>day.</span> </p><p><span
  m='190470'>They</span> <span m='190838'>decided</span> <span
  m='191207'>to</span> <span m='191576'>legalize</span> <span
  m='191945'>abortion,</span> <span m='192314'>and</span> <span
  m='192683'>by</span> <span m='193052'>doing</span> <span
  m='193421'>this,</span> <span m='193790'>prompted</span> <span
  m='194187'>a</span> <span m='194584'>national</span> <span
  m='194981'>debate</span> <span m='195378'>that</span> <span
  m='195775'>continues</span> <span m='196172'>today</span> <span
  m='196570'>about</span> <span m='197192'>the</span> <span
  m='197814'>legality</span> <span m='198436'>of</span> <span
  m='199058'>abortion.</span> </p><p><span m='199680'>In</span> <span
  m='200090'>2000,</span> <span m='200500'>the</span> <span
  m='200910'>Supreme</span> <span m='201320'>Court</span> <span
  m='201730'>actually</span> <span m='202140'>decided</span> <span
  m='202621'>the</span> <span m='203102'>outcome</span> <span
  m='203584'>of</span> <span m='204065'>the</span> <span
  m='204547'>presidential</span> <span m='205028'>election.</span> </p><p><span
  m='205510'>The</span> <span m='205778'>race</span> <span m='206046'>was</span>
  <span m='206314'>so</span> <span m='206582'>close</span> <span
  m='206850'>in</span> <span m='207118'>the</span> <span m='207386'>state</span>
  <span m='207654'>of</span> <span m='207922'>Florida,</span> <span
  m='208190'>that</span> <span m='208543'>a</span> <span
  m='208897'>recount</span> <span m='209251'>of</span> <span
  m='209605'>the</span> <span m='209958'>ballots</span> <span
  m='210312'>was</span> <span m='210666'>required.</span> </p><p><span
  m='211020'>But</span> <span m='211390'>the</span> <span
  m='211760'>Florida</span> <span m='212130'>Secretary</span> <span
  m='212500'>of</span> <span m='212870'>State</span> <span
  m='213240'>certified</span> <span m='213610'>that</span> <span
  m='213942'>President</span> <span m='214274'>Bush</span> <span
  m='214606'>was</span> <span m='214938'>the</span> <span
  m='215271'>winner</span> <span m='215603'>before</span> <span
  m='215935'>the</span> <span m='216267'>recount</span> <span
  m='216600'>could</span> <span m='217130'>be</span> <span
  m='217660'>completed.</span> </p><p><span m='218190'>The</span> <span
  m='218475'>case</span> <span m='218760'>then</span> <span
  m='219045'>went</span> <span m='219330'>to</span> <span m='219615'>the</span>
  <span m='219900'>Supreme</span> <span m='220185'>Court</span> <span
  m='220470'>where</span> <span m='220793'>it</span> <span m='221117'>was</span>
  <span m='221440'>ruled</span> <span m='221764'>that</span> <span
  m='222088'>all</span> <span m='222411'>ballots</span> <span
  m='222735'>needed</span> <span m='223059'>to</span> <span m='223382'>be</span>
  <span m='223706'>recounted.</span> </p><p><span m='224030'>But</span> <span
  m='224239'>since</span> <span m='224448'>this</span> <span
  m='224657'>could</span> <span m='224866'>not</span> <span m='225075'>be</span>
  <span m='225284'>done</span> <span m='225493'>before</span> <span
  m='225702'>the</span> <span m='225911'>winner</span> <span
  m='226120'>had</span> <span m='226329'>to</span> <span m='226646'>be</span>
  <span m='226963'>declared,</span> <span m='227280'>President</span> <span
  m='227597'>Bush</span> <span m='227914'>won</span> <span m='228231'>the</span>
  <span m='228548'>state</span> <span m='228865'>of</span> <span
  m='229182'>Florida,</span> <span m='229500'>and</span> <span
  m='230177'>thus,</span> <span m='230855'>the</span> <span
  m='231532'>presidency.</span> </p><p><span m='232210'>A</span> <span
  m='232544'>very</span> <span m='232878'>recent</span> <span
  m='233212'>case</span> <span m='233546'>from</span> <span
  m='233880'>2012</span> <span m='234214'>dealt</span> <span
  m='234548'>with</span> <span m='234882'>the</span> <span
  m='235216'>Patient</span> <span m='235550'>Protection</span> <span
  m='236023'>and</span> <span m='236496'>Affordable</span> <span
  m='236970'>Care</span> <span m='237443'>Act,</span> <span
  m='237916'>commonly</span> <span m='238390'>called</span> <span
  m='238921'>ObamaCare,</span> <span m='239453'>which</span> <span
  m='239985'>requires</span> <span m='240516'>most</span> <span
  m='241048'>Americans</span> <span m='241580'>to</span> <span
  m='241975'>have</span> <span m='242370'>health</span> <span
  m='242765'>insurance.</span> </p><p><span m='243160'>The</span> <span
  m='243513'>Supreme</span> <span m='243866'>Court</span> <span
  m='244220'>upheld</span> <span m='244573'>this</span> <span
  m='244926'>requirement.</span> </p><p><span m='248220'>Since</span> <span
  m='248748'>non-profits,</span> <span m='249276'>voters,</span> <span
  m='249804'>and</span> <span m='250332'>anybody</span> <span
  m='250860'>interested</span> <span m='251254'>in</span> <span
  m='251648'>long-term</span> <span m='252042'>planning</span> <span
  m='252436'>can</span> <span m='252830'>benefit</span> <span
  m='253192'>from</span> <span m='253554'>knowing</span> <span
  m='253916'>the</span> <span m='254278'>outcomes</span> <span
  m='254640'>of</span> <span m='255002'>the</span> <span
  m='255364'>Supreme</span> <span m='255726'>Court</span> <span
  m='256089'>cases</span> <span m='256667'>before</span> <span
  m='257246'>they</span> <span m='257824'>happen,</span> <span
  m='258403'>legal</span> <span m='258981'>academics</span> <span
  m='259560'>and</span> <span m='260172'>political</span> <span
  m='260785'>scientists</span> <span m='261397'>regularly</span> <span
  m='262010'>make</span> <span m='262466'>predictions</span> <span
  m='262923'>of</span> <span m='263380'>Supreme</span> <span
  m='263836'>Court</span> <span m='264293'>decisions</span> <span
  m='264750'>from</span> <span m='265251'>detailed</span> <span
  m='265752'>studies</span> <span m='266253'>of</span> <span
  m='266754'>the</span> <span m='267255'>cases</span> <span
  m='267756'>and</span> <span m='268257'>individual</span> <span
  m='268758'>justices.</span> </p><p><span m='269260'>In</span> <span
  m='269731'>2002,</span> <span m='270203'>Andrew</span> <span
  m='270675'>Martin,</span> <span m='271146'>a</span> <span
  m='271618'>professor</span> <span m='272090'>of</span> <span
  m='272446'>political</span> <span m='272802'>science</span> <span
  m='273158'>at</span> <span m='273515'>Washington</span> <span
  m='273871'>University</span> <span m='274227'>in</span> <span
  m='274583'>St.</span> </p><p><span m='274940'>Louis,</span> <span
  m='275456'>decided</span> <span m='275972'>to</span> <span
  m='276488'>instead</span> <span m='277004'>predict</span> <span
  m='277520'>decisions</span> <span m='278052'>using</span> <span
  m='278585'>a</span> <span m='279117'>statistical</span> <span
  m='279650'>model</span> <span m='280182'>built</span> <span
  m='280715'>from</span> <span m='281247'>data.</span> </p><p><span
  m='281780'>Together</span> <span m='282156'>with</span> <span
  m='282533'>his</span> <span m='282910'>colleagues,</span> <span
  m='283286'>he</span> <span m='283663'>decided</span> <span
  m='284040'>to</span> <span m='284387'>test</span> <span m='284735'>the</span>
  <span m='285083'>model</span> <span m='285431'>against</span> <span
  m='285778'>a</span> <span m='286126'>panel</span> <span m='286474'>of</span>
  <span m='286822'>experts.</span> </p><p><span m='287170'>They</span> <span
  m='287434'>wanted</span> <span m='287698'>to</span> <span
  m='287963'>see</span> <span m='288227'>if</span> <span m='288492'>an</span>
  <span m='288756'>analytical</span> <span m='289021'>model</span> <span
  m='289285'>could</span> <span m='289550'>outperform</span> <span
  m='290178'>the</span> <span m='290806'>expertise</span> <span
  m='291434'>and</span> <span m='292062'>intuition</span> <span
  m='292690'>of</span> <span m='292903'>a</span> <span m='293116'>large</span>
  <span m='293330'>group</span> <span m='293543'>of</span> <span
  m='293756'>experts.</span> </p><p><span m='297030'>Martin</span> <span
  m='297420'>used</span> <span m='297810'>a</span> <span
  m='298200'>method</span> <span m='298590'>called</span> <span
  m='298980'>classification</span> <span m='299370'>and</span> <span
  m='299760'>regression</span> <span m='300150'>trees,</span> <span
  m='300850'>or</span> <span m='301550'>CART.</span> </p><p><span
  m='302250'>In</span> <span m='302588'>this</span> <span
  m='302927'>case,</span> <span m='303265'>the</span> <span
  m='303604'>outcome</span> <span m='303942'>is</span> <span
  m='304281'>binary.</span> </p><p><span m='304620'>Will</span> <span
  m='304986'>the</span> <span m='305352'>Supreme</span> <span
  m='305719'>Court</span> <span m='306085'>affirm</span> <span
  m='306451'>the</span> <span m='306818'>case</span> <span m='307184'>or</span>
  <span m='307550'>reject</span> <span m='307917'>the</span> <span
  m='308283'>case?</span> </p><p><span m='308650'>He</span> <span
  m='309033'>could</span> <span m='309417'>have</span> <span
  m='309801'>used</span> <span m='310185'>logistic</span> <span
  m='310568'>regression</span> <span m='310952'>for</span> <span
  m='311336'>this,</span> <span m='311720'>but</span> <span
  m='312242'>logistic</span> <span m='312765'>regression</span> <span
  m='313287'>models</span> <span m='313810'>are</span> <span
  m='314332'>not</span> <span m='314855'>easily</span> <span
  m='315377'>interpretable.</span> </p><p><span m='315900'>The</span> <span
  m='316380'>model</span> <span m='316860'>coefficients</span> <span
  m='317340'>in</span> <span m='317820'>logistic</span> <span
  m='318300'>regression</span> <span m='318780'>indicate</span> <span
  m='319325'>the</span> <span m='319871'>importance</span> <span
  m='320417'>and</span> <span m='320962'>relative</span> <span
  m='321508'>effect</span> <span m='322054'>variables,</span> <span
  m='322600'>but</span> <span m='322928'>do</span> <span m='323257'>not</span>
  <span m='323585'>give</span> <span m='323914'>a</span> <span
  m='324242'>simple</span> <span m='324571'>explanation</span> <span
  m='324900'>of</span> <span m='325335'>how</span> <span m='325770'>a</span>
  <span m='326205'>decision</span> <span m='326640'>is</span> <span
  m='327075'>made.</span> </p><p><span m='327510'>In</span> <span
  m='327860'>this</span> <span m='328210'>lecture,</span> <span
  m='328560'>we'll</span> <span m='328910'>discuss</span> <span
  m='329260'>the</span> <span m='329610'>method</span> <span
  m='329960'>of</span> <span m='330310'>CART,</span> <span m='330660'>and</span>
  <span m='331062'>a</span> <span m='331465'>related</span> <span
  m='331868'>method</span> <span m='332271'>called</span> <span
  m='332674'>random</span> <span m='333077'>forests.</span> </p><p><span
  m='333480'>We</span> <span m='333773'>will</span> <span m='334066'>then</span>
  <span m='334360'>see</span> <span m='334653'>if</span> <span
  m='334946'>these</span> <span m='335240'>methods</span> <span
  m='335533'>can</span> <span m='335826'>actually</span> <span
  m='336120'>outperform</span> <span m='336593'>experts</span> <span
  m='337066'>in</span> <span m='337540'>predicting</span> <span
  m='338013'>the</span> <span m='338486'>outcome</span> <span
  m='338960'>of</span> <span m='339433'>Supreme</span> <span
  m='339906'>Court</span> <span m='340380'>cases.</span> </p>
embedded_media:
  - uid: 2a6fea5bb39ce72c8f2a62352cdfd044
    parent_uid: a191f0227c32a83498979461dc407176
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: CLaRAzHxJGo
  - uid: c3e517000adfe4bd78edd6509e8d47fa
    parent_uid: a191f0227c32a83498979461dc407176
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: CLaRAzHxJGo
  - uid: 95aa6716279cc0fcf74de4bcaa22ed47
    parent_uid: a191f0227c32a83498979461dc407176
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_4.2.01_300k.mp4
  - uid: 27c7f3c20d04dc8e79862a64a3e8b4e8
    parent_uid: a191f0227c32a83498979461dc407176
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/CLaRAzHxJGo/default.jpg'
  - uid: 0f7db0fd8b39e68e9df1c1dfbf96d0aa
    parent_uid: a191f0227c32a83498979461dc407176
    id: CLaRAzHxJGo.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-1-the-supreme-court-0/CLaRAzHxJGo.srt
  - uid: a499c1fc9ea851f637f8d7e2b674bc60
    parent_uid: a191f0227c32a83498979461dc407176
    id: CLaRAzHxJGo.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/trees/judge-jury-and-classifier-an-introduction-to-trees/video-1-the-supreme-court-0/CLaRAzHxJGo.pdf
  - uid: 5b8feaf7c0317574a0d9383c5951e438
    parent_uid: a191f0227c32a83498979461dc407176
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 41a7d898f5eae63c9349887c043e5bfa
    parent_uid: a191f0227c32a83498979461dc407176
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
