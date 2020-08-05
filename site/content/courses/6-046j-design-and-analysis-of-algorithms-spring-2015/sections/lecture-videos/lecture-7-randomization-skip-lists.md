---
about_this_resource_text: "<p><strong>Description:</strong> In this lecture, Professor Devadas continues with randomization, introducing skip lists as a randomized data structure.</p>\r\n<p><strong>Instructors:</strong> Srinivas Devadas</p>"
embedded_media:
  - id: Video-YouTube-Stream
    media_location: 2g9OSRKJuzM
    parent_uid: 3d7b84c968547fd60ae2be3b9e1e2a77
    title: Video-YouTube-Stream
    type: Video
    uid: 7f92619e5bcfecc7a80b4c8c11a466f7
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: 3d7b84c968547fd60ae2be3b9e1e2a77
    title: Video-iTunes U-MP4
    type: Video
    uid: f38f65e0981540c7185fffd7af2d9a13
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec07_300k.mp4'
    parent_uid: 3d7b84c968547fd60ae2be3b9e1e2a77
    title: Video-Internet Archive-MP4
    type: Video
    uid: d92d1fa3eba7c5dabc8f04a79202fba3
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: 2g9OSRKJuzM
    parent_uid: 3d7b84c968547fd60ae2be3b9e1e2a77
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: c0bc43cace82ef6e99f4afd98f25a29c
  - id: Thumbnail-YouTube-JPG_1
    media_location: 'https://img.youtube.com/vi/2g9OSRKJuzM/default.jpg'
    parent_uid: 3d7b84c968547fd60ae2be3b9e1e2a77
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: 54ba2681716fe03cb2fba7dc5e6560cb
  - id: 2g9OSRKJuzM.srt
    parent_uid: 3d7b84c968547fd60ae2be3b9e1e2a77
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-7-randomization-skip-lists/2g9OSRKJuzM.srt
    title: 3play caption file
    type: null
    uid: 1cfe1755e50dcc2391867aa9eb74e4a9
  - id: 2g9OSRKJuzM.pdf
    parent_uid: 3d7b84c968547fd60ae2be3b9e1e2a77
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-7-randomization-skip-lists/2g9OSRKJuzM.pdf
    title: 3play pdf file
    type: null
    uid: e8890a718506914d50ebd3dbc444222d
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 3d7b84c968547fd60ae2be3b9e1e2a77
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 64af0a5da6d90e8bb5c9040980df06af
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 3d7b84c968547fd60ae2be3b9e1e2a77
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 7ce1ebecab9c4b4bf06f1709df9189b4
inline_embed_id: '3754687lecture7:randomization:skiplists29600426'
order_index: 167
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-7-randomization-skip-lists
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-7-randomization-skip-lists
title: 'Lecture 7: Randomization: Skip Lists'
transcript: >-
  <p><span m="40">The</span> <span m="170">following</span> <span
  m="620">content</span> <span m="1210">is</span> <span m="1320">provided</span>
  <span m="1780">under</span> <span m="2029">a</span> <span
  m="2080">Creative</span> <span m="2480">Commons</span> <span
  m="2900">license.</span> <span m="4010">Your</span> <span
  m="4180">support</span> <span m="4730">will</span> <span m="4880">help</span>
  <span m="5100">MIT</span> <span m="5550">OpenCourseWare</span> <span
  m="6340">continue</span> <span m="6850">to</span> <span m="6960">offer</span>
  <span m="7370">high</span> <span m="7590">quality</span> <span
  m="8100">educational</span> <span m="8740">resources</span> <span
  m="9310">for</span> <span m="9500">free.</span> <span m="10690">To</span>
  <span m="10720">make</span> <span m="10930">a</span> <span
  m="10970">donation</span> <span m="11660">or</span> <span
  m="11900">view</span> <span m="12360">additional</span> <span
  m="12800">materials</span> <span m="13320">from</span> <span
  m="13510">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14440">courses,</span> <span m="15510">visit</span> <span
  m="15810">MIT</span> <span m="16190">OpenCourseWare</span> <span
  m="17240">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="22120">SRINIVAS DEVADAS: All</span> <span m="22260">right.</span> <span
  m="22430">Good</span> <span m="22560">morning,</span> <span
  m="22800">everyone.</span> <span m="23672">And</span> <span
  m="24110">let's</span> <span m="24380">get</span> <span
  m="24540">started.</span> <span m="26060">Today's</span> <span
  m="26360">lecture</span> <span m="27040">is</span> <span
  m="27240">about</span> <span m="27500">a</span> <span
  m="27660">randomized</span> <span m="28560">data</span> <span
  m="28900">structure</span> <span m="30130">called</span> <span
  m="30480">the</span> <span m="30550">skip</span> <span m="30940">list.</span>
  <span m="32200">And</span> <span m="33320">it's</span> <span
  m="34620">a</span> <span m="34720">data</span> <span
  m="34960">structure</span> <span m="35630">that,</span> <span
  m="36560">obviously</span> <span m="36980">because</span> <span
  m="37270">it's</span> <span m="37390">randomized,</span> <span
  m="38130">we'd</span> <span m="38270">have</span> <span m="38420">to</span>
  <span m="38510">do</span> <span m="38660">a</span> <span
  m="38750">probabilistic</span> <span m="39520">analysis</span> <span
  m="40080">for.</span></p><p><span m="41360">And</span> <span
  m="42050">we're</span> <span m="42350">going</span> <span m="42500">to</span>
  <span m="42580">sort</span> <span m="42780">of</span> <span
  m="42850">raise</span> <span m="43150">the</span> <span
  m="43250">stakes</span> <span m="43660">here</span> <span m="43840">a</span>
  <span m="43890">little</span> <span m="44120">bit</span> <span
  m="44740">with</span> <span m="44910">respect</span> <span m="45310">to</span>
  <span m="45440">our</span> <span m="46440">expectation--</span> <span
  m="48010">the</span> <span m="48120">pun</span> <span
  m="48440">intended</span> <span m="49440">of</span> <span
  m="49880">this</span> <span m="50060">data</span> <span
  m="50310">structure--</span> <span m="52010">in</span> <span
  m="52190">the</span> <span m="52280">sense</span> <span m="52640">that</span>
  <span m="53440">we're</span> <span m="53640">not</span> <span
  m="53790">going</span> <span m="53910">to</span> <span m="53970">be</span>
  <span m="54050">happy</span> <span m="55240">with</span> <span
  m="55450">just</span> <span m="55790">doing</span> <span m="56110">an</span>
  <span m="56790">expected</span> <span m="57410">value</span> <span
  m="57910">analysis</span> <span m="58880">or</span> <span m="59050">to</span>
  <span m="59200">get</span> <span m="59460">what</span> <span
  m="59690">the</span> <span m="59760">expectation</span> <span
  m="60540">is</span> <span m="61290">of</span> <span m="61990">the</span> <span
  m="62110">search</span> <span m="62780">complexity</span> <span
  m="63820">in</span> <span m="63970">a</span> <span m="64019">skip</span> <span
  m="64319">list.</span></p><p><span m="65129">We're</span> <span
  m="65310">going</span> <span m="65519">to</span> <span
  m="65610">introduce</span> <span m="66020">this</span> <span
  m="66200">notion</span> <span m="67880">with</span> <span
  m="68200">high</span> <span m="68530">probability,</span> <span
  m="70030">which</span> <span m="70550">is</span> <span m="70710">a</span>
  <span m="70770">stronger</span> <span m="71270">notion</span> <span
  m="72020">than</span> <span m="72190">just</span> <span
  m="72410">giving</span> <span m="72670">you</span> <span m="73060">the</span>
  <span m="73200">expected</span> <span m="73630">value</span> <span
  m="74040">or</span> <span m="74120">the</span> <span
  m="74180">expectation</span> <span m="75659">for</span> <span
  m="77640">the</span> <span m="77810">complexity</span> <span
  m="78310">of</span> <span m="78430">a</span> <span m="78630">search</span>
  <span m="79020">algorithm.</span> <span m="80090">And</span> <span
  m="80280">we're</span> <span m="80350">going</span> <span m="80470">to</span>
  <span m="80530">prove</span> <span m="81500">that</span> <span
  m="83120">under</span> <span m="83460">this</span> <span
  m="83680">notion,</span> <span m="84690">that</span> <span
  m="85050">search</span> <span m="85960">has</span> <span m="86860">a</span>
  <span m="86980">particular</span> <span m="87390">complexity</span> <span
  m="88500">with</span> <span m="89030">high</span> <span
  m="89280">probability.</span> <span m="90520">So</span> <span
  m="91130">we'll</span> <span m="91350">get</span> <span m="91580">to
  the</span> <span m="91940">with</span> <span m="92210">high</span> <span
  m="92390">probability</span> <span m="92970">part</span> <span
  m="93870">a</span> <span m="94130">little</span> <span m="94370">bit</span>
  <span m="94480">later</span> <span m="94820">in</span> <span
  m="94950">the</span> <span m="95030">lecture,</span> <span
  m="96050">but</span> <span m="96170">we're just</span> <span
  m="96330">going</span> <span m="96490">to</span> <span m="96620">start</span>
  <span m="96940">off</span> <span m="97390">doing</span> <span
  m="97680">some</span> <span m="97960">cool</span> <span m="98760">data</span>
  <span m="99100">structure</span> <span m="100860">design,</span> <span
  m="101470">I</span> <span m="101550">guess,</span> <span
  m="103060">[INAUDIBLE]</span> <span m="103400">pointing</span> <span
  m="103670">to</span> <span m="103760">the</span> <span m="103870">skip</span>
  <span m="104160">list.</span></p><p><span m="105210">The</span> <span
  m="105320">skip</span> <span m="105610">list</span> <span m="106380">is</span>
  <span m="106550">a</span> <span m="106640">relatively</span> <span
  m="107160">young</span> <span m="107470">data</span> <span
  m="107700">structure</span> <span m="108810">invented</span> <span
  m="109890">by</span> <span m="110090">a</span> <span m="110150">guy</span>
  <span m="110350">called</span> <span m="110840">Bill</span> <span
  m="111160">Pugh</span> <span m="111630">in</span> <span
  m="111780">1989,</span> <span m="114290">so</span> <span m="115220">not</span>
  <span m="115470">much</span> <span m="115710">older</span> <span
  m="115900">than</span> <span m="116010">you</span> <span
  m="116150">guys.</span> <span m="119470">It's</span> <span
  m="120680">relatively</span> <span m="121370">easy</span> <span
  m="121710">to</span> <span m="121830">implement</span> <span
  m="122930">as</span> <span m="123310">you'll</span> <span
  m="123490">see.</span> <span m="124240">I</span> <span m="124390">won't</span>
  <span m="125310">really</span> <span m="125790">claim</span> <span
  m="126220">that,</span> <span m="126860">but</span> <span
  m="126980">hopefully</span> <span m="127320">you'll</span> <span
  m="127480">be</span> <span m="127600">convinced</span> <span
  m="128520">by</span> <span m="128699">the</span> <span m="128759">time</span>
  <span m="128970">you're</span> <span m="129070">done</span> <span
  m="129350">describing</span> <span m="129940">the</span> <span
  m="130020">structure.</span> <span m="131700">Especially</span> <span
  m="132400">in</span> <span m="132670">comparison</span> <span
  m="133360">to</span> <span m="136950">balanced</span> <span
  m="137560">trees.</span></p><p><span m="140670">And</span> <span
  m="141510">we</span> <span m="141690">can</span> <span m="141960">do</span>
  <span m="142140">a</span> <span m="142200">comparison</span> <span
  m="143120">after</span> <span m="143420">we</span> <span m="143550">do</span>
  <span m="143720">our</span> <span m="143850">analysis</span> <span
  m="144440">of</span> <span m="144550">the</span> <span m="144620">data</span>
  <span m="144860">structure</span> <span m="145760">as</span> <span
  m="146050">to</span> <span m="146160">what</span> <span m="146520">the</span>
  <span m="147650">complexity</span> <span m="148730">comparisons</span> <span
  m="149460">are</span> <span m="150290">for</span> <span
  m="150680">search</span> <span m="150975">and</span> <span
  m="151270">insert</span> <span m="152660">when</span> <span
  m="152920">you</span> <span m="153040">take</span> <span m="153320">a</span>
  <span m="153360">skip</span> <span m="153670">list</span> <span
  m="153920">and</span> <span m="154040">compare</span> <span
  m="154430">it</span> <span m="154600">to</span> <span m="155280">an</span>
  <span m="155420">AVL</span> <span m="155940">tree,</span> <span
  m="156190">for</span> <span m="156340">example,</span> <span
  m="157310">or</span> <span m="157710">a</span> <span m="157790">red</span>
  <span m="157980">black</span> <span m="158270">tree,</span> <span
  m="160050">et</span> <span m="160330">cetera.</span> <span
  m="161820">In</span> <span m="161990">general,</span> <span
  m="162500">when</span> <span m="162630">we</span> <span m="162730">have</span>
  <span m="162900">a</span> <span m="162940">data</span> <span
  m="163170">structure,</span> <span m="164240">we</span> <span m="164360">want
  it</span> <span m="164640">to</span> <span m="164710">be</span> <span
  m="164820">dynamic.</span> <span m="166840">The</span> <span
  m="166930">skip</span> <span m="167230">list</span> <span
  m="169320">maintains</span> <span m="171390">a</span> <span
  m="171510">dynamic</span> <span m="172110">set.</span></p><p><span
  m="173530">What</span> <span m="173750">that</span> <span
  m="173910">means</span> <span m="174190">is</span> <span m="174800">not</span>
  <span m="175050">only</span> <span m="175750">do</span> <span
  m="175890">you</span> <span m="175970">want</span> <span m="176110">to</span>
  <span m="176180">search</span> <span m="176520">on</span> <span
  m="176680">it--</span> <span m="177090">obviously</span> <span
  m="178290">it's</span> <span m="178810">uninteresting</span> <span
  m="179480">to</span> <span m="179600">have</span> <span m="179730">a</span>
  <span m="179770">static</span> <span m="180220">data</span> <span
  m="180460">structure</span> <span m="181460">and</span> <span
  m="181820">do</span> <span m="181980">a</span> <span m="182050">search.</span>
  <span m="183170">You</span> <span m="183420">want</span> <span
  m="183730">to</span> <span m="183790">be</span> <span m="183900">able</span>
  <span m="184140">to</span> <span m="184480">change</span> <span
  m="184990">it,</span> <span m="185440">want</span> <span m="185630">to</span>
  <span m="185690">be</span> <span m="185750">able</span> <span
  m="185880">to</span> <span m="185970">insert</span> <span
  m="186470">values</span> <span m="187010">into</span> <span
  m="187380">it.</span> <span m="188390">There's</span> <span
  m="188660">a</span> <span m="188710">complexity</span> <span
  m="189230">of</span> <span m="189350">insert</span> <span m="190000">to</span>
  <span m="190120">worry</span> <span m="190340">about.</span> <span
  m="190600">You</span> <span m="190860">want</span> <span m="191090">to</span>
  <span m="191150">be</span> <span m="191210">able</span> <span
  m="191350">to</span> <span m="191470">delete</span> <span
  m="191860">values.</span> <span m="193170">And</span> <span
  m="193840">the</span> <span m="193980">richness</span> <span
  m="194300">of</span> <span m="194450">the</span> <span m="194530">data</span>
  <span m="194690">structure</span> <span m="195110">comes</span> <span
  m="195410">from</span> <span m="195610">the</span> <span
  m="195710">operations</span> <span m="196780">and the</span> <span
  m="197010">augmentations</span> <span m="197800">you</span> <span
  m="197910">can</span> <span m="198050">do</span> <span m="198270">on</span>
  <span m="198410">it,</span> <span m="199090">and</span> <span
  m="199340">the</span> <span m="199400">skip</span> <span
  m="199650">lists</span> <span m="199870">are</span> <span m="199980">no</span>
  <span m="200180">exception</span> <span m="200750">to</span> <span
  m="200840">that.</span></p><p><span m="202440">So</span> <span
  m="202560">if</span> <span m="202630">you</span> <span m="202710">want</span>
  <span m="202870">to</span> <span m="203090">maintain</span> <span
  m="203530">a</span> <span m="203590">dynamic</span> <span
  m="204230">set</span> <span m="204650">of</span> <span m="204850">n</span>
  <span m="205090">elements,</span> <span m="205870">and</span> <span
  m="206360">you</span> <span m="206550">obviously</span> <span
  m="206910">know</span> <span m="207190">a</span> <span m="207230">ton</span>
  <span m="207510">of</span> <span m="207580">data</span> <span
  m="207790">structures</span> <span m="208220">to</span> <span
  m="208310">do</span> <span m="208540">this,</span> <span
  m="209320">each</span> <span m="209580">of</span> <span
  m="209700">which</span> <span m="209940">has</span> <span
  m="211000">different</span> <span m="211390">characteristics.</span> <span
  m="212630">And</span> <span m="212850">this</span> <span m="213020">is,</span>
  <span m="214490">if</span> <span m="214670">you</span> <span
  m="214740">ignore</span> <span m="215690">hash</span> <span
  m="215980">tables,</span> <span m="217050">this</span> <span
  m="217300">is</span> <span m="217450">your</span> <span
  m="218240">first</span> <span m="218730">real</span> <span
  m="219530">randomized</span> <span m="220180">data</span> <span
  m="220380">structure,</span> <span m="224280">if</span> <span
  m="226120">you're</span> <span m="226220">just</span> <span
  m="226410">taking</span> <span m="226720">6006</span> <span
  m="227650">and</span> <span m="227800">this</span> <span
  m="227990">class</span> <span m="228740">might</span> <span
  m="228970">have</span> <span m="229060">seen</span> <span
  m="230100">randomized</span> <span m="230600">structures</span> <span
  m="231130">in</span> <span m="231260">other</span> <span
  m="231430">classes.</span></p><p><span m="235050">So</span> <span
  m="236620">we're</span> <span m="236830">going</span> <span
  m="237070">to</span> <span m="237380">try</span> <span m="237610">and</span>
  <span m="237730">do</span> <span m="237880">this</span> <span
  m="238110">in</span> <span m="238220">order</span> <span m="238510">log
  n</span> <span m="238870">time.</span> <span m="240320">As</span> <span
  m="240920">you know</span> <span m="241280">with</span> <span
  m="241720">balanced</span> <span m="242290">binary</span> <span
  m="243170">trees,</span> <span m="244190">you</span> <span
  m="244410">can</span> <span m="244540">do</span> <span
  m="244690">things</span> <span m="244940">in</span> <span
  m="245020">order</span> <span m="245230">log n</span> <span
  m="245610">time,</span> <span m="246620">a</span> <span m="246720">ton</span>
  <span m="246930">of</span> <span m="247010">things,</span> <span
  m="247470">pretty</span> <span m="247650">much</span> <span
  m="248270">everything</span> <span m="250360">that</span> <span
  m="250540">is</span> <span m="250640">interesting.</span> <span
  m="252070">And</span> <span m="252480">this,</span> <span
  m="253470">given</span> <span m="253790">that</span> <span
  m="253900">it's</span> <span m="254410">randomized,</span> <span
  m="256010">it's</span> <span m="256200">a</span> <span
  m="256300">relatively</span> <span m="256950">easy</span> <span
  m="257320">analysis</span> <span m="258930">to</span> <span
  m="259060">show</span> <span m="259360">that</span> <span
  m="260200">the</span> <span m="260360">expectation</span> <span
  m="261589">or</span> <span m="261709">the</span> <span
  m="261769">expected</span> <span m="262420">value</span> <span
  m="263050">of</span> <span m="264330">a</span> <span m="264590">search</span>
  <span m="265210">would</span> <span m="265380">be</span> <span
  m="265470">order</span> <span m="265690">log n</span> <span
  m="266910">expected</span> <span m="267310">time.</span></p><p><span
  m="268750">But</span> <span m="269250">we're</span> <span
  m="269390">going</span> <span m="269510">to,</span> <span m="269700">as</span>
  <span m="269850">I</span> <span m="269930">said,</span> <span
  m="270210">raise</span> <span m="270430">the</span> <span
  m="270520">stakes,</span> <span m="271550">and</span> <span
  m="271990">we're</span> <span m="272140">going</span> <span
  m="272260">to</span> <span m="272320">spend</span> <span m="272560">a</span>
  <span m="272610">ton</span> <span m="272850">of</span> <span
  m="272920">time</span> <span m="276020">the</span> <span
  m="276160">second</span> <span m="276450">half</span> <span
  m="276750">of</span> <span m="276900">this</span> <span
  m="278550">showing</span> <span m="279130">the</span> <span
  m="279510">with</span> <span m="279790">high</span> <span
  m="279960">probability</span> <span m="280610">result.</span> <span
  m="281860">And</span> <span m="282510">that's</span> <span m="282730">a</span>
  <span m="282800">stronger</span> <span m="283410">result</span> <span
  m="283850">than</span> <span m="284440">just</span> <span
  m="284670">saying</span> <span m="284960">that</span> <span
  m="285250">search</span> <span m="285610">takes</span> <span
  m="286610">expected</span> <span m="287230">order</span> <span m="287450">log
  n</span> <span m="287790">time.</span> <span m="289120">All</span> <span
  m="289240">right,</span> <span m="289430">so</span> <span
  m="289680">that's</span> <span m="289940">the</span> <span
  m="290020">context.</span></p><p><span m="291720">You</span> <span
  m="291860">can</span> <span m="291980">think</span> <span m="292220">of</span>
  <span m="293210">a</span> <span m="293590">skip</span> <span
  m="293940">list</span> <span m="294320">as</span> <span
  m="294550">beginning</span> <span m="295720">with</span> <span
  m="297970">a</span> <span m="298090">simple</span> <span
  m="299150">linked</span> <span m="299620">list.</span> <span m="300800">So
  if</span> <span m="301050">we</span> <span m="301150">have</span> <span
  m="301360">one</span> <span m="301660">link</span> <span
  m="302020">list</span> <span m="303450">and</span> <span
  m="304760">that</span> <span m="305130">link</span> <span
  m="305420">list--</span> <span m="308240">let's</span> <span
  m="308640">first</span> <span m="309210">think</span> <span
  m="309400">of</span> <span m="309510">this</span> <span m="309680">as</span>
  <span m="309820">being</span> <span m="314690">unsorted.</span> <span
  m="316610">So</span> <span m="316850">suppose</span> <span m="317110">I</span>
  <span m="317180">have</span> <span m="317290">a</span> <span
  m="317330">link</span> <span m="317600">list</span> <span
  m="318450">which</span> <span m="318640">is</span> <span
  m="318740">unsorted</span> <span m="319660">and</span> <span
  m="319810">I</span> <span m="319870">want</span> <span m="320050">to</span>
  <span m="320120">search</span> <span m="321100">for</span> <span
  m="321350">a</span> <span m="321420">particular</span> <span
  m="321730">value</span> <span m="322570">in</span> <span
  m="323220">this</span> <span m="323400">link</span> <span
  m="323650">list.</span> <span m="324380">And</span> <span m="324630">we</span>
  <span m="324730">can</span> <span m="324840">assume</span> <span
  m="326280">that</span> <span m="326550">this</span> <span m="326730">is</span>
  <span m="326940">a</span> <span m="328180">doubly-linked</span> <span
  m="328890">list,</span> <span m="329320">so</span> <span m="329560">the</span>
  <span m="329680">arrows</span> <span m="330100">go</span> <span
  m="330280">both</span> <span m="330570">ways.</span> <span
  m="332640">You</span> <span m="332710">have</span> <span m="334610">a</span>
  <span m="334660">pointer,</span> <span m="335700">let's</span> <span
  m="335960">say,</span> <span m="336520">just</span> <span m="336870">to</span>
  <span m="336980">the</span> <span m="337060">first</span> <span
  m="337590">element.</span></p><p><span m="338660">So</span> <span
  m="338910">if</span> <span m="339020">you</span> <span m="339130">have</span>
  <span m="339360">a</span> <span m="339730">list</span> <span
  m="340620">that's</span> <span m="340860">unsorted</span> <span
  m="341920">and</span> <span m="342120">you</span> <span m="342220">want</span>
  <span m="342360">to</span> <span m="342430">search</span> <span
  m="344140">for</span> <span m="344480">an</span> <span
  m="344590">element,</span> <span m="345030">you</span> <span
  m="345210">would</span> <span m="345310">want</span> <span
  m="345470">to</span> <span m="345530">do</span> <span m="345680">a</span>
  <span m="345720">membership</span> <span m="346220">query.</span> <span
  m="347270">If</span> <span m="347460">there's</span> <span m="347930">n</span>
  <span m="348160">elements,</span> <span m="348930">the</span> <span
  m="349180">complexity</span> <span m="349670">is?</span></p><p><span
  m="350906">AUDIENCE: Order n.</span></p><p><span m="351860">SRINIVAS DEVADAS:
  Order n.</span> <span m="353140">So</span> <span m="353440">a</span> <span
  m="353550">linked</span> <span m="353830">list,</span> <span
  m="355400">the</span> <span m="355570">search</span> <span
  m="356640">takes</span> <span m="357850">the</span> <span
  m="358050">order</span> <span m="358340">n</span> <span
  m="358530">time.</span> <span m="360370">Now</span> <span
  m="360800">let's</span> <span m="361000">go</span> <span
  m="361140">ahead</span> <span m="361400">and</span> <span
  m="362350">say</span> <span m="362690">that</span> <span m="363500">we
  are</span> <span m="363740">sorting</span> <span m="364310">this</span> <span
  m="364500">list,</span> <span m="365630">so</span> <span
  m="365870">it's</span> <span m="366010">a</span> <span
  m="366100">sorted</span> <span m="366610">linked</span> <span
  m="366910">list.</span> <span m="367930">So</span> <span
  m="368510">your</span> <span m="368750">values</span> <span
  m="369230">here,</span> <span m="369860">14,</span> <span
  m="370360">23,</span> <span m="372360">34,</span> <span m="373360">42,</span>
  <span m="374860">50,</span> <span m="375792">59.</span> <span
  m="377190">They're</span> <span m="377390">sorted</span> <span
  m="377870">in</span> <span m="378410">ascending</span> <span
  m="379060">order.</span> <span m="380850">You</span> <span
  m="380980">still</span> <span m="381240">only</span> <span
  m="381430">have</span> <span m="381570">a</span> <span
  m="381640">pointer</span> <span m="382800">to</span> <span
  m="382970">the</span> <span m="383370">front</span> <span m="383710">of</span>
  <span m="383820">the</span> <span m="383900">list</span> <span
  m="385040">and</span> <span m="385760">it's</span> <span m="385940">a</span>
  <span m="385990">doubly-linked</span> <span m="386510">list,</span> <span
  m="387420">what</span> <span m="387710">is</span> <span m="388010">the</span>
  <span m="388410">complexity</span> <span m="389040">of</span> <span
  m="389150">search</span> <span m="390240">in</span> <span
  m="390430">the</span> <span m="390510">sorted</span> <span
  m="391000">link</span> <span m="391240">list?</span></p><p><span
  m="394090">AUDIENCE: Log n.</span></p><p><span m="395570">SRINIVAS DEVADAS:
  Log n.</span> <span m="396810">Oh,</span> <span m="397110">I</span> <span
  m="397440">wanted</span> <span m="397640">to</span> <span
  m="397780">hear</span> <span m="398020">that.</span> <span
  m="399200">Because</span> <span m="399570">it is?</span></p><p><span
  m="400998">AUDIENCE: Order  n.</span></p><p><span m="401474">SRINIVAS DEVADAS:
  It's</span> <span m="401950">order</span> <span m="402110">n.</span> <span
  m="402520">log n</span> <span m="402920">is--</span> <span
  m="403390">yeah,</span> <span m="403650">that</span> <span
  m="403740">was</span> <span m="403830">a</span> <span m="403880">trick</span>
  <span m="404130">question.</span> <span m="409310">Because</span> <span
  m="409890">I</span> <span m="410010">liked</span> <span m="410250">that</span>
  <span m="410400">answer,</span> <span m="410880">the</span> <span
  m="410970">person</span> <span m="411250">who</span> <span
  m="411320">said</span> <span m="411490">log n</span> <span
  m="411910">gets</span> <span m="412120">a</span> <span
  m="412170">Frisbee.</span> <span m="415790">This</span> <span
  m="415830">person</span> <span m="416090">won't</span> <span
  m="416310">admit.</span></p><p><span m="416800">[LAUGHTER]</span></p><p><span
  m="418270">Oh,</span> <span m="418760">it</span> <span m="418860">was</span>
  <span m="419030">you.</span> <span m="419210">OK,</span> <span
  m="419510">all</span> <span m="419600">right.</span> <span
  m="420190">There</span> <span m="420340">you</span> <span
  m="420400">go.</span> <span m="422200">All</span> <span
  m="422470">right.</span></p><p><span m="423940">So</span> <span
  m="426940">log</span> <span m="427220">n</span> <span m="428430">would</span>
  <span m="428900">imply</span> <span m="429710">that</span> <span
  m="429880">you</span> <span m="430010">have</span> <span
  m="430340">random</span> <span m="430790">access.</span> <span
  m="432960">If</span> <span m="433120">you</span> <span m="433210">have
  an</span> <span m="433620">array</span> <span m="434470">that's</span> <span
  m="434700">sorted</span> <span m="435460">and</span> <span
  m="435650">you</span> <span m="435720">can</span> <span m="435870">go</span>
  <span m="436090">[? AFi, ?]</span> <span m="437240">and</span> <span
  m="437400">you</span> <span m="437470">can</span> <span m="437590">go</span>
  <span m="437890">[? AFi ?]</span> <span m="438360">divided</span> <span
  m="438670">by</span> <span m="438810">2,</span> <span m="439660">or</span>
  <span m="440110">[? AF2i ?]</span> <span m="441140">and</span> <span
  m="441340">you</span> <span m="441410">can</span> <span m="441540">go</span>
  <span m="441980">directly</span> <span m="442480">to</span> <span
  m="442550">that</span> <span m="442730">element,</span> <span
  m="443150">then</span> <span m="443280">you</span> <span m="443370">can</span>
  <span m="443480">do</span> <span m="443610">binary</span> <span
  m="444050">search</span> <span m="444900">and</span> <span
  m="445110">you</span> <span m="445190">can</span> <span m="445360">get</span>
  <span m="446420">a</span> <span m="446630">log</span> <span
  m="446910">n,</span> <span m="447650">order</span> <span m="447880">log</span>
  <span m="447960">in.</span></p><p><span m="449010">But</span> <span
  m="449580">here,</span> <span m="450200">the</span> <span
  m="450330">sorting</span> <span m="451710">actually</span> <span
  m="451990">doesn't</span> <span m="452220">help</span> <span
  m="452450">you</span> <span m="453210">with</span> <span
  m="453450">respect</span> <span m="453950">to</span> <span
  m="456185">the</span> <span m="456440">search</span> <span
  m="457460">simply</span> <span m="457740">because</span> <span
  m="458070">you</span> <span m="458200">have</span> <span m="458360">to</span>
  <span m="458810">start</span> <span m="459880">from</span> <span
  m="460270">the</span> <span m="460340">beginning,</span> <span
  m="460890">from</span> <span m="461130">the</span> <span
  m="461200">front</span> <span m="461490">of</span> <span m="461590">the</span>
  <span m="461660">list,</span> <span m="462070">and</span> <span
  m="462210">you've</span> <span m="462310">got</span> <span
  m="462410">to</span> <span m="462470">keep</span> <span
  m="462660">walking.</span> <span m="463430">The</span> <span
  m="463560">only</span> <span m="463840">place</span> <span
  m="464160">that</span> <span m="464270">it</span> <span
  m="464350">helps</span> <span m="464640">you</span> <span m="465240">is</span>
  <span m="465470">that</span> <span m="466050">if</span> <span
  m="466250">you</span> <span m="466350">know</span> <span
  m="466540">it's</span> <span m="466680">sorted</span> <span
  m="467390">and</span> <span m="467530">you're</span> <span
  m="467630">looking</span> <span m="467930">for</span> <span
  m="469250">37,</span> <span m="470560">you</span> <span m="470720">can</span>
  <span m="470850">stop</span> <span m="471900">after</span> <span
  m="472220">you</span> <span m="472340">see</span> <span m="472530">42,</span>
  <span m="473770">right?</span></p><p><span m="474840">That's</span> <span
  m="475110">pretty</span> <span m="475280">much</span> <span
  m="475460">the</span> <span m="475530">only</span> <span
  m="475710">place</span> <span m="476070">that it</span> <span
  m="476270">helps</span> <span m="476520">you.</span> <span
  m="477030">But</span> <span m="477340">it's</span> <span
  m="477480">still</span> <span m="477700">order</span> <span
  m="477850">n</span> <span m="478200">because</span> <span
  m="478570">that</span> <span m="478740">could</span> <span
  m="478880">happen--</span> <span m="479910">on</span> <span
  m="480140">average</span> <span m="480450">is</span> <span
  m="480530">going</span> <span m="480650">to</span> <span
  m="480710">happen</span> <span m="480930">halfway</span> <span
  m="481220">through</span> <span m="481390">the</span> <span
  m="481460">list</span> <span m="483540">for</span> <span m="483740">a</span>
  <span m="483770">given</span> <span m="484000">membership</span> <span
  m="484410">query.</span> <span m="485230">So</span> <span
  m="485510">it's</span> <span m="485590">still</span> <span
  m="486430">order</span> <span m="487220">n</span> <span m="487590">for</span>
  <span m="487820">a</span> <span m="487860">sorted</span> <span
  m="488230">link</span> <span m="488460">list.</span></p><p><span
  m="490350">But</span> <span m="490660">now</span> <span
  m="490860">let's</span> <span m="491070">say</span> <span
  m="491330">that</span> <span m="492040">we</span> <span m="492230">had</span>
  <span m="492690">two</span> <span m="493890">sorted</span> <span
  m="494370">link</span> <span m="494610">lists.</span> <span
  m="500480">And</span> <span m="500860">how</span> <span m="501050">are</span>
  <span m="501140">these</span> <span m="501360">two</span> <span
  m="503130">link</span> <span m="503510">lists</span> <span
  m="503930">structured?</span> <span m="504710">Well,</span> <span
  m="505110">they're</span> <span m="505320">structured</span> <span
  m="505690">in</span> <span m="505780">a</span> <span m="505830">certain</span>
  <span m="506270">way,</span> <span m="507080">and</span> <span
  m="507460">let</span> <span m="507630">me</span> <span m="507710">draw</span>
  <span m="508120">our</span> <span m="508560">canonical</span> <span
  m="509180">example</span> <span m="511090">for</span> <span
  m="511620">skip</span> <span m="512000">list</span> <span
  m="512270">that</span> <span m="512400">I'm</span> <span
  m="512490">going</span> <span m="512610">to</span> <span
  m="512679">keep</span> <span m="512870">coming</span> <span
  m="513110">back</span> <span m="513360">to.</span> <span m="514090">So</span>
  <span m="514760">I</span> <span m="515090">won't</span> <span
  m="515460">erase</span> <span m="515870">this,</span> <span
  m="516080">but</span> <span m="516200">I'll</span> <span
  m="516799">draw</span> <span m="517159">one</span> <span
  m="517350">out--</span> <span m="518570">1, 2,</span> <span m="519038">3,
  4,</span> <span m="519506">5,</span> <span m="519974">6, 7,</span> <span
  m="520442">8,</span> <span m="520910">9--</span> <span m="521378">9</span>
  <span m="522320">elements.</span></p><p><span m="536060">So</span> <span
  m="536250">that's</span> <span m="536440">my</span> <span
  m="537700">first</span> <span m="538110">list</span> <span
  m="538940">which</span> <span m="539200">is</span> <span
  m="539320">sorted,</span> <span m="541450">and</span> <span
  m="541750">so</span> <span m="542070">I</span> <span m="542180">have</span>
  <span m="543000">14,</span> <span m="544000">23,</span> <span
  m="546000">34,</span> <span m="548000">42,</span> <span m="549848">50,</span>
  <span m="551234">59,</span> <span m="553170">66,</span> <span
  m="554230">72,</span> <span m="555530">and</span> <span m="555720">79.</span>
  <span m="558110">What</span> <span m="558310">I'm</span> <span
  m="558390">going</span> <span m="558520">to</span> <span
  m="558590">have</span> <span m="559010">now</span> <span m="559410">is</span>
  <span m="559670">another</span> <span m="560010">list</span> <span
  m="560420">sort</span> <span m="560590">of</span> <span m="560670">on</span>
  <span m="560840">top</span> <span m="561220">of</span> <span
  m="561340">this.</span> <span m="562830">I</span> <span m="562910">can</span>
  <span m="563080">move</span> <span m="565200">from</span> <span
  m="567890">top</span> <span m="568290">to</span> <span
  m="568580">bottom,</span> <span m="570710">et</span> <span
  m="571090">cetera.</span> <span m="571660">But</span> <span
  m="571840">I'm</span> <span m="571980">not</span> <span
  m="572130">going</span> <span m="572250">to</span> <span
  m="572320">have</span> <span m="575040">elements</span> <span
  m="576230">on</span> <span m="576450">top</span> <span m="576810">of</span>
  <span m="577480">each</span> <span m="578010">bottom</span> <span
  m="578370">element.</span></p><p><span m="582090">By</span> <span
  m="582210">convention,</span> <span m="582750">I'm</span> <span
  m="582860">going</span> <span m="582980">to</span> <span
  m="583040">have</span> <span m="583230">elements</span> <span
  m="584650">on</span> <span m="585130">top</span> <span m="585400">of</span>
  <span m="585490">the</span> <span m="585550">first</span> <span
  m="585860">element,</span> <span m="587060">regardless</span> <span
  m="587490">of</span> <span m="587550">how</span> <span m="587680">many</span>
  <span m="587870">lists</span> <span m="588120">I</span> <span
  m="588210">have.</span> <span m="588870">We</span> <span
  m="589230">only</span> <span m="589450">have</span> <span
  m="589620">two</span> <span m="589810">at</span> <span m="589900">this</span>
  <span m="590060">point.</span> <span m="590840">And</span> <span
  m="591080">so</span> <span m="591200">I</span> <span m="591290">see</span>
  <span m="591480">a</span> <span m="591530">14,</span> <span
  m="592480">which</span> <span m="592640">is</span> <span
  m="592700">exactly</span> <span m="593080">the</span> <span
  m="593150">same</span> <span m="593380">element</span> <span
  m="594100">duplicated</span> <span m="595320">up</span> <span
  m="595540">on</span> <span m="595690">the</span> <span m="595770">top</span>
  <span m="596100">list.</span> <span m="597280">And</span> <span
  m="597400">that</span> <span m="597550">list</span> <span m="597780">is</span>
  <span m="597890">also</span> <span m="598180">sorted,</span> <span
  m="599430">but</span> <span m="599830">I</span> <span m="599970">won't</span>
  <span m="600250">have</span> <span m="602490">all</span> <span
  m="602830">of</span> <span m="602940">the</span> <span
  m="603010">elements</span> <span m="603440">in</span> <span
  m="603540">the</span> <span m="603610">top</span> <span
  m="603890">list.</span></p><p><span m="604340">I'm</span> <span
  m="604490">just</span> <span m="604700">picking</span> <span
  m="605770">a</span> <span m="606050">couple</span> <span
  m="606420">here.</span> <span m="606860">So</span> <span
  m="607120">I've</span> <span m="607200">got</span> <span m="607770">34,</span>
  <span m="609340">42--</span> <span m="610380">they're</span> <span
  m="610640">adjacent</span> <span m="611070">here--</span> <span
  m="611770">and</span> <span m="611880">then</span> <span m="611980">I</span>
  <span m="612030">go</span> <span m="612200">all</span> <span
  m="612330">the</span> <span m="612410">way</span> <span m="612550">up</span>
  <span m="612750">to</span> <span m="613700">72,</span> <span
  m="616070">and</span> <span m="616410">I</span> <span m="616480">duplicate
  it,</span> <span m="618050">et</span> <span m="618390">cetera.</span> <span
  m="622100">Now,</span> <span m="622290">this</span> <span
  m="622500">looks</span> <span m="622840">kind</span> <span
  m="623140">of</span> <span m="623210">random.</span> <span
  m="624240">Anybody</span> <span m="624550">recognize</span> <span
  m="624960">these</span> <span m="625110">numbers?</span> <span
  m="631460">No</span> <span m="631620">one</span> <span m="631790">from</span>
  <span m="632020">the</span> <span m="633060">great</span> <span
  m="633450">City</span> <span m="633890">of</span> <span m="634030">New</span>
  <span m="634190">York?</span> <span m="636180">No?</span> <span
  m="636760">Yup,</span> <span m="637050">yup.</span></p><p><span
  m="637415">AUDIENCE: On the</span> <span m="637780">subway</span> <span
  m="638160">stops?</span></p><p><span m="638540">SRINIVAS DEVADAS: Yeah,</span>
  <span m="638810">subway</span> <span m="639080">stops</span> <span
  m="639490">on</span> <span m="639670">the</span> <span
  m="640500">Seventh</span> <span m="640940">Avenue</span> <span
  m="641520">Express</span> <span m="642030">Line.</span> <span
  m="649640">So</span> <span m="649890">this</span> <span m="650050">is</span>
  <span m="650180">exactly</span> <span m="650590">the</span> <span
  m="650670">notion</span> <span m="651140">of</span> <span m="651270">a</span>
  <span m="651330">skip list,</span> <span m="653400">the</span> <span
  m="653570">fact</span> <span m="653910">that</span> <span
  m="654070">you</span> <span m="654230">have--</span> <span m="656022">could
  you</span> <span m="656470">stand</span> <span m="656690">up?</span> <span
  m="659992">Great.</span> <span m="662970">All</span> <span
  m="663170">right.</span></p><p><span m="664520">So</span> <span
  m="666050">the</span> <span m="666180">notion</span> <span
  m="666520">here</span> <span m="667360">is</span> <span m="667800">that</span>
  <span m="668780">you</span> <span m="669040">don't</span> <span
  m="669210">have</span> <span m="669380">to</span> <span m="669470">make</span>
  <span m="669750">a</span> <span m="669810">lot</span> <span
  m="670010">of</span> <span m="670080">stops</span> <span m="671170">if</span>
  <span m="671450">you</span> <span m="671830">know you</span> <span
  m="672210">have</span> <span m="672340">to</span> <span m="672420">go</span>
  <span m="672560">far.</span> <span m="674370">So</span> <span
  m="674790">if</span> <span m="674970">you</span> <span m="675230">want</span>
  <span m="675470">to</span> <span m="675540">go</span> <span
  m="675750">from</span> <span m="676050">14th</span> <span
  m="676580">Street</span> <span m="676990">to</span> <span
  m="678850">72nd</span> <span m="679500">Street,</span> <span
  m="680340">you</span> <span m="680620">just</span> <span
  m="680870">take</span> <span m="681080">the</span> <span
  m="681790">express</span> <span m="682170">line.</span> <span
  m="682960">But</span> <span m="683030">if</span> <span m="683100">you</span>
  <span m="683190">want</span> <span m="683310">to</span> <span
  m="683370">go</span> <span m="683490">to</span> <span m="683580">66th</span>
  <span m="684580">Street,</span> <span m="685470">what</span> <span
  m="685800">would</span> <span m="685940">you</span> <span
  m="686040">do?</span></p><p><span m="687426">AUDIENCE: Go to 72nd</span> <span
  m="687888">and</span> <span m="688350">then go</span> <span
  m="688846">back.</span></p><p><span m="690830">SRINIVAS DEVADAS: Well,</span>
  <span m="691270">that's</span> <span m="691500">one</span> <span
  m="691690">way.</span> <span m="693710">That's</span> <span
  m="693900">one</span> <span m="694080">way.</span> <span
  m="694790">That's</span> <span m="694970">not</span> <span
  m="695280">the</span> <span m="695350">way</span> <span m="695540">I</span>
  <span m="695600">wanted.</span> <span m="697410">The</span> <span
  m="697530">way</span> <span m="697730">we're</span> <span
  m="697850">going</span> <span m="697970">to</span> <span m="698040">do</span>
  <span m="698190">this</span> <span m="698450">is</span> <span
  m="698660">we're</span> <span m="698780">not</span> <span
  m="698880">going</span> <span m="699000">to</span> <span
  m="699060">overshoot.</span> <span m="700340">So</span> <span
  m="700450">we</span> <span m="700550">want</span> <span m="700680">to</span>
  <span m="700740">minimize</span> <span m="702210">distance,</span> <span
  m="703010">let's</span> <span m="703210">say.</span> <span
  m="703360">So</span> <span m="704530">our</span> <span
  m="704680">secondary</span> <span m="705190">thing</span> <span
  m="705450">is</span> <span m="705570">going</span> <span m="705700">to</span>
  <span m="705760">be</span> <span m="706240">minimizing</span> <span
  m="706920">distance</span> <span m="707370">travel.</span></p><p><span
  m="709730">And</span> <span m="710000">so</span> <span
  m="710310">you're</span> <span m="710530">going</span> <span
  m="710750">to</span> <span m="711130">pop</span> <span m="711450">up</span>
  <span m="711670">the</span> <span m="711910">express</span> <span
  m="712340">line,</span> <span m="713370">go</span> <span m="713610">all</span>
  <span m="713740">the</span> <span m="713820">way</span> <span
  m="714120">to</span> <span m="714950">42nd</span> <span
  m="715560">Street,</span> <span m="716640">and</span> <span
  m="717640">you're</span> <span m="718400">going</span> <span
  m="718520">to</span> <span m="718580">say</span> <span m="718750">if</span>
  <span m="718850">I</span> <span m="718970">go</span> <span
  m="719150">to</span> <span m="719220">the</span> <span m="719310">next</span>
  <span m="719560">stop</span> <span m="719920">on</span> <span
  m="720010">the</span> <span m="720080">Express</span> <span
  m="720470">Line,</span> <span m="721100">I'm</span> <span
  m="721310">going</span> <span m="721540">too</span> <span
  m="721700">far.</span> <span m="722610">And</span> <span m="722840">so</span>
  <span m="723000">you're</span> <span m="723090">going</span> <span
  m="723210">to</span> <span m="723270">pop</span> <span m="723610">down</span>
  <span m="723870">to</span> <span m="723960">the</span> <span
  m="724030">local</span> <span m="724700">line.</span> <span
  m="725630">So</span> <span m="725790">you</span> <span m="725850">can</span>
  <span m="725950">think</span> <span m="726110">of</span> <span
  m="726220">this</span> <span m="726440">as</span> <span
  m="726600">being</span> <span m="727260">link</span> <span
  m="727620">list</span> <span m="728030">L0</span> <span m="728530">and</span>
  <span m="729020">link</span> <span m="729240">list</span> <span
  m="729470">L1.</span> <span m="730750">You're going</span> <span
  m="730900">to</span> <span m="731040">pop</span> <span m="731290">down,</span>
  <span m="731850">and</span> <span m="731990">then</span> <span
  m="732100">you're</span> <span m="732190">going</span> <span
  m="732290">to</span> <span m="732350">go</span> <span m="732610">to</span>
  <span m="732990">66th</span> <span m="733600">Street.</span></p><p><span
  m="735150">So</span> <span m="736160">search</span> <span m="737910">66</span>
  <span m="739990">will</span> <span m="740220">be</span> <span
  m="741730">going</span> <span m="742120">from</span> <span
  m="742340">14</span> <span m="744060">to</span> <span m="744270">42</span>
  <span m="745520">on</span> <span m="745810">L1,</span> <span
  m="748480">and</span> <span m="748970">then</span> <span
  m="749160">from</span> <span m="749340">42,</span> <span
  m="750390">let's</span> <span m="750600">just</span> <span
  m="750750">say</span> <span m="751110">that's</span> <span
  m="753590">walking.</span> <span m="754730">42</span> <span
  m="755260">to</span> <span m="755350">42,</span> <span m="756980">L1</span>
  <span m="757170">to</span> <span m="757430">L0.</span> <span
  m="763510">And</span> <span m="763700">then</span> <span m="763920">42</span>
  <span m="764490">to</span> <span m="765080">66</span> <span
  m="766760">on</span> <span m="767035">L0.</span></p><p><span
  m="770360">So</span> <span m="770550">that's</span> <span
  m="771390">the</span> <span m="771800">basic</span> <span
  m="772240">notion</span> <span m="772570">of</span> <span m="772660">a</span>
  <span m="772700">skip</span> <span m="772990">list.</span> <span
  m="773200">So</span> <span m="773320">you</span> <span m="773390">can</span>
  <span m="773500">see</span> <span m="773720">that</span> <span
  m="773840">it's</span> <span m="773990">really</span> <span
  m="774520">pretty</span> <span m="774900">simple.</span> <span
  m="777660">What</span> <span m="778000">we're</span> <span
  m="778100">going</span> <span m="778240">to</span> <span m="778310">do</span>
  <span m="778460">now</span> <span m="779410">is</span> <span
  m="780260">do</span> <span m="780510">two</span> <span
  m="780700">things.</span> <span m="782900">I</span> <span
  m="783020">want</span> <span m="783170">to</span> <span
  m="783230">think</span> <span m="783410">about</span> <span
  m="784090">this</span> <span m="785530">double-sorted</span> <span
  m="786620">list</span> <span m="787470">as</span> <span m="787780">a</span>
  <span m="787830">data</span> <span m="788090">structure</span> <span
  m="788590">in</span> <span m="788710">its</span> <span m="788840">own</span>
  <span m="789150">right</span> <span m="789990">before</span> <span
  m="790370">I</span> <span m="790650">dive</span> <span m="791210">into</span>
  <span m="791410">skip</span> <span m="791710">lists</span> <span
  m="792590">in</span> <span m="792800">general.</span> <span
  m="793920">And</span> <span m="794140">I</span> <span m="794200">want</span>
  <span m="794390">to</span> <span m="794470">analyze</span> <span
  m="797865">at</span> <span m="798320">some</span> <span
  m="798520">level,</span> <span m="798780">the</span> <span
  m="798860">best</span> <span m="799250">case</span> <span
  m="800380">situation</span> <span m="801990">for</span> <span
  m="802220">worst</span> <span m="802510">case</span> <span
  m="802720">complexity.</span></p><p><span m="804870">And</span> <span
  m="805280">by</span> <span m="805400">that</span> <span m="805580">I</span>
  <span m="805660">mean</span> <span m="806370">I</span> <span
  m="806490">want</span> <span m="806640">to</span> <span
  m="806710">structure</span> <span m="808430">the</span> <span
  m="809020">express</span> <span m="809590">stops</span> <span
  m="810970">in</span> <span m="811140">the</span> <span m="811220">best</span>
  <span m="811620">manner</span> <span m="812030">possible.</span> <span
  m="813490">These</span> <span m="813760">stops</span> <span m="814160">are
  very</span> <span m="814310">structured</span> <span m="814870">for</span>
  <span m="815030">passengers</span> <span m="815660">because</span> <span
  m="815940">they</span> <span m="816030">figured</span> <span
  m="816650">fancy</span> <span m="817040">stops</span> <span
  m="817410">on</span> <span m="817500">42nd</span> <span
  m="818150">Avenue,</span> <span m="818570">whatever--</span> <span
  m="818980">fancy</span> <span m="819370">stores.</span> <span
  m="820190">Everybody</span> <span m="820530">wants</span> <span
  m="820740">to</span> <span m="820840">go</span> <span m="821010">there</span>
  <span m="821720">and</span> <span m="822130">so</span> <span
  m="822270">on</span> <span m="822360">and</span> <span m="822460">so</span>
  <span m="822590">forth.</span> <span m="822980">So</span> <span
  m="823070">you</span> <span m="823140">have</span> <span m="823250">34</span>
  <span m="824190">pretty</span> <span m="824370">close</span> <span
  m="824630">to</span> <span m="824710">42</span> <span
  m="826240">because</span> <span m="826570">they're</span> <span
  m="826690">both</span> <span m="826890">popular</span> <span
  m="827490">destinations.</span></p><p><span m="829720">But</span> <span
  m="830110">let's</span> <span m="830370">say</span> <span
  m="830540">that</span> <span m="831400">things</span> <span
  m="831800">where</span> <span m="832870">I</span> <span
  m="833250">guess</span> <span m="833400">more</span> <span
  m="833690">egalitarian</span> <span m="835030">and</span> <span
  m="836160">randomized,</span> <span m="836900">if</span> <span
  m="837010">you</span> <span m="837110">will.</span> <span
  m="837920">And</span> <span m="838220">what</span> <span m="838480">I</span>
  <span m="838590">want</span> <span m="838800">to</span> <span
  m="838870">do</span> <span m="839100">is</span> <span m="839460">I</span>
  <span m="839550">want</span> <span m="839700">to</span> <span
  m="839760">structure</span> <span m="840310">this</span> <span
  m="841000">double-sorted</span> <span m="841930">list</span> <span
  m="842900">so</span> <span m="843800">I</span> <span m="843930">get</span>
  <span m="844400">the</span> <span m="845510">best</span> <span
  m="846470">worst</span> <span m="846820">case</span> <span
  m="847030">complexity</span> <span m="848100">for</span> <span
  m="848360">search.</span> <span m="850330">And</span> <span
  m="850860">so</span> <span m="851150">let's</span> <span m="851380">do</span>
  <span m="851510">that.</span></p><p><span m="852750">And</span> <span
  m="853450">before</span> <span m="853740">I</span> <span m="853820">do</span>
  <span m="853960">that,</span> <span m="855410">let</span> <span
  m="855600">me</span> <span m="856370">write</span> <span m="856770">out</span>
  <span m="858930">the</span> <span m="859140">search</span> <span
  m="859560">algorithm,</span> <span m="860330">which</span> <span
  m="860480">is</span> <span m="860560">going</span> <span m="860680">to</span>
  <span m="860740">be</span> <span m="860800">important.</span> <span
  m="861310">I</span> <span m="861400">want</span> <span m="861610">you</span>
  <span m="861690">to</span> <span m="862340">assimilate</span> <span
  m="862950">this,</span> <span m="863540">keep</span> <span
  m="863840">it</span> <span m="864350">in</span> <span m="864520">your</span>
  <span m="864670">head</span> <span m="864960">because</span> <span
  m="865240">we're</span> <span m="865370">going</span> <span
  m="865560">to</span> <span m="865750">analyze</span> <span
  m="866210">search</span> <span m="867000">pretty</span> <span
  m="867180">much</span> <span m="867350">for</span> <span m="867440">the</span>
  <span m="867510">rest</span> <span m="867730">of</span> <span
  m="867850">the</span> <span m="868050">morning</span> <span
  m="868420">here.</span> <span m="869250">And</span> <span m="869610">so</span>
  <span m="870510">I'll</span> <span m="870650">write</span> <span
  m="870860">this</span> <span m="871000">down.</span> <span
  m="871930">You've</span> <span m="872130">got</span> <span m="872240">a</span>
  <span m="872270">sense</span> <span m="872590">of</span> <span
  m="872690">what</span> <span m="872830">it</span> <span m="872940">is</span>
  <span m="873850">based</span> <span m="874410">on</span> <span
  m="875790">what</span> <span m="876000">I</span> <span m="876060">just</span>
  <span m="876270">did</span> <span m="876450">here</span> <span
  m="877280">with</span> <span m="877510">this</span> <span
  m="877680">example</span> <span m="878190">of</span> <span
  m="878280">66,</span> <span m="879540">but</span> <span
  m="880390">worth</span> <span m="880640">writing</span> <span
  m="880930">down.</span></p><p><span m="883930">We're</span> <span
  m="884070">going</span> <span m="884190">to</span> <span
  m="884250">walk</span> <span m="884570">right</span> <span
  m="885810">in</span> <span m="885960">the</span> <span m="886040">top</span>
  <span m="886440">linked</span> <span m="886730">list,</span> <span
  m="887060">so</span> <span m="887170">this</span> <span m="887330">is</span>
  <span m="887450">simply</span> <span m="887730">for</span> <span
  m="887880">two</span> <span m="888070">linked</span> <span
  m="888340">lists,</span> <span m="890278">and</span> <span
  m="891110">we'll</span> <span m="891290">generalize</span> <span
  m="891950">at</span> <span m="892040">some</span> <span
  m="892210">point.</span> <span m="893390">So</span> <span m="893600">we</span>
  <span m="893690">want</span> <span m="893810">to</span> <span
  m="893870">walk</span> <span m="894080">right</span> <span
  m="894350">in</span> <span m="894430">the</span> <span m="894510">top</span>
  <span m="894840">linked</span> <span m="895100">list,</span> <span
  m="898600">L1,</span> <span m="900260">until</span> <span
  m="902650">going</span> <span m="903080">right</span> <span
  m="905870">would</span> <span m="906090">go</span> <span m="906310">too</span>
  <span m="906500">far.</span></p><p><span m="911060">Now,</span> <span
  m="911230">there</span> <span m="911350">was</span> <span
  m="911580">this</span> <span m="912060">answer</span> <span
  m="912550">with</span> <span m="912710">72,</span> <span
  m="913960">which</span> <span m="914120">I</span> <span m="914190">kind</span>
  <span m="914480">of</span> <span m="914550">dismissed.</span> <span
  m="915210">But</span> <span m="915670">there's</span> <span
  m="916070">no</span> <span m="916340">reason</span> <span
  m="916760">why</span> <span m="917670">you</span> <span
  m="918000">can't</span> <span m="918660">overshoot</span> <span
  m="919260">one</span> <span m="919470">stop</span> <span m="919930">and</span>
  <span m="920090">go</span> <span m="920230">backwards.</span> <span
  m="921200">It</span> <span m="921260">would</span> <span
  m="921380">just</span> <span m="921560">be</span> <span m="921650">a</span>
  <span m="921700">different</span> <span m="922040">search</span> <span
  m="922350">algorithm.</span> <span m="923100">It's</span> <span
  m="923410">not</span> <span m="923630">something</span> <span
  m="923940">we're</span> <span m="924010">going</span> <span
  m="924130">to</span> <span m="924200">analyze</span> <span
  m="924770">here.</span> <span m="925380">It</span> <span
  m="925520">turns</span> <span m="925770">out</span> <span m="926140">in</span>
  <span m="926290">analyzing</span> <span m="926890">that</span> <span
  m="928360">with</span> <span m="928550">high</span> <span
  m="928820">probability</span> <span m="929560">would</span> <span
  m="929770">be</span> <span m="930500">even</span> <span m="930760">more</span>
  <span m="931000">painful</span> <span m="931510">than</span> <span
  m="931670">the</span> <span m="931750">painful</span> <span
  m="932260">analysis</span> <span m="932840">we're</span> <span
  m="932960">going</span> <span m="933100">to</span> <span m="933180">do.</span>
  <span m="934290">So</span> <span m="934610">we</span> <span
  m="934710">won't</span> <span m="934880">go</span> <span
  m="935020">there.</span></p><p><span m="939690">And</span> <span
  m="940065">then</span> <span m="940440">we</span> <span m="940610">walk</span>
  <span m="941050">down</span> <span m="944890">to</span> <span
  m="945030">the</span> <span m="945110">bottom</span> <span
  m="945430">list.</span> <span m="952350">And</span> <span
  m="952660">the</span> <span m="952830">bottom</span> <span
  m="953090">list</span> <span m="954320">we'll</span> <span
  m="954520">call</span> <span m="954770">L0.</span> <span m="957930">And</span>
  <span m="958810">walk</span> <span m="961160">right</span> <span
  m="963600">in</span> <span m="963930">L0</span> <span m="967180">until</span>
  <span m="967680">the</span> <span m="968280">element</span> <span
  m="968700">is</span> <span m="968860">found</span> <span m="971350">or</span>
  <span m="971500">not.</span> <span m="971960">And</span> <span
  m="972120">you</span> <span m="972210">know</span> <span
  m="972460">that</span> <span m="972940">if</span> <span
  m="973130">you've</span> <span m="973290">overshot.</span></p><p><span
  m="976220">So</span> <span m="976400">if</span> <span m="976480">you're</span>
  <span m="976580">looking</span> <span m="976860">here</span> <span
  m="977080">for</span> <span m="977410">route</span> <span
  m="977560">67,</span> <span m="979985">when</span> <span m="980380">you</span>
  <span m="980450">get</span> <span m="980570">to</span> <span
  m="980650">72</span> <span m="981130">here--</span> <span
  m="982330">you've</span> <span m="982590">seen</span> <span
  m="982750">66</span> <span m="983280">and</span> <span m="983390">you</span>
  <span m="983450">get</span> <span m="983570">to</span> <span
  m="983640">72</span> <span m="984540">and</span> <span
  m="984700">you're</span> <span m="984790">looking</span> <span
  m="984990">for</span> <span m="985090">67,</span> <span
  m="986020">search</span> <span m="986420">fails.</span> <span
  m="987450">It</span> <span m="987560">stops</span> <span m="987930">and</span>
  <span m="988050">fails.</span> <span m="988730">Doesn't</span> <span
  m="988960">succeed</span> <span m="989330">in</span> <span
  m="989420">this</span> <span m="989580">case.</span></p><p><span
  m="990880">So</span> <span m="991700">that's</span> <span
  m="991870">what</span> <span m="991990">we</span> <span m="992080">got</span>
  <span m="992280">for</span> <span m="993570">search.</span> <span
  m="994870">And</span> <span m="995030">that's</span> <span
  m="995250">our</span> <span m="995700">two</span> <span
  m="995870">linked</span> <span m="996160">list</span> <span
  m="996450">argument.</span> <span m="998300">Now,</span> <span
  m="998550">our</span> <span m="998720">analysis</span> <span
  m="1001620">essentially</span> <span m="1002110">says</span> <span
  m="1003685">what</span> <span m="1003950">I</span> <span
  m="1004040">have</span> <span m="1004460">is</span> <span
  m="1005040">I'm</span> <span m="1005280">walking</span> <span
  m="1006940">right</span> <span m="1011100">at</span> <span
  m="1011520">the</span> <span m="1011600">bottom</span> <span
  m="1011910">list</span> <span m="1012220">here,</span> <span
  m="1013090">and</span> <span m="1013490">my</span> <span
  m="1015220">top</span> <span m="1015500">list</span> <span
  m="1016990">is</span> <span m="1018420">L1,</span> <span m="1018500">so</span>
  <span m="1018850">I</span> <span m="1019010">start</span> <span
  m="1019280">with</span> <span m="1019400">L1.</span> <span
  m="1022845">And</span> <span m="1023300">my</span> <span
  m="1023430">search</span> <span m="1023780">cost</span> <span
  m="1024130">is</span> <span m="1024270">going</span> <span
  m="1024470">to</span> <span m="1024550">be</span> <span
  m="1024780">approximately</span> <span m="1027630">the</span> <span
  m="1029040">length</span> <span m="1030210">of</span> <span
  m="1030319">L1.</span></p><p><span m="1032420">The</span> <span
  m="1032900">worst</span> <span m="1033369">case</span> <span
  m="1033560">analysis,</span> <span m="1035839">I</span> <span
  m="1036280">could</span> <span m="1036510">go</span> <span
  m="1036839">all</span> <span m="1037130">the</span> <span
  m="1037200">way</span> <span m="1037470">on</span> <span
  m="1038099">the</span> <span m="1038180">top</span> <span
  m="1038450">list--</span> <span m="1039790">it's</span> <span
  m="1039990">possible.</span> <span m="1042030">But</span> <span
  m="1043680">for</span> <span m="1043910">a</span> <span
  m="1043950">given</span> <span m="1044540">value,</span> <span
  m="1045720">I'm</span> <span m="1045940">going</span> <span
  m="1046190">to</span> <span m="1046290">be</span> <span
  m="1047740">looking</span> <span m="1048190">at</span> <span
  m="1050340">only</span> <span m="1050680">a</span> <span
  m="1050750">portion</span> <span m="1052160">of</span> <span
  m="1052410">the</span> <span m="1052520">bottom</span> <span
  m="1053040">list.</span> <span m="1054730">I'm not</span> <span
  m="1054810">going</span> <span m="1054950">to</span> <span
  m="1055040">go</span> <span m="1055330">all</span> <span
  m="1055660">the</span> <span m="1055740">way</span> <span
  m="1055930">on</span> <span m="1056040">the</span> <span
  m="1056110">bottom</span> <span m="1056420">list</span> <span
  m="1056730">ever.</span> <span m="1057700">I'm</span> <span
  m="1057870">only</span> <span m="1058010">going</span> <span
  m="1058130">to</span> <span m="1058190">be</span> <span
  m="1058260">looking</span> <span m="1058490">at</span> <span
  m="1059100">a</span> <span m="1059140">portion</span> <span
  m="1059580">of</span> <span m="1059700">it.</span></p><p><span
  m="1060250">So</span> <span m="1060810">it's</span> <span
  m="1061010">going</span> <span m="1061150">to</span> <span
  m="1061220">be</span> <span m="1061380">L0</span> <span
  m="1062550">divided</span> <span m="1063020">by</span> <span
  m="1063170">L1,</span> <span m="1064220">if</span> <span m="1064650">I</span>
  <span m="1064870">have</span> <span m="1065180">interspersed</span> <span
  m="1066470">my</span> <span m="1067140">express</span> <span
  m="1067620">stops</span> <span m="1069250">in</span> <span
  m="1069440">a</span> <span m="1069520">uniform</span> <span
  m="1070030">way.</span> <span m="1071180">So</span> <span
  m="1071310">there's</span> <span m="1071490">no</span> <span
  m="1071690">reason--</span> <span m="1072230">if I</span> <span
  m="1072470">have</span> <span m="1072620">100</span> <span
  m="1074190">elements</span> <span m="1074600">in</span> <span
  m="1074700">the</span> <span m="1074780">bottom</span> <span
  m="1075080">list,</span> <span m="1077590">and</span> <span
  m="1077720">if</span> <span m="1077810">I</span> <span m="1077910">had</span>
  <span m="1078130">five,</span> <span m="1079750">just</span> <span
  m="1079980">for</span> <span m="1080090">argument</span> <span
  m="1080390">sake,</span> <span m="1080590">five</span> <span
  m="1080980">in</span> <span m="1081070">the</span> <span
  m="1081150">top</span> <span m="1081440">list,</span> <span
  m="1082160">then</span> <span m="1082500">I'd</span> <span
  m="1082690">put</span> <span m="1082870">them</span> <span
  m="1083050">at,</span> <span m="1084620">let's</span> <span
  m="1084870">say,</span> <span m="1085090">the</span> <span
  m="1085240">0</span> <span m="1085570">position,</span> <span
  m="1086130">20,</span> <span m="1086493">40,</span> <span
  m="1087420">60,</span> <span m="1088060">et</span> <span
  m="1088320">cetera.</span> <span m="1089260">So</span> <span
  m="1089370">I</span> <span m="1089420">want</span> <span m="1089580">to</span>
  <span m="1089640">have</span> <span m="1089910">roughly</span> <span
  m="1090290">equal</span> <span m="1090630">spacings.</span></p><p><span
  m="1091540">But</span> <span m="1091950">we</span> <span
  m="1093280">need</span> <span m="1093420">to</span> <span
  m="1094290">make</span> <span m="1094560">that</span> <span
  m="1094700">a</span> <span m="1094730">little</span> <span
  m="1094910">more</span> <span m="1095080">concrete,</span> <span
  m="1095505">and</span> <span m="1095930">a</span> <span
  m="1096050">little</span> <span m="1096260">more</span> <span
  m="1096440">precise.</span> <span m="1097600">And</span> <span
  m="1097890">what</span> <span m="1098040">I'm</span> <span
  m="1098130">saying</span> <span m="1098430">here</span> <span
  m="1098690">simply</span> <span m="1099070">is</span> <span
  m="1099210">that</span> <span m="1099490">this</span> <span
  m="1099730">is</span> <span m="1099880">the</span> <span
  m="1099970">cost</span> <span m="1100850">of</span> <span
  m="1101040">traversal</span> <span m="1102010">in</span> <span
  m="1102180">the</span> <span m="1102250">top</span> <span
  m="1102550">list,</span> <span m="1103300">and</span> <span
  m="1103640">this</span> <span m="1103790">is</span> <span
  m="1103880">the</span> <span m="1103960">cost</span> <span
  m="1104300">of</span> <span m="1104400">traversal</span> <span
  m="1105260">in</span> <span m="1105390">the</span> <span
  m="1105460">bottom</span> <span m="1105760">list,</span> <span
  m="1106370">because</span> <span m="1106550">I'm</span> <span
  m="1106630">not</span> <span m="1106750">going</span> <span
  m="1106870">to</span> <span m="1106930">go</span> <span m="1107050">all</span>
  <span m="1107240">the</span> <span m="1107300">way</span> <span
  m="1107480">in</span> <span m="1107550">the</span> <span
  m="1107620">bottom</span> <span m="1107870">list.</span> <span
  m="1108480">I'm</span> <span m="1108850">only</span> <span
  m="1109070">going</span> <span m="1109210">to</span> <span
  m="1109270">go</span> <span m="1109530">a</span> <span
  m="1109590">portion</span> <span m="1110070">on</span> <span
  m="1110200">the</span> <span m="1110260">bottom</span> <span
  m="1110500">list.</span> <span m="1111650">Everybody</span> <span
  m="1112130">gets</span> <span m="1112320">that?</span> <span
  m="1113152">Yup?</span> <span m="1114400">All</span> <span
  m="1114530">right,</span> <span m="1114680">good.</span></p><p><span
  m="1115830">So</span> <span m="1116530">if</span> <span m="1116690">I</span>
  <span m="1116770">want</span> <span m="1116920">to</span> <span
  m="1117140">minimize</span> <span m="1117760">this</span> <span
  m="1117950">cost,</span> <span m="1118600">which</span> <span
  m="1118860">is</span> <span m="1118970">going</span> <span
  m="1119120">to</span> <span m="1119200">tell</span> <span
  m="1119440">me</span> <span m="1120940">how</span> <span m="1121370">to</span>
  <span m="1122810">scatter</span> <span m="1124250">these</span> <span
  m="1125510">elements</span> <span m="1126030">in</span> <span
  m="1126140">the</span> <span m="1126420">top</span> <span
  m="1126750">list,</span> <span m="1127720">how</span> <span
  m="1127900">to</span> <span m="1128010">choose</span> <span
  m="1128540">my</span> <span m="1128840">express</span> <span
  m="1129650">stops,</span> <span m="1130230">if</span> <span
  m="1130340">you</span> <span m="1130460">will--</span> <span
  m="1131220">I</span> <span m="1131610">want</span> <span m="1131750">to</span>
  <span m="1131810">scatter</span> <span m="1132160">these</span> <span
  m="1132930">in</span> <span m="1133090">a</span> <span
  m="1133140">uniform</span> <span m="1133600">way,</span> <span
  m="1134560">then</span> <span m="1137350">this</span> <span
  m="1138870">is</span> <span m="1139060">minimized</span> <span
  m="1140520">when</span> <span m="1140910">terms</span> <span
  m="1141330">are</span> <span m="1141440">equal.</span> <span
  m="1144920">You</span> <span m="1144990">could</span> <span
  m="1145100">go</span> <span m="1145250">off</span> <span
  m="1145470">and</span> <span m="1145690">differentiate</span> <span
  m="1146850">and</span> <span m="1147070">do</span> <span
  m="1147200">that.</span> <span m="1147510">It's</span> <span
  m="1148070">fairly</span> <span m="1148400">standard.</span></p><p><span
  m="1149670">And</span> <span m="1149880">what</span> <span
  m="1150050">you</span> <span m="1150150">end</span> <span
  m="1150300">up</span> <span m="1150380">getting</span> <span
  m="1150650">is</span> <span m="1151120">you</span> <span
  m="1151300">want</span> <span m="1151470">to</span> <span
  m="1151530">get</span> <span m="1153636">L1</span> <span
  m="1154330">square</span> <span m="1156950">equals</span> <span
  m="1157560">L0</span> <span m="1159170">equals</span> <span
  m="1159650">n.</span> <span m="1160510">So</span> <span m="1160820">all</span>
  <span m="1161130">of</span> <span m="1161220">the</span> <span
  m="1161290">elements</span> <span m="1161750">are</span> <span
  m="1161870">down</span> <span m="1162130">at</span> <span
  m="1162210">the</span> <span m="1162280">bottom</span> <span
  m="1162600">list,</span> <span m="1163460">and</span> <span
  m="1163710">so</span> <span m="1164650">the</span> <span
  m="1165260">cardinality</span> <span m="1165880">of</span> <span
  m="1165980">the</span> <span m="1166050">bottom</span> <span
  m="1166360">list</span> <span m="1166630">is</span> <span
  m="1166830">n.</span> <span m="1167730">And</span> <span
  m="1168850">roughly</span> <span m="1170110">speaking,</span> <span
  m="1171120">you're</span> <span m="1171370">going</span> <span
  m="1171610">to</span> <span m="1172450">end</span> <span m="1172690">up</span>
  <span m="1173670">optimizing,</span> <span m="1174980">if</span> <span
  m="1175220">you</span> <span m="1176650">have</span> <span
  m="1176980">this</span> <span m="1177450">satisfied,</span> <span
  m="1178560">which</span> <span m="1178740">means</span> <span
  m="1178970">that</span> <span m="1179150">L1</span> <span
  m="1179790">is</span> <span m="1179950">going</span> <span
  m="1180090">to</span> <span m="1180150">be</span> <span
  m="1180260">square</span> <span m="1180550">root</span> <span
  m="1180690">of</span> <span m="1180800">n.</span> <span
  m="1182010">OK?</span></p><p><span m="1183310">So</span> <span
  m="1184020">what</span> <span m="1184330">you've</span> <span
  m="1184440">done</span> <span m="1184630">here</span> <span
  m="1184880">is</span> <span m="1185060">you've</span> <span
  m="1185180">said</span> <span m="1186300">a</span> <span
  m="1186390">bunch</span> <span m="1186590">of</span> <span
  m="1186660">things,</span> <span m="1186870">actually.</span> <span
  m="1188030">You've</span> <span m="1188250">decided</span> <span
  m="1189410">how</span> <span m="1189690">many</span> <span
  m="1189990">elements</span> <span m="1190640">are</span> <span
  m="1190760">going</span> <span m="1190930">to</span> <span
  m="1191010">be</span> <span m="1191820">in</span> <span
  m="1192010">your</span> <span m="1192600">top</span> <span
  m="1192850">list.</span> <span m="1193580">If</span> <span
  m="1193730">there's</span> <span m="1193880">n</span> <span
  m="1194050">elements</span> <span m="1194360">in</span> <span
  m="1194460">the</span> <span m="1194520">bottom</span> <span
  m="1194780">list,</span> <span m="1195450">you</span> <span
  m="1195660">want</span> <span m="1195800">to</span> <span
  m="1195860">have</span> <span m="1196190">the</span> <span
  m="1196360">square</span> <span m="1196780">root</span> <span
  m="1196880">of</span> <span m="1196960">n</span> <span
  m="1197090">elements</span> <span m="1198350">in</span> <span
  m="1198490">the</span> <span m="1198560">top</span> <span
  m="1198800">list.</span></p><p><span m="1199580">And</span> <span
  m="1200030">not</span> <span m="1200170">only</span> <span
  m="1200360">that,</span> <span m="1200950">in</span> <span
  m="1201110">order</span> <span m="1201330">to</span> <span
  m="1201640">make</span> <span m="1201870">sure</span> <span
  m="1202100">that</span> <span m="1202280">this</span> <span
  m="1202420">works</span> <span m="1202720">properly,</span> <span
  m="1203770">and</span> <span m="1204140">that</span> <span
  m="1204310">you</span> <span m="1204410">don't</span> <span
  m="1205840">get</span> <span m="1206560">a</span> <span
  m="1206700">worse</span> <span m="1207050">case</span> <span
  m="1207910">cost</span> <span m="1208730">that</span> <span
  m="1208950">is</span> <span m="1209060">not</span> <span
  m="1209260">optimal,</span> <span m="1210210">you</span> <span
  m="1210400">do</span> <span m="1210640">have</span> <span
  m="1210930">to</span> <span m="1211590">intersperse</span> <span
  m="1212720">the</span> <span m="1212890">square</span> <span
  m="1213240">root</span> <span m="1213380">of</span> <span m="1213520">n</span>
  <span m="1213690">elements</span> <span m="1215340">at</span> <span
  m="1215580">regular</span> <span m="1216070">intervals</span> <span
  m="1217880">in</span> <span m="1218200">relation</span> <span
  m="1218580">to</span> <span m="1218660">the</span> <span
  m="1218730">bottom</span> <span m="1219000">list</span> <span
  m="1219630">on</span> <span m="1219850">the</span> <span
  m="1219920">top</span> <span m="1220160">list.</span> <span
  m="1221020">OK,</span> <span m="1221350">so</span> <span
  m="1221500">pictorially</span> <span m="1222890">what</span> <span
  m="1223370">this</span> <span m="1223520">means</span> <span
  m="1223830">is</span> <span m="1224580">it's</span> <span
  m="1224820">not</span> <span m="1225030">what</span> <span
  m="1225200">you</span> <span m="1225310">have</span> <span
  m="1225510">here.</span></p><p><span m="1226730">What</span> <span
  m="1227370">you</span> <span m="1227840">really</span> <span
  m="1228060">want</span> <span m="1228910">is</span> <span
  m="1229310">something</span> <span m="1229780">that,</span> <span
  m="1232160">let's</span> <span m="1232380">say,</span> <span
  m="1232750">looks</span> <span m="1233040">like</span> <span
  m="1234370">this</span> <span m="1235680">where</span> <span
  m="1236090">this</span> <span m="1238660">part</span> <span
  m="1238920">here</span> <span m="1240920">is</span> <span
  m="1241200">square</span> <span m="1241660">root</span> <span
  m="1241810">of</span> <span m="1241950">n</span> <span
  m="1242950">elements</span> <span m="1244400">up</span> <span
  m="1244590">until</span> <span m="1244780">that</span> <span
  m="1244980">point,</span> <span m="1245750">and</span> <span
  m="1245950">then</span> <span m="1246570">let's</span> <span
  m="1246780">say</span> <span m="1246930">we</span> <span m="1247020">go</span>
  <span m="1247270">from</span> <span m="1248130">here</span> <span
  m="1249830">to</span> <span m="1249940">here</span> <span
  m="1250190">or</span> <span m="1250420">square root</span> <span
  m="1250870">of</span> <span m="1250980">n</span> <span
  m="1251930">elements,</span> <span m="1252510">and</span> <span
  m="1252610">maybe</span> <span m="1252820">I'll</span> <span
  m="1252930">have</span> <span m="1253080">a</span> <span m="1254100">66</span>
  <span m="1254880">here</span> <span m="1255130">because</span> <span
  m="1255400">that's</span> <span m="1256510">exactly</span> <span
  m="1256880">where</span> <span m="1257470">I</span> <span
  m="1257610">want</span> <span m="1257810">my</span> <span
  m="1257920">square</span> <span m="1258190">root</span> <span
  m="1258310">of</span> <span m="1258420">n.</span> <span
  m="1259180">Basically,</span> <span m="1259590">three</span> <span
  m="1259800">elements</span> <span m="1260160">in</span> <span
  m="1260260">between.</span> <span m="1262130">So</span> <span
  m="1262250">I</span> <span m="1262300">got</span> <span m="1262470">66</span>
  <span m="1263070">here,</span> <span m="1264080">et</span> <span
  m="1264310">cetera.</span> <span m="1266870">I</span> <span
  m="1266960">mean</span> <span m="1267070">I</span> <span
  m="1267150">chose</span> <span m="1267390">n</span> <span
  m="1267590">to</span> <span m="1267670">be</span> <span m="1267850">a</span>
  <span m="1268090">particular</span> <span m="1268430">value</span> <span
  m="1268770">here,</span> <span m="1269310">but</span> <span
  m="1269470">you</span> <span m="1269540">get</span> <span
  m="1269670">the</span> <span m="1269740">picture.</span></p><p><span
  m="1272230">So</span> <span m="1272420">the</span> <span
  m="1272510">search</span> <span m="1272900">now,</span> <span
  m="1273560">as</span> <span m="1273730">you</span> <span
  m="1273800">can</span> <span m="1273910">see</span> <span
  m="1274140">if</span> <span m="1274240">you</span> <span
  m="1274310">just</span> <span m="1274490">add</span> <span
  m="1274680">those</span> <span m="1274870">up</span> <span
  m="1275210">you</span> <span m="1275220">get</span> <span
  m="1275340">square</span> <span m="1275560">root</span> <span
  m="1275660">of</span> <span m="1275780">n</span> <span
  m="1275940">here,</span> <span m="1276700">and</span> <span
  m="1277170">you</span> <span m="1277240">got</span> <span m="1277410">n</span>
  <span m="1277630">divided</span> <span m="1277940">by</span> <span
  m="1278050">square</span> <span m="1278280">root</span> <span
  m="1278380">of</span> <span m="1278490">n</span> <span
  m="1278660">here.</span> <span m="1279270">So</span> <span
  m="1279450">that's</span> <span m="1279640">square root</span> <span
  m="1279900">of</span> <span m="1279950">n</span> <span m="1280180">as</span>
  <span m="1280300">well.</span> <span m="1281060">So</span> <span
  m="1281540">the</span> <span m="1281670">search</span> <span
  m="1281930">cost</span> <span m="1285192">is</span> <span
  m="1286130">order</span> <span m="1286390">square root of</span> <span
  m="1286852">n.</span></p><p><span m="1289530">And</span> <span
  m="1289690">so</span> <span m="1289780">that's it.</span> <span
  m="1290766">That's</span> <span m="1291690">the</span> <span
  m="1292200">first</span> <span m="1293320">generalization,</span> <span
  m="1295670">and</span> <span m="1296490">really</span> <span
  m="1296660">the</span> <span m="1296890">most</span> <span
  m="1297160">important</span> <span m="1297560">one,</span> <span
  m="1298580">that</span> <span m="1299260">comes</span> <span
  m="1299900">from</span> <span m="1300180">going</span> <span
  m="1300470">from</span> <span m="1300690">a</span> <span
  m="1300770">single</span> <span m="1301290">sorted</span> <span
  m="1301650">list</span> <span m="1302580">to</span> <span
  m="1304200">an</span> <span m="1304300">approximation</span> <span
  m="1305010">of</span> <span m="1305120">a</span> <span m="1305440">skip</span>
  <span m="1305760">list.</span> <span m="1307370">So</span> <span
  m="1308300">what</span> <span m="1308490">do</span> <span
  m="1308550">you</span> <span m="1308630">do</span> <span m="1308770">if</span>
  <span m="1308870">you</span> <span m="1308940">want</span> <span
  m="1309060">to</span> <span m="1309120">make</span> <span
  m="1309240">things</span> <span m="1309470">better?</span> <span
  m="1311420">So</span> <span m="1311470">we</span> <span
  m="1311540">want</span> <span m="1311660">to</span> <span
  m="1311720">make</span> <span m="1311820">things</span> <span
  m="1312010">better?</span> <span m="1312970">Are</span> <span
  m="1313090">we</span> <span m="1313180">happy</span> <span
  m="1313470">with</span> <span m="1313600">square root</span> <span
  m="1313910">of</span> <span m="1313970">n?</span></p><p><span
  m="1314756">AUDIENCE: No.</span></p><p><span m="1315150">SRINIVAS DEVADAS:
  No.</span> <span m="1315500">Well,</span> <span m="1315680">what's</span>
  <span m="1315990">our</span> <span m="1316090">target?</span></p><p><span
  m="1316966">AUDIENCE: Log n.</span></p><p><span m="1317760">SRINIVAS DEVADAS:
  Log n,</span> <span m="1318220">obviously.</span> <span
  m="1319370">Well,</span> <span m="1319790">I</span> <span
  m="1319880">guess</span> <span m="1320030">you</span> <span
  m="1320090">can</span> <span m="1320200">argue</span> <span
  m="1320460">that</span> <span m="1320590">our</span> <span
  m="1320670">target</span> <span m="1321020">may be</span> <span
  m="1321270">order</span> <span m="1321520">1</span> <span
  m="1321870">at</span> <span m="1321970">some</span> <span
  m="1322200">point,</span> <span m="1322610">but</span> <span
  m="1322640">for</span> <span m="1322770">today's</span> <span
  m="1323090">lecture</span> <span m="1323880">it</span> <span
  m="1324070">is</span> <span m="1324260">order</span> <span m="1324490">log
  n</span> <span m="1325060">with</span> <span m="1325280">high</span> <span
  m="1325500">probability.</span> <span m="1326960">We'll</span> <span
  m="1327110">leave</span> <span m="1327290">it</span> <span
  m="1327380">at</span> <span m="1327480">that.</span></p><p><span
  m="1328150">And</span> <span m="1328630">so</span> <span
  m="1329900">what</span> <span m="1331270">do</span> <span
  m="1331330">you</span> <span m="1331400">do</span> <span m="1331550">if</span>
  <span m="1333470">you</span> <span m="1333550">want</span> <span
  m="1333670">to</span> <span m="1333730">go</span> <span
  m="1333860">this</span> <span m="1334040">way</span> <span
  m="1334940">and</span> <span m="1335140">generalize?</span> <span
  m="1336370">You</span> <span m="1336570">simply</span> <span
  m="1336950">add</span> <span m="1337200">more</span> <span
  m="1337380">lists.</span> <span m="1338700">I</span> <span
  m="1338810">mean</span> <span m="1338920">it</span> <span
  m="1339030">seems</span> <span m="1339550">to</span> <span
  m="1339620">be</span> <span m="1339780">pretty</span> <span
  m="1340010">much</span> <span m="1340170">the</span> <span
  m="1340230">only</span> <span m="1340400">thing</span> <span
  m="1340550">we</span> <span m="1340650">could</span> <span
  m="1340760">do</span> <span m="1340890">here.</span> <span
  m="1342050">So</span> <span m="1342810">let's</span> <span
  m="1343010">go</span> <span m="1343130">ahead</span> <span
  m="1343520">and</span> <span m="1343720">add</span> <span m="1343930">a</span>
  <span m="1343960">third</span> <span m="1344310">list.</span></p><p><span
  m="1345900">So</span> <span m="1347340">if</span> <span m="1347470">you</span>
  <span m="1347540">have</span> <span m="1347680">two</span> <span
  m="1347940">sorted</span> <span m="1348270">lists,</span> <span
  m="1352510">that</span> <span m="1352710">implies</span> <span
  m="1353100">I</span> <span m="1353240">have</span> <span m="1353420">2</span>
  <span m="1353650">square</span> <span m="1353980">root</span> <span
  m="1354100">of</span> <span m="1354250">n.</span> <span m="1354560">If</span>
  <span m="1354690">I</span> <span m="1354760">want</span> <span
  m="1354890">to</span> <span m="1354950">be</span> <span
  m="1355030">explicit</span> <span m="1355490">about</span> <span
  m="1355690">the</span> <span m="1355760">constant</span> <span
  m="1356770">in</span> <span m="1356960">terms</span> <span
  m="1357240">of</span> <span m="1357390">the</span> <span
  m="1358370">search</span> <span m="1358680">cost,</span> <span
  m="1359230">assuming</span> <span m="1359740">things</span> <span
  m="1360050">are</span> <span m="1361060">interspersed</span> <span
  m="1361710">exactly</span> <span m="1362190">right.</span> <span
  m="1362900">Keep</span> <span m="1363090">that</span> <span
  m="1363220">in</span> <span m="1363310">mind</span> <span
  m="1363700">because</span> <span m="1364180">that</span> <span
  m="1364450">is</span> <span m="1364540">going</span> <span
  m="1364660">to</span> <span m="1364730">go</span> <span
  m="1364820">away</span> <span m="1365560">when</span> <span
  m="1365740">we</span> <span m="1365850">go</span> <span m="1366040">and</span>
  <span m="1366130">randomize.</span> <span m="1367000">We're</span> <span
  m="1367140">going</span> <span m="1367260">to</span> <span
  m="1367320">be</span> <span m="1367380">flipping</span> <span
  m="1367710">coins</span> <span m="1368700">and</span> <span
  m="1369580">things</span> <span m="1369780">like</span> <span
  m="1369970">that.</span> <span m="1370220">But</span> <span
  m="1370500">so</span> <span m="1370770">far,</span> <span
  m="1371500">things</span> <span m="1371710">are</span> <span
  m="1371750">very</span> <span m="1372070">structured.</span></p><p><span
  m="1373880">What</span> <span m="1374080">do</span> <span
  m="1374140">you</span> <span m="1374210">think--</span> <span
  m="1376090">we</span> <span m="1376260">won't</span> <span
  m="1376460">do</span> <span m="1376600">this</span> <span
  m="1376770">analysis--</span> <span m="1378830">the</span> <span
  m="1379190">cost</span> <span m="1379560">is</span> <span
  m="1379690">going</span> <span m="1379890">to</span> <span
  m="1379970">be</span> <span m="1381880">if</span> <span m="1382100">I</span>
  <span m="1382330">intersperse</span> <span m="1383000">optimally,</span> <span
  m="1384180">what</span> <span m="1384410">is</span> <span
  m="1384850">the</span> <span m="1384980">cost</span> <span
  m="1385340">going</span> <span m="1385510">to</span> <span
  m="1385580">be</span> <span m="1386390">for</span> <span m="1387260">a</span>
  <span m="1387320">search</span> <span m="1388830">when</span> <span
  m="1388970">I</span> <span m="1389010">have</span> <span
  m="1389190">three</span> <span m="1390510">sorted</span> <span
  m="1390790">lists?</span></p><p><span m="1392575">AUDIENCE: Cube</span> <span
  m="1393010">root.</span></p><p><span m="1394020">SRINIVAS DEVADAS: Cube</span>
  <span m="1394280">root.</span> <span m="1394790">Great</span> <span
  m="1395140">guess.</span> <span m="1395540">Who</span> <span
  m="1395670">said</span> <span m="1395880">cube</span> <span
  m="1395980">root?</span></p><p><span m="1396930">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="1397960">SRINIVAS DEVADAS: You</span> <span
  m="1398130">already</span> <span m="1398320">have</span> <span
  m="1398450">a</span> <span m="1398490">Frisbee.</span> <span
  m="1399510">Give</span> <span m="1399730">it</span> <span
  m="1399800">to</span> <span m="1399860">a</span> <span
  m="1399960">friend.</span> <span m="1400780">I</span> <span
  m="1400910">need</span> <span m="1401060">to</span> <span
  m="1401120">get</span> <span m="1401260">rid</span> <span
  m="1401380">of</span> <span m="1401450">these.</span></p><p><span
  m="1404810">So</span> <span m="1407050">it's</span> <span
  m="1407310">going</span> <span m="1407440">to</span> <span
  m="1407500">be</span> <span m="1408050">cube</span> <span
  m="1408340">root,</span> <span m="1408710">and</span> <span
  m="1409130">the</span> <span m="1409310">constant</span> <span
  m="1409730">in</span> <span m="1409800">front</span> <span
  m="1409990">of</span> <span m="1410060">that</span> <span
  m="1410210">is</span> <span m="1410300">going</span> <span
  m="1410430">to</span> <span m="1410500">be?</span></p><p><span
  m="1411116">AUDIENCE: 3.</span></p><p><span m="1411830">SRINIVAS DEVADAS:
  3.</span> <span m="1412480">So</span> <span m="1412720">you</span> <span
  m="1412830">have--</span> <span m="1415870">right?</span> <span
  m="1416380">So</span> <span m="1416780">let's</span> <span
  m="1416950">just</span> <span m="1417090">keep</span> <span
  m="1417230">going.</span> <span m="1417910">You</span> <span
  m="1418020">have</span> <span m="1418130">k</span> <span
  m="1418460">sorted</span> <span m="1418780">lists.</span> <span
  m="1419860">You're</span> <span m="1419950">going</span> <span
  m="1420070">to</span> <span m="1420140">have</span> <span m="1420690">k</span>
  <span m="1421000">times</span> <span m="1422170">the</span> <span
  m="1422290">k-th</span> <span m="1422670">root</span> <span
  m="1422960">of</span> <span m="1423120">n.</span> <span
  m="1427700">That's</span> <span m="1427930">what</span> <span
  m="1428080">you</span> <span m="1428160">got.</span> <span
  m="1429310">And</span> <span m="1429850">I'm</span> <span
  m="1430030">not</span> <span m="1430130">going</span> <span
  m="1430250">to</span> <span m="1430310">bother</span> <span
  m="1430530">drawing</span> <span m="1430870">this,</span> <span
  m="1431070">but</span> <span m="1431180">essentially</span> <span
  m="1431560">what</span> <span m="1431670">happens</span> <span
  m="1432010">is</span> <span m="1432940">you</span> <span
  m="1433160">are</span> <span m="1433560">making</span> <span
  m="1433980">the</span> <span m="1434060">same</span> <span
  m="1434550">number</span> <span m="1434910">of</span> <span
  m="1435020">moves</span> <span m="1436430">which</span> <span
  m="1436610">corresponds</span> <span m="1437110">to</span> <span
  m="1437250">the</span> <span m="1438150">root</span> <span
  m="1438870">of</span> <span m="1439390">n,</span> <span m="1439740">the</span>
  <span m="1439850">corresponding</span> <span m="1440370">root</span> <span
  m="1440570">of</span> <span m="1440690">n,</span> <span m="1441180">at</span>
  <span m="1441370">every</span> <span m="1441760">level.</span></p><p><span
  m="1444420">And</span> <span m="1446510">the</span> <span
  m="1446640">last</span> <span m="1446960">thing</span> <span
  m="1447100">we</span> <span m="1447180">have</span> <span
  m="1447290">to</span> <span m="1447590">do to</span> <span
  m="1448550">get</span> <span m="1448770">a</span> <span
  m="1448800">sense</span> <span m="1449210">for</span> <span
  m="1452080">what</span> <span m="1452270">happens</span> <span
  m="1452600">here</span> <span m="1453610">is</span> <span
  m="1453740">we</span> <span m="1453840">have</span> <span
  m="1454010">log</span> <span m="1454210">n</span> <span
  m="1454580">sorted</span> <span m="1454860">lists,</span> <span
  m="1456320">so</span> <span m="1456540">the</span> <span
  m="1456610">number</span> <span m="1456900">of</span> <span
  m="1457020">levels</span> <span m="1457630">here</span> <span
  m="1459100">is</span> <span m="1459360">log</span> <span m="1459540">n.</span>
  <span m="1460770">So</span> <span m="1460940">this</span> <span
  m="1461030">is</span> <span m="1461160">starting</span> <span
  m="1461470">to</span> <span m="1461560">look</span> <span
  m="1461980">kind</span> <span m="1462180">of</span> <span
  m="1462240">familiar</span> <span m="1463460">because</span> <span
  m="1463750">it</span> <span m="1464450">borrows</span> <span
  m="1464840">from</span> <span m="1465010">other</span> <span
  m="1465180">data</span> <span m="1465410">structures.</span> <span
  m="1466530">And</span> <span m="1466850">what</span> <span
  m="1467410">this</span> <span m="1467700">is</span> <span
  m="1468040">I'm</span> <span m="1468140">just</span> <span
  m="1468280">going</span> <span m="1468400">to</span> <span
  m="1468470">substitute</span> <span m="1469510">log</span> <span
  m="1469770">n</span> <span m="1470070">for</span> <span m="1470290">k,</span>
  <span m="1471390">and</span> <span m="1471610">I</span> <span
  m="1471690">got</span> <span m="1471930">this</span> <span
  m="1473580">kind</span> <span m="1473910">of</span> <span
  m="1473980">scary</span> <span m="1474390">looking--</span> <span
  m="1476240">I</span> <span m="1476350">was</span> <span
  m="1476470">scared</span> <span m="1476790">the</span> <span
  m="1476850">first</span> <span m="1477100">time</span> <span
  m="1477280">I</span> <span m="1477320">saw</span> <span
  m="1477570">this.</span> <span m="1481306">Oh,</span> <span m="1481780">this
  is n.</span></p><p><span m="1485050">It's</span> <span m="1485600">the</span>
  <span m="1486070">log</span> <span m="1486380">n-th</span> <span
  m="1486670">root</span> <span m="1487030">of</span> <span
  m="1487210">n,</span> <span m="1488330">OK?</span> <span
  m="1489520">And</span> <span m="1489740">so</span> <span
  m="1489820">it's</span> <span m="1489920">kind</span> <span
  m="1490060">of</span> <span m="1490120">scary</span> <span
  m="1490420">looking.</span> <span m="1490910">But</span> <span
  m="1491100">what</span> <span m="1491250">is</span> <span
  m="1491380">the</span> <span m="1491460">log</span> <span
  m="1491690">n-th</span> <span m="1491980">root</span> <span
  m="1492300">of</span> <span m="1492470">n--</span> <span
  m="1493140">and</span> <span m="1493340">we</span> <span
  m="1493420">can</span> <span m="1493520">assume</span> <span
  m="1493840">that</span> <span m="1493990">n</span> <span m="1494140">is</span>
  <span m="1494240">a</span> <span m="1494290">power</span> <span
  m="1494560">of</span> <span m="1494670">two?</span></p><p><span
  m="1496119">AUDIENCE: 2.</span></p><p><span m="1496602">SRINIVAS DEVADAS:
  2,</span> <span m="1497570">exactly.</span> <span m="1498420">It's</span>
  <span m="1498530">not</span> <span m="1498740">that</span> <span
  m="1498900">scary</span> <span m="1499180">looking,</span> <span
  m="1499740">and</span> <span m="1499900">that's</span> <span
  m="1500020">because</span> <span m="1500230">I'm</span> <span
  m="1500320">not</span> <span m="1500480">a</span> <span
  m="1500510">mathematician.</span> <span m="1501630">That's</span> <span
  m="1501810">why</span> <span m="1501930">I</span> <span m="1501970">was</span>
  <span m="1502110">scared.</span> <span m="1503710">So</span> <span
  m="1503870">2</span> <span m="1504100">log n.</span></p><p><span
  m="1506930">All</span> <span m="1507000">right.</span> <span
  m="1507850">So</span> <span m="1508960">that's</span> <span
  m="1509490">it.</span> <span m="1510140">So</span> <span
  m="1510250">you</span> <span m="1510360">get</span> <span m="1510550">a</span>
  <span m="1510580">sense</span> <span m="1510950">of</span> <span
  m="1511080">how</span> <span m="1511310">this</span> <span
  m="1511460">works</span> <span m="1511850">now,</span> <span
  m="1512460">right?</span> <span m="1514170">We</span> <span
  m="1514350">haven't</span> <span m="1514620">talked</span> <span
  m="1514840">about</span> <span m="1515000">randomized</span> <span
  m="1515430">structures</span> <span m="1515900">yet,</span> <span
  m="1516730">but</span> <span m="1517030">I've</span> <span
  m="1517160">given</span> <span m="1517410">you</span> <span
  m="1517540">the</span> <span m="1517650">template</span> <span
  m="1518640">that's</span> <span m="1518860">associated</span> <span
  m="1519370">with</span> <span m="1519470">the</span> <span
  m="1519540">skip</span> <span m="1519880">list,</span> <span
  m="1520660">which</span> <span m="1520950">essentially</span> <span
  m="1521420">says</span> <span m="1522320">what</span> <span
  m="1522920">I'm</span> <span m="1522990">going</span> <span
  m="1523120">to</span> <span m="1523190">have</span> <span
  m="1524000">are--</span> <span m="1525860">if</span> <span
  m="1526040">it</span> <span m="1526110">was</span> <span
  m="1526240">static</span> <span m="1527260">data</span> <span
  m="1527600">items</span> <span m="1529290">and</span> <span
  m="1529620">n</span> <span m="1529820">was</span> <span m="1529990">a</span>
  <span m="1530040">power</span> <span m="1530360">of</span> <span
  m="1530500">two,</span> <span m="1531500">then</span> <span
  m="1531940">essentially</span> <span m="1532370">what</span> <span
  m="1532500">I'm</span> <span m="1532580">saying</span> <span
  m="1532880">is</span> <span m="1533600">I'm</span> <span
  m="1533760">going</span> <span m="1533910">to</span> <span
  m="1533990">have</span> <span m="1534780">a</span> <span
  m="1535150">bunch</span> <span m="1535480">of</span> <span
  m="1535590">items,</span> <span m="1536080">n</span> <span
  m="1536320">items,</span> <span m="1537230">at</span> <span
  m="1537420">the</span> <span m="1537490">bottom.</span></p><p><span
  m="1538620">I'm</span> <span m="1538760">going</span> <span
  m="1538880">to</span> <span m="1538940">have</span> <span m="1539030">n</span>
  <span m="1539160">over</span> <span m="1539360">2</span> <span
  m="1539620">items</span> <span m="1540475">at</span> <span
  m="1540930">the</span> <span m="1541270">list</span> <span
  m="1541560">that's</span> <span m="1541690">just</span> <span
  m="1541910">immediately</span> <span m="1542390">above.</span> <span
  m="1544280">And</span> <span m="1544600">each</span> <span
  m="1544830">of</span> <span m="1544900">them</span> <span
  m="1545010">are</span> <span m="1545080">going</span> <span
  m="1545200">to</span> <span m="1545270">be</span> <span
  m="1545780">alternating.</span> <span m="1546620">You're</span> <span
  m="1546740">going</span> <span m="1546860">to</span> <span
  m="1546920">have</span> <span m="1547030">an</span> <span
  m="1547200">item</span> <span m="1547500">in</span> <span
  m="1547630">between.</span> <span m="1548570">And</span> <span
  m="1548760">then</span> <span m="1548880">on</span> <span
  m="1548970">the</span> <span m="1549050">top</span> <span
  m="1549510">I'm</span> <span m="1549650">going</span> <span
  m="1549790">to</span> <span m="1549880">see</span> <span m="1550620">n</span>
  <span m="1550980">over</span> <span m="1551140">4</span> <span
  m="1551450">items,</span> <span m="1552210">and</span> <span
  m="1552390">so</span> <span m="1552510">on</span> <span m="1552600">and</span>
  <span m="1552700">so</span> <span m="1552820">forth.</span></p><p><span
  m="1553940">What</span> <span m="1554040">does</span> <span
  m="1554130">that</span> <span m="1554280">look</span> <span
  m="1554440">like?</span> <span m="1556270">Kind</span> <span
  m="1556450">of</span> <span m="1556520">looks</span> <span
  m="1556680">like</span> <span m="1556820">a</span> <span
  m="1556870">tree,</span> <span m="1557300">right?</span> <span
  m="1557960">I</span> <span m="1558050">mean</span> <span m="1558140">it</span>
  <span m="1558200">doesn't</span> <span m="1558420">have</span> <span
  m="1558570">the</span> <span m="1558630">structure</span> <span
  m="1559210">of</span> <span m="1559300">a</span> <span m="1559370">tree</span>
  <span m="1560090">in</span> <span m="1560230">the</span> <span
  m="1560300">sense</span> <span m="1560610">of</span> <span
  m="1560700">the</span> <span m="1560780">edges</span> <span
  m="1561230">of</span> <span m="1561340">a</span> <span
  m="1561400">tree.</span> <span m="1562110">It's</span> <span
  m="1562560">quite</span> <span m="1562800">different</span> <span
  m="1563140">because</span> <span m="1563410">you're</span> <span
  m="1563530">connecting</span> <span m="1564070">things</span> <span
  m="1565330">differently.</span> <span m="1566300">You</span> <span
  m="1566500">have</span> <span m="1566630">all</span> <span
  m="1566880">the</span> <span m="1566950">leaves</span> <span
  m="1567360">connected</span> <span m="1567730">down</span> <span
  m="1567970">at</span> <span m="1568030">the</span> <span
  m="1568100">bottom</span> <span m="1568510">of</span> <span
  m="1568650">this</span> <span m="1568750">so-called</span> <span
  m="1569480">tree</span> <span m="1570170">with</span> <span
  m="1570635">this</span> <span m="1570910">doubly</span> <span
  m="1571220">linked</span> <span m="1571450">list,</span> <span
  m="1572070">but</span> <span m="1572300">it</span> <span
  m="1572390">has</span> <span m="1573010">the</span> <span
  m="1573420">triangle</span> <span m="1573890">structure</span> <span
  m="1574290">of</span> <span m="1574370">a</span> <span
  m="1574420">tree.</span> <span m="1575140">And</span> <span
  m="1575410">that's</span> <span m="1575580">where</span> <span
  m="1575770">the</span> <span m="1576140">log n</span> <span
  m="1576550">comes</span> <span m="1576820">from.</span></p><p><span
  m="1577490">So</span> <span m="1578400">this</span> <span
  m="1578670">is</span> <span m="1578790">would all</span> <span
  m="1579010">be</span> <span m="1579150">wonderful</span> <span
  m="1580290">if</span> <span m="1580470">this</span> <span
  m="1580630">were</span> <span m="1580750">a</span> <span
  m="1580810">static</span> <span m="1581260">set.</span> <span
  m="1582340">And</span> <span m="1584020">n</span> <span
  m="1584200">doesn't</span> <span m="1584430">have</span> <span
  m="1584530">to</span> <span m="1584590">be</span> <span m="1584690">a</span>
  <span m="1584760">power</span> <span m="1584970">of</span> <span
  m="1585070">2--</span> <span m="1585300">you</span> <span
  m="1585370">could</span> <span m="1585510">pad it,</span> <span
  m="1585910">and</span> <span m="1586030">so</span> <span m="1586160">on</span>
  <span m="1586250">and</span> <span m="1586340">so</span> <span
  m="1586480">forth.</span> <span m="1587180">But</span> <span
  m="1587250">the</span> <span m="1587320">big</span> <span
  m="1587490">thing</span> <span m="1587670">here</span> <span
  m="1587950">is</span> <span m="1588090">that</span> <span
  m="1588800">we</span> <span m="1588910">haven't</span> <span
  m="1589080">quite</span> <span m="1589400">accomplished</span> <span
  m="1590920">what</span> <span m="1591230">we</span> <span
  m="1591800">set</span> <span m="1591990">out</span> <span
  m="1592130">to</span> <span m="1592230">do,</span> <span
  m="1592900">even</span> <span m="1593150">though</span> <span
  m="1593310">we</span> <span m="1593420">seem</span> <span
  m="1593650">to</span> <span m="1593760">have</span> <span
  m="1594410">this</span> <span m="1594650">log n</span> <span
  m="1595140">cost</span> <span m="1595720">for</span> <span
  m="1595920">search.</span> <span m="1597220">But</span> <span
  m="1597400">it's</span> <span m="1597570">all</span> <span
  m="1598300">based</span> <span m="1598720">on</span> <span
  m="1598900">a</span> <span m="1598950">static</span> <span
  m="1599400">set</span> <span m="1600130">which</span> <span
  m="1600440">doesn't</span> <span m="1600710">change.</span></p><p><span
  m="1601840">And</span> <span m="1602230">the</span> <span
  m="1602360">problem,</span> <span m="1602790">of</span> <span
  m="1602890">course,</span> <span m="1603120">is</span> <span
  m="1603220">that</span> <span m="1603240">you</span> <span
  m="1603320">could</span> <span m="1603430">have</span> <span
  m="1603560">deletions.</span> <span m="1605010">You</span> <span
  m="1605220">want</span> <span m="1605370">to</span> <span
  m="1605440">take</span> <span m="1605600">away</span> <span
  m="1605770">42.</span> <span m="1607480">For</span> <span
  m="1607630">some</span> <span m="1607830">reason</span> <span
  m="1608120">you</span> <span m="1608220">can't</span> <span
  m="1608470">go</span> <span m="1608590">to</span> <span
  m="1608670">42nd</span> <span m="1609180">Avenue,</span> <span
  m="1610130">or</span> <span m="1610800">I</span> <span
  m="1610930">guess</span> <span m="1611110">art--</span> <span
  m="1612100">you</span> <span m="1612240">can't</span> <span
  m="1612430">go</span> <span m="1612500">to</span> <span
  m="1612710">[INAUDIBLE]</span> <span m="1613090">would</span> <span
  m="1613230">be</span> <span m="1613320">a</span> <span
  m="1613380">better</span> <span m="1613570">example.</span> <span
  m="1615300">So</span> <span m="1616250">stuff</span> <span
  m="1616730">breaks,</span> <span m="1617120">right?</span> <span
  m="1618300">And</span> <span m="1618570">so</span> <span
  m="1619270">you</span> <span m="1619330">take</span> <span
  m="1619500">stuff</span> <span m="1619770">out</span> <span
  m="1620060">and</span> <span m="1620160">you</span> <span
  m="1620220">insert</span> <span m="1620660">things</span> <span
  m="1620950">in.</span></p><p><span m="1621530">Suppose</span> <span
  m="1621970">I</span> <span m="1622070">wanted</span> <span
  m="1622340">to</span> <span m="1622440">insert</span> <span
  m="1623260">60,</span> <span m="1623716">61,</span> <span
  m="1624172">62,</span> <span m="1624628">63,</span> <span
  m="1625540">and</span> <span m="1625660">64</span> <span
  m="1626650">into</span> <span m="1626850">that</span> <span
  m="1627010">list</span> <span m="1627220">that</span> <span
  m="1627340">I</span> <span m="1627410">have?</span> <span
  m="1628180">What</span> <span m="1628410">would</span> <span
  m="1628520">happen?</span> <span m="1630550">Yeah,</span> <span
  m="1630800">you're</span> <span m="1630940">shaking</span> <span
  m="1631190">your</span> <span m="1631290">head.</span> <span
  m="1631530">I</span> <span m="1631570">mean</span> <span
  m="1631690">that</span> <span m="1631910">log</span> <span
  m="1632280">n</span> <span m="1632510">would</span> <span
  m="1632660">go</span> <span m="1632780">away,</span> <span
  m="1633920">so</span> <span m="1634170">it</span> <span
  m="1634910">would</span> <span m="1635010">be</span> <span
  m="1635140">a</span> <span m="1635210">problem.</span></p><p><span
  m="1637490">But</span> <span m="1637950">what</span> <span
  m="1638450">we</span> <span m="1638650">have</span> <span
  m="1638800">to</span> <span m="1638890">do</span> <span m="1639030">now</span>
  <span m="1639360">is</span> <span m="1639640">move</span> <span
  m="1640050">to</span> <span m="1640160">the</span> <span
  m="1641360">probabilistic</span> <span m="1641910">domain.</span> <span
  m="1642320">We</span> <span m="1642430">have</span> <span
  m="1642530">to</span> <span m="1642590">think</span> <span
  m="1642810">about</span> <span m="1643510">what</span> <span
  m="1643670">happens</span> <span m="1643990">when</span> <span
  m="1644110">we</span> <span m="1644260">insert</span> <span
  m="1644760">elements.</span> <span m="1645190">We</span> <span
  m="1645280">need</span> <span m="1645400">an</span> <span
  m="1645500">algorithm</span> <span m="1645960">for</span> <span
  m="1646110">insert.</span> <span m="1647000">So</span> <span
  m="1647150">then</span> <span m="1647290">we</span> <span
  m="1647380">can</span> <span m="1647490">start</span> <span
  m="1647830">with</span> <span m="1647940">the null</span> <span
  m="1648200">list</span> <span m="1649190">and</span> <span
  m="1649430">build</span> <span m="1649640">it</span> <span
  m="1649760">up.</span> <span m="1650510">And</span> <span
  m="1651200">then</span> <span m="1651410">you</span> <span
  m="1651970">start</span> <span m="1652300">with</span> <span m="1652390">a
  null</span> <span m="1652620">list</span> <span m="1652990">and</span> <span
  m="1653080">you</span> <span m="1653150">have a</span> <span
  m="1653480">randomized</span> <span m="1654050">algorithm</span> <span
  m="1654420">for</span> <span m="1654580">insert,</span> <span
  m="1655410">it</span> <span m="1655710">ain't</span> <span
  m="1656010">going</span> <span m="1656150">to</span> <span
  m="1656210">look</span> <span m="1656370">that</span> <span
  m="1656530">pretty.</span> <span m="1657490">It's</span> <span
  m="1658230">going</span> <span m="1658420">to</span> <span
  m="1658490">look</span> <span m="1658690">random.</span></p><p><span
  m="1659990">But</span> <span m="1660300">you</span> <span
  m="1660490">have</span> <span m="1660620">to</span> <span
  m="1660680">have</span> <span m="1660790">a</span> <span
  m="1660820">certain</span> <span m="1661160">amount</span> <span
  m="1661380">of</span> <span m="1661450">structure</span> <span
  m="1662460">so</span> <span m="1662710">you</span> <span
  m="1662840">can</span> <span m="1662970">still</span> <span
  m="1663330">get</span> <span m="1663540">your</span> <span
  m="1663710">order</span> <span m="1664070">log n.</span> <span
  m="1665190">So</span> <span m="1665350">you</span> <span
  m="1665440">have</span> <span m="1665560">to</span> <span
  m="1665650">do</span> <span m="1665820">the</span> <span
  m="1666130">insertion</span> <span m="1667290">appropriately.</span> <span
  m="1668630">So</span> <span m="1668730">that's</span> <span
  m="1668940">what</span> <span m="1669070">we</span> <span
  m="1669140">have</span> <span m="1669240">to</span> <span
  m="1669300">do</span> <span m="1669420">next.</span> <span
  m="1670520">But</span> <span m="1670570">any</span> <span
  m="1670730">questions</span> <span m="1671080">about</span> <span
  m="1671290">that</span> <span m="1671440">complexity</span> <span
  m="1671950">that</span> <span m="1672090">I</span> <span
  m="1672140">have</span> <span m="1672310">up</span> <span
  m="1672430">there?</span> <span m="1675460">All</span> <span
  m="1675560">right,</span> <span m="1676490">good.</span></p><p><span
  m="1683280">I</span> <span m="1683430">want</span> <span m="1684450">a</span>
  <span m="1684590">canonical</span> <span m="1685290">example</span> <span
  m="1686860">of</span> <span m="1687050">a</span> <span m="1687090">list</span>
  <span m="1687490">here,</span> <span m="1688460">and</span> <span
  m="1688570">I kind of</span> <span m="1688620">ran</span> <span
  m="1688850">out</span> <span m="1688940">of</span> <span
  m="1689010">room</span> <span m="1689320">over</span> <span
  m="1689480">there,</span> <span m="1690400">so</span> <span
  m="1690480">bear</span> <span m="1690740">with</span> <span
  m="1690890">me</span> <span m="1691590">as</span> <span m="1691800">I</span>
  <span m="1691910">draw</span> <span m="1692260">you</span> <span
  m="1698470">a</span> <span m="1698890">more</span> <span
  m="1699640">sophisticated</span> <span m="1702560">skip</span> <span
  m="1702950">list</span> <span m="1703220">that</span> <span
  m="1703340">has</span> <span m="1703540">a</span> <span m="1703590">few</span>
  <span m="1703840">more</span> <span m="1704070">levels.</span> <span
  m="1705900">And</span> <span m="1706470">the</span> <span
  m="1706600">reason</span> <span m="1706840">for</span> <span
  m="1706940">this</span> <span m="1707200">is</span> <span
  m="1708610">it's</span> <span m="1709100">only</span> <span
  m="1709380">interesting</span> <span m="1709930">when</span> <span
  m="1710090">you</span> <span m="1710200">have</span> <span
  m="1711160">three</span> <span m="1711380">or</span> <span
  m="1711450">more</span> <span m="1711680">levels.</span> <span
  m="1713100">The</span> <span m="1713200">search</span> <span
  m="1713460">algorithm</span> <span m="1713840">is</span> <span
  m="1714000">kind</span> <span m="1714340">of</span> <span
  m="1714430">the</span> <span m="1714500">same.</span> <span
  m="1715330">You</span> <span m="1715610">go</span> <span m="1715890">up</span>
  <span m="1716090">top</span> <span m="1716570">and</span> <span
  m="1717320">when</span> <span m="1717500">you</span> <span
  m="1717610">overshoot</span> <span m="1718210">you</span> <span
  m="1718510">pop</span> <span m="1718800">down</span> <span
  m="1719070">one</span> <span m="1719290">level,</span> <span
  m="1720120">and</span> <span m="1720280">then</span> <span
  m="1720510">you</span> <span m="1720620">do</span> <span
  m="1720750">the</span> <span m="1720830">same</span> <span
  m="1721080">thing</span> <span m="1721930">over</span> <span
  m="1722190">and</span> <span m="1722290">over.</span></p><p><span
  m="1723670">But</span> <span m="1726130">we</span> <span
  m="1726300">are</span> <span m="1726410">going</span> <span
  m="1726550">to</span> <span m="1726610">have</span> <span
  m="1726820">to</span> <span m="1726930">bound</span> <span
  m="1728060">the</span> <span m="1728190">number</span> <span
  m="1728490">of</span> <span m="1728660">levels</span> <span
  m="1729880">in</span> <span m="1730120">the</span> <span
  m="1730240">skip</span> <span m="1730570">list</span> <span
  m="1731070">in</span> <span m="1731230">a</span> <span
  m="1731290">probabilistic</span> <span m="1731990">way.</span> <span
  m="1732740">We</span> <span m="1732900">have</span> <span
  m="1733070">to</span> <span m="1733160">actually</span> <span
  m="1733480">discover</span> <span m="1733960">the</span> <span
  m="1734040">expected</span> <span m="1734700">number</span> <span
  m="1735550">of</span> <span m="1735760">levels</span> <span
  m="1737410">because</span> <span m="1737790">we're</span> <span
  m="1737910">going</span> <span m="1738080">to</span> <span
  m="1738150">be</span> <span m="1738990">doing</span> <span
  m="1739380">inserts</span> <span m="1740140">in</span> <span
  m="1740250">a</span> <span m="1740320">randomized</span> <span
  m="1740880">way.</span> <span m="1741540">And</span> <span
  m="1741730">so</span> <span m="1742200">it's</span> <span
  m="1742380">worthwhile</span> <span m="1743320">having</span> <span
  m="1743630">a</span> <span m="1743690">picture</span> <span
  m="1744140">that's</span> <span m="1744380">a</span> <span
  m="1744440">little</span> <span m="1744740">more</span> <span
  m="1745010">interesting</span> <span m="1745960">than</span> <span
  m="1746240">the</span> <span m="1746320">picture</span> <span
  m="1746990">of</span> <span m="1747190">the</span> <span
  m="1747260">two</span> <span m="1747480">linked</span> <span
  m="1747750">lists</span> <span m="1748010">that</span> <span
  m="1748140">I</span> <span m="1748200">had</span> <span m="1748380">up</span>
  <span m="1748520">there.</span> <span m="1749800">So</span> <span
  m="1751010">I'm</span> <span m="1751110">going</span> <span
  m="1751240">to</span> <span m="1751300">leave</span> <span
  m="1751530">this</span> <span m="1751880">on</span> <span
  m="1753110">for</span> <span m="1753860">the</span> <span
  m="1754000">rest</span> <span m="1754220">of</span> <span
  m="1754300">the</span> <span m="1754370">lecture.</span></p><p><span
  m="1763000">So</span> <span m="1763080">that's</span> <span
  m="1763310">our</span> <span m="1763440">bottom,</span> <span
  m="1763860">and</span> <span m="1764020">that</span> <span
  m="1764290">hasn't</span> <span m="1764610">changed</span> <span
  m="1765000">from</span> <span m="1765660">our</span> <span
  m="1765850">previous</span> <span m="1766480">examples.</span> <span
  m="1767420">I'm</span> <span m="1767780">not</span> <span
  m="1767900">going</span> <span m="1768020">to</span> <span
  m="1768080">bother</span> <span m="1769210">drawing</span> <span
  m="1771160">the</span> <span m="1771310">horizontal</span> <span
  m="1773080">connections.</span> <span m="1774450">When you</span> <span
  m="1774580">see</span> <span m="1774880">things</span> <span
  m="1775190">adjacent</span> <span m="1776380">horizontally</span> <span
  m="1776970">at</span> <span m="1777130">the</span> <span
  m="1777200">same</span> <span m="1777490">level,</span> <span
  m="1779080">assume</span> <span m="1779510">that</span> <span
  m="1781940">they're</span> <span m="1782190">all</span> <span
  m="1782320">connected--</span> <span m="1783210">all</span> <span
  m="1783430">of</span> <span m="1783510">them.</span></p><p><span
  m="1786950">And</span> <span m="1787040">so</span> <span m="1787190">I</span>
  <span m="1787250">have</span> <span m="1789330">four</span> <span
  m="1789700">levels</span> <span m="1790060">here.</span> <span
  m="1792440">And</span> <span m="1792930">you</span> <span
  m="1793000">can</span> <span m="1793110">think</span> <span
  m="1793240">of</span> <span m="1793330">this</span> <span
  m="1793510">as</span> <span m="1793640">being</span> <span
  m="1795370">the</span> <span m="1795510">entire</span> <span
  m="1795920">list</span> <span m="1796310">or</span> <span
  m="1796420">part</span> <span m="1796710">of</span> <span
  m="1796820">it.</span> <span m="1798310">Just</span> <span
  m="1799100">to</span> <span m="1799430">delineate</span> <span
  m="1800080">things</span> <span m="1801400">nicely,</span> <span
  m="1802390">we'll</span> <span m="1802685">assume</span> <span
  m="1802980">that</span> <span m="1803460">79,</span> <span
  m="1805840">which</span> <span m="1806040">is</span> <span
  m="1806190">the</span> <span m="1806450">last</span> <span
  m="1806820">element,</span> <span m="1807940">is</span> <span
  m="1808160">all</span> <span m="1808320">the</span> <span
  m="1808400">way</span> <span m="1808510">up</span> <span m="1808680">at</span>
  <span m="1808760">the</span> <span m="1808830">top</span> <span
  m="1809150">as</span> <span m="1809280">well.</span> <span
  m="1810150">Sort</span> <span m="1810360">of</span> <span
  m="1810430">the</span> <span m="1810720">terminus,</span> <span
  m="1813660">termini,</span> <span m="1814800">corresponding</span> <span
  m="1815300">to</span> <span m="1815440">our</span> <span
  m="1816680">analogy</span> <span m="1817280">of</span> <span
  m="1820390">subways.</span></p><p><span m="1821980">And</span> <span
  m="1822340">so</span> <span m="1822450">that's</span> <span
  m="1822650">our</span> <span m="1822750">top-most</span> <span
  m="1823160">level.</span> <span m="1824400">And</span> <span
  m="1824690">then</span> <span m="1824850">I</span> <span
  m="1825230">might</span> <span m="1825450">have</span> <span
  m="1826910">50</span> <span m="1827480">here</span> <span
  m="1829150">at</span> <span m="1829330">this</span> <span
  m="1829540">level,</span> <span m="1835470">or so</span> <span
  m="1835630">that</span> <span m="1835770">looks</span> <span
  m="1835990">like.</span> <span m="1836720">I</span> <span
  m="1837170">will</span> <span m="1837410">have</span> <span
  m="1837610">50,</span> <span m="1838060">so</span> <span
  m="1838510">the</span> <span m="1838740">invariant</span> <span
  m="1838920">here,</span> <span m="1839320">and</span> <span
  m="1839520">that's</span> <span m="1839700">another</span> <span
  m="1839990">reason</span> <span m="1840240">I</span> <span
  m="1840290">want</span> <span m="1840450">to</span> <span
  m="1840510">draw</span> <span m="1840680">this</span> <span
  m="1840870">out,</span> <span m="1841950">is</span> <span
  m="1842200">that</span> <span m="1842940">if</span> <span
  m="1843130">you</span> <span m="1843280">have</span> <span
  m="1843540">a</span> <span m="1843590">station</span> <span
  m="1845140">at</span> <span m="1845940">highest</span> <span
  m="1846380">level,</span> <span m="1847990">then</span> <span
  m="1848680">you</span> <span m="1848890">will</span> <span
  m="1849040">have--</span> <span m="1852540">it's</span> <span
  m="1852740">got</span> <span m="1852860">to</span> <span m="1852920">be</span>
  <span m="1852980">sitting</span> <span m="1853230">on</span> <span
  m="1853360">something.</span></p><p><span m="1854000">So</span> <span
  m="1854130">if</span> <span m="1854190">you've</span> <span
  m="1854250">got</span> <span m="1854460">a</span> <span m="1854540">79</span>
  <span m="1855130">at</span> <span m="1855210">level</span> <span
  m="1855440">four,</span> <span m="1856620">or</span> <span
  m="1856760">level</span> <span m="1856970">three</span> <span
  m="1857180">here</span> <span m="1857420">if</span> <span
  m="1857560">this</span> <span m="1857690">is</span> <span
  m="1857820">L0,</span> <span m="1859380">then</span> <span
  m="1859810">you</span> <span m="1859970">will</span> <span
  m="1860130">see</span> <span m="1860730">79</span> <span m="1863440">at</span>
  <span m="1863910">L2,</span> <span m="1864850">L1, and L0.</span> <span
  m="1866200">And</span> <span m="1866410">if</span> <span
  m="1866480">you</span> <span m="1866550">see</span> <span
  m="1866740">50</span> <span m="1867160">here,</span> <span
  m="1868170">it's</span> <span m="1868480">not</span> <span
  m="1868700">in</span> <span m="1868810">L3</span> <span m="1869230">so</span>
  <span m="1869340">that's</span> <span m="1869530">OK,</span> <span
  m="1869900">but</span> <span m="1870040">it's</span> <span
  m="1870130">in</span> <span m="1870240">L2,</span> <span m="1870970">so</span>
  <span m="1871130">it's</span> <span m="1871220">got</span> <span
  m="1871370">to</span> <span m="1871430">be</span> <span m="1871590">at</span>
  <span m="1872250">L1</span> <span m="1872610">as</span> <span
  m="1872740">well.</span></p><p><span m="1873420">Of</span> <span
  m="1873550">course</span> <span m="1873740">you</span> <span
  m="1873830">know</span> <span m="1873980">that</span> <span
  m="1874110">everything</span> <span m="1874430">is</span> <span
  m="1874550">down</span> <span m="1874780">at</span> <span
  m="1874870">L1,</span> <span m="1875660">so</span> <span
  m="1875900">this</span> <span m="1876070">is</span> <span
  m="1876230">interesting</span> <span m="1877080">from</span> <span
  m="1877170">a</span> <span m="1877210">standpoint</span> <span
  m="1877690">of</span> <span m="1877760">the</span> <span
  m="1877840">relationship</span> <span m="1878800">between</span> <span
  m="1880080">Li</span> <span m="1880860">and</span> <span m="1881100">Li</span>
  <span m="1881360">plus</span> <span m="1881620">1</span> <span
  m="1882370">where</span> <span m="1882740">i</span> <span
  m="1882970">is</span> <span m="1883130">greater</span> <span
  m="1883370">than</span> <span m="1883500">or</span> <span
  m="1883540">equal</span> <span m="1883770">to</span> <span
  m="1883850">1.</span> <span m="1885220">So</span> <span m="1885800">the</span>
  <span m="1885940">implication</span> <span m="1886490">is</span> <span
  m="1886640">that</span> <span m="1887160">if</span> <span
  m="1887290">you</span> <span m="1887380">see</span> <span
  m="1887660">it</span> <span m="1887780">at</span> <span m="1892290">at</span>
  <span m="1892335">Li</span> <span m="1892570">plus</span> <span
  m="1892800">1,</span> <span m="1893440">it's</span> <span
  m="1893650">going</span> <span m="1893780">to</span> <span
  m="1893840">be</span> <span m="1893970">at</span> <span m="1895220">Li</span>
  <span m="1895970">and</span> <span m="1896620">Li</span> <span
  m="1896740">minus</span> <span m="1897020">1</span> <span
  m="1897340">if</span> <span m="1897490">that</span> <span
  m="1897630">happens</span> <span m="1897900">to</span> <span
  m="1897980">exist,</span> <span m="1898470">et cetera.</span></p><p><span
  m="1899940">And</span> <span m="1900295">so</span> <span
  m="1900650">one</span> <span m="1900880">last</span> <span
  m="1901100">thing</span> <span m="1901280">here</span> <span
  m="1901490">just</span> <span m="1901740">to</span> <span
  m="1901820">finish</span> <span m="1902040">it</span> <span
  m="1902120">up.</span> <span m="1902980">I</span> <span m="1903410">got</span>
  <span m="1904130">34</span> <span m="1904790">here,</span> <span
  m="1906080">which</span> <span m="1906290">is</span> <span
  m="1906420">an</span> <span m="1906700">additional</span> <span
  m="1907220">thing</span> <span m="1908280">which</span> <span
  m="1908490">ends</span> <span m="1908820">there.</span> <span
  m="1909160">So</span> <span m="1909290">the</span> <span
  m="1909380">highest</span> <span m="1909680">level</span> <span
  m="1909950">is</span> <span m="1911650">this</span> <span
  m="1911900">second</span> <span m="1912270">level</span> <span m="1912717">or
  L1.</span> <span m="1914060">This is</span> <span m="1914910">66.</span> <span
  m="1916760">And</span> <span m="1917170">then</span> <span
  m="1917680">that's</span> <span m="1917930">it.</span> <span
  m="1918850">So</span> <span m="1919030">that's</span> <span
  m="1919870">our</span> <span m="1919990">skip</span> <span
  m="1920240">list.</span></p><p><span m="1921910">So</span> <span
  m="1921980">if</span> <span m="1922060">you</span> <span
  m="1922140">wanted</span> <span m="1922270">to</span> <span
  m="1922400">search</span> <span m="1922790">for</span> <span
  m="1922950">72,</span> <span m="1924330">you would</span> <span
  m="1924580">start</span> <span m="1924920">here,</span> <span
  m="1925910">and</span> <span m="1926290">then</span> <span
  m="1926500">you'd</span> <span m="1927140">go</span> <span
  m="1927350">to</span> <span m="1927420">79,</span> <span m="1928510">or</span>
  <span m="1928670">you'd</span> <span m="1928780">look</span> <span
  m="1929040">and</span> <span m="1929170">say,</span> <span
  m="1929460">oh,</span> <span m="1929610">79</span> <span m="1930140">is</span>
  <span m="1930300">too</span> <span m="1930440">far,</span> <span
  m="1931590">so</span> <span m="1931920">I'm</span> <span
  m="1932010">going</span> <span m="1932130">to</span> <span
  m="1932200">pop</span> <span m="1932480">down</span> <span
  m="1932710">a</span> <span m="1932760">level.</span> <span
  m="1933560">And</span> <span m="1933890">then</span> <span
  m="1934010">you'd</span> <span m="1934150">say</span> <span
  m="1934350">50,</span> <span m="1934850">oh,</span> <span
  m="1935070">good.</span> <span m="1935320">I</span> <span
  m="1935380">can</span> <span m="1935510">get</span> <span
  m="1935650">to</span> <span m="1935740">50.</span> <span m="1936690">79</span>
  <span m="1937180">is</span> <span m="1937310">too</span> <span
  m="1937440">far,</span> <span m="1937860">so</span> <span
  m="1937990">I'm</span> <span m="1938050">going</span> <span
  m="1938170">to</span> <span m="1938230">pop</span> <span
  m="1938430">down</span> <span m="1938630">a</span> <span
  m="1938690">level.</span> <span m="1939520">And</span> <span
  m="1939970">then</span> <span m="1940510">you</span> <span
  m="1940680">go</span> <span m="1940800">to</span> <span
  m="1940870">66--</span> <span m="1941600">79</span> <span
  m="1942110">is</span> <span m="1942220">too</span> <span
  m="1942340">far--</span> <span m="1943060">and</span> <span
  m="1943210">at</span> <span m="1943290">66,</span> <span
  m="1943820">you</span> <span m="1943910">pop</span> <span
  m="1944150">down</span> <span m="1944340">a</span> <span
  m="1944390">level</span> <span m="1945780">and</span> <span
  m="1946350">then</span> <span m="1946480">you</span> <span
  m="1946570">go</span> <span m="1946890">66</span> <span m="1947480">to</span>
  <span m="1947580">72.</span></p><p><span m="1949220">So</span> <span
  m="1949610">same</span> <span m="1949850">as</span> <span
  m="1949960">what</span> <span m="1950110">we</span> <span
  m="1950210">had</span> <span m="1950380">before.</span> <span
  m="1951120">Hopefully</span> <span m="1951460">it's</span> <span
  m="1951560">not</span> <span m="1951710">too</span> <span
  m="1951800">complicated.</span> <span m="1954310">So</span> <span
  m="1955270">that's</span> <span m="1955690">our</span> <span
  m="1956000">skip</span> <span m="1956330">list.</span> <span
  m="1956990">It's</span> <span m="1957210">still</span> <span
  m="1957630">looking</span> <span m="1958040">pretty</span> <span
  m="1959910">structured,</span> <span m="1960710">looking</span> <span
  m="1961170">pretty</span> <span m="1961760">regular.</span> <span
  m="1963000">But</span> <span m="1963270">if</span> <span m="1963390">I</span>
  <span m="1963480">start</span> <span m="1963800">taking</span> <span
  m="1964100">that</span> <span m="1964320">and</span> <span
  m="1964420">start</span> <span m="1964640">inserting</span> <span
  m="1965190">things</span> <span m="1965500">and</span> <span
  m="1965630">deleting</span> <span m="1966050">things,</span> <span
  m="1966590">it</span> <span m="1966740">could</span> <span
  m="1966860">become</span> <span m="1967090">quite</span> <span
  m="1967390">irregular.</span></p><p><span m="1968680">I</span> <span
  m="1968740">could</span> <span m="1968860">take</span> <span
  m="1969020">away</span> <span m="1969180">23,</span> <span
  m="1969660">for</span> <span m="1969790">example.</span> <span
  m="1970540">And</span> <span m="1970690">there's</span> <span
  m="1970810">nothing</span> <span m="1971030">that's</span> <span
  m="1971180">stopping</span> <span m="1971470">me</span> <span
  m="1971600">from</span> <span m="1971750">taking</span> <span
  m="1971980">away</span> <span m="1972140">34</span> <span
  m="1973160">or</span> <span m="1973370">79.</span> <span
  m="1974460">You've</span> <span m="1974670">got</span> <span
  m="1975040">to</span> <span m="1975190">delete</span> <span
  m="1975570">an</span> <span m="1975670">element,</span> <span
  m="1975970">you've</span> <span m="1976070">got</span> <span
  m="1976180">to</span> <span m="1976240">delete</span> <span
  m="1976490">an</span> <span m="1976610">element.</span> <span
  m="1977660">I</span> <span m="1977760">mean</span> <span
  m="1977890">the</span> <span m="1977960">fact</span> <span
  m="1978210">that</span> <span m="1978300">it's</span> <span
  m="1978440">in</span> <span m="1978550">four</span> <span
  m="1978790">levels</span> <span m="1979240">shouldn't</span> <span
  m="1979770">make</span> <span m="1979990">a</span> <span
  m="1980040">difference.</span> <span m="1981530">And</span> <span
  m="1982010">so</span> <span m="1982190">that's</span> <span
  m="1982430">something</span> <span m="1982710">to</span> <span
  m="1982770">keep</span> <span m="1982940">in</span> <span
  m="1983010">mind.</span> <span m="1983680">So</span> <span
  m="1983740">this</span> <span m="1983960">could</span> <span
  m="1984090">get</span> <span m="1984250">pretty</span> <span
  m="1984440">messy.</span></p><p><span m="1987110">So</span> <span
  m="1987190">let's</span> <span m="1987380">talk</span> <span
  m="1987540">about</span> <span m="1987700">insert,</span> <span
  m="1988580">and</span> <span m="1988710">I've</span> <span
  m="1988830">spent</span> <span m="1989100">a</span> <span
  m="1989130">bunch</span> <span m="1989360">of</span> <span
  m="1989430">time</span> <span m="1989690">skirting</span> <span
  m="1990130">around</span> <span m="1990340">the</span> <span
  m="1990420">issue</span> <span m="1990980">of</span> <span
  m="1991760">what</span> <span m="1992190">exactly</span> <span
  m="1992610">happens</span> <span m="1994010">when</span> <span
  m="1994160">you</span> <span m="1994920">insert</span> <span
  m="1995460">an</span> <span m="1995580">element.</span> <span
  m="1995910">Turns</span> <span m="1996110">out</span> <span
  m="1996210">delete</span> <span m="1996570">is</span> <span
  m="1996680">pretty</span> <span m="1996900">easy.</span> <span
  m="1998260">Insert</span> <span m="1998650">is</span> <span
  m="1998750">more</span> <span m="1998950">interesting.</span> <span
  m="2000330">Let's</span> <span m="2000470">do</span> <span
  m="2000620">insert.</span></p><p>&nbsp;</p><p><span m="2023540">To</span>
  <span m="2023670">insert</span> <span m="2024030">an</span> <span
  m="2024150">element</span> <span m="2024460">x</span> <span
  m="2024760">into</span> <span m="2024980">a</span> <span
  m="2025090">skip</span> <span m="2025540">list,</span> <span
  m="2026390">the</span> <span m="2026470">first</span> <span
  m="2026700">thing</span> <span m="2026810">we're</span> <span
  m="2026920">going</span> <span m="2027010">to</span> <span
  m="2027080">do</span> <span m="2027230">is</span> <span
  m="2027370">search</span> <span m="2029110">to</span> <span
  m="2029220">figure</span> <span m="2029520">out</span> <span
  m="2031360">where</span> <span m="2031690">x</span> <span
  m="2032000">fits</span> <span m="2038020">into</span> <span
  m="2038250">the</span> <span m="2038340">bottom</span> <span
  m="2038650">list.</span> <span m="2039530">So</span> <span
  m="2039740">you</span> <span m="2039860">do</span> <span m="2039990">a</span>
  <span m="2040060">search</span> <span m="2042070">just</span> <span
  m="2042350">like</span> <span m="2042750">you</span> <span
  m="2042890">would</span> <span m="2043740">if</span> <span
  m="2043870">you</span> <span m="2043940">were</span> <span
  m="2044010">just</span> <span m="2044270">doing</span> <span
  m="2044470">a</span> <span m="2044520">search.</span></p><p><span
  m="2046990">You</span> <span m="2047170">always</span> <span
  m="2047600">insert</span> <span m="2048150">into</span> <span
  m="2048360">the</span> <span m="2048480">appropriate</span> <span
  m="2048840">position.</span> <span m="2049750">So</span> <span m="2049960">if
  there's</span> <span m="2050139">a</span> <span m="2050219">single</span>
  <span m="2050600">sorted</span> <span m="2050929">list,</span> <span
  m="2052150">that</span> <span m="2052340">would</span> <span
  m="2052460">pretty</span> <span m="2052620">much</span> <span m="2052810">be
  it.</span> <span m="2056400">And</span> <span m="2056610">so</span> <span
  m="2056690">that</span> <span m="2056840">part</span> <span
  m="2057030">is</span> <span m="2057130">easy.</span> <span
  m="2058810">If</span> <span m="2058889">you</span> <span
  m="2058949">want</span> <span m="2059070">to</span> <span
  m="2059130">insert</span> <span m="2059440">67,</span> <span
  m="2060550">you</span> <span m="2061100">do</span> <span
  m="2061380">all</span> <span m="2061620">of</span> <span
  m="2061699">the</span> <span m="2063090">search</span> <span
  m="2063980">operations</span> <span m="2064530">that</span> <span
  m="2064650">I</span> <span m="2064699">just</span> <span
  m="2064900">went</span> <span m="2065100">over,</span> <span
  m="2065909">and</span> <span m="2066060">then</span> <span
  m="2066170">you</span> <span m="2066270">insert</span> <span
  m="2066630">67</span> <span m="2067909">between</span> <span
  m="2068420">66</span> <span m="2069190">and</span> <span
  m="2069420">72.</span> <span m="2070639">So</span> <span m="2071219">do</span>
  <span m="2071409">your</span> <span m="2071600">pointer</span> <span
  m="2072020">manipulations,</span> <span m="2073310">what</span> <span
  m="2073460">have</span> <span m="2073639">you,</span> <span
  m="2073949">and</span> <span m="2074179">you're</span> <span
  m="2074310">good.</span></p><p><span m="2075250">But</span> <span
  m="2075480">you're</span> <span m="2075580">not</span> <span
  m="2075710">done</span> <span m="2075909">yet,</span> <span
  m="2076600">because</span> <span m="2076969">you</span> <span
  m="2077090">want</span> <span m="2077280">this</span> <span
  m="2077409">to</span> <span m="2077500">be</span> <span m="2077600">a</span>
  <span m="2077650">skip</span> <span m="2077929">list</span> <span
  m="2078250">and</span> <span m="2078400">you</span> <span
  m="2078480">want</span> <span m="2078730">this</span> <span
  m="2078870">to</span> <span m="2078980">have</span> <span
  m="2080290">expected</span> <span m="2080900">search</span> <span
  m="2081730">over</span> <span m="2083159">any</span> <span
  m="2083830">random</span> <span m="2084280">query</span> <span
  m="2085070">as</span> <span m="2085370">the</span> <span
  m="2085460">list</span> <span m="2085790">grows</span> <span
  m="2086190">and</span> <span m="2086330">shrinks</span> <span
  m="2087199">of</span> <span m="2087460">order</span> <span
  m="2087719">log</span> <span m="2087830">n,</span> <span
  m="2088590">expectation,</span> <span m="2089310">and</span> <span
  m="2089440">also</span> <span m="2089690">with</span> <span
  m="2089830">high</span> <span m="2089989">probability.</span> <span
  m="2091060">So</span> <span m="2091330">what</span> <span
  m="2091489">you're</span> <span m="2091580">going</span> <span
  m="2091699">to</span> <span m="2091760">have</span> <span
  m="2091920">to</span> <span m="2092010">do</span> <span m="2092250">is</span>
  <span m="2092960">when</span> <span m="2093120">you</span> <span
  m="2093199">start</span> <span m="2093489">inserting,</span> <span
  m="2094560">you're</span> <span m="2094739">going</span> <span
  m="2094929">to</span> <span m="2095020">have</span> <span
  m="2095310">to</span> <span m="2095510">decide</span> <span
  m="2096570">if</span> <span m="2096719">you're</span> <span
  m="2096820">going</span> <span m="2097060">to</span> <span
  m="2097990">what</span> <span m="2098160">is</span> <span
  m="2098270">called</span> <span m="2098920">promote</span> <span
  m="2100110">these</span> <span m="2100410">elements</span> <span
  m="2100800">or</span> <span m="2100900">not.</span></p><p><span
  m="2101740">And</span> <span m="2101980">the</span> <span
  m="2102050">notion</span> <span m="2102310">of</span> <span
  m="2102390">a</span> <span m="2102480">promotion</span> <span
  m="2103760">is</span> <span m="2103990">that</span> <span
  m="2104720">you</span> <span m="2105240">are</span> <span
  m="2105370">going</span> <span m="2105760">up</span> <span
  m="2106500">and</span> <span m="2106730">duplicating</span> <span
  m="2107700">this</span> <span m="2107960">inserted</span> <span
  m="2108460">element</span> <span m="2109500">some</span> <span
  m="2109920">number</span> <span m="2110170">of</span> <span
  m="2110270">levels</span> <span m="2110650">up.</span> <span
  m="2111820">So</span> <span m="2112190">if</span> <span m="2112430">you</span>
  <span m="2114210">just</span> <span m="2114470">look</span> <span
  m="2114670">at</span> <span m="2115270">how</span> <span
  m="2115520">this</span> <span m="2115680">works,</span> <span
  m="2116520">it's</span> <span m="2116700">really</span> <span
  m="2117040">pretty</span> <span m="2117240">straightforward.</span> <span
  m="2118490">What</span> <span m="2118620">is</span> <span
  m="2118710">going</span> <span m="2118830">to</span> <span
  m="2118890">happen</span> <span m="2119640">is</span> <span
  m="2119810">simply</span> <span m="2120170">that</span> <span
  m="2120350">let's</span> <span m="2120510">say</span> <span
  m="2120730">I</span> <span m="2120810">have</span> <span m="2120970">67</span>
  <span m="2122070">and</span> <span m="2122360">I'm</span> <span
  m="2122470">going to</span> <span m="2122630">insert</span> <span
  m="2122885">it</span> <span m="2123140">between</span> <span
  m="2123430">66</span> <span m="2123970">and</span> <span
  m="2124080">72.</span> <span m="2125000">That</span> <span
  m="2125200">much</span> <span m="2125400">is</span> <span m="2125520">a</span>
  <span m="2125590">given.</span> <span m="2126230">That</span> <span
  m="2126470">is</span> <span m="2126600">deterministic.</span></p><p><span
  m="2128020">Then</span> <span m="2128230">I'm</span> <span
  m="2128310">going</span> <span m="2128430">to</span> <span
  m="2128490">flip</span> <span m="2128830">a</span> <span
  m="2128880">coin</span> <span m="2130520">or</span> <span
  m="2130710">spin</span> <span m="2131090">a</span> <span
  m="2131150">Frisbee.</span> <span m="2133550">I</span> <span
  m="2133670">like</span> <span m="2133860">this</span> <span
  m="2134010">better.</span> <span m="2136180">I'm</span> <span
  m="2136340">not</span> <span m="2136480">sure if</span> <span
  m="2136660">this</span> <span m="2136820">is</span> <span
  m="2136930">biased</span> <span m="2137380">or</span> <span
  m="2137450">not.</span> <span m="2138420">It's</span> <span
  m="2138610">probably</span> <span m="2139040">seriously</span> <span
  m="2139640">biased.</span></p><p><span
  m="2140230">[LAUGHTER]</span></p><p><span m="2142880">Would</span> <span
  m="2143040">it</span> <span m="2143210">ever</span> <span
  m="2144890">go</span> <span m="2145480">the</span> <span
  m="2145550">other</span> <span m="2145720">way</span> <span
  m="2146090">is</span> <span m="2146230">the</span> <span
  m="2146300">question.</span> <span m="2147650">Would</span> <span
  m="2147840">it</span> <span m="2147950">ever?</span> <span
  m="2148400">No.</span> <span m="2149560">All</span> <span
  m="2149730">right.</span> <span m="2150120">So</span> <span
  m="2150710">we've</span> <span m="2150830">got</span> <span
  m="2150930">a</span> <span m="2150970">problem</span> <span
  m="2151330">here.</span> <span m="2151860">I</span> <span
  m="2152000">think</span> <span m="2152200">we</span> <span
  m="2152310">might</span> <span m="2152480">have</span> <span
  m="2152640">to</span> <span m="2152890">do</span> <span
  m="2153170">something</span> <span m="2153430">like</span> <span
  m="2153580">that.</span></p><p><span m="2153920">[LAUGHTER]</span></p><p><span
  m="2157030">I'm</span> <span m="2157770">procrastinating.</span> <span
  m="2158590">I</span> <span m="2158690">don't</span> <span
  m="2158790">want</span> <span m="2158910">to</span> <span
  m="2158970">teach</span> <span m="2159290">the</span> <span
  m="2159380">rest</span> <span m="2159580">of</span> <span
  m="2159650">this</span> <span m="2159780">material.</span></p><p><span
  m="2160280">[LAUGHTER]</span></p><p><span m="2165630">All</span> <span
  m="2165810">right.</span> <span m="2166630">Let's</span> <span
  m="2166880">go,</span> <span m="2167070">let's</span> <span
  m="2167240">go.</span> <span m="2168840">So</span> <span
  m="2169550">I'd</span> <span m="2169950">like</span> <span
  m="2170180">to</span> <span m="2171470">insert</span> <span
  m="2175250">into</span> <span m="2175590">some</span> <span
  m="2175920">of</span> <span m="2176020">the</span> <span
  m="2176090">lists,</span> <span m="2183640">and</span> <span
  m="2183790">the</span> <span m="2183860">big</span> <span
  m="2184030">question</span> <span m="2184420">is</span> <span
  m="2184950">which</span> <span m="2185190">ones?</span> <span
  m="2190060">It's</span> <span m="2190420">going</span> <span
  m="2190540">to</span> <span m="2190600">be</span> <span
  m="2190680">really</span> <span m="2191640">cool.</span> <span
  m="2192370">I'm</span> <span m="2192560">just</span> <span
  m="2192720">going</span> <span m="2192840">to</span> <span
  m="2193420">flip</span> <span m="2193670">coins,</span> <span
  m="2194130">fair</span> <span m="2194390">coins,</span> <span
  m="2196560">and</span> <span m="2200080">decide</span> <span
  m="2201220">how</span> <span m="2201510">much</span> <span
  m="2201810">to</span> <span m="2201920">promote</span> <span
  m="2202340">these</span> <span m="2202560">elements.</span></p><p><span
  m="2211940">So</span> <span m="2212790">flip</span> <span
  m="2215160">fair</span> <span m="2215600">coin.</span> <span
  m="2217790">If</span> <span m="2218080">heads,</span> <span
  m="2221770">promote</span> <span m="2224630">x</span> <span
  m="2225870">to</span> <span m="2225990">the</span> <span
  m="2226110">next</span> <span m="2226430">level</span> <span
  m="2229740">up,</span> <span m="2231880">and</span> <span
  m="2232540">repeat.</span> <span m="2241100">Else,</span> <span
  m="2242880">if</span> <span m="2243030">you</span> <span
  m="2243100">ever</span> <span m="2243230">get</span> <span m="2243340">a
  tails,</span> <span m="2244870">you</span> <span m="2245010">stop.</span>
  <span m="2246400">And</span> <span m="2246680">this</span> <span
  m="2246850">next</span> <span m="2247160">level</span> <span
  m="2247410">up</span> <span m="2247870">may</span> <span m="2248100">be</span>
  <span m="2248200">newly</span> <span m="2248550">created.</span></p><p><span
  m="2255370">So</span> <span m="2256190">what might</span> <span
  m="2256530">happen</span> <span m="2256880">with</span> <span
  m="2257020">the</span> <span m="2257270">67</span> <span m="2259500">is</span>
  <span m="2259730">that</span> <span m="2259970">you</span> <span
  m="2260180">stick</span> <span m="2260430">it</span> <span
  m="2260510">in</span> <span m="2260650">here,</span> <span
  m="2261530">and</span> <span m="2261830">it</span> <span
  m="2261910">might</span> <span m="2262130">happen</span> <span
  m="2262490">that</span> <span m="2262800">the</span> <span
  m="2262980">first</span> <span m="2263330">time</span> <span
  m="2263540">you</span> <span m="2263620">flip</span> <span
  m="2264330">you</span> <span m="2264520">get</span> <span m="2264650">a
  tails,</span> <span m="2265710">in</span> <span m="2265860">which</span> <span
  m="2266010">case,</span> <span m="2266500">67</span> <span
  m="2267240">is</span> <span m="2267360">going</span> <span
  m="2267520">to</span> <span m="2267610">just</span> <span
  m="2267960">be</span> <span m="2268120">at</span> <span m="2268200">the</span>
  <span m="2268260">bottom</span> <span m="2268550">list.</span> <span
  m="2269270">But</span> <span m="2269430">if</span> <span
  m="2269490">you</span> <span m="2269560">get</span> <span
  m="2269690">one</span> <span m="2270010">heads,</span> <span
  m="2270970">then</span> <span m="2271230">you're</span> <span
  m="2271390">not</span> <span m="2271590">only</span> <span
  m="2271760">going</span> <span m="2271880">to</span> <span
  m="2271950">put</span> <span m="2272150">67</span> <span m="2272760">in</span>
  <span m="2272860">here,</span> <span m="2273800">you're</span> <span
  m="2273900">going</span> <span m="2274020">to</span> <span
  m="2274080">put</span> <span m="2274220">67</span> <span m="2274800">up</span>
  <span m="2274930">here</span> <span m="2275160">as</span> <span
  m="2275290">well.</span> <span m="2275880">And</span> <span
  m="2276040">you're</span> <span m="2276110">going</span> <span
  m="2276190">to</span> <span m="2276270">flip</span> <span
  m="2276530">again.</span></p><p><span m="2279160">And</span> <span
  m="2279530">if</span> <span m="2279680">you</span> <span
  m="2279750">get</span> <span m="2279900">a</span> <span
  m="2279960">heads</span> <span m="2280260">again,</span> <span
  m="2281100">you're</span> <span m="2281270">going</span> <span
  m="2281390">to</span> <span m="2281450">put</span> <span m="2281640">67</span>
  <span m="2282750">up</span> <span m="2282940">here.</span> <span
  m="2284890">And</span> <span m="2285270">if</span> <span
  m="2285370">you</span> <span m="2285430">get a</span> <span
  m="2285570">heads</span> <span m="2285760">again,</span> <span
  m="2286780">you're</span> <span m="2286960">going</span> <span
  m="2287100">to</span> <span m="2287170">put</span> <span m="2288170">67</span>
  <span m="2288890">up</span> <span m="2289040">here.</span> <span
  m="2290040">And</span> <span m="2290190">if</span> <span
  m="2290250">you</span> <span m="2290310">get a</span> <span
  m="2290480">heads</span> <span m="2290680">again,</span> <span
  m="2291490">you're</span> <span m="2291650">going</span> <span
  m="2291790">to</span> <span m="2291850">create</span> <span
  m="2292190">a</span> <span m="2292240">new</span> <span
  m="2292420">list</span> <span m="2292820">up</span> <span
  m="2292980">there,</span> <span m="2293790">and</span> <span
  m="2293990">at</span> <span m="2294080">this</span> <span
  m="2294250">point</span> <span m="2294520">when</span> <span
  m="2294630">you</span> <span m="2294710">create</span> <span
  m="2294970">the</span> <span m="2295040">new</span> <span
  m="2295190">list,</span> <span m="2297265">it's</span> <span
  m="2297690">only</span> <span m="2297880">going</span> <span
  m="2298010">to</span> <span m="2298070">be</span> <span m="2298140">67</span>
  <span m="2298850">up</span> <span m="2299000">there.</span> <span
  m="2300420">And</span> <span m="2300550">that's</span> <span
  m="2300730">going</span> <span m="2300880">to</span> <span
  m="2300940">be</span> <span m="2301040">the</span> <span
  m="2301130">front</span> <span m="2301560">of</span> <span
  m="2301670">your</span> <span m="2301790">list,</span> <span
  m="2304330">because</span> <span m="2304620">that's</span> <span
  m="2304920">the</span> <span m="2305010">one</span> <span
  m="2305470">element</span> <span m="2305880">that</span> <span
  m="2306030">you're</span> <span m="2306440">duplicating.</span></p><p><span
  m="2307210">So</span> <span m="2307370">you're</span> <span
  m="2307440">going</span> <span m="2307560">to</span> <span
  m="2307620">keep</span> <span m="2307840">going</span> <span
  m="2308600">until</span> <span m="2308860">you</span> <span
  m="2308940">get</span> <span m="2309060">a</span> <span
  m="2309110">tails.</span> <span m="2310660">Now,</span> <span
  m="2310930">that's</span> <span m="2311180">why</span> <span
  m="2311330">this</span> <span m="2311380">coin</span> <span
  m="2311570">had</span> <span m="2311880">better</span> <span
  m="2312060">be</span> <span m="2312170">fair.</span> <span
  m="2314430">So</span> <span m="2315310">you're</span> <span
  m="2315440">going</span> <span m="2315560">to</span> <span
  m="2315620">keep</span> <span m="2315840">going</span> <span m="2316200">and
  you're</span> <span m="2316310">going</span> <span m="2316440">to</span> <span
  m="2316510">keep</span> <span m="2316850">adding.</span> <span
  m="2317910">Every</span> <span m="2318220">time</span> <span
  m="2318480">you</span> <span m="2318600">insert</span> <span
  m="2319410">there's</span> <span m="2319600">a</span> <span
  m="2319660">potential</span> <span m="2320950">for</span> <span
  m="2321620">increasing</span> <span m="2322180">the</span> <span
  m="2322260">number</span> <span m="2322450">of</span> <span
  m="2322540">levels</span> <span m="2323530">in</span> <span
  m="2323690">this</span> <span m="2323880">list.</span></p><p><span
  m="2324700">Now,</span> <span m="2325080">the</span> <span
  m="2325210">number</span> <span m="2325460">of</span> <span
  m="2325550">levels</span> <span m="2327330">is</span> <span
  m="2327580">going</span> <span m="2327810">to</span> <span
  m="2327900">be</span> <span m="2328710">bounded</span> <span
  m="2329150">in</span> <span m="2329260">expectation</span> <span
  m="2330910">with</span> <span m="2331100">a</span> <span
  m="2331130">high</span> <span m="2331260">probability</span> <span
  m="2332270">of</span> <span m="2332430">regular</span> <span
  m="2332780">expectation,</span> <span m="2333840">but</span> <span
  m="2334780">I</span> <span m="2335010">want</span> <span m="2335220">to</span>
  <span m="2335280">make</span> <span m="2335420">it</span> <span
  m="2335500">clear</span> <span m="2336250">that</span> <span
  m="2336430">every</span> <span m="2336650">time</span> <span
  m="2336870">you</span> <span m="2336980">insert,</span> <span
  m="2337820">if</span> <span m="2337950">you</span> <span
  m="2338010">get</span> <span m="2338120">a</span> <span
  m="2338170">chain</span> <span m="2338600">of</span> <span
  m="2338720">heads,</span> <span m="2339540">you're</span> <span
  m="2339690">going to</span> <span m="2339790">be</span> <span
  m="2339880">adding</span> <span m="2340190">levels.</span> <span
  m="2342130">And</span> <span m="2342400">so</span> <span
  m="2342580">the</span> <span m="2342930">first</span> <span
  m="2343340">time</span> <span m="2343530">you</span> <span
  m="2343600">get</span> <span m="2343710">a</span> <span
  m="2343750">tails,</span> <span m="2344590">you</span> <span
  m="2344720">just</span> <span m="2344900">stop.</span> <span
  m="2346550">You</span> <span m="2346690">just</span> <span
  m="2347140">stop.</span></p><p><span m="2348090">So</span> <span
  m="2348460">you</span> <span m="2348600">can</span> <span
  m="2348720">see</span> <span m="2348920">that</span> <span
  m="2349060">this</span> <span m="2349180">can</span> <span
  m="2349280">get</span> <span m="2349490">pretty</span> <span
  m="2349820">messy</span> <span m="2350220">pretty</span> <span
  m="2350460">quick.</span> <span m="2351730">And</span> <span
  m="2351840">especially</span> <span m="2352180">if</span> <span
  m="2352260">you</span> <span m="2352370">were</span> <span
  m="2352440">starting</span> <span m="2352870">from</span> <span
  m="2353420">ground</span> <span m="2353770">zero</span> <span
  m="2354180">and</span> <span m="2354300">adding</span> <span
  m="2354600">14,</span> <span m="2355016">23--</span> <span
  m="2355850">all</span> <span m="2356140">of</span> <span
  m="2356230">those</span> <span m="2356410">things,</span> <span
  m="2356610">the</span> <span m="2356680">bottom</span> <span
  m="2356990">is</span> <span m="2357060">going</span> <span
  m="2357180">to</span> <span m="2357260">look</span> <span
  m="2357460">exactly</span> <span m="2358120">like</span> <span
  m="2358360">it</span> <span m="2358470">looks</span> <span
  m="2358750">now</span> <span m="2359410">because</span> <span
  m="2359680">you're</span> <span m="2359800">going</span> <span
  m="2359890">to</span> <span m="2359950">put</span> <span m="2360100">it</span>
  <span m="2360200">in</span> <span m="2360350">there.</span> <span
  m="2360600">It's</span> <span m="2360770">deterministic.</span> <span
  m="2361910">But</span> <span m="2362210">the</span> <span
  m="2362360">very</span> <span m="2362570">next</span> <span
  m="2362810">level</span> <span m="2363090">after</span> <span
  m="2363290">that</span> <span m="2363920">looked</span> <span
  m="2364140">pretty</span> <span m="2364330">messy.</span> <span
  m="2364740">You</span> <span m="2364800">could</span> <span
  m="2364910">have</span> <span m="2365030">all</span> <span
  m="2365190">of</span> <span m="2365260">them</span> <span
  m="2365410">chunked</span> <span m="2365760">up</span> <span
  m="2365910">here,</span> <span m="2366560">and</span> <span
  m="2366740">a</span> <span m="2366780">big</span> <span
  m="2367010">gap,</span> <span m="2367690">et</span> <span
  m="2367920">cetera,</span> <span m="2368160">et cetera.</span> <span
  m="2369000">So</span> <span m="2369480">it's</span> <span
  m="2369680">all</span> <span m="2369900">about</span> <span
  m="2370550">randomized</span> <span m="2372480">search</span> <span
  m="2372850">cost.</span></p><p><span m="2373600">The</span> <span
  m="2373770">worse</span> <span m="2374100">case</span> <span
  m="2374370">cost</span> <span m="2374740">here</span> <span
  m="2375420">is</span> <span m="2375580">going</span> <span
  m="2375710">to</span> <span m="2375770">be</span> <span m="2375830">order
  n.</span> <span m="2377920">Worst</span> <span m="2378200">case</span> <span
  m="2378400">cost</span> <span m="2378700">is</span> <span
  m="2378790">going</span> <span m="2378910">to</span> <span
  m="2378970">be</span> <span m="2379090">order n,</span> <span
  m="2380030">because</span> <span m="2380420">you</span> <span
  m="2380550">have</span> <span m="2380700">no</span> <span
  m="2380890">idea</span> <span m="2381650">where</span> <span
  m="2381890">these</span> <span m="2382090">things</span> <span
  m="2382280">are</span> <span m="2382310">going</span> <span
  m="2382430">to</span> <span m="2382490">end</span> <span
  m="2382660">up.</span> <span m="2383330">But</span> <span
  m="2383540">the</span> <span m="2383630">randomized</span> <span
  m="2384150">cost</span> <span m="2384490">is</span> <span
  m="2384600">what's</span> <span m="2385090">cool</span> <span
  m="2385300">about</span> <span m="2385560">this.</span> <span
  m="2387020">Any</span> <span m="2387220">questions</span> <span
  m="2387610">about</span> <span m="2387830">insert</span> <span
  m="2390210">or</span> <span m="2390340">anything</span> <span
  m="2390620">I</span> <span m="2390670">said?</span> <span
  m="2390940">Yeah,</span> <span m="2391270">go</span> <span
  m="2391390">ahead.</span></p><p><span m="2391887">AUDIENCE: Is worse
  case</span> <span m="2392384">really order n?</span> <span m="2392881">What
  if</span> <span m="2393378">you</span> <span m="2393875">had a</span> <span
  m="2394372">really long,</span> <span m="2394869">like</span> <span
  m="2395370">a lot of</span> <span m="2395600">lists on</span> <span
  m="2395680">top of</span> <span m="2396066">each</span> <span
  m="2396452">other,</span> <span m="2396840">and</span> <span
  m="2396910">you</span> <span m="2396970">start at</span> <span m="2397380">the
  top of</span> <span m="2397790">that</span> <span m="2398200">and you</span>
  <span m="2398610">had to walk all</span> <span m="2398920">the way</span>
  <span m="2399230">[INAUDIBLE]?</span></p><p><span m="2401530">SRINIVAS
  DEVADAS: Well,</span> <span m="2401860">you</span> <span m="2402210">go</span>
  <span m="2402400">n</span> <span m="2402700">down</span> <span
  m="2403040">and</span> <span m="2403170">n</span> <span
  m="2403380">this</span> <span m="2403540">way,</span> <span
  m="2403720">right?</span> <span m="2405820">You</span> <span
  m="2406430">would</span> <span m="2407160">be</span> <span
  m="2407570">checking</span> <span m="2407980">so</span> <span
  m="2408210">it</span> <span m="2408730">would</span> <span
  m="2408840">be</span> <span m="2408930">order n.</span></p><p><span
  m="2409060">AUDIENCE: So it's</span> <span m="2409416">[? bounded ?]</span>
  <span m="2409594">by</span> <span m="2409772">n?</span></p><p><span
  m="2410130">SRINIVAS DEVADAS: Yeah,</span> <span m="2410790">the</span> <span
  m="2410910">worst</span> <span m="2411110">case.</span></p><p><span
  m="2411980">AUDIENCE: Worse case</span> <span m="2412432">is
  infinity.</span></p><p><span m="2413790">SRINIVAS DEVADAS: Worse</span> <span
  m="2413980">case is</span> <span m="2414280">infinity.</span> <span
  m="2414840">Oh,</span> <span m="2415130">in</span> <span
  m="2415200">that</span> <span m="2415370">sense,</span> <span
  m="2415630">yeah.</span> <span m="2415890">OK.</span> <span
  m="2417020">Well,</span> <span m="2417260">n</span> <span
  m="2417550">elements,</span> <span m="2418790">Eric</span> <span
  m="2419080">is</span> <span m="2419190">right.</span> <span
  m="2420030">So</span> <span m="2420210">what is</span> <span
  m="2420410">happening</span> <span m="2420740">here</span> <span
  m="2420950">is</span> <span m="2421040">that</span> <span
  m="2421200">you</span> <span m="2421310">have</span> <span
  m="2421510">a</span> <span m="2421550">small</span> <span
  m="2422020">probability</span> <span m="2423090">that</span> <span
  m="2423370">you</span> <span m="2423510">will</span> <span
  m="2423700">keep</span> <span m="2424030">flipping</span> <span
  m="2424400">heads</span> <span m="2425620">forever.</span> <span
  m="2427840">So</span> <span m="2428360">at</span> <span
  m="2428530">some</span> <span m="2428780">level,</span> <span m="2430470">if
  you</span> <span m="2430720">somehow</span> <span m="2431010">take</span>
  <span m="2431220">that</span> <span m="2431320">away</span> <span
  m="2431580">and</span> <span m="2431860">use</span> <span
  m="2432140">Frisbees</span> <span m="2432660">instead</span> <span
  m="2433500">or</span> <span m="2433650">you</span> <span
  m="2433770">truncate</span> <span m="2434140">it.</span></p><p><span
  m="2434750">Let's</span> <span m="2434980">say</span> <span
  m="2435370">at</span> <span m="2435720">some</span> <span
  m="2435910">point</span> <span m="2436210">you</span> <span
  m="2436650">ended</span> <span m="2436880">up</span> <span
  m="2437020">saying</span> <span m="2437340">that</span> <span
  m="2437460">you</span> <span m="2437540">only</span> <span
  m="2437780">have</span> <span m="2437960">n</span> <span
  m="2438180">levels</span> <span m="2438710">total.</span> <span
  m="2442310">So</span> <span m="2442530">it's</span> <span
  m="2442890">not</span> <span m="2443150">a--</span> <span m="2444040">I</span>
  <span m="2444420">should</span> <span m="2444590">have</span> <span
  m="2444960">gone</span> <span m="2445220">there.</span> <span
  m="2447240">The</span> <span m="2447420">question</span> <span
  m="2447770">has</span> <span m="2447910">to</span> <span m="2447990">be</span>
  <span m="2448730">posed</span> <span m="2449030">a</span> <span
  m="2449060">little</span> <span m="2449230">more</span> <span
  m="2449370">precisely</span> <span m="2450770">for</span> <span
  m="2451500">the</span> <span m="2451600">answer</span> <span
  m="2451860">to</span> <span m="2451950">be</span> <span
  m="2452070">order</span> <span m="2452340">n.</span> <span
  m="2452560">You</span> <span m="2452650">have</span> <span
  m="2452750">to</span> <span m="2452830">have</span> <span
  m="2453030">some</span> <span m="2453290">more</span> <span
  m="2453470">limitations</span> <span m="2454410">to</span> <span
  m="2454600">avoid</span> <span m="2455060">the</span> <span
  m="2455130">case</span> <span m="2455420">that</span> <span
  m="2456050">Eric</span> <span m="2456410">just</span> <span
  m="2456670">mentioned,</span> <span m="2457190">which</span> <span
  m="2457260">is</span> <span m="2457950">in</span> <span m="2458160">the</span>
  <span m="2458260">randomized</span> <span m="2458930">situation</span> <span
  m="2459960">you</span> <span m="2460230">will</span> <span
  m="2460440">have</span> <span m="2462000">the</span> <span
  m="2462110">possibility</span> <span m="2462650">of</span> <span
  m="2462760">getting</span> <span m="2463070">an</span> <span
  m="2463300">infinite</span> <span m="2463680">number</span> <span
  m="2463900">of</span> <span m="2463980">heads.</span> <span
  m="2464920">Yeah,</span> <span m="2465110">question</span> <span
  m="2465420">back</span> <span m="2465590">there.</span></p><p><span
  m="2465890">AUDIENCE: [INAUDIBLE].</span></p><p><span m="2470110">SRINIVAS
  DEVADAS: Yes,</span> <span m="2470460">you</span> <span m="2470600">can</span>
  <span m="2470710">certainly</span> <span m="2471000">do</span> <span
  m="2471130">capping</span> <span m="2473060">and</span> <span
  m="2473360">you</span> <span m="2473450">can</span> <span
  m="2474510">do</span> <span m="2475520">a</span> <span
  m="2475630">bunch</span> <span m="2475900">of</span> <span
  m="2476000">other</span> <span m="2476170">things.</span> <span
  m="2477100">It</span> <span m="2477340">ends</span> <span
  m="2477620">up</span> <span m="2477800">becoming</span> <span
  m="2478520">something</span> <span m="2479120">which</span> <span
  m="2479840">is</span> <span m="2480050">not</span> <span m="2480290">as</span>
  <span m="2480510">clean</span> <span m="2480880">as</span> <span
  m="2481020">what</span> <span m="2481180">you</span> <span
  m="2481290">have</span> <span m="2481510">here.</span> <span
  m="2482320">The</span> <span m="2482590">analysis</span> <span
  m="2483320">is</span> <span m="2483830">messy.</span> <span
  m="2485090">And</span> <span m="2485610">it's</span> <span
  m="2486150">sort</span> <span m="2486290">of</span> <span
  m="2486370">in</span> <span m="2486850">between</span> <span
  m="2487280">a</span> <span m="2487370">randomized</span> <span
  m="2487890">data</span> <span m="2488100">structure,</span> <span
  m="2488810">a</span> <span m="2488910">purely</span> <span
  m="2489240">randomized</span> <span m="2489640">data</span> <span
  m="2489830">structure,</span> <span m="2490250">and</span> <span
  m="2490400">a</span> <span m="2490960">deterministic</span> <span
  m="2491580">one.</span></p><p><span m="2494510">I</span> <span
  m="2494640">think</span> <span m="2494830">the</span> <span
  m="2495220">important</span> <span m="2495640">thing</span> <span
  m="2495990">to</span> <span m="2496100">bring</span> <span
  m="2496290">out</span> <span m="2496460">here</span> <span
  m="2497130">is</span> <span m="2497920">the</span> <span
  m="2498070">worst</span> <span m="2498350">case</span> <span
  m="2499270">is</span> <span m="2499460">much</span> <span
  m="2499720">worse</span> <span m="2500500">than</span> <span
  m="2500710">order</span> <span m="2501210">log n,</span> <span
  m="2501710">OK?</span> <span m="2503610">Cool.</span> <span
  m="2504070">Good.</span> <span m="2504400">Thanks</span> <span
  m="2504620">for</span> <span m="2504700">those</span> <span
  m="2504840">questions.</span></p><p><span m="2506560">And</span> <span
  m="2506730">so</span> <span m="2508800">what</span> <span
  m="2509130">we</span> <span m="2509270">have</span> <span
  m="2509510">here</span> <span m="2509740">now</span> <span
  m="2510140">is</span> <span m="2510540">an</span> <span
  m="2510650">insert</span> <span m="2511070">algorithm</span> <span
  m="2511730">that</span> <span m="2512100">could</span> <span
  m="2512720">make</span> <span m="2513020">things</span> <span
  m="2513920">look</span> <span m="2515370">pretty</span> <span
  m="2516010">messy.</span> <span m="2516890">I'm</span> <span
  m="2517050">going</span> <span m="2517170">to</span> <span
  m="2517230">leave</span> <span m="2517440">the</span> <span
  m="2517530">insert</span> <span m="2517880">up</span> <span
  m="2518000">here,</span> <span m="2519200">and</span> <span
  m="2519800">that,</span> <span m="2520020">of</span> <span
  m="2520100">course,</span> <span m="2520310">is</span> <span
  m="2520430">part</span> <span m="2520640">of</span> <span
  m="2520720">that.</span></p><p><span m="2522380">Now,</span> <span
  m="2523830">for</span> <span m="2523970">the</span> <span
  m="2524050">rest</span> <span m="2524240">of</span> <span
  m="2524310">the</span> <span m="2524380">lecture</span> <span
  m="2524780">we're</span> <span m="2524890">going</span> <span
  m="2525010">to</span> <span m="2525110">talk</span> <span
  m="2525350">about</span> <span m="2525990">why</span> <span
  m="2526300">skip</span> <span m="2526630">lists</span> <span
  m="2527180">are</span> <span m="2527350">good.</span> <span
  m="2528810">And</span> <span m="2529120">we're</span> <span
  m="2529220">going</span> <span m="2529400">to</span> <span
  m="2529490">justify</span> <span m="2530410">this</span> <span
  m="2530680">randomized</span> <span m="2531140">data</span> <span
  m="2531350">structure</span> <span m="2532110">and</span> <span
  m="2533160">show</span> <span m="2533550">lots</span> <span
  m="2533810">of</span> <span m="2534060">nice</span> <span
  m="2535480">results</span> <span m="2536270">with</span> <span
  m="2536400">respect</span> <span m="2536790">to</span> <span
  m="2537760">the</span> <span m="2538200">expectation</span> <span
  m="2538870">on</span> <span m="2538940">the</span> <span
  m="2539010">number</span> <span m="2539210">of</span> <span
  m="2539290">levels,</span> <span m="2540030">expectation</span> <span
  m="2540680">on</span> <span m="2540770">the</span> <span
  m="2540830">number</span> <span m="2541040">of</span> <span
  m="2541130">moves</span> <span m="2541510">in</span> <span
  m="2541600">a</span> <span m="2541640">search,</span> <span
  m="2542390">regardless</span> <span m="2543050">of</span> <span
  m="2543460">what</span> <span m="2543730">items</span> <span
  m="2544060">you're</span> <span m="2544210">inserting</span> <span
  m="2545090">and</span> <span m="2545280">deleting.</span></p><p><span
  m="2546410">One</span> <span m="2546610">last</span> <span
  m="2546860">thing.</span> <span m="2547700">To</span> <span
  m="2547950">delete</span> <span m="2548290">an</span> <span
  m="2548400">item,</span> <span m="2550790">you</span> <span
  m="2550960">just</span> <span m="2551160">delete it.</span> <span
  m="2551900">You</span> <span m="2552070">find</span> <span
  m="2552410">it,</span> <span m="2554440">search,</span> <span
  m="2556420">and</span> <span m="2556660">delete</span> <span
  m="2559330">at</span> <span m="2559570">all</span> <span
  m="2559820">levels.</span> <span m="2563000">So</span> <span
  m="2563230">you</span> <span m="2563340">can't</span> <span
  m="2563600">leave</span> <span m="2563770">it</span> <span
  m="2563860">in</span> <span m="2564070">any</span> <span m="2564280">of</span>
  <span m="2564370">the</span> <span m="2564440">levels.</span> <span
  m="2565150">So</span> <span m="2565230">you</span> <span
  m="2565330">find</span> <span m="2565630">it,</span> <span
  m="2565840">and</span> <span m="2566050">you</span> <span
  m="2566150">have</span> <span m="2566260">to</span> <span
  m="2566340">have</span> <span m="2566530">the</span> <span
  m="2567010">pointers</span> <span m="2567500">set</span> <span
  m="2567700">up</span> <span m="2567800">properly--</span> <span
  m="2568600">move</span> <span m="2569020">the</span> <span
  m="2571000">previous</span> <span m="2571360">pointer</span> <span
  m="2571770">over</span> <span m="2571980">to</span> <span
  m="2572700">the</span> <span m="2572790">next</span> <span
  m="2573020">one,</span> <span m="2573340">et</span> <span
  m="2573440">cetera,</span> <span m="2573700">et</span> <span
  m="2573800">cetera.</span> <span m="2574550">We</span> <span
  m="2574650">won't</span> <span m="2574850">get</span> <span
  m="2574950">into</span> <span m="2575050">that</span> <span
  m="2575190">here,</span> <span m="2575880">but</span> <span
  m="2576340">you</span> <span m="2576520">have</span> <span
  m="2576640">to</span> <span m="2576730">do</span> <span m="2576840">the</span>
  <span m="2576940">delete</span> <span m="2578140">at</span> <span
  m="2578300">every</span> <span m="2578510">level.</span> <span
  m="2581150">Yeah,</span> <span m="2581380">question.</span></p><p><span
  m="2581880">AUDIENCE: So what happens</span> <span m="2582380">if you</span>
  <span m="2583380">inserted</span> <span m="2583880">10s</span> <span
  m="2584380">and</span> <span m="2584880">you flip</span> <span m="2585380">off
  a</span> <span m="2585880">tail?</span> <span m="2586380">So that's</span>
  <span m="2586690">like</span> <span m="2586908">your</span> <span
  m="2587126">first</span> <span m="2587562">element</span> <span
  m="2588090">is</span> <span m="2588405">not</span> <span m="2588720">going
  to</span> <span m="2589186">go</span> <span m="2589602">up</span> <span
  m="2590020">all the</span> <span m="2590467">way,</span> <span m="2590914">and
  then</span> <span m="2591361">have you</span> <span m="2591808">do</span>
  <span m="2592255">search.</span></p><p><span m="2593460">SRINIVAS DEVADAS:
  So</span> <span m="2593780">typically</span> <span m="2594120">what</span>
  <span m="2594230">happens</span> <span m="2594540">is</span> <span
  m="2594800">you</span> <span m="2594950">need</span> <span
  m="2595170">to</span> <span m="2595230">have</span> <span m="2595380">a</span>
  <span m="2595420">minus</span> <span m="2595750">infinity</span> <span
  m="2596240">here.</span> <span m="2598520">And</span> <span
  m="2598700">that's</span> <span m="2598880">a</span> <span
  m="2598920">good</span> <span m="2599070">point.</span> <span
  m="2599590">It's</span> <span m="2599750">a</span> <span
  m="2599790">corner</span> <span m="2600080">case.</span> <span
  m="2600350">You</span> <span m="2600430">have</span> <span
  m="2600520">to</span> <span m="2600580">have</span> <span m="2600680">a</span>
  <span m="2600720">minus</span> <span m="2601010">infinity</span> <span
  m="2601710">that</span> <span m="2601860">goes</span> <span
  m="2602050">up</span> <span m="2602170">all</span> <span
  m="2602300">the</span> <span m="2602370">way.</span> <span
  m="2603990">Good</span> <span m="2604150">question.</span></p><p><span
  m="2605240">So</span> <span m="2606030">the</span> <span
  m="2606110">question</span> <span m="2606390">was</span> <span
  m="2606960">what</span> <span m="2607200">happens</span> <span
  m="2607440">if</span> <span m="2607540">I</span> <span m="2607600">had</span>
  <span m="2607760">something</span> <span m="2608020">less</span> <span
  m="2608210">than</span> <span m="2608330">14</span> <span
  m="2608790">and</span> <span m="2608920">I</span> <span
  m="2608980">inserted</span> <span m="2609380">it?</span> <span
  m="2609780">Well,</span> <span m="2609990">that</span> <span
  m="2610100">doesn't</span> <span m="2610320">happen</span> <span
  m="2610640">because</span> <span m="2611470">nothing</span> <span
  m="2611760">is</span> <span m="2611870">less</span> <span
  m="2612060">than</span> <span m="2612160">minus</span> <span
  m="2612420">infinity,</span> <span m="2613180">and</span> <span
  m="2613310">that</span> <span m="2613420">goes</span> <span
  m="2613630">up</span> <span m="2613760">all</span> <span
  m="2613900">the</span> <span m="2613970">way.</span> <span
  m="2615040">But</span> <span m="2615340">thanks</span> <span
  m="2615560">for</span> <span m="2615630">bringing</span> <span
  m="2615840">it</span> <span m="2615950">up.</span></p><p><span
  m="2617740">And</span> <span m="2617910">so</span> <span
  m="2618820">we're</span> <span m="2618950">going</span> <span
  m="2619070">to</span> <span m="2619130">do</span> <span m="2619340">a</span>
  <span m="2619410">little</span> <span m="2620440">warm-up</span> <span
  m="2622160">Lemma.</span> <span m="2623790">I</span> <span
  m="2624070">don't</span> <span m="2624180">know</span> <span
  m="2624270">if</span> <span m="2624350">you've</span> <span
  m="2624520">ever</span> <span m="2624780">heard</span> <span
  m="2625220">these</span> <span m="2625540">two</span> <span
  m="2625990">terms</span> <span m="2626820">in</span> <span
  m="2627010">juxtaposition</span> <span m="2628450">like</span> <span
  m="2628670">this--</span> <span m="2629270">warm</span> <span
  m="2629620">up</span> <span m="2630110">and</span> <span
  m="2630280">Lemma.</span> <span m="2631520">But</span> <span
  m="2631660">here</span> <span m="2631800">you</span> <span
  m="2631890">go,</span> <span m="2632050">your</span> <span
  m="2632190">first</span> <span m="2632590">warm-up</span> <span
  m="2633040">Lemma.</span></p><p><span m="2634330">I</span> <span
  m="2634590">guess</span> <span m="2634750">you'd</span> <span
  m="2634840">never</span> <span m="2635050">have</span> <span
  m="2635190">a</span> <span m="2635230">warm-up</span> <span
  m="2635730">theorem.</span> <span m="2637330">It's</span> <span
  m="2637790">a</span> <span m="2637830">warm-up</span> <span
  m="2638200">Lemma</span> <span m="2638490">for</span> <span
  m="2638670">this</span> <span m="2638780">theorem,</span> <span
  m="2640060">which</span> <span m="2640220">is</span> <span
  m="2640300">going</span> <span m="2640430">to</span> <span
  m="2640490">take</span> <span m="2640650">a</span> <span
  m="2640690">while</span> <span m="2641010">to</span> <span
  m="2643210">prove.</span> <span m="2644060">This</span> <span
  m="2644590">comes</span> <span m="2644810">down</span> <span
  m="2645100">to</span> <span m="2647710">trying</span> <span
  m="2647920">to</span> <span m="2647980">get</span> <span m="2648190">a</span>
  <span m="2648270">sense</span> <span m="2648660">of</span> <span
  m="2648810">how</span> <span m="2648920">many</span> <span
  m="2649100">levels</span> <span m="2649470">you're</span> <span
  m="2649570">going to</span> <span m="2649690">have</span> <span
  m="2650580">from</span> <span m="2650800">a</span> <span
  m="2650860">probabilistic</span> <span m="2651450">standpoint.</span> <span
  m="2652540">The</span> <span m="2652920">number</span> <span
  m="2653240">of</span> <span m="2653370">levels</span> <span
  m="2654600">in</span> <span m="2654730">an</span> <span m="2654950">n</span>
  <span m="2655260">element</span> <span m="2658310">skip</span> <span
  m="2658740">list</span> <span m="2662290">is</span> <span
  m="2662720">order</span> <span m="2663050">log</span> <span
  m="2663350">n.</span> <span m="2664980">And</span> <span
  m="2665690">I'm</span> <span m="2665910">going</span> <span
  m="2666040">to</span> <span m="2666100">now</span> <span
  m="2666250">define</span> <span m="2666590">the</span> <span
  m="2666690">term</span> <span m="2667640">with</span> <span
  m="2667940">high</span> <span m="2668200">probability.</span></p><p><span
  m="2669740">So</span> <span m="2669970">what</span> <span
  m="2670100">does</span> <span m="2670210">this</span> <span
  m="2670360">mean</span> <span m="2670560">exactly?</span> <span
  m="2672500">Well,</span> <span m="2672620">what</span> <span
  m="2672780">this</span> <span m="2672910">means</span> <span
  m="2673230">is</span> <span m="2674680">order</span> <span
  m="2674900">log</span> <span m="2675040">n</span> <span m="2675330">is</span>
  <span m="2675460">something</span> <span m="2675820">like</span> <span
  m="2677130">c</span> <span m="2677490">log n</span> <span
  m="2677900">plus</span> <span m="2678090">a</span> <span
  m="2678140">constant.</span> <span m="2679040">Let's</span> <span
  m="2679260">ignore</span> <span m="2679550">the</span> <span
  m="2679620">constant</span> <span m="2681260">and</span> <span
  m="2681500">let's</span> <span m="2681580">stick</span> <span
  m="2681870">with</span> <span m="2681980">c</span> <span
  m="2682170">log</span> <span m="2682280">n.</span> <span
  m="2683460">And</span> <span m="2684070">with</span> <span
  m="2684370">high</span> <span m="2684590">probability</span> <span
  m="2686050">is</span> <span m="2686760">a</span> <span
  m="2686900">probability</span> <span m="2688640">that</span> <span
  m="2690360">is</span> <span m="2690870">really</span> <span
  m="2691070">a</span> <span m="2691360">function</span> <span
  m="2693120">of</span> <span m="2695290">n</span> <span m="2695570">and</span>
  <span m="2695850">alpha.</span></p><p><span m="2696790">And</span> <span
  m="2697080">you</span> <span m="2697200">have</span> <span
  m="2697490">this</span> <span m="2698630">inverse</span> <span
  m="2700350">polynomial</span> <span m="2701110">relationship</span> <span
  m="2702710">in</span> <span m="2702930">the</span> <span
  m="2703000">sense</span> <span m="2703290">that</span> <span
  m="2704660">obviously</span> <span m="2704930">as</span> <span
  m="2705080">n</span> <span m="2705350">grows</span> <span
  m="2705710">here,</span> <span m="2706530">an</span> <span
  m="2707030">alpha--</span> <span m="2710310">we'll assume</span> <span
  m="2710660">that</span> <span m="2711120">alpha</span> <span
  m="2711400">is</span> <span m="2711680">greater</span> <span
  m="2711990">than</span> <span m="2712110">the</span> <span
  m="2712170">1--</span> <span m="2713300">you</span> <span
  m="2713650">are</span> <span m="2713840">going</span> <span
  m="2714140">to</span> <span m="2714250">get</span> <span m="2716380">a</span>
  <span m="2716490">decrease</span> <span m="2717530">in</span> <span
  m="2718170">this</span> <span m="2718510">quantity.</span> <span
  m="2719480">So</span> <span m="2719600">this</span> <span
  m="2719780">is</span> <span m="2719890">going</span> <span
  m="2720030">to</span> <span m="2720100">get</span> <span
  m="2720310">closer</span> <span m="2720670">and</span> <span
  m="2720770">closer</span> <span m="2721080">to</span> <span
  m="2721170">1</span> <span m="2721860">as</span> <span m="2722050">n</span>
  <span m="2722270">grows.</span> <span m="2723350">So</span> <span
  m="2723430">that's</span> <span m="2723630">the</span> <span
  m="2723700">difference</span> <span m="2724380">between</span> <span
  m="2724660">with</span> <span m="2724810">high</span> <span
  m="2724990">probability</span> <span m="2725590">and</span> <span
  m="2725720">just</span> <span m="2725960">sort</span> <span
  m="2726130">of</span> <span m="2726190">giving</span> <span
  m="2726390">you</span> <span m="2726530">an</span> <span
  m="2726620">expectation</span> <span m="2727180">number</span> <span
  m="2727840">where</span> <span m="2727990">you</span> <span
  m="2728180">have</span> <span m="2728380">no</span> <span
  m="2728520">such</span> <span m="2728760">guarantees.</span></p><p><span
  m="2729800">What</span> <span m="2729960">is</span> <span
  m="2730050">interesting</span> <span m="2730400">about</span> <span
  m="2730630">this</span> <span m="2730850">is</span> <span
  m="2730970">that</span> <span m="2731630">as</span> <span m="2731980">n</span>
  <span m="2732290">grows,</span> <span m="2733360">you're</span> <span
  m="2733640">going</span> <span m="2733930">to</span> <span
  m="2734360">get</span> <span m="2734830">a</span> <span
  m="2735240">higher</span> <span m="2735570">and</span> <span
  m="2735660">higher</span> <span m="2735880">probability.</span> <span
  m="2736940">And</span> <span m="2737220">this</span> <span
  m="2737580">constant</span> <span m="2738080">c</span> <span
  m="2739140">is</span> <span m="2739390">going</span> <span
  m="2739590">to</span> <span m="2739660">be</span> <span
  m="2739810">related</span> <span m="2740920">to</span> <span
  m="2741100">alpha.</span> <span m="2741960">That's</span> <span
  m="2742180">the</span> <span m="2742240">other</span> <span
  m="2742430">thing</span> <span m="2742610">that's</span> <span
  m="2742780">interesting</span> <span m="2743140">about</span> <span
  m="2743380">this.</span></p><p><span m="2743950">So</span> <span
  m="2744440">it's</span> <span m="2744630">like</span> <span
  m="2744840">saying--</span> <span m="2745700">and</span> <span
  m="2745840">you</span> <span m="2745910">can</span> <span
  m="2746020">kind</span> <span m="2746200">of</span> <span
  m="2746270">say</span> <span m="2746440">this</span> <span
  m="2746680">for</span> <span m="2748120">using</span> <span
  m="2748490">Chernoff</span> <span m="2748860">bounds</span> <span
  m="2749200">that</span> <span m="2749840">we'll</span> <span
  m="2750000">get</span> <span m="2750210">to</span> <span m="2750690">in</span>
  <span m="2750970">a</span> <span m="2751010">few</span> <span
  m="2751180">minutes,</span> <span m="2751810">even</span> <span
  m="2752070">for</span> <span m="2753550">expectation</span> <span
  m="2754170">as</span> <span m="2754300">well.</span> <span
  m="2754890">But</span> <span m="2755110">what</span> <span
  m="2755350">this</span> <span m="2755510">says</span> <span
  m="2756030">is</span> <span m="2756260">that</span> <span
  m="2757510">if,</span> <span m="2757740">for</span> <span
  m="2757870">example,</span> <span m="2758490">c</span> <span
  m="2759760">doubled,</span> <span m="2760980">then</span> <span
  m="2762440">you</span> <span m="2762700">are</span> <span
  m="2762800">saying</span> <span m="2763180">that</span> <span
  m="2764540">your</span> <span m="2765930">number</span> <span
  m="2766200">of</span> <span m="2766280">levels</span> <span
  m="2766620">is</span> <span m="2767500">order</span> <span
  m="2767900">4</span> <span m="2768240">log</span> <span m="2768380">n.</span>
  <span m="2768770">I</span> <span m="2768840">mean</span> <span
  m="2769170">I</span> <span m="2769340">understand</span> <span
  m="2769720">that</span> <span m="2769840">that</span> <span
  m="2770410">doesn't</span> <span m="2770670">make</span> <span
  m="2770810">too</span> <span m="2770880">much</span> <span
  m="2771010">sense,</span> <span m="2771250">but</span> <span
  m="2771360">it's</span> <span m="2771480">less</span> <span
  m="2771690">than</span> <span m="2771820">or</span> <span
  m="2771890">equal</span> <span m="2772160">to</span> <span
  m="2772240">4</span> <span m="2772520">log</span> <span m="2772775">n</span>
  <span m="2773030">plus</span> <span m="2773120">a</span> <span
  m="2773160">constant.</span></p><p><span m="2774620">And</span> <span
  m="2774920">that</span> <span m="2775100">4</span> <span m="2776310">is</span>
  <span m="2776690">going</span> <span m="2776890">to</span> <span
  m="2776980">get</span> <span m="2777140">reflected</span> <span
  m="2777750">in</span> <span m="2777910">the</span> <span
  m="2778000">alpha</span> <span m="2778450">here.</span> <span
  m="2781720">When</span> <span m="2781900">the</span> <span
  m="2781980">4</span> <span m="2782230">goes</span> <span
  m="2782460">from</span> <span m="2782660">4</span> <span m="2782910">to</span>
  <span m="2783000">8,</span> <span m="2783760">the</span> <span
  m="2783900">alpha</span> <span m="2784280">increases.</span> <span
  m="2785380">So</span> <span m="2787100">the</span> <span
  m="2787290">more</span> <span m="2787730">room</span> <span
  m="2788180">that</span> <span m="2788330">you</span> <span
  m="2788450">have</span> <span m="2788810">with</span> <span
  m="2788920">respect</span> <span m="2789290">to</span> <span
  m="2789370">this</span> <span m="2789520">constant,</span> <span
  m="2790600">the</span> <span m="2791180">higher</span> <span
  m="2791860">the</span> <span m="2792010">probability.</span> <span
  m="2792350">It</span> <span m="2792690">becomes</span> <span
  m="2792970">an</span> <span m="2793060">overwhelming</span> <span
  m="2793700">probability</span> <span m="2794760">that</span> <span
  m="2795390">you're</span> <span m="2795600">going</span> <span
  m="2795740">to</span> <span m="2795810">be</span> <span
  m="2795920">within</span> <span m="2796370">those</span> <span
  m="2796780">number</span> <span m="2797020">of</span> <span
  m="2797110">levels.</span></p><p><span m="2798190">So</span> <span
  m="2798960">maybe</span> <span m="2799270">there's</span> <span
  m="2799440">an</span> <span m="2799850">80%</span> <span
  m="2800720">probability</span> <span m="2801240">that</span> <span
  m="2801430">you're</span> <span m="2802080">within</span> <span
  m="2803280">2</span> <span m="2803440">log</span> <span m="2803710">n.</span>
  <span m="2804370">But</span> <span m="2804580">there's</span> <span
  m="2804760">a</span> <span m="2804820">99.99999%</span> <span
  m="2806860">probability</span> <span m="2807460">that</span> <span
  m="2807630">you're</span> <span m="2807730">within</span> <span
  m="2807980">4</span> <span m="2808260">log</span> <span m="2808400">n,</span>
  <span m="2809060">and</span> <span m="2809250">so</span> <span
  m="2809400">on</span> <span m="2809500">and</span> <span m="2809610">so</span>
  <span m="2809730">forth.</span> <span m="2810430">So</span> <span
  m="2810570">that's</span> <span m="2810790">the</span> <span
  m="2810860">kind</span> <span m="2811090">of</span> <span
  m="2811160">thing</span> <span m="2811380">that</span> <span
  m="2812110">with</span> <span m="2812300">the</span> <span
  m="2812340">high</span> <span m="2812470">probability</span> <span
  m="2813000">analysis</span> <span m="2813830">tells</span> <span
  m="2814140">you</span> <span m="2814360">explicitly.</span></p><p><span
  m="2816630">And</span> <span m="2817000">so</span> <span
  m="2817160">you</span> <span m="2817260">can</span> <span
  m="2817400">do</span> <span m="2817530">that,</span> <span
  m="2818160">you</span> <span m="2818260">can</span> <span
  m="2818360">do</span> <span m="2818510">this</span> <span
  m="2818660">analysis</span> <span m="2820210">fairly</span> <span
  m="2822190">straightforwardly.</span> <span m="2823980">And</span> <span
  m="2824270">let</span> <span m="2824390">me</span> <span m="2825920">do</span>
  <span m="2826060">that</span> <span m="2826570">on</span> <span
  m="2826690">a</span> <span m="2826740">different</span> <span
  m="2827030">board.</span> <span m="2828390">Let</span> <span
  m="2828540">me</span> <span m="2828610">go</span> <span
  m="2828740">ahead</span> <span m="2828940">and</span> <span
  m="2829160">do</span> <span m="2829360">that</span> <span
  m="2829510">over</span> <span m="2829660">here.</span> <span
  m="2830410">Actually,</span> <span m="2830650">I</span> <span
  m="2830690">don't really</span> <span m="2830830">need</span> <span
  m="2830990">this.</span> <span m="2832328">So</span> <span
  m="2833220">let's</span> <span m="2833510">do that over</span> <span
  m="2833800">here.</span></p><p><span m="2838830">And</span> <span
  m="2838870">so</span> <span m="2838960">this</span> <span
  m="2839090">is</span> <span m="2839170">our</span> <span
  m="2839310">first</span> <span m="2840060">with</span> <span
  m="2840410">high</span> <span m="2840600">probability</span> <span
  m="2841140">analysis.</span> <span m="2842510">And</span> <span
  m="2843050">I</span> <span m="2843200">want</span> <span m="2843350">to</span>
  <span m="2843620">prove</span> <span m="2843960">that</span> <span
  m="2844120">warm-up</span> <span m="2844540">Lemma.</span> <span
  m="2846210">So</span> <span m="2846940">usually</span> <span
  m="2847400">what</span> <span m="2847570">you</span> <span
  m="2847650">do</span> <span m="2847810">here</span> <span
  m="2848100">is</span> <span m="2848290">you</span> <span
  m="2848400">look</span> <span m="2848550">at</span> <span
  m="2848620">the</span> <span m="2848690">failure</span> <span
  m="2849130">probability.</span> <span m="2850500">So</span> <span
  m="2850900">with</span> <span m="2850990">high</span> <span
  m="2851400">probability</span> <span m="2852270">is</span> <span
  m="2852530">typically</span> <span m="2852940">something</span> <span
  m="2853280">that</span> <span m="2853420">looks</span> <span
  m="2853610">like</span> <span m="2853810">1</span> <span
  m="2854110">minus</span> <span m="2855540">1</span> <span
  m="2855980">divided</span> <span m="2856290">by</span> <span
  m="2856480">n</span> <span m="2856800">raised to</span> <span
  m="2857120">alpha.</span> <span m="2858100">And</span> <span
  m="2859000">this</span> <span m="2859270">part</span> <span
  m="2859530">here</span> <span m="2860240">is</span> <span
  m="2860430">the</span> <span m="2860510">failure</span> <span
  m="2860910">probability.</span> <span m="2862060">And</span> <span
  m="2862140">that's</span> <span m="2862340">typically</span> <span
  m="2862710">what</span> <span m="2862880">you</span> <span
  m="2863010">analyze</span> <span m="2863750">and</span> <span
  m="2863980">what</span> <span m="2864160">we're</span> <span
  m="2864260">going</span> <span m="2864430">to</span> <span
  m="2864510">do</span> <span m="2865290">today.</span></p><p><span
  m="2866430">So</span> <span m="2866590">the</span> <span
  m="2866660">failure</span> <span m="2866980">probability</span> <span
  m="2867610">is</span> <span m="2867820">that</span> <span
  m="2867970">it's</span> <span m="2868130">not</span> <span
  m="2868750">less</span> <span m="2869040">than</span> <span
  m="2869840">c</span> <span m="2870180">log n</span> <span
  m="2870550">levels,</span> <span m="2871170">is</span> <span
  m="2871320">the</span> <span m="2871400">complement</span> <span
  m="2871990">of</span> <span m="2872100">what</span> <span
  m="2872250">we</span> <span m="2872350">just</span> <span
  m="2872560">looked</span> <span m="2872790">at,</span> <span
  m="2874120">which</span> <span m="2874640">is</span> <span
  m="2874820">the</span> <span m="2874910">probability</span> <span
  m="2876140">that</span> <span m="2876590">it's</span> <span
  m="2876770">strictly</span> <span m="2877250">greater</span> <span
  m="2877630">than</span> <span m="2877770">c</span> <span m="2878000">log
  n</span> <span m="2878370">levels.</span> <span m="2881610">And</span> <span
  m="2883120">that's</span> <span m="2883490">the</span> <span
  m="2883580">probability</span> <span m="2884200">that</span> <span
  m="2885310">some</span> <span m="2886030">element</span> <span
  m="2890700">gets</span> <span m="2891280">promoted</span> <span
  m="2894710">greater</span> <span m="2895050">than</span> <span
  m="2895250">c</span> <span m="2895520">log n</span> <span
  m="2895970">times.</span></p><p><span m="2899080">So</span> <span
  m="2899500">why</span> <span m="2899780">would</span> <span
  m="2899970">you</span> <span m="2900130">have</span> <span
  m="2902260">more</span> <span m="2902580">than</span> <span
  m="2902750">c</span> <span m="2902960">log n</span> <span
  m="2903260">levels?</span> <span m="2904120">It's</span> <span
  m="2904410">essentially</span> <span m="2904810">because</span> <span
  m="2905470">you</span> <span m="2905730">inserted</span> <span
  m="2906250">something</span> <span m="2907030">and</span> <span
  m="2907220">that</span> <span m="2908080">element</span> <span
  m="2908530">got</span> <span m="2908750">promoted</span> <span
  m="2909830">strictly</span> <span m="2910270">greater</span> <span
  m="2910540">than</span> <span m="2910680">c</span> <span m="2910930">log
  n</span> <span m="2911320">times,</span> <span m="2912690">which</span> <span
  m="2913110">obviously</span> <span m="2913500">implies</span> <span
  m="2914100">that</span> <span m="2914730">you</span> <span
  m="2915160">had</span> <span m="2915440">the</span> <span
  m="2915530">sequence</span> <span m="2916110">of</span> <span
  m="2916240">heads,</span> <span m="2917060">and</span> <span
  m="2917200">we'll</span> <span m="2917320">get</span> <span
  m="2917490">to</span> <span m="2917570">that</span> <span
  m="2917760">in</span> <span m="2917850">just</span> <span m="2918120">a</span>
  <span m="2918170">second.</span></p><p><span m="2919110">But</span> <span
  m="2919400">before</span> <span m="2919780">we</span> <span
  m="2919920">go</span> <span m="2920220">to</span> <span
  m="2921120">that</span> <span m="2921390">step</span> <span
  m="2921820">of</span> <span m="2922360">figuring</span> <span
  m="2922770">out</span> <span m="2923350">exactly</span> <span
  m="2923750">what's</span> <span m="2923920">going</span> <span
  m="2924140">on</span> <span m="2924310">here</span> <span
  m="2924780">as</span> <span m="2924970">to</span> <span m="2925060">why</span>
  <span m="2925990">this</span> <span m="2926210">got</span> <span
  m="2926390">promoted</span> <span m="2927150">and</span> <span
  m="2927410">what</span> <span m="2927570">the</span> <span
  m="2927640">probability</span> <span m="2928110">of</span> <span
  m="2928230">each</span> <span m="2928420">promotion</span> <span
  m="2928880">is,</span> <span m="2930900">what</span> <span
  m="2931140">I</span> <span m="2931210">have</span> <span
  m="2931420">here</span> <span m="2931710">is</span> <span m="2932720">I</span>
  <span m="2932830">have</span> <span m="2933020">a</span> <span
  m="2935080">sequence</span> <span m="2935640">of</span> <span
  m="2935800">inserts</span> <span m="2936760">potentially</span> <span
  m="2937250">that</span> <span m="2937390">I</span> <span
  m="2937420">have</span> <span m="2937560">to</span> <span
  m="2937640">analyze.</span> <span m="2938790">And</span> <span
  m="2939110">in</span> <span m="2939270">general,</span> <span
  m="2941210">when</span> <span m="2941400">I</span> <span
  m="2941490">have</span> <span m="2942170">an</span> <span m="2942670">n</span>
  <span m="2942730">element</span> <span m="2943100">list,</span> <span
  m="2944020">I'm</span> <span m="2944210">going</span> <span
  m="2944350">to</span> <span m="2944410">assume</span> <span
  m="2944760">that</span> <span m="2944980">each</span> <span
  m="2945260">of</span> <span m="2945380">these</span> <span
  m="2945610">elements</span> <span m="2946440">got</span> <span
  m="2946690">inserted</span> <span m="2947820">into</span> <span
  m="2948230">the</span> <span m="2948320">list</span> <span
  m="2948610">at</span> <span m="2948730">some</span> <span
  m="2948950">point.</span> <span m="2949540">So</span> <span
  m="2949700">I've</span> <span m="2949810">had</span> <span
  m="2949990">n</span> <span m="2950180">inserts.</span> <span
  m="2951760">And</span> <span m="2952100">we</span> <span
  m="2952190">just</span> <span m="2952460">look</span> <span
  m="2952600">at</span> <span m="2952660">the</span> <span
  m="2952720">case</span> <span m="2952980">where</span> <span
  m="2953170">you</span> <span m="2953280">have</span> <span
  m="2954510">n</span> <span m="2954710">inserts,</span> <span
  m="2956050">you</span> <span m="2956190">could</span> <span
  m="2956300">have</span> <span m="2956440">deletes,</span> <span
  m="2956870">and</span> <span m="2957000">so</span> <span
  m="2957110">you</span> <span m="2957180">could</span> <span
  m="2957280">have</span> <span m="2957640">more</span> <span
  m="2957890">inserts,</span> <span m="2958690">but</span> <span
  m="2959570">it</span> <span m="2959700">won't</span> <span
  m="2959880">really</span> <span m="2960020">change</span> <span
  m="2960310">anything.</span></p><p><span m="2960980">You</span> <span
  m="2961130">have</span> <span m="2961250">n</span> <span
  m="2961460">inserts</span> <span m="2962610">corresponding</span> <span
  m="2963250">to</span> <span m="2964850">each</span> <span
  m="2965450">of</span> <span m="2965530">these</span> <span
  m="2965740">elements,</span> <span m="2966480">and</span> <span
  m="2966760">one</span> <span m="2966950">of</span> <span
  m="2967060">those</span> <span m="2967280">n</span> <span
  m="2967550">elements</span> <span m="2968490">got</span> <span
  m="2968740">promoted</span> <span m="2969820">in</span> <span
  m="2970070">this</span> <span m="2970240">failure</span> <span
  m="2970580">case</span> <span m="2971310">greater</span> <span
  m="2971680">than</span> <span m="2972030">c</span> <span m="2972310">log
  n</span> <span m="2972690">times.</span> <span m="2974380">That's</span> <span
  m="2974670">essentially</span> <span m="2975000">what's</span> <span
  m="2975160">happened</span> <span m="2975450">here.</span></p><p><span
  m="2976320">And</span> <span m="2976610">so</span> <span
  m="2977420">you</span> <span m="2977580">don't</span> <span
  m="2977710">know</span> <span m="2977830">which</span> <span
  m="2978020">one,</span> <span m="2978930">but</span> <span
  m="2980040">you</span> <span m="2980640">can</span> <span
  m="2980750">typically</span> <span m="2981120">do</span> <span
  m="2981290">this</span> <span m="2981510">in</span> <span
  m="2981620">with</span> <span m="2981770">high</span> <span
  m="2981930">probability</span> <span m="2982430">analysis</span> <span
  m="2982930">because</span> <span m="2983170">the</span> <span
  m="2983240">probabilities</span> <span m="2983830">are</span> <span
  m="2984240">so</span> <span m="2984530">small</span> <span
  m="2985410">and</span> <span m="2985620">they're</span> <span
  m="2986550">inverse</span> <span m="2986950">polynomials,</span> <span
  m="2989770">polynomials</span> <span m="2990310">like</span> <span
  m="2990490">n raised</span> <span m="2990600">to</span> <span
  m="2990900">alpha.</span> <span m="2991620">You</span> <span
  m="2991770">can</span> <span m="2991890">use</span> <span
  m="2992190">what's</span> <span m="2992390">called</span> <span
  m="2992570">the</span> <span m="2992650">union</span> <span
  m="2992990">bound</span> <span m="2993330">that</span> <span
  m="2993900">I'm</span> <span m="2994050">sure</span> <span
  m="2994440">you've</span> <span m="2994680">used</span> <span
  m="2995680">before</span> <span m="2996220">in</span> <span
  m="2996510">some</span> <span m="2996800">context</span> <span
  m="2997240">or</span> <span m="2997300">the other.</span> <span
  m="2998180">And</span> <span m="2998440">you</span> <span
  m="2998630">essentially</span> <span m="2998910">say</span> <span
  m="3000050">that</span> <span m="3000310">this</span> <span
  m="3000500">is</span> <span m="3000680">less</span> <span
  m="3000960">than</span> <span m="3001130">or</span> <span
  m="3001250">equal</span> <span m="3001560">to</span> <span
  m="3002230">the</span> <span m="3002360">probability</span> <span
  m="3003000">that</span> <span m="3004225">a</span> <span
  m="3004550">particular</span> <span m="3005180">element</span> <span
  m="3005600">x.</span></p><p><span m="3006810">So</span> <span
  m="3007090">you</span> <span m="3007150">just</span> <span
  m="3007330">pick</span> <span m="3007500">an</span> <span
  m="3007590">element,</span> <span m="3008290">arbitrary</span> <span
  m="3008760">element</span> <span m="3009120">x,</span> <span
  m="3010740">but</span> <span m="3010930">you</span> <span
  m="3011010">pick</span> <span m="3011200">one.</span> <span
  m="3012720">Gets</span> <span m="3013080">promoted</span> <span
  m="3015560">greater</span> <span m="3015910">than</span> <span
  m="3016590">c</span> <span m="3016730">log</span> <span m="3016900">n</span>
  <span m="3017110">times.</span> <span m="3018830">So</span> <span
  m="3019790">you</span> <span m="3019910">have</span> <span
  m="3020070">a</span> <span m="3020310">small</span> <span
  m="3020790">probability.</span> <span m="3021440">You</span> <span
  m="3021550">have</span> <span m="3021690">no</span> <span
  m="3021830">idea</span> <span m="3022200">whether</span> <span
  m="3022410">these</span> <span m="3022940">events</span> <span
  m="3023340">are</span> <span m="3023460">independent</span> <span
  m="3023990">or</span> <span m="3024090">not.</span></p><p><span
  m="3024760">The</span> <span m="3024980">union</span> <span
  m="3025290">bound</span> <span m="3025520">doesn't</span> <span
  m="3025790">care</span> <span m="3026670">about</span> <span
  m="3027090">it.</span> <span m="3027750">It's</span> <span
  m="3027980">like</span> <span m="3028140">saying</span> <span
  m="3028450">you've</span> <span m="3028550">got</span> <span
  m="3028660">a</span> <span m="3028900">0.001</span> <span
  m="3029900">probability</span> <span m="3030530">that</span> <span
  m="3031330">any</span> <span m="3031800">of</span> <span
  m="3031980">these</span> <span m="3032180">elements</span> <span
  m="3032590">could</span> <span m="3032760">get</span> <span
  m="3033540">promoted</span> <span m="3034370">greater</span> <span
  m="3034670">than</span> <span m="3034820">c</span> <span
  m="3035000">log</span> <span m="3035230">n</span> <span
  m="3035380">times,</span> <span m="3036150">and</span> <span
  m="3036410">there's</span> <span m="3037440">10</span> <span
  m="3037660">of</span> <span m="3037750">those</span> <span
  m="3037960">elements.</span> <span m="3038980">You</span> <span
  m="3039240">don't</span> <span m="3039360">know</span> <span
  m="3039510">whether</span> <span m="3039720">they're</span> <span
  m="3039980">independent</span> <span m="3040590">events</span> <span
  m="3040920">or</span> <span m="3041020">not,</span> <span
  m="3041560">but</span> <span m="3041790">you</span> <span
  m="3041860">can</span> <span m="3041980">certainly</span> <span
  m="3042420">use</span> <span m="3042670">the</span> <span
  m="3042770">union</span> <span m="3043060">bound</span> <span
  m="3043340">that</span> <span m="3043480">says</span> <span
  m="3044240">the</span> <span m="3044700">overall</span> <span
  m="3045140">failure</span> <span m="3045470">probability</span> <span
  m="3046360">is</span> <span m="3046490">going</span> <span
  m="3046620">to</span> <span m="3046680">be</span> <span
  m="3046790">less</span> <span m="3047000">than</span> <span
  m="3047130">or</span> <span m="3047200">equal</span> <span
  m="3047500">to</span> <span m="3048530">n</span> <span
  m="3048720">equals</span> <span m="3049020">10,</span> <span
  m="3049580">in</span> <span m="3049900">my</span> <span
  m="3050090">example,</span> <span m="3050990">times</span> <span
  m="3051330">that</span> <span m="3051870">0.001.</span> <span
  m="3053460">That's</span> <span m="3053740">basically</span> <span
  m="3054130">it.</span></p><p><span m="3055680">Now</span> <span
  m="3056000">you</span> <span m="3056130">can</span> <span
  m="3057110">go</span> <span m="3057380">off</span> <span
  m="3057610">and</span> <span m="3057740">say,</span> <span
  m="3058090">what</span> <span m="3058220">does</span> <span
  m="3058330">it</span> <span m="3058460">mean</span> <span
  m="3058790">for</span> <span m="3058980">an</span> <span
  m="3059070">element</span> <span m="3059420">to</span> <span
  m="3059490">get</span> <span m="3059660">promoted?</span> <span
  m="3060700">What</span> <span m="3061020">actually</span> <span
  m="3061320">has</span> <span m="3061470">to</span> <span
  m="3061580">happen</span> <span m="3062310">for</span> <span
  m="3062480">an</span> <span m="3062570">element</span> <span
  m="3062870">to</span> <span m="3062940">get</span> <span
  m="3063110">promoted?</span> <span m="3065040">And</span> <span
  m="3065210">you</span> <span m="3065400">have</span> <span
  m="3065560">n</span> <span m="3066230">times</span> <span m="3067310">1</span>
  <span m="3067650">over</span> <span m="3067850">2,</span> <span
  m="3069450">because</span> <span m="3069820">you're</span> <span
  m="3069970">flipping</span> <span m="3070290">a</span> <span
  m="3070330">fair</span> <span m="3070660">coin,</span> <span
  m="3072350">and</span> <span m="3072950">you are</span> <span
  m="3073250">getting</span> <span m="3074235">a</span> <span
  m="3074640">c</span> <span m="3074780">log n</span> <span
  m="3076430">heads</span> <span m="3076890">here.</span> <span
  m="3078950">You</span> <span m="3079090">flip</span> <span
  m="3079450">and</span> <span m="3079590">you</span> <span
  m="3079650">get</span> <span m="3081710">one</span> <span
  m="3081900">promotion.</span> <span m="3085705">There's</span> <span
  m="3086010">two</span> <span m="3086120">levels</span> <span
  m="3086490">associated</span> <span m="3086980">with</span> <span
  m="3087120">a</span> <span m="3087200">promotion,</span> <span
  m="3087800">the</span> <span m="3087940">level</span> <span
  m="3088230">you</span> <span m="3088330">came</span> <span
  m="3088600">from</span> <span m="3089260">and</span> <span
  m="3089740">the</span> <span m="3089800">level</span> <span
  m="3090060">you</span> <span m="3090430">went</span> <span
  m="3090690">to.</span></p><p><span m="3091330">And</span> <span
  m="3091630">so</span> <span m="3091750">a</span> <span
  m="3091810">promotion</span> <span m="3092410">is</span> <span
  m="3092520">a</span> <span m="3092560">move,</span> <span
  m="3093350">so</span> <span m="3093850">you're</span> <span
  m="3093980">going</span> <span m="3094100">to</span> <span
  m="3094160">have</span> <span m="3094430">one</span> <span
  m="3095910">more</span> <span m="3096130">level.</span> <span
  m="3097530">If</span> <span m="3097780">you</span> <span
  m="3097870">count</span> <span m="3098150">levels,</span> <span
  m="3098700">then</span> <span m="3098930">you</span> <span
  m="3099030">have</span> <span m="3099790">the</span> <span
  m="3099940">number</span> <span m="3100130">of</span> <span
  m="3100200">promotions,</span> <span m="3100740">right?</span> <span
  m="3101670">That's</span> <span m="3101950">just</span> <span
  m="3102870">simply</span> <span m="3103520">corresponds</span> <span
  m="3104140">to</span> <span m="3105290">taking</span> <span
  m="3105620">this</span> <span m="3105760">1/2</span> <span
  m="3106510">and</span> <span m="3106730">raising</span> <span
  m="3107070">it</span> <span m="3107200">to</span> <span m="3107290">c</span>
  <span m="3107530">log n,</span> <span m="3108310">because</span> <span
  m="3109080">that's</span> <span m="3109420">essentially</span> <span
  m="3110340">the</span> <span m="3113360">number</span> <span
  m="3113560">of</span> <span m="3113620">promotions</span> <span
  m="3114050">you</span> <span m="3114170">have.</span></p><p><span
  m="3115330">And</span> <span m="3116640">you</span> <span
  m="3117220">got</span> <span m="3117430">n</span> <span m="3118360">1/2</span>
  <span m="3118860">c</span> <span m="3119070">log</span> <span
  m="3119210">n,</span> <span m="3120060">and</span> <span
  m="3120360">what</span> <span m="3120570">does</span> <span
  m="3120660">that</span> <span m="3121150">turn</span> <span
  m="3121420">into?</span> <span m="3122950">What</span> <span
  m="3124100">is</span> <span m="3124210">n</span> <span
  m="3124410">times</span> <span m="3124720">1/2</span> <span
  m="3125200">c</span> <span m="3125400">log</span> <span m="3125510">n?</span>
  <span m="3127990">1</span> <span m="3128630">over</span> <span
  m="3128800">2</span> <span m="3129070">raised</span> <span
  m="3129320">to</span> <span m="3129410">log</span> <span m="3129640">n</span>
  <span m="3129780">would</span> <span m="3129910">give</span> <span
  m="3130070">you?</span> <span m="3132490">2 raised to</span> <span
  m="3132880">log ns?</span> <span m="3134790">Is</span> <span
  m="3134990">n,</span> <span m="3135270">right?</span></p><p><span
  m="3135590">So</span> <span m="3137020">you</span> <span
  m="3137110">got</span> <span m="3137390">n</span> <span
  m="3137740">divided</span> <span m="3138150">by</span> <span m="3138490">n
  raised</span> <span m="3138940">to</span> <span m="3139040">c,</span> <span
  m="3140110">which</span> <span m="3140510">is</span> <span
  m="3140750">1</span> <span m="3141050">divided</span> <span m="3141380">by
  n</span> <span m="3141800">raised</span> <span m="3142030">to</span> <span
  m="3142140">c</span> <span m="3142390">minus</span> <span
  m="3142900">1,</span> <span m="3143920">which</span> <span
  m="3144130">is</span> <span m="3145300">1</span> <span
  m="3145460">divided</span> <span m="3145710">by</span> <span m="3145860">n
  raised to</span> <span m="3146230">alpha</span> <span m="3146780">where</span>
  <span m="3147180">alpha</span> <span m="3147500">is</span> <span
  m="3147570">c</span> <span m="3147760">minus</span> <span
  m="3148050">1.</span> <span m="3150540">So</span> <span m="3150750">that's it.
  That's</span> <span m="3150950">our</span> <span m="3151060">first</span>
  <span m="3151620">with</span> <span m="3151850">high</span> <span
  m="3152030">probability</span> <span m="3152610">analysis.</span> <span
  m="3153970">Not</span> <span m="3154190">too</span> <span
  m="3154320">hard.</span></p><p><span m="3155550">What</span> <span
  m="3155740">I've</span> <span m="3155840">done</span> <span
  m="3156050">is</span> <span m="3156190">done</span> <span
  m="3156430">exactly</span> <span m="3156910">what</span> <span
  m="3157050">I</span> <span m="3157110">just</span> <span
  m="3157870">told</span> <span m="3158140">you</span> <span
  m="3159140">that</span> <span m="3159670">the</span> <span
  m="3160250">notion</span> <span m="3160630">of</span> <span
  m="3160770">with</span> <span m="3160840">high</span> <span
  m="3161020">probability</span> <span m="3161600">is.</span> <span
  m="3162770">You</span> <span m="3163030">have</span> <span
  m="3164350">a</span> <span m="3164480">failure</span> <span
  m="3164830">probability</span> <span m="3165760">that</span> <span
  m="3165990">is</span> <span m="3166120">related.</span> <span
  m="3168050">Inverse</span> <span m="3168470">polynomial</span> <span
  m="3169590">and</span> <span m="3169850">the</span> <span
  m="3172280">degree</span> <span m="3172780">of</span> <span
  m="3172890">the</span> <span m="3173010">polynomial</span> <span
  m="3173590">alpha</span> <span m="3174380">is</span> <span
  m="3174580">related</span> <span m="3174920">to</span> <span
  m="3175040">c.</span> <span m="3175840">And</span> <span m="3176080">so</span>
  <span m="3176200">that's</span> <span m="3176380">what</span> <span
  m="3176500">I</span> <span m="3176570">have</span> <span
  m="3176770">out</span> <span m="3176900">there,</span> <span
  m="3177120">but</span> <span m="3177290">c</span> <span
  m="3177660">equals--</span> <span m="3179465">what did</span> <span
  m="3179850">it</span> <span m="3179890">have?</span> <span
  m="3180080">Alpha</span> <span m="3180370">equals</span> <span
  m="3180630">c</span> <span m="3180780">minus</span> <span m="3181050">1</span>
  <span m="3181320">or c</span> <span m="3181440">equals</span> <span
  m="3181890">alpha</span> <span m="3182190">plus</span> <span
  m="3182390">1.</span></p><p><span m="3184510">So</span> <span
  m="3184730">what</span> <span m="3184900">I've</span> <span
  m="3185000">done</span> <span m="3185180">here</span> <span
  m="3185470">is</span> <span m="3185890">done</span> <span
  m="3186400">an</span> <span m="3186530">analysis</span> <span
  m="3187090">that</span> <span m="3187690">tells</span> <span
  m="3188040">you</span> <span m="3188220">with</span> <span
  m="3188470">high</span> <span m="3188660">probability</span> <span
  m="3189660">how</span> <span m="3189830">many</span> <span
  m="3190050">levels</span> <span m="3190480">I'm</span> <span
  m="3190600">going</span> <span m="3190730">to</span> <span
  m="3190810">have</span> <span m="3191590">given</span> <span
  m="3191950">my</span> <span m="3192120">insert</span> <span
  m="3192560">algorithm.</span> <span m="3194610">So</span> <span
  m="3194830">this</span> <span m="3195020">is</span> <span
  m="3195850">the</span> <span m="3196230">first</span> <span
  m="3196550">part</span> <span m="3197390">of</span> <span
  m="3198000">what</span> <span m="3198200">we'd</span> <span
  m="3198340">like</span> <span m="3198500">to</span> <span
  m="3198590">show.</span> <span m="3199290">This</span> <span
  m="3199500">just</span> <span m="3199720">tells</span> <span
  m="3199980">us</span> <span m="3200340">how</span> <span
  m="3200560">big</span> <span m="3201340">this</span> <span
  m="3201510">skip</span> <span m="3201830">list</span> <span
  m="3202050">is</span> <span m="3202170">going</span> <span
  m="3202390">to</span> <span m="3202460">grow</span> <span
  m="3203200">vertically.</span></p><p><span m="3204420">It</span> <span
  m="3204820">doesn't</span> <span m="3205150">tell</span> <span
  m="3205390">us</span> <span m="3206090">anything</span> <span
  m="3207100">about</span> <span m="3207750">the</span> <span
  m="3207890">structure</span> <span m="3208470">of</span> <span
  m="3208580">the</span> <span m="3208660">list</span> <span
  m="3209140">internally</span> <span m="3210280">as</span> <span
  m="3210500">to</span> <span m="3210600">whether</span> <span
  m="3211940">the</span> <span m="3213290">randomization</span> <span
  m="3214730">is</span> <span m="3214920">going</span> <span
  m="3215110">to</span> <span m="3215170">cause</span> <span
  m="3216440">that</span> <span m="3216700">pretty</span> <span
  m="3216930">structure</span> <span m="3217410">that</span> <span
  m="3217570">you</span> <span m="3217640">see</span> <span
  m="3217870">up</span> <span m="3217970">here</span> <span
  m="3218850">to</span> <span m="3218960">be</span> <span
  m="3219050">completely</span> <span m="3219590">messed</span> <span
  m="3219970">up</span> <span m="3220620">to</span> <span m="3220740">the</span>
  <span m="3220830">point</span> <span m="3221200">where</span> <span
  m="3222000">we</span> <span m="3222170">don't</span> <span
  m="3222430">get</span> <span m="3222710">order</span> <span
  m="3223030">log</span> <span m="3223300">n</span> <span
  m="3223470">search</span> <span m="3223950">complexity,</span> <span
  m="3224880">because</span> <span m="3225160">we are</span> <span
  m="3225320">spending</span> <span m="3225750">way</span> <span
  m="3226120">too</span> <span m="3226280">much</span> <span
  m="3226540">time</span> <span m="3227320">let's</span> <span
  m="3227530">say</span> <span m="3227650">on</span> <span
  m="3227760">the</span> <span m="3227830">bottom</span> <span
  m="3228130">list</span> <span m="3228620">or</span> <span
  m="3228820">the</span> <span m="3228920">list</span> <span
  m="3229200">just</span> <span m="3229430">above</span> <span
  m="3229710">the</span> <span m="3229770">bottom</span> <span
  m="3230080">list,</span> <span m="3230640">et</span> <span
  m="3230920">cetera.</span></p><p><span m="3231590">So</span> <span
  m="3231690">we</span> <span m="3231790">need</span> <span
  m="3231920">to</span> <span m="3231980">get</span> <span m="3232130">a</span>
  <span m="3232160">sense</span> <span m="3232600">of</span> <span
  m="3235420">how</span> <span m="3236350">the</span> <span
  m="3236530">structure</span> <span m="3237120">corresponding</span> <span
  m="3237580">to</span> <span m="3237670">the</span> <span
  m="3237760">skip</span> <span m="3238030">list,</span> <span
  m="3238600">whether</span> <span m="3238830">it's</span> <span
  m="3238940">going</span> <span m="3239070">to</span> <span
  m="3239130">look</span> <span m="3239290">somewhat</span> <span
  m="3239720">uniform</span> <span m="3240210">or</span> <span
  m="3240300">not.</span> <span m="3240630">We</span> <span
  m="3240730">have</span> <span m="3240850">to</span> <span
  m="3240920">categorize</span> <span m="3241420">that,</span> <span
  m="3242070">and</span> <span m="3242380">the</span> <span
  m="3242510">only</span> <span m="3242650">way</span> <span
  m="3242810">we're</span> <span m="3242870">going</span> <span
  m="3242990">to</span> <span m="3243050">characterize</span> <span
  m="3243510">that</span> <span m="3244070">is</span> <span
  m="3244320">by</span> <span m="3245180">analyzing</span> <span
  m="3245690">search</span> <span m="3246290">and</span> <span
  m="3246490">counting</span> <span m="3247040">the</span> <span
  m="3247120">number</span> <span m="3247370">of</span> <span
  m="3247470">moves</span> <span m="3248400">that</span> <span
  m="3248590">a</span> <span m="3248630">search</span> <span
  m="3249030">makes.</span></p><p><span m="3249970">And</span> <span
  m="3250160">the</span> <span m="3250230">reason</span> <span
  m="3250530">it's</span> <span m="3250650">more</span> <span
  m="3250860">complicated</span> <span m="3251510">than</span> <span
  m="3251630">what</span> <span m="3251800">you</span> <span
  m="3251880">see</span> <span m="3252080">up</span> <span
  m="3252220">there</span> <span m="3252880">is</span> <span
  m="3253090">that</span> <span m="3254100">in</span> <span m="3254510">a</span>
  <span m="3254550">search,</span> <span m="3255400">as</span> <span
  m="3255580">you</span> <span m="3255660">can</span> <span
  m="3255770">see,</span> <span m="3256550">you're</span> <span
  m="3256900">going</span> <span m="3257020">to</span> <span
  m="3257080">be</span> <span m="3257180">moving</span> <span
  m="3257660">at</span> <span m="3257810">different</span> <span
  m="3258140">levels.</span> <span m="3259110">You're</span> <span
  m="3259260">going</span> <span m="3259390">to</span> <span
  m="3259450">be</span> <span m="3259550">moving</span> <span
  m="3260060">at</span> <span m="3260160">the</span> <span
  m="3260260">top</span> <span m="3260400">level.</span> <span
  m="3261500">Maybe</span> <span m="3262275">at</span> <span
  m="3262530">relatively</span> <span m="3262990">small</span> <span
  m="3263270">number</span> <span m="3263500">of</span> <span
  m="3263580">moves,</span> <span m="3264410">you're</span> <span
  m="3264550">going</span> <span m="3264670">to</span> <span
  m="3264730">pop</span> <span m="3265060">down</span> <span
  m="3265310">one,</span> <span m="3266050">move</span> <span
  m="3266510">a</span> <span m="3266590">few</span> <span
  m="3266780">moves</span> <span m="3267100">at</span> <span
  m="3267210">that</span> <span m="3267380">level,</span> <span
  m="3268130">pop</span> <span m="3268400">down,</span> <span
  m="3269020">et</span> <span m="3269110">cetera,</span> <span
  m="3269400">et</span> <span m="3269550">cetera.</span></p><p><span
  m="3270160">So</span> <span m="3270230">there's</span> <span
  m="3270370">a</span> <span m="3270430">lot</span> <span m="3270710">of</span>
  <span m="3270790">things</span> <span m="3271010">going</span> <span
  m="3271230">on</span> <span m="3271380">in</span> <span
  m="3271480">search</span> <span m="3272460">which</span> <span
  m="3272680">happen</span> <span m="3273010">at</span> <span
  m="3273100">different</span> <span m="3273430">levels,</span> <span
  m="3274280">and</span> <span m="3274530">the</span> <span
  m="3274600">total</span> <span m="3274960">cost</span> <span
  m="3275860">is</span> <span m="3276070">going</span> <span
  m="3276280">to</span> <span m="3276370">have</span> <span
  m="3276620">to</span> <span m="3276720">be</span> <span m="3276990">all</span>
  <span m="3277360">of</span> <span m="3277460">the</span> <span
  m="3277530">moves.</span> <span m="3278920">So</span> <span
  m="3279120">we're</span> <span m="3279240">going</span> <span
  m="3279430">to</span> <span m="3280010">think</span> <span
  m="3280170">about</span> <span m="3280390">all</span> <span
  m="3280660">of</span> <span m="3280760">the</span> <span
  m="3280830">moves--</span> <span m="3282200">up</span> <span
  m="3282500">moves,</span> <span m="3282900">down</span> <span
  m="3283330">moves,</span> <span m="3284420">and</span> <span
  m="3284710">add</span> <span m="3284870">them</span> <span
  m="3284970">all</span> <span m="3285200">up.</span> <span
  m="3285760">They</span> <span m="3285800">all</span> <span
  m="3285990">have</span> <span m="3286110">to</span> <span
  m="3286170">be</span> <span m="3286250">order</span> <span m="3286530">log
  n</span> <span m="3286920">with</span> <span m="3287050">high</span> <span
  m="3287220">probability.</span> <span m="3289090">There's</span> <span
  m="3289520">no</span> <span m="3289690">getting</span> <span
  m="3289880">around</span> <span m="3290130">that</span> <span
  m="3290380">because</span> <span m="3290620">each</span> <span
  m="3290760">of</span> <span m="3290850">them</span> <span
  m="3290990">costs</span> <span m="3291320">you.</span></p><p><span
  m="3292310">So</span> <span m="3293200">that's</span> <span
  m="3293480">the</span> <span m="3293570">thing</span> <span
  m="3293830">that</span> <span m="3294860">we'll</span> <span
  m="3295010">spend</span> <span m="3295200">the</span> <span
  m="3295260">next</span> <span m="3297660">20</span> <span
  m="3297930">minutes</span> <span m="3298240">on.</span> <span
  m="3299400">And</span> <span m="3300080">the</span> <span
  m="3300520">theorem</span> <span m="3301750">that</span> <span
  m="3302120">we</span> <span m="3302230">like</span> <span
  m="3302410">to</span> <span m="3302490">prove</span> <span
  m="3302890">for</span> <span m="3303060">search</span> <span
  m="3304640">is</span> <span m="3304910">that--</span> <span
  m="3306590">this</span> <span m="3306760">is</span> <span
  m="3306840">what</span> <span m="3307000">I</span> <span
  m="3307060">just</span> <span m="3307280">said--</span> <span
  m="3308140">any</span> <span m="3308550">search</span> <span
  m="3312640">in</span> <span m="3312820">an</span> <span m="3314390">n</span>
  <span m="3314800">element</span> <span m="3318000">skip</span> <span
  m="3318420">list</span> <span m="3321540">costs</span> <span
  m="3323760">order</span> <span m="3324030">log</span> <span
  m="3324200">n</span> <span m="3325380">w.h.p.</span></p><p><span
  m="3326920">So</span> <span m="3327450">it</span> <span
  m="3327510">doesn't</span> <span m="3327750">matter</span> <span
  m="3328140">how</span> <span m="3328410">this</span> <span
  m="3329140">skip</span> <span m="3329420">list</span> <span
  m="3329700">looks.</span> <span m="3330780">There's</span> <span
  m="3331020">n</span> <span m="3331270">elements,</span> <span
  m="3331710">they</span> <span m="3331810">got</span> <span
  m="3331970">inserted</span> <span m="3332800">using</span> <span
  m="3333160">the</span> <span m="3333230">insert</span> <span
  m="3333590">algorithm--</span> <span m="3334320">that's</span> <span
  m="3334510">important</span> <span m="3334860">to</span> <span
  m="3334930">know</span> <span m="3335310">if</span> <span
  m="3335510">you're</span> <span m="3335580">going to</span> <span
  m="3335700">have</span> <span m="3335820">to</span> <span
  m="3336290">use</span> <span m="3336630">that.</span> <span
  m="3337450">And</span> <span m="3338050">when</span> <span
  m="3338160">I</span> <span m="3338220">do</span> <span m="3338370">a</span>
  <span m="3338440">search</span> <span m="3339170">for</span> <span
  m="3339950">an</span> <span m="3340180">element,</span> <span
  m="3340580">it</span> <span m="3340680">may</span> <span m="3340820">be</span>
  <span m="3340950">in</span> <span m="3341090">there,</span> <span
  m="3341300">it</span> <span m="3341380">may</span> <span
  m="3341480">not</span> <span m="3341630">be</span> <span m="3341760">in</span>
  <span m="3341910">there.</span> <span m="3343030">Doesn't</span> <span
  m="3343330">really</span> <span m="3343470">matter.</span> <span
  m="3343770">We'll</span> <span m="3343970">assume</span> <span
  m="3344260">a</span> <span m="3344310">successful</span> <span
  m="3344820">search.</span> <span m="3346940">That</span> <span
  m="3347320">is</span> <span m="3347470">going</span> <span
  m="3347600">to</span> <span m="3347670">cost</span> <span
  m="3347940">me</span> <span m="3348050">order</span> <span m="3348200">log
  n</span> <span m="3349030">with</span> <span m="3349230">high</span> <span
  m="3349370">probability.</span></p><p><span m="3351200">And</span> <span
  m="3351410">the</span> <span m="3351480">cool</span> <span
  m="3351780">idea</span> <span m="3352150">here</span> <span
  m="3353290">in</span> <span m="3353600">terms</span> <span
  m="3353850">of</span> <span m="3353970">analyzing</span> <span
  m="3354450">the</span> <span m="3354530">search</span> <span
  m="3355130">in</span> <span m="3355260">order</span> <span
  m="3355490">to</span> <span m="3356870">figure</span> <span
  m="3357270">out</span> <span m="3357610">how</span> <span m="3358330">we're
  going</span> <span m="3358500">to</span> <span m="3358570">add</span> <span
  m="3358780">up</span> <span m="3358930">all</span> <span m="3359120">of</span>
  <span m="3359190">these</span> <span m="3359390">moves</span> <span
  m="3360190">is</span> <span m="3360510">we're going</span> <span
  m="3360730">to</span> <span m="3360810">analyze</span> <span
  m="3361280">the</span> <span m="3361370">search</span> <span
  m="3362430">backwards.</span> <span m="3364470">So</span> <span
  m="3364620">that's</span> <span m="3364810">a</span> <span
  m="3364860">cool</span> <span m="3365080">idea.</span> <span
  m="3369350">So</span> <span m="3369490">what</span> <span
  m="3369620">does</span> <span m="3369710">that</span> <span
  m="3370070">mean</span> <span m="3370360">exactly?</span></p><p><span
  m="3372780">Well,</span> <span m="3373080">what</span> <span
  m="3373300">that</span> <span m="3373420">means</span> <span
  m="3373770">is</span> <span m="3375380">that</span> <span
  m="3375730">we're</span> <span m="3375890">going</span> <span
  m="3376070">to</span> <span m="3376520">think</span> <span
  m="3376760">about</span> <span m="3376990">this</span> <span
  m="3377600">b</span> <span m="3377800">search,</span> <span
  m="3378280">which</span> <span m="3378910">think</span> <span
  m="3379100">of</span> <span m="3379180">it</span> <span m="3379280">as</span>
  <span m="3379400">the</span> <span m="3379480">backward</span> <span
  m="3379840">search,</span> <span m="3381040">starts--</span> <span
  m="3384470">it</span> <span m="3384640">actually</span> <span
  m="3385000">ends,</span> <span m="3386040">so</span> <span
  m="3386190">that's</span> <span m="3386330">what</span> <span
  m="3386470">I'm</span> <span m="3386560">writing</span> <span
  m="3386800">in</span> <span m="3386890">brackets</span> <span
  m="3387270">here,</span> <span m="3388540">at</span> <span
  m="3388890">the</span> <span m="3388960">node</span> <span
  m="3390100">in</span> <span m="3390270">the</span> <span
  m="3390340">bottom</span> <span m="3390630">list.</span> <span m="3391000">So
  we're</span> <span m="3391300">assuming</span> <span m="3391640">a</span>
  <span m="3391680">successful</span> <span m="3392200">search,</span> <span
  m="3393390">as</span> <span m="3393560">I</span> <span
  m="3393640">mentioned</span> <span m="3393950">before.</span> <span
  m="3395300">Otherwise,</span> <span m="3396610">the</span> <span
  m="3396730">point</span> <span m="3397040">would</span> <span
  m="3397160">just</span> <span m="3397360">be</span> <span
  m="3397630">in</span> <span m="3397800">between</span> <span
  m="3398690">two</span> <span m="3399540">members.</span></p><p><span
  m="3400520">You</span> <span m="3400760">know</span> <span
  m="3400960">that</span> <span m="3401420">it's</span> <span
  m="3401590">not</span> <span m="3401780">in</span> <span
  m="3401920">there</span> <span m="3402470">because</span> <span
  m="3402790">you're</span> <span m="3402890">looking</span> <span
  m="3403090">for</span> <span m="3403200">67</span> <span
  m="3404180">and</span> <span m="3404450">you</span> <span
  m="3404550">see</span> <span m="3404730">66</span> <span m="3405610">to</span>
  <span m="3405760">your</span> <span m="3405890">left</span> <span
  m="3407100">and</span> <span m="3407230">72</span> <span m="3407790">to</span>
  <span m="3407870">your</span> <span m="3408010">right.</span> <span
  m="3408820">So</span> <span m="3409100">either</span> <span
  m="3409330">way</span> <span m="3409540">it</span> <span
  m="3409790">works,</span> <span m="3410170">but</span> <span
  m="3410740">keep</span> <span m="3410930">in</span> <span
  m="3411010">mind</span> <span m="3411940">that</span> <span
  m="3412150">it's</span> <span m="3412290">a</span> <span
  m="3412370">successful</span> <span m="3412840">search</span> <span
  m="3413320">because</span> <span m="3413540">it</span> <span
  m="3413640">just</span> <span m="3413800">makes</span> <span
  m="3415340">things</span> <span m="3415570">a</span> <span
  m="3415630">little</span> <span m="3415790">bit</span> <span
  m="3415890">easier.</span></p><p><span m="3418310">Now,</span> <span
  m="3418680">at</span> <span m="3418860">each</span> <span
  m="3419230">node</span> <span m="3420450">that</span> <span
  m="3420640">we</span> <span m="3420770">visit,</span> <span
  m="3426020">what</span> <span m="3426250">we're</span> <span
  m="3426340">going</span> <span m="3426470">to</span> <span
  m="3426540">do</span> <span m="3426760">is</span> <span
  m="3427510">we're</span> <span m="3427590">going</span> <span
  m="3427710">to</span> <span m="3427790">say</span> <span
  m="3428060">that</span> <span m="3428250">if</span> <span
  m="3428360">the</span> <span m="3428460">node</span> <span
  m="3430910">was</span> <span m="3431150">not</span> <span
  m="3431560">promoted</span> <span m="3436920">higher,</span> <span
  m="3438880">then</span> <span m="3439060">what</span> <span
  m="3439470">actually</span> <span m="3439860">happened</span> <span
  m="3440200">here</span> <span m="3440480">was</span> <span
  m="3440690">that</span> <span m="3441370">when</span> <span
  m="3441630">you</span> <span m="3441740">inserted</span> <span
  m="3442280">that</span> <span m="3442460">particular</span> <span
  m="3442840">element,</span> <span m="3444030">you</span> <span
  m="3444200">got</span> <span m="3444370">a</span> <span
  m="3444410">tails.</span> <span m="3446330">Because</span> <span
  m="3446600">otherwise</span> <span m="3447230">you</span> <span
  m="3447500">would have</span> <span m="3447730">gotten a</span> <span
  m="3447940">heads,</span> <span m="3449020">that</span> <span
  m="3449540">element</span> <span m="3450290">would</span> <span
  m="3450460">have</span> <span m="3450550">been</span> <span
  m="3450670">promoted</span> <span m="3451030">higher.</span></p><p><span
  m="3451820">Then</span> <span m="3452490">you</span> <span
  m="3452690">go--</span> <span m="3457160">and</span> <span
  m="3457600">that</span> <span m="3457850">really</span> <span
  m="3458030">means</span> <span m="3458250">that</span> <span
  m="3458370">you</span> <span m="3458450">came</span> <span
  m="3460100">from</span> <span m="3460400">the</span> <span
  m="3460470">left-hand</span> <span m="3460830">side,</span> <span
  m="3461250">so</span> <span m="3461420">you</span> <span
  m="3461510">make</span> <span m="3461670">a</span> <span
  m="3461720">left</span> <span m="3462216">move.</span> <span
  m="3464200">Now,</span> <span m="3464350">search</span> <span
  m="3464650">of</span> <span m="3464750">course</span> <span
  m="3465000">makes</span> <span m="3465980">down</span> <span
  m="3466390">moves</span> <span m="3466720">and</span> <span
  m="3466870">right</span> <span m="3467130">moves,</span> <span
  m="3467820">but</span> <span m="3467980">this</span> <span
  m="3468120">is</span> <span m="3468210">a</span> <span
  m="3468270">backward</span> <span m="3468640">search</span> <span
  m="3468990">so</span> <span m="3469170">it's</span> <span
  m="3469290">going</span> <span m="3469460">to</span> <span
  m="3469520">make</span> <span m="3470160">left</span> <span m="3470470">moves
  and</span> <span m="3470890">up</span> <span
  m="3471100">moves.</span></p><p><span m="3473750">What</span> <span
  m="3473950">else</span> <span m="3474100">do I have</span> <span
  m="3474400">here?</span> <span m="3475390">Running</span> <span
  m="3475660">out</span> <span m="3475760">of</span> <span
  m="3475830">room,</span> <span m="3477260">so</span> <span
  m="3478530">let</span> <span m="3478720">me--</span> <span
  m="3485080">let's</span> <span m="3485270">continue</span> <span
  m="3485620">with</span> <span m="3486010">that.</span></p><p><span
  m="3498100">All</span> <span m="3498270">right.</span> <span
  m="3499320">And</span> <span m="3499880">now</span> <span
  m="3500000">the</span> <span m="3500150">case</span> <span
  m="3500440">is</span> <span m="3501280">if</span> <span m="3502580">the</span>
  <span m="3502990">node</span> <span m="3503400">was</span> <span
  m="3503730">promoted</span> <span m="3509050">higher,</span> <span
  m="3511370">that</span> <span m="3511580">means</span> <span
  m="3511830">we</span> <span m="3511970">got</span> <span
  m="3512150">heads</span> <span m="3512570">here</span> <span
  m="3514510">in</span> <span m="3514630">that</span> <span
  m="3514790">particular</span> <span m="3515140">insertion.</span> <span
  m="3516790">Then</span> <span m="3520310">we</span> <span
  m="3520480">go,</span> <span m="3521710">and</span> <span
  m="3522220">that</span> <span m="3522450">means</span> <span
  m="3522760">that</span> <span m="3522900">during</span> <span
  m="3523140">the</span> <span m="3523220">search</span> <span
  m="3523990">we</span> <span m="3524180">came</span> <span
  m="3526140">from</span> <span m="3527830">upstairs.</span></p><p><span
  m="3529280">And</span> <span m="3529430">then</span> <span
  m="3529570">lastly,</span> <span m="3530650">we</span> <span
  m="3530810">stop,</span> <span m="3532390">which</span> <span
  m="3532610">means</span> <span m="3532830">we</span> <span
  m="3532990">start</span> <span m="3538400">when</span> <span
  m="3538760">we</span> <span m="3538900">reach</span> <span
  m="3540845">the</span> <span m="3541150">top</span> <span
  m="3541570">level</span> <span m="3543740">or</span> <span
  m="3544560">minus</span> <span m="3544930">infinity</span> <span
  m="3545460">if</span> <span m="3545930">we</span> <span m="3546070">go</span>
  <span m="3546220">all</span> <span m="3546340">the</span> <span
  m="3546410">way</span> <span m="3546520">back.</span> <span
  m="3548630">So</span> <span m="3548980">that's</span> <span
  m="3549350">it.</span> <span m="3550100">A</span> <span m="3550160">lot</span>
  <span m="3550350">of</span> <span m="3550430">writing</span> <span
  m="3550740">here,</span> <span m="3551630">but</span> <span
  m="3551780">this</span> <span m="3551910">should</span> <span
  m="3552050">make</span> <span m="3552210">things</span> <span
  m="3552410">clear.</span></p><p><span m="3553360">So</span> <span
  m="3554060">let's</span> <span m="3554270">say</span> <span
  m="3554390">that</span> <span m="3554520">we're</span> <span
  m="3554640">searching</span> <span m="3554980">for</span> <span
  m="3556440">66.</span> <span m="3558020">I</span> <span
  m="3558520">want</span> <span m="3558660">to</span> <span
  m="3558720">trace</span> <span m="3559090">through</span> <span
  m="3559290">what</span> <span m="3559500">the</span> <span
  m="3559570">backwards</span> <span m="3560040">path</span> <span
  m="3560300">would</span> <span m="3560430">look</span> <span
  m="3560610">like,</span> <span m="3561230">and</span> <span
  m="3561440">keep</span> <span m="3562130">that</span> <span
  m="3562290">code</span> <span m="3562540">in</span> <span
  m="3562640">mind</span> <span m="3563250">as</span> <span m="3563440">I</span>
  <span m="3563510">do</span> <span m="3563660">this.</span> <span
  m="3564890">So</span> <span m="3565180">I'm</span> <span
  m="3565360">searching</span> <span m="3565730">for</span> <span
  m="3565830">66,</span> <span m="3566900">and</span> <span
  m="3567190">obviously,</span> <span m="3567700">we</span> <span
  m="3567810">know</span> <span m="3567940">how</span> <span
  m="3568020">to</span> <span m="3568090">find</span> <span
  m="3568420">it.</span> <span m="3568550">We've</span> <span
  m="3568700">done</span> <span m="3568890">that.</span> <span
  m="3569470">But</span> <span m="3569620">let's</span> <span
  m="3569810">go</span> <span m="3570160">backwards</span> <span
  m="3570790">as</span> <span m="3570970">to</span> <span
  m="3571780">what</span> <span m="3572250">exactly</span> <span
  m="3572650">happened</span> <span m="3573390">when</span> <span
  m="3573720">we</span> <span m="3574010">look</span> <span
  m="3574240">for</span> <span m="3574390">66.</span></p><p><span
  m="3576380">When</span> <span m="3576550">we</span> <span
  m="3576810">look</span> <span m="3577080">for</span> <span
  m="3577220">66,</span> <span m="3578900">right</span> <span
  m="3579170">at</span> <span m="3579260">this</span> <span
  m="3579430">point</span> <span m="3580480">when</span> <span
  m="3581010">you</span> <span m="3581100">see</span> <span
  m="3581300">66,</span> <span m="3582230">where</span> <span
  m="3582480">would</span> <span m="3582600">you</span> <span
  m="3582700">have</span> <span m="3582820">come</span> <span
  m="3583010">from?</span></p><p><span m="3583790">AUDIENCE:
  [INAUDIBLE]</span></p><p><span m="3584250">SRINIVAS DEVADAS: You'd have</span>
  <span m="3584710">come</span> <span m="3585060">from</span> <span
  m="3585210">the</span> <span m="3585280">top.</span> <span
  m="3586880">And</span> <span m="3587540">so</span> <span m="3588470">if</span>
  <span m="3588620">you</span> <span m="3588690">go</span> <span
  m="3588840">look</span> <span m="3589030">at</span> <span
  m="3589570">what</span> <span m="3589940">happens</span> <span
  m="3590190">here,</span> <span m="3590600">the</span> <span
  m="3590750">node</span> <span m="3591820">when</span> <span
  m="3592040">it</span> <span m="3592120">got</span> <span
  m="3592290">inserted</span> <span m="3592830">was</span> <span
  m="3593110">promoted</span> <span m="3593510">one</span> <span
  m="3593680">level.</span> <span m="3594800">So</span> <span
  m="3595670">that</span> <span m="3595820">means</span> <span
  m="3596010">that</span> <span m="3596140">you would</span> <span
  m="3596260">go</span> <span m="3597370">up</span> <span m="3597590">top</span>
  <span m="3598670">in</span> <span m="3598880">the</span> <span
  m="3598950">backward</span> <span m="3599300">search</span> <span
  m="3599690">first.</span> <span m="3600090">Your</span> <span
  m="3600220">first</span> <span m="3600550">move</span> <span
  m="3600790">would</span> <span m="3600880">be</span> <span
  m="3600970">going</span> <span m="3601220">up</span> <span
  m="3601750">like</span> <span m="3601940">that.</span></p><p><span
  m="3603140">Now,</span> <span m="3603440">if</span> <span
  m="3603590">there's</span> <span m="3603690">a</span> <span
  m="3603720">66</span> <span m="3604310">up</span> <span
  m="3604460">there,</span> <span m="3605010">you</span> <span
  m="3605130">would</span> <span m="3605220">go</span> <span
  m="3605410">up</span> <span m="3605580">one</span> <span
  m="3605750">more.</span> <span m="3607390">But</span> <span
  m="3607770">there's</span> <span m="3607970">not,</span> <span
  m="3608550">so</span> <span m="3608720">you</span> <span m="3608810">go</span>
  <span m="3608930">left.</span> <span m="3612270">You</span> <span
  m="3612600">go</span> <span m="3612710">to</span> <span m="3612780">50.</span>
  <span m="3613720">And</span> <span m="3614000">when</span> <span
  m="3614510">you</span> <span m="3614590">have</span> <span
  m="3614710">a</span> <span m="3614750">50</span> <span m="3615100">up</span>
  <span m="3615230">here,</span> <span m="3615940">would</span> <span
  m="3616100">you</span> <span m="3616220">stay</span> <span
  m="3616440">on</span> <span m="3616580">this</span> <span
  m="3616730">level?</span></p><p><span m="3617310">AUDIENCE:
  No.</span></p><p><span m="3618702">SRINIVAS DEVADAS: No.</span> <span
  m="3619166">You'd</span> <span m="3619630">go</span> <span
  m="3619930">up</span> <span m="3620360">to</span> <span m="3620770">50</span>
  <span m="3621220">because</span> <span m="3621600">the</span> <span
  m="3622100">first</span> <span m="3622450">chance</span> <span m="3622690">you
  get you</span> <span m="3623120">want</span> <span m="3623240">to</span> <span
  m="3623300">get</span> <span m="3623440">up</span> <span m="3623610">to</span>
  <span m="3623710">the</span> <span m="3623950">higher</span> <span
  m="3624200">levels.</span> <span m="3626020">And</span> <span
  m="3626220">again,</span> <span m="3626470">this</span> <span
  m="3626620">50</span> <span m="3626920">was</span> <span
  m="3627050">promoted</span> <span m="3627550">so</span> <span
  m="3627650">you</span> <span m="3627750">go</span> <span m="3627780">up</span>
  <span m="3627930">there,</span> <span m="3628215">and</span> <span
  m="3628500">you</span> <span m="3628620">go</span> <span m="3628690">to</span>
  <span m="3628770">14,</span> <span m="3629670">and</span> <span
  m="3631430">pretty</span> <span m="3631650">much</span> <span
  m="3631890">that's</span> <span m="3632240">the</span> <span
  m="3632330">end</span> <span m="3632530">of</span> <span
  m="3632610">that.</span></p><p><span m="3633230">So</span> <span
  m="3633500">this</span> <span m="3633690">would</span> <span
  m="3633850">look</span> <span m="3634040">like</span> <span
  m="3635020">you</span> <span m="3635160">go</span> <span
  m="3635510">like</span> <span m="3635780">that,</span> <span
  m="3636070">you</span> <span m="3636180">have</span> <span
  m="3636310">an</span> <span m="3636410">up</span> <span
  m="3636750">move,</span> <span m="3638860">then</span> <span
  m="3639100">you</span> <span m="3639220">have</span> <span
  m="3639430">a</span> <span m="3639780">left</span> <span
  m="3640140">move--</span> <span m="3642090">different</span> <span
  m="3642370">colors</span> <span m="3642700">here</span> <span
  m="3642860">would</span> <span m="3642990">be</span> <span
  m="3643080">good--</span> <span m="3645420">then</span> <span
  m="3645720">you</span> <span m="3645840">have</span> <span
  m="3646020">an</span> <span m="3646110">up</span> <span
  m="3646310">move,</span> <span m="3647570">and</span> <span
  m="3647750">a</span> <span m="3647810">left,</span> <span
  m="3649200">and</span> <span m="3649620">then</span> <span m="3649750">an
  up.</span> <span m="3652270">So</span> <span m="3652750">that's</span> <span
  m="3653770">our</span> <span m="3653910">backward</span> <span
  m="3654300">search.</span> <span m="3655140">And</span> <span
  m="3655270">it's</span> <span m="3655410">not</span> <span
  m="3655630">that</span> <span m="3657530">complicated,</span> <span
  m="3658050">hopefully.</span> <span m="3658940">If</span> <span
  m="3659090">you're</span> <span m="3659220">looking</span> <span
  m="3659500">for</span> <span m="3659630">66</span> <span m="3660240">or</span>
  <span m="3660310">59,</span> <span m="3661050">you</span> <span
  m="3661360">do</span> <span m="3661590">that.</span> <span
  m="3661980">So</span> <span m="3662230">it's</span> <span
  m="3662370">much</span> <span m="3662580">more</span> <span
  m="3662710">natural,</span> <span m="3663340">and</span> <span
  m="3663590">you</span> <span m="3663750">just</span> <span
  m="3663940">need</span> <span m="3664060">to</span> <span
  m="3664120">flip</span> <span m="3664370">it.</span></p><p><span
  m="3665710">Why</span> <span m="3665970">am</span> <span m="3666070">I</span>
  <span m="3666170">doing</span> <span m="3666420">all</span> <span
  m="3666600">this?</span> <span m="3667520">Well,</span> <span
  m="3668730">the</span> <span m="3668880">reason</span> <span
  m="3669120">I'm</span> <span m="3669240">doing</span> <span
  m="3669420">all</span> <span m="3669560">this</span> <span
  m="3669720">is</span> <span m="3669860">that</span> <span m="3670600">I</span>
  <span m="3670800">have</span> <span m="3670950">to</span> <span
  m="3671060">do</span> <span m="3671390">some</span> <span
  m="3671780">bounding</span> <span m="3672900">of</span> <span
  m="3674330">the</span> <span m="3674780">moves,</span> <span
  m="3675770">and</span> <span m="3676320">I</span> <span
  m="3677250">know</span> <span m="3677770">that</span> <span
  m="3678480">the</span> <span m="3678610">moves</span> <span
  m="3679070">that</span> <span m="3679220">correspond</span> <span
  m="3679800">to</span> <span m="3679890">the</span> <span m="3680040">up</span>
  <span m="3680280">moves</span> <span m="3681350">are</span> <span
  m="3681820">probabilistic</span> <span m="3682690">in</span> <span
  m="3682860">the</span> <span m="3682940">sense</span> <span
  m="3683300">that</span> <span m="3684000">the</span> <span
  m="3684170">reason</span> <span m="3684500">I'm</span> <span
  m="3684610">making</span> <span m="3684970">them</span> <span
  m="3685280">is</span> <span m="3685510">because</span> <span
  m="3685840">I</span> <span m="3685960">flipped</span> <span
  m="3686310">heads</span> <span m="3687140">at</span> <span
  m="3687320">some</span> <span m="3687510">point.</span> <span
  m="3689170">So</span> <span m="3689400">all</span> <span m="3689750">of</span>
  <span m="3689860">this</span> <span m="3690040">is</span> <span
  m="3690160">going</span> <span m="3690290">to</span> <span
  m="3690380">turn</span> <span m="3690610">into</span> <span
  m="3691780">counting</span> <span m="3692560">how</span> <span
  m="3692850">many</span> <span m="3693660">coin</span> <span
  m="3694050">flips</span> <span m="3695060">come</span> <span
  m="3695280">out</span> <span m="3695430">heads</span> <span
  m="3696350">in</span> <span m="3696460">a</span> <span m="3696530">long</span>
  <span m="3696960">stream</span> <span m="3698260">of</span> <span
  m="3698490">coin</span> <span m="3698750">flips.</span> <span
  m="3699850">So</span> <span m="3699950">that's</span> <span
  m="3700210">what</span> <span m="3700410">this</span> <span
  m="3700550">backward</span> <span m="3700900">search</span> <span
  m="3701130">is</span> <span m="3701200">going</span> <span
  m="3701330">to</span> <span m="3701390">allow</span> <span
  m="3701580">us</span> <span m="3701730">to</span> <span
  m="3701830">do.</span></p><p><span m="3702630">And</span> <span
  m="3702780">that</span> <span m="3703110">crucial</span> <span
  m="3703530">thing</span> <span m="3704180">is</span> <span
  m="3704570">what</span> <span m="3704820">we'll</span> <span
  m="3705420">look</span> <span m="3705670">at</span> <span
  m="3706380">next.</span> <span m="3707270">So</span> <span
  m="3707680">the</span> <span m="3707880">analysis</span> <span
  m="3708370">itself</span> <span m="3708780">is</span> <span
  m="3709160">a</span> <span m="3709220">bit</span> <span
  m="3709380">painful,</span> <span m="3710730">but there's</span> <span
  m="3710930">a</span> <span m="3710990">bunch</span> <span
  m="3711180">of</span> <span m="3711280">algebra.</span> <span
  m="3712340">But</span> <span m="3712520">what</span> <span
  m="3712690">I</span> <span m="3712730">want</span> <span m="3712880">to</span>
  <span m="3712940">do</span> <span m="3713060">is</span> <span
  m="3713150">to</span> <span m="3713240">make</span> <span
  m="3713440">sure</span> <span m="3713680">that</span> <span
  m="3713820">you</span> <span m="3713900">get</span> <span
  m="3714130">the</span> <span m="3715060">high</span> <span
  m="3715250">level</span> <span m="3716610">picture,</span> <span
  m="3717040">number</span> <span m="3717280">one,</span> <span
  m="3717950">and</span> <span m="3718810">the</span> <span
  m="3718880">insights</span> <span m="3719870">as</span> <span
  m="3720060">to</span> <span m="3720150">why</span> <span
  m="3725960">the</span> <span m="3726720">expected</span> <span
  m="3727180">value</span> <span m="3727860">or</span> <span m="3728250">the
  with</span> <span m="3728500">high</span> <span m="3728650">probability</span>
  <span m="3729120">value</span> <span m="3729490">is</span> <span
  m="3729600">going</span> <span m="3729730">to</span> <span
  m="3729790">be</span> <span m="3729870">order</span> <span m="3730230">log
  n.</span> <span m="3730810">But</span> <span m="3731090">the</span> <span
  m="3731330">key</span> <span m="3731560">is</span> <span
  m="3731980">the</span> <span m="3732120">strategy.</span></p><p><span
  m="3733620">So</span> <span m="3733740">we're</span> <span
  m="3733810">going</span> <span m="3733930">to</span> <span
  m="3733990">go</span> <span m="3734150">off</span> <span
  m="3734350">and</span> <span m="3734500">we're</span> <span m="3734580">going
  to</span> <span m="3734680">prove</span> <span m="3734960">this</span> <span
  m="3735150">theorem.</span> <span m="3742080">Our</span> <span
  m="3742280">backward</span> <span m="3742690">search</span> <span
  m="3749490">makes</span> <span m="3752320">up</span> <span
  m="3752540">moves</span> <span m="3755690">and</span> <span
  m="3755890">left</span> <span m="3756340">moves.</span> <span
  m="3758330">We</span> <span m="3758500">know</span> <span
  m="3758650">that.</span> <span m="3762480">Each</span> <span
  m="3765070">with</span> <span m="3765310">probability</span> <span
  m="3767080">1/2.</span> <span m="3768310">And</span> <span
  m="3768480">the</span> <span m="3768540">reason</span> <span
  m="3768800">for</span> <span m="3768940">that</span> <span
  m="3769210">is</span> <span m="3770860">when</span> <span
  m="3772340">you</span> <span m="3772430">go</span> <span m="3772680">up</span>
  <span m="3772910">is</span> <span m="3773030">because</span> <span
  m="3773280">you</span> <span m="3773350">got</span> <span m="3773530">a</span>
  <span m="3773600">heads,</span> <span m="3774600">and</span> <span
  m="3774910">if</span> <span m="3774990">you</span> <span
  m="3775050">didn't</span> <span m="3775220">get</span> <span
  m="3775330">a</span> <span m="3775390">heads</span> <span
  m="3775620">in</span> <span m="3775700">you got</span> <span m="3775850">a
  tails,</span> <span m="3776640">that</span> <span m="3776800">meant</span>
  <span m="3776990">you</span> <span m="3777810">go</span> <span
  m="3777920">left.</span> <span m="3778880">Because</span> <span
  m="3779090">of</span> <span m="3779160">the</span> <span
  m="3779230">previous</span> <span m="3780780">element,</span> <span
  m="3781240">every</span> <span m="3781530">time</span> <span
  m="3781830">you're</span> <span m="3781960">passing</span> <span
  m="3782520">these</span> <span m="3782820">elements</span> <span
  m="3784930">that are</span> <span m="3785220">inserted,</span> <span
  m="3786230">and</span> <span m="3786470">they</span> <span
  m="3786560">were</span> <span m="3786650">inserted</span> <span
  m="3787590">by</span> <span m="3787780">flipping</span> <span
  m="3788080">coins.</span></p><p><span m="3789660">So</span> <span
  m="3790320">that's</span> <span m="3791380">key</span> <span
  m="3792010">point</span> <span m="3792310">number</span> <span
  m="3792510">one.</span> <span m="3793470">All</span> <span
  m="3793730">of</span> <span m="3793820">that,</span> <span
  m="3794100">if</span> <span m="3794200">you</span> <span
  m="3794270">look</span> <span m="3794410">at</span> <span
  m="3794480">what</span> <span m="3794610">happens</span> <span
  m="3794870">here</span> <span m="3795310">when</span> <span
  m="3795440">I</span> <span m="3795500">drew</span> <span
  m="3795710">this</span> <span m="3795880">out,</span> <span
  m="3796610">you</span> <span m="3796740">got</span> <span
  m="3796870">heads</span> <span m="3797130">here</span> <span
  m="3797650">and</span> <span m="3797810">you</span> <span
  m="3797880">got</span> <span m="3798470">tails</span> <span
  m="3798840">there.</span> <span m="3799630">So</span> <span
  m="3799760">each</span> <span m="3799980">of</span> <span
  m="3800060">those</span> <span m="3800230">things</span> <span
  m="3800730">for</span> <span m="3800900">a</span> <span
  m="3800950">fair</span> <span m="3801170">coin</span> <span
  m="3801460">is</span> <span m="3801580">happening</span> <span
  m="3801890">with</span> <span m="3802030">probability</span> <span
  m="3802480">1/2.</span> <span m="3803370">And</span> <span
  m="3803480">it's</span> <span m="3803650">all</span> <span
  m="3803860">about</span> <span m="3804050">coin</span> <span
  m="3804280">flips</span> <span m="3804590">here.</span></p><p><span
  m="3806120">Now,</span> <span m="3807290">the</span> <span
  m="3807800">number</span> <span m="3808310">of</span> <span
  m="3808440">moves</span> <span m="3808970">going</span> <span
  m="3809390">up</span> <span m="3818700">is</span> <span
  m="3819250">less</span> <span m="3819650">than</span> <span
  m="3819810">the</span> <span m="3819900">number</span> <span
  m="3820140">of</span> <span m="3820270">levels--</span> <span
  m="3824060">the</span> <span m="3824190">number</span> <span
  m="3824410">of</span> <span m="3824470">levels</span> <span
  m="3824750">is</span> <span m="3824860">one</span> <span
  m="3825060">more</span> <span m="3825250">than</span> <span
  m="3825380">that.</span> <span m="3826100">And</span> <span
  m="3826290">we've</span> <span m="3826440">shown</span> <span
  m="3826770">that</span> <span m="3827010">that's</span> <span
  m="3828040">c</span> <span m="3828300">log</span> <span m="3828560">n</span>
  <span m="3829770">with</span> <span m="3829990">high</span> <span
  m="3830250">probability</span> <span m="3832230">by</span> <span
  m="3832470">the</span> <span m="3832560">warm-up</span> <span
  m="3832950">Lemma.</span> <span m="3833480">That's</span> <span
  m="3833710">what</span> <span m="3833860">this</span> <span
  m="3834010">just</span> <span m="3834610">did.</span></p><p><span
  m="3835370">The</span> <span m="3835450">number</span> <span
  m="3835700">of</span> <span m="3836160">up</span> <span
  m="3836410">moves--</span> <span m="3837320">I</span> <span
  m="3837460">mean</span> <span m="3837620">you</span> <span
  m="3837830">can't</span> <span m="3838300">go</span> <span
  m="3838580">off</span> <span m="3838820">the</span> <span
  m="3838910">list</span> <span m="3839200">here.</span> <span
  m="3839540">This</span> <span m="3839710">list</span> <span
  m="3839930">is</span> <span m="3840060">now</span> <span
  m="3840600">you're</span> <span m="3840760">not</span> <span
  m="3840900">inserting</span> <span m="3841320">anymore,</span> <span
  m="3841720">you're</span> <span m="3841850">doing</span> <span
  m="3842030">a</span> <span m="3842070">search.</span> <span
  m="3842840">So</span> <span m="3843000">it's</span> <span
  m="3843110">not</span> <span m="3843350">like</span> <span
  m="3844100">you're</span> <span m="3844230">going to</span> <span
  m="3844330">be</span> <span m="3844430">adding</span> <span
  m="3844750">levels</span> <span m="3845120">or</span> <span
  m="3845190">anything</span> <span m="3845440">like</span> <span
  m="3845650">that.</span> <span m="3846460">So</span> <span
  m="3846600">the</span> <span m="3846680">number</span> <span
  m="3846860">of</span> <span m="3846950">up</span> <span
  m="3847120">moves</span> <span m="3847360">we've</span> <span
  m="3847470">taken</span> <span m="3847720">care</span> <span
  m="3847930">of.</span></p><p><span m="3849070">So</span> <span
  m="3849290">this</span> <span m="3849500">last</span> <span
  m="3849890">thing</span> <span m="3850140">here</span> <span
  m="3850640">which</span> <span m="3850850">I'm</span> <span
  m="3850920">going</span> <span m="3851040">to</span> <span
  m="3851100">write</span> <span m="3851310">out</span> <span
  m="3851450">here</span> <span m="3851970">is</span> <span
  m="3852340">the</span> <span m="3852550">key</span> <span
  m="3853510">observation,</span> <span m="3854490">which</span> <span
  m="3854780">is</span> <span m="3854910">going</span> <span
  m="3855120">to</span> <span m="3855210">make</span> <span
  m="3855600">the</span> <span m="3855700">whole</span> <span
  m="3856140">analysis</span> <span m="3856750">possible.</span> <span
  m="3857880">And</span> <span m="3858100">so</span> <span
  m="3858200">this</span> <span m="3858380">last</span> <span
  m="3858730">thing</span> <span m="3859180">it</span> <span
  m="3859380">says</span> <span m="3860490">that</span> <span
  m="3860790">the</span> <span m="3860930">total</span> <span
  m="3863060">number</span> <span m="3863400">of</span> <span
  m="3863510">moves--</span> <span m="3864370">so</span> <span
  m="3864510">now</span> <span m="3865160">the</span> <span
  m="3865470">total</span> <span m="3865760">number</span> <span
  m="3865980">of</span> <span m="3866050">moves</span> <span
  m="3866320">has</span> <span m="3866570">to</span> <span
  m="3866680">include,</span> <span m="3867260">obviously,</span> <span
  m="3867640">the</span> <span m="3867740">up moves</span> <span
  m="3868210">and</span> <span m="3868490">the</span> <span
  m="3868560">left</span> <span m="3868820">moves,</span> <span
  m="3869470">and</span> <span m="3869620">there's</span> <span
  m="3869750">no</span> <span m="3869880">other</span> <span
  m="3870050">kind.</span></p><p><span m="3873146">The</span> <span
  m="3875060">total</span> <span m="3875390">number</span> <span
  m="3875620">of</span> <span m="3875700">moves</span> <span
  m="3878270">is</span> <span m="3878490">going</span> <span
  m="3878770">to</span> <span m="3880380">correspond</span> <span
  m="3880970">to</span> <span m="3885615">the</span> <span
  m="3886010">number</span> <span m="3886650">of</span> <span
  m="3886750">moves</span> <span m="3891258">till</span> <span
  m="3895940">you</span> <span m="3897530">get</span> <span m="3901810">c</span>
  <span m="3902240">log</span> <span m="3902420">n</span> <span
  m="3903570">up</span> <span m="3903840">moves.</span> <span
  m="3907570">So</span> <span m="3908000">what</span> <span
  m="3908140">does</span> <span m="3908230">that</span> <span
  m="3908360">mean?</span> <span m="3909720">There's</span> <span
  m="3909930">some</span> <span m="3910160">sequence</span> <span
  m="3910630">of</span> <span m="3910780">heads</span> <span
  m="3911000">and</span> <span m="3911140">tails</span> <span
  m="3911530">that</span> <span m="3911640">I'm</span> <span
  m="3911740">getting,</span> <span m="3912120">each</span> <span
  m="3912340">of</span> <span m="3912430">them</span> <span
  m="3912560">with</span> <span m="3912690">probability</span> <span
  m="3913130">1/2.</span> <span m="3915270">Every</span> <span
  m="3915520">time</span> <span m="3915780">that</span> <span
  m="3915900">I</span> <span m="3915950">got</span> <span m="3916130">a</span>
  <span m="3916190">heads,</span> <span m="3917060">I</span> <span
  m="3917230">moved</span> <span m="3917540">up</span> <span
  m="3917680">a</span> <span m="3917730">level.</span></p><p><span
  m="3919090">The</span> <span m="3919200">fact</span> <span
  m="3919470">of</span> <span m="3919540">the</span> <span
  m="3919610">matter</span> <span m="3919890">is</span> <span
  m="3920140">that</span> <span m="3920670">I</span> <span
  m="3920810">can't</span> <span m="3921270">get</span> <span
  m="3922080">more</span> <span m="3922350">than</span> <span
  m="3922520">c</span> <span m="3922760">log n</span> <span
  m="3923140">heads</span> <span m="3923870">because</span> <span
  m="3924130">I'm</span> <span m="3924190">going</span> <span
  m="3924310">to</span> <span m="3924380">run</span> <span
  m="3924540">out</span> <span m="3924630">of</span> <span
  m="3924700">levels.</span> <span m="3927000">That's</span> <span
  m="3927180">it.</span> <span m="3928980">I'm</span> <span
  m="3929070">going</span> <span m="3929290">to</span> <span
  m="3929490">run</span> <span m="3929780">out</span> <span
  m="3929870">of</span> <span m="3930000">room</span> <span
  m="3930320">vertically</span> <span m="3931690">if</span> <span
  m="3932050">I</span> <span m="3932190">keep</span> <span
  m="3932440">popping</span> <span m="3932820">up</span> <span
  m="3933530">and</span> <span m="3933810">keep</span> <span
  m="3934470">doing</span> <span m="3934830">up</span> <span
  m="3935000">moves.</span> <span m="3935700">So</span> <span
  m="3935870">at</span> <span m="3935950">that</span> <span
  m="3936090">point</span> <span m="3936360">I'm</span> <span
  m="3937490">forced</span> <span m="3937930">to</span> <span
  m="3938010">go</span> <span m="3938860">left.</span> <span
  m="3939750">Maybe</span> <span m="3939940">I'm</span> <span
  m="3940030">going</span> <span m="3940250">left</span> <span
  m="3940490">in</span> <span m="3940570">the</span> <span
  m="3940630">middle</span> <span m="3940900">there</span> <span
  m="3941640">when</span> <span m="3941770">I</span> <span
  m="3941850">still</span> <span m="3942140">had</span> <span
  m="3942280">a</span> <span m="3942320">chance</span> <span
  m="3942710">to</span> <span m="3942810">go</span> <span m="3943030">up.</span>
  <span m="3944220">That</span> <span m="3944550">corresponds</span> <span
  m="3944820">to</span> <span m="3945030">getting</span> <span
  m="3945290">a</span> <span m="3945350">tails</span> <span
  m="3946240">as</span> <span m="3946390">opposed</span> <span
  m="3946640">to</span> <span m="3946720">a</span> <span
  m="3946770">heads.</span></p><p><span m="3947390">But</span> <span
  m="3947650">I</span> <span m="3947740">can</span> <span
  m="3947970">limit</span> <span m="3948850">the</span> <span
  m="3948980">total</span> <span m="3949250">number of</span> <span
  m="3949480">moves</span> <span m="3950910">from</span> <span
  m="3951120">a</span> <span m="3951190">probabilistic</span> <span
  m="3951920">standpoint</span> <span m="3952470">by</span> <span
  m="3952600">saying</span> <span m="3953850">during</span> <span
  m="3954340">that</span> <span m="3954510">sequence</span> <span
  m="3955040">of</span> <span m="3955150">coin</span> <span
  m="3955430">flips</span> <span m="3956680">I</span> <span
  m="3957000">only</span> <span m="3957370">have</span> <span
  m="3957700">a</span> <span m="3957780">certain</span> <span
  m="3958270">number</span> <span m="3958630">of</span> <span
  m="3958760">heads</span> <span m="3959300">that</span> <span
  m="3959460">I</span> <span m="3959500">could</span> <span
  m="3959640">have</span> <span m="3959800">possibly</span> <span
  m="3960310">gotten.</span> <span m="3961080">Because</span> <span
  m="3961310">if I</span> <span m="3961470">got</span> <span
  m="3961680">more</span> <span m="3961860">heads</span> <span
  m="3962120">than</span> <span m="3962260">that,</span> <span
  m="3963350">I</span> <span m="3963500">would</span> <span
  m="3963630">be</span> <span m="3964310">up</span> <span
  m="3964570">top.</span> <span m="3964910">I'd</span> <span
  m="3965290">be</span> <span m="3966290">out</span> <span m="3966540">of</span>
  <span m="3966670">the</span> <span m="3967020">skip</span> <span
  m="3967330">list,</span> <span m="3967670">and</span> <span
  m="3968110">that</span> <span m="3968360">doesn't</span> <span
  m="3968570">work.</span></p><p><span m="3970120">So</span> <span
  m="3971140">the</span> <span m="3971490">total</span> <span
  m="3971730">number</span> <span m="3971920">of</span> <span
  m="3971980">moves</span> <span m="3972340">is</span> <span
  m="3972470">the</span> <span m="3972560">number</span> <span
  m="3972780">of</span> <span m="3972870">moves</span> <span
  m="3973210">till</span> <span m="3973350">you</span> <span
  m="3973440">get</span> <span m="3974210">c</span> <span m="3974580">log
  n</span> <span m="3975080">up</span> <span m="3975300">moves,</span> <span
  m="3976170">which</span> <span m="3976490">essentially</span> <span
  m="3978020">corresponds</span> <span m="3978720">to--</span> <span
  m="3980420">now,</span> <span m="3980680">forget</span> <span
  m="3980970">about</span> <span m="3981160">skip</span> <span
  m="3981400">lists</span> <span m="3981600">for</span> <span
  m="3981700">a</span> <span m="3981760">second.</span> <span
  m="3984210">Our</span> <span m="3984350">claim</span> <span
  m="3984770">is</span> <span m="3986490">the</span> <span
  m="3987720">total</span> <span m="3987960">number</span> <span
  m="3988160">of</span> <span m="3988240">moves</span> <span
  m="3988590">is</span> <span m="3988700">the</span> <span
  m="3988790">number</span> <span m="3989150">of</span> <span
  m="3989300">coin</span> <span m="3989680">flips,</span> <span
  m="3992860">so</span> <span m="3992900">these</span> <span
  m="3993150">are</span> <span m="3993230">the</span> <span
  m="3993330">same,</span> <span m="3993950">because</span> <span
  m="3994250">every</span> <span m="3994470">move</span> <span
  m="3994740">corresponds</span> <span m="3995200">to</span> <span
  m="3995300">a</span> <span m="3995350">coin</span> <span
  m="3995590">flip.</span> <span m="3997090">Until--</span> <span
  m="3999180">it's</span> <span m="3999330">a</span> <span
  m="3999380">fair</span> <span m="3999640">coin,</span> <span
  m="4000240">probability</span> <span m="4000660">1/2--</span> <span
  m="4001720">until</span> <span m="4002180">c</span> <span m="4002620">log
  n</span> <span m="4003050">heads</span> <span m="4007520">have</span> <span
  m="4008360">been</span> <span m="4008510">obtained.</span></p><p><span
  m="4009620">So</span> <span m="4009750">the</span> <span
  m="4010530">number</span> <span m="4010810">of</span> <span
  m="4010880">coin</span> <span m="4011130">flips</span> <span
  m="4012100">until</span> <span m="4012560">c</span> <span m="4012800">log
  n</span> <span m="4013160">heads</span> <span m="4014190">is</span> <span
  m="4014630">the</span> <span m="4014740">total</span> <span
  m="4014980">number</span> <span m="4015190">of</span> <span
  m="4015250">moves.</span> <span m="4016880">This</span> <span
  m="4017110">equals</span> <span m="4017440">that.</span> <span
  m="4020450">And</span> <span m="4021820">what</span> <span
  m="4022200">we</span> <span m="4022290">now</span> <span
  m="4022520">want</span> <span m="4022690">to</span> <span
  m="4022750">show,</span> <span m="4024140">if</span> <span
  m="4024310">you</span> <span m="4024380">believe</span> <span
  m="4024650">that,</span> <span m="4025770">and</span> <span
  m="4026270">hopefully</span> <span m="4026600">you</span> <span
  m="4026690">do</span> <span m="4026920">because</span> <span
  m="4027550">the</span> <span m="4027730">argument</span> <span
  m="4028120">is</span> <span m="4028210">simply</span> <span
  m="4028480">that</span> <span m="4028610">you</span> <span
  m="4028700">run</span> <span m="4028880">out</span> <span
  m="4028960">of</span> <span m="4029050">levels,</span> <span
  m="4029870">that</span> <span m="4030150">this</span> <span
  m="4031260">is</span> <span m="4031540">order</span> <span
  m="4031860">log</span> <span m="4032050">n</span> <span
  m="4033813">w.h.p.</span> <span m="4035740">That's</span> <span
  m="4035890">why</span> <span m="4036010">it's</span> <span
  m="4036140">a</span> <span m="4036190">claim.</span></p><p><span
  m="4037450">So</span> <span m="4038600">the</span> <span
  m="4038860">observation</span> <span m="4039480">is</span> <span
  m="4039630">that</span> <span m="4040300">the</span> <span
  m="4040510">number</span> <span m="4040800">of</span> <span
  m="4041210">coin</span> <span m="4041550">flips,</span> <span
  m="4042590">as</span> <span m="4042840">you</span> <span
  m="4042910">flip</span> <span m="4043140">a</span> <span
  m="4043190">fair</span> <span m="4043410">coin,</span> <span
  m="4043960">until</span> <span m="4044250">you</span> <span
  m="4044330">get</span> <span m="4044520">c</span> <span m="4044710">log
  n</span> <span m="4045050">heads</span> <span m="4045860">will</span> <span
  m="4046130">give</span> <span m="4046360">you</span> <span
  m="4047110">the</span> <span m="4047750">number</span> <span
  m="4048030">of</span> <span m="4048110">moves</span> <span
  m="4048700">in</span> <span m="4050060">your</span> <span
  m="4050350">search,</span> <span m="4051010">total</span> <span
  m="4051240">number</span> <span m="4051410">of</span> <span
  m="4051470">moves</span> <span m="4051710">in</span> <span
  m="4051780">your</span> <span m="4051910">search.</span> <span
  m="4053270">It</span> <span m="4053290">includes</span> <span
  m="4053730">the</span> <span m="4053890">up</span> <span
  m="4054110">moves</span> <span m="4054420">as</span> <span
  m="4054550">well</span> <span m="4054690">as</span> <span
  m="4054780">the</span> <span m="4054850">left</span> <span
  m="4055100">moves.</span> <span m="4055880">And</span> <span
  m="4056310">now</span> <span m="4056520">what</span> <span
  m="4056670">we</span> <span m="4056750">have</span> <span
  m="4056860">to</span> <span m="4056930">show</span> <span
  m="4057800">is</span> <span m="4059690">that</span> <span
  m="4060175">that</span> <span m="4061220">is</span> <span
  m="4061400">going</span> <span m="4061530">to</span> <span
  m="4061590">be</span> <span m="4061660">order</span> <span
  m="4061830">log</span> <span m="4062000">n</span> <span
  m="4062360">with</span> <span m="4062720">high</span> <span
  m="4062890">probability.</span> <span m="4064150">OK?</span></p><p><span
  m="4065240">And</span> <span m="4065620">then</span> <span
  m="4065740">once</span> <span m="4065940">you</span> <span
  m="4066030">do</span> <span m="4066160">that</span> <span
  m="4067070">you've</span> <span m="4067360">done</span> <span
  m="4067570">two</span> <span m="4067760">things.</span> <span
  m="4068650">You've</span> <span m="4069920">bounded</span> <span
  m="4071910">the</span> <span m="4072000">number</span> <span
  m="4072290">of</span> <span m="4072410">levels</span> <span
  m="4074080">in</span> <span m="4074230">the</span> <span
  m="4074310">skip</span> <span m="4074580">list</span> <span
  m="4075830">to</span> <span m="4076000">be</span> <span
  m="4076140">order</span> <span m="4076410">log</span> <span
  m="4076550">n</span> <span m="4077320">with</span> <span
  m="4077490">high</span> <span m="4077640">probability.</span> <span
  m="4078910">And</span> <span m="4079090">you've</span> <span
  m="4079190">said</span> <span m="4079440">the</span> <span
  m="4079500">number</span> <span m="4079710">of</span> <span
  m="4079790">moves</span> <span m="4080160">in</span> <span
  m="4080250">the</span> <span m="4080330">search</span> <span
  m="4081470">is</span> <span m="4082060">order</span> <span
  m="4082350">log</span> <span m="4082480">n</span> <span
  m="4083170">with</span> <span m="4083360">high</span> <span
  m="4083540">probability</span> <span m="4084650">assuming</span> <span
  m="4086110">that</span> <span m="4086410">the</span> <span
  m="4086490">number</span> <span m="4086710">of</span> <span
  m="4086800">levels</span> <span m="4087900">is</span> <span
  m="4088160">c</span> <span m="4088290">log</span> <span m="4088420">n,</span>
  <span m="4089380">obviously.</span></p><p><span m="4091240">So</span> <span
  m="4091600">it's</span> <span m="4091790">not</span> <span
  m="4092030">that</span> <span m="4093370">the</span> <span
  m="4093460">bottom</span> <span m="4093830">one</span> <span
  m="4094060">subsumes</span> <span m="4094790">the</span> <span
  m="4094880">top</span> <span m="4095130">one.</span> <span
  m="4095650">It's</span> <span m="4095810">the</span> <span
  m="4095870">last</span> <span m="4096170">thing</span> <span
  m="4096390">to</span> <span m="4096490">keep</span> <span
  m="4096710">in</span> <span m="4096790">mind</span> <span
  m="4097420">as</span> <span m="4097700">we</span> <span m="4097990">get</span>
  <span m="4098270">all</span> <span m="4098560">of</span> <span
  m="4098660">these</span> <span m="4099859">items</span> <span
  m="4101479">out</span> <span m="4101649">of</span> <span
  m="4101710">the</span> <span m="4101770">way.</span> <span
  m="4102520">This</span> <span m="4103250">assumes</span> <span
  m="4103779">that</span> <span m="4104040">there</span> <span
  m="4104750">are</span> <span m="4105090">less</span> <span
  m="4105390">than</span> <span m="4105500">or</span> <span
  m="4105569">equal</span> <span m="4105800">to</span> <span
  m="4105870">c</span> <span m="4106100">log n</span> <span
  m="4106439">levels.</span> <span m="4107380">That's</span> <span
  m="4107609">the</span> <span m="4107680">only</span> <span
  m="4107870">reason</span> <span m="4108130">why</span> <span
  m="4108390">I</span> <span m="4108450">could</span> <span
  m="4108580">make</span> <span m="4108740">an</span> <span
  m="4108819">argument</span> <span m="4109279">that</span> <span
  m="4109399">I've</span> <span m="4109520">run</span> <span
  m="4109750">out</span> <span m="4109880">of</span> <span
  m="4110000">levels.</span></p><p><span m="4111149">So</span> <span
  m="4111270">if</span> <span m="4111370">I</span> <span m="4111439">have</span>
  <span m="4111670">this</span> <span m="4111819">event</span> <span
  m="4112240">A</span> <span m="4112529">here--</span> <span m="4113340">if
  I</span> <span m="4113430">call</span> <span m="4113660">this</span> <span
  m="4113830">event</span> <span m="4114210">A,</span> <span
  m="4115036">and</span> <span m="4115450">I</span> <span
  m="4115500">have</span> <span m="4115770">this</span> <span
  m="4115960">event</span> <span m="4116649">B,</span> <span
  m="4118100">what</span> <span m="4118279">I</span> <span
  m="4118359">really</span> <span m="4118670">want</span> <span
  m="4119510">is--</span> <span m="4120630">I've</span> <span
  m="4120729">shown</span> <span m="4121029">you</span> <span
  m="4121180">that</span> <span m="4121330">event</span> <span
  m="4121609">A</span> <span m="4121819">happens</span> <span
  m="4122160">with</span> <span m="4122300">high</span> <span
  m="4122450">probability.</span> <span m="4123390">That's</span> <span
  m="4123640">the</span> <span m="4123729">warm-up</span> <span
  m="4124149">Lemma.</span> <span m="4125149">I</span> <span
  m="4125290">need</span> <span m="4125470">to</span> <span
  m="4125550">show</span> <span m="4125830">you</span> <span
  m="4126020">that</span> <span m="4126229">event</span> <span
  m="4126510">B</span> <span m="4126790">happens</span> <span
  m="4127160">with</span> <span m="4127300">high</span> <span
  m="4127470">probability.</span> <span m="4128649">And</span> <span
  m="4128830">then</span> <span m="4129140">I</span> <span
  m="4129220">have</span> <span m="4129350">to</span> <span
  m="4129420">show</span> <span m="4129609">you</span> <span
  m="4129740">that</span> <span m="4129950">event A</span> <span
  m="4130350">and</span> <span m="4130770">event</span> <span
  m="4131020">B</span> <span m="4131680">happen</span> <span
  m="4131979">with</span> <span m="4132100">high</span> <span
  m="4132250">probability,</span> <span m="4134210">because</span> <span
  m="4134560">I</span> <span m="4134680">need</span> <span
  m="4134890">both.</span></p><p><span m="4136490">Any</span> <span
  m="4136660">questions?</span> <span m="4137149">We're</span> <span
  m="4137560">stopping</span> <span m="4137960">a</span> <span
  m="4138000">minute</span> <span m="4138270">here.</span> <span
  m="4139460">The</span> <span m="4139670">rest</span> <span
  m="4139880">of</span> <span m="4139939">the</span> <span
  m="4140000">analysis,</span> <span m="4140380">a</span> <span
  m="4140760">bunch</span> <span m="4140990">of</span> <span
  m="4141080">algebra,</span> <span m="4141870">we'll</span> <span
  m="4142029">get</span> <span m="4142189">through</span> <span
  m="4142420">it,</span> <span m="4142660">you</span> <span
  m="4142819">can</span> <span m="4142920">look</span> <span
  m="4143029">at</span> <span m="4143100">the</span> <span
  m="4143160">notes.</span> <span m="4143910">This</span> <span
  m="4144160">is</span> <span m="4144649">the</span> <span
  m="4144720">key</span> <span m="4144930">point.</span> <span
  m="4145920">If</span> <span m="4146000">you</span> <span
  m="4146069">got</span> <span m="4146300">this,</span> <span
  m="4146729">you</span> <span m="4146890">got</span> <span
  m="4147080">it.</span> <span m="4148850">Yeah.</span></p><p><span
  m="4149262">AUDIENCE: Can you</span> <span m="4149674">just say</span> <span
  m="4150086">that because</span> <span m="4150498">the probability</span> <span
  m="4150910">of</span> <span m="4151392">drawing an</span> <span
  m="4151874">up</span> <span m="4152356">move</span> <span
  m="4153394">instead</span> <span m="4153889">of</span> <span
  m="4154384">a</span> <span m="4154879">left</span> <span
  m="4155374">move</span> <span m="4155869">is 1/2,</span> <span
  m="4156859">that</span> <span m="4157354">the</span> <span
  m="4157849">expected</span> <span m="4158344">number</span> <span
  m="4158850">of</span> <span m="4159333">left</span> <span
  m="4159816">moves</span> <span m="4161265">should be</span> <span
  m="4161750">equal</span> <span m="4161930">to</span> <span
  m="4162401">the</span> <span m="4163343">number of</span> <span m="4163814">up
  moves,</span> <span m="4164756">[INAUDIBLE]</span> <span m="4165227">bound
  the</span> <span m="4165698">up moves?</span></p><p><span m="4166649">SRINIVAS
  DEVADAS: So</span> <span m="4167660">the</span> <span
  m="4167800">argument</span> <span m="4168229">is</span> <span
  m="4168350">that</span> <span m="4169310">since</span> <span
  m="4169689">you</span> <span m="4169800">have</span> <span
  m="4170120">1/2,</span> <span m="4172210">can</span> <span
  m="4172330">you</span> <span m="4172410">simply</span> <span
  m="4172720">say</span> <span m="4172990">that</span> <span
  m="4173149">the</span> <span m="4173270">expected</span> <span
  m="4173810">number</span> <span m="4174140">of</span> <span
  m="4176290">left</span> <span m="4176550">moves</span> <span
  m="4177470">is</span> <span m="4177740">going</span> <span
  m="4177970">to</span> <span m="4178069">be</span> <span m="4178529">the</span>
  <span m="4178630">same</span> <span m="4178880">as</span> <span
  m="4179020">the</span> <span m="4179340">same</span> <span m="4179630">as
  the</span> <span m="4179750">up</span> <span
  m="4179910">moves?</span></p><p><span m="4180490">You</span> <span
  m="4180649">can</span> <span m="4180840">make</span> <span
  m="4181200">arguments</span> <span m="4181810">about</span> <span
  m="4182020">expectation.</span> <span m="4182790">You</span> <span
  m="4182890">can</span> <span m="4183010">say</span> <span
  m="4183279">that</span> <span m="4183800">at</span> <span
  m="4183960">any</span> <span m="4184220">level,</span> <span
  m="4184720">the</span> <span m="4184819">number</span> <span
  m="4185120">of</span> <span m="4185550">left</span> <span
  m="4185920">moves</span> <span m="4186200">that</span> <span
  m="4186330">you're</span> <span m="4186420">going</span> <span
  m="4186560">to</span> <span m="4186630">have</span> <span
  m="4187340">is</span> <span m="4187700">going</span> <span
  m="4187870">to</span> <span m="4187939">be</span> <span m="4188050">two</span>
  <span m="4188609">in</span> <span m="4188750">expectation.</span> <span
  m="4190090">It's</span> <span m="4190270">not</span> <span
  m="4190460">going</span> <span m="4190600">to</span> <span
  m="4190660">give</span> <span m="4190830">you your</span> <span
  m="4190990">with</span> <span m="4191319">high</span> <span
  m="4191470">probability</span> <span m="4193569">proof.</span> <span
  m="4194290">It's</span> <span m="4194490">not</span> <span
  m="4194640">going</span> <span m="4194770">to</span> <span
  m="4194870">relate</span> <span m="4195240">that</span> <span
  m="4195550">to</span> <span m="4196320">the</span> <span m="4196900">1</span>
  <span m="4197150">divided</span> <span m="4197410">by</span> <span
  m="4197560">n raised</span> <span m="4197640">to</span> <span
  m="4197930">alpha.</span></p><p><span m="4198630">But</span> <span
  m="4198810">I</span> <span m="4198890">will</span> <span
  m="4199060">tell</span> <span m="4199260">you</span> <span
  m="4199420">that</span> <span m="4199680">if</span> <span
  m="4199830">you</span> <span m="4199940">just</span> <span
  m="4200230">wanted</span> <span m="4200500">to</span> <span
  m="4200580">show</span> <span m="4201620">expectation</span> <span
  m="4202430">for</span> <span m="4202660">search</span> <span
  m="4203420">is</span> <span m="4203640">order</span> <span m="4203910">log
  n,</span> <span m="4204650">you</span> <span m="4204860">won't</span> <span
  m="4204990">have</span> <span m="4205130">to</span> <span
  m="4206150">jump</span> <span m="4206460">through</span> <span m="4206580">all
  of</span> <span m="4206720">these</span> <span m="4206910">hoops.</span> <span
  m="4208400">At</span> <span m="4208570">some</span> <span
  m="4208750">level</span> <span m="4209060">you'll</span> <span
  m="4209210">be</span> <span m="4209320">making</span> <span
  m="4210330">the</span> <span m="4210750">assumptions</span> <span
  m="4211270">that</span> <span m="4211410">I've</span> <span
  m="4211500">made</span> <span m="4211690">explicit</span> <span
  m="4212210">here</span> <span m="4212720">through</span> <span
  m="4212890">my</span> <span m="4213080">observations</span> <span
  m="4214200">when</span> <span m="4214360">you</span> <span
  m="4214470">do</span> <span m="4214620">that</span> <span
  m="4214760">expectation.</span> <span m="4215135">So</span> <span
  m="4215510">if</span> <span m="4215620">you</span> <span
  m="4215740">really</span> <span m="4215960">want</span> <span
  m="4216130">to</span> <span m="4216190">write</span> <span
  m="4216420">a</span> <span m="4216470">precise</span> <span
  m="4217590">proof</span> <span m="4217970">of</span> <span
  m="4218140">expected</span> <span m="4219540">value</span> <span
  m="4220290">for</span> <span m="4220650">search</span> <span
  m="4220930">complexity,</span> <span m="4222080">you</span> <span
  m="4222220">would</span> <span m="4222320">have</span> <span
  m="4222480">to</span> <span m="4222580">do</span> <span m="4222740">a</span>
  <span m="4222830">lot</span> <span m="4223070">of</span> <span
  m="4223150">the</span> <span m="4223210">things</span> <span
  m="4223440">that</span> <span m="4223550">I'm</span> <span
  m="4223640">doing</span> <span m="4223850">here.</span></p><p><span
  m="4225960">I'm</span> <span m="4226120">not</span> <span
  m="4226290">saying</span> <span m="4226500">you</span> <span
  m="4226700">waved</span> <span m="4226920">your</span> <span
  m="4227030">hands.</span> <span m="4227380">You</span> <span
  m="4227510">did</span> <span m="4227640">not.</span> <span
  m="4230120">But</span> <span m="4230470">it</span> <span
  m="4230940">needed</span> <span m="4231230">more</span> <span
  m="4231720">to</span> <span m="4232320">than</span> <span
  m="4232570">what</span> <span m="4232750">you</span> <span
  m="4232820">just</span> <span m="4233000">said.</span> <span
  m="4234220">OK?</span></p><p><span m="4235820">So</span> <span
  m="4236610">this</span> <span m="4236810">is</span> <span
  m="4238050">pretty</span> <span m="4238210">much</span> <span
  m="4238760">what</span> <span m="4239020">the</span> <span
  m="4239080">analysis</span> <span m="4239490">is.</span> <span
  m="4240580">With</span> <span m="4240720">high</span> <span
  m="4240890">probability</span> <span m="4241380">analysis</span> <span
  m="4242250">we</span> <span m="4242410">bounded</span> <span
  m="4242830">the</span> <span m="4242890">vertical,</span> <span
  m="4243800">we</span> <span m="4244000">bounded</span> <span
  m="4244450">the</span> <span m="4244510">number</span> <span
  m="4244740">of</span> <span m="4244830">moves.</span> <span
  m="4245920">Assuming</span> <span m="4246400">the</span> <span
  m="4246470">vertical</span> <span m="4246830">was</span> <span
  m="4246980">bounded,</span> <span m="4248710">we</span> <span
  m="4248860">got</span> <span m="4249080">the</span> <span
  m="4249160">result</span> <span m="4249490">for</span> <span
  m="4250330">the</span> <span m="4250410">number</span> <span
  m="4250620">of</span> <span m="4250700">moves.</span> <span
  m="4251350">So</span> <span m="4251540">both</span> <span
  m="4251750">of</span> <span m="4251850">those</span> <span
  m="4252150">happen</span> <span m="4252510">with</span> <span
  m="4252620">high</span> <span m="4252780">probability.</span> <span
  m="4253720">You</span> <span m="4253860">got</span> <span
  m="4254020">your</span> <span m="4254140">result,</span> <span
  m="4254670">which</span> <span m="4254910">is</span> <span
  m="4255440">the</span> <span m="4255570">theorem</span> <span
  m="4256570">that</span> <span m="4257210">we</span> <span
  m="4257870">have</span> <span m="4258140">somewhere.</span> <span
  m="4260950">Woah,</span> <span m="4261370">did I</span> <span
  m="4261680">erase</span> <span m="4261920">the</span> <span
  m="4262000">theorem?</span></p><p><span m="4262770">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="4264150">SRINIVAS DEVADAS: It's</span>
  <span m="4264340">somewhere.</span> <span m="4267130">All</span> <span
  m="4267240">right.</span> <span m="4267400">Good.</span></p><p><span
  m="4268270">So</span> <span m="4268420">let's</span> <span
  m="4269420">do</span> <span m="4269620">what</span> <span
  m="4269780">we</span> <span m="4269870">can</span> <span
  m="4270350">with</span> <span m="4270470">respect</span> <span
  m="4270780">to</span> <span m="4271820">showing</span> <span
  m="4272110">this</span> <span m="4272190">theorem.</span> <span
  m="4274980">There's</span> <span m="4275120">a</span> <span
  m="4275150">couple</span> <span m="4275440">ways</span> <span
  m="4275680">that</span> <span m="4275800">you</span> <span
  m="4275880">could</span> <span m="4276000">prove</span> <span
  m="4276260">this.</span> <span m="4277810">There's a</span> <span
  m="4277860">way</span> <span m="4278230">that</span> <span
  m="4281020">you</span> <span m="4281620">could</span> <span
  m="4281750">use</span> <span m="4285260">a</span> <span
  m="4285310">Chernoff</span> <span m="4285830">bound.</span> <span
  m="4286910">And</span> <span m="4287270">this</span> <span
  m="4287420">is</span> <span m="4287530">kind</span> <span
  m="4287660">of</span> <span m="4287730">a</span> <span m="4287790">cool</span>
  <span m="4289360">result</span> <span m="4289840">that</span> <span
  m="4290010">I</span> <span m="4290080">think</span> <span
  m="4290270">is</span> <span m="4290370">worth</span> <span
  m="4291680">knowing.</span></p><p><span m="4292700">I</span> <span
  m="4292920">don't</span> <span m="4293040">know</span> <span
  m="4293120">if</span> <span m="4293200">you've</span> <span
  m="4293330">seen</span> <span m="4293570">this,</span> <span
  m="4294430">but</span> <span m="4294560">this</span> <span
  m="4294690">is</span> <span m="4295620">a</span> <span
  m="4295700">seminal</span> <span m="4296100">theorem</span> <span
  m="4296470">by</span> <span m="4297040">Chernoff</span> <span
  m="4298430">that</span> <span m="4298650">says</span> <span
  m="4300130">if</span> <span m="4300370">you</span> <span
  m="4300520">have</span> <span m="4302070">a</span> <span
  m="4302210">random</span> <span m="4302540">variable</span> <span
  m="4309690">representing</span> <span m="4315220">the</span> <span
  m="4315770">total</span> <span m="4316230">number</span> <span
  m="4316590">of</span> <span m="4319550">tails,</span> <span
  m="4320070">let's</span> <span m="4320240">say--</span> <span
  m="4320700">it</span> <span m="4320910">could</span> <span
  m="4321040">be</span> <span m="4321160">heads</span> <span
  m="4321390">as</span> <span m="4321510">well--</span> <span
  m="4322980">in</span> <span m="4323160">a</span> <span
  m="4323910">series</span> <span m="4326470">of</span> <span
  m="4327060">m--</span> <span m="4328310">not</span> <span
  m="4328570">n,</span> <span m="4328950">m--</span> <span
  m="4329920">independent</span> <span m="4332480">coin</span> <span
  m="4332820">flips</span> <span m="4335490">where</span> <span
  m="4338060">each</span> <span m="4339020">flip</span> <span
  m="4341780">has</span> <span m="4342110">a</span> <span
  m="4342740">probability</span> <span m="4343530">p</span> <span
  m="4345060">of</span> <span m="4345250">coming</span> <span
  m="4345560">up</span> <span m="4345700">heads,</span> <span
  m="4350200">then</span> <span m="4353260">for</span> <span
  m="4353570">all</span> <span m="4354610">r</span> <span
  m="4355030">greater</span> <span m="4355320">than</span> <span
  m="4355480">0,</span> <span m="4357120">we</span> <span
  m="4357250">have</span> <span m="4358750">this</span> <span
  m="4359310">beautiful</span> <span m="4359740">result</span> <span
  m="4361110">that</span> <span m="4361330">says</span> <span
  m="4362200">the</span> <span m="4362360">probability</span> <span
  m="4363960">that</span> <span m="4364160">y,</span> <span
  m="4365040">which</span> <span m="4365170">is</span> <span
  m="4365280">a</span> <span m="4365330">random</span> <span
  m="4365620">variable--</span> <span m="4368560">a</span> <span
  m="4368670">particular</span> <span m="4371570">instance</span> <span
  m="4373320">when</span> <span m="4373560">you</span> <span
  m="4374320">evaluate</span> <span m="4374830">it--</span> <span
  m="4375760">that</span> <span m="4376040">it</span> <span
  m="4376210">is</span> <span m="4378470">larger</span> <span
  m="4378980">than</span> <span m="4379150">the</span> <span
  m="4379220">expectation</span> <span m="4379970">by</span> <span
  m="4380200">r</span> <span m="4381810">is</span> <span
  m="4382030">bounded.</span></p><p><span m="4383210">So</span> <span
  m="4385370">just</span> <span m="4385620">a</span> <span
  m="4385660">beautiful</span> <span m="4385990">result</span> <span
  m="4386320">that</span> <span m="4386430">says</span> <span
  m="4387210">here's</span> <span m="4387560">a</span> <span
  m="4388390">random</span> <span m="4388720">variable</span> <span
  m="4389130">that</span> <span m="4389270">corresponds</span> <span
  m="4389760">to</span> <span m="4390660">flipping</span> <span
  m="4391000">a</span> <span m="4391060">coin.</span> <span
  m="4392520">I'm</span> <span m="4392710">going</span> <span
  m="4392840">to</span> <span m="4392950">flip</span> <span
  m="4393270">this</span> <span m="4393940">a</span> <span
  m="4394080">bunch</span> <span m="4394290">of</span> <span
  m="4394360">times,</span> <span m="4395700">and</span> <span
  m="4395980">I</span> <span m="4396060">know</span> <span
  m="4396200">what</span> <span m="4396340">the</span> <span
  m="4396400">expectation</span> <span m="4396950">is.</span> <span
  m="4397510">If</span> <span m="4397660">it's</span> <span m="4399211">a</span>
  <span m="4399630">fair</span> <span m="4399940">coin</span> <span
  m="4400310">of</span> <span m="4400460">1/2,</span> <span
  m="4401490">then</span> <span m="4401710">I'm</span> <span
  m="4401790">going</span> <span m="4401910">to</span> <span
  m="4401980">get</span> <span m="4402140">m</span> <span
  m="4402340">over</span> <span m="4402560">2--</span> <span
  m="4403010">expected</span> <span m="4403770">number</span> <span
  m="4404070">of</span> <span m="4404160">heads</span> <span
  m="4404400">is</span> <span m="4404500">going</span> <span
  m="4404620">to</span> <span m="4404680">be</span> <span m="4404770">m</span>
  <span m="4404930">over</span> <span m="4405110">2.</span> <span
  m="4405760">Expected</span> <span m="4406180">number</span> <span
  m="4406360">of</span> <span m="4406440">tails</span> <span
  m="4406760">is</span> <span m="4406850">going</span> <span
  m="4406970">to</span> <span m="4407030">be</span> <span m="4407110">m</span>
  <span m="4407190">over</span> <span m="4407400">2.</span> <span
  m="4408040">If</span> <span m="4408210">it's</span> <span
  m="4408400">p,</span> <span m="4408750">then</span> <span
  m="4409350">obviously</span> <span m="4409800">it's</span> <span
  m="4409910">a</span> <span m="4409940">little</span> <span
  m="4410090">bit</span> <span m="4410190">different--</span> <span
  m="4411240">p</span> <span m="4411550">times</span> <span
  m="4411670">m.</span></p><p><span m="4412600">But</span> <span
  m="4412990">what</span> <span m="4413330">I</span> <span
  m="4413380">have</span> <span m="4413550">here</span> <span
  m="4413820">is</span> <span m="4415390">if</span> <span m="4415690">you</span>
  <span m="4415780">tell</span> <span m="4416010">me</span> <span
  m="4416740">what</span> <span m="4416960">the</span> <span
  m="4417040">probability</span> <span m="4417570">is</span> <span
  m="4417850">that</span> <span m="4418090">I'm</span> <span
  m="4418720">10</span> <span m="4419000">away</span> <span
  m="4419260">from</span> <span m="4419430">the</span> <span
  m="4419490">expectation</span> <span m="4420500">and</span> <span
  m="4420650">that</span> <span m="4420770">would</span> <span
  m="4420930">imply</span> <span m="4421390">that</span> <span
  m="4421590">r</span> <span m="4421860">is</span> <span m="4422030">10,</span>
  <span m="4422830">then</span> <span m="4423190">that</span> <span
  m="4423340">is</span> <span m="4423460">bounded</span> <span
  m="4423850">by</span> <span m="4424200">e</span> <span m="4424670">raised
  to</span> <span m="4424740">minus</span> <span m="4425050">2</span> <span
  m="4425300">times</span> <span m="4425590">10</span> <span
  m="4425800">square</span> <span m="4426680">divided</span> <span
  m="4427130">by</span> <span m="4427290">m.</span> <span m="4428240">So</span>
  <span m="4428340">that's</span> <span m="4428640">Chernoff's</span> <span
  m="4429910">bound.</span></p><p><span m="4430470">And</span> <span
  m="4430620">you</span> <span m="4430690">can</span> <span
  m="4430800">see</span> <span m="4431000">how</span> <span
  m="4431200">this</span> <span m="4431370">relates</span> <span m="4431760">to
  our</span> <span m="4431880">with</span> <span m="4432170">high</span> <span
  m="4432350">probability</span> <span m="4432910">analysis.</span> <span
  m="4433860">Because</span> <span m="4434130">our</span> <span
  m="4434400">with</span> <span m="4434710">high</span> <span
  m="4434860">probability</span> <span m="4435290">analysis</span> <span
  m="4435750">is</span> <span m="4436210">exactly</span> <span
  m="4436780">this.</span> <span m="4437110">This is</span> <span
  m="4437390">the</span> <span m="4437490">hammer</span> <span
  m="4438440">that</span> <span m="4438650">you</span> <span
  m="4438750">can</span> <span m="4438920">use</span> <span
  m="4439630">to</span> <span m="4439770">do</span> <span
  m="4439920">with</span> <span m="4440130">high</span> <span
  m="4440320">probability</span> <span m="4440830">analysis.</span> <span
  m="4441690">Because</span> <span m="4441970">this</span> <span
  m="4442160">tells</span> <span m="4442500">you</span> <span
  m="4442870">as</span> <span m="4443240">you</span> <span
  m="4443330">get</span> <span m="4443510">further</span> <span
  m="4443940">and</span> <span m="4444060">further</span> <span
  m="4444420">away</span> <span m="4444730">from</span> <span
  m="4444920">the</span> <span m="4445000">average</span> <span
  m="4445780">or</span> <span m="4445990">you</span> <span
  m="4446390">get</span> <span m="4446550">further</span> <span
  m="4446820">and</span> <span m="4446930">further</span> <span
  m="4447170">away</span> <span m="4447460">from</span> <span
  m="4447630">the</span> <span m="4447690">expectation,</span> <span
  m="4448700">what</span> <span m="4449030">the</span> <span
  m="4449110">probability</span> <span m="4449640">is</span> <span
  m="4449890">that</span> <span m="4450010">you're</span> <span
  m="4450090">going</span> <span m="4450210">to</span> <span
  m="4450270">be</span> <span m="4450340">so</span> <span m="4450540">far</span>
  <span m="4450750">away.</span></p><p><span m="4451960">What</span> <span
  m="4452160">is</span> <span m="4452280">the</span> <span
  m="4452360">probability</span> <span m="4454100">that</span> <span
  m="4454770">in</span> <span m="4455710">100</span> <span
  m="4457640">coin</span> <span m="4457930">flips</span> <span
  m="4458250">that</span> <span m="4458370">are</span> <span
  m="4458450">fair,</span> <span m="4459260">you</span> <span
  m="4459420">get</span> <span m="4461120">50</span> <span
  m="4461550">heads?</span> <span m="4462390">It's</span> <span
  m="4462480">a</span> <span m="4462540">reasonably</span> <span
  m="4462930">large</span> <span m="4463210">number</span> <span
  m="4463840">because</span> <span m="4464070">the</span> <span
  m="4464140">expected</span> <span m="4464580">value</span> <span
  m="4465440">corresponds</span> <span m="4466260">to</span> <span
  m="4467880">50.</span> <span m="4468590">So</span> <span m="4468840">r</span>
  <span m="4469100">is</span> <span m="4469170">0.</span> <span
  m="4470470">So</span> <span m="4470630">that</span> <span
  m="4470810">just</span> <span m="4471020">says</span> <span
  m="4471350">this</span> <span m="4471510">is</span> <span
  m="4471670">a--</span> <span m="4472680">well, it</span> <span
  m="4472870">doesn't</span> <span m="4473100">tell</span> <span
  m="4473240">you</span> <span m="4473340">much</span> <span
  m="4473600">because</span> <span m="4474230">this</span> <span
  m="4474540">says it's</span> <span m="4474860">less</span> <span
  m="4475040">than</span> <span m="4475130">or</span> <span
  m="4475210">equal</span> <span m="4475420">to</span> <span
  m="4475490">1.</span> <span m="4476750">That's</span> <span
  m="4477200">all</span> <span m="4477340">it's</span> <span
  m="4477500">says.</span></p><p><span m="4478400">But</span> <span
  m="4479050">if</span> <span m="4479220">you</span> <span
  m="4479330">had</span> <span m="4480010">75,</span> <span
  m="4482390">what</span> <span m="4482610">are</span> <span
  m="4482670">the</span> <span m="4482730">probability</span> <span
  m="4483170">that</span> <span m="4483290">you</span> <span
  m="4483360">get</span> <span m="4483510">75</span> <span
  m="4484250">heads</span> <span m="4486280">when</span> <span
  m="4486450">you</span> <span m="4486580">flip</span> <span
  m="4486850">a</span> <span m="4486890">coin</span> <span
  m="4487150">100</span> <span m="4487510">times?</span> <span
  m="4488370">Then</span> <span m="4489080">e</span> <span m="4489260">of</span>
  <span m="4489370">y</span> <span m="4489940">for</span> <span
  m="4490130">a</span> <span m="4490180">fair</span> <span
  m="4490390">coin</span> <span m="4490670">would</span> <span
  m="4490790">be</span> <span m="4490890">50,</span> <span m="4491780">r</span>
  <span m="4492040">would</span> <span m="4492170">be</span> <span
  m="4492270">25,</span> <span m="4493390">and</span> <span
  m="4493840">you'd</span> <span m="4493930">go</span> <span
  m="4494090">off</span> <span m="4494310">and</span> <span
  m="4494410">you</span> <span m="4494470">could</span> <span
  m="4494590">do</span> <span m="4494690">the</span> <span
  m="4494850">math</span> <span m="4495430">for</span> <span
  m="4495590">that.</span></p><p><span m="4496220">So</span> <span
  m="4496480">it's</span> <span m="4496590">a</span> <span
  m="4496650">beautiful</span> <span m="4497100">relationship</span> <span
  m="4498270">that</span> <span m="4498460">tells</span> <span
  m="4498730">you</span> <span m="4499670">how</span> <span
  m="4499730">the</span> <span m="4499800">probabilities</span> <span
  m="4500390">change</span> <span m="4501210">as</span> <span
  m="4502090">your</span> <span m="4502420">random</span> <span
  m="4502710">variable</span> <span m="4504020">value</span> <span
  m="4504870">is</span> <span m="4505050">further</span> <span
  m="4505290">and</span> <span m="4505430">further</span> <span
  m="4505680">away</span> <span m="4505960">from</span> <span
  m="4506580">the</span> <span m="4506700">expectation.</span> <span
  m="4507880">And</span> <span m="4508170">you</span> <span
  m="4508250">can</span> <span m="4508340">imagine</span> <span
  m="4508720">that</span> <span m="4509290">this</span> <span
  m="4509650">is</span> <span m="4509750">going</span> <span
  m="4509900">to</span> <span m="4509970">be</span> <span
  m="4510080">very</span> <span m="4510280">useful</span> <span
  m="4511730">in</span> <span m="4513200">showing</span> <span
  m="4515870">our</span> <span m="4516680">with</span> <span
  m="4517150">high</span> <span m="4517320">probability</span> <span
  m="4517870">result.</span> <span m="4519110">And</span> <span
  m="4519730">I</span> <span m="4519900">think</span> <span
  m="4520040">what</span> <span m="4520160">I</span> <span
  m="4520210">have</span> <span m="4520350">time</span> <span
  m="4520600">for</span> <span m="4522040">is</span> <span
  m="4522520">just</span> <span m="4522760">to</span> <span
  m="4522830">give</span> <span m="4522980">you</span> <span
  m="4524590">a</span> <span m="4524700">sense</span> <span
  m="4525210">of</span> <span m="4526470">how</span> <span
  m="4526740">this</span> <span m="4526900">result</span> <span
  m="4527190">works</span> <span m="4527460">out--</span> <span
  m="4527640">I'm</span> <span m="4527710">not</span> <span
  m="4527810">going</span> <span m="4527930">to</span> <span
  m="4527990">do</span> <span m="4528090">the</span> <span
  m="4528180">algebra.</span> <span m="4528960">I</span> <span
  m="4529080">don't</span> <span m="4529220">think</span> <span
  m="4529370">it's</span> <span m="4529890">worth</span> <span
  m="4530280">it</span> <span m="4530450">to</span> <span
  m="4531440">write</span> <span m="4531740">all</span> <span
  m="4531870">of</span> <span m="4531940">this</span> <span
  m="4532090">on</span> <span m="4532180">the</span> <span
  m="4532240">board</span> <span m="4532610">when</span> <span
  m="4533380">you</span> <span m="4533980">can</span> <span
  m="4534100">read</span> <span m="4534270">it</span> <span
  m="4534360">in</span> <span m="4534460">the</span> <span
  m="4534530">notes.</span></p><p><span m="4535340">But</span> <span
  m="4535680">the</span> <span m="4535840">bottom</span> <span
  m="4536100">line</span> <span m="4536350">is</span> <span
  m="4536970">we're</span> <span m="4537130">going</span> <span
  m="4537260">to</span> <span m="4537330">show</span> <span
  m="4537610">this</span> <span m="4537980">little</span> <span
  m="4538260">Lemma</span> <span m="4540320">that</span> <span
  m="4540500">says</span> <span m="4542310">for</span> <span
  m="4543190">any</span> <span m="4543850">c,</span> <span
  m="4547730">invoking</span> <span m="4548230">this</span> <span
  m="4548970">Chernoff</span> <span m="4549500">bound,</span> <span
  m="4550290">there's</span> <span m="4550500">a</span> <span
  m="4550550">constant</span> <span m="4551150">d,</span> <span
  m="4553330">such</span> <span m="4553750">that</span> <span
  m="4554950">with</span> <span m="4555350">high</span> <span
  m="4555670">probability,</span> <span m="4558810">the</span> <span
  m="4559430">number</span> <span m="4560160">of</span> <span
  m="4562020">heads</span> <span m="4565406">in</span> <span
  m="4566470">flipping</span> <span m="4567950">d</span> <span
  m="4568235">log</span> <span m="4568520">n.</span> <span m="4569510">So
  I</span> <span m="4569600">have</span> <span m="4569710">a</span> <span
  m="4569740">new</span> <span m="4569920">constant</span> <span
  m="4570370">here.</span> <span m="4571240">d</span> <span m="4571460">log
  n</span> <span m="4572750">fair</span> <span m="4573540">coins,</span> <span
  m="4574040">or</span> <span m="4574420">a</span> <span
  m="4574490">single</span> <span m="4574760">fair</span> <span
  m="4575100">coin,</span> <span m="4575830">d</span> <span m="4576030">log
  n</span> <span m="4576440">times,</span> <span m="4577970">assuming</span>
  <span m="4578330">independence,</span> <span m="4580040">is</span> <span
  m="4580200">at</span> <span m="4580330">least</span> <span
  m="4581210">c</span> <span m="4581570">log n.</span></p><p><span
  m="4583380">So</span> <span m="4583950">what</span> <span
  m="4584120">does</span> <span m="4584210">this</span> <span
  m="4584340">say?</span> <span m="4584780">A</span> <span
  m="4584910">lot</span> <span m="4585100">of</span> <span
  m="4585190">words.</span> <span m="4586390">It</span> <span
  m="4586550">just</span> <span m="4586730">says,</span> <span
  m="4586980">hey,</span> <span m="4588700">you</span> <span
  m="4588990">want</span> <span m="4590600">an</span> <span
  m="4591600">order</span> <span m="4591890">log</span> <span
  m="4592030">n</span> <span m="4592320">bound</span> <span
  m="4592640">here</span> <span m="4593060">eventually.</span> <span
  m="4594270">The</span> <span m="4594430">beauty</span> <span
  m="4594700">of</span> <span m="4594830">order</span> <span
  m="4595070">log</span> <span m="4595190">n</span> <span m="4595470">is</span>
  <span m="4595660">that</span> <span m="4595910">there's</span> <span
  m="4596050">a</span> <span m="4596090">constant</span> <span
  m="4596590">in</span> <span m="4596720">there</span> <span
  m="4596940">that</span> <span m="4597090">you</span> <span
  m="4597180">control.</span> <span m="4598760">That</span> <span
  m="4598990">constant</span> <span m="4599530">is</span> <span
  m="4599730">d.</span> <span m="4601420">So</span> <span m="4601600">you</span>
  <span m="4601780">tell</span> <span m="4601990">me</span> <span
  m="4602160">that</span> <span m="4602320">c</span> <span
  m="4602580">log</span> <span m="4602850">n</span> <span m="4603480">is</span>
  <span m="4605010">50.</span> <span m="4606530">So</span> <span
  m="4608000">c</span> <span m="4608310">log n</span> <span
  m="4608600">is</span> <span m="4608720">50.</span></p><p><span
  m="4609590">Then</span> <span m="4610170">what</span> <span
  m="4610520">I'm</span> <span m="4610600">going</span> <span
  m="4610740">to</span> <span m="4610810">do</span> <span m="4611000">is</span>
  <span m="4611120">I'm</span> <span m="4611240">going</span> <span
  m="4611360">to</span> <span m="4611420">say</span> <span
  m="4611570">something</span> <span m="4611870">like,</span> <span
  m="4612570">well,</span> <span m="4614060">if</span> <span
  m="4614290">I</span> <span m="4615500">flip</span> <span m="4616320">a</span>
  <span m="4616420">coin</span> <span m="4617270">1,000</span> <span
  m="4617940">times,</span> <span m="4620080">then</span> <span
  m="4620760">I'm</span> <span m="4620880">going</span> <span
  m="4621000">to</span> <span m="4621060">have</span> <span
  m="4621150">an</span> <span m="4621280">overwhelming</span> <span
  m="4621970">probability</span> <span m="4622970">that</span> <span
  m="4623080">I'm</span> <span m="4623160">going</span> <span
  m="4623280">to</span> <span m="4623340">get</span> <span m="4623450">50</span>
  <span m="4623800">heads.</span> <span m="4626070">And</span> <span
  m="4626490">that's it.</span> <span m="4626860">That's</span> <span
  m="4627230">what</span> <span m="4627380">the</span> <span m="4628320">Lemma
  says.</span></p><p><span m="4630040">It</span> <span m="4630190">says</span>
  <span m="4631220">tell</span> <span m="4631420">me</span> <span
  m="4631560">what</span> <span m="4631730">c</span> <span m="4631910">log
  n</span> <span m="4632255">is.</span> <span m="4632900">Give</span> <span
  m="4633050">me</span> <span m="4633160">that</span> <span
  m="4633290">value.</span> <span m="4634430">And</span> <span
  m="4634940">I</span> <span m="4635110">will</span> <span
  m="4635250">find</span> <span m="4635610">you</span> <span
  m="4635750">a</span> <span m="4635820">d,</span> <span m="4636730">such</span>
  <span m="4637050">that</span> <span m="4637200">by</span> <span
  m="4637380">invoking</span> <span m="4637860">Chernoff,</span> <span
  m="4638970">I'm</span> <span m="4639120">going</span> <span
  m="4639250">to</span> <span m="4639320">show</span> <span
  m="4639490">you</span> <span m="4639660">an</span> <span
  m="4639780">overwhelming</span> <span m="4640380">probability</span> <span
  m="4641610">that</span> <span m="4642250">for</span> <span
  m="4642560">that</span> <span m="4642730">d</span> <span
  m="4643310">you're</span> <span m="4643450">going</span> <span
  m="4643570">to</span> <span m="4643630">get</span> <span m="4643750">at</span>
  <span m="4643870">least</span> <span m="4644140">c</span> <span
  m="4644260">log</span> <span m="4644460">n</span> <span
  m="4644590">heads.</span> <span m="4645960">So</span> <span
  m="4646130">everybody</span> <span m="4646410">buy</span> <span
  m="4646600">that?</span> <span m="4646840">Make</span> <span
  m="4647010">sense</span> <span m="4648380">from</span> <span
  m="4648730">what</span> <span m="4648900">you</span> <span
  m="4648980">see</span> <span m="4649130">up</span> <span
  m="4649250">there?</span> <span m="4650117">Yup?</span></p><p><span
  m="4651520">So</span> <span m="4651680">this</span> <span
  m="4651930">essentially</span> <span m="4652950">can</span> <span
  m="4653260">be</span> <span m="4653360">shown--</span> <span
  m="4653920">it</span> <span m="4654100">turns</span> <span
  m="4654340">out</span> <span m="4654510">that</span> <span
  m="4654690">what</span> <span m="4655000">you</span> <span
  m="4655080">have</span> <span m="4655220">to</span> <span
  m="4655320">do</span> <span m="4655640">is--</span> <span
  m="4656340">and</span> <span m="4656520">you</span> <span
  m="4656620">don't</span> <span m="4656770">have</span> <span
  m="4656910">to</span> <span m="4656970">choose</span> <span
  m="4657290">8,</span> <span m="4658110">but</span> <span
  m="4658330">you</span> <span m="4658410">can</span> <span
  m="4658540">choose</span> <span m="4658950">d</span> <span
  m="4659430">equals</span> <span m="4659660">8c.</span> <span
  m="4661620">Just</span> <span m="4661860">choose</span> <span
  m="4662120">d</span> <span m="4662220">equals</span> <span
  m="4662550">8c</span> <span m="4663510">and</span> <span
  m="4663880">you'll</span> <span m="4664030">see</span> <span
  m="4664180">the</span> <span m="4664270">algebra</span> <span
  m="4665230">in</span> <span m="4665390">the</span> <span
  m="4665460">notes</span> <span m="4665820">corresponding</span> <span
  m="4666420">to</span> <span m="4667620">what</span> <span
  m="4668100">each</span> <span m="4668260">of</span> <span
  m="4668350">these</span> <span m="4668530">values</span> <span
  m="4668920">are.</span></p><p><span m="4669560">So</span> <span
  m="4670170">e</span> <span m="4670380">of</span> <span m="4670510">y,</span>
  <span m="4671750">just</span> <span m="4671960">to</span> <span
  m="4672050">tell</span> <span m="4672230">you,</span> <span
  m="4672400">would</span> <span m="4672590">be</span> <span
  m="4672770">m</span> <span m="4673070">over</span> <span m="4673410">2.</span>
  <span m="4674570">You're</span> <span m="4674760">flipping</span> <span
  m="4675190">m</span> <span m="4675410">coins,</span> <span
  m="4676730">fair</span> <span m="4677020">coin</span> <span
  m="4677320">with</span> <span m="4677460">probability</span> <span
  m="4677930">1/2.</span> <span m="4678940">So</span> <span
  m="4679400">you</span> <span m="4679690">got</span> <span m="4679810">m</span>
  <span m="4680000">over</span> <span m="4680200">2.</span> <span
  m="4681510">And</span> <span m="4681690">then</span> <span
  m="4681820">the</span> <span m="4681900">last</span> <span
  m="4682110">thing</span> <span m="4682240">that</span> <span
  m="4682370">I'll</span> <span m="4682450">tell</span> <span
  m="4682640">you</span> <span m="4682820">is</span> <span
  m="4683020">that</span> <span m="4684600">what</span> <span
  m="4684800">you</span> <span m="4684890">want</span> <span
  m="4685230">in</span> <span m="4685675">terms of</span> <span
  m="4688160">invoking</span> <span m="4688630">that,</span> <span
  m="4688980">you</span> <span m="4689090">want</span> <span
  m="4689300">r--</span> <span m="4690010">remember we</span> <span
  m="4690300">were</span> <span m="4690420">talking</span> <span
  m="4690620">about</span> <span m="4690770">tails</span> <span
  m="4691170">here--</span> <span m="4691930">so</span> <span
  m="4692210">r</span> <span m="4692660">is</span> <span
  m="4692870">going</span> <span m="4693110">to</span> <span
  m="4693200">be</span> <span m="4695170">d</span> <span m="4695470">log</span>
  <span m="4695770">n</span> <span m="4696850">minus</span> <span
  m="4697470">c</span> <span m="4697750">log n.</span></p><p><span
  m="4698990">So</span> <span m="4699250">you</span> <span
  m="4699370">just</span> <span m="4699540">invoke</span> <span
  m="4699910">Chernoff</span> <span m="4701350">with</span> <span
  m="4701550">e</span> <span m="4701710">of</span> <span m="4701820">y</span>
  <span m="4702100">equals</span> <span m="4702510">m</span> <span
  m="4702690">over</span> <span m="4702880">2.</span> <span
  m="4703780">And</span> <span m="4704250">what</span> <span
  m="4704550">you're</span> <span m="4704660">saying</span> <span
  m="4704900">here</span> <span m="4705150">is</span> <span
  m="4705360">you</span> <span m="4705460">want</span> <span
  m="4705720">c</span> <span m="4705900">log</span> <span m="4706140">n</span>
  <span m="4706300">heads.</span> <span m="4707370">You</span> <span
  m="4707590">want</span> <span m="4707710">to</span> <span
  m="4707770">make</span> <span m="4707900">sure</span> <span
  m="4708110">you</span> <span m="4708190">get</span> <span m="4713660">c</span>
  <span m="4713820">log n heads,</span> <span m="4714430">which</span> <span
  m="4714600">means</span> <span m="4714770">that</span> <span
  m="4714870">the</span> <span m="4714930">number</span> <span
  m="4715130">of</span> <span m="4715200">tails</span> <span
  m="4715570">is</span> <span m="4715680">going</span> <span
  m="4715820">to</span> <span m="4715880">be</span> <span m="4716510">d</span>
  <span m="4716750">log n</span> <span m="4717080">minus</span> <span
  m="4717410">c</span> <span m="4717530">log</span> <span
  m="4717640">n.</span></p><p><span m="4718390">And</span> <span
  m="4719020">typically</span> <span m="4719530">we</span> <span
  m="4719690">analyze</span> <span m="4720050">failure</span> <span
  m="4720410">probability,</span> <span m="4721610">so</span> <span
  m="4722530">what</span> <span m="4722740">this</span> <span
  m="4723195">is</span> <span m="4723650">is this is</span> <span
  m="4723710">going</span> <span m="4723830">to</span> <span
  m="4723890">be</span> <span m="4723950">a</span> <span m="4723990">tiny</span>
  <span m="4724350">number.</span> <span m="4725180">So</span> <span
  m="4727160">the</span> <span m="4727280">failure</span> <span
  m="4727730">is</span> <span m="4727880">when</span> <span
  m="4728490">you</span> <span m="4728620">get</span> <span
  m="4728810">fewer</span> <span m="4729340">than</span> <span
  m="4729510">c</span> <span m="4729790">log</span> <span m="4730030">n</span>
  <span m="4730200">heads.</span> <span m="4731350">So</span> <span
  m="4731430">the</span> <span m="4731490">failure is</span> <span
  m="4731900">when</span> <span m="4732050">you</span> <span
  m="4732130">get</span> <span m="4732280">fewer</span> <span
  m="4732610">than</span> <span m="4732760">c</span> <span m="4732950">log
  n</span> <span m="4733290">heads.</span> <span m="4734140">And</span> <span
  m="4734350">so</span> <span m="4734510">that</span> <span
  m="4734670">means</span> <span m="4734930">that</span> <span
  m="4735090">you're</span> <span m="4735220">getting</span> <span
  m="4737800">more</span> <span m="4738310">than</span> <span
  m="4738980">d</span> <span m="4739380">log n</span> <span
  m="4739790">minus</span> <span m="4740140">c</span> <span
  m="4740260">log</span> <span m="4740510">n</span> <span
  m="4740690">tails</span> <span m="4741630">as</span> <span
  m="4741870">you're</span> <span m="4742000">flipping</span> <span
  m="4742340">this</span> <span m="4742490">coin.</span> <span
  m="4744330">Fewer</span> <span m="4744650">than</span> <span
  m="4744770">c</span> <span m="4744930">log n</span> <span
  m="4745230">heads</span> <span m="4745530">means</span> <span
  m="4746430">you're</span> <span m="4746660">getting</span> <span
  m="4746990">at</span> <span m="4747130">least</span> <span
  m="4747530">d</span> <span m="4747740">log n</span> <span
  m="4748080">minus</span> <span m="4748350">c</span> <span m="4748470">log
  n</span> <span m="4749200">tails.</span> <span m="4750030">So</span> <span
  m="4750210">that's</span> <span m="4750430">why</span> <span
  m="4750650">this</span> <span m="4750820">is</span> <span m="4750940">your
  r</span> <span m="4751150">here.</span></p><p><span m="4752130">And</span>
  <span m="4752290">then</span> <span m="4752410">when</span> <span
  m="4752530">your</span> <span m="4752720">r</span> <span
  m="4752930">gets</span> <span m="4753170">that</span> <span
  m="4753370">large,</span> <span m="4754360">and</span> <span
  m="4754510">you</span> <span m="4754590">can</span> <span
  m="4754730">play</span> <span m="4754960">around</span> <span
  m="4755220">with</span> <span m="4755330">the</span> <span
  m="4755390">d</span> <span m="4755660">and</span> <span m="4755780">the</span>
  <span m="4755860">c</span> <span m="4756400">and</span> <span
  m="4756580">choose</span> <span m="4756950">d</span> <span
  m="4757290">equals</span> <span m="4757430">8c,</span> <span
  m="4758980">you</span> <span m="4759250">realize</span> <span
  m="4759580">that</span> <span m="4759720">this</span> <span
  m="4759890">is</span> <span m="4759980">going</span> <span
  m="4760100">to</span> <span m="4760160">be</span> <span m="4760300">a</span>
  <span m="4760360">minuscule</span> <span m="4761230">probability.</span> <span
  m="4762640">And</span> <span m="4764710">you</span> <span
  m="4764810">can</span> <span m="4764930">turn</span> <span
  m="4765140">that</span> <span m="4765280">around</span> <span
  m="4766200">to</span> <span m="4766610">a</span> <span
  m="4766930">polynomial--</span> <span m="4767790">again,</span> <span
  m="4768040">a</span> <span m="4768080">little</span> <span
  m="4768230">bit</span> <span m="4768320">of</span> <span
  m="4768410">algebra.</span> <span m="4769180">But</span> <span
  m="4769440">you</span> <span m="4770530">can</span> <span
  m="4770660">show</span> <span m="4770990">this</span> <span
  m="4771250">result</span> <span m="4771690">on</span> <span
  m="4771840">here</span> <span m="4772990">that</span> <span
  m="4773210">says</span> <span m="4773920">that</span> <span
  m="4774110">the</span> <span m="4774180">number</span> <span
  m="4774420">of</span> <span m="4774520">coin</span> <span
  m="4774820">flips</span> <span m="4775240">until</span> <span
  m="4775570">c</span> <span m="4775820">log n</span> <span
  m="4776220">heads</span> <span m="4776980">is</span> <span
  m="4777180">order</span> <span m="4777610">log n</span> <span
  m="4777880">with</span> <span m="4778040">high</span> <span
  m="4778210">probability</span> <span m="4779210">by</span> <span
  m="4779350">appropriately</span> <span m="4779940">choosing</span> <span
  m="4780340">the</span> <span m="4780560">constant</span> <span
  m="4781070">d</span> <span m="4781570">to</span> <span m="4781710">be</span>
  <span m="4781800">some</span> <span m="4782160">time/number</span> <span
  m="4783340">over</span> <span m="4784100">c.</span></p><p><span
  m="4785700">So</span> <span m="4786130">I'll</span> <span
  m="4786220">let</span> <span m="4786400">you</span> <span
  m="4786490">do</span> <span m="4786620">that</span> <span
  m="4786740">algebra.</span> <span m="4787250">But</span> <span
  m="4787410">this</span> <span m="4787640">one</span> <span
  m="4788020">last</span> <span m="4788380">thing</span> <span
  m="4789270">that--</span> <span m="4790220">we're</span> <span
  m="4790380">not</span> <span m="4790540">quite</span> <span
  m="4790800">done.</span> <span m="4791100">So</span> <span
  m="4791270">you</span> <span m="4791380">thought</span> <span m="4791700">we
  were</span> <span m="4791920">done,</span> <span m="4792560">but</span> <span
  m="4792700">we're</span> <span m="4792790">not</span> <span
  m="4793010">quite</span> <span m="4793260">done.</span> <span
  m="4793880">And</span> <span m="4794270">why</span> <span
  m="4795360">is</span> <span m="4795500">it</span> <span
  m="4795670">that</span> <span m="4795800">we're</span> <span
  m="4795930">not</span> <span m="4796150">quite</span> <span
  m="4796410">done?</span> <span m="4798220">Real</span> <span
  m="4798570">quick</span> <span m="4798750">question</span> <span
  m="4799120">worth</span> <span m="4799530">five</span> <span
  m="4800020">Frisbees.</span> <span m="4802370">Why</span> <span
  m="4802640">is</span> <span m="4802750">it</span> <span
  m="4802860">that</span> <span m="4802990">we're</span> <span
  m="4803100">not</span> <span m="4803330">quite</span> <span
  m="4803570">done?</span> <span m="4804620">What</span> <span
  m="4804770">did</span> <span m="4804860">I</span> <span
  m="4804950">say?</span> <span m="4805840">I</span> <span
  m="4806070">have</span> <span m="4806210">done</span> <span m="4806570">event
  A</span> <span m="4806930">and</span> <span m="4807370">event</span> <span
  m="4807640">B,</span> <span m="4808350">right?</span></p><p><span
  m="4808733">AUDIENCE: [INAUDIBLE].</span></p><p><span m="4810100">SRINIVAS
  DEVADAS: I</span> <span m="4810280">haven't</span> <span
  m="4810620">done</span> <span m="4812820">the</span> <span
  m="4812910">last</span> <span m="4813270">thing</span> <span
  m="4813600">which</span> <span m="4813800">is</span> <span
  m="4813950">to</span> <span m="4814070">show</span> <span
  m="4814490">that</span> <span m="4815590">probability</span> <span
  m="4816960">of</span> <span m="4818930">event</span> <span
  m="4819430">A--</span> <span m="4821930">this</span> <span
  m="4822070">is</span> <span m="4822210">with</span> <span
  m="4822400">high</span> <span m="4822530">probability</span> <span
  m="4823920">happens--</span> <span m="4825250">and</span> <span
  m="4825620">I</span> <span m="4825700">need</span> <span m="4825870">to</span>
  <span m="4825950">show</span> <span m="4826190">that</span> <span
  m="4826390">probability</span> <span m="4826910">of</span> <span
  m="4827040">event</span> <span m="4827420">A</span> <span
  m="4827835">and</span> <span m="4828250">event</span> <span
  m="4828540">B</span> <span m="4831860">happens--</span> <span
  m="4832950">or</span> <span m="4833260">this is</span> <span
  m="4833510">with</span> <span m="4834300">high</span> <span
  m="4834450">probability.</span> <span m="4835020">Or I should</span> <span
  m="4835365">just say</span> <span m="4835710">event A</span> <span
  m="4836040">and</span> <span m="4836310">event</span> <span
  m="4836550">B</span> <span m="4837430">happen</span> <span
  m="4840370">with</span> <span m="4840590">high</span> <span
  m="4840740">probability.</span></p><p><span m="4842510">And</span> <span
  m="4842910">you</span> <span m="4842980">can</span> <span
  m="4843090">see</span> <span m="4843250">that.</span> <span
  m="4843470">It</span> <span m="4843750">turns</span> <span
  m="4844040">out</span> <span m="4844160">it's</span> <span
  m="4844290">pretty</span> <span m="4844480">straightforward,</span> <span
  m="4845480">but</span> <span m="4846360">you</span> <span
  m="4846660">got</span> <span m="4846780">the</span> <span
  m="4846840">gist</span> <span m="4847080">of</span> <span
  m="4847180">it.</span> <span m="4847440">Thanks</span> <span
  m="4847670">for</span> <span m="4847740">being</span> <span
  m="4847900">so</span> <span m="4848020">patient.</span> <span
  m="4849020">And</span> <span m="4850020">there</span> <span
  m="4850520">you</span> <span m="4850690">go</span> <span
  m="4850850">guys.</span> <span m="4851870">Woah.</span></p>
uid: 3d7b84c968547fd60ae2be3b9e1e2a77
type: course
layout: video
---
