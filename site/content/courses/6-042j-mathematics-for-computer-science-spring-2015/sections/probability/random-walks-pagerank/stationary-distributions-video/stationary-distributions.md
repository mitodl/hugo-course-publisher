---
title: Stationary Distributions
uid: cd94c07f582fe3cfe01344ee872b8f3d
parent_uid: 543c714fd5158fb86cde0a76b4d8446c
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/random-walks-pagerank/stationary-distributions-video/stationary-distributions
short_url: stationary-distributions
inline_embed_id: 93257355stationarydistributions51393476
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='360'>PROFESSOR: So</span> <span m='560'>some</span> <span
  m='810'>of</span> <span m='920'>the</span> <span m='1000'>standard</span>
  <span m='1440'>questions</span> <span m='2000'>that</span> <span
  m='2100'>we've</span> <span m='2310'>examined</span> <span
  m='2760'>already</span> <span m='3110'>about</span> <span
  m='3370'>random</span> <span m='3750'>graphs</span> <span m='4250'>are</span>
  <span m='4570'>the</span> <span m='4940'>probability</span> <span
  m='5690'>of</span> <span m='5780'>getting</span> <span m='6060'>from</span>
  <span m='6250'>one</span> <span m='6410'>place</span> <span m='6720'>to</span>
  <span m='6820'>another,</span> <span m='7320'>or</span> <span
  m='7420'>the</span> <span m='7580'>expected</span> <span m='8130'>time</span>
  <span m='8500'>to</span> <span m='8610'>get</span> <span m='8790'>from</span>
  <span m='8950'>one</span> <span m='9150'>place</span> <span m='9430'>to</span>
  <span m='9580'>another.</span> <span m='10470'>But</span> <span
  m='10630'>a</span> <span m='10670'>different</span> <span
  m='11070'>kind</span> <span m='11240'>of</span> <span
  m='11300'>question</span> <span m='11730'>that</span> <span
  m='11880'>comes</span> <span m='12160'>up</span> <span m='12340'>in</span>
  <span m='12430'>a</span> <span m='12480'>fundamental</span> <span
  m='13090'>way</span> <span m='13360'>is</span> <span m='13800'>the</span>
  <span m='13920'>probability</span> <span m='14570'>of</span> <span
  m='14670'>being</span> <span m='15060'>someplace.</span> <span
  m='16440'>So</span> <span m='16680'>let's</span> <span
  m='16910'>examine</span> <span m='17120'>that.</span> </p><p><span
  m='18650'>Here</span> <span m='18950'>is</span> <span m='19160'>the</span>
  <span m='20080'>graph</span> <span m='20570'>with</span> <span
  m='21840'>states</span> <span m='22450'>blue,</span> <span
  m='23010'>orange,</span> <span m='23500'>and</span> <span
  m='23660'>green</span> <span m='23950'>that</span> <span
  m='24070'>we've</span> <span m='24240'>seen</span> <span
  m='24480'>before.</span> <span m='25550'>And</span> <span
  m='26010'>suppose</span> <span m='26470'>that</span> <span m='26610'>I</span>
  <span m='26690'>start at</span> <span m='27180'>state</span> <span
  m='27690'>B.</span> <span m='28810'>And</span> <span m='29270'>I</span> <span
  m='29440'>ask,</span> <span m='30260'>what's</span> <span m='30650'>the</span>
  <span m='30760'>probability</span> <span m='32005'>of</span> <span
  m='32560'>being</span> <span m='33460'>at</span> <span m='33770'>each</span>
  <span m='34030'>of</span> <span m='34130'>these</span> <span
  m='34340'>states</span> <span m='35150'>after</span> <span
  m='35520'>one</span> <span m='35810'>step?</span> </p><p><span
  m='37090'>So</span> <span m='37260'>to</span> <span m='37350'>start</span>
  <span m='37750'>with,</span> <span m='38230'>I'm</span> <span
  m='38440'>interested</span> <span m='38950'>in</span> <span m='39490'>p</span>
  <span m='39840'>B,</span> <span m='40190'>p O,</span> <span
  m='40540'>and</span> <span m='40660'>p G--</span> <span m='41150'>which</span>
  <span m='41390'>is</span> <span m='41500'>the</span> <span
  m='41600'>probability</span> <span m='42350'>of</span> <span
  m='42490'>being</span> <span m='42880'>at</span> <span m='43020'>state</span>
  <span m='43430'>B,</span> <span m='43680'>the</span> <span
  m='43780'>probability</span> <span m='44410'>of</span> <span
  m='44500'>being</span> <span m='44740'>at</span> <span m='44800'>state</span>
  <span m='45130'>O,</span> <span m='45460'>and</span> <span
  m='45550'>the</span> <span m='45640'>probability</span> <span
  m='46260'>of</span> <span m='46360'>being</span> <span m='46580'>at</span>
  <span m='46650'>state</span> <span m='47070'>G.</span> <span
  m='47940'>The</span> <span m='48250'>sum</span> <span m='48550'>of</span>
  <span m='48620'>the</span> <span m='49130'>probabilities</span> <span
  m='49690'>is</span> <span m='49840'>going</span> <span m='49970'>to</span>
  <span m='50020'>be</span> <span m='50160'>1.</span> <span m='50850'>And</span>
  <span m='51040'>initially</span> <span m='51580'>when</span> <span
  m='51740'>I</span> <span m='51820'>tell</span> <span m='52040'>you</span>
  <span m='52180'>that</span> <span m='52320'>I'm</span> <span
  m='52490'>at</span> <span m='52690'>state</span> <span m='53050'>B,</span>
  <span m='53220'>it</span> <span m='53350'>means</span> <span
  m='53600'>the</span> <span m='53700'>probability</span> <span
  m='54250'>of</span> <span m='54310'>being</span> <span m='54610'>at</span>
  <span m='54740'>B</span> <span m='54890'>is</span> <span m='55020'>1,</span>
  <span m='55340'>and</span> <span m='55450'>the</span> <span
  m='55580'>other</span> <span m='55820'>two</span> <span m='56010'>is</span>
  <span m='56150'>0.</span> </p><p><span m='57240'>And</span> <span
  m='57470'>I'm</span> <span m='57590'>interested</span> <span
  m='58110'>in</span> <span m='58890'>the</span> <span m='59010'>way</span>
  <span m='59230'>that</span> <span m='59450'>these</span> <span
  m='59670'>probabilities</span> <span m='60380'>update</span> <span
  m='60870'>after</span> <span m='61150'>one</span> <span m='61410'>step.</span>
  <span m='62160'>If</span> <span m='62500'>p</span> <span
  m='62910'>prime</span> <span m='63580'>B</span> <span m='64840'>is</span>
  <span m='65190'>the</span> <span m='65290'>probability</span> <span
  m='65950'>of</span> <span m='66100'>being</span> <span m='66580'>in</span>
  <span m='66710'>state</span> <span m='67060'>B</span> <span
  m='67270'>after</span> <span m='67490'>one</span> <span m='67710'>step,</span>
  <span m='68040'>and</span> <span m='68710'>p</span> <span
  m='68870'>prime</span> <span m='69870'>O</span> <span m='70210'>is</span>
  <span m='70660'>the</span> <span m='70720'>probability</span> <span
  m='71390'>of</span> <span m='71510'>being in</span> <span m='71660'>the
  orange</span> <span m='71860'>state</span> <span m='72140'>one</span> <span
  m='72320'>step</span> <span m='72490'>later--</span> <span
  m='72635'>and</span> <span m='72780'>likewise</span> <span
  m='73230'>for</span> <span m='73420'>green--</span> <span
  m='74090'>what</span> <span m='74360'>are</span> <span m='74580'>these</span>
  <span m='75040'>probabilities?</span> <span m='75720'>Well</span> <span
  m='75990'>it's</span> <span m='76140'>easy</span> <span m='76420'>to</span>
  <span m='76500'>see</span> <span m='76770'>just</span> <span
  m='76990'>reading</span> <span m='77300'>off</span> <span
  m='77490'>this</span> <span m='77680'>graph</span> <span m='78580'>that</span>
  <span m='79100'>the</span> <span m='79460'>only</span> <span
  m='79930'>place</span> <span m='80300'>you're</span> <span m='80460'>at</span>
  <span m='80730'>is</span> <span m='81290'>B.</span> <span m='81650'>So</span>
  <span m='81840'>the</span> <span m='82010'>only</span> <span
  m='82310'>way</span> <span m='82500'>to</span> <span m='82580'>get</span>
  <span m='82800'>probability</span> <span m='83380'>of</span> <span
  m='83460'>being</span> <span m='83700'>somewhere</span> <span
  m='84110'>is</span> <span m='84190'>by</span> <span m='85340'>following</span>
  <span m='85700'>an</span> <span m='85770'>edge</span> <span
  m='86010'>out</span> <span m='86150'>of</span> <span m='86190'>B.</span>
  </p><p><span m='86660'>So the</span> <span m='86740'>probability</span> <span
  m='87410'>of</span> <span m='87520'>being</span> <span m='88380'>at</span>
  <span m='88570'>one</span> <span m='88820'>step</span> <span
  m='89440'>at</span> <span m='89740'>the</span> <span m='89890'>orange</span>
  <span m='90230'>vertex</span> <span m='90610'>is</span> <span
  m='90720'>1/4.</span> <span m='91570'>And</span> <span m='91790'>it's</span>
  <span m='91940'>likewise</span> <span m='92410'>1/4</span> <span
  m='93450'>for</span> <span m='93640'>being</span> <span m='93870'>at</span>
  <span m='93980'>the</span> <span m='94060'>green</span> <span
  m='94410'>state.</span> <span m='95030'>And</span> <span m='95320'>it's</span>
  <span m='95480'>1/2</span> <span m='95950'>for</span> <span
  m='96090'>staying</span> <span m='96630'>at</span> <span m='96750'>the</span>
  <span m='96820'>blue</span> <span m='97080'>state.</span> <span
  m='97930'>So</span> <span m='98190'>what</span> <span m='98390'>we</span>
  <span m='98520'>can</span> <span m='98670'>say</span> <span
  m='98940'>is</span> <span m='99320'>that</span> <span m='99540'>the</span>
  <span m='100470'>updated</span> <span m='101110'>probabilities</span> <span
  m='101850'>of</span> <span m='101960'>being</span> <span m='102210'>at</span>
  <span m='102310'>these</span> <span m='102510'>different</span> <span
  m='102820'>states</span> <span m='103450'>is</span> <span
  m='104890'>1/2,</span> <span m='105350'>1/4,</span> <span
  m='105830'>and</span> <span m='105910'>1/4,</span> <span m='107390'>as</span>
  <span m='107610'>we've</span> <span m='107820'>just</span> <span
  m='108070'>reasoned.</span> </p><p><span m='109160'>OK.</span> <span
  m='109430'>Let's</span> <span m='109650'>keep</span> <span
  m='109810'>going.</span> <span m='111150'>Given</span> <span
  m='111950'>that</span> <span m='112250'>the</span> <span
  m='112350'>probability</span> <span m='113040'>that</span> <span
  m='113230'>I'm</span> <span m='113410'>at</span> <span m='113550'>the</span>
  <span m='113650'>states</span> <span m='114110'>blue,</span> <span
  m='114450'>orange,</span> <span m='115090'>and</span> <span
  m='115360'>green</span> <span m='115830'>are</span> <span
  m='116010'>given</span> <span m='116340'>by</span> <span
  m='116500'>this</span> <span m='117160'>vector</span> <span
  m='117450'>of</span> <span m='118590'>probabilities,</span> <span
  m='119980'>what's</span> <span m='120590'>the</span> <span
  m='120930'>distribution</span> <span m='121580'>after</span> <span
  m='121910'>two</span> <span m='122080'>steps?</span> <span
  m='122480'>So</span> <span m='122720'>let</span> <span m='123130'>p</span>
  <span m='123610'>double-prime</span> <span m='124250'>B</span> <span
  m='124850'>be</span> <span m='125000'>the</span> <span
  m='125120'>probability</span> <span m='125830'>of</span> <span
  m='125950'>being</span> <span m='126230'>at</span> <span
  m='126300'>state</span> <span m='127100'>B</span> <span
  m='127380'>after</span> <span m='127630'>two</span> <span
  m='127820'>steps,</span> <span m='128199'>starting</span> <span
  m='128720'>from</span> <span m='129259'>B.</span> <span
  m='130620'>Well,</span> <span m='130930'>the</span> <span
  m='131110'>way</span> <span m='131230'>we</span> <span m='131370'>can</span>
  <span m='131510'>figure</span> <span m='131790'>that</span> <span
  m='132030'>out</span> <span m='133000'>is</span> <span m='133780'>by</span>
  <span m='134100'>using</span> <span m='134570'>conditional</span> <span
  m='135310'>probabilities.</span> </p><p><span m='136390'>Let's</span> <span
  m='136540'>look</span> <span m='136700'>at</span> <span m='136790'>the</span>
  <span m='136890'>example</span> <span m='137310'>of</span> <span
  m='138480'>calculating</span> <span m='139090'>the</span> <span
  m='139190'>probability</span> <span m='140240'>of</span> <span
  m='140610'>being</span> <span m='141180'>in</span> <span m='141380'>the</span>
  <span m='141550'>orange</span> <span m='142030'>state</span> <span
  m='142580'>two</span> <span m='142740'>steps</span> <span
  m='143240'>after</span> <span m='144130'>you've</span> <span
  m='144320'>started</span> <span m='144800'>at</span> <span
  m='144920'>the</span> <span m='145000'>blue</span> <span
  m='145250'>state.</span> <span m='145690'>So</span> <span
  m='145810'>here</span> <span m='146100'>was</span> <span m='146500'>the</span>
  <span m='146620'>probabilities</span> <span m='147350'>of</span> <span
  m='147430'>being</span> <span m='147700'>at</span> <span m='147790'>the</span>
  <span m='147890'>different</span> <span m='148230'>states</span> <span
  m='148600'>after</span> <span m='148870'>one</span> <span
  m='149110'>step.</span> <span m='149770'>How</span> <span m='149980'>do</span>
  <span m='150150'>I</span> <span m='150230'>get</span> <span
  m='150540'>to</span> <span m='150630'>the</span> <span
  m='150790'>orange</span> <span m='151160'>state?</span> </p><p><span
  m='151970'>Well</span> <span m='152430'>I</span> <span m='152550'>can</span>
  <span m='152760'>get</span> <span m='152980'>to</span> <span
  m='153040'>the</span> <span m='153200'>orange</span> <span
  m='153590'>state</span> <span m='153960'>from</span> <span
  m='154170'>the</span> <span m='154250'>blue</span> <span
  m='154520'>state.</span> <span m='156390'>And</span> <span
  m='156800'>so</span> <span m='157070'>the</span> <span
  m='157230'>probability</span> <span m='158080'>of</span> <span
  m='158210'>being</span> <span m='158460'>in</span> <span m='158510'>the</span>
  <span m='158650'>orange</span> <span m='158970'>state</span> <span
  m='159370'>after</span> <span m='160230'>two</span> <span
  m='160460'>steps</span> <span m='161050'>is</span> <span m='161770'>the</span>
  <span m='161910'>probability</span> <span m='162680'>of</span> <span
  m='162830'>being</span> <span m='163730'>at</span> <span m='164060'>the</span>
  <span m='164520'>blue</span> <span m='164840'>state</span> <span
  m='165250'>after</span> <span m='165560'>one</span> <span
  m='165830'>step</span> <span m='166630'>times</span> <span
  m='167190'>the</span> <span m='167300'>probability</span> <span
  m='168020'>that</span> <span m='168170'>I</span> <span m='168280'>take</span>
  <span m='168650'>this</span> <span m='168930'>edge</span> <span
  m='169610'>to</span> <span m='169820'>the</span> <span
  m='170100'>orange</span> <span m='171780'>state.</span> <span m='172600'>That
  is,</span> <span m='173130'>it's</span> <span m='173410'>the</span> <span
  m='173520'>probability</span> <span m='174670'>of</span> <span
  m='174890'>going</span> <span m='175340'>from</span> <span m='176070'>B</span>
  <span m='176470'>to</span> <span m='176600'>O--</span> <span
  m='177110'>given</span> <span m='177500'>that</span> <span
  m='177630'>I'm</span> <span m='177830'>at</span> <span m='178130'>B--</span>
  <span m='178750'>times</span> <span m='179390'>the</span> <span
  m='179530'>probability</span> <span m='180480'>of</span> <span
  m='180760'>being</span> <span m='181740'>in</span> <span m='181910'>B</span>
  <span m='182180'>after</span> <span m='182450'>one</span> <span
  m='182660'>step.</span> <span m='183230'>This</span> <span
  m='183540'>then</span> <span m='183730'>is</span> <span m='183870'>the</span>
  <span m='183960'>probability</span> <span m='184540'>of</span> <span
  m='184600'>being</span> <span m='184800'>in</span> <span m='185000'>O</span>
  <span m='185180'>after</span> <span m='185490'>two</span> <span
  m='185660'>steps.</span> </p><p><span m='186280'>And</span> <span
  m='186470'>likewise,</span> <span m='190760'>another</span> <span
  m='191260'>component</span> <span m='191790'>of</span> <span
  m='191870'>the</span> <span m='191960'>probability</span> <span
  m='192560'>of</span> <span m='192630'>being</span> <span m='192870'>at</span>
  <span m='192980'>O</span> <span m='193280'>is</span> <span
  m='193570'>that</span> <span m='193700'>if</span> <span
  m='193870'>you're</span> <span m='194390'>at</span> <span m='194700'>O,</span>
  <span m='195350'>and</span> <span m='195750'>what's</span> <span
  m='195980'>the</span> <span m='196060'>probability</span> <span
  m='196590'>of</span> <span m='196700'>going</span> <span m='197050'>from
  O</span> <span m='197310'>to</span> <span m='197580'>O?</span> <span
  m='199220'>And</span> <span m='199630'>that</span> <span m='199970'>is</span>
  <span m='200190'>this</span> <span m='200370'>1/3</span> <span
  m='201650'>times</span> <span m='201960'>the</span> <span
  m='202050'>probability</span> <span m='202660'>of</span> <span
  m='202730'>being</span> <span m='202990'>at</span> <span m='203070'>O
  at</span> <span m='203280'>all,</span> <span m='203520'>which</span> <span
  m='203710'>is</span> <span m='203810'>1/4.</span> </p><p><span
  m='204740'>And</span> <span m='205140'>the</span> <span
  m='205290'>final</span> <span m='205690'>case,</span> <span
  m='206510'>using</span> <span m='206970'>again</span> <span
  m='208090'>the</span> <span m='208500'>law of</span> <span
  m='208620'>total</span> <span m='208920'>probability,</span> <span
  m='209660'>breaking</span> <span m='209940'>it up</span> <span
  m='210070'>into</span> <span m='210280'>cases,</span> <span
  m='211150'>the</span> <span m='211680'>third</span> <span
  m='212070'>way</span> <span m='212250'>that</span> <span m='212420'>I</span>
  <span m='212500'>can</span> <span m='212740'>get</span> <span
  m='213060'>to</span> <span m='213150'>the</span> <span
  m='213310'>orange</span> <span m='213590'>state</span> <span
  m='213880'>on</span> <span m='213990'>step</span> <span m='214310'>two</span>
  <span m='214990'>is</span> <span m='215340'>by</span> <span
  m='215510'>being</span> <span m='215800'>at</span> <span m='215890'>the</span>
  <span m='215970'>green</span> <span m='216270'>state</span> <span
  m='216590'>on</span> <span m='216720'>step</span> <span m='217050'>one</span>
  <span m='217950'>following</span> <span m='218590'>the</span> <span
  m='218850'>green</span> <span m='219270'>to</span> <span m='219530'>O</span>
  <span m='219920'>edge--</span> <span m='221940'>of</span> <span
  m='222140'>which</span> <span m='222380'>there</span> <span
  m='222570'>isn't</span> <span m='222870'>any,</span> <span
  m='223580'>so</span> <span m='223720'>that's</span> <span
  m='223960'>going</span> <span m='224080'>to</span> <span m='224140'>be</span>
  <span m='224300'>probability</span> <span m='224930'>0--</span> <span
  m='225770'>times</span> <span m='226130'>the</span> <span
  m='226230'>probability</span> <span m='226870'>of</span> <span
  m='226960'>being</span> <span m='227190'>at</span> <span m='227270'>the</span>
  <span m='227340'>green</span> <span m='227600'>state,</span> <span
  m='227960'>which</span> <span m='228140'>is</span> <span
  m='228210'>1/4,</span> <span m='228620'>but</span> <span m='228780'>it</span>
  <span m='228870'>won't</span> <span m='229090'>matter.</span> </p><p><span
  m='229770'>So</span> <span m='229830'>let's</span> <span
  m='230020'>just</span> <span m='230220'>fill</span> <span m='230520'>in</span>
  <span m='230640'>these</span> <span m='230840'>amounts</span> <span
  m='232160'>looking</span> <span m='232560'>at</span> <span
  m='232850'>the</span> <span m='233050'>first</span> <span
  m='233410'>term.</span> <span m='233670'>The</span> <span
  m='233760'>probability</span> <span m='234470'>of</span> <span
  m='235190'>going</span> <span m='235560'>from</span> <span m='235780'>B</span>
  <span m='235990'>to</span> <span m='236090'>O</span> <span
  m='236350'>when</span> <span m='236500'>you're</span> <span
  m='236670'>at</span> <span m='236970'>B</span> <span m='237580'>is</span>
  <span m='237780'>simply</span> <span m='238660'>the</span> <span
  m='239440'>probability</span> <span m='240170'>of</span> <span
  m='240260'>this</span> <span m='240510'>edge.</span> <span
  m='241530'>It's</span> <span m='241860'>1/4.</span> <span
  m='244000'>And</span> <span m='244330'>likewise,</span> <span
  m='245030'>the</span> <span m='245130'>probability</span> <span
  m='246200'>of</span> <span m='246760'>going</span> <span
  m='247060'>from</span> <span m='247200'>O to</span> <span m='247550'>O</span>
  <span m='247910'>given that</span> <span m='248290'>you're</span> <span
  m='248520'>at</span> <span m='248860'>O</span> <span m='249706'>is</span>
  <span m='250130'>the</span> <span m='250240'>probability</span> <span
  m='250890'>of</span> <span m='251000'>this</span> <span
  m='251270'>edge--</span> <span m='251850'>namely</span> <span
  m='252350'>1/3.</span> <span m='253720'>So</span> <span m='253880'>we</span>
  <span m='253990'>can</span> <span m='254120'>fill</span> <span
  m='254370'>that</span> <span m='254640'>term in.</span> <span
  m='254920'>And</span> <span m='255400'>finally</span> <span
  m='255790'>the</span> <span m='255900'>probability</span> <span
  m='256944'>of</span> <span m='257480'>going</span> <span
  m='257860'>from</span> <span m='258110'>G</span> <span m='258555'>to O</span>
  <span m='259000'>is</span> <span m='259190'>0,</span> <span
  m='259980'>given</span> <span m='260269'>that</span> <span
  m='260390'>you're</span> <span m='260570'>at G,</span> <span
  m='261170'>because</span> <span m='261610'>there</span> <span
  m='261769'>isn't</span> <span m='262140'>any</span> <span
  m='263170'>vertex</span> <span m='263660'>there.</span> <span
  m='263950'>And</span> <span m='264160'>then</span> <span m='264300'>you</span>
  <span m='264440'>fill</span> <span m='264730'>in</span> <span
  m='264830'>those</span> <span m='265090'>probabilities</span> <span
  m='266170'>and</span> <span m='266480'>do</span> <span m='266580'>the</span>
  <span m='266740'>arithmetic.</span> <span m='267650'>You</span> <span
  m='267790'>come</span> <span m='268040'>out</span> <span
  m='268490'>with</span> <span m='268760'>5/24</span> <span
  m='270650'>probability</span> <span m='271380'>of</span> <span
  m='271480'>being</span> <span m='271840'>in</span> <span m='271920'>the</span>
  <span m='272050'>orange</span> <span m='272430'>state</span> <span
  m='273430'>after</span> <span m='273720'>two</span> <span
  m='273910'>steps.</span> </p><p><span m='274770'>Well</span> <span
  m='274900'>the</span> <span m='274990'>same</span> <span
  m='275240'>calculation,</span> <span m='276120'>you</span> <span
  m='276240'>can</span> <span m='276390'>figure</span> <span
  m='276720'>out</span> <span m='276820'>what's</span> <span
  m='277080'>the</span> <span m='277230'>probability</span> <span
  m='277840'>of</span> <span m='277930'>being</span> <span m='278140'>at</span>
  <span m='278250'>the</span> <span m='278710'>blue</span> <span
  m='278910'>state</span> <span m='279240'>or</span> <span m='279330'>the</span>
  <span m='279400'>green</span> <span m='279650'>step</span> <span
  m='280290'>after</span> <span m='280570'>two</span> <span
  m='280740'>steps.</span> <span m='281030'>And</span> <span
  m='281090'>there's</span> <span m='281260'>the</span> <span
  m='281410'>answer.</span> <span m='282110'>There's</span> <span
  m='282280'>a</span> <span m='282350'>50/50</span> <span
  m='283010'>chance</span> <span m='283350'>of</span> <span
  m='283460'>being</span> <span m='283740'>at</span> <span m='283840'>the</span>
  <span m='283920'>blue</span> <span m='284130'>state</span> <span
  m='284420'>after</span> <span m='284670'>two</span> <span
  m='284840'>steps,</span> <span m='285210'>5/24</span> <span
  m='286060'>as</span> <span m='286210'>we</span> <span m='286350'>saw</span>
  <span m='286990'>at</span> <span m='287170'>the</span> <span
  m='287300'>orange</span> <span m='287610'>state,</span> <span
  m='288170'>and</span> <span m='288440'>the</span> <span m='288540'>rest</span>
  <span m='288900'>of</span> <span m='289210'>it</span> <span
  m='289590'>is</span> <span m='289750'>7/24</span> <span m='290360'>is</span>
  <span m='291350'>the</span> <span m='291440'>probability</span> <span
  m='292540'>of</span> <span m='292750'>being</span> <span m='293010'>at</span>
  <span m='293110'>the</span> <span m='293180'>green</span> <span
  m='293480'>state.</span> </p><p><span m='295900'>OK.</span> <span
  m='296400'>So</span> <span m='296640'>what's</span> <span
  m='296880'>going</span> <span m='297120'>on</span> <span m='297210'>in</span>
  <span m='297320'>general?</span> <span m='298630'>And</span> <span
  m='298960'>we</span> <span m='299170'>can</span> <span
  m='299460'>explain</span> <span m='300170'>how</span> <span
  m='300390'>to</span> <span m='300510'>do</span> <span m='300660'>these</span>
  <span m='300870'>calculations</span> <span m='301690'>by</span> <span
  m='302600'>using</span> <span m='302900'>a</span> <span
  m='302960'>little</span> <span m='303130'>bit</span> <span
  m='303230'>of</span> <span m='303280'>linear</span> <span
  m='303650'>algebra.</span> <span m='304760'>So</span> <span
  m='305210'>let's</span> <span m='305480'>define</span> <span
  m='305870'>the</span> <span m='306040'>edge</span> <span
  m='306360'>probability</span> <span m='306990'>matrix</span> <span
  m='307530'>of</span> <span m='307640'>a</span> <span m='307720'>random</span>
  <span m='308090'>walk</span> <span m='308350'>graph</span> <span
  m='309370'>is</span> <span m='309690'>just</span> <span m='309970'>the</span>
  <span m='310120'>adjacency</span> <span m='310780'>matrix</span> <span
  m='311540'>of</span> <span m='311970'>the</span> <span
  m='312600'>graph,</span> <span m='313340'>except that</span> <span
  m='313800'>instead</span> <span m='314160'>of</span> <span
  m='314220'>using</span> <span m='314540'>0's</span> <span
  m='314960'>and</span> <span m='315040'>1's</span> <span m='315460'>to</span>
  <span m='315540'>indicate</span> <span m='316050'>whether</span> <span
  m='316350'>an</span> <span m='316460'>edge</span> <span m='316765'>is</span>
  <span m='317450'>not</span> <span m='317820'>present</span> <span
  m='318210'>or</span> <span m='318330'>present,</span> <span
  m='319080'>I'll</span> <span m='319360'>use</span> <span m='321270'>in</span>
  <span m='321420'>the</span> <span m='321560'>I, J</span> <span
  m='321950'>position</span> <span m='322490'>of</span> <span
  m='322580'>the</span> <span m='322650'>matrix--</span> <span
  m='323600'>the</span> <span m='323730'>probability</span> <span
  m='324660'>of</span> <span m='324950'>the</span> <span m='325160'>edge</span>
  <span m='325470'>that</span> <span m='325590'>goes</span> <span
  m='325880'>from</span> <span m='326060'>I</span> <span m='326495'>to
  J--</span> <span m='327190'>if</span> <span m='327340'>there</span> <span
  m='327520'>is</span> <span m='327630'>an</span> <span m='327720'>edge--</span>
  <span m='327885'>and</span> <span m='328050'>0</span> <span
  m='328520'>if</span> <span m='328670'>there</span> <span
  m='328870'>isn't</span> <span m='329130'>any</span> <span
  m='329390'>edge.</span> </p><p><span m='331510'>Let's</span> <span
  m='331770'>look</span> <span m='331930'>at</span> <span m='331990'>an</span>
  <span m='332080'>example.</span> <span m='332640'>So</span> <span
  m='332740'>here</span> <span m='332950'>is</span> <span m='333070'>the</span>
  <span m='333180'>way</span> <span m='333340'>we'd</span> <span
  m='333630'>fill</span> <span m='333900'>it</span> <span m='333970'>in</span>
  <span m='334080'>abstractly</span> <span m='334790'>for</span> <span
  m='335030'>our</span> <span m='335200'>three-state</span> <span
  m='336240'>graph.</span> <span m='337330'>It'll</span> <span
  m='337500'>be</span> <span m='337630'>a</span> <span m='337680'>3</span> <span
  m='337900'>by</span> <span m='338040'>3</span> <span m='338270'>matrix</span>
  <span m='338800'>with</span> <span m='339400'>the</span> <span
  m='339520'>probabilities</span> <span m='340290'>of</span> <span
  m='340500'>the</span> <span m='340650'>successive</span> <span
  m='341250'>edges</span> <span m='343050'>in</span> <span m='343440'>the</span>
  <span m='343570'>corresponding</span> <span m='344200'>position.</span> <span
  m='344700'>So</span> <span m='344870'>this</span> <span m='345090'>is</span>
  <span m='345250'>the</span> <span m='345740'>position</span> <span
  m='346200'>in</span> <span m='346430'>the</span> <span m='347400'>B,</span>
  <span m='347832'>B</span> <span m='349128'>coordinate</span> <span
  m='349560'>is</span> <span m='349760'>the</span> <span
  m='349860'>probability</span> <span m='350520'>of the</span> <span
  m='350670'>edge</span> <span m='350850'>from</span> <span m='350990'>B
  to</span> <span m='351200'>B.</span> <span m='351460'>The</span> <span
  m='351950'>O,</span> <span m='352580'>B</span> <span
  m='353910'>coordinate,</span> <span m='354660'>if</span> <span
  m='354840'>you</span> <span m='354950'>think</span> <span m='355190'>of</span>
  <span m='355270'>the</span> <span m='355370'>columns</span> <span
  m='355880'>as</span> <span m='356020'>labeled</span> <span
  m='358230'>blue,</span> <span m='358830'>orange,</span> <span
  m='359290'>green;</span> <span m='359640'>and</span> <span
  m='359750'>the</span> <span m='359840'>rows as</span> <span
  m='360240'>labeled</span> <span m='360550'>blue,</span> <span
  m='360970'>orange,</span> <span m='361440'>green.</span> <span m='361790'>And
  this</span> <span m='361990'>is</span> <span m='362180'>the</span> <span
  m='362920'>orange,</span> <span m='363450'>blue</span> <span
  m='363790'>coordinate.</span> <span m='364195'>And it's</span> <span
  m='364600'>the</span> <span m='364690'>probability</span> <span
  m='365510'>of</span> <span m='365680'>the</span> <span m='365860'>edge</span>
  <span m='366160'>from</span> <span m='367300'>0</span> <span
  m='367760'>to</span> <span m='367880'>B.</span> </p><p><span
  m='368580'>Let's</span> <span m='368860'>fill</span> <span
  m='369180'>in</span> <span m='369320'>the</span> <span m='369410'>first</span>
  <span m='369810'>row,</span> <span m='370880'>which</span> <span
  m='371190'>was--</span> <span m='371910'>this</span> <span
  m='372080'>is</span> <span m='372200'>just</span> <span m='372440'>read</span>
  <span m='372680'>directly</span> <span m='373170'>off</span> <span
  m='373420'>the</span> <span m='373510'>graph.</span> <span
  m='374390'>It</span> <span m='374600'>was</span> <span m='374860'>the</span>
  <span m='375070'>edges</span> <span m='375490'>out</span> <span
  m='375700'>of</span> <span m='375910'>B</span> <span m='376860'>that</span>
  <span m='377160'>went</span> <span m='377380'>from</span> <span
  m='377550'>B</span> <span m='377770'>to</span> <span m='377840'>B,</span>
  <span m='378210'>from</span> <span m='378430'>B to</span> <span
  m='378755'>O,</span> <span m='379080'>and</span> <span m='379180'>from</span>
  <span m='379330'>B</span> <span m='379615'>to</span> <span
  m='379900'>green--</span> <span m='380190'>G.</span> <span
  m='380720'>And</span> <span m='380930'>it had</span> <span
  m='381150'>those</span> <span m='381380'>weights.</span> <span
  m='382220'>And</span> <span m='382470'>if</span> <span m='382600'>I</span>
  <span m='382690'>fill</span> <span m='383020'>in</span> <span
  m='383150'>the</span> <span m='383250'>rest</span> <span m='383540'>of</span>
  <span m='383650'>it,</span> <span m='384060'>I</span> <span
  m='384190'>get</span> <span m='384500'>the</span> <span m='385560'>edge</span>
  <span m='385910'>probability</span> <span m='386520'>matrix</span> <span
  m='387090'>for</span> <span m='387350'>our</span> <span
  m='387580'>simple</span> <span m='388070'>three-state</span> <span
  m='389340'>graph.</span> <span m='390890'>And</span> <span
  m='391100'>there</span> <span m='391330'>it</span> <span m='391380'>is.</span>
  </p><p><span m='391660'>So this</span> <span m='391850'>last</span> <span
  m='392180'>one</span> <span m='392750'>shows</span> <span
  m='393030'>the</span> <span m='393110'>fact</span> <span
  m='393460'>that</span> <span m='394000'>there</span> <span
  m='394310'>is</span> <span m='395140'>a</span> <span m='395220'>certain</span>
  <span m='395630'>edge</span> <span m='396070'>from</span> <span
  m='397370'>green</span> <span m='397740'>to</span> <span
  m='397840'>blue.</span> <span m='398380'>The</span> <span
  m='398500'>only</span> <span m='398740'>place</span> <span
  m='399010'>you</span> <span m='399240'>can go</span> <span
  m='399430'>from</span> <span m='399620'>green</span> <span
  m='399900'>is</span> <span m='400030'>to</span> <span m='400130'>blue,</span>
  <span m='400530'>and</span> <span m='400650'>you</span> <span
  m='400780'>can't</span> <span m='401100'>go</span> <span m='401340'>to</span>
  <span m='401520'>either</span> <span m='401890'>orange</span> <span
  m='402390'>or</span> <span m='402590'>green</span> <span m='403380'>in</span>
  <span m='403600'>one</span> <span m='403830'>step.</span> </p><p><span
  m='405490'>OK.</span> <span m='406110'>So</span> <span m='406510'>why</span>
  <span m='406750'>are</span> <span m='406840'>we</span> <span
  m='406960'>bringing</span> <span m='407330'>up</span> <span
  m='407970'>the</span> <span m='408340'>matrix?</span> <span
  m='409000'>Well</span> <span m='409150'>if</span> <span m='409300'>you</span>
  <span m='409410'>looked</span> <span m='409660'>at</span> <span
  m='409770'>the</span> <span m='409870'>way</span> <span m='410060'>we</span>
  <span m='410300'>updated</span> <span m='411330'>the</span> <span
  m='411420'>state</span> <span m='411900'>to</span> <span m='411990'>go</span>
  <span m='412230'>from</span> <span m='412540'>the</span> <span
  m='414540'>one-step</span> <span m='415070'>distribution</span> <span
  m='415660'>to</span> <span m='415730'>the</span> <span
  m='415870'>two-step</span> <span m='416340'>distribution,</span> <span
  m='417290'>it</span> <span m='417440'>was</span> <span
  m='417610'>really</span> <span m='417860'>a</span> <span
  m='417910'>matrix</span> <span m='418330'>multiply.</span> <span
  m='418910'>And</span> <span m='419060'>in</span> <span
  m='419150'>general,</span> <span m='419830'>to</span> <span
  m='419990'>do</span> <span m='420180'>an</span> <span
  m='420320'>update,</span> <span m='421050'>you're</span> <span
  m='421170'>just</span> <span m='421390'>going</span> <span
  m='421490'>to</span> <span m='421560'>do</span> <span m='421740'>a</span>
  <span m='422240'>vector</span> <span m='422610'>matrix</span> <span
  m='423070'>multiplication.</span> </p><p><span m='424330'>If</span> <span
  m='424620'>you</span> <span m='425140'>have</span> <span m='425500'>the</span>
  <span m='425610'>probabilities</span> <span m='426380'>of</span> <span
  m='426530'>being</span> <span m='426870'>in</span> <span m='427310'>the</span>
  <span m='427390'>successive</span> <span m='427960'>states</span> <span
  m='428410'>B,</span> <span m='428795'>O,</span> <span m='429180'>and G,</span>
  <span m='429850'>and</span> <span m='430060'>you</span> <span
  m='430460'>do</span> <span m='430590'>a</span> <span m='431260'>vector</span>
  <span m='431700'>matrix</span> <span m='432160'>multiplication</span> <span
  m='433370'>using</span> <span m='433780'>the</span> <span
  m='435700'>probability</span> <span m='436420'>matrix</span> <span
  m='436980'>of</span> <span m='437180'>the</span> <span
  m='437270'>graph,</span> <span m='438080'>you</span> <span
  m='438230'>get</span> <span m='438630'>the</span> <span
  m='438900'>updated</span> <span m='439800'>vector</span> <span
  m='440210'>of</span> <span m='440330'>distributions.</span> <span
  m='442110'>And</span> <span m='442270'>that's</span> <span
  m='442530'>easy</span> <span m='442760'>to</span> <span
  m='442870'>check</span> <span m='443200'>just</span> <span
  m='443410'>from</span> <span m='443590'>the</span> <span
  m='443680'>definitions,</span> <span m='444480'>and</span> <span
  m='444680'>from</span> <span m='444820'>the</span> <span
  m='444920'>definition</span> <span m='445460'>of</span> <span
  m='445870'>vector</span> <span m='446250'>times</span> <span
  m='446560'>matrix,</span> <span m='447030'>which</span> <span
  m='447260'>I</span> <span m='447380'>assume</span> <span
  m='447720'>you're</span> <span m='447870'>familiar</span> <span
  m='448380'>with.</span> </p><p><span m='450100'>So</span> <span
  m='451190'>now</span> <span m='451350'>we</span> <span m='451440'>can</span>
  <span m='451590'>ask</span> <span m='451780'>what's</span> <span
  m='452100'>the</span> <span m='452380'>distribution</span> <span
  m='453000'>after</span> <span m='453310'>t</span> <span
  m='453520'>steps,</span> <span m='454320'>starting</span> <span
  m='454950'>from</span> <span m='455210'>some</span> <span
  m='455440'>particular</span> <span m='457260'>given</span> <span
  m='457570'>distribution--</span> <span m='458140'>say,</span> <span
  m='458290'>starting</span> <span m='458660'>at</span> <span
  m='458740'>state</span> <span m='459060'>B,</span> <span m='459180'>or</span>
  <span m='459350'>starting</span> <span m='459690'>at</span> <span
  m='459760'>any</span> <span m='460000'>possible</span> <span
  m='460970'>distribution</span> <span m='462000'>of</span> <span
  m='462740'>probabilities</span> <span m='463460'>to</span> <span
  m='463560'>the</span> <span m='463670'>different</span> <span
  m='464000'>states.</span> <span m='465090'>And</span> <span
  m='465530'>the</span> <span m='465630'>way</span> <span m='465900'>that
  we</span> <span m='466070'>can</span> <span m='466190'>figure</span> <span
  m='466470'>that</span> <span m='466700'>out--</span> <span
  m='467370'>so</span> <span m='467430'>I'm</span> <span
  m='467580'>interested</span> <span m='468000'>in</span> <span
  m='468150'>other</span> <span m='468280'>words</span> <span
  m='468510'>is</span> <span m='468620'>the</span> <span
  m='468710'>probability</span> <span m='469350'>of</span> <span
  m='469470'>being</span> <span m='470020'>in</span> <span m='470330'>O</span>
  <span m='470630'>after</span> <span m='470950'>t</span> <span
  m='471150'>steps</span> <span m='471580'>G</span> <span
  m='471785'>after</span> <span m='472130'>t</span> <span
  m='472300'>steps</span> <span m='472690'>in</span> <span m='473110'>B</span>
  <span m='473340'>after</span> <span m='473630'>t</span> <span
  m='473820'>steps,</span> <span m='474250'>say,</span> <span
  m='474430'>starting</span> <span m='474850'>from</span> <span
  m='475040'>state</span> <span m='475440'>B.</span> <span m='476770'>And</span>
  <span m='476970'>what</span> <span m='477150'>happens</span> <span
  m='477620'>also</span> <span m='478440'>as</span> <span m='478850'>t</span>
  <span m='479400'>approaches</span> <span m='479660'>infinity?</span> <span
  m='479935'>And</span> <span m='480210'>these</span> <span
  m='480450'>are</span> <span m='480550'>sort</span> <span m='480730'>of</span>
  <span m='480850'>two</span> <span m='481010'>basic</span> <span
  m='481430'>questions</span> <span m='481920'>that</span> <span
  m='482020'>we're</span> <span m='482170'>going</span> <span
  m='482310'>to</span> <span m='482370'>be</span> <span
  m='482560'>asking.</span> </p><p><span m='483310'>So</span> <span
  m='483480'>first</span> <span m='483770'>of</span> <span
  m='483880'>all,</span> <span m='483980'>how</span> <span m='484160'>do</span>
  <span m='484220'>you</span> <span m='484400'>calculate</span> <span
  m='485240'>starting</span> <span m='486030'>at</span> <span
  m='486220'>a</span> <span m='486280'>given</span> <span
  m='486590'>distribution</span> <span m='487290'>p B,</span> <span m='487725'>p
  O,</span> <span m='488160'>p G</span> <span m='488810'>where</span> <span
  m='489010'>you're</span> <span m='489140'>going</span> <span
  m='489280'>to</span> <span m='489330'>be</span> <span m='489710'>after</span>
  <span m='490040'>t</span> <span m='490210'>steps?</span> <span
  m='490970'>Well,</span> <span m='491160'>you're</span> <span
  m='491320'>just</span> <span m='492460'>continually</span> <span
  m='493190'>updating,</span> <span m='494340'>which</span> <span
  m='494570'>means</span> <span m='495070'>multiplying</span> <span
  m='495860'>by</span> <span m='496090'>M</span> <span m='497930'>t</span> <span
  m='498390'>times.</span> <span m='499330'>So</span> <span
  m='499610'>the</span> <span m='499850'>distribution</span> <span
  m='500610'>after</span> <span m='500970'>t</span> <span
  m='501180'>steps</span> <span m='501700'>is</span> <span
  m='501880'>gotten</span> <span m='502260'>by</span> <span
  m='502420'>taking</span> <span m='502830'>the</span> <span
  m='502930'>initial</span> <span m='503290'>distribution</span> <span
  m='503950'>times</span> <span m='504540'>the</span> <span
  m='504690'>t-th</span> <span m='505030'>power</span> <span
  m='505460'>of</span> <span m='505600'>M.</span> </p><p><span
  m='506200'>Now</span> <span m='506330'>this</span> <span m='506530'>is</span>
  <span m='506630'>actually</span> <span m='506940'>already</span> <span
  m='507270'>useful</span> <span m='507650'>computationally,</span> <span
  m='508490'>because</span> <span m='509180'>it</span> <span
  m='509400'>means</span> <span m='509780'>that</span> <span
  m='510190'>since</span> <span m='510510'>you</span> <span
  m='510660'>can</span> <span m='510840'>compute</span> <span
  m='511240'>a</span> <span m='511300'>matrix</span> <span
  m='511770'>power</span> <span m='512200'>by</span> <span
  m='512960'>successive</span> <span m='513539'>squarings,</span> <span
  m='514730'>you</span> <span m='514940'>actually</span> <span
  m='515470'>only</span> <span m='515770'>need</span> <span
  m='516049'>about</span> <span m='516390'>log</span> <span m='516840'>of</span>
  <span m='517010'>t</span> <span m='518000'>matrix</span> <span
  m='518419'>multiplications</span> <span m='519710'>in</span> <span
  m='519929'>order</span> <span m='520169'>to</span> <span m='520289'>be</span>
  <span m='520450'>able</span> <span m='520799'>to</span> <span
  m='521000'>figure</span> <span m='521419'>out</span> <span
  m='521720'>what's</span> <span m='521970'>the</span> <span
  m='522059'>distribution</span> <span m='523440'>of</span> <span
  m='524580'>probabilities</span> <span m='526000'>after</span> <span
  m='526360'>t</span> <span m='526550'>steps</span> <span m='527620'>of</span>
  <span m='528510'>the</span> <span m='530130'>graph.</span> </p><p><span
  m='532200'>Then</span> <span m='532670'>the</span> <span
  m='533160'>crucial</span> <span m='534170'>concept</span> <span
  m='534670'>that</span> <span m='534860'>we</span> <span m='534980'>want</span>
  <span m='535170'>to</span> <span m='535290'>examine--</span> <span
  m='535790'>and</span> <span m='535870'>we'll</span> <span
  m='535990'>make</span> <span m='536210'>a</span> <span m='536270'>lot</span>
  <span m='536490'>of</span> <span m='536580'>use</span> <span
  m='536840'>of</span> <span m='537000'>in</span> <span m='537080'>the</span>
  <span m='537160'>next</span> <span m='537430'>video</span> <span
  m='537760'>when</span> <span m='537870'>we</span> <span m='538020'>talk</span>
  <span m='538250'>about</span> <span m='538730'>a</span> <span
  m='538790'>page</span> <span m='539090'>rank--</span> <span
  m='539790'>is</span> <span m='540120'>the</span> <span m='540260'>idea</span>
  <span m='540810'>of</span> <span m='540940'>a</span> <span
  m='540990'>stationary</span> <span m='541750'>distribution.</span> <span
  m='542680'>So a</span> <span m='542940'>stationary</span> <span
  m='543480'>distribution</span> <span m='544120'>means</span> <span
  m='545000'>that</span> <span m='547330'>once</span> <span
  m='547820'>you're</span> <span m='547880'>in</span> <span
  m='547970'>the</span> <span m='548500'>stationary</span> <span
  m='549020'>distribution,</span> <span m='549790'>it's</span> <span
  m='550110'>stable.</span> <span m='550720'>You're</span> <span
  m='550770'>going</span> <span m='550920'>to</span> <span
  m='551240'>stay</span> <span m='551760'>in</span> <span m='552010'>that</span>
  <span m='552450'>distribution.</span> <span m='553220'>You're</span> <span
  m='553320'>not</span> <span m='553510'>going</span> <span m='553600'>to</span>
  <span m='553660'>be</span> <span m='553790'>in</span> <span
  m='553870'>any</span> <span m='554070'>particular</span> <span
  m='555720'>state,</span> <span m='556620'>but</span> <span
  m='557760'>you'll</span> <span m='557900'>have</span> <span
  m='558100'>a</span> <span m='558670'>vector</span> <span m='559100'>of</span>
  <span m='559190'>probabilities</span> <span m='559970'>of</span> <span
  m='560080'>being</span> <span m='560300'>in</span> <span m='560360'>the</span>
  <span m='560480'>different</span> <span m='560820'>states.</span> <span
  m='561170'>And</span> <span m='561270'>one</span> <span m='561470'>step</span>
  <span m='561750'>later,</span> <span m='562160'>that</span> <span
  m='562410'>vector's</span> <span m='562840'>not</span> <span
  m='563010'>going</span> <span m='563150'>to</span> <span
  m='563220'>change.</span> <span m='564300'>So</span> <span
  m='564690'>what</span> <span m='565010'>it</span> <span
  m='565160'>means</span> <span m='565420'>is</span> <span
  m='565590'>that</span> <span m='565760'>the</span> <span
  m='565840'>next-step</span> <span m='566520'>distribution</span> <span
  m='567310'>is</span> <span m='567580'>the</span> <span m='567680'>same</span>
  <span m='568210'>as</span> <span m='568420'>the</span> <span
  m='568550'>current</span> <span m='568910'>distribution.</span> </p><p><span
  m='570630'>What's</span> <span m='570950'>the</span> <span
  m='571680'>stationary</span> <span m='572190'>distribution</span> <span
  m='572850'>here?</span> <span m='573250'>Well,</span> <span
  m='573610'>the</span> <span m='573690'>way</span> <span
  m='573820'>we're</span> <span m='573910'>going</span> <span
  m='574010'>to</span> <span m='574060'>have</span> <span m='574230'>to</span>
  <span m='574350'>calculate</span> <span m='574970'>that</span> <span
  m='575190'>is</span> <span m='575720'>here's</span> <span
  m='575960'>how</span> <span m='576060'>you</span> <span
  m='576180'>update.</span> <span m='576630'>This</span> <span
  m='576830'>is</span> <span m='576950'>the</span> <span
  m='577060'>result</span> <span m='577470'>of</span> <span
  m='577580'>the</span> <span m='579690'>vector</span> <span
  m='580040'>matrix</span> <span m='580440'>multiplication.</span> <span
  m='581200'>But</span> <span m='581350'>let's</span> <span
  m='581570'>just</span> <span m='581870'>spell</span> <span
  m='582290'>it</span> <span m='582350'>out</span> <span m='582530'>in</span>
  <span m='582620'>terms</span> <span m='582890'>of</span> <span
  m='582960'>the</span> <span m='583050'>conditional</span> <span
  m='583530'>probabilities.</span> <span m='584560'>After</span> <span
  m='584920'>one</span> <span m='585150'>step,</span> <span m='585690'>if</span>
  <span m='585860'>the</span> <span m='585990'>original</span> <span
  m='586410'>distribution</span> <span m='587030'>is</span> <span m='587150'>p
  B,</span> <span m='588096'>p O,</span> <span m='588570'>p G,</span> <span
  m='589620'>then</span> <span m='590820'>the</span> <span m='591230'>new</span>
  <span m='591490'>probability</span> <span m='592150'>of</span> <span
  m='592230'>being</span> <span m='592490'>in</span> <span
  m='592580'>state</span> <span m='592970'>B,</span> <span m='593170'>the</span>
  <span m='593310'>only</span> <span m='593500'>way</span> <span
  m='593660'>you</span> <span m='593780'>can</span> <span m='593930'>get</span>
  <span m='594200'>there</span> <span m='594450'>is</span> <span
  m='595140'>by</span> <span m='596590'>following</span> <span
  m='597220'>the</span> <span m='597480'>edge</span> <span
  m='597720'>from</span> <span m='597860'>B</span> <span m='598125'>to B</span>
  <span m='598390'>with</span> <span m='598610'>probability</span> <span
  m='599230'>1/2.</span> <span m='599710'>And</span> <span
  m='599830'>that's</span> <span m='600060'>times</span> <span
  m='600350'>the</span> <span m='600440'>probability</span> <span
  m='600980'>of</span> <span m='601080'>being</span> <span m='601370'>at</span>
  <span m='601520'>B.</span> </p><p><span m='602790'>And</span> <span
  m='604200'>the</span> <span m='604810'>other</span> <span
  m='605030'>way</span> <span m='605200'>you</span> <span m='605290'>can</span>
  <span m='605450'>get</span> <span m='605650'>to</span> <span
  m='605730'>B</span> <span m='606030'>is</span> <span m='606210'>by</span>
  <span m='606380'>being</span> <span m='606870'>at</span> <span
  m='607850'>the</span> <span m='607930'>green</span> <span
  m='608220'>state.</span> <span m='609000'>And</span> <span
  m='609230'>then</span> <span m='609640'>one</span> <span
  m='609890'>step</span> <span m='610140'>later</span> <span
  m='610330'>you're</span> <span m='610510'>certain</span> <span
  m='610820'>to</span> <span m='610910'>be</span> <span m='611110'>at</span>
  <span m='611210'>B.</span> <span m='611530'>So</span> <span
  m='611620'>that</span> <span m='611830'>adds</span> <span m='612100'>a</span>
  <span m='612150'>contribution</span> <span m='612760'>of</span> <span
  m='612860'>1</span> <span m='613140'>times</span> <span m='613450'>p G.
  And</span> <span m='613870'>likewise</span> <span m='614360'>for</span> <span
  m='615210'>p--</span> <span m='615730'>the</span> <span
  m='616000'>updated</span> <span m='616970'>probability</span> <span
  m='617560'>of</span> <span m='617620'>being</span> <span m='617820'>at</span>
  <span m='617910'>the</span> <span m='618030'>orange</span> <span
  m='618330'>state</span> <span m='618580'>and</span> <span
  m='618670'>the</span> <span m='618760'>green</span> <span
  m='619030'>state.</span> </p><p><span m='619450'>And what</span> <span
  m='619630'>we</span> <span m='619740'>want</span> <span m='620610'>is</span>
  <span m='621420'>that</span> <span m='622000'>these</span> <span
  m='622640'>updated</span> <span m='623820'>probabilities</span> <span
  m='624510'>are</span> <span m='624630'>the</span> <span m='624710'>same</span>
  <span m='625130'>as</span> <span m='625400'>the</span> <span
  m='625530'>ones</span> <span m='625900'>that</span> <span
  m='626060'>I'm</span> <span m='626170'>starting</span> <span
  m='626660'>with.</span> <span m='626860'>That's</span> <span
  m='627110'>the</span> <span m='627210'>definition</span> <span
  m='627750'>of</span> <span m='627820'>stability.</span> <span
  m='628700'>You</span> <span m='628930'>update</span> <span
  m='629500'>the</span> <span m='629590'>vector</span> <span m='630080'>p
  B,</span> <span m='630530'>p O,</span> <span m='630980'>p G,</span> <span
  m='631670'>and</span> <span m='631840'>you</span> <span m='631950'>get</span>
  <span m='632240'>the</span> <span m='632330'>same</span> <span
  m='632750'>vector.</span> <span m='633740'>That's</span> <span
  m='633970'>what</span> <span m='634140'>makes</span> <span
  m='634400'>it</span> <span m='634520'>stable.</span> </p><p><span
  m='635520'>And</span> <span m='635710'>of</span> <span
  m='635780'>course,</span> <span m='636310'>a side</span> <span
  m='636740'>constraint.</span> <span m='637300'>Since</span> <span
  m='637520'>you</span> <span m='637640'>can</span> <span
  m='637780'>always</span> <span m='638120'>solve</span> <span
  m='638590'>a</span> <span m='638670'>system</span> <span m='639010'>of</span>
  <span m='639100'>equations</span> <span m='639550'>like</span> <span
  m='639740'>this</span> <span m='639960'>by</span> <span
  m='640080'>letting</span> <span m='640360'>all</span> <span
  m='640550'>the</span> <span m='640640'>p's</span> <span m='640910'>be</span>
  <span m='641050'>0,</span> <span m='641560'>which</span> <span
  m='641790'>is</span> <span m='641920'>degenerate,</span> <span
  m='642810'>we</span> <span m='643130'>add</span> <span m='643400'>the</span>
  <span m='643480'>constraint</span> <span m='644050'>that</span> <span
  m='644250'>the</span> <span m='644340'>sum</span> <span m='644720'>of</span>
  <span m='644920'>the</span> <span m='645020'>probabilities</span> <span
  m='645780'>of</span> <span m='645910'>being</span> <span m='646170'>in</span>
  <span m='646290'>the</span> <span m='646370'>states</span> <span
  m='646720'>has</span> <span m='646930'>to</span> <span m='647020'>be</span>
  <span m='647180'>1.</span> <span m='648880'>Well</span> <span
  m='649780'>if</span> <span m='649990'>we</span> <span m='650380'>solve</span>
  <span m='650780'>that</span> <span m='651100'>simple</span> <span
  m='651540'>3</span> <span m='651750'>by</span> <span m='651910'>3</span> <span
  m='652280'>system</span> <span m='652690'>of</span> <span
  m='652790'>equations,</span> <span m='653900'>then</span> <span
  m='654330'>it</span> <span m='654470'>turns</span> <span m='654780'>out</span>
  <span m='655000'>that</span> <span m='655150'>the</span> <span
  m='655240'>stable</span> <span m='655610'>distribution</span> <span
  m='656330'>is</span> <span m='656660'>there's</span> <span
  m='656840'>an</span> <span m='656940'>8/15</span> <span
  m='657750'>chance</span> <span m='658080'>of</span> <span
  m='658190'>being</span> <span m='658430'>in</span> <span
  m='658510'>state</span> <span m='658880'>B,</span> <span m='659420'>a</span>
  <span m='659530'>3/15</span> <span m='660450'>chance</span> <span
  m='660790'>of</span> <span m='660940'>being</span> <span m='661150'>in</span>
  <span m='661250'>state</span> <span m='661540'>orange,</span> <span
  m='662210'>and</span> <span m='662400'>a</span> <span m='662450'>4/15</span>
  <span m='664100'>chance</span> <span m='664450'>of</span> <span
  m='664540'>being</span> <span m='664870'>in</span> <span
  m='664960'>state</span> <span m='665340'>green.</span> </p><p><span
  m='666070'>And</span> <span m='666210'>you</span> <span
  m='666310'>should</span> <span m='666510'>check</span> <span
  m='666810'>that</span> <span m='667180'>yourself</span> <span
  m='667760'>by</span> <span m='668320'>asking</span> <span
  m='670240'>what's</span> <span m='670500'>the</span> <span
  m='670580'>probability</span> <span m='671330'>of</span> <span
  m='671490'>being</span> <span m='672270'>in</span> <span m='672470'>p B</span>
  <span m='673060'>after</span> <span m='673330'>one</span> <span
  m='673560'>step</span> <span m='673940'>given</span> <span
  m='674280'>these</span> <span m='674520'>probabilities?</span> <span
  m='675430'>And</span> <span m='675630'>I'm</span> <span m='675790'>not</span>
  <span m='675980'>going</span> <span m='676110'>to</span> <span
  m='676210'>talk</span> <span m='676480'>you</span> <span
  m='676590'>through</span> <span m='676850'>that.</span> <span
  m='677190'>But</span> <span m='677700'>just</span> <span m='677930'>to</span>
  <span m='678000'>verify</span> <span m='678570'>and</span> <span
  m='679020'>imprint</span> <span m='679470'>the</span> <span
  m='679620'>idea</span> <span m='680070'>of</span> <span
  m='680140'>stability,</span> <span m='681020'>that's</span> <span
  m='681230'>one</span> <span m='681470'>that's</span> <span
  m='681640'>worth</span> <span m='681880'>stopping</span> <span
  m='682330'>the</span> <span m='682420'>video</span> <span
  m='682760'>for</span> <span m='682910'>a</span> <span m='682940'>moment</span>
  <span m='683350'>to</span> <span m='683480'>check</span> <span
  m='683980'>and</span> <span m='684290'>do</span> <span m='684410'>a</span>
  <span m='684450'>little</span> <span m='684680'>arithmetic</span> <span
  m='685680'>with</span> <span m='685890'>a</span> <span
  m='686330'>pencil</span> <span m='686650'>and</span> <span
  m='686730'>paper.</span> </p><p><span m='688370'>OK.</span> <span
  m='689210'>So</span> <span m='689500'>in</span> <span
  m='689650'>general,</span> <span m='690830'>what</span> <span
  m='691210'>we're</span> <span m='691340'>going</span> <span
  m='691480'>to</span> <span m='691570'>do</span> <span m='691950'>is</span>
  <span m='692140'>we're</span> <span m='692290'>trying</span> <span
  m='692490'>to</span> <span m='692560'>find</span> <span m='692920'>the</span>
  <span m='693010'>stationary</span> <span m='693660'>distribution</span> <span
  m='694340'>vector--</span> <span m='696230'>call</span> <span
  m='696470'>it</span> <span m='696670'>s</span> <span m='697090'>bar,</span>
  <span m='697550'>for</span> <span m='697730'>vector.</span> <span
  m='698430'>And</span> <span m='698640'>we</span> <span m='698770'>get</span>
  <span m='699010'>this</span> <span m='699240'>by</span> <span
  m='699400'>solving</span> <span m='700090'>the</span> <span
  m='701990'>vector</span> <span m='702830'>matrix</span> <span
  m='703260'>equation--</span> <span m='704200'>that</span> <span
  m='704630'>the</span> <span m='704850'>distribution</span> <span
  m='705630'>vector</span> <span m='706090'>times</span> <span
  m='706510'>the</span> <span m='708200'>edge</span> <span
  m='708440'>probability</span> <span m='709050'>matrix</span> <span
  m='709730'>is</span> <span m='709950'>equal</span> <span m='710720'>to</span>
  <span m='710920'>that</span> <span m='711200'>same</span> <span
  m='712010'>distribution</span> <span m='712720'>vector.</span> <span
  m='713100'>We</span> <span m='713230'>want</span> <span m='713430'>to</span>
  <span m='713480'>solve</span> <span m='713860'>this</span> <span
  m='714370'>system</span> <span m='714830'>of</span> <span
  m='714950'>equations.</span> <span m='715870'>If</span> <span
  m='716100'>there</span> <span m='716260'>are</span> <span m='716530'>n</span>
  <span m='717530'>states,</span> <span m='718040'>then</span> <span
  m='718210'>this</span> <span m='718400'>is</span> <span m='718510'>an</span>
  <span m='718610'>n</span> <span m='718810'>by</span> <span m='718990'>n</span>
  <span m='719180'>system</span> <span m='719570'>of</span> <span
  m='719670'>equations,</span> <span m='720230'>with</span> <span
  m='720420'>an</span> <span m='720510'>additional</span> <span
  m='720950'>constraint</span> <span m='721760'>that</span> <span
  m='721910'>we</span> <span m='722060'>want</span> <span m='722410'>the</span>
  <span m='722530'>norm</span> <span m='723040'>of</span> <span
  m='723360'>the</span> <span m='724510'>stable</span> <span
  m='724890'>vector</span> <span m='725210'>to</span> <span m='725310'>be</span>
  <span m='725440'>1,</span> <span m='725850'>because</span> <span
  m='726160'>that's</span> <span m='726420'>to</span> <span
  m='726550'>avoid</span> <span m='726970'>the</span> <span
  m='727180'>degenerate</span> <span m='727780'>0</span> <span
  m='728850'>solution.</span> </p><p><span m='731050'>Well</span> <span
  m='731840'>there</span> <span m='732020'>are</span> <span
  m='732070'>some</span> <span m='732260'>problems</span> <span
  m='732820'>with</span> <span m='733150'>stationary</span> <span
  m='733720'>distributions</span> <span m='734520'>that</span> <span
  m='734700'>we</span> <span m='734830'>want</span> <span m='735030'>to</span>
  <span m='735080'>think</span> <span m='735300'>about.</span> <span
  m='735720'>First</span> <span m='735910'>of</span> <span
  m='736050'>all,</span> <span m='737790'>what</span> <span
  m='737990'>happens</span> <span m='738620'>in</span> <span
  m='738760'>this</span> <span m='738970'>example</span> <span
  m='739720'>where</span> <span m='739770'>you</span> <span
  m='739850'>have</span> <span m='740070'>just</span> <span
  m='740310'>two</span> <span m='740450'>states,</span> <span
  m='740890'>and</span> <span m='740980'>the</span> <span
  m='741060'>probability</span> <span m='741610'>of</span> <span
  m='741670'>being in</span> <span m='741840'>the</span> <span
  m='741910'>first</span> <span m='742200'>state at</span> <span
  m='742380'>1</span> <span m='742710'>and</span> <span m='742800'>the</span>
  <span m='742860'>second</span> <span m='743190'>state</span> <span
  m='743420'>is</span> <span m='743550'>0?</span> <span m='743930'>Well</span>
  <span m='744580'>if</span> <span m='744870'>you</span> <span
  m='745570'>update</span> <span m='746050'>that</span> <span
  m='746270'>state,</span> <span m='747780'>what</span> <span
  m='747910'>happens</span> <span m='748370'>is</span> <span
  m='748560'>you</span> <span m='749350'>just</span> <span m='749610'>go</span>
  <span m='749720'>to</span> <span m='749780'>the</span> <span
  m='749870'>second</span> <span m='750200'>state</span> <span
  m='750430'>with</span> <span m='750570'>probability</span> <span
  m='751150'>1.</span> </p><p><span m='751750'>And</span> <span
  m='751960'>you</span> <span m='752070'>can</span> <span m='752210'>keep</span>
  <span m='752490'>doing</span> <span m='752800'>that.</span> <span
  m='753150'>And</span> <span m='753690'>there</span> <span
  m='753850'>may</span> <span m='754050'>be</span> <span m='754240'>a</span>
  <span m='754290'>stable</span> <span m='754650'>distribution</span> <span
  m='755290'>here,</span> <span m='756100'>but</span> <span
  m='756920'>this</span> <span m='757510'>particular</span> <span
  m='758090'>pattern</span> <span m='758560'>doesn't</span> <span
  m='758960'>converge</span> <span m='759480'>to</span> <span
  m='759690'>it.</span> <span m='759940'>As</span> <span m='760130'>you</span>
  <span m='760280'>go</span> <span m='760530'>through</span> <span
  m='760770'>time,</span> <span m='762210'>at</span> <span
  m='763010'>every</span> <span m='763290'>other</span> <span
  m='763490'>step</span> <span m='763790'>you're at</span> <span
  m='764030'>state</span> <span m='764420'>1,</span> <span m='764680'>and</span>
  <span m='764790'>every</span> <span m='765090'>other</span> <span
  m='765250'>step</span> <span m='765620'>you're</span> <span
  m='765740'>at</span> <span m='765880'>state</span> <span m='766250'>0.</span>
  </p><p><span m='767370'>But</span> <span m='769745'>you</span> <span
  m='770170'>never</span> <span m='770880'>get</span> <span m='771100'>to</span>
  <span m='771720'>a</span> <span m='771780'>stable</span> <span
  m='772160'>distribution</span> <span m='772800'>where</span> <span
  m='772980'>step</span> <span m='773340'>after</span> <span
  m='773680'>step</span> <span m='774910'>you</span> <span m='775180'>are</span>
  <span m='775650'>at</span> <span m='775880'>equal</span> <span
  m='776270'>probability</span> <span m='777240'>of</span> <span
  m='777480'>being</span> <span m='777810'>at</span> <span
  m='777920'>these</span> <span m='778140'>two</span> <span
  m='778290'>places.</span> <span m='778870'>I'm</span> <span
  m='778990'>assuming</span> <span m='779380'>here</span> <span
  m='779570'>that</span> <span m='780130'>this</span> <span m='780340'>is</span>
  <span m='780510'>a</span> <span m='780580'>certain</span> <span
  m='781000'>edge,</span> <span m='781320'>and</span> <span
  m='781430'>that's</span> <span m='781670'>a</span> <span
  m='781720'>certain</span> <span m='782050'>edge. It</span> <span
  m='782250'>has</span> <span m='782540'>to</span> <span m='782630'>be.</span>
  <span m='782830'>There's</span> <span m='783010'>only</span> <span
  m='783190'>one</span> <span m='783410'>edge</span> <span
  m='783630'>out.</span> <span m='784440'>So</span> <span m='784650'>a</span>
  <span m='784710'>stable</span> <span m='785070'>distribution</span> <span
  m='785690'>would</span> <span m='785850'>be</span> <span
  m='786050'>1/2,</span> <span m='786420'>1/2.</span> <span
  m='786940'>But</span> <span m='787220'>this</span> <span
  m='787470'>thing</span> <span m='787690'>doesn't</span> <span
  m='788100'>converge</span> <span m='788650'>to</span> <span
  m='788830'>it.</span> </p><p><span m='790130'>OK.</span> <span
  m='790890'>Here's</span> <span m='791110'>a</span> <span
  m='791170'>slightly</span> <span m='791480'>more</span> <span
  m='791620'>complicated</span> <span m='792250'>example,</span> <span
  m='793090'>where</span> <span m='793330'>again</span> <span
  m='793580'>assume</span> <span m='793930'>that</span> <span
  m='794080'>all</span> <span m='794310'>the</span> <span
  m='794490'>edges</span> <span m='794980'>are</span> <span
  m='796030'>equally</span> <span m='796780'>likely.</span> <span
  m='797250'>There's</span> <span m='797500'>exactly</span> <span
  m='798050'>two</span> <span m='798310'>edges</span> <span
  m='798700'>out</span> <span m='798940'>of</span> <span m='799130'>each</span>
  <span m='799960'>of</span> <span m='800220'>these</span> <span
  m='800780'>vertices</span> <span m='801520'>so that</span> <span
  m='801680'>each</span> <span m='802130'>edge</span> <span
  m='802350'>has</span> <span m='802540'>weight</span> <span
  m='802800'>1/2.</span> <span m='803860'>And</span> <span m='804030'>the</span>
  <span m='804120'>problem</span> <span m='804600'>with</span> <span
  m='804980'>this</span> <span m='805440'>graph</span> <span
  m='805980'>is</span> <span m='806810'>that</span> <span m='807000'>when</span>
  <span m='807130'>you</span> <span m='807280'>ask</span> <span
  m='807630'>what's</span> <span m='807880'>the</span> <span
  m='807960'>stable</span> <span m='808370'>distribution</span> <span
  m='809220'>and,</span> <span m='809700'>well,</span> <span
  m='809890'>if</span> <span m='809980'>you</span> <span m='810080'>look</span>
  <span m='810320'>at</span> <span m='810520'>it,</span> <span
  m='811240'>if</span> <span m='812280'>you</span> <span
  m='812980'>assume</span> <span m='813570'>that</span> <span
  m='813770'>the</span> <span m='813860'>probability</span> <span
  m='814550'>of</span> <span m='814620'>being</span> <span m='814850'>in</span>
  <span m='814930'>the</span> <span m='814990'>middle</span> <span
  m='815270'>is</span> <span m='815420'>0,</span> <span m='816260'>and</span>
  <span m='816530'>the</span> <span m='816660'>two</span> <span
  m='816880'>places</span> <span m='817350'>that</span> <span
  m='817480'>you</span> <span m='817580'>get</span> <span
  m='817780'>stuck</span> <span m='818140'>at</span> <span
  m='818280'>have</span> <span m='818470'>probability</span> <span
  m='819120'>p</span> <span m='819460'>and</span> <span m='819620'>1</span>
  <span m='819820'>minus</span> <span m='820210'>p,</span> <span
  m='821130'>then</span> <span m='821500'>that's</span> <span
  m='821730'>stable,</span> <span m='822230'>because</span> <span
  m='822940'>once</span> <span m='823250'>you're</span> <span
  m='823430'>at</span> <span m='823530'>this</span> <span
  m='823720'>state</span> <span m='824250'>with</span> <span
  m='824440'>probability</span> <span m='825000'>p</span> <span
  m='826150'>you're</span> <span m='826350'>following</span> <span
  m='827430'>the</span> <span m='827650'>one</span> <span
  m='827960'>certain</span> <span m='828380'>edge</span> <span
  m='828930'>that</span> <span m='829130'>goes</span> <span
  m='829390'>back</span> <span m='829630'>around</span> <span
  m='830050'>to</span> <span m='830150'>this</span> <span
  m='830420'>vertex.</span> <span m='831260'>And</span> <span
  m='831560'>therefore</span> <span m='831880'>there's</span> <span
  m='832120'>probability</span> <span m='832720'>of</span> <span
  m='832970'>p</span> <span m='833190'>of</span> <span m='833260'>being</span>
  <span m='833510'>there</span> <span m='833680'>one</span> <span
  m='833860'>step</span> <span m='834120'>later,</span> <span
  m='834450'>and</span> <span m='834540'>likewise</span> <span
  m='835300'>probability</span> <span m='835960'>q</span> <span
  m='836220'>of</span> <span m='836340'>one</span> <span m='836510'>step</span>
  <span m='836760'>later.</span> <span m='837000'>So</span> <span
  m='837390'>the</span> <span m='837490'>split</span> <span
  m='837830'>between</span> <span m='838190'>p</span> <span
  m='838420'>and</span> <span m='838560'>q</span> <span m='839110'>is</span>
  <span m='839310'>a</span> <span m='839370'>stable</span> <span
  m='839770'>distribution</span> <span m='840480'>for</span> <span
  m='840620'>this</span> <span m='840880'>thing,</span> <span
  m='841060'>with</span> <span m='841200'>probability</span> <span
  m='841730'>0</span> <span m='842140'>and 0</span> <span
  m='842510'>there.</span> </p><p><span m='843770'>And</span> <span
  m='844500'>of</span> <span m='844620'>course</span> <span m='844890'>p</span>
  <span m='845240'>and q</span> <span m='845390'>can</span> <span
  m='845540'>be</span> <span m='845640'>any</span> <span m='845820'>real</span>
  <span m='846030'>numbers</span> <span m='846360'>between</span> <span
  m='846700'>0</span> <span m='846800'>and</span> <span m='846970'>1.</span>
  <span m='847490'>So</span> <span m='847640'>there's</span> <span
  m='847840'>actually</span> <span m='848190'>an</span> <span
  m='848300'>uncountable</span> <span m='849010'>number</span> <span
  m='849720'>of</span> <span m='849880'>stable</span> <span
  m='850320'>distributions</span> <span m='851230'>for</span> <span
  m='851430'>this</span> <span m='852080'>graph.</span> <span
  m='852870'>Problem</span> <span m='853310'>here</span> <span
  m='853520'>is</span> <span m='853630'>it's</span> <span m='853790'>not</span>
  <span m='854020'>strongly</span> <span m='854440'>connected.</span> <span
  m='856310'>And</span> <span m='857570'>that</span> <span
  m='858080'>turns</span> <span m='858390'>out</span> <span m='858560'>to</span>
  <span m='858640'>be</span> <span m='859160'>a</span> <span
  m='859420'>sufficient</span> <span m='859870'>condition</span> <span
  m='860540'>that</span> <span m='861690'>it's</span> <span
  m='862630'>got</span> <span m='864020'>a</span> <span m='865950'>single</span>
  <span m='866350'>stable</span> <span m='866690'>distribution</span> <span
  m='867290'>whenever</span> <span m='867760'>it's</span> <span
  m='867890'>strongly</span> <span m='868370'>connected.</span> </p><p><span
  m='869350'>So</span> <span m='869540'>in</span> <span
  m='869690'>general</span> <span m='870100'>we</span> <span
  m='870200'>can</span> <span m='870340'>ask</span> <span m='870540'>the</span>
  <span m='870640'>question,</span> <span m='871180'>is</span> <span
  m='871430'>there</span> <span m='871640'>always</span> <span
  m='873430'>a</span> <span m='873500'>stationary</span> <span
  m='873990'>distribution</span> <span m='874660'>for</span> <span
  m='874820'>any</span> <span m='875090'>random</span> <span
  m='875390'>graph?</span> <span m='875690'>well,</span> <span
  m='875940'>if</span> <span m='876100'>the</span> <span m='876240'>graph</span>
  <span m='876520'>is</span> <span m='876670'>finite,</span> <span
  m='877160'>yes,</span> <span m='877820'>there's</span> <span
  m='878040'>guaranteed</span> <span m='878730'>to</span> <span
  m='878820'>be</span> <span m='879550'>a</span> <span
  m='880570'>stationary</span> <span m='881050'>distribution.</span> <span
  m='882230'>But</span> <span m='882480'>is</span> <span m='882650'>it</span>
  <span m='882750'>unique?</span> <span m='883530'>Well</span> <span
  m='884010'>sometimes,</span> <span m='884590'>sometimes</span> <span
  m='885070'>not.</span> <span m='885840'>If</span> <span m='886100'>the</span>
  <span m='886180'>graph</span> <span m='886480'>is</span> <span
  m='886540'>strongly</span> <span m='886970'>connected,</span> <span
  m='887490'>it</span> <span m='887590'>will</span> <span m='887680'>be</span>
  <span m='888130'>unique.</span> <span m='888660'>But</span> <span
  m='888920'>we've</span> <span m='889180'>seen</span> <span
  m='889430'>examples</span> <span m='890620'>in</span> <span
  m='890760'>the</span> <span m='890860'>previous</span> <span
  m='891370'>slide</span> <span m='891960'>where</span> <span
  m='892330'>it's</span> <span m='892470'>not</span> <span
  m='892670'>unique.</span> <span m='893070'>In fact,</span> <span
  m='893350'>it</span> <span m='893460'>could</span> <span m='893610'>be</span>
  <span m='893820'>uncountably</span> <span m='894330'>many.</span> </p><p><span
  m='895670'>And</span> <span m='895980'>another</span> <span
  m='896330'>crucial</span> <span m='896680'>question</span> <span
  m='897160'>is,</span> <span m='897480'>does</span> <span m='897700'>a</span>
  <span m='897800'>random</span> <span m='898210'>walk</span> <span
  m='899550'>approach</span> <span m='900840'>the</span> <span
  m='901150'>stable</span> <span m='901860'>distribution</span> <span
  m='902830'>no</span> <span m='903040'>matter</span> <span
  m='903360'>how</span> <span m='903550'>you</span> <span
  m='903730'>start?</span> <span m='904260'>And</span> <span
  m='904480'>that</span> <span m='904710'>first</span> <span
  m='905020'>example</span> <span m='905540'>was</span> <span
  m='905720'>one</span> <span m='905980'>where</span> <span
  m='906130'>you</span> <span m='906280'>went</span> <span
  m='906530'>between</span> <span m='907540'>the</span> <span
  m='907730'>first</span> <span m='908010'>state and</span> <span m='908360'>the
  second</span> <span m='908720'>state</span> <span m='908960'>and</span> <span
  m='909070'>oscillated.</span> <span m='909990'>And</span> <span
  m='910390'>it</span> <span m='910610'>never</span> <span
  m='910910'>converged</span> <span m='911510'>on</span> <span
  m='911620'>the</span> <span m='911700'>stable</span> <span
  m='912060'>distribution</span> <span m='912690'>of</span> <span
  m='912790'>1/2</span> <span m='913160'>and</span> <span m='913270'>1/2.</span>
  </p><p><span m='914160'>In</span> <span m='914350'>general,</span> <span
  m='914820'>it's</span> <span m='914960'>nice</span> <span
  m='915430'>when</span> <span m='915750'>you</span> <span m='915920'>can</span>
  <span m='916090'>say</span> <span m='916410'>that</span> <span
  m='916640'>no</span> <span m='916730'>matter</span> <span
  m='917000'>how</span> <span m='917260'>you</span> <span
  m='917430'>start,</span> <span m='918260'>after</span> <span
  m='918690'>a</span> <span m='918790'>while</span> <span
  m='919270'>things</span> <span m='919570'>stabilize,</span> <span
  m='920310'>and</span> <span m='920410'>you</span> <span m='920530'>wind</span>
  <span m='920920'>up</span> <span m='921540'>at</span> <span
  m='922070'>the</span> <span m='922190'>unique</span> <span
  m='922560'>stable</span> <span m='922930'>distribution.</span> <span
  m='923580'>So</span> <span m='924070'>sometimes</span> <span
  m='925390'>it'll</span> <span m='925620'>be</span> <span m='925760'>the</span>
  <span m='925880'>case</span> <span m='926350'>that</span> <span
  m='927330'>every</span> <span m='929040'>initial</span> <span
  m='929410'>distribution</span> <span m='930040'>will</span> <span
  m='930200'>eventually</span> <span m='931370'>converge</span> <span
  m='931960'>on</span> <span m='932120'>the</span> <span
  m='932200'>stable</span> <span m='932670'>one</span> <span m='933040'>or
  the</span> <span m='933410'>stationary</span> <span m='934020'>one.</span>
  <span m='934420'>Sometimes</span> <span m='934970'>not.</span> </p><p><span
  m='935810'>And</span> <span m='936170'>then</span> <span
  m='936520'>another</span> <span m='936750'>crucial</span> <span
  m='937110'>question</span> <span m='937470'>will</span> <span
  m='937640'>be,</span> <span m='937780'>how</span> <span
  m='938050'>quickly</span> <span m='938560'>does</span> <span
  m='938770'>this</span> <span m='939230'>convergence</span> <span
  m='939920'>happen?</span> <span m='940920'>If</span> <span
  m='941120'>we</span> <span m='941270'>start</span> <span m='941620'>off</span>
  <span m='941870'>at</span> <span m='942000'>some</span> <span
  m='942350'>arbitrary</span> <span m='944170'>probability</span> <span
  m='944780'>distribution,</span> <span m='945400'>or</span> <span
  m='945460'>some</span> <span m='945650'>particular</span> <span
  m='946190'>state,</span> <span m='946520'>how</span> <span
  m='946670'>long</span> <span m='946930'>does</span> <span m='947130'>it</span>
  <span m='947260'>take</span> <span m='947570'>before</span> <span
  m='948560'>by</span> <span m='948860'>and</span> <span m='949010'>large</span>
  <span m='949470'>the</span> <span m='949900'>probabilities</span> <span
  m='950820'>that</span> <span m='951000'>were</span> <span m='951200'>in</span>
  <span m='951290'>the</span> <span m='951390'>different</span> <span
  m='951740'>states</span> <span m='952130'>has</span> <span
  m='952410'>become</span> <span m='953700'>pretty</span> <span
  m='954070'>stationary?</span> <span m='955060'>And</span> <span
  m='955520'>the</span> <span m='955730'>rate</span> <span m='956010'>at</span>
  <span m='956090'>which</span> <span m='956340'>that</span> <span
  m='956520'>happens</span> <span m='956930'>again</span> <span
  m='957620'>varies</span> <span m='958860'>depending</span> <span
  m='959320'>on</span> <span m='959440'>the</span> <span
  m='959530'>graph.</span> </p>
embedded_media:
  - uid: 4ece38602fda25a1fc1f5022ffedb7d2
    parent_uid: cd94c07f582fe3cfe01344ee872b8f3d
    id: background-image-ocw-jpg
    title: Background Image-OCW-JPG
    type: Background Image
  - uid: c28f0e44a2ef2a7a0dde8b2c5637dae4
    parent_uid: cd94c07f582fe3cfe01344ee872b8f3d
    id: Video-iTunes U-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id1077791636'
  - uid: ab7f3a543f253fb73242e65c2e60cc5c
    parent_uid: cd94c07f582fe3cfe01344ee872b8f3d
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: iZX8WEGZTVw
  - uid: e9434b608bcd8c2cbd5433b1fa45bcba
    parent_uid: cd94c07f582fe3cfe01344ee872b8f3d
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/iZX8WEGZTVw/default.jpg'
  - uid: c7c84ffa81ec93b225f83a43fbc6029d
    parent_uid: cd94c07f582fe3cfe01344ee872b8f3d
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: iZX8WEGZTVw
  - uid: 52b6e6bd2932ba26dc54db536bc1a920
    parent_uid: cd94c07f582fe3cfe01344ee872b8f3d
    id: iZX8WEGZTVw.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/random-walks-pagerank/stationary-distributions-video/stationary-distributions/iZX8WEGZTVw.srt
  - uid: 269a2925f6182e36badeff0ec6c2548a
    parent_uid: cd94c07f582fe3cfe01344ee872b8f3d
    id: iZX8WEGZTVw.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-042j-mathematics-for-computer-science-spring-2015/probability/random-walks-pagerank/stationary-distributions-video/stationary-distributions/iZX8WEGZTVw.pdf
  - uid: 658dc2a8f0a8167fde4a2cec169e0956
    parent_uid: cd94c07f582fe3cfe01344ee872b8f3d
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: cd6c06fd4e4da285b5ed4f402587ddac
    parent_uid: cd94c07f582fe3cfe01344ee872b8f3d
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: 8474c6f3649aead1a02f7c3eb84c81f3
    parent_uid: cd94c07f582fe3cfe01344ee872b8f3d
    id: Video-Internet Archive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT6.042JS15/MIT6_042JS15_stable_distribution_ipod.mp4
type: courses
layout: video
---
