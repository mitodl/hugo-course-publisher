---
about_this_resource_text: >-
  <h2 class="subhead">Description</h2> <p>Professor Strang begins the lecture
  talking about ImageNet, a large visual database used in visual object
  recognition software research. ImageNet is an example of a convolutional
  neural network (CNN). The rest of the lecture focuses on convolution.</p> <h2
  class="subhead">Summary</h2><p>Convolution matrices have \(\leq\) \(n\)
  parameters (not \(n\)<sup>2</sup>).<br /> Fewer weights to compute in deep
  learning<br /> Component \(k\) from convolution \(c*d\): Add all
  \(c(j)d(k-j)\)<br /> Convolution Rule: \(F(c*d) = Fc\) times \(Fd\) (component
  by component)<br /> \(F\) = Fourier matrix with \(j\), \(k\) entry \(= \exp (2
  \pi i j k /n)\)</p> <p>Related section in textbook: IV.2</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: hwDRfkPSXng
    parent_uid: 0197a0ae0870f75f49cbfbe02e9e65a9
    title: Video-YouTube-Stream
    type: Video
    uid: 81c58dcb18921c57b647b8c65e87fe1b
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/hwDRfkPSXng/default.jpg'
    parent_uid: 0197a0ae0870f75f49cbfbe02e9e65a9
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 3628661a276383e00be8b7bc501e3884
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: hwDRfkPSXng
    parent_uid: 0197a0ae0870f75f49cbfbe02e9e65a9
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: e4136f171e1d05aba087f379b7e6df55
  - id: hwDRfkPSXng.srt
    parent_uid: 0197a0ae0870f75f49cbfbe02e9e65a9
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-32-imagenet-is-a-cnn-the-convolution-rule/hwDRfkPSXng.srt
    title: 3play caption file
    type: null
    uid: d08125c3f423e2d6f79db5941c46775f
  - id: hwDRfkPSXng.pdf
    parent_uid: 0197a0ae0870f75f49cbfbe02e9e65a9
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-32-imagenet-is-a-cnn-the-convolution-rule/hwDRfkPSXng.pdf
    title: 3play pdf file
    type: null
    uid: f05ad51e5ee027dee95a998604e0dfdf
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 0197a0ae0870f75f49cbfbe02e9e65a9
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 043ab80d1f2fe431b15c50e34b96dac4
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 0197a0ae0870f75f49cbfbe02e9e65a9
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 0bec646bb38223ec000cfdf3d6f3ffc4
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture32_300k.mp4'
    parent_uid: 0197a0ae0870f75f49cbfbe02e9e65a9
    title: Video-Internet Archive-MP4
    type: Video
    uid: 1132c0db43801730507ffe09ca1ae74f
inline_embed_id: 46813713lecture32imagenetisacnntheconvolutionrule73141775
order_index: 296
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-32-imagenet-is-a-cnn-the-convolution-rule
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-32-imagenet-is-a-cnn-the-convolution-rule
title: >-
  Lecture 32: ImageNet is a Convolutional Neural Network (CNN), The Convolution
  Rule
transcript: >-
  <p><span m="1550">The</span> <span m="1640">following</span> <span
  m="2090">content</span> <span m="2600">is</span> <span
  m="2720">provided</span> <span m="3170">under</span> <span m="3380">a</span>
  <span m="3440">Creative</span> <span m="3920">Commons</span> <span
  m="4310">license.</span> <span m="5310">Your</span> <span
  m="5390">support</span> <span m="5900">will</span> <span m="6050">help</span>
  <span m="6320">MIT</span> <span m="6905">OpenCourseWare</span> <span
  m="7520">continue</span> <span m="8029">to</span> <span m="8180">offer</span>
  <span m="8510">high</span> <span m="8720">quality</span> <span
  m="9200">educational</span> <span m="9860">resources</span> <span
  m="10430">for</span> <span m="10550">free.</span> <span m="11610">To</span>
  <span m="11630">make</span> <span m="11840">a</span> <span
  m="11900">donation</span> <span m="12680">or</span> <span m="12800">to</span>
  <span m="12950">view</span> <span m="13160">additional</span> <span
  m="13550">materials</span> <span m="14180">from</span> <span
  m="14360">hundreds</span> <span m="14690">of</span> <span m="14810">MIT</span>
  <span m="15170">courses,</span> <span m="16470">visit</span> <span
  m="16670">MIT</span> <span m="17315">OpenCourseWare</span> <span
  m="18140">at</span> <span m="18290">ocw.mit.edu.</span></p><p><span
  m="22500">GILBERT STRANG:</span> <span m="22605">I'm</span> <span
  m="22710">determined</span> <span m="23250">to</span> <span
  m="23340">tell</span> <span m="24090">you</span> <span
  m="24270">something</span> <span m="24690">about the</span> <span
  m="25170">convolution</span> <span m="25950">rule.</span> <span
  m="27000">I</span> <span m="27690">just</span> <span m="28710">get</span>
  <span m="28950">close</span> <span m="29340">to</span> <span
  m="29520">it,</span> <span m="29740">but</span> <span m="29850">haven't</span>
  <span m="30210">quite</span> <span m="30450">got</span> <span
  m="30720">there.</span> <span m="31290">And</span> <span
  m="31470">actually,</span> <span m="32689">I'd</span> <span
  m="33090">like</span> <span m="33270">to</span> <span m="33390">say</span>
  <span m="33630">something</span> <span m="33990">also</span> <span
  m="34380">about</span> <span m="34650">why</span> <span
  m="35550">convolution</span> <span m="36330">is</span> <span
  m="36480">so</span> <span m="36750">important.</span> <span m="39000">I</span>
  <span m="39120">mentioned</span> <span m="39570">here</span> <span
  m="39840">a</span> <span m="39900">paper</span> <span m="45360">about</span>
  <span m="45720">images</span> <span m="46260">in</span> <span
  m="46410">deep</span> <span m="46650">learning</span> <span
  m="48430">by--</span> <span m="49950">it</span> <span m="50100">has</span>
  <span m="50280">three</span> <span m="50670">authors,</span> <span
  m="51210">and</span> <span m="51330">these</span> <span m="51600">are</span>
  <span m="51720">two</span> <span m="52020">of</span> <span
  m="52080">them.</span> <span m="52280">Maybe</span> <span m="52630">you</span>
  <span m="52680">recognize</span> <span m="53370">Hinton's</span> <span
  m="53940">name.</span> <span m="54790">He's</span> <span
  m="55680">originally</span> <span m="56220">English.</span> <span
  m="56790">He</span> <span m="56940">was</span> <span m="57900">in</span> <span
  m="58500">San</span> <span m="58830">Diego</span> <span m="59490">for</span>
  <span m="60570">quite</span> <span m="60870">a</span> <span
  m="60900">few</span> <span m="61140">years,</span> <span m="61590">and</span>
  <span m="61680">now</span> <span m="61890">he's</span> <span
  m="62070">in</span> <span m="62400">Canada.</span> <span m="63530">So</span>
  <span m="63750">Toronto</span> <span m="64260">and</span> <span
  m="64379">Montreal</span> <span m="65069">are</span> <span
  m="65160">big</span> <span m="65489">centers</span> <span m="66030">now</span>
  <span m="66300">for</span> <span m="66510">deep</span> <span
  m="66810">learning.</span> <span m="68400">And</span> <span
  m="68570">he's</span> <span m="69780">really</span> <span m="70680">one</span>
  <span m="70920">of</span> <span m="71040">the</span> <span
  m="72690">leaders,</span> <span m="73290">and</span> <span m="73860">so</span>
  <span m="74130">is</span> <span m="74310">Sutskever.</span></p><p><span
  m="75710">So</span> <span m="76820">maybe</span> <span m="77010">you</span>
  <span m="77100">know</span> <span m="77340">that</span> <span
  m="77950">the</span> <span m="78210">sort</span> <span m="78450">of</span>
  <span m="78510">progress</span> <span m="79140">of</span> <span
  m="79260">deep</span> <span m="79560">learning</span> <span
  m="81810">can</span> <span m="82080">often</span> <span m="82410">be</span>
  <span m="82560">measured</span> <span m="83100">in</span> <span
  m="83250">these</span> <span m="83580">competitions</span> <span
  m="84600">that</span> <span m="84750">are</span> <span m="84870">held</span>
  <span m="85920">about</span> <span m="86220">every</span> <span
  m="86520">year</span> <span m="87660">for</span> <span m="88500">how</span>
  <span m="89460">well</span> <span m="90930">does--</span> <span
  m="92250">people</span> <span m="93300">design</span> <span
  m="93930">and</span> <span m="94680">execute</span> <span m="96180">a</span>
  <span m="99270">whole</span> <span m="100650">neural</span> <span
  m="101010">net.</span> <span m="102390">And</span> <span
  m="104010">this</span> <span m="104370">was</span> <span m="104640">a</span>
  <span m="104730">competition</span> <span m="105570">about</span> <span
  m="105900">images.</span> <span m="107250">So</span> <span
  m="107550">that</span> <span m="108120">is</span> <span
  m="108360">really</span> <span m="108990">demanding,</span> <span
  m="109800">because,</span> <span m="110910">as</span> <span
  m="111060">I</span> <span m="111150">said</span> <span m="111420">last</span>
  <span m="111690">time,</span> <span m="112650">an</span> <span
  m="112800">image</span> <span m="113220">has</span> <span m="113400">so</span>
  <span m="113730">many</span> <span m="114090">samples,</span> <span
  m="114870">so</span> <span m="115110">many</span> <span
  m="115800">pixels</span> <span m="116760">that</span> <span
  m="117860">the</span> <span m="117990">computational</span> <span
  m="118770">problem</span> <span m="119220">is</span> <span
  m="119370">enormous.</span> <span m="120600">And</span> <span
  m="120720">that's</span> <span m="121050">when</span> <span
  m="121290">you</span> <span m="121590">would</span> <span m="121830">go</span>
  <span m="122190">to</span> <span m="123240">convolution</span> <span
  m="124170">neural</span> <span m="124650">nets,</span> <span
  m="124950">CNN,</span> <span m="125700">because</span> <span
  m="126180">a</span> <span m="126270">convolutional</span> <span
  m="127090">net</span> <span m="127710">takes</span> <span
  m="128160">fewer</span> <span m="128820">weights,</span> <span
  m="129810">because</span> <span m="130210">of</span> <span
  m="130250">the</span> <span m="130320">same</span> <span
  m="130680">weight</span> <span m="131039">as</span> <span
  m="131190">appearing</span> <span m="131700">along</span> <span
  m="132300">diagonals.</span> <span m="133440">It</span> <span
  m="133560">doesn't</span> <span m="133860">need</span> <span
  m="134130">a</span> <span m="134610">full</span> <span
  m="134880">matrix</span> <span m="135540">of</span> <span
  m="135660">weights,</span> <span m="136140">just</span> <span
  m="136440">one</span> <span m="137580">top</span> <span m="137880">row</span>
  <span m="138240">of</span> <span m="138420">weights.</span></p><p><span
  m="139480">Anyway,</span> <span m="141540">so</span> <span
  m="141690">this</span> <span m="141900">is</span> <span m="142020">one</span>
  <span m="142230">of</span> <span m="142320">the</span> <span
  m="142440">historical</span> <span m="143100">papers</span> <span
  m="144390">in</span> <span m="144660">the</span> <span
  m="144720">history</span> <span m="145140">of</span> <span
  m="145260">deep</span> <span m="145530">learning.</span> <span
  m="146890">I'll</span> <span m="147150">just</span> <span
  m="147390">read</span> <span m="147630">a</span> <span
  m="147720">couple</span> <span m="148020">of</span> <span
  m="148140">sentences.</span> <span m="150220">We</span> <span
  m="150430">trained--</span> <span m="150970">so</span> <span
  m="151180">this</span> <span m="151330">is</span> <span m="151450">the</span>
  <span m="151600">abstract.</span> <span m="153100">We</span> <span
  m="153280">trained</span> <span m="153595">a</span> <span
  m="155050">large</span> <span m="155590">deep</span> <span
  m="155920">convolutional</span> <span m="156700">neural</span> <span
  m="157210">network.</span> <span m="158300">I'll</span> <span
  m="158910">just</span> <span m="159790">say</span> <span
  m="160540">that</span> <span m="161950">it</span> <span m="162160">ran</span>
  <span m="162520">for</span> <span m="162700">five</span> <span
  m="163120">days</span> <span m="163600">on</span> <span m="163780">two</span>
  <span m="164320">GPUs.</span> <span m="165760">So</span> <span
  m="166000">it</span> <span m="166150">was</span> <span m="166870">an</span>
  <span m="167080">enormous</span> <span m="167590">problem,</span> <span
  m="168040">as</span> <span m="168280">we'll</span> <span
  m="168550">see.</span> <span m="170210">So</span> <span m="170290">we</span>
  <span m="170410">trained</span> <span m="170800">a</span> <span
  m="170860">large</span> <span m="171280">deep</span> <span
  m="171880">network,</span> <span m="172630">CNN,</span> <span
  m="173920">to</span> <span m="174070">classify</span> <span
  m="174850">1.2</span> <span m="175750">million</span> <span
  m="176620">high</span> <span m="176890">res</span> <span
  m="177280">images</span> <span m="177910">in</span> <span
  m="178300">ImageNet.</span> <span m="179200">So</span> <span
  m="179440">ImageNet</span> <span m="180100">is</span> <span
  m="180310">a</span> <span m="181000">source</span> <span m="181540">of</span>
  <span m="182320">millions</span> <span m="183100">of</span> <span
  m="183310">images.</span></p><p><span m="184540">And</span> <span
  m="185920">on</span> <span m="186310">the</span> <span m="186460">test</span>
  <span m="186790">data,</span> <span m="187390">they--</span> <span
  m="188350">well,</span> <span m="189790">the</span> <span
  m="189940">last</span> <span m="190240">sentence</span> <span
  m="190860">is</span> <span m="191030">maybe</span> <span m="191470">a</span>
  <span m="191560">key.</span> <span m="192520">We</span> <span
  m="192760">entered</span> <span m="193120">a</span> <span
  m="193180">variant</span> <span m="193750">of</span> <span
  m="193840">this</span> <span m="194110">model</span> <span
  m="194620">in</span> <span m="194860">the</span> <span
  m="195130">competition,</span> <span m="196360">2012</span> <span
  m="197350">competition,</span> <span m="198760">and</span> <span
  m="199000">we</span> <span m="199180">achieved</span> <span
  m="199750">a</span> <span m="199810">winning</span> <span
  m="201010">top</span> <span m="201310">five</span> <span
  m="202180">test</span> <span m="203200">error</span> <span
  m="203530">rate</span> <span m="203950">of</span> <span m="204190">15%</span>
  <span m="206020">compared</span> <span m="206680">to</span> <span
  m="206920">26%</span> <span m="208290">for</span> <span m="209080">the</span>
  <span m="209230">second</span> <span m="209590">place</span> <span
  m="209920">team.</span> <span m="210880">So</span> <span m="211090">15%</span>
  <span m="212560">error.</span> <span m="212860">They</span> <span
  m="213100">got</span> <span m="213460">26%</span> <span m="214540">was</span>
  <span m="214750">the</span> <span m="214840">best</span> <span
  m="215200">that</span> <span m="215400">the</span> <span
  m="215530">rest</span> <span m="215770">of</span> <span m="215830">the</span>
  <span m="215950">world</span> <span m="216250">did.</span></p><p><span
  m="217130">And</span> <span m="219120">so</span> <span
  m="220410">that--</span> <span m="221640">and</span> <span
  m="222120">when</span> <span m="222330">he</span> <span
  m="222480">shows</span> <span m="223050">the</span> <span
  m="223230">network,</span> <span m="223890">you</span> <span
  m="223990">realize</span> <span m="224680">what's</span> <span
  m="225690">gone</span> <span m="225960">into</span> <span
  m="226350">it.</span> <span m="227250">It</span> <span m="227310">has</span>
  <span m="230110">convolution</span> <span m="230860">layers,</span> <span
  m="232390">and</span> <span m="232810">it</span> <span m="232930">has</span>
  <span m="233380">some</span> <span m="233680">normal</span> <span
  m="234310">layers,</span> <span m="235000">and</span> <span
  m="235180">it</span> <span m="235270">has</span> <span m="237550">max</span>
  <span m="238090">pooling</span> <span m="238660">layers</span> <span
  m="239200">to</span> <span m="239320">cut</span> <span m="239560">the</span>
  <span m="239710">dimension</span> <span m="240250">down</span> <span
  m="240580">a</span> <span m="240640">little</span> <span
  m="240910">bit.</span> <span m="244720">And</span> <span
  m="246010">half</span> <span m="246460">the</span> <span
  m="247030">samples</span> <span m="247630">go</span> <span
  m="247870">on</span> <span m="248020">one</span> <span m="248410">GPU</span>
  <span m="248980">and</span> <span m="249100">half</span> <span
  m="249460">another.</span> <span m="249970">And</span> <span
  m="250120">at</span> <span m="250270">certain</span> <span
  m="250600">points,</span> <span m="251080">layers</span> <span
  m="252040">interconnect</span> <span m="252820">between</span> <span
  m="253270">the</span> <span m="253390">two</span> <span
  m="253660">GPUs.</span></p><p><span m="255220">And</span> <span
  m="256480">so</span> <span m="257140">to</span> <span m="257320">reduce</span>
  <span m="257839">overfitting--</span> <span m="258880">you</span> <span
  m="259600">remember</span> <span m="260050">that.</span> <span m="260370">It's
  a</span> <span m="260440">key</span> <span m="260680">problem</span> <span
  m="261160">is</span> <span m="261310">to</span> <span m="261430">reduce</span>
  <span m="261880">overfitting</span> <span m="263170">in</span> <span
  m="264350">the</span> <span m="264400">fully</span> <span
  m="264790">connected</span> <span m="265330">layers.</span> <span
  m="265750">Those</span> <span m="265960">are</span> <span
  m="266170">the</span> <span m="266560">ordinary</span> <span
  m="267190">layers</span> <span m="267640">with</span> <span
  m="268510">full</span> <span m="269230">weight</span> <span
  m="269620">matrices.</span> <span m="271480">We</span> <span
  m="271660">employed</span> <span m="272080">a</span> <span
  m="272200">recently</span> <span m="272770">developed</span> <span
  m="273880">regularization</span> <span m="274930">called</span> <span
  m="275300">dropout.</span> <span m="276390">So</span> <span
  m="276670">dropout</span> <span m="277240">is</span> <span m="277390">a</span>
  <span m="277480">tool</span> <span m="277960">which,</span> <span
  m="278350">if</span> <span m="278560">you're</span> <span m="278770">in</span>
  <span m="278920">this</span> <span m="279160">world,</span> <span
  m="280330">you--</span> <span m="280615">I</span> <span
  m="280900">think</span> <span m="281220">Hinton</span> <span
  m="281620">proposed</span> <span m="282250">it,</span> <span
  m="283210">again,</span> <span m="283900">by</span> <span
  m="284620">seeing</span> <span m="285130">that</span> <span
  m="285310">it</span> <span m="285400">worked.</span> <span
  m="286390">It's</span> <span m="286690">just</span> <span m="288670">a</span>
  <span m="288730">careful</span> <span m="289150">dropout</span> <span
  m="290340">of</span> <span m="290580">some</span> <span m="290910">of</span>
  <span m="290970">the</span> <span m="291130">data.</span> <span
  m="291760">It</span> <span m="291880">reduces</span> <span
  m="292450">the</span> <span m="292540">amount</span> <span
  m="292810">of</span> <span m="292900">data,</span> <span m="293350">and</span>
  <span m="293740">it</span> <span m="294670">doesn't</span> <span
  m="295780">harm</span> <span m="296300">the</span> <span
  m="297970">problem.</span></p><p><span m="300340">So</span> <span
  m="300550">the</span> <span m="300700">neural</span> <span
  m="301000">network</span> <span m="301450">has</span> <span
  m="301600">60</span> <span m="302050">million</span> <span
  m="302470">parameters.</span> <span m="303970">60</span> <span
  m="304540">million.</span> <span m="305830">With</span> <span
  m="306070">650,000</span> <span m="307570">neurons,</span> <span
  m="308690">five</span> <span m="309180">convolutional</span> <span
  m="309970">layers,</span> <span m="311050">and</span> <span
  m="311260">three</span> <span m="312250">fully</span> <span
  m="312640">connected</span> <span m="313210">layers.</span> <span
  m="314560">I</span> <span m="314980">just</span> <span
  m="315250">mention</span> <span m="315730">this.</span> <span
  m="318490">If</span> <span m="318640">you</span> <span m="318760">just</span>
  <span m="319030">Google</span> <span m="319420">these</span> <span
  m="319690">two</span> <span m="319930">names</span> <span m="321480">on</span>
  <span m="322150">the</span> <span m="322240">web,</span> <span
  m="323560">this</span> <span m="323770">paper</span> <span
  m="324130">would</span> <span m="324310">come</span> <span
  m="324580">up.</span> <span m="327816">So</span> <span m="328780">we're</span>
  <span m="328900">talking</span> <span m="329170">about</span> <span
  m="329350">the</span> <span m="329470">real</span> <span
  m="329740">thing</span> <span m="330040">here.</span> <span
  m="331440">Convolution</span> <span m="332170">is</span> <span
  m="332230">something</span> <span m="332890">everybody</span> <span
  m="333400">wants</span> <span m="333730">to</span> <span
  m="333910">understand.</span></p><p><span m="334840">And</span> <span
  m="335020">I'd</span> <span m="335440">like</span> <span
  m="335650">to--</span> <span m="336190">since</span> <span
  m="336490">I've</span> <span m="338710">started</span> <span
  m="340060">several</span> <span m="340450">days</span> <span
  m="340780">ago,</span> <span m="341170">and</span> <span m="341800">I'd</span>
  <span m="341890">like</span> <span m="342070">to</span> <span
  m="342640">remember</span> <span m="343450">what</span> <span
  m="343720">convolution</span> <span m="344530">means.</span> <span
  m="344950">Let</span> <span m="345100">me--</span> <span m="347590">so</span>
  <span m="348130">if</span> <span m="348310">I</span> <span
  m="348400">convolve</span> <span m="350560">two</span> <span
  m="350800">vectors</span> <span m="352230">and</span> <span
  m="352390">I</span> <span m="352510">look</span> <span m="352780">for</span>
  <span m="353030">the</span> <span m="353200">k-th</span> <span
  m="353680">component</span> <span m="354460">of</span> <span
  m="354640">the</span> <span m="354790">answer,</span> <span
  m="357040">the</span> <span m="357520">formula</span> <span
  m="358060">is</span> <span m="358570">I</span> <span m="358750">add</span>
  <span m="359020">up</span> <span m="359470">all</span> <span
  m="360010">the</span> <span m="361810">c's</span> <span
  m="363070">times</span> <span m="363550">d's</span> <span
  m="364850">where</span> <span m="364930">are</span> <span
  m="365140">index</span> <span m="365860">i</span> <span m="366130">plus</span>
  <span m="366580">j</span> <span m="367120">adds</span> <span
  m="367510">to</span> <span m="367690">k.</span> <span m="370330">Why</span>
  <span m="370600">do</span> <span m="370690">you</span> <span
  m="370780">do</span> <span m="370990">such</span> <span m="371290">a</span>
  <span m="371350">thing?</span> <span m="371710">Because</span> <span
  m="372460">c</span> <span m="372940">might</span> <span m="373240">be</span>
  <span m="373420">represented</span> <span m="374170">by</span> <span
  m="374530">a</span> <span m="376480">polynomial,</span> <span
  m="377620">say</span> <span m="378010">x</span> <span m="379500">plus</span>
  <span m="379840">c</span> <span m="380410">Nx</span> <span
  m="381040">to</span> <span m="381160">the</span> <span m="381310">N.</span>
  <span m="382870">And</span> <span m="383320">d</span> <span
  m="383680">might</span> <span m="383950">be</span> <span
  m="384130">represented</span> <span m="384850">by</span> <span
  m="385060">another</span> <span m="385570">1d</span> <span
  m="386260">1x</span> <span m="387130">plus</span> <span m="388450">dm</span>
  <span m="389380">x</span> <span m="389680">to the</span> <span
  m="389980">m,</span> <span m="390280">let's</span> <span
  m="390490">say.</span></p><p><span m="394980">And</span> <span
  m="395970">convolution</span> <span m="396810">arises</span> <span
  m="397530">when</span> <span m="397770">I</span> <span
  m="397860">multiply</span> <span m="398460">those</span> <span
  m="398760">polynomials.</span> <span m="400200">Because</span> <span
  m="400650">for</span> <span m="400860">a</span> <span
  m="400920">typical--</span> <span m="402690">and</span> <span
  m="402870">then</span> <span m="403080">collect</span> <span
  m="403440">terms.</span> <span m="404490">Because</span> <span
  m="405000">a</span> <span m="405120">typical</span> <span
  m="406680">power</span> <span m="407220">of</span> <span m="407370">x,</span>
  <span m="407640">say</span> <span m="407970">x</span> <span
  m="408240">to</span> <span m="408390">the</span> <span m="408510">k,</span>
  <span m="409860">the</span> <span m="410160">coefficients</span> <span
  m="411190">are--</span> <span m="415410">well,</span> <span
  m="415920">how</span> <span m="416100">do</span> <span m="416190">we</span>
  <span m="416370">get</span> <span m="416580">x</span> <span
  m="416790">to</span> <span m="416910">the</span> <span m="417030">k</span>
  <span m="417390">in</span> <span m="417810">multiplying</span> <span
  m="418350">these?</span> <span m="418970">I</span> <span
  m="419100">multiply</span> <span m="419610">c0</span> <span
  m="420360">times</span> <span m="420840">a</span> <span m="420930">dk.</span>
  <span m="422460">Somewhere</span> <span m="422910">in</span> <span
  m="423030">here</span> <span m="423240">would</span> <span
  m="423450">be</span> <span m="423630">a</span> <span m="423720">dk</span>
  <span m="424290">x</span> <span m="424620">to</span> <span
  m="424710">the</span> <span m="424830">k.</span> <span m="425670">So</span>
  <span m="425850">a</span> <span m="425910">c0</span> <span
  m="426510">times</span> <span m="426920">a</span> <span m="426990">dk</span>
  <span m="430380">would</span> <span m="430590">give</span> <span
  m="430800">me</span> <span m="431070">an</span> <span m="431340">x</span>
  <span m="431580">to</span> <span m="431700">the</span> <span
  m="431820">k</span> <span m="432150">term.</span> <span m="433050">And</span>
  <span m="433200">a</span> <span m="433260">c1</span> <span
  m="434190">times--</span> <span m="435180">everybody</span> <span
  m="435600">sees</span> <span m="435930">this</span> <span
  m="436140">coming</span> <span m="436500">now?</span> <span
  m="437570">c1</span> <span m="438510">has</span> <span m="438810">an</span>
  <span m="438930">x</span> <span m="439320">in</span> <span
  m="439470">it</span> <span m="439590">already.</span> <span
  m="440520">So</span> <span m="440760">over</span> <span
  m="441000">there,</span> <span m="441330">we</span> <span
  m="441540">would</span> <span m="441720">look</span> <span
  m="441990">at</span> <span m="442080">dk</span> <span m="442920">minus</span>
  <span m="443205">1</span> <span m="444170">with</span> <span
  m="444510">one</span> <span m="444780">less</span> <span m="445220">x.</span>
  <span m="445530">So</span> <span m="445890">it</span> <span
  m="445980">would</span> <span m="446100">be</span> <span m="446610">c1</span>
  <span m="447540">dk</span> <span m="448170">minus</span> <span
  m="448620">1.</span></p><p><span m="449440">This</span> <span
  m="449520">is</span> <span m="449670">just</span> <span m="449970">what</span>
  <span m="450150">you</span> <span m="450270">do</span> <span
  m="450480">when</span> <span m="450630">you</span> <span
  m="450720">multiply</span> <span m="450975">a</span> <span
  m="451230">polynomial.</span> <span m="453780">And</span> <span
  m="453990">the</span> <span m="454080">point</span> <span m="454440">is</span>
  <span m="455160">that</span> <span m="455970">the</span> <span
  m="456090">way</span> <span m="456330">we</span> <span
  m="456480">recognize</span> <span m="457140">those</span> <span
  m="457410">terms</span> <span m="457980">is</span> <span
  m="458190">that</span> <span m="458370">the</span> <span
  m="459390">exponents</span> <span m="461010">0</span> <span
  m="461490">and</span> <span m="461670">k,</span> <span m="462720">the</span>
  <span m="462840">exponents</span> <span m="463440">1</span> <span
  m="463890">and</span> <span m="464040">k</span> <span m="464340">minus</span>
  <span m="464760">1,</span> <span m="465900">always</span> <span
  m="466290">add</span> <span m="466500">to</span> <span m="466650">k.</span>
  <span m="467550">So</span> <span m="467700">that's</span> <span
  m="468000">where</span> <span m="468210">this</span> <span
  m="468450">formula</span> <span m="469050">comes</span> <span
  m="469470">from.</span> <span m="469950">We</span> <span
  m="470070">take</span> <span m="470310">a</span> <span m="470370">c</span>
  <span m="470910">times</span> <span m="471360">a</span> <span
  m="471420">d</span> <span m="472410">hiding</span> <span
  m="472980">behind</span> <span m="473295">our</span> <span
  m="473610">cx</span> <span m="474960">to</span> <span m="475080">the</span>
  <span m="475260">i</span> <span m="476130">and</span> <span
  m="476340">a</span> <span m="476400">dj</span> <span m="477240">x</span> <span
  m="477510">to</span> <span m="477660">the</span> <span m="477810">j</span>
  <span m="478770">and</span> <span m="478950">when</span> <span
  m="479700">i</span> <span m="479880">plus</span> <span m="480270">j</span>
  <span m="481080">is</span> <span m="481320">k,</span> <span
  m="482250">this</span> <span m="482580">is</span> <span m="483000">x</span>
  <span m="483270">to</span> <span m="483420">the</span> <span
  m="483540">k.</span> <span m="484830">And</span> <span
  m="485130">that's</span> <span m="485610">the</span> <span
  m="485940">term</span> <span m="486300">we're</span> <span
  m="486510">capturing.</span> <span m="487560">So</span> <span
  m="487800">this</span> <span m="488070">is</span> <span m="488290">the</span>
  <span m="489600">coefficient</span> <span m="490260">of</span> <span
  m="490380">that</span> <span m="490590">term.</span></p><p><span
  m="492610">And</span> <span m="493170">let</span> <span m="493380">me</span>
  <span m="494010">write</span> <span m="494340">it</span> <span
  m="494980">as</span> <span m="495240">a</span> <span
  m="495270">slightly</span> <span m="495750">different</span> <span
  m="496050">way,</span> <span m="497590">where</span> <span
  m="497760">you</span> <span m="498690">actually</span> <span
  m="499170">see</span> <span m="499980">even</span> <span
  m="500400">more</span> <span m="500670">clearly</span> <span
  m="501210">convolution</span> <span m="501960">operating.</span> <span
  m="503130">So</span> <span m="503730">j</span> <span m="504360">is</span>
  <span m="505350">k</span> <span m="505650">minus</span> <span
  m="506100">i,</span> <span m="506370">right?</span> <span m="506730">So</span>
  <span m="506970">it's</span> <span m="507150">the</span> <span
  m="507240">sum</span> <span m="507780">of</span> <span m="508950">cidj,</span>
  <span m="512400">but</span> <span m="512580">the</span> <span
  m="512730">j</span> <span m="513179">has</span> <span m="513450">to</span>
  <span m="513570">be</span> <span m="513750">k</span> <span
  m="514200">minus</span> <span m="514760">i.</span> <span m="515700">So</span>
  <span m="517980">this</span> <span m="518220">is</span> <span
  m="518370">the</span> <span m="518490">way</span> <span m="518700">to</span>
  <span m="518789">remember</span> <span m="520710">the</span> <span
  m="521370">formula</span> <span m="522059">for</span> <span
  m="522360">the</span> <span m="525470">coefficients</span> <span
  m="526460">in</span> <span m="527370">c</span> <span m="527720">star</span>
  <span m="528110">d</span> <span m="528410">in</span> <span
  m="528530">the</span> <span m="528620">convolution.</span> <span
  m="529900">You</span> <span m="530060">look</span> <span m="530360">at</span>
  <span m="530580">c's</span> <span m="531170">times</span> <span
  m="531710">d's.</span> <span m="532250">It's</span> <span m="532760">a</span>
  <span m="532850">form</span> <span m="533210">of</span> <span
  m="533330">multiplication.</span> <span m="534710">It</span> <span
  m="534860">comes</span> <span m="536090">from</span> <span
  m="536780">ordinary</span> <span m="537290">multiplication</span> <span
  m="538010">of</span> <span m="538130">polynomials.</span> <span
  m="539660">And</span> <span m="540080">when</span> <span m="540320">you</span>
  <span m="540470">collect</span> <span m="540920">terms,</span> <span
  m="541490">you're</span> <span m="541670">collecting</span> <span
  m="542650">c,</span> <span m="543290">the</span> <span m="543590">i-th</span>
  <span m="544040">c</span> <span m="544610">and</span> <span
  m="544730">the</span> <span m="544850">k</span> <span m="545150">minus</span>
  <span m="545930">id,</span> <span m="547220">and</span> <span
  m="547580">you're</span> <span m="547790">taking</span> <span
  m="548210">all</span> <span m="548390">possible</span> <span
  m="548930">i's.</span> <span m="549920">So</span> <span m="550130">it's</span>
  <span m="550310">a</span> <span m="550400">sum</span> <span
  m="550690">over</span> <span m="550910">all</span> <span
  m="551240">possible</span> <span m="551810">i's</span> <span
  m="552260">there</span> <span m="553430">to</span> <span
  m="553580">give</span> <span m="553880">you</span> <span m="554220">the</span>
  <span m="554360">k-th</span> <span m="554930">answer.</span></p><p><span
  m="556880">Well,</span> <span m="557090">just</span> <span
  m="557390">to</span> <span m="557570">see</span> <span m="557930">if</span>
  <span m="558080">you</span> <span m="558180">got</span> <span
  m="558380">the</span> <span m="558530">idea,</span> <span
  m="559550">what</span> <span m="559730">would</span> <span
  m="559880">be</span> <span m="560030">the</span> <span
  m="560180">convolution</span> <span m="560930">of</span> <span
  m="561050">two</span> <span m="561350">functions?</span> <span
  m="562820">Suppose</span> <span m="563210">I</span> <span
  m="563330">have</span> <span m="563510">a</span> <span
  m="563600">function</span> <span m="564800">f</span> <span
  m="565070">of</span> <span m="565220">x.</span> <span m="566880">And</span>
  <span m="567290">I</span> <span m="567410">want</span> <span
  m="567620">I</span> <span m="567680">convolve</span> <span
  m="568360">that</span> <span m="568760">with</span> <span m="569030">a</span>
  <span m="569090">function</span> <span m="569630">g</span> <span
  m="569900">of</span> <span m="570020">x.</span> <span m="573590">OK.</span>
  <span m="575350">And</span> <span m="575540">notice</span> <span
  m="575930">that</span> <span m="576110">I</span> <span m="576260">have</span>
  <span m="576440">not</span> <span m="577340">circled</span> <span
  m="577880">this</span> <span m="578540">symbol.</span> <span
  m="579680">So</span> <span m="579830">I'm</span> <span m="579950">not</span>
  <span m="580160">doing</span> <span m="580550">periodic</span> <span
  m="581300">convolution.</span> <span m="582110">I'm</span> <span
  m="582260">just</span> <span m="582470">doing</span> <span
  m="582710">straightforward</span> <span m="583490">convolution.</span> <span
  m="584610">So</span> <span m="584690">what</span> <span m="584930">are</span>
  <span m="584990">we</span> <span m="585110">going</span> <span
  m="585270">to</span> <span m="585350">have</span> <span m="585620">in</span>
  <span m="585740">the</span> <span m="585860">case</span> <span
  m="586250">of</span> <span m="586700">two</span> <span
  m="586940">functions?</span> <span m="588740">What</span> <span
  m="588980">would</span> <span m="589130">that</span> <span
  m="589370">mean,</span> <span m="589730">a</span> <span
  m="589760">convolution</span> <span m="590450">of</span> <span
  m="590540">functions?</span></p><p><span m="591650">I'm</span> <span
  m="592760">in</span> <span m="592880">parallel</span> <span
  m="593450">here</span> <span m="593720">with</span> <span m="593960">a</span>
  <span m="594020">convolution</span> <span m="594800">of</span> <span
  m="594920">two</span> <span m="595160">vectors.</span> <span
  m="596430">So</span> <span m="597410">think</span> <span m="597740">of</span>
  <span m="597860">these</span> <span m="598250">now</span> <span
  m="598640">have</span> <span m="598850">become</span> <span
  m="599210">functions.</span> <span m="600300">The</span> <span
  m="600440">case</span> <span m="600890">component</span> <span
  m="601580">has</span> <span m="601790">become--</span> <span
  m="602690">really,</span> <span m="603200">I</span> <span
  m="603380">should</span> <span m="603620">say</span> <span m="603890">f</span>
  <span m="604370">star</span> <span m="605070">g</span> <span
  m="606920">at</span> <span m="607280">x.</span> <span m="607730">That's</span>
  <span m="608090">really</span> <span m="609800">the</span> <span
  m="609980">parallel</span> <span m="610790">to</span> <span
  m="611000">this.</span> <span m="612260">So</span> <span m="612470">let</span>
  <span m="612620">me.</span> <span m="616940">So</span> <span
  m="617750">I'm</span> <span m="617870">telling</span> <span
  m="618200">you</span> <span m="618410">the</span> <span
  m="618650">answer</span> <span m="619250">at</span> <span m="619580">x.</span>
  <span m="620900">Here</span> <span m="621380">I</span> <span
  m="621560">told</span> <span m="621980">you</span> <span m="622160">the</span>
  <span m="622340">answer</span> <span m="622820">at</span> <span
  m="623150">k.</span> <span m="624760">The</span> <span m="625100">k-th</span>
  <span m="626930">component</span> <span m="628010">looks</span> <span
  m="628280">like</span> <span m="628520">that.</span> <span
  m="629270">What</span> <span m="629480">does</span> <span
  m="629750">the</span> <span m="630710">x</span> <span m="631040">value</span>
  <span m="632270">of</span> <span m="632450">the</span> <span
  m="632570">convolution</span> <span m="633290">look</span> <span
  m="633500">like</span> <span m="633770">for</span> <span
  m="633950">functions?</span></p><p><span m="635390">OK,</span> <span
  m="635690">I'm</span> <span m="635840">just</span> <span
  m="636050">going</span> <span m="636150">to</span> <span m="636290">do</span>
  <span m="636530">this.</span> <span m="637910">I'm</span> <span
  m="638030">going</span> <span m="638130">to</span> <span m="638240">do</span>
  <span m="638420">the</span> <span m="638540">same</span> <span
  m="638900">as</span> <span m="639050">this.</span> <span
  m="639800">Instead</span> <span m="640220">of</span> <span
  m="640340">summing,</span> <span m="641030">what</span> <span
  m="641240">will</span> <span m="641420">I</span> <span m="641540">do?</span>
  <span m="643200">Integrate.</span> <span m="646980">Instead</span> <span
  m="647640">of</span> <span m="648420">c</span> <span m="648810">sub</span>
  <span m="649050">i,</span> <span m="650940">I'll</span> <span
  m="651120">have</span> <span m="651390">f</span> <span m="651570">of</span>
  <span m="651720">x.</span> <span m="656380">The</span> <span
  m="656590">index</span> <span m="657070">i is</span> <span
  m="657580">changing</span> <span m="658180">over</span> <span
  m="658480">to</span> <span m="658660">the</span> <span
  m="659140">continuous</span> <span m="659890">variable</span> <span
  m="660400">x.</span> <span m="661300">And</span> <span m="661450">now</span>
  <span m="661780">g</span> <span m="664450">instead</span> <span
  m="664840">of</span> <span m="664960">dk</span> <span m="665890">minus</span>
  <span m="666430">i,</span> <span m="666850">what</span> <span
  m="667060">do</span> <span m="667210">I</span> <span m="667360">have</span>
  <span m="667660">here?</span> <span m="670390">So</span> <span
  m="673250">it's</span> <span m="673550">the</span> <span m="674170">k</span>
  <span m="674500">minus</span> <span m="674980">i</span> <span
  m="675190">component.</span> <span m="676330">That</span> <span
  m="676630">will</span> <span m="676870">go</span> <span m="677230">to--</span>
  <span m="677770">let</span> <span m="677890">me</span> <span
  m="678040">just</span> <span m="678250">write</span> <span
  m="678520">it</span> <span m="678610">down--</span> <span m="679960">t</span>
  <span m="680380">minus</span> <span m="680830">x.</span></p><p><span
  m="683320">So</span> <span m="683570">in</span> <span m="683950">this</span>
  <span m="684190">translation,</span> <span m="685580">f</span> <span
  m="685960">is</span> <span m="686170">being</span> <span
  m="686440">translated</span> <span m="687160">to</span> <span
  m="687340">c.</span> <span m="689380">Or</span> <span m="689650">sorry,</span>
  <span m="690310">f</span> <span m="691960">corresponds</span> <span
  m="692680">to</span> <span m="692830">c.</span> <span m="694100">g</span>
  <span m="694480">corresponds</span> <span m="695380">to</span> <span
  m="695500">d.</span> <span m="696540">k</span> <span
  m="697360">corresponds</span> <span m="698230">to</span> <span
  m="698350">x.</span> <span m="700830">Oh</span> <span m="701020">no,</span>
  <span m="701300">sorry.</span> <span m="701530">i</span> <span
  m="701880">corresponds</span> <span m="702380">to</span> <span
  m="702750">x.</span> <span m="705160">And</span> <span m="706630">k</span>
  <span m="707020">minus</span> <span m="707500">i</span> <span
  m="708700">corresponds</span> <span m="709630">to</span> <span
  m="710710">t</span> <span m="710950">minus</span> <span m="711430">x.</span>
  <span m="712940">So</span> <span m="713220">k</span> <span
  m="713480">corresponds</span> <span m="714190">to</span> <span
  m="714340">t.</span> <span m="716160">This</span> <span
  m="716430">would</span> <span m="717130">be</span> <span m="717310">the</span>
  <span m="717430">convolution</span> <span m="718120">of</span> <span
  m="718210">two</span> <span m="718430">functions.</span> <span
  m="721370">Oh,</span> <span m="721550">it's</span> <span m="721760">a</span>
  <span m="721820">function</span> <span m="722270">of</span> <span
  m="722360">t.</span> <span m="724460">Bad</span> <span
  m="726080">notation.</span></p><p><span m="730940">The</span> <span
  m="731090">t</span> <span m="731450">is</span> <span m="731540">sort</span>
  <span m="731840">of</span> <span m="731960">the</span> <span
  m="733220">amount</span> <span m="733610">of</span> <span
  m="733730">shift.</span> <span m="734630">See,</span> <span
  m="734840">I've</span> <span m="734990">shifted</span> <span
  m="735590">g.</span> <span m="736310">I've</span> <span
  m="736880">reversed</span> <span m="737480">it.</span> <span
  m="738190">I've</span> <span m="738470">flipped</span> <span
  m="739010">it</span> <span m="739760">and</span> <span
  m="740300">shifting</span> <span m="740960">it</span> <span
  m="741110">by</span> <span m="741320">different</span> <span
  m="741830">amounts</span> <span m="742340">t.</span> <span
  m="743360">It's</span> <span m="743990">what</span> <span
  m="744140">you</span> <span m="744260">have</span> <span m="744420">in</span>
  <span m="744620">a</span> <span m="744680">filter.</span> <span
  m="745340">It's</span> <span m="745550">just</span> <span
  m="746510">also</span> <span m="746990">always</span> <span
  m="747620">present</span> <span m="748190">in</span> <span
  m="750890">signal</span> <span m="751280">processing.</span> <span
  m="752310">So</span> <span m="752560">that</span> <span m="752840">that</span>
  <span m="753050">would</span> <span m="753200">be</span> <span
  m="753440">a</span> <span m="755210">definition.</span> <span
  m="755990">Or</span> <span m="756590">I</span> <span m="756740">could,</span>
  <span m="757370">if</span> <span m="757550">you</span> <span
  m="757670">like,</span> <span m="758150">if</span> <span m="758330">you</span>
  <span m="758450">want</span> <span m="758840">an x</span> <span
  m="759170">variable</span> <span m="759680">to</span> <span
  m="759830">come</span> <span m="760130">out,</span> <span
  m="760850">let</span> <span m="761030">me</span> <span m="761150">make</span>
  <span m="761420">an</span> <span m="761540">x</span> <span
  m="761750">variable</span> <span m="762350">come</span> <span
  m="762620">out</span> <span m="762860">by</span> <span
  m="763430">exchanging</span> <span m="765050">t</span> <span
  m="765410">and</span> <span m="765590">x.</span> <span m="766580">So</span>
  <span m="766850">this</span> <span m="767120">would</span> <span
  m="767300">be</span> <span m="768590">x</span> <span m="769070">minus</span>
  <span m="769670">t</span> <span m="770880">dt.</span> <span
  m="772600">I</span> <span m="772700">like</span> <span m="772910">that,</span>
  <span m="773180">actually,</span> <span m="773510">a</span> <span
  m="773570">little</span> <span m="773780">better.</span> <span
  m="774500">And</span> <span m="774750">it's the</span> <span
  m="775180">integral</span> <span m="775580">over</span> <span
  m="775880">t</span> <span m="777500">minus</span> <span
  m="777980">infinity</span> <span m="778610">to</span> <span
  m="778790">infinity</span> <span m="779480">if</span> <span
  m="779690">our</span> <span m="780590">functions</span> <span
  m="781220">were</span> <span m="782060">on</span> <span m="782240">the</span>
  <span m="782330">whole</span> <span m="782570">line.</span></p><p><span
  m="784670">So</span> <span m="785330">there</span> <span
  m="785480">will</span> <span m="785570">be</span> <span m="785690">a</span>
  <span m="785750">convolution</span> <span m="786530">rule</span> <span
  m="786800">for</span> <span m="786980">that.</span> <span
  m="790280">This</span> <span m="790940">will</span> <span
  m="791210">connect</span> <span m="791750">to</span> <span
  m="791990">the</span> <span m="792650">Fourier</span> <span
  m="793220">transform</span> <span m="794150">of</span> <span
  m="794300">the</span> <span m="794420">two</span> <span
  m="794660">functions.</span> <span m="795830">Over</span> <span
  m="796070">here,</span> <span m="796550">I'm</span> <span
  m="796760">connecting</span> <span m="797390">it</span> <span
  m="797510">to</span> <span m="797720">the</span> <span
  m="798290">discrete</span> <span m="798920">Fourier</span> <span
  m="799370">transform</span> <span m="800030">of</span> <span
  m="800090">the</span> <span m="800210">two</span> <span
  m="800450">functions.</span> <span m="801590">And</span> <span
  m="803510">I've</span> <span m="803780">been</span> <span
  m="804020">making</span> <span m="804560">the</span> <span
  m="804980">convolution</span> <span m="805880">cyclic.</span> <span
  m="807110">So</span> <span m="807290">what</span> <span
  m="807530">does--</span> <span m="808430">can</span> <span m="808670">I</span>
  <span m="808850">add</span> <span m="809090">cyclic</span> <span
  m="809660">now?</span> <span m="810020">This</span> <span m="810260">is</span>
  <span m="810470">ordinary</span> <span m="810980">convolution.</span> <span
  m="812210">This</span> <span m="812420">is</span> <span m="812540">what</span>
  <span m="812720">you</span> <span m="812870">had</span> <span
  m="813200">in</span> <span m="813350">the</span> <span m="813470">first</span>
  <span m="813920">lab,</span> <span m="814400">I</span> <span
  m="814520">think,</span> <span m="814910">from</span> <span
  m="817130">Raj</span> <span m="817520">Rao.</span></p><p><span
  m="818600">The</span> <span m="818720">first</span> <span
  m="819050">lab,</span> <span m="819470">you</span> <span
  m="819530">remember</span> <span m="819890">you</span> <span
  m="820040">had</span> <span m="820220">to</span> <span
  m="820370">figure</span> <span m="820820">out</span> <span
  m="823430">how</span> <span m="823580">many</span> <span
  m="825530">components</span> <span m="826370">the</span> <span
  m="826550">convolution</span> <span m="827330">would</span> <span
  m="827570">have?</span> <span m="828860">And</span> <span
  m="829040">you</span> <span m="829130">didn't</span> <span
  m="829370">make</span> <span m="829640">it</span> <span
  m="829770">cyclic.</span> <span m="831080">So</span> <span m="831290">a</span>
  <span m="831350">cyclic</span> <span m="833960">convolution,</span> <span
  m="835160">if</span> <span m="835760">this</span> <span m="836000">has</span>
  <span m="836240">n</span> <span m="836420">components</span> <span
  m="837080">and</span> <span m="837230">this</span> <span m="837470">has</span>
  <span m="837710">n</span> <span m="837890">components,</span> <span
  m="838550">then</span> <span m="839180">the</span> <span
  m="839300">convolution</span> <span m="840050">has</span> <span
  m="840350">n</span> <span m="840620">components.</span> <span
  m="842490">Because</span> <span m="843680">keeping</span> <span
  m="845130">n</span> <span m="845660">is</span> <span m="845870">the</span>
  <span m="846110">key</span> <span m="846440">number</span> <span
  m="846950">there,</span> <span m="847420">the</span> <span
  m="848720">length</span> <span m="849050">of</span> <span
  m="849170">the</span> <span m="849290">period.</span></p><p><span
  m="850940">And</span> <span m="851210">similarly,</span> <span
  m="851630">over</span> <span m="851840">here,</span> <span
  m="852560">if</span> <span m="852830">f</span> <span m="853130">is</span>
  <span m="853310">2</span> <span m="853550">pi</span> <span
  m="853910">periodic</span> <span m="855050">and</span> <span
  m="855220">g</span> <span m="855560">is</span> <span m="855740">2</span> <span
  m="855980">pi</span> <span m="856280">periodic,</span> <span
  m="856940">then</span> <span m="857180">we</span> <span
  m="857810">might</span> <span m="858170">want</span> <span
  m="858500">to</span> <span m="858680">do</span> <span m="859010">a</span>
  <span m="859070">periodic</span> <span m="859790">convolution</span> <span
  m="861170">and</span> <span m="862490">bring</span> <span
  m="862820">it--</span> <span m="864860">get</span> <span m="865820">an</span>
  <span m="866000">answer</span> <span m="867260">that</span> <span
  m="867470">also</span> <span m="867890">has</span> <span m="868730">2</span>
  <span m="868940">pi</span> <span m="869420">period</span> <span
  m="869840">2</span> <span m="870050">pi.</span> <span m="871590">So</span>
  <span m="871940">you</span> <span m="872180">could</span> <span
  m="872390">compute</span> <span m="872890">the</span> <span
  m="873470">convolution</span> <span m="874310">of</span> <span
  m="874430">sine</span> <span m="874850">x</span> <span m="875180">with</span>
  <span m="875900">cos x,</span> <span m="876620">for</span> <span
  m="876800">example.</span></p><p><span m="878850">OK,</span> <span
  m="880160">let's</span> <span m="880340">stick</span> <span
  m="880670">with</span> <span m="880850">vectors.</span> <span
  m="883280">So</span> <span m="883460">what's</span> <span
  m="883820">the</span> <span m="883940">deal</span> <span
  m="885500">when</span> <span m="885680">I</span> <span m="887120">make</span>
  <span m="887480">it</span> <span m="887600">cyclic?</span> <span
  m="889510">When</span> <span m="889670">I</span> <span m="889730">make</span>
  <span m="890000">it</span> <span m="890120">cyclic,</span> <span
  m="890720">then</span> <span m="890990">in</span> <span m="891080">this</span>
  <span m="891350">multiplication,</span> <span m="893720">I</span> <span
  m="893870">really</span> <span m="894230">should</span> <span
  m="894530">use--</span> <span m="895940">I've</span> <span
  m="896210">introduced</span> <span m="896750">w</span> <span
  m="897470">as</span> <span m="897710">that</span> <span
  m="899000">instead</span> <span m="899420">of</span> <span
  m="899540">x.</span> <span m="899840">So</span> <span
  m="900050">cyclic.</span> <span m="904900">x</span> <span
  m="905500">becomes</span> <span m="906200">this</span> <span
  m="907470">number</span> <span m="907840">w,</span> <span
  m="908860">which</span> <span m="909190">is</span> <span m="911240">e</span>
  <span m="911640">to</span> <span m="911850">the 2 pi</span> <span
  m="912200">i</span> <span m="912430">over</span> <span m="912700">n</span>
  <span m="914350">and</span> <span m="914860">has</span> <span
  m="915150">the</span> <span m="915250">property</span> <span
  m="915760">then</span> <span m="916070">that</span> <span m="916200">w</span>
  <span m="916720">to</span> <span m="916900">the</span> <span
  m="917080">n-th</span> <span m="917500">is</span> <span m="917800">1</span>
  <span m="918970">so</span> <span m="919240">that</span> <span
  m="919810">all</span> <span m="920080">vectors</span> <span
  m="920770">of</span> <span m="920890">length</span> <span
  m="921220">greater</span> <span m="921580">than</span> <span
  m="921820">n</span> <span m="922120">can</span> <span m="922360">be</span>
  <span m="922540">folded</span> <span m="923020">back</span> <span
  m="923950">using</span> <span m="924370">this</span> <span
  m="924730">rule</span> <span m="925300">to</span> <span m="925540">a</span>
  <span m="926020">vector</span> <span m="926440">of</span> <span
  m="926590">length</span> <span m="926980">n.</span> <span m="927640">So</span>
  <span m="927820">we</span> <span m="927940">get</span> <span
  m="928120">a</span> <span m="928180">cyclic</span> <span
  m="928870">guy.</span></p><p><span m="930940">So</span> <span
  m="932170">how</span> <span m="932380">does</span> <span
  m="932620">that</span> <span m="932800">change</span> <span
  m="933520">the</span> <span m="934120">answer?</span> <span
  m="936100">Well,</span> <span m="936670">I</span> <span m="936820">only</span>
  <span m="937090">want</span> <span m="937390">k</span> <span
  m="937840">going</span> <span m="938260">from</span> <span m="938560">0</span>
  <span m="939100">to</span> <span m="940120">n</span> <span
  m="940300">minus</span> <span m="940720">1</span> <span m="941320">in</span>
  <span m="941620">the</span> <span m="942100">cyclic</span> <span
  m="942600">case.</span> <span m="943180">I</span> <span
  m="943510">don't</span> <span m="943690">want</span> <span
  m="944050">infinitely</span> <span m="944620">many</span> <span
  m="944980">components.</span> <span m="946810">I've</span> <span
  m="946960">got</span> <span m="947170">to</span> <span m="947680">bring</span>
  <span m="947980">them</span> <span m="948130">back</span> <span
  m="948460">again.</span> <span m="949990">And</span> <span
  m="950260">let</span> <span m="950440">me</span> <span m="950620">just</span>
  <span m="950860">say</span> <span m="951250">what</span> <span
  m="954940">the</span> <span m="955090">rule</span> <span
  m="955390">would</span> <span m="955600">be.</span> <span
  m="956380">You</span> <span m="956530">just</span> <span
  m="957040">ask,</span> <span m="960970">say,</span> <span m="961960">i</span>
  <span m="962200">plus</span> <span m="962590">j.</span> <span
  m="963460">You</span> <span m="963640">would</span> <span
  m="963840">look</span> <span m="964120">at</span> <span m="964270">that</span>
  <span m="965380">modulo</span> <span m="966490">n.</span> <span
  m="967720">That's</span> <span m="968080">what</span> <span
  m="968783">a</span> <span m="969550">number</span> <span
  m="970030">theory</span> <span m="970510">person</span> <span
  m="970960">would</span> <span m="971230">call</span> <span
  m="971560">it.</span> <span m="972790">We</span> <span m="973030">only</span>
  <span m="973330">look</span> <span m="973960">at</span> <span
  m="974170">the</span> <span m="974290">remainder</span> <span
  m="975460">when</span> <span m="975700">we</span> <span
  m="975850">divide</span> <span m="976300">by</span> <span m="976570">n.</span>
  <span m="978400">So</span> <span m="978670">now</span> <span
  m="979110">the</span> <span m="980020">sums</span> <span m="980560">go</span>
  <span m="980830">only</span> <span m="981190">from</span> <span
  m="981460">0</span> <span m="981880">to</span> <span m="982060">n</span> <span
  m="982240">minus</span> <span m="982660">1,</span> <span m="983590">and</span>
  <span m="983770">I</span> <span m="983890">only</span> <span
  m="984160">get</span> <span m="984370">an</span> <span
  m="984520">answer</span> <span m="985030">from</span> <span
  m="985660">0</span> <span m="986140">to</span> <span m="986730">n</span> <span
  m="986950">minus</span> <span m="987340">1.</span> <span
  m="988756">Well,</span> <span m="989470">I've</span> <span
  m="989950">done</span> <span m="990190">that</span> <span
  m="990400">pretty</span> <span m="991150">quickly.</span> <span
  m="993440">That's</span> <span m="993910">if</span> <span m="994090">I</span>
  <span m="994810">wanted</span> <span m="995140">to</span> <span
  m="995290">do</span> <span m="995560">justice</span> <span
  m="996160">to--</span></p><p><span m="997350">So</span> <span
  m="998110">the</span> <span m="998350">difference</span> <span
  m="999100">between</span> <span m="1000540">non-periodic.</span> <span
  m="1003950">So</span> <span m="1004420">non-periodic</span> <span
  m="1009870">and</span> <span m="1010920">periodic</span> <span
  m="1013670">will</span> <span m="1013890">be</span> <span
  m="1014100">the</span> <span m="1014250">difference</span> <span
  m="1014790">between--</span> <span m="1016950">so</span> <span
  m="1017160">I</span> <span m="1017250">have</span> <span
  m="1017520">some</span> <span m="1017760">number</span> <span
  m="1018180">t0</span> <span m="1019140">on</span> <span m="1019320">the</span>
  <span m="1019440">diagonals.</span> <span m="1020180">t1,</span> <span
  m="1021920">t2,</span> <span m="1023070">t</span> <span
  m="1023370">minus</span> <span m="1023880">1,</span> <span
  m="1025150">t</span> <span m="1025530">minus</span> <span
  m="1026010">2,</span> <span m="1026400">and</span> <span m="1026520">so</span>
  <span m="1026700">on.</span> <span m="1027000">Constant</span> <span
  m="1027510">diagonals.</span> <span m="1028069">So</span> <span
  m="1028650">the</span> <span m="1028890">key</span> <span
  m="1029190">name</span> <span m="1029550">there</span> <span
  m="1029790">is</span> <span m="1029970">Toeplitz.</span> <span
  m="1034069">And</span> <span m="1034270">if</span> <span
  m="1034420">it's</span> <span m="1034569">periodic,</span> <span
  m="1036520">then</span> <span m="1036910">I</span> <span
  m="1037060">have,</span> <span m="1037390">I'll</span> <span
  m="1037599">say,</span> <span m="1037960">c,</span> <span
  m="1038215">c,</span> <span m="1038470">c.</span> <span m="1040930">And</span>
  <span m="1041170">then</span> <span m="1041410">the</span> <span
  m="1041500">next</span> <span m="1041859">one</span> <span
  m="1042010">will</span> <span m="1042099">be</span> <span
  m="1042280">c1,</span> <span m="1042869">c1,</span> <span
  m="1043569">coming</span> <span m="1043930">around</span> <span
  m="1044260">to</span> <span m="1044349">c1.</span> <span
  m="1045640">And</span> <span m="1045790">c2</span> <span
  m="1046450">coming</span> <span m="1046810">around.</span> <span
  m="1047290">So</span> <span m="1047619">it's</span> <span m="1049960">n</span>
  <span m="1050140">by</span> <span m="1050410">n</span> <span
  m="1050890">period</span> <span m="1051430">n.</span> <span
  m="1052210">So</span> <span m="1053050">it's</span> <span m="1053290">a</span>
  <span m="1053350">circulant</span> <span m="1054130">matrix.</span> <span
  m="1058090">N by</span> <span m="1058330">N.</span></p><p><span
  m="1060550">OK.</span> <span m="1062680">That's</span> <span
  m="1062980">the</span> <span m="1063100">big</span> <span
  m="1063340">picture.</span> <span m="1065490">And</span> <span
  m="1066010">I</span> <span m="1066100">think</span> <span
  m="1066430">in</span> <span m="1066580">that</span> <span
  m="1066790">first</span> <span m="1067180">lab,</span> <span m="1068770">you
  were</span> <span m="1069130">asked</span> <span m="1069340">to</span> <span
  m="1069490">do</span> <span m="1069730">the</span> <span
  m="1069880">non-circulant</span> <span m="1070960">case.</span> <span
  m="1071350">Because</span> <span m="1071560">that's</span> <span
  m="1071830">the</span> <span m="1071980">one</span> <span
  m="1072220">where</span> <span m="1072850">you</span> <span
  m="1072970">have</span> <span m="1073150">to</span> <span
  m="1073270">do</span> <span m="1073450">a</span> <span
  m="1073480">little</span> <span m="1073660">patience.</span> <span
  m="1074560">What</span> <span m="1074770">will</span> <span
  m="1074950">be</span> <span m="1075130">the</span> <span
  m="1075280">length?</span> <span m="1075750">Yeah,</span> <span
  m="1076060">what</span> <span m="1076540">would</span> <span
  m="1076750">be</span> <span m="1076930">the</span> <span
  m="1077050">length</span> <span m="1077950">of</span> <span
  m="1079570">a</span> <span m="1079660">non-circulant?</span> <span
  m="1080740">So</span> <span m="1081010">not</span> <span
  m="1081340">circulant.</span> <span m="1082420">Now,</span> <span
  m="1085240">suppose</span> <span m="1085640">the</span> <span
  m="1085720">c</span> <span m="1086050">vector</span> <span
  m="1086590">has</span> <span m="1088660">p</span> <span
  m="1089020">components</span> <span m="1090310">and</span> <span
  m="1090460">the</span> <span m="1090580">d</span> <span
  m="1090850">vector</span> <span m="1091390">has</span> <span
  m="1091840">q</span> <span m="1092230">components.</span> <span
  m="1093580">How</span> <span m="1093850">many</span> <span
  m="1094180">components</span> <span m="1094930">in</span> <span
  m="1095080">their</span> <span m="1095260">convolution?</span> <span
  m="1096600">Shall</span> <span m="1096910">I</span> <span
  m="1096970">write</span> <span m="1097210">that</span> <span
  m="1097390">question</span> <span m="1097780">down?</span> <span
  m="1098080">Because</span> <span m="1098800">that</span> <span
  m="1099370">brings</span> <span m="1099760">out</span> <span
  m="1100000">the</span> <span m="1100120">difference</span> <span
  m="1100690">here.</span></p><p><span m="1102580">So</span> <span
  m="1102910">if</span> <span m="1103090">I</span> <span m="1103210">have</span>
  <span m="1104270">p,</span> <span m="1105880">if</span> <span
  m="1106720">c</span> <span m="1107260">has</span> <span m="1109990">P</span>
  <span m="1110350">components,</span> <span m="1115170">d</span> <span
  m="1115650">has</span> <span m="1116310">q</span> <span
  m="1117720">components,</span> <span m="1119150">then</span> <span
  m="1119680">the</span> <span m="1119820">convolution</span> <span
  m="1121170">of</span> <span m="1121350">c</span> <span m="1121690">and</span>
  <span m="1121830">d</span> <span m="1122220">has</span> <span
  m="1122820">how</span> <span m="1123000">many?</span> <span
  m="1126300">So</span> <span m="1126450">I'm</span> <span
  m="1126550">multiplying.</span> <span m="1127630">So</span> <span
  m="1127800">it's</span> <span m="1127980">really</span> <span
  m="1128520">this</span> <span m="1128820">corresponds</span> <span
  m="1129660">to</span> <span m="1129810">a</span> <span
  m="1129900">polynomial</span> <span m="1131280">of</span> <span
  m="1131460">degree</span> <span m="1132060">p</span> <span
  m="1132390">minus</span> <span m="1132810">1,</span> <span
  m="1133215">right?</span> <span m="1134460">Polynomials</span> <span
  m="1136680">of</span> <span m="1137130">degree</span> <span
  m="1139500">p</span> <span m="1139770">minus</span> <span
  m="1140220">1.</span></p><p><span m="1141040">And</span> <span
  m="1141450">this</span> <span m="1141720">guy</span> <span
  m="1141990">would</span> <span m="1142200">be</span> <span
  m="1142460">degree</span> <span m="1143070">q</span> <span
  m="1143400">minus</span> <span m="1143880">1.</span> <span
  m="1145020">Degree</span> <span m="1145800">q</span> <span
  m="1146100">minus</span> <span m="1146490">1.</span> <span
  m="1147390">And</span> <span m="1147600">when</span> <span
  m="1147780">I</span> <span m="1147870">multiply</span> <span
  m="1148410">them,</span> <span m="1148560">what's</span> <span
  m="1148860">the</span> <span m="1149010">degree?</span> <span
  m="1151200">Just</span> <span m="1151530">add.</span> <span
  m="1153230">And</span> <span m="1153420">how</span> <span
  m="1153570">many</span> <span m="1153870">coefficients?</span> <span
  m="1155640">Well,</span> <span m="1155940">one</span> <span
  m="1156210">more</span> <span m="1156510">I</span> <span
  m="1156600">have</span> <span m="1156780">to</span> <span
  m="1156900">remember</span> <span m="1157380">for</span> <span
  m="1157530">that</span> <span m="1157830">stupid</span> <span
  m="1159080">0</span> <span m="1159510">order</span> <span
  m="1159870">term.</span> <span m="1160710">So</span> <span
  m="1160980">this</span> <span m="1161220">would</span> <span
  m="1161460">have</span> <span m="1162270">p</span> <span
  m="1162870">plus</span> <span m="1163500">q</span> <span
  m="1164100">minus</span> <span m="1164840">1</span> <span
  m="1165340">components.</span> <span m="1170590">So</span> <span
  m="1170800">that</span> <span m="1170980">would</span> <span
  m="1171120">have</span> <span m="1171220">been</span> <span
  m="1171400">the</span> <span m="1171520">number</span> <span
  m="1171910">that</span> <span m="1172090">you've</span> <span
  m="1172300">somehow</span> <span m="1172780">had</span> <span
  m="1172960">to</span> <span m="1173080">work</span> <span
  m="1173410">out</span> <span m="1174120">in</span> <span
  m="1174280">that</span> <span m="1174490">first</span> <span
  m="1174910">lab.</span></p><p><span m="1176440">So</span> <span
  m="1176740">that</span> <span m="1176920">if</span> <span
  m="1177120">this</span> <span m="1177340">had</span> <span
  m="1177580">n</span> <span m="1177760">components</span> <span
  m="1178390">and</span> <span m="1178480">this</span> <span
  m="1178720">had</span> <span m="1178940">n,</span> <span
  m="1179620">this</span> <span m="1179830">would</span> <span
  m="1180040">have</span> <span m="1180220">2n</span> <span
  m="1180730">minus</span> <span m="1181150">1.</span> <span
  m="1181840">It's</span> <span m="1182020">just</span> <span
  m="1182290">what</span> <span m="1182470">you</span> <span
  m="1182620">would</span> <span m="1182770">have--</span> <span
  m="1183040">like</span> <span m="1184000">you</span> <span
  m="1184360">say</span> <span m="1184660">3</span> <span
  m="1185110">plus</span> <span m="1185740">x</span> <span
  m="1186670">times</span> <span m="1188200">1</span> <span
  m="1188710">plus</span> <span m="1189190">2x.</span> <span
  m="1191390">In</span> <span m="1191560">this</span> <span
  m="1191770">case,</span> <span m="1192400">p</span> <span
  m="1192760">is</span> <span m="1192940">2,</span> <span m="1194110">q</span>
  <span m="1194470">is</span> <span m="1194590">two,</span> <span
  m="1195700">two</span> <span m="1195940">components,</span> <span
  m="1196600">two</span> <span m="1196810">components.</span> <span
  m="1197470">And</span> <span m="1197590">if</span> <span m="1197710">I</span>
  <span m="1197830">multiply</span> <span m="1198370">those,</span> <span
  m="1198760">I</span> <span m="1198880">get</span> <span m="1199060">3x</span>
  <span m="1200680">and</span> <span m="1200800">6x</span> <span
  m="1201570">is</span> <span m="1201670">7x</span> <span m="1203350">and</span>
  <span m="1204670">2x</span> <span m="1205150">squared.</span> <span
  m="1207160">And</span> <span m="1207790">so</span> <span m="1208330">I</span>
  <span m="1208480">have</span> <span m="1210760">2</span> <span
  m="1211210">plus</span> <span m="1211600">2</span> <span
  m="1211990">minus</span> <span m="1212500">1</span> <span
  m="1214150">equals</span> <span m="1214480">3</span> <span
  m="1215080">components.</span> <span m="1218230">The</span> <span
  m="1218540">constant</span> <span m="1219100">x</span> <span
  m="1219370">and</span> <span m="1219490">x</span> <span
  m="1219670">squared.</span> <span m="1220210">Yeah,</span> <span
  m="1220840">clear,</span> <span m="1221750">right.</span></p><p><span
  m="1222690">Yeah,</span> <span m="1222970">so</span> <span
  m="1223210">that's</span> <span m="1223540">not</span> <span
  m="1223850">the--</span> <span m="1224590">that's</span> <span
  m="1224860">what</span> <span m="1225070">I</span> <span
  m="1225160">would</span> <span m="1225340">get</span> <span
  m="1225580">if</span> <span m="1225760">I</span> <span
  m="1225880">multiplied</span> <span m="1226450">these</span> <span
  m="1226780">matrices,</span> <span m="1228520">if</span> <span
  m="1228700">I</span> <span m="1228850">had</span> <span m="1229030">a</span>
  <span m="1229120">two</span> <span m="1229450">diagonal</span> <span
  m="1229990">matrix,</span> <span m="1230650">Toeplitz</span> <span
  m="1231130">matrix,</span> <span m="1232030">times</span> <span
  m="1232390">a</span> <span m="1232480">two</span> <span
  m="1232750">diagonal</span> <span m="1233310">Toeplitz</span> <span
  m="1233770">matrix,</span> <span m="1234640">that</span> <span
  m="1234850">would</span> <span m="1235060">give</span> <span
  m="1235270">me</span> <span m="1235420">a</span> <span
  m="1235510">three</span> <span m="1235990">diagonal</span> <span
  m="1238450">answer.</span> <span m="1239650">But</span> <span
  m="1240010">if</span> <span m="1240190">I</span> <span m="1241150">am</span>
  <span m="1241360">doing</span> <span m="1241660">it</span> <span
  m="1241780">periodically,</span> <span m="1243370">I</span> <span
  m="1243490">would</span> <span m="1243670">only</span> <span
  m="1243910">have</span> <span m="1244090">two.</span> <span
  m="1246040">That</span> <span m="1247360">2x</span> <span
  m="1247840">squared</span> <span m="1248350">would</span> <span
  m="1248560">come</span> <span m="1248830">back</span> <span
  m="1249280">if</span> <span m="1250390">I--</span> <span
  m="1251020">come</span> <span m="1251260">back</span> <span
  m="1251650">as</span> <span m="1251930">a</span> <span m="1252560">2.</span>
  <span m="1253420">so</span> <span m="1253690">I</span> <span
  m="1253810">just</span> <span m="1254080">have</span> <span
  m="1254230">5</span> <span m="1254640">plus</span> <span
  m="1254790">7x.</span> <span m="1256600">Right,</span> <span
  m="1257080">good,</span> <span m="1257350">good,</span> <span
  m="1257560">good.</span></p><p><span m="1259130">OK.</span> <span
  m="1261350">So</span> <span m="1261560">that's</span> <span
  m="1261860">a</span> <span m="1261920">reminder</span> <span
  m="1262610">of</span> <span m="1262730">what</span> <span
  m="1262940">convolution</span> <span m="1263750">is.</span> <span
  m="1264740">Cyclic</span> <span m="1265060">and</span> <span
  m="1265260">non-cyclic,</span> <span m="1266630">vectors</span> <span
  m="1267200">and</span> <span m="1267350">functions.</span> <span
  m="1268830">OK,</span> <span m="1269370">then</span> <span
  m="1271190">eigenvalues</span> <span m="1272060">and</span> <span
  m="1272210">eigenvectors</span> <span m="1273710">are</span> <span
  m="1273800">the</span> <span m="1273890">next</span> <span
  m="1274220">step,</span> <span m="1275150">and</span> <span
  m="1275300">then</span> <span m="1275540">the</span> <span
  m="1275670">convolution</span> <span m="1276410">rule</span> <span
  m="1276680">is</span> <span m="1276860">the</span> <span
  m="1276950">last</span> <span m="1277280">step.</span> <span
  m="1277790">So</span> <span m="1278660">eigenvectors.</span> <span
  m="1281980">Eigenvectors</span> <span m="1283250">of</span> <span
  m="1283380">the</span> <span m="1283500">circulant.</span> <span
  m="1286940">Of</span> <span m="1287000">course,</span> <span
  m="1287330">I</span> <span m="1287420">can</span> <span
  m="1287600">only</span> <span m="1287870">do</span> <span
  m="1288050">square</span> <span m="1288410">matrices.</span></p><p><span
  m="1292880">So</span> <span m="1293060">I'm</span> <span
  m="1293630">doing</span> <span m="1293930">the</span> <span
  m="1294020">periodic</span> <span m="1294650">case.</span> <span
  m="1295430">So</span> <span m="1295580">the</span> <span
  m="1295760">eigenvectors</span> <span m="1296690">are</span> <span
  m="1296840">the</span> <span m="1298610">columns</span> <span
  m="1300380">of</span> <span m="1300845">the</span> <span
  m="1303970">eigenvector</span> <span m="1304520">matrix.</span> <span
  m="1305950">And</span> <span m="1306050">I'm</span> <span
  m="1306200">going</span> <span m="1306320">to</span> <span
  m="1306410">call</span> <span m="1306650">it</span> <span m="1306800">F</span>
  <span m="1307850">for</span> <span m="1308060">Fourier.</span> <span
  m="1309260">So</span> <span m="1309530">F</span> <span m="1309920">is--</span>
  <span m="1311540">the</span> <span m="1311660">first</span> <span
  m="1312060">eigenvector</span> <span m="1312860">is</span> <span
  m="1313040">all</span> <span m="1313250">1s.</span> <span
  m="1314410">An</span> <span m="1314570">x</span> <span
  m="1314970">eigenvector</span> <span m="1315680">is</span> <span
  m="1315920">the</span> <span m="1316460">fourth</span> <span
  m="1317000">root</span> <span m="1317330">of</span> <span
  m="1317450">1,</span> <span m="1318620">then</span> <span
  m="1319070">the</span> <span m="1319760">square</span> <span
  m="1320240">root</span> <span m="1320570">of</span> <span
  m="1320730">1,</span> <span m="1322700">i6,</span> <span
  m="1323910">i8,</span> <span m="1324630">i</span> <span
  m="1325220">fourth,</span> <span m="1325670">i6,</span> <span
  m="1327380">and</span> <span m="1327980">finally,</span> <span
  m="1328520">1</span> <span m="1329030">i</span> <span m="1329330">cubed</span>
  <span m="1330320">i</span> <span m="1330710">sixth</span> <span
  m="1331310">i</span> <span m="1331550">ninth.</span> <span
  m="1332640">OK,</span> <span m="1333800">that's</span> <span
  m="1334110">F.</span> <span m="1336600">Those</span> <span
  m="1336900">are</span> <span m="1336990">the</span> <span
  m="1337320">four</span> <span m="1337850">eigenvectors</span> <span
  m="1338970">of</span> <span m="1340140">the</span> <span
  m="1340260">permutation</span> <span m="1341160">p</span> <span
  m="1343080">and</span> <span m="1343530">of</span> <span
  m="1343680">any</span> <span m="1344340">polynomial</span> <span
  m="1344815">in</span> <span m="1345290">p.</span> <span m="1345690">So</span>
  <span m="1346350">my</span> <span m="1346560">circulant</span> <span
  m="1347310">is</span> <span m="1348630">some</span> <span
  m="1348990">c0</span> <span m="1349710">i</span> <span m="1350190">plus</span>
  <span m="1351120">c</span> <span m="1351450">1p</span> <span
  m="1352440">plus</span> <span m="1353460">c</span> <span m="1353760">2p</span>
  <span m="1354330">squared</span> <span m="1354870">and</span> <span
  m="1355020">c3</span> <span m="1355680">pq.</span></p><p><span
  m="1357200">OK.</span> <span m="1358980">And</span> <span
  m="1359100">finally,</span> <span m="1360090">this</span> <span
  m="1360360">is</span> <span m="1360960">the</span> <span
  m="1361470">step</span> <span m="1361830">we've</span> <span
  m="1362010">been</span> <span m="1362370">almost</span> <span
  m="1363450">ready</span> <span m="1363780">to</span> <span
  m="1363900">do</span> <span m="1364110">but</span> <span
  m="1364260">didn't</span> <span m="1364500">quite</span> <span
  m="1364770">do.</span> <span m="1365520">What</span> <span
  m="1365820">are</span> <span m="1365940">the</span> <span
  m="1366090">eigenvectors--</span> <span m="1368900">what</span> <span
  m="1369330">eigenvectors</span> <span m="1371490">are</span> <span
  m="1372720">its</span> <span m="1374130">eigenvectors?</span> <span
  m="1377850">So</span> <span m="1378060">those</span> <span
  m="1378360">are</span> <span m="1378450">the</span> <span
  m="1378600">eigenvectors</span> <span m="1379440">of</span> <span
  m="1380190">p.</span> <span m="1382730">And</span> <span
  m="1382850">now</span> <span m="1383060">we</span> <span
  m="1383240">have</span> <span m="1383450">just</span> <span
  m="1383810">a</span> <span m="1384740">combination</span> <span
  m="1385670">of</span> <span m="1385870">p's.</span> <span
  m="1387320">So</span> <span m="1387530">I</span> <span
  m="1387710">think</span> <span m="1388820">the</span> <span
  m="1389000">eigenvectors</span> <span m="1390200">I</span> <span
  m="1390320">just</span> <span m="1390620">multiply.</span> <span
  m="1392500">I</span> <span m="1392690">take</span> <span
  m="1393350">that</span> <span m="1393650">same</span> <span
  m="1394070">combination</span> <span m="1394820">of</span> <span
  m="1395330">the</span> <span m="1395690">eigenvectors.</span> <span
  m="1404050">Does</span> <span m="1404260">that</span> <span
  m="1405640">look</span> <span m="1405940">right?</span></p><p><span
  m="1407410">So</span> <span m="1408820">sorry.</span> <span
  m="1411820">I'm</span> <span m="1412000">sorry.</span> <span
  m="1414450">Its</span> <span m="1414730">eigenvectors,</span> <span
  m="1415920">they're</span> <span m="1416290">the</span> <span
  m="1416440">columns</span> <span m="1416950">of</span> <span
  m="1417100">f.</span> <span m="1419250">The</span> <span
  m="1419710">question</span> <span m="1420100">I</span> <span
  m="1420190">meant</span> <span m="1420430">to</span> <span
  m="1420580">ask</span> <span m="1420910">is</span> <span
  m="1421090">what</span> <span m="1421420">are</span> <span
  m="1424870">its</span> <span m="1426070">eigenvalues?</span> <span
  m="1431070">That's</span> <span m="1431410">the</span> <span
  m="1431490">key</span> <span m="1431730">question.</span> <span
  m="1432810">What</span> <span m="1433490">are</span> <span
  m="1433560">the</span> <span m="1433740">eigenvalues?</span> <span
  m="1434970">And</span> <span m="1435120">I</span> <span
  m="1435270">think</span> <span m="1435540">that</span> <span
  m="1435720">if</span> <span m="1435870">I</span> <span m="1435990">just</span>
  <span m="1436260">multiply</span> <span m="1436800">F</span> <span
  m="1437040">times</span> <span m="1437370">c,</span> <span
  m="1438240">I</span> <span m="1438360">get</span> <span m="1438630">the</span>
  <span m="1438870">eigenvalues</span> <span m="1441630">of</span> <span
  m="1441900">the</span> <span m="1442320">matrix</span> <span
  m="1442890">C.</span></p><p><span m="1443880">That's</span> <span
  m="1444240">the</span> <span m="1444390">beauty.</span> <span
  m="1445530">That's</span> <span m="1445830">the</span> <span
  m="1445950">nice</span> <span m="1446340">formula.</span> <span
  m="1449280">If</span> <span m="1449460">my</span> <span
  m="1449640">matrix</span> <span m="1450240">is</span> <span
  m="1450390">just</span> <span m="1450720">P</span> <span
  m="1451110">alone,</span> <span m="1451980">then</span> <span
  m="1452250">this</span> <span m="1452490">is</span> <span
  m="1452690">0,</span> <span m="1453120">1,</span> <span m="1453540">0,</span>
  <span m="1453930">0,</span> <span m="1454920">and</span> <span
  m="1455130">I</span> <span m="1455280">get</span> <span m="1455640">1,</span>
  <span m="1455910">i,</span> <span m="1456465">i</span> <span
  m="1456750">squared,</span> <span m="1457110">i</span> <span
  m="1457260">cubed.</span> <span m="1458400">But</span> <span
  m="1458670">if</span> <span m="1458940">c</span> <span m="1459390">is</span>
  <span m="1459540">some</span> <span m="1459780">other</span> <span
  m="1460020">combination</span> <span m="1460830">of</span> <span
  m="1460950">the</span> <span m="1461070">p's,</span> <span
  m="1462090">then</span> <span m="1462210">I</span> <span
  m="1462330">take</span> <span m="1462600">the</span> <span
  m="1462750">same</span> <span m="1463110">combination</span> <span
  m="1463860">of</span> <span m="1463980">the</span> <span
  m="1464130">eigenvectors</span> <span m="1467310">to</span> <span
  m="1468720">see--</span> <span m="1470130">yeah.</span> <span
  m="1472920">Do</span> <span m="1473010">you</span> <span
  m="1473130">see</span> <span m="1473400">it?</span></p><p><span
  m="1474330">So</span> <span m="1474750">I'm</span> <span
  m="1475260">claiming</span> <span m="1475740">that</span> <span
  m="1475920">I'll</span> <span m="1476130">get</span> <span
  m="1477030">four</span> <span m="1478320">eigenvalues</span> <span
  m="1479970">of</span> <span m="1480510">C</span> <span m="1481080">from</span>
  <span m="1481380">this</span> <span m="1482250">multiplication.</span> <span
  m="1484500">So</span> <span m="1485660">of</span> <span
  m="1485750">course,</span> <span m="1487240">if</span> <span
  m="1487490">there's</span> <span m="1487700">only</span> <span
  m="1488000">c0,</span> <span m="1489140">then</span> <span
  m="1490460">I</span> <span m="1490790">only</span> <span
  m="1491030">get</span> <span m="1491330">c0,</span> <span
  m="1492500">c0,</span> <span m="1492770">c0,</span> <span
  m="1492920">c0.</span> <span m="1494430">It's</span> <span
  m="1495500">four</span> <span m="1495740">times</span> <span
  m="1496130">repeated.</span> <span m="1497280">But</span> <span
  m="1497420">if</span> <span m="1497660">it's</span> <span
  m="1498530">this</span> <span m="1498800">combination,</span> <span
  m="1500090">then</span> <span m="1500840">that</span> <span
  m="1501200">matrix</span> <span m="1501680">multiplication</span> <span
  m="1502520">takes</span> <span m="1502910">the</span> <span
  m="1503030">same</span> <span m="1503360">combination</span> <span
  m="1504110">of--</span> <span m="1504590">this</span> <span
  m="1504770">is</span> <span m="1504980">a</span> <span
  m="1505610">combination</span> <span m="1507830">of</span> <span
  m="1509120">the</span> <span m="1509360">eigenvectors.</span> <span
  m="1511950">And</span> <span m="1513580">that</span> <span
  m="1514150">gives</span> <span m="1514420">us</span> <span
  m="1515860">the</span> <span m="1515980">right</span> <span
  m="1516260">thing.</span> <span m="1517260">OK.</span> <span
  m="1522730">Now</span> <span m="1522940">I</span> <span
  m="1523030">just</span> <span m="1523270">have</span> <span
  m="1523420">one</span> <span m="1523690">more</span> <span
  m="1523960">step</span> <span m="1524320">for</span> <span
  m="1524500">this</span> <span m="1524800">convolution</span> <span
  m="1525550">rule,</span> <span m="1526660">and</span> <span
  m="1526820">then</span> <span m="1527020">I'm</span> <span
  m="1527170">happy.</span></p><p><span m="1538370">Really,</span> <span
  m="1538760">the</span> <span m="1538910">convolution</span> <span
  m="1539690">rule</span> <span m="1540140">is</span> <span
  m="1540830">stating</span> <span m="1541910">what</span> <span
  m="1542390">we--</span> <span m="1544610">it's</span> <span
  m="1545320">stating</span> <span m="1546620">a</span> <span
  m="1546680">relation</span> <span m="1547250">between</span> <span
  m="1547640">multiplication,</span> <span m="1548610">which</span> <span
  m="1548780">we</span> <span m="1548900">saw</span> <span
  m="1549200">here,</span> <span m="1550610">and</span> <span
  m="1551950">the</span> <span m="1552410">convolution,</span> <span
  m="1553250">which</span> <span m="1553520">we</span> <span
  m="1553670">saw</span> <span m="1553970">for the</span> <span
  m="1554230">coefficients.</span> <span m="1556070">So</span> <span
  m="1556250">the</span> <span m="1556370">convolution</span> <span
  m="1557090">rule</span> <span m="1557360">is</span> <span m="1557540">a</span>
  <span m="1557630">connection</span> <span m="1558230">between</span> <span
  m="1558680">multiplying</span> <span m="1560270">and</span> <span
  m="1562340">convolution.</span> <span m="1564150">And</span> <span
  m="1565770">so</span> <span m="1566040">let</span> <span m="1566160">me</span>
  <span m="1566340">say</span> <span m="1566610">what</span> <span
  m="1566880">that</span> <span m="1567090">convolution</span> <span
  m="1567720">rule</span> <span m="1567990">is</span> <span
  m="1568180">and</span> <span m="1568290">let</span> <span
  m="1568410">me</span> <span m="1568560">write</span> <span
  m="1568830">it</span> <span m="1569490">correctly.</span></p><p><span
  m="1575000">So</span> <span m="1575210">here</span> <span m="1575480">I</span>
  <span m="1576140">take</span> <span m="1576560">a</span> <span
  m="1578010">cyclic</span> <span m="1578640">convolution.</span> <span
  m="1581060">I'm</span> <span m="1581300">dealing</span> <span
  m="1581660">with</span> <span m="1581810">square</span> <span
  m="1582170">matrices.</span> <span m="1582860">Everything</span> <span
  m="1583280">is</span> <span m="1583370">cyclic</span> <span
  m="1583940">here.</span> <span m="1585200">And</span> <span
  m="1585440">then</span> <span m="1586670">I</span> <span
  m="1586820">get--</span> <span m="1588440">if</span> <span
  m="1588590">I</span> <span m="1588710">multiply</span> <span
  m="1589220">by</span> <span m="1589430">F,</span> <span
  m="1589720">what</span> <span m="1589910">do</span> <span m="1590060">I</span>
  <span m="1590180">have</span> <span m="1590420">now?</span> <span
  m="1592190">What</span> <span m="1592400">does</span> <span
  m="1592640">that</span> <span m="1592820">represent?</span> <span
  m="1594500">This</span> <span m="1594890">was</span> <span
  m="1595280">c</span> <span m="1595910">and</span> <span m="1596120">d,</span>
  <span m="1596540">and</span> <span m="1596750">I</span> <span
  m="1596870">convolve</span> <span m="1597590">them.</span> <span
  m="1598520">So</span> <span m="1598790">I</span> <span m="1598940">got</span>
  <span m="1600350">another</span> <span m="1600860">circulant</span> <span
  m="1601460">matrix.</span></p><p><span m="1603290">So</span> <span
  m="1603560">up</span> <span m="1603710">here,</span> <span
  m="1603930">the</span> <span m="1604070">multiplication</span> <span
  m="1604970">of</span> <span m="1605930">matrices</span> <span
  m="1606860">is</span> <span m="1607040">C</span> <span
  m="1607490">times</span> <span m="1607940">D.</span> <span
  m="1610784">I</span> <span m="1611260">want</span> <span m="1611470">to</span>
  <span m="1611560">connect</span> <span m="1612220">multiplying</span> <span
  m="1612910">those</span> <span m="1613180">matrices</span> <span
  m="1614080">with</span> <span m="1614860">convolving</span> <span
  m="1615970">the</span> <span m="1616570">c's.</span> <span
  m="1618310">I</span> <span m="1618430">want</span> <span m="1618610">to</span>
  <span m="1619090">make</span> <span m="1619340">that</span> <span
  m="1619570">connection.</span> <span m="1622570">And</span> <span
  m="1623410">that</span> <span m="1623590">connection</span> <span
  m="1624160">is</span> <span m="1624340">the</span> <span
  m="1624460">convolution</span> <span m="1625240">rule.</span> <span
  m="1628120">So</span> <span m="1628330">this</span> <span
  m="1628600">would</span> <span m="1628840">be</span> <span
  m="1629020">the</span> <span m="1629200">eigenvalues</span> <span
  m="1634010">of</span> <span m="1635000">CD.</span></p><p><span
  m="1639160">Let's</span> <span m="1639430">just</span> <span
  m="1639610">pause</span> <span m="1640030">there.</span> <span
  m="1641080">Why</span> <span m="1641320">am</span> <span m="1641440">I</span>
  <span m="1641560">looking</span> <span m="1641920">at</span> <span
  m="1642010">the</span> <span m="1642160">eigenvalues</span> <span
  m="1642880">of</span> <span m="1643030">CD?</span> <span
  m="1643990">Because</span> <span m="1644230">if</span> <span
  m="1644380">I</span> <span m="1644530">do</span> <span m="1644740">that</span>
  <span m="1644980">multiplication,</span> <span m="1647150">I</span> <span
  m="1647250">get</span> <span m="1647350">another</span> <span
  m="1647790">Toeplitz</span> <span m="1648310">matrix,</span> <span
  m="1650170">C</span> <span m="1650440">times</span> <span
  m="1650860">D.</span> <span m="1652390">And</span> <span
  m="1652810">the</span> <span m="1654130">polynomial--</span> <span
  m="1654820">the</span> <span m="1655030">coefficients</span> <span
  m="1655810">associated</span> <span m="1656740">on</span> <span
  m="1656950">the</span> <span m="1657070">diagonals</span> <span
  m="1657850">of</span> <span m="1658150">C</span> <span
  m="1658510">times</span> <span m="1658870">D</span> <span
  m="1659320">are</span> <span m="1660370">the</span> <span
  m="1661480">coefficients</span> <span m="1662170">of</span> <span
  m="1662290">the</span> <span m="1662380">convolution.</span> <span
  m="1663650">So</span> <span m="1664410">its</span> <span
  m="1664660">diagonals</span> <span m="1671000">come</span> <span
  m="1671420">from</span> <span m="1675830">convolving</span> <span
  m="1676520">c</span> <span m="1677120">with</span> <span m="1677540">d</span>
  <span m="1678400">cyclically.</span> <span m="1680390">OK.</span></p><p><span
  m="1683050">Now</span> <span m="1683290">I</span> <span
  m="1683380">want</span> <span m="1683560">to</span> <span
  m="1683620">find</span> <span m="1683890">the</span> <span
  m="1684130">same</span> <span m="1684490">eigenvalues</span> <span
  m="1685990">in</span> <span m="1686120">a</span> <span
  m="1686200">second</span> <span m="1686590">way</span> <span
  m="1687160">and</span> <span m="1687400">match--</span> <span
  m="1687910">and</span> <span m="1688210">the</span> <span
  m="1688360">equation</span> <span m="1689260">will</span> <span
  m="1689440">be</span> <span m="1689710">the</span> <span
  m="1689860">convolution</span> <span m="1690550">rule.</span> <span
  m="1691300">So</span> <span m="1691720">how</span> <span
  m="1691960">can</span> <span m="1692140">I</span> <span
  m="1692230">find</span> <span m="1692500">the</span> <span
  m="1692650">eigenvalues</span> <span m="1693250">of</span> <span
  m="1693370">CD?</span> <span m="1694720">Well,</span> <span
  m="1694960">amazingly,</span> <span m="1696130">they</span> <span
  m="1696430">are</span> <span m="1697480">the</span> <span
  m="1697690">eigenvalues</span> <span m="1698710">of</span> <span
  m="1698860">C</span> <span m="1704260">times</span> <span
  m="1704890">the</span> <span m="1705070">eigenvalues</span> <span
  m="1705850">of</span> <span m="1705970">D.</span> <span m="1714280">I'm</span>
  <span m="1714400">going</span> <span m="1714540">to</span> <span
  m="1714670">test</span> <span m="1715030">this</span> <span
  m="1715330">rule</span> <span m="1715810">on</span> <span m="1715960">2</span>
  <span m="1716200">by</span> <span m="1716410">2.</span> <span
  m="1716770">So</span> <span m="1717610">you'll</span> <span
  m="1717820">see</span> <span m="1718120">everything</span> <span
  m="1718570">happening.</span> <span m="1719820">So</span> <span
  m="1719860">this</span> <span m="1720100">is</span> <span
  m="1720200">the</span> <span m="1720310">main--</span> <span
  m="1720640">this</span> <span m="1720910">is</span> <span
  m="1721010">the</span> <span m="1721120">fact</span> <span
  m="1721450">that</span> <span m="1721630">I</span> <span
  m="1721720">want</span> <span m="1721930">to</span> <span
  m="1721990">use.</span></p><p><span m="1726880">Because</span> <span
  m="1727210">C</span> <span m="1727510">and</span> <span m="1727610">D</span>
  <span m="1727840">commute.</span> <span m="1729460">C</span> <span
  m="1729730">and</span> <span m="1729850">D</span> <span
  m="1730180">commute.</span> <span m="1730540">They</span> <span
  m="1730690">have</span> <span m="1730810">the</span> <span
  m="1730930">same</span> <span m="1731470">eigenvectors.</span> <span
  m="1732970">And</span> <span m="1733360">then</span> <span
  m="1733720">the</span> <span m="1733900">eigenvalues</span> <span
  m="1734800">just</span> <span m="1735040">multiply.</span> <span
  m="1736900">So</span> <span m="1737110">I</span> <span m="1737200">can</span>
  <span m="1737410">multiply.</span> <span m="1738760">I</span> <span
  m="1738850">can</span> <span m="1739030">get</span> <span
  m="1739240">that</span> <span m="1739540">in</span> <span m="1739660">a</span>
  <span m="1739720">second</span> <span m="1740170">way</span> <span
  m="1741280">by</span> <span m="1741490">taking</span> <span
  m="1741940">the</span> <span m="1742090">eigenvalues</span> <span
  m="1742930">of</span> <span m="1743110">c</span> <span m="1744850">and</span>
  <span m="1745000">multiplying</span> <span m="1745660">those</span> <span
  m="1746050">by</span> <span m="1746290">the</span> <span
  m="1746410">eigenvalues</span> <span m="1747160">of</span> <span
  m="1747310">d.</span> <span m="1750040">And</span> <span m="1750670">I</span>
  <span m="1750790">multiply</span> <span m="1752470">component</span> <span
  m="1752950">by</span> <span m="1753130">component.</span> <span
  m="1753790">I</span> <span m="1753880">multiply</span> <span
  m="1754360">the</span> <span m="1754570">eigenvalue</span> <span
  m="1755560">for</span> <span m="1755920">the</span> <span
  m="1757000">all</span> <span m="1757210">1s</span> <span
  m="1757690">vector</span> <span m="1758560">by</span> <span
  m="1758800">the</span> <span m="1758950">eigenvalue</span> <span
  m="1759580">for</span> <span m="1759730">the</span> <span
  m="1759880">all</span> <span m="1760050">1s</span> <span
  m="1760600">vector.</span></p><p><span m="1762790">Do</span> <span
  m="1762880">you</span> <span m="1762970">know</span> <span
  m="1763150">this</span> <span m="1763390">MATLAB</span> <span
  m="1763870">command?</span> <span m="1765760">Component</span> <span
  m="1766360">by</span> <span m="1766600">component</span> <span
  m="1767200">multiplication?</span> <span m="1768380">This</span> <span
  m="1768490">is</span> <span m="1769450">an</span> <span
  m="1769570">important</span> <span m="1770050">one.</span> <span
  m="1770690">There's</span> <span m="1770950">a</span> <span
  m="1771100">guy's</span> <span m="1771520">name</span> <span
  m="1771970">is</span> <span m="1772180">also</span> <span
  m="1772570">associated</span> <span m="1773260">with</span> <span
  m="1773500">that.</span> <span m="1775110">So</span> <span
  m="1775390">that's</span> <span m="1775660">a</span> <span
  m="1775720">vector.</span> <span m="1776470">That's</span> <span
  m="1776770">a</span> <span m="1776830">vector.</span> <span
  m="1777400">And</span> <span m="1777640">what</span> <span
  m="1777940">comes</span> <span m="1778300">out</span> <span
  m="1778540">of</span> <span m="1778630">that</span> <span
  m="1778870">operation?</span> <span m="1780850">If</span> <span
  m="1781060">I</span> <span m="1781150">have</span> <span m="1781360">a</span>
  <span m="1781420">vector</span> <span m="1781840">with</span> <span
  m="1782020">three</span> <span m="1782290">components.</span> <span
  m="1783710">So</span> <span m="1783850">n</span> <span m="1784030">is</span>
  <span m="1784210">3</span> <span m="1784630">here.</span> <span
  m="1785590">And</span> <span m="1785860">I</span> <span m="1785980">do</span>
  <span m="1786280">point</span> <span m="1786700">star</span> <span
  m="1787870">or</span> <span m="1787990">dot</span> <span
  m="1788350">star.</span> <span m="1789580">I'm</span> <span
  m="1789670">not</span> <span m="1789880">sure</span> <span
  m="1790090">what</span> <span m="1790600">people</span> <span
  m="1790960">usually</span> <span m="1791380">say.</span> <span
  m="1792580">Component</span> <span m="1793090">by</span> <span
  m="1793270">component,</span> <span m="1793900">a</span> <span
  m="1793990">three</span> <span m="1794350">component</span> <span
  m="1794770">vector</span> <span m="1795190">times</span> <span
  m="1795490">a</span> <span m="1795550">three</span> <span
  m="1795820">component</span> <span m="1796330">vector,</span> <span
  m="1796750">I</span> <span m="1796900">get</span> <span m="1797230">a</span>
  <span m="1800030">three</span> <span m="1800390">component</span> <span
  m="1800900">vector,</span> <span m="1801860">just</span> <span
  m="1802190">like</span> <span m="1802460">that.</span> <span
  m="1803870">So</span> <span m="1804080">this</span> <span
  m="1804380">is</span> <span m="1804620">the</span> <span
  m="1804740">convolution</span> <span m="1805520">rule.</span> <span
  m="1807860">That's</span> <span m="1808160">the</span> <span
  m="1808250">convolution</span> <span m="1808625">rule.</span></p><p><span
  m="1812050">And</span> <span m="1812210">the</span> <span
  m="1812300">proof</span> <span m="1813530">is</span> <span
  m="1814610">the</span> <span m="1814760">fact</span> <span
  m="1815150">that</span> <span m="1816300">when</span> <span
  m="1816500">matrices</span> <span m="1817340">commute,</span> <span
  m="1818390">the</span> <span m="1819740">eigenvalues</span> <span
  m="1820400">of</span> <span m="1820490">the</span> <span
  m="1820580">product</span> <span m="1821180">are</span> <span
  m="1821300">just</span> <span m="1821750">these</span> <span
  m="1822140">eigenvalues</span> <span m="1822920">times</span> <span
  m="1823220">these</span> <span m="1823490">eigenvalues,</span> <span
  m="1824360">because</span> <span m="1824840">they</span> <span
  m="1825020">have</span> <span m="1825230">the</span> <span
  m="1825680">same--</span> <span m="1826520">the</span> <span
  m="1826930">eigenvectors</span> <span m="1827630">are</span> <span
  m="1827750">always</span> <span m="1828200">the</span> <span
  m="1828350">same</span> <span m="1829190">here</span> <span
  m="1829340">for</span> <span m="1829580">all</span> <span
  m="1829760">these</span> <span m="1830250">circulants.</span> <span
  m="1831650">So</span> <span m="1831800">there's</span> <span
  m="1832130">the</span> <span m="1832250">convolution</span> <span
  m="1833000">rule</span> <span m="1833720">that</span> <span
  m="1833930">I</span> <span m="1834110">can</span> <span
  m="1834870">convolve</span> <span m="1836630">and</span> <span
  m="1836750">then</span> <span m="1836930">transform.</span> <span
  m="1838970">Or</span> <span m="1840170">I</span> <span m="1840260">can</span>
  <span m="1840470">transform</span> <span m="1841190">separately</span> <span
  m="1842480">and</span> <span m="1842630">then</span> <span
  m="1842900">multiply.</span></p><p><span m="1845490">So</span> <span
  m="1845840">I</span> <span m="1846340">just</span> <span
  m="1846590">maybe</span> <span m="1846930">better</span> <span
  m="1847190">right</span> <span m="1847490">that</span> <span
  m="1848570">convolution</span> <span m="1849280">rule.</span> <span
  m="1850700">Let's</span> <span m="1850910">call</span> <span
  m="1851150">it</span> <span m="1851280">the</span> <span m="1851430">C</span>
  <span m="1851960">rule.</span> <span m="1855140">Convolve</span> <span
  m="1860330">then</span> <span m="1861860">transform</span> <span
  m="1863710">by</span> <span m="1864010">F.</span> <span m="1868170">Or</span>
  <span m="1872670">transform</span> <span m="1877690">separately</span> <span
  m="1882380">by</span> <span m="1882700">F.</span> <span m="1884650">And</span>
  <span m="1884830">then</span> <span m="1887800">multiply</span> <span
  m="1892990">point</span> <span m="1893456">one.</span> <span
  m="1898120">Element</span> <span m="1898510">by</span> <span
  m="1898780">element.</span> <span m="1899950">Component</span> <span
  m="1900490">by</span> <span m="1900730">component.</span> <span
  m="1905250">OK.</span> <span m="1907690">So</span> <span
  m="1907870">that's</span> <span m="1908230">the</span> <span
  m="1908320">convolution</span> <span m="1909040">rule.</span></p><p><span
  m="1911870">And</span> <span m="1912110">why</span> <span
  m="1912500">is</span> <span m="1912720">it</span> <span
  m="1914410">sort</span> <span m="1914680">of--</span> <span
  m="1914980">why</span> <span m="1915280">is</span> <span m="1915400">it</span>
  <span m="1915520">so</span> <span m="1915730">important?</span> <span
  m="1916750">Because</span> <span m="1917890">transforming</span> <span
  m="1918760">by</span> <span m="1919420">F,</span> <span
  m="1919950">multiplying</span> <span m="1920500">by</span> <span
  m="1920710">the</span> <span m="1920830">Fourier</span> <span
  m="1921310">matrix,</span> <span m="1922060">is</span> <span
  m="1922390">extremely</span> <span m="1922990">fast</span> <span
  m="1923470">by</span> <span m="1923680">the</span> <span
  m="1923830">FFT.</span> <span m="1925630">So</span> <span
  m="1925930">it's</span> <span m="1926440">useful</span> <span
  m="1929620">because</span> <span m="1933670">of</span> <span
  m="1933850">the</span> <span m="1934030">FFT,</span> <span
  m="1935910">the</span> <span m="1936010">Fast</span> <span
  m="1936460">Fourier</span> <span m="1936760">Transform,</span> <span
  m="1938110">to</span> <span m="1939280">multiply.</span> <span
  m="1946570">Or</span> <span m="1946780">to</span> <span
  m="1947050">transform.</span> <span m="1948370">Whichever.</span> <span
  m="1949970">Equal to</span> <span m="1950420">transform.</span> <span
  m="1952660">Multiply</span> <span m="1953090">by</span> <span
  m="1953400">F</span> <span m="1955870">transform.</span> <span
  m="1963370">So</span> <span m="1963950">it's</span> <span
  m="1964660">the</span> <span m="1966010">presence</span> <span
  m="1966550">of</span> <span m="1966640">the</span> <span
  m="1966820">FFT</span> <span m="1967540">that</span> <span
  m="1967690">makes</span> <span m="1968080">this--</span> <span
  m="1968980">it</span> <span m="1969220">gives</span> <span
  m="1969550">us</span> <span m="1969790">really</span> <span
  m="1970180">two</span> <span m="1970450">different</span> <span
  m="1970780">ways</span> <span m="1971080">to</span> <span
  m="1971200">do</span> <span m="1971440">it.</span></p><p><span
  m="1971930">In</span> <span m="1971950">fact,</span> <span
  m="1974320">which</span> <span m="1974560">is</span> <span
  m="1974710">the</span> <span m="1974800">faster</span> <span
  m="1975280">way?</span> <span m="1976990">So</span> <span
  m="1977070">we</span> <span m="1977220">can</span> <span
  m="1977430">produce</span> <span m="1978150">the</span> <span
  m="1978300">same</span> <span m="1980490">result</span> <span
  m="1983600">this</span> <span m="1983900">way</span> <span
  m="1985550">or</span> <span m="1985910">this</span> <span
  m="1986210">way.</span> <span m="1989280">And</span> <span
  m="1990650">if</span> <span m="1990890">I</span> <span
  m="1991040">don't</span> <span m="1991430">count</span> <span
  m="1991850">the</span> <span m="1991970">cost</span> <span
  m="1992640">of--</span> <span m="1992910">if</span> <span
  m="1993410">the</span> <span m="1993580">cost</span> <span
  m="1993950">of</span> <span m="1994100">multiplying</span> <span
  m="1994700">by</span> <span m="1994940">F</span> <span m="1995180">is</span>
  <span m="1995330">low,</span> <span m="1996470">because</span> <span
  m="1996920">I</span> <span m="1997010">have</span> <span
  m="1997250">the</span> <span m="1997520">FFT,</span> <span
  m="1998330">which</span> <span m="1998570">would</span> <span
  m="1998780">you</span> <span m="1998930">do?</span> <span
  m="2000400">Which</span> <span m="2000730">would</span> <span
  m="2000910">you</span> <span m="2001030">do?</span> <span
  m="2002260">So</span> <span m="2002950">let</span> <span m="2003100">me</span>
  <span m="2003220">just</span> <span m="2003760">think</span> <span
  m="2004150">aloud</span> <span m="2004510">before</span> <span
  m="2004870">we</span> <span m="2005020">answer</span> <span
  m="2005350">that</span> <span m="2005530">question,</span> <span
  m="2006010">and</span> <span m="2006130">then</span> <span
  m="2006310">we're</span> <span m="2007420">good.</span></p><p><span
  m="2010600">So</span> <span m="2010780">my</span> <span
  m="2011530">vectors</span> <span m="2012160">have</span> <span
  m="2012430">n</span> <span m="2012670">components.</span> <span
  m="2014430">So</span> <span m="2014650">one</span> <span
  m="2014980">way</span> <span m="2015280">I</span> <span m="2015430">can</span>
  <span m="2015610">do</span> <span m="2015850">is</span> <span
  m="2016000">to</span> <span m="2016150">do</span> <span
  m="2016360">convolution.</span> <span m="2018370">How</span> <span
  m="2018520">many</span> <span m="2018790">steps</span> <span
  m="2019210">is</span> <span m="2019390">that?</span> <span
  m="2020920">If</span> <span m="2021100">I</span> <span m="2021280">take</span>
  <span m="2021550">a</span> <span m="2021640">vector</span> <span
  m="2022060">with n</span> <span m="2022480">components</span> <span
  m="2023240">and</span> <span m="2023260">I</span> <span
  m="2023470">convolve</span> <span m="2023920">with</span> <span
  m="2024090">a</span> <span m="2024160">vector</span> <span m="2024520">with
  n</span> <span m="2024850">components,</span> <span m="2025870">how</span>
  <span m="2025960">many</span> <span m="2026230">little</span> <span
  m="2026590">multiplications</span> <span m="2027550">do</span> <span
  m="2027700">I</span> <span m="2027820">have</span> <span m="2028000">to</span>
  <span m="2028120">do?</span> <span m="2030100">N</span> <span
  m="2030580">squared,</span> <span m="2031390">right?</span> <span
  m="2032250">Because</span> <span m="2032500">each</span> <span
  m="2032800">of</span> <span m="2032860">the</span> <span
  m="2033070">c's</span> <span m="2033610">has</span> <span
  m="2033820">to</span> <span m="2033910">multiply</span> <span
  m="2034420">each</span> <span m="2034660">of</span> <span
  m="2034780">the</span> <span m="2034900">d's.</span> <span
  m="2035830">So</span> <span m="2036040">that</span> <span
  m="2036280">takes</span> <span m="2036670">N</span> <span
  m="2036880">squared.</span> <span m="2039940">And</span> <span
  m="2040420">Fourier</span> <span m="2041170">is</span> <span
  m="2041980">cheap.</span> <span m="2042800">It's</span> <span
  m="2043090">N</span> <span m="2043330">log</span> <span m="2043640">N.</span>
  <span m="2048510">Log</span> <span m="2048760">to</span> <span
  m="2048940">base</span> <span m="2049239">2.</span> <span
  m="2050881">So</span> <span m="2051320">the</span> <span
  m="2051440">left</span> <span m="2051739">hand</span> <span
  m="2051920">side</span> <span m="2052790">is</span> <span
  m="2054020">effectively</span> <span m="2054710">N</span> <span
  m="2054980">cubed.</span></p><p><span m="2056090">What</span> <span
  m="2056300">about</span> <span m="2056750">this</span> <span
  m="2057080">one?</span> <span m="2059179">How</span> <span
  m="2059330">many</span> <span m="2061550">to</span> <span
  m="2061730">do</span> <span m="2062030">these</span> <span
  m="2062330">two</span> <span m="2062570">guys?</span> <span
  m="2065920">To</span> <span m="2066080">find</span> <span
  m="2066379">the</span> <span m="2068480">Fourier</span> <span
  m="2068870">transform</span> <span m="2069500">to</span> <span
  m="2069620">multiply</span> <span m="2070190">by</span> <span
  m="2070400">the</span> <span m="2070520">matrix</span> <span
  m="2071110">F.</span> <span m="2072210">OK,</span> <span
  m="2072690">those</span> <span m="2072969">are</span> <span
  m="2073100">fast</span> <span m="2073489">again.</span> <span
  m="2073850">That's</span> <span m="2074179">just</span> <span
  m="2074480">I've</span> <span m="2074650">got</span> <span
  m="2074870">two</span> <span m="2075620">multiplications</span> <span
  m="2076429">by</span> <span m="2076699">F.</span> <span m="2076889">So</span>
  <span m="2077060">that's</span> <span m="2077360">2</span> <span
  m="2077739">N</span> <span m="2077929">log</span> <span m="2078230">N.</span>
  <span m="2081449">And</span> <span m="2082020">what's</span> <span
  m="2082409">the</span> <span m="2082530">cost</span> <span
  m="2083130">of</span> <span m="2083400">this?</span> <span
  m="2087340">I</span> <span m="2087460">have</span> <span m="2087639">a</span>
  <span m="2087880">vector</span> <span m="2088270">with n</span> <span
  m="2088630">components.</span> <span m="2090850">Dot</span> <span
  m="2091179">star</span> <span m="2091840">vector.</span> <span
  m="2092199">Another</span> <span m="2092530">vector</span> <span
  m="2092860">with n</span> <span m="2093250">components.</span></p><p><span
  m="2093889">How</span> <span m="2094000">many</span> <span
  m="2094270">little</span> <span m="2094540">multiplications</span> <span
  m="2095409">do</span> <span m="2095530">I</span> <span m="2095650">have</span>
  <span m="2095800">to</span> <span m="2095949">do</span> <span
  m="2096310">for</span> <span m="2096590">a</span> <span
  m="2097139">Hadamard</span> <span m="2097900">product</span> <span
  m="2098540">or</span> <span m="2099570">a</span> <span
  m="2099880">component</span> <span m="2100420">by</span> <span
  m="2100600">component</span> <span m="2101140">product?</span> <span
  m="2102490">N,</span> <span m="2103090">only</span> <span
  m="2103480">n.</span> <span m="2106770">Plus</span> <span
  m="2107130">N.</span> <span m="2108170">Yeah,</span> <span
  m="2109290">maybe</span> <span m="2109650">I</span> <span
  m="2109830">should</span> <span m="2110070">have</span> <span
  m="2110280">made</span> <span m="2110520">that</span> <span
  m="2110670">plus.</span> <span m="2113100">I</span> <span
  m="2113190">had</span> <span m="2113400">two.</span> <span
  m="2114280">No,</span> <span m="2114450">I</span> <span m="2114560">had</span>
  <span m="2114670">one</span> <span m="2115260">N</span> <span
  m="2115470">log</span> <span m="2115770">N.</span> <span
  m="2117000">Plus</span> <span m="2117750">it</span> <span
  m="2117840">took</span> <span m="2118080">N</span> <span
  m="2118260">squared</span> <span m="2118650">to</span> <span
  m="2118740">find</span> <span m="2119070">that</span> <span
  m="2119280">vector.</span> <span m="2120280">And</span> <span
  m="2120360">then</span> <span m="2120630">N</span> <span
  m="2120840">log</span> <span m="2121020">N.</span> <span m="2121380">So</span>
  <span m="2121680">it's</span> <span m="2123930">effectively</span> <span
  m="2124530">N</span> <span m="2124830">squared.</span> <span
  m="2125700">But</span> <span m="2125910">this</span> <span
  m="2126180">one</span> <span m="2127350">where</span> <span
  m="2127950">I</span> <span m="2128190">do</span> <span m="2128460">the</span>
  <span m="2128610">N</span> <span m="2128790">log N</span> <span
  m="2129360">twice</span> <span m="2130380">and</span> <span
  m="2130560">then</span> <span m="2132120">it</span> <span
  m="2132300">only</span> <span m="2132540">takes</span> <span
  m="2132870">me</span> <span m="2133080">N more.</span> <span
  m="2134160">So</span> <span m="2134400">this</span> <span
  m="2134640">is</span> <span m="2134790">the</span> <span
  m="2134910">fast</span> <span m="2135360">way.</span></p><p><span
  m="2141260">So</span> <span m="2141440">if</span> <span m="2141530">you</span>
  <span m="2141620">wanted</span> <span m="2141920">to</span> <span
  m="2141980">multiply</span> <span m="2142550">two</span> <span
  m="2142880">really</span> <span m="2143180">big,</span> <span
  m="2144020">long</span> <span m="2144380">integers,</span> <span
  m="2145940">as</span> <span m="2146210">you</span> <span
  m="2146300">would</span> <span m="2146630">want</span> <span
  m="2146960">to</span> <span m="2147050">do</span> <span m="2148370">in</span>
  <span m="2148580">cryptography,</span> <span m="2150560">if</span> <span
  m="2150710">you</span> <span m="2150860">had</span> <span
  m="2151100">two</span> <span m="2151550">long</span> <span
  m="2151850">integers,</span> <span m="2152460">say,</span> <span
  m="2152680">of</span> <span m="2152870">length</span> <span
  m="2153260">125,</span> <span m="2155330">126,</span> <span
  m="2157430">128</span> <span m="2158360">components,</span> <span
  m="2160820">to</span> <span m="2161030">multiply</span> <span
  m="2161630">those,</span> <span m="2162050">you</span> <span
  m="2162170">would</span> <span m="2162350">be</span> <span
  m="2162500">better</span> <span m="2162890">off</span> <span
  m="2163220">to</span> <span m="2163880">separately</span> <span
  m="2164610">take</span> <span m="2165760">the</span> <span
  m="2167150">cyclic</span> <span m="2167870">transform</span> <span
  m="2168680">of</span> <span m="2168860">each</span> <span
  m="2169100">of</span> <span m="2169220">those</span> <span
  m="2169550">128</span> <span m="2170480">guys</span> <span
  m="2171770">and</span> <span m="2174170">do</span> <span m="2174380">it</span>
  <span m="2174470">this</span> <span m="2174740">way.</span> <span
  m="2177590">Take</span> <span m="2177950">the</span> <span
  m="2178020">transforms,</span> <span m="2179360">do</span> <span
  m="2179630">the</span> <span m="2179960">component</span> <span
  m="2180530">by</span> <span m="2180710">component</span> <span
  m="2181310">product,</span> <span m="2182180">and</span> <span
  m="2182330">then</span> <span m="2182960">transform</span> <span
  m="2183590">back</span> <span m="2183920">to</span> <span
  m="2184070">get</span> <span m="2184310">that.</span> <span
  m="2188202">The</span> <span m="2188590">convolution</span> <span
  m="2189250">rule</span> <span m="2189550">is</span> <span
  m="2190120">what</span> <span m="2190330">makes</span> <span
  m="2190630">that</span> <span m="2190840">go.</span></p><p><span
  m="2195184">Oh,</span> <span m="2195670">one</span> <span
  m="2196030">more</span> <span m="2196360">thought,</span> <span
  m="2196870">I</span> <span m="2196960">guess,</span> <span
  m="2197650">about</span> <span m="2198010">all</span> <span
  m="2198190">this</span> <span m="2198460">convolution</span> <span
  m="2199240">stuff.</span> <span m="2200470">Suppose</span> <span
  m="2200980">we're</span> <span m="2201130">in</span> <span
  m="2201580">2D.</span> <span m="2203140">We</span> <span
  m="2203290">have</span> <span m="2203440">to</span> <span
  m="2203560">think</span> <span m="2204970">what</span> <span
  m="2205180">is</span> <span m="2205360">a</span> <span m="2205420">two</span>
  <span m="2205780">dimensional</span> <span m="2206440">convolution?</span>
  <span m="2208060">What</span> <span m="2208270">does</span> <span
  m="2208390">this</span> <span m="2208600">become</span> <span
  m="2210690">in</span> <span m="2210910">two</span> <span
  m="2211180">dimensions?</span> <span m="2212320">Suppose</span> <span
  m="2212830">we</span> <span m="2212980">have</span> <span
  m="2213160">functions.</span> <span m="2214400">So</span> <span
  m="2214480">now</span> <span m="2215050">I'm gonna</span> <span
  m="2215240">do</span> <span m="2215690">2D</span> <span
  m="2217240">functions</span> <span m="2217960">of</span> <span
  m="2218440">x</span> <span m="2218770">and</span> <span m="2218950">y.</span>
  <span m="2221020">Periodic</span> <span m="2221710">or</span> <span
  m="2221800">not</span> <span m="2222070">periodic.</span> <span
  m="2223750">But</span> <span m="2225510">what's</span> <span
  m="2226190">a</span> <span m="2226330">convolution?</span> <span
  m="2227050">What's</span> <span m="2227380">the</span> <span
  m="2227950">operation</span> <span m="2228640">we</span> <span
  m="2228760">have</span> <span m="2228970">to</span> <span
  m="2229120">do</span> <span m="2229420">in</span> <span m="2229780">two</span>
  <span m="2230080">dimensions?</span></p><p><span m="2231040">Well,</span>
  <span m="2231310">it's</span> <span m="2231520">a</span> <span
  m="2231580">double</span> <span m="2231940">integral,</span> <span
  m="2232360">of</span> <span m="2232480">course.</span> <span
  m="2234490">t</span> <span m="2234880">and</span> <span m="2235060">u.</span>
  <span m="2235990">We</span> <span m="2236300">would</span> <span
  m="2236530">do</span> <span m="2236770">f</span> <span m="2237220">of</span>
  <span m="2238360">t</span> <span m="2239620">and</span> <span
  m="2241480">u</span> <span m="2242740">times</span> <span m="2243130">g</span>
  <span m="2244000">of</span> <span m="2244780">x</span> <span
  m="2245230">minus</span> <span m="2245830">ty</span> <span
  m="2247240">minus</span> <span m="2247840">u</span> <span
  m="2248770">dtdu.</span> <span m="2253710">And</span> <span
  m="2254020">that</span> <span m="2254230">would</span> <span
  m="2254410">produce</span> <span m="2254980">a</span> <span
  m="2255070">function.</span> <span m="2256510">So</span> <span
  m="2256750">I'm</span> <span m="2256930">convolving</span> <span
  m="2259480">a</span> <span m="2259540">function</span> <span
  m="2260050">of</span> <span m="2260140">x</span> <span m="2260410">and</span>
  <span m="2260530">y</span> <span m="2260920">with</span> <span
  m="2261100">another</span> <span m="2261520">function</span> <span
  m="2262000">of</span> <span m="2262120">x and</span> <span
  m="2262510">y.</span> <span m="2263410">And</span> <span
  m="2263530">again,</span> <span m="2264250">I'm</span> <span
  m="2264430">looking</span> <span m="2264880">for</span> <span
  m="2265870">this.</span> <span m="2267016">This</span> <span
  m="2267400">is</span> <span m="2267580">the</span> <span
  m="2267730">key</span> <span m="2268090">to</span> <span
  m="2268210">watch</span> <span m="2268600">for.</span> <span
  m="2269230">x</span> <span m="2269530">minus</span> <span
  m="2269980">t.</span> <span m="2270850">y</span> <span
  m="2271270">minus</span> <span m="2271780">u.</span> <span
  m="2272650">That's</span> <span m="2273040">the</span> <span
  m="2273220">signal</span> <span m="2273820">of</span> <span
  m="2273940">a</span> <span m="2274060">convolution</span> <span
  m="2275610">integral.</span> <span m="2277420">So</span> <span
  m="2278470">that's</span> <span m="2278710">what</span> <span
  m="2278860">we</span> <span m="2279010">would</span> <span
  m="2279190">have</span> <span m="2279430">in</span> <span
  m="2279550">2D.</span></p><p><span m="2281750">In</span> <span
  m="2281960">general,</span> <span m="2283130">So</span> <span
  m="2284030">maybe</span> <span m="2285380">now</span> <span
  m="2285680">my</span> <span m="2285890">final</span> <span
  m="2286340">thought</span> <span m="2286700">is</span> <span
  m="2286970">to</span> <span m="2288770">move</span> <span
  m="2289250">to</span> <span m="2289400">think</span> <span
  m="2289670">about</span> <span m="2290000">two</span> <span
  m="2290300">dimensional</span> <span m="2290900">matrices</span> <span
  m="2293450">and</span> <span m="2293690">their</span> <span
  m="2293870">products</span> <span m="2294990">and</span> <span
  m="2295010">so</span> <span m="2295250">on.</span> <span
  m="2295530">And</span> <span m="2295550">this</span> <span
  m="2295820">is</span> <span m="2296000">why</span> <span
  m="2296390">you</span> <span m="2296600">need</span> <span
  m="2296870">them.</span> <span m="2297080">Because</span> <span
  m="2298520">if</span> <span m="2299210">you</span> <span
  m="2299330">have</span> <span m="2299450">two</span> <span
  m="2299660">dimensional</span> <span m="2300200">signals,</span> <span
  m="2301190">then</span> <span m="2301460">the</span> <span
  m="2303230">components</span> <span m="2303860">fit</span> <span
  m="2304160">into</span> <span m="2304430">a</span> <span
  m="2304490">matrix.</span> <span m="2305780">And</span> <span
  m="2307990">we</span> <span m="2308170">just</span> <span
  m="2308380">have</span> <span m="2308560">to</span> <span
  m="2308680">operate</span> <span m="2309370">in</span> <span
  m="2309910">both</span> <span m="2310180">dimensions.</span></p><p><span
  m="2313710">So</span> <span m="2313980">the</span> <span
  m="2315210">key</span> <span m="2321880">operation</span> <span
  m="2323110">in</span> <span m="2323260">2D</span> <span m="2325300">is</span>
  <span m="2326050">in</span> <span m="2326230">MATLAB.</span> <span
  m="2329680">The</span> <span m="2329780">MATLAB</span> <span
  m="2330260">command</span> <span m="2333430">that</span> <span
  m="2333730">you</span> <span m="2333880">need</span> <span
  m="2334150">to</span> <span m="2334300">know</span> <span
  m="2335230">to</span> <span m="2335380">get--</span> <span
  m="2335980">if</span> <span m="2336190">you</span> <span
  m="2336310">know</span> <span m="2336490">what</span> <span
  m="2336700">you're</span> <span m="2336790">doing</span> <span
  m="2337060">in</span> <span m="2337140">1D</span> <span m="2337630">and</span>
  <span m="2337720">you</span> <span m="2337810">want</span> <span
  m="2337990">to</span> <span m="2338080">do</span> <span m="2338290">it</span>
  <span m="2338410">in</span> <span m="2338530">2D,</span> <span
  m="2339430">the</span> <span m="2339520">MATLAB</span> <span
  m="2340030">command</span> <span m="2340600">is</span> <span
  m="2340810">Kron.</span> <span m="2343580">So</span> <span
  m="2344920">imagine</span> <span m="2345430">we</span> <span
  m="2345580">have</span> <span m="2347830">one</span> <span
  m="2348070">dimensional</span> <span m="2348520">matrices</span> <span
  m="2348895">A</span> <span m="2349270">and</span> <span m="2349600">B.</span>
  <span m="2352250">And</span> <span m="2353470">so</span> <span
  m="2353690">those</span> <span m="2353960">are</span> <span
  m="2354080">in</span> <span m="2354230">1D,</span> <span
  m="2354770">and</span> <span m="2354920">we</span> <span
  m="2355100">want</span> <span m="2355340">to</span> <span
  m="2355670">produce</span> <span m="2356470">a</span> <span
  m="2356870">natural</span> <span m="2359350">two</span> <span
  m="2359570">dimensional</span> <span m="2360080">matrix.</span> <span
  m="2360660">So</span> <span m="2360740">these</span> <span
  m="2361010">will</span> <span m="2361130">be</span> <span m="2361370">N</span>
  <span m="2361610">by</span> <span m="2361860">N.</span> <span
  m="2364610">And</span> <span m="2364790">we</span> <span
  m="2364970">want</span> <span m="2367770">the</span> <span
  m="2368140">sort</span> <span m="2368440">of</span> <span
  m="2368510">natural</span> <span m="2369050">product,</span> <span
  m="2370250">let</span> <span m="2370400">me</span> <span
  m="2370550">call</span> <span m="2370880">it</span> <span m="2371060">K</span>
  <span m="2371570">for</span> <span m="2371840">Kron,</span> <span
  m="2372710">which</span> <span m="2372980">will</span> <span
  m="2373160">be</span> <span m="2373610">N</span> <span
  m="2373880">squared</span> <span m="2374390">by</span> <span
  m="2374660">N</span> <span m="2374810">squared.</span></p><p><span
  m="2377710">I</span> <span m="2377800">want</span> <span m="2377980">to</span>
  <span m="2378040">create</span> <span m="2378430">a</span> <span
  m="2378520">2D</span> <span m="2378940">matrix</span> <span
  m="2385410">connected</span> <span m="2386010">to</span> <span
  m="2386820">an</span> <span m="2386970">image</span> <span
  m="2387420">that's</span> <span m="2387860">N</span> <span
  m="2388170">in</span> <span m="2388380">each</span> <span
  m="2388650">direction.</span> <span m="2390030">So</span> <span
  m="2391050">it</span> <span m="2391200">has</span> <span m="2391410">N</span>
  <span m="2391590">squared</span> <span m="2392010">pixels.</span> <span
  m="2393720">These</span> <span m="2394080">are</span> <span
  m="2394230">1D</span> <span m="2395310">signals,</span> <span
  m="2396720">and</span> <span m="2397110">K</span> <span m="2397590">is</span>
  <span m="2397920">a</span> <span m="2397980">2D</span> <span
  m="2398490">one.</span> <span m="2399180">And</span> <span
  m="2399930">this</span> <span m="2400350">K</span> <span
  m="2402060">would</span> <span m="2402270">be</span> <span
  m="2402450">the--</span> <span m="2403950">this</span> <span
  m="2404250">is</span> <span m="2404340">the</span> <span
  m="2404490">operation</span> <span m="2405090">to</span> <span
  m="2405210">know.</span> <span m="2406938">Given</span> <span
  m="2408240">two</span> <span m="2409590">one</span> <span
  m="2409890">dimensional</span> <span m="2410700">n</span> <span
  m="2410910">by</span> <span m="2411150">n</span> <span
  m="2411330">matrices,</span> <span m="2413520">Kron</span> <span
  m="2414150">produces</span> <span m="2416490">an</span> <span
  m="2416670">N</span> <span m="2416820">squared</span> <span
  m="2417210">by</span> <span m="2417480">N</span> <span
  m="2417600">squared</span> <span m="2418050">matrix.</span> <span
  m="2419040">It's</span> <span m="2419590">the</span> <span
  m="2420360">operation</span> <span m="2420960">to</span> <span
  m="2421110">know.</span> <span m="2421560">So</span> <span
  m="2421800">I'll</span> <span m="2421890">just</span> <span
  m="2422400">write</span> <span m="2422790">it,</span> <span
  m="2422950">and</span> <span m="2423120">if</span> <span
  m="2423300">you</span> <span m="2424020">know</span> <span
  m="2424260">what</span> <span m="2424470">Kron</span> <span
  m="2424860">is,</span> <span m="2425220">then</span> <span
  m="2425490">you</span> <span m="2425640">know</span> <span
  m="2426780">it</span> <span m="2426870">before</span> <span
  m="2427230">I</span> <span m="2427320">write</span> <span
  m="2427560">it.</span></p><p><span m="2429630">So</span> <span
  m="2429810">I</span> <span m="2429930">want</span> <span m="2430110">to</span>
  <span m="2430170">produce</span> <span m="2431430">a</span> <span
  m="2431490">big</span> <span m="2431760">matrix,</span> <span
  m="2432560">N</span> <span m="2432750">squared</span> <span
  m="2433110">by</span> <span m="2433320">N</span> <span
  m="2433440">squared.</span> <span m="2437450">Somehow</span> <span
  m="2438260">appropriately</span> <span m="2439070">multiplying</span> <span
  m="2439730">these</span> <span m="2440000">two</span> <span
  m="2440210">guys.</span> <span m="2441860">And</span> <span
  m="2442100">the</span> <span m="2442220">appropriate</span> <span
  m="2442940">way</span> <span m="2443240">to</span> <span m="2443390">do</span>
  <span m="2443630">it</span> <span m="2443870">is</span> <span
  m="2445460">to</span> <span m="2445580">take</span> <span
  m="2445970">a11</span> <span m="2448100">and</span> <span
  m="2448220">multiply</span> <span m="2448700">it by</span> <span
  m="2448910">B.</span> <span m="2450980">So</span> <span
  m="2451190">there,</span> <span m="2451460">what</span> <span
  m="2451640">do</span> <span m="2451760">I</span> <span
  m="2451850">have?</span> <span m="2452240">What</span> <span
  m="2452420">size</span> <span m="2453610">have</span> <span
  m="2453770">I</span> <span m="2453890">got</span> <span
  m="2454160">there</span> <span m="2454500">already</span> <span
  m="2455030">just</span> <span m="2455330">in</span> <span
  m="2455450">that</span> <span m="2455630">one</span> <span
  m="2455900">corner?</span> <span m="2457850">N</span> <span
  m="2458090">by</span> <span m="2458330">N,</span> <span
  m="2458630">right?</span> <span m="2459530">It's</span> <span
  m="2459710">a</span> <span m="2459770">number</span> <span
  m="2460190">of</span> <span m="2460250">times</span> <span
  m="2460670">an</span> <span m="2460790">N</span> <span m="2461000">by</span>
  <span m="2461240">N</span> <span m="2461450">matrix.</span> <span
  m="2463100">Then</span> <span m="2463340">a12</span> <span
  m="2464480">times</span> <span m="2464900">B.</span> <span
  m="2465860">That's</span> <span m="2466070">another</span> <span
  m="2466460">N</span> <span m="2466670">by</span> <span m="2466910">N</span>
  <span m="2467090">matrix.</span> <span m="2467900">Up</span> <span
  m="2468080">to</span> <span m="2468650">a1N</span> <span
  m="2470870">times</span> <span m="2471290">B.</span> <span
  m="2472670">So</span> <span m="2472850">I</span> <span m="2472940">have</span>
  <span m="2473240">now--</span> <span m="2474530">sorry,</span> <span
  m="2474860">cap</span> <span m="2475310">N.</span></p><p><span
  m="2478010">So</span> <span m="2478190">I</span> <span m="2478310">have</span>
  <span m="2479180">cap</span> <span m="2479570">N</span> <span
  m="2479990">matrices</span> <span m="2481220">in</span> <span
  m="2481370">a</span> <span m="2481430">row.</span> <span
  m="2482720">Each</span> <span m="2483020">of</span> <span
  m="2483110">those</span> <span m="2483410">matrices</span> <span
  m="2484190">is</span> <span m="2484370">N</span> <span m="2484580">by</span>
  <span m="2484820">N.</span> <span m="2485150">So</span> <span
  m="2485690">that</span> <span m="2485870">row</span> <span
  m="2486200">has</span> <span m="2486470">length</span> <span
  m="2486830">n</span> <span m="2487040">squared.</span> <span
  m="2487790">And</span> <span m="2487910">of</span> <span
  m="2488030">course,</span> <span m="2488870">the</span> <span
  m="2488990">next</span> <span m="2489350">row</span> <span
  m="2490820">is--</span> <span m="2497330">I've</span> <span
  m="2498200">allowed</span> <span m="2498500">myself</span> <span
  m="2498980">to</span> <span m="2499430">number</span> <span
  m="2499880">from</span> <span m="2500150">1</span> <span m="2500510">to</span>
  <span m="2500730">N,</span> <span m="2501420">but</span> <span
  m="2502100">very</span> <span m="2502460">often</span> <span
  m="2503290">that</span> <span m="2503510">numbering</span> <span
  m="2504020">should</span> <span m="2504260">be</span> <span
  m="2504500">0</span> <span m="2504890">to</span> <span m="2505070">n</span>
  <span m="2505250">minus</span> <span m="2505610">1.</span> <span
  m="2506210">And</span> <span m="2506480">finally</span> <span
  m="2506880">on</span> <span m="2507080">down</span> <span
  m="2507410">here</span> <span m="2508280">down</span> <span
  m="2508580">to</span> <span m="2508700">an1</span> <span m="2509360">B</span>
  <span m="2511610">to</span> <span m="2512120">aNN</span> <span
  m="2513410">B.</span> <span m="2516090">So</span> <span m="2519440">so</span>
  <span m="2519710">that's</span> <span m="2519980">the</span> <span
  m="2520160">N</span> <span m="2520280">squared</span> <span
  m="2520610">by</span> <span m="2520820">N</span> <span
  m="2521030">squared</span> <span m="2521240">matrix</span> <span
  m="2521780">that</span> <span m="2521960">you</span> <span
  m="2522050">would</span> <span m="2522230">need</span> <span
  m="2522440">to</span> <span m="2522560">know.</span></p><p><span
  m="2522800">For</span> <span m="2523070">example,</span> <span
  m="2524100">if</span> <span m="2524150">you</span> <span
  m="2524270">wanted</span> <span m="2524600">to</span> <span
  m="2524720">do</span> <span m="2524990">a</span> <span m="2525080">two</span>
  <span m="2525380">dimensional</span> <span m="2527520">Fourier</span> <span
  m="2527990">transform,</span> <span m="2530350">that</span> <span
  m="2530600">would</span> <span m="2530870">be--</span> <span
  m="2535130">yeah,</span> <span m="2535410">so</span> <span
  m="2535590">what</span> <span m="2535800">would</span> <span
  m="2535980">a</span> <span m="2536070">two</span> <span
  m="2536370">dimensional</span> <span m="2537950">Fourier</span> <span
  m="2538550">transform</span> <span m="2539420">produce?</span> <span
  m="2540120">What</span> <span m="2540710">matrix?</span> <span
  m="2541340">Is</span> <span m="2541460">this</span> <span
  m="2541640">the</span> <span m="2541790">matrix</span> <span
  m="2542330">you</span> <span m="2542450">would</span> <span
  m="2542660">use</span> <span m="2543020">for</span> <span m="2543780">a</span>
  <span m="2543890">2D?</span> <span m="2550280">I</span> <span
  m="2550430">haven't</span> <span m="2550700">sort</span> <span
  m="2550910">of</span> <span m="2551030">got</span> <span
  m="2551240">started</span> <span m="2551720">properly</span> <span
  m="2552230">on</span> <span m="2552530">2D</span> <span
  m="2553220">Fourier</span> <span m="2553630">transforms.</span> <span
  m="2554720">So</span> <span m="2554930">would</span> <span
  m="2555140">it</span> <span m="2555200">be</span> <span m="2555470">F</span>
  <span m="2555920">times</span> <span m="2556490">F?</span> <span
  m="2559520">So</span> <span m="2560120">let</span> <span m="2560270">me</span>
  <span m="2560420">write</span> <span m="2560720">down</span> <span
  m="2561080">the</span> <span m="2561560">full</span> <span
  m="2561920">name</span> <span m="2562280">of</span> <span
  m="2562400">this</span> <span m="2562670">guy.</span> <span
  m="2563330">Kronecker.</span> <span m="2564350">So</span> <span
  m="2564530">it's</span> <span m="2564680">called</span> <span
  m="2564920">the</span> <span m="2565040">Kronecker</span> <span
  m="2565670">product.</span> <span m="2571500">It's</span> <span
  m="2571740">just</span> <span m="2572040">the</span> <span
  m="2572190">right</span> <span m="2572490">thing</span> <span
  m="2572790">to</span> <span m="2572940">know</span> <span
  m="2573450">in</span> <span m="2574200">moving</span> <span
  m="2574710">from</span> <span m="2575640">one</span> <span
  m="2575910">dimension</span> <span m="2576420">to</span> <span
  m="2576570">two</span> <span m="2576840">dimensions.</span></p><p><span
  m="2577920">For</span> <span m="2578130">example.</span> <span m="2579760">Let
  me</span> <span m="2580260">do</span> <span m="2580420">an</span> <span
  m="2581130">example.</span> <span m="2587708">Oops,</span> <span
  m="2588180">that's</span> <span m="2588520">full.</span> <span
  m="2589990">Have</span> <span m="2590480">I</span> <span
  m="2590600">got</span> <span m="2590940">one</span> <span
  m="2591470">board</span> <span m="2591830">left?</span> <span
  m="2592210">Yeah.</span> <span m="2596770">So</span> <span
  m="2597740">here's</span> <span m="2598150">a</span> <span
  m="2598960">standard</span> <span m="2599440">matrix.</span> <span
  m="2600070">Call</span> <span m="2600310">it</span> <span
  m="2600490">A.</span> <span m="2602230">2s</span> <span m="2603540">and</span>
  <span m="2603700">minus</span> <span m="2604120">1s.</span> <span
  m="2605410">So</span> <span m="2605560">that</span> <span
  m="2608260">corresponds</span> <span m="2609100">to</span> <span
  m="2609250">a</span> <span m="2609310">second</span> <span
  m="2609730">derivative</span> <span m="2612010">or</span> <span
  m="2612220">actually</span> <span m="2612730">minus</span> <span
  m="2613260">a</span> <span m="2613380">second</span> <span
  m="2613790">derivative.</span></p><p><span m="2615350">Now,</span> <span
  m="2615580">suppose</span> <span m="2616090">I</span> <span
  m="2616180">have</span> <span m="2616750">another,</span> <span
  m="2617310">the</span> <span m="2617410">same</span> <span
  m="2617740">matrix,</span> <span m="2619210">corresponding</span> <span
  m="2620110">to</span> <span m="2622750">second</span> <span
  m="2623140">derivatives</span> <span m="2623710">in</span> <span
  m="2623830">the</span> <span m="2623920">y</span> <span
  m="2624250">direction.</span> <span m="2627115">Same.</span> <span
  m="2630420">And</span> <span m="2630570">what</span> <span
  m="2630780">I</span> <span m="2630930">really</span> <span
  m="2631230">want</span> <span m="2631440">to</span> <span
  m="2631530">do</span> <span m="2631830">is</span> <span
  m="2632640">both.</span> <span m="2633150">I</span> <span
  m="2633330">want</span> <span m="2633660">to</span> <span
  m="2633840">have</span> <span m="2634620">a</span> <span
  m="2634740">matrix</span> <span m="2635400">K</span> <span
  m="2636870">that</span> <span m="2637080">corresponds</span> <span
  m="2638040">to</span> <span m="2639870">minus</span> <span
  m="2640510">the</span> <span m="2640620">second</span> <span
  m="2641130">in</span> <span m="2641280">the</span> <span m="2641430">x</span>
  <span m="2641700">direction</span> <span m="2643380">minus</span> <span
  m="2643840">the</span> <span m="2643930">second</span> <span
  m="2644400">in</span> <span m="2644520">the</span> <span m="2644610">y.</span>
  <span m="2647430">So</span> <span m="2647640">this</span> <span
  m="2647850">is</span> <span m="2648030">the</span> <span
  m="2648180">Laplace.</span> <span m="2650330">Laplacian.</span> <span
  m="2654840">Which</span> <span m="2655170">is</span> <span
  m="2655380">all</span> <span m="2655740">over</span> <span
  m="2656010">the</span> <span m="2656130">place</span> <span
  m="2656610">in</span> <span m="2657210">differential</span> <span
  m="2657750">equations.</span></p><p><span m="2658930">At</span> <span
  m="2659250">a</span> <span m="2659310">typical</span> <span
  m="2659820">point,</span> <span m="2660690">I</span> <span
  m="2660840">want</span> <span m="2661050">to</span> <span
  m="2661140">do</span> <span m="2662790">minus</span> <span
  m="2663045">one</span> <span m="2663300">of</span> <span
  m="2663660">these,</span> <span m="2664200">two</span> <span
  m="2664500">of</span> <span m="2664620">these</span> <span
  m="2665040">minus</span> <span m="2665490">one of</span> <span
  m="2665790">those</span> <span m="2666150">in</span> <span
  m="2666240">the</span> <span m="2666390">x</span> <span
  m="2666490">direction,</span> <span m="2667110">and</span> <span
  m="2667260">I</span> <span m="2667350">want</span> <span m="2667560">to</span>
  <span m="2667680">add</span> <span m="2667950">to</span> <span
  m="2668100">that</span> <span m="2668820">minus</span> <span
  m="2669330">1.</span> <span m="2669710">Now</span> <span
  m="2670470">that</span> <span m="2670650">2</span> <span
  m="2670950">becomes</span> <span m="2671460">a</span> <span
  m="2671550">4</span> <span m="2672630">and</span> <span
  m="2672780">minus</span> <span m="2673200">1 in</span> <span
  m="2673650">the</span> <span m="2673740">y</span> <span
  m="2674010">direction.</span> <span m="2674550">So</span> <span
  m="2674730">I'm</span> <span m="2674880">looking</span> <span
  m="2675270">for</span> <span m="2675510">the</span> <span m="2676080">2</span>
  <span m="2676410">by</span> <span m="2676620">2</span> <span
  m="2676920">matrix--</span> <span m="2677970">sorry,</span> <span
  m="2678470">the</span> <span m="2679500">two</span> <span
  m="2679770">dimensional</span> <span m="2680340">matrix</span> <span
  m="2681480">that</span> <span m="2681870">takes--</span> <span
  m="2683080">that</span> <span m="2683520">does</span> <span
  m="2683820">that</span> <span m="2684090">five</span> <span
  m="2684570">point</span> <span m="2684990">scheme.</span> <span
  m="2685800">Five</span> <span m="2687120">weights</span> <span
  m="2688650">at</span> <span m="2688830">each</span> <span
  m="2689040">point.</span> <span m="2689520">It takes</span> <span
  m="2689850">four</span> <span m="2690360">of</span> <span
  m="2690540">the--</span> <span m="2691350">on</span> <span
  m="2691530">the</span> <span m="2691620">diagonal</span> <span
  m="2692820">and</span> <span m="2693060">minus</span> <span
  m="2693540">1</span> <span m="2693870">on</span> <span m="2694200">the</span>
  <span m="2694920">four</span> <span m="2695350">neighbors.</span></p><p><span
  m="2696690">And</span> <span m="2697110">the</span> <span
  m="2697560">operation</span> <span m="2698220">that</span> <span
  m="2698370">would</span> <span m="2698550">do</span> <span
  m="2698820">that</span> <span m="2699150">would</span> <span
  m="2699390">be</span> <span m="2701130">you</span> <span
  m="2701280">would</span> <span m="2701430">use</span> <span
  m="2701670">Kron.</span> <span m="2703230">It</span> <span
  m="2703350">wouldn't</span> <span m="2703590">be</span> <span
  m="2703730">Kron</span> <span m="2704160">of</span> <span m="2704310">A</span>
  <span m="2705150">B.</span> <span m="2705570">That</span> <span
  m="2705810">would</span> <span m="2706530">just--</span> <span
  m="2707700">K</span> <span m="2708060">of</span> <span m="2708180">A</span>
  <span m="2708330">B</span> <span m="2708570">is</span> <span
  m="2708690">not</span> <span m="2708990">what</span> <span
  m="2709200">I--</span> <span m="2710090">a</span> <span
  m="2710340">Kron</span> <span m="2710730">of</span> <span m="2710850">A</span>
  <span m="2711060">B</span> <span m="2711300">is</span> <span
  m="2711420">not</span> <span m="2711720">what</span> <span
  m="2711930">I</span> <span m="2712020">want.</span> <span
  m="2717390">Yeah,</span> <span m="2717510">that</span> <span
  m="2717690">would</span> <span m="2717840">do</span> <span
  m="2718020">one</span> <span m="2718450">and</span> <span
  m="2718550">then</span> <span m="2718650">the</span> <span
  m="2718800">other</span> <span m="2719010">one.</span> <span
  m="2719700">And</span> <span m="2719820">then</span> <span
  m="2720030">that</span> <span m="2720210">would</span> <span
  m="2720420">probably</span> <span m="2720930">produce</span> <span
  m="2721380">nine</span> <span m="2723030">non-zeroes.</span> <span
  m="2724650">I</span> <span m="2724770">want</span> <span
  m="2725130">something</span> <span m="2725610">that</span> <span
  m="2725820">adds</span> <span m="2726360">here.</span> <span
  m="2726690">So</span> <span m="2726900">I</span> <span m="2727800">want</span>
  <span m="2728310">Kron</span> <span m="2729050">of</span> <span
  m="2729390">A</span> <span m="2730680">times</span> <span
  m="2731040">the</span> <span m="2731190">identity.</span> <span
  m="2732060">That</span> <span m="2732210">gives</span> <span
  m="2732510">me</span> <span m="2732750">the</span> <span
  m="2734070">two</span> <span m="2734490">dimensional</span> <span
  m="2736220">thing</span> <span m="2736650">for</span> <span
  m="2736890">this</span> <span m="2737160">part.</span></p><p><span
  m="2738390">And</span> <span m="2738540">then</span> <span
  m="2738780">I'll</span> <span m="2738990">add</span> <span
  m="2739320">on</span> <span m="2739680">Kron</span> <span
  m="2742020">of</span> <span m="2743430">I</span> <span m="2744395">B</span>
  <span m="2746520">for</span> <span m="2746850">the</span> <span
  m="2748410">vertical</span> <span m="2749650">derivative,</span> <span
  m="2750280">the</span> <span m="2750480">derivatives</span> <span
  m="2751110">in</span> <span m="2751290">the</span> <span m="2751590">y</span>
  <span m="2751920">direction.</span> <span m="2754350">So</span> <span
  m="2754530">that's</span> <span m="2754830">called</span> <span
  m="2755220">a</span> <span m="2755475">Kronecker</span> <span
  m="2755880">sum.</span> <span m="2759600">The</span> <span
  m="2759780">other</span> <span m="2759990">was</span> <span
  m="2760210">a</span> <span m="2760260">Kronecker</span> <span
  m="2760820">product.</span> <span m="2762420">So</span> <span
  m="2762600">that</span> <span m="2762900">would</span> <span
  m="2763080">be</span> <span m="2763230">a</span> <span
  m="2763290">Kronecker</span> <span m="2763800">product.</span> <span
  m="2764400">This</span> <span m="2764640">would</span> <span
  m="2764790">be</span> <span m="2764910">another</span> <span
  m="2765300">Kronecker</span> <span m="2765780">product,</span> <span
  m="2766290">and</span> <span m="2766440">the</span> <span
  m="2766920">total</span> <span m="2767370">is</span> <span
  m="2767550">called</span> <span m="2768030">the</span> <span
  m="2768510">Kronecker</span> <span m="2768990">sum.</span></p><p><span
  m="2771820">OK.</span> <span m="2774110">I</span> <span
  m="2774230">wanted</span> <span m="2774420">just</span> <span
  m="2774610">to</span> <span m="2774820">get</span> <span
  m="2775920">those</span> <span m="2776300">notations</span> <span
  m="2777060">out.</span> <span m="2777380">Because</span> <span
  m="2778020">really,</span> <span m="2778710">Fourier</span> <span
  m="2780300">transforming</span> <span m="2781120">is</span> <span
  m="2782340">such</span> <span m="2782730">a</span> <span
  m="2782910">central</span> <span m="2783480">operation</span> <span
  m="2785020">in</span> <span m="2785790">all</span> <span m="2786000">of</span>
  <span m="2786120">applied</span> <span m="2786550">math,</span> <span
  m="2787590">and</span> <span m="2788010">especially</span> <span
  m="2788550">in</span> <span m="2788670">signal</span> <span
  m="2789060">processing.</span></p><p><span m="2790500">OK,</span> <span
  m="2790950">so</span> <span m="2791220">I'm</span> <span
  m="2791430">good</span> <span m="2791670">for</span> <span
  m="2791860">it</span> <span m="2791900">today.</span> <span
  m="2793260">Let's</span> <span m="2793470">see.</span> <span
  m="2793680">I've</span> <span m="2793830">got</span> <span
  m="2794010">one</span> <span m="2794340">volunteer</span> <span
  m="2794850">so</span> <span m="2795030">far</span> <span m="2796460">to</span>
  <span m="2796650">talk</span> <span m="2796950">about</span> <span
  m="2797220">a</span> <span m="2797280">project.</span> <span
  m="2799080">Can</span> <span m="2799380">I</span> <span
  m="2799740">encourage</span> <span m="2801540">an</span> <span
  m="2801750">email</span> <span m="2802290">from</span> <span
  m="2802530">anybody</span> <span m="2803070">that</span> <span
  m="2803140">doesn't--</span> <span m="2803610">you</span> <span
  m="2803730">don't</span> <span m="2803940">have</span> <span
  m="2804120">to</span> <span m="2804240">be</span> <span m="2804390">a</span>
  <span m="2804480">superstar.</span> <span m="2806950">You're</span> <span
  m="2807300">just</span> <span m="2807660">willing</span> <span
  m="2808140">to</span> <span m="2810030">do</span> <span
  m="2810270">it.</span></p><p><span m="2812130">Tell</span> <span
  m="2812400">us</span> <span m="2812490">something</span> <span
  m="2812940">about</span> <span m="2813180">what</span> <span
  m="2813420">you've</span> <span m="2813600">learned.</span> <span
  m="2814020">Get</span> <span m="2814230">comments</span> <span
  m="2814890">from</span> <span m="2815130">the</span> <span
  m="2815580">audience.</span> <span m="2816210">And</span> <span
  m="2817200">10</span> <span m="2818100">or</span> <span m="2818190">15</span>
  <span m="2818580">minutes</span> <span m="2818970">is</span> <span
  m="2819150">all</span> <span m="2820800">I'm</span> <span
  m="2821160">thinking</span> <span m="2821700">about.</span> <span
  m="2822960">OK,</span> <span m="2823470">I'll</span> <span
  m="2824010">let</span> <span m="2824250">you</span> <span
  m="2824400">send</span> <span m="2824700">me</span> <span
  m="2824850">an</span> <span m="2825000">email</span> <span
  m="2825420">if</span> <span m="2826650">you'd</span> <span
  m="2826800">like</span> <span m="2826980">to</span> <span
  m="2827130">tell</span> <span m="2827370">us</span> <span
  m="2827520">that</span> <span m="2827730">and</span> <span
  m="2827970">get</span> <span m="2828330">some</span> <span
  m="2828600">feedback.</span> <span m="2829530">OK,</span> <span
  m="2830070">good.</span> <span m="2831240">So</span> <span
  m="2831540">I'll</span> <span m="2831630">see</span> <span
  m="2831840">you</span> <span m="2831990">Wednesday.</span> <span
  m="2835590">Thanks.</span></p>
uid: 0197a0ae0870f75f49cbfbe02e9e65a9
type: course
layout: video
---
