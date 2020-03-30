---
title: 'Video 6: Bag of Words in R'
uid: a9f646f5ca977eeaa267504c5cbef773
parent_uid: b8c9ec4867a6977eb31db490c342ef38
technical_location: >-
  https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-6-bag-of-words-in-r/video-6-bag-of-words-in-r-0
short_url: video-6-bag-of-words-in-r-0
inline_embed_id: 29274325video6bagofwordsinr25075963
about_this_resource_text: ''
related_resources_text: ''
transcript: >-
  <p><span m='4490'>In</span> <span m='4903'>the</span> <span
  m='5317'>previous</span> <span m='5731'>video,</span> <span m='6145'>we</span>
  <span m='6558'>preprocessed</span> <span m='6972'>our</span> <span
  m='7386'>data,</span> <span m='7800'>and</span> <span m='8111'>we're</span>
  <span m='8423'>now</span> <span m='8735'>ready</span> <span m='9047'>to</span>
  <span m='9359'>extract</span> <span m='9670'>the</span> <span
  m='9982'>word</span> <span m='10294'>frequencies</span> <span
  m='10606'>to</span> <span m='10918'>be</span> <span m='11230'>used</span>
  <span m='11800'>in</span> <span m='12370'>our</span> <span
  m='12940'>prediction</span> <span m='13510'>problem.</span> </p><p><span
  m='14080'>The</span> <span m='14448'>tm</span> <span m='14817'>package</span>
  <span m='15185'>provides</span> <span m='15554'>a</span> <span
  m='15922'>function</span> <span m='16291'>called</span> <span
  m='16660'>DocumentTermMatrix</span> <span m='17281'>that</span> <span
  m='17903'>generates</span> <span m='18525'>a</span> <span
  m='19146'>matrix</span> <span m='19768'>where</span> <span
  m='20390'>the</span> <span m='20842'>rows</span> <span
  m='21294'>correspond</span> <span m='21746'>to</span> <span
  m='22198'>documents,</span> <span m='22651'>in</span> <span
  m='23103'>our</span> <span m='23555'>case</span> <span
  m='24007'>tweets,</span> <span m='24460'>and</span> <span m='24883'>the</span>
  <span m='25306'>columns</span> <span m='25730'>correspond</span> <span
  m='26153'>to</span> <span m='26576'>words</span> <span m='27000'>in</span>
  <span m='27423'>those</span> <span m='27846'>tweets.</span> </p><p><span
  m='28270'>The</span> <span m='28545'>values</span> <span m='28820'>in</span>
  <span m='29095'>the</span> <span m='29370'>matrix</span> <span
  m='29645'>are</span> <span m='29920'>the</span> <span m='30195'>number</span>
  <span m='30470'>of</span> <span m='30935'>times</span> <span
  m='31400'>that</span> <span m='31865'>word</span> <span
  m='32330'>appears</span> <span m='32795'>in</span> <span m='33260'>each</span>
  <span m='33725'>argument.</span> </p><p><span m='34190'>Let's</span> <span
  m='34497'>go</span> <span m='34804'>ahead</span> <span m='35111'>and</span>
  <span m='35418'>generate</span> <span m='35725'>this</span> <span
  m='36032'>matrix</span> <span m='36340'>and</span> <span m='37040'>call</span>
  <span m='37740'>it</span> <span m='38440'>"frequencies."</span> <span
  m='39140'>So</span> <span m='40038'>we'll</span> <span m='40936'>use</span>
  <span m='41835'>the</span> <span m='42733'>DocumentTermMatrix</span> <span
  m='43631'>function</span> <span m='44530'>calls</span> <span
  m='44980'>on</span> <span m='45431'>our</span> <span m='45882'>corpus</span>
  <span m='46333'>that</span> <span m='46784'>we</span> <span
  m='47235'>created</span> <span m='47686'>in</span> <span m='48137'>the</span>
  <span m='48588'>previous</span> <span m='49039'>video.</span> </p><p><span
  m='49490'>Let's</span> <span m='49945'>take</span> <span m='50400'>a</span>
  <span m='50855'>look</span> <span m='51310'>at</span> <span
  m='51765'>our</span> <span m='52220'>matrix</span> <span m='52675'>by</span>
  <span m='53130'>typing</span> <span m='53585'>frequencies.</span> </p><p><span
  m='54040'>We</span> <span m='54606'>can</span> <span m='55172'>see</span>
  <span m='55738'>that</span> <span m='56305'>there</span> <span
  m='56871'>are</span> <span m='57437'>3,289</span> <span m='58003'>terms</span>
  <span m='58570'>or</span> <span m='59278'>words</span> <span
  m='59987'>in</span> <span m='60695'>our</span> <span m='61404'>matrix</span>
  <span m='62113'>and</span> <span m='62821'>1,181</span> <span
  m='63530'>documents</span> <span m='64239'>or</span> <span
  m='65111'>tweets</span> <span m='65984'>after</span> <span
  m='66857'>preprocessing.</span> </p><p><span m='67730'>Let's</span> <span
  m='68042'>see</span> <span m='68355'>what</span> <span m='68667'>this</span>
  <span m='68980'>matrix</span> <span m='69292'>looks</span> <span
  m='69605'>like</span> <span m='69917'>using</span> <span m='70230'>the</span>
  <span m='70913'>inspect</span> <span m='71596'>function.</span> </p><p><span
  m='72280'>So</span> <span m='76802'>type</span> <span
  m='81325'>inspect(frequencies[1000:1005,</span> <span
  m='85847'>505:515]).</span> </p><p><span m='90370'>In</span> <span
  m='90754'>this</span> <span m='91138'>range</span> <span m='91522'>we</span>
  <span m='91906'>see</span> <span m='92290'>that</span> <span
  m='92674'>the</span> <span m='93058'>word</span> <span
  m='93442'>"cheer"</span> <span m='93826'>appears</span> <span
  m='94210'>in</span> <span m='94781'>the</span> <span m='95352'>tweet</span>
  <span m='95924'>1005,</span> <span m='96495'>but</span> <span
  m='97067'>"cheap"</span> <span m='97638'>doesn't</span> <span
  m='98210'>appear</span> <span m='98759'>in</span> <span m='99309'>any</span>
  <span m='99859'>of</span> <span m='100409'>these</span> <span
  m='100959'>tweets.</span> </p><p><span m='101509'>This</span> <span
  m='101857'>data</span> <span m='102206'>is</span> <span m='102555'>what</span>
  <span m='102903'>we</span> <span m='103252'>call</span> <span
  m='103601'>sparse.</span> </p><p><span m='103950'>This</span> <span
  m='104315'>means</span> <span m='104680'>that</span> <span
  m='105045'>there</span> <span m='105410'>are</span> <span
  m='105775'>many</span> <span m='106140'>zeros</span> <span
  m='106505'>in</span> <span m='106870'>our</span> <span
  m='107235'>matrix.</span> </p><p><span m='107600'>We</span> <span
  m='107875'>can</span> <span m='108150'>look</span> <span m='108425'>at</span>
  <span m='108700'>what</span> <span m='108975'>the</span> <span
  m='109250'>most</span> <span m='109525'>popular</span> <span
  m='109800'>terms</span> <span m='110075'>are,</span> <span
  m='110350'>or</span> <span m='110855'>words,</span> <span
  m='111360'>with</span> <span m='111865'>the</span> <span
  m='112370'>function</span> <span m='112875'>findFreqTerms.</span> </p><p><span
  m='117900'>We</span> <span m='118414'>want</span> <span m='118928'>to</span>
  <span m='119443'>call</span> <span m='119957'>this</span> <span
  m='120472'>on</span> <span m='120986'>our</span> <span
  m='121501'>matrix</span> <span m='122015'>frequencies,</span> <span
  m='122530'>and</span> <span m='123003'>then</span> <span m='123476'>we</span>
  <span m='123949'>want</span> <span m='124422'>to</span> <span
  m='124895'>give</span> <span m='125368'>an</span> <span
  m='125841'>argument</span> <span m='126314'>lowFreq,</span> <span
  m='126787'>which</span> <span m='127260'>is</span> <span
  m='127562'>equal</span> <span m='127865'>to</span> <span m='128167'>the</span>
  <span m='128470'>minimum</span> <span m='128772'>number</span> <span
  m='129075'>of</span> <span m='129377'>times</span> <span m='129680'>a</span>
  <span m='130037'>term</span> <span m='130394'>must</span> <span
  m='130751'>appear</span> <span m='131108'>to</span> <span m='131465'>be</span>
  <span m='131822'>displayed.</span> </p><p><span m='132180'>Let's</span> <span
  m='132823'>type</span> <span m='133466'>20.</span> </p><p><span
  m='134110'>We</span> <span m='134663'>see</span> <span m='135216'>here</span>
  <span m='135770'>56</span> <span m='136323'>different</span> <span
  m='136876'>words.</span> </p><p><span m='137430'>So</span> <span
  m='137978'>out</span> <span m='138527'>of</span> <span m='139076'>the</span>
  <span m='139625'>3,289</span> <span m='140174'>words</span> <span
  m='140723'>in</span> <span m='141272'>our</span> <span
  m='141821'>matrix,</span> <span m='142370'>only</span> <span
  m='142790'>56</span> <span m='143210'>words</span> <span
  m='143630'>appear</span> <span m='144050'>at</span> <span
  m='144470'>least</span> <span m='144890'>20</span> <span
  m='145310'>times</span> <span m='145730'>in</span> <span m='146150'>our</span>
  <span m='146570'>tweets.</span> </p><p><span m='146990'>This</span> <span
  m='147286'>means</span> <span m='147582'>that</span> <span
  m='147878'>we</span> <span m='148174'>probably</span> <span
  m='148470'>have</span> <span m='148766'>a</span> <span m='149062'>lot</span>
  <span m='149358'>of</span> <span m='149654'>terms</span> <span
  m='149950'>that</span> <span m='150391'>will</span> <span m='150832'>be</span>
  <span m='151273'>pretty</span> <span m='151714'>useless</span> <span
  m='152155'>for</span> <span m='152596'>our</span> <span
  m='153037'>prediction</span> <span m='153478'>model.</span> </p><p><span
  m='153920'>The</span> <span m='154200'>number</span> <span
  m='154481'>of</span> <span m='154762'>terms</span> <span m='155043'>is</span>
  <span m='155324'>an</span> <span m='155605'>issue</span> <span
  m='155886'>for</span> <span m='156167'>two</span> <span m='156448'>main</span>
  <span m='156729'>reasons.</span> </p><p><span m='157010'>One</span> <span
  m='157733'>is</span> <span m='158456'>computational.</span> </p><p><span
  m='159180'>More</span> <span m='159678'>terms</span> <span
  m='160176'>means</span> <span m='160675'>more</span> <span
  m='161173'>independent</span> <span m='161671'>variables,</span> <span
  m='162170'>which</span> <span m='162569'>usually</span> <span
  m='162968'>means</span> <span m='163367'>it</span> <span
  m='163766'>takes</span> <span m='164165'>longer</span> <span
  m='164564'>to</span> <span m='164963'>build</span> <span m='165362'>our</span>
  <span m='165761'>models.</span> </p><p><span m='166160'>The</span> <span
  m='166414'>other</span> <span m='166668'>is</span> <span m='166923'>in</span>
  <span m='167177'>building</span> <span m='167432'>models,</span> <span
  m='167686'>as</span> <span m='167941'>we</span> <span
  m='168195'>mentioned</span> <span m='168450'>before,</span> <span
  m='168962'>the</span> <span m='169475'>ratio</span> <span m='169987'>of</span>
  <span m='170500'>independent</span> <span m='171012'>variables</span> <span
  m='171525'>to</span> <span m='172037'>observations</span> <span
  m='172550'>will</span> <span m='172987'>affect</span> <span
  m='173425'>how</span> <span m='173862'>good</span> <span m='174300'>the</span>
  <span m='174737'>model</span> <span m='175175'>will</span> <span
  m='175612'>generalize.</span> </p><p><span m='176050'>So</span> <span
  m='176412'>let's</span> <span m='176774'>remove</span> <span
  m='177136'>some</span> <span m='177498'>terms</span> <span
  m='177860'>that</span> <span m='178222'>don't</span> <span
  m='178584'>appear</span> <span m='178946'>very</span> <span
  m='179308'>often.</span> </p><p><span m='179670'>We'll</span> <span
  m='180118'>call</span> <span m='180567'>the</span> <span
  m='181016'>output</span> <span m='181465'>sparse,</span> <span
  m='181913'>and</span> <span m='182362'>we'll</span> <span
  m='182811'>use</span> <span m='183260'>the</span> <span
  m='183965'>removeSparseTerms(frequencies,</span> <span
  m='184670'>0.98).</span> </p><p><span m='199670'>The</span> <span
  m='200123'>sparsity</span> <span m='200576'>threshold</span> <span
  m='201030'>works</span> <span m='201483'>as</span> <span
  m='201936'>follows.</span> </p><p><span m='202390'>If</span> <span
  m='202835'>we</span> <span m='203281'>say</span> <span m='203726'>0.98,</span>
  <span m='204172'>this</span> <span m='204617'>means</span> <span
  m='205063'>to</span> <span m='205508'>only</span> <span m='205954'>keep</span>
  <span m='206400'>terms</span> <span m='206749'>that</span> <span
  m='207098'>appear</span> <span m='207447'>in</span> <span m='207796'>2%</span>
  <span m='208145'>or</span> <span m='208494'>more</span> <span
  m='208843'>of</span> <span m='209192'>the</span> <span
  m='209541'>tweets.</span> </p><p><span m='209890'>If</span> <span
  m='210337'>we</span> <span m='210785'>say</span> <span m='211233'>0.99,</span>
  <span m='211681'>that</span> <span m='212128'>means</span> <span
  m='212576'>to</span> <span m='213024'>only</span> <span m='213472'>keep</span>
  <span m='213920'>terms</span> <span m='214229'>that</span> <span
  m='214538'>appear</span> <span m='214847'>in</span> <span m='215156'>1%</span>
  <span m='215465'>or</span> <span m='215774'>more</span> <span
  m='216083'>of</span> <span m='216392'>the</span> <span
  m='216701'>tweets.</span> </p><p><span m='217010'>If</span> <span
  m='217516'>we</span> <span m='218023'>say</span> <span
  m='218530'>0.995,</span> <span m='219036'>that</span> <span
  m='219543'>means</span> <span m='220050'>to</span> <span
  m='220556'>only</span> <span m='221063'>keep</span> <span
  m='221570'>terms</span> <span m='221919'>that</span> <span
  m='222268'>appear</span> <span m='222617'>in</span> <span
  m='222966'>0.5%</span> <span m='223315'>or</span> <span m='223664'>more</span>
  <span m='224013'>of</span> <span m='224362'>the</span> <span
  m='224711'>tweets,</span> <span m='225060'>about</span> <span
  m='225426'>six</span> <span m='225792'>or</span> <span m='226158'>more</span>
  <span m='226524'>tweets.</span> </p><p><span m='226890'>We'll</span> <span
  m='227383'>go</span> <span m='227877'>ahead</span> <span m='228371'>and</span>
  <span m='228865'>use</span> <span m='229358'>this</span> <span
  m='229852'>sparsity</span> <span m='230346'>threshold.</span> </p><p><span
  m='230840'>If</span> <span m='231175'>you</span> <span m='231511'>type</span>
  <span m='231846'>sparse,</span> <span m='232182'>you</span> <span
  m='232517'>can</span> <span m='232853'>see</span> <span m='233188'>that</span>
  <span m='233524'>there's</span> <span m='233860'>only</span> <span
  m='234437'>309</span> <span m='235014'>terms</span> <span m='235591'>in</span>
  <span m='236168'>our</span> <span m='236745'>sparse</span> <span
  m='237322'>matrix.</span> </p><p><span m='237900'>This</span> <span
  m='238629'>is</span> <span m='239358'>only</span> <span
  m='240087'>about</span> <span m='240816'>9%</span> <span m='241545'>of</span>
  <span m='242274'>the</span> <span m='243003'>previous</span> <span
  m='243732'>count</span> <span m='244461'>of</span> <span
  m='245190'>3,289.</span> </p><p><span m='245920'>Now</span> <span
  m='246314'>let's</span> <span m='246708'>convert</span> <span
  m='247102'>the</span> <span m='247496'>sparse</span> <span
  m='247890'>matrix</span> <span m='248284'>into</span> <span
  m='248678'>a</span> <span m='249072'>data</span> <span m='249466'>frame</span>
  <span m='249860'>that</span> <span m='250140'>we'll</span> <span
  m='250420'>be</span> <span m='250700'>able</span> <span m='250980'>to</span>
  <span m='251260'>use</span> <span m='251540'>for</span> <span
  m='251820'>our</span> <span m='252100'>predictive</span> <span
  m='252380'>models.</span> </p><p><span m='252660'>We'll</span> <span
  m='253546'>call</span> <span m='254433'>it</span> <span
  m='255320'>tweetsSparse</span> <span m='256206'>and</span> <span
  m='257093'>use</span> <span m='257980'>the</span> <span
  m='258866'>as.data.frame</span> <span m='259753'>function</span> <span
  m='260640'>called</span> <span m='261316'>on</span> <span
  m='261993'>the</span> <span m='262670'>as.matrix</span> <span
  m='263346'>function</span> <span m='264023'>called</span> <span
  m='264700'>on</span> <span m='265376'>our</span> <span
  m='266053'>matrixsparse.</span> </p><p><span m='266730'>This</span> <span
  m='267272'>convert</span> <span m='267814'>sparse</span> <span
  m='268356'>to</span> <span m='268898'>a</span> <span m='269441'>data</span>
  <span m='269983'>frame</span> <span m='270525'>called</span> <span
  m='271067'>tweetsSparse.</span> </p><p><span m='271610'>Since</span> <span
  m='271941'>R</span> <span m='272273'>struggles</span> <span
  m='272605'>with</span> <span m='272937'>variable</span> <span
  m='273269'>names</span> <span m='273600'>that</span> <span
  m='273932'>start</span> <span m='274264'>with</span> <span m='274596'>a</span>
  <span m='274928'>number,</span> <span m='275260'>and</span> <span
  m='275567'>we</span> <span m='275875'>probably</span> <span
  m='276182'>have</span> <span m='276490'>some</span> <span
  m='276797'>words</span> <span m='277105'>here</span> <span
  m='277412'>that</span> <span m='277720'>start</span> <span
  m='278027'>with</span> <span m='278335'>a</span> <span
  m='278642'>number,</span> <span m='278950'>let's</span> <span
  m='279241'>run</span> <span m='279532'>the</span> <span m='279823'>make</span>
  <span m='280114'>names</span> <span m='280405'>function</span> <span
  m='280696'>to</span> <span m='280987'>make</span> <span m='281278'>sure</span>
  <span m='281570'>all</span> <span m='281943'>of</span> <span
  m='282317'>our</span> <span m='282691'>words</span> <span
  m='283065'>are</span> <span m='283438'>appropriate</span> <span
  m='283812'>variable</span> <span m='284186'>names.</span> </p><p><span
  m='284560'>To</span> <span m='285012'>do</span> <span m='285465'>this</span>
  <span m='285918'>type</span> <span m='286370'>COLnames</span> <span
  m='286823'>and</span> <span m='287276'>then</span> <span m='287729'>in</span>
  <span m='288181'>parentheses</span> <span m='288634'>the</span> <span
  m='289087'>name</span> <span m='289540'>of</span> <span m='290400'>our</span>
  <span m='291260'>data</span> <span m='292120'>frame,</span> <span
  m='292980'>tweetsSparse</span> <span m='293840'>equals</span> <span
  m='294700'>make.names,</span> <span m='295560'>and</span> <span
  m='295875'>then</span> <span m='296191'>in</span> <span
  m='296507'>parentheses</span> <span m='296822'>again</span> <span
  m='297138'>colnames(tweetsSparse</span> <span m='297454'>=</span> <span
  m='297770'>make.names(colnames(tweetsSparse)).</span> </p><p><span
  m='302910'>This</span> <span m='303225'>will</span> <span
  m='303541'>just</span> <span m='303857'>convert</span> <span
  m='304172'>our</span> <span m='304488'>variable</span> <span
  m='304804'>names</span> <span m='305120'>to</span> <span
  m='305431'>make</span> <span m='305742'>sure</span> <span
  m='306054'>they're</span> <span m='306365'>all</span> <span
  m='306677'>appropriate</span> <span m='306988'>names</span> <span
  m='307300'>before</span> <span m='307723'>we</span> <span
  m='308146'>build</span> <span m='308570'>our</span> <span
  m='308993'>predictive</span> <span m='309416'>models.</span> </p><p><span
  m='309840'>You</span> <span m='310068'>should</span> <span
  m='310297'>do</span> <span m='310525'>this</span> <span m='310754'>each</span>
  <span m='310982'>time</span> <span m='311211'>you've</span> <span
  m='311440'>built</span> <span m='312030'>a</span> <span m='312620'>data</span>
  <span m='313210'>frame</span> <span m='313800'>using</span> <span
  m='314390'>text</span> <span m='314980'>analytics.</span> </p><p><span
  m='315570'>Now</span> <span m='315888'>let's</span> <span
  m='316206'>add</span> <span m='316524'>our</span> <span
  m='316842'>dependent</span> <span m='317160'>variable</span> <span
  m='317478'>to</span> <span m='317796'>this</span> <span m='318114'>data</span>
  <span m='318432'>set.</span> </p><p><span m='318750'>We'll</span> <span
  m='319058'>call</span> <span m='319366'>it</span> <span
  m='319674'>tweetsSparse$Negative</span> <span m='319982'>=</span> <span
  m='320290'>tweets$Negative.</span> </p><p><span m='331090'>Lastly,</span>
  <span m='331465'>let's</span> <span m='331841'>split</span> <span
  m='332216'>our</span> <span m='332592'>data</span> <span
  m='332967'>into</span> <span m='333343'>a</span> <span
  m='333718'>training</span> <span m='334094'>set</span> <span
  m='334470'>and</span> <span m='334788'>a</span> <span
  m='335106'>testing</span> <span m='335425'>set,</span> <span
  m='335743'>putting</span> <span m='336061'>70%</span> <span
  m='336380'>of</span> <span m='336698'>the</span> <span m='337016'>data</span>
  <span m='337335'>in</span> <span m='337653'>the</span> <span
  m='337971'>training</span> <span m='338290'>set.</span> </p><p><span
  m='339400'>First</span> <span m='339770'>we'll</span> <span
  m='340141'>have</span> <span m='340512'>to</span> <span m='340883'>load</span>
  <span m='341254'>the</span> <span m='341625'>library</span> <span
  m='341996'>catools</span> <span m='342367'>so</span> <span
  m='342738'>that</span> <span m='343109'>we</span> <span m='343480'>can</span>
  <span m='343876'>use</span> <span m='344273'>the</span> <span
  m='344670'>sample</span> <span m='345066'>split</span> <span
  m='345463'>function.</span> </p><p><span m='345860'>Then</span> <span
  m='346360'>let's</span> <span m='346861'>set</span> <span
  m='347362'>the</span> <span m='347863'>seed</span> <span m='348364'>to</span>
  <span m='348865'>123</span> <span m='349365'>and</span> <span
  m='349866'>create</span> <span m='350367'>our</span> <span
  m='350868'>split</span> <span m='351369'>using</span> <span
  m='351870'>sample.split</span> <span m='352431'>where</span> <span
  m='352993'>a</span> <span m='353555'>dependent</span> <span
  m='354116'>variable</span> <span m='354678'>is</span> <span
  m='355240'>tweetsSparse$Negative.</span> </p><p><span m='360660'>And</span>
  <span m='361178'>then</span> <span m='361697'>our</span> <span
  m='362216'>split</span> <span m='362735'>ratio</span> <span
  m='363253'>will</span> <span m='363772'>be</span> <span m='364291'>0.7.</span>
  </p><p><span m='364810'>We'll</span> <span m='365244'>put</span> <span
  m='365678'>70%</span> <span m='366112'>of</span> <span m='366546'>the</span>
  <span m='366980'>data</span> <span m='367414'>in</span> <span
  m='367848'>the</span> <span m='368282'>training</span> <span
  m='368716'>set.</span> </p><p><span m='369150'>Then</span> <span
  m='369495'>let's</span> <span m='369840'>just</span> <span
  m='370186'>use</span> <span m='370531'>subset</span> <span
  m='370877'>to</span> <span m='371222'>create</span> <span m='371568'>a</span>
  <span m='371913'>treating</span> <span m='372259'>set</span> <span
  m='372604'>called</span> <span m='372950'>trainSparse,</span> <span
  m='373438'>which</span> <span m='373926'>will</span> <span
  m='374414'>take</span> <span m='374902'>a</span> <span
  m='375390'>subset</span> <span m='375879'>of</span> <span
  m='376367'>the</span> <span m='376855'>whole</span> <span
  m='377343'>data</span> <span m='377831'>set</span> <span
  m='378320'>tweetsSparse,</span> <span m='378751'>but</span> <span
  m='379182'>always</span> <span m='379613'>take</span> <span
  m='380045'>the</span> <span m='380476'>observations</span> <span
  m='380907'>for</span> <span m='381338'>which</span> <span
  m='381770'>split==TRUE.</span> </p><p><span m='384030'>And</span> <span
  m='384494'>we'll</span> <span m='384958'>create</span> <span
  m='385422'>our</span> <span m='385887'>test</span> <span
  m='386351'>set,</span> <span m='386815'>testSparse,</span> <span
  m='387280'>again</span> <span m='387780'>using</span> <span
  m='388280'>subset</span> <span m='388780'>to</span> <span
  m='389280'>take</span> <span m='389780'>the</span> <span
  m='390280'>observations</span> <span m='390780'>of</span> <span
  m='391280'>tweetsSparse,</span> <span m='391780'>but</span> <span
  m='392055'>this</span> <span m='392330'>time</span> <span
  m='392605'>for</span> <span m='392880'>which</span> <span
  m='393155'>split==FALSE.</span> </p><p><span m='396150'>Our</span> <span
  m='396461'>data</span> <span m='396773'>is</span> <span m='397085'>now</span>
  <span m='397396'>ready,</span> <span m='397708'>and</span> <span
  m='398020'>we</span> <span m='398331'>can</span> <span m='398643'>build</span>
  <span m='398955'>our</span> <span m='399266'>predictive</span> <span
  m='399578'>model.</span> </p><p><span m='399890'>In</span> <span
  m='400268'>the</span> <span m='400646'>next</span> <span
  m='401024'>video,</span> <span m='401402'>we'll</span> <span
  m='401780'>use</span> <span m='402158'>CART</span> <span m='402536'>and</span>
  <span m='402914'>logistic</span> <span m='403292'>regression</span> <span
  m='403670'>to</span> <span m='404232'>predict</span> <span
  m='404795'>negative</span> <span m='405357'>sentiment.</span> </p>
embedded_media:
  - uid: 670d3ef731ef6393654a280b20f62640
    parent_uid: a9f646f5ca977eeaa267504c5cbef773
    id: Video-YouTube-Stream
    title: Video-YouTube-Stream
    type: Video
    media_location: JcAB1JeDs8Y
  - uid: 0e5538db804f76ccb0c7cad37fe88d78
    parent_uid: a9f646f5ca977eeaa267504c5cbef773
    id: 3Play-3Play YouTube id-Stream
    title: 3Play-3Play YouTube id
    type: 3Play
    media_location: JcAB1JeDs8Y
  - uid: d200ac26f6fc812947786864db2d248e
    parent_uid: a9f646f5ca977eeaa267504c5cbef773
    id: Thumbnail-YouTube-JPG
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    media_location: 'https://img.youtube.com/vi/JcAB1JeDs8Y/default.jpg'
  - uid: e3fd203942fbf532a1c70fb99eb51a41
    parent_uid: a9f646f5ca977eeaa267504c5cbef773
    id: JcAB1JeDs8Y.srt
    title: 3play caption file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-6-bag-of-words-in-r/video-6-bag-of-words-in-r-0/JcAB1JeDs8Y.srt
  - uid: 1e725c0b608ae5dc42b33b497a546a98
    parent_uid: a9f646f5ca977eeaa267504c5cbef773
    id: JcAB1JeDs8Y.pdf
    title: 3play pdf file
    type: null
    technical_location: >-
      https://ocw.mit.edu/courses/sloan-school-of-management/15-071-the-analytics-edge-spring-2017/text-analytics/turning-tweets-into-knowledge-an-introduction-to-text-analytics/video-6-bag-of-words-in-r/video-6-bag-of-words-in-r-0/JcAB1JeDs8Y.pdf
  - uid: 6628f504dedfb0ac6488914ba133f9e1
    parent_uid: a9f646f5ca977eeaa267504c5cbef773
    id: Caption-3Play YouTube id-SRT
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
  - uid: 37607fdd785e5f073ca75e711cf4f9e8
    parent_uid: a9f646f5ca977eeaa267504c5cbef773
    id: Transcript-3Play YouTube id-PDF
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
  - uid: a598e76bfb7a82caa4a96a45d629d62c
    parent_uid: a9f646f5ca977eeaa267504c5cbef773
    id: Video-InternetArchive-MP4
    title: Video-Internet Archive-MP4
    type: Video
    media_location: >-
      https://archive.org/download/MIT15.071S17/MIT15_071S17_Session_5.2.10_300k.mp4
type: courses
layout: video
---
