---
title: Bayes' Theorem
uid: 456fda927d9f2e2ad2728d21eeecd3e4
parent_uid: 719a707ae7a41f34c6885d5a02df431c
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-1f097d8a0a33/bayes-theorem
short_url: bayes-theorem
inline_embed_id: 67967128bayestheorem90462898
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='760'>PROFESSOR: One</span> <span m='930'>of</span> <span
  m='1030'>the</span> <span m='1100'>most</span> <span m='1370'>important</span>
  <span m='1800'>applications</span> <span m='2450'>of</span> <span
  m='2560'>conditional</span> <span m='3050'>probability</span> <span
  m='4250'>is</span> <span m='4510'>in</span> <span m='4670'>analyzing</span>
  <span m='5720'>the</span> <span m='5890'>results</span> <span
  m='6340'>of</span> <span m='6460'>diagnostic</span> <span
  m='7160'>tests</span> <span m='7740'>of</span> <span m='9020'>uncertain</span>
  <span m='9420'>reliability.</span> <span m='10260'>So</span> <span
  m='10550'>let's</span> <span m='10800'>look</span> <span m='10990'>at</span>
  <span m='11060'>a</span> <span m='11230'>fundamental</span> <span
  m='11850'>example.</span> </p><p><span m='14520'>Suppose</span> <span
  m='14910'>that</span> <span m='15060'>I</span> <span m='15280'>have</span>
  <span m='15770'>a</span> <span m='17100'>diagnostic</span> <span
  m='17970'>test</span> <span m='18220'>for</span> <span
  m='18330'>tuberculosis.</span> <span m='19230'>It</span> <span
  m='19370'>really</span> <span m='19610'>sounds</span> <span
  m='19930'>great</span> <span m='20160'>because</span> <span
  m='20430'>it's</span> <span m='20540'>going</span> <span m='20650'>to</span>
  <span m='20690'>be</span> <span m='20820'>99%</span> <span
  m='21700'>accurate--</span> <span m='22260'>in</span> <span
  m='22410'>fact,</span> <span m='22630'>more</span> <span m='22830'>than</span>
  <span m='23000'>99%</span> <span m='23710'>accurate,</span> <span
  m='24110'>really,</span> <span m='24830'>because</span> <span
  m='25050'>here</span> <span m='25190'>are the</span> <span
  m='25310'>properties</span> <span m='25880'>this</span> <span
  m='26060'>test</span> <span m='26380'>has.</span> <span m='27050'>If</span>
  <span m='27290'>you</span> <span m='27440'>have</span> <span
  m='27820'>TB,</span> <span m='28760'>this</span> <span m='28980'>test</span>
  <span m='29280'>is</span> <span m='29410'>guaranteed</span> <span
  m='30020'>to</span> <span m='30120'>detect</span> <span m='30590'>it</span>
  <span m='30710'>and</span> <span m='30890'>say,</span> <span
  m='31610'>yes,</span> <span m='31970'>you</span> <span m='32070'>have</span>
  <span m='32299'>TB.</span> <span m='33190'>If</span> <span
  m='33420'>you</span> <span m='33520'>don't</span> <span m='33770'>have</span>
  <span m='33980'>TB,</span> <span m='34800'>99%</span> <span
  m='35880'>of</span> <span m='36000'>the</span> <span m='36230'>time,</span>
  <span m='36660'>the</span> <span m='38050'>test</span> <span
  m='38330'>says</span> <span m='38620'>correctly</span> <span
  m='39390'>that</span> <span m='40120'>you</span> <span m='40320'>don't</span>
  <span m='40550'>have</span> <span m='40780'>TB,</span> <span
  m='40970'>and</span> <span m='41470'>1%</span> <span m='42030'>of the</span>
  <span m='42130'>time,</span> <span m='42410'>it</span> <span
  m='42480'>gets</span> <span m='42690'>it</span> <span m='42790'>wrong.</span>
  </p><p><span m='45390'>Now,</span> <span m='45520'>suppose</span> <span
  m='45860'>the</span> <span m='46000'>doctor</span> <span
  m='46420'>gives</span> <span m='46630'>you</span> <span m='46770'>the</span>
  <span m='46950'>test</span> <span m='47770'>and</span> <span
  m='48100'>the</span> <span m='48210'>test</span> <span m='48520'>comes</span>
  <span m='48780'>up</span> <span m='48920'>saying</span> <span
  m='49240'>that</span> <span m='49360'>you</span> <span m='49500'>have</span>
  <span m='49750'>TB.</span> <span m='50630'>That's</span> <span
  m='51010'>kind</span> <span m='51220'>of</span> <span m='51270'>scary</span>
  <span m='52480'>because</span> <span m='52930'>TB</span> <span
  m='53420'>is,</span> <span m='53580'>in</span> <span m='53830'>fact,</span>
  <span m='54110'>quite</span> <span m='54370'>a</span> <span
  m='54440'>serious</span> <span m='54830'>disease.</span> <span
  m='55180'>It's</span> <span m='55330'>getting</span> <span
  m='55580'>worse</span> <span m='55890'>because</span> <span
  m='56240'>there</span> <span m='56340'>are</span> <span m='56390'>all</span>
  <span m='56610'>of</span> <span m='56690'>these</span> <span
  m='57190'>antibiotic-resistant</span> <span m='58860'>versions</span> <span
  m='59250'>of</span> <span m='59370'>TB.</span> <span m='60030'>Now</span>
  <span m='60720'>in</span> <span m='60970'>Asia,</span> <span
  m='61610'>where</span> <span m='62160'>all</span> <span m='62320'>the</span>
  <span m='62410'>known</span> <span m='62650'>antibiotics</span> <span
  m='63420'>are</span> <span m='63760'>not</span> <span m='64110'>very</span>
  <span m='64319'>effective--</span> <span m='64800'>if</span> <span
  m='65040'>effective</span> <span m='65470'>at all--</span> <span
  m='65790'>of</span> <span m='65930'>curing</span> <span m='66320'>it,</span>
  <span m='68410'>and</span> <span m='70230'>this</span> <span
  m='70530'>test</span> <span m='70930'>that</span> <span m='71160'>was</span>
  <span m='71300'>99%</span> <span m='71940'>accurate</span> <span
  m='72370'>says</span> <span m='72640'>I</span> <span m='72720'>have</span>
  <span m='72990'>this</span> <span m='73200'>disease,</span> <span m='73630'>it
  sounds</span> <span m='74130'>really</span> <span m='74390'>worrisome.</span>
  </p><p><span m='76090'>But</span> <span m='76430'>in</span> <span
  m='76560'>fact,</span> <span m='77610'>we</span> <span m='77800'>can</span>
  <span m='78010'>ask</span> <span m='78940'>more</span> <span
  m='79170'>technically,</span> <span m='79730'>should you</span> <span
  m='80040'>really</span> <span m='80250'>be</span> <span
  m='80390'>worried?</span> <span m='80860'>What</span> <span
  m='80940'>is</span> <span m='81160'>the</span> <span
  m='81250'>probability</span> <span m='82320'>given</span> <span
  m='82900'>that</span> <span m='83100'>this</span> <span
  m='84030'>apparently</span> <span m='84560'>highly</span> <span
  m='84930'>accurate</span> <span m='85420'>test</span> <span
  m='85720'>says</span> <span m='85990'>you</span> <span m='86100'>have</span>
  <span m='86360'>TB?</span> <span m='86700'>What's</span> <span
  m='86880'>the</span> <span m='86960'>probability</span> <span m='87270'>that
  you</span> <span m='87580'>actually</span> <span m='87930'>have TB?</span>
  <span m='88800'>That's</span> <span m='89040'>what</span> <span
  m='89150'>we</span> <span m='89250'>want</span> <span m='89430'>to</span>
  <span m='89490'>calculate.</span> <span m='90630'>What's</span> <span
  m='90880'>the</span> <span m='90970'>probability</span> <span
  m='91590'>that</span> <span m='91700'>you</span> <span m='91790'>have</span>
  <span m='92070'>it?</span> </p><p><span m='93220'>So</span> <span
  m='94090'>in</span> <span m='94210'>other</span> <span m='94380'>words,</span>
  <span m='94620'>I</span> <span m='94710'>want</span> <span
  m='94940'>the</span> <span m='95040'>conditional</span> <span
  m='95550'>probability</span> <span m='96900'>that</span> <span
  m='97040'>I</span> <span m='97120'>have</span> <span m='97450'>TB</span> <span
  m='98040'>given</span> <span m='98450'>that</span> <span m='98650'>the</span>
  <span m='98760'>test</span> <span m='99110'>comes</span> <span
  m='99360'>in</span> <span m='99510'>positive.</span> <span
  m='99825'>The</span> <span m='100140'>test</span> <span
  m='100420'>says,</span> <span m='100960'>yes,</span> <span
  m='101220'>you</span> <span m='101320'>have</span> <span m='101550'>TB.</span>
  <span m='104210'>That</span> <span m='104580'>test</span> <span
  m='104810'>positive</span> <span m='105310'>is</span> <span
  m='105460'>a</span> <span m='105840'>big</span> <span m='106050'>word</span>
  <span m='106310'>that</span> <span m='106430'>I</span> <span
  m='106480'>won't</span> <span m='106690'>have</span> <span
  m='107170'>room</span> <span m='107350'>for</span> <span m='107550'>on
  other</span> <span m='107790'>slides,</span> <span m='108100'>so</span> <span
  m='108190'>let's</span> <span m='108360'>just</span> <span
  m='108530'>abbreviate</span> <span m='108835'>it</span> <span
  m='109140'>by</span> <span m='109270'>[? plus. ?]</span> <span
  m='109640'>Plus</span> <span m='110010'>means,</span> <span
  m='110380'>in</span> <span m='110500'>green,</span> <span
  m='111160'>that</span> <span m='111350'>the</span> <span
  m='111470'>test</span> <span m='111880'>said,</span> <span
  m='112250'>yes,</span> <span m='113080'>positive--</span> <span
  m='114390'>you</span> <span m='114510'>have</span> <span m='114820'>TB.</span>
  <span m='116470'>OK,</span> <span m='117170'>so</span> <span
  m='117360'>that's</span> <span m='117670'>the</span> <span
  m='117790'>probability</span> <span m='118550'>that</span> <span
  m='118660'>we're</span> <span m='118790'>trying</span> <span
  m='118980'>to</span> <span m='119060'>calculate,</span> <span
  m='119590'>this</span> <span m='119780'>conditional</span> <span
  m='120240'>probability.</span> </p><p><span m='121090'>What</span> <span
  m='121270'>do</span> <span m='121340'>we</span> <span m='121470'>know</span>
  <span m='121670'>about</span> <span m='121980'>the</span> <span
  m='122100'>test?</span> <span m='122440'>Let's</span> <span
  m='122680'>translate</span> <span m='123280'>the</span> <span
  m='123370'>information</span> <span m='123930'>we</span> <span
  m='124030'>have</span> <span m='124230'>about</span> <span
  m='124480'>the</span> <span m='124590'>test</span> <span
  m='124890'>into</span> <span m='125430'>the</span> <span
  m='125520'>language</span> <span m='125950'>of</span> <span
  m='126020'>conditional</span> <span m='126500'>probability.</span> <span
  m='127400'>And</span> <span m='127560'>the</span> <span
  m='127630'>first</span> <span m='128220'>thing</span> <span
  m='128740'>we</span> <span m='128840'>said</span> <span m='129020'>was</span>
  <span m='129190'>that the</span> <span m='129320'>test</span> <span
  m='129570'>is</span> <span m='129669'>guaranteed</span> <span
  m='130210'>to</span> <span m='130280'>get</span> <span m='130449'>it</span>
  <span m='130539'>right</span> <span m='130740'>if</span> <span
  m='130850'>you</span> <span m='130919'>have</span> <span m='131190'>TB.</span>
  <span m='131980'>So</span> <span m='132230'>given</span> <span
  m='132840'>that</span> <span m='133010'>you</span> <span
  m='133100'>have</span> <span m='133390'>TB,</span> <span m='134630'>the</span>
  <span m='134760'>probability</span> <span m='135560'>that</span> <span
  m='135730'>the</span> <span m='135840'>test</span> <span
  m='136140'>will</span> <span m='136250'>say</span> <span
  m='136510'>so--</span> <span m='136930'>it</span> <span m='137070'>will</span>
  <span m='137250'>return</span> <span m='137540'>a</span> <span
  m='137620'>positive</span> <span m='138020'>result--</span> <span
  m='138380'>is</span> <span m='138480'>1.</span> </p><p><span
  m='141060'>Given</span> <span m='141380'>that</span> <span
  m='141590'>you</span> <span m='141670'>don't</span> <span
  m='142010'>have</span> <span m='142320'>TB,</span> <span m='143040'>the</span>
  <span m='143160'>probability</span> <span m='143820'>that</span> <span
  m='144000'>the</span> <span m='144100'>test</span> <span
  m='144420'>will</span> <span m='144530'>say that</span> <span
  m='144920'>you</span> <span m='145050'>do</span> <span m='145330'>have</span>
  <span m='145570'>TB</span> <span m='146000'>is</span> <span
  m='146130'>only</span> <span m='146490'>1</span> <span m='146810'>in</span>
  <span m='146940'>100.</span> <span m='147370'>Because</span> <span
  m='147800'>99%</span> <span m='148530'>of</span> <span m='148600'>the</span>
  <span m='148710'>time,</span> <span m='149230'>it</span> <span
  m='149420'>correctly</span> <span m='149920'>says</span> <span
  m='150480'>you</span> <span m='150590'>don't</span> <span
  m='150900'>have</span> <span m='151110'>TB.</span> <span m='152030'>And</span>
  <span m='152530'>1%</span> <span m='153270'>of the</span> <span
  m='153380'>time,</span> <span m='153730'>it</span> <span
  m='153860'>says</span> <span m='154160'>oops,</span> <span
  m='154610'>you</span> <span m='154740'>do</span> <span m='154950'>have</span>
  <span m='155170'>TB.</span> </p><p><span m='155530'>So</span> <span
  m='155690'>this</span> <span m='155870'>is</span> <span
  m='155970'>what's</span> <span m='156160'>called</span> <span
  m='156340'>a</span> <span m='156380'>false</span> <span
  m='156760'>positive</span> <span m='157270'>rate.</span> <span
  m='157800'>It's</span> <span m='158070'>falsely</span> <span
  m='158670'>claiming</span> <span m='159100'>that</span> <span
  m='159230'>you</span> <span m='159370'>have</span> <span m='159630'>TB</span>
  <span m='160430'>when</span> <span m='160590'>you</span> <span
  m='160730'>really</span> <span m='160980'>don't.</span> <span
  m='161510'>And</span> <span m='161750'>that</span> <span
  m='161970'>rate,</span> <span m='162310'>we're</span> <span
  m='162470'>hypothesizing,</span> <span m='163410'>is</span> <span
  m='163500'>only</span> <span m='163720'>1%.</span> </p><p><span
  m='166430'>Now,</span> <span m='166560'>what</span> <span
  m='166740'>we're</span> <span m='166860'>trying</span> <span
  m='167150'>to</span> <span m='167290'>calculate,</span> <span
  m='168150'>again,</span> <span m='168620'>is</span> <span
  m='169530'>the</span> <span m='169640'>probability</span> <span
  m='170640'>that</span> <span m='170840'>you</span> <span
  m='170920'>have</span> <span m='171280'>TB</span> <span
  m='171870'>given</span> <span m='172470'>that</span> <span
  m='172700'>the</span> <span m='172840'>test</span> <span
  m='173300'>came</span> <span m='173540'>in</span> <span
  m='173660'>positive</span> <span m='174210'>and</span> <span
  m='174330'>said</span> <span m='174590'>you</span> <span m='174690'>had</span>
  <span m='174950'>TB.</span> <span m='176640'>Well,</span> <span
  m='176840'>let's</span> <span m='177050'>look</span> <span
  m='177190'>at</span> <span m='177260'>the</span> <span
  m='177360'>definition</span> <span m='177910'>of</span> <span
  m='177980'>conditional</span> <span m='178410'>probability.</span> <span
  m='179020'>The</span> <span m='179120'>probability</span> <span
  m='180110'>that</span> <span m='180310'>you</span> <span
  m='180390'>have</span> <span m='180690'>TB</span> <span
  m='181100'>given</span> <span m='181390'>that the</span> <span
  m='181630'>test</span> <span m='182030'>came</span> <span m='182260'>in</span>
  <span m='182370'>positive,</span> <span m='183250'>that</span> <span
  m='183410'>said</span> <span m='183610'>you</span> <span m='183700'>do,</span>
  <span m='183960'>is</span> <span m='184130'>simply</span> <span
  m='184960'>the</span> <span m='186240'>probability</span> <span
  m='187050'>that</span> <span m='187610'>both</span> <span
  m='187950'>the</span> <span m='188060'>test</span> <span
  m='188330'>comes</span> <span m='188580'>in</span> <span
  m='188690'>positive</span> <span m='189220'>and</span> <span
  m='189450'>you</span> <span m='189530'>have</span> <span m='189800'>TB</span>
  <span m='190610'>divided</span> <span m='191230'>by</span> <span
  m='191830'>the</span> <span m='191940'>probability</span> <span
  m='192640'>that</span> <span m='192820'>the</span> <span
  m='192930'>test</span> <span m='193210'>comes</span> <span
  m='193450'>in</span> <span m='193570'>positive.</span> </p><p><span
  m='195330'>Well,</span> <span m='196490'>using</span> <span
  m='197200'>the</span> <span m='197330'>definition</span> <span
  m='198090'>of</span> <span m='198350'>conditional</span> <span
  m='198790'>probability</span> <span m='199400'>again,</span> <span
  m='200110'>this</span> <span m='200930'>intersection,</span> <span
  m='201660'>this</span> <span m='201970'>AND</span> <span m='202360'>of</span>
  <span m='203000'>having</span> <span m='203340'>TB</span> <span
  m='203930'>and</span> <span m='205220'>the</span> <span m='205340'>test</span>
  <span m='205580'>coming</span> <span m='205860'>in</span> <span
  m='205950'>positive,</span> <span m='206490'>is</span> <span
  m='206600'>simply</span> <span m='207260'>the</span> <span
  m='207370'>probability</span> <span m='208040'>that</span> <span
  m='208250'>the</span> <span m='208350'>test</span> <span
  m='208650'>comes</span> <span m='208880'>in</span> <span
  m='209010'>positive</span> <span m='209580'>given</span> <span m='210070'>that
  you</span> <span m='210180'>have</span> <span m='210470'>TB</span> <span
  m='211330'>times</span> <span m='211760'>the</span> <span
  m='211870'>probability</span> <span m='212265'>that</span> <span
  m='212660'>you</span> <span m='212750'>have</span> <span m='213030'>TB.</span>
  <span m='214680'>Now,</span> <span m='214800'>this</span> <span
  m='215030'>one</span> <span m='215200'>we</span> <span m='215340'>know.</span>
  <span m='216330'>It's</span> <span m='216530'>1</span> <span
  m='217200'>because</span> <span m='217450'>the</span> <span m='217570'>test
  is</span> <span m='217990'>perfect.</span> <span m='218390'>If</span> <span
  m='218490'>you</span> <span m='218610'>have</span> <span m='218850'>TB,</span>
  <span m='219250'>the test</span> <span m='219560'>is</span> <span
  m='219660'>definitely</span> <span m='219980'>going</span> <span
  m='220090'>to</span> <span m='220150'>say</span> <span
  m='220350'>positive.</span> <span m='221200'>So</span> <span
  m='221380'>that</span> <span m='221620'>lets</span> <span m='221850'>me</span>
  <span m='221960'>simplify</span> <span m='222260'>things</span> <span
  m='222890'>nicely.</span> </p><p><span m='223600'>What</span> <span
  m='223810'>I've</span> <span m='223880'>just</span> <span
  m='224120'>figured</span> <span m='224400'>out</span> <span
  m='224660'>is</span> <span m='224950'>the</span> <span
  m='225070'>probability</span> <span m='226220'>that</span> <span
  m='227390'>you</span> <span m='228100'>have</span> <span m='228380'>TB</span>
  <span m='228780'>given</span> <span m='229200'>that the</span> <span
  m='229310'>test</span> <span m='229620'>says</span> <span
  m='229860'>you</span> <span m='229990'>do</span> <span m='230600'>is</span>
  <span m='230790'>simply</span> <span m='231250'>the</span> <span
  m='231390'>quotient</span> <span m='232190'>of</span> <span
  m='232350'>the</span> <span m='232450'>probability</span> <span
  m='233180'>that</span> <span m='233350'>you</span> <span
  m='233430'>have</span> <span m='233700'>TB</span> <span
  m='234100'>given</span> <span m='234370'>no</span> <span
  m='234540'>other</span> <span m='234790'>information</span> <span
  m='235930'>and</span> <span m='236850'>the</span> <span
  m='236970'>probability</span> <span m='237570'>that</span> <span
  m='237780'>the</span> <span m='237880'>test</span> <span
  m='238200'>comes</span> <span m='238500'>in</span> <span
  m='239040'>positive.</span> <span m='241310'>Well,</span> <span
  m='241610'>what</span> <span m='241770'>is</span> <span m='241930'>that</span>
  <span m='242420'>probability</span> <span m='242695'>that</span> <span
  m='242970'>the</span> <span m='243190'>test</span> <span
  m='243510'>comes</span> <span m='243740'>in</span> <span
  m='243840'>positive?</span> <span m='244240'>How</span> <span m='244390'>are
  we</span> <span m='244490'>going to</span> <span m='244640'>calculate</span>
  <span m='245200'>that?</span> <span m='245360'>That's</span> <span
  m='245570'>the</span> <span m='245690'>key</span> <span
  m='246020'>unknown</span> <span m='246510'>here.</span> </p><p><span
  m='248250'>And</span> <span m='248700'>we're</span> <span
  m='248810'>going</span> <span m='248930'>to</span> <span m='248970'>use</span>
  <span m='249160'>the</span> <span m='249250'>probability</span> <span
  m='249830'>rule,</span> <span m='250030'>the</span> <span
  m='250620'>total</span> <span m='251000'>probability</span> <span
  m='251570'>rule.</span> <span m='251730'>Total</span> <span
  m='252090'>probability</span> <span m='252670'>says</span> <span
  m='253000'>that you</span> <span m='253250'>do</span> <span
  m='253430'>or</span> <span m='253540'>you</span> <span m='253620'>don't</span>
  <span m='253820'>have</span> <span m='254070'>TB.</span> <span m='254700'>So
  that</span> <span m='254990'>the</span> <span m='255070'>way</span> <span
  m='255270'>to</span> <span m='255750'>calculate</span> <span
  m='257370'>the</span> <span m='258779'>probability</span> <span
  m='259459'>that</span> <span m='259640'>the</span> <span
  m='259740'>test</span> <span m='260000'>comes</span> <span
  m='260240'>in</span> <span m='260360'>positive</span> <span
  m='261050'>is</span> <span m='261290'>to</span> <span m='261380'>look</span>
  <span m='261640'>at</span> <span m='261790'>the</span> <span
  m='262110'>probability</span> <span m='262700'>that</span> <span
  m='262890'>the</span> <span m='263020'>test</span> <span
  m='263290'>comes</span> <span m='263560'>in</span> <span
  m='263710'>positive</span> <span m='264280'>when</span> <span
  m='264470'>you</span> <span m='264600'>do</span> <span m='264920'>and</span>
  <span m='265060'>don't</span> <span m='265280'>have</span> <span
  m='265740'>TB.</span> <span m='266110'>And</span> <span m='266210'>we</span>
  <span m='266310'>know</span> <span m='266520'>those</span> <span
  m='266870'>numbers.</span> </p><p><span m='268040'>So</span> <span
  m='268140'>let's</span> <span m='268390'>look</span> <span
  m='268570'>at</span> <span m='268690'>the</span> <span m='269120'>total</span>
  <span m='269430'>probability</span> <span m='270030'>formula.</span> <span
  m='271600'>The</span> <span m='271850'>probability</span> <span
  m='272520'>that</span> <span m='272720'>the</span> <span
  m='272810'>test</span> <span m='273070'>comes</span> <span
  m='273280'>in</span> <span m='273390'>positive</span> <span
  m='273900'>is</span> <span m='274010'>simply</span> <span
  m='274660'>the</span> <span m='274770'>probability</span> <span
  m='275370'>that</span> <span m='275530'>it comes</span> <span
  m='276020'>in</span> <span m='276160'>positive</span> <span
  m='276710'>if</span> <span m='276880'>you</span> <span m='276960'>have</span>
  <span m='277270'>TB</span> <span m='277710'>times</span> <span
  m='277960'>the</span> <span m='278050'>probability</span> <span
  m='278620'>you</span> <span m='278680'>have</span> <span m='278950'>TB,</span>
  <span m='280020'>plus</span> <span m='280820'>the</span> <span
  m='280930'>probability</span> <span m='281255'>it</span> <span
  m='281580'>comes</span> <span m='281810'>in</span> <span
  m='281890'>positive</span> <span m='282470'>given</span> <span
  m='283020'>that</span> <span m='283220'>you</span> <span
  m='283310'>don't</span> <span m='283530'>have</span> <span
  m='283760'>TB</span> <span m='284140'>times</span> <span m='284370'>the</span>
  <span m='284470'>probability</span> <span m='285130'>you</span> <span
  m='285270'>don't</span> <span m='285540'>have</span> <span
  m='285770'>TB.</span> </p><p><span m='286690'>Well,</span> <span
  m='287090'>we</span> <span m='287200'>know</span> <span m='287350'>a</span>
  <span m='287440'>lot</span> <span m='287630'>of</span> <span
  m='287680'>these</span> <span m='287880'>terms.</span> <span
  m='288570'>Let's</span> <span m='288980'>work</span> <span
  m='289220'>them</span> <span m='289340'>out.</span> <span
  m='290005'>Well,</span> <span m='290310'>the</span> <span
  m='290740'>probability</span> <span m='292120'>the</span> <span
  m='292270'>test</span> <span m='292510'>comes</span> <span
  m='292740'>in</span> <span m='292860'>positive</span> <span
  m='293350'>given</span> <span m='293750'>that you</span> <span
  m='293890'>have</span> <span m='294140'>TB</span> <span m='294530'>is</span>
  <span m='294660'>1.</span> <span m='296110'>And</span> <span
  m='296410'>the</span> <span m='296490'>probability</span> <span
  m='297250'>that</span> <span m='297460'>the</span> <span
  m='297550'>test</span> <span m='297830'>comes</span> <span
  m='298090'>in</span> <span m='298230'>positive</span> <span
  m='298740'>given</span> <span m='299100'>that you</span> <span
  m='299230'>don't</span> <span m='299520'>have</span> <span
  m='299770'>TB</span> <span m='300290'>is</span> <span m='300430'>1/100.</span>
  <span m='301170'>That's</span> <span m='301370'>the</span> <span
  m='301450'>false</span> <span m='301770'>positive</span> <span
  m='302200'>rate.</span> <span m='302350'>We</span> <span
  m='302450'>figured</span> <span m='302730'>that</span> <span
  m='302920'>already.</span> </p><p><span m='303720'>What</span> <span
  m='303880'>about</span> <span m='304130'>the</span> <span
  m='304220'>probability</span> <span m='305010'>that</span> <span
  m='305250'>you</span> <span m='305390'>don't</span> <span
  m='305640'>have</span> <span m='305910'>TB?</span> <span
  m='306120'>Well,</span> <span m='306530'>that's</span> <span
  m='306810'>simply</span> <span m='307310'>1</span> <span
  m='307660'>minus</span> <span m='308050'>the</span> <span
  m='308140'>probability</span> <span m='308560'>that</span> <span
  m='308980'>you</span> <span m='309110'>do</span> <span m='309430'>have</span>
  <span m='309720'>TB.</span> <span m='310560'>Now</span> <span
  m='310720'>I</span> <span m='310770'>have</span> <span m='310950'>this</span>
  <span m='311130'>nice</span> <span m='311390'>arithmetic</span> <span
  m='311970'>formula</span> <span m='312580'>in</span> <span
  m='312720'>the</span> <span m='312820'>probability</span> <span
  m='313490'>of</span> <span m='313610'>TB.</span> <span m='314490'>So</span>
  <span m='314700'>I</span> <span m='314800'>wind</span> <span
  m='315160'>up</span> <span m='315320'>with</span> <span m='319040'>the</span>
  <span m='319560'>probability</span> <span m='320250'>of</span> <span
  m='320350'>TB</span> <span m='321820'>plus</span> <span
  m='322520'>1/100</span> <span m='323670'>minus</span> <span m='324740'>[?
  1/100 ?]</span> <span m='325450'>of</span> <span m='325550'>the</span> <span
  m='325640'>probability</span> <span m='326270'>of</span> <span
  m='326390'>TB.</span> </p><p><span m='326750'>It</span> <span
  m='326840'>leaves</span> <span m='327070'>me</span> <span
  m='327210'>with</span> <span m='327370'>1/100</span> <span
  m='327850'>plus</span> <span m='328230'>the</span> <span
  m='328735'>99/100</span> <span m='329620'>of</span> <span
  m='329750'>TB.</span> <span m='330270'>So</span> <span
  m='330460'>that's</span> <span m='330690'>what</span> <span
  m='330850'>this</span> <span m='331030'>simplifies</span> <span
  m='331630'>to.</span> <span m='332360'>The</span> <span
  m='332400'>probability</span> <span m='333270'>that</span> <span
  m='333450'>the</span> <span m='333560'>test</span> <span
  m='333830'>comes</span> <span m='334040'>in</span> <span
  m='334150'>positive</span> <span m='335770'>given</span> <span
  m='336080'>no</span> <span m='336230'>other</span> <span
  m='336470'>information</span> <span m='337100'>is</span> <span
  m='338020'>99/100</span> <span m='339070'>of</span> <span
  m='339160'>the</span> <span m='339270'>probability</span> <span
  m='340770'>that</span> <span m='340920'>a</span> <span
  m='340990'>person</span> <span m='341410'>has</span> <span
  m='341690'>TB</span> <span m='342490'>plus</span> <span
  m='343280'>1/100.</span> <span m='344960'>We'll</span> <span
  m='345090'>come</span> <span m='345260'>back</span> <span m='345470'>to</span>
  <span m='345580'>this</span> <span m='345790'>formula.</span> </p><p><span
  m='347740'>Well,</span> <span m='348310'>we</span> <span
  m='348500'>were</span> <span m='348600'>working</span> <span
  m='349040'>on</span> <span m='350040'>the</span> <span
  m='350150'>probability</span> <span m='350820'>that</span> <span
  m='350990'>you have</span> <span m='351260'>TB</span> <span
  m='351600'>given</span> <span m='351850'>the</span> <span
  m='351970'>test</span> <span m='352230'>came</span> <span m='352450'>in</span>
  <span m='352550'>positive.</span> <span m='353000'>We</span> <span
  m='353130'>figured</span> <span m='353420'>out</span> <span
  m='353590'>that</span> <span m='353700'>it</span> <span m='353780'>was</span>
  <span m='353930'>this</span> <span m='354110'>quotient.</span> <span
  m='354640'>And</span> <span m='354790'>now,</span> <span m='355000'>I</span>
  <span m='355080'>know</span> <span m='355270'>what</span> <span
  m='355430'>the</span> <span m='355530'>denominator</span> <span
  m='356310'>is.</span> <span m='356910'>The</span> <span
  m='357000'>denominator</span> <span m='357440'>is</span> <span
  m='358960'>99/100</span> <span m='359970'>times</span> <span
  m='360180'>the</span> <span m='360260'>probability</span> <span
  m='360850'>of</span> <span m='360950'>TB</span> <span m='361310'>plus</span>
  <span m='361580'>1/100.</span> <span m='362070'>Multiply</span> <span
  m='362540'>numerator</span> <span m='362990'>and</span> <span
  m='363070'>denominator</span> <span m='363690'>through</span> <span
  m='363910'>by</span> <span m='364080'>100,</span> <span m='364780'>and</span>
  <span m='365090'>you</span> <span m='365170'>get</span> <span
  m='365730'>that</span> <span m='365920'>the</span> <span
  m='366010'>probability</span> <span m='367010'>that</span> <span
  m='367200'>you</span> <span m='367270'>have</span> <span m='367560'>TB</span>
  <span m='367970'>given</span> <span m='368240'>that the</span> <span
  m='368510'>test</span> <span m='368890'>says</span> <span
  m='369040'>you</span> <span m='369160'>do</span> <span m='369500'>is</span>
  <span m='370100'>100</span> <span m='370550'>times</span> <span
  m='370760'>the</span> <span m='370850'>probability</span> <span
  m='371730'>that</span> <span m='371880'>you</span> <span
  m='371930'>have</span> <span m='372140'>TB</span> <span
  m='374070'>divided</span> <span m='374540'>by</span> <span
  m='374680'>99</span> <span m='375330'>times</span> <span m='375560'>the</span>
  <span m='375660'>probability</span> <span m='376260'>that</span> <span
  m='376400'>you</span> <span m='376450'>have</span> <span m='376690'>TB</span>
  <span m='377060'>plus</span> <span m='377390'>1.</span> </p><p><span
  m='378580'>So</span> <span m='378970'>let's</span> <span
  m='379140'>hold</span> <span m='379560'>formula.</span> <span
  m='380870'>Notice</span> <span m='381090'>the</span> <span
  m='381220'>key</span> <span m='381460'>unknown</span> <span
  m='381890'>here</span> <span m='382310'>is</span> <span m='383330'>the</span>
  <span m='383480'>probability</span> <span m='384320'>that</span> <span
  m='384810'>you</span> <span m='385020'>have</span> <span m='385250'>TB</span>
  <span m='387120'>independent</span> <span m='387650'>of</span> <span
  m='387740'>the</span> <span m='387860'>test,</span> <span
  m='388110'>the</span> <span m='388180'>probability</span> <span
  m='388720'>that</span> <span m='388960'>a</span> <span
  m='389110'>random</span> <span m='389470'>person</span> <span
  m='389860'>in</span> <span m='389960'>the</span> <span
  m='390060'>population</span> <span m='390580'>has</span> <span
  m='390830'>TB.</span> <span m='391680'>If</span> <span m='391850'>we</span>
  <span m='391940'>can</span> <span m='392070'>figure</span> <span
  m='392340'>that</span> <span m='392600'>out</span> <span m='393070'>or</span>
  <span m='393220'>if</span> <span m='393300'>we</span> <span
  m='393390'>can</span> <span m='393520'>look</span> <span
  m='393720'>that</span> <span m='393910'>up,</span> <span
  m='394400'>then</span> <span m='394610'>we</span> <span m='394770'>know</span>
  <span m='395210'>what</span> <span m='395490'>this</span> <span
  m='395750'>unknown</span> <span m='396230'>is,</span> <span
  m='396470'>the</span> <span m='396550'>probability</span> <span
  m='397180'>have</span> <span m='397420'>TB</span> <span
  m='397750'>given</span> <span m='398040'>that</span> <span
  m='398150'>the</span> <span m='398360'>test</span> <span m='398625'>says
  you</span> <span m='398890'>do.</span> </p><p><span m='399550'>Well,</span>
  <span m='400640'>what</span> <span m='400940'>is</span> <span
  m='401180'>the</span> <span m='401270'>probability</span> <span
  m='402140'>that</span> <span m='403310'>a</span> <span
  m='403400'>random</span> <span m='403690'>person</span> <span
  m='404030'>has</span> <span m='404290'>TB?</span> <span
  m='405000'>Well,</span> <span m='405970'>there</span> <span
  m='406080'>were</span> <span m='406170'>11,000</span> <span
  m='406980'>cases</span> <span m='407390'>of</span> <span m='407530'>TB</span>
  <span m='407870'>reported</span> <span m='408430'>in</span> <span
  m='408720'>2011,</span> <span m='409500'>according</span> <span
  m='409840'>to</span> <span m='409940'>the</span> <span
  m='410050'>Center</span> <span m='410290'>for</span> <span
  m='410400'>Disease</span> <span m='410780'>Control</span> <span
  m='411430'>in</span> <span m='411560'>the</span> <span
  m='411630'>United</span> <span m='411980'>States.</span> <span
  m='413510'>And</span> <span m='414120'>you</span> <span m='414280'>can</span>
  <span m='414430'>assume</span> <span m='414720'>that</span> <span
  m='414870'>there's</span> <span m='415050'>going</span> <span
  m='415170'>to</span> <span m='415210'>be</span> <span m='415320'>a</span>
  <span m='415380'>lot</span> <span m='415650'>of</span> <span
  m='415900'>unreported</span> <span m='416470'>cases</span> <span
  m='416910'>if</span> <span m='417180'>there</span> <span m='417370'>are</span>
  <span m='417460'>11,000</span> <span m='418200'>reported</span> <span
  m='418640'>ones,</span> <span m='419380'>because</span> <span
  m='419520'>a</span> <span m='419550'>lot</span> <span m='419650'>of</span>
  <span m='419710'>people</span> <span m='419940'>don't</span> <span
  m='420090'>even</span> <span m='420270'>know</span> <span
  m='420420'>they</span> <span m='420540'>have</span> <span
  m='420800'>the</span> <span m='420870'>disease.</span> </p><p><span
  m='422820'>So</span> <span m='422950'>let's</span> <span
  m='423220'>estimate,</span> <span m='424070'>on</span> <span
  m='424320'>that</span> <span m='424550'>basis</span> <span
  m='424900'>given</span> <span m='425130'>that</span> <span
  m='425260'>the</span> <span m='425350'>population</span> <span m='425930'>of
  the</span> <span m='426010'>US is</span> <span m='426390'>around</span> <span
  m='426580'>350</span> <span m='429130'>million,</span> <span m='431090'>that
  the</span> <span m='431500'>probability</span> <span m='432200'>of</span>
  <span m='432320'>TB</span> <span m='433140'>is</span> <span
  m='433310'>about</span> <span m='433890'>1/10,000.</span> <span
  m='436000'>Let's</span> <span m='436250'>plug</span> <span
  m='436550'>that</span> <span m='436770'>into</span> <span
  m='437110'>our</span> <span m='437220'>formula.</span> <span
  m='438490'>The</span> <span m='438580'>probability</span> <span
  m='439240'>that</span> <span m='439360'>you</span> <span
  m='439430'>have</span> <span m='439720'>TB</span> <span
  m='440070'>given</span> <span m='440360'>the</span> <span
  m='440500'>test</span> <span m='440830'>is</span> <span
  m='440970'>positive</span> <span m='441510'>is</span> <span
  m='441660'>this</span> <span m='441840'>formula.</span> <span
  m='442500'>When</span> <span m='442680'>I</span> <span m='442760'>plug</span>
  <span m='443065'>in</span> <span m='443370'>1/10,000</span> <span
  m='444400'>for</span> <span m='444570'>TB.</span> <span m='445510'>I</span>
  <span m='445660'>get</span> <span m='446400'>100/10,000</span> <span
  m='448842'>and</span> <span m='449296'>99/10,000</span> <span
  m='450660'>plus</span> <span m='450980'>1.</span> </p><p><span
  m='451760'>Well</span> <span m='451890'>now,</span> <span m='452100'>I</span>
  <span m='452180'>can</span> <span m='452340'>see</span> <span m='452540'>that
  the</span> <span m='452770'>denominator</span> <span m='453540'>is</span>
  <span m='453650'>essentially</span> <span m='454250'>1.</span> <span
  m='455200'>It's</span> <span m='455330'>1.01.</span> <span
  m='456800'>And</span> <span m='456990'>the</span> <span
  m='457060'>numerator</span> <span m='457640'>is</span> <span
  m='457760'>1/100.</span> <span m='458370'>And</span> <span
  m='458470'>this</span> <span m='458580'>is</span> <span
  m='458700'>basically</span> <span m='459480'>about</span> <span
  m='460040'>1/100.</span> </p><p><span m='461530'>In</span> <span
  m='461740'>other</span> <span m='461920'>words,</span> <span
  m='462450'>it's</span> <span m='462560'>not</span> <span
  m='462950'>very</span> <span m='463230'>likely</span> <span
  m='464190'>that</span> <span m='464400'>you</span> <span
  m='464590'>have</span> <span m='464910'>TB.</span> <span
  m='466370'>Because</span> <span m='466750'>of</span> <span
  m='466850'>the</span> <span m='466950'>relatively</span> <span
  m='467500'>high</span> <span m='467810'>false</span> <span
  m='468220'>positive</span> <span m='468790'>rate</span> <span
  m='469720'>that</span> <span m='469890'>was</span> <span
  m='470030'>relatively</span> <span m='470610'>high</span> <span
  m='470910'>of</span> <span m='471010'>1%,</span> <span m='472200'>that</span>
  <span m='472690'>false</span> <span m='473070'>positive</span> <span
  m='473580'>rate</span> <span m='473930'>washed</span> <span
  m='474470'>out</span> <span m='476870'>the</span> <span
  m='477740'>actual</span> <span m='478110'>number</span> <span
  m='478410'>of</span> <span m='478540'>TB</span> <span m='478890'>cases,</span>
  <span m='479390'>which</span> <span m='479940'>the</span> <span
  m='480080'>TB</span> <span m='480760'>rate</span> <span m='481020'>was</span>
  <span m='481180'>only</span> <span m='481510'>0.01%,</span> <span
  m='483420'>so</span> <span m='483600'>that</span> <span
  m='483740'>almost</span> <span m='484200'>all</span> <span
  m='484610'>of</span> <span m='484840'>the</span> <span
  m='485370'>reports</span> <span m='486170'>of</span> <span
  m='486730'>TB</span> <span m='487590'>were</span> <span
  m='488360'>caused</span> <span m='488750'>by</span> <span
  m='488880'>the</span> <span m='488980'>high</span> <span
  m='489240'>false</span> <span m='489590'>positive</span> <span
  m='490090'>rate.</span> <span m='490390'>And</span> <span
  m='490640'>that</span> <span m='490860'>means</span> <span
  m='491180'>that</span> <span m='491350'>when</span> <span
  m='491550'>you</span> <span m='491700'>have</span> <span m='493560'>a</span>
  <span m='493660'>report that</span> <span m='494150'>you've</span> <span
  m='494350'>got</span> <span m='494600'>TB,</span> <span m='495290'>you</span>
  <span m='495530'>still</span> <span m='496050'>only</span> <span
  m='496330'>have</span> <span m='496550'>a</span> <span m='496610'>1%</span>
  <span m='497250'>chance</span> <span m='497600'>that you</span> <span
  m='497790'>actually</span> <span m='498180'>have</span> <span
  m='498550'>the</span> <span m='498690'>TB.</span> </p><p><span
  m='500590'>So</span> <span m='500780'>the</span> <span m='500870'>99%</span>
  <span m='501890'>accurate</span> <span m='502380'>test</span> <span
  m='502760'>was</span> <span m='502930'>not</span> <span m='503230'>very</span>
  <span m='503470'>useful</span> <span m='503860'>here</span> <span
  m='504090'>for</span> <span m='504210'>you</span> <span m='504370'>to</span>
  <span m='504450'>figure</span> <span m='504860'>out</span> <span
  m='505650'>what</span> <span m='505850'>kind</span> <span m='506050'>of</span>
  <span m='506140'>action</span> <span m='506560'>to</span> <span
  m='506690'>take</span> <span m='506960'>and</span> <span
  m='507040'>what</span> <span m='507200'>kind</span> <span m='507350'>of</span>
  <span m='507400'>medicine to</span> <span m='507900'>take</span> <span
  m='508100'>or</span> <span m='508200'>treatment</span> <span
  m='508540'>to</span> <span m='508670'>take</span> <span
  m='509760'>given</span> <span m='510030'>that</span> <span
  m='510150'>the</span> <span m='510270'>test</span> <span
  m='510530'>came</span> <span m='510730'>in</span> <span
  m='510850'>positive.</span> <span m='511350'>With</span> <span
  m='511530'>1</span> <span m='511760'>in</span> <span m='511890'>100</span>
  <span m='512409'>chance,</span> <span m='512870'>the</span> <span
  m='513000'>odds</span> <span m='513240'>are</span> <span m='513350'>you</span>
  <span m='513450'>won't</span> <span m='513640'>do</span> <span
  m='513780'>anything,</span> <span m='514230'>in</span> <span
  m='514320'>which</span> <span m='514539'>case</span> <span
  m='514809'>you</span> <span m='514919'>can</span> <span
  m='515059'>wonder</span> <span m='515490'>why</span> <span
  m='515770'>your</span> <span m='515870'>doctor</span> <span
  m='516169'>gave</span> <span m='516350'>you</span> <span m='516429'>the</span>
  <span m='516570'>test.</span> </p><p><span m='517850'>Well,</span> <span
  m='518400'>the</span> <span m='518510'>99%</span> <span m='519419'>test</span>
  <span m='519730'>sounds</span> <span m='520140'>good.</span> <span
  m='520330'>We</span> <span m='520460'>figured</span> <span
  m='520740'>out</span> <span m='520890'>that it</span> <span
  m='521159'>isn't.</span> <span m='521620'>And a</span> <span
  m='521820'>hint</span> <span m='522120'>about</span> <span
  m='522799'>why</span> <span m='523080'>99%</span> <span
  m='524710'>accurate</span> <span m='525190'>isn't</span> <span
  m='525460'>really</span> <span m='525680'>so</span> <span
  m='525820'>useful</span> <span m='526330'>is</span> <span
  m='526520'>that</span> <span m='526830'>there's</span> <span
  m='527030'>an</span> <span m='527180'>obvious</span> <span
  m='527770'>test</span> <span m='528080'>that's</span> <span
  m='528260'>99.99%</span> <span m='529780'>accurate.</span> <span
  m='530290'>What's</span> <span m='530530'>the</span> <span
  m='530630'>test?</span> <span m='531600'>Always</span> <span
  m='531950'>say</span> <span m='532180'>no.</span> <span
  m='532990'>After</span> <span m='533420'>all,</span> <span
  m='534540'>the</span> <span m='534650'>probability</span> <span
  m='535250'>is</span> <span m='535380'>only</span> <span m='535530'>1</span>
  <span m='535740'>in</span> <span m='535830'>10,000</span> <span
  m='536390'>that</span> <span m='536490'>you're</span> <span
  m='536580'>going</span> <span m='536710'>to</span> <span m='536760'>be</span>
  <span m='536900'>wrong.</span> <span m='537890'>And</span> <span
  m='538460'>that's</span> <span m='538910'>the</span> <span
  m='539010'>99.99%</span> <span m='540590'>rate.</span> </p><p><span
  m='542150'>So</span> <span m='543330'>it</span> <span m='543510'>sounds</span>
  <span m='543800'>as</span> <span m='543900'>though</span> <span
  m='544040'>this</span> <span m='544290'>test</span> <span m='544610'>is</span>
  <span m='544720'>really</span> <span m='544970'>worthless.</span> <span
  m='545530'>But</span> <span m='545850'>no,</span> <span m='546080'>it's</span>
  <span m='546270'>not.</span> <span m='546600'>If</span> <span
  m='546710'>you</span> <span m='546790'>think</span> <span
  m='547020'>about</span> <span m='547330'>it</span> <span m='547430'>a</span>
  <span m='547530'>little</span> <span m='547640'>bit,</span> <span
  m='550100'>it</span> <span m='550480'>will</span> <span m='550640'>be</span>
  <span m='550740'>useful.</span> <span m='551240'>And I'll</span> <span
  m='551580'>explain that in</span> <span m='551875'>a minute.</span> <span
  m='552170'>I forgot I'm</span> <span m='552370'>getting</span> <span
  m='552610'>ahead</span> <span m='552790'>of</span> <span
  m='552860'>myself.</span> <span m='553580'>Because</span> <span
  m='554480'>the</span> <span m='555050'>basic</span> <span
  m='555460'>formula</span> <span m='555930'>that</span> <span
  m='556090'>we</span> <span m='556240'>used</span> <span m='556540'>here</span>
  <span m='556690'>was</span> <span m='556910'>we</span> <span
  m='557050'>figured</span> <span m='557400'>out</span> <span
  m='557620'>what</span> <span m='557820'>the</span> <span
  m='558530'>probability</span> <span m='559320'>of</span> <span
  m='559480'>TB</span> <span m='560380'>given</span> <span
  m='560700'>that</span> <span m='560920'>the</span> <span
  m='561890'>test</span> <span m='562170'>said</span> <span
  m='562390'>you</span> <span m='562470'>had</span> <span m='562750'>TB</span>
  <span m='563480'>in</span> <span m='563660'>terms</span> <span
  m='564030'>of</span> <span m='564160'>the</span> <span
  m='564330'>inverse</span> <span m='564800'>probabilities</span> <span
  m='565490'>which</span> <span m='565660'>we</span> <span
  m='565820'>knew--</span> <span m='566130'>that</span> <span
  m='566350'>is,</span> <span m='566490'>the</span> <span
  m='566590'>probability</span> <span m='567500'>that</span> <span
  m='567710'>the</span> <span m='567820'>test</span> <span
  m='568130'>came</span> <span m='568370'>in</span> <span
  m='568480'>positive</span> <span m='569060'>given</span> <span m='569560'>that
  you</span> <span m='569650'>had</span> <span m='569970'>TB.</span>
  </p><p><span m='571730'>This</span> <span m='572020'>is</span> <span
  m='572160'>an</span> <span m='572240'>example</span> <span
  m='572720'>of</span> <span m='572800'>what's</span> <span m='573020'>a</span>
  <span m='573070'>famous</span> <span m='573490'>rule in</span> <span
  m='573820'>probability</span> <span m='574085'>theory.</span> <span
  m='574350'>It's</span> <span m='574650'>called</span> <span
  m='574880'>Bayes'</span> <span m='575430'>rule,</span> <span
  m='575790'>or</span> <span m='575890'>Bayes'</span> <span
  m='576250'>law.</span> <span m='576740'>And</span> <span
  m='577000'>this</span> <span m='577230'>is</span> <span m='577360'>it.</span>
  <span m='577590'>It's just</span> <span m='577760'>stated</span> <span
  m='578120'>in</span> <span m='578220'>terms</span> <span m='578500'>of</span>
  <span m='578640'>arbitrary</span> <span m='579150'>events</span> <span
  m='579500'>A</span> <span m='579810'>and B.</span> <span m='580270'>It</span>
  <span m='580620'>expresses</span> <span m='581170'>the</span> <span
  m='581260'>probability</span> <span m='581840'>of</span> <span
  m='581910'>B</span> <span m='582200'>given</span> <span m='582550'>A</span>
  <span m='583040'>in</span> <span m='583180'>terms</span> <span
  m='583460'>of</span> <span m='583540'>the</span> <span
  m='583620'>probability</span> <span m='584210'>of</span> <span
  m='584340'>A</span> <span m='584550'>given</span> <span m='584920'>B</span>
  <span m='585600'>and</span> <span m='585860'>the</span> <span
  m='585940'>probabilities</span> <span m='586630'>of</span> <span m='586750'>A
  and</span> <span m='587060'>B</span> <span m='587390'>independently.</span>
  </p><p><span m='588970'>Now,</span> <span m='589160'>I</span> <span
  m='589250'>can</span> <span m='589440'>actually</span> <span
  m='589740'>never</span> <span m='589980'>remember</span> <span
  m='590350'>this</span> <span m='590600'>law,</span> <span
  m='590800'>but</span> <span m='591040'>I</span> <span
  m='591160'>re-derive</span> <span m='591420'>it</span> <span
  m='591510'>right</span> <span m='591840'>every</span> <span
  m='592100'>time</span> <span m='592350'>I</span> <span m='592410'>need</span>
  <span m='592670'>to</span> <span m='592770'>do</span> <span
  m='593000'>it</span> <span m='593200'>as</span> <span m='593450'>we've</span>
  <span m='593720'>done</span> <span m='593910'>in</span> <span
  m='594020'>the</span> <span m='594110'>previous</span> <span
  m='594620'>slides.</span> <span m='595910'>It's</span> <span
  m='596180'>really</span> <span m='596490'>a</span> <span
  m='596560'>quite</span> <span m='596830'>straightforward</span> <span
  m='597580'>law</span> <span m='597760'>to</span> <span
  m='598050'>derive</span> <span m='598460'>and prove.</span> </p><p><span
  m='599890'>But</span> <span m='600060'>let's</span> <span m='600250'>go</span>
  <span m='600360'>back</span> <span m='600630'>to</span> <span
  m='600740'>this</span> <span m='601010'>99%</span> <span
  m='601870'>accurate</span> <span m='602360'>test</span> <span
  m='602740'>that</span> <span m='602840'>seemed</span> <span
  m='603180'>worthless</span> <span m='603650'>since</span> <span
  m='603890'>there</span> <span m='603990'>was</span> <span m='604120'>a</span>
  <span m='604180'>trivial</span> <span m='604620'>test</span> <span
  m='604910'>that</span> <span m='604950'>was</span> <span
  m='605080'>99.9%</span> <span m='606310'>accurate.</span> <span
  m='607820'>But</span> <span m='608270'>in</span> <span m='608380'>fact,</span>
  <span m='608770'>it's</span> <span m='608900'>really</span> <span
  m='609120'>helpful</span> <span m='609740'>because</span> <span
  m='610180'>it</span> <span m='610400'>did</span> <span
  m='610640'>increase</span> <span m='611650'>the</span> <span
  m='611740'>probability</span> <span m='612350'>that</span> <span
  m='612530'>you</span> <span m='612590'>had</span> <span m='612900'>TB</span>
  <span m='613270'>by</span> <span m='613440'>a</span> <span
  m='613500'>factor</span> <span m='613870'>of</span> <span
  m='613930'>100.</span> <span m='614770'>Before</span> <span
  m='615120'>you</span> <span m='615240'>took</span> <span m='615470'>the</span>
  <span m='615590'>test</span> <span m='616130'>and</span> <span
  m='616250'>before</span> <span m='616520'>you</span> <span
  m='616590'>know</span> <span m='616790'>anything,</span> <span
  m='617450'>you</span> <span m='617590'>thought</span> <span
  m='617930'>that</span> <span m='618010'>your</span> <span
  m='618190'>probability</span> <span m='618780'>was</span> <span
  m='618970'>the</span> <span m='619050'>same</span> <span m='619300'>as</span>
  <span m='619410'>everybody</span> <span m='619810'>elses--</span> <span
  m='620140'>about</span> <span m='620410'>1</span> <span m='620570'>in</span>
  <span m='620670'>10,000.</span> <span m='621840'>Now</span> <span
  m='622060'>the</span> <span m='622210'>test</span> <span
  m='622520'>says</span> <span m='622830'>the</span> <span
  m='622930'>probability</span> <span m='623180'>that</span> <span
  m='623560'>you</span> <span m='623820'>have</span> <span m='624030'>TB</span>
  <span m='624470'>is</span> <span m='624600'>1 in</span> <span
  m='625083'>100.</span> <span m='625566'>That's a hundred</span> <span
  m='626050'>times</span> <span m='626280'>larger.</span> </p><p><span
  m='627040'>What's</span> <span m='627320'>the</span> <span
  m='627390'>value</span> <span m='627800'>of</span> <span
  m='627860'>that?</span> <span m='628560'>Well,</span> <span
  m='629450'>suppose</span> <span m='629970'>you</span> <span
  m='630130'>only</span> <span m='630470'>had</span> <span m='630880'>5</span>
  <span m='631310'>million</span> <span m='631680'>doses</span> <span
  m='632100'>of</span> <span m='632240'>medicine</span> <span
  m='632990'>to</span> <span m='633170'>treat</span> <span
  m='633880'>this</span> <span m='634320'>American</span> <span
  m='634780'>population</span> <span m='635400'>of</span> <span
  m='635500'>350</span> <span m='636310'>million</span> <span
  m='636650'>people.</span> <span m='637990'>Who</span> <span
  m='638160'>should</span> <span m='638360'>you</span> <span
  m='638440'>medicate?</span> <span m='639950'>Well,</span> <span
  m='640360'>if</span> <span m='640580'>you</span> <span
  m='641380'>medicated</span> <span m='642010'>a</span> <span
  m='642120'>random</span> <span m='642820'>5</span> <span
  m='643180'>million</span> <span m='643470'>people</span> <span
  m='643910'>out</span> <span m='644000'>of</span> <span m='644100'>350</span>
  <span m='644940'>million,</span> <span m='645490'>the</span> <span
  m='645630'>likelihood</span> <span m='646230'>that</span> <span
  m='646350'>you're</span> <span m='646450'>going</span> <span
  m='646610'>to</span> <span m='646660'>get</span> <span m='647000'>very</span>
  <span m='647250'>many</span> <span m='647630'>of</span> <span
  m='647840'>the</span> <span m='648770'>real</span> <span m='649050'>TB</span>
  <span m='649400'>cases</span> <span m='649840'>is</span> <span
  m='649960'>small.</span> <span m='650860'>It's</span> <span
  m='650990'>only</span> <span m='651210'>going</span> <span
  m='651330'>to</span> <span m='651390'>be</span> <span m='651540'>about</span>
  <span m='651800'>1 in</span> <span m='652175'>30.</span> <span
  m='653440'>You'll</span> <span m='653590'>only</span> <span
  m='653760'>get</span> <span m='653910'>about</span> <span
  m='654160'>1/30</span> <span m='654830'>of</span> <span m='654920'>the</span>
  <span m='655010'>cases.</span> </p><p><span m='656050'>But</span> <span
  m='656700'>if</span> <span m='656950'>you</span> <span m='657410'>use</span>
  <span m='657790'>your</span> <span m='658350'>5</span> <span
  m='658670'>million</span> <span m='659910'>doses</span> <span
  m='660710'>to</span> <span m='660850'>medicate</span> <span
  m='661530'>the</span> <span m='661640'>3.5</span> <span
  m='662610'>million</span> <span m='663330'>people</span> <span
  m='663730'>who</span> <span m='663850'>would</span> <span
  m='664090'>test</span> <span m='664380'>positive</span> <span
  m='665620'>under</span> <span m='665910'>this</span> <span
  m='666150'>99%</span> <span m='666890'>accurate</span> <span
  m='667390'>test,</span> <span m='668530'>then</span> <span
  m='670660'>when</span> <span m='670850'>you</span> <span
  m='670940'>test</span> <span m='671190'>all</span> <span m='671380'>350</span>
  <span m='672140'>million</span> <span m='672450'>people,</span> <span
  m='672760'>you're</span> <span m='672870'>going</span> <span
  m='672980'>to</span> <span m='673040'>get</span> <span m='673200'>about</span>
  <span m='673460'>3.5</span> <span m='674250'>million</span> <span
  m='674530'>who</span> <span m='674640'>test</span> <span
  m='674910'>positive.</span> <span m='675560'>You</span> <span
  m='675700'>have</span> <span m='675960'>enough</span> <span
  m='676210'>medication</span> <span m='676830'>to</span> <span
  m='676920'>treat</span> <span m='677170'>all of</span> <span
  m='677460'>them.</span> <span m='677940'>And</span> <span m='678110'>if</span>
  <span m='678200'>you</span> <span m='678280'>treat</span> <span
  m='678510'>all</span> <span m='678760'>of</span> <span m='678880'>them,</span>
  <span m='679270'>you're</span> <span m='679470'>almost</span> <span
  m='679820'>certain</span> <span m='680440'>to</span> <span
  m='680540'>get</span> <span m='680920'>all</span> <span m='681200'>of</span>
  <span m='681280'>the</span> <span m='681410'>actual</span> <span
  m='682280'>TB</span> <span m='682670'>cases,</span> <span
  m='683170'>all</span> <span m='683380'>10,000</span> <span
  m='683720'>of</span> <span m='684060'>them.</span> </p><p><span
  m='684730'>So</span> <span m='684890'>the</span> <span m='685000'>99%</span>
  <span m='685970'>accurate</span> <span m='686480'>test</span> <span
  m='686780'>does</span> <span m='687020'>have</span> <span m='687280'>an</span>
  <span m='687600'>important</span> <span m='688090'>use</span> <span
  m='688350'>in</span> <span m='688450'>this</span> <span
  m='688630'>final</span> <span m='688980'>setting,</span> <span
  m='689570'>a</span> <span m='689700'>lot</span> <span m='690020'>more</span>
  <span m='690240'>so</span> <span m='690860'>then</span> <span
  m='691040'>the</span> <span m='691120'>99.99%</span> <span
  m='693340'>accurate</span> <span m='693820'>test</span> <span
  m='694320'>that</span> <span m='694540'>simply</span> <span
  m='694880'>always</span> <span m='695280'>said</span> <span
  m='695640'>no--</span> <span m='696500'>food</span> <span
  m='696840'>for</span> <span m='696980'>thought.</span> </p>
embedded_media:
  - uid: 918c67aadbf8775eb82ca0a1a1ce1678
    parent_uid: 456fda927d9f2e2ad2728d21eeecd3e4
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: 9374c41085d534a126613a53a5efe7df
    parent_uid: 456fda927d9f2e2ad2728d21eeecd3e4
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: da7611a47eba88d021029bbee9dd4ea8
    parent_uid: 456fda927d9f2e2ad2728d21eeecd3e4
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: e-yQFC6dACA
  - uid: 7bc50cbf786886758be9992721e5e72e
    parent_uid: 456fda927d9f2e2ad2728d21eeecd3e4
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/e-yQFC6dACA/default.jpg'
  - uid: 8f7d51388df5057ee08a6488d879799c
    parent_uid: 456fda927d9f2e2ad2728d21eeecd3e4
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: e-yQFC6dACA
  - uid: b8b9516d0f49f9fcbeec6be50e1d416a
    parent_uid: 456fda927d9f2e2ad2728d21eeecd3e4
    id: e-yQFC6dACA.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-1f097d8a0a33/bayes-theorem/e-yQFC6dACA.srt
  - uid: 6edc2aa7652e244dc034fb1be7f92c17
    parent_uid: 456fda927d9f2e2ad2728d21eeecd3e4
    id: e-yQFC6dACA.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/tp12-1/vertical-1f097d8a0a33/bayes-theorem/e-yQFC6dACA.pdf
  - uid: 4cd6a1d7b2820bd32a71a8e3bb4e9eb4
    parent_uid: 456fda927d9f2e2ad2728d21eeecd3e4
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 42f29a2c648185b7156353bb330eac32
    parent_uid: 456fda927d9f2e2ad2728d21eeecd3e4
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 34eed0f838d4e9a6d6aa1c9aeb289998
    parent_uid: 456fda927d9f2e2ad2728d21eeecd3e4
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_probbayes_video_ipod.mp4
type: courses
layout: video
---
