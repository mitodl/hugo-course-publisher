---
about_this_resource_text: >-
  <h2 class="subhead"><strong>Description</strong></h2> <p>In this lecture,
  Professor Strang discusses optimization, the fundamental algorithm that goes
  into deep learning. Later in the lecture he reviews the structure of
  convolutional neural networks (CNN) used in analyzing visual imagery.</p> <h2
  class="subhead"><strong>Summary</strong></h2> <p>Three terms of a Taylor
  series of \(F\)(\(x\)) : many variables \(x\)<br /> Downhill direction decided
  by first partial derivatives of \(F\) at \(x\)<br /> Newton's method uses
  higher derivatives (Hessian at higher cost).</p> <p>Related sections in
  textbook: VI.1, VI.4</p> <p><strong>Instructor:</strong> Prof. Gilbert
  Strang</p>
embedded_media:
  - id: Video-YouTube-Stream
    media_location: nvXRJIBOREc
    parent_uid: 1f32e87cb6abcb28fefb267c9a2d5796
    title: Video-YouTube-Stream
    type: Video
    uid: a679af46233e8308a6004b5ce63c04b9
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/nvXRJIBOREc/default.jpg'
    parent_uid: 1f32e87cb6abcb28fefb267c9a2d5796
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 2e3fda7096f089d16569390bea1bc863
  - id: 3Play-3PlayYouTubeid-MP4
    media_location: nvXRJIBOREc
    parent_uid: 1f32e87cb6abcb28fefb267c9a2d5796
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 4d01a6e188296b6ad45d3c1ab852e564
  - id: nvXRJIBOREc.srt
    parent_uid: 1f32e87cb6abcb28fefb267c9a2d5796
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-21-minimizing-a-function-step-by-step/nvXRJIBOREc.srt
    title: 3play caption file
    type: null
    uid: 93c049bc6cba662f0cb78934062a5fe2
  - id: nvXRJIBOREc.pdf
    parent_uid: 1f32e87cb6abcb28fefb267c9a2d5796
    technical_location: >-
      https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-21-minimizing-a-function-step-by-step/nvXRJIBOREc.pdf
    title: 3play pdf file
    type: null
    uid: 4371db9866484c5b260f002c7f7de303
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 1f32e87cb6abcb28fefb267c9a2d5796
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 411a4c60952b01574843200990795e7b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 1f32e87cb6abcb28fefb267c9a2d5796
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: f75aa26c93a509714739704678b2d9d1
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT18.065S18/MIT18_065S18_Lecture21_300k.mp4'
    parent_uid: 1f32e87cb6abcb28fefb267c9a2d5796
    title: Video-Internet Archive-MP4
    type: Video
    uid: 1b5b212f512ca9669d10daf0a0336110
inline_embed_id: 41374427lecture21minimizingafunctionstepbystep74584489
parent_uid: 6fbb9713721ef6bdefadaa8b81b5e9e6
related_resources_text: ''
short_url: lecture-21-minimizing-a-function-step-by-step
technical_location: >-
  https://ocw.mit.edu/courses/mathematics/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-spring-2018/video-lectures/lecture-21-minimizing-a-function-step-by-step
title: 'Lecture 21: Minimizing a Function Step by Step'
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
  m="11900">donation</span> <span m="12680">or</span> <span m="12800">to</span>
  <span m="12950">view</span> <span m="13160">additional</span> <span
  m="13550">materials</span> <span m="14180">from</span> <span
  m="14360">hundreds</span> <span m="14690">of</span> <span m="14810">MIT</span>
  <span m="15170">courses,</span> <span m="16470">visit</span> <span
  m="16670">MIT</span> <span m="17180">OpenCourseWare</span> <span
  m="17795">at</span> <span m="18290">ocw.mit.edu.</span></p><p><span
  m="22800">GILBERT STRANG:</span> <span m="22950">Well,</span> <span
  m="23100">OK,</span> <span m="23940">I</span> <span m="24210">am</span> <span
  m="24420">happy</span> <span m="24750">to</span> <span m="24870">be</span>
  <span m="24990">back,</span> <span m="26180">and</span> <span
  m="26690">I</span> <span m="26830">am</span> <span m="26970">really</span>
  <span m="27510">happy</span> <span m="27870">about</span> <span
  m="28200">the</span> <span m="29040">project</span> <span
  m="29910">proposals</span> <span m="30720">that</span> <span
  m="30870">are</span> <span m="30960">coming</span> <span m="31350">in.</span>
  <span m="32229">This</span> <span m="32490">is</span> <span
  m="32759">like,</span> <span m="33120">OK,</span> <span m="33570">this</span>
  <span m="33780">is</span> <span m="34080">really a</span> <span
  m="34440">good</span> <span m="34710">part</span> <span m="34980">of</span>
  <span m="35040">the</span> <span m="35160">course.</span> <span
  m="36840">And</span> <span m="38330">so</span> <span m="38550">keep</span>
  <span m="38760">them</span> <span m="38940">coming,</span> <span
  m="39930">and</span> <span m="40680">I'm</span> <span m="41310">happy</span>
  <span m="41640">to</span> <span m="41760">give</span> <span
  m="42000">whatever</span> <span m="42360">feedback</span> <span
  m="42870">I</span> <span m="42990">can</span> <span m="43380">on</span> <span
  m="43500">those</span> <span m="43740">proposals,</span> <span
  m="45000">and</span> <span m="46410">do</span> <span m="46680">make</span>
  <span m="46950">a</span> <span m="47020">start</span> <span
  m="48550">there.</span> <span m="49120">They're</span> <span
  m="49270">really</span> <span m="49620">good,</span> <span
  m="49950">and</span> <span m="50130">if</span> <span m="51450">some</span>
  <span m="51680">are</span> <span m="52140">completed</span> <span
  m="53100">before</span> <span m="53790">the</span> <span m="54120">end</span>
  <span m="54270">of</span> <span m="54330">the</span> <span
  m="54450">semester</span> <span m="54990">and</span> <span m="55080">we</span>
  <span m="55230">can</span> <span m="58210">to</span> <span
  m="58350">offer</span> <span m="58650">you</span> <span m="58800">a</span>
  <span m="58890">chance</span> <span m="59280">to</span> <span
  m="59430">report</span> <span m="59940">on</span> <span m="60090">them,</span>
  <span m="60860">that</span> <span m="61510">that's</span> <span
  m="61830">good</span> <span m="62070">too.</span> <span m="64019">So</span>
  <span m="65760">well</span> <span m="66060">done</span> <span
  m="66330">with</span> <span m="66550">those</span> <span
  m="66770">proposals.</span></p><p><span m="67930">So</span> <span
  m="68700">today,</span> <span m="69900">I'm</span> <span
  m="70350">jumping</span> <span m="70890">to</span> <span m="71700">part</span>
  <span m="72060">six.</span> <span m="72830">So</span> <span
  m="73260">part</span> <span m="73500">six</span> <span m="73800">and</span>
  <span m="73890">part</span> <span m="74160">seven</span> <span
  m="74610">are</span> <span m="74880">optimization</span> <span
  m="75870">which</span> <span m="76140">is</span> <span m="76290">the</span>
  <span m="76410">fundamental</span> <span m="77100">algorithm</span> <span
  m="77700">that</span> <span m="77910">goes</span> <span m="78330">into</span>
  <span m="78690">deep</span> <span m="79020">learning.</span> <span
  m="79980">So</span> <span m="80160">we've</span> <span m="80370">got</span>
  <span m="80550">to</span> <span m="80640">start</span> <span
  m="81030">with</span> <span m="81270">optimization.</span> <span
  m="82140">Everybody</span> <span m="83610">has</span> <span
  m="83940">to</span> <span m="84210">get</span> <span m="84570">that</span>
  <span m="84840">picture,</span> <span m="86010">and</span> <span
  m="86430">then</span> <span m="87510">part</span> <span m="87780">seven</span>
  <span m="88170">will</span> <span m="88380">be</span> <span
  m="88680">the</span> <span m="88920">structure</span> <span
  m="89580">of</span> <span m="91140">CNNs,</span> <span
  m="92010">Convolution</span> <span m="92700">Neural</span> <span
  m="93120">Nets,</span> <span m="93660">and</span> <span m="95400">all</span>
  <span m="95550">kinds</span> <span m="95880">of</span> <span
  m="96000">applications.</span></p><p><span m="97560">And</span> <span
  m="98310">so</span> <span m="98670">can</span> <span m="98880">we</span> <span
  m="99000">start</span> <span m="99270">with</span> <span
  m="99420">optimization?</span> <span m="101430">So</span> <span
  m="101700">first,</span> <span m="102030">can</span> <span m="102240">I</span>
  <span m="102520">like</span> <span m="102810">get</span> <span
  m="103020">the</span> <span m="103140">basic</span> <span
  m="103740">facts</span> <span m="104370">about</span> <span
  m="106890">three</span> <span m="107160">terms</span> <span
  m="107880">of</span> <span m="108060">a</span> <span m="108120">Taylor</span>
  <span m="108510">series?</span> <span m="109840">So</span> <span
  m="110040">that's</span> <span m="110460">the</span> <span
  m="110730">typical.</span> <span m="111030">It's</span> <span
  m="111550">seldom</span> <span m="111930">that</span> <span
  m="112110">we</span> <span m="112290">would</span> <span m="112470">go</span>
  <span m="112740">up</span> <span m="112950">to</span> <span
  m="113640">third</span> <span m="113970">derivatives</span> <span
  m="115590">in</span> <span m="116070">optimization.</span></p><p><span
  m="116970">So</span> <span m="117150">that's</span> <span
  m="117480">the</span> <span m="117570">most</span> <span
  m="117960">useful</span> <span m="119070">approximation</span> <span
  m="120120">to</span> <span m="120300">a</span> <span
  m="120360">function.</span> <span m="121920">Everybody</span> <span
  m="122430">recognizes</span> <span m="123140">it.</span> <span
  m="123720">Here,</span> <span m="123990">I'm</span> <span
  m="124200">thinking</span> <span m="124590">of</span> <span
  m="124770">F</span> <span m="126180">as</span> <span m="126630">just</span>
  <span m="127020">one</span> <span m="127350">function,</span> <span
  m="128729">and</span> <span m="129990">x</span> <span m="130440">as</span>
  <span m="130650">just</span> <span m="130919">one</span> <span
  m="131250">variable,</span> <span m="131970">but</span> <span
  m="132660">now</span> <span m="132990">I</span> <span m="133140">really</span>
  <span m="133500">want</span> <span m="133770">to</span> <span
  m="133830">go</span> <span m="134160">to</span> <span m="136590">more</span>
  <span m="136950">variables.</span> <span m="138180">So</span> <span
  m="138390">what</span> <span m="138590">do</span> <span m="138720">I</span>
  <span m="138840">have</span> <span m="139050">to</span> <span
  m="139200">change</span> <span m="140220">if</span> <span m="140760">F</span>
  <span m="141150">is</span> <span m="141360">a</span> <span
  m="142350">function</span> <span m="142950">of</span> <span
  m="144600">more</span> <span m="144930">variables?</span> <span
  m="146790">So</span> <span m="147060">now,</span> <span m="148440">I'm</span>
  <span m="148650">thinking</span> <span m="149010">of</span> <span
  m="149160">x</span> <span m="149670">as--</span> <span m="151050">well,</span>
  <span m="151825">now</span> <span m="152240">let</span> <span
  m="152340">me</span> <span m="152460">see.</span></p><p><span
  m="157670">Yeah,</span> <span m="158090">I</span> <span m="158450">want</span>
  <span m="158810">n</span> <span m="159110">variables</span> <span
  m="159830">here.</span> <span m="162470">x</span> <span m="162800">is</span>
  <span m="163160">x1</span> <span m="163910">up</span> <span
  m="164090">to</span> <span m="164900">xn.</span> <span m="168830">So</span>
  <span m="170680">just</span> <span m="170920">to</span> <span
  m="171040">get</span> <span m="171250">the</span> <span
  m="171370">words</span> <span m="171720">straight</span> <span
  m="172840">so</span> <span m="173080">we</span> <span m="173230">can</span>
  <span m="173410">begin</span> <span m="173950">on</span> <span
  m="174970">optimization,</span> <span m="176450">so</span> <span
  m="176560">what</span> <span m="176800">will</span> <span m="176950">be</span>
  <span m="177130">the</span> <span m="177910">similar</span> <span
  m="178720">step</span> <span m="179350">so</span> <span m="179650">the</span>
  <span m="179800">function</span> <span m="180340">F</span> <span
  m="180760">at</span> <span m="180910">x--</span> <span
  m="182740">remember,</span> <span m="183310">x</span> <span
  m="183650">is</span> <span m="184690">n</span> <span
  m="184900">variables.</span> <span m="186590">OK?</span></p><p><span
  m="187330">Now,</span> <span m="187570">what</span> <span m="187800">do</span>
  <span m="187930">I</span> <span m="188050">have?</span> <span
  m="188350">Delta</span> <span m="188770">x,</span> <span m="189250">so</span>
  <span m="189940">what's</span> <span m="190300">the</span> <span
  m="190420">point</span> <span m="190750">about</span> <span
  m="191020">delta</span> <span m="191410">x</span> <span m="191770">now?</span>
  <span m="193170">It's</span> <span m="193360">a</span> <span
  m="193420">vector,</span> <span m="194650">delta</span> <span
  m="195040">x1</span> <span m="195700">to</span> <span m="195880">delta</span>
  <span m="196270">xn,</span> <span m="197500">and</span> <span
  m="197650">what</span> <span m="197890">about</span> <span
  m="198250">the</span> <span m="198400">derivative</span> <span
  m="199000">of</span> <span m="199150">F?</span> <span m="200190">It's</span>
  <span m="200440">a</span> <span m="200500">vector</span> <span
  m="200980">too,</span> <span m="202090">the</span> <span
  m="202210">derivative</span> <span m="202810">of</span> <span
  m="203110">F</span> <span m="203440">with</span> <span
  m="203650">respect</span> <span m="204080">to</span> <span
  m="204180">x1,</span> <span m="205270">the</span> <span
  m="205390">derivative</span> <span m="205870">of</span> <span m="205990">F
  with</span> <span m="206360">respect to</span> <span m="206670">x2,</span>
  <span m="207280">and</span> <span m="207400">so</span> <span
  m="207670">on.</span></p><p><span m="209660">What</span> <span
  m="210010">do</span> <span m="210130">I</span> <span m="210190">have</span>
  <span m="210340">to</span> <span m="210460">change</span> <span
  m="210910">about</span> <span m="211210">that?</span> <span
  m="212420">I</span> <span m="212890">know</span> <span m="213220">those</span>
  <span m="213520">guys</span> <span m="213790">are</span> <span
  m="213910">vectors,</span> <span m="214420">so</span> <span
  m="214630">it's</span> <span m="214810">their</span> <span
  m="215530">dot</span> <span m="215770">product.</span> <span
  m="216310">So</span> <span m="216520">it's</span> <span
  m="216700">delta</span> <span m="217120">x</span> <span
  m="217450">transpose</span> <span m="219811">at</span> <span
  m="220260">vector</span> <span m="221310">times</span> <span
  m="221920">this</span> <span m="224260">dF/dx.</span> <span
  m="228340">So</span> <span m="228910">now</span> <span m="229240">I'm</span>
  <span m="229420">replacing</span> <span m="230140">this</span> <span
  m="230410">by</span> <span m="230770">all</span> <span m="231160">the</span>
  <span m="231370">derivatives,</span> <span m="232620">and</span> <span
  m="236050">it's</span> <span m="236290">the</span> <span
  m="236380">gradient.</span> <span m="238040">So</span> <span
  m="238120">the</span> <span m="238240">gradient</span> <span
  m="238780">of</span> <span m="238900">F</span> <span m="239700">at</span>
  <span m="239950">x</span> <span m="242380">is</span> <span
  m="242740">the</span> <span m="242920">derivatives--</span> <span
  m="247257">let's</span> <span m="247750">see.</span></p><p><span
  m="249920">It's</span> <span m="251140">essential</span> <span
  m="251830">to</span> <span m="252050">get</span> <span m="252280">the</span>
  <span m="252430">notation</span> <span m="253390">straight</span> <span
  m="253750">here.</span> <span m="254320">Yeah,</span> <span
  m="255100">so</span> <span m="255400">it'll</span> <span m="255550">be</span>
  <span m="255730">the</span> <span m="255880">partial</span> <span
  m="256329">derivatives</span> <span m="257140">of</span> <span
  m="257980">the</span> <span m="258100">function</span> <span
  m="258610">F.</span> <span m="259510">So</span> <span m="260290">grad</span>
  <span m="260709">F</span> <span m="262660">is</span> <span
  m="263050">the</span> <span m="263830">partial</span> <span
  m="264310">derivatives</span> <span m="265150">of</span> <span
  m="266020">F</span> <span m="266290">with</span> <span
  m="266470">respect</span> <span m="266830">to</span> <span
  m="266920">x1</span> <span m="268420">down</span> <span m="268810">to</span>
  <span m="269680">partial</span> <span m="270100">derivative</span> <span
  m="270580">with respect to</span> <span m="270980">xn.</span> <span
  m="272650">OK,</span> <span m="273070">good.</span></p><p><span
  m="274180">That's</span> <span m="274450">the</span> <span
  m="274540">linear</span> <span m="274960">term,</span> <span
  m="275350">and</span> <span m="275440">now</span> <span
  m="275620">what's</span> <span m="275930">the</span> <span
  m="276040">quadratic</span> <span m="276670">term?</span> <span
  m="277490">1/2,</span> <span m="279250">now</span> <span
  m="279520">delta</span> <span m="279970">x</span> <span
  m="280480">isn't</span> <span m="280870">a</span> <span
  m="281000">scalar</span> <span m="281500">anymore.</span> <span
  m="282010">It's</span> <span m="282160">a</span> <span
  m="282220">vector.</span> <span m="283160">So</span> <span
  m="283270">I'm</span> <span m="283450">going</span> <span m="283600">to</span>
  <span m="283690">have</span> <span m="284050">delta</span> <span
  m="284530">x</span> <span m="284800">transpose</span> <span m="287500">and
  a</span> <span m="287830">delta</span> <span m="288220">x,</span> <span
  m="290320">and</span> <span m="290620">what</span> <span
  m="290920">goes</span> <span m="291280">in</span> <span
  m="291370">between</span> <span m="291970">is</span> <span
  m="292150">the</span> <span m="292270">second</span> <span
  m="292660">derivatives,</span> <span m="294550">but</span> <span
  m="295030">I've</span> <span m="295240">got</span> <span m="295480">a</span>
  <span m="295540">function</span> <span m="296080">of</span> <span
  m="296200">n</span> <span m="296500">variables.</span></p><p><span
  m="300190">So</span> <span m="300550">now,</span> <span m="300790">I</span>
  <span m="300910">have</span> <span m="301180">a</span> <span
  m="301270">matrix</span> <span m="302050">of</span> <span
  m="302170">second</span> <span m="302590">derivatives,</span> <span
  m="304240">and</span> <span m="304390">I'll</span> <span
  m="304540">call</span> <span m="304870">it</span> <span m="305020">H.</span>
  <span m="306480">This</span> <span m="306730">is</span> <span
  m="306880">the</span> <span m="307150">matrix</span> <span
  m="307780">of</span> <span m="307900">second</span> <span
  m="308290">derivatives,</span> <span m="310510">Hjk</span> <span
  m="313300">is</span> <span m="313610">the</span> <span
  m="313750">second</span> <span m="314200">derivative</span> <span
  m="314800">of</span> <span m="314980">F</span> <span m="315820">with</span>
  <span m="315970">respect</span> <span m="316330">to</span> <span
  m="316450">xj</span> <span m="317890">and</span> <span m="318280">xk,</span>
  <span m="319840">and</span> <span m="320440">what's</span> <span
  m="320780">the</span> <span m="320860">name</span> <span m="321160">for</span>
  <span m="321340">this</span> <span m="321580">guy?</span> <span
  m="323360">The</span> <span m="323500">Hessian,</span> <span
  m="325570">Hessian</span> <span m="326110">matrix.</span></p><p><span
  m="330350">How</span> <span m="330430">the</span> <span
  m="330520">Hessians</span> <span m="331000">got</span> <span
  m="331270">into</span> <span m="331780">this</span> <span
  m="332050">picture</span> <span m="332420">I</span> <span
  m="332500">don't</span> <span m="332650">know.</span> <span
  m="333260">The</span> <span m="333370">only</span> <span
  m="333640">Hessians</span> <span m="334150">I</span> <span
  m="334300">know</span> <span m="334490">are</span> <span m="334570">the</span>
  <span m="334690">ones</span> <span m="334960">who</span> <span
  m="335530">fought</span> <span m="335980">in</span> <span
  m="336130">the</span> <span m="336880">Revolutionary</span> <span
  m="337930">War</span> <span m="338680">for</span> <span
  m="339040">somebody.</span> <span m="339760">Who?</span> <span
  m="340030">Which</span> <span m="340270">side</span> <span
  m="340570">were</span> <span m="340720">they</span> <span
  m="340960">on?</span> <span m="342220">I</span> <span m="342280">think</span>
  <span m="342520">maybe</span> <span m="342820">the</span> <span
  m="342940">wrong</span> <span m="343330">side.</span> <span
  m="343750">The</span> <span m="343870">French</span> <span
  m="344320">were</span> <span m="344860">on</span> <span m="345070">our</span>
  <span m="345310">side</span> <span m="346540">and--</span></p><p><span
  m="347470">Anyway,</span> <span m="348040">Hessian</span> <span
  m="348550">matrix,</span> <span m="349540">and</span> <span
  m="349690">what</span> <span m="350350">are</span> <span m="350530">the</span>
  <span m="350650">facts</span> <span m="351070">about</span> <span
  m="351400">that</span> <span m="351640">matrix?</span> <span
  m="352430">Well,</span> <span m="352540">the</span> <span
  m="352630">first</span> <span m="352960">fact</span> <span
  m="353320">is</span> <span m="353530">that</span> <span m="353710">it's</span>
  <span m="353920">[INAUDIBLE]</span> <span m="354220">and</span> <span
  m="354370">the</span> <span m="354760">key</span> <span m="355030">fact</span>
  <span m="355450">is</span> <span m="355660">it's</span> <span
  m="355840">symmetric.</span> <span m="360200">Yeah.</span> <span
  m="362140">OK,</span> <span m="363220">and</span> <span
  m="363370">again,</span> <span m="363720">it's</span> <span
  m="364000">an</span> <span m="364120">approximation.</span> <span
  m="367420">And</span> <span m="368170">everybody</span> <span
  m="369520">recognizes</span> <span m="370390">that</span> <span
  m="371320">if</span> <span m="371560">n</span> <span m="371860">is</span>
  <span m="372070">very</span> <span m="372370">large,</span> <span
  m="372880">and</span> <span m="372970">we</span> <span m="373120">have</span>
  <span m="373240">a</span> <span m="373300">function</span> <span
  m="373690">of</span> <span m="373750">many</span> <span
  m="374140">variables.</span> <span m="376360">Then,</span> <span
  m="376570">we</span> <span m="376720">had</span> <span m="376930">n</span>
  <span m="377260">derivatives</span> <span m="377950">to</span> <span
  m="378070">compute</span> <span m="378580">here,</span> <span
  m="379540">and</span> <span m="379660">about</span> <span
  m="379990">1/2</span> <span m="380380">n</span> <span
  m="380590">squared</span> <span m="381160">derivatives.</span></p><p><span
  m="382650">The</span> <span m="382810">1/2</span> <span
  m="383140">comes</span> <span m="383470">from</span> <span
  m="383650">the</span> <span m="383770">symmetry,</span> <span
  m="384370">but</span> <span m="385300">the</span> <span m="385420">key</span>
  <span m="385660">point</span> <span m="385960">is</span> <span
  m="386110">the</span> <span m="386260">n</span> <span
  m="386470">squared</span> <span m="388420">derivatives</span> <span
  m="389050">to</span> <span m="389170">compute</span> <span
  m="389620">there.</span> <span m="390670">So</span> <span
  m="390940">computing</span> <span m="391540">the</span> <span
  m="391630">gradient</span> <span m="392650">is</span> <span
  m="394920">feasible</span> <span m="396240">if</span> <span
  m="396450">n</span> <span m="396660">is</span> <span m="397860">small</span>
  <span m="398390">or</span> <span m="398520">moderately</span> <span
  m="399120">large.</span> <span m="400050">Actually,</span> <span
  m="401070">by</span> <span m="401370">using</span> <span
  m="401790">automatic</span> <span m="402360">differentiation,</span> <span
  m="403900">the</span> <span m="404070">key</span> <span m="404340">idea</span>
  <span m="404730">of</span> <span m="404850">back</span> <span
  m="405150">propagation,</span> <span m="406050">back</span> <span
  m="406440">prop,</span> <span m="412410">you</span> <span
  m="412740">can</span> <span m="412920">speed</span> <span m="413280">up</span>
  <span m="413520">the</span> <span m="413910">computation</span> <span
  m="414750">of</span> <span m="414870">derivatives</span> <span
  m="415740">quite</span> <span m="416100">amazingly.</span> <span
  m="416820">But</span> <span m="417630">still</span> <span
  m="418080">for</span> <span m="418260">the</span> <span m="418410">size</span>
  <span m="419010">of</span> <span m="420210">deep</span> <span
  m="420480">learning</span> <span m="420870">problems</span> <span
  m="422400">that's</span> <span m="423150">out</span> <span
  m="423300">of</span> <span m="423360">reach.</span> <span
  m="424300">OK.</span></p><p><span m="425340">So</span> <span
  m="425550">that's</span> <span m="425940">the</span> <span
  m="427170">picture,</span> <span m="428880">and</span> <span
  m="429360">then</span> <span m="429840">I</span> <span m="430140">will</span>
  <span m="430410">want</span> <span m="430740">to</span> <span
  m="432630">use</span> <span m="433080">this</span> <span m="433830">to</span>
  <span m="434040">solve</span> <span m="434430">equations.</span> <span
  m="436170">There</span> <span m="436410">is</span> <span m="436560">a</span>
  <span m="436680">parallel</span> <span m="437460">picture</span> <span
  m="441540">for</span> <span m="442480">a</span> <span m="442890">vector</span>
  <span m="444140">f.</span> <span m="445140">So</span> <span
  m="445350">now,</span> <span m="445560">this</span> <span m="445770">is</span>
  <span m="445890">a</span> <span m="445980">vector</span> <span
  m="446430">function.</span> <span m="446940">This</span> <span
  m="447150">is</span> <span m="449100">f1</span> <span m="450870">of</span>
  <span m="451080">x</span> <span m="452040">up</span> <span
  m="452250">to</span> <span m="453270">fn</span> <span m="454190">of</span>
  <span m="454500">x,</span> <span m="455890">an</span> <span
  m="456210">x</span> <span m="456690">is</span> <span m="457900">x1</span>
  <span m="458550">to</span> <span m="458730">xn.</span> <span
  m="462030">So</span> <span m="462080">I</span> <span m="462170">have</span>
  <span m="462350">n</span> <span m="462620">functions</span> <span
  m="464030">of</span> <span m="464210">n</span> <span
  m="464420">variables,</span> <span m="465950">n</span> <span
  m="466190">functions</span> <span m="466730">of</span> <span
  m="466880">n</span> <span m="467060">variables.</span></p><p><span
  m="467700">Well,</span> <span m="467810">that's</span> <span
  m="468080">exactly</span> <span m="468710">what</span> <span
  m="468920">I</span> <span m="469070">have</span> <span m="469910">in</span>
  <span m="470180">the</span> <span m="471110">gradient.</span> <span
  m="474200">Think</span> <span m="474560">of</span> <span
  m="475040">these</span> <span m="475580">two</span> <span m="475790">as</span>
  <span m="475940">parallel,</span> <span m="476580">the</span> <span
  m="476660">parallel</span> <span m="477230">being</span> <span
  m="477950">f</span> <span m="479480">corresponds</span> <span
  m="480410">to</span> <span m="480740">the</span> <span
  m="480860">gradient</span> <span m="481850">of</span> <span
  m="482030">F,</span> <span m="482230">n</span> <span
  m="483320">functions</span> <span m="485870">of</span> <span
  m="486080">n</span> <span m="486320">variables.</span> <span
  m="490930">OK.</span> <span m="495010">Now</span> <span
  m="495250">maybe,</span> <span m="495610">what</span> <span
  m="495790">I'm</span> <span m="495970">after</span> <span
  m="496360">here</span> <span m="496660">is</span> <span m="496840">to</span>
  <span m="496960">solve</span> <span m="497470">f</span> <span
  m="497680">equals</span> <span m="498040">0.</span> <span m="498730">So</span>
  <span m="498970">I'm</span> <span m="499090">going</span> <span
  m="499180">to</span> <span m="499600">think</span> <span
  m="499900">about</span> <span m="501100">the</span> <span m="501520">f</span>
  <span m="502170">at</span> <span m="502450">x</span> <span
  m="502720">plus</span> <span m="502960">delta</span> <span
  m="503320">x,</span> <span m="505570">so</span> <span m="505900">it</span>
  <span m="506020">starts</span> <span m="506560">with</span> <span
  m="506770">f</span> <span m="506980">of</span> <span
  m="507160">x.</span></p><p><span m="508890">And</span> <span
  m="509080">then</span> <span m="509350">we</span> <span m="509620">have</span>
  <span m="511600">the</span> <span m="511750">correction</span> <span
  m="512950">times</span> <span m="513429">the</span> <span
  m="513940">matrix</span> <span m="514539">of</span> <span
  m="514659">first</span> <span m="514990">derivatives,</span> <span
  m="516340">and</span> <span m="516580">what's</span> <span
  m="517030">the</span> <span m="517179">name</span> <span m="517630">for</span>
  <span m="517870">that</span> <span m="521440">matrix</span> <span
  m="522309">of</span> <span m="522559">first</span> <span
  m="523000">derivatives?</span> <span m="525850">Well,</span> <span
  m="528760">if</span> <span m="528940">I'm</span> <span m="529090">just</span>
  <span m="529360">given</span> <span m="530740">n</span> <span
  m="530980">functions--</span> <span m="534280">yeah,</span> <span
  m="534610">what</span> <span m="534790">am</span> <span m="534910">I</span>
  <span m="535600">after</span> <span m="535960">here?</span> <span
  m="536830">I'm</span> <span m="537010">looking</span> <span
  m="537520">for</span> <span m="542990">the</span> <span
  m="543170">Jacobian.</span> <span m="545120">So</span> <span
  m="545410">here</span> <span m="545770">we'll</span> <span
  m="546020">go</span> <span m="546470">the</span> <span
  m="546650">Jacobian,</span> <span m="547430">J.</span> <span
  m="548360">This</span> <span m="548570">is</span> <span m="548720">the</span>
  <span m="549460">Jacobian</span> <span m="550160">named</span> <span
  m="550580">after</span> <span m="551110">Jacoby,</span> <span
  m="553010">Jacobian</span> <span m="553670">matrix.</span></p><p><span
  m="556320">And</span> <span m="557020">what</span> <span m="557240">are</span>
  <span m="557390">its</span> <span m="557640">entries?</span> <span
  m="558920">J,</span> <span m="560090">the</span> <span m="560210">jk</span>
  <span m="560930">entry</span> <span m="561860">is</span> <span
  m="562160">the</span> <span m="562340">derivative</span> <span
  m="563060">of</span> <span m="563270">the</span> <span m="564170">J</span>
  <span m="564540">function</span> <span m="565370">with</span> <span
  m="565610">respect</span> <span m="566030">to</span> <span
  m="566150">the</span> <span m="566270">kth</span> <span
  m="566770">variable,</span> <span m="570780">and</span> <span
  m="571370">I'm</span> <span m="571490">stopping</span> <span
  m="572360">at</span> <span m="572630">first</span> <span
  m="573010">order</span> <span m="573320">there.</span> <span
  m="574520">OK,</span> <span m="574880">so</span> <span m="575300">these</span>
  <span m="575630">are sort</span> <span m="575720">of like</span> <span
  m="575970">facts</span> <span m="576890">of</span> <span
  m="577010">calculus,</span> <span m="578360">facts</span> <span
  m="578750">of</span> <span m="578900">18.02</span> <span m="579800">you</span>
  <span m="579950">could</span> <span m="580160">say.</span> <span
  m="581000">Multivariable</span> <span m="581990">calculus,</span> <span
  m="582790">that's</span> <span m="582950">the</span> <span
  m="583040">point.</span></p><p><span m="584550">Notice</span> <span
  m="584800">that</span> <span m="585000">we're</span> <span
  m="585350">doing</span> <span m="585620">just</span> <span
  m="585920">like</span> <span m="586160">the</span> <span
  m="586280">first</span> <span m="586670">half</span> <span
  m="586940">of</span> <span m="587090">18.02,</span> <span
  m="587870">just</span> <span m="588850">do</span> <span
  m="589250">differential</span> <span m="590000">calculus,</span> <span
  m="590690">derivatives,</span> <span m="591910">Taylor</span> <span
  m="592340">series.</span> <span m="592880">We're</span> <span
  m="593030">not</span> <span m="593300">doing</span> <span
  m="593660">multiple</span> <span m="594200">integrals.</span> <span
  m="594750">That's</span> <span m="595010">not</span> <span
  m="595640">part</span> <span m="595880">of</span> <span m="596030">our</span>
  <span m="596180">world</span> <span m="596570">here.</span> <span
  m="597050">OK,</span> <span m="597890">so</span> <span
  m="598070">that's</span> <span m="598340">the</span> <span
  m="598430">background.</span></p><p><span m="600330">Now,</span> <span
  m="600530">I</span> <span m="600620">want</span> <span m="600860">to</span>
  <span m="602420">look</span> <span m="602600">at</span> <span
  m="602690">optimization.</span> <span m="605840">So</span> <span
  m="606050">over</span> <span m="606320">here,</span> <span m="610060">I</span>
  <span m="610180">want</span> <span m="610420">to</span> <span
  m="610480">optimize--</span> <span m="612610">well,</span> <span
  m="612940">over</span> <span m="613210">here,</span> <span
  m="613570">let</span> <span m="613750">me</span> <span m="614920">try</span>
  <span m="615160">to</span> <span m="615430">minimize</span> <span
  m="621710">F</span> <span m="621930">of</span> <span m="622100">x,</span>
  <span m="624290">and</span> <span m="624440">I'll</span> <span
  m="624890">be</span> <span m="625130">in</span> <span m="625250">the</span>
  <span m="625400">vector</span> <span m="625880">case</span> <span
  m="626300">here.</span> <span m="627340">And</span> <span
  m="627470">over</span> <span m="627740">here,</span> <span m="632340">I</span>
  <span m="632430">want</span> <span m="632580">to</span> <span
  m="632670">solve</span> <span m="635490">f</span> <span
  m="637320">equals</span> <span m="637770">0,</span> <span
  m="638610">and</span> <span m="638730">of</span> <span
  m="638820">course,</span> <span m="639120">that</span> <span
  m="639300">means</span> <span m="643014">f</span> <span m="643470">of</span>
  <span m="643770">1</span> <span m="644640">equals</span> <span
  m="645030">0</span> <span m="645330">all</span> <span m="645900">the</span>
  <span m="645990">way</span> <span m="646140">along</span> <span
  m="646470">to</span> <span m="646590">fn</span> <span m="646920">equals</span>
  <span m="647490">0.</span> <span m="648720">Here,</span> <span
  m="648900">I</span> <span m="649020">have</span> <span m="649350">n</span>
  <span m="649590">equations,</span> <span m="652780">and</span> <span
  m="653170">n</span> <span m="653800">unknowns.</span></p><p><span
  m="659720">Let</span> <span m="659810">me</span> <span m="659960">start</span>
  <span m="660260">with</span> <span m="660410">that</span> <span
  m="660590">one,</span> <span m="662390">and</span> <span
  m="662570">I'll</span> <span m="662660">start</span> <span
  m="662930">with</span> <span m="663110">Newton's</span> <span
  m="663530">method,</span> <span m="664670">Newton's</span> <span
  m="665160">method</span> <span m="665450">to</span> <span
  m="665630">solve</span> <span m="666710">these</span> <span
  m="667070">n</span> <span m="667280">equations</span> <span
  m="667990">and</span> <span m="668150">n</span> <span
  m="668330">unknowns.</span> <span m="669890">OK,</span> <span
  m="670310">so</span> <span m="670580">Newton,</span> <span
  m="676280">Newton's</span> <span m="676700">method</span> <span
  m="681840">which</span> <span m="682050">is</span> <span
  m="682200">often</span> <span m="682440">not</span> <span
  m="682710">presented</span> <span m="683280">in</span> <span
  m="683430">18.02.</span> <span m="684210">That's</span> <span
  m="684480">a</span> <span m="684540">crime,</span> <span
  m="685140">because</span> <span m="685680">that's</span> <span
  m="686740">the</span> <span m="687390">big</span> <span
  m="687660">application</span> <span m="689130">of</span> <span
  m="691200">gradients</span> <span m="691890">in</span> <span
  m="692010">Jacobians.</span></p><p><span m="693180">OK,</span> <span
  m="693900">so</span> <span m="694020">I'm</span> <span
  m="694110">trying</span> <span m="694350">to</span> <span
  m="694410">solve</span> <span m="694770">n</span> <span
  m="694920">equations</span> <span m="695260">and</span> <span
  m="695600">n</span> <span m="695940">unknowns,</span> <span
  m="697150">and</span> <span m="697530">so</span> <span m="697740">I</span>
  <span m="697890">want</span> <span m="698310">f</span> <span
  m="698790">at</span> <span m="699120">x</span> <span m="699420">plus</span>
  <span m="699750">delta</span> <span m="700110">x</span> <span
  m="700440">to</span> <span m="700530">be</span> <span m="700710">0.</span>
  <span m="702930">Right?</span> <span m="703500">So</span> <span
  m="703650">I</span> <span m="703710">want</span> <span m="703920">f</span>
  <span m="704130">of</span> <span m="704250">x</span> <span
  m="704640">plus</span> <span m="704940">delta</span> <span m="705270">x</span>
  <span m="705450">to</span> <span m="705570">be</span> <span
  m="705720">0.</span> <span m="706740">So</span> <span m="707820">f</span>
  <span m="708090">at x</span> <span m="708360">plus</span> <span
  m="708630">delta</span> <span m="709020">x</span> <span m="709270">is--</span>
  <span m="709890">I'm</span> <span m="710010">putting</span> <span
  m="710340">in</span> <span m="710520">a</span> <span m="710610">0.</span>
  <span m="711150">I'm</span> <span m="711300">just</span> <span
  m="711720">copying</span> <span m="712170">that</span> <span
  m="712350">equation--</span> <span m="713340">is</span> <span
  m="713550">f</span> <span m="714070">at</span> <span m="715920">where</span>
  <span m="716370">I</span> <span m="716820">am.</span> <span
  m="718440">Let</span> <span m="718620">me</span> <span m="718710">use</span>
  <span m="718980">K</span> <span m="719400">for</span> <span
  m="719670">the</span> <span m="720390">case</span> <span
  m="720870">iteration.</span></p><p><span m="722370">So</span> <span
  m="722490">I'm</span> <span m="722640">at</span> <span m="722820">a</span>
  <span m="722880">point</span> <span m="723240">xK.</span> <span
  m="724490">I</span> <span m="724560">want</span> <span m="724730">to</span>
  <span m="724800">get</span> <span m="725010">to</span> <span
  m="725160">a</span> <span m="725220">point</span> <span m="725550">xK</span>
  <span m="726030">plus</span> <span m="726360">1.</span> <span
  m="727230">And</span> <span m="728900">so</span> <span m="729130">I</span>
  <span m="729170">have</span> <span m="729290">0</span> <span
  m="729940">is</span> <span m="730080">f</span> <span m="730230">of</span>
  <span m="730380">x</span> <span m="730740">plus</span> <span
  m="731730">J,</span> <span m="732540">at</span> <span m="732740">that</span>
  <span m="733050">point,</span> <span m="734890">times</span> <span
  m="736320">delta</span> <span m="736710">x</span> <span
  m="737140">which</span> <span m="737280">is</span> <span m="737460">xK</span>
  <span m="738060">plus</span> <span m="738390">1</span> <span
  m="738690">minus</span> <span m="739080">xK.</span> <span
  m="741700">Good.</span> <span m="744030">That's</span> <span
  m="744270">Newton's</span> <span m="744670">method.</span></p><p><span
  m="745020">Of</span> <span m="745110">course,</span> <span m="747020">0</span>
  <span m="747420">isn't</span> <span m="747660">quite</span> <span
  m="747960">true.</span> <span m="749010">Well,</span> <span
  m="749310">0</span> <span m="749670">will</span> <span m="749880">be</span>
  <span m="750060">true</span> <span m="752070">if</span> <span
  m="752340">I'm</span> <span m="752550">constructing</span> <span
  m="753250">xK</span> <span m="753750">plus</span> <span m="754050">1</span>
  <span m="754350">here.</span> <span m="755250">I'm</span> <span
  m="755370">constructing</span> <span m="756060">xK</span> <span
  m="756600">plus</span> <span m="756930">1.</span> <span m="757950">OK.</span>
  <span m="759030">So</span> <span m="759210">let</span> <span
  m="759390">me</span> <span m="759540">just</span> <span
  m="759840">rewrite</span> <span m="760380">that,</span> <span
  m="760620">and</span> <span m="761160">we've</span> <span
  m="761340">got</span> <span m="761590">Newton's</span> <span
  m="762030">method.</span> <span m="763410">So</span> <span
  m="763620">we're</span> <span m="763800">looking</span> <span
  m="764250">for</span> <span m="764460">this</span> <span
  m="765540">change,</span> <span m="766830">xK</span> <span
  m="767310">plus</span> <span m="767660">1</span> <span m="771610">minus</span>
  <span m="772090">xK.</span> <span m="772750">I'll</span> <span
  m="772930">put</span> <span m="773230">it</span> <span m="773380">on</span>
  <span m="774070">this</span> <span m="774280">side</span> <span
  m="774640">as</span> <span m="774850">plus</span> <span m="775240">xK,</span>
  <span m="778300">so</span> <span m="778750">that's</span> <span
  m="779080">this.</span></p><p><span m="780010">Now,</span> <span
  m="780220">I</span> <span m="780310">have</span> <span m="780490">to</span>
  <span m="780610">invert</span> <span m="781150">that</span> <span
  m="781510">and</span> <span m="781600">put</span> <span m="781840">it</span>
  <span m="781960">on</span> <span m="782110">the</span> <span
  m="782230">other</span> <span m="782500">side</span> <span
  m="782770">of</span> <span m="782830">the</span> <span
  m="783010">equation.</span> <span m="784010">So</span> <span
  m="784270">that</span> <span m="784400">will</span> <span m="784570">go</span>
  <span m="784780">with</span> <span m="784990">a</span> <span
  m="785050">minus.</span> <span m="786280">This</span> <span
  m="786460">guy</span> <span m="786770">will</span> <span m="786850">be</span>
  <span m="787060">inverted</span> <span m="790570">and</span> <span
  m="791620">f</span> <span m="792130">at</span> <span m="792550">xK.</span>
  <span m="795472">So</span> <span m="795910">that's</span> <span
  m="796240">Newton's</span> <span m="796630">methods.</span> <span
  m="797170">It's</span> <span m="797470">natural.</span></p><p><span
  m="799980">So</span> <span m="800170">let</span> <span m="800290">me</span>
  <span m="800410">just</span> <span m="800650">repeat</span> <span
  m="801010">that.</span> <span m="801310">You</span> <span
  m="801460">see</span> <span m="801730">where</span> <span
  m="801940">the</span> <span m="802120">xK</span> <span m="802600">plus</span>
  <span m="802810">1</span> <span m="803020">minus</span> <span
  m="803380">xK</span> <span m="803860">is</span> <span
  m="803950">sitting?</span> <span m="806140">Right?</span> <span
  m="807670">And</span> <span m="808180">I</span> <span m="808330">moved</span>
  <span m="808780">f</span> <span m="809020">of</span> <span
  m="809370">xK</span> <span m="810070">to</span> <span m="810250">the</span>
  <span m="810580">other</span> <span m="810880">side</span> <span
  m="811240">with</span> <span m="811410">a</span> <span m="811450">minus</span>
  <span m="811840">sign,</span> <span m="812930">and</span> <span
  m="812980">then</span> <span m="813190">I</span> <span
  m="813280">multiplied</span> <span m="813850">through</span> <span
  m="814150">by</span> <span m="814420">J</span> <span
  m="814780">inverse,</span> <span m="816160">so</span> <span
  m="816340">I</span> <span m="816430">got</span> <span m="816610">that.</span>
  <span m="817150">So</span> <span m="817360">that's</span> <span
  m="817660">Newton's</span> <span m="818080">method</span> <span
  m="819100">for</span> <span m="821260">a</span> <span m="821350">system</span>
  <span m="821830">of</span> <span m="821950">equations,</span> <span
  m="825020">and</span> <span m="825160">over</span> <span
  m="825370">there,</span> <span m="825610">I'm</span> <span
  m="825820">going</span> <span m="825930">to</span> <span
  m="826030">write</span> <span m="826300">down</span> <span
  m="826570">Newton's</span> <span m="826990">method</span> <span
  m="827380">for</span> <span m="827560">minimizing</span> <span
  m="827950">a</span> <span m="828340">function.</span> <span
  m="829030">This</span> <span m="829480">is</span> <span m="830390">such</span>
  <span m="830830">basic</span> <span m="831400">stuff</span> <span
  m="831880">that</span> <span m="832030">we</span> <span m="832510">have</span>
  <span m="832720">to</span> <span m="832870">begin</span> <span
  m="833290">here.</span></p><p><span m="833890">Let</span> <span
  m="834070">me</span> <span m="834190">even</span> <span
  m="834460">begin</span> <span m="834910">with</span> <span
  m="835150">an</span> <span m="836860">extremely</span> <span
  m="837790">straightforward</span> <span m="838540">example</span> <span
  m="839200">of</span> <span m="840400">Newton's</span> <span
  m="840790">method</span> <span m="841150">here.</span> <span
  m="842440">Suppose</span> <span m="842890">my</span> <span
  m="843130">function--</span> <span m="844990">suppose</span> <span
  m="845530">I've</span> <span m="845710">only</span> <span
  m="845950">got</span> <span m="846250">one</span> <span
  m="849100">function</span> <span m="849610">actually.</span> <span
  m="850900">Suppose</span> <span m="851200">I</span> <span
  m="851350">only</span> <span m="851590">had</span> <span m="851800">one</span>
  <span m="852070">function.</span> <span m="854450">So</span> <span
  m="854830">suppose</span> <span m="855310">my</span> <span
  m="855520">function</span> <span m="856090">is</span> <span
  m="856390">x</span> <span m="856600">squared</span> <span
  m="857080">minus</span> <span m="858530">9,</span> <span m="861240">and</span>
  <span m="861460">I</span> <span m="861550">want</span> <span
  m="861730">to</span> <span m="861790">solve</span> <span m="863470">f</span>
  <span m="863680">of</span> <span m="863800">x</span> <span
  m="864040">equals</span> <span m="864370">0.</span> <span m="866020">I</span>
  <span m="866110">want</span> <span m="866260">to</span> <span
  m="866350">find</span> <span m="866660">the</span> <span
  m="866740">square</span> <span m="867100">root</span> <span
  m="867310">of</span> <span m="867400">9.</span></p><p><span
  m="868990">OK,</span> <span m="869440">so</span> <span m="869680">what</span>
  <span m="870280">is</span> <span m="870430">Newton's</span> <span
  m="870820">method</span> <span m="871210">for</span> <span
  m="871420">it?</span> <span m="873790">My</span> <span m="874030">point</span>
  <span m="874330">is</span> <span m="874510">just</span> <span
  m="874750">to</span> <span m="874900">see</span> <span m="875380">how</span>
  <span m="875620">Newton's</span> <span m="876010">method</span> <span
  m="876340">is</span> <span m="876490">written</span> <span
  m="877360">and</span> <span m="877480">then</span> <span
  m="878170">rewrite</span> <span m="878920">it</span> <span m="879070">a</span>
  <span m="879130">little</span> <span m="879430">bit</span> <span
  m="879680">so</span> <span m="879910">that</span> <span m="880060">we</span>
  <span m="880240">see</span> <span m="881350">the</span> <span
  m="881500">convergence.</span> <span m="883200">OK,</span> <span
  m="884060">so</span> <span m="884800">of</span> <span
  m="884950">course,</span> <span m="885310">the</span> <span
  m="885440">Jacobian</span> <span m="886210">is</span> <span
  m="886420">2x.</span> <span m="888100">So</span> <span
  m="888910">Newton's</span> <span m="889330">method</span> <span
  m="889690">says</span> <span m="890110">that</span> <span m="890350">xK</span>
  <span m="890890">plus</span> <span m="891220">1--</span> <span
  m="891580">I'm</span> <span m="891730">just</span> <span
  m="892030">going</span> <span m="892180">to</span> <span
  m="892270">copy</span> <span m="892690">that</span> <span
  m="894648">Newton's</span> <span m="895070">method--</span> <span
  m="896230">minus</span> <span m="897790">1</span> <span m="898030">over</span>
  <span m="898270">2xK.</span> <span m="899170">Right?</span> <span
  m="901060">That's</span> <span m="901360">the</span> <span
  m="901510">derivative</span> <span m="902920">times</span> <span
  m="903640">f</span> <span m="903910">at</span> <span m="904030">xK</span>
  <span m="905020">which</span> <span m="905320">is</span> <span
  m="906070">xK</span> <span m="907450">squared</span> <span
  m="907900">minus</span> <span m="908350">9.</span></p><p><span
  m="912190">OK.</span> <span m="913280">We</span> <span
  m="913560">followed</span> <span m="914020">the</span> <span
  m="914140">formula,</span> <span m="915490">this</span> <span
  m="915880">determines</span> <span m="916690">xK</span> <span
  m="917170">plus</span> <span m="917470">1,</span> <span m="917720">and</span>
  <span m="917940">let's</span> <span m="918640">simplify</span> <span
  m="919310">it.</span> <span m="920350">So</span> <span m="920620">here</span>
  <span m="920860">I</span> <span m="921040">have</span> <span
  m="921280">xK</span> <span m="922150">minus</span> <span
  m="923560">that</span> <span m="923770">looks</span> <span
  m="924040">like</span> <span m="924280">1/2</span> <span m="924670">of</span>
  <span m="924820">xK,</span> <span m="926500">so</span> <span
  m="926710">I</span> <span m="926830">think</span> <span m="927100">I</span>
  <span m="927220">have</span> <span m="927430">1/2xK,</span> <span
  m="930130">and</span> <span m="930280">then</span> <span
  m="930730">this</span> <span m="931550">times</span> <span
  m="931930">this</span> <span m="932860">is</span> <span m="934470">9/2</span>
  <span m="937460">of</span> <span m="939250">1</span> <span
  m="939460">over</span> <span m="939730">xK.</span> <span m="940200">Is</span>
  <span m="940390">that</span> <span m="940480">right?</span> <span
  m="943450">1/2</span> <span m="943750">of</span> <span m="943900">xk</span>
  <span m="944860">from</span> <span m="945220">this</span> <span
  m="945490">stuff</span> <span m="946540">and</span> <span
  m="947080">plus</span> <span m="948040">9/2</span> <span m="948755">of</span>
  <span m="949050">1</span> <span m="949450">over</span> <span
  m="949720">xK.</span> <span m="950110">OK.</span></p><p><span
  m="953940">Can</span> <span m="954180">I</span> <span m="954330">just</span>
  <span m="954960">like</span> <span m="955320">check</span> <span
  m="955840">that</span> <span m="956760">I</span> <span m="956910">know</span>
  <span m="957150">the</span> <span m="957360">answer</span> <span
  m="957780">is</span> <span m="957960">3?</span> <span m="959850">Can</span>
  <span m="960120">I</span> <span m="960990">be</span> <span
  m="961200">sure</span> <span m="961650">that</span> <span m="961890">I</span>
  <span m="961980">get</span> <span m="962250">the</span> <span
  m="962370">right</span> <span m="962670">answer,</span> <span
  m="963060">3?</span> <span m="964260">That</span> <span m="964500">if</span>
  <span m="965160">xK</span> <span m="965760">was</span> <span
  m="966210">exactly</span> <span m="966900">3,</span> <span
  m="967830">then</span> <span m="968010">of</span> <span
  m="968130">course,</span> <span m="968460">I</span> <span
  m="968610">expect</span> <span m="969060">xK</span> <span
  m="969600">plus</span> <span m="969900">1</span> <span m="970170">to</span>
  <span m="970290">stay</span> <span m="970680">at</span> <span
  m="970830">3.</span> <span m="971730">So</span> <span m="972240">does</span>
  <span m="972450">that</span> <span m="972630">happen?</span> <span
  m="973740">So</span> <span m="973950">1/2</span> <span m="974280">of</span>
  <span m="974430">3</span> <span m="975120">and</span> <span
  m="975300">9/2</span> <span m="976140">of</span> <span m="976700">1/3,</span>
  <span m="977880">what's</span> <span m="978150">that,</span> <span
  m="979950">1/2</span> <span m="980370">of</span> <span m="980460">3</span>
  <span m="982410">and</span> <span m="982680">9/2</span> <span
  m="984330">of</span> <span m="984510">1/3?</span></p><p><span
  m="985440">OK,</span> <span m="985870">that's</span> <span
  m="987240">3/2</span> <span m="987900">and</span> <span m="988020">3/2.</span>
  <span m="988720">That's</span> <span m="988920">6/2,</span> <span
  m="990570">and</span> <span m="990780">that's</span> <span
  m="991110">3.</span> <span m="991740">OK.</span> <span m="995690">So</span>
  <span m="995870">we've</span> <span m="996080">checked</span> <span
  m="996410">that</span> <span m="996590">the</span> <span
  m="996710">method</span> <span m="997130">is</span> <span
  m="997280">consistent</span> <span m="998040">which</span> <span
  m="998240">just</span> <span m="998570">means</span> <span
  m="998870">we</span> <span m="999770">kept</span> <span m="1000040">the</span>
  <span m="1000190">algebra</span> <span m="1000580">straight.</span> <span
  m="1001690">But</span> <span m="1003100">then</span> <span
  m="1003400">the</span> <span m="1003490">really</span> <span
  m="1003940">important</span> <span m="1004360">point</span> <span
  m="1004630">about</span> <span m="1004900">Newton's</span> <span
  m="1005410">method</span> <span m="1006430">is</span> <span
  m="1006700">to</span> <span m="1007810">discover</span> <span
  m="1008500">how</span> <span m="1008800">fast</span> <span
  m="1009280">it</span> <span m="1009400">converges.</span> <span
  m="1010700">So</span> <span m="1010840">now</span> <span
  m="1011080">let</span> <span m="1011260">me</span> <span m="1011440">do</span>
  <span m="1011710">xK</span> <span m="1012280">plus</span> <span
  m="1012610">1</span> <span m="1012940">minus</span> <span
  m="1013360">3.</span></p><p><span m="1015350">So</span> <span
  m="1015460">now,</span> <span m="1015700">I'm</span> <span
  m="1016420">looking</span> <span m="1016840">at</span> <span
  m="1017140">the</span> <span m="1018280">error</span> <span
  m="1019850">which</span> <span m="1019990">is,</span> <span
  m="1020170">I</span> <span m="1020350">hope,</span> <span
  m="1020650">approaching</span> <span m="1021220">0.</span> <span
  m="1022420">Is</span> <span m="1022660">it</span> <span
  m="1022810">approaching</span> <span m="1023380">0?</span> <span
  m="1023770">How</span> <span m="1023950">quickly</span> <span
  m="1024400">is</span> <span m="1024560">it</span> <span
  m="1024670">approaching</span> <span m="1025150">0?</span> <span
  m="1025540">These</span> <span m="1025780">are</span> <span
  m="1025839">the</span> <span m="1025990">fundamental</span> <span
  m="1027490">questions</span> <span m="1028089">of</span> <span
  m="1028210">optimization.</span></p><p><span m="1029470">So</span> <span
  m="1029619">I'm</span> <span m="1029740">going</span> <span
  m="1029920">to</span> <span m="1030010">subtract</span> <span
  m="1030550">3</span> <span m="1030910">from</span> <span
  m="1031119">both</span> <span m="1031329">sides</span> <span
  m="1033500">somehow.</span> <span m="1034940">OK,</span> <span
  m="1035359">from</span> <span m="1035599">here,</span> <span
  m="1036589">I</span> <span m="1036680">guess,</span> <span
  m="1036980">I'm</span> <span m="1037099">going</span> <span
  m="1037329">to</span> <span m="1037400">subtract</span> <span
  m="1038240">3.</span> <span m="1040970">So</span> <span m="1041180">I</span>
  <span m="1041270">was</span> <span m="1041480">just</span> <span
  m="1041690">checking</span> <span m="1042109">that</span> <span
  m="1042270">it</span> <span m="1042710">was</span> <span
  m="1042980">correct.</span> <span m="1044569">OK.</span> <span
  m="1045950">Now,</span> <span m="1046670">so</span> <span
  m="1046940">xK</span> <span m="1047690">plus</span> <span m="1047990">1</span>
  <span m="1048710">minus</span> <span m="1049160">3,</span> <span
  m="1050100">I'm</span> <span m="1050210">going</span> <span
  m="1050310">to</span> <span m="1050390">subtract</span> <span
  m="1050930">3</span> <span m="1051440">from</span> <span
  m="1051650">both</span> <span m="1051860">sides.</span> <span
  m="1052310">I'm</span> <span m="1052430">going</span> <span
  m="1052540">to</span> <span m="1052640">subtract</span> <span
  m="1053210">3</span> <span m="1053660">there,</span> <span
  m="1054560">and</span> <span m="1054680">then</span> <span
  m="1054860">I</span> <span m="1055010">hope</span> <span
  m="1055400">that--</span> <span m="1058190">that</span> <span
  m="1058400">box</span> <span m="1058790">is</span> <span
  m="1058940">what</span> <span m="1059150">goes</span> <span
  m="1059390">down</span> <span m="1059660">here.</span> <span
  m="1060110">Right?</span></p><p><span m="1061070">Subtracted</span> <span
  m="1061700">3</span> <span m="1062030">from</span> <span
  m="1062240">both</span> <span m="1062450">sides,</span> <span
  m="1062850">so</span> <span m="1062960">I'm</span> <span
  m="1065390">hoping</span> <span m="1066140">now</span> <span
  m="1066860">things</span> <span m="1067220">go</span> <span
  m="1067400">to</span> <span m="1067520">0.</span> <span m="1068960">OK,</span>
  <span m="1069380">so</span> <span m="1069890">what</span> <span
  m="1070160">do</span> <span m="1070340">I</span> <span m="1070490">have</span>
  <span m="1070790">there?</span> <span m="1072200">Let</span> <span
  m="1072380">me</span> <span m="1073340">factor</span> <span
  m="1073850">out</span> <span m="1074370">the</span> <span m="1074600">1</span>
  <span m="1074840">over</span> <span m="1075080">xK.</span> <span
  m="1078860">So</span> <span m="1079070">what</span> <span
  m="1079220">do</span> <span m="1079340">I</span> <span m="1079400">have</span>
  <span m="1079610">then</span> <span m="1079880">left?</span> <span
  m="1081850">1</span> <span m="1082040">over</span> <span
  m="1082360">xK,</span> <span m="1082720">so</span> <span
  m="1082960">there's</span> <span m="1083200">a</span> <span
  m="1083290">9/2</span> <span m="1086440">from</span> <span
  m="1086620">there,</span> <span m="1087690">1</span> <span
  m="1087930">over</span> <span m="1088020">xK.</span></p><p><span
  m="1088750">So</span> <span m="1088930">I</span> <span
  m="1089050">really</span> <span m="1089380">have</span> <span
  m="1089770">1/2</span> <span m="1090700">of</span> <span m="1090880">xK</span>
  <span m="1091510">squared,</span> <span m="1092710">because</span> <span
  m="1093040">I've</span> <span m="1093190">divided</span> <span
  m="1093670">by</span> <span m="1093880">an</span> <span m="1094000">xK.</span>
  <span m="1095080">And</span> <span m="1095230">this</span> <span
  m="1095440">minus</span> <span m="1095890">3,</span> <span
  m="1097090">I</span> <span m="1097210">better</span> <span
  m="1097450">put</span> <span m="1097630">minus</span> <span
  m="1098140">3xK,</span> <span m="1101120">because</span> <span
  m="1101490">I'm</span> <span m="1101730">dividing</span> <span
  m="1102240">by</span> <span m="1102480">xK.</span> <span m="1103230">I</span>
  <span m="1103740">claim</span> <span m="1104070">that</span> <span
  m="1104220">that's--</span> <span m="1105570">now</span> <span
  m="1105870">I've</span> <span m="1105990">got</span> <span
  m="1106230">it.</span> <span m="1110740">And</span> <span
  m="1112010">let's</span> <span m="1112240">see,</span> <span
  m="1112540">let</span> <span m="1112690">me</span> <span
  m="1112840">take</span> <span m="1113170">out</span> <span
  m="1113500">the</span> <span m="1113680">2--</span> <span
  m="1114970">2,</span> <span m="1115810">forget</span> <span
  m="1116200">these</span> <span m="1116500">2s,</span> <span
  m="1118210">and</span> <span m="1118390">make</span> <span m="1118660">that
  a</span> <span m="1119010">6.</span> <span m="1121480">So</span> <span
  m="1121690">I</span> <span m="1121750">have</span> <span m="1122020">1</span>
  <span m="1122260">over</span> <span m="1122470">2xK</span> <span
  m="1123190">times</span> <span m="1123970">9</span> <span
  m="1124660">plus</span> <span m="1124990">xK</span> <span
  m="1125500">squared</span> <span m="1125950">minus</span> <span
  m="1126370">6.</span></p><p><span m="1127210">Anything</span> <span
  m="1127630">good</span> <span m="1127810">about</span> <span
  m="1128080">that?</span> <span m="1130980">We</span> <span
  m="1131340">hope</span> <span m="1131580">so.</span> <span
  m="1136450">We</span> <span m="1137090">hope</span> <span
  m="1137750">that</span> <span m="1138050">that</span> <span
  m="1138380">is</span> <span m="1138620">something</span> <span
  m="1139790">attractive.</span> <span m="1140450">So</span> <span
  m="1140630">this</span> <span m="1140840">is,</span> <span
  m="1141120">again,</span> <span m="1141830">the</span> <span
  m="1141980">error</span> <span m="1143100">at</span> <span
  m="1143270">set</span> <span m="1143630">K</span> <span
  m="1143870">plus</span> <span m="1144260">1,</span> <span
  m="1145730">and</span> <span m="1145820">it's</span> <span
  m="1146000">1</span> <span m="1146270">over</span> <span
  m="1146510">2xK</span> <span m="1150190">times</span> <span
  m="1150650">this</span> <span m="1150890">thing</span> <span
  m="1151130">in</span> <span m="1151280">brackets--</span> <span
  m="1151940">9</span> <span m="1152480">plus</span> <span m="1152780">xK</span>
  <span m="1153200">squared</span> <span m="1153620">minus</span> <span
  m="1153950">6xK.</span> <span m="1155000">And</span> <span
  m="1155150">we</span> <span m="1155360">recognize</span> <span
  m="1156140">that</span> <span m="1156470">as</span> <span
  m="1161240">xK</span> <span m="1161930">minus</span> <span
  m="1162440">3</span> <span m="1162890">squared.</span></p><p><span
  m="1165980">xK</span> <span m="1166370">squared</span> <span
  m="1166940">minus</span> <span m="1167240">6</span> <span
  m="1167630">of</span> <span m="1168020">them</span> <span
  m="1168680">plus</span> <span m="1168980">9,</span> <span
  m="1169550">that's</span> <span m="1170300">xK</span> <span
  m="1172070">minus</span> <span m="1172580">3</span> <span
  m="1173720">squared.</span> <span m="1174710">OK,</span> <span
  m="1176540">that</span> <span m="1176750">was</span> <span
  m="1176990">the</span> <span m="1177110">goal,</span> <span
  m="1177440">of</span> <span m="1177530">course.</span> <span
  m="1180370">That's</span> <span m="1180700">the</span> <span
  m="1180820">goal</span> <span m="1181150">that</span> <span
  m="1181330">shows</span> <span m="1181750">why</span> <span
  m="1182020">Newton's</span> <span m="1182410">method</span> <span
  m="1182800">is</span> <span m="1183010">fantastic.</span> <span
  m="1184390">If</span> <span m="1184540">you</span> <span
  m="1184720">can</span> <span m="1185110">execute</span> <span
  m="1185770">it,</span> <span m="1186220">if</span> <span
  m="1186370">you</span> <span m="1186490">can</span> <span
  m="1186670">start</span> <span m="1187030">near</span> <span
  m="1187270">enough,</span> <span m="1188080">notice</span> <span
  m="1188540">that--</span> <span m="1190850">so</span> <span
  m="1191110">how</span> <span m="1191320">do</span> <span m="1191470">I</span>
  <span m="1191590">describe</span> <span m="1192100">this</span> <span
  m="1193270">great</span> <span m="1193600">equation?</span> <span
  m="1194750">It</span> <span m="1194830">says</span> <span
  m="1195220">that</span> <span m="1195430">the</span> <span
  m="1195610">error</span> <span m="1195940">is</span> <span
  m="1196120">squared</span> <span m="1196690">at</span> <span
  m="1196810">every</span> <span m="1197140">step,</span> <span
  m="1198310">squared</span> <span m="1198850">at</span> <span
  m="1199000">every</span> <span m="1199300">step.</span></p><p><span
  m="1200770">So</span> <span m="1201040">if</span> <span m="1201190">I'm</span>
  <span m="1201370">converging</span> <span m="1202120">to</span> <span
  m="1202360">a</span> <span m="1202420">limit,</span> <span
  m="1205530">it</span> <span m="1205660">will</span> <span
  m="1206350">satisfy</span> <span m="1207100">the--</span> <span
  m="1208132">it'll</span> <span m="1208490">be</span> <span
  m="1208910">3,</span> <span m="1211420">or</span> <span m="1211570">I</span>
  <span m="1211660">guess</span> <span m="1211960">minus</span> <span
  m="1212470">3,</span> <span m="1212800">is</span> <span
  m="1212920">that</span> <span m="1213100">possible?</span> <span
  m="1215050">Yeah,</span> <span m="1215590">minus</span> <span
  m="1216010">3</span> <span m="1216520">is</span> <span
  m="1216700">another</span> <span m="1217120">solution</span> <span
  m="1217720">here.</span> <span m="1217940">So</span> <span
  m="1218150">we've</span> <span m="1218830">got</span> <span
  m="1219010">two</span> <span m="1219280">solutions.</span> <span
  m="1220810">Newton's</span> <span m="1221260">method</span> <span
  m="1221650">could</span> <span m="1221890">converge</span> <span
  m="1222550">to</span> <span m="1222700">3.</span> <span m="1225585">Am</span>
  <span m="1226060">I</span> <span m="1226250">right,</span> <span
  m="1226530">it</span> <span m="1226760">could</span> <span
  m="1226970">converge</span> <span m="1227510">to</span> <span
  m="1227630">minus</span> <span m="1228050">3?</span></p><p><span
  m="1229190">So</span> <span m="1229970">I'd</span> <span
  m="1230180">have</span> <span m="1230390">a</span> <span
  m="1230450">similar</span> <span m="1230990">equation</span> <span
  m="1232010">sort</span> <span m="1232340">of</span> <span
  m="1232400">centered</span> <span m="1232910">at</span> <span
  m="1233060">minus</span> <span m="1233570">3,</span> <span
  m="1234920">or</span> <span m="1236450">does</span> <span
  m="1236720">it</span> <span m="1236840">always</span> <span
  m="1237170">do</span> <span m="1237380">one</span> <span m="1237590">of</span>
  <span m="1237650">those?</span> <span m="1240710">It</span> <span
  m="1240860">could</span> <span m="1241100">blow</span> <span
  m="1241400">up.</span> <span m="1244730">So</span> <span
  m="1245780">there</span> <span m="1246020">are</span> <span
  m="1246170">sort</span> <span m="1246410">of</span> <span
  m="1246470">regions</span> <span m="1247190">of</span> <span
  m="1247370">attraction.</span> <span m="1248430">They're</span> <span
  m="1248750">all</span> <span m="1248960">the</span> <span
  m="1249080">starting</span> <span m="1249530">points</span> <span
  m="1250160">that</span> <span m="1250280">approach</span> <span
  m="1250730">3,</span> <span m="1251690">and</span> <span
  m="1251810">the</span> <span m="1251900">whole</span> <span
  m="1252080">point</span> <span m="1252350">of</span> <span
  m="1252410">that</span> <span m="1252620">equation</span> <span
  m="1253190">is</span> <span m="1254660">with</span> <span
  m="1254990">quadratic</span> <span m="1255770">convergence</span> <span
  m="1257420">the</span> <span m="1257600">error</span> <span
  m="1257870">being</span> <span m="1258170">squared</span> <span
  m="1258830">at</span> <span m="1258950">every</span> <span
  m="1259280">step.</span> <span m="1259730">It</span> <span
  m="1259910">zooms</span> <span m="1260570">in</span> <span
  m="1260750">on</span> <span m="1260990">3.</span></p><p><span
  m="1261760">Then,</span> <span m="1262060">there</span> <span
  m="1262210">is</span> <span m="1262760">all</span> <span
  m="1263000">the</span> <span m="1263210">starting</span> <span
  m="1263720">points</span> <span m="1264060">that</span> <span
  m="1264170">would</span> <span m="1265010">go</span> <span
  m="1265310">to</span> <span m="1265460">minus</span> <span
  m="1266000">3,</span> <span m="1266990">and</span> <span
  m="1267110">then</span> <span m="1267320">there</span> <span
  m="1267420">are</span> <span m="1267470">the</span> <span
  m="1267650">starting</span> <span m="1268070">points</span> <span
  m="1268400">that</span> <span m="1268550">would</span> <span
  m="1268730">blow</span> <span m="1269030">up.</span> <span
  m="1270920">And</span> <span m="1271310">those,</span> <span
  m="1272140">maybe</span> <span m="1272810">for</span> <span
  m="1272960">this</span> <span m="1273200">very</span> <span
  m="1273470">simple</span> <span m="1273860">problem,</span> <span
  m="1275170">the</span> <span m="1275270">picture</span> <span
  m="1275750">is</span> <span m="1275870">not</span> <span
  m="1276200">too</span> <span m="1276500">difficult</span> <span
  m="1277010">to</span> <span m="1277160">sort</span> <span
  m="1277550">out</span> <span m="1277760">those</span> <span
  m="1278000">three</span> <span m="1278360">regions.</span> <span
  m="1281600">And</span> <span m="1281840">this</span> <span
  m="1282110">is</span> <span m="1282290">allowing</span> <span
  m="1282920">for</span> <span m="1284620">a</span> <span
  m="1284720">vector,</span> <span m="1287720">two</span> <span
  m="1287960">equations</span> <span m="1288650">or</span> <span
  m="1288800">n</span> <span m="1289010">equations,</span> <span
  m="1290030">then</span> <span m="1290510">we're</span> <span
  m="1290780">in</span> <span m="1290960">n</span> <span
  m="1291230">variables,</span> <span m="1291950">and</span> <span
  m="1292340">really</span> <span m="1292820">you</span> <span
  m="1293090">get</span> <span m="1293270">beautiful</span> <span
  m="1293780">pictures.</span></p><p><span m="1295310">You</span> <span
  m="1295460">get</span> <span m="1296270">some</span> <span
  m="1296930">of</span> <span m="1297020">the</span> <span
  m="1297290">type</span> <span m="1297590">of</span> <span
  m="1297680">pictures</span> <span m="1298250">that</span> <span
  m="1298760">gave</span> <span m="1299630">rise</span> <span
  m="1299900">to</span> <span m="1300020">these</span> <span
  m="1300710">books</span> <span m="1301040">on</span> <span
  m="1301190">fractals,</span> <span m="1302060">picture</span> <span
  m="1302450">books</span> <span m="1302780">on</span> <span
  m="1302930">fractals</span> <span m="1305030">for</span> <span
  m="1305240">these</span> <span m="1305540">basins</span> <span
  m="1306140">of</span> <span m="1306230">attraction.</span> <span
  m="1306920">Does</span> <span m="1307280">the</span> <span
  m="1308750">starting</span> <span m="1309260">point</span> <span
  m="1309620">lead</span> <span m="1310010">you</span> <span
  m="1310220">to</span> <span m="1310970">one</span> <span m="1311300">of</span>
  <span m="1311420">the</span> <span m="1311540">solutions,</span> <span
  m="1312410">or</span> <span m="1312560">does</span> <span
  m="1312830">it</span> <span m="1312920">lead</span> <span
  m="1313220">you</span> <span m="1313370">to</span> <span
  m="1313610">infinity?</span> <span m="1314780">Here,</span> <span
  m="1315620">that</span> <span m="1315890">would</span> <span
  m="1316010">be</span> <span m="1316160">interesting</span> <span
  m="1316670">to</span> <span m="1316790">just</span> <span
  m="1317030">draw</span> <span m="1317330">it</span> <span
  m="1317450">for</span> <span m="1317630">this,</span> <span
  m="1319790">but</span> <span m="1320630">the</span> <span
  m="1320750">essential</span> <span m="1321230">point</span> <span
  m="1321590">is</span> <span m="1322370">the</span> <span
  m="1322490">quadratic</span> <span m="1323120">convergence,</span> <span
  m="1323900">if</span> <span m="1324110">it's</span> <span
  m="1324440">close</span> <span m="1324830">enough.</span></p><p><span
  m="1325670">You</span> <span m="1326060">see</span> <span
  m="1326270">that</span> <span m="1326420">it</span> <span
  m="1326480">has</span> <span m="1326690">to</span> <span m="1326810">be</span>
  <span m="1326930">close.</span> <span m="1329210">If</span> <span
  m="1329420">x0</span> <span m="1330080">is</span> <span
  m="1330290">pretty</span> <span m="1330620">near</span> <span
  m="1330950">3,</span> <span m="1332090">then</span> <span
  m="1332300">this</span> <span m="1332510">is</span> <span
  m="1332660">about</span> <span m="1332930">1/6</span> <span
  m="1334460">of</span> <span m="1334640">that,</span> <span
  m="1335760">and</span> <span m="1337790">there</span> <span
  m="1338330">would</span> <span m="1338440">be</span> <span
  m="1338600">a</span> <span m="1338750">good</span> <span
  m="1339020">region</span> <span m="1339590">of</span> <span
  m="1339710">attraction</span> <span m="1340310">in</span> <span
  m="1340460">this</span> <span m="1340640">case.</span> <span
  m="1341430">OK.</span> <span m="1342140">So</span> <span
  m="1342350">that's</span> <span m="1344120">Newton's</span> <span
  m="1344600">method</span> <span m="1345110">for</span> <span
  m="1347930">equations.</span></p><p><span m="1349640">And</span> <span
  m="1349760">now</span> <span m="1350000">I</span> <span
  m="1350120">want</span> <span m="1350360">to</span> <span
  m="1350450">do</span> <span m="1350720">Newton's</span> <span
  m="1351200">method.</span> <span m="1351860">I</span> <span
  m="1351950">just</span> <span m="1352160">want</span> <span
  m="1352320">to</span> <span m="1352430">convert</span> <span
  m="1352970">all</span> <span m="1353150">those</span> <span
  m="1353420">words</span> <span m="1353930">over</span> <span
  m="1354230">to</span> <span m="1354410">Newton's</span> <span
  m="1354890">method</span> <span m="1355910">for</span> <span
  m="1356990">optimization.</span> <span m="1358450">So</span> <span
  m="1359000">remember,</span> <span m="1361965">these</span> <span
  m="1362300">boards</span> <span m="1362810">were</span> <span
  m="1362960">solving</span> <span m="1363890">f</span> <span
  m="1364130">equals</span> <span m="1364460">0.</span> <span
  m="1365810">This</span> <span m="1366080">board</span> <span
  m="1366500">is</span> <span m="1366680">minimizing</span> <span
  m="1367490">capital</span> <span m="1368030">F,</span> <span
  m="1368570">and</span> <span m="1368720">what's</span> <span
  m="1369050">the</span> <span m="1369140">connection</span> <span
  m="1369710">between</span> <span m="1370160">them?</span> <span
  m="1370860">Well</span> <span m="1370880">of</span> <span
  m="1370970">course,</span> <span m="1371850">this</span> <span
  m="1372950">corresponds</span> <span m="1373850">to</span> <span
  m="1374750">solving</span> <span m="1379050">the</span> <span
  m="1379200">gradient</span> <span m="1382200">equals</span> <span
  m="1382570">0.</span></p><p><span m="1384330">At</span> <span
  m="1384480">a</span> <span m="1384570">minimum,</span> <span
  m="1385560">if</span> <span m="1385710">I'm</span> <span
  m="1385860">minimizing,</span> <span m="1387240">I'm</span> <span
  m="1387420">finding</span> <span m="1387870">a</span> <span
  m="1387930">point</span> <span m="1388290">where</span> <span
  m="1388740">all</span> <span m="1389040">the</span> <span
  m="1389220">first</span> <span m="1389550">derivatives</span> <span
  m="1390170">are</span> <span m="1390320">0.</span> <span m="1391750">So</span>
  <span m="1392010">that</span> <span m="1392220">will</span> <span
  m="1392310">be</span> <span m="1392550">the</span> <span
  m="1392940">match</span> <span m="1393390">between</span> <span
  m="1393870">these.</span> <span m="1396060">This</span> <span
  m="1396750">grad</span> <span m="1397125">F</span> <span m="1397500">in</span>
  <span m="1397610">this</span> <span m="1398250">picture</span> <span
  m="1399120">is</span> <span m="1399530">the</span> <span
  m="1399600">small</span> <span m="1400110">f</span> <span
  m="1400890">in</span> <span m="1401010">that</span> <span
  m="1401220">picture.</span> <span m="1402650">OK.</span></p><p><span
  m="1405740">Now,</span> <span m="1406070">I</span> <span
  m="1406160">guess</span> <span m="1406460">here</span> <span
  m="1406760">I</span> <span m="1406940">have--</span> <span
  m="1408710">and</span> <span m="1408860">this</span> <span
  m="1409100">is</span> <span m="1409880">sort</span> <span
  m="1410120">of</span> <span m="1410180">the</span> <span
  m="1410270">heart</span> <span m="1410570">of</span> <span
  m="1410720">our</span> <span m="1413120">applications</span> <span
  m="1413930">to</span> <span m="1414080">deep</span> <span
  m="1414380">learning--</span> <span m="1414820">we</span> <span
  m="1414980">have</span> <span m="1415790">very</span> <span
  m="1416180">complicated</span> <span m="1417020">loss</span> <span
  m="1417440">functions</span> <span m="1418070">to</span> <span
  m="1418220">minimize,</span> <span m="1418870">functions</span> <span
  m="1419420">of</span> <span m="1419570">thousands</span> <span
  m="1420260">or</span> <span m="1420380">hundreds</span> <span
  m="1420800">of</span> <span m="1420920">thousands</span> <span
  m="1421400">of</span> <span m="1421460">variables.</span> <span
  m="1422900">OK.</span> <span m="1424840">So</span> <span
  m="1425050">that</span> <span m="1425290">means</span> <span
  m="1425860">that</span> <span m="1426070">we</span> <span
  m="1426280">would</span> <span m="1426430">like</span> <span
  m="1426670">to</span> <span m="1426790">use</span> <span
  m="1427030">Newton's</span> <span m="1427480">method,</span> <span
  m="1427840">but</span> <span m="1428050">often</span> <span
  m="1429010">we</span> <span m="1429160">can't.</span> <span
  m="1429970">So</span> <span m="1430570">I</span> <span m="1430690">need</span>
  <span m="1430960">him</span> <span m="1431950">to</span> <span
  m="1432100">put</span> <span m="1432280">down</span> <span
  m="1432550">here</span> <span m="1432790">two</span> <span
  m="1433090">methods--</span> <span m="1434380">one</span> <span
  m="1434740">that</span> <span m="1434950">doesn't</span> <span
  m="1435520">involve</span> <span m="1436630">those</span> <span
  m="1437290">high</span> <span m="1437620">second</span> <span
  m="1438040">derivatives</span> <span m="1439060">and</span> <span
  m="1439710">Newton's</span> <span m="1440560">that</span> <span
  m="1440770">does.</span></p><p><span m="1442750">So</span> <span
  m="1442990">first,</span> <span m="1444730">I'll</span> <span
  m="1444940">write</span> <span m="1445240">down</span> <span
  m="1445480">a</span> <span m="1445540">method</span> <span
  m="1446020">that</span> <span m="1447610">does</span> <span
  m="1447910">not</span> <span m="1448840">involve,</span> <span
  m="1450430">so</span> <span m="1451270">method</span> <span
  m="1451600">one,</span> <span m="1453940">and</span> <span
  m="1454150">this</span> <span m="1454420">will</span> <span
  m="1454630">be</span> <span m="1455260">steepest</span> <span
  m="1455950">descent.</span> <span m="1465040">And</span> <span
  m="1465200">what</span> <span m="1465440">is</span> <span
  m="1465620">that?</span> <span m="1466910">That</span> <span
  m="1467180">says</span> <span m="1467660">that</span> <span
  m="1467840">xK</span> <span m="1469250">plus</span> <span
  m="1469580">1--</span> <span m="1469970">the</span> <span
  m="1470090">new</span> <span m="1470390">x</span> <span m="1471500">is</span>
  <span m="1471680">the</span> <span m="1471830">old</span> <span
  m="1472160">x</span> <span m="1473540">minus--</span> <span
  m="1475430">steepest</span> <span m="1476000">descent</span> <span
  m="1476480">means</span> <span m="1476870">that</span> <span
  m="1477020">I</span> <span m="1477200">move</span> <span m="1477800">in</span>
  <span m="1478070">the</span> <span m="1478370">steepest</span> <span
  m="1479050">direction</span> <span m="1480110">which</span> <span
  m="1480350">is</span> <span m="1480470">the</span> <span
  m="1480650">direction</span> <span m="1481310">of</span> <span
  m="1481520">the</span> <span m="1481700">gradient</span> <span
  m="1483210">of</span> <span m="1483370">F.</span> <span m="1485240">I</span>
  <span m="1485390">move</span> <span m="1485720">some</span> <span
  m="1486050">distance,</span> <span m="1486770">and</span> <span
  m="1486950">I</span> <span m="1487130">better</span> <span
  m="1487520">have</span> <span m="1487880">freedom</span> <span
  m="1488480">to</span> <span m="1488660">decide</span> <span
  m="1489800">what</span> <span m="1490010">that</span> <span
  m="1490250">distance</span> <span m="1490730">should</span> <span
  m="1491000">be.</span> <span m="1491360">So</span> <span
  m="1491630">this</span> <span m="1491900">is</span> <span m="1492110">a</span>
  <span m="1493250">step</span> <span m="1493670">size,</span> <span
  m="1498572">s,</span> <span m="1499030">or</span> <span m="1499540">in</span>
  <span m="1499990">the</span> <span m="1500110">language</span> <span
  m="1500740">of</span> <span m="1500890">deep</span> <span
  m="1501220">learning,</span> <span m="1501670">it's</span> <span
  m="1501880">often</span> <span m="1502270">called</span> <span
  m="1502780">the</span> <span m="1502930">learning</span> <span
  m="1503410">rate,</span> <span m="1503830">so</span> <span
  m="1504303">if</span> <span m="1504776">you see</span> <span
  m="1505250">learning</span> <span m="1506100">rate.</span> <span
  m="1512040">OK.</span></p><p><span m="1519000">So</span> <span
  m="1520170">and</span> <span m="1520380">it's</span> <span
  m="1520800">natural</span> <span m="1521430">to</span> <span
  m="1521550">choose</span> <span m="1521850">sK.</span> <span
  m="1523440">We're</span> <span m="1523890">going</span> <span
  m="1524250">along,</span> <span m="1524940">do</span> <span
  m="1525030">you</span> <span m="1525120">see</span> <span
  m="1525835">what</span> <span m="1526110">this</span> <span
  m="1526380">right-hand</span> <span m="1526800">side</span> <span
  m="1527070">looks</span> <span m="1527340">like?</span> <span
  m="1527970">I'm</span> <span m="1528210">at</span> <span m="1528360">a</span>
  <span m="1528420">point</span> <span m="1528870">in</span> <span
  m="1529020">n</span> <span m="1529200">dimensions.</span> <span
  m="1531480">We're</span> <span m="1532830">in</span> <span
  m="1533070">n</span> <span m="1533250">dimensions</span> <span
  m="1533850">here.</span> <span m="1534640">We</span> <span
  m="1534740">have</span> <span m="1534870">functions</span> <span
  m="1535380">of</span> <span m="1535530">n</span> <span
  m="1535740">variables.</span></p><p><span m="1537770">There</span> <span
  m="1538150">is</span> <span m="1538290">a</span> <span
  m="1538350">vector.</span> <span m="1539020">There</span> <span
  m="1539150">is</span> <span m="1539310">a</span> <span
  m="1539400">direction</span> <span m="1540000">to</span> <span
  m="1540090">move</span> <span m="1541080">down</span> <span
  m="1541600">the</span> <span m="1542700">steepest</span> <span
  m="1543180">slope</span> <span m="1543780">of</span> <span
  m="1544980">the</span> <span m="1545100">graph.</span> <span
  m="1546360">And</span> <span m="1546560">here</span> <span
  m="1546700">is</span> <span m="1546930">a</span> <span
  m="1546990">distance</span> <span m="1547590">to</span> <span
  m="1547740">move,</span> <span m="1548730">and</span> <span
  m="1549090">we</span> <span m="1549360">will</span> <span
  m="1549600">stop.</span> <span m="1551910">We'll</span> <span
  m="1552210">have</span> <span m="1552360">to</span> <span
  m="1552450">get</span> <span m="1552690">off</span> <span
  m="1553020">this</span> <span m="1554400">step,</span> <span
  m="1557520">normally.</span> <span m="1559350">If</span> <span
  m="1560010">we</span> <span m="1560130">stay</span> <span
  m="1560430">on</span> <span m="1560640">it,</span> <span m="1561410">it</span>
  <span m="1561520">will</span> <span m="1561720">swing</span> <span
  m="1562170">back,</span> <span m="1562650">it'll</span> <span
  m="1563340">take</span> <span m="1563640">us</span> <span
  m="1564150">off</span> <span m="1564330">to</span> <span
  m="1564480">infinity.</span></p><p><span m="1566910">You</span> <span
  m="1567030">would</span> <span m="1567180">like</span> <span
  m="1567420">to</span> <span m="1567570">choose</span> <span
  m="1568050">sK</span> <span m="1569040">so</span> <span
  m="1569520">that</span> <span m="1569820">you</span> <span
  m="1570060">minimize</span> <span m="1572450">capital</span> <span
  m="1572910">F.</span> <span m="1573750">You</span> <span
  m="1574230">take</span> <span m="1574530">the</span> <span
  m="1574650">point</span> <span m="1575040">on</span> <span
  m="1575250">this</span> <span m="1575490">line,</span> <span
  m="1576970">so</span> <span m="1577050">this</span> <span m="1578400">a</span>
  <span m="1578460">line</span> <span m="1579480">in</span> <span
  m="1579840">R</span> <span m="1580080">n,</span> <span m="1581646">a</span>
  <span m="1582080">direction</span> <span m="1583470">in</span> <span
  m="1583680">R</span> <span m="1583960">n.</span> <span m="1588820">And</span>
  <span m="1589950">for</span> <span m="1590160">all</span> <span
  m="1590280">the</span> <span m="1590370">points</span> <span
  m="1590760">on</span> <span m="1590940">that</span> <span
  m="1591180">line,</span> <span m="1591630">in</span> <span
  m="1591720">that</span> <span m="1591930">direction,</span> <span
  m="1593790">F</span> <span m="1594060">has</span> <span
  m="1594330">some</span> <span m="1594600">value,</span> <span
  m="1595770">and</span> <span m="1595950">what</span> <span
  m="1596250">you</span> <span m="1596440">expect</span> <span
  m="1597060">is</span> <span m="1598110">that</span> <span
  m="1598320">initially,</span> <span m="1599090">because</span> <span
  m="1600480">you</span> <span m="1600600">chose</span> <span
  m="1600930">it</span> <span m="1601080">sensibly,</span> <span
  m="1602130">the</span> <span m="1603120">value</span> <span
  m="1603570">of</span> <span m="1603660">F</span> <span m="1603900">will</span>
  <span m="1604110">drop.</span> <span m="1605460">But</span> <span
  m="1605670">then</span> <span m="1606120">at</span> <span m="1606270">a</span>
  <span m="1606330">certain</span> <span m="1606630">point,</span> <span
  m="1606960">it</span> <span m="1607030">will</span> <span
  m="1608280">turn</span> <span m="1609030">back</span> <span
  m="1609360">on</span> <span m="1609510">you</span> <span
  m="1609830">and</span> <span m="1610200">increase.</span></p><p><span
  m="1611130">So</span> <span m="1611310">that</span> <span
  m="1611520">would</span> <span m="1611670">be</span> <span
  m="1611820">the</span> <span m="1611970">natural</span> <span
  m="1612510">stopping</span> <span m="1613020">point.</span> <span
  m="1614430">I</span> <span m="1614580">would</span> <span
  m="1614760">call</span> <span m="1615000">that</span> <span
  m="1615270">an</span> <span m="1615450">exact</span> <span
  m="1616110">line</span> <span m="1616530">search.</span> <span
  m="1617460">So</span> <span m="1617640">I</span> <span
  m="1617690">exact</span> <span m="1618210">line</span> <span
  m="1618570">search</span> <span m="1618960">would</span> <span
  m="1619170">be,</span> <span m="1622710">exact</span> <span
  m="1623340">line</span> <span m="1623700">search</span> <span
  m="1628200">is</span> <span m="1628470">the</span> <span
  m="1628650">best</span> <span m="1628950">s.</span> <span
  m="1631950">Of</span> <span m="1632070">course,</span> <span
  m="1632320">that</span> <span m="1632550">would</span> <span
  m="1632730">take</span> <span m="1632970">time</span> <span
  m="1633330">to</span> <span m="1634530">compute,</span> <span
  m="1636390">and</span> <span m="1636930">you</span> <span
  m="1637560">probably,</span> <span m="1638130">in</span> <span
  m="1638640">deep</span> <span m="1638940">learning,</span> <span
  m="1639360">that's</span> <span m="1639870">time</span> <span
  m="1640230">you</span> <span m="1640620">can't</span> <span
  m="1640920">afford,</span> <span m="1641400">so</span> <span
  m="1641700">you</span> <span m="1642630">fix</span> <span
  m="1643260">the</span> <span m="1644100">learning</span> <span
  m="1644490">rate</span> <span m="1644820">s.</span> <span
  m="1645690">Maybe</span> <span m="1645990">you</span> <span
  m="1646110">choose</span> <span m="1646500">0.01</span> <span
  m="1647790">to</span> <span m="1647880">be</span> <span
  m="1648150">pretty</span> <span m="1648480">safe.</span></p><p><span
  m="1649240">OK,</span> <span m="1650100">so</span> <span
  m="1650280">that's</span> <span m="1650670">method</span> <span
  m="1651060">one,</span> <span m="1651450">steepest</span> <span
  m="1651960">descent.</span> <span m="1652800">Now,</span> <span
  m="1653040">method</span> <span m="1653400">two</span> <span
  m="1653700">will</span> <span m="1653880">be</span> <span
  m="1654120">Newton's</span> <span m="1654570">method.</span> <span
  m="1663380">So</span> <span m="1663590">now,</span> <span
  m="1663800">we</span> <span m="1663950">have</span> <span
  m="1664100">xK</span> <span m="1664610">plus</span> <span m="1664910">1</span>
  <span m="1667100">equal</span> <span m="1667490">to</span> <span
  m="1667670">xK</span> <span m="1669560">minus</span> <span
  m="1672560">something</span> <span m="1673070">times</span> <span
  m="1673490">delta</span> <span m="1673870">F,</span> <span
  m="1679520">and</span> <span m="1679700">now</span> <span
  m="1679940">I'm</span> <span m="1680030">going</span> <span
  m="1680240">to</span> <span m="1680360">do</span> <span m="1680570">the</span>
  <span m="1680660">right</span> <span m="1680960">thing.</span> <span
  m="1681810">I'm</span> <span m="1681860">going</span> <span
  m="1681980">to</span> <span m="1682070">live</span> <span
  m="1682940">right</span> <span m="1683360">here,</span> <span
  m="1684890">and</span> <span m="1685070">the</span> <span
  m="1685160">right</span> <span m="1685460">thing</span> <span
  m="1685760">is</span> <span m="1686030">the</span> <span
  m="1686120">Hessian,</span> <span m="1686900">the</span> <span
  m="1687050">second</span> <span m="1687410">derivative.</span></p><p><span
  m="1688850">This</span> <span m="1689720">was</span> <span
  m="1690170">cheap.</span> <span m="1690770">We</span> <span
  m="1690950">just</span> <span m="1691430">took</span> <span
  m="1691700">the</span> <span m="1691820">direction</span> <span
  m="1692450">and</span> <span m="1692930">went</span> <span
  m="1693350">along</span> <span m="1693710">it.</span> <span
  m="1694280">Now,</span> <span m="1694580">we're</span> <span
  m="1694940">getting</span> <span m="1695330">really</span> <span
  m="1696020">the</span> <span m="1696170">right</span> <span
  m="1696470">direction</span> <span m="1697850">by</span> <span
  m="1698150">using</span> <span m="1698660">the</span> <span
  m="1698780">second</span> <span m="1699170">derivative,</span> <span
  m="1700170">so</span> <span m="1700290">that's</span> <span
  m="1700640">H</span> <span m="1701810">inverse.</span> <span
  m="1703850">OK,</span> <span m="1704340">and</span> <span
  m="1704520">what</span> <span m="1704730">I've</span> <span
  m="1704880">done</span> <span m="1705210">is</span> <span
  m="1707130">to</span> <span m="1708390">set</span> <span
  m="1708650">that</span> <span m="1712150">0.</span></p><p><span
  m="1717900">Do</span> <span m="1717990">you</span> <span
  m="1718080">see</span> <span m="1718290">that's</span> <span
  m="1718710">Newton's</span> <span m="1719130">method?</span> <span
  m="1720090">It's</span> <span m="1720570">totally</span> <span
  m="1721050">parallel</span> <span m="1721620">to</span> <span
  m="1721800">this</span> <span m="1722070">guy.</span> <span
  m="1724110">Actually,</span> <span m="1725670">I'm</span> <span
  m="1725820">really</span> <span m="1726090">happy</span> <span
  m="1726420">to</span> <span m="1726540">have</span> <span
  m="1726720">these</span> <span m="1726990">two</span> <span
  m="1727260">on</span> <span m="1727410">the</span> <span
  m="1727470">board</span> <span m="1728850">parallel</span> <span
  m="1729390">to</span> <span m="1729570">each</span> <span
  m="1729780">other,</span> <span m="1730080">because</span> <span
  m="1731010">you</span> <span m="1731130">have</span> <span
  m="1731370">to</span> <span m="1731850">keep</span> <span
  m="1732130">straight,</span> <span m="1732540">are</span> <span
  m="1732660">you</span> <span m="1732810">solving</span> <span
  m="1733320">equations,</span> <span m="1734070">or</span> <span
  m="1734220">are</span> <span m="1734310">you</span> <span
  m="1734460">minimizing</span> <span m="1735210">functions?</span> <span
  m="1736800">And</span> <span m="1737010">you're</span> <span
  m="1737130">using</span> <span m="1737670">different</span> <span
  m="1738180">letters</span> <span m="1739320">in</span> <span
  m="1739440">the</span> <span m="1739560">two</span> <span
  m="1739770">problems,</span> <span m="1740430">but</span> <span
  m="1740670">now</span> <span m="1740940">you</span> <span
  m="1741120">see</span> <span m="1741480">how</span> <span
  m="1741690">they</span> <span m="1741870">match.</span></p><p><span
  m="1742850">The</span> <span m="1743010">Jacobian</span> <span
  m="1744930">of--</span> <span m="1746990">so</span> <span
  m="1747270">again</span> <span m="1747630">the</span> <span
  m="1747750">matches,</span> <span m="1748680">think</span> <span
  m="1748990">of</span> <span m="1749160">f</span> <span m="1749640">as</span>
  <span m="1750630">the</span> <span m="1750750">gradient</span> <span
  m="1751630">of</span> <span m="1751790">F.</span> <span
  m="1753100">That's</span> <span m="1753600">the</span> <span
  m="1753690">way</span> <span m="1753870">you</span> <span
  m="1753960">should</span> <span m="1754170">think</span> <span
  m="1754410">of</span> <span m="1754530">it.</span> <span m="1756510">So</span>
  <span m="1756750">the</span> <span m="1756870">Jacobian</span> <span
  m="1761010">of</span> <span m="1761160">the</span> <span
  m="1761280">gradient</span> <span m="1762810">is</span> <span
  m="1763230">the</span> <span m="1763390">Hessian.</span> <span
  m="1764940">The</span> <span m="1765030">Jacobian</span> <span
  m="1765380">of</span> <span m="1765610">the</span> <span
  m="1765780">gradient</span> <span m="1766290">is</span> <span
  m="1766470">the</span> <span m="1766560">Hessian,</span> <span
  m="1767880">and</span> <span m="1768000">that</span> <span
  m="1768180">makes</span> <span m="1768420">sense,</span> <span
  m="1768810">because</span> <span m="1769440">the</span> <span
  m="1769710">first</span> <span m="1770220">derivative</span> <span
  m="1770790">of</span> <span m="1770940">the</span> <span
  m="1771030">first</span> <span m="1771330">derivative</span> <span
  m="1771900">is</span> <span m="1772110">the</span> <span
  m="1772220">second</span> <span m="1772710">derivative.</span> <span
  m="1773460">Only</span> <span m="1773730">we're</span> <span
  m="1773910">doing</span> <span m="1774180">matrix</span> <span
  m="1774780">y,</span> <span m="1776210">so</span> <span m="1776400">the</span>
  <span m="1776520">Jacobian</span> <span m="1777920">of</span> <span
  m="1778080">the</span> <span m="1778200">gradient--</span> <span
  m="1779640">we're</span> <span m="1779790">doing</span> <span
  m="1780030">a</span> <span m="1780060">vector</span> <span
  m="1780480">matrix</span> <span m="1781020">sentence</span> <span
  m="1781620">instead</span> <span m="1782040">of</span> <span
  m="1782160">a</span> <span m="1782250">scalar</span> <span
  m="1782820">sentence--</span> <span m="1783830">the</span> <span
  m="1783990">Jacobian</span> <span m="1784860">of</span> <span
  m="1784980">the</span> <span m="1785070">gradient</span> <span
  m="1786090">is</span> <span m="1786300">a</span> <span
  m="1786360">Hessian.</span> <span m="1788110">Yeah,</span> <span
  m="1788930">right.</span></p><p><span m="1790600">OK,</span> <span
  m="1790930">so</span> <span m="1791130">that's</span> <span
  m="1791430">what</span> <span m="1791610">I</span> <span
  m="1791700">wanted</span> <span m="1792000">to</span> <span
  m="1792300">start</span> <span m="1792810">with,</span> <span
  m="1793770">just</span> <span m="1794010">to</span> <span
  m="1794130">get</span> <span m="1794310">those</span> <span
  m="1794610">basic</span> <span m="1795030">facts</span> <span
  m="1795480">down.</span> <span m="1796110">And</span> <span
  m="1797070">so</span> <span m="1797310">the</span> <span
  m="1797400">basic</span> <span m="1797820">facts</span> <span
  m="1798270">were</span> <span m="1798510">the</span> <span
  m="1800880">three-term</span> <span m="1801510">Taylor</span> <span
  m="1801900">series.</span> <span m="1803280">And</span> <span
  m="1803430">then</span> <span m="1803640">the</span> <span
  m="1803730">basic</span> <span m="1805140">algorithms</span> <span
  m="1806430">followed</span> <span m="1807090">naturally</span> <span
  m="1807720">from</span> <span m="1808050">it</span> <span
  m="1809400">by</span> <span m="1809700">setting</span> <span
  m="1810990">f</span> <span m="1811410">F</span> <span m="1811795">at</span>
  <span m="1812180">the</span> <span m="1812280">new</span> <span
  m="1812660">point</span> <span m="1813040">to 0,</span> <span
  m="1813420">if</span> <span m="1813570">that's</span> <span
  m="1813840">what</span> <span m="1814020">you</span> <span
  m="1814140">were</span> <span m="1814230">solving</span> <span
  m="1815070">or</span> <span m="1815400">by</span> <span
  m="1815820">assuming</span> <span m="1816010">you had the</span> <span
  m="1816180">minimum.</span> <span m="1817020">Right,</span> <span
  m="1817410">good,</span> <span m="1818010">good,</span> <span
  m="1818250">good,</span> <span m="1818460">good.</span> <span
  m="1819420">OK.</span></p><p><span m="1821100">Now,</span> <span
  m="1821430">what?</span> <span m="1822900">Now,</span> <span
  m="1823080">we</span> <span m="1823200">have</span> <span
  m="1823290">to</span> <span m="1823410">think</span> <span
  m="1823620">about</span> <span m="1823950">solving</span> <span
  m="1824490">these</span> <span m="1824730">problems,</span> <span
  m="1826380">studying.</span> <span m="1827730">Do</span> <span
  m="1827940">they</span> <span m="1828120">converge?</span> <span
  m="1829170">What</span> <span m="1829410">rate</span> <span
  m="1829740">do</span> <span m="1829890">they</span> <span
  m="1830070">converge?</span> <span m="1830970">Well,</span> <span
  m="1831840">the</span> <span m="1831990">rate</span> <span
  m="1832320">of</span> <span m="1832440">convergence</span> <span
  m="1833220">is</span> <span m="1834030">like</span> <span
  m="1835500">why</span> <span m="1835770">I</span> <span
  m="1837140">separated</span> <span m="1837450">off</span> <span
  m="1837850">this</span> <span m="1838140">example.</span></p><p><span
  m="1839410">So</span> <span m="1839490">the</span> <span
  m="1839790">convergence</span> <span m="1840510">rate</span> <span
  m="1840780">for</span> <span m="1840960">Newton's</span> <span
  m="1841410">method</span> <span m="1841800">will</span> <span
  m="1842040">be</span> <span m="1842970">quadratic.</span> <span
  m="1843840">The</span> <span m="1843990">error</span> <span
  m="1844320">gets</span> <span m="1844650">squared,</span> <span
  m="1847200">and</span> <span m="1847380">of</span> <span
  m="1847470">course,</span> <span m="1847770">that</span> <span
  m="1847980">means</span> <span m="1848290">super-fast</span> <span
  m="1849080">convergence,</span> <span m="1850440">if</span> <span
  m="1850620">you</span> <span m="1850800">start</span> <span
  m="1851170">and</span> <span m="1851240">close</span> <span
  m="1851610">enough.</span> <span m="1853160">The</span> <span
  m="1853310">rate</span> <span m="1853610">of</span> <span
  m="1853730">convergence</span> <span m="1854480">for</span> <span
  m="1854630">a</span> <span m="1854690">steepest</span> <span
  m="1855230">descent</span> <span m="1855860">is,</span> <span
  m="1856130">of</span> <span m="1856250">course,</span> <span
  m="1856580">not.</span> <span m="1857600">You're</span> <span
  m="1857750">not</span> <span m="1857960">squaring</span> <span
  m="1858590">errors</span> <span m="1858980">here,</span> <span
  m="1859330">because</span> <span m="1859550">you're</span> <span
  m="1860240">just</span> <span m="1860480">taking</span> <span
  m="1860900">some</span> <span m="1861170">number</span> <span
  m="1861650">instead</span> <span m="1862130">of</span> <span
  m="1862310">the</span> <span m="1863030">inverse</span> <span
  m="1863630">of</span> <span m="1863780">the</span> <span
  m="1863900">correct</span> <span m="1864350">matrix,</span> <span
  m="1865500">so</span> <span m="1865700">you</span> <span
  m="1866630">can't</span> <span m="1867320">expect</span> <span
  m="1870440">super</span> <span m="1870860">speed.</span></p><p><span
  m="1872610">So</span> <span m="1873180">a</span> <span
  m="1873350">linear</span> <span m="1873800">rate</span> <span
  m="1874100">of</span> <span m="1874250">convergence</span> <span
  m="1875000">would</span> <span m="1875180">be</span> <span
  m="1875390">right.</span> <span m="1878430">You</span> <span
  m="1878600">would</span> <span m="1878750">like</span> <span
  m="1879080">to</span> <span m="1879200">know</span> <span
  m="1879590">that</span> <span m="1879770">the</span> <span
  m="1879950">error</span> <span m="1880430">is</span> <span
  m="1881240">multiplied</span> <span m="1882320">at</span> <span
  m="1882500">every</span> <span m="1882800">step</span> <span
  m="1883670">by</span> <span m="1883880">some</span> <span
  m="1884120">constant</span> <span m="1884690">below</span> <span
  m="1885050">1.</span> <span m="1886850">That</span> <span
  m="1887300">would</span> <span m="1887540">be</span> <span
  m="1887720">a</span> <span m="1887810">linear</span> <span
  m="1888200">rate</span> <span m="1888830">compared</span> <span
  m="1889400">to</span> <span m="1892280">being</span> <span
  m="1892640">squared</span> <span m="1893510">at</span> <span
  m="1893660">every</span> <span m="1893930">step.</span> <span
  m="1895420">OK,</span> <span m="1896310">and</span> <span
  m="1896610">so</span> <span m="1896850">this</span> <span
  m="1897090">will</span> <span m="1897270">be</span> <span
  m="1897480">our</span> <span m="1900540">basic</span> <span
  m="1901050">formula</span> <span m="1902310">that</span> <span
  m="1903060">we</span> <span m="1903240">build</span> <span
  m="1903620">on</span> <span m="1905150">for</span> <span
  m="1908850">really</span> <span m="1909240">large</span> <span
  m="1909540">scale</span> <span m="1909810">problems.</span></p><p><span
  m="1910830">And</span> <span m="1911460">there</span> <span
  m="1911790">are</span> <span m="1911940">methods,</span> <span
  m="1913080">of</span> <span m="1913170">course,</span> <span
  m="1913590">people</span> <span m="1914010">are</span> <span
  m="1915000">going</span> <span m="1915150">to</span> <span
  m="1915240">come</span> <span m="1915480">up</span> <span
  m="1915630">with</span> <span m="1915810">methods</span> <span
  m="1916320">that</span> <span m="1917080">they're</span> <span
  m="1917490">sort</span> <span m="1917790">of</span> <span m="1917910">a</span>
  <span m="1918000">cheap</span> <span m="1918510">Newton's</span> <span
  m="1918990">method.</span> <span m="1921260">Levenberg-Marquardt,</span> <span
  m="1923620">and</span> <span m="1924060">it's</span> <span
  m="1924300">in</span> <span m="1924420">the</span> <span
  m="1924540">notes</span> <span m="1925020">at</span> <span
  m="1925140">the</span> <span m="1925320">end</span> <span
  m="1925560">of</span> <span m="1925650">this</span> <span
  m="1925890">section,</span> <span m="1927110">at</span> <span
  m="1927210">the</span> <span m="1927390">end</span> <span
  m="1927630">of</span> <span m="1928500">6.4</span> <span
  m="1929850">that</span> <span m="1930000">we'll</span> <span
  m="1930210">get</span> <span m="1930470">to.</span> <span
  m="1931105">So</span> <span m="1931410">Levenberg-Marquardt</span> <span
  m="1932890">is</span> <span m="1933160">a</span> <span m="1933330">sort</span>
  <span m="1933570">of</span> <span m="1933690">cheap</span> <span
  m="1934050">man's</span> <span m="1934980">Newton's</span> <span
  m="1935400">method.</span> <span m="1936130">It</span> <span
  m="1936150">does</span> <span m="1936330">not</span> <span
  m="1936660">compute</span> <span m="1937025">to</span> <span
  m="1937390">Hessian,</span> <span m="1938520">but</span> <span
  m="1938730">it</span> <span m="1940320">says,</span> <span
  m="1940710">OK,</span> <span m="1942180">from</span> <span
  m="1942420">the</span> <span m="1942510">gradient,</span> <span
  m="1943140">I</span> <span m="1943260">can</span> <span m="1943500">see</span>
  <span m="1945240">one</span> <span m="1945630">term</span> <span
  m="1946050">in</span> <span m="1946140">the</span> <span
  m="1946280">Hessian.</span> <span m="1947160">So</span> <span
  m="1947340">it</span> <span m="1947430">grabs</span> <span
  m="1947880">that</span> <span m="1948110">term,</span> <span
  m="1949860">but</span> <span m="1950610">it's</span> <span
  m="1950790">not</span> <span m="1951780">fully</span> <span
  m="1953490">second</span> <span m="1953880">order.</span></p><p><span
  m="1954570">OK.</span> <span m="1956270">So</span> <span
  m="1957110">now,</span> <span m="1957900">we</span> <span
  m="1957950">have</span> <span m="1958070">to</span> <span
  m="1958160">think</span> <span m="1958400">about</span> <span
  m="1959330">problems,</span> <span m="1960860">and</span> <span
  m="1961010">I</span> <span m="1961100">guess</span> <span
  m="1961580">the</span> <span m="1962810">message</span> <span
  m="1963260">here</span> <span m="1963650">is,</span> <span
  m="1964260">at</span> <span m="1964550">our</span> <span
  m="1964700">starting</span> <span m="1965120">point,</span> <span
  m="1965360">has</span> <span m="1965570">to</span> <span m="1965690">be</span>
  <span m="1967080">convexity.</span> <span m="1969100">Convexity</span> <span
  m="1969940">is</span> <span m="1970150">the</span> <span
  m="1970270">key</span> <span m="1970690">word</span> <span
  m="1971140">for</span> <span m="1973930">these</span> <span
  m="1974200">problems,</span> <span m="1975090">for</span> <span
  m="1975550">the</span> <span m="1975640">function</span> <span
  m="1976090">that</span> <span m="1976240">we</span> <span
  m="1976390">want</span> <span m="1976600">to</span> <span
  m="1976660">minimize.</span> <span m="1977740">If</span> <span
  m="1977920">that's</span> <span m="1978220">a</span> <span
  m="1978280">convex</span> <span m="1979000">function,</span> <span
  m="1979900">well</span> <span m="1980050">first</span> <span
  m="1980380">of</span> <span m="1980500">all,</span> <span
  m="1981800">the</span> <span m="1981980">convex</span> <span
  m="1982520">function</span> <span m="1983000">is</span> <span
  m="1984590">likely</span> <span m="1984980">to</span> <span
  m="1985100">have</span> <span m="1985430">one</span> <span
  m="1985880">minimum.</span> <span m="1987570">And</span> <span
  m="1988240">the</span> <span m="1990180">picture</span> <span
  m="1990690">that's</span> <span m="1991020">in</span> <span
  m="1991170">our</span> <span m="1991320">mind</span> <span
  m="1992580">of</span> <span m="1992730">steepest</span> <span
  m="1993240">descent,</span> <span m="1993850">this</span> <span
  m="1993960">picture</span> <span m="1994380">of</span> <span
  m="1994530">a</span> <span m="1994620">bowl,</span> <span m="1996210">a</span>
  <span m="1996300">bowl</span> <span m="1996690">is</span> <span
  m="1996900">the</span> <span m="1997020">graph</span> <span
  m="1997410">of</span> <span m="1997500">the</span> <span
  m="1997590">convex</span> <span m="1998190">function.</span></p><p><span
  m="1999480">So</span> <span m="1999720">I'm</span> <span
  m="1999930">turning</span> <span m="2000360">to</span> <span
  m="2000530">convexity</span> <span m="2001330">now.</span> <span
  m="2001970">I'll</span> <span m="2002060">leave</span> <span
  m="2002360">that</span> <span m="2002630">board</span> <span
  m="2002960">there,</span> <span m="2003440">because</span> <span
  m="2003680">that's</span> <span m="2004370">pretty</span> <span
  m="2005180">crucial,</span> <span m="2008260">and</span> <span
  m="2008440">speak</span> <span m="2008830">about</span> <span
  m="2009100">the</span> <span m="2009250">idea</span> <span
  m="2009580">of</span> <span m="2009700">convexity.</span> <span
  m="2012010">Convex</span> <span m="2012580">function,</span> <span
  m="2014200">convex</span> <span m="2014740">set,</span> <span
  m="2019120">so</span> <span m="2019360">let's</span> <span
  m="2019660">call</span> <span m="2019960">the</span> <span
  m="2020080">function</span> <span m="2020650">f</span> <span
  m="2022240">of</span> <span m="2022420">x,</span> <span m="2023530">and</span>
  <span m="2023840">a</span> <span m="2024150">typical</span> <span
  m="2024700">convex</span> <span m="2025300">set</span> <span
  m="2025540">would</span> <span m="2025720">be</span> <span
  m="2026200">I'll</span> <span m="2026380">call</span> <span
  m="2026650">it</span> <span m="2026820">K.</span> <span m="2027890">OK.</span>
  <span m="2030590">So</span> <span m="2030770">we</span> <span
  m="2030890">just</span> <span m="2031100">want</span> <span
  m="2031280">to</span> <span m="2031340">remember</span> <span
  m="2031760">what</span> <span m="2031970">does</span> <span
  m="2032210">that</span> <span m="2033080">word</span> <span
  m="2033470">can</span> <span m="2033770">convex</span> <span
  m="2034340">mean,</span> <span m="2034760">and</span> <span
  m="2034910">how</span> <span m="2035150">do</span> <span
  m="2035240">you</span> <span m="2035480">know</span> <span
  m="2035870">if</span> <span m="2036050">you</span> <span
  m="2036170">have</span> <span m="2036440">a</span> <span
  m="2036530">convex</span> <span m="2037130">function</span> <span
  m="2037910">or</span> <span m="2038060">a</span> <span
  m="2038090">convex</span> <span m="2038660">set?</span></p><p><span
  m="2039470">OK,</span> <span m="2039830">let</span> <span
  m="2039920">me</span> <span m="2040070">start</span> <span
  m="2040340">with</span> <span m="2040520">convex</span> <span
  m="2041060">set.</span> <span m="2041930">So</span> <span
  m="2043010">because</span> <span m="2043400">here</span> <span
  m="2043570">is</span> <span m="2043670">my</span> <span
  m="2044330">general</span> <span m="2044840">problem,</span> <span
  m="2045290">my</span> <span m="2045860">convex</span> <span
  m="2048050">minimization,</span> <span m="2055850">which</span> <span
  m="2056090">you</span> <span m="2056210">hope</span> <span
  m="2056480">to</span> <span m="2056630">have,</span> <span
  m="2056960">and</span> <span m="2057070">in</span> <span
  m="2057230">many</span> <span m="2057560">applications,</span> <span
  m="2058340">you</span> <span m="2058460">do</span> <span
  m="2058699">have.</span> <span m="2059480">So</span> <span
  m="2059659">you</span> <span m="2059810">minimize</span> <span
  m="2062810">a</span> <span m="2063080">convex</span> <span
  m="2063650">function</span> <span m="2066199">for</span> <span
  m="2066500">points</span> <span m="2067130">in</span> <span
  m="2068280">a</span> <span m="2068900">convex</span> <span
  m="2069469">set.</span> <span m="2071330">So</span> <span
  m="2071510">that's</span> <span m="2071989">like</span> <span
  m="2072350">the</span> <span m="2072530">ideal</span> <span
  m="2073040">situation.</span> <span m="2074570">That's</span> <span
  m="2074780">the</span> <span m="2074929">ideal</span> <span
  m="2075350">situation,</span> <span m="2076770">to</span> <span
  m="2077360">get</span> <span m="2077690">something</span> <span
  m="2078230">on</span> <span m="2078380">your</span> <span
  m="2078530">side,</span> <span m="2078920">something</span> <span
  m="2079340">powerful,</span> <span m="2080060">convexity.</span></p><p><span
  m="2081590">The</span> <span m="2081770">function</span> <span
  m="2082280">is</span> <span m="2082460">convex,</span> <span
  m="2083590">and</span> <span m="2084100">you</span> <span
  m="2084179">say,</span> <span m="2084310">well,</span> <span
  m="2084409">let</span> <span m="2084530">me</span> <span
  m="2084679">draw</span> <span m="2084980">a</span> <span
  m="2085040">convex</span> <span m="2085670">function,</span> <span
  m="2086320">the</span> <span m="2086480">graph.</span> <span
  m="2087710">OK,</span> <span m="2088280">so</span> <span
  m="2088429">I'll</span> <span m="2088550">draw</span> <span
  m="2089050">a</span> <span m="2089090">convex</span> <span
  m="2089690">function,</span> <span m="2091280">say</span> <span
  m="2092471">a</span> <span m="2092889">bowl.</span> <span
  m="2094980">So</span> <span m="2095060">that's</span> <span
  m="2095330">a</span> <span m="2095389">graph</span> <span
  m="2095780">of</span> <span m="2095929">f</span> <span m="2096110">of</span>
  <span m="2096260">x,</span> <span m="2097310">and</span> <span
  m="2097460">then</span> <span m="2098330">here</span> <span
  m="2098540">are</span> <span m="2098600">the</span> <span
  m="2098780">x's.</span> <span m="2100640">Let</span> <span
  m="2100970">me</span> <span m="2101860">maybe</span> <span
  m="2103340">put</span> <span m="2103730">x1</span> <span
  m="2104270">and</span> <span m="2104390">x2</span> <span m="2104990">in</span>
  <span m="2105080">the</span> <span m="2105170">base</span> <span
  m="2106220">and</span> <span m="2106550">the</span> <span
  m="2106670">graph</span> <span m="2107360">of</span> <span
  m="2108500">f</span> <span m="2108800">of</span> <span m="2109590">1x</span>
  <span m="2110150">x2</span> <span m="2111130">up</span> <span
  m="2111405">here.</span> <span m="2116170">OK.</span> <span
  m="2116610">Actually,</span> <span m="2117060">I'm</span> <span
  m="2117210">over</span> <span m="2117510">there.</span></p><p><span
  m="2117820">I</span> <span m="2117930">should</span> <span
  m="2118170">be</span> <span m="2118410">calling</span> <span
  m="2119790">this</span> <span m="2120060">function</span> <span
  m="2120600">F,</span> <span m="2120900">I</span> <span
  m="2121020">think.</span> <span m="2124268">Is</span> <span
  m="2124756">that</span> <span m="2125244">right?</span> <span
  m="2129160">Yeah,</span> <span m="2129430">a</span> <span
  m="2129470">little</span> <span m="2129860">f</span> <span
  m="2130100">would</span> <span m="2130250">be</span> <span
  m="2130400">the</span> <span m="2130530">gradient</span> <span
  m="2131080">of</span> <span m="2131210">this</span> <span
  m="2131480">guy.</span> <span m="2133220">Yeah,</span> <span
  m="2133400">I</span> <span m="2133490">think</span> <span
  m="2133760">so.</span> <span m="2138576">OK.</span></p><p><span
  m="2143200">Now,</span> <span m="2143510">I'm</span> <span
  m="2143660">minimizing</span> <span m="2144020">it</span> <span
  m="2146390">over</span> <span m="2146690">certain</span> <span
  m="2147020">x's,</span> <span m="2147410">not</span> <span
  m="2147680">all</span> <span m="2147920">x's.</span> <span
  m="2149120">I</span> <span m="2149210">might</span> <span
  m="2149480">be</span> <span m="2149630">minimizing,</span> <span
  m="2150410">for</span> <span m="2150650">example,</span> <span
  m="2155750">K</span> <span m="2156080">might</span> <span
  m="2156410">be</span> <span m="2156650">the</span> <span
  m="2156830">set</span> <span m="2157700">where</span> <span
  m="2159090">Ax</span> <span m="2159980">equals</span> <span
  m="2160310">B.</span> <span m="2163630">K</span> <span
  m="2163970">might</span> <span m="2164360">be,</span> <span
  m="2165230">in</span> <span m="2165380">that</span> <span
  m="2165590">case,</span> <span m="2166120">a</span> <span
  m="2166130">subspace</span> <span m="2167150">or</span> <span
  m="2167390">a</span> <span m="2168140">shifted</span> <span
  m="2168620">subspace.</span> <span m="2169460">I</span> <span
  m="2169970">said</span> <span m="2170240">subspace,</span> <span
  m="2170870">but</span> <span m="2171030">then</span> <span
  m="2172010">18.06</span> <span m="2172790">is</span> <span
  m="2172940">reminding</span> <span m="2173540">me</span> <span
  m="2173690">in</span> <span m="2173780">my</span> <span
  m="2173960">mind</span> <span m="2174350">that</span> <span
  m="2174560">I</span> <span m="2174680">only</span> <span
  m="2174890">have</span> <span m="2175040">a</span> <span
  m="2175100">subspace</span> <span m="2175700">when</span> <span
  m="2175880">B</span> <span m="2176120">is</span> <span
  m="2176210">0.</span></p><p><span m="2179330">You</span> <span
  m="2179450">know</span> <span m="2179630">the</span> <span
  m="2179720">word</span> <span m="2179990">for</span> <span
  m="2180530">a</span> <span m="2180650">subspace</span> <span
  m="2181370">that's</span> <span m="2181510">sort</span> <span
  m="2181730">of</span> <span m="2181820">moved</span> <span
  m="2182240">over?</span> <span m="2183530">Affine,</span> <span
  m="2184890">so</span> <span m="2185250">I'll</span> <span
  m="2185370">just</span> <span m="2185610">put</span> <span
  m="2185820">that</span> <span m="2186010">word</span> <span
  m="2186340">down</span> <span m="2186670">here.</span> <span
  m="2190190">Bunch</span> <span m="2190490">of</span> <span
  m="2190550">words</span> <span m="2190910">to</span> <span
  m="2191030">learn</span> <span m="2191420">for</span> <span
  m="2191600">this</span> <span m="2192830">topic,</span> <span
  m="2195200">but</span> <span m="2195470">they're</span> <span
  m="2195860">worth</span> <span m="2196190">learning.</span> <span
  m="2196760">OK.</span></p><p><span m="2197630">So</span> <span
  m="2197870">it's</span> <span m="2199250">like</span> <span
  m="2199460">a</span> <span m="2199520">plane</span> <span
  m="2200120">but</span> <span m="2200300">not</span> <span
  m="2200570">necessarily</span> <span m="2201200">through</span> <span
  m="2201440">the</span> <span m="2201590">origin.</span> <span
  m="2202700">If</span> <span m="2202940">B</span> <span m="2203140">is</span>
  <span m="2203240">0,</span> <span m="2203730">it</span> <span
  m="2203810">doesn't</span> <span m="2204170">go</span> <span
  m="2204320">through it.</span> <span m="2204640">If</span> <span
  m="2204800">B</span> <span m="2204980">it's</span> <span
  m="2205100">not</span> <span m="2205340">0,</span> <span m="2205670">it</span>
  <span m="2205730">doesn't</span> <span m="2206030">go</span> <span
  m="2206170">through</span> <span m="2206460">the</span> <span
  m="2206690">origin.</span> <span m="2207060">OK.</span> <span
  m="2207480">Anyway,</span> <span m="2208190">or</span> <span
  m="2208430">I</span> <span m="2208550">have</span> <span
  m="2208670">some</span> <span m="2208910">other</span> <span
  m="2209150">convex</span> <span m="2209670">set.</span> <span
  m="2209940">Let</span> <span m="2210170">me</span> <span
  m="2210320">just</span> <span m="2210560">put</span> <span
  m="2210830">this</span> <span m="2211340">convex</span> <span
  m="2211630">set</span> <span m="2211920">K</span> <span m="2212570">in</span>
  <span m="2212810">the</span> <span m="2212900">base</span> <span
  m="2213710">for</span> <span m="2214040">you,</span> <span
  m="2217519">and</span> <span m="2217970">did</span> <span m="2218180">I</span>
  <span m="2218300">make</span> <span m="2218570">it</span> <span
  m="2218690">convex?</span> <span m="2219470">I</span> <span
  m="2219560">think</span> <span m="2220220">pretty</span> <span
  m="2220970">luckily</span> <span m="2221570">I</span> <span
  m="2221690">did.</span></p><p><span m="2224060">So</span> <span
  m="2224330">now</span> <span m="2224690">what's</span> <span
  m="2224945">the?</span> <span m="2227840">Well,</span> <span
  m="2228560">the</span> <span m="2228710">convex</span> <span
  m="2229220">sets</span> <span m="2230420">the</span> <span
  m="2230750">constraint,</span> <span m="2231540">so</span> <span
  m="2231620">this</span> <span m="2231800">is</span> <span
  m="2231950">the</span> <span m="2232070">constraint</span> <span
  m="2232415">set.</span> <span m="2233840">Constraint</span> <span
  m="2236870">is</span> <span m="2237080">that</span> <span m="2237770">x</span>
  <span m="2238160">must</span> <span m="2238490">be</span> <span
  m="2240050">in</span> <span m="2241150">the</span> <span
  m="2241240">set</span> <span m="2241570">K.</span> <span
  m="2242720">OK,</span> <span m="2243290">and</span> <span m="2243440">I</span>
  <span m="2243590">drew</span> <span m="2243860">it</span> <span
  m="2244160">as</span> <span m="2244400">a</span> <span
  m="2245810">convex</span> <span m="2246350">blob.</span> <span
  m="2248120">Here</span> <span m="2248330">was</span> <span
  m="2248570">an</span> <span m="2248690">example</span> <span
  m="2249230">where</span> <span m="2249590">it's</span> <span
  m="2250880">flat,</span> <span m="2252560">not</span> <span
  m="2252770">a</span> <span m="2252830">blob</span> <span
  m="2253250">but</span> <span m="2253430">a</span> <span
  m="2253490">flat</span> <span m="2254540">plane.</span></p><p><span
  m="2256110">But</span> <span m="2257570">let</span> <span
  m="2257730">me</span> <span m="2257880">come</span> <span
  m="2258090">back</span> <span m="2258360">to</span> <span
  m="2258540">what</span> <span m="2258870">does</span> <span
  m="2259110">convex</span> <span m="2259800">mean.</span> <span
  m="2261020">What's</span> <span m="2261280">a</span> <span
  m="2261390">convex</span> <span m="2261930">set?</span> <span
  m="2262450">Yeah,</span> <span m="2263470">we</span> <span
  m="2263610">have</span> <span m="2263820">to</span> <span
  m="2263940">do</span> <span m="2264120">that,</span> <span
  m="2266210">should</span> <span m="2266450">have</span> <span
  m="2266570">done</span> <span m="2266780">that</span> <span
  m="2267020">before.</span> <span m="2275140">In</span> <span
  m="2275870">the</span> <span m="2275960">notes,</span> <span
  m="2276440">I</span> <span m="2278300">had</span> <span m="2278480">the</span>
  <span m="2278660">fun</span> <span m="2279050">of</span> <span
  m="2279200">figuring</span> <span m="2279740">out,</span> <span
  m="2280040">if</span> <span m="2280190">I</span> <span m="2280280">took</span>
  <span m="2281630">a</span> <span m="2281690">triangle,</span> <span
  m="2282320">is</span> <span m="2282480">that</span> <span m="2282630">a</span>
  <span m="2282680">convex</span> <span m="2283240">set?</span> <span
  m="2284870">Let's</span> <span m="2285080">just</span> <span
  m="2285350">be</span> <span m="2285500">sure.</span></p><p><span
  m="2289640">So</span> <span m="2289790">what's</span> <span
  m="2290060">a</span> <span m="2290120">convex</span> <span
  m="2290650">set?</span> <span m="2291530">That</span> <span
  m="2291770">is</span> <span m="2291980">a</span> <span
  m="2292040">convex</span> <span m="2292560">set,</span> <span
  m="2292790">because</span> <span m="2293780">if</span> <span
  m="2293930">I</span> <span m="2294020">take</span> <span
  m="2294350">any</span> <span m="2294620">two</span> <span
  m="2294920">points</span> <span m="2295400">in</span> <span
  m="2295550">the</span> <span m="2295650">set</span> <span
  m="2296540">and</span> <span m="2296660">draw</span> <span
  m="2296930">the</span> <span m="2297050">line</span> <span
  m="2297410">between</span> <span m="2297890">them,</span> <span
  m="2299120">it</span> <span m="2299240">stays</span> <span
  m="2299660">in</span> <span m="2299780">the</span> <span
  m="2299910">set.</span> <span m="2301710">So</span> <span
  m="2301860">that's</span> <span m="2302160">convexity,</span> <span
  m="2303630">any</span> <span m="2306490">edge,</span> <span
  m="2307350">line,</span> <span m="2309310">from</span> <span
  m="2310050">x1</span> <span m="2311370">to</span> <span m="2311580">x2</span>
  <span m="2313200">stays</span> <span m="2313830">in</span> <span
  m="2316440">the</span> <span m="2316560">set.</span> <span
  m="2317970">OK,</span> <span m="2318350">good.</span></p><p><span
  m="2319920">So</span> <span m="2320130">here's</span> <span
  m="2320400">my</span> <span m="2320790">little</span> <span
  m="2321300">exercise</span> <span m="2321990">to</span> <span
  m="2322110">myself.</span> <span m="2323380">What</span> <span
  m="2323460">if</span> <span m="2323610">I</span> <span m="2323760">took</span>
  <span m="2324030">the</span> <span m="2324210">union</span> <span
  m="2324870">of</span> <span m="2325020">two</span> <span
  m="2325290">triangles?</span> <span m="2326720">All</span> <span
  m="2326910">I</span> <span m="2327030">want</span> <span m="2327300">to</span>
  <span m="2327420">get</span> <span m="2327840">you</span> <span
  m="2327930">to</span> <span m="2328080">do</span> <span m="2328260">is</span>
  <span m="2328380">just</span> <span m="2330150">visualize</span> <span
  m="2331530">convex</span> <span m="2332220">and</span> <span
  m="2332370">not</span> <span m="2332760">convex</span> <span
  m="2333420">possibilities.</span> <span m="2334620">Suppose</span> <span
  m="2335010">I</span> <span m="2335100">have</span> <span
  m="2335460">one</span> <span m="2335760">triangle,</span> <span
  m="2337680">even</span> <span m="2338010">if</span> <span
  m="2338160">it</span> <span m="2338280">was</span> <span
  m="2339750">obtuse,</span> <span m="2342120">that's</span> <span
  m="2342420">still</span> <span m="2342810">convex,</span> <span
  m="2343430">right?</span> <span m="2344730">No</span> <span
  m="2344910">problem.</span></p><p><span m="2346230">But</span> <span
  m="2346440">now</span> <span m="2346860">what</span> <span
  m="2347070">if</span> <span m="2347220">I</span> <span m="2347370">put</span>
  <span m="2347580">those</span> <span m="2347820">two</span> <span
  m="2348030">triangles</span> <span m="2348630">together,</span> <span
  m="2350340">take</span> <span m="2350580">their</span> <span
  m="2350760">union?</span> <span m="2351310">Well,</span> <span m="2351810">if
  I</span> <span m="2351900">take</span> <span m="2352170">them</span> <span
  m="2352350">sitting</span> <span m="2353250">with</span> <span
  m="2353460">a</span> <span m="2353520">big</span> <span m="2353760">gap</span>
  <span m="2354120">between,</span> <span m="2355740">like</span> <span
  m="2356040">I've</span> <span m="2356220">lost.</span> <span
  m="2357330">I</span> <span m="2357480">mean,</span> <span m="2357600">I</span>
  <span m="2357780">never</span> <span m="2358050">had</span> <span
  m="2358230">a</span> <span m="2358290">chance</span> <span
  m="2358830">that</span> <span m="2359030">way,</span> <span
  m="2360390">because</span> <span m="2361080">if</span> <span
  m="2362310">it</span> <span m="2362600">was</span> <span
  m="2362820">the</span> <span m="2362940">union</span> <span
  m="2363420">of</span> <span m="2363510">these</span> <span
  m="2363780">two--</span> <span m="2364110">well,</span> <span
  m="2364290">you</span> <span m="2364500">know</span> <span
  m="2364680">what</span> <span m="2364830">I'm</span> <span
  m="2364980">going</span> <span m="2365090">to</span> <span
  m="2365220">say.</span> <span m="2365880">If</span> <span
  m="2366000">I'm</span> <span m="2366090">doing</span> <span
  m="2366300">that</span> <span m="2366540">point</span> <span
  m="2366900">and</span> <span m="2366990">that</span> <span
  m="2367200">point,</span> <span m="2367530">of</span> <span
  m="2367620">course,</span> <span m="2368100">it</span> <span
  m="2368220">goes</span> <span m="2368610">outside</span> <span
  m="2369330">and</span> <span m="2369810">stupid.</span> <span
  m="2370530">All</span> <span m="2370650">right.</span></p><p><span
  m="2376140">What</span> <span m="2376290">if</span> <span
  m="2377040">what</span> <span m="2377250">if</span> <span
  m="2377370">that</span> <span m="2377640">triangle,</span> <span
  m="2379110">that</span> <span m="2379380">lower</span> <span
  m="2379800">triangle,</span> <span m="2381150">overlaps</span> <span
  m="2381780">the</span> <span m="2381930">upper</span> <span
  m="2382200">triangle?</span> <span m="2382980">Is</span> <span
  m="2383160">that</span> <span m="2383400">a</span> <span
  m="2383460">convex</span> <span m="2384010">set?</span> <span
  m="2387000">Everybody's</span> <span m="2387540">right</span> <span
  m="2387900">saying</span> <span m="2388260">no.</span> <span
  m="2389130">Why</span> <span m="2389400">how</span> <span
  m="2389610">do</span> <span m="2389760">I</span> <span m="2389880">see</span>
  <span m="2390180">that</span> <span m="2390450">the</span> <span
  m="2390600">union</span> <span m="2391230">of</span> <span
  m="2391350">those</span> <span m="2391650">two</span> <span
  m="2391860">triangles</span> <span m="2393240">is</span> <span
  m="2393600">not</span> <span m="2393900">a</span> <span
  m="2393960">convex</span> <span m="2394510">set?</span> <span
  m="2396200">Guys,</span> <span m="2396710">you</span> <span
  m="2397010">tell</span> <span m="2397250">me</span> <span
  m="2397400">where</span> <span m="2397580">to</span> <span
  m="2397700">pick</span> <span m="2397940">two</span> <span
  m="2398180">points,</span> <span m="2399530">where</span> <span
  m="2399740">the</span> <span m="2399860">line</span> <span
  m="2400340">goes</span> <span m="2400640">out.</span> <span
  m="2400940">Well,</span> <span m="2401630">I</span> <span
  m="2401720">take</span> <span m="2401990">one</span> <span
  m="2402350">from</span> <span m="2402560">that</span> <span
  m="2402770">corner</span> <span m="2403310">and</span> <span
  m="2403430">one</span> <span m="2403700">from</span> <span
  m="2403940">that</span> <span m="2404150">corner,</span> <span
  m="2405090">and</span> <span m="2405290">the</span> <span
  m="2405380">line</span> <span m="2405650">between</span> <span
  m="2406010">them</span> <span m="2406160">went</span> <span
  m="2406370">outside.</span> <span m="2408260">So</span> <span
  m="2408900">union</span> <span m="2413490">is</span> <span
  m="2413700">usually</span> <span m="2416420">not</span> <span
  m="2416930">convex.</span></p><p><span m="2421990">Well,</span> <span
  m="2422250">if</span> <span m="2422350">I</span> <span
  m="2422440">think</span> <span m="2422710">of</span> <span
  m="2422770">the</span> <span m="2422920">union</span> <span
  m="2423430">of</span> <span m="2423520">two</span> <span
  m="2423760">sets,</span> <span m="2424240">my</span> <span
  m="2424480">mind</span> <span m="2425770">automatically</span> <span
  m="2426490">goes</span> <span m="2426790">to</span> <span
  m="2426880">the</span> <span m="2427300">other</span> <span
  m="2428750">corresponding</span> <span m="2429560">possibility</span> <span
  m="2430430">which</span> <span m="2430730">is</span> <span
  m="2431360">the</span> <span m="2434020">intersection</span> <span
  m="2434950">of</span> <span m="2435070">the</span> <span
  m="2435220">two</span> <span m="2435460">sets.</span> <span
  m="2436540">So</span> <span m="2436690">if</span> <span m="2436810">I</span>
  <span m="2436930">take</span> <span m="2437200">the</span> <span
  m="2437350">intersection</span> <span m="2438270">of</span> <span
  m="2438430">two</span> <span m="2438907">sets.</span> <span
  m="2443680">Now,</span> <span m="2443980">what's</span> <span
  m="2444280">the</span> <span m="2444370">deal</span> <span
  m="2444610">with</span> <span m="2444820">that?</span> <span
  m="2446890">When</span> <span m="2447130">I</span> <span
  m="2447250">had</span> <span m="2447460">two</span> <span
  m="2447730">triangles,</span> <span m="2448960">two</span> <span
  m="2449200">separated</span> <span m="2449860">triangles,</span> <span
  m="2450670">what</span> <span m="2451900">can</span> <span
  m="2452140">we</span> <span m="2452320">say</span> <span
  m="2452680">about</span> <span m="2453010">the</span> <span
  m="2453460">intersection</span> <span m="2454180">of</span> <span
  m="2454270">those</span> <span m="2454540">two</span> <span
  m="2454780">triangles?</span></p><p><span m="2455440">AUDIENCE:</span> <span
  m="2455665">[INAUDIBLE]</span></p><p><span m="2456790">GILBERT STRANG:</span>
  <span m="2456880">It's</span> <span m="2456970">empty.</span> <span
  m="2458510">So</span> <span m="2458690">should</span> <span
  m="2458840">we</span> <span m="2459110">regard</span> <span
  m="2459620">the</span> <span m="2459830">empty</span> <span
  m="2460220">set</span> <span m="2460520">as</span> <span m="2460640">a</span>
  <span m="2460700">convex</span> <span m="2461210">set?</span> <span
  m="2462380">Yes.</span> <span m="2463950">Isn't</span> <span
  m="2464180">it?</span></p><p><span m="2464797">AUDIENCE:</span> <span
  m="2465045">Yeah,</span> <span m="2465294">it's</span> <span
  m="2465791">vacuous.</span></p><p><span m="2466290">GILBERT STRANG:</span>
  <span m="2466462">Vacuous,</span> <span m="2468150">so</span> <span
  m="2468450">it</span> <span m="2468510">hasn't</span> <span
  m="2468780">got</span> <span m="2468970">any</span> <span
  m="2469120">problems.</span> <span m="2469770">Right?</span> <span
  m="2471430">OK,</span> <span m="2472470">but</span> <span
  m="2472650">now</span> <span m="2473100">the</span> <span
  m="2473250">intersection</span> <span m="2474540">is</span> <span
  m="2475980">always</span> <span m="2477600">convex.</span> <span
  m="2478770">I'm</span> <span m="2479170">assuming</span> <span
  m="2479520">the</span> <span m="2479670">two</span> <span
  m="2479940">sets</span> <span m="2480450">that</span> <span
  m="2480570">we</span> <span m="2480720">start</span> <span
  m="2481050">with</span> <span m="2481290">are.</span> <span
  m="2482640">Now,</span> <span m="2482790">that's</span> <span
  m="2483090">an</span> <span m="2483210">important</span> <span
  m="2483660">fact,</span> <span m="2485310">that</span> <span
  m="2485540">the</span> <span m="2485670">intersection</span> <span
  m="2486330">of</span> <span m="2486420">convex</span> <span
  m="2486880">sets.</span> <span m="2487140">Let's</span> <span
  m="2487350">just</span> <span m="2487650">draw</span> <span
  m="2488010">a</span> <span m="2488040">picture</span> <span
  m="2488590">that</span> <span m="2489270">shows</span> <span
  m="2489810">an</span> <span m="2489930">example.</span></p><p><span
  m="2494160">So</span> <span m="2494370">what's</span> <span
  m="2494670">the</span> <span m="2495000">intersection?</span> <span
  m="2495840">Just</span> <span m="2496140">this</span> <span
  m="2496380">part</span> <span m="2497820">and</span> <span
  m="2498000">it's</span> <span m="2498180">convex.</span> <span
  m="2499560">OK,</span> <span m="2500010">can</span> <span
  m="2500280">you</span> <span m="2500400">give</span> <span
  m="2500580">me</span> <span m="2500760">a</span> <span
  m="2500820">little</span> <span m="2501060">proof</span> <span
  m="2502480">that</span> <span m="2503020">the</span> <span
  m="2504310">intersection</span> <span m="2507340">is</span> <span
  m="2507550">convex?</span> <span m="2508670">So</span> <span
  m="2508720">I</span> <span m="2508810">take</span> <span
  m="2509080">two</span> <span m="2509290">points</span> <span
  m="2509710">in</span> <span m="2509830">the</span> <span
  m="2509950">intersection--</span> <span m="2511060">let</span> <span
  m="2511210">me</span> <span m="2511330">start</span> <span
  m="2511690">the</span> <span m="2511820">proof.</span></p><p><span
  m="2514070">To</span> <span m="2514540">test</span> <span
  m="2515000">if</span> <span m="2515120">something's</span> <span
  m="2515660">convex,</span> <span m="2516320">how</span> <span
  m="2516470">do</span> <span m="2516560">you</span> <span
  m="2516650">test</span> <span m="2517010">it?</span> <span
  m="2517550">You</span> <span m="2517670">take</span> <span
  m="2517970">two</span> <span m="2518210">points</span> <span
  m="2519440">in</span> <span m="2519560">the</span> <span
  m="2519680">set</span> <span m="2520130">in</span> <span
  m="2520250">the</span> <span m="2520370">intersection,</span> <span
  m="2521570">and</span> <span m="2521690">you</span> <span
  m="2521780">want</span> <span m="2521960">to</span> <span
  m="2522050">show</span> <span m="2522290">that</span> <span
  m="2522470">the</span> <span m="2522590">line</span> <span
  m="2522920">between</span> <span m="2523370">them</span> <span
  m="2523580">is</span> <span m="2525440">in</span> <span m="2525650">the</span>
  <span m="2525800">intersection.</span> <span m="2526850">OK,</span> <span
  m="2527270">why</span> <span m="2527540">is</span> <span
  m="2527630">that?</span></p><p><span m="2528420">So</span> <span
  m="2528590">take</span> <span m="2528860">two</span> <span
  m="2529070">points,</span> <span m="2529970">take</span> <span
  m="2530330">x1</span> <span m="2531740">in</span> <span m="2532940">the</span>
  <span m="2533090">intersection.</span> <span m="2534350">We've</span> <span
  m="2534560">got</span> <span m="2535580">two</span> <span
  m="2535940">sets</span> <span m="2536390">here,</span> <span
  m="2537110">and</span> <span m="2537230">that's</span> <span
  m="2537530">the</span> <span m="2537740">symbol</span> <span
  m="2538220">for</span> <span m="2538430">intersection,</span> <span
  m="2539560">and</span> <span m="2539690">we've</span> <span
  m="2539870">got</span> <span m="2540050">another</span> <span
  m="2540440">point</span> <span m="2540800">in</span> <span
  m="2540920">the</span> <span m="2541040">intersection.</span> <span
  m="2544640">And</span> <span m="2545060">now,</span> <span
  m="2545330">we</span> <span m="2545510">want</span> <span
  m="2545720">to</span> <span m="2545780">look</span> <span
  m="2546020">at</span> <span m="2546110">the</span> <span
  m="2546230">line</span> <span m="2546590">between</span> <span
  m="2547070">them,</span> <span m="2547950">the</span> <span
  m="2548600">line</span> <span m="2549860">from</span> <span
  m="2550630">x1</span> <span m="2551010">to</span> <span m="2551390">2x.</span>
  <span m="2553100">What's</span> <span m="2553430">the</span> <span
  m="2553550">deal</span> <span m="2553820">with</span> <span
  m="2554292">that</span> <span m="2554764">one?</span> <span
  m="2558070">Is</span> <span m="2558220">that</span> <span
  m="2558490">fully</span> <span m="2558980">in</span> <span
  m="2560020">K1?</span></p><p><span m="2561038">AUDIENCE:</span> <span
  m="2561262">Yes.</span></p><p><span m="2562830">GILBERT STRANG:</span> <span
  m="2562980">Why</span> <span m="2563130">is</span> <span m="2563280">it</span>
  <span m="2563400">fully</span> <span m="2563790">in</span> <span
  m="2563970">K1?</span> <span m="2565510">I</span> <span
  m="2565710">took</span> <span m="2566040">two</span> <span
  m="2566280">points</span> <span m="2566760">in</span> <span
  m="2566880">the</span> <span m="2567000">intersection,</span> <span
  m="2568830">I'm</span> <span m="2569100">looking</span> <span
  m="2569580">at</span> <span m="2569670">the</span> <span
  m="2569760">line</span> <span m="2570090">between</span> <span
  m="2570510">them,</span> <span m="2572040">and</span> <span
  m="2572220">I'm</span> <span m="2572370">asking,</span> <span
  m="2572850">is</span> <span m="2573030">it</span> <span m="2573180">in</span>
  <span m="2573360">the</span> <span m="2573450">first</span> <span
  m="2573780">set</span> <span m="2574020">K1?</span> <span
  m="2574680">And</span> <span m="2574830">the</span> <span
  m="2574950">answer</span> <span m="2575310">is</span> <span
  m="2576270">yes,</span> <span m="2576810">because</span> <span
  m="2577230">those</span> <span m="2577470">points</span> <span
  m="2577950">were</span> <span m="2578190">in</span> <span
  m="2578370">K1,</span> <span m="2579420">and</span> <span
  m="2579570">K1's</span> <span m="2580080">convex.</span> <span
  m="2582010">And</span> <span m="2582310">is</span> <span
  m="2582460">that</span> <span m="2582640">line</span> <span
  m="2583090">between</span> <span m="2583540">them</span> <span
  m="2583720">in</span> <span m="2583900">K2?</span> <span
  m="2585520">Yes,</span> <span m="2585910">same</span> <span
  m="2586270">reason,</span> <span m="2588440">the</span> <span
  m="2588980">two</span> <span m="2589300">endpoints</span> <span
  m="2589900">were</span> <span m="2590140">in</span> <span
  m="2590290">K2,</span> <span m="2591550">so</span> <span
  m="2591760">the</span> <span m="2591880">line</span> <span
  m="2592180">between</span> <span m="2592570">them</span> <span
  m="2592720">is</span> <span m="2592900">in</span> <span
  m="2593080">K2.</span></p><p><span m="2593890">So</span> <span
  m="2594070">the</span> <span m="2594280">intersection</span> <span
  m="2595090">of</span> <span m="2595240">convex</span> <span
  m="2595900">sets</span> <span m="2596320">is</span> <span
  m="2596500">always</span> <span m="2596920">convex.</span> <span
  m="2597490">The</span> <span m="2597610">intersection</span> <span
  m="2598780">of</span> <span m="2599740">convex</span> <span
  m="2601600">sets</span> <span m="2602380">is</span> <span
  m="2602560">convex.</span> <span m="2603190">Good.</span> <span
  m="2606420">So</span> <span m="2606760">you'll</span> <span
  m="2607290">see</span> <span m="2607590">in</span> <span
  m="2607710">the</span> <span m="2607800">note</span> <span
  m="2608230">these</span> <span m="2608700">possibilities</span> <span
  m="2609570">with</span> <span m="2609720">two</span> <span
  m="2609960">triangles.</span> <span m="2611560">Sometimes,</span> <span
  m="2612120">you</span> <span m="2612240">can</span> <span
  m="2613530">take</span> <span m="2613830">the</span> <span
  m="2613980">union</span> <span m="2614460">but</span> <span
  m="2614610">not</span> <span m="2614850">very</span> <span
  m="2615090">often.</span> <span m="2615770">OK.</span></p><p><span
  m="2616590">Now,</span> <span m="2617100">what's</span> <span
  m="2617510">the</span> <span m="2617970">next</span> <span
  m="2618240">thing</span> <span m="2618420">I</span> <span
  m="2618510">have</span> <span m="2618660">to</span> <span
  m="2618780">do?</span> <span m="2621130">Convex</span> <span
  m="2622860">functions,</span> <span m="2623910">we</span> <span
  m="2624120">got</span> <span m="2624330">convex</span> <span
  m="2624820">sets,</span> <span m="2625230">what are</span> <span
  m="2625530">convex</span> <span m="2626100">functions,</span> <span
  m="2626640">and</span> <span m="2626790">we're</span> <span
  m="2627000">good.</span> <span m="2628590">Because</span> <span
  m="2628800">this</span> <span m="2630210">is</span> <span
  m="2630360">our</span> <span m="2630600">prototype</span> <span
  m="2631410">of</span> <span m="2631560">a</span> <span
  m="2631620">problem,</span> <span m="2633140">and</span> <span
  m="2633270">I</span> <span m="2633390">now</span> <span
  m="2633710">want</span> <span m="2633810">to</span> <span
  m="2633920">know</span> <span m="2634170">what</span> <span
  m="2634380">it</span> <span m="2634440">means</span> <span
  m="2635640">for</span> <span m="2635820">that</span> <span
  m="2636120">F</span> <span m="2636420">to</span> <span m="2636570">be--</span>
  <span m="2637930">oh,</span> <span m="2638090">I'm</span> <span
  m="2638190">sorry.</span> <span m="2638640">I</span> <span
  m="2638730">now</span> <span m="2639000">know</span> <span
  m="2639240">what</span> <span m="2639480">it</span> <span
  m="2639570">means</span> <span m="2639960">for</span> <span
  m="2640190">the</span> <span m="2640360">set</span> <span m="2640820">K</span>
  <span m="2641190">to</span> <span m="2641310">be</span> <span
  m="2641670">convex</span> <span m="2642210">set,</span> <span
  m="2643920">but</span> <span m="2644130">now</span> <span m="2644400">I</span>
  <span m="2644460">have</span> <span m="2644670">to</span> <span
  m="2644790">look</span> <span m="2645150">at</span> <span
  m="2645270">the</span> <span m="2645480">other</span> <span
  m="2646440">often</span> <span m="2646800">more</span> <span
  m="2647040">important</span> <span m="2647460">part</span> <span
  m="2647670">of</span> <span m="2647730">the</span> <span
  m="2647820">problem.</span> <span m="2648150">What's</span> <span
  m="2648480">the</span> <span m="2648600">function</span> <span
  m="2649140">I'm</span> <span m="2649290">minimizing,</span> <span
  m="2650550">and</span> <span m="2650790">I'm</span> <span
  m="2651420">looking</span> <span m="2651810">for</span> <span
  m="2652020">functions</span> <span m="2652710">with</span> <span
  m="2653400">this</span> <span m="2653640">kind</span> <span
  m="2653910">of</span> <span m="2654030">a</span> <span
  m="2654090">picture.</span> <span m="2655110">OK.</span></p><p><span
  m="2656610">The</span> <span m="2656940">coolest</span> <span
  m="2657630">way</span> <span m="2659040">is</span> <span m="2659250">to</span>
  <span m="2659370">connect</span> <span m="2660870">the</span> <span
  m="2661020">definition</span> <span m="2661800">of</span> <span
  m="2661950">a</span> <span m="2662010">convex</span> <span
  m="2662580">function</span> <span m="2664920">to</span> <span
  m="2665100">the</span> <span m="2665250">definition</span> <span
  m="2665940">of</span> <span m="2666030">a</span> <span
  m="2666120">convex</span> <span m="2666690">set.</span> <span
  m="2668340">This</span> <span m="2668610">is</span> <span
  m="2669930">really</span> <span m="2670260">the</span> <span
  m="2670410">nicest</span> <span m="2670980">way.</span> <span
  m="2671820">It's</span> <span m="2672000">a</span> <span
  m="2672060">little</span> <span m="2672300">quick.</span> <span
  m="2672780">It</span> <span m="2672840">just</span> <span
  m="2673200">swishes</span> <span m="2673650">by</span> <span
  m="2674080">you.</span> <span m="2674610">But</span> <span
  m="2675450">tell</span> <span m="2675660">me,</span> <span
  m="2676020">do</span> <span m="2676110">you</span> <span
  m="2676260">see</span> <span m="2676440">a</span> <span
  m="2676530">convex</span> <span m="2677070">set</span> <span
  m="2677400">in</span> <span m="2677550">that</span> <span
  m="2677730">picture?</span> <span m="2678240">[INAUDIBLE]</span></p><p><span
  m="2680930">You</span> <span m="2681140">see</span> <span m="2681350">a</span>
  <span m="2681440">convex</span> <span m="2681980">set</span> <span
  m="2682280">in</span> <span m="2682400">that</span> <span
  m="2682670">picture.</span> <span m="2683550">That's</span> <span
  m="2683780">the</span> <span m="2683840">picture</span> <span
  m="2684290">of</span> <span m="2684440">a</span> <span
  m="2684500">graph</span> <span m="2684950">of</span> <span
  m="2685100">a</span> <span m="2685190">convex</span> <span
  m="2685820">function.</span> <span m="2686300">It's</span> <span
  m="2686450">a</span> <span m="2686510">picture</span> <span
  m="2686870">of</span> <span m="2686990">a</span> <span
  m="2687080">bowl.</span> <span m="2688850">Are</span> <span
  m="2688970">the</span> <span m="2689090">points</span> <span
  m="2689540">on</span> <span m="2689720">that</span> <span
  m="2689930">surface,</span> <span m="2690560">is</span> <span
  m="2690710">that</span> <span m="2690890">a</span> <span
  m="2690950">convex</span> <span m="2691530">set?</span> <span
  m="2693400">No,</span> <span m="2693760">certainly</span> <span
  m="2694240">not.</span> <span m="2695650">No,</span> <span
  m="2696430">but</span> <span m="2697630">where</span> <span
  m="2697990">is</span> <span m="2698460">a</span> <span
  m="2698560">convex</span> <span m="2699070">set</span> <span
  m="2699340">to</span> <span m="2699460">be</span> <span
  m="2699640">found</span> <span m="2700120">here,</span> <span
  m="2700990">in</span> <span m="2701140">that</span> <span
  m="2701350">picture?</span> <span m="2703310">Yes.</span></p><p><span
  m="2704290">AUDIENCE:</span> <span m="2704453">The</span> <span
  m="2704616">set</span> <span m="2704780">of y,</span> <span m="2705270">if y
  is</span> <span m="2705760">greater</span> <span m="2706250">than</span> <span
  m="2706740">[INAUDIBLE]</span></p><p><span m="2707230">GILBERT STRANG:</span>
  <span m="2707387">Yes,</span> <span m="2707860">the</span> <span
  m="2708010">points</span> <span m="2708640">on</span> <span
  m="2709210">and</span> <span m="2709450">above</span> <span
  m="2710530">the</span> <span m="2710650">bowl,</span> <span
  m="2711210">inside</span> <span m="2712270">the</span> <span
  m="2712420">bowl,</span> <span m="2712810">we</span> <span
  m="2712990">could</span> <span m="2713200">say,</span> <span
  m="2713650">these</span> <span m="2713980">points.</span> <span
  m="2716470">So</span> <span m="2716680">convex</span> <span
  m="2717880">function,</span> <span m="2719860">yes,</span> <span
  m="2720730">a</span> <span m="2721000">function's</span> <span
  m="2721600">convex</span> <span m="2722890">when</span> <span
  m="2723820">the</span> <span m="2725110">points</span> <span
  m="2727030">on</span> <span m="2727810">and</span> <span
  m="2729070">above</span> <span m="2729790">the</span> <span
  m="2729940">graph</span> <span m="2734660">are</span> <span
  m="2736340">convex</span> <span m="2736970">set.</span> <span
  m="2748650">You</span> <span m="2748770">could</span> <span
  m="2748950">say,</span> <span m="2749180">OK,</span> <span
  m="2750010">mathematicians</span> <span m="2751110">are</span> <span
  m="2751200">just</span> <span m="2751410">being</span> <span
  m="2751590">lazy.</span> <span m="2752100">Having</span> <span
  m="2752760">got</span> <span m="2753000">one</span> <span
  m="2753270">definition</span> <span m="2753900">straight</span> <span
  m="2754290">for</span> <span m="2754440">a</span> <span
  m="2754510">convex</span> <span m="2754920">set,</span> <span
  m="2755190">now</span> <span m="2755370">they're</span> <span
  m="2755550">just</span> <span m="2756210">using</span> <span
  m="2756600">that</span> <span m="2756910">to</span> <span
  m="2757320">give</span> <span m="2757590">an</span> <span
  m="2757760">easy</span> <span m="2758700">definition</span> <span
  m="2759045">of</span> <span m="2759390">a</span> <span
  m="2759540">convex</span> <span m="2760070">function.</span> <span
  m="2760930">Actually,</span> <span m="2761460">it's</span> <span
  m="2761880">quite</span> <span m="2762210">useful</span> <span
  m="2763320">for</span> <span m="2763560">functions</span> <span
  m="2764190">that</span> <span m="2764400">could</span> <span
  m="2764670">maybe</span> <span m="2765060">equal</span> <span
  m="2765510">infinity,</span> <span m="2766260">sort</span> <span
  m="2766530">of</span> <span m="2767610">generalized</span> <span
  m="2768330">functions.</span></p><p><span m="2769080">But</span> <span
  m="2769260">it's</span> <span m="2769470">not</span> <span
  m="2769950">the</span> <span m="2770100">quickest</span> <span
  m="2770640">way</span> <span m="2771120">to</span> <span
  m="2771330">tell</span> <span m="2772320">if</span> <span
  m="2773340">the</span> <span m="2773460">function</span> <span
  m="2773940">is</span> <span m="2774120">convex.</span> <span
  m="2775260">It's</span> <span m="2775410">not</span> <span
  m="2775770">our</span> <span m="2775920">usual</span> <span
  m="2776940">test</span> <span m="2777390">for</span> <span
  m="2777990">convex</span> <span m="2778620">functions.</span> <span
  m="2779070">So</span> <span m="2779250">now</span> <span m="2779460">I</span>
  <span m="2779580">want</span> <span m="2779790">to</span> <span
  m="2779880">give</span> <span m="2780450">such</span> <span
  m="2780780">a</span> <span m="2780840">test.</span> <span
  m="2781770">OK.</span> <span m="2784740">So</span> <span
  m="2784890">now,</span> <span m="2785160">the</span> <span
  m="2785430">definition</span> <span m="2787530">of</span> <span
  m="2788770">convex</span> <span m="2789300">function,</span> <span
  m="2793010">of</span> <span m="2793280">a</span> <span
  m="2794150">smooth</span> <span m="2794930">convex,</span> <span
  m="2796320">yeah.</span> <span m="2799640">This</span> <span
  m="2800090">fact,</span> <span m="2801250">I</span> <span
  m="2801660">shouldn't</span> <span m="2802220">rush</span> <span
  m="2802730">off</span> <span m="2803270">away</span> <span
  m="2803690">from</span> <span m="2804190">it,</span> <span
  m="2805190">from</span> <span m="2805690">the</span> <span
  m="2809430">definition</span> <span m="2809770">of</span> <span
  m="2810110">a</span> <span m="2810240">convex</span> <span
  m="2810990">function</span> <span m="2811560">as</span> <span
  m="2811770">having</span> <span m="2812190">a</span> <span
  m="2812670">convex</span> <span m="2813270">set</span> <span
  m="2813690">above</span> <span m="2814050">its</span> <span
  m="2814260">graph.</span> <span m="2815020">The</span> <span
  m="2815550">really</span> <span m="2816030">official</span> <span
  m="2816540">French</span> <span m="2816960">name</span> <span
  m="2817350">for</span> <span m="2817620">the</span> <span
  m="2818190">set</span> <span m="2818520">above</span> <span
  m="2818850">the</span> <span m="2818940">graph</span> <span
  m="2819450">is</span> <span m="2819660">the</span> <span
  m="2819980">epigraph,</span> <span m="2821200">but</span> <span
  m="2821610">I</span> <span m="2821730">won't</span> <span
  m="2821970">even</span> <span m="2822180">write</span> <span
  m="2822420">that</span> <span m="2822600">word</span> <span
  m="2822890">down.</span> <span m="2823780">OK.</span></p><p><span
  m="2825690">Why</span> <span m="2825960">do</span> <span m="2826140">I</span>
  <span m="2826260">come</span> <span m="2826470">back</span> <span
  m="2826710">to</span> <span m="2826800">that</span> <span
  m="2826980">for</span> <span m="2827130">a</span> <span
  m="2827160">minute?</span> <span m="2828300">Because</span> <span
  m="2828690">I</span> <span m="2828840">would</span> <span
  m="2829020">like</span> <span m="2829260">to</span> <span
  m="2829380">think</span> <span m="2829980">about</span> <span
  m="2833450">two</span> <span m="2833690">functions,</span> <span
  m="2834350">F1</span> <span m="2835140">and</span> <span
  m="2835280">F2.</span> <span m="2836720">Out</span> <span
  m="2836900">of</span> <span m="2837020">two</span> <span
  m="2837260">functions,</span> <span m="2837990">I</span> <span
  m="2838040">can</span> <span m="2838220">always</span> <span
  m="2838640">create</span> <span m="2839340">the</span> <span
  m="2839450">minimum</span> <span m="2840710">or</span> <span
  m="2840890">the</span> <span m="2841040">maximum.</span></p><p><span
  m="2843140">So</span> <span m="2843500">suppose</span> <span
  m="2843980">I</span> <span m="2844100">have</span> <span m="2844220">to</span>
  <span m="2844520">convex</span> <span m="2845210">functions,</span> <span
  m="2846200">convex</span> <span m="2848510">function</span> <span
  m="2848795">F1</span> <span m="2849920">and</span> <span
  m="2850250">F2.</span> <span m="2854440">OK.</span> <span
  m="2855050">Then,</span> <span m="2855320">I</span> <span
  m="2855470">could</span> <span m="2855680">choose</span> <span
  m="2856850">a</span> <span m="2856970">minimum.</span> <span
  m="2858840">I</span> <span m="2858960">could</span> <span
  m="2859110">choose</span> <span m="2859440">my</span> <span
  m="2859650">new</span> <span m="2859890">function.</span> <span
  m="2861450">Shall</span> <span m="2861720">I</span> <span
  m="2861810">call</span> <span m="2862080">it</span> <span
  m="2862170">little</span> <span m="2862610">m</span> <span
  m="2862920">for</span> <span m="2863130">minimum?</span> <span
  m="2864090">m</span> <span m="2864300">of</span> <span m="2864450">x</span>
  <span m="2865620">is</span> <span m="2865890">the</span> <span
  m="2865950">minimum</span> <span m="2867150">of</span> <span
  m="2867660">F1</span> <span m="2868570">and</span> <span
  m="2868680">F2.</span></p><p><span m="2871340">And</span> <span
  m="2871530">I</span> <span m="2871650">could</span> <span
  m="2871830">choose</span> <span m="2872130">a</span> <span
  m="2872430">maximum</span> <span m="2873180">function</span> <span
  m="2874380">which</span> <span m="2874620">would</span> <span
  m="2874770">be</span> <span m="2874950">the</span> <span
  m="2875070">maximum</span> <span m="2876480">of</span> <span
  m="2876920">F1</span> <span m="2877440">of</span> <span m="2877590">x</span>
  <span m="2878375">and</span> <span m="2878710">F2</span> <span
  m="2879330">of</span> <span m="2879490">x</span> <span m="2880620">at</span>
  <span m="2880800">the</span> <span m="2880920">same</span> <span
  m="2881580">point</span> <span m="2881970">x.</span> <span
  m="2883870">It's</span> <span m="2884130">just</span> <span
  m="2884340">a</span> <span m="2884370">natural</span> <span
  m="2884655">to</span> <span m="2884940">think,</span> <span
  m="2885360">OK,</span> <span m="2885650">I have</span> <span
  m="2885780">two</span> <span m="2886010">functions.</span> <span
  m="2887280">I've</span> <span m="2887400">got</span> <span
  m="2887610">a</span> <span m="2887670">bowl</span> <span
  m="2888180">and</span> <span m="2888330">I've</span> <span
  m="2888450">got</span> <span m="2888660">another</span> <span
  m="2889020">bowl,</span> <span m="2891360">and</span> <span
  m="2891510">suppose</span> <span m="2891930">they're</span> <span
  m="2892050">both</span> <span m="2892290">convex.</span></p><p><span
  m="2898030">So</span> <span m="2898190">I'm</span> <span
  m="2898280">just</span> <span m="2898490">stretching</span> <span
  m="2898745">you</span> <span m="2899000">to</span> <span
  m="2899120">think</span> <span m="2899390">here.</span> <span
  m="2900472">If</span> <span m="2900850">I've</span> <span
  m="2901040">got</span> <span m="2901910">the</span> <span
  m="2902000">graphs</span> <span m="2902420">of</span> <span
  m="2902540">two</span> <span m="2902840">convex</span> <span
  m="2903410">functions,</span> <span m="2905060">and</span> <span
  m="2905330">I</span> <span m="2905570">would</span> <span
  m="2906020">like</span> <span m="2906260">to</span> <span
  m="2906380">consider</span> <span m="2907040">the</span> <span
  m="2907190">minimum</span> <span m="2908090">of</span> <span
  m="2908210">those</span> <span m="2908480">two</span> <span
  m="2908660">functions</span> <span m="2909560">and</span> <span
  m="2909710">also</span> <span m="2910130">the</span> <span
  m="2910250">maximum</span> <span m="2910940">of</span> <span
  m="2911060">those</span> <span m="2911360">two</span> <span
  m="2911540">functions.</span> <span m="2912150">I</span> <span
  m="2912200">believe</span> <span m="2913430">life</span> <span
  m="2913790">is</span> <span m="2913940">good.</span> <span
  m="2914730">One</span> <span m="2915080">of</span> <span
  m="2915230">these</span> <span m="2915560">will</span> <span
  m="2915800">be</span> <span m="2916010">convex,</span> <span
  m="2916610">and</span> <span m="2916760">the</span> <span
  m="2916910">other</span> <span m="2917180">won't.</span></p><p><span
  m="2918830">And</span> <span m="2919040">can</span> <span
  m="2919370">you</span> <span m="2919580">identify</span> <span
  m="2920330">which</span> <span m="2920690">one</span> <span
  m="2921050">is</span> <span m="2921350">convex</span> <span
  m="2921980">and</span> <span m="2922100">which</span> <span
  m="2922340">one</span> <span m="2922610">is</span> <span
  m="2922790">not</span> <span m="2923045">convex?</span> <span
  m="2926310">What</span> <span m="2926490">about</span> <span
  m="2926790">the</span> <span m="2926940">minimum?</span> <span
  m="2929100">Is</span> <span m="2929280">that</span> <span m="2929490">a</span>
  <span m="2929580">convex</span> <span m="2930210">function?</span> <span
  m="2930690">So</span> <span m="2930870">just</span> <span
  m="2931170">look</span> <span m="2931380">at</span> <span
  m="2931500">the</span> <span m="2931590">graph.</span> <span
  m="2932470">What</span> <span m="2932550">does</span> <span
  m="2932670">the</span> <span m="2932760">minimum</span> <span
  m="2933270">look</span> <span m="2933510">like?</span> <span
  m="2934110">The</span> <span m="2934200">minimum</span> <span
  m="2934710">is</span> <span m="2934890">this</span> <span
  m="2935250">guy</span> <span m="2936540">until</span> <span
  m="2936870">they</span> <span m="2937050">meet</span> <span
  m="2937560">somehow</span> <span m="2938250">on</span> <span
  m="2938400">some</span> <span m="2938670">surface</span> <span
  m="2939690">and</span> <span m="2939810">then</span> <span
  m="2940020">this</span> <span m="2940320">guy.</span></p><p><span
  m="2941190">Is</span> <span m="2941360">that</span> <span
  m="2941520">convex?</span> <span m="2942240">We</span> <span
  m="2942420">have</span> <span m="2942690">like</span> <span
  m="2942930">one</span> <span m="2943170">minute</span> <span
  m="2943470">to</span> <span m="2943650">answer</span> <span
  m="2943920">that</span> <span m="2944100">question.</span> <span
  m="2945900">Absolutely</span> <span m="2946690">no.</span> <span
  m="2947160">It's</span> <span m="2947310">got</span> <span
  m="2947550">this</span> <span m="2948300">bad</span> <span
  m="2948750">kink</span> <span m="2949230">in</span> <span
  m="2949380">it.</span> <span m="2950370">What</span> <span
  m="2950550">about</span> <span m="2950820">the</span> <span
  m="2950970">maximum</span> <span m="2952590">of</span> <span
  m="2952710">the</span> <span m="2952830">two</span> <span
  m="2953070">functions?</span> <span m="2954220">So</span> <span
  m="2954300">the</span> <span m="2954420">maximum</span> <span
  m="2955140">is</span> <span m="2955290">the</span> <span
  m="2955410">one</span> <span m="2955710">that</span> <span
  m="2955800">is</span> <span m="2955950">above,</span> <span
  m="2956490">all</span> <span m="2958230">the</span> <span
  m="2958290">points</span> <span m="2958860">or</span> <span
  m="2959910">things</span> <span m="2960300">that</span> <span
  m="2960420">are</span> <span m="2960510">above</span> <span
  m="2961230">or</span> <span m="2961860">on.</span></p><p><span
  m="2966010">There</span> <span m="2966230">is</span> <span
  m="2966330">the</span> <span m="2966450">maximum</span> <span
  m="2967050">function.</span> <span m="2967770">That</span> <span
  m="2968040">was</span> <span m="2968310">the</span> <span
  m="2968430">minimum</span> <span m="2968910">function.</span> <span
  m="2969990">It</span> <span m="2970170">had</span> <span m="2970410">a</span>
  <span m="2970710">kink.</span> <span m="2971460">The</span> <span
  m="2971550">maximum</span> <span m="2972120">function</span> <span
  m="2972570">is</span> <span m="2972720">like</span> <span
  m="2972960">that,</span> <span m="2973380">and</span> <span
  m="2973770">it</span> <span m="2975120">is</span> <span
  m="2975430">convex,</span> <span m="2976890">so</span> <span
  m="2977730">maximum</span> <span m="2978930">yes,</span> <span
  m="2980660">minimum</span> <span m="2981240">no.</span> <span
  m="2984310">OK,</span> <span m="2985580">and</span> <span
  m="2985850">we</span> <span m="2986060">could</span> <span
  m="2987260">have</span> <span m="2987430">a</span> <span
  m="2987490">maximum</span> <span m="2988130">of</span> <span
  m="2988640">1,500</span> <span m="2989540">functions.</span> <span
  m="2990740">If</span> <span m="2990950">the</span> <span
  m="2991070">1,500</span> <span m="2991790">functions</span> <span
  m="2992300">are</span> <span m="2992390">all</span> <span
  m="2992600">convex,</span> <span m="2993800">the</span> <span
  m="2993890">maximum</span> <span m="2994490">will</span> <span
  m="2994730">be,</span> <span m="2994970">because</span> <span
  m="2995390">it's</span> <span m="2995600">the</span> <span
  m="2995720">part</span> <span m="2996300">way</span> <span
  m="2996710">above</span> <span m="2998450">everybody's</span> <span
  m="2999080">graph,</span> <span m="3000520">and</span> <span
  m="3001120">that</span> <span m="3001330">would</span> <span
  m="3001450">be</span> <span m="3001690">the</span> <span
  m="3002320">graph</span> <span m="3002590">of</span> <span
  m="3002710">the</span> <span m="3002830">maximum.</span> <span
  m="3003580">OK,</span> <span m="3004420">good.</span></p><p><span
  m="3005410">And</span> <span m="3005590">now</span> <span
  m="3007900">finally,</span> <span m="3009400">let</span> <span
  m="3009550">me</span> <span m="3009670">just</span> <span
  m="3009940">say,</span> <span m="3010480">how</span> <span
  m="3010750">do</span> <span m="3010840">you</span> <span
  m="3010960">know</span> <span m="3011260">whether</span> <span
  m="3011620">a</span> <span m="3011710">function</span> <span
  m="3012190">is</span> <span m="3012340">convex?</span> <span
  m="3013480">How</span> <span m="3013690">to</span> <span
  m="3013810">test,</span> <span m="3015760">how</span> <span
  m="3016000">of</span> <span m="3016100">test.</span> <span
  m="3020330">OK,</span> <span m="3020870">so</span> <span
  m="3021110">let</span> <span m="3021260">me</span> <span
  m="3021410">take</span> <span m="3021680">just</span> <span
  m="3021980">a</span> <span m="3022040">function</span> <span
  m="3022490">of</span> <span m="3022610">one</span> <span
  m="3022970">variable.</span> <span m="3024890">What's</span> <span
  m="3025220">the</span> <span m="3025370">test</span> <span
  m="3025790">you</span> <span m="3025910">learned</span> <span
  m="3026220">in</span> <span m="3026390">calculus,</span> <span
  m="3027620">freshman</span> <span m="3028130">calculus</span> <span
  m="3028800">actually,</span> <span m="3029720">just</span> <span
  m="3030110">show</span> <span m="3030580">that</span> <span
  m="3031028">this</span> <span m="3034170">is</span> <span m="3034440">a</span>
  <span m="3034680">convex</span> <span m="3035340">function?</span> <span
  m="3036360">What's</span> <span m="3036720">the</span> <span
  m="3037260">test</span> <span m="3037710">for</span> <span
  m="3037890">that?</span></p><p><span m="3038542">AUDIENCE:</span> <span
  m="3038748">Use</span> <span m="3038954">second</span> <span
  m="3039366">derivative.</span></p><p><span m="3040190">GILBERT STRANG:</span>
  <span m="3040400">Second</span> <span m="3040610">derivative</span> <span
  m="3041160">should</span> <span m="3041390">be?</span></p><p><span
  m="3041900">AUDIENCE:</span> <span m="3042095">Positive.</span></p><p><span
  m="3042680">GILBERT STRANG:</span> <span m="3042815">Positive</span> <span
  m="3043490">or</span> <span m="3043670">possibly</span> <span
  m="3044300">0,</span> <span m="3045200">so</span> <span
  m="3045770">second</span> <span m="3046160">derivative</span> <span
  m="3049360">greater</span> <span m="3049630">or</span> <span
  m="3049880">equals</span> <span m="3050240">0</span> <span
  m="3050990">everywhere.</span> <span m="3053360">That's</span> <span
  m="3054030">convex.</span> <span m="3057480">OK,</span> <span
  m="3058150">final</span> <span m="3058630">question,</span> <span
  m="3059690">suppose</span> <span m="3060250">F</span> <span
  m="3060550">is</span> <span m="3060700">a</span> <span
  m="3060790">vector.</span> <span m="3062920">So</span> <span
  m="3063160">this</span> <span m="3063400">is</span> <span m="3063580">a</span>
  <span m="3063670">vector,</span> <span m="3065740">and</span> <span
  m="3066760">so</span> <span m="3066940">I</span> <span m="3067030">have</span>
  <span m="3067240">n</span> <span m="3067540">functions</span> <span
  m="3068080">of</span> <span m="3068230">n</span> <span
  m="3068440">variable.</span> <span m="3069370">No,</span> <span
  m="3069610">I</span> <span m="3069700">don't.</span> <span m="3070020">I
  have</span> <span m="3070110">one,</span> <span m="3070990">sorry,</span>
  <span m="3071290">I've</span> <span m="3071460">got</span> <span
  m="3071680">one</span> <span m="3071980">function,</span> <span
  m="3074030">but</span> <span m="3074170">I'm</span> <span
  m="3074250">in</span> <span m="3074590">n</span> <span
  m="3074800">variables.</span> <span m="3079510">So</span> <span
  m="3079970">this</span> <span m="3080150">was</span> <span
  m="3080330">just</span> <span m="3080510">one.</span></p><p><span
  m="3081680">What's</span> <span m="3081980">the</span> <span
  m="3082130">test</span> <span m="3082490">for</span> <span
  m="3082670">convexity?</span> <span m="3087350">So</span> <span
  m="3087590">it</span> <span m="3087680">would</span> <span
  m="3087860">be</span> <span m="3088010">passed,</span> <span
  m="3088520">for</span> <span m="3088730">example,</span> <span
  m="3089330">by</span> <span m="3090740">x1</span> <span
  m="3091340">squared</span> <span m="3092120">plus</span> <span
  m="3092570">x2</span> <span m="3093080">squared.</span> <span
  m="3095150">Would</span> <span m="3095420">it</span> <span
  m="3095570">be</span> <span m="3095750">passed</span> <span
  m="3096350">by--</span> <span m="3097730">so</span> <span m="3097940">here
  would</span> <span m="3098180">be</span> <span m="3098360">the</span> <span
  m="3098480">question--</span> <span m="3099020">would</span> <span
  m="3099240">it</span> <span m="3099350">be</span> <span
  m="3099530">passed</span> <span m="3100010">by</span> <span
  m="3100820">x</span> <span m="3101150">transpose</span> <span
  m="3102680">some</span> <span m="3103040">symmetric</span> <span
  m="3103790">matrix</span> <span m="3104410">S?</span> <span
  m="3105830">That</span> <span m="3106010">would</span> <span
  m="3106250">be</span> <span m="3106520">a</span> <span
  m="3107660">quadratic,</span> <span m="3108065">a</span> <span
  m="3108470">pure</span> <span m="3108830">quadratic.</span></p><p><span
  m="3111000">Would</span> <span m="3111240">it</span> <span
  m="3111360">be</span> <span m="3111630">convex?</span> <span
  m="3113760">What</span> <span m="3113970">would</span> <span
  m="3114120">be</span> <span m="3114360">the</span> <span
  m="3114510">test?</span> <span m="3117500">I'm</span> <span
  m="3117680">looking</span> <span m="3118100">for</span> <span
  m="3118310">an</span> <span m="3118460">n</span> <span
  m="3118730">dimensional</span> <span m="3119600">equivalent</span> <span
  m="3120350">of</span> <span m="3121550">positive</span> <span
  m="3122030">second</span> <span m="3122420">derivative.</span> <span
  m="3124460">The</span> <span m="3124580">n</span> <span
  m="3124880">dimensional</span> <span m="3125360">equivalent</span> <span
  m="3125870">of</span> <span m="3125960">positive</span> <span
  m="3126470">second</span> <span m="3126830">derivative</span> <span
  m="3127370">is</span> <span m="3127640">convexity,</span> <span
  m="3128540">and</span> <span m="3128690">we</span> <span
  m="3129380">have</span> <span m="3129530">to</span> <span
  m="3129980">recognize</span> <span m="3131000">what's</span> <span
  m="3131330">the</span> <span m="3131450">test.</span> <span
  m="3132560">So</span> <span m="3132770">I</span> <span
  m="3132860">could</span> <span m="3133070">apply</span> <span
  m="3133430">it</span> <span m="3133520">to</span> <span
  m="3133670">this</span> <span m="3133970">function,</span> <span
  m="3134990">or</span> <span m="3135170">I</span> <span
  m="3135410">could</span> <span m="3135680">apply</span> <span
  m="3136070">it</span> <span m="3136130">to</span> <span m="3136310">any</span>
  <span m="3136670">function</span> <span m="3137690">of</span> <span
  m="3139220">n</span> <span m="3139460">variables.</span> <span
  m="3144170">It</span> <span m="3144260">should</span> <span
  m="3144460">be</span> <span m="3144910">OK.</span></p><p><span
  m="3147960">What's</span> <span m="3148350">the</span> <span
  m="3148500">test</span> <span m="3148950">here?</span> <span
  m="3149220">Here,</span> <span m="3149430">I</span> <span
  m="3149550">have</span> <span m="3149700">a</span> <span
  m="3149760">matrix</span> <span m="3150480">instead</span> <span
  m="3150960">of</span> <span m="3151140">a</span> <span
  m="3151860">number.</span> <span m="3153340">So</span> <span
  m="3153540">what's</span> <span m="3153990">the</span> <span
  m="3156120">requirement</span> <span m="3156690">going</span> <span
  m="3156840">to</span> <span m="3156930">be?</span> <span
  m="3158090">Times</span> <span m="3158570">out,</span> <span
  m="3158880">yeah?</span> <span m="3159527">[INAUDIBLE]</span> <span
  m="3160990">Positive</span> <span m="3161590">definite</span> <span
  m="3162100">or</span> <span m="3162310">semidefinite,</span> <span
  m="3163380">or</span> <span m="3163765">semidefinite</span> <span
  m="3164440">just</span> <span m="3164760">as</span> <span
  m="3164920">here.</span> <span m="3165480">Yeah.</span></p><p><span
  m="3165940">So</span> <span m="3166090">the</span> <span
  m="3166240">test</span> <span m="3166720">is</span> <span
  m="3167950">positive,</span> <span m="3169730">semidefinite,</span> <span
  m="3171360">Hessian.</span> <span m="3174520">And</span> <span
  m="3174640">here,</span> <span m="3174940">the</span> <span
  m="3175090">Hessian</span> <span m="3175600">is</span> <span
  m="3175780">actually</span> <span m="3176170">that</span> <span
  m="3176470">S,</span> <span m="3176830">because</span> <span
  m="3177290">the</span> <span m="3177370">second</span> <span
  m="3177760">derivatives</span> <span m="3179050">will</span> <span
  m="3179260">produce--</span> <span m="3180700">I'll put</span> <span
  m="3181060">a</span> <span m="3181150">1/2</span> <span m="3181510">in</span>
  <span m="3181630">there--</span> <span m="3182220">the</span> <span
  m="3182470">second</span> <span m="3182830">derivatives</span> <span
  m="3183550">will</span> <span m="3183790">produce</span> <span
  m="3184810">S</span> <span m="3185170">equal</span> <span
  m="3185560">the</span> <span m="3185650">Hessian</span> <span
  m="3186140">H.</span> <span m="3186940">So</span> <span
  m="3187210">here,</span> <span m="3187390">the</span> <span
  m="3187690">S--</span> <span m="3188590">so</span> <span
  m="3189010">positive</span> <span m="3189580">semidefinite,</span> <span
  m="3191260">Hessian</span> <span m="3191800">in</span> <span
  m="3191950">general,</span> <span m="3193930">second</span> <span
  m="3194380">derivative</span> <span m="3194950">matrix</span> <span
  m="3195580">for</span> <span m="3196410">a</span> <span
  m="3196480">quadratic.</span></p><p><span m="3197920">OK.</span> <span
  m="3199150">So</span> <span m="3200210">its</span> <span
  m="3200710">convex</span> <span m="3201940">problems</span> <span
  m="3202630">that</span> <span m="3203290">we're</span> <span
  m="3203950">going</span> <span m="3204090">to</span> <span
  m="3204220">get</span> <span m="3205940">farther</span> <span
  m="3206600">with.</span> <span m="3208150">We</span> <span
  m="3208760">run</span> <span m="3209060">into</span> <span
  m="3209390">no</span> <span m="3209890">saddle</span> <span
  m="3210500">points.</span> <span m="3211040">We</span> <span
  m="3211220">run</span> <span m="3211460">into</span> <span
  m="3211760">no</span> <span m="3212540">local</span> <span
  m="3213080">minimum.</span> <span m="3214220">Once</span> <span
  m="3214490">we</span> <span m="3214670">found</span> <span
  m="3214940">the</span> <span m="3215030">minimum,</span> <span
  m="3215570">it's</span> <span m="3215840">the</span> <span
  m="3215990">global</span> <span m="3216470">minimum.</span> <span
  m="3216950">These</span> <span m="3217220">are</span> <span
  m="3217310">the</span> <span m="3217400">good</span> <span
  m="3217610">problems.</span> <span m="3218520">OK,</span> <span
  m="3219610">again,</span> <span m="3219980">happy</span> <span
  m="3220310">to</span> <span m="3220430">see</span> <span
  m="3220640">you</span> <span m="3220760">today,</span> <span
  m="3221180">and</span> <span m="3221330">I</span> <span
  m="3221510">look</span> <span m="3221690">forward</span> <span
  m="3221990">to</span> <span m="3222140">Wednesday.</span></p>
uid: 1f32e87cb6abcb28fefb267c9a2d5796
type: courses
layout: video
---
