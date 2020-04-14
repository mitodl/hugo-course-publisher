---
title: Application of Green's Theorem
uid: b970bee1d208f3cbbead398aa1214213
parent_uid: fce780d8a145fae3fe0d349fbce595cf
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/3.-double-integrals-and-line-integrals-in-the-plane/part-c-greens-theorem/session-68-planimeter-greens-theorem-and-area/application-of-greens-theorem
short_url: application-of-greens-theorem
inline_embed_id: 58069230applicationofgreen'stheorem52193851
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='7230'>Welcome</span> <span m='7630'>back</span> <span
  m='7830'>to</span> <span m='7910'>recitation.</span> <span m='8790'>In</span>
  <span m='9230'>this</span> <span m='9470'>video</span> <span
  m='9740'>I'd</span> <span m='9890'>like</span> <span m='10090'>us</span> <span
  m='10270'>to</span> <span m='10360'>consider</span> <span m='10720'>the</span>
  <span m='10820'>following</span> <span m='11210'>problem.</span> <span
  m='13050'>So</span> <span m='13220'>the</span> <span m='13300'>question</span>
  <span m='13690'>is</span> <span m='14250'>for</span> <span
  m='14410'>what</span> <span m='14640'>simple</span> <span
  m='14880'>closed</span> <span m='15210'>curve</span> <span m='15520'>C,</span>
  <span m='16620'>which</span> <span m='16770'>is</span> <span
  m='16830'>oriented</span> <span m='17290'>positively</span> <span
  m='17870'>around</span> <span m='18100'>the</span> <span
  m='18170'>region</span> <span m='18480'>it</span> <span
  m='18690'>encloses,</span> <span m='19870'>does</span> <span
  m='20510'>the</span> <span m='20710'>integral</span> <span
  m='21010'>over</span> <span m='21190'>C</span> <span m='22060'>of</span> <span
  m='22280'>minus</span> <span m='22640'>the</span> <span
  m='22740'>quantity</span> <span m='23590'>x</span> <span
  m='23850'>squared</span> <span m='24170'>y</span> <span m='24860'>plus</span>
  <span m='25120'>3x</span> <span m='25860'>minus</span> <span
  m='26060'>2y</span> <span m='27390'>dx</span> <span m='29000'>plus</span>
  <span m='29290'>4</span> <span m='29520'>y</span> <span
  m='29740'>squared</span> <span m='30060'>x</span> <span m='30280'>minus</span>
  <span m='30640'>2x</span> <span m='31600'>dy</span> <span
  m='32550'>achieve</span> <span m='32930'>its</span> <span
  m='33050'>minimum</span> <span m='33420'>value?</span> </p><p><span
  m='34510'>So</span> <span m='34690'>again,</span> <span m='36750'>the</span>
  <span m='36920'>thing</span> <span m='37090'>we</span> <span m='37300'>want
  to</span> <span m='37380'>find</span> <span m='37620'>here,</span> <span
  m='37730'>the</span> <span m='37830'>point</span> <span m='38100'>we want
  to</span> <span m='38270'>make,</span> <span m='38500'>is</span> <span
  m='38620'>that</span> <span m='39060'>we</span> <span m='39340'>have</span>
  <span m='39620'>this</span> <span m='39770'>integral</span> <span
  m='41210'>and</span> <span m='41430'>we're</span> <span
  m='41580'>allowed</span> <span m='41850'>to</span> <span m='41950'>vary</span>
  <span m='42360'>C.</span> <span m='43150'>So</span> <span
  m='43290'>we're</span> <span m='43390'>allowed</span> <span
  m='43560'>to</span> <span m='43640'>change</span> <span m='44520'>the</span>
  <span m='44650'>curve,</span> <span m='45410'>the</span> <span
  m='45510'>simple</span> <span m='45760'>closed</span> <span
  m='46120'>curve.</span> <span m='46860'>And</span> <span m='47130'>we</span>
  <span m='47220'>want to</span> <span m='47460'>know</span> <span
  m='47740'>for</span> <span m='48660'>what</span> <span m='49210'>curve</span>
  <span m='49610'>C</span> <span m='50310'>does</span> <span
  m='50540'>this</span> <span m='50780'>integral</span> <span
  m='51310'>achieve</span> <span m='51580'>its</span> <span
  m='51670'>minimum</span> <span m='52070'>value?</span> <span
  m='52950'>So</span> <span m='53150'>why</span> <span m='53370'>don't</span>
  <span m='53560'>you</span> <span m='53730'>work</span> <span
  m='54000'>on</span> <span m='54150'>that,</span> <span m='54430'>think</span>
  <span m='54580'>about</span> <span m='54830'>it,</span> <span
  m='55400'>pause</span> <span m='55720'>the</span> <span
  m='55800'>video,</span> <span m='56250'>and</span> <span m='56650'>when</span>
  <span m='56820'>you're</span> <span m='56950'>feeling</span> <span
  m='57410'>like</span> <span m='57630'>you're</span> <span
  m='57790'>ready</span> <span m='58100'>to</span> <span m='58410'>see</span>
  <span m='58630'>how</span> <span m='58780'>I</span> <span m='58880'>do</span>
  <span m='59200'>it,</span> <span m='59520'>bring</span> <span
  m='59670'>the</span> <span m='59740'>video</span> <span m='59970'>back</span>
  <span m='60190'>up.</span> </p><p><span m='69570'>Welcome</span> <span
  m='69900'>back.</span> <span m='70650'>So</span> <span m='71280'>again,</span>
  <span m='71730'>what</span> <span m='71870'>we</span> <span
  m='72010'>would</span> <span m='72190'>like</span> <span m='72420'>to</span>
  <span m='72570'>do</span> <span m='73630'>for</span> <span
  m='73840'>this</span> <span m='74020'>problem</span> <span m='74440'>is</span>
  <span m='74570'>we</span> <span m='74710'>want</span> <span
  m='74930'>to</span> <span m='75030'>take</span> <span m='75830'>this</span>
  <span m='76200'>quantity,</span> <span m='77510'>which</span> <span
  m='77760'>is</span> <span m='77880'>varying</span> <span m='78530'>in</span>
  <span m='78770'>C,</span> <span m='79270'>and</span> <span m='79490'>we</span>
  <span m='79580'>want</span> <span m='79890'>to</span> <span
  m='80460'>figure</span> <span m='80800'>out</span> <span m='80950'>a</span>
  <span m='81000'>way</span> <span m='81720'>to</span> <span
  m='81840'>minimize</span> <span m='82300'>it. To</span> <span
  m='82740'>find</span> <span m='83040'>its</span> <span
  m='83150'>minimum</span> <span m='83520'>value.</span> <span
  m='84910'>And</span> <span m='85130'>actually</span> <span
  m='85520'>what's</span> <span m='86060'>interesting</span> <span
  m='86600'>to</span> <span m='86700'>think</span> <span m='86920'>about,</span>
  <span m='87250'>before</span> <span m='87560'>we</span> <span
  m='87670'>proceed</span> <span m='88030'>any</span> <span
  m='88210'>further,</span> <span m='88570'>is</span> <span m='88950'>you</span>
  <span m='89160'>might</span> <span m='89490'>think</span> <span
  m='89820'>you</span> <span m='89930'>want to</span> <span
  m='90170'>take</span> <span m='90390'>the</span> <span
  m='90480'>smallest</span> <span m='91080'>possible</span> <span
  m='91750'>simple</span> <span m='92060'>closed</span> <span
  m='92330'>curve</span> <span m='92480'>you</span> <span m='92620'>can.</span>
  <span m='92980'>In</span> <span m='93090'>other</span> <span
  m='93250'>words,</span> <span m='93470'>you</span> <span
  m='93560'>might</span> <span m='93770'>want</span> <span m='93860'>to</span>
  <span m='93930'>shrink</span> <span m='94280'>it</span> <span
  m='94400'>down</span> <span m='94720'>to</span> <span
  m='94820'>nothing.</span> <span m='95680'>But</span> <span
  m='95960'>then</span> <span m='98020'>this</span> <span
  m='98240'>integral</span> <span m='98700'>would</span> <span
  m='98920'>be</span> <span m='99070'>0</span> <span m='99980'>and</span> <span
  m='100130'>the</span> <span m='100190'>question</span> <span
  m='100520'>is,</span> <span m='100670'>can</span> <span m='100790'>we</span>
  <span m='100910'>do</span> <span m='101000'>better?</span> <span
  m='101940'>Because</span> <span m='102210'>we</span> <span
  m='102310'>could</span> <span m='102440'>have</span> <span m='102660'>a</span>
  <span m='102730'>minimum</span> <span m='103130'>value,</span> <span
  m='103490'>of</span> <span m='103600'>course,</span> <span
  m='103900'>that's</span> <span m='104050'>negative.</span> <span
  m='104760'>And</span> <span m='104900'>so</span> <span m='105010'>we</span>
  <span m='105130'>could</span> <span m='105360'>do</span> <span
  m='105510'>better</span> <span m='105970'>by</span> <span
  m='106120'>having</span> <span m='106400'>a</span> <span
  m='106460'>larger</span> <span m='106790'>curve</span> <span
  m='107210'>put</span> <span m='107360'>in</span> <span m='107440'>the</span>
  <span m='107520'>right</span> <span m='107740'>place.</span> </p><p><span
  m='108360'>So</span> <span m='108540'>I</span> <span m='108590'>just</span>
  <span m='108740'>want to</span> <span m='108900'>point</span> <span
  m='109210'>that</span> <span m='109450'>out,</span> <span m='109730'>if</span>
  <span m='109820'>you</span> <span m='109930'>were</span> <span
  m='110040'>thinking</span> <span m='110750'>"I'll</span> <span
  m='110980'>just</span> <span m='111210'>make</span> <span m='111420'>C</span>
  <span m='111750'>not</span> <span m='112000'>actually</span> <span
  m='112350'>a curve,</span> <span m='112770'>I just</span> <span
  m='113260'>shrink</span> <span m='113380'>it down</span> <span
  m='113590'>to</span> <span m='113670'>nothing."</span> <span
  m='114430'>That</span> <span m='114620'>won't</span> <span
  m='114890'>be</span> <span m='114990'>the</span> <span m='115110'>best</span>
  <span m='115400'>we</span> <span m='115500'>can</span> <span
  m='115660'>do.</span> <span m='115840'>We</span> <span m='115960'>can</span>
  <span m='116080'>actually</span> <span m='116820'>find</span> <span
  m='117150'>a</span> <span m='117220'>curve</span> <span m='117690'>that</span>
  <span m='117800'>has</span> <span m='118020'>an</span> <span
  m='118120'>integral</span> <span m='118520'>that</span> <span
  m='118670'>is</span> <span m='119270'>not</span> <span m='119590'>0,</span>
  <span m='119910'>but</span> <span m='120060'>is</span> <span
  m='120150'>in</span> <span m='120240'>fact</span> <span
  m='120510'>negative.</span> <span m='121100'>And</span> <span
  m='121240'>then</span> <span m='121360'>we</span> <span m='121450'>want
  to</span> <span m='121620'>make</span> <span m='121850'>it</span> <span
  m='122280'>the</span> <span m='122380'>most</span> <span
  m='122720'>negative</span> <span m='123090'>we</span> <span
  m='123180'>can.</span> <span m='123680'>So</span> <span
  m='123840'>that's</span> <span m='124050'>the</span> <span
  m='124150'>idea.</span> </p><p><span m='125380'>So</span> <span
  m='125570'>what</span> <span m='125740'>we're</span> <span
  m='125840'>going</span> <span m='125970'>to</span> <span m='126050'>do</span>
  <span m='126170'>here</span> <span m='127860'>is</span> <span
  m='128510'>we're</span> <span m='128680'>going to</span> <span
  m='128840'>use</span> <span m='129140'>Green's</span> <span
  m='129500'>theorem</span> <span m='129790'>to</span> <span
  m='129870'>help</span> <span m='130160'>us.</span> <span m='130920'>And</span>
  <span m='131050'>so</span> <span m='131150'>what</span> <span
  m='131310'>we</span> <span m='131410'>want to</span> <span
  m='131850'>remember</span> <span m='132500'>is</span> <span
  m='132720'>that</span> <span m='132920'>if</span> <span m='133050'>we</span>
  <span m='133170'>have</span> <span m='134170'>the</span> <span
  m='134320'>integral</span> <span m='135200'>over</span> <span
  m='135430'>C</span> <span m='136350'>of</span> <span m='136990'>M*dx</span>
  <span m='139350'>plus</span> <span m='139650'>N*dy</span> <span
  m='141610'>we</span> <span m='141820'>want to</span> <span
  m='142020'>write</span> <span m='142330'>that</span> <span
  m='143210'>as</span> <span m='143430'>the</span> <span
  m='143580'>integral</span> <span m='144490'>over</span> <span
  m='144870'>R</span> <span m='145780'>of</span> <span m='146110'>N</span> <span
  m='146810'>sub</span> <span m='147040'>x</span> <span m='147750'>minus</span>
  <span m='148520'>M</span> <span m='148780'>sub</span> <span
  m='149080'>y</span> <span m='149870'>dx</span> <span m='150320'>dy.</span>
  <span m='153055'>So</span> <span m='153420'>what</span> <span
  m='153650'>I</span> <span m='153720'>want</span> <span m='153890'>to</span>
  <span m='153960'>point</span> <span m='154220'>out,</span> <span
  m='155080'>I'm</span> <span m='155300'>just</span> <span
  m='155500'>going</span> <span m='155740'>to</span> <span
  m='156050'>write</span> <span m='156330'>down</span> <span
  m='156560'>what</span> <span m='156740'>these</span> <span
  m='156950'>are.</span> <span m='157470'>I'm</span> <span m='157610'>not</span>
  <span m='157810'>going</span> <span m='158060'>to</span> <span
  m='159360'>take</span> <span m='159590'>the</span> <span
  m='159680'>derivatives</span> <span m='160270'>for</span> <span
  m='160590'>you.</span> <span m='161320'>I'm</span> <span
  m='161460'>just</span> <span m='161600'>going</span> <span
  m='161750'>to</span> <span m='161810'>show</span> <span m='162000'>you</span>
  <span m='162120'>what</span> <span m='162270'>they</span> <span
  m='162390'>are.</span> </p><p><span m='162840'>So</span> <span
  m='163090'>in</span> <span m='163240'>this</span> <span
  m='163460'>case,</span> <span m='164240'>with</span> <span
  m='164500'>the</span> <span m='164670'>M</span> <span m='165070'>and</span>
  <span m='165270'>N</span> <span m='165540'>that</span> <span
  m='165650'>we</span> <span m='165780'>have,</span> <span m='166650'>we</span>
  <span m='166810'>get</span> <span m='166950'>exactly</span> <span
  m='169220'>this</span> <span m='169470'>value</span> <span
  m='169810'>for</span> <span m='169980'>the</span> <span
  m='170100'>integral.</span> <span m='170540'>We</span> <span
  m='170650'>get</span> <span m='171410'>N</span> <span m='171770'>sub</span>
  <span m='171960'>x</span> <span m='172350'>minus</span> <span
  m='172810'>M</span> <span m='173070'>sub</span> <span m='173180'>y</span>
  <span m='173650'>is</span> <span m='173790'>equal</span> <span
  m='174010'>to</span> <span m='174730'>x</span> <span m='175060'>squared</span>
  <span m='175560'>plus</span> <span m='176180'>4</span> <span
  m='176460'>y</span> <span m='176740'>squared</span> <span
  m='178020'>minus</span> <span m='178540'>4</span> <span m='181300'>dx</span>
  <span m='181580'>dy.</span> <span m='183160'>You</span> <span
  m='183380'>can</span> <span m='183560'>obviously</span> <span
  m='183950'>compute</span> <span m='184250'>that</span> <span
  m='184380'>yourself.</span> <span m='184820'>Just</span> <span
  m='184980'>take</span> <span m='185160'>the</span> <span
  m='185360'>derivative</span> <span m='185650'>of</span> <span
  m='185900'>N</span> <span m='186100'>with</span> <span
  m='186210'>respect</span> <span m='186560'>to x,</span> <span
  m='187370'>subtract</span> <span m='187840'>the</span> <span
  m='187900'>derivative</span> <span m='188190'>of</span> <span
  m='188710'>M</span> <span m='188940'>with</span> <span
  m='189130'>respect</span> <span m='189500'>to y,</span> <span
  m='190330'>you</span> <span m='190530'>get</span> <span m='190670'>a</span>
  <span m='190740'>little</span> <span m='190930'>cancellation</span> <span
  m='191620'>and</span> <span m='191740'>you</span> <span m='191820'>end</span>
  <span m='192000'>up</span> <span m='192140'>with</span> <span
  m='192280'>this.</span> </p><p><span m='193110'>And</span> <span
  m='193280'>so</span> <span m='193380'>now,</span> <span
  m='194250'>instead</span> <span m='194810'>of</span> <span
  m='194980'>thinking</span> <span m='195340'>about</span> <span
  m='195820'>trying</span> <span m='196210'>to</span> <span
  m='198430'>minimize</span> <span m='199060'>this</span> <span
  m='199250'>quantity</span> <span m='199700'>over</span> <span
  m='199950'>here</span> <span m='200330'>in</span> <span
  m='200450'>terms</span> <span m='200730'>of</span> <span m='200810'>a</span>
  <span m='200890'>curve,</span> <span m='202320'>now</span> <span
  m='202630'>we</span> <span m='202710'>can</span> <span m='202890'>think</span>
  <span m='203070'>about</span> <span m='203360'>trying</span> <span
  m='203600'>to</span> <span m='203700'>minimize</span> <span
  m='204260'>the</span> <span m='204340'>quantity</span> <span
  m='204760'>here</span> <span m='205170'>in</span> <span
  m='205280'>terms</span> <span m='205520'>of</span> <span m='205610'>a</span>
  <span m='205690'>region.</span> <span m='207710'>And</span> <span
  m='207790'>the</span> <span m='207870'>goal</span> <span
  m='208180'>here</span> <span m='209000'>is</span> <span m='209240'>to</span>
  <span m='209350'>make</span> <span m='210880'>the</span> <span
  m='211390'>sum</span> <span m='211920'>of</span> <span m='212190'>all</span>
  <span m='212470'>of</span> <span m='212590'>this</span> <span
  m='212890'>over</span> <span m='213080'>the</span> <span
  m='213190'>whole</span> <span m='213350'>region--</span> <span
  m='213810'>we</span> <span m='213910'>want to</span> <span
  m='214090'>make</span> <span m='214260'>it</span> <span m='214340'>as</span>
  <span m='214510'>negative</span> <span m='215050'>as</span> <span
  m='215160'>we</span> <span m='215260'>can</span> <span
  m='215390'>possibly</span> <span m='215760'>make</span> <span
  m='216000'>it.</span> <span m='216160'>So</span> <span
  m='216310'>essentially</span> <span m='216760'>what</span> <span
  m='216850'>we</span> <span m='216930'>want to</span> <span
  m='217180'>do</span> <span m='217870'>is</span> <span m='218110'>we</span>
  <span m='218250'>want--</span> <span m='219000'>on</span> <span
  m='219190'>the</span> <span m='219290'>boundary</span> <span
  m='219575'>of</span> <span m='219860'>this</span> <span
  m='220070'>region,</span> <span m='221050'>we</span> <span
  m='221310'>would</span> <span m='221480'>like</span> <span
  m='221730'>the</span> <span m='221850'>value</span> <span
  m='222290'>here</span> <span m='222540'>to</span> <span m='222660'>be</span>
  <span m='222810'>0,</span> <span m='223690'>and</span> <span
  m='223830'>on</span> <span m='223940'>the</span> <span
  m='224060'>inside</span> <span m='224540'>of</span> <span
  m='224620'>the</span> <span m='224710'>region</span> <span
  m='225010'>we'd</span> <span m='225130'>like</span> <span m='225340'>it</span>
  <span m='225440'>to</span> <span m='225530'>be</span> <span
  m='225620'>negative.</span> </p><p><span m='226930'>So</span> <span
  m='227130'>let</span> <span m='227280'>me</span> <span m='227880'>point</span>
  <span m='228180'>that</span> <span m='228350'>out</span> <span
  m='228440'>again</span> <span m='228860'>and</span> <span
  m='229030'>just</span> <span m='229210'>make</span> <span
  m='229370'>sure</span> <span m='229540'>we</span> <span
  m='229630'>understand</span> <span m='230080'>this.</span> <span
  m='230620'>To</span> <span m='230770'>make</span> <span m='231110'>this</span>
  <span m='231490'>quantity</span> <span m='231970'>as</span> <span
  m='232110'>small</span> <span m='232470'>as</span> <span
  m='232590'>possible,</span> <span m='233350'>what</span> <span
  m='233610'>we</span> <span m='233760'>would</span> <span
  m='233920'>like--</span> <span m='234310'>let</span> <span
  m='234420'>me</span> <span m='234610'>actually</span> <span
  m='234920'>just</span> <span m='235110'>draw</span> <span m='235440'>a</span>
  <span m='235480'>little</span> <span m='236410'>region.</span> <span
  m='236960'>So</span> <span m='237110'>say</span> <span m='237300'>this</span>
  <span m='237500'>is</span> <span m='237620'>the</span> <span
  m='237710'>region.</span> <span m='239750'>To</span> <span
  m='239900'>make</span> <span m='240580'>this</span> <span
  m='240830'>integral</span> <span m='241270'>as</span> <span
  m='241390'>small</span> <span m='241720'>as</span> <span
  m='241850'>possible,</span> <span m='243040'>what</span> <span
  m='243430'>we</span> <span m='243550'>want</span> <span m='244060'>is</span>
  <span m='244290'>that</span> <span m='244470'>x</span> <span
  m='244720'>squared</span> <span m='245090'>plus</span> <span
  m='245300'>4</span> <span m='245560'>y</span> <span m='245750'>squared</span>
  <span m='246080'>minus</span> <span m='246430'>4</span> <span
  m='247310'>is</span> <span m='247530'>negative</span> <span
  m='248160'>inside</span> <span m='248810'>the</span> <span
  m='248910'>region.</span> <span m='249960'>So</span> <span
  m='250320'>if</span> <span m='250520'>this</span> <span
  m='250670'>whole</span> <span m='250830'>quantity</span> <span
  m='251166'>is</span> <span m='251840'>less</span> <span m='252220'>than</span>
  <span m='252410'>0</span> <span m='253180'>inside</span> <span
  m='253840'>the</span> <span m='253940'>region,</span> <span
  m='254770'>and</span> <span m='254990'>we</span> <span m='255070'>want</span>
  <span m='255280'>it</span> <span m='255430'>to,</span> <span
  m='255770'>on</span> <span m='255980'>the</span> <span
  m='256050'>boundary</span> <span m='256305'>of the</span> <span
  m='256560'>region,</span> <span m='257030'>equal</span> <span
  m='257390'>0.</span> <span m='258090'>And</span> <span m='258480'>why
  do</span> <span m='258510'>we want it</span> <span m='258740'>to</span> <span
  m='258840'>equal</span> <span m='259170'>0</span> <span m='259380'>on</span>
  <span m='259590'>the</span> <span m='259660'>boundary?</span> <span
  m='260490'>Well,</span> <span m='260740'>that's</span> <span
  m='260920'>because</span> <span m='261210'>then</span> <span
  m='261360'>we've</span> <span m='261590'>gotten</span> <span
  m='261860'>all</span> <span m='262180'>the</span> <span
  m='262290'>negative</span> <span m='262720'>we</span> <span
  m='262860'>could</span> <span m='263040'>get</span> <span
  m='263640'>and</span> <span m='263830'>we</span> <span
  m='263920'>haven't</span> <span m='264290'>added</span> <span
  m='264420'>in</span> <span m='264750'>any</span> <span
  m='264950'>positive</span> <span m='265840'>and</span> <span
  m='266740'>brought</span> <span m='267110'>the</span> <span
  m='267200'>value</span> <span m='267510'>up.</span> <span m='268150'>So</span>
  <span m='268320'>that's</span> <span m='268620'>really</span> <span
  m='269050'>why</span> <span m='269930'>we</span> <span m='270170'>want</span>
  <span m='272790'>the</span> <span m='272890'>boundary of</span> <span
  m='273240'>the</span> <span m='273320'>region</span> <span
  m='273640'>to</span> <span m='273730'>be</span> <span
  m='273840'>exactly</span> <span m='274370'>where</span> <span
  m='274510'>this</span> <span m='274700'>quantity</span> <span
  m='275050'>equals</span> <span m='275380'>0.</span> </p><p><span
  m='276750'>And</span> <span m='276890'>so</span> <span m='277050'>let's</span>
  <span m='277290'>think</span> <span m='277470'>about,</span> <span
  m='278400'>geometrically,</span> <span m='282700'>what</span> <span
  m='282980'>describes</span> <span m='283590'>R--</span> <span
  m='284900'>oops,</span> <span m='285230'>that</span> <span
  m='285410'>should</span> <span m='285550'>have an</span> <span
  m='285850'>s.</span> <span m='287480'>What</span> <span
  m='287840'>describes</span> <span m='290970'>R,</span> <span
  m='291960'>where</span> <span m='293990'>x</span> <span
  m='294330'>squared</span> <span m='294880'>plus</span> <span
  m='295340'>4</span> <span m='296050'>y</span> <span m='296310'>squared</span>
  <span m='296880'>minus</span> <span m='297320'>4</span> <span
  m='297640'>is</span> <span m='297960'>less</span> <span m='298400'>than</span>
  <span m='298530'>0</span> <span m='299650'>inside</span> <span
  m='300210'>R,</span> <span m='303220'>and</span> <span
  m='304950'>that's</span> <span m='305220'>the</span> <span
  m='305310'>same</span> <span m='305630'>thing</span> <span
  m='305910'>as--</span> <span m='306410'>in</span> <span m='306720'>what</span>
  <span m='307170'>we're</span> <span m='307270'>interested</span> <span
  m='307830'>in--</span> <span m='307990'>x squared</span> <span
  m='308230'>plus</span> <span m='308430'>4y</span> <span
  m='308610'>squared</span> <span m='309720'>minus</span> <span
  m='309870'>4</span> <span m='310340'>equals</span> <span m='310760'>0</span>
  <span m='312030'>on</span> <span m='312260'>the</span> <span
  m='312340'>boundary</span> <span m='312760'>of</span> <span
  m='312870'>R.</span> </p><p><span m='321960'>And</span> <span
  m='322400'>if</span> <span m='323070'>you</span> <span m='323190'>look</span>
  <span m='323390'>at</span> <span m='323730'>this,</span> <span m='323920'>this
  is</span> <span m='324060'>really</span> <span m='324380'>the</span> <span
  m='324480'>expression</span> <span m='324930'>that</span> <span
  m='325040'>will</span> <span m='325160'>probably</span> <span
  m='325600'>help</span> <span m='325840'>you.</span> <span
  m='327270'>This</span> <span m='327600'>expression,</span> <span
  m='328470'>if</span> <span m='328600'>you</span> <span
  m='328720'>rewrite</span> <span m='329210'>it,</span> <span
  m='329470'>you</span> <span m='329630'>rewrite</span> <span
  m='330000'>it</span> <span m='330100'>as</span> <span m='330250'>x</span>
  <span m='330540'>squared</span> <span m='331210'>plus</span> <span
  m='331610'>4y</span> <span m='332100'>squared</span> <span
  m='333270'>is</span> <span m='333440'>equal</span> <span m='333690'>to</span>
  <span m='333900'>4.</span> <span m='334820'>And</span> <span
  m='335040'>you</span> <span m='335170'>see</span> <span m='335560'>that</span>
  <span m='335720'>this</span> <span m='335870'>is</span> <span
  m='335980'>actually</span> <span m='336470'>the</span> <span
  m='336960'>equation</span> <span m='337750'>that</span> <span
  m='338010'>describes</span> <span m='338540'>an</span> <span
  m='338690'>ellipse.</span> <span m='341000'>Maybe</span> <span
  m='341340'>you</span> <span m='341490'>see</span> <span m='341680'>it</span>
  <span m='341800'>more</span> <span m='341980'>often</span> <span
  m='342390'>if</span> <span m='342500'>you</span> <span
  m='342600'>divide</span> <span m='342960'>everything</span> <span
  m='343300'>by</span> <span m='343450'>4,</span> <span m='343830'>and so</span>
  <span m='343990'>on</span> <span m='344120'>the</span> <span
  m='344190'>right-hand</span> <span m='344530'>side</span> <span
  m='344690'>you</span> <span m='344750'>have</span> <span m='344840'>a</span>
  <span m='344910'>1,</span> <span m='345780'>and</span> <span
  m='346330'>your</span> <span m='346540'>coefficients</span> <span
  m='347120'>are</span> <span m='347640'>fractional,</span> <span
  m='348270'>potentially,</span> <span m='348750'>there.</span> <span
  m='348930'>But</span> <span m='349060'>this</span> <span m='349260'>is</span>
  <span m='349370'>exactly</span> <span m='350490'>the</span> <span
  m='350610'>equation</span> <span m='351000'>for</span> <span
  m='351130'>an</span> <span m='351200'>ellipse.</span> <span
  m='352170'>And</span> <span m='352340'>so</span> <span m='352510'>the</span>
  <span m='352660'>boundary</span> <span m='353340'>of</span> <span
  m='353530'>R</span> <span m='354490'>is</span> <span m='354690'>an</span>
  <span m='354750'>ellipse</span> <span m='355250'>described</span> <span
  m='355790'>by</span> <span m='355960'>this</span> <span
  m='356520'>equation,</span> <span m='357910'>but</span> <span
  m='358080'>the</span> <span m='358170'>boundary</span> <span
  m='358540'>of</span> <span m='358630'>R is</span> <span
  m='358960'>actually</span> <span m='359340'>just</span> <span
  m='359830'>C.</span> </p><p><span m='361070'>So</span> <span
  m='361270'>C</span> <span m='361680'>we</span> <span m='361840'>now</span>
  <span m='362070'>know</span> <span m='362610'>is</span> <span
  m='362850'>exactly</span> <span m='364090'>the</span> <span
  m='364280'>curve</span> <span m='364840'>that</span> <span
  m='364960'>is</span> <span m='365100'>carved</span> <span
  m='365460'>out</span> <span m='365670'>by</span> <span m='365790'>this</span>
  <span m='365970'>equation</span> <span m='367230'>on</span> <span
  m='367430'>the</span> <span m='367500'>plane,</span> <span
  m='367830'>on</span> <span m='367910'>the</span> <span
  m='368380'>xy-plane.</span> <span m='368840'>That's</span> <span
  m='369600'>an</span> <span m='370570'>ellipse.</span> <span
  m='371930'>So</span> <span m='372630'>just to</span> <span
  m='372870'>remind</span> <span m='373290'>you</span> <span
  m='373400'>what</span> <span m='373580'>we</span> <span m='373650'>were</span>
  <span m='373740'>trying</span> <span m='374010'>to</span> <span
  m='374110'>do.</span> <span m='375700'>If</span> <span m='375830'>you</span>
  <span m='375920'>come</span> <span m='376090'>back</span> <span
  m='376270'>here,</span> <span m='376450'>we</span> <span
  m='376520'>were</span> <span m='376620'>trying</span> <span
  m='376820'>to</span> <span m='376890'>figure</span> <span
  m='377230'>out</span> <span m='377370'>a</span> <span m='377420'>way</span>
  <span m='378330'>to</span> <span m='378470'>minimize</span> <span
  m='379060'>the</span> <span m='379130'>certain</span> <span
  m='379490'>integral</span> <span m='380340'>over</span> <span
  m='380630'>a</span> <span m='380710'>path.</span> <span m='383020'>And</span>
  <span m='383580'>what</span> <span m='383830'>we</span> <span
  m='383970'>did</span> <span m='384290'>was</span> <span
  m='384460'>instead</span> <span m='384840'>of</span> <span
  m='384950'>trying</span> <span m='385280'>to</span> <span
  m='385950'>look</span> <span m='386250'>at</span> <span m='386320'>a</span>
  <span m='386390'>bunch</span> <span m='386620'>of</span> <span
  m='386730'>paths</span> <span m='387230'>and</span> <span
  m='387370'>figure</span> <span m='387680'>out</span> <span
  m='388670'>what</span> <span m='388870'>would</span> <span
  m='388990'>minimize</span> <span m='389370'>that,</span> <span
  m='389580'>we</span> <span m='389690'>tried</span> <span m='389900'>to</span>
  <span m='389980'>see if</span> <span m='390200'>Green's</span> <span
  m='390520'>theorem</span> <span m='390660'>would</span> <span
  m='390790'>help</span> <span m='391050'>us.</span> <span m='391570'>So</span>
  <span m='391770'>Green's</span> <span m='392180'>theorem</span> <span
  m='393040'>allowed</span> <span m='393410'>us</span> <span
  m='393520'>to</span> <span m='393620'>take</span> <span
  m='393810'>something</span> <span m='394080'>that</span> <span
  m='394170'>was</span> <span m='394290'>an</span> <span
  m='394440'>integral</span> <span m='394480'>over a</span> <span
  m='394840'>path</span> <span m='395170'>and</span> <span
  m='395320'>change</span> <span m='395560'>it</span> <span m='395660'>to</span>
  <span m='395740'>an</span> <span m='395820'>integral</span> <span
  m='395960'>over a</span> <span m='396410'>region.</span> </p><p><span
  m='397790'>And</span> <span m='397980'>then</span> <span
  m='398130'>when</span> <span m='398260'>we</span> <span m='398390'>look</span>
  <span m='398690'>at</span> <span m='399030'>what</span> <span
  m='399220'>we</span> <span m='399340'>ended</span> <span m='399600'>up</span>
  <span m='399780'>with,</span> <span m='400070'>we</span> <span
  m='400190'>realize</span> <span m='400720'>that</span> <span
  m='401450'>we</span> <span m='401620'>could</span> <span
  m='401870'>make</span> <span m='402140'>this</span> <span
  m='403980'>the</span> <span m='404130'>most</span> <span
  m='404440'>minimum</span> <span m='404930'>if</span> <span
  m='405080'>we</span> <span m='405200'>let</span> <span m='405460'>this</span>
  <span m='406760'>be</span> <span m='406870'>on</span> <span
  m='407080'>the</span> <span m='407150'>region</span> <span
  m='407520'>where</span> <span m='407700'>it</span> <span m='407800'>was</span>
  <span m='407910'>negative</span> <span m='408310'>everywhere.</span> <span
  m='409360'>So</span> <span m='409520'>we</span> <span m='409610'>were</span>
  <span m='409740'>looking</span> <span m='410040'>for a</span> <span
  m='410230'>region</span> <span m='410590'>where</span> <span
  m='410740'>this</span> <span m='410970'>quantity</span> <span
  m='411380'>was</span> <span m='411540'>everywhere</span> <span
  m='411870'>negative</span> <span m='412280'>on</span> <span
  m='412410'>the</span> <span m='412510'>inside</span> <span
  m='413380'>and</span> <span m='413740'>0</span> <span m='413890'>on</span>
  <span m='414150'>the</span> <span m='414220'>boundary.</span> <span
  m='415250'>And</span> <span m='415390'>that's</span> <span
  m='415530'>exactly</span> <span m='416010'>what</span> <span
  m='416120'>we</span> <span m='416240'>did.</span> <span m='416950'>And</span>
  <span m='417120'>then</span> <span m='417240'>we</span> <span
  m='417380'>see</span> <span m='418780'>that</span> <span m='418980'>we</span>
  <span m='419080'>get</span> <span m='419280'>to</span> <span
  m='419370'>a</span> <span m='419440'>point</span> <span
  m='419660'>where</span> <span m='419750'>the</span> <span
  m='419850'>boundary</span> <span m='420280'>has</span> <span
  m='420500'>this</span> <span m='420670'>equation,</span> <span
  m='420970'>x</span> <span m='421270'>squared</span> <span
  m='421720'>plus</span> <span m='421850'>4y</span> <span
  m='422040'>squared</span> <span m='422280'>equals</span> <span
  m='422480'>4.</span> <span m='423340'>We</span> <span m='423580'>see
  then</span> <span m='423920'>the</span> <span m='424010'>boundary's</span>
  <span m='424370'>an</span> <span m='424450'>ellipse,</span> <span
  m='425310'>and</span> <span m='425480'>C</span> <span m='425820'>is</span>
  <span m='425950'>indeed</span> <span m='426220'>the</span> <span
  m='426310'>boundary</span> <span m='426780'>of the</span> <span
  m='426900'>region.</span> <span m='427660'>So</span> <span
  m='427840'>we</span> <span m='427970'>see</span> <span m='428130'>that</span>
  <span m='428300'>C</span> <span m='428690'>is</span> <span
  m='429390'>the</span> <span m='429610'>ellipse</span> <span
  m='430220'>described</span> <span m='430740'>by</span> <span
  m='430880'>this</span> <span m='431080'>equation.</span> <span
  m='432420'>So</span> <span m='432530'>that's</span> <span
  m='432720'>where</span> <span m='432810'>I'll</span> <span
  m='432940'>stop.</span> </p>
embedded_media:
  - uid: b0e3c51c26e61e0c8a7efbfce3a24444
    parent_uid: b970bee1d208f3cbbead398aa1214213
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: grns_GNYWe4
  - uid: 0ece58b36532e8a23cc8264b6003d3c9
    parent_uid: b970bee1d208f3cbbead398aa1214213
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/grns_GNYWe4/default.jpg'
  - uid: 05d016f16b7b8e4cd30b93b5ae1e41ce
    parent_uid: b970bee1d208f3cbbead398aa1214213
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_46_300k.mp4'
  - uid: 11412d187126cddb861f05e2be7b9afa
    parent_uid: b970bee1d208f3cbbead398aa1214213
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/application-greens-theorem/id414355340?i=90322867
  - uid: 2f540092ea408909f9fd1113a043c0fe
    parent_uid: b970bee1d208f3cbbead398aa1214213
    id: 3Play-3PlayYouTubeid-PDF
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: grns_GNYWe4
  - uid: ce0d58c3cb2cc4d237d389be1080d34f
    parent_uid: b970bee1d208f3cbbead398aa1214213
    id: grns_GNYWe4.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/3.-double-integrals-and-line-integrals-in-the-plane/part-c-greens-theorem/session-68-planimeter-greens-theorem-and-area/application-of-greens-theorem/grns_GNYWe4.srt
  - uid: 9722991405fb913efcdd7efdcaeb5ca5
    parent_uid: b970bee1d208f3cbbead398aa1214213
    id: grns_GNYWe4.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/3.-double-integrals-and-line-integrals-in-the-plane/part-c-greens-theorem/session-68-planimeter-greens-theorem-and-area/application-of-greens-theorem/grns_GNYWe4.pdf
  - uid: 058f18c6a26ed415850a783563442baf
    parent_uid: b970bee1d208f3cbbead398aa1214213
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: a3668a459af15b5e6e3f4f7ed992a810
    parent_uid: b970bee1d208f3cbbead398aa1214213
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
