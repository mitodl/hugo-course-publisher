---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Lynch introduces
  asynchronous distributed algorithms.</p><p><strong>Instructors:</strong> Nancy
  Ann Lynch</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: kQ-UQAzcnzA
    parent_uid: 0e521636640fe0d169e7316908d3b369
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 344d6bec2f3117ccd3b3a648e9db6b08
  - id: kQ-UQAzcnzA.srt
    parent_uid: 0e521636640fe0d169e7316908d3b369
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-20-asynchronous-distributed-algorithms-shortest-paths-spanning-trees/kQ-UQAzcnzA.srt
    title: 3play caption file
    type: null
    uid: 52dcacc11e7bcd09392cdd67b63c3aae
  - id: kQ-UQAzcnzA.pdf
    parent_uid: 0e521636640fe0d169e7316908d3b369
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-20-asynchronous-distributed-algorithms-shortest-paths-spanning-trees/kQ-UQAzcnzA.pdf
    title: 3play pdf file
    type: null
    uid: b9670493c6519f5d296dd558751ddf88
  - id: Caption-3Play YouTube id-SRT
    parent_uid: 0e521636640fe0d169e7316908d3b369
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 8326596389b29416fab8e8741100d08a
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: 0e521636640fe0d169e7316908d3b369
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 17b159d67e959f3a2612a01f9032bedf
  - id: Video-YouTube-Stream
    media_location: kQ-UQAzcnzA
    parent_uid: 0e521636640fe0d169e7316908d3b369
    title: Video-YouTube-Stream
    type: Video
    uid: df5ea846f34610224257a1e0820d131c
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/kQ-UQAzcnzA/default.jpg'
    parent_uid: 0e521636640fe0d169e7316908d3b369
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: cf1f4b73df93e563206686ba3ff284d2
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: 0e521636640fe0d169e7316908d3b369
    title: Video-iTunes U-MP4
    type: Video
    uid: a0423b902852930d39613ff1fa0fa7a4
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec20_300k.mp4'
    parent_uid: 0e521636640fe0d169e7316908d3b369
    title: Video-Internet Archive-MP4
    type: Video
    uid: e6dccb9301463d7676202314e0f2bf75
inline_embed_id: >-
  58613250lecture20:asynchronousdistributedalgorithms:shortest-pathsspanningtrees37500271
order_index: 297
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-20-asynchronous-distributed-algorithms-shortest-paths-spanning-trees
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-20-asynchronous-distributed-algorithms-shortest-paths-spanning-trees
title: 'Lecture 20: Asynchronous Distributed Algorithms: Shortest-Paths Spanning Trees'
transcript: >-
  <p><span m="40">The</span> <span m="170">following</span> <span
  m="620">content</span> <span m="1210">is</span> <span m="1320">provided</span>
  <span m="1780">under</span> <span m="2029">a</span> <span
  m="2080">Creative</span> <span m="2480">Commons</span> <span
  m="2900">license.</span> <span m="4010">Your</span> <span
  m="4180">support</span> <span m="4730">will</span> <span m="4880">help</span>
  <span m="5100">MIT</span> <span m="5550">OpenCourseWare</span> <span
  m="6340">continue</span> <span m="6850">to</span> <span m="6970">offer</span>
  <span m="7370">high</span> <span m="7590">quality</span> <span
  m="8100">educational</span> <span m="8740">resources</span> <span
  m="9310">for</span> <span m="9500">free.</span> <span m="10700">To</span>
  <span m="10720">make</span> <span m="10930">a</span> <span
  m="10970">donation</span> <span m="11660">or</span> <span
  m="11900">view</span> <span m="12360">additional</span> <span
  m="12800">materials</span> <span m="13320">from</span> <span
  m="13510">hundreds</span> <span m="13920">of</span> <span m="14030">MIT</span>
  <span m="14440">courses,</span> <span m="15510">visit</span> <span
  m="15810">MIT</span> <span m="16190">OpenCourseWare</span> <span
  m="17240">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21370">PROFESSOR: OK,</span> <span m="21960">welcome</span> <span
  m="22330">back.</span> <span m="22830">This</span> <span m="22890">is</span>
  <span m="23030">the</span> <span m="23100">second</span> <span
  m="23460">half</span> <span m="23830">of</span> <span m="24010">our</span>
  <span m="24530">two</span> <span m="24710">lectures</span> <span
  m="25220">on</span> <span m="25360">distributed</span> <span
  m="25930">algorithms</span> <span m="26780">this</span> <span
  m="26970">week.</span> <span m="28341">I could</span> <span
  m="28800">turn</span> <span m="29030">that</span> <span m="29180">on,</span>
  <span m="29667">OK.</span> <span m="31130">All</span> <span
  m="31220">right,</span> <span m="32290">I'll</span> <span
  m="32380">start</span> <span m="32619">with</span> <span m="32729">a</span>
  <span m="32759">quick</span> <span m="32990">preview.</span> <span
  m="33970">This</span> <span m="34200">week,</span> <span
  m="34490">we're</span> <span m="34680">just</span> <span
  m="34940">looking</span> <span m="35270">at</span> <span
  m="35470">synchronous</span> <span m="36080">and</span> <span
  m="36270">asynchronous</span> <span m="37110">distributed</span> <span
  m="37650">algorithms,</span> <span m="38290">not</span> <span
  m="38470">worrying</span> <span m="38830">about</span> <span
  m="39750">interesting</span> <span m="40260">stuff</span> <span
  m="40550">like</span> <span m="40710">failures.</span></p><p><span
  m="42070">Last</span> <span m="42360">time</span> <span m="42570">we</span>
  <span m="42820">looked</span> <span m="43090">at</span> <span
  m="43190">leader</span> <span m="43420">election,</span> <span
  m="44010">maximal</span> <span m="44450">independent</span> <span
  m="45030">set,</span> <span m="45950">breadth-first</span> <span
  m="47000">spanning</span> <span m="47440">trees,</span> <span
  m="48290">and</span> <span m="48490">we</span> <span m="48620">started</span>
  <span m="49570">looking</span> <span m="49960">at</span> <span
  m="50160">shortest</span> <span m="50560">paths</span> <span
  m="50920">trees.</span> <span m="51860">We'll</span> <span
  m="52010">finish</span> <span m="52370">that</span> <span
  m="52670">today,</span> <span m="53140">and</span> <span m="53320">then</span>
  <span m="53450">we'll</span> <span m="53570">move</span> <span
  m="53840">on</span> <span m="54110">to</span> <span m="54300">the</span> <span
  m="54380">main</span> <span m="54600">topic</span> <span m="55050">for</span>
  <span m="55160">today,</span> <span m="55550">which</span> <span
  m="55680">is</span> <span m="56160">asynchronous</span> <span
  m="56980">distributed</span> <span m="57560">algorithms</span> <span
  m="58540">where</span> <span m="58670">things</span> <span
  m="58960">start</span> <span m="59250">getting</span> <span
  m="59500">much</span> <span m="59720">more</span> <span
  m="59880">complicated</span> <span m="60600">because</span> <span
  m="60800">not</span> <span m="61130">everything</span> <span
  m="61610">is</span> <span m="61750">going</span> <span m="62060">on</span>
  <span m="62730">in</span> <span m="62900">synchronous</span> <span
  m="63450">rounds.</span> <span m="64709">And</span> <span
  m="64830">we'll</span> <span m="64950">revisit</span> <span
  m="65440">the</span> <span m="65620">same</span> <span m="65930">two</span>
  <span m="66070">problems,</span> <span m="66660">breadth-first</span> <span
  m="67260">and</span> <span m="67380">shortest</span> <span
  m="67730">paths</span> <span m="68320">spanning</span> <span
  m="68710">trees.</span></p><p><span m="72320">Quick</span> <span
  m="72580">review,</span> <span m="73355">all</span> <span m="73700">of</span>
  <span m="74070">our</span> <span m="75950">algorithms</span> <span
  m="76670">are</span> <span m="77870">using</span> <span m="78390">a</span>
  <span m="78470">model</span> <span m="78810">that's</span> <span
  m="79010">based</span> <span m="79330">on</span> <span
  m="79610">undirected</span> <span m="80200">graph.</span> <span
  m="83110">Using</span> <span m="83790">this</span> <span
  m="83940">notation,</span> <span m="84510">gamma,</span> <span
  m="84920">for</span> <span m="85050">the</span> <span
  m="85130">neighbors</span> <span m="85620">of</span> <span m="85700">a</span>
  <span m="85750">vertex.</span> <span m="86562">We'll</span> <span
  m="86970">talk</span> <span m="87170">about</span> <span m="87380">the</span>
  <span m="87450">degree</span> <span m="87820">of</span> <span
  m="87900">a</span> <span m="87970">vertex.</span> <span m="88820">We</span>
  <span m="88940">have</span> <span m="89040">a</span> <span
  m="89080">process,</span> <span m="89870">then,</span> <span
  m="90250">associated</span> <span m="91010">with</span> <span
  m="91150">every</span> <span m="91370">vertex</span> <span m="91950">in</span>
  <span m="92060">the</span> <span m="92140">graph.</span> <span
  m="93290">And</span> <span m="93460">we</span> <span
  m="93550">associate</span> <span m="94290">communication</span> <span
  m="94940">channels</span> <span m="95680">in</span> <span
  m="95830">both</span> <span m="96080">directions</span> <span
  m="96980">on</span> <span m="97180">every</span> <span
  m="97480">edge.</span></p><p><span m="101040">Last</span> <span
  m="101360">time</span> <span m="101560">we</span> <span
  m="101780">looked</span> <span m="102050">at</span> <span
  m="102230">synchronous</span> <span m="102690">distributed</span> <span
  m="103290">algorithms</span> <span m="103910">in</span> <span
  m="104040">the</span> <span m="104100">synchronous</span> <span
  m="104620">model.</span> <span m="105800">We</span> <span
  m="105940">have</span> <span m="106030">the</span> <span
  m="106100">processes</span> <span m="106710">of</span> <span
  m="106790">the</span> <span m="106860">ground</span> <span
  m="107120">vertices,</span> <span m="108100">they</span> <span
  m="108200">communicate</span> <span m="108840">using</span> <span
  m="109160">messages.</span> <span m="110600">The</span> <span
  m="110720">processes</span> <span m="111440">have</span> <span
  m="112140">local</span> <span m="112540">ports</span> <span
  m="113020">that</span> <span m="113150">they</span> <span
  m="113270">know</span> <span m="113460">by</span> <span m="113620">some</span>
  <span m="113840">kind</span> <span m="114100">of</span> <span
  m="114210">local</span> <span m="114520">name,</span> <span
  m="115460">and</span> <span m="115620">the</span> <span
  m="115680">ports</span> <span m="116030">connect</span> <span
  m="116480">to</span> <span m="116630">their</span> <span
  m="116800">communication</span> <span m="117540">channel.</span></p><p><span
  m="118520">The</span> <span m="118650">algorithm</span> <span
  m="119290">executes</span> <span m="119940">in</span> <span
  m="120050">synchronous</span> <span m="120580">rounds</span> <span
  m="121010">where, in</span> <span m="121290">every</span> <span
  m="121600">around,</span> <span m="122340">every</span> <span
  m="122630">process</span> <span m="123310">is</span> <span
  m="123430">going</span> <span m="123720">to</span> <span
  m="124030">decide</span> <span m="124420">what</span> <span
  m="124570">to</span> <span m="124660">send</span> <span m="125070">on</span>
  <span m="125180">all</span> <span m="125330">of</span> <span
  m="125420">its</span> <span m="125620">ports,</span> <span
  m="126490">and</span> <span m="126640">the</span> <span
  m="126710">messages</span> <span m="127230">then</span> <span
  m="127410">get</span> <span m="127580">put</span> <span m="127750">into</span>
  <span m="127930">the</span> <span m="128000">channel</span> <span
  m="128370">delivered</span> <span m="128789">to</span> <span
  m="128900">the</span> <span m="128979">processes</span> <span
  m="129580">at</span> <span m="129660">the</span> <span m="129800">other</span>
  <span m="130039">end.</span> <span m="130940">And</span> <span
  m="131150">everybody</span> <span m="131620">looks</span> <span
  m="132090">at</span> <span m="132210">all</span> <span m="132350">the</span>
  <span m="132430">messages</span> <span m="132960">they</span> <span
  m="133090">get</span> <span m="133360">at</span> <span m="133460">that</span>
  <span m="133670">round</span> <span m="133970">all</span> <span
  m="134170">at</span> <span m="134280">once,</span> <span m="135120">and</span>
  <span m="135290">they</span> <span m="135410">determine</span> <span
  m="135890">a</span> <span m="135960">new</span> <span m="136110">state.</span>
  <span m="136500">They</span> <span m="136650">compute</span> <span
  m="137340">a</span> <span m="137450">new</span> <span m="137610">state</span>
  <span m="138130">based</span> <span m="138460">on</span> <span
  m="138750">all</span> <span m="138940">of</span> <span m="139040">those</span>
  <span m="139250">arriving</span> <span m="139600">messages.</span></p><p><span
  m="142610">We</span> <span m="142700">started</span> <span
  m="143040">with</span> <span m="143150">leader</span> <span
  m="143420">election.</span> <span m="145400">I</span> <span
  m="145500">won't</span> <span m="145660">repeat</span> <span
  m="145940">the</span> <span m="146010">problem</span> <span
  m="146380">definition,</span> <span m="147010">but</span> <span
  m="147130">here's</span> <span m="147370">the</span> <span
  m="147460">results</span> <span m="147930">that</span> <span
  m="148050">we</span> <span m="148160">got</span> <span m="148400">last</span>
  <span m="148700">time.</span> <span m="149670">We</span> <span
  m="149830">looked</span> <span m="150090">at</span> <span m="150270">a</span>
  <span m="150310">special</span> <span m="150780">case</span> <span
  m="151260">of</span> <span m="151380">a</span> <span m="151430">graph</span>
  <span m="151810">that's</span> <span m="152010">just</span> <span
  m="152320">a</span> <span m="152580">simple</span> <span
  m="152990">clique.</span> <span m="154090">And</span> <span
  m="154940">if</span> <span m="155070">the</span> <span
  m="155150">processes</span> <span m="156110">don't</span> <span
  m="156390">have</span> <span m="156770">any</span> <span
  m="157760">distinguishing</span> <span m="158480">information,</span> <span
  m="159130">like</span> <span m="159310">unique</span> <span
  m="159640">identifiers,</span> <span m="161020">and</span> <span
  m="161220">they're</span> <span m="161330">deterministic,</span> <span
  m="162670">then</span> <span m="162830">there's</span> <span
  m="163050">no</span> <span m="163270">way</span> <span m="163600">to</span>
  <span m="163750">break</span> <span m="164090">the</span> <span
  m="164170">symmetry</span> <span m="164850">and</span> <span
  m="165030">you</span> <span m="165110">can</span> <span
  m="165280">prove</span> <span m="165580">an</span> <span
  m="165670">impossibility</span> <span m="166520">result</span> <span
  m="167760">that</span> <span m="167960">says</span> <span
  m="168370">that</span> <span m="169270">you</span> <span
  m="169440">can't--</span> <span m="169960">in</span> <span m="170110">a</span>
  <span m="170160">deterministic,</span> <span
  m="171020">indistinguishable</span> <span m="171770">case,</span> <span
  m="172100">you</span> <span m="172170">can't</span> <span
  m="172500">guarantee</span> <span m="173060">to</span> <span
  m="173170">elect</span> <span m="173510">a</span> <span
  m="173570">leader</span> <span m="174780">in</span> <span
  m="175150">this</span> <span m="175400">kind</span> <span m="175640">of</span>
  <span m="175700">a</span> <span m="175750">graph.</span></p><p><span
  m="177590">Just</span> <span m="177830">as</span> <span m="177940">an</span>
  <span m="178020">aside,</span> <span m="178360">I</span> <span
  m="178410">should</span> <span m="178600">say</span> <span
  m="178790">that</span> <span m="178910">distributed</span> <span
  m="179430">computing</span> <span m="179880">theory</span> <span
  m="180260">is</span> <span m="180750">just</span> <span
  m="181000">filled</span> <span m="181310">with</span> <span
  m="181450">impossibility</span> <span m="182190">results,</span> <span
  m="183200">and</span> <span m="183290">they're</span> <span
  m="183400">all</span> <span m="183520">based</span> <span m="183930">on</span>
  <span m="184090">this</span> <span m="184280">limitation</span> <span
  m="185040">of</span> <span m="185150">distributed</span> <span
  m="185670">computing</span> <span m="186120">where</span> <span
  m="186520">each</span> <span m="186810">node</span> <span
  m="187040">only</span> <span m="187310">knows</span> <span
  m="187640">what's</span> <span m="187850">happening</span> <span
  m="188750">to</span> <span m="188900">itself</span> <span
  m="189490">and</span> <span m="189930">in</span> <span m="190080">its</span>
  <span m="190230">neighborhood.</span> <span m="191130">Nobody</span> <span
  m="191460">knows</span> <span m="191760">what's</span> <span
  m="191960">happening</span> <span m="192440">in</span> <span
  m="192610">the</span> <span m="192700">entire</span> <span
  m="193800">system.</span> <span m="195190">That's</span> <span
  m="195380">a</span> <span m="195420">very</span> <span
  m="195790">strong</span> <span m="196300">limitation,</span> <span
  m="197100">and</span> <span m="197360">as</span> <span m="197500">you</span>
  <span m="197590">might</span> <span m="197760">expect,</span> <span
  m="198250">that</span> <span m="198390">would</span> <span
  m="198710">make</span> <span m="198990">a</span> <span m="199050">lot</span>
  <span m="199270">of</span> <span m="199330">things</span> <span
  m="199970">impossible</span> <span m="200700">or</span> <span
  m="200790">difficult.</span></p><p><span m="202880">Then</span> <span
  m="203020">we</span> <span m="203120">went</span> <span m="203310">on</span>
  <span m="203490">and</span> <span m="203600">got</span> <span
  m="203780">two</span> <span m="203930">positive</span> <span
  m="204440">results,</span> <span m="204880">a</span> <span
  m="204920">theorem</span> <span m="205330">that--</span> <span
  m="206520">well,</span> <span m="206810">an</span> <span
  m="206950">algorithm</span> <span m="207760">that</span> <span
  m="208450">is</span> <span m="208690">deterministic,</span> <span
  m="209590">but</span> <span m="209790">the</span> <span
  m="209860">processes</span> <span m="210460">have</span> <span
  m="210640">unique</span> <span m="210960">identifiers,</span> <span
  m="212210">and</span> <span m="212360">then</span> <span m="212490">you</span>
  <span m="212570">can</span> <span m="212720">elect</span> <span
  m="213040">a</span> <span m="213080">leader</span> <span
  m="213380">quickly.</span> <span m="215740">Or</span> <span
  m="216140">if</span> <span m="216300">you</span> <span m="216400">don't</span>
  <span m="216580">have</span> <span m="216740">unique</span> <span
  m="217050">identifiers</span> <span m="217690">but</span> <span
  m="217930">you</span> <span m="218070">have</span> <span
  m="219350">probability,</span> <span m="220160">so</span> <span
  m="220350">you</span> <span m="220480">can</span> <span m="220630">make</span>
  <span m="220820">random</span> <span m="221200">choices,</span> <span
  m="221750">you</span> <span m="221830">can</span> <span
  m="221980">essentially</span> <span m="223350">choose</span> <span
  m="223700">an</span> <span m="223790">identifier,</span> <span
  m="224850">and</span> <span m="225020">then</span> <span m="225140">it</span>
  <span m="225240">works</span> <span m="225650">almost</span> <span
  m="226010">as</span> <span m="226160">well</span> <span m="226910">with</span>
  <span m="227140">those</span> <span m="227360">identifiers.</span></p><p><span
  m="229840">Then</span> <span m="229970">we</span> <span
  m="230060">looked</span> <span m="230250">at</span> <span
  m="230330">maximal</span> <span m="230820">independent</span> <span
  m="231450">set.</span> <span m="233410">Remember</span> <span
  m="233770">what</span> <span m="233880">it</span> <span
  m="233980">means,</span> <span m="234780">no</span> <span
  m="235210">two</span> <span m="235380">neighbors</span> <span
  m="235840">should</span> <span m="236010">both</span> <span
  m="236250">be</span> <span m="236370">in</span> <span m="236480">the</span>
  <span m="236540">set,</span> <span m="236860">but</span> <span
  m="237060">you</span> <span m="237140">don't</span> <span
  m="237340">want</span> <span m="237480">to</span> <span m="237540">be</span>
  <span m="237640">able</span> <span m="237920">to</span> <span
  m="238500">add</span> <span m="238810">any</span> <span m="239010">more</span>
  <span m="239270">nodes</span> <span m="239670">while</span> <span
  m="239840">keeping</span> <span m="240740">these</span> <span
  m="240980">nodes</span> <span m="241280">independent.</span> <span
  m="242050">In</span> <span m="242150">other</span> <span
  m="242180">words,</span> <span m="242560">every</span> <span
  m="242750">node</span> <span m="243080">is</span> <span
  m="243240">either</span> <span m="243490">in</span> <span
  m="243620">the</span> <span m="243680">set</span> <span m="243990">or</span>
  <span m="244060">has</span> <span m="244240">a</span> <span
  m="244280">neighbor</span> <span m="244660">in</span> <span
  m="244790">the</span> <span m="244860">set.</span></p><p><span
  m="248810">And</span> <span m="249010">we</span> <span m="249100">gave</span>
  <span m="249370">this</span> <span m="249570">algorithm--</span> <span
  m="250190">I'm</span> <span m="250350">just</span> <span
  m="250980">including</span> <span m="251500">it</span> <span
  m="251600">here</span> <span m="252980">as</span> <span m="253140">a</span>
  <span m="253220">reminder--</span> <span m="254135">Luby's</span> <span
  m="254430">algorithm,</span> <span m="255010">which</span> <span
  m="255200">basically</span> <span m="255930">goes</span> <span
  m="256200">through</span> <span m="256370">a</span> <span
  m="256410">number</span> <span m="256700">of</span> <span
  m="256779">phases.</span> <span m="257649">In</span> <span
  m="257810">each</span> <span m="258019">phase,</span> <span
  m="258320">some</span> <span m="258980">processes</span> <span
  m="260260">decide</span> <span m="260720">to</span> <span
  m="260820">join</span> <span m="261800">the</span> <span m="261980">MIS</span>
  <span m="262730">and</span> <span m="262910">their</span> <span
  m="263040">neighbors</span> <span m="263910">decide</span> <span
  m="264450">not</span> <span m="264700">to</span> <span m="264790">join,</span>
  <span m="265220">and</span> <span m="265380">you</span> <span
  m="265470">just</span> <span m="265670">repeat</span> <span
  m="265760">this.</span> <span m="266720">You</span> <span m="266870">do</span>
  <span m="267010">this</span> <span m="267480">based</span> <span
  m="267810">on</span> <span m="267940">choosing</span> <span
  m="268320">random</span> <span m="268650">IDs</span> <span
  m="269070">again.</span> <span m="271900">And</span> <span
  m="272010">we</span> <span m="272110">proved</span> <span
  m="272570">that</span> <span m="273150">the</span> <span
  m="273270">theorem</span> <span m="274310">correctly</span> <span
  m="275040">computes</span> <span m="275620">an</span> <span
  m="275740">MIS,</span> <span m="276800">and</span> <span
  m="278280">with</span> <span m="278790">a</span> <span m="278910">good</span>
  <span m="279130">probability,</span> <span m="279820">all</span> <span
  m="279980">the</span> <span m="280050">nodes</span> <span
  m="280390">decide</span> <span m="280840">within</span> <span
  m="281210">only</span> <span m="283420">logarithmic</span> <span
  m="284020">phases,</span> <span m="284520">and</span> <span
  m="284740">here</span> <span m="284980">is</span> <span m="285120">the</span>
  <span m="285200">number</span> <span m="285480">of</span> <span
  m="285570">nodes.</span></p><p><span m="288360">All</span> <span
  m="288440">right,</span> <span m="288570">then</span> <span
  m="288790">went</span> <span m="288940">on</span> <span m="289100">to</span>
  <span m="289220">breadth-first</span> <span m="289760">spanning</span> <span
  m="290230">trees.</span> <span m="292360">Here,</span> <span
  m="292620">we</span> <span m="292740">have</span> <span m="293440">now</span>
  <span m="293660">a</span> <span m="293710">graph</span> <span
  m="294250">that</span> <span m="294420">already</span> <span
  m="294670">has</span> <span m="294890">a</span> <span
  m="294950">leader.</span> <span m="295320">It</span> <span
  m="295410">has</span> <span m="295580">a</span> <span
  m="295630">distinguished</span> <span m="296320">vertex.</span> <span
  m="298070">And</span> <span m="298440">the</span> <span
  m="298510">process</span> <span m="299060">that's</span> <span
  m="299240">sitting</span> <span m="299540">there</span> <span
  m="299770">knows</span> <span m="300160">that</span> <span
  m="300290">it's</span> <span m="300480">the</span> <span
  m="300560">leader.</span> <span m="301830">The</span> <span
  m="301900">processes</span> <span m="302450">now</span> <span
  m="302650">are</span> <span m="302740">going</span> <span m="303000">to</span>
  <span m="303100">produce</span> <span m="303540">a</span> <span
  m="303590">breadth-first</span> <span m="304150">spanning</span> <span
  m="304530">tree</span> <span m="304820">rooted</span> <span
  m="305670">at</span> <span m="305830">that</span> <span
  m="306000">vertex.</span> <span m="307770">Now,</span> <span
  m="308280">for</span> <span m="308440">the</span> <span m="308520">rest</span>
  <span m="308730">of</span> <span m="308800">the</span> <span
  m="308880">time,</span> <span m="309160">we'll</span> <span
  m="309310">assume</span> <span m="309700">unique</span> <span
  m="310020">identifiers,</span> <span m="310810">but</span> <span
  m="310980">the</span> <span m="311050">processes</span> <span
  m="311620">don't</span> <span m="311880">know</span> <span
  m="312130">anything</span> <span m="312510">about</span> <span
  m="312800">the</span> <span m="312860">graph</span> <span
  m="313210">except</span> <span m="313640">that</span> <span
  m="313870">their</span> <span m="314220">own</span> <span m="314460">ID</span>
  <span m="314980">and</span> <span m="315130">their</span> <span
  m="315240">neighbors'</span> <span m="315750">IDs.</span></p><p><span
  m="317130">And</span> <span m="317280">we</span> <span m="317360">want</span>
  <span m="317550">the</span> <span m="317620">processes</span> <span
  m="318350">to</span> <span m="318670">eventually</span> <span
  m="319260">output</span> <span m="320780">the</span> <span
  m="321050">ID</span> <span m="321410">of</span> <span m="321480">their</span>
  <span m="321620">parent.</span> <span m="323860">And</span> <span
  m="324080">here</span> <span m="324260">is,</span> <span
  m="324870">just</span> <span m="325210">to</span> <span
  m="325580">repeat,</span> <span m="326660">the</span> <span
  m="326790">simple</span> <span m="327210">algorithm</span> <span
  m="327780">that</span> <span m="327910">we</span> <span
  m="328060">used.</span> <span m="329310">Basically,</span> <span
  m="329810">it's</span> <span m="330400">processes</span> <span
  m="331020">just</span> <span m="331260">mark</span> <span
  m="332090">themselves</span> <span m="332740">as</span> <span
  m="332970">they</span> <span m="333090">get</span> <span
  m="333250">included</span> <span m="333720">in</span> <span
  m="333840">the</span> <span m="333920">tree.</span> <span m="335050">It</span>
  <span m="335130">starts</span> <span m="335460">out</span> <span
  m="335580">with</span> <span m="335700">just</span> <span
  m="335910">the</span> <span m="335990">root</span> <span
  m="336220">being</span> <span m="336440">marked.</span> <span
  m="336780">He</span> <span m="336850">sends</span> <span m="337160">a</span>
  <span m="337390">special</span> <span m="337830">search</span> <span
  m="338190">message</span> <span m="338640">out</span> <span
  m="338830">to</span> <span m="338910">his</span> <span
  m="339070">neighbors,</span> <span m="339550">and</span> <span
  m="339830">soon</span> <span m="340020">as</span> <span m="340120">they</span>
  <span m="340260">get</span> <span m="340460">it</span> <span
  m="340570">they</span> <span m="340710">get</span> <span
  m="340900">marked</span> <span m="341520">and</span> <span
  m="341700">pass</span> <span m="341980">it</span> <span m="342080">on.</span>
  <span m="343260">Everybody</span> <span m="343840">gets</span> <span
  m="344140">marked</span> <span m="344660">in</span> <span m="344770">a</span>
  <span m="344830">number</span> <span m="345190">of</span> <span
  m="345300">rounds</span> <span m="345720">that</span> <span
  m="345850">corresponds</span> <span m="346610">to</span> <span
  m="347570">their</span> <span m="347820">depth</span> <span
  m="348180">in--</span> <span m="348800">their</span> <span
  m="349090">distance</span> <span m="349650">from</span> <span
  m="349870">the</span> <span m="350610">root</span> <span m="350820">of</span>
  <span m="350900">the</span> <span m="350980">tree,</span> <span
  m="352110">[INAUDIBLE]</span> <span m="352420">from the</span> <span
  m="352500">tree.</span></p><p><span m="353930">We</span> <span
  m="354060">talked</span> <span m="354350">about</span> <span
  m="354590">correctness</span> <span m="355150">in</span> <span
  m="355260">terms</span> <span m="355560">of</span> <span
  m="355640">invariance.</span> <span m="356470">What</span> <span
  m="356720">this</span> <span m="356880">algorithm</span> <span
  m="357390">guarantees</span> <span m="358020">is,</span> <span
  m="358490">at</span> <span m="358670">the</span> <span m="358810">end</span>
  <span m="359110">of</span> <span m="359390">any</span> <span
  m="359590">number</span> <span m="359980">r of</span> <span
  m="360376">rounds,</span> <span m="361170">exactly</span> <span
  m="361690">the</span> <span m="361760">processes</span> <span
  m="362390">at</span> <span m="362450">distance</span> <span
  m="362980">up</span> <span m="363180">to r</span> <span m="363290">are</span>
  <span m="363780">marked,</span> <span m="364880">and</span> <span
  m="365320">the</span> <span m="365450">processes</span> <span
  m="366630">that</span> <span m="367010">are</span> <span
  m="367130">marked,</span> <span m="367500">have</span> <span
  m="367650">their</span> <span m="367770">parents</span> <span
  m="368170">defined.</span> <span m="369950">And</span> <span
  m="370140">if</span> <span m="370240">your</span> <span
  m="370350">parents</span> <span m="370900">defined--</span> <span
  m="371870">it's</span> <span m="372050">the</span> <span m="372230">UID</span>
  <span m="372570">of</span> <span m="372640">a</span> <span
  m="372690">process</span> <span m="374010">that</span> <span
  m="374440">has</span> <span m="374750">distance</span> <span
  m="375570">d</span> <span m="375790">minus</span> <span m="376180">1</span>
  <span m="376500">from</span> <span m="377230">the</span> <span
  m="377350">root.</span> <span m="377650">If</span> <span
  m="377750">you're</span> <span m="377880">a</span> <span
  m="377940">distance</span> <span m="378340">d,</span> <span
  m="378640">your</span> <span m="378790">parent</span> <span
  m="379160">should</span> <span m="379350">be</span> <span
  m="379460">somebody</span> <span m="379950">who's</span> <span
  m="381080">correct--</span> <span m="382160">has</span> <span
  m="382430">the</span> <span m="382490">correct</span> <span
  m="382850">distance</span> <span m="383290">d</span> <span
  m="383400">minus</span> <span m="383780">1.</span></p><p><span
  m="385940">We</span> <span m="386080">analyze</span> <span
  m="386520">the</span> <span m="386590">complexity.</span> <span
  m="388130">Time</span> <span m="388820">is</span> <span
  m="389210">counting</span> <span m="389600">the</span> <span
  m="389660">number</span> <span m="389970">of</span> <span
  m="390090">rounds.</span> <span m="391180">And</span> <span
  m="391320">that's</span> <span m="391570">going</span> <span
  m="391830">to</span> <span m="391930">be,</span> <span m="392040">at</span>
  <span m="392130">worst,</span> <span m="392470">the</span> <span
  m="392540">diameter</span> <span m="393180">of</span> <span
  m="393300">the</span> <span m="393370">network.</span> <span
  m="393790">It's</span> <span m="393960">really</span> <span
  m="394180">the</span> <span m="394270">distance</span> <span
  m="394770">from</span> <span m="395510">a</span> <span
  m="395540">particular</span> <span m="396010">vertex,</span> <span
  m="396720">v</span> <span m="396880">0.</span> <span m="397750">And</span>
  <span m="398120">the</span> <span m="398240">message</span> <span
  m="398600">complexity--</span> <span m="399940">there's</span> <span
  m="400130">only</span> <span m="400350">one</span> <span
  m="400570">message</span> <span m="400970">sent</span> <span
  m="401220">in</span> <span m="401310">each</span> <span
  m="401580">direction</span> <span m="402120">on</span> <span
  m="402240">each</span> <span m="402470">edge,</span> <span
  m="402800">so</span> <span m="402980">that's</span> <span
  m="403240">going</span> <span m="403500">to</span> <span m="403610">be</span>
  <span m="403880">only</span> <span m="405010">order</span> <span
  m="405280">of</span> <span m="405360">the</span> <span
  m="405430">number</span> <span m="405730">of</span> <span
  m="405820">edges.</span></p><p><span m="406660">And</span> <span
  m="406750">we</span> <span m="406820">talked</span> <span
  m="407100">about</span> <span m="407330">how</span> <span
  m="407490">you</span> <span m="407620">can</span> <span m="407800">get</span>
  <span m="408410">child</span> <span m="408920">pointers.</span> <span
  m="409400">This</span> <span m="409530">just</span> <span
  m="409730">gives</span> <span m="409910">you</span> <span
  m="409990">parents.</span> <span m="410470">But</span> <span
  m="411030">if</span> <span m="411220">you</span> <span m="411320">want</span>
  <span m="411520">to</span> <span m="411600">also</span> <span
  m="412020">find</span> <span m="412310">out</span> <span
  m="412480">your</span> <span m="412580">children,</span> <span
  m="413070">then</span> <span m="413230">every</span> <span
  m="413980">search</span> <span m="414380">message</span> <span
  m="414780">should</span> <span m="414950">get</span> <span m="415100">a</span>
  <span m="415140">response</span> <span m="415800">either</span> <span
  m="416060">saying</span> <span m="416560">you're</span> <span
  m="416700">my</span> <span m="416810">parent</span> <span m="417240">or</span>
  <span m="417340">you're</span> <span m="417460">not</span> <span
  m="417650">my</span> <span m="417770">parent.</span> <span
  m="419250">And</span> <span m="419410">we</span> <span m="419510">can</span>
  <span m="419680">do</span> <span m="419880">a</span> <span
  m="420190">termination</span> <span m="421000">using</span> <span
  m="421300">convergecast,</span> <span m="422240">and</span> <span
  m="422520">there's</span> <span m="422680">some</span> <span
  m="422870">applications</span> <span m="423560">we</span> <span
  m="423670">talked</span> <span m="423960">about</span> <span
  m="424180">as</span> <span m="424330">well.</span></p><p><span
  m="427320">All</span> <span m="427410">right,</span> <span
  m="427630">and</span> <span m="427790">then</span> <span m="428020">at</span>
  <span m="428150">the</span> <span m="428250">end</span> <span
  m="428420">of</span> <span m="428520">the</span> <span m="428670">hour,</span>
  <span m="429030">we</span> <span m="429550">started</span> <span
  m="430020">talking</span> <span m="430400">about</span> <span
  m="430670">a</span> <span m="430710">generalization,</span> <span
  m="431620">a</span> <span m="431670">breadth-first</span> <span
  m="432600">spanning</span> <span m="433030">trees,</span> <span
  m="433480">which</span> <span m="433780">adds</span> <span
  m="434200">weights</span> <span m="435050">so</span> <span
  m="435240">you</span> <span m="435340">have</span> <span
  m="435470">shortest</span> <span m="435890">paths</span> <span
  m="436290">trees.</span> <span m="437880">Now</span> <span
  m="438040">you</span> <span m="438170">have</span> <span
  m="438340">weights</span> <span m="438650">on</span> <span
  m="438770">the</span> <span m="438890">edges.</span> <span
  m="440170">Processes</span> <span m="440810">still</span> <span
  m="441070">have</span> <span m="441370">unique</span> <span
  m="441710">identifiers.</span> <span m="444670">They</span> <span
  m="444840">don't</span> <span m="445010">know</span> <span
  m="445140">anything</span> <span m="445450">about</span> <span
  m="445710">the</span> <span m="445780">graph,</span> <span
  m="446160">except</span> <span m="446520">their</span> <span
  m="446640">immediate</span> <span m="447060">neighborhood</span> <span
  m="447950">information.</span> <span m="449420">And</span> <span
  m="449560">they</span> <span m="449630">have</span> <span m="449790">to</span>
  <span m="449900">produce</span> <span m="450320">a</span> <span
  m="450390">shortest</span> <span m="450860">path</span> <span
  m="451230">spanning</span> <span m="451630">tree</span> <span
  m="452000">rooted</span> <span m="452460">at</span> <span
  m="453590">vertex</span> <span m="454130">v</span> <span
  m="454260">0.</span></p><p><span m="456270">You</span> <span
  m="456380">know</span> <span m="456490">what</span> <span m="456600">a</span>
  <span m="456630">spanning</span> <span m="457040">tree</span> <span
  m="457300">is</span> <span m="457610">and</span> <span m="457750">the</span>
  <span m="457810">shortest</span> <span m="458150">paths</span> <span
  m="458500">are</span> <span m="458610">in</span> <span m="458700">terms</span>
  <span m="459020">of</span> <span m="459160">the</span> <span
  m="459280">total</span> <span m="459650">weight</span> <span
  m="459890">of</span> <span m="459990">the</span> <span m="460060">path.</span>
  <span m="462290">Now</span> <span m="462410">we</span> <span
  m="462520">want</span> <span m="462800">each</span> <span
  m="463670">node</span> <span m="464060">each,</span> <span
  m="464280">process,</span> <span m="464780">to</span> <span
  m="465090">output</span> <span m="466260">its</span> <span
  m="466450">parent</span> <span m="467050">in</span> <span
  m="467160">the</span> <span m="467260">shortest</span> <span
  m="467670">path.</span> <span m="468070">And</span> <span
  m="468210">also</span> <span m="468640">the</span> <span
  m="468750">distance</span> <span m="469370">from</span> <span
  m="469780">the</span> <span m="470050">original</span> <span
  m="470830">vertex</span> <span m="471330">v</span> <span
  m="471520">0.</span></p><p><span m="475730">At</span> <span
  m="475950">the</span> <span m="476080">end</span> <span m="476240">of</span>
  <span m="476310">the</span> <span m="476450">hour,</span> <span
  m="477130">we</span> <span m="477350">looked</span> <span m="477690">at</span>
  <span m="478130">a</span> <span m="478240">version</span> <span
  m="478760">of</span> <span m="478910">Bellman-Ford,</span> <span
  m="479920">which</span> <span m="480210">you've</span> <span
  m="480540">already</span> <span m="480830">seen</span> <span
  m="483930">as</span> <span m="484090">a</span> <span
  m="484150">sequential</span> <span m="484690">algorithm.</span> <span
  m="485920">But</span> <span m="486120">as</span> <span m="486250">a</span>
  <span m="486310">distributed</span> <span m="486940">algorithm,</span> <span
  m="487850">everybody</span> <span m="488400">keeps</span> <span
  m="488770">track</span> <span m="489320">of</span> <span
  m="489540">their</span> <span m="489670">best</span> <span
  m="489950">guess,</span> <span m="490840">their</span> <span
  m="491040">best</span> <span m="491400">current</span> <span
  m="491690">guess,</span> <span m="492090">of</span> <span
  m="492250">the</span> <span m="492330">distance</span> <span
  m="493530">from</span> <span m="494230">the</span> <span
  m="494730">initial</span> <span m="495160">vertex.</span> <span
  m="496310">And</span> <span m="496490">they</span> <span
  m="496570">keep</span> <span m="496820">track</span> <span
  m="497190">of</span> <span m="497410">their</span> <span
  m="497620">parent</span> <span m="498760">on</span> <span
  m="499130">some</span> <span m="499420">path</span> <span
  m="499840">that</span> <span m="500500">gave</span> <span m="500760">it</span>
  <span m="501310">this</span> <span m="501600">distance</span> <span
  m="502030">estimate,</span> <span m="503090">and</span> <span
  m="503210">they</span> <span m="503300">keep</span> <span
  m="503570">their</span> <span m="503720">unique</span> <span
  m="504060">identifier.</span></p><p><span m="506100">The</span> <span
  m="506200">complete</span> <span m="506610">algorithm</span> <span
  m="507230">now</span> <span m="507540">is,</span> <span
  m="508580">everybody's</span> <span m="509110">going</span> <span
  m="509340">to</span> <span m="509410">keep</span> <span
  m="509630">sending</span> <span m="510020">their</span> <span
  m="510140">distance</span> <span m="510560">around--</span> <span
  m="511130">I</span> <span m="511190">mean</span> <span m="511350">we</span>
  <span m="511440">could</span> <span m="511600">optimize</span> <span
  m="512140">that,</span> <span m="512460">but</span> <span
  m="513120">this</span> <span m="513299">is</span> <span
  m="513380">simple.</span> <span m="515179">At</span> <span
  m="515260">every</span> <span m="515470">round,</span> <span
  m="515760">everybody</span> <span m="516210">sends</span> <span
  m="517299">their</span> <span m="517480">current</span> <span
  m="517830">distance</span> <span m="518260">estimate</span> <span
  m="518720">to</span> <span m="518840">all</span> <span m="518990">their</span>
  <span m="519120">neighbors.</span> <span m="520559">They</span> <span
  m="520659">collect</span> <span m="521200">the</span> <span
  m="521270">distance</span> <span m="521740">estimates</span> <span
  m="522280">from</span> <span m="522460">all</span> <span
  m="522600">their</span> <span m="522730">neighbors,</span> <span
  m="524169">and</span> <span m="524350">then</span> <span
  m="524480">they</span> <span m="524580">do</span> <span m="524770">a</span>
  <span m="524850">relaxation</span> <span m="525600">step.</span> <span
  m="525930">If</span> <span m="526160">they</span> <span m="526810">get</span>
  <span m="527050">anything</span> <span m="527500">that's</span> <span
  m="527680">better</span> <span m="528040">than</span> <span
  m="528220">what</span> <span m="528420">they</span> <span
  m="528560">had</span> <span m="528740">before,</span> <span
  m="529270">they</span> <span m="529400">look</span> <span m="529630">at</span>
  <span m="529730">the</span> <span m="529810">best</span> <span
  m="530260">new</span> <span m="530500">estimate</span> <span
  m="531040">they</span> <span m="531150">could</span> <span
  m="531350">get.</span></p><p><span m="532300">They</span> <span
  m="532410">take</span> <span m="532660">the</span> <span
  m="532720">minimum</span> <span m="533120">of</span> <span
  m="533220">their</span> <span m="533390">old</span> <span
  m="533700">estimate--</span> <span m="536150">stop</span> <span
  m="536510">shaking,</span> <span m="537730">good--</span> <span
  m="538480">and</span> <span m="538660">the</span> <span
  m="538720">minimum</span> <span m="539240">of</span> <span
  m="540220">all</span> <span m="540680">of</span> <span m="540880">the</span>
  <span m="542170">estimates</span> <span m="542730">they</span> <span
  m="542850">would</span> <span m="543040">get</span> <span m="543450">by</span>
  <span m="543570">looking</span> <span m="543980">at</span> <span
  m="544120">the</span> <span m="544490">incoming</span> <span
  m="545000">information</span> <span m="546060">plus</span> <span
  m="546320">adding</span> <span m="546600">the</span> <span
  m="546670">weight</span> <span m="547050">of</span> <span
  m="547250">the</span> <span m="547520">edge</span> <span
  m="547810">between</span> <span m="548800">the</span> <span
  m="548910">sender</span> <span m="551160">and</span> <span
  m="551380">the</span> <span m="551450">node</span> <span
  m="551650">itself.</span> <span m="553410">This</span> <span
  m="553610">way</span> <span m="554970">you</span> <span m="555140">may</span>
  <span m="555330">get</span> <span m="555480">a</span> <span
  m="555520">better</span> <span m="555840">estimate.</span> <span
  m="556470">And</span> <span m="556500">if</span> <span m="556630">you</span>
  <span m="556750">do,</span> <span m="557480">you</span> <span
  m="557880">would</span> <span m="558030">reset</span> <span
  m="558530">your</span> <span m="558650">parent</span> <span
  m="559700">to</span> <span m="559850">be</span> <span m="560230">the</span>
  <span m="560380">sender</span> <span m="561030">of</span> <span
  m="561950">this</span> <span m="562690">improved</span> <span
  m="563180">information.</span> <span m="564780">And</span> <span
  m="564930">again,</span> <span m="565310">you</span> <span
  m="565410">can</span> <span m="565480">pick--</span> <span
  m="566050">if</span> <span m="566200">there's</span> <span m="566530">a</span>
  <span m="566620">tie,</span> <span m="567140">you</span> <span
  m="567230">can</span> <span m="567420">pick</span> <span m="569470">any</span>
  <span m="569710">of</span> <span m="569840">the</span> <span
  m="570160">nodes</span> <span m="570510">that</span> <span
  m="570690">sense--</span> <span m="571530">the</span> <span
  m="571600">information</span> <span m="572230">leading</span> <span
  m="572530">to</span> <span m="572660">the</span> <span m="573050">best</span>
  <span m="573510">new</span> <span m="573910">guess,</span> <span
  m="575130">you</span> <span m="575260">can</span> <span m="575440">set</span>
  <span m="575650">your</span> <span m="575760">parent</span> <span
  m="576090">to</span> <span m="576170">any</span> <span m="576390">of</span>
  <span m="576520">those.</span> <span m="578810">And</span> <span
  m="579060">then</span> <span m="579230">this</span> <span
  m="579360">just</span> <span m="579580">repeats.</span></p><p><span
  m="582960">At</span> <span m="583530">the</span> <span m="583590">very</span>
  <span m="583880">end</span> <span m="584030">of</span> <span
  m="584120">the</span> <span m="584240">hour,</span> <span m="584520">we</span>
  <span m="584940">showed</span> <span m="585430">an</span> <span
  m="586250">animation,</span> <span m="587360">which</span> <span
  m="587560">I'm</span> <span m="587620">not</span> <span
  m="587740">going</span> <span m="587860">to</span> <span
  m="587920">repeat</span> <span m="588240">now,</span> <span
  m="588500">which</span> <span m="588700">basically</span> <span
  m="589210">shows</span> <span m="589620">how</span> <span
  m="589780">you</span> <span m="589910">can</span> <span m="590090">get</span>
  <span m="590250">lots</span> <span m="590560">of</span> <span
  m="590830">corrections.</span> <span m="592210">You</span> <span
  m="592340">can</span> <span m="592510">have</span> <span
  m="594120">many</span> <span m="594470">paths</span> <span
  m="594930">that</span> <span m="595070">are</span> <span m="595150">set</span>
  <span m="595440">up</span> <span m="595680">that</span> <span
  m="595940">look</span> <span m="596150">good</span> <span
  m="596510">after</span> <span m="596810">just</span> <span
  m="597070">one</span> <span m="597270">round,</span> <span
  m="597610">but</span> <span m="597760">then</span> <span
  m="597890">they</span> <span m="597990">get</span> <span
  m="598190">corrected</span> <span m="598830">as</span> <span
  m="599040">the</span> <span m="599140">rounds</span> <span
  m="599480">go</span> <span m="599670">on.</span> <span m="600660">You</span>
  <span m="600800">get</span> <span m="601090">much</span> <span
  m="601760">lower</span> <span m="602160">weight</span> <span
  m="602460">paths</span> <span m="602900">by</span> <span
  m="603040">having</span> <span m="603320">a</span> <span
  m="603410">roundabout,</span> <span m="605550">multi-hop</span> <span
  m="606440">path</span> <span m="606910">to</span> <span m="607080">a</span>
  <span m="607140">node.</span> <span m="607820">You</span> <span
  m="607930">can</span> <span m="608090">get</span> <span m="608230">a</span>
  <span m="608270">better</span> <span m="608560">total</span> <span
  m="608870">cost.</span></p><p><span m="611690">Here's</span> <span
  m="611910">where</span> <span m="612280">we</span> <span m="612820">got</span>
  <span m="613040">to</span> <span m="613180">last</span> <span
  m="613500">time.</span> <span m="615250">Now</span> <span
  m="615640">why</span> <span m="615860">does</span> <span
  m="615990">this</span> <span m="616160">work?</span> <span
  m="616590">Well</span> <span m="616850">what</span> <span m="617040">we</span>
  <span m="617150">need</span> <span m="617400">is</span> <span
  m="617530">eventually</span> <span m="618120">every</span> <span
  m="618320">process</span> <span m="618940">should</span> <span
  m="619120">get</span> <span m="619360">the</span> <span
  m="619420">correct</span> <span m="619810">distance.</span> <span
  m="621160">And</span> <span m="621380">the</span> <span
  m="621440">parent</span> <span m="621880">should</span> <span
  m="622080">be</span> <span m="622860">its</span> <span
  m="623090">predecessor</span> <span m="623840">on</span> <span
  m="624000">some</span> <span m="624230">shortest</span> <span
  m="624650">path.</span> <span m="626420">In</span> <span
  m="626740">order</span> <span m="626930">to</span> <span
  m="627010">prove</span> <span m="627360">that--</span> <span
  m="629920">you</span> <span m="630260">always</span> <span
  m="630530">look</span> <span m="630780">for</span> <span m="630950">an</span>
  <span m="631040">invariant,</span> <span m="631870">something</span> <span
  m="632390">that's</span> <span m="632650">true,</span> <span
  m="633390">at</span> <span m="633560">intermediate</span> <span
  m="634240">steps</span> <span m="634630">of</span> <span m="634730">the</span>
  <span m="634870">algorithm</span> <span m="635510">that</span> <span
  m="635680">you</span> <span m="635760">can</span> <span m="636040">show</span>
  <span m="636640">by</span> <span m="636880">induction</span> <span
  m="637460">will</span> <span m="637760">hold--</span> <span
  m="638110">and</span> <span m="638260">that</span> <span
  m="638380">will</span> <span m="638510">imply</span> <span
  m="639360">the</span> <span m="639450">result</span> <span
  m="639850">that</span> <span m="640060">you</span> <span
  m="640230">want</span> <span m="640470">at</span> <span m="640550">the</span>
  <span m="640690">end.</span></p><p><span m="642200">Here,</span> <span
  m="643480">what's</span> <span m="643710">the</span> <span
  m="643780">key</span> <span m="643960">invariant?</span> <span
  m="644520">At</span> <span m="644610">the</span> <span m="644760">end</span>
  <span m="645250">of</span> <span m="645960">some</span> <span
  m="646220">number</span> <span m="646680">r of</span> <span
  m="647178">rounds,</span> <span m="649670">what</span> <span
  m="649890">do</span> <span m="649980">processes</span> <span
  m="650610">have?</span> <span m="656650">After</span> <span
  m="657010">r</span> <span m="657250">rounds</span> <span
  m="657570">have</span> <span m="657730">passed,</span> <span
  m="658240">in</span> <span m="658380">this</span> <span m="658550">kind</span>
  <span m="658830">of</span> <span m="658930">algorithm,</span> <span
  m="661796">what</span> <span m="662180">do</span> <span m="662280">the</span>
  <span m="662410">estimates</span> <span m="662940">look</span> <span
  m="663160">like?</span></p><p><span m="668920">Well,</span> <span
  m="669050">after</span> <span m="669280">one</span> <span
  m="669530">round,</span> <span m="669990">everybody's</span> <span
  m="670560">got</span> <span m="670790">their</span> <span
  m="670920">best</span> <span m="672270">estimate</span> <span
  m="673480">that</span> <span m="673720">could</span> <span
  m="673980">happen</span> <span m="674350">on</span> <span m="674480">a</span>
  <span m="674630">single--</span> <span m="675380">that</span> <span
  m="675570">could</span> <span m="675700">result</span> <span
  m="676040">from</span> <span m="676220">a</span> <span m="676270">single
  hop</span> <span m="676910">path</span> <span m="677290">from</span> <span
  m="677510">v</span> <span m="677650">0.</span> <span m="678540">After</span>
  <span m="678850">two</span> <span m="679070">rounds,</span> <span
  m="679400">you</span> <span m="679490">also</span> <span m="679790">get</span>
  <span m="680010">the</span> <span m="680080">best</span> <span
  m="680400">guesses</span> <span m="680780">from</span> <span m="681000">two
  hop</span> <span m="681410">paths,</span> <span m="682220">and</span> <span
  m="682410">after</span> <span m="682670">r</span> <span
  m="682870">rounds</span> <span m="683260">in</span> <span
  m="683380">general,</span> <span m="685280">you</span> <span
  m="685340">have</span> <span m="685730">your</span> <span
  m="685910">distance</span> <span m="686470">and</span> <span
  m="686630">parent</span> <span m="687400">corresponding</span> <span
  m="688130">to</span> <span m="688360">a</span> <span
  m="688430">shortest</span> <span m="688890">path</span> <span
  m="689830">chosen</span> <span m="690220">from</span> <span
  m="690380">among</span> <span m="690760">those</span> <span
  m="691040">that</span> <span m="691160">have</span> <span m="691370">at</span>
  <span m="691460">most</span> <span m="691810">our</span> <span
  m="692020">hops.</span> <span m="693750">Yes?</span> <span
  m="696320">That</span> <span m="696420">makes</span> <span
  m="696590">sense?</span> <span m="698980">No?</span> <span
  m="699310">Yeah?</span> <span m="699990">OK.</span></p><p><span
  m="701610">All</span> <span m="701710">right,</span> <span
  m="701960">and</span> <span m="702120">if</span> <span m="702240">there</span>
  <span m="702380">is</span> <span m="702610">no</span> <span
  m="703680">path</span> <span m="704130">of</span> <span m="704350">r</span>
  <span m="704550">hops</span> <span m="704930">or</span> <span
  m="704990">fewer</span> <span m="705660">to</span> <span m="705790">get</span>
  <span m="706020">to</span> <span m="706180">a</span> <span
  m="706240">node,</span> <span m="706520">there's</span> <span
  m="706690">still</span> <span m="706890">going</span> <span
  m="707110">to</span> <span m="707220">have</span> <span
  m="707480">their</span> <span m="707670">distance</span> <span
  m="708090">estimate</span> <span m="708610">be</span> <span
  m="708930">infinity</span> <span m="709590">after</span> <span
  m="710320">r</span> <span m="710590">rounds.</span> <span
  m="712230">This</span> <span m="712420">is</span> <span m="712670">not</span>
  <span m="713070">a</span> <span m="713280">complete</span> <span
  m="713720">proof,</span> <span m="714130">but</span> <span
  m="714660">it's</span> <span m="714930">the</span> <span m="714990">key</span>
  <span m="715300">invariant</span> <span m="716030">that</span> <span
  m="716170">makes</span> <span m="716500">this</span> <span
  m="716730">work.</span> <span m="717350">You</span> <span
  m="717490">can</span> <span m="717680">see</span> <span m="717920">that</span>
  <span m="718110">after</span> <span m="719140">enough</span> <span
  m="719460">rounds</span> <span m="719960">corresponding</span> <span
  m="720700">to</span> <span m="721050">the</span> <span
  m="721450">number</span> <span m="721790">of</span> <span
  m="721890">nodes,</span> <span m="722320">for</span> <span
  m="722440">example,</span> <span m="723650">everybody</span> <span
  m="724110">will</span> <span m="724290">have</span> <span
  m="724570">the</span> <span m="724640">correct</span> <span
  m="725160">shortest</span> <span m="725570">path</span> <span
  m="726660">of</span> <span m="727000">any</span> <span
  m="727200">length.</span> <span m="728610">OK?</span></p><p><span
  m="730620">The</span> <span m="730710">number</span> <span
  m="731070">of</span> <span m="731210">rounds</span> <span
  m="731670">until</span> <span m="732170">every</span> <span
  m="732830">estimate</span> <span m="733320">stabilize--</span> <span
  m="733980">all</span> <span m="734170">the</span> <span
  m="734280">estimates</span> <span m="734730">stabilize,</span> <span
  m="737980">it's</span> <span m="738060">going</span> <span
  m="738180">to</span> <span m="738240">be</span> <span m="738350">n</span>
  <span m="738590">minus</span> <span m="738970">1.</span> <span
  m="739430">All</span> <span m="739850">right?</span> <span
  m="741130">Because</span> <span m="741550">the</span> <span
  m="741640">longest</span> <span m="743090">simple</span> <span
  m="743530">path</span> <span m="744200">to</span> <span m="744470">any</span>
  <span m="744710">node</span> <span m="745230">is</span> <span
  m="745470">going</span> <span m="745780">to</span> <span m="745910">be</span>
  <span m="746040">n</span> <span m="746200">minus</span> <span
  m="746560">1,</span> <span m="746750">if</span> <span m="746860">it</span>
  <span m="746960">goes</span> <span m="747230">through</span> <span
  m="747430">all</span> <span m="747600">the</span> <span
  m="747680">nodes</span> <span m="748440">of</span> <span m="748620">the</span>
  <span m="748690">network</span> <span m="749140">before</span> <span
  m="749500">reaching</span> <span m="749870">it.</span> <span
  m="751310">Makes</span> <span m="751550">sense?</span> <span
  m="753580">If</span> <span m="753700">you</span> <span m="753800">want</span>
  <span m="753930">to</span> <span m="753990">make</span> <span
  m="754160">sure</span> <span m="754400">you</span> <span
  m="754510">have</span> <span m="754760">the</span> <span
  m="754830">best</span> <span m="755170">estimate,</span> <span
  m="755610">you</span> <span m="755710">have</span> <span m="755880">to</span>
  <span m="755990">wait</span> <span m="756290">n</span> <span
  m="756440">minus</span> <span m="756810">1</span> <span
  m="757690">rounds</span> <span m="758280">to</span> <span
  m="758370">make</span> <span m="758570">sure</span> <span
  m="758820">the</span> <span m="758940">information</span> <span
  m="759540">has</span> <span m="759710">reached</span> <span
  m="760090">you.</span></p><p><span m="761560">The</span> <span
  m="761650">message</span> <span m="762060">complexity--</span> <span
  m="762800">well,</span> <span m="763230">since</span> <span
  m="763480">there's</span> <span m="763610">all</span> <span
  m="763730">these</span> <span m="763940">repeated</span> <span
  m="764420">estimates</span> <span m="764910">it's</span> <span
  m="765050">no</span> <span m="765220">longer</span> <span
  m="765590">just</span> <span m="766680">proportional</span> <span
  m="767300">to</span> <span m="767400">the</span> <span
  m="767470">number</span> <span m="767710">of</span> <span
  m="767810">edges,</span> <span m="768250">but</span> <span
  m="770000">you</span> <span m="770150">have</span> <span m="770270">to</span>
  <span m="770360">take</span> <span m="770620">into</span> <span
  m="770860">account</span> <span m="771210">that</span> <span
  m="771330">there</span> <span m="771450">can</span> <span m="771580">be</span>
  <span m="771690">many</span> <span m="772060">new</span> <span
  m="772300">estimates</span> <span m="772880">sent</span> <span
  m="773370">on</span> <span m="774630">each</span> <span
  m="774990">edge.</span> <span m="775580">In</span> <span
  m="775680">fact,</span> <span m="775890">the</span> <span
  m="775990">way</span> <span m="776010">I've</span> <span
  m="776150">written</span> <span m="776420">this,</span> <span
  m="777100">you</span> <span m="777250">just</span> <span
  m="778330">keep</span> <span m="778530">sending</span> <span
  m="778790">your</span> <span m="778880">distance</span> <span
  m="779400">at</span> <span m="779510">every</span> <span
  m="779750">round.</span> <span m="780250">It's</span> <span
  m="780370">going</span> <span m="780620">to</span> <span m="780720">be</span>
  <span m="783040">the</span> <span m="783190">number</span> <span
  m="783460">of</span> <span m="783550">edges</span> <span
  m="783930">times</span> <span m="784370">the</span> <span
  m="784440">number</span> <span m="784710">of</span> <span
  m="784800">rounds.</span> <span m="786400">You</span> <span
  m="786770">can</span> <span m="786900">do</span> <span
  m="787080">somewhat</span> <span m="787480">better</span> <span
  m="787760">than</span> <span m="787950">this,</span> <span
  m="788290">but</span> <span m="788460">it's</span> <span
  m="788680">worse</span> <span m="789050">than</span> <span
  m="789920">just</span> <span m="790230">the</span> <span
  m="790390">simple</span> <span m="790780">BFS</span> <span
  m="791330">case.</span></p><p><span m="793010">This</span> <span
  m="793200">is</span> <span m="793680">more</span> <span
  m="793890">expensive,</span> <span m="794440">because</span> <span
  m="794640">BFS</span> <span m="795240">just</span> <span m="795510">had</span>
  <span m="795780">diameter</span> <span m="796710">rounds</span> <span
  m="797400">and</span> <span m="797550">this</span> <span m="797720">now</span>
  <span m="797910">has</span> <span m="798710">n</span> <span
  m="799400">for</span> <span m="799560">n</span> <span m="799690">minus</span>
  <span m="799980">1</span> <span m="800180">rounds,</span> <span
  m="801150">and</span> <span m="801730">BFS</span> <span m="802300">just</span>
  <span m="802620">had</span> <span m="802800">one</span> <span
  m="803000">message</span> <span m="803540">ever</span> <span
  m="804090">sent</span> <span m="804410">on</span> <span m="804570">each</span>
  <span m="804890">edge,</span> <span m="805400">and</span> <span
  m="805440">now</span> <span m="805590">we</span> <span m="805700">have</span>
  <span m="805840">to</span> <span m="805960">send</span> <span
  m="806190">many.</span> <span m="807900">Comments?</span> <span
  m="808320">Questions?</span></p><p><span m="814670">Is</span> <span
  m="814770">it</span> <span m="814870">clear</span> <span
  m="815160">that</span> <span m="815330">the</span> <span
  m="815410">time</span> <span m="815810">bound</span> <span
  m="816180">really</span> <span m="816500">does</span> <span
  m="816810">depend</span> <span m="817250">on</span> <span m="817520">n</span>
  <span m="817970">and</span> <span m="818120">not</span> <span
  m="818360">on</span> <span m="818500">the</span> <span
  m="818580">diameter?</span> <span m="823190">For</span> <span
  m="823300">breadth-first</span> <span m="823890">search,</span> <span
  m="825420">it</span> <span m="825540">was</span> <span
  m="825700">enough</span> <span m="826040">just</span> <span
  m="826360">to</span> <span m="828380">have</span> <span
  m="828610">enough</span> <span m="828910">rounds</span> <span
  m="829390">to</span> <span m="829480">correspond</span> <span
  m="830180">to</span> <span m="830370">the</span> <span
  m="830760">actual</span> <span m="834970">distance</span> <span
  m="835550">and</span> <span m="835680">hops</span> <span m="836210">to</span>
  <span m="836550">each</span> <span m="836850">node,</span> <span
  m="837580">but</span> <span m="837760">now</span> <span m="839430">you</span>
  <span m="839550">need</span> <span m="839730">enough</span> <span
  m="840010">rounds</span> <span m="840430">to</span> <span
  m="840600">take</span> <span m="840850">care</span> <span m="841100">of</span>
  <span m="841180">these</span> <span m="841470">indirect</span> <span
  m="842040">paths</span> <span m="842530">that</span> <span
  m="842670">might</span> <span m="842940">go</span> <span
  m="843180">through</span> <span m="844040">many</span> <span
  m="844320">nodes</span> <span m="846040">but</span> <span
  m="846320">still</span> <span m="846610">end</span> <span m="846790">up</span>
  <span m="846930">with</span> <span m="847060">a</span> <span
  m="847380">shorter--</span> <span m="848630">with</span> <span
  m="848860">a</span> <span m="849120">smaller</span> <span
  m="849570">total</span> <span m="849900">weight.</span></p><p><span
  m="851860">Is</span> <span m="851960">it</span> <span m="852040">clear</span>
  <span m="852250">to</span> <span m="852320">everybody</span> <span
  m="852810">why</span> <span m="853010">the</span> <span
  m="853090">bound</span> <span m="853440">depends</span> <span
  m="853840">on</span> <span m="854010">n?</span> <span
  m="855280">Actually</span> <span m="855590">the</span> <span
  m="855700">animation</span> <span m="856370">that</span> <span
  m="856500">I</span> <span m="856610">had</span> <span m="856810">last</span>
  <span m="857180">time</span> <span m="857490">showed</span> <span
  m="858570">how</span> <span m="858810">there</span> <span
  m="858950">are</span> <span m="859020">lots</span> <span m="859290">of</span>
  <span m="859400">corrections,</span> <span m="860110">and</span> <span
  m="860840">you</span> <span m="861200">had</span> <span
  m="861390">enough--</span> <span m="861960">you</span> <span
  m="862100">had</span> <span m="863330">rounds</span> <span
  m="863730">that</span> <span m="863830">depended</span> <span
  m="864260">on</span> <span m="864370">the</span> <span m="864440">total</span>
  <span m="864750">number</span> <span m="865050">of</span> <span
  m="865160">nodes.</span> <span m="866330">Yes?</span> <span
  m="868074">OK.</span> <span m="869580">Yeah?</span></p><p><span
  m="870314">AUDIENCE: But</span> <span m="870798">could</span> <span
  m="871282">you</span> <span m="871766">keep</span> <span m="872250">track
  of</span> <span m="873218">each</span> <span m="873702">round</span> <span
  m="875154">if the values--</span> <span m="875638">if any</span> <span
  m="876122">of</span> <span m="876606">[INAUDIBLE]?</span> <span
  m="877574">If</span> <span m="878058">you--</span> <span m="878542">if</span>
  <span m="879026">everything stops</span> <span m="879510">changing
  after</span> <span m="879994">less  than</span> <span m="880478">n</span>
  <span m="880962">rounds,</span> <span m="881446">then you might not
  have</span> <span m="881930">to--</span></p><p><span m="882900">PROFESSOR:
  OK,</span> <span m="883270">so</span> <span m="883430">you're</span> <span
  m="883580">asking</span> <span m="883820">about</span> <span
  m="883980">termination?</span></p><p><span m="884820">AUDIENCE:
  Yeah.</span></p><p><span m="885240">PROFESSOR: Ah,</span> <span
  m="886220">OK,</span> <span m="886550">well</span> <span m="886980">so</span>
  <span m="887150">that's</span> <span m="887440">probably</span> <span
  m="887830">the</span> <span m="887900">next</span> <span
  m="888090">slide.</span> <span m="888910">First,</span> <span
  m="889160">let's</span> <span m="889290">deal</span> <span
  m="889460">with</span> <span m="889570">the</span> <span
  m="889630">child</span> <span m="889950">pointers,</span> <span
  m="890350">and</span> <span m="890490">then we'll come</span> <span
  m="890620">back</span> <span m="890790">to</span> <span
  m="890880">termination.</span> <span m="892590">First,</span> <span
  m="893170">this</span> <span m="893440">just</span> <span
  m="893670">gives</span> <span m="893870">you</span> <span
  m="893990">your</span> <span m="894120">parents.</span> <span
  m="894640">If</span> <span m="894760">you</span> <span m="894880">want</span>
  <span m="895120">your</span> <span m="895210">children,</span> <span
  m="895630">you</span> <span m="895720">can</span> <span m="896000">do</span>
  <span m="896200">the</span> <span m="896310">same</span> <span
  m="896620">thing</span> <span m="897630">that</span> <span
  m="897790">we</span> <span m="897900">did</span> <span m="898290">last</span>
  <span m="898620">time.</span> <span m="898810">When</span> <span
  m="898910">a</span> <span m="898950">process</span> <span
  m="899400">gets</span> <span m="899630">a</span> <span
  m="899670">message,</span> <span m="900940">and</span> <span
  m="901380">the</span> <span m="901490">message</span> <span
  m="902820">doesn't</span> <span m="903430">make</span> <span
  m="903940">the</span> <span m="904010">sender</span> <span
  m="904500">its</span> <span m="904700">parent,</span> <span
  m="905330">this</span> <span m="905540">is</span> <span m="905680">not</span>
  <span m="905990">giving</span> <span m="906300">it</span> <span
  m="906570">an</span> <span m="906680">improved</span> <span
  m="907270">distance.</span> <span m="908590">Then</span> <span
  m="908940">the</span> <span m="909110">node</span> <span m="909400">can</span>
  <span m="909550">just</span> <span m="909800">respond,</span> <span
  m="911040">non-parent.</span></p><p><span m="912820">But</span> <span
  m="913180">if</span> <span m="913330">a</span> <span m="913380">process</span>
  <span m="913880">receives</span> <span m="914350">a</span> <span
  m="914390">message</span> <span m="915090">that</span> <span
  m="915330">doesn't</span> <span m="915750">improve</span> <span
  m="916030">the</span> <span m="916100">distance,</span> <span
  m="916720">it</span> <span m="916840">says,</span> <span m="917790">OK,</span>
  <span m="918190">you</span> <span m="918340">are</span> <span
  m="918490">my</span> <span m="918620">parent,</span> <span
  m="920280">but</span> <span m="920700">it</span> <span m="920880">might</span>
  <span m="921100">have</span> <span m="921240">also</span> <span
  m="921640">told</span> <span m="922170">another</span> <span
  m="922550">node--</span> <span m="923070">it</span> <span
  m="923130">might</span> <span m="923320">have</span> <span
  m="923450">another</span> <span m="923780">parent,</span> <span
  m="924210">another</span> <span m="924550">node</span> <span
  m="924790">that</span> <span m="925010">previously</span> <span
  m="925590">it</span> <span m="925690">thought</span> <span
  m="925900">was</span> <span m="926090">its</span> <span
  m="926240">parent.</span> <span m="927940">It</span> <span
  m="928000">has</span> <span m="928150">to</span> <span m="928250">do</span>
  <span m="928380">more</span> <span m="928640">work,</span> <span
  m="929050">in</span> <span m="929220">this</span> <span
  m="929420">case,</span> <span m="929720">to</span> <span
  m="929820">correct</span> <span m="930520">the</span> <span
  m="930780">erroneous</span> <span m="931320">parent</span> <span
  m="931700">information.</span> <span m="933200">It</span> <span
  m="933290">has</span> <span m="933500">to</span> <span m="933610">send</span>
  <span m="935100">its</span> <span m="935330">previous</span> <span
  m="936230">parent</span> <span m="937090">a</span> <span
  m="937190">non-parent</span> <span m="937800">message</span> <span
  m="938270">to</span> <span m="938350">correct</span> <span
  m="938950">the</span> <span m="939180">previous</span> <span
  m="939620">parent</span> <span m="940040">message.</span> <span
  m="942300">Things</span> <span m="942630">are</span> <span
  m="942740">getting</span> <span m="943000">a</span> <span
  m="943520">little</span> <span m="943790">bit</span> <span
  m="943970">trickier</span> <span m="944460">here.</span></p><p><span
  m="946150">On</span> <span m="946330">the</span> <span m="946460">other</span>
  <span m="946700">end,</span> <span m="947130">if</span> <span
  m="947360">somebody</span> <span m="947860">is</span> <span
  m="947990">keeping</span> <span m="948320">track</span> <span
  m="948630">of</span> <span m="948720">its</span> <span
  m="948890">children,</span> <span m="949450">it</span> <span
  m="949560">has</span> <span m="949800">to</span> <span m="950410">make</span>
  <span m="950640">adjustments</span> <span m="951290">too</span> <span
  m="951770">because</span> <span m="952000">things</span> <span
  m="952300">can</span> <span m="952550">change</span> <span
  m="953050">during</span> <span m="953280">the</span> <span
  m="953380">algorithm.</span> <span m="955520">Let's</span> <span
  m="955690">say a</span> <span m="955830">process</span> <span
  m="956290">keeps</span> <span m="956550">track</span> <span
  m="956830">of</span> <span m="956910">its</span> <span
  m="957060">children</span> <span m="957540">in</span> <span
  m="957690">some</span> <span m="957870">set,</span> <span m="958350">it</span>
  <span m="958450">has</span> <span m="958580">a</span> <span
  m="958640">set</span> <span m="959120">children.</span> <span
  m="960790">If</span> <span m="960900">it</span> <span m="960980">gets</span>
  <span m="961190">a</span> <span m="961230">non-parent</span> <span
  m="961820">message</span> <span m="962270">from</span> <span
  m="962400">a</span> <span m="962450">child,</span> <span
  m="963620">even</span> <span m="963910">if</span> <span m="964510">that</span>
  <span m="964600">child</span> <span m="964910">might</span> <span
  m="965550">be</span> <span m="966410">from</span> <span m="966670">a</span>
  <span m="966710">neighbor.</span> <span m="967350">That</span> <span
  m="967550">neighbor</span> <span m="967840">might</span> <span
  m="968170">be</span> <span m="968420">in</span> <span m="968530">its</span>
  <span m="968660">set</span> <span m="968950">children,</span> <span
  m="969500">and</span> <span m="969650">this</span> <span
  m="969800">could</span> <span m="969940">be</span> <span m="970030">a</span>
  <span m="970090">correction,</span> <span m="970760">and</span> <span
  m="970850">then</span> <span m="971640">the</span> <span
  m="971730">process</span> <span m="972120">has</span> <span
  m="972290">to</span> <span m="972400">take</span> <span m="973260">that</span>
  <span m="973720">neighbor</span> <span m="974140">out</span> <span
  m="974510">of</span> <span m="974690">the</span> <span m="974770">set</span>
  <span m="975000">of</span> <span m="975110">children.</span></p><p><span
  m="978460">And</span> <span m="979270">suppose</span> <span
  m="979710">the</span> <span m="979780">process</span> <span
  m="981150">improves</span> <span m="981780">its</span> <span
  m="981960">own</span> <span m="982180">distance.</span> <span
  m="983710">Well,</span> <span m="983850">now,</span> <span
  m="984070">it's</span> <span m="984240">kind</span> <span m="984460">of</span>
  <span m="984530">starting</span> <span m="985080">over.</span> <span
  m="985660">It's</span> <span m="985910">going</span> <span
  m="986240">to</span> <span m="986740">send</span> <span m="987050">that</span>
  <span m="987210">distance</span> <span m="987810">to</span> <span
  m="988310">all</span> <span m="988530">of</span> <span m="988600">its</span>
  <span m="988750">neighbors</span> <span m="989150">again</span> <span
  m="989650">and</span> <span m="989900">collect</span> <span
  m="990280">new</span> <span m="990430">information</span> <span
  m="991040">about</span> <span m="991280">whether</span> <span
  m="991550">they're</span> <span m="992260">children</span> <span
  m="992680">or</span> <span m="992780">not.</span> <span m="993840">The</span>
  <span m="994270">simple</span> <span m="994630">thing</span> <span
  m="994850">to</span> <span m="994960">do</span> <span m="995200">here</span>
  <span m="995600">is</span> <span m="995840">just</span> <span
  m="996160">empty--</span> <span m="997170">zero</span> <span
  m="997570">out</span> <span m="997840">your</span> <span
  m="998030">children</span> <span m="998480">set</span> <span
  m="998730">and</span> <span m="998830">start</span> <span
  m="999180">over.</span> <span m="1000140">Now</span> <span
  m="1000390">you</span> <span m="1000550">send</span> <span
  m="1001430">your</span> <span m="1003830">new</span> <span
  m="1003980">messages</span> <span m="1004540">to</span> <span
  m="1004660">your</span> <span m="1004780">neighbors</span> <span
  m="1005310">and</span> <span m="1005490">wait</span> <span
  m="1005700">for</span> <span m="1005800">them</span> <span
  m="1005990">to</span> <span m="1006110">respond</span> <span
  m="1006590">again.</span> <span m="1007950">There's</span> <span
  m="1008770">tricky</span> <span m="1009110">bookkeeping</span> <span
  m="1009780">to</span> <span m="1009910">do</span> <span m="1010220">to</span>
  <span m="1010450">handle</span> <span m="1010840">corrections</span> <span
  m="1011740">as</span> <span m="1012420">the</span> <span
  m="1012530">structure</span> <span m="1013020">of</span> <span
  m="1013130">this</span> <span m="1013300">tree</span> <span
  m="1013530">changes,</span> <span m="1014350">so</span> <span
  m="1014960">getting</span> <span m="1015180">child</span> <span
  m="1015470">pointers</span> <span m="1015920">is</span> <span
  m="1015990">a</span> <span m="1016040">little</span> <span
  m="1016200">more</span> <span m="1016350">complicated</span> <span
  m="1017070">than</span> <span m="1017220">before.</span> <span
  m="1018210">Make</span> <span m="1018360">sense?</span></p><p><span
  m="1020950">All</span> <span m="1021060">right,</span> <span
  m="1021280">so</span> <span m="1021410">now</span> <span
  m="1021600">back</span> <span m="1021850">to</span> <span
  m="1022080">your</span> <span m="1022240">question,</span> <span
  m="1023490">termination.</span> <span m="1026849">How</span> <span
  m="1027089">do</span> <span m="1027210">all</span> <span
  m="1027319">the</span> <span m="1027390">processes</span> <span
  m="1028030">know</span> <span m="1028480">when</span> <span
  m="1028710">the</span> <span m="1029060">tree</span> <span
  m="1029540">is</span> <span m="1029849">complete?</span> <span
  m="1032160">In</span> <span m="1032250">fact,</span> <span
  m="1032460">we</span> <span m="1032550">have</span> <span m="1032670">a</span>
  <span m="1032710">worse</span> <span m="1033020">problem.</span> <span
  m="1033500">With</span> <span m="1033650">this</span> <span
  m="1033880">problem</span> <span m="1034220">we</span> <span
  m="1034339">hit</span> <span m="1034569">for</span> <span
  m="1035060">breadth</span> <span m="1035339">first</span> <span
  m="1035640">search,</span> <span m="1036050">but</span> <span
  m="1036150">we</span> <span m="1036250">have</span> <span
  m="1036270">an</span> <span m="1036339">even</span> <span
  m="1036569">worse</span> <span m="1036849">problem.</span> <span
  m="1037250">Now</span> <span m="1037500">what</span> <span
  m="1037630">is</span> <span m="1037780">that?</span> <span
  m="1041160">Yeah?</span></p><p><span m="1041638">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="1043550">PROFESSOR: Yeah,</span> <span
  m="1044359">before</span> <span m="1044800">we</span> <span
  m="1044970">had</span> <span m="1045490">each</span> <span
  m="1045849">individual</span> <span m="1046500">node.</span> <span
  m="1046950">Once</span> <span m="1047230">it</span> <span
  m="1047640">figured</span> <span m="1048040">out</span> <span
  m="1048200">who</span> <span m="1048310">its</span> <span
  m="1048470">parent</span> <span m="1048870">was,</span> <span
  m="1049700">it</span> <span m="1049810">could</span> <span
  m="1049920">just</span> <span m="1050090">output</span> <span
  m="1050420">that.</span> <span m="1051690">And</span> <span
  m="1051850">now,</span> <span m="1052410">you</span> <span
  m="1052580">can</span> <span m="1052730">figure</span> <span
  m="1053080">out</span> <span m="1053320">your</span> <span
  m="1053730">parent,</span> <span m="1054040">but</span> <span
  m="1054130">it's</span> <span m="1054240">just</span> <span
  m="1054430">a</span> <span m="1054470">guess</span> <span
  m="1054910">and</span> <span m="1055070">you</span> <span
  m="1055160">don't</span> <span m="1055310">know</span> <span
  m="1055980">when</span> <span m="1056190">you</span> <span
  m="1056270">can</span> <span m="1056530">output</span> <span
  m="1056910">this.</span> <span m="1057170">How</span> <span
  m="1057310">does</span> <span m="1057460">a</span> <span
  m="1057510">process</span> <span m="1058300">even--</span> <span
  m="1058740">an</span> <span m="1058840">individual</span> <span
  m="1059270">process</span> <span m="1059720">even</span> <span
  m="1059900">figure</span> <span m="1060240">out</span> <span
  m="1060400">its</span> <span m="1060560">own</span> <span
  m="1060790">parent</span> <span m="1061200">and</span> <span
  m="1061320">distance?</span></p><p><span m="1062660">There's</span> <span
  m="1062830">two</span> <span m="1063020">aspects</span> <span m="1063500">here
  in</span> <span m="1063660">termination.</span> <span m="1064400">One</span>
  <span m="1064540">is</span> <span m="1064660">how</span> <span
  m="1064760">do</span> <span m="1064840">you</span> <span
  m="1064920">know</span> <span m="1065080">the</span> <span
  m="1065170">whole</span> <span m="1065330">thing</span> <span
  m="1065540">is</span> <span m="1065690">finished,</span> <span
  m="1066520">but</span> <span m="1066630">the</span> <span
  m="1066740">other</span> <span m="1066880">one</span> <span
  m="1067030">is</span> <span m="1067420">even</span> <span
  m="1067950">how</span> <span m="1068120">do</span> <span
  m="1068200">you</span> <span m="1068310">know</span> <span
  m="1068890">when</span> <span m="1069190">you're</span> <span
  m="1069370">done</span> <span m="1069700">with</span> <span
  m="1069850">your</span> <span m="1070010">own</span> <span
  m="1070220">parent</span> <span m="1070640">and</span> <span
  m="1070790">distance?</span> <span m="1072630">Well,</span> <span
  m="1073570">if</span> <span m="1073790">you</span> <span
  m="1073940">knew</span> <span m="1074120">something</span> <span
  m="1074530">about</span> <span m="1074790">the</span> <span
  m="1074850">graph,</span> <span m="1075230">like</span> <span
  m="1075390">an</span> <span m="1075490">upper</span> <span
  m="1075700">bound</span> <span m="1076210">on</span> <span
  m="1076900">the</span> <span m="1077000">total</span> <span
  m="1077300">number</span> <span m="1077610">of</span> <span
  m="1077710">nodes,</span> <span m="1078070">then</span> <span
  m="1078230">you</span> <span m="1078310">could</span> <span
  m="1078460">just</span> <span m="1078660">wait</span> <span
  m="1078890">until</span> <span m="1079170">that</span> <span
  m="1079330">number</span> <span m="1079610">of</span> <span
  m="1079730">rounds</span> <span m="1080070">and</span> <span
  m="1080190">be</span> <span m="1080280">done.</span> <span
  m="1080600">But</span> <span m="1080730">what</span> <span
  m="1080850">if</span> <span m="1080960">you</span> <span
  m="1081220">don't</span> <span m="1081500">have</span> <span
  m="1081750">that</span> <span m="1081930">information</span> <span
  m="1083390">about</span> <span m="1083750">the</span> <span
  m="1083820">graph?</span> <span m="1085740">What</span> <span
  m="1085910">might</span> <span m="1086130">you</span> <span
  m="1086230">do?</span> <span m="1088620">Yeah?</span></p><p><span
  m="1089846">AUDIENCE: You want to</span> <span m="1091310">BFS</span> <span
  m="1091798">in</span> <span m="1092286">parallel</span> <span
  m="1092774">and</span> <span m="1093750">filter</span> <span
  m="1094238">down</span> <span m="1094726">the information</span> <span
  m="1095214">when</span> <span m="1095702">you've reached</span> <span
  m="1097166">the</span> <span m="1097654">size</span> <span m="1098142">of
  the</span> <span m="1098630">graph.</span></p><p><span m="1099130">PROFESSOR:
  Maybe.</span> <span m="1100400">I</span> <span m="1100550">think--</span>
  <span m="1101910">what</span> <span m="1102060">is</span> <span
  m="1102160">the</span> <span m="1102220">strategy</span> <span
  m="1102720">we</span> <span m="1102890">use</span> <span
  m="1103150">for</span> <span m="1103260">termination</span> <span
  m="1103980">for</span> <span m="1104070">BFS?</span> <span
  m="1104830">Let's</span> <span m="1105130">start</span> <span
  m="1105400">with</span> <span m="1105530">that</span> <span
  m="1105740">one.</span> <span m="1107110">It's</span> <span
  m="1107210">a</span> <span m="1107280">little</span> <span
  m="1107500">easier.</span> <span m="1108620">You</span> <span
  m="1108910">did</span> <span m="1109130">the</span> <span
  m="1109200">subtree</span> <span m="1109770">thing that</span> <span
  m="1110150">we</span> <span m="1110250">call</span> <span
  m="1110530">convergecast</span> <span m="1111500">the</span> <span
  m="1111610">information.</span> <span m="1112800">When</span> <span
  m="1113060">we</span> <span m="1113220">had</span> <span m="1113330">a</span>
  <span m="1113380">leaf</span> <span m="1113870">he</span> <span
  m="1113980">knew</span> <span m="1114120">he</span> <span
  m="1114220">was</span> <span m="1114340">a</span> <span
  m="1114410">leaf,</span> <span m="1114730">and</span> <span
  m="1114820">he</span> <span m="1114880">could</span> <span
  m="1115050">send</span> <span m="1115310">his</span> <span
  m="1115890">done</span> <span m="1116070">information</span> <span
  m="1116720">up</span> <span m="1116880">to</span> <span m="1116990">his</span>
  <span m="1117140">parent</span> <span m="1117610">and</span> <span
  m="1117740">that</span> <span m="1117900">got</span> <span
  m="1118700">convergecast</span> <span m="1119470">up</span> <span
  m="1119580">to</span> <span m="1119690">the</span> <span
  m="1119780">top</span> <span m="1120030">of</span> <span
  m="1120120">the</span> <span m="1120180">tree.</span></p><p><span
  m="1122530">Can</span> <span m="1122740">we</span> <span
  m="1122850">convergecast</span> <span m="1123840">in</span> <span
  m="1123970">this</span> <span m="1124130">setting?</span> <span
  m="1126520">Turns</span> <span m="1126850">out</span> <span
  m="1127000">we</span> <span m="1127100">can,</span> <span
  m="1127700">but</span> <span m="1127890">since</span> <span
  m="1128120">things</span> <span m="1128400">are</span> <span
  m="1128480">changing,</span> <span m="1130620">you're</span> <span
  m="1130820">going</span> <span m="1131120">to</span> <span
  m="1131250">be</span> <span m="1131600">sending</span> <span
  m="1132030">done</span> <span m="1132240">messages</span> <span
  m="1132960">and</span> <span m="1133050">then</span> <span
  m="1133170">something</span> <span m="1133510">might</span> <span
  m="1133700">change.</span> <span m="1134440">You</span> <span
  m="1134890">might</span> <span m="1135150">be</span> <span
  m="1135730">participating</span> <span m="1136500">in</span> <span
  m="1136590">the</span> <span m="1136660">convergecast</span> <span
  m="1137650">many</span> <span m="1137930">times.</span></p><p><span
  m="1140980">Since</span> <span m="1141240">the</span> <span
  m="1141290">tree</span> <span m="1141490">structure</span> <span
  m="1141950">is</span> <span m="1142110">changing,</span> <span
  m="1143730">the</span> <span m="1143820">main</span> <span
  m="1144020">idea</span> <span m="1144360">is</span> <span
  m="1145070">anybody</span> <span m="1145570">can</span> <span
  m="1145780">send</span> <span m="1146180">a</span> <span
  m="1146280">done</span> <span m="1146560">message</span> <span
  m="1147520">to</span> <span m="1147700">it's</span> <span
  m="1148470">current--</span> <span m="1150650">the</span> <span
  m="1150920">node</span> <span m="1151100">he</span> <span
  m="1151170">believes</span> <span m="1151550">is</span> <span
  m="1151660">his</span> <span m="1151820">parent,</span> <span
  m="1153000">provided</span> <span m="1153750">he's</span> <span
  m="1153980">received</span> <span m="1154640">responses</span> <span
  m="1155520">to</span> <span m="1155670">all</span> <span m="1155970">of</span>
  <span m="1156080">its</span> <span m="1157340">distance</span> <span
  m="1157800">messages</span> <span m="1159720">so</span> <span
  m="1159950">it</span> <span m="1160110">thinks</span> <span
  m="1161100">it</span> <span m="1161240">knows</span> <span
  m="1161660">who</span> <span m="1161820">all</span> <span
  m="1162060">its</span> <span m="1162250">children</span> <span
  m="1162660">are.</span> <span m="1164430">It</span> <span
  m="1164590">has</span> <span m="1164770">a</span> <span
  m="1164820">current</span> <span m="1165180">estimate</span> <span
  m="1165590">of</span> <span m="1165680">all</span> <span
  m="1165820">the</span> <span m="1165900">children</span> <span
  m="1166460">and--</span> <span m="1168710">so</span> <span
  m="1168850">if</span> <span m="1168940">it</span> <span
  m="1169010">knows</span> <span m="1169300">all</span> <span
  m="1169430">its</span> <span m="1169600">children</span> <span
  m="1170030">and</span> <span m="1170590">they</span> <span
  m="1170850">have</span> <span m="1170990">all</span> <span
  m="1171180">sent</span> <span m="1171590">him</span> <span
  m="1172240">done</span> <span m="1172530">messages.</span> <span
  m="1174730">For</span> <span m="1174880">all</span> <span
  m="1175040">your</span> <span m="1175410">current</span> <span
  m="1176060">children,</span> <span m="1176610">your</span> <span
  m="1177260">current</span> <span m="1177600">belief</span> <span
  m="1178060">or</span> <span m="1178140">who</span> <span
  m="1178230">your</span> <span m="1178390">children</span> <span
  m="1178810">are, if</span> <span m="1178970">they've</span> <span
  m="1179120">all</span> <span m="1180150">sent</span> <span
  m="1180430">you</span> <span m="1180560">done</span> <span
  m="1180800">messages,</span> <span m="1181450">then</span> <span
  m="1181640">you</span> <span m="1181720">can</span> <span
  m="1181890">send</span> <span m="1182480">a</span> <span
  m="1182600">done</span> <span m="1182810">message</span> <span
  m="1183230">up</span> <span m="1183370">the</span> <span
  m="1183450">tree.</span></p><p><span m="1186100">But</span> <span
  m="1186270">this</span> <span m="1186970">can</span> <span
  m="1188150">get</span> <span m="1188360">a</span> <span
  m="1188420">little</span> <span m="1188640">more</span> <span
  m="1188830">complicated</span> <span m="1189610">than</span> <span
  m="1189750">it</span> <span m="1189880">sounds,</span> <span
  m="1190430">because</span> <span m="1191070">you</span> <span
  m="1191210">can</span> <span m="1191380">change</span> <span
  m="1191810">who</span> <span m="1192050">your</span> <span
  m="1192310">children</span> <span m="1192800">are.</span> <span
  m="1195250">What</span> <span m="1195400">this</span> <span
  m="1195550">means</span> <span m="1195830">is</span> <span
  m="1195930">that</span> <span m="1196070">the</span> <span
  m="1196140">same</span> <span m="1196450">process</span> <span
  m="1197070">can</span> <span m="1197240">be</span> <span
  m="1197360">involved</span> <span m="1197840">several</span> <span
  m="1198190">times</span> <span m="1198730">in</span> <span
  m="1198870">the</span> <span m="1198930">convergecast,</span> <span
  m="1200400">based</span> <span m="1200760">on</span> <span
  m="1201890">improving</span> <span m="1202790">the</span> <span
  m="1202950">estimates.</span> <span m="1204760">Here's</span> <span
  m="1205480">an</span> <span m="1205620">example</span> <span
  m="1209280">of</span> <span m="1209390">the</span> <span
  m="1209460">kind</span> <span m="1209700">of</span> <span
  m="1209770">thing</span> <span m="1209970">that</span> <span
  m="1210070">can</span> <span m="1210210">happen.</span></p><p><span
  m="1210730">Let's</span> <span m="1210930">say</span> <span
  m="1211090">you</span> <span m="1211180">start</span> <span
  m="1211560">out,</span> <span m="1213310">you</span> <span
  m="1213420">have</span> <span m="1213600">these</span> <span
  m="1214870">huge</span> <span m="1215220">weights</span> <span
  m="1215610">and</span> <span m="1215700">then</span> <span
  m="1215840">you</span> <span m="1215950">have</span> <span
  m="1216220">a</span> <span m="1216340">long</span> <span
  m="1216900">path</span> <span m="1217370">with</span> <span
  m="1217550">small</span> <span m="1217890">weights.</span> <span
  m="1220810">i</span> <span m="1221050">0</span> <span
  m="1221360">starts</span> <span m="1221860">out</span> <span
  m="1222820">and</span> <span m="1223030">sends</span> <span
  m="1224160">its</span> <span m="1224540">distance</span> <span
  m="1225400">information</span> <span m="1226560">on</span> <span
  m="1226810">its</span> <span m="1227130">three</span> <span
  m="1228110">nodes,</span> <span m="1229320">to</span> <span
  m="1229420">its</span> <span m="1229580">three</span> <span
  m="1229770">neighbors.</span> <span m="1231670">And</span> <span
  m="1233500">this</span> <span m="1233740">guy</span> <span
  m="1234000">at</span> <span m="1234120">the</span> <span
  m="1234190">bottom</span> <span m="1237370">now</span> <span
  m="1237610">has</span> <span m="1237820">a</span> <span
  m="1237870">distance</span> <span m="1238320">estimate</span> <span
  m="1238760">of</span> <span m="1238820">100,</span> <span
  m="1239500">and</span> <span m="1239510">it's</span> <span
  m="1239670">going</span> <span m="1239910">to</span> <span
  m="1240000">decide</span> <span m="1240480">it's</span> <span
  m="1240630">a</span> <span m="1240700">leaf.</span> <span
  m="1242290">Why?</span> <span m="1242800">Because</span> <span
  m="1244320">when</span> <span m="1244480">it</span> <span
  m="1244610">sends</span> <span m="1245300">messages</span> <span
  m="1245890">to</span> <span m="1246130">its</span> <span
  m="1246420">children,</span> <span m="1247420">to</span> <span
  m="1247550">its</span> <span m="1247710">neighbors,</span> <span
  m="1248730">they're</span> <span m="1249050">not</span> <span
  m="1249360">able</span> <span m="1249620">to</span> <span
  m="1249760">improve</span> <span m="1250270">their</span> <span
  m="1250510">estimates</span> <span m="1251080">based</span> <span
  m="1251480">on</span> <span m="1251750">the</span> <span
  m="1251860">new</span> <span m="1252050">information</span> <span
  m="1252800">that</span> <span m="1252930">he's</span> <span
  m="1253080">sending.</span> <span m="1255120">This</span> <span
  m="1255330">guy</span> <span m="1255530">decides</span> <span
  m="1256150">that</span> <span m="1256270">he's</span> <span
  m="1256440">a</span> <span m="1256510">leaf</span> <span
  m="1257200">right</span> <span m="1257430">away,</span> <span
  m="1259310">and</span> <span m="1259570">he</span> <span
  m="1259680">sends</span> <span m="1260020">that</span> <span
  m="1260180">information</span> <span m="1260840">back</span> <span
  m="1261180">to</span> <span m="1262440">node i</span> <span
  m="1262930">0.</span></p><p><span m="1264800">On</span> <span
  m="1264960">the</span> <span m="1265050">other</span> <span
  m="1265220">hand,</span> <span m="1265600">this</span> <span
  m="1265730">guy</span> <span m="1266190">has</span> <span
  m="1267100">the</span> <span m="1267230">same</span> <span
  m="1267530">estimate</span> <span m="1267990">of</span> <span
  m="1268050">100.</span> <span m="1269320">And</span> <span
  m="1269820">he</span> <span m="1269940">sends</span> <span
  m="1270290">out</span> <span m="1270780">his</span> <span
  m="1271260">messages</span> <span m="1271880">to</span> <span
  m="1271990">try</span> <span m="1272200">to</span> <span
  m="1272290">find</span> <span m="1272630">out</span> <span
  m="1272810">if</span> <span m="1272880">he's</span> <span m="1273080">a</span>
  <span m="1273150">leaf,</span> <span m="1274360">but</span> <span
  m="1274510">he</span> <span m="1274590">finds</span> <span
  m="1274980">out</span> <span m="1275140">when</span> <span
  m="1275240">he</span> <span m="1275310">sends</span> <span
  m="1275680">a</span> <span m="1275730">message</span> <span
  m="1276220">this</span> <span m="1276480">way</span> <span
  m="1277220">that</span> <span m="1277380">he's</span> <span
  m="1277530">actually</span> <span m="1278030">able</span> <span
  m="1278380">to</span> <span m="1278530">improve</span> <span
  m="1279140">that</span> <span m="1279360">neighbor's</span> <span
  m="1279750">estimate,</span> <span m="1280280">because</span> <span
  m="1280430">that</span> <span m="1280590">was</span> <span
  m="1280730">infinity</span> <span m="1281700">till</span> <span
  m="1281880">then.</span> <span m="1282830">He</span> <span
  m="1282920">doesn't</span> <span m="1283210">think</span> <span
  m="1283430">he's</span> <span m="1283590">a  leaf.</span></p><p><span
  m="1285730">We</span> <span m="1285820">have</span> <span
  m="1285960">this</span> <span m="1286100">one</span> <span
  m="1286380">guy</span> <span m="1286620">who</span> <span
  m="1286690">thinks</span> <span m="1286970">he's</span> <span
  m="1287130">a</span> <span m="1287210">leaf</span> <span
  m="1287540">and</span> <span m="1287650">responds,</span> <span
  m="1288300">so</span> <span m="1288420">this</span> <span m="1288750">i</span>
  <span m="1288920">0</span> <span m="1289230">is</span> <span
  m="1289310">sitting</span> <span m="1289600">there.</span> <span
  m="1289990">He has</span> <span m="1290170">to</span> <span
  m="1290260">wait</span> <span m="1290530">to</span> <span
  m="1290630">hear</span> <span m="1290820">from</span> <span
  m="1290990">his</span> <span m="1291130">other</span> <span
  m="1291350">children.</span> <span m="1293790">OK</span> <span
  m="1294080">so</span> <span m="1294270">far?</span> <span
  m="1294950">All</span> <span m="1295170">right,</span> <span
  m="1295540">in</span> <span m="1295860">the</span> <span
  m="1296030">meantime,</span> <span m="1296600">the</span> <span
  m="1296680">messages</span> <span m="1297220">are</span> <span
  m="1297290">going</span> <span m="1297620">to</span> <span
  m="1297900">eventually</span> <span m="1298380">creep</span> <span
  m="1298710">around</span> <span m="1299770">and</span> <span
  m="1300870">this</span> <span m="1301100">node</span> <span
  m="1301350">is</span> <span m="1301470">going</span> <span
  m="1301790">to</span> <span m="1302210">get</span> <span m="1303130">a</span>
  <span m="1303210">smaller</span> <span m="1303640">estimate</span> <span
  m="1304110">based</span> <span m="1304370">on</span> <span
  m="1304470">the</span> <span m="1304540">length</span> <span
  m="1304900">of</span> <span m="1305020">that</span> <span
  m="1305240">long</span> <span m="1306000">many</span> <span
  m="1306250">hop</span> <span m="1306810">path.</span> <span
  m="1308810">Then</span> <span m="1309030">he's</span> <span
  m="1309260">going</span> <span m="1309570">to</span> <span
  m="1309930">decide</span> <span m="1310490">he</span> <span
  m="1310690">is</span> <span m="1310860">not</span> <span m="1311400">a</span>
  <span m="1311550">child</span> <span m="1312890">of</span> <span
  m="1313270">i</span> <span m="1313530">0.</span> <span m="1314620">He's</span>
  <span m="1314750">going</span> <span m="1314870">to</span> <span
  m="1314930">tell</span> <span m="1315190">i</span> <span m="1315280">0</span>
  <span m="1316500">I'm</span> <span m="1316650">really</span> <span
  m="1316870">not</span> <span m="1317060">your</span> <span
  m="1317170">child,</span> <span m="1318150">which</span> <span
  m="1318350">means</span> <span m="1318610">that</span> <span
  m="1318740">i</span> <span m="1318950">0</span> <span m="1319230">stops</span>
  <span m="1319610">waiting</span> <span m="1319950">for</span> <span
  m="1320150">him.</span></p><p><span m="1321750">But</span> <span
  m="1321820">also,</span> <span m="1322400">this</span> <span
  m="1322700">guy</span> <span m="1322980">decides</span> <span
  m="1323440">he's</span> <span m="1323590">not</span> <span
  m="1323820">a</span> <span m="1323870">child</span> <span
  m="1324340">as</span> <span m="1324480">well.</span> <span
  m="1325870">He</span> <span m="1325970">becomes</span> <span
  m="1326360">a</span> <span m="1326410">child</span> <span
  m="1326870">of</span> <span m="1326970">the</span> <span
  m="1327040">node</span> <span m="1327710">right</span> <span
  m="1327900">above</span> <span m="1328190">him.</span> <span
  m="1329530">So</span> <span m="1329780">i</span> <span m="1329990">0</span>
  <span m="1330350">now</span> <span m="1330740">will</span> <span
  m="1331270">realize</span> <span m="1331740">he</span> <span
  m="1331860">only</span> <span m="1332080">has</span> <span
  m="1333200">one</span> <span m="1333420">child,</span> <span
  m="1334750">but</span> <span m="1334920">this</span> <span
  m="1335110">guy</span> <span m="1336530">believes</span> <span
  m="1337130">he's</span> <span m="1337280">a leaf</span> <span
  m="1337660">again</span> <span m="1338220">after</span> <span
  m="1338530">trying</span> <span m="1338950">again</span> <span
  m="1340920">to</span> <span m="1341050">find</span> <span
  m="1341350">children.</span> <span m="1342200">And</span> <span
  m="1342350">now</span> <span m="1342820">the</span> <span
  m="1342950">done</span> <span m="1343460">information</span> <span
  m="1344160">propagates</span> <span m="1344770">all</span> <span
  m="1344920">the</span> <span m="1344990">way</span> <span
  m="1345180">up</span> <span m="1345350">the</span> <span
  m="1345430">tree,</span> <span m="1345750">which</span> <span
  m="1345930">is</span> <span m="1346040">now</span> <span
  m="1346230">just</span> <span m="1346460">this</span> <span
  m="1346620">one</span> <span m="1346850">long</span> <span
  m="1347080">path.</span></p><p><span m="1348870">They</span> <span
  m="1348980">start</span> <span m="1349620">trying</span> <span
  m="1350100">to</span> <span m="1350330">convergecast,</span> <span
  m="1351840">but</span> <span m="1352040">then,</span> <span
  m="1352290">oops,</span> <span m="1352570">they</span> <span
  m="1352710">were</span> <span m="1352900">wrong.</span> <span
  m="1353790">They</span> <span m="1353940">have</span> <span
  m="1354140">to</span> <span m="1354260">make</span> <span m="1354530">a</span>
  <span m="1354640">correction,</span> <span m="1355840">and</span> <span
  m="1356200">they</span> <span m="1356490">are</span> <span
  m="1357240">forming</span> <span m="1357700">a</span> <span
  m="1357960">new</span> <span m="1358150">tree.</span> <span
  m="1358490">Eventually,</span> <span m="1358890">the</span> <span
  m="1358960">tree</span> <span m="1359130">is</span> <span
  m="1359220">going</span> <span m="1359450">to</span> <span
  m="1359520">stabilize,</span> <span m="1360170">and</span> <span
  m="1360300">eventually</span> <span m="1360750">the</span> <span
  m="1360830">done</span> <span m="1361080">information</span> <span
  m="1361730">will</span> <span m="1361840">get</span> <span
  m="1362070">all</span> <span m="1362240">the</span> <span
  m="1362320">way</span> <span m="1362520">up</span> <span m="1362680">to</span>
  <span m="1362760">the</span> <span m="1362870">top,</span> <span
  m="1363990">but</span> <span m="1364170">there</span> <span
  m="1364270">could</span> <span m="1364410">be</span> <span
  m="1364510">lots</span> <span m="1364810">of</span> <span
  m="1364900">false</span> <span m="1365200">starts</span> <span
  m="1366070">in</span> <span m="1366370">the</span> <span
  m="1366460">mean</span> <span m="1366650">time.</span> <span
  m="1367510">It's</span> <span m="1367640">sort</span> <span
  m="1367800">of</span> <span m="1367880">confusing,</span> <span
  m="1368490">but</span> <span m="1368660">that's</span> <span
  m="1368910">the</span> <span m="1369300">kind</span> <span
  m="1369530">of</span> <span m="1369600">thing</span> <span
  m="1369800">that</span> <span m="1369910">happens.</span> <span
  m="1370344">Yeah?</span></p><p><span m="1372514">AUDIENCE: There may</span>
  <span m="1372950">be</span> <span m="1373411">a</span> <span
  m="1373872">process</span> <span m="1374333">in which</span> <span
  m="1375255">[INAUDIBLE]</span> <span m="1376213">and then</span> <span
  m="1377199">it</span> <span m="1377692">just</span> <span
  m="1378185">switches</span> <span m="1378678">its mind</span> <span
  m="1379171">at the</span> <span m="1379664">very end of it.</span> <span
  m="1380629">How do</span> <span m="1381098">you make sure</span> <span
  m="1381567">that, that</span> <span m="1382036">propagation</span> <span
  m="1382505">[INAUDIBLE]?</span></p><p><span m="1386860">PROFESSOR: Yes,</span>
  <span m="1387130">so</span> <span m="1387250">the</span> <span
  m="1387360">root</span> <span m="1387580">node</span> <span
  m="1387890">isn't</span> <span m="1388200">going</span> <span
  m="1388590">to</span> <span m="1389180">terminate</span> <span
  m="1389750">until</span> <span m="1390070">it</span> <span
  m="1390150">hears</span> <span m="1390590">from</span> <span
  m="1390810">everybody.</span> <span m="1391350">You</span> <span
  m="1391430">kind</span> <span m="1391630">of</span> <span
  m="1391690">have</span> <span m="1391790">to</span> <span
  m="1391870">close</span> <span m="1392250">out</span> <span
  m="1392510">the</span> <span m="1392590">whole</span> <span
  m="1392770">process.</span> <span m="1394100">It's</span> <span
  m="1394230">always</span> <span m="1394500">pending,</span> <span
  m="1394990">waiting</span> <span m="1395320">for</span> <span
  m="1395450">somebody,</span> <span m="1395940">if it</span> <span
  m="1396100">hasn't</span> <span m="1396380">heard</span> <span
  m="1396610">from</span> <span m="1396770">someone.</span> <span
  m="1397370">If</span> <span m="1397520">things</span> <span
  m="1397740">switch,</span> <span m="1398640">they'll</span> <span
  m="1398790">join</span> <span m="1399100">in</span> <span
  m="1399250">another</span> <span m="1399650">part</span> <span
  m="1399890">of</span> <span m="1399970">the</span> <span
  m="1400040">tree.</span> <span m="1400610">I</span> <span
  m="1401060">think</span> <span m="1401280">the</span> <span
  m="1401350">best</span> <span m="1401620">thing</span> <span
  m="1401780">to</span> <span m="1401870">do</span> <span
  m="1402070">here</span> <span m="1402290">is</span> <span
  m="1402390">sort</span> <span m="1402620">of</span> <span
  m="1403010">construct</span> <span m="1403440">some</span> <span
  m="1403580">little</span> <span m="1403810">examples</span> <span
  m="1404400">by</span> <span m="1404610">hand.</span> <span
  m="1405510">I</span> <span m="1405590">mean</span> <span
  m="1405700">we're</span> <span m="1405780">not</span> <span
  m="1405900">going</span> <span m="1406020">to</span> <span
  m="1406080">get</span> <span m="1406240">into</span> <span
  m="1406470">it</span> <span m="1406790">how</span> <span
  m="1407000">you</span> <span m="1407120">do</span> <span
  m="1407230">formal</span> <span m="1407560">proofs</span> <span
  m="1407910">of</span> <span m="1407990">things</span> <span
  m="1408270">like</span> <span m="1408490">this.</span></p><p><span
  m="1409430">We</span> <span m="1409580">don't</span> <span
  m="1409740">even</span> <span m="1409980">have</span> <span
  m="1411020">right</span> <span m="1411220">now</span> <span
  m="1411430">a</span> <span m="1411460">simulator</span> <span
  m="1412120">you</span> <span m="1412260">can</span> <span
  m="1412430">use</span> <span m="1412680">to</span> <span
  m="1412770">play</span> <span m="1413010">with</span> <span
  m="1413150">these</span> <span m="1413350">algorithms.</span> <span
  m="1414050">Although</span> <span m="1414300">if</span> <span
  m="1414420">anybody's</span> <span m="1414880">interested,</span> <span
  m="1415840">some</span> <span m="1416080">students</span> <span
  m="1417420">in</span> <span m="1417520">my</span> <span
  m="1417640">class</span> <span m="1418030">last</span> <span
  m="1418350">term,</span> <span m="1418660">actually,</span> <span
  m="1419000">wrote</span> <span m="1419230">a</span> <span
  m="1419280">simulator</span> <span m="1419735">that</span> <span
  m="1420190">might</span> <span m="1420490">be</span> <span
  m="1420640">available.</span> <span m="1424230">OK,</span> <span
  m="1427530">all</span> <span m="1427610">right,</span> <span
  m="1428810">so</span> <span m="1429050">that's</span> <span
  m="1429750">what</span> <span m="1429980">you</span> <span
  m="1430070">get</span> <span m="1430270">for</span> <span m="1430500">a</span>
  <span m="1430570">synchronous--</span> <span m="1431560">some</span> <span
  m="1431740">example</span> <span m="1432400">synchronous</span> <span
  m="1432940">distributed</span> <span m="1433500">algorithms.</span> <span
  m="1435030">Now</span> <span m="1435210">let's</span> <span
  m="1435460">look</span> <span m="1435610">at</span> <span
  m="1435710">something</span> <span m="1436330">more</span> <span
  m="1436710">complicated</span> <span m="1437560">when</span> <span
  m="1437800">you</span> <span m="1437970">get</span> <span
  m="1438200">into</span> <span m="1438930">asynchronous</span> <span
  m="1440060">algorithms.</span></p><p><span m="1442530">OK.</span> <span
  m="1443620">So</span> <span m="1443820">far</span> <span
  m="1445240">complications</span> <span m="1446140">that</span> <span
  m="1446320">you've</span> <span m="1446460">seen</span> <span
  m="1446820">over</span> <span m="1447190">the</span> <span
  m="1447310">rest</span> <span m="1447580">of</span> <span
  m="1447680">this</span> <span m="1447890">course,</span> <span
  m="1449400">you</span> <span m="1449530">have</span> <span
  m="1449670">now</span> <span m="1449830">processes</span> <span
  m="1450400">that</span> <span m="1450500">are</span> <span
  m="1450560">acting</span> <span m="1450910">concurrently.</span> <span
  m="1452140">And</span> <span m="1452430">we</span> <span
  m="1452670">had</span> <span m="1452820">a</span> <span
  m="1452870">little</span> <span m="1453120">bit</span> <span
  m="1453250">of</span> <span m="1453330">non-determinism,</span> <span
  m="1454560">nothing</span> <span m="1454870">important,</span> <span
  m="1456210">but</span> <span m="1456460">now</span> <span
  m="1456610">things</span> <span m="1456900">are</span> <span
  m="1456960">about</span> <span m="1457200">to</span> <span
  m="1457290">get</span> <span m="1457440">much</span> <span
  m="1457640">worse.</span> <span m="1459310">We</span> <span
  m="1459490">don't</span> <span m="1459670">have</span> <span
  m="1459840">rounds</span> <span m="1460200">anymore.</span> <span
  m="1462110">Now</span> <span m="1462310">we're</span> <span
  m="1462410">going</span> <span m="1462670">to</span> <span
  m="1462780">have</span> <span m="1463040">processes</span> <span
  m="1463580">taking</span> <span m="1463910">steps,</span> <span
  m="1464500">messages</span> <span m="1465050">getting</span> <span
  m="1465430">delivered</span> <span m="1466180">at</span> <span
  m="1466660">absolutely</span> <span m="1467150">arbitrary</span> <span
  m="1467740">times,</span> <span m="1468260">arbitrary</span> <span
  m="1468800">orders.</span></p><p><span m="1471240">The</span> <span
  m="1471320">processes</span> <span m="1471860">can</span> <span
  m="1472030">get</span> <span m="1472220">completely</span> <span
  m="1472700">out</span> <span m="1472840">of</span> <span
  m="1472930">sync,</span> <span m="1474740">and</span> <span
  m="1474800">so</span> <span m="1474990">you</span> <span
  m="1475110">have</span> <span m="1475360">lots</span> <span
  m="1475960">and</span> <span m="1476060">lots</span> <span
  m="1476250">more</span> <span m="1476490">non-determinism</span> <span
  m="1477740">in</span> <span m="1477910">the</span> <span
  m="1478020">algorithm.</span> <span m="1478580">The</span> <span
  m="1478650">non-determinism</span> <span m="1479530">has</span> <span
  m="1479710">to</span> <span m="1479800">do</span> <span
  m="1479970">with</span> <span m="1480110">who's</span> <span
  m="1480440">doing</span> <span m="1480740">what in what</span> <span
  m="1481200">order.</span> <span m="1484990">Understanding</span> <span
  m="1486080">that</span> <span m="1486400">type</span> <span
  m="1486650">of</span> <span m="1486780">algorithm</span> <span
  m="1487230">is</span> <span m="1487330">really</span> <span
  m="1487560">different</span> <span m="1488200">from</span> <span
  m="1488390">understanding</span> <span m="1489070">the</span> <span
  m="1489190">algorithms</span> <span m="1489820">that</span> <span
  m="1489990">you've</span> <span m="1490100">seen</span> <span
  m="1490340">all</span> <span m="1490480">term</span> <span
  m="1490820">and</span> <span m="1491070">even</span> <span
  m="1491370">synchronous</span> <span m="1493120">distributed</span> <span
  m="1493780">algorithms,</span> <span m="1494840">because</span> <span
  m="1495150">there</span> <span m="1495290">isn't</span> <span
  m="1495540">just</span> <span m="1495750">one</span> <span
  m="1496110">way</span> <span m="1496510">the</span> <span
  m="1496650">algorithm</span> <span m="1497210">is</span> <span
  m="1497340">going</span> <span m="1497660">to</span> <span
  m="1498610">execute.</span> <span m="1500450">The</span> <span
  m="1501010">execution</span> <span m="1501690">can</span> <span
  m="1501870">proceed</span> <span m="1502310">in</span> <span
  m="1502440">many</span> <span m="1502720">different</span> <span
  m="1503110">ways,</span> <span m="1504230">just</span> <span
  m="1504440">depending</span> <span m="1504900">on</span> <span
  m="1505190">the</span> <span m="1505320">order</span> <span
  m="1505620">of</span> <span m="1505760">the</span> <span
  m="1505820">steps.</span></p><p><span m="1507870">You</span> <span
  m="1508000">can't</span> <span m="1508540">ever</span> <span
  m="1508890">hope</span> <span m="1509220">to</span> <span
  m="1509340">understand</span> <span m="1509980">exactly</span> <span
  m="1510640">how</span> <span m="1510880">this</span> <span
  m="1511130">kind</span> <span m="1511380">of</span> <span
  m="1511470">algorithm</span> <span m="1512100">is</span> <span
  m="1512620">executing.</span> <span m="1514390">What</span> <span
  m="1514530">can</span> <span m="1514660">you</span> <span
  m="1514780">do?</span> <span m="1515010">Well,</span> <span
  m="1515520">you</span> <span m="1515620">can</span> <span
  m="1515720">play</span> <span m="1515940">with</span> <span
  m="1516090">it,</span> <span m="1516360">but</span> <span
  m="1516620">in</span> <span m="1516710">the</span> <span
  m="1516820">end,</span> <span m="1517710">you</span> <span
  m="1517750">have</span> <span m="1517930">to</span> <span
  m="1518020">understand</span> <span m="1518610">is</span> <span
  m="1518700">some</span> <span m="1518920">abstract</span> <span
  m="1519570">properties.</span> <span m="1520170">Some</span> <span
  m="1520330">properties</span> <span m="1520990">of</span> <span
  m="1521090">the</span> <span m="1521210">executions,</span> <span
  m="1522020">rather</span> <span m="1522300">than</span> <span
  m="1522800">exactly</span> <span m="1523360">what</span> <span
  m="1523540">happens</span> <span m="1523980">at</span> <span
  m="1524080">every</span> <span m="1524320">step,</span> <span
  m="1524680">and</span> <span m="1525010">that's</span> <span
  m="1525210">a</span> <span m="1525850">jump.</span> <span
  m="1526230">It's</span> <span m="1526370">a</span> <span
  m="1526420">new</span> <span m="1526560">way</span> <span
  m="1526740">of</span> <span m="1526810">thinking.</span></p><p><span
  m="1529580">We</span> <span m="1529680">can</span> <span
  m="1529830">look</span> <span m="1530000">at</span> <span
  m="1530090">asynchronous</span> <span m="1530760">stuff,</span> <span
  m="1531230">if</span> <span m="1531320">you</span> <span
  m="1531440">want,</span> <span m="1531790">from</span> <span
  m="1531880">my</span> <span m="1532020">book.</span> <span
  m="1533260">Now</span> <span m="1534070">we</span> <span
  m="1534170">still</span> <span m="1534380">have</span> <span
  m="1534570">processes</span> <span m="1535200">at</span> <span
  m="1535310">the</span> <span m="1535380">nodes</span> <span
  m="1535730">of</span> <span m="1535790">a</span> <span
  m="1535860">graph.</span> <span m="1537810">And</span> <span
  m="1538090">now</span> <span m="1538300">we</span> <span
  m="1538410">have</span> <span m="1539020">communication</span> <span
  m="1539750">channels</span> <span m="1540250">associated</span> <span
  m="1540940">with</span> <span m="1541090">the</span> <span
  m="1541220">edges.</span> <span m="1542610">Now,</span> <span
  m="1542820">the</span> <span m="1542890">processes</span> <span
  m="1543510">are</span> <span m="1543560">going</span> <span
  m="1543770">to</span> <span m="1543840">be</span> <span
  m="1543930">some</span> <span m="1544140">kind</span> <span
  m="1544390">of</span> <span m="1544460">automata,</span> <span
  m="1545800">but</span> <span m="1545980">the</span> <span
  m="1546050">channels</span> <span m="1546510">will</span> <span
  m="1546620">also</span> <span m="1546950">be</span> <span
  m="1547100">some</span> <span m="1547340">kind</span> <span
  m="1547590">of</span> <span m="1547670">automata.</span> <span
  m="1548540">We'll</span> <span m="1548810">have</span> <span
  m="1548960">all</span> <span m="1549130">these</span> <span
  m="1549330">components,</span> <span m="1550660">and</span> <span
  m="1550900">we'll</span> <span m="1551100">be</span> <span
  m="1552330">modeling</span> <span m="1552790">all</span> <span
  m="1552970">of</span> <span m="1553080">them.</span> <span
  m="1555040">Processes</span> <span m="1555570">still</span> <span
  m="1555820">have</span> <span m="1556010">their</span> <span
  m="1556130">ports.</span> <span m="1557690">They</span> <span
  m="1557830">need</span> <span m="1558030">not,</span> <span
  m="1558320">in</span> <span m="1558440">general,</span> <span
  m="1559010">have</span> <span m="1559790">identifiers.</span></p><p><span
  m="1562620">What's</span> <span m="1562840">a</span> <span
  m="1562890">channel?</span> <span m="1564970">A</span> <span
  m="1565010">channel</span> <span m="1565420">is--</span> <span
  m="1565960">it's</span> <span m="1566250">a</span> <span
  m="1566290">kind</span> <span m="1566510">of</span> <span
  m="1566590">an</span> <span m="1566680">automaton,</span> <span
  m="1567510">infinite</span> <span m="1567900">state</span> <span
  m="1568170">automaton,</span> <span m="1568760">that</span> <span
  m="1568880">has</span> <span m="1569460">inputs</span> <span
  m="1570330">and</span> <span m="1570530">some</span> <span
  m="1570710">outputs.</span> <span m="1572300">Here,</span> <span
  m="1573210">this is</span> <span m="1573420">just</span> <span
  m="1574900">a</span> <span m="1575000">picture</span> <span
  m="1575600">of</span> <span m="1575810">a</span> <span
  m="1576490">channel</span> <span m="1578360">from</span> <span
  m="1578560">node</span> <span m="1578730">u</span> <span m="1579620">to</span>
  <span m="1579940">node</span> <span m="1580230">v.</span> <span
  m="1581830">Channel</span> <span m="1582260">uv</span> <span
  m="1582830">is</span> <span m="1583070">just</span> <span
  m="1583300">this</span> <span m="1583890">cloud</span> <span
  m="1584450">thing</span> <span m="1584800">that</span> <span
  m="1584960">delivers</span> <span m="1585410">messages.</span> <span
  m="1587320">It</span> <span m="1587590">has</span> <span
  m="1587950">inputs.</span> <span m="1588620">The</span> <span
  m="1588730">inputs</span> <span m="1589160">are--</span> <span
  m="1589710">messages</span> <span m="1590310">get</span> <span
  m="1590500">sent</span> <span m="1590800">on</span> <span
  m="1590940">the</span> <span m="1591000">channel.</span> <span
  m="1592220">You</span> <span m="1592370">can</span> <span
  m="1592530">have</span> <span m="1593600">one</span> <span
  m="1593840">process</span> <span m="1594370">at</span> <span
  m="1594470">one</span> <span m="1594650">end</span> <span
  m="1594830">sending</span> <span m="1595200">a</span> <span
  m="1595240">message</span> <span m="1595620">m</span> <span
  m="1596680">and</span> <span m="1597190">the</span> <span
  m="1597320">outputs</span> <span m="1597790">at</span> <span
  m="1597880">the</span> <span m="1598030">other</span> <span
  m="1598270">end</span> <span m="1598480">are</span> <span
  m="1598620">the</span> <span m="1598710">deliveries,</span> <span
  m="1599510">let's</span> <span m="1599710">say</span> <span
  m="1599810">receive</span> <span m="1600440">message</span> <span
  m="1600860">m,</span> <span m="1601670">at</span> <span m="1602420">the</span>
  <span m="1602530">other</span> <span m="1602740">end,</span> <span
  m="1603535">node</span> <span m="1604000">v.</span></p><p><span
  m="1608450">To</span> <span m="1608580">model</span> <span
  m="1609010">this,</span> <span m="1609320">the</span> <span
  m="1609410">best</span> <span m="1609770">thing</span> <span
  m="1609950">is</span> <span m="1610080">actually</span> <span
  m="1610640">to--</span> <span m="1611400">instead</span> <span
  m="1611670">of</span> <span m="1611740">just</span> <span
  m="1611910">describing</span> <span m="1612390">what</span> <span
  m="1612510">it</span> <span m="1612620">does,</span> <span
  m="1612970">to</span> <span m="1613080">give</span> <span
  m="1613380">an</span> <span m="1613470">explicit</span> <span
  m="1614100">model</span> <span m="1614620">of</span> <span
  m="1614790">its</span> <span m="1614970">state</span> <span
  m="1615510">and</span> <span m="1616570">what</span> <span
  m="1616780">happens</span> <span m="1617290">when</span> <span
  m="1617480">the</span> <span m="1617580">inputs</span> <span
  m="1617940">and</span> <span m="1618030">outputs</span> <span
  m="1618440">occur.</span> <span m="1619850">If</span> <span
  m="1619980">you</span> <span m="1620090">want</span> <span
  m="1620330">these</span> <span m="1620580">messages</span> <span
  m="1621050">to</span> <span m="1621150">be</span> <span
  m="1621250">delivered--</span> <span m="1621550">let's</span> <span
  m="1621850">say</span> <span m="1622110">in</span> <span
  m="1622200">FIFO</span> <span m="1622640">order,</span> <span
  m="1623450">fine.</span> <span m="1623960">You</span> <span
  m="1624070">can</span> <span m="1624230">make</span> <span
  m="1624440">the</span> <span m="1624510">state</span> <span
  m="1624900">of</span> <span m="1625010">the</span> <span
  m="1625080">channel</span> <span m="1625550">be</span> <span
  m="1625740">an</span> <span m="1625830">actual</span> <span
  m="1626250">q.</span> <span m="1627250">mq</span> <span
  m="1627730">would</span> <span m="1627870">just</span> <span
  m="1628080">be</span> <span m="1628190">a</span> <span m="1628250">FIFO</span>
  <span m="1628890">queue</span> <span m="1629040">of</span> <span
  m="1629150">messages.</span> <span m="1630660">Starts</span> <span
  m="1631010">out</span> <span m="1631280">empty,</span> <span
  m="1631560">and</span> <span m="1631860">when</span> <span
  m="1632210">messages</span> <span m="1632620">get</span> <span
  m="1632800">sent,</span> <span m="1633070">they</span> <span
  m="1633140">get</span> <span m="1633300">added</span> <span
  m="1633570">to</span> <span m="1633690">the</span> <span
  m="1633800">end,</span> <span m="1634080">and</span> <span
  m="1634380">get</span> <span m="1634580">delivered</span> <span
  m="1635070">they</span> <span m="1635200">get</span> <span
  m="1635740">removed</span> <span m="1636150">from</span> <span
  m="1636300">the</span> <span m="1636370">beginning.</span></p><p><span
  m="1638260">All</span> <span m="1638480">that</span> <span
  m="1638720">we</span> <span m="1638840">need</span> <span
  m="1639050">to</span> <span m="1639140">describe--</span> <span
  m="1639900">this</span> <span m="1640070">is</span> <span m="1640200">a</span>
  <span m="1640260">sort</span> <span m="1640560">of</span> <span
  m="1640670">a</span> <span m="1640770">pseudo</span> <span
  m="1641100">code.</span> <span m="1641900">All</span> <span
  m="1641980">we</span> <span m="1642100">need</span> <span
  m="1642330">to</span> <span m="1642480">describe--</span> <span
  m="1643820">to</span> <span m="1643960">write</span> <span
  m="1644220">in</span> <span m="1644330">order</span> <span
  m="1644530">to</span> <span m="1644590">describe</span> <span
  m="1645050">what</span> <span m="1645200">this</span> <span
  m="1645720">channel</span> <span m="1646120">does,</span> <span
  m="1646760">is</span> <span m="1647210">what</span> <span
  m="1647450">happens</span> <span m="1648000">when</span> <span
  m="1648300">a</span> <span m="1648390">send</span> <span
  m="1648770">occurs,</span> <span m="1650110">and</span> <span
  m="1651140">when</span> <span m="1651360">can</span> <span
  m="1651550">this</span> <span m="1651770">channel</span> <span
  m="1652870">deliver</span> <span m="1653320">a</span> <span
  m="1653380">message,</span> <span m="1654010">and</span> <span
  m="1654160">what</span> <span m="1654280">happens</span> <span
  m="1654640">when</span> <span m="1654770">it</span> <span
  m="1654850">does</span> <span m="1655140">that.</span> <span m="1656340">A 
  send,</span> <span m="1657700">which</span> <span m="1657860">can</span> <span
  m="1658010">just</span> <span m="1658250">come</span> <span
  m="1658460">in</span> <span m="1658610">at</span> <span m="1658720">any</span>
  <span m="1658930">time,</span> <span m="1659350">and</span> <span
  m="1659520">the</span> <span m="1659600">effect</span> <span
  m="1659970">is</span> <span m="1660110">just</span> <span
  m="1660370">to</span> <span m="1660540">add</span> <span
  m="1660860">this</span> <span m="1661030">message</span> <span
  m="1661810">to</span> <span m="1661940">the</span> <span
  m="1662060">end</span> <span m="1662250">of</span> <span
  m="1662340">the</span> <span m="1662420">queue.</span></p><p><span
  m="1664630">The</span> <span m="1664910">recieve--</span> <span
  m="1667684">stop</span> <span m="1668090">moving.</span> <span
  m="1670710">The</span> <span m="1670840">receive--</span> <span
  m="1675240">that</span> <span m="1675320">cannot</span> <span
  m="1675660">be</span> <span m="1675760">construction.</span> <span
  m="1677420">We'd</span> <span m="1677530">hear</span> <span
  m="1677710">noise.</span> <span m="1679186">It's</span> <span
  m="1679650">gremlins.</span> <span m="1682320">We</span> <span
  m="1682480">have--</span> <span m="1684920">a</span> <span
  m="1685050">receive</span> <span m="1685860">can</span> <span
  m="1686070">occur</span> <span m="1687380">only</span> <span
  m="1687730">when</span> <span m="1687980">this</span> <span
  m="1688160">message</span> <span m="1688600">is</span> <span
  m="1688730">at</span> <span m="1688850">the</span> <span
  m="1688940">head</span> <span m="1689160">of</span> <span
  m="1689290">the</span> <span m="1689370">queue,</span> <span
  m="1691010">and</span> <span m="1691240">when</span> <span
  m="1691380">it</span> <span m="1691490">occurs,</span> <span
  m="1692150">it</span> <span m="1692290">gets</span> <span
  m="1692510">removed</span> <span m="1692920">from</span> <span
  m="1693100">the</span> <span m="1693180">queue.</span> <span
  m="1694420">Does</span> <span m="1694560">this</span> <span
  m="1694730">make</span> <span m="1694930">sense</span> <span
  m="1695230">as</span> <span m="1695360">a</span> <span
  m="1695420">description</span> <span m="1695990">of</span> <span
  m="1696100">what</span> <span m="1696240">a</span> <span
  m="1696280">channel</span> <span m="1696690">does?</span> <span
  m="1698100">Messages</span> <span m="1698590">come</span> <span
  m="1698790">in,</span> <span m="1699030">get</span> <span
  m="1699250">added</span> <span m="1699550">to</span> <span
  m="1699730">it,</span> <span m="1700090">and</span> <span
  m="1700240">then</span> <span m="1700490">messages</span> <span
  m="1700990">can</span> <span m="1701150">get</span> <span
  m="1701310">delivered</span> <span m="1701980">in</span> <span
  m="1702140">certain</span> <span m="1702460">situations,</span> <span
  m="1703800">and</span> <span m="1703950">they</span> <span
  m="1704010">get</span> <span m="1704170">removed.</span> <span
  m="1706610">That's</span> <span m="1706810">a</span> <span
  m="1706850">description</span> <span m="1707380">of</span> <span
  m="1707440">the</span> <span m="1707500">channel.</span> <span
  m="1708950">to</span> <span m="1709060">be</span> <span
  m="1709170">using</span> <span m="1709520">an</span> <span
  m="1709610">asynchronous</span> <span m="1710170">system.</span></p><p><span
  m="1711450">A</span> <span m="1711550">process--</span> <span
  m="1712330">the</span> <span m="1712470">rest</span> <span
  m="1712720">of</span> <span m="1712840">the</span> <span
  m="1713160">system</span> <span m="1713760">consists</span> <span
  m="1714130">of</span> <span m="1714220">processes</span> <span
  m="1715620">associated</span> <span m="1716200">with</span> <span
  m="1716300">the</span> <span m="1716480">graph</span> <span
  m="1716770">vertices.</span> <span m="1718340">Let's</span> <span
  m="1718520">say</span> <span m="1718760">pu</span> <span m="1719260">is</span>
  <span m="1719520">a</span> <span m="1719570">process</span> <span
  m="1720170">that's</span> <span m="1720400">associated</span> <span
  m="1721170">with</span> <span m="1721340">vertex</span> <span
  m="1721860">u.</span> <span m="1722890">But</span> <span
  m="1723050">I'm</span> <span m="1723190">writing</span> <span
  m="1723470">that</span> <span m="1723640">just</span> <span
  m="1723900">sort</span> <span m="1724100">of</span> <span
  m="1724190">as</span> <span m="1724570">a</span> <span
  m="1724660">shorthand,</span> <span m="1725170">because</span> <span
  m="1725430">u</span> <span m="1725680">is</span> <span m="1725830">the</span>
  <span m="1726150">vertex</span> <span m="1726730">in</span> <span
  m="1726820">the</span> <span m="1726890">graph,</span> <span
  m="1727870">and</span> <span m="1728070">the</span> <span
  m="1728140">process</span> <span m="1728550">doesn't</span> <span
  m="1728770">actually</span> <span m="1729130">know</span> <span
  m="1730450">the</span> <span m="1730570">name</span> <span
  m="1730830">of</span> <span m="1730940">the</span> <span
  m="1731010">vertex.</span> <span m="1731550">It</span> <span
  m="1731630">just</span> <span m="1731820">has</span> <span
  m="1732400">its</span> <span m="1732560">own</span> <span
  m="1732720">unique</span> <span m="1733060">ID</span> <span
  m="1733460">or</span> <span m="1733540">something,</span> <span
  m="1734080">but</span> <span m="1734310">I'm</span> <span
  m="1734550">going</span> <span m="1734730">to</span> <span
  m="1734790">be</span> <span m="1734860">a</span> <span
  m="1734910">little</span> <span m="1735080">sloppy</span> <span
  m="1735470">about</span> <span m="1735760">that</span> <span
  m="1736100">now.</span></p><p><span m="1738020">The</span> <span
  m="1738110">process</span> <span m="1738590">that</span> <span
  m="1738870">at</span> <span m="1738990">vertex</span> <span
  m="1739520">u</span> <span m="1741750">can</span> <span
  m="1742270">perform</span> <span m="1742770">send</span> <span
  m="1743250">outputs</span> <span m="1743840">to</span> <span
  m="1743960">put</span> <span m="1744170">messages</span> <span
  m="1744600">on</span> <span m="1744720">the</span> <span
  m="1744790">channel,</span> <span m="1745480">and</span> <span
  m="1745650">it</span> <span m="1745710">will</span> <span
  m="1746530">receive</span> <span m="1747240">inputs</span> <span
  m="1748220">for</span> <span m="1748390">messages</span> <span
  m="1748970">to</span> <span m="1749290">come</span> <span
  m="1749540">in</span> <span m="1749710">on</span> <span m="1749830">the</span>
  <span m="1749900">channel.</span> <span m="1750940">But</span> <span
  m="1751420">the</span> <span m="1751540">processes</span> <span
  m="1752160">might</span> <span m="1752410">also</span> <span
  m="1752890">have</span> <span m="1753170">some</span> <span
  m="1754600">external</span> <span m="1755540">interface</span> <span
  m="1756320">where</span> <span m="1756590">somebody</span> <span
  m="1757110">is</span> <span m="1758430">submitting</span> <span
  m="1758860">some</span> <span m="1759020">inputs</span> <span
  m="1759470">to</span> <span m="1759560">the</span> <span
  m="1759640">process,</span> <span m="1760210">and</span> <span
  m="1760320">the</span> <span m="1760380">process</span> <span
  m="1760840">has</span> <span m="1761010">to</span> <span
  m="1761110">produce</span> <span m="1761450">some</span> <span
  m="1761630">output</span> <span m="1761960">at</span> <span
  m="1762060">the</span> <span m="1762190">end.</span> <span
  m="1762940">There</span> <span m="1763040">can</span> <span
  m="1763170">be</span> <span m="1763290">other</span> <span
  m="1763520">inputs</span> <span m="1763910">and</span> <span
  m="1764010">outputs.</span> <span m="1768900">And</span> <span
  m="1769370">we'll</span> <span m="1769640">model</span> <span
  m="1769950">it</span> <span m="1770080">with</span> <span
  m="1770460">state</span> <span m="1770880">variables.</span></p><p><span
  m="1772180">Process</span> <span m="1772720">is</span> <span
  m="1772830">supposed</span> <span m="1773180">to</span> <span
  m="1773250">keep</span> <span m="1773490">taking</span> <span
  m="1773840">steps.</span> <span m="1774530">The</span> <span
  m="1774630">channel</span> <span m="1774990">is</span> <span
  m="1775060">supposed</span> <span m="1775360">to</span> <span
  m="1775430">keep</span> <span m="1775660">delivering</span> <span
  m="1776080">messages.</span> <span m="1778710">It's</span> <span
  m="1778920">a</span> <span m="1778980">property</span> <span
  m="1779400">called</span> <span m="1779730">liveness.</span> <span
  m="1780380">You</span> <span m="1780470">want</span> <span
  m="1780660">to</span> <span m="1780750">make</span> <span
  m="1780970">sure</span> <span m="1781260">that</span> <span
  m="1781470">your</span> <span m="1781590">components</span> <span
  m="1782250">in</span> <span m="1782330">your</span> <span
  m="1782470">system</span> <span m="1782880">all</span> <span
  m="1783010">keep</span> <span m="1783410">doing</span> <span
  m="1783700">things.</span> <span m="1784160">They</span> <span
  m="1784270">don't</span> <span m="1784480">just</span> <span
  m="1784860">do</span> <span m="1784980">some</span> <span
  m="1785220">steps</span> <span m="1785610">and</span> <span
  m="1785720">then</span> <span m="1785870">stop.</span></p><p><span
  m="1788450">Here's</span> <span m="1788670">a</span> <span
  m="1788900">simple</span> <span m="1789230">example.</span> <span
  m="1789980">A</span> <span m="1790100">process</span> <span
  m="1791100">that's</span> <span m="1791400">remembering</span> <span
  m="1791990">the</span> <span m="1792060">maximum</span> <span
  m="1793000">number</span> <span m="1793330">it's</span> <span
  m="1793480">ever</span> <span m="1793680">seen.</span> <span
  m="1794650">There's</span> <span m="1794790">a</span> <span
  m="1794840">max</span> <span m="1795240">process</span> <span
  m="1795740">automaton.</span> <span m="1796390">It</span> <span
  m="1796510">receives</span> <span m="1797570">some</span> <span
  m="1798560">messages</span> <span m="1799650">m,</span> <span
  m="1800110">some</span> <span m="1800350">value,</span> <span
  m="1801160">and</span> <span m="1801300">it</span> <span
  m="1801360">will</span> <span m="1801450">send</span> <span
  m="1801700">it</span> <span m="1801800">out.</span> <span
  m="1802860">It</span> <span m="1803020">keeps</span> <span
  m="1803280">track</span> <span m="1803610">of</span> <span
  m="1803710">the</span> <span m="1803780">max--</span> <span
  m="1804270">that's</span> <span m="1804720">max</span> <span
  m="1805670">state</span> <span m="1805990">variable.</span> <span
  m="1807180">it</span> <span m="1807350">starts</span> <span
  m="1807760">out</span> <span m="1807960">with</span> <span
  m="1808100">its</span> <span m="1808300">own</span> <span
  m="1809130">initial</span> <span m="1809530">values,</span> <span
  m="1810170">so</span> <span m="1810330">x</span> <span m="1810750">for</span>
  <span m="1810910">u.</span> <span m="1811240">x</span> <span
  m="1811520">of</span> <span m="1811640">u</span> <span m="1812400">is</span>
  <span m="1812580">its</span> <span m="1812900">initial</span> <span
  m="1813270">value.</span></p><p><span m="1814610">And</span> <span
  m="1814770">then</span> <span m="1814910">it</span> <span
  m="1815440">has--</span> <span m="1815800">for</span> <span
  m="1815970">every</span> <span m="1816690">neighbor,</span> <span
  m="1817820">it</span> <span m="1817960">has</span> <span m="1819100">a</span>
  <span m="1819220">little</span> <span m="1820170">queue--</span> <span
  m="1821410">here,</span> <span m="1821590">it's</span> <span
  m="1821720">just</span> <span m="1821890">a</span> <span
  m="1821930">Boolean--</span> <span m="1822850">asking</span> <span
  m="1823270">whether</span> <span m="1823520">it's</span> <span
  m="1823650">supposed</span> <span m="1824000">to</span> <span
  m="1824080">send</span> <span m="1825210">to</span> <span
  m="1825350">that</span> <span m="1825580">neighbor.</span> <span
  m="1829800">This</span> <span m="1830020">is</span> <span
  m="1830180">the</span> <span m="1830260">pseudocode</span> <span
  m="1830920">for</span> <span m="1831640">that</span> <span
  m="1831790">max</span> <span m="1832120">process.</span> <span
  m="1833020">What</span> <span m="1833240">does</span> <span
  m="1833390">it</span> <span m="1833510">do</span> <span
  m="1833680">when</span> <span m="1833820">it</span> <span
  m="1833930">receives</span> <span m="1834400">a</span> <span
  m="1834450">message?</span> <span m="1834900">Well,</span> <span
  m="1835070">it</span> <span m="1835170">sees</span> <span
  m="1835550">if</span> <span m="1835750">that</span> <span
  m="1836660">value</span> <span m="1837020">is</span> <span
  m="1837160">bigger</span> <span m="1837540">than</span> <span
  m="1837720">what</span> <span m="1837880">it</span> <span
  m="1837980">had</span> <span m="1838190">before,</span> <span
  m="1838940">and</span> <span m="1839090">if</span> <span
  m="1839190">so,</span> <span m="1839480">it</span> <span
  m="1839590">resets</span> <span m="1840090">the</span> <span
  m="1840170">max.</span> <span m="1841480">And</span> <span
  m="1841930">it</span> <span m="1842060">also</span> <span
  m="1842800">makes</span> <span m="1843140">a</span> <span
  m="1843200">note</span> <span m="1843490">that</span> <span
  m="1843610">it's</span> <span m="1843730">supposed</span> <span
  m="1844100">to</span> <span m="1844180">send</span> <span
  m="1844450">this</span> <span m="1844620">out</span> <span
  m="1844870">to</span> <span m="1844950">all</span> <span
  m="1845200">its</span> <span m="1845430">neighbors.</span> <span
  m="1845900">Whenever</span> <span m="1846270">it</span> <span
  m="1846380">gets</span> <span m="1846620">new</span> <span
  m="1846780">information,</span> <span m="1847870">it</span> <span
  m="1848030">will</span> <span m="1848300">want</span> <span
  m="1848500">to</span> <span m="1848580">propagate</span> <span
  m="1849110">it</span> <span m="1849230">to</span> <span m="1849350">its</span>
  <span m="1849520">neighbors.</span></p><p><span m="1851130">You</span> <span
  m="1851200">see</span> <span m="1851360">how</span> <span
  m="1851460">this</span> <span m="1851640">is</span> <span
  m="1851760">written?</span> <span m="1852080">You</span> <span
  m="1852170">just</span> <span m="1852360">say,</span> <span
  m="1853630">reset</span> <span m="1854000">the</span> <span
  m="1854070">max</span> <span m="1854550">and</span> <span
  m="1855380">then</span> <span m="1855650">get</span> <span
  m="1855820">ready</span> <span m="1856050">to</span> <span
  m="1856150">send</span> <span m="1857100">to</span> <span
  m="1857270">all</span> <span m="1857420">your</span> <span
  m="1857560">neighbors,</span> <span m="1858950">and</span> <span
  m="1859340">the</span> <span m="1859420">last</span> <span
  m="1859750">part</span> <span m="1860030">is</span> <span
  m="1860180">just</span> <span m="1860430">sort</span> <span
  m="1860590">of</span> <span m="1860680">trivial</span> <span
  m="1861090">code.</span> <span m="1861380">It</span> <span
  m="1861500">says,</span> <span m="1861780">if</span> <span
  m="1861920">you</span> <span m="1862230">are</span> <span
  m="1862720">ready</span> <span m="1863000">to</span> <span
  m="1863090">send,</span> <span m="1863660">then</span> <span
  m="1863880">you</span> <span m="1863990">can</span> <span
  m="1864190">send,</span> <span m="1864800">and</span> <span
  m="1865480">then</span> <span m="1865670">you're</span> <span
  m="1866970">done</span> <span m="1867200">and</span> <span
  m="1867310">you</span> <span m="1867380">can</span> <span
  m="1867560">set</span> <span m="1867820">the</span> <span
  m="1867970">send</span> <span m="1868250">flags</span> <span
  m="1868640">to</span> <span m="1868740">false.</span> <span
  m="1870551">Yeah?</span></p><p><span m="1871018">AUDIENCE: What</span> <span
  m="1871485">study?</span></p><p><span m="1873360">PROFESSOR: For</span> <span
  m="1873540">every</span> <span m="1874100">neighbor.</span> <span
  m="1876160">Oh,</span> <span m="1876300">I</span> <span
  m="1876390">wrote</span> <span m="1876610">neighbor</span> <span
  m="1876960">v</span> <span m="1877320">before,</span> <span
  m="1877810">and</span> <span m="1878030">then I--</span> <span
  m="1878630">yeah.</span> <span m="1879550">I wrote</span> <span
  m="1879820">neighbor--</span> <span m="1880270">oh,</span> <span
  m="1880470">I</span> <span m="1880590">know</span> <span
  m="1880770">why</span> <span m="1880900">I</span> <span
  m="1880980">wrote</span> <span m="1881230">w.</span> <span
  m="1882760">Here,</span> <span m="1883340">I'm</span> <span
  m="1883480">talking</span> <span m="1883850">about</span> <span
  m="1884110">if</span> <span m="1884210">you</span> <span
  m="1884300">receive</span> <span m="1884660">a</span> <span
  m="1884720">message</span> <span m="1885180">from</span> <span
  m="1885330">a</span> <span m="1885390">particular</span> <span
  m="1885950">neighbor</span> <span m="1886330">v,</span> <span
  m="1887830">then</span> <span m="1888010">you</span> <span
  m="1888120">have</span> <span m="1888310">to</span> <span
  m="1888410">send</span> <span m="1888690">it</span> <span
  m="1888780">to</span> <span m="1888870">all</span> <span
  m="1889070">your</span> <span m="1889220">neighbors.</span> <span
  m="1890300">Before,</span> <span m="1890710">I</span> <span
  m="1891430">used</span> <span m="1891860">v</span> <span m="1892080">to</span>
  <span m="1892160">denote</span> <span m="1892550">a</span> <span
  m="1892670">generic</span> <span m="1893210">neighbor,</span> <span
  m="1893590">but</span> <span m="1893790">now</span> <span m="1893930">I</span>
  <span m="1894000">can't</span> <span m="1894260">do</span> <span
  m="1894400">that</span> <span m="1894570">anymore,</span> <span
  m="1895340">because</span> <span m="1895750">v</span> <span
  m="1895870">is</span> <span m="1896070">the</span> <span
  m="1896160">sender</span> <span m="1896570">of</span> <span
  m="1896670">the</span> <span m="1896730">message.</span> <span
  m="1898070">Just</span> <span m="1898300">technical--</span> <span
  m="1899920">OK?</span></p><p><span m="1903610">We</span> <span
  m="1903960">have</span> <span m="1904120">these</span> <span
  m="1904380">process</span> <span m="1904870">automata.</span> <span
  m="1905370">We</span> <span m="1905480">have</span> <span
  m="1905590">this</span> <span m="1905740">channel</span> <span
  m="1906120">automata.</span> <span m="1906710">Now,</span> <span
  m="1906920">we</span> <span m="1907020">want</span> <span
  m="1907170">to</span> <span m="1907230">build</span> <span
  m="1907430">the</span> <span m="1907490">system.</span> <span
  m="1908190">We</span> <span m="1908330">paste</span> <span
  m="1908630">them</span> <span m="1908760">together.</span> <span
  m="1912690">How</span> <span m="1912890">we</span> <span
  m="1913000">paste</span> <span m="1913330">them</span> <span
  m="1913490">is</span> <span m="1913650">just</span> <span
  m="1913900">we</span> <span m="1914000">have</span> <span
  m="1914350">outputs</span> <span m="1915290">from</span> <span
  m="1915570">processes</span> <span m="1916380">that</span> <span
  m="1916630">can</span> <span m="1916770">match</span> <span
  m="1917060">up</span> <span m="1917170">with</span> <span
  m="1917310">inputs</span> <span m="1917730">to</span> <span
  m="1917830">channels</span> <span m="1918920">and</span> <span
  m="1919080">vice</span> <span m="1919280">versa.</span> <span
  m="1920200">If</span> <span m="1920350">a</span> <span
  m="1920390">process</span> <span m="1920870">has</span> <span
  m="1921070">a</span> <span m="1921130">send</span> <span
  m="1921780">output,</span> <span m="1922680">let's</span> <span
  m="1922900">say</span> <span m="1923070">send</span> <span
  m="1923870">from</span> <span m="1924090">u</span> <span m="1924250">to</span>
  <span m="1924410">v,</span> <span m="1925630">that</span> <span
  m="1925800">will</span> <span m="1925890">match</span> <span
  m="1926260">up</span> <span m="1926460">with</span> <span
  m="1926920">the</span> <span m="1927050">channel</span> <span
  m="1927630">that</span> <span m="1927780">has</span> <span
  m="1928020">send</span> <span m="1928340">uv</span> <span
  m="1929430">as</span> <span m="1929720">an</span> <span
  m="1929810">input.</span> <span m="1931310">And</span> <span
  m="1931610">the</span> <span m="1931730">receive</span> <span
  m="1932470">from</span> <span m="1932720">the</span> <span
  m="1932800">channel</span> <span m="1933350">matches</span> <span
  m="1933770">up</span> <span m="1933980">with</span> <span
  m="1934210">the</span> <span m="1934290">process</span> <span
  m="1934970">that</span> <span m="1935100">has</span> <span
  m="1935310">that</span> <span m="1935480">receive</span> <span
  m="1935990">as</span> <span m="1936250">an</span> <span
  m="1936340">input.</span></p><p><span m="1937570">All</span> <span
  m="1937760">I'm</span> <span m="1937880">doing</span> <span
  m="1938140">is</span> <span m="1938270">matching</span> <span
  m="1938760">up</span> <span m="1939290">these</span> <span
  m="1940860">components.</span> <span m="1941830">I'm</span> <span
  m="1942950">hooking</span> <span m="1943270">together</span> <span
  m="1943640">these</span> <span m="1943850">components</span> <span
  m="1944480">by</span> <span m="1944590">matching</span> <span
  m="1945030">up</span> <span m="1945140">their</span> <span
  m="1945290">action</span> <span m="1945650">names.</span> <span
  m="1946530">Does</span> <span m="1946670">that</span> <span
  m="1946840">make</span> <span m="1947010">sense?</span> <span
  m="1949030">I'm</span> <span m="1949650">saying</span> <span
  m="1950070">how</span> <span m="1950370">I</span> <span
  m="1950470">build</span> <span m="1951330">a</span> <span
  m="1951450">system</span> <span m="1951910">out</span> <span
  m="1952030">of</span> <span m="1952130">all</span> <span
  m="1952260">these</span> <span m="1952430">components,</span> <span
  m="1953110">and</span> <span m="1953220">I</span> <span
  m="1953290">just</span> <span m="1953490">have</span> <span
  m="1953600">a</span> <span m="1953640">syntactic</span> <span
  m="1954280">way</span> <span m="1954540">of</span> <span
  m="1954880">saying</span> <span m="1955430">what</span> <span
  m="1956430">actions</span> <span m="1957000">match</span> <span
  m="1957320">up</span> <span m="1958310">in</span> <span
  m="1958510">different</span> <span m="1958790">components.</span> <span
  m="1959850">Questions?</span> <span m="1960860">This</span> <span
  m="1960980">is</span> <span m="1961040">all</span> <span
  m="1961160">new.</span></p><p><span m="1965920">When</span> <span
  m="1966400">this</span> <span m="1966840">system</span> <span
  m="1967290">takes</span> <span m="1967580">a</span> <span
  m="1967640">step,</span> <span m="1968040">well,</span> <span
  m="1969130">if</span> <span m="1970400">somebody's</span> <span
  m="1970790">performing</span> <span m="1971410">an</span> <span
  m="1971530">action,</span> <span m="1973030">and</span> <span
  m="1973390">someone</span> <span m="1973690">else</span> <span
  m="1973910">has</span> <span m="1974110">that</span> <span
  m="1974300">same</span> <span m="1974530">action--</span> <span
  m="1974900">let's</span> <span m="1975030">say</span> <span
  m="1975120">a</span> <span m="1975170">process</span> <span
  m="1975670">is</span> <span m="1975780">doing</span> <span
  m="1976020">a</span> <span m="1976070">send.</span> <span
  m="1976550">The</span> <span m="1976630">channel</span> <span
  m="1977070">has</span> <span m="1977250">a</span> <span
  m="1977310">send.</span> <span m="1978030">They</span> <span
  m="1978160">both</span> <span m="1978490">take</span> <span
  m="1978830">their</span> <span m="1979010">transitions</span> <span
  m="1979640">at</span> <span m="1979760">the</span> <span
  m="1979830">same</span> <span m="1980110">time.</span> <span
  m="1980850">The</span> <span m="1980960">process</span> <span
  m="1981410">sends</span> <span m="1981690">a</span> <span
  m="1981730">message,</span> <span m="1982350">it</span> <span
  m="1982500">gets</span> <span m="1982690">put</span> <span
  m="1982870">into</span> <span m="1983070">the</span> <span
  m="1983150">channel</span> <span m="1983740">at</span> <span
  m="1983840">the</span> <span m="1983940">end</span> <span
  m="1984100">of</span> <span m="1984190">its</span> <span
  m="1984350">queue.</span> <span m="1986900">Make</span> <span
  m="1987090">sense?</span> <span m="1989291">OK.</span></p><p><span
  m="1991780">How</span> <span m="1991890">does</span> <span
  m="1992050">this</span> <span m="1992190">thing</span> <span
  m="1992400">execute?</span> <span m="1993050">Well,</span> <span
  m="1993430">there's</span> <span m="1993630">no</span> <span
  m="1993800">synchronous</span> <span m="1994350">rounds,</span> <span
  m="1995490">so</span> <span m="1995830">the</span> <span
  m="1996160">system</span> <span m="1996680">just</span> <span
  m="1996950">operates</span> <span m="1997560">by</span> <span
  m="1998310">the</span> <span m="1998490">processes</span> <span
  m="1999170">and</span> <span m="1999240">the</span> <span
  m="1999310">channels</span> <span m="1999880">just</span> <span
  m="2000090">perform</span> <span m="2000500">their</span> <span
  m="2000640">steps</span> <span m="2001100">in</span> <span
  m="2001260">any</span> <span m="2001450">order.</span> <span
  m="2002500">One</span> <span m="2002710">at</span> <span m="2002810">a</span>
  <span m="2002870">time,</span> <span m="2003650">but</span> <span
  m="2003840">it</span> <span m="2003920">can</span> <span m="2004090">be</span>
  <span m="2004700">in</span> <span m="2004870">any</span> <span
  m="2005060">order,</span> <span m="2005470">so</span> <span
  m="2005500">it's</span> <span m="2005620">a</span> <span
  m="2005670">sequence</span> <span m="2006190">model.</span> <span
  m="2006560">You</span> <span m="2006650">just</span> <span
  m="2006810">have</span> <span m="2006930">a</span> <span
  m="2006970">sequence</span> <span m="2007580">of</span> <span
  m="2007690">individual</span> <span m="2008320">steps.</span></p><p><span
  m="2010100">There's</span> <span m="2010280">no</span> <span
  m="2010440">concurrency</span> <span m="2011180">here.</span> <span
  m="2011430">In</span> <span m="2011750">the</span> <span
  m="2011900">synchronous</span> <span m="2012400">model,</span> <span
  m="2012730">we</span> <span m="2012840">had</span> <span
  m="2013310">everybody</span> <span m="2013740">taking</span> <span
  m="2014090">their</span> <span m="2014210">steps</span> <span
  m="2014600">in</span> <span m="2014740">one</span> <span
  m="2014900">big</span> <span m="2015070">block.</span> <span
  m="2015910">And</span> <span m="2016040">here,</span> <span
  m="2016190">it's</span> <span m="2016340">just</span> <span
  m="2017280">they</span> <span m="2017410">take</span> <span
  m="2017640">steps</span> <span m="2018220">one</span> <span m="2018400">at
  a</span> <span m="2018540">time,</span> <span m="2018860">but</span> <span
  m="2018990">it</span> <span m="2019140">could</span> <span
  m="2019280">be</span> <span m="2019380">in</span> <span m="2019500">any</span>
  <span m="2019690">order.</span> <span m="2024390">And</span> <span
  m="2024600">we</span> <span m="2024700">have</span> <span
  m="2024880">to</span> <span m="2024960">make</span> <span
  m="2025160">sure</span> <span m="2025410">that</span> <span
  m="2025620">everybody</span> <span m="2026020">keeps</span> <span
  m="2026310">taking</span> <span m="2026620">steps.</span> <span
  m="2026990">That</span> <span m="2027420">every</span> <span
  m="2027680">channel</span> <span m="2028360">continues</span> <span
  m="2028910">to</span> <span m="2028990">deliver</span> <span
  m="2029490">messages,</span> <span m="2030490">and</span> <span
  m="2030660">every</span> <span m="2030860">process</span> <span
  m="2032200">always</span> <span m="2032640">performs</span> <span
  m="2033450">some</span> <span m="2033710">step</span> <span
  m="2034060">that's</span> <span m="2034380">enabled.</span></p><p><span
  m="2038420">For</span> <span m="2038530">the</span> <span
  m="2038600">max</span> <span m="2038910">processes,</span> <span
  m="2039690">well,</span> <span m="2039850">we</span> <span
  m="2039940">can</span> <span m="2040100">just</span> <span
  m="2042450">have</span> <span m="2042670">a</span> <span
  m="2042720">bunch</span> <span m="2042960">of</span> <span
  m="2043060">processes,</span> <span m="2043720">each</span> <span
  m="2043970">one</span> <span m="2044280">now</span> <span
  m="2044490">starting</span> <span m="2044930">with</span> <span
  m="2045140">its</span> <span m="2045360">initial</span> <span
  m="2045760">value.</span> <span m="2047570">And</span> <span
  m="2047740">what</span> <span m="2047870">happens</span> <span
  m="2048320">when</span> <span m="2048469">we</span> <span
  m="2048580">plug</span> <span m="2048870">them</span> <span
  m="2049010">together</span> <span m="2049530">with</span> <span
  m="2049710">all</span> <span m="2049940">their</span> <span
  m="2050150">channels</span> <span m="2050690">between</span> <span
  m="2051080">them?</span> <span m="2053800">Corresponding</span> <span
  m="2054370">to</span> <span m="2054449">whatever</span> <span
  m="2054780">graph</span> <span m="2055130">they are in.</span> <span
  m="2055480">They</span> <span m="2055580">just</span> <span
  m="2055770">have</span> <span m="2055900">channels</span> <span
  m="2056310">on</span> <span m="2056409">the</span> <span
  m="2056520">edges.</span></p><p><span m="2058000">What's</span> <span
  m="2058179">the</span> <span m="2058260">behavior</span> <span
  m="2058850">of</span> <span m="2059000">this?</span> <span
  m="2060639">If</span> <span m="2061320">all</span> <span
  m="2061460">the</span> <span m="2061530">processes</span> <span
  m="2062159">are</span> <span m="2062230">like</span> <span
  m="2062469">the</span> <span m="2062540">ones</span> <span
  m="2062889">I</span> <span m="2062980">just</span> <span
  m="2063219">showed</span> <span m="2063530">you,</span> <span
  m="2065750">they</span> <span m="2065870">wait</span> <span
  m="2066110">till</span> <span m="2066250">they</span> <span
  m="2066699">hear</span> <span m="2066989">some</span> <span
  m="2067199">new</span> <span m="2067370">max</span> <span
  m="2067760">and</span> <span m="2067850">then</span> <span
  m="2067969">they</span> <span m="2068060">send</span> <span
  m="2068340">it</span> <span m="2068440">out.</span> <span
  m="2072270">Yeah?</span></p><p><span m="2074452">AUDIENCE: All</span> <span
  m="2074950">processes</span> <span m="2075448">eventually</span> <span
  m="2075946">have a</span> <span m="2076444">globally</span> <span
  m="2076942">maximum value.</span></p><p><span m="2077440">PROFESSOR:
  Yeah,</span> <span m="2077889">they'll</span> <span m="2078210">all</span>
  <span m="2078489">eventually</span> <span m="2079460">get</span> <span
  m="2079750">the</span> <span m="2079830">global</span> <span
  m="2080179">max.</span> <span m="2080600">They'll</span> <span
  m="2080760">keep</span> <span m="2081070">propagating</span> <span
  m="2081730">until</span> <span m="2082100">everybody</span> <span
  m="2082520">receives</span> <span m="2082949">it.</span> <span
  m="2083260">Here's</span> <span m="2083530">a</span> <span
  m="2084000">animation</span> <span m="2084940">if</span> <span
  m="2085100">everybody</span> <span m="2085540">starts</span> <span
  m="2085969">with</span> <span m="2086150">the</span> <span
  m="2086239">values</span> <span m="2086719">that</span> <span
  m="2086850">are</span> <span m="2086909">written</span> <span
  m="2087130">in</span> <span m="2087230">these</span> <span
  m="2087389">circles.</span> <span m="2090500">Now,</span> <span
  m="2090770">remember,</span> <span m="2091370">before</span> <span
  m="2091760">they</span> <span m="2091940">were</span> <span
  m="2092030">all</span> <span m="2092139">sending</span> <span
  m="2092420">it</span> <span m="2092510">once,</span> <span
  m="2092830">now</span> <span m="2093179">no</span> <span
  m="2093340">more.</span></p><p><span m="2094250">Let's</span> <span
  m="2094449">say</span> <span m="2094600">the</span> <span
  m="2094670">first</span> <span m="2094929">thing</span> <span
  m="2095070">that</span> <span m="2095190">happens</span> <span
  m="2095659">is</span> <span m="2095800">the</span> <span
  m="2095880">process</span> <span m="2096389">that</span> <span
  m="2096520">started</span> <span m="2096920">with</span> <span
  m="2097040">five</span> <span m="2097420">sends</span> <span
  m="2097760">its</span> <span m="2097910">message</span> <span
  m="2098340">out</span> <span m="2098710">on</span> <span
  m="2098870">one</span> <span m="2099030">of</span> <span
  m="2099110">its</span> <span m="2099270">channels,</span> <span
  m="2101060">so</span> <span m="2101220">the</span> <span
  m="2101290">five</span> <span m="2101580">goes</span> <span
  m="2101830">out.</span> <span m="2103100">The</span> <span
  m="2103200">next</span> <span m="2103400">thing</span> <span
  m="2103550">that</span> <span m="2103650">might</span> <span
  m="2103860">happen</span> <span m="2104210">is</span> <span
  m="2104370">the</span> <span m="2104500">other</span> <span
  m="2104660">process</span> <span m="2105150">with</span> <span
  m="2105260">the</span> <span m="2105320">seven</span> <span
  m="2105760">might</span> <span m="2106000">send</span> <span
  m="2106710">the</span> <span m="2106810">seven</span> <span
  m="2107160">out</span> <span m="2107360">on</span> <span
  m="2107470">one</span> <span m="2107630">of</span> <span
  m="2107750">its</span> <span m="2107970">channels.</span> <span
  m="2110110">And</span> <span m="2110800">these</span> <span
  m="2111010">are</span> <span m="2111110">three</span> <span
  m="2111360">more</span> <span m="2111550">steps.</span> <span
  m="2111930">Somebody</span> <span m="2112220">sends</span> <span
  m="2112470">a</span> <span m="2112510">10.</span> <span
  m="2112860">Somebody</span> <span m="2113190">sends</span> <span
  m="2113470">a</span> <span m="2113520">seven.</span> <span
  m="2114670">Somebody</span> <span m="2116370">received</span> <span
  m="2116800">a</span> <span m="2116840">message</span> <span
  m="2117250">and</span> <span m="2117360">updated</span> <span
  m="2118510">its</span> <span m="2118710">value</span> <span
  m="2119160">as</span> <span m="2119280">a</span> <span
  m="2119350">result,</span> <span m="2121150">and</span> <span
  m="2121310">we</span> <span m="2121390">continue.</span></p><p><span
  m="2122160">I'm</span> <span m="2122640">depicting</span> <span
  m="2123130">several</span> <span m="2123480">steps</span> <span
  m="2123820">at</span> <span m="2123890">once,</span> <span
  m="2124120">because</span> <span m="2124290">it's</span> <span
  m="2124440">boring</span> <span m="2124820">to</span> <span
  m="2124960">really</span> <span m="2125210">do</span> <span
  m="2125350">them</span> <span m="2125510">one</span> <span
  m="2125660">at</span> <span m="2125740">a</span> <span
  m="2125810">time,</span> <span m="2126240">but</span> <span
  m="2126560">the</span> <span m="2126650">model</span> <span
  m="2127000">really</span> <span m="2127250">says</span> <span
  m="2127590">that</span> <span m="2127830">they</span> <span
  m="2128010">take</span> <span m="2128250">steps</span> <span
  m="2128550">in</span> <span m="2128650">some</span> <span
  m="2128880">order.</span> <span m="2129990">Everybody</span> <span
  m="2130320">is</span> <span m="2130410">propagating</span> <span
  m="2131000">the</span> <span m="2131080">largest</span> <span
  m="2131520">thing</span> <span m="2131700">it's</span> <span
  m="2131870">seen,</span> <span m="2132980">and</span> <span
  m="2133200">eventually,</span> <span m="2136610">you</span> <span
  m="2136750">wind</span> <span m="2137020">up</span> <span
  m="2137150">with</span> <span m="2137280">everybody</span> <span
  m="2137760">having</span> <span m="2138060">the</span> <span
  m="2138120">maximum</span> <span m="2138630">value,</span> <span
  m="2139010">the</span> <span m="2139120">10.</span> <span
  m="2143590">All</span> <span m="2143680">right,</span> <span
  m="2143970">that's</span> <span m="2144180">how</span> <span
  m="2144480">an</span> <span m="2144620">asynchronous</span> <span
  m="2145240">system</span> <span m="2145700">operates.</span> <span
  m="2148180">We</span> <span m="2148280">can</span> <span
  m="2148410">analyze</span> <span m="2148970">the</span> <span
  m="2149060">message</span> <span m="2149470">complexity</span> <span
  m="2150270">of</span> <span m="2150790">this.</span> <span
  m="2151280">The</span> <span m="2151780">total</span> <span
  m="2152100">number</span> <span m="2152400">of</span> <span
  m="2152500">messages</span> <span m="2153050">sent</span> <span
  m="2153350">during</span> <span m="2153620">the</span> <span
  m="2153720">entire</span> <span m="2154180">execution,</span> <span
  m="2154850">at</span> <span m="2154960">worst,</span> <span
  m="2155750">on</span> <span m="2155940">every</span> <span
  m="2156240">edge.</span> <span m="2157470">You</span> <span
  m="2157590">can</span> <span m="2157780">send</span> <span
  m="2158530">the</span> <span m="2158800">successively</span> <span
  m="2160300">improved</span> <span m="2160790">estimate,</span> <span
  m="2161300">so</span> <span m="2161470">that's,</span> <span
  m="2161740">again,</span> <span m="2162470">what are</span> <span
  m="2162750">n</span> <span m="2162970">times</span> <span
  m="2163310">the</span> <span m="2163390">number</span> <span
  m="2163660">of</span> <span m="2163750">edges.</span></p><p><span
  m="2165510">Time</span> <span m="2165820">complexity</span> <span
  m="2166500">is</span> <span m="2166640">an</span> <span
  m="2166740">issue.</span> <span m="2169390">When</span> <span
  m="2169580">we</span> <span m="2169680">had</span> <span
  m="2169900">synchronous</span> <span m="2170430">algorithms,</span> <span
  m="2171840">we</span> <span m="2171960">just</span> <span
  m="2172110">counted</span> <span m="2172430">the</span> <span
  m="2172490">number</span> <span m="2172790">of</span> <span
  m="2172870">rounds</span> <span m="2173300">and</span> <span
  m="2173400">that</span> <span m="2173410">was</span> <span
  m="2173560">easy.</span> <span m="2175120">But</span> <span
  m="2175320">what</span> <span m="2175490">do</span> <span
  m="2175550">we</span> <span m="2175660">measure</span> <span
  m="2176010">now?</span> <span m="2177090">How</span> <span
  m="2177240">do</span> <span m="2177320">we</span> <span
  m="2177420">count</span> <span m="2177730">the</span> <span
  m="2177810">time</span> <span m="2178350">when</span> <span
  m="2178920">you</span> <span m="2179350">have</span> <span
  m="2179570">all</span> <span m="2179750">these</span> <span
  m="2180010">processes</span> <span m="2180760">and</span> <span
  m="2180930">channels</span> <span m="2181340">taking</span> <span
  m="2181670">steps</span> <span m="2182060">whenever</span> <span
  m="2182400">they</span> <span m="2182520">want?</span> <span
  m="2184140">Yeah,</span> <span m="2184440">so</span> <span
  m="2184550">this</span> <span m="2184910">really</span> <span
  m="2185180">isn't</span> <span m="2185490">obvious.</span></p><p><span
  m="2186060">There's</span> <span m="2186330">a</span> <span
  m="2186950">solution</span> <span m="2187560">that's</span> <span
  m="2187820">commonly</span> <span m="2188440">used,</span> <span
  m="2188900">which</span> <span m="2189160">is--</span> <span
  m="2190080">OK,</span> <span m="2191060">we're</span> <span
  m="2191240">going</span> <span m="2191360">to</span> <span
  m="2191420">use</span> <span m="2191640">real</span> <span
  m="2191930">time.</span> <span m="2193800">And</span> <span
  m="2193830">we're</span> <span m="2193910">going</span> <span
  m="2194210">to</span> <span m="2194570">make</span> <span
  m="2194880">some</span> <span m="2195100">assumptions</span> <span
  m="2195920">about</span> <span m="2197750">certain</span> <span
  m="2198110">basic</span> <span m="2198590">steps</span> <span
  m="2199070">taking,</span> <span m="2199520">at</span> <span
  m="2199680">most,</span> <span m="2200270">a</span> <span
  m="2200340">certain</span> <span m="2200660">amount</span> <span
  m="2200930">of</span> <span m="2201020">time.</span> <span
  m="2203890">Let's</span> <span m="2204130">say</span> <span
  m="2204360">that</span> <span m="2204590">local</span> <span
  m="2205160">computational--</span> <span m="2206830">time</span> <span
  m="2207140">for</span> <span m="2207300">a</span> <span
  m="2207360">process</span> <span m="2207850">to</span> <span
  m="2207960">perform</span> <span m="2208770">its</span> <span
  m="2209020">next</span> <span m="2209260">step,</span> <span
  m="2209600">is</span> <span m="2209980">little</span> <span
  m="2210340">l.</span> <span m="2211620">You</span> <span
  m="2211730">just</span> <span m="2211980">give</span> <span
  m="2212670">a</span> <span m="2212800">local</span> <span
  m="2213140">time</span> <span m="2213450">bound.</span> <span
  m="2214200">And</span> <span m="2214330">then</span> <span
  m="2214910">you</span> <span m="2215070">have</span> <span
  m="2215240">d</span> <span m="2215650">for</span> <span m="2215870">a</span>
  <span m="2215910">channel</span> <span m="2216380">to</span> <span
  m="2216500">deliver</span> <span m="2217060">one</span> <span
  m="2217270">message.</span> <span m="2217940">The</span> <span
  m="2218060">first</span> <span m="2218380">message</span> <span
  m="2219190">that's</span> <span m="2219390">currently</span> <span
  m="2219820">in</span> <span m="2219920">the</span> <span
  m="2220020">channel.</span></p><p><span m="2221720">If</span> <span
  m="2221790">you</span> <span m="2221910">have</span> <span
  m="2222110">assumptions</span> <span m="2222710">like</span> <span
  m="2222980">that,</span> <span m="2223300">you</span> <span
  m="2223410">could</span> <span m="2223810">use</span> <span
  m="2224130">those</span> <span m="2224420">to</span> <span
  m="2224630">infer</span> <span m="2226440">a</span> <span
  m="2226580">real</span> <span m="2226840">time</span> <span
  m="2227250">upper</span> <span m="2227500">bound</span> <span
  m="2227870">for</span> <span m="2228010">solving</span> <span
  m="2228420">the</span> <span m="2228510">whole</span> <span
  m="2228670">problem.</span> <span m="2229230">I</span> <span
  m="2229290">mean</span> <span m="2229410">if</span> <span
  m="2229490">you</span> <span m="2229610">know</span> <span
  m="2230060">it</span> <span m="2230180">takes</span> <span
  m="2230430">no</span> <span m="2230610">longer</span> <span
  m="2231010">than</span> <span m="2231260">d</span> <span m="2231510">to</span>
  <span m="2231620">deliver</span> <span m="2231990">one</span> <span
  m="2232180">message,</span> <span m="2233860">then</span> <span
  m="2234060">you</span> <span m="2234140">can</span> <span
  m="2234310">bound</span> <span m="2234620">how</span> <span
  m="2234780">long</span> <span m="2235000">it</span> <span
  m="2235100">takes</span> <span m="2235390">to</span> <span
  m="2235470">deliver--</span> <span m="2236150">to</span> <span
  m="2236250">empty</span> <span m="2236530">out</span> <span
  m="2236620">a</span> <span m="2236650">queue,</span> <span
  m="2237630">a</span> <span m="2237730">channel,</span> <span
  m="2238490">and</span> <span m="2238770">how</span> <span
  m="2238940">long</span> <span m="2239130">it</span> <span
  m="2239220">takes</span> <span m="2239480">for</span> <span
  m="2239560">messages</span> <span m="2240030">to</span> <span
  m="2240140">propagate</span> <span m="2240700">through</span> <span
  m="2240930">the</span> <span m="2241030">network.</span> <span
  m="2247080">It's</span> <span m="2247250">tricky,</span> <span
  m="2247660">but</span> <span m="2247950">this</span> <span
  m="2248160">is</span> <span m="2248700">about</span> <span
  m="2248990">the</span> <span m="2249100">only</span> <span
  m="2249320">thing</span> <span m="2249550">you</span> <span
  m="2249680">can</span> <span m="2249920">do</span> <span m="2250240">in</span>
  <span m="2250370">a</span> <span m="2250440">setting</span> <span
  m="2250890">where</span> <span m="2251510">you</span> <span
  m="2251670">don't</span> <span m="2251940">actually</span> <span
  m="2252450">have</span> <span m="2253710">rounds</span> <span
  m="2254160">to</span> <span m="2254260">measure.</span></p><p><span
  m="2257500">Then</span> <span m="2258030">for</span> <span
  m="2258190">the</span> <span m="2258270">max</span> <span
  m="2258540">system,</span> <span m="2259410">how</span> <span
  m="2259610">long</span> <span m="2259840">does</span> <span
  m="2260000">it</span> <span m="2260110">take?</span> <span
  m="2260420">Well,</span> <span m="2260530">let's</span> <span
  m="2260740">just</span> <span m="2260980">ignore</span> <span
  m="2261410">the</span> <span m="2261520">local</span> <span
  m="2261830">processing</span> <span m="2262450">time.</span> <span
  m="2262800">Usually</span> <span m="2263290">that's</span> <span
  m="2263550">assumed</span> <span m="2263910">to</span> <span
  m="2263990">be</span> <span m="2264120">very</span> <span
  m="2264400">small,</span> <span m="2264930">so</span> <span
  m="2265000">let's</span> <span m="2265200">say</span> <span
  m="2265350">it's</span> <span m="2265490">0.</span> <span
  m="2267550">We</span> <span m="2267700">can</span> <span
  m="2267870">get</span> <span m="2268060">a</span> <span
  m="2268110">very</span> <span m="2268370">simple,</span> <span
  m="2269500">pessimistic</span> <span m="2270340">really,</span> <span
  m="2270760">upper</span> <span m="2271030">bound</span> <span
  m="2271830">that</span> <span m="2272030">says</span> <span
  m="2272830">the</span> <span m="2272920">real</span> <span
  m="2273160">time</span> <span m="2273830">for</span> <span
  m="2273960">finishing</span> <span m="2274470">the</span> <span
  m="2274560">whole</span> <span m="2274740">thing</span> <span
  m="2274990">is</span> <span m="2275110">of</span> <span m="2275190">the</span>
  <span m="2275260">order</span> <span m="2275610">of</span> <span
  m="2275710">the</span> <span m="2275780">diameter</span> <span
  m="2276550">of</span> <span m="2276660">the</span> <span
  m="2276740">network</span> <span m="2277770">times</span> <span
  m="2278530">the</span> <span m="2278620">number</span> <span
  m="2278840">of</span> <span m="2278920">nodes</span> <span
  m="2280020">times</span> <span m="2281140">little</span> <span
  m="2281430">d</span> <span m="2281740">is</span> <span m="2281930">the</span>
  <span m="2282060">amount</span> <span m="2282360">of</span> <span
  m="2282450">time</span> <span m="2282860">for</span> <span
  m="2283240">a</span> <span m="2283330">message</span> <span
  m="2283870">queue</span> <span m="2284160">to</span> <span
  m="2284250">deliver</span> <span m="2284730">its</span> <span
  m="2284910">first</span> <span m="2285220">message.</span></p><p><span
  m="2290180">As</span> <span m="2290350">a</span> <span
  m="2290410">naive</span> <span m="2290820">way</span> <span
  m="2291020">of</span> <span m="2291130">analyzing</span> <span
  m="2291770">this,</span> <span m="2293880">you</span> <span
  m="2294000">just</span> <span m="2294260">consider</span> <span
  m="2294720">how</span> <span m="2294900">long</span> <span
  m="2295120">it</span> <span m="2295220">takes</span> <span
  m="2295650">for</span> <span m="2295750">the</span> <span
  m="2295830">max</span> <span m="2296250">to</span> <span
  m="2296380">reach</span> <span m="2296740">some</span> <span
  m="2297010">particular</span> <span m="2297550">vertex</span> <span
  m="2298180">u</span> <span m="2298450">along</span> <span
  m="2298730">the</span> <span m="2298810">shortest</span> <span
  m="2299280">path.</span> <span m="2300720">Well,</span> <span
  m="2301070">it</span> <span m="2301150">has</span> <span m="2301360">to</span>
  <span m="2301460">go</span> <span m="2301640">through</span> <span
  m="2301890">all</span> <span m="2302080">the</span> <span
  m="2302340">hops</span> <span m="2302680">on</span> <span
  m="2302790">the</span> <span m="2302860">path,</span> <span
  m="2304510">so</span> <span m="2305640">that</span> <span
  m="2305830">would</span> <span m="2305930">be</span> <span
  m="2306160">the</span> <span m="2306250">diameter.</span> <span
  m="2307900">And</span> <span m="2308710">how</span> <span
  m="2308920">long</span> <span m="2309170">does</span> <span
  m="2309350">it</span> <span m="2309430">have</span> <span
  m="2309640">to</span> <span m="2309740">wait</span> <span
  m="2310010">in</span> <span m="2310110">each</span> <span
  m="2310350">channel</span> <span m="2310810">before</span> <span
  m="2311320">it</span> <span m="2311610">gets</span> <span
  m="2311910">to</span> <span m="2312380">move</span> <span
  m="2312560">another</span> <span m="2312880">hop?</span> <span
  m="2313370">Well,</span> <span m="2313980">it</span> <span
  m="2314180">might</span> <span m="2314370">be</span> <span m="2314510">at
  the</span> <span m="2314660">end</span> <span m="2314840">of</span> <span
  m="2314910">a</span> <span m="2314980">queue.</span> <span
  m="2316010">How</span> <span m="2316150">big</span> <span
  m="2316350">could</span> <span m="2316490">the</span> <span
  m="2316560">queue</span> <span m="2317010">be?  Well,</span> <span
  m="2317330">at</span> <span m="2317460">worst</span> <span
  m="2317820">end</span> <span m="2318190">for</span> <span
  m="2318360">the</span> <span m="2318490">improved</span> <span
  m="2318970">estimates.</span></p><p><span m="2320920">Let's</span> <span
  m="2321150">say</span> <span m="2321370">it's</span> <span
  m="2321580">n</span> <span m="2322100">times</span> <span
  m="2322510">the</span> <span m="2322600">delivery</span> <span
  m="2323070">time</span> <span m="2323430">on</span> <span
  m="2323540">the</span> <span m="2323610">channel,</span> <span
  m="2324640">just</span> <span m="2324950">to</span> <span
  m="2325060">traverse</span> <span m="2325650">one</span> <span
  m="2325870">channel.</span> <span m="2327160">What</span> <span
  m="2327400">I'm</span> <span m="2327490">doing</span> <span
  m="2327700">is</span> <span m="2327820">modeling</span> <span
  m="2328540">possible</span> <span m="2328960">congestion</span> <span
  m="2329610">on</span> <span m="2329750">the</span> <span
  m="2329810">queue</span> <span m="2330420">to</span> <span
  m="2330550">see</span> <span m="2330720">how</span> <span
  m="2330870">long</span> <span m="2331070">it</span> <span
  m="2331170">takes</span> <span m="2331510">for</span> <span
  m="2332290">a</span> <span m="2332360">message</span> <span
  m="2332820">to</span> <span m="2332930">traverse</span> <span
  m="2333400">one</span> <span m="2333610">channel.</span> <span
  m="2334500">Yeah?</span></p><p><span m="2335180">AUDIENCE: Are we</span> <span
  m="2335210">just</span> <span m="2335495">assuming</span> <span
  m="2336020">that</span> <span m="2336503">processes</span> <span
  m="2337469">process</span> <span m="2337952">things,</span> <span
  m="2338435">and messages</span> <span m="2338918">are delivered</span> <span
  m="2339401">as soon as</span> <span m="2339884">they can possibly</span> <span
  m="2340367">have them?</span></p><p><span m="2343270">PROFESSOR: Good.</span>
  <span m="2343570">Yeah,</span> <span m="2344390">we</span> <span
  m="2344770">normally</span> <span m="2345200">have--</span> <span
  m="2345660">I'm</span> <span m="2346040">sort</span> <span
  m="2346280">of</span> <span m="2346860">skipping</span> <span
  m="2347170">over</span> <span m="2347360">some</span> <span
  m="2347580">things</span> <span m="2347910">in</span> <span
  m="2348020">the</span> <span m="2348080">model--</span> <span
  m="2348410">but</span> <span m="2348570">you</span> <span
  m="2348700">have</span> <span m="2349920">a</span> <span
  m="2350360">liveness</span> <span m="2350960">assumption</span> <span
  m="2351810">that</span> <span m="2352000">says</span> <span
  m="2352330">that</span> <span m="2352620">the</span> <span
  m="2352680">process</span> <span m="2353120">keeps</span> <span
  m="2353450">taking</span> <span m="2353790">steps</span> <span
  m="2354170">as</span> <span m="2354280">long</span> <span
  m="2354470">as</span> <span m="2354590">it</span> <span m="2354670">has</span>
  <span m="2354900">anything</span> <span m="2355280">to</span> <span
  m="2355400">do,</span> <span m="2356250">and</span> <span
  m="2356420">so</span> <span m="2356590">we</span> <span
  m="2356700">would</span> <span m="2356860">be</span> <span
  m="2357150">putting</span> <span m="2357420">time</span> <span
  m="2357720">bounds</span> <span m="2358180">on</span> <span
  m="2358380">how</span> <span m="2358560">long</span> <span
  m="2358780">it</span> <span m="2358880">takes</span> <span
  m="2359220">between</span> <span m="2359560">those</span> <span
  m="2359720">steps.</span> <span m="2360720">That'll</span> <span
  m="2360880">be</span> <span m="2360980">the</span> <span
  m="2361070">local</span> <span m="2361360">processing</span> <span
  m="2362140">time,</span> <span m="2362700">here.</span> <span
  m="2363220">I'm</span> <span m="2363340">saying</span> <span
  m="2363580">that's</span> <span m="2363710">0.</span></p><p><span
  m="2364870">AUDIENCE: You do that--</span> <span m="2365020">wouldn't</span>
  <span m="2365517">you be</span> <span m="2366014">able</span> <span
  m="2366511">to</span> <span m="2367505">get</span> <span
  m="2368002">some</span> <span m="2368499">amount of</span> <span
  m="2368996">information about what</span> <span m="2369493">were</span> <span
  m="2369990">things happening?</span></p><p><span m="2370490">PROFESSOR:
  Ah,</span> <span m="2371470">OK.</span> <span m="2372070">Here</span> <span
  m="2372260">is--</span> <span m="2372390">this</span> <span
  m="2372500">is</span> <span m="2372560">a</span> <span m="2372600">very</span>
  <span m="2372790">subtle</span> <span m="2373070">point.</span> <span
  m="2374440">What</span> <span m="2374630">do</span> <span
  m="2374720">you</span> <span m="2374780">think</span> <span
  m="2375080">is</span> <span m="2375230">that</span> <span
  m="2375450">if</span> <span m="2375630">I'm</span> <span
  m="2375850">making</span> <span m="2376210">all</span> <span
  m="2376320">these</span> <span m="2376510">timing</span> <span
  m="2376900">assumptions,</span> <span m="2377520">the</span> <span
  m="2377580">processes</span> <span m="2378050">should</span> <span
  m="2378180">be</span> <span m="2378270">able</span> <span
  m="2378440">to</span> <span m="2378500">figure</span> <span
  m="2378830">that</span> <span m="2379060">out.</span> <span
  m="2379980">But</span> <span m="2380120">actually,</span> <span
  m="2382140">you</span> <span m="2382260">can't</span> <span
  m="2382530">figure</span> <span m="2382840">anything</span> <span
  m="2383310">out</span> <span m="2383490">just</span> <span
  m="2383780">based</span> <span m="2384120">on</span> <span
  m="2384650">these</span> <span m="2385530">assumptions</span> <span
  m="2386170">about</span> <span m="2386730">these</span> <span
  m="2387070">upper</span> <span m="2387270">bounds.</span> <span
  m="2388540">Putting</span> <span m="2388860">upper</span> <span
  m="2389130">bounds</span> <span m="2389630">on</span> <span
  m="2389720">the</span> <span m="2389800">time</span> <span
  m="2390100">between</span> <span m="2390480">steps</span> <span
  m="2391380">does</span> <span m="2391580">not</span> <span
  m="2391860">in</span> <span m="2391960">any</span> <span
  m="2392250">way</span> <span m="2392470">restrict</span> <span
  m="2393040">the</span> <span m="2393200">orderings.</span> <span
  m="2394460">You</span> <span m="2394590">still</span> <span
  m="2394820">have</span> <span m="2394980">all</span> <span
  m="2395180">the</span> <span m="2395250">same</span> <span
  m="2395540">possible</span> <span m="2396060">orderings</span> <span
  m="2396660">of</span> <span m="2396760">steps.</span> <span
  m="2397970">Nobody</span> <span m="2398380">can</span> <span
  m="2398580">see</span> <span m="2398860">anything</span> <span
  m="2399300">different.</span> <span m="2399710">These</span> <span
  m="2399880">times</span> <span m="2400200">are</span> <span
  m="2400260">not</span> <span m="2400480">visible</span> <span
  m="2401130">in</span> <span m="2401260">any</span> <span
  m="2401440">sense.</span> <span m="2401770">They're</span> <span
  m="2401860">not</span> <span m="2402000">marked</span> <span
  m="2402380">anywhere</span> <span m="2402800">for</span> <span
  m="2402970">the</span> <span m="2403060">processes</span> <span
  m="2403700">to</span> <span m="2403830">read.</span> <span
  m="2405670">They're</span> <span m="2405820">just</span> <span
  m="2406030">something</span> <span m="2406410">that</span> <span
  m="2406510">we're</span> <span m="2406600">using</span> <span
  m="2407020">to</span> <span m="2407310">evaluate</span> <span
  m="2408110">the</span> <span m="2408180">cost,</span> <span
  m="2408760">the</span> <span m="2408830">time</span> <span
  m="2409160">cost,</span> <span m="2410020">of</span> <span
  m="2410200">the</span> <span m="2410310">execution.</span></p><p><span
  m="2412730">And</span> <span m="2415022">you're</span> <span
  m="2415510">not</span> <span m="2415720">restricting</span> <span
  m="2416420">the</span> <span m="2416530">execution</span> <span
  m="2417240">by</span> <span m="2417350">putting</span> <span
  m="2417680">just</span> <span m="2418000">upper</span> <span
  m="2418260">bounds</span> <span m="2418660">on</span> <span
  m="2418780">the</span> <span m="2418860">time.</span> <span
  m="2420090">If</span> <span m="2420250">you</span> <span
  m="2420370">are</span> <span m="2420460">restricting</span> <span
  m="2421020">the</span> <span m="2421130">execution,</span> <span
  m="2421800">like</span> <span m="2422030">you had</span> <span
  m="2422190">upper</span> <span m="2422380">bounds</span> <span
  m="2422780">and</span> <span m="2422940">lower</span> <span
  m="2423180">bounds</span> <span m="2423540">on</span> <span
  m="2423660">the</span> <span m="2423730">time,</span> <span
  m="2424640">then</span> <span m="2424830">the</span> <span
  m="2424890">processes</span> <span m="2425540">might</span> <span
  m="2425840">know</span> <span m="2426200">a</span> <span
  m="2426260">lot</span> <span m="2426500">more.</span> <span
  m="2426780">They</span> <span m="2426910">might,</span> <span
  m="2427490">in</span> <span m="2427660">fact,</span> <span
  m="2428070">be</span> <span m="2428280">acting</span> <span
  m="2428650">more</span> <span m="2428850">like</span> <span
  m="2429070">a</span> <span m="2429110">synchronous</span> <span
  m="2430390">system.</span> <span m="2433030">These</span> <span
  m="2433250">are</span> <span m="2433330">times</span> <span
  m="2433770">that</span> <span m="2433890">are</span> <span
  m="2433960">just</span> <span m="2434290">used</span> <span
  m="2434590">for</span> <span m="2434690">analyzing</span> <span
  m="2435260">complexity.</span> <span m="2436300">They're</span> <span
  m="2436450">not</span> <span m="2437200">anything</span> <span
  m="2437620">known</span> <span m="2437900">to</span> <span
  m="2438010">the</span> <span m="2438080">processes</span> <span
  m="2438720">in</span> <span m="2438850">the</span> <span
  m="2438920">system.</span> <span m="2440310">OK?</span> <span
  m="2441860">All</span> <span m="2441950">right.</span></p><p><span
  m="2442980">Now</span> <span m="2443140">let's</span> <span
  m="2443340">revisit</span> <span m="2443910">the</span> <span
  m="2444100">breadth-first</span> <span m="2444640">spanning</span> <span
  m="2445030">tree</span> <span m="2445260">problem.</span> <span
  m="2447750">We</span> <span m="2447850">want</span> <span
  m="2448040">to</span> <span m="2448200">now</span> <span
  m="2448420">compute</span> <span m="2448820">a</span> <span
  m="2448860">breadth-first</span> <span m="2449400">spanning</span> <span
  m="2449780">tree</span> <span m="2450130">in</span> <span
  m="2450260">an</span> <span m="2450370">asynchronous</span> <span
  m="2451040">network.</span> <span m="2453710">Connected</span> <span
  m="2454120">graph,</span> <span m="2454450">distinguish</span> <span
  m="2454970">root</span> <span m="2455180">vertex,</span> <span
  m="2455640">processes</span> <span m="2456180">have</span> <span
  m="2456330">no</span> <span m="2456480">knowledge</span> <span
  m="2456880">of</span> <span m="2456990">the</span> <span
  m="2457060">graph.</span> <span m="2457900">They</span> <span
  m="2458020">have</span> <span m="2458180">you</span> <span
  m="2458340">UIDs.</span> <span m="2459420">All</span> <span
  m="2459580">this</span> <span m="2459760">is</span> <span
  m="2459900">the</span> <span m="2459990">same</span> <span
  m="2460280">as</span> <span m="2460420">before</span> <span
  m="2460870">in</span> <span m="2461050">the</span> <span
  m="2461120">synchronous</span> <span m="2461680">case.</span> <span
  m="2463320">Everybody's</span> <span m="2463780">supposed</span> <span
  m="2464050">to</span> <span m="2464160">output</span> <span
  m="2464760">its</span> <span m="2465240">parent</span> <span
  m="2465680">information</span> <span m="2466900">when</span> <span
  m="2467130">it's</span> <span m="2467390">done.</span></p><p><span
  m="2471480">Here's</span> <span m="2472620">an</span> <span
  m="2472700">idea.</span> <span m="2474270">Suppose</span> <span
  m="2474630">we</span> <span m="2474750">just</span> <span
  m="2475040">take</span> <span m="2475310">that</span> <span
  m="2475560">nice</span> <span m="2475890">simple</span> <span
  m="2476580">synchronous</span> <span m="2477160">algorithm</span> <span
  m="2477820">that</span> <span m="2477970">I</span> <span
  m="2478690">reviewed</span> <span m="2478980">at</span> <span
  m="2479060">the</span> <span m="2479120">beginning</span> <span
  m="2479480">of</span> <span m="2479570">the</span> <span
  m="2479720">hour</span> <span m="2480330">where</span> <span
  m="2480500">everybody</span> <span m="2480870">just</span> <span
  m="2481080">sends</span> <span m="2481310">a</span> <span
  m="2481350">search</span> <span m="2481730">message</span> <span
  m="2482140">as</span> <span m="2482230">soon</span> <span
  m="2482410">as</span> <span m="2482530">they</span> <span
  m="2482670">get</span> <span m="2482900">it</span> <span
  m="2483100">and</span> <span m="2483240">they</span> <span
  m="2483340">just</span> <span m="2483540">adopt</span> <span
  m="2484000">the</span> <span m="2484070">first</span> <span
  m="2484360">parent</span> <span m="2484710">they</span> <span
  m="2484830">see.</span> <span m="2486630">What</span> <span
  m="2486840">happens</span> <span m="2487250">if</span> <span
  m="2487370">I</span> <span m="2487470">run</span> <span
  m="2487740">that</span> <span m="2487960">asynchronously?</span> <span
  m="2491940">I</span> <span m="2492040">just</span> <span
  m="2492400">send</span> <span m="2492700">it</span> <span
  m="2492900">and</span> <span m="2493080">I</span> <span m="2493370">get</span>
  <span m="2493560">a</span> <span m="2493590">search</span> <span
  m="2493920">message.</span> <span m="2494530">Then</span> <span
  m="2494660">I</span> <span m="2494720">send</span> <span m="2494990">it</span>
  <span m="2495080">out</span> <span m="2495210">to</span> <span
  m="2495290">my</span> <span m="2495410">parents</span> <span
  m="2495880">whenever and</span> <span m="2496280">everybody's</span> <span
  m="2496770">doing</span> <span m="2497050">this.</span> <span
  m="2499050">Whenever</span> <span m="2499310">they</span> <span
  m="2499410">get</span> <span m="2499580">their</span> <span
  m="2499690">first</span> <span m="2500020">search</span> <span
  m="2500300">message,</span> <span m="2500830">they</span> <span
  m="2500950">decide</span> <span m="2501360">the</span> <span
  m="2501430">sender</span> <span m="2501830">is</span> <span
  m="2501980">its</span> <span m="2502140">parent.</span> <span
  m="2502980">Yeah?</span></p><p><span m="2503980">AUDIENCE: Could</span> <span
  m="2504480">you</span> <span m="2504980">possibly have</span> <span
  m="2505480">a</span> <span m="2505980">front</span> <span
  m="2506480">tier</span> <span m="2506980">that</span> <span
  m="2507480">doesn't keep</span> <span m="2507980">expanding--</span> <span
  m="2509936">not</span> <span m="2510418">obeying</span> <span m="2510900">the
  defining</span> <span m="2511382">property</span> <span m="2511864">of
  the</span> <span m="2512346">BFS?</span></p><p><span m="2513310">PROFESSOR:
  Yeah</span> <span m="2513600">it</span> <span m="2513730">could</span> <span
  m="2513910">be</span> <span m="2514090">that,</span> <span
  m="2514570">because</span> <span m="2514780">we</span> <span
  m="2514920">don't</span> <span m="2515110">have</span> <span
  m="2515330">any</span> <span m="2515500">restriction</span> <span
  m="2516070">on</span> <span m="2516240">how</span> <span
  m="2516910">fast</span> <span m="2517320">the</span> <span
  m="2517390">messages</span> <span m="2518330">might</span> <span
  m="2519110">be</span> <span m="2519470">sent</span> <span
  m="2519900">and</span> <span m="2520330">the</span> <span
  m="2520410">order</span> <span m="2520760">of</span> <span
  m="2520850">steps,</span> <span m="2521580">it</span> <span
  m="2521730">could</span> <span m="2521870">be</span> <span
  m="2521980">that</span> <span m="2522140">some</span> <span
  m="2522320">messages</span> <span m="2523240">get</span> <span
  m="2523530">sent</span> <span m="2523800">very</span> <span
  m="2524000">quickly</span> <span m="2524420">on</span> <span
  m="2524560">some</span> <span m="2524740">long</span> <span
  m="2525000">path.</span> <span m="2526340">Someone</span> <span
  m="2526920">sitting</span> <span m="2527220">at</span> <span
  m="2527300">the</span> <span m="2527370">far</span> <span
  m="2527660">end</span> <span m="2527840">of</span> <span
  m="2527920">the</span> <span m="2527980">network</span> <span
  m="2528410">might</span> <span m="2528940">get</span> <span
  m="2529130">a</span> <span m="2529160">message</span> <span
  m="2529630">first</span> <span m="2529980">on</span> <span
  m="2530080">a</span> <span m="2530140">long</span> <span
  m="2530420">path</span> <span m="2530820">and</span> <span
  m="2530940">later</span> <span m="2531260">on</span> <span
  m="2531360">a</span> <span m="2531430">short</span> <span
  m="2531720">path,</span> <span m="2532300">and</span> <span
  m="2532610">the</span> <span m="2532760">first</span> <span
  m="2533030">one</span> <span m="2533150">to</span> <span
  m="2533230">gets</span> <span m="2533660">it</span> <span
  m="2534060">decides</span> <span m="2534520">that's</span> <span
  m="2534790">its</span> <span m="2534960">parent,</span> <span
  m="2535890">then</span> <span m="2536020">it's</span> <span
  m="2536180">stuck.</span> <span m="2537740">This</span> <span
  m="2537920">is</span> <span m="2538270">not</span> <span m="2538710">an</span>
  <span m="2538820">algorithm</span> <span m="2539370">that</span> <span
  m="2539510">makes</span> <span m="2539800">corrections.</span> <span
  m="2542170">OK?</span></p><p><span m="2544740">All</span> <span
  m="2544840">right,</span> <span m="2545620">well,</span> <span
  m="2546100">before</span> <span m="2546460">we</span> <span
  m="2546540">had</span> <span m="2546640">a</span> <span
  m="2546690">little</span> <span m="2546930">bit</span> <span
  m="2547070">of</span> <span m="2547160">non-determinism</span> <span
  m="2548110">when</span> <span m="2548230">we</span> <span
  m="2548350">had</span> <span m="2548580">this</span> <span
  m="2548750">algorithm</span> <span m="2549610">in</span> <span
  m="2549750">the</span> <span m="2549810">synchronous</span> <span
  m="2550310">case</span> <span m="2551170">because</span> <span
  m="2551870">we</span> <span m="2552000">could</span> <span
  m="2552150">have</span> <span m="2552300">two</span> <span
  m="2553140">messages</span> <span m="2553630">arriving</span> <span
  m="2554040">at</span> <span m="2554150">once,</span> <span
  m="2554610">and</span> <span m="2554710">you</span> <span
  m="2554810">have</span> <span m="2554820">to</span> <span
  m="2554910">pick</span> <span m="2555130">one</span> <span
  m="2555390">to</span> <span m="2555470">be</span> <span
  m="2555590">your</span> <span m="2555730">parent.</span> <span
  m="2557030">Now</span> <span m="2557270">that</span> <span
  m="2557420">doesn't</span> <span m="2557670">happen,</span> <span
  m="2558030">because</span> <span m="2558200">you</span> <span
  m="2558280">only</span> <span m="2558490">get</span> <span
  m="2558700">one</span> <span m="2558860">message</span> <span
  m="2559230">at</span> <span m="2559320">a</span> <span
  m="2559380">time,</span> <span m="2560610">but</span> <span
  m="2560890">you</span> <span m="2561000">have</span> <span
  m="2561380">a</span> <span m="2561480">lot</span> <span
  m="2561760">more</span> <span m="2562010">non-determinism</span> <span
  m="2563020">now.</span></p><p><span m="2564260">Now</span> <span
  m="2564490">you</span> <span m="2564640">have</span> <span
  m="2565100">all</span> <span m="2565360">this</span> <span
  m="2565520">non-determinism</span> <span m="2566470">from</span> <span
  m="2566850">the</span> <span m="2566980">order</span> <span
  m="2567440">in</span> <span m="2567560">which</span> <span
  m="2567820">the</span> <span m="2567890">messages</span> <span
  m="2568530">get</span> <span m="2568830">sent</span> <span
  m="2569200">and</span> <span m="2569460">processes</span> <span
  m="2570060">take</span> <span m="2570280">their</span> <span
  m="2570420">steps.</span> <span m="2571860">There's</span> <span
  m="2572020">plenty</span> <span m="2572300">of</span> <span
  m="2572380">non-determinism,</span> <span m="2573260">and</span> <span
  m="2573370">remember,</span> <span m="2573750">the</span> <span
  m="2573840">way</span> <span m="2573970">we</span> <span
  m="2574070">treat</span> <span m="2574390">non-determinism</span> <span
  m="2575960">for</span> <span m="2576110">distributed</span> <span
  m="2576670">algorithms</span> <span m="2577270">is</span> <span
  m="2577650">it's</span> <span m="2577840">supposed</span> <span
  m="2578150">to</span> <span m="2578230">work</span> <span
  m="2578530">regardless</span> <span m="2579250">of</span> <span
  m="2579350">how</span> <span m="2579590">those</span> <span
  m="2580110">non-deterministic</span> <span m="2581130">choices</span> <span
  m="2581760">get</span> <span m="2581990">made.</span></p><p><span
  m="2583930">How</span> <span m="2584110">would</span> <span
  m="2584230">we</span> <span m="2584480">describe?</span> <span
  m="2585260">I'll</span> <span m="2585370">just</span> <span
  m="2586000">write</span> <span m="2586260">some</span> <span
  m="2586370">pseudo</span> <span m="2586660">code</span> <span
  m="2586930">here</span> <span m="2587160">for</span> <span
  m="2587970">a</span> <span m="2588120">process</span> <span
  m="2588760">that's</span> <span m="2589020">just</span> <span
  m="2589230">mimicking</span> <span m="2590270">the</span> <span
  m="2590510">trivial</span> <span m="2590950">algorithm.</span> <span
  m="2591910">It</span> <span m="2592060">can</span> <span
  m="2592190">receive</span> <span m="2592600">a</span> <span
  m="2592640">search</span> <span m="2593030">message,</span> <span
  m="2593560">that's</span> <span m="2593740">the</span> <span
  m="2593850">inputs,</span> <span m="2594340">and</span> <span
  m="2594460">it</span> <span m="2594550">can</span> <span
  m="2595420">send</span> <span m="2595790">a</span> <span
  m="2595830">search</span> <span m="2596180">message</span> <span
  m="2596700">as</span> <span m="2596890">its</span> <span
  m="2597050">output.</span> <span m="2598560">It</span> <span
  m="2598710">can</span> <span m="2598860">also</span> <span
  m="2599180">output</span> <span m="2599570">parent</span> <span
  m="2600040">when</span> <span m="2600200">it's</span> <span
  m="2600360">ready</span> <span m="2600590">to</span> <span
  m="2600690">do</span> <span m="2600860">that.</span> <span
  m="2603500">What</span> <span m="2603630">does</span> <span
  m="2603760">it</span> <span m="2603840">have</span> <span
  m="2603990">to</span> <span m="2604080">keep</span> <span
  m="2604340">track</span> <span m="2604720">of?</span> <span
  m="2605020">Well,</span> <span m="2605180">it</span> <span
  m="2605250">keeps</span> <span m="2605480">track</span> <span
  m="2605790">of</span> <span m="2605900">its</span> <span
  m="2606850">parent,</span> <span m="2608800">keeps</span> <span
  m="2609070">track</span> <span m="2609390">of</span> <span
  m="2609500">whether</span> <span m="2609810">it's</span> <span
  m="2610110">reported</span> <span m="2610750">its</span> <span
  m="2610900">parent,</span> <span m="2611850">and</span> <span
  m="2612030">it</span> <span m="2612130">has</span> <span
  m="2612830">some</span> <span m="2614090">send</span> <span
  m="2614730">buffers</span> <span m="2615380">with</span> <span
  m="2615550">messages</span> <span m="2616140">it's</span> <span
  m="2616330">ready</span> <span m="2616580">to</span> <span
  m="2616690">send</span> <span m="2617090">to</span> <span
  m="2617340">its</span> <span m="2617530">neighbors,</span> <span
  m="2618580">could</span> <span m="2618740">be</span> <span
  m="2618850">search</span> <span m="2619220">messages</span> <span
  m="2619770">or</span> <span m="2619850">nothing.</span></p><p><span
  m="2622400">This</span> <span m="2622900">bottom</span> <span
  m="2623270">symbol</span> <span m="2623860">is</span> <span
  m="2624160">just</span> <span m="2624430">a</span> <span
  m="2624650">placeholder</span> <span m="2625390">symbol.</span> <span
  m="2630230">What</span> <span m="2630400">happens</span> <span
  m="2630900">when</span> <span m="2631600">the</span> <span
  m="2631680">process</span> <span m="2632130">receives</span> <span
  m="2632580">a</span> <span m="2632650">search</span> <span
  m="2633020">message,</span> <span m="2633840">just</span> <span
  m="2634060">following</span> <span m="2634420">the</span> <span
  m="2634480">simple</span> <span m="2634860">algorithm?</span> <span
  m="2636770">Well,</span> <span m="2637760">if</span> <span
  m="2637930">it</span> <span m="2638020">doesn't</span> <span
  m="2638330">have</span> <span m="2638490">a</span> <span
  m="2638530">parent</span> <span m="2638970">yet,</span> <span
  m="2640890">then</span> <span m="2641070">it</span> <span
  m="2641220">sets</span> <span m="2641920">its</span> <span
  m="2642120">parent</span> <span m="2642510">to</span> <span
  m="2642600">be</span> <span m="2642730">the</span> <span
  m="2642820">sender</span> <span m="2643260">of</span> <span
  m="2643350">that</span> <span m="2643530">search</span> <span
  m="2643850">message,</span> <span m="2645000">and</span> <span
  m="2645170">it</span> <span m="2645280">gets</span> <span
  m="2645530">ready</span> <span m="2645830">to</span> <span
  m="2646320">send</span> <span m="2646790">the</span> <span
  m="2646870">search</span> <span m="2647190">message</span> <span
  m="2647650">to</span> <span m="2647740">all</span> <span m="2647910">of</span>
  <span m="2648000">its</span> <span m="2648160">neighbors.</span></p><p><span
  m="2650320">That's</span> <span m="2650560">really</span> <span
  m="2650890">the</span> <span m="2651090">heart</span> <span
  m="2651470">of</span> <span m="2652270">the</span> <span
  m="2652750">algorithm</span> <span m="2653310">that</span> <span
  m="2653450">you</span> <span m="2653560">saw</span> <span
  m="2654660">for</span> <span m="2655310">the</span> <span
  m="2655430">simple</span> <span m="2655680">algorithm</span> <span
  m="2656010">for</span> <span m="2656160">that</span> <span
  m="2656710">is</span> <span m="2656980">the</span> <span
  m="2657070">synchronous</span> <span m="2657550">case</span> <span
  m="2657820">so</span> <span m="2657950">that's</span> <span
  m="2658180">the</span> <span m="2658250">same</span> <span
  m="2658500">code.</span> <span m="2659580">The</span> <span
  m="2659690">rest</span> <span m="2659930">of</span> <span
  m="2660000">the</span> <span m="2660060">code</span> <span
  m="2660380">is</span> <span m="2660570">it</span> <span
  m="2660690">just</span> <span m="2660910">sends</span> <span
  m="2661200">the</span> <span m="2661280">search</span> <span
  m="2661630">messages</span> <span m="2662180">out</span> <span
  m="2662410">when</span> <span m="2662540">it's</span> <span
  m="2662700">got</span> <span m="2662980">them</span> <span
  m="2663130">in</span> <span m="2663790">the</span> <span
  m="2663880">send</span> <span m="2664150">buffers,</span> <span
  m="2665750">and</span> <span m="2666050">it</span> <span
  m="2666140">can</span> <span m="2666300">announce</span> <span
  m="2666720">its</span> <span m="2666890">parent</span> <span
  m="2667320">once</span> <span m="2667570">the</span> <span
  m="2667650">parent</span> <span m="2668050">is</span> <span
  m="2668150">set,</span> <span m="2669290">and</span> <span
  m="2670370">then</span> <span m="2670570">it</span> <span
  m="2670650">doesn't--</span> <span m="2671370">this</span> <span
  m="2671600">flag</span> <span m="2671910">just</span> <span
  m="2672110">means</span> <span m="2672370">it</span> <span
  m="2672620">doesn't</span> <span m="2672930">keep</span> <span
  m="2673140">announcing</span> <span m="2673610">it</span> <span
  m="2673710">over</span> <span m="2673920">and</span> <span
  m="2674020">over</span> <span m="2674250">again.</span> <span
  m="2676300">It</span> <span m="2676390">makes</span> <span
  m="2676560">sense</span> <span m="2676850">that</span> <span
  m="2676970">this</span> <span m="2677170">describes</span> <span
  m="2677930">that</span> <span m="2678130">simple</span> <span
  m="2678460">algorithm.</span> <span m="2680380">It's</span> <span
  m="2680520">pretty</span> <span m="2680720">concise,</span> <span
  m="2681720">just</span> <span m="2681970">what</span> <span
  m="2682090">does</span> <span m="2682220">it</span> <span
  m="2682330">do</span> <span m="2682670">in</span> <span m="2682860">all</span>
  <span m="2682980">these</span> <span m="2683240">different</span> <span
  m="2683590">steps.</span> <span m="2686320">OK?</span></p><p><span
  m="2688850">Now,</span> <span m="2689030">if</span> <span
  m="2689130">you</span> <span m="2689270">run</span> <span
  m="2689490">this</span> <span m="2689680">asynchronously,</span> <span
  m="2690970">as</span> <span m="2691520">you</span> <span
  m="2691730">already</span> <span m="2692030">noted,</span> <span
  m="2692390">it</span> <span m="2692540">isn't</span> <span
  m="2692810">going</span> <span m="2693120">to</span> <span
  m="2693690">necessarily</span> <span m="2694350">work</span> <span
  m="2694640">right.</span> <span m="2696010">You</span> <span
  m="2696470">can</span> <span m="2696630">have</span> <span
  m="2696870">this</span> <span m="2697040">guy</span> <span
  m="2697370">sending</span> <span m="2697780">search</span> <span
  m="2698110">messages,</span> <span m="2699080">but</span> <span
  m="2699280">some</span> <span m="2699520">are</span> <span
  m="2699610">going</span> <span m="2699940">to</span> <span
  m="2700110">arrive</span> <span m="2700770">faster</span> <span
  m="2701570">than</span> <span m="2701740">others.</span> <span
  m="2703420">And</span> <span m="2703600">you</span> <span
  m="2703680">see</span> <span m="2703930">you</span> <span
  m="2704020">can</span> <span m="2704200">have</span> <span
  m="2704840">the</span> <span m="2704940">search</span> <span
  m="2705250">messages</span> <span m="2705750">creeping</span> <span
  m="2706130">around</span> <span m="2707530">in</span> <span
  m="2707690">an</span> <span m="2707820">indirect</span> <span
  m="2708400">path,</span> <span m="2709360">which</span> <span
  m="2709970">causes</span> <span m="2710530">a</span> <span
  m="2710620">spanning</span> <span m="2711060">tree</span> <span
  m="2711290">like</span> <span m="2711500">this</span> <span
  m="2711720">one</span> <span m="2711930">to</span> <span m="2712030">be</span>
  <span m="2712150">created,</span> <span m="2713090">which</span> <span
  m="2713270">is</span> <span m="2713380">definitely</span> <span
  m="2713870">not</span> <span m="2714340">a</span> <span
  m="2714430">breadth-first</span> <span m="2714980">spanning</span> <span
  m="2715360">tree.</span> <span m="2715600">The</span> <span
  m="2715690">breadth-first</span> <span m="2716350">tree</span> <span
  m="2716610">is</span> <span m="2716760">this</span> <span
  m="2716990">one--</span> <span m="2718160">a</span> <span
  m="2718280">breadth-first</span> <span m="2718820">tree.</span> <span
  m="2720830">You</span> <span m="2720950">have</span> <span
  m="2721110">these</span> <span m="2721280">roundabout</span> <span
  m="2721820">paths.</span></p><p><span m="2723150">This</span> <span
  m="2723320">doesn't</span> <span m="2723640">work.</span> <span
  m="2725340">What</span> <span m="2725450">do</span> <span
  m="2725510">we</span> <span m="2725630">do?</span> <span
  m="2727350">Yeah?</span></p><p><span m="2728322">AUDIENCE: You could</span>
  <span m="2728810">have</span> <span m="2729310">a</span> <span
  m="2729810">child</span> <span m="2730310">[INAUDIBLE].</span></p><p><span
  m="2740063">PROFESSOR: You're</span> <span m="2740550">going</span> <span
  m="2740730">to</span> <span m="2740800">try</span> <span m="2741010">to</span>
  <span m="2741600">synchronize</span> <span m="2742290">them,</span> <span
  m="2742430">basically.</span></p><p><span m="2745642">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="2747442">PROFESSOR: That</span> <span
  m="2747860">is</span> <span m="2748090">related</span> <span m="2748400">to
  a</span> <span m="2748510">homework</span> <span m="2748910">question</span>
  <span m="2749280">this</span> <span m="2749430">week.</span> <span
  m="2750190">Very</span> <span m="2750360">good.</span> <span
  m="2751850">We're</span> <span m="2751940">going</span> <span
  m="2752060">to</span> <span m="2752120">do</span> <span
  m="2752210">something</span> <span m="2752480">different.</span> <span
  m="2753600">Other</span> <span m="2753850">suggestions?</span> <span
  m="2755360">Yeah?</span></p><p><span m="2756037">AUDIENCE: We could</span>
  <span m="2757031">keep</span> <span m="2757528">a</span> <span
  m="2758025">variable</span> <span m="2759019">in each</span> <span
  m="2760013">process</span> <span m="2760510">that--</span> <span
  m="2762001">you can</span> <span m="2762498">do something</span> <span
  m="2762995">like</span> <span m="2763492">Bellman-Ford.</span></p><p><span
  m="2764000">PROFESSOR: Yeah,</span> <span m="2764350">so</span> <span
  m="2764480">you</span> <span m="2764580">can</span> <span
  m="2764780">do</span> <span m="2765020">what</span> <span
  m="2765300">we</span> <span m="2765410">did</span> <span
  m="2765620">for</span> <span m="2765740">Bellman-Ford,</span> <span
  m="2766470">but</span> <span m="2766600">now</span> <span
  m="2766880">the</span> <span m="2766970">setting</span> <span
  m="2767340">is</span> <span m="2767480">completely</span> <span
  m="2767910">different.</span> <span m="2768480">We</span> <span
  m="2768490">did</span> <span m="2768650">it</span> <span
  m="2768800">for</span> <span m="2768960">Bellman-Ford</span> <span
  m="2769920">when</span> <span m="2770050">it</span> <span
  m="2770110">was</span> <span m="2770200">synchronous</span> <span
  m="2770880">and</span> <span m="2771010">we</span> <span
  m="2771100">had</span> <span m="2771270">weights.</span> <span
  m="2772160">Now,</span> <span m="2772400">it's</span> <span
  m="2772570">asynchronous</span> <span m="2773340">and</span> <span
  m="2773440">there</span> <span m="2773540">are</span> <span
  m="2773580">no</span> <span m="2773750">weights.</span> <span
  m="2775050">OK?</span></p><p><span m="2777300">Oh,</span> <span
  m="2777730">there's</span> <span m="2777970">some</span> <span
  m="2778140">remarks</span> <span m="2778630">on</span> <span
  m="2778980">a</span> <span m="2779050">couple</span> <span
  m="2779330">of</span> <span m="2779400">slides</span> <span
  m="2779750">here.</span> <span m="2780810">This</span> <span
  m="2781020">is</span> <span m="2781130">just</span> <span
  m="2781650">belaboring</span> <span m="2782290">the</span> <span
  m="2782360">point,</span> <span m="2782710">that</span> <span
  m="2782830">the</span> <span m="2782900">paths</span> <span
  m="2783320">that</span> <span m="2783490">you</span> <span
  m="2783580">get</span> <span m="2783840">by</span> <span
  m="2784000">this</span> <span m="2784210">algorithm</span> <span
  m="2784810">can</span> <span m="2785010">be</span> <span
  m="2785140">longer</span> <span m="2785560">than</span> <span
  m="2785710">the</span> <span m="2785800">shortest</span> <span
  m="2786220">paths,</span> <span m="2787168">and--</span> <span
  m="2789064">yeah,</span> <span m="2789540">you</span> <span
  m="2789640">can</span> <span m="2789780">analyze</span> <span
  m="2790250">the</span> <span m="2790840">message</span> <span
  m="2791290">and</span> <span m="2791390">time</span> <span
  m="2791680">complexity.</span> <span m="2800740">The</span> <span
  m="2800810">complexity</span> <span m="2801490">here</span> <span
  m="2801740">is</span> <span m="2801890">order</span> <span
  m="2802310">of</span> <span m="2802420">the</span> <span
  m="2802490">diameter</span> <span m="2803210">times</span> <span
  m="2803640">the</span> <span m="2804140">message</span> <span
  m="2804570">delay</span> <span m="2805130">on</span> <span
  m="2805430">one</span> <span m="2806460">link.</span></p><p><span
  m="2808120">And</span> <span m="2809690">why</span> <span
  m="2809910">is</span> <span m="2810020">it the</span> <span
  m="2810130">diameter</span> <span m="2810800">even</span> <span
  m="2811170">though</span> <span m="2812980">some</span> <span
  m="2813230">paths</span> <span m="2813600">may</span> <span
  m="2813750">be</span> <span m="2813870">very</span> <span
  m="2814150">long?</span> <span m="2817280">This</span> <span
  m="2817310">is</span> <span m="2817370">a</span> <span m="2817470">real</span>
  <span m="2817760">time</span> <span m="2818150">upper</span> <span
  m="2818430">bound</span> <span m="2820530">that</span> <span
  m="2820670">depends</span> <span m="2821060">on</span> <span
  m="2821200">the</span> <span m="2822020">actual</span> <span
  m="2822390">diameter</span> <span m="2823040">of</span> <span
  m="2823140">the</span> <span m="2823220">graph,</span> <span
  m="2823960">not</span> <span m="2824460">on</span> <span
  m="2825390">the</span> <span m="2825520">total</span> <span
  m="2825870">number</span> <span m="2826220">of</span> <span
  m="2826330">nodes.</span> <span m="2829370">Why</span> <span
  m="2829600">would</span> <span m="2830910">an</span> <span
  m="2831090">upper</span> <span m="2831360">bound</span> <span
  m="2831850">on</span> <span m="2832060">the</span> <span
  m="2832240">running</span> <span m="2832580">time</span> <span
  m="2832920">for</span> <span m="2833040">the</span> <span
  m="2833150">simple</span> <span m="2833540">algorithm</span> <span
  m="2834090">depend</span> <span m="2834700">on</span> <span
  m="2835220">the</span> <span m="2835320">diameter?</span> <span
  m="2841720">Yeah?</span></p><p><span m="2841920">AUDIENCE: Because</span>
  <span m="2842385">you only</span> <span m="2842850">have a</span> <span
  m="2843315">longer</span> <span m="2843780">path if it's</span> <span
  m="2844245">faster</span> <span m="2844710">than--</span></p><p><span
  m="2845180">PROFESSOR: Exactly.</span> <span m="2845700">The</span> <span
  m="2845770">way</span> <span m="2845920">we're</span> <span
  m="2846030">modeling</span> <span m="2846530">it--</span> <span
  m="2846650">it's</span> <span m="2846790">a</span> <span
  m="2846850">little</span> <span m="2847050">strange,</span> <span
  m="2847540">maybe--</span> <span m="2847860">but</span> <span
  m="2847990">we're</span> <span m="2848110">saying</span> <span
  m="2848490">that</span> <span m="2848970">something</span> <span
  m="2849360">can</span> <span m="2849840">travel</span> <span
  m="2850260">on</span> <span m="2850330">a</span> <span m="2850380">long</span>
  <span m="2850660">path</span> <span m="2851030">only</span> <span
  m="2851210">if  it's</span> <span m="2851390">going</span> <span
  m="2851580">very</span> <span m="2851750">fast.</span> <span
  m="2852910">But</span> <span m="2853260">the</span> <span
  m="2853390">actual</span> <span m="2854240">shortest</span> <span
  m="2854730">paths</span> <span m="2855510">still</span> <span
  m="2855990">move</span> <span m="2856220">along,</span> <span
  m="2856780">at</span> <span m="2857240">worst,</span> <span
  m="2857770">at</span> <span m="2859135">d</span> <span m="2859530">time</span>
  <span m="2860060">per</span> <span m="2860240">hop.</span> <span
  m="2861750">At</span> <span m="2861890">worst,</span> <span
  m="2862460">the</span> <span m="2862600">shortest</span> <span
  m="2863030">path</span> <span m="2863310">information</span> <span
  m="2863970">would</span> <span m="2864120">get</span> <span
  m="2864340">there</span> <span m="2864540">within</span> <span
  m="2864870">time</span> <span m="2865220">d.</span> <span
  m="2866300">Something</span> <span m="2866680">is</span> <span
  m="2866770">going</span> <span m="2867010">to</span> <span
  m="2867110">get</span> <span m="2867310">there</span> <span
  m="2867460">within</span> <span m="2867750">time</span> <span
  m="2868030">d,</span> <span m="2868350">even</span> <span
  m="2868580">though</span> <span m="2868680">something</span> <span
  m="2869040">else</span> <span m="2869260">might</span> <span
  m="2869420">get</span> <span m="2869610">there</span> <span
  m="2869740">faster.</span> <span m="2871430">OK?</span> <span
  m="2872490">All</span> <span m="2872580">right.</span></p><p><span
  m="2875050">Yes,</span> <span m="2875430">we</span> <span
  m="2875570">can</span> <span m="2875710">set</span> <span
  m="2875890">up</span> <span m="2876030">a</span> <span
  m="2876060">child</span> <span m="2876350">pointers,</span> <span
  m="2876950">and</span> <span m="2879030">we</span> <span m="2879160">can
  do</span> <span m="2879310">termination</span> <span m="2880220">using</span>
  <span m="2880580">convergecast.</span> <span m="2881540">It's</span> <span
  m="2881720">just</span> <span m="2881950">one</span> <span
  m="2882140">tree.</span> <span m="2883910">There's</span> <span
  m="2884080">nothing</span> <span m="2884410">changing</span> <span
  m="2884910">here.</span> <span m="2886930">And</span> <span
  m="2887330">applications,</span> <span m="2888140">same</span> <span
  m="2888330">as</span> <span m="2888450">before.</span> <span
  m="2889860">But</span> <span m="2890210">that</span> <span
  m="2890380">didn't</span> <span m="2890660">work,</span> <span
  m="2891210">so</span> <span m="2891590">we're</span> <span
  m="2891720">going</span> <span m="2892040">to--</span> <span
  m="2892930">back</span> <span m="2893130">to</span> <span
  m="2893200">the</span> <span m="2893280">point</span> <span
  m="2893530">we</span> <span m="2893590">were</span> <span
  m="2893650">talking</span> <span m="2893980">about</span> <span
  m="2894180">a</span> <span m="2894210">minute</span> <span
  m="2894480">ago--</span> <span m="2894760">we're</span> <span
  m="2894920">going</span> <span m="2895190">to</span> <span
  m="2895310">use</span> <span m="2895540">a</span> <span
  m="2895610">relaxation</span> <span m="2896380">algorithm</span> <span
  m="2896890">like</span> <span m="2897130">Bellman-Ford.</span></p><p><span
  m="2899960">In</span> <span m="2900120">the</span> <span
  m="2900190">synchronous</span> <span m="2900790">case,</span> <span
  m="2901240">we</span> <span m="2901360">corrected</span> <span
  m="2902330">for</span> <span m="2902480">paths</span> <span
  m="2902960">that</span> <span m="2903090">had</span> <span
  m="2903270">many</span> <span m="2903560">hops</span> <span
  m="2904490">but</span> <span m="2904790">low</span> <span
  m="2905010">weight,</span> <span m="2906190">but</span> <span
  m="2906360">now</span> <span m="2906620">we're</span> <span
  m="2906740">going</span> <span m="2907080">to</span> <span
  m="2907200">correct</span> <span m="2907700">for</span> <span
  m="2907930">the</span> <span m="2908520">asynchrony</span> <span
  m="2909180">errors.</span> <span m="2909760">All</span> <span
  m="2909900">the</span> <span m="2910020">errors</span> <span
  m="2910360">that</span> <span m="2910490">you</span> <span
  m="2910590">get</span> <span m="2910820">because</span> <span
  m="2911220">of</span> <span m="2911860">things</span> <span
  m="2912140">traveling</span> <span m="2912590">fast</span> <span
  m="2913060">on</span> <span m="2913200">long</span> <span
  m="2913450">paths,</span> <span m="2914460">we're</span> <span
  m="2914590">going</span> <span m="2914800">to</span> <span
  m="2914860">correct</span> <span m="2915240">for</span> <span
  m="2915380">those</span> <span m="2915850">using</span> <span
  m="2916230">the</span> <span m="2916310">same</span> <span
  m="2917130">strategy.</span></p><p><span m="2919960">Everybody</span> <span
  m="2920460">is</span> <span m="2920590">going</span> <span
  m="2920850">to</span> <span m="2920930">keep</span> <span
  m="2921210">track</span> <span m="2921600">of</span> <span
  m="2921710">the</span> <span m="2921800">hop distance.</span> <span
  m="2923220">No</span> <span m="2923390">weights</span> <span
  m="2923720">now</span> <span m="2923920">just</span> <span m="2924130">the
  hop</span> <span m="2924220">distance,</span> <span m="2925690">and</span>
  <span m="2925840">they</span> <span m="2925920">will</span> <span
  m="2926070">change</span> <span m="2926540">the</span> <span
  m="2926610">parent</span> <span m="2927050">when</span> <span
  m="2927180">they</span> <span m="2927290">learn</span> <span
  m="2927520">of</span> <span m="2927600">a</span> <span
  m="2927660">shorter</span> <span m="2927990">path.</span> <span
  m="2929840">And</span> <span m="2929980">then</span> <span
  m="2930130">they</span> <span m="2930230">will</span> <span
  m="2930350">propagate</span> <span m="2930900">the</span> <span
  m="2930990">improved</span> <span m="2931400">distance,</span> <span
  m="2931840">so</span> <span m="2931930">it's</span> <span
  m="2932040">exactly</span> <span m="2932490">like</span> <span
  m="2932710">Bellman-Ford.</span> <span m="2934800">And</span> <span
  m="2934930">eventually,</span> <span m="2935390">this</span> <span
  m="2935600">will</span> <span m="2935720">stabilize</span> <span
  m="2936430">to</span> <span m="2936540">an</span> <span
  m="2936630">actual</span> <span m="2937050">breadth-first</span> <span
  m="2937590">spanning</span> <span m="2937960">tree.</span></p><p><span
  m="2940030">Here's</span> <span m="2940270">a</span> <span
  m="2940320">description</span> <span m="2940900">of</span> <span
  m="2941050">this</span> <span m="2941580">new</span> <span
  m="2942460">algorithm.</span> <span m="2943140">Everybody</span> <span
  m="2943540">keeps</span> <span m="2943840">track</span> <span
  m="2944180">of</span> <span m="2944280">their</span> <span
  m="2944400">parent,</span> <span m="2945620">and</span> <span
  m="2945750">now</span> <span m="2945870">they</span> <span
  m="2945970">keep</span> <span m="2946200">track</span> <span
  m="2946520">of</span> <span m="2946670">their</span> <span
  m="2946940">hop</span> <span m="2947290">distance,</span> <span
  m="2949220">and</span> <span m="2949310">they</span> <span
  m="2949380">have</span> <span m="2949480">their</span> <span
  m="2949590">channels.</span> <span m="2951240">Here's</span> <span
  m="2951530">the</span> <span m="2951600">key,</span> <span
  m="2951950">when</span> <span m="2952150">you</span> <span
  m="2952270">get</span> <span m="2953200">new</span> <span
  m="2953410">information--</span> <span m="2954110">you</span> <span
  m="2954210">receive</span> <span m="2954670">some</span> <span
  m="2954880">new</span> <span m="2955110">information,</span> <span
  m="2955860">this</span> <span m="2956040">m</span> <span m="2956240">is</span>
  <span m="2956360">a</span> <span m="2956410">number</span> <span
  m="2956790">of</span> <span m="2956890">hops</span> <span
  m="2959170">that</span> <span m="2959360">your</span> <span
  m="2959480">neighbor</span> <span m="2959780">is</span> <span
  m="2959930">telling</span> <span m="2960290">you.</span> <span
  m="2960630">Well,</span> <span m="2960980">if</span> <span
  m="2961450">m</span> <span m="2961670">plus</span> <span m="2962000">1,</span>
  <span m="2962410">which</span> <span m="2962600">would</span> <span
  m="2962710">be</span> <span m="2962870">your</span> <span
  m="2963110">new</span> <span m="2963350">estimate</span> <span
  m="2963820">for</span> <span m="2963970">a</span> <span
  m="2964030">number</span> <span m="2964310">of</span> <span
  m="2964410">hops--</span> <span m="2964720">if</span> <span
  m="2964860">that's</span> <span m="2965130">better</span> <span
  m="2966030">than</span> <span m="2966190">what</span> <span
  m="2966380">you</span> <span m="2966510">already</span> <span
  m="2966850">have,</span> <span m="2967940">then</span> <span
  m="2968120">you</span> <span m="2968230">just</span> <span
  m="2968460">replace</span> <span m="2968920">your</span> <span
  m="2969060">estimate</span> <span m="2970000">by</span> <span
  m="2970290">this</span> <span m="2970810">new</span> <span
  m="2971000">number</span> <span m="2971330">of</span> <span
  m="2971440">hops.</span></p><p><span m="2973340">And</span> <span
  m="2973660">you</span> <span m="2974720">set</span> <span
  m="2975170">your--</span> <span m="2975605">to</span> <span
  m="2976040">a</span> <span m="2976080">new</span> <span
  m="2976230">parent.</span> <span m="2976690">You</span> <span
  m="2976760">set</span> <span m="2977040">your</span> <span
  m="2977180">parent</span> <span m="2977480">pointer</span> <span
  m="2977870">to</span> <span m="2978380">the</span> <span
  m="2978510">sender,</span> <span m="2979910">and</span> <span
  m="2980120">you</span> <span m="2980190">propagate</span> <span
  m="2980680">this</span> <span m="2980850">information.</span> <span
  m="2982420">It's</span> <span m="2982520">exactly</span> <span
  m="2983000">the</span> <span m="2983120">same</span> <span
  m="2983890">as</span> <span m="2984110">what</span> <span
  m="2984280">we</span> <span m="2984400">had</span> <span
  m="2984610">before,</span> <span m="2985140">but</span> <span
  m="2985210">now</span> <span m="2985380">we're</span> <span
  m="2985500">correcting</span> <span m="2986610">for</span> <span
  m="2987260">the</span> <span m="2987810">asynchrony.</span> <span
  m="2989810">We</span> <span m="2989920">get</span> <span
  m="2990080">shorter</span> <span m="2990470">hop</span> <span
  m="2990780">paths</span> <span m="2991370">later.</span> <span
  m="2992430">Makes</span> <span m="2992620">sense?</span> <span
  m="2995750">And</span> <span m="2995940">the</span> <span
  m="2996010">rest</span> <span m="2996250">of</span> <span
  m="2996320">this</span> <span m="2996500">is</span> <span
  m="2996610">just</span> <span m="2996880">you</span> <span
  m="2996960">send</span> <span m="2997230">the</span> <span
  m="2997290">message.</span></p><p><span m="2998400">And</span> <span
  m="2998530">notice</span> <span m="2998810">we</span> <span
  m="2998920">don't</span> <span m="2999120">have</span> <span
  m="2999380">any</span> <span m="2999640">terminating</span> <span
  m="3000280">actions.</span> <span m="3000820">Why?</span> <span
  m="3001140">Because</span> <span m="3001470">we</span> <span
  m="3001570">have</span> <span m="3001670">the</span> <span
  m="3001740">same</span> <span m="3001970">problem</span> <span
  m="3002400">that</span> <span m="3002510">we</span> <span
  m="3002630">had</span> <span m="3002810">before</span> <span
  m="3003620">with</span> <span m="3003790">having</span> <span
  m="3004450">processes</span> <span m="3005680">know</span> <span
  m="3005930">when</span> <span m="3006070">they're</span> <span
  m="3006210">done.</span> <span m="3006750">If</span> <span
  m="3006930">you</span> <span m="3007030">keep</span> <span
  m="3007270">get</span> <span m="3007530">getting</span> <span
  m="3007770">corrections,</span> <span m="3008600">how</span> <span
  m="3008750">do</span> <span m="3008830">you</span> <span
  m="3008900">know</span> <span m="3009030">when</span> <span
  m="3009160">you're</span> <span m="3009270">finished?</span></p><p><span
  m="3012440">And</span> <span m="3013690">how</span> <span
  m="3013770">do</span> <span m="3013830">you</span> <span
  m="3013890">know</span> <span m="3014020">this</span> <span
  m="3014150">is</span> <span m="3014230">going</span> <span
  m="3014460">to</span> <span m="3014530">work?</span> <span
  m="3014830">In</span> <span m="3014930">the</span> <span
  m="3014990">synchronous</span> <span m="3015520">case,</span> <span
  m="3016500">we</span> <span m="3016620">could</span> <span
  m="3016780">get</span> <span m="3016940">an</span> <span
  m="3017040">exact</span> <span m="3017580">characterization</span> <span
  m="3018680">of</span> <span m="3019570">what</span> <span
  m="3019860">exactly</span> <span m="3020970">the</span> <span
  m="3021050">situation</span> <span m="3021730">is</span> <span
  m="3021940">after</span> <span m="3022480">any</span> <span
  m="3022710">number</span> <span m="3023440">of</span> <span
  m="3023620">rounds.</span> <span m="3024950">And</span> <span
  m="3025050">we</span> <span m="3025150">can't</span> <span
  m="3025260">do</span> <span m="3025400">that</span> <span
  m="3025640">now,</span> <span m="3025940">because</span> <span
  m="3026140">things</span> <span m="3026380">can</span> <span
  m="3026530">happen</span> <span m="3026850">in</span> <span
  m="3026970">so</span> <span m="3027160">many</span> <span
  m="3027630">orders.</span> <span m="3029220">We</span> <span
  m="3029560">have</span> <span m="3029770">to,</span> <span
  m="3030000">instead,</span> <span m="3030690">state</span> <span
  m="3031080">some</span> <span m="3031990">higher</span> <span
  m="3032310">level</span> <span m="3032850">abstract</span> <span
  m="3033430">properties,</span> <span m="3034670">either</span> <span
  m="3034920">in</span> <span m="3035040">variance</span> <span
  m="3035730">or</span> <span m="3036860">you'll</span> <span
  m="3037000">see</span> <span m="3037200">some</span> <span
  m="3037470">other</span> <span m="3037690">kinds</span> <span
  m="3038080">of</span> <span m="3038500">properties</span> <span
  m="3039160">as</span> <span m="3039310">well.</span></p><p><span
  m="3042670">We</span> <span m="3042790">could</span> <span
  m="3042970">say,</span> <span m="3043320">for</span> <span
  m="3043370">instance,</span> <span m="3044010">as</span> <span
  m="3044070">an</span> <span m="3044160">invariant,</span> <span
  m="3045310">that</span> <span m="3045550">all</span> <span
  m="3045740">the</span> <span m="3045820">distance</span> <span
  m="3046270">information</span> <span m="3046910">you</span> <span
  m="3047020">get</span> <span m="3047430">is</span> <span
  m="3047640">correct.</span> <span m="3050650">If</span> <span
  m="3050900">you</span> <span m="3051090">ever</span> <span
  m="3051460">have</span> <span m="3052250">your</span> <span
  m="3052420">distance</span> <span m="3052940">set</span> <span
  m="3053160">to</span> <span m="3053270">something,</span> <span
  m="3053780">it's</span> <span m="3053960">the</span> <span
  m="3054070">actual</span> <span m="3054510">distance</span> <span
  m="3055010">on</span> <span m="3055200">some</span> <span
  m="3055450">path</span> <span m="3055910">and</span> <span
  m="3056100">your</span> <span m="3056210">parent</span> <span
  m="3056630">is</span> <span m="3058070">correctly</span> <span
  m="3058530">set</span> <span m="3058850">to</span> <span m="3058960">be</span>
  <span m="3059670">your</span> <span m="3059810">predecessor</span> <span
  m="3060660">on</span> <span m="3060840">such</span> <span m="3061070">a</span>
  <span m="3061120">path.</span> <span m="3062720">This</span> <span
  m="3062860">is</span> <span m="3062940">just</span> <span
  m="3063130">saying</span> <span m="3063730">whatever</span> <span
  m="3064030">you</span> <span m="3064160">get</span> <span
  m="3064510">is</span> <span m="3064690">correct</span> <span
  m="3065050">information.</span> <span m="3065790">This</span> <span
  m="3065910">doesn't</span> <span m="3066210">say</span> <span
  m="3066480">that</span> <span m="3066650">eventually</span> <span
  m="3067400">you're</span> <span m="3067520">going</span> <span
  m="3067870">to</span> <span m="3068440">finish,</span> <span
  m="3068850">though.</span> <span m="3070190">It</span> <span
  m="3070330">just</span> <span m="3070540">says</span> <span
  m="3070890">what</span> <span m="3071100">you</span> <span
  m="3071260">get</span> <span m="3071530">is</span> <span
  m="3071690">correct.</span></p><p><span m="3074360">If</span> <span
  m="3075150">you</span> <span m="3075260">want</span> <span
  m="3075510">to</span> <span m="3075790">show</span> <span
  m="3076190">that,</span> <span m="3076700">eventually,</span> <span
  m="3077730">you</span> <span m="3078240">get</span> <span
  m="3078460">the</span> <span m="3078550">right</span> <span
  m="3078790">answer,</span> <span m="3079240">you</span> <span
  m="3079260">have</span> <span m="3079430">to</span> <span
  m="3079540">do</span> <span m="3079720">something</span> <span
  m="3080350">with</span> <span m="3080530">the</span> <span
  m="3080600">timing.</span> <span m="3081030">You</span> <span
  m="3081100">have</span> <span m="3081230">to</span> <span
  m="3081320">say</span> <span m="3081510">something</span> <span
  m="3081950">like</span> <span m="3085860">by</span> <span m="3086180">a</span>
  <span m="3086240">certain</span> <span m="3086620">time</span> <span
  m="3087160">that</span> <span m="3087230">depends</span> <span
  m="3087810">on</span> <span m="3089500">the</span> <span
  m="3089610">distance.</span> <span m="3091340">If</span> <span
  m="3091560">there</span> <span m="3091930">is--</span> <span m="3092040">and
  at</span> <span m="3092490">most</span> <span m="3092870">our</span> <span
  m="3093130">hop</span> <span m="3093430">path</span> <span
  m="3094340">to</span> <span m="3094560">a</span> <span
  m="3094620">node,</span> <span m="3095510">then</span> <span
  m="3095920">it</span> <span m="3096080">will</span> <span
  m="3096240">learn</span> <span m="3096510">about</span> <span
  m="3096890">that</span> <span m="3097320">by</span> <span m="3097620">a</span>
  <span m="3097690">certain</span> <span m="3098060">time,</span> <span
  m="3099160">but</span> <span m="3099450">that</span> <span
  m="3099600">depends</span> <span m="3100190">on</span> <span
  m="3100560">the</span> <span m="3100670">length</span> <span
  m="3100940">of</span> <span m="3101060">the</span> <span
  m="3101130">path</span> <span m="3102660">and</span> <span
  m="3103940">the</span> <span m="3104060">message</span> <span
  m="3104470">delivery</span> <span m="3104830">time.</span> <span
  m="3105620">And</span> <span m="3105720">the</span> <span
  m="3105790">number</span> <span m="3106040">of</span> <span
  m="3106150">nodes,</span> <span m="3106660">because</span> <span
  m="3106890">they</span> <span m="3106980">can</span> <span
  m="3107120">be</span> <span m="3107200">congestion.</span> <span
  m="3109280">You</span> <span m="3109400">have</span> <span
  m="3109560">to</span> <span m="3109660">not</span> <span
  m="3109870">only</span> <span m="3110080">say</span> <span
  m="3110630">things</span> <span m="3110880">are</span> <span
  m="3110930">correct,</span> <span m="3111480">but</span> <span
  m="3111640">you</span> <span m="3111720">have</span> <span
  m="3111890">to</span> <span m="3111990">say,</span> <span
  m="3112380">eventually,</span> <span m="3113280">you</span> <span
  m="3113460">get</span> <span m="3113680">the</span> <span
  m="3113780">right</span> <span m="3114390">result,</span> <span
  m="3115130">and</span> <span m="3115270">here</span> <span
  m="3115490">it</span> <span m="3115520">will</span> <span
  m="3115630">say</span> <span m="3116010">by</span> <span m="3116280">a</span>
  <span m="3116350">certain</span> <span m="3116650">time</span> <span
  m="3117040">you</span> <span m="3117140">get</span> <span
  m="3117330">the</span> <span m="3117420">right</span> <span
  m="3117630">result.</span> <span m="3118210">Makes</span> <span
  m="3118430">sense?</span> <span m="3120270">This</span> <span
  m="3120420">is</span> <span m="3120520">how</span> <span
  m="3120710">you</span> <span m="3120830">would</span> <span
  m="3121000">understand</span> <span m="3121650">an</span> <span
  m="3121750">algorithm</span> <span m="3122330">like</span> <span
  m="3122550">this</span> <span m="3122770">one.</span></p><p><span
  m="3124900">Message</span> <span m="3125330">complexity.</span> <span
  m="3127520">Since</span> <span m="3127780">there's</span> <span
  m="3127920">all</span> <span m="3128040">these</span> <span
  m="3128210">corrections,</span> <span m="3128940">you're</span> <span
  m="3129000">back</span> <span m="3129350">in</span> <span
  m="3129910">number</span> <span m="3130240">of</span> <span
  m="3130330">edges</span> <span m="3130680">times</span> <span
  m="3131180">possibly</span> <span m="3131770">the</span> <span
  m="3131870">number</span> <span m="3132150">of</span> <span
  m="3132270">nodes.</span> <span m="3133420">And</span> <span
  m="3133590">the</span> <span m="3133660">time</span> <span
  m="3134080">complexity,</span> <span m="3134880">till</span> <span
  m="3135110">all</span> <span m="3135480">the</span> <span
  m="3137300">distances</span> <span m="3137970">and</span> <span
  m="3138180">parent</span> <span m="3138520">values</span> <span
  m="3138890">stabilize,</span> <span m="3140420">could</span> <span
  m="3140630">be--</span> <span m="3141470">this</span> <span
  m="3141660">is</span> <span m="3141910">pessimistic</span> <span
  m="3142530">again--</span> <span m="3142960">the</span> <span
  m="3143220">diameter</span> <span m="3143830">times</span> <span
  m="3144190">the</span> <span m="3144260">number</span> <span
  m="3144560">of</span> <span m="3144660">nodes</span> <span
  m="3145140">times</span> <span m="3145500">d,</span> <span
  m="3145750">because</span> <span m="3147110">there</span> <span
  m="3147270">can</span> <span m="3147480">be</span> <span
  m="3148040">congestion</span> <span m="3148680">in</span> <span
  m="3148780">each</span> <span m="3148970">of</span> <span
  m="3149070">the</span> <span m="3149170">links</span> <span
  m="3150120">because</span> <span m="3150430">of</span> <span
  m="3150530">the</span> <span m="3150600">corrections.</span></p><p><span
  m="3155300">How</span> <span m="3155440">do</span> <span
  m="3155530">you</span> <span m="3155610">know</span> <span
  m="3155770">when</span> <span m="3155910">this</span> <span
  m="3156070">is</span> <span m="3156200">done?</span> <span
  m="3158000">How</span> <span m="3158160">can</span> <span m="3158300">a</span>
  <span m="3158340">process</span> <span m="3158830">know</span> <span
  m="3159100">when</span> <span m="3159410">it</span> <span
  m="3159510">can</span> <span m="3159690">finish?</span> <span
  m="3161450">Idea?</span> <span m="3167680">Before</span> <span
  m="3168510">we</span> <span m="3168640">had</span> <span
  m="3168790">said,</span> <span m="3169060">well,</span> <span
  m="3169350">if</span> <span m="3169450">you</span> <span
  m="3169550">knew</span> <span m="3170430">n,</span> <span
  m="3170860">if</span> <span m="3171000">you</span> <span
  m="3171080">knew</span> <span m="3171230">the</span> <span
  m="3171340">number</span> <span m="3171650">of</span> <span
  m="3171740">nodes,</span> <span m="3172450">you</span> <span
  m="3172540">could</span> <span m="3172730">weight</span> <span
  m="3173000">that</span> <span m="3173190">number</span> <span
  m="3173510">of</span> <span m="3173630">rounds.</span> <span
  m="3174850">That</span> <span m="3175030">doesn't</span> <span
  m="3175310">even</span> <span m="3175490">help</span> <span
  m="3175720">you</span> <span m="3175830">here.</span> <span
  m="3177800">Even</span> <span m="3177980">if</span> <span
  m="3178090">you</span> <span m="3178220">know--</span> <span
  m="3178930">have</span> <span m="3179120">a</span> <span
  m="3179180">good</span> <span m="3179400">upper</span> <span
  m="3179620">bound</span> <span m="3180050">on</span> <span
  m="3180140">the</span> <span m="3180210">number</span> <span
  m="3180530">of</span> <span m="3180650">nodes</span> <span
  m="3180970">in</span> <span m="3181060">the</span> <span
  m="3181130">network,</span> <span m="3182880">there's</span> <span
  m="3183020">no</span> <span m="3183180">rounds</span> <span
  m="3183500">to</span> <span m="3183590">count.</span> <span
  m="3186390">You</span> <span m="3186450">can't</span> <span
  m="3186760">tell.</span> <span m="3188270">Even</span> <span
  m="3188530">knowing</span> <span m="3188810">the</span> <span
  m="3188880">number</span> <span m="3189150">of</span> <span
  m="3189230">nodes</span> <span m="3189560">you</span> <span
  m="3189640">can't</span> <span m="3189910">tell,</span> <span
  m="3190100">so</span> <span m="3190260">how</span> <span
  m="3190440">might</span> <span m="3190710">you</span> <span
  m="3190810">detect</span> <span m="3191250">termination?</span> <span
  m="3193595">Yep?</span></p><p><span m="3195575">AUDIENCE: It could</span>
  <span m="3196070">bound</span> <span m="3196565">on</span> <span
  m="3197060">the</span> <span m="3197555">diameter of</span> <span
  m="3198050">[INAUDIBLE].</span></p><p><span m="3199050">PROFESSOR:
  Yeah,</span> <span m="3199920">well,</span> <span m="3200140">but</span> <span
  m="3200280">even</span> <span m="3200510">if</span> <span
  m="3200620">you</span> <span m="3200750">know</span> <span
  m="3200950">that,</span> <span m="3202980">you</span> <span
  m="3203090">can't</span> <span m="3203380">count</span> <span
  m="3203760">time.</span> <span m="3204400">See</span> <span
  m="3204590">this</span> <span m="3204760">is</span> <span
  m="3204880">the</span> <span m="3204960">thing</span> <span
  m="3205190">about</span> <span m="3205420">asynchronous</span> <span
  m="3206040">algorithms,</span> <span m="3206490">you</span> <span
  m="3206610">don't</span> <span m="3206950">have--</span> <span
  m="3207470">although</span> <span m="3207800">we're</span> <span
  m="3207960">using</span> <span m="3208320">time</span> <span
  m="3208810">to</span> <span m="3209160">measure</span> <span
  m="3209660">how</span> <span m="3209790">long</span> <span
  m="3210040">it's</span> <span m="3211250">termination</span> <span
  m="3211860">takes,</span> <span m="3213040">we--</span> <span
  m="3214060">the</span> <span m="3214230">processes</span> <span
  m="3214930">in</span> <span m="3215080">there</span> <span
  m="3215340">don't</span> <span m="3215580">have</span> <span
  m="3215800">that.</span> <span m="3216520">They're</span> <span
  m="3216660">just</span> <span m="3216900">these</span> <span
  m="3217190">asynchronous</span> <span m="3217870">guys</span> <span
  m="3218340">who</span> <span m="3218450">just</span> <span
  m="3218670">take</span> <span m="3218880">their</span> <span
  m="3219020">steps.</span> <span m="3219450">They're</span> <span
  m="3219640">ignorant</span> <span m="3220180">of</span> <span
  m="3220940">anything</span> <span m="3221290">to</span> <span
  m="3221400">do</span> <span m="3221530">with</span> <span
  m="3221730">time.</span> <span m="3224480">Other</span> <span
  m="3224690">ideas?</span> <span m="3225586">Yeah.</span></p><p><span
  m="3226012">AUDIENCE: Couldn't you</span> <span m="3226440">use the</span>
  <span m="3226840">same</span> <span m="3227250">converge</span> <span
  m="3227660">kind of thing--</span></p><p><span m="3227720">PROFESSOR:
  Same</span> <span m="3227990">thing.</span> <span m="3228730">We're just going
  to</span> <span m="3228810">use</span> <span m="3228990">convergecast</span>
  <span m="3229810">again,</span> <span m="3230150">same</span> <span
  m="3230400">idea.</span> <span m="3231660">You</span> <span
  m="3231770">just</span> <span m="3231950">compute</span> <span
  m="3232440">and</span> <span m="3232560">your</span> <span
  m="3232660">repute</span> <span m="3233180">your</span> <span
  m="3233290">child</span> <span m="3233740">pointers.</span> <span
  m="3234940">You</span> <span m="3235060">send</span> <span
  m="3235330">a</span> <span m="3235360">done</span> <span m="3235690">to</span>
  <span m="3235810">your</span> <span m="3235920">current</span> <span
  m="3236250">parent,</span> <span m="3237490">after</span> <span
  m="3237800">you've</span> <span m="3237930">gotten</span> <span
  m="3238290">responses</span> <span m="3239110">to</span> <span
  m="3239230">all</span> <span m="3239340">your</span> <span
  m="3239450">messages,</span> <span m="3240080">so</span> <span
  m="3240110">you</span> <span m="3240250">think</span> <span
  m="3240500">you</span> <span m="3240610">know</span> <span
  m="3240780">your</span> <span m="3240930">children.</span> <span
  m="3241510">And</span> <span m="3241770">they've</span> <span
  m="3241980">all</span> <span m="3242120">told</span> <span
  m="3242420">you</span> <span m="3242550">they're</span> <span
  m="3242720">done</span> <span m="3243780">and--</span> <span
  m="3244320">but</span> <span m="3244520">then</span> <span
  m="3244680">you</span> <span m="3244780">might</span> <span
  m="3245010">have</span> <span m="3245210">to</span> <span
  m="3245330">make</span> <span m="3245520">corrections,</span> <span
  m="3246150">so</span> <span m="3246650">as</span> <span m="3246980">in</span>
  <span m="3247490">what</span> <span m="3247640">we</span> <span
  m="3247730">saw</span> <span m="3247920">before,</span> <span
  m="3248720">you</span> <span m="3248800">can</span> <span
  m="3249050">be</span> <span m="3249180">involved</span> <span
  m="3249650">in</span> <span m="3249770">this</span> <span
  m="3249970">convergecast</span> <span m="3250710">several</span> <span
  m="3251010">times</span> <span m="3251450">until</span> <span
  m="3251660">it</span> <span m="3251740">finally</span> <span
  m="3252200">reaches</span> <span m="3253140">all</span> <span
  m="3253290">the</span> <span m="3253350">way</span> <span
  m="3253500">to</span> <span m="3253790">the</span> <span
  m="3253930">root.</span></p><p><span m="3258160">Once</span> <span
  m="3258360">you</span> <span m="3258450">have</span> <span
  m="3258680">these,</span> <span m="3258990">you</span> <span
  m="3259080">can</span> <span m="3259250">use</span> <span
  m="3259500">them</span> <span m="3259690">the</span> <span
  m="3259760">same</span> <span m="3260050">way</span> <span
  m="3260240">as</span> <span m="3260380">before.</span> <span
  m="3260980">You</span> <span m="3261620">now</span> <span
  m="3261900">have</span> <span m="3262120">costs</span> <span
  m="3262520">that</span> <span m="3262650">are</span> <span
  m="3262690">better</span> <span m="3263110">than</span> <span
  m="3263350">this</span> <span m="3264610">simple</span> <span
  m="3265070">tree</span> <span m="3265620">that</span> <span
  m="3266250">didn't</span> <span m="3266470">have</span> <span
  m="3266590">shortest</span> <span m="3266990">paths,</span> <span
  m="3267350">because</span> <span m="3267530">it</span> <span
  m="3267610">now</span> <span m="3267770">takes</span> <span
  m="3268130">you</span> <span m="3268240">less</span> <span
  m="3268520">time</span> <span m="3269450">to</span> <span
  m="3269710">use</span> <span m="3270050">the</span> <span
  m="3270140">tree</span> <span m="3270550">for</span> <span
  m="3271060">computing</span> <span m="3271550">functions</span> <span
  m="3272190">or</span> <span m="3272580">disseminating</span> <span
  m="3273300">information</span> <span m="3274050">because</span> <span
  m="3274200">the</span> <span m="3274290">tree</span> <span
  m="3274640">is</span> <span m="3275280">shallower.</span></p><p><span
  m="3279950">Finally,</span> <span m="3282810">what</span> <span
  m="3283050">happens</span> <span m="3283480">when</span> <span
  m="3283690">we</span> <span m="3283810">want</span> <span
  m="3284070">to</span> <span m="3284160">find</span> <span
  m="3284490">shortest</span> <span m="3285010">path</span> <span
  m="3285660">trees</span> <span m="3287090">in</span> <span
  m="3287490">an</span> <span m="3287670">asynchronous</span> <span
  m="3288350">setting?</span> <span m="3290420">Now,</span> <span
  m="3290630">we're</span> <span m="3290730">going</span> <span
  m="3290970">to</span> <span m="3291090">add</span> <span m="3291390">to</span>
  <span m="3291500">the</span> <span m="3291570">complications</span> <span
  m="3292510">that</span> <span m="3292650">we</span> <span
  m="3292760">just</span> <span m="3293080">saw</span> <span
  m="3293320">with</span> <span m="3293460">all</span> <span
  m="3293620">the</span> <span m="3293730">asynchrony.</span> <span
  m="3294950">The</span> <span m="3296040">complications</span> <span
  m="3296850">of</span> <span m="3296950">having</span> <span
  m="3297300">weights</span> <span m="3297650">on</span> <span
  m="3297760">the</span> <span m="3297880">edges.</span> <span
  m="3299790">All</span> <span m="3300230">right,</span> <span
  m="3300870">the</span> <span m="3300940">problem</span> <span
  m="3301380">is</span> <span m="3302090">get</span> <span m="3302260">a</span>
  <span m="3302310">shortest</span> <span m="3302740">path</span> <span
  m="3303070">spanning</span> <span m="3303520">tree,</span> <span
  m="3304380">now</span> <span m="3304640">in</span> <span m="3304720">an</span>
  <span m="3304870">asynchronous</span> <span m="3305610">network,</span> <span
  m="3308020">weighted</span> <span m="3308340">graph,</span> <span
  m="3311030">processes</span> <span m="3311590">don't</span> <span
  m="3311830">know</span> <span m="3312010">about</span> <span
  m="3312280">the</span> <span m="3312350">graph</span> <span
  m="3312710">again.</span> <span m="3314160">They</span> <span
  m="3314300">have</span> <span m="3315030">UIDs,</span> <span
  m="3318330">and</span> <span m="3318490">everybody's</span> <span
  m="3318920">supposed</span> <span m="3319290">to</span> <span
  m="3319390">output</span> <span m="3319880">its</span> <span
  m="3320220">distance</span> <span m="3320800">and</span> <span
  m="3320980">parent</span> <span m="3321410">in</span> <span
  m="3321570">the</span> <span m="3321630">tree.</span></p><p><span
  m="3327320">We're</span> <span m="3327450">going</span> <span
  m="3327690">to</span> <span m="3327840">use</span> <span
  m="3328270">another</span> <span m="3328980">relaxation</span> <span
  m="3329770">algorithm.</span> <span m="3333400">Now</span> <span
  m="3333550">think</span> <span m="3333800">about</span> <span
  m="3334170">what</span> <span m="3334470">the</span> <span
  m="3334670">relaxation</span> <span m="3335380">is</span> <span
  m="3335510">going</span> <span m="3335750">to</span> <span
  m="3335840">be</span> <span m="3335950">doing</span> <span
  m="3336320">for</span> <span m="3336560">you.</span> <span
  m="3340790">We</span> <span m="3340920">have</span> <span
  m="3341070">two</span> <span m="3341260">kinds</span> <span
  m="3341610">of</span> <span m="3341710">corrections</span> <span
  m="3342370">to</span> <span m="3342470">make.</span> <span
  m="3345060">You</span> <span m="3345180">could</span> <span
  m="3345370">have</span> <span m="3345660">long</span> <span
  m="3346140">paths</span> <span m="3346850">that</span> <span
  m="3347080">have</span> <span m="3347310">small</span> <span
  m="3347710">weight.</span> <span m="3348110">That</span> <span
  m="3348470">showed</span> <span m="3348840">up</span> <span
  m="3349020">for</span> <span m="3349190">Bellman-Ford</span> <span
  m="3350010">in</span> <span m="3350210">the</span> <span
  m="3350300">synchronous</span> <span m="3350870">setting,</span> <span
  m="3351740">so</span> <span m="3351930">we</span> <span
  m="3352040">have</span> <span m="3352180">to</span> <span
  m="3352260">correct</span> <span m="3352650">for</span> <span
  m="3352810">those.</span> <span m="3353980">But</span> <span
  m="3354150">you</span> <span m="3354220">could</span> <span
  m="3354400">also</span> <span m="3354770">have--</span> <span
  m="3355030">because</span> <span m="3355360">of</span> <span
  m="3355460">asynchrony,</span> <span m="3356590">you</span> <span
  m="3356690">could</span> <span m="3356820">have</span> <span
  m="3356970">information</span> <span m="3357580">travelling</span> <span
  m="3358100">fast</span> <span m="3358660">on</span> <span
  m="3359900">many</span> <span m="3360200">hops,</span> <span
  m="3361420">and</span> <span m="3361570">you</span> <span
  m="3361630">have</span> <span m="3361740">to</span> <span
  m="3361810">correct</span> <span m="3362150">for</span> <span
  m="3362260">that</span> <span m="3362450">as</span> <span
  m="3362600">well.</span> <span m="3362920">There's</span> <span
  m="3363350">two</span> <span m="3363540">kinds</span> <span
  m="3363900">of</span> <span m="3364000">things</span> <span
  m="3364380">you're</span> <span m="3364480">going</span> <span
  m="3364750">to</span> <span m="3364860">be</span> <span
  m="3364970">correcting</span> <span m="3365540">for</span> <span
  m="3365840">in</span> <span m="3366030">one</span> <span
  m="3366200">algorithm.</span></p><p><span m="3370000">This</span> <span
  m="3370270">is</span> <span m="3370390">going</span> <span
  m="3370750">to--</span> <span m="3371740">and</span> <span
  m="3371860">it's</span> <span m="3372030">pretty</span> <span
  m="3372300">surprising--</span> <span m="3372970">it's</span> <span
  m="3373140">going</span> <span m="3373360">to</span> <span
  m="3373440">lead</span> <span m="3373700">to</span> <span
  m="3373990">ridiculously</span> <span m="3374790">high</span> <span
  m="3375300">complexity,</span> <span m="3376590">message</span> <span
  m="3377030">and</span> <span m="3377190">time</span> <span
  m="3377460">complexity.</span> <span m="3378980">If</span> <span
  m="3379120">you</span> <span m="3379240">really</span> <span
  m="3379600">have</span> <span m="3379930">unbridled</span> <span
  m="3380520">asynchrony</span> <span m="3381240">and</span> <span
  m="3381490">weights,</span> <span m="3382250">this</span> <span
  m="3382430">is</span> <span m="3382630">going</span> <span
  m="3382910">to</span> <span m="3383350">give</span> <span
  m="3383570">you</span> <span m="3383720">a</span> <span
  m="3384150">very</span> <span m="3384420">costly</span> <span
  m="3384920">algorithm.</span> <span m="3385640">You're</span> <span
  m="3385740">going</span> <span m="3385950">to</span> <span
  m="3386270">see</span> <span m="3386590">some</span> <span
  m="3386790">exponential</span> <span m="3387800">is</span> <span
  m="3387960">going</span> <span m="3388130">to</span> <span
  m="3388200">creep</span> <span m="3388490">in</span> <span
  m="3388640">there.</span> <span m="3393200">Here's</span> <span
  m="3393390">the</span> <span m="3393900">algorithm</span> <span
  m="3394440">for</span> <span m="3394710">the</span> <span
  m="3394850">asynchronous</span> <span m="3395840">Bellman-Ford</span> <span
  m="3397330">algorithm.</span> <span m="3398300">Everyone</span> <span
  m="3398720">keeps</span> <span m="3399010">track</span> <span
  m="3399360">of</span> <span m="3399480">their</span> <span
  m="3399600">parent.</span> <span m="3401500">Their</span> <span
  m="3402390">conjecture</span> <span m="3403020">distance,</span> <span
  m="3404460">and</span> <span m="3404920">they</span> <span
  m="3405040">have,</span> <span m="3405940">now,</span> <span
  m="3406390">messages</span> <span m="3407040">that</span> <span
  m="3407210">they're</span> <span m="3407370">going</span> <span
  m="3408190">to</span> <span m="3408380">send</span> <span
  m="3408670">to</span> <span m="3408740">the</span> <span
  m="3408830">neighbors.</span> <span m="3409400">Let's</span> <span
  m="3409570">say</span> <span m="3409750">you</span> <span
  m="3409820">have</span> <span m="3409930">a</span> <span
  m="3409970">queue</span> <span m="3410340">because</span> <span
  m="3410720">there</span> <span m="3410860">could</span> <span
  m="3411010">be</span> <span m="3411180">successive</span> <span
  m="3412440">estimates.</span> <span m="3414230">We'll</span> <span
  m="3414260">have</span> <span m="3414390">a</span> <span
  m="3414430">queue</span> <span m="3414680">there.</span></p><p><span
  m="3417500">The</span> <span m="3417610">key</span> <span
  m="3417840">step,</span> <span m="3418440">the</span> <span
  m="3418480">relaxation</span> <span m="3419270">step,</span> <span
  m="3419640">is</span> <span m="3419850">what</span> <span
  m="3420030">happens</span> <span m="3420500">when</span> <span
  m="3420680">you</span> <span m="3420830">receive</span> <span
  m="3422180">a</span> <span m="3422300">new</span> <span
  m="3424000">estimate</span> <span m="3424700">of</span> <span
  m="3424980">the</span> <span m="3425080">best</span> <span
  m="3425440">distance.</span> <span m="3425940">This is</span> <span
  m="3426180">weighted</span> <span m="3426540">distance,</span> <span
  m="3427110">now,</span> <span m="3427390">from</span> <span
  m="3427630">a</span> <span m="3427670">neighbor.</span> <span
  m="3428890">Well,</span> <span m="3429220">you</span> <span
  m="3429390">look</span> <span m="3429590">at</span> <span
  m="3429690">that</span> <span m="3429910">distance</span> <span
  m="3430400">plus</span> <span m="3430730">the</span> <span
  m="3430810">weight</span> <span m="3431250">of</span> <span
  m="3431390">the</span> <span m="3431550">edge</span> <span
  m="3431780">in</span> <span m="3431900">between,</span> <span
  m="3432760">and</span> <span m="3432910">you</span> <span
  m="3433010">see</span> <span m="3433190">if</span> <span
  m="3433320">that's</span> <span m="3433560">better</span> <span
  m="3433860">than</span> <span m="3434040">your</span> <span
  m="3434160">current</span> <span m="3434510">distance,</span> <span
  m="3435810">just</span> <span m="3436030">like</span> <span
  m="3436710">synchronous</span> <span m="3437240">Bellman-Ford.</span> <span
  m="3438810">And</span> <span m="3438940">if</span> <span m="3439060">it</span>
  <span m="3439170">is,</span> <span m="3440000">then</span> <span
  m="3440460">you</span> <span m="3441240">improve</span> <span
  m="3441650">your</span> <span m="3441760">distance,</span> <span
  m="3443810">reset</span> <span m="3444210">your</span> <span
  m="3444310">parent,</span> <span m="3444940">and</span> <span
  m="3445230">send</span> <span m="3445850">the</span> <span
  m="3445970">distance</span> <span m="3446410">out</span> <span
  m="3446640">to</span> <span m="3446750">your</span> <span
  m="3446890">neighbors.</span></p><p><span m="3448630">It's</span> <span
  m="3448740">exactly</span> <span m="3449300">like</span> <span
  m="3449730">the</span> <span m="3450750">synchronous</span> <span
  m="3451310">case,</span> <span m="3451890">but</span> <span
  m="3452040">we're</span> <span m="3452260">going</span> <span
  m="3452510">to</span> <span m="3452640">be</span> <span
  m="3452940">running</span> <span m="3453310">this</span> <span
  m="3454040">asynchronously.</span> <span m="3456460">And</span> <span
  m="3456670">since</span> <span m="3456900">you're</span> <span
  m="3456990">going</span> <span m="3457290">to</span> <span
  m="3458310">be</span> <span m="3458470">correcting</span> <span
  m="3460460">every</span> <span m="3460730">time</span> <span
  m="3461120">you</span> <span m="3461360">see</span> <span m="3461620">a</span>
  <span m="3461670">new</span> <span m="3461840">estimate,</span> <span
  m="3462250">this</span> <span m="3462360">is</span> <span
  m="3462450">actually</span> <span m="3462750">going</span> <span
  m="3462990">to</span> <span m="3463080">handle</span> <span
  m="3463450">both</span> <span m="3463890">kinds</span> <span
  m="3464210">of</span> <span m="3464300">corrections,</span> <span
  m="3465170">whether</span> <span m="3465450">it</span> <span
  m="3465560">comes</span> <span m="3466590">because</span> <span
  m="3466980">of</span> <span m="3467220">a</span> <span m="3468790">many</span>
  <span m="3469040">hop</span> <span m="3469230">path</span> <span
  m="3469990">with</span> <span m="3470210">a</span> <span
  m="3470300">smaller</span> <span m="3470700">weight,</span> <span
  m="3471020">or</span> <span m="3471170">whether</span> <span
  m="3471820">it</span> <span m="3471950">just</span> <span
  m="3472140">comes</span> <span m="3472400">because</span> <span
  m="3472730">of</span> <span m="3472810">the</span> <span
  m="3472930">asynchrony.</span> <span m="3473800">Whenever</span> <span
  m="3474190">you</span> <span m="3474310">get</span> <span m="3474490">a</span>
  <span m="3474530">better</span> <span m="3474870">estimate,</span> <span
  m="3475440">you're</span> <span m="3475540">going</span> <span
  m="3475790">to</span> <span m="3475890">make</span> <span
  m="3476130">the</span> <span m="3476200">correction.</span> <span
  m="3478170">Is</span> <span m="3478260">it</span> <span
  m="3478330">clear</span> <span m="3478590">this</span> <span
  m="3478800">is</span> <span m="3478920">all</span> <span
  m="3479110">you</span> <span m="3479260">really</span> <span
  m="3479500">need</span> <span m="3479700">to</span> <span
  m="3479800">do</span> <span m="3480220">in</span> <span m="3480350">the</span>
  <span m="3480460">algorithm,</span> <span m="3481050">just</span> <span
  m="3481300">what's</span> <span m="3481490">in</span> <span
  m="3481840">this</span> <span m="3482140">code?</span> <span
  m="3487590">That's</span> <span m="3487820">the</span> <span
  m="3487920">received,</span> <span m="3488340">and</span> <span
  m="3488430">then</span> <span m="3488780">the</span> <span
  m="3488870">rest</span> <span m="3489100">of</span> <span
  m="3489160">the</span> <span m="3489270">algorithm</span> <span
  m="3489700">is</span> <span m="3489810">just</span> <span
  m="3490090">you</span> <span m="3490170">send</span> <span
  m="3490450">it</span> <span m="3490550">out</span> <span
  m="3491435">when</span> <span m="3491740">you're</span> <span
  m="3492120">ready</span> <span m="3492340">to</span> <span
  m="3492480">send.</span></p><p><span m="3495480">And</span> <span
  m="3495610">then</span> <span m="3495740">we</span> <span
  m="3495880">have</span> <span m="3496130">the</span> <span
  m="3496200">same</span> <span m="3496920">issue</span> <span
  m="3497330">about</span> <span m="3497630">termination,</span> <span
  m="3498610">there's</span> <span m="3498810">no</span> <span
  m="3502400">terminating</span> <span m="3502920">actions.</span> <span
  m="3503400">We'll</span> <span m="3503490">come</span> <span
  m="3503620">back</span> <span m="3503840">to</span> <span
  m="3503950">that.</span> <span m="3507580">It's</span> <span
  m="3507730">really</span> <span m="3507970">hard</span> <span
  m="3508260">to</span> <span m="3508350">come</span> <span
  m="3508580">up</span> <span m="3508720">with</span> <span
  m="3508870">invariants</span> <span m="3509660">and</span> <span
  m="3509820">timing</span> <span m="3510200">properties,</span> <span
  m="3510840">now,</span> <span m="3511090">for</span> <span
  m="3511290">this</span> <span m="3511940">setting.</span> <span
  m="3513110">You</span> <span m="3513230">can</span> <span
  m="3513390">certainly</span> <span m="3513770">have</span> <span
  m="3513950">an</span> <span m="3514030">invariant</span> <span
  m="3514630">like</span> <span m="3514840">the</span> <span
  m="3514910">one</span> <span m="3515170">that</span> <span
  m="3515300">we</span> <span m="3515410">just</span> <span
  m="3515730">had</span> <span m="3516180">for</span> <span
  m="3516840">asynchronous</span> <span m="3517600">breadth-first</span> <span
  m="3518180">search.</span> <span m="3519520">You</span> <span
  m="3519620">can</span> <span m="3519790">say</span> <span
  m="3520110">that</span> <span m="3520600">at</span> <span
  m="3520750">any</span> <span m="3520930">point,</span> <span
  m="3521500">whatever</span> <span m="3521870">distance</span> <span
  m="3522330">you</span> <span m="3522430">have</span> <span
  m="3522790">is</span> <span m="3523070">an</span> <span
  m="3523170">actual</span> <span m="3523850">distance</span> <span
  m="3524330">that's</span> <span m="3524520">achievable</span> <span
  m="3525190">along</span> <span m="3525520">some</span> <span
  m="3525790">path,</span> <span m="3526560">and</span> <span
  m="3526680">the</span> <span m="3526740">parent</span> <span
  m="3527130">is</span> <span m="3527280">correct.</span> <span
  m="3530040">But</span> <span m="3530170">we'd</span> <span
  m="3530290">also</span> <span m="3530590">like</span> <span
  m="3530870">to</span> <span m="3530960">have</span> <span
  m="3531130">something</span> <span m="3531510">that</span> <span
  m="3531630">says,</span> <span m="3531820">eventually,</span> <span
  m="3532260">you'll</span> <span m="3532330">get</span> <span
  m="3532510">the</span> <span m="3532590">right</span> <span
  m="3532810">distance.</span></p><p><span m="3536360">You</span> <span
  m="3536470">want</span> <span m="3536630">to</span> <span
  m="3536700">state</span> <span m="3537110">a</span> <span
  m="3537210">timing</span> <span m="3537620">property</span> <span
  m="3538130">that</span> <span m="3538300">says,</span> <span
  m="3538640">fine,</span> <span m="3539030">if</span> <span
  m="3539250">you</span> <span m="3539360">have</span> <span
  m="3539570">an</span> <span m="3539660">at</span> <span
  m="3539770">most</span> <span m="3540140">r</span> <span
  m="3540390">hop</span> <span m="3540690">path,</span> <span
  m="3541680">by</span> <span m="3541890">a</span> <span
  m="3541960">certain</span> <span m="3542330">time,</span> <span
  m="3542950">you'd</span> <span m="3543160">like</span> <span
  m="3543400">to</span> <span m="3543510">know</span> <span
  m="3543840">that</span> <span m="3544090">your</span> <span
  m="3544240">distance</span> <span m="3545400">is</span> <span
  m="3546070">at</span> <span m="3546230">least</span> <span
  m="3546510">as</span> <span m="3546650">good</span> <span
  m="3547030">as</span> <span m="3547560">what</span> <span
  m="3547760">you</span> <span m="3547840">could</span> <span
  m="3548000">get</span> <span m="3548200">on</span> <span
  m="3548320">that</span> <span m="3548520">path.</span> <span
  m="3550040">The</span> <span m="3550110">problem</span> <span
  m="3550530">is</span> <span m="3550830">what</span> <span
  m="3551100">are</span> <span m="3551210">you</span> <span
  m="3551350">going</span> <span m="3551710">to</span> <span
  m="3552800">have</span> <span m="3553070">here</span> <span
  m="3553270">for</span> <span m="3553410">the</span> <span
  m="3553500">amount</span> <span m="3553760">of</span> <span
  m="3553850">time?</span> <span m="3554340">How</span> <span
  m="3554430">long</span> <span m="3554800">would</span> <span
  m="3554920">it</span> <span m="3555070">possibly</span> <span
  m="3555670">take</span> <span m="3556580">in</span> <span
  m="3556720">order</span> <span m="3556960">to</span> <span
  m="3557100">get</span> <span m="3559240">the</span> <span
  m="3559350">best</span> <span m="3559680">estimate</span> <span
  m="3560820">that</span> <span m="3561000">you</span> <span
  m="3561100">could</span> <span m="3561640">for</span> <span
  m="3562420">a</span> <span m="3562520">path</span> <span m="3562990">of</span>
  <span m="3563130">at</span> <span m="3563250">most</span> <span
  m="3563580">r</span> <span m="3563790">hops?</span> <span m="3568850">A
  guess?</span> <span m="3572360">I</span> <span m="3572420">was</span> <span
  m="3572570">able</span> <span m="3572800">to</span> <span
  m="3572890">calculate</span> <span m="3573470">something</span> <span
  m="3573870">reasonable</span> <span m="3574440">for</span> <span
  m="3574640">the</span> <span m="3575020">breadth-first</span> <span
  m="3575590">search</span> <span m="3575910">case,</span> <span
  m="3577660">but</span> <span m="3578060">now</span> <span
  m="3579430">this</span> <span m="3579650">is</span> <span
  m="3579760">going</span> <span m="3580010">to</span> <span
  m="3580070">be</span> <span m="3580180">much,</span> <span
  m="3580560">much</span> <span m="3580720">worse.</span> <span
  m="3581190">It's</span> <span m="3581310">not</span> <span
  m="3581530">obvious</span> <span m="3581960">at</span> <span
  m="3582050">all.</span> <span m="3582380">It's</span> <span
  m="3582440">actually</span> <span m="3583580">going</span> <span
  m="3583920">to</span> <span m="3584610">depend</span> <span
  m="3585020">on</span> <span m="3585180">how</span> <span
  m="3585340">many</span> <span m="3585520">messages</span> <span
  m="3586160">could</span> <span m="3586320">pile</span> <span
  m="3586690">up</span> <span m="3586870">in</span> <span m="3586960">a</span>
  <span m="3587030">channel,</span> <span m="3588630">and</span> <span
  m="3588710">that</span> <span m="3588880">can</span> <span
  m="3589050">be</span> <span m="3589430">an</span> <span
  m="3589580">awful</span> <span m="3589870">lot,</span> <span
  m="3590430">an</span> <span m="3590560">exponential</span> <span
  m="3591230">number--</span> <span m="3591770">exponential</span> <span
  m="3592510">in</span> <span m="3592590">the</span> <span
  m="3592680">number</span> <span m="3592990">of</span> <span
  m="3593110">nodes</span> <span m="3593410">in</span> <span
  m="3593490">the</span> <span m="3593560">network.</span></p><p><span
  m="3604340">I'm</span> <span m="3604480">going</span> <span
  m="3604730">to</span> <span m="3605130">produce</span> <span
  m="3606290">an</span> <span m="3606500">execution</span> <span
  m="3607230">for</span> <span m="3607500">you</span> <span
  m="3607720">that</span> <span m="3610380">can</span> <span
  m="3610570">generate</span> <span m="3611280">a</span> <span
  m="3611330">huge</span> <span m="3611840">number</span> <span
  m="3612190">of</span> <span m="3612290">messages,</span> <span
  m="3613050">which</span> <span m="3613270">then</span> <span
  m="3613470">will</span> <span m="3613590">take</span> <span
  m="3613790">a</span> <span m="3613850">long</span> <span
  m="3614250">time</span> <span m="3614660">to</span> <span
  m="3614780">deliver</span> <span m="3615580">and</span> <span
  m="3615850">delay</span> <span m="3616450">the</span> <span
  m="3617110">termination</span> <span m="3617720">of</span> <span
  m="3617790">the</span> <span m="3617900">algorithm.</span> <span
  m="3619250">First,</span> <span m="3619470">let's</span> <span
  m="3619590">look</span> <span m="3619740">at</span> <span
  m="3619820">an</span> <span m="3619930">upper</span> <span
  m="3620170">bound.</span> <span m="3620520">What</span> <span
  m="3620870">can</span> <span m="3620960">we</span> <span
  m="3621050">say</span> <span m="3621250">for</span> <span
  m="3621380">an</span> <span m="3621470">upper</span> <span
  m="3621680">bound?</span> <span m="3623460">Well,</span> <span
  m="3623850">there's</span> <span m="3624020">many</span> <span
  m="3624320">different</span> <span m="3624720">paths</span> <span
  m="3625490">from</span> <span m="3625730">v</span> <span m="3625930">0</span>
  <span m="3626680">to</span> <span m="3627440">any</span> <span
  m="3627720">other</span> <span m="3627910">particular</span> <span
  m="3628530">node.</span> <span m="3629960">We</span> <span
  m="3630310">might</span> <span m="3630550">have</span> <span
  m="3630760">to</span> <span m="3631030">traverse</span> <span
  m="3634250">all</span> <span m="3634430">the</span> <span
  m="3634500">simple</span> <span m="3634840">paths</span> <span
  m="3635350">in</span> <span m="3635450">the</span> <span
  m="3635520">graph,</span> <span m="3636000">perhaps.</span> <span
  m="3637540">And</span> <span m="3637700">how</span> <span
  m="3637850">many</span> <span m="3638140">are</span> <span
  m="3638370">there?</span> <span m="3640480">Well,</span> <span
  m="3642510">as</span> <span m="3642700">an</span> <span
  m="3642790">upper</span> <span m="3642980">bound,</span> <span
  m="3643350">you</span> <span m="3643420">could</span> <span
  m="3643600">say</span> <span m="3643910">order</span> <span
  m="3644280">n</span> <span m="3644450">factorial</span> <span
  m="3645390">for</span> <span m="3645500">the</span> <span
  m="3645600">number</span> <span m="3645960">of</span> <span
  m="3646080">different</span> <span m="3646550">paths</span> <span
  m="3647100">that</span> <span m="3647310">you</span> <span
  m="3647430">can</span> <span m="3648260">traverse</span> <span
  m="3648780">to</span> <span m="3648890">get</span> <span
  m="3649080">from</span> <span m="3649560">v</span> <span m="3649710">0</span>
  <span m="3650130">to</span> <span m="3650690">some</span> <span
  m="3650960">particular</span> <span m="3651520">other</span> <span
  m="3651750">node.</span> <span m="3653500">That's</span> <span
  m="3653710">exponential</span> <span m="3654390">in</span> <span
  m="3654490">n.</span> <span m="3656230">Certainly,</span> <span
  m="3656570">it's</span> <span m="3656690">order</span> <span
  m="3657000">n</span> <span m="3657340">to the</span> <span
  m="3657490">n.</span></p><p><span m="3661510">This</span> <span
  m="3661670">says</span> <span m="3661970">that</span> <span
  m="3662920">the</span> <span m="3663040">number</span> <span
  m="3663400">of</span> <span m="3663510">messages</span> <span
  m="3664100">that</span> <span m="3664270">you</span> <span
  m="3664370">might</span> <span m="3664640">send</span> <span
  m="3664950">on</span> <span m="3665100">any</span> <span
  m="3665310">channel</span> <span m="3665700">could</span> <span
  m="3665900">correspond</span> <span m="3666490">to</span> <span
  m="3666730">doing</span> <span m="3667110">that</span> <span
  m="3667290">many</span> <span m="3667480">corrections.</span> <span
  m="3669600">This</span> <span m="3669790">can</span> <span
  m="3669960">blow</span> <span m="3670190">up</span> <span
  m="3670340">your</span> <span m="3670440">message</span> <span
  m="3670860">complexity</span> <span m="3672560">into</span> <span
  m="3673730">n</span> <span m="3674170">to the</span> <span
  m="3674425">n</span> <span m="3674680">times</span> <span
  m="3674970">the</span> <span m="3675030">number</span> <span
  m="3675300">of</span> <span m="3675410">edges,</span> <span
  m="3675770">and</span> <span m="3675900">your</span> <span
  m="3676000">time</span> <span m="3676430">complexity</span> <span
  m="3678860">n</span> <span m="3678960">to the</span> <span
  m="3679090">n</span> <span m="3679410">times,</span> <span
  m="3681670">n</span> <span m="3681920">times</span> <span
  m="3682210">d,</span> <span m="3682520">because</span> <span
  m="3682910">on</span> <span m="3683100">every</span> <span
  m="3684040">edge</span> <span m="3684760">you</span> <span
  m="3684880">might</span> <span m="3685070">have</span> <span
  m="3685340">to</span> <span m="3685580">wait</span> <span
  m="3685890">for</span> <span m="3686060">that</span> <span
  m="3686310">many</span> <span m="3687350">messages,</span> <span
  m="3688450">corrected</span> <span m="3688870">messages,</span> <span
  m="3689330">sitting</span> <span m="3689590">in</span> <span
  m="3689690">front</span> <span m="3689910">of</span> <span
  m="3690040">you.</span> <span m="3693910">That</span> <span
  m="3694090">seems</span> <span m="3694440">pretty</span> <span
  m="3694710">awful.</span> <span m="3696770">Does</span> <span
  m="3697000">it</span> <span m="3697090">actually</span> <span
  m="3697490">happen?</span> <span m="3698020">Can</span> <span
  m="3698170">you</span> <span m="3698260">actually</span> <span
  m="3698580">construct</span> <span m="3699190">an</span> <span
  m="3699280">execution</span> <span m="3700170">of</span> <span
  m="3700410">this</span> <span m="3700620">algorithm</span> <span
  m="3701900">where</span> <span m="3702290">you</span> <span
  m="3702420">get</span> <span m="3703040">exponential</span> <span
  m="3703740">bounds</span> <span m="3704150">like</span> <span
  m="3704430">that?</span> <span m="3705520">And</span> <span
  m="3705650">we'll</span> <span m="3705750">see</span> <span
  m="3706020">that,</span> <span m="3706350">yes,</span> <span
  m="3707030">you</span> <span m="3707210">can.</span></p><p><span
  m="3708410">Any</span> <span m="3708770">questions</span> <span
  m="3709190">so</span> <span m="3709320">far?</span> <span
  m="3712730">Here's</span> <span m="3713010">a</span> <span
  m="3713920">bad</span> <span m="3714130">example.</span> <span
  m="3716680">This</span> <span m="3716860">is</span> <span m="3716970">a</span>
  <span m="3717030">network,</span> <span m="3718780">consists</span> <span
  m="3719300">of</span> <span m="3719460">a</span> <span
  m="3719680">sequence</span> <span m="3720270">of,</span> <span
  m="3720960">let's</span> <span m="3721170">say,</span> <span
  m="3721670">k</span> <span m="3722000">plus</span> <span
  m="3722260">1--</span> <span m="3723030">k</span> <span
  m="3723420">plus</span> <span m="3723760">2,</span> <span m="3723950">I</span>
  <span m="3724010">guess,</span> <span m="3724290">nodes,</span> <span
  m="3726150">in</span> <span m="3726280">a</span> <span
  m="3726330">line.</span> <span m="3727760">And</span> <span
  m="3728100">I'm</span> <span m="3728210">going</span> <span
  m="3728500">to</span> <span m="3728650">throw</span> <span
  m="3729030">in</span> <span m="3730740">some</span> <span
  m="3730940">little</span> <span m="3731160">detour</span> <span
  m="3731680">nodes</span> <span m="3732820">in</span> <span
  m="3732980">between</span> <span m="3733530">each</span> <span
  m="3733770">consecutive</span> <span m="3734490">pair</span> <span
  m="3734830">of</span> <span m="3734940">nodes</span> <span
  m="3735420">in</span> <span m="3735560">this</span> <span
  m="3735730">graph,</span> <span m="3737380">and</span> <span
  m="3737560">now</span> <span m="3737690">let</span> <span
  m="3737780">me</span> <span m="3737870">play</span> <span
  m="3738080">with</span> <span m="3738230">the</span> <span
  m="3738300">weights.</span> <span m="3740950">Let's</span> <span
  m="3741190">say</span> <span m="3741370">on</span> <span
  m="3741570">this</span> <span m="3741820">path,</span> <span
  m="3743060">this</span> <span m="3743240">direct</span> <span
  m="3743710">path</span> <span m="3744240">from</span> <span
  m="3744760">v</span> <span m="3744960">0</span> <span m="3745370">to</span>
  <span m="3745540">vk</span> <span m="3745930">plus</span> <span
  m="3746210">1,</span> <span m="3746390">all</span> <span
  m="3746580">the</span> <span m="3746650">weights</span> <span
  m="3746970">are</span> <span m="3747050">0.</span> <span
  m="3748480">That's</span> <span m="3748790">going</span> <span
  m="3749060">to</span> <span m="3749190">be</span> <span m="3750600">the</span>
  <span m="3750730">shortest</span> <span m="3751120">path,</span> <span
  m="3751500">the</span> <span m="3751570">best</span> <span
  m="3751910">weight</span> <span m="3752070">path,</span> <span
  m="3753570">from v</span> <span m="3754010">0</span> <span
  m="3754520">to</span> <span m="3754660">vk</span> <span
  m="3754980">plus</span> <span m="3755250">1.</span></p><p><span
  m="3756650">But</span> <span m="3756850">now</span> <span
  m="3757060">I'm</span> <span m="3757160">going</span> <span
  m="3757370">to</span> <span m="3757440">have</span> <span
  m="3757630">some</span> <span m="3757830">detours.</span> <span
  m="3759930">And</span> <span m="3760310">on</span> <span
  m="3762140">the</span> <span m="3762210">detours</span> <span
  m="3762800">I</span> <span m="3762940">have</span> <span
  m="3763110">two</span> <span m="3763350">edges,</span> <span
  m="3764160">one</span> <span m="3764390">of</span> <span
  m="3764500">weight</span> <span m="3764800">0</span> <span
  m="3765840">and</span> <span m="3766010">the</span> <span
  m="3766120">other</span> <span m="3766310">one</span> <span
  m="3766670">of</span> <span m="3766890">weight</span> <span
  m="3767130">that's</span> <span m="3767280">a</span> <span
  m="3767340">power</span> <span m="3767680">of</span> <span
  m="3767800">2.</span> <span m="3768710">I'm</span> <span
  m="3768780">going</span> <span m="3768900">to</span> <span
  m="3768960">start</span> <span m="3769240">with</span> <span
  m="3769350">high</span> <span m="3769560">powers</span> <span
  m="3769990">of</span> <span m="3770100">2,</span> <span m="3770450">2
  to</span> <span m="3770670">the</span> <span m="3770770">k</span> <span
  m="3770950">minus</span> <span m="3771250">1,</span> <span
  m="3771650">and</span> <span m="3771770">go</span> <span
  m="3771900">down</span> <span m="3772420">to</span> <span m="3772610">2 to the
  k</span> <span m="3772670">minus</span> <span m="3773120">2,</span> <span
  m="3773810">down</span> <span m="3774180">to</span> <span m="3774510">2 of
  the</span> <span m="3774610">1,</span> <span m="3774920">to</span> <span
  m="3775170">the</span> <span m="3775290">0.</span> <span
  m="3776986">See</span> <span m="3777420">what</span> <span
  m="3777540">this</span> <span m="3777710">graph</span> <span
  m="3778060">is</span> <span m="3778520">doing?</span> <span
  m="3778900">It</span> <span m="3779140">has</span> <span m="3779520">a</span>
  <span m="3779600">very</span> <span m="3779980">fast</span> <span
  m="3780280">path</span> <span m="3780680">in</span> <span
  m="3780770">the</span> <span m="3780830">bottom,</span> <span
  m="3781510">which</span> <span m="3781850">you'd</span> <span
  m="3781970">like</span> <span m="3782190">to</span> <span
  m="3782300">hear</span> <span m="3782480">about</span> <span
  m="3782810">as</span> <span m="3782900">soon</span> <span
  m="3783120">as</span> <span m="3783230">you</span> <span
  m="3783320">can.</span> <span m="3784390">But,</span> <span
  m="3784610">actually,</span> <span m="3785800">there</span> <span
  m="3785950">is</span> <span m="3786070">detours</span> <span
  m="3786760">which</span> <span m="3786980">could</span> <span
  m="3787200">give</span> <span m="3787390">you</span> <span
  m="3787510">much</span> <span m="3787760">worse</span> <span
  m="3788070">paths.</span></p><p><span m="3794140">Let's</span> <span
  m="3794320">see</span> <span m="3794470">how</span> <span
  m="3794700">this</span> <span m="3795800">might</span> <span
  m="3796080">execute</span> <span m="3796740">to</span> <span
  m="3797000">make</span> <span m="3797300">a</span> <span
  m="3797370">lot</span> <span m="3797700">of</span> <span
  m="3797800">messages</span> <span m="3798380">pile</span> <span
  m="3798800">up</span> <span m="3799710">in</span> <span m="3799820">a</span>
  <span m="3799890">channel.</span> <span m="3801820">My</span> <span
  m="3801940">claim</span> <span m="3802260">is</span> <span
  m="3802380">that</span> <span m="3802610">there's</span> <span
  m="3802840">an</span> <span m="3802920">execution</span> <span
  m="3803680">of</span> <span m="3803810">that</span> <span
  m="3804040">network</span> <span m="3805230">in</span> <span
  m="3805390">which</span> <span m="3806620">the</span> <span
  m="3806750">last</span> <span m="3807170">node,</span> <span
  m="3807760">bk,</span> <span m="3809500">sends</span> <span m="3812080">2 to
  the</span> <span m="3812300">k</span> <span m="3813110">messages</span> <span
  m="3814030">to</span> <span m="3814180">the</span> <span
  m="3814280">next</span> <span m="3814600">node</span> <span
  m="3814900">vk</span> <span m="3815290">plus</span> <span
  m="3815590">1.</span> <span m="3817390">He's</span> <span
  m="3817550">really</span> <span m="3817790">going</span> <span
  m="3818100">to</span> <span m="3818190">send</span> <span
  m="3818590">an</span> <span m="3818700">exponential</span> <span
  m="3819410">number</span> <span m="3819770">of</span> <span
  m="3819870">messages</span> <span m="3820400">corresponding</span> <span
  m="3821040">to</span> <span m="3821240">his</span> <span
  m="3821760">corrections.</span> <span m="3822490">He's</span> <span
  m="3822670">going</span> <span m="3822870">to</span> <span
  m="3822930">keep</span> <span m="3823190">making</span> <span
  m="3823550">corrections</span> <span m="3824540">for</span> <span
  m="3824640">better</span> <span m="3824950">and</span> <span
  m="3825060">better</span> <span m="3825320">estimates.</span> <span
  m="3828100">And</span> <span m="3828460">if</span> <span
  m="3828620">all</span> <span m="3828810">this</span> <span
  m="3828990">happens</span> <span m="3829390">relatively</span> <span
  m="3829960">fast,</span> <span m="3831220">that</span> <span
  m="3831370">just</span> <span m="3831560">means</span> <span
  m="3831840">you</span> <span m="3831930">have</span> <span
  m="3832080">a</span> <span m="3832120">channel</span> <span
  m="3832640">with</span> <span m="3832810">an</span> <span
  m="3833010">exponential</span> <span m="3833570">number</span> <span
  m="3833850">of</span> <span m="3833930">messages</span> <span
  m="3834440">in</span> <span m="3834570">it,</span> <span
  m="3835590">emptying</span> <span m="3836020">that</span> <span
  m="3836220">will</span> <span m="3836330">take</span> <span
  m="3836610">exponential</span> <span m="3837240">time.</span></p><p><span
  m="3843380">You</span> <span m="3843520">have</span> <span
  m="3843630">an</span> <span m="3843710">idea</span> <span
  m="3843980">how</span> <span m="3844140">this</span> <span
  m="3844320">might</span> <span m="3844520">happen?</span> <span
  m="3846690">How</span> <span m="3846930">could</span> <span
  m="3848350">this</span> <span m="3848600">node,</span> <span
  m="3850510">bk,</span> <span m="3851320">get</span> <span
  m="3851570">so</span> <span m="3851770">many</span> <span
  m="3852880">successively</span> <span m="3853680">improved</span> <span
  m="3854260">estimates,</span> <span m="3854840">one</span> <span
  m="3855060">after</span> <span m="3855350">the</span> <span
  m="3855520">other?</span> <span m="3861110">Well,</span> <span
  m="3861250">what's</span> <span m="3861470">the</span> <span
  m="3861540">biggest</span> <span m="3861950">estimate</span> <span
  m="3862350">it</span> <span m="3862440">might</span> <span
  m="3862580">get?</span> <span m="3868980">Yeah?</span></p><p><span
  m="3869442">AUDIENCE: 2 to the k minus</span> <span
  m="3869904">1.</span></p><p><span m="3870366">PROFESSOR: It</span> <span
  m="3870830">could</span> <span m="3871010">get</span> <span
  m="3871200">2</span> <span m="3871360">to the</span> <span
  m="3871620">k</span> <span m="3871710">minus</span> <span
  m="3872080">1?</span> <span m="3873280">Well,</span> <span
  m="3873920">let's</span> <span m="3874140">see.</span></p><p><span
  m="3874500">AUDIENCE: Or</span> <span
  m="3874590">[INAUDIBLE].</span></p><p><span m="3875436">PROFESSOR: It</span>
  <span m="3875860">could</span> <span m="3876010">do</span> <span
  m="3876160">that.</span></p><p><span m="3877195">AUDIENCE: Then it's</span>
  <span m="3877640">2 to the</span> <span m="3878085">k.</span></p><p><span
  m="3878530">PROFESSOR: And</span> <span m="3878630">it</span> <span
  m="3878690">could</span> <span m="3878840">do</span> <span
  m="3878960">that.</span></p><p><span m="3879873">AUDIENCE: Plus 2</span> <span
  m="3880356">to the k.</span></p><p><span m="3880840">PROFESSOR: Plus</span>
  <span m="3881110">2</span> <span m="3881320">to the k</span> <span
  m="3881650">minus 2,</span> <span m="3881860">plus</span> <span
  m="3882390">all</span> <span m="3882530">the</span> <span
  m="3882600">way</span> <span m="3882760">down</span> <span
  m="3883050">to</span> <span m="3883270">plus</span> <span m="3883550">2
  to</span> <span m="3883700">the</span> <span m="3883910">0.</span> <span
  m="3885100">You</span> <span m="3885230">could</span> <span
  m="3885370">be</span> <span m="3885490">following</span> <span
  m="3886010">this</span> <span m="3886200">really</span> <span
  m="3886810">inefficient</span> <span m="3887380">path,</span> <span
  m="3888000">just</span> <span m="3889080">all</span> <span
  m="3889260">the</span> <span m="3889340">detours,</span> <span
  m="3891090">before</span> <span m="3891620">the</span> <span
  m="3891870">messages</span> <span m="3892450">actually</span> <span
  m="3892970">arrive</span> <span m="3893550">on</span> <span
  m="3894580">the</span> <span m="3894710">edges</span> <span
  m="3895110">on</span> <span m="3895290">the</span> <span
  m="3895370">spine.</span></p><p><span m="3895780">AUDIENCE:
  [INAUDIBLE].</span></p><p><span m="3897010">PROFESSOR: Yeah,</span> <span
  m="3897330">so</span> <span m="3897450">you</span> <span
  m="3897740">follow</span> <span m="3898220">all--</span> <span
  m="3900395">oh,</span> <span m="3900730">you</span> <span
  m="3900860">said</span> <span m="3901140">2 to</span> <span
  m="3901390">the</span> <span m="3901480">k,</span> <span
  m="3902410">minus</span> <span m="3902870">1,</span> <span
  m="3903340">parenthesis.</span> <span m="3904040">Yeah,</span> <span
  m="3904450">that's</span> <span m="3904650">exactly</span> <span
  m="3905010">right.</span></p><p><span m="3905430">AUDIENCE: It's</span> <span
  m="3905850">all right.</span> <span
  m="3906270">[INAUDIBLE].</span></p><p><span m="3907860">PROFESSOR: We</span>
  <span m="3908180">can't</span> <span m="3908770">parenthesize</span> <span
  m="3909430">our</span> <span m="3909530">speech.</span> <span
  m="3911470">All</span> <span m="3911590">right,</span> <span
  m="3913120">so</span> <span m="3913360">the</span> <span
  m="3913450">possible</span> <span m="3914160">estimates</span> <span
  m="3914870">that</span> <span m="3915580">bk</span> <span
  m="3915940">can</span> <span m="3916170">take</span> <span
  m="3916500">on</span> <span m="3916810">are</span> <span
  m="3916910">actually</span> <span m="3919500">2 to</span> <span
  m="3919780">the</span> <span m="3920020">k--</span> <span
  m="3920770">as</span> <span m="3920940">you</span> <span
  m="3921030">said,</span> <span m="3921290">2 to</span> <span
  m="3921520">the</span> <span m="3921610">k</span> <span
  m="3922220">minus</span> <span m="3922630">1,</span> <span
  m="3923870">which</span> <span m="3924110">you</span> <span
  m="3924170">would</span> <span m="3924320">get</span> <span
  m="3924570">by</span> <span m="3925140">taking</span> <span m="3925520">all
  of</span> <span m="3925670">the</span> <span m="3925760">detours</span> <span
  m="3926510">and</span> <span m="3926620">adding</span> <span
  m="3926910">up</span> <span m="3927060">the</span> <span
  m="3927140">powers</span> <span m="3927520">of</span> <span
  m="3927630">2.</span> <span m="3930580">But</span> <span m="3930710">it</span>
  <span m="3930790">could</span> <span m="3930940">also</span> <span
  m="3931350">have</span> <span m="3931570">an</span> <span
  m="3931680">estimate,</span> <span m="3932230">which</span> <span
  m="3932300">is</span> <span m="3932430">2</span> <span m="3932630">to</span>
  <span m="3932720">the</span> <span m="3932820">k</span> <span
  m="3933480">minus</span> <span m="3933910">2</span> <span
  m="3934900">or</span> <span m="3935060">2 to</span> <span
  m="3935380">the</span> <span m="3935470">k</span> <span
  m="3935930">minus</span> <span m="3936310">3.</span> <span
  m="3937340">All</span> <span m="3937620">of</span> <span
  m="3937720">those</span> <span m="3937970">are</span> <span
  m="3938030">possible.</span> <span m="3940090">Moreover,</span> <span
  m="3940920">you</span> <span m="3941050">can</span> <span
  m="3941220">have</span> <span m="3941450">a</span> <span
  m="3941670">single</span> <span m="3942160">execution</span> <span
  m="3942920">of</span> <span m="3943040">this</span> <span
  m="3943220">asynchronous</span> <span m="3943930">algorithm</span> <span
  m="3945070">in</span> <span m="3945250">which</span> <span
  m="3945760">node</span> <span m="3946300">bk</span> <span
  m="3946920">actually</span> <span m="3947480">acquires</span> <span
  m="3948290">all</span> <span m="3948560">those</span> <span
  m="3948880">estimates</span> <span m="3949560">in</span> <span
  m="3949750">sequence,</span> <span m="3950370">one</span> <span
  m="3950580">at</span> <span m="3950660">a</span> <span
  m="3950740">time.</span></p><p><span m="3953270">How</span> <span
  m="3953420">might</span> <span m="3953690">that</span> <span
  m="3953900">work?</span> <span m="3954200">First,</span> <span
  m="3954580">the</span> <span m="3954640">messages</span> <span
  m="3955250">travel</span> <span m="3955730">all</span> <span
  m="3955960">the</span> <span m="3956040">detours.</span> <span
  m="3957460">Fine,</span> <span m="3957820">bk</span> <span
  m="3958220">gets</span> <span m="3958590">2 to</span> <span
  m="3958860">the</span> <span m="3958960">k</span> <span
  m="3959650">minus</span> <span m="3960080">1.</span> <span
  m="3961560">Then,</span> <span m="3963230">there's</span> <span
  m="3963430">a</span> <span m="3963470">message</span> <span
  m="3963960">traveling--</span> <span m="3964950">well</span> <span
  m="3965120">this</span> <span m="3965280">guy</span> <span
  m="3965480">sends</span> <span m="3965810">a</span> <span
  m="3965850">message</span> <span m="3966320">on</span> <span
  m="3966790">the</span> <span m="3966900">lower</span> <span
  m="3967450">link.</span> <span m="3969470">This</span> <span
  m="3969670">guy</span> <span m="3970080">has</span> <span
  m="3970600">only</span> <span m="3970940">heard</span> <span
  m="3971220">about</span> <span m="3971490">the</span> <span
  m="3971550">messages</span> <span m="3972100">on</span> <span
  m="3972230">the</span> <span m="3972310">detours</span> <span
  m="3972900">up</span> <span m="3973050">to</span> <span
  m="3973140">that</span> <span m="3973390">point.</span> <span
  m="3974990">But</span> <span m="3975140">he</span> <span
  m="3975240">sends</span> <span m="3975590">that</span> <span
  m="3975880">on</span> <span m="3976050">the</span> <span
  m="3976120">lower</span> <span m="3976530">link,</span> <span
  m="3977350">which</span> <span m="3977540">means</span> <span
  m="3977730">you</span> <span m="3977810">kind</span> <span
  m="3978020">of</span> <span m="3978090">bypass</span> <span
  m="3978730">this</span> <span m="3979010">weight</span> <span
  m="3979330">of</span> <span m="3979490">one.</span> <span
  m="3981340">bk</span> <span m="3981690">gets</span> <span m="3981980">a</span>
  <span m="3982070">little</span> <span m="3982320">bit</span> <span
  m="3982490">of</span> <span m="3982600">an</span> <span
  m="3982690">improvement,</span> <span m="3984720">which</span> <span
  m="3985230">gives</span> <span m="3985470">it</span> <span m="3985640">2
  to</span> <span m="3985810">the</span> <span m="3985990">k</span> <span
  m="3986420">minus</span> <span m="3986720">2</span> <span
  m="3987530">as</span> <span m="3987750">its</span> <span
  m="3987890">estimate.</span></p><p><span m="3991240">What</span> <span
  m="3991400">happens</span> <span m="3991800">next?</span> <span
  m="3994050">Well,</span> <span m="3994390">we</span> <span
  m="3994740">step</span> <span m="3995060">one</span> <span
  m="3995260">back,</span> <span m="3995670">and</span> <span
  m="3995970">the</span> <span m="3996070">node</span> <span
  m="3996410">from</span> <span m="3997150">node</span> <span
  m="3997850">k</span> <span m="3998280">minus</span> <span m="3998480">2</span>
  <span m="3999800">can</span> <span m="3999990">send</span> <span
  m="4000260">a</span> <span m="4000300">message</span> <span
  m="4001170">on</span> <span m="4001350">the</span> <span
  m="4001420">lower</span> <span m="4002500">link,</span> <span
  m="4004520">which</span> <span m="4004710">has</span> <span
  m="4005100">weight</span> <span m="4005350">0,</span> <span
  m="4006670">to</span> <span m="4006810">bk</span> <span
  m="4007290">minus</span> <span m="4007490">one.</span> <span
  m="4008740">But</span> <span m="4009290">that</span> <span
  m="4009590">corrected</span> <span m="4010060">estimate</span> <span
  m="4010600">might</span> <span m="4010870">then</span> <span
  m="4011040">traverse</span> <span m="4011780">the</span> <span
  m="4012160">detour</span> <span m="4014250">to</span> <span
  m="4014380">get</span> <span m="4014640">to</span> <span
  m="4015080">node</span> <span m="4015320">bk.</span> <span
  m="4017860">If</span> <span m="4018140">you</span> <span
  m="4018290">get</span> <span m="4018620">the</span> <span
  m="4018690">correction</span> <span m="4019920">for</span> <span
  m="4020100">node</span> <span m="4020290">bk</span> <span
  m="4020650">minus</span> <span m="4020990">1,</span> <span
  m="4021270">but</span> <span m="4021450">then</span> <span
  m="4021630">you</span> <span m="4021970">follow</span> <span
  m="4022240">the</span> <span m="4022330">detour,</span> <span
  m="4022760">you</span> <span m="4023090">haven't</span> <span
  m="4023350">improved</span> <span m="4023720">that</span> <span
  m="4023920">much.</span> <span m="4024200">You've</span> <span
  m="4024350">just</span> <span m="4025310">improved</span> <span
  m="4025770">by</span> <span m="4026080">one.</span> <span
  m="4027300">This</span> <span m="4027520">way,</span> <span
  m="4027860">you</span> <span m="4027990">get</span> <span m="4028480">2
  to</span> <span m="4028730">the</span> <span m="4028840">k</span> <span
  m="4029080">minus</span> <span m="4029510">3</span> <span
  m="4029950">as</span> <span m="4030170">the</span> <span
  m="4030250">new</span> <span m="4030430">estimate.</span> <span
  m="4032370">But</span> <span m="4032580">then,</span> <span
  m="4032810">again,</span> <span m="4033960">on</span> <span
  m="4034160">the</span> <span m="4034220">lower</span> <span
  m="4034580">link,</span> <span m="4035340">the</span> <span
  m="4035440">message</span> <span m="4035970">eventually</span> <span
  m="4036530">arrives,</span> <span m="4037640">which</span> <span
  m="4037870">gives</span> <span m="4038110">you</span> <span m="4038820">2
  to</span> <span m="4039050">the</span> <span m="4039140">k</span> <span
  m="4039380">minus</span> <span m="4039800">4.</span></p><p><span
  m="4041210">You</span> <span m="4041320">see</span> <span
  m="4041590">the</span> <span m="4041740">pattern</span> <span
  m="4042220">sort</span> <span m="4042490">of?</span> <span
  m="4043170">You're</span> <span m="4043290">going</span> <span
  m="4043480">to</span> <span m="4043540">be</span> <span
  m="4043620">counting</span> <span m="4044060">down</span> <span
  m="4044340">in</span> <span m="4044460">binary</span> <span
  m="4046000">by</span> <span m="4046450">successively</span> <span
  m="4047240">having</span> <span m="4048260">nodes</span> <span
  m="4048700">further</span> <span m="4049140">to</span> <span
  m="4049240">the</span> <span m="4049340">left</span> <span
  m="4050300">deliver</span> <span m="4051070">their</span> <span
  m="4051230">messages,</span> <span m="4051970">but</span> <span
  m="4052160">then</span> <span m="4052360">they</span> <span
  m="4052830">do</span> <span m="4052970">the</span> <span
  m="4053050">worst</span> <span m="4053320">possible</span> <span
  m="4053810">thing</span> <span m="4054160">of</span> <span
  m="4054320">getting</span> <span m="4054630">the</span> <span
  m="4054740">information</span> <span m="4055460">to</span> <span
  m="4055630">bk.</span> <span m="4057300">He has</span> <span
  m="4057520">to</span> <span m="4057610">deal</span> <span
  m="4057950">with</span> <span m="4058090">all</span> <span
  m="4058260">those</span> <span m="4058480">other</span> <span
  m="4058740">estimates</span> <span m="4059240">in</span> <span
  m="4059370">between.</span> <span m="4062740">If</span> <span
  m="4062970">this</span> <span m="4063130">happens</span> <span
  m="4063560">quickly,</span> <span m="4064010">what</span> <span
  m="4064270">you</span> <span m="4064560">get</span> <span
  m="4064790">is</span> <span m="4064900">a</span> <span m="4064950">pile</span>
  <span m="4065420">up</span> <span m="4065670">of</span> <span
  m="4066640">an</span> <span m="4066810">exponential</span> <span
  m="4067540">number</span> <span m="4067890">of</span> <span
  m="4067970">search</span> <span m="4068340">messages</span> <span
  m="4068950">in</span> <span m="4069140">one</span> <span
  m="4069330">channel.</span> <span m="4070420">And</span> <span
  m="4070580">then</span> <span m="4070720">that</span> <span
  m="4070990">information</span> <span m="4071680">has</span> <span
  m="4071870">to</span> <span m="4071960">go</span> <span m="4072140">on</span>
  <span m="4072390">to</span> <span m="4072570">the</span> <span
  m="4072660">next</span> <span m="4072910">node</span> <span
  m="4073230">or</span> <span m="4073300">the</span> <span
  m="4073390">rest</span> <span m="4073610">of</span> <span
  m="4073690">the</span> <span m="4073760">network,</span> <span
  m="4074150">whatever.</span> <span m="4074440">It's</span> <span
  m="4074600">going</span> <span m="4074720">to</span> <span
  m="4074780">take</span> <span m="4074970">an</span> <span
  m="4075060">exponential</span> <span m="4075690">amount</span> <span
  m="4075920">of</span> <span m="4076010">time,</span> <span
  m="4076380">in</span> <span m="4076450">the</span> <span
  m="4076510">worst</span> <span m="4076790">case,</span> <span
  m="4077090">to</span> <span m="4077210">empty</span> <span
  m="4077510">that</span> <span m="4077960">all</span> <span
  m="4078220">out.</span></p><p><span m="4081340">This</span> <span
  m="4081500">is</span> <span m="4081620">pretty</span> <span
  m="4081870">bad,</span> <span m="4087080">but</span> <span
  m="4087210">the</span> <span m="4087310">algorithm</span> <span
  m="4087820">is</span> <span m="4087960">correct.</span> <span
  m="4088520">And</span> <span m="4088840">so</span> <span
  m="4089420">how</span> <span m="4089610">do</span> <span
  m="4089740">you</span> <span m="4090410">learn</span> <span
  m="4090740">when</span> <span m="4091650">everything</span> <span
  m="4092080">is</span> <span m="4092230">finished,</span> <span
  m="4092700">and</span> <span m="4092860">how</span> <span
  m="4092980">does</span> <span m="4093190">a</span> <span
  m="4093380">process</span> <span m="4093950">know</span> <span
  m="4094240">when</span> <span m="4094400">it</span> <span
  m="4094810">can</span> <span m="4095390">output</span> <span
  m="4095780">its</span> <span m="4095960">own</span> <span
  m="4096800">correct</span> <span m="4097160">distance</span> <span
  m="4097569">information?</span> <span m="4099740">How</span> <span
  m="4099840">can</span> <span m="4099950">we</span> <span
  m="4100029">figure</span> <span m="4100370">out</span> <span
  m="4100510">when</span> <span m="4100600">this</span> <span
  m="4100740">is</span> <span m="4100850">all</span> <span
  m="4101000">stabilized?</span> <span m="4106689">Same</span> <span
  m="4106950">thing</span> <span m="4107149">as</span> <span
  m="4107279">before,</span> <span m="4109830">we</span> <span
  m="4109930">can</span> <span m="4110120">just</span> <span
  m="4110330">do</span> <span m="4110540">a</span> <span
  m="4110580">convergecast.</span> <span m="4111540">I</span> <span
  m="4111580">mean</span> <span m="4111770">this</span> <span
  m="4111920">is</span> <span m="4112160">more</span> <span
  m="4112580">corrections,</span> <span m="4113279">but</span> <span
  m="4113420">it's</span> <span m="4113569">still</span> <span
  m="4114180">the</span> <span m="4114279">same</span> <span
  m="4114540">kind</span> <span m="4114840">of</span> <span
  m="4114939">corrections.</span> <span m="4116300">We</span> <span
  m="4116399">can</span> <span m="4116609">convergecast</span> <span
  m="4117510">and,</span> <span m="4117630">eventually,</span> <span
  m="4120020">this</span> <span m="4120220">is</span> <span
  m="4120340">going</span> <span m="4120609">to</span> <span
  m="4120710">convergecast</span> <span m="4121550">all</span> <span
  m="4121700">the</span> <span m="4121770">way</span> <span
  m="4121960">up</span> <span m="4122120">to</span> <span m="4122220">the</span>
  <span m="4122319">root.</span> <span m="4123729">And</span> <span
  m="4124069">then</span> <span m="4124760">the</span> <span
  m="4124899">root</span> <span m="4125100">knows</span> <span
  m="4125359">it's</span> <span m="4125520">done</span> <span
  m="4125790">and</span> <span m="4126010">can</span> <span
  m="4126170">tell</span> <span m="4126399">everyone</span> <span
  m="4126779">else.</span></p><p><span m="4131319">A</span> <span
  m="4131370">moral</span> <span m="4131830">here--</span> <span
  m="4132520">you've</span> <span m="4133000">had</span> <span
  m="4133220">a</span> <span m="4133580">quick</span> <span
  m="4133910">dose</span> <span m="4134279">of</span> <span m="4134399">a</span>
  <span m="4134479">lot</span> <span m="4134720">of</span> <span
  m="4134819">asynchrony--</span> <span m="4137160">yeah,</span> <span
  m="4137479">if</span> <span m="4137630">you</span> <span
  m="4137760">don't</span> <span m="4137970">do</span> <span
  m="4138220">anything</span> <span m="4138600">about</span> <span
  m="4138939">it</span> <span m="4139069">and</span> <span
  m="4139300">you</span> <span m="4139380">just</span> <span
  m="4139590">use</span> <span m="4139779">unrestrained</span> <span
  m="4140689">asynchrony,</span> <span m="4141279">in</span> <span
  m="4141430">the</span> <span m="4141510">worst</span> <span
  m="4141920">case,</span> <span m="4143189">you're</span> <span
  m="4143350">going</span> <span m="4143620">to</span> <span
  m="4143720">have</span> <span m="4143890">some</span> <span
  m="4144050">pretty</span> <span m="4144300">bad</span> <span
  m="4144569">performance.</span> <span m="4146390">The</span> <span
  m="4146460">question</span> <span m="4146910">is,</span> <span
  m="4147100">what</span> <span m="4147240">do</span> <span
  m="4147310">you</span> <span m="4147410">do</span> <span
  m="4147560">about</span> <span m="4147859">that?</span> <span
  m="4148140">There</span> <span m="4148240">are</span> <span
  m="4148270">various</span> <span m="4148700">techniques.</span> <span
  m="4149310">And</span> <span m="4149450">if</span> <span
  m="4149569">you</span> <span m="4149630">want</span> <span
  m="4149770">to</span> <span m="4149840">take</span> <span
  m="4150029">my</span> <span m="4150120">course</span> <span
  m="4150540">next</span> <span m="4150779">fall,</span> <span
  m="4151479">we'll</span> <span m="4151880">cover</span> <span
  m="4152149">some</span> <span m="4152490">of those.</span></p><p><span
  m="4154680">I'll</span> <span m="4154830">say</span> <span
  m="4155050">a</span> <span m="4155109">little</span> <span
  m="4155300">bit</span> <span m="4155460">about</span> <span
  m="4155729">the</span> <span m="4155790">course.</span> <span
  m="4158609">It's</span> <span m="4158770">a</span> <span
  m="4159250">basic--</span> <span m="4159630">it's</span> <span
  m="4159740">a</span> <span m="4159790">TQE</span> <span
  m="4160439">level,</span> <span m="4161170">basic</span> <span
  m="4161880">grad</span> <span m="4162220">course.</span> <span
  m="4163960">We</span> <span m="4164140">do</span> <span
  m="4164220">synchronous,</span> <span m="4164819">asynchronous,</span> <span
  m="4165529">and</span> <span m="4165790">some</span> <span
  m="4166859">other</span> <span m="4167130">stuff</span> <span
  m="4167470">where</span> <span m="4167569">the</span> <span
  m="4167680">nodes</span> <span m="4168120">really</span> <span
  m="4168560">know</span> <span m="4169020">about</span> <span
  m="4169420">something</span> <span m="4169740">about</span> <span
  m="4170040">time.</span> <span m="4172710">Here's</span> <span
  m="4172970">some</span> <span m="4173120">of</span> <span
  m="4173229">the</span> <span m="4173300">synchronous</span> <span
  m="4173810">problems--</span> <span m="4174359">some</span> <span
  m="4175220">like</span> <span m="4175569">the</span> <span
  m="4175630">ones</span> <span m="4175859">you've</span> <span
  m="4176010">already</span> <span m="4176279">seen.</span> <span
  m="4178710">Building</span> <span m="4179120">many</span> <span
  m="4179420">other</span> <span m="4179680">kinds</span> <span
  m="4180149">of</span> <span m="4180240">structures</span> <span
  m="4182420">in</span> <span m="4182800">graphs,</span> <span
  m="4184460">and</span> <span m="4184630">then</span> <span
  m="4184740">we</span> <span m="4184819">get</span> <span
  m="4185000">into</span> <span m="4185210">fault</span> <span
  m="4185540">tolerance.</span> <span m="4186609">There's</span> <span
  m="4186850">a</span> <span m="4186939">lot</span> <span m="4187359">of</span>
  <span m="4187490">questions</span> <span m="4188229">about</span> <span
  m="4189080">what</span> <span m="4189250">happens</span> <span
  m="4189740">when</span> <span m="4190020">some</span> <span
  m="4190250">of</span> <span m="4190410">the</span> <span
  m="4190920">components</span> <span m="4192340">can</span> <span
  m="4192700">fail,</span> <span m="4193170">or</span> <span
  m="4193529">they're</span> <span m="4193689">even</span> <span
  m="4193950">malicious,</span> <span m="4194670">and</span> <span
  m="4194990">you</span> <span m="4195370">have</span> <span
  m="4195550">to</span> <span m="4195660">deal</span> <span
  m="4195920">with</span> <span m="4196570">the</span> <span
  m="4196680">effects</span> <span m="4197140">of</span> <span
  m="4197650">malicious</span> <span m="4198550">processes</span> <span
  m="4199210">in</span> <span m="4199310">your</span> <span
  m="4199460">system.</span></p><p><span m="4201500">And</span> <span
  m="4201690">then</span> <span m="4202470">for</span> <span
  m="4202710">asynchronous</span> <span m="4203390">algorithms,</span> <span
  m="4205400">we'll</span> <span m="4205560">do</span> <span
  m="4205740">not</span> <span m="4205980">only</span> <span
  m="4206600">individual</span> <span m="4207120">problems</span> <span
  m="4207720">like</span> <span m="4207890">the</span> <span
  m="4207970">ones</span> <span m="4208220">you've</span> <span
  m="4208350">just</span> <span m="4208610">seen,</span> <span
  m="4208930">but</span> <span m="4209250">some</span> <span
  m="4209470">general</span> <span m="4209840">techniques</span> <span
  m="4210410">like</span> <span m="4210570">synchronizers,</span> <span
  m="4212770">notion</span> <span m="4213170">of</span> <span
  m="4213280">logical</span> <span m="4213780">time--</span> <span
  m="4214250">that's</span> <span m="4215100">Leslie</span> <span
  m="4215390">Lamport's</span> <span m="4216030">first</span> <span
  m="4216430">and</span> <span m="4216610">biggest</span> <span
  m="4216900">contribution.</span> <span m="4217700">He</span> <span
  m="4217780">one the</span> <span m="4217860">Turing</span> <span
  m="4218190">Award</span> <span m="4218700">last</span> <span
  m="4219070">year--</span> <span m="4221320">other</span> <span
  m="4221630">techniques,</span> <span m="4222260">like</span> <span
  m="4222430">taking</span> <span m="4223610">global</span> <span
  m="4223950">snapshots</span> <span m="4224750">of</span> <span
  m="4225850">the</span> <span m="4225950">entire</span> <span
  m="4226390">system</span> <span m="4226800">while</span> <span
  m="4226990">it's</span> <span m="4227150">running.</span> <span
  m="4229060">In</span> <span m="4229210">addition</span> <span
  m="4229670">to</span> <span m="4230000">talking</span> <span
  m="4230380">about</span> <span m="4230620">networks,</span> <span
  m="4231140">as</span> <span m="4231250">we've</span> <span
  m="4231390">been</span> <span m="4231510">doing</span> <span
  m="4231790">this</span> <span m="4231990">week,</span> <span
  m="4232690">we'll</span> <span m="4232820">talk</span> <span
  m="4233060">about</span> <span m="4233320">shared</span> <span
  m="4233610">memory,</span> <span m="4234550">multi-processors</span> <span
  m="4235690">accessing</span> <span m="4236320">shared</span> <span
  m="4236670">memory.</span> <span m="4238630">And</span> <span
  m="4238910">solving</span> <span m="4239360">problems</span> <span
  m="4239950">that</span> <span m="4240110">are</span> <span
  m="4240320">of</span> <span m="4240510">use</span> <span m="4240770">in</span>
  <span m="4240880">multiprocessors,</span> <span m="4241760">like</span> <span
  m="4241940">mutual</span> <span m="4242300">exclusion.</span></p><p><span
  m="4243480">And</span> <span m="4243650">again,</span> <span
  m="4244370">fault</span> <span m="4244630">tolerance.</span> <span
  m="4245170">Fault</span> <span m="4245380">tolerance</span> <span
  m="4245880">then</span> <span m="4247320">gets</span> <span
  m="4247600">us</span> <span m="4247740">into</span> <span m="4247960">a</span>
  <span m="4248000">study</span> <span m="4248460">of</span> <span
  m="4248610">data</span> <span m="4248970">objects</span> <span
  m="4249570">with</span> <span m="4250020">consistency</span> <span
  m="4250870">conditions,</span> <span m="4251660">which</span> <span
  m="4251770">is</span> <span m="4251920">the</span> <span
  m="4251990">sort</span> <span m="4252200">of</span> <span
  m="4252270">stuff</span> <span m="4252550">that's</span> <span
  m="4253170">useful</span> <span m="4253580">in</span> <span
  m="4254010">cloud</span> <span m="4254380">computing.</span> <span
  m="4255280">If</span> <span m="4255420">you</span> <span
  m="4255520">want</span> <span m="4255720">to</span> <span
  m="4256260">have</span> <span m="4257220">coherent</span> <span
  m="4257790">access</span> <span m="4258330">to</span> <span
  m="4258440">data</span> <span m="4258770">that's</span> <span
  m="4259010">stored</span> <span m="4259350">at</span> <span
  m="4259450">many</span> <span m="4259690">locations,</span> <span
  m="4260480">you</span> <span m="4260560">need</span> <span
  m="4260760">to</span> <span m="4260860">have</span> <span
  m="4261050">some</span> <span m="4262520">interesting</span> <span
  m="4263040">distributed</span> <span m="4263580">algorithms.</span> <span
  m="4265440">Self</span> <span m="4265730">stabilization--</span> <span
  m="4266570">if</span> <span m="4266680">you</span> <span
  m="4266750">plunge</span> <span m="4267250">your</span> <span
  m="4267750">system</span> <span m="4268210">into</span> <span
  m="4268410">some</span> <span m="4268670">arbitrary</span> <span
  m="4269250">state,</span> <span m="4269830">and</span> <span
  m="4269930">you'd</span> <span m="4270070">like</span> <span
  m="4270290">it</span> <span m="4270390">to</span> <span
  m="4270490">converge</span> <span m="4271140">to</span> <span
  m="4271270">a</span> <span m="4271320">good</span> <span
  m="4271530">state,</span> <span m="4272160">that's</span> <span
  m="4272530">the</span> <span m="4272940">topic</span> <span
  m="4273310">of</span> <span m="4273410">self</span> <span
  m="4273660">stabilization.</span></p><p><span m="4275860">And</span> <span
  m="4277280">depending</span> <span m="4277670">on</span> <span
  m="4277770">time,</span> <span m="4278070">there's</span> <span
  m="4278560">things</span> <span m="4278800">that</span> <span
  m="4279960">use</span> <span m="4280260">time</span> <span
  m="4280770">in</span> <span m="4280950">the</span> <span
  m="4281070">algorithms,</span> <span m="4282200">and</span> <span
  m="4282360">the</span> <span m="4282430">newer</span> <span
  m="4282700">work</span> <span m="4283060">that</span> <span
  m="4284220">we're</span> <span m="4284350">working</span> <span
  m="4284680">on</span> <span m="4285020">in</span> <span
  m="4285190">research</span> <span m="4285540">is</span> <span
  m="4285670">very</span> <span m="4285910">dynamic.</span> <span
  m="4286650">You</span> <span m="4286780">have</span> <span
  m="4286960">distributed</span> <span m="4287470">algorithms</span> <span
  m="4287950">where</span> <span m="4288060">the</span> <span
  m="4288150">network</span> <span m="4288530">itself</span> <span
  m="4288900">is</span> <span m="4289060">changing</span> <span
  m="4289640">during</span> <span m="4289950">the</span> <span
  m="4290100">execution.</span> <span m="4291420">That</span> <span
  m="4291600">comes</span> <span m="4291850">up</span> <span
  m="4291990">in</span> <span m="4292090">wireless</span> <span
  m="4292530">networks,</span> <span m="4293620">and</span> <span
  m="4293740">lately</span> <span m="4293970">we're</span> <span
  m="4294210">actually</span> <span m="4294580">looking</span> <span
  m="4294900">at</span> <span m="4295040">insect</span> <span
  m="4295520">colony</span> <span m="4296000">algorithms.</span> <span
  m="4298060">What</span> <span m="4298380">distributed</span> <span
  m="4298930">algorithms</span> <span m="4299620">do</span> <span
  m="4299750">ants</span> <span m="4300110">use</span> <span
  m="4300600">to</span> <span m="4301120">decide</span> <span
  m="4301730">on</span> <span m="4302040">how</span> <span m="4302260">to</span>
  <span m="4302410">select</span> <span m="4302920">a</span> <span
  m="4302970">new</span> <span m="4303130">nest</span> <span
  m="4303630">when</span> <span m="4303750">the</span> <span
  m="4303850">researchers</span> <span m="4304470">smash</span> <span
  m="4304990">their</span> <span m="4305140">old</span> <span
  m="4305390">nest</span> <span m="4305760">in</span> <span
  m="4305860">the</span> <span m="4305940">laboratory?</span> <span
  m="4307580">That</span> <span m="4307770">kind</span> <span
  m="4308040">of</span> <span m="4308140">question.</span></p><p><span
  m="4311770">That's</span> <span m="4312020">it</span> <span
  m="4312140">for</span> <span m="4312350">the</span> <span
  m="4312740">distributed</span> <span m="4313210">algorithms</span> <span
  m="4313730">week.</span> <span m="4314610">And</span> <span
  m="4314950">we'll</span> <span m="4315080">see</span> <span
  m="4315260">you--</span> <span m="4315685">next</span> <span
  m="4315970">week</span> <span m="4316210">is</span> <span
  m="4318710">security?</span> <span m="4319430">OK,</span> <span
  m="4320730">yeah.</span></p>
uid: 0e521636640fe0d169e7316908d3b369
type: courses
layout: video
---
