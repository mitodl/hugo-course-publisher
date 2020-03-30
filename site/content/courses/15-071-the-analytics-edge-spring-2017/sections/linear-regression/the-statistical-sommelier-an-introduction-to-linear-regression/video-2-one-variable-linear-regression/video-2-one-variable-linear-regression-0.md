---
title: 'Video 2: One-Variable Linear Regression'
uid: 91ac06a2616cf560504c554da554adf0
parent_uid: 1f0b61bba29b5ee75d265ed940cc2d1d
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-2-one-variable-linear-regression/video-2-one-variable-linear-regression-0
short_url: video-2-one-variable-linear-regression-0
inline_embed_id: 84808658video2onevariablelinearregression97646894
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='8019'>Let's</span> <span m='8497'>discuss</span> <span
  m='8975'>the</span> <span m='9454'>method</span> <span
  m='9932'>Ashenfelter</span> <span m='10410'>used</span> <span
  m='10889'>to</span> <span m='11367'>build</span> <span m='11845'>his</span>
  <span m='12324'>model,</span> <span m='12802'>linear</span> <span
  m='13280'>regression.</span> </p><p><span m='13759'>We'll</span> <span
  m='14296'>start</span> <span m='14833'>with</span> <span
  m='15370'>one-variable</span> <span m='15908'>linear</span> <span
  m='16445'>regression,</span> <span m='16982'>which</span> <span
  m='17520'>just</span> <span m='18131'>uses</span> <span m='18742'>one</span>
  <span m='19353'>independent</span> <span m='19964'>variable</span> <span
  m='20575'>to</span> <span m='21186'>predict</span> <span m='21797'>the</span>
  <span m='22408'>dependent</span> <span m='23019'>variable.</span> </p><p><span
  m='23630'>This</span> <span m='23954'>figure</span> <span
  m='24279'>shows</span> <span m='24603'>a</span> <span m='24928'>plot</span>
  <span m='25252'>of</span> <span m='25577'>one</span> <span m='25901'>of</span>
  <span m='26226'>the</span> <span m='26550'>independent</span> <span
  m='26875'>variables,</span> <span m='27200'>average</span> <span
  m='27760'>growing</span> <span m='28320'>season</span> <span
  m='28880'>temperature,</span> <span m='29440'>and</span> <span
  m='30000'>the</span> <span m='30560'>dependent</span> <span
  m='31120'>variable,</span> <span m='31680'>wine</span> <span
  m='32240'>price.</span> </p><p><span m='32800'>The</span> <span
  m='33103'>goal</span> <span m='33407'>of</span> <span m='33710'>linear</span>
  <span m='34014'>regression</span> <span m='34318'>is</span> <span
  m='34621'>to</span> <span m='34925'>create</span> <span m='35229'>a</span>
  <span m='35532'>predictive</span> <span m='35836'>line</span> <span
  m='36140'>through</span> <span m='36723'>the</span> <span
  m='37306'>data.</span> </p><p><span m='37890'>There</span> <span
  m='38179'>are</span> <span m='38468'>many</span> <span
  m='38757'>different</span> <span m='39047'>lines</span> <span
  m='39336'>that</span> <span m='39625'>could</span> <span m='39915'>be</span>
  <span m='40204'>drawn</span> <span m='40493'>to</span> <span
  m='40782'>predict</span> <span m='41072'>wine</span> <span
  m='41361'>price</span> <span m='41650'>using</span> <span
  m='41940'>average</span> <span m='42595'>growing</span> <span
  m='43250'>season</span> <span m='43905'>temperature.</span> </p><p><span
  m='44560'>A</span> <span m='44951'>simple</span> <span m='45343'>option</span>
  <span m='45735'>would</span> <span m='46126'>be</span> <span
  m='46518'>a</span> <span m='46910'>flat</span> <span m='47301'>line</span>
  <span m='47693'>at</span> <span m='48085'>the</span> <span
  m='48476'>average</span> <span m='48868'>price,</span> <span
  m='49260'>in</span> <span m='50060'>this</span> <span m='50860'>case</span>
  <span m='51660'>7.07.</span> </p><p><span m='52460'>The</span> <span
  m='53157'>equation</span> <span m='53855'>for</span> <span
  m='54553'>this</span> <span m='55251'>line</span> <span m='55948'>is</span>
  <span m='56646'>y</span> <span m='57344'>equals</span> <span
  m='58042'>7.07.</span> </p><p><span m='58740'>This</span> <span
  m='59362'>linear</span> <span m='59984'>regression</span> <span
  m='60607'>model</span> <span m='61229'>would</span> <span
  m='61851'>predict</span> <span m='62474'>7.07</span> <span
  m='63096'>regardless</span> <span m='63719'>of</span> <span
  m='64469'>the</span> <span m='65219'>temperature.</span> </p><p><span
  m='65969'>But</span> <span m='66281'>it</span> <span m='66593'>looks</span>
  <span m='66906'>like</span> <span m='67218'>a</span> <span
  m='67531'>better</span> <span m='67843'>line</span> <span
  m='68155'>would</span> <span m='68468'>have</span> <span m='68780'>a</span>
  <span m='69093'>positive</span> <span m='69405'>slope,</span> <span
  m='69717'>such</span> <span m='70030'>as</span> <span m='70342'>this</span>
  <span m='70655'>line</span> <span m='70967'>in</span> <span
  m='71280'>blue.</span> </p><p><span m='73530'>The</span> <span
  m='74730'>equation</span> <span m='75931'>for</span> <span
  m='77132'>this</span> <span m='78333'>line</span> <span m='79534'>is</span>
  <span m='80735'>y</span> <span m='81936'>equals</span> <span
  m='83137'>0.5*(AGST)</span> <span m='84338'>-1.25.</span> </p><p><span
  m='85539'>This</span> <span m='85893'>linear</span> <span
  m='86247'>regression</span> <span m='86602'>model</span> <span
  m='86956'>would</span> <span m='87311'>predict</span> <span m='87665'>a</span>
  <span m='88020'>higher</span> <span m='88374'>price</span> <span
  m='88729'>when</span> <span m='89251'>the</span> <span
  m='89773'>temperature</span> <span m='90295'>is</span> <span
  m='90817'>higher.</span> </p><p><span m='91340'>Let's</span> <span
  m='91713'>make</span> <span m='92087'>this</span> <span m='92460'>idea</span>
  <span m='92834'>a</span> <span m='93208'>little</span> <span
  m='93581'>more</span> <span m='93955'>formal.</span> </p><p><span
  m='94329'>In</span> <span m='94827'>general</span> <span m='95326'>form</span>
  <span m='95825'>a</span> <span m='96324'>one-variable</span> <span
  m='96822'>linear</span> <span m='97321'>regression</span> <span
  m='97820'>model</span> <span m='98319'>is</span> <span m='98768'>a</span>
  <span m='99217'>linear</span> <span m='99666'>equation</span> <span
  m='100115'>to</span> <span m='100564'>predict</span> <span
  m='101013'>the</span> <span m='101462'>dependent</span> <span
  m='101911'>variable,</span> <span m='102360'>y,</span> <span
  m='102810'>using</span> <span m='103371'>the</span> <span
  m='103933'>independent</span> <span m='104495'>variable,</span> <span
  m='105057'>x.</span> </p><p><span m='105619'>Beta</span> <span
  m='106154'>0</span> <span m='106690'>is</span> <span m='107225'>the</span>
  <span m='107761'>intercept</span> <span m='108296'>term</span> <span
  m='108832'>or</span> <span m='109367'>intercept</span> <span
  m='109903'>coefficient,</span> <span m='110439'>and</span> <span
  m='110834'>Beta</span> <span m='111229'>1</span> <span m='111624'>is</span>
  <span m='112019'>the</span> <span m='112414'>slope</span> <span
  m='112809'>of</span> <span m='113204'>the</span> <span m='113599'>line</span>
  <span m='113994'>or</span> <span m='114389'>coefficient</span> <span
  m='114784'>for</span> <span m='115179'>the</span> <span
  m='115574'>independent</span> <span m='115969'>variable,</span> <span
  m='116364'>x.</span> </p><p><span m='116759'>For</span> <span
  m='117209'>each</span> <span m='117659'>observation,</span> <span
  m='118109'>i,</span> <span m='118559'>we</span> <span m='119009'>have</span>
  <span m='119459'>data</span> <span m='119909'>for</span> <span
  m='120359'>the</span> <span m='120809'>dependent</span> <span
  m='121259'>variable</span> <span m='121709'>Yi</span> <span
  m='122159'>and</span> <span m='122609'>data</span> <span m='123060'>for</span>
  <span m='123817'>the</span> <span m='124575'>independent</span> <span
  m='125333'>variable,</span> <span m='126091'>Xi.</span> </p><p><span
  m='126849'>Using</span> <span m='127278'>this</span> <span
  m='127707'>equation</span> <span m='128136'>we</span> <span
  m='128565'>make</span> <span m='128994'>a</span> <span
  m='129423'>prediction</span> <span m='129852'>beta</span> <span
  m='130281'>0</span> <span m='130710'>plus</span> <span m='131139'>Beta</span>
  <span m='131569'>1</span> <span m='132089'>times</span> <span
  m='132609'>Xi</span> <span m='133129'>for</span> <span m='133649'>each</span>
  <span m='134169'>data</span> <span m='134689'>point,</span> <span
  m='135209'>i.</span> </p><p><span m='135730'>This</span> <span
  m='136239'>prediction</span> <span m='136748'>is</span> <span
  m='137257'>hopefully</span> <span m='137766'>close</span> <span
  m='138275'>to</span> <span m='138784'>the</span> <span m='139293'>true</span>
  <span m='139802'>outcome,</span> <span m='140311'>Yi.</span> </p><p><span
  m='140820'>But</span> <span m='141140'>since</span> <span
  m='141461'>the</span> <span m='141782'>coefficients</span> <span
  m='142103'>have</span> <span m='142424'>to</span> <span m='142745'>be</span>
  <span m='143065'>the</span> <span m='143386'>same</span> <span
  m='143707'>for</span> <span m='144028'>all</span> <span m='144349'>data</span>
  <span m='144670'>points,</span> <span m='145142'>i,</span> <span
  m='145614'>we</span> <span m='146086'>often</span> <span
  m='146559'>make</span> <span m='147031'>a</span> <span m='147503'>small</span>
  <span m='147976'>error,</span> <span m='148448'>which</span> <span
  m='148920'>we'll</span> <span m='149393'>call</span> <span
  m='149865'>epsilon</span> <span m='150337'>i.</span> </p><p><span
  m='150810'>This</span> <span m='151328'>error</span> <span
  m='151847'>term</span> <span m='152366'>is</span> <span m='152885'>also</span>
  <span m='153404'>often</span> <span m='153923'>called</span> <span
  m='154442'>a</span> <span m='154961'>residual.</span> </p><p><span
  m='155480'>Our</span> <span m='155816'>errors</span> <span
  m='156153'>will</span> <span m='156490'>only</span> <span
  m='156827'>all</span> <span m='157164'>be</span> <span m='157501'>0</span>
  <span m='157838'>if</span> <span m='158175'>all</span> <span
  m='158512'>our</span> <span m='158849'>points</span> <span
  m='159186'>lie</span> <span m='159523'>perfectly</span> <span
  m='159860'>on</span> <span m='160325'>the</span> <span m='160790'>same</span>
  <span m='161255'>line.</span> </p><p><span m='161720'>This</span> <span
  m='162017'>rarely</span> <span m='162314'>happens,</span> <span
  m='162611'>so</span> <span m='162909'>we</span> <span m='163206'>know</span>
  <span m='163503'>that</span> <span m='163800'>our</span> <span
  m='164098'>model</span> <span m='164395'>will</span> <span
  m='164692'>probably</span> <span m='164990'>make</span> <span
  m='165673'>some</span> <span m='166356'>errors.</span> </p><p><span
  m='167040'>The</span> <span m='167440'>best</span> <span
  m='167840'>model</span> <span m='168240'>or</span> <span
  m='168640'>best</span> <span m='169040'>choice</span> <span
  m='169440'>of</span> <span m='169840'>coefficients</span> <span
  m='170240'>Beta</span> <span m='170640'>0</span> <span m='171040'>and</span>
  <span m='171440'>Beta</span> <span m='171840'>1</span> <span
  m='172240'>has</span> <span m='173737'>the</span> <span
  m='175235'>smallest</span> <span m='176732'>error</span> <span
  m='178230'>terms</span> <span m='179727'>or</span> <span
  m='181225'>smallest</span> <span m='182722'>residuals.</span> </p><p><span
  m='184220'>This</span> <span m='184545'>figure</span> <span
  m='184871'>shows</span> <span m='185197'>the</span> <span
  m='185523'>blue</span> <span m='185849'>line</span> <span
  m='186175'>that</span> <span m='186500'>we</span> <span m='186826'>drew</span>
  <span m='187152'>in</span> <span m='187478'>the</span> <span
  m='187804'>beginning.</span> </p><p><span m='188130'>We</span> <span
  m='188521'>can</span> <span m='188912'>compute</span> <span
  m='189304'>the</span> <span m='189695'>residuals</span> <span
  m='190087'>or</span> <span m='190478'>errors</span> <span m='190870'>of</span>
  <span m='191261'>this</span> <span m='191652'>line</span> <span
  m='192044'>for</span> <span m='192435'>each</span> <span
  m='192827'>data</span> <span m='193218'>point.</span> </p><p><span
  m='193610'>For</span> <span m='194169'>example,</span> <span
  m='194728'>for</span> <span m='195287'>this</span> <span
  m='195846'>point</span> <span m='196405'>the</span> <span
  m='196964'>actual</span> <span m='197523'>value</span> <span
  m='198082'>is</span> <span m='198641'>about</span> <span
  m='199200'>6.2.</span> </p><p><span m='199760'>Using</span> <span
  m='200342'>our</span> <span m='200925'>regression</span> <span
  m='201507'>model</span> <span m='202090'>we</span> <span
  m='202672'>predict</span> <span m='203255'>about</span> <span
  m='203837'>6.5.</span> </p><p><span m='204420'>So</span> <span
  m='204842'>the</span> <span m='205264'>error</span> <span
  m='205686'>for</span> <span m='206108'>this</span> <span
  m='206530'>data</span> <span m='206952'>point</span> <span
  m='207374'>is</span> <span m='207796'>negative</span> <span
  m='208218'>0.3,</span> <span m='208640'>which</span> <span
  m='209156'>is</span> <span m='209672'>the</span> <span
  m='210188'>actual</span> <span m='210705'>value</span> <span
  m='211221'>minus</span> <span m='211737'>our</span> <span
  m='212253'>prediction.</span> </p><p><span m='212770'>As</span> <span
  m='213304'>another</span> <span m='213838'>example</span> <span
  m='214372'>for</span> <span m='214906'>this</span> <span
  m='215440'>point,</span> <span m='215975'>the</span> <span
  m='216509'>actual</span> <span m='217043'>value</span> <span
  m='217577'>is</span> <span m='218111'>about</span> <span m='218645'>8.</span>
  </p><p><span m='219180'>Using</span> <span m='219807'>our</span> <span
  m='220435'>regression</span> <span m='221062'>model</span> <span
  m='221690'>we</span> <span m='222317'>predict</span> <span
  m='222945'>about</span> <span m='223572'>7.5.</span> </p><p><span
  m='224200'>So</span> <span m='224636'>the</span> <span m='225072'>error</span>
  <span m='225508'>for</span> <span m='225944'>this</span> <span
  m='226380'>data</span> <span m='226816'>point</span> <span
  m='227252'>is</span> <span m='227688'>about</span> <span
  m='228124'>0.5.</span> </p><p><span m='228560'>Again</span> <span
  m='229311'>the</span> <span m='230062'>actual</span> <span
  m='230814'>value</span> <span m='231565'>minus</span> <span
  m='232317'>our</span> <span m='233068'>prediction.</span> </p><p><span
  m='233820'>One</span> <span m='234150'>measure</span> <span
  m='234480'>of</span> <span m='234810'>the</span> <span
  m='235140'>quality</span> <span m='235470'>of</span> <span m='235800'>a</span>
  <span m='236130'>regression</span> <span m='236460'>line</span> <span
  m='236790'>is</span> <span m='237330'>the</span> <span m='237870'>sum</span>
  <span m='238410'>of</span> <span m='238950'>squared</span> <span
  m='239490'>errors,</span> <span m='240030'>or</span> <span
  m='240570'>SSE.</span> </p><p><span m='241110'>This</span> <span
  m='241540'>is</span> <span m='241971'>the</span> <span m='242402'>sum</span>
  <span m='242833'>of</span> <span m='243264'>the</span> <span
  m='243695'>squared</span> <span m='244126'>residuals</span> <span
  m='244557'>or</span> <span m='244988'>error</span> <span
  m='245419'>terms.</span> </p><p><span m='245850'>Let</span> <span
  m='246127'>n</span> <span m='246405'>equal</span> <span m='246683'>the</span>
  <span m='246961'>number</span> <span m='247239'>of</span> <span
  m='247517'>data</span> <span m='247795'>points</span> <span
  m='248072'>that</span> <span m='248350'>we</span> <span m='248628'>have</span>
  <span m='248906'>in</span> <span m='249184'>our</span> <span
  m='249462'>data</span> <span m='249740'>set.</span> </p><p><span
  m='252400'>Then</span> <span m='252690'>the</span> <span m='252981'>sum</span>
  <span m='253271'>of</span> <span m='253562'>squared</span> <span
  m='253852'>errors</span> <span m='254143'>is</span> <span
  m='254433'>equal</span> <span m='254724'>to</span> <span m='255014'>the</span>
  <span m='255305'>error</span> <span m='255595'>we</span> <span
  m='255886'>make</span> <span m='256176'>on</span> <span m='256467'>the</span>
  <span m='256757'>first</span> <span m='257048'>data</span> <span
  m='257339'>point</span> <span m='257705'>squared</span> <span
  m='258071'>plus</span> <span m='258438'>the</span> <span
  m='258804'>error</span> <span m='259171'>we</span> <span
  m='259537'>make</span> <span m='259904'>on</span> <span m='260270'>the</span>
  <span m='260637'>second</span> <span m='261003'>data</span> <span
  m='261370'>point</span> <span m='261681'>squared</span> <span
  m='261993'>plus</span> <span m='262305'>the</span> <span
  m='262617'>errors</span> <span m='262929'>that</span> <span
  m='263240'>you</span> <span m='263552'>make</span> <span m='263864'>on</span>
  <span m='264176'>all</span> <span m='264488'>data</span> <span
  m='264800'>points</span> <span m='265822'>up</span> <span m='266844'>to</span>
  <span m='267867'>the</span> <span m='268889'>n-th</span> <span
  m='269911'>data</span> <span m='270934'>point</span> <span
  m='271956'>squared.</span> </p><p><span m='272979'>We</span> <span
  m='273286'>can</span> <span m='273594'>compute</span> <span
  m='273902'>the</span> <span m='274209'>sum</span> <span m='274517'>of</span>
  <span m='274825'>squared</span> <span m='275132'>errors</span> <span
  m='275440'>for</span> <span m='275748'>both</span> <span m='276056'>the</span>
  <span m='276363'>red</span> <span m='276671'>line</span> <span
  m='276979'>and</span> <span m='277286'>the</span> <span m='277594'>blue</span>
  <span m='277902'>line.</span> </p><p><span m='278210'>As</span> <span
  m='278512'>expected</span> <span m='278814'>the</span> <span
  m='279116'>blue</span> <span m='279418'>line</span> <span m='279721'>is</span>
  <span m='280023'>a</span> <span m='280325'>better</span> <span
  m='280627'>fit</span> <span m='280930'>than</span> <span m='281232'>the</span>
  <span m='281534'>red</span> <span m='281836'>line</span> <span
  m='282139'>since</span> <span m='282560'>it</span> <span m='282981'>has</span>
  <span m='283402'>a</span> <span m='283823'>smaller</span> <span
  m='284245'>sum</span> <span m='284666'>of</span> <span
  m='285087'>squared</span> <span m='285508'>errors.</span> </p><p><span
  m='285930'>The</span> <span m='286227'>line</span> <span
  m='286524'>that</span> <span m='286821'>gives</span> <span
  m='287118'>the</span> <span m='287415'>minimum</span> <span
  m='287712'>sum</span> <span m='288009'>of</span> <span
  m='288306'>squared</span> <span m='288603'>errors</span> <span
  m='288900'>is</span> <span m='289345'>shown</span> <span m='289790'>in</span>
  <span m='290235'>green.</span> </p><p><span m='290680'>This</span> <span
  m='291095'>is</span> <span m='291510'>the</span> <span m='291925'>line</span>
  <span m='292340'>that</span> <span m='292755'>our</span> <span
  m='293170'>regression</span> <span m='293585'>model</span> <span
  m='294000'>will</span> <span m='294415'>find.</span> </p><p><span
  m='294830'>Although</span> <span m='295168'>sum</span> <span
  m='295506'>of</span> <span m='295844'>squared</span> <span
  m='296182'>errors</span> <span m='296520'>allows</span> <span
  m='296858'>us</span> <span m='297196'>to</span> <span
  m='297534'>compare</span> <span m='297872'>lines</span> <span
  m='298210'>on</span> <span m='298633'>the</span> <span m='299056'>same</span>
  <span m='299479'>data</span> <span m='299903'>set,</span> <span
  m='300326'>it's</span> <span m='300749'>hard</span> <span m='301172'>to</span>
  <span m='301596'>interpret</span> <span m='302019'>for</span> <span
  m='302442'>two</span> <span m='302865'>reasons.</span> </p><p><span
  m='303289'>The</span> <span m='303639'>first</span> <span m='303990'>is</span>
  <span m='304341'>that</span> <span m='304692'>it</span> <span
  m='305042'>scales</span> <span m='305393'>with</span> <span
  m='305744'>n,</span> <span m='306095'>the</span> <span
  m='306445'>number</span> <span m='306796'>of</span> <span
  m='307147'>data</span> <span m='307498'>points.</span> </p><p><span
  m='307849'>If</span> <span m='308176'>we</span> <span m='308503'>built</span>
  <span m='308830'>the</span> <span m='309158'>same</span> <span
  m='309485'>model</span> <span m='309812'>with</span> <span
  m='310139'>twice</span> <span m='310467'>as</span> <span
  m='310794'>much</span> <span m='311121'>data,</span> <span
  m='311449'>the</span> <span m='311722'>sum</span> <span m='311995'>of</span>
  <span m='312268'>squared</span> <span m='312541'>errors</span> <span
  m='312814'>might</span> <span m='313087'>be</span> <span
  m='313360'>twice</span> <span m='313633'>as</span> <span
  m='313906'>big.</span> </p><p><span m='314180'>But</span> <span
  m='314584'>this</span> <span m='314989'>doesn't</span> <span
  m='315394'>mean</span> <span m='315799'>it's</span> <span m='316204'>a</span>
  <span m='316609'>worse</span> <span m='317014'>model.</span> </p><p><span
  m='317419'>The</span> <span m='317704'>second</span> <span
  m='317989'>is</span> <span m='318274'>that</span> <span m='318559'>the</span>
  <span m='318844'>units</span> <span m='319129'>are</span> <span
  m='319414'>hard</span> <span m='319699'>to</span> <span
  m='319984'>understand.</span> </p><p><span m='320270'>Some</span> <span
  m='320770'>of</span> <span m='321270'>squared</span> <span
  m='321770'>errors</span> <span m='322270'>is</span> <span m='322770'>in</span>
  <span m='323270'>squared</span> <span m='323770'>units</span> <span
  m='324270'>of</span> <span m='324770'>the</span> <span
  m='325270'>dependent</span> <span m='325770'>variable.</span> </p><p><span
  m='326270'>Because</span> <span m='326746'>of</span> <span
  m='327223'>these</span> <span m='327700'>problems,</span> <span
  m='328177'>Root</span> <span m='328654'>Means</span> <span
  m='329131'>Squared</span> <span m='329608'>Error,</span> <span
  m='330085'>or</span> <span m='330562'>RMSE,</span> <span m='331039'>is</span>
  <span m='331632'>often</span> <span m='332225'>used.</span> </p><p><span
  m='332819'>This</span> <span m='333167'>divides</span> <span
  m='333516'>sum</span> <span m='333864'>of</span> <span
  m='334213'>squared</span> <span m='334561'>errors</span> <span
  m='334910'>by</span> <span m='335259'>n</span> <span m='335607'>and</span>
  <span m='335956'>then</span> <span m='336304'>takes</span> <span
  m='336653'>a</span> <span m='337001'>square</span> <span
  m='337350'>root.</span> </p><p><span m='337699'>So</span> <span
  m='338015'>it's</span> <span m='338331'>normalized</span> <span
  m='338648'>by</span> <span m='338964'>n</span> <span m='339281'>and</span>
  <span m='339597'>is</span> <span m='339914'>in</span> <span
  m='340230'>the</span> <span m='340547'>same</span> <span
  m='340863'>units</span> <span m='341180'>as</span> <span m='341917'>the</span>
  <span m='342654'>dependent</span> <span m='343391'>variable.</span>
  </p><p><span m='344129'>Another</span> <span m='344592'>common</span> <span
  m='345055'>error</span> <span m='345518'>measure</span> <span
  m='345981'>for</span> <span m='346444'>linear</span> <span
  m='346907'>regression</span> <span m='347370'>is</span> <span
  m='347833'>R</span> <span m='348296'>squared.</span> </p><p><span
  m='348759'>This</span> <span m='349053'>error</span> <span
  m='349347'>measure</span> <span m='349641'>is</span> <span
  m='349935'>nice</span> <span m='350229'>because</span> <span
  m='350523'>it</span> <span m='350817'>compares</span> <span
  m='351111'>the</span> <span m='351405'>best</span> <span
  m='351699'>model</span> <span m='352059'>to</span> <span m='352420'>a</span>
  <span m='352781'>baseline</span> <span m='353142'>model,</span> <span
  m='353503'>the</span> <span m='353864'>model</span> <span
  m='354225'>that</span> <span m='354586'>does</span> <span
  m='354947'>not</span> <span m='355308'>use</span> <span m='355771'>any</span>
  <span m='356234'>variables,</span> <span m='356698'>or</span> <span
  m='357161'>the</span> <span m='357625'>red</span> <span m='358088'>line</span>
  <span m='358552'>from</span> <span m='359015'>before.</span> </p><p><span
  m='359479'>The</span> <span m='359969'>baseline</span> <span
  m='360460'>model</span> <span m='360951'>predicts</span> <span
  m='361442'>the</span> <span m='361933'>average</span> <span
  m='362424'>value</span> <span m='362915'>of</span> <span m='363406'>the</span>
  <span m='363897'>dependent</span> <span m='364388'>variable</span> <span
  m='364879'>regardless</span> <span m='365370'>of</span> <span
  m='365885'>the</span> <span m='366401'>value</span> <span m='366916'>of</span>
  <span m='367432'>the</span> <span m='367947'>independent</span> <span
  m='368463'>variable.</span> </p><p><span m='368979'>We</span> <span
  m='369232'>can</span> <span m='369486'>compute</span> <span
  m='369740'>that</span> <span m='369994'>the</span> <span m='370248'>sum</span>
  <span m='370502'>of</span> <span m='370755'>squared</span> <span
  m='371009'>errors</span> <span m='371263'>for</span> <span
  m='371517'>the</span> <span m='371771'>best</span> <span m='372025'>fit</span>
  <span m='372279'>line</span> <span m='372946'>or</span> <span
  m='373613'>the</span> <span m='374280'>green</span> <span
  m='374947'>line</span> <span m='375614'>is</span> <span
  m='376281'>5.73.</span> </p><p><span m='376949'>And</span> <span
  m='377357'>the</span> <span m='377766'>sum</span> <span m='378175'>of</span>
  <span m='378583'>squared</span> <span m='378992'>errors</span> <span
  m='379401'>for</span> <span m='379810'>the</span> <span
  m='380218'>baseline</span> <span m='380627'>or</span> <span
  m='381036'>the</span> <span m='381445'>red</span> <span m='381853'>line</span>
  <span m='382262'>is</span> <span m='382671'>10.15.</span> </p><p><span
  m='383080'>The</span> <span m='383384'>sum</span> <span m='383688'>of</span>
  <span m='383993'>squared</span> <span m='384297'>errors</span> <span
  m='384601'>for</span> <span m='384906'>the</span> <span
  m='385210'>baseline</span> <span m='385514'>model</span> <span
  m='385819'>is</span> <span m='386188'>also</span> <span
  m='386557'>known</span> <span m='386926'>as</span> <span m='387295'>the</span>
  <span m='387664'>total</span> <span m='388034'>sum</span> <span
  m='388403'>of</span> <span m='388772'>squares,</span> <span
  m='389141'>commonly</span> <span m='389510'>referred</span> <span
  m='389880'>to</span> <span m='390783'>as</span> <span m='391686'>SST.</span>
  </p><p><span m='392590'>Then</span> <span m='393106'>the</span> <span
  m='393623'>formula</span> <span m='394140'>for</span> <span
  m='394657'>R</span> <span m='395174'>squared</span> <span m='395691'>is</span>
  <span m='396208'>R</span> <span m='396725'>squared</span> <span
  m='397241'>equals</span> <span m='397758'>1</span> <span
  m='398275'>minus</span> <span m='398792'>sum</span> <span m='399309'>of</span>
  <span m='399826'>squared</span> <span m='400343'>errors</span> <span
  m='400860'>divided</span> <span m='401483'>by</span> <span
  m='402106'>total</span> <span m='402729'>sum</span> <span m='403352'>of</span>
  <span m='403975'>squares.</span> </p><p><span m='404599'>In</span> <span
  m='405441'>this</span> <span m='406284'>case</span> <span m='407127'>it</span>
  <span m='407970'>equals</span> <span m='408813'>1</span> <span
  m='409656'>minus</span> <span m='410499'>5.73</span> <span
  m='411342'>divided</span> <span m='412185'>by</span> <span
  m='413028'>10.15</span> <span m='413871'>which</span> <span
  m='414714'>equals</span> <span m='415557'>0.44.</span> </p><p><span
  m='416400'>R</span> <span m='416754'>squared</span> <span m='417109'>is</span>
  <span m='417463'>nice</span> <span m='417818'>because</span> <span
  m='418173'>it</span> <span m='418527'>captures</span> <span
  m='418882'>the</span> <span m='419236'>value</span> <span
  m='419591'>added</span> <span m='419946'>from</span> <span
  m='420300'>using</span> <span m='420655'>a</span> <span
  m='421009'>linear</span> <span m='421364'>regression</span> <span
  m='421719'>model</span> <span m='422160'>over</span> <span
  m='422601'>just</span> <span m='423042'>predicting</span> <span
  m='423483'>the</span> <span m='423924'>average</span> <span
  m='424365'>outcome</span> <span m='424806'>for</span> <span
  m='425247'>every</span> <span m='425688'>data</span> <span
  m='426129'>point.</span> </p><p><span m='427319'>So</span> <span
  m='427618'>what</span> <span m='427917'>values</span> <span
  m='428216'>do</span> <span m='428515'>we</span> <span m='428814'>expect</span>
  <span m='429114'>to</span> <span m='429413'>see</span> <span
  m='429712'>for</span> <span m='430011'>R</span> <span
  m='430310'>squared?</span> </p><p><span m='430610'>Well</span> <span
  m='431032'>both</span> <span m='431454'>the</span> <span m='431876'>sum</span>
  <span m='432298'>of</span> <span m='432720'>squared</span> <span
  m='433142'>errors</span> <span m='433565'>and</span> <span
  m='433987'>the</span> <span m='434409'>total</span> <span
  m='434831'>sum</span> <span m='435253'>of</span> <span
  m='435675'>squares</span> <span m='436097'>have</span> <span
  m='436520'>to</span> <span m='436811'>be</span> <span
  m='437102'>greater</span> <span m='437393'>than</span> <span
  m='437684'>or</span> <span m='437975'>equal</span> <span m='438266'>to</span>
  <span m='438557'>zero</span> <span m='438848'>because</span> <span
  m='439139'>they're</span> <span m='439430'>the</span> <span
  m='439855'>sum</span> <span m='440280'>of</span> <span
  m='440705'>squared</span> <span m='441130'>terms</span> <span
  m='441555'>so</span> <span m='441980'>they</span> <span
  m='442405'>can't</span> <span m='442830'>be</span> <span
  m='443255'>negative.</span> </p><p><span m='443680'>Additionally</span> <span
  m='444055'>the</span> <span m='444430'>sum</span> <span m='444806'>of</span>
  <span m='445181'>squared</span> <span m='445556'>errors</span> <span
  m='445932'>has</span> <span m='446307'>to</span> <span m='446682'>be</span>
  <span m='447058'>less</span> <span m='447433'>than</span> <span
  m='447809'>or</span> <span m='448241'>equal</span> <span m='448674'>to</span>
  <span m='449106'>the</span> <span m='449539'>total</span> <span
  m='449972'>sum</span> <span m='450404'>of</span> <span
  m='450837'>squares.</span> </p><p><span m='451270'>This</span> <span
  m='451624'>is</span> <span m='451978'>because</span> <span
  m='452333'>our</span> <span m='452687'>linear</span> <span
  m='453042'>regression</span> <span m='453396'>model</span> <span
  m='453751'>could</span> <span m='454105'>just</span> <span
  m='454460'>set</span> <span m='454936'>the</span> <span
  m='455413'>coefficient</span> <span m='455889'>for</span> <span
  m='456366'>the</span> <span m='456842'>independent</span> <span
  m='457319'>variable</span> <span m='457795'>to</span> <span
  m='458272'>0</span> <span m='458749'>and</span> <span m='459120'>then</span>
  <span m='459491'>we</span> <span m='459863'>would</span> <span
  m='460234'>have</span> <span m='460605'>the</span> <span
  m='460977'>baseline</span> <span m='461348'>model.</span> </p><p><span
  m='461720'>So</span> <span m='462057'>our</span> <span
  m='462395'>linear</span> <span m='462733'>regression</span> <span
  m='463070'>model</span> <span m='463408'>will</span> <span
  m='463746'>never</span> <span m='464083'>be</span> <span
  m='464421'>worse</span> <span m='464759'>than</span> <span
  m='465096'>the</span> <span m='465434'>baseline</span> <span
  m='465772'>model.</span> </p><p><span m='466110'>So</span> <span
  m='466470'>in</span> <span m='466831'>the</span> <span m='467191'>worst</span>
  <span m='467552'>case</span> <span m='467912'>the</span> <span
  m='468273'>sum</span> <span m='468633'>of</span> <span
  m='468994'>squares</span> <span m='469354'>errors</span> <span
  m='469715'>equals</span> <span m='470075'>the</span> <span
  m='470436'>total</span> <span m='470796'>sum</span> <span m='471157'>of</span>
  <span m='471517'>squares,</span> <span m='471878'>and</span> <span
  m='472238'>our</span> <span m='472599'>R</span> <span
  m='472960'>squared</span> <span m='473457'>is</span> <span
  m='473955'>equal</span> <span m='474453'>to</span> <span m='474951'>0.</span>
  </p><p><span m='475449'>So</span> <span m='475959'>this</span> <span
  m='476469'>means</span> <span m='476979'>no</span> <span
  m='477489'>improvement</span> <span m='477999'>over</span> <span
  m='478509'>the</span> <span m='479019'>baseline.</span> </p><p><span
  m='479529'>In</span> <span m='479891'>the</span> <span m='480254'>best</span>
  <span m='480617'>case</span> <span m='480980'>our</span> <span
  m='481343'>linear</span> <span m='481706'>regression</span> <span
  m='482069'>model</span> <span m='482432'>makes</span> <span
  m='482795'>no</span> <span m='483158'>errors,</span> <span
  m='483521'>and</span> <span m='483884'>the</span> <span m='484247'>sum</span>
  <span m='484610'>of</span> <span m='484973'>squared</span> <span
  m='485336'>errors</span> <span m='485699'>is</span> <span
  m='486226'>equal</span> <span m='486754'>to</span> <span m='487281'>0.</span>
  </p><p><span m='487809'>And</span> <span m='488166'>then</span> <span
  m='488524'>our</span> <span m='488882'>R</span> <span
  m='489240'>squared</span> <span m='489597'>is</span> <span
  m='489955'>equal</span> <span m='490313'>to</span> <span m='490671'>1.</span>
  </p><p><span m='491029'>So</span> <span m='491399'>an</span> <span
  m='491769'>R</span> <span m='492139'>squared</span> <span
  m='492509'>equal</span> <span m='492879'>to</span> <span m='493249'>1</span>
  <span m='493619'>or</span> <span m='493989'>close</span> <span
  m='494359'>to</span> <span m='494729'>1</span> <span m='495099'>means</span>
  <span m='495469'>a</span> <span m='495839'>perfect</span> <span
  m='496209'>or</span> <span m='496579'>almost</span> <span
  m='496949'>perfect</span> <span m='497319'>predictive</span> <span
  m='497689'>model.</span> </p><p><span m='500089'>R</span> <span
  m='500420'>squared</span> <span m='500751'>is</span> <span
  m='501082'>nice</span> <span m='501413'>because</span> <span
  m='501744'>it's</span> <span m='502075'>unitless</span> <span
  m='502406'>and</span> <span m='502737'>therefore</span> <span
  m='503069'>universally</span> <span m='503919'>interpretable</span> <span
  m='504769'>between</span> <span m='505619'>problems.</span> </p><p><span
  m='506469'>However,</span> <span m='506928'>it</span> <span
  m='507387'>can</span> <span m='507846'>still</span> <span m='508305'>be</span>
  <span m='508764'>hard</span> <span m='509223'>to</span> <span
  m='509682'>compare</span> <span m='510141'>between</span> <span
  m='510600'>problems.</span> </p><p><span m='511060'>Good</span> <span
  m='511405'>models</span> <span m='511750'>for</span> <span
  m='512095'>easy</span> <span m='512441'>problems</span> <span
  m='512786'>will</span> <span m='513131'>have</span> <span m='513477'>an</span>
  <span m='513822'>R</span> <span m='514167'>squared</span> <span
  m='514513'>close</span> <span m='514858'>to</span> <span m='515203'>1.</span>
  </p><p><span m='515549'>But</span> <span m='515950'>good</span> <span
  m='516351'>models</span> <span m='516753'>for</span> <span
  m='517154'>hard</span> <span m='517556'>problems</span> <span
  m='517957'>can</span> <span m='518358'>still</span> <span
  m='518760'>have</span> <span m='519161'>an</span> <span m='519563'>R</span>
  <span m='519964'>squared</span> <span m='520365'>close</span> <span
  m='520767'>to</span> <span m='521168'>zero.</span> </p><p><span
  m='521570'>Throughout</span> <span m='521910'>this</span> <span
  m='522251'>course</span> <span m='522592'>we</span> <span
  m='522933'>will</span> <span m='523274'>see</span> <span
  m='523615'>examples</span> <span m='523955'>of</span> <span
  m='524296'>both</span> <span m='524637'>types</span> <span
  m='524978'>of</span> <span m='525319'>problems.</span> </p>
embedded_media:
  - uid: 79a9951b811759f401f6ce97e3390588
    parent_uid: 91ac06a2616cf560504c554da554adf0
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: wT3Y2K-fxXw
  - uid: d7c3687b0dc3978f74f9fa22b065d5e5
    parent_uid: 91ac06a2616cf560504c554da554adf0
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: wT3Y2K-fxXw
  - uid: 18ed726effab68c539c8aa33b19246e4
    parent_uid: 91ac06a2616cf560504c554da554adf0
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/wT3Y2K-fxXw/default.jpg'
  - uid: 956ab7f187b9cc446b4340a997b8575b
    parent_uid: 91ac06a2616cf560504c554da554adf0
    id: wT3Y2K-fxXw.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-2-one-variable-linear-regression/video-2-one-variable-linear-regression-0/wT3Y2K-fxXw.srt
  - uid: c143126bee93d78c262c3c01beff3e01
    parent_uid: 91ac06a2616cf560504c554da554adf0
    id: wT3Y2K-fxXw.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/linear-regression/the-statistical-sommelier-an-introduction-to-linear-regression/video-2-one-variable-linear-regression/video-2-one-variable-linear-regression-0/wT3Y2K-fxXw.pdf
  - uid: 5af959076f3995c7349589002fc2e8db
    parent_uid: 91ac06a2616cf560504c554da554adf0
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 7665eefb4b1a0c11a59eefb1b97cfaa9
    parent_uid: 91ac06a2616cf560504c554da554adf0
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: b125465502f524aac41c806528754a38
    parent_uid: 91ac06a2616cf560504c554da554adf0
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_2.2.03_300k.mp4
type: courses
layout: video
---
