---
about_this_resource_text: >-
  <h2 class="subhead"><strong>Description</strong></h2> <p>In this lecture,
  Professor Strang explains both momentum-based gradient descent and Nesterov's
  accelerated gradient descent.</p> <h2
  class="subhead"><strong>Summary</strong></h2> <p>Study the zig-zag example:
  Minimize \(F = \frac{1}{2} (x^2 + by^2)\)<br /> Add a momentum term / heavy
  ball remembers its directions.<br /> New point \(k\) + 1 comes from TWO old
  points \(k\) and \(k\) - 1.<br /> &quot;1<sup>st</sup> order&quot; becomes
  &quot;2<sup>nd</sup> order&quot; or &quot;1<sup>st</sup> order system&quot; as
  in ODEs.<br /> Convergence rate improves: 1 - \(b\) to 1 - square root of
  \(b\) !</p> <p>Related section in textbook: VI.4</p>
  <p><strong>Instructor:</strong> Prof. Gilbert Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: wrEcHhoJxjM
    parent_uid: d701065a0c65a65f846f2d1b676f9614
    title: Video-YouTube-Stream
    type: Video
    uid: c44828d7f56613ac3e07700f53e82cdb
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/wrEcHhoJxjM/default.jpg'
    parent_uid: d701065a0c65a65f846f2d1b676f9614
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 677eafbaa1460767261c6043cfaad87d
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: wrEcHhoJxjM
    parent_uid: d701065a0c65a65f846f2d1b676f9614
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: a61550e1bc4f5ce68f6cc630afbbbe04
  - id: wrEcHhoJxjM.srt
    parent_uid: d701065a0c65a65f846f2d1b676f9614
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-23-accelerating-gradient-descent-use-momentum/wrEcHhoJxjM.srt
    title: 3play caption file
    type: null
    uid: 35aba05a08bab2e89aea54cdc4c9e6bb
  - id: wrEcHhoJxjM.pdf
    parent_uid: d701065a0c65a65f846f2d1b676f9614
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-23-accelerating-gradient-descent-use-momentum/wrEcHhoJxjM.pdf
    title: 3play pdf file
    type: null
    uid: 30baaee029e0f6821d48b6397fcca1d0
  - id: Caption-3Play YouTube id-SRT
    parent_uid: d701065a0c65a65f846f2d1b676f9614
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: d9dafa1b13d626bd6f752a9f22dd2a85
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: d701065a0c65a65f846f2d1b676f9614
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 9d94d37f8acb88d2098552459246db7d
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture23_300k.mp4'
    parent_uid: d701065a0c65a65f846f2d1b676f9614
    title: Video-Internet Archive-MP4
    type: Video
    uid: 7afb067aed9cdd7b2248e3dff93ca46c
inline_embed_id: 74354190lecture23acceleratinggradientdescentusemomentum29494280
order_index: 233
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-23-accelerating-gradient-descent-use-momentum
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-23-accelerating-gradient-descent-use-momentum
title: 'Lecture 23: Accelerating Gradient Descent (Use Momentum)'
transcript: >-
  <p><span m="1550">The</span> <span m="1640">following</span> <span
  m="2090">content</span> <span m="2600">is</span> <span
  m="2720">provided</span> <span m="3170">under</span> <span m="3380">a</span>
  <span m="3440">Creative</span> <span m="3920">Commons</span> <span
  m="4310">license.</span> <span m="5310">Your</span> <span
  m="5390">support</span> <span m="5900">will</span> <span m="6050">help</span>
  <span m="6320">MIT</span> <span m="6770">OpenCourseWare</span> <span
  m="7520">continue</span> <span m="8029">to</span> <span m="8180">offer</span>
  <span m="8510">high</span> <span m="8720">quality</span> <span
  m="9200">educational</span> <span m="9860">resources</span> <span
  m="10430">for</span> <span m="10550">free.</span> <span m="11610">To</span>
  <span m="11630">make</span> <span m="11840">a</span> <span
  m="11900">donation,</span> <span m="12680">or</span> <span m="12800">to</span>
  <span m="12950">view</span> <span m="13160">additional</span> <span
  m="13550">materials</span> <span m="14180">from</span> <span
  m="14360">hundreds</span> <span m="14690">of</span> <span m="14810">MIT</span>
  <span m="15170">courses,</span> <span m="16470">visit</span> <span
  m="16670">MIT</span> <span m="17180">OpenCourseWare</span> <span
  m="18140">at</span> <span m="18290">ocw.mit.edu.</span></p><p><span
  m="23100">GILBERT STRANG:</span> <span m="23320">OK.</span> <span
  m="23810">So</span> <span m="24030">what</span> <span m="24260">I</span> <span
  m="24360">promised,</span> <span m="24920">and</span> <span
  m="25160">now</span> <span m="25430">I'm</span> <span m="25580">going</span>
  <span m="25680">to</span> <span m="25820">do</span> <span m="26030">it,</span>
  <span m="27070">to</span> <span m="27950">talk</span> <span
  m="28280">about</span> <span m="28730">gradient</span> <span
  m="29240">descent</span> <span m="29870">and</span> <span m="31210">its</span>
  <span m="31520">descendants.</span> <span m="34010">So</span> <span
  m="35060">from</span> <span m="35300">the</span> <span m="35390">basic</span>
  <span m="35810">gradient</span> <span m="36290">descent</span> <span
  m="36710">formula,</span> <span m="37190">which</span> <span
  m="37430">we</span> <span m="37610">all</span> <span m="37790">know--</span>
  <span m="38390">let</span> <span m="38510">me</span> <span
  m="38660">just</span> <span m="39020">write</span> <span m="39380">that</span>
  <span m="39620">down--</span> <span m="40640">the</span> <span
  m="40670">new</span> <span m="41720">point</span> <span m="43730">is</span>
  <span m="44000">the</span> <span m="44240">old</span> <span
  m="44510">point.</span> <span m="47150">We're</span> <span
  m="47270">going</span> <span m="47630">downwards,</span> <span
  m="48290">so</span> <span m="48590">with</span> <span m="48800">a</span> <span
  m="48860">minus</span> <span m="49280">sign</span> <span
  m="49880">that's</span> <span m="50270">the</span> <span m="51080">step</span>
  <span m="51500">size.</span> <span m="52520">And</span> <span
  m="52850">we</span> <span m="53870">compute</span> <span m="54380">the</span>
  <span m="54470">gradient</span> <span m="55310">at</span> <span
  m="55880">XK.</span></p><p><span m="57260">So</span> <span
  m="57410">we're</span> <span m="58250">descending</span> <span
  m="59300">in</span> <span m="59450">the</span> <span
  m="59540">direction</span> <span m="60110">of</span> <span
  m="60260">the</span> <span m="60950">negative</span> <span
  m="61460">gradient.</span> <span m="62810">And</span> <span
  m="63020">that's</span> <span m="63920">the</span> <span
  m="64040">basic</span> <span m="64640">formula,</span> <span
  m="65330">and</span> <span m="66830">is</span> <span m="67040">in</span> <span
  m="67220">every</span> <span m="67490">book</span> <span
  m="68680">studied.</span> <span m="69470">So</span> <span m="69680">my</span>
  <span m="70940">main</span> <span m="72950">reference</span> <span
  m="73520">for</span> <span m="74960">some</span> <span m="75230">of</span>
  <span m="75290">these</span> <span m="78380">lectures</span> <span
  m="78980">is</span> <span m="79280">the</span> <span m="79670">book</span>
  <span m="79940">by</span> <span m="80240">Stephen</span> <span
  m="80780">Boyd</span> <span m="81980">and</span> <span m="82310">Lieven</span>
  <span m="83090">Vandenberghe.</span> <span m="84910">And</span> <span
  m="85980">I</span> <span m="86150">mention</span> <span
  m="86600">again,</span> <span m="86960">Professor</span> <span
  m="87470">Boyd</span> <span m="87920">is</span> <span
  m="88100">talking,</span> <span m="88880">in</span> <span
  m="89060">this</span> <span m="89330">room,</span> <span m="90350">next</span>
  <span m="90710">week</span> <span m="92270">Wednesday,</span> <span
  m="92910">Thursday</span> <span m="93470">and</span> <span
  m="94550">he's</span> <span m="94880">speaking</span> <span
  m="95360">somewhere</span> <span m="95780">on</span> <span
  m="95960">Friday</span> <span m="96980">at</span> <span
  m="97190">4:30--</span> <span m="98870">and</span> <span m="99140">of</span>
  <span m="99260">course,</span> <span m="99620">about</span> <span
  m="100070">optimization.</span></p><p><span m="101310">And</span> <span
  m="101630">he's</span> <span m="101900">a</span> <span m="101990">good</span>
  <span m="102230">lecturer,</span> <span m="103020">yeah,</span> <span
  m="103280">very</span> <span m="103610">good.</span> <span
  m="103950">OK.</span> <span m="105200">So</span> <span
  m="105380">there's</span> <span m="105570">steepest</span> <span
  m="106160">descent,</span> <span m="106790">and</span> <span
  m="107000">I've</span> <span m="107870">redrawn</span> <span
  m="108680">my</span> <span m="109280">picture</span> <span
  m="109790">from</span> <span m="110060">last</span> <span
  m="110420">time.</span> <span m="110780">Now</span> <span
  m="111210">I'll</span> <span m="111800">go</span> <span m="112040">over</span>
  <span m="112190">there</span> <span m="112430">and</span> <span
  m="112520">look</span> <span m="112760">at</span> <span m="112850">that</span>
  <span m="113090">picture.</span> <span m="113840">But</span> <span
  m="114050">let</span> <span m="114230">me</span> <span m="114410">say</span>
  <span m="114710">what's</span> <span m="115010">coming.</span> <span
  m="116390">So</span> <span m="116600">that's</span> <span
  m="117200">pretty</span> <span m="117590">standard--</span> <span
  m="119350">very</span> <span m="119710">standard,</span> <span
  m="120260">you</span> <span m="120370">could</span> <span
  m="120550">say.</span> <span m="122800">Then</span> <span
  m="123910">this</span> <span m="124330">is</span> <span m="124570">the</span>
  <span m="125800">improvement</span> <span m="127480">that</span> <span
  m="127870">is</span> <span m="128139">widely</span> <span
  m="128650">used.</span> <span m="129889">Adding</span> <span
  m="130090">in</span> <span m="130479">something</span> <span
  m="130930">called</span> <span m="131200">momentum</span> <span
  m="131980">to</span> <span m="132190">avoid</span> <span m="132760">the</span>
  <span m="132950">zigzag</span> <span m="133630">that</span> <span
  m="133750">we're</span> <span m="133870">going</span> <span
  m="134000">to</span> <span m="134170">see</span> <span m="134470">over</span>
  <span m="134680">there.</span> <span m="135920">And</span> <span
  m="136220">there's</span> <span m="136470">another</span> <span
  m="136830">way</span> <span m="137010">to</span> <span m="137160">do</span>
  <span m="137370">it.</span> <span m="137500">There's</span> <span
  m="137730">a</span> <span m="137820">Russian</span> <span
  m="138240">guy</span> <span m="138450">named</span> <span
  m="138690">Nesterov.</span> <span m="140640">His</span> <span
  m="140850">papers</span> <span m="141360">are</span> <span
  m="141450">not</span> <span m="141720">easy</span> <span m="142050">to</span>
  <span m="142170">read,</span> <span m="142500">but</span> <span
  m="142680">they've</span> <span m="142920">got</span> <span
  m="143400">serious</span> <span m="143940">content.</span></p><p><span
  m="145330">And</span> <span m="145890">one</span> <span
  m="146220">thing</span> <span m="146430">he</span> <span m="146670">did</span>
  <span m="146940">was</span> <span m="147270">find</span> <span
  m="147690">an</span> <span m="147840">alternative</span> <span
  m="149370">to</span> <span m="149520">momentum</span> <span
  m="151260">that</span> <span m="151440">also</span> <span
  m="152250">accelerated</span> <span m="153950">the</span> <span
  m="155580">descent.</span> <span m="157110">So</span> <span
  m="157320">this</span> <span m="157680">produces--</span> <span
  m="158670">these</span> <span m="159000">both</span> <span
  m="159390">produce</span> <span m="160410">faster</span> <span
  m="162180">descent</span> <span m="162870">than</span> <span
  m="163140">the</span> <span m="163860">ordinary</span> <span
  m="164400">one.</span> <span m="165600">OK.</span> <span m="166410">And</span>
  <span m="166530">then</span> <span m="166770">you</span> <span
  m="166950">know,</span> <span m="167310">looking</span> <span
  m="167730">ahead,</span> <span m="168930">that</span> <span
  m="169410">for</span> <span m="169920">problems</span> <span
  m="170580">of</span> <span m="170760">machine</span> <span
  m="171240">learning,</span> <span m="172410">they're</span> <span
  m="172740">so</span> <span m="172980">large</span> <span
  m="174840">that</span> <span m="175790">the</span> <span
  m="175950">gradient--</span> <span m="176750">we</span> <span
  m="176760">have</span> <span m="176850">so</span> <span m="177120">many</span>
  <span m="177420">variables--</span> <span m="178440">all</span> <span
  m="178620">those</span> <span m="178950">weights</span> <span
  m="179530">are</span> <span m="180270">variables.</span> <span
  m="181740">And</span> <span m="182580">that</span> <span
  m="182820">could--</span> <span m="183450">hundreds</span> <span
  m="183900">of</span> <span m="183990">thousands</span> <span
  m="185280">is</span> <span m="185970">not</span> <span
  m="186330">uncommon.</span></p><p><span m="187420">So</span> <span
  m="187920">then</span> <span m="188370">the</span> <span
  m="188520">gradient</span> <span m="189030">becomes</span> <span
  m="189600">a</span> <span m="190350">pretty</span> <span m="191550">big</span>
  <span m="191760">calculation,</span> <span m="192690">and</span> <span
  m="192840">we</span> <span m="192990">just</span> <span
  m="193310">don't</span> <span m="193680">have</span> <span
  m="193890">to</span> <span m="194040">do</span> <span m="194220">it</span>
  <span m="194340">all</span> <span m="194550">at</span> <span
  m="194640">once.</span> <span m="195070">We</span> <span
  m="195120">don't</span> <span m="195360">have</span> <span
  m="195510">to</span> <span m="195660">change--</span> <span
  m="196440">so</span> <span m="196650">XK</span> <span m="197940">is</span>
  <span m="198120">a</span> <span m="198210">vector</span> <span
  m="198750">of</span> <span m="198930">all</span> <span m="199320">the</span>
  <span m="200220">weights,</span> <span m="201210">or--</span> <span
  m="201480">and</span> <span m="201720">using--</span> <span
  m="202900">and</span> <span m="203520">our</span> <span
  m="203670">equations</span> <span m="204540">are</span> <span
  m="206520">matching</span> <span m="207550">the</span> <span
  m="208080">training</span> <span m="208590">data.</span> <span
  m="209740">So</span> <span m="209790">we</span> <span m="209910">don't</span>
  <span m="210150">have</span> <span m="210300">to</span> <span
  m="210390">use</span> <span m="210630">all</span> <span m="210780">the</span>
  <span m="210900">training</span> <span m="211290">data</span> <span
  m="211650">at</span> <span m="211740">once,</span> <span m="213030">and</span>
  <span m="213270">we</span> <span m="213420">don't.</span> <span
  m="214290">We</span> <span m="214440">take</span> <span m="214710">a</span>
  <span m="214770">batch</span> <span m="215220">of</span> <span
  m="215370">training</span> <span m="215910">data,</span> <span
  m="217140">like</span> <span m="217380">one.</span> <span
  m="218970">But</span> <span m="219150">that's</span> <span
  m="219480">sort</span> <span m="219750">of</span> <span
  m="220260">inefficient</span> <span m="220980">in</span> <span
  m="221100">the</span> <span m="221220">opposite</span> <span
  m="221700">direction,</span> <span m="222240">to</span> <span
  m="222330">do</span> <span m="222570">them</span> <span m="222750">one</span>
  <span m="222990">at</span> <span m="223140">a</span> <span
  m="223200">time.</span></p><p><span m="223920">So</span> <span
  m="224100">we</span> <span m="224220">don't</span> <span
  m="224410">know</span> <span m="224500">want</span> <span m="224760">to</span>
  <span m="224850">do</span> <span m="225100">them</span> <span
  m="225240">one</span> <span m="225540">at</span> <span m="225660">a</span>
  <span m="225750">time,</span> <span m="226210">but</span> <span
  m="226310">we</span> <span m="226350">don't</span> <span
  m="226560">want</span> <span m="226740">to</span> <span m="226860">do</span>
  <span m="227070">all</span> <span m="228120">million</span> <span
  m="228660">at</span> <span m="228840">a</span> <span m="228930">time.</span>
  <span m="229710">So</span> <span m="230340">the</span> <span
  m="230730">compromise</span> <span m="231570">is</span> <span
  m="231780">a</span> <span m="231870">mini</span> <span
  m="232290">batch.</span> <span m="233580">So</span> <span
  m="233970">stochastic</span> <span m="234760">gradient</span> <span
  m="235290">descent</span> <span m="236130">does</span> <span
  m="236550">a</span> <span m="236640">mini</span> <span m="237060">batch</span>
  <span m="237640">at</span> <span m="237700">a</span> <span
  m="237780">time--</span> <span m="239490">a</span> <span
  m="239550">mini</span> <span m="239910">batch</span> <span
  m="240390">of</span> <span m="242100">training,</span> <span
  m="243270">of</span> <span m="243420">samples</span> <span
  m="244710">training</span> <span m="245910">data</span> <span
  m="248070">each</span> <span m="248340">step.</span> <span
  m="252620">And</span> <span m="253050">it</span> <span m="253110">can</span>
  <span m="253290">choose</span> <span m="253710">them</span> <span
  m="254340">stochastically--</span> <span m="255330">meaning</span> <span
  m="255750">randomly,</span> <span m="256740">or</span> <span
  m="257910">more</span> <span m="258149">systematically--</span> <span
  m="259560">but</span> <span m="259860">we</span> <span m="260070">do</span>
  <span m="262190">a</span> <span m="262290">batch</span> <span
  m="262650">at</span> <span m="262770">a</span> <span m="262830">time.</span>
  <span m="263190">And</span> <span m="263280">that</span> <span
  m="263610">will</span> <span m="263820">come</span> <span
  m="264780">after</span> <span m="265410">the--</span> <span
  m="266266">it'll</span> <span m="267200">come</span> <span
  m="267450">next</span> <span m="267750">week</span> <span
  m="269760">after</span> <span m="270150">a</span> <span
  m="270180">marathon,</span> <span m="270780">of</span> <span
  m="270870">course,</span> <span m="271330">on</span> <span
  m="271800">Monday.</span> <span m="272340">OK.</span></p><p><span
  m="273510">So</span> <span m="273750">let</span> <span m="273930">me</span>
  <span m="274110">just</span> <span m="274980">go</span> <span
  m="275130">back</span> <span m="275370">to</span> <span m="275490">that</span>
  <span m="275700">picture</span> <span m="276120">for</span> <span
  m="276300">a</span> <span m="276360">moment,</span> <span
  m="276810">but</span> <span m="276990">then</span> <span m="277290">the</span>
  <span m="277410">real</span> <span m="277740">content</span> <span
  m="278310">of</span> <span m="278400">today</span> <span m="279420">is</span>
  <span m="280920">this</span> <span m="281220">one</span> <span
  m="282570">with</span> <span m="282780">momentum</span> <span
  m="283380">added.</span> <span m="283970">OK.</span> <span m="284550">I</span>
  <span m="284700">just--</span> <span m="285900">I</span> <span
  m="286110">probably</span> <span m="286410">haven't</span> <span
  m="286680">got</span> <span m="286830">the</span> <span
  m="286920">picture</span> <span m="287310">perfect</span> <span
  m="287820">yet.</span> <span m="288720">I'm</span> <span
  m="288840">just</span> <span m="289140">not</span> <span m="289410">an</span>
  <span m="289590">artist,</span> <span m="291910">but</span> <span
  m="294850">I</span> <span m="294940">think</span> <span m="295210">I'm</span>
  <span m="295330">closer.</span> <span m="296620">So</span> <span
  m="297820">this</span> <span m="298150">is--</span> <span
  m="299170">those</span> <span m="299470">are</span> <span
  m="299530">the</span> <span m="299680">level</span> <span
  m="300040">sets.</span> <span m="301120">Those</span> <span
  m="301390">are</span> <span m="301510">the</span> <span m="301660">sets</span>
  <span m="302670">f</span> <span m="302940">of</span> <span m="303020">x</span>
  <span m="303530">equal</span> <span m="303760">constant.</span> <span
  m="306550">And</span> <span m="307030">in</span> <span m="307270">our</span>
  <span m="307570">model</span> <span m="308020">problem,</span> <span
  m="308950">f</span> <span m="309190">of</span> <span m="309310">x</span> <span
  m="309670">is</span> <span m="310360">x1</span> <span
  m="311050">squared--</span> <span m="311590">or</span> <span
  m="311710">let's</span> <span m="311920">say</span> <span m="312190">x</span>
  <span m="312430">squared</span> <span m="313450">plus</span> <span
  m="313750">b-y</span> <span m="314320">squared</span> <span
  m="314860">equal</span> <span m="315250">constant</span> <span
  m="316450">with</span> <span m="316750">small</span> <span
  m="317320">b--</span> <span m="318280">b</span> <span m="318730">below</span>
  <span m="319120">1</span> <span m="319570">and</span> <span
  m="319690">maybe</span> <span m="320650">far</span> <span
  m="320950">below</span> <span m="321280">1.</span> <span m="322240">So</span>
  <span m="322450">those</span> <span m="322750">are</span> <span
  m="322870">ellipses.</span></p><p><span m="326310">Those are the</span> <span
  m="326580">equations</span> <span m="327230">of</span> <span
  m="327350">an</span> <span m="327470">ellipse,</span> <span
  m="327860">and</span> <span m="327980">that's</span> <span
  m="328220">what</span> <span m="328370">I</span> <span m="328490">tried</span>
  <span m="328760">to</span> <span m="328880">draw.</span> <span
  m="330050">And</span> <span m="330170">if</span> <span m="330320">b</span>
  <span m="330560">is</span> <span m="330680">small,</span> <span
  m="331310">then</span> <span m="331550">the</span> <span
  m="331700">ellipses</span> <span m="332240">are</span> <span
  m="332840">long</span> <span m="333140">and</span> <span
  m="333260">thin</span> <span m="333530">like</span> <span
  m="333830">that.</span> <span m="335300">And</span> <span
  m="336020">now,</span> <span m="336470">what's</span> <span
  m="337610">the</span> <span m="337730">picture?</span> <span
  m="338510">You</span> <span m="338660">start</span> <span
  m="339050">with</span> <span m="339230">a</span> <span m="339260">point</span>
  <span m="339590">x</span> <span m="339860">nought,</span> <span
  m="340220">and</span> <span m="340340">you</span> <span
  m="340490">descend</span> <span m="342470">in</span> <span
  m="342620">the</span> <span m="342870">steepest</span> <span
  m="343170">direction.</span> <span m="344400">So</span> <span
  m="344580">the</span> <span m="344700">steepest</span> <span
  m="345150">direction</span> <span m="345660">is</span> <span
  m="345780">perpendicular</span> <span m="346620">to</span> <span
  m="346800">the</span> <span m="346920">level</span> <span
  m="347250">set,</span> <span m="347990">right?</span> <span
  m="348240">Perpendicular</span> <span m="349020">to</span> <span
  m="349170">the</span> <span m="349320">ellipse.</span> <span
  m="349650">So</span> <span m="349830">you're</span> <span
  m="350340">down,</span> <span m="350670">down,</span> <span
  m="350910">down.</span> <span m="351270">You're</span> <span
  m="351390">passing</span> <span m="351930">through</span> <span
  m="352200">more</span> <span m="352500">ellipses,</span> <span
  m="353100">more</span> <span m="353370">ellipses,</span> <span
  m="354270">more</span> <span m="354510">ellipses.</span></p><p><span
  m="355470">Eventually,</span> <span m="356100">your</span> <span
  m="356730">tangent</span> <span m="357400">to</span> <span
  m="357820">a--</span> <span m="358620">it</span> <span m="358710">seems</span>
  <span m="359010">to</span> <span m="359130">me</span> <span
  m="359370">it</span> <span m="359760">has</span> <span m="360000">to</span>
  <span m="360090">be</span> <span m="360240">tangent.</span> <span
  m="360840">I</span> <span m="360930">didn't</span> <span
  m="361140">read</span> <span m="361440">this,</span> <span
  m="361680">but</span> <span m="362340">looks</span> <span
  m="362760">reasonable</span> <span m="363240">to</span> <span
  m="363330">me</span> <span m="363990">that</span> <span m="365180">the</span>
  <span m="365770">farthest</span> <span m="366630">in</span> <span
  m="368940">level</span> <span m="369240">set--</span> <span
  m="369600">farthest</span> <span m="369905">in</span> <span
  m="370210">ellipse--</span> <span m="371760">you're</span> <span
  m="372060">tangent</span> <span m="372600">to,</span> <span
  m="372900">and</span> <span m="372990">then</span> <span m="373170">you</span>
  <span m="373320">start</span> <span m="373650">going</span> <span
  m="373980">up</span> <span m="374130">again.</span> <span m="375220">So</span>
  <span m="375300">that's</span> <span m="375630">the</span> <span
  m="375810">optimal</span> <span m="376290">point</span> <span
  m="376620">to</span> <span m="376800">stop</span> <span m="377340">to</span>
  <span m="377520">end</span> <span m="377760">that</span> <span
  m="378030">step.</span> <span m="379440">And</span> <span
  m="379560">then</span> <span m="379740">where</span> <span
  m="380010">does</span> <span m="380220">the</span> <span
  m="380310">next</span> <span m="380580">step</span> <span
  m="380880">go?</span> <span m="381810">Well,</span> <span
  m="382290">you're</span> <span m="382500">here.</span> <span
  m="383420">You're</span> <span m="383590">on</span> <span m="383860">an</span>
  <span m="383970">ellipse.</span> <span m="385080">That's</span> <span
  m="385320">a</span> <span m="385380">level</span> <span
  m="385740">set.</span></p><p><span m="386520">You</span> <span
  m="386610">want</span> <span m="386820">to</span> <span m="386880">move</span>
  <span m="387630">in</span> <span m="387750">the</span> <span
  m="387870">gradient</span> <span m="388350">direction.</span> <span
  m="388980">That's</span> <span m="389250">perpendicular</span> <span
  m="390060">to</span> <span m="390210">the</span> <span m="390330">level</span>
  <span m="390660">set.</span> <span m="391350">So</span> <span
  m="391590">you're</span> <span m="391740">going</span> <span
  m="392130">down</span> <span m="393120">somewhere</span> <span
  m="393450">here,</span> <span m="393870">and</span> <span
  m="393960">you're</span> <span m="394080">passing</span> <span
  m="394620">again</span> <span m="395010">through</span> <span
  m="396450">more</span> <span m="396720">and</span> <span
  m="396810">more</span> <span m="397020">ellipses,</span> <span
  m="397620">until</span> <span m="397980">you're</span> <span
  m="398730">tangent</span> <span m="399300">to</span> <span m="401310">a</span>
  <span m="402210">smaller</span> <span m="402790">ellipse</span> <span
  m="403290">here.</span> <span m="404760">And</span> <span
  m="405600">you</span> <span m="405750">see</span> <span m="406020">the</span>
  <span m="406170">zigzag</span> <span m="406800">pattern.</span> <span
  m="408280">And</span> <span m="408420">that</span> <span
  m="408600">zigzag</span> <span m="409200">pattern</span> <span
  m="409710">is</span> <span m="409920">what</span> <span m="410190">we</span>
  <span m="410460">see,</span> <span m="411420">by</span> <span
  m="411660">formula,</span> <span m="413100">in</span> <span
  m="416610">Boyd's</span> <span m="416970">book,</span> <span
  m="417300">and</span> <span m="418290">many</span> <span
  m="418650">other</span> <span m="418830">places,</span> <span
  m="419310">too.</span> <span m="420240">The</span> <span
  m="420690">formula</span> <span m="421230">has</span> <span
  m="422520">those</span> <span m="422880">powers</span> <span
  m="423450">of</span> <span m="425070">the</span> <span m="425700">magic</span>
  <span m="426360">number.</span> <span m="426990">So</span> <span
  m="427170">we</span> <span m="427350">start</span> <span m="427920">at</span>
  <span m="428250">the--</span> <span m="428850">start</span> <span
  m="429300">at</span> <span m="433080">the</span> <span m="433170">point</span>
  <span m="433620">b1,</span> <span m="437640">and</span> <span
  m="439440">follow</span> <span m="439770">this</span> <span
  m="440010">path.</span></p><p><span m="441300">Then</span> <span
  m="441600">the</span> <span m="441750">X's</span> <span m="443310">are</span>
  <span m="443490">the</span> <span m="443610">same</span> <span
  m="444090">b</span> <span m="445380">times</span> <span m="446310">this</span>
  <span m="446550">quantity</span> <span m="447120">to</span> <span
  m="447320">the</span> <span m="447810">kth</span> <span
  m="448170">power.</span> <span m="449670">And</span> <span
  m="449850">here</span> <span m="450060">is</span> <span m="450180">that</span>
  <span m="450390">quantity,</span> <span m="451020">b</span> <span
  m="451320">minus</span> <span m="451830">1</span> <span m="452130">over</span>
  <span m="452340">b</span> <span m="452610">plus</span> <span
  m="453030">1.</span> <span m="454180">So</span> <span m="454230">you</span>
  <span m="454380">see,</span> <span m="454620">for</span> <span
  m="454770">a</span> <span m="454830">small</span> <span m="455190">b,</span>
  <span m="455580">that's</span> <span m="456660">a</span> <span
  m="456720">negative</span> <span m="457200">number.</span> <span
  m="458410">So</span> <span m="458520">it's</span> <span
  m="458670">flipping</span> <span m="459210">sine</span> <span
  m="459840">in</span> <span m="460020">the</span> <span m="460170">X's,</span>
  <span m="460650">as</span> <span m="460860">we</span> <span
  m="461040">saw</span> <span m="461330">in</span> <span m="461430">the</span>
  <span m="461520">picture.</span> <span m="462720">At least</span> <span
  m="463500">that</span> <span m="463650">part</span> <span m="463920">of</span>
  <span m="463980">the</span> <span m="464040">picture</span> <span
  m="464430">is</span> <span m="464940">correct.</span> <span
  m="465690">The</span> <span m="465810">y's</span> <span
  m="466410">don't</span> <span m="466710">flip</span> <span
  m="467060">sine.</span> <span m="468390">So</span> <span
  m="468570">this</span> <span m="468810">was</span> <span m="469050">XK,</span>
  <span m="471330">and</span> <span m="471690">when</span> <span
  m="471930">k</span> <span m="472170">is</span> <span m="472260">0,</span>
  <span m="472680">we</span> <span m="472830">got</span> <span
  m="473070">b.</span> <span m="475380">YK</span> <span m="476310">is,</span>
  <span m="477000">I</span> <span m="477120">think,</span> <span
  m="482100">is</span> <span m="482250">not</span> <span
  m="482550">flipping</span> <span m="483110">sine.</span> <span
  m="483600">So</span> <span m="483810">that</span> <span
  m="484020">looks</span> <span m="484320">good.</span></p><p><span
  m="485400">And</span> <span m="485550">then</span> <span
  m="485850">FK--</span> <span m="486990">the</span> <span
  m="487530">value</span> <span m="487950">of</span> <span m="488100">f--</span>
  <span m="489780">also</span> <span m="490260">was</span> <span
  m="490680">the</span> <span m="490860">same</span> <span
  m="491640">quantity.</span> <span m="492690">FK</span> <span
  m="496140">is</span> <span m="496980">that</span> <span m="497190">same</span>
  <span m="497850">quantity</span> <span m="498520">to</span> <span
  m="498600">the</span> <span m="498720">kth</span> <span
  m="499530">times</span> <span m="499950">f0.</span> <span m="500910">So</span>
  <span m="501390">that</span> <span m="501600">quantity's</span> <span
  m="502200">all</span> <span m="502740">important.</span> <span
  m="504810">And</span> <span m="505050">so</span> <span m="505350">the</span>
  <span m="505470">purpose</span> <span m="506010">of</span> <span
  m="506130">today's</span> <span m="506610">lecture,</span> <span
  m="507930">is</span> <span m="508080">to</span> <span m="508440">tell</span>
  <span m="508770">you</span> <span m="509220">what</span> <span
  m="510180">the</span> <span m="510300">momentum</span> <span
  m="512179">term--</span> <span m="513159">what</span> <span
  m="513380">improvement--</span> <span m="514130">what</span> <span
  m="514309">change</span> <span m="514820">that</span> <span
  m="515090">brings</span> <span m="516110">in</span> <span
  m="516409">the</span> <span m="516830">basic</span> <span
  m="518000">steepest</span> <span m="518480">descent</span> <span
  m="518870">formula.</span> <span m="519350">I'm</span> <span
  m="519500">going</span> <span m="519640">to</span> <span m="519740">add</span>
  <span m="520070">on</span> <span m="520280">another</span> <span
  m="520730">term,</span> <span m="521630">which</span> <span
  m="521870">is</span> <span m="522020">going</span> <span m="522190">to</span>
  <span m="522320">have</span> <span m="522590">some--</span> <span
  m="523940">give</span> <span m="524179">us</span> <span m="524270">some</span>
  <span m="524540">memory</span> <span m="525020">of</span> <span
  m="525140">the</span> <span m="525230">previous</span> <span
  m="525680">step.</span> <span m="528120">And</span> <span m="530210">so</span>
  <span m="530400">when</span> <span m="530610">I</span> <span
  m="530730">do</span> <span m="530940">that,</span> <span m="533930">I</span>
  <span m="534080">want</span> <span m="534290">to</span> <span
  m="535310">track</span> <span m="535670">that</span> <span
  m="536060">kind</span> <span m="536390">of</span> <span
  m="536570">descent</span> <span m="538080">for</span> <span
  m="539300">the</span> <span m="539810">new--</span> <span
  m="540830">for</span> <span m="541010">the</span> <span
  m="541430">accelerated</span> <span m="542930">descent,</span> <span
  m="544190">and</span> <span m="544400">track</span> <span m="544820">it</span>
  <span m="545060">and</span> <span m="545360">see</span> <span
  m="546410">what</span> <span m="547340">improvement</span> <span
  m="548090">the</span> <span m="548720">momentum</span> <span
  m="549320">term</span> <span m="549710">brings.</span></p><p><span
  m="551190">And</span> <span m="552230">so</span> <span m="552440">the</span>
  <span m="552560">final</span> <span m="552980">result</span> <span
  m="553490">will</span> <span m="553670">be</span> <span m="553880">to</span>
  <span m="554030">tell</span> <span m="554300">you</span> <span
  m="554450">the</span> <span m="554630">improvement</span> <span
  m="555290">in</span> <span m="555440">the--</span> <span
  m="555860">produced</span> <span m="556340">by</span> <span
  m="556580">the</span> <span m="556700">momentum</span> <span
  m="557330">term.</span> <span m="558380">Maybe</span> <span
  m="558800">while</span> <span m="559300">I</span> <span m="559490">have</span>
  <span m="559730">your</span> <span m="559910">attention,</span> <span
  m="561740">I'll</span> <span m="561830">tell</span> <span
  m="562100">you</span> <span m="562190">what</span> <span m="562400">it</span>
  <span m="562520">is</span> <span m="562760">now.</span> <span
  m="564140">And</span> <span m="564290">then</span> <span
  m="564620">will</span> <span m="564830">come</span> <span
  m="565310">the</span> <span m="566580">details,</span> <span
  m="567480">the</span> <span m="567660">algebra.</span> <span
  m="569430">And</span> <span m="570240">to</span> <span m="570450">me--</span>
  <span m="571980">so</span> <span m="572250">this</span> <span
  m="572450">is</span> <span m="572570">as</span> <span m="572670">my</span>
  <span m="572910">own</span> <span m="573210">thought--</span> <span
  m="576360">it's</span> <span m="576540">a</span> <span
  m="576600">miracle</span> <span m="577230">that</span> <span
  m="577420">the</span> <span m="577830">algebra,</span> <span
  m="578770">which</span> <span m="578940">is</span> <span
  m="579410">straightforward--</span> <span m="580650">you</span> <span
  m="580770">really</span> <span m="581100">see</span> <span
  m="581370">the</span> <span m="581520">value</span> <span m="581910">of</span>
  <span m="582090">eigenvectors.</span> <span m="583740">We</span> <span
  m="583950">explained</span> <span m="584480">eigenvectors</span> <span
  m="585180">in</span> <span m="585360">class,</span> <span
  m="585810">but</span> <span m="587100">here</span> <span m="587370">you</span>
  <span m="587550">see</span> <span m="587910">why--</span> <span
  m="589410">how</span> <span m="589650">to</span> <span m="589740">use</span>
  <span m="590040">them.</span> <span m="591310">That</span> <span
  m="591670">is</span> <span m="591840">really</span> <span m="592230">a</span>
  <span m="592320">good</span> <span m="592650">exercise.</span></p><p><span
  m="594180">But</span> <span m="594900">to</span> <span m="595050">me</span>
  <span m="595290">it's</span> <span m="595530">a</span> <span
  m="595590">miracle</span> <span m="597390">that</span> <span
  m="598020">the</span> <span m="599160">expression</span> <span
  m="601870">with</span> <span m="602170">momentum</span> <span
  m="603940">is</span> <span m="604240">very</span> <span m="604600">much</span>
  <span m="604930">like</span> <span m="605260">that</span> <span
  m="605530">expression,</span> <span m="606770">but</span> <span
  m="607000">different,</span> <span m="607450">of</span> <span
  m="607570">course.</span> <span m="608770">The</span> <span
  m="613390">decay--</span> <span m="614230">the</span> <span
  m="614380">term</span> <span m="614710">that</span> <span
  m="614860">tells</span> <span m="615220">you</span> <span
  m="615370">how</span> <span m="615610">fast</span> <span m="616030">the</span>
  <span m="616150">decay</span> <span m="616690">is--</span> <span
  m="618100">is</span> <span m="618640">smaller.</span> <span
  m="619900">So</span> <span m="620230">you're</span> <span
  m="620380">taking</span> <span m="620770">kth</span> <span
  m="621130">power.</span> <span m="621520">So</span> <span
  m="622450">let</span> <span m="622600">me--</span> <span
  m="622810">I'll</span> <span m="622960">write</span> <span
  m="623230">that</span> <span m="623410">down,</span> <span
  m="623770">if</span> <span m="623890">that's</span> <span
  m="624130">all</span> <span m="624220">right.</span> <span m="625070">I</span>
  <span m="625330">didn't</span> <span m="625570">plan</span> <span
  m="625900">to</span> <span m="626020">do--</span> <span m="626560">to</span>
  <span m="626830">reveal</span> <span m="627490">the</span> <span
  m="630790">final</span> <span m="631150">result</span> <span
  m="632050">at</span> <span m="632170">the</span> <span
  m="632290">beginning</span> <span m="632710">of</span> <span
  m="632800">the</span> <span m="632890">lecture.</span> <span
  m="634010">But</span> <span m="634210">I</span> <span m="634270">think</span>
  <span m="634930">you</span> <span m="635620">want</span> <span
  m="635860">to</span> <span m="635950">see</span> <span m="636190">where</span>
  <span m="636430">we're</span> <span m="636550">going.</span> <span
  m="637560">So</span> <span m="637750">with</span> <span
  m="638020">momentum--</span> <span m="645860">and</span> <span
  m="646130">we</span> <span m="646250">have</span> <span m="646460">to</span>
  <span m="646880">see</span> <span m="647150">what</span> <span
  m="647330">that</span> <span m="647510">means--</span> <span
  m="648500">this</span> <span m="649250">term</span> <span m="650540">of</span>
  <span m="651380">1</span> <span m="651770">minus</span> <span
  m="652220">b</span> <span m="652580">over</span> <span m="652820">1</span>
  <span m="653120">plus</span> <span m="653480">b</span> <span
  m="655310">becomes--</span> <span m="656810">changes</span> <span
  m="657410">to--</span> <span m="663020">1</span> <span m="663360">minus</span>
  <span m="663810">square</span> <span m="664230">root</span> <span
  m="664440">of</span> <span m="664560">b</span> <span m="665580">over</span>
  <span m="665820">1</span> <span m="666090">plus</span> <span m="666440">square
  root</span> <span m="666765">of b.</span></p><p><span m="668820">So</span>
  <span m="669270">I</span> <span m="669330">mentioned</span> <span
  m="669720">that</span> <span m="669930">before,</span> <span
  m="670350">but</span> <span m="672480">I</span> <span m="672540">don't</span>
  <span m="672780">think</span> <span m="672930">I</span> <span
  m="673020">wrote</span> <span m="673560">it</span> <span
  m="673620">down</span> <span m="674130">as</span> <span
  m="674310">clearly.</span> <span m="676950">So</span> <span
  m="677590">the</span> <span m="677730">miracle</span> <span
  m="678210">to</span> <span m="678330">me</span> <span m="678570">is</span>
  <span m="678750">to</span> <span m="678870">get</span> <span
  m="679080">such</span> <span m="679380">a</span> <span m="679440">nice</span>
  <span m="679800">expression</span> <span m="680940">for</span> <span
  m="681150">the--</span> <span m="682080">because</span> <span
  m="682410">you'll</span> <span m="682620">see</span> <span
  m="682890">the</span> <span m="683040">algebra</span> <span
  m="683640">is--</span> <span m="684000">it</span> <span
  m="684360">works,</span> <span m="684900">but</span> <span
  m="685140">it</span> <span m="689860">involves</span> <span
  m="691030">more</span> <span m="691510">terms</span> <span
  m="691990">because</span> <span m="692410">of</span> <span
  m="692500">momentum,</span> <span m="693700">involves</span> <span
  m="694150">doing</span> <span m="694480">a</span> <span
  m="695170">minimization</span> <span m="696220">of</span> <span
  m="696400">eigenvalues,</span> <span m="697420">and</span> <span
  m="697630">yet</span> <span m="697870">it</span> <span m="698050">comes</span>
  <span m="698440">out</span> <span m="698620">nicely.</span> <span
  m="699460">And</span> <span m="699970">then</span> <span m="700300">you</span>
  <span m="700420">have</span> <span m="700630">to</span> <span
  m="700750">see</span> <span m="701080">the</span> <span
  m="701260">importance</span> <span m="701860">of</span> <span
  m="702010">that.</span> <span m="702860">So</span> <span m="703270">let</span>
  <span m="703420">me--</span> <span m="703570">I will</span> <span
  m="703810">just</span> <span m="704050">take</span> <span
  m="704320">the</span> <span m="704470">same</span> <span
  m="704800">example</span> <span m="705340">that</span> <span
  m="705490">I</span> <span m="705580">mentioned</span> <span
  m="706360">before.</span> <span m="707290">If</span> <span m="707440">b</span>
  <span m="707680">is</span> <span m="707860">1</span> <span
  m="708130">over</span> <span m="708340">100,</span> <span
  m="709840">then</span> <span m="710140">this</span> <span m="710410">is</span>
  <span m="710590">0.99</span> <span m="712770">over</span> <span
  m="713350">1.01.</span> <span m="715750">I</span> <span
  m="715900">think</span> <span m="716290">that</span> <span
  m="716530">these--</span> <span m="718490">there's</span> <span
  m="719530">a</span> <span m="719620">square</span> <span
  m="720310">here,</span> <span m="723070">2k.</span></p><p><span
  m="725470">So</span> <span m="725650">if</span> <span
  m="725800">we're--</span> <span m="726650">so</span> <span
  m="726900">I'll</span> <span m="727330">just</span> <span
  m="727780">keep</span> <span m="728050">the</span> <span
  m="728180">square</span> <span m="728620">there,</span> <span
  m="730830">no</span> <span m="731070">big</span> <span
  m="731280">change,</span> <span m="731740">but</span> <span
  m="732630">I'm</span> <span m="732900">looking</span> <span
  m="733290">at--</span> <span m="733390">now</span> <span
  m="733680">here--</span> <span m="733920">at</span> <span
  m="734010">the</span> <span m="734160">square.</span> <span
  m="737450">Maybe</span> <span m="738200">squares</span> <span
  m="738680">are</span> <span m="738830">everywhere.</span> <span
  m="741740">OK.</span> <span m="742200">So</span> <span
  m="743420">that's</span> <span m="745820">close</span> <span
  m="746240">to</span> <span m="746390">1.</span> <span m="746730">And</span>
  <span m="746840">now</span> <span m="747020">let's</span> <span
  m="747290">compare</span> <span m="747830">that</span> <span
  m="748130">with</span> <span m="748430">what</span> <span m="748640">we</span>
  <span m="748790">have.</span> <span m="749540">So</span> <span
  m="749780">if</span> <span m="749930">b</span> <span m="750200">is</span>
  <span m="750980">1</span> <span m="751190">over</span> <span
  m="751410">100--</span> <span m="752510">so</span> <span m="752630">I'm</span>
  <span m="752750">taking</span> <span m="753110">b</span> <span
  m="753380">to</span> <span m="753470">be</span> <span m="753680">1</span>
  <span m="753950">over</span> <span m="754100">100--</span> <span
  m="755120">and</span> <span m="755300">square</span> <span m="755630">root
  of</span> <span m="755720">b</span> <span m="755930">is</span> <span
  m="756080">1</span> <span m="756290">over</span> <span m="756530">10.</span>
  <span m="757460">So</span> <span m="757640">this</span> <span
  m="757880">is</span> <span m="758680">0.9</span> <span m="760580">over</span>
  <span m="760940">1.1</span> <span m="762920">squared.</span> <span
  m="765090">And</span> <span m="765330">there's</span> <span
  m="765630">a</span> <span m="765720">tremendous--</span> <span
  m="766580">that's a lot</span> <span m="767210">smaller</span> <span
  m="767820">than</span> <span m="768390">that</span> <span
  m="768660">is.</span> <span m="769950">Right.</span> <span
  m="771180">9/10--</span> <span m="771990">9</span> <span
  m="773160">over</span> <span m="773370">11,</span> <span
  m="774150">compared</span> <span m="774600">to</span> <span
  m="774690">99</span> <span m="775440">over</span> <span
  m="775680">101.</span></p><p><span m="777120">This</span> <span
  m="777420">one</span> <span m="777690">is</span> <span
  m="781530">definitely--</span> <span m="782220">oh,</span> <span
  m="782490">sorry.</span> <span m="783690">Yeah,</span> <span
  m="784830">this</span> <span m="786480">reduction</span> <span
  m="786990">factor</span> <span m="787410">is</span> <span
  m="787560">well</span> <span m="788100">below</span> <span
  m="788550">that</span> <span m="788760">one.</span> <span m="790560">So</span>
  <span m="790740">it's</span> <span m="790920">a</span> <span
  m="790980">good</span> <span m="791220">thing.</span> <span
  m="791520">It's</span> <span m="791640">worth</span> <span
  m="791970">doing.</span> <span m="794040">And</span> <span
  m="794740">now</span> <span m="794950">what</span> <span
  m="795190">does</span> <span m="795390">it</span> <span
  m="795550">involve?</span> <span m="797020">So</span> <span
  m="797260">I'll</span> <span m="797410">write</span> <span
  m="797680">down</span> <span m="797950">the</span> <span
  m="798730">expression</span> <span m="799540">for</span> <span
  m="803310">the</span> <span m="804320">stochastic--</span> <span
  m="805240">here</span> <span m="805480">we</span> <span m="805600">go.</span>
  <span m="806200">OK.</span> <span m="807070">So</span> <span
  m="807820">here's</span> <span m="808060">one</span> <span
  m="808270">way</span> <span m="808420">to</span> <span m="808510">see</span>
  <span m="808780">it.</span> <span m="809530">The</span> <span
  m="809650">new</span> <span m="809950">X</span> <span m="812560">is</span>
  <span m="812770">the</span> <span m="812890">old</span> <span
  m="813190">X</span> <span m="815260">minus</span> <span m="815770">the</span>
  <span m="815860">gradient.</span> <span m="820330">And</span> <span
  m="820570">now</span> <span m="820990">comes</span> <span m="821620">an</span>
  <span m="821800">extra</span> <span m="822220">term,</span> <span
  m="823570">which</span> <span m="823810">gives</span> <span
  m="824200">us</span> <span m="824770">a</span> <span m="824830">little</span>
  <span m="825100">memory.</span> <span m="827300">Well,</span> <span
  m="828340">sorry.</span></p><p><span m="830640">The</span> <span
  m="831760">algebra</span> <span m="832180">is</span> <span
  m="832240">slightly</span> <span m="832780">nicer</span> <span
  m="833410">if</span> <span m="833620">I</span> <span m="833740">write</span>
  <span m="834070">it</span> <span m="834220">a</span> <span
  m="834280">little</span> <span m="834550">bit</span> <span
  m="834700">differently.</span> <span m="836100">I'll</span> <span
  m="836650">create</span> <span m="837100">a</span> <span m="837190">new</span>
  <span m="839980">quantity,</span> <span m="841420">ZK,</span> <span
  m="845000">with</span> <span m="845270">a</span> <span m="845360">step</span>
  <span m="845690">size.</span> <span m="846740">OK.</span> <span
  m="855800">So</span> <span m="855980">if</span> <span m="856100">I</span>
  <span m="856220">took</span> <span m="856460">ZK</span> <span
  m="857000">to</span> <span m="857120">be</span> <span m="857330">just</span>
  <span m="857690">the</span> <span m="857750">gradient,</span> <span
  m="859100">that</span> <span m="859310">would</span> <span
  m="859430">be</span> <span m="859610">steepest</span> <span
  m="860090">descent.</span> <span m="860540">Nothing</span> <span
  m="860870">has</span> <span m="861020">changed.</span> <span
  m="862370">But</span> <span m="862820">instead,</span> <span
  m="863870">I'm</span> <span m="864020">going</span> <span m="864140">to</span>
  <span m="864230">take</span> <span m="864530">ZK--</span> <span
  m="866240">well,</span> <span m="866510">it's</span> <span
  m="866720">leading</span> <span m="867200">term</span> <span
  m="867500">will</span> <span m="867710">be</span> <span m="867980">the</span>
  <span m="868130">gradient.</span> <span m="871530">But</span> <span
  m="872280">here</span> <span m="872520">comes</span> <span
  m="872940">the</span> <span m="873060">momentum</span> <span
  m="873690">term.</span> <span m="874080">I</span> <span m="874230">add</span>
  <span m="874560">on</span> <span m="875400">a</span> <span
  m="875460">multiple</span> <span m="876030">beta.</span> <span
  m="876930">One</span> <span m="877170">way</span> <span m="877350">to</span>
  <span m="877470">do</span> <span m="877740">it</span> <span
  m="877890">is</span> <span m="878310">of</span> <span m="878520">the</span>
  <span m="878670">previous</span> <span m="878970">Z.</span> <span
  m="880050">So</span> <span m="880230">the</span> <span m="880380">Z</span>
  <span m="880680">is</span> <span m="880860">the</span> <span
  m="881010">search</span> <span m="881490">direction.</span> <span
  m="882600">Z</span> <span m="882870">is</span> <span m="883020">the</span>
  <span m="883140">gradient</span> <span m="883680">you're</span> <span
  m="884010">traveling.</span> <span m="884305">It</span> <span
  m="884600">is</span> <span m="885120">the</span> <span
  m="885300">direction</span> <span m="886290">you're</span> <span
  m="886470">moving.</span></p><p><span m="887730">So</span> <span
  m="887940">it's</span> <span m="888180">different</span> <span
  m="888690">from</span> <span m="888960">that</span> <span
  m="889410">direction</span> <span m="890070">there.</span> <span
  m="891630">That</span> <span m="891900">direction</span> <span
  m="892500">was</span> <span m="892890">the</span> <span
  m="894810">gradient.</span> <span m="896430">This</span> <span
  m="896700">direction</span> <span m="897300">is</span> <span
  m="897450">the</span> <span m="897570">gradient</span> <span
  m="899520">corrected</span> <span m="900060">by</span> <span
  m="901640">a</span> <span m="901860">memory</span> <span
  m="902310">term,</span> <span m="903950">a</span> <span
  m="904020">momentum</span> <span m="904680">term.</span> <span
  m="905020">And</span> <span m="905130">one</span> <span m="905400">way</span>
  <span m="905610">to</span> <span m="905790">interpret</span> <span
  m="906330">that</span> <span m="907260">is</span> <span m="907710">to</span>
  <span m="907860">say</span> <span m="908310">that</span> <span
  m="908520">that</span> <span m="908850">ball--</span> <span
  m="909780">is</span> <span m="909930">to</span> <span m="910050">think</span>
  <span m="910320">of</span> <span m="910440">a</span> <span
  m="910470">heavy</span> <span m="910830">ball,</span> <span
  m="912660">instead</span> <span m="913080">of</span> <span
  m="913200">just</span> <span m="913500">a</span> <span
  m="913530">point.</span> <span m="914730">I</span> <span
  m="914820">think</span> <span m="915140">of</span> <span m="916030">a</span>
  <span m="916110">heavy</span> <span m="916500">ball.</span> <span
  m="917610">It,</span> <span m="918030">instead</span> <span
  m="918570">of</span> <span m="919110">bouncing</span> <span
  m="919860">back</span> <span m="920130">and</span> <span
  m="920280">forth</span> <span m="921560">as</span> <span
  m="925110">uselessly</span> <span m="925890">as</span> <span
  m="926040">this</span> <span m="926280">one,</span> <span m="927060">it</span>
  <span m="927240">tends</span> <span m="927780">to--</span> <span
  m="928500">it</span> <span m="928650">still</span> <span
  m="929070">bounces,</span> <span m="929730">of</span> <span
  m="929850">course,</span> <span m="930270">on</span> <span
  m="930420">the</span> <span m="930540">sides</span> <span m="931110">of</span>
  <span m="931290">the</span> <span m="931920">level</span> <span
  m="932250">set--</span> <span m="932640">but</span> <span m="932820">it</span>
  <span m="933390">comes</span> <span m="933720">down</span> <span
  m="933960">the</span> <span m="934080">valley</span> <span
  m="934470">faster.</span></p><p><span m="935820">And</span> <span
  m="935970">that's</span> <span m="936270">the</span> <span
  m="936390">effect</span> <span m="936840">of</span> <span
  m="936960">this.</span> <span m="937840">So</span> <span m="940950">you</span>
  <span m="941100">could</span> <span m="941340">play</span> <span
  m="941820">with</span> <span m="942030">different</span> <span
  m="943110">adjustment</span> <span m="943710">terms,</span> <span
  m="944190">different</span> <span m="944610">corrections.</span> <span
  m="945210">So</span> <span m="945990">I'll</span> <span
  m="946140">follow</span> <span m="946500">through</span> <span
  m="946800">this</span> <span m="947100">one.</span> <span
  m="948780">Nesterov</span> <span m="949590">had</span> <span
  m="949800">another</span> <span m="950250">way</span> <span
  m="950700">to</span> <span m="951510">make</span> <span m="951870">a</span>
  <span m="951930">change</span> <span m="952410">in</span> <span
  m="952530">the</span> <span m="952620">formula,</span> <span
  m="953760">and</span> <span m="954650">there</span> <span
  m="955220">are</span> <span m="955260">certainly</span> <span
  m="955680">others</span> <span m="956040">beyond</span> <span
  m="956430">that.</span> <span m="957140">OK,</span> <span m="957700">so</span>
  <span m="957810">how</span> <span m="957960">do</span> <span
  m="958080">we</span> <span m="958290">analyze</span> <span
  m="958800">that</span> <span m="958980">one?</span> <span
  m="961260">Well,</span> <span m="961870">the</span> <span
  m="962310">real</span> <span m="962550">point</span> <span
  m="962910">is,</span> <span m="965070">we've</span> <span
  m="966290">sort</span> <span m="966590">of,</span> <span m="966740">by</span>
  <span m="967010">taking--</span> <span m="967610">by</span> <span
  m="967880">involving</span> <span m="969140">the</span> <span
  m="969650">previous</span> <span m="970220">step,</span> <span
  m="971420">we</span> <span m="971570">now</span> <span m="971900">have</span>
  <span m="972200">a</span> <span m="973740">three</span> <span
  m="974190">level</span> <span m="974550">method</span> <span
  m="975000">instead</span> <span m="975420">of</span> <span m="975540">a</span>
  <span m="975600">two</span> <span m="975840">level</span> <span
  m="976170">method,</span> <span m="976620">you</span> <span
  m="976710">could</span> <span m="976890">say.</span></p><p><span
  m="978000">This</span> <span m="978960">involves</span> <span
  m="979530">only</span> <span m="980220">level</span> <span m="980550">K</span>
  <span m="980790">plus</span> <span m="981120">1</span> <span
  m="981360">and</span> <span m="981480">level</span> <span m="981810">K.</span>
  <span m="983080">The</span> <span m="983190">formulas</span> <span
  m="983790">now</span> <span m="985110">involve</span> <span
  m="987000">K</span> <span m="987210">plus</span> <span m="987480">1K,</span>
  <span m="988320">and</span> <span m="988500">K</span> <span
  m="988800">minus</span> <span m="989340">1.</span> <span
  m="990240">It's</span> <span m="990480">just</span> <span
  m="990870">like</span> <span m="991770">going</span> <span
  m="992250">from</span> <span m="992580">a</span> <span m="993690">first</span>
  <span m="994200">order</span> <span m="994770">differential</span> <span
  m="995490">equation</span> <span m="996570">to</span> <span
  m="996780">a</span> <span m="996840">second</span> <span
  m="997320">order</span> <span m="997620">differential</span> <span
  m="998190">equation.</span> <span m="1002540">I'm</span> <span
  m="1002690">not</span> <span m="1002900">really</span> <span
  m="1003230">thinking</span> <span m="1003590">that</span> <span
  m="1003800">K</span> <span m="1004290">is</span> <span m="1005030">a</span>
  <span m="1005120">time</span> <span m="1005600">variable.</span> <span
  m="1006300">But</span> <span m="1006380">in</span> <span
  m="1006590">the</span> <span m="1006740">analogy,</span> <span
  m="1008060">K</span> <span m="1008420">could</span> <span
  m="1008660">be</span> <span m="1008810">a</span> <span m="1008900">time</span>
  <span m="1009260">variable.</span> <span m="1010290">So</span> <span
  m="1010540">that</span> <span m="1011210">here</span> <span
  m="1011450">we</span> <span m="1011630">had</span> <span m="1012920">a</span>
  <span m="1012980">first</span> <span m="1013460">order</span> <span
  m="1013820">equation.</span> <span m="1014480">If</span> <span
  m="1014600">I</span> <span m="1014720">wanted</span> <span
  m="1015080">to</span> <span m="1015140">model</span> <span
  m="1015610">that,</span> <span m="1016230">it's</span> <span
  m="1016490">sort</span> <span m="1017150">of</span> <span m="1017360">a</span>
  <span m="1017420">DXDT</span> <span m="1018560">coming</span> <span
  m="1018980">in</span> <span m="1019130">there,</span> <span
  m="1020630">equal</span> <span m="1021080">gradient.</span> <span
  m="1021840">And</span> <span m="1022280">these</span> <span
  m="1022550">models</span> <span m="1023060">are</span> <span
  m="1023210">highly</span> <span m="1023630">useful</span> <span
  m="1024260">and</span> <span m="1025069">developed</span> <span
  m="1025670">for</span> <span m="1027290">sort</span> <span
  m="1027560">of</span> <span m="1027650">a</span> <span
  m="1027710">continuous</span> <span m="1028490">model</span> <span
  m="1029390">of</span> <span m="1030800">steepest</span> <span
  m="1031410">descent--</span> <span m="1032369">a</span> <span
  m="1032480">continuous</span> <span m="1033290">motion</span> <span
  m="1034460">instead</span> <span m="1034849">of</span> <span
  m="1035310">the</span> <span m="1038569">discrete</span> <span
  m="1039050">motion.</span> <span m="1039740">OK.</span></p><p><span
  m="1040520">So</span> <span m="1041960">that</span> <span
  m="1042230">would--</span> <span m="1043109">that</span> <span
  m="1043619">continuous</span> <span m="1044270">model</span> <span
  m="1044540">for</span> <span m="1044660">that</span> <span
  m="1044900">guy</span> <span m="1045140">would</span> <span
  m="1045319">be</span> <span m="1045440">a</span> <span
  m="1045500">first</span> <span m="1045890">order</span> <span
  m="1046520">in</span> <span m="1046670">time.</span> <span
  m="1047540">For</span> <span m="1047720">this</span> <span
  m="1047990">one,</span> <span m="1048200">it'll</span> <span
  m="1048410">be</span> <span m="1048560">second</span> <span
  m="1048980">order</span> <span m="1049340">in</span> <span
  m="1049460">time.</span> <span m="1050590">And</span> <span
  m="1051200">second</span> <span m="1051650">order</span> <span
  m="1051980">equations,</span> <span m="1053240">of</span> <span
  m="1053390">course,</span> <span m="1053990">and</span> <span
  m="1054140">there'd</span> <span m="1054320">be</span> <span
  m="1054470">constant</span> <span m="1054980">coefficients</span> <span
  m="1055730">in</span> <span m="1055880">our</span> <span
  m="1056000">model</span> <span m="1056390">problem.</span> <span
  m="1057560">And</span> <span m="1057800">the</span> <span
  m="1058190">thing</span> <span m="1058490">about</span> <span
  m="1058770">a</span> <span m="1058850">second</span> <span
  m="1059300">order</span> <span m="1060050">equation</span> <span
  m="1060710">that</span> <span m="1060890">we</span> <span
  m="1061070">all</span> <span m="1061280">know</span> <span
  m="1061730">is,</span> <span m="1062560">there</span> <span
  m="1062750">is</span> <span m="1062900">a</span> <span
  m="1064100">momentum</span> <span m="1064820">term--</span> <span
  m="1065420">a</span> <span m="1067010">damping</span> <span
  m="1067340">term,</span> <span m="1068030">you</span> <span
  m="1068180">could</span> <span m="1068360">say--</span> <span
  m="1069440">in</span> <span m="1071300">multiplying</span> <span
  m="1071870">the</span> <span m="1071960">first</span> <span
  m="1072260">derivative.</span> <span m="1073960">So</span> <span
  m="1075170">that's</span> <span m="1075440">what</span> <span
  m="1075650">a</span> <span m="1075830">second</span> <span
  m="1076280">order</span> <span m="1077090">equation</span> <span
  m="1078260">offers--</span> <span m="1079400">is</span> <span
  m="1079700">the</span> <span m="1079880">inclusion</span> <span
  m="1080600">of</span> <span m="1080750">a</span> <span
  m="1080810">damping</span> <span m="1081320">term</span> <span
  m="1082670">which</span> <span m="1083270">isn't</span> <span
  m="1083570">present</span> <span m="1084080">in</span> <span
  m="1085370">the</span> <span m="1086330">original</span> <span
  m="1086750">first</span> <span m="1087140">order.</span> <span
  m="1087800">OK.</span></p><p><span m="1089300">So</span> <span
  m="1089570">how</span> <span m="1089750">do</span> <span m="1089870">we</span>
  <span m="1090050">analyze</span> <span m="1090650">this?</span> <span
  m="1093590">I</span> <span m="1093680">have</span> <span
  m="1093920">to--</span> <span m="1094620">so</span> <span
  m="1094820">how</span> <span m="1094970">do</span> <span
  m="1095060">you</span> <span m="1095450">analyze</span> <span
  m="1096050">second</span> <span m="1096470">order</span> <span
  m="1097010">differential</span> <span m="1097550">equations?</span> <span
  m="1099080">You</span> <span m="1099230">write</span> <span
  m="1099530">them</span> <span m="1099710">as</span> <span m="1099920">a</span>
  <span m="1100010">system</span> <span m="1100580">of</span> <span
  m="1100700">two</span> <span m="1101090">first</span> <span
  m="1101510">order</span> <span m="1101810">equations.</span> <span
  m="1102860">So</span> <span m="1103010">that's</span> <span
  m="1103280">exactly</span> <span m="1103790">what</span> <span
  m="1103970">we're</span> <span m="1104090">going</span> <span
  m="1104220">to</span> <span m="1104390">do</span> <span
  m="1104570">here,</span> <span m="1105170">in</span> <span
  m="1105350">the</span> <span m="1105440">discrete</span> <span
  m="1105950">case.</span> <span m="1107000">We're</span> <span
  m="1107120">going</span> <span m="1107300">to</span> <span
  m="1109220">see--</span> <span m="1109880">because</span> <span
  m="1110150">we</span> <span m="1110240">have</span> <span
  m="1110360">two</span> <span m="1110600">equations.</span> <span
  m="1111890">And</span> <span m="1112040">they're</span> <span
  m="1112220">first</span> <span m="1112610">order,</span> <span
  m="1112990">and</span> <span m="1113390">we</span> <span
  m="1113540">can--</span> <span m="1114590">let</span> <span
  m="1114740">me</span> <span m="1114890">play</span> <span
  m="1115190">with</span> <span m="1115370">them</span> <span
  m="1115520">for</span> <span m="1115700">a</span> <span
  m="1115730">moment</span> <span m="1116690">to</span> <span
  m="1116840">make</span> <span m="1117110">them</span> <span
  m="1118100">good.</span> <span m="1118940">OK.</span> <span
  m="1119690">So</span> <span m="1119840">I'm</span> <span
  m="1119960">going</span> <span m="1120100">to</span> <span
  m="1120200">have--</span> <span m="1120920">so</span> <span
  m="1121130">this</span> <span m="1121400">will</span> <span
  m="1121580">go</span> <span m="1121910">to</span> <span m="1124490">two</span>
  <span m="1125030">first</span> <span m="1125420">order</span> <span
  m="1125690">equations,</span> <span m="1126680">in</span> <span
  m="1126800">which</span> <span m="1127130">the</span> <span
  m="1127640">first</span> <span m="1127970">one--</span> <span
  m="1128180">I'm</span> <span m="1128330">just</span> <span
  m="1128540">going</span> <span m="1128660">to</span> <span
  m="1128780">copy,</span> <span m="1129700">XK</span> <span
  m="1130220">plus</span> <span m="1130550">1</span> <span m="1131720">is</span>
  <span m="1132200">XK</span> <span m="1133310">minus</span> <span
  m="1134280">that</span> <span m="1134570">step</span> <span
  m="1134930">size</span> <span m="1136280">ZK.</span></p><p><span
  m="1140330">Yeah.</span> <span m="1140880">OK.</span> <span
  m="1142220">Yeah.</span> <span m="1143130">OK.</span> <span
  m="1143550">Time</span> <span m="1144450">the</span> <span
  m="1144570">previous</span> <span m="1144990">times</span> <span
  m="1145350">step</span> <span m="1145560">here--</span> <span
  m="1147150">the</span> <span m="1147840">next</span> <span
  m="1148230">time</span> <span m="1148530">step</span> <span
  m="1148830">on</span> <span m="1148980">the</span> <span
  m="1149070">left.</span> <span m="1149530">OK.</span> <span
  m="1149820">So</span> <span m="1149970">I</span> <span m="1150060">just</span>
  <span m="1150300">copied</span> <span m="1150690">that.</span> <span
  m="1151500">Now</span> <span m="1151770">this</span> <span
  m="1152100">one</span> <span m="1152490">I'm</span> <span
  m="1152760">going</span> <span m="1153120">to</span> <span
  m="1154890">increase</span> <span m="1155400">K</span> <span
  m="1155700">by</span> <span m="1155940">1.</span> <span m="1157090">So</span>
  <span m="1157230">in</span> <span m="1157410">order</span> <span
  m="1157650">to</span> <span m="1157800">have</span> <span
  m="1158040">that</span> <span m="1158670">looking</span> <span
  m="1159720">to</span> <span m="1159840">match</span> <span
  m="1160230">this,</span> <span m="1161190">I'll</span> <span
  m="1161460">write</span> <span m="1161880">that</span> <span
  m="1162090">as</span> <span m="1162370">ZK</span> <span
  m="1163590">plus</span> <span m="1163980">1,</span> <span
  m="1164880">and</span> <span m="1165000">I'll</span> <span
  m="1165120">bring</span> <span m="1165480">the</span> <span
  m="1166140">K,</span> <span m="1166550">saying,</span> <span
  m="1167160">grad</span> <span m="1167670">FK</span> <span
  m="1169140">plus</span> <span m="1169560">1</span> <span
  m="1171150">equal</span> <span m="1172770">beta</span> <span
  m="1174460">ZK.</span> <span m="1175920">That</span> <span
  m="1176100">work</span> <span m="1176280">with</span> <span
  m="1176490">you?</span> <span m="1177610">I</span> <span
  m="1177870">just,</span> <span m="1178440">in</span> <span
  m="1180210">this</span> <span m="1180480">thing,</span> <span
  m="1180810">instead</span> <span m="1181200">of</span> <span
  m="1181320">looking</span> <span m="1181680">at</span> <span
  m="1181970">it</span> <span m="1182210">at</span> <span m="1182430">K,</span>
  <span m="1182850">I</span> <span m="1183330">went</span> <span
  m="1183600">to</span> <span m="1185250">K</span> <span m="1185460">plus</span>
  <span m="1185730">1.</span> <span m="1187260">And</span> <span
  m="1187410">I</span> <span m="1187950">put</span> <span m="1188190">the</span>
  <span m="1188310">K</span> <span m="1188550">plus</span> <span
  m="1188820">1</span> <span m="1189030">terms</span> <span
  m="1189450">on</span> <span m="1189600">one</span> <span
  m="1189780">side.</span> <span m="1190080">OK.</span></p><p><span
  m="1190920">So</span> <span m="1191100">now</span> <span m="1191340">I</span>
  <span m="1191460">have</span> <span m="1191960">a--</span> <span
  m="1196670">let's</span> <span m="1196860">see.</span> <span
  m="1197100">Let's</span> <span m="1197460">remember,</span> <span
  m="1197920">we're</span> <span m="1198000">doing--</span> <span
  m="1198680">the</span> <span m="1198870">model</span> <span
  m="1199200">we're</span> <span m="1199380">doing</span> <span
  m="1199800">is</span> <span m="1200360">F</span> <span
  m="1200640">equal</span> <span m="1200990">a</span> <span
  m="1201250">half</span> <span m="1201750">X</span> <span
  m="1202020">transpose</span> <span m="1202710">SX.</span> <span
  m="1204060">So</span> <span m="1204270">the</span> <span m="1204360">gradient
  of</span> <span m="1205040">F</span> <span m="1205990">is</span> <span
  m="1206600">SX.</span> <span m="1209250">So</span> <span
  m="1209430">what</span> <span m="1209640">I've</span> <span
  m="1209820">written</span> <span m="1210120">there,</span> <span
  m="1211150">for</span> <span m="1211290">gradient,</span> <span
  m="1212100">is</span> <span m="1212310">really--</span> <span
  m="1213450">I</span> <span m="1213570">know</span> <span
  m="1213750">what</span> <span m="1214080">that</span> <span
  m="1214350">gradient</span> <span m="1214860">is.</span> <span
  m="1215980">So</span> <span m="1216060">that's</span> <span
  m="1216360">really</span> <span m="1219510">SX</span> <span m="1219960">K plus
  1.</span> <span m="1223470">OK.</span> <span m="1227700">How</span> <span
  m="1227880">to</span> <span m="1228060">analyze</span> <span
  m="1228660">that.</span> <span m="1230040">What</span> <span
  m="1230250">happens</span> <span m="1231420">as</span> <span
  m="1231660">K</span> <span m="1234150">travels</span> <span
  m="1234660">forward</span> <span m="1235170">1,</span> <span
  m="1235370">2,</span> <span m="1235570">3,</span> <span m="1235770">4,</span>
  <span m="1236120">5?</span> <span m="1236940">We</span> <span
  m="1237090">have</span> <span m="1237240">a</span> <span
  m="1237300">constant</span> <span m="1237810">coefficient</span> <span
  m="1238440">problem</span> <span m="1239490">at</span> <span
  m="1239640">every</span> <span m="1239970">step.</span> <span
  m="1240870">The</span> <span m="1241740">XZ</span> <span
  m="1243060">variable</span> <span m="1244200">is</span> <span
  m="1244380">getting</span> <span m="1244680">multiplied</span> <span
  m="1245280">by</span> <span m="1245490">a</span> <span
  m="1245550">matrix.</span></p><p><span m="1246190">So</span> <span
  m="1246550">here's</span> <span m="1247530">XZ</span> <span
  m="1249590">at</span> <span m="1250320">K</span> <span m="1250530">plus</span>
  <span m="1250860">1.</span> <span m="1252480">And</span> <span
  m="1252660">over</span> <span m="1252930">here</span> <span
  m="1253200">will</span> <span m="1253410">be</span> <span
  m="1255270">XZ</span> <span m="1256770">at</span> <span
  m="1257160">step</span> <span m="1257580">K.</span> <span
  m="1258750">And</span> <span m="1258900">I</span> <span
  m="1259020">just</span> <span m="1259290">have</span> <span
  m="1259470">to</span> <span m="1259620">figure</span> <span
  m="1260010">out</span> <span m="1260190">what</span> <span
  m="1262020">matrix</span> <span m="1262620">is</span> <span
  m="1262770">multiplying</span> <span m="1263940">here</span> <span
  m="1264360">and</span> <span m="1264480">here.</span> <span
  m="1265580">OK.</span> <span m="1267220">And</span> <span m="1267390">I</span>
  <span m="1267510">guess</span> <span m="1267810">here</span> <span
  m="1268200">I</span> <span m="1268350">see</span> <span m="1268710">it.</span>
  <span m="1269310">For</span> <span m="1269790">the</span> <span
  m="1269940">first</span> <span m="1270300">equation</span> <span
  m="1270840">has</span> <span m="1271080">a</span> <span m="1271140">1</span>
  <span m="1271620">and</span> <span m="1271770">a</span> <span
  m="1271830">minus</span> <span m="1272340">S,</span> <span
  m="1272730">looks</span> <span m="1273000">like,</span> <span
  m="1273270">in</span> <span m="1273360">the</span> <span
  m="1273450">first</span> <span m="1273810">row.</span> <span
  m="1274740">And</span> <span m="1274890">it</span> <span
  m="1275010">has</span> <span m="1275250">a</span> <span
  m="1275370">beta</span> <span m="1275720">in</span> <span
  m="1275850">the</span> <span m="1275970">second</span> <span
  m="1276360">row.</span> <span m="1277590">And</span> <span
  m="1278500">here</span> <span m="1278820">the</span> <span
  m="1278970">first</span> <span m="1279330">equation</span> <span
  m="1279900">has</span> <span m="1280230">a</span> <span m="1281010">1,
  0</span> <span m="1282510">in</span> <span m="1282660">that</span> <span
  m="1282990">row.</span> <span m="1284100">And</span> <span
  m="1284310">then</span> <span m="1284670">a</span> <span
  m="1284760">minus</span> <span m="1285390">S.</span> <span
  m="1286090">So</span> <span m="1286350">I'll</span> <span
  m="1286550">put</span> <span m="1286900">in</span> <span
  m="1287070">minus</span> <span m="1287620">S,</span> <span
  m="1289290">multiplying</span> <span m="1289920">XK</span> <span
  m="1290460">plus</span> <span m="1290760">1,</span> <span
  m="1291480">and</span> <span m="1291630">then</span> <span
  m="1291840">the</span> <span m="1291960">1</span> <span
  m="1292470">that</span> <span m="1292650">multiplies</span> <span
  m="1293880">ZK</span> <span m="1294710">plus 1. Is</span> <span
  m="1295000">that</span> <span m="1295260">all</span> <span
  m="1295340">right?</span></p><p><span m="1299590">Sorry.</span> <span
  m="1299900">I've</span> <span m="1299990">got</span> <span
  m="1300140">two</span> <span m="1300410">S's,</span> <span
  m="1300860">and</span> <span m="1301010">I</span> <span
  m="1301160">didn't</span> <span m="1301400">draw</span> <span
  m="1301670">that</span> <span m="1301850">one--</span> <span
  m="1302520">didn't</span> <span m="1302780">write</span> <span
  m="1303050">that</span> <span m="1303200">one</span> <span
  m="1303380">in</span> <span m="1303500">large</span> <span m="1303800">enough,
  and</span> <span m="1304190">I'd</span> <span m="1304390">planned</span> <span
  m="1304780">to</span> <span m="1304880">erase</span> <span
  m="1305210">it</span> <span m="1305360">anyway.</span> <span
  m="1307370">This</span> <span m="1308540">is</span> <span
  m="1308690">the</span> <span m="1308840">step</span> <span
  m="1309140">sizes.</span> <span m="1309800">This</span> <span
  m="1310040">is</span> <span m="1310220">the</span> <span
  m="1310340">matrix.</span> <span m="1311620">But</span> <span
  m="1313100">it's</span> <span m="1313310">not</span> <span
  m="1314870">quite</span> <span m="1315200">fitting</span> <span
  m="1315660">its</span> <span m="1315830">place.</span> <span
  m="1317050">This</span> <span m="1317270">is</span> <span
  m="1317400">the</span> <span m="1317480">point</span> <span
  m="1317780">where</span> <span m="1317960">I'm</span> <span
  m="1318170">going</span> <span m="1318320">to</span> <span
  m="1319750">use</span> <span m="1320110">eigenvalues.</span> <span
  m="1321730">I'm</span> <span m="1321880">going</span> <span
  m="1322030">to</span> <span m="1322150">follow</span> <span
  m="1324310">each</span> <span m="1324670">eigenvalue.</span> <span
  m="1325450">That's</span> <span m="1325750">the</span> <span
  m="1325870">whole</span> <span m="1326110">point.</span> <span
  m="1326800">When</span> <span m="1326980">I</span> <span
  m="1327100">follow</span> <span m="1327520">each</span> <span
  m="1327860">eigenvalue--</span> <span m="1328750">each</span> <span
  m="1329310">eigenvector,</span> <span m="1330070">I</span> <span
  m="1330160">should</span> <span m="1330400">say--</span> <span
  m="1331000">I'll</span> <span m="1331120">follow</span> <span
  m="1331570">each</span> <span m="1331840">eigenvector</span> <span
  m="1332650">of</span> <span m="1332830">S.</span> <span m="1334110">So</span>
  <span m="1334820">let's</span> <span m="1335350">do</span> <span
  m="1335590">that.</span></p><p><span m="1337510">So</span> <span
  m="1338440">eigenvectors</span> <span m="1339460">of</span> <span
  m="1339610">S--</span> <span m="1339850">what</span> <span
  m="1340060">are</span> <span m="1340120">we</span> <span
  m="1340210">going</span> <span m="1340430">to</span> <span
  m="1340480">call</span> <span m="1340750">those?</span> <span
  m="1343450">Lambda,</span> <span m="1343930">probably.</span> <span
  m="1346000">So</span> <span m="1346390">SX</span> <span
  m="1347470">equal</span> <span m="1347800">lambda</span> <span
  m="1348240">X.</span> <span m="1348670">I</span> <span
  m="1348760">think</span> <span m="1349030">that's</span> <span
  m="1350050">what's</span> <span m="1350540">coming.</span> <span
  m="1354930">Or</span> <span m="1355200">Q.</span> <span m="1358690">To</span>
  <span m="1358920">do</span> <span m="1359160">things</span> <span
  m="1359520">right,</span> <span m="1360750">I</span> <span
  m="1360810">want</span> <span m="1361020">to</span> <span
  m="1361080">remember</span> <span m="1361560">that</span> <span
  m="1361770">S</span> <span m="1362050">is</span> <span m="1362240">a</span>
  <span m="1362310">positive,</span> <span m="1362910">definite</span> <span
  m="1363450">symmetric</span> <span m="1364080">matrix.</span> <span
  m="1365350">That's</span> <span m="1365460">why</span> <span
  m="1365610">I</span> <span m="1365670">call</span> <span m="1365970">it</span>
  <span m="1366090">S,</span> <span m="1366390">instead</span> <span
  m="1366780">of</span> <span m="1366930">A.</span> <span m="1367620">So</span>
  <span m="1367800">I</span> <span m="1367890">really</span> <span
  m="1368190">should</span> <span m="1368400">call</span> <span
  m="1368670">the</span> <span m="1368790">eigen--</span> <span
  m="1369240">it</span> <span m="1369330">doesn't</span> <span
  m="1369630">matter,</span> <span m="1370020">but</span> <span
  m="1370680">to</span> <span m="1370800">be</span> <span m="1373650">on</span>
  <span m="1373860">the</span> <span m="1373950">ball,</span> <span
  m="1374940">let</span> <span m="1375060">me</span> <span
  m="1375210">call</span> <span m="1375480">the</span> <span
  m="1375660">eigenvector</span> <span m="1376410">Q,</span> <span
  m="1377220">and</span> <span m="1377430">the</span> <span
  m="1377590">eigenvalue</span> <span m="1378370">lambda.</span> <span
  m="1382231">OK.</span></p><p><span m="1386280">So</span> <span
  m="1386490">now</span> <span m="1386760">I</span> <span
  m="1386880">want</span> <span m="1387090">to</span> <span
  m="1388560">follow</span> <span m="1389010">this</span> <span
  m="1389280">eigenvector.</span> <span m="1390720">So</span> <span
  m="1390900">I'm</span> <span m="1391050">supposing</span> <span
  m="1391830">that</span> <span m="1392100">XK</span> <span
  m="1393600">is</span> <span m="1394470">sum</span> <span m="1394950">CK</span>
  <span m="1395700">times</span> <span m="1396150">Q.</span> <span
  m="1397930">I'm</span> <span m="1398080">assuming</span> <span
  m="1398590">that</span> <span m="1398920">X</span> <span m="1399280">is</span>
  <span m="1399520">in</span> <span m="1399850">the--</span> <span
  m="1401200">tracking</span> <span m="1401770">this</span> <span
  m="1402050">eigenvector.</span> <span m="1403390">And</span> <span
  m="1403570">I'm</span> <span m="1403750">going</span> <span
  m="1403900">to</span> <span m="1403990">assume</span> <span
  m="1404380">that</span> <span m="1404560">ZK</span> <span
  m="1406510">is</span> <span m="1406660">some</span> <span
  m="1407410">other</span> <span m="1408340">constant</span> <span
  m="1408940">times</span> <span m="1409510">Q.</span> <span
  m="1410350">Everybody,</span> <span m="1410630">do</span> <span
  m="1410910">you</span> <span m="1411100">see?</span> <span
  m="1411670">That's</span> <span m="1412000">a</span> <span
  m="1412060">vector</span> <span m="1412510">and</span> <span
  m="1412630">that's</span> <span m="1412900">a</span> <span
  m="1412960">vector.</span> <span m="1413390">And</span> <span
  m="1413530">I</span> <span m="1413740">want</span> <span
  m="1414010">scalars.</span> <span m="1415330">I</span> <span
  m="1415390">want</span> <span m="1415540">to</span> <span
  m="1415600">attract</span> <span m="1415990">just</span> <span
  m="1416230">scalar</span> <span m="1416950">CK</span> <span
  m="1418690">and</span> <span m="1419200">DK.</span> <span
  m="1420580">So</span> <span m="1420820">that's</span> <span
  m="1421120">really</span> <span m="1421540">what</span> <span
  m="1421750">I</span> <span m="1421840">have</span> <span
  m="1422170">here.</span> <span m="1423010">This</span> <span
  m="1423190">was</span> <span m="1423400">a</span> <span
  m="1423460">little</span> <span m="1423790">tricky,</span> <span
  m="1424210">because</span> <span m="1425320">X</span> <span
  m="1425740">here</span> <span m="1425980">is</span> <span m="1426100">a</span>
  <span m="1426190">vector,</span> <span m="1427630">and</span> <span
  m="1427930">two</span> <span m="1428170">components</span> <span
  m="1428770">are</span> <span m="1428950">N</span> <span
  m="1429100">components.</span></p><p><span m="1430180">I</span> <span
  m="1430330">didn't</span> <span m="1430540">want</span> <span
  m="1430810">that.</span> <span m="1431630">I</span> <span
  m="1431650">really</span> <span m="1431920">wanted</span> <span
  m="1432250">just</span> <span m="1432490">to</span> <span
  m="1432640">track</span> <span m="1435000">an</span> <span
  m="1435160">eigenvector.</span> <span m="1436030">Once</span> <span
  m="1436390">I've</span> <span m="1436840">settled</span> <span
  m="1437530">on</span> <span m="1437710">the</span> <span
  m="1437810">direction</span> <span m="1438440">Q,</span> <span
  m="1439210">everything</span> <span m="1439750">is--</span> <span
  m="1440080">all</span> <span m="1440800">vectors</span> <span
  m="1441310">are</span> <span m="1441490">in</span> <span
  m="1441610">the</span> <span m="1441700">direction</span> <span
  m="1442210">of</span> <span m="1442330">Q.</span> <span m="1442690">So</span>
  <span m="1443530">we</span> <span m="1443650">just</span> <span
  m="1443890">have</span> <span m="1444370">numbers</span> <span
  m="1445570">C</span> <span m="1445870">and D</span> <span
  m="1446125">to</span> <span m="1446380">track.</span> <span
  m="1446920">OK.</span> <span m="1447340">So</span> <span
  m="1447640">I'm</span> <span m="1447760">going</span> <span
  m="1447910">to</span> <span m="1448480">rewrite</span> <span
  m="1449050">this</span> <span m="1450760">correctly,</span> <span
  m="1452540">as,</span> <span m="1455140">yeah.</span> <span
  m="1455660">Well,</span> <span m="1455830">let</span> <span
  m="1455980">me</span> <span m="1456640">keep</span> <span
  m="1457390">going</span> <span m="1457720">with</span> <span
  m="1457870">this</span> <span m="1458130">little</span> <span
  m="1458800">formula.</span> <span m="1459310">Then</span> <span
  m="1459610">what</span> <span m="1459850">will--</span> <span
  m="1460650">I</span> <span m="1460750">needed</span> <span
  m="1461200">an</span> <span m="1461485">SX.</span> <span
  m="1462320">What</span> <span m="1462580">will</span> <span
  m="1462850">SXK</span> <span m="1463510">be?</span> <span
  m="1466020">If</span> <span m="1466550">XK</span> <span m="1467120">is</span>
  <span m="1467300">in</span> <span m="1467420">the</span> <span
  m="1467510">direction</span> <span m="1468080">of</span> <span
  m="1468170">the</span> <span m="1468680">eigenvector</span> <span
  m="1469430">Q,</span> <span m="1470540">and</span> <span
  m="1470720">it's</span> <span m="1471050">CK--</span> <span
  m="1473000">what</span> <span m="1473180">happens</span> <span
  m="1473510">when</span> <span m="1473720">I</span> <span
  m="1473780">multiply</span> <span m="1474260">by</span> <span
  m="1474500">S?</span></p><p><span m="1477740">Q was</span> <span
  m="1477940">an</span> <span m="1478090">eigenvector.</span> <span
  m="1479170">So</span> <span m="1479380">the</span> <span
  m="1479500">multiplying</span> <span m="1480220">by</span> <span
  m="1480490">S</span> <span m="1480880">gives</span> <span
  m="1481210">me</span> <span m="1481620">a--</span></p><p><span
  m="1482163">AUDIENCE:</span> <span m="1482349">Eigenvalue.</span></p><p><span
  m="1482910">GILBERT STRANG:</span> <span m="1483152">Eigenvalue,</span> <span
  m="1483880">right?</span> <span m="1484240">So</span> <span
  m="1484570">it's</span> <span m="1484710">CK</span> <span
  m="1486970">lambda</span> <span m="1487780">Q.</span> <span
  m="1488850">Everything</span> <span m="1489470">is</span> <span
  m="1489820">a</span> <span m="1489880">multiple</span> <span
  m="1490360">of</span> <span m="1490480">Q.</span> <span m="1490810">And</span>
  <span m="1490930">it's</span> <span m="1491590">only</span> <span
  m="1491890">those</span> <span m="1492190">multiples</span> <span
  m="1492910">I'm</span> <span m="1493420">looking</span> <span
  m="1493810">for,</span> <span m="1494080">the</span> <span
  m="1494260">C's</span> <span m="1494890">and</span> <span
  m="1494980">the</span> <span m="1495100">D's.</span> <span
  m="1496000">And</span> <span m="1496120">then</span> <span
  m="1496300">the</span> <span m="1496420">lambda</span> <span
  m="1496900">comes</span> <span m="1497320">into</span> <span
  m="1497620">the</span> <span m="1497860">S</span> <span
  m="1498190">term.</span> <span m="1499510">Yeah.</span> <span
  m="1499840">I</span> <span m="1499960">think</span> <span
  m="1500200">that's</span> <span m="1500410">probably</span> <span
  m="1500770">all</span> <span m="1500980">I</span> <span
  m="1501100">need</span> <span m="1501910">to</span> <span
  m="1505310">do</span> <span m="1505550">this.</span> <span
  m="1505970">And</span> <span m="1506120">then</span> <span
  m="1506300">the</span> <span m="1506420">gradient--</span> <span
  m="1507040">yeah.</span> <span m="1507350">So</span> <span
  m="1507560">that's</span> <span m="1507890">the</span> <span
  m="1507980">gradient,</span> <span m="1508460">of</span> <span
  m="1508550">course.</span> <span m="1509840">This</span> <span
  m="1510050">is</span> <span m="1510560">the</span> <span
  m="1510680">gradient</span> <span m="1512180">of</span> <span
  m="1512360">F</span> <span m="1513053">at</span> <span m="1513476">K--</span>
  <span m="1515170">is</span> <span m="1515440">that one.</span> <span
  m="1515820">OK.</span> <span m="1516830">So</span> <span
  m="1517040">instead</span> <span m="1517460">of</span> <span
  m="1517550">this,</span> <span m="1518690">let</span> <span
  m="1518780">me</span> <span m="1518900">just</span> <span
  m="1519150">write</span> <span m="1519520">what's</span> <span
  m="1520760">happening</span> <span m="1521270">if</span> <span
  m="1521420">I'm</span> <span m="1521600">tracking</span> <span
  m="1522750">the</span> <span m="1523040">coefficients</span> <span
  m="1524420">CK</span> <span m="1524990">plus</span> <span m="1525350">1</span>
  <span m="1526400">and</span> <span m="1526520">DK</span> <span
  m="1527090">plus</span> <span m="1527450">1.</span></p><p><span
  m="1529400">Then</span> <span m="1529970">what</span> <span
  m="1530240">I</span> <span m="1530360">really</span> <span
  m="1530660">meant</span> <span m="1530930">to</span> <span
  m="1531080">have</span> <span m="1531440">there</span> <span
  m="1531740">is</span> <span m="1531920">1,</span> <span m="1532970">0.</span>
  <span m="1534200">And</span> <span m="1535070">minus</span> <span
  m="1535610">S</span> <span m="1536720">is a</span> <span
  m="1537140">minus</span> <span m="1538730">lambda.</span> <span
  m="1543450">Is</span> <span m="1543600">that</span> <span
  m="1543780">right?</span> <span m="1545040">Yeah.</span> <span
  m="1545310">When</span> <span m="1545490">I</span> <span
  m="1545580">multiply</span> <span m="1546900">the</span> <span
  m="1547080">eigenvector</span> <span m="1547980">by</span> <span
  m="1548340">S,</span> <span m="1548850">I'm</span> <span
  m="1549120">just</span> <span m="1549540">getting--</span> <span
  m="1550150">oh,</span> <span m="1550470">it's</span> <span
  m="1550760">a</span> <span m="1551990">lambda</span> <span
  m="1552750">times</span> <span m="1553190">a</span> <span
  m="1553270">CK.</span> <span m="1554040">Yeah.</span> <span
  m="1554970">Lambda</span> <span m="1555400">times</span> <span
  m="1555780">the</span> <span m="1556140">CK--</span> <span
  m="1556350">that's</span> <span m="1556620">good.</span> <span
  m="1557280">I</span> <span m="1557430">think</span> <span
  m="1558200">that</span> <span m="1558420">that's</span> <span
  m="1558810">the</span> <span m="1559830">left</span> <span
  m="1560190">hand</span> <span m="1560400">side</span> <span
  m="1560700">of</span> <span m="1560790">my</span> <span
  m="1561000">equation.</span> <span m="1562160">And</span> <span
  m="1562330">on</span> <span m="1562470">the</span> <span
  m="1562560">right</span> <span m="1562860">hand</span> <span
  m="1563070">side,</span> <span m="1564670">I</span> <span
  m="1564690">have</span> <span m="1569520">here.</span> <span
  m="1570540">That's</span> <span m="1570720">1.</span> <span
  m="1571260">And</span> <span m="1571380">this</span> <span
  m="1571650">was</span> <span m="1571860">the</span> <span
  m="1572010">scalar,</span> <span m="1573130">the</span> <span
  m="1573450">step</span> <span m="1573750">size.</span> <span
  m="1574320">And</span> <span m="1574440">this</span> <span
  m="1574680">was</span> <span m="1574950">the</span> <span
  m="1575160">other</span> <span m="1575430">coefficient.</span> <span
  m="1576300">It's</span> <span m="1576450">the</span> <span
  m="1576600">beta.</span></p><p><span m="1577710">So</span> <span
  m="1577890">I</span> <span m="1578010">want</span> <span m="1578200">to</span>
  <span m="1578290">choose--</span> <span m="1578900">what's</span> <span
  m="1579330">my</span> <span m="1579510">purpose</span> <span
  m="1580050">now?</span> <span m="1582550">That</span> <span
  m="1582820">gives</span> <span m="1583180">me</span> <span
  m="1583630">the--</span> <span m="1586330">what</span> <span
  m="1586570">happens</span> <span m="1587080">at</span> <span
  m="1587200">every</span> <span m="1587590">step</span> <span
  m="1588460">to</span> <span m="1588640">the</span> <span m="1588810">C</span>
  <span m="1589080">and</span> <span m="1589240">D.</span> <span
  m="1590770">So</span> <span m="1591010">I</span> <span m="1591160">want</span>
  <span m="1591380">to</span> <span m="1591470">choose</span> <span
  m="1592000">the</span> <span m="1593140">two</span> <span
  m="1593410">things</span> <span m="1593740">that</span> <span
  m="1593860">I</span> <span m="1594010">have--</span> <span
  m="1594820">I'm</span> <span m="1594970">free</span> <span
  m="1595180">to</span> <span m="1595300">choose</span> <span
  m="1595750">are</span> <span m="1595930">S and</span> <span
  m="1596350">beta.</span> <span m="1596740">So</span> <span
  m="1597220">that's</span> <span m="1597460">my</span> <span
  m="1597670">big</span> <span m="1598690">job--</span> <span
  m="1599770">choose</span> <span m="1600630">S</span> <span
  m="1601000">and</span> <span m="1601150">beta.</span> <span
  m="1604140">OK.</span> <span m="1605180">Now</span> <span
  m="1605420">I--</span> <span m="1605920">to</span> <span
  m="1606140">make--</span> <span m="1606980">oh,</span> <span
  m="1607400">let</span> <span m="1607610">me</span> <span
  m="1607760">just</span> <span m="1608870">shape</span> <span
  m="1609320">this</span> <span m="1609920">by</span> <span
  m="1611180">multiplying</span> <span m="1611690">the</span> <span
  m="1611840">inverse</span> <span m="1612350">of</span> <span
  m="1612440">that,</span> <span m="1612680">and</span> <span
  m="1612800">get</span> <span m="1613010">it</span> <span
  m="1613130">over</span> <span m="1613400">here.</span> <span
  m="1614090">So</span> <span m="1614270">that will</span> <span
  m="1614710">really--</span> <span m="1615410">you'll</span> <span
  m="1615710">see</span> <span m="1616010">everything.</span></p><p><span
  m="1617060">So</span> <span m="1617300">CK</span> <span
  m="1617840">plus</span> <span m="1618170">1,</span> <span
  m="1619160">DK</span> <span m="1619700">plus</span> <span
  m="1620030">1.</span> <span m="1622520">What's</span> <span
  m="1622850">the</span> <span m="1623030">inverse</span> <span
  m="1623570">of</span> <span m="1623720">1,</span> <span m="1624110">0?</span>
  <span m="1625190">Oh,</span> <span m="1625350">I</span> <span
  m="1625460">don't</span> <span m="1626300">think</span> <span
  m="1626570">I</span> <span m="1626690">want</span> <span
  m="1626850">to--</span> <span m="1627140">that</span> <span
  m="1627410">would</span> <span m="1628190">have</span> <span
  m="1628430">a</span> <span m="1628760">tough</span> <span
  m="1629030">time</span> <span m="1629360">finding</span> <span
  m="1629780">an</span> <span m="1629900">inverse.</span> <span
  m="1632030">It</span> <span m="1632180">was</span> <span m="1632420">a</span>
  <span m="1632480">1,</span> <span m="1632970">wasn't</span> <span
  m="1633200">it?</span> <span m="1639180">Yeah.</span> <span
  m="1640050">OK.</span> <span m="1640660">So</span> <span
  m="1640930">I'm</span> <span m="1641350">going</span> <span
  m="1641530">to</span> <span m="1641590">multiply</span> <span
  m="1642010">by</span> <span m="1642220">the</span> <span
  m="1642370">inverse</span> <span m="1642850">of</span> <span
  m="1642940">that</span> <span m="1643120">matrix</span> <span
  m="1643630">to</span> <span m="1643760">get</span> <span m="1644030">it</span>
  <span m="1644110">over</span> <span m="1644350">here.</span> <span
  m="1646330">And</span> <span m="1646360">what's</span> <span
  m="1646630">the</span> <span m="1646810">inverse</span> <span
  m="1647290">of</span> <span m="1647410">1, 1</span> <span
  m="1648400">minus</span> <span m="1648820">lambda?</span> <span
  m="1649320">It's</span> <span m="1649510">1,</span> <span m="1649960">1</span>
  <span m="1650350">plus</span> <span m="1650770">lambda.</span> <span
  m="1652420">So</span> <span m="1652600">that</span> <span
  m="1653050">the</span> <span m="1653350">inverse</span> <span
  m="1653770">brought it</span> <span m="1654130">over</span> <span
  m="1654310">here,</span> <span m="1654640">times</span> <span
  m="1655020">this</span> <span m="1655270">matrix,</span> <span m="1656570">1,
  0</span> <span m="1657760">beta,</span> <span m="1658810">and</span> <span
  m="1658990">minus</span> <span m="1659500">the</span> <span
  m="1659590">step</span> <span m="1659950">size.</span> <span
  m="1661040">That's</span> <span m="1661240">what</span> <span
  m="1661420">multiply</span> <span m="1662060">CK DK.</span></p><p><span
  m="1665770">So</span> <span m="1665920">we</span> <span
  m="1666010">have</span> <span m="1666160">these</span> <span
  m="1666940">simple,</span> <span m="1667580">beautiful</span> <span
  m="1668020">steps</span> <span m="1669310">which</span> <span
  m="1670870">come</span> <span m="1671230">from</span> <span
  m="1671890">tracking</span> <span m="1672460">one</span> <span
  m="1672790">eigenvector--</span> <span m="1673950">makes</span> <span
  m="1674290">the</span> <span m="1674380">whole</span> <span
  m="1674560">problem</span> <span m="1674980">scalar.</span> <span
  m="1675790">So</span> <span m="1676000">I</span> <span
  m="1676090">multiply</span> <span m="1676510">those</span> <span
  m="1676780">two</span> <span m="1676930">matrices</span> <span
  m="1677650">and</span> <span m="1678340">I</span> <span
  m="1678430">finally</span> <span m="1678880">get</span> <span
  m="1679090">the</span> <span m="1679240">matrix</span> <span
  m="1679750">that</span> <span m="1679900">I</span> <span
  m="1679990">really</span> <span m="1680320">have</span> <span
  m="1680530">to</span> <span m="1680650">think</span> <span
  m="1680890">about.</span> <span m="1681610">1,</span> <span
  m="1681880">0</span> <span m="1682240">times</span> <span
  m="1682570">that'll</span> <span m="1682840">be</span> <span
  m="1683020">1</span> <span m="1683290">minus</span> <span
  m="1683740">S.</span> <span m="1684760">Lambda</span> <span
  m="1685210">1</span> <span m="1685510">times</span> <span
  m="1685880">that'll</span> <span m="1686110">be</span> <span
  m="1686230">a</span> <span m="1686320">lambda</span> <span
  m="1686950">there.</span> <span m="1688030">And</span> <span
  m="1688990">minus</span> <span m="1689560">lambda</span> <span
  m="1689980">S</span> <span m="1690280">plus</span> <span
  m="1690610">beta.</span> <span m="1691840">Beta</span> <span
  m="1692290">minus</span> <span m="1692800">lambda</span> <span
  m="1693250">S.</span> <span m="1694180">That's</span> <span
  m="1694570">the</span> <span m="1694690">matrix</span> <span
  m="1695950">that</span> <span m="1696100">we</span> <span
  m="1696280">see</span> <span m="1696580">at</span> <span
  m="1696700">every</span> <span m="1696970">step.</span> <span
  m="1698970">Let</span> <span m="1699300">me</span> <span
  m="1699490">call</span> <span m="1699760">that</span> <span
  m="1700080">matrix</span> <span m="1701230">R.</span></p><p><span
  m="1707422">So</span> <span m="1707920">I've</span> <span
  m="1709260">done</span> <span m="1709510">some</span> <span
  m="1709750">algebra--</span> <span m="1710230">more</span> <span
  m="1710470">than</span> <span m="1710710">I</span> <span
  m="1710920">would</span> <span m="1711580">always</span> <span
  m="1712090">do</span> <span m="1712320">in</span> <span m="1712450">a</span>
  <span m="1712540">lecture--</span> <span m="1713440">but</span> <span
  m="1713890">it's</span> <span m="1714310">really</span> <span
  m="1714850">my--</span> <span m="1715300">I</span> <span
  m="1715420">wouldn't</span> <span m="1715720">do</span> <span
  m="1715900">it</span> <span m="1715990">if</span> <span m="1716140">it</span>
  <span m="1716230">wasn't</span> <span m="1716590">nice</span> <span
  m="1716980">algebra.</span> <span m="1717670">What's</span> <span
  m="1717970">the</span> <span m="1718090">conclusion?</span> <span
  m="1719680">That</span> <span m="1719800">conclusion</span> <span
  m="1720550">is</span> <span m="1720940">that</span> <span
  m="1722050">with</span> <span m="1722380">the</span> <span
  m="1722500">momentum</span> <span m="1723640">term--</span> <span
  m="1724060">with</span> <span m="1724300">this</span> <span
  m="1725080">number</span> <span m="1725470">beta</span> <span
  m="1726550">available</span> <span m="1727180">to</span> <span
  m="1727360">choose,</span> <span m="1727900">as</span> <span
  m="1728050">well</span> <span m="1728290">as</span> <span
  m="1728470">S,</span> <span m="1729610">the</span> <span
  m="1730270">step--</span> <span m="1731200">the</span> <span
  m="1731590">coefficient</span> <span m="1732520">of</span> <span
  m="1733150">the</span> <span m="1733340">eigenvector</span> <span
  m="1737080">is</span> <span m="1737320">multiplied</span> <span
  m="1737900">at</span> <span m="1738040">every</span> <span
  m="1738340">step</span> <span m="1738640">by</span> <span
  m="1738880">that</span> <span m="1739330">matrix</span> <span
  m="1739980">R.</span> <span m="1740665">R</span> <span m="1740920">is</span>
  <span m="1741130">that</span> <span m="1741520">matrix.</span> <span
  m="1744200">And</span> <span m="1744340">of</span> <span
  m="1744430">course,</span> <span m="1744730">that</span> <span
  m="1744940">matrix</span> <span m="1745480">involves</span> <span
  m="1745960">the</span> <span m="1746110">eigenvalue.</span></p><p><span
  m="1750120">So</span> <span m="1750420">we</span> <span
  m="1750660">have</span> <span m="1751050">to</span> <span
  m="1751770">think</span> <span m="1752100">about--</span> <span
  m="1754610">what</span> <span m="1754830">do</span> <span
  m="1754920">we</span> <span m="1755070">want</span> <span
  m="1755250">to</span> <span m="1755340">do</span> <span
  m="1755580">now?</span> <span m="1757110">We</span> <span
  m="1757260">want</span> <span m="1757470">to</span> <span
  m="1757560">choose</span> <span m="1758990">beta</span> <span
  m="1759810">and</span> <span m="1760050">S</span> <span m="1761550">to</span>
  <span m="1761700">make</span> <span m="1763780">R</span> <span
  m="1764100">as</span> <span m="1764190">small</span> <span
  m="1764550">as</span> <span m="1764670">possible,</span> <span
  m="1766400">right?</span> <span m="1766740">We</span> <span
  m="1766860">want</span> <span m="1767070">to</span> <span
  m="1767130">make</span> <span m="1767460">R</span> <span m="1767730">as</span>
  <span m="1767850">small</span> <span m="1768210">as</span> <span
  m="1768360">possible.</span> <span m="1769350">And</span> <span
  m="1769490">we</span> <span m="1769600">are</span> <span
  m="1769710">free</span> <span m="1770010">to</span> <span
  m="1770130">choose</span> <span m="1770460">beta</span> <span
  m="1770850">and</span> <span m="1771030">S,</span> <span
  m="1771750">but</span> <span m="1772890">R</span> <span
  m="1773130">depends</span> <span m="1773610">on</span> <span
  m="1773790">lambda.</span> <span m="1776780">So</span> <span
  m="1776990">I'm</span> <span m="1777140">going</span> <span
  m="1777240">to</span> <span m="1777350">make</span> <span
  m="1777590">it</span> <span m="1777710">as</span> <span
  m="1777800">small</span> <span m="1778190">as</span> <span
  m="1778340">possible</span> <span m="1779360">over</span> <span
  m="1779690">the</span> <span m="1779810">whole</span> <span
  m="1780110">range</span> <span m="1780560">of</span> <span
  m="1780710">possible</span> <span m="1781220">lambdas.</span> <span
  m="1782240">So</span> <span m="1783050">let</span> <span
  m="1783260">me--</span> <span m="1784100">so</span> <span
  m="1784340">now</span> <span m="1784610">here</span> <span
  m="1784820">we</span> <span m="1785030">really</span> <span
  m="1785480">go.</span></p><p><span m="1789410">So</span> <span
  m="1789710">we</span> <span m="1790460">have</span> <span
  m="1790790">lambda</span> <span m="1792770">between</span> <span
  m="1793610">sum.</span> <span m="1795740">These</span> <span
  m="1796010">are</span> <span m="1797540">the</span> <span
  m="1797770">eigenvalue</span> <span m="1799730">of</span> <span
  m="1799890">S.</span> <span m="1803290">And</span> <span
  m="1803440">what</span> <span m="1803620">we</span> <span
  m="1803800">know--</span> <span m="1804520">what's</span> <span
  m="1805180">reasonable</span> <span m="1805660">to</span> <span
  m="1805750">know--</span> <span m="1806110">is</span> <span
  m="1806290">a</span> <span m="1806920">lower</span> <span
  m="1807280">bound.</span> <span m="1809100">It's</span> <span
  m="1809290">a</span> <span m="1809350">positive.</span> <span
  m="1810160">This</span> <span m="1810340">is</span> <span m="1810520">a</span>
  <span m="1810610">symmetric</span> <span m="1811420">positive</span> <span
  m="1811870">definite</span> <span m="1812320">matrix.</span> <span
  m="1813250">A</span> <span m="1813310">lower</span> <span
  m="1813670">bound</span> <span m="1814090">and</span> <span
  m="1814230">an</span> <span m="1814360">upper</span> <span
  m="1814630">bound,</span> <span m="1816310">for</span> <span
  m="1816490">example,</span> <span m="1819280">m</span> <span
  m="1819550">was</span> <span m="1819820">B,</span> <span m="1820880">and
  M</span> <span m="1821230">was</span> <span m="1821500">1,</span> <span
  m="1823030">in</span> <span m="1823210">that</span> <span m="1823810">2</span>
  <span m="1824080">by</span> <span m="1824260">2</span> <span
  m="1824610">problem.</span> <span m="1825880">And</span> <span
  m="1826030">this</span> <span m="1826210">is</span> <span
  m="1826360">what</span> <span m="1826540">we</span> <span
  m="1826690">know,</span> <span m="1826960">that</span> <span
  m="1827170">the</span> <span m="1827350">eigenvalues</span> <span
  m="1828310">are</span> <span m="1828460">between</span> <span m="1829240">m
  and M.</span> <span m="1833600">And</span> <span m="1833780">the</span> <span
  m="1833870">ratio</span> <span m="1835400">of</span> <span
  m="1836660">m</span> <span m="1837710">to</span> <span m="1837950">M--</span>
  <span m="1838850">well,</span> <span m="1840100">if</span> <span
  m="1840150">I</span> <span m="1841620">write--</span> <span
  m="1845380">this</span> <span m="1846760">is</span> <span
  m="1846940">the</span> <span m="1847060">key</span> <span
  m="1850240">quantity.</span> <span m="1850880">And</span> <span
  m="1851020">what's</span> <span m="1851320">it</span> <span
  m="1851440">called?</span></p><p><span m="1853020">Lambda</span> <span
  m="1853440">max</span> <span m="1853830">divided</span> <span
  m="1854250">by</span> <span m="1854430">lambda</span> <span
  m="1854910">min</span> <span m="1855360">is</span> <span
  m="1855690">the--</span></p><p><span m="1856080">AUDIENCE:</span> <span
  m="1856260">Condition</span> <span m="1856440">number.</span></p><p><span
  m="1856800">GILBERT STRANG:</span> <span m="1856942">Condition</span> <span
  m="1857085">number.</span> <span m="1857730">Right.</span> <span
  m="1858090">This</span> <span m="1858360">is</span> <span
  m="1858540">all</span> <span m="1858960">sometimes</span> <span
  m="1859500">written</span> <span m="1859770">kappa--</span> <span
  m="1860910">Greek</span> <span m="1861150">letter</span> <span
  m="1861450">kappa--</span> <span m="1862175">the</span> <span
  m="1862440">condition</span> <span m="1863240">number</span> <span
  m="1867470">of</span> <span m="1867910">S.</span> <span m="1870420">And</span>
  <span m="1870570">when</span> <span m="1870750">that's</span> <span
  m="1871050">big,</span> <span m="1871650">then</span> <span
  m="1871890">the</span> <span m="1871980">problem</span> <span
  m="1872280">is</span> <span m="1872370">going</span> <span
  m="1872490">to</span> <span m="1872580">be</span> <span
  m="1872700">harder.</span> <span m="1874830">When</span> <span
  m="1875010">that's</span> <span m="1875240">1,</span> <span
  m="1877560">then</span> <span m="1878040">my</span> <span
  m="1878250">matrix</span> <span m="1878820">is</span> <span
  m="1878940">just</span> <span m="1879240">a</span> <span
  m="1879300">multiple</span> <span m="1879780">of</span> <span
  m="1879900">the</span> <span m="1880080">identity</span> <span
  m="1880650">matrix.</span> <span m="1881260">And</span> <span
  m="1881280">the</span> <span m="1881340">problem</span> <span
  m="1881670">is</span> <span m="1881790">trivial.</span> <span
  m="1882480">When</span> <span m="1884100">capital</span> <span
  m="1884580">M</span> <span m="1884730">and</span> <span
  m="1885550">small</span> <span m="1885900">m</span> <span
  m="1886050">are</span> <span m="1886140">the</span> <span
  m="1886260">same,</span> <span m="1887710">then</span> <span
  m="1888820">that's</span> <span m="1889350">saying</span> <span
  m="1889920">that</span> <span m="1890510">the</span> <span
  m="1890670">largest</span> <span m="1891180">and</span> <span
  m="1891330">smallest</span> <span m="1891810">eigenvalues</span> <span
  m="1892530">are</span> <span m="1892650">identical,</span> <span
  m="1893310">that</span> <span m="1894030">the</span> <span
  m="1894150">matrix</span> <span m="1894690">is</span> <span
  m="1894840">a</span> <span m="1894900">multiple</span> <span
  m="1895380">of</span> <span m="1895500">the</span> <span
  m="1895650">identity.</span> <span m="1896730">That's</span> <span
  m="1897060">the</span> <span m="1897960">condition</span> <span
  m="1898470">number</span> <span m="1898770">one.</span></p><p><span
  m="1899310">But</span> <span m="1900060">the</span> <span
  m="1902280">bad</span> <span m="1902730">one</span> <span
  m="1903270">is</span> <span m="1904200">when</span> <span
  m="1904410">it's</span> <span m="1904590">1</span> <span
  m="1904890">over</span> <span m="1905100">b,</span> <span
  m="1906120">in</span> <span m="1906540">our</span> <span
  m="1906750">example,</span> <span m="1907980">and</span> <span
  m="1909110">that</span> <span m="1909300">could</span> <span
  m="1909540">be</span> <span m="1909960">very</span> <span
  m="1910290">large.</span> <span m="1911790">OK.</span> <span
  m="1912540">That's</span> <span m="1912870">where</span> <span
  m="1913140">we</span> <span m="1913560">have</span> <span
  m="1913770">our</span> <span m="1913830">problem.</span> <span
  m="1916680">Let</span> <span m="1916860">me</span> <span
  m="1917010">just</span> <span m="1917920">insert</span> <span
  m="1919440">about</span> <span m="1919920">the</span> <span
  m="1921180">ordinary</span> <span m="1923760">gradient</span> <span
  m="1924270">descent.</span> <span m="1925830">Of</span> <span
  m="1925980">course,</span> <span m="1926850">the</span> <span
  m="1927030">textbooks</span> <span m="1928230">find</span> <span
  m="1928680">a</span> <span m="1929220">estimate</span> <span
  m="1929760">for</span> <span m="1929940">how</span> <span
  m="1930150">fast</span> <span m="1930510">that</span> <span
  m="1930780">is.</span> <span m="1931470">And</span> <span
  m="1931710">of</span> <span m="1931830">course,</span> <span
  m="1932890">it</span> <span m="1932940">depends</span> <span
  m="1933540">on</span> <span m="1933930">that</span> <span
  m="1934200">number.</span> <span m="1935730">Yeah.</span> <span
  m="1936090">So</span> <span m="1936330">it</span> <span
  m="1936450">depends</span> <span m="1936900">on</span> <span
  m="1937050">that</span> <span m="1937230">number,</span> <span
  m="1937620">and</span> <span m="1938160">you</span> <span
  m="1938430">exactly</span> <span m="1939810">saw</span> <span
  m="1940320">how</span> <span m="1940560">it</span> <span
  m="1940620">depended</span> <span m="1941220">on</span> <span
  m="1941370">that</span> <span m="1941550">number.</span> <span
  m="1943070">Right.</span></p><p><span m="1945210">But</span> <span
  m="1945540">now</span> <span m="1945810">we</span> <span
  m="1945960">have</span> <span m="1946170">a</span> <span
  m="1946230">different</span> <span m="1946620">problem.</span> <span
  m="1947070">And</span> <span m="1947250">we're</span> <span
  m="1947400">going</span> <span m="1947510">to</span> <span
  m="1948480">finish</span> <span m="1948900">it.</span> <span
  m="1949710">OK.</span> <span m="1950070">So</span> <span
  m="1950220">what's</span> <span m="1950460">my</span> <span
  m="1950670">job?</span> <span m="1951000">I'm</span> <span
  m="1951150">going</span> <span m="1951240">to</span> <span
  m="1951420">choose</span> <span m="1951840">S</span> <span
  m="1952110">and</span> <span m="1952270">beta</span> <span
  m="1953640">to</span> <span m="1956490">keep</span> <span
  m="1956880">the</span> <span m="1957510">eigenvalues</span> <span
  m="1958320">of</span> <span m="1958430">R.</span> <span m="1958650">So</span>
  <span m="1959010">let's</span> <span m="1959310">give</span> <span
  m="1959550">the</span> <span m="1959670">eigenvalues</span> <span
  m="1960390">of</span> <span m="1960510">R a</span> <span
  m="1960840">name.</span> <span m="1962450">So</span> <span
  m="1962915">R--</span> <span m="1963380">let's</span> <span
  m="1963620">say</span> <span m="1963920">R</span> <span m="1964280">has</span>
  <span m="1965480">eigenvalues</span> <span m="1969440">e1,</span> <span
  m="1970310">that</span> <span m="1970490">depends</span> <span
  m="1971120">on</span> <span m="1973770">the</span> <span
  m="1973980">lambda</span> <span m="1974990">and</span> <span m="1975295">the S
  and</span> <span m="1975600">the</span> <span m="1975720">beta</span> <span
  m="1976290">and</span> <span m="1976620">e2.</span> <span
  m="1980400">So</span> <span m="1980580">those</span> <span
  m="1980880">are</span> <span m="1980970">the</span> <span
  m="1981120">eigenvalues</span> <span m="1981900">of</span> <span
  m="1982080">R--</span> <span m="1983700">just</span> <span
  m="1983970">giving</span> <span m="1984330">a</span> <span
  m="1984390">letter</span> <span m="1985170">to</span> <span
  m="1985830">them.</span> <span m="1987210">So</span> <span
  m="1987600">what's</span> <span m="1988150">our</span> <span
  m="1988330">job?</span> <span m="1989430">We</span> <span
  m="1989590">want</span> <span m="1989780">to</span> <span
  m="1989910">choose</span> <span m="1991710">S</span> <span
  m="1991950">and</span> <span m="1992100">beta</span> <span
  m="1993210">to</span> <span m="1993360">make</span> <span
  m="1993600">those</span> <span m="1993900">eigenvalues</span> <span
  m="1994590">as</span> <span m="1994680">small</span> <span
  m="1995040">as</span> <span m="1995160">possible.</span> <span
  m="1996900">Right?</span></p><p><span m="1997680">Small</span> <span
  m="1998100">eigenvalues--</span> <span m="2000870">if</span> <span
  m="2001360">R</span> <span m="2001660">has</span> <span
  m="2001850">small</span> <span m="2002250">eigenvalues,</span> <span
  m="2003120">its</span> <span m="2003330">powers--</span> <span
  m="2004770">every</span> <span m="2005460">step</span> <span
  m="2005820">multiplies</span> <span m="2006510">by</span> <span
  m="2006750">R.</span> <span m="2007890">So</span> <span m="2008100">the</span>
  <span m="2008520">convergence</span> <span m="2009330">rate</span> <span
  m="2009930">with</span> <span m="2010200">momentum</span> <span
  m="2011310">is--</span> <span m="2012450">depends</span> <span
  m="2013050">on</span> <span m="2013410">the</span> <span
  m="2013500">powers</span> <span m="2014070">of</span> <span
  m="2014220">R</span> <span m="2014790">getting</span> <span
  m="2015390">small</span> <span m="2015840">fast.</span> <span
  m="2016410">It</span> <span m="2016500">depends</span> <span
  m="2016950">on</span> <span m="2017100">the</span> <span
  m="2017280">eigenvalues</span> <span m="2018240">being</span> <span
  m="2018540">small.</span> <span m="2019350">We</span> <span
  m="2019560">want</span> <span m="2019860">to</span> <span
  m="2021660">minimize</span> <span m="2024210">the</span> <span
  m="2024810">largest</span> <span m="2025410">eigenvalue.</span> <span
  m="2028500">So</span> <span m="2028710">I'll</span> <span
  m="2028860">say</span> <span m="2029180">the</span> <span
  m="2029280">maximum</span> <span m="2030600">of</span> <span
  m="2031470">e1</span> <span m="2032820">and</span> <span
  m="2033930">e2--</span> <span m="2036000">that's</span> <span
  m="2036270">our</span> <span m="2036420">job.</span> <span
  m="2037650">Minimize--</span> <span m="2038990">we</span> <span
  m="2039390">want</span> <span m="2039540">to</span> <span
  m="2039630">choose</span> <span m="2039990">S</span> <span m="2040170">and
  beta</span> <span m="2040630">to</span> <span m="2040770">minimize</span>
  <span m="2041430">the</span> <span m="2041550">largest</span> <span
  m="2042100">eigenvalue.</span> <span m="2043550">Because</span> <span
  m="2043880">if</span> <span m="2044000">there's</span> <span
  m="2044210">one</span> <span m="2044480">small</span> <span
  m="2044900">eigenvalue,</span> <span m="2045560">but</span> <span
  m="2045710">the</span> <span m="2045830">other</span> <span
  m="2045960">is</span> <span m="2046170">big,</span> <span
  m="2046490">then</span> <span m="2046700">the</span> <span
  m="2046850">other</span> <span m="2047060">one</span> <span
  m="2047270">is</span> <span m="2047420">going</span> <span
  m="2047550">to</span> <span m="2047690">kill</span> <span
  m="2047960">us.</span></p><p><span m="2048679">So</span> <span
  m="2048889">we</span> <span m="2049070">have</span> <span
  m="2049310">to</span> <span m="2049460">get</span> <span
  m="2049730">both</span> <span m="2050150">eigenvalues</span> <span
  m="2051530">down.</span> <span m="2052670">And</span> <span
  m="2052850">of</span> <span m="2052940">course,</span> <span
  m="2053389">those</span> <span m="2053810">depend</span> <span
  m="2054409">on</span> <span m="2054739">lambda.</span> <span
  m="2056239">E1</span> <span m="2056690">depends</span> <span
  m="2057139">on</span> <span m="2057290">lambda.</span> <span
  m="2058050">So</span> <span m="2058159">we</span> <span
  m="2058280">have</span> <span m="2058429">a</span> <span
  m="2058489">little</span> <span m="2058850">algebra</span> <span
  m="2059330">problem.</span> <span m="2060620">And</span> <span
  m="2060800">this</span> <span m="2061040">is</span> <span
  m="2061219">what</span> <span m="2061460">I</span> <span
  m="2061699">described</span> <span m="2062270">as</span> <span
  m="2062449">a</span> <span m="2062510">miracle--</span> <span
  m="2063679">the</span> <span m="2063770">fact</span> <span
  m="2064130">that</span> <span m="2064250">this</span> <span
  m="2064520">little</span> <span m="2064880">algebra</span> <span
  m="2065389">problem--</span> <span m="2066770">the</span> <span
  m="2066980">eigenvalues</span> <span m="2067909">of</span> <span
  m="2068030">that</span> <span m="2068300">matrix,</span> <span
  m="2069050">e1</span> <span m="2069530">and</span> <span
  m="2069830">e2,</span> <span m="2070730">which</span> <span
  m="2070969">depend</span> <span m="2071389">on</span> <span
  m="2071540">lambda</span> <span m="2072130">in</span> <span
  m="2072350">some</span> <span m="2073699">way.</span> <span
  m="2075080">And</span> <span m="2075230">we</span> <span
  m="2075380">want</span> <span m="2075590">to</span> <span
  m="2075679">make</span> <span m="2076219">both</span> <span
  m="2076580">e1</span> <span m="2076960">and e2</span> <span
  m="2077600">small--</span> <span m="2079159">the</span> <span
  m="2079250">maximum</span> <span m="2079909">of</span> <span
  m="2080560">those--</span> <span m="2080900">of</span> <span
  m="2081170">them.</span> <span m="2082040">And</span> <span
  m="2082370">we</span> <span m="2082550">have</span> <span
  m="2082760">to</span> <span m="2082909">do</span> <span m="2083120">it</span>
  <span m="2083270">for</span> <span m="2084710">all</span> <span
  m="2085909">the</span> <span m="2086060">eigenvalues</span> <span
  m="2086630">lambda,</span> <span m="2087050">because</span> <span
  m="2087290">we</span> <span m="2087530">have</span> <span
  m="2087699">to--</span> <span m="2088639">we're</span> <span
  m="2089330">now</span> <span m="2089690">thinking--</span> <span
  m="2090770">we've</span> <span m="2091219">been</span> <span
  m="2091429">tracking</span> <span m="2092420">each</span> <span
  m="2092840">eigenvector.</span></p><p><span m="2094370">So</span> <span
  m="2094850">that</span> <span m="2095150">gave</span> <span
  m="2095389">us</span> <span m="2095540">1--</span> <span m="2096020">so</span>
  <span m="2096350">this</span> <span m="2096590">is</span> <span
  m="2096710">for</span> <span m="2096980">all</span> <span
  m="2097280">possible</span> <span m="2097820">lambda.</span> <span
  m="2099930">So</span> <span m="2100010">we</span> <span
  m="2100130">have</span> <span m="2100280">to</span> <span
  m="2100400">decide,</span> <span m="2100820">what</span> <span
  m="2100970">do</span> <span m="2101120">I</span> <span m="2101240">mean</span>
  <span m="2101510">by</span> <span m="2101720">all</span> <span
  m="2101900">possible</span> <span m="2102410">lambda?</span> <span
  m="2103350">And</span> <span m="2103510">I</span> <span
  m="2103640">mean</span> <span m="2103940">all</span> <span
  m="2104210">lambda</span> <span m="2104780">that</span> <span
  m="2105530">are</span> <span m="2105650">between</span> <span
  m="2106250">some</span> <span m="2106700">m and M.</span> <span
  m="2112910">There</span> <span m="2113330">is</span> <span
  m="2114350">a</span> <span m="2114410">beautiful</span> <span
  m="2114950">problem.</span> <span m="2117200">You</span> <span
  m="2117290">have</span> <span m="2117470">a</span> <span m="2117530">2</span>
  <span m="2117740">by</span> <span m="2117890">2</span> <span
  m="2118130">matrix.</span> <span m="2118790">You</span> <span
  m="2118970">can</span> <span m="2119210">find</span> <span
  m="2120170">its</span> <span m="2120350">eigenvalues.</span> <span
  m="2122960">They</span> <span m="2123200">depend</span> <span
  m="2123650">on</span> <span m="2123830">lambda.</span> <span
  m="2124610">And</span> <span m="2124850">what</span> <span
  m="2125030">we--</span> <span m="2125300">all</span> <span
  m="2125510">we</span> <span m="2125660">know</span> <span
  m="2125870">about</span> <span m="2126140">lambda</span> <span
  m="2126620">is</span> <span m="2126920">it's</span> <span
  m="2127100">between</span> <span m="2127620">m and</span> <span
  m="2128840">cap</span> <span m="2129170">M.</span> <span
  m="2130460">And</span> <span m="2130640">also,</span> <span
  m="2131030">they</span> <span m="2131210">also</span> <span
  m="2131540">depend</span> <span m="2131990">on S and</span> <span
  m="2132140">beta--</span> <span m="2132920">the</span> <span
  m="2133070">two</span> <span m="2133250">parameters</span> <span
  m="2133890">we</span> <span m="2134090">can</span> <span
  m="2134270">choose.</span></p><p><span m="2135380">And</span> <span
  m="2135590">we</span> <span m="2135740">want</span> <span
  m="2135950">to</span> <span m="2136010">choose</span> <span
  m="2136430">those</span> <span m="2136700">parameters,</span> <span
  m="2137780">so</span> <span m="2138020">that</span> <span
  m="2138740">for</span> <span m="2139550">all</span> <span
  m="2140150">the</span> <span m="2141230">possible</span> <span
  m="2141830">eigenvalues,</span> <span m="2143060">the</span> <span
  m="2143450">larger</span> <span m="2144500">of</span> <span
  m="2144650">the</span> <span m="2144770">two</span> <span
  m="2145070">eigenvalues</span> <span m="2145910">will</span> <span
  m="2146090">be</span> <span m="2146240">as</span> <span
  m="2146330">small</span> <span m="2146720">as</span> <span
  m="2146870">possible.</span> <span m="2147490">That's--</span> <span
  m="2149390">it's</span> <span m="2149570">a</span> <span
  m="2149630">little</span> <span m="2149900">bit</span> <span
  m="2150080">of</span> <span m="2150230">algebra,</span> <span
  m="2151040">but</span> <span m="2152510">do</span> <span
  m="2152570">you</span> <span m="2152690">see</span> <span
  m="2153020">that</span> <span m="2153230">that's</span> <span
  m="2153590">the</span> <span m="2153770">tricky--</span> <span
  m="2154730">that--</span> <span m="2155840">I</span> <span
  m="2155900">shouldn't</span> <span m="2156170">say</span> <span
  m="2156350">tricky,</span> <span m="2156740">because</span> <span
  m="2157100">it</span> <span m="2157220">comes</span> <span
  m="2157550">out--</span> <span m="2159680">this</span> <span
  m="2159920">is</span> <span m="2160010">the</span> <span
  m="2160100">one</span> <span m="2160340">that</span> <span
  m="2160790">is</span> <span m="2161090">a</span> <span
  m="2161150">miracle</span> <span m="2161780">in</span> <span
  m="2162770">the</span> <span m="2162920">simplicity</span> <span
  m="2163760">of</span> <span m="2163910">the</span> <span
  m="2164060">solution.</span> <span m="2165270">OK.</span> <span
  m="2165930">And</span> <span m="2166070">I'm</span> <span
  m="2166220">going</span> <span m="2166440">to--</span> <span m="2167150">in
  fact,</span> <span m="2167480">maybe</span> <span m="2167780">I'll</span>
  <span m="2168020">move</span> <span m="2168320">over</span> <span
  m="2168560">here</span> <span m="2168800">to</span> <span
  m="2169250">write</span> <span m="2169520">the</span> <span
  m="2169670">answer.</span> <span m="2173930">OK.</span> <span
  m="2176570">And</span> <span m="2177380">I</span> <span
  m="2177470">just</span> <span m="2177650">want</span> <span
  m="2177800">to</span> <span m="2177890">say</span> <span
  m="2178160">that</span> <span m="2179090">miracles</span> <span
  m="2179690">don't</span> <span m="2180140">happen</span> <span
  m="2180600">so</span> <span m="2180770">often</span> <span
  m="2181130">in</span> <span m="2181250">math.</span></p><p><span
  m="2182440">There</span> <span m="2182660">is--</span> <span
  m="2184640">all</span> <span m="2184860">of</span> <span
  m="2184950">mathematics--</span> <span m="2185550">the</span> <span
  m="2185630">whole</span> <span m="2185780">point</span> <span
  m="2186050">of</span> <span m="2186140">math</span> <span
  m="2186470">is</span> <span m="2186620">to</span> <span
  m="2186770">explain</span> <span m="2187430">miracles.</span> <span
  m="2188810">So</span> <span m="2189410">there</span> <span
  m="2191530">is</span> <span m="2191600">something</span> <span
  m="2191990">to</span> <span m="2192110">explain</span> <span
  m="2192680">here,</span> <span m="2193850">and</span> <span
  m="2194930">I</span> <span m="2195080">don't</span> <span
  m="2195470">have</span> <span m="2195650">my</span> <span
  m="2195890">finger</span> <span m="2196310">on</span> <span
  m="2196460">it</span> <span m="2196640">yet.</span> <span
  m="2197390">Because--</span> <span m="2199080">anyway,</span> <span
  m="2199850">it</span> <span m="2200000">happens.</span> <span
  m="2201230">So</span> <span m="2201440">let</span> <span m="2201590">me</span>
  <span m="2201710">tell</span> <span m="2201920">you</span> <span
  m="2202040">what</span> <span m="2202220">the</span> <span
  m="2202340">right</span> <span m="2202670">S,</span> <span
  m="2203000">and</span> <span m="2203120">the</span> <span
  m="2203180">right</span> <span m="2204800">beta,</span> <span
  m="2205550">and</span> <span m="2205970">the</span> <span
  m="2206630">resulting</span> <span m="2210830">minimum</span> <span
  m="2211370">eigenvalue</span> <span m="2212150">are.</span> <span
  m="2213500">So</span> <span m="2214520">again,</span> <span
  m="2215420">they</span> <span m="2215720">depend</span> <span
  m="2217130">on</span> <span m="2217850">little</span> <span
  m="2218210">m</span> <span m="2218480">and</span> <span m="2218600">big</span>
  <span m="2218870">M.</span> <span m="2220300">That's</span> <span
  m="2220600">a</span> <span m="2220750">very</span> <span
  m="2221140">nice</span> <span m="2221470">feature,</span> <span
  m="2224470">which</span> <span m="2224710">we</span> <span
  m="2224870">expect.</span></p><p><span m="2225230">And</span> <span
  m="2225880">they</span> <span m="2226030">depend</span> <span
  m="2226420">on</span> <span m="2226540">the</span> <span
  m="2226630">ratio.</span> <span m="2227680">OK.</span> <span
  m="2228190">So</span> <span m="2228430">that</span> <span
  m="2228640">ratio--</span> <span m="2228960">all</span> <span
  m="2229280">right.</span> <span m="2229540">Let's</span> <span
  m="2230110">see</span> <span m="2230350">it.</span> <span
  m="2231340">OK.</span> <span m="2232300">So</span> <span
  m="2232510">the</span> <span m="2232600">best</span> <span
  m="2233020">S--</span> <span m="2238750">the S</span> <span
  m="2238910">optimal</span> <span m="2243440">has</span> <span
  m="2243830">the</span> <span m="2243950">formula</span> <span
  m="2245510">2</span> <span m="2246410">over</span> <span
  m="2247530">square</span> <span m="2247930">root</span> <span
  m="2248180">of</span> <span m="2248420">lambda</span> <span
  m="2248870">max.</span> <span m="2249470">That's</span> <span
  m="2249810">the</span> <span m="2249920">square</span> <span
  m="2250140">root</span> <span m="2250450">of</span> <span m="2250610">M</span>
  <span m="2252050">and</span> <span m="2252500">the</span> <span
  m="2252620">squared</span> <span m="2253160">of</span> <span
  m="2253420">m</span> <span m="2254600">squared.</span> <span
  m="2257290">Amazing</span> <span m="2258360">OK.</span> <span
  m="2258730">And</span> <span m="2258830">beta</span> <span
  m="2260080">optimal</span> <span m="2263800">turns</span> <span
  m="2264130">out</span> <span m="2264280">to</span> <span m="2264430">be</span>
  <span m="2265840">the</span> <span m="2266020">square</span> <span
  m="2266530">root</span> <span m="2266710">of</span> <span m="2266950">M</span>
  <span m="2269020">minus</span> <span m="2269620">the</span> <span
  m="2269740">square</span> <span m="2270160">of</span> <span
  m="2270220">little</span> <span m="2270520">m,</span> <span
  m="2271630">over</span> <span m="2271960">the</span> <span
  m="2272110">square</span> <span m="2272380">root</span> <span
  m="2272500">of</span> <span m="2272650">M</span> <span m="2273760">plus</span>
  <span m="2274240">the</span> <span m="2274330">square</span> <span
  m="2274920">root</span> <span m="2275180">of little</span> <span
  m="2275570">m,</span> <span m="2276010">all</span> <span
  m="2276220">squared.</span> <span m="2277600">And</span> <span
  m="2277660">of</span> <span m="2277720">course,</span> <span
  m="2277990">we</span> <span m="2278170">know</span> <span
  m="2278440">what</span> <span m="2278620">these</span> <span
  m="2278890">numbers</span> <span m="2279280">are--</span> <span
  m="2279550">1</span> <span m="2279880">and</span> <span
  m="2280030">beta,</span> <span m="2280470">in</span> <span
  m="2280660">our</span> <span m="2280930">model</span> <span
  m="2281320">problem.</span></p><p><span m="2282430">That's</span> <span
  m="2282700">where</span> <span m="2283120">I'm</span> <span
  m="2283300">going</span> <span m="2283450">to</span> <span
  m="2283600">get</span> <span m="2283840">this</span> <span
  m="2285180">square</span> <span m="2285580">root</span> <span
  m="2285880">of--</span> <span m="2286720">this</span> <span
  m="2286990">is</span> <span m="2287110">1</span> <span
  m="2287620">minus</span> <span m="2288100">the square</span> <span
  m="2288310">root--</span> <span m="2288550">oh sorry,</span> <span
  m="2288810">b.</span> <span m="2289660">This</span> <span
  m="2289870">is</span> <span m="2290020">1</span> <span
  m="2290350">minus</span> <span m="2290740">the</span> <span
  m="2290830">square</span> <span m="2291130">root</span> <span
  m="2291280">of</span> <span m="2291340">b.</span> <span m="2293050">In</span>
  <span m="2293170">fact,</span> <span m="2295270">for</span> <span
  m="2295540">our</span> <span m="2296590">example--</span> <span
  m="2297520">well,</span> <span m="2297670">let</span> <span
  m="2297790">me</span> <span m="2297910">just</span> <span
  m="2298120">write</span> <span m="2298430">what</span> <span
  m="2298870">they</span> <span m="2299020">would</span> <span
  m="2299170">be.</span> <span m="2299670">2</span> <span
  m="2300160">over</span> <span m="2301150">1</span> <span
  m="2301450">plus</span> <span m="2301870">square</span> <span m="2302135">root
  of</span> <span m="2302400">b</span> <span m="2303820">squared,</span> <span
  m="2305080">and</span> <span m="2306640">1</span> <span
  m="2306970">minus</span> <span m="2307330">square root of</span> <span
  m="2307810">b</span> <span m="2308380">over</span> <span m="2308710">1</span>
  <span m="2308950">plus</span> <span m="2309280">square--</span> <span
  m="2309700">you</span> <span m="2310120">see</span> <span
  m="2310390">where</span> <span m="2310630">this</span> <span
  m="2311770">is--</span> <span m="2313530">1</span> <span
  m="2313750">minus</span> <span m="2314050">square</span> <span
  m="2314350">root of</span> <span m="2314440">b</span> <span
  m="2314680">is</span> <span m="2314890">beginning</span> <span
  m="2315520">to</span> <span m="2315640">appear</span> <span m="2316060">in
  that.</span></p><p><span m="2316510">It</span> <span
  m="2316660">appears</span> <span m="2317260">in</span> <span
  m="2317380">this</span> <span m="2317530">solution</span> <span
  m="2318010">to</span> <span m="2318100">this</span> <span
  m="2318280">problem.</span> <span m="2318910">And</span> <span
  m="2319030">then</span> <span m="2319270">I</span> <span
  m="2319390">have</span> <span m="2319690">to</span> <span
  m="2319840">tell</span> <span m="2320170">you</span> <span
  m="2321160">what</span> <span m="2321490">the--</span> <span
  m="2325090">how</span> <span m="2325740">small</span> <span
  m="2326850">do</span> <span m="2327160">these</span> <span
  m="2328740">optimal</span> <span m="2329160">choices</span> <span
  m="2329700">make</span> <span m="2330660">the</span> <span
  m="2330810">eigenvalues</span> <span m="2331500">of</span> <span
  m="2331620">R,</span> <span m="2332160">right?</span> <span
  m="2332520">This</span> <span m="2332820">is</span> <span
  m="2332940">what</span> <span m="2333150">we're</span> <span
  m="2334290">really</span> <span m="2335340">paying</span> <span
  m="2335670">attention</span> <span m="2336210">to,</span> <span
  m="2336360">because</span> <span m="2337600">if</span> <span
  m="2337770">the</span> <span m="2337920">eigenvalues--</span> <span
  m="2339210">that</span> <span m="2339420">matrix</span> <span
  m="2339960">tells</span> <span m="2340260">us</span> <span
  m="2340440">what</span> <span m="2340650">happens</span> <span
  m="2341130">at</span> <span m="2341250">every</span> <span
  m="2341580">step.</span> <span m="2342600">And</span> <span
  m="2342920">its</span> <span m="2343290">eigenvalues</span> <span
  m="2344100">have</span> <span m="2344310">to</span> <span
  m="2344430">be</span> <span m="2344610">small</span> <span
  m="2345090">to</span> <span m="2345630">get</span> <span
  m="2345840">fast</span> <span m="2346380">convergence.</span> <span
  m="2346860">So</span> <span m="2347070">how</span> <span
  m="2347340">small</span> <span m="2347820">are</span> <span
  m="2347940">they?</span> <span m="2348570">Well</span> <span
  m="2348810">they</span> <span m="2349020">involve</span> <span
  m="2349440">this--</span> <span m="2353590">yeah.</span> <span
  m="2353980">So</span> <span m="2354570">it's</span> <span
  m="2354820">the</span> <span m="2355120">number</span> <span
  m="2355540">that</span> <span m="2355750">I've</span> <span
  m="2355930">seen.</span></p><p><span m="2357150">So</span> <span
  m="2358510">in</span> <span m="2358930">this</span> <span
  m="2359170">case,</span> <span m="2360010">the</span> <span
  m="2360170">e's--</span> <span m="2361630">the</span> <span
  m="2361750">eigenvalues</span> <span m="2368700">of R--</span> <span
  m="2369300">that's</span> <span m="2370050">the</span> <span
  m="2370380">iterating</span> <span m="2371010">matrix--</span> <span
  m="2372090">are</span> <span m="2372330">below--</span> <span
  m="2374040">now</span> <span m="2374310">you're</span> <span
  m="2374460">going</span> <span m="2374570">to</span> <span
  m="2374700">see</span> <span m="2375030">the</span> <span m="2375600">1</span>
  <span m="2375840">minus</span> <span m="2376210">square root</span> <span
  m="2376560">of</span> <span m="2376680">b</span> <span m="2377580">over</span>
  <span m="2377850">1</span> <span m="2378150">plus square root of</span> <span
  m="2378450">b--</span> <span m="2381060">I</span> <span
  m="2381180">think,</span> <span m="2381390">maybe,</span> <span
  m="2381750">squared.</span> <span m="2383220">Let</span> <span
  m="2383370">me</span> <span m="2383490">just</span> <span
  m="2384270">see.</span> <span m="2384480">Yeah.</span> <span
  m="2385590">It</span> <span m="2385740">happens</span> <span
  m="2386160">to</span> <span m="2386910">come</span> <span
  m="2387180">out</span> <span m="2387360">that</span> <span
  m="2387570">number</span> <span m="2387900">again.</span> <span
  m="2390450">So</span> <span m="2390590">that's</span> <span
  m="2390950">the</span> <span m="2391640">conclusion.</span> <span
  m="2393470">That</span> <span m="2393620">with</span> <span
  m="2393830">the</span> <span m="2393920">right</span> <span
  m="2394220">choice</span> <span m="2394670">of</span> <span
  m="2394850">S</span> <span m="2396140">and</span> <span
  m="2396320">beta,</span> <span m="2397790">by</span> <span
  m="2398090">adding</span> <span m="2398600">this</span> <span
  m="2400400">look</span> <span m="2400670">back</span> <span
  m="2401030">term--</span> <span m="2401480">look</span> <span
  m="2401720">back</span> <span m="2402050">one</span> <span
  m="2402350">step--</span> <span m="2403490">you</span> <span
  m="2403910">get</span> <span m="2404180">this</span> <span
  m="2404480">improvement.</span> <span m="2405920">And</span> <span
  m="2406250">it</span> <span m="2410350">happens,</span> <span
  m="2410800">and</span> <span m="2410930">you</span> <span
  m="2411090">see</span> <span m="2411330">it</span> <span m="2411480">in</span>
  <span m="2411600">practice,</span> <span m="2412170">of</span> <span
  m="2412260">course.</span> <span m="2413490">You'll</span> <span
  m="2413940">see</span> <span m="2414210">it</span> <span
  m="2414330">exactly.</span></p><p><span m="2415650">And</span> <span
  m="2421150">so</span> <span m="2421620">you</span> <span m="2423610">do</span>
  <span m="2423850">the</span> <span m="2423970">job</span> <span
  m="2424670">to</span> <span m="2424900">use</span> <span
  m="2425260">momentum.</span> <span m="2426310">Now</span> <span
  m="2426550">I'm</span> <span m="2426670">going</span> <span
  m="2426820">to</span> <span m="2426910">mention</span> <span
  m="2427630">what</span> <span m="2428050">the</span> <span
  m="2429040">Nesterov--</span> <span m="2430290">Nesterov</span> <span
  m="2430900">had</span> <span m="2431020">a</span> <span
  m="2431110">slightly</span> <span m="2431590">different</span> <span
  m="2431920">way</span> <span m="2432100">to</span> <span m="2432220">do</span>
  <span m="2432460">it,</span> <span m="2433600">and</span> <span
  m="2433720">I'll</span> <span m="2433840">tell</span> <span
  m="2434110">you</span> <span m="2434230">what</span> <span
  m="2434740">that</span> <span m="2435010">is.</span> <span
  m="2437170">But</span> <span m="2437410">it's</span> <span
  m="2437590">the</span> <span m="2437680">same</span> <span
  m="2438070">idea--</span> <span m="2438550">get</span> <span
  m="2438850">a</span> <span m="2438940">second</span> <span
  m="2439900">thing.</span> <span m="2440320">So</span> <span
  m="2440560">let's</span> <span m="2440740">see</span> <span
  m="2440920">if</span> <span m="2441040">I</span> <span m="2441160">can</span>
  <span m="2441310">find</span> <span m="2441640">that.</span> <span
  m="2442540">Yeah,</span> <span m="2443020">Nesterov.</span> <span
  m="2444510">OK.</span> <span m="2451250">Here</span> <span
  m="2451750">we</span> <span m="2451900">go.</span> <span m="2453040">So</span>
  <span m="2453610">let</span> <span m="2453700">me</span> <span
  m="2453940">bring</span> <span m="2454450">Nesterov's</span> <span
  m="2455100">name</span> <span m="2455440">down.</span> <span
  m="2461740">So</span> <span m="2462100">that's</span> <span
  m="2464350">basically</span> <span m="2465100">what</span> <span
  m="2465340">I</span> <span m="2465430">wanted</span> <span
  m="2465700">to</span> <span m="2465820">say</span> <span
  m="2466090">about</span> <span m="2466300">number</span> <span
  m="2466600">1.</span></p><p><span m="2467320">And</span> <span
  m="2467500">when</span> <span m="2467770">you</span> <span
  m="2467950">see</span> <span m="2468320">Nesterov,</span> <span
  m="2469090">you'll</span> <span m="2469300">see</span> <span
  m="2469630">that</span> <span m="2469840">it's</span> <span
  m="2470050">a</span> <span m="2470110">similar</span> <span
  m="2470680">idea</span> <span m="2471670">of</span> <span
  m="2472450">involving</span> <span m="2473350">the</span> <span
  m="2473950">previous</span> <span m="2474550">time</span> <span
  m="2474910">value.</span> <span m="2476140">OK.</span> <span
  m="2477550">There</span> <span m="2477760">are</span> <span
  m="2480340">very</span> <span m="2480640">popular</span> <span
  m="2481240">methods</span> <span m="2482830">in</span> <span
  m="2483880">use</span> <span m="2484270">now</span> <span
  m="2484720">for</span> <span m="2485110">machine</span> <span
  m="2485620">learning</span> <span m="2486730">that</span> <span
  m="2486970">involve--</span> <span m="2488500">by</span> <span
  m="2488800">a</span> <span m="2488890">simple</span> <span
  m="2489370">formula--</span> <span m="2489940">all</span> <span
  m="2490270">the</span> <span m="2490390">previous</span> <span
  m="2490900">values,</span> <span m="2491840">by</span> <span
  m="2492910">sort</span> <span m="2493150">of</span> <span
  m="2493330">a--</span> <span m="2494020">just</span> <span
  m="2494320">by</span> <span m="2495070">an</span> <span
  m="2495220">addition</span> <span m="2495790">of</span> <span
  m="2495940">a</span> <span m="2496000">bunch</span> <span
  m="2496300">of</span> <span m="2496420">terms.</span> <span
  m="2496970">So</span> <span m="2497110">it's</span> <span
  m="2497290">really--</span> <span m="2499160">so</span> <span
  m="2499940">it</span> <span m="2501310">goes</span> <span
  m="2501700">under</span> <span m="2502000">the</span> <span
  m="2502120">names</span> <span m="2504160">adagrad,</span> <span
  m="2509525">or</span> <span m="2509950">others.</span></p><p><span
  m="2510970">Those</span> <span m="2511300">of</span> <span
  m="2511420">you</span> <span m="2511690">who</span> <span
  m="2511780">already</span> <span m="2513010">know</span> <span
  m="2513340">about</span> <span m="2513670">machine</span> <span
  m="2514120">learning</span> <span m="2514510">will</span> <span
  m="2514690">know</span> <span m="2514900">what</span> <span
  m="2515110">I'm</span> <span m="2515290">speaking</span> <span
  m="2515680">about.</span> <span m="2515980">And</span> <span
  m="2516130">I'll</span> <span m="2516310">say</span> <span
  m="2516550">more</span> <span m="2516790">about</span> <span
  m="2517060">those.</span> <span m="2518020">Yeah.</span> <span
  m="2519910">But</span> <span m="2520120">it</span> <span
  m="2520330">doesn't</span> <span m="2520780">involve</span> <span
  m="2521350">a</span> <span m="2521440">separate</span> <span
  m="2522130">coefficient</span> <span m="2522790">for</span> <span
  m="2523030">each</span> <span m="2523870">previous</span> <span
  m="2524410">value,</span> <span m="2524830">or</span> <span
  m="2525040">that</span> <span m="2525310">would</span> <span
  m="2525490">be</span> <span m="2525730">a</span> <span
  m="2526630">momentous</span> <span m="2527440">amount</span> <span
  m="2527770">of</span> <span m="2527830">work.</span> <span
  m="2528880">So</span> <span m="2529690">now</span> <span m="2529930">I</span>
  <span m="2530020">just</span> <span m="2530260">want</span> <span
  m="2530440">to</span> <span m="2530530">tell</span> <span
  m="2530740">you</span> <span m="2530860">what</span> <span
  m="2530980">Nesterov</span> <span m="2531580">is,</span> <span
  m="2531850">and</span> <span m="2531940">then</span> <span
  m="2532120">we're</span> <span m="2532300">good.</span> <span
  m="2533380">OK.</span> <span m="2533740">Nesterov's</span> <span
  m="2534430">idea.</span> <span m="2538366">Let</span> <span
  m="2538870">me</span> <span m="2539050">bring</span> <span
  m="2539380">that</span> <span m="2539650">down.</span> <span
  m="2540820">Shoot</span> <span m="2541090">this</span> <span
  m="2541390">up.</span> <span m="2542660">Bring</span> <span
  m="2543040">down</span> <span m="2543500">Nesterov.</span> <span
  m="2551060">Because</span> <span m="2551420">he</span> <span
  m="2551570">had</span> <span m="2551780">an</span> <span
  m="2551900">idea</span> <span m="2552290">that</span> <span
  m="2552470">you</span> <span m="2552590">might</span> <span
  m="2552860">not</span> <span m="2553550">have</span> <span
  m="2553700">thought</span> <span m="2554030">of.</span></p><p><span
  m="2555170">Somehow</span> <span m="2555680">the</span> <span
  m="2555980">momentum</span> <span m="2556670">idea</span> <span
  m="2557120">was</span> <span m="2557360">pretty</span> <span
  m="2557690">natural--</span> <span m="2558790">to</span> <span
  m="2558950">use</span> <span m="2559340">that</span> <span
  m="2559550">previous</span> <span m="2560120">value.</span> <span
  m="2561770">And</span> <span m="2562010">actually,</span> <span
  m="2562820">I</span> <span m="2562970">would</span> <span
  m="2563150">like</span> <span m="2563390">to</span> <span
  m="2563540">know</span> <span m="2563780">what</span> <span
  m="2564020">happens</span> <span m="2564440">if</span> <span
  m="2564590">you</span> <span m="2564710">use</span> <span
  m="2565070">two</span> <span m="2565310">previous</span> <span
  m="2565880">values,</span> <span m="2566390">or</span> <span
  m="2566510">three</span> <span m="2566810">previous</span> <span
  m="2567380">values.</span> <span m="2567890">Can</span> <span
  m="2568190">you</span> <span m="2568370">then</span> <span
  m="2569300">get</span> <span m="2570050">improvements</span> <span
  m="2570980">on</span> <span m="2571970">this</span> <span
  m="2573920">convergence</span> <span m="2574610">rate</span> <span
  m="2577310">by</span> <span m="2577550">going</span> <span
  m="2577880">back</span> <span m="2578150">two</span> <span
  m="2578390">steps</span> <span m="2578780">or</span> <span
  m="2578900">three</span> <span m="2579170">steps?</span> <span
  m="2580550">If</span> <span m="2580730">I'd</span> <span
  m="2580910">use</span> <span m="2581360">the</span> <span
  m="2581510">analogy</span> <span m="2582230">with</span> <span
  m="2584180">ordinary</span> <span m="2584630">differential</span> <span
  m="2585170">equations,</span> <span m="2586910">maybe</span> <span
  m="2587270">you</span> <span m="2587450">know.</span> <span
  m="2587870">So</span> <span m="2590330">there</span> <span
  m="2590510">are</span> <span m="2590570">backward</span> <span
  m="2591140">difference</span> <span m="2591680">formulas.</span> <span
  m="2592720">Do</span> <span m="2592870">you</span> <span
  m="2592970">know</span> <span m="2593180">about</span> <span
  m="2593390">those</span> <span m="2593720">for--</span> <span
  m="2594800">those</span> <span m="2595470">would</span> <span
  m="2595590">be</span> <span m="2595790">in</span> <span
  m="2595910">MATLAB</span> <span m="2596480">software,</span> <span
  m="2598380">and</span> <span m="2598700">all</span> <span
  m="2598940">other</span> <span m="2599240">software.</span></p><p><span
  m="2600440">Backward</span> <span m="2600860">differences--</span> <span
  m="2601760">so</span> <span m="2602120">maybe</span> <span
  m="2602560">you</span> <span m="2602750">go</span> <span
  m="2602990">back</span> <span m="2604040">two</span> <span
  m="2604430">steps</span> <span m="2605240">or</span> <span
  m="2605510">four</span> <span m="2606020">steps.</span> <span
  m="2607040">If</span> <span m="2607220">you're</span> <span
  m="2607370">doing</span> <span m="2607700">planetary</span> <span
  m="2608510">calculations,</span> <span m="2609800">if</span> <span
  m="2609980">you're</span> <span m="2610190">an</span> <span
  m="2610280">astronomer,</span> <span m="2611330">you</span> <span
  m="2611460">go</span> <span m="2611630">back</span> <span
  m="2611870">maybe</span> <span m="2612170">seven</span> <span
  m="2612680">or</span> <span m="2612830">eight</span> <span
  m="2613040">steps</span> <span m="2613460">to</span> <span
  m="2613550">get</span> <span m="2613760">super</span> <span
  m="2614210">high</span> <span m="2614540">accuracy.</span> <span
  m="2615950">So</span> <span m="2617600">that</span> <span
  m="2617870">doesn't</span> <span m="2618140">seem</span> <span
  m="2618440">to</span> <span m="2618950">have</span> <span
  m="2619130">happened</span> <span m="2619580">yet,</span> <span
  m="2620050">but</span> <span m="2620230">it's</span> <span
  m="2620320">should</span> <span m="2620690">happen</span> <span
  m="2621410">here--</span> <span m="2622110">to</span> <span
  m="2622250">go</span> <span m="2622460">back</span> <span
  m="2622760">more.</span> <span m="2623150">But</span> <span
  m="2624170">Nesterov</span> <span m="2625460">has</span> <span
  m="2626210">this</span> <span m="2626480">different</span> <span
  m="2626900">way</span> <span m="2627140">to</span> <span m="2627230">go</span>
  <span m="2627410">back.</span> <span m="2628010">So</span> <span
  m="2628220">his</span> <span m="2628430">formula</span> <span
  m="2628880">is</span> <span m="2629660">XK</span> <span
  m="2630140">plus</span> <span m="2630470">1--</span> <span
  m="2630800">the</span> <span m="2630920">new</span> <span
  m="2631160">X--</span> <span m="2632870">is</span> <span
  m="2634400">YK--</span> <span m="2635420">so</span> <span
  m="2635690">he's</span> <span m="2636080">introducing</span> <span
  m="2636830">something</span> <span m="2637250">a</span> <span
  m="2637310">little</span> <span m="2637520">different--</span> <span
  m="2638360">minus</span> <span m="2639380">S</span> <span
  m="2640430">gradient</span> <span m="2641030">f</span> <span
  m="2642530">at</span> <span m="2643400">YK.</span></p><p><span
  m="2649100">I'm</span> <span m="2649250">a</span> <span
  m="2649280">little</span> <span m="2649430">surprised</span> <span
  m="2649940">about</span> <span m="2650150">that</span> <span
  m="2650390">YK,</span> <span m="2650930">but</span> <span
  m="2651140">this</span> <span m="2651410">is</span> <span
  m="2651560">the</span> <span m="2651680">point,</span> <span
  m="2652640">here--</span> <span m="2653330">that</span> <span
  m="2653600">the</span> <span m="2653810">gradient</span> <span
  m="2654500">is</span> <span m="2654740">being</span> <span
  m="2655040">evaluated</span> <span m="2655940">at</span> <span
  m="2656120">some</span> <span m="2656390">different</span> <span
  m="2656870">point.</span> <span m="2658010">And</span> <span
  m="2658220">then</span> <span m="2658550">he</span> <span
  m="2658730">has</span> <span m="2659000">to</span> <span
  m="2659120">give</span> <span m="2659360">a</span> <span
  m="2660170">formula</span> <span m="2660710">for</span> <span
  m="2660890">that</span> <span m="2661880">to</span> <span
  m="2662090">track</span> <span m="2662480">those</span> <span
  m="2662750">Y's.</span> <span m="2663950">So</span> <span
  m="2664130">the</span> <span m="2664220">Y's</span> <span
  m="2664700">are</span> <span m="2664790">like</span> <span
  m="2665060">the</span> <span m="2665270">X's,</span> <span
  m="2667440">but</span> <span m="2667670">they</span> <span
  m="2667760">are</span> <span m="2667910">shifted</span> <span
  m="2668450">a</span> <span m="2668510">little</span> <span
  m="2668780">bit</span> <span m="2669110">by</span> <span
  m="2669410">some</span> <span m="2669740">term--</span> <span
  m="2670190">and</span> <span m="2670760">beta</span> <span
  m="2671210">would</span> <span m="2671450">be</span> <span
  m="2671630">fine.</span> <span m="2673230">Oh</span> <span
  m="2674680">no.</span> <span m="2675830">Yeah--</span> <span
  m="2676270">beta--</span> <span m="2677480">have</span> <span
  m="2677630">we</span> <span m="2677750">got</span> <span
  m="2677960">Nesterov</span> <span m="2678560">here?</span> <span
  m="2680120">Yes.</span> <span m="2680330">Nesterov</span> <span
  m="2680960">has</span> <span m="2681200">a</span> <span
  m="2682190">factor</span> <span m="2682700">gamma</span> <span
  m="2683330">in.</span> <span m="2685230">Yeah.</span> <span
  m="2685650">So</span> <span m="2686790">all</span> <span
  m="2686950">right.</span> <span m="2687240">Let</span> <span
  m="2687360">me</span> <span m="2688740">try</span> <span m="2689010">to</span>
  <span m="2689130">get</span> <span m="2689310">this</span> <span
  m="2689490">right.</span> <span m="2690170">OK.</span> <span
  m="2692870">All</span> <span m="2692940">right.</span></p><p><span
  m="2693540">On</span> <span m="2693720">a</span> <span
  m="2693780">previous</span> <span m="2694260">line,</span> <span
  m="2694560">I've</span> <span m="2694710">written</span> <span
  m="2695010">the</span> <span m="2695100">whole</span> <span
  m="2695530">Nesterov</span> <span m="2696200">thing.</span> <span
  m="2696890">Here,</span> <span m="2697230">let's</span> <span
  m="2697430">see</span> <span m="2697700">a</span> <span
  m="2697830">Nesterov</span> <span m="2698370">completely.</span> <span
  m="2699240">And</span> <span m="2699360">then</span> <span
  m="2699540">it'll</span> <span m="2699660">break--</span> <span
  m="2700230">then</span> <span m="2700500">this</span> <span
  m="2700740">is</span> <span m="2700860">the</span> <span
  m="2701010">step</span> <span m="2701340">that</span> <span
  m="2701520">breaks</span> <span m="2701910">it</span> <span
  m="2702060">into</span> <span m="2702300">two</span> <span
  m="2702960">first</span> <span m="2703380">order.</span> <span
  m="2704010">But</span> <span m="2704430">you'll</span> <span
  m="2704610">see</span> <span m="2704880">the</span> <span
  m="2705420">main</span> <span m="2705720">formula</span> <span
  m="2706170">here.</span> <span m="2706780">XK</span> <span
  m="2707220">plus</span> <span m="2707520">1</span> <span m="2707790">is</span>
  <span m="2707970">XK.</span> <span m="2710750">And</span> <span
  m="2710900">then</span> <span m="2711080">a</span> <span
  m="2711170">beta</span> <span m="2715310">times</span> <span
  m="2716840">XK</span> <span m="2717320">minus</span> <span
  m="2717620">XK</span> <span m="2718160">minus</span> <span
  m="2718550">1.</span> <span m="2719600">So</span> <span
  m="2719790">that's</span> <span m="2720800">a</span> <span
  m="2720860">momentum</span> <span m="2721550">term.</span> <span
  m="2722570">And</span> <span m="2722690">then</span> <span
  m="2723260">a</span> <span m="2723350">typical</span> <span
  m="2724850">gradient.</span> <span m="2726560">But</span> <span
  m="2726920">now</span> <span m="2727250">here</span> <span
  m="2727460">is</span> <span m="2727710">Nesterov</span> <span
  m="2728540">speaking</span> <span m="2729050">up.</span> <span
  m="2729950">Nesterov</span> <span m="2730640">evaluates</span> <span
  m="2731390">the</span> <span m="2731510">gradient</span> <span
  m="2732130">not</span> <span m="2732480">at</span> <span
  m="2732710">XK,</span> <span m="2733820">not</span> <span
  m="2734120">at</span> <span m="2734300">XK</span> <span
  m="2734780">minus</span> <span m="2735230">1.</span></p><p><span
  m="2735710">But</span> <span m="2735860">it his</span> <span
  m="2736060">own,</span> <span m="2736640">Nesterov</span> <span
  m="2737330">point.</span> <span m="2738650">So</span> <span
  m="2738860">this</span> <span m="2739070">is</span> <span
  m="2739250">Nesterov's</span> <span m="2740630">favorite</span> <span
  m="2741200">point.</span> <span m="2741950">Gamma</span> <span
  m="2743900">XK</span> <span m="2744350">minus</span> <span
  m="2744680">XK</span> <span m="2745190">minus</span> <span
  m="2745550">1.</span> <span m="2746210">Some</span> <span
  m="2746720">point,</span> <span m="2748310">part</span> <span
  m="2749070">way</span> <span m="2749420">along</span> <span
  m="2752180">that</span> <span m="2752960">step.</span> <span
  m="2754950">So</span> <span m="2755750">this</span> <span
  m="2755960">point--</span> <span m="2757040">because</span> <span
  m="2757250">gamma</span> <span m="2757610">is</span> <span
  m="2757730">going</span> <span m="2757860">to</span> <span
  m="2758000">be</span> <span m="2758210">some</span> <span
  m="2759560">non-integer--</span> <span m="2761190">this</span> <span
  m="2761510">evaluation</span> <span m="2762470">point</span> <span
  m="2762890">for</span> <span m="2763190">the</span> <span
  m="2763310">gradient</span> <span m="2763760">of</span> <span
  m="2763940">f</span> <span m="2764900">is</span> <span m="2765260">a</span>
  <span m="2765320">little</span> <span m="2766220">unexpected</span> <span
  m="2767030">and</span> <span m="2767180">weird,</span> <span
  m="2767570">because</span> <span m="2767990">it's</span> <span
  m="2768260">not</span> <span m="2768710">a</span> <span
  m="2768800">mesh</span> <span m="2769160">point.</span> <span
  m="2769970">It's</span> <span m="2770930">somewhere</span> <span
  m="2771380">between.</span> <span m="2773470">OK.</span> <span
  m="2775190">Yeah.</span> <span m="2777170">And</span> <span
  m="2777350">then</span> <span m="2778340">that--</span> <span
  m="2780420">so</span> <span m="2780620">that</span> <span
  m="2780830">involves</span> <span m="2782240">XK</span> <span
  m="2782630">plus</span> <span m="2782960">1,</span> <span
  m="2784700">XK,</span> <span m="2785870">and</span> <span
  m="2786530">XK</span> <span m="2787040">minus</span> <span
  m="2787490">1.</span></p><p><span m="2789410">So</span> <span
  m="2790370">it's</span> <span m="2790520">a</span> <span
  m="2790610">second</span> <span m="2791030">order--</span> <span
  m="2793260">there's</span> <span m="2793530">a</span> <span
  m="2793620">second</span> <span m="2794040">order</span> <span
  m="2794490">method</span> <span m="2795180">here.</span> <span
  m="2795580">We're</span> <span m="2795690">going</span> <span
  m="2795860">to--</span> <span m="2796430">to</span> <span
  m="2796620">analyze</span> <span m="2797220">it,</span> <span
  m="2797370">we're</span> <span m="2797520">going</span> <span
  m="2797730">to</span> <span m="2798330">go</span> <span
  m="2798600">through</span> <span m="2798960">this</span> <span
  m="2799350">same</span> <span m="2799890">process</span> <span
  m="2801150">of</span> <span m="2801270">writing</span> <span
  m="2801720">it</span> <span m="2801840">as</span> <span m="2802050">two</span>
  <span m="2802950">first</span> <span m="2803340">order</span> <span
  m="2804480">steps--</span> <span m="2805260">two</span> <span
  m="2805560">first--</span> <span m="2806220">two</span> <span
  m="2806730">single</span> <span m="2807240">step--</span> <span
  m="2808590">two</span> <span m="2808950">one</span> <span
  m="2809340">step</span> <span m="2809820">from</span> <span m="2810660">K to
  K</span> <span m="2811200">plus</span> <span m="2811510">1</span> <span
  m="2813910">coupled</span> <span m="2815020">with</span> <span
  m="2817110">one</span> <span m="2817350">step</span> <span
  m="2817680">thing.</span> <span m="2818460">Follow</span> <span
  m="2818820">that</span> <span m="2819060">same</span> <span
  m="2819450">thing</span> <span m="2819720">through,</span> <span
  m="2820230">and</span> <span m="2820410">then</span> <span
  m="2821520">the</span> <span m="2821760">result</span> <span
  m="2823230">is,</span> <span m="2825030">the</span> <span
  m="2825150">same</span> <span m="2825630">factor</span> <span
  m="2826170">appears</span> <span m="2826710">for</span> <span
  m="2826890">him.</span> <span m="2828280">The</span> <span
  m="2828780">same</span> <span m="2829230">factor--</span> <span
  m="2829950">this</span> <span m="2830220">is</span> <span
  m="2830370">also--</span> <span m="2831810">so</span> <span
  m="2833030">the</span> <span m="2833220">point</span> <span
  m="2833520">is,</span> <span m="2833700">this</span> <span
  m="2834000">is</span> <span m="2834660">for</span> <span
  m="2834840">momentum</span> <span m="2839190">and</span> <span
  m="2842010">Nesterov,</span> <span m="2844140">with</span> <span
  m="2850350">some</span> <span m="2850590">constant--</span> <span
  m="2851130">different</span> <span m="2852510">by</span> <span
  m="2852720">some</span> <span m="2852960">constant.</span></p><p><span
  m="2853530">But</span> <span m="2854430">the</span> <span
  m="2854820">key</span> <span m="2855900">quantity</span> <span
  m="2856470">is</span> <span m="2856650">that</span> <span
  m="2856920">one</span> <span m="2857400">and</span> <span
  m="2859440">that</span> <span m="2859650">appears</span> <span
  m="2860070">in</span> <span m="2860220">both.</span> <span
  m="2861840">So</span> <span m="2866130">I</span> <span
  m="2866250">don't</span> <span m="2866430">propose,</span> <span
  m="2866970">of</span> <span m="2867090">course,</span> <span
  m="2867480">to</span> <span m="2868410">repeat</span> <span
  m="2868830">these</span> <span m="2869070">steps</span> <span
  m="2869550">for</span> <span m="2869730">Nesterov.</span> <span
  m="2870660">But</span> <span m="2871110">you</span> <span
  m="2871320">see</span> <span m="2871560">what</span> <span
  m="2873240">you</span> <span m="2873360">could</span> <span
  m="2873540">do.</span> <span m="2874770">You</span> <span
  m="2874920">see</span> <span m="2875220">that it</span> <span
  m="2875530">involves</span> <span m="2876930">K</span> <span
  m="2877140">minus</span> <span m="2877530">1,</span> <span
  m="2877800">KNK</span> <span m="2878520">plus</span> <span
  m="2878820">1.</span> <span m="2879720">You</span> <span
  m="2879840">write</span> <span m="2880170">it</span> <span
  m="2880380">as--</span> <span m="2881550">you</span> <span
  m="2881670">follow</span> <span m="2882060">an</span> <span
  m="2882210">eigenvector.</span> <span m="2883890">You</span> <span
  m="2884010">write</span> <span m="2884280">it</span> <span
  m="2884460">as</span> <span m="2884640">a</span> <span
  m="2884740">coupled</span> <span m="2885180">system</span> <span
  m="2886880">of--</span> <span m="2887370">that's</span> <span
  m="2887690">a</span> <span m="2887790">one</span> <span
  m="2888060">step.</span> <span m="2888900">That</span> <span
  m="2889050">has</span> <span m="2889290">a</span> <span
  m="2889350">matrix.</span> <span m="2890570">You</span> <span
  m="2890720">find</span> <span m="2891050">the</span> <span
  m="2891120">matrix.</span> <span m="2892320">You</span> <span
  m="2892440">find</span> <span m="2892680">the</span> <span
  m="2892800">eigenvalues</span> <span m="2893670">of</span> <span
  m="2893790">the</span> <span m="2893880">matrix.</span></p><p><span
  m="2894840">You</span> <span m="2894960">make</span> <span
  m="2895170">those</span> <span m="2895440">eigenvalues</span> <span
  m="2896100">as</span> <span m="2896190">small</span> <span
  m="2896490">as</span> <span m="2896610">possible.</span> <span
  m="2897210">And</span> <span m="2897720">you</span> <span
  m="2897900">have</span> <span m="2898440">optimized</span> <span
  m="2900190">the</span> <span m="2900360">coefficients</span> <span
  m="2901170">in</span> <span m="2901350">Nesterov.</span> <span
  m="2902390">OK.</span> <span m="2902820">That's</span> <span
  m="2905190">sort</span> <span m="2905430">of</span> <span m="2905610">a</span>
  <span m="2905790">lot</span> <span m="2906180">of</span> <span
  m="2906330">algebra</span> <span m="2907500">that's</span> <span
  m="2907800">at</span> <span m="2907950">the</span> <span
  m="2908070">heart</span> <span m="2908490">of</span> <span
  m="2910500">accelerated</span> <span m="2911790">gradient</span> <span
  m="2912240">descent.</span> <span m="2912840">And</span> <span
  m="2913290">of</span> <span m="2913410">course,</span> <span
  m="2914580">it's</span> <span m="2914790">worth</span> <span
  m="2915030">doing</span> <span m="2915450">because</span> <span
  m="2917370">it's</span> <span m="2917670">a</span> <span
  m="2917730">tremendous</span> <span m="2918210">saving</span> <span
  m="2918810">in</span> <span m="2921120">the</span> <span
  m="2921300">convergence</span> <span m="2921930">rate.</span> <span
  m="2922590">OK.</span> <span m="2924630">Anybody</span> <span
  m="2925080">running</span> <span m="2925470">in</span> <span
  m="2925590">the</span> <span m="2925680">marathon</span> <span
  m="2926610">or</span> <span m="2926760">just</span> <span
  m="2927150">watching?</span> <span m="2929640">It's</span> <span
  m="2929820">possible</span> <span m="2930270">to</span> <span
  m="2930390">run,</span> <span m="2930750">you</span> <span
  m="2930870">know.</span> <span m="2933480">Anyway,</span> <span
  m="2934080">I'll</span> <span m="2934170">see</span> <span
  m="2934410">you</span> <span m="2934500">after</span> <span
  m="2934860">the</span> <span m="2934950">marathon,</span> <span
  m="2936030">next</span> <span m="2936330">Wednesday.</span> <span
  m="2937350">And</span> <span m="2938190">Professor</span> <span
  m="2938580">Boyd</span> <span m="2939000">will</span> <span
  m="2939150">also</span> <span m="2939450">see</span> <span
  m="2939750">you.</span></p>
uid: d701065a0c65a65f846f2d1b676f9614
type: course
layout: video
---
