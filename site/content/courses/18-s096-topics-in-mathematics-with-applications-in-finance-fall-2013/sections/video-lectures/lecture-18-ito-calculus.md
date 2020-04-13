---
title: 'Lecture 18: Itō Calculus'
uid: a51f4e333e8242e4d6a56ed8f2478774
parent_uid: d23a85587c0c7524ea054e655c999532
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-18-ito-calculus
short_url: lecture-18-ito-calculus
inline_embed_id: '44884311lecture18:itōcalculus785232'
about_this_resource_text: >-
  <p><strong>Description:</strong> This lecture explains the theory behind Itō
  calculus.</p> <p><strong>Instructor:</strong> Dr. Choongbum Lee</p>
related_resources_text: ''
transcript: >-
  <p><span m='100'>The</span> <span m='190'>following</span> <span
  m='630'>content</span> <span m='1220'>is</span> <span m='1340'>provided</span>
  <span m='1780'>under</span> <span m='2060'>a</span> <span
  m='2100'>Creative</span> <span m='2500'>Commons</span> <span
  m='2910'>license.</span> <span m='4019'>Your</span> <span
  m='4210'>support</span> <span m='4710'>will</span> <span m='4870'>help</span>
  <span m='5110'>MIT</span> <span m='5570'>OpenCourseWare</span> <span
  m='6360'>continue</span> <span m='6870'>to</span> <span m='6950'>offer</span>
  <span m='7360'>high</span> <span m='7600'>quality</span> <span
  m='8119'>educational</span> <span m='8750'>resources</span> <span
  m='9370'>for</span> <span m='9520'>free.</span> <span m='10730'>To</span>
  <span m='10740'>make</span> <span m='10940'>a</span> <span
  m='10990'>donation</span> <span m='11680'>or</span> <span
  m='11940'>view</span> <span m='12380'>additional</span> <span
  m='12800'>materials</span> <span m='13340'>from</span> <span
  m='13490'>hundreds</span> <span m='13920'>of</span> <span m='14030'>MIT</span>
  <span m='14460'>courses,</span> <span m='15580'>visit</span> <span
  m='15780'>MIT</span> <span m='16210'>OpenCourseWare</span> <span
  m='17250'>at</span> <span m='17420'>ocw.mit.edu.</span> </p><p><span
  m='21670'>PROFESSOR: Let's</span> <span m='21880'>begin.</span> <span
  m='26540'>Today</span> <span m='26690'>we're</span> <span
  m='26770'>going</span> <span m='26870'>to</span> <span
  m='26940'>continue</span> <span m='27430'>the</span> <span
  m='27530'>discussion</span> <span m='28170'>on</span> <span
  m='28780'>Ito</span> <span m='29120'>calculus.</span> <span m='31190'>I</span>
  <span m='31270'>briefly</span> <span m='31760'>introduced</span> <span
  m='32250'>you</span> <span m='32380'>to Ito's</span> <span
  m='32680'>lemma</span> <span m='33180'>last</span> <span
  m='33520'>time,</span> <span m='33840'>but</span> <span m='34060'>let's</span>
  <span m='34280'>begin</span> <span m='34530'>by</span> <span
  m='34630'>reviewing</span> <span m='35120'>it</span> <span
  m='35510'>and</span> <span m='38050'>stating it</span> <span
  m='38510'>in</span> <span m='38630'>a</span> <span m='38710'>slightly</span>
  <span m='39090'>more</span> <span m='39250'>general</span> <span
  m='39580'>form.</span> </p><p><span m='42570'>Last</span> <span
  m='42830'>time</span> <span m='42970'>what</span> <span m='43080'>we</span>
  <span m='43200'>did</span> <span m='43555'>was</span> <span
  m='44245'>we</span> <span m='44580'>did the</span> <span
  m='44760'>quadratic</span> <span m='45280'>variation</span> <span
  m='45790'>of</span> <span m='45920'>Brownian</span> <span
  m='46260'>motion,</span> <span m='50680'>Brownian</span> <span
  m='51340'>process.</span> <span m='57140'>We</span> <span
  m='57220'>defined</span> <span m='57640'>the Brownian</span> <span
  m='58220'>process,</span> <span m='58870'>Brownian</span> <span
  m='59090'>motion,</span> <span m='61160'>and</span> <span
  m='61380'>then</span> <span m='61890'>showed</span> <span
  m='62160'>that</span> <span m='62400'>it has</span> <span
  m='62700'>quadratic</span> <span m='63190'>variation,</span> <span
  m='71210'>which</span> <span m='71700'>can</span> <span m='71870'>be</span>
  <span m='72270'>written</span> <span m='73070'>in</span> <span
  m='73320'>this</span> <span m='73550'>form--</span> <span m='78600'>d B</span>
  <span m='79040'>square</span> <span m='79310'>is</span> <span
  m='79690'>equal</span> <span m='79910'>to dt.</span> <span
  m='82380'>And</span> <span m='82530'>then</span> <span m='83250'>we</span>
  <span m='83380'>used</span> <span m='83570'>that</span> <span
  m='83870'>to</span> <span m='83950'>show</span> <span m='84230'>the</span>
  <span m='84320'>simple</span> <span m='84670'>form</span> <span m='84940'>of
  Ito's</span> <span m='85210'>lemma,</span> <span m='93350'>which</span> <span
  m='93450'>says</span> <span m='93620'>that</span> <span m='94330'>if</span>
  <span m='95090'>f</span> <span m='95600'>is</span> <span m='95780'>a</span>
  <span m='95860'>function</span> <span m='96590'>on</span> <span
  m='97460'>the</span> <span m='97770'>Brownian</span> <span
  m='98080'>motion,</span> <span m='99420'>then</span> <span m='99970'>d</span>
  <span m='100220'>of</span> <span m='100330'>f</span> <span
  m='102100'>is</span> <span m='102270'>equal</span> <span m='102620'>to</span>
  <span m='104260'>f</span> <span m='104550'>prime</span> <span
  m='106898'>of</span> <span m='107390'>d</span> <span m='107580'>Bt</span>
  <span m='108820'>plus</span> <span m='111100'>f</span> <span
  m='111350'>double</span> <span m='111630'>prime</span> <span
  m='114142'>of</span> <span m='114630'>dt.</span> </p><p><span
  m='116990'>This</span> <span m='117560'>additional</span> <span
  m='118030'>term</span> <span m='120100'>was</span> <span m='120230'>a</span>
  <span m='120300'>characteristic</span> <span m='121140'>of</span> <span
  m='121650'>Ito</span> <span m='121900'>calculus.</span> <span
  m='123730'>In</span> <span m='124140'>classical</span> <span
  m='124590'>calculus</span> <span m='125050'>we</span> <span
  m='125170'>only</span> <span m='125390'>have</span> <span
  m='125600'>this</span> <span m='125810'>term,</span> <span
  m='126405'>but</span> <span m='126660'>we</span> <span m='126760'>have</span>
  <span m='126910'>this</span> <span m='127110'>additional</span> <span
  m='127550'>term.</span> <span m='128509'>And</span> <span m='128530'>if</span>
  <span m='128639'>you</span> <span m='128729'>remember,</span> <span
  m='129080'>this</span> <span m='129300'>happened</span> <span
  m='129949'>exactly</span> <span m='130389'>because</span> <span
  m='130639'>of</span> <span m='130740'>this</span> <span
  m='130889'>quadratic</span> <span m='131350'>variation.</span> <span
  m='133690'>Let's</span> <span m='133890'>review</span> <span
  m='134230'>it,</span> <span m='134960'>and</span> <span
  m='135560'>let's</span> <span m='135960'>do</span> <span m='136090'>it</span>
  <span m='136140'>in</span> <span m='136240'>a</span> <span
  m='136320'>slightly</span> <span m='136650'>more</span> <span
  m='136810'>general</span> <span m='137100'>form.</span> </p><p><span
  m='138530'>As you</span> <span m='138680'>know,</span> <span
  m='139140'>we</span> <span m='139230'>have</span> <span m='139390'>a</span>
  <span m='139450'>function</span> <span m='139880'>f</span> <span
  m='140630'>depending on</span> <span m='141130'>two</span> <span
  m='141270'>variables,</span> <span m='141800'>t</span> <span
  m='142030'>and</span> <span m='142130'>x.</span> <span m='144690'>Now</span>
  <span m='144790'>we're</span> <span m='144930'>interested</span> <span
  m='145360'>in--</span> <span m='146350'>we</span> <span m='146450'>want</span>
  <span m='146750'>to</span> <span m='149850'>evaluate</span> <span
  m='150830'>our</span> <span m='153890'>information</span> <span
  m='154275'>on</span> <span m='154660'>the</span> <span m='154980'>function
  f</span> <span m='155468'>t,</span> <span m='156444'>Bt.</span> <span
  m='158890'>The</span> <span m='158990'>second</span> <span
  m='159470'>coordinate,</span> <span m='160280'>we're</span> <span
  m='160730'>planning</span> <span m='161120'>to</span> <span
  m='161240'>put</span> <span m='161390'>in the</span> <span
  m='161570'>Brownian</span> <span m='161900'>motion</span> <span
  m='162270'>there.</span> <span m='164040'>Then</span> <span
  m='164140'>again,</span> <span m='164320'>let's</span> <span
  m='164510'>do</span> <span m='164620'>the</span> <span m='164690'>same</span>
  <span m='164910'>analysis.</span> <span m='165590'>Can</span> <span
  m='165940'>we</span> <span m='166300'>describe</span> <span
  m='166570'>d</span> <span m='166840'>of</span> <span m='167000'>f</span> <span
  m='167390'>in</span> <span m='167520'>terms</span> <span m='167860'>of</span>
  <span m='169390'>these</span> <span m='170290'>differentiations?</span>
  </p><p><span m='172530'>To</span> <span m='172700'>do</span> <span
  m='172930'>that,</span> <span m='175700'>deflect</span> <span
  m='176070'>this,</span> <span m='176845'>let</span> <span m='177180'>me</span>
  <span m='177370'>start</span> <span m='177670'>from</span> <span
  m='177810'>Taylor</span> <span m='178120'>expansion.</span> <span
  m='184460'>f</span> <span m='185320'>at</span> <span m='185490'>a</span> <span
  m='185550'>point</span> <span m='186700'>t</span> <span m='187910'>plus</span>
  <span m='188770'>delta</span> <span m='189170'>t,</span> <span
  m='190436'>x</span> <span m='191280'>plus</span> <span m='191540'>delta</span>
  <span m='191860'>x</span> <span m='194520'>by</span> <span
  m='195770'>Taylor</span> <span m='196080'>expansion</span> <span
  m='196650'>for</span> <span m='196940'>two</span> <span
  m='197190'>variables</span> <span m='200220'>is</span> <span
  m='200495'>f</span> <span m='200770'>of t</span> <span m='201210'>of</span>
  <span m='201340'>x</span> <span m='202700'>plus</span> <span
  m='210420'>partial</span> <span m='210825'>of</span> <span m='211230'>f</span>
  <span m='211400'>over</span> <span m='211840'>partial</span> <span
  m='212270'>of</span> <span m='212580'>t</span> <span m='213786'>at</span>
  <span m='214188'>t</span> <span m='214590'>comma</span> <span
  m='215050'>x</span> <span m='216720'>of</span> <span m='217030'>delta</span>
  <span m='217720'>t</span> <span m='218579'>plus</span> <span
  m='222980'>x.</span> <span m='224510'>That's</span> <span
  m='224730'>the</span> <span m='224820'>first</span> <span m='225160'>order
  of</span> <span m='225380'>terms.</span> </p><p><span m='227850'>Then</span>
  <span m='228000'>we</span> <span m='228080'>have</span> <span
  m='228200'>the</span> <span m='228260'>second</span> <span m='228520'>order
  of</span> <span m='228710'>terms.</span> <span m='267560'>Then</span> <span
  m='267920'>the</span> <span m='268040'>third</span> <span m='268310'>order
  of</span> <span m='268580'>terms,</span> <span m='269030'>and so on.</span>
  <span m='271440'>That's</span> <span m='271640'>just</span> <span
  m='271830'>Taylor</span> <span m='272120'>expansion.</span> </p><p><span
  m='274700'>If</span> <span m='274850'>you</span> <span m='275580'>look</span>
  <span m='275780'>at</span> <span m='275900'>it,</span> <span
  m='276300'>we</span> <span m='276400'>have</span> <span m='276500'>a</span>
  <span m='276600'>function</span> <span m='276760'>f.</span> <span
  m='277030'>We</span> <span m='277120'>want</span> <span m='277270'>to</span>
  <span m='277380'>look</span> <span m='277600'>at</span> <span
  m='277720'>the</span> <span m='277810'>difference</span> <span
  m='278220'>of</span> <span m='278360'>f</span> <span m='278630'>when</span>
  <span m='278770'>we</span> <span m='278870'>change</span> <span
  m='279280'>to</span> <span m='279370'>the</span> <span m='279540'>first</span>
  <span m='279850'>variable</span> <span m='280105'>a little</span> <span
  m='280360'>bit</span> <span m='280650'>and</span> <span m='280730'>the</span>
  <span m='280800'>second</span> <span m='281090'>variable</span> <span
  m='281390'>a little</span> <span m='281580'>bit.</span> <span
  m='282830'>We</span> <span m='282920'>start</span> <span
  m='283200'>from</span> <span m='283410'>f</span> <span m='283600'>of</span>
  <span m='283750'>t</span> <span m='283930'>of</span> <span
  m='284020'>x.</span> <span m='285080'>In</span> <span m='285160'>the</span>
  <span m='285250'>first</span> <span m='285530'>order</span> <span
  m='285630'>of terms,</span> <span m='286070'>you</span> <span
  m='286190'>take</span> <span m='286390'>the</span> <span
  m='286470'>partial</span> <span m='286840'>derivative,</span> <span
  m='287400'>so</span> <span m='287660'>take</span> <span m='288460'>del
  f</span> <span m='288860'>over</span> <span m='289060'>del</span> <span
  m='289290'>t,</span> <span m='289700'>and</span> <span m='289850'>then</span>
  <span m='289940'>multiply</span> <span m='290350'>by</span> <span
  m='290530'>the</span> <span m='290670'>t</span> <span
  m='290840'>difference.</span> <span m='292200'>Second</span> <span
  m='292420'>term,</span> <span m='292800'>you</span> <span
  m='293000'>take</span> <span m='293440'>the</span> <span
  m='293590'>partial</span> <span m='293910'>derivative</span> <span
  m='294350'>with</span> <span m='294520'>respect</span> <span
  m='294930'>to</span> <span m='295030'>the</span> <span
  m='295110'>second</span> <span m='295460'>variable--</span> <span
  m='297010'>partial f</span> <span m='297420'>over</span> <span
  m='297660'>partial</span> <span m='297990'>x--</span> <span
  m='298610'>and</span> <span m='298790'>then</span> <span
  m='299150'>multiply</span> <span m='299460'>by</span> <span
  m='299630'>del</span> <span m='300103'>x.</span> </p><p><span
  m='302470'>That</span> <span m='302660'>much</span> <span m='303400'>is</span>
  <span m='303590'>enough</span> <span m='303880'>for</span> <span
  m='304360'>classical</span> <span m='304820'>calculus.</span> <span
  m='305560'>But</span> <span m='305750'>then,</span> <span m='306520'>as</span>
  <span m='306770'>we</span> <span m='307150'>have</span> <span
  m='307300'>seen</span> <span m='307580'>before,</span> <span
  m='308020'>we</span> <span m='308120'>ought to</span> <span
  m='308280'>look</span> <span m='308440'>at</span> <span m='308500'>the</span>
  <span m='308590'>second</span> <span m='308880'>order of</span> <span
  m='309100'>term.</span> <span m='309750'>So</span> <span
  m='309860'>let's</span> <span m='310470'>first</span> <span
  m='310710'>write</span> <span m='310900'>down</span> <span
  m='311190'>what</span> <span m='311410'>it</span> <span m='311490'>is.</span>
  <span m='314030'>That's</span> <span m='314340'>exactly</span> <span
  m='314690'>what</span> <span m='314920'>happened</span> <span m='315250'>in
  Taylor</span> <span m='315580'>expansion,</span> <span m='316370'>if</span>
  <span m='316670'>you</span> <span m='316790'>remember.</span> <span
  m='317140'>If</span> <span m='317490'>you don't</span> <span
  m='317630'>remember,</span> <span m='318050'>just</span> <span
  m='318240'>believe</span> <span m='318320'>me.</span> <span
  m='320130'>This</span> <span m='320280'>1</span> <span m='320440'>over</span>
  <span m='320630'>2</span> <span m='320830'>times</span> <span
  m='321300'>takes</span> <span m='321650'>the</span> <span
  m='322410'>second</span> <span m='322665'>derivative</span> <span
  m='323388'>partial.</span> </p><p><span m='326400'>Let's</span> <span
  m='326590'>write it</span> <span m='326770'>in</span> <span
  m='326960'>terms</span> <span m='327230'>of--</span> <span
  m='328720'>yes?</span> </p><p><span m='329100'>AUDIENCE: [INAUDIBLE]</span>
  </p><p></p><p><span m='334464'>PROFESSOR: Oh,</span> <span
  m='334896'>yeah,</span> <span m='335330'>you're right.</span> <span
  m='336978'>Thank</span> <span m='337462'>you.</span> <span m='345700'>Is
  it</span> <span m='346040'>good enough?</span> </p><p><span
  m='350060'>Let's</span> <span m='350330'>write it</span> <span
  m='350550'>as</span> <span m='350780'>dt</span> <span m='351540'>all</span>
  <span m='351740'>these</span> <span m='351960'>deltas.</span> <span
  m='356592'>I'll just</span> <span m='357080'>write like</span> <span
  m='357390'>that.</span> <span m='357830'>I'll</span> <span
  m='358270'>just</span> <span m='358670'>not</span> <span
  m='359020'>write</span> <span m='359260'>down</span> <span m='359470'>t</span>
  <span m='359670'>of</span> <span m='359770'>x.</span> <span
  m='360270'>And</span> <span m='360480'>what</span> <span m='360600'>we</span>
  <span m='360700'>have</span> <span m='360900'>is</span> <span
  m='361120'>f</span> <span m='361520'>plus</span> <span m='362500'>del f</span>
  <span m='362830'>over</span> <span m='363040'>del</span> <span
  m='363310'>t</span> <span m='363793'>dt</span> <span m='365166'>plus</span>
  <span m='365572'>del</span> <span m='365980'>f</span> <span
  m='366130'>over</span> <span m='366540'>del</span> <span m='366970'>x</span>
  <span m='367440'>dx</span> <span m='369020'>plus</span> <span
  m='369690'>the</span> <span m='369800'>second</span> <span m='370150'>order
  of</span> <span m='370390'>terms.</span> </p><p><span m='397290'>The</span>
  <span m='397540'>only</span> <span m='397790'>important</span> <span
  m='398210'>terms--</span> <span m='399210'>first</span> <span
  m='399340'>of</span> <span m='399410'>all,</span> <span
  m='399510'>these</span> <span m='399760'>terms</span> <span
  m='399990'>are</span> <span m='400070'>important.</span> <span
  m='402620'>But</span> <span m='402750'>then,</span> <span m='402900'>if</span>
  <span m='403000'>you</span> <span m='403060'>want to</span> <span
  m='403210'>use</span> <span m='403460'>x</span> <span m='403950'>equals</span>
  <span m='404340'>B</span> <span m='404540'>of</span> <span
  m='404660'>t--</span> <span m='405290'>so</span> <span m='405540'>if</span>
  <span m='405670'>you're</span> <span m='405760'>now interested</span> <span
  m='406000'>in</span> <span m='406170'>f</span> <span m='406966'>t</span> <span
  m='407362'>comma</span> <span m='407760'>B of</span> <span
  m='408110'>t.</span> <span m='409780'>Or</span> <span m='410030'>more</span>
  <span m='410240'>generally,</span> <span m='410810'>if</span> <span
  m='410920'>you're</span> <span m='411260'>interested</span> <span
  m='411700'>in</span> <span m='413850'>f t</span> <span m='414320'>plus</span>
  <span m='414690'>dt,</span> <span m='415970'>f</span> <span
  m='416370'>Bt</span> <span m='416740'>plus</span> <span m='417490'>d</span>
  <span m='417720'>of Bt,</span> <span m='420530'>then</span> <span
  m='420700'>these</span> <span m='420980'>terms</span> <span
  m='422110'>are</span> <span m='422250'>important.</span> </p><p><span
  m='423285'>If you</span> <span m='423690'>subtract</span> <span
  m='424710'>f</span> <span m='425170'>of t</span> <span m='425630'>of
  Bt,</span> <span m='427480'>what you get</span> <span m='427720'>is</span>
  <span m='428190'>these</span> <span m='428450'>two</span> <span
  m='428630'>terms.</span> <span m='431460'>Del</span> <span m='431640'>f</span>
  <span m='431935'>over</span> <span m='432380'>del</span> <span
  m='432645'>t</span> <span m='434038'>dt</span> <span m='434946'>plus</span>
  <span m='435400'>del</span> <span m='435680'>f</span> <span
  m='436092'>over</span> <span m='436504'>del</span> <span m='436916'>x--</span>
  <span m='437330'>I'm</span> <span m='437480'>just</span> <span
  m='437740'>writing</span> <span m='437980'>this</span> <span
  m='438160'>as</span> <span m='438260'>a</span> <span m='438330'>second</span>
  <span m='439620'>variable</span> <span m='439970'>differentiation--</span>
  <span m='441400'>at</span> <span m='441720'>d</span> <span
  m='442035'>Bt.</span> <span m='445880'>And</span> <span m='446030'>then</span>
  <span m='446220'>the</span> <span m='446320'>second</span> <span
  m='446550'>order of</span> <span m='446720'>terms.</span> </p><p><span
  m='448550'>Instead</span> <span m='448730'>of</span> <span
  m='448780'>writing</span> <span m='449030'>it</span> <span
  m='449170'>all</span> <span m='449360'>down,</span> <span m='449820'>dt</span>
  <span m='450180'>square</span> <span m='450740'>is</span> <span
  m='451210'>insignificant,</span> <span m='452605'>and</span> <span
  m='453050'>dt</span> <span m='453700'>comma</span> <span m='454310'>dt</span>
  <span m='454630'>times</span> <span m='455080'>d Bt</span> <span
  m='455400'>also</span> <span m='455630'>is</span> <span
  m='456140'>insignificant.</span> <span m='457580'>But</span> <span
  m='457840'>the</span> <span m='457960'>only</span> <span
  m='458540'>thing</span> <span m='458720'>that</span> <span
  m='458870'>matters</span> <span m='459180'>will be</span> <span
  m='459380'>this</span> <span m='459630'>one.</span> <span
  m='459910'>This</span> <span m='460190'>Is</span> <span m='460320'>d</span>
  <span m='460420'>Bt</span> <span m='462060'>square,</span> <span
  m='463340'>which</span> <span m='463420'>you</span> <span
  m='463530'>saw</span> <span m='463900'>is</span> <span m='464120'>equal</span>
  <span m='464390'>to</span> <span m='464500'>dt.</span> </p><p><span
  m='468920'>From</span> <span m='469300'>the</span> <span
  m='469560'>second</span> <span m='469830'>order of</span> <span
  m='470010'>term,</span> <span m='470240'>you'll</span> <span
  m='470400'>have</span> <span m='470670'>this</span> <span
  m='470880'>term</span> <span m='471280'>surviving.</span> <span
  m='472990'>1</span> <span m='473160'>over</span> <span m='473400'>2</span>
  <span m='475000'>partial</span> <span m='475360'>f</span> <span
  m='475620'>over</span> <span m='475997'>partial</span> <span
  m='476374'>x</span> <span m='476751'>second</span> <span
  m='477220'>derivative</span> <span m='478235'>of</span> <span
  m='478590'>dt.</span> <span m='481160'>That's</span> <span
  m='481450'>it.</span> <span m='484010'>If</span> <span m='484110'>you</span>
  <span m='484440'>rearrange</span> <span m='484910'>it, what</span> <span
  m='485190'>we</span> <span m='485290'>get</span> <span m='485490'>is</span>
  <span m='485860'>partial</span> <span m='486240'>f</span> <span
  m='486390'>over</span> <span m='486690'>partial</span> <span
  m='487100'>t</span> <span m='487830'>plus</span> <span m='488770'>1/2</span>
  <span m='491986'>this</span> <span m='493930'>plus--</span> <span
  m='498310'>and</span> <span m='498500'>that's</span> <span
  m='498720'>the</span> <span m='498800'>additional</span> <span
  m='499210'>term.</span> </p><p><span m='505150'>If</span> <span
  m='505280'>you</span> <span m='505370'>ask</span> <span m='505600'>me</span>
  <span m='505680'>why</span> <span m='505900'>these</span> <span
  m='506190'>terms</span> <span m='506430'>are</span> <span
  m='506510'>not</span> <span m='506700'>important</span> <span
  m='508620'>and</span> <span m='509230'>this</span> <span
  m='509400'>term</span> <span m='509640'>is</span> <span
  m='509790'>important,</span> <span m='511050'>I</span> <span
  m='511730'>can't</span> <span m='511900'>really</span> <span m='512150'>say
  it</span> <span m='512400'>rigorously.</span> <span m='513150'>But</span>
  <span m='513390'>if</span> <span m='513530'>you</span> <span
  m='513610'>think</span> <span m='513789'>about</span> <span
  m='514090'>d</span> <span m='514220'>Bt</span> <span m='514530'>square</span>
  <span m='514820'>equals</span> <span m='514990'>dt,</span> <span
  m='516339'>then d</span> <span m='516730'>times</span> <span
  m='516929'>Bt</span> <span m='517299'>is</span> <span m='517610'>kind</span>
  <span m='517960'>of</span> <span m='518090'>like</span> <span
  m='518299'>square root</span> <span m='518669'>of</span> <span
  m='518789'>dt.</span> <span m='519210'>It's</span> <span m='519620'>not
  a</span> <span m='519870'>good</span> <span m='519980'>notation,</span> <span
  m='520640'>but if</span> <span m='520789'>you</span> <span
  m='520860'>do</span> <span m='521039'>that--</span> <span
  m='522360'>these</span> <span m='522799'>two</span> <span
  m='523049'>terms</span> <span m='523610'>are</span> <span
  m='524020'>significantly</span> <span m='524750'>smaller</span> <span
  m='525100'>than</span> <span m='525240'>dt</span> <span
  m='525870'>because</span> <span m='526180'>you're</span> <span
  m='526300'>taking</span> <span m='526590'>a</span> <span m='526670'>power
  of</span> <span m='527110'>it.</span> <span m='528030'>dt</span> <span
  m='528310'>square</span> <span m='528740'>becomes a</span> <span
  m='529090'>lot</span> <span m='529290'>smaller</span> <span
  m='529580'>than</span> <span m='529720'>dt,</span> <span m='530540'>dt</span>
  <span m='530820'>[INAUDIBLE]</span> <span m='531905'>is</span> <span
  m='532160'>a lot</span> <span m='532420'>smaller than</span> <span
  m='532760'>dt.</span> <span m='534630'>But</span> <span m='534810'>this</span>
  <span m='534970'>one</span> <span m='536020'>survives</span> <span
  m='536630'>because</span> <span m='537200'>it's</span> <span
  m='537410'>equal</span> <span m='537670'>to</span> <span m='537770'>dt</span>
  <span m='537920'>here.</span> <span m='539800'>That's just the</span> <span
  m='540240'>high</span> <span m='540630'>level</span> <span
  m='540910'>description.</span> </p><p><span m='545530'>That's</span> <span
  m='546010'>a</span> <span m='546110'>slightly</span> <span
  m='546530'>more</span> <span m='546790'>sophisticated</span> <span
  m='548170'>form of</span> <span m='548470'>Ito's</span> <span
  m='548880'>lemma.</span> <span m='549470'>Let me</span> <span
  m='549610'>write</span> <span m='549790'>it</span> <span
  m='549910'>down</span> <span m='550090'>here.</span> <span
  m='552370'>And</span> <span m='552500'>let's</span> <span
  m='552720'>just</span> <span m='553531'>fix it</span> <span
  m='554022'>now.</span> <span m='558441'>If f</span> <span m='558932'>is</span>
  <span m='559423'>t of</span> <span m='559914'>Bt--</span> <span
  m='565690'>that's</span> <span m='565990'>d</span> <span m='566410'>of</span>
  <span m='566480'>f</span> <span m='567990'>is equal</span> <span
  m='568485'>to--</span> <span m='588310'>Any</span> <span
  m='588490'>questions?</span> <span m='598610'>Just</span> <span
  m='598770'>remember,</span> <span m='599400'>from</span> <span
  m='599600'>the</span> <span m='599990'>classical</span> <span
  m='600470'>calculus</span> <span m='600970'>term,</span> <span
  m='601360'>we're</span> <span m='601480'>only</span> <span
  m='601710'>adding</span> <span m='602483'>this</span> <span
  m='603210'>one</span> <span m='603510'>term</span> <span
  m='603740'>there.</span> <span m='605433'>Yes?</span> </p><p><span
  m='605884'>AUDIENCE: Why do</span> <span m='606335'>we have x</span> <span
  m='606790'>there?</span> </p><p><span m='609580'>PROFESSOR: Because</span>
  <span m='611370'>the</span> <span m='611480'>second</span> <span
  m='611780'>variable</span> <span m='612190'>is</span> <span
  m='612300'>supposed</span> <span m='612650'>to</span> <span
  m='612720'>be</span> <span m='612840'>x.</span> <span m='615400'>I</span>
  <span m='615460'>don't</span> <span m='615600'>want</span> <span
  m='615730'>to</span> <span m='615790'>write</span> <span
  m='616030'>down</span> <span m='616250'>partial</span> <span
  m='617350'>derivative</span> <span m='617740'>with</span> <span
  m='618180'>respect to a</span> <span m='618590'>Brownian</span> <span
  m='618960'>motion</span> <span m='619380'>here</span> <span
  m='619600'>because</span> <span m='620066'>it</span> <span m='620532'>doesn't
  look</span> <span m='621000'>good.</span> <span m='624190'>It</span> <span
  m='624360'>just</span> <span m='624600'>means,</span> <span
  m='624910'>take</span> <span m='625130'>the</span> <span
  m='625230'>partial</span> <span m='625560'>derivative</span> <span
  m='625910'>with</span> <span m='626080'>respect</span> <span
  m='626490'>to</span> <span m='626550'>the</span> <span
  m='626620'>second</span> <span m='627030'>term.</span> <span
  m='628910'>So</span> <span m='629030'>just</span> <span m='629330'>view</span>
  <span m='629520'>this</span> <span m='629760'>as</span> <span
  m='629900'>a</span> <span m='629970'>function</span> <span m='630370'>f</span>
  <span m='630650'>of t</span> <span m='631110'>of</span> <span
  m='631220'>x,</span> <span m='633340'>evaluate</span> <span
  m='633960'>it,</span> <span m='634320'>and</span> <span m='634510'>then</span>
  <span m='634770'>plug in</span> <span m='635240'>x</span> <span
  m='635440'>equals Bt</span> <span m='635760'>in</span> <span m='636130'>the
  end,</span> <span m='642080'>because</span> <span m='642460'>I</span> <span
  m='642520'>don't</span> <span m='642640'>want</span> <span
  m='642770'>to</span> <span m='642810'>write</span> <span
  m='643030'>down</span> <span m='643250'>partial</span> <span
  m='643610'>Bt</span> <span m='643980'>here.</span> <span
  m='651350'>Other</span> <span m='651500'>questions?</span> </p><p><span
  m='671810'>Consider</span> <span m='672370'>a</span> <span
  m='672560'>stochastic</span> <span m='673260'>process</span> <span
  m='681810'>X</span> <span m='682070'>of</span> <span m='682220'>t</span> <span
  m='684960'>such</span> <span m='685220'>that</span> <span m='685860'>d</span>
  <span m='686040'>of</span> <span m='686160'>x</span> <span
  m='687436'>is</span> <span m='687880'>equal</span> <span m='688000'>to</span>
  <span m='688310'>mu</span> <span m='688730'>times</span> <span
  m='689070'>d</span> <span m='689210'>of</span> <span m='689390'>t</span> <span
  m='690380'>plus</span> <span m='690700'>sigma</span> <span
  m='691090'>times</span> <span m='691500'>d of</span> <span
  m='691770'>Bt.</span> <span m='695360'>This</span> <span m='695540'>is</span>
  <span m='696810'>almost</span> <span m='697190'>like</span> <span
  m='697330'>a</span> <span m='697390'>Brownian</span> <span
  m='697700'>motion,</span> <span m='698160'>but</span> <span
  m='698330'>you</span> <span m='698410'>have</span> <span
  m='698540'>this</span> <span m='698720'>additional</span> <span
  m='699150'>term.</span> <span m='699720'>This is called</span> <span
  m='700170'>a drift</span> <span m='700730'>term.</span> <span
  m='706130'>Basically,</span> <span m='706420'>this</span> <span
  m='706640'>happens</span> <span m='706990'>if</span> <span
  m='707110'>Xt</span> <span m='707360'>is</span> <span m='707530'>equal</span>
  <span m='707820'>to</span> <span m='708840'>mu</span> <span
  m='709060'>t</span> <span m='710100'>plus</span> <span m='713040'>sigma
  of</span> <span m='713450'>Bt.</span> <span m='715710'>Mu</span> <span
  m='715910'>and</span> <span m='716050'>sigma</span> <span
  m='716510'>are</span> <span m='717242'>constants.</span> </p><p><span
  m='721490'>From</span> <span m='721650'>now</span> <span m='721880'>on,</span>
  <span m='722190'>what</span> <span m='722340'>we're</span> <span
  m='722470'>going</span> <span m='722570'>to</span> <span
  m='722640'>study</span> <span m='722970'>is</span> <span
  m='723120'>stochastic</span> <span m='723580'>process</span> <span
  m='724020'>of</span> <span m='724550'>this</span> <span
  m='724890'>type,</span> <span m='727700'>whose</span> <span
  m='727940'>difference</span> <span m='728390'>can</span> <span
  m='728540'>be</span> <span m='728630'>written</span> <span
  m='728860'>in</span> <span m='728990'>terms</span> <span m='729310'>of</span>
  <span m='730465'>drift</span> <span m='731020'>term</span> <span
  m='731540'>and</span> <span m='731830'>the</span> <span
  m='731900'>Brownian</span> <span m='732230'>motion</span> <span
  m='732640'>term.</span> <span m='736100'>We</span> <span
  m='736620'>want</span> <span m='736900'>to</span> <span m='736990'>do</span>
  <span m='737180'>a</span> <span m='737240'>slightly</span> <span
  m='737620'>more</span> <span m='737790'>general</span> <span m='738050'>form
  of</span> <span m='738280'>Ito's</span> <span m='738480'>lemma,</span> <span
  m='739060'>where</span> <span m='739300'>we</span> <span
  m='739410'>want</span> <span m='739960'>f</span> <span m='740260'>of</span>
  <span m='740430'>t</span> <span m='740680'>of</span> <span
  m='740850'>Xt</span> <span m='741530'>here.</span> <span
  m='745620'>That</span> <span m='745790'>will</span> <span m='745900'>be</span>
  <span m='746010'>the</span> <span m='746100'>main</span> <span
  m='746330'>object</span> <span m='746700'>of</span> <span
  m='746780'>study.</span> </p><p><span m='751593'>I'll</span> <span
  m='752060'>finally</span> <span m='752340'>state</span> <span
  m='752780'>the</span> <span m='752960'>strongest</span> <span
  m='753490'>Ito's</span> <span m='753780'>lemma</span> <span
  m='754105'>that</span> <span m='754430'>we're going to</span> <span
  m='754760'>use.</span> <span m='764924'>f</span> <span m='765910'>is</span>
  <span m='766150'>some</span> <span m='766520'>smooth</span> <span
  m='766890'>function</span> <span m='772620'>and</span> <span
  m='772800'>Xt</span> <span m='773100'>is</span> <span m='773300'>a</span>
  <span m='773410'>stochastic</span> <span m='773970'>process</span> <span
  m='774370'>like</span> <span m='774570'>that.</span> <span
  m='776151'>Xt</span> <span m='776700'>satisfies</span> <span
  m='786230'>where</span> <span m='786480'>Bt</span> <span m='786640'>is</span>
  <span m='786810'>the</span> <span m='786920'>Brownian</span> <span
  m='787150'>motion.</span> <span m='788770'>Then</span> <span
  m='795020'>df</span> <span m='795160'>of</span> <span m='795530'>t,</span>
  <span m='795960'>Xt</span> <span m='796390'>can</span> <span
  m='796570'>be</span> <span m='796650'>expressed</span> <span
  m='797210'>as--</span> <span m='814520'>it's</span> <span
  m='814690'>just</span> <span m='814890'>getting</span> <span
  m='815210'>more</span> <span m='815500'>and</span> <span
  m='815560'>more</span> <span m='815760'>complicated.</span> </p><p><span
  m='818510'>But</span> <span m='818630'>it's</span> <span
  m='818790'>based</span> <span m='819050'>on</span> <span
  m='819160'>this</span> <span m='819350'>one</span> <span
  m='819690'>simple</span> <span m='820110'>principle,</span> <span
  m='820730'>really.</span> <span m='821580'>It</span> <span
  m='822010'>all</span> <span m='822290'>happened</span> <span
  m='822590'>because</span> <span m='822870'>of</span> <span
  m='823010'>quadratic</span> <span m='823310'>variation.</span> <span
  m='825110'>Now I'll</span> <span m='825320'>show</span> <span
  m='825540'>you</span> <span m='825690'>why</span> <span m='826640'>this</span>
  <span m='827060'>form</span> <span m='828790'>deviates</span> <span
  m='829120'>from</span> <span m='829260'>this</span> <span
  m='829450'>form</span> <span m='829720'>when we</span> <span
  m='829880'>replace</span> <span m='830165'>B</span> <span m='830790'>to</span>
  <span m='831190'>x.</span> </p><p><span m='838320'>Remember</span> <span
  m='838710'>here</span> <span m='840560'>all</span> <span
  m='840860'>other</span> <span m='841080'>terms</span> <span
  m='841920'>didn't</span> <span m='842100'>matter,</span> <span
  m='843400'>that</span> <span m='843480'>the</span> <span
  m='843600'>only</span> <span m='843810'>term</span> <span
  m='844050'>that</span> <span m='844260'>mattered</span> <span
  m='844630'>was</span> <span m='846060'>partial</span> <span
  m='846280'>square</span> <span m='846743'>of</span> <span m='847206'>f</span>
  <span m='848595'>of</span> <span m='850940'>dx</span> <span
  m='851390'>square.</span> <span m='857490'>To</span> <span
  m='857640'>prove</span> <span m='858000'>this,</span> <span
  m='867340'>note</span> <span m='867520'>that</span> <span m='867790'>df</span>
  <span m='868954'>is</span> <span m='869446'>partial</span> <span
  m='869940'>f</span> <span m='870040'>over</span> <span
  m='870345'>partial</span> <span m='870780'>t</span> <span m='870990'>dt</span>
  <span m='872450'>plus</span> <span m='872880'>partial</span> <span
  m='873145'>f</span> <span m='873410'>over partial</span> <span
  m='873830'>x</span> <span m='875190'>d of</span> <span m='875540'>Xt</span>
  <span m='877066'>plus</span> <span m='877982'>1/2</span> <span
  m='881190'>of</span> <span m='881280'>d</span> <span m='881580'>of</span>
  <span m='881680'>x</span> <span m='882500'>squared.</span> <span
  m='885490'>Just</span> <span m='885580'>exactly</span> <span
  m='886070'>the</span> <span m='886180'>same,</span> <span
  m='886610'>but</span> <span m='886780'>I've</span> <span
  m='886890'>place</span> <span m='887430'>the</span> <span m='887580'>d</span>
  <span m='887970'>Bt</span> <span m='888510'>previously,</span> <span
  m='888970'>what</span> <span m='889110'>we</span> <span m='889220'>had</span>
  <span m='889430'>d Bt</span> <span m='889570'>I'm</span> <span
  m='889990'>replacing</span> <span m='890250'>to</span> <span
  m='890510'>dXt.</span> </p><p><span m='892885'>Now</span> <span
  m='893330'>what</span> <span m='893430'>changes</span> <span
  m='893770'>is</span> <span m='894680'>dXt</span> <span m='895070'>can</span>
  <span m='895220'>be</span> <span m='895320'>written</span> <span
  m='895540'>like</span> <span m='895760'>that.</span> <span m='898280'>If
  you</span> <span m='898460'>just</span> <span m='898650'>plug</span> <span
  m='898900'>it</span> <span m='898960'>in,</span> <span m='902754'>to
  get</span> <span m='903210'>here</span> <span m='903580'>is</span> <span
  m='907210'>partial</span> <span m='907460'>f over</span> <span
  m='907940'>partial x</span> <span m='909380'>mu</span> <span
  m='909610'>dt</span> <span m='910660'>plus</span> <span
  m='911130'>sigma</span> <span m='911980'>of</span> <span m='912340'>d</span>
  <span m='912705'>Bt.</span> <span m='914010'>Then what</span> <span
  m='914480'>you</span> <span m='914610'>get</span> <span m='914740'>here</span>
  <span m='915110'>is</span> <span m='915640'>1/2</span> <span
  m='916230'>of</span> <span m='917706'>partials</span> <span m='919680'>and
  then</span> <span m='919980'>mu</span> <span m='921870'>plus</span> <span
  m='922200'>sigma</span> <span m='922620'>d</span> <span m='922840'>Bt</span>
  <span m='923300'>square.</span> </p><p><span m='926620'>Out</span> <span
  m='926870'>of</span> <span m='927030'>those</span> <span
  m='927170'>three</span> <span m='927450'>terms</span> <span
  m='927790'>here</span> <span m='928660'>we</span> <span m='928810'>get</span>
  <span m='929020'>mu</span> <span m='929210'>square</span> <span
  m='929600'>dt</span> <span m='930720'>square</span> <span
  m='931250'>plus</span> <span m='931690'>2</span> <span m='931900'>times</span>
  <span m='932430'>mu</span> <span m='932690'>sigma</span> <span m='933630'>d mu
  dB</span> <span m='934930'>plus</span> <span m='935880'>sigma</span> <span
  m='936260'>square</span> <span m='936640'>d Bt</span> <span
  m='937100'>square.</span> <span m='937590'>Only</span> <span
  m='938260'>this</span> <span m='938420'>was</span> <span
  m='938600'>survives,</span> <span m='939180'>just</span> <span
  m='939430'>as</span> <span m='939540'>before.</span> <span
  m='940370'>These</span> <span m='940840'>ones</span> <span
  m='941250'>disappear.</span> </p><p><span m='942970'>And</span> <span
  m='943110'>then</span> <span m='943250'>you</span> <span
  m='943370'>just</span> <span m='943580'>collect</span> <span
  m='943830'>the</span> <span m='943920'>terms.</span> <span
  m='945180'>So</span> <span m='945470'>dt--</span> <span
  m='945990'>there's</span> <span m='946210'>one</span> <span
  m='946400'>dt</span> <span m='946840'>here.</span> <span
  m='948690'>There's</span> <span m='948980'>mu</span> <span
  m='949280'>times</span> <span m='951885'>that</span> <span
  m='952360'>here,</span> <span m='953500'>and</span> <span
  m='953900'>that</span> <span m='954050'>one will</span> <span
  m='954330'>become</span> <span m='954630'>a</span> <span m='954680'>dt.</span>
  <span m='955673'>It's 1/2</span> <span m='956106'>of</span> <span
  m='956540'>sigma</span> <span m='957010'>square</span> <span
  m='958336'>f</span> <span m='958829'>square</span> <span m='960308'>of
  dt.</span> <span m='961300'>And</span> <span m='961510'>there's</span> <span
  m='961670'>only</span> <span m='961900'>one</span> <span m='962100'>d
  Bt</span> <span m='962435'>term</span> <span m='962770'>here.</span> <span
  m='964770'>Sigma--</span> <span m='972540'>I</span> <span m='972640'>made
  a</span> <span m='972860'>mistake,</span> <span m='973828'>sigma.</span>
  </p><p><span m='985080'>This</span> <span m='985290'>will</span> <span
  m='985390'>be</span> <span m='985540'>a</span> <span m='985590'>form</span>
  <span m='985850'>that</span> <span m='986090'>you'll</span> <span
  m='986310'>use</span> <span m='986640'>the</span> <span
  m='986740'>most,</span> <span m='987480'>because</span> <span
  m='988260'>you</span> <span m='988350'>want</span> <span m='988530'>to</span>
  <span m='988580'>evaluate</span> <span m='989070'>some</span> <span
  m='989230'>stochastic</span> <span m='989810'>process--</span> <span
  m='992710'>some</span> <span m='993600'>function</span> <span
  m='994740'>that</span> <span m='995070'>depends</span> <span
  m='995450'>on</span> <span m='995640'>time</span> <span m='996150'>and</span>
  <span m='996330'>that</span> <span m='996590'>stochastic</span> <span
  m='997000'>process.</span> <span m='997580'>You</span> <span
  m='997670'>want</span> <span m='997810'>to</span> <span
  m='997870'>understand</span> <span m='998350'>the</span> <span
  m='998440'>difference,</span> <span m='998930'>df.</span> <span
  m='1002930'>The</span> <span m='1003220'>X</span> <span
  m='1003590'>would</span> <span m='1003750'>have</span> <span
  m='1003880'>been</span> <span m='1004000'>written</span> <span
  m='1004310'>in</span> <span m='1004400'>terms</span> <span m='1004660'>of
  a</span> <span m='1004910'>Brownian</span> <span m='1005220'>motion and</span>
  <span m='1005640'>a drift</span> <span m='1005950'>term,</span> <span
  m='1007000'>and</span> <span m='1007180'>then</span> <span
  m='1007550'>that's</span> <span m='1007800'>the Ito</span> <span
  m='1008160'>lemma</span> <span m='1008480'>for you.</span> </p><p><span
  m='1010090'>But</span> <span m='1010370'>if</span> <span
  m='1010460'>you</span> <span m='1010570'>want</span> <span
  m='1010750'>to</span> <span m='1010820'>just--</span> <span
  m='1011180'>if</span> <span m='1011290'>you</span> <span
  m='1011360'>just</span> <span m='1011680'>see</span> <span
  m='1011970'>this</span> <span m='1012620'>for</span> <span
  m='1012760'>the</span> <span m='1012850'>first</span> <span
  m='1013130'>time,</span> <span m='1013420'>it</span> <span m='1013520'>just
  looks</span> <span m='1014490'>too</span> <span
  m='1014710'>complicated.</span> <span m='1016420'>You</span> <span
  m='1016480'>don't</span> <span m='1016660'>understand</span> <span
  m='1017180'>where</span> <span m='1017410'>all</span> <span
  m='1017590'>the</span> <span m='1017680'>terms</span> <span
  m='1017960'>are</span> <span m='1018050'>coming</span> <span
  m='1018360'>from.</span> <span m='1019460'>But</span> <span
  m='1019630'>in</span> <span m='1019710'>reality,</span> <span
  m='1020180'>what</span> <span m='1020350'>it's</span> <span
  m='1020540'>really</span> <span m='1020830'>doing</span> <span
  m='1021150'>is</span> <span m='1021330'>just</span> <span
  m='1021600'>take</span> <span m='1023110'>this</span> <span
  m='1023290'>Taylor</span> <span m='1023640'>expansion.</span> <span
  m='1025359'>Remember</span> <span m='1025760'>these</span> <span
  m='1026060'>two</span> <span m='1026700'>classical</span> <span
  m='1027329'>terms,</span> <span m='1028170'>and</span> <span
  m='1028230'>remember</span> <span m='1028540'>that</span> <span
  m='1028760'>there's</span> <span m='1028960'>one</span> <span
  m='1029109'>more</span> <span m='1029310'>term</span> <span
  m='1029579'>here.</span> <span m='1031190'>You</span> <span
  m='1031310'>can</span> <span m='1031450'>derive</span> <span
  m='1031900'>it</span> <span m='1032000'>if</span> <span m='1032140'>you</span>
  <span m='1032230'>want</span> <span m='1032500'>to.</span> </p><p><span
  m='1038990'>Really</span> <span m='1039270'>try</span> <span
  m='1039520'>to</span> <span m='1039630'>know</span> <span
  m='1039829'>where</span> <span m='1040210'>it</span> <span
  m='1040290'>all</span> <span m='1040460'>comes</span> <span
  m='1040740'>from.</span> <span m='1041030'>It</span> <span
  m='1041220'>all</span> <span m='1041490'>started</span> <span
  m='1041839'>from</span> <span m='1042020'>this</span> <span
  m='1042319'>one</span> <span m='1042550'>fact,</span> <span
  m='1043296'>quadratic</span> <span m='1043670'>variation,</span> <span
  m='1048140'>because</span> <span m='1049150'>that</span> <span
  m='1049380'>made</span> <span m='1050160'>some</span> <span
  m='1050460'>of</span> <span m='1050610'>the</span> <span
  m='1050720'>second</span> <span m='1051130'>derivative</span> <span
  m='1051570'>survive,</span> <span m='1052940'>and</span> <span
  m='1053110'>because of</span> <span m='1053520'>those,</span> <span
  m='1053880'>you</span> <span m='1054000'>get</span> <span
  m='1054310'>these</span> <span m='1054610'>kind</span> <span
  m='1054850'>of</span> <span m='1054960'>complicated</span> <span
  m='1055440'>terms.</span> <span m='1059370'>Questions?</span> <span
  m='1071165'>Let's</span> <span m='1071430'>do</span> <span
  m='1071570'>some</span> <span m='1071740'>examples.</span> <span
  m='1073450'>That's</span> <span m='1073700'>too</span> <span
  m='1073860'>much.</span> <span m='1082390'>Sorry,</span> <span
  m='1083330'>I'm</span> <span m='1083440'>going</span> <span
  m='1083570'>to</span> <span m='1083620'>use</span> <span m='1083800'>it</span>
  <span m='1083900'>a</span> <span m='1083970'>lot,</span> <span
  m='1084290'>so</span> <span m='1084400'>let</span> <span m='1084510'>me</span>
  <span m='1084670'>record</span> <span m='1084965'>it.</span> </p><p><span
  m='1129671'>Example</span> <span m='1131667'>number</span> <span
  m='1132220'>one.</span> <span m='1134590'>Let</span> <span
  m='1134960'>f</span> <span m='1135160'>of</span> <span m='1135300'>x</span>
  <span m='1135770'>be</span> <span m='1136200'>equal</span> <span
  m='1136630'>to</span> <span m='1136720'>x</span> <span
  m='1137130'>square,</span> <span m='1143340'>and</span> <span
  m='1143460'>then</span> <span m='1144030'>you</span> <span
  m='1144270'>want</span> <span m='1144510'>to</span> <span
  m='1144580'>compute</span> <span m='1144990'>d of</span> <span
  m='1145130'>f</span> <span m='1146348'>at</span> <span m='1146754'>Bt.</span>
  <span m='1153590'>I'll</span> <span m='1153730'>give</span> <span
  m='1153840'>you</span> <span m='1154110'>three</span> <span
  m='1154280'>minutes</span> <span m='1154690'>just</span> <span
  m='1154860'>to</span> <span m='1154950'>try</span> <span m='1155190'>a</span>
  <span m='1155220'>practice.</span> <span m='1156726'>Did you</span> <span
  m='1157090'>manage</span> <span m='1157400'>to</span> <span
  m='1157520'>do</span> <span m='1157670'>this?</span> <span
  m='1165610'>It's</span> <span m='1165950'>a</span> <span
  m='1165990'>very</span> <span m='1166230'>simple</span> <span
  m='1166620'>example.</span> </p><p><span m='1172400'>Assume</span> <span
  m='1172700'>it's</span> <span m='1172870'>just</span> <span
  m='1176460'>the</span> <span m='1176510'>function</span> <span
  m='1176890'>of</span> <span m='1177010'>two</span> <span
  m='1177210'>variables,</span> <span m='1177740'>but</span> <span
  m='1177890'>it</span> <span m='1177980'>doesn't</span> <span
  m='1178220'>depend</span> <span m='1178530'>on</span> <span
  m='1178740'>t.</span> <span m='1180010'>You</span> <span
  m='1180090'>don't</span> <span m='1180260'>have</span> <span
  m='1180400'>to</span> <span m='1180510'>do</span> <span
  m='1180650'>that,</span> <span m='1180910'>but let</span> <span m='1181390'>me
  just</span> <span m='1181730'>do</span> <span m='1181830'>that.</span> <span
  m='1184030'>Partial</span> <span m='1184560'>f</span> <span
  m='1184740'>over</span> <span m='1184980'>partial</span> <span
  m='1185310'>t</span> <span m='1185470'>is 0.</span> <span
  m='1189040'>Partial</span> <span m='1189305'>f</span> <span
  m='1189570'>over</span> <span m='1189850'>partial</span> <span
  m='1190250'>x</span> <span m='1190540'>is</span> <span
  m='1190630'>equal</span> <span m='1190880'>to</span> <span
  m='1191140'>2x,</span> <span m='1192970'>and</span> <span
  m='1193120'>the</span> <span m='1193230'>second</span> <span
  m='1193570'>derivative</span> <span m='1195587'>equal to</span> <span
  m='1196076'>2</span> <span m='1199988'>at</span> <span m='1200480'>tx.</span>
  <span m='1201580'>Now</span> <span m='1201680'>we just</span> <span
  m='1202010'>plug in</span> <span m='1202400'>t</span> <span
  m='1202690'>comma</span> <span m='1202980'>Bt,</span> <span
  m='1206960'>and</span> <span m='1207850'>what</span> <span
  m='1208010'>you</span> <span m='1208100'>have</span> <span
  m='1208320'>is</span> <span m='1208460'>mu</span> <span
  m='1208650'>equals</span> <span m='1210050'>0,</span> <span
  m='1210460'>sigma</span> <span m='1210680'>equals</span> <span
  m='1211180'>1,</span> <span m='1211530'>if</span> <span m='1211880'>you
  want</span> <span m='1212130'>to</span> <span m='1212220'>write</span> <span
  m='1212440'>it</span> <span m='1212570'>in this formula.</span> </p><p><span
  m='1219460'>What</span> <span m='1219600'>you're</span> <span
  m='1219700'>going</span> <span m='1219810'>to</span> <span
  m='1219850'>have</span> <span m='1220080'>is</span> <span m='1220280'>2</span>
  <span m='1220510'>times</span> <span m='1220940'>Bt</span> <span
  m='1223320'>of</span> <span m='1223670'>d</span> <span m='1223820'>Bt</span>
  <span m='1225940'>plus</span> <span m='1226270'>1</span> <span
  m='1226440'>over</span> <span m='1226670'>2</span> <span
  m='1226860'>times</span> <span m='1227330'>2dt.</span> <span m='1230322'>You
  should</span> <span m='1230794'>write it down.</span> <span
  m='1234570'>You</span> <span m='1234700'>can</span> <span
  m='1234960'>either</span> <span m='1235270'>use</span> <span
  m='1235490'>these</span> <span m='1235720'>parameters</span> <span
  m='1236815'>and</span> <span m='1238520'>just</span> <span m='1238720'>plug
  in</span> <span m='1239120'>each</span> <span m='1239390'>of</span> <span
  m='1239480'>them</span> <span m='1240060'>to</span> <span
  m='1240520'>figure</span> <span m='1240780'>it</span> <span
  m='1240860'>out.</span> <span m='1241200'>Or</span> <span m='1241370'>a</span>
  <span m='1241410'>different</span> <span m='1241680'>way to</span> <span
  m='1241790'>do it</span> <span m='1242050'>is</span> <span
  m='1242920'>really</span> <span m='1243130'>write</span> <span
  m='1243390'>down,</span> <span m='1243590'>remember</span> <span
  m='1243980'>the</span> <span m='1244120'>proof.</span> </p><p><span
  m='1245340'>This</span> <span m='1245520'>is</span> <span
  m='1245690'>partial</span> <span m='1245930'>f</span> <span
  m='1246030'>over</span> <span m='1246420'>partial</span> <span
  m='1246860'>t</span> <span m='1247510'>dt</span> <span m='1248490'>plus</span>
  <span m='1248860'>partial</span> <span m='1249335'>f over</span> <span
  m='1249810'>partial</span> <span m='1250240'>x</span> <span
  m='1250660'>dx</span> <span m='1251429'>plus</span> <span
  m='1251928'>1/2--</span> <span m='1256920'>remember</span> <span
  m='1257210'>this</span> <span m='1257470'>one.</span> <span m='1258350'>And
  x</span> <span m='1258790'>is</span> <span m='1259210'>d</span> <span
  m='1259465'>Bt</span> <span m='1259720'>here.</span> <span
  m='1264190'>That</span> <span m='1264250'>one is</span> <span
  m='1264510'>0,</span> <span m='1265260'>that</span> <span
  m='1265440'>one</span> <span m='1265650'>was</span> <span
  m='1265870'>2x,</span> <span m='1266050'>so</span> <span
  m='1266530'>2Bt</span> <span m='1267540'>d</span> <span m='1267990'>Bt.</span>
  <span m='1269100'>Use</span> <span m='1269350'>it</span> <span
  m='1269450'>one</span> <span m='1269610'>more</span> <span
  m='1269780'>time,</span> <span m='1270100'>so you</span> <span
  m='1270420'>get</span> <span m='1271388'>dt.</span> <span
  m='1280600'>Make</span> <span m='1280870'>sense?</span> </p><p><span
  m='1284160'>Let's</span> <span m='1284440'>do</span> <span m='1286050'>a
  few</span> <span m='1286370'>more</span> <span m='1286590'>examples.</span>
  <span m='1323150'>And</span> <span m='1323390'>you</span> <span
  m='1323470'>want</span> <span m='1323630'>to</span> <span
  m='1323700'>compute</span> <span m='1324210'>d</span> <span
  m='1324360'>of</span> <span m='1324460'>f</span> <span m='1324920'>at</span>
  <span m='1325409'>t comma</span> <span m='1325898'>B of</span> <span
  m='1326387'>t.</span> <span m='1331280'>Let's</span> <span
  m='1331630'>do</span> <span m='1331760'>it</span> <span
  m='1331880'>this</span> <span m='1332070'>time.</span> <span
  m='1333810'>Again,</span> <span m='1334150'>partial</span> <span
  m='1334560'>f</span> <span m='1334770'>over</span> <span
  m='1335000'>partial</span> <span m='1335450'>t</span> <span
  m='1336790'>dt</span> <span m='1338370'>plus</span> <span
  m='1338850'>partial</span> <span m='1339200'>f</span> <span
  m='1339440'>over</span> <span m='1339650'>partial</span> <span
  m='1340210'>x</span> <span m='1341540'>d</span> <span m='1341720'>Bt.</span>
  <span m='1343500'>That's</span> <span m='1343650'>the</span> <span
  m='1343740'>first</span> <span m='1344040'>order of</span> <span
  m='1344240'>terms.</span> <span m='1344820'>The</span> <span
  m='1344920'>second</span> <span m='1345200'>order of</span> <span
  m='1345380'>term</span> <span m='1345660'>is</span> <span
  m='1346420'>1/2</span> <span m='1347830'>partial</span> <span
  m='1348200'>square</span> <span m='1348470'>f</span> <span
  m='1348740'>over</span> <span m='1349120'>partial</span> <span
  m='1349425'>x</span> <span m='1350030'>square</span> <span
  m='1350960'>of</span> <span m='1351170'>d</span> <span m='1351430'>Bt</span>
  <span m='1351830'>square,</span> <span m='1353840'>which</span> <span
  m='1354250'>is</span> <span m='1354420'>equal</span> <span
  m='1354760'>to</span> <span m='1355244'>dt.</span> </p><p><span
  m='1363280'>Let's</span> <span m='1363460'>do</span> <span
  m='1363560'>it.</span> <span m='1363640'>Partial</span> <span
  m='1363960'>f</span> <span m='1364070'>over</span> <span
  m='1364280'>partial</span> <span m='1364640'>t,</span> <span
  m='1365730'>you</span> <span m='1365860'>get</span> <span
  m='1366250'>mu</span> <span m='1366490'>times</span> <span
  m='1366790'>f.</span> <span m='1368720'>This</span> <span
  m='1368940'>one</span> <span m='1369140'>is</span> <span
  m='1369260'>just</span> <span m='1369600'>equal</span> <span
  m='1369920'>to</span> <span m='1370140'>mu</span> <span
  m='1370330'>times</span> <span m='1370590'>f.</span> <span m='1373720'>Maybe
  I'm</span> <span m='1374090'>going</span> <span m='1374330'>too</span> <span
  m='1374530'>quick.</span> <span m='1375220'>Mu</span> <span
  m='1375440'>times</span> <span m='1375780'>e to</span> <span
  m='1376120'>the</span> <span m='1376340'>mu</span> <span m='1376670'>t</span>
  <span m='1377700'>plus</span> <span m='1378050'>dx</span> <span
  m='1380098'>dt.</span> </p><p><span m='1382510'>Partial f</span> <span
  m='1382950'>over</span> <span m='1383120'>partial</span> <span
  m='1383410'>x</span> <span m='1383620'>is</span> <span
  m='1384800'>sigma</span> <span m='1385270'>times</span> <span m='1385550'>e to
  the</span> <span m='1385680'>mu</span> <span m='1386850'>t</span> <span
  m='1387020'>plus</span> <span m='1387380'>dx,</span> <span m='1389060'>and
  then</span> <span m='1389350'>d Bt</span> <span m='1392120'>plus--</span>
  <span m='1393850'>if you</span> <span m='1393930'>take</span> <span
  m='1394140'>the</span> <span m='1394220'>second</span> <span
  m='1394540'>derivative,</span> <span m='1395190'>you</span> <span
  m='1395320'>do</span> <span m='1395430'>that</span> <span
  m='1395620'>again,</span> <span m='1396750'>what you</span> <span
  m='1396850'>get</span> <span m='1397060'>is</span> <span
  m='1397545'>1/2,</span> <span m='1398570'>and then</span> <span
  m='1398850'>sigma</span> <span m='1399230'>square</span> <span
  m='1399810'>times</span> <span m='1400190'>e</span> <span m='1400350'>to
  the</span> <span m='1400530'>mu</span> <span m='1400800'>t</span> <span
  m='1401520'>plus</span> <span m='1401970'>dx</span> <span
  m='1403320'>dt.</span> <span m='1405880'>Yes?</span> </p><p><span
  m='1406372'>AUDIENCE: In the original</span> <span m='1406864'>equation
  that</span> <span m='1407356'>you just</span> <span m='1407848'>wrote, isn't
  it</span> <span m='1408340'>1/2 times</span> <span m='1408832'>sigma</span>
  <span m='1409324'>squared,</span> <span m='1409816'>and</span> <span
  m='1410308'>then the</span> <span m='1410800'>second derivative?</span> <span
  m='1411784'>Up there.</span> </p><p><span m='1414260'>PROFESSOR: Here?</span>
  </p><p><span m='1414520'>AUDIENCE: Yes.</span> </p><p><span
  m='1415470'>PROFESSOR: 1/2?</span> </p><p><span m='1415630'>AUDIENCE: Times
  sigma</span> <span m='1416092'>squared.</span> </p><p><span
  m='1417940'>PROFESSOR: Oh,</span> <span m='1418140'>sigma--</span> <span
  m='1419180'>OK,</span> <span m='1419380'>that's</span> <span
  m='1419620'>a</span> <span m='1419680'>good</span> <span
  m='1419840'>question.</span> <span m='1420510'>But</span> <span
  m='1421760'>that</span> <span m='1421990'>sigma</span> <span
  m='1422530'>is</span> <span m='1422740'>different.</span> <span
  m='1424070'>That's</span> <span m='1424300'>if</span> <span
  m='1424400'>you</span> <span m='1424500'>plug in</span> <span
  m='1424840'>Xt</span> <span m='1425310'>here.</span> <span m='1426250'>If
  you</span> <span m='1426340'>plug in</span> <span m='1426720'>Xt</span> <span
  m='1427755'>where</span> <span m='1428080'>Xt</span> <span m='1428531'>is
  equal</span> <span m='1428982'>to</span> <span m='1430335'>mu</span> <span
  m='1430790'>prime</span> <span m='1432490'>dt</span> <span
  m='1432950'>plus</span> <span m='1433610'>sigma</span> <span
  m='1433980'>prime</span> <span m='1435136'>d of</span> <span
  m='1435520'>Bt,</span> <span m='1437170'>then</span> <span
  m='1437340'>that</span> <span m='1437560'>sigma</span> <span
  m='1437850'>prime</span> <span m='1438140'>will become</span> <span
  m='1438410'>a</span> <span m='1438680'>sigma</span> <span
  m='1438970'>prime</span> <span m='1439190'>square</span> <span
  m='1439500'>here.</span> <span m='1442020'>But</span> <span
  m='1442190'>here</span> <span m='1442440'>the</span> <span
  m='1442560'>function</span> <span m='1443020'>is</span> <span m='1443320'>mu
  and</span> <span m='1443620'>sigma,</span> <span m='1444160'>so maybe</span>
  <span m='1444390'>it's not a</span> <span m='1444790'>good notation.</span>
  <span m='1445540'>Let me</span> <span m='1445650'>use</span> <span
  m='1445940'>a and</span> <span m='1446310'>b</span> <span
  m='1446480'>here</span> <span m='1446910'>instead.</span> <span
  m='1451170'>The</span> <span m='1451270'>sigma</span> <span
  m='1451580'>here</span> <span m='1452010'>is</span> <span
  m='1453060'>different</span> <span m='1453360'>from</span> <span
  m='1453510'>here.</span> </p><p><span m='1453890'>AUDIENCE: Yeah, that makes
  a</span> <span m='1454302'>lot more sense.</span> </p><p><span
  m='1455950'>PROFESSOR: If</span> <span m='1456060'>you</span> <span
  m='1456190'>replace</span> <span m='1456510'>a and</span> <span
  m='1456830'>b,</span> <span m='1458826'>but</span> <span m='1459310'>I
  already</span> <span m='1459745'>wrote</span> <span m='1460180'>down</span>
  <span m='1460330'>all mu's</span> <span m='1460725'>and sigma's.</span> <span
  m='1463310'>That's</span> <span m='1463510'>a</span> <span
  m='1463550'>good</span> <span m='1463690'>point,</span> <span
  m='1463980'>actually.</span> <span m='1465660'>But</span> <span
  m='1465940'>that's</span> <span m='1466320'>when</span> <span
  m='1466450'>you</span> <span m='1466530'>want</span> <span
  m='1466700'>to</span> <span m='1466780'>consider a</span> <span
  m='1467210'>general</span> <span m='1467600'>stochastic</span> <span
  m='1468150'>process</span> <span m='1468610'>here</span> <span
  m='1469250'>other</span> <span m='1469580'>than</span> <span
  m='1469800'>Brownian</span> <span m='1470140'>motion.</span> <span
  m='1471276'>But</span> <span m='1471650'>here</span> <span
  m='1471920'>it's</span> <span m='1472030'>just</span> <span
  m='1472210'>a</span> <span m='1472230'>Brownian</span> <span
  m='1472480'>motion,</span> <span m='1473030'>so</span> <span
  m='1473190'>it's</span> <span m='1473320'>the</span> <span
  m='1473390'>most</span> <span m='1473600'>simple</span> <span
  m='1473870'>form.</span> <span m='1475470'>And</span> <span
  m='1475560'>that's</span> <span m='1475740'>what you</span> <span
  m='1475980'>get.</span> </p><p><span m='1479300'>Mu</span> <span
  m='1479970'>plus</span> <span m='1481040'>1/2</span> <span
  m='1481440'>sigma</span> <span m='1481870'>square--</span> <span
  m='1483180'>and</span> <span m='1483340'>these</span> <span
  m='1483580'>are</span> <span m='1483680'>just</span> <span
  m='1483910'>all</span> <span m='1484180'>f</span> <span
  m='1484620'>itself.</span> <span m='1485940'>That's</span> <span
  m='1486090'>the</span> <span m='1486140'>good</span> <span
  m='1486290'>thing</span> <span m='1486430'>about</span> <span
  m='1486660'>exponential.</span> <span m='1488130'>f</span> <span
  m='1488370'>times</span> <span m='1488700'>dt</span> <span
  m='1489605'>plus</span> <span m='1490060'>sigma</span> <span
  m='1490590'>times</span> <span m='1491090'>d of</span> <span
  m='1491440'>Bt.</span> <span m='1503930'>Make</span> <span
  m='1504150'>sense?</span> </p><p><span m='1514180'>And</span> <span
  m='1514470'>there's</span> <span m='1514650'>a</span> <span
  m='1514700'>reason</span> <span m='1515100'>I</span> <span
  m='1515180'>was</span> <span m='1515810'>covering</span> <span
  m='1516200'>this</span> <span m='1516400'>example.</span> <span
  m='1517896'>It's</span> <span m='1518310'>because--</span> <span
  m='1520710'>let's</span> <span m='1520920'>come</span> <span
  m='1521060'>back</span> <span m='1521240'>to</span> <span
  m='1521340'>this</span> <span m='1521510'>question.</span> <span
  m='1522140'>You</span> <span m='1522260'>want</span> <span
  m='1522520'>to</span> <span m='1522600'>model</span> <span
  m='1525130'>stock</span> <span m='1525390'>price</span> <span
  m='1530820'>using</span> <span m='1531080'>Brownian</span> <span
  m='1531410'>motion,</span> <span m='1534670'>Brownian</span> <span
  m='1535110'>process,</span> <span m='1537808'>S of</span> <span
  m='1538300'>t.</span> </p><p><span m='1540760'>But</span> <span
  m='1540920'>you</span> <span m='1541010'>don't</span> <span
  m='1541170'>want</span> <span m='1541350'>St</span> <span
  m='1541900'>to</span> <span m='1542030'>be</span> <span m='1542180'>a</span>
  <span m='1542240'>Brownian</span> <span m='1542530'>motion.</span> <span
  m='1543040'>What you</span> <span m='1543220'>want</span> <span
  m='1543500'>is</span> <span m='1543640'>a</span> <span
  m='1545180'>percentile</span> <span m='1545770'>difference</span> <span
  m='1546760'>to</span> <span m='1546990'>be</span> <span m='1547255'>a</span>
  <span m='1547520'>Brownian</span> <span m='1547760'>motion,</span> <span
  m='1548340'>so you</span> <span m='1548500'>want</span> <span
  m='1549320'>this</span> <span m='1549540'>percentile</span> <span
  m='1550140'>difference</span> <span m='1551400'>to</span> <span
  m='1551530'>behave</span> <span m='1552260'>like</span> <span
  m='1552450'>a</span> <span m='1552500'>Brownian</span> <span
  m='1552870'>motion</span> <span m='1557780'>with</span> <span
  m='1557940'>some</span> <span m='1558210'>variance.</span> </p><p><span
  m='1563350'>The</span> <span m='1563450'>question</span> <span
  m='1563860'>was,</span> <span m='1565523'>is</span> <span
  m='1566850'>St</span> <span m='1567320'>equal</span> <span
  m='1567580'>to</span> <span m='1567840'>e</span> <span m='1567990'>to
  the</span> <span m='1568180'>sigma</span> <span m='1568580'>times</span> <span
  m='1568910'>B</span> <span m='1569090'>of</span> <span m='1569210'>t</span>
  <span m='1571500'>in</span> <span m='1571590'>this</span> <span
  m='1571840'>case?</span> <span m='1572745'>And</span> <span
  m='1573200'>I</span> <span m='1573300'>already</span> <span
  m='1573610'>told</span> <span m='1573890'>you</span> <span
  m='1574100'>last</span> <span m='1574350'>time</span> <span
  m='1574510'>that</span> <span m='1574820'>no,</span> <span
  m='1575260'>it's</span> <span m='1575440'>not</span> <span
  m='1575650'>true.</span> <span m='1576260'>We</span> <span m='1576410'>can
  now</span> <span m='1576740'>see</span> <span m='1576870'>why</span> <span
  m='1577120'>it's</span> <span m='1577260'>not</span> <span
  m='1577450'>true.</span> </p><p><span m='1578360'>Take</span> <span
  m='1578600'>this</span> <span m='1578720'>function,</span> <span
  m='1579510'>St</span> <span m='1579780'>equals</span> <span
  m='1580230'>e</span> <span m='1580410'>to the</span> <span
  m='1580580'>sigma</span> <span m='1580880'>Bt,</span> <span
  m='1582190'>that's</span> <span m='1582390'>exactly</span> <span
  m='1582740'>where</span> <span m='1582890'>mu</span> <span
  m='1582980'>is</span> <span m='1583130'>equal</span> <span
  m='1583370'>to</span> <span m='1583460'>0</span> <span
  m='1583800'>here.</span> <span m='1584990'>What</span> <span
  m='1585170'>we</span> <span m='1585300'>got</span> <span
  m='1585590'>here</span> <span m='1585860'>was</span> <span m='1587100'>d
  of</span> <span m='1587380'>St,</span> <span m='1588030'>in</span> <span
  m='1588150'>this</span> <span m='1588430'>case,</span> <span
  m='1588990'>is</span> <span m='1589130'>equal</span> <span
  m='1589470'>to</span> <span m='1590360'>mu</span> <span m='1590590'>is</span>
  <span m='1590740'>0,</span> <span m='1591220'>so</span> <span
  m='1591390'>we</span> <span m='1591510'>get</span> <span
  m='1591680'>1/2</span> <span m='1592180'>of</span> <span
  m='1592280'>sigma</span> <span m='1592650'>square</span> <span
  m='1593820'>times</span> <span m='1594300'>dt</span> <span
  m='1595470'>plus</span> <span m='1596070'>sigma</span> <span
  m='1596430'>times</span> <span m='1596790'>d of Bt.</span> <span
  m='1600180'>We</span> <span m='1600500'>originally</span> <span
  m='1601050'>were</span> <span m='1601210'>targeting</span> <span
  m='1601910'>sigma</span> <span m='1602210'>times</span> <span
  m='1602490'>d</span> <span m='1602650'>Bt,</span> <span m='1604670'>but</span>
  <span m='1604790'>we</span> <span m='1604930'>got</span> <span
  m='1605120'>this</span> <span m='1605260'>additional</span> <span
  m='1605710'>term</span> <span m='1607590'>which</span> <span
  m='1607770'>we</span> <span m='1607890'>didn't</span> <span
  m='1608160'>want</span> <span m='1608360'>in</span> <span
  m='1608450'>the</span> <span m='1608570'>first.</span> <span
  m='1611170'>In</span> <span m='1611210'>other</span> <span
  m='1611410'>words,</span> <span m='1611700'>we</span> <span
  m='1611720'>have</span> <span m='1611910'>this</span> <span
  m='1612080'>drift.</span> </p><p><span m='1621820'>I</span> <span
  m='1621960'>wasn't</span> <span m='1622210'>really</span> <span
  m='1622450'>clear</span> <span m='1622630'>in</span> <span
  m='1622700'>the</span> <span m='1622780'>beginning,</span> <span
  m='1623080'>but</span> <span m='1623410'>our</span> <span
  m='1623590'>goal</span> <span m='1623890'>was</span> <span
  m='1623980'>to</span> <span m='1624070'>model</span> <span
  m='1624420'>stock</span> <span m='1624760'>price</span> <span
  m='1625850'>where</span> <span m='1626410'>the</span> <span
  m='1626610'>expected</span> <span m='1627150'>value is</span> <span
  m='1627500'>0</span> <span m='1627870'>at</span> <span m='1627970'>all</span>
  <span m='1628200'>times.</span> <span m='1630920'>Our</span> <span
  m='1631100'>guess</span> <span m='1631410'>what</span> <span
  m='1631630'>to</span> <span m='1631730'>take e</span> <span m='1632110'>to
  the</span> <span m='1632270'>sigma of</span> <span m='1632560'>Bt,</span>
  <span m='1632970'>but</span> <span m='1633150'>it</span> <span
  m='1633340'>turns</span> <span m='1633770'>out</span> <span
  m='1634030'>that</span> <span m='1634300'>in</span> <span
  m='1634440'>this</span> <span m='1634650'>case</span> <span
  m='1634890'>we</span> <span m='1634990'>have</span> <span m='1635270'>a</span>
  <span m='1635330'>drift,</span> <span m='1636230'>if</span> <span
  m='1636330'>you</span> <span m='1636390'>just</span> <span
  m='1636610'>take</span> <span m='1636870'>natural</span> <span
  m='1637160'>e</span> <span m='1637450'>to the</span> <span
  m='1637600'>sigma</span> <span m='1637870'>of Bt.</span> <span
  m='1639570'>To</span> <span m='1639730'>remove</span> <span
  m='1640090'>that</span> <span m='1640270'>drift,</span> <span
  m='1640640'>what</span> <span m='1640790'>you</span> <span
  m='1640870'>can</span> <span m='1641030'>do</span> <span m='1641230'>is</span>
  <span m='1641520'>subtract</span> <span m='1641960'>that</span> <span
  m='1642160'>term</span> <span m='1642410'>somehow.</span> <span m='1643350'>If
  you can get</span> <span m='1643690'>rid of</span> <span m='1644095'>that
  term</span> <span m='1645360'>then</span> <span m='1645790'>you</span> <span
  m='1645890'>can</span> <span m='1646040'>see</span> <span
  m='1646570'>if</span> <span m='1646730'>you</span> <span
  m='1647660'>add</span> <span m='1647920'>this</span> <span
  m='1648130'>mu</span> <span m='1648320'>to</span> <span m='1648430'>be</span>
  <span m='1648590'>minus</span> <span m='1648970'>1</span> <span
  m='1649110'>over</span> <span m='1649270'>2</span> <span
  m='1649410'>sigma</span> <span m='1649730'>square,</span> <span
  m='1650120'>you</span> <span m='1650210'>can</span> <span
  m='1650600'>remove</span> <span m='1650890'>that</span> <span
  m='1651090'>term.</span> <span m='1654460'>That's why</span> <span
  m='1654710'>it</span> <span m='1654810'>doesn't</span> <span
  m='1655030'>work.</span> <span m='1655650'>So</span> <span
  m='1655750'>instead</span> <span m='1659980'>use</span> <span
  m='1663240'>S</span> <span m='1663540'>of</span> <span m='1663730'>t</span>
  <span m='1664480'>equals</span> <span m='1664990'>e</span> <span
  m='1665220'>to</span> <span m='1665360'>the</span> <span
  m='1666060'>minus</span> <span m='1666450'>1</span> <span
  m='1666630'>over</span> <span m='1666850'>2</span> <span
  m='1667140'>sigma</span> <span m='1667570'>square</span> <span
  m='1669660'>t</span> <span m='1670860'>plus</span> <span
  m='1671610'>sigma</span> <span m='1672060'>of Bt.</span> </p><p><span
  m='1678330'>That's</span> <span m='1678550'>the</span> <span
  m='1678660'>geometric</span> <span m='1679180'>Brownian</span> <span
  m='1679490'>motion</span> <span m='1679830'>without</span> <span
  m='1680230'>drift.</span> <span m='1682850'>And</span> <span
  m='1682960'>the</span> <span m='1683040'>reason</span> <span
  m='1683340'>it</span> <span m='1683380'>has</span> <span m='1683630'>no</span>
  <span m='1683760'>drift</span> <span m='1684070'>is</span> <span
  m='1684380'>because</span> <span m='1684660'>of</span> <span
  m='1684770'>that.</span> <span m='1685820'>If</span> <span
  m='1685970'>you</span> <span m='1686200'>actually</span> <span
  m='1686430'>do</span> <span m='1686590'>the</span> <span
  m='1686670'>computation,</span> <span m='1687300'>the</span> <span
  m='1687400'>dt</span> <span m='1687810'>term</span> <span
  m='1688190'>disappears.</span> <span m='1709010'>Question?</span> </p><p><span
  m='1715580'>So</span> <span m='1715750'>far</span> <span m='1716380'>we</span>
  <span m='1716540'>have</span> <span m='1716650'>been</span> <span
  m='1716800'>discussing</span> <span m='1717600'>differentiation.</span> <span
  m='1719000'>Now</span> <span m='1719050'>let's</span> <span
  m='1719250'>talk</span> <span m='1719430'>about</span> <span
  m='1719590'>integration.</span> <span m='1720713'>Yes?</span> </p><p><span
  m='1721206'>AUDIENCE: Could you</span> <span m='1723671'>we</span> <span
  m='1724164'>do get this</span> <span m='1724657'>solution</span> <span
  m='1725150'>as</span> <span m='1725643'>[INAUDIBLE].</span> <span
  m='1727122'>Could</span> <span m='1727615'>you also describe</span> <span
  m='1728601'>what</span> <span m='1729094'>it</span> <span
  m='1729587'>means?</span> <span m='1730573'>What does it</span> <span
  m='1731066'>mean,</span> <span m='1732052'>this</span> <span
  m='1732545'>solution</span> <span m='1734024'>of</span> <span
  m='1734517'>Bt?</span> <span m='1735996'>Does that mean</span> <span
  m='1736489'>if we</span> <span m='1736982'>have a</span> <span
  m='1737475'>sample</span> <span m='1737968'>Bt,</span> <span m='1738461'>then
  we could</span> <span m='1738954'>get a</span> <span m='1739447'>sample
  Bt</span> <span m='1739940'>[INAUDIBLE]?</span> </p><p><span
  m='1741440'>PROFESSOR: Oh, what</span> <span m='1741820'>this</span> <span
  m='1742040'>means,</span> <span m='1742240'>yes.</span> <span
  m='1743670'>Whenever</span> <span m='1743950'>you</span> <span
  m='1744080'>have the</span> <span m='1744290'>Bt</span> <span
  m='1744770'>value,</span> <span m='1745025'>just</span> <span
  m='1746500'>at</span> <span m='1746670'>each</span> <span
  m='1746890'>time</span> <span m='1747360'>take the</span> <span
  m='1747620'>exponential</span> <span m='1748180'>value.</span> <span
  m='1750050'>Because</span> <span m='1751730'>why we</span> <span
  m='1752000'>want</span> <span m='1752230'>to</span> <span
  m='1752290'>express</span> <span m='1752710'>this</span> <span m='1752990'>in
  terms of</span> <span m='1753200'>a</span> <span m='1753240'>Brownian</span>
  <span m='1753460'>motion</span> <span m='1753870'>is,</span> <span
  m='1754120'>for</span> <span m='1754170'>Brownian</span> <span
  m='1754520'>motion</span> <span m='1754850'>we</span> <span
  m='1754940'>have</span> <span m='1755060'>a</span> <span
  m='1756030'>pretty</span> <span m='1756240'>good</span> <span
  m='1756410'>understanding.</span> <span m='1757030'>It's</span> <span
  m='1757180'>a</span> <span m='1757420'>really</span> <span
  m='1757760'>good</span> <span m='1757980'>process</span> <span
  m='1759000'>you</span> <span m='1759130'>understand</span> <span
  m='1759620'>fairly</span> <span m='1759950'>well,</span> <span
  m='1761280'>and</span> <span m='1762352'>you</span> <span
  m='1762720'>have</span> <span m='1762910'>good</span> <span
  m='1763110'>control</span> <span m='1763520'>on</span> <span
  m='1763660'>it.</span> </p><p><span m='1765200'>But</span> <span
  m='1765620'>the</span> <span m='1765770'>problem</span> <span
  m='1766180'>is</span> <span m='1766330'>you</span> <span
  m='1766450'>want</span> <span m='1766650'>to</span> <span
  m='1766730'>have</span> <span m='1767140'>a</span> <span
  m='1767220'>process</span> <span m='1767960'>whose</span> <span
  m='1768220'>percentile</span> <span m='1768840'>difference</span> <span
  m='1769400'>behaves</span> <span m='1769780'>like a Brownian</span> <span
  m='1770222'>motion.</span> <span m='1771990'>And</span> <span
  m='1772590'>this</span> <span m='1772830'>gives</span> <span
  m='1773020'>you</span> <span m='1773160'>a</span> <span m='1773190'>way</span>
  <span m='1773480'>of</span> <span m='1773560'>describing</span> <span
  m='1773885'>it</span> <span m='1774340'>in</span> <span
  m='1774530'>terms</span> <span m='1774850'>of</span> <span
  m='1774990'>Brownian</span> <span m='1775390'>motion,</span> <span
  m='1775790'>as an</span> <span m='1776070'>exponential</span> <span
  m='1776660'>function</span> <span m='1777000'>of</span> <span
  m='1777100'>it.</span> <span m='1783390'>Does</span> <span m='1783480'>that
  answer</span> <span m='1783870'>your question?</span> </p><p><span
  m='1786555'>AUDIENCE: Right,</span> <span m='1787480'>distribution</span>
  <span m='1787905'>means</span> <span m='1788330'>that if</span> <span
  m='1788808'>we have a</span> <span m='1789286'>sample</span> <span
  m='1789764'>Bt,</span> <span m='1790720'>that</span> <span m='1791198'>would
  be</span> <span m='1791676'>the</span> <span m='1792154'>corresponding</span>
  <span m='1792632'>sample</span> <span m='1793110'>Bt</span> <span
  m='1793588'>[INAUDIBLE]?</span> </p><p><span m='1798260'>PROFESSOR:
  That's</span> <span m='1798430'>a</span> <span m='1798490'>good</span> <span
  m='1798670'>question,</span> <span m='1799070'>actually.</span> <span
  m='1800270'>Think</span> <span m='1800490'>of</span> <span
  m='1800600'>it</span> <span m='1800670'>as a</span> <span m='1800900'>point
  related to</span> <span m='1801390'>valuation.</span> <span
  m='1802950'>That</span> <span m='1803280'>is</span> <span
  m='1803460'>not</span> <span m='1803770'>always</span> <span
  m='1804130'>correct,</span> <span m='1805340'>but</span> <span
  m='1806670'>for</span> <span m='1807130'>most</span> <span
  m='1807400'>of</span> <span m='1807450'>the</span> <span
  m='1807540'>things</span> <span m='1807720'>that</span> <span
  m='1807860'>we</span> <span m='1808000'>will</span> <span
  m='1808120'>cover,</span> <span m='1809150'>it's</span> <span
  m='1809350'>safe</span> <span m='1809580'>to</span> <span
  m='1809730'>think</span> <span m='1810130'>about</span> <span
  m='1810310'>it</span> <span m='1810400'>that</span> <span
  m='1810570'>way.</span> <span m='1813120'>But</span> <span
  m='1813940'>if</span> <span m='1814080'>you</span> <span
  m='1814170'>think</span> <span m='1814370'>about</span> <span
  m='1814580'>it</span> <span m='1814660'>path</span> <span
  m='1814930'>wise</span> <span m='1815200'>all</span> <span
  m='1815400'>the</span> <span m='1815520'>time,</span> <span
  m='1816690'>eventually</span> <span m='1816990'>it</span> <span
  m='1817290'>fails.</span> <span m='1818680'>But</span> <span
  m='1818820'>that's</span> <span m='1819040'>a</span> <span
  m='1819080'>very</span> <span m='1819380'>advanced</span> <span
  m='1819690'>topic.</span> </p><p><span m='1832130'>So</span> <span
  m='1832150'>what</span> <span m='1832310'>this</span> <span
  m='1832420'>question</span> <span m='1832820'>is,</span> <span
  m='1833260'>basically</span> <span m='1833740'>Bt</span> <span
  m='1834280'>is</span> <span m='1834400'>a</span> <span
  m='1834880'>probability</span> <span m='1835510'>space,</span> <span
  m='1835920'>it's</span> <span m='1836330'>a</span> <span
  m='1836420'>probability</span> <span m='1837000'>distribution</span> <span
  m='1837350'>over</span> <span m='1838085'>passes.</span> <span
  m='1839390'>For</span> <span m='1839480'>this</span> <span
  m='1839670'>equation,</span> <span m='1841226'>if you</span> <span
  m='1841650'>just</span> <span m='1841700'>look</span> <span
  m='1841900'>at</span> <span m='1842030'>it,</span> <span m='1842430'>it</span>
  <span m='1842530'>looks</span> <span m='1842690'>right,</span> <span
  m='1843060'>but</span> <span m='1843700'>it doesn't</span> <span
  m='1843900'>really</span> <span m='1844100'>make</span> <span
  m='1844290'>sense,</span> <span m='1844650'>because</span> <span
  m='1844950'>Bt--</span> <span m='1845350'>if</span> <span
  m='1845460'>it's</span> <span m='1845590'>a</span> <span
  m='1845650'>probability</span> <span m='1846170'>distribution,</span> <span
  m='1846890'>what</span> <span m='1847040'>is</span> <span m='1847140'>e to
  the</span> <span m='1847320'>Bt?</span> </p><p><span
  m='1850450'>Basically,</span> <span m='1850850'>what</span> <span
  m='1851000'>it's</span> <span m='1851070'>saying</span> <span
  m='1851400'>is</span> <span m='1852080'>Bt</span> <span m='1852530'>is
  a</span> <span m='1852650'>probability</span> <span
  m='1853120'>distribution</span> <span m='1853380'>over</span> <span
  m='1853640'>passes.</span> <span m='1855210'>If</span> <span
  m='1855350'>you</span> <span m='1855460'>take</span> <span
  m='1855930'>omega</span> <span m='1856590'>according</span> <span
  m='1857020'>to</span> <span m='1857790'>a</span> <span m='1857910'>pass</span>
  <span m='1858310'>according</span> <span m='1858700'>to</span> <span
  m='1858850'>the</span> <span m='1858960'>Brownian</span> <span
  m='1859200'>motion</span> <span m='1859700'>example</span> <span
  m='1860880'>probability</span> <span m='1861430'>distribution,</span> <span
  m='1862890'>and</span> <span m='1863280'>for</span> <span
  m='1863420'>this</span> <span m='1863720'>pass</span> <span
  m='1864270'>it's</span> <span m='1864470'>well</span> <span
  m='1864650'>defined,</span> <span m='1865320'>this</span> <span
  m='1865430'>function.</span> <span m='1868230'>So</span> <span
  m='1868490'>the</span> <span m='1870240'>probability</span> <span
  m='1870920'>density</span> <span m='1871900'>function</span> <span
  m='1872160'>of</span> <span m='1872420'>this</span> <span
  m='1872640'>pass</span> <span m='1873700'>is</span> <span
  m='1873820'>equal</span> <span m='1874140'>to</span> <span
  m='1874250'>the</span> <span m='1874380'>problem</span> <span m='1874720'>to
  density</span> <span m='1875320'>function</span> <span m='1875600'>of</span>
  <span m='1876540'>e</span> <span m='1876910'>to the whatever</span> <span
  m='1877350'>that</span> <span m='1877570'>is</span> <span
  m='1878530'>in</span> <span m='1878750'>this</span> <span
  m='1879010'>distribution.</span> <span m='1884410'>Maybe</span> <span
  m='1884680'>it</span> <span m='1885060'>confused</span> <span
  m='1885500'>you</span> <span m='1885650'>more.</span> <span
  m='1886300'>Just</span> <span m='1886750'>consider</span> <span
  m='1887130'>this</span> <span m='1887340'>as</span> <span
  m='1887500'>some</span> <span m='1887730'>pass,</span> <span
  m='1888340'>some</span> <span m='1888670'>well</span> <span
  m='1888870'>defined</span> <span m='1889200'>function,</span> <span
  m='1890380'>and</span> <span m='1890530'>you</span> <span
  m='1890600'>have</span> <span m='1890770'>a</span> <span
  m='1890810'>well</span> <span m='1890950'>defined</span> <span
  m='1891250'>function.</span> </p><p><span m='1899490'>Integral</span> <span
  m='1900380'>definition.</span> <span m='1904000'>I</span> <span
  m='1904440'>will</span> <span m='1904600'>first</span> <span
  m='1904910'>give</span> <span m='1905040'>you</span> <span
  m='1905140'>a</span> <span m='1905160'>very,</span> <span
  m='1905530'>very</span> <span m='1905630'>stupid</span> <span
  m='1906020'>definition</span> <span m='1906510'>of</span> <span
  m='1906590'>integration.</span> <span m='1909340'>We</span> <span
  m='1909490'>say</span> <span m='1909790'>that</span> <span
  m='1913145'>we</span> <span m='1913570'>define</span> <span
  m='1916268'>F</span> <span m='1919610'>as</span> <span m='1919860'>the</span>
  <span m='1919940'>integration</span> <span m='1932270'>if</span> <span
  m='1933740'>d of</span> <span m='1934230'>F</span> <span m='1935210'>is
  equal</span> <span m='1935700'>to f</span> <span m='1936190'>d Bt</span> <span
  m='1940110'>plus--</span> <span m='1945800'>We</span> <span m='1945910'>define
  it</span> <span m='1946330'>as</span> <span m='1946420'>an</span> <span
  m='1946520'>inverse</span> <span m='1946900'>of</span> <span
  m='1946990'>differentiation.</span> </p><p><span m='1950200'>Because</span>
  <span m='1950560'>differentiation</span> <span m='1951210'>is</span> <span
  m='1951340'>now</span> <span m='1951470'>all</span> <span
  m='1951720'>defined--</span> <span m='1954860'>we</span> <span
  m='1954960'>just</span> <span m='1955320'>defined</span> <span
  m='1955680'>integration</span> <span m='1956280'>as the</span> <span
  m='1956580'>inverse</span> <span m='1957050'>of</span> <span
  m='1957180'>it,</span> <span m='1959690'>just</span> <span
  m='1959940'>as</span> <span m='1960210'>in</span> <span
  m='1961540'>classical</span> <span m='1961855'>calculus.</span> <span
  m='1966030'>So</span> <span m='1966230'>far,</span> <span
  m='1966530'>it</span> <span m='1966640'>doesn't</span> <span
  m='1966890'>have</span> <span m='1967070'>that</span> <span
  m='1967310'>good</span> <span m='1967450'>meaning,</span> <span
  m='1967810'>other</span> <span m='1967960'>than</span> <span
  m='1968110'>being</span> <span m='1968410'>an</span> <span
  m='1968510'>inverse</span> <span m='1968860'>of</span> <span
  m='1968980'>it,</span> <span m='1971160'>but</span> <span
  m='1971310'>at</span> <span m='1971430'>least</span> <span
  m='1971660'>it's</span> <span m='1971790'>well</span> <span
  m='1971980'>defined.</span> <span m='1972710'>The question</span> <span
  m='1973080'>is,</span> <span m='1973200'>does it</span> <span
  m='1973310'>exist?</span> <span m='1974780'>Given</span> <span
  m='1975060'>f</span> <span m='1975200'>and g,</span> <span m='1975580'>does
  it</span> <span m='1975840'>exist,</span> <span m='1976320'>does</span> <span
  m='1976450'>integration</span> <span m='1976930'>always</span> <span
  m='1977170'>exist,</span> <span m='1977445'>and</span> <span
  m='1977720'>so</span> <span m='1977850'>on.</span> <span
  m='1978060'>There's</span> <span m='1978270'>lots</span> <span
  m='1978470'>of</span> <span m='1978560'>questions</span> <span
  m='1978930'>to</span> <span m='1979040'>ask,</span> <span
  m='1979690'>but</span> <span m='1980090'>at</span> <span
  m='1980170'>least</span> <span m='1980450'>this</span> <span
  m='1980650'>is</span> <span m='1980810'>some</span> <span
  m='1981080'>definition.</span> <span m='1982570'>And</span> <span
  m='1982790'>the</span> <span m='1982860'>natural</span> <span
  m='1983290'>question</span> <span m='1983700'>is,</span> <span
  m='1985710'>does</span> <span m='1985770'>there</span> <span
  m='1985910'>exist</span> <span m='1990690'>a</span> <span
  m='1991200'>Riemannian</span> <span m='1991760'>sum</span> <span
  m='1992040'>type</span> <span m='1992360'>description?</span> </p><p><span
  m='2005430'>That</span> <span m='2005650'>means--</span> <span m='2006340'>if
  you</span> <span m='2006630'>remember</span> <span m='2007070'>how</span>
  <span m='2007260'>we</span> <span m='2007370'>defined</span> <span
  m='2007860'>integral</span> <span m='2008580'>in</span> <span
  m='2008740'>calculus,</span> <span m='2022172'>you have</span> <span
  m='2022660'>a</span> <span m='2022730'>function</span> <span
  m='2023150'>f,</span> <span m='2027130'>integration</span> <span
  m='2027740'>of</span> <span m='2027880'>f</span> <span m='2028360'>from</span>
  <span m='2028590'>a</span> <span m='2028800'>to</span> <span
  m='2028900'>b.</span> <span m='2036190'>According</span> <span
  m='2036520'>to</span> <span m='2036670'>the</span> <span
  m='2036810'>Riemannian</span> <span m='2037180'>sum</span> <span
  m='2037970'>description</span> <span m='2038570'>was,</span> <span
  m='2038940'>you</span> <span m='2040220'>just</span> <span m='2040640'>chop
  the</span> <span m='2040990'>interval</span> <span m='2041440'>into</span>
  <span m='2041610'>very</span> <span m='2041900'>fine</span> <span
  m='2042210'>pieces--</span> <span m='2044660'>a0,</span> <span
  m='2045180'>a1,</span> <span m='2045560'>a2,</span> <span
  m='2045990'>a3,</span> <span m='2046110'>dot,</span> <span m='2046440'>dot,
  dot--</span> <span m='2047730'>and</span> <span m='2047850'>then</span> <span
  m='2048020'>sum</span> <span m='2048320'>the</span> <span
  m='2048429'>area</span> <span m='2048699'>of</span> <span
  m='2048810'>these</span> <span m='2049010'>boxes,</span> <span
  m='2054750'>and</span> <span m='2055239'>take</span> <span
  m='2055400'>the</span> <span m='2055520'>limit.</span> <span
  m='2056750'>And</span> <span m='2056870'>this</span> <span
  m='2057060'>is</span> <span m='2057210'>the</span> <span
  m='2057320'>limit</span> <span m='2059179'>of</span> <span
  m='2059460'>Riemannian</span> <span m='2060190'>sums.</span> <span
  m='2066420'>Slightly</span> <span m='2066880'>more,</span> <span
  m='2067350'>if you</span> <span m='2067429'>want,</span> <span
  m='2068260'>is</span> <span m='2068760'>it's</span> <span
  m='2070060'>the</span> <span m='2070139'>limit</span> <span
  m='2070770'>as</span> <span m='2071130'>n</span> <span m='2071360'>goes</span>
  <span m='2071620'>to</span> <span m='2071750'>infinity</span> <span
  m='2073920'>of</span> <span m='2074020'>the</span> <span
  m='2074120'>function</span> <span m='2076080'>1</span> <span
  m='2076199'>over</span> <span m='2076440'>n</span> <span
  m='2076800'>times</span> <span m='2077670'>the</span> <span
  m='2078105'>sum</span> <span m='2078540'>of</span> <span
  m='2078975'>[INAUDIBLE]</span> <span m='2082869'>f of</span> <span
  m='2084320'>t b</span> <span m='2084989'>over</span> <span
  m='2085230'>n</span> <span m='2085540'>minus</span> <span m='2086030'>f</span>
  <span m='2086520'>of</span> <span m='2087010'>t</span> <span
  m='2087150'>minus</span> <span m='2087629'>1</span> <span
  m='2088587'>over</span> <span m='2089066'>n.</span> <span m='2091461'>Does
  this</span> <span m='2092209'>ring a</span> <span m='2092469'>bell?</span>
  <span m='2103818'>Question?</span> </p><p><span m='2104287'>AUDIENCE:
  [INAUDIBLE]</span> </p><p><span m='2110780'>PROFESSOR: No,</span> <span
  m='2111420'>you're</span> <span m='2111690'>right.</span> <span
  m='2113832'>Good</span> <span m='2114300'>point,</span> <span
  m='2114625'>no</span> <span m='2115140'>we don't.</span> <span
  m='2117120'>Thanks.</span> <span m='2122570'>Does</span> <span
  m='2124310'>integral</span> <span m='2124720'>defined</span> <span
  m='2125310'>in</span> <span m='2125440'>this</span> <span
  m='2125670'>way</span> <span m='2126010'>have</span> <span
  m='2126540'>this</span> <span m='2126730'>Riemannian</span> <span
  m='2127170'>sum</span> <span m='2127340'>type</span> <span
  m='2127580'>description,</span> <span m='2128587'>is the</span> <span
  m='2129054'>question.</span> <span m='2131390'>So</span> <span
  m='2132050'>keep</span> <span m='2132400'>that in</span> <span
  m='2132460'>mind.</span> <span m='2133110'>I</span> <span
  m='2133190'>will</span> <span m='2133480'>come</span> <span
  m='2133690'>back</span> <span m='2133910'>to</span> <span
  m='2134000'>this</span> <span m='2134210'>point</span> <span
  m='2134420'>later.</span> </p><p><span m='2136660'>In</span> <span
  m='2136790'>fact,</span> <span m='2139900'>it</span> <span
  m='2140190'>turns</span> <span m='2140410'>out</span> <span
  m='2140530'>to</span> <span m='2140590'>be</span> <span m='2140700'>a</span>
  <span m='2140730'>very</span> <span m='2140980'>deep</span> <span
  m='2141190'>question</span> <span m='2141870'>and</span> <span
  m='2142020'>very</span> <span m='2142220'>important</span> <span
  m='2142630'>question,</span> <span m='2143130'>this</span> <span
  m='2143210'>question,</span> <span m='2143630'>because</span> <span
  m='2146300'>if</span> <span m='2146580'>you</span> <span
  m='2146740'>remember</span> <span m='2147830'>like</span> <span
  m='2148010'>I</span> <span m='2148060'>hope you</span> <span
  m='2148340'>remember,</span> <span m='2148850'>in</span> <span m='2149000'>the
  Riemannian</span> <span m='2149590'>sum,</span> <span m='2150420'>it</span>
  <span m='2150550'>didn't</span> <span m='2150770'>matter</span> <span
  m='2151030'>which</span> <span m='2151420'>point</span> <span
  m='2151730'>you</span> <span m='2151860'>took</span> <span
  m='2152120'>in</span> <span m='2152230'>this</span> <span
  m='2152450'>interval.</span> <span m='2154610'>That</span> <span
  m='2154830'>was</span> <span m='2154950'>the</span> <span
  m='2155030'>whole</span> <span m='2155260'>point.</span> <span
  m='2156910'>You</span> <span m='2156980'>have</span> <span
  m='2157150'>the</span> <span m='2157230'>function.</span> <span
  m='2158780'>In</span> <span m='2158920'>the</span> <span
  m='2159010'>interval</span> <span m='2159610'>a</span> <span
  m='2159830'>i</span> <span m='2160230'>to a i</span> <span
  m='2160630'>plus</span> <span m='2161000'>1,</span> <span
  m='2161420'>you</span> <span m='2161550'>take</span> <span
  m='2161830'>any</span> <span m='2162120'>point</span> <span
  m='2162430'>in</span> <span m='2162510'>the</span> <span
  m='2162610'>middle</span> <span m='2164190'>and</span> <span
  m='2165600'>make</span> <span m='2165860'>a</span> <span
  m='2165930'>rectangle</span> <span m='2166500'>according</span> <span
  m='2166940'>to</span> <span m='2167050'>that</span> <span
  m='2167610'>point.</span> <span m='2169120'>And</span> <span
  m='2169230'>then,</span> <span m='2169350'>no</span> <span
  m='2169440'>matter</span> <span m='2169630'>which</span> <span
  m='2169790'>point</span> <span m='2170000'>you</span> <span
  m='2170120'>take,</span> <span m='2170350'>when</span> <span
  m='2170460'>you</span> <span m='2170520'>go</span> <span m='2170630'>to</span>
  <span m='2170770'>the</span> <span m='2170830'>limit,</span> <span
  m='2171260'>you</span> <span m='2171380'>had</span> <span
  m='2171550'>exactly</span> <span m='2171960'>the</span> <span
  m='2172030'>same</span> <span m='2172400'>sum</span> <span
  m='2172740'>all</span> <span m='2173020'>the</span> <span
  m='2173140'>time.</span> </p><p><span m='2174190'>That's</span> <span
  m='2174270'>how</span> <span m='2174360'>you</span> <span
  m='2174440'>define</span> <span m='2174800'>the</span> <span
  m='2174900'>limit.</span> <span m='2176560'>But</span> <span
  m='2179850'>what's</span> <span m='2180130'>really</span> <span
  m='2180370'>interesting</span> <span m='2180720'>here</span> <span
  m='2180960'>is</span> <span m='2181040'>that</span> <span
  m='2182440'>it's</span> <span m='2182580'>no</span> <span
  m='2182690'>longer</span> <span m='2182960'>true.</span> <span
  m='2184090'>If</span> <span m='2184240'>you</span> <span
  m='2184340'>take</span> <span m='2184540'>the</span> <span
  m='2184650'>left</span> <span m='2184990'>point</span> <span
  m='2185280'>all</span> <span m='2185480'>the</span> <span
  m='2185580'>time,</span> <span m='2186000'>and</span> <span
  m='2186170'>you</span> <span m='2186410'>take</span> <span
  m='2186600'>the</span> <span m='2186700'>right</span> <span
  m='2186960'>point</span> <span m='2187130'>all</span> <span
  m='2187250'>the</span> <span m='2187350'>time,</span> <span
  m='2188110'>the</span> <span m='2188250'>two</span> <span
  m='2188410'>limits</span> <span m='2188700'>are</span> <span
  m='2188760'>different.</span> <span m='2190570'>And</span> <span
  m='2190700'>again,</span> <span m='2191030'>that's</span> <span
  m='2191280'>used in</span> <span m='2191580'>quadratic</span> <span
  m='2192060'>variation,</span> <span m='2193020'>because</span> <span
  m='2193750'>that</span> <span m='2193950'>much</span> <span
  m='2194180'>of</span> <span m='2194280'>variance</span> <span
  m='2195620'>can</span> <span m='2195800'>accumulate</span> <span
  m='2196380'>over</span> <span m='2196620'>time.</span> </p><p><span
  m='2198980'>That's</span> <span m='2199230'>the</span> <span
  m='2199360'>reason</span> <span m='2200240'>we</span> <span
  m='2200370'>didn't</span> <span m='2200660'>start</span> <span
  m='2200940'>with</span> <span m='2201100'>Riemannian</span> <span
  m='2201580'>sum</span> <span m='2201830'>type</span> <span
  m='2202560'>definition</span> <span m='2203050'>of</span> <span
  m='2203130'>integral.</span> <span m='2204450'>But</span> <span
  m='2205230'>I'll</span> <span m='2205360'>just</span> <span
  m='2205550'>make</span> <span m='2205710'>one</span> <span
  m='2206130'>remark.</span> <span m='2207490'>Ito</span> <span
  m='2207820'>integral</span> <span m='2212210'>is</span> <span
  m='2212470'>the</span> <span m='2212600'>limit</span> <span
  m='2215070'>of</span> <span m='2215760'>Riemannian</span> <span
  m='2216470'>sums</span> <span m='2221220'>when</span> <span
  m='2222520'>always</span> <span m='2224310'>take</span> <span
  m='2226190'>the</span> <span m='2226310'>leftmost</span> <span
  m='2227060'>point</span> <span m='2227300'>of</span> <span
  m='2227540'>each</span> <span m='2227810'>interval.</span> <span
  m='2236700'>So</span> <span m='2236860'>you</span> <span
  m='2236960'>chop</span> <span m='2237450'>down</span> <span
  m='2237920'>this</span> <span m='2238280'>curve</span> <span
  m='2239300'>at</span> <span m='2239700'>the</span> <span
  m='2239850'>time</span> <span m='2240150'>interval</span> <span
  m='2240670'>into</span> <span m='2240760'>pieces,</span> <span
  m='2242180'>and</span> <span m='2242280'>for</span> <span
  m='2242410'>each</span> <span m='2242620'>rectangle,</span> <span
  m='2243110'>pick</span> <span m='2243340'>the</span> <span
  m='2243440'>leftmost</span> <span m='2244190'>point,</span> <span
  m='2244500'>and</span> <span m='2244770'>use it</span> <span m='2244820'>as a
  rectangle.</span> </p><p><span m='2250780'>And</span> <span
  m='2250930'>you</span> <span m='2251000'>take</span> <span
  m='2251180'>the</span> <span m='2251270'>limit.</span> <span
  m='2251680'>That</span> <span m='2251900'>will</span> <span m='2252000'>be
  your</span> <span m='2252180'>Ito</span> <span m='2252580'>integral</span>
  <span m='2253010'>defined.</span> <span m='2253570'>It</span> <span
  m='2253670'>will</span> <span m='2253780'>be</span> <span
  m='2253890'>exactly</span> <span m='2254330'>equal</span> <span
  m='2254560'>to</span> <span m='2254680'>this</span> <span
  m='2254940'>thing,</span> <span m='2255500'>the</span> <span
  m='2255660'>inverse</span> <span m='2256270'>of</span> <span
  m='2256640'>our</span> <span m='2256950'>Ito</span> <span
  m='2257070'>differentiation.</span> <span m='2259050'>I won't be able</span>
  <span m='2259550'>to go</span> <span m='2259720'>into</span> <span
  m='2259860'>detail.</span> </p><p><span m='2260170'>What's</span> <span
  m='2260340'>more</span> <span m='2260550'>interesting</span> <span
  m='2261030'>is</span> <span m='2263270'>instead,</span> <span
  m='2264080'>what</span> <span m='2264180'>happens</span> <span
  m='2264520'>if</span> <span m='2264620'>you</span> <span
  m='2264710'>take</span> <span m='2265010'>the</span> <span
  m='2265130'>rightmost</span> <span m='2265620'>point</span> <span
  m='2265870'>all</span> <span m='2265980'>the</span> <span
  m='2266090'>time,</span> <span m='2267170'>you</span> <span
  m='2267320'>get</span> <span m='2268350'>an</span> <span
  m='2268460'>equivalent</span> <span m='2269030'>theory</span> <span
  m='2269350'>of</span> <span m='2269460'>calculus.</span> <span
  m='2271680'>It's</span> <span m='2271900'>just</span> <span
  m='2272170'>like</span> <span m='2272390'>Ito's</span> <span
  m='2272820'>calculus.</span> <span m='2273380'>It</span> <span
  m='2273460'>looks</span> <span m='2273680'>really,</span> <span
  m='2274100'>really</span> <span m='2274210'>similar</span> <span
  m='2275850'>and</span> <span m='2275950'>it's</span> <span
  m='2276070'>coherent</span> <span m='2276600'>itself,</span> <span
  m='2277160'>so</span> <span m='2277430'>there is</span> <span
  m='2277720'>no</span> <span m='2278010'>logical</span> <span m='2278550'>flaw
  in</span> <span m='2278950'>it.</span> <span m='2279170'>It</span> <span
  m='2279620'>all</span> <span m='2279820'>makes</span> <span
  m='2280050'>sense,</span> <span m='2280500'>but</span> <span
  m='2280570'>the</span> <span m='2280660'>only</span> <span
  m='2280850'>difference</span> <span m='2281260'>is</span> <span
  m='2282000'>instead</span> <span m='2282330'>of</span> <span
  m='2282390'>a</span> <span m='2282490'>plus</span> <span m='2282870'>in</span>
  <span m='2282980'>the</span> <span m='2283140'>second</span> <span
  m='2283430'>order of</span> <span m='2283650'>term,</span> <span
  m='2284020'>you</span> <span m='2284120'>get</span> <span
  m='2284210'>minuses.</span> </p><p><span m='2287500'>Let</span> <span
  m='2287690'>me</span> <span m='2287800'>just</span> <span
  m='2287980'>make</span> <span m='2288310'>this</span> <span
  m='2288380'>remark,</span> <span m='2288670'>because</span> <span
  m='2289750'>it's</span> <span m='2289880'>just a</span> <span
  m='2290000'>theoretical</span> <span m='2290520'>part,</span> <span
  m='2290920'>this thing,</span> <span m='2291160'>but</span> <span
  m='2291825'>I think</span> <span m='2292130'>it's</span> <span
  m='2292290'>really</span> <span m='2293100'>cool.</span> <span
  m='2295350'>Remark--</span> <span m='2298794'>there's</span> <span
  m='2299270'>this</span> <span m='2299740'>and</span> <span
  m='2299880'>equivalent</span> <span m='2300550'>version.</span> <span
  m='2302150'>Maybe</span> <span m='2302330'>equivalent</span> <span
  m='2302660'>is</span> <span m='2302890'>not</span> <span m='2303030'>the
  right</span> <span m='2303350'>word,</span> <span m='2304430'>but</span> <span
  m='2304830'>a</span> <span m='2304890'>very</span> <span
  m='2305130'>similar</span> <span m='2305550'>version</span> <span
  m='2305920'>of</span> <span m='2306255'>Ito</span> <span
  m='2306820'>calculus</span> <span m='2311150'>such</span> <span
  m='2311250'>that</span> <span m='2312470'>basically,</span> <span
  m='2312860'>what</span> <span m='2313000'>it</span> <span
  m='2313060'>says</span> <span m='2313400'>is d</span> <span
  m='2313540'>Bt</span> <span m='2313930'>square</span> <span
  m='2314890'>is</span> <span m='2315200'>equal</span> <span
  m='2315430'>to</span> <span m='2315530'>minus</span> <span
  m='2316750'>dt.</span> </p><p><span m='2318510'>Then</span> <span
  m='2318630'>that</span> <span m='2318820'>changed</span> <span
  m='2319050'>a</span> <span m='2319110'>lot</span> <span m='2319290'>of</span>
  <span m='2319400'>things.</span> <span m='2320320'>But</span> <span
  m='2320540'>this</span> <span m='2320750'>part,</span> <span
  m='2322914'>it's</span> <span m='2323370'>not</span> <span
  m='2323560'>that</span> <span m='2323710'>important.</span> <span
  m='2324510'>Just</span> <span m='2325660'>cool</span> <span
  m='2325890'>stuff.</span> </p><p><span m='2328740'>Let's</span> <span
  m='2329000'>think</span> <span m='2329190'>about</span> <span
  m='2329430'>this</span> <span m='2329600'>a</span> <span
  m='2329650'>little</span> <span m='2329900'>bit</span> <span
  m='2330030'>more,</span> <span m='2330770'>this</span> <span
  m='2331140'>fact.</span> <span m='2333410'>Taking</span> <span
  m='2333770'>the</span> <span m='2333900'>leftmost</span> <span
  m='2334900'>point</span> <span m='2335270'>all</span> <span
  m='2335510'>the</span> <span m='2335630'>time</span> <span
  m='2335970'>means</span> <span m='2337070'>if</span> <span
  m='2337250'>you</span> <span m='2337350'>want</span> <span
  m='2337570'>to</span> <span m='2337650'>make</span> <span m='2337850'>a</span>
  <span m='2337930'>decision</span> <span m='2339200'>for</span> <span
  m='2339380'>your</span> <span m='2339530'>time</span> <span
  m='2339820'>interval--</span> <span m='2341570'>so</span> <span
  m='2341700'>at</span> <span m='2341910'>time</span> <span m='2342210'>t</span>
  <span m='2342490'>of</span> <span m='2342550'>i</span> <span
  m='2343240'>and</span> <span m='2343610'>time</span> <span m='2343920'>t
  of</span> <span m='2344150'>i</span> <span m='2344440'>plus</span> <span
  m='2344730'>1,</span> <span m='2345630'>let's</span> <span
  m='2345770'>say</span> <span m='2346100'>it's the</span> <span
  m='2346210'>stock</span> <span m='2346530'>price.</span> <span
  m='2348760'>You</span> <span m='2348880'>want</span> <span
  m='2349120'>to</span> <span m='2350230'>say</span> <span
  m='2350540'>that</span> <span m='2350770'>you</span> <span
  m='2350890'>had</span> <span m='2352190'>so</span> <span
  m='2352380'>many</span> <span m='2352610'>stocks</span> <span
  m='2353605'>in</span> <span m='2353950'>this</span> <span
  m='2354320'>time</span> <span m='2354590'>interval.</span> <span
  m='2356370'>Let's</span> <span m='2356530'>say</span> <span
  m='2356660'>you</span> <span m='2356770'>had</span> <span
  m='2357010'>so</span> <span m='2357140'>many</span> <span
  m='2357330'>stocks</span> <span m='2357730'>in</span> <span
  m='2358030'>this</span> <span m='2358240'>time</span> <span
  m='2358490'>interval</span> <span m='2360400'>according</span> <span
  m='2360790'>to</span> <span m='2361050'>the</span> <span
  m='2361170'>values</span> <span m='2361470'>between</span> <span
  m='2361740'>this</span> <span m='2361940'>and</span> <span
  m='2362080'>this.</span> </p><p><span m='2363430'>In</span> <span
  m='2363630'>real</span> <span m='2363940'>world,</span> <span
  m='2364690'>your</span> <span m='2364890'>only</span> <span
  m='2365170'>choice</span> <span m='2365860'>you</span> <span
  m='2365950'>have</span> <span m='2366210'>is</span> <span
  m='2366540'>you</span> <span m='2366660'>have</span> <span
  m='2366820'>to</span> <span m='2366920'>make</span> <span
  m='2367080'>the</span> <span m='2367180'>decision</span> <span
  m='2368010'>at</span> <span m='2368230'>time</span> <span m='2368480'>t
  of</span> <span m='2368920'>i.</span> <span m='2370700'>Your</span> <span
  m='2370840'>choice</span> <span m='2371170'>cannot</span> <span
  m='2371580'>depend</span> <span m='2371950'>on</span> <span
  m='2372040'>the</span> <span m='2372130'>future</span> <span
  m='2372510'>time.</span> <span m='2373580'>You</span> <span
  m='2373670'>can't</span> <span m='2373890'>suddenly</span> <span
  m='2374250'>say,</span> <span m='2374560'>OK,</span> <span
  m='2375310'>in</span> <span m='2375440'>this</span> <span
  m='2375650'>interval</span> <span m='2376290'>the</span> <span
  m='2376410'>stock</span> <span m='2376650'>price</span> <span
  m='2376850'>increased</span> <span m='2377170'>a</span> <span
  m='2377240'>lot,</span> <span m='2377610'>so I'll</span> <span
  m='2377910'>assume</span> <span m='2378420'>that</span> <span m='2378810'>I
  had a</span> <span m='2378860'>lot</span> <span m='2379050'>of</span> <span
  m='2379210'>stocks</span> <span m='2379805'>in</span> <span
  m='2380110'>this</span> <span m='2380460'>interval.</span> <span
  m='2382930'>In</span> <span m='2383150'>this</span> <span
  m='2383370'>interval,</span> <span m='2385140'>I</span> <span m='2385270'>knew
  it</span> <span m='2385590'>was</span> <span m='2385750'>going</span> <span
  m='2385860'>to</span> <span m='2385910'>drop,</span> <span
  m='2386190'>so</span> <span m='2386290'>I'll</span> <span
  m='2386380'>just</span> <span m='2386680'>take</span> <span
  m='2386840'>the</span> <span m='2386930'>rightmost</span> <span
  m='2387340'>interval.</span> <span m='2390060'>I'll</span> <span
  m='2390460'>assume</span> <span m='2390820'>that I only had</span> <span
  m='2391160'>this many</span> <span m='2391580'>stock.</span> </p><p><span
  m='2392410'>You</span> <span m='2392520'>can't</span> <span
  m='2392830'>do</span> <span m='2392970'>that.</span> <span m='2393460'>Your
  decision</span> <span m='2394030'>has</span> <span m='2394250'>to</span> <span
  m='2394320'>be</span> <span m='2394420'>based</span> <span
  m='2394750'>on</span> <span m='2394870'>the</span> <span
  m='2394970'>leftmost</span> <span m='2395520'>point,</span> <span
  m='2396850'>because</span> <span m='2398140'>the</span> <span
  m='2398290'>time.</span> <span m='2398630'>You</span> <span
  m='2398730'>can't</span> <span m='2399020'>see</span> <span
  m='2399200'>the</span> <span m='2399310'>future.</span> </p><p><span
  m='2400880'>And</span> <span m='2400910'>the</span> <span
  m='2401010'>reason</span> <span m='2401250'>Ito's</span> <span
  m='2401590'>calculus</span> <span m='2402970'>works</span> <span
  m='2403260'>well</span> <span m='2403970'>in our</span> <span
  m='2404275'>setting</span> <span m='2404580'>is</span> <span
  m='2404690'>because of</span> <span m='2405130'>this</span> <span
  m='2405340'>fact,</span> <span m='2406280'>because</span> <span
  m='2407300'>it</span> <span m='2407510'>has</span> <span
  m='2407970'>inside</span> <span m='2408440'>it</span> <span m='2408760'>the
  fact that</span> <span m='2409220'>you</span> <span m='2409380'>cannot</span>
  <span m='2409890'>see</span> <span m='2410050'>the</span> <span
  m='2410170'>future.</span> <span m='2410820'>Every</span> <span
  m='2411070'>decision</span> <span m='2411520'>is</span> <span
  m='2411690'>made</span> <span m='2412480'>based</span> <span
  m='2413230'>on</span> <span m='2413400'>the</span> <span
  m='2413500'>leftmost</span> <span m='2414270'>time.</span> <span
  m='2416310'>If</span> <span m='2416490'>you</span> <span
  m='2416580'>want</span> <span m='2416660'>to</span> <span
  m='2416710'>make</span> <span m='2416890'>a</span> <span
  m='2416940'>decision</span> <span m='2417400'>for</span> <span
  m='2417670'>your</span> <span m='2417820'>time</span> <span
  m='2418090'>interval,</span> <span m='2418845'>you have</span> <span
  m='2419170'>to do it in the</span> <span m='2419570'>beginning.</span>
  </p><p><span m='2421700'>That</span> <span m='2422660'>intuition</span> <span
  m='2423280'>is</span> <span m='2424750'>hidden</span> <span
  m='2425140'>inside</span> <span m='2425930'>of</span> <span
  m='2426320'>the</span> <span m='2426440'>theory,</span> <span m='2427240'>and
  that's</span> <span m='2427550'>why</span> <span m='2427670'>it</span> <span
  m='2427730'>works</span> <span m='2428000'>so well.</span> <span
  m='2429390'>Let</span> <span m='2429640'>me</span> <span
  m='2429840'>reiterate</span> <span m='2431140'>this</span> <span
  m='2431430'>part</span> <span m='2431650'>a</span> <span
  m='2431710'>little</span> <span m='2431880'>bit</span> <span
  m='2432010'>more.</span> <span m='2433450'>It's</span> <span
  m='2433620'>the</span> <span m='2433740'>definition</span> <span
  m='2434340'>of</span> <span m='2434470'>these</span> <span
  m='2434720'>things</span> <span m='2436500'>where</span> <span
  m='2436690'>you're</span> <span m='2436860'>only</span> <span
  m='2437100'>allowed</span> <span m='2437480'>to--</span> <span
  m='2438690'>at</span> <span m='2438910'>time</span> <span
  m='2439180'>t,</span> <span m='2439540'>you're</span> <span
  m='2439610'>only</span> <span m='2439850'>allowed</span> <span
  m='2440250'>to</span> <span m='2440640'>use</span> <span m='2440890'>the
  information</span> <span m='2441440'>up</span> <span m='2441550'>to</span>
  <span m='2441650'>time</span> <span m='2441910'>t.</span> </p><p><span
  m='2454390'>Definition</span> <span m='2462197'>delta</span> <span
  m='2462674'>t</span> <span m='2464582'>is</span> <span m='2465060'>an</span>
  <span m='2465540'>adapted</span> <span m='2466170'>process--</span> <span
  m='2474380'>sorry--</span> <span m='2486010'>adapted</span> <span
  m='2486660'>to</span> <span m='2486790'>another</span> <span
  m='2487150'>stochastic</span> <span m='2487590'>process</span> <span
  m='2488210'>Xt</span> <span m='2489730'>if</span> <span m='2494440'>for</span>
  <span m='2495120'>all</span> <span m='2495610'>values</span> <span
  m='2496090'>of</span> <span m='2496260'>time</span> <span
  m='2496570'>variables</span> <span m='2498920'>delta</span> <span
  m='2499310'>t</span> <span m='2500670'>depends</span> <span
  m='2503550'>only</span> <span m='2505210'>on</span> <span
  m='2506520'>X0</span> <span m='2507210'>up</span> <span m='2507450'>to</span>
  <span m='2507690'>Xt.</span> <span m='2510930'>There's</span> <span
  m='2511270'>a</span> <span m='2511300'>lot</span> <span m='2511470'>of</span>
  <span m='2511580'>vague</span> <span m='2511850'>statements</span> <span
  m='2512300'>inside</span> <span m='2512660'>here,</span> <span
  m='2513360'>but</span> <span m='2513730'>what</span> <span
  m='2513820'>I'm</span> <span m='2513930'>trying</span> <span
  m='2514130'>to</span> <span m='2514200'>say</span> <span m='2514340'>is</span>
  <span m='2514960'>just</span> <span m='2515120'>assume</span> <span
  m='2515400'>x</span> <span m='2515730'>is the</span> <span
  m='2515790'>Brownian</span> <span m='2516170'>motion</span> <span
  m='2517320'>underlying</span> <span m='2518270'>stock</span> <span
  m='2518570'>price.</span> </p><p><span m='2519960'>Your</span> <span
  m='2520140'>stock</span> <span m='2520500'>is</span> <span
  m='2520640'>changing.</span> <span m='2524500'>You</span> <span
  m='2524580'>want</span> <span m='2524710'>to</span> <span m='2524780'>call
  it</span> <span m='2525030'>with</span> <span m='2525180'>a</span> <span
  m='2525240'>strategy,</span> <span m='2526305'>and</span> <span
  m='2526700'>you</span> <span m='2526870'>want</span> <span
  m='2527020'>to</span> <span m='2527090'>say</span> <span
  m='2527320'>that</span> <span m='2527470'>mathematically</span> <span
  m='2528270'>this</span> <span m='2528510'>strategy</span> <span
  m='2528840'>makes</span> <span m='2529040'>sense.</span> <span
  m='2531280'>And</span> <span m='2531380'>what</span> <span
  m='2531550'>it's</span> <span m='2531690'>saying</span> <span
  m='2531970'>is</span> <span m='2532170'>if</span> <span
  m='2532330'>your</span> <span m='2532450'>strategy</span> <span
  m='2533220'>makes</span> <span m='2534200'>your</span> <span
  m='2534370'>decision</span> <span m='2534840'>at</span> <span
  m='2534960'>time</span> <span m='2535210'>t</span> <span m='2536630'>is</span>
  <span m='2536790'>only</span> <span m='2537050'>based</span> <span
  m='2537360'>on</span> <span m='2537470'>the</span> <span
  m='2537560'>past</span> <span m='2538030'>values</span> <span
  m='2538510'>of</span> <span m='2538630'>your</span> <span
  m='2538800'>stock</span> <span m='2539030'>price,</span> <span
  m='2539840'>then</span> <span m='2540220'>that's</span> <span
  m='2540640'>an</span> <span m='2541230'>adapted</span> <span
  m='2541690'>process.</span> </p><p><span m='2543750'>This</span> <span
  m='2544020'>defines</span> <span m='2544850'>the</span> <span
  m='2544990'>processes</span> <span m='2545670'>that</span> <span
  m='2545800'>are</span> <span m='2545900'>reasonable,</span> <span
  m='2546590'>that</span> <span m='2546780'>cannot</span> <span
  m='2547170'>see</span> <span m='2547360'>future.</span> <span
  m='2548540'>And</span> <span m='2548670'>these</span> <span
  m='2548920'>are</span> <span m='2549170'>all--</span> <span
  m='2549930'>in</span> <span m='2550080'>terms</span> <span
  m='2550390'>of</span> <span m='2550500'>strategy,</span> <span
  m='2551030'>if</span> <span m='2551170'>delta</span> <span
  m='2551480'>t</span> <span m='2551680'>is a</span> <span
  m='2551790'>portfolio</span> <span m='2552420'>strategy,</span> <span
  m='2554400'>these</span> <span m='2554730'>are</span> <span
  m='2554800'>the</span> <span m='2554940'>only</span> <span
  m='2555280'>meaningful</span> <span m='2555820'>strategies</span> <span
  m='2556270'>that you can</span> <span m='2556766'>use.</span> <span
  m='2560240'>And</span> <span m='2560840'>because</span> <span
  m='2561160'>of</span> <span m='2561220'>what</span> <span m='2561330'>I</span>
  <span m='2561410'>said</span> <span m='2561640'>before,</span> <span
  m='2562060'>because</span> <span m='2562340'>we're</span> <span
  m='2562480'>always</span> <span m='2562740'>taking</span> <span
  m='2563030'>the</span> <span m='2563120'>leftmost</span> <span
  m='2563750'>point,</span> <span m='2565140'>adaptive</span> <span
  m='2565580'>processes</span> <span m='2566170'>just</span> <span
  m='2566470'>also</span> <span m='2566740'>fit</span> <span
  m='2567040'>very</span> <span m='2567290'>well</span> <span
  m='2567570'>with</span> <span m='2567740'>Ito's</span> <span
  m='2568420'>calculus.</span> <span m='2570440'>They'll</span> <span
  m='2571910'>come</span> <span m='2572160'>into</span> <span
  m='2572380'>play</span> <span m='2572680'>altogether.</span> </p><p><span
  m='2575670'>Just</span> <span m='2576140'>a few</span> <span
  m='2576230'>examples.</span> <span m='2590445'>First,</span> <span
  m='2590940'>a</span> <span m='2591130'>very</span> <span
  m='2591410'>stupid</span> <span m='2591810'>example.</span> <span
  m='2593740'>Xt</span> <span m='2594015'>is</span> <span
  m='2594290'>adapted</span> <span m='2594790'>to Xt.</span> <span
  m='2600170'>Of</span> <span m='2600470'>course,</span> <span
  m='2601100'>because</span> <span m='2602110'>at</span> <span
  m='2602270'>time,</span> <span m='2602490'>Xt</span> <span
  m='2603040'>really</span> <span m='2603230'>depends</span> <span
  m='2603560'>on</span> <span m='2603710'>only</span> <span
  m='2604120'>Xt,</span> <span m='2605200'>nothing</span> <span
  m='2605615'>else.</span> </p><p><span m='2606710'>Two,</span> <span
  m='2608096'>Xt</span> <span m='2608560'>plus</span> <span m='2608880'>1</span>
  <span m='2610330'>is</span> <span m='2610520'>not</span> <span
  m='2612311'>adapted</span> <span m='2614259'>to Xt.</span> <span
  m='2616060'>This</span> <span m='2616260'>is</span> <span
  m='2616320'>maybe</span> <span m='2616600'>a</span> <span
  m='2616700'>little</span> <span m='2616890'>bit</span> <span
  m='2617010'>vague,</span> <span m='2617580'>so</span> <span m='2617985'>we'll
  call it</span> <span m='2618840'>Yt</span> <span m='2619910'>equals</span>
  <span m='2620520'>Xt</span> <span m='2620966'>plus</span> <span
  m='2621412'>1.</span> <span m='2624090'>Yt</span> <span m='2624770'>is</span>
  <span m='2625390'>the</span> <span m='2625570'>value</span> <span
  m='2626080'>at</span> <span m='2626350'>t</span> <span m='2626540'>plus</span>
  <span m='2626850'>1,</span> <span m='2628200'>and</span> <span
  m='2628440'>it's</span> <span m='2628630'>not</span> <span
  m='2628900'>based</span> <span m='2629240'>on</span> <span
  m='2629360'>the</span> <span m='2629430'>values</span> <span
  m='2629770'>up</span> <span m='2629880'>to</span> <span m='2629970'>time
  t.</span> <span m='2630850'>Just</span> <span m='2631290'>a</span> <span
  m='2631380'>very</span> <span m='2631610'>artificial</span> <span
  m='2632190'>example.</span> </p><p><span m='2636405'>Another</span> <span
  m='2636980'>example,</span> <span m='2640713'>delta</span> <span
  m='2641206'>t</span> <span m='2642192'>equals</span> <span
  m='2642685'>minima</span> <span m='2646136'>is</span> <span
  m='2646629'>adapted.</span> <span m='2661419'>And I'll</span> <span
  m='2661940'>let you</span> <span m='2662410'>think</span> <span
  m='2662580'>about</span> <span m='2662830'>it.</span> <span m='2663180'>The
  fourth</span> <span m='2663600'>is</span> <span m='2663660'>quite</span> <span
  m='2663920'>interesting.</span> <span m='2664850'>Suppose</span> <span
  m='2665270'>T</span> <span m='2665400'>is</span> <span
  m='2665590'>fixed,</span> <span m='2666090'>some</span> <span
  m='2666290'>large</span> <span m='2666540'>integer,</span> <span
  m='2667540'>or</span> <span m='2667680'>some</span> <span
  m='2667870'>large</span> <span m='2668130'>real</span> <span
  m='2668350'>number.</span> <span m='2670140'>Then</span> <span
  m='2670840'>you</span> <span m='2671000'>let</span> <span
  m='2671250'>delta</span> <span m='2671570'>t</span> <span
  m='2671940'>to</span> <span m='2672440'>be</span> <span m='2672570'>the</span>
  <span m='2672670'>maximum</span> <span m='2683020'>where</span> <span
  m='2683520'>X</span> <span m='2683790'>of</span> <span m='2683980'>s.</span>
  <span m='2690600'>It's</span> <span m='2690850'>not</span> <span
  m='2691190'>adapted.</span> </p><p><span m='2698790'>What</span> <span
  m='2698950'>is</span> <span m='2699350'>this? This</span> <span
  m='2699560'>means</span> <span m='2699750'>at</span> <span
  m='2699960'>time</span> <span m='2700250'>T,</span> <span
  m='2701090'>I'm</span> <span m='2701190'>going</span> <span
  m='2701270'>to</span> <span m='2701350'>take</span> <span
  m='2701640'>at</span> <span m='2701740'>it</span> <span
  m='2702020'>this</span> <span m='2702240'>value,</span> <span
  m='2706970'>the</span> <span m='2707060'>maximum</span> <span
  m='2707690'>of</span> <span m='2708180'>all</span> <span
  m='2708515'>value</span> <span m='2708850'>inside</span> <span
  m='2709340'>this part,</span> <span m='2709850'>the</span> <span
  m='2709950'>future.</span> <span m='2711340'>This</span> <span
  m='2711580'>refers</span> <span m='2711970'>to</span> <span
  m='2712070'>the</span> <span m='2712180'>future.</span> <span
  m='2713600'>It's</span> <span m='2713730'>not</span> <span
  m='2713890'>an</span> <span m='2713970'>adapted</span> <span
  m='2714360'>process.</span> <span m='2721680'>Any</span> <span
  m='2721950'>questions?</span> </p><p><span m='2725290'>Now</span> <span
  m='2726270'>we're</span> <span m='2726400'>ready</span> <span
  m='2727230'>to</span> <span m='2727350'>talk</span> <span
  m='2727580'>about</span> <span m='2727800'>the</span> <span
  m='2727890'>properties</span> <span m='2728340'>of</span> <span
  m='2728910'>Ito's</span> <span m='2729380'>integral.</span> <span
  m='2731190'>Let's</span> <span m='2731450'>quickly</span> <span
  m='2731910'>review</span> <span m='2732080'>what</span> <span
  m='2732220'>we</span> <span m='2732310'>have.</span> <span
  m='2734340'>First,</span> <span m='2734780'>I</span> <span
  m='2734870'>defined</span> <span m='2736340'>Ito's</span> <span
  m='2736680'>lemma--</span> <span m='2737390'>that</span> <span
  m='2737640'>means</span> <span m='2737890'>differentiation</span> <span
  m='2738380'>in</span> <span m='2738870'>Ito</span> <span
  m='2739130'>calculus.</span> <span m='2741250'>Then</span> <span
  m='2741710'>I</span> <span m='2741820'>defined</span> <span
  m='2742730'>integration</span> <span m='2743340'>using</span> <span
  m='2743580'>differentiation--</span> <span m='2744660'>integration</span>
  <span m='2745080'>was</span> <span m='2745170'>an</span> <span
  m='2745270'>inverse</span> <span m='2745740'>operation</span> <span
  m='2746300'>of</span> <span m='2746410'>the</span> <span
  m='2746480'>differentiation.</span> </p><p><span m='2748020'>But</span> <span
  m='2748200'>this</span> <span m='2748350'>integration</span> <span
  m='2748810'>also</span> <span m='2749040'>had</span> <span
  m='2749320'>an</span> <span m='2749440'>alternative</span> <span
  m='2749980'>description</span> <span m='2750500'>in</span> <span
  m='2750600'>terms</span> <span m='2750840'>of</span> <span
  m='2750920'>Riemannian</span> <span m='2751450'>sums,</span> <span
  m='2752840'>where</span> <span m='2753260'>you're</span> <span
  m='2753400'>taking</span> <span m='2753680'>just</span> <span
  m='2753850'>the</span> <span m='2754960'>leftmost</span> <span
  m='2755500'>point</span> <span m='2756880'>as</span> <span
  m='2758200'>the</span> <span m='2758320'>reference</span> <span
  m='2758650'>point</span> <span m='2759110'>for</span> <span
  m='2759280'>each</span> <span m='2759490'>interval.</span> <span
  m='2761700'>And</span> <span m='2761790'>then,</span> <span
  m='2763090'>as</span> <span m='2763300'>you</span> <span
  m='2763390'>see,</span> <span m='2763620'>this</span> <span
  m='2763900'>naturally</span> <span m='2764370'>had</span> <span
  m='2764690'>this</span> <span m='2764890'>concept</span> <span
  m='2765550'>of</span> <span m='2765980'>using</span> <span
  m='2766310'>the</span> <span m='2766420'>leftmost</span> <span
  m='2766900'>point.</span> <span m='2768090'>And</span> <span
  m='2768870'>to</span> <span m='2769290'>abstract</span> <span
  m='2769770'>that</span> <span m='2769940'>concept,</span> <span
  m='2771720'>we've</span> <span m='2772180'>come</span> <span
  m='2772400'>up</span> <span m='2772520'>with</span> <span
  m='2772680'>this</span> <span m='2772840'>adapted</span> <span
  m='2773320'>process,</span> <span m='2773810'>very</span> <span
  m='2774010'>natural</span> <span m='2774430'>process,</span> <span
  m='2775660'>which</span> <span m='2775890'>is</span> <span
  m='2776080'>like</span> <span m='2776280'>the</span> <span
  m='2776390'>real</span> <span m='2776620'>life</span> <span
  m='2776850'>procedures,</span> <span m='2777710'>real</span> <span
  m='2777870'>life</span> <span m='2778080'>strategies</span> <span
  m='2778560'>we</span> <span m='2778670'>can</span> <span
  m='2778810'>think</span> <span m='2779060'>of.</span> </p><p><span
  m='2780900'>Now</span> <span m='2781160'>let's</span> <span
  m='2781470'>see</span> <span m='2781800'>what</span> <span
  m='2782000'>happens</span> <span m='2782440'>when</span> <span
  m='2782610'>you</span> <span m='2782700'>take</span> <span
  m='2783180'>the</span> <span m='2783280'>integral</span> <span
  m='2783730'>of</span> <span m='2783830'>adapted</span> <span
  m='2784230'>processes.</span> <span m='2785442'>Ito</span> <span
  m='2785940'>integral</span> <span m='2786280'>has</span> <span
  m='2786970'>really</span> <span m='2787270'>cool</span> <span
  m='2787490'>properties.</span> </p><p><span m='2819540'>The</span> <span
  m='2819800'>first</span> <span m='2820050'>thing</span> <span
  m='2820240'>is</span> <span m='2820610'>about</span> <span
  m='2820880'>normal</span> <span m='2821190'>distribution.</span> <span
  m='2823000'>Bt</span> <span m='2826300'>has</span> <span
  m='2826550'>normal</span> <span m='2826800'>distribution</span> <span
  m='2827110'>of</span> <span m='2827420'>0</span> <span m='2827740'>up to
  t.</span> <span m='2828840'>So</span> <span m='2829110'>your</span> <span
  m='2829320'>Brownian</span> <span m='2829460'>motion</span> <span
  m='2829810'>at</span> <span m='2829950'>time</span> <span m='2830150'>t</span>
  <span m='2831170'>has</span> <span m='2831490'>normal</span> <span
  m='2832000'>distribution</span> <span m='2832600'>with</span> <span
  m='2832730'>0,</span> <span m='2832970'>t.</span> <span
  m='2833780'>That</span> <span m='2833970'>means</span> <span
  m='2834260'>if</span> <span m='2834490'>your</span> <span
  m='2834840'>stochastic</span> <span m='2835270'>process</span> <span
  m='2836040'>is</span> <span m='2836230'>some</span> <span
  m='2836420'>constant</span> <span m='2836850'>time</span> <span m='2837090'>B
  of</span> <span m='2837390'>t,</span> <span m='2838840'>of</span> <span
  m='2838980'>course,</span> <span m='2839720'>then</span> <span
  m='2840735'>you</span> <span m='2841110'>have 0</span> <span
  m='2841550'>and</span> <span m='2841875'>c</span> <span
  m='2842480'>square</span> <span m='2843186'>t.</span> </p><p><span
  m='2843540'>It's still</span> <span m='2843805'>a</span> <span
  m='2844070'>normal</span> <span m='2844495'>variable.</span> <span
  m='2846780'>That</span> <span m='2846860'>means</span> <span
  m='2847200'>if</span> <span m='2847360'>you</span> <span
  m='2847490'>integrate,</span> <span m='2848650'>that's the</span> <span
  m='2848890'>integration</span> <span m='2849520'>of</span> <span
  m='2849910'>some</span> <span m='2850910'>sigma.</span> <span
  m='2859878'>That's</span> <span m='2860380'>the integration</span> <span
  m='2860680'>of</span> <span m='2860980'>sigma</span> <span
  m='2861270'>of</span> <span m='2861560'>d Bt.</span> </p><p><span
  m='2866680'>If</span> <span m='2866940'>sigma</span> <span m='2866980'>is
  a</span> <span m='2867350'>fixed</span> <span m='2867660'>constant,</span>
  <span m='2869240'>when you</span> <span m='2869320'>take</span> <span
  m='2869530'>the</span> <span m='2870310'>Ito</span> <span
  m='2870620'>integral</span> <span m='2871240'>of</span> <span
  m='2872280'>sigma</span> <span m='2872590'>times</span> <span m='2872830'>d
  Bt,</span> <span m='2873190'>this</span> <span m='2873400'>constant,</span>
  <span m='2874570'>at</span> <span m='2874740'>each</span> <span
  m='2874970'>time</span> <span m='2875200'>you</span> <span
  m='2875270'>get</span> <span m='2875440'>a</span> <span
  m='2875480'>normal</span> <span m='2875960'>distribution.</span> <span
  m='2878210'>And</span> <span m='2878340'>this</span> <span
  m='2878500'>is</span> <span m='2878610'>like</span> <span
  m='2878820'>saying</span> <span m='2879030'>the sum</span> <span
  m='2879290'>of</span> <span m='2879660'>normal</span> <span
  m='2880010'>distribution</span> <span m='2880550'>is</span> <span
  m='2880680'>also</span> <span m='2880980'>normal</span> <span
  m='2881420'>distribution.</span> <span m='2882330'>It has</span> <span
  m='2882750'>this hidden</span> <span m='2882940'>fact,</span> <span
  m='2883380'>because</span> <span m='2883660'>integral</span> <span
  m='2884090'>is</span> <span m='2884230'>like</span> <span
  m='2884630'>sum</span> <span m='2885030'>in the</span> <span
  m='2885430'>limit.</span> </p><p><span m='2886980'>And</span> <span
  m='2887990'>this</span> <span m='2888200'>can</span> <span
  m='2888330'>be</span> <span m='2888430'>generalized.</span> <span
  m='2890456'>If</span> <span m='2890880'>delta</span> <span
  m='2891240'>t</span> <span m='2893480'>is</span> <span m='2895210'>on a</span>
  <span m='2895360'>process</span> <span m='2897320'>depending</span> <span
  m='2897800'>only</span> <span m='2898070'>on</span> <span
  m='2898160'>the</span> <span m='2898260'>time</span> <span
  m='2898560'>variable--</span> <span m='2903300'>so it</span> <span
  m='2903400'>does</span> <span m='2903610'>not</span> <span
  m='2903860'>depend</span> <span m='2904200'>on</span> <span
  m='2904280'>the</span> <span m='2904360'>Brownian</span> <span
  m='2904710'>motion--</span> <span m='2905940'>then</span> <span
  m='2907660'>the</span> <span m='2907760'>process</span> <span
  m='2908590'>X</span> <span m='2908820'>of</span> <span m='2909060'>t</span>
  <span m='2910080'>equals</span> <span m='2910420'>the</span> <span
  m='2910490'>integration</span> <span m='2911180'>of</span> <span
  m='2911270'>delta</span> <span m='2911610'>t</span> <span m='2912470'>d</span>
  <span m='2912780'>Bt</span> <span m='2915810'>has</span> <span
  m='2916140'>normal</span> <span m='2916470'>distribution</span> <span
  m='2922050'>at</span> <span m='2922480'>all</span> <span
  m='2922720'>time.</span> <span m='2928880'>Just</span> <span
  m='2929130'>like</span> <span m='2929330'>this,</span> <span
  m='2930420'>we</span> <span m='2930540'>don't</span> <span
  m='2930760'>know</span> <span m='2930870'>the</span> <span
  m='2930960'>exact</span> <span m='2931340'>variance</span> <span
  m='2931970'>yet.</span> <span m='2932580'>The</span> <span
  m='2932680'>variance</span> <span m='2933040'>will</span> <span
  m='2933220'>depend</span> <span m='2933650'>on</span> <span m='2933800'>the
  sigmas,</span> <span m='2935280'>but</span> <span m='2935400'>still,</span>
  <span m='2935730'>it's</span> <span m='2935890'>like</span> <span
  m='2936090'>a</span> <span m='2936150'>sum</span> <span m='2936480'>of</span>
  <span m='2936610'>normal</span> <span m='2936920'>variables,</span> <span
  m='2937650'>so</span> <span m='2937830'>we'll</span> <span
  m='2938040'>have</span> <span m='2938200'>normal</span> <span
  m='2938610'>distribution.</span> </p><p><span m='2943490'>In</span> <span
  m='2943680'>fact,</span> <span m='2944000'>it</span> <span
  m='2944320'>just</span> <span m='2944560'>gets</span> <span
  m='2944740'>better</span> <span m='2945000'>and</span> <span
  m='2945090'>better.</span> <span m='2950140'>The</span> <span
  m='2950618'>second</span> <span m='2951096'>fact</span> <span
  m='2952060'>is</span> <span m='2952300'>called</span> <span
  m='2952740'>Ito</span> <span m='2953530'>isometry.</span> <span
  m='2954950'>That</span> <span m='2955110'>was</span> <span
  m='2955260'>cool.</span> <span m='2955930'>Can</span> <span
  m='2956280'>we</span> <span m='2956380'>compute</span> <span
  m='2956700'>the</span> <span m='2956780'>variance?</span> <span
  m='2969770'>Yes?</span> </p><p><span m='2970110'>AUDIENCE: Can you put</span>
  <span m='2970562'>that board</span> <span m='2971014'>up?</span> </p><p><span
  m='2971466'>PROFESSOR: Sure.</span> </p><p><span m='2974630'>AUDIENCE: Does
  it</span> <span m='2974945'>go up?</span> </p><p><span m='2975970'>PROFESSOR:
  This</span> <span m='2976180'>one</span> <span m='2976330'>doesn't</span>
  <span m='2976400'>go</span> <span m='2976490'>up.</span> <span
  m='2977900'>That's</span> <span m='2978280'>bad.</span> <span m='2980070'>I
  wish</span> <span m='2980400'>it did</span> <span m='2980820'>go up.</span>
  </p><p><span m='2989020'>This</span> <span m='2989370'>has</span> <span
  m='2989600'>a</span> <span m='2989890'>name</span> <span
  m='2990250'>called</span> <span m='2991210'>Ito</span> <span
  m='2992030'>isometry.</span> <span m='2996740'>Can be</span> <span
  m='2996850'>used</span> <span m='2997090'>to</span> <span
  m='2997150'>compute</span> <span m='2997540'>the</span> <span
  m='2997630'>variance.</span> <span m='2998890'>Bt</span> <span
  m='2999050'>has</span> <span m='2999210'>a</span> <span
  m='2999310'>Brownian</span> <span m='2999590'>motion,</span> <span
  m='3000640'>delta</span> <span m='3001000'>t</span> <span
  m='3001640'>is</span> <span m='3002010'>adapted</span> <span
  m='3002570'>to</span> <span m='3002680'>a</span> <span
  m='3002740'>Brownian</span> <span m='3003110'>motion.</span> <span
  m='3009050'>Then</span> <span m='3009990'>the</span> <span
  m='3010150'>expectation</span> <span m='3015120'>of</span> <span
  m='3015550'>your Ito</span> <span m='3016020'>integral--</span> <span
  m='3017610'>that's</span> <span m='3017870'>the</span> <span
  m='3018000'>Ito</span> <span m='3018130'>integral</span> <span
  m='3018385'>of</span> <span m='3018640'>your</span> <span
  m='3018990'>adapted</span> <span m='3019370'>process.</span> </p><p><span
  m='3021600'>That's</span> <span m='3021760'>the</span> <span
  m='3021820'>variance--</span> <span m='3022810'>we</span> <span
  m='3022950'>take</span> <span m='3023130'>the</span> <span m='3023220'>square
  of</span> <span m='3023610'>it--</span> <span m='3025440'>is</span> <span
  m='3025910'>equal</span> <span m='3026310'>to</span> <span
  m='3028720'>something</span> <span m='3029360'>cool.</span> <span
  m='3036180'>The</span> <span m='3036380'>square</span> <span
  m='3036570'>just</span> <span m='3036740'>comes</span> <span
  m='3036890'>in.</span> <span m='3038456'>Quite</span> <span
  m='3038910'>nice,</span> <span m='3039050'>isn't it?</span> </p><p><span
  m='3044520'>I</span> <span m='3044790'>won't</span> <span
  m='3044980'>prove</span> <span m='3045200'>it,</span> <span
  m='3045420'>but</span> <span m='3045710'>let</span> <span
  m='3045850'>me</span> <span m='3045960'>tell</span> <span
  m='3046190'>you</span> <span m='3046280'>why.</span> <span
  m='3048400'>We</span> <span m='3048630'>already</span> <span
  m='3048840'>saw</span> <span m='3049080'>this</span> <span
  m='3049270'>phenomenon</span> <span m='3049680'>before.</span> <span
  m='3050300'>This</span> <span m='3050450'>is</span> <span
  m='3050560'>basically</span> <span m='3051020'>quadratic</span> <span
  m='3051510'>variation.</span> <span m='3058000'>And</span> <span
  m='3058090'>the</span> <span m='3058160'>proof</span> <span
  m='3058420'>also</span> <span m='3058620'>uses</span> <span
  m='3058980'>it.</span> <span m='3059560'>If</span> <span
  m='3059670'>you</span> <span m='3059770'>take</span> <span
  m='3060050'>delta</span> <span m='3060440'>s</span> <span
  m='3060730'>equals</span> <span m='3061070'>to</span> <span
  m='3062003'>1--</span> <span m='3062790'>sorry,</span> <span m='3063160'>I was
  using</span> <span m='3063300'>Korean--</span> <span m='3064490'>1</span>
  <span m='3064890'>at</span> <span m='3065000'>all</span> <span
  m='3065170'>time,</span> <span m='3068000'>then</span> <span
  m='3068110'>what</span> <span m='3068260'>we</span> <span
  m='3068410'>have</span> <span m='3068720'>is</span> <span
  m='3069680'>here</span> <span m='3069990'>you</span> <span
  m='3070050'>get</span> <span m='3070210'>a</span> <span
  m='3070260'>Brownian</span> <span m='3070500'>motion,</span> <span
  m='3071820'>Bt.</span> </p><p><span m='3073490'>So on the</span> <span
  m='3073760'>left</span> <span m='3074030'>you</span> <span
  m='3074100'>get</span> <span m='3074440'>an</span> <span
  m='3074490'>expectation</span> <span m='3075200'>of</span> <span
  m='3075560'>Bt</span> <span m='3077400'>square,</span> <span m='3079530'>and
  on</span> <span m='3079720'>the</span> <span m='3079850'>right,</span> <span
  m='3080210'>what</span> <span m='3080330'>you</span> <span
  m='3080480'>get</span> <span m='3080660'>is</span> <span m='3081040'>t.</span>
  <span m='3084440'>Because</span> <span m='3085800'>when</span> <span
  m='3085980'>delta</span> <span m='3086470'>s</span> <span
  m='3086710'>is</span> <span m='3086810'>equal</span> <span
  m='3087050'>to</span> <span m='3087140'>1</span> <span m='3087445'>at</span>
  <span m='3087750'>all</span> <span m='3087910'>time,</span> <span
  m='3088380'>when you</span> <span m='3088490'>have to get</span> <span
  m='3088760'>from</span> <span m='3088890'>0</span> <span m='3088990'>to</span>
  <span m='3089170'>t you</span> <span m='3089340'>get</span> <span
  m='3089560'>t,</span> <span m='3090260'>and you</span> <span m='3090560'>have
  t on</span> <span m='3091020'>the right hand side.</span> <span
  m='3092730'>That's</span> <span m='3092930'>what</span> <span m='3093190'>it's
  saying.</span> <span m='3095180'>And</span> <span m='3095340'>that</span>
  <span m='3095530'>was</span> <span m='3095670'>the</span> <span
  m='3095770'>content</span> <span m='3096410'>of</span> <span
  m='3096630'>quadratic</span> <span m='3097080'>variation,</span> <span
  m='3097455'>if</span> <span m='3097830'>you remember.</span> <span
  m='3098840'>We're</span> <span m='3099040'>summing</span> <span
  m='3100160'>the</span> <span m='3100270'>squares--</span> <span
  m='3101280'>maybe</span> <span m='3101770'>not</span> <span
  m='3102010'>exactly</span> <span m='3102480'>this,</span> <span
  m='3102680'>but</span> <span m='3102820'>you're</span> <span
  m='3103000'>summing</span> <span m='3103250'>the</span> <span
  m='3103360'>squares</span> <span m='3103780'>over</span> <span
  m='3103980'>small</span> <span m='3104320'>intervals.</span> </p><p><span
  m='3120530'>So</span> <span m='3120630'>that's</span> <span
  m='3120870'>a</span> <span m='3121480'>really</span> <span
  m='3121690'>good</span> <span m='3121860'>fact</span> <span
  m='3122150'>that</span> <span m='3122270'>you</span> <span
  m='3122370'>can</span> <span m='3122510'>use</span> <span
  m='3122680'>to</span> <span m='3122780'>compute</span> <span
  m='3123090'>the</span> <span m='3123170'>variance.</span> <span
  m='3125900'>You</span> <span m='3125980'>have</span> <span m='3126170'>an
  Ito</span> <span m='3126450'>integral,</span> <span m='3127010'>you</span>
  <span m='3127130'>know</span> <span m='3127260'>the</span> <span
  m='3127400'>square,</span> <span m='3128220'>can be</span> <span
  m='3128440'>computed</span> <span m='3129440'>this</span> <span
  m='3129630'>simple</span> <span m='3130010'>way.</span> <span
  m='3134110'>That's</span> <span m='3134600'>really cool.</span> </p><p><span
  m='3137850'>And</span> <span m='3138080'>one</span> <span
  m='3138230'>more</span> <span m='3138410'>property.</span> <span
  m='3139080'>This</span> <span m='3139140'>one</span> <span
  m='3139340'>will</span> <span m='3139430'>be</span> <span
  m='3139550'>really</span> <span m='3139830'>important.</span> <span
  m='3142560'>You'll</span> <span m='3142760'>see</span> <span
  m='3142940'>it</span> <span m='3143030'>a</span> <span m='3143090'>lot</span>
  <span m='3143460'>in</span> <span m='3143660'>future</span> <span
  m='3144010'>lectures.</span> <span m='3148630'>It's</span> <span
  m='3148750'>that</span> <span m='3149550'>when</span> <span
  m='3149810'>is</span> <span m='3149930'>Ito</span> <span
  m='3150080'>integral</span> <span m='3150490'>a</span> <span
  m='3150690'>martingale?</span> </p><p><span m='3166630'>What's</span> <span
  m='3167130'>a</span> <span m='3167170'>martingale?</span> <span
  m='3168030'>Martingale</span> <span m='3168550'>meant</span> <span
  m='3169410'>if</span> <span m='3169580'>you</span> <span
  m='3169650'>have</span> <span m='3169770'>a</span> <span
  m='3169820'>stochastic</span> <span m='3170400'>process,</span> <span
  m='3172310'>at</span> <span m='3172540'>any</span> <span
  m='3172800'>time</span> <span m='3173150'>t,</span> <span
  m='3175650'>whatever</span> <span m='3176020'>happens</span> <span
  m='3176470'>after</span> <span m='3176890'>that,</span> <span
  m='3179500'>the</span> <span m='3179610'>expected</span> <span
  m='3180170'>value</span> <span m='3181080'>at</span> <span
  m='3181230'>time</span> <span m='3181440'>t</span> <span m='3181580'>is</span>
  <span m='3181650'>equal</span> <span m='3181900'>to</span> <span
  m='3182000'>0.</span> <span m='3183890'>It</span> <span
  m='3184070'>doesn't</span> <span m='3184340'>have</span> <span
  m='3184450'>any</span> <span m='3184630'>natural</span> <span
  m='3185040'>tendency</span> <span m='3185520'>to</span> <span
  m='3185640'>go</span> <span m='3185850'>up</span> <span m='3186140'>or</span>
  <span m='3186380'>go</span> <span m='3186530'>down.</span> <span
  m='3187630'>No</span> <span m='3187720'>matter</span> <span
  m='3188000'>which</span> <span m='3188270'>point</span> <span
  m='3188640'>you</span> <span m='3188800'>stop</span> <span
  m='3189170'>your</span> <span m='3189290'>process</span> <span
  m='3190440'>and</span> <span m='3190580'>you</span> <span
  m='3190670'>see</span> <span m='3190840'>your</span> <span
  m='3190970'>future,</span> <span m='3191530'>it</span> <span
  m='3191800'>doesn't</span> <span m='3192040'>have</span> <span
  m='3192150'>a</span> <span m='3192250'>natural</span> <span
  m='3192510'>tendency</span> <span m='3192815'>to go</span> <span
  m='3193120'>up</span> <span m='3193470'>or go down.</span> <span
  m='3195470'>In</span> <span m='3197118'>formal</span> <span
  m='3197530'>language,</span> <span m='3198090'>it</span> <span m='3198240'>can
  be</span> <span m='3198500'>defined</span> <span m='3198900'>as</span> <span
  m='3208330'>where</span> <span m='3208620'>Ft</span> <span
  m='3209190'>is</span> <span m='3209880'>the</span> <span
  m='3210020'>events</span> <span m='3211080'>X0</span> <span
  m='3211750'>gets</span> <span m='3212210'>t.</span> </p><p><span
  m='3215890'>So</span> <span m='3216030'>if</span> <span m='3216190'>you</span>
  <span m='3216410'>take</span> <span m='3216750'>the</span> <span
  m='3217970'>conditional</span> <span m='3218470'>expectation</span> <span
  m='3219610'>based</span> <span m='3219970'>on</span> <span
  m='3220170'>whatever</span> <span m='3220490'>happened</span> <span
  m='3220760'>up</span> <span m='3221030'>to</span> <span
  m='3221190'>time</span> <span m='3221470'>t,</span> <span m='3222300'>that
  expectation</span> <span m='3223020'>will</span> <span m='3223180'>just</span>
  <span m='3223460'>be</span> <span m='3223730'>whatever</span> <span
  m='3224010'>value you</span> <span m='3224460'>have at</span> <span
  m='3224922'>that time.</span> <span m='3228620'>Intuitively,</span> <span
  m='3229000'>that</span> <span m='3229150'>just</span> <span
  m='3229390'>means</span> <span m='3229580'>you</span> <span
  m='3229690'>don't</span> <span m='3229990'>have</span> <span
  m='3230170'>any</span> <span m='3230330'>natural</span> <span
  m='3230690'>tendency</span> <span m='3231190'>to</span> <span
  m='3231290'>go</span> <span m='3231500'>up</span> <span m='3231780'>or
  go</span> <span m='3232204'>down.</span> <span m='3233900'>Question</span>
  <span m='3234310'>is,</span> <span m='3234540'>when</span> <span
  m='3234810'>is</span> <span m='3236160'>an Ito</span> <span
  m='3236610'>integral</span> <span m='3238875'>a</span> <span
  m='3239370'>martingale?</span> </p><p><span m='3268985'>Adapted</span> <span
  m='3271590'>to</span> <span m='3272100'>B of</span> <span
  m='3272420'>t,</span> <span m='3275470'>then</span> <span m='3285420'>it
  is</span> <span m='3285630'>a</span> <span m='3285670'>martingale.</span>
  <span m='3291030'>As</span> <span m='3291230'>long</span> <span
  m='3291550'>as</span> <span m='3291810'>g</span> <span m='3291950'>is</span>
  <span m='3292090'>not</span> <span m='3292260'>some</span> <span
  m='3292400'>crazy</span> <span m='3292730'>function,</span> <span
  m='3294090'>as</span> <span m='3294140'>long</span> <span
  m='3295810'>as</span> <span m='3297200'>g</span> <span m='3297610'>is</span>
  <span m='3298080'>reasonable--</span> <span m='3302840'>only</span> <span
  m='3303200'>can</span> <span m='3303350'>be</span> <span
  m='3303500'>reasonable</span> <span m='3304150'>if</span> <span
  m='3304310'>it's</span> <span m='3305392'>[INAUDIBLE].</span> <span
  m='3307900'>If you</span> <span m='3307990'>don't</span> <span
  m='3308190'>know</span> <span m='3308300'>what</span> <span
  m='3308440'>it</span> <span m='3308540'>means,</span> <span
  m='3310055'>you</span> <span m='3310480'>can</span> <span
  m='3310630'>safely</span> <span m='3310890'>ignore</span> <span
  m='3311150'>it.</span> <span m='3319030'>Basically,</span> <span
  m='3319330'>if</span> <span m='3319630'>g</span> <span
  m='3319900'>doesn't--</span> <span m='3321486'>it's</span> <span
  m='3321930'>not a</span> <span m='3322000'>crazy</span> <span
  m='3322340'>function</span> <span m='3323250'>if</span> <span
  m='3323360'>it</span> <span m='3323490'>doesn't</span> <span
  m='3323720'>grow</span> <span m='3323900'>too</span> <span
  m='3324060'>fast,</span> <span m='3324640'>then</span> <span
  m='3324760'>in</span> <span m='3324810'>most</span> <span
  m='3325090'>cases</span> <span m='3327000'>this</span> <span
  m='3327220'>integral</span> <span m='3327690'>is</span> <span
  m='3327800'>always</span> <span m='3328610'>a martingale.</span> </p><p><span
  m='3331590'>If</span> <span m='3331760'>you</span> <span
  m='3331820'>flip</span> <span m='3332140'>it--</span> <span
  m='3333640'>remember,</span> <span m='3334190'>integral</span> <span
  m='3334800'>was</span> <span m='3334910'>defined</span> <span
  m='3335470'>as</span> <span m='3336050'>the</span> <span
  m='3336840'>inverse</span> <span m='3337250'>of</span> <span
  m='3337370'>differentiation.</span> <span m='3338880'>So</span> <span
  m='3338970'>if</span> <span m='3339110'>d Xt</span> <span
  m='3340610'>is</span> <span m='3340750'>equal</span> <span
  m='3341040'>to</span> <span m='3341170'>some</span> <span
  m='3341380'>function</span> <span m='3341910'>mu</span> <span
  m='3342300'>that</span> <span m='3342700'>depends</span> <span
  m='3343140'>on</span> <span m='3343460'>both</span> <span m='3343690'>t</span>
  <span m='3343950'>and</span> <span m='3344120'>Bt</span> <span
  m='3344620'>times</span> <span m='3345070'>dt</span> <span
  m='3346220'>plus</span> <span m='3346740'>sigma</span> <span
  m='3348631'>of</span> <span m='3349070'>d</span> <span m='3349230'>Bt,</span>
  <span m='3351580'>what</span> <span m='3351740'>this</span> <span
  m='3351930'>means</span> <span m='3352190'>is</span> <span
  m='3352340'>Xt</span> <span m='3352580'>is</span> <span m='3352770'>a</span>
  <span m='3352880'>martingale</span> <span m='3356940'>if</span> <span
  m='3358380'>that</span> <span m='3358570'>is</span> <span m='3358700'>0</span>
  <span m='3360731'>at</span> <span m='3361220'>all</span> <span
  m='3361470'>time,</span> <span m='3362220'>always.</span> <span
  m='3367860'>And</span> <span m='3368000'>if</span> <span
  m='3368090'>it's</span> <span m='3368220'>not</span> <span
  m='3368470'>0,</span> <span m='3368650'>you</span> <span
  m='3368810'>have</span> <span m='3368970'>a drift,</span> <span
  m='3369410'>so</span> <span m='3369590'>it's</span> <span
  m='3370070'>not</span> <span m='3370310'>a</span> <span
  m='3370350'>martingale.</span> <span m='3372330'>That</span> <span
  m='3372550'>gives</span> <span m='3372700'>you</span> <span
  m='3372800'>some</span> <span m='3372950'>classification.</span> </p><p><span
  m='3373590'>Now,</span> <span m='3373790'>if you</span> <span
  m='3373950'>look</span> <span m='3374120'>at</span> <span m='3374200'>a</span>
  <span m='3374260'>differential</span> <span m='3374780'>equation</span> <span
  m='3375390'>of</span> <span m='3375890'>this</span> <span
  m='3376120'>stochastic--</span> <span m='3376530'>this</span> <span
  m='3376920'>is</span> <span m='3377020'>called</span> <span
  m='3377310'>a</span> <span m='3377420'>stochastic</span> <span
  m='3377740'>differential</span> <span m='3378410'>equation--</span> <span
  m='3379490'>if</span> <span m='3379620'>you</span> <span
  m='3379680'>know</span> <span m='3379820'>stochastic</span> <span
  m='3380330'>process,</span> <span m='3381040'>if</span> <span
  m='3381050'>you</span> <span m='3381160'>look</span> <span
  m='3381330'>at</span> <span m='3381620'>a stochastic</span> <span
  m='3381970'>differential</span> <span m='3382290'>equation,</span> <span
  m='3383245'>if</span> <span m='3383620'>it</span> <span
  m='3383760'>doesn't</span> <span m='3384070'>have a</span> <span
  m='3384170'>drift</span> <span m='3384440'>term,</span> <span
  m='3384860'>it's</span> <span m='3385000'>a</span> <span
  m='3385050'>martingale.</span> <span m='3386440'>If</span> <span
  m='3386580'>it</span> <span m='3386650'>has</span> <span m='3386860'>a</span>
  <span m='3386970'>drift</span> <span m='3387180'>term,</span> <span
  m='3387430'>it's</span> <span m='3387600'>not</span> <span
  m='3387790'>a</span> <span m='3387830'>martingale.</span> <span
  m='3389510'>That'll</span> <span m='3389700'>be</span> <span
  m='3389830'>really</span> <span m='3390110'>useful</span> <span
  m='3390430'>later,</span> <span m='3390900'>so</span> <span
  m='3390980'>try</span> <span m='3391140'>to</span> <span m='3391210'>remember
  it.</span> </p><p><span m='3392310'>The</span> <span m='3392410'>whole</span>
  <span m='3392610'>point</span> <span m='3392910'>is</span> <span
  m='3393610'>when</span> <span m='3393760'>you</span> <span
  m='3393860'>write</span> <span m='3394120'>down</span> <span
  m='3394290'>a</span> <span m='3394340'>stochastic</span> <span
  m='3394880'>process</span> <span m='3395290'>in</span> <span
  m='3395450'>terms</span> <span m='3395750'>of</span> <span
  m='3396170'>something</span> <span m='3396520'>times</span> <span
  m='3396740'>dt,</span> <span m='3396990'>something</span> <span
  m='3397240'>times d</span> <span m='3397740'>Bt,</span> <span
  m='3399260'>really</span> <span m='3399620'>this</span> <span
  m='3399850'>term</span> <span m='3400200'>contributes</span> <span
  m='3400850'>towards</span> <span m='3401430'>the</span> <span
  m='3402710'>tendency,</span> <span m='3404240'>the</span> <span
  m='3404340'>slope</span> <span m='3404840'>of</span> <span
  m='3405320'>whatever</span> <span m='3405640'>is</span> <span
  m='3405750'>going</span> <span m='3405860'>to</span> <span
  m='3405900'>happen</span> <span m='3406260'>in</span> <span
  m='3406360'>the</span> <span m='3406460'>future.</span> <span
  m='3407320'>And</span> <span m='3407460'>this</span> <span
  m='3407610'>is</span> <span m='3407720'>like</span> <span
  m='3407880'>the</span> <span m='3407960'>variance</span> <span
  m='3408510'>term.</span> <span m='3410595'>It</span> <span
  m='3410870'>adds</span> <span m='3411100'>some</span> <span
  m='3411260'>variance</span> <span m='3411690'>to</span> <span
  m='3411970'>your</span> <span m='3412670'>stochastic</span> <span
  m='3413190'>process.</span> <span m='3414430'>But</span> <span
  m='3414600'>still,</span> <span m='3415290'>it</span> <span
  m='3415460'>doesn't</span> <span m='3415950'>add</span> <span
  m='3416910'>or</span> <span m='3417150'>subtract</span> <span
  m='3417630'>value</span> <span m='3417990'>over</span> <span
  m='3418210'>time,</span> <span m='3418990'>it</span> <span
  m='3422870'>fairly</span> <span m='3423170'>adds</span> <span
  m='3423560'>variation.</span> </p><p><span m='3426540'>Remember</span> <span
  m='3426940'>that.</span> <span m='3427150'>That's</span> <span
  m='3427390'>very</span> <span m='3427590'>important</span> <span
  m='3427990'>fact.</span> <span m='3429890'>You're</span> <span
  m='3430020'>going</span> <span m='3430130'>to</span> <span
  m='3430180'>use</span> <span m='3430360'>it</span> <span m='3430440'>a
  lot.</span> </p><p><span m='3431900'>For</span> <span
  m='3432020'>example,</span> <span m='3432370'>you're</span> <span
  m='3432430'>going</span> <span m='3432530'>to</span> <span
  m='3432570'>use</span> <span m='3432840'>it</span> <span
  m='3433120'>for</span> <span m='3433260'>pricing</span> <span
  m='3433720'>theory.</span> <span m='3434430'>In</span> <span
  m='3434580'>pricing</span> <span m='3434970'>theory,</span> <span
  m='3435890'>you</span> <span m='3436010'>come</span> <span
  m='3436230'>up</span> <span m='3436370'>with</span> <span
  m='3436560'>this</span> <span m='3436810'>stochastic</span> <span
  m='3437400'>process</span> <span m='3438870'>or</span> <span
  m='3439060'>some</span> <span m='3439250'>strategy.</span> <span
  m='3440150'>You</span> <span m='3440300'>look</span> <span
  m='3440500'>at</span> <span m='3440600'>its</span> <span
  m='3440780'>value.</span> <span m='3442130'>Let's say</span> <span
  m='3442500'>Xt</span> <span m='3442785'>is your</span> <span
  m='3443070'>value</span> <span m='3443510'>of</span> <span
  m='3443610'>your</span> <span m='3443720'>portfolio</span> <span
  m='3444320'>over</span> <span m='3444520'>time.</span> <span
  m='3447280'>If</span> <span m='3447440'>that</span> <span
  m='3447640'>portfolio</span> <span m='3450650'>has--</span> <span
  m='3452150'>then</span> <span m='3452530'>you</span> <span
  m='3452640'>match</span> <span m='3452970'>it</span> <span
  m='3453100'>with</span> <span m='3453310'>your</span> <span
  m='3453420'>financial--</span> <span m='3454940'>let</span> <span
  m='3455040'>me</span> <span m='3455160'>go</span> <span m='3455490'>over
  it</span> <span m='3455730'>slowly</span> <span m='3456080'>again.</span>
  </p><p><span m='3456830'>First</span> <span m='3457150'>you</span> <span
  m='3457210'>have</span> <span m='3457640'>a</span> <span
  m='3457700'>financial</span> <span m='3458090'>derivative,</span> <span
  m='3463750'>like</span> <span m='3463940'>option</span> <span
  m='3464780'>of</span> <span m='3465210'>a</span> <span
  m='3465290'>stock.</span> <span m='3467830'>Then</span> <span
  m='3468070'>you</span> <span m='3468160'>have</span> <span
  m='3468300'>your</span> <span m='3468410'>portfolio</span> <span
  m='3468930'>strategy.</span> <span m='3475630'>Assume</span> <span
  m='3476030'>that</span> <span m='3476350'>you</span> <span
  m='3476360'>have</span> <span m='3476490'>some</span> <span
  m='3476640'>strategy</span> <span m='3477180'>that,</span> <span
  m='3477720'>at</span> <span m='3477980'>the</span> <span
  m='3478060'>expiration</span> <span m='3478730'>time,</span> <span
  m='3479590'>gives</span> <span m='3479830'>you</span> <span
  m='3479940'>the</span> <span m='3480050'>exact</span> <span
  m='3480440'>value</span> <span m='3480720'>of</span> <span
  m='3480780'>the</span> <span m='3480900'>option.</span> <span
  m='3483850'>Now</span> <span m='3483940'>you</span> <span
  m='3484100'>look</span> <span m='3484260'>at</span> <span
  m='3484370'>the</span> <span m='3484470'>difference</span> <span
  m='3484920'>between</span> <span m='3485280'>these</span> <span
  m='3485520'>two</span> <span m='3485820'>stochastic</span> <span
  m='3486320'>processes.</span> <span m='3490940'>Basically</span> <span
  m='3491290'>what</span> <span m='3491410'>the</span> <span
  m='3491530'>thing</span> <span m='3491810'>is,</span> <span
  m='3492100'>when</span> <span m='3492490'>your</span> <span
  m='3492630'>variance</span> <span m='3493060'>goes</span> <span
  m='3493260'>to</span> <span m='3493360'>0,</span> <span
  m='3494880'>your</span> <span m='3496550'>drift</span> <span
  m='3496860'>also</span> <span m='3497000'>has to</span> <span
  m='3497380'>go</span> <span m='3497560'>to</span> <span m='3497660'>0.</span>
  </p><p><span m='3499310'>So</span> <span m='3499490'>when</span> <span
  m='3499620'>you</span> <span m='3499720'>look</span> <span
  m='3499890'>at</span> <span m='3499970'>the</span> <span
  m='3500060'>difference,</span> <span m='3500920'>if</span> <span
  m='3501070'>you</span> <span m='3501150'>can</span> <span
  m='3501320'>somehow</span> <span m='3502270'>get</span> <span
  m='3502490'>rid</span> <span m='3502650'>of</span> <span
  m='3502760'>this</span> <span m='3502980'>variance</span> <span
  m='3503420'>term,</span> <span m='3503830'>that</span> <span
  m='3504010'>means</span> <span m='3504740'>no</span> <span
  m='3504800'>matter</span> <span m='3505120'>what</span> <span
  m='3505330'>you</span> <span m='3505450'>do,</span> <span
  m='3506660'>that</span> <span m='3506880'>will</span> <span
  m='3507020'>govern</span> <span m='3508590'>the</span> <span
  m='3508700'>value</span> <span m='3509170'>of</span> <span
  m='3509260'>your</span> <span m='3509360'>portfolio.</span> <span
  m='3510660'>If</span> <span m='3510800'>it's</span> <span
  m='3510970'>positive,</span> <span m='3511520'>that</span> <span
  m='3511590'>means</span> <span m='3511760'>you</span> <span
  m='3511850'>can</span> <span m='3512040'>always</span> <span
  m='3512400'>make</span> <span m='3512600'>money,</span> <span
  m='3514120'>because</span> <span m='3514400'>there's</span> <span
  m='3514600'>no</span> <span m='3514760'>variance.</span> <span
  m='3515250'>Without</span> <span m='3515630'>variance,</span> <span
  m='3515930'>you</span> <span m='3516030'>make</span> <span
  m='3516200'>money.</span> <span m='3517280'>That's</span> <span
  m='3517370'>called</span> <span m='3517600'>arbitrage,</span> <span
  m='3518450'>and</span> <span m='3518790'>you</span> <span
  m='3519000'>cannot</span> <span m='3519420'>have</span> <span
  m='3519650'>that.</span> </p><p><span m='3521770'>But</span> <span
  m='3522470'>I</span> <span m='3522610'>won't</span> <span
  m='3522780'>go</span> <span m='3522910'>into</span> <span
  m='3523100'>further</span> <span m='3523400'>detail</span> <span
  m='3523980'>because</span> <span m='3524350'>[INAUDIBLE]</span> <span
  m='3524990'>will</span> <span m='3525130'>cover it</span> <span
  m='3525590'>next time.</span> <span m='3526870'>But</span> <span
  m='3527050'>just</span> <span m='3527380'>remember</span> <span
  m='3527740'>that</span> <span m='3527970'>flavor.</span> <span
  m='3529070'>So</span> <span m='3529170'>when</span> <span
  m='3529310'>you</span> <span m='3529430'>write</span> <span
  m='3529850'>something</span> <span m='3530250'>down</span> <span
  m='3530525'>in</span> <span m='3530800'>a</span> <span
  m='3530930'>stochastic</span> <span m='3531360'>differential</span> <span
  m='3531820'>equation</span> <span m='3532230'>form,</span> <span
  m='3533850'>that</span> <span m='3534090'>term</span> <span
  m='3534800'>is</span> <span m='3534980'>a</span> <span
  m='3535050'>drift</span> <span m='3535370'>term,</span> <span
  m='3535790'>that</span> <span m='3535990'>term</span> <span
  m='3536150'>is</span> <span m='3536240'>a</span> <span
  m='3536280'>variance</span> <span m='3536690'>term.</span> <span
  m='3537670'>And</span> <span m='3537690'>if</span> <span
  m='3537770'>you</span> <span m='3537850'>don't</span> <span
  m='3538060'>have</span> <span m='3538250'>drift,</span> <span
  m='3538620'>it's</span> <span m='3538730'>a</span> <span
  m='3538820'>martingale.</span> <span m='3541876'>That</span> <span
  m='3542320'>is</span> <span m='3542760'>very</span> <span
  m='3542980'>important.</span> </p><p><span m='3552290'>Any</span> <span
  m='3552410'>questions?</span> <span m='3552950'>That's</span> <span
  m='3553475'>kind</span> <span m='3553750'>of</span> <span
  m='3553970'>the</span> <span m='3554110'>basics</span> <span
  m='3554840'>of</span> <span m='3555880'>Ito</span> <span
  m='3556170'>calculus.</span> <span m='3562520'>I</span> <span
  m='3562650'>will</span> <span m='3562850'>give</span> <span
  m='3563020'>you</span> <span m='3563560'>some</span> <span
  m='3563870'>exercises</span> <span m='3564640'>on</span> <span
  m='3564820'>it,</span> <span m='3566260'>mostly</span> <span
  m='3566620'>just</span> <span m='3566920'>basic</span> <span
  m='3567180'>computation</span> <span m='3567870'>exercises,</span> <span
  m='3569120'>so</span> <span m='3569190'>that</span> <span
  m='3569350'>you'll</span> <span m='3569520'>get</span> <span
  m='3569710'>familiar</span> <span m='3570110'>with</span> <span
  m='3570250'>it.</span> <span m='3571120'>Try</span> <span
  m='3571490'>to</span> <span m='3571560'>practice</span> <span
  m='3571940'>it.</span> </p><p><span m='3573210'>And</span> <span
  m='3573470'>let</span> <span m='3573650'>me</span> <span
  m='3573800'>cover</span> <span m='3574270'>one</span> <span
  m='3574480'>more</span> <span m='3574690'>thing</span> <span
  m='3574970'>called</span> <span m='3575410'>Girsanov</span> <span
  m='3575990'>theorem.</span> <span m='3578320'>It's</span> <span
  m='3578440'>related,</span> <span m='3578960'>but</span> <span
  m='3580350'>these</span> <span m='3580570'>are</span> <span
  m='3580680'>really</span> <span m='3580900'>basics</span> <span
  m='3581320'>of</span> <span m='3581470'>the Ito</span> <span
  m='3581850'>calculus,</span> <span m='3582470'>so</span> <span
  m='3582590'>if</span> <span m='3582690'>you</span> <span
  m='3582750'>have</span> <span m='3582870'>any</span> <span
  m='3583020'>questions</span> <span m='3583490'>on</span> <span
  m='3583610'>this,</span> <span m='3585130'>please</span> <span
  m='3585960'>ask</span> <span m='3586190'>me</span> <span
  m='3586300'>right</span> <span m='3586500'>now</span> <span
  m='3586940'>before</span> <span m='3587260'>I</span> <span
  m='3587290'>move</span> <span m='3587540'>on</span> <span
  m='3587700'>to</span> <span m='3587810'>the next</span> <span
  m='3588267'>topic.</span> <span m='3596842'>The</span> <span
  m='3597270'>last</span> <span m='3597610'>thing</span> <span
  m='3597770'>I</span> <span m='3597790'>want</span> <span m='3597960'>to</span>
  <span m='3598030'>talk</span> <span m='3598280'>about</span> <span
  m='3598520'>today.</span> </p><p><span m='3643710'>Here</span> <span
  m='3643970'>is</span> <span m='3644080'>an</span> <span
  m='3644320'>underlying</span> <span m='3644780'>question.</span> <span
  m='3647110'>Suppose</span> <span m='3647430'>you</span> <span
  m='3647510'>have</span> <span m='3647630'>two</span> <span
  m='3647790'>Brownian</span> <span m='3648130'>motions.</span> <span
  m='3657050'>This is</span> <span m='3657300'>without</span> <span
  m='3657810'>drift.</span> <span m='3661810'>And</span> <span
  m='3662110'>you</span> <span m='3662310'>have another</span> <span
  m='3662790'>B</span> <span m='3663040'>tilde</span> <span
  m='3665000'>Brownian</span> <span m='3665435'>motion</span> <span
  m='3665870'>with</span> <span m='3666410'>drift.</span> <span
  m='3672910'>These</span> <span m='3673290'>are</span> <span
  m='3673380'>two</span> <span m='3673670'>probability</span> <span
  m='3674450'>distributions</span> <span m='3675180'>overpasses.</span>
  </p><p><span m='3678290'>According</span> <span m='3678660'>to</span> <span
  m='3678770'>Bt,</span> <span m='3679330'>you're</span> <span
  m='3679420'>more</span> <span m='3680600'>likely</span> <span
  m='3681010'>to</span> <span m='3681100'>have some</span> <span
  m='3681540'>Brownian</span> <span m='3681880'>motion</span> <span
  m='3682765'>that</span> <span m='3683150'>has</span> <span
  m='3683410'>no</span> <span m='3683550'>drift.</span> <span
  m='3685770'>That's</span> <span m='3685880'>a</span> <span
  m='3685940'>sample</span> <span m='3686320'>pass.</span> <span
  m='3688290'>According</span> <span m='3688640'>to</span> <span
  m='3689370'>B</span> <span m='3689670'>tilde,</span> <span
  m='3690220'>you</span> <span m='3690350'>have</span> <span
  m='3690550'>some</span> <span m='3690750'>drift.</span> <span m='3694890'>Your
  Brownian</span> <span m='3695260'>motion</span> <span m='3697080'>will</span>
  <span m='3697986'>close it.</span> </p><p><span m='3701240'>A typical</span>
  <span m='3701750'>pass</span> <span m='3702400'>will</span> <span
  m='3702650'>follow</span> <span m='3702940'>this</span> <span
  m='3703210'>line</span> <span m='3703540'>and will</span> <span
  m='3703930'>follow that</span> <span m='3704320'>line.</span> <span
  m='3706190'>The</span> <span m='3706260'>question</span> <span
  m='3706590'>is</span> <span m='3706690'>this--</span> <span
  m='3709880'>can</span> <span m='3710210'>we</span> <span
  m='3712500'>switch</span> <span m='3712920'>from</span> <span
  m='3713100'>this</span> <span m='3713340'>distribution</span> <span
  m='3713960'>to</span> <span m='3714060'>this</span> <span
  m='3714300'>distribution</span> <span m='3715490'>by a</span> <span
  m='3715680'>change</span> <span m='3716000'>of</span> <span
  m='3716080'>measure?</span> <span m='3722250'>Can</span> <span
  m='3722640'>we</span> <span m='3723820'>switch</span> <span
  m='3724300'>between</span> <span m='3724800'>the</span> <span
  m='3724950'>two</span> <span m='3725140'>measures</span> <span
  m='3732730'>to</span> <span m='3732960'>probability</span> <span
  m='3733275'>distributions</span> <span m='3740610'>by</span> <span
  m='3742050'>a</span> <span m='3742580'>change</span> <span
  m='3742910'>of</span> <span m='3743380'>measure?</span> </p><p><span
  m='3750990'>Let</span> <span m='3751080'>me</span> <span m='3751330'>go</span>
  <span m='3751520'>a</span> <span m='3751590'>little</span> <span
  m='3751800'>bit</span> <span m='3751920'>more</span> <span
  m='3752490'>what</span> <span m='3752650'>it</span> <span
  m='3752750'>really</span> <span m='3753030'>means.</span> <span
  m='3754400'>Assume</span> <span m='3754780'>that</span> <span
  m='3754970'>you're</span> <span m='3755080'>just</span> <span
  m='3755320'>looking</span> <span m='3755520'>at</span> <span
  m='3755580'>a</span> <span m='3755620'>Brownian</span> <span
  m='3755940'>motion</span> <span m='3756280'>from</span> <span
  m='3756650'>time</span> <span m='3756980'>0</span> <span m='3757410'>up</span>
  <span m='3757610'>to</span> <span m='3757730'>time</span> <span
  m='3758020'>t,</span> <span m='3758550'>some</span> <span
  m='3758750'>fixed</span> <span m='3759100'>time</span> <span
  m='3759340'>interval.</span> <span m='3761760'>Then</span> <span
  m='3761840'>according</span> <span m='3762200'>to</span> <span
  m='3762350'>Bt,</span> <span m='3762790'>let's</span> <span
  m='3762990'>say</span> <span m='3763130'>this</span> <span
  m='3763360'>is</span> <span m='3764420'>a</span> <span
  m='3764520'>sample</span> <span m='3764880'>pass</span> <span
  m='3765130'>omega.</span> <span m='3767610'>You</span> <span
  m='3767730'>have</span> <span m='3767950'>some</span> <span
  m='3768110'>probability</span> <span m='3769180'>of</span> <span
  m='3769540'>omega--</span> <span m='3771170'>this</span> <span
  m='3771430'>is</span> <span m='3771510'>a</span> <span
  m='3771570'>p.d.f.</span> <span m='3774060'>given</span> <span
  m='3774390'>by</span> <span m='3776750'>this</span> <span
  m='3777160'>Brownian</span> <span m='3777480'>motion</span> <span
  m='3778040'>B.</span> <span m='3781470'>And</span> <span
  m='3781600'>then</span> <span m='3781750'>you</span> <span
  m='3781830'>have</span> <span m='3781950'>another</span> <span
  m='3782400'>p.d.f.,</span> <span m='3782980'>P</span> <span
  m='3783230'>tilde</span> <span m='3783670'>of</span> <span
  m='3784140'>omega,</span> <span m='3785100'>which</span> <span m='3785560'>is
  a</span> <span m='3785640'>p.d.f.</span> <span m='3786100'>given</span> <span
  m='3786370'>by</span> <span m='3788006'>P of</span> <span
  m='3788468'>t.</span> </p><p><span m='3791240'>The</span> <span
  m='3791350'>question</span> <span m='3791780'>is,</span> <span
  m='3792120'>does</span> <span m='3792300'>there</span> <span
  m='3792470'>exist</span> <span m='3793345'>a</span> <span m='3793750'>Z</span>
  <span m='3794990'>depending</span> <span m='3795480'>on omega</span> <span
  m='3797150'>such</span> <span m='3797490'>that</span> <span
  m='3798276'>P</span> <span m='3798670'>of</span> <span
  m='3799070'>omega</span> <span m='3799610'>is</span> <span
  m='3800100'>equal</span> <span m='3800450'>to</span> <span
  m='3800690'>Z</span> <span m='3801748'>times</span> <span m='3802744'>P</span>
  <span m='3803242'>tilde?</span> <span m='3819710'>Do you</span> <span
  m='3819960'>understand</span> <span m='3820120'>the question?</span> <span
  m='3826220'>Clearly,</span> <span m='3826740'>if</span> <span
  m='3826850'>you</span> <span m='3826910'>just</span> <span
  m='3827120'>look</span> <span m='3827300'>at</span> <span
  m='3827410'>it,</span> <span m='3828600'>they're</span> <span
  m='3828760'>quite</span> <span m='3828990'>different.</span> <span
  m='3829420'>The</span> <span m='3829590'>passes</span> <span
  m='3830250'>that</span> <span m='3830450'>you</span> <span
  m='3830560'>get</span> <span m='3831260'>according</span> <span
  m='3831600'>to</span> <span m='3831720'>distributions</span> <span
  m='3832220'>are</span> <span m='3832360'>quite</span> <span
  m='3832620'>different.</span> <span m='3835230'>It's</span> <span
  m='3835300'>not</span> <span m='3835470'>clear</span> <span
  m='3835710'>why</span> <span m='3836040'>we</span> <span
  m='3836490'>should</span> <span m='3836690'>expect</span> <span
  m='3837180'>it</span> <span m='3837260'>at</span> <span
  m='3837360'>all.</span> <span m='3843190'>You'll</span> <span
  m='3843340'>see</span> <span m='3843510'>the</span> <span
  m='3843590'>answer</span> <span m='3843870'>soon.</span> <span
  m='3843990'>But</span> <span m='3844220'>let</span> <span
  m='3844400'>me</span> <span m='3844510'>discuss</span> <span m='3845680'>all
  this</span> <span m='3846090'>in</span> <span m='3846210'>a</span> <span
  m='3846740'>different</span> <span m='3847000'>context.</span> </p><p><span
  m='3857080'>Just</span> <span m='3857280'>forget about</span> <span
  m='3857730'>all</span> <span m='3857900'>the</span> <span
  m='3857980'>Brownian</span> <span m='3858370'>motion</span> <span
  m='3858860'>and</span> <span m='3858970'>everything</span> <span
  m='3859880'>just</span> <span m='3860130'>for a</span> <span
  m='3860350'>moment.</span> <span m='3862410'>In</span> <span
  m='3862530'>this</span> <span m='3862730'>concept,</span> <span
  m='3864060'>changing</span> <span m='3864530'>from</span> <span
  m='3864850'>one</span> <span m='3865030'>probability</span> <span
  m='3865490'>distribution</span> <span m='3866010'>to</span> <span
  m='3866130'>another</span> <span m='3866410'>distribution,</span> <span
  m='3867220'>it's</span> <span m='3867450'>a</span> <span
  m='3867500'>very</span> <span m='3868420'>important</span> <span
  m='3868790'>concept</span> <span m='3869270'>in</span> <span
  m='3869360'>analysis</span> <span m='3869970'>and</span> <span
  m='3870080'>probability</span> <span m='3870590'>just</span> <span
  m='3870830'>in</span> <span m='3870910'>general,</span> <span
  m='3871250'>theoretically.</span> <span m='3872930'>And</span> <span
  m='3873520'>there's</span> <span m='3873850'>a</span> <span
  m='3873900'>name</span> <span m='3875100'>for</span> <span
  m='3875310'>this</span> <span m='3875550'>Z,</span> <span
  m='3877370'>for</span> <span m='3877550'>this</span> <span
  m='3877760'>changing</span> <span m='3878150'>measure.</span> <span
  m='3879060'>If</span> <span m='3879310'>Z</span> <span
  m='3879480'>exists,</span> <span m='3880725'>it's</span> <span
  m='3881140'>called</span> <span m='3881410'>the</span> <span
  m='3883870'>Radon-Nikodym</span> <span m='3886150'>derivative.</span> <span
  m='3890900'>Before</span> <span m='3891230'>doing</span> <span
  m='3891470'>that,</span> <span m='3891680'>let me talk</span> <span
  m='3892152'>a little bit</span> <span m='3892624'>more.</span> </p><p><span
  m='3899940'>Suppose</span> <span m='3900460'>P</span> <span
  m='3900650'>is</span> <span m='3900840'>a</span> <span
  m='3900970'>probability</span> <span m='3901450'>distribution</span> <span
  m='3902320'>over</span> <span m='3903490'>omega.</span> <span m='3909410'>It's
  a</span> <span m='3909500'>probability</span> <span
  m='3910060'>distribution.</span> <span m='3918660'>So</span> <span
  m='3918860'>this</span> <span m='3919050'>is</span> <span
  m='3919150'>some</span> <span m='3919350'>set,</span> <span
  m='3920020'>and</span> <span m='3920200'>P</span> <span
  m='3920420'>describes</span> <span m='3920880'>the</span> <span
  m='3920970'>probability</span> <span m='3921560'>that</span> <span
  m='3922530'>you</span> <span m='3922650'>have</span> <span
  m='3923010'>each</span> <span m='3923260'>element</span> <span
  m='3923660'>in</span> <span m='3923740'>the</span> <span
  m='3923850'>set.</span> <span m='3925660'>And</span> <span m='3925810'>you
  have</span> <span m='3926050'>another</span> <span
  m='3926470'>probability</span> <span m='3926940'>distribution,</span> <span
  m='3927410'>P</span> <span m='3927770'>tilde.</span> </p><p><span
  m='3933520'>We</span> <span m='3933860'>define</span> <span
  m='3935540'>P</span> <span m='3936170'>and</span> <span m='3936480'>P</span>
  <span m='3936750'>tilde</span> <span m='3938280'>to</span> <span
  m='3938510'>be</span> <span m='3938930'>equivalent</span> <span
  m='3944390'>if</span> <span m='3944890'>the</span> <span
  m='3945100'>probability</span> <span m='3945760'>that</span> <span
  m='3947790'>A</span> <span m='3948065'>is</span> <span
  m='3948340'>greater</span> <span m='3948570'>than</span> <span
  m='3948790'>zero</span> <span m='3950020'>if and</span> <span
  m='3950220'>only</span> <span m='3953800'>for</span> <span
  m='3954060'>all.</span> <span m='3958310'>These</span> <span
  m='3958570'>probability</span> <span m='3959160'>distributions</span> <span
  m='3959940'>describe</span> <span m='3960460'>the</span> <span
  m='3960570'>probability</span> <span m='3961150'>of</span> <span
  m='3961280'>the</span> <span m='3961370'>subsets.</span> <span
  m='3963380'>Think</span> <span m='3963530'>about</span> <span
  m='3963670'>a</span> <span m='3963700'>very</span> <span
  m='3964030'>simple</span> <span m='3964400'>case.</span> </p><p><span
  m='3965210'>Sigma</span> <span m='3965800'>is</span> <span
  m='3966030'>equal</span> <span m='3966330'>to</span> <span
  m='3966480'>1,</span> <span m='3967186'>2,</span> <span m='3967540'>and</span>
  <span m='3967690'>3.</span> <span m='3969620'>P</span> <span
  m='3969940'>gives</span> <span m='3970590'>1/3</span> <span
  m='3971140'>probability</span> <span m='3971750'>to</span> <span
  m='3972030'>1,</span> <span m='3972840'>1/3</span> <span
  m='3973230'>probability</span> <span m='3973495'>to</span> <span
  m='3973760'>2,</span> <span m='3974610'>1/3</span> <span
  m='3975080'>probability</span> <span m='3975360'>to</span> <span
  m='3975640'>3.</span> <span m='3976970'>P</span> <span
  m='3977220'>tilde</span> <span m='3978730'>gives</span> <span
  m='3979600'>2/3</span> <span m='3980030'>probability</span> <span
  m='3980590'>to</span> <span m='3980710'>3,</span> <span m='3981770'>1</span>
  <span m='3981920'>over</span> <span m='3982100'>6</span> <span
  m='3982380'>probability</span> <span m='3982660'>to</span> <span
  m='3982940'>2,</span> <span m='3983230'>1</span> <span m='3983600'>over</span>
  <span m='3983790'>6</span> <span m='3983990'>probability</span> <span
  m='3984450'>to</span> <span m='3984720'>3.</span> <span m='3986570'>We</span>
  <span m='3986650'>have</span> <span m='3986810'>two</span> <span
  m='3987040'>probability</span> <span m='3987570'>distribution</span> <span
  m='3988530'>over</span> <span m='3988800'>some</span> <span
  m='3989000'>space.</span> </p><p><span m='3992020'>They</span> <span
  m='3992260'>are</span> <span m='3992380'>equivalent</span> <span
  m='3993530'>if,</span> <span m='3994030'>whenever</span> <span
  m='3994670'>you</span> <span m='3994790'>take</span> <span
  m='3995060'>a</span> <span m='3995140'>subset</span> <span
  m='3996380'>of</span> <span m='3996730'>your</span> <span
  m='3996870'>background</span> <span m='3997380'>set--</span> <span
  m='3997790'>let's</span> <span m='3997980'>say</span> <span
  m='3998070'>1,</span> <span m='3998320'>2.</span> <span m='3999210'>When
  A</span> <span m='3999310'>is</span> <span m='3999540'>equal</span> <span
  m='3999780'>to</span> <span m='3999920'>1,</span> <span m='4000260'>2,</span>
  <span m='4001380'>according</span> <span m='4001560'>to</span> <span
  m='4001730'>probability</span> <span m='4002010'>distribution</span> <span
  m='4002545'>P,</span> <span m='4003410'>the</span> <span
  m='4003700'>probability</span> <span m='4004810'>you</span> <span
  m='4004920'>fall</span> <span m='4005260'>into</span> <span
  m='4005520'>this</span> <span m='4005870'>set</span> <span
  m='4006120'>A</span> <span m='4006920'>is</span> <span
  m='4007090'>equal</span> <span m='4007420'>to</span> <span
  m='4007810'>2/3.</span> <span m='4010770'>According</span> <span
  m='4011070'>to</span> <span m='4011170'>P</span> <span
  m='4011410'>tilde,</span> <span m='4013020'>you</span> <span
  m='4013150'>have</span> <span m='4014650'>5/6.</span> </p><p><span
  m='4017460'>They're</span> <span m='4017570'>not</span> <span
  m='4017850'>the</span> <span m='4017950'>same.</span> <span
  m='4018590'>The</span> <span m='4018700'>probability</span> <span
  m='4019210'>itself</span> <span m='4019480'>is</span> <span
  m='4019590'>not</span> <span m='4019780'>the</span> <span
  m='4019860'>same,</span> <span m='4020460'>but</span> <span
  m='4020640'>this</span> <span m='4020820'>condition</span> <span
  m='4021220'>is</span> <span m='4021300'>satisfied</span> <span
  m='4022050'>when it's</span> <span m='4022350'>0.</span> <span
  m='4023220'>And</span> <span m='4023350'>when</span> <span
  m='4023470'>it's</span> <span m='4023580'>not</span> <span
  m='4023800'>0,</span> <span m='4023970'>it's</span> <span
  m='4024100'>not</span> <span m='4024280'>0.</span> <span
  m='4024865'>And</span> <span m='4025210'>you</span> <span
  m='4025280'>can</span> <span m='4025400'>just</span> <span
  m='4025600'>check</span> <span m='4025830'>that</span> <span
  m='4025970'>it's</span> <span m='4026100'>always</span> <span
  m='4026350'>true,</span> <span m='4026480'>because</span> <span
  m='4026750'>they're</span> <span m='4026890'>all</span> <span
  m='4027050'>positive</span> <span m='4027380'>probabilities.</span> <span
  m='4029360'>On</span> <span m='4029490'>the</span> <span
  m='4029600'>other</span> <span m='4029870'>hand,</span> <span
  m='4030410'>if</span> <span m='4030430'>you</span> <span
  m='4030520'>take</span> <span m='4031050'>instead,</span> <span
  m='4034150'>say,</span> <span m='4034270'>1/3</span> <span
  m='4034940'>and</span> <span m='4035120'>0,</span> <span
  m='4038060'>now</span> <span m='4038330'>you</span> <span
  m='4038490'>take</span> <span m='4038760'>your A</span> <span
  m='4039000'>to</span> <span m='4039090'>be</span> <span m='4039250'>3.</span>
  <span m='4042850'>Then</span> <span m='4043020'>you</span> <span
  m='4043090'>have</span> <span m='4044390'>1/3</span> <span
  m='4045604'>equal</span> <span m='4046088'>to 0.</span> </p><p><span
  m='4048610'>This</span> <span m='4048850'>means,</span> <span
  m='4049690'>according</span> <span m='4050090'>to</span> <span
  m='4050210'>probability</span> <span m='4051190'>distribution</span> <span
  m='4051930'>P,</span> <span m='4053160'>there</span> <span
  m='4053450'>is</span> <span m='4053530'>some</span> <span
  m='4053690'>probability</span> <span m='4054200'>that</span> <span
  m='4054370'>you'll</span> <span m='4055530'>get</span> <span
  m='4055850'>3.</span> <span m='4057320'>But</span> <span
  m='4057450'>according</span> <span m='4057760'>to</span> <span
  m='4057860'>probability</span> <span m='4058520'>distribution</span> <span
  m='4059190'>P</span> <span m='4059490'>tilde,</span> <span
  m='4059990'>you</span> <span m='4060110'>don't</span> <span
  m='4060330'>have</span> <span m='4060480'>any</span> <span
  m='4060620'>probability</span> <span m='4061300'>of</span> <span
  m='4061450'>getting</span> <span m='4061680'>3.</span> <span
  m='4063970'>So</span> <span m='4064090'>they're</span> <span
  m='4064270'>not</span> <span m='4064490'>equivalent</span> <span
  m='4064970'>in</span> <span m='4065040'>this</span> <span
  m='4065250'>case.</span> </p><p><span m='4067620'>If you</span> <span
  m='4067880'>think</span> <span m='4068110'>about</span> <span
  m='4068320'>it,</span> <span m='4068580'>then</span> <span
  m='4068760'>it's</span> <span m='4068900'>really</span> <span
  m='4069180'>clear.</span> <span m='4069840'>The</span> <span
  m='4069980'>theorem</span> <span m='4070380'>says--</span> <span
  m='4070990'>this</span> <span m='4071160'>is</span> <span m='4071240'>a</span>
  <span m='4071300'>very</span> <span m='4071660'>important</span> <span
  m='4072110'>theorem</span> <span m='4072360'>in</span> <span
  m='4072580'>analysis,</span> <span m='4073190'>actually.</span> <span
  m='4077875'>The</span> <span m='4078340'>theorem--</span> <span
  m='4080464'>there</span> <span m='4080870'>exists</span> <span
  m='4081160'>a</span> <span m='4081340'>Z</span> <span m='4082622'>such</span>
  <span m='4083100'>that</span> <span m='4086070'>P</span> <span
  m='4086550'>of</span> <span m='4087520'>omega</span> <span
  m='4088005'>is</span> <span m='4088490'>equal to</span> <span
  m='4092380'>if</span> <span m='4092550'>and only</span> <span
  m='4092900'>if</span> <span m='4095100'>P and</span> <span
  m='4095370'>P</span> <span m='4095645'>tilde</span> <span m='4096149'>are
  equivalent.</span> <span m='4102510'>You</span> <span m='4102630'>can</span>
  <span m='4102779'>change</span> <span m='4103090'>from</span> <span
  m='4103649'>one</span> <span m='4103899'>probability</span> <span
  m='4104460'>measure</span> <span m='4104750'>to</span> <span
  m='4104859'>another</span> <span m='4105109'>probability</span> <span
  m='4106020'>measure</span> <span m='4106790'>just</span> <span
  m='4107029'>in</span> <span m='4107130'>terms</span> <span
  m='4107399'>of</span> <span m='4107479'>multiplication,</span> <span
  m='4109660'>if</span> <span m='4109840'>and</span> <span
  m='4109939'>only</span> <span m='4110330'>if</span> <span
  m='4110550'>they're</span> <span m='4110710'>equivalent.</span> </p><p><span
  m='4112529'>And</span> <span m='4112670'>you</span> <span
  m='4112729'>can</span> <span m='4112859'>see</span> <span
  m='4113040'>that</span> <span m='4113200'>it's</span> <span
  m='4113350'>not</span> <span m='4113540'>the</span> <span
  m='4113620'>case</span> <span m='4113899'>for</span> <span
  m='4114020'>this</span> <span m='4114189'>when</span> <span
  m='4114319'>they're</span> <span m='4114420'>not</span> <span
  m='4114640'>equivalent.</span> <span m='4115160'>You</span> <span
  m='4115270'>can't</span> <span m='4115510'>make</span> <span
  m='4115720'>a</span> <span m='4115779'>zero</span> <span
  m='4116080'>probability</span> <span m='4116760'>to</span> <span
  m='4116890'>1/3</span> <span m='4117260'>probability</span> <span
  m='4117740'>by</span> <span m='4118220'>multiplication.</span> <span
  m='4120000'>So</span> <span m='4120399'>in</span> <span m='4120540'>the</span>
  <span m='4120630'>finite</span> <span m='4121010'>world</span> <span
  m='4121390'>this</span> <span m='4121580'>is</span> <span
  m='4121729'>very</span> <span m='4122500'>just</span> <span
  m='4122729'>intuitive</span> <span m='4123200'>theorem,</span> <span
  m='4124510'>but</span> <span m='4125490'>what</span> <span m='4125740'>this
  is</span> <span m='4125899'>saying</span> <span m='4126170'>is</span> <span
  m='4126942'>it's</span> <span m='4127330'>true</span> <span
  m='4127510'>for</span> <span m='4127689'>all</span> <span
  m='4127939'>probability</span> <span m='4128490'>spaces.</span> <span
  m='4131040'>And</span> <span m='4131240'>these</span> <span
  m='4131490'>are</span> <span m='4131510'>called</span> <span
  m='4131770'>the</span> <span m='4131859'>Radon-Nikodym</span> <span
  m='4132580'>derivative.</span> </p><p><span m='4141930'>Our</span> <span
  m='4142080'>question</span> <span m='4142529'>is,</span> <span
  m='4143380'>are</span> <span m='4143640'>these</span> <span
  m='4143939'>two</span> <span m='4144109'>Brownian</span> <span
  m='4144420'>motions</span> <span m='4144970'>equivalent?</span> <span
  m='4146990'>The</span> <span m='4147120'>passes</span> <span
  m='4147830'>that</span> <span m='4148229'>this</span> <span
  m='4148529'>Brownian</span> <span m='4148850'>motion</span> <span
  m='4149120'>without</span> <span m='4149580'>drift</span> <span
  m='4149915'>takes</span> <span m='4150729'>and</span> <span
  m='4150830'>the</span> <span m='4150899'>Brownian</span> <span
  m='4151279'>motion</span> <span m='4151750'>with</span> <span
  m='4151970'>drift</span> <span m='4152330'>takes--</span> <span
  m='4153760'>are</span> <span m='4153979'>they</span> <span
  m='4154229'>kind</span> <span m='4154680'>of</span> <span
  m='4154770'>the</span> <span m='4154880'>same</span> <span
  m='4155250'>but</span> <span m='4155439'>just</span> <span
  m='4156010'>skewed</span> <span m='4156529'>in</span> <span
  m='4156890'>distribution,</span> <span m='4157970'>or</span> <span
  m='4158130'>are</span> <span m='4158300'>they</span> <span
  m='4158490'>really</span> <span m='4158890'>fundamentally</span> <span
  m='4159590'>different?</span> <span m='4160562'>That's</span> <span
  m='4161050'>the question.</span> </p><p><span m='4168859'>And</span> <span
  m='4169210'>what</span> <span m='4169390'>Girsanov's</span> <span
  m='4169810'>theorem</span> <span m='4170330'>says</span> <span
  m='4170740'>is</span> <span m='4170870'>that</span> <span
  m='4171080'>they</span> <span m='4171229'>are</span> <span
  m='4171399'>equivalent.</span> <span m='4173479'>To</span> <span
  m='4173620'>me, it</span> <span m='4173910'>came</span> <span
  m='4174240'>as</span> <span m='4174500'>a</span> <span
  m='4174529'>little</span> <span m='4174770'>bit</span> <span
  m='4174970'>non</span> <span m='4175180'>intuitive.</span> <span
  m='4176089'>I</span> <span m='4176490'>would</span> <span
  m='4176609'>imagine</span> <span m='4176990'>that</span> <span
  m='4177149'>it's</span> <span m='4177310'>not</span> <span
  m='4177510'>equivalent,</span> <span m='4177820'>these</span> <span
  m='4178130'>two.</span> <span m='4179880'>These</span> <span
  m='4180220'>passes have a</span> <span m='4180710'>very</span> <span
  m='4180979'>natural</span> <span m='4181359'>tendency.</span> <span
  m='4182069'>As</span> <span m='4182260'>it</span> <span
  m='4182359'>goes</span> <span m='4182680'>to</span> <span
  m='4182810'>infinity,</span> <span m='4183560'>these</span> <span
  m='4183810'>passes and</span> <span m='4184210'>these</span> <span
  m='4184430'>passes</span> <span m='4184870'>will really</span> <span
  m='4185160'>look</span> <span m='4185330'>a</span> <span
  m='4185390'>lot</span> <span m='4185630'>different,</span> <span
  m='4187779'>because</span> <span m='4188020'>when</span> <span
  m='4188149'>you</span> <span m='4188220'>go</span> <span
  m='4188410'>really,</span> <span m='4188729'>really</span> <span
  m='4189069'>far,</span> <span m='4191000'>the</span> <span
  m='4191120'>passes</span> <span m='4191630'>which</span> <span
  m='4191840'>have</span> <span m='4192069'>drift</span> <span
  m='4192620'>will</span> <span m='4192790'>be</span> <span
  m='4193000'>just</span> <span m='4193710'>really</span> <span
  m='4193939'>close to your</span> <span m='4194420'>line</span> <span
  m='4194760'>mu of</span> <span m='4195200'>t,</span> <span
  m='4196090'>while</span> <span m='4197120'>the</span> <span
  m='4197320'>passes</span> <span m='4197710'>which</span> <span
  m='4197870'>don't</span> <span m='4198080'>have</span> <span
  m='4198260'>drift</span> <span m='4198540'>will</span> <span
  m='4198780'>be</span> <span m='4198910'>really</span> <span
  m='4199150'>close</span> <span m='4199440'>to</span> <span m='4199550'>the
  x</span> <span m='4199870'>axis.</span> </p><p><span m='4202900'>But</span>
  <span m='4203030'>still,</span> <span m='4204620'>they</span> <span
  m='4204780'>are</span> <span m='4204940'>equivalent.</span> <span
  m='4206070'>You</span> <span m='4206170'>can</span> <span
  m='4206330'>change</span> <span m='4206630'>from</span> <span
  m='4206810'>one</span> <span m='4207000'>to</span> <span
  m='4207120'>another.</span> <span m='4209590'>I'll</span> <span
  m='4209680'>just</span> <span m='4210130'>state</span> <span
  m='4210440'>that</span> <span m='4210650'>theorem</span> <span
  m='4212090'>without</span> <span m='4212450'>proof.</span> <span
  m='4213840'>And</span> <span m='4214090'>this</span> <span
  m='4214650'>will</span> <span m='4214850'>also</span> <span
  m='4215180'>be</span> <span m='4215390'>used</span> <span
  m='4216150'>in</span> <span m='4216350'>pricing</span> <span
  m='4217050'>theory.</span> </p><p><span m='4220930'>I'm</span> <span
  m='4221060'>not</span> <span m='4221250'>an</span> <span
  m='4221310'>expert</span> <span m='4221710'>enough</span> <span
  m='4221970'>to</span> <span m='4222140'>tell</span> <span
  m='4222380'>why,</span> <span m='4223270'>but</span> <span
  m='4223480'>basically</span> <span m='4223940'>what</span> <span
  m='4224100'>it's</span> <span m='4224240'>saying</span> <span
  m='4224520'>is,</span> <span m='4225140'>you</span> <span
  m='4225280'>switch</span> <span m='4225680'>some</span> <span
  m='4225980'>stochastic</span> <span m='4226560'>process</span> <span
  m='4228580'>into</span> <span m='4229000'>a</span> <span
  m='4229060'>stochastic</span> <span m='4229540'>process</span> <span
  m='4229930'>without</span> <span m='4230330'>drift,</span> <span
  m='4231000'>thus</span> <span m='4231260'>making</span> <span
  m='4231620'>it</span> <span m='4231700'>into</span> <span m='4231930'>a</span>
  <span m='4231980'>martingale.</span> <span m='4233610'>And</span> <span
  m='4233740'>martingale</span> <span m='4234290'>has</span> <span
  m='4234450'>a</span> <span m='4234500'>lot</span> <span m='4234720'>of</span>
  <span m='4234840'>meaning</span> <span m='4235200'>in</span> <span
  m='4235320'>pricing</span> <span m='4235690'>theory,</span> <span
  m='4236180'>as</span> <span m='4236350'>you'll</span> <span
  m='4236550'>see.</span> <span m='4238310'>This</span> <span
  m='4238550'>also</span> <span m='4238960'>application</span> <span
  m='4239440'>for it.</span> <span m='4239920'>That's why I'm</span> <span
  m='4240850'>trying</span> <span m='4241000'>to</span> <span
  m='4241100'>cover</span> <span m='4241390'>it,</span> <span
  m='4241510'>although</span> <span m='4241840'>it's</span> <span
  m='4242030'>quite</span> <span m='4242250'>a</span> <span
  m='4242310'>technical</span> <span m='4242830'>theorem.</span> <span
  m='4244300'>Try</span> <span m='4244520'>to</span> <span
  m='4244600'>remember,</span> <span m='4245100'>at</span> <span
  m='4245200'>least</span> <span m='4245340'>a</span> <span
  m='4245410'>statement</span> <span m='4246230'>and</span> <span
  m='4246610'>the</span> <span m='4246710'>spirit</span> <span
  m='4246985'>of</span> <span m='4247260'>what</span> <span
  m='4247400'>it</span> <span m='4247510'>means.</span> <span
  m='4248700'>It</span> <span m='4248820'>just</span> <span
  m='4249080'>means</span> <span m='4249910'>these</span> <span
  m='4250070'>two</span> <span m='4250190'>are</span> <span
  m='4250250'>equivalent,</span> <span m='4250690'>you</span> <span
  m='4250800'>can change</span> <span m='4251210'>from</span> <span
  m='4251410'>one</span> <span m='4251590'>to</span> <span
  m='4251700'>another</span> <span m='4252370'>by</span> <span
  m='4252660'>a</span> <span m='4252720'>multiplicative</span> <span
  m='4253500'>function.</span> <span m='4268390'>Let me</span> <span
  m='4268650'>just</span> <span m='4268850'>state it in</span> <span
  m='4269310'>a simple</span> <span m='4269580'>form.</span> </p><p><span
  m='4273091'>GUEST SPEAKER: If I</span> <span m='4273554'>could just</span>
  <span m='4274017'>interject a</span> <span m='4274480'>comment.</span>
  </p><p><span m='4274740'>PROFESSOR: Sure.</span> </p><p><span
  m='4274960'>GUEST SPEAKER: With</span> <span m='4276380'>these</span> <span
  m='4277890'>changes</span> <span m='4278230'>of</span> <span
  m='4278330'>measure,</span> <span m='4279830'>it</span> <span
  m='4280280'>turns</span> <span m='4280560'>out</span> <span
  m='4280800'>that</span> <span m='4281900'>all</span> <span
  m='4282110'>of</span> <span m='4282210'>these</span> <span
  m='4282480'>theories</span> <span m='4283590'>with</span> <span
  m='4283780'>continuous</span> <span m='4284280'>time</span> <span
  m='4284620'>processes</span> <span m='4285870'>should</span> <span
  m='4286060'>have</span> <span m='4286200'>an</span> <span
  m='4286290'>interpretation</span> <span m='4287150'>if</span> <span
  m='4287280'>you've</span> <span m='4287530'>discretized</span> <span
  m='4288310'>time,</span> <span m='4289450'>and</span> <span
  m='4289920'>should</span> <span m='4290090'>consider</span> <span
  m='4290720'>sort</span> <span m='4290880'>of</span> <span m='4290950'>a</span>
  <span m='4291020'>finer</span> <span m='4291420'>and</span> <span
  m='4291540'>finer</span> <span m='4291860'>discretization</span> <span
  m='4292630'>of</span> <span m='4292730'>the</span> <span
  m='4292820'>process.</span> <span m='4294140'>And</span> <span
  m='4295860'>with</span> <span m='4296000'>this</span> <span
  m='4296280'>change</span> <span m='4296630'>of</span> <span
  m='4296760'>measure,</span> <span m='4298720'>if</span> <span
  m='4298910'>you</span> <span m='4299050'>consider</span> <span
  m='4300040'>problems</span> <span m='4300680'>in</span> <span
  m='4301030'>discrete</span> <span m='4302100'>stochastic</span> <span
  m='4302670'>processes</span> <span m='4303300'>like</span> <span
  m='4304510'>random</span> <span m='4304910'>walks,</span> <span
  m='4305840'>basically</span> <span m='4306220'>how--</span> <span
  m='4307490'>say</span> <span m='4307960'>if</span> <span
  m='4308090'>you're</span> <span m='4308290'>gambling</span> <span
  m='4309110'>against</span> <span m='4311490'>a</span> <span
  m='4311580'>casino</span> <span m='4312160'>or</span> <span
  m='4312320'>against</span> <span m='4312630'>another</span> <span
  m='4312850'>player,</span> <span m='4313450'>and</span> <span
  m='4314340'>you</span> <span m='4314510'>look</span> <span
  m='4314720'>at</span> <span m='4314780'>how</span> <span
  m='4314980'>your</span> <span m='4315230'>winnings</span> <span
  m='4315910'>evolve</span> <span m='4316860'>as</span> <span
  m='4317010'>a</span> <span m='4317120'>random</span> <span
  m='4317420'>walk,</span> <span m='4318200'>depending</span> <span
  m='4318580'>on</span> <span m='4318690'>your</span> <span
  m='4318820'>odds,</span> <span m='4319250'>your</span> <span
  m='4319350'>odds</span> <span m='4319780'>could</span> <span
  m='4320210'>be</span> <span m='4320500'>that</span> <span
  m='4321040'>you</span> <span m='4321170'>will</span> <span
  m='4321310'>tend</span> <span m='4321600'>to</span> <span
  m='4321700'>lose.</span> <span m='4323340'>So</span> <span
  m='4323510'>there's</span> <span m='4323710'>basically</span> <span
  m='4324120'>a</span> <span m='4324270'>drift</span> <span
  m='4324900'>in</span> <span m='4325070'>your</span> <span
  m='4325910'>wealth</span> <span m='4326740'>as</span> <span
  m='4327040'>this</span> <span m='4327250'>random</span> <span
  m='4327560'>process</span> <span m='4328030'>evolves.</span> <span
  m='4328940'>You</span> <span m='4329110'>can</span> <span
  m='4329260'>transform</span> <span m='4330200'>that</span> <span
  m='4330570'>process,</span> <span m='4334170'>basically</span> <span
  m='4334660'>by</span> <span m='4334880'>taking</span> <span
  m='4335350'>out</span> <span m='4335820'>your</span> <span
  m='4336040'>expected</span> <span m='4336620'>losses,</span> <span
  m='4337650'>to</span> <span m='4338020'>a</span> <span
  m='4338100'>process</span> <span m='4338680'>which</span> <span
  m='4339560'>has</span> <span m='4340200'>zero</span> <span
  m='4341230'>change</span> <span m='4341590'>in</span> <span
  m='4341670'>expectation.</span> </p><p><span m='4342830'>And</span> <span
  m='4343010'>so</span> <span m='4343260'>you</span> <span
  m='4343430'>can</span> <span m='4343620'>convert</span> <span
  m='4344810'>these</span> <span m='4345680'>gambling</span> <span
  m='4346310'>problems</span> <span m='4346840'>where</span> <span
  m='4347120'>there's</span> <span m='4347400'>drift</span> <span
  m='4347930'>to</span> <span m='4348910'>a</span> <span
  m='4349330'>version</span> <span m='4350800'>where</span> <span
  m='4350930'>the</span> <span m='4351050'>process,</span> <span
  m='4351690'>essentially,</span> <span m='4352020'>has</span> <span
  m='4352250'>no</span> <span m='4352480'>drift</span> <span
  m='4352920'>and</span> <span m='4353140'>is a</span> <span
  m='4353280'>martingale.</span> <span m='4354460'>And</span> <span
  m='4354670'>the</span> <span m='4354750'>martingale</span> <span
  m='4355240'>theory</span> <span m='4355515'>in</span> <span
  m='4355790'>stochastic</span> <span m='4356350'>process</span> <span
  m='4356840'>courses</span> <span m='4357240'>is</span> <span
  m='4357610'>very,</span> <span m='4357930'>very</span> <span
  m='4358050'>powerful.</span> <span m='4358560'>There's</span> <span
  m='4358700'>martingale</span> <span m='4359120'>convergence</span> <span
  m='4359740'>theorems.</span> <span m='4361090'>So</span> <span
  m='4361420'>you</span> <span m='4361610'>know</span> <span
  m='4362050'>that</span> <span m='4362530'>the</span> <span
  m='4362650'>limit</span> <span m='4362970'>of</span> <span
  m='4363130'>the</span> <span m='4363410'>martingale</span> <span
  m='4364180'>is--</span> <span m='4366230'>there's</span> <span
  m='4366720'>a</span> <span m='4366960'>convergence</span> <span
  m='4367460'>of</span> <span m='4367540'>the</span> <span
  m='4367630'>process,</span> <span m='4368750'>and</span> <span
  m='4368910'>that</span> <span m='4369200'>applies</span> <span
  m='4369750'>here</span> <span m='4370030'>as</span> <span
  m='4370130'>well.</span> </p><p><span m='4375180'>PROFESSOR: You</span> <span
  m='4375350'>will</span> <span m='4375470'>see</span> <span
  m='4375650'>some</span> <span m='4375820'>surprising</span> <span
  m='4376290'>applications.</span> </p><p><span m='4377234'>GUEST SPEAKER:
  Yeah.</span> </p><p><span m='4379594'>PROFESSOR: And</span> <span
  m='4380670'>try</span> <span m='4380880'>to at</span> <span
  m='4380950'>least</span> <span m='4382160'>digest</span> <span
  m='4382960'>the</span> <span m='4383190'>statement.</span> <span
  m='4388540'>When</span> <span m='4388680'>the</span> <span
  m='4388930'>guest</span> <span m='4389170'>speaker</span> <span
  m='4389480'>comes</span> <span m='4389750'>and</span> <span
  m='4389870'>says</span> <span m='4390250'>by Girsanov's</span> <span
  m='4390890'>theorem,</span> <span m='4392340'>they actually</span> <span
  m='4392960'>know</span> <span m='4393220'>what</span> <span m='4393400'>it
  is.</span> <span m='4395660'>There's a</span> <span m='4395940'>spirit.</span>
  </p><p><span m='4400190'>This is</span> <span m='4400520'>a</span> <span
  m='4400580'>very</span> <span m='4400860'>simple</span> <span
  m='4401200'>version.</span> <span m='4401880'>There's</span> <span
  m='4402270'>a lot of</span> <span m='4402540'>complicated</span> <span
  m='4403110'>versions,</span> <span m='4403290'>but</span> <span
  m='4403750'>let me</span> <span m='4404210'>just</span> <span m='4404400'>do
  it.</span> <span m='4410570'>So</span> <span m='4410800'>P</span> <span
  m='4411980'>is</span> <span m='4412140'>a</span> <span
  m='4412200'>probability</span> <span m='4412820'>distribution</span> <span
  m='4417680'>over</span> <span m='4418850'>passes</span> <span
  m='4420025'>from</span> <span m='4420410'>0,</span> <span m='4420745'>T</span>
  <span m='4421080'>to</span> <span m='4421290'>infinity.</span> <span
  m='4421900'>What</span> <span m='4422040'>this</span> <span
  m='4422220'>means</span> <span m='4422470'>is</span> <span
  m='4422630'>just</span> <span m='4423320'>passes</span> <span
  m='4425770'>from</span> <span m='4426670'>that</span> <span
  m='4427770'>stochastic</span> <span m='4428290'>process</span> <span
  m='4428860'>defined</span> <span m='4429390'>from</span> <span
  m='4429660'>time</span> <span m='4429980'>0</span> <span m='4430080'>to</span>
  <span m='4430430'>time</span> <span m='4430760'>t.</span> <span
  m='4432770'>These</span> <span m='4433110'>are</span> <span
  m='4433220'>passes</span> <span m='4436560'>defined</span> <span
  m='4437100'>by</span> <span m='4439590'>a</span> <span
  m='4439650'>Brownian</span> <span m='4440080'>motion</span> <span
  m='4444900'>with</span> <span m='4445080'>drift</span> <span
  m='4448260'>mu.</span> </p><p><span m='4450790'>And</span> <span
  m='4451080'>then</span> <span m='4451330'>P</span> <span
  m='4451500'>tilde</span> <span m='4452530'>is</span> <span
  m='4452820'>a</span> <span m='4452890'>probability</span> <span
  m='4453330'>distribution</span> <span m='4454080'>defined</span> <span
  m='4454590'>by</span> <span m='4455150'>Brownian</span> <span
  m='4455540'>motion</span> <span m='4455950'>without</span> <span
  m='4456340'>drift.</span> <span m='4462600'>Then</span> <span
  m='4464060'>P</span> <span m='4464690'>and</span> <span m='4465010'>P
  tilde</span> <span m='4465440'>are</span> <span m='4465790'>equivalent.</span>
  <span m='4467680'>Not</span> <span m='4467850'>only</span> <span
  m='4468080'>are</span> <span m='4468200'>they</span> <span
  m='4468370'>equivalent,</span> <span m='4468670'>we</span> <span
  m='4468970'>can</span> <span m='4469080'>actually</span> <span
  m='4469320'>compute</span> <span m='4470280'>their</span> <span
  m='4470490'>Radon-Nikodym</span> <span m='4471250'>derivative.</span> <span
  m='4476184'>And</span> <span m='4479600'>the</span> <span
  m='4479700'>Radon-Nikodym</span> <span m='4480350'>derivative</span> <span
  m='4482450'>Z</span> <span m='4484378'>which is</span> <span
  m='4484790'>defined</span> <span m='4485330'>as</span> <span
  m='4485940'>T</span> <span m='4486290'>of--</span> <span
  m='4487200'>which</span> <span m='4487430'>we</span> <span
  m='4487640'>denote</span> <span m='4487900'>like</span> <span
  m='4488140'>this</span> <span m='4490100'>has this</span> <span
  m='4490590'>nice</span> <span m='4490860'>form.</span> </p><p><span
  m='4505920'>That's a</span> <span m='4506090'>nice</span> <span
  m='4506400'>closed</span> <span m='4506710'>form.</span> <span
  m='4508150'>Let</span> <span m='4508260'>me</span> <span
  m='4508360'>just</span> <span m='4508820'>tell</span> <span
  m='4509090'>you</span> <span m='4509210'>a</span> <span m='4509230'>few</span>
  <span m='4512050'>implications</span> <span m='4512495'>of</span> <span
  m='4512940'>this.</span> <span m='4531490'>Now,</span> <span
  m='4533110'>assume</span> <span m='4533520'>you</span> <span
  m='4533630'>have</span> <span m='4533880'>some,</span> <span
  m='4535020'>let's</span> <span m='4535240'>say,</span> <span
  m='4535360'>value</span> <span m='4535790'>of</span> <span
  m='4535880'>your</span> <span m='4536000'>portfolio</span> <span
  m='4536630'>over</span> <span m='4536830'>time.</span> <span
  m='4537430'>That's</span> <span m='4537540'>the</span> <span
  m='4537670'>stochastic</span> <span m='4538050'>process.</span> <span
  m='4540230'>And</span> <span m='4540630'>you</span> <span m='4540730'>measure
  it</span> <span m='4541160'>according</span> <span m='4541510'>to</span> <span
  m='4541670'>this</span> <span m='4541920'>probability</span> <span
  m='4542410'>distribution.</span> </p><p><span m='4544090'>Let's say it</span>
  <span m='4544520'>depends</span> <span m='4544920'>on</span> <span
  m='4545040'>some</span> <span m='4545180'>stock</span> <span
  m='4545520'>price</span> <span m='4545930'>as</span> <span
  m='4546070'>the</span> <span m='4546200'>stock</span> <span
  m='4546550'>price</span> <span m='4546930'>is</span> <span
  m='4546990'>modeled</span> <span m='4547360'>using</span> <span
  m='4547620'>a</span> <span m='4547690'>Brownian</span> <span
  m='4547970'>motion</span> <span m='4548260'>with drift.</span> <span
  m='4551140'>What</span> <span m='4551490'>this</span> <span
  m='4551710'>is</span> <span m='4551840'>saying</span> <span
  m='4552160'>is,</span> <span m='4552330'>now,</span> <span
  m='4553150'>instead</span> <span m='4553500'>of</span> <span
  m='4553610'>computing</span> <span m='4554130'>this</span> <span
  m='4555240'>expectation</span> <span m='4556150'>in</span> <span
  m='4556320'>your</span> <span m='4556490'>probability</span> <span
  m='4557110'>space--</span> <span m='4557920'>so</span> <span
  m='4558000'>this</span> <span m='4558270'>is</span> <span
  m='4558430'>defined</span> <span m='4559430'>over</span> <span
  m='4559650'>the</span> <span m='4559770'>probability</span> <span
  m='4560380'>space</span> <span m='4560970'>P,</span> <span
  m='4563140'>our</span> <span m='4563390'>sigma</span> <span
  m='4564562'>[INAUDIBLE]</span> <span m='4564950'>P</span> <span
  m='4565590'>defined</span> <span m='4565910'>by</span> <span
  m='4566000'>this</span> <span m='4566230'>probability</span> <span
  m='4566510'>distribution.</span> <span m='4567610'>You</span> <span
  m='4567720'>can</span> <span m='4567860'>instead</span> <span
  m='4569160'>compute</span> <span m='4569560'>it</span> <span
  m='4570470'>in--</span> <span m='4585640'>you</span> <span
  m='4585730'>can</span> <span m='4585850'>compute</span> <span
  m='4586250'>as</span> <span m='4586460'>expectation</span> <span
  m='4587170'>in</span> <span m='4587270'>a</span> <span
  m='4587330'>different</span> <span m='4587660'>probability</span> <span
  m='4588250'>space.</span> </p><p><span m='4595080'>You</span> <span
  m='4595180'>transform</span> <span m='4595710'>the</span> <span
  m='4595830'>problems</span> <span m='4596520'>about</span> <span
  m='4597260'>Brownian</span> <span m='4597400'>motion</span> <span
  m='4597790'>with</span> <span m='4597990'>drift</span> <span
  m='4598430'>into</span> <span m='4598670'>a</span> <span
  m='4598740'>problem</span> <span m='4599150'>about</span> <span
  m='4599330'>Brownian</span> <span m='4599480'>motion</span> <span
  m='4599870'>without</span> <span m='4600250'>a drift.</span> <span
  m='4601460'>And</span> <span m='4601580'>the</span> <span
  m='4601650'>reason</span> <span m='4601840'>I have</span> <span m='4602070'>Z
  tilde</span> <span m='4602490'>instead</span> <span m='4602790'>of</span>
  <span m='4602940'>Z</span> <span m='4603170'>here</span> <span
  m='4603480'>is</span> <span m='4603920'>because</span> <span
  m='4604200'>I</span> <span m='4604270'>flipped.</span> <span
  m='4605230'>What</span> <span m='4605380'>you</span> <span
  m='4605480'>really</span> <span m='4605870'>should have</span> <span
  m='4606050'>is Z</span> <span m='4606470'>tilde</span> <span
  m='4606890'>here</span> <span m='4609068'>as expectation</span> <span
  m='4610052'>of</span> <span m='4611036'>Z.</span> <span m='4614480'>If</span>
  <span m='4614660'>you</span> <span m='4614730'>want to use</span> <span
  m='4615185'>this Z.</span> </p><p><span m='4619380'>I</span> <span
  m='4619450'>don't</span> <span m='4619600'>expect</span> <span
  m='4619910'>you</span> <span m='4619990'>to</span> <span
  m='4620120'>really</span> <span m='4621280'>be</span> <span
  m='4621450'>able</span> <span m='4621640'>to</span> <span
  m='4622420'>do</span> <span m='4622570'>computations</span> <span
  m='4623350'>and</span> <span m='4623510'>do</span> <span
  m='4623660'>that</span> <span m='4623990'>just</span> <span
  m='4624310'>by</span> <span m='4624580'>looking</span> <span
  m='4624880'>at</span> <span m='4625000'>this</span> <span m='4625100'>theorem
  once.</span> <span m='4626650'>Just</span> <span m='4626960'>really</span>
  <span m='4627140'>trying</span> <span m='4627320'>to</span> <span
  m='4627370'>digest</span> <span m='4627790'>what</span> <span
  m='4627900'>it</span> <span m='4628000'>means</span> <span
  m='4629384'>and</span> <span m='4630650'>understand</span> <span
  m='4631200'>the</span> <span m='4631280'>flavor</span> <span
  m='4631710'>of</span> <span m='4631810'>it,</span> <span
  m='4632020'>that</span> <span m='4632170'>you</span> <span
  m='4632270'>can</span> <span m='4632410'>transform</span> <span
  m='4633050'>problems</span> <span m='4633490'>in</span> <span
  m='4633620'>one</span> <span m='4633800'>probability</span> <span
  m='4634320'>space</span> <span m='4634650'>to</span> <span
  m='4634750'>another</span> <span m='4634950'>probability</span> <span
  m='4635550'>space.</span> <span m='4636990'>And</span> <span
  m='4637200'>you</span> <span m='4637270'>can</span> <span
  m='4637370'>actually</span> <span m='4637650'>do</span> <span
  m='4637830'>that</span> <span m='4638150'>when</span> <span
  m='4638330'>the</span> <span m='4638450'>two</span> <span
  m='4638830'>distributions</span> <span m='4639350'>are</span> <span
  m='4639460'>defined</span> <span m='4639860'>by</span> <span
  m='4640010'>Brownian</span> <span m='4640240'>motions</span> <span
  m='4641340'>when</span> <span m='4641550'>one</span> <span
  m='4641790'>has</span> <span m='4642100'>drift and</span> <span
  m='4642480'>one</span> <span m='4642700'>doesn't</span> <span m='4643060'>have
  a drift.</span> <span m='4645000'>How</span> <span m='4645220'>we're</span>
  <span m='4645350'>going</span> <span m='4645480'>to</span> <span
  m='4645530'>use</span> <span m='4645760'>it</span> <span m='4645890'>is</span>
  <span m='4647530'>we're</span> <span m='4647700'>going</span> <span
  m='4647830'>to</span> <span m='4648090'>transform</span> <span
  m='4648590'>a</span> <span m='4648630'>non</span> <span
  m='4648870'>martingale</span> <span m='4649360'>process</span> <span
  m='4649820'>into a</span> <span m='4650090'>martingale</span> <span
  m='4650590'>process.</span> <span m='4655320'>When</span> <span
  m='4655470'>you</span> <span m='4655570'>change</span> <span
  m='4655830'>into</span> <span m='4656060'>martingale</span> <span
  m='4656660'>it</span> <span m='4656730'>has</span> <span
  m='4657010'>very</span> <span m='4657290'>good</span> <span
  m='4658270'>physical</span> <span m='4658780'>meanings</span> <span
  m='4659170'>to it.</span> </p><p><span m='4663450'>That's</span> <span
  m='4663660'>it</span> <span m='4663790'>for</span> <span
  m='4663920'>today.</span> <span m='4664680'>And</span> <span
  m='4665050'>you</span> <span m='4665180'>only</span> <span
  m='4665310'>have</span> <span m='4665480'>one</span> <span
  m='4665680'>more</span> <span m='4665870'>mass</span> <span
  m='4666170'>lecture</span> <span m='4666500'>remaining</span> <span
  m='4668030'>and</span> <span m='4669210'>maybe</span> <span
  m='4669520'>one</span> <span m='4669880'>or</span> <span
  m='4669980'>two</span> <span m='4670200'>homeworks</span> <span
  m='4670750'>but</span> <span m='4670940'>if</span> <span
  m='4671060'>you</span> <span m='4671120'>have</span> <span
  m='4671260'>two,</span> <span m='4671580'>the</span> <span
  m='4671690'>second</span> <span m='4671980'>one</span> <span
  m='4672130'>won't</span> <span m='4672310'>be</span> <span
  m='4672470'>that</span> <span m='4672670'>long.</span> <span
  m='4674950'>And</span> <span m='4675130'>you'll have</span> <span
  m='4675290'>a</span> <span m='4675430'>lot</span> <span m='4675600'>of</span>
  <span m='4675700'>guest</span> <span m='4675940'>lectures,</span> <span
  m='4676490'>exciting</span> <span m='4677050'>guest</span> <span
  m='4677340'>lectures,</span> <span m='4677610'>so</span> <span
  m='4678840'>try</span> <span m='4679140'>not to miss</span> <span
  m='4679440'>them.</span> </p>
embedded_media:
  - uid: 9b195cb7107ed62372d07f2a81495126
    parent_uid: a51f4e333e8242e4d6a56ed8f2478774
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: Z5yRMMVUC5w
  - uid: 7b8256e5f6218175c2c874626d0c5413
    parent_uid: a51f4e333e8242e4d6a56ed8f2478774
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/Z5yRMMVUC5w/default.jpg'
  - uid: 06540422868c089b610e1344fb343c7a
    parent_uid: a51f4e333e8242e4d6a56ed8f2478774
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id954073595'
  - uid: e4034a6aa5428e29aef5dda30a430a8e
    parent_uid: a51f4e333e8242e4d6a56ed8f2478774
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18.S096F13/MIT18_S096F13_lec18_300k.mp4'
  - uid: 1095fad0b6be117146f519464dd95519
    parent_uid: a51f4e333e8242e4d6a56ed8f2478774
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: Z5yRMMVUC5w
  - uid: feff96343c136c43dcd4f6fb38eba595
    parent_uid: a51f4e333e8242e4d6a56ed8f2478774
    id: Z5yRMMVUC5w.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-18-ito-calculus/Z5yRMMVUC5w.srt
  - uid: 93ea3f1f17548c6c8933bd5cea2a17e0
    parent_uid: a51f4e333e8242e4d6a56ed8f2478774
    id: Z5yRMMVUC5w.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-18-ito-calculus/Z5yRMMVUC5w.pdf
  - uid: 1373bbd2edb402de802516d7c9f2878c
    parent_uid: a51f4e333e8242e4d6a56ed8f2478774
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 012ab1dbaec4881c87fa5d5ab7f70e35
    parent_uid: a51f4e333e8242e4d6a56ed8f2478774
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
