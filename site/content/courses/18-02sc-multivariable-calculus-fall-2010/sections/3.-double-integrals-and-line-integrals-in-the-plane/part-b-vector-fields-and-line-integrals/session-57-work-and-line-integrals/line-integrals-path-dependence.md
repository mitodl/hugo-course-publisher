---
title: 'Line Integrals: Path Dependence'
uid: f6d451e903f45c2d8db0ab9bcefc2818
parent_uid: 966d4aa4c089ef8644151b6c0f5a967b
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/3.-double-integrals-and-line-integrals-in-the-plane/part-b-vector-fields-and-line-integrals/session-57-work-and-line-integrals/line-integrals-path-dependence
short_url: line-integrals-path-dependence
inline_embed_id: '60675790lineintegrals:pathdependence90777734'
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='7450'>JOEL LEWIS: Hi.</span> <span m='7930'>Welcome</span> <span
  m='8260'>back</span> <span m='8460'>to</span> <span
  m='8570'>recitation.</span> <span m='9560'>In</span> <span
  m='9770'>lecture,</span> <span m='10410'>you've</span> <span
  m='10610'>been</span> <span m='10760'>learning</span> <span
  m='11070'>about</span> <span m='11380'>line</span> <span
  m='11650'>integrals</span> <span m='12090'>of</span> <span
  m='12320'>vector</span> <span m='12550'>fields.</span> <span
  m='13210'>And</span> <span m='13360'>I</span> <span m='13400'>have</span>
  <span m='13510'>a</span> <span m='13570'>couple</span> <span
  m='13920'>of</span> <span m='14070'>nice</span> <span
  m='14350'>questions</span> <span m='14870'>on</span> <span
  m='15040'>that</span> <span m='15540'>subject</span> <span
  m='16050'>for</span> <span m='16200'>you</span> <span m='16430'>right</span>
  <span m='16740'>here.</span> </p><p><span m='17260'>So</span> <span
  m='17810'>I</span> <span m='17940'>want</span> <span m='18430'>F</span> <span
  m='18930'>to</span> <span m='19030'>be</span> <span m='19160'>the</span> <span
  m='19300'>vector</span> <span m='19690'>field</span> <span
  m='20830'>whose</span> <span m='21090'>first</span> <span
  m='21350'>coordinate</span> <span m='21550'>is</span> <span
  m='21750'>x*y</span> <span m='22590'>and</span> <span m='22780'>whose</span>
  <span m='22880'>second</span> <span m='23230'>coordinate</span> <span
  m='23390'>is</span> <span m='23760'>x</span> <span m='23980'>squared</span>
  <span m='24270'>plus</span> <span m='24510'>y</span> <span
  m='24730'>squared.</span> <span m='25120'>And</span> <span m='25510'>so</span>
  <span m='25680'>what</span> <span m='25820'>I'd</span> <span
  m='25920'>like</span> <span m='26120'>you</span> <span m='26210'>do</span>
  <span m='26480'>is</span> <span m='26650'>compute</span> <span
  m='27470'>the</span> <span m='27940'>line</span> <span
  m='28220'>integral</span> <span m='28580'>of</span> <span m='28650'>F</span>
  <span m='29270'>around</span> <span m='29600'>two</span> <span
  m='29780'>different</span> <span m='30100'>curves</span> <span
  m='30440'>C.</span> <span m='31080'>So</span> <span m='31720'>both</span>
  <span m='32030'>curves</span> <span m='32350'>start</span> <span
  m='32820'>at</span> <span m='32930'>the</span> <span m='33010'>point</span>
  <span m='33350'>(1,</span> <span m='33590'>1)</span> <span
  m='34390'>and</span> <span m='34550'>they</span> <span m='34750'>end</span>
  <span m='35110'>at</span> <span m='35210'>the</span> <span
  m='35300'>point</span> <span m='35680'>(2,</span> <span m='35890'>4).</span>
  </p><p><span m='36620'>So</span> <span m='36830'>in</span> <span
  m='36960'>part</span> <span m='37300'>a,</span> <span m='37920'>the</span>
  <span m='38030'>curve</span> <span m='38350'>is</span> <span
  m='38460'>just</span> <span m='38680'>the</span> <span
  m='38730'>straight</span> <span m='39190'>line</span> <span
  m='39395'>that</span> <span m='39600'>connects</span> <span
  m='40130'>the</span> <span m='40210'>point</span> <span m='40550'>(1,</span>
  <span m='40760'>1)</span> <span m='41070'>to</span> <span m='41210'>(2,</span>
  <span m='41370'>4).</span> <span m='42190'>And</span> <span
  m='42460'>in</span> <span m='42500'>part</span> <span m='42980'>b,</span>
  <span m='43690'>the</span> <span m='43810'>curve</span> <span
  m='44550'>is</span> <span m='45050'>this sort</span> <span m='45530'>of</span>
  <span m='45620'>piecewise--</span> <span m='46780'>it's</span> <span
  m='46930'>two</span> <span m='47320'>sides</span> <span m='47670'>of</span>
  <span m='47740'>a</span> <span m='47810'>rectangle,</span> <span
  m='48380'>right?</span> <span m='48580'>It</span> <span m='49320'>goes</span>
  <span m='49470'>straight</span> <span m='49890'>up</span> <span
  m='50540'>until</span> <span m='50840'>it</span> <span m='50920'>gets</span>
  <span m='51170'>to</span> <span m='51260'>the</span> <span
  m='51360'>point</span> <span m='51760'>(1,</span> <span m='52210'>4),</span>
  <span m='52890'>and</span> <span m='53020'>then</span> <span
  m='53110'>it</span> <span m='53170'>goes</span> <span m='53330'>across</span>
  <span m='53870'>to</span> <span m='53980'>the</span> <span
  m='54070'>point</span> <span m='54330'>(2,</span> <span m='54490'>4).</span>
  <span m='54990'>So</span> <span m='55120'>it's</span> <span m='55350'>a</span>
  <span m='56460'>piecewise</span> <span m='56740'>smooth</span> <span
  m='58160'>curve,</span> <span m='58700'>path,</span> <span
  m='59170'>that</span> <span m='60110'>connects</span> <span
  m='60500'>those</span> <span m='60710'>two</span> <span
  m='60850'>points.</span> </p><p><span m='62320'>So</span> <span
  m='62440'>I'd</span> <span m='62520'>like</span> <span m='62670'>you</span>
  <span m='62730'>to</span> <span m='62810'>compute</span> <span
  m='63160'>the</span> <span m='63510'>integral</span> <span
  m='64120'>over</span> <span m='64940'>each</span> <span m='65140'>of</span>
  <span m='65240'>these</span> <span m='65460'>curves</span> <span
  m='65790'>of</span> <span m='65930'>F</span> <span m='66230'>dot</span> <span
  m='66800'>dr.</span> <span m='67200'>So</span> <span m='67330'>why</span>
  <span m='67440'>don't</span> <span m='67530'>you</span> <span
  m='68120'>pause</span> <span m='68305'>the</span> <span
  m='68490'>video,</span> <span m='68830'>have</span> <span m='69050'>a</span>
  <span m='69120'>go</span> <span m='69245'>at</span> <span
  m='69370'>that,</span> <span m='69860'>come</span> <span
  m='70050'>back,</span> <span m='70280'>and</span> <span m='70370'>we</span>
  <span m='70460'>can</span> <span m='70570'>work</span> <span
  m='70750'>it</span> <span m='70820'>out</span> <span
  m='70970'>together.</span> </p><p><span m='79710'>So,</span> <span
  m='80410'>when</span> <span m='80560'>you're</span> <span
  m='80650'>computing</span> <span m='80880'>a</span> <span
  m='81110'>line</span> <span m='81410'>integral</span> <span
  m='81850'>over</span> <span m='82100'>a</span> <span m='82170'>curve,</span>
  <span m='82540'>really</span> <span m='83130'>the</span> <span
  m='83230'>thing</span> <span m='83470'>that</span> <span m='83590'>you</span>
  <span m='83670'>want</span> <span m='83850'>to</span> <span
  m='83910'>do</span> <span m='84100'>is</span> <span m='84230'>you</span> <span
  m='84300'>want to</span> <span m='84460'>parametrize</span> <span
  m='85140'>the</span> <span m='85350'>curve,</span> <span m='85960'>and</span>
  <span m='86130'>then</span> <span m='87110'>that</span> <span
  m='87560'>gives</span> <span m='87790'>you</span> <span m='89090'>stuff</span>
  <span m='89470'>that</span> <span m='89570'>you</span> <span
  m='89660'>can</span> <span m='89820'>plug</span> <span m='90180'>in.</span>
  <span m='90300'>You'll</span> <span m='90450'>have</span> <span
  m='90960'>expressions</span> <span m='91570'>for</span> <span
  m='91690'>x</span> <span m='91960'>and</span> <span m='92090'>y</span> <span
  m='92380'>in</span> <span m='92480'>terms</span> <span m='92770'>of</span>
  <span m='92830'>your</span> <span m='92950'>parameter.</span> <span
  m='93650'>So</span> <span m='93800'>you</span> <span m='93880'>can</span>
  <span m='94040'>plug</span> <span m='94310'>it</span> <span
  m='94390'>in</span> <span m='94730'>and</span> <span m='94920'>you</span>
  <span m='94980'>just</span> <span m='95270'>turn</span> <span
  m='95510'>this</span> <span m='95630'>integral</span> <span
  m='95970'>right</span> <span m='96180'>into</span> <span m='96730'>a</span>
  <span m='96870'>nice</span> <span m='97180'>single</span> <span
  m='97460'>variable</span> <span m='97850'>integral,</span> <span
  m='98190'>and</span> <span m='98300'>then</span> <span m='98410'>you</span>
  <span m='98510'>can</span> <span m='98650'>compute</span> <span
  m='98990'>it.</span> <span m='99330'>So</span> <span m='99760'>that's</span>
  <span m='99990'>our</span> <span m='100120'>basic</span> <span
  m='100470'>strategy</span> <span m='101050'>for</span> <span
  m='101210'>computing</span> <span m='101670'>integrals</span> <span
  m='102820'>of</span> <span m='103020'>this</span> <span
  m='103220'>form,</span> <span m='103480'>line</span> <span
  m='103700'>integrals</span> <span m='104020'>of</span> <span
  m='104130'>vector</span> <span m='104380'>fields.</span> <span
  m='104620'>So</span> <span m='105260'>let's</span> <span
  m='105450'>have</span> <span m='105630'>a</span> <span m='105770'>go.</span>
  <span m='105910'>Let's</span> <span m='106150'>start</span> <span
  m='106400'>with</span> <span m='106550'>part</span> <span m='106860'>a.</span>
  </p><p><span m='107700'>So</span> <span m='107900'>in</span> <span
  m='108010'>part</span> <span m='108290'>a,</span> <span m='109410'>what</span>
  <span m='109830'>we</span> <span m='109920'>need</span> <span
  m='110080'>to</span> <span m='110170'>do</span> <span m='110580'>to</span>
  <span m='110880'>apply</span> <span m='111190'>this</span> <span
  m='111370'>method</span> <span m='112080'>is</span> <span
  m='112490'>that</span> <span m='112610'>we</span> <span m='112720'>need</span>
  <span m='112870'>to</span> <span m='112950'>parametrize</span> <span
  m='114090'>the</span> <span m='114200'>curve</span> <span m='114480'>in</span>
  <span m='114580'>question.</span> <span m='114990'>So</span> <span
  m='115120'>this</span> <span m='115290'>is</span> <span m='115860'>a</span>
  <span m='115980'>straight</span> <span m='116360'>line.</span> <span
  m='116670'>And</span> <span m='116980'>if</span> <span m='117180'>you</span>
  <span m='117290'>look</span> <span m='117440'>at</span> <span
  m='117520'>it,</span> <span m='117680'>it's</span> <span m='117725'>the</span>
  <span m='117770'>line</span> <span m='118120'>through</span> <span
  m='118240'>the</span> <span m='118350'>points</span> <span
  m='118750'>(1,</span> <span m='119010'>1)</span> <span m='119400'>and</span>
  <span m='119610'>(2,</span> <span m='119870'>4).</span> <span
  m='120670'>So</span> <span m='120820'>this</span> <span m='121030'>line</span>
  <span m='121730'>has</span> <span m='121930'>equation</span> <span
  m='122950'>y</span> <span m='123520'>equals</span> <span m='124230'>3x</span>
  <span m='125300'>minus</span> <span m='125840'>2.</span> <span
  m='127120'>That's</span> <span m='127370'>our</span> <span m='127520'>line,
  and OK.</span> </p><p><span m='128760'>So</span> <span m='128900'>we</span>
  <span m='128990'>need</span> <span m='129150'>to</span> <span
  m='129240'>choose</span> <span m='130100'>some</span> <span
  m='130360'>parameter</span> <span m='132470'>that</span> <span
  m='132630'>will</span> <span m='132800'>give</span> <span m='133010'>us</span>
  <span m='133630'>this</span> <span m='134610'>segment</span> <span
  m='135130'>of</span> <span m='135320'>this</span> <span
  m='135530'>line.</span> <span m='135830'>So</span> <span m='136175'>a</span>
  <span m='136520'>natural</span> <span m='136630'>thing</span> <span
  m='137090'>to</span> <span m='137300'>do</span> <span m='137400'>in</span>
  <span m='137560'>this</span> <span m='137650'>case</span> <span
  m='137800'>is--</span> <span m='138490'>it's</span> <span
  m='138590'>easy</span> <span m='138950'>enough,</span> <span
  m='139550'>y</span> <span m='139795'>is</span> <span m='140040'>already</span>
  <span m='140330'>written</span> <span m='140610'>in</span> <span
  m='140720'>terms</span> <span m='141010'>of</span> <span m='141080'>x,</span>
  <span m='141540'>so</span> <span m='141990'>it's</span> <span
  m='142210'>natural</span> <span m='142680'>enough</span> <span
  m='142860'>just</span> <span m='142970'>to</span> <span m='143080'>take</span>
  <span m='143280'>a</span> <span m='143340'>parameter</span> <span
  m='143800'>that's</span> <span m='144040'>equal</span> <span
  m='144190'>to</span> <span m='144340'>x.</span> <span m='145090'>So</span>
  <span m='145820'>it's</span> <span m='145877'>up</span> <span
  m='145935'>to</span> <span m='145992'>you</span> <span
  m='146050'>whether</span> <span m='146330'>you</span> <span
  m='146450'>introduce</span> <span m='146940'>the</span> <span
  m='147030'>letter</span> <span m='147310'>t</span> <span m='147720'>in</span>
  <span m='147820'>order</span> <span m='147990'>to</span> <span
  m='148080'>do</span> <span m='148330'>this,</span> <span m='148660'>or</span>
  <span m='148920'>not.</span> <span m='149300'>I'm</span> <span
  m='149480'>going</span> <span m='149565'>to</span> <span m='149650'>do</span>
  <span m='149720'>it</span> <span m='149790'>with</span> <span
  m='149980'>the</span> <span m='150080'>letter</span> <span m='150330'>t</span>
  <span m='150730'>here</span> <span m='150980'>in</span> <span
  m='151080'>part</span> <span m='151380'>a,</span> <span m='152450'>but</span>
  <span m='154220'>you</span> <span m='154350'>could</span> <span
  m='154470'>do</span> <span m='154600'>this</span> <span
  m='154850'>problem</span> <span m='155130'>exactly</span> <span
  m='155590'>the</span> <span m='155710'>same</span> <span m='155950'>way</span>
  <span m='156100'>just</span> <span m='156430'>using</span> <span
  m='156710'>the</span> <span m='156790'>letter</span> <span
  m='157090'>x.</span> </p><p><span m='157810'>So</span> <span
  m='158000'>what</span> <span m='158150'>I'm</span> <span
  m='158220'>going</span> <span m='158310'>to</span> <span m='158400'>do</span>
  <span m='158550'>is</span> <span m='158650'>I'm</span> <span
  m='159550'>going</span> <span m='159700'>to</span> <span m='159800'>let</span>
  <span m='162010'>x</span> <span m='162340'>equals</span> <span
  m='162810'>t</span> <span m='164100'>so</span> <span m='164510'>that</span>
  <span m='165080'>y</span> <span m='165700'>is</span> <span
  m='165810'>equal</span> <span m='166090'>to</span> <span m='166190'>3t</span>
  <span m='167960'>minus</span> <span m='168420'>2.</span> <span
  m='169840'>OK,</span> <span m='170160'>so</span> <span m='170630'>that</span>
  <span m='171000'>is</span> <span m='171340'>the</span> <span
  m='171460'>parametric</span> <span m='172020'>equation</span> <span
  m='172480'>for</span> <span m='172600'>the</span> <span
  m='172700'>entire</span> <span m='173090'>line,</span> <span
  m='173390'>but</span> <span m='173500'>we</span> <span m='173600'>only</span>
  <span m='173850'>want</span> <span m='174040'>the</span> <span
  m='174120'>part</span> <span m='174720'>between</span> <span
  m='175070'>the</span> <span m='175160'>points</span> <span
  m='175470'>(1,</span> <span m='175680'>1)</span> <span m='175950'>and</span>
  <span m='176090'>(2,</span> <span m='176270'>4).</span> </p><p><span
  m='177150'>So</span> <span m='177220'>the</span> <span m='177310'>part</span>
  <span m='177520'>between</span> <span m='177820'>the</span> <span
  m='178280'>lines</span> <span m='179010'>(1,</span> <span m='179250'>1)</span>
  <span m='179470'>and</span> <span m='180060'>(2,</span> <span
  m='180240'>4)</span> <span m='184270'>is</span> <span m='185490'>the</span>
  <span m='185590'>part</span> <span m='185860'>where</span> <span
  m='186030'>t</span> <span m='186390'>is</span> <span m='186550'>between</span>
  <span m='186910'>1</span> <span m='187170'>and</span> <span
  m='187490'>2.</span> <span m='187760'>Where</span> <span m='187850'>x</span>
  <span m='187940'>is</span> <span m='188030'>between</span> <span
  m='188190'>1</span> <span m='188465'>and</span> <span m='188740'>2.</span>
  <span m='189620'>OK.</span> <span m='190350'>So</span> <span
  m='190860'>this</span> <span m='191150'>is</span> <span m='191290'>our</span>
  <span m='191590'>parametrization.</span> <span m='192700'>So</span> <span
  m='192870'>now</span> <span m='193020'>we</span> <span m='193150'>need</span>
  <span m='193270'>to</span> <span m='193360'>figure</span> <span
  m='193620'>out</span> <span m='193780'>what</span> <span m='194800'>is</span>
  <span m='196860'>the</span> <span m='196940'>field</span> <span
  m='197370'>F</span> <span m='198560'>in</span> <span m='198690'>this</span>
  <span m='198850'>parametrization,</span> <span m='199300'>and</span> <span
  m='199630'>what</span> <span m='199785'>is</span> <span m='199940'>dr.</span>
  <span m='201880'>And</span> <span m='202020'>then</span> <span
  m='202130'>after</span> <span m='202330'>we</span> <span
  m='202430'>have</span> <span m='202590'>those,</span> <span
  m='202840'>we</span> <span m='202930'>can</span> <span m='203060'>just</span>
  <span m='203240'>put</span> <span m='203380'>them</span> <span
  m='203510'>into</span> <span m='203645'>our</span> <span
  m='203780'>integral</span> <span m='204150'>and</span> <span
  m='204520'>compute.</span> </p><p><span m='205320'>So</span> <span
  m='205940'>F,</span> <span m='208210'>in</span> <span m='208420'>this</span>
  <span m='209750'>parametrization,</span> <span m='210590'>well,</span> <span
  m='210830'>we</span> <span m='210980'>take</span> <span m='211920'>the</span>
  <span m='212030'>equation</span> <span m='213070'>for</span> <span
  m='213190'>F,</span> <span m='213550'>which</span> <span m='213720'>is</span>
  <span m='213850'>x*y</span> <span m='214560'>comma</span> <span
  m='214850'>x</span> <span m='215130'>squared</span> <span
  m='215550'>plus</span> <span m='215800'>y</span> <span
  m='216150'>squared,</span> <span m='216580'>and</span> <span
  m='216780'>we</span> <span m='216880'>just</span> <span m='217080'>plug</span>
  <span m='217400'>in.</span> <span m='218170'>So</span> <span
  m='218330'>in</span> <span m='218400'>this</span> <span
  m='218510'>case,</span> <span m='218760'>x*y</span> <span m='219800'>is</span>
  <span m='220000'>going</span> <span m='220105'>to</span> <span
  m='220210'>be</span> <span m='220650'>3t</span> <span m='221420'>minus</span>
  <span m='221880'>2</span> <span m='222300'>times</span> <span
  m='222640'>t,</span> <span m='222970'>so</span> <span m='223100'>that's</span>
  <span m='223360'>3</span> <span m='223610'>t</span> <span
  m='223840'>squared</span> <span m='224730'>minus</span> <span
  m='225210'>2t.</span> <span m='226390'>And</span> <span m='226600'>x</span>
  <span m='226850'>squared</span> <span m='227100'>plus</span> <span
  m='227320'>y</span> <span m='227530'>squared,</span> <span
  m='227950'>well</span> <span m='228150'>that's</span> <span
  m='229030'>t</span> <span m='229290'>squared</span> <span
  m='230030'>plus</span> <span m='231310'>3t</span> <span
  m='231840'>minus</span> <span m='232350'>2</span> <span
  m='232560'>quantity</span> <span m='233900'>squared.</span> <span
  m='237170'>So</span> <span m='237270'>that's</span> <span
  m='237460'>what</span> <span m='237660'>F</span> <span m='237990'>is.</span>
  </p><p><span m='238630'>And</span> <span m='238890'>also</span> <span
  m='240220'>we</span> <span m='240370'>have</span> <span m='240690'>that</span>
  <span m='241390'>dr--</span> <span m='242370'>well,</span> <span
  m='242600'>we</span> <span m='242720'>just</span> <span m='243400'>take</span>
  <span m='244340'>the</span> <span m='244550'>differentials</span> <span
  m='245680'>of</span> <span m='245960'>x</span> <span m='246185'>and</span>
  <span m='246410'>y--</span> <span m='246680'>so</span> <span
  m='246850'>this</span> <span m='247030'>is</span> <span
  m='247160'>going</span> <span m='247275'>to</span> <span m='247390'>be</span>
  <span m='249000'>dt</span> <span m='249940'>comma</span> <span
  m='251140'>3*dt.</span> <span m='252490'>Or</span> <span m='252690'>if</span>
  <span m='252870'>you</span> <span m='253060'>like,</span> <span
  m='253650'>1</span> <span m='254320'>comma</span> <span m='254630'>3</span>
  <span m='255070'>times</span> <span m='255365'>dt</span> <span
  m='255660'>if</span> <span m='255885'>you</span> <span m='256110'>like</span>
  <span m='256330'>to</span> <span m='256430'>factor</span> <span
  m='256800'>out</span> <span m='256940'>your</span> <span m='257060'>dt.</span>
  <span m='257720'>So</span> <span m='257900'>that's</span> <span
  m='258090'>what</span> <span m='258290'>F</span> <span m='258500'>and</span>
  <span m='258640'>dr</span> <span m='259080'>is.</span> <span
  m='260090'>So</span> <span m='260370'>now</span> <span m='260530'>we</span>
  <span m='260680'>need</span> <span m='260850'>to</span> <span
  m='260940'>compute</span> <span m='261400'>our</span> <span
  m='261680'>integral.</span> </p><p><span m='263130'>So</span> <span
  m='263730'>the</span> <span m='264020'>integral</span> <span
  m='264280'>over</span> <span m='264700'>C</span> <span m='266060'>of</span>
  <span m='266375'>F</span> <span m='266690'>dot</span> <span
  m='267950'>dr,</span> <span m='268630'>well,</span> <span
  m='268810'>you</span> <span m='268910'>just</span> <span
  m='269170'>plug</span> <span m='269470'>in.</span> <span m='269600'>So</span>
  <span m='269810'>this</span> <span m='269940'>is</span> <span
  m='270080'>the</span> <span m='270190'>integral</span> <span
  m='272050'>over</span> <span m='272480'>C</span> <span m='272910'>now.</span>
  <span m='273410'>So</span> <span m='273580'>OK.</span> <span
  m='273790'>So</span> <span m='273950'>now</span> <span m='274230'>we</span>
  <span m='274510'>need</span> <span m='274800'>to</span> <span
  m='275110'>look</span> <span m='275310'>at</span> <span m='275390'>our</span>
  <span m='275490'>bounds.</span> </p><p><span m='275910'>So</span> <span
  m='276150'>the</span> <span m='276360'>integral</span> <span
  m='276730'>over</span> <span m='277105'>C</span> <span m='277480'>means</span>
  <span m='277610'>the</span> <span m='277740'>integral</span> <span
  m='278210'>as</span> <span m='278400'>t</span> <span m='278800'>varies</span>
  <span m='279250'>in</span> <span m='279370'>the</span> <span
  m='279460'>range</span> <span m='281450'>that</span> <span
  m='281620'>we</span> <span m='281730'>need</span> <span m='281980'>to</span>
  <span m='282070'>cover.</span> <span m='282330'>That</span> <span
  m='282500'>whole</span> <span m='282880'>curve.</span> <span
  m='283090'>So</span> <span m='283130'>in</span> <span m='283170'>this</span>
  <span m='283310'>case,</span> <span m='283550'>we</span> <span
  m='283660'>said</span> <span m='283890'>that</span> <span
  m='284070'>was</span> <span m='284220'>from</span> <span m='284420'>t</span>
  <span m='284650'>equals</span> <span m='285050'>1</span> <span
  m='285730'>to</span> <span m='285860'>2.</span> <span m='286310'>So</span>
  <span m='286705'>it's</span> <span m='286902'>the</span> <span
  m='287100'>integral</span> <span m='287500'>as</span> <span
  m='287670'>t</span> <span m='287870'>goes</span> <span m='288100'>from</span>
  <span m='288240'>1</span> <span m='288440'>to</span> <span m='288560'>2</span>
  <span m='288825'>of</span> <span m='289850'>F</span> <span
  m='290130'>dot</span> <span m='290380'>dr.</span> </p><p><span
  m='290690'>So</span> <span m='291250'>in</span> <span m='291460'>the</span>
  <span m='291600'>first</span> <span m='292040'>coordinates--</span> <span
  m='294010'>let</span> <span m='294180'>me</span> <span
  m='294270'>factor</span> <span m='294700'>out</span> <span
  m='294860'>the</span> <span m='294950'>dt</span> <span m='296020'>at</span>
  <span m='296170'>the</span> <span m='296280'>end.</span> <span
  m='296610'>So</span> <span m='297940'>that's</span> <span
  m='298280'>going</span> <span m='298390'>to</span> <span m='298500'>be</span>
  <span m='298870'>3</span> <span m='300190'>t</span> <span
  m='300460'>squared</span> <span m='301580'>minus</span> <span
  m='302230'>2t,</span> <span m='303560'>times</span> <span m='304150'>1,</span>
  <span m='305710'>plus--</span> <span m='306810'>OK,</span> <span
  m='307370'>well,</span> <span m='307500'>let's</span> <span
  m='308080'>expand</span> <span m='308780'>this out</span> <span
  m='309000'>now.</span> <span m='309430'>3t</span> <span
  m='310130'>minus</span> <span m='310630'>2</span> <span
  m='310970'>quantity</span> <span m='311500'>squared,</span> <span
  m='312390'>that's</span> <span m='312600'>going</span> <span
  m='312690'>to</span> <span m='312780'>give</span> <span m='312930'>me</span>
  <span m='313060'>a</span> <span m='313130'>9</span> <span m='313780'>t</span>
  <span m='314100'>squared</span> <span m='315740'>minus</span> <span
  m='316440'>12t</span> <span m='317490'>plus</span> <span m='317890'>4--</span>
  <span m='319130'>so</span> <span m='319410'>this</span> <span
  m='319580'>is</span> <span m='319710'>9</span> <span m='320035'>t</span> <span
  m='320360'>squared</span> <span m='320755'>minus</span> <span
  m='321150'>12t</span> <span m='322020'>plus</span> <span m='322610'>4,</span>
  <span m='323250'>and</span> <span m='323400'>then</span> <span
  m='323500'>we</span> <span m='323580'>have</span> <span m='323700'>to</span>
  <span m='323780'>add</span> <span m='324290'>t</span> <span
  m='324490'>squared</span> <span m='324950'>to</span> <span
  m='325110'>it.</span> <span m='325470'>So</span> <span m='325680'>this</span>
  <span m='325840'>is</span> <span m='325980'>plus</span> <span
  m='326640'>10</span> <span m='327600'>t</span> <span m='327980'>squared</span>
  <span m='330140'>minus</span> <span m='331430'>12t</span> <span
  m='332700'>plus</span> <span m='333220'>4,</span> <span
  m='334400'>times</span> <span m='335210'>3,</span> <span m='338200'>and</span>
  <span m='338310'>then</span> <span m='338420'>this</span> <span
  m='338570'>whole</span> <span m='338840'>thing</span> <span
  m='339226'>is</span> <span m='339612'>dt.</span> </p><p><span
  m='340000'>dt</span> <span m='340370'>is</span> <span m='340500'>the</span>
  <span m='340590'>whole</span> <span m='342170'>integrand,</span> <span
  m='342670'>there.</span> <span m='343105'>I</span> <span
  m='343322'>could</span> <span m='343540'>even</span> <span
  m='343770'>put</span> <span m='343980'>in</span> <span
  m='344190'>another</span> <span m='344300'>pair</span> <span
  m='344380'>of</span> <span m='344460'>parentheses</span> <span
  m='344948'>just</span> <span m='345436'>to</span> <span
  m='346900'>emphasize</span> <span m='347195'>that,</span> <span
  m='347490'>perhaps.</span> <span m='348380'>OK.</span> <span
  m='349190'>Now</span> <span m='349370'>this</span> <span m='349570'>is</span>
  <span m='350250'>a</span> <span m='350870'>straightforward--</span> <span
  m='352310'>I</span> <span m='352350'>mean,</span> <span m='352470'>it's</span>
  <span m='353650'>a</span> <span m='353800'>little</span> <span
  m='354280'>complicated</span> <span m='354930'>looking,</span> <span
  m='355470'>but</span> <span m='355640'>it's</span> <span
  m='355840'>just</span> <span m='356100'>an</span> <span
  m='356200'>integral</span> <span m='356920'>of</span> <span
  m='357140'>a</span> <span m='357470'>polynomial.</span> <span
  m='358130'>Easy</span> <span m='358430'>enough</span> <span
  m='358680'>to</span> <span m='358770'>do.</span> </p><p><span
  m='361310'>Let's</span> <span m='361550'>first</span> <span
  m='361930'>just</span> <span m='362310'>combine</span> <span
  m='362760'>terms.</span> <span m='363770'>OK,</span> <span
  m='364040'>so</span> <span m='364620'>let's</span> <span
  m='364790'>look</span> <span m='364890'>at</span> <span m='364970'>the</span>
  <span m='365090'>t</span> <span m='365340'>squareds.</span> <span
  m='366240'>We</span> <span m='366460'>have</span> <span m='366610'>a</span>
  <span m='367020'>10</span> <span m='367380'>t</span> <span
  m='367580'>squared</span> <span m='367820'>times</span> <span
  m='368030'>3.</span> <span m='368350'>So</span> <span m='368480'>30</span>
  <span m='368990'>t</span> <span m='369200'>squared,</span> <span
  m='369960'>and</span> <span m='370070'>then</span> <span
  m='370180'>another</span> <span m='370510'>3</span> <span
  m='370940'>times</span> <span m='371270'>1.</span> <span m='371670'>So</span>
  <span m='372060'>33</span> <span m='373373'>t</span> <span
  m='374380'>squared.</span> <span m='375232'>And</span> <span
  m='375660'>I've</span> <span m='375860'>got</span> <span
  m='376040'>minus</span> <span m='376610'>2t</span> <span
  m='377270'>minus</span> <span m='377780'>36t</span> <span m='379410'>is</span>
  <span m='379580'>minus</span> <span m='380050'>38t,</span> <span
  m='382560'>plus</span> <span m='383560'>12--</span> <span m='385150'>4</span>
  <span m='385370'>times</span> <span m='385730'>3--</span> <span
  m='387220'>dt.</span> <span m='387770'>OK,</span> <span m='388110'>and</span>
  <span m='388270'>now</span> <span m='388370'>we</span> <span
  m='388520'>integrate.</span> </p><p><span m='389400'>So</span> <span
  m='389490'>this</span> <span m='389670'>is</span> <span
  m='389850'>equal</span> <span m='390230'>to</span> <span m='391230'>11</span>
  <span m='392050'>t</span> <span m='392310'>cubed--</span> <span
  m='393620'>that's</span> <span m='394080'>a</span> <span m='394540'>3--</span>
  <span m='397580'>minus</span> <span m='398060'>19</span> <span
  m='399230'>t</span> <span m='399920'>squared</span> <span
  m='401330'>plus</span> <span m='401730'>12t</span> <span m='403790'>as</span>
  <span m='404050'>t</span> <span m='404310'>varies</span> <span
  m='405130'>between</span> <span m='405600'>1</span> <span
  m='406920'>and</span> <span m='407140'>2.</span> <span m='407810'>And</span>
  <span m='408210'>all</span> <span m='408330'>right.</span> <span
  m='408930'>OK,</span> <span m='409140'>so</span> <span m='409300'>now</span>
  <span m='409430'>we've</span> <span m='409580'>got</span> <span
  m='409730'>to</span> <span m='409790'>plug</span> <span m='410130'>in</span>
  <span m='410300'>and</span> <span m='410440'>evaluate</span> <span
  m='410960'>and</span> <span m='411090'>so</span> <span m='411260'>on.</span>
  <span m='411430'>So</span> <span m='412270'>at</span> <span
  m='412410'>2,</span> <span m='412870'>this</span> <span m='413100'>is</span>
  <span m='413870'>88</span> <span m='415790'>minus</span> <span
  m='416810'>76</span> <span m='418610'>plus</span> <span m='419040'>24,</span>
  <span m='420740'>minus</span> <span m='422740'>11</span> <span
  m='423380'>minus</span> <span m='424460'>19</span> <span
  m='426420'>plus</span> <span m='426960'>12.</span> <span m='429100'>So</span>
  <span m='430280'>you</span> <span m='430410'>do</span> <span
  m='430660'>some</span> <span m='431050'>arithmetic</span> <span
  m='431740'>and</span> <span m='432360'>this</span> <span m='432570'>is</span>
  <span m='432720'>going</span> <span m='432820'>to</span> <span
  m='432920'>work</span> <span m='433160'>out</span> <span m='433470'>to</span>
  <span m='433955'>32.</span> </p><p><span m='435860'>OK,</span> <span
  m='436480'>so</span> <span m='436600'>there's</span> <span
  m='436870'>part</span> <span m='437190'>a.</span> <span m='439500'>It's</span>
  <span m='439640'>a</span> <span m='439780'>nice,</span> <span
  m='440020'>simple</span> <span m='440320'>curve,</span> <span
  m='440680'>so</span> <span m='440840'>we</span> <span m='440940'>had</span>
  <span m='441040'>a</span> <span m='441080'>nice,</span> <span
  m='441360'>simple</span> <span m='441670'>parametrization.</span> <span
  m='443025'>We</span> <span m='443350'>computed</span> <span
  m='444380'>F</span> <span m='444730'>and</span> <span m='445000'>dr,</span>
  <span m='445990'>then</span> <span m='446180'>we</span> <span
  m='447320'>dotted</span> <span m='447680'>them,</span> <span
  m='447920'>and</span> <span m='448320'>integrated.</span> <span
  m='449040'>OK,</span> <span m='449310'>so</span> <span m='449450'>now</span>
  <span m='449970'>we're</span> <span m='450150'>going</span> <span
  m='450240'>to</span> <span m='450330'>do</span> <span m='450430'>the</span>
  <span m='450560'>same</span> <span m='450860'>exact</span> <span
  m='451250'>thing</span> <span m='451870'>for</span> <span
  m='451990'>part</span> <span m='452410'>b,</span> <span m='452970'>but</span>
  <span m='453067'>in</span> <span m='453165'>part</span> <span
  m='453360'>b,</span> <span m='453480'>the</span> <span m='453580'>curve</span>
  <span m='453930'>is</span> <span m='454010'>a</span> <span
  m='454090'>little</span> <span m='454290'>more</span> <span
  m='454460'>complicated.</span> </p><p><span m='454940'>Let's</span> <span
  m='455110'>come</span> <span m='455270'>over</span> <span
  m='455490'>here</span> <span m='455815'>where</span> <span
  m='456140'>we've</span> <span m='456410'>got</span> <span
  m='456700'>some</span> <span m='457900'>empty</span> <span
  m='458360'>space.</span> <span m='458620'>So</span> <span m='458690'>in</span>
  <span m='458760'>part</span> <span m='459140'>b,</span> <span
  m='459740'>our</span> <span m='460060'>curve</span> <span
  m='461870'>looks</span> <span m='462130'>like</span> <span
  m='462430'>this.</span> <span m='462730'>So</span> <span m='462950'>it</span>
  <span m='464390'>starts</span> <span m='464740'>at</span> <span
  m='464830'>the</span> <span m='464910'>point</span> <span
  m='465260'>(1,</span> <span m='465970'>1),</span> <span m='466796'>and</span>
  <span m='467210'>then</span> <span m='467315'>it</span> <span
  m='467420'>goes</span> <span m='467780'>up</span> <span m='468830'>to</span>
  <span m='468980'>the</span> <span m='469070'>point</span> <span
  m='471160'>(1,</span> <span m='471940'>4),</span> <span m='472510'>and</span>
  <span m='472600'>then</span> <span m='472690'>it</span> <span
  m='472750'>goes</span> <span m='473120'>over</span> <span m='474070'>to</span>
  <span m='474200'>the</span> <span m='474300'>point</span> <span
  m='475250'>(2,</span> <span m='475870'>4).</span> <span m='477090'>All</span>
  <span m='477261'>right?</span> <span m='478120'>So</span> <span
  m='478580'>it's</span> <span m='478760'>hard</span> <span m='479100'>to</span>
  <span m='479220'>parametrize</span> <span m='480140'>in</span> <span
  m='480310'>one</span> <span m='480710'>fell</span> <span
  m='481030'>swoop</span> <span m='481440'>something</span> <span
  m='481880'>that</span> <span m='482040'>makes</span> <span m='482300'>a</span>
  <span m='482360'>sharp</span> <span m='482730'>right</span> <span
  m='482940'>angle</span> <span m='483270'>like</span> <span
  m='483490'>that.</span> </p><p><span m='483890'>So</span> <span
  m='483985'>a</span> <span m='484080'>natural</span> <span
  m='484530'>thing</span> <span m='484740'>to</span> <span m='484840'>do</span>
  <span m='484940'>is</span> <span m='485100'>to</span> <span
  m='485170'>split</span> <span m='485890'>the</span> <span
  m='486020'>integral</span> <span m='486450'>over</span> <span
  m='486670'>this</span> <span m='486890'>whole</span> <span
  m='487120'>curve</span> <span m='487610'>into</span> <span
  m='487930'>the</span> <span m='488090'>integrals</span> <span
  m='488500'>over</span> <span m='488680'>the</span> <span m='488770'>two</span>
  <span m='488940'>different</span> <span m='489230'>pieces.</span> <span
  m='489900'>So</span> <span m='490190'>let's</span> <span
  m='490510'>call</span> <span m='490800'>this</span> <span
  m='491610'>vertical</span> <span m='492220'>part</span> <span
  m='492660'>C_1</span> <span m='493750'>and</span> <span m='493900'>this</span>
  <span m='493990'>horizontal</span> <span m='494620'>part</span> <span
  m='495080'>C_2.</span> <span m='496480'>And</span> <span m='496640'>so</span>
  <span m='496770'>we</span> <span m='496910'>know</span> <span
  m='497430'>that</span> <span m='497800'>the</span> <span
  m='497960'>integral</span> <span m='498570'>over</span> <span
  m='498955'>C</span> <span m='500110'>of</span> <span m='500375'>F</span> <span
  m='500640'>dot</span> <span m='501840'>dr</span> <span m='502295'>is</span>
  <span m='502570'>equal</span> <span m='502820'>to</span> <span
  m='503020'>the</span> <span m='503190'>integral</span> <span
  m='503750'>over</span> <span m='504040'>C_1</span> <span m='505124'>of</span>
  <span m='505521'>F</span> <span m='505920'>dot</span> <span
  m='506850'>dr</span> <span m='507810'>plus</span> <span m='507985'>the</span>
  <span m='508160'>integral</span> <span m='508910'>over</span> <span
  m='509215'>C_2</span> <span m='510246'>of</span> <span m='510610'>F</span>
  <span m='511440'>dot</span> <span m='512430'>dr.</span> <span
  m='513380'>And</span> <span m='513510'>so</span> <span m='513610'>now,</span>
  <span m='513860'>it's</span> <span m='514020'>easy</span> <span
  m='514240'>enough</span> <span m='514450'>to</span> <span
  m='514560'>parametrize</span> <span m='515250'>these</span> <span
  m='515470'>two</span> <span m='515720'>separate</span> <span
  m='516240'>curves</span> <span m='516560'>separately.</span> </p><p><span
  m='517930'>C_1,</span> <span m='518570'>for</span> <span
  m='518740'>example,</span> <span m='520320'>is</span> <span
  m='520520'>the</span> <span m='520600'>straight</span> <span
  m='520970'>line</span> <span m='521220'>segment</span> <span
  m='521890'>that</span> <span m='522020'>goes</span> <span
  m='522340'>from</span> <span m='522520'>(1,</span> <span m='522810'>1)</span>
  <span m='523490'>to</span> <span m='523620'>(1,</span> <span
  m='523940'>4).</span> <span m='525050'>So</span> <span m='525530'>C_1.</span>
  <span m='526530'>So</span> <span m='527210'>that</span> <span
  m='527640'>means</span> <span m='527900'>we</span> <span
  m='528020'>have</span> <span m='528310'>x</span> <span m='528740'>equal</span>
  <span m='529020'>to</span> <span m='529120'>1,</span> <span
  m='530310'>and</span> <span m='531350'>1</span> <span m='532100'>less</span>
  <span m='532300'>than</span> <span m='532500'>or</span> <span
  m='532590'>equal</span> <span m='532660'>to</span> <span m='532900'>y</span>
  <span m='533840'>less</span> <span m='533928'>than</span> <span
  m='534016'>or</span> <span m='534105'>equal</span> <span m='534370'>to</span>
  <span m='534597'>4.</span> <span m='535280'>So</span> <span
  m='535740'>a</span> <span m='536200'>natural</span> <span
  m='536730'>parametrization</span> <span m='537500'>here</span> <span
  m='537690'>is</span> <span m='537820'>just</span> <span m='537990'>the</span>
  <span m='538090'>parametrization</span> <span m='538900'>that</span> <span
  m='539000'>uses</span> <span m='539470'>the</span> <span
  m='539570'>parameter</span> <span m='540670'>y.</span> <span
  m='541830'>Right?</span> <span m='542190'>So</span> <span m='542730'>in</span>
  <span m='542870'>this</span> <span m='543020'>one,</span> <span
  m='543170'>I'm</span> <span m='543280'>not</span> <span
  m='543450'>going</span> <span m='543590'>to</span> <span
  m='544010'>bother</span> <span m='544330'>introducing</span> <span
  m='544920'>a</span> <span m='544980'>new</span> <span m='545215'>letter</span>
  <span m='545450'>t.</span> <span m='545730'>I'm</span> <span
  m='545870'>just</span> <span m='546050'>going</span> <span
  m='546145'>to</span> <span m='546240'>stick</span> <span
  m='546570'>with</span> <span m='546700'>x</span> <span m='546970'>and</span>
  <span m='547090'>y.</span> <span m='547510'>So</span> <span
  m='547740'>we</span> <span m='547830'>have</span> <span m='547990'>x</span>
  <span m='548250'>equals</span> <span m='548560'>1,</span> <span
  m='549700'>and</span> <span m='550040'>y</span> <span m='550430'>is</span>
  <span m='550550'>our</span> <span m='550680'>parameter</span> <span
  m='550935'>and</span> <span m='551062'>it</span> <span m='551190'>goes</span>
  <span m='551460'>from</span> <span m='552030'>1</span> <span
  m='552310'>to</span> <span m='552440'>4.</span> </p><p><span
  m='553000'>So</span> <span m='553230'>now</span> <span m='553470'>let's</span>
  <span m='553650'>look</span> <span m='553840'>at</span> <span
  m='553910'>what</span> <span m='554100'>F</span> <span m='555000'>and</span>
  <span m='555240'>dr</span> <span m='556750'>are.</span> <span
  m='557050'>So</span> <span m='557200'>in</span> <span m='557270'>this</span>
  <span m='557410'>case,</span> <span m='557830'>F</span> <span
  m='558670'>is</span> <span m='558860'>equal</span> <span
  m='558940'>to--</span> <span m='559290'>its</span> <span
  m='559480'>first</span> <span m='559670'>coordinate</span> <span
  m='559960'>is</span> <span m='560200'>x*y,</span> <span m='561340'>and</span>
  <span m='561550'>x</span> <span m='561780'>is</span> <span
  m='562010'>just</span> <span m='562370'>1</span> <span m='562640'>here,</span>
  <span m='563410'>so</span> <span m='563560'>this</span> <span
  m='563740'>is</span> <span m='564400'>y.</span> <span m='565260'>And</span>
  <span m='565400'>its</span> <span m='565440'>second</span> <span
  m='565860'>coordinate</span> <span m='566570'>was</span> <span
  m='566850'>x</span> <span m='567080'>squared</span> <span
  m='567400'>plus</span> <span m='567640'>y</span> <span
  m='567870'>squared,</span> <span m='568215'>and</span> <span
  m='568560'>so</span> <span m='568720'>that's</span> <span
  m='568930'>going</span> <span m='569020'>to</span> <span m='569110'>be</span>
  <span m='569220'>1</span> <span m='570050'>plus</span> <span
  m='571190'>y</span> <span m='571770'>squared.</span> </p><p><span
  m='573510'>And</span> <span m='573790'>dr--</span> <span
  m='576480'>well,</span> <span m='576860'>r</span> <span m='577250'>here</span>
  <span m='577670'>is</span> <span m='578200'>1</span> <span
  m='578700'>comma</span> <span m='579030'>y--</span> <span m='579950'>so</span>
  <span m='580320'>dr</span> <span m='581540'>is</span> <span
  m='581720'>equal</span> <span m='581990'>to</span> <span m='582420'>0</span>
  <span m='583590'>comma</span> <span m='584100'>dy.</span> <span
  m='585610'>Or</span> <span m='585980'>(0,</span> <span m='586370'>1)</span>
  <span m='586910'>times</span> <span m='587280'>dy,</span> <span
  m='587670'>if</span> <span m='587860'>you</span> <span
  m='587930'>wanted</span> <span m='588160'>to</span> <span
  m='588270'>factor</span> <span m='589100'>that</span> <span
  m='589380'>dy</span> <span m='589880'>out</span> <span m='590070'>to</span>
  <span m='590180'>the</span> <span m='590280'>end.</span> <span
  m='591060'>OK.</span> <span m='592910'>Good.</span> <span m='593280'>So</span>
  <span m='593440'>we're</span> <span m='593550'>all</span> <span
  m='593780'>set</span> <span m='594380'>to</span> <span m='594500'>do</span>
  <span m='594600'>that</span> <span m='594870'>first</span> <span
  m='595140'>integral.</span> <span m='595510'>So</span> <span
  m='596780'>let's</span> <span m='597080'>do</span> <span
  m='597270'>that.</span> </p><p><span m='597980'>So</span> <span
  m='598110'>we</span> <span m='598190'>have</span> <span m='598350'>the</span>
  <span m='598570'>integral</span> <span m='599670'>over</span> <span
  m='599930'>C_1</span> <span m='601650'>of</span> <span m='601800'>F</span>
  <span m='602330'>dot</span> <span m='603720'>dr</span> <span
  m='605150'>is</span> <span m='605440'>equal</span> <span
  m='605870'>to--</span> <span m='607692'>well,</span> <span
  m='607820'>we</span> <span m='607940'>dot</span> <span m='608360'>these</span>
  <span m='608570'>two</span> <span m='608730'>things</span> <span
  m='609050'>together.</span> <span m='609490'>And</span> <span
  m='609600'>the</span> <span m='609670'>first</span> <span
  m='610030'>term</span> <span m='610420'>gives</span> <span
  m='610630'>me</span> <span m='610790'>y</span> <span m='611690'>times</span>
  <span m='612050'>0,</span> <span m='612450'>and</span> <span
  m='612570'>that's</span> <span m='612810'>just</span> <span
  m='613170'>0.</span> <span m='613780'>So</span> <span m='613940'>that's</span>
  <span m='614300'>going</span> <span m='614410'>to</span> <span
  m='614520'>die,</span> <span m='615300'>and</span> <span m='615490'>all</span>
  <span m='615660'>we're</span> <span m='615780'>left</span> <span
  m='616090'>with</span> <span m='616250'>is</span> <span m='616400'>the</span>
  <span m='616510'>second</span> <span m='616960'>term.</span> <span
  m='617510'>So</span> <span m='617730'>it's</span> <span m='617885'>the</span>
  <span m='618040'>integral</span> <span m='618760'>of</span> <span
  m='618980'>1</span> <span m='619420'>plus</span> <span m='620300'>y</span>
  <span m='620610'>squared</span> <span m='621600'>dy,</span> <span
  m='622720'>but</span> <span m='623130'>we</span> <span m='623260'>need</span>
  <span m='623510'>bounds.</span> <span m='624120'>Right?</span> </p><p><span
  m='624560'>OK,</span> <span m='624840'>so</span> <span m='625020'>y</span>
  <span m='625420'>was</span> <span m='625630'>going</span> <span
  m='625950'>from</span> <span m='626140'>1</span> <span m='626490'>to</span>
  <span m='626640'>4</span> <span m='627070'>in</span> <span
  m='627285'>this</span> <span m='627500'>integral.</span> <span
  m='627975'>So</span> <span m='628133'>it's</span> <span m='628291'>the</span>
  <span m='628450'>integral</span> <span m='628870'>from</span> <span
  m='629060'>1</span> <span m='629440'>to</span> <span m='629820'>4</span> <span
  m='630750'>of</span> <span m='630900'>1</span> <span m='631210'>plus</span>
  <span m='631530'>y</span> <span m='631770'>squared</span> <span
  m='632240'>dy.</span> <span m='634620'>OK.</span> <span m='634940'>So</span>
  <span m='635300'>we</span> <span m='635520'>can</span> <span
  m='635650'>either</span> <span m='635840'>continue</span> <span
  m='636320'>and</span> <span m='636410'>evaluate</span> <span
  m='636960'>this</span> <span m='637150'>now,</span> <span m='637430'>or</span>
  <span m='637630'>we</span> <span m='637750'>could</span> <span
  m='637880'>go</span> <span m='638080'>and</span> <span m='638530'>do</span>
  <span m='638980'>the</span> <span m='639260'>second</span> <span
  m='639660'>one.</span> <span m='643210'>Let's</span> <span
  m='643980'>finish</span> <span m='644290'>evaluating</span> <span
  m='644635'>it</span> <span m='644980'>since</span> <span
  m='645150'>we've</span> <span m='645290'>already</span> <span
  m='645560'>got</span> <span m='645780'>it</span> <span
  m='645840'>written</span> <span m='646100'>up</span> <span
  m='646250'>here.</span> </p><p><span m='646830'>So</span> <span
  m='646920'>this</span> <span m='647100'>is</span> <span
  m='647250'>equal</span> <span m='647550'>to</span> <span m='648610'>y,</span>
  <span m='649610'>plus</span> <span m='651020'>y</span> <span
  m='651440'>cubed</span> <span m='652300'>over</span> <span
  m='652930'>3,</span> <span m='653880'>between</span> <span m='654430'>1</span>
  <span m='654900'>and</span> <span m='655090'>4.</span> <span
  m='656220'>So</span> <span m='656330'>what</span> <span m='656460'>is</span>
  <span m='656580'>this?</span> <span m='656750'>This</span> <span
  m='656860'>is</span> <span m='657040'>4</span> <span m='657530'>plus</span>
  <span m='657850'>64/3,</span> <span m='663860'>minus</span> <span
  m='665100'>1</span> <span m='666270'>plus</span> <span m='666660'>1/3.</span>
  <span m='668080'>So</span> <span m='668200'>that</span> <span
  m='668420'>looks</span> <span m='668670'>like</span> <span
  m='668900'>it's</span> <span m='669440'>24</span> <span m='670900'>to</span>
  <span m='671145'>me.</span> <span m='671880'>OK,</span> <span
  m='672180'>so</span> <span m='672380'>we</span> <span m='672490'>get</span>
  <span m='672650'>24</span> <span m='673230'>for</span> <span
  m='673390'>the</span> <span m='673490'>first</span> <span
  m='673860'>part.</span> </p><p><span m='674540'>Now,</span> <span
  m='674730'>let's</span> <span m='674960'>do</span> <span m='675090'>the</span>
  <span m='675200'>second</span> <span m='675600'>part.</span> <span
  m='676465'>So</span> <span m='677230'>C_2</span> <span m='677540'>here.</span>
  <span m='678415'>I'll</span> <span m='678810'>draw</span> <span
  m='678995'>a</span> <span m='679180'>little</span> <span
  m='679500'>line</span> <span m='679720'>there</span> <span
  m='679955'>to</span> <span m='680190'>separate</span> <span
  m='680620'>them.</span> <span m='681270'>Now,</span> <span
  m='681520'>curve</span> <span m='681980'>C_2--</span> <span
  m='682640'>let's</span> <span m='682850'>go</span> <span
  m='682970'>back</span> <span m='683220'>and</span> <span
  m='683340'>look</span> <span m='683560'>at</span> <span m='683770'>it--</span>
  <span m='684500'>OK,</span> <span m='684770'>so</span> <span
  m='684920'>curve</span> <span m='685380'>C_2</span> <span m='685700'>is</span>
  <span m='685840'>the</span> <span m='685920'>segment</span> <span
  m='686390'>connecting</span> <span m='686830'>the</span> <span
  m='686920'>points</span> <span m='687520'>(1,</span> <span
  m='687960'>4)</span> <span m='688820'>and</span> <span m='688960'>the</span>
  <span m='689030'>point</span> <span m='689480'>(2,</span> <span
  m='689690'>4).</span> <span m='691230'>OK,</span> <span m='691660'>so</span>
  <span m='691920'>y</span> <span m='692530'>is</span> <span
  m='692710'>always</span> <span m='693180'>4</span> <span m='694270'>on</span>
  <span m='694480'>this</span> <span m='694640'>curve,</span> <span
  m='694950'>and</span> <span m='695145'>x</span> <span m='695340'>goes</span>
  <span m='695620'>from</span> <span m='695810'>1</span> <span
  m='696110'>to</span> <span m='696240'>2.</span> <span m='696690'>So</span>
  <span m='697140'>1</span> <span m='697580'>is</span> <span
  m='697700'>less</span> <span m='697960'>than</span> <span m='698190'>or</span>
  <span m='698270'>equal</span> <span m='698350'>to</span> <span
  m='698430'>x</span> <span m='699260'>less</span> <span m='699380'>than</span>
  <span m='699500'>or</span> <span m='699710'>equal</span> <span
  m='699860'>to</span> <span m='699940'>2,</span> <span m='701070'>y</span>
  <span m='701305'>is</span> <span m='701540'>equal</span> <span
  m='701655'>to</span> <span m='701770'>4.</span> </p><p><span
  m='703820'>So</span> <span m='704030'>a</span> <span m='704300'>natural</span>
  <span m='704570'>parametrization</span> <span m='705390'>here,</span> <span
  m='705550'>again,</span> <span m='706010'>is</span> <span
  m='706260'>just</span> <span m='706350'>to</span> <span m='706440'>take</span>
  <span m='706690'>x</span> <span m='707060'>to</span> <span
  m='707190'>be</span> <span m='707310'>our</span> <span
  m='707460'>parameter.</span> <span m='708230'>And</span> <span
  m='708390'>again,</span> <span m='708660'>I'm</span> <span
  m='708770'>not</span> <span m='708940'>going</span> <span m='709045'>to</span>
  <span m='709150'>introduce</span> <span m='709570'>a</span> <span
  m='709650'>letter</span> <span m='709910'>t.</span> <span
  m='710260'>We're</span> <span m='710510'>just</span> <span
  m='710720'>using</span> <span m='711030'>x</span> <span m='711225'>as</span>
  <span m='711420'>our</span> <span m='711560'>parameter.</span> <span
  m='712330'>So</span> <span m='712560'>in</span> <span m='712650'>this</span>
  <span m='712830'>case,</span> <span m='713800'>F--</span> <span
  m='716340'>well,</span> <span m='716610'>it's</span> <span
  m='717020'>x*y,</span> <span m='718280'>so</span> <span m='719080'>x</span>
  <span m='719300'>is</span> <span m='719520'>just</span> <span
  m='719750'>x</span> <span m='719960'>and</span> <span m='720170'>y</span>
  <span m='720420'>is</span> <span m='720580'>4--</span> <span
  m='721366'>so</span> <span m='721760'>that's</span> <span m='722310'>4x</span>
  <span m='723630'>comma--</span> <span m='724160'>and</span> <span
  m='724270'>the</span> <span m='724330'>second</span> <span
  m='724750'>coordinate</span> <span m='725110'>is</span> <span
  m='725280'>x</span> <span m='725545'>squared</span> <span
  m='725810'>plus</span> <span m='726040'>y</span> <span
  m='726240'>squared--</span> <span m='726645'>so</span> <span
  m='727050'>that's</span> <span m='727380'>x</span> <span
  m='727720'>squared</span> <span m='728040'>plus</span> <span
  m='728360'>16.</span> <span m='730980'>And</span> <span m='731330'>dr</span>
  <span m='734780'>is</span> <span m='734980'>equal</span> <span
  m='735330'>to</span> <span m='737700'>dx</span> <span m='740350'>comma</span>
  <span m='740600'>0.</span> <span m='742210'>OK,</span> <span
  m='742600'>so</span> <span m='742780'>that's</span> <span m='743210'>F</span>
  <span m='743550'>and</span> <span m='743760'>dr.</span> </p><p><span
  m='744440'>So</span> <span m='744710'>the</span> <span
  m='744890'>integral</span> <span m='745360'>that</span> <span
  m='745510'>I</span> <span m='745590'>want</span> <span m='745970'>now</span>
  <span m='746333'>is</span> <span m='746696'>the</span> <span
  m='747060'>integral</span> <span m='748180'>over</span> <span
  m='748515'>C_2</span> <span m='750000'>of</span> <span m='750320'>F</span>
  <span m='751070'>dot</span> <span m='752400'>dr.</span> <span
  m='754330'>OK,</span> <span m='754660'>so</span> <span m='754820'>we</span>
  <span m='754950'>just</span> <span m='755200'>plug</span> <span
  m='755550'>in</span> <span m='755670'>here</span> <span m='755920'>what</span>
  <span m='756140'>we've</span> <span m='756320'>got.</span> <span
  m='756900'>So</span> <span m='757060'>this</span> <span m='757280'>is</span>
  <span m='757440'>equal</span> <span m='757830'>to</span> <span
  m='758502'>the</span> <span m='758840'>integral</span> <span
  m='759790'>of--</span> <span m='761330'>well,</span> <span
  m='761920'>the</span> <span m='762070'>first</span> <span
  m='762480'>coordinates</span> <span m='762840'>are</span> <span
  m='763150'>4x</span> <span m='763690'>dx</span> <span m='764070'>and</span>
  <span m='764170'>the</span> <span m='764210'>second</span> <span
  m='764530'>coordinates</span> <span m='764940'>just</span> <span
  m='765120'>give</span> <span m='765240'>me</span> <span m='765530'>0--</span>
  <span m='765820'>so</span> <span m='766280'>it's</span> <span
  m='766693'>4x</span> <span m='767520'>dx.</span> </p><p><span
  m='767875'>And</span> <span m='768080'>again,</span> <span m='768300'>I</span>
  <span m='768350'>need</span> <span m='768520'>my</span> <span
  m='768660'>bounds.</span> <span m='769230'>Well,</span> <span
  m='769430'>I</span> <span m='769500'>had--</span> <span m='769890'>over</span>
  <span m='770100'>here,</span> <span m='770320'>I</span> <span
  m='770400'>had</span> <span m='770700'>1</span> <span m='771350'>less</span>
  <span m='771440'>than</span> <span m='771530'>or</span> <span
  m='771620'>equal</span> <span m='771800'>to</span> <span m='771980'>x</span>
  <span m='772160'>is</span> <span m='772340'>less</span> <span
  m='772435'>than</span> <span m='772530'>or</span> <span
  m='772625'>equal</span> <span m='772767'>to</span> <span m='772910'>2.</span>
  <span m='773215'>So</span> <span m='773520'>that's</span> <span
  m='773780'>the</span> <span m='774040'>integral</span> <span
  m='774470'>between</span> <span m='774790'>1</span> <span
  m='775050'>and</span> <span m='775210'>2.</span> <span m='778350'>4x--</span>
  <span m='779200'>integrate</span> <span m='779690'>that--</span> <span
  m='780070'>and</span> <span m='780105'>I</span> <span m='780140'>get</span>
  <span m='780710'>2</span> <span m='780980'>x</span> <span
  m='781330'>squared</span> <span m='782500'>between</span> <span
  m='782960'>1</span> <span m='783250'>and</span> <span m='783440'>2,</span>
  <span m='784300'>which</span> <span m='784490'>is</span> <span
  m='784650'>equal</span> <span m='784860'>to</span> <span m='785100'>8</span>
  <span m='785950'>minus</span> <span m='787050'>2,</span> <span
  m='788750'>or</span> <span m='788960'>6.</span> </p><p><span
  m='791870'>All</span> <span m='792065'>right.</span> <span
  m='792650'>So</span> <span m='794560'>let's</span> <span m='794790'>see</span>
  <span m='794980'>what</span> <span m='795160'>we've</span> <span
  m='795350'>got.</span> <span m='796080'>So</span> <span m='796190'>we</span>
  <span m='796320'>had--</span> <span m='797820'>back</span> <span
  m='798460'>here,</span> <span m='798990'>we</span> <span m='799120'>had</span>
  <span m='799300'>our</span> <span m='799440'>curve</span> <span
  m='799980'>C,</span> <span m='801000'>which</span> <span m='801140'>we</span>
  <span m='801240'>split</span> <span m='801610'>into</span> <span
  m='801770'>the</span> <span m='801860'>two</span> <span
  m='802050'>parts</span> <span m='802420'>C_1</span> <span
  m='802920'>and</span> <span m='803050'>C_2.</span> <span m='804040'>And</span>
  <span m='804170'>we</span> <span m='804270'>wanted</span> <span
  m='804520'>to</span> <span m='804630'>know</span> <span m='804780'>what</span>
  <span m='804940'>the</span> <span m='805200'>integral</span> <span
  m='805550'>over</span> <span m='806250'>C</span> <span m='806570'>was,</span>
  <span m='806830'>and</span> <span m='807090'>we've</span> <span
  m='807360'>separately</span> <span m='807900'>computed</span> <span
  m='811110'>the</span> <span m='811610'>integral</span> <span
  m='812110'>over</span> <span m='812260'>C_1.</span> <span
  m='812965'>And</span> <span m='813360'>we</span> <span
  m='813530'>computed</span> <span m='813980'>that</span> <span
  m='814230'>to</span> <span m='814310'>be</span> <span m='814440'>24.</span>
  <span m='815790'>And</span> <span m='815930'>we</span> <span
  m='816010'>computed</span> <span m='816235'>the</span> <span
  m='816460'>integral</span> <span m='816900'>over</span> <span
  m='817080'>C_2,</span> <span m='818320'>and</span> <span
  m='818490'>that</span> <span m='818670'>was</span> <span m='818790'>6.</span>
  <span m='822380'>So</span> <span m='822470'>the</span> <span
  m='822550'>integral</span> <span m='823310'>over</span> <span
  m='823540'>the</span> <span m='823640'>whole</span> <span
  m='823960'>curve</span> <span m='825270'>of</span> <span m='825510'>F</span>
  <span m='825910'>dot</span> <span m='827230'>dr</span> <span
  m='828070'>is</span> <span m='828250'>equal</span> <span m='828520'>to</span>
  <span m='829190'>24</span> <span m='829870'>plus</span> <span
  m='830200'>6,</span> <span m='833040'>which</span> <span m='833220'>is</span>
  <span m='833330'>30.</span> <span m='835170'>OK.</span> <span
  m='836350'>So</span> <span m='836500'>there's</span> <span
  m='836730'>your</span> <span m='836860'>answer</span> <span
  m='837200'>for</span> <span m='837320'>the</span> <span
  m='837400'>second</span> <span m='837750'>part.</span> </p><p><span
  m='838250'>Now</span> <span m='838350'>one</span> <span
  m='838630'>thing</span> <span m='838850'>I'd</span> <span
  m='838980'>like</span> <span m='839170'>you</span> <span m='839260'>to</span>
  <span m='839450'>notice</span> <span m='839930'>is</span> <span
  m='840160'>that</span> <span m='840270'>over</span> <span
  m='840480'>this</span> <span m='840690'>curve</span> <span m='841120'>C</span>
  <span m='841490'>in</span> <span m='841650'>part</span> <span
  m='841960'>b--</span> <span m='843150'>over</span> <span m='843360'>the</span>
  <span m='843430'>whole</span> <span m='843680'>curve</span> <span
  m='843880'>in</span> <span m='844080'>part</span> <span m='844450'>b--</span>
  <span m='845060'>we</span> <span m='845210'>got</span> <span
  m='845730'>that</span> <span m='845890'>the</span> <span
  m='846030'>integral</span> <span m='846540'>of</span> <span
  m='846710'>this</span> <span m='847010'>field</span> <span m='847530'>F</span>
  <span m='848600'>was</span> <span m='848780'>30.</span> <span
  m='849645'>And</span> <span m='850100'>now</span> <span m='850330'>if</span>
  <span m='850420'>you</span> <span m='850500'>remember,</span> <span
  m='852580'>right</span> <span m='852980'>here,</span> <span
  m='853550'>in</span> <span m='853690'>the</span> <span m='853760'>first</span>
  <span m='854090'>part,</span> <span m='854290'>in</span> <span
  m='854400'>part</span> <span m='854670'>a,</span> <span m='855310'>we</span>
  <span m='855490'>computed</span> <span m='856350'>the</span> <span
  m='856520'>integral</span> <span m='856950'>over</span> <span
  m='857090'>a</span> <span m='857230'>different</span> <span
  m='857640'>curve</span> <span m='859200'>that</span> <span
  m='859340'>connected</span> <span m='859790'>the</span> <span
  m='859910'>two</span> <span m='860130'>same</span> <span
  m='860500'>endpoints.</span> <span m='861340'>And</span> <span
  m='861500'>we</span> <span m='861590'>found</span> <span
  m='861980'>that</span> <span m='862070'>the</span> <span
  m='862370'>integral</span> <span m='863030'>came</span> <span
  m='863250'>out</span> <span m='863370'>to</span> <span m='863480'>32.</span>
  </p><p><span m='864300'>So</span> <span m='864470'>one</span> <span
  m='864690'>thing</span> <span m='864850'>you</span> <span
  m='864940'>should</span> <span m='865140'>take</span> <span
  m='865340'>away</span> <span m='865560'>from</span> <span
  m='865750'>this</span> <span m='866160'>is</span> <span m='866370'>that</span>
  <span m='866490'>the</span> <span m='866770'>integral</span> <span
  m='867300'>over</span> <span m='867485'>a</span> <span m='867670'>curve</span>
  <span m='868150'>joining</span> <span m='868490'>two</span> <span
  m='868630'>points</span> <span m='869190'>can</span> <span
  m='869340'>depend</span> <span m='869900'>on</span> <span
  m='870070'>which</span> <span m='870310'>curve</span> <span
  m='871140'>you</span> <span m='871250'>choose,</span> <span
  m='871730'>right?</span> <span m='872200'>So</span> <span m='872630'>we</span>
  <span m='872730'>had</span> <span m='872860'>two</span> <span
  m='873030'>different</span> <span m='873310'>curves</span> <span
  m='873500'>and</span> <span m='873690'>we</span> <span m='873770'>got</span>
  <span m='873980'>two</span> <span m='874140'>different</span> <span
  m='874440'>answers,</span> <span m='875010'>even</span> <span
  m='875380'>though</span> <span m='875510'>the</span> <span
  m='875620'>two</span> <span m='875790'>curves</span> <span
  m='876150'>connected</span> <span m='876620'>the</span> <span
  m='876700'>same</span> <span m='876960'>points.</span> <span
  m='877920'>So</span> <span m='878010'>that's</span> <span
  m='878230'>interesting.</span> </p><p><span m='879190'>And</span> <span
  m='879300'>the</span> <span m='879370'>other</span> <span
  m='879540'>thing</span> <span m='879720'>to</span> <span
  m='879820'>take</span> <span m='880010'>away</span> <span
  m='880170'>from</span> <span m='880340'>this</span> <span m='880480'>is</span>
  <span m='880610'>just</span> <span m='880810'>the</span> <span
  m='880890'>general</span> <span m='881330'>approach.</span> <span
  m='882190'>Which</span> <span m='882510'>is</span> <span
  m='883700'>that</span> <span m='884090'>whenever</span> <span
  m='884550'>you</span> <span m='884710'>have</span> <span m='885610'>a</span>
  <span m='886990'>problem</span> <span m='887460'>like</span> <span
  m='887680'>this,</span> <span m='887920'>what</span> <span
  m='888080'>you</span> <span m='888160'>want</span> <span m='888270'>to</span>
  <span m='888380'>do</span> <span m='888890'>is</span> <span
  m='889000'>you</span> <span m='889070'>want to</span> <span
  m='889230'>take</span> <span m='889500'>your</span> <span
  m='889630'>curve--</span> <span m='890430'>so</span> <span
  m='890650'>whether</span> <span m='891070'>it</span> <span
  m='891360'>be--</span> <span m='892320'>well,</span> <span
  m='892530'>in</span> <span m='892620'>part</span> <span m='892940'>a</span>
  <span m='893365'>we</span> <span m='893450'>had</span> <span
  m='893830'>this</span> <span m='894900'>straight line,</span> <span
  m='896360'>slanted</span> <span m='896730'>line.</span> <span
  m='897640'>In</span> <span m='897860'>part</span> <span m='898450'>b</span>
  <span m='898750'>where</span> <span m='898825'>we</span> <span
  m='898900'>had</span> <span m='899130'>this</span> <span
  m='899320'>nice</span> <span m='899760'>piecewise</span> <span
  m='900460'>linear</span> <span m='900660'>with</span> <span
  m='900820'>these</span> <span m='901030'>vertical</span> <span
  m='901450'>and</span> <span m='901805'>horizontal</span> <span
  m='902480'>parts--</span> <span m='903060'>you</span> <span
  m='903160'>want</span> <span m='903385'>to</span> <span
  m='903610'>break</span> <span m='903950'>it</span> <span
  m='904050'>into</span> <span m='904190'>nice</span> <span
  m='904570'>pieces,</span> <span m='905330'>parametrize</span> <span
  m='906180'>them.</span> <span m='907280'>You</span> <span
  m='907360'>know,</span> <span m='907450'>sometimes</span> <span
  m='907910'>you</span> <span m='907980'>only</span> <span
  m='908140'>need</span> <span m='908300'>one</span> <span
  m='908580'>piece</span> <span m='908990'>when</span> <span
  m='909330'>it's</span> <span m='909600'>an</span> <span
  m='909870'>easy-to-parametrize</span> <span m='910880'>curve</span> <span
  m='911620'>like</span> <span m='911860'>that.</span> <span
  m='912770'>Sometimes,</span> <span m='913690'>if</span> <span
  m='913830'>it</span> <span m='913890'>has</span> <span
  m='914050'>corners</span> <span m='914530'>or</span> <span
  m='914670'>so</span> <span m='914830'>on,</span> <span m='914990'>you</span>
  <span m='915060'>might</span> <span m='915270'>want</span> <span
  m='915800'>more</span> <span m='915990'>pieces.</span> <span
  m='916700'>Break</span> <span m='916950'>it</span> <span
  m='917110'>into</span> <span m='917200'>pieces,</span> <span
  m='917550'>choose</span> <span m='917740'>a</span> <span
  m='917800'>nice</span> <span m='918030'>parametrization,</span> <span
  m='919000'>and</span> <span m='919220'>that</span> <span
  m='919380'>reduces</span> <span m='919800'>your</span> <span
  m='919920'>problem</span> <span m='920310'>just</span> <span
  m='920470'>to</span> <span m='920550'>computing</span> <span
  m='921010'>integrals,</span> <span m='921450'>just</span> <span
  m='921680'>like</span> <span m='921910'>we've</span> <span
  m='922080'>done</span> <span m='922310'>in</span> <span
  m='922870'>Calculus</span> <span m='923320'>I--</span> <span m='923560'>in
  18.01--</span> <span m='926370'>and</span> <span m='926590'>then</span> <span
  m='926720'>you</span> <span m='926840'>just</span> <span
  m='927080'>integrate.</span> </p><p><span m='928620'>All</span> <span
  m='928815'>right.</span> <span m='929400'>I'll</span> <span
  m='929570'>end</span> <span m='929770'>there.</span> </p>
embedded_media:
  - uid: 5a5b255dc1bc1b245318f16a08f54570
    parent_uid: f6d451e903f45c2d8db0ab9bcefc2818
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: gBuIwfdoOn0
  - uid: 7a17fc24dfa0d7c258d860beafbd9d5f
    parent_uid: f6d451e903f45c2d8db0ab9bcefc2818
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/gBuIwfdoOn0/default.jpg'
  - uid: e2892b7bbfe08b101232756621e72eae
    parent_uid: f6d451e903f45c2d8db0ab9bcefc2818
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18_02SCF10/MIT18_02SCF10Rec_39_300k.mp4'
  - uid: 8a165fb516e92756876c04d30f73f083
    parent_uid: f6d451e903f45c2d8db0ab9bcefc2818
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: >-
      http://itunes.apple.com/us/podcast/line-integrals-path-dependence/id414355340?i=90322865
  - uid: eae4c71fed22c7c601cf2dcb8cd8caad
    parent_uid: f6d451e903f45c2d8db0ab9bcefc2818
    id: 3Play-3PlayYouTubeid-PDF
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: gBuIwfdoOn0
  - uid: 45d42413f2a758ccc13a0934dd0cf615
    parent_uid: f6d451e903f45c2d8db0ab9bcefc2818
    id: gBuIwfdoOn0.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/3.-double-integrals-and-line-integrals-in-the-plane/part-b-vector-fields-and-line-integrals/session-57-work-and-line-integrals/line-integrals-path-dependence/gBuIwfdoOn0.srt
  - uid: a7a8d462305846459a12626260a723bd
    parent_uid: f6d451e903f45c2d8db0ab9bcefc2818
    id: gBuIwfdoOn0.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/3.-double-integrals-and-line-integrals-in-the-plane/part-b-vector-fields-and-line-integrals/session-57-work-and-line-integrals/line-integrals-path-dependence/gBuIwfdoOn0.pdf
  - uid: 59c4bd80b06ce5c55d1d6bbd02559bc0
    parent_uid: f6d451e903f45c2d8db0ab9bcefc2818
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 04010e112cbc3f6eca9ad5a577f04624
    parent_uid: f6d451e903f45c2d8db0ab9bcefc2818
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
