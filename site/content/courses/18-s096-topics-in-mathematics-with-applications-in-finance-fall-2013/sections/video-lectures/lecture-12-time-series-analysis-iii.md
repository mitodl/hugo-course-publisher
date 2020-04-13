---
title: 'Lecture 12: Time Series Analysis III'
uid: d8295c9bdbbc5b8c18c0fc46e131bd6c
parent_uid: d23a85587c0c7524ea054e655c999532
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-12-time-series-analysis-iii
short_url: lecture-12-time-series-analysis-iii
inline_embed_id: '46458272lecture12:timeseriesanalysisiii49967010'
about_this_resource_text: >-
  <p><strong>Description:</strong> This is the last of three lectures
  introducing the topic of time series analysis, describing cointegration,
  cointegrated VAR models, linear state-space models, and Kalman filters.</p>
  <p><strong>Instructor:</strong> Dr. Peter Kempthorne</p>
related_resources_text: ''
transcript: >-
  <p><span m='90'>The</span> <span m='190'>following</span> <span
  m='630'>content</span> <span m='1220'>is</span> <span m='1340'>provided</span>
  <span m='1780'>under</span> <span m='2060'>a</span> <span
  m='2100'>Creative</span> <span m='2500'>Commons</span> <span
  m='2910'>license.</span> <span m='4019'>Your</span> <span
  m='4210'>support</span> <span m='4710'>will</span> <span m='4870'>help</span>
  <span m='5110'>MIT</span> <span m='5570'>OpenCourseWare</span> <span
  m='6360'>continue</span> <span m='6870'>to</span> <span m='6950'>offer</span>
  <span m='7360'>high-quality</span> <span m='8119'>educational</span> <span
  m='8750'>resources</span> <span m='9370'>for</span> <span
  m='9520'>free.</span> <span m='10730'>To</span> <span m='10830'>make</span>
  <span m='10940'>a</span> <span m='10980'>donation</span> <span
  m='11670'>or</span> <span m='11940'>view</span> <span
  m='12380'>additional</span> <span m='12800'>materials</span> <span
  m='13330'>from</span> <span m='13490'>hundreds</span> <span
  m='13920'>of</span> <span m='14030'>MIT</span> <span m='14460'>courses,</span>
  <span m='15560'>visit</span> <span m='15780'>MIT</span> <span
  m='16210'>OpenCourseWare</span> <span m='17260'>at</span> <span
  m='17420'>ocw.mit.edu.</span> </p><p><span m='21650'>PROFESSOR: We</span>
  <span m='22210'>introduced</span> <span m='22870'>the</span> <span
  m='23210'>data</span> <span m='23520'>last</span> <span m='23830'>time.</span>
  <span m='24030'>These</span> <span m='24210'>were</span> <span
  m='24370'>some</span> <span m='24590'>macroeconomic</span> <span
  m='25620'>variables</span> <span m='27700'>that</span> <span
  m='28010'>can</span> <span m='28180'>be</span> <span m='28280'>used</span>
  <span m='28650'>for</span> <span m='29240'>forecasting</span> <span
  m='30200'>the</span> <span m='30350'>economy</span> <span m='31690'>in</span>
  <span m='31770'>terms</span> <span m='32030'>of</span> <span
  m='32159'>growth</span> <span m='33990'>and</span> <span
  m='34630'>factors</span> <span m='35210'>such</span> <span m='35390'>as</span>
  <span m='35910'>inflation</span> <span m='36810'>or</span> <span
  m='37090'>unemployment.</span> <span m='39330'>The</span> <span m='41880'>case
  note</span> <span m='42300'>goes</span> <span m='42590'>through</span> <span
  m='42840'>analyzing</span> <span m='43420'>just</span> <span
  m='43670'>three</span> <span m='44020'>of</span> <span m='44120'>these</span>
  <span m='44570'>economic</span> <span m='45070'>time</span> <span
  m='45360'>series--</span> <span m='46630'>the</span> <span
  m='46860'>unemployment</span> <span m='47460'>rate,</span> <span
  m='47690'>the</span> <span m='47770'>federal</span> <span
  m='48090'>funds</span> <span m='48490'>rate,</span> <span m='49320'>and</span>
  <span m='50000'>a</span> <span m='50100'>measure of</span> <span
  m='50430'>the</span> <span m='50560'>CPI,</span> <span m='51360'>or</span>
  <span m='51490'>Consumer</span> <span m='51870'>Price</span> <span
  m='52230'>Index.</span> </p><p><span m='56450'>When</span> <span
  m='56700'>one</span> <span m='56900'>fits</span> <span m='59030'>vector</span>
  <span m='59490'>autoregression</span> <span m='60130'>model</span> <span
  m='60520'>to</span> <span m='60640'>this</span> <span m='60940'>data,</span>
  <span m='63500'>it</span> <span m='63750'>turns</span> <span
  m='64129'>out</span> <span m='64760'>that</span> <span m='66110'>the</span>
  <span m='68130'>roots</span> <span m='68940'>of</span> <span
  m='69210'>the</span> <span m='69820'>characteristic</span> <span
  m='70480'>polynomial</span> <span m='73090'>are</span> <span
  m='73390'>1.002,</span> <span m='74800'>then</span> <span
  m='74960'>0.9863.</span> <span m='76800'>And</span> <span m='76970'>you</span>
  <span m='77110'>recall</span> <span m='77700'>when</span> <span
  m='77850'>our</span> <span m='77980'>discussion</span> <span
  m='78490'>of</span> <span m='78700'>vector</span> <span
  m='79090'>autoregressive</span> <span m='79910'>models,</span> <span
  m='81070'>there's</span> <span m='81320'>a</span> <span
  m='81450'>characteristic</span> <span m='82150'>equation</span> <span
  m='83140'>sort of</span> <span m='83410'>in</span> <span
  m='83520'>matrix</span> <span m='84000'>form,</span> <span
  m='84840'>the</span> <span m='85280'>determinant is</span> <span
  m='85860'>just</span> <span m='86120'>like</span> <span m='86610'>the</span>
  <span m='87390'>univariate</span> <span m='88000'>autoregressive</span> <span
  m='88760'>case.</span> <span m='89720'>And</span> <span m='91200'>in</span>
  <span m='91380'>order</span> <span m='91680'>for</span> <span
  m='92030'>the</span> <span m='92150'>process</span> <span m='92690'>to</span>
  <span m='92780'>be</span> <span m='93030'>invertible,</span> <span
  m='96440'>basically,</span> <span m='104120'>the roots</span> <span
  m='104240'>of</span> <span m='104660'>the</span> <span
  m='104910'>characteristic</span> <span m='105640'>polynomial</span> <span
  m='106150'>need</span> <span m='106380'>to</span> <span m='106450'>be</span>
  <span m='107540'>less</span> <span m='107870'>than</span> <span
  m='108390'>1</span> <span m='108820'>in</span> <span
  m='108980'>magnitude.</span> </p><p><span m='110370'>In</span> <span
  m='110590'>this</span> <span m='111400'>implementation</span> <span
  m='112270'>of</span> <span m='112610'>the</span> <span
  m='112770'>vector</span> <span m='113060'>autoregression</span> <span
  m='113510'>model,</span> <span m='114110'>the</span> <span
  m='114230'>characteristic</span> <span m='114840'>roots</span> <span
  m='115650'>are</span> <span m='116510'>the</span> <span
  m='116820'>inverses</span> <span m='117220'>of</span> <span
  m='117280'>the</span> <span m='117360'>characteristic</span> <span
  m='117930'>roots</span> <span m='118060'>that</span> <span
  m='118200'>we've</span> <span m='118380'>been</span> <span
  m='118490'>discussing.</span> <span m='119620'>So</span> <span
  m='120110'>anyway,</span> <span m='120470'>this</span> <span
  m='120880'>particular</span> <span m='122610'>fit</span> <span
  m='122820'>of</span> <span m='122910'>the</span> <span
  m='122970'>vector</span> <span m='123260'>autoregression</span> <span
  m='123770'>model</span> <span m='124040'>suggests</span> <span
  m='124580'>that</span> <span m='124810'>the</span> <span
  m='126380'>process</span> <span m='127950'>is</span> <span
  m='128940'>non-stationary.</span> <span m='131370'>And</span> <span
  m='131630'>so</span> <span m='135770'>one</span> <span
  m='135980'>should</span> <span m='136200'>be</span> <span
  m='136340'>considering</span> <span m='136920'>different</span> <span
  m='137280'>series</span> <span m='137580'>to</span> <span
  m='137700'>model</span> <span m='138080'>this</span> <span
  m='138290'>as</span> <span m='138430'>a</span> <span
  m='138490'>stationary</span> <span m='139070'>time</span> <span
  m='139380'>series.</span> </p><p><span m='140400'>But</span> <span
  m='140610'>in</span> <span m='140790'>terms</span> <span m='141140'>of</span>
  <span m='141810'>interpreting</span> <span m='143130'>the</span> <span
  m='144460'>regression</span> <span m='145010'>model,</span> <span
  m='146520'>one</span> <span m='146730'>can</span> <span
  m='146900'>see--</span> <span m='153090'>to</span> <span
  m='153240'>accommodate</span> <span m='153830'>the</span> <span
  m='154840'>non-stationarity,</span> <span m='156320'>we</span> <span
  m='156550'>can</span> <span m='158010'>take</span> <span
  m='158320'>differences</span> <span m='159110'>of</span> <span
  m='159270'>all</span> <span m='159440'>the</span> <span
  m='159530'>series</span> <span m='161020'>and</span> <span
  m='162020'>fit</span> <span m='162330'>the</span> <span
  m='162400'>vector</span> <span m='162700'>autoregressive</span> <span
  m='163360'>to</span> <span m='163580'>the</span> <span
  m='163730'>difference</span> <span m='164240'>series.</span> <span
  m='165550'>So</span> <span m='165770'>one</span> <span m='165990'>way</span>
  <span m='166130'>of</span> <span m='166230'>eliminating</span> <span
  m='166800'>any</span> <span m='167420'>non-stationarity</span> <span
  m='168380'>and</span> <span m='168610'>time</span> <span
  m='168890'>series</span> <span m='169210'>models,</span> <span
  m='170760'>basically</span> <span m='171075'>and</span> <span
  m='171390'>eliminate</span> <span m='171770'>the</span> <span
  m='171870'>random</span> <span m='172210'>walk</span> <span
  m='172810'>aspect</span> <span m='173360'>of</span> <span
  m='173440'>the</span> <span m='173560'>processes</span> <span
  m='174260'>is</span> <span m='174380'>to</span> <span m='174760'>be</span>
  <span m='174890'>modeling</span> <span m='175560'>first</span> <span
  m='175850'>differences.</span> </p><p><span m='177290'>And</span> <span
  m='177440'>so</span> <span m='178620'>doing</span> <span
  m='178880'>that</span> <span m='179140'>with</span> <span
  m='179300'>this</span> <span m='179410'>series--</span> <span
  m='185810'>let's</span> <span m='185970'>see.</span> <span
  m='186180'>Here</span> <span m='186390'>is</span> <span m='186480'>just</span>
  <span m='186750'>a</span> <span m='186960'>graph</span> <span
  m='187370'>of</span> <span m='187540'>the</span> <span m='187680'>time</span>
  <span m='188000'>series</span> <span m='189030'>properties</span> <span
  m='190220'>of</span> <span m='190430'>the</span> <span
  m='190540'>different</span> <span m='191440'>series.</span> <span
  m='195210'>So</span> <span m='195350'>with our</span> <span
  m='195660'>original</span> <span m='196000'>series,</span> <span
  m='196500'>we</span> <span m='196640'>take</span> <span
  m='196900'>differences</span> <span m='198090'>and</span> <span
  m='198280'>eliminate</span> <span m='199180'>missing</span> <span
  m='199550'>values</span> <span m='200230'>in</span> <span
  m='200370'>this</span> <span m='200830'>r</span> <span m='201130'>code.</span>
  <span m='202820'>And</span> <span m='203770'>this</span> <span
  m='204090'>autocorrelation</span> <span m='204950'>function</span> <span
  m='205300'>shows</span> <span m='205770'>us</span> <span
  m='206910'>basically</span> <span m='208110'>the</span> <span
  m='210290'>correlations</span> <span m='211100'>and</span> <span
  m='211320'>auto</span> <span m='211610'>correlations</span> <span
  m='212140'>of</span> <span m='212230'>individual</span> <span
  m='212710'>series</span> <span m='213420'>and</span> <span
  m='213730'>the</span> <span m='213840'>cross</span> <span
  m='214250'>correlations</span> <span m='215010'>across</span> <span
  m='215440'>the</span> <span m='215510'>different</span> <span
  m='215820'>series.</span> </p><p><span m='216950'>So</span> <span
  m='217210'>along</span> <span m='217530'>the</span> <span
  m='217610'>diagonals</span> <span m='218640'>are</span> <span
  m='219190'>the</span> <span m='219460'>autocorrelation</span> <span
  m='220280'>function.</span> <span m='221680'>And</span> <span
  m='221900'>one</span> <span m='222070'>can</span> <span m='222230'>see</span>
  <span m='222510'>that</span> <span m='222970'>every</span> <span
  m='223390'>series</span> <span m='223800'>is</span> <span
  m='224200'>correlation</span> <span m='224680'>one</span> <span
  m='224970'>with</span> <span m='225120'>itself.</span> <span
  m='227280'>But</span> <span m='227410'>then</span> <span m='227580'>at</span>
  <span m='227780'>the</span> <span m='227880'>first</span> <span
  m='228580'>lag</span> <span m='230480'>positive</span> <span
  m='231160'>for</span> <span m='232010'>the</span> <span m='232110'>Fed</span>
  <span m='232380'>funds</span> <span m='232840'>and</span> <span
  m='233090'>the</span> <span m='233180'>CPI</span> <span
  m='233860'>measured.</span> <span m='236450'>And</span> <span
  m='237080'>there's</span> <span m='237340'>also</span> <span
  m='237620'>some</span> <span m='237820'>cross</span> <span
  m='238210'>correlations</span> <span m='238980'>that</span> <span
  m='239520'>are</span> <span m='240360'>strong.</span> <span
  m='241550'>And</span> <span m='242200'>whether</span> <span
  m='242510'>or</span> <span m='242560'>not</span> <span m='242770'>a</span>
  <span m='242820'>correlation</span> <span m='243350'>is</span> <span
  m='243450'>strong</span> <span m='243860'>or</span> <span
  m='243920'>not</span> <span m='244180'>depends</span> <span
  m='244560'>upon</span> <span m='244980'>how</span> <span
  m='245150'>much</span> <span m='245370'>uncertainty</span> <span
  m='245950'>there is</span> <span m='246300'>in</span> <span
  m='246520'>our</span> <span m='246590'>estimate of the</span> <span
  m='246930'>correlation.</span> </p><p><span m='248250'>And</span> <span
  m='249040'>these</span> <span m='249470'>dashed</span> <span
  m='250000'>lines</span> <span m='250520'>here</span> <span
  m='250920'>correspond</span> <span m='251750'>to</span> <span
  m='252940'>plus</span> <span m='253230'>or</span> <span
  m='253280'>minus</span> <span m='253660'>two</span> <span
  m='253870'>standard</span> <span m='254300'>deviations</span> <span
  m='255730'>of</span> <span m='256200'>the</span> <span
  m='256320'>correlation</span> <span m='256980'>coefficient</span> <span
  m='258440'>when</span> <span m='259450'>the</span> <span
  m='259589'>correlation</span> <span m='260110'>coefficient</span> <span
  m='260940'>is</span> <span m='261310'>equal</span> <span m='261519'>to</span>
  <span m='261589'>0.</span> <span m='263440'>So</span> <span
  m='264130'>any</span> <span m='264340'>correlations</span> <span
  m='264960'>that</span> <span m='265160'>sort</span> <span m='265300'>of</span>
  <span m='266420'>go</span> <span m='266580'>beyond</span> <span
  m='266940'>those</span> <span m='267130'>bounds</span> <span
  m='268470'>is</span> <span m='268690'>statistically</span> <span
  m='269280'>significant.</span> <span m='273180'>The</span> <span
  m='273660'>partial</span> <span m='274260'>autocorrelation</span> <span
  m='275210'>function</span> <span m='276790'>is</span> <span
  m='277170'>graphed</span> <span m='277770'>here.</span> </p><p><span
  m='279210'>And</span> <span m='280730'>let's</span> <span
  m='280880'>say</span> <span m='280980'>our</span> <span m='281890'>time</span>
  <span m='282200'>series</span> <span m='282540'>problem set</span> <span
  m='283080'>goes</span> <span m='283340'>through</span> <span
  m='284310'>some</span> <span m='284490'>discussion</span> <span
  m='284920'>of</span> <span m='284980'>the</span> <span
  m='285060'>partial</span> <span m='285470'>autoregressive</span> <span
  m='286040'>coefficients</span> <span m='286315'>and</span> <span
  m='286590'>the</span> <span m='286750'>interpretation</span> <span
  m='287530'>of</span> <span m='287650'>those.</span> <span
  m='288600'>The</span> <span m='288720'>partial</span> <span
  m='289130'>autoregressive</span> <span m='289930'>coefficients</span> <span
  m='291910'>are</span> <span m='292700'>the</span> <span
  m='293960'>correlation</span> <span m='295170'>between</span> <span
  m='296570'>one</span> <span m='296910'>variable</span> <span
  m='297450'>and</span> <span m='297630'>the</span> <span m='297720'>lag</span>
  <span m='298020'>of</span> <span m='298090'>another</span> <span
  m='298500'>after</span> <span m='298860'>explaining</span> <span
  m='299330'>for</span> <span m='299540'>all</span> <span
  m='300040'>lower</span> <span m='300850'>degree</span> <span
  m='301220'>lags.</span> <span m='302110'>So</span> <span
  m='302320'>it's</span> <span m='302440'>like</span> <span
  m='302600'>the</span> <span m='302760'>incremental</span> <span
  m='304660'>correlation</span> <span m='305690'>of</span> <span
  m='305820'>a</span> <span m='305900'>variable</span> <span
  m='306480'>with</span> <span m='306660'>a</span> <span m='306720'>lag</span>
  <span m='307090'>term</span> <span m='308030'>that</span> <span
  m='309820'>exists.</span> </p><p><span m='310760'>And</span> <span
  m='310960'>so</span> <span m='311160'>if</span> <span m='311340'>we</span>
  <span m='311660'>actually</span> <span m='312090'>fitting</span> <span
  m='312450'>regression</span> <span m='312990'>models</span> <span
  m='313670'>where</span> <span m='313830'>we</span> <span
  m='313930'>include</span> <span m='314360'>extra</span> <span
  m='314770'>lags</span> <span m='315480'>of</span> <span m='317150'>a</span>
  <span m='317260'>given</span> <span m='317540'>variable,</span> <span
  m='318460'>that</span> <span m='318700'>partial</span> <span
  m='319080'>lot</span> <span m='319260'>of</span> <span
  m='319330'>correlation</span> <span m='319850'>coefficient</span> <span
  m='320570'>is</span> <span m='321400'>essentially</span> <span
  m='321710'>the</span> <span m='321830'>correlation</span> <span
  m='323510'>associated</span> <span m='324100'>with</span> <span
  m='324560'>the</span> <span m='324800'>addition</span> <span
  m='325260'>of</span> <span m='325520'>the</span> <span m='326050'>final</span>
  <span m='326430'>lagged</span> <span m='326750'>variable.</span> <span
  m='327620'>So</span> <span m='327660'>here,</span> <span m='327860'>we</span>
  <span m='327950'>can</span> <span m='328110'>see</span> <span
  m='328330'>that</span> <span m='329230'>each</span> <span m='329480'>of</span>
  <span m='329590'>these</span> <span m='329800'>series</span> <span
  m='330230'>is</span> <span m='330360'>quite</span> <span
  m='330630'>strongly</span> <span m='331780'>correlated</span> <span
  m='332430'>with</span> <span m='332600'>itself.</span> <span
  m='333950'>But</span> <span m='334080'>there</span> <span
  m='334180'>are</span> <span m='334260'>also</span> <span
  m='335100'>some</span> <span m='335680'>cross</span> <span
  m='336090'>correlations</span> <span m='337470'>with,</span> <span
  m='338070'>like,</span> <span m='338550'>the</span> <span
  m='338800'>unemployment</span> <span m='339460'>rate</span> <span
  m='340240'>and</span> <span m='340430'>the</span> <span m='340500'>Fed</span>
  <span m='340830'>funds</span> <span m='341200'>rate.</span> </p><p><span
  m='342750'>Basically,</span> <span m='344970'>the</span> <span
  m='345150'>Fed</span> <span m='345450'>funds</span> <span
  m='345750'>rate</span> <span m='346360'>tends</span> <span
  m='346700'>to</span> <span m='346890'>go</span> <span m='347180'>down</span>
  <span m='347750'>when</span> <span m='347910'>the</span> <span
  m='348020'>unemployment</span> <span m='348600'>rate</span> <span
  m='348840'>goes</span> <span m='349120'>up.</span> <span m='350400'>And</span>
  <span m='350590'>so</span> <span m='350760'>this</span> <span
  m='351360'>data</span> <span m='351620'>is</span> <span
  m='351850'>indicating</span> <span m='353270'>the</span> <span
  m='353580'>association</span> <span m='354610'>between</span> <span
  m='355070'>these</span> <span m='355270'>macroeconomic</span> <span
  m='356070'>variables</span> <span m='356640'>and the</span> <span
  m='356810'>evidence</span> <span m='357610'>of</span> <span
  m='357770'>that</span> <span m='357990'>behavior.</span> <span
  m='359100'>In</span> <span m='359270'>terms</span> <span m='359560'>of</span>
  <span m='359670'>modeling</span> <span m='360300'>the</span> <span
  m='360570'>actual</span> <span m='360900'>structural</span> <span
  m='361470'>relations</span> <span m='362100'>between</span> <span
  m='362390'>these,</span> <span m='362540'>we</span> <span
  m='362700'>need</span> <span m='363930'>several,</span> <span
  m='364670'>up</span> <span m='364880'>to</span> <span m='365000'>about</span>
  <span m='365320'>10</span> <span m='365930'>or</span> <span
  m='366060'>12</span> <span m='366420'>variables</span> <span
  m='366890'>more</span> <span m='367130'>than</span> <span
  m='367250'>these</span> <span m='367540'>three.</span> <span
  m='368380'>And</span> <span m='368640'>then</span> <span m='369270'>one</span>
  <span m='369560'>can</span> <span m='370060'>have</span> <span
  m='370210'>a</span> <span m='370260'>better</span> <span
  m='370510'>understanding</span> <span m='372710'>of</span> <span
  m='372810'>the</span> <span m='372820'>drivers</span> <span
  m='373400'>of</span> <span m='373720'>various</span> <span
  m='374070'>macroeconomic</span> <span m='375000'>features.</span> </p><p><span
  m='375840'>But</span> <span m='375970'>this</span> <span
  m='376220'>sort</span> <span m='376350'>of</span> <span
  m='376420'>illustrates</span> <span m='376960'>the</span> <span
  m='377040'>use</span> <span m='377250'>of</span> <span m='377330'>these</span>
  <span m='377520'>methods</span> <span m='378050'>with</span> <span
  m='378690'>this</span> <span m='378890'>reduced</span> <span
  m='379250'>variable</span> <span m='379650'>case.</span> <span
  m='382830'>Let</span> <span m='382980'>me</span> <span m='383200'>also</span>
  <span m='383850'>go</span> <span m='383980'>down</span> <span
  m='384330'>here</span> <span m='384690'>and</span> <span
  m='384790'>just</span> <span m='385650'>comment</span> <span
  m='386210'>on</span> <span m='388060'>the</span> <span
  m='388240'>unemployment</span> <span m='389140'>rate</span> <span
  m='392640'>or</span> <span m='392660'>the</span> <span m='392770'>Fed</span>
  <span m='393070'>funds</span> <span m='393420'>rate.</span> <span
  m='406050'>When</span> <span m='406470'>fitting</span> <span
  m='406870'>these</span> <span m='407160'>vector</span> <span
  m='407490'>autoregressive</span> <span m='408070'>models</span> <span
  m='408460'>with</span> <span m='409320'>the</span> <span
  m='409780'>packages</span> <span m='410240'>that</span> <span
  m='410370'>exist</span> <span m='410740'>in</span> <span m='410890'>R,</span>
  <span m='412070'>they</span> <span m='412220'>give</span> <span
  m='412600'>us</span> <span m='412930'>output</span> <span
  m='414040'>which</span> <span m='414460'>provides</span> <span
  m='415190'>the</span> <span m='415310'>specification</span> <span
  m='416320'>of</span> <span m='416490'>each</span> <span m='416930'>of</span>
  <span m='417400'>the</span> <span m='419730'>autoregressive</span> <span
  m='420940'>models</span> <span m='421440'>for</span> <span
  m='421600'>the</span> <span m='421780'>different</span> <span
  m='422700'>dependent</span> <span m='423270'>variables,</span> <span
  m='423830'>the</span> <span m='423860'>different</span> <span
  m='424160'>series</span> <span m='425260'>of</span> <span
  m='426920'>the</span> <span m='427000'>process.</span> </p><p><span
  m='427620'>And</span> <span m='427780'>so</span> <span m='429300'>here</span>
  <span m='430060'>is</span> <span m='430220'>the</span> <span
  m='430310'>case</span> <span m='430920'>of</span> <span m='431180'>the</span>
  <span m='431640'>regression</span> <span m='432210'>model</span> <span
  m='432530'>for</span> <span m='432820'>Fed</span> <span
  m='433170'>funds</span> <span m='433610'>as</span> <span m='433740'>a</span>
  <span m='433800'>function</span> <span m='434170'>of</span> <span
  m='434270'>unemployment</span> <span m='434900'>rate</span> <span
  m='436840'>lagged,</span> <span m='437720'>Fed</span> <span
  m='437980'>funds</span> <span m='438360'>rate</span> <span
  m='438670'>lagged,</span> <span m='439410'>and</span> <span
  m='440190'>CPI</span> <span m='440730'>lagged.</span> <span
  m='441040'>These</span> <span m='441330'>are</span> <span
  m='441520'>all</span> <span m='441820'>on</span> <span m='441960'>the</span>
  <span m='442280'>different</span> <span m='442650'>scale.</span> </p><p><span
  m='445240'>When</span> <span m='445460'>you're</span> <span
  m='445620'>looking</span> <span m='445950'>at</span> <span
  m='446240'>these</span> <span m='446650'>results,</span> <span
  m='447430'>what's</span> <span m='447730'>important</span> <span
  m='448580'>is</span> <span m='449750'>basically</span> <span
  m='450030'>how</span> <span m='450920'>strong</span> <span
  m='451340'>the</span> <span m='451430'>signal</span> <span
  m='451770'>to</span> <span m='451910'>noise</span> <span
  m='452230'>ratio</span> <span m='452670'>is</span> <span m='452930'>for</span>
  <span m='453350'>estimating</span> <span m='453850'>these</span> <span
  m='455600'>autoregressive</span> <span m='456130'>parameters,</span> <span
  m='457300'>vector</span> <span m='457590'>autoregressive</span> <span
  m='458140'>parameters.</span> <span m='459130'>And</span> <span
  m='459330'>so</span> <span m='459540'>with</span> <span m='459660'>the</span>
  <span m='459740'>Fed</span> <span m='460080'>funds,</span> <span
  m='460470'>you</span> <span m='460570'>can</span> <span m='460670'>look</span>
  <span m='460820'>at</span> <span m='460900'>the t</span> <span
  m='461010'>values.</span> <span m='463540'>And</span> <span
  m='463840'>t</span> <span m='464020'>values</span> <span
  m='464410'>that</span> <span m='464520'>are</span> <span
  m='464620'>larger</span> <span m='465050'>than</span> <span
  m='465640'>2</span> <span m='465920'>are</span> <span
  m='466140'>certainly</span> <span m='467910'>quite</span> <span
  m='468210'>significant.</span> <span m='469210'>And</span> <span
  m='469660'>you</span> <span m='469770'>can</span> <span m='469900'>see</span>
  <span m='470150'>that</span> <span m='470890'>basically</span> <span
  m='471240'>when</span> <span m='471420'>the</span> <span
  m='471530'>unemployment</span> <span m='472280'>rate</span> <span
  m='473540'>coefficient</span> <span m='474130'>is</span> <span
  m='474240'>a</span> <span m='474320'>negative</span> <span
  m='474690'>0.71,</span> <span m='477920'>so</span> <span m='478300'>if</span>
  <span m='478560'>the</span> <span m='478700'>unemployment</span> <span
  m='479250'>rate</span> <span m='479500'>goes</span> <span
  m='479800'>up,</span> <span m='480710'>we</span> <span
  m='480830'>expect</span> <span m='481290'>to</span> <span
  m='481390'>see</span> <span m='481750'>the</span> <span m='481840'>Fed</span>
  <span m='482120'>rate</span> <span m='483060'>going</span> <span
  m='483850'>down</span> <span m='485270'>the</span> <span
  m='485380'>next</span> <span m='485710'>month.</span> </p><p><span
  m='487080'>And</span> <span m='488200'>the</span> <span m='488310'>Fed</span>
  <span m='488600'>funds</span> <span m='489110'>rate</span> <span
  m='489520'>for</span> <span m='490180'>the</span> <span m='491860'>lag</span>
  <span m='492110'>1</span> <span m='492410'>has</span> <span
  m='492700'>a</span> <span m='493150'>t</span> <span m='493330'>value</span>
  <span m='493570'>of</span> <span m='493640'>7.97.</span> <span
  m='495650'>So</span> <span m='496150'>these</span> <span m='496530'>are</span>
  <span m='496620'>now</span> <span m='496840'>models</span> <span
  m='497260'>on</span> <span m='497370'>the</span> <span
  m='497470'>differences.</span> <span m='498790'>So</span> <span
  m='498910'>if</span> <span m='499160'>the</span> <span m='499440'>Fed</span>
  <span m='499810'>funds</span> <span m='500170'>rate</span> <span
  m='500410'>was</span> <span m='500610'>increased</span> <span
  m='501480'>last</span> <span m='501870'>month</span> <span
  m='502970'>or</span> <span m='503030'>last</span> <span
  m='503340'>quarter,</span> <span m='504230'>it's</span> <span
  m='504450'>likely</span> <span m='504730'>to</span> <span m='504790'>be</span>
  <span m='504970'>increased</span> <span m='505390'>again.</span> <span
  m='505880'>And</span> <span m='506060'>that's</span> <span
  m='506730'>partly</span> <span m='508292'>a</span> <span
  m='508770'>factor</span> <span m='509320'>of</span> <span
  m='509860'>how</span> <span m='510050'>slow</span> <span m='510430'>the</span>
  <span m='510580'>economy</span> <span m='511180'>is</span> <span
  m='511560'>in</span> <span m='511670'>reacting</span> <span
  m='512220'>to</span> <span m='512330'>changes</span> <span
  m='512770'>and</span> <span m='512929'>how</span> <span m='513210'>the</span>
  <span m='513440'>Fed</span> <span m='513780'>doesn't</span> <span
  m='514049'>want</span> <span m='514330'>to</span> <span
  m='515830'>shock</span> <span m='516240'>the</span> <span
  m='516350'>economy</span> <span m='516960'>with</span> <span
  m='517870'>large</span> <span m='518340'>changes</span> <span
  m='518870'>in</span> <span m='519049'>their</span> <span
  m='519690'>policy</span> <span m='520200'>rates.</span> </p><p><span
  m='522909'>Another</span> <span m='525150'>thing</span> <span
  m='525370'>to</span> <span m='525430'>notice</span> <span
  m='525730'>here</span> <span m='525890'>is</span> <span m='526000'>that</span>
  <span m='526140'>there's</span> <span m='526310'>actually</span> <span
  m='526600'>a</span> <span m='526650'>negative</span> <span
  m='527620'>coefficient</span> <span m='528380'>on</span> <span
  m='528570'>the</span> <span m='529000'>lag</span> <span m='529410'>2</span>
  <span m='530230'>Fed</span> <span m='530510'>funds</span> <span
  m='531830'>term,</span> <span m='532235'>a</span> <span
  m='532640'>negative</span> <span m='532970'>0.17.</span> <span
  m='534490'>And</span> <span m='535950'>in</span> <span
  m='537140'>interpreting</span> <span m='537800'>these</span> <span
  m='538010'>kinds</span> <span m='538280'>of</span> <span
  m='538360'>models,</span> <span m='538870'>I</span> <span
  m='538970'>think</span> <span m='539070'>it's</span> <span
  m='539170'>helpful</span> <span m='540530'>just</span> <span
  m='541300'>to</span> <span m='541450'>think</span> <span m='542140'>of,</span>
  <span m='542510'>if</span> <span m='542740'>you</span> <span
  m='542830'>have</span> <span m='543040'>Fed funds</span> <span
  m='544330'>sub</span> <span m='544610'>t,</span> <span
  m='545910'>that's</span> <span m='546210'>equal</span> <span
  m='546460'>to</span> <span m='546580'>minus</span> <span
  m='547010'>0.71</span> <span m='548170'>times</span> <span
  m='549070'>the</span> <span m='549180'>unemployment</span> <span
  m='549890'>rate.</span> <span m='553068'>of t minus 1.</span> </p><p><span
  m='553970'>And</span> <span m='555030'>then</span> <span m='555270'>we</span>
  <span m='555470'>have</span> <span m='556270'>plus</span> <span
  m='556830'>0.37</span> <span m='559660'>times</span> <span
  m='560450'>the</span> <span m='560990'>Fed</span> <span
  m='561220'>funds,</span> <span m='562140'>so t</span> <span
  m='562870'>times</span> <span m='563120'>1.</span> <span m='564050'>And this
  is</span> <span m='564360'>delta.</span> <span m='564820'>And then</span>
  <span m='565050'>minus</span> <span m='565560'>1.8</span> <span
  m='568880'>times</span> <span m='569310'>the</span> <span
  m='569400'>Fed</span> <span m='569690'>funds.</span> <span
  m='571330'>So</span> <span m='571610'>t</span> <span m='571770'>minus</span>
  <span m='572180'>2.</span> </p><p><span m='575000'>In</span> <span
  m='575160'>interpreting</span> <span m='575900'>these</span> <span
  m='576300'>coefficients,</span> <span m='579290'>notice</span> <span
  m='579890'>that</span> <span m='580180'>these</span> <span
  m='580510'>two</span> <span m='580810'>terms</span> <span
  m='582040'>correspond</span> <span m='583020'>to</span> <span
  m='585100'>0.19</span> <span m='587690'>times</span> <span
  m='590340'>the</span> <span m='590470'>Fed</span> <span
  m='590800'>funds</span> <span m='591670'>change</span> <span
  m='592200'>1</span> <span m='592820'>lag</span> <span m='592990'>ago</span>
  <span m='593790'>plus</span> <span m='595520'>0.18</span> <span
  m='597110'>times</span> <span m='598200'>the</span> <span
  m='598300'>change</span> <span m='598860'>in</span> <span m='599190'>that
  rate.</span> <span m='603550'>So</span> <span m='603750'>when</span> <span
  m='603860'>you</span> <span m='603970'>see</span> <span
  m='604360'>multiple</span> <span m='605270'>lags</span> <span
  m='605830'>coming</span> <span m='606360'>into</span> <span
  m='606580'>play</span> <span m='606940'>in</span> <span
  m='607030'>these</span> <span m='607230'>models,</span> <span
  m='609870'>the</span> <span m='610190'>interpretation</span> <span
  m='611020'>of</span> <span m='611130'>them</span> <span m='611720'>can</span>
  <span m='612100'>be</span> <span m='613800'>made</span> <span
  m='614250'>by</span> <span m='614450'>considering</span> <span
  m='614920'>different</span> <span m='616760'>transformations</span> <span
  m='617560'>essentially</span> <span m='617970'>at</span> <span
  m='618060'>the</span> <span m='618110'>underlying</span> <span
  m='618470'>variables.</span> </p><p><span m='620210'>In</span> <span
  m='620400'>this</span> <span m='620650'>form,</span> <span
  m='621040'>you</span> <span m='621140'>can</span> <span m='621240'>see</span>
  <span m='621460'>that</span> <span m='621920'>OK,</span> <span
  m='622150'>the</span> <span m='622270'>Fed</span> <span
  m='622550'>funds</span> <span m='623130'>tends</span> <span
  m='625450'>to</span> <span m='625690'>change</span> <span
  m='626720'>the</span> <span m='626900'>way</span> <span m='627100'>it</span>
  <span m='627270'>changed</span> <span m='627660'>the</span> <span
  m='627760'>previous</span> <span m='628350'>month.</span> <span
  m='630180'>But</span> <span m='632380'>it</span> <span m='632570'>also</span>
  <span m='633410'>may</span> <span m='633730'>change</span> <span
  m='634950'>depending</span> <span m='635460'>on</span> <span
  m='636790'>the</span> <span m='638310'>double</span> <span
  m='638620'>change</span> <span m='639010'>in the</span> <span
  m='639120'>previous</span> <span m='639420'>month.</span> <span
  m='639560'>So</span> <span m='639690'>there's</span> <span m='639900'>a</span>
  <span m='639960'>degree</span> <span m='640230'>of</span> <span
  m='640320'>acceleration</span> <span m='641540'>in</span> <span
  m='641660'>the</span> <span m='641740'>Fed</span> <span
  m='642040'>funds</span> <span m='642620'>that</span> <span
  m='642990'>is</span> <span m='643150'>being</span> <span
  m='643340'>captured</span> <span m='643780'>here.</span> <span
  m='644450'>So</span> <span m='646110'>the</span> <span
  m='646250'>interpretation</span> <span m='646990'>of</span> <span
  m='647080'>these</span> <span m='647260'>models</span> <span
  m='647640'>sometimes</span> <span m='648290'>requires</span> <span
  m='648790'>some</span> <span m='649010'>care.</span> </p><p><span
  m='651930'>This</span> <span m='652100'>kind</span> <span m='652310'>of</span>
  <span m='652380'>analysis,</span> <span m='653910'>I</span> <span
  m='654050'>find</span> <span m='654430'>it</span> <span
  m='654820'>quite</span> <span m='655070'>useful.</span> <span
  m='662600'>So</span> <span m='662810'>let's</span> <span
  m='663900'>push</span> <span m='664270'>on</span> <span m='665020'>to</span>
  <span m='665860'>the</span> <span m='666990'>next</span> <span
  m='667350'>topic.</span> <span m='669710'>So</span> <span
  m='669850'>today's</span> <span m='670180'>topics</span> <span
  m='671290'>are</span> <span m='671350'>going</span> <span m='671660'>to</span>
  <span m='671890'>begin</span> <span m='672310'>with a</span> <span
  m='672690'>discussion</span> <span m='673230'>of</span> <span
  m='673360'>cointegration.</span> <span m='675640'>Cointegration</span> <span
  m='676330'>is</span> <span m='676440'>a</span> <span m='676490'>major</span>
  <span m='676870'>topic</span> <span m='677260'>in</span> <span
  m='677370'>time</span> <span m='677640'>series</span> <span
  m='677930'>analysis,</span> <span m='678570'>which</span> <span
  m='678980'>is</span> <span m='679130'>dealing</span> <span
  m='679510'>with</span> <span m='680240'>the</span> <span
  m='680340'>analysis</span> <span m='680770'>of</span> <span
  m='680870'>non</span> <span m='681190'>stationary</span> <span
  m='682540'>time</span> <span m='683000'>series.</span> </p><p><span
  m='683980'>And</span> <span m='684990'>in</span> <span m='685170'>the</span>
  <span m='685370'>previous</span> <span m='686450'>discussion,</span> <span
  m='687370'>we</span> <span m='688060'>addressed</span> <span
  m='688490'>non-stationarity</span> <span m='689410'>of</span> <span
  m='689480'>series</span> <span m='689910'>by</span> <span
  m='690070'>taking</span> <span m='690450'>first</span> <span
  m='690750'>differences</span> <span m='691950'>to</span> <span
  m='692110'>eliminate</span> <span m='692710'>that</span> <span
  m='692930'>non-stationarity.</span> <span m='696440'>But</span> <span
  m='697940'>we</span> <span m='698410'>may</span> <span m='698610'>be</span>
  <span m='698780'>losing</span> <span m='699180'>some</span> <span
  m='699360'>information</span> <span m='700140'>with</span> <span
  m='700380'>that</span> <span m='700620'>differencing.</span> <span
  m='701450'>And</span> <span m='702290'>cointegration</span> <span
  m='702980'>provides</span> <span m='703640'>a</span> <span
  m='704420'>framework</span> <span m='704940'>within</span> <span
  m='705200'>which</span> <span m='705910'>we</span> <span
  m='706220'>characterize</span> <span m='706770'>all</span> <span
  m='707020'>available</span> <span m='707440'>information</span> <span
  m='708270'>for</span> <span m='708590'>statistical</span> <span
  m='709110'>modeling,</span> <span m='709680'>in</span> <span
  m='709750'>a</span> <span m='709790'>very</span> <span
  m='710140'>systematic</span> <span m='710780'>way.</span> </p><p><span
  m='712920'>So</span> <span m='713440'>let's</span> <span
  m='714600'>introduce</span> <span m='716460'>the</span> <span
  m='716820'>context</span> <span m='717520'>within</span> <span
  m='717880'>which</span> <span m='718580'>cointegration</span> <span
  m='719470'>is</span> <span m='719650'>relevant.</span> <span
  m='720630'>It's</span> <span m='720950'>relevant</span> <span
  m='721410'>when</span> <span m='721790'>we</span> <span m='722270'>have</span>
  <span m='724230'>a</span> <span m='724680'>stochastic</span> <span
  m='725230'>process,</span> <span m='725810'>a</span> <span
  m='725870'>multivariate</span> <span m='726440'>stochastic</span> <span
  m='726970'>process,</span> <span m='728320'>which</span> <span
  m='728620'>is</span> <span m='728760'>integrated</span> <span
  m='729380'>of</span> <span m='729480'>some</span> <span
  m='729780'>order,</span> <span m='730840'>d.</span> <span
  m='732060'>And</span> <span m='733570'>to</span> <span m='733750'>be</span>
  <span m='733880'>integrated</span> <span m='734370'>to</span> <span
  m='734620'>order</span> <span m='735020'>d</span> <span
  m='735360'>means</span> <span m='735810'>that</span> <span
  m='735940'>if</span> <span m='736080'>we</span> <span m='736230'>take</span>
  <span m='736580'>the</span> <span m='736750'>d'th</span> <span
  m='737450'>difference,</span> <span m='738920'>then</span> <span
  m='739540'>that</span> <span m='739810'>d'th</span> <span
  m='740120'>difference</span> <span m='740690'>is</span> <span
  m='740990'>stationary.</span> </p><p><span m='743980'>So</span> <span
  m='745420'>and</span> <span m='746040'>if</span> <span m='749800'>you</span>
  <span m='749990'>look</span> <span m='750300'>at</span> <span
  m='750370'>a</span> <span m='750470'>time</span> <span
  m='750830'>series</span> <span m='753720'>and</span> <span
  m='755820'>you</span> <span m='755990'>plot</span> <span
  m='756330'>that</span> <span m='756520'>over</span> <span
  m='756690'>time,</span> <span m='757120'>well,</span> <span m='757540'>OK,
  a</span> <span m='757810'>stationary</span> <span m='758330'>time</span> <span
  m='758630'>series</span> <span m='759010'>we</span> <span
  m='759130'>know</span> <span m='759330'>should</span> <span
  m='759620'>be</span> <span m='759980'>something</span> <span
  m='760480'>that</span> <span m='762380'>basically</span> <span
  m='763010'>has</span> <span m='763220'>a</span> <span
  m='763290'>constant</span> <span m='763810'>mean</span> <span
  m='764050'>over</span> <span m='764300'>time.</span> <span
  m='765010'>There's</span> <span m='765200'>some</span> <span
  m='765850'>steady</span> <span m='766350'>mean</span> <span
  m='767420'>which</span> <span m='768090'>that</span> <span
  m='768310'>has.</span> <span m='768580'>And</span> <span m='768750'>the</span>
  <span m='768830'>variability</span> <span m='769590'>is</span> <span
  m='769760'>also</span> <span m='770110'>constant.</span> </p><p><span
  m='771470'>With</span> <span m='773600'>some</span> <span
  m='773810'>other</span> <span m='774000'>time</span> <span
  m='774290'>series,</span> <span m='775360'>it</span> <span
  m='775530'>might</span> <span m='776850'>increase</span> <span
  m='777680'>linearly</span> <span m='779000'>over</span> <span
  m='779310'>time.</span> <span m='780940'>And</span> <span m='781180'>a</span>
  <span m='781340'>series</span> <span m='781740'>that</span> <span
  m='781820'>increases</span> <span m='782240'>linearly</span> <span
  m='782810'>over</span> <span m='783110'>time,</span> <span
  m='783470'>well,</span> <span m='783600'>if</span> <span m='783690'>you</span>
  <span m='783790'>take</span> <span m='784070'>first</span> <span
  m='784360'>differences,</span> <span m='784890'>that</span> <span
  m='785070'>tends</span> <span m='785380'>to</span> <span
  m='785460'>take</span> <span m='785710'>out</span> <span
  m='785880'>that</span> <span m='786070'>linear</span> <span
  m='786410'>trend.</span> <span m='787650'>If</span> <span
  m='787860'>there</span> <span m='787980'>are</span> <span
  m='788040'>higher</span> <span m='788510'>order</span> <span
  m='789040'>differencing</span> <span m='789510'>is</span> <span
  m='789620'>required,</span> <span m='790090'>then</span> <span
  m='790230'>that</span> <span m='790390'>means</span> <span
  m='790600'>that</span> <span m='790740'>there's</span> <span
  m='790990'>some</span> <span m='791190'>curvature</span> <span
  m='792880'>quadratic,</span> <span m='793750'>say,</span> <span
  m='794160'>that</span> <span m='794540'>may</span> <span
  m='795130'>exist</span> <span m='795440'>in</span> <span m='795520'>the</span>
  <span m='795610'>data</span> <span m='795910'>that is</span> <span
  m='796190'>being</span> <span m='796500'>taken</span> <span
  m='796830'>out.</span> </p><p><span m='798760'>So</span> <span
  m='798910'>this</span> <span m='799130'>differencing</span> <span
  m='800470'>is</span> <span m='800640'>required</span> <span
  m='801150'>to</span> <span m='801840'>result</span> <span m='802570'>in</span>
  <span m='802760'>stationarity.</span> <span m='805460'>If</span> <span
  m='807640'>the</span> <span m='807770'>process</span> <span
  m='808800'>does</span> <span m='809120'>have</span> <span
  m='809850'>vector</span> <span m='810270'>autoregressive</span> <span
  m='810990'>representation</span> <span m='812430'>in</span> <span
  m='812620'>spite</span> <span m='813210'>of</span> <span m='813530'>its</span>
  <span m='813850'>non-stationarity,</span> <span m='815330'>then</span> <span
  m='816550'>it</span> <span m='816690'>can</span> <span m='816850'>be</span>
  <span m='817340'>represented</span> <span m='818760'>by</span> <span
  m='820300'>a</span> <span m='820460'>polynomial</span> <span
  m='821450'>lag</span> <span m='822120'>of</span> <span m='822460'>the</span>
  <span m='822830'>x's</span> <span m='823740'>is</span> <span
  m='823920'>equal</span> <span m='824220'>to</span> <span
  m='825140'>white</span> <span m='825470'>noise</span> <span
  m='826510'>epsilon.</span> <span m='828690'>And</span> <span
  m='829800'>the</span> <span m='829920'>polynomial</span> <span
  m='831320'>phi</span> <span m='831550'>of</span> <span m='831660'>L</span>
  <span m='833310'>going</span> <span m='833590'>to</span> <span
  m='833640'>have</span> <span m='835500'>a</span> <span
  m='835880'>factor</span> <span m='836540'>term</span> <span
  m='836820'>in</span> <span m='836890'>there</span> <span m='837090'>of</span>
  <span m='837560'>1</span> <span m='837870'>minus</span> <span
  m='838320'>L,</span> <span m='839180'>basically</span> <span
  m='839310'>the</span> <span m='839400'>first</span> <span
  m='839740'>difference</span> <span m='840240'>to</span> <span m='840350'>the
  d</span> <span m='840450'>power.</span> </p><p><span m='842100'>So</span>
  <span m='842620'>if</span> <span m='843620'>taking</span> <span
  m='844120'>these</span> <span m='845270'>the</span> <span
  m='845370'>d'th</span> <span m='845600'>order</span> <span
  m='845870'>difference</span> <span m='846300'>reduces</span> <span
  m='846690'>it</span> <span m='846820'>to</span> <span
  m='846890'>stationarity,</span> <span m='848220'>then</span> <span
  m='850100'>we</span> <span m='852430'>can</span> <span
  m='852560'>express</span> <span m='853040'>this</span> <span
  m='853450'>vector</span> <span m='853830'>autoregressive</span> <span
  m='855070'>in</span> <span m='855440'>this</span> <span m='855650'>way.</span>
  <span m='856630'>So</span> <span m='858910'>the</span> <span
  m='860372'>phi</span> <span m='860790'>star</span> <span m='861500'>of</span>
  <span m='861620'>L</span> <span m='864452'>basically</span> <span
  m='865400'>represents</span> <span m='866620'>the</span> <span
  m='866740'>stationary</span> <span m='868760'>vector</span> <span
  m='869100'>autoregressive</span> <span m='869680'>process</span> <span
  m='871110'>on</span> <span m='871860'>the</span> <span m='871970'>d'th</span>
  <span m='872350'>different</span> <span m='872880'>series.</span> </p><p><span
  m='887730'>Now,</span> <span m='888880'>as</span> <span m='889250'>it</span>
  <span m='889360'>says</span> <span m='889640'>here,</span> <span
  m='890960'>each</span> <span m='891640'>of</span> <span m='891690'>the</span>
  <span m='891760'>component</span> <span m='892290'>series</span> <span
  m='892780'>may</span> <span m='893030'>be</span> <span m='893290'>non</span>
  <span m='893530'>stationary</span> <span m='894260'>and</span> <span
  m='894420'>integrated,</span> <span m='895300'>say,</span> <span
  m='895500'>of</span> <span m='895620'>order</span> <span
  m='895970'>one.</span> <span m='897090'>But</span> <span m='897310'>the</span>
  <span m='897410'>process</span> <span m='898230'>itself</span> <span
  m='898760'>may</span> <span m='898910'>not</span> <span m='899210'>be</span>
  <span m='900010'>jointly</span> <span m='901270'>integrated.</span> <span
  m='902770'>And</span> <span m='902900'>that</span> <span m='903760'>it</span>
  <span m='903960'>may</span> <span m='904260'>be</span> <span
  m='905620'>that</span> <span m='906830'>there</span> <span
  m='907180'>are</span> <span m='907470'>linear</span> <span
  m='907870'>combinations</span> <span m='908900'>of</span> <span
  m='909160'>our</span> <span m='910330'>multivariate</span> <span
  m='910980'>series,</span> <span m='911470'>which</span> <span
  m='911650'>are</span> <span m='911940'>stationary.</span> <span
  m='913800'>And</span> <span m='914020'>so</span> <span m='916860'>these</span>
  <span m='917960'>linear</span> <span m='918300'>combinations</span> <span
  m='920170'>basically</span> <span m='920570'>represent</span> <span
  m='921350'>the</span> <span m='922080'>stationary</span> <span
  m='922930'>features</span> <span m='923500'>of</span> <span
  m='923730'>the</span> <span m='923840'>process.</span> <span
  m='925050'>And</span> <span m='926270'>those</span> <span
  m='926830'>features</span> <span m='928290'>can</span> <span
  m='928560'>be</span> <span m='929060'>apparent</span> <span
  m='929750'>without</span> <span m='930820'>looking</span> <span
  m='931160'>at</span> <span m='931300'>differences.</span> </p><p><span
  m='932490'>So</span> <span m='932930'>in</span> <span m='933210'>a</span>
  <span m='933290'>sense,</span> <span m='934450'>if</span> <span
  m='934620'>you</span> <span m='934750'>just</span> <span
  m='935000'>focused</span> <span m='935350'>on</span> <span
  m='935510'>differences</span> <span m='936460'>of</span> <span
  m='936720'>these</span> <span m='937010'>non</span> <span
  m='937180'>stationary</span> <span m='938400'>multivariant</span> <span
  m='938880'>series,</span> <span m='940660'>you</span> <span
  m='940820'>would</span> <span m='940950'>be</span> <span
  m='941150'>losing</span> <span m='941900'>out</span> <span
  m='942480'>on</span> <span m='943180'>information</span> <span
  m='943560'>of</span> <span m='944310'>the</span> <span
  m='944690'>stationary</span> <span m='945370'>structure</span> <span
  m='946870'>of</span> <span m='947340'>contemporaneous</span> <span
  m='949310'>components</span> <span m='949900'>of</span> <span
  m='950230'>the</span> <span m='950370'>multivariant</span> <span
  m='950920'>series.</span> <span m='952230'>And</span> <span
  m='953170'>so</span> <span m='953470'>cointegration</span> <span
  m='954800'>deals</span> <span m='955180'>with</span> <span
  m='955350'>this</span> <span m='955450'>situation</span> <span
  m='956130'>where</span> <span m='956990'>some</span> <span
  m='957450'>linear</span> <span m='957850'>combinations</span> <span
  m='959450'>of</span> <span m='960570'>the</span> <span
  m='960650'>multivariant</span> <span m='961160'>series</span> <span
  m='961480'>in</span> <span m='961590'>fact</span> <span m='962430'>are</span>
  <span m='962660'>stationary.</span> </p><p><span m='968810'>So</span> <span
  m='971380'>how</span> <span m='971560'>do</span> <span m='971610'>we</span>
  <span m='971730'>represent</span> <span m='972290'>that</span> <span
  m='974060'>mathematically?</span> <span m='975090'>Well,</span> <span
  m='976830'>we</span> <span m='976980'>say</span> <span m='977180'>that</span>
  <span m='977330'>this</span> <span m='977480'>multivariate</span> <span
  m='978440'>time</span> <span m='978710'>series</span> <span
  m='979020'>process</span> <span m='980280'>is</span> <span
  m='980450'>cointegrated</span> <span m='981130'>if</span> <span
  m='981320'>there</span> <span m='981500'>exists</span> <span
  m='982610'>an</span> <span m='982760'>m</span> <span m='982920'>vector</span>
  <span m='983280'>beta</span> <span m='984360'>such</span> <span
  m='984510'>that</span> <span m='985300'>defining</span> <span
  m='985780'>linear</span> <span m='986960'>weights</span> <span
  m='987870'>on</span> <span m='988120'>the</span> <span m='988270'>x's</span>
  <span m='989150'>and</span> <span m='989470'>beta</span> <span
  m='989790'>prime</span> <span m='990390'>xt</span> <span m='991090'>is</span>
  <span m='991260'>a</span> <span m='991310'>stationary</span> <span
  m='991830'>process.</span> <span m='997920'>The</span> <span
  m='998360'>cointegration</span> <span m='999240'>vector of</span> <span
  m='999570'>beta</span> <span m='999870'>can</span> <span m='1000030'>be</span>
  <span m='1000180'>scaled</span> <span m='1000810'>arbitrarily.</span>
  </p><p><span m='1002610'>So</span> <span m='1004920'>it's</span> <span
  m='1006240'>common</span> <span m='1006570'>practice,</span> <span
  m='1008550'>if</span> <span m='1008780'>one</span> <span
  m='1008930'>has</span> <span m='1009110'>an</span> <span
  m='1009190'>interest,</span> <span m='1009940'>some</span> <span
  m='1010160'>primary</span> <span m='1010900'>perhaps,</span> <span
  m='1011200'>in</span> <span m='1011290'>the</span> <span
  m='1011380'>first</span> <span m='1012190'>component</span> <span
  m='1012710'>series</span> <span m='1013030'>of</span> <span
  m='1013140'>process</span> <span m='1013580'>to</span> <span
  m='1014000'>set</span> <span m='1014240'>that</span> <span
  m='1014430'>equal</span> <span m='1014700'>to</span> <span
  m='1014770'>1.</span> <span m='1016680'>And</span> <span
  m='1018370'>the</span> <span m='1018570'>expression</span> <span
  m='1019200'>basically</span> <span m='1020560'>says</span> <span
  m='1021020'>that</span> <span m='1022980'>our</span> <span
  m='1023820'>time</span> <span m='1024240'>t</span> <span
  m='1024560'>value</span> <span m='1024940'>of</span> <span
  m='1025030'>the</span> <span m='1025119'>first</span> <span
  m='1025500'>series</span> <span m='1026470'>is</span> <span
  m='1028240'>related</span> <span m='1029250'>in</span> <span
  m='1029380'>a</span> <span m='1029440'>stationary</span> <span
  m='1030020'>way</span> <span m='1030280'>to</span> <span m='1030480'>a</span>
  <span m='1030520'>linear</span> <span m='1030859'>combination</span> <span
  m='1031930'>of</span> <span m='1032060'>the</span> <span
  m='1032440'>other</span> <span m='1033060'>m</span> <span
  m='1033230'>minus</span> <span m='1033859'>1</span> <span
  m='1034160'>series.</span> </p><p><span m='1035550'>And</span> <span
  m='1036089'>this</span> <span m='1036700'>is</span> <span m='1036970'>a</span>
  <span m='1037040'>long</span> <span m='1037359'>run</span> <span
  m='1037849'>equilibrium</span> <span m='1038950'>type</span> <span
  m='1039240'>relationship.</span> <span m='1041859'>How</span> <span
  m='1042010'>does</span> <span m='1043589'>this</span> <span
  m='1043800'>arise?</span> <span m='1045510'>Well,</span> <span
  m='1046069'>it</span> <span m='1046349'>arises</span> <span
  m='1047020'>in</span> <span m='1047210'>many,</span> <span
  m='1047569'>many</span> <span m='1048030'>ways</span> <span
  m='1048480'>in</span> <span m='1048740'>economics</span> <span
  m='1050060'>and</span> <span m='1050190'>finance.</span> <span
  m='1053100'>The</span> <span m='1053590'>term</span> <span
  m='1053800'>structure</span> <span m='1054120'>of</span> <span
  m='1054200'>interest</span> <span m='1054590'>rates,</span> <span
  m='1054870'>purchase</span> <span m='1055230'>power</span> <span
  m='1055530'>parity.</span> <span m='1058820'>In</span> <span
  m='1058900'>the</span> <span m='1059010'>terms</span> <span
  m='1059490'>structure</span> <span m='1059960'>of</span> <span
  m='1060020'>interest</span> <span m='1060410'>rates,</span> <span
  m='1062660'>basically</span> <span m='1064700'>the</span> <span
  m='1064880'>differences</span> <span m='1065640'>between</span> <span
  m='1066450'>yields</span> <span m='1067100'>on</span> <span
  m='1067260'>interest</span> <span m='1067590'>rates</span> <span
  m='1068130'>over</span> <span m='1068340'>different</span> <span
  m='1068630'>maturities,</span> <span m='1070260'>those</span> <span
  m='1070610'>differences</span> <span m='1071570'>might</span> <span
  m='1071790'>be</span> <span m='1071990'>stationary.</span> <span
  m='1072600'>The</span> <span m='1072710'>overall</span> <span
  m='1074600'>level</span> <span m='1074890'>of</span> <span
  m='1074990'>interest</span> <span m='1075310'>might</span> <span
  m='1075490'>not</span> <span m='1075700'>be</span> <span
  m='1075790'>stationary,</span> <span m='1076780'>but</span> <span
  m='1076990'>the</span> <span m='1077080'>spreads</span> <span
  m='1077830'>ought</span> <span m='1078080'>to</span> <span
  m='1078160'>be</span> <span m='1078900'>stationary.</span> </p><p><span
  m='1081350'>The</span> <span m='1081470'>purchase</span> <span
  m='1081860'>power</span> <span m='1082200'>parity</span> <span
  m='1082770'>in</span> <span m='1082900'>foreign</span> <span
  m='1083200'>exchange,</span> <span m='1084680'>if</span> <span
  m='1084820'>you</span> <span m='1084940'>look</span> <span
  m='1085130'>at</span> <span m='1087080'>the</span> <span
  m='1087210'>value</span> <span m='1088170'>of</span> <span
  m='1089580'>currencies</span> <span m='1090940'>for</span> <span
  m='1091060'>different</span> <span m='1091340'>countries,</span> <span
  m='1093190'>basically</span> <span m='1094100'>different</span> <span
  m='1094390'>countries</span> <span m='1094830'>ought</span> <span
  m='1095070'>to</span> <span m='1095140'>be</span> <span
  m='1095350'>able</span> <span m='1095520'>to</span> <span
  m='1095620'>purchase</span> <span m='1096420'>the</span> <span
  m='1096530'>same</span> <span m='1096900'>goods</span> <span
  m='1099130'>for</span> <span m='1099410'>roughly</span> <span
  m='1099710'>the</span> <span m='1099800'>same</span> <span
  m='1100070'>price.</span> <span m='1100720'>And</span> <span
  m='1100820'>so</span> <span m='1100980'>if</span> <span
  m='1101170'>there</span> <span m='1101330'>are</span> <span
  m='1101430'>disparities</span> <span m='1102100'>in</span> <span
  m='1102200'>currency</span> <span m='1102640'>values,</span> <span
  m='1103860'>purchase</span> <span m='1104510'>power</span> <span
  m='1104810'>parity</span> <span m='1105460'>suggests</span> <span
  m='1105880'>that</span> <span m='1106720'>things</span> <span
  m='1106900'>will</span> <span m='1107090'>revert</span> <span
  m='1107430'>back</span> <span m='1107740'>to</span> <span
  m='1107870'>some</span> <span m='1108240'>norm</span> <span
  m='1108620'>where</span> <span m='1109190'>everybody</span> <span
  m='1109740'>is</span> <span m='1110040'>pay</span> <span m='1110460'>on</span>
  <span m='1110640'>average</span> <span m='1111510'>over</span> <span
  m='1111890'>time</span> <span m='1112900'>the</span> <span
  m='1113010'>same</span> <span m='1113280'>amount</span> <span
  m='1113610'>for</span> <span m='1113730'>different</span> <span
  m='1114040'>goods.</span> <span m='1114960'>Otherwise,</span> <span
  m='1116570'>there</span> <span m='1116840'>would</span> <span
  m='1116950'>be</span> <span m='1117140'>arbitrage.</span> </p><p><span
  m='1120030'>Money</span> <span m='1120340'>demand,</span> <span
  m='1120820'>covered</span> <span m='1121100'>interest</span> <span
  m='1121370'>rate</span> <span m='1121540'>parity,</span> <span
  m='1121890'>law</span> <span m='1122150'>of one</span> <span
  m='1122360'>price,</span> <span m='1122890'>spot and</span> <span
  m='1123220'>futures.</span> <span m='1124340'>Let</span> <span
  m='1124490'>me</span> <span m='1125020'>show</span> <span
  m='1125290'>you</span> <span m='1125490'>another</span> <span
  m='1125860'>example</span> <span m='1127272'>that</span> <span
  m='1128470'>will</span> <span m='1128670'>be</span> <span
  m='1128910'>in</span> <span m='1129180'>the</span> <span
  m='1129550'>case</span> <span m='1129980'>study</span> <span
  m='1130320'>for</span> <span m='1130490'>this</span> <span
  m='1134450'>chapter.</span> <span m='1140290'>View,</span> <span
  m='1143175'>full</span> <span m='1143640'>screen.</span> <span
  m='1146410'>Let's</span> <span m='1146870'>think</span> <span
  m='1147080'>about</span> <span m='1147820'>energy</span> <span
  m='1148290'>futures.</span> <span m='1149900'>In</span> <span
  m='1150060'>fact,</span> <span m='1150890'>next</span> <span
  m='1151360'>Tuesday's</span> <span m='1152270'>talk</span> <span
  m='1152620'>from</span> <span m='1152800'>Morgan</span> <span
  m='1153070'>Stanley</span> <span m='1153450'>is</span> <span
  m='1153540'>going</span> <span m='1153640'>to</span> <span
  m='1153710'>be</span> <span m='1154120'>an</span> <span
  m='1154230'>expert</span> <span m='1154610'>in</span> <span
  m='1154980'>commodity</span> <span m='1155990'>futures</span> <span
  m='1156430'>and</span> <span m='1156850'>options.</span> <span
  m='1158490'>And</span> <span m='1158870'>that</span> <span
  m='1159060'>should</span> <span m='1159180'>be</span> <span
  m='1159300'>very</span> <span m='1159550'>interesting.</span> </p><p><span
  m='1161090'>Anyway,</span> <span m='1161940'>here,</span> <span
  m='1162690'>I'm</span> <span m='1162870'>looking</span> <span
  m='1163160'>at</span> <span m='1163980'>energy</span> <span
  m='1164420'>futures</span> <span m='1168920'>from</span> <span
  m='1169160'>the</span> <span m='1169310'>Energy</span> <span
  m='1169650'>Information</span> <span m='1170500'>Administration.</span> <span
  m='1171590'>Actually,</span> <span m='1171800'>for</span> <span
  m='1171890'>this</span> <span m='1172040'>course,</span> <span
  m='1172300'>trying</span> <span m='1172510'>to</span> <span
  m='1172570'>get</span> <span m='1172840'>data</span> <span
  m='1173090'>that's</span> <span m='1173330'>freely</span> <span
  m='1173670'>available</span> <span m='1174300'>to</span> <span
  m='1174530'>students</span> <span m='1176970'>is</span> <span
  m='1177320'>was</span> <span m='1177420'>one</span> <span
  m='1177590'>of</span> <span m='1177720'>the</span> <span
  m='1179820'>things</span> <span m='1180080'>we</span> <span
  m='1180220'>do.</span> <span m='1180560'>So</span> <span
  m='1180820'>this</span> <span m='1181100'>data</span> <span
  m='1181360'>is</span> <span m='1181460'>actually</span> <span
  m='1181850'>available</span> <span m='1182220'>from</span> <span
  m='1182420'>the</span> <span m='1182520'>Energy</span> <span
  m='1182940'>Information</span> <span m='1183470'>Administration of</span>
  <span m='1183820'>the</span> <span m='1184170'>government,</span> <span
  m='1184600'>which</span> <span m='1184770'>is</span> <span
  m='1184880'>now</span> <span m='1185110'>open,</span> <span
  m='1185440'>so</span> <span m='1185580'>I</span> <span
  m='1185690'>guess</span> <span m='1185900'>that'll</span> <span
  m='1186080'>be</span> <span m='1186240'>updated</span> <span
  m='1187130'>over</span> <span m='1187350'>time.</span> </p><p><span
  m='1188960'>But</span> <span m='1190110'>basically</span> <span
  m='1190780'>these</span> <span m='1191140'>energy</span> <span
  m='1191550'>futures</span> <span m='1192070'>are</span> <span
  m='1192290'>traded</span> <span m='1192740'>on</span> <span
  m='1193040'>the</span> <span m='1193280'>Chicago</span> <span
  m='1193810'>Mercantile</span> <span m='1194430'>Exchange.</span> <span
  m='1195570'>And</span> <span m='1196950'>basically</span> <span
  m='1197930'>CL</span> <span m='1198610'>is</span> <span
  m='1198980'>crude,</span> <span m='1200490'>West</span> <span
  m='1200880'>Texas</span> <span m='1201820'>intermediate</span> <span
  m='1202400'>crude,</span> <span m='1203290'>light</span> <span
  m='1203510'>crude,</span> <span m='1205160'>which</span> <span
  m='1206460'>we</span> <span m='1206570'>have</span> <span
  m='1206690'>here,</span> <span m='1206940'>a</span> <span
  m='1207010'>time</span> <span m='1207320'>series</span> <span
  m='1207710'>from</span> <span m='1207880'>2006</span> <span
  m='1208760'>to</span> <span m='1210820'>basically</span> <span
  m='1211560'>yesterday.</span> <span m='1212670'>And</span> <span
  m='1212810'>you</span> <span m='1212890'>can</span> <span
  m='1213000'>see</span> <span m='1213170'>how</span> <span
  m='1213480'>at</span> <span m='1213740'>the</span> <span
  m='1214270'>start</span> <span m='1214650'>of</span> <span
  m='1214720'>the</span> <span m='1214810'>period</span> <span
  m='1215080'>around</span> <span m='1215360'>$60</span> <span
  m='1216340'>and</span> <span m='1216410'>then</span> <span
  m='1216560'>went</span> <span m='1216700'>up</span> <span
  m='1216870'>to</span> <span m='1217350'>close</span> <span
  m='1217630'>to</span> <span m='1217710'>$140,</span> <span
  m='1219080'>and</span> <span m='1219180'>then</span> <span
  m='1219370'>it</span> <span m='1219550'>dropped</span> <span
  m='1219990'>down</span> <span m='1220480'>to</span> <span
  m='1221050'>around</span> <span m='1221410'>$40.</span> <span m='1222440'>And
  it's been</span> <span m='1223650'>hovering</span> <span
  m='1223990'>around</span> <span m='1224360'>$100</span> <span
  m='1224790'>lately.</span> </p><p><span m='1226110'>The</span> <span
  m='1226300'>second</span> <span m='1226770'>series</span> <span
  m='1227090'>here</span> <span m='1227350'>is</span> <span
  m='1228700'>gasoline,</span> <span m='1230150'>RBOB</span> <span
  m='1232120'>gasoline.</span> <span m='1233040'>Always</span> <span
  m='1233270'>have</span> <span m='1233440'>to</span> <span
  m='1235690'>look</span> <span m='1235870'>this</span> <span
  m='1236060'>up.</span> <span m='1236240'>This is</span> <span
  m='1236800'>that</span> <span m='1237030'>reformulated</span> <span
  m='1238280'>blend</span> <span m='1239040'>stock</span> <span
  m='1239390'>for</span> <span m='1239590'>oxygenated</span> <span
  m='1240370'>blending</span> <span m='1242690'>gasoline.</span> <span
  m='1243250'>Anyway,</span> <span m='1244030'>futures</span> <span
  m='1244390'>on</span> <span m='1244540'>this</span> <span
  m='1244740'>product</span> <span m='1245590'>are</span> <span
  m='1246220'>traded</span> <span m='1246580'>at</span> <span
  m='1246680'>the</span> <span m='1246750'>CME</span> <span
  m='1247150'>as</span> <span m='1247260'>well.</span> <span
  m='1248030'>And</span> <span m='1248240'>then</span> <span
  m='1248420'>heating</span> <span m='1248800'>oil.</span> <span
  m='1250750'>And</span> <span m='1253640'>what's</span> <span
  m='1253900'>happening</span> <span m='1254520'>with</span> <span
  m='1256150'>these</span> <span m='1256410'>data</span> <span m='1256780'>is
  that</span> <span m='1257000'>we</span> <span m='1257110'>have</span> <span
  m='1258660'>basically</span> <span m='1259160'>a</span> <span
  m='1259270'>refinery</span> <span m='1261300'>which</span> <span
  m='1267730'>processes</span> <span m='1268880'>crude</span> <span
  m='1269250'>oil</span> <span m='1273530'>as</span> <span m='1273640'>an</span>
  <span m='1273740'>input.</span> <span m='1275990'>And</span> <span
  m='1276690'>it</span> <span m='1276910'>basically</span> <span
  m='1277360'>refines</span> <span m='1277950'>it,</span> <span
  m='1279030'>distills it,</span> <span m='1280180'>and</span> <span
  m='1280440'>generates</span> <span m='1281650'>outputs,</span> <span
  m='1284570'>which</span> <span m='1285120'>include</span> <span
  m='1286300'>heating</span> <span m='1286710'>oil,</span> <span
  m='1292580'>gasoline,</span> <span m='1296600'>and</span> <span
  m='1296680'>various</span> <span m='1296980'>other</span> <span
  m='1297110'>things</span> <span m='1297290'>like</span> <span
  m='1297460'>jet</span> <span m='1297700'>fuel</span> <span
  m='1298380'>and</span> <span m='1300390'>others.</span> </p><p><span
  m='1301680'>So</span> <span m='1302990'>if</span> <span
  m='1303200'>we're</span> <span m='1303370'>looking</span> <span
  m='1303770'>at</span> <span m='1305090'>the</span> <span
  m='1305240'>prices,</span> <span m='1306460'>the</span> <span
  m='1306570'>futures</span> <span m='1306970'>prices</span> <span
  m='1307470'>of,</span> <span m='1307700'>say,</span> <span
  m='1307890'>gasoline</span> <span m='1308480'>and</span> <span
  m='1308550'>heating</span> <span m='1308870'>oil,</span> <span
  m='1309510'>relating</span> <span m='1309900'>those</span> <span
  m='1310200'>to</span> <span m='1310370'>crude</span> <span
  m='1310690'>oil,</span> <span m='1312390'>well,</span> <span
  m='1314220'>certainly,</span> <span m='1315710'>the</span> <span
  m='1315870'>cost</span> <span m='1316280'>of</span> <span
  m='1316380'>producing</span> <span m='1316870'>these</span> <span
  m='1317310'>products</span> <span m='1318400'>should</span> <span
  m='1318710'>depend</span> <span m='1319140'>on</span> <span
  m='1319320'>the</span> <span m='1319420'>cost</span> <span
  m='1319790'>of</span> <span m='1319870'>the</span> <span
  m='1319960'>input</span> <span m='1320330'>.</span> <span
  m='1321820'>So</span> <span m='1323430'>I've</span> <span
  m='1323600'>got</span> <span m='1323940'>in</span> <span
  m='1324040'>the</span> <span m='1324140'>next</span> <span
  m='1324450'>plot,</span> <span m='1325780'>a</span> <span
  m='1326320'>translation</span> <span m='1327530'>of</span> <span
  m='1328410'>these</span> <span m='1330000'>futures</span> <span
  m='1330480'>contracts</span> <span m='1331210'>into</span> <span
  m='1332440'>their</span> <span m='1332890'>price</span> <span
  m='1333290'>per</span> <span m='1333540'>barrel.</span> <span
  m='1335510'>Turns</span> <span m='1335750'>out</span> <span
  m='1335890'>crude</span> <span m='1336320'>is</span> <span
  m='1336720'>quoted</span> <span m='1337110'>in</span> <span
  m='1337750'>dollars</span> <span m='1338140'>per</span> <span
  m='1338290'>barrel.</span> <span m='1339320'>And</span> <span
  m='1340026'>the</span> <span m='1340380'>gasoline</span> <span
  m='1340910'>heating</span> <span m='1341240'>oil</span> <span
  m='1341710'>are</span> <span m='1341880'>in</span> <span
  m='1342740'>cents</span> <span m='1343130'>per</span> <span
  m='1343290'>gallon.</span> </p><p><span m='1344390'>So</span> <span
  m='1344880'>one</span> <span m='1345060'>multiplies.</span> <span
  m='1346490'>There</span> <span m='1346630'>are</span> <span
  m='1346660'>42</span> <span m='1347240'>gallons</span> <span
  m='1347740'>in</span> <span m='1347800'>a</span> <span
  m='1347870'>barrel.</span> <span m='1348310'>So</span> <span
  m='1348470'>you</span> <span m='1348640'>multiply</span> <span
  m='1349130'>those</span> <span m='1349330'>previous</span> <span
  m='1349660'>years</span> <span m='1349850'>by</span> <span
  m='1349970'>42.</span> <span m='1350960'>And</span> <span
  m='1351190'>this</span> <span m='1351330'>shows</span> <span
  m='1351670'>the</span> <span m='1351770'>plot</span> <span
  m='1352130'>of</span> <span m='1352290'>the</span> <span
  m='1352580'>prices</span> <span m='1352960'>of</span> <span
  m='1353010'>the</span> <span m='1353100'>futures</span> <span
  m='1353580'>where</span> <span m='1353820'>we're</span> <span
  m='1353970'>looking</span> <span m='1354240'>at</span> <span
  m='1354340'>essentially</span> <span m='1354660'>the</span> <span
  m='1354760'>same</span> <span m='1355050'>units</span> <span
  m='1355590'>of</span> <span m='1357410'>output</span> <span
  m='1358210'>relative</span> <span m='1358570'>to</span> <span
  m='1358680'>input.</span> <span m='1360600'>And</span> <span
  m='1361220'>what's</span> <span m='1361650'>evident</span> <span
  m='1362000'>here</span> <span m='1362250'>is</span> <span
  m='1362350'>that</span> <span m='1362510'>while</span> <span
  m='1363930'>the</span> <span m='1364100'>futures</span> <span
  m='1364540'>for</span> <span m='1364660'>gasoline,</span> <span
  m='1365700'>the</span> <span m='1365870'>blue,</span> <span
  m='1366530'>is</span> <span m='1366890'>consistently</span> <span
  m='1367380'>above</span> <span m='1367630'>the</span> <span
  m='1367710'>green,</span> <span m='1368620'>the</span> <span
  m='1368740'>input,</span> <span m='1369920'>and</span> <span
  m='1370160'>same</span> <span m='1370450'>for</span> <span
  m='1370650'>heating</span> <span m='1370960'>oil.</span> </p><p><span
  m='1372520'>And</span> <span m='1372730'>those</span> <span
  m='1373010'>vary</span> <span m='1373670'>depending</span> <span
  m='1374000'>on</span> <span m='1374070'>which</span> <span
  m='1374520'>is</span> <span m='1374820'>greater.</span> <span
  m='1375680'>So</span> <span m='1376830'>if</span> <span m='1377010'>we</span>
  <span m='1377120'>look</span> <span m='1377330'>at</span> <span
  m='1379290'>the</span> <span m='1379490'>difference</span> <span
  m='1380130'>between,</span> <span m='1381810'>say,</span> <span
  m='1382600'>the</span> <span m='1382730'>price</span> <span
  m='1384240'>of</span> <span m='1384680'>the</span> <span
  m='1384880'>heating</span> <span m='1385140'>oil</span> <span
  m='1385370'>future</span> <span m='1386240'>and</span> <span
  m='1386370'>the</span> <span m='1386460'>crude</span> <span
  m='1386790'>oil</span> <span m='1387020'>future,</span> <span
  m='1390070'>what</span> <span m='1390820'>does</span> <span
  m='1390990'>that</span> <span m='1391230'>represent?</span> <span
  m='1394380'>That's</span> <span m='1394670'>the</span> <span
  m='1394760'>spread</span> <span m='1395440'>in</span> <span
  m='1396810'>value</span> <span m='1397640'>of</span> <span
  m='1398090'>the</span> <span m='1398330'>output</span> <span
  m='1398830'>minus</span> <span m='1399220'>the</span> <span
  m='1399330'>input.</span> <span m='1400780'>Ray?</span> </p><p><span
  m='1401546'>AUDIENCE: [INAUDIBLE]</span> <span m='1402002'>cost</span> <span
  m='1402458'>of</span> <span m='1402914'>running</span> <span
  m='1403370'>the</span> <span m='1403826'>refinery?</span> </p><p><span
  m='1407146'>PROFESSOR: So cost</span> <span m='1408030'>of</span> <span
  m='1409215'>refining.</span> <span m='1411940'>So</span> <span
  m='1413180'>let's</span> <span m='1413500'>look</span> <span
  m='1413700'>at,</span> <span m='1413910'>say,</span> <span
  m='1415350'>heating</span> <span m='1415620'>oil</span> <span
  m='1415940'>minus</span> <span m='1416410'>CL</span> <span
  m='1418080'>and,</span> <span m='1418570'>say,</span> <span
  m='1419700'>this</span> <span m='1419840'>RBOB</span> <span
  m='1422540'>minus</span> <span m='1423020'>CL.</span> <span
  m='1423930'>So</span> <span m='1424140'>it's</span> <span m='1424320'>cost
  of</span> <span m='1424820'>refining.</span> <span m='1426670'>What</span>
  <span m='1426800'>else</span> <span m='1426960'>could</span> <span
  m='1427100'>be</span> <span m='1427740'>a</span> <span
  m='1428130'>factor</span> <span m='1428510'>here?</span> </p><p><span
  m='1429700'>AUDIENCE:</span> <span m='1430135'>Supply</span> <span
  m='1430570'>and demand</span> <span m='1430670'>characteristics</span> <span
  m='1431053'>[INAUDIBLE].</span> </p><p><span m='1431820'>PROFESSOR:
  Definitely.</span> <span m='1432570'>Supply</span> <span
  m='1432910'>and</span> <span m='1433000'>demand.</span> <span m='1434330'>If
  one product is</span> <span m='1434860'>demanded</span> <span
  m='1435360'>a</span> <span m='1435430'>lot</span> <span
  m='1435610'>more</span> <span m='1435760'>than</span> <span
  m='1435860'>another.</span> <span m='1438880'>Supply and demand.</span> <span
  m='1445820'>Anything</span> <span m='1446200'>else?</span> </p><p><span
  m='1448440'>AUDIENCE: Maybe</span> <span m='1448710'>for</span> <span
  m='1449120'>the</span> <span m='1449260'>outputs,</span> <span m='1449760'>if
  you</span> <span m='1449840'>were</span> <span m='1450040'>to</span> <span
  m='1450380'>find</span> <span m='1450640'>the</span> <span
  m='1450780'>difference</span> <span m='1451220'>between the outputs,</span>
  <span m='1451340'>it would</span> <span m='1451520'>be</span> <span
  m='1451850'>something</span> <span m='1452140'>cyclical.</span> <span
  m='1453060'>For</span> <span m='1453190'>example,</span> <span
  m='1453950'>in</span> <span m='1454080'>the</span> <span
  m='1454160'>winter,</span> <span m='1455060'>heating</span> <span
  m='1455340'>oil</span> <span m='1455640'>is</span> <span
  m='1455760'>going</span> <span m='1455940'>to</span> <span
  m='1455980'>get</span> <span m='1456280'>far</span> <span
  m='1456540'>more</span> <span m='1456680'>valuable</span> <span
  m='1457110'>as</span> <span m='1457200'>gasoline,</span> <span
  m='1458110'>because</span> <span m='1458430'>people</span> <span
  m='1458660'>drive</span> <span m='1458890'>less</span> <span
  m='1459130'>and</span> <span m='1459190'>people</span> <span
  m='1459430'>demand</span> <span m='1459680'>more</span> <span m='1459840'>for
  heating homes.</span> </p><p><span m='1460950'>PROFESSOR: Absolutely.</span>
  <span m='1462080'>That's</span> <span m='1462370'>a</span> <span
  m='1462700'>very</span> <span m='1463090'>significant</span> <span
  m='1463560'>factor</span> <span m='1465250'>with</span> <span
  m='1465400'>these.</span> <span m='1465670'>There are</span> <span
  m='1465840'>seasonal</span> <span m='1466350'>effects</span> <span
  m='1466770'>that</span> <span m='1466900'>drive</span> <span
  m='1467660'>supply</span> <span m='1468010'>and</span> <span
  m='1468110'>demand.</span> <span m='1469230'>And</span> <span
  m='1470450'>so</span> <span m='1472370'>we can</span> <span m='1472520'>put
  seasonal</span> <span m='1472680'>effects</span> <span m='1473790'>in
  there</span> <span m='1475460'>as</span> <span m='1475740'>affecting</span>
  <span m='1476180'>supply</span> <span m='1476500'>and</span> <span
  m='1476590'>demand.</span> <span m='1476980'>But</span> <span
  m='1477200'>certainly,</span> <span m='1477470'>you</span> <span
  m='1477540'>might</span> <span m='1477710'>expect</span> <span
  m='1478060'>to</span> <span m='1478130'>see</span> <span
  m='1478330'>seasonal</span> <span m='1478750'>structure</span> <span
  m='1479130'>here.</span> <span m='1480280'>Anything</span> <span
  m='1480870'>else?</span> </p><p><span m='1483720'>Put</span> <span
  m='1483930'>on</span> <span m='1484000'>your</span> <span
  m='1484130'>traders</span> <span m='1484600'>hat.</span> <span
  m='1487070'>Profit,</span> <span m='1487560'>yes.</span> <span
  m='1489310'>The</span> <span m='1489520'>refinery</span> <span
  m='1490510'>needs</span> <span m='1490810'>to</span> <span
  m='1490900'>make</span> <span m='1491130'>some</span> <span
  m='1491340'>profit.</span> <span m='1493160'>So</span> <span
  m='1494842'>there</span> <span m='1495250'>has</span> <span
  m='1495530'>to</span> <span m='1495630'>be</span> <span m='1495860'>some
  level</span> <span m='1496813'>of</span> <span m='1497760'>profit</span> <span
  m='1498220'>that's</span> <span m='1498520'>acceptable</span> <span
  m='1499660'>and</span> <span m='1499810'>appropriate.</span> </p><p><span
  m='1502240'>So</span> <span m='1502350'>we</span> <span
  m='1502430'>have</span> <span m='1502530'>all</span> <span
  m='1502730'>these</span> <span m='1502990'>things</span> <span
  m='1503430'>driving</span> <span m='1504900'>basically</span> <span
  m='1505250'>these</span> <span m='1505560'>differences.</span> <span
  m='1507630'>Let's</span> <span m='1507910'>just</span> <span
  m='1508140'>take</span> <span m='1508290'>a</span> <span
  m='1508350'>look</span> <span m='1508540'>at</span> <span
  m='1508630'>those</span> <span m='1508890'>differences.</span> <span
  m='1510220'>These</span> <span m='1510300'>are</span> <span
  m='1510380'>actually</span> <span m='1510660'>called</span> <span
  m='1511830'>the</span> <span m='1511980'>crack</span> <span
  m='1512830'>spreads.</span> <span m='1514880'>Cracking</span> <span
  m='1515840'>in</span> <span m='1516460'>the</span> <span
  m='1516580'>business</span> <span m='1518450'>of</span> <span
  m='1518550'>refining</span> <span m='1519250'>is</span> <span
  m='1519460'>basically</span> <span m='1519720'>the</span> <span
  m='1519850'>breaking</span> <span m='1520350'>down</span> <span
  m='1520950'>of</span> <span m='1521790'>oil</span> <span
  m='1522220'>into</span> <span m='1524460'>components,</span> <span
  m='1525710'>products.</span> <span m='1526250'>And</span> <span
  m='1528845'>on</span> <span m='1529240'>the</span> <span
  m='1529340'>top</span> <span m='1529650'>is</span> <span
  m='1529870'>the</span> <span m='1529970'>gasoline</span> <span
  m='1530890'>crack</span> <span m='1531240'>spread.</span> <span
  m='1531800'>And</span> <span m='1532030'>the</span> <span
  m='1532090'>bottom</span> <span m='1532400'>is</span> <span
  m='1532500'>the</span> <span m='1532580'>heating</span> <span
  m='1532890'>oil</span> <span m='1534170'>crack</span> <span
  m='1534520'>spread.</span> </p><p><span m='1535460'>And</span> <span
  m='1535580'>one</span> <span m='1535710'>can see that</span> <span
  m='1536710'>as</span> <span m='1537050'>time</span> <span
  m='1537410'>series,</span> <span m='1537720'>these</span> <span
  m='1537900'>actually</span> <span m='1538220'>look</span> <span
  m='1539260'>stationary.</span> <span m='1541860'>There</span> <span
  m='1542200'>certainly</span> <span m='1542570'>doesn't</span> <span
  m='1542810'>appear</span> <span m='1543100'>to</span> <span
  m='1543160'>be</span> <span m='1543280'>a</span> <span
  m='1543330'>linear</span> <span m='1543640'>trend</span> <span
  m='1543940'>up.</span> <span m='1545920'>But</span> <span m='1547662'>there
  are,</span> <span m='1548160'>of</span> <span m='1548260'>course,</span> <span
  m='1548580'>many</span> <span m='1548780'>factors</span> <span
  m='1549230'>that</span> <span m='1549400'>could</span> <span
  m='1549520'>affect</span> <span m='1549870'>this.</span> <span
  m='1551390'>So</span> <span m='1551660'>with</span> <span
  m='1551820'>that</span> <span m='1552030'>as</span> <span
  m='1552170'>motivation,</span> <span m='1553740'>how</span> <span
  m='1554670'>would</span> <span m='1555040'>we</span> <span
  m='1556160'>model</span> <span m='1556850'>such</span> <span
  m='1557170'>a</span> <span m='1557490'>series?</span> <span
  m='1559110'>So</span> <span m='1559210'>let's</span> <span
  m='1559280'>go</span> <span m='1559410'>back</span> <span
  m='1559760'>to</span> <span m='1559930'>our</span> <span
  m='1560400'>lecture</span> <span m='1560820'>here.</span> </p><p><span
  m='1566420'>All right,</span> <span m='1567310'>View,</span> <span
  m='1568460'>full size.</span> <span m='1575760'>This</span> <span
  m='1575970'>is</span> <span m='1576170'>going</span> <span
  m='1576290'>to</span> <span m='1576350'>be</span> <span m='1577000'>a</span>
  <span m='1577080'>very</span> <span m='1577360'>technical</span> <span
  m='1577900'>discussion,</span> <span m='1578430'>but</span> <span
  m='1580680'>it's,</span> <span m='1583160'>at</span> <span
  m='1583280'>the</span> <span m='1583380'>end</span> <span
  m='1583500'>of</span> <span m='1583540'>the</span> <span
  m='1583610'>day,</span> <span m='1583890'>I</span> <span
  m='1583990'>think</span> <span m='1584910'>fairly</span> <span
  m='1585320'>straightforward.</span> <span m='1585980'>And</span> <span
  m='1586080'>the</span> <span m='1586180'>objective</span> <span
  m='1586480'>actually</span> <span m='1586730'>of this</span> <span
  m='1586930'>lecture</span> <span m='1587210'>is</span> <span
  m='1587440'>to</span> <span m='1587540'>provides</span> <span
  m='1588150'>an</span> <span m='1588320'>introduction</span> <span
  m='1589010'>to</span> <span m='1589260'>the</span> <span
  m='1589430'>notation</span> <span m='1590020'>here,</span> <span
  m='1590950'>which</span> <span m='1591240'>should</span> <span
  m='1591510'>make</span> <span m='1591760'>it</span> <span
  m='1592010'>seem</span> <span m='1593380'>like</span> <span
  m='1593560'>it's</span> <span m='1593670'>a</span> <span
  m='1593710'>very</span> <span m='1593910'>straightforward</span> <span
  m='1595350'>derivation</span> <span m='1595860'>process</span> <span
  m='1596550'>of</span> <span m='1596710'>these</span> <span
  m='1596900'>models.</span> </p><p><span m='1597800'>So</span> <span
  m='1598980'>let's</span> <span m='1599360'>begin</span> <span
  m='1599960'>with</span> <span m='1600120'>just</span> <span
  m='1600420'>a</span> <span m='1600530'>recap</span> <span
  m='1601500'>of</span> <span m='1601770'>the</span> <span
  m='1601860'>vector</span> <span m='1602220'>autoregressive</span> <span
  m='1602890'>model</span> <span m='1603550'>of</span> <span
  m='1603660'>order</span> <span m='1603910'>p.</span> <span
  m='1605350'>This</span> <span m='1605620'>is</span> <span
  m='1605860'>the</span> <span m='1605980'>extension</span> <span
  m='1606460'>of</span> <span m='1606550'>the</span> <span
  m='1606630'>univariate</span> <span m='1607120'>case</span> <span
  m='1607440'>where</span> <span m='1607570'>we</span> <span
  m='1607680'>have</span> <span m='1609050'>a</span> <span
  m='1609150'>vector</span> <span m='1609600'>C</span> <span
  m='1610270'>of</span> <span m='1610430'>constants,</span> <span
  m='1611250'>m</span> <span m='1611490'>constants,</span> <span
  m='1612870'>and</span> <span m='1613700'>matrices</span> <span m='1614390'>phi
  1</span> <span m='1614590'>to phi p</span> <span
  m='1614930'>corresponding</span> <span m='1616960'>to</span> <span
  m='1617880'>basically</span> <span m='1618190'>how</span> <span
  m='1618480'>the</span> <span m='1619210'>autoregression</span> <span
  m='1620455'>of</span> <span m='1620730'>one</span> <span
  m='1621180'>series</span> <span m='1621650'>depends</span> <span
  m='1622080'>on</span> <span m='1622460'>all</span> <span
  m='1622680'>the</span> <span m='1622830'>other</span> <span
  m='1623050'>series.</span> <span m='1624810'>And</span> <span
  m='1624900'>then</span> <span m='1625060'>there's</span> <span
  m='1625720'>multivariate</span> <span m='1626320'>white</span> <span
  m='1626630'>noise</span> <span m='1627050'>eta</span> <span
  m='1627350'>t,</span> <span m='1628270'>which</span> <span
  m='1629050'>has</span> <span m='1629410'>mean</span> <span
  m='1629700'>0</span> <span m='1630120'>and</span> <span
  m='1630250'>some</span> <span m='1630470'>covariate</span> <span
  m='1630980'>structure</span> <span m='1631450'>in</span> <span
  m='1631630'>it.</span> </p><p><span m='1633630'>And</span> <span
  m='1635080'>the</span> <span m='1635210'>stationarity--</span> <span
  m='1638290'>if</span> <span m='1638520'>this</span> <span
  m='1638700'>series</span> <span m='1639020'>were</span> <span
  m='1639250'>stationary,</span> <span m='1639830'>then</span> <span
  m='1640030'>the</span> <span m='1640130'>determinant</span> <span
  m='1641460'>of</span> <span m='1641840'>this</span> <span
  m='1643910'>matrix</span> <span m='1645370'>polynomial</span> <span
  m='1648050'>would have</span> <span m='1648410'>roots</span> <span
  m='1648790'>outside</span> <span m='1649205'>the</span> <span
  m='1649620'>unit</span> <span m='1650020'>circle</span> <span
  m='1651440'>for</span> <span m='1651610'>complexity.</span> <span
  m='1653360'>And</span> <span m='1654880'>if</span> <span
  m='1655020'>it's</span> <span m='1655220'>not</span> <span
  m='1655510'>stationary,</span> <span m='1656800'>then</span> <span
  m='1657820'>some</span> <span m='1658030'>of</span> <span
  m='1658080'>those</span> <span m='1658250'>roots</span> <span
  m='1659290'>will</span> <span m='1659470'>be</span> <span
  m='1659620'>on</span> <span m='1659790'>the</span> <span
  m='1659840'>unit</span> <span m='1660010'>circle</span> <span
  m='1660510'>or</span> <span m='1660750'>beyond.</span> <span
  m='1661680'>So</span> <span m='1662710'>let's</span> <span
  m='1663230'>actually</span> <span m='1663540'>go</span> <span
  m='1663740'>to</span> <span m='1663860'>that</span> <span
  m='1664040'>non</span> <span m='1664260'>stationary</span> <span
  m='1664800'>case</span> <span m='1665125'>and</span> <span
  m='1665450'>suppose</span> <span m='1665990'>that</span> <span
  m='1666780'>the</span> <span m='1666900'>process</span> <span
  m='1667520'>is</span> <span m='1667830'>integrated</span> <span
  m='1668360'>of</span> <span m='1668470'>order</span> <span
  m='1668730'>one.</span> </p><p><span m='1670540'>So</span> <span
  m='1670840'>if</span> <span m='1671030'>we</span> <span
  m='1671160'>were</span> <span m='1671410'>to</span> <span
  m='1671510'>take</span> <span m='1671730'>first</span> <span
  m='1672030'>differences,</span> <span m='1673430'>we</span> <span
  m='1673560'>would</span> <span m='1673630'>have</span> <span
  m='1673800'>stationarity.</span> <span m='1682690'>Well,</span> <span
  m='1682850'>the</span> <span m='1682950'>derivation</span> <span
  m='1684070'>of</span> <span m='1685990'>the</span> <span
  m='1686080'>model</span> <span m='1686500'>proceeds</span> <span
  m='1687160'>by</span> <span m='1688510'>converting</span> <span
  m='1689210'>the</span> <span m='1689320'>original</span> <span
  m='1690530'>vector</span> <span m='1691250'>autoregressive</span> <span
  m='1692150'>equation</span> <span m='1693150'>into</span> <span
  m='1693470'>an</span> <span m='1693560'>equation</span> <span
  m='1695000'>that's</span> <span m='1695220'>mostly</span> <span
  m='1696050'>relating</span> <span m='1696470'>to</span> <span
  m='1696580'>differences</span> <span m='1697590'>but with</span> <span
  m='1697730'>also</span> <span m='1698090'>some</span> <span
  m='1698290'>extra</span> <span m='1698600'>terms.</span> <span
  m='1699560'>So</span> <span m='1700430'>let's</span> <span
  m='1700940'>begin</span> <span m='1701570'>the</span> <span
  m='1701580'>process</span> <span m='1702200'>by</span> <span
  m='1702470'>just</span> <span m='1702730'>subtracting</span> <span
  m='1704130'>the</span> <span m='1704270'>lagged</span> <span
  m='1704750'>value</span> <span m='1705060'>of</span> <span
  m='1705160'>the</span> <span m='1705230'>multi-variant</span> <span
  m='1705830'>vector</span> <span m='1706620'>from</span> <span
  m='1707490'>the</span> <span m='1707570'>original</span> <span
  m='1707900'>series.</span> </p><p><span m='1709030'>So</span> <span
  m='1709210'>we</span> <span m='1709310'>subtract</span> <span
  m='1709800'>xt</span> <span m='1710210'>minus</span> <span
  m='1710460'>1</span> <span m='1710600'>from</span> <span
  m='1710730'>both</span> <span m='1710940'>sides,</span> <span m='1711290'>and
  we</span> <span m='1711430'>get</span> <span m='1711640'>delta</span> <span
  m='1711930'>xt</span> <span m='1713070'>is</span> <span
  m='1713210'>equal</span> <span m='1713380'>to</span> <span
  m='1713460'>C</span> <span m='1713820'>plus</span> <span
  m='1714140'>phi</span> <span m='1714300'>1</span> <span
  m='1714570'>minus</span> <span m='1714930'>im</span> <span
  m='1716470'>xt</span> <span m='1716840'>minus</span> <span
  m='1717140'>1</span> <span m='1717330'>plus</span> <span
  m='1717610'>the</span> <span m='1717700'>rest.</span> <span
  m='1718200'>So</span> <span m='1718390'>that's</span> <span
  m='1718720'>a</span> <span m='1718790'>very</span> <span
  m='1719040'>simple</span> <span m='1720730'>step.</span> <span
  m='1721960'>We're</span> <span m='1722090'>just</span> <span
  m='1722280'>subtracting</span> <span m='1723640'>the</span> <span
  m='1723760'>lagged</span> <span m='1724630'>multivariant</span> <span
  m='1725180'>series</span> <span m='1726220'>from</span> <span
  m='1726440'>both</span> <span m='1726660'>sides.</span> </p><p><span
  m='1729370'>Now,</span> <span m='1731150'>what</span> <span
  m='1731280'>we</span> <span m='1731390'>want</span> <span
  m='1731590'>to</span> <span m='1731680'>do</span> <span m='1731880'>is</span>
  <span m='1732080'>convert</span> <span m='1733290'>the</span> <span
  m='1733430'>second</span> <span m='1733910'>term</span> <span
  m='1735330'>in</span> <span m='1735470'>the</span> <span
  m='1735550'>middle</span> <span m='1735840'>line</span> <span
  m='1737480'>into</span> <span m='1737920'>a</span> <span
  m='1737990'>difference</span> <span m='1738510'>term.</span> <span
  m='1739930'>So</span> <span m='1740290'>what</span> <span
  m='1740490'>do</span> <span m='1740560'>we</span> <span m='1740700'>do?</span>
  <span m='1740990'>Well,</span> <span m='1741150'>we</span> <span
  m='1741290'>can</span> <span m='1741440'>subtract</span> <span
  m='1742050'>and</span> <span m='1742190'>add</span> <span
  m='1742530'>phi</span> <span m='1742720'>1</span> <span
  m='1743520'>minus</span> <span m='1743950'>im</span> <span
  m='1744880'>times</span> <span m='1745160'>xt</span> <span
  m='1745820'>minus</span> <span m='1746240'>2.</span> <span
  m='1747900'>If</span> <span m='1748050'>we</span> <span m='1748130'>do</span>
  <span m='1748260'>that,</span> <span m='1748700'>subtract</span> <span
  m='1749150'>and</span> <span m='1749300'>add</span> <span
  m='1749550'>that,</span> <span m='1750440'>we</span> <span
  m='1750550'>then</span> <span m='1750760'>get</span> <span
  m='1750940'>the</span> <span m='1751060'>delta</span> <span
  m='1751370'>xt</span> <span m='1752010'>is</span> <span m='1752160'>C</span>
  <span m='1752400'>plus</span> <span m='1752850'>a</span> <span
  m='1752950'>multiple</span> <span m='1753410'>of</span> <span
  m='1753500'>delta</span> <span m='1753810'>xt</span> <span
  m='1754140'>minus</span> <span m='1754440'>1</span> <span
  m='1755490'>plus</span> <span m='1756930'>this</span> <span
  m='1757500'>multiple</span> <span m='1758170'>of</span> <span
  m='1758350'>xt</span> <span m='1758770'>minus</span> <span
  m='1759150'>2.</span> </p><p><span m='1759530'>So</span> <span
  m='1759680'>we</span> <span m='1759800'>basically</span> <span
  m='1760350'>reduced</span> <span m='1761350'>the</span> <span
  m='1761500'>equations</span> <span m='1762240'>to</span> <span
  m='1762910'>differences</span> <span m='1763430'>in</span> <span
  m='1763510'>the</span> <span m='1763590'>first</span> <span
  m='1764030'>two</span> <span m='1764240'>terms</span> <span
  m='1765290'>or</span> <span m='1765460'>in</span> <span m='1765590'>the</span>
  <span m='1765700'>current</span> <span m='1767450'>series</span> <span
  m='1768000'>and</span> <span m='1768400'>the</span> <span
  m='1768500'>lagged.</span> <span m='1769520'>But</span> <span
  m='1769650'>then</span> <span m='1770040'>we</span> <span
  m='1770180'>have</span> <span m='1770370'>the</span> <span
  m='1770590'>original</span> <span m='1770970'>series</span> <span
  m='1771390'>for</span> <span m='1771530'>lags</span> <span
  m='1771850'>t</span> <span m='1772020'>minus</span> <span
  m='1772400'>2.</span> <span m='1773550'>We</span> <span m='1773740'>can</span>
  <span m='1773860'>continue</span> <span m='1774300'>this</span> <span
  m='1774520'>process</span> <span m='1776370'>with</span> <span
  m='1776610'>the</span> <span m='1776710'>third.</span> <span
  m='1778660'>And</span> <span m='1778920'>then</span> <span
  m='1780450'>at</span> <span m='1780620'>the</span> <span
  m='1780720'>end</span> <span m='1780900'>of</span> <span
  m='1780970'>the</span> <span m='1781080'>day,</span> <span
  m='1782390'>we</span> <span m='1782460'>end</span> <span m='1782610'>up</span>
  <span m='1782730'>getting</span> <span m='1783920'>this</span> <span
  m='1784150'>equation</span> <span m='1784640'>for</span> <span
  m='1784860'>the</span> <span m='1785000'>difference</span> <span
  m='1785420'>of</span> <span m='1785500'>the</span> <span
  m='1785600'>series</span> <span m='1786150'>is</span> <span
  m='1786270'>equal</span> <span m='1786480'>to</span> <span
  m='1786610'>a</span> <span m='1786690'>constant</span> <span
  m='1787310'>plus</span> <span m='1788080'>a</span> <span
  m='1788200'>matrix</span> <span m='1788770'>multiple</span> <span
  m='1789300'>of</span> <span m='1789430'>the</span> <span
  m='1789520'>first</span> <span m='1790660'>difference</span> <span
  m='1792790'>multivariant</span> <span m='1793350'>series,</span> <span
  m='1793880'>plus</span> <span m='1794100'>another</span> <span
  m='1794390'>matrix</span> <span m='1794840'>times</span> <span
  m='1795120'>the</span> <span m='1795220'>second</span> <span
  m='1795640'>difference,</span> <span m='1796920'>all</span> <span
  m='1797080'>the</span> <span m='1797150'>way</span> <span
  m='1797270'>down</span> <span m='1797590'>to</span> <span
  m='1797710'>the</span> <span m='1799370'>p'th</span> <span
  m='1800040'>difference,</span> <span m='1801720'>or</span> <span
  m='1801850'>the</span> <span m='1801970'>p</span> <span
  m='1802150'>minus</span> <span m='1802510'>first</span> <span
  m='1802810'>difference.</span> </p><p><span m='1803760'>But</span> <span
  m='1804050'>at</span> <span m='1804160'>the</span> <span
  m='1804320'>end,</span> <span m='1804520'>we're</span> <span
  m='1804680'>left</span> <span m='1804980'>with</span> <span
  m='1805450'>terms</span> <span m='1807400'>at</span> <span
  m='1807920'>p</span> <span m='1808170'>lags</span> <span
  m='1808930'>that</span> <span m='1809200'>have</span> <span
  m='1809410'>no</span> <span m='1809590'>differences</span> <span
  m='1810170'>in</span> <span m='1810470'>them.</span> <span
  m='1811320'>So</span> <span m='1811770'>we've</span> <span
  m='1812140'>been</span> <span m='1812410'>able</span> <span
  m='1812640'>to</span> <span m='1812800'>represent</span> <span
  m='1813370'>this</span> <span m='1813910'>series</span> <span
  m='1814440'>as</span> <span m='1815720'>an</span> <span
  m='1815910'>autoregressive</span> <span m='1817100'>function</span> <span
  m='1817640'>of</span> <span m='1817940'>differences.</span> <span
  m='1819090'>But</span> <span m='1819240'>there's</span> <span
  m='1819420'>also</span> <span m='1820830'>a</span> <span
  m='1820920'>term</span> <span m='1822080'>on</span> <span
  m='1822335'>the</span> <span m='1822590'>undifferenced</span> <span
  m='1823280'>series</span> <span m='1824010'>at</span> <span
  m='1824160'>the</span> <span m='1824320'>end</span> <span
  m='1824780'>that's</span> <span m='1825000'>left</span> <span
  m='1825260'>over.</span> </p><p><span m='1827470'>And</span> <span
  m='1833550'>or</span> <span m='1833700'>this</span> <span
  m='1833930'>argument</span> <span m='1834360'>can</span> <span
  m='1834490'>actually</span> <span m='1834900'>proceed</span> <span
  m='1835510'>by</span> <span m='1835890'>eliminating</span> <span
  m='1836420'>differences</span> <span m='1836920'>in</span> <span
  m='1837000'>the</span> <span m='1837100'>reverse</span> <span
  m='1837610'>way,</span> <span m='1838330'>starting</span> <span
  m='1838660'>with</span> <span m='1838760'>the</span> <span
  m='1840430'>p'th</span> <span m='1840780'>lag</span> <span
  m='1841240'>and</span> <span m='1841460'>going</span> <span
  m='1841910'>up.</span> <span m='1842650'>And</span> <span
  m='1843850'>one</span> <span m='1844110'>then</span> <span
  m='1844480'>can</span> <span m='1844870'>represent</span> <span
  m='1845450'>this</span> <span m='1845790'>as</span> <span
  m='1846570'>delta</span> <span m='1846850'>xt</span> <span m='1847200'>of
  C</span> <span m='1847550'>plus</span> <span m='1848270'>some</span> <span
  m='1848590'>matrix</span> <span m='1849120'>times</span> <span
  m='1849520'>just</span> <span m='1850040'>the</span> <span
  m='1850170'>lagged</span> <span m='1850870'>series</span> <span
  m='1851910'>plus</span> <span m='1852740'>various</span> <span
  m='1853040'>matrices</span> <span m='1853660'>times</span> <span
  m='1854870'>the</span> <span m='1855210'>differences</span> <span
  m='1856000'>going</span> <span m='1856210'>back</span> <span
  m='1857450'>p</span> <span m='1857610'>minus</span> <span m='1857960'>1</span>
  <span m='1858390'>lags.</span> </p><p><span m='1865460'>And</span> <span
  m='1866790'>so</span> <span m='1867280'>at</span> <span m='1867440'>the</span>
  <span m='1867570'>end</span> <span m='1867740'>of</span> <span
  m='1867850'>the</span> <span m='1867950'>day,</span> <span
  m='1868350'>this</span> <span m='1869430'>model</span> <span
  m='1870200'>basically</span> <span m='1870840'>for</span> <span
  m='1871060'>delta</span> <span m='1871420'>xt</span> <span
  m='1872690'>is</span> <span m='1872860'>a</span> <span
  m='1872940'>constant</span> <span m='1874270'>plus</span> <span
  m='1875330'>a</span> <span m='1875440'>matrix</span> <span
  m='1876010'>times</span> <span m='1877810'>the</span> <span
  m='1877940'>previous</span> <span m='1878380'>lagged</span> <span
  m='1878770'>series</span> <span m='1880760'>or</span> <span
  m='1880920'>the</span> <span m='1881050'>first</span> <span
  m='1881360'>lag</span> <span m='1881770'>of</span> <span
  m='1882060'>the</span> <span m='1882400'>multivariate</span> <span
  m='1884490'>time</span> <span m='1884770'>series,</span> <span
  m='1885660'>plus</span> <span m='1886250'>various</span> <span
  m='1888010'>autoregressive</span> <span m='1888730'>lags</span> <span
  m='1889070'>of</span> <span m='1889440'>the</span> <span
  m='1889540'>differenced</span> <span m='1889940'>series.</span> <span
  m='1892960'>So</span> <span m='1894320'>these</span> <span
  m='1894640'>notes</span> <span m='1894960'>give</span> <span
  m='1895130'>you</span> <span m='1895210'>the</span> <span
  m='1895310'>formulas</span> <span m='1895690'>for</span> <span
  m='1895830'>those,</span> <span m='1896130'>and</span> <span
  m='1896200'>they're</span> <span m='1896300'>very</span> <span
  m='1896580'>easy</span> <span m='1896890'>to</span> <span
  m='1897010'>verify</span> <span m='1898220'>if</span> <span
  m='1898500'>you</span> <span m='1899420'>go</span> <span
  m='1900460'>through</span> <span m='1900680'>them</span> <span
  m='1900840'>one</span> <span m='1901010'>by</span> <span
  m='1901170'>one.</span> </p><p><span m='1905730'>And</span> <span
  m='1908060'>when</span> <span m='1908350'>we</span> <span
  m='1908510'>look</span> <span m='1908720'>at</span> <span
  m='1908840'>this</span> <span m='1909060'>expression</span> <span
  m='1909580'>for</span> <span m='1909710'>the</span> <span
  m='1909810'>model,</span> <span m='1911760'>this</span> <span
  m='1912590'>expresses</span> <span m='1913450'>the</span> <span
  m='1916250'>stochastic</span> <span m='1916590'>process</span> <span
  m='1916980'>model</span> <span m='1917270'>for</span> <span
  m='1917520'>the</span> <span m='1917660'>difference</span> <span
  m='1918030'>series.</span> <span m='1919560'>This</span> <span
  m='1920030'>difference</span> <span m='1920430'>series</span> <span
  m='1920820'>is</span> <span m='1921070'>stationary.</span> <span
  m='1923780'>We've</span> <span m='1923990'>eliminated</span> <span
  m='1924880'>the</span> <span m='1924990'>non-stationarity</span> <span
  m='1925970'>in</span> <span m='1926060'>the</span> <span
  m='1926150'>process.</span> <span m='1926630'>So</span> <span
  m='1926800'>that</span> <span m='1926990'>means</span> <span
  m='1927260'>the</span> <span m='1927400'>right</span> <span
  m='1927650'>hand</span> <span m='1927930'>side</span> <span
  m='1929160'>has</span> <span m='1929460'>to</span> <span m='1929570'>be</span>
  <span m='1929710'>stationary</span> <span m='1930660'>as</span> <span
  m='1930860'>well.</span> </p><p><span m='1932890'>And</span> <span
  m='1934770'>so</span> <span m='1935210'>while</span> <span
  m='1935400'>the</span> <span m='1935520'>terms</span> <span
  m='1936460'>which</span> <span m='1936690'>are</span> <span
  m='1936810'>matrix</span> <span m='1938190'>multiples</span> <span
  m='1938850'>of</span> <span m='1939500'>lags</span> <span
  m='1940000'>of</span> <span m='1940110'>the</span> <span
  m='1940210'>differenced</span> <span m='1940590'>series,</span> <span
  m='1941100'>those</span> <span m='1941330'>are</span> <span
  m='1941390'>going</span> <span m='1941500'>to</span> <span
  m='1941570'>be</span> <span m='1942560'>stationary</span> <span
  m='1943030'>because</span> <span m='1943450'>we're</span> <span
  m='1943570'>just</span> <span m='1943750'>taking</span> <span
  m='1944080'>lags</span> <span m='1944340'>of</span> <span
  m='1944600'>the</span> <span m='1944830'>stationary</span> <span
  m='1946980'>multivariate</span> <span m='1947450'>time</span> <span
  m='1947680'>series,</span> <span m='1948020'>the</span> <span
  m='1948140'>difference</span> <span m='1948480'>series.</span> <span
  m='1949540'>But</span> <span m='1949730'>this</span> <span
  m='1950030'>pi</span> <span m='1950590'>xt</span> <span
  m='1951210'>term</span> <span m='1952920'>has</span> <span
  m='1953250'>to</span> <span m='1953350'>be</span> <span
  m='1953580'>stationary</span> <span m='1954570'>as</span> <span
  m='1954750'>well.</span> <span m='1956880'>So</span> <span
  m='1957590'>this</span> <span m='1957870'>pi</span> <span
  m='1958200'>xt</span> <span m='1958570'>contains</span> <span
  m='1959030'>the</span> <span m='1959110'>cointegrating</span> <span
  m='1959880'>terms.</span> </p><p><span m='1961640'>And</span> <span
  m='1962300'>fitting</span> <span m='1962840'>a</span> <span
  m='1963350'>sort</span> <span m='1963520'>of</span> <span
  m='1963600'>cointegrated</span> <span m='1966210'>vector</span> <span
  m='1966600'>autoregression</span> <span m='1967180'>model</span> <span
  m='1967950'>involves</span> <span m='1969300'>identifying</span> <span
  m='1970840'>this</span> <span m='1971180'>term,</span> <span
  m='1971540'>pi</span> <span m='1971910'>xt.</span> <span
  m='1973490'>And</span> <span m='1975290'>given</span> <span
  m='1975770'>that</span> <span m='1976910'>the</span> <span
  m='1977100'>original</span> <span m='1977560'>series</span> <span
  m='1978100'>had</span> <span m='1978500'>unit</span> <span
  m='1978860'>roots,</span> <span m='1980870'>it</span> <span
  m='1980990'>has</span> <span m='1981260'>to</span> <span m='1981350'>be</span>
  <span m='1981470'>the</span> <span m='1981570'>case</span> <span
  m='1982020'>that</span> <span m='1982660'>pi,</span> <span
  m='1984210'>the</span> <span m='1984380'>matrix,</span> <span
  m='1985690'>is</span> <span m='1985910'>singular.</span> <span
  m='1989550'>So</span> <span m='1990190'>it's</span> <span
  m='1990570'>basically</span> <span m='1991040'>a</span> <span
  m='1991190'>transformation</span> <span m='1992080'>of</span> <span
  m='1992200'>the</span> <span m='1992280'>data</span> <span
  m='1992570'>that</span> <span m='1992740'>eliminates</span> <span
  m='1994640'>that</span> <span m='1994960'>unit</span> <span
  m='1995310'>root</span> <span m='1996240'>in</span> <span
  m='1996650'>the</span> <span m='1996810'>overall</span> <span
  m='1997160'>series.</span> </p><p><span m='1999880'>So</span> <span
  m='2000120'>the</span> <span m='2000230'>matrix</span> <span
  m='2000830'>pi</span> <span m='2001530'>is</span> <span m='2001780'>of</span>
  <span m='2001920'>reduced</span> <span m='2002330'>rank,</span> <span
  m='2004440'>and it's</span> <span m='2004640'>either</span> <span
  m='2005930'>rank</span> <span m='2006230'>zero,</span> <span
  m='2007220'>in</span> <span m='2007310'>which</span> <span
  m='2007470'>case</span> <span m='2007700'>there's</span> <span
  m='2007910'>no</span> <span m='2008100'>cointegrating</span> <span
  m='2008670'>relationships,</span> <span m='2009300'>or</span> <span
  m='2011120'>its</span> <span m='2011510'>rank</span> <span
  m='2011910'>is</span> <span m='2012670'>less</span> <span
  m='2013090'>than</span> <span m='2013350'>m.</span> <span
  m='2014500'>And</span> <span m='2015980'>the</span> <span
  m='2016400'>matrix</span> <span m='2017010'>pi</span> <span
  m='2017310'>does</span> <span m='2017640'>define</span> <span
  m='2018050'>the</span> <span m='2018160'>cointegrating</span> <span
  m='2019060'>relationships.</span> <span m='2020550'>Now,</span> <span
  m='2020700'>these</span> <span m='2020890'>cointegrating</span> <span
  m='2021540'>relationships</span> <span m='2023080'>are</span> <span
  m='2024260'>the</span> <span m='2024380'>relationships</span> <span
  m='2025810'>in</span> <span m='2026060'>the</span> <span
  m='2026200'>process</span> <span m='2027250'>that</span> <span
  m='2027390'>are</span> <span m='2027540'>stationary.</span> </p><p><span
  m='2028990'>And</span> <span m='2029230'>so</span> <span
  m='2030650'>basically</span> <span m='2031430'>there's</span> <span
  m='2032210'>a</span> <span m='2032260'>lot</span> <span m='2032470'>of</span>
  <span m='2032560'>information</span> <span m='2033200'>in</span> <span
  m='2033420'>that</span> <span m='2033640'>multivariate</span> <span
  m='2034190'>series</span> <span m='2035690'>with</span> <span
  m='2036460'>contemporaneous</span> <span m='2037400'>values</span> <span
  m='2037880'>of</span> <span m='2038050'>the</span> <span
  m='2038150'>series.</span> <span m='2039470'>There</span> <span
  m='2039710'>is</span> <span m='2039830'>stationary</span> <span
  m='2040460'>structure</span> <span m='2041190'>at</span> <span
  m='2041840'>every single</span> <span m='2042210'>time</span> <span
  m='2042500'>point,</span> <span m='2042970'>which</span> <span
  m='2045210'>can</span> <span m='2045750'>be</span> <span m='2046125'>the
  target</span> <span m='2046500'>of the modeling.</span> <span
  m='2048199'>So</span> <span m='2049010'>this</span> <span
  m='2050360'>matrix</span> <span m='2051110'>pi</span> <span
  m='2052480'>is</span> <span m='2053050'>of</span> <span
  m='2053330'>rank</span> <span m='2054320'>r</span> <span
  m='2054830'>less</span> <span m='2055139'>than</span> <span
  m='2055300'>m.</span> <span m='2056250'>And</span> <span m='2056510'>so</span>
  <span m='2057500'>it</span> <span m='2057650'>can</span> <span
  m='2057770'>be</span> <span m='2057900'>expressed</span> <span
  m='2059310'>as</span> <span m='2060870'>basically</span> <span
  m='2061530'>alpha</span> <span m='2061830'>beta</span> <span
  m='2062100'>prime,</span> <span m='2063320'>where</span> <span
  m='2063429'>these</span> <span m='2063650'>matrices</span> <span
  m='2064280'>of</span> <span m='2066219'>rank</span> <span m='2067469'>r</span>
  <span m='2068929'>alpha</span> <span m='2069250'>and</span> <span
  m='2069389'>beta.</span> </p><p><span m='2070540'>And</span> <span
  m='2070969'>the</span> <span m='2071060'>columns</span> <span
  m='2071440'>of</span> <span m='2071520'>beta</span> <span
  m='2071810'>define</span> <span m='2072210'>linearly</span> <span
  m='2072500'>independent</span> <span m='2072880'>vectors</span> <span
  m='2073199'>which</span> <span m='2073389'>cointegrate</span> <span
  m='2073929'>x.</span> <span m='2074770'>And</span> <span
  m='2075260'>the</span> <span m='2075340'>decomposition</span> <span
  m='2076170'>of</span> <span m='2076270'>pi</span> <span
  m='2076560'>isn't</span> <span m='2076830'>unique.</span> <span
  m='2077909'>You</span> <span m='2078100'>can</span> <span
  m='2079150'>basically,</span> <span m='2080909'>for</span> <span
  m='2081110'>any</span> <span m='2081540'>invertible</span> <span
  m='2082179'>r</span> <span m='2082380'>by</span> <span m='2082560'>r</span>
  <span m='2082679'>matrix,</span> <span m='2083100'>g</span> <span
  m='2083389'>define</span> <span m='2084159'>another</span> <span
  m='2084449'>set</span> <span m='2084639'>of</span> <span
  m='2084719'>cointegrating</span> <span m='2085060'>relationships.</span> <span
  m='2086350'>So</span> <span m='2087000'>in</span> <span m='2087340'>the</span>
  <span m='2087550'>linear</span> <span m='2088080'>algebra</span> <span
  m='2088580'>structure</span> <span m='2089070'>of</span> <span
  m='2089130'>these</span> <span m='2089370'>problems,</span> <span
  m='2090340'>there's</span> <span m='2090510'>basically</span> <span
  m='2090870'>an</span> <span m='2091000'>r</span> <span
  m='2091270'>dimensional</span> <span m='2091760'>space</span> <span
  m='2092800'>where</span> <span m='2093290'>the</span> <span
  m='2093440'>process</span> <span m='2094469'>is</span> <span
  m='2094830'>stationary,</span> <span m='2096000'>and</span> <span
  m='2096170'>how</span> <span m='2096360'>you</span> <span
  m='2096480'>define</span> <span m='2097730'>the</span> <span
  m='2097910'>coordinate</span> <span m='2098410'>system</span> <span
  m='2098780'>in</span> <span m='2098880'>that</span> <span
  m='2099110'>space</span> <span m='2100190'>is</span> <span
  m='2100610'>up</span> <span m='2100770'>to</span> <span m='2100850'>you</span>
  <span m='2102020'>or</span> <span m='2103510'>subject</span> <span
  m='2103980'>to</span> <span m='2105380'>some</span> <span
  m='2105590'>choice.</span> </p><p><span m='2108130'>So</span> <span
  m='2108290'>how</span> <span m='2108440'>do</span> <span m='2108510'>we</span>
  <span m='2108670'>estimate</span> <span m='2109220'>these</span> <span
  m='2109420'>models?</span> <span m='2109780'>Well,</span> <span
  m='2111000'>rather</span> <span m='2111720'>nice</span> <span
  m='2112060'>result</span> <span m='2112800'>of</span> <span
  m='2113530'>Sims,</span> <span m='2114170'>Stock,</span> <span
  m='2114540'>and</span> <span m='2114630'>Watson.</span> <span
  m='2115520'>Actually,</span> <span m='2115760'>Sims,</span> <span
  m='2116500'>Christopher</span> <span m='2116850'>Sims,</span> <span
  m='2117800'>he</span> <span m='2117990'>got</span> <span
  m='2118250'>the</span> <span m='2118490'>Nobel</span> <span
  m='2118880'>Prize</span> <span m='2119190'>a</span> <span
  m='2119240'>few</span> <span m='2119430'>years</span> <span
  m='2119710'>ago</span> <span m='2120550'>for</span> <span
  m='2120790'>his</span> <span m='2120980'>work</span> <span
  m='2121790'>in</span> <span m='2122390'>econometrics.</span> <span
  m='2123730'>And</span> <span m='2125660'>so</span> <span
  m='2126300'>this</span> <span m='2126550'>is</span> <span m='2128212'>a</span>
  <span m='2129120'>rather</span> <span m='2129760'>significant</span> <span
  m='2130240'>work</span> <span m='2131830'>that</span> <span
  m='2132570'>he</span> <span m='2132750'>did.</span> </p><p><span
  m='2133850'>Anyway,</span> <span m='2134970'>he,</span> <span
  m='2135400'>together</span> <span m='2135690'>with</span> <span
  m='2135800'>Stock</span> <span m='2136130'>and</span> <span
  m='2136230'>Watson,</span> <span m='2136740'>prove</span> <span
  m='2137530'>that</span> <span m='2138770'>if</span> <span
  m='2138960'>you're</span> <span m='2139220'>estimating</span> <span
  m='2139860'>a</span> <span m='2139940'>vector</span> <span
  m='2140290'>autoregression</span> <span m='2140810'>model,</span> <span
  m='2141120'>then</span> <span m='2141280'>the</span> <span
  m='2141380'>least</span> <span m='2141580'>squares</span> <span
  m='2141910'>estimator</span> <span m='2142470'>of</span> <span
  m='2142610'>the</span> <span m='2142760'>original</span> <span
  m='2143240'>model</span> <span m='2145490'>is</span> <span
  m='2145750'>basically</span> <span m='2146360'>sufficient</span> <span
  m='2147330'>to</span> <span m='2147610'>do</span> <span m='2147790'>an</span>
  <span m='2147890'>analysis</span> <span m='2149150'>of</span> <span
  m='2149310'>this</span> <span m='2151480'>cointegrated</span> <span
  m='2154760'>vector</span> <span m='2155010'>autoregression</span> <span
  m='2155490'>process.</span> </p><p><span m='2156600'>The</span> <span
  m='2157060'>parameter</span> <span m='2157570'>estimates</span> <span
  m='2158280'>from</span> <span m='2158480'>just</span> <span
  m='2158760'>fitting</span> <span m='2158960'>the</span> <span
  m='2159070'>vector</span> <span m='2159400'>autoregression</span> <span
  m='2161350'>are</span> <span m='2161920'>consistent</span> <span
  m='2162770'>for</span> <span m='2163080'>the</span> <span
  m='2163220'>underlying</span> <span m='2163610'>parameters.</span> <span
  m='2164920'>And</span> <span m='2165140'>they have</span> <span
  m='2165300'>asymptotic</span> <span m='2165930'>distributions</span> <span
  m='2166240'>that</span> <span m='2166550'>are</span> <span
  m='2166640'>identical</span> <span m='2167110'>to</span> <span
  m='2167200'>those</span> <span m='2167540'>of</span> <span
  m='2167670'>maximum</span> <span m='2168120'>likelihood</span> <span
  m='2168470'>estimators.</span> <span m='2169980'>And</span> <span
  m='2170170'>so</span> <span m='2173410'>what</span> <span
  m='2174320'>ends</span> <span m='2174470'>up</span> <span
  m='2174590'>happening</span> <span m='2175070'>is</span> <span
  m='2176410'>the</span> <span m='2176760'>least</span> <span
  m='2177000'>squares</span> <span m='2177390'>estimates</span> <span
  m='2178360'>of</span> <span m='2178580'>the</span> <span
  m='2178670'>vector</span> <span m='2178980'>autoregression</span> <span
  m='2179610'>parameters</span> <span m='2181460'>lead</span> <span
  m='2181960'>to</span> <span m='2182530'>an</span> <span
  m='2182750'>estimation</span> <span m='2183710'>of</span> <span
  m='2183960'>the</span> <span m='2184060'>pi</span> <span
  m='2184750'>matrix.</span> <span m='2187270'>And</span> <span
  m='2194060'>the</span> <span m='2194700'>constraints</span> <span
  m='2195420'>on</span> <span m='2195510'>the</span> <span
  m='2195610'>pie</span> <span m='2195920'>matrix</span> <span
  m='2197340'>which</span> <span m='2198750'>are</span> <span
  m='2199190'>basically</span> <span m='2200010'>pi</span> <span
  m='2200290'>is</span> <span m='2200420'>of</span> <span
  m='2200530'>reduced</span> <span m='2201030'>rank,</span> <span
  m='2201730'>those</span> <span m='2202010'>will</span> <span
  m='2202230'>hold</span> <span m='2202670'>asymptotically.</span> </p><p><span
  m='2204430'>So</span> <span m='2205770'>let's</span> <span
  m='2206080'>just</span> <span m='2206280'>go</span> <span
  m='2206430'>back</span> <span m='2206720'>to</span> <span
  m='2206810'>the</span> <span m='2206930'>equation</span> <span
  m='2208350'>before,</span> <span m='2209240'>to</span> <span
  m='2209330'>see</span> <span m='2209570'>if</span> <span
  m='2209700'>that</span> <span m='2211240'>looks</span> <span
  m='2213990'>familiar here.</span> <span m='2218930'>So</span> <span
  m='2219160'>what</span> <span m='2219420'>that</span> <span
  m='2220880'>work</span> <span m='2221650'>says</span> <span
  m='2222050'>is</span> <span m='2222180'>that</span> <span
  m='2222350'>if</span> <span m='2222510'>we</span> <span
  m='2222700'>basically</span> <span m='2223070'>fit</span> <span
  m='2223790'>the</span> <span m='2223930'>linear</span> <span
  m='2224240'>regression</span> <span m='2224630'>model</span> <span
  m='2226100'>regressing</span> <span m='2226610'>the</span> <span
  m='2226730'>difference</span> <span m='2227110'>series</span> <span
  m='2228280'>on</span> <span m='2228980'>the</span> <span
  m='2229110'>lag</span> <span m='2229480'>of</span> <span
  m='2229570'>the</span> <span m='2229660'>series</span> <span
  m='2230590'>plus</span> <span m='2231070'>lags</span> <span
  m='2231500'>of</span> <span m='2232190'>differences,</span> <span
  m='2233930'>the</span> <span m='2234030'>least</span> <span
  m='2234210'>squares</span> <span m='2234480'>estimates</span> <span
  m='2234960'>of</span> <span m='2236270'>these</span> <span
  m='2236490'>underlying</span> <span m='2236920'>parameters</span> <span
  m='2238590'>will</span> <span m='2239190'>give</span> <span
  m='2239390'>us</span> <span m='2240080'>asymptotically</span> <span
  m='2240730'>efficient</span> <span m='2241310'>estimates</span> <span
  m='2241690'>of</span> <span m='2242140'>this</span> <span
  m='2242750'>overall</span> <span m='2243070'>process.</span> </p><p><span
  m='2244060'>So</span> <span m='2244450'>we</span> <span
  m='2244580'>don't</span> <span m='2244750'>need</span> <span
  m='2245630'>to</span> <span m='2246170'>use</span> <span
  m='2247860'>any</span> <span m='2248340'>new</span> <span
  m='2248960'>tools</span> <span m='2249560'>to</span> <span
  m='2250590'>specify</span> <span m='2251090'>these</span> <span
  m='2251340'>models.</span> <span m='2263800'>There's</span> <span
  m='2264630'>an</span> <span m='2264760'>advanced</span> <span
  m='2265300'>literature</span> <span m='2265840'>on</span> <span
  m='2267260'>estimation</span> <span m='2267790'>methods</span> <span
  m='2268110'>for</span> <span m='2268210'>these</span> <span
  m='2268400'>models.</span> <span m='2269950'>Johansen</span> <span
  m='2272110'>does</span> <span m='2272380'>describe</span> <span
  m='2273370'>maximum</span> <span m='2273840'>likelihood</span> <span
  m='2274180'>estimation</span> <span m='2275050'>when</span> <span
  m='2277130'>the</span> <span m='2278120'>innovation</span> <span
  m='2278680'>terms</span> <span m='2279030'>are</span> <span
  m='2279240'>normally</span> <span m='2279700'>distributed.</span> <span
  m='2281260'>And</span> <span m='2283310'>that</span> <span
  m='2283630'>methodology</span> <span m='2284610'>applies</span> <span
  m='2285460'>reduced</span> <span m='2285890'>rank</span> <span
  m='2286790'>regression</span> <span m='2287270'>methodology</span> <span
  m='2288580'>and</span> <span m='2288810'>yields</span> <span
  m='2290520'>tests</span> <span m='2291450'>for</span> <span
  m='2292780'>what</span> <span m='2293150'>the</span> <span
  m='2293370'>rank</span> <span m='2294050'>is</span> <span
  m='2294365'>of</span> <span m='2294680'>the</span> <span
  m='2294800'>cointegrating</span> <span m='2295470'>relationship.</span>
  </p><p><span m='2297130'>And</span> <span m='2297500'>these</span> <span
  m='2297860'>methods</span> <span m='2298900'>are</span> <span
  m='2299110'>implemented</span> <span m='2299580'>in</span> <span
  m='2299710'>our</span> <span m='2299880'>packages.</span> <span
  m='2305710'>Let's</span> <span m='2305930'>see.</span> <span
  m='2306420'>Let</span> <span m='2306550'>me</span> <span
  m='2306630'>just</span> <span m='2306820'>go</span> <span
  m='2306940'>back</span> <span m='2307210'>now</span> <span
  m='2307430'>to</span> <span m='2307760'>the--</span> <span
  m='2318860'>so</span> <span m='2318930'>let's</span> <span
  m='2319140'>see.</span> <span m='2320890'>The</span> <span
  m='2324000'>case</span> <span m='2324230'>study</span> <span
  m='2324510'>on</span> <span m='2324830'>the</span> <span
  m='2324920'>crack</span> <span m='2325300'>spread</span> <span
  m='2326130'>data</span> <span m='2327690'>actually</span> <span
  m='2327970'>goes</span> <span m='2328240'>through</span> <span
  m='2328860'>sort</span> <span m='2329000'>of</span> <span
  m='2329080'>testing</span> <span m='2329620'>for</span> <span
  m='2330180'>non-stationarity</span> <span m='2331370'>in these</span> <span
  m='2332460'>underlying</span> <span m='2332900'>series.</span> <span
  m='2334040'>And</span> <span m='2335380'>actually,</span> <span
  m='2335640'>why don't</span> <span m='2335810'>I</span> <span m='2335950'>just
  show you that?</span> <span m='2338360'>Let's</span> <span
  m='2338590'>go</span> <span m='2338710'>back</span> <span
  m='2339080'>here.</span> </p><p><span m='2357522'>If</span> <span
  m='2357990'>you</span> <span m='2358090'>can</span> <span
  m='2358220'>see</span> <span m='2358440'>this,</span> <span
  m='2360330'>for</span> <span m='2360670'>the</span> <span
  m='2360790'>crack</span> <span m='2361190'>spread</span> <span
  m='2361910'>data,</span> <span m='2363460'>looking</span> <span
  m='2363690'>at</span> <span m='2363780'>the</span> <span
  m='2363870'>crude</span> <span m='2364130'>oil</span> <span
  m='2364370'>futures,</span> <span m='2365230'>basically</span> <span
  m='2365450'>the</span> <span m='2365530'>crude</span> <span
  m='2365770'>oil</span> <span m='2366010'>future</span> <span
  m='2367250'>can</span> <span m='2367510'>be</span> <span
  m='2367850'>evaluated</span> <span m='2368450'>to</span> <span
  m='2368540'>see</span> <span m='2368710'>if</span> <span
  m='2368830'>it's</span> <span m='2369110'>non</span> <span
  m='2369340'>stationary.</span> <span m='2370790'>And</span> <span
  m='2371050'>there's</span> <span m='2371370'>this</span> <span
  m='2371600'>augmented</span> <span m='2372150'>Dickey-Fuller</span> <span
  m='2373250'>test</span> <span m='2373800'>for</span> <span
  m='2374710'>non-stationarity.</span> <span m='2376350'>And</span> <span
  m='2378320'>it</span> <span m='2378540'>basically</span> <span
  m='2378850'>has</span> <span m='2379000'>a</span> <span
  m='2379080'>null</span> <span m='2379350'>hypothesis</span> <span
  m='2380290'>that</span> <span m='2381240'>the</span> <span
  m='2382110'>model</span> <span m='2383160'>or</span> <span
  m='2383270'>the</span> <span m='2383400'>series</span> <span
  m='2383870'>is</span> <span m='2384310'>non</span> <span
  m='2384540'>stationary,</span> <span m='2385310'>or it</span> <span
  m='2385620'>has</span> <span m='2385780'>a</span> <span m='2385810'>unit
  root</span> <span m='2386850'>versus</span> <span m='2387120'>the</span> <span
  m='2387230'>alternative</span> <span m='2387820'>that it</span> <span
  m='2388100'>doesn't.</span> </p><p><span m='2389040'>And</span> <span
  m='2389340'>so</span> <span m='2390640'>testing</span> <span
  m='2391060'>that</span> <span m='2391300'>null</span> <span
  m='2391550'>hypothesis</span> <span m='2392180'>that</span> <span
  m='2392300'>it's</span> <span m='2392480'>non</span> <span
  m='2392750'>stationary</span> <span m='2393630'>yields a p</span> <span
  m='2393910'>value</span> <span m='2394570'>of</span> <span
  m='2394660'>0.164</span> <span m='2396121'>for</span> <span
  m='2396610'>CLC</span> <span m='2397250'>1,</span> <span
  m='2398090'>the</span> <span m='2399060'>first</span> <span
  m='2400460'>nearest</span> <span m='2400960'>contract,</span> <span
  m='2401690'>near</span> <span m='2402610'>month</span> <span
  m='2402870'>contract</span> <span m='2403826'>of the</span> <span
  m='2404580'>futures</span> <span m='2406010'>like</span> <span
  m='2406140'>crude.</span> <span m='2407400'>And</span> <span
  m='2407910'>so</span> <span m='2408960'>the</span> <span
  m='2409150'>data</span> <span m='2409480'>suggests</span> <span
  m='2409890'>that</span> <span m='2410610'>crude</span> <span
  m='2411230'>has</span> <span m='2411480'>a</span> <span
  m='2411610'>distribution</span> <span m='2412240'>that's</span> <span
  m='2412830'>non</span> <span m='2413090'>stationary</span> <span
  m='2413770'>integrated</span> <span m='2414060'>order</span> <span
  m='2414350'>1.</span> </p><p><span m='2416490'>And</span> <span
  m='2416890'>the</span> <span m='2418750'>HOC1</span> <span
  m='2420820'>also</span> <span m='2421630'>basically</span> <span
  m='2422310'>has</span> <span m='2422695'>a</span> <span
  m='2423080'>test</span> <span m='2423340'>for</span> <span
  m='2423460'>p</span> <span m='2423630'>value</span> <span
  m='2423950'>for</span> <span m='2424120'>non-stationarity</span> <span
  m='2425912'>of</span> <span m='2426310'>0.3265.</span> <span
  m='2427550'>So</span> <span m='2427710'>we</span> <span
  m='2427820'>can't</span> <span m='2428130'>reject</span> <span
  m='2429110'>non-stationarity</span> <span m='2430230'>or</span> <span
  m='2430460'>unit root</span> <span m='2431000'>in those</span> <span
  m='2431270'>series</span> <span m='2431690'>with</span> <span
  m='2431860'>these</span> <span m='2432290'>test</span> <span
  m='2432600'>statistics.</span> <span m='2434150'>In</span> <span
  m='2434360'>analyzing</span> <span m='2434920'>the</span> <span
  m='2435050'>data,</span> <span m='2436020'>this</span> <span
  m='2436540'>suggests</span> <span m='2437100'>that</span> <span
  m='2438750'>we</span> <span m='2438990'>basically</span> <span
  m='2439260'>need</span> <span m='2439480'>to</span> <span
  m='2439570'>accommodate</span> <span m='2440150'>that</span> <span
  m='2440300'>non-stationarity</span> <span m='2441160'>when</span> <span
  m='2441380'>we</span> <span m='2442290'>specify</span> <span
  m='2442740'>the</span> <span m='2442860'>models.</span> <span m='2446925'>Let
  me</span> <span m='2447350'>just</span> <span m='2447450'>see</span> <span
  m='2447650'>if</span> <span m='2447750'>there's</span> <span
  m='2447950'>some</span> <span m='2448120'>results</span> <span
  m='2448640'>here.</span> </p><p></p><p><span m='2515180'>For</span> <span
  m='2515580'>this</span> <span m='2515820'>series,</span> <span
  m='2516380'>actually</span> <span m='2518510'>the</span> <span
  m='2518620'>case</span> <span m='2518870'>notes</span> <span m='2519060'>will
  go</span> <span m='2519210'>through</span> <span m='2519540'>actually</span>
  <span m='2520010'>conducting</span> <span m='2520480'>this</span> <span
  m='2520670'>Johansen</span> <span m='2521270'>procedure</span> <span
  m='2521810'>for</span> <span m='2521950'>testing</span> <span
  m='2522350'>for</span> <span m='2522460'>the</span> <span
  m='2522610'>rank</span> <span m='2523360'>of</span> <span
  m='2523600'>the</span> <span m='2523710'>cointegrated</span> <span
  m='2524300'>process.</span> <span m='2525700'>And</span> <span
  m='2526730'>that</span> <span m='2527120'>test</span> <span
  m='2529370'>basically</span> <span m='2530470'>has</span> <span
  m='2530730'>different</span> <span m='2531040'>test</span> <span
  m='2531210'>statistic</span> <span m='2531630'>for</span> <span
  m='2531780'>testing</span> <span m='2532140'>whether</span> <span
  m='2532400'>the</span> <span m='2532540'>rank</span> <span
  m='2532800'>is</span> <span m='2532970'>0,</span> <span m='2533710'>1,</span>
  <span m='2534460'>less</span> <span m='2534650'>than</span> <span
  m='2534750'>or</span> <span m='2534820'>equal</span> <span
  m='2534970'>to</span> <span m='2535020'>1,</span> <span
  m='2535260'>less</span> <span m='2535490'>than</span> <span
  m='2535590'>or</span> <span m='2535690'>equal</span> <span
  m='2535790'>to</span> <span m='2535880'>2.</span> <span m='2536870'>And</span>
  <span m='2537060'>one</span> <span m='2537150'>can</span> <span
  m='2537260'>see</span> <span m='2537430'>that</span> <span
  m='2537560'>there's</span> <span m='2537770'>marginal--</span> <span
  m='2539260'>the</span> <span m='2539410'>test</span> <span
  m='2539650'>statistic</span> <span m='2540780'>is</span> <span
  m='2541010'>almost</span> <span m='2541360'>significant</span> <span
  m='2543220'>at</span> <span m='2543450'>the</span> <span
  m='2543540'>10%</span> <span m='2544130'>level</span> <span
  m='2545930'>for</span> <span m='2546130'>the</span> <span
  m='2546670'>overall</span> <span m='2547080'>series.</span> </p><p><span
  m='2549780'>It's</span> <span m='2550310'>not</span> <span
  m='2550630'>significant</span> <span m='2552120'>for</span> <span
  m='2552270'>the</span> <span m='2552410'>rank</span> <span
  m='2552670'>being</span> <span m='2552810'>less</span> <span
  m='2553020'>than</span> <span m='2553130'>or</span> <span
  m='2553200'>equal</span> <span m='2553400'>to</span> <span
  m='2553480'>1.</span> <span m='2554460'>And</span> <span m='2554650'>so</span>
  <span m='2556010'>these</span> <span m='2556260'>results,</span> <span
  m='2557440'>it</span> <span m='2557600'>doesn't</span> <span
  m='2557880'>suggest</span> <span m='2558190'>there's</span> <span
  m='2558390'>strong</span> <span m='2559150'>non-stationarity.</span> <span
  m='2560880'>But</span> <span m='2561910'>certainly</span> <span
  m='2562840'>with</span> <span m='2564170'>that</span> <span
  m='2564500'>non-stationarity</span> <span m='2565360'>is</span> <span
  m='2566040'>no</span> <span m='2566190'>more</span> <span
  m='2566380'>than</span> <span m='2566520'>rank</span> <span
  m='2566810'>one</span> <span m='2567190'>for</span> <span m='2567390'>the
  series.</span> <span m='2568620'>And</span> <span m='2568950'>the</span> <span
  m='2569160'>eigenvector</span> <span m='2571120'>corresponding</span> <span
  m='2572030'>to</span> <span m='2572210'>the</span> <span
  m='2572470'>stationarity</span> <span m='2573030'>relationship</span> <span
  m='2573900'>is</span> <span m='2574070'>given</span> <span
  m='2574380'>by</span> <span m='2575280'>these</span> <span
  m='2575510'>coefficients</span> <span m='2576130'>of</span> <span
  m='2576260'>1</span> <span m='2576720'>on</span> <span m='2577540'>the</span>
  <span m='2578520'>crude</span> <span m='2579560'>oil</span> <span
  m='2580060'>future,</span> <span m='2580940'>1.3</span> <span m='2582190'>on
  the</span> <span m='2582330'>RBOB</span> <span m='2582850'>and</span> <span
  m='2583150'>minus</span> <span m='2583450'>1.7</span> <span m='2584740'>on
  the</span> <span m='2585090'>heating</span> <span m='2585450'>oil.</span>
  </p><p><span m='2588640'>So</span> <span m='2588790'>what</span> <span
  m='2588970'>this</span> <span m='2589180'>suggests</span> <span
  m='2590100'>is</span> <span m='2590400'>that</span> <span
  m='2593140'>there's</span> <span m='2593360'>considerable</span> <span
  m='2594700'>variability</span> <span m='2596290'>in</span> <span
  m='2597490'>these</span> <span m='2597720'>energy</span> <span
  m='2598060'>futures</span> <span m='2598510'>contracts.</span> <span
  m='2600880'>What</span> <span m='2601120'>appears</span> <span
  m='2601530'>to</span> <span m='2601610'>be</span> <span
  m='2601750'>stationary</span> <span m='2602550'>is</span> <span
  m='2602830'>some</span> <span m='2603140'>linear</span> <span
  m='2603490'>combination</span> <span m='2604390'>of</span> <span
  m='2604600'>crude</span> <span m='2605080'>plus</span> <span
  m='2605460'>gasoline</span> <span m='2606900'>minus</span> <span
  m='2607340'>heating</span> <span m='2607650'>oil.</span> <span
  m='2608670'>And</span> <span m='2609490'>in</span> <span
  m='2609660'>terms</span> <span m='2609850'>of</span> <span
  m='2609940'>why</span> <span m='2612070'>does it</span> <span
  m='2612250'>combine</span> <span m='2612720'>that</span> <span
  m='2612870'>way,</span> <span m='2613090'>well,</span> <span
  m='2614030'>there</span> <span m='2614130'>are</span> <span
  m='2614250'>all</span> <span m='2614410'>kinds</span> <span
  m='2614650'>of</span> <span m='2614790'>factors</span> <span
  m='2615280'>that</span> <span m='2615360'>we</span> <span
  m='2615490'>went</span> <span m='2615710'>through--</span> <span
  m='2616460'>cost</span> <span m='2616820'>of</span> <span
  m='2616910'>refining,</span> <span m='2617490'>supply</span> <span
  m='2617920'>and</span> <span m='2618030'>demand,</span> <span
  m='2618760'>seasonality,</span> <span m='2619830'>which</span> <span
  m='2620080'>affect</span> <span m='2620520'>things.</span> </p><p><span
  m='2621370'>And</span> <span m='2621610'>so</span> <span
  m='2623140'>when</span> <span m='2623390'>analyzed,</span> <span
  m='2624230'>sort</span> <span m='2624380'>of</span> <span
  m='2624420'>ignoring</span> <span m='2624860'>seasonality,</span> <span
  m='2625970'>these</span> <span m='2626220'>would</span> <span
  m='2626390'>be</span> <span m='2628540'>the</span> <span
  m='2628660'>linear</span> <span m='2628950'>combinations</span> <span
  m='2629600'>that</span> <span m='2629690'>appear</span> <span
  m='2630000'>to</span> <span m='2630050'>be</span> <span
  m='2630180'>stationary</span> <span m='2630930'>over time.</span> <span
  m='2631371'>Yeah?</span> </p><p><span m='2634460'>AUDIENCE: Why</span> <span
  m='2634660'>did</span> <span m='2634850'>you</span> <span
  m='2635010'>choose</span> <span m='2635260'>to use the</span> <span
  m='2635370'>futures</span> <span m='2635680'>prices</span> <span
  m='2635800'>as opposed to the</span> <span m='2636250'>spot?</span> <span
  m='2636700'>And how did</span> <span m='2637150'>you</span> <span
  m='2637830'>combine</span> <span m='2638282'>the data</span> <span
  m='2638734'>with</span> <span m='2639186'>actual</span> <span
  m='2639640'>[INAUDIBLE]?</span> </p><p><span m='2640170'>PROFESSOR: I</span>
  <span m='2640350'>chose</span> <span m='2640770'>this</span> <span
  m='2641150'>because</span> <span m='2643760'>if</span> <span
  m='2646040'>refiners</span> <span m='2647120'>are</span> <span
  m='2647340'>wanting</span> <span m='2647820'>to</span> <span
  m='2648200'>hedge</span> <span m='2648630'>their</span> <span
  m='2649230'>risks,</span> <span m='2650360'>then</span> <span
  m='2650490'>they</span> <span m='2650590'>will</span> <span
  m='2650680'>go</span> <span m='2650800'>to</span> <span m='2650860'>the</span>
  <span m='2650950'>futures</span> <span m='2651380'>market</span> <span
  m='2652130'>to</span> <span m='2652350'>hedge</span> <span
  m='2652680'>those.</span> <span m='2654060'>And</span> <span
  m='2654310'>so</span> <span m='2655240'>working</span> <span
  m='2655600'>with</span> <span m='2655730'>these</span> <span
  m='2656010'>data,</span> <span m='2656830'>one</span> <span
  m='2657090'>can</span> <span m='2657260'>then</span> <span
  m='2659170'>consider</span> <span m='2659590'>problems</span> <span
  m='2660170'>of</span> <span m='2660560'>hedging</span> <span
  m='2661560'>refinery</span> <span m='2662540'>production</span> <span
  m='2664370'>risks.</span> <span m='2665460'>And</span> <span
  m='2666340'>so</span> <span m='2666590'>that's</span> <span
  m='2667140'>why.</span> </p><p><span m='2668620'>AUDIENCE:</span> <span
  m='2668790'>[INAUDIBLE]</span> </p><p><span m='2670960'>PROFESSOR: OK,</span>
  <span m='2671330'>well,</span> <span m='2672040'>the</span> <span
  m='2672500'>Energy</span> <span m='2672760'>Information</span> <span
  m='2673390'>Administration</span> <span m='2673800'>provides</span> <span
  m='2674230'>historical</span> <span m='2674780'>data</span> <span
  m='2675660'>which</span> <span m='2676180'>gives</span> <span
  m='2676710'>the</span> <span m='2678240'>first</span> <span
  m='2678720'>month,</span> <span m='2679270'>the</span> <span
  m='2679390'>second</span> <span m='2679810'>month,</span> <span
  m='2680140'>the</span> <span m='2680250'>third</span> <span
  m='2680520'>month</span> <span m='2681110'>available</span> <span
  m='2681680'>for</span> <span m='2681860'>each</span> <span
  m='2682030'>of</span> <span m='2682620'>these</span> <span
  m='2682820'>contracts.</span> <span m='2683400'>And</span> <span
  m='2683520'>so</span> <span m='2686190'>I</span> <span
  m='2686340'>chose</span> <span m='2686630'>the</span> <span
  m='2686710'>first</span> <span m='2686990'>month</span> <span
  m='2687200'>contract</span> <span m='2687720'>for</span> <span
  m='2687860'>each</span> <span m='2688010'>of</span> <span
  m='2688080'>these</span> <span m='2688510'>features.</span> <span
  m='2689680'>Those</span> <span m='2690020'>10</span> <span
  m='2690330'>are</span> <span m='2690450'>the</span> <span
  m='2690550'>most</span> <span m='2690800'>liquid.</span> <span
  m='2691980'>Depending</span> <span m='2692340'>on</span> <span
  m='2692420'>what</span> <span m='2692610'>one</span> <span
  m='2692820'>is</span> <span m='2692970'>hedging,</span> <span
  m='2694440'>one</span> <span m='2694960'>would</span> <span
  m='2695170'>use</span> <span m='2695390'>perhaps</span> <span
  m='2695710'>longer</span> <span m='2696070'>periods</span> <span
  m='2696890'>for</span> <span m='2697050'>those.</span> </p><p><span
  m='2698550'>There's</span> <span m='2700490'>some</span> <span
  m='2700670'>very</span> <span m='2700870'>nice</span> <span
  m='2701480'>finance</span> <span m='2701860'>problems</span> <span
  m='2702450'>dealing</span> <span m='2702780'>with</span> <span
  m='2703100'>hedging,</span> <span m='2703520'>hedging</span> <span
  m='2703830'>these</span> <span m='2704000'>kinds</span> <span
  m='2704250'>of</span> <span m='2704330'>risks,</span> <span
  m='2704690'>and</span> <span m='2705020'>as</span> <span
  m='2705160'>well</span> <span m='2705370'>as</span> <span
  m='2705470'>trading</span> <span m='2706070'>these</span> <span
  m='2706310'>kinds</span> <span m='2706570'>of</span> <span
  m='2706680'>risk.</span> <span m='2707150'>Traders</span> <span
  m='2707620'>can</span> <span m='2708540'>try</span> <span
  m='2708730'>to</span> <span m='2708840'>exploit</span> <span
  m='2709840'>short</span> <span m='2710160'>term</span> <span
  m='2710350'>movements</span> <span m='2710810'>in</span> <span
  m='2710950'>these.</span> <span m='2729870'>Anyway,</span> <span
  m='2730270'>I'll</span> <span m='2730450'>let</span> <span
  m='2730610'>you</span> <span m='2730730'>look</span> <span
  m='2730920'>through</span> <span m='2731120'>these,</span> <span
  m='2731820'>the</span> <span m='2731930'>case</span> <span m='2732380'>note
  later.</span> <span m='2732760'>And</span> <span m='2733270'>it</span> <span
  m='2733440'>does</span> <span m='2733660'>provide</span> <span
  m='2734000'>some</span> <span m='2734150'>detail</span> <span
  m='2735380'>on</span> <span m='2735490'>the</span> <span
  m='2735590'>coefficient</span> <span m='2736080'>estimates.</span> <span
  m='2736810'>And</span> <span m='2737830'>one</span> <span
  m='2737920'>can</span> <span m='2738800'>basically</span> <span
  m='2739120'>get</span> <span m='2739240'>a</span> <span m='2739270'>handle
  on</span> <span m='2739620'>how</span> <span m='2739820'>these</span> <span
  m='2740020'>things</span> <span m='2740240'>are being</span> <span
  m='2740460'>specified.</span> </p><p><span m='2743980'>So</span> <span
  m='2744512'>let's</span> <span m='2745660'>go</span> <span
  m='2745820'>back.</span> <span m='2758260'>The</span> <span
  m='2758340'>next</span> <span m='2758630'>topic</span> <span
  m='2760250'>I</span> <span m='2760440'>want</span> <span m='2760630'>to</span>
  <span m='2760690'>cover</span> <span m='2761880'>is</span> <span
  m='2762850'>linear</span> <span m='2763280'>state</span> <span
  m='2763620'>space</span> <span m='2763980'>models.</span> <span
  m='2766490'>It</span> <span m='2766640'>turns</span> <span
  m='2766950'>out</span> <span m='2767190'>that</span> <span
  m='2768160'>many</span> <span m='2768510'>of</span> <span
  m='2768590'>these</span> <span m='2772300'>time</span> <span
  m='2772630'>series models</span> <span m='2773080'>appropriate in</span> <span
  m='2773560'>economics</span> <span m='2774130'>and</span> <span
  m='2774230'>finance</span> <span m='2775090'>can</span> <span
  m='2775260'>be</span> <span m='2775350'>expressed</span> <span
  m='2777150'>as</span> <span m='2777840'>a</span> <span
  m='2778660'>linear</span> <span m='2779210'>state</span> <span
  m='2779550'>space</span> <span m='2779890'>model.</span> </p><p><span
  m='2788590'>I'm</span> <span m='2788720'>going</span> <span
  m='2788800'>to</span> <span m='2788840'>introduce</span> <span
  m='2789390'>the</span> <span m='2789570'>general</span> <span
  m='2790410'>notation</span> <span m='2791060'>first</span> <span
  m='2791890'>and</span> <span m='2792060'>then</span> <span
  m='2792250'>provide</span> <span m='2792630'>illustrations</span> <span
  m='2793380'>of</span> <span m='2793490'>this</span> <span
  m='2793740'>general</span> <span m='2794160'>notation</span> <span
  m='2795100'>with</span> <span m='2795250'>a</span> <span
  m='2795370'>number</span> <span m='2795670'>of</span> <span
  m='2795730'>different</span> <span m='2796020'>examples.</span> <span
  m='2798480'>So</span> <span m='2801820'>the</span> <span
  m='2801940'>formulation</span> <span m='2803200'>is</span> <span
  m='2803570'>we</span> <span m='2803740'>have</span> <span
  m='2805040'>basically</span> <span m='2805210'>an</span> <span
  m='2805370'>observation</span> <span m='2806000'>vector at</span> <span
  m='2806410'>time</span> <span m='2806710'>t,</span> <span
  m='2807065'>yt.</span> <span m='2807420'>This</span> <span
  m='2807600'>is</span> <span m='2807720'>our</span> <span
  m='2807830'>multivariate</span> <span m='2808400'>time</span> <span
  m='2808670'>series</span> <span m='2809050'>that</span> <span
  m='2809170'>we're</span> <span m='2809270'>modeling.</span> </p><p><span
  m='2810730'>Now,</span> <span m='2810890'>I've</span> <span
  m='2811030'>chosen</span> <span m='2812030'>it</span> <span
  m='2812280'>to</span> <span m='2812360'>be</span> <span m='2812520'>k</span>
  <span m='2812750'>dimensional</span> <span m='2813930'>for</span> <span
  m='2814660'>the</span> <span m='2816250'>observations.</span> <span
  m='2817900'>There's</span> <span m='2818010'>an</span> <span
  m='2818110'>underlying</span> <span m='2818710'>state</span> <span
  m='2819760'>vector</span> <span m='2820720'>that's</span> <span
  m='2821060'>of</span> <span m='2821280'>m</span> <span
  m='2821510'>dimensions,</span> <span m='2822680'>which</span> <span
  m='2823030'>basically</span> <span m='2823390'>characterizes</span> <span
  m='2824390'>the</span> <span m='2826280'>state</span> <span
  m='2827080'>of</span> <span m='2827910'>the</span> <span
  m='2828730'>process</span> <span m='2829430'>at</span> <span
  m='2829700'>time</span> <span m='2830000'>t.</span> <span
  m='2831740'>There's</span> <span m='2832520'>an</span> <span
  m='2832650'>observation</span> <span m='2833270'>error</span> <span
  m='2833430'>vector at</span> <span m='2833860'>time</span> <span
  m='2834160'>t,</span> <span m='2834480'>epsilon</span> <span
  m='2834920'>t</span> <span m='2835240'>So</span> <span m='2835440'>it's</span>
  <span m='2835600'>k</span> <span m='2835910'>by</span> <span
  m='2836130'>1</span> <span m='2836360'>as</span> <span
  m='2836480'>well,</span> <span m='2837510'>corresponding</span> <span
  m='2837850'>to</span> <span m='2838050'>y.</span> <span m='2838830'>And</span>
  <span m='2839030'>there's</span> <span m='2839340'>a</span> <span
  m='2839460'>state</span> <span m='2839790'>transition</span> <span
  m='2840390'>innovation</span> <span m='2840880'>error</span> <span
  m='2841110'>vector,</span> <span m='2842200'>which</span> <span
  m='2842470'>is</span> <span m='2844070'>n</span> <span m='2844510'>by</span>
  <span m='2844760'>1,</span> <span m='2849890'>which</span> <span
  m='2850310'>actually</span> <span m='2850950'>can</span> <span
  m='2851240'>be</span> <span m='2851380'>different</span> <span
  m='2851830'>from</span> <span m='2852500'>m,</span> <span
  m='2853730'>the</span> <span m='2853940'>dimension</span> <span
  m='2854500'>of</span> <span m='2854660'>the</span> <span
  m='2854760'>state</span> <span m='2855200'>vector.</span> </p><p><span
  m='2856040'>So</span> <span m='2857270'>we</span> <span
  m='2857450'>have</span> <span m='2859420'>in</span> <span
  m='2859610'>the</span> <span m='2859790'>state</span> <span
  m='2860040'>space</span> <span m='2860370'>specification,</span> <span
  m='2861300'>we're</span> <span m='2861430'>going</span> <span
  m='2861530'>to</span> <span m='2861580'>specify</span> <span
  m='2862080'>two</span> <span m='2862370'>equations,</span> <span
  m='2863210'>one</span> <span m='2863720'>for</span> <span
  m='2864050'>how</span> <span m='2864270'>the</span> <span
  m='2864410'>states</span> <span m='2864930'>evolve</span> <span
  m='2865600'>over</span> <span m='2865860'>time</span> <span
  m='2866410'>and</span> <span m='2866510'>another</span> <span
  m='2866700'>for</span> <span m='2866850'>how</span> <span
  m='2867640'>the</span> <span m='2867880'>observations</span> <span
  m='2868780'>or</span> <span m='2868950'>measurements</span> <span
  m='2869510'>evolve,</span> <span m='2870090'>depending</span> <span
  m='2870500'>on</span> <span m='2870580'>the</span> <span
  m='2870650'>underlying</span> <span m='2871060'>states.</span> <span
  m='2871910'>So</span> <span m='2872020'>let's</span> <span
  m='2872250'>first</span> <span m='2872580'>focus</span> <span
  m='2872960'>on</span> <span m='2873990'>a</span> <span
  m='2874100'>state</span> <span m='2874450'>equation</span> <span
  m='2875400'>which</span> <span m='2875640'>describes</span> <span
  m='2876230'>how</span> <span m='2877210'>the</span> <span
  m='2877450'>state</span> <span m='2877940'>progresses</span> <span
  m='2878490'>from</span> <span m='2879260'>the</span> <span
  m='2879410'>state</span> <span m='2879770'>at</span> <span
  m='2879870'>time</span> <span m='2880370'>t</span> <span m='2881070'>to</span>
  <span m='2881310'>the</span> <span m='2881420'>state</span> <span
  m='2881770'>at</span> <span m='2881880'>time</span> <span m='2882180'>t</span>
  <span m='2882390'>plus</span> <span m='2882690'>1.</span> </p><p><span
  m='2885680'>Because</span> <span m='2886020'>this</span> <span
  m='2886200'>is</span> <span m='2886360'>a</span> <span
  m='2886720'>linear</span> <span m='2887370'>state</span> <span
  m='2887720'>space</span> <span m='2888040'>model,</span> <span
  m='2889030'>basically</span> <span m='2889320'>the</span> <span
  m='2889440'>state</span> <span m='2889750'>at</span> <span
  m='2889910'>t</span> <span m='2890100'>plus</span> <span m='2890340'>1</span>
  <span m='2890590'>is</span> <span m='2890710'>going</span> <span
  m='2890820'>to</span> <span m='2890870'>be</span> <span
  m='2891030'>some</span> <span m='2891400'>linear</span> <span
  m='2891800'>function</span> <span m='2892280'>of</span> <span
  m='2892470'>the</span> <span m='2892560'>states</span> <span
  m='2893000'>at</span> <span m='2893110'>time</span> <span m='2893400'>t</span>
  <span m='2893840'>plus</span> <span m='2895270'>some</span> <span
  m='2895550'>noise.</span> <span m='2896640'>And</span> <span
  m='2896990'>that</span> <span m='2897240'>noise</span> <span
  m='2898330'>is</span> <span m='2898550'>given</span> <span
  m='2898920'>by</span> <span m='2902000'>eta</span> <span m='2902300'>t</span>
  <span m='2902570'>being</span> <span m='2904200'>independent</span> <span
  m='2904740'>[? identically ?]</span> <span m='2904930'>distributed</span>
  <span m='2905580'>white</span> <span m='2906270'>noise</span> <span
  m='2906670'>or</span> <span m='2906830'>normally</span> <span
  m='2907200'>distributed</span> <span m='2909630'>with</span> <span
  m='2909950'>some</span> <span m='2910660'>covariance</span> <span
  m='2911180'>matrix</span> <span m='2911600'>qt</span> <span
  m='2912320'>positive</span> <span m='2912760'>definite.</span> <span
  m='2913910'>And</span> <span m='2914170'>rt</span> <span m='2915170'>is</span>
  <span m='2915570'>some</span> <span m='2916600'>linear</span> <span
  m='2916900'>transformation</span> <span m='2917740'>of</span> <span
  m='2918040'>those,</span> <span m='2919140'>which</span> <span
  m='2919750'>characterize</span> <span m='2920460'>the</span> <span
  m='2920620'>uncertainty</span> <span m='2921180'>in the</span> <span
  m='2921370'>particular</span> <span m='2921840'>states.</span> </p><p><span
  m='2922880'>So</span> <span m='2923070'>there's</span> <span
  m='2923840'>a</span> <span m='2923920'>great</span> <span
  m='2924200'>deal</span> <span m='2924360'>of</span> <span
  m='2924440'>flexibility</span> <span m='2925160'>here</span> <span
  m='2925470'>in</span> <span m='2925550'>how</span> <span
  m='2925800'>things</span> <span m='2926170'>depend</span> <span
  m='2926510'>on</span> <span m='2926620'>each</span> <span
  m='2926810'>other.</span> <span m='2927830'>And</span> <span
  m='2929120'>right</span> <span m='2929400'>now,</span> <span
  m='2929980'>it</span> <span m='2930280'>will</span> <span
  m='2930520'>appear</span> <span m='2932020'>just</span> <span
  m='2932200'>like</span> <span m='2932340'>a</span> <span
  m='2932400'>lot</span> <span m='2932550'>of</span> <span
  m='2932630'>notation.</span> <span m='2933090'>But</span> <span
  m='2933200'>as</span> <span m='2933320'>we</span> <span m='2933450'>see</span>
  <span m='2933680'>it</span> <span m='2933810'>in</span> <span
  m='2933940'>different</span> <span m='2934230'>cases,</span> <span
  m='2934700'>you'll</span> <span m='2934760'>see</span> <span
  m='2935170'>how</span> <span m='2936140'>these</span> <span
  m='2936340'>terms</span> <span m='2937010'>come</span> <span
  m='2937240'>into</span> <span m='2937420'>play.</span> <span
  m='2937750'>And</span> <span m='2938190'>they're</span> <span
  m='2938320'>very</span> <span m='2939170'>straightforward.</span> </p><p><span
  m='2942510'>So</span> <span m='2942650'>we're</span> <span
  m='2942740'>considering</span> <span m='2943250'>simple</span> <span
  m='2943630'>linear</span> <span m='2943930'>transformations</span> <span
  m='2944800'>of</span> <span m='2944900'>the</span> <span
  m='2944980'>states</span> <span m='2945370'>plus</span> <span
  m='2945710'>noise.</span> <span m='2947080'>And</span> <span
  m='2947210'>then</span> <span m='2947390'>the</span> <span
  m='2947600'>observation</span> <span m='2948250'>equation</span> <span
  m='2949310'>or measurement</span> <span m='2949690'>equation</span> <span
  m='2951140'>is</span> <span m='2951920'>a</span> <span
  m='2952060'>linear</span> <span m='2952390'>transformation</span> <span
  m='2953080'>of</span> <span m='2953160'>the</span> <span
  m='2953250'>underlying</span> <span m='2953620'>states</span> <span
  m='2954080'>plus</span> <span m='2954380'>noise.</span> <span
  m='2957230'>So</span> <span m='2957810'>the</span> <span
  m='2957970'>matrix</span> <span m='2958370'>zt</span> <span
  m='2958850'>is</span> <span m='2959040'>the</span> <span
  m='2959150'>observation</span> <span m='2959640'>coefficients</span> <span
  m='2960230'>matrix.</span> <span m='2961500'>And</span> <span
  m='2961760'>the</span> <span m='2961860'>noise</span> <span
  m='2962930'>or</span> <span m='2963020'>innovations</span> <span
  m='2963550'>epsilon</span> <span m='2963940'>t</span> <span
  m='2965080'>are,</span> <span m='2965460'>we'll</span> <span
  m='2965700'>assume,</span> <span m='2965900'>independent</span> <span
  m='2966300'>[? identically ?]</span> <span m='2966700'>distributed,</span>
  <span m='2967250'>normal</span> <span m='2967890'>multivariate</span> <span
  m='2968350'>normal,</span> <span m='2968550'>[INAUDIBLE]</span> <span
  m='2969210'>some</span> <span m='2969810'>covariance</span> <span
  m='2970300'>matrix,</span> <span m='2970730'>ht.</span> </p><p><span
  m='2973550'>To</span> <span m='2973620'>be</span> <span
  m='2973750'>fully</span> <span m='2974040'>general,</span> <span
  m='2974870'>the</span> <span m='2975000'>subscript</span> <span
  m='2975480'>t</span> <span m='2975760'>means</span> <span
  m='2977420'>the</span> <span m='2977640'>covariance</span> <span
  m='2978180'>can</span> <span m='2978420'>depend</span> <span
  m='2978760'>on</span> <span m='2978870'>time</span> <span
  m='2979130'>t.</span> <span m='2980800'>It</span> <span
  m='2981190'>doesn't</span> <span m='2981440'>have</span> <span
  m='2981740'>to,</span> <span m='2982630'>but</span> <span
  m='2982770'>it</span> <span m='2982880'>can.</span> <span
  m='2984780'>These</span> <span m='2985040'>two</span> <span
  m='2985230'>equations</span> <span m='2985930'>can</span> <span
  m='2986100'>be</span> <span m='2986430'>written</span> <span
  m='2987970'>together</span> <span m='2988600'>in</span> <span
  m='2988720'>a</span> <span m='2988840'>joint</span> <span
  m='2989120'>equation</span> <span m='2990310'>where</span> <span
  m='2991660'>we</span> <span m='2991820'>see</span> <span
  m='2992010'>that</span> <span m='2992160'>the</span> <span
  m='2992290'>underlying</span> <span m='2992830'>state</span> <span
  m='2993940'>at</span> <span m='2994100'>time</span> <span
  m='2994400'>ts</span> <span m='2996020'>gets</span> <span
  m='2996270'>transformed</span> <span m='2997200'>with</span> <span
  m='2997500'>T</span> <span m='2998160'>sub</span> <span m='2998410'>t</span>
  <span m='2999370'>to</span> <span m='2999510'>the</span> <span
  m='2999640'>state</span> <span m='3000290'>at</span> <span
  m='3000500'>t</span> <span m='3000780'>plus</span> <span m='3001070'>1</span>
  <span m='3001540'>plus</span> <span m='3001850'>residual</span> <span
  m='3003790'>innovation</span> <span m='3004270'>term.</span> <span
  m='3004550'>And</span> <span m='3004760'>the</span> <span
  m='3004890'>observation</span> <span m='3005820'>equation</span> <span
  m='3006200'>yt</span> <span m='3006840'>is</span> <span m='3007120'>zt</span>
  <span m='3007500'>st</span> <span m='3007880'>plus</span> <span
  m='3008370'>that.</span> </p><p><span m='3008720'>So</span> <span
  m='3009400'>we're</span> <span m='3009740'>representing</span> <span
  m='3010830'>how</span> <span m='3011030'>the</span> <span
  m='3011140'>states</span> <span m='3011480'>evolve</span> <span
  m='3011810'>over</span> <span m='3012020'>time</span> <span
  m='3012430'>and</span> <span m='3012510'>how</span> <span
  m='3012850'>the</span> <span m='3013030'>observations</span> <span
  m='3013920'>depend</span> <span m='3014290'>on</span> <span
  m='3014360'>the</span> <span m='3014510'>underlying</span> <span
  m='3014910'>states</span> <span m='3015850'>in</span> <span
  m='3016000'>this</span> <span m='3016210'>joint</span> <span
  m='3016520'>equation.</span> <span m='3019770'>And</span> <span
  m='3019880'>the</span> <span m='3019960'>structure</span> <span
  m='3021400'>of</span> <span m='3022490'>basically</span> <span
  m='3023410'>this</span> <span m='3023630'>sort</span> <span
  m='3023950'>of</span> <span m='3024040'>linear</span> <span
  m='3024340'>function</span> <span m='3024670'>of</span> <span
  m='3024750'>states</span> <span m='3025180'>plus</span> <span
  m='3025420'>error,</span> <span m='3026950'>the</span> <span
  m='3027220'>error</span> <span m='3027560'>term</span> <span
  m='3027880'>ut</span> <span m='3028400'>here</span> <span
  m='3029290'>is</span> <span m='3030340'>normally</span> <span
  m='3030740'>distributed</span> <span m='3031440'>with</span> <span
  m='3031640'>covariance</span> <span m='3032130'>matrix</span> <span
  m='3032620'>omega,</span> <span m='3033740'>which</span> <span
  m='3033970'>has</span> <span m='3034310'>this</span> <span
  m='3035510'>structure.</span> <span m='3036690'>It's</span> <span
  m='3037530'>a</span> <span m='3037690'>block</span> <span
  m='3038050'>diagonal.</span> </p><p><span m='3038850'>We</span> <span
  m='3038910'>have</span> <span m='3039140'>the</span> <span
  m='3039560'>covariance</span> <span m='3040130'>of</span> <span
  m='3040230'>the</span> <span m='3040370'>epsilons</span> <span
  m='3041810'>as</span> <span m='3041990'>the</span> <span m='3042170'>h.</span>
  <span m='3042942'>And the</span> <span m='3043330'>covariance</span> <span
  m='3043840'>of</span> <span m='3043960'>rt</span> <span m='3044840'>eta</span>
  <span m='3045120'>t</span> <span m='3045460'>is</span> <span
  m='3046300'>rt</span> <span m='3046683'>qt</span> <span m='3047066'>rt</span>
  <span m='3047660'>transpose.</span> <span m='3048860'>So</span> <span
  m='3050320'>you</span> <span m='3050460'>may</span> <span
  m='3050610'>recall</span> <span m='3051480'>when</span> <span
  m='3051660'>we</span> <span m='3051770'>take</span> <span m='3051980'>a</span>
  <span m='3052060'>covariance</span> <span m='3052840'>matrix</span> <span
  m='3054660'>of</span> <span m='3056690'>linear</span> <span
  m='3057160'>function</span> <span m='3057560'>of</span> <span
  m='3057670'>random</span> <span m='3058010'>variables</span> <span
  m='3059810'>given</span> <span m='3060050'>by</span> <span
  m='3060250'>a</span> <span m='3060300'>matrix,</span> <span
  m='3061210'>then</span> <span m='3062190'>it's</span> <span
  m='3062400'>that</span> <span m='3062910'>linear</span> <span
  m='3063250'>function,</span> <span m='3063720'>r,</span> <span
  m='3064080'>times</span> <span m='3064350'>the</span> <span
  m='3064450'>covariance</span> <span m='3064930'>matrix</span> <span
  m='3065310'>times</span> <span m='3065590'>the</span> <span
  m='3065670'>transpose.</span> </p><p><span m='3067970'>So</span> <span
  m='3068120'>that</span> <span m='3068410'>term</span> <span
  m='3069530'>comes</span> <span m='3070304'>into play.</span> <span
  m='3072910'>So</span> <span m='3073040'>let's</span> <span
  m='3073250'>see</span> <span m='3073510'>how</span> <span m='3075260'>a</span>
  <span m='3075890'>capital</span> <span m='3076270'>asset</span> <span
  m='3076490'>pricing</span> <span m='3076860'>model</span> <span
  m='3077120'>with</span> <span m='3077240'>time</span> <span
  m='3077520'>varying</span> <span m='3077820'>betas</span> <span
  m='3078880'>can</span> <span m='3079000'>be</span> <span
  m='3079130'>represented</span> <span m='3079720'>as</span> <span
  m='3080280'>a</span> <span m='3080450'>linear</span> <span
  m='3080640'>state</span> <span m='3080890'>space</span> <span
  m='3081240'>model.</span> <span m='3084220'>You'll</span> <span
  m='3084460'>recall,</span> <span m='3084930'>we</span> <span
  m='3085030'>discussed</span> <span m='3085450'>this</span> <span
  m='3085780'>model</span> <span m='3087590'>a</span> <span
  m='3087660'>few</span> <span m='3087850'>lectures</span> <span
  m='3088220'>ago,</span> <span m='3089180'>where</span> <span
  m='3090310'>we</span> <span m='3090440'>have</span> <span
  m='3090750'>the</span> <span m='3090960'>excess</span> <span
  m='3091370'>return</span> <span m='3091770'>of</span> <span
  m='3091830'>a</span> <span m='3091900'>given</span> <span
  m='3092130'>stock,</span> <span m='3092620'>rt,</span> <span
  m='3093870'>is</span> <span m='3094710'>a</span> <span
  m='3094860'>linear</span> <span m='3095200'>function</span> <span
  m='3096277'>of</span> <span m='3097590'>the</span> <span
  m='3097700'>excess</span> <span m='3098060'>return</span> <span
  m='3098510'>of</span> <span m='3098620'>the</span> <span
  m='3098700'>market</span> <span m='3099150'>portfolio,</span> <span
  m='3100530'>rmt,</span> <span m='3101720'>plus</span> <span
  m='3101960'>error.</span> </p><p><span m='3103710'>What</span> <span
  m='3103970'>we're</span> <span m='3104420'>going</span> <span
  m='3104650'>to</span> <span m='3104750'>do</span> <span m='3104950'>now</span>
  <span m='3105590'>is</span> <span m='3106290'>extend</span> <span
  m='3106760'>that</span> <span m='3106960'>previous</span> <span
  m='3107410'>model</span> <span m='3108310'>by</span> <span
  m='3108500'>adding</span> <span m='3109640'>time</span> <span
  m='3110200'>dependence,</span> <span m='3110820'>t,</span> <span
  m='3111240'>to</span> <span m='3112250'>the</span> <span
  m='3112950'>regression</span> <span m='3113580'>parameters.</span> <span
  m='3114170'>The</span> <span m='3114300'>alpha</span> <span
  m='3115110'>is</span> <span m='3115280'>not a</span> <span
  m='3115760'>constant.</span> <span m='3116320'>It is</span> <span
  m='3116480'>going</span> <span m='3116600'>to</span> <span
  m='3116640'>vary</span> <span m='3116920'>by</span> <span
  m='3117130'>time.</span> <span m='3118060'>And</span> <span
  m='3118250'>the</span> <span m='3118330'>beta</span> <span
  m='3119300'>is</span> <span m='3119520'>also</span> <span m='3119860'>going
  to</span> <span m='3119920'>very</span> <span m='3120190'>by</span> <span
  m='3120390'>time.</span> </p><p><span m='3122700'>And</span> <span
  m='3122840'>how</span> <span m='3123240'>will</span> <span
  m='3123650'>they</span> <span m='3124040'>vary</span> <span
  m='3124350'>by</span> <span m='3124530'>time?</span> <span
  m='3124810'>Well,</span> <span m='3125000'>we're</span> <span
  m='3125140'>going</span> <span m='3125380'>to</span> <span
  m='3125610'>assume</span> <span m='3126140'>that</span> <span
  m='3127290'>the</span> <span m='3127430'>alpha</span> <span
  m='3127720'>t</span> <span m='3128970'>is</span> <span m='3130030'>a</span>
  <span m='3130240'>Gaussian</span> <span m='3130680'>random</span> <span
  m='3131060'>walk.</span> <span m='3133520'>And</span> <span
  m='3134150'>the</span> <span m='3134230'>beta</span> <span
  m='3134720'>is</span> <span m='3135010'>also</span> <span m='3136100'>a</span>
  <span m='3136360'>Gaussian</span> <span m='3137110'>random</span> <span
  m='3137490'>walk.</span> </p><p><span m='3148810'>And</span> <span
  m='3148950'>with</span> <span m='3149080'>that</span> <span
  m='3149940'>set</span> <span m='3150260'>up,</span> <span
  m='3151400'>we</span> <span m='3151540'>have</span> <span
  m='3151720'>the</span> <span m='3151870'>following</span> <span
  m='3153130'>expression</span> <span m='3153670'>for</span> <span
  m='3153790'>the</span> <span m='3153920'>state</span> <span
  m='3154220'>equation.</span> <span m='3155450'>OK,</span> <span
  m='3155680'>the</span> <span m='3155800'>state</span> <span
  m='3156070'>equation,</span> <span m='3156580'>which</span> <span
  m='3156730'>is</span> <span m='3156820'>just</span> <span
  m='3157000'>the</span> <span m='3157110'>unknown</span> <span
  m='3157410'>parameters--</span> <span m='3158460'>it's</span> <span
  m='3158620'>the</span> <span m='3158750'>alpha</span> <span
  m='3159210'>and</span> <span m='3159310'>the</span> <span
  m='3159390'>beta</span> <span m='3159655'>at</span> <span
  m='3159920'>given</span> <span m='3160230'>time</span> <span
  m='3160510'>t.</span> <span m='3163660'>The</span> <span
  m='3163820'>state</span> <span m='3164230'>at</span> <span
  m='3164360'>time</span> <span m='3164660'>t</span> <span
  m='3165060'>gets</span> <span m='3165300'>adjusted</span> <span
  m='3165720'>to</span> <span m='3165780'>the</span> <span
  m='3165910'>state</span> <span m='3166220'>at</span> <span
  m='3166310'>time</span> <span m='3166550'>t</span> <span
  m='3166750'>plus</span> <span m='3166990'>1</span> <span m='3167200'>by</span>
  <span m='3167340'>just</span> <span m='3167580'>adding</span> <span
  m='3168010'>these</span> <span m='3168750'>random</span> <span
  m='3169070'>walk</span> <span m='3169340'>terms</span> <span
  m='3169710'>to</span> <span m='3169870'>it.</span> <span m='3170100'>So</span>
  <span m='3170270'>it's</span> <span m='3170380'>a</span> <span
  m='3170410'>very</span> <span m='3170620'>simple</span> <span
  m='3171220'>process.</span> <span m='3172290'>We</span> <span
  m='3172480'>have</span> <span m='3172660'>the</span> <span
  m='3172800'>identity</span> <span m='3173500'>times</span> <span
  m='3173880'>the</span> <span m='3173980'>previous</span> <span
  m='3174500'>state</span> <span m='3175270'>plus</span> <span
  m='3175530'>the</span> <span m='3175670'>identity</span> <span
  m='3176220'>times</span> <span m='3176550'>this</span> <span
  m='3176790'>vector</span> <span m='3177220'>of</span> <span
  m='3177320'>these</span> <span m='3177510'>innovations.</span> </p><p><span
  m='3178930'>So</span> <span m='3179720'>st</span> <span
  m='3180190'>plus</span> <span m='3180520'>1</span> <span m='3180870'>is</span>
  <span m='3181020'>equal</span> <span m='3181250'>to</span> <span
  m='3181530'>tt,</span> <span m='3182005'>st</span> <span
  m='3182480'>plus</span> <span m='3182700'>rt</span> <span
  m='3183060'>eta</span> <span m='3183320'>t,</span> <span
  m='3184120'>where</span> <span m='3185830'>this</span> <span
  m='3186020'>matrix,</span> <span m='3186430'>t</span> <span m='3186620'>sub
  t</span> <span m='3187060'>and</span> <span m='3187210'>r sub t</span> <span
  m='3187630'>are</span> <span m='3188140'>trivial.</span> <span
  m='3188720'>They're</span> <span m='3188800'>just</span> <span
  m='3188970'>the</span> <span m='3189080'>identity.</span> <span
  m='3190290'>And</span> <span m='3190570'>eta</span> <span m='3190880'>t</span>
  <span m='3193610'>has</span> <span m='3193850'>a</span> <span
  m='3194710'>covariance</span> <span m='3195270'>matrix</span> <span
  m='3195710'>which</span> <span m='3195870'>is</span> <span
  m='3195960'>just</span> <span m='3196170'>given</span> <span
  m='3196720'>by</span> <span m='3196910'>qt</span> <span
  m='3197870'>sigma</span> <span m='3198100'>squared</span> <span
  m='3198330'>neu,</span> <span m='3198985'>sigma</span> <span
  m='3199500'>squared</span> <span m='3199810'>epsilon.</span> <span
  m='3202560'>This</span> <span m='3202790'>is</span> <span m='3202910'>a</span>
  <span m='3205650'>complex</span> <span m='3206540'>way,</span> <span
  m='3207030'>perhaps,</span> <span m='3207430'>of</span> <span
  m='3207760'>representing</span> <span m='3208290'>this</span> <span
  m='3208460'>model.</span> <span m='3208680'>But</span> <span
  m='3208940'>it</span> <span m='3209170'>puts</span> <span
  m='3209800'>this</span> <span m='3210210'>simple</span> <span
  m='3210570'>model</span> <span m='3210910'>into</span> <span
  m='3211190'>that</span> <span m='3211940'>linear</span> <span
  m='3212250'>states</span> <span m='3212570'>based</span> <span
  m='3212820'>framework.</span> </p><p><span m='3216670'>Now,</span> <span
  m='3216910'>the</span> <span m='3217130'>observation</span> <span
  m='3217830'>equation</span> <span m='3220110'>is</span> <span
  m='3222130'>given</span> <span m='3222520'>by</span> <span
  m='3222730'>this</span> <span m='3224080'>expression</span> <span
  m='3225660'>defining</span> <span m='3226230'>the</span> <span
  m='3226370'>zt</span> <span m='3226900'>matrix</span> <span
  m='3227570'>as</span> <span m='3229130'>the</span> <span
  m='3229220'>unit</span> <span m='3230080'>element</span> <span
  m='3230500'>in</span> <span m='3230640'>Rmt.</span> <span
  m='3232000'>So</span> <span m='3232250'>it's</span> <span
  m='3232420'>basically</span> <span m='3233100'>a</span> <span
  m='3233400'>row</span> <span m='3234430'>vector</span> <span m='3235510'>or
  a</span> <span m='3235720'>row</span> <span m='3235920'>matrix,</span> <span
  m='3236630'>one-row</span> <span m='3237010'>matrix.</span> <span
  m='3238150'>And</span> <span m='3238740'>epsilon</span> <span
  m='3239150'>t</span> <span m='3239540'>is</span> <span m='3240060'>the</span>
  <span m='3240170'>white</span> <span m='3240370'>noise</span> <span
  m='3240640'>process.</span> </p><p><span m='3242180'>Now,</span> <span
  m='3242320'>putting</span> <span m='3242610'>these</span> <span
  m='3242800'>equations</span> <span m='3243390'>together,</span> <span
  m='3245570'>we</span> <span m='3245740'>basically</span> <span
  m='3246210'>have</span> <span m='3246640'>the</span> <span
  m='3246760'>equation</span> <span m='3247160'>for</span> <span
  m='3247270'>the</span> <span m='3247390'>state</span> <span
  m='3248020'>transition</span> <span m='3249270'>and</span> <span
  m='3249490'>the</span> <span m='3249670'>observation</span> <span
  m='3251100'>equation</span> <span m='3252010'>together.</span> <span
  m='3253230'>We</span> <span m='3253410'>have</span> <span
  m='3254450'>this</span> <span m='3255300'>form</span> <span
  m='3255780'>for</span> <span m='3255980'>that.</span> </p><p><span
  m='3265780'>So</span> <span m='3265940'>now,</span> <span
  m='3266630'>let's</span> <span m='3266890'>consider</span> <span
  m='3267250'>a</span> <span m='3267310'>second</span> <span
  m='3267710'>case</span> <span m='3268522'>of</span> <span
  m='3269670'>linear</span> <span m='3270010'>regression</span> <span
  m='3270510'>models</span> <span m='3271080'>where</span> <span
  m='3271360'>we</span> <span m='3271480'>have</span> <span m='3271710'>a</span>
  <span m='3271820'>time</span> <span m='3272250'>varying</span> <span
  m='3272730'>beta.</span> <span m='3273780'>In</span> <span
  m='3273900'>a</span> <span m='3273960'>way,</span> <span
  m='3274360'>this</span> <span m='3275480'>case</span> <span
  m='3275840'>we</span> <span m='3275960'>just</span> <span
  m='3276220'>looked</span> <span m='3276470'>at</span> <span
  m='3277140'>is</span> <span m='3277480'>a</span> <span
  m='3278060'>simple</span> <span m='3278450'>case</span> <span
  m='3278780'>of</span> <span m='3278860'>that.</span> <span
  m='3280000'>But</span> <span m='3280190'>let's</span> <span
  m='3280420'>look</span> <span m='3280550'>at</span> <span m='3280610'>a</span>
  <span m='3280650'>more</span> <span m='3280860'>general</span> <span
  m='3281210'>case</span> <span m='3281540'>where</span> <span
  m='3281820'>we</span> <span m='3281960'>have</span> <span m='3282700'>p</span>
  <span m='3282970'>independent</span> <span m='3283460'>variables,</span> <span
  m='3285150'>which</span> <span m='3285270'>could</span> <span
  m='3285410'>be</span> <span m='3285830'>time</span> <span
  m='3286110'>varying.</span> <span m='3287190'>So</span> <span
  m='3288120'>we</span> <span m='3288270'>have</span> <span m='3290060'>a</span>
  <span m='3290150'>regression</span> <span m='3290690'>model</span> <span
  m='3291190'>almost</span> <span m='3291670'>as</span> <span
  m='3291860'>we've</span> <span m='3292210'>considered</span> <span
  m='3292710'>it</span> <span m='3292840'>previously.</span> <span
  m='3294040'>yt</span> <span m='3294660'>is</span> <span
  m='3294780'>equal</span> <span m='3294940'>to</span> <span
  m='3295000'>xt,</span> <span m='3296070'>transpose</span> <span
  m='3296600'>beta</span> <span m='3297300'>t</span> <span
  m='3297620'>plus</span> <span m='3297820'>epsilon</span> <span
  m='3298110'>t.</span> </p><p><span m='3298400'>The difference</span> <span
  m='3298760'>now</span> <span m='3299040'>is</span> <span
  m='3299620'>our</span> <span m='3299780'>regression</span> <span
  m='3300210'>coefficients,</span> <span m='3300850'>beta,</span> <span
  m='3301590'>are</span> <span m='3301740'>allowed</span> <span
  m='3302060'>to</span> <span m='3302160'>change</span> <span
  m='3302930'>over</span> <span m='3303180'>time.</span> <span
  m='3309880'>How</span> <span m='3310160'>do</span> <span
  m='3310220'>they</span> <span m='3310390'>change</span> <span
  m='3310760'>over</span> <span m='3310920'>time?</span> <span
  m='3311180'>Well,</span> <span m='3311350'>we're</span> <span
  m='3311750'>going</span> <span m='3311970'>to</span> <span
  m='3312040'>assume</span> <span m='3312440'>that</span> <span
  m='3312650'>those</span> <span m='3313500'>also</span> <span
  m='3314120'>follow</span> <span m='3314630'>independent</span> <span
  m='3315400'>random</span> <span m='3315810'>walks</span> <span
  m='3317150'>with</span> <span m='3318470'>variances</span> <span
  m='3319120'>of</span> <span m='3319180'>the</span> <span
  m='3319280'>random</span> <span m='3319590'>walks</span> <span
  m='3319900'>that</span> <span m='3320020'>may</span> <span
  m='3320170'>depend</span> <span m='3320570'>on</span> <span
  m='3321030'>the</span> <span m='3321140'>component.</span> </p><p><span
  m='3323090'>So</span> <span m='3323210'>the</span> <span
  m='3323340'>joint</span> <span m='3323660'>state</span> <span
  m='3323980'>space</span> <span m='3324330'>equation</span> <span
  m='3324770'>here</span> <span m='3325780'>is</span> <span
  m='3326000'>given</span> <span m='3326280'>by</span> <span
  m='3328760'>the</span> <span m='3328920'>identity</span> <span
  m='3330000'>times</span> <span m='3330340'>st</span> <span
  m='3331300'>plus</span> <span m='3331810'>eta</span> <span
  m='3332080'>t.</span> <span m='3332530'>That's</span> <span
  m='3333100'>basically</span> <span m='3333410'>the</span> <span
  m='3333560'>random</span> <span m='3333860'>walk</span> <span
  m='3334090'>process</span> <span m='3334610'>for</span> <span
  m='3334700'>the</span> <span m='3334840'>underlying</span> <span
  m='3336360'>regression</span> <span m='3336730'>parameters.</span> <span
  m='3337600'>And</span> <span m='3337830'>yt</span> <span m='3339320'>is</span>
  <span m='3339550'>equal</span> <span m='3339760'>to</span> <span
  m='3340100'>xt</span> <span m='3341860'>transpose</span> <span
  m='3342360'>times</span> <span m='3342990'>the</span> <span
  m='3343100'>same</span> <span m='3343360'>regression</span> <span
  m='3343780'>parameters</span> <span m='3344610'>plus</span> <span
  m='3345040'>the</span> <span m='3345830'>observation</span> <span
  m='3346420'>error.</span> <span m='3356480'>I</span> <span
  m='3356620'>guess</span> <span m='3357220'>needless</span> <span
  m='3357530'>to</span> <span m='3357640'>say,</span> <span
  m='3358130'>if</span> <span m='3358300'>we</span> <span
  m='3358400'>consider</span> <span m='3358660'>the</span> <span
  m='3358760'>special</span> <span m='3359120'>case</span> <span
  m='3359430'>where</span> <span m='3359770'>the</span> <span
  m='3360650'>random</span> <span m='3361000'>walk</span> <span
  m='3361290'>process</span> <span m='3362930'>is</span> <span
  m='3363470'>degenerate</span> <span m='3364610'>and</span> <span
  m='3364790'>they're</span> <span m='3364910'>basically</span> <span
  m='3365330'>steps</span> <span m='3365680'>of</span> <span
  m='3365780'>size</span> <span m='3366170'>zero,</span> <span
  m='3367320'>then</span> <span m='3367830'>we</span> <span
  m='3368060'>get</span> <span m='3368250'>the</span> <span
  m='3368410'>normal</span> <span m='3368750'>linear</span> <span
  m='3369060'>regression</span> <span m='3369450'>model</span> <span
  m='3369940'>coming</span> <span m='3370230'>out</span> <span
  m='3370410'>of</span> <span m='3370490'>this.</span> </p><p><span
  m='3371870'>If</span> <span m='3372080'>we</span> <span
  m='3372240'>were</span> <span m='3372610'>to</span> <span
  m='3374080'>be</span> <span m='3374460'>specifying</span> <span
  m='3375720'>the</span> <span m='3376960'>linear</span> <span
  m='3377320'>state</span> <span m='3377620'>space</span> <span
  m='3377950'>implementation</span> <span m='3378780'>of</span> <span
  m='3378900'>this</span> <span m='3379100'>model</span> <span
  m='3380220'>and</span> <span m='3380800'>consider</span> <span
  m='3381260'>successive</span> <span m='3381890'>estimates</span> <span
  m='3382810'>of</span> <span m='3382970'>the</span> <span
  m='3383040'>model</span> <span m='3383320'>parameters</span> <span
  m='3383910'>over</span> <span m='3384140'>time,</span> <span
  m='3385270'>then</span> <span m='3386330'>these</span> <span
  m='3386550'>equations</span> <span m='3387040'>would</span> <span
  m='3387210'>give</span> <span m='3387350'>us</span> <span
  m='3387630'>recursive</span> <span m='3388390'>estimates</span> <span
  m='3388970'>for</span> <span m='3389910'>updating</span> <span
  m='3390710'>regressions</span> <span m='3393490'>as</span> <span
  m='3393720'>we</span> <span m='3393880'>add</span> <span
  m='3394080'>additional</span> <span m='3394790'>values</span> <span
  m='3395210'>to the</span> <span m='3395340'>data,</span> <span
  m='3396570'>additional</span> <span m='3396950'>observations</span> <span
  m='3397520'>to the</span> <span m='3397720'>data.</span> <span
  m='3403880'>Let's</span> <span m='3404260'>look</span> <span
  m='3404500'>at</span> <span m='3404760'>autoregressive</span> <span
  m='3405520'>models</span> <span m='3407210'>of order p.</span> </p><p><span
  m='3409960'>The</span> <span m='3411510'>autoregressive</span> <span
  m='3411990'>model</span> <span m='3412270'>of</span> <span
  m='3412380'>order</span> <span m='3412590'>p</span> <span m='3413530'>for
  a</span> <span m='3413960'>univariate</span> <span m='3415270'>time</span>
  <span m='3415780'>series</span> <span m='3417430'>has</span> <span
  m='3417710'>the</span> <span m='3419250'>setup</span> <span
  m='3420100'>given</span> <span m='3420360'>here.</span> <span
  m='3421670'>It's</span> <span m='3421880'>a</span> <span
  m='3422110'>polynomial</span> <span m='3422850'>lag</span> <span
  m='3423430'>of</span> <span m='3424590'>the</span> <span
  m='3426990'>response</span> <span m='3427470'>variable</span> <span
  m='3427770'>yt</span> <span m='3428180'>is</span> <span
  m='3428300'>equal</span> <span m='3428540'>to</span> <span
  m='3428630'>the</span> <span m='3428760'>innovation</span> <span
  m='3429230'>epsilon</span> <span m='3429690'>t.</span> <span
  m='3430940'>And</span> <span m='3433230'>we</span> <span
  m='3433390'>can</span> <span m='3433540'>define</span> <span
  m='3434120'>the</span> <span m='3434230'>state</span> <span
  m='3434660'>vector</span> <span m='3436130'>to</span> <span
  m='3436270'>be</span> <span m='3436550'>equal</span> <span
  m='3436930'>to</span> <span m='3438380'>the</span> <span
  m='3439780'>vector</span> <span m='3440480'>of</span> <span
  m='3441910'>p</span> <span m='3442980'>values,</span> <span
  m='3443730'>p</span> <span m='3443920'>successive</span> <span
  m='3444420'>values</span> <span m='3444980'>of</span> <span
  m='3445990'>the</span> <span m='3446120'>process.</span> </p><p><span
  m='3447650'>And</span> <span m='3449570'>so</span> <span m='3450230'>we</span>
  <span m='3450510'>basically</span> <span m='3450970'>get</span> <span
  m='3451400'>a</span> <span m='3453040'>combination</span> <span
  m='3453710'>here</span> <span m='3453970'>of</span> <span
  m='3454240'>the</span> <span m='3454530'>observation</span> <span
  m='3455970'>equation</span> <span m='3456270'>and</span> <span
  m='3456570'>state</span> <span m='3456860'>equation</span> <span
  m='3458000'>joining</span> <span m='3458700'>where</span> <span
  m='3459620'>basically</span> <span m='3466230'>one</span> <span
  m='3466360'>of</span> <span m='3466400'>the</span> <span
  m='3466470'>states</span> <span m='3466720'>is</span> <span
  m='3466840'>actually</span> <span m='3467110'>equal</span> <span
  m='3467350'>to</span> <span m='3467470'>the</span> <span
  m='3467610'>observation.</span> <span m='3468760'>And</span> <span
  m='3470620'>basically,</span> <span m='3471080'>with</span> <span
  m='3471340'>this</span> <span m='3471820'>definition</span> <span
  m='3472600'>for</span> <span m='3472960'>a</span> <span
  m='3473240'>state</span> <span m='3474470'>of the vector</span> <span
  m='3476430'>at the</span> <span m='3476795'>next</span> <span m='3477160'>time
  point, t,</span> <span m='3479160'>that</span> <span m='3479550'>is</span>
  <span m='3479660'>equal</span> <span m='3479930'>to</span> <span
  m='3480830'>this</span> <span m='3481560'>linear transformation</span> <span
  m='3483730'>of the</span> <span m='3483930'>lag</span> <span
  m='3484270'>state</span> <span m='3484730'>vector</span> <span
  m='3486190'>plus</span> <span m='3486666'>that</span> <span
  m='3487142'>innovation</span> <span m='3487620'>term.</span> <span
  m='3489114'>I dropped</span> <span m='3489612'>the</span> <span
  m='3490110'>mic.</span> </p><p><span m='3496600'>So</span> <span
  m='3498880'>the</span> <span m='3499070'>notation</span> <span
  m='3499720'>here</span> <span m='3500410'>shows</span> <span
  m='3500840'>the</span> <span m='3500950'>structure</span> <span
  m='3501480'>for</span> <span m='3501650'>how</span> <span
  m='3502220'>this</span> <span m='3503860'>linear</span> <span
  m='3504190'>state</span> <span m='3504480'>space</span> <span
  m='3504790'>model</span> <span m='3505120'>is</span> <span
  m='3505230'>evolving.</span> <span m='3506240'>Basically,</span> <span
  m='3507780'>the</span> <span m='3507910'>observation</span> <span
  m='3508490'>equation</span> <span m='3509090'>is</span> <span
  m='3509440'>the</span> <span m='3509540'>linear</span> <span
  m='3509860'>combination</span> <span m='3511310'>of</span> <span
  m='3511970'>the</span> <span m='3512070'>five</span> <span
  m='3512410'>multiples</span> <span m='3512880'>of</span> <span
  m='3513000'>lags</span> <span m='3513470'>of</span> <span
  m='3513590'>the</span> <span m='3514170'>values</span> <span
  m='3515170'>plus</span> <span m='3515410'>the</span> <span
  m='3515510'>residual.</span> <span m='3516500'>And</span> <span
  m='3518260'>the</span> <span m='3518390'>previous</span> <span
  m='3518880'>lags</span> <span m='3519260'>of</span> <span
  m='3519360'>the</span> <span m='3519460'>states</span> <span
  m='3520240'>are</span> <span m='3520390'>just</span> <span
  m='3520580'>simply</span> <span m='3520860'>the</span> <span
  m='3521030'>identities</span> <span m='3521930'>times</span> <span
  m='3522640'>those</span> <span m='3522900'>values,</span> <span
  m='3524270'>shifted.</span> </p><p><span m='3526200'>So</span> <span
  m='3526470'>it's</span> <span m='3526810'>a</span> <span
  m='3526850'>very</span> <span m='3527460'>simple</span> <span
  m='3527800'>structure</span> <span m='3529570'>for</span> <span
  m='3529970'>the</span> <span m='3530220'>autoregressive</span> <span
  m='3530850'>process</span> <span m='3531690'>as</span> <span
  m='3531910'>a</span> <span m='3532040'>linear</span> <span
  m='3532300'>state</span> <span m='3532590'>space</span> <span
  m='3532970'>model.</span> <span m='3536660'>We</span> <span
  m='3536850'>have,</span> <span m='3539020'>as</span> <span
  m='3539220'>I</span> <span m='3539280'>was</span> <span
  m='3539390'>just</span> <span m='3539570'>saying,</span> <span
  m='3540200'>for</span> <span m='3540330'>the</span> <span
  m='3540440'>transition</span> <span m='3541550'>matrix,</span> <span
  m='3542000'>T</span> <span m='3542240'>sub</span> <span m='3542470'>t,</span>
  <span m='3544450'>this</span> <span m='3544660'>matrix</span> <span
  m='3545880'>and</span> <span m='3547760'>the</span> <span
  m='3547880'>observation</span> <span m='3548420'>equation</span> <span
  m='3549750'>is</span> <span m='3549890'>essentially</span> <span
  m='3551460'>picking</span> <span m='3552120'>out</span> <span
  m='3552220'>the</span> <span m='3552320'>first</span> <span
  m='3552660'>element</span> <span m='3553150'>of</span> <span
  m='3553310'>the</span> <span m='3553400'>state</span> <span
  m='3553730'>vector,</span> <span m='3554660'>which</span> <span
  m='3555070'>has</span> <span m='3555340'>no</span> <span
  m='3555580'>measurement</span> <span m='3556080'>error.</span> <span
  m='3556540'>So</span> <span m='3556740'>that</span> <span
  m='3557570'>simplifies</span> <span m='3558140'>that.</span> </p><p><span
  m='3561940'>The</span> <span m='3563170'>moving</span> <span
  m='3563590'>average</span> <span m='3564090'>model</span> <span
  m='3566120'>of</span> <span m='3566200'>order</span> <span
  m='3566540'>q</span> <span m='3567210'>could</span> <span
  m='3567370'>also</span> <span m='3567590'>be</span> <span
  m='3567750'>expressed</span> <span m='3568250'>as a</span> <span
  m='3568390'>linear</span> <span m='3568680'>state</span> <span
  m='3568950'>space</span> <span m='3569290'>model.</span> <span
  m='3577240'>Remember,</span> <span m='3577590'>the</span> <span
  m='3577700'>moving</span> <span m='3578010'>average</span> <span
  m='3578350'>model</span> <span m='3578820'>is</span> <span
  m='3579150'>one</span> <span m='3579390'>where</span> <span
  m='3580090'>our</span> <span m='3580260'>response</span> <span
  m='3580830'>variable,</span> <span m='3581280'>y,</span> <span
  m='3582350'>is</span> <span m='3582540'>simply</span> <span
  m='3583030'>some</span> <span m='3583850'>linear</span> <span
  m='3584160'>combination</span> <span m='3585560'>of</span> <span
  m='3586260'>innovations,</span> <span m='3588290'>q</span> <span
  m='3588840'>past</span> <span m='3589230'>innovations.</span> <span
  m='3590500'>And</span> <span m='3592500'>this</span> <span
  m='3593150'>state</span> <span m='3593540'>vector,</span> <span
  m='3594420'>if</span> <span m='3594900'>we</span> <span
  m='3595030'>consider</span> <span m='3595350'>the</span> <span
  m='3595480'>state</span> <span m='3595800'>vector</span> <span
  m='3596130'>just</span> <span m='3596360'>being</span> <span
  m='3599340'>basically</span> <span m='3599710'>q</span> <span
  m='3600180'>lags</span> <span m='3600600'>of</span> <span
  m='3600680'>the</span> <span m='3600780'>innovations,</span> <span
  m='3601970'>then</span> <span m='3603610'>the</span> <span
  m='3603720'>transition</span> <span m='3604400'>of</span> <span
  m='3604650'>those</span> <span m='3604890'>underlying</span> <span
  m='3605340'>states</span> <span m='3606430'>is</span> <span
  m='3607380'>given</span> <span m='3607650'>by</span> <span
  m='3607830'>this</span> <span m='3608060'>expression</span> <span
  m='3608520'>here.</span> </p><p><span m='3614690'>And</span> <span
  m='3614840'>we</span> <span m='3614990'>have a</span> <span
  m='3615300'>state</span> <span m='3615720'>equation,</span> <span
  m='3616430'>an</span> <span m='3616570'>observation</span> <span
  m='3617160'>equation,</span> <span m='3617770'>which</span> <span
  m='3617890'>has</span> <span m='3618420'>these</span> <span
  m='3618690'>forms</span> <span m='3619050'>for</span> <span
  m='3619170'>these</span> <span m='3619670'>various</span> <span
  m='3621190'>transition</span> <span m='3621760'>matrices</span> <span
  m='3623500'>and</span> <span m='3624670'>for</span> <span
  m='3625100'>how</span> <span m='3625920'>the</span> <span
  m='3627100'>innovation</span> <span m='3627640'>terms</span> <span
  m='3628830'>are</span> <span m='3630350'>related.</span> <span
  m='3640840'>Let</span> <span m='3640950'>me</span> <span
  m='3641040'>just</span> <span m='3641290'>finish</span> <span
  m='3641800'>up</span> <span m='3642290'>with</span> <span
  m='3642570'>example</span> <span m='3643160'>showing</span> <span
  m='3643520'>with</span> <span m='3643740'>the</span> <span
  m='3643850'>autoregressive</span> <span m='3644410'>moving</span> <span
  m='3644720'>average</span> <span m='3645140'>model.</span> <span
  m='3647780'>And</span> <span m='3648090'>many</span> <span
  m='3648390'>years</span> <span m='3648660'>ago,</span> <span m='3648870'>it
  was</span> <span m='3649020'>actually</span> <span m='3649340'>very</span>
  <span m='3649770'>difficult</span> <span m='3650990'>to</span> <span
  m='3651450'>specify</span> <span m='3654070'>the</span> <span
  m='3654870'>estimation</span> <span m='3655490'>methods</span> <span
  m='3655900'>for</span> <span m='3656300'>autoregressive</span> <span
  m='3656820'>moving</span> <span m='3657130'>average</span> <span
  m='3657500'>models.</span> </p><p><span m='3658902'>But</span> <span
  m='3659360'>the</span> <span m='3659440'>implementation</span> <span
  m='3660180'>of</span> <span m='3660240'>these</span> <span
  m='3660420'>models</span> <span m='3660800'>as</span> <span
  m='3661830'>linear</span> <span m='3662150'>state</span> <span
  m='3662420'>space</span> <span m='3662740'>models</span> <span
  m='3663130'>facilitated</span> <span m='3663740'>that</span> <span
  m='3663940'>greatly.</span> <span m='3665590'>And</span> <span
  m='3666480'>with</span> <span m='3666770'>the</span> <span
  m='3667280'>ARMA</span> <span m='3667670'>model,</span> <span
  m='3670550'>the</span> <span m='3670650'>set</span> <span
  m='3670840'>up</span> <span m='3672260'>basically</span> <span
  m='3673030'>is</span> <span m='3673510'>a</span> <span
  m='3673540'>combination</span> <span m='3674010'>of</span> <span
  m='3674060'>the</span> <span m='3674180'>autoregressive</span> <span
  m='3674730'>moving</span> <span m='3675090'>average</span> <span
  m='3675510'>processes.</span> <span m='3676900'>We</span> <span
  m='3677050'>have</span> <span m='3677740'>an</span> <span
  m='3677890'>autoregressive</span> <span m='3678680'>of</span> <span
  m='3678820'>the</span> <span m='3678920'>y's</span> <span
  m='3680280'>is</span> <span m='3680470'>equal</span> <span m='3680730'>to
  a</span> <span m='3680920'>moving</span> <span m='3681300'>average</span>
  <span m='3681770'>of</span> <span m='3682310'>the</span> <span
  m='3682420'>residuals</span> <span m='3684820'>or</span> <span
  m='3684970'>the</span> <span m='3685080'>innovations.</span> <span
  m='3688170'>And</span> <span m='3688420'>it's</span> <span
  m='3688780'>convenient</span> <span m='3689500'>in</span> <span
  m='3689620'>the</span> <span m='3689710'>setup</span> <span
  m='3690060'>for</span> <span m='3690320'>linear</span> <span
  m='3690640'>state</span> <span m='3690920'>space</span> <span
  m='3691250'>models</span> <span m='3692550'>to</span> <span
  m='3692860'>define</span> <span m='3695220'>the</span> <span
  m='3695390'>dimension,</span> <span m='3695850'>m,</span> <span
  m='3696170'>which</span> <span m='3696350'>is</span> <span
  m='3696440'>the</span> <span m='3696520'>maximum</span> <span
  m='3697000'>of</span> <span m='3697120'>p</span> <span m='3697380'>and</span>
  <span m='3697490'>q</span> <span m='3697720'>plus</span> <span
  m='3698010'>1,</span> <span m='3698950'>and</span> <span
  m='3699170'>think</span> <span m='3699450'>of</span> <span
  m='3700960'>having</span> <span m='3701820'>basically</span> <span
  m='3703400'>a</span> <span m='3703520'>possibly</span> <span
  m='3704890'>m</span> <span m='3705170'>order</span> <span
  m='3705860'>polynomial</span> <span m='3707000'>lag</span> <span
  m='3707720'>for</span> <span m='3707890'>each</span> <span
  m='3708020'>of</span> <span m='3708120'>those</span> <span
  m='3708380'>two</span> <span m='3708580'>series.</span> </p><p><span
  m='3710860'>And</span> <span m='3711370'>we</span> <span
  m='3712150'>can</span> <span m='3712300'>basically</span> <span
  m='3712690'>constrain</span> <span m='3713820'>those</span> <span
  m='3714110'>values</span> <span m='3715060'>to</span> <span
  m='3715190'>be</span> <span m='3715330'>0</span> <span m='3716620'>if</span>
  <span m='3716840'>m</span> <span m='3717070'>is</span> <span
  m='3717190'>greater</span> <span m='3717430'>than</span> <span
  m='3717600'>p</span> <span m='3717870'>or</span> <span m='3718140'>m</span>
  <span m='3718280'>is</span> <span m='3718420'>greater</span> <span
  m='3718650'>than q.</span> <span m='3726880'>And</span> <span
  m='3728290'>Harvey,</span> <span m='3728970'>in</span> <span
  m='3729100'>a</span> <span m='3729230'>very</span> <span
  m='3729500'>important</span> <span m='3729920'>work</span> <span
  m='3730190'>in</span> <span m='3730340'>'93,</span> <span
  m='3731240'>actually</span> <span m='3732440'>defined</span> <span
  m='3735020'>a</span> <span m='3735140'>particular</span> <span
  m='3735580'>state</span> <span m='3735890'>space</span> <span
  m='3736230'>representation</span> <span m='3737080'>for</span> <span
  m='3737210'>this</span> <span m='3737520'>process.</span> <span
  m='3739350'>And</span> <span m='3739900'>I</span> <span
  m='3739930'>guess</span> <span m='3740140'>it's</span> <span
  m='3740230'>important</span> <span m='3740640'>to</span> <span
  m='3740730'>know</span> <span m='3740980'>that</span> <span
  m='3741590'>with</span> <span m='3741830'>these</span> <span
  m='3742070'>linear</span> <span m='3742520'>state</span> <span
  m='3742780'>space</span> <span m='3743100'>models,</span> <span
  m='3744310'>we're</span> <span m='3744460'>dealing</span> <span
  m='3744810'>with</span> <span m='3747230'>characterizing</span> <span
  m='3748160'>structure</span> <span m='3749030'>in</span> <span
  m='3750180'>m</span> <span m='3750390'>dimensional</span> <span
  m='3750890'>space.</span> <span m='3751750'>There's</span> <span
  m='3752550'>often</span> <span m='3752870'>some</span> <span
  m='3753170'>choice</span> <span m='3753640'>in</span> <span
  m='3753760'>how</span> <span m='3754080'>you</span> <span
  m='3754380'>represent</span> <span m='3754870'>your</span> <span
  m='3755030'>underlying</span> <span m='3755510'>states.</span> </p><p><span
  m='3757670'>You</span> <span m='3757880'>can</span> <span
  m='3758300'>basically re-parametrize</span> <span m='3759880'>the</span> <span
  m='3760940'>models</span> <span m='3762430'>by</span> <span
  m='3762870'>considering</span> <span m='3764850'>invertible</span> <span
  m='3766000'>linear</span> <span m='3766300'>transformations</span> <span
  m='3767080'>of</span> <span m='3767170'>the</span> <span
  m='3767280'>underlying</span> <span m='3767730'>states.</span> <span
  m='3769760'>So</span> <span m='3770940'>let</span> <span m='3771050'>me</span>
  <span m='3771150'>go</span> <span m='3771300'>back</span> <span
  m='3772450'>here.</span> <span m='3776700'>In</span> <span
  m='3776860'>expressing</span> <span m='3778330'>the</span> <span
  m='3778490'>state</span> <span m='3778800'>equation</span> <span
  m='3779480'>generally</span> <span m='3779990'>is</span> <span
  m='3780670'>T</span> <span m='3781000'>sub</span> <span m='3781200'>t</span>
  <span m='3781675'>st--</span> <span m='3782150'>sorry</span> <span
  m='3782790'>ta to t.</span> <span m='3784190'>This</span> <span
  m='3784460'>matrix,</span> <span m='3784990'>T</span> <span
  m='3785210'>sub</span> <span m='3785430'>t</span> <span m='3785776'>and</span>
  <span m='3786122'>st,</span> <span m='3788230'>the</span> <span
  m='3788430'>st</span> <span m='3788540'>can</span> <span m='3788670'>be</span>
  <span m='3788820'>replaced</span> <span m='3789410'>by</span> <span
  m='3789700'>a</span> <span m='3789780'>linear</span> <span
  m='3790080'>transformation</span> <span m='3790820'>of</span> <span
  m='3790900'>st,</span> <span m='3791280'>so</span> <span
  m='3791420'>long</span> <span m='3791650'>as</span> <span
  m='3791770'>we</span> <span m='3793020'>multiply</span> <span
  m='3794390'>the</span> <span m='3794650'>T</span> <span m='3794930'>sub</span>
  <span m='3795140'>t</span> <span m='3795780'>by</span> <span
  m='3796240'>the</span> <span m='3796410'>inverse</span> <span
  m='3796730'>of</span> <span m='3796830'>that</span> <span
  m='3797080'>transformation.</span> </p><p><span m='3797850'>So</span> <span
  m='3797920'>there's</span> <span m='3798560'>flexibility</span> <span
  m='3799240'>in</span> <span m='3799330'>the</span> <span
  m='3799430'>choice</span> <span m='3799810'>of</span> <span
  m='3799930'>our</span> <span m='3800070'>linear</span> <span
  m='3800380'>state</span> <span m='3800650'>space</span> <span
  m='3800940'>specification.</span> <span m='3802340'>And</span> <span
  m='3803240'>so</span> <span m='3803670'>there</span> <span
  m='3804240'>really</span> <span m='3804450'>are</span> <span
  m='3806610'>many</span> <span m='3806880'>different</span> <span
  m='3807590'>equivalent</span> <span m='3808490'>linear</span> <span
  m='3808820'>state</span> <span m='3809140'>space</span> <span
  m='3809580'>models</span> <span m='3810520'>for</span> <span
  m='3811480'>a</span> <span m='3811600'>given</span> <span
  m='3812200'>process</span> <span m='3813060'>depending</span> <span
  m='3813380'>on</span> <span m='3813610'>exactly</span> <span
  m='3814010'>how</span> <span m='3814160'>you</span> <span
  m='3814290'>define</span> <span m='3814740'>the</span> <span
  m='3814820'>states</span> <span m='3815600'>and</span> <span
  m='3815870'>the</span> <span m='3816050'>underlying</span> <span
  m='3817320'>transformation</span> <span m='3818030'>matrix,</span> <span
  m='3818540'>t.</span> <span m='3819490'>And</span> <span
  m='3822020'>the</span> <span m='3822730'>beauty</span> <span
  m='3823110'>of</span> <span m='3823190'>Harvey's</span> <span
  m='3823680'>work</span> <span m='3824020'>was</span> <span
  m='3824410'>coming</span> <span m='3824760'>up</span> <span
  m='3824900'>with</span> <span m='3825040'>a</span> <span
  m='3825090'>nice</span> <span m='3825370'>representation</span> <span
  m='3826180'>for</span> <span m='3826300'>the</span> <span
  m='3826410'>states,</span> <span m='3827490'>where</span> <span
  m='3827730'>we</span> <span m='3827830'>had</span> <span
  m='3828240'>very</span> <span m='3828830'>simple</span> <span
  m='3829280'>forms</span> <span m='3829820'>for</span> <span
  m='3830860'>the</span> <span m='3830960'>various</span> <span
  m='3831860'>matrices.</span> </p><p><span m='3833100'>And</span> <span
  m='3833900'>the</span> <span m='3834890'>lecture</span> <span
  m='3835240'>notes</span> <span m='3835520'>here</span> <span
  m='3835750'>go</span> <span m='3835910'>through</span> <span
  m='3836150'>the</span> <span m='3836290'>derivation</span> <span
  m='3837000'>of</span> <span m='3837240'>that</span> <span
  m='3837530'>for</span> <span m='3837770'>the</span> <span
  m='3837940'>ARMA</span> <span m='3838220'>process.</span> <span
  m='3839430'>And</span> <span m='3840440'>this</span> <span
  m='3840700'>derivation</span> <span m='3842590'>is--</span> <span
  m='3844080'>I</span> <span m='3844160'>just</span> <span
  m='3844380'>want</span> <span m='3844490'>to</span> <span
  m='3844540'>go</span> <span m='3844690'>through</span> <span
  m='3846030'>the</span> <span m='3846590'>first</span> <span
  m='3846920'>case</span> <span m='3847820'>just</span> <span
  m='3848240'>to</span> <span m='3848390'>highlight</span> <span
  m='3849380'>how</span> <span m='3849600'>the</span> <span
  m='3849740'>argument</span> <span m='3850110'>goes.</span> <span
  m='3851020'>We</span> <span m='3851220'>basically</span> <span
  m='3851540'>have</span> <span m='3851810'>this</span> <span
  m='3852480'>equation,</span> <span m='3853500'>which</span> <span
  m='3853600'>is</span> <span m='3853740'>the</span> <span
  m='3853930'>original</span> <span m='3854660'>equation</span> <span
  m='3855090'>for</span> <span m='3855400'>an</span> <span
  m='3855510'>ARMA</span> <span m='3856560'>pq</span> <span
  m='3856980'>process.</span> </p><p><span m='3860180'>And</span> <span
  m='3861980'>Harvey</span> <span m='3862340'>says,</span> <span
  m='3862650'>well,</span> <span m='3863690'>define</span> <span
  m='3864450'>the</span> <span m='3864540'>first</span> <span
  m='3865810'>or</span> <span m='3865960'>the</span> <span
  m='3866100'>state</span> <span m='3866590'>at</span> <span
  m='3866820'>time</span> <span m='3867190'>t</span> <span m='3867830'>to</span>
  <span m='3867980'>be</span> <span m='3868180'>equal</span> <span
  m='3868420'>to</span> <span m='3868530'>the</span> <span
  m='3868680'>observation</span> <span m='3869460'>at</span> <span
  m='3869630'>time</span> <span m='3869980'>t.</span> <span
  m='3871820'>If</span> <span m='3871990'>we</span> <span m='3872120'>do</span>
  <span m='3872440'>that,</span> <span m='3873160'>then</span> <span
  m='3873370'>how</span> <span m='3873660'>does</span> <span
  m='3874850'>this</span> <span m='3875860'>equation</span> <span
  m='3877630'>relate</span> <span m='3878250'>to</span> <span
  m='3879870'>the</span> <span m='3880860'>basically--</span> <span
  m='3881720'>this</span> <span m='3882570'>is</span> <span
  m='3882700'>the</span> <span m='3882810'>state</span> <span
  m='3883330'>at</span> <span m='3883840'>the</span> <span
  m='3884030'>next</span> <span m='3885160'>time</span> <span
  m='3885500'>point,</span> <span m='3885820'>T</span> <span
  m='3886000'>plus</span> <span m='3886320'>1,</span> <span
  m='3887140'>is</span> <span m='3887330'>equal</span> <span
  m='3887550'>to</span> <span m='3887660'>phi 1</span> <span
  m='3888140'>times</span> <span m='3888440'>the</span> <span
  m='3888550'>state</span> <span m='3888970'>at</span> <span
  m='3889110'>time</span> <span m='3889430'>t,</span> <span
  m='3890610'>plus</span> <span m='3895570'>a</span> <span
  m='3895690'>second</span> <span m='3896120'>state</span> <span
  m='3896450'>at</span> <span m='3896610'>time</span> <span m='3896920'>t</span>
  <span m='3897790'>and</span> <span m='3898220'>a</span> <span
  m='3898600'>residual</span> <span m='3899770'>innovation,</span> <span
  m='3900340'>eta t.</span> </p><p><span m='3901420'>So</span> <span
  m='3903160'>by</span> <span m='3904160'>choosing</span> <span
  m='3905020'>the</span> <span m='3905140'>first</span> <span
  m='3905480'>state</span> <span m='3905840'>to</span> <span
  m='3905930'>be</span> <span m='3907160'>the</span> <span
  m='3907990'>observation</span> <span m='3908720'>value</span> <span
  m='3909110'>at</span> <span m='3909180'>that</span> <span
  m='3909430'>time,</span> <span m='3911400'>we</span> <span
  m='3911570'>can</span> <span m='3911710'>then</span> <span
  m='3911920'>solve</span> <span m='3912330'>for</span> <span
  m='3913290'>the</span> <span m='3913420'>second</span> <span
  m='3913890'>state,</span> <span m='3916680'>which</span> <span
  m='3916890'>is</span> <span m='3917030'>given</span> <span
  m='3917240'>by</span> <span m='3917460'>this</span> <span
  m='3917740'>expression</span> <span m='3919810'>just</span> <span
  m='3920120'>by</span> <span m='3920870'>rewriting</span> <span
  m='3922820'>our</span> <span m='3923490'>model</span> <span
  m='3923860'>equation</span> <span m='3924700'>in</span> <span
  m='3924860'>terms</span> <span m='3925140'>of</span> <span
  m='3925250'>s1t,</span> <span m='3925730'>s2t,</span> <span
  m='3926290'>and</span> <span m='3926520'>eta</span> <span
  m='3926800'>t.</span> <span m='3927880'>So</span> <span
  m='3928660'>this</span> <span m='3928980'>s2t</span> <span
  m='3929820'>is</span> <span m='3930050'>this</span> <span
  m='3930320'>function</span> <span m='3930700'>of</span> <span
  m='3930830'>the</span> <span m='3930970'>observations</span> <span
  m='3933720'>and</span> <span m='3934085'>eta t.</span> </p><p><span
  m='3936950'>So</span> <span m='3937100'>it's</span> <span m='3937200'>a</span>
  <span m='3937240'>very</span> <span m='3937470'>simple</span> <span
  m='3938520'>specification</span> <span m='3939440'>of</span> <span
  m='3940150'>the</span> <span m='3941190'>second</span> <span
  m='3941540'>state.</span> <span m='3941820'>Just</span> <span
  m='3942890'>what</span> <span m='3943470'>is</span> <span
  m='3943610'>that</span> <span m='3943810'>second</span> <span
  m='3944660'>state</span> <span m='3946720'>element</span> <span
  m='3948020'>given</span> <span m='3948410'>this</span> <span
  m='3948630'>definition</span> <span m='3949050'>of</span> <span
  m='3949110'>the</span> <span m='3949190'>first</span> <span
  m='3949540'>one?</span> <span m='3950520'>And</span> <span
  m='3951640'>one</span> <span m='3951900'>can</span> <span
  m='3952190'>do</span> <span m='3952440'>this</span> <span
  m='3952730'>process</span> <span m='3953330'>iteratively</span> <span
  m='3954650'>getting</span> <span m='3954990'>rid</span> <span
  m='3955450'>of</span> <span m='3956290'>the</span> <span
  m='3957460'>observations</span> <span m='3958380'>and</span> <span
  m='3958500'>replacing</span> <span m='3959000'>them</span> <span
  m='3959180'>by</span> <span m='3959420'>underlying</span> <span
  m='3959930'>states.</span> <span m='3961290'>And</span> <span
  m='3961580'>at</span> <span m='3961670'>the</span> <span
  m='3961780'>end</span> <span m='3961970'>of</span> <span
  m='3962050'>the</span> <span m='3962150'>day,</span> <span
  m='3963240'>you</span> <span m='3963410'>end</span> <span
  m='3963620'>up</span> <span m='3963770'>with</span> <span
  m='3963900'>this</span> <span m='3964070'>very</span> <span
  m='3964420'>simple</span> <span m='3964810'>form</span> <span
  m='3965230'>for</span> <span m='3965590'>the</span> <span
  m='3965810'>transition</span> <span m='3966430'>matrix,</span> <span
  m='3966980'>t.</span> </p><p><span m='3969490'>Basically,</span> <span
  m='3969980'>the</span> <span m='3970140'>t</span> <span m='3970840'>has</span>
  <span m='3971350'>the</span> <span m='3972440'>autoregressive</span> <span
  m='3973250'>components</span> <span m='3973950'>as</span> <span
  m='3974110'>the</span> <span m='3974200'>first</span> <span
  m='3974510'>column</span> <span m='3974810'>of</span> <span
  m='3974900'>the</span> <span m='3975000'>t</span> <span
  m='3975180'>matrix.</span> <span m='3976410'>And</span> <span
  m='3976770'>this</span> <span m='3977070'>r</span> <span
  m='3977300'>matrix</span> <span m='3977780'>has</span> <span
  m='3978050'>this</span> <span m='3978900'>vector</span> <span
  m='3979300'>of</span> <span m='3979460'>the</span> <span
  m='3980160'>moving</span> <span m='3980440'>average</span> <span
  m='3980810'>components.</span> <span m='3982550'>So</span> <span
  m='3983710'>it's</span> <span m='3983860'>a</span> <span
  m='3983900'>very</span> <span m='3984190'>nice</span> <span m='3986660'>way
  to</span> <span m='3987040'>represent</span> <span m='3987520'>the</span>
  <span m='3987590'>model.</span> <span m='3988330'>Coming</span> <span
  m='3988640'>up</span> <span m='3988780'>with</span> <span
  m='3988930'>it</span> <span m='3989050'>was</span> <span
  m='3989500'>something</span> <span m='3989860'>very</span> <span
  m='3990080'>clever</span> <span m='3990860'>that</span> <span
  m='3990990'>he</span> <span m='3991150'>did.</span> </p><p><span
  m='3992990'>But</span> <span m='3993210'>what</span> <span
  m='3993460'>one</span> <span m='3993760'>can</span> <span
  m='3993920'>see</span> <span m='3994220'>is</span> <span
  m='3994330'>that</span> <span m='3995100'>this</span> <span
  m='3995330'>basic</span> <span m='3995800'>model</span> <span
  m='3996370'>where</span> <span m='3996580'>you</span> <span
  m='3996740'>have</span> <span m='3998040'>the</span> <span
  m='3998250'>states</span> <span m='4000400'>transitioning</span> <span
  m='4001100'>according</span> <span m='4001620'>to</span> <span
  m='4002030'>a</span> <span m='4002070'>linear</span> <span
  m='4002320'>transformation</span> <span m='4002950'>of</span> <span
  m='4003020'>the</span> <span m='4003460'>previous</span> <span
  m='4003920'>state</span> <span m='4004230'>plus</span> <span
  m='4004810'>error,</span> <span m='4005540'>and</span> <span
  m='4005670'>the</span> <span m='4005760'>observation</span> <span
  m='4006360'>being</span> <span m='4006570'>some</span> <span
  m='4006790'>function</span> <span m='4007190'>of</span> <span
  m='4007340'>the</span> <span m='4007520'>current</span> <span
  m='4007910'>states,</span> <span m='4009910'>plus</span> <span
  m='4010710'>error</span> <span m='4010980'>or</span> <span
  m='4011190'>not,</span> <span m='4011600'>depending</span> <span
  m='4011870'>on</span> <span m='4011990'>the</span> <span
  m='4012080'>formulation,</span> <span m='4014370'>is</span> <span
  m='4014530'>the</span> <span m='4014620'>representation.</span> <span
  m='4018200'>Now,</span> <span m='4018380'>with</span> <span
  m='4018530'>all</span> <span m='4018730'>of</span> <span
  m='4018820'>these</span> <span m='4019030'>models,</span> <span
  m='4023350'>a</span> <span m='4023450'>reason</span> <span
  m='4023770'>why</span> <span m='4023980'>linear</span> <span
  m='4024300'>states</span> <span m='4024650'>space</span> <span
  m='4025070'>modeling</span> <span m='4025700'>is</span> <span
  m='4026420'>in</span> <span m='4026560'>fact</span> <span
  m='4028190'>effective</span> <span m='4028860'>is</span> <span
  m='4029080'>that</span> <span m='4030100'>they're</span> <span
  m='4030420'>specification</span> <span m='4032830'>is</span> <span
  m='4033860'>fully</span> <span m='4036460'>specified</span> <span
  m='4037420'>with</span> <span m='4038620'>the</span> <span
  m='4039140'>Kalman</span> <span m='4039930'>filter.</span> </p><p><span
  m='4042730'>So</span> <span m='4044200'>with</span> <span
  m='4044990'>this</span> <span m='4045330'>formulation</span> <span
  m='4046460'>of</span> <span m='4047170'>linear</span> <span
  m='4047520'>state</span> <span m='4047880'>space</span> <span
  m='4048220'>models,</span> <span m='4052100'>the</span> <span
  m='4052490'>Kalman</span> <span m='4052930'>filter</span> <span
  m='4054560'>as</span> <span m='4054850'>a</span> <span
  m='4055270'>methodology</span> <span m='4056400'>is</span> <span
  m='4057000'>the</span> <span m='4057180'>recursive</span> <span
  m='4057760'>computation</span> <span m='4058560'>of</span> <span
  m='4059730'>the</span> <span m='4059860'>probability</span> <span
  m='4060890'>density</span> <span m='4061380'>functions</span> <span
  m='4062430'>for</span> <span m='4063870'>the</span> <span
  m='4064030'>underlying</span> <span m='4064570'>states</span> <span
  m='4066740'>at</span> <span m='4067880'>basically</span> <span m='4068535'>t
  plus</span> <span m='4068820'>1</span> <span m='4069620'>given</span> <span
  m='4069960'>information</span> <span m='4070500'>up to</span> <span
  m='4070590'>time</span> <span m='4071020'>t,</span> <span
  m='4072420'>as</span> <span m='4072620'>well</span> <span
  m='4072890'>as</span> <span m='4074500'>the</span> <span
  m='4074610'>joint</span> <span m='4074900'>density</span> <span
  m='4075370'>of</span> <span m='4075480'>the</span> <span
  m='4075610'>future</span> <span m='4076130'>state</span> <span
  m='4076710'>and</span> <span m='4076810'>the</span> <span
  m='4076880'>future</span> <span m='4077510'>observation</span> <span
  m='4077885'>at</span> <span m='4078260'>t</span> <span m='4078420'>plus</span>
  <span m='4078630'>1,</span> <span m='4078830'>given</span> <span
  m='4079080'>information</span> <span m='4079670'>up</span> <span
  m='4079800'>to</span> <span m='4079900'>time</span> <span
  m='4080190'>t.</span> </p><p><span m='4082370'>And</span> <span
  m='4083370'>also</span> <span m='4083660'>just</span> <span
  m='4083900'>the</span> <span m='4083980'>marginal</span> <span
  m='4084780'>distribution</span> <span m='4085520'>of</span> <span
  m='4086330'>the</span> <span m='4086880'>next</span> <span
  m='4087140'>observation</span> <span m='4088030'>given</span> <span
  m='4088890'>the</span> <span m='4089000'>information</span> <span
  m='4089490'>up to</span> <span m='4089740'>time</span> <span
  m='4090030'>t.</span> <span m='4100490'>So</span> <span
  m='4100950'>what</span> <span m='4101300'>I</span> <span
  m='4101330'>want</span> <span m='4101510'>to</span> <span
  m='4101569'>do</span> <span m='4101720'>is</span> <span
  m='4101830'>just</span> <span m='4102000'>go</span> <span
  m='4102149'>through</span> <span m='4103080'>with</span> <span
  m='4103290'>you</span> <span m='4106510'>how</span> <span
  m='4106750'>the</span> <span m='4106830'>Kalman</span> <span
  m='4107200'>filter</span> <span m='4107939'>is</span> <span
  m='4109590'>implemented</span> <span m='4110200'>and defined.</span> <span
  m='4111550'>And</span> <span m='4112010'>the</span> <span
  m='4112270'>implementation</span> <span m='4113010'>of</span> <span
  m='4113050'>the</span> <span m='4113140'>Kalman</span> <span
  m='4113510'>filter</span> <span m='4115370'>requires</span> <span
  m='4115970'>us</span> <span m='4116210'>to</span> <span
  m='4116390'>have</span> <span m='4116819'>some</span> <span
  m='4118300'>notation</span> <span m='4119050'>that's</span> <span
  m='4119479'>a</span> <span m='4119760'>bit</span> <span
  m='4120140'>involved,</span> <span m='4120939'>but</span> <span
  m='4122590'>we'll</span> <span m='4122800'>hopefully</span> <span
  m='4123390'>explain</span> <span m='4123990'>it</span> <span
  m='4124130'>so</span> <span m='4125120'>it's</span> <span
  m='4125330'>very</span> <span m='4125529'>straightforward.</span> </p><p><span
  m='4126710'>There are</span> <span m='4126899'>basically</span> <span
  m='4127319'>conditional</span> <span m='4127960'>means</span> <span
  m='4128720'>of</span> <span m='4128979'>the</span> <span
  m='4129090'>states.</span> <span m='4132090'>s</span> <span
  m='4132390'>sub</span> <span m='4132590'>t</span> <span
  m='4132830'>given</span> <span m='4133090'>t</span> <span
  m='4133340'>is</span> <span m='4133560'>the</span> <span
  m='4134550'>mean</span> <span m='4134950'>value</span> <span
  m='4135450'>of</span> <span m='4135630'>the</span> <span
  m='4135720'>state</span> <span m='4135990'>at</span> <span
  m='4136090'>time</span> <span m='4136370'>t</span> <span m='4136600'>given
  the</span> <span m='4136830'>information</span> <span m='4137380'>up to</span>
  <span m='4137880'>time t.</span> <span m='4139510'>If</span> <span
  m='4139800'>we</span> <span m='4140060'>condition</span> <span
  m='4140710'>on</span> <span m='4141020'>t</span> <span
  m='4141229'>minus</span> <span m='4141649'>1,</span> <span
  m='4141939'>then</span> <span m='4142069'>it's</span> <span
  m='4142240'>the</span> <span m='4142350'>expectation</span> <span
  m='4143060'>of</span> <span m='4143130'>the</span> <span
  m='4143220'>state</span> <span m='4143500'>at</span> <span
  m='4143600'>time</span> <span m='4143870'>t</span> <span
  m='4144189'>given</span> <span m='4144479'>the</span> <span
  m='4144600'>information</span> <span m='4144900'>up</span> <span
  m='4145200'>to</span> <span m='4145350'>t</span> <span
  m='4145529'>minus</span> <span m='4145910'>1.</span> <span
  m='4149460'>And</span> <span m='4149680'>then</span> <span
  m='4149950'>yt</span> <span m='4150350'>t</span> <span
  m='4150750'>minus</span> <span m='4151050'>1</span> <span
  m='4151200'>is</span> <span m='4151290'>the</span> <span
  m='4151370'>expectation</span> <span m='4152100'>of</span> <span
  m='4152260'>the</span> <span m='4152800'>observation</span> <span
  m='4153550'>given</span> <span m='4154060'>information</span> <span
  m='4154350'>up to</span> <span m='4154640'>t</span> <span
  m='4154850'>minus</span> <span m='4155200'>1.</span> </p><p><span
  m='4156880'>There's</span> <span m='4157380'>also</span> <span
  m='4157810'>conditional</span> <span m='4158430'>covariances</span> <span
  m='4158780'>and</span> <span m='4159130'>mean</span> <span
  m='4159460'>squared</span> <span m='4159810'>errors.</span> <span
  m='4162260'>All</span> <span m='4162580'>these</span> <span
  m='4162979'>covariances</span> <span m='4163710'>are</span> <span
  m='4163819'>determined</span> <span m='4164410'>by</span> <span
  m='4165500'>omegas.</span> <span m='4166620'>The</span> <span
  m='4166760'>subscript</span> <span m='4167390'>corresponds</span> <span
  m='4168069'>to</span> <span m='4168200'>the</span> <span
  m='4168270'>states,</span> <span m='4168790'>s,</span> <span
  m='4169180'>or</span> <span m='4169569'>observation,</span> <span
  m='4171620'>y.</span> <span m='4173240'>And</span> <span
  m='4173819'>basically,</span> <span m='4174140'>the</span> <span
  m='4174229'>conditioning</span> <span m='4174819'>set</span> <span
  m='4175060'>is</span> <span m='4175220'>either</span> <span
  m='4175479'>information</span> <span m='4175950'>up to</span> <span
  m='4176180'>time</span> <span m='4176450'>t,</span> <span m='4176714'>t</span>
  <span m='4176979'>minus</span> <span m='4177330'>1</span> <span
  m='4177520'>or</span> <span m='4178500'>t</span> <span
  m='4178640'>minus</span> <span m='4178920'>1</span> <span m='4179149'>in
  the</span> <span m='4179240'>second</span> <span m='4179580'>case.</span>
  <span m='4180479'>And</span> <span m='4182330'>we</span> <span
  m='4182569'>want</span> <span m='4182810'>to</span> <span
  m='4183000'>compute</span> <span m='4183450'>basically</span> <span
  m='4183740'>the</span> <span m='4183870'>covariance</span> <span
  m='4184810'>matrix</span> <span m='4185370'>of</span> <span
  m='4185630'>the</span> <span m='4185740'>states</span> <span
  m='4187399'>given</span> <span m='4188359'>whatever</span> <span
  m='4188620'>the</span> <span m='4188720'>information</span> <span
  m='4189220'>is,</span> <span m='4189729'>information</span> <span
  m='4189999'>up to</span> <span m='4190270'>time</span> <span
  m='4190590'>t,</span> <span m='4191040'>t minus</span> <span
  m='4191399'>1.</span> </p><p><span m='4192439'>So</span> <span
  m='4193479'>these</span> <span m='4193779'>covariance</span> <span
  m='4194660'>matrices</span> <span m='4196090'>are</span> <span
  m='4196500'>the</span> <span m='4196630'>expectation</span> <span
  m='4197810'>of</span> <span m='4198580'>the</span> <span
  m='4198720'>state</span> <span m='4199560'>minus</span> <span
  m='4199950'>their</span> <span m='4200110'>expectation</span> <span
  m='4201990'>under</span> <span m='4202200'>the</span> <span
  m='4202330'>conditioning</span> <span m='4203250'>times</span> <span
  m='4203515'>the</span> <span m='4205080'>state</span> <span
  m='4205430'>minus</span> <span m='4205690'>the</span> <span
  m='4205760'>expectation</span> <span m='4206850'>transpose.</span> <span
  m='4207950'>That's</span> <span m='4208220'>the</span> <span
  m='4208390'>definition</span> <span m='4208980'>of</span> <span
  m='4209110'>that</span> <span m='4209310'>covariance</span> <span
  m='4209820'>matrix.</span> <span m='4210810'>So</span> <span
  m='4210960'>the</span> <span m='4211080'>different</span> <span
  m='4211420'>definitions</span> <span m='4212030'>here</span> <span
  m='4212230'>correspond</span> <span m='4212880'>to</span> <span
  m='4213010'>just</span> <span m='4213260'>whether</span> <span
  m='4213545'>we're</span> <span m='4213830'>conditioning</span> <span
  m='4214300'>on</span> <span m='4214960'>information.</span> </p><p><span
  m='4217900'>And</span> <span m='4218570'>then</span> <span
  m='4219130'>the</span> <span m='4219650'>observation</span> <span
  m='4220840'>innovations</span> <span m='4221460'>or</span> <span
  m='4221540'>residuals</span> <span m='4223170'>are</span> <span
  m='4224640'>the</span> <span m='4224760'>difference</span> <span
  m='4225130'>between</span> <span m='4226800'>an</span> <span
  m='4226950'>observation,</span> <span m='4228440'>yt,</span> <span
  m='4229510'>and</span> <span m='4230020'>its</span> <span
  m='4230300'>estimate</span> <span m='4231570'>given</span> <span
  m='4231990'>information</span> <span m='4232300'>up</span> <span
  m='4232610'>to</span> <span m='4232790'>t</span> <span
  m='4232980'>minus</span> <span m='4233370'>1.</span> <span
  m='4237190'>So</span> <span m='4237500'>the</span> <span
  m='4237640'>residuals</span> <span m='4238270'>in</span> <span
  m='4238390'>this</span> <span m='4238810'>process</span> <span
  m='4239340'>are</span> <span m='4239530'>the</span> <span
  m='4239820'>innovation</span> <span m='4240310'>residuals,</span> <span
  m='4241370'>one</span> <span m='4241620'>period</span> <span
  m='4241950'>ahead.</span> <span m='4244200'>And</span> <span
  m='4244380'>the</span> <span m='4244450'>Kalman</span> <span
  m='4244830'>filter</span> <span m='4245560'>consists</span> <span
  m='4246130'>of</span> <span m='4247640'>four</span> <span
  m='4248760'>steps.</span> <span m='4250780'>We</span> <span
  m='4251020'>basically</span> <span m='4252360'>want</span> <span
  m='4252710'>to,</span> <span m='4253850'>first,</span> <span
  m='4254450'>predict</span> <span m='4255590'>the</span> <span
  m='4255720'>state</span> <span m='4256090'>vector</span> <span
  m='4260800'>one</span> <span m='4261090'>step</span> <span
  m='4261390'>ahead.</span> </p><p><span m='4261780'>So</span> <span
  m='4262010'>given</span> <span m='4263830'>our</span> <span
  m='4264110'>estimate</span> <span m='4264470'>of</span> <span
  m='4264530'>the</span> <span m='4264600'>state</span> <span
  m='4264940'>vector</span> <span m='4265830'>at</span> <span
  m='4266040'>time</span> <span m='4266320'>t</span> <span
  m='4266530'>minus</span> <span m='4266930'>1,</span> <span
  m='4270140'>we</span> <span m='4270290'>want</span> <span
  m='4270610'>to</span> <span m='4271340'>predict</span> <span
  m='4271710'>this</span> <span m='4271880'>state</span> <span
  m='4272360'>vector at</span> <span m='4272840'>time</span> <span
  m='4273230'>t.</span> <span m='4274800'>And</span> <span m='4274990'>we</span>
  <span m='4275280'>also</span> <span m='4275680'>want to</span> <span
  m='4276163'>predict</span> <span m='4276646'>the</span> <span
  m='4277130'>observation</span> <span m='4278220'>at</span> <span
  m='4278490'>time</span> <span m='4278830'>t</span> <span
  m='4279580'>given</span> <span m='4280080'>our</span> <span
  m='4280390'>estimate at state</span> <span m='4280670'>vector</span> <span
  m='4280995'>time</span> <span m='4281320'>two</span> <span
  m='4281560'>minus</span> <span m='4281910'>1.</span> <span
  m='4283820'>And</span> <span m='4284050'>so</span> <span m='4286150'>at</span>
  <span m='4286560'>time</span> <span m='4286920'>t</span> <span
  m='4287160'>minus</span> <span m='4287530'>1,</span> <span
  m='4288410'>we</span> <span m='4288580'>can</span> <span
  m='4288950'>estimate</span> <span m='4289460'>these</span> <span
  m='4289640'>quantities.</span> <span m='4291678'>[INAUDIBLE]</span>
  </p><p><span m='4295646'>At</span> <span m='4296150'>t</span> <span
  m='4296340'>minus</span> <span m='4296660'>1,</span> <span
  m='4300340'>we</span> <span m='4300620'>can</span> <span
  m='4300750'>basically</span> <span m='4301040'>predict</span> <span
  m='4301490'>what</span> <span m='4301610'>the</span> <span m='4301680'>state
  is</span> <span m='4302010'>going</span> <span m='4302110'>to and</span> <span
  m='4302390'>predict</span> <span m='4302670'>what</span> <span
  m='4302760'>the</span> <span m='4302870'>observation is</span> <span
  m='4303440'>going</span> <span m='4303550'>to</span> <span
  m='4303610'>be.</span> <span m='4304750'>And</span> <span
  m='4305010'>we</span> <span m='4305120'>can</span> <span
  m='4305280'>estimate</span> <span m='4306600'>how</span> <span
  m='4306750'>much</span> <span m='4306950'>error</span> <span
  m='4307100'>there's</span> <span m='4307300'>going</span> <span
  m='4307400'>to</span> <span m='4307470'>be</span> <span m='4307680'>in</span>
  <span m='4307810'>those</span> <span m='4308060'>estimates,</span> <span
  m='4308610'>by</span> <span m='4308870'>these</span> <span
  m='4309020'>covariance</span> <span m='4309230'>matrices.</span> <span
  m='4319420'>The</span> <span m='4319540'>second</span> <span
  m='4319910'>step</span> <span m='4320590'>is</span> <span
  m='4322020'>updating</span> <span m='4322550'>these</span> <span
  m='4322780'>predictions</span> <span m='4325140'>to</span> <span
  m='4325630'>get</span> <span m='4325840'>our</span> <span
  m='4326010'>estimate</span> <span m='4327720'>of</span> <span
  m='4327780'>the</span> <span m='4327880'>state</span> <span
  m='4328350'>given</span> <span m='4328950'>the</span> <span
  m='4329080'>observation</span> <span m='4329610'>at</span> <span
  m='4329710'>time</span> <span m='4329990'>t</span> <span
  m='4331900'>and</span> <span m='4332150'>to</span> <span
  m='4332230'>update</span> <span m='4332630'>our</span> <span
  m='4332870'>uncertainty</span> <span m='4333470'>about</span> <span
  m='4333780'>that</span> <span m='4334040'>state</span> <span
  m='4335030'>given</span> <span m='4335480'>this new</span> <span
  m='4335820'>observation.</span> </p><p><span m='4336380'>So</span> <span
  m='4338000'>basically,</span> <span m='4339060'>our</span> <span
  m='4339530'>estimate</span> <span m='4339940'>of</span> <span
  m='4339990'>the</span> <span m='4340070'>state</span> <span
  m='4340290'>at</span> <span m='4340420'>time</span> <span m='4340710'>t</span>
  <span m='4341350'>is</span> <span m='4341580'>an</span> <span
  m='4341670'>adjustment</span> <span m='4342360'>to</span> <span
  m='4342540'>our</span> <span m='4342760'>estimate</span> <span
  m='4344480'>given</span> <span m='4344760'>information</span> <span
  m='4345035'>up</span> <span m='4345310'>to</span> <span m='4345410'>t</span>
  <span m='4345590'>minus</span> <span m='4345920'>1,</span> <span
  m='4346680'>plus</span> <span m='4348770'>a</span> <span
  m='4348890'>function</span> <span m='4349490'>of</span> <span
  m='4349750'>the</span> <span m='4349870'>difference</span> <span
  m='4350470'>between</span> <span m='4350910'>what</span> <span
  m='4351070'>we</span> <span m='4351210'>observed</span> <span
  m='4351650'>and</span> <span m='4351750'>what</span> <span
  m='4351910'>we</span> <span m='4352090'>predicted.</span> <span
  m='4355020'>And</span> <span m='4356220'>this</span> <span
  m='4356550'>gt</span> <span m='4357190'>function</span> <span
  m='4358640'>matrix</span> <span m='4359540'>is</span> <span
  m='4359720'>called</span> <span m='4360010'>the</span> <span
  m='4360090'>filter</span> <span m='4360530'>gain</span> <span
  m='4361110'>matrix.</span> <span m='4362870'>And</span> <span
  m='4363130'>basically,</span> <span m='4363400'>it</span> <span
  m='4363640'>characterizes</span> <span m='4364840'>how</span> <span
  m='4365120'>do</span> <span m='4365220'>we</span> <span
  m='4365420'>adjust</span> <span m='4366510'>our</span> <span
  m='4367080'>prediction</span> <span m='4367650'>of</span> <span
  m='4367910'>the</span> <span m='4368540'>underlying</span> <span
  m='4368960'>state</span> <span m='4370070'>depending</span> <span
  m='4370460'>on</span> <span m='4370660'>what</span> <span
  m='4370890'>happened.</span> </p><p><span m='4372760'>So</span> <span
  m='4372900'>that's</span> <span m='4373170'>the</span> <span
  m='4373270'>filter</span> <span m='4373810'>gain</span> <span
  m='4374130'>matrix.</span> <span m='4377150'>So</span> <span
  m='4377280'>we</span> <span m='4377430'>actually</span> <span
  m='4377720'>do</span> <span m='4378290'>gain</span> <span
  m='4378680'>information</span> <span m='4380470'>with</span> <span
  m='4380590'>each</span> <span m='4380830'>observation</span> <span
  m='4381620'>about</span> <span m='4381940'>what</span> <span
  m='4382120'>the</span> <span m='4382410'>new</span> <span
  m='4382580'>value</span> <span m='4382840'>of the</span> <span
  m='4382960'>process is.</span> <span m='4384320'>And</span> <span
  m='4385220'>that</span> <span m='4385420'>information</span> <span
  m='4386130'>is</span> <span m='4386290'>characterized</span> <span
  m='4386830'>by</span> <span m='4387030'>filter gain</span> <span
  m='4387700'>matrix.</span> <span m='4389190'>You'll</span> <span
  m='4389370'>notice</span> <span m='4389730'>that</span> <span
  m='4389950'>the</span> <span m='4390200'>uncertainty</span> <span
  m='4391580'>in</span> <span m='4391880'>the</span> <span
  m='4391990'>state</span> <span m='4392370'>at</span> <span
  m='4392530'>time</span> <span m='4392850'>t,</span> <span
  m='4393200'>this</span> <span m='4393400'>omega</span> <span
  m='4393740'>s</span> <span m='4393940'>of</span> <span m='4394060'>t</span>
  <span m='4394260'>given</span> <span m='4394530'>t,</span> <span
  m='4395460'>that's</span> <span m='4395720'>equal</span> <span
  m='4396010'>to</span> <span m='4396300'>the</span> <span
  m='4397120'>covariance</span> <span m='4397640'>matrix</span> <span
  m='4398160'>given</span> <span m='4398460'>t</span> <span
  m='4398640'>minus</span> <span m='4399020'>1.</span> <span
  m='4399630'>So</span> <span m='4399860'>it's</span> <span
  m='4400240'>our</span> <span m='4400420'>beginning</span> <span
  m='4400930'>level</span> <span m='4401210'>of</span> <span
  m='4401310'>uncertainty</span> <span m='4402630'>adjusted</span> <span
  m='4403330'>by</span> <span m='4404600'>a</span> <span m='4405120'>term</span>
  <span m='4405950'>that</span> <span m='4406100'>tells</span> <span
  m='4406360'>us</span> <span m='4406700'>how</span> <span
  m='4406840'>much</span> <span m='4407040'>information</span> <span
  m='4407570'>did we</span> <span m='4407790'>get</span> <span
  m='4408130'>from</span> <span m='4408300'>that</span> <span
  m='4408890'>new</span> <span m='4409070'>information.</span> </p><p><span
  m='4409580'>So</span> <span m='4410380'>notice</span> <span
  m='4410670'>that</span> <span m='4411320'>there's</span> <span
  m='4411530'>a</span> <span m='4412060'>minus</span> <span
  m='4412560'>sign</span> <span m='4412850'>there.</span> <span
  m='4413590'>We're</span> <span m='4413720'>basically</span> <span
  m='4414110'>reducing</span> <span m='4414880'>our</span> <span
  m='4415050'>uncertainty</span> <span m='4415600'>about</span> <span
  m='4415940'>the</span> <span m='4416030'>state</span> <span
  m='4417030'>given</span> <span m='4418730'>the</span> <span
  m='4418840'>information</span> <span m='4420940'>in</span> <span
  m='4421160'>the</span> <span m='4421310'>innovation</span> <span
  m='4424690'>that</span> <span m='4424810'>we</span> <span
  m='4424930'>now</span> <span m='4425220'>have</span> <span
  m='4425360'>observed.</span> <span m='4428800'>Then,</span> <span
  m='4429100'>there's</span> <span m='4429310'>a</span> <span
  m='4429360'>forecasting</span> <span m='4430220'>step</span> <span
  m='4431500'>which</span> <span m='4431870'>is</span> <span
  m='4432180'>used</span> <span m='4432730'>to</span> <span
  m='4434770'>forecast</span> <span m='4435590'>the</span> <span
  m='4435690'>state</span> <span m='4437680'>one</span> <span
  m='4437950'>period</span> <span m='4438320'>forward,</span> <span
  m='4439310'>is</span> <span m='4439450'>simply</span> <span
  m='4439770'>given</span> <span m='4440010'>by</span> <span
  m='4440160'>this</span> <span m='4440350'>linear</span> <span
  m='4440640'>transformation</span> <span m='4441400'>of</span> <span
  m='4441480'>the</span> <span m='4441560'>previous</span> <span
  m='4442040'>state.</span> <span m='4443170'>And</span> <span
  m='4443340'>we</span> <span m='4443440'>can</span> <span
  m='4443570'>also</span> <span m='4444010'>update</span> <span
  m='4444400'>our</span> <span m='4444600'>covariance</span> <span
  m='4445310'>matrix</span> <span m='4445890'>for</span> <span
  m='4447870'>future</span> <span m='4448220'>states</span> <span
  m='4448570'>given</span> <span m='4448760'>the</span> <span
  m='4448850'>previous</span> <span m='4449250'>state</span> <span
  m='4449580'>by</span> <span m='4450510'>applying</span> <span
  m='4451020'>this</span> <span m='4451430'>formula</span> <span
  m='4452120'>which</span> <span m='4452280'>is</span> <span
  m='4452400'>a</span> <span m='4452460'>recursive</span> <span
  m='4453000'>formula</span> <span m='4453530'>for</span> <span
  m='4454780'>estimating</span> <span m='4455370'>covariances.</span>
  </p><p><span m='4457580'>So</span> <span m='4459450'>we</span> <span
  m='4459610'>have</span> <span m='4460680'>forecasting</span> <span
  m='4463560'>algorithms</span> <span m='4464760'>that</span> <span
  m='4464890'>are</span> <span m='4465020'>simple</span> <span
  m='4465420'>linear</span> <span m='4465720'>functions</span> <span
  m='4466875'>of</span> <span m='4467350'>these</span> <span
  m='4467930'>estimates.</span> <span m='4469520'>And</span> <span
  m='4469630'>then</span> <span m='4469800'>finally,</span> <span
  m='4474050'>there's</span> <span m='4474230'>a</span> <span
  m='4474290'>smoothing</span> <span m='4474750'>step</span> <span
  m='4475650'>which</span> <span m='4475880'>is</span> <span
  m='4476040'>characterizing</span> <span m='4477630'>the</span> <span
  m='4480550'>conditional</span> <span m='4482130'>expectation</span> <span
  m='4483960'>of</span> <span m='4484200'>underlying</span> <span
  m='4484750'>states,</span> <span m='4486050'>given</span> <span
  m='4488130'>information</span> <span m='4489160'>in</span> <span
  m='4489330'>the</span> <span m='4489430'>whole</span> <span
  m='4489670'>time</span> <span m='4489950'>series.</span> </p><p><span
  m='4491150'>And</span> <span m='4491390'>so</span> <span
  m='4492520'>ordinarily</span> <span m='4493110'>with</span> <span
  m='4493260'>Kalman</span> <span m='4493630'>filters,</span> <span
  m='4494770'>Kalman</span> <span m='4495100'>filters</span> <span
  m='4495440'>are</span> <span m='4495520'>applied</span> <span
  m='4495890'>sequentially</span> <span m='4497170'>over</span> <span
  m='4497440'>time</span> <span m='4498210'>where</span> <span
  m='4498960'>one</span> <span m='4499180'>basically</span> <span
  m='4499670'>is</span> <span m='4499980'>predicting</span> <span
  m='4500860'>ahead</span> <span m='4501090'>one</span> <span
  m='4501330'>step,</span> <span m='4502210'>updating</span> <span
  m='4502630'>that</span> <span m='4502840'>prediction,</span> <span
  m='4503550'>predicting</span> <span m='4504040'>ahead</span> <span
  m='4504230'>another</span> <span m='4504490'>step,</span> <span
  m='4505230'>updating</span> <span m='4506230'>the</span> <span
  m='4507540'>information</span> <span m='4508320'>on</span> <span
  m='4508570'>the</span> <span m='4508670'>states.</span> <span
  m='4510930'>And</span> <span m='4512050'>that</span> <span
  m='4512590'>overall</span> <span m='4513080'>process</span> <span
  m='4514490'>is</span> <span m='4517350'>the</span> <span
  m='4517510'>process</span> <span m='4519410'>of</span> <span
  m='4519960'>actually</span> <span m='4520380'>computing</span> <span
  m='4520850'>the</span> <span m='4520970'>likelihood</span> <span
  m='4521550'>function</span> <span m='4522060'>for</span> <span
  m='4522410'>these</span> <span m='4523530'>linear</span> <span
  m='4523730'>state</span> <span m='4524020'>space</span> <span
  m='4524380'>models.</span> </p><p><span m='4525210'>And</span> <span
  m='4525380'>so</span> <span m='4526160'>the</span> <span
  m='4526270'>Kalman</span> <span m='4526660'>filter</span> <span
  m='4528220'>is</span> <span m='4528460'>basically</span> <span
  m='4528970'>ultimately</span> <span m='4529560'>applied</span> <span
  m='4532140'>for</span> <span m='4533220'>successive</span> <span
  m='4533780'>forecasting</span> <span m='4534380'>of</span> <span
  m='4534430'>the</span> <span m='4534500'>process</span> <span
  m='4535010'>but</span> <span m='4535120'>also</span> <span
  m='4535450'>for</span> <span m='4536360'>helping</span> <span
  m='4536740'>us</span> <span m='4536880'>identify</span> <span
  m='4537520'>what</span> <span m='4537770'>the</span> <span
  m='4537910'>underlying</span> <span m='4539270'>model</span> <span
  m='4539600'>parameters</span> <span m='4540180'>are</span> <span
  m='4540760'>using</span> <span m='4541220'>maximum</span> <span
  m='4541720'>likelihood</span> <span m='4542260'>methods.</span> <span
  m='4543430'>And</span> <span m='4543630'>so</span> <span
  m='4544470'>the</span> <span m='4544600'>likelihood</span> <span
  m='4545070'>function</span> <span m='4545470'>for</span> <span
  m='4546070'>the</span> <span m='4546240'>linear</span> <span
  m='4547610'>state</span> <span m='4547920'>space</span> <span
  m='4548290'>model</span> <span m='4549730'>is</span> <span
  m='4549940'>basically</span> <span m='4550270'>the--</span> <span
  m='4551350'>or</span> <span m='4551390'>the</span> <span
  m='4551480'>log</span> <span m='4551760'>likelihood</span> <span
  m='4552050'>is</span> <span m='4552230'>the</span> <span
  m='4552330'>log</span> <span m='4552680'>likelihood</span> <span
  m='4553070'>of</span> <span m='4553180'>the</span> <span
  m='4553350'>entire</span> <span m='4553800'>data</span> <span
  m='4554370'>series,</span> <span m='4554920'>give</span> <span
  m='4555080'>the</span> <span m='4555230'>unknown</span> <span
  m='4555570'>parameters.</span> <span m='4556980'>But</span> <span
  m='4557100'>that</span> <span m='4557300'>can</span> <span
  m='4557430'>be</span> <span m='4557600'>expressed</span> <span
  m='4558180'>as</span> <span m='4559060'>the</span> <span
  m='4559460'>product</span> <span m='4560020'>of</span> <span
  m='4560230'>the</span> <span m='4560330'>conditional</span> <span
  m='4560990'>distributions</span> <span m='4561670'>of</span> <span
  m='4561840'>each</span> <span m='4562470'>successive</span> <span
  m='4562980'>observation,</span> <span m='4564290'>given</span> <span
  m='4565640'>the</span> <span m='4565730'>history.</span> </p><p><span
  m='4567150'>And</span> <span m='4568020'>so</span> <span
  m='4568480'>basically,</span> <span m='4568770'>the</span> <span
  m='4568860'>likelihood</span> <span m='4569270'>of</span> <span
  m='4569390'>theta</span> <span m='4569750'>is</span> <span
  m='4570950'>the</span> <span m='4571070'>likelihood of</span> <span
  m='4571360'>the</span> <span m='4571460'>first</span> <span
  m='4571740'>observation</span> <span m='4572390'>times</span> <span
  m='4572660'>the</span> <span m='4573440'>density</span> <span
  m='4573950'>of</span> <span m='4574030'>the</span> <span
  m='4574120'>second</span> <span m='4574480'>observation</span> <span
  m='4575010'>given</span> <span m='4575240'>the</span> <span
  m='4575320'>first</span> <span m='4575760'>times</span> <span
  m='4576470'>and</span> <span m='4576560'>so</span> <span
  m='4576780'>forth</span> <span m='4577530'>for</span> <span
  m='4577620'>the</span> <span m='4577700'>whole</span> <span
  m='4577880'>series.</span> <span m='4578990'>And</span> <span
  m='4579830'>so</span> <span m='4579980'>the</span> <span
  m='4580100'>likelihood</span> <span m='4580570'>function</span> <span
  m='4580970'>is</span> <span m='4582320'>basically</span> <span
  m='4582650'>a</span> <span m='4582700'>function</span> <span
  m='4583040'>of</span> <span m='4583120'>all</span> <span
  m='4583460'>these</span> <span m='4583790'>terms</span> <span
  m='4584230'>that</span> <span m='4584330'>we</span> <span
  m='4584800'>were</span> <span m='4585020'>computing</span> <span
  m='4585490'>with</span> <span m='4585650'>the</span> <span
  m='4585690'>Kalman</span> <span m='4586060'>filter.</span> <span
  m='4589260'>And</span> <span m='4589940'>with</span> <span
  m='4590150'>the</span> <span m='4590240'>Kalman</span> <span
  m='4590590'>filter,</span> <span m='4592611'>it</span> <span
  m='4593070'>basically</span> <span m='4593470'>provides</span> <span
  m='4593830'>all</span> <span m='4594060'>the</span> <span
  m='4594140'>terms</span> <span m='4594460'>necessary</span> <span
  m='4595020'>for</span> <span m='4595120'>this</span> <span
  m='4595310'>estimation.</span> </p><p><span m='4596760'>If</span> <span
  m='4597090'>the</span> <span m='4598070'>error</span> <span
  m='4598350'>terms</span> <span m='4599280'>are</span> <span
  m='4599580'>normally</span> <span m='4600080'>distributed,</span> <span
  m='4602270'>then</span> <span m='4602690'>the</span> <span
  m='4602820'>means</span> <span m='4603410'>and</span> <span
  m='4603580'>variances</span> <span m='4605690'>of</span> <span
  m='4605890'>these</span> <span m='4606090'>estimates</span> <span
  m='4606550'>are</span> <span m='4606630'>in</span> <span
  m='4606730'>fact</span> <span m='4609970'>characterizing</span> <span
  m='4610590'>the</span> <span m='4610710'>exact</span> <span
  m='4611470'>distributions</span> <span m='4612750'>of</span> <span
  m='4612970'>the</span> <span m='4613070'>process.</span> <span
  m='4614300'>Basically,</span> <span m='4614430'>we're</span> <span
  m='4614530'>taking,</span> <span m='4615110'>if</span> <span
  m='4615560'>the</span> <span m='4615720'>innovation</span> <span
  m='4616310'>series</span> <span m='4616710'>are</span> <span
  m='4616850'>all</span> <span m='4617320'>normal</span> <span
  m='4617780'>random</span> <span m='4618090'>variables,</span> <span
  m='4619100'>then</span> <span m='4619290'>the</span> <span
  m='4619390'>linear</span> <span m='4619690'>state</span> <span
  m='4619980'>space</span> <span m='4620280'>model,</span> <span
  m='4620770'>all</span> <span m='4620980'>it's</span> <span
  m='4621110'>doing</span> <span m='4621370'>is</span> <span
  m='4621480'>taking</span> <span m='4621770'>linear</span> <span
  m='4622100'>combinations</span> <span m='4622830'>of</span> <span
  m='4623010'>normals</span> <span m='4623750'>for</span> <span
  m='4623830'>the</span> <span m='4623910'>underlying</span> <span
  m='4624260'>states</span> <span m='4624730'>and</span> <span
  m='4624950'>for</span> <span m='4625040'>the</span> <span
  m='4625390'>actual</span> <span m='4625660'>observations.</span> </p><p><span
  m='4627410'>And</span> <span m='4627640'>normal</span> <span
  m='4627960'>distributions</span> <span m='4628550'>are</span> <span
  m='4628610'>fully</span> <span m='4628890'>characterized</span> <span
  m='4629450'>by</span> <span m='4629600'>their</span> <span
  m='4629760'>mean</span> <span m='4630070'>vectors</span> <span
  m='4630610'>and</span> <span m='4630710'>covariance</span> <span
  m='4631240'>matrices.</span> <span m='4632310'>And</span> <span
  m='4632470'>the</span> <span m='4632550'>Kalman</span> <span
  m='4632910'>filter</span> <span m='4633250'>provides</span> <span
  m='4633700'>a</span> <span m='4633790'>way</span> <span m='4634050'>to</span>
  <span m='4634860'>update</span> <span m='4636060'>these</span> <span
  m='4637720'>distributions</span> <span m='4638420'>for</span> <span
  m='4638940'>all</span> <span m='4639670'>these</span> <span
  m='4641170'>features</span> <span m='4641570'>of</span> <span
  m='4641670'>a</span> <span m='4641710'>model,</span> <span m='4642470'>the
  underlying</span> <span m='4642660'>states</span> <span m='4643000'>as</span>
  <span m='4643100'>well</span> <span m='4643360'>as</span> <span
  m='4643670'>the</span> <span m='4643780'>distributions</span> <span
  m='4644370'>of</span> <span m='4644520'>the</span> <span
  m='4645250'>observations.</span> <span m='4646520'>So</span> <span
  m='4647850'>that's</span> <span m='4651510'>a</span> <span
  m='4651560'>brief</span> <span m='4651850'>introduction</span> <span
  m='4652370'>the</span> <span m='4652500'>Kalman</span> <span
  m='4652840'>filter.</span> <span m='4655250'>Let's</span> <span
  m='4655500'>finish</span> <span m='4655740'>there.</span> <span
  m='4656940'>Thank you.</span> </p>
embedded_media:
  - uid: 2292e694d599ebf6bfbe9aea193078c7
    parent_uid: d8295c9bdbbc5b8c18c0fc46e131bd6c
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: 9G1IDAqrWkg
  - uid: 9be4bf63e584b1c6970bd5d4b9688e94
    parent_uid: d8295c9bdbbc5b8c18c0fc46e131bd6c
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/9G1IDAqrWkg/default.jpg'
  - uid: 7a69c42bb8dbf9137dcc4396a68dab7d
    parent_uid: d8295c9bdbbc5b8c18c0fc46e131bd6c
    id: Video-iTunesU-MP4
    title: Video-iTunes U-MP4
    type: Video
    media_location: 'https://itunes.apple.com/us/itunes-u/id954073595'
  - uid: 3d155d15fea38a9fcdc6d09dadef15b4
    parent_uid: d8295c9bdbbc5b8c18c0fc46e131bd6c
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: 'http://www.archive.org/download/MIT18.S096F13/MIT18_S096F13_lec12_300k.mp4'
  - uid: e6209beddf0961d0f608b8ddb53ca103
    parent_uid: d8295c9bdbbc5b8c18c0fc46e131bd6c
    id: 3Play-3PlayYouTubeid-MP4
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: 9G1IDAqrWkg
  - uid: a7f65985bdd5f6ffcbe26bdd875126f3
    parent_uid: d8295c9bdbbc5b8c18c0fc46e131bd6c
    id: 9G1IDAqrWkg.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-12-time-series-analysis-iii/9G1IDAqrWkg.srt
  - uid: 62029aee95b5e1cea62e5c9de977693e
    parent_uid: d8295c9bdbbc5b8c18c0fc46e131bd6c
    id: 9G1IDAqrWkg.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video-lectures/lecture-12-time-series-analysis-iii/9G1IDAqrWkg.pdf
  - uid: bacb26100999ff7ccf8f2c35a249c2fd
    parent_uid: d8295c9bdbbc5b8c18c0fc46e131bd6c
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: bd84aecae5e6d0d64e22b9698521cfae
    parent_uid: d8295c9bdbbc5b8c18c0fc46e131bd6c
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
type: courses
layout: video
---
