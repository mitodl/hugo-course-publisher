---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this recitation, problems related to
  distributed algorithms are discussed.</p> <p><strong>Instructors:</strong>
  Ling Ren</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: w_-SX4vR53M
    parent_uid: b2a160074f73ded49d58e336f0d73981
    title: Video-YouTube-Stream
    type: Video
    uid: 05b48cb0c93151e849706ed7f630b336
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/w_-SX4vR53M/default.jpg'
    parent_uid: b2a160074f73ded49d58e336f0d73981
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 06303ba3c4fb32e9094dfe4602e703c1
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: w_-SX4vR53M
    parent_uid: b2a160074f73ded49d58e336f0d73981
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: dd4fc3a17a32937698f6084a30b98f0d
  - id: w_-SX4vR53M.srt
    parent_uid: b2a160074f73ded49d58e336f0d73981
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-10-distributed-algorithms/w_-SX4vR53M.srt
    title: 3play caption file
    type: null
    uid: 811067be7b356008772083dd63c39cc4
  - id: w_-SX4vR53M.pdf
    parent_uid: b2a160074f73ded49d58e336f0d73981
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-10-distributed-algorithms/w_-SX4vR53M.pdf
    title: 3play pdf file
    type: null
    uid: 462c34c9692137e774dc756162786d22
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b2a160074f73ded49d58e336f0d73981
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: ad0ea97d7077289b166996ad59e73d1d
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b2a160074f73ded49d58e336f0d73981
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 1ddb4bd0593f42229ce6eb783fe8d4fa
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: b2a160074f73ded49d58e336f0d73981
    title: Video-iTunes U-MP4
    type: Video
    uid: 99e3061ef5f7e2a7bea7b5e13ae31b35
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_rec10_300k.mp4'
    parent_uid: b2a160074f73ded49d58e336f0d73981
    title: Video-Internet Archive-MP4
    type: Video
    uid: b6049b9c98fe05895b45d3fe5cd3ad15
inline_embed_id: '69272779recitation10:distributedalgorithms95860865'
order_index: 440
parent_uid: 8c671299aae36eba669ca13490c21dec
related_resources_text: ''
short_url: recitation-10-distributed-algorithms
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/recitation-videos/recitation-10-distributed-algorithms
title: 'Recitation 10: More Distributed Algorithms'
transcript: >-
  <p><span m="80">The</span> <span m="190">following</span> <span
  m="630">content</span> <span m="1220">is</span> <span m="1340">provided</span>
  <span m="1780">under</span> <span m="2060">a</span> <span
  m="2100">Creative</span> <span m="2500">Commons</span> <span
  m="2910">license.</span> <span m="4019">Your</span> <span
  m="4210">support</span> <span m="4710">will</span> <span m="4870">help</span>
  <span m="5110">MIT</span> <span m="5570">OpenCourseWare</span> <span
  m="6360">continue</span> <span m="6870">to</span> <span m="6950">offer</span>
  <span m="7360">high-quality</span> <span m="8119">educational</span> <span
  m="8750">resources</span> <span m="9370">for</span> <span
  m="9520">free.</span> <span m="10730">To</span> <span m="10740">make</span>
  <span m="10940">a</span> <span m="10980">donation</span> <span
  m="11670">or</span> <span m="11940">view</span> <span
  m="12380">additional</span> <span m="12800">materials</span> <span
  m="13350">from</span> <span m="13490">hundreds</span> <span
  m="13920">of</span> <span m="14030">MIT</span> <span m="14460">courses,</span>
  <span m="15580">visit</span> <span m="15780">MIT</span> <span
  m="16210">OpenCourseWare</span> <span m="17250">at</span> <span
  m="17420">ocw.mit.edu.</span></p><p><span m="21940">LING REN: All
  right.</span> <span m="22090">Let's get</span> <span m="22460">started.</span>
  <span m="24030">Today's</span> <span m="24380">topic</span> <span
  m="24750">would</span> <span m="25000">be</span> <span
  m="25900">distributed</span> <span m="26470">algorithms.</span> <span
  m="28250">We</span> <span m="28370">will</span> <span m="29200">look</span>
  <span m="29490">at</span> <span m="29850">two</span> <span
  m="30530">new</span> <span m="30750">algorithms.</span> <span
  m="31900">But</span> <span m="32110">they</span> <span m="32259">are</span>
  <span m="32439">similar</span> <span m="32940">to</span> <span
  m="33490">what</span> <span m="33670">you</span> <span m="33750">have</span>
  <span m="33930">seen</span> <span m="34450">in</span> <span
  m="34570">the</span> <span m="34660">lectures.</span> <span
  m="35210">So</span> <span m="35820">it</span> <span m="35990">will</span>
  <span m="36120">also</span> <span m="36440">be</span> <span m="36650">a</span>
  <span m="36730">review</span> <span m="37130">of</span> <span
  m="37780">some</span> <span m="38110">concepts</span> <span
  m="38385">in</span> <span m="38660">lectures.</span></p><p><span
  m="52250">So</span> <span m="52410">our</span> <span m="52560">first</span>
  <span m="52840">example</span> <span m="53800">would</span> <span
  m="53970">be,</span> <span m="55250">again,</span> <span
  m="56130">[INAUDIBLE],</span> <span m="57100">the</span> <span
  m="58480">simplest</span> <span m="58900">example.</span> <span
  m="65670">But</span> <span m="66230">this</span> <span m="66430">time,</span>
  <span m="68140">the</span> <span m="68440">network</span> <span
  m="69000">and</span> <span m="69420">topology</span> <span
  m="70010">would</span> <span m="70260">be</span> <span m="71350">a</span>
  <span m="71470">ring.</span> <span m="81810">So</span> <span m="82450">in
  the</span> <span m="82600">lectures,</span> <span m="84740">the</span> <span
  m="84830">example</span> <span m="85270">we</span> <span m="85380">see</span>
  <span m="85700">is</span> <span m="85840">a</span> <span
  m="86220">click,</span> <span m="86990">meaning</span> <span
  m="87440">they</span> <span m="87610">are</span> <span m="87880">fully</span>
  <span m="88210">connected.</span> <span m="88770">Right.</span></p><p><span
  m="89070">Every</span> <span m="89420">node</span> <span m="90150">can</span>
  <span m="90330">talk</span> <span m="90570">to</span> <span
  m="90680">every</span> <span m="90910">other</span> <span
  m="91090">node.</span> <span m="92340">There,</span> <span m="92900">if</span>
  <span m="93000">you</span> <span m="93140">remember,</span> <span
  m="93760">our</span> <span m="94490">solution</span> <span
  m="95555">for</span> <span m="95890">everyone</span> <span m="96240">to</span>
  <span m="96320">generate</span> <span m="96740">a</span> <span
  m="97040">UID</span> <span m="97820">or a</span> <span m="97950">random</span>
  <span m="98230">number.</span> <span m="99100">And</span> <span
  m="99490">if</span> <span m="99640">you</span> <span m="99850">are</span>
  <span m="99970">the</span> <span m="100460">maximum,</span> <span
  m="101350">then</span> <span m="101970">you output,</span> <span
  m="102360">you're the leader</span></p><p><span m="105260">You</span> <span
  m="105370">can</span> <span m="105510">do</span> <span m="105630">that</span>
  <span m="105930">because,</span> <span m="107040">yeah,</span> <span
  m="107410">you</span> <span m="107520">are</span> <span
  m="107630">connected</span> <span m="108010">to</span> <span
  m="108100">everybody.</span> <span m="108610">So</span> <span
  m="108890">you</span> <span m="109170">immediately</span> <span
  m="109630">know</span> <span m="110430">what</span> <span
  m="111000">random</span> <span m="111280">number</span> <span
  m="111600">everybody</span> <span m="112000">generates.</span> <span
  m="112640">And</span> <span m="112980">you</span> <span m="113100">can</span>
  <span m="113230">compare</span> <span m="113630">whether</span> <span
  m="113820">you</span> <span m="113970">are</span> <span m="114070">the</span>
  <span m="114900">largest.</span> <span m="115870">Now,</span> <span
  m="118280">the</span> <span m="118440">idea</span> <span m="118680">is</span>
  <span m="118830">the</span> <span m="118960">same</span> <span
  m="119500">if</span> <span m="119660">we</span> <span m="119890">have</span>
  <span m="120100">a ring.</span></p><p><span m="120830">So</span> <span
  m="121430">you</span> <span m="121580">want</span> <span
  m="121830">everyone</span> <span m="122280">to</span> <span
  m="122540">generate</span> <span m="122770">a</span> <span
  m="122910">ID</span> <span m="123400">or</span> <span m="123640">random</span>
  <span m="123940">number.</span> <span m="124940">I'll</span> <span
  m="125240">just</span> <span m="125420">say</span> <span m="125580">ID</span>
  <span m="126220">from</span> <span m="126410">now on.</span> <span
  m="127550">And</span> <span m="127980">you</span> <span m="128110">want</span>
  <span m="128229">to</span> <span m="128370">collect</span> <span
  m="129220">everyone</span> <span m="129750">else</span> <span
  m="130370">ID</span> <span m="131780">so</span> <span m="131980">that</span>
  <span m="132170">you</span> <span m="132300">know</span> <span
  m="132640">whether</span> <span m="132930">your</span> <span
  m="133120">ID</span> <span m="133610">is</span> <span m="133840">the</span>
  <span m="133940">largest</span> <span m="134580">among</span> <span
  m="135920">all</span> <span m="136380">of</span> <span m="136670">them.</span>
  <span m="138332">OK.</span></p><p><span m="144754">AUDIENCE:
  [INAUDIBLE]</span></p><p>&nbsp;</p><p><span m="149694">LING REN:
  Pardon?</span></p><p><span m="150188">AUDIENCE:
  [INAUDIBLE]</span></p><p>&nbsp;</p><p><span m="154640">LING REN: OK.</span>
  <span m="154830">The</span> <span m="154950">question</span> <span
  m="155390">is</span> <span m="156010">where</span> <span m="156360">did</span>
  <span m="156710">the</span> <span m="156830">comparison</span> <span
  m="157290">happen?</span> <span m="159270">So</span> <span
  m="160270">we</span> <span m="160630">first</span> <span
  m="160900">need</span> <span m="161090">some</span> <span
  m="161330">way</span> <span m="161600">to</span> <span m="161900">pass</span>
  <span m="162200">the</span> <span m="162270">numbers</span> <span
  m="162630">around</span> <span m="163260">such</span> <span
  m="163600">that</span> <span m="163830">everyone</span> <span
  m="164810">has</span> <span m="165150">everyone</span> <span
  m="165560">else's</span> <span m="165880">number.</span> <span
  m="167460">Right.</span> <span m="167870">You</span> <span
  m="168090">have</span> <span m="168250">the</span> <span
  m="168340">number</span> <span m="168650">of</span> <span
  m="168750">everyone,</span> <span m="169270">then</span> <span
  m="169460">you</span> <span m="169590">can</span> <span
  m="169780">compare</span> <span m="170390">whether</span> <span
  m="170660">the</span> <span m="170880">largest</span> <span
  m="171450">equals</span> <span m="171790">yours.</span> <span
  m="173120">OK.</span></p><p><span m="173290">If the</span> <span
  m="173370">largest</span> <span m="173790">equals</span> <span
  m="174050">yours,</span> <span m="174390">then</span> <span
  m="174580">you</span> <span m="175000">know you are</span> <span
  m="175060">the</span> <span m="175140">largest.</span> <span
  m="175630">And</span> <span m="176150">you're</span> <span
  m="176280">going</span> <span m="176470">to</span> <span
  m="176600">output,</span> <span m="178325">I'm the leader.</span> <span
  m="181146">OK.</span> <span m="181630">So</span> <span m="182080">the</span>
  <span m="182520">difficulty</span> <span m="183050">is</span> <span
  m="183270">just</span> <span m="183760">how</span> <span m="183980">to</span>
  <span m="184630">pass</span> <span m="184850">the</span> <span
  m="184930">numbers</span> <span m="185300">around</span> <span
  m="186020">so</span> <span m="186170">that</span> <span
  m="186380">everyone</span> <span m="186800">sees</span> <span
  m="187250">everyone</span> <span m="187610">else's</span> <span
  m="187910">number.</span> <span m="191120">Any</span> <span
  m="191440">ideas?</span> <span m="192790">Simple</span> <span
  m="193150">solution.</span></p><p><span m="219755">Well,</span> <span
  m="220280">there's</span> <span m="220570">not</span> <span
  m="220710">much</span> <span m="220890">you</span> <span m="220980">can</span>
  <span m="221120">do.</span> <span m="221590">You are just</span> <span
  m="221650">connect</span> <span m="222200">to</span> <span
  m="222430">your</span> <span m="222930">two</span> <span
  m="223070">neighbors,</span> <span m="223375">the</span> <span
  m="223680">left</span> <span m="223790">one</span> <span m="223990">and
  the</span> <span m="224280">right</span> <span m="224500">one.</span> <span
  m="234800">So</span> <span m="234980">how</span> <span m="235130">do</span>
  <span m="235210">you</span> <span m="235320">propagate</span> <span
  m="235800">the</span> <span m="236500">information?</span> <span m="246134">Go
  ahead.</span></p><p><span m="247130">AUDIENCE: You can</span> <span
  m="247628">take</span> <span m="248126">the</span> <span
  m="248624">maximum</span> <span m="249122">of</span> <span
  m="249620">your</span> <span m="250118">ID</span> <span m="250616">and
  neighbor's IDs</span> <span m="251114">and</span> <span m="251612">kind</span>
  <span m="252110">of</span> <span m="252608">broadcast</span> <span
  m="253106">that.</span></p><p><span m="254600">LING REN: OK.</span> <span
  m="255120">So</span> <span m="255370">what</span> <span m="255510">does</span>
  <span m="255710">broadcast</span> <span m="256300">mean</span> <span
  m="256519">here?</span></p><p><span m="256991">AUDIENCE: Like tell your</span>
  <span m="257463">neighbors</span> <span m="257935">what the</span> <span
  m="258407">largest</span> <span m="258879">of</span> <span
  m="259351">your</span> <span m="259823">value</span> <span
  m="260295">[INAUDIBLE]</span></p><p><span m="261720">LING REN: OK.</span>
  <span m="263230">And</span> <span m="263650">yes.</span> <span m="265170">Let
  me</span> <span m="265350">call them</span> <span m="265870">A,</span> <span
  m="266050">B,</span> <span m="266535">C,</span> <span m="268960">E,</span>
  <span m="269445">F.</span> <span m="270900">Then,</span> <span
  m="271240">yes,</span> <span m="271510">C</span> <span m="271630">can</span>
  <span m="271790">tell</span> <span m="271970">D</span> <span m="272650">or can
  tell</span> <span m="273010">B,</span> <span m="273370">but</span> <span
  m="273750">how does</span> <span m="274080">C</span> <span
  m="274380">tell</span> <span m="274680">E?</span></p><p><span
  m="281498">AUDIENCE:</span> <span m="281985">It</span> <span
  m="282472">waited</span> <span m="282959">around</span> <span
  m="283446">to</span> <span m="284420">I guess</span> <span
  m="284907">propagate</span> <span m="285394">the</span> <span
  m="285881">maximum.</span></p><p><span m="287350">LING REN: Yep.</span> <span
  m="287850">So</span> <span m="290310">it</span> <span m="290360">would</span>
  <span m="290520">be</span> <span m="291300">just,</span> <span
  m="292280">say,</span> <span m="292920">everyone</span> <span
  m="293630">talks</span> <span m="293970">to</span> <span m="294140">its</span>
  <span m="294490">right</span> <span m="294740">neighbor.</span> <span
  m="295660">And</span> <span m="295820">then</span> <span m="296050">B</span>
  <span m="296220">has A's</span> <span m="296670">IDs,</span> <span
  m="297220">C</span> <span m="297430">these</span> <span m="297640">B's
  ID,</span> <span m="298080">D</span> <span m="298240">has C's</span> <span
  m="298430">ID,</span> <span m="298930">and</span> <span m="299120">then</span>
  <span m="299850">continue</span> <span m="300570">and</span> <span
  m="301500">pass</span> <span m="301630">around</span> <span
  m="301940">next</span> <span m="302170">time.</span> <span
  m="305390">So</span> <span m="306220">just</span> <span m="306440">to</span>
  <span m="306500">make</span> <span m="306660">it</span> <span
  m="306780">perfect clear.</span></p><p><span m="308260">Say</span> <span
  m="309170">they</span> <span m="309310">generate</span> <span
  m="309810">some</span> <span m="310020">random</span> <span
  m="310330">IDs</span> <span m="311420">that's</span> <span m="313070">5,
  10,</span> <span m="313435">20.</span> <span m="315280">And</span> <span
  m="315430">then</span> <span m="315710">in</span> <span m="315790">the</span>
  <span m="315990">next round,</span> <span m="316660">A</span> <span
  m="317000">would</span> <span m="317230">send</span> <span
  m="317560">its</span> <span m="317750">ID</span> <span m="318120">to</span>
  <span m="318330">B,</span> <span m="318880">B would</span> <span
  m="319230">send</span> <span m="319480">its</span> <span m="319580">ID</span>
  <span m="319660">to</span> <span m="320010">C,</span> <span
  m="320570">C</span> <span m="320660">would</span> <span m="320910">send</span>
  <span m="321030">its</span> <span m="321110">ID</span> <span
  m="321385">to</span> <span m="321660">D.</span> <span m="322470">And</span>
  <span m="322600">in</span> <span m="322680">the</span> <span
  m="322780">next</span> <span m="323100">round,</span> <span
  m="323750">B</span> <span m="323960">would</span> <span m="324150">pass</span>
  <span m="324430">this</span> <span m="324620">information</span> <span
  m="325360">along</span> <span m="325520">to</span> <span m="325620">C.</span>
  <span m="327000">And</span> <span m="327150">C</span> <span
  m="327260">would</span> <span m="327400">pass</span> <span
  m="327650">the</span> <span m="327750">information</span> <span
  m="328220">to</span> <span m="328320">D.</span> <span m="328930">And</span>
  <span m="330540">just</span> <span m="330730">continue.</span></p><p><span
  m="331320">And</span> <span m="332496">eventually</span> <span
  m="333180">everyone</span> <span m="333610">will</span> <span
  m="334060">have</span> <span m="334470">everyone</span> <span
  m="334790">else's</span> <span m="335080">ID.</span> <span
  m="336240">So</span> <span m="336400">how</span> <span m="336510">many</span>
  <span m="336760">rounds</span> <span m="338250">do</span> <span
  m="338340">we</span> <span m="338440">need?</span> <span m="351790">If</span>
  <span m="351990">they</span> <span m="352130">are</span> <span
  m="352440">in</span> <span m="353170">nodes</span> <span m="356960">in</span>
  <span m="357070">the</span> <span m="357140">system.</span></p><p><span
  m="358007">AUDIENCE: I think</span> <span m="358464">probably in</span> <span
  m="358921">just one</span> <span m="359378">direction</span> <span
  m="359835">or two</span> <span m="360292">neighbors.</span></p><p><span
  m="362110">LING REN: I</span> <span m="362440">think</span> <span
  m="362630">you</span> <span m="362710">can</span> <span m="362850">do</span>
  <span m="363020">it</span> <span m="363180">either</span> <span
  m="363370">way.</span> <span m="365190">If</span> <span m="365350">you</span>
  <span m="365510">propagate</span> <span m="365980">both</span> <span
  m="366210">ways,</span> <span m="366440">it</span> <span
  m="366510">probably</span> <span m="367630">2x</span> <span
  m="368030">faster,</span> <span m="368480">yeah.</span></p><p><span
  m="369914">AUDIENCE: [INAUDIBLE]</span></p><p><span m="371390">LING REN:
  Yeah,</span> <span m="371882">correct.</span> <span m="372870">It's</span>
  <span m="373090">just</span> <span m="373300">O(n).</span> <span
  m="374700">But</span> <span m="374940">to</span> <span m="375250">keep</span>
  <span m="375410">it</span> <span m="375540">simple,</span> <span
  m="375940">let's</span> <span m="376190">say</span> <span m="376320">we</span>
  <span m="376490">just</span> <span m="376810">propagate</span> <span
  m="377095">in</span> <span m="377380">one</span> <span
  m="377560">direction.</span> <span m="378240">That's</span> <span
  m="378480">also</span> <span m="378700">fine.</span> <span m="379030">Still
  O(n).</span> <span m="381340">So</span> <span m="381470">how</span> <span
  m="381580">many</span> <span m="381800">messages</span> <span
  m="382730">are</span> <span m="382870">sent</span> <span m="383400">in</span>
  <span m="383560">total?</span></p><p><span m="385983">AUDIENCE:</span> <span
  m="386464">n</span> <span m="386945">squared.</span></p><p><span
  m="388388">LING REN: Pardon?</span></p><p><span m="389831">AUDIENCE: n
  squared.</span></p><p><span m="390320">LING REN: n</span> <span
  m="391340">squared.</span> <span m="391450">Yep.</span> <span
  m="394590">Is</span> <span m="394740">that</span> <span
  m="395270">obvious</span> <span m="395820">to</span> <span
  m="395920">everyone?</span> <span m="397870">OK.</span> <span
  m="398160">Give</span> <span m="398320">an</span> <span
  m="398430">explanation.</span></p><p><span m="400490">AUDIENCE: Yeah, at each
  round</span> <span m="401470">everyone sends</span> <span m="401960">a
  message</span> <span m="402450">to</span> <span m="402940">its</span> <span
  m="403920">neighbors.</span></p><p><span m="404900">LING REN: Yeah.</span>
  <span m="405900">Yeah.</span> <span m="408030">Every</span> <span
  m="408290">round,</span> <span m="408570">everyone</span> <span
  m="408890">sends</span> <span m="409110">a</span> <span
  m="409160">message.</span> <span m="410350">Or</span> <span
  m="410740">you</span> <span m="410830">can</span> <span
  m="411150">think</span> <span m="411370">of</span> <span
  m="411750">every</span> <span m="412750">message</span> <span
  m="413180">as</span> <span m="413320">propagated</span> <span
  m="413870">n</span> <span m="414010">times.</span> <span m="414550">And</span>
  <span m="414970">there</span> <span m="415180">are n</span> <span
  m="415290">messages</span> <span m="415790">in total.</span> <span
  m="418700">OK.</span></p><p><span m="420220">Yeah.</span> <span
  m="420670">That's</span> <span m="421020">definitely</span> <span
  m="421440">a</span> <span m="421510">solution.</span> <span
  m="424180">Well,</span> <span m="424460">you</span> <span
  m="424590">can</span> <span m="424700">imagine,</span> <span
  m="425100">it's</span> <span m="425260">probably</span> <span
  m="425640">the</span> <span m="425770">naive</span> <span
  m="426060">solution.</span> <span m="427000">And</span> <span
  m="428090">can</span> <span m="428290">we</span> <span m="428410">do</span>
  <span m="428600">better</span> <span m="428840">than</span> <span
  m="429020">that?</span></p><p><span m="434566">AUDIENCE: In this case,</span>
  <span m="435052">are</span> <span m="435538">we</span> <span
  m="436024">assuming</span> <span m="436510">they</span> <span m="436996">know
  that</span> <span m="437482">there are</span> <span m="437968">n of
  them?</span></p><p><span m="441380">LING REN: OK.</span> <span
  m="442280">Good</span> <span m="442430">question.</span> <span
  m="443370">So</span> <span m="443600">if</span> <span m="444490">they</span>
  <span m="444620">know</span> <span m="444950">there</span> <span
  m="445210">are</span> <span m="445310">n</span> <span m="445490">of</span>
  <span m="445600">them,</span> <span m="446020">yep,</span> <span
  m="446310">then</span> <span m="446590">they</span> <span
  m="446740">know</span> <span m="446900">how</span> <span m="447020">to</span>
  <span m="447110">terminate.</span> <span m="447530">So</span> <span
  m="447640">your</span> <span m="447760">question</span> <span
  m="448020">is</span> <span m="448150">how</span> <span m="448270">to</span>
  <span m="448360">terminate,</span> <span m="448560">right?</span> <span
  m="450230">If</span> <span m="450420">they</span> <span
  m="450580">don't,</span> <span m="451740">eventually</span> <span
  m="452280">you</span> <span m="452410">will</span> <span
  m="452580">receive</span> <span m="453000">your</span> <span
  m="453220">own</span> <span m="454070">ID</span> <span m="455070">on</span>
  <span m="455210">the</span> <span m="455290">other</span> <span
  m="455450">side.</span></p><p><span m="456230">If</span> <span
  m="456400">we</span> <span m="456620">keep</span> <span
  m="456820">sending</span> <span m="457170">left,</span> <span
  m="457950">eventually</span> <span m="458490">you</span> <span
  m="458850">will</span> <span m="458980">receive</span> <span
  m="459210">it</span> <span m="459310">on</span> <span m="459420">the</span>
  <span m="459500">left</span> <span m="459690">port.</span> <span
  m="460600">And,</span> <span m="460930">yeah,</span> <span
  m="463080">that's</span> <span m="463280">an</span> <span
  m="463330">indication</span> <span m="463840">of</span> <span
  m="463990">termination.</span> <span m="467504">Question?</span></p><p><span
  m="467998">AUDIENCE: Are we</span> <span m="468492">assuming the
  trajectory</span> <span m="468986">that these</span> <span m="469480">are
  unique?</span></p><p><span m="471460">LING REN: Yeah.</span> <span
  m="471790">We</span> <span m="472080">usually</span> <span
  m="473190">assume</span> <span m="473500">that,</span> <span
  m="473760">yeah.</span> <span m="475480">Either</span> <span
  m="476150">it's</span> <span m="476450">a</span> <span
  m="476940">unique</span> <span m="478450">user--</span> <span
  m="479290">sorry,</span> <span m="479630">UID.</span> <span
  m="480420">What</span> <span m="480600">does</span> <span m="480840">U stand
  for</span> <span m="481190">by the</span> <span m="481270">way?</span> <span
  m="482260">Or</span> <span m="483290">if</span> <span m="483470">you</span>
  <span m="483710">generate</span> <span m="484270">random</span> <span
  m="484460">numbers</span> <span m="484940">in</span> <span m="485070">a</span>
  <span m="485130">large</span> <span m="485990">range,</span> <span
  m="486630">it's</span> <span m="486880">very</span> <span
  m="487090">unlikely</span> <span m="487530">that</span> <span
  m="487700">they</span> <span m="487810">collide.</span></p><p><span
  m="500560">OK.</span> <span m="501310">So</span> <span m="501520">can</span>
  <span m="501660">we</span> <span m="501760">do</span> <span
  m="501890">better</span> <span m="502110">than</span> <span
  m="502260">that?</span> <span m="517990">You</span> <span
  m="518230">have</span> <span m="518280">some</span> <span
  m="518390">idea?</span></p><p><span m="520700">AUDIENCE: Once</span> <span
  m="522170">something</span> <span m="524130">[INAUDIBLE]</span> <span
  m="527560">where</span> <span m="528050">you only pass</span> <span
  m="528540">it to the</span> <span m="529030">one</span> <span
  m="529520">that's bigger.</span></p><p><span m="532470">LING REN:
  Hm-mm.</span> <span m="532870">OK.</span> <span m="533200">I</span> <span
  m="533320">think</span> <span m="533530">you</span> <span
  m="533630">have</span> <span m="533830">two</span> <span
  m="533970">ideas.</span> <span m="534490">And</span> <span
  m="536020">binary</span> <span m="536250">search,</span> <span
  m="536700">we'll</span> <span m="537000">see</span> <span
  m="537210">how</span> <span m="537360">that</span> <span
  m="537540">works</span> <span m="537780">later.</span> <span
  m="538080">So</span> <span m="538550">you</span> <span m="538700">said</span>
  <span m="539690">only</span> <span m="540020">forward</span> <span
  m="540340">something</span> <span m="540680">that's</span> <span
  m="541080">larger?</span> <span m="541250">0</span></p><p><span
  m="542834">AUDIENCE: Yeah,</span> <span m="543312">like only</span> <span
  m="543790">forward  things</span> <span m="544268">are
  larger.</span></p><p><span m="548092">LING REN: OK,</span> <span
  m="548570">yeah,</span> <span m="548810">that's</span> <span
  m="549120">on</span> <span m="549240">the</span> <span m="549310">right</span>
  <span m="549450">track.</span> <span m="549930">So</span> <span
  m="550580">one</span> <span m="551940">obvious</span> <span
  m="552205">thing</span> <span m="552470">we</span> <span m="552700">can</span>
  <span m="552860">do</span> <span m="553490">is</span> <span
  m="553730">that</span> <span m="554405">so</span> <span m="554730">we</span>
  <span m="555020">actually</span> <span m="555350">don't</span> <span
  m="555680">care</span> <span m="556270">what</span> <span
  m="557210">all</span> <span m="557550">the</span> <span m="557670">IDs</span>
  <span m="558130">are,</span> <span m="558440">right.</span> <span
  m="558920">We</span> <span m="559070">only</span> <span m="559330">care</span>
  <span m="559740">whether</span> <span m="560840">a</span> <span
  m="560940">certain</span> <span m="561260">ID's</span> <span
  m="561690">the</span> <span m="561770">largest.</span> <span
  m="563100">So</span> <span m="563420">for</span> <span
  m="563540">example,</span> <span m="564070">in</span> <span
  m="564170">this</span> <span m="564270">case,</span> <span
  m="564930">when</span> <span m="565220">A</span> <span m="565770">send</span>
  <span m="566440">its</span> <span m="567140">ID</span> <span
  m="567450">5</span> <span m="567865">to B,</span> <span m="569060">B</span>
  <span m="569210">knows</span> <span m="569600">this</span> <span
  m="569850">5</span> <span m="570410">won't</span> <span m="570710">be</span>
  <span m="570840">the</span> <span m="570980">leader.</span></p><p><span
  m="572236">All right.</span> <span m="572710">Because</span> <span
  m="573150">5</span> <span m="573420">is</span> <span m="573540">too
  small.</span> <span m="573970">It's</span> <span m="574230">even</span> <span
  m="574460">smaller</span> <span m="574830">than</span> <span
  m="575230">his</span> <span m="575410">ID.</span> <span m="576220">So</span>
  <span m="577240">we</span> <span m="577360">can</span> <span
  m="577520">choose</span> <span m="577760">to</span> <span
  m="577890">drop</span> <span m="578170">this</span> <span
  m="578330">message.</span> <span m="580190">There's</span> <span
  m="580410">no</span> <span m="580550">point</span> <span m="580880">in</span>
  <span m="581030">passing</span> <span m="581340">that</span> <span
  m="581510">message</span> <span m="582500">further.</span></p><p><span
  m="584720">Same</span> <span m="584940">thing</span> <span
  m="585140">for</span> <span m="585700">this</span> <span
  m="586280">message.</span> <span m="586810">C</span> <span
  m="587100">knows</span> <span m="587570">that</span> <span
  m="588110">10</span> <span m="588540">is</span> <span m="588660">too</span>
  <span m="588810">small.</span> <span m="589420">And</span> <span
  m="589860">it</span> <span m="589980">doesn't</span> <span
  m="590200">have</span> <span m="590390">to</span> <span m="590900">pass</span>
  <span m="591110">it</span> <span m="591330">along.</span></p><p><span
  m="593980">AUDIENCE: [INAUDIBLE]</span></p><p>&nbsp;</p><p><span
  m="598940">LING REN: Oh, the</span> <span m="599180">ID?</span> <span
  m="599940">It's</span> <span m="600060">just</span> <span
  m="600220">the</span> <span m="600290">integer</span> <span
  m="600850">each</span> <span m="601120">node</span> <span
  m="601790">chooses</span> <span m="602910">at</span> <span
  m="603100">random.</span> <span m="603460">See.</span> <span
  m="606210">Yeah,</span> <span m="606410">the</span> <span
  m="606610">only</span> <span m="607160">purpose</span> <span
  m="607630">of</span> <span m="607920">the</span> <span m="608160">ID</span>
  <span m="608465">is</span> <span m="608770">to</span> <span
  m="609110">break</span> <span m="609750">symmetry.</span> <span
  m="610280">So,</span> <span m="611000">yeah.</span> <span
  m="611720">Like</span> <span m="611890">we</span> <span m="611990">have</span>
  <span m="612140">seen</span> <span m="612440">the</span> <span
  m="612530">lecture,</span> <span m="612950">if</span> <span
  m="613250">they</span> <span m="613610">don't</span> <span
  m="613850">do</span> <span m="613930">this,</span> <span m="614230">if</span>
  <span m="614360">they</span> <span m="614470">don't</span> <span
  m="614670">have</span> <span m="614850">any</span> <span
  m="615660">unique</span> <span m="615990">identifier,</span> <span
  m="617500">they</span> <span m="617610">won't</span> <span
  m="617800">be</span> <span m="617940">able</span> <span m="618110">to</span>
  <span m="618230">select</span> <span m="618590">the</span> <span
  m="618690">leader.</span></p><p><span m="621570">And</span> <span
  m="622610">when</span> <span m="622770">they</span> <span
  m="622910">have</span> <span m="623140">a</span> <span
  m="623170">unique</span> <span m="623800">number,</span> <span
  m="625120">then</span> <span m="625570">they</span> <span
  m="625700">can</span> <span m="625880">select,</span> <span
  m="626390">yeah,</span> <span m="626730">the</span> <span
  m="626810">largest</span> <span m="627190">one</span> <span m="627570">or
  smallest</span> <span m="628100">one</span> <span m="629690">in</span> <span
  m="629790">some</span> <span m="629970">way.</span> <span
  m="634512">OK.</span> <span m="634990">Does</span> <span
  m="635210">this</span> <span m="635660">optimization</span> <span
  m="636300">make sense?</span> <span m="637190">We</span> <span
  m="637330">can</span> <span m="637750">cut</span> <span
  m="638150">[INAUDIBLE]</span> <span m="638720">messages</span> <span
  m="640190">that</span> <span m="642650">have</span> <span m="642860">no</span>
  <span m="643020">chance</span> <span m="644260">of</span> <span
  m="644430">becoming</span> <span m="644890">the</span> <span
  m="645320">leader.</span></p><p><span m="647582">AUDIENCE: What is</span>
  <span m="648065">the upper</span> <span m="648548">bound of it?</span> <span
  m="649031">Is it</span> <span m="649514">still</span> <span m="649997">n
  squared?</span></p><p><span m="651450">LING REN: Correct.</span> <span
  m="652060">Yeah.</span> <span m="652520">That's</span> <span
  m="654440">a</span> <span m="654540">very</span> <span m="654610">good</span>
  <span m="654760">question</span> <span m="655060">and</span> <span
  m="655310">very</span> <span m="655490">good</span> <span
  m="655650">answer,</span> <span m="655870">by the</span> <span
  m="656050">way.</span> <span m="657300">But</span> <span m="658450">how</span>
  <span m="658600">effective</span> <span m="659060">is</span> <span
  m="659240">this?</span> <span m="660660">Well</span> <span
  m="660970">in</span> <span m="661130">average</span> <span
  m="661450">case,</span> <span m="662260">we</span> <span m="662420">may</span>
  <span m="662580">be</span> <span m="662750">able</span> <span
  m="662950">to</span> <span m="663050">drop</span> <span m="663460">some</span>
  <span m="663720">messages.</span> <span m="664510">But</span> <span
  m="664780">there</span> <span m="665670">pathological</span> <span
  m="666250">case</span> <span m="667000">where</span> <span
  m="667680">it</span> <span m="667840">actually</span> <span
  m="668190">doesn't</span> <span m="668440">help</span> <span
  m="668650">at</span> <span m="668780">all.</span></p><p><span
  m="669270">Say</span> <span m="670880">this</span> <span m="671060">is</span>
  <span m="671220">the ID we</span> <span m="671650">choose.</span> <span
  m="672530">Then</span> <span m="672880">when</span> <span m="673040">there's
  20,</span> <span m="673440">it</span> <span m="673900">send</span> <span
  m="674180">around.</span> <span m="675450">B</span> <span
  m="676340">cannot</span> <span m="676670">drop</span> <span
  m="676860">it.</span> <span m="677180">Right, because</span> <span
  m="678390">it</span> <span m="678620">may</span> <span m="678860">be</span>
  <span m="679010">the</span> <span m="679410">largest.</span> <span
  m="680320">And</span> <span m="680450">when</span> <span
  m="680570">this</span> <span m="680770">10</span> <span m="681040">is</span>
  <span m="681460">sent to</span> <span m="681840">C,</span> <span m="682320">C
  cannot</span> <span m="682590">drop</span> <span m="682810">it.</span> <span
  m="683240">And when</span> <span m="683590">20</span> <span
  m="683720">comes</span> <span m="683960">along,</span> <span
  m="684300">it</span> <span m="684460">also</span> <span
  m="684820">cannot</span> <span m="685120">drop</span> <span
  m="685330">it.</span></p><p><span m="686130">So</span> <span
  m="687140">no</span> <span m="687350">node</span> <span m="687610">can</span>
  <span m="687870">drop</span> <span m="688190">any</span> <span
  m="688400">message.</span> <span m="690420">Its</span> <span
  m="690730">worst</span> <span m="691050">case</span> <span
  m="691280">is</span> <span m="691410">still</span> <span m="692030">n</span>
  <span m="692210">square.</span> <span m="712060">OK.</span></p><p><span
  m="712270">So</span> <span m="712440">let's</span> <span
  m="712690">think</span> <span m="712860">about</span> <span
  m="713190">the</span> <span m="714960">binary</span> <span
  m="715370">search</span> <span m="715930">equivalent,</span> <span
  m="717880">yeah,</span> <span m="718320">or</span> <span m="718670">how</span>
  <span m="718840">to binary</span> <span m="719090">search</span> <span
  m="719470">in</span> <span m="719560">this</span> <span
  m="719820">case.</span></p><p><span m="727968">AUDIENCE: So</span> <span
  m="728451">binary</span> <span m="728934">is</span> <span
  m="729417">[INAUDIBLE]</span> <span m="729900">what?</span></p><p><span
  m="731349">LING REN: Yeah,</span> <span m="731840">good</span> <span
  m="731970">question.</span> <span m="732380">It's</span> <span
  m="732780">not</span> <span m="732970">very</span> <span
  m="733830">obvious</span> <span m="734820">binary</span> <span
  m="735110">searching</span> <span m="735450">to</span> <span
  m="735640">what.</span> <span m="738800">I</span> <span
  m="739540">Yeah,</span> <span m="739790">just</span> <span
  m="739940">some</span> <span m="740450">binary</span> <span
  m="740900">idea</span> <span m="742780">that</span> <span
  m="743530">will</span> <span m="743770">give</span> <span m="743970">us</span>
  <span m="744595">a</span> <span m="745030">n</span> <span
  m="745250">log</span> <span m="745480">end bound.</span> <span
  m="746510">So</span> <span m="746740">actually</span> <span
  m="748040">this</span> <span m="748320">is</span> <span m="748630">the
  better</span> <span m="748860">logarithm.</span> <span m="749640">But</span>
  <span m="749850">once</span> <span m="750160">you</span> <span
  m="750310">have</span> <span m="750500">a</span> <span m="750540">log</span>
  <span m="750830">n,</span> <span m="751120">you</span> <span
  m="751520">can</span> <span m="751690">probably</span> <span
  m="752020">get--</span> <span m="752240">OK,</span> <span m="752430">go
  ahead.</span></p><p><span m="752773">AUDIENCE: How</span> <span
  m="753116">about</span> <span m="754055">kind of</span> <span
  m="754470">merging,</span> <span m="755360">like</span> <span
  m="756037">instead</span> <span m="757031">of finding the</span> <span
  m="758025">[INAUDIBLE],</span> <span m="759019">finding</span> <span
  m="759516">like</span> <span m="760013">log</span> <span
  m="760510">maximum,</span> <span m="761007">then</span> <span
  m="761504">[INAUDIBLE].</span></p><p><span m="763500">LING REN: Yeah.</span>
  <span m="763980">That's</span> <span m="764160">on</span> <span
  m="764260">the</span> <span m="764330">right</span> <span
  m="764480">track,</span> <span m="764900">yeah.</span></p><p><span
  m="766832">AUDIENCE: Like clusters</span> <span m="767315">of some</span>
  <span m="767798">[INAUDIBLE].</span></p><p><span m="771190">LING REN:
  Yeah.</span> <span m="771240">That's</span> <span m="771480">definitely</span>
  <span m="771960">the</span> <span m="772740">right</span> <span
  m="772980">idea.</span> <span m="775440">Let's</span> <span
  m="776040">detail</span> <span m="776200">it</span> <span m="776400">a</span>
  <span m="777050">little</span> <span m="777250">bit.</span> <span
  m="778630">How</span> <span m="778710">do you</span> <span m="778880">carry
  it</span> <span m="779210">out?</span> <span
  m="796274">Hm-mm.</span></p><p><span m="797266">AUDIENCE: Divide</span> <span
  m="798258">the</span> <span m="798754">two</span> <span
  m="799250">parts.</span> <span m="804210">Like</span> <span m="804710">kind of
  the</span> <span m="805105">[INAUDIBLE].</span></p><p><span m="807170">LING
  REN: And,</span> <span m="808000">OK,</span> <span m="808340">so</span> <span
  m="808580">then</span> <span m="808900">it's</span> <span
  m="809240">let</span> <span m="809440">them</span> <span
  m="809590">select</span> <span m="809950">their</span> <span
  m="810110">leader</span> <span m="811340">respectively</span> <span
  m="812150">and</span> <span m="813580">compare</span> <span
  m="813940">which</span> <span m="814160">one</span> <span m="814360">is</span>
  <span m="814480">larger.</span> <span m="815710">It's</span> <span
  m="816160">interesting</span> <span m="817095">thought.</span></p><p><span
  m="828975">AUDIENCE: First,</span> <span m="829470">for example,</span> <span
  m="829965">A,</span> <span m="830460">B</span> <span m="830955">finds
  the</span> <span m="831450">maximum</span> <span m="831945">between</span>
  <span m="832440">these</span> <span m="832935">two,</span> <span
  m="833430">the C,</span> <span m="833925">D finds</span> <span m="834420">the
  maximum</span> <span m="834915">E</span> <span m="835410">[INAUDIBLE]</span>
  <span m="835905">maximum.</span> <span m="837885">Kind of</span> <span
  m="838380">merging,</span> <span m="838875">considering</span> <span
  m="839370">them</span> <span m="839865">as one</span> <span
  m="840360">node.</span></p><p><span m="843360">LING REN: I</span> <span
  m="843380">think</span> <span m="843570">the</span> <span
  m="843710">first</span> <span m="844010">difficulty</span> <span
  m="844460">I</span> <span m="844530">see</span> <span m="844930">is</span>
  <span m="845140">that</span> <span m="845370">if</span> <span
  m="845480">you</span> <span m="845810">cut</span> <span m="846060">it</span>
  <span m="846230">by</span> <span m="846530">half,</span> <span
  m="846870">it's</span> <span m="847060">no</span> <span m="847220">longer
  a</span> <span m="847660">ring,</span> <span
  m="848658">right.</span></p><p><span m="853149">AUDIENCE: Also they</span>
  <span m="853648">can't</span> <span m="854147">cut themselves</span> <span
  m="854646">in half.</span></p><p><span m="857150">LING REN: Yeah.</span> <span
  m="857830">Yeah.</span> <span m="858190">Correct.</span> <span
  m="858700">Yeah,</span> <span m="859690">yeah.</span></p><p><span
  m="883952">Yeah,</span> <span m="884490">it's</span> <span
  m="884630">definitely</span> <span m="884940">not an</span> <span
  m="885190">easy</span> <span m="886930">problem,</span> <span m="888480">not
  a</span> <span m="888710">easy</span> <span m="889020">algorithm.</span> <span
  m="894370">And</span> <span m="894880">the</span> <span m="894970">idea</span>
  <span m="896350">is</span> <span m="896620">to,</span> <span
  m="899720">well,</span> <span m="900480">you had</span> <span
  m="900700">the</span> <span m="900760">right</span> <span
  m="900940">idea.</span> <span m="901330">That</span> <span
  m="901560">we</span> <span m="901690">want</span> <span m="901920">to--</span>
  <span m="905980">what's the word?</span> <span m="907380">Let</span> <span
  m="907670">the</span> <span m="908100">weak</span> <span
  m="908460">candidates</span> <span m="909070">shut</span> <span
  m="909360">up</span> <span m="909670">early.</span></p><p><span
  m="912630">So</span> <span m="912880">what</span> <span m="913010">I</span>
  <span m="913050">mean</span> <span m="913230">by</span> <span
  m="913360">that</span> <span m="913600">is</span> <span m="914280">say</span>
  <span m="915700">we</span> <span m="915840">have</span> <span
  m="916000">several</span> <span m="916310">round,</span> <span m="917020">so
  this</span> <span m="917370">B</span> <span m="917790">and</span> <span
  m="918010">A</span> <span m="918240">and C.</span> <span m="919290">We</span>
  <span m="919420">will</span> <span m="919580">that</span> <span
  m="919810">B</span> <span m="920850">only</span> <span
  m="921890">propagate</span> <span m="922330">to</span> <span
  m="922490">A</span> <span m="922640">and C</span> <span
  m="922960">first.</span> <span m="925690">If</span> <span m="925970">B</span>
  <span m="927040">is</span> <span m="927390">the</span> <span
  m="927510">local</span> <span m="927860">maximum</span> <span
  m="928660">among</span> <span m="929260">A, B,</span> <span
  m="929520">C,</span> <span m="930350">then</span> <span m="930600">B</span>
  <span m="930820">will</span> <span m="931010">try</span> <span
  m="931280">to</span> <span m="931750">talk</span> <span
  m="932030">further.</span> <span m="935000">Increase</span> <span
  m="935305">its</span> <span m="935610">range.</span></p><p><span
  m="936430">If</span> <span m="936750">B</span> <span m="936900">is</span>
  <span m="937040">not</span> <span m="937310">the</span> <span
  m="937400">local</span> <span m="937820">maximum</span> <span
  m="938165">of</span> <span m="938510">A, B,</span> <span m="938775">C,</span>
  <span m="939430">then,</span> <span m="939785">yeah,</span> <span
  m="940140">it</span> <span m="940400">can</span> <span m="940550">be</span>
  <span m="940650">quiet.</span> <span m="941600">Doesn't</span> <span
  m="941800">need</span> <span m="941940">to</span> <span m="942050">send</span>
  <span m="942260">messages</span> <span m="942650">anymore.</span> <span
  m="944460">If</span> <span m="944760">B</span> <span
  m="944890">succeeds</span> <span m="945350">in</span> <span
  m="945450">the</span> <span m="945540">next</span> <span
  m="945790">round,</span> <span m="946170">then</span> <span
  m="946370">you</span> <span m="946550">go</span> <span
  m="947070">further</span> <span m="947480">increase</span> <span
  m="947760">its</span> <span m="948040">range</span> <span m="949430">to</span>
  <span m="949620">try</span> <span m="949850">to</span> <span
  m="950450">talk</span> <span m="950700">to</span> <span m="950900">more
  people.</span> <span m="955670">OK.</span></p><p><span m="956310">So</span>
  <span m="956780">how</span> <span m="957150">does</span> <span
  m="957310">it</span> <span m="957370">work in</span> <span
  m="957670">detail?</span> <span m="960910">Well</span> <span
  m="962690">so</span> <span m="962930">in</span> <span m="963150">round</span>
  <span m="963500">I,</span> <span m="966650">we will</span> <span
  m="966870">let</span> <span m="967050">a</span> <span m="967350">node</span>
  <span m="967950">send</span> <span m="968260">this</span> <span
  m="968420">message</span> <span m="969350">up</span> <span
  m="969560">to</span> <span m="970450">2</span> <span m="970920">raised</span>
  <span m="971130">to</span> <span m="971220">I</span> <span
  m="972580">hops.</span> <span m="976190">In</span> <span
  m="976340">this</span> <span m="976570">case,</span> <span
  m="976780">is</span> <span m="976950">1</span> <span m="977580">and</span>
  <span m="978240">in</span> <span m="978620">next</span> <span
  m="978870">round</span> <span m="979050">is</span> <span m="979170">2</span>
  <span m="979430">and</span> <span m="979690">then</span> <span
  m="980220">4.</span></p><p><span m="984090">If</span> <span
  m="984940">at</span> <span m="985110">any</span> <span m="985330">point</span>
  <span m="986130">some</span> <span m="986490">mode</span> <span
  m="987320">like</span> <span m="987760">along</span> <span
  m="988110">this</span> <span m="988310">range</span> <span
  m="989460">decides</span> <span m="990010">that</span> <span
  m="990590">you</span> <span m="990770">are</span> <span m="990840">not</span>
  <span m="991060">the</span> <span m="991480">local</span> <span
  m="991790">maximum,</span> <span m="992940">then</span> <span
  m="993890">they</span> <span m="994000">will</span> <span
  m="994220">reply</span> <span m="995040">that,</span> <span
  m="995350">yeah,</span> <span m="997290">you</span> <span m="997410">no</span>
  <span m="997530">longer</span> <span m="997790">need</span> <span
  m="997940">to</span> <span m="998050">send</span> <span
  m="998260">messages</span> <span m="998710">anymore.</span> <span
  m="1000600">If</span> <span m="1000840">this</span> <span
  m="1001040">message</span> <span m="1001700">successfully</span> <span
  m="1003030">reaches</span> <span m="1004390">this</span> <span
  m="1004640">endpoint</span> <span m="1005360">that</span> <span
  m="1005620">2</span> <span m="1005935">raised</span> <span
  m="1006250">to</span> <span m="1006350">I</span> <span
  m="1006720">hops,</span> <span m="1007560">then</span> <span
  m="1007740">this</span> <span m="1007940">guy</span> <span
  m="1008170">will</span> <span m="1008420">respond.</span></p><p><span
  m="1008980">And</span> <span m="1009160">this</span> <span
  m="1009330">guy,</span> <span m="1009570">if</span> <span
  m="1009910">it</span> <span m="1010160">still</span> <span
  m="1010510">thinks</span> <span m="1011720">you</span> <span
  m="1011850">are</span> <span m="1011920">the</span> <span
  m="1012030">local</span> <span m="1012290">maximum,</span> <span
  m="1012890">then</span> <span m="1013140">it</span> <span
  m="1013300">will</span> <span m="1013480">respond</span> <span
  m="1013960">the</span> <span m="1014060">message</span> <span
  m="1016570">while</span> <span m="1016790">saying, yeah,</span> <span
  m="1017210">continue.</span> <span m="1023250">OK.</span> <span
  m="1023750">And</span> <span m="1024599">if</span> <span
  m="1025980">the</span> <span m="1026109">sender</span> <span
  m="1027300">receives</span> <span m="1028060">the continue</span> <span
  m="1028730">message</span> <span m="1029430">on</span> <span
  m="1029579">both</span> <span m="1029829">sides,</span> <span
  m="1031190">then</span> <span m="1031510">they</span> <span
  m="1031650">it</span> <span m="1031900">continue</span> <span
  m="1032290">into</span> <span m="1032490">the</span> <span
  m="1032569">next</span> <span m="1032839">round.</span> <span
  m="1034190">Otherwise,</span> <span m="1034920">it</span> <span
  m="1035130">will</span> <span m="1035380">go</span> <span
  m="1035589">inactive.</span> <span m="1040810">Is the</span> <span
  m="1040910">algorithm</span> <span m="1041050">clear?</span></p><p><span
  m="1055672">AUDIENCE: If the problem</span> <span m="1056170">reaches
  the</span> <span m="1056668">next</span> <span m="1057166">maximum,</span>
  <span m="1057664">like</span> <span m="1058162">next</span> <span
  m="1058660">the node</span> <span m="1059158">each</span> <span
  m="1059656">has</span> <span m="1060154">to send a</span> <span
  m="1060652">message.</span></p><p><span m="1062160">LING REN: Say</span> <span
  m="1062320">that</span> <span m="1062580">again.</span></p><p><span
  m="1062770">AUDIENCE: Like</span> <span m="1063260">after</span> <span
  m="1063750">receiving</span> <span m="1064730">like</span> <span
  m="1065710">don't</span> <span m="1066200">sending</span> <span
  m="1066690">it,</span> <span m="1067180">like do</span> <span m="1067670">you
  have</span> <span m="1068160">to choose</span> <span m="1068650">one
  node,</span> <span m="1069140">which has to send</span> <span
  m="1069630">the</span> <span m="1070120">message?</span></p><p><span
  m="1070620">LING REN: Oh,</span> <span m="1070935">OK.</span> <span
  m="1071250">In</span> <span m="1071600">the</span> <span m="1071920">first
  round,</span> <span m="1072200">everyone</span> <span m="1072590">send</span>
  <span m="1072900">their</span> <span m="1073080">messages.</span> <span
  m="1074125">OK.</span> <span m="1074610">Then</span> <span
  m="1075060">some</span> <span m="1075280">of</span> <span
  m="1075400">them</span> <span m="1075890">will</span> <span
  m="1076740">go</span> <span m="1076910">inactive</span> <span
  m="1077820">because</span> <span m="1078140">they</span> <span
  m="1078280">learn</span> <span m="1078940">they</span> <span
  m="1079090">are</span> <span m="1079160">not</span> <span
  m="1079380">maximum.</span> <span m="1079930">And</span> <span
  m="1080060">the</span> <span m="1080130">remaining,</span> <span
  m="1080670">the</span> <span m="1081410">surviving</span> <span
  m="1081850">ones,</span> <span m="1082630">will,</span> <span
  m="1083140">yeah,</span> <span m="1083400">continue</span> <span
  m="1083760">sending</span> <span m="1084040">messages.</span></p><p><span
  m="1085350">And</span> <span m="1085550">then,</span> <span
  m="1085890">yeah,</span> <span m="1086350">half</span> <span m="1086680">of
  them</span> <span m="1087130">probably</span> <span m="1087410">will</span>
  <span m="1087630">die</span> <span m="1087920">in</span> <span
  m="1088010">the</span> <span m="1088090">next</span> <span
  m="1088330">round.</span> <span m="1089330">And</span> <span m="1089450">the
  surviving</span> <span m="1089580">ones</span> <span m="1090100">keep</span>
  <span m="1090260">sending</span> <span m="1090510">messages.</span> <span
  m="1094330">Make</span> <span m="1094460">sense?</span></p><p><span
  m="1101038">AUDIENCE: How</span> <span m="1101527">do you</span> <span
  m="1102016">return</span> <span m="1102505">messages</span> <span
  m="1102994">through I?</span> <span m="1103483">Like if</span> <span
  m="1103972">you</span> <span m="1104461">[INAUDIBLE]</span> <span
  m="1104950">its</span> <span m="1105439">neighbor and not</span> <span
  m="1105928">the node</span> <span m="1106417">that</span> <span m="1106906">do
  either.</span></p><p><span m="1108390">LING REN: Yeah.</span> <span
  m="1108900">So</span> <span m="1109460">we</span> <span
  m="1109600">will</span> <span m="1109760">send</span> <span
  m="1109940">the</span> <span m="1110010">message</span> <span
  m="1110680">of</span> <span m="1111110">this</span> <span
  m="1111380">form,</span> <span m="1112340">say,</span> <span
  m="1114910">well,</span> <span m="1115290">some</span> <span
  m="1115590">message.</span> <span m="1119200">And</span> <span
  m="1119380">then</span> <span m="1119520">we will</span> <span
  m="1119800">send</span> <span m="1120010">the</span> <span
  m="1120150">hop</span> <span m="1123070">and</span> <span
  m="1123250">the</span> <span m="1123330">direction,</span> <span
  m="1123970">either</span> <span m="1124510">left</span> <span
  m="1124840">or</span> <span m="1125050">right.</span> <span
  m="1127260">And</span> <span m="1127400">this</span> <span
  m="1127560">hop</span> <span m="1128330">will</span> <span
  m="1128540">initially</span> <span m="1129200">be</span> <span
  m="1129360">set</span> <span m="1130160">to</span> <span m="1130670">2</span>
  <span m="1131270">raised to</span> <span m="1131530">I,</span> <span
  m="1133160">the</span> <span m="1134420">number</span> <span
  m="1134650">of</span> <span m="1134730">round.</span> <span
  m="1136150">Then</span> <span m="1136800">when</span> <span
  m="1137230">this</span> <span m="1137470">guy</span> <span
  m="1137690">receives</span> <span m="1138140">the</span> <span
  m="1138220">message,</span> <span m="1138505">it</span> <span
  m="1139040">will</span> <span m="1139720">increment</span> <span
  m="1140880">the hop</span> <span m="1141020">count</span> <span
  m="1141820">and</span> <span m="1142640">pass</span> <span
  m="1142860">it</span> <span m="1143070">along.</span></p><p><span
  m="1145420">And</span> <span m="1145620">every</span> <span
  m="1146190">node</span> <span m="1146630">when</span> <span
  m="1147090">forwarding</span> <span m="1147680">the</span> <span
  m="1147730">message</span> <span m="1148170">will</span> <span
  m="1149480">decrease</span> <span m="1149910">the</span> <span
  m="1150640">that</span> <span m="1150870">h</span> <span m="1151220">by</span>
  <span m="1151350">1.</span> <span m="1152220">And</span> <span
  m="1152380">finally</span> <span m="1152880">when</span> <span
  m="1153100">it</span> <span m="1153180">reaches</span> <span
  m="1153500">here,</span> <span m="1154170">that</span> <span
  m="1154360">number</span> <span m="1154620">becomes</span> <span
  m="1154980">0.</span> <span m="1156490">And</span> <span
  m="1157510">when</span> <span m="1158430">a</span> <span
  m="1158550">node</span> <span m="1158900">sees</span> <span
  m="1159250">a</span> <span m="1159730">message</span> <span
  m="1160150">with</span> <span m="1160350">0</span> <span
  m="1161430">hop</span> <span m="1161660">count,</span> <span
  m="1163020">it's</span> <span m="1163180">going</span> <span
  m="1163330">to</span> <span m="1163430">reverse</span> <span
  m="1163800">it,</span> <span m="1164070">send</span> <span
  m="1164330">it</span> <span m="1164450">in</span> <span m="1164550">the</span>
  <span m="1164640">other</span> <span m="1164800">direction.</span></p><p><span
  m="1166220">And,</span> <span m="1166410">again,</span> <span
  m="1167090">set</span> <span m="1167330">it</span> <span
  m="1167420">back</span> <span m="1167630">to</span> <span m="1168430">2</span>
  <span m="1168650">raised to</span> <span m="1168800">I.</span> <span
  m="1176220">This</span> <span m="1176410">message</span> <span
  m="1177140">I</span> <span m="1177230">should</span> <span
  m="1177480">say</span> <span m="1180690">ID.</span> <span
  m="1184770">And</span> <span m="1185300">at</span> <span
  m="1185450">certain</span> <span m="1185770">point,</span> <span
  m="1188070">a</span> <span m="1188190">certain</span> <span
  m="1188490">node</span> <span m="1188780">may</span> <span
  m="1188930">decide</span> <span m="1189440">this</span> <span
  m="1189620">ID's</span> <span m="1190020">too</span> <span
  m="1190130">small.</span> <span m="1190920">It</span> <span
  m="1190990">doesn't</span> <span m="1191230">have</span> <span
  m="1191380">a</span> <span m="1191430">chance.</span> <span
  m="1192300">Then</span> <span m="1192605">the</span> <span
  m="1192910">I</span> <span m="1193060">can</span> <span
  m="1193330">directly</span> <span m="1194710">send</span> <span
  m="1195000">it</span> <span m="1195110">in</span> <span m="1195220">the</span>
  <span m="1195330">opposite</span> <span m="1195680">direction,</span> <span
  m="1196710">replying</span> <span m="1197250">a</span> <span
  m="1197310">message</span> <span m="1197690">saying,</span> <span
  m="1197970">yeah,</span> <span m="1198250">you</span> <span m="1198400">are
  too</span> <span m="1198520">small.</span></p><p><span m="1202610">OK.</span>
  <span m="1203290">So</span> <span m="1205400">any</span> <span
  m="1205540">more</span> <span m="1205670">questions</span> <span
  m="1206050">on</span> <span m="1206170">the</span> <span
  m="1206340">algorithm</span> <span m="1206590">itself?</span> <span
  m="1209200">If</span> <span m="1209370">not,</span> <span
  m="1210210">what's</span> <span m="1210410">the</span> <span
  m="1210490">next</span> <span m="1210670">step?</span></p><p><span
  m="1216425">AUDIENCE: Time.</span></p><p><span m="1217395">LING REN:
  Yeah,</span> <span m="1217890">time</span> <span
  m="1218070">complexity.</span> <span m="1219030">I</span> <span
  m="1219270">already</span> <span m="1219540">claimed</span> <span
  m="1219920">it's</span> <span m="1220070">n</span> <span
  m="1220230">log</span> <span m="1220350">n.</span> <span m="1221210">Is</span>
  <span m="1221350">it?</span> <span m="1227800">This</span> <span
  m="1227950">is</span> <span m="1228110">round.</span> <span m="1230300">This
  is</span> <span m="1230500">message.</span> <span m="1233900">This is</span>
  <span m="1233980">also</span> <span m="1234570">message</span> <span
  m="1234990">complexity.</span> <span m="1238847">OK.</span> <span
  m="1239320">So</span> <span m="1239490">why</span> <span m="1239640">is</span>
  <span m="1239730">it</span> <span m="1239860">n</span> <span
  m="1239990">log</span> <span m="1240080">n?</span></p><p><span
  m="1275190">AUDIENCE: The</span> <span m="1275684">log n</span> <span
  m="1276178">[INAUDIBLE].</span></p><p><span m="1278154">LING REN:
  Hm-mm.</span> <span m="1278700">So</span> <span m="1280220">we</span> <span
  m="1280360">have</span> <span m="1281390">a certain</span> <span
  m="1281440">number</span> <span m="1281680">of</span> <span
  m="1281760">rounds.</span> <span m="1282320">So</span> <span m="1282480">how
  many</span> <span m="1282640">rounds</span> <span m="1282860">do</span> <span
  m="1282950">we</span> <span m="1283040">have?</span></p><p><span
  m="1288530">AUDIENCE: Two.</span></p><p><span m="1291010">LING REN:
  Yeah,</span> <span m="1291570">maybe.</span> <span m="1292000">But,</span>
  <span m="1292490">yeah, I'll</span> <span m="1292660">just</span> <span
  m="1292830">say</span> <span m="1292970">log</span> <span
  m="1293230">n.</span> <span m="1293963">OK.</span> <span
  m="1297280">Because</span> <span m="1298230">you are</span> <span
  m="1298470">increasing</span> <span m="1299010">your</span> <span
  m="1301130">hop</span> <span m="1301370">length.</span> <span
  m="1302810">And</span> <span m="1304860">we're</span> <span
  m="1305000">going</span> <span m="1305230">to</span> <span
  m="1305470">compute</span> <span m="1305750">like</span> <span
  m="1306370">how</span> <span m="1306530">many</span> <span
  m="1306780">nodes</span> <span m="1307750">are</span> <span
  m="1307950">still</span> <span m="1308250">active</span> <span
  m="1309340">each</span> <span m="1309770">around</span> <span
  m="1310350">and</span> <span m="1310630">how</span> <span
  m="1310800">many</span> <span m="1310990">messages</span> <span
  m="1311700">are</span> <span m="1311840">sent</span> <span
  m="1312280">in</span> <span m="1312535">the</span> <span
  m="1312790">round.</span></p><p><span m="1315490">So,</span> <span
  m="1318530">well,</span> <span m="1320670">the</span> <span
  m="1320770">number</span> <span m="1321040">of</span> <span
  m="1321140">nodes</span> <span m="1321460">active</span> <span
  m="1322630">will</span> <span m="1322850">just</span> <span
  m="1323070">be</span> <span m="1323190">this</span> <span
  m="1323370">number</span> <span m="1325310">if</span> <span
  m="1325490">we</span> <span m="1325670">start</span> <span
  m="1325950">from</span> <span m="1326150">0.</span> <span
  m="1327820">Why?</span> <span m="1328150">Because</span> <span
  m="1328270">the</span> <span m="1328380">first</span> <span
  m="1328690">time</span> <span m="1329340">everyone</span> <span
  m="1329720">is</span> <span m="1329840">active.</span> <span
  m="1331210">In</span> <span m="1331370">the</span> <span
  m="1331430">next</span> <span m="1331760">time,</span> <span
  m="1332680">only</span> <span m="1334100">1/3</span> <span
  m="1334540">of</span> <span m="1334660">them</span> <span
  m="1334850">will</span> <span m="1335010">be</span> <span
  m="1335730">active.</span> <span m="1336210">But</span> <span
  m="1336600">we</span> <span m="1336760">said</span> <span
  m="1337730">we</span> <span m="1337880">are</span> <span
  m="1337970">conservative</span> <span m="1338470">here</span> <span
  m="1338770">at</span> <span m="1338920">we</span> <span m="1339470">put</span>
  <span m="1339610">1/2.</span> <span m="1340100">Right.</span></p><p><span
  m="1341080">Next</span> <span m="1341390">round</span> <span
  m="1341720">is</span> <span m="1341870">actually</span> <span
  m="1342990">1/5.</span> <span m="1347180">If</span> <span
  m="1347330">it's</span> <span m="1347490">local</span> <span
  m="1347740">maximum,</span> <span m="1348230">it</span> <span
  m="1348370">means</span> <span m="1348730">like</span> <span
  m="1348930">these</span> <span m="1349150">two</span> <span
  m="1349350">and</span> <span m="1349460">those</span> <span
  m="1349660">two</span> <span m="1350410">will</span> <span
  m="1350650">go</span> <span m="1350860">inactive.</span> <span
  m="1352625">But</span> <span m="1353010">we</span> <span
  m="1353210">put</span> <span m="1353730">this</span> <span
  m="1353940">as</span> <span m="1354130">a</span> <span
  m="1357510">upper</span> <span m="1357680">bound.</span></p><p><span
  m="1359200">So</span> <span m="1359330">this</span> <span
  m="1359510">is</span> <span m="1359640">the</span> <span
  m="1359740">number</span> <span m="1360040">of</span> <span
  m="1361310">nodes</span> <span m="1361840">that</span> <span
  m="1362300">are</span> <span m="1362480">still</span> <span
  m="1362760">active.</span> <span m="1364660">And</span> <span
  m="1364900">they</span> <span m="1364990">will</span> <span
  m="1365160">send</span> <span m="1365450">the</span> <span
  m="1365530">message</span> <span m="1366190">up</span> <span
  m="1366430">to</span> <span m="1371820">this</span> <span
  m="1372120">many</span> <span m="1372450">hops.</span> <span
  m="1376285">OK.</span> <span m="1378710">And</span> <span
  m="1380130">there</span> <span m="1380330">are</span> <span
  m="1380420">two</span> <span m="1380590">directions.</span></p><p><span
  m="1386460">And</span> <span m="1386960">you</span> <span
  m="1387240">send</span> <span m="1387580">a</span> <span
  m="1387620">message</span> <span m="1388010">back.</span> <span
  m="1388400">And</span> <span m="1388600">then,</span> <span
  m="1390260">yeah--</span> <span m="1390450">sorry,</span> <span
  m="1390810">send</span> <span m="1390970">the</span> <span
  m="1390990">message</span> <span m="1391330">forward</span> <span
  m="1391760">and</span> <span m="1392010">someone</span> <span
  m="1392340">will</span> <span m="1392490">reply.</span> <span
  m="1395175">But</span> <span m="1395640">in the end,</span> <span
  m="1397450">this</span> <span m="1397620">is</span> <span m="1398060">n</span>
  <span m="1398240">log</span> <span m="1398360">n.</span> <span
  m="1404117">Yeah,</span> <span m="1404600">and I</span> <span
  m="1404720">think</span> <span m="1405120">I</span> <span
  m="1405480">got</span> <span m="1406480">8n</span> <span
  m="1407020">log</span> <span m="1407370">n.</span></p><p><span
  m="1408500">So</span> <span m="1408640">my</span> <span
  m="1408810">recitation</span> <span m="1409350">note</span> <span
  m="1409530">says</span> <span m="1409820">it's</span> <span
  m="1409970">4</span> <span m="1410160">log</span> <span m="1410610">n,</span>
  <span m="1410910">not</span> <span m="1411110">entirely</span> <span
  m="1411490">sure</span> <span m="1412780">what's</span> <span
  m="1412970">going</span> <span m="1413200">on.</span> <span
  m="1413330">Yeah.</span> <span m="1413745">But</span> <span
  m="1414160">you</span> <span m="1414320">can</span> <span
  m="1414440">double</span> <span m="1414630">check</span> <span
  m="1414840">whether</span> <span m="1415730">this</span> <span
  m="1415880">is</span> <span m="1415970">correct</span> <span
  m="1416330">or</span> <span m="1416460">the</span> <span
  m="1416560">recitation</span> <span m="1416865">note</span> <span
  m="1417170">is</span> <span m="1417670">correct.</span></p><p><span
  m="1438728">AUDIENCE: What is</span> <span m="1439215">I</span> <span
  m="1439702">again?</span></p><p><span m="1441190">LING REN: I's</span> <span
  m="1441670">the</span> <span m="1442790">number</span> <span
  m="1443040">of</span> <span m="1443160">round</span> <span
  m="1443590">in</span> <span m="1443720">the</span> <span
  m="1443830">I-th</span> <span m="1444080">round.</span> <span
  m="1444855">Yeah.</span> <span m="1445290">This</span> <span
  m="1445500">many</span> <span m="1445860">nodes</span> <span
  m="1446220">are</span> <span m="1446370">still</span> <span
  m="1446630">active.</span> <span m="1447230">And</span> <span
  m="1447600">each</span> <span m="1447750">of</span> <span
  m="1447870">them</span> <span m="1448090">will</span> <span
  m="1448780">send</span> <span m="1449600">a</span> <span
  m="1449620">message</span> <span m="1450120">of this</span> <span
  m="1450340">many</span> <span m="1450560">hops.</span></p><p><span
  m="1468090">And</span> <span m="1468300">I</span> <span
  m="1468350">didn't</span> <span m="1468540">mention</span> <span
  m="1470020">whether</span> <span m="1470210">the</span> <span
  m="1470540">network</span> <span m="1470970">is</span> <span
  m="1471140">synchronous</span> <span m="1471640">or</span> <span
  m="1472010">asynchronous.</span> <span m="1472680">And</span> <span
  m="1472850">it</span> <span m="1472930">turns</span> <span
  m="1473150">out</span> <span m="1473390">it</span> <span
  m="1473810">doesn't</span> <span m="1474050">care.</span> <span
  m="1475180">Some</span> <span m="1475200">of</span> <span
  m="1475350">them</span> <span m="1475690">can</span> <span
  m="1476150">work</span> <span m="1476410">for</span> <span
  m="1477040">both</span> <span m="1477260">synchronous</span> <span
  m="1477740">and asynchronous.</span> <span m="1478680">Apparently,</span>
  <span m="1479130">it works</span> <span m="1479440">for</span> <span
  m="1479560">synchronous</span> <span m="1479990">networks.</span></p><p><span
  m="1480960">If</span> <span m="1481100">it's</span> <span
  m="1481400">asynchronous,</span> <span m="1482270">then</span> <span
  m="1485080">what</span> <span m="1485260">changes</span> <span
  m="1485710">is</span> <span m="1485860">that</span> <span
  m="1486150">different</span> <span m="1486460">nodes</span> <span
  m="1486780">are</span> <span m="1486920">in</span> <span
  m="1487070">different</span> <span m="1487390">rounds.</span> <span
  m="1489620">A</span> <span m="1489750">certain</span> <span
  m="1490030">node</span> <span m="1490240">may be</span> <span
  m="1491350">far</span> <span m="1491780">ahead</span> <span
  m="1492030">than</span> <span m="1492190">the</span> <span
  m="1492370">others.</span> <span m="1492650">But</span> <span
  m="1492880">it's</span> <span m="1493060">fine.</span> <span
  m="1493590">Eventually,</span> <span m="1494520">they will</span> <span
  m="1494800">converge</span> <span m="1495140">to</span> <span
  m="1495330">the</span> <span m="1495660">correct</span> <span
  m="1496330">result.</span> <span m="1498265">OK.</span></p><p><span
  m="1499660">So</span> <span m="1500250">let's</span> <span
  m="1500430">look</span> <span m="1500590">at</span> <span
  m="1500700">the</span> <span m="1500760">second</span> <span
  m="1501070">problem.</span> <span m="1507330">Well,</span> <span
  m="1507830">problem's</span> <span m="1508330">defined</span> <span
  m="1508790">even</span> <span m="1509000">simpler.</span> <span
  m="1510070">We</span> <span m="1510150">just</span> <span
  m="1510340">want</span> <span m="1510480">to</span> <span
  m="1510580">count</span> <span m="1511560">how</span> <span
  m="1511720">many</span> <span m="1512060">nodes</span> <span m="1512940">are
  out</span> <span m="1513390">there.</span> <span m="1515140">We</span> <span
  m="1515270">want the</span> <span m="1515480">algorithm</span> <span
  m="1516010">to</span> <span m="1517450">work</span> <span
  m="1517900">both</span> <span m="1518560">synchronously</span> <span
  m="1519230">and</span> <span m="1519520">asynchronously.</span></p><p><span
  m="1523560">By</span> <span m="1523880">that I</span> <span
  m="1524000">just</span> <span m="1524250">mean</span> <span
  m="1524890">we</span> <span m="1525130">have</span> <span m="1525430">a</span>
  <span m="1525880">network.</span> <span m="1533130">Well,</span> <span
  m="1533900">say</span> <span m="1534070">you</span> <span
  m="1534210">have</span> <span m="1534410">a</span> <span
  m="1534460">lot</span> <span m="1534640">of</span> <span
  m="1534750">nodes</span> <span m="1535280">after</span> <span
  m="1535510">that.</span> <span m="1536220">Just</span> <span
  m="1536410">want</span> <span m="1536560">to</span> <span
  m="1536630">count</span> <span m="1536980">how</span> <span
  m="1537070">many</span> <span m="1537920">nodes</span> <span
  m="1538850">are</span> <span m="1538960">there</span> <span
  m="1539440">in</span> <span m="1539570">this</span> <span
  m="1539760">network.</span></p><p><span m="1545440">So</span> <span
  m="1545900">I'll</span> <span m="1546180">give</span> <span
  m="1546330">you,</span> <span m="1546630">say,</span> <span
  m="1546900">one</span> <span m="1547070">minutes</span> <span
  m="1547870">to</span> <span m="1548480">let's</span> <span
  m="1548770">first</span> <span m="1549290">come</span> <span
  m="1549450">up</span> <span m="1549610">with</span> <span m="1549780">a</span>
  <span m="1549850">high-level</span> <span m="1550010">plan.</span> <span
  m="1556350">Is</span> <span m="1556540">the</span> <span m="1556750">problem
  clear?</span></p><p><span m="1558543">AUDIENCE: In the worst case,</span>
  <span m="1560016">[INAUDIBLE].</span> <span m="1562471">The</span> <span
  m="1562962">worst</span> <span m="1563453">case.</span></p><p><span
  m="1565690">LING REN: OK.</span> <span m="1565930">I</span> <span
  m="1565970">haven't</span> <span m="1566200">defined</span> <span
  m="1566500">that.</span> <span m="1566790">Let's</span> <span
  m="1567130">not</span> <span m="1567350">worry</span> <span
  m="1567540">about</span> <span m="1568860">complexity</span> <span
  m="1569430">now</span> <span m="1569740">for</span> <span
  m="1569840">now.</span> <span m="1571460">The</span> <span
  m="1571930">complexity</span> <span m="1572410">will</span> <span
  m="1572610">depend</span> <span m="1572980">on</span> <span
  m="1573800">number</span> <span m="1574050">of</span> <span
  m="1574160">nodes</span> <span m="1574380">and</span> <span
  m="1574850">the</span> <span m="1575000">number</span> <span
  m="1575220">of</span> <span m="1575300">edges,</span> <span
  m="1575630">E.</span> <span m="1581950">Let's</span> <span
  m="1582110">just</span> <span m="1582330">get</span> <span
  m="1582470">it</span> <span m="1582650">functionally</span> <span
  m="1583150">correct.</span></p><p><span m="1673070">OK.</span> <span
  m="1673630">Anyone</span> <span m="1674150">share</span> <span
  m="1674480">a</span> <span m="1675420">high-level</span> <span
  m="1675800">strategy?</span> <span m="1681130">Go ahead.</span></p><p><span
  m="1681820">AUDIENCE: So</span> <span m="1682311">each</span> <span
  m="1682802">node</span> <span m="1683293">will</span> <span
  m="1684275">start</span> <span m="1685257">like</span> <span
  m="1687712">IDs</span> <span m="1688203">of the</span> <span
  m="1688694">other</span> <span m="1689185">devices</span> <span
  m="1689676">[INAUDIBLE].</span> <span m="1691149">So</span> <span
  m="1691640">basically</span> <span m="1692131">like</span> <span
  m="1692622">it's</span> <span m="1693604">going to send</span> <span
  m="1694095">propagates</span> <span m="1694586">[INAUDIBLE]</span> <span
  m="1695077">sets</span> <span m="1695568">of</span> <span
  m="1697041">each</span> <span m="1697532">node.</span></p><p><span
  m="1703424">LING REN: On</span> <span m="1703950">what</span> <span
  m="1704220">edge?</span></p><p><span m="1705310">AUDIENCE: Furthest</span>
  <span m="1705720">one.</span></p><p><span m="1706540">LING REN: Yeah.</span>
  <span m="1707120">It</span> <span m="1707270">wasn't</span> <span
  m="1708080">on</span> <span m="1708490">both</span> <span
  m="1708900">edges?</span></p><p><span m="1710274">AUDIENCE: Itself</span>
  <span m="1710751">first.</span></p><p><span m="1712660">LING REN: OK.</span>
  <span m="1712950">So</span> <span m="1713200">then</span> <span
  m="1714090">maybe</span> <span m="1714670">send</span> <span
  m="1714880">the</span> <span m="1714980">1</span> <span
  m="1715470">here</span> <span m="1715840">and</span> <span
  m="1716000">send</span> <span m="1716170">the</span> <span
  m="1716230">1</span> <span m="1716420">here</span> <span
  m="1716730">there.</span> <span m="1718030">Then</span> <span
  m="1718230">this</span> <span m="1718430">node</span> <span
  m="1718950">will</span> <span m="1719170">think</span> <span
  m="1719870">it</span> <span m="1720020">has</span> <span m="1720200">a</span>
  <span m="1720260">children,</span> <span m="1721060">it</span> <span
  m="1721270">as</span> <span m="1721410">a</span> <span
  m="1721480">child,</span> <span m="1721870">right,</span> <span
  m="1722430">which</span> <span m="1722500">is</span> <span
  m="1722630">this</span> <span m="1722790">one.</span> <span
  m="1723060">Let's</span> <span m="1723220">just</span> <span
  m="1723360">say</span> <span m="1723520">this</span> <span
  m="1724420">is</span> <span m="1724590">the</span> <span
  m="1724820">entire</span> <span m="1725130">network.</span> <span
  m="1726430">And</span> <span m="1727110">what</span> <span
  m="1727320">message</span> <span m="1727640">does it</span> <span
  m="1728420">send</span> <span m="1728550">to</span> <span
  m="1729530">this</span> <span m="1729640">guy?</span></p><p><span
  m="1730826">AUDIENCE: Reinforced</span> <span
  m="1731299">it.</span></p><p><span m="1737450">LING REN: Well, you</span>
  <span m="1737670">probably</span> <span m="1738110">need</span> <span
  m="1738290">send</span> <span m="1738540">two</span> <span
  m="1738800">here</span> <span m="1739440">because</span> <span
  m="1740300">you</span> <span m="1740530">have</span> <span
  m="1740730">one</span> <span m="1741370">and</span> <span
  m="1741580">this</span> <span m="1741730">is</span> <span
  m="1741890">possibly</span> <span m="1742680">its</span> <span
  m="1743350">child,</span> <span m="1743880">right.</span> <span
  m="1744480">But</span> <span m="1744580">then</span> <span
  m="1744890">we're</span> <span m="1745080">double</span> <span
  m="1745280">counting</span> <span m="1745580">this</span> <span
  m="1745760">node.</span> <span m="1746540">See</span> <span
  m="1746700">the</span> <span m="1746790">problem?</span></p><p><span
  m="1753442">AUDIENCE: Do</span> <span m="1753926">nodes</span> <span
  m="1754410">have</span> <span m="1754894">their</span> <span
  m="1755378">IDs,</span> <span m="1755862">like</span> <span m="1756346">unique
  IDs?</span></p><p><span m="1756840">LING REN: Oh, yeah.</span> <span
  m="1757380">They</span> <span m="1757510">have</span> <span
  m="1757720">their</span> <span m="1757950">IDs.</span></p><p><span
  m="1758460">AUDIENCE: We can't</span> <span m="1758890">send the</span> <span
  m="1759320">IDs</span> <span m="1759750">instead of the</span> <span
  m="1760180">IDs</span> <span m="1760680">through</span> <span m="1761060">the
  end</span> <span m="1761420">node.</span></p><p><span m="1762740">LING REN:
  OK.</span> <span m="1766300">We are</span> <span m="1766410">going</span>
  <span m="1766630">to</span> <span m="1766780">send</span> <span
  m="1767450">all</span> <span m="1767620">the</span> <span
  m="1768010">IDs.</span></p><p><span m="1769200">AUDIENCE: Yeah,</span> <span
  m="1769693">neighbors.</span> <span m="1783497">And</span> <span
  m="1783990">after</span> <span m="1784483">n</span> <span
  m="1784976">steps,</span> <span m="1785469">it's</span> <span
  m="1786455">going to have</span> <span m="1786948">the</span> <span
  m="1787441">[INAUDIBLE].</span></p><p><span m="1789450">LING REN: OK.</span>
  <span m="1789810">Yeah, that's</span> <span m="1790110">an</span> <span
  m="1790560">interesting</span> <span m="1791140">thought.</span> <span
  m="1791550">And</span> <span m="1791980">then</span> <span
  m="1794060">you</span> <span m="1794210">may</span> <span
  m="1794390">still</span> <span m="1794670">need the</span> <span
  m="1795005">root.</span> <span m="1796260">And</span> <span
  m="1797160">that</span> <span m="1798190">will</span> <span
  m="1798370">have</span> <span m="1798750">everyone's</span> <span
  m="1799800">ID.</span> <span m="1801750">And</span> <span
  m="1801960">then</span> <span m="1802510">see</span> <span
  m="1803130">how</span> <span m="1803260">many</span> <span
  m="1803480">unique</span> <span m="1804080">I's</span> <span
  m="1804260">are</span> <span m="1804450">there.</span> <span
  m="1807870">OK.</span></p><p><span m="1808100">Interesting.</span> <span
  m="1809060">Does</span> <span m="1809250">this</span> <span
  m="1809510">algorithm</span> <span m="1809880">work?</span> <span
  m="1812455">Yeah,</span> <span m="1812930">I</span> <span
  m="1813080">don't</span> <span m="1813240">see</span> <span
  m="1813340">any</span> <span m="1813520">problem.</span> <span
  m="1822376">OK.</span> <span m="1823810">But</span> <span m="1823950">let
  me</span> <span m="1824020">still</span> <span m="1826530">repeat</span> <span
  m="1827070">what</span> <span m="1828030">our</span> <span
  m="1828230">algorithm</span> <span m="1828650">is</span> <span
  m="1830910">because</span> <span m="1831070">it's</span> <span
  m="1831300">closer</span> <span m="1831670">to what's</span> <span
  m="1832090">in</span> <span m="1832380">the lecture.</span></p><p><span
  m="1834900">So</span> <span m="1835010">we're</span> <span
  m="1835160">going</span> <span m="1835260">to</span> <span
  m="1836960">find</span> <span m="1837500">a</span> <span
  m="1837690">spanning</span> <span m="1838050">tree</span> <span
  m="1841270">of</span> <span m="1841420">this</span> <span
  m="1842050">network.</span> <span m="1844960">A</span> <span
  m="1845110">spanning</span> <span m="1845490">tree</span> <span
  m="1845720">means,</span> <span m="1846440">well,</span> <span
  m="1847180">like</span> <span m="1847510">I</span> <span
  m="1847720">have</span> <span m="1847850">to</span> <span
  m="1848000">cut</span> <span m="1848330">one</span> <span
  m="1848510">of</span> <span m="1848620">these</span> <span
  m="1848830">edges.</span> <span m="1852840">If</span> <span
  m="1852990">I</span> <span m="1853080">have</span> <span m="1853260">a</span>
  <span m="1853330">tree,</span> <span m="1854290">then</span> <span
  m="1854540">I</span> <span m="1854620">can</span> <span
  m="1854840">have</span> <span m="1855350">every</span> <span
  m="1855600">child</span> <span m="1856180">report</span> <span
  m="1856860">to</span> <span m="1857020">its</span> <span
  m="1857170">parent.</span></p><p><span m="1858610">Like how many</span> <span
  m="1860620">offsprings,</span> <span m="1861410">including</span> <span
  m="1861870">myself</span> <span m="1863870">do</span> <span
  m="1863930">I</span> <span m="1864030">have.</span> <span
  m="1865130">And</span> <span m="1866640">this</span> <span
  m="1866900">node</span> <span m="1867230">will</span> <span
  m="1867540">sum</span> <span m="1867780">up</span> <span m="1869590">all
  its</span> <span m="1871120">children</span> <span m="1871510">and</span>
  <span m="1871640">report</span> <span m="1872050">to</span> <span
  m="1872220">its</span> <span m="1872380">parent.</span></p><p><span
  m="1878370">Does</span> <span m="1878540">everyone</span> <span
  m="1878610">get that?</span> <span m="1880440">So</span> <span
  m="1880580">first,</span> <span m="1882410">we'll</span> <span
  m="1882600">find</span> <span m="1882890">a</span> <span
  m="1882950">spanning</span> <span m="1883320">tree.</span> <span
  m="1889466">And</span> <span m="1889960">second,</span> <span
  m="1892170">we'll</span> <span m="1892340">have</span> <span
  m="1892550">child</span> <span m="1895320">reports</span> <span
  m="1895670">to</span> <span m="1896667">parent.</span></p><p><span
  m="1910790">AUDIENCE: How</span> <span m="1911277">can</span> <span
  m="1911764">we</span> <span m="1912251">find</span> <span m="1912738">the
  spanning tree?</span></p><p><span m="1914710">LING REN: Good</span> <span
  m="1914860">question.</span> <span m="1915470">So</span> <span
  m="1916860">in</span> <span m="1917010">the</span> <span
  m="1917040">lecture,</span> <span m="1918190">we</span> <span
  m="1918360">have</span> <span m="1918530">seen</span> <span
  m="1918710">algorithm</span> <span m="1919770">that</span> <span
  m="1920140">find</span> <span m="1922580">BFS</span> <span
  m="1923160">spanning</span> <span m="1923550">tree</span> <span
  m="1929450">for</span> <span m="1929870">synchronous</span> <span
  m="1931710">networks.</span> <span m="1935610">OK.</span> <span
  m="1935830">This</span> <span m="1935980">is</span> <span
  m="1936170">review</span> <span m="1936920">of the</span> <span
  m="1937050">lecture.</span> <span m="1940840">How</span> <span
  m="1940990">does</span> <span m="1941150">it</span> <span
  m="1941210">work?</span></p><p><span m="1955290">Each</span> <span
  m="1955430">node</span> <span m="1955950">will,</span> <span
  m="1956350">say,</span> <span m="1956600">we</span> <span
  m="1957190">need</span> <span m="1957320">to</span> <span
  m="1957450">first</span> <span m="1957830">choose</span> <span
  m="1957860">a</span> <span m="1958010">root.</span> <span m="1959280">And
  our</span> <span m="1959630">root</span> <span m="1959950">will</span> <span
  m="1960190">just</span> <span m="1960800">send</span> <span
  m="1961150">a</span> <span m="1961220">message</span> <span
  m="1961640">to</span> <span m="1961780">its</span> <span
  m="1961940">neighbor</span> <span m="1963350">and,</span> <span
  m="1964140">yeah,</span> <span m="1964450">saying,</span> <span
  m="1965100">you</span> <span m="1965250">are</span> <span
  m="1965330">my</span> <span m="1965460">child,</span> <span
  m="1965840">you</span> <span m="1966070">are</span> <span
  m="1966580">my</span> <span m="1966690">child,</span> <span m="1966950">you
  are my</span> <span m="1967220">child.</span> <span m="1969000">And</span>
  <span m="1969160">then</span> <span m="1969370">every</span> <span
  m="1969660">node</span> <span m="1970360">upon</span> <span
  m="1970780">receiving</span> <span m="1972290">this</span> <span
  m="1972880">message</span> <span m="1973300">from</span> <span
  m="1975200">the</span> <span m="1975290">parent</span> <span
  m="1976120">will</span> <span m="1976990">search</span> <span
  m="1977950">among</span> <span m="1978620">its</span> <span
  m="1979170">neighbors.</span> <span m="1980724">All right.</span></p><p><span
  m="1981690">So</span> <span m="1982370">the</span> <span
  m="1982490">neighbors</span> <span m="1983000">that</span> <span
  m="1983230">haven't</span> <span m="1983560">got</span> <span
  m="1983730">a</span> <span m="1983780">parent</span> <span
  m="1984260">will</span> <span m="1985270">acknowledge</span> <span
  m="1987200">this</span> <span m="1987310">sender</span> <span
  m="1987910">as</span> <span m="1988130">the</span> <span
  m="1988220">parent.</span> <span m="1992400">OK.</span> <span
  m="1992900">That's a</span> <span m="1993360">little</span> <span
  m="1993530">messy.</span> <span m="2007650">So</span> <span
  m="2007840">this</span> <span m="2008070">node</span> <span
  m="2008500">will</span> <span m="2009540">search</span> <span
  m="2010200">to</span> <span m="2012370">the leaf</span> <span
  m="2012580">node.</span> <span m="2013380">But</span> <span
  m="2013510">then</span> <span m="2013950">it</span> <span
  m="2014120">will</span> <span m="2014230">also</span> <span
  m="2014540">try</span> <span m="2014790">to</span> <span
  m="2015010">search</span> <span m="2015320">for</span> <span
  m="2015440">this</span> <span m="2015650">guy.</span></p><p><span
  m="2016250">But</span> <span m="2016380">this</span> <span
  m="2016550">guy</span> <span m="2016710">already</span> <span m="2017290">had
  a parent,</span> <span m="2018020">then,</span> <span m="2018520">yeah,</span>
  <span m="2018630">it will</span> <span m="2018980">say</span> <span
  m="2020230">I</span> <span m="2020540">already</span> <span
  m="2020810">got</span> <span m="2020960">a</span> <span
  m="2021030">parent</span> <span m="2021440">and</span> <span
  m="2021740">blah,</span> <span m="2021960">blah,</span> <span
  m="2022110">blah.</span> <span m="2024210">This</span> <span
  m="2024510">will</span> <span m="2024700">give</span> <span
  m="2024900">us</span> <span m="2025070">a</span> <span m="2025740">BFS</span>
  <span m="2026450">spanning</span> <span m="2026810">tree.</span> <span
  m="2027580">What</span> <span m="2027700">does</span> <span
  m="2027830">it</span> <span m="2027890">mean?</span></p><p><span
  m="2028080">It's</span> <span m="2028220">a spanning</span> <span
  m="2028720">tree</span> <span m="2029150">found</span> <span
  m="2029580">by</span> <span m="2029730">BFS.</span> <span
  m="2032620">Does</span> <span m="2032710">it</span> <span
  m="2032820">work</span> <span m="2033080">for</span> <span
  m="2033680">asynchronous</span> <span m="2034280">network?</span> <span
  m="2039680">Go</span> <span m="2040110">ahead.</span></p><p><span
  m="2040395">AUDIENCE: This version</span> <span m="2040680">doesn't.</span>
  <span m="2041172">But there's a</span> <span m="2041664">different
  version</span> <span m="2042156">that</span> <span m="2042648">contains</span>
  <span m="2043140">an edge</span> <span m="2043632">for relaxation</span> <span
  m="2044616">technique.</span></p><p><span m="2045110">LING REN: Yeah.</span>
  <span m="2045840">Correct.</span> <span m="2046470">And</span> <span
  m="2047180">so</span> <span m="2047370">why</span> <span
  m="2047770">does</span> <span m="2047930">this</span> <span
  m="2048110">version</span> <span m="2048409">not</span> <span
  m="2048889">work</span> <span m="2049130">for a</span> <span
  m="2049330">synchronous</span> <span m="2049770">network?</span></p><p><span
  m="2051570">AUDIENCE: Because</span> <span m="2051810">different nodes</span>
  <span m="2052306">can be</span> <span m="2052802">on a</span> <span
  m="2053298">different round</span> <span m="2053794">number</span> <span
  m="2054290">so</span> <span m="2054786">that a</span> <span
  m="2055282">longer</span> <span m="2055778">path</span> <span
  m="2056274">could end</span> <span m="2056770">up going to</span> <span
  m="2057266">the node</span> <span m="2057762">even.</span></p><p><span
  m="2058270">LING REN: Yeah,</span> <span m="2058650">exactly.</span> <span
  m="2059290">So</span> <span m="2060000">let</span> <span m="2060080">me</span>
  <span m="2060150">give</span> <span m="2060340">a</span> <span
  m="2060580">concrete</span> <span m="2060940">example.</span> <span
  m="2063030">What</span> <span m="2063210">does</span> <span
  m="2063639">asynchronous</span> <span m="2063959">network</span> <span
  m="2064280">mean?</span> <span m="2065080">Is</span> <span
  m="2065310">that,</span> <span m="2065770">well,</span> <span
  m="2066639">messages</span> <span m="2067100">travel</span> <span
  m="2067510">at</span> <span m="2067590">different</span> <span
  m="2067909">speed.</span> <span m="2068580">Say</span> <span
  m="2068889">this</span> <span m="2069170">link</span> <span
  m="2069719">for</span> <span m="2069870">some</span> <span
  m="2070090">reason</span> <span m="2070460">is</span> <span
  m="2070780">temporarily</span> <span m="2071230">down.</span></p><p><span
  m="2072760">And</span> <span m="2072969">this</span> <span
  m="2073159">node</span> <span m="2073460">doesn't</span> <span
  m="2073780">receive</span> <span m="2074370">the</span> <span
  m="2074469">message</span> <span m="2074850">from</span> <span
  m="2076040">the</span> <span m="2076310">root.</span> <span
  m="2077030">And</span> <span m="2077260">then</span> <span
  m="2078010">this</span> <span m="2078250">message</span> <span
  m="2079790">travels</span> <span m="2080190">very</span> <span
  m="2080380">fast.</span> <span m="2081210">And</span> <span
  m="2081350">this</span> <span m="2081510">message</span> <span
  m="2081900">also</span> <span m="2082110">travels</span> <span
  m="2082469">very</span> <span m="2082650">fast.</span> <span
  m="2083000">So</span> <span m="2083130">this</span> <span
  m="2083320">message</span> <span m="2083750">may</span> <span
  m="2083960">reach</span> <span m="2085440">this</span> <span
  m="2085650">node</span> <span m="2086400">earlier.</span></p><p><span
  m="2087480">And</span> <span m="2087639">then</span> <span
  m="2087830">this</span> <span m="2088570">node</span> <span
  m="2088889">will</span> <span m="2089070">think</span> <span
  m="2089310">of</span> <span m="2089489">it</span> <span m="2089850">as</span>
  <span m="2090080">a</span> <span m="2090150">child</span> <span
  m="2090940">of</span> <span m="2091130">this</span> <span
  m="2091290">node.</span> <span m="2092300">OK.</span> <span
  m="2092850">And</span> <span m="2093090">then</span> <span
  m="2093460">this</span> <span m="2093650">message</span> <span
  m="2094219">comes</span> <span m="2094560">along,</span> <span
  m="2095050">finally.</span> <span m="2095889">But</span> <span
  m="2096040">this</span> <span m="2096230">node</span> <span
  m="2096440">says,</span> <span m="2096659">yeah, I</span> <span
  m="2096800">already</span> <span m="2097230">have</span> <span
  m="2097430">a</span> <span m="2097500">parent.</span> <span
  m="2098490">And</span> <span m="2098720">I'm</span> <span
  m="2098800">going</span> <span m="2099000">to</span> <span
  m="2099060">reject</span> <span m="2099380">you.</span></p><p><span
  m="2100870">AUDIENCE: So</span> <span m="2101310">it still</span> <span
  m="2101750">makes</span> <span m="2102190">a spanning</span> <span
  m="2102630">tree?</span></p><p><span m="2103070">LING REN: Yes.</span> <span
  m="2104220">Good</span> <span m="2104400">point.</span> <span
  m="2105330">This</span> <span m="2105490">is</span> <span
  m="2105640">not</span> <span m="2105820">a</span> <span m="2105900">BFS</span>
  <span m="2106120">spanning</span> <span m="2106840">tree</span> <span
  m="2107325">but</span> <span m="2107620">it's</span> <span
  m="2107810">still</span> <span m="2108070">a</span> <span
  m="2108120">spanning</span> <span m="2108490">tree.</span> <span
  m="2109143">All right.</span> <span m="2109870">So</span> <span m="2110630">in
  our</span> <span m="2110820">problem,</span> <span m="2111640">we're</span>
  <span m="2111860">totally</span> <span m="2112160">fine</span> <span
  m="2112350">with</span> <span m="2112500">it.</span> <span
  m="2116368">Yeah.</span></p><p><span m="2116840">But</span> <span
  m="2117000">you do</span> <span m="2117140">have</span> <span
  m="2117300">to</span> <span m="2117440">know</span> <span
  m="2118600">if</span> <span m="2118770">you</span> <span
  m="2118970">really</span> <span m="2119210">want</span> <span
  m="2119440">a</span> <span m="2119500">BFS</span> <span
  m="2119880">spanning</span> <span m="2120210">tree</span> <span
  m="2120600">in</span> <span m="2120760">an</span> <span
  m="2120860">asynchronous</span> <span m="2121690">network,</span> <span
  m="2122440">then</span> <span m="2122580">you</span> <span
  m="2122670">have</span> <span m="2122850">to</span> <span
  m="2123110">like</span> <span m="2123220">record</span> <span
  m="2123610">the</span> <span m="2123670">distance</span> <span
  m="2124190">and</span> <span m="2124330">do</span> <span
  m="2124430">the</span> <span m="2124550">relaxation</span> <span
  m="2125260">and</span> <span m="2125650">so</span> <span m="2125810">on and so
  forth.</span> <span m="2129229">OK.</span></p><p><span m="2130170">So</span>
  <span m="2131440">we</span> <span m="2131550">will</span> <span
  m="2131650">just</span> <span m="2131840">use</span> <span
  m="2132060">this</span> <span m="2132270">algorithm,</span> <span
  m="2132810">the</span> <span m="2132910">BFS</span> <span
  m="2133370">spanning</span> <span m="2133740">tree</span> <span
  m="2133920">algorithm,</span> <span m="2135650">just</span> <span
  m="2135890">run</span> <span m="2136070">it</span> <span
  m="2136300">asynchronously.</span> <span m="2137200">It</span> <span
  m="2137340">doesn't</span> <span m="2137590">find</span> <span
  m="2137770">the</span> <span m="2137830">BFS</span> <span
  m="2138190">spanning</span> <span m="2138490">tree</span> <span
  m="2138680">but it</span> <span m="2138950">finds</span> <span
  m="2139220">some</span> <span m="2140080">spanning</span> <span
  m="2140340">tree.</span> <span m="2146993">OK.</span> <span
  m="2147490">How</span> <span m="2147720">does</span> <span
  m="2147920">this</span> <span m="2148110">algorithm</span> <span
  m="2148450">work?</span></p><p><span m="2156290">We</span> <span
  m="2156420">will</span> <span m="2156580">have</span> <span
  m="2156750">several</span> <span m="2157210">variables.</span> <span
  m="2158030">The</span> <span m="2158120">first</span> <span
  m="2158410">one</span> <span m="2158640">is</span> <span
  m="2158790">parent.</span> <span m="2161510">We</span> <span
  m="2161630">will</span> <span m="2161790">initialize</span> <span
  m="2162630">to</span> <span m="2163260">this</span> <span
  m="2163990">undefined</span> <span m="2164265">single.</span> <span
  m="2173900">OK.</span></p><p><span m="2174900">Then</span> <span
  m="2175660">every</span> <span m="2175940">node</span> <span
  m="2176440">will</span> <span m="2176730">pass</span> <span
  m="2177210">around</span> <span m="2177740">this</span> <span
  m="2178700">search</span> <span m="2179110">message.</span> <span
  m="2180350">I'll</span> <span m="2180480">use</span> <span
  m="2180660">a</span> <span m="2180950">slightly</span> <span
  m="2181850">more</span> <span m="2182090">shorthand</span> <span
  m="2182610">notation</span> <span m="2183170">than</span> <span
  m="2183620">from</span> <span m="2183830">the</span> <span
  m="2183920">lecture.</span> <span m="2192746">OK.</span> <span
  m="2193250">Let's</span> <span m="2193470">say</span> <span
  m="2194810">the</span> <span m="2194950">code</span> <span
  m="2195240">I</span> <span m="2195300">wrote</span> <span
  m="2196100">is</span> <span m="2196310">for a</span> <span
  m="2196800">process</span> <span m="2198630">u.</span> <span
  m="2202392">OK.</span></p><p><span m="2204880">If</span> <span
  m="2205070">we</span> <span m="2205840">receive</span> <span
  m="2206350">a</span> <span m="2206430">message,</span> <span
  m="2206930">a</span> <span m="2207040">search</span> <span
  m="2207310">message,</span> <span m="2208100">from</span> <span
  m="2208450">v</span> <span m="2211410">to</span> <span m="2211560">u,</span>
  <span m="2213460">that</span> <span m="2213740">means</span> <span
  m="2214990">u--</span> <span m="2215700">sorry,</span> <span
  m="2216030">v</span> <span m="2217310">is</span> <span
  m="2217660">trying</span> <span m="2218020">to</span> <span
  m="2218130">become</span> <span m="2218490">a parent.</span> <span
  m="2221136">OK.</span> <span m="2225130">And</span> <span
  m="2228010">if</span> <span m="2228180">I</span> <span m="2228270">do</span>
  <span m="2228420">not</span> <span m="2228630">have</span> <span m="2228830">a
  parent</span> <span m="2229210">yet,</span> <span m="2231530">I</span> <span
  m="2231650">should</span> <span m="2231880">set</span> <span
  m="2232380">the</span> <span m="2232510">parent</span> <span
  m="2235940">to</span> <span m="2236110">v.</span> <span
  m="2244798">OK.</span></p><p><span m="2245310">So</span> <span
  m="2245510">what's</span> <span m="2245680">the</span> <span
  m="2245750">next</span> <span m="2245950">step?</span> <span m="2258990">Now,
  we</span> <span m="2259210">got</span> <span m="2259430">this</span> <span
  m="2259760">search</span> <span m="2260010">message</span> <span
  m="2260760">from our</span> <span m="2260960">parent.</span> <span
  m="2261120">And</span> <span m="2262230">we</span> <span
  m="2262320">have</span> <span m="2262470">to</span> <span
  m="2262620">pass</span> <span m="2262830">it</span> <span
  m="2263030">along.</span></p><p><span m="2269687">AUDIENCE: Should</span>
  <span m="2270186">we</span> <span m="2270685">send</span> <span m="2271184">it
  to</span> <span m="2271683">the</span> <span m="2272182">like add</span> <span
  m="2272681">your child</span> <span
  m="2273180">[INAUDIBLE].</span></p><p><span m="2273690">LING REN: Oh,</span>
  <span m="2273950">yeah.</span> <span m="2274840">Great.</span> <span
  m="2278746">Yeah,</span> <span m="2279240">we</span> <span
  m="2279470">first</span> <span m="2279770">need</span> <span
  m="2279890">to</span> <span m="2280020">respond</span> <span
  m="2280910">by</span> <span m="2281090">saying,</span> <span
  m="2282916">OK,</span> <span m="2283310">I'll</span> <span
  m="2283530">use</span> <span m="2283740">a</span> <span
  m="2285730">shorter</span> <span m="2286120">notation.</span> <span
  m="2287300">Send</span> <span m="2287600">these</span> <span
  m="2287960">a</span> <span m="2288100">cue</span> <span
  m="2288770">that</span> <span m="2289640">that's</span> <span
  m="2289850">the</span> <span m="2289940">message</span> <span
  m="2292500">that</span> <span m="2292700">will</span> <span
  m="2292860">be</span> <span m="2292990">sent</span> <span
  m="2293260">to</span> <span m="2293390">v</span> <span m="2293710">at</span>
  <span m="2294030">some</span> <span m="2294190">point.</span></p><p><span
  m="2297350">The</span> <span m="2297430">message</span> <span
  m="2297800">we</span> <span m="2297930">send</span> <span
  m="2298330">is</span> <span m="2298840">parent</span> <span
  m="2300400">1.</span> <span m="2301330">Parent</span> <span
  m="2301670">2.</span> <span m="2303640">This</span> <span m="2303810">is
  a</span> <span m="2304510">response</span> <span m="2305480">to</span> <span
  m="2306500">v</span> <span m="2307670">saying,</span> <span
  m="2309140">yeah,</span> <span m="2309500">you are my</span> <span
  m="2309630">parent.</span> <span m="2314400">OK.</span></p><p><span
  m="2314990">Then</span> <span m="2315220">else,</span> <span
  m="2317870">we</span> <span m="2317980">also</span> <span
  m="2318200">have</span> <span m="2318360">to</span> <span
  m="2318780">respond</span> <span m="2326220">by</span> <span
  m="2326410">saying</span> <span m="2329140">parent</span> <span
  m="2329420">0.</span> <span m="2330720">You</span> <span m="2330880">are
  not</span> <span m="2331200">my</span> <span m="2331310">parent</span> <span
  m="2332070">because</span> <span m="2332270">I</span> <span
  m="2332350">already</span> <span m="2332910">got</span> <span
  m="2333070">some</span> <span m="2333250">other</span> <span
  m="2333410">parent.</span> <span m="2334890">OK.</span> <span
  m="2335320">Missing</span> <span m="2335700">a</span> <span
  m="2335760">step</span> <span m="2336000">here.</span></p><p><span
  m="2343590">If</span> <span m="2343770">we</span> <span
  m="2344190">receive</span> <span m="2344580">a</span> <span
  m="2344650">search</span> <span m="2344890">message.</span> <span
  m="2345255">Go</span> <span m="2345620">ahead.</span></p><p><span
  m="2346500">AUDIENCE: We send</span> <span m="2346940">messages</span> <span
  m="2347380">to all the</span> <span m="2347820">other</span> <span
  m="2348260">nodes.</span></p><p><span m="2349140">LING REN: Yeah.</span> <span
  m="2349560">We</span> <span m="2349670">need</span> <span
  m="2349820">to</span> <span m="2350700">pass it</span> <span
  m="2351830">to</span> <span m="2352920">all</span> <span m="2353090">my</span>
  <span m="2353450">potential</span> <span m="2354410">children.</span> <span
  m="2357170">So</span> <span m="2358970">I</span> <span m="2359100">use</span>
  <span m="2360070">this</span> <span m="2360360">comma</span> <span
  m="2361020">u,</span> <span m="2362560">meaning</span> <span
  m="2362850">the</span> <span m="2362950">neighbors</span> <span
  m="2363590">of</span> <span m="2363750">u.</span> <span m="2366050">And</span>
  <span m="2366240">then</span> <span m="2367370">I'll send</span> <span
  m="2367460">them a</span> <span m="2367590">message.</span></p><p><span
  m="2372000">What</span> <span m="2372180">message?</span> <span
  m="2375500">Search.</span> <span m="2387260">OK.</span> <span
  m="2399710">OK.</span></p><p><span m="2399965">So,</span> <span
  m="2401390">well,</span> <span m="2401780">naturally</span> <span
  m="2403020">since</span> <span m="2404760">we</span> <span
  m="2404860">have</span> <span m="2405030">a</span> <span
  m="2405100">search</span> <span m="2405350">message</span> <span
  m="2406000">and</span> <span m="2406360">we</span> <span
  m="2406470">know</span> <span m="2406620">how</span> <span
  m="2406740">to</span> <span m="2406830">deal</span> <span
  m="2407020">with</span> <span m="2407170">it,</span> <span
  m="2407860">now</span> <span m="2408020">we</span> <span
  m="2408130">are</span> <span m="2408190">sending</span> <span
  m="2408550">this</span> <span m="2408750">parent</span> <span
  m="2409070">message</span> <span m="2409690">with</span> <span
  m="2409900">better</span> <span m="2410130">deal</span> <span
  m="2410320">with</span> <span m="2410490">it.</span> <span
  m="2410620">Right.</span> <span m="2411940">So</span> <span
  m="2413030">then</span> <span m="2413550">the</span> <span
  m="2413670">next</span> <span m="2414900">chunk</span> <span
  m="2415180">of</span> <span m="2415310">code</span> <span
  m="2415650">should</span> <span m="2415940">be</span> <span
  m="2419140">if</span> <span m="2419330">we</span> <span
  m="2419520">receive</span> <span m="2420290">this</span> <span
  m="2421140">parent</span> <span m="2421520">message,</span> <span
  m="2424140">I'll say</span> <span m="2424270">parent b,</span> <span
  m="2425030">meaning</span> <span m="2425410">this</span> <span
  m="2425620">message</span> <span m="2426100">comes</span> <span
  m="2427020">with</span> <span m="2427240">either</span> <span m="2427700">true
  or</span> <span m="2428100">false.</span></p><p><span m="2432590">I</span>
  <span m="2432750">received</span> <span m="2433090">this</span> <span
  m="2433250">message</span> <span m="2433790">from</span> <span
  m="2434710">some</span> <span m="2435370">node</span> <span
  m="2435710">w.</span> <span m="2437854">OK.</span> <span
  m="2438700">I'm</span> <span m="2438900">still</span> <span
  m="2439190">u</span> <span m="2439370">here.</span> <span
  m="2440780">Because</span> <span m="2440930">I</span> <span
  m="2441050">just</span> <span m="2441300">send</span> <span
  m="2441720">all</span> <span m="2441840">the</span> <span
  m="2441900">message</span> <span m="2442300">to</span> <span
  m="2443120">all</span> <span m="2443290">the</span> <span
  m="2443380">w's,</span> <span m="2443910">to</span> <span
  m="2444230">all</span> <span m="2444400">my</span> <span
  m="2444530">neighbors,</span> <span m="2445050">and</span> <span
  m="2445250">they</span> <span m="2445360">should</span> <span
  m="2445910">give</span> <span m="2446090">me</span> <span m="2446220">a</span>
  <span m="2446280">response.</span> <span m="2455560">OK.</span></p><p><span
  m="2455930">If</span> <span m="2456520">b</span> <span m="2456840">is</span>
  <span m="2456980">1</span> <span m="2458440">that</span> <span
  m="2458670">means</span> <span m="2459420">this</span> <span
  m="2459700">particular</span> <span m="2460170">w</span> <span
  m="2463530">take</span> <span m="2463800">me</span> <span
  m="2464120">as</span> <span m="2464640">its</span> <span
  m="2464820">parent.</span> <span m="2466810">Make</span> <span
  m="2467400">sense?</span> <span m="2469360">OK.</span> <span
  m="2470210">So</span> <span m="2470300">I'd</span> <span
  m="2470400">better</span> <span m="2470870">have</span> <span
  m="2471150">a</span> <span m="2471930">list</span> <span m="2472290">of</span>
  <span m="2472400">my</span> <span m="2472560">children.</span> <span
  m="2474280">I</span> <span m="2474410">want</span> <span m="2474580">to</span>
  <span m="2474680">keep</span> <span m="2474860">track</span> <span
  m="2475070">of</span> <span m="2475190">that.</span> <span
  m="2476940">How?</span></p><p><span m="2480320">We</span> <span
  m="2480470">will</span> <span m="2480720">create</span> <span
  m="2481510">a</span> <span m="2481600">new</span> <span
  m="2481750">variable</span> <span m="2482650">for</span> <span
  m="2483360">children.</span> <span m="2485480">It's</span> <span
  m="2485660">going</span> <span m="2485880">to</span> <span
  m="2485990">be</span> <span m="2486190">initialized</span> <span
  m="2486790">to</span> <span m="2488680">what?</span> <span
  m="2492100">Yeah,</span> <span m="2492790">empty</span> <span
  m="2492990">set.</span></p><p><span m="2497730">And</span> <span
  m="2497850">now</span> <span m="2498030">if</span> <span
  m="2498240">this</span> <span m="2498650">b is</span> <span
  m="2498940">1,</span> <span m="2499772">then</span> <span
  m="2501620">I'm</span> <span m="2501780">going</span> <span
  m="2502040">to</span> <span m="2502590">put</span> <span m="2503270">w</span>
  <span m="2503970">in</span> <span m="2504160">this</span> <span
  m="2504390">children</span> <span m="2504710">list.</span> <span
  m="2509910">OK.</span> <span m="2511170">I'm</span> <span
  m="2511350">leaving</span> <span m="2514270">some</span> <span
  m="2514380">space here</span> <span m="2519090">because</span> <span
  m="2519610">our</span> <span m="2519970">root</span> <span
  m="2521700">should</span> <span m="2521910">be</span> <span
  m="2522040">slightly</span> <span m="2522500">different.</span></p><p><span
  m="2523020">So</span> <span m="2523070">every</span> <span
  m="2523350">other</span> <span m="2523530">node</span> <span
  m="2524470">will</span> <span m="2524940">send search</span> <span
  m="2525470">messages</span> <span m="2526050">when</span> <span
  m="2526290">it</span> <span m="2526440">receive</span> <span
  m="2526695">a</span> <span m="2526950">search</span> <span
  m="2527120">message.</span> <span m="2528110">We</span> <span
  m="2528240">need</span> <span m="2528410">someone</span> <span
  m="2528750">to</span> <span m="2528830">initiate.</span> <span
  m="2532260">Make</span> <span m="2532390">sense?</span> <span
  m="2534130">So</span> <span m="2534450">if</span> <span m="2536980">u</span>
  <span m="2537860">equals</span> <span m="2538270">root,</span> <span
  m="2539730">we</span> <span m="2539810">say</span> <span m="2540090">the
  root</span> <span m="2540390">is</span> <span
  m="2540620">v0.</span></p><p><span m="2546460">So</span> <span
  m="2546780">two</span> <span m="2546930">things</span> <span
  m="2547220">should</span> <span m="2547370">happen.</span> <span
  m="2548300">First,</span> <span m="2548820">we</span> <span
  m="2548950">should</span> <span m="2549170">set</span> <span
  m="2549400">its</span> <span m="2549590">parent</span> <span
  m="2551972">to</span> <span m="2552430">some</span> <span
  m="2552640">special</span> <span m="2553050">value.</span> <span
  m="2554260">Just</span> <span m="2554400">say</span> <span
  m="2554660">root.</span> <span m="2560050">And</span> <span
  m="2560220">then</span> <span m="2561480">I</span> <span
  m="2561620">should</span> <span m="2561870">copy</span> <span
  m="2562470">this</span> <span m="2563240">blob</span> <span m="2563590">of
  code</span> <span m="2564040">to here.</span> <span
  m="2578163">OK.</span></p><p><span m="2579160">It's</span> <span m="2579620">a
  little</span> <span m="2580010">crowded</span> <span m="2580130">but</span>
  <span m="2582890">I hope</span> <span m="2583040">it's</span> <span
  m="2583150">still</span> <span m="2584280">legible.</span> <span
  m="2595070">OK.</span> <span m="2595430">This</span> <span
  m="2595610">is</span> <span m="2595780">already</span> <span
  m="2597060">almost</span> <span m="2597430">the</span> <span
  m="2597530">correct</span> <span m="2597860">algorithm,</span> <span
  m="2599050">except</span> <span m="2599530">that</span> <span
  m="2599920">we</span> <span m="2600070">don't</span> <span
  m="2600220">know</span> <span m="2600310">how</span> <span
  m="2600430">to</span> <span m="2600530">terminate.</span> <span
  m="2602020">If</span> <span m="2602200">we</span> <span
  m="2602360">wait</span> <span m="2602830">long</span> <span
  m="2603020">enough,</span> <span m="2604140">then</span> <span
  m="2604280">everyone</span> <span m="2604720">will</span> <span
  m="2604940">receive</span> <span m="2605330">all</span> <span
  m="2605450">the</span> <span m="2605540">responses</span> <span
  m="2606270">and</span> <span m="2607060">everyone</span> <span
  m="2607430">will</span> <span m="2607610">know</span> <span
  m="2609110">its</span> <span m="2609290">parent</span> <span
  m="2609700">and</span> <span m="2609880">this</span> <span
  m="2610320">child</span> <span m="2610620">list.</span></p><p><span
  m="2612800">But</span> <span m="2613030">how</span> <span
  m="2613210">do</span> <span m="2613290">we</span> <span
  m="2613580">terminate?</span></p><p><span m="2618322">AUDIENCE: After</span>
  <span m="2618800">n rounds.</span></p><p><span m="2619472">LING REN:
  Yeah,</span> <span m="2619810">that's</span> <span m="2619990">one</span>
  <span m="2620120">way</span> <span m="2620230">to</span> <span
  m="2620330">do,</span> <span m="2620640">after</span> <span
  m="2620860">n</span> <span m="2621090">rounds.</span> <span
  m="2621270">But</span> <span m="2621740">the</span> <span
  m="2621870">whole</span> <span m="2622060">point</span> <span
  m="2622850">is</span> <span m="2623240">we</span> <span m="2623400">are</span>
  <span m="2623510">trying</span> <span m="2623740">to</span> <span
  m="2623820">find</span> <span m="2624090">what</span> <span
  m="2624260">n</span> <span m="2624450">is.</span> <span m="2624710">We</span>
  <span m="2624810">don't</span> <span m="2624940">know</span> <span
  m="2625050">how</span> <span m="2625150">many</span> <span
  m="2625370">nodes</span> <span m="2625620">are</span> <span
  m="2625690">there.</span></p><p><span m="2626420">AUDIENCE: If</span> <span
  m="2626920">we</span> <span m="2627420">receive</span> <span
  m="2629420">reject</span> <span m="2629920">for all,</span> <span
  m="2630420">[INAUDIBLE].</span></p><p><span m="2633920">LING REN: Say</span>
  <span m="2634190">again.</span></p><p><span m="2635551">AUDIENCE: For</span>
  <span m="2635990">all</span> <span m="2636400">the search,</span> <span
  m="2637280">if</span> <span m="2637850">we</span> <span
  m="2638220">receive</span> <span m="2638918">a</span> <span
  m="2639386">reject.</span></p><p><span m="2641260">LING REN: Oh,</span> <span
  m="2641450">yeah.</span> <span m="2641790">If</span> <span
  m="2641940">you</span> <span m="2642210">receive</span> <span
  m="2642950">a</span> <span m="2643040">response,</span> <span
  m="2644500">either</span> <span m="2644600">parent</span> <span
  m="2644990">0</span> <span m="2645190">or</span> <span
  m="2645380">parent</span> <span m="2645670">1</span> <span
  m="2646850">from</span> <span m="2647160">all your</span> <span
  m="2647450">neighbors,</span> <span m="2648380">then</span> <span
  m="2648600">your</span> <span m="2648780">job</span> <span
  m="2649030">is</span> <span m="2649180">pretty</span> <span
  m="2649380">much</span> <span m="2649590">done.</span> <span
  m="2651370">But</span> <span m="2652960">the</span> <span
  m="2653070">others</span> <span m="2653530">have</span> <span
  m="2654030">not.</span> <span m="2654813">All right.</span></p><p><span
  m="2655760">So</span> <span m="2655930">you</span> <span
  m="2656080">send</span> <span m="2656360">a</span> <span
  m="2656430">message</span> <span m="2656790">very</span> <span
  m="2657050">fast.</span> <span m="2657700">They</span> <span
  m="2657830">responded</span> <span m="2658330">to</span> <span
  m="2658625">you.</span> <span m="2658920">And</span> <span
  m="2659190">they</span> <span m="2659410">are</span> <span
  m="2659690">still</span> <span m="2659760">working</span> <span
  m="2660050">very</span> <span m="2660230">hard.</span> <span
  m="2662930">OK.</span></p><p><span m="2663630">So</span> <span
  m="2664510">then</span> <span m="2664760">we</span> <span
  m="2664880">need</span> <span m="2665050">to</span> <span
  m="2665460">use</span> <span m="2665800">the</span> <span
  m="2666210">technique</span> <span m="2666740">from</span> <span
  m="2666960">the</span> <span m="2667040">lecture</span> <span
  m="2667490">that's</span> <span m="2667700">called</span> <span
  m="2668260">converge</span> <span m="2668620">cast.</span> <span
  m="2671050">So</span> <span m="2671190">everyone</span> <span
  m="2671760">will</span> <span m="2672220">send</span> <span
  m="2672620">a</span> <span m="2673000">done</span> <span
  m="2673390">signal</span> <span m="2674620">when</span> <span
  m="2675380">it</span> <span m="2675540">is</span> <span
  m="2675700">done</span> <span m="2676430">and all its</span> <span
  m="2676800">children</span> <span m="2677200">are also</span> <span
  m="2677530">done.</span> <span m="2681418">OK.</span></p><p><span
  m="2684830">To</span> <span m="2685320">do</span> <span
  m="2685460">that,</span> <span m="2685940">I'm</span> <span
  m="2686080">going</span> <span m="2686340">to</span> <span
  m="2686480">define</span> <span m="2687070">a new</span> <span
  m="2687290">variable</span> <span m="2687820">called</span> <span
  m="2688090">searched.</span> <span m="2690150">Searched</span> <span
  m="2690610">means</span> <span m="2692220">someone</span> <span
  m="2692620">has</span> <span m="2692770">responded.</span> <span
  m="2693816">OK.</span> <span m="2694750">In</span> <span
  m="2694900">this</span> <span m="2695110">case,</span> <span
  m="2697240">w</span> <span m="2697550">has</span> <span
  m="2697750">responded.</span> <span m="2698670">I'll</span> <span
  m="2699050">put</span> <span m="2699300">it</span> <span
  m="2699490">into</span> <span m="2699720">the</span> <span m="2699840">search
  the list,</span> <span m="2701070">no</span> <span m="2701170">matter</span>
  <span m="2701430">whether</span> <span m="2701570">it</span> <span
  m="2702120">accepts</span> <span m="2702510">me</span> <span
  m="2702750">as</span> <span m="2702980">parent</span> <span
  m="2703270">or</span> <span m="2703390">reject.</span> <span
  m="2705106">OK.</span> <span m="2705500">Then</span> <span
  m="2705610">naturally</span> <span m="2706110">I</span> <span
  m="2706180">need</span> <span m="2706380">to</span> <span
  m="2707720">define</span> <span m="2708330">this</span> <span
  m="2708530">variable</span> <span m="2708970">here.</span> <span
  m="2724699">OK.</span></p><p><span m="2725200">As</span> <span
  m="2725370">a</span> <span m="2725420">last</span> <span
  m="2725740">step,</span> <span m="2728910">If</span> <span
  m="2732550">we</span> <span m="2732670">search</span> <span
  m="2733100">the</span> <span m="2733200">list</span> <span
  m="2736310">equals</span> <span m="2736710">my</span> <span
  m="2737440">neighbor</span> <span m="2737760">list,</span> <span
  m="2738310">that</span> <span m="2738460">means</span> <span
  m="2738670">everyone</span> <span m="2739020">has</span> <span
  m="2739180">responded</span> <span m="2743660">and</span> <span
  m="2744720">all</span> <span m="2744880">my</span> <span
  m="2745040">children</span> <span m="2745410">are done,</span> <span
  m="2751490">then</span> <span m="2751630">I need a</span> <span
  m="2752020">new</span> <span m="2752140">variable</span> <span
  m="2754370">called</span> <span m="2754570">done.</span> <span
  m="2755410">That's</span> <span m="2755620">another</span> <span
  m="2755890">list</span> <span m="2757830">tracking</span> <span
  m="2761450">who</span> <span m="2761920">has</span> <span
  m="2762100">finished</span> <span m="2762440">and who has</span> <span
  m="2762914">not.</span> <span m="2767654">OK.</span></p><p><span
  m="2768128">AUDIENCE: So what's the</span> <span m="2768610">first
  one?</span></p><p><span m="2769600">LING REN: Say</span> <span
  m="2770065">again.</span></p><p><span m="2770530">AUDIENCE: What was</span>
  <span m="2770995">the first one?</span></p><p><span m="2771930">LING REN:
  This</span> <span m="2772070">one?</span> <span m="2773140">Searched</span>
  <span m="2773590">means</span> <span m="2774450">someone</span> <span
  m="2774850">has</span> <span m="2775050">responded</span> <span
  m="2776975">to</span> <span m="2777420">the</span> <span
  m="2777570">search</span> <span m="2777840">message.</span> <span
  m="2779072">OK.</span> <span m="2779460">Done</span> <span
  m="2780020">means</span> <span m="2781576">all</span> <span
  m="2782060">its</span> <span m="2782230">children</span> <span
  m="2782550">are</span> <span m="2782650">done.</span> <span
  m="2785170">I</span> <span m="2785310">haven't</span> <span
  m="2785630">write</span> <span m="2785990">how</span> <span
  m="2786980">done</span> <span m="2787100">is</span> <span
  m="2787220">defined.</span> <span m="2787975">Give me a</span> <span
  m="2788370">minute.</span></p><p><span m="2789130">In</span> <span
  m="2789510">this</span> <span m="2789730">case,</span> <span
  m="2790100">I'm</span> <span m="2790240">going</span> <span
  m="2790470">to</span> <span m="2790620">send</span> <span
  m="2792560">my</span> <span m="2792690">parent</span> <span
  m="2793380">a</span> <span m="2793450">message.</span> <span
  m="2794780">This</span> <span m="2794950">is</span> <span
  m="2795120">the</span> <span m="2795250">step</span> <span
  m="2795500">of</span> <span m="2795710">converge</span> <span
  m="2796100">cast.</span> <span m="2798460">What</span> <span
  m="2798570">do</span> <span m="2798670">I</span> <span
  m="2798730">send?</span> <span m="2799410">I'm</span> <span
  m="2799620">going</span> <span m="2799820">to</span> <span
  m="2799920">send</span> <span m="2800190">them I'm</span> <span
  m="2800430">done.</span> <span m="2808318">OK.</span></p><p><span
  m="2809780">Then</span> <span m="2810370">whenever</span> <span
  m="2810720">we</span> <span m="2810860">create a</span> <span
  m="2811210">message,</span> <span m="2812620">we</span> <span
  m="2812800">should</span> <span m="2813450">deal</span> <span
  m="2813620">with</span> <span m="2813790">that</span> <span
  m="2813970">message.</span> <span m="2816440">If</span> <span
  m="2817460">we</span> <span m="2817610">receive</span> <span
  m="2817950">a</span> <span m="2818040">message</span> <span
  m="2818510">I'm</span> <span m="2818710">done,</span> <span
  m="2821570">what</span> <span m="2821760">do</span> <span
  m="2821800">we</span> <span m="2821890">do?</span> <span
  m="2822932">OK.</span> <span m="2823320">From</span> <span
  m="2824750">w,</span> <span m="2826335">then</span> <span
  m="2826760">we're</span> <span m="2827030">going</span> <span
  m="2827230">to</span> <span m="2827400">mark</span> <span
  m="2828700">that</span> <span m="2829000">node</span> <span
  m="2831090">as</span> <span m="2831280">done.</span> <span
  m="2846030">OK.</span></p><p><span m="2846830">There's</span> <span
  m="2847100">this</span> <span m="2847170">other</span> <span
  m="2847420">point.</span> <span m="2848470">So</span> <span
  m="2849220">someone</span> <span m="2849730">has</span> <span
  m="2850030">to</span> <span m="2850340">initiate</span> <span
  m="2850870">the</span> <span m="2850980">done</span> <span
  m="2851190">signal.</span> <span m="2852450">That's</span> <span
  m="2852640">going</span> <span m="2852820">to</span> <span
  m="2852920">be</span> <span m="2853100">our</span> <span
  m="2853240">leaves,</span> <span m="2854070">right.</span> <span
  m="2854550">Because</span> <span m="2855070">when</span> <span
  m="2855550">this</span> <span m="2856080">condition</span> <span
  m="2856470">check,</span> <span m="2857160">they</span> <span
  m="2857280">don't</span> <span m="2857450">have</span> <span
  m="2857600">any</span> <span m="2857750">children.</span> <span
  m="2858510">Their</span> <span m="2858700">children</span> <span
  m="2859020">list</span> <span m="2859210">is</span> <span
  m="2859420">empty</span> <span m="2859720">set.</span></p><p><span
  m="2860130">And</span> <span m="2860320">their</span> <span m="2860440">done
  list</span> <span m="2860990">is</span> <span m="2861170">also</span> <span
  m="2861400">empty</span> <span m="2861750">set.</span> <span
  m="2862270">But</span> <span m="2862390">they're</span> <span
  m="2862540">going</span> <span m="2862730">to</span> <span m="2863730">send
  the</span> <span m="2864160">I'm</span> <span m="2864280">done</span> <span
  m="2864460">signal</span> <span m="2864780">first.</span> <span
  m="2865580">And</span> <span m="2865710">then</span> <span
  m="2866440">in</span> <span m="2866600">the</span> <span
  m="2866680">median</span> <span m="2866940">nodes,</span> <span
  m="2867520">we'll</span> <span m="2867740">send</span> <span
  m="2868060">a</span> <span m="2868300">done</span> <span
  m="2868540">signal</span> <span m="2869040">when</span> <span m="2869260">all
  its</span> <span m="2869590">children</span> <span m="2870030">are
  done.</span> <span m="2872610">All right.</span></p><p><span
  m="2872780">So</span> <span m="2872950">this</span> <span
  m="2873150">is</span> <span m="2873330">the</span> <span
  m="2874000">converged</span> <span m="2874280">cast</span> <span
  m="2874580">version.</span> <span m="2877150">Only</span> <span
  m="2877420">gives</span> <span m="2877690">us</span> <span
  m="2877930">a</span> <span m="2879170">termination</span> <span
  m="2879730">point</span> <span m="2880930">of</span> <span
  m="2881080">our</span> <span m="2881930">spanning</span> <span
  m="2882340">tree</span> <span m="2882520">search.</span> <span
  m="2884380">We</span> <span m="2884520">haven't</span> <span
  m="2884870">count</span> <span m="2885460">the</span> <span
  m="2886290">number</span> <span m="2886600">of</span> <span
  m="2886710">nodes</span> <span m="2887700">in</span> <span m="2887930">the
  network.</span> <span m="2891072">But</span> <span m="2891570">that's</span>
  <span m="2891870">a</span> <span m="2892470">small</span> <span
  m="2892820">modification.</span></p><p><span m="2895330">We're</span> <span
  m="2895490">just</span> <span m="2895710">going</span> <span
  m="2895930">to</span> <span m="2896060">include</span> <span
  m="2896450">that</span> <span m="2896600">number</span> <span
  m="2897120">in</span> <span m="2897290">the</span> <span m="2897370">I'm
  done</span> <span m="2897760">signal.</span> <span m="2899700">So</span> <span
  m="2899960">then</span> <span m="2901190">I</span> <span
  m="2901940">need</span> <span m="2902060">to</span> <span
  m="2902270">define</span> <span m="2902560">another</span> <span
  m="2902890">variable</span> <span m="2903910">called</span> <span
  m="2904190">total</span> <span m="2905110">that's</span> <span
  m="2905350">initialized</span> <span m="2905940">to</span> <span
  m="2906050">0.</span> <span m="2907460">This</span> <span
  m="2907670">variable</span> <span m="2908160">will</span> <span
  m="2908280">attract</span> <span m="2908930">how</span> <span
  m="2909090">many</span> <span m="2911040">nodes</span> <span
  m="2912060">do</span> <span m="2912200">I</span> <span m="2912350">have</span>
  <span m="2913100">in</span> <span m="2913270">my</span> <span
  m="2913420">subtree,</span> <span m="2915090">including</span> <span
  m="2915560">me</span> <span m="2915860">and</span> <span
  m="2916050">all</span> <span m="2916190">my</span> <span
  m="2916320">children.</span></p><p><span m="2919740">Then</span> <span
  m="2920280">when</span> <span m="2920450">I</span> <span
  m="2920520">send</span> <span m="2921150">the</span> <span m="2921230">I'm
  done</span> <span m="2921620">signal,</span> <span m="2923040">I'm</span>
  <span m="2923730">going</span> <span m="2923930">to</span> <span
  m="2924060">send</span> <span m="2924390">this--</span> <span
  m="2925540">sorry.</span> <span m="2927370">That's</span> <span
  m="2927530">not</span> <span m="2927770">right way.</span> <span
  m="2930700">When</span> <span m="2930880">I'm</span> <span
  m="2930980">sending</span> <span m="2931380">the</span> <span m="2931650">I'm
  done</span> <span m="2931860">signal,</span> <span m="2932790">I'm</span>
  <span m="2932990">going</span> <span m="2933240">to</span> <span
  m="2933380">send</span> <span m="2933670">my</span> <span
  m="2933900">total</span> <span m="2934680">number</span> <span
  m="2935020">of</span> <span m="2935260">offspring</span> <span
  m="2936430">with</span> <span m="2936590">it.</span> <span
  m="2937980">And</span> <span m="2938400">when</span> <span
  m="2938610">I</span> <span m="2938680">receive,</span> <span
  m="2942360">one</span> <span m="2942530">of</span> <span m="2942620">my</span>
  <span m="2942800">children</span> <span m="2943330">reports</span> <span
  m="2943930">that</span> <span m="2944190">I</span> <span m="2944310">do</span>
  <span m="2944530">have</span> <span m="2944750">t children.</span></p><p><span
  m="2948310">I</span> <span m="2948430">need</span> <span m="2948580">to</span>
  <span m="2948800">increment</span> <span m="2949380">my</span> <span
  m="2949560">total</span> <span m="2951310">by</span> <span
  m="2951470">that</span> <span m="2951680">amount.</span> <span
  m="2961930">OK.</span> <span m="2962100">I</span> <span
  m="2962130">made</span> <span m="2962350">a</span> <span
  m="2962390">mistake</span> <span m="2962710">again.</span> <span
  m="2964240">Should</span> <span m="2964450">be</span> <span
  m="2964780">total</span> <span m="2965460">plus</span> <span
  m="2965700">1.</span> <span m="2968060">Right.</span></p><p><span
  m="2969010">Because</span> <span m="2969230">I'm</span> <span
  m="2969360">counting</span> <span m="2969800">all</span> <span
  m="2969910">my</span> <span m="2970030">children</span> <span
  m="2970550">and</span> <span m="2970730">then</span> <span
  m="2970930">I</span> <span m="2970990">should</span> <span
  m="2971670">include</span> <span m="2971910">myself.</span> <span
  m="2983480">So</span> <span m="2983660">that's</span> <span
  m="2983890">the</span> <span m="2984330">complete</span> <span
  m="2984620">algorithm.</span> <span m="2989670">Yeah.</span></p><p><span
  m="2989870">One</span> <span m="2990030">purpose</span> <span
  m="2990310">is</span> <span m="2990620">just</span> <span
  m="2990850">to</span> <span m="2992120">create</span> <span
  m="2992470">a</span> <span m="2992810">different</span> <span
  m="2993130">angle</span> <span m="2993510">to</span> <span
  m="2993760">look</span> <span m="2993970">at</span> <span
  m="2994170">distributed</span> <span m="2994380">algorithm.</span> <span
  m="2995070">Usually</span> <span m="2995600">just</span> <span
  m="2995850">draw</span> <span m="2996790">that</span> <span
  m="2997000">network</span> <span m="2997420">graphs.</span> <span
  m="2998310">But</span> <span m="2998670">sometimes</span> <span
  m="2998975">it's</span> <span m="2999280">helpful</span> <span
  m="2999650">to</span> <span m="2999810">think</span> <span
  m="3000010">about</span> <span m="3000810">how</span> <span
  m="3000980">the</span> <span m="3001090">code</span> <span
  m="3001370">actually</span> <span m="3001730">works.</span> <span
  m="3005706">OK.</span> <span m="3010180">That's</span> <span
  m="3010360">all</span> <span m="3010550">for</span> <span
  m="3010620">today.</span></p>
uid: b2a160074f73ded49d58e336f0d73981
type: courses
layout: video
---
