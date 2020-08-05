---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Devadas continues
  with the topic of network flow.</p> <p><strong>Instructors:</strong> Srinivas
  Devadas</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: 8C_T4iTzPCU
    parent_uid: d9b44004b3aa7adef3a48f66ca560492
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: ea25314892573ae3855b7c93dde49165
  - id: 8C_T4iTzPCU.srt
    parent_uid: d9b44004b3aa7adef3a48f66ca560492
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-14-incremental-improvement-matching/8C_T4iTzPCU.srt
    title: 3play caption file
    type: null
    uid: cfcef24f2da259e828febc189e1ee50e
  - id: 8C_T4iTzPCU.pdf
    parent_uid: d9b44004b3aa7adef3a48f66ca560492
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-14-incremental-improvement-matching/8C_T4iTzPCU.pdf
    title: 3play pdf file
    type: null
    uid: b1d4ec314fc893f7fcb93f882f0f09d2
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d9b44004b3aa7adef3a48f66ca560492
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: c45c83c710c726a5ec28a9761349df96
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d9b44004b3aa7adef3a48f66ca560492
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f1bca915ef76ed6f74a1af73781dd2e6
  - id: Video-YouTube-Stream
    media_location: 8C_T4iTzPCU
    parent_uid: d9b44004b3aa7adef3a48f66ca560492
    title: Video-YouTube-Stream
    type: Video
    uid: a74ab5989e420559971a536ac0f13276
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/8C_T4iTzPCU/default.jpg'
    parent_uid: d9b44004b3aa7adef3a48f66ca560492
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 8f6f81af5f52c62b111be4177cfd996a
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: d9b44004b3aa7adef3a48f66ca560492
    title: Video-iTunes U-MP4
    type: Video
    uid: 93855be4c2f671479b5e1ac21b049a73
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec14_300k.mp4'
    parent_uid: d9b44004b3aa7adef3a48f66ca560492
    title: Video-Internet Archive-MP4
    type: Video
    uid: 9af605d3e56424a172d7348c1ba0cf44
inline_embed_id: '99478090lecture14:incrementalimprovement:matching67643823'
order_index: 237
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-14-incremental-improvement-matching
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-14-incremental-improvement-matching
title: 'Lecture 14: Incremental Improvement: Matching'
transcript: >-
  <p><span m="70">The</span> <span m="190">following</span> <span
  m="630">content</span> <span m="1220">is</span> <span m="1340">provided</span>
  <span m="1780">under</span> <span m="2060">a</span> <span
  m="2100">Creative</span> <span m="2500">Commons</span> <span
  m="2910">license.</span> <span m="4010">Your</span> <span
  m="4210">support</span> <span m="4710">will</span> <span m="4870">help</span>
  <span m="5110">MIT</span> <span m="5570">OpenCourseWare</span> <span
  m="6360">continue</span> <span m="6870">to</span> <span m="6950">offer</span>
  <span m="7360">high</span> <span m="7600">quality</span> <span
  m="8119">educational</span> <span m="8750">resources</span> <span
  m="9370">for</span> <span m="9520">free.</span> <span m="10730">To</span>
  <span m="10830">make</span> <span m="10940">a</span> <span
  m="10980">donation</span> <span m="11670">or</span> <span
  m="11940">view</span> <span m="12380">additional</span> <span
  m="12800">materials</span> <span m="13330">from</span> <span
  m="13490">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14460">courses,</span> <span m="15560">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17260">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21460">PROFESSOR: Good</span> <span m="21550">morning</span> <span
  m="21800">everyone,</span> <span m="22340">let's</span> <span
  m="22570">get</span> <span m="22710">started.</span> <span m="24280">So</span>
  <span m="24500">part</span> <span m="24930">two</span> <span
  m="25290">of</span> <span m="26250">our</span> <span m="26880">two</span>
  <span m="27040">lecture</span> <span m="27500">sequence</span> <span
  m="27940">on network</span> <span m="28510">flow.</span> <span
  m="29650">So</span> <span m="30140">all</span> <span m="30430">the</span>
  <span m="30530">pain</span> <span m="31190">involved</span> <span
  m="31830">in</span> <span m="33210">the</span> <span m="33350">concepts</span>
  <span m="33910">and</span> <span m="34020">notation</span> <span
  m="34730">from</span> <span m="35730">Tuesday</span> <span
  m="37350">turns</span> <span m="37700">into</span> <span
  m="38680">algorithmic</span> <span m="39260">fun</span> <span
  m="39600">today.</span> <span m="41390">But</span> <span m="41650">we</span>
  <span m="41800">will</span> <span m="42080">do</span> <span m="42250">a</span>
  <span m="42320">little</span> <span m="42520">bit</span> <span m="42640">of
  a</span> <span m="42730">review</span> <span m="44300">just</span> <span
  m="44530">to</span> <span m="44590">make</span> <span m="44760">sure</span>
  <span m="45050">we're</span> <span m="45120">all</span> <span
  m="45240">on</span> <span m="45340">the</span> <span m="45420">same</span>
  <span m="45670">page</span> <span m="46620">with</span> <span
  m="47080">respect</span> <span m="47430">to</span> <span m="47620">all</span>
  <span m="47810">of</span> <span m="47890">these</span> <span
  m="48080">notions</span> <span m="48640">that</span> <span m="49660">we</span>
  <span m="49820">talked</span> <span m="50080">about</span> <span
  m="51150">on</span> <span m="51390">flow</span> <span
  m="51620">networks.</span> <span m="54020">So</span> <span m="54710">we</span>
  <span m="54850">call</span> <span m="55170">that</span> <span
  m="55300">a</span> <span m="55350">flow</span> <span m="55590">network</span>
  <span m="58180">is</span> <span m="58430">simply</span> <span
  m="58920">a</span> <span m="59130">directed</span> <span
  m="59630">graph,</span> <span m="60200">GVE,</span> <span m="62250">and</span>
  <span m="62860">each</span> <span m="63150">edge</span> <span
  m="63490">is</span> <span m="63620">going</span> <span m="63800">to</span>
  <span m="63870">have</span> <span m="66140">two</span> <span
  m="66670">numbers</span> <span m="67160">associated</span> <span
  m="67720">with</span> <span m="67910">it.</span></p><p><span
  m="69570">If</span> <span m="69900">you</span> <span m="70030">see</span>
  <span m="70200">something</span> <span m="70470">like</span> <span
  m="71260">1:3,</span> <span m="72370">this</span> <span m="72580">means</span>
  <span m="72820">that</span> <span m="72970">this</span> <span
  m="73120">is</span> <span m="73250">the</span> <span m="73530">flow,</span>
  <span m="74870">and</span> <span m="75060">that's</span> <span
  m="75280">the</span> <span m="75380">capacity.</span> <span
  m="79600">We</span> <span m="79770">have</span> <span m="79940">a</span> <span
  m="80430">basic</span> <span m="80840">constraint</span> <span
  m="81550">dissociated</span> <span m="82100">with</span> <span
  m="82220">the</span> <span m="82290">flow</span> <span m="82600">not</span>
  <span m="82780">exceeding</span> <span m="83230">the</span> <span
  m="83340">capacity</span> <span m="84430">on</span> <span m="84670">any</span>
  <span m="84850">given</span> <span m="85110">edge.</span> <span
  m="86140">And</span> <span m="86280">we</span> <span m="86370">also</span>
  <span m="86630">have</span> <span m="86880">the</span> <span
  m="87220">laws</span> <span m="87560">of</span> <span
  m="87680">conservation</span> <span m="88850">that</span> <span
  m="89050">say</span> <span m="89270">that</span> <span m="89750">other</span>
  <span m="89990">than</span> <span m="90140">the</span> <span
  m="90240">sink</span> <span m="90640">in</span> <span m="90750">the</span>
  <span m="90860">source,</span> <span m="91880">which</span> <span
  m="92060">are</span> <span m="92100">the</span> <span m="92240">two</span>
  <span m="92430">distinguished</span> <span m="93100">vertices</span> <span
  m="94240">in</span> <span m="94550">G V E,</span> <span
  m="95970">you're</span> <span m="96180">going to</span> <span
  m="96720">have</span> <span m="97380">a</span> <span
  m="97460">situation</span> <span m="98040">where</span> <span
  m="98260">for</span> <span m="98480">any intermediate</span> <span
  m="99340">vertex,</span> <span m="101070">all</span> <span
  m="101320">of</span> <span m="101420">the</span> <span m="101500">flow</span>
  <span m="101940">entering</span> <span m="102340">the</span> <span
  m="102410">vertex</span> <span m="103070">has</span> <span
  m="103380">to</span> <span m="103510">leave</span> <span m="103750">the</span>
  <span m="103830">vertex.</span> <span m="106020">And</span> <span
  m="106780">with</span> <span m="106990">those</span> <span
  m="107170">two</span> <span m="107310">constraints</span> <span
  m="108820">you</span> <span m="108910">need</span> <span m="109050">to</span>
  <span m="109110">find</span> <span m="109450">the</span> <span
  m="109520">max</span> <span m="109920">flow</span> <span m="110710">in</span>
  <span m="110850">your</span> <span m="111020">flow</span> <span
  m="111260">network.</span> <span m="113960">The</span> <span
  m="115060">flow</span> <span m="115490">value</span> <span
  m="119680">corresponding</span> <span m="120230">to</span> <span
  m="120330">this</span> <span m="121060">potential</span> <span
  m="121640">max</span> <span m="121970">flow,</span> <span m="122910">or</span>
  <span m="123100">some</span> <span m="123370">flow,</span> <span
  m="124580">is</span> <span m="124840">F</span> <span
  m="125600">equaling</span> <span m="126140">f</span> <span m="126556">of
  s</span> <span m="128270">of</span> <span m="129300">V.</span> <span
  m="130470">And</span> <span m="130639">so</span> <span m="131080">s</span>
  <span m="131330">is</span> <span m="131570">the</span> <span
  m="132130">source.</span> <span m="134100">V</span> <span
  m="135290">corresponds</span> <span m="135770">to</span> <span
  m="135890">all</span> <span m="136160">of</span> <span m="136260">the</span>
  <span m="136350">vertices.</span></p><p><span m="137390">And</span> <span
  m="137570">you're</span> <span m="137700">looking</span> <span
  m="138040">at</span> <span m="138710">pushing</span> <span
  m="139170">flow</span> <span m="139560">from</span> <span
  m="139870">the</span> <span m="140200">source</span> <span
  m="140570">vertex</span> <span m="141120">to</span> <span
  m="142450">any</span> <span m="142760">of</span> <span m="142890">the</span>
  <span m="143620">vertices,</span> <span m="145040">and</span> <span
  m="145160">thus</span> <span m="145750">the</span> <span m="145950">V</span>
  <span m="146350">includes</span> <span m="147340">t,</span> <span
  m="147640">as</span> <span m="148030">well.</span> <span m="150280">And</span>
  <span m="151070">that</span> <span m="151360">this</span> <span
  m="151550">is</span> <span m="151680">essentially</span> <span
  m="151970">a</span> <span m="152190">flow</span> <span
  m="152410">value,</span> <span m="153370">and</span> <span
  m="153850">we</span> <span m="153960">showed--</span> <span
  m="155670">this</span> <span m="155880">is</span> <span
  m="156020">implicit</span> <span m="156430">summation</span> <span
  m="156890">notation,</span> <span m="157780">we</span> <span
  m="157930">showed,</span> <span m="158960">using</span> <span
  m="159620">a</span> <span m="159670">little</span> <span m="159920">bit</span>
  <span m="160070">of</span> <span m="160800">algebra,</span> <span
  m="161980">that</span> <span m="162230">this</span> <span
  m="162420">equals</span> <span m="164820">f</span> <span m="165050">of</span>
  <span m="165740">V</span> <span m="167830">t.</span> <span
  m="171350">And</span> <span m="171960">that's</span> <span
  m="173530">going</span> <span m="173710">to</span> <span
  m="173750">hold</span> <span m="174130">because</span> <span
  m="174370">of</span> <span m="174430">flow</span> <span
  m="174670">conservation</span> <span m="176340">primarily.</span> <span
  m="179190">So</span> <span m="179340">that</span> <span m="179500">was</span>
  <span m="181310">not</span> <span m="181560">particularly</span> <span
  m="182960">surprising.</span> <span m="184860">Something</span> <span
  m="185320">that</span> <span m="185970">was</span> <span m="186170">a</span>
  <span m="186480">little</span> <span m="186790">more</span> <span
  m="186960">surprising,</span> <span m="187470">or</span> <span
  m="187650">is</span> <span m="187750">a</span> <span m="187810">little</span>
  <span m="187960">more</span> <span m="188140">surprising,</span> <span
  m="189340">is</span> <span m="189560">that</span> <span m="189780">you</span>
  <span m="189920">can</span> <span m="190060">have</span> <span
  m="191620">an</span> <span m="191800">arbitrary</span> <span
  m="192470">cut</span> <span m="193340">in</span> <span m="193530">the</span>
  <span m="193640">flow</span> <span m="193880">network,</span> <span
  m="195070">and</span> <span m="195280">a</span> <span m="195410">cut</span>
  <span m="195740">corresponds</span> <span m="196300">to</span> <span
  m="197320">any</span> <span m="197590">partition.</span> <span
  m="202860">S,</span> <span m="204190">T,</span> <span m="205530">such</span>
  <span m="205910">that</span> <span m="207000">s</span> <span
  m="208090">belongs</span> <span m="208470">to</span> <span
  m="208550">S,</span> <span m="209040">the</span> <span
  m="209160">source</span> <span m="209470">belongs</span> <span
  m="209800">to</span> <span m="210560">S,</span> <span m="212130">and</span>
  <span m="213740">the</span> <span m="213870">sink</span> <span
  m="214150">belongs</span> <span m="214560">to</span> <span
  m="214980">T,</span> <span m="216230">and</span> <span
  m="216380">that's</span> <span m="217500">essentially</span> <span
  m="217900">a</span> <span m="218430">cut.</span></p><p><span
  m="218920">And</span> <span m="219060">so</span> <span
  m="219200">obviously</span> <span m="219520">there</span> <span
  m="219620">could</span> <span m="219750">be</span> <span
  m="221050">exponentially</span> <span m="221720">many</span> <span
  m="221950">cuts</span> <span m="222460">in</span> <span m="222680">a</span>
  <span m="222810">given</span> <span m="223170">flow</span> <span
  m="223390">network.</span> <span m="224950">But</span> <span
  m="225310">the</span> <span m="225450">amazing</span> <span
  m="225790">thing</span> <span m="226000">is</span> <span
  m="226140">that</span> <span m="227070">you</span> <span m="227200">can</span>
  <span m="227290">show</span> <span m="227580">a</span> <span
  m="227890">lemma</span> <span m="229310">that</span> <span
  m="229400">says</span> <span m="229650">that,</span> <span
  m="230390">regardless</span> <span m="230870">of</span> <span
  m="230970">what</span> <span m="231190">the</span> <span
  m="231250">actual</span> <span m="231960">flow</span> <span
  m="232220">values</span> <span m="232690">are</span> <span
  m="233680">in</span> <span m="234160">any</span> <span m="234350">of</span>
  <span m="234420">these</span> <span m="234630">edges--</span> <span
  m="237270">across</span> <span m="237720">any</span> <span
  m="237960">cut</span> <span m="238770">you're</span> <span
  m="238940">going</span> <span m="239020">to</span> <span m="239080">see</span>
  <span m="239240">this</span> <span m="239360">flow.</span> <span
  m="241250">And</span> <span m="241400">this</span> <span m="241520">is</span>
  <span m="241650">true</span> <span m="241840">for</span> <span
  m="244190">any</span> <span m="244450">cut</span> <span m="247520">S,</span>
  <span m="247780">T.</span> <span m="253350">The</span> <span
  m="253480">corollary</span> <span m="255250">to</span> <span
  m="255480">this</span> <span m="255680">lemma</span> <span
  m="257510">is</span> <span m="257820">that</span> <span m="259060">the
  flow</span> <span m="259480">is</span> <span m="259690">going</span> <span
  m="259930">to</span> <span m="260000">be</span> <span m="262230">less</span>
  <span m="262620">than</span> <span m="262890">or</span> <span
  m="262990">equal</span> <span m="263320">to</span> <span m="264390">the</span>
  <span m="264570">capacity</span> <span m="268250">of</span> <span
  m="268490">any</span> <span m="268750">cut.</span> <span m="274720">And</span>
  <span m="274930">that</span> <span m="275110">simply</span> <span
  m="275360">comes</span> <span m="275580">from</span> <span
  m="275820">the</span> <span m="275930">edge</span> <span
  m="276540">constraints.</span> <span m="277495">You know</span> <span
  m="277780">that the</span> <span m="278020">flow</span> <span
  m="278290">value</span> <span m="279290">corresponding</span> <span
  m="279870">to</span> <span m="280120">any</span> <span
  m="280650">particular</span> <span m="281120">edge</span> <span
  m="281510">has</span> <span m="281730">to</span> <span m="281790">be</span>
  <span m="281870">less</span> <span m="282050">than</span> <span
  m="282140">the</span> <span m="282210">capacity</span> <span
  m="282710">of</span> <span m="282790">that</span> <span
  m="282940">edge.</span> <span m="283610">So</span> <span m="283760">you</span>
  <span m="285100">obey</span> <span m="285170">that</span> <span
  m="285460">constraint</span> <span m="286590">and</span> <span
  m="286760">you</span> <span m="286890">just</span> <span
  m="287090">look</span> <span m="287240">at</span> <span m="287330">the</span>
  <span m="288310">edges</span> <span m="288680">that</span> <span
  m="288810">go</span> <span m="289010">from</span> <span m="289230">S</span>
  <span m="289450">to T,</span> <span m="290480">sum up</span> <span
  m="290860">those</span> <span m="291020">capacities,</span> <span
  m="292070">and</span> <span m="292350">your</span> <span
  m="294840">maximum</span> <span m="295310">flow</span> <span
  m="296886">or</span> <span m="297380">any</span> <span m="297620">flow</span>
  <span m="298080">is</span> <span m="298290">bounded,</span> <span
  m="299740">[INAUDIBLE],</span> <span m="300670">by</span> <span
  m="300800">that</span> <span m="300980">quantity.</span> <span
  m="301890">And</span> <span m="302110">that's</span> <span
  m="302450">our</span> <span m="303100">c</span> <span m="303550">S
  T.</span></p><p><span m="305840">So</span> <span m="307470">you</span> <span
  m="307600">now</span> <span m="307810">have</span> <span m="308010">a</span>
  <span m="308100">relationship</span> <span m="309510">between</span> <span
  m="310710">the</span> <span m="311140">minimum</span> <span
  m="311660">capacity</span> <span m="312280">cut</span> <span
  m="313290">and</span> <span m="313560">the max flow.</span> <span
  m="315750">We didn't</span> <span m="315980">actually</span> <span
  m="317940">exploit</span> <span m="318580">that</span> <span
  m="319790">in</span> <span m="319970">the</span> <span m="320080">sense</span>
  <span m="320570">of</span> <span m="322120">the</span> <span
  m="322430">algorithm</span> <span m="323790">itself,</span> <span
  m="324340">the</span> <span m="324440">operation</span> <span
  m="325050">of</span> <span m="325140">the</span> <span
  m="325220">algorithm.</span> <span m="327630">But</span> <span
  m="328130">we're</span> <span m="328340">going</span> <span
  m="328560">to</span> <span m="328640">actually</span> <span
  m="328940">exploit</span> <span m="329520">the</span> <span
  m="329650">notion</span> <span m="329910">of</span> <span m="330000">a</span>
  <span m="330080">cut</span> <span m="330830">when</span> <span
  m="331010">we</span> <span m="331400">prove</span> <span
  m="332300">this</span> <span m="332530">algorithm</span> <span
  m="332980">that</span> <span m="333130">I</span> <span m="333200">got</span>
  <span m="333570">to</span> <span m="333900">late</span> <span
  m="335490">on</span> <span m="335680">Tuesday's</span> <span
  m="336070">lecture</span> <span m="338010">that</span> <span
  m="338240">corresponds</span> <span m="338900">to</span> <span
  m="338990">the</span> <span m="339090">Ford-Fulkerson</span> <span
  m="339760">algorithm.</span> <span m="340570">I</span> <span
  m="340720">showed</span> <span m="340930">you</span> <span m="341020">the
  execution</span> <span m="341370">of</span> <span m="341520">it.</span> <span
  m="342090">In</span> <span m="342190">order</span> <span m="342320">to</span>
  <span m="342400">prove</span> <span m="342640">that</span> <span
  m="342740">it's</span> <span m="342880">correct</span> <span
  m="343510">we're</span> <span m="343630">going to</span> <span
  m="343770">need</span> <span m="343980">this</span> <span
  m="344150">notion</span> <span m="345540">of</span> <span
  m="346470">that</span> <span m="347450">bound</span> <span
  m="347990">on</span> <span m="348110">the</span> <span m="349120">flow</span>
  <span m="349410">value</span> <span m="350060">given</span> <span
  m="350420">any</span> <span m="350660">cut</span> <span m="350940">in</span>
  <span m="351030">the</span> <span m="351110">network.</span> <span
  m="352340">So</span> <span m="352620">the</span> <span m="352720">max</span>
  <span m="353010">flow</span> <span m="353320">related</span> <span
  m="353690">to</span> <span m="353780">min-cut.</span></p><p><span
  m="355070">But</span> <span m="355260">before</span> <span
  m="355470">we</span> <span m="355570">get</span> <span m="355720">to</span>
  <span m="355800">that.</span> <span m="357440">Just</span> <span m="357640">to
  catch you</span> <span m="358030">up</span> <span m="358350">on</span> <span
  m="360220">the</span> <span m="360350">algorithm</span> <span
  m="360780">that</span> <span m="360920">we</span> <span
  m="361030">actually</span> <span m="361310">got</span> <span
  m="361570">to,</span> <span m="361790">the</span> <span
  m="361890">Ford-Fulkerson</span> <span m="362910">algorithm,</span> <span
  m="363850">that</span> <span m="364010">was</span> <span
  m="364150">based</span> <span m="364460">on</span> <span m="364550">the</span>
  <span m="364620">notion</span> <span m="364980">of</span> <span
  m="365120">a</span> <span m="365260">residual</span> <span
  m="365810">graph.</span> <span m="366870">This</span> <span
  m="367040">is</span> <span m="367220">now</span> <span m="367400">a new</span>
  <span m="367760">graph,</span> <span m="368420">G f,</span> <span
  m="369770">which</span> <span m="369970">is</span> <span m="370110">V,</span>
  <span m="370510">E f,</span> <span m="371740">so</span> <span
  m="372010">it</span> <span m="372120">depends</span> <span
  m="372450">on</span> <span m="372550">the</span> <span m="372630">flow.</span>
  <span m="373520">You</span> <span m="373670">computed</span> <span
  m="374580">based</span> <span m="374910">on</span> <span m="375080">G,</span>
  <span m="375840">based</span> <span m="376330">on</span> <span
  m="376420">the</span> <span m="376490">given</span> <span
  m="376720">flow</span> <span m="377010">f.</span> <span m="378460">And</span>
  <span m="380350">this</span> <span m="380590">graph</span> <span
  m="380970">has</span> <span m="381230">edges</span> <span
  m="382920">that</span> <span m="383110">have</span> <span
  m="383530">strictly</span> <span m="385190">positive</span> <span
  m="388260">residual</span> <span m="388850">capacities</span> <span
  m="391140">which</span> <span m="391400">are</span> <span
  m="391510">defined</span> <span m="392040">as</span> <span
  m="395450">the</span> <span m="395580">C f</span> <span m="396560">u,</span>
  <span m="397050">v</span> <span m="399070">equals</span> <span
  m="400070">C</span> <span m="400540">u,v</span> <span m="401490">minus</span>
  <span m="402330">f</span> <span m="402550">u,</span> <span
  m="402780">v.</span> <span m="403740">And</span> <span m="403910">this</span>
  <span m="404090">needs</span> <span m="404260">to</span> <span
  m="404330">be</span> <span m="404430">strictly</span> <span
  m="404810">greater</span> <span m="405000">than</span> <span
  m="405150">0</span> <span m="405990">in</span> <span m="406140">order</span>
  <span m="406300">for</span> <span m="406390">the</span> <span
  m="406520">edge</span> <span m="406820">to</span> <span
  m="406920">exist</span> <span m="407470">in G</span> <span
  m="408480">of</span> <span m="408640">f.</span></p><p><span
  m="410400">So</span> <span m="410680">if</span> <span m="410840">this</span>
  <span m="410980">is</span> <span m="411120">zero</span> <span
  m="411450">then</span> <span m="411620">you</span> <span
  m="411720">don't</span> <span m="411880">have</span> <span
  m="412020">an</span> <span m="412110">edge</span> <span
  m="412360">between</span> <span m="413210">u</span> <span
  m="413250">and</span> <span m="413600">v</span> <span m="414560">in G</span>
  <span m="414990">of f.</span> <span m="415680">If</span> <span
  m="415820">it's</span> <span m="416180">one</span> <span m="416570">or</span>
  <span m="416900">greater</span> <span m="417420">assuming</span> <span
  m="417980">integral</span> <span m="418460">flow</span> <span
  m="418680">values,</span> <span m="419670">you</span> <span
  m="419830">will.</span> <span m="421300">And</span> <span m="422620">in</span>
  <span m="422790">the</span> <span m="422880">residual</span> <span
  m="423340">graph--</span> <span m="425870">two</span> <span
  m="426100">more</span> <span m="426320">quick</span> <span
  m="426540">definitions.</span> <span m="429530">One</span> <span
  m="429570">of</span> <span m="429670">which</span> <span m="431230">you</span>
  <span m="431390">saw</span> <span m="431620">last</span> <span
  m="431950">time,</span> <span m="432890">and</span> <span
  m="433050">another</span> <span m="433370">that</span> <span
  m="433550">I</span> <span m="433620">just</span> <span
  m="434940">verbalized,</span> <span m="436840">is</span> <span
  m="437260">the</span> <span m="437370">notion</span> <span m="437750">of an
  augmenting</span> <span m="438240">path.</span> <span m="439230">And</span>
  <span m="439380">this</span> <span m="439510">is</span> <span
  m="439640">any</span> <span m="439900">path</span> <span
  m="440330">from</span> <span m="441570">s</span> <span m="441830">to</span>
  <span m="441970">t</span> <span m="443110">in</span> <span m="443290">G
  f.</span> <span m="444530">So</span> <span m="444830">if there's</span> <span
  m="445100">a</span> <span m="445170">path</span> <span m="445610">from</span>
  <span m="445840">S</span> <span m="445970">to</span> <span m="446060">T</span>
  <span m="446280">in</span> <span m="446400">G f</span> <span
  m="447880">you</span> <span m="448080">do</span> <span m="448260">not</span>
  <span m="448500">have</span> <span m="448740">a</span> <span
  m="448790">maximum</span> <span m="449230">flow.</span> <span
  m="450340">There</span> <span m="450720">is</span> <span m="450820">an</span>
  <span m="450910">augmenting</span> <span m="451340">path.</span> <span
  m="452060">You're</span> <span m="452200">going to</span> <span
  m="452290">be</span> <span m="452370">able</span> <span m="452510">to</span>
  <span m="452550">increase</span> <span m="452960">the</span> <span
  m="453050">flow</span> <span m="453740">corresponding</span> <span
  m="454190">to</span> <span m="454260">the f</span> <span
  m="454360">value,</span> <span m="455420">that</span> <span
  m="455630">gave</span> <span m="455900">you</span> <span
  m="456150">your</span> <span m="456300">residual</span> <span
  m="456730">network,</span> <span m="457550">G</span> <span m="457740">S
  of</span> <span m="457910">f.</span></p><p><span m="459060">And</span> <span
  m="459530">how</span> <span m="459770">much</span> <span m="460020">can</span>
  <span m="460170">you</span> <span m="460340">increase</span> <span
  m="460840">this</span> <span m="461070">flow</span> <span
  m="461320">by?</span> <span m="462000">How</span> <span m="462120">much</span>
  <span m="462310">can</span> <span m="462420">you</span> <span
  m="462520">increase</span> <span m="462880">f</span> <span
  m="463110">by?</span> <span m="463950">That</span> <span m="464290">is</span>
  <span m="468760">termed</span> <span m="469210">the</span> <span
  m="469290">residual</span> <span m="470030">capacity.</span> <span
  m="472590">And</span> <span m="472850">the</span> <span
  m="472920">residual</span> <span m="473370">capacity</span> <span
  m="475410">of an</span> <span m="476000">augmenting</span> <span
  m="476560">path</span> <span m="479040">is</span> <span
  m="479230">simply</span> <span m="480850">C f of</span> <span
  m="481600">P,</span> <span m="483340">that's</span> <span
  m="483470">what</span> <span m="483590">we're</span> <span
  m="483700">going</span> <span m="483820">to</span> <span
  m="483880">call</span> <span m="484140">it,</span> <span m="484840">C f
  of</span> <span m="485305">P,</span> <span m="486160">equals</span> <span
  m="487310">the</span> <span m="487420">minimum</span> <span
  m="487960">value</span> <span m="490970">of</span> <span m="492340">the</span>
  <span m="492440">residual</span> <span m="492960">capacities</span> <span
  m="494380">along</span> <span m="494670">the</span> <span
  m="494770">path.</span> <span m="496620">So</span> <span
  m="496690">this</span> <span m="496860">would</span> <span
  m="496950">be</span> <span m="497170">C f</span> <span m="499090">u,v,</span>
  <span m="502220">and</span> <span m="503130">that's</span> <span
  m="503310">pretty</span> <span m="503460">much</span> <span
  m="503660">it.</span></p><p><span m="505750">And</span> <span
  m="505940">some</span> <span m="506070">examples</span> <span
  m="507850">should</span> <span m="508040">make</span> <span
  m="508170">this</span> <span m="508320">clearer.</span> <span
  m="510040">If</span> <span m="510270">we</span> <span m="510420">look</span>
  <span m="510700">at</span> <span m="511970">what</span> <span
  m="512309">the</span> <span m="513010">actual</span> <span
  m="513450">algorithm</span> <span m="513780">is,</span> <span
  m="514210">and</span> <span m="515070">go</span> <span
  m="515280">through</span> <span m="515490">a</span> <span
  m="515570">simpler</span> <span m="515929">example</span> <span
  m="516350">than</span> <span m="516470">we</span> <span m="516559">did</span>
  <span m="516700">last</span> <span m="516960">time,</span> <span
  m="517640">but</span> <span m="517950">it'll</span> <span
  m="518100">give</span> <span m="518230">you</span> <span m="518330">a</span>
  <span m="518380">sense</span> <span m="518690">of</span> <span
  m="519740">how</span> <span m="521020">augmentations</span> <span
  m="522480">are</span> <span m="522580">going</span> <span m="522740">to</span>
  <span m="522780">change</span> <span m="523080">the</span> <span
  m="523169">flow.</span> <span m="523990">How</span> <span
  m="524370">augmenting</span> <span m="524820">paths</span> <span
  m="525600">appear</span> <span m="526510">and</span> <span
  m="526650">eventually</span> <span m="527040">disappear</span> <span
  m="528230">as</span> <span m="528560">the</span> <span m="528650">flow</span>
  <span m="528890">increases</span> <span m="529820">and</span> <span
  m="530030">reaches</span> <span m="530720">the</span> <span
  m="530850">maximum</span> <span m="531240">flow.</span></p><p><span
  m="533590">So</span> <span m="534460">this</span> <span
  m="534750">simply</span> <span m="535400">corresponds</span> <span
  m="535830">to,</span> <span m="536060">as</span> <span m="536200">I</span>
  <span m="536270">said,</span> <span m="537330">walking</span> <span
  m="537840">through</span> <span m="538060">the</span> <span
  m="538180">augmenting</span> <span m="538640">path,</span> <span
  m="539380">looking</span> <span m="539760">at</span> <span
  m="539880">each</span> <span m="540120">of</span> <span m="540200">the</span>
  <span m="540270">residual</span> <span m="540690">capacities,</span> <span
  m="541610">and</span> <span m="541780">picking</span> <span
  m="542010">the</span> <span m="542100">Min</span> <span
  m="542270">value.</span> <span m="544260">So</span> <span
  m="544470">the</span> <span m="544560">Ford-Fulkerson</span> <span
  m="545410">algorithm,</span> <span m="550170">which</span> <span
  m="550330">is</span> <span m="550430">the</span> <span m="551040">first</span>
  <span m="551440">algorithm</span> <span m="551850">for</span> <span
  m="553030">max</span> <span m="553450">flow</span> <span
  m="554750">continues</span> <span m="555240">to</span> <span
  m="555320">be</span> <span m="555440">used,</span> <span
  m="557390">sets</span> <span m="559540">the</span> <span
  m="559690">flow</span> <span m="571238">on</span> <span m="571710">each</span>
  <span m="571920">of</span> <span m="572010">the edges</span> <span
  m="572380">to</span> <span m="572450">be</span> <span m="572540">zero.</span>
  <span m="573100">So you</span> <span m="573280">just</span> <span
  m="574050">set</span> <span m="574300">everything</span> <span
  m="574580">to</span> <span m="574660">zero.</span> <span
  m="575550">Clearly</span> <span m="575830">satisfies</span> <span
  m="576840">flow</span> <span m="577090">conservation,</span> <span
  m="578810">satisfies</span> <span m="579290">all</span> <span m="579460">the
  edge</span> <span m="579700">capacities.</span> <span m="581360">And</span>
  <span m="582830">you</span> <span m="583260">have</span> <span
  m="583890">literally</span> <span m="584220">three</span> <span
  m="584450">lines</span> <span m="584720">of</span> <span
  m="584790">code</span> <span m="585090">here,</span> <span
  m="586650">while</span> <span m="587210">an</span> <span
  m="587500">augmenting</span> <span m="590770">path</span> <span
  m="594180">in</span> <span m="595150">G f</span> <span
  m="597280">exists.</span></p><p><span m="599200">So</span> <span
  m="599250">there's</span> <span m="599390">a</span> <span
  m="599440">lot</span> <span m="599680">going</span> <span m="599890">on</span>
  <span m="600070">here,</span> <span m="601130">you</span> <span
  m="601280">have</span> <span m="601390">to</span> <span
  m="601440">compute</span> <span m="601850">G</span> <span m="602050">of</span>
  <span m="602170">f,</span> <span m="602922">I mean it's three</span> <span
  m="603300">lines</span> <span m="603490">of</span> <span
  m="603560">code,</span> <span m="604250">but</span> <span
  m="606000">the</span> <span m="606730">sub</span> <span
  m="606960">routines</span> <span m="607270">calls,</span> <span
  m="608070">which</span> <span m="608240">are</span> <span
  m="608340">fairly</span> <span m="608630">complicated,</span> <span
  m="609880">you</span> <span m="609990">have</span> <span m="610090">to</span>
  <span m="610150">compute</span> <span m="610490">g</span> <span m="610670">of
  f,</span> <span m="611522">given</span> <span m="611890">f,</span> <span
  m="612690">and</span> <span m="612960">initially</span> <span
  m="613130">it's</span> <span m="613320">all</span> <span
  m="613490">zeros.</span> <span m="614760">And</span> <span
  m="614960">then</span> <span m="615100">eventually</span> <span
  m="615420">it's</span> <span m="615510">going</span> <span
  m="615630">to</span> <span m="615700">change,</span> <span
  m="616700">or</span> <span m="617280">immediately</span> <span
  m="618590">after</span> <span m="618870">you</span> <span
  m="618970">discover</span> <span m="619340">an</span> <span
  m="619450">augmenting</span> <span m="619850">path.</span> <span
  m="620610">And</span> <span m="620770">now you</span> <span
  m="620870">have</span> <span m="621040">discovered</span> <span
  m="621470">an</span> <span m="621590">augmenting</span> <span
  m="622010">path.</span> <span m="623040">So</span> <span m="623630">you</span>
  <span m="623880">have</span> <span m="624060">to</span> <span
  m="624240">now</span> <span m="624520">do</span> <span
  m="625890">either</span> <span m="626170">breadth-first</span> <span
  m="626600">search</span> <span m="626940">or</span> <span
  m="627020">depth-first</span> <span m="627440">search,</span> <span
  m="628230">in</span> <span m="628500">order</span> <span m="628620">to</span>
  <span m="629010">discover</span> <span m="629480">whether</span> <span
  m="629650">this is</span> <span m="629830">a</span> <span
  m="629890">path</span> <span m="630210">from</span> <span m="630390">s</span>
  <span m="630580">to</span> <span m="630700">t</span> <span
  m="631120">because</span> <span m="631400">that's</span> <span
  m="631610">the</span> <span m="631690">definition</span> <span m="632160">of
  an</span> <span m="632300">augmenting</span> <span
  m="632700">path.</span></p><p><span m="633500">And</span> <span
  m="633660">then</span> <span m="634600">the</span> <span
  m="634740">last</span> <span m="634980">line</span> <span m="635140">of</span>
  <span m="635230">code</span> <span m="635520">says,</span> <span
  m="637240">augment</span> <span m="639450">f</span> <span m="640730">by</span>
  <span m="641760">C f</span> <span m="643410">of</span> <span
  m="643620">p.</span> <span m="645510">And</span> <span m="645680">again</span>
  <span m="645990">this is</span> <span m="646160">fairly</span> <span
  m="646440">involved.</span> <span m="647900">You</span> <span
  m="648550">have</span> <span m="648730">to</span> <span m="648850">take</span>
  <span m="649080">the</span> <span m="649170">path</span> <span m="650330">in
  G</span> <span m="650790">of</span> <span m="650930">f.</span> <span
  m="652210">You're</span> <span m="652400">going</span> <span
  m="652650">to</span> <span m="652750">increase</span> <span
  m="654900">the</span> <span m="655070">values</span> <span
  m="656490">of</span> <span m="658150">the</span> <span m="659030">edges</span>
  <span m="660270">that</span> <span m="660680">correspond</span> <span
  m="661220">to</span> <span m="663420">G of</span> <span m="663795">f</span>
  <span m="665370">translating</span> <span m="665980">those</span> <span
  m="666190">edges</span> <span m="666710">back</span> <span
  m="667040">to</span> <span m="667140">G.</span> <span m="668100">And</span>
  <span m="668540">there's</span> <span m="668790">possibly</span> <span
  m="669370">an</span> <span m="669460">inversion</span> <span
  m="670590">in</span> <span m="670770">direction</span> <span
  m="671920">that</span> <span m="672690">is</span> <span
  m="672870">associated</span> <span m="673370">with</span> <span
  m="673520">that</span> <span m="673920">translation.</span> <span
  m="675070">And</span> <span m="675220">so</span> <span m="675370">if</span>
  <span m="675430">you</span> <span m="675510">take</span> <span
  m="675710">a</span> <span m="676070">really</span> <span
  m="676380">straightforward</span> <span m="676900">example.</span> <span
  m="678970">Let's</span> <span m="679190">say</span> <span m="679350">if
  you</span> <span m="679470">have</span> <span m="679690">G</span> <span
  m="680780">is</span> <span m="681440">s,</span> <span m="682550">and</span>
  <span m="682690">this</span> <span m="682940">one</span> <span
  m="683440">vertex</span> <span m="683920">here,</span> <span
  m="684290">a,</span> <span m="685511">and</span> <span m="685920">then</span>
  <span m="686030">you</span> <span m="686130">have</span> <span
  m="686310">t.</span> <span m="687310">And</span> <span m="687480">right</span>
  <span m="687720">now</span> <span m="687900">I</span> <span
  m="688010">have</span> <span m="688770">1:2</span> <span m="690620">and</span>
  <span m="690810">1:4.</span> <span m="694250">I</span> <span m="694450">now
  am</span> <span m="694740">going</span> <span m="694850">to</span> <span
  m="694910">compute</span> <span m="695340">G</span> <span m="695550">of</span>
  <span m="695680">f.</span> <span m="696940">So</span> <span
  m="697310">G</span> <span m="697560">of</span> <span m="697690">f</span> <span
  m="698090">is</span> <span m="698270">going</span> <span m="698490">to</span>
  <span m="698560">be--</span> <span m="698780">I'm</span> <span
  m="698870">just</span> <span m="699080">going to write</span> <span
  m="699320">down</span> <span m="699550">s,</span> <span m="700395">a,</span>
  <span m="700670">and</span> <span m="701710">t</span> <span
  m="702020">because</span> <span m="702250">the</span> <span
  m="702310">vertices</span> <span m="703440">are</span> <span
  m="703590">all</span> <span m="703730">the</span> <span
  m="703820">same.</span> <span m="704770">The</span> <span
  m="704780">edges</span> <span m="705150">are</span> <span
  m="705270">obviously</span> <span m="705630">different.</span></p><p><span
  m="708710">Am</span> <span m="708860">I</span> <span m="708950">going</span>
  <span m="709090">to</span> <span m="709130">have</span> <span
  m="709310">an</span> <span m="709400">edge</span> <span m="709650">from</span>
  <span m="709870">s to a?</span> <span m="712110">Yes.</span> <span
  m="713700">And</span> <span m="714080">what</span> <span
  m="714430">number</span> <span m="714730">should</span> <span
  m="714890">I</span> <span m="714920">put</span> <span m="715090">on</span>
  <span m="715210">that</span> <span m="715340">edge?</span> <span
  m="716850">1,</span> <span m="717220">and</span> <span
  m="717370">that's</span> <span m="717600">because</span> <span
  m="717840">it's</span> <span m="718020">2</span> <span m="718190">minus</span>
  <span m="718570">1,</span> <span m="720400">not</span> <span
  m="720580">because</span> <span m="720840">it's</span> <span
  m="721010">just</span> <span m="721280">plain</span> <span
  m="721560">1.</span> <span m="724450">And</span> <span m="724640">this</span>
  <span m="724840">edge</span> <span m="724970">here</span> <span
  m="726000">is</span> <span m="726180">going</span> <span m="726300">to</span>
  <span m="726340">have</span> <span m="728000">a</span> <span
  m="728070">residual</span> <span m="728660">capacity</span> <span
  m="729170">of</span> <span m="730340">1,</span> <span m="730750">and</span>
  <span m="730890">that</span> <span m="731050">just</span> <span
  m="731260">comes</span> <span m="731460">directly</span> <span
  m="731860">from</span> <span m="732060">that</span> <span m="732270">1.</span>
  <span m="734830">And</span> <span m="734990">what</span> <span
  m="735140">that</span> <span m="735310">means</span> <span
  m="735600">is,</span> <span m="735940">and</span> <span m="736180">this</span>
  <span m="736320">is</span> <span m="736440">important,</span> <span
  m="737530">what</span> <span m="737700">that</span> <span
  m="737810">means</span> <span m="738090">is</span> <span
  m="738240">that,</span> <span m="739480">in</span> <span
  m="739550">effect,</span> <span m="740960">this</span> <span
  m="741370">residual</span> <span m="741830">capacity</span> <span
  m="742340">says</span> <span m="743120">in</span> <span m="743290">this</span>
  <span m="743520">direction</span> <span m="744510">you</span> <span
  m="744670">still</span> <span m="744990">have</span> <span m="745160">a</span>
  <span m="745220">capacity</span> <span m="745810">of</span> <span
  m="745900">1.</span> <span m="746900">Which</span> <span
  m="747080">means</span> <span m="747350">that</span> <span
  m="747520">in</span> <span m="747650">this</span> <span
  m="747840">direction</span> <span m="748360">you</span> <span
  m="748470">could</span> <span m="748640">reduce</span> <span
  m="749050">by</span> <span m="749220">one.</span></p><p><span
  m="750110">OK,</span> <span m="750730">that's</span> <span
  m="751060">the</span> <span m="751190">important</span> <span
  m="751560">thing</span> <span m="751720">to</span> <span
  m="751810">remember.</span> <span m="752790">And</span> <span
  m="753360">over</span> <span m="753530">here</span> <span
  m="755090">I'm</span> <span m="755230">going</span> <span m="755360">to</span>
  <span m="755410">have--</span> <span m="756710">this</span> <span
  m="756970">way</span> <span m="757310">I'm</span> <span
  m="757440">going</span> <span m="757570">to</span> <span
  m="757610">have</span> <span m="758100">3</span> <span m="759150">and</span>
  <span m="759410">coming</span> <span m="759660">back</span> <span
  m="760100">I'm</span> <span m="760230">going</span> <span m="760350">to</span>
  <span m="760390">have</span> <span m="760580">1.</span> <span
  m="762410">All</span> <span m="762480">right,</span> <span
  m="763080">so</span> <span m="764290">straightforward</span> <span
  m="764760">example</span> <span m="765850">but</span> <span
  m="766130">I</span> <span m="766260">think</span> <span
  m="767770">evocative</span> <span m="768350">in</span> <span
  m="768500">the</span> <span m="768600">sense</span> <span
  m="768870">that</span> <span m="769030">it</span> <span
  m="769140">applies</span> <span m="769620">the</span> <span
  m="769720">concepts</span> <span m="770840">that</span> <span
  m="771350">we've</span> <span m="771510">seen</span> <span
  m="771720">so</span> <span m="771890">far</span> <span m="772850">other</span>
  <span m="773770">than</span> <span m="773940">cuts.</span> <span
  m="775110">And</span> <span m="775240">we'll</span> <span
  m="775350">get</span> <span m="775510">to</span> <span m="775580">that.</span>
  <span m="776370">And</span> <span m="776610">what</span> <span
  m="776730">happens</span> <span m="777020">here,</span> <span
  m="777670">is</span> <span m="777980">there</span> <span m="778170">a</span>
  <span m="778210">path</span> <span m="778500">from</span> <span
  m="778690">s</span> <span m="778840">to</span> <span m="778970">t?</span>
  <span m="780230">Absolutely.</span> <span m="781380">And</span> <span
  m="782180">what</span> <span m="782420">is</span> <span m="782670">the</span>
  <span m="783110">residual</span> <span m="783970">capacity</span> <span
  m="785210">of</span> <span m="785380">the</span> <span m="785470">path</span>
  <span m="786160">from</span> <span m="786400">s</span> <span m="786450">to
  t?</span></p><p><span m="789460">It's</span> <span m="789770">one</span> <span
  m="790230">because</span> <span m="790510">you've</span> <span
  m="790600">got</span> <span m="790710">a</span> <span m="790760">1</span>
  <span m="791060">here,</span> <span m="791280">and</span> <span
  m="791390">you</span> <span m="791590">got a</span> <span m="791740">3</span>
  <span m="792020">here,</span> <span m="792130">you</span> <span
  m="792320">got</span> <span m="792440">to</span> <span m="792500">take</span>
  <span m="792680">the</span> <span m="792750">Min,</span> <span
  m="793410">and</span> <span m="793560">it's</span> <span m="793680">1.</span>
  <span m="794340">Right,</span> <span m="794550">I</span> <span
  m="794670">guess</span> <span m="794800">that's</span> <span
  m="795000">the</span> <span m="795080">number</span> <span
  m="795310">of</span> <span m="795390">choice</span> <span
  m="795740">today,</span> <span m="796450">one.</span> <span
  m="797860">But</span> <span m="798490">once</span> <span m="798760">you</span>
  <span m="798860">do</span> <span m="799030">that</span> <span m="799490">and
  you</span> <span m="799560">find</span> <span m="799910">that,</span> <span
  m="800510">you</span> <span m="800630">say,</span> <span m="800920">OK,</span>
  <span m="801110">what</span> <span m="801250">I'm</span> <span
  m="801340">going</span> <span m="801490">to</span> <span m="801580">do</span>
  <span m="801850">is--</span> <span m="803140">and</span> <span
  m="803260">this</span> <span m="803390">is</span> <span
  m="803440">going</span> <span m="803550">to</span> <span m="803590">be</span>
  <span m="803680">pretty</span> <span m="803870">straightforward--</span> <span
  m="804540">I'm</span> <span m="804660">going</span> <span m="804760">to</span>
  <span m="805360">look</span> <span m="805580">at</span> <span
  m="805680">these</span> <span m="805910">edges,</span> <span
  m="807280">and</span> <span m="808200">I</span> <span m="808350">know</span>
  <span m="808550">that</span> <span m="808720">I</span> <span
  m="808740">have</span> <span m="808880">c</span> <span m="809090">of</span>
  <span m="809220">t</span> <span m="810080">being</span> <span
  m="810370">a</span> <span m="810470">one</span> <span
  m="811110">corresponding</span> <span m="811530">to</span> <span
  m="811590">this</span> <span m="811780">value.</span> <span
  m="812680">And</span> <span m="812820">I'm</span> <span
  m="812900">going</span> <span m="813010">to</span> <span m="813050">go</span>
  <span m="813180">add</span> <span m="813470">one</span> <span
  m="814080">to</span> <span m="814170">those</span> <span
  m="814440">corresponding</span> <span m="814990">edges</span> <span
  m="815800">because</span> <span m="816680">these</span> <span
  m="816910">are</span> <span m="816960">the</span> <span
  m="817060">edges</span> <span m="817390">that</span> <span
  m="817530">actually</span> <span m="817850">shows</span> <span
  m="819970">in</span> <span m="820420">terms</span> <span m="820650">of</span>
  <span m="820770">the augmenting</span> <span m="821260">path.</span> <span
  m="821600">So the</span> <span m="821690">augmenting</span> <span
  m="822080">path</span> <span m="822370">is</span> <span
  m="822510">that.</span></p><p><span m="824960">And</span> <span
  m="825130">so</span> <span m="825250">this</span> <span
  m="825520">turns</span> <span m="825830">into</span> <span m="827730">s</span>
  <span m="829190">to</span> <span m="830038">a</span> <span
  m="830886">to</span> <span m="831310">t,</span> <span m="832380">and</span>
  <span m="832680">that</span> <span m="832880">becomes</span> <span
  m="833870">2:2.</span> <span m="835660">This</span> <span
  m="835920">becomes</span> <span m="836310">2:4</span> <span
  m="838170">and</span> <span m="838840">that's</span> <span
  m="839080">it.</span> <span m="842850">So</span> <span m="843165">I</span>
  <span m="843580">now</span> <span m="843740">have</span> <span
  m="843880">G</span> <span m="844180">with</span> <span m="844290">the</span>
  <span m="844370">new</span> <span m="844620">f.</span> <span
  m="845540">So</span> <span m="845710">I</span> <span m="845810">can</span>
  <span m="845940">now</span> <span m="846100">think</span> <span
  m="846270">about</span> <span m="847720">what</span> <span
  m="847880">is</span> <span m="848020">G</span> <span m="848190">of</span>
  <span m="848300">f1</span> <span m="849470">correspond</span> <span
  m="849870">to.</span> <span m="850880">The</span> <span m="851060">G</span>
  <span m="853140">is</span> <span m="853330">separate</span> <span
  m="853720">from</span> <span m="853890">f,</span> <span m="854520">so</span>
  <span m="855220">in</span> <span m="855330">some</span> <span
  m="855490">sense</span> <span m="855810">the G</span> <span
  m="855940">stayed</span> <span m="856110">the</span> <span
  m="856260">same,</span> <span m="857140">but</span> <span
  m="857320">the</span> <span m="857390">f</span> <span
  m="857960">changed,</span> <span m="859170">as</span> <span
  m="859360">you</span> <span m="859470">saw</span> <span
  m="859660">here.</span> <span m="860320">And</span> <span m="860540">now G
  f1</span> <span m="861510">looks</span> <span m="861780">like</span> <span
  m="862090">s,</span> <span m="863350">a,</span> <span m="864646">t.</span>
  <span m="867980">What</span> <span m="868120">do</span> <span
  m="868180">I</span> <span m="868260">do</span> <span m="868400">between</span>
  <span m="868700">s and</span> <span m="869150">a?</span></p><p><span
  m="872160">Well,</span> <span m="872410">I</span> <span m="872510">only</span>
  <span m="872690">have</span> <span m="872820">something</span> <span
  m="873070">from</span> <span m="873220">a to</span> <span m="873440">s.</span>
  <span m="874312">I</span> <span m="874750">don't</span> <span
  m="874900">have</span> <span m="875000">anything</span> <span
  m="875260">from</span> <span m="875500">s</span> <span m="875720">to</span>
  <span m="875840">a</span> <span m="876500">because</span> <span
  m="876800">the</span> <span m="876880">residual</span> <span
  m="877300">capacity</span> <span m="877790">in</span> <span
  m="877890">this</span> <span m="878080">direction,</span> <span
  m="878990">thanks</span> <span m="879250">to</span> <span
  m="879320">the</span> <span m="879410">fact</span> <span
  m="879710">that</span> <span m="879790">the</span> <span
  m="879860">flow</span> <span m="880250">has</span> <span
  m="880390">saturated</span> <span m="881620">the</span> <span
  m="881750">edge</span> <span m="881990">capacity,</span> <span
  m="882880">is</span> <span m="883040">actually</span> <span
  m="883340">zero.</span> <span m="884340">But</span> <span m="884490">I</span>
  <span m="884560">do</span> <span m="884770">have</span> <span
  m="884930">an</span> <span m="885020">edge</span> <span m="885250">this</span>
  <span m="885460">way.</span> <span m="886440">And</span> <span
  m="886830">what</span> <span m="887020">is</span> <span m="887110">the</span>
  <span m="887160">value</span> <span m="887500">for</span> <span
  m="887610">that</span> <span m="887770">edge?</span> <span
  m="889220">It's</span> <span m="889350">2.</span> <span m="890750">And</span>
  <span m="890930">over</span> <span m="891100">here,</span> <span
  m="892680">what</span> <span m="892830">are</span> <span m="892850">the</span>
  <span m="892950">numbers</span> <span m="893480">for</span> <span
  m="893620">the</span> <span m="893750">top</span> <span m="894010">and</span>
  <span m="894090">the</span> <span m="894160">bottom?</span> <span
  m="895530">2</span> <span m="895740">and</span> <span
  m="895860">2.</span></p><p><span m="897610">And</span> <span
  m="897780">now</span> <span m="897900">I</span> <span m="898010">look</span>
  <span m="898180">at</span> <span m="898280">G f1,</span> <span
  m="899480">and</span> <span m="900400">I've</span> <span
  m="900510">gone</span> <span m="900770">through</span> <span
  m="900910">one</span> <span m="901120">iteration</span> <span
  m="901640">of</span> <span m="901760">this</span> <span
  m="902610">pseudo</span> <span m="902980">code,</span> <span
  m="903710">and</span> <span m="903870">I</span> <span m="903920">now</span>
  <span m="904150">try</span> <span m="904350">to</span> <span
  m="904450">find</span> <span m="904840">an</span> <span
  m="904940">augmenting</span> <span m="905470">path</span> <span
  m="906180">in</span> <span m="906330">G f1.</span> <span m="907290">And</span>
  <span m="907670">is</span> <span m="907810">there</span> <span
  m="907930">a</span> <span m="907980">path</span> <span m="908260">from</span>
  <span m="908420">s</span> <span m="908560">to</span> <span
  m="908680">t?</span> <span m="910010">No,</span> <span m="910910">which</span>
  <span m="911080">means</span> <span m="911550">I'm</span> <span
  m="911730">done.</span> <span m="912590">This</span> <span
  m="912770">is</span> <span m="912880">the</span> <span m="912960">max
  flow.</span> <span m="914740">You</span> <span m="914870">believe</span> <span
  m="915140">me?</span> <span m="919270">For this</span> <span
  m="919600">example,</span> <span m="920120">you</span> <span
  m="920200">believe</span> <span m="920530">me.</span> <span
  m="921310">You</span> <span m="921430">believe</span> <span
  m="921750">me,</span> <span m="922050">like,</span> <span
  m="922320">for</span> <span m="923190">every</span> <span
  m="923500">example?</span> <span m="926230">No,</span> <span
  m="926920">absolutely</span> <span m="927320">not</span> <span
  m="928190">because you</span> <span m="928400">haven't done</span> <span
  m="928520">a proof!</span> <span m="930260">We</span> <span
  m="930360">haven't</span> <span m="930490">done</span> <span
  m="930730">a</span> <span m="930810">proof!</span> <span
  m="933620">That's</span> <span m="933860">why</span> <span
  m="934010">you</span> <span m="934090">shouldn't</span> <span
  m="934260">believe</span> <span m="934550">me.</span></p><p><span
  m="937310">So</span> <span m="937480">we</span> <span m="937620">got to</span>
  <span m="937820">do a</span> <span m="937890">proof.</span> <span
  m="939410">So</span> <span m="940380">how</span> <span m="940660">is</span>
  <span m="940780">it</span> <span m="940930">that</span> <span
  m="941050">we</span> <span m="941170">know,</span> <span
  m="942200">given</span> <span m="942300">all</span> <span m="942450">of</span>
  <span m="942550">this,</span> <span m="943740">it's</span> <span
  m="943880">not</span> <span m="944060">because</span> <span
  m="944290">I</span> <span m="944370">told</span> <span m="944610">you</span>
  <span m="944710">so,</span> <span m="946550">that</span> <span m="947290">when
  we've</span> <span m="948650">converged.</span> <span m="949320">When</span>
  <span m="949460">we</span> <span m="950200">get</span> <span
  m="950380">out</span> <span m="950540">of</span> <span m="950630">this</span>
  <span m="951230">while</span> <span m="951510">loop,</span> <span
  m="952350">that</span> <span m="952510">we</span> <span m="952610">have</span>
  <span m="952770">a</span> <span m="952820">max flow.</span> <span
  m="955510">Looks</span> <span m="955780">pretty</span> <span
  m="955970">good.</span> <span m="956130">Worked</span> <span
  m="957370">for</span> <span m="957460">that</span> <span
  m="957630">example</span> <span m="959050">and</span> <span
  m="959240">it's</span> <span m="959360">going to work</span> <span
  m="959570">for</span> <span m="959730">every</span> <span
  m="959920">example,</span> <span m="960840">but</span> <span
  m="961000">that's</span> <span m="961180">not a</span> <span
  m="961360">proof.</span></p><p><span m="963010">So</span> <span
  m="963160">now</span> <span m="963450">we</span> <span m="963550">have</span>
  <span m="963670">to</span> <span m="963720">sort</span> <span
  m="963870">of</span> <span m="963960">take in</span> <span
  m="964310">all</span> <span m="964600">of</span> <span m="964650">the</span>
  <span m="965910">notions</span> <span m="966330">that</span> <span
  m="966460">we've</span> <span m="966660">talked</span> <span
  m="966900">about</span> <span m="967110">here,</span> <span
  m="967580">including</span> <span m="968700">primarily</span> <span
  m="969230">the</span> <span m="969330">notion</span> <span
  m="969650">of</span> <span m="969790">cuts.</span> <span m="970870">And</span>
  <span m="971350">the proof,</span> <span m="971720">the</span> <span
  m="971790">max flow,</span> <span m="972290">min-cut</span> <span
  m="972610">theorem,</span> <span m="973510">which</span> <span
  m="974920">is</span> <span m="975130">going</span> <span m="975390">to</span>
  <span m="975620">show</span> <span m="976500">this</span> <span
  m="977000">key</span> <span m="977240">result</span> <span
  m="977590">that</span> <span m="977710">we</span> <span
  m="977820">require,</span> <span m="978790">which</span> <span
  m="978990">is</span> <span m="979140">that</span> <span m="979890">when
  we</span> <span m="980080">terminate</span> <span m="981220">in</span> <span
  m="981360">the</span> <span m="981450">Ford-Fulkerson</span> <span
  m="982240">algorithm,</span> <span m="983570">we're</span> <span
  m="983650">going</span> <span m="983940">to</span> <span
  m="984820">have</span> <span m="985060">a</span> <span m="985110">max
  flow.</span> <span m="986420">And</span> <span m="986530">that's</span> <span
  m="986720">the</span> <span m="986790">reason</span> <span
  m="987030">why</span> <span m="987270">it's</span> <span m="987790">a</span>
  <span m="987840">maximum</span> <span m="988330">flow</span> <span
  m="988620">algorithm.</span> <span m="989620">If</span> <span
  m="989710">you</span> <span m="989770">don't</span> <span
  m="989920">have</span> <span m="990070">that</span> <span
  m="990190">proof,</span> <span m="990510">you</span> <span
  m="990620">don't</span> <span m="990760">have</span> <span m="990880">a</span>
  <span m="990920">max</span> <span m="991200">flow</span> <span
  m="991495">algorithm.</span></p><p><span m="994320">So</span> <span
  m="994620">hopefully all of</span> <span m="995060">that is</span> <span
  m="995440">clear.</span> <span m="997560">Pipe</span> <span
  m="997990">up</span> <span m="998140">if</span> <span m="998250">you</span>
  <span m="998340">have</span> <span m="998470">questions.</span> <span
  m="1000020">And</span> <span m="1000960">let's</span> <span
  m="1001150">write</span> <span m="1001370">out</span> <span
  m="1001710">the</span> <span m="1001800">max</span> <span
  m="1002120">flow</span> <span m="1002440">min-cut</span> <span
  m="1002700">theorem,</span> <span m="1004360">which</span> <span
  m="1008180">I</span> <span m="1008300">mentioned</span> <span
  m="1009280">of</span> <span m="1009460">it</span> <span
  m="1009680">last</span> <span m="1009980">time</span> <span
  m="1011550">but</span> <span m="1011670">never</span> <span
  m="1011870">really</span> <span m="1012030">got</span> <span
  m="1012320">to</span> <span m="1014340">even</span> <span
  m="1014580">stating,</span> <span m="1015810">but</span> <span
  m="1015960">today</span> <span m="1016120">we're</span> <span
  m="1016230">going</span> <span m="1016320">to</span> <span
  m="1016390">state</span> <span m="1016720">it</span> <span
  m="1017490">and</span> <span m="1019300">prove</span> <span
  m="1019590">it.</span> <span m="1029540">So</span> <span
  m="1030420">this</span> <span m="1030650">is</span> <span
  m="1030790">an</span> <span m="1030920">interesting</span> <span
  m="1031319">theorem.</span> <span m="1031960">I mean it's a</span> <span
  m="1032810">legendary</span> <span m="1033490">theorem.</span> <span
  m="1034569">And</span> <span m="1035829">it's</span> <span
  m="1035980">not</span> <span m="1036359">your</span> <span
  m="1037579">usual</span> <span m="1040839">theorem</span> <span
  m="1041270">in</span> <span m="1041319">the</span> <span
  m="1041420">sense</span> <span m="1041750">that</span> <span
  m="1044690">it</span> <span m="1044849">makes</span> <span
  m="1045599">a</span> <span m="1045700">simple</span> <span
  m="1046180">statement.</span> <span m="1046670">It</span> <span
  m="1046760">actually</span> <span m="1047000">makes</span> <span
  m="1047710">three</span> <span m="1048030">statements.</span> <span
  m="1049430">It</span> <span m="1049990">says</span> <span
  m="1050320">the</span> <span m="1050410">following</span> <span
  m="1050980">are</span> <span m="1051100">equivalent,</span> <span
  m="1052100">and</span> <span m="1052210">it's</span> <span
  m="1052340">got</span> <span m="1052880">three</span> <span
  m="1053180">things</span> <span m="1054650">which</span> <span
  m="1055650">are</span> <span m="1055870">the</span> <span
  m="1055990">following.</span> <span m="1059140">F</span> <span
  m="1060550">equals</span> <span m="1061090">c</span> <span m="1061568">S
  T</span> <span m="1065180">for</span> <span m="1066230">some</span> <span
  m="1067010">cut,</span> <span m="1070070">S,T.</span> <span
  m="1072080">This</span> <span m="1072320">says</span> <span
  m="1072560">that</span> <span m="1074340">some</span> <span
  m="1074800">cut</span> <span m="1075870">is</span> <span
  m="1076140">saturated.</span> <span m="1077810">Right,</span> <span
  m="1077960">so</span> <span m="1078030">that's</span> <span
  m="1078200">just</span> <span m="1078380">the</span> <span
  m="1078480">statement.</span></p><p><span m="1080130">The</span> <span
  m="1080640">second</span> <span m="1081060">statement,</span> <span
  m="1085270">which</span> <span m="1085360">is</span> <span
  m="1085450">equivalent</span> <span m="1085950">to</span> <span
  m="1086020">the</span> <span m="1086120">first</span> <span
  m="1086400">one,</span> <span m="1087650">says</span> <span
  m="1087960">that</span> <span m="1088160">f</span> <span m="1089270">is</span>
  <span m="1089460">a</span> <span m="1089510">maximum</span> <span
  m="1090030">flow.</span> <span m="1094990">So</span> <span m="1095480">f
  being</span> <span m="1095880">a</span> <span m="1095930">maximum</span> <span
  m="1096550">flow</span> <span m="1096910">means</span> <span
  m="1097750">there's</span> <span m="1097960">some</span> <span
  m="1098290">cut</span> <span m="1098540">that's</span> <span
  m="1098720">saturated.</span> <span m="1099710">If</span> <span
  m="1099830">there's</span> <span m="1100040">some</span> <span
  m="1100260">cut</span> <span m="1100500">that's</span> <span
  m="1100610">saturated</span> <span m="1101290">for a given</span> <span
  m="1101680">flow,</span> <span m="1102520">you</span> <span
  m="1102750">have</span> <span m="1102990">a max flow.</span> <span
  m="1104360">And</span> <span m="1104520">then</span> <span
  m="1104640">the</span> <span m="1104710">last</span> <span
  m="1104970">one,</span> <span m="1105170">which</span> <span
  m="1105320">is</span> <span m="1106410">important</span> <span
  m="1106900">for</span> <span m="1107970">our</span> <span
  m="1108510">Ford-Fulkerson</span> <span m="1109250">algorithm,</span> <span
  m="1111020">is</span> <span m="1111400">that</span> <span m="1112100">f</span>
  <span m="1113120">admits</span> <span m="1115770">no</span> <span
  m="1117680">augmenting</span> <span m="1120210">paths.</span></p><p><span
  m="1123860">And</span> <span m="1124070">so</span> <span m="1125050">if</span>
  <span m="1125240">I</span> <span m="1125310">want</span> <span
  m="1125540">to</span> <span m="1125610">show</span> <span
  m="1127650">that</span> <span m="1128110">the</span> <span
  m="1128220">Ford-Fulkerson</span> <span m="1129180">algorithm</span> <span
  m="1130780">terminates</span> <span m="1132140">with</span> <span
  m="1132330">a</span> <span m="1132370">max</span> <span
  m="1132670">flow,</span> <span m="1133920">tell</span> <span
  m="1134180">me,</span> <span m="1134670">based</span> <span
  m="1135090">on</span> <span m="1135260">implications--</span> <span
  m="1136960">like</span> <span m="1138150">i</span> <span
  m="1138500">implies</span> <span m="1139080">j,</span> <span
  m="1139990">for</span> <span m="1140280">numbers</span> <span
  m="1140720">i</span> <span m="1140890">and</span> <span m="1141060">j,</span>
  <span m="1141950">what</span> <span m="1142190">it</span> <span
  m="1142300">is</span> <span m="1142550">that</span> <span m="1142770">I</span>
  <span m="1142840">need</span> <span m="1143060">to</span> <span
  m="1143160">prove.</span> <span m="1144000">We're</span> <span
  m="1144160">going to</span> <span m="1144300">prove</span> <span
  m="1144500">a</span> <span m="1144550">bunch</span> <span
  m="1144770">of</span> <span m="1144860">other</span> <span
  m="1145020">things</span> <span m="1145790">along</span> <span
  m="1146050">the</span> <span m="1146140">way</span> <span
  m="1146960">but</span> <span m="1148210">crucially</span> <span
  m="1148800">what</span> <span m="1149030">is</span> <span m="1149180">the
  i</span> <span m="1149330">implies</span> <span m="1150110">j</span> <span
  m="1150900">that</span> <span m="1151040">I</span> <span
  m="1151090">want</span> <span m="1152020">if</span> <span m="1152440">I</span>
  <span m="1152630">want</span> <span m="1152820">to</span> <span
  m="1153190">claim</span> <span m="1153600">that</span> <span
  m="1153780">the</span> <span m="1153860">Ford-Fulkerson</span> <span
  m="1154590">algorithm</span> <span m="1155920">terminates</span> <span
  m="1157140">with</span> <span m="1157290">the</span> <span m="1157320">max
  flow.</span></p><p><span m="1162040">Yeah,</span> <span m="1162430">you
  over</span> <span m="1162680">there.</span></p><p><span m="1163315">AUDIENCE:
  3</span> <span m="1163790">implies</span> <span
  m="1164265">2.</span></p><p><span m="1165690">PROFESSOR: 3</span> <span
  m="1166050">implies</span> <span m="1168240">2.</span> <span
  m="1169010">That's</span> <span m="1169310">right,</span> <span
  m="1169520">3</span> <span m="1169710">implies</span> <span
  m="1170100">2,</span> <span m="1170320">exactly</span> <span
  m="1170700">right.</span> <span m="1171670">3</span> <span
  m="1171850">implies</span> <span m="1172210">2.</span> <span
  m="1175990">So</span> <span m="1178830">we</span> <span
  m="1178930">need</span> <span m="1179100">to</span> <span
  m="1179310">do</span> <span m="1179490">3</span> <span
  m="1179720">implies</span> <span m="1180090">2.</span> <span
  m="1181110">Now</span> <span m="1181240">of</span> <span
  m="1181320">course,</span> <span m="1181500">the</span> <span
  m="1181590">theorem</span> <span m="1181860">says</span> <span
  m="1182160">that,</span> <span m="1184580">1</span> <span
  m="1184870">implies</span> <span m="1185330">2,</span> <span
  m="1185760">2</span> <span m="1185960">implies</span> <span
  m="1186370">3,</span> <span m="1187102">3</span> <span
  m="1187470">implies</span> <span m="1187790">1,</span> <span m="1188720">et
  cetera.</span> <span m="1189950">There's</span> <span m="1190080">a</span>
  <span m="1190140">lot</span> <span m="1190380">of</span> <span
  m="1190480">implications</span> <span m="1191060">here.</span> <span
  m="1192350">What</span> <span m="1192580">we</span> <span
  m="1192750">are</span> <span m="1192840">going</span> <span
  m="1193000">to</span> <span m="1193090">do</span> <span m="1194010">is</span>
  <span m="1194400">we're</span> <span m="1194500">going</span> <span
  m="1194720">to</span> <span m="1194820">show</span> <span
  m="1196700">that</span> <span m="1197450">1</span> <span
  m="1197790">implies</span> <span m="1198240">2,</span> <span
  m="1199710">2</span> <span m="1199880">implies</span> <span
  m="1200350">3,</span> <span m="1201440">and</span> <span m="1201690">3</span>
  <span m="1201870">implies</span> <span m="1202210">1.</span> <span
  m="1203590">And</span> <span m="1203860">that</span> <span
  m="1204000">pretty</span> <span m="1204150">much</span> <span
  m="1204300">takes</span> <span m="1204490">care</span> <span
  m="1204650">of</span> <span m="1204740">everything.</span></p><p><span
  m="1207040">And</span> <span m="1207070">it</span> <span
  m="1207150">turns</span> <span m="1207390">out</span> <span
  m="1207550">the</span> <span m="1207630">reason</span> <span
  m="1207880">we</span> <span m="1207990">do</span> <span
  m="1208120">this</span> <span m="1209090">is</span> <span
  m="1209280">simply</span> <span m="1210160">because</span> <span
  m="1210500">it</span> <span m="1210800">makes</span> <span
  m="1211100">for</span> <span m="1211210">the</span> <span
  m="1211290">simplest</span> <span m="1212400">proofs.</span> <span
  m="1213400">1</span> <span m="1213590">implies</span> <span
  m="1213950">2</span> <span m="1214240">and</span> <span m="1214570">2</span>
  <span m="1214720">implies</span> <span m="1214960">3</span> <span
  m="1215370">are</span> <span m="1215570">one-</span> <span
  m="1215780">liners,</span> <span m="1217090">and</span> <span
  m="1217460">that</span> <span m="1217750">3 implies</span> <span
  m="1218040">1</span> <span m="1218250">is</span> <span m="1218340">a</span>
  <span m="1218410">little</span> <span m="1218550">more</span> <span
  m="1218930">interesting</span> <span m="1219330">and involved,</span> <span
  m="1220410">but</span> <span m="1221290">it's</span> <span
  m="1222300">a</span> <span m="1222340">little</span> <span
  m="1222460">bit</span> <span m="1222580">easier</span> <span
  m="1223410">than</span> <span m="1223640">directly</span> <span
  m="1224060">doing</span> <span m="1224290">3</span> <span
  m="1224460">implies</span> <span m="1224800">2.</span> <span
  m="1226570">So</span> <span m="1227090">that's</span> <span
  m="1227300">the</span> <span m="1227370">way</span> <span
  m="1227460">we're</span> <span m="1227570">going</span> <span
  m="1227670">to</span> <span m="1227720">do</span> <span
  m="1227810">this.</span> <span m="1228240">You</span> <span
  m="1228420">could</span> <span m="1228560">certainly</span> <span
  m="1229360">play</span> <span m="1229520">around</span> <span
  m="1229850">and</span> <span m="1229940">do</span> <span
  m="1230060">other</span> <span m="1230220">things.</span> <span
  m="1231290">So</span> <span m="1231850">any</span> <span
  m="1231990">questions</span> <span m="1232290">so</span> <span
  m="1232400">far?</span> <span m="1235750">OK,</span> <span
  m="1236650">so</span> <span m="1237080">let's</span> <span
  m="1237260">go</span> <span m="1237340">ahead</span> <span
  m="1237540">and</span> <span m="1237620">do</span> <span
  m="1237710">this.</span></p><p><span m="1256780">All right,</span> <span
  m="1257080">we</span> <span m="1257220">should</span> <span m="1257480">be
  able to</span> <span m="1257740">knock</span> <span m="1257820">these</span>
  <span m="1257990">two,</span> <span m="1259260">1 implies</span> <span
  m="1259870">2</span> <span m="1260100">and</span> <span m="1260220">2</span>
  <span m="1260400">implies</span> <span m="1260700">3,</span> <span
  m="1260920">in</span> <span m="1262240">just</span> <span
  m="1262520">about</span> <span m="1262750">a</span> <span
  m="1263130">minute</span> <span m="1263470">each.</span> <span
  m="1266940">So</span> <span m="1267130">I</span> <span m="1267240">want</span>
  <span m="1267400">to</span> <span m="1267470">show</span> <span
  m="1267900">1</span> <span m="1268090">implies</span> <span
  m="1268510">2,</span> <span m="1270170">and</span> <span
  m="1270910">essentially</span> <span m="1271370">what</span> <span
  m="1271550">I</span> <span m="1271600">want</span> <span m="1271770">to</span>
  <span m="1272240">say</span> <span m="1272490">here</span> <span
  m="1272820">is,</span> <span m="1274950">if</span> <span
  m="1276250">I've</span> <span m="1276510">saturated</span> <span
  m="1278910">a</span> <span m="1278970">particular</span> <span
  m="1279450">cuts</span> <span m="1279830">capacity</span> <span
  m="1280900">then</span> <span m="1281150">I have</span> <span
  m="1281280">a</span> <span m="1281330">max flow.</span> <span
  m="1282460">And</span> <span m="1283410">really,</span> <span
  m="1283870">I</span> <span m="1283950">mean</span> <span
  m="1284090">this</span> <span m="1284280">comes</span> <span
  m="1284480">from</span> <span m="1284630">the</span> <span
  m="1284710">definitions,</span> <span m="1286350">since</span> <span
  m="1287020">I'm</span> <span m="1287180">going</span> <span
  m="1287360">to</span> <span m="1287430">have</span> <span m="1288310">f</span>
  <span m="1288670">less</span> <span m="1288930">than</span> <span
  m="1289060">or</span> <span m="1289130">equal</span> <span
  m="1289330">to</span> <span m="1289390">the</span> <span m="1289490">c
  S,</span> <span m="1289856">T,</span> <span m="1291860">and</span> <span
  m="1292060">this</span> <span m="1292170">is</span> <span
  m="1292280">simply</span> <span m="1292610">because</span> <span
  m="1292960">of</span> <span m="1293960">edge</span> <span
  m="1294230">capacity</span> <span m="1294730">constraints.</span> <span
  m="1296300">This is</span> <span m="1296555">just</span> <span
  m="1297750">edge</span> <span m="1298520">capacities</span> <span
  m="1300250">for</span> <span m="1301950">any</span> <span
  m="1302300">cut</span> <span m="1304870">S T,</span> <span
  m="1309250">the</span> <span m="1309460">assumption</span> <span
  m="1314510">that</span> <span m="1316300">f</span> <span
  m="1317480">equals</span> <span m="1318850">c</span> <span
  m="1319090">of</span> <span m="1319210">S T</span> <span
  m="1322660">implies</span> <span m="1325300">f</span> <span
  m="1325510">is</span> <span m="1325620">a</span> <span
  m="1325670">maximum</span> <span m="1326050">flow</span> <span
  m="1326850">because</span> <span m="1327090">f</span> <span
  m="1327270">can</span> <span m="1327480">be</span> <span
  m="1327600">increased.</span></p><p><span m="1334460">And</span> <span
  m="1334960">that's</span> <span m="1335130">basically</span> <span
  m="1335460">it.</span> <span m="1336700">Right,</span> <span
  m="1336900">so</span> <span m="1337030">this</span> <span
  m="1337800">is</span> <span m="1337960">pretty</span> <span
  m="1338400">easy.</span> <span m="1339770">Next</span> <span
  m="1340010">one</span> <span m="1340190">is</span> <span
  m="1341290">easy</span> <span m="1341610">as</span> <span
  m="1341720">well.</span> <span m="1343950">2</span> <span
  m="1344230">implies</span> <span m="1344610">3.</span> <span
  m="1346660">If</span> <span m="1347190">the</span> <span
  m="1347410">rare</span> <span m="1350410">and</span> <span
  m="1350840">augmenting</span> <span m="1351420">path--</span> <span
  m="1353080">so</span> <span m="1355840">I'm</span> <span
  m="1355980">going</span> <span m="1356090">to</span> <span
  m="1356130">do</span> <span m="1356210">this</span> <span
  m="1356380">by</span> <span m="1356500">contradiction--</span> <span
  m="1357650">if</span> <span m="1357920">the</span> <span m="1358200">rare
  and</span> <span m="1358680">augmenting</span> <span m="1359310">path,</span>
  <span m="1364590">the</span> <span m="1364780">flow</span> <span
  m="1365110">value</span> <span m="1367890">can</span> <span
  m="1368140">be</span> <span m="1368270">increased.</span> <span
  m="1368860">Because</span> <span m="1369110">remember the</span> <span
  m="1369590">augmenting</span> <span m="1370000">path</span> <span
  m="1370790">corresponds</span> <span m="1371330">to</span> <span
  m="1372000">a</span> <span m="1372110">path</span> <span
  m="1372990">with</span> <span m="1373190">strictly</span> <span
  m="1373950">positive</span> <span m="1375070">residual</span> <span
  m="1375650">capacities.</span> <span m="1377560">The</span> <span
  m="1377860">only</span> <span m="1378100">reason</span> <span
  m="1378360">there's</span> <span m="1378510">an</span> <span
  m="1378590">edge</span> <span m="1378800">in</span> <span
  m="1378900">there</span> <span m="1379560">is</span> <span
  m="1379710">because</span> <span m="1379990">you</span> <span
  m="1380070">have</span> <span m="1380170">a</span> <span
  m="1380240">greater</span> <span m="1380550">than</span> <span
  m="1380710">zero</span> <span m="1382100">residual</span> <span
  m="1382830">capacity.</span></p><p><span m="1384560">So</span> <span
  m="1385830">that</span> <span m="1386110">means</span> <span
  m="1386350">that</span> <span m="1386470">the</span> <span
  m="1386560">flow</span> <span m="1386810">value</span> <span
  m="1388260">could</span> <span m="1388580">be</span> <span
  m="1388750">increased</span> <span m="1389630">by</span> <span
  m="1390040">some</span> <span m="1390370">small</span> <span
  m="1390690">amount</span> <span m="1391960">corresponding</span> <span
  m="1392580">to</span> <span m="1393730">C</span> <span m="1394070">f</span>
  <span m="1394290">u</span> <span m="1394440">v,</span> <span
  m="1395300">and</span> <span m="1395900">each</span> <span
  m="1396140">of</span> <span m="1396240">these</span> <span
  m="1396440">quantities</span> <span m="1397540">that</span> <span
  m="1397650">are</span> <span m="1397770">in</span> <span
  m="1397890">here--</span> <span m="1398650">I'm</span> <span
  m="1398770">sorry,</span> <span m="1399030">corresponding</span> <span
  m="1399510">to</span> <span m="1399610">min</span> <span m="1400530">C
  f</span> <span m="1400830">u</span> <span m="1401130">v,</span> <span
  m="1401850">that's</span> <span m="1402130">the</span> <span
  m="1402830">residual</span> <span m="1403280">capacity.</span> <span
  m="1404510">But</span> <span m="1404640">you</span> <span
  m="1404730">know</span> <span m="1404930">that</span> <span
  m="1405480">each</span> <span m="1405690">of</span> <span
  m="1405800">these</span> <span m="1406010">capacities,</span> <span
  m="1406550">C F</span> <span m="1406800">u</span> <span m="1406860">v,</span>
  <span m="1407910">are</span> <span m="1408050">strictly</span> <span
  m="1408450">greater</span> <span m="1408680">than</span> <span
  m="1408820">zero.</span> <span m="1410140">So</span> <span
  m="1410350">the</span> <span m="1410440">min</span> <span
  m="1410770">clearly</span> <span m="1411160">is</span> <span
  m="1411260">strictly</span> <span m="1411610">greater</span> <span
  m="1411820">than</span> <span m="1411950">zero.</span> <span
  m="1412860">It</span> <span m="1412970">might</span> <span
  m="1413140">be</span> <span m="1413220">some</span> <span
  m="1413380">tiny</span> <span m="1413710">quantity</span> <span
  m="1414630">but</span> <span m="1414770">it's</span> <span
  m="1414900">greater</span> <span m="1415090">than</span> <span
  m="1415240">zero.</span> <span m="1416310">Which</span> <span
  m="1416450">means</span> <span m="1416730">that</span> <span
  m="1417630">the</span> <span m="1417770">flow</span> <span
  m="1417980">value</span> <span m="1418340">could</span> <span
  m="1418540">be</span> <span m="1418700">increased</span> <span
  m="1420190">contradicting</span> <span m="1425170">the</span> <span
  m="1425310">maximality</span> <span m="1425940">of</span> <span
  m="1426000">f.</span></p><p><span m="1433510">So</span> <span m="1434050">a
  little</span> <span m="1434290">proof</span> <span m="1434480">by</span> <span
  m="1434610">contradiction</span> <span m="1435880">gives</span> <span
  m="1436050">you</span> <span m="1436160">2</span> <span
  m="1436360">implies</span> <span m="1436690">3.</span> <span
  m="1438520">So,</span> <span m="1438750">so</span> <span
  m="1438900">far,</span> <span m="1439060">so</span> <span
  m="1439190">good.</span> <span m="1440560">This</span> <span
  m="1440620">is</span> <span m="1440770">primarily</span> <span
  m="1441830">based</span> <span m="1442180">on</span> <span
  m="1442660">the</span> <span m="1442800">definitions</span> <span
  m="1443350">of</span> <span m="1443420">augmenting</span> <span
  m="1443860">paths,</span> <span m="1444660">residual</span> <span
  m="1445040">capacities,</span> <span m="1445680">et</span> <span
  m="1445890">cetera.</span> <span m="1447010">Now</span> <span
  m="1447050">the</span> <span m="1447140">fun</span> <span
  m="1447350">starts.</span></p><p><span m="1450310">Now</span> <span
  m="1450540">we</span> <span m="1450680">want</span> <span
  m="1450820">to</span> <span m="1450900">show</span> <span
  m="1452190">really,</span> <span m="1452660">I</span> <span
  m="1452700">mean</span> <span m="1452850">this</span> <span
  m="1453020">is</span> <span m="1453350">truly</span> <span
  m="1453730">what</span> <span m="1453970">the</span> <span m="1454050">max
  flow</span> <span m="1454620">min</span> <span m="1454780">cut</span> <span
  m="1455050">is</span> <span m="1455310">because</span> <span m="1456510">I
  really</span> <span m="1456950">didn't</span> <span m="1457120">have</span>
  <span m="1457280">cuts</span> <span m="1457580">up</span> <span
  m="1457730">there.</span> <span m="1458420">So</span> <span
  m="1459050">what's</span> <span m="1459320">min-cut</span> <span
  m="1459570">about</span> <span m="1459960">that,</span> <span
  m="1460170">right?</span> <span m="1464540">So</span> <span
  m="1464670">I</span> <span m="1464750">had</span> <span m="1464860">a</span>
  <span m="1464900">question</span> <span m="1465820">at the</span> <span
  m="1465990">end</span> <span m="1466240">of</span> <span
  m="1467790">Tuesday's</span> <span m="1468220">lecture</span> <span
  m="1468600">on</span> <span m="1469352">how come</span> <span
  m="1469730">the</span> <span m="1469820">algorithm</span> <span
  m="1471610">didn't</span> <span m="1471780">use</span> <span
  m="1472170">cuts.</span> <span m="1473510">And,</span> <span
  m="1474520">well,</span> <span m="1475770">the</span> <span
  m="1475860">algorithm</span> <span m="1476190">doesn't</span> <span
  m="1476410">use</span> <span m="1476610">cuts,</span> <span
  m="1477740">but</span> <span m="1479130">showing</span> <span m="1479450">that
  the</span> <span m="1479600">algorithm</span> <span
  m="1479980">converges</span> <span m="1480600">to</span> <span
  m="1480690">the</span> <span m="1480760">max</span> <span
  m="1481000">flow</span> <span m="1481770">uses</span> <span
  m="1482080">the</span> <span m="1482140">notion</span> <span
  m="1482400">of</span> <span m="1482500">cuts.</span></p><p><span
  m="1485990">So</span> <span m="1486310">what</span> <span
  m="1486470">we</span> <span m="1486560">want</span> <span
  m="1486690">to</span> <span m="1486740">do</span> <span m="1486920">is</span>
  <span m="1487050">do</span> <span m="1487580">3</span> <span
  m="1488260">implies</span> <span m="1488790">1,</span> <span
  m="1490220">and</span> <span m="1490400">that's</span> <span
  m="1490570">going</span> <span m="1490670">to</span> <span
  m="1490730">take</span> <span m="1490890">care</span> <span
  m="1491080">of</span> <span m="1491150">what</span> <span
  m="1491280">we</span> <span m="1491400">want.</span> <span
  m="1493060">And</span> <span m="1493750">we're</span> <span
  m="1493840">going</span> <span m="1493960">to</span> <span
  m="1494030">say,</span> <span m="1495050">well,</span> <span
  m="1495520">suppose</span> <span m="1499330">f</span> <span
  m="1500470">admits</span> <span m="1502910">no</span> <span
  m="1503410">augmenting</span> <span m="1504030">paths.</span> <span
  m="1508450">So</span> <span m="1508630">what</span> <span
  m="1508750">does</span> <span m="1508830">that</span> <span
  m="1509040">mean?</span> <span m="1510220">Well,</span> <span
  m="1510760">that</span> <span m="1510890">means</span> <span
  m="1511190">that</span> <span m="1511660">you</span> <span
  m="1511790">can't</span> <span m="1512090">reach</span> <span
  m="1513180">t</span> <span m="1513480">from</span> <span m="1513770">s.</span>
  <span m="1515140">If you reach</span> <span m="1515510">t</span> <span
  m="1515790">from</span> <span m="1515960">s,</span> <span
  m="1517190">there's</span> <span m="1517380">an</span> <span
  m="1517460">augmenting</span> <span m="1517830">path,</span> <span
  m="1518720">so</span> <span m="1518840">you</span> <span
  m="1518930">can't</span> <span m="1519640">make</span> <span
  m="1519920">that</span> <span m="1520990">move</span> <span
  m="1521360">or</span> <span m="1521640">make</span> <span
  m="1521840">that</span> <span m="1522622">path.</span> <span
  m="1524100">So</span> <span m="1524590">let's</span> <span
  m="1524840">go</span> <span m="1524960">ahead</span> <span
  m="1525150">and,</span> <span m="1525410">sort of,</span> <span
  m="1525600">look</span> <span m="1525770">at</span> <span
  m="1525840">this</span> <span m="1526030">a</span> <span
  m="1526080">little</span> <span m="1527500">more</span> <span
  m="1527730">carefully</span> <span m="1528860">and</span> <span
  m="1529030">figure</span> <span m="1529320">out</span> <span
  m="1529910">what's</span> <span m="1530330">causing</span> <span
  m="1532020">this</span> <span m="1533700">lack</span> <span
  m="1534020">of</span> <span m="1534160">connectivity.</span></p><p><span
  m="1536150">There's</span> <span m="1536420">a</span> <span
  m="1536490">lack</span> <span m="1536720">of</span> <span
  m="1536820">connectivity</span> <span m="1537400">between</span> <span
  m="1537700">s</span> <span m="1537920">and</span> <span m="1538070">t.</span>
  <span m="1538610">You</span> <span m="1538730">can't</span> <span
  m="1538820">actually</span> <span m="1539100">get</span> <span
  m="1539400">there.</span> <span m="1540780">So</span> <span
  m="1540920">there's</span> <span m="1541420">like</span> <span
  m="1541590">a</span> <span m="1541660">chasm,</span> <span
  m="1542160">there's</span> <span m="1542310">a</span> <span
  m="1542360">gap.</span> <span m="1543570">And</span> <span
  m="1543880">so</span> <span m="1543980">what's</span> <span
  m="1544220">causing</span> <span m="1544580">that?</span> <span
  m="1545320">And</span> <span m="1547490">what</span> <span
  m="1547610">we're</span> <span m="1547700">going</span> <span
  m="1547850">to</span> <span m="1547930">do</span> <span m="1548200">is</span>
  <span m="1550330">figure</span> <span m="1550680">out</span> <span
  m="1552800">what</span> <span m="1553550">the</span> <span
  m="1554120">cut</span> <span m="1554430">of</span> <span
  m="1554540">the</span> <span m="1554630">partition</span> <span
  m="1555230">is</span> <span m="1556720">that</span> <span
  m="1557290">could</span> <span m="1557630">be</span> <span
  m="1558960">the</span> <span m="1559160">reason</span> <span
  m="1559540">why</span> <span m="1560550">you</span> <span
  m="1560740">have</span> <span m="1560980">this</span> <span
  m="1561120">lack</span> <span m="1561350">of</span> <span
  m="1561470">connectivity.</span></p><p><span m="1563900">So</span> <span
  m="1564420">we're</span> <span m="1564480">going</span> <span
  m="1564650">to</span> <span m="1564730">define</span> <span
  m="1565080">S</span> <span m="1566156">which</span> <span
  m="1566540">is</span> <span m="1566620">exactly</span> <span
  m="1567010">going</span> <span m="1567150">to</span> <span
  m="1567210">be</span> <span m="1567420">our</span> <span m="1568050">S</span>
  <span m="1568970">from</span> <span m="1569160">our</span> <span
  m="1569230">favorite</span> <span m="1569850">s</span> <span
  m="1570200">t</span> <span m="1571820">cut</span> <span
  m="1572400">definition,</span> <span m="1573610">but</span> <span
  m="1574260">bear</span> <span m="1574580">with</span> <span
  m="1574690">me</span> <span m="1574810">for</span> <span
  m="1574920">just</span> <span m="1575140">a</span> <span
  m="1575190">second.</span> <span m="1576110">Because</span> <span
  m="1576945">I will</span> <span m="1577270">tell</span> <span
  m="1577430">you</span> <span m="1577530">what</span> <span
  m="1577670">S</span> <span m="1578075">is.</span> <span
  m="1579590">There</span> <span m="1580960">exists</span> <span
  m="1582578">a</span> <span m="1583052">path</span> <span m="1588750">in</span>
  <span m="1588950">G f</span> <span m="1590840">from</span> <span
  m="1591540">s</span> <span m="1592650">to</span> <span m="1592740">u.</span>
  <span m="1595020">So</span> <span m="1595210">what</span> <span
  m="1595300">I'm</span> <span m="1595400">doing</span> <span
  m="1595640">is</span> <span m="1595750">I'm</span> <span
  m="1595910">collecting</span> <span m="1597120">the</span> <span
  m="1597250">reachable</span> <span m="1597880">vertices</span> <span
  m="1598980">from</span> <span m="1599330">S.</span> <span
  m="1600390">And</span> <span m="1602410">I</span> <span
  m="1602550">know</span> <span m="1603800">that</span> <span
  m="1605450">I'm</span> <span m="1605790">not</span> <span
  m="1606080">going</span> <span m="1606220">to</span> <span
  m="1606280">have</span> <span m="1607820">t,</span> <span
  m="1608140">small</span> <span m="1608520">t,</span> <span
  m="1609570">in</span> <span m="1609750">this</span> <span
  m="1610010">set</span> <span m="1610940">because</span> <span
  m="1612150">f</span> <span m="1612410">admits</span> <span
  m="1612810">no</span> <span m="1612990">augmenting</span> <span
  m="1613450">paths</span> <span m="1614340">so</span> <span
  m="1614480">I</span> <span m="1614560">can't</span> <span
  m="1614860">possibly</span> <span m="1615400">reach</span> <span
  m="1616340">t</span> <span m="1617440">from</span> <span m="1617650">s.</span>
  <span m="1619440">But</span> <span m="1619580">I</span> <span
  m="1619640">can</span> <span m="1619840">collect</span> <span
  m="1620830">all</span> <span m="1621120">of</span> <span
  m="1621230">the</span> <span m="1621340">vertices</span> <span
  m="1622510">that</span> <span m="1622900">that</span> <span
  m="1623300">can</span> <span m="1623570">be</span> <span
  m="1623720">reached</span> <span m="1624010">from</span> <span
  m="1624160">s</span> <span m="1625340">in</span> <span m="1625600">this</span>
  <span m="1625860">given</span> <span m="1627110">G</span> <span
  m="1627330">of</span> <span m="1627480">f</span> <span m="1628530">and</span>
  <span m="1628820">put</span> <span m="1628930">them</span> <span
  m="1629060">all</span> <span m="1629320">into</span> <span
  m="1629620">S.</span></p><p><span m="1634050">And</span> <span
  m="1634170">then</span> <span m="1634570">my</span> <span m="1635160">T</span>
  <span m="1635420">definition</span> <span m="1637030">is</span> <span
  m="1637210">simply</span> <span m="1637590">V</span> <span
  m="1638780">minus</span> <span m="1639250">S.</span> <span
  m="1641660">And</span> <span m="1642150">the</span> <span
  m="1642250">key</span> <span m="1642430">observation</span> <span
  m="1642960">which</span> <span m="1643130">I</span> <span
  m="1643450">already</span> <span m="1643780">have</span> <span
  m="1643940">made</span> <span m="1644870">but</span> <span
  m="1645220">important</span> <span m="1645610">to</span> <span
  m="1645670">emphasize</span> <span m="1646890">is</span> <span
  m="1647100">that</span> <span m="1647370">small</span> <span
  m="1647790">t</span> <span m="1650770">belongs</span> <span
  m="1651210">to</span> <span m="1651820">T,</span> <span m="1652780">and</span>
  <span m="1652910">obviously</span> <span m="1653310">s</span> <span
  m="1654650">belongs</span> <span m="1654990">to</span> <span
  m="1655270">S,</span> <span m="1656680">therefore</span> <span
  m="1658370">S</span> <span m="1658760">T</span> <span m="1660720">is</span>
  <span m="1660880">a</span> <span m="1660980">cut.</span> <span
  m="1663030">It</span> <span m="1663170">satisfies</span> <span
  m="1663710">the</span> <span m="1663810">definition</span> <span
  m="1664870">of</span> <span m="1665000">a</span> <span m="1665070">cut.</span>
  <span m="1667230">So</span> <span m="1667420">we've</span> <span
  m="1667580">set</span> <span m="1667790">ourselves</span> <span
  m="1668170">up.</span> <span m="1669350">And</span> <span
  m="1671170">then</span> <span m="1671370">we</span> <span
  m="1671470">have</span> <span m="1671650">a</span> <span
  m="1672010">key</span> <span m="1674840">observation</span> <span
  m="1675430">to</span> <span m="1675520">make</span> <span
  m="1676080">that</span> <span m="1676610">I'm</span> <span
  m="1676770">going</span> <span m="1676860">to</span> <span
  m="1676920">try</span> <span m="1677100">and</span> <span
  m="1677160">extract</span> <span m="1677670">out</span> <span
  m="1677820">or</span> <span m="1677840">you.</span> <span
  m="1679400">Let</span> <span m="1679500">me</span> <span
  m="1679600">move</span> <span m="1679810">over</span> <span
  m="1679990">here.</span></p><p>&nbsp;</p><p><span m="1697370">All</span> <span
  m="1697490">right,</span> <span m="1703170">so</span> <span
  m="1703600">what</span> <span m="1703730">I</span> <span
  m="1703760">want</span> <span m="1703930">to</span> <span
  m="1704000">do</span> <span m="1705300">is</span> <span m="1705820">I want
  to</span> <span m="1706050">draw this</span> <span m="1706460">out,</span>
  <span m="1708160">and</span> <span m="1708580">I want</span> <span
  m="1708730">to</span> <span m="1708820">look</span> <span
  m="1709070">at</span> <span m="1709160">this</span> <span
  m="1709480">as</span> <span m="1711290">this</span> <span
  m="1711620">is</span> <span m="1711830">S,</span> <span
  m="1713490">that</span> <span m="1713760">is</span> <span
  m="1714300">T.</span> <span m="1715416">I know</span> <span
  m="1715810">that</span> <span m="1715940">S</span> <span m="1716170">is</span>
  <span m="1716300">over</span> <span m="1716490">here,</span> <span
  m="1716700">are</span> <span m="1716820">s</span> <span m="1717250">is</span>
  <span m="1717360">over</span> <span m="1717520">here,</span> <span
  m="1718500">t</span> <span m="1719080">is</span> <span m="1719190">over</span>
  <span m="1719390">here.</span></p><p><span m="1723660">I'm</span> <span
  m="1723820">going</span> <span m="1723930">to</span> <span
  m="1724010">pick</span> <span m="1728010">some</span> <span
  m="1729280">vertex</span> <span m="1729690">v</span> <span
  m="1730150">that's</span> <span m="1730400">over</span> <span
  m="1730570">here,</span> <span m="1731520">some</span> <span
  m="1731870">vertex</span> <span m="1732270">u</span> <span
  m="1733400">that's</span> <span m="1733640">over</span> <span
  m="1733820">here.</span> <span m="1736170">I</span> <span
  m="1736320">know</span> <span m="1737810">that</span> <span
  m="1738050">there's</span> <span m="1738240">a</span> <span
  m="1738320">path,</span> <span m="1740490">and</span> <span
  m="1740640">I'm</span> <span m="1740850">writing</span> <span
  m="1741160">this</span> <span m="1741370">is</span> <span m="1742180">a</span>
  <span m="1742270">dotted</span> <span m="1742640">path</span> <span
  m="1743100">because</span> <span m="1743340">this</span> <span
  m="1743480">is</span> <span m="1743600">a</span> <span m="1743670">path</span>
  <span m="1744030">in</span> <span m="1744300">G</span> <span
  m="1744570">of</span> <span m="1744710">f.</span> <span
  m="1746470">We're</span> <span m="1746600">going</span> <span
  m="1746730">to</span> <span m="1746770">actually</span> <span
  m="1747090">move</span> <span m="1747420">between</span> <span
  m="1748660">a</span> <span m="1748740">G</span> <span m="1748990">of</span>
  <span m="1749120">f</span> <span m="1749330">and</span> <span
  m="1749500">G</span> <span m="1750340">in</span> <span m="1750490">this</span>
  <span m="1750680">proof.</span> <span m="1751670">So</span> <span
  m="1751960">that's</span> <span m="1752270">the</span> <span
  m="1752360">only</span> <span m="1752620">hard</span> <span
  m="1752860">part</span> <span m="1753100">of</span> <span
  m="1753200">this</span> <span m="1753370">proof.</span> <span
  m="1754260">The</span> <span m="1754400">movement</span> <span
  m="1754820">between</span> <span m="1755100">g</span> <span
  m="1755380">and</span> <span m="1755520">G</span> <span m="1755670">of</span>
  <span m="1755800">f.</span> <span m="1756780">The</span> <span
  m="1756990">edges</span> <span m="1757370">are</span> <span
  m="1757450">different</span> <span m="1758320">between</span> <span
  m="1758630">g</span> <span m="1758800">and</span> <span m="1758910">G</span>
  <span m="1759050">of</span> <span m="1759200">f.</span> <span
  m="1760420">Got</span> <span m="1760550">to</span> <span
  m="1760610">keep</span> <span m="1760780">that</span> <span
  m="1760910">in</span> <span m="1760980">your</span> <span
  m="1761080">head.</span> <span m="1761860">Because we're</span> <span
  m="1761970">going</span> <span m="1762090">to</span> <span
  m="1762130">make</span> <span m="1762270">arguments</span> <span
  m="1762660">about</span> <span m="1762860">that.</span></p><p><span
  m="1763740">I</span> <span m="1763870">know</span> <span
  m="1764150">that</span> <span m="1764360">all</span> <span
  m="1764680">of</span> <span m="1764790">the</span> <span
  m="1765420">vertices</span> <span m="1766100">that</span> <span
  m="1766220">are</span> <span m="1766330">on</span> <span
  m="1766420">the</span> <span m="1766490">left</span> <span
  m="1766740">hand</span> <span m="1766920">side</span> <span
  m="1767730">are</span> <span m="1767840">reachable</span> <span
  m="1768310">from</span> <span m="1768520">s,</span> <span
  m="1769260">so</span> <span m="1769380">I</span> <span m="1769450">just</span>
  <span m="1769640">picked</span> <span m="1769800">an</span> <span
  m="1769930">arbitrary</span> <span m="1770390">vertex</span> <span
  m="1770880">u,</span> <span m="1771930">and</span> <span m="1772080">I</span>
  <span m="1772130">know</span> <span m="1772350">that</span> <span
  m="1772500">there's</span> <span m="1772640">a</span> <span
  m="1772700">path</span> <span m="1773050">in</span> <span m="1773210">G</span>
  <span m="1773390">of</span> <span m="1773510">f</span> <span
  m="1774190">because</span> <span m="1774360">that's</span> <span
  m="1774500">the</span> <span m="1774560">way</span> <span m="1774720">I</span>
  <span m="1774750">defined</span> <span m="1775210">it</span> <span
  m="1775820">from</span> <span m="1776100">s to u.</span> <span
  m="1778360">I</span> <span m="1778530">also</span> <span
  m="1779000">know</span> <span m="1781340">that</span> <span
  m="1782360">there</span> <span m="1782530">is</span> <span
  m="1782660">no</span> <span m="1782950">path</span> <span m="1784130">in
  G</span> <span m="1784540">of</span> <span m="1784690">f</span> <span
  m="1785420">from</span> <span m="1786330">u to</span> <span
  m="1786640">v</span> <span m="1791230">because</span> <span
  m="1792540">if</span> <span m="1792900">there</span> <span
  m="1793080">was</span> <span m="1793290">a</span> <span
  m="1793350">path</span> <span m="1794200">v</span> <span
  m="1794550">would</span> <span m="1794650">have</span> <span
  m="1794740">been</span> <span m="1795150">on</span> <span m="1795330">this
  side,</span> <span m="1795610">correct?</span> <span m="1797860">So</span>
  <span m="1798020">there's</span> <span m="1798200">clearly</span> <span
  m="1798430">no</span> <span m="1798630">path</span> <span
  m="1798930">in</span> <span m="1799070">g</span> <span m="1799290">of</span>
  <span m="1799420">f</span> <span m="1800820">from</span> <span
  m="1801400">u</span> <span m="1801590">to</span> <span m="1801670">v.</span>
  <span m="1802000">That's</span> <span m="1802160">why</span> <span
  m="1802290">v is</span> <span m="1802550">over</span> <span
  m="1802720">here.</span></p><p><span m="1804170">But</span> <span
  m="1807020">let's</span> <span m="1807310">say</span> <span
  m="1808450">that</span> <span m="1808600">I'm</span> <span
  m="1808720">picking</span> <span m="1810050">something</span> <span
  m="1811510">where</span> <span m="1812390">there's</span> <span
  m="1812640">an</span> <span m="1812800">edge</span> <span m="1814540">in
  G,</span> <span m="1816980">the</span> <span m="1817080">original</span> <span
  m="1817710">flow</span> <span m="1817900">network</span> <span
  m="1818960">from</span> <span m="1819840">u</span> <span m="1820000">to
  v.</span> <span m="1821420">So</span> <span m="1821510">the</span> <span
  m="1821590">edge</span> <span m="1821820">that</span> <span
  m="1821940">I've</span> <span m="1822090">drawn</span> <span
  m="1822380">here,</span> <span m="1823080">the</span> <span
  m="1823180">dark</span> <span m="1823520">edge,</span> <span
  m="1824280">is</span> <span m="1824430">an</span> <span
  m="1824540">edge</span> <span m="1825240">between</span> <span
  m="1825580">u</span> <span m="1825790">and</span> <span m="1825970">v</span>
  <span m="1828970">in G.</span> <span m="1830900">And</span> <span
  m="1831320">that</span> <span m="1831710">edge</span> <span
  m="1833062">had</span> <span m="1833450">a</span> <span
  m="1833550">certain</span> <span m="1833880">capacity.</span> <span
  m="1834560">It</span> <span m="1834710">existed.</span> <span
  m="1836230">The</span> <span m="1836360">reason</span> <span
  m="1836660">it</span> <span m="1836760">existed</span> <span
  m="1837240">is</span> <span m="1837350">because</span> <span
  m="1837630">it</span> <span m="1837710">had</span> <span m="1837880">a</span>
  <span m="1837950">nonzero</span> <span m="1839220">capacity,</span> <span
  m="1840400">correct?</span> <span m="1840670">Because</span> <span
  m="1840920">we</span> <span m="1841090">originally</span> <span
  m="1841580">defined</span> <span m="1842010">our</span> <span
  m="1842110">flow</span> <span m="1842320">network</span> <span
  m="1843340">to</span> <span m="1843470">be</span> <span
  m="1843760">something</span> <span m="1844300">where--</span> <span
  m="1845400">if you</span> <span m="1845550">only</span> <span
  m="1845700">put</span> <span m="1845840">edges</span> <span
  m="1846120">in</span> <span m="1846615">there,</span> <span m="1847110">in
  the</span> <span m="1847180">original</span> <span m="1847510">flow</span>
  <span m="1847700">network</span> <span m="1848400">if</span> <span
  m="1848510">the</span> <span m="1848610">capacities</span> <span
  m="1849670">were</span> <span m="1849830">greater</span> <span
  m="1850040">than</span> <span m="1850170">zero.</span> <span
  m="1851380">So</span> <span m="1851520">that</span> <span
  m="1851920">edge</span> <span m="1852460">in</span> <span
  m="1852880">there,</span> <span m="1854270">in G</span> <span
  m="1855160">had</span> <span m="1855410">some</span> <span
  m="1855580">capacity</span> <span m="1856110">c</span> <span m="1856350">u
  v</span> <span m="1857260">which was</span> <span m="1857420">greater</span>
  <span m="1857590">than</span> <span m="1857720">zero.</span></p><p><span
  m="1860720">But</span> <span m="1861000">this</span> <span
  m="1861370">edge</span> <span m="1865080">does</span> <span
  m="1865320">not</span> <span m="1865560">exist</span> <span m="1866990">in
  G</span> <span m="1867370">of</span> <span m="1867500">f,</span> <span
  m="1868660">correct?</span> <span m="1869460">So</span> <span
  m="1869710">what</span> <span m="1869900">can</span> <span
  m="1870010">I</span> <span m="1870070">say?</span></p><p><span m="1871378">Go
  ahead.</span></p><p><span m="1871847">AUDIENCE:
  [INAUDIBLE]</span></p><p>&nbsp;</p><p><span m="1877480">PROFESSOR:
  Exactly.</span> <span m="1878630">In</span> <span m="1878790">the</span> <span
  m="1878860">original</span> <span m="1879290">graph,</span> <span
  m="1881670">we</span> <span m="1881800">have</span> <span
  m="1882060">saturated</span> <span m="1884820">this</span> <span
  m="1885070">edge--</span> <span m="1885835">that</span> <span
  m="1886090">was</span> <span m="1886190">my</span> <span
  m="1886300">best</span> <span m="1886640">throw of</span> <span
  m="1887050">the</span> <span m="1887770">term.</span> <span
  m="1888950">I</span> <span m="1889060">like</span> <span
  m="1889350">that.</span> <span m="1891030">And</span> <span
  m="1891470">you</span> <span m="1891610">guys</span> <span
  m="1891790">didn't</span> <span m="1891900">notice,</span> <span
  m="1892530">but</span> <span m="1893500">maybe</span> <span
  m="1893810">it'll</span> <span m="1893880">be</span> <span
  m="1894010">on</span> <span m="1894130">video.</span> <span
  m="1896090">Actually, it</span> <span m="1896240">won't</span> <span
  m="1896600">be</span> <span m="1896730">on</span> <span
  m="1896830">video</span> <span m="1897250">unfortunately.</span> <span
  m="1898430">But</span> <span m="1900010">so</span> <span m="1900170">I</span>
  <span m="1900300">got</span> <span m="1900520">this</span> <span
  m="1900670">edge</span> <span m="1900920">here</span> <span
  m="1902390">in</span> <span m="1902760">the</span> <span
  m="1902910">original</span> <span m="1903510">graph</span> <span
  m="1904580">and</span> <span m="1905180">I</span> <span
  m="1905360">didn't</span> <span m="1905630">get</span> <span
  m="1905850">this</span> <span m="1906320">dotted</span> <span m="1906680">edge
  here</span> <span m="1907710">because</span> <span m="1908940">the</span>
  <span m="1909170">residual</span> <span m="1909600">capacity</span> <span
  m="1910610">was</span> <span m="1910810">zero.</span> <span m="1911540">The
  original</span> <span m="1911880">capacity</span> <span m="1912330">was</span>
  <span m="1912600">nonzero.</span> <span m="1913260">The</span> <span
  m="1913350">residual</span> <span m="1913720">capacity</span> <span
  m="1914200">is</span> <span m="1914320">zero.</span> <span
  m="1914910">The</span> <span m="1915200">only</span> <span
  m="1915540">reason</span> <span m="1915850">that</span> <span
  m="1915980">happens</span> <span m="1917060">is</span> <span
  m="1917270">because</span> <span m="1919300">C</span> <span
  m="1919740">f</span> <span m="1920720">u</span> <span m="1921030">v</span>
  <span m="1922130">is</span> <span m="1922350">zero</span> <span
  m="1926230">since</span> <span m="1928600">if</span> <span
  m="1928950">C</span> <span m="1929150">f</span> <span m="1930540">u</span>
  <span m="1930710">v</span> <span m="1932330">greater</span> <span
  m="1932610">than</span> <span m="1932790">zero</span> <span
  m="1934350">then</span> <span m="1935530">v</span> <span
  m="1936040">would</span> <span m="1936210">belong</span> <span
  m="1936650">to</span> <span m="1936810">S,</span> <span m="1939900">not</span>
  <span m="1941410">v</span> <span m="1941660">belonging</span> <span
  m="1942080">to</span> <span m="1942430">T</span> <span m="1942680">as</span>
  <span m="1943135">assumed.</span> <span m="1946720">So</span> <span
  m="1946810">that's</span> <span m="1947000">essentially</span> <span
  m="1947360">what</span> <span m="1947500">we've</span> <span
  m="1947650">determined</span> <span m="1948090">here.</span></p><p><span
  m="1950430">So</span> <span m="1952790">this</span> <span
  m="1953020">means</span> <span m="1956000">that</span> <span
  m="1956740">f</span> <span m="1957050">of</span> <span m="1957230">u v</span>
  <span m="1959290">equals</span> <span m="1959740">c</span> <span
  m="1960030">of</span> <span m="1960160">u v</span> <span
  m="1964100">simply</span> <span m="1964400">because</span> <span m="1968190">c
  f</span> <span m="1968680">u v</span> <span m="1970160">equals</span> <span
  m="1973440">c</span> <span m="1973823">u v</span> <span
  m="1974970">minus</span> <span m="1975370">f</span> <span m="1975610">u
  v</span> <span m="1976930">which</span> <span m="1977170">is</span> <span
  m="1977270">0.</span> <span m="1978720">All</span> <span
  m="1978800">right,</span> <span m="1979750">so</span> <span
  m="1980760">that's</span> <span m="1982050">the</span> <span
  m="1982210">statement</span> <span m="1982560">I</span> <span
  m="1982610">can</span> <span m="1982790">make.</span> <span
  m="1983820">Now,</span> <span m="1985130">I</span> <span
  m="1985250">did</span> <span m="1985400">not</span> <span
  m="1985900">have</span> <span m="1986230">any</span> <span
  m="1986510">constraint</span> <span m="1988320">on</span> <span
  m="1989380">u</span> <span m="1989620">and</span> <span m="1989740">v.</span>
  <span m="1990680">I just</span> <span m="1990890">said</span> <span
  m="1991090">u</span> <span m="1991740">belongs</span> <span
  m="1991890">to</span> <span m="1992060">s</span> <span m="1992970">and</span>
  <span m="1993160">v</span> <span m="1993260">belongs to</span> <span
  m="1993645">t.</span> <span m="1995090">And</span> <span
  m="1995310">for</span> <span m="1995480">each</span> <span
  m="1995750">of</span> <span m="1995850">those</span> <span
  m="1996080">things,</span> <span m="1996880">I</span> <span
  m="1997000">know</span> <span m="1997290">that</span> <span
  m="1998350">I</span> <span m="1998450">can't</span> <span
  m="1998780">have</span> <span m="1999860">edges</span> <span
  m="2000270">in</span> <span m="2000390">the</span> <span
  m="2001230">residual</span> <span m="2001740">network</span> <span
  m="2002580">between</span> <span m="2002870">u</span> <span
  m="2003050">and</span> <span m="2003190">v</span> <span
  m="2003770">which</span> <span m="2003950">means</span> <span
  m="2004180">that</span> <span m="2004410">any</span> <span
  m="2004760">edge</span> <span m="2005650">that</span> <span
  m="2005770">exists--</span> <span m="2006150">maybe</span> <span
  m="2006360">there's</span> <span m="2006520">no</span> <span
  m="2006670">edge</span> <span m="2006930">in</span> <span
  m="2007020">the</span> <span m="2007110">original</span> <span
  m="2007400">network,</span> <span m="2008060">but</span> <span
  m="2008180">if</span> <span m="2008280">there</span> <span
  m="2008380">was</span> <span m="2008680">an</span> <span m="2008770">edge
  in</span> <span m="2009100">that</span> <span m="2010040">original</span>
  <span m="2010300">network</span> <span m="2010720">it's</span> <span
  m="2010850">saturated</span> <span m="2011920">according to</span> <span
  m="2012175">this</span> <span m="2012430">argument.</span></p><p><span
  m="2013730">So</span> <span m="2014150">every</span> <span
  m="2014570">edge</span> <span m="2015590">from</span> <span
  m="2016400">S</span> <span m="2016670">to</span> <span m="2017000">T</span>
  <span m="2018690">in</span> <span m="2018860">the</span> <span
  m="2019050">original</span> <span m="2019450">network</span> <span
  m="2020210">is</span> <span m="2020360">saturated,</span> <span
  m="2022640">and</span> <span m="2023040">that</span> <span
  m="2023220">essentially</span> <span m="2023580">means</span> <span
  m="2023870">that</span> <span m="2024600">I've</span> <span
  m="2024740">gotten</span> <span m="2025800">to</span> <span
  m="2025900">the</span> <span m="2026270">capacity</span> <span
  m="2026800">of</span> <span m="2026900">my</span> <span
  m="2027040">cut.</span> <span m="2027930">That's</span> <span
  m="2028160">essentially</span> <span m="2028500">what</span> <span
  m="2028600">that</span> <span m="2028730">means.</span> <span m="2029360">If
  I've</span> <span m="2029480">saturated</span> <span m="2030060">every</span>
  <span m="2030190">edge,</span> <span m="2030940">I've</span> <span
  m="2031770">reached that</span> <span m="2032190">capacity.</span> <span
  m="2033230">OK,</span> <span m="2033930">so</span> <span
  m="2034070">that's</span> <span m="2034260">it.</span> <span
  m="2036300">All</span> <span m="2036550">you</span> <span
  m="2036640">do</span> <span m="2036900">once</span> <span
  m="2037140">you</span> <span m="2037520">recognize</span> <span
  m="2038060">that</span> <span m="2038640">you</span> <span
  m="2038770">had</span> <span m="2038910">an</span> <span
  m="2039030">arbitrary</span> <span m="2039480">choice</span> <span
  m="2039850">of</span> <span m="2039960">u</span> <span m="2040120">and</span>
  <span m="2040230">v,</span> <span m="2040910">you</span> <span
  m="2041250">just</span> <span m="2041430">say</span> <span
  m="2042080">summing</span> <span m="2042630">over</span> <span
  m="2047760">all</span> <span m="2048530">u</span> <span
  m="2048790">belonging</span> <span m="2049260">to</span> <span
  m="2049409">s</span> <span m="2052340">and</span> <span m="2053020">v</span>
  <span m="2053350">belong</span> <span m="2053820">to</span> <span
  m="2053940">t</span> <span m="2056460">yields</span> <span
  m="2061210">f</span> <span m="2061250">of</span> <span m="2061670">S</span>
  <span m="2062510">T</span> <span m="2064620">equals</span> <span
  m="2066230">c</span> <span m="2066700">of</span> <span m="2068580">S</span>
  <span m="2069050">T.</span> <span m="2071280">All</span> <span
  m="2071469">right,</span> <span m="2072115">I'm</span> <span
  m="2072380">on</span> <span m="2072600">a</span> <span m="2072870">roll</span>
  <span m="2073139">not</span> <span m="2073310">just</span> <span
  m="2073469">with</span> <span m="2073570">Frisbees.</span> <span
  m="2074110">I</span> <span m="2074179">finished</span> <span
  m="2074460">the</span> <span m="2074550">proof</span> <span
  m="2075400">with</span> <span m="2075730">a</span> <span
  m="2075820">finger</span> <span m="2076159">to spare.</span></p><p><span
  m="2078050">So</span> <span m="2078409">f</span> <span m="2078570">of</span>
  <span m="2078690">S T</span> <span m="2079100">equals</span> <span
  m="2079730">c</span> <span m="2079969">of</span> <span m="2080060">S T.</span>
  <span m="2081340">All</span> <span m="2081409">right,</span> <span
  m="2081679">so</span> <span m="2081830">that's</span> <span
  m="2082090">exactly</span> <span m="2082449">what</span> <span
  m="2082580">we</span> <span m="2082650">want.</span> <span
  m="2084070">We</span> <span m="2084120">are</span> <span
  m="2084219">saying</span> <span m="2085840">f</span> <span
  m="2086010">of</span> <span m="2086120">S T</span> <span m="2086400">is</span>
  <span m="2086670">obviously</span> <span m="2087370">a</span> <span
  m="2088530">cardinality</span> <span m="2089070">of</span> <span
  m="2089190">f</span> <span m="2089810">so</span> <span m="2089949">I've</span>
  <span m="2090120">shown</span> <span m="2091290">this</span> <span
  m="2091510">thing</span> <span m="2091670">over</span> <span
  m="2091820">here.</span> <span m="2094639">So</span> <span
  m="2094850">that's</span> <span m="2095150">why</span> <span
  m="2096199">the</span> <span m="2096310">Ford-Fulkerson</span> <span
  m="2096929">algorithm</span> <span m="2097260">works.</span> <span
  m="2098660">It's</span> <span m="2098860">because</span> <span
  m="2099130">of</span> <span m="2099290">this</span> <span
  m="2099500">analysis</span> <span m="2100750">that</span> <span
  m="2100830">the</span> <span m="2100890">Ford-Fulkerson</span> <span
  m="2101460">algorithm</span> <span m="2101780">works.</span></p><p><span
  m="2103210">So</span> <span m="2103230">are</span> <span m="2103300">we</span>
  <span m="2103400">done?</span> <span m="2105490">What</span> <span
  m="2105870">are</span> <span m="2106010">we</span> <span
  m="2106130">missing</span> <span m="2106955">in</span> <span
  m="2107260">algorithm</span> <span m="2109420">design,</span> <span
  m="2110260">our</span> <span m="2110430">algorithm</span> <span
  m="2110860">analysis?</span> <span m="2113020">Not you,</span> <span
  m="2113440">yet.</span></p><p><span m="2113770">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="2115130">PROFESSOR:</span> <span
  m="2115320">Sorry?</span></p><p><span m="2115580">AUDIENCE: A</span> <span
  m="2115960">runtime?</span></p><p><span m="2116340">PROFESSOR: Runtime,</span>
  <span m="2117070">good</span> <span m="2117480">runtime.</span> <span
  m="2119400">I</span> <span m="2119530">know</span> <span
  m="2119630">you</span> <span m="2119740">have</span> <span
  m="2120400">too</span> <span m="2120550">many</span> <span
  m="2120720">Frisbees.</span> <span m="2122450">You</span> <span
  m="2122590">probably</span> <span m="2122830">do,</span> <span
  m="2122980">too.</span> <span m="2123810">But</span> <span
  m="2124820">so</span> <span m="2125510">we</span> <span
  m="2125670">haven't</span> <span m="2125960">done--</span> <span
  m="2127250">we've</span> <span m="2127350">done</span> <span
  m="2127510">correctness,</span> <span m="2128690">we've</span> <span
  m="2128810">done</span> <span m="2128970">conversions.</span> <span
  m="2130080">We</span> <span m="2130180">haven't</span> <span
  m="2130390">done</span> <span m="2131710">a</span> <span
  m="2131850">complexity</span> <span m="2132310">analysis.</span> <span
  m="2133690">And</span> <span m="2133850">so</span> <span
  m="2133960">there's</span> <span m="2134460">some</span> <span
  m="2134670">bad</span> <span m="2134890">news</span> <span
  m="2135110">here.</span> <span m="2137730">And</span> <span
  m="2148170">erasing</span> <span m="2148590">a</span> <span
  m="2148670">pivotal</span> <span m="2149260">moment</span> <span
  m="2149880">in</span> <span m="2150070">6 over</span> <span
  m="2150580">6.</span></p><p><span m="2187920">Why is</span> <span
  m="2188230">this</span> <span m="2188420">a</span> <span
  m="2188500">pivotal</span> <span m="2188910">moment</span> <span
  m="2189290">in</span> <span m="2189390">6</span> <span m="2189630">over</span>
  <span m="2189890">6?</span> <span m="2192370">It's</span> <span
  m="2192630">on</span> <span m="2192780">the</span> <span
  m="2192880">Frisbee,</span> <span m="2193430">exactly.</span> <span
  m="2194680">This</span> <span m="2195150">picture--</span> <span
  m="2195710">maybe</span> <span m="2195900">not</span> <span
  m="2196080">exactly</span> <span m="2196520">that</span> <span
  m="2196670">picture.</span> <span m="2197970">It's</span> <span
  m="2198100">not</span> <span m="2198270">quite</span> <span
  m="2198530">that</span> <span m="2198650">picture</span> <span
  m="2198990">but</span> <span m="2199100">it's</span> <span
  m="2199640">the</span> <span m="2199740">same</span> <span
  m="2200010">graph.</span> <span m="2202980">It's</span> <span
  m="2203190">a</span> <span m="2203250">pivotal</span> <span
  m="2203570">moment</span> <span m="2204450">because</span> <span
  m="2204630">this</span> <span m="2204800">picture</span> <span
  m="2205090">was</span> <span m="2205240">famous</span> <span
  m="2205750">because</span> <span m="2205980">it</span> <span
  m="2206070">was</span> <span m="2206180">in</span> <span m="2206270">a</span>
  <span m="2206340">textbook</span> <span m="2207210">but</span> <span
  m="2207360">now</span> <span m="2207500">it's</span> <span
  m="2207690">iconic</span> <span m="2208760">because</span> <span
  m="2209090">it's</span> <span m="2209250">on</span> <span m="2209340">a</span>
  <span m="2209390">Frisbee.</span> <span m="2212206">We</span> <span
  m="2212600">immortalized</span> <span m="2213260">this</span> <span
  m="2213440">picture.</span></p><p><span m="2216230">So</span> <span
  m="2216310">this</span> <span m="2216780">is</span> <span
  m="2217010">an</span> <span m="2217090">example</span> <span
  m="2218690">of</span> <span m="2220120">really</span> <span
  m="2220360">a</span> <span m="2220420">failure</span> <span
  m="2221920">of</span> <span m="2222110">the</span> <span
  m="2222190">Ford-Fulkerson</span> <span m="2222930">algorithm.</span> <span
  m="2224780">So</span> <span m="2224960">it's</span> <span
  m="2225150">kind</span> <span m="2225260">of</span> <span m="2225340">a</span>
  <span m="2225390">bad</span> <span m="2225620">example</span> <span
  m="2226030">on</span> <span m="2226130">this</span> <span
  m="2226280">Frisbee</span> <span m="2226750">but</span> <span
  m="2227120">it's</span> <span m="2227260">going</span> <span
  m="2227370">to</span> <span m="2227430">lead</span> <span
  m="2227660">us</span> <span m="2227850">to</span> <span
  m="2227940">better</span> <span m="2228100">algorithms.</span> <span
  m="2230100">So</span> <span m="2230260">what</span> <span m="2230380">I</span>
  <span m="2230450">have</span> <span m="2230630">here</span> <span
  m="2231330">is</span> <span m="2232400">a</span> <span
  m="2232670">weird</span> <span m="2233600">flow</span> <span
  m="2233870">network</span> <span m="2234850">that</span> <span
  m="2235060">has</span> <span m="2235350">these</span> <span
  m="2235520">strange</span> <span m="2235900">capacities.</span> <span
  m="2237040">I mean it's</span> <span m="2237200">a</span> <span
  m="2237250">fairly</span> <span m="2237550">straightforward</span> <span
  m="2238080">flow</span> <span m="2238240">network.</span> <span
  m="2239390">But</span> <span m="2240000">at</span> <span
  m="2240200">the</span> <span m="2240450">as</span> <span m="2240660">of</span>
  <span m="2240740">the</span> <span m="2240800">moment</span> <span
  m="2241230">it</span> <span m="2241360">obviously</span> <span
  m="2241730">satisfies</span> <span m="2242975">a</span> <span
  m="2243350">flow</span> <span m="2243620">conservation</span> <span
  m="2244980">because</span> <span m="2245230">all</span> <span
  m="2245390">of</span> <span m="2245460">the</span> <span
  m="2245540">flows</span> <span m="2245830">are</span> <span
  m="2245910">0</span> <span m="2246650">and</span> <span
  m="2246820">therefore</span> <span m="2247180">edge</span> <span
  m="2247320">capacities.</span> <span m="2248780">But</span> <span
  m="2250010">we're</span> <span m="2250160">going</span> <span
  m="2250290">to</span> <span m="2250350">now</span> <span
  m="2250910">take</span> <span m="2251940">a</span> <span
  m="2252210">pathological</span> <span m="2253300">execution</span> <span
  m="2254860">of</span> <span m="2255200">the</span> <span
  m="2255290">Ford-Fulkerson</span> <span
  m="2256000">algorithm.</span></p><p><span m="2257060">Which,</span> <span
  m="2257230">by</span> <span m="2257420">the</span> <span
  m="2257520">way,</span> <span m="2258430">did</span> <span
  m="2258670">not</span> <span m="2258910">specify</span> <span
  m="2260390">how</span> <span m="2260770">you are</span> <span
  m="2261060">going</span> <span m="2261260">to</span> <span
  m="2261360">select</span> <span m="2262320">the</span> <span
  m="2262490">augmenting</span> <span m="2263060">path.</span> <span
  m="2264760">It</span> <span m="2264860">just</span> <span
  m="2265080">said,</span> <span m="2265480">find</span> <span
  m="2266140">an</span> <span m="2266230">augmenting</span> <span
  m="2266660">path.</span> <span m="2267470">And</span> <span
  m="2267660">in</span> <span m="2267800">passing,</span> <span
  m="2268910">I</span> <span m="2269060">said,</span> <span
  m="2270480">overuse</span> <span m="2270980">depth-first</span> <span
  m="2271420">search,</span> <span m="2271690">we'll</span> <span
  m="2271810">use</span> <span m="2271980">breadth-first</span> <span
  m="2272450">search,</span> <span m="2272850">and</span> <span
  m="2273030">kind</span> <span m="2273150">of</span> <span
  m="2273190">hand</span> <span m="2273420">wave</span> <span
  m="2273640">my</span> <span m="2274010">way</span> <span
  m="2274230">through</span> <span m="2274390">that.</span> <span
  m="2275280">Now it</span> <span m="2275480">turns</span> <span
  m="2275640">out</span> <span m="2276190">you</span> <span
  m="2276330">can't</span> <span m="2276630">hand</span> <span
  m="2276910">wave</span> <span m="2277850">when</span> <span
  m="2278050">you</span> <span m="2278200">want</span> <span
  m="2278390">to</span> <span m="2278780">run</span> <span
  m="2279000">algorithms,</span> <span m="2279440">right.</span> <span
  m="2279860">You</span> <span m="2280040">eventually</span> <span
  m="2280300">have</span> <span m="2280420">to</span> <span
  m="2280500">code</span> <span m="2280670">them</span> <span
  m="2280820">up,</span> <span m="2281290">you</span> <span
  m="2281400">got</span> <span m="2281500">to</span> <span
  m="2281570">pick</span> <span m="2281760">something.</span> <span
  m="2282680">So</span> <span m="2282800">people</span> <span
  m="2283110">did.</span> <span m="2283770">People</span> <span
  m="2284090">picked</span> <span m="2285520">different</span> <span
  m="2285880">ways</span> <span m="2286800">of</span> <span
  m="2286920">selecting</span> <span m="2287980">augmenting</span> <span
  m="2288460">paths</span> <span m="2289580">in</span> <span
  m="2289980">the</span> <span m="2290120">Ford-Fulkerson</span> <span
  m="2290830">framework.</span></p><p><span m="2291840">And</span> <span
  m="2292020">they</span> <span m="2292090">discovered</span> <span
  m="2292620">that</span> <span m="2293050">some</span> <span
  m="2293350">of</span> <span m="2293450">them</span> <span
  m="2294250">would</span> <span m="2294440">work</span> <span
  m="2294640">beautifully</span> <span m="2295790">and</span> <span
  m="2296020">some</span> <span m="2296220">of</span> <span
  m="2296300">them</span> <span m="2297090">would</span> <span
  m="2297510">fail</span> <span m="2297850">miserably</span> <span
  m="2298860">on</span> <span m="2299080">networks</span> <span
  m="2299450">that</span> <span m="2299570">were as</span> <span
  m="2299840">small</span> <span m="2300080">as</span> <span
  m="2300200">this,</span> <span m="2301110">and</span> <span
  m="2301260">they'd</span> <span m="2301340">just</span> <span
  m="2301570">take</span> <span m="2301720">forever.</span> <span
  m="2303250">And</span> <span m="2303770">this</span> <span
  m="2303960">is</span> <span m="2304060">before</span> <span
  m="2304330">complexity</span> <span m="2304760">analysis,</span> <span
  m="2306160">kind</span> <span m="2306360">of</span> <span
  m="2306430">maybe</span> <span m="2306680">before</span> <span
  m="2307000">asymptotic</span> <span m="2307470">complexity</span> <span
  m="2308130">really</span> <span m="2309470">came</span> <span
  m="2309740">into</span> <span m="2309920">vogue.</span> <span
  m="2310940">So</span> <span m="2311480">they</span> <span
  m="2311600">just</span> <span m="2311790">had</span> <span
  m="2312550">empirical</span> <span m="2313040">analysis</span> <span
  m="2313640">to</span> <span m="2313760">tell</span> <span
  m="2313950">them</span> <span m="2314570">that</span> <span
  m="2314980">some</span> <span m="2315370">techniques</span> <span
  m="2315870">for</span> <span m="2316100">discovering</span> <span
  m="2316580">augmenting</span> <span m="2317030">paths</span> <span
  m="2317820">work</span> <span m="2318070">better</span> <span
  m="2318800">than</span> <span m="2318960">other</span> <span
  m="2319150">techniques</span> <span m="2320150">on an</span> <span
  m="2320370">empirical</span> <span m="2321450">basis.</span> <span
  m="2324220">So</span> <span m="2325550">what</span> <span
  m="2325910">could</span> <span m="2326150">go</span> <span
  m="2326380">wrong</span> <span m="2327590">with</span> <span
  m="2327830">Ford-Fulkerson</span> <span m="2329380">on</span> <span
  m="2329660">this</span> <span m="2329830">example?</span> <span
  m="2330980">What</span> <span m="2331350">selection</span> <span
  m="2332110">strategy</span> <span m="2333600">corresponding</span> <span
  m="2334360">to</span> <span m="2336030">the</span> <span
  m="2336170">augmenting</span> <span m="2336800">path</span> <span
  m="2337670">could</span> <span m="2337960">cause</span> <span
  m="2338400">Ford-Fulkerson</span> <span m="2339810">to</span> <span
  m="2339870">have</span> <span m="2340220">a</span> <span
  m="2340370">huge</span> <span m="2340860">number</span> <span
  m="2341110">of</span> <span m="2341190">iterations?</span> <span
  m="2342890">Go</span> <span m="2343010">ahead.</span></p><p><span
  m="2343655">AUDIENCE: So each time</span> <span m="2344110">you pick an</span>
  <span m="2344565">augmenting</span> <span m="2345020">path</span> <span
  m="2345475">you pick one</span> <span m="2345930">that goes</span> <span
  m="2346385">to the center.</span></p><p><span m="2347300">PROFESSOR:
  Exactly,</span> <span m="2348470">and</span> <span m="2349060">so</span> <span
  m="2349380">let's</span> <span m="2349530">walk</span> <span
  m="2349790">through</span> <span m="2350040">a</span> <span
  m="2351000">couple</span> <span m="2351310">here.</span> <span
  m="2351990">So</span> <span m="2352040">the</span> <span
  m="2352140">first</span> <span m="2352440">one,</span> <span
  m="2353210">let's</span> <span m="2353430">just</span> <span
  m="2353880">say</span> <span m="2354090">this</span> <span m="2354260">was
  a</span> <span m="2354490">and</span> <span m="2354860">b,</span> <span
  m="2355610">to</span> <span m="2355680">make</span> <span
  m="2355830">it</span> <span m="2355910">easy.</span> <span
  m="2356270">So</span> <span m="2356510">what is</span> <span
  m="2356750">the</span> <span m="2356840">first</span> <span
  m="2357160">path</span> <span m="2357390">that</span> <span
  m="2357490">we</span> <span m="2357640">picked?</span> <span m="2359830">What
  is it--?</span> <span m="2360500">Go</span> <span m="2360720">for it.</span>
  <span m="2361380">You're</span> <span m="2361470">not off</span> <span
  m="2361670">the hook</span> <span m="2362010">yet.</span></p><p><span
  m="2362658">AUDIENCE: You pick s</span> <span m="2363106">to a</span> <span
  m="2363554">to b to</span> <span m="2364002">t.</span></p><p><span
  m="2364450">PROFESSOR: Yeah,</span> <span m="2364760">and</span> <span
  m="2364940">then</span> <span m="2365480">when</span> <span
  m="2365590">you</span> <span m="2365690">pick</span> <span
  m="2365880">s</span> <span m="2366230">to a</span> <span m="2366520">to</span>
  <span m="2366600">b</span> <span m="2366800">to t,</span> <span
  m="2367230">I'm not going to</span> <span m="2367660">draw</span> <span
  m="2367920">G</span> <span m="2368260">of</span> <span m="2368380">f</span>
  <span m="2368580">for</span> <span m="2368690">this,</span> <span
  m="2369670">it's</span> <span m="2369830">pretty</span> <span
  m="2370020">clear</span> <span m="2370310">that</span> <span
  m="2371460">G</span> <span m="2371660">of</span> <span m="2371780">f</span>
  <span m="2372080">is</span> <span m="2372270">going</span> <span
  m="2372480">to</span> <span m="2372540">have--</span> <span
  m="2376010">I'm</span> <span m="2376140">sorry,</span> <span
  m="2376680">you</span> <span m="2377100">end</span> <span
  m="2377280">up</span> <span m="2377420">picking</span> <span m="2377870">s
  to</span> <span m="2378270">a</span> <span m="2378530">to</span> <span
  m="2378660">b</span> <span m="2378910">to</span> <span m="2379040">t</span>
  <span m="2379940">corresponding</span> <span m="2380530">to</span> <span
  m="2380640">the</span> <span m="2380780">G of f</span> <span
  m="2381520">that</span> <span m="2381700">you've</span> <span
  m="2381860">created.</span> <span m="2382680">Right,</span> <span
  m="2382900">so</span> <span m="2383210">the</span> <span m="2384210">G
  of</span> <span m="2384710">f</span> <span m="2384890">might</span> <span
  m="2385210">have</span> <span m="2385420">something</span> <span
  m="2385720">like</span> <span m="2386140">s</span> <span m="2387860">to</span>
  <span m="2388640">a--</span> <span m="2389150">there's</span> <span
  m="2389530">only</span> <span m="2389700">going</span> <span
  m="2389810">to</span> <span m="2389850">be</span> <span m="2389940">an</span>
  <span m="2390050">edge</span> <span m="2390240">this</span> <span
  m="2390410">way</span> <span m="2390600">that's</span> <span
  m="2390800">going</span> <span m="2390900">to</span> <span
  m="2390940">have</span> <span m="2391100">10</span> <span
  m="2391270">raised</span> <span m="2391510">to</span> <span
  m="2391580">9.</span> <span m="2392450">And</span> <span
  m="2392540">then</span> <span m="2392670">this</span> <span
  m="2392830">way</span> <span m="2392980">it's</span> <span
  m="2393110">going</span> <span m="2393230">to</span> <span
  m="2393270">have</span> <span m="2393490">1,</span> <span
  m="2394520">and</span> <span m="2395410">that's</span> <span
  m="2395500">going</span> <span m="2395580">to</span> <span
  m="2395620">b,</span> <span m="2395740">and</span> <span
  m="2396750">over</span> <span m="2396920">here</span> <span
  m="2398360">to</span> <span m="2400410">t</span> <span m="2400780">it's</span>
  <span m="2400960">going</span> <span m="2401090">to</span> <span
  m="2401140">have</span> <span m="2402510">10 raised to</span> <span
  m="2402990">9.</span> <span m="2404330">It's</span> <span
  m="2404510">also</span> <span m="2404780">going</span> <span
  m="2404920">to</span> <span m="2404970">have</span> <span
  m="2406090">10</span> <span m="2406320">raised</span> <span
  m="2406570">to</span> <span m="2406640">9</span> <span m="2407510">this</span>
  <span m="2407780">way,</span> <span m="2409170">and</span> <span
  m="2409530">it's</span> <span m="2409630">going</span> <span
  m="2409740">to</span> <span m="2409780">have</span> <span
  m="2409930">10</span> <span m="2410100">raised</span> <span
  m="2410320">to</span> <span m="2410400">9</span> <span m="2410820">this</span>
  <span m="2411100">way.</span></p><p><span m="2412700">And</span> <span
  m="2412970">the</span> <span m="2413050">reason</span> <span
  m="2413330">the</span> <span m="2413420">gentleman</span> <span
  m="2413830">was</span> <span m="2414060">laughing</span> <span
  m="2414530">is</span> <span m="2414640">because</span> <span
  m="2415740">we</span> <span m="2415930">ended</span> <span
  m="2416140">up</span> <span m="2416320">picking</span> <span
  m="2417310">this</span> <span m="2418040">path.</span> <span
  m="2419730">S</span> <span m="2420330">in G</span> <span m="2420730">of</span>
  <span m="2420850">f--</span> <span m="2421160">this</span> <span
  m="2421280">is</span> <span m="2421390">G</span> <span m="2421530">of</span>
  <span m="2421640">f</span> <span m="2422200">just</span> <span
  m="2422300">to</span> <span m="2422380">be</span> <span
  m="2422480">clear--</span> <span m="2423360">you</span> <span
  m="2423490">pick</span> <span m="2424010">s</span> <span m="2424438">a</span>
  <span m="2424866">b</span> <span m="2425722">t.</span> <span
  m="2427930">And</span> <span m="2428420">so</span> <span
  m="2428600">what</span> <span m="2428790">you</span> <span
  m="2428890">end</span> <span m="2429040">up</span> <span
  m="2429130">doing</span> <span m="2429440">is</span> <span
  m="2430320">you</span> <span m="2430480">end</span> <span
  m="2430710">up</span> <span m="2431890">making</span> <span
  m="2432220">this</span> <span m="2432400">1,</span> <span
  m="2433980">making</span> <span m="2434320">this</span> <span
  m="2434540">1,</span> <span m="2437330">and</span> <span
  m="2438190">coming</span> <span m="2438400">over</span> <span
  m="2438550">here</span> <span m="2439100">making</span> <span
  m="2439330">this</span> <span m="2439500">1.</span> <span
  m="2441750">Wow!</span> <span m="2442220">OK,</span> <span
  m="2442430">you</span> <span m="2442570">did</span> <span
  m="2442670">increase</span> <span m="2443020">the</span> <span
  m="2443100">flow.</span> <span m="2443720">Very</span> <span
  m="2443910">good,</span> <span m="2444250">made</span> <span
  m="2444470">progress.</span></p><p><span m="2446590">Now</span> <span
  m="2446850">what</span> <span m="2446970">happens?</span> <span
  m="2448400">When</span> <span m="2448600">you</span> <span
  m="2448700">do</span> <span m="2448820">this,</span> <span
  m="2451360">certainly</span> <span m="2451700">you'll</span> <span
  m="2451820">get</span> <span m="2451940">a</span> <span
  m="2452020">different</span> <span m="2452320">G</span> <span
  m="2452500">of</span> <span m="2452620">f.</span> <span m="2454330">And
  the</span> <span m="2454510">G of</span> <span m="2454630">f</span> <span
  m="2454860">is</span> <span m="2455050">going</span> <span
  m="2455230">to</span> <span m="2455330">turn</span> <span
  m="2455630">into--</span> <span m="2456650">well,</span> <span
  m="2456910">this</span> <span m="2457140">gets</span> <span
  m="2457320">a</span> <span m="2457370">little</span> <span
  m="2457640">more</span> <span m="2457840">interesting</span> <span
  m="2458210">here.</span> <span m="2458440">This</span> <span
  m="2458600">is</span> <span m="2458790">10</span> <span
  m="2458910">raised</span> <span m="2459190">to</span> <span
  m="2459420">9</span> <span m="2460210">minus</span> <span
  m="2460570">1.</span> <span m="2461050">This</span> <span
  m="2461190">is</span> <span m="2461290">10</span> <span
  m="2461460">raised</span> <span m="2461670">to</span> <span
  m="2461740">9--</span> <span m="2462620">no,</span> <span
  m="2462740">that</span> <span m="2462870">doesn't</span> <span
  m="2463070">change.</span> <span m="2464440">This is</span> <span
  m="2464700">still</span> <span m="2464910">10 raised</span> <span
  m="2465380">to 9.</span> <span m="2466890">This</span> <span
  m="2467060">is</span> <span m="2467400">10</span> <span m="2467530">raised
  to</span> <span m="2467990">9</span> <span m="2468250">minus</span> <span
  m="2468550">1.</span> <span m="2469720">And</span> <span
  m="2470180">that</span> <span m="2470390">this</span> <span
  m="2470590">edge</span> <span m="2470820">here</span> <span
  m="2471090">also</span> <span m="2471340">changes</span> <span
  m="2471860">because</span> <span m="2475110">basically</span> <span
  m="2475610">what</span> <span m="2475980">ends</span> <span
  m="2476110">up</span> <span m="2476200">happening</span> <span
  m="2476580">is</span> <span m="2477310">you</span> <span
  m="2477440">end</span> <span m="2477640">up</span> <span
  m="2477820">going</span> <span m="2478820">this</span> <span
  m="2479200">way</span> <span m="2480190">with</span> <span
  m="2480410">1.</span> <span m="2482580">Did</span> <span m="2482710">I</span>
  <span m="2482750">get</span> <span m="2482890">that</span> <span
  m="2483000">right?</span> <span m="2484430">Yeah?</span> <span
  m="2485850">OK,</span> <span m="2486050">good.</span></p><p><span
  m="2486800">So</span> <span m="2487720">now</span> <span
  m="2488040">what's</span> <span m="2488240">the</span> <span
  m="2488340">bad</span> <span m="2488490">path?</span> <span
  m="2490990">s</span> <span m="2491428">b</span> <span m="2491866">a</span>
  <span m="2492742">t.</span> <span m="2495260">So</span> <span
  m="2495620">s</span> <span m="2496040">b</span> <span m="2496370">a</span>
  <span m="2496710">t</span> <span m="2497050">would</span> <span
  m="2497390">now</span> <span m="2497610">say,</span> <span
  m="2498480">oh,</span> <span m="2498700">what</span> <span
  m="2498850">I'm</span> <span m="2498930">going</span> <span
  m="2499070">to</span> <span m="2499160">do</span> <span m="2500360">is,</span>
  <span m="2501790">I'm</span> <span m="2501940">going</span> <span
  m="2502050">to</span> <span m="2502090">go</span> <span
  m="2502230">ahead</span> <span m="2502460">and</span> <span
  m="2502570">make</span> <span m="2502760">this</span> <span
  m="2502960">1.</span> <span m="2504300">What</span> <span
  m="2504450">do</span> <span m="2504510">I</span> <span m="2504590">do</span>
  <span m="2504800">with that?</span></p><p><span m="2505883">AUDIENCE: Make
  it</span> <span m="2506356">0.</span></p><p><span m="2506830">PROFESSOR:
  Make</span> <span m="2507060">it</span> <span m="2507180">0,</span> <span
  m="2507790">exactly.</span> <span m="2509650">Make</span> <span
  m="2509780">it</span> <span m="2509920">0,</span> <span m="2510980">and</span>
  <span m="2511190">then</span> <span m="2511350">this</span> <span
  m="2511490">1</span> <span m="2511660">becomes</span> <span
  m="2511910">a</span> <span m="2511970">1.</span> <span
  m="2514440">Shall</span> <span m="2514670">we</span> <span
  m="2514770">keep</span> <span m="2514970">going?</span> <span
  m="2516380">No.</span> <span m="2518260">So</span> <span m="2518870">2</span>
  <span m="2519110">billion</span> <span m="2519200">iterations</span> <span
  m="2520340">for</span> <span m="2520540">a</span> <span
  m="2520590">graph</span> <span m="2520990">with</span> <span
  m="2521160">four</span> <span m="2521530">vertices.</span> <span
  m="2523190">Now that's</span> <span m="2523360">performance</span> <span
  m="2523830">for</span> <span m="2523950">you.</span> <span
  m="2526060">So</span> <span m="2526630">this</span> <span
  m="2527230">particular,</span> <span m="2529260">potentially</span> <span
  m="2529740">a</span> <span m="2529780">depth-first</span> <span
  m="2531090">Ford-Fulkerson</span> <span m="2532100">on</span> <span
  m="2532260">this</span> <span m="2532400">example,</span> <span
  m="2532980">depending</span> <span m="2533180">on</span> <span
  m="2533280">the</span> <span m="2533360">ordering</span> <span
  m="2533690">of</span> <span m="2533800">vertices</span> <span
  m="2534830">it's</span> <span m="2535120">certainly</span> <span
  m="2535280">quite</span> <span m="2535560">possible</span> <span
  m="2537280">that</span> <span m="2538730">you</span> <span
  m="2539127">would</span> <span m="2540320">get</span> <span
  m="2540660">to</span> <span m="2541070">this</span> <span
  m="2541450">particular</span> <span m="2542140">order</span> <span
  m="2543090">in</span> <span m="2543300">the</span> <span
  m="2543400">depth-first</span> <span m="2544070">search</span> <span
  m="2544640">on</span> <span m="2544850">G</span> <span m="2545090">of</span>
  <span m="2545210">f.</span></p><p><span m="2546760">The</span> <span
  m="2547170">computers</span> <span m="2547980">is</span> <span
  m="2548200">dumb,</span> <span m="2548610">it</span> <span
  m="2549740">does</span> <span m="2549910">what</span> <span
  m="2550070">you</span> <span m="2550180">tell</span> <span
  m="2550370">it</span> <span m="2550460">to</span> <span m="2550560">do,</span>
  <span m="2551190">it's</span> <span m="2551400">doing</span> <span
  m="2551590">depth-first</span> <span m="2552040">search.</span> <span
  m="2552750">It's</span> <span m="2552920">producing</span> <span
  m="2553370">these</span> <span m="2553560">paths,</span> <span
  m="2554480">and</span> <span m="2554720">you</span> <span
  m="2554820">end</span> <span m="2555030">up</span> <span
  m="2555510">with</span> <span m="2555740">2</span> <span
  m="2556070">billion</span> <span m="2556520">iterations</span> <span
  m="2557820">for</span> <span m="2558000">this.</span> <span
  m="2559850">And</span> <span m="2562210">how</span> <span
  m="2562440">many</span> <span m="2563740">iterations</span> <span
  m="2564360">do</span> <span m="2564430">you</span> <span
  m="2564610">really</span> <span m="2564840">need</span> <span
  m="2565760">if</span> <span m="2565890">you</span> <span
  m="2565980">did</span> <span m="2566150">it</span> <span
  m="2566280">right?</span> <span m="2568480">Two.</span> <span
  m="2570560">So</span> <span m="2571060">that's</span> <span
  m="2571250">a</span> <span m="2571300">billion</span> <span
  m="2571640">factor</span> <span m="2572000">slowdown.</span></p><p><span
  m="2572860">So</span> <span m="2573040">this</span> <span
  m="2573190">is</span> <span m="2573310">a</span> <span
  m="2573380">pathological</span> <span m="2573920">example,</span> <span
  m="2574340">a</span> <span m="2574390">simple</span> <span
  m="2574800">pathological</span> <span m="2575360">example,</span> <span
  m="2575770">to just</span> <span m="2575970">show</span> <span
  m="2576350">you</span> <span m="2576520">what</span> <span
  m="2576690">the</span> <span m="2576760">problem</span> <span
  m="2577180">is.</span> <span m="2577920">But</span> <span
  m="2578060">you</span> <span m="2578160">can</span> <span
  m="2578280">imagine</span> <span m="2578780">that</span> <span
  m="2579560">if</span> <span m="2579700">you</span> <span
  m="2579790">use</span> <span m="2580070">depth-first</span> <span
  m="2580520">search</span> <span m="2581320">you</span> <span
  m="2581610">might</span> <span m="2581750">be</span> <span
  m="2581830">a</span> <span m="2581880">factor</span> <span
  m="2582120">of</span> <span m="2582190">five</span> <span
  m="2582460">slower</span> <span m="2583880">on</span> <span
  m="2584100">average</span> <span m="2584840">than</span> <span
  m="2584920">if</span> <span m="2585030">you use</span> <span
  m="2585220">some</span> <span m="2585420">of</span> <span
  m="2585480">the</span> <span m="2585580">technique.</span> <span
  m="2586400">And</span> <span m="2586800">a</span> <span
  m="2586870">factor</span> <span m="2587100">of</span> <span
  m="2587160">5</span> <span m="2587440">is</span> <span
  m="2587740">nothing</span> <span m="2588000">to</span> <span
  m="2588060">be</span> <span m="2588140">scoffed</span> <span
  m="2588490">at,</span> <span m="2588850">especially</span> <span
  m="2589250">if</span> <span m="2589330">you're</span> <span
  m="2589590">running</span> <span m="2589910">for</span> <span
  m="2590010">minutes.</span> <span m="2590990">And,</span> <span
  m="2591490">you know,</span> <span m="2591550">back</span> <span
  m="2591730">in</span> <span m="2591800">the</span> <span
  m="2591880">day</span> <span m="2592060">computers</span> <span
  m="2592510">were</span> <span m="2593020">horribly</span> <span
  m="2593380">slow.</span> <span m="2595270">So</span> <span
  m="2597590">how</span> <span m="2597920">is</span> <span
  m="2598050">this</span> <span m="2598190">problem</span> <span
  m="2598660">fixed?</span></p><p><span m="2599780">Well,</span> <span
  m="2600710">any</span> <span m="2600880">number</span> <span
  m="2601170">of</span> <span m="2601230">ways.</span> <span
  m="2603310">But</span> <span m="2603440">the</span> <span
  m="2603530">first</span> <span m="2604070">real</span> <span
  m="2604530">way</span> <span m="2605610">that</span> <span
  m="2606790">took</span> <span m="2607050">into</span> <span
  m="2607280">account</span> <span m="2608160">asymptotitc</span> <span
  m="2608780">complexity,</span> <span m="2609740">did</span> <span
  m="2610190">analysis,</span> <span m="2611420">and</span> <span
  m="2611580">did</span> <span m="2611710">all</span> <span
  m="2611870">of</span> <span m="2611960">that</span> <span
  m="2612650">was</span> <span m="2612830">due to</span> <span
  m="2613070">Edmonds and Karp,</span> <span m="2614700">which is</span> <span
  m="2614870">a</span> <span m="2614930">few</span> <span
  m="2615110">years</span> <span m="2615390">after</span> <span
  m="2615670">Ford-Fulkerson.</span> <span m="2616650">In</span> <span
  m="2616710">fact,</span> <span m="2617060">several</span> <span
  m="2617250">years</span> <span m="2617500">after</span> <span
  m="2617700">Ford-Fulkerson.</span></p><p><span m="2619080">And</span> <span
  m="2620020">their</span> <span m="2620220">contribution</span> <span
  m="2621290">was</span> <span m="2621440">not</span> <span
  m="2621670">as</span> <span m="2621790">much</span> <span m="2624570">a</span>
  <span m="2624750">new</span> <span m="2624910">algorithm,</span> <span
  m="2625380">though</span> <span m="2625500">it</span> <span
  m="2625620">is</span> <span m="2625800">called</span> <span
  m="2626150">Edmonds-Karp</span> <span m="2626700">algorithm.</span> <span
  m="2627980">It's</span> <span m="2628300">really</span> <span
  m="2628570">a</span> <span m="2628640">small</span> <span
  m="2629210">change</span> <span m="2629930">to</span> <span
  m="2630020">Ford-Fulkerson.</span> <span m="2631950">You</span> <span
  m="2632050">might</span> <span m="2632220">want</span> <span
  m="2632320">to</span> <span m="2632360">think</span> <span
  m="2632510">about</span> <span m="2632690">it</span> <span m="2632800">as
  the</span> <span m="2632940">Edmonds-Karp</span> <span
  m="2633650">analysis,</span> <span m="2634500">which</span> <span
  m="2634620">was</span> <span m="2635350">kind</span> <span
  m="2635810">of</span> <span m="2635950">important,</span> <span
  m="2636550">and</span> <span m="2636760">we're</span> <span
  m="2636870">not</span> <span m="2637030">going</span> <span
  m="2637120">to</span> <span m="2637180">do</span> <span
  m="2637280">that</span> <span m="2637430">here.</span> <span
  m="2638550">But</span> <span m="2639000">you'll</span> <span
  m="2639150">see</span> <span m="2639310">it</span> <span m="2639360">in</span>
  <span m="2639460">section</span> <span m="2640100">on</span> <span
  m="2640300">Friday.</span></p><p><span m="2641490">But</span> <span
  m="2641610">the</span> <span m="2641700">Edmonds-Karp</span> <span
  m="2642340">algorithm</span> <span m="2643290">slash</span> <span
  m="2643670">analysis</span> <span m="2647910">is</span> <span
  m="2648240">that,</span> <span m="2653080">if</span> <span
  m="2653210">you</span> <span m="2653310">use</span> <span m="2653600">a</span>
  <span m="2653670">breadth-first</span> <span m="2657880">augmenting</span>
  <span m="2658440">path,</span> <span m="2661150">it's</span> <span
  m="2661370">obviously</span> <span m="2661800">just</span> <span
  m="2662220">as</span> <span m="2662350">easy</span> <span
  m="2663730">to</span> <span m="2664060">discover</span> <span
  m="2664830">complexity-wise</span> <span m="2666220">as</span> <span
  m="2666420">the</span> <span m="2666520">depth-first</span> <span
  m="2667110">path.</span> <span m="2668190">Then</span> <span
  m="2669030">you</span> <span m="2669200">could</span> <span
  m="2669370">get</span> <span m="2669500">a</span> <span
  m="2669570">polynomial</span> <span m="2670340">bound</span> <span
  m="2671400">that</span> <span m="2671640">did</span> <span
  m="2671770">not</span> <span m="2672020">depend</span> <span
  m="2672540">on</span> <span m="2672650">the</span> <span
  m="2672740">capacities</span> <span m="2673950">for</span> <span
  m="2674310">the</span> <span m="2675160">complexity</span> <span
  m="2676170">and</span> <span m="2676340">therefore</span> <span
  m="2676670">iteration</span> <span m="2677180">count</span> <span
  m="2677900">of</span> <span m="2678060">Ford-Fulkerson.</span> <span
  m="2680690">So</span> <span m="2680870">that</span> <span
  m="2681020">was</span> <span m="2681110">their</span> <span
  m="2681260">contribution.</span></p><p><span m="2683480">And</span> <span
  m="2683580">so</span> <span m="2683690">the</span> <span
  m="2683770">breadth-first</span> <span m="2684220">path</span> <span
  m="2685770">is</span> <span m="2685980">the</span> <span
  m="2686130">shortest</span> <span m="2686570">path</span> <span
  m="2690590">in</span> <span m="2690800">G</span> <span m="2691784">f</span>
  <span m="2694080">from</span> <span m="2694370">s to</span> <span
  m="2694810">t</span> <span m="2695800">if</span> <span m="2695920">you</span>
  <span m="2696070">count</span> <span m="2698490">where</span> <span
  m="2699840">each</span> <span m="2700390">edge</span> <span
  m="2704410">has</span> <span m="2704730">weight</span> <span
  m="2705030">1.</span> <span m="2707550">So</span> <span m="2707760">in</span>
  <span m="2707860">that</span> <span m="2708040">case</span> <span
  m="2708280">you would</span> <span m="2708420">get</span> <span
  m="2708630">your</span> <span m="2708760">two</span> <span
  m="2709000">iterations.</span> <span m="2709840">You'd</span> <span
  m="2709940">get</span> <span m="2710090">the</span> <span
  m="2710150">shortest</span> <span m="2710490">path</span> <span
  m="2710760">of</span> <span m="2711150">weight</span> <span
  m="2711390">2.</span> <span m="2712870">Whenever</span> <span
  m="2712990">I</span> <span m="2713150">say</span> <span
  m="2713280">weight,</span> <span m="2713600">I</span> <span
  m="2713630">mean</span> <span m="2713820">just</span> <span
  m="2714040">counting</span> <span m="2714370">the</span> <span
  m="2714460">number</span> <span m="2714660">of</span> <span
  m="2714730">edges.</span> <span m="2716210">And</span> <span
  m="2717360">these</span> <span m="2717690">algorithms</span> <span
  m="2718140">they actually</span> <span m="2718510">recognized</span> <span
  m="2719630">that</span> <span m="2719830">breadth-first</span> <span
  m="2721160">implementations</span> <span m="2722000">of</span> <span
  m="2722110">Ford-Fulkerson</span> <span m="2723260">were</span> <span
  m="2723460">the</span> <span m="2723580">ones</span> <span
  m="2724440">that</span> <span m="2724620">ran</span> <span
  m="2724880">faster</span> <span m="2726160">than</span> <span
  m="2726500">all</span> <span m="2726740">the</span> <span
  m="2726810">other</span> <span m="2726960">ones.</span> <span
  m="2728390">And</span> <span m="2728540">then</span> <span m="2728640">they
  said,</span> <span m="2728890">wait,</span> <span m="2729170">what's</span>
  <span m="2729390">going</span> <span m="2729520">on</span> <span
  m="2729670">here?</span> <span m="2730310">This</span> <span
  m="2730470">looks</span> <span m="2730620">pretty</span> <span
  m="2730780">good.</span></p><p><span m="2731590">And</span> <span
  m="2731730">so</span> <span m="2731800">they</span> <span
  m="2731900">went</span> <span m="2732110">off</span> <span
  m="2732280">and</span> <span m="2732430">did</span> <span m="2732610">a</span>
  <span m="2732690">fairly</span> <span m="2733070">sophisticated</span> <span
  m="2733670">analysis</span> <span m="2735620">that</span> <span
  m="2736260">showed</span> <span m="2738510">that</span> <span
  m="2739360">you</span> <span m="2740250">had,</span> <span
  m="2742510">and</span> <span m="2742540">as</span> <span m="2742650">I</span>
  <span m="2742700">said</span> <span m="2742880">you'll</span> <span
  m="2743030">see</span> <span m="2743200">that</span> <span m="2745630">in
  section,</span> <span m="2746910">that</span> <span m="2747340">you</span>
  <span m="2747520">only</span> <span m="2747810">need</span> <span
  m="2748080">order</span> <span m="2748410">VE</span> <span
  m="2750070">augmentations</span> <span m="2752360">in</span> <span
  m="2752520">the</span> <span m="2752620">worst</span> <span
  m="2752910">case.</span> <span m="2756500">So</span> <span
  m="2756550">this</span> <span m="2756740">is</span> <span
  m="2756820">what</span> <span m="2757010">we</span> <span
  m="2757140">know</span> <span m="2757310">and</span> <span
  m="2757390">love</span> <span m="2757700">with</span> <span
  m="2757830">respect</span> <span m="2757890">to</span> <span
  m="2758400">algorithmic</span> <span m="2758630">complexity.</span> <span
  m="2760450">Order</span> <span m="2760820">VE</span> <span
  m="2761270">augmentations,</span> <span m="2762050">in</span> <span
  m="2762230">the</span> <span m="2762340">worst</span> <span
  m="2762600">case,</span> <span m="2763160">provided</span> <span
  m="2764200">you</span> <span m="2764330">used</span> <span
  m="2764560">breadth-first</span> <span m="2765010">augmentation.</span> <span
  m="2766310">And</span> <span m="2766490">so</span> <span
  m="2766640">what</span> <span m="2766760">is the</span> <span
  m="2766860">overall</span> <span m="2767260">complexity</span> <span
  m="2767820">of</span> <span m="2767880">the</span> <span
  m="2767950">algorithm,</span> <span m="2769700">let's</span> <span
  m="2769870">call it</span> <span m="2770050">the</span> <span
  m="2770120">Edmonds-Karp</span> <span m="2770860">algorithm,</span> <span
  m="2771720">with</span> <span m="2771890">this</span> <span
  m="2772060">breadth-first</span> <span m="2772490">search</span> <span
  m="2773560">it</span> <span m="2773720">would</span> <span
  m="2773850">be--</span> <span m="2781030">order?</span></p><p><span
  m="2783850">VE</span> <span m="2784490">square,</span> <span
  m="2786730">you</span> <span m="2786910">could</span> <span
  m="2787080">think</span> <span m="2787240">about</span> <span
  m="2787470">it</span> <span m="2787620">as,</span> <span
  m="2788250">let's</span> <span m="2788420">assume</span> <span
  m="2788765">that e</span> <span m="2789110">is greater</span> <span
  m="2789350">than</span> <span m="2790040">V,</span> <span
  m="2790980">and</span> <span m="2791130">so</span> <span m="2791300">we</span>
  <span m="2791880">just</span> <span m="2793660">say</span> <span
  m="2793780">order</span> <span m="2794040">V</span> <span
  m="2794290">squared.</span> <span m="2797840">So</span> <span
  m="2797940">that</span> <span m="2798070">was</span> <span
  m="2798240">the</span> <span m="2798500">Edmonds and</span> <span
  m="2798790">Karp's</span> <span m="2799220">contribution.</span> <span
  m="2802070">This</span> <span m="2802250">mean</span> <span
  m="2802440">that</span> <span m="2802810">an</span> <span
  m="2802870">amazing</span> <span m="2803310">amount</span> <span
  m="2803510">of</span> <span m="2803580">work</span> <span
  m="2804620">over</span> <span m="2804740">the</span> <span
  m="2804830">past</span> <span m="2805210">30,</span> <span
  m="2805440">40</span> <span m="2805660">years</span> <span
  m="2806620">on</span> <span m="2806810">improving</span> <span
  m="2807200">that</span> <span m="2807330">bound.</span> <span m="2808960">[?
  Denic ?]</span> <span m="2811490">independently</span> <span
  m="2812190">arrived</span> <span m="2812470">at</span> <span
  m="2813560">a</span> <span m="2813650">similar</span> <span
  m="2814860">analysis</span> <span m="2815510">in</span> <span
  m="2815966">bound,</span> <span m="2816880">along</span> <span
  m="2817010">with</span> <span m="2817140">Emonds</span> <span
  m="2817400">and</span> <span m="2817520">Karp.</span> <span
  m="2818700">They</span> <span m="2818840">were</span> <span
  m="2818910">the</span> <span m="2819010">first</span> <span
  m="2819260">to</span> <span m="2819330">give</span> <span
  m="2819520">polynomial</span> <span m="2820280">bounds</span> <span
  m="2821390">on</span> <span m="2821570">max</span> <span
  m="2821730">flow.</span> <span m="2823160">And</span> <span
  m="2824910">there</span> <span m="2825100">was</span> <span
  m="2825990">an</span> <span m="2826200">algorithm</span> <span
  m="2827440">that</span> <span m="2827910">came</span> <span
  m="2828120">out</span> <span m="2828210">of</span> <span
  m="2828950">MIT</span> <span m="2831460">partly,</span> <span m="2832650">or
  at least</span> <span m="2832960">MIT</span> <span m="2833320">alums,</span>
  <span m="2835500">where</span> <span m="2838030">you</span> <span
  m="2838220">improve</span> <span m="2838640">that.</span> <span
  m="2839220">And</span> <span m="2839370">so</span> <span
  m="2839450">until</span> <span m="2839850">about</span> <span
  m="2840070">2011--</span> <span m="2841510">and</span> <span
  m="2842170">there's</span> <span m="2842350">a</span> <span
  m="2842400">lot</span> <span m="2842670">of</span> <span
  m="2842730">different</span> <span m="2842940">algorithms</span> <span
  m="2843530">depending</span> <span m="2843860">on</span> <span
  m="2844730">whether</span> <span m="2844880">you're</span> <span
  m="2845210">taking</span> <span m="2845530">into</span> <span
  m="2845680">account</span> <span m="2846180">the</span> <span
  m="2846830">value</span> <span m="2847290">of</span> <span
  m="2847390">the</span> <span m="2847480">capacity,</span> <span
  m="2849020">and</span> <span m="2849140">you</span> <span
  m="2849250">want</span> <span m="2849450">to</span> <span
  m="2849500">think</span> <span m="2849660">about</span> <span
  m="2849860">this</span> <span m="2850040">is</span> <span
  m="2850430">as</span> <span m="2850880">some</span> <span
  m="2851110">max</span> <span m="2851420">value,</span> <span
  m="2852400">and</span> <span m="2852980">if</span> <span
  m="2853100">you</span> <span m="2853190">want</span> <span
  m="2853270">to</span> <span m="2853320">include</span> <span
  m="2853660">that</span> <span m="2853860">in</span> <span
  m="2853920">the</span> <span m="2854010">complexity</span> <span
  m="2854520">then</span> <span m="2855440">things</span> <span
  m="2855660">change</span> <span m="2855960">a</span> <span
  m="2856000">bit.</span> <span m="2856720">If</span> <span
  m="2856810">you</span> <span m="2856870">can</span> <span
  m="2856980">limit</span> <span m="2857260">that.</span></p><p><span
  m="2857790">But</span> <span m="2858070">assuming</span> <span
  m="2858430">that</span> <span m="2858570">those</span> <span
  m="2858740">capacities</span> <span m="2859310">are</span> <span
  m="2860080">essentially</span> <span m="2861010">unbounded,</span> <span
  m="2862290">then</span> <span m="2862780">the</span> <span
  m="2863090">fastest</span> <span m="2863510">algorithm</span> <span
  m="2864260">in 2011</span> <span m="2865500">was</span> <span
  m="2865950">King,</span> <span m="2868050">Raul,</span> <span
  m="2869060">and</span> <span m="2869990">Tarjan.</span> <span
  m="2873070">And</span> <span m="2873300">that</span> <span
  m="2873460">runs</span> <span m="2873780">in</span> <span
  m="2873950">order</span> <span m="2875500">VE</span> <span
  m="2877140">log</span> <span m="2878910">of</span> <span m="2879620">E</span>
  <span m="2879930">divided</span> <span m="2880660">by</span> <span
  m="2881700">V</span> <span m="2882270">log</span> <span m="2882630">V</span>
  <span m="2884520">V.</span> <span m="2885690">Obviously,</span> <span
  m="2885980">we need</span> <span m="2886160">something</span> <span
  m="2886450">for</span> <span m="2886530">the</span> <span
  m="2886630">log</span> <span m="2886950">here.</span> <span
  m="2890500">So</span> <span m="2890770">that's</span> <span
  m="2891410">kind</span> <span m="2891520">of,</span> <span
  m="2891580">pretty</span> <span m="2891750">good</span> <span
  m="2891910">here,</span> <span m="2892130">right,</span> <span
  m="2892340">because</span> <span m="2892550">this is</span> <span
  m="2892850">pretty</span> <span m="2893020">small.</span> <span
  m="2894030">If</span> <span m="2895230">you</span> <span
  m="2895350">really</span> <span m="2895470">think</span> <span
  m="2895620">about</span> <span m="2895800">it,</span> <span
  m="2895850">if</span> <span m="2895920">E's</span> <span
  m="2896210">large</span> <span m="2896580">for</span> <span
  m="2896700">dense</span> <span m="2897490">graphs</span> <span
  m="2897880">this is</span> <span m="2898050">going</span> <span
  m="2898150">to</span> <span m="2898190">be</span> <span m="2898280">a</span>
  <span m="2898340">small</span> <span m="2898640">constant.</span> <span
  m="2899960">So</span> <span m="2900070">that's</span> <span
  m="2900610">pretty</span> <span m="2900780">good.</span> <span
  m="2901040">So</span> <span m="2901120">that</span> <span
  m="2901230">was</span> <span m="2901360">the</span> <span
  m="2901450">fastest</span> <span m="2901735">until</span> <span
  m="2902020">2011.</span></p><p><span m="2903620">Very</span> <span
  m="2903790">recently,</span> <span m="2904190">Orlin,</span> <span
  m="2905300">who's</span> <span m="2905470">at</span> <span
  m="2905670">MIT,</span> <span m="2907320">came</span> <span
  m="2907560">up</span> <span m="2907760">with</span> <span
  m="2907960">an</span> <span m="2908230">order</span> <span m="2908560">v
  e</span> <span m="2908920">algorithm</span> <span m="2910010">and</span> <span
  m="2910170">there are</span> <span m="2910290">many</span> <span
  m="2910500">variants</span> <span m="2911030">here</span> <span
  m="2911960">that</span> <span m="2912120">use</span> <span
  m="2912560">fast</span> <span m="2914180">matrix</span> <span
  m="2914620">multiply.</span> <span m="2916200">And</span> <span
  m="2916380">then</span> <span m="2917390">just</span> <span
  m="2917580">this</span> <span m="2917810">past</span> <span
  m="2918830">September,</span> <span m="2920220">Aleksander</span> <span
  m="2920650">Madry</span> <span m="2920950">joined</span> <span
  m="2921370">our</span> <span m="2921430">department,</span> <span
  m="2922350">and</span> <span m="2923430">he</span> <span
  m="2923600">has</span> <span m="2925010">a</span> <span
  m="2925090">variant</span> <span m="2925440">algorithm</span> <span
  m="2926840">that</span> <span m="2929040">is</span> <span
  m="2929290">better</span> <span m="2929770">in</span> <span
  m="2930150">some</span> <span m="2930350">sense,</span> <span
  m="2930680">not</span> <span m="2931970">in</span> <span
  m="2932770">the</span> <span m="2932900">pure</span> <span
  m="2933160">sense</span> <span m="2933500">of</span> <span
  m="2933890">V</span> <span m="2934110">and</span> <span m="2934220">E</span>
  <span m="2934900">but</span> <span m="2935500">there's</span> <span
  m="2936570">a</span> <span m="2936600">couple</span> <span
  m="2936810">of</span> <span m="2936860">constraints</span> <span
  m="2937250">associated</span> <span m="2937670">with</span> <span
  m="2937820">it</span> <span m="2937930">that</span> <span
  m="2938050">are</span> <span m="2938400">very</span> <span
  m="2940570">mild.</span> <span m="2941410">But</span> <span
  m="2941600">it's</span> <span m="2942490">in</span> <span
  m="2942670">that</span> <span m="2942860">sense</span> <span
  m="2943100">better</span> <span m="2943340">than</span> <span
  m="2943500">order</span> <span m="2943710">VE</span> <span
  m="2944520">and</span> <span m="2944640">I</span> <span
  m="2944670">won't</span> <span m="2944870">get</span> <span
  m="2945010">to</span> <span m="2945070">that.</span> <span
  m="2946110">In</span> <span m="2946300">the</span> <span
  m="2946380">context</span> <span m="2946890">of</span> <span
  m="2947630">6</span> <span m="2947880">over</span> <span m="2948120">6</span>
  <span m="2949640">we</span> <span m="2949780">are</span> <span
  m="2949850">obviously</span> <span m="2950590">going</span> <span
  m="2950720">to</span> <span m="2950770">stick</span> <span
  m="2951040">with</span> <span m="2951950">Edmonds-Karp</span> <span
  m="2952310">and</span> <span m="2952770">Ford-Fulkerson</span> <span
  m="2953930">in</span> <span m="2954030">terms</span> <span
  m="2954260">of</span> <span m="2954590">what</span> <span
  m="2954770">you're</span> <span m="2954940">responsible</span> <span
  m="2955410">for,</span> <span m="2956040">but</span> <span
  m="2956760">this</span> <span m="2956910">as</span> <span
  m="2957010">been</span> <span m="2957190">a</span> <span
  m="2957460">rich</span> <span m="2957770">area</span> <span
  m="2958020">of</span> <span m="2958160">research</span> <span
  m="2958800">for</span> <span m="2959490">decades.</span> <span m="2960385">All
  right,</span> <span m="2960750">yeah.</span></p><p><span
  m="2961030">[INAUDIBLE]</span></p><p><span m="2966354">Oh,</span> <span
  m="2966940">simply</span> <span m="2967230">because</span> <span
  m="2968230">the</span> <span m="2971260">breadth-first</span> <span
  m="2972120">augmentation</span> <span m="2972810">takes</span> <span
  m="2973060">order</span> <span m="2973420">e.</span> <span
  m="2973670">I'm</span> <span m="2973800">just</span> <span
  m="2973950">saying</span> <span m="2974120">it takes</span> <span
  m="2974380">order E</span> <span m="2974800">time.</span> <span
  m="2976470">So</span> <span m="2976730">this</span> <span
  m="2976940">was</span> <span m="2977130">the</span> <span
  m="2978370">order</span> <span m="2978680">VE</span> <span
  m="2979110">augmentations,</span> <span m="2980230">in</span> <span
  m="2980340">the</span> <span m="2980450">worst</span> <span
  m="2980730">case,</span> <span m="2981460">each</span> <span
  m="2981770">augmentation</span> <span m="2983310">takes</span> <span
  m="2984310">order</span> <span m="2984620">E</span> <span
  m="2984840">time,</span> <span m="2985090">because</span> <span
  m="2985340">breadth-first</span> <span m="2985730">search</span> <span
  m="2986010">takes</span> <span m="2986220">order</span> <span
  m="2986430">E</span> <span m="2986620">time</span> <span
  m="2987160">assuming</span> <span m="2987490">that</span> <span m="2987640">E
  is</span> <span m="2987880">greater</span> <span m="2988050">than</span> <span
  m="2988200">V</span> <span m="2988850">and</span> <span m="2989000">I</span>
  <span m="2989050">just</span> <span m="2989240">added</span> <span
  m="2989510">the</span> <span m="2989765">E</span> <span
  m="2990290">square</span> <span m="2990620">factor.</span> <span
  m="2991330">Thanks</span> <span m="2991520">for</span> <span
  m="2991630">asking.</span> <span m="2992040">I'm</span> <span
  m="2992160">sure</span> <span m="2992450">a</span> <span
  m="2992500">lot</span> <span m="2992650">of</span> <span
  m="2992760">other</span> <span m="2992910">people</span> <span
  m="2993180">had</span> <span m="2993320">the</span> <span
  m="2993370">same</span> <span m="2993570">question.</span> <span
  m="2995130">Yes,</span> <span m="2995390">I just</span> <span
  m="2995730">sort</span> <span m="2996040">of</span> <span
  m="2996100">skipped</span> <span m="2996510">over</span> <span
  m="2996690">that</span> <span m="2996870">a</span> <span
  m="2996920">little</span> <span m="2997120">too</span> <span
  m="2997270">quickly.</span> <span m="2998510">That's</span> <span
  m="2998710">why</span> <span m="2998900">you</span> <span
  m="2998950">get</span> <span m="2999100">the</span> <span
  m="2999190">order</span> <span m="2999410">VE</span> <span
  m="2999760">square.</span></p><p><span m="3001990">And</span> <span
  m="3002160">so</span> <span m="3002380">that's</span> <span
  m="3002620">a</span> <span m="3002690">significant</span> <span
  m="3003190">reduction</span> <span m="3004500">if</span> <span
  m="3004550">you</span> <span m="3004670">assume</span> <span
  m="3004970">that</span> <span m="3005770">constant</span> <span
  m="3006100">factors</span> <span m="3006490">don't</span> <span
  m="3006660">explode</span> <span m="3007610">going</span> <span
  m="3007900">from</span> <span m="3008820">Edmonds-Karp</span> <span
  m="3009500">to</span> <span m="3010620">King,</span> <span
  m="3010830">Raul,</span> <span m="3011090">and</span> <span
  m="3011360">Tarjan,</span> <span m="3012300">and</span> <span
  m="3013070">certainly</span> <span m="3013390">Orlin,</span> <span
  m="3015310">So</span> <span m="3015790">now</span> <span m="3015910">we</span>
  <span m="3016030">got</span> <span m="3016110">algorithms,</span> <span
  m="3016610">we've</span> <span m="3016760">proven</span> <span
  m="3017040">them</span> <span m="3017160">correct,</span> <span
  m="3017880">we've</span> <span m="3018010">done</span> <span
  m="3018160">some</span> <span m="3018290">analysis.</span></p><p><span
  m="3019990">At</span> <span m="3020240">tomorrow,</span> <span
  m="3020630">in</span> <span m="3020760">section,</span> <span
  m="3021760">you're</span> <span m="3021940">going</span> <span
  m="3022080">to</span> <span m="3022150">see,</span> <span
  m="3024610">at</span> <span m="3024970">the</span> <span
  m="3025350">analysis</span> <span m="3026620">that</span> <span
  m="3026760">gives</span> <span m="3026930">you</span> <span
  m="3027030">the</span> <span m="3027140">order</span> <span
  m="3027320">VE.</span> <span m="3028390">Which</span> <span
  m="3028590">is</span> <span m="3028710">a</span> <span m="3028990">half</span>
  <span m="3029210">hours</span> <span m="3029590">worth</span> <span
  m="3029790">of</span> <span m="3031280">pain,</span> <span
  m="3031750">should</span> <span m="3031950">I</span> <span
  m="3031990">say.</span> <span m="3032720">Uh,</span> <span
  m="3032880">no,</span> <span m="3033680">a half</span> <span
  m="3033880">hours</span> <span m="3034030">worth</span> <span
  m="3034100">of</span> <span m="3034240">excitement!</span> <span
  m="3035960">That</span> <span m="3036240">corresponds</span> <span
  m="3036760">to</span> <span m="3036950">the</span> <span
  m="3037110">order</span> <span m="3037390">VE,</span> <span
  m="3038850">that</span> <span m="3039050">bound that</span> <span
  m="3039480">we</span> <span m="3039590">have.</span> <span
  m="3040410">All</span> <span m="3040480">right,</span> <span
  m="3040870">so</span> <span m="3041210">it's</span> <span
  m="3041390">not</span> <span m="3041560">that</span> <span
  m="3041730">difficult.</span> <span m="3042260">It's</span> <span
  m="3042340">about</span> <span m="3042600">the</span> <span
  m="3042670">level</span> <span m="3043590">of</span> <span
  m="3044120">this</span> <span m="3044560">thing</span> <span
  m="3044720">over</span> <span m="3044870">here,</span> <span
  m="3045600">and</span> <span m="3045740">maybe</span> <span
  m="3045910">a</span> <span m="3045940">little</span> <span
  m="3046250">bit</span> <span m="3046380">more</span> <span
  m="3046550">involved.</span> <span m="3047990">So,</span> <span
  m="3049266">yeah?</span></p><p><span m="3050198">AUDIENCE:
  [INAUDIBLE]</span></p><p>&nbsp;</p><p><span m="3056210">PROFESSOR:
  Breadth-first</span> <span m="3056680">search</span> <span
  m="3057510">takes</span> <span m="3057770">order</span> <span
  m="3058010">v</span> <span m="3058340">plus</span> <span m="3058550">e</span>
  <span m="3058750">time.</span> <span m="3060580">On</span> <span
  m="3060800">a</span> <span m="3060870">graph,</span> <span
  m="3061810">breadth-first</span> <span m="3062360">search</span> <span
  m="3062820">is</span> <span m="3062970">order v</span> <span m="3063400">plus
  e.</span> <span m="3064220">And</span> <span m="3065220">I'm</span> <span
  m="3065380">getting</span> <span m="3065530">a little</span> <span
  m="3065610">lazy</span> <span m="3066100">here,</span> <span
  m="3066430">and</span> <span m="3066760">I'm</span> <span
  m="3066840">paying</span> <span m="3067090">for</span> <span
  m="3067390">it,</span> <span m="3068490">by</span> <span
  m="3069120">putting</span> <span m="3069430">in</span> <span
  m="3069540">the</span> <span m="3069640">v e square.</span> <span
  m="3070470">But</span> <span m="3070890">I</span> <span
  m="3071040">should</span> <span m="3071280">really</span> <span
  m="3071480">have</span> <span m="3071850">been--</span> <span
  m="3072430">if</span> <span m="3072540">I</span> <span
  m="3072560">wanted</span> <span m="3072720">to</span> <span
  m="3072780">be</span> <span m="3072910">a</span> <span
  m="3072970">stickler,</span> <span m="3073880">I</span> <span
  m="3074050">would</span> <span m="3074120">have</span> <span
  m="3074190">put</span> <span m="3074330">in</span> <span m="3074440">v</span>
  <span m="3074710">plus e,</span> <span m="3075310">thank</span> <span
  m="3075450">you.</span></p><p><span m="3078250">So</span> <span
  m="3080780">where</span> <span m="3080920">was</span> <span
  m="3081080">I?</span> <span m="3081570">So</span> <span m="3081690">we</span>
  <span m="3081820">got</span> <span m="3081990">an</span> <span
  m="3082090">algorithm</span> <span m="3082450">now.</span> <span
  m="3082720">You know,</span> <span m="3082920">we've got</span> <span
  m="3083100">a</span> <span m="3083170">bunch</span> <span
  m="3083390">of</span> <span m="3083470">algorithms.</span> <span
  m="3084800">Network</span> <span m="3085140">flow</span> <span
  m="3085350">is</span> <span m="3085620">this</span> <span
  m="3085770">amazing</span> <span m="3086260">hammer</span> <span
  m="3087220">that</span> <span m="3087320">is</span> <span
  m="3087400">being</span> <span m="3087550">used</span> <span
  m="3087910">in</span> <span m="3087980">a</span> <span m="3088040">wide</span>
  <span m="3088350">variety</span> <span m="3088700">of</span> <span
  m="3088800">things.</span> <span m="3089500">And it's</span> <span
  m="3089670">been</span> <span m="3089790">used</span> <span
  m="3089990">for</span> <span m="3090100">matching,</span> <span
  m="3090750">bipartite</span> <span m="3091350">matching,</span> <span
  m="3091880">all</span> <span m="3092050">sorts</span> <span
  m="3092330">of</span> <span m="3092970">things.</span> <span
  m="3093920">My</span> <span m="3094200">favorite</span> <span
  m="3094490">example</span> <span m="3096440">is</span> <span
  m="3098040">something</span> <span m="3098400">that</span> <span
  m="3099600">is</span> <span m="3100930">related</span> <span
  m="3101370">to</span> <span m="3101460">sports,</span> <span
  m="3101980">I</span> <span m="3102030">should</span> <span
  m="3102220">say,</span> <span m="3103290">which</span> <span
  m="3103420">is</span> <span m="3103670">a</span> <span
  m="3103740">baseball</span> <span m="3104300">elimination.</span> <span
  m="3105900">So</span> <span m="3106920">what</span> <span
  m="3107110">is</span> <span m="3107240">this</span> <span
  m="3107600">application</span> <span m="3108170">about?</span></p><p><span
  m="3109450">You</span> <span m="3109640">see</span> <span
  m="3110170">charts</span> <span m="3111340">that</span> <span
  m="3111510">correspond</span> <span m="3112130">to</span> <span
  m="3113050">how</span> <span m="3113500">your</span> <span
  m="3113540">team</span> <span m="3113890">is</span> <span
  m="3113990">doing.</span> <span m="3114260">Standings,</span> <span
  m="3114920">right?</span> <span m="3115190">Go to</span> <span
  m="3115650">ESPN</span> <span m="3117060">and</span> <span
  m="3117900">click</span> <span m="3118180">on</span> <span
  m="3118890">standings</span> <span m="3119850">for</span> <span
  m="3120030">baseball,</span> <span m="3120530">for</span> <span
  m="3120640">example.</span> <span m="3122440">It</span> <span
  m="3122570">doesn't--</span> <span m="3123470">now</span> <span
  m="3123630">you</span> <span m="3123760">see</span> <span
  m="3123920">pre</span> <span m="3124090">season</span> <span
  m="3124400">standings</span> <span m="3124860">but</span> <span
  m="3125000">let's</span> <span m="3125190">assume</span> <span
  m="3125470">it's</span> <span m="3126230">August</span> <span
  m="3126680">or</span> <span m="3126750">something--</span> <span
  m="3127690">and</span> <span m="3128070">you</span> <span
  m="3128670">click</span> <span m="3128910">on</span> <span
  m="3130530">standings.</span> <span m="3131660">And</span> <span
  m="3132140">you</span> <span m="3132300">see</span> <span m="3132700">a</span>
  <span m="3132780">chart</span> <span m="3134050">that</span> <span
  m="3134330">corresponds</span> <span m="3134870">to</span> <span
  m="3135350">games</span> <span m="3136370">played,</span> <span
  m="3137510">games</span> <span m="3137920">won,</span> <span
  m="3138720">games</span> <span m="3139070">lost,</span> <span
  m="3140210">games</span> <span m="3140560">remaining,</span> <span
  m="3141780">and</span> <span m="3142090">so</span> <span m="3142230">on</span>
  <span m="3142370">and</span> <span m="3142460">so</span> <span
  m="3142620">forth.</span></p><p><span m="3143540">And</span> <span
  m="3144460">back</span> <span m="3144710">in</span> <span
  m="3144800">the</span> <span m="3144890">day</span> <span
  m="3146970">when</span> <span m="3149000">they</span> <span
  m="3155000">were</span> <span m="3155020">just</span> <span
  m="3157640">winners</span> <span m="3160170">corresponding</span> <span
  m="3160800">to</span> <span m="3163630">each</span> <span
  m="3163950">division</span> <span m="3165050">you</span> <span
  m="3165210">had</span> <span m="3165380">to</span> <span m="3165450">win
  your</span> <span m="3165940">division</span> <span m="3167210">to</span>
  <span m="3167330">make</span> <span m="3167520">the</span> <span
  m="3167600">playoffs.</span> <span m="3169270">So</span> <span
  m="3169400">you</span> <span m="3169490">had</span> <span
  m="3169640">to</span> <span m="3170170">be</span> <span m="3170260">the</span>
  <span m="3170330">best.</span> <span m="3171520">Now</span> <span
  m="3171810">if</span> <span m="3171970">you</span> <span
  m="3172050">ended</span> <span m="3172250">up</span> <span
  m="3172350">being</span> <span m="3172590">tied,</span> <span
  m="3174390">you</span> <span m="3174540">ended</span> <span
  m="3174820">up</span> <span m="3175810">having</span> <span
  m="3176080">to</span> <span m="3176140">play</span> <span
  m="3176410">an</span> <span m="3176630">elimination</span> <span
  m="3177160">game.</span> <span m="3178440">But</span> <span
  m="3179570">the</span> <span m="3179680">whole</span> <span
  m="3180400">purpose</span> <span m="3180720">of</span> <span
  m="3180840">this</span> <span m="3181200">analysis</span> <span
  m="3182290">is</span> <span m="3184650">deciding</span> <span
  m="3185570">whether</span> <span m="3185780">you</span> <span
  m="3185870">still</span> <span m="3186130">have</span> <span
  m="3186230">a</span> <span m="3186290">chance</span> <span
  m="3187360">to</span> <span m="3187480">make</span> <span
  m="3187630">the</span> <span m="3187720">playoffs</span> <span
  m="3188080">or</span> <span m="3188160">not.</span></p><p><span
  m="3189420">So</span> <span m="3189560">the</span> <span
  m="3189670">goal</span> <span m="3189900">here</span> <span
  m="3190200">is</span> <span m="3190830">you</span> <span
  m="3190920">want</span> <span m="3191050">an</span> <span
  m="3191130">algorithm</span> <span m="3192480">that</span> <span
  m="3192950">is</span> <span m="3193140">going</span> <span
  m="3193280">to</span> <span m="3193380">look</span> <span
  m="3193650">at</span> <span m="3194120">the</span> <span
  m="3194230">standings</span> <span m="3195480">and</span> <span
  m="3195660">decide</span> <span m="3196610">if</span> <span
  m="3196720">your</span> <span m="3196860">team</span> <span
  m="3197070">is</span> <span m="3197160">alive</span> <span
  m="3197550">or</span> <span m="3197630">not.</span> <span
  m="3199700">Is</span> <span m="3199900">there</span> <span
  m="3200050">a</span> <span m="3200100">chance</span> <span
  m="3200510">of</span> <span m="3201690">God</span> <span m="3201930">is</span>
  <span m="3202060">great,</span> <span m="3202830">whatever,</span> <span
  m="3204570">everything</span> <span m="3204900">goes</span> <span
  m="3205100">your</span> <span m="3205260">way,</span> <span
  m="3205920">angels</span> <span m="3206280">in</span> <span
  m="3206360">the</span> <span m="3206450">outfield,</span> <span
  m="3206970">right?</span> <span m="3208100">Are</span> <span
  m="3208140">you</span> <span m="3208250">going</span> <span
  m="3208350">to</span> <span m="3208390">make</span> <span
  m="3208550">the</span> <span m="3208620">playoffs?</span> <span
  m="3210410">And</span> <span m="3210910">so</span> <span
  m="3211050">you</span> <span m="3211170">can</span> <span
  m="3211260">be</span> <span m="3211340">very</span> <span
  m="3211620">optimistic.</span></p><p><span m="3213610">And</span> <span
  m="3213920">you</span> <span m="3214010">might</span> <span
  m="3214210">think</span> <span m="3214410">that</span> <span
  m="3214540">this</span> <span m="3214690">is</span> <span m="3214840">a</span>
  <span m="3214930">straightforward,</span> <span m="3216160">I'm</span> <span
  m="3216320">going</span> <span m="3216420">to</span> <span
  m="3216470">add</span> <span m="3216650">up</span> <span m="3216740">a</span>
  <span m="3216800">couple</span> <span m="3217050">numbers</span> <span
  m="3217480">and</span> <span m="3217640">figure this</span> <span
  m="3217990">out.</span> <span m="3218970">It</span> <span
  m="3219140">turns</span> <span m="3219420">out</span> <span
  m="3219680">it's</span> <span m="3219740">not</span> <span
  m="3220050">quite</span> <span m="3220490">that</span> <span
  m="3220680">simple</span> <span m="3221390">though</span> <span
  m="3221560">sportswriters</span> <span m="3222200">would</span> <span
  m="3222340">love</span> <span m="3222570">to</span> <span
  m="3223960">think</span> <span m="3224140">that.</span> <span
  m="3224710">That</span> <span m="3224840">it's</span> <span
  m="3225020">as</span> <span m="3225210">simple</span> <span
  m="3225510">as</span> <span m="3225600">adding</span> <span
  m="3225820">up</span> <span m="3225920">a</span> <span
  m="3225980">bunch</span> <span m="3226190">of</span> <span
  m="3226240">numbers.</span> <span m="3227280">And</span> <span
  m="3227650">obviously,</span> <span m="3228080">there's</span> <span
  m="3228470">network</span> <span m="3228890">flow</span> <span
  m="3229690">lurking</span> <span m="3230160">in</span> <span
  m="3230270">here</span> <span m="3230510">somewhere.</span> <span
  m="3232840">Otherwise,</span> <span m="3233170">I</span> <span
  m="3233200">wouldn't</span> <span m="3233360">be</span> <span
  m="3233440">talking</span> <span m="3233660">about</span> <span
  m="3233840">it</span> <span m="3233930">here.</span></p><p><span
  m="3235250">So</span> <span m="3237050">this</span> <span
  m="3237220">is</span> <span m="3237320">not</span> <span
  m="3237690">quite</span> <span m="3238920">historical</span> <span
  m="3240640">in</span> <span m="3240820">terms</span> <span
  m="3241120">of</span> <span m="3241270">the</span> <span
  m="3241380">standings.</span> <span m="3242470">I</span> <span
  m="3242620">tweaked</span> <span m="3242940">the</span> <span
  m="3243010">numbers</span> <span m="3243330">a</span> <span
  m="3243410">little</span> <span m="3243580">bit</span> <span
  m="3243850">in</span> <span m="3243980">order</span> <span
  m="3244080">to</span> <span m="3244150">make</span> <span
  m="3244320">this</span> <span m="3244440">example</span> <span m="3244940">a
  little</span> <span m="3245010">more</span> <span
  m="3245250">interesting.</span> <span m="3246340">But</span> <span
  m="3247170">roughly</span> <span m="3247630">speaking,</span> <span
  m="3248290">August</span> <span m="3248660">30th,</span> <span
  m="3249040">1996,</span> <span m="3250710">this</span> <span
  m="3250950">was</span> <span m="3251140">the</span> <span
  m="3251230">standings</span> <span m="3251630">corresponding</span> <span
  m="3252460">to</span> <span m="3252520">the</span> <span
  m="3252630">American</span> <span m="3253000">League</span> <span
  m="3253310">East.</span> <span m="3254490">And</span> <span m="3254680">now
  this</span> <span m="3254830">is</span> <span m="3254930">1996</span> <span
  m="3255430">so</span> <span m="3255720">the</span> <span
  m="3256390">teams</span> <span m="3256890">are</span> <span m="3257020">a
  little bit</span> <span m="3257250">different</span> <span
  m="3258500">from</span> <span m="3259930">what</span> <span
  m="3260130">you</span> <span m="3260250">have.</span> <span
  m="3261060">So</span> <span m="3261490">New York,</span> <span
  m="3262060">unfortunately,</span> <span m="3262590">was</span> <span
  m="3262750">leading</span> <span m="3262970">the</span> <span
  m="3263060">division</span> <span m="3264030">even</span> <span
  m="3264260">back</span> <span m="3264500">then.</span> <span
  m="3265550">Still</span> <span m="3265830">had</span> <span
  m="3265990">Baltimore.</span> <span m="3267910">Then</span> <span
  m="3268010">there was</span> <span m="3268190">Boston.</span> <span
  m="3270980">And</span> <span m="3271080">then</span> <span
  m="3271200">was</span> <span m="3271400">Toronto.</span> <span
  m="3273440">And</span> <span m="3273540">then</span> <span
  m="3273670">this</span> <span m="3273810">is</span> <span
  m="3273920">back</span> <span m="3274100">in</span> <span
  m="3274180">1996,</span> <span m="3274960">and</span> <span
  m="3275200">Detroit</span> <span m="3276920">was</span> <span
  m="3277100">part</span> <span m="3277310">of</span> <span
  m="3277360">the</span> <span m="3277600">[INAUDIBLE]</span> <span
  m="3277930">back then.</span> <span m="3278215">This</span> <span
  m="3278500">was</span> <span m="3278700">before</span> <span
  m="3279590">realignment.</span></p><p><span m="3281180">So</span> <span
  m="3281300">I</span> <span m="3281340">just</span> <span
  m="3281580">called</span> <span m="3281840">these</span> <span
  m="3282070">one,</span> <span m="3283270">two,</span> <span
  m="3283860">three,</span> <span m="3284960">four,</span> <span
  m="3285670">and</span> <span m="3285870">five.</span> <span
  m="3286720">Those</span> <span m="3286880">are</span> <span
  m="3286910">the</span> <span m="3287010">positions.</span> <span
  m="3288050">All right,</span> <span m="3288170">so</span> <span
  m="3288240">Boston</span> <span m="3288560">was</span> <span
  m="3288680">in</span> <span m="3288790">third</span> <span
  m="3289010">place.</span> <span m="3291270">And</span> <span
  m="3291470">so,</span> <span m="3291910">I'm going to</span> <span
  m="3292000">say</span> <span m="3292140">these</span> <span
  m="3292400">are</span> <span m="3292480">w i,</span> <span
  m="3293070">which</span> <span m="3293270">are</span> <span
  m="3293370">the</span> <span m="3293450">wins,</span> <span
  m="3295060">so</span> <span m="3295280">far.</span> <span m="3295720">l</span>
  <span m="3295760">i,</span> <span m="3296200">which</span> <span
  m="3296330">are</span> <span m="3296420">the</span> <span
  m="3296550">losses.</span> <span m="3299510">And</span> <span
  m="3300700">r</span> <span m="3301030">i,</span> <span
  m="3302390">which</span> <span m="3302570">are</span> <span
  m="3303120">remaining</span> <span m="3303520">games</span> <span
  m="3303920">to</span> <span m="3304040">play.</span> <span
  m="3307710">And</span> <span m="3309130">This</span> <span
  m="3309340">is</span> <span m="3309450">usually</span> <span
  m="3309710">what</span> <span m="3309850">you</span> <span
  m="3309940">see.</span> <span m="3310390">I</span> <span
  m="3310480">mean</span> <span m="3310570">this</span> <span
  m="3310710">is</span> <span m="3310860">the</span> <span
  m="3311890">simple</span> <span m="3312260">version</span> <span
  m="3314180">of</span> <span m="3314340">the</span> <span
  m="3314430">standings</span> <span m="3319010">and</span> <span
  m="3319150">I'm</span> <span m="3319220">just</span> <span
  m="3319360">going</span> <span m="3319480">to</span> <span
  m="3319520">give</span> <span m="3319700">you</span> <span
  m="3323060">most</span> <span m="3323290">of</span> <span
  m="3323350">these,</span> <span m="3323620">I</span> <span
  m="3323670">should</span> <span m="3323840">say.</span> <span m="3325090">And
  I'm not</span> <span m="3325410">going</span> <span m="3325490">to</span>
  <span m="3325540">write</span> <span m="3325720">down</span> <span
  m="3325940">what</span> <span m="3327300">Detroit</span> <span
  m="3327800">is,</span> <span m="3328580">simply</span> <span
  m="3328810">because</span> <span m="3329030">I'm</span> <span
  m="3329100">going</span> <span m="3329190">to</span> <span
  m="3329240">vary</span> <span m="3329530">that</span> <span
  m="3329680">number.</span> <span m="3330260">Because</span> <span
  m="3330390">it</span> <span m="3330460">gets</span> <span
  m="3330630">interesting</span> <span m="3331010">as</span> <span
  m="3331150">that</span> <span m="3331230">number</span> <span
  m="3331480">varies.</span></p><p><span m="3332690">And</span> <span
  m="3332970">each</span> <span m="3333190">of</span> <span
  m="3333260">these</span> <span m="3333460">teams</span> <span
  m="3333760">had</span> <span m="3333950">28</span> <span
  m="3334330">games</span> <span m="3334600">to</span> <span
  m="3334700">play.</span> <span m="3339380">OK</span> <span
  m="3340240">so</span> <span m="3340370">that's</span> <span
  m="3340540">usually</span> <span m="3340790">what</span> <span
  m="3340920">you</span> <span m="3341020">see</span> <span
  m="3341250">when</span> <span m="3341350">you</span> <span
  m="3341430">see</span> <span m="3341580">a</span> <span
  m="3341640">snapshot.</span> <span m="3342970">OK</span> <span
  m="3346310">now</span> <span m="3348030">I'm</span> <span
  m="3348170">going</span> <span m="3348310">to</span> <span
  m="3348380">also</span> <span m="3348870">add</span> <span
  m="3351600">rij,</span> <span m="3354150">which</span> <span
  m="3354430">are</span> <span m="3354520">the</span> <span
  m="3354630">games</span> <span m="3357550">that</span> <span
  m="3357770">these</span> <span m="3357990">teams</span> <span
  m="3358330">play</span> <span m="3359920">against</span> <span
  m="3360380">each</span> <span m="3360590">other.</span> <span
  m="3361920">And</span> <span m="3362130">the</span> <span
  m="3362210">reason</span> <span m="3362440">is</span> <span
  m="3362530">simple.</span> <span m="3364260">This</span> <span
  m="3364490">linear</span> <span m="3364730">correlation</span> <span
  m="3365990">between</span> <span m="3366290">win</span> <span
  m="3366420">loss</span> <span m="3366790">column,</span> <span
  m="3367350">specifically</span> <span m="3368530">corresponding</span> <span
  m="3369060">to</span> <span m="3369130">games</span> <span
  m="3369520">that</span> <span m="3370110">Boston</span> <span
  m="3370540">plays</span> <span m="3370750">with</span> <span m="3370900">New
  York.</span> <span m="3371710">No</span> <span m="3371900">ties</span> <span
  m="3372780">in</span> <span m="3372890">baseball,</span> <span
  m="3373810">so</span> <span m="3374370">Boston</span> <span m="3374680">wins,
  New York</span> <span m="3375230">loses</span> <span m="3375990">and</span>
  <span m="3376130">vice</span> <span m="3376310">versa.</span></p><p><span
  m="3377500">So</span> <span m="3377640">I</span> <span m="3377790">want</span>
  <span m="3378260">those</span> <span m="3378610">numbers</span> <span
  m="3378950">as</span> <span m="3379080">well</span> <span
  m="3379840">and</span> <span m="3380200">these</span> <span
  m="3380490">are</span> <span m="3380620">things</span> <span
  m="3381020">that</span> <span m="3382510">you</span> <span
  m="3382630">typically</span> <span m="3382960">don't</span> <span
  m="3383170">see</span> <span m="3384100">but</span> <span
  m="3384270">they're</span> <span m="3384380">going</span> <span
  m="3384490">to</span> <span m="3384530">be</span> <span
  m="3384620">important,</span> <span m="3385620">because</span> <span
  m="3385870">they</span> <span m="3385970">do</span> <span
  m="3386090">determine</span> <span m="3388180">whether</span> <span
  m="3388360">your</span> <span m="3388560">team</span> <span
  m="3388820">is</span> <span m="3388900">alive</span> <span
  m="3389540">or</span> <span m="3389710">eliminated.</span> <span
  m="3391620">So</span> <span m="3392120">5</span> <span m="3399410">The</span>
  <span m="3399530">reason</span> <span m="3399760">I</span> <span
  m="3399840">have</span> <span m="3400000">dashes</span> <span
  m="3400420">here</span> <span m="3400670">is</span> <span
  m="3400750">because</span> <span m="3400950">the</span> <span
  m="3401030">team</span> <span m="3401240">doesn't</span> <span
  m="3401510">play</span> <span m="3401680">itself</span> <span
  m="3403860">in</span> <span m="3404070">the</span> <span
  m="3404650">diagonal.</span></p><p><span m="3409870">AUDIENCE: Is that the
  number</span> <span m="3410350">of games?</span></p><p><span
  m="3411310">PROFESSOR: Yes</span> <span m="3411740">that</span> <span
  m="3411890">is</span> <span m="3411990">absolutely</span> <span
  m="3412400">the</span> <span m="3412490">number</span> <span
  m="3412680">of</span> <span m="3412740">games</span> <span m="3413470">that
  they're</span> <span m="3413690">going</span> <span m="3413790">to</span>
  <span m="3413880">play</span> <span m="3414070">against</span> <span
  m="3414350">each</span> <span m="3414490">other.</span> <span
  m="3416070">All</span> <span m="3416220">right</span> <span
  m="3418670">so</span> <span m="3419370">I've</span> <span
  m="3419440">got</span> <span m="3419750">small</span> <span
  m="3419940">number.</span> <span m="3420460">I mean</span> <span
  m="3420560">5</span> <span m="3420780">plus</span> <span m="3420910">7,
  12.</span> <span m="3423120">Plus</span> <span m="3423340">4.</span> <span
  m="3425020">What is</span> <span m="3425150">that?</span> <span
  m="3425350">16.</span> <span m="3426130">16</span> <span m="3426520">plus
  3</span> <span m="3426830">is</span> <span m="3426930">19.</span> <span
  m="3428050">There's</span> <span m="3428480">28</span> <span
  m="3428800">games</span> <span m="3429050">left</span> <span
  m="3429230">to</span> <span m="3429310">play,</span> <span
  m="3430060">there's</span> <span m="3430730">obviously</span> <span
  m="3431050">games</span> <span m="3431410">that</span> <span
  m="3431540">are</span> <span m="3431570">being</span> <span
  m="3431740">played</span> <span m="3431980">against</span> <span
  m="3432190">other</span> <span m="3432370">teams</span> <span
  m="3432790">outside</span> <span m="3433070">the</span> <span
  m="3433140">division.</span> <span m="3434160">And</span> <span
  m="3434270">so</span> <span m="3434350">this</span> <span
  m="3434490">is</span> <span m="3434610">just</span> <span
  m="3434800">rij,</span> <span m="3436070">OK?</span></p><p><span
  m="3437110">So</span> <span m="3438290">that's</span> <span
  m="3438570">the</span> <span m="3438680">story</span> <span
  m="3439010">here.</span> <span m="3440020">And</span> <span
  m="3442400">I</span> <span m="3442510">should</span> <span
  m="3442690">say</span> <span m="3442900">that</span> <span
  m="3444730">when</span> <span m="3445330">I</span> <span
  m="3446880">talk</span> <span m="3447110">about</span> <span
  m="3447380">this,</span> <span m="3448080">what</span> <span
  m="3449640">are</span> <span m="3449670">these</span> <span
  m="3449930">corresponding</span> <span m="3450430">to?</span> <span
  m="3450800">Well</span> <span m="3451180">this</span> <span
  m="3451500">corresponds</span> <span m="3451970">to</span> <span
  m="3452140">NY.</span> <span m="3454430">This</span> <span
  m="3454650">column</span> <span m="3455210">corresponds</span> <span
  m="3455660">to</span> <span m="3455750">Baltimore</span> <span
  m="3457220">this</span> <span m="3457400">corresponds</span> <span
  m="3457880">to</span> <span m="3457960">Boston,</span> <span
  m="3458500">same</span> <span m="3458740">order,</span> <span
  m="3460180">this</span> <span m="3460340">corresponds</span> <span
  m="3460790">to</span> <span m="3460910">Toronto.</span> <span
  m="3462330">This</span> <span m="3462510">column</span> <span
  m="3462720">corresponds</span> <span m="3462860">to</span> <span
  m="3463310">Detroit.</span></p><p><span m="3465830">So</span> <span
  m="3466460">otherwise</span> <span m="3466850">it's</span> <span
  m="3467320">under</span> <span m="3467580">specified.</span> <span
  m="3470010">Any</span> <span m="3470190">questions</span> <span
  m="3470490">about</span> <span m="3471370">the</span> <span
  m="3471500">table</span> <span m="3471760">here?</span> <span
  m="3479640">If</span> <span m="3479740">you</span> <span
  m="3479840">want</span> <span m="3479870">to</span> <span
  m="3479930">know,</span> <span m="3480260">the</span> <span m="3480380">Bo
  Sox</span> <span m="3480840">did</span> <span m="3480990">not</span> <span
  m="3481180">make</span> <span m="3481360">the</span> <span
  m="3481430">playoffs</span> <span m="3481830">that</span> <span
  m="3482313">year.</span></p><p><span m="3487150">So</span> <span
  m="3487990">all</span> <span m="3488260">that</span> <span
  m="3488460">most</span> <span m="3488920">sportswriters</span> <span
  m="3490120">do,</span> <span m="3490950">most</span> <span
  m="3491170">people</span> <span m="3491450">do,</span> <span
  m="3492550">is</span> <span m="3493940">say</span> <span
  m="3495520">Team</span> <span m="3496000">i</span> <span m="3497800">is</span>
  <span m="3498290">eliminated.</span> <span m="3502220">If</span> <span
  m="3503320">wi</span> <span m="3504050">plus</span> <span
  m="3504370">ri</span> <span m="3509880">is</span> <span
  m="3510060">strictly</span> <span m="3510520">less</span> <span
  m="3510780">than</span> <span m="3510930">wj</span> <span
  m="3515960">for</span> <span m="3516170">sum</span> <span
  m="3516370">j.</span> <span m="3517711">So you're</span> <span
  m="3518160">just</span> <span m="3518340">going</span> <span
  m="3518450">to</span> <span m="3518510">say,</span> <span
  m="3518730">OK</span> <span m="3518950">you know</span> <span
  m="3519060">what?</span> <span m="3519220">If</span> <span
  m="3519330">I've</span> <span m="3519380">won</span> <span
  m="3519680">all</span> <span m="3519800">my</span> <span
  m="3519940">games,</span> <span m="3520810">I'm</span> <span
  m="3520940">still</span> <span m="3521240">not</span> <span
  m="3521540">going</span> <span m="3521650">to</span> <span
  m="3521700">make</span> <span m="3521960">it</span> <span
  m="3522620">to</span> <span m="3522770">this</span> <span
  m="3523010">team</span> <span m="3523260">that's</span> <span
  m="3523440">already won</span> <span m="3523710">75</span> <span
  m="3524810">games,</span> <span m="3525930">right?</span></p><p><span
  m="3527030">And</span> <span m="3527250">so</span> <span
  m="3527950">clearly</span> <span m="3528240">I'm</span> <span
  m="3528340">done.</span> <span m="3530690">That</span> <span
  m="3530830">team</span> <span m="3530980">has</span> <span
  m="3531060">already</span> <span m="3531270">won</span> <span
  m="3531430">more</span> <span m="3531610">games</span> <span
  m="3531860">than</span> <span m="3531970">I</span> <span
  m="3532000">could</span> <span m="3532140">possibly</span> <span
  m="3532500">win.</span> <span m="3533310">So</span> <span
  m="3533450">that's</span> <span m="3533610">an</span> <span
  m="3533690">easy</span> <span m="3533920">one.</span> <span
  m="3536970">And</span> <span m="3537140">so this</span> <span
  m="3537290">is</span> <span m="3537410">strictly</span> <span
  m="3537760">less,</span> <span m="3538880">because</span> <span
  m="3539050">we're</span> <span m="3539160">just</span> <span
  m="3539330">talking</span> <span m="3539520">about</span> <span
  m="3539700">elimination,</span> <span m="3541570">total</span> <span
  m="3541890">elimination.</span> <span m="3543650">You</span> <span
  m="3543730">get</span> <span m="3543860">your</span> <span
  m="3543950">summer</span> <span m="3544220">vacation,</span> <span
  m="3545430">or</span> <span m="3545550">your</span> <span
  m="3546070">fall</span> <span m="3546350">vacation.</span></p><p><span
  m="3548070">So</span> <span m="3548880">let's</span> <span
  m="3549090">just</span> <span m="3549260">say</span> <span
  m="3549460">that</span> <span m="3549890">you</span> <span
  m="3549970">had</span> <span m="3550680">Detroit,</span> <span
  m="3553240">and</span> <span m="3553480">you're</span> <span
  m="3553760">talking about</span> <span m="3553910">w</span> <span
  m="3554210">5</span> <span m="3554670">years.</span> <span
  m="3554980">You're</span> <span m="3555040">talking about</span> <span
  m="3555200">this</span> <span m="3555500">number</span> <span
  m="3555790">here,</span> <span m="3557420">is</span> <span
  m="3557670">46.</span> <span m="3560380">l5</span> <span m="3562284">is</span>
  <span m="3563680">88.</span> <span m="3565020">So</span> <span
  m="3565150">they're</span> <span m="3565250">having a</span> <span
  m="3565480">bad</span> <span m="3565710">season</span> <span
  m="3566040">here.</span> <span m="3568180">And</span> <span
  m="3569400">you're</span> <span m="3569530">going</span> <span
  m="3569830">to</span> <span m="3569930">say</span> <span m="3570310">46</span>
  <span m="3571840">plus</span> <span m="3572130">28</span> <span
  m="3574240">equals</span> <span m="3574700">74,</span> <span
  m="3576220">which</span> <span m="3576410">is</span> <span
  m="3576550">less</span> <span m="3576780">than</span> <span
  m="3576940">75.</span> <span m="3578340">Therefore</span> <span
  m="3578750">in</span> <span m="3578900">this</span> <span
  m="3579120">scenario,</span> <span m="3580130">Detroit</span> <span
  m="3580510">is</span> <span m="3580610">eliminated.</span> <span
  m="3582800">All</span> <span m="3582910">makes</span> <span
  m="3583050">sense?</span></p><p><span m="3586240">So</span> <span
  m="3586340">this</span> <span m="3586520">is</span> <span
  m="3586650">sufficient,</span> <span m="3591520">but</span> <span
  m="3591780">I</span> <span m="3591830">claim</span> <span
  m="3592270">it's</span> <span m="3592400">not</span> <span
  m="3592740">necessary.</span> <span m="3593610">So</span> <span
  m="3593830">you</span> <span m="3593990">might</span> <span
  m="3594230">actually</span> <span m="3594570">have</span> <span
  m="3594810">false</span> <span m="3595270">hope</span> <span
  m="3596280">if</span> <span m="3598380">you</span> <span
  m="3598540">are</span> <span m="3598840">a</span> <span
  m="3599600"><i>Mirror</i></span> <span m="3600000">sportswriter,</span> <span
  m="3601630">who</span> <span m="3602130">only</span> <span
  m="3602480">knows</span> <span m="3602890">to</span> <span
  m="3603020">add</span> <span m="3603220">up</span> <span
  m="3603360">these</span> <span m="3603560">numbers</span> <span
  m="3604160">and</span> <span m="3604350">compare it</span> <span
  m="3604870">with</span> <span m="3605220">others.</span> <span
  m="3606240">But</span> <span m="3606410">if</span> <span
  m="3606570">you</span> <span m="3606730">were</span> <span
  m="3606890">a</span> <span m="3606950">6046</span> <span
  m="3607580">student,</span> <span m="3608750">and</span> <span
  m="3609230">you</span> <span m="3609370">went</span> <span
  m="3609630">through</span> <span m="3609830">these</span> <span
  m="3610480">wonderful</span> <span m="3610880">lectures</span> <span
  m="3611270">on</span> <span m="3611380">network</span> <span
  m="3611660">flow,</span> <span m="3612590">you</span> <span
  m="3612690">know</span> <span m="3612830">much</span> <span
  m="3613030">more.</span></p><p><span m="3615080">And we're</span> <span
  m="3615260">not</span> <span m="3615530">quite</span> <span
  m="3615900">there</span> <span m="3616100">yet</span> <span
  m="3616870">in</span> <span m="3617050">terms</span> <span
  m="3617390">of</span> <span m="3620580">requiring</span> <span
  m="3621530">the</span> <span m="3621720">power</span> <span
  m="3622150">of</span> <span m="3622250">network</span> <span
  m="3622620">flow.</span> <span m="3623420">But</span> <span
  m="3623670">I</span> <span m="3623820">ask,</span> <span
  m="3627020">what</span> <span m="3627360">if</span> <span
  m="3629750">w5</span> <span m="3631790">were</span> <span
  m="3631940">47?</span> <span m="3637080">Can</span> <span
  m="3637240">you</span> <span m="3637330">make</span> <span
  m="3637500">an</span> <span m="3637600">argument</span> <span
  m="3639960">which</span> <span m="3640180">clearly</span> <span
  m="3640540">doesn't</span> <span m="3640780">work</span> <span
  m="3641030">here,</span> <span m="3642120">with</span> <span
  m="3642330">this</span> <span m="3642540">naive</span> <span
  m="3642990">argument,</span> <span m="3644120">you have</span> <span
  m="3644240">75</span> <span m="3644830">equals</span> <span
  m="3645160">75.</span> <span m="3646260">So</span> <span
  m="3646290">you</span> <span m="3646360">still</span> <span
  m="3646640">have</span> <span m="3646770">hope.</span> <span
  m="3647595">But</span> <span m="3647970">can</span> <span
  m="3648120">you</span> <span m="3648270">make</span> <span
  m="3648420">an</span> <span m="3648510">argument</span> <span
  m="3649270">that</span> <span m="3649430">if</span> <span
  m="3649600">w5</span> <span m="3650420">were</span> <span
  m="3650500">47,</span> <span m="3651900">given</span> <span
  m="3652170">the</span> <span m="3652260">whole</span> <span
  m="3652530">table--</span> <span m="3653480">that's the hint,</span> <span
  m="3654670">the</span> <span m="3654770">whole</span> <span
  m="3655010">table,</span> <span m="3655750">that</span> <span
  m="3655880">Detroit</span> <span m="3656360">was</span> <span
  m="3656580">actually</span> <span m="3656980">eliminated.</span></p><p><span
  m="3659170">Worth</span> <span m="3659320">the</span> <span
  m="3659470">Frisbee</span> <span m="3659830">for</span> <span
  m="3659940">sure,</span> <span m="3661050">right?</span> <span
  m="3661650">Over</span> <span m="3661800">there.</span> <span
  m="3662130">I</span> <span m="3662460">saw</span> <span m="3662510">you</span>
  <span m="3662620">first.</span></p><p><span m="3663436">AUDIENCE:</span> <span
  m="3663932">It</span> <span m="3664428">looks</span> <span
  m="3664924">like</span> <span m="3665420">the only way that</span> <span
  m="3665916">Detroit</span> <span m="3666412">can</span> <span
  m="3666908">get</span> <span m="3667404">more wins</span> <span
  m="3667900">than</span> <span m="3668396">New York</span> <span
  m="3668892">is</span> <span m="3669400">if they win</span> <span
  m="3669890">all their games</span> <span m="3670322">and New York</span> <span
  m="3670754">loses all</span> <span m="3671186">their games?</span></p><p><span
  m="3672050">PROFESSOR: Yes.</span></p><p><span m="3672740">AUDIENCE: and if
  New York</span> <span m="3673233">loses all their games,</span> <span
  m="3673726">they're going to lose</span> <span m="3674219">7 games to</span>
  <span m="3674712">Boston</span> <span m="3675698">And Boston</span> <span
  m="3676684">will</span> <span m="3677177">have</span> <span
  m="3678163">76</span> <span m="3678656">wins.</span></p><p><span
  m="3679650">PROFESSOR: Exactly</span> <span m="3680200">right.</span> <span
  m="3681470">So</span> <span m="3681530">that's</span> <span
  m="3681730">a</span> <span m="3681770">great</span> <span
  m="3681990">argument.</span> <span m="3682315">All right,</span> <span
  m="3682640">could</span> <span m="3682870">you</span> <span
  m="3683440">stand</span> <span m="3683700">up?</span> <span
  m="3685970">All</span> <span m="3686020">right.</span> <span
  m="3689910">You</span> <span m="3690060">catch</span> <span
  m="3690480">well</span> <span m="3690600">too.</span> <span
  m="3692980">So</span> <span m="3693170">that's</span> <span
  m="3693890">basically</span> <span m="3694340">the</span> <span
  m="3694850">essence</span> <span m="3695340">of</span> <span
  m="3695520">the</span> <span m="3696140">issue.</span> <span
  m="3697490">There's</span> <span m="3697670">stuff</span> <span
  m="3697940">going</span> <span m="3698220">on</span> <span
  m="3699310">which</span> <span m="3699650">corresponds</span> <span
  m="3700210">to</span> <span m="3700650">teams</span> <span
  m="3701130">playing</span> <span m="3701520">each</span> <span
  m="3701840">other</span> <span m="3702960">that</span> <span
  m="3703370">can</span> <span m="3704000">affect</span> <span
  m="3704450">the</span> <span m="3704600">outcome.</span> <span
  m="3705610">OK</span> <span m="3706230">so</span> <span m="3706370">let</span>
  <span m="3706460">me</span> <span m="3706560">write</span> <span
  m="3706740">out</span> <span m="3706910">what</span> <span
  m="3707460">the</span> <span m="3707630">gentleman</span> <span
  m="3707960">just</span> <span m="3708130">said.</span></p><p><span
  m="3712320">Still</span> <span m="3713170">eliminated,</span> <span
  m="3715010">boohoo,</span> <span m="3718860">because</span> <span
  m="3722670">w5</span> <span m="3723620">plus</span> <span
  m="3723830">r5</span> <span m="3725220">equals</span> <span
  m="3725610">75</span> <span m="3726370">now.</span> <span
  m="3726940">47</span> <span m="3727305">plus</span> <span
  m="3727760">28</span> <span m="3728280">is</span> <span m="3728460">75.</span>
  <span m="3730710">But</span> <span m="3732990">either</span> <span
  m="3735110">New</span> <span m="3735300">York</span> <span
  m="3737500">or</span> <span m="3738620">Baltimore--</span> <span
  m="3739300">I</span> <span m="3739420">mean</span> <span
  m="3739510">there's</span> <span m="3739650">many</span> <span
  m="3739860">ways</span> <span m="3742410">you</span> <span
  m="3742590">could</span> <span m="3742700">show</span> <span
  m="3742870">this.</span> <span m="3743650">But</span> <span
  m="3743870">we'll</span> <span m="3743990">just</span> <span
  m="3744220">take--</span> <span m="3745310">this</span> <span
  m="3745530">is</span> <span m="3745610">not</span> <span
  m="3745760">exactly</span> <span m="3746080">what</span> <span
  m="3746260">the</span> <span m="3746390">gentleman</span> <span
  m="3746710">said.</span> <span m="3747390">But</span> <span
  m="3748420">this</span> <span m="3748580">is</span> <span
  m="3748630">what</span> <span m="3748780">I</span> <span
  m="3748840">had</span> <span m="3749010">here,</span> <span
  m="3749230">so</span> <span m="3749340">let</span> <span m="3749410">me</span>
  <span m="3749470">just</span> <span m="3749640">write</span> <span
  m="3749800">that</span> <span m="3749920">out.</span> <span
  m="3751130">Either</span> <span m="3751370">New York or</span> <span
  m="3751680">Baltimore</span> <span m="3752380">will</span> <span
  m="3752600">win</span> <span m="3752720">76</span> <span
  m="3753220">games.</span> <span m="3756700">Since</span> <span
  m="3757010">they</span> <span m="3757150">play</span> <span
  m="3757390">each</span> <span m="3757560">other</span> <span
  m="3758010">5</span> <span m="3758270">times.</span> <span
  m="3766980">OK?</span></p><p><span m="3771840">So</span> <span
  m="3772170">now</span> <span m="3772370">I'm</span> <span
  m="3772490">going</span> <span m="3772630">to</span> <span
  m="3772710">do</span> <span m="3773000">some</span> <span
  m="3774090">more</span> <span m="3774470">sophisticated</span> <span
  m="3775980">analysis</span> <span m="3778630">and</span> <span
  m="3780470">I</span> <span m="3780640">got</span> <span
  m="3780930">what</span> <span m="3781290">I</span> <span
  m="3781340">wanted.</span> <span m="3782430">But</span> <span
  m="3782700">let's</span> <span m="3783040">say</span> <span
  m="3784680">that</span> <span m="3785170">w5</span> <span
  m="3787280">was</span> <span m="3788050">48.</span> <span
  m="3790780">So</span> <span m="3790930">this</span> <span
  m="3791050">was</span> <span m="3791200">76</span> <span m="3793080">and
  it</span> <span m="3793300">kind</span> <span m="3793490">of</span> <span
  m="3793550">worked</span> <span m="3793860">out</span> <span
  m="3794330">for</span> <span m="3794470">both</span> <span
  m="3794730">of</span> <span m="3794810">the</span> <span
  m="3794870">examples.</span> <span m="3796060">The</span> <span
  m="3796160">one</span> <span m="3796320">with</span> <span
  m="3796460">Boston</span> <span m="3797570">and</span> <span
  m="3797720">the</span> <span m="3797810">7</span> <span
  m="3798110">games,</span> <span m="3800420">that</span> <span
  m="3800540">I</span> <span m="3800600">got</span> <span m="3800820">as</span>
  <span m="3800920">an</span> <span m="3801030">answer.</span> <span
  m="3802000">And</span> <span m="3802160">this</span> <span
  m="3802290">one</span> <span m="3802490">that</span> <span
  m="3802610">I</span> <span m="3802670">just</span> <span
  m="3802890">wrote</span> <span m="3803100">down.</span> <span
  m="3805250">But</span> <span m="3807450">what</span> <span
  m="3807710">if</span> <span m="3811250">w5</span> <span
  m="3812520">equals</span> <span m="3813010">48?</span> <span
  m="3817910">Is</span> <span m="3818130">Detroit</span> <span
  m="3818520">eliminated?</span></p><p><span m="3821340">How</span> <span
  m="3821500">many</span> <span m="3821640">people</span> <span
  m="3822490">think</span> <span m="3822690">Detroit</span> <span
  m="3823080">is</span> <span m="3823170">eliminated?</span> <span
  m="3824910">All</span> <span m="3824990">right,</span> <span m="3825210">a
  bunch</span> <span m="3825300">of</span> <span m="3825590">you.</span> <span
  m="3829400">You</span> <span m="3829630">want</span> <span
  m="3829720">to</span> <span m="3829760">explain</span> <span
  m="3830080">why?</span></p><p><span m="3831800">AUDIENCE: So</span> <span
  m="3833180">New York,</span> <span m="3833460">Baltimore,</span> <span
  m="3833850">and Boston</span> <span m="3834240">are</span> <span
  m="3834550">guaranteed to</span> <span m="3834860">get</span> <span
  m="3835358">a total of</span> <span m="3835856">at least</span> <span
  m="3836354">14 more wins.</span> <span m="3837690">Because</span> <span
  m="3838125">of</span> <span m="3838560">their</span> <span m="3838995">total
  number</span> <span m="3839430">of wins</span> <span m="3839865">that</span>
  <span m="3840300">they're</span> <span m="3840460">allowed to</span> <span
  m="3840885">have</span> <span m="3841310">without any</span> <span
  m="3841792">of them getting</span> <span m="3842274">to 77</span> <span
  m="3842756">is only</span> <span m="3843238">going to be</span> <span
  m="3843720">13.</span> <span m="3844202">So it will be</span> <span
  m="3844684">1 plus</span> <span m="3845166">5</span> <span
  m="3845648">so</span> <span m="3846130">that's too many.</span> <span
  m="3846612">But they're</span> <span m="3847094">not</span> <span
  m="3847576">actually</span> <span m="3848058">eliminated,</span> <span
  m="3848540">because</span> <span m="3849022">this is from the</span> <span
  m="3849520">Wild Card</span> <span m="3849981">round</span> <span
  m="3850442">anyway.</span></p><p><span m="3853669">PROFESSOR: I</span> <span
  m="3854130">didn't</span> <span m="3854280">like</span> <span
  m="3854440">the</span> <span m="3854530">last</span> <span
  m="3854780">part</span> <span m="3854920">of</span> <span
  m="3855000">your</span> <span m="3855170">answer.</span> <span
  m="3856840">Did,</span> <span m="3857250">but</span> <span
  m="3857600">the</span> <span m="3857930">other</span> <span
  m="3858140">question</span> <span m="3858430">is,</span> <span
  m="3858560">did</span> <span m="3858830">people</span> <span
  m="3859100">understand</span> <span m="3859610">the</span> <span
  m="3859680">first</span> <span m="3859990">part</span> <span
  m="3860170">of</span> <span m="3860240">his</span> <span
  m="3860360">answer?</span> <span m="3862760">That was</span> <span
  m="3862840">complicated.</span> <span m="3863820">I</span> <span
  m="3863890">mean</span> <span m="3864040">it</span> <span
  m="3864260">was</span> <span m="3864680">the</span> <span
  m="3864750">right</span> <span m="3864910">analysis.</span> <span
  m="3865780">Great</span> <span m="3866410">job.</span> <span
  m="3867430">So,</span> <span m="3868710">we</span> <span
  m="3868850">want</span> <span m="3868980">a</span> <span
  m="3869040">systematic</span> <span m="3869750">way</span> <span
  m="3870090">so</span> <span m="3870230">we</span> <span m="3870300">can</span>
  <span m="3870390">run</span> <span m="3870530">an</span> <span
  m="3870600">algorithm</span> <span m="3871320">so</span> <span
  m="3871620">we</span> <span m="3873220">need</span> <span
  m="3873420">to</span> <span m="3873480">bother</span> <span
  m="3873940">with</span> <span m="3874090">this</span> <span
  m="3874230">type</span> <span m="3874430">of</span> <span
  m="3874530">analysis.</span></p><p><span m="3877040">And</span> <span
  m="3877200">you're</span> <span m="3877310">exactly</span> <span
  m="3877710">right.</span> <span m="3879450">It</span> <span
  m="3879510">turns</span> <span m="3879740">out</span> <span
  m="3879970">that</span> <span m="3880420">I</span> <span
  m="3880510">skipped</span> <span m="3880820">this</span> <span
  m="3880990">little</span> <span m="3881200">detail,</span> <span
  m="3882940">because</span> <span m="3883230">it</span> <span
  m="3883290">was</span> <span m="3883400">inconvenient,</span> <span
  m="3885070">which</span> <span m="3885450">is</span> <span
  m="3885640">that</span> <span m="3886220">in</span> <span
  m="3886610">'95,</span> <span m="3887270">a</span> <span
  m="3887330">wild</span> <span m="3887560">card</span> <span
  m="3887800">was</span> <span m="3887930">introduced.</span> <span
  m="3888870">So</span> <span m="3890010">we</span> <span
  m="3890180">could</span> <span m="3890380">think</span> <span
  m="3890530">about</span> <span m="3890720">this</span> <span
  m="3890880">as</span> <span m="3891270">elimination</span> <span
  m="3891930">from</span> <span m="3892100">being</span> <span
  m="3892290">the</span> <span m="3892400">division</span> <span
  m="3892870">winner.</span> <span m="3894550">So</span> <span
  m="3894780">that's</span> <span m="3894990">an</span> <span
  m="3895060">aside.</span> <span m="3896300">Thanks</span> <span
  m="3896470">for</span> <span m="3896540">pointing</span> <span
  m="3896900">out,</span> <span m="3898800">it's</span> <span
  m="3898870">important</span> <span m="3899210">to</span> <span
  m="3899260">know</span> <span m="3899380">sports</span> <span
  m="3899840">history.</span> <span m="3901590">Really</span> <span
  m="3901830">important.</span> <span m="3902320">Almost</span> <span
  m="3902710">as</span> <span m="3902820">important</span> <span
  m="3903200">as</span> <span m="3903320">046.</span></p><p><span
  m="3904810">But</span> <span m="3906900">basically</span> <span
  m="3908140">it</span> <span m="3908290">gets</span> <span
  m="3908480">more</span> <span m="3908770">and</span> <span
  m="3908830">more</span> <span m="3909030">complicated</span> <span
  m="3911060">as</span> <span m="3911440">you</span> <span
  m="3912440">get</span> <span m="3912750">closer</span> <span
  m="3913140">and</span> <span m="3913250">closer</span> <span
  m="3913710">to</span> <span m="3913800">these</span> <span
  m="3914040">edge</span> <span m="3914350">cases.</span> <span
  m="3916230">And</span> <span m="3916460">so</span> <span
  m="3916790">you</span> <span m="3916910">can</span> <span
  m="3917010">do</span> <span m="3917130">an</span> <span
  m="3917200">analysis,</span> <span m="3918210">and</span> <span
  m="3918520">I'll</span> <span m="3918690">actually</span> <span
  m="3919240">describe</span> <span m="3919860">roughly</span> <span
  m="3920250">what</span> <span m="3921290">your</span> <span
  m="3921510">analysis</span> <span m="3921960">was.</span> <span
  m="3922620">What's</span> <span m="3922710">your name?</span></p><p><span
  m="3923340">AUDIENCE: Alexander.</span></p><p><span m="3924020">PROFESSOR:
  Alexander's</span> <span m="3924620">analysis</span> <span
  m="3925060">was.</span> <span m="3926930">But</span> <span
  m="3927070">I</span> <span m="3927160">don't</span> <span
  m="3927480">want</span> <span m="3927560">to</span> <span
  m="3927600">do</span> <span m="3927700">that</span> <span
  m="3927850">yet.</span> <span m="3928310">I'll</span> <span
  m="3928350">do</span> <span m="3928470">that</span> <span m="3928760">at the
  end</span> <span m="3928990">if</span> <span m="3929070">you</span> <span
  m="3929150">have</span> <span m="3929300">time.</span> <span
  m="3930030">I</span> <span m="3930270">want</span> <span m="3930400">to</span>
  <span m="3930440">give</span> <span m="3930600">you</span> <span
  m="3930750">a</span> <span m="3930860">general</span> <span
  m="3931250">purpose</span> <span m="3931570">technique</span> <span
  m="3932190">that</span> <span m="3932460">obviously</span> <span
  m="3932920">is</span> <span m="3933040">going</span> <span
  m="3933160">to</span> <span m="3933210">use</span> <span
  m="3933460">max</span> <span m="3933810">flow</span> <span
  m="3934610">to</span> <span m="3934750">solve</span> <span
  m="3935020">this</span> <span m="3935150">problem.</span> <span
  m="3936140">All</span> <span m="3936210">right?</span> <span
  m="3937030">So</span> <span m="3937490">we're</span> <span m="3937560">going
  to set</span> <span m="3937790">this</span> <span m="3937940">up.</span> <span
  m="3938150">And</span> <span m="3938370">so</span> <span
  m="3938540">that's</span> <span m="3939590">actually</span> <span
  m="3939970">one</span> <span m="3940120">of</span> <span
  m="3940170">the</span> <span m="3940230">nice</span> <span
  m="3940490">things</span> <span m="3940680">about</span> <span
  m="3941610">maximum</span> <span m="3942010">flow.</span> <span
  m="3942430">How</span> <span m="3942680">you</span> <span
  m="3942800">can</span> <span m="3942990">translate.</span> <span
  m="3943380">You</span> <span m="3943770">can</span> <span
  m="3943880">sort</span> <span m="3943980">of</span> <span
  m="3944100">create</span> <span m="3944540">these</span> <span
  m="3944890">networks</span> <span m="3945910">from</span> <span
  m="3946540">tables</span> <span m="3947260">or</span> <span
  m="3947690">what</span> <span m="3948030">have</span> <span
  m="3948240">you,</span> <span m="3948920">and</span> <span
  m="3949250">add</span> <span m="3949800">capacities</span> <span
  m="3950250">to</span> <span m="3950600">edges,</span> <span
  m="3951320">find</span> <span m="3951590">max</span> <span
  m="3951860">flows,</span> <span m="3952550">and</span> <span
  m="3952720">solve</span> <span m="3953040">these</span> <span
  m="3953220">problems.</span></p><p><span m="3954280">So</span> <span
  m="3954360">this</span> <span m="3954520">is</span> <span m="3954600">a</span>
  <span m="3954650">good</span> <span m="3954770">example</span> <span
  m="3955130">of</span> <span m="3955200">that.</span> <span
  m="3957570">So</span> <span m="3957650">let's</span> <span
  m="3957830">go</span> <span m="3958190">ahead</span> <span
  m="3958400">and</span> <span m="3958460">do</span> <span
  m="3958560">that</span> <span m="3959360">I</span> <span m="3959550">am</span>
  <span m="3959680">going</span> <span m="3960060">to</span> <span
  m="3961040">draw</span> <span m="3961630">a</span> <span
  m="3961720">flow</span> <span m="3961980">network</span> <span
  m="3963640">based</span> <span m="3964230">on</span> <span
  m="3964520">this</span> <span m="3964820">table.</span> <span
  m="3966970">It's</span> <span m="3967160">going</span> <span
  m="3967290">to</span> <span m="3967340">have</span> <span m="3967460">a</span>
  <span m="3967520">source</span> <span m="3968610">and</span> <span
  m="3968800">a</span> <span m="3968870">sync</span> <span
  m="3970610">that</span> <span m="3970750">are</span> <span
  m="3970840">basically</span> <span m="3971310">these</span> <span
  m="3971590">dummy</span> <span m="3971880">nodes</span> <span
  m="3973060">that</span> <span m="3973370">are</span> <span
  m="3973460">essentially</span> <span m="3973770">going</span> <span
  m="3973880">to</span> <span m="3973930">source</span> <span
  m="3974750">about</span> <span m="3974960">infinite</span> <span
  m="3975940">flow.</span> <span m="3977060">But</span> <span
  m="3977290">the</span> <span m="3977360">capacities</span> <span
  m="3977880">of</span> <span m="3977970">the</span> <span
  m="3978060">edges</span> <span m="3978400">are</span> <span
  m="3978470">going</span> <span m="3978580">to</span> <span
  m="3978640">come</span> <span m="3978840">from</span> <span
  m="3979010">that</span> <span m="3979190">table.</span> <span m="3979850">And
  the</span> <span m="3980280">edges</span> <span m="3980670">themselves</span>
  <span m="3981820">are</span> <span m="3982330">straightforward</span> <span
  m="3983160">in</span> <span m="3983290">the</span> <span
  m="3983390">sense</span> <span m="3983690">that</span> <span
  m="3984476">the</span> <span m="3984870">graph</span> <span
  m="3985190">is</span> <span m="3985320">going</span> <span
  m="3985420">to</span> <span m="3985720">look</span> <span
  m="3985900">the</span> <span m="3985970">same</span> <span
  m="3988080">based</span> <span m="3988410">on</span> <span
  m="3988500">the</span> <span m="3988550">number of</span> <span
  m="3988820">teams,</span> <span m="3989880">and</span> <span
  m="3990060">the</span> <span m="3990130">particular</span> <span
  m="3990480">team</span> <span m="3990860">that</span> <span
  m="3991030">you're</span> <span m="3991250">analyzing.</span></p><p><span
  m="3992300">So</span> <span m="3992470">this</span> <span
  m="3992710">graph</span> <span m="3993630">is</span> <span
  m="3993830">trying</span> <span m="3994150">to</span> <span
  m="3994250">determine--</span> <span m="3994880">this</span> <span
  m="3995010">is</span> <span m="3995150">a</span> <span m="3995220">flow</span>
  <span m="3995500">network</span> <span m="3997460">to</span> <span
  m="3997870">determine</span> <span m="4005060">if</span> <span
  m="4006000">team 5,</span> <span m="4008420">Detroit,</span> <span
  m="4009870">is</span> <span m="4010180">eliminated.</span> <span
  m="4013800">This is</span> <span m="4013990">just</span> <span
  m="4014220">the</span> <span m="4014290">flow</span> <span
  m="4014480">network.</span> <span m="4016590">I'm</span> <span
  m="4016740">going</span> <span m="4016890">to</span> <span
  m="4016950">have</span> <span m="4017460">a</span> <span
  m="4017580">bunch</span> <span m="4017850">of</span> <span
  m="4017960">edges.</span> <span m="4020490">I'm</span> <span
  m="4020540">going</span> <span m="4020650">to</span> <span
  m="4020690">just</span> <span m="4020930">draw</span> <span
  m="4021090">this</span> <span m="4021260">once</span> <span
  m="4023130">and</span> <span m="4023860">we'll</span> <span
  m="4026220">be</span> <span m="4026330">moving</span> <span
  m="4026650">things</span> <span m="4026870">around</span> <span
  m="4027150">on</span> <span m="4027270">this.</span> <span
  m="4029220">2</span> <span m="4029460">to</span> <span m="4029560">3,</span>
  <span m="4030830">1</span> <span m="4031100">to</span> <span
  m="4031210">4,</span> <span m="4033570">2</span> <span m="4033810">to</span>
  <span m="4033980">4,</span> <span m="4035530">and</span> <span
  m="4035630">lastly</span> <span m="4037750">3</span> <span
  m="4037940">to</span> <span m="4038030">4.</span> <span m="4038680">And</span>
  <span m="4039330">the</span> <span m="4039450">reason</span> <span
  m="4039690">you</span> <span m="4039780">don't</span> <span
  m="4039970">see</span> <span m="4040100">5</span> <span
  m="4040430">here</span> <span m="4041230">is</span> <span
  m="4041370">because</span> <span m="4041660">this</span> <span
  m="4042080">is</span> <span m="4043350">an</span> <span
  m="4043490">analysis</span> <span m="4044160">for team</span> <span
  m="4044650">5.</span></p><p><span m="4053950">So</span> <span m="4054290">the
  other</span> <span m="4054420">4</span> <span m="4054620">teams</span> <span
  m="4055170">show</span> <span m="4055420">up</span> <span
  m="4055580">here.</span> <span m="4056250">They</span> <span
  m="4056370">have</span> <span m="4056520">edges</span> <span
  m="4056840">going</span> <span m="4057060">to</span> <span
  m="4057170">t.</span> <span m="4058700">s is</span> <span
  m="4058840">over</span> <span m="4059030">here,</span> <span
  m="4060640">and</span> <span m="4061360">it's</span> <span
  m="4061620">got</span> <span m="4061730">a</span> <span
  m="4061780">bunch</span> <span m="4062070">of</span> <span
  m="4062240">edges</span> <span m="4062710">going</span> <span
  m="4063160">to</span> <span m="4063280">all</span> <span m="4063470">of</span>
  <span m="4063570">these</span> <span m="4063850">nodes.</span> <span
  m="4064600">What</span> <span m="4064920">are</span> <span
  m="4064950">these</span> <span m="4065210">pairs?</span> <span
  m="4066220">As</span> <span m="4066420">you</span> <span
  m="4066500">can</span> <span m="4066600">imagine,</span> <span
  m="4067020">these</span> <span m="4067220">pairs</span> <span
  m="4068310">correspond</span> <span m="4069010">to</span> <span
  m="4069410">the</span> <span m="4069570">games</span> <span
  m="4070940">that</span> <span m="4072670">each</span> <span
  m="4072910">of</span> <span m="4073010">these</span> <span
  m="4073260">teams</span> <span m="4073690">that</span> <span
  m="4073810">are</span> <span m="4073890">inside</span> <span
  m="4074470">the</span> <span m="4074560">circle</span> <span
  m="4075220">play</span> <span m="4075490">against</span> <span
  m="4075800">each</span> <span m="4075970">other.</span> <span
  m="4076710">So</span> <span m="4076970">3</span> <span
  m="4077250">plays</span> <span m="4077530">4</span> <span m="4078620">a</span>
  <span m="4079010">certain</span> <span m="4079090">number</span> <span
  m="4079360">of</span> <span m="4079440">times.</span> <span
  m="4079870">According</span> <span m="4080130">to</span> <span
  m="4080180">that</span> <span m="4080340">table</span> <span
  m="4080710">it's</span> <span m="4080850">4</span> <span
  m="4081110">times.</span></p><p><span m="4081930">So</span> <span
  m="4082070">I'm</span> <span m="4082150">going</span> <span
  m="4082250">to</span> <span m="4082300">put</span> <span m="4082420">a</span>
  <span m="4082470">4</span> <span m="4082810">in</span> <span
  m="4082910">here.</span> <span m="4084140">This</span> <span
  m="4084300">is</span> <span m="4084440">4</span> <span m="4084700">as</span>
  <span m="4084810">well.</span> <span m="4085420">4,</span> <span
  m="4088470">5,</span> <span m="4089620">7,</span> <span m="4090760">2.</span>
  <span m="4091940">OK?</span> <span m="4093250">And</span> <span
  m="4094900">the</span> <span m="4095110">edges</span> <span
  m="4095440">in</span> <span m="4095550">between</span> <span
  m="4095900">here</span> <span m="4096189">are going</span> <span
  m="4096319">to</span> <span m="4096380">have</span> <span
  m="4096580">capacities</span> <span m="4097149">of</span> <span
  m="4097270">infinity</span> <span m="4098279">and</span> <span
  m="4098430">how</span> <span m="4098630">are</span> <span
  m="4098700">these</span> <span m="4098950">edges</span> <span
  m="4099569">structured?</span> <span m="4102240">So</span> <span
  m="4102430">far</span> <span m="4102630">I've</span> <span
  m="4102720">just</span> <span m="4102899">explained</span> <span
  m="4103220">how</span> <span m="4103880">the left-hand side</span> <span
  m="4104439">works.</span> <span m="4105310">These</span> <span
  m="4105529">edges</span> <span m="4105810">have</span> <span
  m="4105920">a</span> <span m="4105970">capacity</span> <span
  m="4106399">of</span> <span m="4106490">infinity.</span> <span
  m="4107310">1</span> <span m="4107590">2</span> <span m="4107779">goes</span>
  <span m="4108020">to</span> <span m="4108120">1,</span> <span
  m="4108950">1</span> <span m="4109170">2</span> <span m="4109330">goes</span>
  <span m="4109550">to</span> <span m="4109680">2.</span> <span
  m="4110590">1</span> <span m="4110790">3</span> <span m="4111060">goes</span>
  <span m="4111310">to</span> <span m="4111430">1,</span> <span
  m="4112600">1</span> <span m="4112850">3</span> <span m="4113029">goes</span>
  <span m="4113260">to</span> <span m="4113370">3.</span> <span
  m="4114149">And</span> <span m="4114550">that's</span> <span
  m="4114770">pretty</span> <span m="4114920">much</span> <span
  m="4115109">it.</span></p><p><span m="4116450">So</span> <span
  m="4116510">that's</span> <span m="4116700">where</span> <span
  m="4116830">these</span> <span m="4117050">edges</span> <span
  m="4117359">are.</span> <span m="4119700">That's how</span> <span
  m="4119910">these</span> <span m="4120120">edges</span> <span
  m="4120310">are</span> <span m="4121340">introduced.</span> <span
  m="4123540">And</span> <span m="4123850">all</span> <span
  m="4124000">of</span> <span m="4124069">these</span> <span
  m="4124229">edges</span> <span m="4126740">have a</span> <span
  m="4127010">capacity of</span> <span m="4127490">infinity.</span> <span
  m="4130439">2 to</span> <span m="4130760">4,</span> <span m="4136000">3</span>
  <span m="4136340">to</span> <span m="4136420">4,</span> <span
  m="4138450">and</span> <span m="4138870">that.</span> <span
  m="4140529">So</span> <span m="4140729">far,</span> <span
  m="4140939">it's</span> <span m="4141080">pretty</span> <span
  m="4141380">straightforward.</span> <span m="4143229">There's</span> <span
  m="4143350">one</span> <span m="4143550">last</span> <span
  m="4143859">thing</span> <span m="4144010">that</span> <span
  m="4144120">we</span> <span m="4144200">need</span> <span
  m="4144359">to</span> <span m="4144439">do,</span> <span m="4145970">which
  is</span> <span m="4146310">add</span> <span m="4146550">capacities</span>
  <span m="4148100">to</span> <span m="4148180">these</span> <span
  m="4148450">edges.</span> <span m="4149939">This</span> <span
  m="4150040">is</span> <span m="4150140">actually</span> <span
  m="4150290">crucial.</span> <span m="4151670">It</span> <span
  m="4151850">turns</span> <span m="4152109">out</span> <span
  m="4152319">that</span> <span m="4152450">we</span> <span
  m="4152550">have</span> <span m="4152649">to</span> <span
  m="4152750">add</span> <span m="4153050">capacities</span> <span
  m="4154290">such that</span> <span m="4154859">this</span> <span
  m="4154970">max</span> <span m="4155279">flow</span> <span
  m="4155529">is</span> <span m="4155640">going</span> <span
  m="4155750">to</span> <span m="4155840">represent</span> <span
  m="4156540">elimination.</span></p><p><span m="4157490">So</span> <span
  m="4157590">these</span> <span m="4157779">capacities</span> <span
  m="4158270">have to be</span> <span m="4158529">chosen.</span> <span
  m="4159490">And</span> <span m="4159779">in</span> <span
  m="4159920">particular</span> <span m="4160350">the</span> <span
  m="4160490">equation</span> <span m="4161640">for</span> <span
  m="4162120">this</span> <span m="4162910">is</span> <span
  m="4163069">simply</span> <span m="4163970">w5</span> <span
  m="4165779">plus</span> <span m="4166180">r5</span> <span
  m="4167880">minus</span> <span m="4168359">w1.</span> <span
  m="4171640">In</span> <span m="4171770">this</span> <span
  m="4171970">case</span> <span m="4172300">if it's</span> <span
  m="4172550">48,</span> <span m="4173370">I'm</span> <span
  m="4173800">asking</span> <span m="4174100">the</span> <span
  m="4174180">question</span> <span m="4174529">for</span> <span
  m="4174689">48</span> <span m="4175310">for</span> <span m="4175460">w5</span>
  <span m="4177010">plus</span> <span m="4177330">28</span> <span
  m="4178760">minus</span> <span m="4179189">75.</span> <span
  m="4180939">So</span> <span m="4181040">that's</span> <span
  m="4181810">1.</span> <span m="4183979">And</span> <span
  m="4184149">then</span> <span m="4184279">this</span> <span
  m="4184479">thing</span> <span m="4184640">here</span> <span
  m="4184990">would</span> <span m="4185140">be</span> <span
  m="4186840">w5.</span> <span m="4188920">I'll</span> <span
  m="4188979">just</span> <span m="4189140">write</span> <span
  m="4189330">that</span> <span m="4189430">out.</span> <span
  m="4189609">w5</span> <span m="4190240">plus</span> <span
  m="4190450">r5</span> <span m="4191600">minus</span> <span
  m="4192060">w2,</span> <span m="4194050">hopefully</span> <span
  m="4194090">you</span> <span m="4194279">can</span> <span
  m="4194380">read</span> <span m="4194580">that,</span> <span
  m="4194880">and</span> <span m="4194990">that's</span> <span
  m="4195210">a</span> <span m="4195270">5</span> <span m="4196550">and</span>
  <span m="4196730">then</span> <span m="4196880">similarly</span> <span
  m="4197270">this</span> <span m="4197440">is</span> <span m="4197550">a</span>
  <span m="4197610">7,</span> <span m="4198550">and</span> <span
  m="4198700">that's</span> <span m="4198910">13.</span></p><p><span
  m="4200520">And</span> <span m="4200790">you</span> <span
  m="4201260">might</span> <span m="4201460">ask,</span> <span
  m="4201730">what</span> <span m="4202040">does</span> <span
  m="4202130">this</span> <span m="4202280">represent?</span> <span
  m="4203280">Well</span> <span m="4203580">it</span> <span
  m="4203730">kind</span> <span m="4203870">of</span> <span
  m="4203910">represents</span> <span m="4204400">what</span> <span
  m="4204810">you</span> <span m="4204940">think</span> <span
  m="4205120">it</span> <span m="4205200">represents</span> <span
  m="4205690">if</span> <span m="4205770">you</span> <span
  m="4205880">just</span> <span m="4206120">look</span> <span
  m="4206250">at</span> <span m="4206320">that</span> <span
  m="4206530">equation.</span> <span m="4207510">It</span> <span
  m="4207660">says</span> <span m="4211440">how</span> <span
  m="4211630">much</span> <span m="4212010">can</span> <span
  m="4212140">I</span> <span m="4212200">push</span> <span
  m="4212510">through</span> <span m="4212770">here</span> <span
  m="4214430">before</span> <span m="4215270">I</span> <span
  m="4215410">get</span> <span m="4215720">greater</span> <span
  m="4217160">than</span> <span m="4217960">w1.</span> <span
  m="4218840">So</span> <span m="4218980">what</span> <span
  m="4219110">is</span> <span m="4219170">the</span> <span
  m="4219250">capacity?</span> <span m="4219780">What's</span> <span
  m="4219980">the</span> <span m="4220060">difference</span> <span
  m="4220390">here?</span> <span m="4223680">if</span> <span
  m="4223860">I</span> <span m="4224020">have</span> <span m="4224170">a</span>
  <span m="4224230">1</span> <span m="4224540">here,</span> <span
  m="4226510">that</span> <span m="4226690">means</span> <span
  m="4226910">that</span> <span m="4227030">I</span> <span
  m="4227110">still</span> <span m="4228160">see</span> <span
  m="4228350">w5</span> <span m="4228590">plus</span> <span
  m="4229350">r5,</span> <span m="4230980">I'm</span> <span m="4231370">1</span>
  <span m="4231820">greater</span> <span m="4232230">than</span> <span
  m="4232390">w1.</span></p><p><span m="4232930">So</span> <span
  m="4233170">in</span> <span m="4233320">particular,</span> <span
  m="4234750">if</span> <span m="4234890">I</span> <span m="4234930">want</span>
  <span m="4235070">to</span> <span m="4235110">write</span> <span
  m="4235310">this</span> <span m="4235470">out,</span> <span
  m="4236190">the</span> <span m="4236320">capacities</span> <span
  m="4239140">are</span> <span m="4240950">the</span> <span
  m="4241160">number</span> <span m="4241600">of</span> <span
  m="4241730">games</span> <span m="4245200">team</span> <span
  m="4247430">i</span> <span m="4247690">can</span> <span
  m="4248030">win,</span> <span m="4251760">and</span> <span
  m="4252520">not</span> <span m="4253030">have</span> <span m="4256380">more
  wins</span> <span m="4264930">than</span> <span m="4265110">team</span> <span
  m="4265380">5.</span> <span m="4270970">So</span> <span
  m="4271140">this</span> <span m="4271300">is</span> <span m="4272340">a</span>
  <span m="4272770">statement</span> <span m="4273230">about</span> <span
  m="4274160">team</span> <span m="4274660">1</span> <span
  m="4275770">when</span> <span m="4275930">I</span> <span
  m="4275990">see</span> <span m="4276290">that</span> <span
  m="4276350">over</span> <span m="4276520">there.</span> <span
  m="4278090">Our</span> <span m="4278300">team</span> <span
  m="4278560">2</span> <span m="4278830">for the</span> <span
  m="4278980">other</span> <span m="4279240">edge.</span> <span
  m="4279960">And</span> <span m="4280200">I'm</span> <span
  m="4280270">just</span> <span m="4280410">trying</span> <span
  m="4280550">to</span> <span m="4280610">figure</span> <span
  m="4280830">out</span> <span m="4283320">how</span> <span
  m="4283500">much</span> <span m="4283740">can</span> <span
  m="4283900">I</span> <span m="4284010">allow,</span> <span
  m="4285220">with</span> <span m="4285380">respect</span> <span
  m="4285810">to</span> <span m="4287320">this</span> <span
  m="4288460">other</span> <span m="4288720">team,</span> <span
  m="4289540">to</span> <span m="4289680">determine</span> <span
  m="4289955">elimination</span> <span m="4290830">for</span> <span
  m="4291380">the</span> <span m="4291530">particular</span> <span
  m="4291840">team</span> <span m="4292080">that</span> <span
  m="4292190">I'm</span> <span m="4292270">looking</span> <span
  m="4292540">at,</span> <span m="4293050">team</span> <span
  m="4293240">5</span> <span m="4293530">or</span> <span
  m="4293620">not.</span></p><p><span m="4294430">So</span> <span
  m="4294890">in</span> <span m="4295040">particular,</span> <span
  m="4297270">let's</span> <span m="4297400">say</span> <span
  m="4297580">that</span> <span m="4299010">team</span> <span
  m="4299660">i</span> <span m="4301740">wins</span> <span
  m="4302700">one</span> <span m="4302930">particular</span> <span
  m="4303260">game.</span> <span m="4304120">So</span> <span
  m="4304160">it</span> <span m="4304280">goes</span> <span
  m="4304490">up</span> <span m="4304680">to</span> <span m="4305020">it</span>
  <span m="4305180">goes</span> <span m="4305370">up</span> <span
  m="4305500">to</span> <span m="4305600">76.</span> <span
  m="4306850">And</span> <span m="4307070">if it</span> <span
  m="4307130">goes</span> <span m="4307310">up to</span> <span
  m="4307500">76,</span> <span m="4309320">it</span> <span
  m="4312330">does</span> <span m="4312580">not</span> <span
  m="4313150">necessarily</span> <span m="4313850">have</span> <span
  m="4314670">more</span> <span m="4315040">wins</span> <span
  m="4315750">then</span> <span m="4315940">team</span> <span
  m="4316130">5,</span> <span m="4316540">because team</span> <span
  m="4316810">5 can</span> <span m="4317120">go</span> <span
  m="4317230">up</span> <span m="4317360">to</span> <span m="4317440">76</span>
  <span m="4317910">as</span> <span m="4318030">well.</span> <span
  m="4319000">That's</span> <span m="4319240">pretty</span> <span
  m="4319390">much</span> <span m="4319570">it,</span> <span
  m="4320300">and</span> <span m="4320500">the</span> <span m="4320570">same
  thing</span> <span m="4320940">for</span> <span m="4321670">team</span> <span
  m="4321900">2,</span> <span m="4322350">team</span> <span
  m="4322570">3,</span> <span m="4323260">and</span> <span
  m="4323440">team</span> <span m="4323620">4.</span></p><p><span
  m="4327410">So</span> <span m="4327750">the</span> <span
  m="4328480">intuition</span> <span m="4329170">here</span> <span
  m="4331020">is</span> <span m="4332180">the</span> <span
  m="4332230">following.</span> <span m="4335040">So</span> <span
  m="4335220">what we're</span> <span m="4335420">going</span> <span
  m="4335510">to do</span> <span m="4335820">is</span> <span
  m="4336440">compute</span> <span m="4338030">the</span> <span
  m="4338100">max</span> <span m="4338410">flow</span> <span
  m="4339670">and</span> <span m="4339860">look</span> <span
  m="4340000">for</span> <span m="4340120">a</span> <span
  m="4340170">certain</span> <span m="4340440">property</span> <span
  m="4340910">on</span> <span m="4341010">that</span> <span
  m="4341170">network.</span> <span m="4342280">And</span> <span
  m="4342490">that's</span> <span m="4342640">going</span> <span
  m="4342750">to</span> <span m="4342820">tell</span> <span
  m="4343020">us</span> <span m="4343900">if</span> <span
  m="4344310">team</span> <span m="4344580">5</span> <span m="4344850">is</span>
  <span m="4345120">eliminated</span> <span m="4345210">or</span> <span
  m="4345700">not</span> <span m="4346730">for</span> <span
  m="4346960">the</span> <span m="4347070">particular</span> <span
  m="4347390">choice of</span> <span m="4347820">wi</span> <span
  m="4348250">of</span> <span m="4348530">48,</span> <span
  m="4349180">because</span> <span m="4349410">that's</span> <span
  m="4349570">how</span> <span m="4349710">I</span> <span
  m="4350030">constructed</span> <span m="4350960">this</span> <span
  m="4351120">particular</span> <span m="4351410">example.</span></p><p><span
  m="4352560">So</span> <span m="4354050">the</span> <span
  m="4354750">intuition</span> <span m="4355300">is,</span> <span
  m="4357630">assume</span> <span m="4360220">team</span> <span
  m="4360500">5</span> <span m="4363120">wins</span> <span
  m="4364530">all</span> <span m="4364810">remaining</span> <span
  m="4365180">games.</span> <span m="4365530">That</span> <span
  m="4365880">makes</span> <span m="4366000">perfect</span> <span
  m="4366400">sense.</span> <span m="4367890">This</span> <span
  m="4368090">is</span> <span m="4368210">the</span> <span
  m="4368290">best</span> <span m="4368490">case</span> <span
  m="4368660">scenario.</span> <span m="4369200">You're</span> <span
  m="4369390">trying</span> <span m="4369600">to</span> <span
  m="4369660">figure</span> <span m="4369920">out,</span> <span
  m="4370120">in</span> <span m="4370290">the</span> <span
  m="4370380">best</span> <span m="4370590">case</span> <span
  m="4370760">scenario,</span> <span m="4371830">are</span> <span
  m="4371980">you</span> <span m="4372110">eliminated</span> <span
  m="4372590">or</span> <span m="4372700">not?</span> <span
  m="4373340">Is</span> <span m="4373470">team</span> <span m="4373650">5</span>
  <span m="4373890">eliminated</span> <span m="4374240">or</span> <span
  m="4374340">not?</span> <span m="4375520">And</span> <span
  m="4375790">what</span> <span m="4375930">you</span> <span
  m="4376020">want</span> <span m="4376180">to</span> <span
  m="4376230">do</span> <span m="4376420">is</span> <span
  m="4376600">divvy</span> <span m="4376730">up</span> <span
  m="4378935">the</span> <span m="4379376">remaining</span> <span
  m="4380250">games.</span> <span m="4383440">And</span> <span
  m="4383600">that</span> <span m="4383760">corresponds</span> <span
  m="4384240">to</span> <span m="4384740">sending</span> <span
  m="4385200">flow</span> <span m="4385980">through</span> <span
  m="4386245">these</span> <span m="4386510">edges.</span></p><p><span
  m="4387830">So</span> <span m="4387900">flow through</span> <span
  m="4388350">these</span> <span m="4388510">edges</span> <span
  m="4389040">corresponds</span> <span m="4389390">to</span> <span
  m="4391240">assigning</span> <span m="4391565">wins</span> <span
  m="4392780">to</span> <span m="4392900">teams</span> <span
  m="4393300">1,</span> <span m="4393740">2,</span> <span m="4394130">3,</span>
  <span m="4394490">and</span> <span m="4394650">4.</span> <span
  m="4396440">That's</span> <span m="4396730">the</span> <span
  m="4396830">key.</span> <span m="4398190">Divvy up</span> <span
  m="4398360">the</span> <span m="4398600">remaining</span> <span
  m="4398930">games,</span> <span m="4400010">so</span> <span
  m="4401780">all</span> <span m="4402160">teams</span> <span
  m="4406220">have</span> <span m="4407850">less</span> <span
  m="4408150">than</span> <span m="4408330">or</span> <span
  m="4408440">equal</span> <span m="4408750">to</span> <span
  m="4408890">w5</span> <span m="4410230">plus</span> <span
  m="4410470">r5</span> <span m="4411040">wins.</span></p><p><span
  m="4412440">So</span> <span m="4412600">what</span> <span
  m="4412720">does</span> <span m="4412810">it</span> <span
  m="4412930">mean</span> <span m="4413190">if</span> <span
  m="4413340">all</span> <span m="4413690">teams</span> <span
  m="4414050">have</span> <span m="4414710">less</span> <span
  m="4414910">than</span> <span m="4415030">or</span> <span
  m="4415120">equal</span> <span m="4415370">to</span> <span
  m="4415460">w5</span> <span m="4415710">plus r5</span> <span
  m="4416310">wins?</span> <span m="4417710">If</span> <span
  m="4417820">you</span> <span m="4417930">can</span> <span
  m="4418040">divvied</span> <span m="4418370">up</span> <span
  m="4418540">such</span> <span m="4418810">that</span> <span
  m="4418980">that's</span> <span m="4419150">the</span> <span
  m="4419250">case,</span> <span m="4419620">what</span> <span
  m="4419710">does</span> <span m="4419790">that</span> <span
  m="4419950">mean</span> <span m="4421370">for team</span> <span
  m="4421720">5?</span> <span m="4424080">Team</span> <span
  m="4424360">five</span> <span m="4424590">is still</span> <span m="4424760">in
  the game.</span> <span m="4425650">Team</span> <span m="4425880">5</span>
  <span m="4425960">is</span> <span m="4426120">not</span> <span
  m="4426470">eliminated.</span> <span m="4428250">So</span> <span
  m="4428470">if</span> <span m="4428600">you</span> <span
  m="4428710">can</span> <span m="4428830">do</span> <span
  m="4429020">this,</span> <span m="4430000">then</span> <span
  m="4432260">team</span> <span m="4432550">5</span> <span m="4434540">is</span>
  <span m="4434810">not</span> <span m="4435090">eliminated</span></p><p><span
  m="4441850">If</span> <span m="4441980">you</span> <span
  m="4442080">can't</span> <span m="4443100">team 5</span> <span
  m="4443320">is</span> <span m="4443440">eliminated.</span> <span
  m="4443910">Because</span> <span m="4444500">some</span> <span
  m="4444850">team</span> <span m="4445790">is</span> <span
  m="4446000">going</span> <span m="4446270">to</span> <span
  m="4446980">get</span> <span m="4449000">77</span> <span
  m="4449290">wins.</span> <span m="4451760">And</span> <span
  m="4451960">so</span> <span m="4452080">that</span> <span
  m="4452250">analysis</span> <span m="4452660">that</span> <span
  m="4452780">Alexander</span> <span m="4453520">carried</span> <span
  m="4453830">out</span> <span m="4454400">wasn't</span> <span
  m="4454600">a</span> <span m="4455210">flow</span> <span
  m="4455430">analysis.</span> <span m="4456240">But</span> <span
  m="4456390">somehow,</span> <span m="4456730">that's</span> <span
  m="4456980">got</span> <span m="4457130">to</span> <span m="4457190">be</span>
  <span m="4457330">in</span> <span m="4457430">here.</span> <span
  m="4458800">That</span> <span m="4459220">type</span> <span
  m="4459390">of</span> <span m="4459460">analysis</span> <span m="4459780">has
  got</span> <span m="4460030">to</span> <span m="4460070">be</span> <span
  m="4460190">in</span> <span m="4460320">here</span> <span
  m="4460980">to</span> <span m="4461170">show</span> <span
  m="4461590">that</span> <span m="4461790">some</span> <span
  m="4462030">team</span> <span m="4462330">is</span> <span
  m="4462420">going</span> <span m="4462520">to</span> <span
  m="4462560">get</span> <span m="4462750">to</span> <span m="4462840">77</span>
  <span m="4463320">wins.</span> <span m="4464210">Because</span> <span
  m="4465430">you</span> <span m="4465500">know,</span> <span
  m="4467030">well</span> <span m="4467200">thanks to</span> <span
  m="4467430">Alexander,</span> <span m="4468440">that</span> <span
  m="4468950">Detroit</span> <span m="4469380">is</span> <span
  m="4469480">going</span> <span m="4469590">to</span> <span
  m="4469630">be</span> <span m="4469680">eliminated</span> <span
  m="4470150">here.</span></p><p><span m="4471870">But</span> <span
  m="4472110">we</span> <span m="4472220">want</span> <span
  m="4472350">to</span> <span m="4472400">show</span> <span
  m="4472720">that</span> <span m="4473530">in</span> <span
  m="4473620">terms</span> <span m="4473860">of</span> <span
  m="4473950">the</span> <span m="4474030">max</span> <span
  m="4474480">flow</span> <span m="4475470">on</span> <span
  m="4476410">this</span> <span m="4476610">network.</span> <span
  m="4479730">So</span> <span m="4483410">there</span> <span
  m="4483630">is</span> <span m="4483770">an</span> <span
  m="4483980">associated</span> <span m="4484550">theorem</span> <span
  m="4487360">that</span> <span m="4487560">I'll</span> <span
  m="4487670">write.</span> <span m="4490586">We've</span> <span m="4491060">got
  enough time</span> <span m="4491300">here.</span> <span m="4492400">We</span>
  <span m="4492600">just</span> <span m="4492790">have</span> <span
  m="4492950">to</span> <span m="4493780">find</span> <span
  m="4494160">the</span> <span m="4494220">max flow</span> <span
  m="4494660">for</span> <span m="4494870">this.</span> <span
  m="4495710">And</span> <span m="4495900">that</span> <span m="4496040">should
  take</span> <span m="4496320">just</span> <span m="4496590">a</span> <span
  m="4497220">minute.</span> <span m="4498340">But</span> <span
  m="4498490">I</span> <span m="4498580">want</span> <span m="4498760">to</span>
  <span m="4499570">set</span> <span m="4499810">it</span> <span
  m="4499890">up</span> <span m="4500050">so</span> <span
  m="4501810">that's</span> <span m="4502020">pretty</span> <span
  m="4502170">much</span> <span m="4502440">the</span> <span
  m="4502700">end.</span> <span m="4505040">Finding</span> <span
  m="4505370">the</span> <span m="4505450">max</span> <span
  m="4505700">flow,</span> <span m="4506490">what</span> <span
  m="4506660">that</span> <span m="4506820">means.</span></p><p><span
  m="4508400">But</span> <span m="4508570">the</span> <span m="4508650">theorem
  is,</span> <span m="4509740">which</span> <span m="4509900">is</span> <span
  m="4510010">essentially</span> <span m="4510490">a</span> <span
  m="4511080">more</span> <span m="4511320">precise</span> <span
  m="4511880">restatement</span> <span m="4512580">of</span> <span
  m="4512710">this</span> <span m="4512900">observation,</span> <span
  m="4515210">is</span> <span m="4515570">that</span> <span
  m="4516940">team</span> <span m="4517300">5--</span> <span
  m="4518800">obviously</span> <span m="4519080">you</span> <span
  m="4519130">can</span> <span m="4519230">do</span> <span
  m="4519330">this</span> <span m="4519510">for</span> <span
  m="4519600">any</span> <span m="4519810">team--</span> <span
  m="4521170">is</span> <span m="4521730">eliminated.</span> <span
  m="4524590">If</span> <span m="4524820">and</span> <span
  m="4524930">only</span> <span m="4525330">if</span> <span
  m="4526910">the</span> <span m="4527010">max</span> <span
  m="4527410">flow</span> <span m="4531760">does</span> <span
  m="4532090">not</span> <span m="4533810">saturate</span> <span
  m="4537760">all</span> <span m="4538240">edges</span> <span
  m="4540540">leaving</span> <span m="4542210">the</span> <span
  m="4542390">source.</span> <span m="4546394">I.e.</span> <span
  m="4546880">in</span> <span m="4547220">this</span> <span
  m="4547440">case,</span> <span m="4548380">the</span> <span
  m="4548490">max</span> <span m="4548780">flow</span> <span
  m="4549200">is</span> <span m="4549450">strictly</span> <span m="4549830">less
  than</span> <span m="4550240">26,</span> <span m="4556090">which</span> <span
  m="4556380">corresponds</span> <span m="4556870">to</span> <span
  m="4557220">the sum</span> <span m="4557640">of</span> <span
  m="4557780">those</span> <span m="4558010">things.</span> <span
  m="4558470">5</span> <span m="4558730">plus</span> <span m="4558910">7</span>
  <span m="4559200">plus,</span> <span m="4560000">yadda</span> <span
  m="4560150">yadda</span> <span m="4560425">yadda.</span></p><p><span
  m="4561310">And</span> <span m="4561470">so</span> <span
  m="4561590">what</span> <span m="4561730">does</span> <span
  m="4561820">it</span> <span m="4561930">mean</span> <span
  m="4562130">to</span> <span m="4563800">saturate</span> <span
  m="4564430">all</span> <span m="4564640">of</span> <span
  m="4564730">the</span> <span m="4564860">edges?</span> <span
  m="4565490">It</span> <span m="4565610">means</span> <span
  m="4565770">that</span> <span m="4565860">all</span> <span
  m="4566030">the</span> <span m="4566100">games</span> <span
  m="4566330">have</span> <span m="4566420">been</span> <span
  m="4566570">played.</span> <span m="4567970">All</span> <span
  m="4568430">the</span> <span m="4568680">relevant</span> <span
  m="4569180">games</span> <span m="4569490">here</span> <span
  m="4570090">that</span> <span m="4570210">affect team</span> <span
  m="4570700">5</span> <span m="4571370">have</span> <span
  m="4571550">been</span> <span m="4571700">played.</span> <span
  m="4572330">So</span> <span m="4573320">you</span> <span
  m="4573440">want</span> <span m="4573590">to</span> <span
  m="4573630">play</span> <span m="4573820">all</span> <span
  m="4573940">the</span> <span m="4574010">games,</span> <span
  m="4574350">because</span> <span m="4574510">that's</span> <span
  m="4575650">the end</span> <span m="4576230">game,</span> <span
  m="4576570">if</span> <span m="4576670">you</span> <span
  m="4576680">will.</span> <span m="4578600">But</span> <span
  m="4579410">basically</span> <span m="4579960">what</span> <span
  m="4580340">that</span> <span m="4580600">intuition</span> <span
  m="4581090">here</span> <span m="4581980">is</span> <span
  m="4582180">that</span> <span m="4582340">saturation</span> <span
  m="4583820">of</span> <span m="4584200">those</span> <span
  m="4584480">edges</span> <span m="4586060">corresponds</span> <span
  m="4586410">to</span> <span m="4590530">playing</span> <span
  m="4592910">all</span> <span m="4593290">remaining</span> <span
  m="4593720">games.</span> <span m="4599930">And</span> <span
  m="4601740">the</span> <span m="4601890">argument</span> <span
  m="4602380">is</span> <span m="4606130">not</span> <span m="4606290">a</span>
  <span m="4606350">proof</span> <span m="4608090">if</span> <span
  m="4608250">you</span> <span m="4608380">can't</span> <span
  m="4608780">play</span> <span m="4612800">all</span> <span
  m="4613170">the</span> <span m="4613250">remaining</span> <span
  m="4613660">games,</span> <span m="4621690">without</span> <span
  m="4624000">exceeding</span> <span m="4628200">the</span> <span
  m="4628350">capacity</span> <span m="4630930">of</span> <span m="4631630">i to
  t</span> <span m="4632190">edges,</span> <span m="4635660">team</span> <span
  m="4635940">5</span> <span m="4636190">is</span> <span
  m="4636280">eliminated.</span></p><p><span m="4645040">So</span> <span
  m="4645180">you</span> <span m="4645300">have</span> <span
  m="4645480">to</span> <span m="4645580">saturate,</span> <span
  m="4647580">because</span> <span m="4647790">you</span> <span
  m="4647850">have</span> <span m="4647950">to</span> <span
  m="4647990">play</span> <span m="4648160">all</span> <span
  m="4648280">the</span> <span m="4648350">games.</span> <span
  m="4649400">And</span> <span m="4650120">when</span> <span
  m="4650270">you</span> <span m="4650390">do</span> <span
  m="4650520">that</span> <span m="4650690">saturation,</span> <span
  m="4651760">obviously</span> <span m="4652220">your flow</span> <span
  m="4652520">network</span> <span m="4653140">has</span> <span
  m="4653540">to</span> <span m="4654670">satisfy</span> <span
  m="4655120">its</span> <span m="4655380">laws</span> <span
  m="4656310">corresponding to</span> <span m="4656720">the</span> <span
  m="4656900">capacity</span> <span m="4657350">that</span> <span
  m="4657490">we</span> <span m="4657590">have</span> <span
  m="4657790">in</span> <span m="4657890">there.</span> <span
  m="4658750">And</span> <span m="4659480">it's</span> <span
  m="4659660">quite</span> <span m="4659860">possible</span> <span
  m="4660300">that</span> <span m="4661380">this</span> <span
  m="4662040">is</span> <span m="4662260">going</span> <span
  m="4662420">to</span> <span m="4662500">cause</span> <span
  m="4663540">a</span> <span m="4663690">restriction</span> <span
  m="4664350">over</span> <span m="4664550">here</span> <span
  m="4665700">that</span> <span m="4665840">corresponds</span> <span
  m="4666420">to</span> <span m="4667210">requiring</span> <span
  m="4668420">that</span> <span m="4668590">not</span> <span
  m="4668780">all</span> <span m="4668940">the</span> <span
  m="4669020">games</span> <span m="4669240">we</span> <span
  m="4669380">play</span> <span m="4671310">in</span> <span
  m="4671870">order</span> <span m="4672270">for</span> <span
  m="4672510">Detroit</span> <span m="4672880">to</span> <span
  m="4672960">survive.</span> <span m="4674850">and</span> <span
  m="4674990">that's</span> <span m="4675170">basically</span> <span
  m="4675470">the</span> <span m="4675590">game.</span></p><p><span
  m="4676660">So</span> <span m="4677180">saturating</span> <span
  m="4677800">the</span> <span m="4677870">network</span> <span
  m="4678190">means</span> <span m="4678430">playing</span> <span
  m="4678660">all the</span> <span m="4678890">games.</span> <span
  m="4679880">And</span> <span m="4681250">if</span> <span
  m="4681460">you</span> <span m="4681600">get</span> <span m="4681780">a
  max</span> <span m="4682100">flow,</span> <span m="4683430">to</span> <span
  m="4683730">be</span> <span m="4683810">more</span> <span
  m="4684040">concrete,</span> <span m="4685000">if</span> <span
  m="4685160">you</span> <span m="4685250">can</span> <span
  m="4685340">get</span> <span m="4685460">a</span> <span m="4685500">max
  flow</span> <span m="4685930">here</span> <span m="4686210">that's</span>
  <span m="4689360">less</span> <span m="4689620">than</span> <span
  m="4690472">26,</span> <span m="4692380">then</span> <span
  m="4693940">you've</span> <span m="4694220">saturated</span> <span
  m="4694690">all</span> <span m="4694840">the</span> <span
  m="4694930">edges</span> <span m="4696260">and</span> <span
  m="4699360">this</span> <span m="4699520">means</span> <span
  m="4699690">that</span> <span m="4699770">you</span> <span
  m="4699880">played</span> <span m="4700090">all</span> <span
  m="4700190">the</span> <span m="4700260">games.</span> <span
  m="4701260">And</span> <span m="4702150">you</span> <span
  m="4702320">found</span> <span m="4703540">this</span> <span
  m="4703830">team</span> <span m="4704580">that</span> <span
  m="4705030">beats</span> <span m="4706095">you.</span> <span
  m="4706550">That</span> <span m="4706650">beats</span> <span
  m="4706910">team</span> <span m="4707300">5.</span></p><p><span
  m="4708960">So</span> <span m="4710830">what</span> <span
  m="4712060">happens</span> <span m="4712340">over</span> <span
  m="4712490">here?</span> <span m="4713950">Let's</span> <span
  m="4714040">take</span> <span m="4714170">a</span> <span
  m="4714220">look</span> <span m="4714380">at</span> <span
  m="4714470">this</span> <span m="4715360">and</span> <span
  m="4717170">all</span> <span m="4717390">you</span> <span
  m="4717470">have</span> <span m="4717620">to do</span> <span
  m="4717750">here,</span> <span m="4718510">is</span> <span
  m="4718690">to</span> <span m="4718780">find</span> <span
  m="4719000">the</span> <span m="4719060">max flow</span> <span
  m="4720160">and</span> <span m="4720320">then</span> <span
  m="4721080">we</span> <span m="4721180">can</span> <span m="4721270">go</span>
  <span m="4721400">back</span> <span m="4721620">to</span> <span
  m="4721970">the</span> <span m="4722180">statement</span> <span
  m="4722490">of</span> <span m="4722560">the</span> <span
  m="4722660">theorem.</span> <span m="4723590">So</span> <span
  m="4725300">I</span> <span m="4725370">want</span> <span m="4725510">to</span>
  <span m="4725550">find</span> <span m="4725880">the</span> <span
  m="4726670">min</span> <span m="4727010">cut</span> <span
  m="4728140">corresponding</span> <span m="4728680">to</span> <span
  m="4728750">this,</span> <span m="4729550">which</span> <span
  m="4729570">is</span> <span m="4729670">going</span> <span
  m="4729780">to</span> <span m="4729850">tell</span> <span
  m="4730030">me</span> <span m="4730180">what</span> <span
  m="4730300">the</span> <span m="4730370">max</span> <span m="4730660">flow
  is.</span> <span m="4731470">I</span> <span m="4731580">could</span> <span
  m="4731740">go</span> <span m="4731880">around</span> <span
  m="4732090">for</span> <span m="4732290">focus</span> <span
  m="4732630">in</span> <span m="4732750">on</span> <span
  m="4732860">this,</span> <span m="4733500">and</span> <span
  m="4733680">start</span> <span m="4733910">with</span> <span
  m="4733980">0</span> <span m="4734450">and</span> <span
  m="4734950">augment,</span> <span m="4735410">and</span> <span
  m="4735530">so</span> <span m="4735640">on</span> <span m="4735800">and</span>
  <span m="4735900">so</span> <span m="4735950">forth.</span></p><p><span
  m="4736530">But</span> <span m="4736640">there's</span> <span
  m="4736740">another</span> <span m="4736980">way</span> <span
  m="4737180">which</span> <span m="4737380">is</span> <span
  m="4738270">not</span> <span m="4738500">necessarily</span> <span
  m="4739030">algorithmic,</span> <span m="4739850">but</span> <span
  m="4740200">eyeballs.</span> <span m="4741330">Use</span> <span
  m="4741620">your</span> <span m="4741760">eyeballs</span> <span
  m="4742970">and</span> <span m="4744240">find</span> <span
  m="4744770">me</span> <span m="4745850">the</span> <span
  m="4746260">min</span> <span m="4746680">cut</span> <span
  m="4747770">here.</span> <span m="4748140">Which</span> <span
  m="4748310">has</span> <span m="4748520">the</span> <span
  m="4748660">minimum</span> <span m="4749800">capacity.</span> <span
  m="4751430">The</span> <span m="4751600">min</span> <span
  m="4751880">cut,</span> <span m="4752120">the</span> <span
  m="4752240">minimum</span> <span m="4752600">capacity</span> <span
  m="4753700">is</span> <span m="4753850">going</span> <span
  m="4753960">to</span> <span m="4754030">tell</span> <span
  m="4754290">me</span> <span m="4754840">what</span> <span
  m="4755010">my</span> <span m="4755110">max flow</span> <span
  m="4755740">is.</span> <span m="4756720">We</span> <span
  m="4756810">know</span> <span m="4756950">that</span> <span
  m="4757190">from</span> <span m="4757350">the</span> <span
  m="4757850">max-flow</span> <span m="4758170">min-cut</span> <span
  m="4758500">theorem.</span> <span m="4759880">So</span> <span
  m="4760630">I</span> <span m="4760720">want</span> <span m="4760850">to</span>
  <span m="4760940">cut</span> <span m="4761260">this</span> <span
  m="4761470">network</span> <span m="4762260">into</span> <span
  m="4763250">capital</span> <span m="4763630">S</span> <span
  m="4764260">and</span> <span m="4764440">capital</span> <span
  m="4764830">T</span> <span m="4765680">and</span> <span m="4767486">find
  the</span> <span m="4768000">max flow.</span></p><p><span
  m="4770680">So</span> <span m="4771290">any</span> <span
  m="4771470">ideas?</span> <span m="4773210">It's</span> <span
  m="4773350">a</span> <span m="4773370">little</span> <span
  m="4773570">hard.</span> <span m="4775110">So</span> <span m="4776410">I
  see</span> <span m="4776550">some</span> <span m="4776720">people</span> <span
  m="4777100">waving</span> <span m="4777370">their</span> <span
  m="4777520">hands.</span> <span m="4778910">All</span> <span
  m="4779000">right,</span> <span m="4779180">let</span> <span
  m="4779600">me</span> <span m="4779670">just</span> <span
  m="4779820">do</span> <span m="4779920">that</span> <span
  m="4780150">since</span> <span m="4780380">we're</span> <span
  m="4780670">running</span> <span m="4780940">out</span> <span
  m="4781040">of</span> <span m="4781100">time.</span> <span
  m="4781630">It's</span> <span m="4781750">kind of</span> <span
  m="4781920">cool.</span> <span m="4783270">So I'm going</span> <span
  m="4783480">to</span> <span m="4783550">use</span> <span m="4783860">a</span>
  <span m="4783910">different</span> <span m="4784340">color.</span> <span
  m="4785150">We're</span> <span m="4785525">going to go</span> <span
  m="4785900">like</span> <span m="4786170">that,</span> <span
  m="4787090">yeah.</span> <span m="4788980">and</span> <span
  m="4789140">then</span> <span m="4789530">veer</span> <span
  m="4790330">over</span> <span m="4790930">this</span> <span
  m="4791200">way,</span> <span m="4793170">and</span> <span
  m="4793390">then</span> <span m="4794070">jump</span> <span
  m="4794470">up</span> <span m="4794660">like</span> <span
  m="4794960">that,</span> <span m="4797060">and</span> <span
  m="4797240">then</span> <span m="4797380">come</span> <span
  m="4797480">over</span> <span m="4797720">like</span> <span
  m="4797910">that.</span></p><p><span m="4800510">And</span> <span
  m="4800950">this</span> <span m="4802320">is</span> <span
  m="4802670">S.</span> <span m="4804960">And</span> <span m="4805950">on</span>
  <span m="4806130">this</span> <span m="4806350">side</span> <span
  m="4807440">is</span> <span m="4807660">T.</span> <span m="4809450">So</span>
  <span m="4809880">I</span> <span m="4809950">got</span> <span
  m="4810700">small</span> <span m="4811050">s</span> <span
  m="4811340">and</span> <span m="4811540">capital</span> <span
  m="4812030">S,</span> <span m="4812760">small t</span> <span
  m="4813260">and</span> <span m="4813410">cap</span> <span
  m="4813720">T.</span> <span m="4814330">But</span> <span m="4814470">I</span>
  <span m="4814520">got</span> <span m="4814720">this</span> <span
  m="4815310">4</span> <span m="4815590">in</span> <span m="4816020">cap</span>
  <span m="4816350">T.</span> <span m="4817010">Notice</span> <span
  m="4817290">that</span> <span m="4817400">I</span> <span
  m="4817460">got</span> <span m="4817670">3 to</span> <span
  m="4817900">4,</span> <span m="4818250">2 to</span> <span
  m="4818470">4,</span> <span m="4818750">1</span> <span m="4818940">to</span>
  <span m="4819030">4</span> <span m="4819680">in</span> <span m="4819840">cap
  T</span> <span m="4820330">and</span> <span m="4820400">I</span> <span
  m="4820450">got</span> <span m="4820610">these</span> <span
  m="4820740">other</span> <span m="4820920">ones</span> <span
  m="4821180">in</span> <span m="4822720">cap</span> <span
  m="4822940">S.</span></p><p><span m="4824500">So</span> <span
  m="4824710">all</span> <span m="4824950">I've</span> <span
  m="4825030">done</span> <span m="4825200">here,</span> <span
  m="4825740">forget</span> <span m="4825870">baseball</span> <span
  m="4826180">elimination,</span> <span m="4827250">is</span> <span
  m="4827430">find</span> <span m="4827870">a min-cut.</span> <span
  m="4829160">And</span> <span m="4829300">if</span> <span
  m="4829370">you</span> <span m="4829460">look</span> <span
  m="4829640">at</span> <span m="4830280">what</span> <span
  m="4830500">the</span> <span m="4830580">value</span> <span
  m="4831050">of</span> <span m="4831180">this</span> <span
  m="4831340">min-cut</span> <span m="4831550">is,</span> <span
  m="4833740">the</span> <span m="4833820">value</span> <span
  m="4834170">of</span> <span m="4834260">the</span> <span
  m="4834320">min-cut</span> <span m="4835280">is</span> <span
  m="4835440">simply</span> <span m="4837075">the</span> <span
  m="4837440">capacities</span> <span m="4838180">of</span> <span
  m="4838310">the</span> <span m="4838410">edges</span> <span
  m="4839190">that</span> <span m="4839420">go</span> <span
  m="4839670">from</span> <span m="4839980">S</span> <span m="4840280">to</span>
  <span m="4840420">T.</span> <span m="4842330">So</span> <span
  m="4842850">it's</span> <span m="4843040">simply</span> <span
  m="4843350">the</span> <span m="4844300">S</span> <span m="4844820">to
  T</span> <span m="4846120">edges</span> <span m="4847150">and</span> <span
  m="4847350">summing</span> <span m="4847650">over</span> <span
  m="4847810">the</span> <span m="4847910">capacities.</span> <span
  m="4849030">And</span> <span m="4849180">if</span> <span
  m="4849250">you</span> <span m="4849340">take</span> <span
  m="4849500">a</span> <span m="4849550">look,</span> <span
  m="4850230">obviously</span> <span m="4850680">S to T,</span> <span
  m="4850995">you've</span> <span m="4851310">got</span> <span
  m="4851490">4</span> <span m="4851740">plus</span> <span m="4851940">4</span>
  <span m="4852160">plus</span> <span m="4852370">4.</span> <span m="4852810">So
  you've</span> <span m="4853285">got</span> <span m="4853760">4</span> <span
  m="4853950">plus</span> <span m="4854120">4</span> <span
  m="4854300">plus</span> <span m="4854500">4,</span> <span
  m="4855530">corresponding</span> <span m="4856020">to</span> <span
  m="4857150">this</span> <span m="4857340">one,</span> <span
  m="4857610">this</span> <span m="4857780">one,</span> <span
  m="4858040">and</span> <span m="4858140">that</span> <span
  m="4858310">one.</span></p><p><span m="4859860">Do</span> <span
  m="4859950">I</span> <span m="4860020">need</span> <span m="4860280">to</span>
  <span m="4860470">add</span> <span m="4860920">this</span> <span
  m="4861130">edge</span> <span m="4861370">in</span> <span
  m="4861480">here?</span> <span m="4862660">Over</span> <span
  m="4862820">here?</span> <span m="4867050">Where</span> <span
  m="4867345">does</span> <span m="4867750">this</span> <span
  m="4867900">edge</span> <span m="4868120">go?</span> <span
  m="4868290">From</span> <span m="4868470">this</span> <span
  m="4869010">to</span> <span m="4869110">over</span> <span
  m="4869270">there?</span> <span m="4870540">That</span> <span
  m="4870690">goes</span> <span m="4870870">from</span> <span m="4871030">T
  to</span> <span m="4871320">S.</span> <span m="4872270">So</span> <span
  m="4872610">that's</span> <span m="4872790">good</span> <span
  m="4872970">because</span> <span m="4873160">that</span> <span
  m="4873260">has</span> <span m="4873430">a</span> <span
  m="4873460">capacity</span> <span m="4873850">of</span> <span
  m="4873930">infinity.</span> <span m="4874490">That</span> <span
  m="4874910">would cause</span> <span m="4875180">trouble.</span> <span
  m="4876680">And</span> <span m="4876900">so</span> <span
  m="4877040">the</span> <span m="4877110">other</span> <span
  m="4877340">edges</span> <span m="4877740">are</span> <span
  m="4879350">I</span> <span m="4879460">got</span> <span m="4879620">1,</span>
  <span m="4880040">5,</span> <span m="4880500">and</span> <span
  m="4880640">7.</span> <span m="4881580">So</span> <span m="4881840">I</span>
  <span m="4882180">need</span> <span m="4882340">this</span> <span
  m="4882520">one,</span> <span m="4883420">that</span> <span
  m="4883650">one,</span> <span m="4884300">and</span> <span
  m="4884480">that</span> <span m="4884640">one.</span> <span
  m="4885680">So</span> <span m="4885850">4</span> <span m="4886090">plus</span>
  <span m="4886300">4</span> <span m="4886500">plus</span> <span
  m="4886750">4,</span> <span m="4887470">plus</span> <span m="4887890">1</span>
  <span m="4888170">plus</span> <span m="4888400">5</span> <span
  m="4888650">plus</span> <span m="4888920">7</span> <span
  m="4890370">equals</span> <span m="4891310">25.</span></p><p><span
  m="4893400">And</span> <span m="4893550">so</span> <span
  m="4893640">this</span> <span m="4893820">implies</span> <span
  m="4895130">elimination,</span> <span m="4898230">because</span> <span
  m="4900720">what</span> <span m="4900930">I've</span> <span
  m="4901030">done</span> <span m="4901350">is</span> <span m="4902110">found
  the</span> <span m="4902490">max</span> <span m="4902790">flow,</span> <span
  m="4903060">which</span> <span m="4903250">is</span> <span
  m="4903960">strictly</span> <span m="4904550">less than</span> <span
  m="4905010">26.</span> <span m="4906050">Which</span> <span
  m="4906200">means</span> <span m="4906420">that</span> <span
  m="4906530">I</span> <span m="4906570">have</span> <span
  m="4906730">not</span> <span m="4907020">saturated</span> <span
  m="4908100">all</span> <span m="4908400">of</span> <span
  m="4908510">the</span> <span m="4908690">edges</span> <span
  m="4909100">that</span> <span m="4909280">come</span> <span
  m="4909490">out</span> <span m="4909670">of</span> <span m="4909770">s.</span>
  <span m="4910540">I</span> <span m="4910660">have</span> <span
  m="4911060">not</span> <span m="4911280">been</span> <span
  m="4911420">able</span> <span m="4911570">to</span> <span
  m="4911640">play</span> <span m="4911920">all</span> <span
  m="4912060">the</span> <span m="4912140">games.</span> <span
  m="4913730">And</span> <span m="4913970">so</span> <span m="4914150">if</span>
  <span m="4914260">I'd</span> <span m="4914350">played</span> <span
  m="4914680">all</span> <span m="4914820">the</span> <span
  m="4914900">games,</span> <span m="4915860">I'd</span> <span
  m="4915990">be</span> <span m="4916150">exceeding</span> <span
  m="4917490">some</span> <span m="4917710">capacity</span> <span
  m="4918130">constraint.</span> <span m="4919100">And</span> <span
  m="4919220">if</span> <span m="4919290">I</span> <span m="4919350">push</span>
  <span m="4919610">more</span> <span m="4919820">flow</span> <span
  m="4920110">in</span> <span m="4920240">there,</span> <span
  m="4920800">I'd</span> <span m="4920900">be</span> <span
  m="4920980">exceeding</span> <span m="4921330">some</span> <span
  m="4921510">capacity</span> <span m="4921910">constraint</span> <span
  m="4922370">on</span> <span m="4922500">this</span> <span
  m="4922830">side.</span> <span m="4923830">And</span> <span
  m="4924590">that</span> <span m="4924810">would</span> <span
  m="4924920">imply</span> <span m="4925270">that</span> <span
  m="4927330">Detroit</span> <span m="4927880">is</span> <span
  m="4927970">eliminated,</span> <span m="4928440">because</span> <span
  m="4928640">some team</span> <span m="4929010">would</span> <span
  m="4929120">have</span> <span m="4929810">77</span> <span
  m="4930330">wins.</span></p><p><span m="4931190">All</span> <span
  m="4931260">right,</span> <span m="4931690">so</span> <span
  m="4932340">hopefully</span> <span m="4933470">you've</span> <span
  m="4933630">got</span> <span m="4934030">the</span> <span
  m="4934230">gist</span> <span m="4934520">of</span> <span
  m="4934630">it.</span> <span m="4936140">I'll</span> <span
  m="4936270">put</span> <span m="4936440">this</span> <span
  m="4936560">in</span> <span m="4936640">the</span> <span
  m="4936720">notes.</span> <span m="4937510">Take</span> <span
  m="4937680">a</span> <span m="4937810">long,</span> <span
  m="4938200">hard</span> <span m="4938310">look</span> <span
  m="4938500">at</span> <span m="4938890">it.</span> <span
  m="4939510">That</span> <span m="4939980">particular</span> <span
  m="4940630">values</span> <span m="4941110">aren't</span> <span
  m="4941340">important.</span> <span m="4942340">The</span> <span
  m="4942640">framework</span> <span m="4943420">of</span> <span
  m="4943530">translation</span> <span m="4944130">is</span> <span
  m="4944220">important.</span> <span m="4945100">And</span> <span
  m="4945440">you can</span> <span m="4945820">certainly</span> <span
  m="4946030">ask</span> <span m="4946200">questions</span> <span
  m="4946530">of</span> <span m="4946610">your</span> <span
  m="4946710">TAs</span> <span m="4948780">on</span> <span
  m="4948920">Friday.</span> <span m="4949330">And</span> <span
  m="4949580">I'll</span> <span m="4949810">stick</span> <span
  m="4949920">around</span> <span m="4950070">here</span> <span
  m="4950370">for</span> <span m="4950670">questions.</span></p>
uid: d9b44004b3aa7adef3a48f66ca560492
type: course
layout: video
---
