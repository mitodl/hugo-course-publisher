---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Demaine covers
  different algorithmic solutions for the All-Pairs Shortest Paths
  problem.</p><p><strong>Instructors:</strong> Erik Demaine</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: NzgFUwOaoIw
    parent_uid: a702195e8f7de0ff95649607f39d2583
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: fd9381e9fb28a6b7a636121ae3ef5a2f
  - id: NzgFUwOaoIw.srt
    parent_uid: a702195e8f7de0ff95649607f39d2583
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-11-dynamic-programming-all-pairs-shortest-paths/NzgFUwOaoIw.srt
    title: 3play caption file
    type: null
    uid: a104c645a0b865db6f7e7683f44c565d
  - id: NzgFUwOaoIw.pdf
    parent_uid: a702195e8f7de0ff95649607f39d2583
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-11-dynamic-programming-all-pairs-shortest-paths/NzgFUwOaoIw.pdf
    title: 3play pdf file
    type: null
    uid: dfd49eb1cf655c54359492df821a4203
  - id: Caption-3Play YouTube id-SRT
    parent_uid: a702195e8f7de0ff95649607f39d2583
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: 122b6657257e24ac9caf424d7a642f03
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: a702195e8f7de0ff95649607f39d2583
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 65d6d5fd3b03a77b3270372625696cc6
  - id: Video-YouTube-Stream
    media_location: NzgFUwOaoIw
    parent_uid: a702195e8f7de0ff95649607f39d2583
    title: Video-YouTube-Stream
    type: Video
    uid: 5b346f69f3a86736e4432bd6661cdc3e
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/NzgFUwOaoIw/default.jpg'
    parent_uid: a702195e8f7de0ff95649607f39d2583
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: a862288e6398c64ba849a62f2d787a55
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: a702195e8f7de0ff95649607f39d2583
    title: Video-iTunes U-MP4
    type: Video
    uid: aa7388d36c9ab2ab9db00f5df9ebdc72
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec11_300k.mp4'
    parent_uid: a702195e8f7de0ff95649607f39d2583
    title: Video-Internet Archive-MP4
    type: Video
    uid: 116041738cf4ac25059a265150f72ace
inline_embed_id: '21295756lecture11:dynamicprogramming:all-pairsshortestpaths85118296'
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-11-dynamic-programming-all-pairs-shortest-paths
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-11-dynamic-programming-all-pairs-shortest-paths
title: 'Lecture 11: Dynamic Programming: All-Pairs Shortest Paths'
transcript: >-
  <p><span m="70">The</span> <span m="190">following</span> <span
  m="630">content</span> <span m="1220">is</span> <span m="1340">provided</span>
  <span m="1780">under</span> <span m="2060">a</span> <span
  m="2100">Creative</span> <span m="2500">Commons</span> <span
  m="2910">license.</span> <span m="4019">Your</span> <span
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
  <span m="14460">courses,</span> <span m="15580">visit</span> <span
  m="15780">MIT</span> <span m="16210">OpenCourseWare</span> <span
  m="17250">at</span> <span m="17420">ocw.mit.edu.</span></p><p><span
  m="21470">PROFESSOR: Let's</span> <span m="21740">get</span> <span
  m="21910">started.</span> <span m="23020">Welcome</span> <span
  m="23410">back</span> <span m="23650">to</span> <span m="23750">6046.</span>
  <span m="25700">Today,</span> <span m="26050">we</span> <span
  m="26230">start</span> <span m="26650">an</span> <span
  m="26800">exciting</span> <span m="27230">series</span> <span
  m="27660">of</span> <span m="27810">algorithms</span> <span
  m="28560">for</span> <span m="28950">graphs.</span> <span
  m="30150">We've</span> <span m="30300">done</span> <span m="30730">a</span>
  <span m="30790">lot</span> <span m="30960">of</span> <span
  m="31020">data</span> <span m="31230">structures.</span> <span
  m="31860">We're</span> <span m="31990">starting</span> <span
  m="32360">to</span> <span m="32420">get</span> <span m="32619">back</span>
  <span m="32860">into</span> <span m="33250">algorithms</span> <span
  m="33910">with</span> <span m="34370">dynamic</span> <span
  m="34990">programming</span> <span m="35460">last</span> <span
  m="35740">week.</span> <span m="36510">And</span> <span m="36820">today</span>
  <span m="37120">and</span> <span m="37220">the</span> <span
  m="37310">next</span> <span m="37670">few</span> <span
  m="37990">lectures,</span> <span m="38460">we're</span> <span
  m="38560">going</span> <span m="38660">to</span> <span m="38760">see</span>
  <span m="38770">lots</span> <span m="39050">of</span> <span
  m="39170">cool</span> <span m="39470">algorithms</span> <span
  m="40530">about</span> <span m="40870">graphs.</span></p><p><span
  m="42050">First</span> <span m="42310">a</span> <span m="42360">bit</span>
  <span m="42550">of</span> <span m="42910">recall--</span> <span
  m="43170">we're</span> <span m="43310">starting</span> <span
  m="43720">with</span> <span m="43900">shortest</span> <span
  m="44340">paths,</span> <span m="44760">which</span> <span
  m="44980">you've</span> <span m="45100">seen</span> <span m="45430">in</span>
  <span m="45530">6006</span> <span m="47090">in</span> <span
  m="47310">the</span> <span m="47410">context</span> <span m="48000">of</span>
  <span m="48250">single-source</span> <span m="49360">shortest</span> <span
  m="49940">paths.</span> <span m="51250">So</span> <span
  m="51360">typically,</span> <span m="52000">like</span> <span
  m="52190">you</span> <span m="52270">do</span> <span m="52420">a</span> <span
  m="52460">Google</span> <span m="52720">Maps</span> <span
  m="53030">query,</span> <span m="53310">you</span> <span
  m="53380">think</span> <span m="53620">of,</span> <span m="53730">I</span>
  <span m="53880">want</span> <span m="54080">to</span> <span
  m="54130">go</span> <span m="54310">from</span> <span m="54550">A</span> <span
  m="54700">to</span> <span m="54780">B.</span></p><p><span m="56090">But</span>
  <span m="56550">what</span> <span m="56900">you</span> <span
  m="57010">solved</span> <span m="57360">in</span> <span m="57450">6006</span>
  <span m="58230">was</span> <span m="58460">a</span> <span
  m="58510">harder</span> <span m="58870">problem,</span> <span
  m="59430">which</span> <span m="59550">is</span> <span m="60240">I</span>
  <span m="60360">give</span> <span m="60610">you</span> <span
  m="60760">a</span> <span m="60830">point</span> <span m="61180">A--</span>
  <span m="61440">here</span> <span m="61610">it's</span> <span m="61720">called
  S</span> <span m="61970">for</span> <span m="62400">the</span> <span
  m="62540">source.</span> <span m="64239">I</span> <span m="64390">give</span>
  <span m="64580">you</span> <span m="64760">a</span> <span
  m="64819">source</span> <span m="65129">vertex.</span> <span
  m="66010">And</span> <span m="66330">capital</span> <span m="66720">V</span>
  <span m="66910">is</span> <span m="67020">a</span> <span m="67090">set</span>
  <span m="67280">of</span> <span m="67370">all</span> <span
  m="67500">vertices,</span> <span m="68020">capital</span> <span
  m="68330">E</span> <span m="68770">is a set of</span> <span
  m="68950">all</span> <span m="69100">edges,</span> <span
  m="69450">remember</span> <span m="69790">graph</span> <span
  m="70235">notation.</span> <span m="70980">Let's</span> <span
  m="71290">say</span> <span m="71360">it's</span> <span m="71490">a</span>
  <span m="71540">directed</span> <span m="71950">graph.</span> <span
  m="72360">You've</span> <span m="72550">got</span> <span m="72840">edge</span>
  <span m="73050">weights,</span> <span m="73620">like</span> <span
  m="73870">the</span> <span m="74450">time</span> <span m="74740">it</span>
  <span m="74840">takes</span> <span m="75040">to</span> <span
  m="75160">traverse</span> <span m="75590">each</span> <span
  m="75750">road.</span> <span m="76710">And</span> <span m="76960">you</span>
  <span m="77070">want</span> <span m="77260">to</span> <span
  m="77320">know</span> <span m="77660">how</span> <span m="77960">long's</span>
  <span m="78300">it</span> <span m="78410">take</span> <span
  m="78680">me</span> <span m="78800">to</span> <span m="78860">get</span> <span
  m="79140">from</span> <span m="79330">S</span> <span m="79610">to</span> <span
  m="79760">V</span> <span m="80320">for</span> <span m="80690">all</span> <span
  m="81120">V.</span> <span m="82320">So</span> <span m="82520">this</span>
  <span m="82740">is</span> <span m="83340">from</span> <span
  m="83740">one</span> <span m="84150">given</span> <span m="84420">point</span>
  <span m="85020">to</span> <span m="85210">everywhere.</span></p><p><span
  m="86580">Today,</span> <span m="86970">we're</span> <span
  m="87120">going</span> <span m="87230">to</span> <span m="87300">solve</span>
  <span m="87740">a</span> <span m="87790">harder</span> <span
  m="88160">problem,</span> <span m="88640">which</span> <span
  m="88690">is</span> <span m="88830">all-pairs.</span> <span m="89590">I</span>
  <span m="89660">want</span> <span m="89870">to</span> <span
  m="90170">go</span> <span m="90350">from</span> <span m="91050">all</span>
  <span m="91400">A</span> <span m="91730">to</span> <span m="91840">all</span>
  <span m="92110">B.</span> <span m="93250">But</span> <span
  m="93460">what</span> <span m="93600">you</span> <span m="93720">saw</span>
  <span m="94090">in</span> <span m="94340">6006</span> <span
  m="95150">was</span> <span m="95400">single-source,</span> <span
  m="96040">where I</span> <span m="96210">just</span> <span
  m="96450">give</span> <span m="96590">you</span> <span m="96700">one</span>
  <span m="96870">of</span> <span m="96930">the</span> <span
  m="97000">vertices,</span> <span m="97570">and</span> <span m="97890">I</span>
  <span m="97980">want</span> <span m="98180">to</span> <span
  m="98240">know</span> <span m="98390">how</span> <span m="98520">to</span>
  <span m="98590">get</span> <span m="98820">to</span> <span
  m="98930">everywhere.</span> <span m="100070">The</span> <span
  m="100190">reason</span> <span m="100790">you</span> <span
  m="100890">saw</span> <span m="101110">this</span> <span
  m="101390">version</span> <span m="101900">and not the</span> <span
  m="102240">A to</span> <span m="102320">B</span> <span
  m="102470">version</span> <span m="102850">is</span> <span
  m="102980">because</span> <span m="103810">the</span> <span
  m="103910">best</span> <span m="104200">way</span> <span m="104330">we</span>
  <span m="104630">know</span> <span m="104830">to</span> <span
  m="104920">solve</span> <span m="105240">A</span> <span m="105370">to</span>
  <span m="105460">B</span> <span m="105780">is</span> <span
  m="105980">to</span> <span m="106210">solve</span> <span
  m="106520">this</span> <span m="106690">problem.</span> <span
  m="107320">So</span> <span m="107550">at</span> <span m="107610">least</span>
  <span m="107920">from</span> <span m="108090">a</span> <span
  m="108160">theory</span> <span m="108410">standpoint,</span> <span
  m="109310">we</span> <span m="109450">don't</span> <span
  m="109600">know</span> <span m="109770">how</span> <span m="109960">to</span>
  <span m="110040">beat</span> <span m="110730">Dijkstra's</span> <span
  m="111130">algorithm</span> <span m="111630">and</span> <span
  m="111740">Bellman-Ford's</span> <span m="112340">algorithm</span> <span
  m="113590">for</span> <span m="115220">the</span> <span m="115520">A</span>
  <span m="115750">to</span> <span m="115980">B</span> <span
  m="116210">problem.</span> <span m="116690">So</span> <span
  m="117130">you</span> <span m="117380">get</span> <span m="117550">a</span>
  <span m="117610">little</span> <span m="117830">bit</span> <span
  m="118010">more</span> <span m="118300">than</span> <span
  m="118580">what</span> <span m="118730">you</span> <span
  m="118840">asked</span> <span m="119050">for</span> <span
  m="119750">sort</span> <span m="120050">of for</span> <span
  m="120210">the</span> <span m="120330">same</span> <span
  m="120610">price.</span></p><p><span m="121660">So</span> <span
  m="121850">let</span> <span m="122010">me</span> <span
  m="122180">remind</span> <span m="122660">you</span> <span
  m="123050">in</span> <span m="123300">a</span> <span m="123350">few</span>
  <span m="123570">different</span> <span m="123980">scenarios</span> <span
  m="128509">what</span> <span m="128810">algorithms</span> <span
  m="129330">we</span> <span m="129470">have,</span> <span m="130370">and</span>
  <span m="130630">how</span> <span m="130800">long</span> <span
  m="131060">they</span> <span m="131190">take.</span> <span
  m="137170">So</span> <span m="137350">the</span> <span
  m="137430">scenarios</span> <span m="137840">of</span> <span
  m="137940">interest</span> <span m="138320">are</span> <span
  m="138650">the</span> <span m="138850">unweighted</span> <span
  m="139300">case,</span> <span m="140630">a</span> <span
  m="140670">non-negative</span> <span m="141430">weighted</span> <span
  m="141770">case,</span> <span m="151820">the</span> <span
  m="152040">general</span> <span m="152360">case,</span> <span
  m="152920">arbitrary</span> <span m="153480">weights,</span> <span
  m="153940">positive</span> <span m="154300">and</span> <span
  m="154480">negative,</span> <span m="155920">and</span> <span
  m="157030">DAGs</span> <span m="157490">acyclic</span> <span
  m="158150">graphs.</span> <span m="161790">These</span> <span
  m="161990">are</span> <span m="162190">some</span> <span
  m="162370">interesting</span> <span m="163450">special</span> <span
  m="163840">cases.</span> <span m="164300">And</span> <span
  m="164380">you</span> <span m="164480">should</span> <span
  m="164680">have</span> <span m="164790">seen</span> <span m="165170">in</span>
  <span m="165440">006</span> <span m="166100">algorithms</span> <span
  m="166560">for</span> <span m="166680">each</span> <span m="166870">of</span>
  <span m="166930">them.</span> <span m="169190">Let's</span> <span
  m="169390">see</span> <span m="169640">if</span> <span m="169760">you</span>
  <span m="169930">remember.</span></p><p><span m="172290">So</span> <span
  m="172550">what's</span> <span m="172740">a</span> <span
  m="172800">good</span> <span m="172960">algorithm</span> <span
  m="173360">for</span> <span m="174080">single-source</span> <span
  m="174550">shortest</span> <span m="174860">paths</span> <span
  m="175140">in</span> <span m="175240">an</span> <span
  m="175370">unweighted</span> <span m="175600">graph?</span> <span
  m="177030">BFS,</span> <span m="177380">good,</span> <span
  m="178100">Breadth-first</span> <span m="178340">Search,</span> <span
  m="179890">that</span> <span m="180120">takes</span> <span
  m="180860">how</span> <span m="180990">long?</span> <span m="185540">V</span>
  <span m="185720">plus</span> <span m="185950">E,</span> <span
  m="186340">good.</span> <span m="187110">That's--</span> <span
  m="188010">for</span> <span m="188180">graphs,</span> <span
  m="188690">V</span> <span m="188860">plus</span> <span m="189080">E</span>
  <span m="189300">is</span> <span m="189470">considered</span> <span
  m="189850">linear</span> <span m="190180">time.</span> <span
  m="190550">That's</span> <span m="190650">how</span> <span
  m="190830">long</span> <span m="191040">it</span> <span
  m="191150">takes</span> <span m="191360">to</span> <span
  m="191460">represent</span> <span m="191910">the</span> <span
  m="192010">input.</span> <span m="192780">So</span> <span
  m="192930">you</span> <span m="193000">got</span> <span m="193120">to</span>
  <span m="193160">look</span> <span m="193330">at</span> <span
  m="193400">the</span> <span m="193500">input,</span> <span
  m="193970">most</span> <span m="194230">algorithms,</span> <span
  m="195240">and</span> <span m="195460">the</span> <span m="195560">BFS</span>
  <span m="195930">is</span> <span m="196300">optimal</span> <span
  m="196790">against</span> <span m="197020">that.</span> <span
  m="198110">But</span> <span m="198730">we're</span> <span
  m="198900">going</span> <span m="199030">to</span> <span
  m="199110">start</span> <span m="199470">getting</span> <span
  m="199700">worse</span> <span m="200060">as</span> <span
  m="200210">we--</span> <span m="200510">well,</span> <span
  m="201480">for</span> <span m="201560">these</span> <span
  m="201820">two</span> <span m="202350">situations.</span></p><p><span
  m="203020">So</span> <span m="203080">for</span> <span
  m="203210">non-negative</span> <span m="203800">edge</span> <span
  m="204170">weights,</span> <span m="204290">what do you</span> <span
  m="204540">use?</span> <span m="205630">Dijkstra.</span> <span
  m="206990">Ah,</span> <span m="207250">everyone's</span> <span
  m="207420">awake</span> <span m="207690">this</span> <span
  m="207830">morning.</span> <span m="208440">That's impressive.</span> <span
  m="210870">And</span> <span m="211050">that</span> <span
  m="211240">takes</span> <span m="211420">how</span> <span
  m="211580">long?</span> <span m="212520">This is</span> <span
  m="212740">a</span> <span m="212970">tricky</span> <span
  m="213270">question.</span> <span m="215110">V</span> <span
  m="215360">log</span> <span m="215610">V</span> <span m="215810">plus</span>
  <span m="216140">E,</span> <span m="216480">wow,</span> <span
  m="216840">nice.</span></p><p><span m="218460">So</span> <span
  m="219910">this</span> <span m="220120">answer</span> <span
  m="220650">kind</span> <span m="220910">of</span> <span
  m="220980">depends</span> <span m="221370">on</span> <span
  m="221510">which</span> <span m="221810">heap</span> <span
  m="222070">structure</span> <span m="222500">you use,</span> <span
  m="223110">but</span> <span m="223310">this</span> <span m="223480">is</span>
  <span m="223590">the</span> <span m="223680">best</span> <span
  m="224360">we</span> <span m="224510">know.</span> <span m="225140">If</span>
  <span m="225300">you</span> <span m="225390">use</span> <span
  m="226480">a</span> <span m="226620">Fibonacci</span> <span
  m="227140">heap,</span> <span m="227360">which</span> <span
  m="227530">we</span> <span m="227660">don't</span> <span
  m="227830">actually</span> <span m="228110">cover</span> <span m="228900">but
  it's</span> <span m="229050">in</span> <span m="229160">the</span> <span
  m="229260">textbook,</span> <span m="230430">you</span> <span
  m="230530">achieve</span> <span m="230930">log V</span> <span
  m="231670">for</span> <span m="232020">extract</span> <span
  m="232550">key</span> <span m="233120">and</span> <span
  m="233530">constant</span> <span m="234060">amortized</span> <span
  m="235240">for</span> <span m="235480">each</span> <span
  m="236680">decreased</span> <span m="237170">key</span> <span
  m="237390">operation.</span> <span m="238690">So</span> <span
  m="239340">sorry,</span> <span m="239590">this</span> <span
  m="239730">is</span> <span m="239840">for</span> <span
  m="239950">extracted</span> <span m="240340">min,</span> <span m="240655">and
  this is for</span> <span m="240970">decrease</span> <span
  m="241380">key.</span> <span m="241970">And</span> <span m="242140">so</span>
  <span m="242230">this</span> <span m="242390">is</span> <span
  m="242460">the</span> <span m="242540">best</span> <span m="242810">we</span>
  <span m="242910">know</span> <span m="243080">how</span> <span
  m="243220">to</span> <span m="243330">do</span> <span m="243480">with</span>
  <span m="243620">a</span> <span m="243680">Dijkstra-type</span> <span
  m="244270">approach.</span></p><p><span m="244670">If you use</span> <span
  m="245000">other</span> <span m="245210">heaps,</span> <span
  m="245470">you</span> <span m="245560">get</span> <span
  m="245740">slightly</span> <span m="246570">worse,</span> <span
  m="246950">maybe</span> <span m="247210">you get</span> <span
  m="247320">a</span> <span m="247370">log</span> <span m="247590">factor</span>
  <span m="247910">here.</span> <span m="248280">But</span> <span
  m="248780">this</span> <span m="248980">is</span> <span
  m="249120">good.</span> <span m="249680">This</span> <span
  m="249790">is</span> <span m="249920">almost</span> <span m="250460">as</span>
  <span m="250600">good</span> <span m="250800">as</span> <span
  m="250890">V</span> <span m="251040">plus</span> <span m="251250">E.</span>
  <span m="252040">For</span> <span m="252920">moderately</span> <span
  m="253580">dense</span> <span m="253900">graphs,</span> <span
  m="254280">if</span> <span m="254390">E</span> <span m="254590">is</span>
  <span m="254710">bigger</span> <span m="254940">than</span> <span
  m="255110">V</span> <span m="255740">log</span> <span m="256050">V,</span>
  <span m="256579">then</span> <span m="256800">these</span> <span
  m="256980">are</span> <span m="257019">the</span> <span
  m="257140">same.</span> <span m="258310">But</span> <span m="258550">if</span>
  <span m="258839">your</span> <span m="259010">graph</span> <span
  m="259250">is</span> <span m="259360">sparse,</span> <span
  m="259760">like</span> <span m="259950">E</span> <span m="260269">is</span>
  <span m="260450">order</span> <span m="260680">V,</span> <span
  m="261410">then</span> <span m="261630">you</span> <span
  m="261769">lose</span> <span m="261920">a</span> <span m="261980">log</span>
  <span m="262230">factor.</span> <span m="262520">But hey,</span> <span
  m="262690">it's</span> <span m="262940">just</span> <span m="263100">a</span>
  <span m="263140">log</span> <span m="263360">factor,</span> <span
  m="263980">not too</span> <span m="264120">bad.</span> <span
  m="264640">We're</span> <span m="264790">going</span> <span
  m="264880">to</span> <span m="264930">get</span> <span
  m="265080">worse.</span></p><p><span m="266210">So</span> <span
  m="266590">for</span> <span m="266710">general</span> <span
  m="267760">weights,</span> <span m="268100">what</span> <span m="268240">do
  you</span> <span m="268500">use?</span> <span m="269790">Bellman-ford.</span>
  <span m="276460">OK.</span> <span m="276790">Which</span> <span
  m="277020">takes</span> <span m="277210">how</span> <span
  m="277320">long?</span> <span m="279420">VE,</span> <span
  m="279940">that's</span> <span m="280340">the usual</span> <span
  m="281300">statement.</span> <span m="281750">Technically,</span> <span
  m="282410">you</span> <span m="282490">should</span> <span
  m="282780">assume</span> <span m="283110">VE</span> <span m="283600">is</span>
  <span m="283740">at</span> <span m="283820">least</span> <span
  m="284050">V</span> <span m="284320">for</span> <span m="284440">this</span>
  <span m="284770">bound</span> <span m="285080">to</span> <span
  m="285550">hold.</span> <span m="285830">But</span> <span
  m="285980">that's</span> <span m="287480">the</span> <span
  m="287630">way</span> <span m="287740">to</span> <span m="287810">think</span>
  <span m="287980">of</span> <span m="288050">it.</span> <span
  m="288190">So</span> <span m="288300">this</span> <span m="288560">is</span>
  <span m="289140">not</span> <span m="289350">nearly</span> <span
  m="289690">as</span> <span m="289830">good.</span> <span
  m="289970">This</span> <span m="290090">is</span> <span m="290190">a</span>
  <span m="290250">lot</span> <span m="290670">slower.</span></p><p><span
  m="292060">If</span> <span m="292220">you</span> <span m="292350">think</span>
  <span m="292900">of--</span> <span m="293570">we</span> <span
  m="293710">can</span> <span m="293870">think</span> <span m="294100">of</span>
  <span m="295290">two</span> <span m="295450">situations.</span> <span
  m="296210">One</span> <span m="296350">is</span> <span m="296490">when</span>
  <span m="297210">E</span> <span m="297470">is</span> <span
  m="297780">theta</span> <span m="298070">V,</span> <span m="298400">so</span>
  <span m="298550">a</span> <span m="298630">very</span> <span
  m="298810">sparse</span> <span m="299210">graph</span> <span
  m="299610">like</span> <span m="299790">a</span> <span m="299840">tree</span>
  <span m="300340">or</span> <span m="300470">planar</span> <span
  m="300790">graph</span> <span m="301170">or</span> <span
  m="301250">something.</span> <span m="302070">And</span> <span
  m="302180">we</span> <span m="302260">could</span> <span
  m="302430">think</span> <span m="302640">of</span> <span
  m="302810">when</span> <span m="303230">E</span> <span m="303600">is</span>
  <span m="303890">quadratic.</span> <span m="304640">That's</span> <span
  m="304940">the</span> <span m="305340">dense</span> <span
  m="305670">case.</span></p><p><span m="307200">So</span> <span
  m="307980">here</span> <span m="308280">we</span> <span m="308420">get,</span>
  <span m="310340">whatever,</span> <span m="312420">V</span> <span
  m="313580">and</span> <span m="314010">V</span> <span
  m="314150">squared</span> <span m="314710">for</span> <span
  m="314890">BFS.</span> <span m="316710">For</span> <span
  m="317080">non-negative</span> <span m="317810">edge</span> <span
  m="317880">weights</span> <span m="318160">we</span> <span
  m="318290">get</span> <span m="318860">V</span> <span m="319110">log</span>
  <span m="319400">V</span> <span m="319860">in</span> <span
  m="320100">the</span> <span m="320200">sparse</span> <span
  m="320600">case.</span> <span m="321660">And</span> <span m="321860">we</span>
  <span m="321980">get</span> <span m="322340">V</span> <span
  m="322550">squared</span> <span m="323160">in</span> <span
  m="323260">the</span> <span m="323350">dense</span> <span
  m="323660">case.</span> <span m="324880">And</span> <span
  m="325190">for</span> <span m="325310">Bellman-Ford,</span> <span
  m="326040">we</span> <span m="326180">get</span> <span m="327370">V</span>
  <span m="327650">squared</span> <span m="328190">in</span> <span
  m="328290">the</span> <span m="328390">sparse</span> <span
  m="328800">case,</span> <span m="329390">and V</span> <span
  m="329830">cubed</span> <span m="330830">in</span> <span m="330980">the</span>
  <span m="331070">dense</span> <span m="331380">case.</span> <span
  m="331640">So</span> <span m="331730">this</span> <span m="331880">is</span>
  <span m="331980">like</span> <span m="332270">a</span> <span
  m="332650">V</span> <span m="333120">factor,</span> <span m="333570">a
  linear</span> <span m="333850">factor</span> <span m="334200">larger</span>
  <span m="335210">than</span> <span m="335980">non-negative</span> <span
  m="336490">edge</span> <span m="336670">weights--</span> <span
  m="336890">makes</span> <span m="337090">a</span> <span m="337120">huge</span>
  <span m="337390">difference.</span></p><p><span m="339790">And</span> <span
  m="339930">finally</span> <span m="340330">for</span> <span
  m="340580">acyclic</span> <span m="341050">graphs,</span> <span
  m="341410">what</span> <span m="341530">do</span> <span m="341580">you</span>
  <span m="341810">do?</span></p><p><span m="344886">STUDENT: Dynamic</span>
  <span m="345337">programming.</span></p><p><span m="345790">PROFESSOR:
  Dynamic</span> <span m="346230">programming</span> <span m="346770">is</span>
  <span m="346880">one</span> <span m="347080">answer,</span> <span
  m="347390">yeah.</span> <span m="349130">That</span> <span
  m="349320">works.</span> <span m="349960">In</span> <span
  m="350080">some</span> <span m="350460">sense</span> <span
  m="350710">all</span> <span m="350870">of</span> <span m="350950">these</span>
  <span m="351110">algorithms</span> <span m="351480">are--</span> <span
  m="351790">especially</span> <span m="352210">Bellman-Ford</span> <span
  m="352780">is</span> <span m="352860">a</span> <span m="352920">dynamic</span>
  <span m="353300">program.</span> <span m="353780">We'll</span> <span
  m="353930">see</span> <span m="354110">that</span> <span
  m="354330">little</span> <span m="354520">bit.</span> <span
  m="355640">Another</span> <span m="356620">interpretation?</span> <span
  m="360150">Topological</span> <span m="360770">sort,</span> <span
  m="361090">and</span> <span m="361210">then</span> <span
  m="361350">Bellman-Ford,</span> <span m="361930">yeah--</span> <span
  m="368260">say,</span> <span m="368420">one</span> <span
  m="368820">round</span> <span m="371520">of</span> <span
  m="371940">Bellman-Ford.</span></p><p><span m="374570">So</span> <span
  m="374730">Bellman-Ford</span> <span m="375360">actually</span> <span
  m="375580">works</span> <span m="375780">really</span> <span
  m="376030">well</span> <span m="376290">if</span> <span m="376500">you</span>
  <span m="376630">know</span> <span m="376850">the</span> <span
  m="377000">order</span> <span m="377260">you</span> <span
  m="377400">should</span> <span m="377590">relax</span> <span
  m="377970">the</span> <span m="378090">edges.</span> <span
  m="379050">And</span> <span m="379120">if</span> <span m="379370">in</span>
  <span m="379590">an</span> <span m="379870">acyclic</span> <span
  m="380360">graph,</span> <span m="380650">you</span> <span
  m="380770">can</span> <span m="380880">do</span> <span m="380980">a</span>
  <span m="381050">topological</span> <span m="381690">sort,</span> <span
  m="382000">meaning</span> <span m="382230">you</span> <span
  m="382340">visit</span> <span m="382630">all</span> <span
  m="382790">the</span> <span m="382860">vertices,</span> <span m="383840">so
  that</span> <span m="384120">whenever</span> <span m="384400">you</span> <span
  m="384530">visit</span> <span m="384850">the</span> <span
  m="384990">right</span> <span m="385260">endpoint</span> <span
  m="385670">of</span> <span m="385770">an</span> <span m="385850">edge,</span>
  <span m="386360">you've</span> <span m="386520">already</span> <span
  m="386860">visited</span> <span m="387220">the</span> <span
  m="387300">left</span> <span m="387560">endpoint.</span> <span
  m="388250">If</span> <span m="388400">you</span> <span m="388510">do</span>
  <span m="388720">Bellman-Ford</span> <span m="389320">in</span> <span
  m="389470">that</span> <span m="389680">order,</span> <span
  m="391100">then</span> <span m="391260">you</span> <span
  m="391380">only</span> <span m="391520">have</span> <span m="391610">to</span>
  <span m="391700">do</span> <span m="391830">one</span> <span
  m="392050">pass</span> <span m="392310">and you're</span> <span
  m="392570">done.</span> <span m="392860">Whereas</span> <span
  m="393210">normally,</span> <span m="394370">here,</span> <span
  m="394960">you</span> <span m="395060">had</span> <span m="395220">to</span>
  <span m="395290">do</span> <span m="395410">it V</span> <span
  m="395440">times.</span></p><p><span m="396960">So</span> <span
  m="397020">the</span> <span m="397100">total</span> <span
  m="397380">cost</span> <span m="397690">of</span> <span m="397780">this</span>
  <span m="397970">is</span> <span m="398080">just</span> <span
  m="398670">linear.</span> <span m="401660">Good</span> <span
  m="402320">thing</span> <span m="402470">to</span> <span
  m="402540">remember,</span> <span m="402910">especially</span> <span
  m="403380">on</span> <span m="403510">quizzes</span> <span
  m="403860">and</span> <span m="403990">so</span> <span m="404150">on.</span>
  <span m="404610">If your</span> <span m="404730">graph</span> <span
  m="404950">is</span> <span m="405090">acyclic,</span> <span
  m="405910">you</span> <span m="406040">can</span> <span
  m="406190">achieve</span> <span m="406440">linear</span> <span
  m="406740">time.</span> <span m="407850">But</span> <span m="407960">in</span>
  <span m="408040">the</span> <span m="408120">general</span> <span
  m="408440">case,</span> <span m="408940">Bellman-Ford</span> <span
  m="409530">is</span> <span m="409650">your</span> <span
  m="409820">answer</span> <span m="410510">for</span> <span
  m="410680">single</span> <span m="411030">source.</span></p><p><span
  m="411710">Now,</span> <span m="413850">these</span> <span
  m="414150">are</span> <span m="414230">the</span> <span m="414380">best</span>
  <span m="414770">algorithms</span> <span m="415270">we</span> <span
  m="415390">know</span> <span m="415580">for</span> <span
  m="415730">each</span> <span m="415920">of</span> <span
  m="415990">these</span> <span m="416160">cases.</span> <span
  m="416740">So</span> <span m="416840">I'm</span> <span m="416930">not</span>
  <span m="417090">going</span> <span m="417190">to</span> <span
  m="417230">improve</span> <span m="417530">them</span> <span
  m="417680">today.</span> <span m="418700">You</span> <span
  m="418840">saw</span> <span m="419060">the</span> <span
  m="419420">state</span> <span m="419670">of</span> <span m="419730">the</span>
  <span m="419860">art</span> <span m="420040">006.</span> <span
  m="421890">But</span> <span m="422840">for</span> <span
  m="423050">all-pair</span> <span m="423610">shortest</span> <span
  m="423960">paths,</span> <span m="424420">we</span> <span
  m="424620">can</span> <span m="424870">in</span> <span m="424950">some</span>
  <span m="425160">sense</span> <span m="425450">do</span> <span
  m="425550">better,</span> <span m="426860">sort</span> <span
  m="427110">of.</span> <span m="427770">So</span> <span m="428660">let</span>
  <span m="428840">me</span> <span m="428980">just</span> <span
  m="429110">quickly</span> <span m="429810">define</span> <span
  m="430140">the</span> <span m="430220">problem,</span> <span
  m="431060">and</span> <span m="431290">then</span> <span
  m="431480">tell</span> <span m="431750">you</span> <span m="432030">all</span>
  <span m="432350">of</span> <span m="432490">the</span> <span
  m="433420">results</span> <span m="433800">we</span> <span
  m="433910">know.</span> <span m="438950">And</span> <span
  m="439210">also,</span> <span m="439640">the</span> <span
  m="439740">results</span> <span m="439870">we're</span> <span
  m="439960">going</span> <span m="440070">to</span> <span
  m="440140">cover</span> <span
  m="440420">today.</span></p><p>&nbsp;</p><p><span m="453850">I</span> <span
  m="454330">didn't</span> <span m="454700">remind</span> <span
  m="455090">you</span> <span m="455170">of</span> <span m="455260">the</span>
  <span m="455360">delta</span> <span m="456020">definition.</span> <span
  m="456580">I</span> <span m="456730">want</span> <span m="456930">to</span>
  <span m="456990">go</span> <span m="457140">over</span> <span
  m="457290">this</span> <span m="457500">briefly.</span> <span
  m="458460">So</span> <span m="458650">delta</span> <span m="459370">of</span>
  <span m="459470">s</span> <span m="459550">comma</span> <span
  m="459800">v</span> <span m="460140">is</span> <span m="460300">the</span>
  <span m="460440">weight</span> <span m="460910">of</span> <span
  m="461090">the</span> <span m="461170">shortest</span> <span
  m="461570">path</span> <span m="461900">from</span> <span m="462100">S</span>
  <span m="462320">to</span> <span m="462420">V.</span> <span
  m="463160">The</span> <span m="463290">weight</span> <span
  m="463660">is</span> <span m="463760">well-defined.</span> <span
  m="464260">Even</span> <span m="464440">though</span> <span
  m="464540">there</span> <span m="464660">may</span> <span m="464790">be</span>
  <span m="464920">many</span> <span m="465140">shortest</span> <span
  m="465490">paths,</span> <span m="465990">there's</span> <span
  m="466350">one</span> <span m="467080">best</span> <span
  m="467400">weight.</span></p><p><span m="468430">But</span> <span
  m="468770">there's</span> <span m="469020">some</span> <span
  m="469150">special</span> <span m="469490">cases.</span> <span
  m="469940">It</span> <span m="470050">could</span> <span m="470300">be</span>
  <span m="471730">infinity,</span> <span m="473020">if</span> <span
  m="473190">there's</span> <span m="473380">no</span> <span
  m="473580">path.</span> <span m="474420">That's</span> <span
  m="474650">sort</span> <span m="474800">of</span> <span m="474920">by</span>
  <span m="475040">definition.</span> <span m="476140">Say,</span> <span
  m="476270">well,</span> <span m="476530">it's</span> <span
  m="476740">infinite</span> <span m="476920">costs</span> <span
  m="477300">to</span> <span m="477430">get--</span> <span m="477840">if</span>
  <span m="478020">there's</span> <span m="478180">no</span> <span
  m="478340">path,</span> <span m="478710">then</span> <span
  m="479160">we</span> <span m="479290">said</span> <span
  m="479530">there's</span> <span m="479750">infinite</span> <span
  m="480100">weight</span> <span m="480290">one.</span></p><p><span
  m="482340">And</span> <span m="482540">it</span> <span m="482600">could</span>
  <span m="482730">be</span> <span m="482840">minus</span> <span
  m="483230">infinity</span> <span m="485360">in</span> <span
  m="485570">the</span> <span m="485660">presence</span> <span
  m="486140">of</span> <span m="486290">negative</span> <span
  m="486640">weight</span> <span m="486870">cycles.</span> <span
  m="489690">So</span> <span m="489820">let's</span> <span
  m="489950">say,</span> <span m="490220">if</span> <span
  m="490410">there's</span> <span m="490610">a</span> <span
  m="490670">negative</span> <span m="491030">weight</span> <span
  m="491300">cycle</span> <span m="492330">on</span> <span m="492650">the</span>
  <span m="492790">way,</span> <span m="495950">if</span> <span
  m="496040">you</span> <span m="496190">could</span> <span
  m="496420">reach</span> <span m="496980">a</span> <span
  m="497060">negative</span> <span m="497370">weight</span> <span
  m="497540">cycle</span> <span m="497910">from</span> <span
  m="498320">s,</span> <span m="498700">and</span> <span m="498850">then</span>
  <span m="499170">still</span> <span m="499290">get</span> <span
  m="499510">to</span> <span m="499630">V</span> <span m="499860">from</span>
  <span m="500060">there,</span> <span m="500810">then</span> <span
  m="501150">the</span> <span m="502420">best</span> <span m="502650">way</span>
  <span m="502740">to</span> <span m="502800">get</span> <span
  m="502990">there</span> <span m="503160">is</span> <span m="503240">to</span>
  <span m="503330">go</span> <span m="503470">to</span> <span
  m="503520">that</span> <span m="503700">cycle</span> <span
  m="504090">loop</span> <span m="504260">around</span> <span
  m="504530">infinitely</span> <span m="505060">many</span> <span
  m="505260">times,</span> <span m="505560">and</span> <span
  m="505670">then</span> <span m="505830">go</span> <span m="505970">to</span>
  <span m="506050">V.</span></p><p><span m="507130">OK,</span> <span
  m="507310">so</span> <span m="508320">the</span> <span
  m="508460">algorithms</span> <span m="508820">you</span> <span
  m="508920">saw</span> <span m="509090">probably</span> <span
  m="509640">didn't</span> <span m="509880">actually</span> <span
  m="510390">compute</span> <span m="510850">correctly</span> <span
  m="511330">in</span> <span m="511430">this</span> <span
  m="511600">case.</span> <span m="511890">They</span> <span
  m="511950">just</span> <span m="512159">said,</span> <span
  m="513169">negative</span> <span m="513480">weight</span> <span
  m="513669">cycle--</span> <span m="515230">I</span> <span
  m="515330">don't</span> <span m="515470">know</span> <span
  m="515570">what</span> <span m="515710">to</span> <span m="515799">do.</span>
  <span m="516450">But</span> <span m="516600">it's</span> <span
  m="516740">actually</span> <span m="516980">not</span> <span
  m="517159">that</span> <span m="517289">hard.</span> <span m="517549">With
  a</span> <span m="517640">little</span> <span m="517929">bit</span> <span
  m="518080">more</span> <span m="518299">effort,</span> <span
  m="518590">you</span> <span m="518720">can</span> <span
  m="518929">figure</span> <span m="519309">out</span> <span
  m="519419">where</span> <span m="519530">the</span> <span
  m="519640">negative</span> <span m="519970">infinities</span> <span
  m="520370">are.</span> <span m="520590">We're</span> <span
  m="520690">not</span> <span m="520830">going</span> <span m="520929">to</span>
  <span m="520980">rely</span> <span m="521270">on</span> <span
  m="521380">that,</span> <span m="521600">but</span> <span
  m="521720">I'm</span> <span m="521799">just</span> <span
  m="522130">throwing</span> <span m="522400">it</span> <span
  m="522460">out</span> <span m="522650">there</span> <span m="523159">to</span>
  <span m="523340">make</span> <span m="523520">this</span> <span
  m="523669">a</span> <span m="523809">well-defined</span> <span
  m="525450">definition.</span></p><p><span m="526130">Once</span> <span
  m="526370">you</span> <span m="526450">have</span> <span m="526590">the</span>
  <span m="526650">shortest</span> <span m="526960">path</span> <span
  m="527190">weights,</span> <span m="527580">you</span> <span
  m="527680">can</span> <span m="527810">also</span> <span
  m="528150">store</span> <span m="528420">parent</span> <span
  m="528800">pointers,</span> <span m="529420">get</span> <span
  m="529560">the</span> <span m="529630">shortest</span> <span
  m="529940">path</span> <span m="530250">tree,</span> <span
  m="530870">then</span> <span m="530980">you</span> <span m="531050">can</span>
  <span m="531170">actually</span> <span m="531470">find</span> <span
  m="531720">shortest</span> <span m="532020">paths.</span> <span
  m="533760">But</span> <span m="534170">again,</span> <span
  m="534410">we're</span> <span m="534510">not</span> <span
  m="534660">going</span> <span m="534750">to</span> <span
  m="534800">talk</span> <span m="535000">about</span> <span
  m="535350">here.</span> <span m="535550">We'll</span> <span
  m="535680">focus</span> <span m="536080">on</span> <span
  m="536200">computing</span> <span m="536600">delta,</span> <span
  m="537010">but</span> <span m="537230">with</span> <span m="537490">the</span>
  <span m="537680">usual</span> <span m="538070">techniques</span> <span
  m="538470">you</span> <span m="538570">saw</span> <span m="538730">in</span>
  <span m="538820">006,</span> <span m="539780">you</span> <span
  m="539880">could</span> <span m="540010">also</span> <span
  m="540370">reconstruct</span> <span m="541470">paths.</span></p><p><span
  m="543980">So</span> <span m="548970">for</span> <span
  m="549100">all-pairs</span> <span m="549420">shortest</span> <span
  m="549770">paths,</span> <span m="550090">we</span> <span
  m="550190">have</span> <span m="550280">a</span> <span
  m="550330">similar</span> <span m="550710">set-up.</span> <span
  m="551040">We</span> <span m="551120">have</span> <span m="551230">a</span>
  <span m="551280">directed</span> <span m="551710">graph,</span> <span
  m="552690">V,E.</span> <span m="553250">And</span> <span m="553540">we</span>
  <span m="553550">have</span> <span m="553880">an</span> <span
  m="554000">edge</span> <span m="554200">weight</span> <span
  m="554420">function</span> <span m="554790">w--</span> <span
  m="555890">in</span> <span m="556080">general,</span> <span
  m="556460">could</span> <span m="556590">have</span> <span
  m="556780">negative</span> <span m="557070">weights.</span> <span
  m="558430">And</span> <span m="558650">our</span> <span m="558760">goal</span>
  <span m="559160">is</span> <span m="559430">to</span> <span
  m="559580">find</span> <span m="561180">delta</span> <span
  m="561475">of</span> <span m="562100">u comma</span> <span m="562410">v</span>
  <span m="564140">for</span> <span m="564290">all</span> <span
  m="564690">u</span> <span m="564880">and</span> <span m="565000">v.</span>
  <span m="570040">OK.</span></p><p><span m="570780">Single-source</span> <span
  m="571110">shortest</span> <span m="571620">paths</span> <span m="572020">is
  the</span> <span m="572110">sort</span> <span m="572340">of</span> <span
  m="572440">thing</span> <span m="573360">that</span> <span
  m="573800">you</span> <span m="573950">might</span> <span
  m="574160">want</span> <span m="574300">to</span> <span m="574380">do</span>
  <span m="574540">a</span> <span m="574590">few--</span> <span
  m="575230">just</span> <span m="575490">given</span> <span m="575860">a</span>
  <span m="575930">graph,</span> <span m="576350">and</span> <span
  m="576440">you</span> <span m="576570">want</span> <span m="576730">to</span>
  <span m="576780">find</span> <span m="577030">a</span> <span
  m="577110">shortest</span> <span m="577450">path</span> <span
  m="577660">from</span> <span m="577800">A</span> <span m="577900">to</span>
  <span m="577980">B.</span> <span m="578250">I</span> <span
  m="578520">said,</span> <span m="578770">this</span> <span
  m="578930">is</span> <span m="579040">the</span> <span m="579120">best</span>
  <span m="579380">way</span> <span m="579480">we</span> <span
  m="579600">know</span> <span m="579730">how</span> <span m="579850">to</span>
  <span m="579940">do</span> <span m="580070">A</span> <span
  m="580250">to</span> <span m="580310">B,</span> <span
  m="580520">essentially.</span> <span m="582946">But</span> <span
  m="583350">all-pairs</span> <span m="583810">shortest</span> <span
  m="584200">paths</span> <span m="584430">is</span> <span
  m="584540">what</span> <span m="584760">you</span> <span
  m="584860">might</span> <span m="585060">want</span> <span
  m="585190">to</span> <span m="585250">do</span> <span m="585370">if</span>
  <span m="585460">you're</span> <span
  m="585610">pre-processing.</span></p><p><span m="586840">If</span> <span
  m="586980">you're</span> <span m="587890">Google</span> <span
  m="588140">Maps,</span> <span m="588570">and</span> <span
  m="588710">you</span> <span m="588820">want</span> <span m="589050">to</span>
  <span m="589320">be</span> <span m="589450">able</span> <span
  m="589610">to</span> <span m="589650">very</span> <span
  m="589960">quickly</span> <span m="590430">support</span> <span
  m="591120">shortest</span> <span m="591450">path</span> <span
  m="591720">queries</span> <span m="592060">between</span> <span
  m="592510">major</span> <span m="592840">cities,</span> <span
  m="593990">then</span> <span m="594320">you</span> <span m="594460">may</span>
  <span m="594660">want</span> <span m="594970">to</span> <span
  m="596290">first</span> <span m="596750">compute</span> <span
  m="597210">all-pair</span> <span m="597680">shortest</span> <span
  m="598040">paths</span> <span m="598520">for</span> <span
  m="598710">all</span> <span m="598920">major</span> <span
  m="599200">cities,</span> <span m="599500">because</span> <span
  m="599650">road</span> <span m="599830">networks</span> <span
  m="600170">don't</span> <span m="600360">change</span> <span
  m="600610">very</span> <span m="600800">much,</span> <span
  m="602210">the</span> <span m="602650">large</span> <span
  m="603000">scale.</span> <span m="603400">This</span> <span m="603470">is
  ignoring</span> <span m="603870">traffic</span> <span m="604280">and</span>
  <span m="604390">so</span> <span m="604530">on.</span> <span
  m="605350">Pre-compute</span> <span m="605880">this,</span> <span
  m="606190">and</span> <span m="606390">then</span> <span
  m="607250">given</span> <span m="607540">a</span> <span
  m="607640">query</span> <span m="608570">of</span> <span m="608750">two</span>
  <span m="608940">vertices,</span> <span m="609610">come</span> <span
  m="609860">in--</span> <span m="610090">probably</span> <span
  m="610400">get</span> <span m="610530">a</span> <span
  m="610570">million</span> <span m="610880">queries</span> <span
  m="611150">a</span> <span m="611210">second--</span> <span
  m="611860">you</span> <span m="611980">could</span> <span
  m="612080">very</span> <span m="612380">quickly</span> <span
  m="612740">know</span> <span m="612940">what</span> <span
  m="613090">the</span> <span m="613220">answer</span> <span
  m="613560">is.</span></p><p><span m="614240">And</span> <span
  m="614420">this</span> <span m="614600">is</span> <span m="614710">the</span>
  <span m="614820">basis</span> <span m="615240">for</span> <span
  m="615650">real</span> <span m="615970">world</span> <span
  m="616290">shortest</span> <span m="616660">paths.</span> <span
  m="617350">Typically,</span> <span m="617810">you</span> <span
  m="617900">don't</span> <span m="618110">compute</span> <span
  m="618540">shortest</span> <span m="618810">paths</span> <span
  m="619020">from</span> <span m="619100">A</span> <span m="619270">to</span>
  <span m="619340">B</span> <span m="619530">every</span> <span
  m="619790">single</span> <span m="620100">time.</span> <span
  m="620930">You</span> <span m="621510">use</span> <span
  m="621700">waypoints</span> <span m="622290">along</span> <span
  m="622560">the</span> <span m="622640">way.</span> <span m="623220">And</span>
  <span m="623390">you</span> <span m="623520">have</span> <span
  m="623740">pre-computed</span> <span m="624310">all-pair</span> <span
  m="624670">shortest</span> <span m="625030">paths</span> <span
  m="625300">between</span> <span m="625610">waypoints.</span> <span
  m="626100">So</span> <span m="626210">that's</span> <span
  m="626450">the</span> <span m="626610">motivation.</span></p><p><span
  m="629710">Yeah,</span> <span m="629880">I</span> <span
  m="629960">guess</span> <span m="630200">in</span> <span
  m="630280">some</span> <span m="630470">sense,</span> <span
  m="630740">internet</span> <span m="631090">routing</span> <span
  m="631450">is</span> <span m="631560">another</span> <span
  m="631830">situation</span> <span m="632390">where</span> <span
  m="632550">at</span> <span m="632590">any</span> <span
  m="632770">moment</span> <span m="633140">you</span> <span
  m="633270">may</span> <span m="633570">need</span> <span m="633790">to</span>
  <span m="633920">know</span> <span m="634110">the</span> <span
  m="634210">shortest</span> <span m="634550">path</span> <span
  m="634820">to</span> <span m="634940">get</span> <span m="635220">to--</span>
  <span m="635830">the</span> <span m="636290">fewest</span> <span
  m="636700">hop</span> <span m="636930">path</span> <span m="637250">say</span>
  <span m="637950">to</span> <span m="638100">get</span> <span
  m="638350">to</span> <span m="638640">an</span> <span
  m="638770">internet</span> <span m="639170">site.</span> <span
  m="639480">You</span> <span m="639600">know</span> <span m="639810">the</span>
  <span m="639950">IP</span> <span m="640240">address.</span> <span
  m="640580">You</span> <span m="640640">need</span> <span m="640780">to</span>
  <span m="640880">know</span> <span m="641030">where</span> <span
  m="641160">to</span> <span m="641240">go.</span> <span m="642020">You</span>
  <span m="642100">don't</span> <span m="642210">need</span> <span
  m="642340">to</span> <span m="642420">know</span> <span m="642530">the</span>
  <span m="642590">whole</span> <span m="642770">path.</span> <span
  m="643080">You</span> <span m="643130">need</span> <span m="643270">to</span>
  <span m="643360">know</span> <span m="643480">the</span> <span
  m="643560">next</span> <span m="643800">step.</span> <span
  m="644470">But</span> <span m="644660">in</span> <span m="644720">some</span>
  <span m="644920">sense,</span> <span m="645160">you're</span> <span
  m="645300">computing</span> <span m="645720">all-pair</span> <span
  m="646040">shortest</span> <span m="646330">paths.</span> <span
  m="646570">That's</span> <span m="646790">a</span> <span
  m="646840">more</span> <span m="647030">dynamic</span> <span
  m="647460">situation.</span></p><p><span m="649940">OK.</span> <span
  m="650270">So</span> <span m="651300">here are</span> <span
  m="651530">the</span> <span m="651640">results</span> <span
  m="652030">we</span> <span m="652160">know</span> <span m="652450">for</span>
  <span m="652800">all-pair</span> <span m="653140">shortest</span> <span
  m="653470">paths.</span> <span m="658528">I think</span> <span
  m="659020">I'm</span> <span m="660180">going to</span> <span
  m="660780">cheat,</span> <span m="661460">and</span> <span
  m="662420">reuse</span> <span m="662750">this</span> <span
  m="662950">board.</span> <span m="663540">So</span> <span
  m="664890">same</span> <span m="665240">situations,</span> <span
  m="667320">except</span> <span m="667750">I</span> <span
  m="667820">won't</span> <span m="668450">think</span> <span
  m="668680">about</span> <span m="669020">acyclic</span> <span
  m="669480">graphs</span> <span m="669870">here.</span> <span
  m="670845">They're</span> <span m="671300">a</span> <span
  m="671330">little</span> <span m="671610">less</span> <span
  m="671860">interesting.</span> <span m="674900">Actually now,</span> <span
  m="675210">I'm</span> <span m="675320">curious,</span> <span
  m="675800">but</span> <span m="676706">I</span> <span m="677070">didn't</span>
  <span m="677210">intend to</span> <span m="677610">talk</span> <span
  m="677840">about</span> <span m="678070">acyclic.</span></p><p><span
  m="681410">And</span> <span m="682650">so</span> <span m="682860">the</span>
  <span m="683040">obvious</span> <span m="683390">thing</span> <span
  m="683560">to</span> <span m="683690">do</span> <span m="683930">to</span>
  <span m="684020">solve</span> <span m="684320">all-pairs shortest</span> <span
  m="684990">paths</span> <span m="685790">is</span> <span
  m="685970">just</span> <span m="686170">run</span> <span m="686410">the</span>
  <span m="686500">single</span> <span m="686800">source</span> <span
  m="687080">algorithm</span> <span m="687570">V</span> <span
  m="687810">times,</span> <span m="688280">once</span> <span
  m="688550">from</span> <span m="688920">each</span> <span
  m="689160">source.</span> <span m="690290">So</span> <span m="690650">I</span>
  <span m="690720">could</span> <span m="690930">do</span> <span
  m="691310">V</span> <span m="691560">times</span> <span
  m="693030">Breadth-first</span> <span m="693430">Search,</span> <span
  m="694450">V</span> <span m="694710">times</span> <span
  m="695240">Dijkstra,</span> <span m="696270">V</span> <span
  m="696480">times</span> <span m="696920">Bellman-Ford.</span> <span
  m="698640">And now,</span> <span m="698870">I</span> <span
  m="698940">just</span> <span m="699140">need</span> <span m="699290">to</span>
  <span m="699390">update</span> <span m="699790">my</span> <span
  m="699950">bounds.</span></p><p><span m="703520">OK</span> <span
  m="703720">so</span> <span m="704030">VE</span> <span
  m="704530">becomes</span> <span m="705210">V</span> <span
  m="705540">squared</span> <span m="706150">plus</span> <span
  m="707210">VE.</span> <span m="708880">If</span> <span
  m="709070">you're</span> <span m="710460">a</span> <span
  m="710570">little</span> <span m="710790">bit</span> <span
  m="710940">clever,</span> <span m="713640">or</span> <span
  m="713820">you</span> <span m="713930">assume</span> <span m="714110">E</span>
  <span m="714330">is</span> <span m="714480">at</span> <span
  m="714560">least</span> <span m="714830">V,</span> <span
  m="715740">that</span> <span m="715940">becomes</span> <span
  m="716310">VE.</span> <span m="718980">If</span> <span m="719220">I</span>
  <span m="719290">run</span> <span m="720270">Dijkstra</span> <span
  m="720850">V</span> <span m="721070">times,</span> <span m="721600">I'm</span>
  <span m="721750">going</span> <span m="721900">to</span> <span
  m="721950">get</span> <span m="722780">V</span> <span
  m="723130">squared</span> <span m="723770">log</span> <span
  m="724170">V</span> <span m="725720">plus</span> <span m="726540">V</span>
  <span m="726820">times</span> <span m="727260">E.</span> <span
  m="730080">And</span> <span m="730430">if</span> <span m="730570">I</span>
  <span m="730620">run</span> <span m="730860">Bellman-Ford</span> <span
  m="731930">V</span> <span m="732100">times,</span> <span m="732620">I</span>
  <span m="732750">get</span> <span m="733040">V</span> <span
  m="733220">squared</span> <span m="733580">E.</span></p><p><span
  m="741040">OK.</span> <span m="741760">And</span> <span m="742060">over</span>
  <span m="742270">here,</span> <span m="742520">everything's</span> <span
  m="742880">just</span> <span m="743050">going</span> <span
  m="743160">to</span> <span m="743210">increase</span> <span
  m="743630">by</span> <span m="743880">a V</span> <span
  m="744130">factor.</span> <span m="744740">So</span> <span m="745110">a</span>
  <span m="745170">little</span> <span m="745410">more</span> <span
  m="745590">intuitive</span> <span m="745980">is to</span> <span
  m="746170">think</span> <span m="746380">about</span> <span
  m="746810">the</span> <span m="747000">sparse</span> <span
  m="747460">case.</span> <span m="747920">I</span> <span m="748050">get</span>
  <span m="748320">V</span> <span m="748480">squared,</span> <span
  m="750140">V</span> <span m="750320">squared</span> <span
  m="750700">log</span> <span m="751010">V,</span> <span m="752130">and</span>
  <span m="752570">V</span> <span m="752750">cubed.</span> <span
  m="754250">Check</span> <span m="754550">that</span> <span
  m="754710">those</span> <span m="755030">match</span> <span
  m="755460">over</span> <span m="755670">there--</span> <span
  m="755930">1</span> <span m="756070">equals</span> <span m="756500">V.</span>
  <span m="757290">And</span> <span m="757640">over</span> <span
  m="757790">here,</span> <span m="758110">I</span> <span m="758210">get</span>
  <span m="759640">V</span> <span m="759790">cubed,</span> <span
  m="760630">V</span> <span m="760840">cubed,</span> <span m="761480">and</span>
  <span m="761890">V</span> <span m="762110">to</span> <span
  m="762230">the</span> <span m="762330">fourth.</span> <span
  m="764480">OK.</span> <span m="764790">So</span> <span
  m="765960">pretty</span> <span m="766300">boring</span> <span
  m="766750">so</span> <span m="766990">far.</span></p><p><span
  m="769810">The</span> <span m="770180">interesting</span> <span
  m="770910">thing</span> <span m="771220">here</span> <span
  m="772050">is</span> <span m="772220">that</span> <span m="772320">we</span>
  <span m="772470">can</span> <span m="772630">beat</span> <span
  m="773080">the</span> <span m="773220">last</span> <span
  m="773590">result.</span> <span m="774420">The</span> <span
  m="774530">last</span> <span m="774860">result,</span> <span
  m="775760">which</span> <span m="775900">is the</span> <span
  m="775990">slowest</span> <span m="776530">one,</span> <span
  m="777720">could</span> <span m="777900">take</span> <span
  m="778110">as</span> <span m="778230">long</span> <span m="778510">as</span>
  <span m="778680">V</span> <span m="778840">to</span> <span
  m="778910">the</span> <span m="779020">fourth</span> <span
  m="779410">time.</span> <span m="780800">We</span> <span m="781030">can</span>
  <span m="781290">shave</span> <span m="781670">off</span> <span
  m="781970">a</span> <span m="782030">whole</span> <span m="782305">V</span>
  <span m="782580">factor.</span></p><p><span m="785310">So</span> <span
  m="785710">a</span> <span m="785760">better</span> <span
  m="788430">general</span> <span m="788870">case</span> <span
  m="789160">algorithm</span> <span m="790700">is</span> <span
  m="790900">called</span> <span m="791210">Johnson's</span> <span
  m="791700">algorithm.</span> <span m="792530">That</span> <span
  m="792690">will</span> <span m="792820">be</span> <span m="794240">the</span>
  <span m="794320">last</span> <span m="794750">algorithm</span> <span
  m="795150">we</span> <span m="795270">cover</span> <span
  m="795560">today.</span> <span m="797430">And</span> <span
  m="797650">it</span> <span m="797780">achieves</span> <span
  m="805410">this</span> <span m="805650">bound,</span> <span
  m="806440">which</span> <span m="806560">is</span> <span m="806700">the</span>
  <span m="806810">same</span> <span m="807760">as</span> <span
  m="807970">running</span> <span m="808260">Dijkstra</span> <span
  m="808680">V</span> <span m="808830">times.</span> <span m="811360">So</span>
  <span m="811660">it's</span> <span m="812010">between</span> <span
  m="813080">V</span> <span m="813370">squared</span> <span
  m="813800">log</span> <span m="814020">V</span> <span m="816500">and</span>
  <span m="816690">V</span> <span m="816840">cubed.</span></p><p><span
  m="818900">And</span> <span m="819080">that's</span> <span
  m="819290">cool,</span> <span m="819510">because</span> <span
  m="819930">this</span> <span m="820140">is</span> <span m="820260">the</span>
  <span m="820380">best</span> <span m="820770">algorithm</span> <span
  m="821210">we</span> <span m="821340">know</span> <span m="821800">for</span>
  <span m="822170">all-pairs,</span> <span m="823370">non-negative</span> <span
  m="824070">edge</span> <span m="824250">weight,</span> <span
  m="825020">shortest</span> <span m="825380">paths,</span> <span
  m="826670">just</span> <span m="826880">running</span> <span
  m="827180">Dijkstra</span> <span m="827570">V</span> <span
  m="827730">times.</span> <span m="828130">Not</span> <span
  m="828310">very</span> <span m="828490">smart--</span> <span
  m="828880">but</span> <span m="829010">it's</span> <span m="829130">the</span>
  <span m="829220">best</span> <span m="829450">thing</span> <span
  m="829580">we</span> <span m="829680">know</span> <span m="829800">how</span>
  <span m="829910">to</span> <span m="830010">do.</span> <span
  m="830810">And</span> <span m="830940">what</span> <span
  m="831080">this</span> <span m="831270">says</span> <span
  m="831650">is,</span> <span m="832030">even</span> <span
  m="832300">when</span> <span m="832430">we</span> <span m="832520">have</span>
  <span m="832720">negative</span> <span m="833210">edge</span> <span
  m="833380">weights,</span> <span m="833770">actually</span> <span
  m="834130">we</span> <span m="834240">can</span> <span
  m="834370">achieve</span> <span m="834750">the</span> <span
  m="834860">same</span> <span m="835290">bound</span> <span
  m="835620">as</span> <span m="835710">running</span> <span
  m="835960">Dijkstra.</span></p><p><span m="837100">This</span> <span
  m="837270">is</span> <span m="837400">a</span> <span m="837450">bit</span>
  <span m="837670">counter</span> <span m="837970">intuitive</span> <span
  m="838340">because</span> <span m="838510">in</span> <span
  m="838590">006</span> <span m="839120">you're</span> <span
  m="839260">always</span> <span m="839480">told,</span> <span
  m="839690">if</span> <span m="839780">you</span> <span m="839840">have</span>
  <span m="839930">negative</span> <span m="840230">edge</span> <span
  m="840370">weights,</span> <span m="840620">can't</span> <span
  m="840920">use</span> <span m="841100">Dijkstra.</span> <span
  m="841990">Turns</span> <span m="842260">out,</span> <span
  m="842940">in</span> <span m="843040">the</span> <span
  m="843150">all-pairs</span> <span m="843470">shortest</span> <span
  m="843820">paths</span> <span m="844370">case,</span> <span
  m="844730">you</span> <span m="844920">kind</span> <span m="845340">of</span>
  <span m="845480">can.</span> <span m="846290">How</span> <span
  m="846520">can</span> <span m="846670">that</span> <span m="846890">be?</span>
  <span m="847170">Because</span> <span m="849080">this</span> <span
  m="849250">is</span> <span m="849350">a</span> <span m="849510">harder</span>
  <span m="849940">problem.</span> <span m="850380">If you</span> <span
  m="850470">could</span> <span m="850600">solve</span> <span
  m="850820">all-pairs</span> <span m="850990">shortest</span> <span
  m="851420">paths,</span> <span m="851650">of</span> <span
  m="851770">course</span> <span m="852010">you</span> <span
  m="852090">could</span> <span m="852240">solve</span> <span
  m="852470">single-source.</span></p><p><span m="854910">And</span> <span
  m="855190">that's</span> <span m="855420">actually</span> <span
  m="855730">the</span> <span m="855850">luxury.</span> <span
  m="856340">Because</span> <span m="856750">it's</span> <span
  m="856880">a</span> <span m="856920">harder</span> <span
  m="857300">problem,</span> <span m="858600">we</span> <span
  m="858770">have</span> <span m="858990">this VE</span> <span
  m="859170">term</span> <span m="860040">in</span> <span m="860110">the</span>
  <span m="860220">running</span> <span m="860490">time,</span> <span
  m="861530">which</span> <span m="861760">lets</span> <span
  m="862020">us</span> <span m="862190">do</span> <span m="862340">things</span>
  <span m="862660">like</span> <span m="862980">run</span> <span
  m="863400">Bellman-Ford</span> <span m="864560">once.</span> <span
  m="866230">And</span> <span m="866450">running</span> <span
  m="866710">Bellman-Ford</span> <span m="867220">once</span> <span
  m="867690">will</span> <span m="867860">let</span> <span m="868030">us</span>
  <span m="868190">run</span> <span m="868410">Dijkstra</span> <span
  m="869360">V</span> <span m="869570">times.</span> <span
  m="870440">That's</span> <span m="871680">the</span> <span
  m="871800">reason</span> <span m="872140">we</span> <span
  m="872260">can</span> <span m="872380">achieve</span> <span
  m="872700">this</span> <span m="872860">bound.</span> <span
  m="873610">But</span> <span m="873750">we</span> <span m="873860">won't</span>
  <span m="874010">be</span> <span m="874110">seeing</span> <span
  m="874310">that</span> <span m="874500">for</span> <span m="874580">a</span>
  <span m="874640">while.</span></p><p><span m="875650">For</span> <span
  m="875850">starters,</span> <span m="876290">I</span> <span
  m="876370">want</span> <span m="876620">to</span> <span m="876690">show</span>
  <span m="876860">you</span> <span m="877070">some</span> <span
  m="877570">connections</span> <span m="878110">between</span> <span
  m="878640">all-pairs</span> <span m="878980">shortest</span> <span
  m="879390">paths,</span> <span m="880340">and</span> <span
  m="881360">dynamic</span> <span m="881730">programming,</span> <span
  m="882300">and</span> <span m="882430">matrix</span> <span
  m="882800">multiplication,</span> <span m="885500">which</span> <span
  m="885830">turn</span> <span m="886080">out</span> <span m="886250">to</span>
  <span m="886360">give--</span> <span m="887630">for</span> <span
  m="887770">dense</span> <span m="888120">graphs,</span> <span
  m="889290">we're</span> <span m="889590">just</span> <span
  m="889790">achieving</span> <span m="890300">V</span> <span
  m="890520">cubed</span> <span m="890890">in</span> <span m="891000">all</span>
  <span m="891130">situations.</span> <span m="892340">So</span> <span
  m="892420">our</span> <span m="892560">first</span> <span
  m="892860">goal</span> <span m="893080">is</span> <span
  m="893180">going</span> <span m="893380">to</span> <span m="893490">be</span>
  <span m="894150">to</span> <span m="894700">achieve</span> <span
  m="895190">V</span> <span m="895470">cubed</span> <span m="895890">time</span>
  <span m="897990">for</span> <span m="898390">general</span> <span
  m="898890">edge</span> <span m="899060">weights.</span> <span
  m="900890">So</span> <span m="901070">we're</span> <span
  m="901170">going</span> <span m="901270">to</span> <span
  m="901320">first</span> <span m="901620">achieve</span> <span
  m="901900">this</span> <span m="902050">bound.</span> <span
  m="902960">That</span> <span m="903120">will</span> <span m="903210">be</span>
  <span m="903330">a</span> <span m="903380">lot</span> <span
  m="903610">easier.</span> <span m="904330">And</span> <span
  m="904510">then</span> <span m="904640">eventually,</span> <span
  m="905120">we</span> <span m="905280">will</span> <span
  m="905440">achieve</span> <span m="905870">this</span> <span
  m="906295">bound.</span> <span m="907390">So</span> <span
  m="907630">the</span> <span m="908360">Floyd</span> <span
  m="908700">Warshall</span> <span m="909160">algorithm</span> <span
  m="910170">and</span> <span m="910440">some</span> <span m="910620">of</span>
  <span m="910700">these</span> <span m="911070">will</span> <span
  m="911530">get</span> <span m="911710">very</span> <span
  m="911930">close</span> <span m="912380">to</span> <span m="912840">V</span>
  <span m="913010">cubed.</span></p><p><span m="918200">All right.</span> <span
  m="918670">So</span> <span m="919680">we're</span> <span
  m="919850">going</span> <span m="919950">to</span> <span
  m="920010">start</span> <span m="920340">with</span> <span
  m="921270">our</span> <span m="921360">first</span> <span
  m="921610">approach</span> <span m="922020">to</span> <span
  m="922160">solving</span> <span m="922550">all-pairs</span> <span
  m="922710">shortest</span> <span m="923020">paths--</span> <span
  m="924010">that</span> <span m="924130">is</span> <span m="924290">not</span>
  <span m="925640">using</span> <span m="926010">an</span> <span
  m="926100">existing</span> <span m="926560">single</span> <span
  m="926840">source</span> <span m="927140">algorithm--</span> <span
  m="928060">is</span> <span m="928910">dynamic</span> <span
  m="929290">programming.</span> <span m="932350">Someone</span> <span
  m="932600">mentioned that</span> <span m="933090">already.</span> <span
  m="934210">It's a</span> <span m="934300">natural</span> <span
  m="934680">approach.</span> <span m="935360">Shortest</span> <span
  m="935770">paths</span> <span m="936720">is</span> <span
  m="936940">kind</span> <span m="937120">of</span> <span
  m="937200">dynamic</span> <span m="937540">programming.</span> <span
  m="938080">In</span> <span m="938180">fact,</span> <span
  m="938420">most</span> <span m="938630">dynamic</span> <span
  m="939030">programs,</span> <span m="939430">you</span> <span
  m="939540">can</span> <span m="939660">convert</span> <span
  m="940120">to</span> <span m="940950">single-source</span> <span
  m="941540">shortest</span> <span m="941890">paths,</span> <span
  m="942160">typically</span> <span m="942540">in</span> <span
  m="942620">a</span> <span m="942690">DAG--</span> <span m="944380">not</span>
  <span m="944600">all,</span> <span m="945080">but</span> <span
  m="945300">a</span> <span m="945360">lot</span> <span m="945570">of</span>
  <span m="945660">them.</span> <span m="947260">So</span> <span
  m="948400">we</span> <span m="948620">could</span> <span m="948760">try</span>
  <span m="949160">dynamic</span> <span
  m="949500">programming.</span></p><p><span m="950660">Now,</span> <span
  m="951940">I'm</span> <span m="952180">going</span> <span m="952290">to</span>
  <span m="952360">preach</span> <span m="952620">to</span> <span
  m="952810">you</span> <span m="952910">a</span> <span m="953010">little</span>
  <span m="953040">bit</span> <span m="953200">about</span> <span
  m="953500">my</span> <span m="953760">way</span> <span m="953950">of</span>
  <span m="954050">thinking</span> <span m="954320">about</span> <span
  m="954560">dynamic</span> <span m="954830">programs.</span> <span
  m="955300">If</span> <span m="955410">you</span> <span
  m="955550">watched</span> <span m="955880">the</span> <span
  m="956060">006</span> <span m="956650">OCW</span> <span
  m="957780">version,</span> <span m="958190">you've</span> <span
  m="958270">seen</span> <span m="958890">the</span> <span
  m="959900">five</span> <span m="960220">easy</span> <span
  m="960460">steps</span> <span m="960770">to</span> <span
  m="960890">dynamic</span> <span m="961270">programming.</span> <span
  m="962770">And</span> <span m="962950">if</span> <span m="963030">you</span>
  <span m="963110">haven't,</span> <span m="963650">this</span> <span
  m="963770">will be</span> <span m="964100">new,</span> <span
  m="964990">otherwise,</span> <span m="965260">a</span> <span
  m="965310">reminder.</span></p><p><span m="966740">First</span> <span
  m="966940">thing</span> <span m="967110">I</span> <span m="967130">like</span>
  <span m="967330">to</span> <span m="967420">think</span> <span
  m="967600">about</span> <span m="968180">in a dynamic</span> <span
  m="968470">program</span> <span m="968970">is,</span> <span
  m="969600">what</span> <span m="969830">are</span> <span m="970050">the
  subproblems?</span> <span m="971470">The</span> <span m="971600">second</span>
  <span m="971990">thing</span> <span m="972230">I</span> <span
  m="972250">like</span> <span m="972480">to</span> <span
  m="972590">think</span> <span m="972800">about</span> <span
  m="973470">is,</span> <span m="973720">what</span> <span m="973990">am</span>
  <span m="974120">I</span> <span m="974200">guessing?</span> <span
  m="978770">I'm</span> <span m="978880">going</span> <span m="978980">to</span>
  <span m="979020">guess</span> <span m="979290">some</span> <span
  m="979690">feature</span> <span m="980190">of</span> <span
  m="980340">the</span> <span m="980410">solution.</span> <span
  m="982320">Third</span> <span m="982550">thing</span> <span
  m="982980">is,</span> <span m="983380">I</span> <span m="983450">want</span>
  <span m="983660">to</span> <span m="983720">write</span> <span
  m="983910">a</span> <span m="983940">recurrence</span> <span
  m="986220">relating</span> <span m="986720">subproblems</span> <span
  m="987210">solutions.</span> <span m="988340">Then,</span> <span
  m="988540">I'm</span> <span m="988800">basically</span> <span
  m="989270">done,</span> <span m="989650">but</span> <span
  m="989800">there's</span> <span m="990000">a</span> <span
  m="990070">couple</span> <span m="990400">wrap</span> <span
  m="990660">up</span> <span m="990810">things,</span> <span
  m="993000">which</span> <span m="993250">I'm</span> <span
  m="993360">going</span> <span m="993610">to</span> <span
  m="993800">have</span> <span m="994040">to</span> <span m="994140">use</span>
  <span m="994270">another</span> <span m="994530">board</span> <span
  m="994800">for.</span></p><p>&nbsp;</p><p><span m="1008490">So</span> <span
  m="1008920">number</span> <span m="1009210">four</span> <span
  m="1009740">is,</span> <span m="1012690">I</span> <span
  m="1012830">need</span> <span m="1013030">to</span> <span
  m="1013170">check</span> <span m="1013810">that</span> <span
  m="1014720">I</span> <span m="1014830">can</span> <span
  m="1015010">actually</span> <span m="1015320">resolve</span> <span
  m="1015890">these</span> <span m="1016040">subproblems</span> <span
  m="1016750">in</span> <span m="1016950">some</span> <span
  m="1017340">order</span> <span m="1019340">that's</span> <span
  m="1019490">valid.</span> <span m="1020310">Basically,</span> <span
  m="1020930">this</span> <span m="1021090">is</span> <span
  m="1021190">saying</span> <span m="1021460">that</span> <span
  m="1021700">the</span> <span m="1021920">constraint</span> <span
  m="1022550">graph</span> <span m="1022840">on</span> <span
  m="1022950">some</span> <span m="1023150">problems</span> <span
  m="1023480">should</span> <span m="1023700">be</span> <span
  m="1023880">acyclic.</span> <span m="1024599">Because</span> <span
  m="1024800">if</span> <span m="1024920">there's</span> <span
  m="1025099">a</span> <span m="1025160">cycle</span> <span
  m="1025630">in</span> <span m="1025690">the</span> <span
  m="1025790">constraint</span> <span m="1026170">graph,</span> <span
  m="1026910">you</span> <span m="1027000">take</span> <span
  m="1027220">infinite</span> <span m="1027690">time.</span> <span
  m="1028310">Even</span> <span m="1028540">if</span> <span
  m="1028619">you</span> <span m="1028740">memoize,</span> <span
  m="1029369">if</span> <span m="1029480">you</span> <span m="1029550">do</span>
  <span m="1029680">infinite</span> <span m="1030020">recursion--</span> <span
  m="1030500">bad</span> <span m="1030750">news.</span> <span
  m="1031180">You'll</span> <span m="1031280">never</span> <span
  m="1031540">actually</span> <span m="1031790">finish</span> <span
  m="1032230">anything, so</span> <span m="1032470">you</span> <span
  m="1032579">never</span> <span m="1032849">actually</span> <span
  m="1033079">write</span> <span m="1033300">anything</span> <span
  m="1033650">in</span> <span m="1033720">the</span> <span
  m="1033790">memo</span> <span m="1034060">table.</span> <span
  m="1035030">So</span> <span m="1035150">I</span> <span m="1035190">want</span>
  <span m="1035400">to</span> <span m="1035450">make</span> <span
  m="1035619">sure</span> <span m="1035810">that</span> <span
  m="1035970">it's</span> <span m="1036109">acyclic.</span></p><p><span
  m="1038270">I</span> <span m="1038410">mean,</span> <span
  m="1038560">this</span> <span m="1038720">is</span> <span
  m="1038829">really</span> <span m="1039060">the</span> <span
  m="1039160">same</span> <span m="1039380">thing</span> <span
  m="1039550">we're</span> <span m="1039720">talking</span> <span
  m="1040040">about</span> <span m="1040240">in</span> <span
  m="1040319">this</span> <span m="1040500">erased</span> <span
  m="1040990">row,</span> <span m="1042060">which</span> <span
  m="1042230">is</span> <span m="1042349">topological</span> <span
  m="1043020">ordering.</span> <span m="1045480">Personally,</span> <span
  m="1045960">I</span> <span m="1046079">like</span> <span
  m="1046440">to--</span> <span m="1046920">you</span> <span
  m="1047050">could</span> <span m="1047170">argue</span> <span m="1047420">that
  it's</span> <span m="1047660">acyclic.</span> <span m="1048200">I</span> <span
  m="1048290">like</span> <span m="1048500">to</span> <span
  m="1048600">just</span> <span m="1048790">write</span> <span
  m="1049010">down,</span> <span m="1049350">here's</span> <span
  m="1049520">a</span> <span m="1049580">topological</span> <span
  m="1050190">order.</span> <span m="1050530">That's</span> <span
  m="1050630">a</span> <span m="1050680">nice</span> <span
  m="1050920">proof</span> <span m="1051240">that</span> <span
  m="1051350">it's</span> <span m="1051500">acyclic.</span> <span
  m="1052330">If</span> <span m="1052470">you</span> <span
  m="1052600">write</span> <span m="1052840">that</span> <span
  m="1053080">down</span> <span m="1053480">as</span> <span
  m="1053680">for</span> <span m="1053910">loops,</span> <span
  m="1054690">then</span> <span m="1054860">you</span> <span
  m="1054960">actually</span> <span m="1055210">have</span> <span
  m="1055420">a</span> <span m="1055490">bottom</span> <span
  m="1055790">up</span> <span m="1055930">dp.</span> <span m="1056740">If</span>
  <span m="1056910">you</span> <span m="1057020">just</span> <span
  m="1057270">take</span> <span m="1057570">the</span> <span
  m="1057680">recurrence,</span> <span m="1058580">stick</span> <span
  m="1058860">it</span> <span m="1058950">inside</span> <span
  m="1059240">the</span> <span m="1059310">for</span> <span
  m="1059520">loop,</span> <span m="1059710">you're</span> <span
  m="1059810">done,</span> <span m="1061570">which</span> <span
  m="1061770">we'll</span> <span m="1061920">do</span> <span
  m="1062800">in</span> <span m="1062920">a</span> <span
  m="1062950">moment.</span> <span m="1064310">I guess</span> <span
  m="1064540">I need</span> <span m="1064650">a</span> <span
  m="1064810">row</span> <span m="1064970">for that.</span></p><p><span
  m="1065640">And</span> <span m="1066860">finally,</span> <span
  m="1067710">you</span> <span m="1067810">need</span> <span
  m="1067980">to</span> <span m="1068050">solve</span> <span
  m="1068370">the</span> <span m="1068500">original</span> <span
  m="1068920">problem.</span> <span m="1071570">And</span> <span
  m="1071720">then,</span> <span m="1071840">there's</span> <span
  m="1072010">analysis</span> <span m="1072500">and</span> <span
  m="1072620">so</span> <span m="1072700">on.</span> <span m="1073070">But
  for</span> <span m="1073490">specifying</span> <span m="1074240">the</span>
  <span m="1074880">algorithm,</span> <span m="1075510">these</span> <span
  m="1075720">are</span> <span m="1075750">the</span> <span
  m="1075840">key</span> <span m="1076020">things</span> <span
  m="1076250">you</span> <span m="1076740">need</span> <span
  m="1076900">to</span> <span m="1076990">know.</span></p><p><span
  m="1077295">The</span> <span m="1077600">hard</span> <span
  m="1077890">part</span> <span m="1078180">is</span> <span
  m="1078290">figuring</span> <span m="1078590">out</span> <span
  m="1078740">what</span> <span m="1078890">the</span> <span
  m="1078960">subproblems</span> <span m="1079490">should</span> <span
  m="1079700">be,</span> <span m="1080010">so</span> <span
  m="1080210">that</span> <span m="1080370">your</span> <span
  m="1080480">dp</span> <span m="1080810">becomes</span> <span
  m="1081200">fast.</span> <span m="1082110">Running</span> <span
  m="1082360">time</span> <span m="1082590">is</span> <span
  m="1082690">going</span> <span m="1082820">to</span> <span
  m="1082880">be</span> <span m="1083070">number</span> <span
  m="1083370">of</span> <span m="1083470">subproblems</span> <span
  m="1083960">times</span> <span m="1084860">time</span> <span
  m="1085150">per</span> <span m="1085310">subproblem.</span> <span
  m="1087410">For</span> <span m="1087670">each</span> <span
  m="1087860">subproblem,</span> <span m="1088570">usually</span> <span
  m="1088880">we're</span> <span m="1089000">going</span> <span
  m="1089120">to</span> <span m="1089190">want</span> <span
  m="1089330">to</span> <span m="1089370">guess</span> <span
  m="1089670">some</span> <span m="1089980">feature</span> <span
  m="1090670">of</span> <span m="1090960">the</span> <span
  m="1091050">solution</span> <span m="1091590">to</span> <span
  m="1091690">that</span> <span m="1091900">problem.</span> <span
  m="1092430">Once</span> <span m="1092660">we</span> <span
  m="1092770">do</span> <span m="1092930">that,</span> <span
  m="1094790">the</span> <span m="1094840">recurrence</span> <span
  m="1095300">becomes</span> <span m="1095670">pretty</span> <span
  m="1095870">trivial.</span> <span m="1096630">Just</span> <span
  m="1096800">for</span> <span m="1096900">each</span> <span
  m="1097130">guess,</span> <span m="1097500">you</span> <span
  m="1098360">say</span> <span m="1098550">what</span> <span
  m="1098710">it</span> <span m="1098760">should</span> <span
  m="1098920">be.</span> <span m="1100110">So</span> <span
  m="1100360">these</span> <span m="1100620">are</span> <span
  m="1100680">the</span> <span m="1100820">really</span> <span
  m="1101030">hard</span> <span m="1101440">two</span> <span
  m="1101620">steps.</span></p><p><span m="1102850">And</span> <span
  m="1103000">then,</span> <span m="1103560">OK,</span> <span
  m="1103810">we</span> <span m="1103940">checked</span> <span m="1104140">that
  it's</span> <span m="1104360">acyclic.</span> <span m="1105490">And</span>
  <span m="1106410">we</span> <span m="1106690">make</span> <span
  m="1106880">sure</span> <span m="1107040">that</span> <span
  m="1107160">we</span> <span m="1107270">can</span> <span
  m="1107390">actually</span> <span m="1107600">solve</span> <span
  m="1107950">our</span> <span m="1108120">original</span> <span
  m="1108370">problem</span> <span m="1108650">using</span> <span
  m="1108940">one</span> <span m="1109120">of</span> <span m="1109260">the
  subproblems.</span> <span m="1109690">Sometimes,</span> <span
  m="1110700">our</span> <span m="1110910">original</span> <span
  m="1111160">problems</span> <span m="1111570">are</span> <span
  m="1111850">some</span> <span m="1112050">of</span> <span
  m="1112100">the</span> <span m="1112190">subproblems.</span> <span
  m="1112770">I</span> <span m="1112830">think</span> <span
  m="1113530">that</span> <span m="1113670">will</span> <span
  m="1113790">happen</span> <span m="1114110">here.</span> <span
  m="1114550">But</span> <span m="1114810">sometimes</span> <span
  m="1115250">you</span> <span m="1115420">need to</span> <span
  m="1115530">do</span> <span m="1115650">a</span> <span
  m="1115680">little</span> <span m="1115960">bit of</span> <span
  m="1116110">post-computation</span> <span m="1117410">to</span> <span
  m="1117670">get</span> <span m="1117840">your</span> <span
  m="1118010">answer.</span> <span m="1119120">All</span> <span
  m="1119220">right.</span></p><p><span m="1119620">So</span> <span
  m="1122570">what</span> <span m="1122730">am</span> <span m="1122840">I</span>
  <span m="1122900">going</span> <span m="1123040">to</span> <span
  m="1123110">do</span> <span m="1123220">for</span> <span
  m="1123380">subproblems?</span> <span m="1124820">Well</span> <span
  m="1125330">obviously,</span> <span m="1125760">I</span> <span
  m="1125850">have</span> <span m="1126860">a</span> <span
  m="1126940">bunch</span> <span m="1127260">of</span> <span
  m="1127480">different</span> <span m="1127870">problems</span> <span
  m="1128350">involving</span> <span m="1129770">pairs</span> <span
  m="1130130">of</span> <span m="1130210">vertices.</span> <span
  m="1130700">I</span> <span m="1130770">want</span> <span m="1130970">to</span>
  <span m="1131030">find</span> <span m="1132000">delta</span> <span
  m="1132345">of</span> <span m="1132690">u,v</span> <span
  m="1133190">for</span> <span m="1133380">all</span> <span m="1133790">u</span>
  <span m="1134000">and</span> <span m="1134140">v.</span> <span
  m="1134510">That,</span> <span m="1134770">I</span> <span
  m="1134920">erased.</span> <span m="1136300">But</span> <span
  m="1136410">that's</span> <span m="1136630">the</span> <span
  m="1136720">problem.</span></p><p><span m="1138230">So</span> <span
  m="1138690">I</span> <span m="1138810">want</span> <span m="1139070">to</span>
  <span m="1139120">know</span> <span m="1139880">what</span> <span
  m="1140100">is</span> <span m="1140380">the</span> <span
  m="1140710">weight</span> <span m="1143176">of</span> <span
  m="1143670">the</span> <span m="1143920">shortest</span> <span
  m="1144230">path</span> <span m="1151900">from</span> <span m="1152010">u
  to</span> <span m="1152280">v?</span> <span m="1155020">If</span> <span
  m="1155360">I</span> <span m="1155440">stop</span> <span
  m="1155830">there</span> <span m="1156030">and</span> <span
  m="1156130">said</span> <span m="1156290">that</span> <span
  m="1156440">was</span> <span m="1156580">my</span> <span
  m="1156690">subproblems,</span> <span m="1158650">bad</span> <span
  m="1158970">things</span> <span m="1159200">are</span> <span
  m="1159270">going</span> <span m="1159390">to</span> <span
  m="1159440">happen,</span> <span m="1159980">because</span> <span
  m="1160360">I</span> <span m="1160450">will</span> <span
  m="1160620">end</span> <span m="1160850">up--</span> <span
  m="1161350">there's</span> <span m="1161720">no</span> <span
  m="1161880">natural</span> <span m="1162250">way</span> <span
  m="1162370">to</span> <span m="1162460">make</span> <span
  m="1162670">this</span> <span m="1162850">thing</span> <span
  m="1163060">acyclic.</span> <span m="1164150">If</span> <span
  m="1164230">I</span> <span m="1164320">want</span> <span m="1164520">to</span>
  <span m="1164580">solve</span> <span m="1164980">u to</span> <span
  m="1165280">v</span> <span m="1165650">using,</span> <span m="1165995">I
  don't</span> <span m="1166340">know,</span> <span m="1166660">u</span> <span
  m="1166880">to</span> <span m="1167030">x,</span> <span m="1167450">and</span>
  <span m="1167590">then</span> <span m="1167780">x</span> <span
  m="1168020">to</span> <span m="1168130">v,</span> <span
  m="1168490">something</span> <span m="1168800">like</span> <span
  m="1168970">that--</span> <span m="1170660">there's</span> <span
  m="1170850">no</span> <span m="1171020">way</span> <span m="1171160">to</span>
  <span m="1171240">get</span> <span m="1171400">out</span> <span
  m="1171570">of</span> <span m="1171650">the</span> <span
  m="1171800">infinite</span> <span m="1172140">recursion</span> <span
  m="1172550">loop.</span> <span m="1173825">OK?</span></p><p><span
  m="1174250">So</span> <span m="1174440">I</span> <span m="1174530">need</span>
  <span m="1174770">to</span> <span m="1175420">add</span> <span
  m="1175720">more</span> <span m="1176140">subproblems</span> <span
  m="1177640">to</span> <span m="1177920">add</span> <span
  m="1178150">more</span> <span m="1178560">features</span> <span
  m="1179360">to</span> <span m="1179580">my</span> <span
  m="1179770">solution,</span> <span m="1180340">something</span> <span
  m="1181400">that</span> <span m="1181690">makes</span> <span
  m="1182040">it</span> <span m="1182200">so</span> <span
  m="1182350">that</span> <span m="1182610">when</span> <span
  m="1182810">I</span> <span m="1182930">try</span> <span m="1183130">to</span>
  <span m="1183210">solve</span> <span m="1183590">my subproblem,</span> <span
  m="1183960">I</span> <span m="1184030">reduce</span> <span m="1184350">it
  to</span> <span m="1184460">other</span> <span m="1184760">subproblems.</span>
  <span m="1185240">Things</span> <span m="1185530">get</span> <span
  m="1185750">smaller,</span> <span m="1187330">and</span> <span
  m="1187480">so</span> <span m="1187630">I</span> <span
  m="1187740">could</span> <span m="1187890">actually</span> <span
  m="1188440">make</span> <span m="1188680">progress.</span></p><p><span
  m="1190460">So</span> <span m="1190670">there</span> <span
  m="1190770">are</span> <span m="1190790">actually</span> <span
  m="1191090">two</span> <span m="1191430">natural</span> <span
  m="1191810">ways</span> <span m="1192020">to</span> <span
  m="1192120">do</span> <span m="1192250">this.</span> <span
  m="1193330">I'll</span> <span m="1193490">call</span> <span
  m="1193670">them</span> <span m="1194410">method</span> <span
  m="1194660">one</span> <span m="1194880">a</span> <span
  m="1194940">method</span> <span m="1195240">two.</span> <span
  m="1196480">Method</span> <span m="1196890">two</span> <span
  m="1197110">is</span> <span m="1197240">actually</span> <span
  m="1197760">Floyd</span> <span m="1198040">Warshall.</span> <span
  m="1198730">But</span> <span m="1199660">any</span> <span
  m="1199860">suggestions</span> <span m="1200530">on</span> <span
  m="1200670">how</span> <span m="1200880">we</span> <span
  m="1200960">might</span> <span m="1201170">do</span> <span
  m="1201290">this?</span> <span m="1201740">This is</span> <span
  m="1201880">a</span> <span m="1201950">harder</span> <span
  m="1202720">problem.</span> <span m="1203120">This</span> <span
  m="1203300">is</span> <span m="1203410">in</span> <span
  m="1203520">some</span> <span m="1203830">sense,</span> <span
  m="1205130">a</span> <span m="1205290">kind</span> <span m="1205700">of</span>
  <span m="1205900">guessing,</span> <span m="1206440">but</span> <span
  m="1206660">it's</span> <span m="1206880">like</span> <span
  m="1207170">I'm</span> <span m="1207340">going</span> <span
  m="1207600">to</span> <span m="1207920">guess</span> <span
  m="1208350">ahead</span> <span m="1208580">of</span> <span
  m="1208680">time</span> <span m="1209520">that</span> <span
  m="1209840">somehow</span> <span m="1210640">there's</span> <span
  m="1210900">an</span> <span m="1210940">important</span> <span
  m="1211400">feature</span> <span m="1211900">of</span> <span
  m="1212000">the</span> <span m="1212090">shortest</span> <span
  m="1212480">path.</span> <span m="1212790">I'm</span> <span
  m="1213580">going</span> <span m="1213720">to</span> <span
  m="1213780">parameterize</span> <span m="1214440">by</span> <span
  m="1214570">that,</span> <span m="1214880">and</span> <span
  m="1215530">somehow</span> <span m="1215900">it's</span> <span
  m="1216010">going</span> <span m="1216120">to</span> <span
  m="1216170">get</span> <span
  m="1216320">smaller.</span></p><p>&nbsp;</p><p><span
  m="1221978">Yeah?</span></p><p><span m="1222934">STUDENT:</span> <span
  m="1223412">[INAUDIBLE]</span></p><p><span m="1226760">PROFESSOR:
  Right,</span> <span m="1226980">shortest</span> <span
  m="1227370">path--</span> <span m="1227650">it</span> <span
  m="1227740">uses</span> <span m="1228070">at</span> <span
  m="1228180">most</span> <span m="1228620">a</span> <span
  m="1228670">given</span> <span m="1229000">number</span> <span
  m="1229260">of</span> <span m="1229320">edges.</span> <span
  m="1230060">Let's</span> <span m="1230240">parameterize</span> <span
  m="1230900">by</span> <span m="1231020">how</span> <span
  m="1231260">many</span> <span m="1231500">edges.</span> <span
  m="1231850">I</span> <span m="1231950">think</span> <span
  m="1232120">I'll</span> <span m="1232230">use</span> <span
  m="1232460">m.</span> <span m="1236060">So</span> <span
  m="1236300">using</span> <span m="1238660">at</span> <span
  m="1238700">most</span> <span m="1239180">m</span> <span
  m="1239790">edges.</span></p><p><span m="1243050">Very</span> <span
  m="1243210">good.</span> <span m="1245550">So</span> <span
  m="1245830">good,</span> <span m="1246040">I</span> <span
  m="1246110">think</span> <span m="1246280">it</span> <span
  m="1246340">deserves</span> <span m="1246650">a</span> <span
  m="1246720">purple</span> <span m="1247010">Frisbee.</span> <span
  m="1249290">All</span> <span m="1249715">right,</span> <span
  m="1250140">I'm</span> <span m="1250220">getting</span> <span
  m="1250430">better,</span> <span m="1250740">slowly.</span> <span
  m="1251930">By</span> <span m="1252040">the</span> <span
  m="1252140">end</span> <span m="1252240">the</span> <span
  m="1252340">semester,</span> <span m="1252780">I'll</span> <span
  m="1252860">be</span> <span m="1253180">pro</span> <span m="1253560">at</span>
  <span m="1253880">frisbee.</span> <span m="1253990">I should</span> <span
  m="1254310">enter a</span> <span m="1254600">competition.</span></p><p><span
  m="1257150">So</span> <span m="1257780">this</span> <span
  m="1258130">is,</span> <span m="1258510">of</span> <span
  m="1258640">course,</span> <span m="1259240">an</span> <span
  m="1259380">additional</span> <span m="1259810">restriction.</span> <span
  m="1261340">But</span> <span m="1263430">at</span> <span
  m="1263650">the</span> <span m="1263820">end</span> <span
  m="1264010">of</span> <span m="1264080">the</span> <span
  m="1264180">day,</span> <span m="1265060">the</span> <span
  m="1265170">problem</span> <span m="1265520">I</span> <span
  m="1265600">want</span> <span m="1265980">to</span> <span
  m="1266080">solve</span> <span m="1266990">is</span> <span
  m="1267170">going</span> <span m="1267410">to</span> <span
  m="1267570">be</span> <span m="1267850">essentially</span> <span
  m="1269170">duv,</span> <span m="1271310">let's</span> <span
  m="1271510">say,</span> <span m="1271700">n</span> <span
  m="1271960">minus</span> <span m="1272300">1.</span> <span
  m="1275690">If</span> <span m="1275890">I</span> <span m="1275950">want</span>
  <span m="1276150">a</span> <span m="1276200">shortest</span> <span
  m="1276890">path</span> <span m="1277190">that</span> <span
  m="1277280">does</span> <span m="1277430">not</span> <span
  m="1277620">repeat</span> <span m="1278050">any</span> <span
  m="1278250">vertices,</span> <span m="1279140">then</span> <span
  m="1280020">certainly</span> <span m="1280350">it</span> <span
  m="1280410">has</span> <span m="1280590">at</span> <span
  m="1280680">most</span> <span m="1280920">n</span> <span
  m="1281100">minus</span> <span m="1281400">1</span> <span
  m="1281630">edges.</span> <span m="1283210">So</span> <span
  m="1283290">in</span> <span m="1283380">fact,</span> <span
  m="1283620">the</span> <span m="1283710">claim</span> <span
  m="1283990">would</span> <span m="1284120">be</span> <span
  m="1284340">that</span> <span m="1284470">duv</span> <span
  m="1285000">equals</span> <span m="1286120">duv</span> <span
  m="1287506">n.</span> <span m="1288630">I</span> <span
  m="1288730">mean,</span> <span m="1288920">and</span> <span
  m="1289090">so</span> <span m="1289280">on.</span> <span m="1289990">If</span>
  <span m="1290100">you</span> <span m="1290210">go</span> <span
  m="1290450">larger</span> <span m="1290830">than</span> <span
  m="1291010">n</span> <span m="1291200">minus</span> <span
  m="1291490">1,</span> <span m="1291700">it</span> <span
  m="1291780">shouldn't</span> <span m="1292050">help</span> <span
  m="1292320">you.</span> <span m="1293060">If</span> <span
  m="1293300">you</span> <span m="1293430">know</span> <span
  m="1293620">that</span> <span m="1293790">your</span> <span
  m="1293860">shortest</span> <span m="1294190">paths</span> <span
  m="1294530">are</span> <span m="1294670">simple--</span> <span
  m="1295240">if</span> <span m="1295340">you</span> <span
  m="1295440">know</span> <span m="1295540">that</span> <span
  m="1295640">shortest</span> <span m="1295860">paths</span> <span
  m="1296050">don't</span> <span m="1296220">repeat</span> <span
  m="1296630">vertices.</span></p><p><span m="1297580">So</span> <span
  m="1297720">this</span> <span m="1297900">would</span> <span
  m="1297990">be</span> <span m="1298260">if</span> <span
  m="1299260">there</span> <span m="1299440">are</span> <span
  m="1299540">no</span> <span m="1300800">negative</span> <span
  m="1301100">weight</span> <span m="1301330">cycles.</span> <span
  m="1305620">If</span> <span m="1306080">there</span> <span
  m="1306180">are</span> <span m="1306220">no</span> <span m="1306370">negative
  weight</span> <span m="1306640">cycles,</span> <span m="1307380">then</span>
  <span m="1308170">we</span> <span m="1308360">know</span> <span
  m="1308540">it</span> <span m="1308620">never</span> <span m="1308860">helps
  to</span> <span m="1309110">repeat</span> <span m="1309440">vertices.</span>
  <span m="1310890">So</span> <span m="1311860">in</span> <span
  m="1312010">that</span> <span m="1312200">situation,</span> <span
  m="1313490">we</span> <span m="1313660">would</span> <span
  m="1313780">be</span> <span m="1313890">done,</span> <span
  m="1314160">if</span> <span m="1314270">we</span> <span
  m="1314360">could</span> <span m="1314500">solve</span> <span
  m="1314800">this</span> <span m="1315000">for</span> <span
  m="1315170">all</span> <span m="1315520">m.</span></p><p><span
  m="1316790">Now,</span> <span m="1317600">slight</span> <span
  m="1318010">catch--</span> <span m="1318400">well,</span> <span
  m="1318600">how</span> <span m="1318770">do</span> <span m="1318850">we</span>
  <span m="1318950">know</span> <span m="1319110">there's</span> <span
  m="1319280">no</span> <span m="1319390">negative</span> <span
  m="1319690">weight</span> <span m="1319870">cycles?</span> <span
  m="1321220">You know,</span> <span m="1321420">we</span> <span
  m="1321640">could</span> <span m="1321780">run</span> <span
  m="1322050">Bellman-Ford,</span> <span m="1322680">I</span> <span
  m="1322910">guess.</span> <span m="1323350">That's</span> <span
  m="1323530">a</span> <span m="1323580">little</span> <span
  m="1323820">tricky,</span> <span m="1325210">because</span> <span
  m="1325460">that</span> <span m="1325590">only</span> <span
  m="1325760">finds</span> <span m="1325980">reachable</span> <span
  m="1326500">negative</span> <span m="1326790">weight</span> <span
  m="1326990">cycles.</span></p><p><span m="1327820">In</span> <span
  m="1327970">fact</span> <span m="1328340">from</span> <span
  m="1328680">this</span> <span m="1328900">picture,</span> <span
  m="1329630">we</span> <span m="1329790">will</span> <span
  m="1329950">end</span> <span m="1330150">up</span> <span
  m="1330280">knowing</span> <span m="1330660">whether</span> <span
  m="1330890">there</span> <span m="1331070">are</span> <span
  m="1331090">negative</span> <span m="1331390">weight</span> <span
  m="1331570">cycles.</span> <span m="1334070">So</span> <span
  m="1334400">there</span> <span m="1334470">will</span> <span
  m="1334590">be</span> <span m="1334730">no</span> <span
  m="1334970">negative</span> <span m="1335310">weight</span> <span
  m="1335510">cycles,</span> <span m="1335930">if</span> <span
  m="1336070">and</span> <span m="1336160">only</span> <span
  m="1336390">if</span> <span m="1336580">there's</span> <span
  m="1336850">no</span> <span m="1337700">negative</span> <span
  m="1340180">diagonal</span> <span m="1340750">entry,</span> <span
  m="1342040">say</span> <span m="1343030">dvv</span> <span m="1344620">n</span>
  <span m="1344830">minus</span> <span m="1345230">1.</span> <span
  m="1347490">So</span> <span m="1348260">it</span> <span
  m="1348390">turns</span> <span m="1348610">out,</span> <span
  m="1348750">this</span> <span m="1348920">algorithm</span> <span
  m="1349360">will</span> <span m="1349740">detect</span> <span
  m="1350170">there's</span> <span m="1350500">a</span> <span
  m="1350590">negative</span> <span m="1350880">weight</span> <span
  m="1351020">cycle</span> <span m="1351400">by</span> <span
  m="1351520">finding</span> <span m="1351940">that</span> <span
  m="1352350">the</span> <span m="1352440">distance</span> <span
  m="1352740">from</span> <span m="1352860">v to v</span> <span
  m="1353310">is</span> <span m="1353440">negative.</span> <span
  m="1353950">Initially,</span> <span m="1354300">it's</span> <span
  m="1354420">going</span> <span m="1354550">to</span> <span
  m="1354610">be</span> <span m="1354710">0.</span> <span m="1355700">If</span>
  <span m="1355850">it</span> <span m="1356020">turns</span> <span
  m="1356240">out</span> <span m="1356360">to</span> <span m="1356420">be</span>
  <span m="1356520">negative,</span> <span m="1356860">we</span> <span
  m="1356950">know</span> <span m="1357080">there's</span> <span
  m="1357230">negative</span> <span m="1357480">weight</span> <span
  m="1357650">cycle.</span></p><p><span m="1357970">With</span> <span
  m="1358140">more</span> <span m="1358370">work,</span> <span
  m="1358610">you</span> <span m="1358710">could</span> <span
  m="1358840">actually</span> <span m="1359110">find</span> <span
  m="1359490">all</span> <span m="1359650">the</span> <span
  m="1360190">reachable</span> <span m="1360870">pairs,</span> <span
  m="1361190">and</span> <span m="1361290">so</span> <span
  m="1361420">on.</span> <span m="1361570">But</span> <span
  m="1361770">I'm</span> <span m="1361860">not</span> <span
  m="1362000">going</span> <span m="1362110">to</span> <span
  m="1362180">worry.</span> <span m="1362470">I'm just</span> <span
  m="1362650">going</span> <span m="1362740">to</span> <span
  m="1362780">say,</span> <span m="1363130">hey,</span> <span
  m="1363490">a</span> <span m="1363660">negative</span> <span
  m="1363940">weight</span> <span m="1364050">cycle.</span> <span
  m="1364300">I'm going</span> <span m="1364630">to</span> <span
  m="1364690">throw</span> <span m="1364930">my</span> <span
  m="1365060">hands</span> <span m="1365290">up</span> <span
  m="1365400">in</span> <span m="1365480">the</span> <span
  m="1365580">air</span> <span m="1365640">and</span> <span
  m="1365740">give</span> <span m="1365910">up</span> <span
  m="1367000">for</span> <span m="1367670">today.</span> <span
  m="1370360">OK.</span> <span m="1371700">Cool.</span></p><p><span
  m="1371970">So</span> <span m="1372160">I</span> <span m="1372260">can</span>
  <span m="1372420">solve</span> <span m="1372870">my</span> <span
  m="1373000">original</span> <span m="1373350">problem,</span> <span
  m="1374150">if</span> <span m="1374340">I</span> <span m="1374410">can</span>
  <span m="1374600">solve</span> <span m="1374920">these</span> <span
  m="1375110">subproblems.</span> <span m="1377790">And</span> <span
  m="1378010">now,</span> <span m="1379340">things</span> <span
  m="1379580">are</span> <span m="1379990">easier,</span> <span
  m="1380470">because</span> <span m="1381060">we</span> <span
  m="1381250">can</span> <span m="1381570">essentially</span> <span
  m="1382070">assume</span> <span m="1382910">in</span> <span
  m="1383030">solving</span> <span m="1383400">this</span> <span
  m="1383570">problem</span> <span m="1384010">that</span> <span
  m="1384140">we've</span> <span m="1384290">solved</span> <span
  m="1384730">smaller</span> <span m="1385300">subproblems</span> <span
  m="1385920">for</span> <span m="1386080">however</span> <span
  m="1386620">we</span> <span m="1386770">define</span> <span
  m="1387120">smaller.</span> <span m="1387660">That's</span> <span
  m="1388330">what's</span> <span m="1388520">given</span> <span
  m="1388780">by</span> <span m="1388910">this</span> <span
  m="1389060">topological</span> <span m="1389680">order.</span> <span
  m="1390530">Obvious</span> <span m="1390930">notion</span> <span
  m="1391180">of</span> <span m="1391250">smaller</span> <span
  m="1391720">is</span> <span m="1392020">smaller</span> <span
  m="1392440">m.</span> <span m="1393300">Presumably,</span> <span
  m="1393810">we</span> <span m="1393920">want</span> <span
  m="1394120">to</span> <span m="1394200">write</span> <span
  m="1394480">this</span> <span m="1395070">with</span> <span
  m="1395310">an</span> <span m="1395410">m</span> <span m="1395820">in</span>
  <span m="1396230">terms</span> <span m="1396540">of</span> <span
  m="1396720">this</span> <span m="1397000">with</span> <span m="1397240">an
  m</span> <span m="1397350">minus</span> <span m="1397810">1</span> <span
  m="1398710">or</span> <span m="1399030">smaller.</span></p><p><span
  m="1401570">So</span> <span m="1402960">this</span> <span
  m="1403300">gets</span> <span m="1403540">to our</span> <span
  m="1403710">guessing</span> <span m="1404160">part.</span> <span
  m="1405790">What</span> <span m="1406250">feature</span> <span
  m="1407260">of</span> <span m="1407380">a</span> <span
  m="1407440">shortest</span> <span m="1407790">path</span> <span
  m="1408200">could</span> <span m="1408360">we</span> <span
  m="1408470">guess</span> <span m="1409360">that</span> <span
  m="1409460">would</span> <span m="1409620">make</span> <span
  m="1409810">it</span> <span m="1409930">one</span> <span
  m="1410190">edge</span> <span m="1410380">shorter?</span> <span
  m="1413375">There's</span> <span m="1413870">probably</span> <span
  m="1414160">two</span> <span m="1414380">good</span> <span
  m="1414530">answers.</span> <span m="1414910">Yeah?</span> <span
  m="1416870">The</span> <span m="1418040">next</span> <span
  m="1418480">edge,</span> <span m="1418820">which</span> <span
  m="1419010">I</span> <span m="1419050">guess</span> <span
  m="1419200">you</span> <span m="1419280">mean</span> <span
  m="1419390">the</span> <span m="1419480">first</span> <span
  m="1419800">edge?</span> <span m="1420930">Sure.</span> <span
  m="1421260">Could</span> <span m="1421460">guess</span> <span
  m="1421660">the</span> <span m="1421740">first</span> <span
  m="1422050">edge,</span> <span m="1422330">or</span> <span
  m="1422540">you</span> <span m="1422650">could</span> <span
  m="1422790">guess</span> <span m="1423050">the</span> <span
  m="1423120">second</span> <span m="1423440">edge.</span> <span
  m="1424110">Or</span> <span m="1424660">no,</span> <span
  m="1424820">that</span> <span m="1424960">would</span> <span
  m="1425040">be</span> <span m="1425160">harder.</span> <span
  m="1425730">Or</span> <span m="1425900">I</span> <span
  m="1425950">mean,</span> <span m="1426160">the</span> <span
  m="1426280">last</span> <span m="1426630">edge,</span> <span
  m="1426930">that</span> <span m="1427080">would</span> <span
  m="1427190">also</span> <span m="1427400">work.</span></p><p><span
  m="1427570">Okay,</span> <span m="1427960">this is</span> <span
  m="1428030">a</span> <span m="1428090">harder</span> <span
  m="1428390">one.</span> <span m="1430101">Uh,</span> <span
  m="1430590">nope.</span> <span m="1432250">Good</span> <span
  m="1432400">thing</span> <span m="1432550">there's</span> <span
  m="1432650">students</span> <span m="1433010">everywhere</span> <span
  m="1433380">to</span> <span m="1433450">catch</span> <span
  m="1433850">it.</span> <span m="1436380">Cool.</span></p><p><span
  m="1437090">So</span> <span m="1437580">I'm</span> <span
  m="1437780">going</span> <span m="1437900">to</span> <span
  m="1437950">guess</span> <span m="1438240">the</span> <span
  m="1438360">last</span> <span m="1438720">edge.</span> <span
  m="1439700">That's just how</span> <span m="1439970">I've</span> <span
  m="1440220">written</span> <span m="1440450">the notes.</span> <span
  m="1440860">But first</span> <span m="1441120">edge</span> <span
  m="1441330">would</span> <span m="1441800">also</span> <span
  m="1442130">work</span> <span m="1442320">fine.</span> <span
  m="1447230">So</span> <span m="1447710">I'll</span> <span
  m="1447900">call</span> <span m="1448140">the</span> <span
  m="1448210">last</span> <span m="1448510">edge</span> <span
  m="1448940">x</span> <span m="1449300">comma</span> <span
  m="1449680">v.</span> <span m="1451380">We</span> <span
  m="1451530">know</span> <span m="1451710">we</span> <span
  m="1451910">end</span> <span m="1452250">by</span> <span
  m="1452390">going</span> <span m="1452790">into</span> <span
  m="1452900">v.</span> <span m="1453600">So</span> <span
  m="1453700">let's</span> <span m="1453940">guess</span> <span
  m="1454240">the</span> <span m="1454370">vertex</span> <span
  m="1454960">previous</span> <span m="1455540">to</span> <span
  m="1455780">it</span> <span m="1456020">in</span> <span m="1456220">the</span>
  <span m="1456310">shortest</span> <span m="1456820">path.</span> <span
  m="1458280">Now</span> <span m="1458400">of</span> <span
  m="1458470">course,</span> <span m="1458660">we</span> <span
  m="1458790">don't</span> <span m="1458930">know</span> <span
  m="1459040">what</span> <span m="1459150">that</span> <span
  m="1459320">edge</span> <span m="1459510">is.</span> <span m="1459980">The
  guessing</span> <span m="1460310">just</span> <span m="1460490">means</span>
  <span m="1460670">try</span> <span m="1460870">them</span> <span
  m="1460950">all</span> <span m="1461330">as</span> <span
  m="1461580">you</span> <span m="1461680">saw</span> <span
  m="1461860">last</span> <span m="1462130">time.</span></p><p><span
  m="1464140">So</span> <span m="1464740">now,</span> <span
  m="1465540">it's</span> <span m="1465830">really</span> <span
  m="1466060">easy</span> <span m="1466300">to</span> <span
  m="1466390">write</span> <span m="1466560">the</span> <span
  m="1466630">recurrence--</span> <span m="1467720">see if</span> <span
  m="1467840">I</span> <span m="1467920">can</span> <span m="1468050">do</span>
  <span m="1468340">it without</span> <span m="1468500">looking</span> <span
  m="1468720">at</span> <span m="1468780">my</span> <span
  m="1468880">notes.</span> <span m="1469210">So</span> <span
  m="1469360">we've</span> <span m="1469490">got</span> <span
  m="1470390">duv</span> <span m="1472410">of</span> <span m="1472765">m.</span>
  <span m="1474700">We</span> <span m="1474870">want</span> <span
  m="1475080">to</span> <span m="1475180">write--</span> <span
  m="1475850">we</span> <span m="1475960">want</span> <span
  m="1476120">to</span> <span m="1476170">find</span> <span
  m="1476350">the</span> <span m="1476400">shortest</span> <span
  m="1476830">path,</span> <span m="1477120">so</span> <span
  m="1477230">it's</span> <span m="1477320">probably</span> <span
  m="1477580">going</span> <span m="1477710">to</span> <span
  m="1477770">be</span> <span m="1477930">a</span> <span m="1477980">min</span>
  <span m="1478270">on</span> <span m="1478380">the</span> <span
  m="1478490">outside.</span> <span m="1479700">And</span> <span
  m="1479980">we're</span> <span m="1480120">going</span> <span
  m="1480320">to</span> <span m="1480430">consider</span> <span
  m="1480910">the</span> <span m="1481020">paths</span> <span
  m="1481480">of</span> <span m="1481600">the</span> <span
  m="1481680">form--</span> <span m="1483740">d</span> <span
  m="1484760">go</span> <span m="1484920">from</span> <span m="1485100">u</span>
  <span m="1485370">to</span> <span m="1485500">x</span> <span
  m="1486600">using</span> <span m="1487020">fewer</span> <span
  m="1487460">edges.</span> <span m="1489405">Right,</span> <span
  m="1489850">if</span> <span m="1490280">this</span> <span
  m="1490470">is</span> <span m="1490560">the</span> <span
  m="1490640">last</span> <span m="1490930">edge,</span> <span
  m="1491210">then</span> <span m="1491250">we</span> <span
  m="1491370">use</span> <span m="1491660">m</span> <span
  m="1491800">minus</span> <span m="1492050">1</span> <span
  m="1492240">edges</span> <span m="1492540">to</span> <span
  m="1492620">get</span> <span m="1492860">to</span> <span m="1493170">x.</span>
  <span m="1494010">And</span> <span m="1494190">then,</span> <span
  m="1494390">we</span> <span m="1494530">follow</span> <span
  m="1494880">the</span> <span m="1495060">edge</span> <span
  m="1495390">x</span> <span m="1495650">comma</span> <span
  m="1495910">v.</span></p><p><span m="1496990">So</span> <span
  m="1497520">I'll</span> <span m="1497640">just</span> <span
  m="1497830">add</span> <span m="1498040">on</span> <span
  m="1498220">the</span> <span m="1498320">weight</span> <span m="1499240">of
  the</span> <span m="1499380">edge,</span> <span m="1499740">x</span> <span
  m="1499980">comma</span> <span m="1500270">v.</span> <span
  m="1501990">If</span> <span m="1502690">x</span> <span m="1502930">was</span>
  <span m="1503060">the</span> <span m="1503140">right</span> <span
  m="1503300">answer,</span> <span m="1504090">this</span> <span
  m="1504280">would</span> <span m="1504440">be</span> <span
  m="1504860">the</span> <span m="1505100">cost</span> <span
  m="1505620">to</span> <span m="1505710">get</span> <span
  m="1506020">from</span> <span m="1506250">u</span> <span m="1506490">to</span>
  <span m="1506630">v</span> <span m="1506900">via</span> <span
  m="1507120">x,</span> <span m="1508280">where</span> <span
  m="1508450">xv</span> <span m="1509140">is</span> <span m="1509720">a</span>
  <span m="1509790">single</span> <span m="1510110">edge</span> <span
  m="1510480">at</span> <span m="1510620">the</span> <span
  m="1510700">very</span> <span m="1510920">end.</span> <span
  m="1511760">We</span> <span m="1511850">don't</span> <span
  m="1511990">know</span> <span m="1512130">what</span> <span
  m="1512230">x</span> <span m="1512530">should</span> <span
  m="1512690">be,</span> <span m="1513010">so</span> <span
  m="1513270">we're</span> <span m="1513380">just</span> <span
  m="1513520">going</span> <span m="1513630">to</span> <span
  m="1513670">do</span> <span m="1513960">for</span> <span
  m="1514060">loop</span> <span m="1514300">over</span> <span
  m="1514510">x</span> <span m="1515230">for</span> <span m="1515710">x</span>
  <span m="1516270">in</span> <span m="1516550">v.</span> <span
  m="1517640">So</span> <span m="1517830">this</span> <span
  m="1518020">is</span> <span m="1518130">using</span> <span
  m="1518430">Python</span> <span m="1518800">notation.</span> <span
  m="1521020">And</span> <span m="1521450">that</span> <span
  m="1521610">will</span> <span m="1521700">find</span> <span
  m="1522060">the</span> <span m="1522120">best</span> <span
  m="1522360">answer.</span></p><p><span m="1523210">Done,</span> <span
  m="1523550">easy.</span> <span m="1524190">Once</span> <span
  m="1524460">you</span> <span m="1524560">know</span> <span m="1524710">what
  the</span> <span m="1524900">subproblems</span> <span m="1525000">are,</span>
  <span m="1525470">once</span> <span m="1525710">you</span> <span
  m="1525800">know</span> <span m="1525950">what the</span> <span
  m="1526080">guessing</span> <span m="1526430">is,</span> <span
  m="1527540">basically,</span> <span m="1527860">I'm</span> <span
  m="1527930">just</span> <span m="1528100">adding</span> <span
  m="1528350">in</span> <span m="1528440">a</span> <span m="1528470">min</span>
  <span m="1529350">and</span> <span m="1529500">a</span> <span
  m="1529550">for</span> <span m="1529780">loop</span> <span
  m="1529980">to</span> <span m="1530080">do</span> <span m="1530180">the</span>
  <span m="1530280">guessing.</span></p><p><span m="1531220">So</span> <span
  m="1531900">that's</span> <span m="1532090">my</span> <span
  m="1532180">recurrence,</span> <span m="1532630">except</span> <span
  m="1533070">I</span> <span m="1533170">should</span> <span
  m="1533400">also</span> <span m="1533650">have</span> <span
  m="1533860">a</span> <span m="1533910">base</span> <span
  m="1534150">case.</span> <span m="1535070">Here</span> <span
  m="1535240">it's</span> <span m="1535390">especially</span> <span
  m="1535850">important.</span> <span m="1537120">So</span> <span
  m="1538490">base</span> <span m="1538730">case</span> <span
  m="1538960">is</span> <span m="1539060">going</span> <span
  m="1539220">to</span> <span m="1539310">be</span> <span
  m="1539580">when</span> <span m="1539770">m</span> <span m="1539960">is</span>
  <span m="1540160">the</span> <span m="1540250">smallest.</span> <span
  m="1540690">So</span> <span m="1540840">that,</span> <span
  m="1541140">let's</span> <span m="1541390">say,</span> <span
  m="1541620">is</span> <span m="1541935">0.</span> <span m="1543540">What
  is</span> <span m="1543650">the</span> <span m="1543780">weight</span> <span
  m="1544390">of</span> <span m="1544690">getting</span> <span
  m="1544960">somewhere</span> <span m="1545300">using</span> <span
  m="1545660">0</span> <span m="1546100">edges?</span> <span
  m="1547200">Well,</span> <span m="1549020">typically</span> <span
  m="1549500">it's</span> <span m="1549630">going</span> <span
  m="1549760">to</span> <span m="1549840">be</span> <span
  m="1550030">infinity.</span></p><p><span m="1551230">But</span> <span
  m="1551600">there</span> <span m="1551790">is</span> <span
  m="1551890">an</span> <span m="1551990">interesting</span> <span
  m="1552540">situation,</span> <span m="1554350">where</span> <span
  m="1554770">at</span> <span m="1555125">0</span> <span
  m="1555480">namely</span> <span m="1555930">when</span> <span
  m="1556910">u</span> <span m="1557620">equals</span> <span
  m="1558150">v.</span> <span m="1559100">Hey,</span> <span
  m="1559260">there</span> <span m="1559410">is</span> <span
  m="1559510">a</span> <span m="1559580">way</span> <span m="1559700">to</span>
  <span m="1559770">get</span> <span m="1559980">from</span> <span m="1560200">u
  to</span> <span m="1560630">itself</span> <span m="1561500">with</span> <span
  m="1561650">0</span> <span m="1561850">edges.</span> <span
  m="1562350">And</span> <span m="1562440">that</span> <span
  m="1562590">costs</span> <span m="1562810">0.</span> <span
  m="1564510">But</span> <span m="1564710">anywhere</span> <span
  m="1565040">else</span> <span m="1565390">is</span> <span
  m="1565580">going</span> <span m="1565800">to</span> <span
  m="1565910">cost</span> <span m="1567080">infinity.</span> <span
  m="1567720">There's</span> <span m="1567970">no</span> <span
  m="1568210">path.</span> <span m="1569780">So</span> <span
  m="1569950">the</span> <span m="1570100">sort</span> <span
  m="1570300">of</span> <span m="1570380">a</span> <span
  m="1570440">definition,</span> <span m="1572750">I</span> <span
  m="1572830">should</span> <span m="1573020">say.</span> <span
  m="1573230">If</span> <span m="1573380">it</span> <span
  m="1573460">exists,</span> <span m="1573910">otherwise</span> <span
  m="1574380">it's</span> <span m="1574530">infinity.</span> <span
  m="1575420">So then</span> <span m="1575700">I</span> <span
  m="1575870">get</span> <span m="1576050">those</span> <span
  m="1576240">infinities.</span></p><p><span m="1577730">But</span> <span
  m="1578180">this</span> <span m="1578330">is</span> <span
  m="1578430">kind</span> <span m="1578610">of</span> <span
  m="1578710">important,</span> <span m="1579130">because</span> <span
  m="1579490">maybe</span> <span m="1580490">I</span> <span
  m="1580570">actually</span> <span m="1581610">use</span> <span
  m="1581870">fewer</span> <span m="1582330">than</span> <span
  m="1582520">m</span> <span m="1582750">edges.</span> <span
  m="1584420">I</span> <span m="1584530">wrote</span> <span m="1584790">less
  than</span> <span m="1585050">equal</span> <span m="1585300">to</span> <span
  m="1585380">m</span> <span m="1585640">here.</span> <span
  m="1586480">This</span> <span m="1586720">is</span> <span
  m="1586770">also</span> <span m="1587070">less</span> <span
  m="1587280">than</span> <span m="1587480">equal</span> <span
  m="1587510">to</span> <span m="1587670">m</span> <span
  m="1588750">minus</span> <span m="1589050">1</span> <span
  m="1589330">edges</span> <span m="1589730">here.</span> <span
  m="1590350">But</span> <span m="1590750">in</span> <span
  m="1590920">some</span> <span m="1591110">sense,</span> <span
  m="1591340">I'm</span> <span m="1591830">including</span> <span
  m="1592370">the</span> <span m="1592450">case</span> <span
  m="1592810">here,</span> <span m="1593370">where</span> <span
  m="1594310">x</span> <span m="1594570">equals</span> <span
  m="1594980">v.</span> <span m="1595300">So</span> <span m="1595440">I</span>
  <span m="1595530">just</span> <span m="1595750">stay</span> <span
  m="1596070">at</span> <span m="1596190">v</span> <span m="1596490">at</span>
  <span m="1596610">the</span> <span m="1596690">very end.</span> <span
  m="1597860">So</span> <span m="1598340">it's</span> <span
  m="1598770">because</span> <span m="1599240">I</span> <span
  m="1599270">have</span> <span m="1599380">a</span> <span m="1599410">0</span>
  <span m="1599780">here,</span> <span m="1600130">I'm</span> <span
  m="1600280">implicitly</span> <span m="1600850">including a</span> <span
  m="1601260">situation</span> <span m="1601840">where</span> <span
  m="1602440">actually,</span> <span m="1603720">I</span> <span
  m="1603910">just</span> <span m="1604210">use</span> <span
  m="1604550">duv</span> <span m="1605680">m</span> <span
  m="1606060">minus</span> <span m="1606510">1.</span> <span
  m="1607250">That's</span> <span m="1607610">in</span> <span
  m="1607800">that</span> <span m="1607980">min</span> <span
  m="1608290">here.</span> <span m="1609560">So</span> <span
  m="1609880">it's</span> <span m="1610060">important</span> <span
  m="1610360">to</span> <span m="1610400">get</span> <span
  m="1610540">the</span> <span m="1610620">base</span> <span
  m="1610840">case</span> <span m="1611070">right.</span> <span
  m="1613280">Cool.</span> <span m="1614170">Almost</span> <span
  m="1614520">done.</span></p><p><span m="1614920">I</span> <span
  m="1615080">need</span> <span m="1615370">an</span> <span
  m="1615480">acyclic</span> <span m="1615910">ordering.</span> <span
  m="1616660">So</span> <span m="1618500">as</span> <span m="1618670">I</span>
  <span m="1618730">said,</span> <span m="1619100">things</span> <span
  m="1619360">get</span> <span m="1619850">smaller</span> <span
  m="1620260">when</span> <span m="1620410">m</span> <span m="1620600">is</span>
  <span m="1620690">smaller.</span> <span m="1621240">So</span> <span
  m="1622110">all</span> <span m="1622520">that</span> <span
  m="1622670">means</span> <span m="1623180">is</span> <span
  m="1623480">do</span> <span m="1623630">the</span> <span
  m="1623740">for</span> <span m="1623980">loop</span> <span
  m="1625390">for</span> <span m="1625730">m</span> <span m="1626490">on</span>
  <span m="1626650">the</span> <span m="1626780">outside.</span> <span
  m="1627950">Then</span> <span m="1628260">do</span> <span
  m="1629210">the</span> <span m="1629300">for</span> <span
  m="1629540">loop</span> <span m="1629820">for</span> <span
  m="1631400">u</span> <span m="1631680">in</span> <span m="1631790">v.</span>
  <span m="1634050">For</span> <span m="1634190">those,</span> <span
  m="1634410">it</span> <span m="1634490">doesn't</span> <span
  m="1634720">matter</span> <span m="1634970">what</span> <span
  m="1635110">order</span> <span m="1635300">you</span> <span
  m="1635440">do</span> <span m="1635610">it,</span> <span m="1636510">as</span>
  <span m="1636700">long</span> <span m="1636920">as</span> <span
  m="1637630">you've</span> <span m="1637690">done</span> <span
  m="1637900">all</span> <span m="1638250">of</span> <span m="1638370">m</span>
  <span m="1638520">equals</span> <span m="1638780">0,</span> <span
  m="1639100">before</span> <span m="1639470">you</span> <span
  m="1639560">do</span> <span m="1639720">all</span> <span m="1639960">of</span>
  <span m="1640020">m</span> <span m="1640200">equals</span> <span
  m="1640440">1,</span> <span m="1640700">before</span> <span
  m="1641020">you</span> <span m="1641080">do</span> <span
  m="1641240">all</span> <span m="1641410">of</span> <span m="1641480">m</span>
  <span m="1641650">equals</span> <span m="1641920">2.</span> <span
  m="1642700">So</span> <span m="1642920">that's</span> <span
  m="1643220">the</span> <span m="1643320">nested</span> <span
  m="1643620">for</span> <span m="1643800">loops</span> <span
  m="1644010">that</span> <span m="1644090">gives</span> <span
  m="1644240">you</span> <span m="1644360">the</span> <span
  m="1644470">right</span> <span m="1644660">order.</span></p><p><span
  m="1645510">And</span> <span m="1645690">so,</span> <span m="1648160">I</span>
  <span m="1648270">guess</span> <span m="1648460">I</span> <span
  m="1648500">take</span> <span m="1648790">this</span> <span
  m="1649030">line</span> <span m="1649770">and</span> <span
  m="1649930">put</span> <span m="1650110">it</span> <span m="1650190">on</span>
  <span m="1650320">the</span> <span m="1650410">top.</span> <span
  m="1650950">And</span> <span m="1651290">I</span> <span
  m="1651390">take</span> <span m="1651710">this</span> <span
  m="1652070">line,</span> <span m="1652730">the</span> <span
  m="1652900">induction</span> <span m="1654300">of</span> <span
  m="1654400">the</span> <span m="1654500">currents,</span> <span
  m="1654790">put</span> <span m="1654950">it</span> <span
  m="1655050">inside</span> <span m="1655440">the</span> <span
  m="1655510">for</span> <span m="1655720">loops,</span> <span
  m="1656510">that</span> <span m="1656740">is</span> <span
  m="1656910">my</span> <span m="1657070">bottom-up</span> <span
  m="1657550">dp.</span> <span m="1658722">OK,</span> <span
  m="1659110">I'm</span> <span m="1659240">actually</span> <span
  m="1659500">going</span> <span m="1659640">to</span> <span
  m="1659720">write</span> <span m="1659910">it</span> <span
  m="1660020">down</span> <span m="1660250">explicitly</span> <span
  m="1661610">here</span> <span m="1663350">for</span> <span
  m="1663560">kicks.</span> <span m="1667250">Should I</span> <span
  m="1667360">bother?</span> <span m="1669184">Uh,</span> <span m="1669672">what
  the</span> <span m="1670160">hell.</span></p><p><span m="1676030">So</span>
  <span m="1676610">first</span> <span m="1676830">we</span> <span
  m="1676910">do</span> <span m="1677570">a</span> <span m="1677670">for</span>
  <span m="1677770">loop</span> <span m="1678110">on</span> <span
  m="1678540">m.</span> <span m="1688890">Then,</span> <span
  m="1689090">we're</span> <span m="1689210">going</span> <span
  m="1689310">to</span> <span m="1689370">do</span> <span m="1689490">the</span>
  <span m="1689570">for</span> <span m="1689760">loops</span> <span
  m="1690020">on</span> <span m="1690160">u</span> <span m="1690340">in</span>
  <span m="1690510">V.</span> <span m="1694680">Now,</span> <span
  m="1695280">inside</span> <span m="1695490">the</span> <span
  m="1695560">for</span> <span m="1695790">loop,</span> <span
  m="1698660">I</span> <span m="1698780">want</span> <span m="1699010">to</span>
  <span m="1699080">compute</span> <span m="1699430">this</span> <span
  m="1699590">min.</span> <span m="1699870">I</span> <span
  m="1699950">could</span> <span m="1700170">use</span> <span
  m="1700390">this</span> <span m="1700490">single</span> <span
  m="1700870">line,</span> <span m="1701570">but</span> <span
  m="1701730">I'm</span> <span m="1701850">going</span> <span
  m="1701960">to</span> <span m="1702070">rewrite</span> <span
  m="1702440">it</span> <span m="1702560">slightly</span> <span
  m="1705000">to</span> <span m="1705220">connect</span> <span
  m="1705600">this</span> <span m="1705840">back</span> <span
  m="1706100">to</span> <span m="1706190">shortest</span> <span
  m="1706500">paths.</span> <span m="1731670">Because</span> <span
  m="1732280">this</span> <span m="1732710">type</span> <span
  m="1733030">of</span> <span m="1733590">statement</span> <span
  m="1734200">should</span> <span m="1734520">look</span> <span
  m="1734730">familiar</span> <span m="1735930">from</span> <span
  m="1736620">Dijkstra</span> <span m="1737090">and</span> <span
  m="1737370">Bellman-Ford.</span></p><p><span m="1738770">This</span> <span
  m="1739050">is</span> <span m="1739170">called</span> <span
  m="1739580">the</span> <span m="1739690">relaxation</span> <span
  m="1740380">step.</span> <span m="1748660">OK.</span> <span m="1748900">It
  probably would</span> <span m="1749310">look</span> <span
  m="1749480">more</span> <span m="1749670">familiar</span> <span
  m="1749990">if</span> <span m="1750110">I</span> <span
  m="1750170">wrote</span> <span m="1750380">here</span> <span
  m="1750590">w</span> <span m="1751110">of</span> <span m="1751190">x</span>
  <span m="1751410">v.</span> <span m="1751730">You</span> <span
  m="1752000">could</span> <span m="1752250">also</span> <span
  m="1752550">write</span> <span m="1752780">wxv.</span> <span
  m="1753130">That's</span> <span m="1753840">an</span> <span
  m="1753950">alternative</span> <span m="1761390">for</span> <span
  m="1762130">both</span> <span m="1762470">of</span> <span
  m="1762600">these--</span> <span m="1763030">probably</span> <span
  m="1763310">should</span> <span m="1763460">write</span> <span
  m="1764280">the</span> <span m="1764360">same</span> <span
  m="1764700">way.</span></p><p><span m="1765020">But</span> <span
  m="1765730">in</span> <span m="1766070">either</span> <span
  m="1766340">case,</span> <span m="1766800">we</span> <span
  m="1766840">call</span> <span m="1767040">this</span> <span
  m="1767210">a</span> <span m="1767290">relaxation</span> <span
  m="1767990">step,</span> <span m="1768400">because--</span> <span
  m="1771310">it's</span> <span m="1771880">kind</span> <span
  m="1772040">of</span> <span m="1772100">a</span> <span
  m="1772150">technical</span> <span m="1772520">reason</span> <span
  m="1772820">but--</span> <span m="1773670">what</span> <span
  m="1773910">we'd</span> <span m="1774050">like</span> <span
  m="1774290">to</span> <span m="1774390">satisfy--</span> <span
  m="1774840">we</span> <span m="1774990">know</span> <span
  m="1775170">that</span> <span m="1775330">shortest</span> <span
  m="1775680">paths</span> <span m="1775980">should</span> <span
  m="1776280">satisfy</span> <span m="1776840">the</span> <span
  m="1777000">triangle</span> <span m="1777590">inequality.</span> <span
  m="1778800">If</span> <span m="1778970">you</span> <span
  m="1779100">look,</span> <span m="1779500">there's</span> <span
  m="1779610">three</span> <span m="1779800">vertices</span> <span
  m="1780280">involved</span> <span m="1780700">here,</span> <span
  m="1781220">u,</span> <span m="1782650">v,</span> <span m="1783880">and</span>
  <span m="1784060">x.</span> <span m="1785590">We're</span> <span
  m="1785730">looking</span> <span m="1785990">at</span> <span
  m="1786060">the</span> <span m="1786130">shortest</span> <span
  m="1786490">path</span> <span m="1786720">from u</span> <span m="1787100">to
  v</span> <span m="1787750">compared</span> <span m="1788220">to</span> <span
  m="1788330">the</span> <span m="1788410">shortest</span> <span
  m="1788740">path</span> <span m="1788960">for</span> <span
  m="1789050">u</span> <span m="1789190">to</span> <span m="1789280">x,</span>
  <span m="1790100">and</span> <span m="1790250">the shortest</span> <span
  m="1790610">path</span> <span m="1790910">from</span> <span
  m="1791100">x</span> <span m="1791340">to</span> <span m="1791440">v.</span>
  <span m="1792140">Certainly,</span> <span m="1792590">the</span> <span
  m="1792700">shortest</span> <span m="1793150">way</span> <span
  m="1793290">to</span> <span m="1793350">get</span> <span
  m="1793570">from</span> <span m="1793720">u</span> <span m="1793880">to</span>
  <span m="1793960">v</span> <span m="1794640">should</span> <span
  m="1794810">be</span> <span m="1794950">less</span> <span
  m="1795290">than</span> <span m="1795430">or</span> <span
  m="1795570">equal</span> <span m="1795840">to</span> <span
  m="1796170">the</span> <span m="1796220">shortest</span> <span
  m="1796590">path</span> <span m="1796870">of</span> <span m="1796940">u</span>
  <span m="1797110">to</span> <span m="1797210">x</span> <span
  m="1797540">plus</span> <span m="1798040">x</span> <span m="1798330">to</span>
  <span m="1798430">v,</span> <span m="1799190">because</span> <span
  m="1799450">one</span> <span m="1799680">way</span> <span
  m="1799820">to</span> <span m="1799880">get</span> <span
  m="1800090">from</span> <span m="1800230">u</span> <span m="1800360">to</span>
  <span m="1800440">v</span> <span m="1800660">is</span> <span
  m="1800770">to</span> <span m="1800860">go</span> <span m="1801060">via</span>
  <span m="1801410">x.</span></p><p><span m="1803050">So</span> <span
  m="1803460">this</span> <span m="1803810">if</span> <span
  m="1804050">condition</span> <span m="1806250">would</span> <span
  m="1806440">be</span> <span m="1806610">a</span> <span
  m="1806710">violation</span> <span m="1807470">of</span> <span
  m="1807550">the</span> <span m="1807630">triangle</span> <span
  m="1808020">inequality.</span> <span m="1808470">It means</span> <span
  m="1808640">we</span> <span m="1808740">definitely</span> <span
  m="1809080">do</span> <span m="1809220">not</span> <span
  m="1809490">have</span> <span m="1809740">the</span> <span
  m="1809850">right</span> <span m="1810050">distance</span> <span
  m="1810400">estimates</span> <span m="1810840">if</span> <span
  m="1810970">duv</span> <span m="1811490">is</span> <span
  m="1811610">greater</span> <span m="1812110">than</span> <span
  m="1812400">ux</span> <span m="1812930">plus</span> <span
  m="1813260">xv.</span> <span m="1814670">OK.</span> <span
  m="1814840">So</span> <span m="1815030">if</span> <span
  m="1815200">it's</span> <span m="1815360">greater,</span> <span
  m="1816160">we're</span> <span m="1816280">going</span> <span
  m="1816370">to</span> <span m="1816440">set</span> <span m="1816640">it</span>
  <span m="1816720">equal.</span> <span m="1817130">Because</span> <span
  m="1817480">here,</span> <span m="1817710">we</span> <span
  m="1817870">know</span> <span m="1818230">a</span> <span
  m="1818390">way</span> <span m="1818790">to</span> <span
  m="1818950">get</span> <span m="1819280">from</span> <span
  m="1819970">u</span> <span m="1820150">to</span> <span m="1820230">v</span>
  <span m="1820800">via</span> <span m="1821040">x.</span> <span
  m="1821690">We</span> <span m="1821810">know</span> <span
  m="1822030">that</span> <span m="1822150">it's</span> <span
  m="1822260">possible</span> <span m="1822710">to</span> <span
  m="1822810">do</span> <span m="1822940">this,</span> <span
  m="1823160">assuming</span> <span m="1823580">our</span> <span
  m="1823880">d</span> <span m="1824120">values</span> <span
  m="1824510">are</span> <span m="1824610">always</span> <span
  m="1825680">upper</span> <span m="1825960">bounds</span> <span
  m="1826300">on</span> <span m="1826430">reality.</span> <span
  m="1827880">Then,</span> <span m="1828090">this</span> <span
  m="1828320">will</span> <span m="1828400">be</span> <span
  m="1828570">an</span> <span m="1828640">upper</span> <span
  m="1828890">bound</span> <span m="1829220">on</span> <span
  m="1829560">the</span> <span m="1829780">best</span> <span
  m="1830090">way</span> <span m="1830220">to</span> <span
  m="1830300">get</span> <span m="1830470">from</span> <span
  m="1830610">u</span> <span m="1830760">to</span> <span
  m="1830820">v.</span></p><p><span m="1832080">So</span> <span
  m="1832310">this</span> <span m="1832480">is</span> <span
  m="1832590">clearly</span> <span m="1832920">a</span> <span
  m="1832960">valid</span> <span m="1833330">thing</span> <span
  m="1833480">to</span> <span m="1833540">do.</span> <span
  m="1833700">Relaxations</span> <span m="1834310">are</span> <span
  m="1834430">never</span> <span m="1834790">bad.</span> <span
  m="1835890">If</span> <span m="1835940">you</span> <span
  m="1836030">start</span> <span m="1836490">high,</span> <span
  m="1837570">these</span> <span m="1837870">will</span> <span
  m="1838690">always</span> <span m="1838950">improve</span> <span
  m="1839370">your</span> <span m="1839470">shortest</span> <span
  m="1839800">paths,</span> <span m="1840890">so</span> <span
  m="1841030">you</span> <span m="1841080">get</span> <span
  m="1841250">better</span> <span m="1841500">estimates.</span> <span
  m="1842140">And</span> <span m="1842280">that's</span> <span
  m="1842490">exactly</span> <span m="1842920">what</span> <span
  m="1843040">Dijkstra</span> <span m="1843295">and</span> <span
  m="1843550">Bellman-Ford</span> <span m="1844140">did,</span> <span
  m="1844900">maybe</span> <span m="1845250">with</span> <span
  m="1845520">w</span> <span m="1845870">instead</span> <span
  m="1846140">of</span> <span m="1846240">d,</span> <span m="1846500">but</span>
  <span m="1847020">they're</span> <span m="1847200">all</span> <span
  m="1847450">about</span> <span m="1847810">fixing</span> <span
  m="1848270">the</span> <span m="1848360">triangle</span> <span
  m="1848810">inequality.</span></p><p><span m="1849950">And</span> <span
  m="1850050">in</span> <span m="1850120">general</span> <span
  m="1850520">and</span> <span m="1850620">optimization,</span> <span
  m="1851440">there's</span> <span m="1851550">this</span> <span
  m="1851810">notion</span> <span m="1852140">of,</span> <span
  m="1852340">if</span> <span m="1852690">you</span> <span
  m="1852770">have</span> <span m="1852990">a</span> <span
  m="1853060">constraint,</span> <span m="1853560">an</span> <span
  m="1853650">inequality</span> <span m="1854150">constraint</span> <span
  m="1854530">like</span> <span m="1854710">the</span> <span
  m="1854800">triangle</span> <span m="1855170">inequality,</span> <span
  m="1856360">and</span> <span m="1856470">it's</span> <span
  m="1856590">violated,</span> <span m="1857340">then</span> <span
  m="1857480">you</span> <span m="1857580">try</span> <span
  m="1857780">to</span> <span m="1857870">fix</span> <span m="1858200">it</span>
  <span m="1858370">by</span> <span m="1858790">the</span> <span
  m="1858850">successive</span> <span m="1859380">relaxations.</span> <span
  m="1860030">So</span> <span m="1860220">that's</span> <span
  m="1860420">where</span> <span m="1860550">the</span> <span
  m="1860660">term</span> <span m="1860860">comes</span> <span
  m="1861100">from--</span> <span m="1861860">doesn't</span> <span
  m="1862130">really</span> <span m="1862350">matter</span> <span
  m="1862630">here,</span> <span m="1862940">but</span> <span
  m="1863850">all</span> <span m="1864120">of</span> <span
  m="1864200">our</span> <span m="1864470">shortest</span> <span
  m="1864780">path</span> <span m="1865020">algorithms</span> <span
  m="1865410">are</span> <span m="1865490">going</span> <span
  m="1865650">to</span> <span m="1865750">do</span> <span
  m="1865860">relaxations.</span> <span m="1866840">All</span> <span
  m="1868230">the</span> <span m="1868370">shortest path</span> <span
  m="1868750">algorithms</span> <span m="1868820">I know</span> <span
  m="1869530">do</span> <span m="1870340">relaxations.</span></p><p><span
  m="1871980">So</span> <span m="1872950">this</span> <span
  m="1873160">is</span> <span m="1873310">familiar,</span> <span
  m="1874320">but</span> <span m="1874450">it's</span> <span
  m="1874580">also</span> <span m="1875070">doing</span> <span
  m="1875330">the</span> <span m="1875410">same</span> <span
  m="1875740">thing</span> <span m="1876030">here.</span> <span
  m="1876400">I</span> <span m="1876500">just</span> <span
  m="1876590">expanded</span> <span m="1877070">out</span> <span
  m="1877250">the</span> <span m="1877330">min</span> <span
  m="1878010">as</span> <span m="1878240">a</span> <span m="1878290">for</span>
  <span m="1878570">loop</span> <span m="1878800">over</span> <span
  m="1879110">x,</span> <span m="1879800">each</span> <span
  m="1880020">time</span> <span m="1880240">checking</span> <span
  m="1880580">whether</span> <span m="1880810">each</span> <span
  m="1881010">successive</span> <span m="1881530">entry</span> <span
  m="1881930">is</span> <span m="1882050">better</span> <span
  m="1882370">than</span> <span m="1882970">what</span> <span
  m="1883150">I</span> <span m="1883200">had</span> <span
  m="1883450">already.</span> <span m="1885070">And</span> <span
  m="1885430">if</span> <span m="1885670">it</span> <span m="1885770">is,</span>
  <span m="1885990">I</span> <span m="1886130">update.</span> <span
  m="1886580">So</span> <span m="1886900">in</span> <span m="1887060">the end,
  this</span> <span m="1887200">will</span> <span m="1887330">compute</span>
  <span m="1887680">a</span> <span m="1887730">min,</span> <span
  m="1888780">more</span> <span m="1889130">or</span> <span
  m="1889170">less.</span></p><p><span m="1889960">I</span> <span
  m="1890070">cheated</span> <span m="1890610">also</span> <span
  m="1891040">because</span> <span m="1891430">I</span> <span
  m="1891530">omitted</span> <span m="1891920">the</span> <span
  m="1892100">superscripts</span> <span m="1892780">here.</span> <span
  m="1893470">If</span> <span m="1893640">I</span> <span m="1893710">put</span>
  <span m="1893960">m</span> <span m="1894210">here,</span> <span
  m="1894920">and</span> <span m="1895120">m</span> <span
  m="1895270">minus</span> <span m="1895590">1,</span> <span
  m="1895830">here</span> <span m="1896520">and</span> <span
  m="1896760">1</span> <span m="1897250">here,</span> <span
  m="1897610">it</span> <span m="1897970">would</span> <span
  m="1898120">be</span> <span m="1898230">exactly</span> <span
  m="1898750">the</span> <span m="1898870">same</span> <span
  m="1899110">algorithm.</span> <span m="1899940">I'm</span> <span
  m="1900140">omitting</span> <span m="1900550">all</span> <span
  m="1900720">the</span> <span m="1900800">superscripts,</span> <span
  m="1901480">because</span> <span m="1904550">it</span> <span
  m="1904730">can</span> <span m="1904890">only</span> <span
  m="1905140">help</span> <span m="1905420">me.</span> <span
  m="1906450">Relaxing</span> <span m="1906950">more</span> <span
  m="1907850">can</span> <span m="1908020">only</span> <span
  m="1908740">get</span> <span m="1909030">better.</span> <span
  m="1909460">And</span> <span m="1909760">if</span> <span m="1909890">I</span>
  <span m="1909970">was</span> <span m="1910130">guaranteed</span> <span
  m="1910590">correct</span> <span m="1910970">over</span> <span
  m="1911150">there,</span> <span m="1911800">I'll</span> <span
  m="1911930">still</span> <span m="1912140">be</span> <span
  m="1912250">guaranteed</span> <span m="1912640">correct</span> <span
  m="1912940">over</span> <span m="1913120">here.</span></p><p><span
  m="1913350">You</span> <span m="1913450">have</span> <span
  m="1913570">to</span> <span m="1913640">improve</span> <span
  m="1914080">the</span> <span m="1914190">invariant,</span> <span
  m="1914630">but</span> <span m="1914760">you</span> <span
  m="1914860">never--</span> <span m="1916130">relaxation</span> <span
  m="1916680">is</span> <span m="1916780">always</span> <span
  m="1916940">safe.</span> <span m="1917190">If</span> <span
  m="1917490">you</span> <span m="1917590">start</span> <span
  m="1917830">with</span> <span m="1917980">upper</span> <span
  m="1918180">bounds,</span> <span m="1918550">you</span> <span
  m="1918690">always</span> <span m="1918860">remain</span> <span
  m="1919190">upper</span> <span m="1919420">bounds.</span> <span
  m="1920170">You're</span> <span m="1920310">doing</span> <span
  m="1920560">at</span> <span m="1920640">least</span> <span
  m="1921060">the</span> <span m="1921160">relaxations</span> <span
  m="1921800">over</span> <span m="1921980">there.</span> <span
  m="1922410">And</span> <span m="1922800">so</span> <span
  m="1922840">you</span> <span m="1923010">will</span> <span
  m="1923220">in</span> <span m="1923290">the</span> <span
  m="1923400">end</span> <span m="1923660">compute</span> <span
  m="1923990">the</span> <span m="1924090">correct</span> <span
  m="1924470">shortest</span> <span m="1924770">path</span> <span
  m="1925000">weights.</span> <span m="1925730">The</span> <span
  m="1925800">advantage</span> <span m="1926140">of</span> <span
  m="1926190">that,</span> <span m="1926460">mainly,</span> <span
  m="1927100">is</span> <span m="1927220">I</span> <span m="1927280">save</span>
  <span m="1927530">space.</span> <span m="1928260">And</span> <span
  m="1928430">also,</span> <span m="1928650">it's</span> <span
  m="1928810">simpler.</span></p><p><span m="1930210">So</span> <span
  m="1930370">now</span> <span m="1930530">I</span> <span
  m="1930620">only</span> <span m="1930830">need</span> <span
  m="1931020">quadratic</span> <span m="1931530">space.</span> <span
  m="1931870">If</span> <span m="1932000">I</span> <span m="1932070">had</span>
  <span m="1932270">a</span> <span m="1932320">superscript,</span> <span
  m="1932870">I'd</span> <span m="1932930">need</span> <span
  m="1933130">cubic</span> <span m="1933460">space.</span> <span
  m="1934920">Right?</span> <span m="1935120">So</span> <span
  m="1935200">I</span> <span m="1935320">did</span> <span m="1935470">a</span>
  <span m="1935520">little</span> <span m="1936210">simplification</span> <span
  m="1937020">going</span> <span m="1937280">from</span> <span
  m="1937480">the</span> <span m="1938330">five</span> <span
  m="1938600">step</span> <span m="1938840">process</span> <span
  m="1939270">to</span> <span m="1939350">here--</span> <span
  m="1939880">both</span> <span m="1940080">of</span> <span
  m="1940160">the</span> <span m="1940260">polynomial</span> <span
  m="1940800">time</span> <span m="1941040">and</span> <span
  m="1941120">space,</span> <span m="1941500">but</span> <span
  m="1941700">this</span> <span m="1941860">is</span> <span m="1941970">a</span>
  <span m="1942010">little</span> <span m="1942240">bit,</span> <span
  m="1942510">a</span> <span m="1942900">little</span> <span
  m="1943090">bit</span> <span m="1943260">better.</span></p><p><span
  m="1943490">But</span> <span m="1943620">how</span> <span
  m="1945190">slow</span> <span m="1945500">is</span> <span
  m="1945660">this</span> <span m="1945810">algorithm?</span> <span
  m="1946170">How</span> <span m="1946300">long</span> <span m="1946590">does
  it</span> <span m="1946690">take?</span> <span m="1948435">Yeah?</span> <span
  m="1949770">V</span> <span m="1949950">cubed,</span> <span m="1950670">that
  would</span> <span m="1950910">be</span> <span m="1951030">great.</span> <span
  m="1953490">V</span> <span m="1953640">to</span> <span m="1953710">the</span>
  <span m="1953820">fourth,</span> <span m="1954420">yeah,</span> <span
  m="1954740">good.</span> <span m="1957980">Sadly,</span> <span
  m="1958460">we're</span> <span m="1959050">not</span> <span
  m="1959730">doing</span> <span m="1960010">so</span> <span
  m="1960230">great</span> <span m="1960510">yet--</span> <span
  m="1965020">still</span> <span m="1965330">V</span> <span
  m="1965510">to</span> <span m="1965570">the</span> <span
  m="1965690">fourth.</span> <span m="1966130">V</span> <span
  m="1966280">to</span> <span m="1966340">the</span> <span
  m="1966480">fourth,</span> <span m="1968870">I</span> <span
  m="1968980">guess</span> <span m="1969250">I</span> <span
  m="1969390">already</span> <span m="1969830">knew</span> <span
  m="1969950">how</span> <span m="1970100">to</span> <span
  m="1970220">do.</span> <span m="1970410">That</span> <span
  m="1970640">was</span> <span m="1970930">if</span> <span m="1971070">I</span>
  <span m="1971140">just</span> <span m="1971360">run</span> <span
  m="1971540">Bellman-Ford</span> <span m="1972300">V</span> <span
  m="1972490">times,</span> <span m="1973370">I already knew</span> <span
  m="1973630">how</span> <span m="1973780">to</span> <span m="1973880">do</span>
  <span m="1974010">V</span> <span m="1974270">to</span> <span
  m="1974350">the</span> <span m="1974440">fourth.</span></p><p><span
  m="1974740">So</span> <span m="1975650">I</span> <span
  m="1975760">haven't</span> <span m="1976030">actually</span> <span
  m="1976310">improved</span> <span m="1976750">anything.</span> <span
  m="1977170">But</span> <span m="1977320">at</span> <span
  m="1977390">least</span> <span m="1977790">you</span> <span
  m="1977880">see,</span> <span m="1978150">it's</span> <span
  m="1978760">all</span> <span m="1978970">dynamic</span> <span
  m="1979330">programming</span> <span m="1979950">in</span> <span
  m="1980110">there.</span> <span m="1980720">So n</span> <span
  m="1980950">here</span> <span m="1981320">is</span> <span
  m="1982070">the</span> <span m="1982150">size</span> <span
  m="1982470">of</span> <span m="1982580">V.</span> <span
  m="1982800">That's</span> <span m="1983050">probably</span> <span
  m="1983380">the</span> <span m="1984180">first</span> <span
  m="1984650">time.</span> <span m="1987840">Cool.</span> <span
  m="1988190">I</span> <span m="1988330">omitted</span> <span
  m="1988690">0,</span> <span m="1989130">because</span> <span
  m="1989450">there</span> <span m="1989630">was</span> <span
  m="1989760">the</span> <span m="1989840">base</span> <span
  m="1990100">case.</span> <span m="1990340">That's</span> <span
  m="1990580">done</span> <span m="1990810">separately</span> <span
  m="1991310">in</span> <span m="1991390">the</span> <span
  m="1991480">line</span> <span m="1991720">that</span> <span
  m="1991830">I</span> <span m="1991890">didn't</span> <span
  m="1992140">write.</span> <span m="1995450">So</span> <span
  m="1995870">that</span> <span m="1996080">was</span> <span
  m="1996310">dp</span> <span m="1996780">one.</span></p><p><span
  m="2000630">Time</span> <span m="2000910">for</span> <span
  m="2001200">dp</span> <span m="2001880">two,</span> <span m="2003570">unless
  there are</span> <span m="2003910">questions?</span> <span
  m="2004810">Everyone</span> <span m="2004990">clear</span> <span
  m="2005360">so far?</span> <span m="2006030">Yeah?</span></p><p><span
  m="2008952">STUDENT: When you iterate</span> <span m="2009440">over x,</span>
  <span m="2010020">why do you</span> <span m="2010150">do</span> <span
  m="2010310">you</span> <span m="2010685">every</span> <span
  m="2011470">[INAUDIBLE]</span></p><p><span m="2012700">PROFESSOR: As</span>
  <span m="2012920">opposed</span> <span m="2013350">to--?</span></p><p><span
  m="2014103">STUDENT: Like,</span> <span m="2014576">just adjacent</span> <span
  m="2015049">vertices</span> <span m="2015522">[INAUDIBLE]</span></p><p><span
  m="2016930">PROFESSOR: Oh, yeah.</span> <span m="2017190">OK.</span> <span
  m="2017560">Good,</span> <span m="2019040">fair</span> <span
  m="2019130">question--</span> <span m="2019860">why</span> <span
  m="2020070">do I</span> <span m="2020170">iterate</span> <span
  m="2020620">over</span> <span m="2020900">all</span> <span
  m="2021410">vertices,</span> <span m="2022020">not</span> <span
  m="2022280">just</span> <span m="2023070">the</span> <span
  m="2023410">incoming?</span> <span m="2025170">If</span> <span
  m="2025410">I'm</span> <span m="2025520">writing</span> <span
  m="2025790">w</span> <span m="2026090">of</span> <span m="2026160">xv,</span>
  <span m="2026660">I</span> <span m="2026730">could</span> <span
  m="2026890">afford</span> <span m="2027200">to</span> <span
  m="2027290">just</span> <span m="2027500">say,</span> <span
  m="2028380">just</span> <span m="2028740">consider</span> <span
  m="2029130">the</span> <span m="2029320">incoming</span> <span
  m="2030390">vertices.</span> <span m="2031480">And</span> <span
  m="2031680">that</span> <span m="2031840">would</span> <span
  m="2031960">let</span> <span m="2032120">me</span> <span
  m="2032240">improve</span> <span m="2032710">probably</span> <span
  m="2033280">from</span> <span m="2033510">V</span> <span m="2033680">to</span>
  <span m="2033750">the</span> <span m="2033860">fourth</span> <span
  m="2034340">to</span> <span m="2035060">V</span> <span
  m="2035320">cubed</span> <span m="2036040">times--</span> <span
  m="2037250">V</span> <span m="2037390">squared</span> <span
  m="2037760">times</span> <span m="2038090">E,</span> <span
  m="2039190">I</span> <span m="2039220">think,</span> <span
  m="2040190">if</span> <span m="2040350">you</span> <span m="2040560">do</span>
  <span m="2040800">the</span> <span m="2040960">arithmetic</span> <span
  m="2041410">right.</span> <span m="2042450">You</span> <span
  m="2042630">could</span> <span m="2042780">do</span> <span
  m="2042890">that.</span> <span m="2043520">It</span> <span
  m="2043670">would</span> <span m="2043800">be</span> <span
  m="2043920">better.</span></p><p><span m="2044940">For</span> <span
  m="2045070">dense</span> <span m="2045340">graphs,</span> <span
  m="2045590">it's</span> <span m="2045710">not</span> <span
  m="2045860">going</span> <span m="2045960">to</span> <span
  m="2046010">matter.</span> <span m="2046470">For</span> <span
  m="2046710">sparse</span> <span m="2047000">graphs</span> <span
  m="2047270">it</span> <span m="2047360">will</span> <span
  m="2048260">improve</span> <span m="2049429">V</span> <span
  m="2049550">squared</span> <span m="2049960">to E,</span> <span
  m="2050320">basically.</span> <span m="2051429">But</span> <span
  m="2051590">we're</span> <span m="2051719">going</span> <span
  m="2051810">to</span> <span m="2051860">do</span> <span
  m="2051949">even</span> <span m="2052139">better,</span> <span
  m="2052610">so</span> <span m="2052730">I'm</span> <span
  m="2052840">not</span> <span m="2052980">going</span> <span
  m="2053090">to</span> <span m="2053170">try</span> <span m="2053330">to</span>
  <span m="2053400">optimize</span> <span m="2053860">now.</span> <span
  m="2054060">But,</span> <span m="2054440">good</span> <span
  m="2054580">question.</span></p><p><span m="2056150">When</span> <span
  m="2056340">I</span> <span m="2056460">say</span> <span
  m="2056699">this</span> <span m="2057060">at</span> <span
  m="2057210">the</span> <span m="2057290">moment,</span> <span
  m="2058530">if</span> <span m="2058710">there</span> <span
  m="2058870">is</span> <span m="2059100">no</span> <span
  m="2059260">edge</span> <span m="2059540">from</span> <span
  m="2059690">x</span> <span m="2059900">to</span> <span m="2059989">v,</span>
  <span m="2061139">I'm</span> <span m="2061290">imagining</span> <span
  m="2061760">that</span> <span m="2062199">w of</span> <span
  m="2062639">xv</span> <span m="2063100">equals</span> <span
  m="2063440">infinity.</span> <span m="2064290">So</span> <span
  m="2066090">that</span> <span m="2066260">will</span> <span
  m="2066350">never</span> <span m="2066620">be</span> <span
  m="2066739">the</span> <span m="2066840">minimum</span> <span
  m="2067199">choice</span> <span m="2067850">to</span> <span
  m="2067969">use</span> <span m="2068170">a</span> <span
  m="2068230">non-edge.</span> <span m="2069190">I</span> <span
  m="2069290">should</span> <span m="2069530">say</span> <span
  m="2069699">that.</span> <span m="2070010">If</span> <span
  m="2070429">there's</span> <span m="2070610">no</span> <span
  m="2070770">edge</span> <span m="2070989">here,</span> <span
  m="2071550">I</span> <span m="2071610">define</span> <span
  m="2071929">the</span> <span m="2072010">weight</span> <span
  m="2072130">to</span> <span m="2072260">be</span> <span
  m="2072380">infinity.</span> <span m="2073139">That</span> <span
  m="2073290">will</span> <span m="2073409">just</span> <span
  m="2073600">make</span> <span m="2073889">algorithms</span> <span
  m="2074310">cleaner</span> <span m="2074600">to</span> <span
  m="2074969">write.</span> <span m="2075560">But</span> <span
  m="2075690">you</span> <span m="2075790">could</span> <span
  m="2075949">optimize</span> <span m="2076360">it</span> <span
  m="2076449">the</span> <span m="2076540">way</span> <span
  m="2076659">you</span> <span m="2076739">said.</span></p><p><span
  m="2078139">So,</span> <span m="2078880">where</span> <span
  m="2079199">were</span> <span m="2079560">you?</span> <span
  m="2080706">Yeah.</span> <span m="2083071">Ah,</span> <span
  m="2083550">perfect.</span> <span m="2084310">OK.</span> <span
  m="2085270">Other</span> <span m="2085389">questions?</span> <span
  m="2087230">More</span> <span m="2087360">Frisbee</span> <span
  m="2087699">practice?</span> <span m="2088190">No?</span> <span
  m="2088480">OK.</span></p><p><span m="2089630">So</span> <span
  m="2089790">that was</span> <span m="2090000">dp</span> <span
  m="2090300">one.</span> <span m="2091310">Let</span> <span
  m="2091650">me</span> <span m="2092100">do</span> <span m="2093310">dp</span>
  <span m="2093710">two.</span> <span m="2098440">Not</span> <span
  m="2098620">yet,</span> <span m="2099060">sorry--</span> <span
  m="2100550">diversion.</span> <span m="2106450">Diversion</span> <span
  m="2106990">is</span> <span m="2107190">matrix</span> <span
  m="2107580">multiplication.</span> <span m="2108270">Before</span> <span
  m="2108590">I</span> <span m="2108620">get</span> <span m="2108800">to
  dp</span> <span m="2108900">two,</span> <span m="2109590">I</span> <span
  m="2109720">want</span> <span m="2109900">to</span> <span
  m="2109960">talk</span> <span m="2110180">about</span> <span
  m="2110380">matrix</span> <span m="2110720">multiplication.</span> <span
  m="2119680">This</span> <span m="2119860">is</span> <span m="2119980">a</span>
  <span m="2120210">cool</span> <span m="2120430">connection.</span> <span
  m="2120990">It</span> <span m="2121070">won't</span> <span
  m="2121320">help</span> <span m="2121560">us</span> <span
  m="2121730">directly</span> <span m="2122270">for</span> <span
  m="2122400">shortest</span> <span m="2122730">paths,</span> <span
  m="2124030">but</span> <span m="2126970">still</span> <span
  m="2127190">pretty</span> <span m="2127390">good.</span> <span m="2131080">And
  it</span> <span m="2131360">will help-- it will</span> <span
  m="2131620">solve</span> <span m="2131840">another</span> <span
  m="2132130">problem</span> <span m="2132640">especially</span> <span
  m="2133120">fast.</span></p><p><span m="2141260">So</span> <span
  m="2141680">shortest</span> <span m="2141860">paths</span> <span
  m="2142120">is</span> <span m="2142240">also</span> <span
  m="2142650">closely</span> <span m="2143110">linked</span> <span
  m="2143370">to</span> <span m="2143520">matrix</span> <span
  m="2143910">multiplication,</span> <span m="2144580">a</span> <span
  m="2144650">problem</span> <span m="2145000">we've</span> <span
  m="2145140">seen</span> <span m="2145390">a</span> <span
  m="2145470">couple</span> <span m="2145750">of</span> <span
  m="2145860">times,</span> <span m="2146310">first</span> <span
  m="2146640">in</span> <span m="2146730">the</span> <span
  m="2146820">FFT</span> <span m="2147310">lecture,</span> <span
  m="2148110">and</span> <span m="2148320">then</span> <span
  m="2148560">in</span> <span m="2148760">the</span> <span
  m="2149480">randomization</span> <span m="2150240">lecture</span> <span
  m="2150600">for</span> <span m="2150750">checking</span> <span
  m="2151170">matrix</span> <span m="2151650">multiplies.</span> <span
  m="2153090">So</span> <span m="2153380">you</span> <span
  m="2153520">remember,</span> <span m="2153700">you're</span> <span
  m="2153830">given</span> <span m="2154660">two</span> <span
  m="2154930">matrices,</span> <span m="2155260">A</span> <span
  m="2155590">and</span> <span m="2155950">B.</span> <span
  m="2156750">And</span> <span m="2156910">you</span> <span
  m="2157030">want</span> <span m="2157210">to</span> <span
  m="2157300">compute</span> <span m="2158260">C</span> <span
  m="2158590">equals</span> <span m="2159150">A</span> <span
  m="2159330">times</span> <span m="2159700">B.</span> <span
  m="2161290">You've</span> <span m="2161500">seen</span> <span
  m="2161810">Strassen's</span> <span m="2162290">algorithm</span> <span
  m="2162780">to</span> <span m="2162900">do</span> <span
  m="2163040">this.</span></p><p><span m="2164030">There's</span> <span
  m="2164420">also</span> <span m="2164680">these--</span> <span
  m="2166250">here</span> <span m="2166510">A</span> <span m="2166760">and B
  are</span> <span m="2167000">squared.</span> <span m="2167590">OK.</span>
  <span m="2167800">So</span> <span m="2167990">the</span> <span
  m="2168190">n</span> <span m="2168340">by</span> <span m="2168500">n,</span>
  <span m="2169510">product</span> <span m="2169900">will</span> <span
  m="2170030">be</span> <span m="2170230">n</span> <span m="2170360">by</span>
  <span m="2170520">n.</span> <span m="2171610">So</span> <span
  m="2171820">standard</span> <span m="2172180">approach</span> <span
  m="2172520">for</span> <span m="2172610">this</span> <span
  m="2173440">is</span> <span m="2173830">n</span> <span
  m="2174450">cubed.</span> <span m="2175560">With</span> <span
  m="2175690">Strassen,</span> <span m="2177346">if I can</span> <span
  m="2177830">remember,</span> <span m="2178850">you</span> <span
  m="2179030">can</span> <span m="2179200">get</span> <span m="2179480">n</span>
  <span m="2179800">to the</span> <span m="2180020">2.807.</span> <span
  m="2182740">And</span> <span m="2183310">if</span> <span
  m="2183430">you</span> <span m="2183590">use</span> <span
  m="2183860">CopperSmith</span> <span m="2184410">Winograd,</span> <span
  m="2185120">you</span> <span m="2185290">get</span> <span
  m="2185620">2.376.</span> <span m="2188220">And</span> <span
  m="2188360">then,</span> <span m="2188520">if</span> <span
  m="2188620">you</span> <span m="2188720">use</span> <span
  m="2188880">the</span> <span m="2188990">new</span> <span
  m="2189700">Vassilevska-William's</span> <span m="2190720">algorithm,</span>
  <span m="2191360">you</span> <span m="2191520">get</span> <span m="2192030">n
  to</span> <span m="2192300">the</span> <span m="2192440">2.3728</span> <span
  m="2197024">and</span> <span m="2197498">so on.</span></p><p><span
  m="2198920">And</span> <span m="2199160">that's</span> <span
  m="2199350">the</span> <span m="2199440">best</span> <span
  m="2199690">algorithm</span> <span m="2200010">we</span> <span
  m="2200120">know</span> <span m="2200280">now.</span> <span
  m="2200660">There's</span> <span m="2200820">some</span> <span
  m="2201060">evidence</span> <span m="2201460">maybe</span> <span
  m="2201680">you</span> <span m="2201790">can</span> <span
  m="2201880">get</span> <span m="2202050">2</span> <span
  m="2202170">plus</span> <span m="2202400">epsilon</span> <span
  m="2202920">for</span> <span m="2203040">any</span> <span
  m="2203190">epsilon.</span> <span m="2204030">Turns</span> <span
  m="2204280">out,</span> <span m="2204440">those</span> <span
  m="2204620">are</span> <span m="2204730">going</span> <span
  m="2204840">to</span> <span m="2204890">help</span> <span
  m="2205160">us</span> <span m="2205310">too</span> <span
  m="2205440">much</span> <span m="2205700">here.</span></p><p><span
  m="2206960">But</span> <span m="2207190">what</span> <span
  m="2207340">I</span> <span m="2207410">want</span> <span m="2207640">to</span>
  <span m="2207720">show</span> <span m="2208020">is</span> <span
  m="2208230">that</span> <span m="2208370">matrix</span> <span
  m="2208740">multiplication</span> <span m="2209770">is</span> <span
  m="2209980">essentially</span> <span m="2210900">doing</span> <span
  m="2211230">this,</span> <span m="2212380">if</span> <span
  m="2212600">you</span> <span m="2212800">redefine</span> <span
  m="2213380">what</span> <span m="2213580">plus</span> <span
  m="2213940">and</span> <span m="2214100">dot</span> <span
  m="2214380">mean.</span> <span m="2216030">We</span> <span
  m="2216150">redefine</span> <span m="2216850">addition</span> <span
  m="2217230">and</span> <span m="2217300">multiplication--</span> <span
  m="2218340">talk</span> <span m="2218550">about</span> <span
  m="2218740">whether</span> <span m="2218950">that's</span> <span
  m="2219210">valid</span> <span m="2219590">in</span> <span
  m="2219670">the</span> <span m="2219720">moment--</span> <span
  m="2221740">so</span> <span m="2221970">remember</span> <span
  m="2222410">what</span> <span m="2222600">is</span> <span
  m="2222740">matrix</span> <span m="2223050">multiplication?</span> <span
  m="2224040">Cij</span> <span m="2225320">is</span> <span m="2226240">a</span>
  <span m="2226330">dot</span> <span m="2226550">product</span> <span
  m="2226870">of</span> <span m="2226980">a</span> <span m="2227080">row</span>
  <span m="2227360">and</span> <span m="2227440">a</span> <span
  m="2227520">column.</span> <span m="2228060">So</span> <span
  m="2228220">that's</span> <span m="2228600">aik</span> <span
  m="2230390">with</span> <span m="2231000">bkIj.</span> <span
  m="2233950">K</span> <span m="2234160">equals</span> <span
  m="2234420">1</span> <span m="2234630">to n.</span> <span
  m="2237120">OK.</span> <span m="2237300">Now</span> <span
  m="2237460">that</span> <span m="2237860">sum</span> <span
  m="2239410">looks</span> <span m="2239700">a</span> <span
  m="2239790">lot</span> <span m="2240340">like</span> <span
  m="2241480">that</span> <span m="2241810">min.</span> <span
  m="2242080">Actually,</span> <span m="2242400">more</span> <span
  m="2242720">like</span> <span m="2243030">the</span> <span
  m="2243130">way</span> <span m="2243320">I</span> <span
  m="2243380">wrote</span> <span m="2243630">it</span> <span
  m="2243730">over</span> <span m="2243990">here,</span> <span
  m="2245130">with</span> <span m="2245460">the d's</span> <span
  m="2245550">instead</span> <span m="2246210">of</span> <span
  m="2246290">the</span> <span m="2246370">w's.</span> <span
  m="2248400">This--</span> <span m="2249690">right--</span> <span
  m="2249880">x</span> <span m="2250340">is</span> <span m="2250560">the</span>
  <span m="2250650">thing</span> <span m="2250870">that's</span> <span
  m="2251040">varying</span> <span m="2251530">here.</span> <span
  m="2252210">So</span> <span m="2252370">this</span> <span
  m="2252590">is</span> <span m="2252740">like,</span> <span
  m="2254500">aik</span> <span m="2256000">plus</span> <span
  m="2257240">bkj,</span> <span m="2258940">except,</span> <span
  m="2259450">I</span> <span m="2259540">have</span> <span
  m="2259710">plus</span> <span m="2260060">here,</span> <span
  m="2260330">whereas</span> <span m="2260660">I</span> <span
  m="2260750">have</span> <span m="2261090">times</span> <span
  m="2261500">over</span> <span m="2261690">here.</span> <span
  m="2262370">And</span> <span m="2262550">I</span> <span
  m="2262590">have</span> <span m="2262820">a</span> <span
  m="2262890">min</span> <span m="2263270">out</span> <span
  m="2263450">here,</span> <span m="2264460">but</span> <span
  m="2264650">I</span> <span m="2264720">have</span> <span m="2264900">a</span>
  <span m="2264950">sum</span> <span m="2265320">over</span> <span
  m="2265520">here.</span></p><p><span m="2266310">So</span> <span
  m="2267120">it</span> <span m="2267830">sounds</span> <span
  m="2268080">crazy,</span> <span m="2268440">but</span> <span
  m="2268670">let's</span> <span m="2268930">define--</span> <span
  m="2271030">be</span> <span m="2271220">very</span> <span
  m="2271490">confusing</span> <span m="2271910">if</span> <span
  m="2272030">I</span> <span m="2272100">said</span> <span
  m="2272340">define</span> <span m="2272900">dot</span> <span
  m="2273220">equals</span> <span m="2273610">plus,</span> <span
  m="2274655">so</span> <span m="2274960">I'm</span> <span
  m="2275180">going</span> <span m="2275430">to</span> <span
  m="2276080">define</span> <span m="2276420">a</span> <span
  m="2276480">new</span> <span m="2276690">world</span> <span
  m="2277060">called</span> <span m="2277690">circle</span> <span
  m="2278090">world.</span> <span m="2278910">So</span> <span
  m="2279050">if</span> <span m="2279120">I</span> <span m="2279180">put</span>
  <span m="2279330">a</span> <span m="2279380">circle</span> <span
  m="2279730">around</span> <span m="2279970">a</span> <span
  m="2280040">dot,</span> <span m="2280600">what</span> <span
  m="2280780">I</span> <span m="2280840">mean</span> <span m="2281090">is</span>
  <span m="2281420">plus.</span> <span m="2282570">And</span> <span
  m="2283050">if</span> <span m="2283270">I</span> <span m="2283370">put</span>
  <span m="2284310">a</span> <span m="2284430">circle</span> <span
  m="2284840">around</span> <span m="2285150">a</span> <span
  m="2285210">plus,</span> <span m="2286010">what</span> <span
  m="2286210">I</span> <span m="2286280">mean</span> <span m="2286530">is</span>
  <span m="2286780">min.</span> <span m="2288820">OK?</span> <span
  m="2289070">So</span> <span m="2289250">now,</span> <span
  m="2289920">if</span> <span m="2290110">I</span> <span m="2290190">put</span>
  <span m="2290410">a</span> <span m="2290470">circle</span> <span
  m="2291080">around</span> <span m="2291370">this</span> <span
  m="2291660">dot,</span> <span m="2292100">I</span> <span
  m="2292210">mean</span> <span m="2292830">circle</span> <span
  m="2293190">everything.</span> <span m="2293680">So I've</span> <span
  m="2293910">got</span> <span m="2293970">to</span> <span
  m="2294040">circle</span> <span m="2294370">the</span> <span
  m="2294460">summation,</span> <span m="2295010">circle</span> <span
  m="2295290">this</span> <span m="2295460">thing.</span> <span
  m="2295660">So</span> <span m="2296270">then</span> <span m="2296460">I</span>
  <span m="2296520">get</span> <span m="2296720">shortest</span> <span
  m="2297060">paths.</span> <span m="2300390">Crazy.</span> <span
  m="2303500">So</span> <span m="2305000">all</span> <span
  m="2305040">right,</span> <span m="2306440">I'm</span> <span m="2306610">going
  to</span> <span m="2306690">define</span> <span m="2307280">d</span> <span
  m="2307520">to</span> <span m="2307670">the</span> <span
  m="2307880">m-th</span> <span m="2308220">power.</span></p><p><span
  m="2319150">I</span> <span m="2319220">should</span> <span
  m="2319420">probably</span> <span m="2319910">circle--</span> <span
  m="2321510">whatever.</span> <span m="2331750">Slightly</span> <span
  m="2332220">different.</span> <span m="2339842">OK,</span> <span
  m="2340320">I</span> <span m="2340370">want</span> <span m="2340510">to</span>
  <span m="2340570">define,</span> <span m="2340890">like,</span> <span
  m="2341120">three</span> <span m="2341370">things</span> <span
  m="2341590">at</span> <span m="2341670">once.</span> <span
  m="2342110">So</span> <span m="2342780">let</span> <span m="2342900">me</span>
  <span m="2343010">write</span> <span m="2343170">them</span> <span
  m="2343250">down,</span> <span m="2344080">and then</span> <span
  m="2344190">talk</span> <span m="2344380">about</span> <span
  m="2344640">them.</span> <span m="2346390">So</span> <span
  m="2346610">many</span> <span m="2346840">infinities.</span> <span
  m="2348368">All</span> <span
  m="2348862">right.</span></p><p>&nbsp;</p><p><span m="2385490">OK.</span>
  <span m="2386260">I</span> <span m="2386440">guess,</span> <span
  m="2389600">I</span> <span m="2389875">should write this</span> <span
  m="2390150">too.</span></p><p><span m="2393340">OK.</span> <span
  m="2393620">If</span> <span m="2393900">I</span> <span
  m="2394260">define</span> <span m="2394670">the vert--</span> <span
  m="2395140">suppose I</span> <span m="2395460">number</span> <span
  m="2395800">the</span> <span m="2395900">vertices</span> <span
  m="2396510">1</span> <span m="2396740">through n,</span> <span
  m="2397220">OK?</span> <span m="2397440">I just</span> <span
  m="2397590">assume</span> <span m="2397890">all</span> <span
  m="2398030">vertices</span> <span m="2398570">are</span> <span
  m="2398980">an</span> <span m="2399130">integer</span> <span
  m="2399430">between</span> <span m="2399700">1</span> <span
  m="2399880">and</span> <span m="2399960">n.</span> <span m="2400670">So</span>
  <span m="2400840">then,</span> <span m="2401220">I</span> <span
  m="2401340">can</span> <span m="2401500">actually</span> <span
  m="2401730">express</span> <span m="2402150">things</span> <span
  m="2402380">in</span> <span m="2402480">a</span> <span
  m="2402520">matrix,</span> <span m="2403210">namely</span> <span
  m="2403550">the</span> <span m="2404470">weight</span> <span
  m="2404770">matrix.</span> <span m="2405620">This</span> <span
  m="2406040">kind</span> <span m="2406200">of</span> <span
  m="2406270">defines</span> <span m="2406680">the</span> <span
  m="2406760">graph,</span> <span m="2407150">especially</span> <span
  m="2407620">if</span> <span m="2407770">I</span> <span m="2407840">say</span>
  <span m="2408100">wij</span> <span m="2408400">is</span> <span
  m="2408840">infinity</span> <span m="2409280">if</span> <span
  m="2409390">there</span> <span m="2409500">is</span> <span
  m="2409710">no</span> <span m="2409880">edge.</span> <span
  m="2411060">Then,</span> <span m="2411450">this</span> <span
  m="2411720">is</span> <span m="2412180">the</span> <span
  m="2412380">matrix</span> <span m="2412860">of</span> <span
  m="2412960">all</span> <span m="2413330">pairwise</span> <span
  m="2414530">edge</span> <span m="2414700">weights.</span> <span
  m="2415430">For</span> <span m="2415550">every</span> <span
  m="2415780">i</span> <span m="2415910">and</span> <span m="2416050">j,</span>
  <span m="2416790">I</span> <span m="2416930">have</span> <span
  m="2417130">a</span> <span m="2417190">weight</span> <span
  m="2417430">of</span> <span m="2417540">ij.</span> <span
  m="2418370">That</span> <span m="2418600">gives</span> <span
  m="2418770">me</span> <span m="2418910">a</span> <span
  m="2418950">matrix,</span> <span m="2419540">once</span> <span
  m="2419700">I</span> <span m="2419790">set</span> <span m="2420080">V</span>
  <span m="2420330">to</span> <span m="2420470">be</span> <span
  m="2421080">1</span> <span m="2421260">through</span> <span
  m="2421420">n.</span></p><p><span m="2422190">Now,</span> <span
  m="2422380">I'm</span> <span m="2422500">also</span> <span
  m="2422820">defining</span> <span m="2423350">this</span> <span
  m="2423570">distance</span> <span m="2424510">estimate</span> <span
  m="2425030">matrix.</span> <span m="2425560">So</span> <span
  m="2426340">remember,</span> <span m="2426580">we</span> <span
  m="2426720">defined</span> <span m="2427400">duvm--</span> <span
  m="2428220">I'm</span> <span m="2428700">going</span> <span
  m="2428830">to</span> <span m="2429030">now</span> <span
  m="2429270">call</span> <span m="2429480">it</span> <span
  m="2429580">dijm,</span> <span m="2430610">because</span> <span
  m="2430970">the</span> <span m="2431040">vertices</span> <span
  m="2431490">are</span> <span m="2431620">integers.</span> <span
  m="2432860">That</span> <span m="2433090">is,</span> <span
  m="2433320">the</span> <span m="2433420">weight</span> <span
  m="2433620">of</span> <span m="2433680">the</span> <span
  m="2433740">shortest</span> <span m="2434070">path</span> <span
  m="2434340">using,</span> <span m="2434640">at</span> <span
  m="2434710">most,</span> <span m="2434970">m</span> <span
  m="2435160">edges.</span> <span m="2436050">If I</span> <span
  m="2436170">define</span> <span m="2436640">it</span> <span
  m="2436720">that</span> <span m="2436940">way,</span> <span
  m="2437200">then</span> <span m="2437380">I</span> <span
  m="2437450">can</span> <span m="2437630">put</span> <span
  m="2437920">it</span> <span m="2438090">into</span> <span m="2438400">a</span>
  <span m="2438460">matrix,</span> <span m="2439640">which is</span> <span
  m="2439810">for</span> <span m="2439960">all</span> <span
  m="2440610">pairs</span> <span m="2440880">of</span> <span
  m="2440930">vertices</span> <span m="2441330">ij.</span> <span
  m="2442020">What</span> <span m="2442270">is</span> <span
  m="2442500">the</span> <span m="2442590">distance,</span> <span
  m="2443330">shortest</span> <span m="2443620">pathways</span> <span
  m="2444130">that</span> <span m="2444200">uses</span> <span
  m="2444490">it</span> <span m="2444580">at most</span> <span m="2444860">m
  edges?</span> <span m="2445680">That</span> <span m="2445880">gives</span>
  <span m="2446140">me</span> <span m="2446520">a</span> <span
  m="2446620">matrix,</span> <span m="2447190">d</span> <span
  m="2447850">parenthesis</span> <span m="2448530">m.</span></p><p><span
  m="2450820">Then,</span> <span m="2451310">I</span> <span
  m="2451430">claim</span> <span m="2451910">that</span> <span
  m="2453010">if</span> <span m="2453250">I</span> <span m="2453340">take</span>
  <span m="2453710">circle</span> <span m="2454140">product</span> <span
  m="2454610">between</span> <span m="2455080">d</span> <span
  m="2455440">of</span> <span m="2455520">m</span> <span
  m="2455680">minus</span> <span m="2456060">1</span> <span
  m="2456730">and</span> <span m="2456960">w,</span> <span
  m="2458640">that</span> <span m="2458920">is</span> <span
  m="2459120">exactly</span> <span m="2459810">what's</span> <span
  m="2460030">happening</span> <span m="2460510">here,</span> <span
  m="2462480">if</span> <span m="2462630">you</span> <span
  m="2462740">stare</span> <span m="2463050">at</span> <span
  m="2463100">it</span> <span m="2463180">long</span> <span
  m="2463390">enough.</span> <span m="2463640">This</span> <span
  m="2463910">is</span> <span m="2464150">the</span> <span
  m="2464310">inner</span> <span m="2464570">product</span> <span
  m="2465090">between</span> <span m="2465870">row</span> <span
  m="2467110">u</span> <span m="2468610">of</span> <span m="2468840">d</span>
  <span m="2469130">to</span> <span m="2469240">the</span> <span
  m="2469350">m</span> <span m="2469490">minus</span> <span
  m="2469780">1,</span> <span m="2470400">and</span> <span
  m="2470630">column</span> <span m="2471230">v</span> <span
  m="2471760">of</span> <span m="2472060">w.</span> <span m="2473100">And</span>
  <span m="2473320">that's</span> <span m="2473520">exactly</span> <span
  m="2473970">what</span> <span m="2474150">this</span> <span
  m="2474410">circle</span> <span m="2474690">product</span> <span
  m="2475090">will</span> <span m="2475230">compute.</span> <span
  m="2476510">So</span> <span m="2476750">this</span> <span
  m="2477710">is</span> <span m="2478320">dp.</span></p><p><span
  m="2480660">But</span> <span m="2480840">when</span> <span
  m="2480990">you</span> <span m="2481250">look</span> <span
  m="2481520">at</span> <span m="2481600">that</span> <span
  m="2482340">statement,</span> <span m="2483700">that's</span> <span
  m="2483990">saying</span> <span m="2484250">that</span> <span
  m="2484360">d</span> <span m="2484660">to</span> <span m="2484780">the</span>
  <span m="2485210">parentheses</span> <span m="2485790">m</span> <span
  m="2486290">is</span> <span m="2486490">really</span> <span
  m="2487060">w</span> <span m="2487750">to</span> <span m="2488010">the</span>
  <span m="2488140">circle</span> <span m="2488520">power</span> <span
  m="2489250">m,</span> <span m="2489830">right?</span> <span
  m="2490010">This</span> <span m="2490190">is</span> <span m="2490340">a</span>
  <span m="2490420">definition</span> <span m="2491340">in</span> <span
  m="2491440">some</span> <span m="2491630">sense</span> <span
  m="2492910">of</span> <span m="2493480">power,</span> <span
  m="2494010">of</span> <span m="2494170">exponentiation,</span> <span
  m="2495350">using</span> <span m="2495840">circle</span> <span
  m="2496170">product.</span> <span m="2496740">So</span> <span
  m="2496880">when</span> <span m="2497030">I</span> <span
  m="2497090">circle</span> <span m="2497500">the</span> <span
  m="2497650">exponent,</span> <span m="2498160">that</span> <span
  m="2498290">means I'm</span> <span m="2498680">doing</span> <span
  m="2499000">circle</span> <span m="2499480">exponentiation</span> <span
  m="2499955">in</span> <span m="2500430">circle</span> <span
  m="2500770">land,</span> <span m="2502252">OK?</span> <span
  m="2505060">OK</span> <span m="2505290">so</span> <span
  m="2505520">far?</span></p><p><span m="2505850">So</span> <span
  m="2506040">this</span> <span m="2506280">is</span> <span
  m="2508390">circle</span> <span m="2508750">land.</span> <span
  m="2510470">So</span> <span m="2510690">you</span> <span
  m="2510800">might</span> <span m="2511010">say,</span> <span
  m="2511130">well,</span> <span m="2511450">then</span> <span
  m="2511650">I</span> <span m="2511730">should</span> <span
  m="2512440">compute</span> <span m="2512900">these</span> <span
  m="2513090">products</span> <span m="2513980">using</span> <span
  m="2514260">matrix</span> <span m="2514630">multiplication.</span> <span
  m="2515990">Now,</span> <span m="2516370">just</span> <span
  m="2516620">to</span> <span m="2517270">see</span> <span
  m="2517450">how</span> <span m="2518020">good</span> <span
  m="2518210">we're</span> <span m="2518330">doing,</span> <span
  m="2519550">if</span> <span m="2519760">I</span> <span
  m="2520020">execute</span> <span m="2520550">this</span> <span
  m="2520720">operation</span> <span m="2523880">n</span> <span
  m="2524150">times,</span> <span m="2524890">because</span> <span
  m="2525180">I</span> <span m="2525220">have</span> <span m="2525340">to</span>
  <span m="2525430">get</span> <span m="2525590">to</span> <span
  m="2525690">d</span> <span m="2525880">to</span> <span m="2525970">the</span>
  <span m="2526300">n</span> <span m="2526510">minus</span> <span
  m="2526800">1--</span> <span m="2527180">so</span> <span
  m="2527380">it's</span> <span m="2527510">basically</span> <span m="2527850">d
  to</span> <span m="2528070">the</span> <span m="2528220">n.</span> <span
  m="2530050">If</span> <span m="2530200">I</span> <span m="2530270">do</span>
  <span m="2530540">this</span> <span m="2530720">product</span> <span
  m="2531200">n</span> <span m="2531440">times,</span> <span
  m="2532420">and</span> <span m="2532500">for</span> <span
  m="2532640">each</span> <span m="2532840">one</span> <span
  m="2533070">of</span> <span m="2533310">I</span> <span
  m="2533410">spend</span> <span m="2533810">n</span> <span
  m="2534060">cubed</span> <span m="2534380">time,</span> <span
  m="2534720">then</span> <span m="2534920">I</span> <span
  m="2535010">get</span> <span m="2535725">an</span> <span m="2536100">n</span>
  <span m="2536350">to</span> <span m="2536460">the</span> <span
  m="2536560">four</span> <span m="2536900">algorithm.</span> <span
  m="2537650">Same</span> <span m="2538160">algorithm</span> <span
  m="2538660">in</span> <span m="2538730">fact,</span> <span
  m="2539060">exactly</span> <span m="2539580">the</span> <span
  m="2539690">same</span> <span m="2539920">algorithm-- I've</span> <span
  m="2540350">just</span> <span m="2540580">expressed</span> <span
  m="2541070">it</span> <span m="2541150">in</span> <span
  m="2541270">this</span> <span m="2541440">new</span> <span
  m="2541580">language.</span></p><p><span m="2543940">OK,</span> <span
  m="2544350">there</span> <span m="2544500">are</span> <span
  m="2544600">two</span> <span m="2544850">ideas</span> <span
  m="2545580">on</span> <span m="2545780">the</span> <span
  m="2545870">table</span> <span m="2546250">though.</span> <span
  m="2546490">One</span> <span m="2546820">is,</span> <span
  m="2547650">maybe</span> <span m="2547990">I</span> <span
  m="2548050">could</span> <span m="2548210">use</span> <span
  m="2548370">a</span> <span m="2548420">better</span> <span
  m="2548750">matrix</span> <span m="2549100">multiplication</span> <span
  m="2549690">algorithm.</span> <span m="2551050">Let's</span> <span
  m="2551940">shelve</span> <span m="2552250">that</span> <span
  m="2552640">for</span> <span m="2552830">a</span> <span
  m="2552870">moment.</span> <span m="2553830">The</span> <span
  m="2553950">other</span> <span m="2554120">possibility</span> <span
  m="2554740">is,</span> <span m="2554860">well,</span> <span
  m="2554990">maybe</span> <span m="2555290">I</span> <span
  m="2555350">can</span> <span m="2555510">exponentiate</span> <span
  m="2556350">faster</span> <span m="2557380">than</span> <span
  m="2557620">multiplying</span> <span m="2558280">by</span> <span
  m="2558420">myself</span> <span m="2558960">n</span> <span
  m="2559190">times,</span> <span m="2559940">or</span> <span
  m="2560070">multiplying</span> <span m="2560520">by</span> <span
  m="2560650">w</span> <span m="2561010">n</span> <span
  m="2561370">times.</span></p><p><span m="2563070">How</span> <span
  m="2563380">should</span> <span m="2563580">I</span> <span
  m="2563620">do</span> <span m="2563800">it?</span> <span
  m="2565170">Repeated</span> <span m="2565600">squaring,</span> <span
  m="2565860">good.</span> <span m="2566710">You've</span> <span
  m="2566850">seen that</span> <span m="2567090">probably</span> <span
  m="2567530">in</span> <span m="2567730">006.</span> <span
  m="2569540">Repeated</span> <span m="2569940">squaring</span> <span
  m="2570360">idea</span> <span m="2570690">is,</span> <span
  m="2571550">we</span> <span m="2571690">take--</span> <span
  m="2572980">to</span> <span m="2573140">compute</span> <span
  m="2574280">w--</span> <span m="2575830">well,</span> <span
  m="2577180">I</span> <span m="2577290">take</span> <span m="2577520">w</span>
  <span m="2578000">to</span> <span m="2578240">the</span> <span
  m="2578320">0.</span> <span m="2579140">I</span> <span
  m="2579240">multiply</span> <span m="2579545">it</span> <span
  m="2579960">by</span> <span m="2580410">w</span> <span m="2580780">to</span>
  <span m="2580900">the</span> <span m="2580980">0.</span> <span
  m="2582320">Sorry,</span> <span m="2582540">circle</span> <span
  m="2582910">0--</span> <span m="2583610">that's</span> <span
  m="2583880">this</span> <span m="2584080">thing.</span> <span
  m="2586264">Oh,</span> <span m="2586720">that</span> <span
  m="2586800">seems</span> <span m="2587100">weird.</span> <span
  m="2588120">Let's</span> <span m="2588460">start</span> <span
  m="2588700">with</span> <span m="2588800">1.</span> <span m="2590930">1
  seems</span> <span m="2591180">better.</span></p><p><span m="2593860">I'm
  not</span> <span m="2593980">going</span> <span m="2594080">to</span> <span
  m="2594120">get</span> <span m="2594310">much</span> <span m="2594580">if
  I</span> <span m="2594700">multiply</span> <span m="2595160">that</span> <span
  m="2595350">by</span> <span m="2595460">itself.</span> <span
  m="2595870">I</span> <span m="2595910">should</span> <span
  m="2596130">get</span> <span m="2596220">exactly</span> <span
  m="2596620">the</span> <span m="2596710">same</span> <span
  m="2596940">matrix.</span> <span m="2597850">So</span> <span
  m="2597880">I</span> <span m="2597950">take</span> <span
  m="2598110">the</span> <span m="2598190">circle</span> <span
  m="2598510">product</span> <span m="2598880">between</span> <span
  m="2599160">w</span> <span m="2599430">to</span> <span m="2599540">the</span>
  <span m="2599640">1,</span> <span m="2599960">w</span> <span
  m="2600240">to</span> <span m="2600370">the</span> <span m="2600430">1.</span>
  <span m="2601030">That</span> <span m="2601240">gives</span> <span
  m="2601450">me</span> <span m="2602070">w</span> <span m="2602450">to</span>
  <span m="2602560">the</span> <span m="2602670">2.</span> <span
  m="2603770">And</span> <span m="2603980">then,</span> <span
  m="2604110">I</span> <span m="2604210">take</span> <span m="2604580">w</span>
  <span m="2604930">to</span> <span m="2605050">the</span> <span
  m="2605180">2</span> <span m="2606810">times</span> <span m="2607240">w</span>
  <span m="2607600">to</span> <span m="2607740">the</span> <span
  m="2607860">2.</span> <span m="2609360">Everything's</span> <span
  m="2609760">circled.</span> <span m="2610890">I</span> <span
  m="2611060">get</span> <span m="2611360">w</span> <span m="2611790">to</span>
  <span m="2611930">the</span> <span m="2612100">4.</span> <span
  m="2613010">Oh</span> <span m="2613280">cool,</span> <span
  m="2613530">I</span> <span m="2613610">doubled</span> <span
  m="2614110">my</span> <span m="2614250">exponent</span> <span
  m="2615390">with</span> <span m="2615620">one</span> <span
  m="2615990">multiplication.</span> <span m="2617220">If I</span> <span
  m="2617370">take</span> <span m="2617640">w</span> <span m="2617900">to</span>
  <span m="2618010">the</span> <span m="2618120">4</span> <span
  m="2618970">by</span> <span m="2619100">w</span> <span m="2619400">to</span>
  <span m="2619510">the</span> <span m="2619610">4,</span> <span
  m="2620270">I</span> <span m="2620410">get</span> <span m="2620580">w</span>
  <span m="2620900">to</span> <span m="2621030">the</span> <span
  m="2621130">8,</span> <span m="2622190">and</span> <span m="2622360">so</span>
  <span m="2622510">on.</span></p><p><span m="2623030">My</span> <span
  m="2623160">goal</span> <span m="2623400">is</span> <span
  m="2623490">to</span> <span m="2623560">get</span> <span m="2623720">to</span>
  <span m="2623820">n,</span> <span m="2624250">so</span> <span
  m="2624360">I</span> <span m="2624440">have</span> <span m="2624560">to</span>
  <span m="2624660">do</span> <span m="2624760">this</span> <span
  m="2624960">log</span> <span m="2625340">n</span> <span
  m="2625480">times.</span> <span m="2625930">Log</span> <span
  m="2626300">n</span> <span m="2626820">squaring</span> <span
  m="2627480">operations,</span> <span m="2628720">each</span> <span
  m="2628950">squaring</span> <span m="2629400">operation</span> <span
  m="2629870">is</span> <span m="2629970">an</span> <span m="2630070">n</span>
  <span m="2630330">cubed</span> <span m="2631260">thing.</span> <span
  m="2633100">So</span> <span m="2633330">this</span> <span
  m="2633510">is</span> <span m="2633950">repeated</span> <span
  m="2634070">squaring.</span></p><p><span m="2641000">And</span> <span
  m="2641240">I</span> <span m="2641310">get</span> <span m="2643600">V</span>
  <span m="2643900">cubed</span> <span m="2644310">log</span> <span
  m="2644820">V--</span> <span m="2646650">finally,</span> <span
  m="2647130">an</span> <span m="2647200">improvement.</span> <span
  m="2648510">So</span> <span m="2648550">we</span> <span
  m="2648610">went</span> <span m="2648860">from</span> <span
  m="2649760">V</span> <span m="2649920">to</span> <span m="2649980">the</span>
  <span m="2650100">4,</span> <span m="2651270">which</span> <span
  m="2651500">was</span> <span m="2652170">in</span> <span
  m="2652720">the</span> <span m="2652830">dense</span> <span
  m="2653180">case</span> <span m="2654040">the</span> <span
  m="2654140">same</span> <span m="2654690">performance</span> <span
  m="2655220">as</span> <span m="2655340">Bellman-Ford,</span> <span
  m="2656830">running</span> <span m="2657150">it V</span> <span
  m="2657170">times.</span> <span m="2658270">But</span> <span
  m="2658570">now</span> <span m="2658960">in</span> <span
  m="2659140">the</span> <span m="2659230">dense</span> <span
  m="2659520">case,</span> <span m="2659910">I'm</span> <span
  m="2660050">getting</span> <span m="2660310">V</span> <span
  m="2660530">cubed</span> <span m="2660860">log</span> <span
  m="2661140">V,</span> <span m="2661370">which</span> <span
  m="2661590">is</span> <span m="2661700">actually</span> <span
  m="2662050">pretty</span> <span m="2662280">good.</span> <span
  m="2663840">It's</span> <span m="2664080">not</span> <span
  m="2664320">quite</span> <span m="2665220">V</span> <span
  m="2665340">cubed,</span> <span m="2665830">but</span> <span
  m="2666770">close.</span> <span m="2670530">All</span> <span
  m="2670620">right.</span></p><p><span m="2672900">I'm</span> <span
  m="2673060">pointing</span> <span m="2673370">at</span> <span m="2673490">V
  cubed.</span> <span m="2673820">This</span> <span m="2673980">is</span> <span
  m="2674090">actually</span> <span m="2674430">the</span> <span
  m="2674550">one</span> <span m="2674790">result</span> <span m="2675200">that
  is</span> <span m="2675310">not</span> <span m="2675500">optimal.</span> <span
  m="2676060">This</span> <span m="2676110">is</span> <span
  m="2676220">the</span> <span m="2676340">one</span> <span
  m="2676530">we</span> <span m="2676630">want</span> <span
  m="2676820">to</span> <span m="2676860">improve.</span> <span
  m="2678130">But</span> <span m="2678330">we're</span> <span
  m="2678650">kind</span> <span m="2678850">of--</span> <span
  m="2678970">we're</span> <span m="2679170">in</span> <span
  m="2679270">this</span> <span m="2679430">space</span> <span
  m="2679780">right</span> <span m="2679950">now.</span> <span
  m="2680580">We're</span> <span m="2680710">getting</span> <span
  m="2680950">close</span> <span m="2681380">to</span> <span
  m="2681580">as</span> <span m="2681740">good</span> <span
  m="2681900">is</span> <span m="2682020">this</span> <span
  m="2682200">algorithm,</span> <span m="2682485">the</span> <span
  m="2682770">Johnson's</span> <span m="2683210">algorithm.</span> <span
  m="2684456">But</span> <span m="2684850">we</span> <span
  m="2685080">still</span> <span m="2685310">a</span> <span
  m="2685390">log</span> <span m="2685700">V</span> <span
  m="2685880">Factor.</span></p><p><span m="2686640">So</span> <span
  m="2686850">this</span> <span m="2687020">is</span> <span
  m="2687130">great,</span> <span m="2687850">just</span> <span
  m="2688120">by</span> <span m="2688450">translating</span> <span
  m="2689040">into</span> <span m="2689270">matrix</span> <span
  m="2690330">multiplication.</span> <span m="2691000">Now</span> <span
  m="2691280">technically,</span> <span m="2691740">you have</span> <span
  m="2691850">to</span> <span m="2691960">check</span> <span
  m="2692260">that</span> <span m="2692430">repeated</span> <span
  m="2692870">squaring</span> <span m="2693250">actually</span> <span
  m="2693560">gives</span> <span m="2693790">you</span> <span
  m="2693920">the</span> <span m="2694060">same</span> <span
  m="2694270">result.</span> <span m="2695860">Basically,</span> <span
  m="2696390">this</span> <span m="2696580">works</span> <span
  m="2696890">because</span> <span m="2698200">products</span> <span
  m="2698810">are</span> <span m="2698970">associative.</span> <span
  m="2699690">Circle</span> <span m="2700020">products</span> <span
  m="2700490">of</span> <span m="2700590">matrices</span> <span
  m="2701170">are</span> <span m="2701230">associative,</span> <span
  m="2702130">which</span> <span m="2702300">works</span> <span
  m="2702620">because</span> <span m="2703730">circle</span> <span
  m="2704140">land</span> <span m="2704990">is</span> <span m="2705230">a</span>
  <span m="2705480">semi-ring.</span></p><p><span m="2707880">If</span> <span
  m="2708140">you</span> <span m="2708300">want</span> <span
  m="2708520">the</span> <span m="2708640">abstract</span> <span
  m="2709010">algebra,</span> <span m="2712600">a</span> <span
  m="2713020">ring</span> <span m="2713550">is</span> <span
  m="2713630">something</span> <span m="2714300">that</span> <span
  m="2714800">you</span> <span m="2714960">wear on your</span> <span
  m="2715200">a</span> <span m="2715240">finger.</span> <span
  m="2715540">No.</span> <span m="2715710">A</span> <span
  m="2716030">ring</span> <span m="2716440">is</span> <span
  m="2717920">an</span> <span m="2718030">algebra</span> <span
  m="2718295">where</span> <span m="2718560">you define</span> <span
  m="2719020">plus</span> <span m="2719430">and</span> <span
  m="2719620">times,</span> <span m="2720070">and</span> <span
  m="2720150">you</span> <span m="2720200">have</span> <span
  m="2720370">distributivity.</span> <span m="2721700">Semi-ring,</span> <span
  m="2724480">there's</span> <span m="2724710">no</span> <span
  m="2724850">minus,</span> <span m="2726130">because</span> <span
  m="2726590">min</span> <span m="2726890">has</span> <span
  m="2727110">no</span> <span m="2727280">inverse.</span> <span
  m="2728330">There's</span> <span m="2728450">no</span> <span
  m="2728610">way</span> <span m="2728920">from</span> <span
  m="2729130">the</span> <span m="2729200">min</span> <span m="2729490">to
  re-compute</span> <span m="2730140">the</span> <span
  m="2730290">arguments,</span> <span m="2730770">right?</span> <span
  m="2732120">No</span> <span m="2732210">matter</span> <span
  m="2732430">what</span> <span m="2732620">you</span> <span
  m="2733350">apply</span> <span m="2733880">to</span> <span
  m="2734060">it,</span> <span m="2734180">you</span> <span
  m="2734270">can't--</span> <span m="2734620">you've</span> <span
  m="2734770">lost</span> <span m="2735080">information.</span> <span
  m="2736200">So</span> <span m="2736750">that's</span> <span
  m="2736970">the</span> <span m="2737040">semi-ring.</span> <span
  m="2737600">Normally,</span> <span m="2737930">you</span> <span
  m="2738020">have</span> <span m="2738290">a</span> <span
  m="2738350">minus.</span> <span m="2739670">But</span> <span
  m="2739940">semi-ring</span> <span m="2740370">is</span> <span
  m="2740490">enough</span> <span m="2740800">for</span> <span
  m="2741050">the</span> <span m="2741150">repeated</span> <span
  m="2741410">squaring</span> <span m="2741760">to</span> <span
  m="2741830">give</span> <span m="2741980">you</span> <span
  m="2742040">the</span> <span m="2742130">right</span> <span
  m="2742280">answer.</span></p><p><span m="2743370">However,</span> <span
  m="2744430">semi-ring</span> <span m="2745030">is</span> <span
  m="2745160">not</span> <span m="2745540">enough</span> <span
  m="2746480">for</span> <span m="2746680">all</span> <span
  m="2747000">these</span> <span m="2747260">fancy</span> <span
  m="2747650">algorithms.</span> <span m="2749220">So</span> <span
  m="2749320">if</span> <span m="2749410">you</span> <span
  m="2749520">look</span> <span m="2749730">at</span> <span
  m="2750150">Strassen's</span> <span m="2750630">algorithm,</span> <span
  m="2751040">the</span> <span m="2751130">one</span> <span
  m="2751270">you've</span> <span m="2751380">seen,</span> <span
  m="2752070">it</span> <span m="2752180">uses</span> <span
  m="2752550">minus.</span> <span m="2753420">There's</span> <span
  m="2753590">no</span> <span m="2753750">way</span> <span m="2753850">to</span>
  <span m="2753910">get</span> <span m="2754060">around</span> <span
  m="2754370">that,</span> <span m="2754510">as</span> <span
  m="2754610">far</span> <span m="2754760">as</span> <span m="2754840">we</span>
  <span m="2754960">know.</span> <span m="2755750">So</span> <span
  m="2755870">if</span> <span m="2755940">you</span> <span
  m="2756010">have</span> <span m="2756230">no</span> <span
  m="2756380">minus,</span> <span m="2756940">n</span> <span
  m="2757140">cubed</span> <span m="2757530">is</span> <span
  m="2757640">the</span> <span m="2757720">best</span> <span
  m="2757960">we</span> <span m="2758020">know</span> <span
  m="2758110">how</span> <span m="2758240">to</span> <span
  m="2758360">do.</span> <span m="2758910">So</span> <span
  m="2759070">sadly,</span> <span m="2759520">we</span> <span
  m="2759660">cannot</span> <span m="2760350">improve</span> <span
  m="2761000">beyond</span> <span m="2761480">this</span> <span
  m="2761910">with</span> <span m="2762030">this</span> <span
  m="2762350">technique.</span> <span m="2764260">It</span> <span
  m="2764390">sucks,</span> <span m="2764950">but</span> <span
  m="2765380">that's</span> <span m="2765590">life.</span></p><p><span
  m="2767290">However,</span> <span m="2769570">we</span> <span
  m="2769730">can</span> <span m="2769930">do</span> <span
  m="2770030">something.</span> <span m="2781260">If</span> <span
  m="2781450">we</span> <span m="2781590">just</span> <span
  m="2782020">change</span> <span m="2782400">the</span> <span
  m="2782480">problem,</span> <span m="2783130">there</span> <span
  m="2783360">is</span> <span m="2783470">another</span> <span
  m="2783810">problem</span> <span m="2784150">which</span> <span
  m="2784370">this</span> <span m="2784580">is</span> <span
  m="2784740">the</span> <span m="2784860">best</span> <span
  m="2785110">way</span> <span m="2785230">to</span> <span
  m="2785330">do.</span> <span m="2786070">So</span> <span m="2786350">let
  me</span> <span m="2786780">briefly</span> <span m="2787130">tell</span> <span
  m="2787340">you</span> <span m="2787450">about</span> <span
  m="2787690">that</span> <span m="2787850">problem.</span> <span
  m="2788780">It's</span> <span m="2788960">called</span> <span
  m="2790340">transitive</span> <span m="2790780">closure.</span></p><p><span
  m="2804140">Transitive</span> <span m="2804550">closure</span> <span
  m="2804990">is,</span> <span m="2805360">I</span> <span
  m="2805480">just</span> <span m="2805730">want</span> <span
  m="2806300">to</span> <span m="2806490">know</span> <span
  m="2807270">is</span> <span m="2807550">there</span> <span
  m="2807780">a</span> <span m="2807860">path</span> <span
  m="2808350">from</span> <span m="2808570">i</span> <span m="2808710">to</span>
  <span m="2808820">j.</span> <span m="2810000">So</span> <span
  m="2810110">it's</span> <span m="2810220">going</span> <span
  m="2810330">to</span> <span m="2810380">be</span> <span m="2810510">1,</span>
  <span m="2811450">if</span> <span m="2811860">there</span> <span
  m="2812020">exists</span> <span m="2812410">a</span> <span
  m="2812480">path</span> <span m="2814610">from</span> <span
  m="2814840">i</span> <span m="2815080">to</span> <span m="2815180">j.</span>
  <span m="2816270">And</span> <span m="2816480">it's</span> <span
  m="2816590">going</span> <span m="2816690">to</span> <span
  m="2816730">be</span> <span m="2816820">0</span> <span
  m="2817300">otherwise.</span> <span m="2821150">OK.</span> <span
  m="2825880">I</span> <span m="2826000">guess</span> <span
  m="2826250">it's</span> <span m="2826380">kind</span> <span
  m="2826570">of</span> <span m="2826630">like</span> <span m="2826800">if
  you</span> <span m="2826940">set</span> <span m="2827150">all</span> <span
  m="2827240">the</span> <span m="2827330">weights</span> <span
  m="2827720">to</span> <span m="2827870">0</span> <span m="2828700">or</span>
  <span m="2828970">infinity.</span> <span m="2830450">Then,</span> <span
  m="2830670">either</span> <span m="2830780">there's</span> <span
  m="2831050">going</span> <span m="2831160">to</span> <span
  m="2831220">be</span> <span m="2831320">as</span> <span m="2831430">0</span>
  <span m="2831640">way</span> <span m="2831820">path,</span> <span
  m="2832330">or</span> <span m="2832600">there's</span> <span
  m="2832800">no</span> <span m="2832950">path,</span> <span
  m="2833280">meaning</span> <span m="2833500">there's</span> <span
  m="2833670">an</span> <span m="2833760">infinite</span> <span
  m="2834060">way</span> <span m="2834200">path.</span></p><p><span
  m="2835010">So</span> <span m="2835220">it's</span> <span
  m="2835340">not</span> <span m="2835470">quite</span> <span
  m="2835670">the</span> <span m="2835760">same.</span> <span
  m="2836090">Here,</span> <span m="2836350">I want</span> <span
  m="2836540">1</span> <span m="2836920">and</span> <span m="2837040">0.</span>
  <span m="2838290">I</span> <span m="2838400">flipped.</span> <span
  m="2838930">It</span> <span m="2839060">used</span> <span
  m="2839260">to</span> <span m="2839330">be,</span> <span
  m="2839580">this</span> <span m="2839780">was</span> <span
  m="2840340">infinity,</span> <span m="2841330">and</span> <span
  m="2841540">this</span> <span m="2841680">was</span> <span
  m="2841820">0.</span> <span m="2843560">This</span> <span
  m="2843710">is</span> <span m="2843850">one</span> <span
  m="2844390">saying</span> <span m="2844710">there</span> <span
  m="2844880">is</span> <span m="2845020">a</span> <span m="2845070">path</span>
  <span m="2845320">from</span> <span m="2845460">i</span> <span
  m="2845530">and</span> <span m="2845660">j,</span> <span m="2846320">0</span>
  <span m="2846630">otherwise.</span> <span m="2847050">If</span> <span
  m="2847180">I</span> <span m="2847240">write</span> <span
  m="2847480">it</span> <span m="2847620">this</span> <span
  m="2847830">way,</span> <span m="2848980">and</span> <span
  m="2849150">then</span> <span m="2849280">I</span> <span
  m="2849350">think</span> <span m="2849660">about</span> <span
  m="2849980">what</span> <span m="2850180">I</span> <span
  m="2850250">need</span> <span m="2850490">to</span> <span
  m="2850610">do</span> <span m="2850770">here,</span> <span
  m="2852110">it</span> <span m="2852230">is</span> <span
  m="2852350">still</span> <span m="2852600">in</span> <span
  m="2852700">some</span> <span m="2852890">sense</span> <span
  m="2853430">plus</span> <span m="2854120">and</span> <span
  m="2854290">min,</span> <span m="2854740">but</span> <span
  m="2856030">not</span> <span m="2856470">really.</span> <span
  m="2856950">Because</span> <span m="2857260">I</span> <span
  m="2857310">just</span> <span m="2857470">want</span> <span
  m="2857610">to</span> <span m="2857650">know,</span> <span
  m="2857830">is</span> <span m="2858050">there</span> <span
  m="2858210">a</span> <span m="2858270">path?</span> <span
  m="2859820">So</span> <span m="2859870">if</span> <span m="2859960">I</span>
  <span m="2860030">have</span> <span m="2860630">a</span> <span
  m="2860750">way</span> <span m="2860970">to</span> <span
  m="2861050">get</span> <span m="2861290">there</span> <span
  m="2861630">and</span> <span m="2861690">a</span> <span m="2861740">way</span>
  <span m="2861890">to</span> <span m="2861950">get</span> <span
  m="2862150">there,</span> <span m="2862700">instead</span> <span
  m="2863000">of</span> <span m="2863100">adding</span> <span
  m="2863430">up</span> <span m="2863550">those</span> <span
  m="2863730">values,</span> <span m="2864110">really</span> <span
  m="2864460">I'm</span> <span m="2864600">taking</span> <span
  m="2867640">some</span> <span m="2867800">other</span> <span
  m="2868030">operator.</span> <span m="2869230">So</span> <span
  m="2869370">I</span> <span m="2869440">want</span> <span m="2869660">to</span>
  <span m="2869730">know</span> <span m="2871080">OR.</span></p><p><span
  m="2871510">Yeah,</span> <span m="2871710">exactly--</span> <span
  m="2872020">who</span> <span m="2872330">said</span> <span
  m="2872440">OR?</span> <span m="2875360">Yeah,</span> <span m="2876020">all
  right,</span> <span m="2876460">tough</span> <span m="2876530">one.</span>
  <span m="2879820">Close,</span> <span m="2880700">close,</span> <span
  m="2881190">close.</span></p><p><span m="2883360">So</span> <span
  m="2883830">here,</span> <span m="2884150">we</span> <span
  m="2884280">have</span> <span m="2884730">basically</span> <span
  m="2885450">a</span> <span m="2885800">circle</span> <span
  m="2887200">product</span> <span m="2888300">is</span> <span
  m="2888520">OR,</span> <span m="2890120">and</span> <span
  m="2890400">circle</span> <span m="2890680">sum</span> <span
  m="2891560">is</span> <span m="2891910">AND.</span> <span
  m="2894310">OK?</span> <span m="2895000">I</span> <span
  m="2895040">mean</span> <span m="2895200">plus</span> <span
  m="2895830">and</span> <span m="2896870">min</span> <span
  m="2897120">would</span> <span m="2897250">work,</span> <span
  m="2897770">but</span> <span m="2898570">it's</span> <span
  m="2898670">a</span> <span m="2898720">little</span> <span
  m="2898950">bit</span> <span m="2899150">nicer</span> <span
  m="2899620">over</span> <span m="2899760">here.</span> <span
  m="2907000">Sorry, it's</span> <span m="2907420">the</span> <span
  m="2907520">other</span> <span m="2907630">way</span> <span
  m="2907720">around,</span> <span m="2908020">I</span> <span
  m="2908060">think.</span> <span m="2912170">It's</span> <span
  m="2912650">definitely</span> <span m="2912860">Booleans.</span> <span
  m="2914080">We</span> <span m="2914230">want</span> <span m="2914410">to know
  there</span> <span m="2914690">is</span> <span m="2914910">a</span> <span
  m="2915000">way</span> <span m="2915560">to</span> <span
  m="2915760">get</span> <span m="2916230">to</span> <span m="2916700">x,</span>
  <span m="2917170">and</span> <span m="2917300">then</span> <span
  m="2917440">from</span> <span m="2917710">x to</span> <span
  m="2917980">where</span> <span m="2918110">we're</span> <span
  m="2918210">going.</span> <span m="2918530">That's</span> <span m="2918780">an
  AND.</span> <span m="2919700">And then,</span> <span m="2920160">to</span>
  <span m="2920290">get</span> <span m="2920480">a</span> <span
  m="2920540">path</span> <span m="2920900">in</span> <span
  m="2921000">general,</span> <span m="2922370">it</span> <span
  m="2922510">has</span> <span m="2922660">to</span> <span
  m="2922750">work</span> <span m="2922900">for</span> <span
  m="2923010">some</span> <span m="2923280">x.</span> <span
  m="2923850">So</span> <span m="2924020">that's</span> <span
  m="2924250">the</span> <span m="2924400">OR.</span></p><p><span
  m="2925480">And</span> <span m="2925730">this</span> <span
  m="2926400">is</span> <span m="2926560">a</span> <span
  m="2926670">ring.</span> <span m="2928170">And</span> <span
  m="2928340">once</span> <span m="2928570">you're</span> <span
  m="2928760">ring,</span> <span m="2929630">you</span> <span
  m="2929760">have</span> <span m="2930040">negation.</span> <span
  m="2931920">You</span> <span m="2932210">can</span> <span
  m="2932470">apply</span> <span m="2933650">Vassilevska-Williams.</span> <span
  m="2935460">And</span> <span m="2935640">you</span> <span
  m="2935930">solve</span> <span m="2936330">this</span> <span
  m="2936500">problem</span> <span m="2936990">in</span> <span
  m="2937930">n</span> <span m="2938390">to</span> <span m="2938890">the</span>
  <span m="2939060">2.3728.</span> <span m="2942420">And</span> <span
  m="2942570">if</span> <span m="2942670">I</span> <span m="2942740">just</span>
  <span m="2942960">make</span> <span m="2943110">a</span> <span
  m="2943180">little</span> <span m="2943420">change</span> <span
  m="2943780">in</span> <span m="2943870">the</span> <span
  m="2943960">dot</span> <span m="2944190">dot</span> <span
  m="2944420">dot,</span> <span m="2945550">I</span> <span
  m="2945660">can</span> <span m="2945820">absorb</span> <span
  m="2946150">the</span> <span m="2946240">log.</span> <span
  m="2946980">So</span> <span m="2947110">you</span> <span
  m="2947450">could</span> <span m="2947560">put</span> <span
  m="2947700">a</span> <span m="2947780">log n</span> <span
  m="2948180">here.</span> <span m="2948470">And</span> <span
  m="2948580">it's</span> <span m="2948780">log</span> <span
  m="2949040">n</span> <span m="2949160">if</span> <span m="2949280">you</span>
  <span m="2949440">get</span> <span m="2949630">the</span> <span
  m="2949840">exponent</span> <span m="2950210">exactly</span> <span
  m="2950680">right.</span> <span m="2951370">But</span> <span
  m="2951500">if</span> <span m="2951600">you</span> <span
  m="2951680">just</span> <span m="2951830">tweak</span> <span
  m="2952040">the</span> <span m="2952440">exponent</span> <span
  m="2952960">by</span> <span m="2953130">0.00000001,</span> <span
  m="2955830">that's</span> <span m="2956160">bigger</span> <span
  m="2956390">than</span> <span m="2956640">log</span> <span
  m="2956940">n.</span> <span m="2957250">So</span> <span m="2958120">we</span>
  <span m="2958300">usually</span> <span m="2958570">omit</span> <span
  m="2958800">the</span> <span m="2958890">log</span> <span
  m="2959190">there.</span> <span m="2960710">Cool.</span></p><p><span
  m="2962580">Transitive</span> <span m="2963240">closure--</span> <span
  m="2963790">so</span> <span m="2964090">it's</span> <span m="2964200">a</span>
  <span m="2964240">problem</span> <span m="2964510">you</span> <span
  m="2964590">didn't</span> <span m="2964810">know</span> <span
  m="2964960">you</span> <span m="2965110">want</span> <span
  m="2965290">to</span> <span m="2965460">solve,</span> <span
  m="2966140">but</span> <span m="2966490">it</span> <span m="2966660">is</span>
  <span m="2966850">actually</span> <span m="2967170">a</span> <span
  m="2967220">common</span> <span m="2967510">problem.</span> <span
  m="2968430">And</span> <span m="2968730">this</span> <span
  m="2968890">is</span> <span m="2968990">the</span> <span
  m="2969090">best</span> <span m="2969340">way</span> <span
  m="2969460">we</span> <span m="2969590">know</span> <span
  m="2969710">how</span> <span m="2969800">to</span> <span
  m="2969880">solve</span> <span m="2970140">it</span> <span
  m="2970240">for</span> <span m="2970520">dense</span> <span
  m="2970830">graphs.</span> <span m="2972110">OK,</span> <span
  m="2973830">it</span> <span m="2973930">beats,</span> <span m="2974680">you
  know,</span> <span m="2974780">V</span> <span m="2974930">cubed.</span> <span
  m="2975900">This</span> <span m="2976040">is</span> <span
  m="2976590">the</span> <span m="2976720">algorithm</span> <span
  m="2977070">we're</span> <span m="2977190">aiming</span> <span m="2977460">for
  for</span> <span m="2977820">dense</span> <span m="2978120">graphs.</span>
  <span m="2978915">For</span> <span m="2979170">sparse</span> <span
  m="2979560">graphs,</span> <span m="2979900">we</span> <span
  m="2980030">can</span> <span m="2980200">do</span> <span
  m="2980350">better.</span> <span m="2981340">But</span> <span
  m="2981600">for</span> <span m="2981820">dense</span> <span
  m="2982100">graphs,</span> <span m="2983520">this</span> <span
  m="2983710">is</span> <span m="2983880">better.</span></p><p><span
  m="2988800">Finally,</span> <span m="2989450">we</span> <span
  m="2989580">get</span> <span m="2989810">to</span> <span m="2989920">go</span>
  <span m="2990180">to</span> <span m="2990650">dynamic</span> <span
  m="2991180">programming</span> <span m="2991780">number</span> <span
  m="2992050">two,</span> <span m="2993250">also</span> <span
  m="2993630">known</span> <span m="2993980">as</span> <span
  m="2994620">the</span> <span m="2994720">Floyd-Warshall</span> <span
  m="2995520">algorithm.</span> <span m="2997450">So</span> <span
  m="2997620">we</span> <span m="2997700">had</span> <span
  m="2997940">this</span> <span m="2998120">dp</span> <span
  m="2999320">in</span> <span m="2999520">V</span> <span m="2999760">the</span>
  <span m="2999940">fourth.</span> <span m="3001395">If</span> <span
  m="3001740">we</span> <span m="3001940">forget</span> <span
  m="3002230">about</span> <span m="3002440">transitive</span> <span
  m="3002790">closure,</span> <span m="3003530">we've</span> <span
  m="3003750">now</span> <span m="3004030">are</span> <span
  m="3004150">down</span> <span m="3004400">to</span> <span m="3004490">V</span>
  <span m="3004750">cubed</span> <span m="3005010">log</span> <span
  m="3005450">V.</span> <span m="3006280">Our</span> <span
  m="3006450">next</span> <span m="3006770">goal</span> <span
  m="3007060">is</span> <span m="3007200">to</span> <span
  m="3007320">achieve</span> <span m="3007840">V</span> <span
  m="3008270">cubed,</span> <span m="3008890">no</span> <span
  m="3009120">log</span> <span m="3009360">V.</span> <span
  m="3011460">Let's</span> <span m="3011580">do</span> <span
  m="3011690">that.</span></p><p>&nbsp;</p><p><span m="3035860">So</span> <span
  m="3036060">again,</span> <span m="3036410">I'm</span> <span
  m="3036510">going</span> <span m="3036610">to</span> <span
  m="3036710">express</span> <span m="3036910">it</span> <span
  m="3037000">in</span> <span m="3037140">my</span> <span
  m="3037370">five</span> <span m="3037630">steps.</span> <span
  m="3038600">First</span> <span m="3039220">step</span> <span
  m="3039680">is,</span> <span m="3039920">what</span> <span
  m="3040200">are</span> <span m="3040240">subproblems?</span> <span
  m="3041740">And</span> <span m="3041880">this</span> <span
  m="3042050">is</span> <span m="3042240">the</span> <span
  m="3042550">key</span> <span m="3042710">difference,</span> <span
  m="3043300">and</span> <span m="3043470">the</span> <span
  m="3043580">key</span> <span m="3043800">insight</span> <span
  m="3045410">for</span> <span m="3045690">Floyd-Warshall</span> <span
  m="3046380">is</span> <span m="3046510">to</span> <span
  m="3046670">redefine</span> <span m="3048260">the</span> <span
  m="3048600">dij</span> <span m="3049140">problems.</span> <span
  m="3049640">To</span> <span m="3049910">avoid</span> <span
  m="3050340">conflict,</span> <span m="3050820">I'm</span> <span
  m="3050900">going</span> <span m="3051010">to</span> <span
  m="3051080">call</span> <span m="3051280">them</span> <span
  m="3051460">cij,</span> <span m="3053520">or</span> <span
  m="3053720">in</span> <span m="3053780">this</span> <span
  m="3053910">case,</span> <span m="3054100">cuv,</span> <span
  m="3058630">because</span> <span m="3058840">here,</span> <span
  m="3059130">the</span> <span m="3059570">matrix</span> <span
  m="3059980">product</span> <span m="3060440">view</span> <span
  m="3060570">will</span> <span m="3060710">not</span> <span
  m="3060950">work,</span> <span m="3062040">I</span> <span
  m="3062080">think.</span> <span m="3064406">Yeah,</span> <span m="3064880">it
  won't</span> <span m="3065354">work.</span> <span m="3067730">So</span> <span
  m="3067880">it's a</span> <span m="3068010">totally</span> <span
  m="3068310">different</span> <span
  m="3068550">universe.</span></p><p>&nbsp;</p><p><span m="3100326">I'm</span>
  <span m="3100860">still</span> <span m="3100940">going</span> <span
  m="3101160">to</span> <span m="3101200">assume</span> <span
  m="3101590">that</span> <span m="3101790">my</span> <span
  m="3102000">vertices</span> <span m="3102490">are</span> <span
  m="3102560">numbered</span> <span m="3102940">1</span> <span
  m="3103120">through</span> <span m="3103300">n.</span> <span
  m="3105020">And</span> <span m="3105200">now,</span> <span
  m="3106250">the</span> <span m="3106390">idea</span> <span
  m="3106690">is,</span> <span m="3107210">first</span> <span m="3107470">I'm
  going to</span> <span m="3107710">think</span> <span m="3107930">about</span>
  <span m="3108160">the</span> <span m="3108260">graph</span> <span
  m="3108720">formed</span> <span m="3109130">by</span> <span
  m="3109380">the</span> <span m="3109480">vertices</span> <span
  m="3109940">1</span> <span m="3110200">though</span> <span
  m="3110400">k,</span> <span m="3111240">roughly.</span> <span
  m="3112240">And</span> <span m="3112490">I</span> <span
  m="3112520">want</span> <span m="3112780">to</span> <span
  m="3112840">know</span> <span m="3112980">for</span> <span
  m="3113180">every</span> <span m="3113520">vertex</span> <span
  m="3114180">u</span> <span m="3114420">and</span> <span
  m="3114510">every</span> <span m="3114710">vertex</span> <span
  m="3115100">v,</span> <span m="3115700">what</span> <span
  m="3115910">is</span> <span m="3116040">the</span> <span
  m="3116130">shortest</span> <span m="3116630">path</span> <span
  m="3117030">from</span> <span m="3117250">u</span> <span m="3117430">to</span>
  <span m="3117490">v,</span> <span m="3117810">or</span> <span
  m="3117860">the</span> <span m="3117990">weight</span> <span
  m="3118220">of</span> <span m="3118300">the</span> <span
  m="3118360">shortest</span> <span m="3118680">path</span> <span
  m="3118890">from</span> <span m="3119010">u</span> <span m="3119140">to</span>
  <span m="3119200">v</span> <span m="3119630">that</span> <span
  m="3120060">only</span> <span m="3120500">uses</span> <span
  m="3120890">intermediate</span> <span m="3121470">vertices</span> <span
  m="3122020">from</span> <span m="3122240">1</span> <span
  m="3122440">through</span> <span m="3122640">k.</span> <span
  m="3123670">So</span> <span m="3124100">actually,</span> <span
  m="3124450">u</span> <span m="3124630">and</span> <span m="3124730">v</span>
  <span m="3125180">might</span> <span m="3125380">not</span> <span
  m="3125570">be--</span> <span m="3126010">they</span> <span
  m="3126100">might</span> <span m="3126300">be</span> <span
  m="3126410">larger</span> <span m="3126940">than</span> <span
  m="3127100">k.</span> <span m="3127850">But</span> <span m="3128090">I</span>
  <span m="3128130">want</span> <span m="3128510">all</span> <span
  m="3128820">the</span> <span m="3128880">vertices</span> <span m="3129320">in
  the</span> <span m="3129450">path</span> <span m="3130130">to</span> <span
  m="3130270">be</span> <span m="3130390">1</span> <span
  m="3130610">through</span> <span m="3130710">k.</span></p><p><span
  m="3131330">This</span> <span m="3131480">is</span> <span m="3131580">a</span>
  <span m="3131660">different</span> <span m="3132050">way</span> <span
  m="3132290">to</span> <span m="3132400">slice</span> <span
  m="3132760">up</span> <span m="3132870">my</span> <span
  m="3133220">space,</span> <span m="3133960">and</span> <span
  m="3134140">it's</span> <span m="3134340">the</span> <span
  m="3134500">right</span> <span m="3134800">way.</span> <span
  m="3135120">This</span> <span m="3135330">is</span> <span
  m="3135470">going</span> <span m="3135630">to</span> <span
  m="3135730">do</span> <span m="3135880">a</span> <span
  m="3135930">factor</span> <span m="3136340">of</span> <span
  m="3136410">n</span> <span m="3136600">better.</span> <span
  m="3138440">It</span> <span m="3138740">turns</span> <span
  m="3139050">out,</span> <span m="3139370">and</span> <span
  m="3139490">that's</span> <span m="3139700">just</span> <span
  m="3140110">an</span> <span m="3140290">insight</span> <span
  m="3140660">you</span> <span m="3140780">get</span> <span
  m="3141070">from</span> <span m="3141700">trying</span> <span
  m="3141965">all</span> <span m="3142230">the</span> <span
  m="3142320">dp's</span> <span m="3142760">you</span> <span
  m="3142880">could</span> <span m="3143020">think</span> <span
  m="3143230">of.</span> <span m="3143800">And</span> <span
  m="3144000">eventually,</span> <span m="3144470">Floyd and</span> <span
  m="3144840">Warshall</span> <span m="3145230">found</span> <span
  m="3145500">this</span> <span m="3145650">one,</span> <span
  m="3147400">I</span> <span m="3147490">think</span> <span
  m="3147680">in</span> <span m="3147790">the</span> <span
  m="3148050">'70s.</span> <span m="3149090">So</span> <span
  m="3149360">it</span> <span m="3149420">was</span> <span
  m="3149630">easier</span> <span m="3149970">back</span> <span
  m="3150190">then</span> <span m="3150920">to</span> <span
  m="3151050">get</span> <span m="3151230">a</span> <span m="3151280">new</span>
  <span m="3151410">result.</span> <span m="3155930">But</span> <span
  m="3156900">I</span> <span m="3156930">mean,</span> <span
  m="3157110">this</span> <span m="3157240">is</span> <span
  m="3157330">very</span> <span m="3157540">clever--</span> <span
  m="3158140">so</span> <span m="3158430">very</span> <span
  m="3158610">cool</span> <span m="3158790">idea.</span></p><p><span
  m="3164800">So</span> <span m="3165020">now</span> <span
  m="3165260">the</span> <span m="3165360">question</span> <span
  m="3165770">is,</span> <span m="3168600">what</span> <span
  m="3168790">should</span> <span m="3168970">I</span> <span
  m="3169040">guess?</span> <span m="3170960">Before</span> <span
  m="3171340">I</span> <span m="3171380">guessed</span> <span
  m="3171640">what</span> <span m="3171770">the</span> <span
  m="3171870">last</span> <span m="3172240">edge was.</span> <span
  m="3172700">That's</span> <span m="3172970">not</span> <span
  m="3173380">going</span> <span m="3173510">to</span> <span
  m="3173570">be</span> <span m="3173700">so</span> <span
  m="3173880">useful</span> <span m="3174290">here.</span> <span
  m="3175600">Can</span> <span m="3175640">anyone</span> <span
  m="3175910">think</span> <span m="3176150">of</span> <span
  m="3176550">a</span> <span m="3176650">different</span> <span
  m="3177040">thing</span> <span m="3177190">to</span> <span
  m="3177290">guess?</span> <span m="3178230">We're</span> <span
  m="3178320">trying</span> <span m="3178650">to</span> <span
  m="3178730">solve</span> <span m="3179070">this</span> <span
  m="3179230">problem</span> <span m="3179660">where</span> <span
  m="3179780">I</span> <span m="3179830">get</span> <span m="3180050">to</span>
  <span m="3180110">use</span> <span m="3180340">vertices</span> <span
  m="3180750">1</span> <span m="3180940">through</span> <span
  m="3181090">k,</span> <span m="3181460">and</span> <span
  m="3181660">presumably</span> <span m="3182230">I</span> <span
  m="3182290">want</span> <span m="3182500">to</span> <span
  m="3182550">use</span> <span m="3182900">subproblems</span> <span
  m="3183570">that</span> <span m="3183680">involve</span> <span
  m="3184070">smaller</span> <span m="3184630">k,</span> <span
  m="3185570">that</span> <span m="3185740">say</span> <span
  m="3185960">involve</span> <span m="3186430">vertices</span> <span
  m="3186830">1</span> <span m="3187070">through</span> <span
  m="3187220">k</span> <span m="3187410">minus</span> <span
  m="3187740">1.</span> <span m="3189090">So</span> <span
  m="3189270">vertex</span> <span m="3189620">k</span> <span
  m="3190020">is</span> <span m="3190390">relevant.</span> <span
  m="3191250">What</span> <span m="3191370">should</span> <span
  m="3191530">I</span> <span m="3191580">guess</span> <span
  m="3191870">about</span> <span m="3192620">vertex</span> <span
  m="3192980">k?</span></p><p>&nbsp;</p><p><span
  m="3203646">Yeah?</span></p><p><span m="3204638">STUDENT: Guess</span> <span
  m="3205134">that</span> <span m="3205630">vertex</span> <span
  m="3206126">k</span> <span m="3206622">is the</span> <span
  m="3207118">[INAUDIBLE]</span></p><p><span m="3211590">PROFESSOR: You</span>
  <span m="3211790">want</span> <span m="3211900">to</span> <span
  m="3211950">guess</span> <span m="3212190">vertex</span> <span
  m="3212550">k</span> <span m="3212680">is</span> <span m="3212790">the</span>
  <span m="3212990">i-th</span> <span m="3213270">intermediate</span> <span
  m="3213760">vertex.</span> <span m="3214170">That</span> <span
  m="3214400">would</span> <span m="3214560">work,</span> <span
  m="3215010">but</span> <span m="3215180">I</span> <span
  m="3215250">would</span> <span m="3215450">need</span> <span
  m="3215910">to</span> <span m="3216080">parameterize</span> <span
  m="3217050">by</span> <span m="3217310">i</span> <span
  m="3217590">here,</span> <span m="3217870">and I</span> <span
  m="3217980">lose</span> <span m="3218240">another</span> <span
  m="3218510">factor</span> <span m="3218910">of n</span> <span
  m="3219160">if</span> <span m="3219280">I</span> <span m="3219340">do</span>
  <span m="3219500">that.</span> <span m="3220590">So</span> <span
  m="3220700">I'd</span> <span m="3220830">like</span> <span
  m="3220970">to</span> <span m="3221050">avoid</span> <span
  m="3221320">that.</span> <span m="3223080">That</span> <span
  m="3223270">is</span> <span m="3223420">a</span> <span m="3223470">good</span>
  <span m="3223630">idea.</span> <span m="3226545">Yeah?</span></p><p><span
  m="3227531">STUDENT:</span> <span m="3228024">[INAUDIBLE]</span> <span
  m="3229010">visit</span> <span m="3229503">k,</span> <span m="3229996">before
  you visit</span> <span m="3230489">v.</span></p><p><span
  m="3231480">PROFESSOR: You're</span> <span m="3231670">going</span> <span
  m="3231780">to</span> <span m="3231840">guess</span> <span
  m="3232210">that</span> <span m="3232400">I</span> <span
  m="3232530">visit</span> <span m="3232950">k,</span> <span
  m="3233265">and</span> <span m="3233580">then</span> <span
  m="3234315">I</span> <span m="3234610">go</span> <span m="3234900">to</span>
  <span m="3235120">where</span> <span m="3235290">I'm</span> <span
  m="3235380">trying</span> <span m="3235640">to</span> <span
  m="3235690">go.</span> <span m="3236490">OK.</span> <span
  m="3236700">That's</span> <span m="3237520">not</span> <span
  m="3237770">a--</span> <span m="3238650">OK.</span> <span
  m="3239750">That's</span> <span m="3240020">a</span> <span
  m="3240330">statement.</span> <span m="3242610">But</span> <span
  m="3242970">to</span> <span m="3243100">guess,</span> <span
  m="3243450">I</span> <span m="3243500">should</span> <span
  m="3243660">have</span> <span m="3243820">multiple</span> <span
  m="3244240">choices.</span> <span m="3244650">What's</span> <span
  m="3244830">my</span> <span m="3244960">other</span> <span
  m="3245150">choice?</span></p><p><span m="3246179">STUDENT:</span> <span
  m="3246648">[INAUDIBLE]</span></p><p><span m="3251340">PROFESSOR: Yes.</span>
  <span m="3251650">So</span> <span m="3252150">either</span> <span
  m="3252490">I</span> <span m="3252610">use</span> <span
  m="3253550">vertex</span> <span m="3253900">k,</span> <span
  m="3254140">or</span> <span m="3254330">I</span> <span
  m="3254380">don't.</span> <span m="3255870">That's</span> <span
  m="3256160">the</span> <span m="3256290">guess--</span> <span
  m="3257640">is</span> <span m="3258090">k</span> <span m="3259040">in</span>
  <span m="3259230">the</span> <span m="3259330">path</span> <span
  m="3259670">at</span> <span m="3259740">all</span> <span m="3263640">from
  u</span> <span m="3264000">to v?</span> <span m="3265120">So</span> <span
  m="3265330">that's</span> <span m="3266220">a</span> <span
  m="3266430">weaker</span> <span m="3266910">thing</span> <span
  m="3267130">than</span> <span m="3267240">saying,</span> <span
  m="3267880">k</span> <span m="3268150">is</span> <span m="3268290">at</span>
  <span m="3268460">position</span> <span m="3268950">i</span> <span
  m="3269230">in</span> <span m="3269480">the</span> <span
  m="3269610">path.</span> <span m="3270700">Here</span> <span
  m="3270880">I'm</span> <span m="3270950">just</span> <span
  m="3271080">saying,</span> <span m="3271310">is</span> <span
  m="3271520">k</span> <span m="3271710">in</span> <span m="3271800">the</span>
  <span m="3271880">path</span> <span m="3272170">at</span> <span
  m="3272240">all?</span></p><p><span m="3273150">And</span> <span
  m="3273320">that's</span> <span m="3273530">nice,</span> <span
  m="3273950">because</span> <span m="3274530">as</span> <span
  m="3274710">you</span> <span m="3274790">say,</span> <span
  m="3275410">I</span> <span m="3275520">already</span> <span
  m="3275780">know</span> <span m="3275930">how</span> <span
  m="3276050">to</span> <span m="3276120">get</span> <span
  m="3276350">there</span> <span m="3276520">without</span> <span
  m="3276910">using</span> <span m="3277210">k.</span> <span
  m="3277800">Because</span> <span m="3278120">that's</span> <span
  m="3278710">cuvk</span> <span m="3279690">minus</span> <span
  m="3279990">1.</span> <span m="3280790">And</span> <span
  m="3280850">then,</span> <span m="3280950">you just</span> <span
  m="3281200">also</span> <span m="3281520">have</span> <span
  m="3281680">to</span> <span m="3281780">consider</span> <span
  m="3282110">the</span> <span m="3282230">situation</span> <span
  m="3282710">where</span> <span m="3282840">I</span> <span
  m="3282880">go</span> <span m="3283130">to</span> <span m="3283220">k,</span>
  <span m="3283560">and</span> <span m="3283740">then</span> <span
  m="3283860">I</span> <span m="3283910">leave.</span> <span
  m="3285140">So</span> <span m="3285450">the</span> <span
  m="3285570">recurrence</span> <span m="3286090">is</span> <span
  m="3286200">going</span> <span m="3286360">to</span> <span
  m="3286420">be</span> <span m="3287450">cuvk</span> <span m="3291140">is
  the</span> <span m="3291380">min</span> <span m="3293180">of</span> <span
  m="3293830">two</span> <span m="3294400">things.</span> <span
  m="3295460">One</span> <span m="3295630">is</span> <span
  m="3295740">when</span> <span m="3295900">k</span> <span m="3296180">is</span>
  <span m="3296320">not</span> <span m="3296630">in</span> <span
  m="3296720">the</span> <span m="3296810">path,</span> <span
  m="3297250">that's</span> <span m="3297840">cuvk</span> <span
  m="3299730">minus</span> <span m="3300060">1.</span></p><p><span
  m="3301580">And</span> <span m="3301770">the</span> <span
  m="3301880">other</span> <span m="3302070">option</span> <span
  m="3302470">is</span> <span m="3302710">that</span> <span m="3302910">I</span>
  <span m="3303060">go</span> <span m="3303400">to</span> <span
  m="3303600">x</span> <span m="3304100">first--</span> <span
  m="3304395">or</span> <span m="3304690">sorry,</span> <span
  m="3305020">I</span> <span m="3305090">go</span> <span m="3305210">to</span>
  <span m="3305300">k</span> <span m="3305660">first.</span> <span
  m="3306070">It used</span> <span m="3306300">to</span> <span
  m="3306360">be</span> <span m="3306490">x.</span> <span
  m="3306770">Now,</span> <span m="3306900">I've</span> <span
  m="3307020">renamed</span> <span m="3307350">it</span> <span
  m="3307590">k.</span> <span m="3308270">I</span> <span
  m="3308410">don't</span> <span m="3308530">know</span> <span
  m="3308670">why.</span> <span m="3311360">k</span> <span
  m="3311720">minus</span> <span m="3312150">1--</span> <span
  m="3313190">and</span> <span m="3313460">then</span> <span
  m="3313680">I</span> <span m="3313780">go</span> <span m="3314130">from</span>
  <span m="3314710">k</span> <span m="3315210">to</span> <span
  m="3315520">the</span> <span m="3316357">v--</span> <span m="3317490">k</span>
  <span m="3317650">minus</span> <span m="3317970">1.</span> <span
  m="3321170">That's</span> <span m="3321380">it.</span></p><p><span
  m="3322760">Min</span> <span m="3322970">of</span> <span
  m="3323070">two</span> <span m="3323340">things--</span> <span
  m="3323650">before,</span> <span m="3323970">I was taking</span> <span
  m="3324250">the</span> <span m="3324330">min</span> <span
  m="3324480">of</span> <span m="3324610">n</span> <span
  m="3324870">things.</span> <span m="3325240">Before,</span> <span
  m="3325500">there</span> <span m="3325680">were n</span> <span
  m="3326010">choices</span> <span m="3326400">for</span> <span
  m="3326550">my</span> <span m="3326630">guess.</span> <span
  m="3327360">Now,</span> <span m="3327570">there</span> <span
  m="3327710">are</span> <span m="3327800">two</span> <span
  m="3328040">choices</span> <span m="3328480">for</span> <span
  m="3328600">my</span> <span m="3328730">guess.</span> <span
  m="3329620">Number</span> <span m="3329890">of</span> <span
  m="3329940">subproblems</span> <span m="3330490">is</span> <span
  m="3330600">the</span> <span m="3330680">same,</span> <span
  m="3331000">still</span> <span m="3331380">V</span> <span
  m="3331590">cubed.</span> <span m="3332970">But</span> <span
  m="3333370">the</span> <span m="3333490">guessing</span> <span
  m="3334020">part</span> <span m="3334330">and</span> <span
  m="3334430">the</span> <span m="3334500">recurrence</span> <span
  m="3334960">part</span> <span m="3335250">is</span> <span
  m="3335370">now</span> <span m="3335780">constant</span> <span
  m="3336210">time</span> <span m="3336540">instead of</span> <span
  m="3336670">linear</span> <span m="3337010">time.</span> <span
  m="3337860">So</span> <span m="3337900">I'm</span> <span
  m="3338120">now</span> <span m="3338990">V</span> <span
  m="3339240">cubed</span> <span m="3339540">time--</span> <span
  m="3341040">progress.</span></p><p><span m="3343200">OK?</span> <span
  m="3343670">This</span> <span m="3343920">is</span> <span
  m="3344820">pretty</span> <span m="3345120">cool.</span> <span
  m="3345360">The</span> <span m="3345490">old</span> <span
  m="3345700">dp</span> <span m="3346470">led</span> <span m="3346650">us</span>
  <span m="3346770">to</span> <span m="3346850">this</span> <span
  m="3347010">world</span> <span m="3347260">of</span> <span
  m="3347370">matrix</span> <span m="3347740">multiplication.</span> <span
  m="3348380">That's</span> <span m="3348560">why</span> <span
  m="3348670">I</span> <span m="3348730">covered</span> <span
  m="3349070">it.</span> <span m="3349780">This</span> <span
  m="3350030">new</span> <span m="3350150">dp</span> <span m="3350470">is</span>
  <span m="3350560">just</span> <span m="3350770">a</span> <span
  m="3350820">different</span> <span m="3351160">way</span> <span
  m="3351280">of</span> <span m="3351360">thinking</span> <span
  m="3351620">about</span> <span m="3351860">it--</span> <span
  m="3352110">turns</span> <span m="3352340">out</span> <span
  m="3352490">to</span> <span m="3352560">be</span> <span
  m="3352690">faster,</span> <span m="3354580">just</span> <span
  m="3354740">by</span> <span m="3354860">log</span> <span
  m="3355150">factor,</span> <span m="3355590">but</span> <span
  m="3355720">a</span> <span m="3356030">little</span> <span
  m="3356250">bit</span> <span m="3356390">faster.</span></p><p><span
  m="3358230">I</span> <span m="3358340">need</span> <span
  m="3358580">some</span> <span m="3358730">base</span> <span
  m="3359030">cases--</span> <span m="3359650">cuv</span> <span
  m="3361165">of</span> <span m="3361550">0</span> <span m="3363140">is</span>
  <span m="3364190">going</span> <span m="3364360">to</span> <span
  m="3364430">be--</span> <span m="3364720">now</span> <span
  m="3364950">it's</span> <span m="3365100">the</span> <span
  m="3365240">weight</span> <span m="3365490">of</span> <span
  m="3365660">the</span> <span m="3365750">edge</span> <span
  m="3367990">uv.</span> <span m="3370350">It's</span> <span
  m="3370520">a</span> <span m="3370570">different</span> <span
  m="3370890">base</span> <span m="3371110">case.</span> <span
  m="3371310">Before,</span> <span m="3371670">I was</span> <span
  m="3371790">using</span> <span m="3372040">0</span> <span
  m="3372370">edges.</span> <span m="3372810">Now,</span> <span
  m="3373100">it's</span> <span m="3373670">not</span> <span
  m="3373960">using</span> <span m="3374340">any</span> <span
  m="3374620">intermediate</span> <span m="3375190">vertices.</span> <span
  m="3375960">So</span> <span m="3376820">that's</span> <span
  m="3377060">how</span> <span m="3377210">the</span> <span
  m="3377330">weights</span> <span m="3377670">come</span> <span
  m="3377860">into</span> <span m="3378020">the</span> <span
  m="3378110">picture,</span> <span m="3378440">because</span> <span
  m="3378590">actually</span> <span m="3378820">there</span> <span
  m="3378930">are</span> <span m="3378960">no</span> <span
  m="3379190">weights</span> <span m="3379480">of</span> <span
  m="3379580">edges</span> <span m="3379890">up</span> <span
  m="3380030">here.</span> <span m="3380750">So</span> <span
  m="3380870">that's</span> <span m="3381040">a</span> <span
  m="3381090">little</span> <span m="3381290">weird.</span> <span
  m="3381860">The</span> <span m="3381960">only</span> <span
  m="3382240">place</span> <span m="3382480">the</span> <span
  m="3382580">weights</span> <span m="3382810">come</span> <span
  m="3383010">in</span> <span m="3383140">is</span> <span
  m="3383350">when</span> <span m="3384560">k</span> <span
  m="3384860">equals</span> <span m="3385130">0.</span></p><p><span
  m="3388800">This</span> <span m="3388970">is</span> <span
  m="3389080">in</span> <span m="3389180">some</span> <span
  m="3389390">sense</span> <span m="3389640">still</span> <span
  m="3389870">relaxation,</span> <span m="3390600">but</span> <span
  m="3390770">it's</span> <span m="3390910">a</span> <span
  m="3390970">little</span> <span m="3391200">bit</span> <span
  m="3391920">weirder,</span> <span m="3393920">little bit</span> <span
  m="3394210">different</span> <span m="3394510">order.</span> <span
  m="3395720">I</span> <span m="3395820">mean</span> <span
  m="3395970">the</span> <span m="3396070">key</span> <span
  m="3396270">thing</span> <span m="3396530">here</span> <span
  m="3396870">is,</span> <span m="3396980">because</span> <span
  m="3399260">the</span> <span m="3399340">way</span> <span
  m="3399470">we</span> <span m="3399580">set</span> <span m="3399820">up</span>
  <span m="3400725">these</span> <span m="3401120">subproblems</span> <span
  m="3401680">with</span> <span m="3401780">the</span> <span
  m="3401860">intermediate</span> <span m="3402240">vertices,</span> <span
  m="3402630">we</span> <span m="3402750">know</span> <span m="3403010">k</span>
  <span m="3403260">is</span> <span m="3403380">the</span> <span
  m="3403530">only</span> <span m="3403830">vertex</span> <span
  m="3404230">in</span> <span m="3404320">question.</span> <span
  m="3405200">Before</span> <span m="3405520">it's</span> <span
  m="3405620">like,</span> <span m="3405790">well,</span> <span
  m="3405980">I</span> <span m="3406030">don't</span> <span
  m="3406160">know</span> <span m="3406280">where</span> <span
  m="3406380">you</span> <span m="3406480">go</span> <span m="3406640">at</span>
  <span m="3406730">the</span> <span m="3406860">end.</span> <span
  m="3407830">But</span> <span m="3407940">now</span> <span
  m="3408760">we</span> <span m="3408920">know</span> <span
  m="3409180">that</span> <span m="3409310">either</span> <span
  m="3409550">k</span> <span m="3409740">is</span> <span m="3409860">in</span>
  <span m="3409980">there,</span> <span m="3410240">or it's</span> <span
  m="3410360">not.</span> <span m="3410770">And</span> <span
  m="3411100">in</span> <span m="3411320">each</span> <span
  m="3411500">case,</span> <span m="3411890">we</span> <span
  m="3411950">can</span> <span m="3412060">compute</span> <span
  m="3412380">it</span> <span m="3413220">using</span> <span
  m="3413520">smaller</span> <span m="3413850">subproblems</span> <span
  m="3414540">and</span> <span m="3414940">so</span> <span m="3415130">we</span>
  <span m="3415230">save</span> <span m="3415510">that</span> <span
  m="3416290">linear</span> <span m="3416560">factor.</span></p><p><span
  m="3418712">STUDENT: Is this</span> <span m="3419140">only for</span> <span
  m="3419570">[INAUDIBLE]</span> <span m="3420000">graphs,</span> <span
  m="3420447">or is does it</span> <span m="3420894">also</span> <span
  m="3421341">[INAUDIBLE]</span></p><p><span m="3421790">PROFESSOR: This</span>
  <span m="3421970">is</span> <span m="3422080">for</span> <span
  m="3422210">directed</span> <span m="3422640">graphs.</span> <span
  m="3425570">u</span> <span m="3425790">and</span> <span m="3425890">v</span>
  <span m="3426080">are</span> <span m="3426170">ordered</span> <span
  m="3426590">here.</span> <span m="3427450">And</span> <span
  m="3427670">this</span> <span m="3427820">is</span> <span
  m="3427950">the</span> <span m="3428080">weight</span> <span
  m="3428420">from</span> <span m="3428680">u</span> <span m="3429160">to</span>
  <span m="3429430">v--</span> <span m="3430100">will</span> <span
  m="3430550">work</span> <span m="3430890">just</span> <span
  m="3431170">as</span> <span m="3431260">well.</span> <span
  m="3432290">It's</span> <span m="3432570">probably</span> <span
  m="3433270">a</span> <span m="3433340">little</span> <span
  m="3433570">bit</span> <span m="3433700">instructive</span> <span
  m="3434310">to</span> <span m="3434560">write</span> <span
  m="3434820">this</span> <span m="3435050">down</span> <span
  m="3435490">as</span> <span m="3435970">nested</span> <span
  m="3436320">for</span> <span m="3436550">loops</span> <span
  m="3436860">again.</span> <span m="3437970">Why</span> <span
  m="3438050">not?</span> <span m="3440030">Because</span> <span
  m="3440310">then,</span> <span m="3440440">you'll</span> <span
  m="3440560">see</span> <span m="3440710">it's</span> <span
  m="3440860">just</span> <span m="3441040">relaxation</span> <span
  m="3441700">again.</span></p><p><span m="3445530">So</span> <span
  m="3446510">I'll</span> <span m="3446740">even</span> <span
  m="3446970">write</span> <span m="3447350">the</span> <span
  m="3447510">base</span> <span m="3447800">case</span> <span
  m="3448080">here,</span> <span m="3448340">because</span> <span
  m="3448690">it's</span> <span m="3448910">very</span> <span
  m="3449090">simple.</span> <span m="3455330">We're</span> <span
  m="3455450">doing</span> <span m="3455830">k</span> <span
  m="3456120">in</span> <span m="3456290">order,</span> <span
  m="3456620">let's</span> <span m="3456850">say.</span> <span
  m="3459050">These</span> <span m="3459180">are</span> <span
  m="3459250">really</span> <span m="3459580">the</span> <span
  m="3459710">same</span> <span m="3460000">kinds</span> <span
  m="3460230">of</span> <span m="3460320">for</span> <span
  m="3460500">loops.</span> <span m="3464120">But</span> <span
  m="3464420">I'll</span> <span m="3464590">write</span> <span
  m="3464750">them</span> <span m="3464880">slightly</span> <span
  m="3465180">differently,</span> <span m="3465510">because</span> <span
  m="3465790">here</span> <span m="3465920">we</span> <span
  m="3466030">care</span> <span m="3466250">about</span> <span
  m="3466420">the</span> <span m="3466520">order</span> <span
  m="3466780">slightly.</span> <span m="3467970">Here,</span> <span
  m="3468090">we</span> <span m="3468490">do</span> <span
  m="3468610">care</span> <span m="3468770">about</span> <span
  m="3468930">the</span> <span m="3469020">order.</span> <span
  m="3469150">Here,</span> <span m="3469530">we</span> <span
  m="3469680">don't</span> <span m="3469860">care</span> <span
  m="3470010">about</span> <span m="3470190">the</span> <span
  m="3470310">order.</span> <span m="3471330">Vertices,</span> <span
  m="3472150">and</span> <span m="3472620">all</span> <span
  m="3472850">we're</span> <span m="3472970">saying</span> <span
  m="3473520">is--</span> <span m="3487600">almost</span> <span
  m="3487960">exactly</span> <span m="3488510">the</span> <span
  m="3488630">same</span> <span m="3488870">code</span> <span
  m="3489090">as</span> <span m="3489210">before.</span></p><p><span
  m="3490430">This</span> <span m="3490630">is,</span> <span
  m="3490740">again,</span> <span m="3491100">just</span> <span
  m="3491430">a</span> <span m="3491530">relaxation</span> <span
  m="3492160">step.</span> <span m="3492450">We're</span> <span
  m="3492550">just</span> <span m="3492720">relaxing</span> <span
  m="3493520">different</span> <span m="3493830">edges</span> <span
  m="3494140">in</span> <span m="3494230">different</span> <span
  m="3494510">orders,</span> <span m="3496700">basically,</span> <span
  m="3497500">because</span> <span m="3497820">k</span> <span
  m="3498190">is</span> <span m="3498360">evolved</span> <span
  m="3498790">in</span> <span m="3498870">here.</span> <span
  m="3499150">We</span> <span m="3499240">do</span> <span
  m="3499360">that</span> <span m="3499580">for</span> <span
  m="3499680">k</span> <span m="3499830">equals</span> <span
  m="3500000">1.</span> <span m="3500340">Then</span> <span m="3500510">for
  k</span> <span m="3500870">equals 2,</span> <span m="3501210">and</span> <span
  m="3501310">so</span> <span m="3501460">on.</span> <span
  m="3502770">But</span> <span m="3502970">in</span> <span
  m="3503070">the</span> <span m="3503180">end,</span> <span
  m="3503450">it's</span> <span m="3503570">just</span> <span
  m="3503750">relaxations,</span> <span m="3504450">so</span> <span
  m="3505520">you can use</span> <span m="3505760">that</span> <span
  m="3506030">to prove that</span> <span m="3506360">this</span> <span
  m="3506550">actually</span> <span m="3506910">computes</span> <span
  m="3507330">the</span> <span m="3507410">right</span> <span
  m="3507560">shortest</span> <span m="3507830">paths.</span> <span
  m="3508220">I</span> <span m="3508260">won't</span> <span
  m="3508510">do</span> <span m="3508600">that</span> <span
  m="3508770">here.</span> <span m="3510130">But</span> <span
  m="3510330">clearly,</span> <span m="3511260">cubic</span> <span
  m="3511550">time</span> <span m="3511810">instead</span> <span
  m="3512080">of</span> <span m="3512190">quartic.</span> <span
  m="3513750">Pretty</span> <span m="3513910">cool.</span></p><p><span
  m="3514420">That's</span> <span m="3514650">Floyd-Warshall.</span> <span
  m="3515770">It's</span> <span m="3516190">very</span> <span
  m="3516410">simple.</span> <span m="3517180">And</span> <span
  m="3517390">so</span> <span m="3517710">a</span> <span m="3517820">lot</span>
  <span m="3517990">of</span> <span m="3518040">people--</span> <span
  m="3518430">if</span> <span m="3518540">you</span> <span
  m="3518630">need</span> <span m="3518800">to</span> <span
  m="3518870">solve</span> <span m="3519720">all-pairs</span> <span
  m="3519910">shortest</span> <span m="3520330">paths</span> <span
  m="3520640">in</span> <span m="3520730">dense</span> <span
  m="3520980">graphs,</span> <span m="3521200">this</span> <span
  m="3521340">is</span> <span m="3521440">the</span> <span
  m="3521540">best</span> <span m="3521850">we</span> <span
  m="3521920">know</span> <span m="3522030">how</span> <span
  m="3522160">to</span> <span m="3522260">do.</span> <span m="3522480">So</span>
  <span m="3522670">this</span> <span m="3522880">is</span> <span
  m="3523000">what</span> <span m="3523160">you</span> <span
  m="3523220">should</span> <span m="3523380">implement.</span> <span
  m="3523635">It's</span> <span m="3523890">like,</span> <span
  m="3524350">five</span> <span m="3524610">lines</span> <span
  m="3524840">of</span> <span m="3524910">code.</span> <span
  m="3526250">And</span> <span m="3526280">you</span> <span
  m="3526400">achieve</span> <span m="3526750">this</span> <span
  m="3526920">bound.</span></p><p><span m="3528070">But</span> <span
  m="3528230">for</span> <span m="3528500">our</span> <span m="3528590">sparse
  graphs,</span> <span m="3528990">we</span> <span m="3529130">can</span> <span
  m="3529260">do</span> <span m="3529390">better.</span> <span
  m="3530050">And</span> <span m="3530560">the</span> <span
  m="3530660">rest</span> <span m="3530960">of</span> <span
  m="3531120">lecture</span> <span m="3531990">is</span> <span
  m="3532180">going</span> <span m="3532310">to</span> <span
  m="3532380">be</span> <span m="3532540">about</span> <span
  m="3532840">Johnson's</span> <span m="3533240">algorithm,</span> <span
  m="3535390">where</span> <span m="3535580">for</span> <span
  m="3535700">sparse</span> <span m="3536030">graphs</span> <span
  m="3536290">we're</span> <span m="3536400">going</span> <span
  m="3536520">to</span> <span m="3536570">get</span> <span
  m="3536800">closer</span> <span m="3537300">to</span> <span
  m="3537410">quadratic</span> <span m="3537890">time.</span> <span
  m="3538170">We're</span> <span m="3538270">going</span> <span
  m="3538380">to</span> <span m="3538430">match</span> <span
  m="3539360">running</span> <span m="3539710">Dijkstra,</span> <span
  m="3542240">and</span> <span m="3542480">it's</span> <span
  m="3543440">V</span> <span m="3543820">squared</span> <span
  m="3544150">log</span> <span m="3544380">V</span> <span
  m="3544680">plus</span> <span m="3545100">E</span> <span
  m="3545720">times</span> <span m="3546350">V,</span> <span
  m="3547000">sorry.</span> <span m="3548010">So</span> <span
  m="3548520">when</span> <span m="3548730">E</span> <span m="3548870">is</span>
  <span m="3548970">small,</span> <span m="3549480">that's</span> <span
  m="3549620">going</span> <span m="3549730">to</span> <span
  m="3549800">be</span> <span m="3550200">close</span> <span
  m="3550370">to</span> <span m="3550460">quadratic.</span> <span
  m="3551360">When</span> <span m="3551600">E</span> <span m="3551780">is</span>
  <span m="3551930">big,</span> <span m="3552320">it's</span> <span
  m="3552490">going</span> <span m="3552610">to</span> <span
  m="3552670">be</span> <span m="3552800">cubic,</span> <span
  m="3553130">again.</span> <span m="3553610">So</span> <span
  m="3553920">we'll</span> <span m="3554040">never</span> <span
  m="3554280">be</span> <span m="3554510">worse</span> <span
  m="3554980">than</span> <span m="3555380">this</span> <span
  m="3555930">Floyd-Warshall</span> <span m="3556250">algorithm.</span> <span
  m="3557400">But</span> <span m="3558110">for</span> <span
  m="3558470">sparse</span> <span m="3558740">graphs it's</span> <span
  m="3558850">better.</span></p><p>&nbsp;</p><p><span m="3574580">OK.</span>
  <span m="3575570">Johnson's</span> <span m="3576070">algorithm.</span> <span
  m="3589660">I was</span> <span m="3589690">going</span> <span
  m="3589790">to</span> <span m="3589840">make</span> <span
  m="3590000">some</span> <span m="3590160">joke</span> <span
  m="3590370">about</span> <span m="3590570">Johnson and</span> <span
  m="3590950">Johnson,</span> <span m="3591360">but</span> <span
  m="3591550">I</span> <span m="3591660">will</span> <span
  m="3592050">pass.</span> <span m="3593330">So</span> <span
  m="3594310">Johnson's</span> <span m="3594700">algorithm--</span> <span
  m="3595650">I mean,</span> <span m="3595790">dp</span> <span
  m="3596160">is</span> <span m="3596290">five</span> <span
  m="3596510">steps,</span> <span m="3596620">but</span> <span
  m="3596870">Johnson's</span> <span m="3597140">algorithm's</span> <span
  m="3597550">only</span> <span m="3597770">three</span> <span
  m="3597990">steps--</span> <span m="3598620">clearly</span> <span
  m="3598970">simpler.</span> <span m="3599940">It's</span> <span
  m="3600570">actually</span> <span m="3600860">much</span> <span
  m="3601050">more</span> <span m="3601180">complicated,</span> <span
  m="3601800">but</span> <span m="3602740">it's</span> <span
  m="3602850">all</span> <span m="3603000">about</span> <span
  m="3603180">what</span> <span m="3603300">the</span> <span
  m="3603380">steps</span> <span m="3603690">are.</span></p><p><span
  m="3605150">So</span> <span m="3605250">here's</span> <span
  m="3605520">the</span> <span m="3605640">crazy</span> <span
  m="3606210">idea</span> <span m="3606520">in</span> <span
  m="3606670">Johnson's</span> <span m="3607050">algorithm.</span> <span
  m="3608890">We're</span> <span m="3609110">going</span> <span
  m="3609370">to</span> <span m="3609740">change</span> <span
  m="3610290">the</span> <span m="3610420">weights</span> <span
  m="3610750">on</span> <span m="3610850">the</span> <span
  m="3610990">edges.</span> <span m="3612130">And</span> <span
  m="3612280">to</span> <span m="3612350">do</span> <span
  m="3612560">that,</span> <span m="3612940">we're</span> <span
  m="3613130">going</span> <span m="3613420">to</span> <span
  m="3615640">assign</span> <span m="3616100">weights</span> <span
  m="3616370">to</span> <span m="3616470">vertices.</span></p><p><span
  m="3617790">We're</span> <span m="3617880">going</span> <span
  m="3617970">to</span> <span m="3618230">choose</span> <span
  m="3618460">a</span> <span m="3618520">function</span> <span
  m="3618900">h.</span> <span m="3619410">Think</span> <span
  m="3619580">of</span> <span m="3619680">it</span> <span m="3619780">as</span>
  <span m="3619900">a</span> <span m="3619960">height</span> <span
  m="3620210">function,</span> <span m="3620530">I</span> <span
  m="3620590">guess,</span> <span m="3621380">that</span> <span
  m="3621460">maps</span> <span m="3621730">vertices</span> <span
  m="3622210">to</span> <span m="3622330">real</span> <span
  m="3622500">numbers.</span> <span m="3624180">And</span> <span
  m="3624360">then,</span> <span m="3625120">we're</span> <span
  m="3625340">going</span> <span m="3625500">to</span> <span
  m="3626530">define</span> <span m="3627010">w</span> <span
  m="3627480">sub</span> <span m="3627830">h</span> <span m="3628840">of</span>
  <span m="3629000">u,v.</span> <span m="3629710">This</span> <span
  m="3629860">is</span> <span m="3629970">a</span> <span m="3630040">new</span>
  <span m="3630440">way</span> <span m="3631160">to</span> <span
  m="3631290">think</span> <span m="3631470">about</span> <span
  m="3631720">edge</span> <span m="3632130">weights</span> <span
  m="3632810">that</span> <span m="3632910">depends</span> <span
  m="3633250">on</span> <span m="3633350">h</span> <span
  m="3634280">that's</span> <span m="3634680">defined</span> <span
  m="3634920">in</span> <span m="3635020">a</span> <span
  m="3635070">simple</span> <span m="3635380">way.</span> <span m="3635730">It's
  the</span> <span m="3635860">old</span> <span m="3636180">edge</span> <span
  m="3636340">weight</span> <span m="3637920">plus</span> <span
  m="3639170">h</span> <span m="3639410">of</span> <span m="3639520">u</span>
  <span m="3640230">minus</span> <span m="3640820">h</span> <span
  m="3641240">of</span> <span m="3641660">v.</span> <span m="3643050">You</span>
  <span m="3643200">could</span> <span m="3643330">define it</span> <span
  m="3643660">the</span> <span m="3643750">other</span> <span
  m="3643900">way,</span> <span m="3644060">but</span> <span
  m="3644740">it's</span> <span m="3644860">better</span> <span
  m="3645090">to</span> <span m="3645170">be</span> <span
  m="3645290">consistent</span> <span m="3645790">here.</span></p><p><span
  m="3647600">So</span> <span m="3647730">this</span> <span
  m="3647930">is</span> <span m="3648060">a</span> <span m="3648140">way</span>
  <span m="3648290">to</span> <span m="3648430">tweak</span> <span
  m="3648840">edge</span> <span m="3649040">weights.</span> <span
  m="3650140">For</span> <span m="3650290">every</span> <span
  m="3650540">edge--</span> <span m="3651880">this</span> <span m="3652080">is
  for</span> <span m="3652190">directed</span> <span m="3652620">graphs</span>
  <span m="3652980">clearly.</span> <span m="3653990">For</span> <span
  m="3654260">u,</span> <span m="3655430">u</span> <span m="3655680">is
  the</span> <span m="3655830">beginning,</span> <span m="3656430">the</span>
  <span m="3656510">head</span> <span m="3656790">of</span> <span
  m="3656970">the--</span> <span m="3657540">I don't know</span> <span
  m="3657730">if it's</span> <span m="3657920">the</span> <span m="3657980">head
  or</span> <span m="3658190">the</span> <span m="3658300">tail--</span> <span
  m="3658670">the</span> <span m="3658780">beginning</span> <span
  m="3659240">of</span> <span m="3659340">the</span> <span
  m="3659480">edge.</span> <span m="3660520">v</span> <span m="3660720">is the
  end</span> <span m="3660940">of</span> <span m="3661020">the</span> <span
  m="3661170">edge.</span> <span m="3661800">I'm</span> <span
  m="3661900">going</span> <span m="3661990">to</span> <span
  m="3662110">add</span> <span m="3662360">on</span> <span
  m="3663050">the</span> <span m="3663250">height</span> <span
  m="3663530">of</span> <span m="3663640">h,</span> <span m="3664020">and</span>
  <span m="3664160">subtract</span> <span m="3664550">out</span> <span
  m="3664720">the</span> <span m="3664800">height</span> <span
  m="3665020">of</span> <span m="3665130">v.</span> <span
  m="3666350">OK?</span></p><p><span m="3667320">Why?</span> <span
  m="3668670">Because</span> <span m="3669580">that's</span> <span
  m="3669770">the</span> <span m="3669850">definition.</span> <span
  m="3671960">I</span> <span m="3672080">want</span> <span
  m="3672330">this</span> <span m="3672500">to</span> <span
  m="3672610">be</span> <span m="3672840">greater</span> <span
  m="3673130">than</span> <span m="3673230">or</span> <span
  m="3673270">equal</span> <span m="3673480">to</span> <span
  m="3673540">0.</span> <span m="3673910">That's the</span> <span
  m="3674340">such</span> <span m="3674620">that.</span> <span
  m="3675940">I</span> <span m="3676040">want</span> <span m="3676250">to</span>
  <span m="3676290">assign</span> <span m="3676660">a</span> <span
  m="3676700">function</span> <span m="3677070">h,</span> <span
  m="3677530">so</span> <span m="3677820">that</span> <span
  m="3678030">these</span> <span m="3678270">new</span> <span
  m="3678480">weights</span> <span m="3679300">are</span> <span
  m="3679540">all</span> <span m="3679900">greater</span> <span
  m="3680210">or</span> <span m="3680290">equal</span> <span
  m="3680520">to</span> <span m="3680580">0.</span> <span
  m="3680890">This</span> <span m="3681090">is</span> <span
  m="3681240">for</span> <span m="3681380">all</span> <span m="3682100">u</span>
  <span m="3682310">and</span> <span m="3682430">v.</span> <span
  m="3686630">Why</span> <span m="3686820">would</span> <span
  m="3686970">I</span> <span m="3687120">do that?</span></p><p><span
  m="3690515">STUDENT: To use</span> <span m="3691000">Dijkstra</span> <span
  m="3691485">instead of--</span></p><p><span m="3691970">PROFESSOR: To</span>
  <span m="3692120">use</span> <span m="3692330">Dijkstra</span> <span
  m="3692850">instead</span> <span m="3693000">of</span> <span
  m="3693430">Bellman-Ford,</span> <span m="3694790">exactly.</span> <span
  m="3696970">So</span> <span m="3697600">that's</span> <span
  m="3697870">step</span> <span m="3698020">2.</span> <span
  m="3699340">Run</span> <span m="3699570">Dijkstra</span> <span
  m="3704410">on,</span> <span m="3705650">I</span> <span
  m="3705720">guess,</span> <span m="3706080">the</span> <span
  m="3706550">usual</span> <span m="3707050">graph.</span> <span
  m="3707580">But</span> <span m="3707740">now,</span> <span
  m="3707900">this</span> <span m="3708060">new</span> <span
  m="3708250">weight</span> <span m="3708490">function,</span> <span
  m="3708850">w</span> <span m="3709150">sub</span> <span m="3709340">h,</span>
  <span m="3710510">if</span> <span m="3710690">all</span> <span
  m="3710950">the</span> <span m="3711030">weights</span> <span
  m="3711250">are</span> <span m="3711300">non-negative,</span> <span
  m="3711910">I</span> <span m="3712040">can</span> <span m="3712190">run</span>
  <span m="3712380">Dijkstra.</span> <span m="3714490">So</span> <span
  m="3714640">this</span> <span m="3714870">will</span> <span
  m="3714970">give</span> <span m="3715200">me</span> <span
  m="3715400">what</span> <span m="3715570">I</span> <span
  m="3715640">call</span> <span m="3716020">the</span> <span
  m="3716100">shortest</span> <span m="3716550">path</span> <span
  m="3717290">sub</span> <span m="3717550">h</span> <span m="3719520">of</span>
  <span m="3719845">u comma v</span> <span m="3720170">for</span> <span
  m="3720350">all</span> <span m="3720660">u</span> <span m="3720830">and</span>
  <span m="3720950">v.</span></p><p><span m="3722720">It</span> <span
  m="3722820">doesn't</span> <span m="3723110">give</span> <span
  m="3723240">me</span> <span m="3723390">the</span> <span
  m="3723500">actual</span> <span m="3723780">shortest</span> <span
  m="3724090">path</span> <span m="3724350">weights</span> <span
  m="3724580">I</span> <span m="3724650">want.</span> <span
  m="3725090">It</span> <span m="3725170">gives</span> <span m="3725350">me
  the</span> <span m="3725470">shortest</span> <span m="3725760">path
  weights</span> <span m="3726170">using</span> <span m="3726510">this</span>
  <span m="3726680">wh.</span> <span m="3728900">But</span> <span
  m="3729150">I</span> <span m="3729220">claim</span> <span
  m="3729860">that's</span> <span m="3730060">almost</span> <span
  m="3730460">the</span> <span m="3730530">same.</span> <span
  m="3733020">I</span> <span m="3733120">claim</span> <span
  m="3733420">that</span> <span m="3733580">this re-weighting</span> <span
  m="3734850">preserves</span> <span m="3736160">which</span> <span
  m="3736510">paths</span> <span m="3736960">are</span> <span
  m="3737070">shortest.</span> <span m="3738970">Because--</span> <span
  m="3740390">so</span> <span m="3740530">in</span> <span
  m="3740630">particular,</span> <span m="3741280">I</span> <span
  m="3741330">claim</span> <span m="3744130">that</span> <span
  m="3744680">delta</span> <span m="3745370">of</span> <span
  m="3745705">u,v</span> <span m="3747790">is</span> <span
  m="3748130">delta</span> <span m="3748560">sub</span> <span
  m="3748630">h</span> <span m="3748780">of</span> <span
  m="3749260">u,v--</span> <span m="3750890">should</span> <span
  m="3751080">be</span> <span m="3751180">the</span> <span
  m="3751430">other</span> <span m="3751640">way--</span> <span
  m="3752790">minus</span> <span m="3753350">h</span> <span
  m="3753570">of</span> <span m="3753690">u</span> <span m="3754900">plus</span>
  <span m="3755510">h</span> <span m="3755770">of</span> <span
  m="3755860">v.</span> <span m="3757094">OK.</span></p><p><span
  m="3757960">If</span> <span m="3758830">this</span> <span
  m="3758990">was</span> <span m="3759110">a</span> <span
  m="3759170">single</span> <span m="3759550">edge,</span> <span
  m="3759800">you</span> <span m="3759910">can</span> <span
  m="3760040">see</span> <span m="3760230">I'm</span> <span
  m="3760320">just</span> <span m="3760500">cancelling</span> <span
  m="3760980">off</span> <span m="3761150">these</span> <span
  m="3761310">terms.</span> <span m="3762270">But</span> <span
  m="3762410">in</span> <span m="3762480">fact,</span> <span
  m="3762780">I</span> <span m="3762820">claim</span> <span
  m="3763050">for</span> <span m="3763180">a</span> <span
  m="3763210">whole</span> <span m="3763460">path,</span> <span
  m="3764180">every</span> <span m="3764540">path</span> <span
  m="3765750">from</span> <span m="3765960">u</span> <span m="3766130">to</span>
  <span m="3766210">v</span> <span m="3766870">gets</span> <span
  m="3767100">changed</span> <span m="3767480">by</span> <span
  m="3767610">exactly</span> <span m="3768170">the</span> <span
  m="3768290">same</span> <span m="3768570">amount.</span> <span
  m="3770420">So</span> <span m="3770530">this</span> <span
  m="3770700">is</span> <span m="3770950">a</span> <span
  m="3771050">claim</span> <span m="3771270">about</span> <span
  m="3771500">the</span> <span m="3771560">shortest</span> <span
  m="3771920">path--</span> <span m="3772180">in</span> <span
  m="3772270">effect,</span> <span m="3772530">a</span> <span
  m="3772570">claim</span> <span m="3772780">for</span> <span
  m="3772980">every</span> <span m="3774130">path</span> <span
  m="3774490">from</span> <span m="3774740">u</span> <span m="3774880">to</span>
  <span m="3774950">v,</span> <span m="3775100">shortest</span> <span
  m="3775480">or</span> <span m="3775570">not.</span> <span
  m="3777320">If</span> <span m="3777530">I</span> <span
  m="3777590">measure</span> <span m="3778090">it</span> <span
  m="3778210">in</span> <span m="3779540">regular</span> <span
  m="3780030">weights</span> <span m="3780300">w,</span> <span
  m="3781340">versus</span> <span m="3781960">weights</span> <span
  m="3782260">w</span> <span m="3782520">sub</span> <span m="3782700">h,</span>
  <span m="3783350">the</span> <span m="3783520">only</span> <span
  m="3783790">difference</span> <span m="3784180">is</span> <span
  m="3784320">this</span> <span m="3784560">fixed</span> <span
  m="3784990">amount,</span> <span m="3785280">which</span> <span
  m="3785470">depends</span> <span m="3785890">only</span> <span
  m="3786290">on</span> <span m="3786460">u</span> <span m="3786650">and</span>
  <span m="3786790">v--</span> <span m="3787070">does</span> <span
  m="3787260">not</span> <span m="3787600">depend</span> <span
  m="3788100">on</span> <span m="3788310">the</span> <span
  m="3788400">path.</span> <span m="3789700">And</span> <span
  m="3789850">therefore,</span> <span m="3791060">which</span> <span
  m="3791320">paths</span> <span m="3791650">are</span> <span
  m="3791720">shortest</span> <span m="3792150">are</span> <span
  m="3792220">preserved.</span></p><p><span m="3793410">And</span> <span
  m="3793480">so</span> <span m="3793580">when we</span> <span
  m="3793760">compute</span> <span m="3794140">these</span> <span
  m="3794230">shortest</span> <span m="3794660">path</span> <span
  m="3794920">weights,</span> <span m="3795590">we</span> <span
  m="3795720">can</span> <span m="3795860">translate</span> <span
  m="3796430">them</span> <span m="3796580">back</span> <span
  m="3796890">to</span> <span m="3797120">what</span> <span
  m="3797530">they</span> <span m="3797630">should</span> <span
  m="3797880">be</span> <span m="3798030">in</span> <span m="3798590">the</span>
  <span m="3798710">original</span> <span m="3799090">weighting</span> <span
  m="3799380">function.</span> <span m="3800340">And</span> <span
  m="3800520">furthermore,</span> <span m="3800910">if</span> <span
  m="3800980">you</span> <span m="3801080">have</span> <span
  m="3801300">parent</span> <span m="3801580">pointers,</span> <span
  m="3801970">and you</span> <span m="3802080">actually</span> <span
  m="3802350">find</span> <span m="3802650">the</span> <span
  m="3802730">paths,</span> <span m="3803620">the paths</span> <span
  m="3803890">will</span> <span m="3803960">be</span> <span
  m="3804070">the</span> <span m="3804170">same.</span> <span
  m="3804830">Shortest</span> <span m="3805120">paths</span> <span
  m="3805410">will be</span> <span m="3805530">the</span> <span
  m="3805630">same.</span> <span m="3807490">OK.</span> <span
  m="3807820">So</span> <span m="3808200">let's</span> <span
  m="3808480">prove</span> <span m="3808770">that</span> <span
  m="3809000">claim.</span> <span m="3809670">It's</span> <span
  m="3809790">actually</span> <span m="3810090">really</span> <span
  m="3810320">simple.</span></p><p>&nbsp;</p><p><span m="3826540">Let's</span>
  <span m="3826790">look</span> <span m="3826920">at</span> <span
  m="3826970">a</span> <span m="3827020">path</span> <span
  m="3835230">from</span> <span m="3835300">u</span> <span m="3835510">to</span>
  <span m="3835580">v.</span> <span m="3837840">So</span> <span
  m="3838310">I'm</span> <span m="3838440">going</span> <span
  m="3838570">to</span> <span m="3838650">label</span> <span
  m="3838990">the</span> <span m="3839060">vertices</span> <span
  m="3839480">along</span> <span m="3839690">the</span> <span
  m="3839760">path.</span> <span m="3840620">V0</span> <span
  m="3841470">is</span> <span m="3841690">going</span> <span
  m="3841850">to</span> <span m="3841920">be</span> <span m="3842210">u.</span>
  <span m="3842520">That's</span> <span m="3842750">the</span> <span
  m="3842830">first</span> <span m="3843120">one,</span> <span
  m="3844120">then</span> <span m="3844400">V1,</span> <span
  m="3845470">then</span> <span m="3845660">V2,</span> <span
  m="3846860">and</span> <span m="3847320">so</span> <span
  m="3847560">on.</span> <span m="3847760">Let's</span> <span
  m="3847980">say</span> <span m="3848190">path</span> <span m="3848300">has
  length</span> <span m="3848950">k.</span> <span m="3850860">And</span> <span
  m="3853630">Vk</span> <span m="3854050">is</span> <span m="3854443">v.</span>
  <span m="3854836">OK,</span> <span m="3855230">that's</span> <span
  m="3855400">just</span> <span m="3855730">a</span> <span
  m="3855780">generic</span> <span m="3856230">path</span> <span
  m="3857160">from</span> <span m="3857340">u</span> <span m="3857480">to</span>
  <span m="3857550">v.</span> <span m="3858430">And</span> <span
  m="3858600">now,</span> <span m="3858960">I</span> <span
  m="3859040">want</span> <span m="3859210">to</span> <span
  m="3859270">compute</span> <span m="3860490">the</span> <span
  m="3864510">w</span> <span m="3865060">sub</span> <span m="3865320">h</span>
  <span m="3866460">of</span> <span m="3866660">that</span> <span
  m="3866880">path.</span> <span m="3869560">Excuse me.</span></p><p><span
  m="3870970">So</span> <span m="3872550">the</span> <span
  m="3872630">weight</span> <span m="3872800">of</span> <span
  m="3872880">a</span> <span m="3872940">path</span> <span m="3873250">is</span>
  <span m="3873330">just</span> <span m="3873490">the</span> <span
  m="3873560">sum</span> <span m="3873810">of</span> <span
  m="3873860">the</span> <span m="3873950">weights</span> <span
  m="3874160">the</span> <span m="3874290">edges.</span> <span
  m="3874690">So</span> <span m="3874770">I</span> <span
  m="3874850">could</span> <span m="3874960">write</span> <span
  m="3875250">this</span> <span m="3875400">as a</span> <span
  m="3875490">sum</span> <span m="3876340">from</span> <span
  m="3876690">i</span> <span m="3877000">equals</span> <span
  m="3877700">1</span> <span m="3878270">to</span> <span m="3878410">k</span>
  <span m="3879298">of</span> <span m="3879742">w</span> <span
  m="3880630">sub</span> <span m="3881030">h</span> <span m="3881476">of</span>
  <span m="3882370">Vi</span> <span m="3882480">minus</span> <span
  m="3882840">1</span> <span m="3883350">comma</span> <span
  m="3883780">Vi.</span> <span m="3884965">I think</span> <span
  m="3885420">that</span> <span m="3885870">works,</span> <span
  m="3886220">got</span> <span m="3886340">to</span> <span m="3886400">be</span>
  <span m="3886510">careful</span> <span m="3887630">not</span> <span
  m="3887840">to</span> <span m="3888540">get</span> <span
  m="3888720">the</span> <span m="3888910">indices</span> <span
  m="3889330">wrong.</span> <span m="3890750">OK,</span> <span
  m="3890960">now,</span> <span m="3891120">w</span> <span
  m="3891540">sub</span> <span m="3891730">h</span> <span m="3892550">is</span>
  <span m="3892750">defined</span> <span m="3893250">to</span> <span
  m="3893340">be</span> <span m="3893570">this</span> <span
  m="3893800">thing--</span> <span m="3895000">w</span> <span
  m="3895820">plus</span> <span m="3896440">h</span> <span m="3896660">of</span>
  <span m="3896760">u</span> <span m="3897020">minus</span> <span
  m="3897390">h</span> <span m="3897560">of</span> <span m="3897640">v.</span>
  <span m="3899380">So</span> <span m="3900090">this is</span> <span
  m="3900300">the</span> <span m="3900663">sum</span> <span m="3901390">i</span>
  <span m="3901500">equals</span> <span m="3901720">1</span> <span
  m="3902030">to</span> <span m="3902130">k</span> <span m="3903471">of</span>
  <span m="3904365">w</span> <span m="3905706">Vi</span> <span
  m="3906320">minus</span> <span m="3906680">1</span> <span
  m="3907640">Vi</span> <span m="3910040">plus</span> <span m="3913500">h</span>
  <span m="3913940">of</span> <span m="3914380">Vi</span> <span
  m="3914870">minus</span> <span m="3915160">1</span> <span
  m="3916490">minus</span> <span m="3916960">h</span> <span
  m="3917200">of</span> <span m="3917260">Vi.</span> <span
  m="3921340">What</span> <span m="3921510">does</span> <span
  m="3921610">the</span> <span m="3921700">sum</span> <span
  m="3921950">do?</span> <span m="3923510">Telescope.</span></p><p><span
  m="3937040">So</span> <span m="3937310">success--</span> <span
  m="3938080">this</span> <span m="3938430">Vi</span> <span
  m="3938860">is</span> <span m="3939000">going</span> <span
  m="3939120">to--</span> <span m="3939620">this</span> <span
  m="3939860">negative</span> <span m="3940310">h</span> <span
  m="3940490">of</span> <span m="3940560">Vi</span> <span m="3940870">is</span>
  <span m="3940980">going</span> <span m="3941080">to</span> <span
  m="3941140">cancel</span> <span m="3941550">with</span> <span
  m="3941680">the</span> <span m="3941770">plus</span> <span m="3942080">h of
  Vi</span> <span m="3942520">minus</span> <span m="3942800">1</span> <span
  m="3943000">in</span> <span m="3943100">the</span> <span
  m="3943150">next</span> <span m="3943410">term,</span> <span
  m="3943950">except</span> <span m="3944320">for</span> <span
  m="3944390">the</span> <span m="3944490">very</span> <span
  m="3944700">first</span> <span m="3944980">one</span> <span m="3945220">and
  the</span> <span m="3945290">very</span> <span m="3945470">last</span> <span
  m="3945800">one.</span> <span m="3946070">So</span> <span
  m="3946300">this</span> <span m="3946480">is</span> <span
  m="3946630">going</span> <span m="3946840">to</span> <span
  m="3946940">be</span> <span m="3948090">this</span> <span
  m="3948520">sum,</span> <span m="3949270">which</span> <span
  m="3949530">is</span> <span m="3949650">just</span> <span
  m="3949860">the</span> <span m="3949960">weight</span> <span
  m="3950160">of</span> <span m="3950400">the</span> <span
  m="3950500">path</span> <span m="3950960">according</span> <span
  m="3951320">to</span> <span m="3951480">regular</span> <span
  m="3951870">weight</span> <span m="3952010">function,</span> <span
  m="3953920">plus</span> <span m="3954620">h</span> <span m="3954880">of</span>
  <span m="3955140">V0</span> <span m="3956620">minus</span> <span
  m="3957330">h</span> <span m="3957790">of</span> <span m="3958140">Vk.</span>
  <span m="3962460">And</span> <span m="3962700">that</span> <span
  m="3962920">is</span> <span m="3963110">just</span> <span
  m="3964150">the</span> <span m="3964250">weight</span> <span
  m="3964400">to</span> <span m="3964490">the</span> <span
  m="3964610">path</span> <span m="3965960">plus</span> <span
  m="3966390">h</span> <span m="3966883">of</span> <span m="3967376">u</span>
  <span m="3968670">minus</span> <span m="3969070">h</span> <span
  m="3969325">of</span> <span m="3969580">v.</span> <span m="3972050">Did
  I</span> <span m="3972380">get</span> <span m="3972540">it</span> <span
  m="3972600">right?</span> <span m="3973480">Nope.</span> <span
  m="3975628">Yes?</span></p><p><span m="3976622">STUDENT:</span> <span
  m="3977119">[INAUDIBLE]</span> <span m="3977616">subtract</span> <span
  m="3978113">[INAUDIBLE]</span></p><p><span m="3982100">PROFESSOR: But</span>
  <span m="3982270">it's</span> <span m="3982420">not--</span> <span
  m="3982640">it's</span> <span m="3982780">opposite</span> <span
  m="3983130">of</span> <span m="3983190">what</span> <span m="3983320">I</span>
  <span m="3983370">claimed.</span> <span m="3985840">So</span> <span
  m="3987890">right,</span> <span m="3988140">because</span> <span
  m="3988440">it's the</span> <span m="3988570">other</span> <span
  m="3988710">side,</span> <span m="3989020">good.</span> <span
  m="3989520">This</span> <span m="3989740">has</span> <span
  m="3989890">h</span> <span m="3990080">on</span> <span m="3990160">the</span>
  <span m="3990240">right</span> <span m="3990430">hand</span> <span
  m="3990610">side.</span> <span m="3990850">This</span> <span
  m="3991020">has</span> <span m="3991270">not h</span> <span
  m="3991810">on</span> <span m="3991910">the</span> <span
  m="3992010">left</span> <span m="3992100">hand</span> <span
  m="3992270">side.</span> <span m="3992840">But</span> <span
  m="3992990">here,</span> <span m="3993190">I</span> <span
  m="3993240">have</span> <span m="3993440">h</span> <span m="3993710">on</span>
  <span m="3993790">the</span> <span m="3993890">left</span> <span
  m="3994130">hand</span> <span m="3994310">side,</span> <span
  m="3994820">and</span> <span m="3994980">not</span> <span m="3995160">h</span>
  <span m="3995350">on</span> <span m="3995420">the</span> <span
  m="3995500">right</span> <span m="3995670">hand</span> <span
  m="3995870">side.</span> <span m="3996860">So</span> <span
  m="3996970">if</span> <span m="3997070">I</span> <span m="3997150">flip</span>
  <span m="3997400">it</span> <span m="3997480">around,</span> <span
  m="3997920">if</span> <span m="3998020">I</span> <span m="3998080">take</span>
  <span m="3998330">these</span> <span m="3998530">two</span> <span
  m="3998650">terms,</span> <span m="3999450">put</span> <span
  m="3999590">them</span> <span m="3999700">on</span> <span
  m="3999780">the</span> <span m="3999850">left</span> <span
  m="4000070">hand</span> <span m="4000230">side,</span> <span
  m="4000440">then</span> <span m="4000590">I</span> <span
  m="4000650">get</span> <span m="4000920">this</span> <span
  m="4001270">with</span> <span m="4001480">the</span> <span
  m="4001560">right</span> <span m="4001750">sign.</span> <span
  m="4002440">Cool,</span> <span m="4002890">whew.</span> <span
  m="4003790">Self-consistent.</span> <span m="4005410">OK.</span></p><p><span
  m="4005720">So</span> <span m="4007000">this</span> <span
  m="4007260">was</span> <span m="4007700">talking</span> <span
  m="4008030">about</span> <span m="4008230">are</span> <span
  m="4008400">arbitrary</span> <span m="4009040">path.</span> <span
  m="4010360">And</span> <span m="4010450">so</span> <span
  m="4010540">this</span> <span m="4010780">is</span> <span
  m="4011030">proving</span> <span m="4011350">the</span> <span
  m="4011430">stronger</span> <span m="4011790">thing</span> <span
  m="4011990">I</span> <span m="4012050">said,</span> <span
  m="4012380">that</span> <span m="4012750">every</span> <span
  m="4013100">path</span> <span m="4013990">gets</span> <span
  m="4014550">lengthened</span> <span m="4015440">by</span> <span
  m="4016130">this</span> <span m="4016390">function,</span> <span
  m="4017480">which</span> <span m="4017560">is</span> <span
  m="4017650">purely</span> <span m="4017980">a</span> <span
  m="4018030">function</span> <span m="4018350">of</span> <span
  m="4018430">the</span> <span m="4018560">endpoints.</span> <span
  m="4019760">So</span> <span m="4019840">in</span> <span
  m="4019920">particular,</span> <span m="4020380">that</span> <span
  m="4020560">means</span> <span m="4020830">the</span> <span
  m="4020900">shortest</span> <span m="4021260">path</span> <span
  m="4021560">in</span> <span m="4021720">w</span> <span m="4022095">land</span>
  <span m="4022740">will</span> <span m="4022890">still</span> <span
  m="4023220">be</span> <span m="4023500">the</span> <span
  m="4023590">shortest</span> <span m="4023940">path</span> <span
  m="4024300">in</span> <span m="4024570">w</span> <span m="4024850">sub</span>
  <span m="4025050">h</span> <span m="4025260">land--</span> <span
  m="4026380">slightly</span> <span m="4026770">less</span> <span
  m="4027000">cool</span> <span m="4027300">name</span> <span
  m="4027730">than</span> <span m="4027980">circle</span> <span
  m="4028240">land,</span> <span m="4029008">but oh well.</span></p><p><span
  m="4031640">All</span> <span m="4031700">right,</span> <span
  m="4031960">so</span> <span m="4032220">this</span> <span
  m="4032430">means</span> <span m="4032780">shortest</span> <span
  m="4033070">paths</span> <span m="4033370">are</span> <span
  m="4033450">preserved.</span> <span m="4034040">Shortest</span> <span
  m="4034350">paths</span> <span m="4034620">are</span> <span
  m="4034650">still</span> <span m="4034880">shortest.</span> <span
  m="4040450">And</span> <span m="4040640">therefore,</span> <span
  m="4041620">if</span> <span m="4041970">I</span> <span m="4042110">look</span>
  <span m="4042320">at</span> <span m="4042390">the</span> <span
  m="4042490">delta</span> <span m="4042840">function,</span> <span
  m="4043350">which</span> <span m="4043420">is</span> <span
  m="4043540">about</span> <span m="4043920">the</span> <span
  m="4044000">shortest</span> <span m="4044330">path</span> <span
  m="4044590">weights,</span> <span m="4045810">this</span> <span
  m="4046260">claim</span> <span m="4046530">holds.</span> <span
  m="4047890">So</span> <span m="4048070">that's</span> <span
  m="4048300">the</span> <span m="4048420">proof</span> <span
  m="4048660">of</span> <span m="4048720">the</span> <span
  m="4048820">claim.</span> <span m="4053870">Cool.</span></p><p><span
  m="4058690">There's</span> <span m="4058910">one</span> <span
  m="4059400">gaping</span> <span m="4059890">problem</span> <span
  m="4060340">with</span> <span m="4060480">this</span> <span
  m="4060740">algorithm,</span> <span m="4062050">which</span> <span
  m="4062270">is</span> <span m="4062700">how</span> <span m="4063100">in</span>
  <span m="4063200">the</span> <span m="4063230">world</span> <span
  m="4063630">do</span> <span m="4063730">you</span> <span
  m="4063770">find</span> <span m="4064050">this</span> <span
  m="4064230">h?</span> <span m="4065320">If</span> <span m="4065520">we</span>
  <span m="4065650">could</span> <span m="4065800">find</span> <span
  m="4066130">h,</span> <span m="4066430">then</span> <span
  m="4066570">we</span> <span m="4066670">know</span> <span
  m="4066900">we</span> <span m="4067010">could</span> <span
  m="4067150">run</span> <span m="4067330">Dijkstra,</span> <span
  m="4068300">and</span> <span m="4068370">we</span> <span
  m="4068470">can</span> <span m="4068580">do</span> <span
  m="4068700">this</span> <span m="4068920">thing.</span> <span
  m="4070620">And</span> <span m="4071140">Dijkstra</span> <span
  m="4071560">is</span> <span m="4071660">going</span> <span
  m="4071770">to</span> <span m="4071840">cost</span> <span
  m="4072330">the</span> <span m="4072620">VE</span> <span
  m="4073060">plus</span> <span m="4073500">V</span> <span
  m="4073640">squared</span> <span m="4073960">log</span> <span
  m="4074150">V.</span> <span m="4075500">I didn't</span> <span
  m="4075640">say</span> <span m="4075840">it, but</span> <span
  m="4076050">we</span> <span m="4076190">run</span> <span m="4076940">V</span>
  <span m="4077210">times</span> <span m="4077660">Dijkstra.</span> <span
  m="4078480">All right, we</span> <span m="4078580">run</span> <span
  m="4078840">it</span> <span m="4078870">V</span> <span
  m="4078900">times.</span> <span m="4080410">That's</span> <span
  m="4080590">going</span> <span m="4080690">to</span> <span
  m="4080730">take</span> <span m="4080890">V</span> <span
  m="4081040">squared</span> <span m="4081340">log</span> <span
  m="4081540">V</span> <span m="4081820">plus</span> <span m="4082190">VE</span>
  <span m="4083110">to</span> <span m="4083250">do.</span> <span
  m="4084900">This</span> <span m="4085210">is</span> <span
  m="4085330">just</span> <span m="4085500">going</span> <span
  m="4085600">to</span> <span m="4085660">take</span> <span
  m="4085850">quadratic</span> <span m="4086320">time,</span> <span
  m="4086600">V</span> <span m="4086690">squared</span> <span
  m="4087200">to</span> <span m="4087530">update</span> <span
  m="4087870">all</span> <span m="4088020">the</span> <span
  m="4088120">weights,</span> <span m="4088890">update</span> <span
  m="4089280">all</span> <span m="4089410">the</span> <span
  m="4089500">delta</span> <span m="4089760">functions.</span></p><p><span
  m="4091940">The</span> <span m="4092420">missing</span> <span
  m="4092730">step</span> <span m="4093050">is</span> <span
  m="4093200">how</span> <span m="4093640">do</span> <span m="4093820">we</span>
  <span m="4094090">find</span> <span m="4094630">this</span> <span
  m="4094880">weight</span> <span m="4095110">function?</span> <span
  m="4095580">I</span> <span m="4095700">claim</span> <span
  m="4096920">this</span> <span m="4097770">problem</span> <span
  m="4098529">of</span> <span m="4098840">finding</span> <span
  m="4099290">h</span> <span m="4099529">that</span> <span
  m="4099630">has</span> <span m="4099850">this</span> <span
  m="4099990">property,</span> <span m="4100779">is</span> <span
  m="4101040">very</span> <span m="4101510">closely</span> <span
  m="4101880">related</span> <span m="4102300">to</span> <span
  m="4103240">shortest</span> <span m="4103750">paths.</span> <span
  m="4105750">It's</span> <span m="4105920">weird,</span> <span
  m="4106930">but</span> <span m="4107060">we're</span> <span
  m="4107180">going</span> <span m="4107270">to</span> <span
  m="4107319">use</span> <span m="4107700">shortest</span> <span
  m="4108130">paths</span> <span m="4108500">to</span> <span
  m="4108600">solve</span> <span m="4109040">shortest</span> <span
  m="4109410">paths.</span> <span m="4115189">So</span> <span
  m="4115540">let's</span> <span m="4115830">do</span> <span
  m="4115990">it.</span></p><p><span m="4120819">Step</span> <span
  m="4121170">1,</span> <span m="4123020">finding</span> <span
  m="4123350">h.</span> <span m="4125859">What</span> <span m="4126029">I</span>
  <span m="4126090">want</span> <span m="4126370">to</span> <span
  m="4126470">do,</span> <span m="4128140">so</span> <span m="4128250">I</span>
  <span m="4128300">want</span> <span m="4128529">to</span> <span
  m="4128580">have</span> <span m="4128920">w</span> <span m="4129327">of</span>
  <span m="4129734">u,v--</span> <span m="4130550">let me</span> <span
  m="4130689">just</span> <span m="4130859">copy</span> <span
  m="4131189">that</span> <span m="4131439">down--</span> <span
  m="4132250">plus</span> <span m="4132569">h</span> <span m="4132790">of</span>
  <span m="4132890">u</span> <span m="4133200">plus</span> <span m="4133630">h
  of</span> <span m="4133994">v</span> <span m="4134920">to</span> <span
  m="4135040">be</span> <span m="4135630">greater</span> <span
  m="4135939">than</span> <span m="4136040">or</span> <span
  m="4136140">equal</span> <span m="4136170">to</span> <span
  m="4136229">0.</span> <span m="4140149">Whoops,</span> <span
  m="4141600">minus.</span> <span m="4144609">I'm going to</span> <span
  m="4144649">put</span> <span m="4144830">the</span> <span
  m="4144970">h's</span> <span m="4145370">on</span> <span m="4145529">to</span>
  <span m="4145640">the</span> <span m="4145810">right</span> <span
  m="4146029">hand</span> <span m="4146240">side,</span> <span
  m="4146550">and</span> <span m="4146640">then</span> <span
  m="4147130">flip</span> <span m="4147380">it</span> <span
  m="4147470">all</span> <span m="4147660">around.</span> <span
  m="4148040">So</span> <span m="4148120">this</span> <span
  m="4148330">is</span> <span m="4148450">like</span> <span
  m="4148649">saying</span> <span m="4148939">h</span> <span
  m="4149069">of</span> <span m="4149250">v</span> <span
  m="4149979">minus</span> <span m="4150529">h</span> <span
  m="4150779">of</span> <span m="4150890">u</span> <span m="4152279">is</span>
  <span m="4153069">less</span> <span m="4153399">than</span> <span
  m="4153550">or</span> <span m="4153640">equal</span> <span
  m="4153930">to</span> <span m="4155020">w</span> <span m="4155495">of</span>
  <span m="4155970">u,v</span> <span m="4159540">for</span> <span
  m="4159740">all</span> <span m="4160090">u</span> <span m="4160279">and</span>
  <span m="4160390">v.</span></p><p><span m="4165910">This</span> <span
  m="4166109">is</span> <span m="4166279">a</span> <span
  m="4166540">problem</span> <span m="4166990">we</span> <span
  m="4167100">want</span> <span m="4167279">to</span> <span
  m="4167330">solve,</span> <span m="4167700">right?</span> <span
  m="4168170">w's</span> <span m="4168569">are</span> <span
  m="4168630">given.</span> <span m="4169330">h's</span> <span
  m="4169710">are</span> <span m="4169840">unknowns.</span> <span
  m="4170990">This</span> <span m="4171149">is</span> <span
  m="4171279">called</span> <span m="4171560">a</span> <span
  m="4171649">system</span> <span m="4172109">of</span> <span
  m="4172229">difference</span> <span
  m="4172600">constraints.</span></p><p><span m="4175375">If</span> <span
  m="4175810">you've</span> <span m="4175910">heard</span> <span
  m="4176050">about</span> <span m="4177229">linear</span> <span
  m="4177540">programming,</span> <span m="4178189">for</span> <span
  m="4178279">example,</span> <span m="4178779">this</span> <span
  m="4178950">is</span> <span m="4179069">a</span> <span
  m="4179140">special</span> <span m="4179520">case</span> <span
  m="4179840">of</span> <span m="4179970">linear</span> <span
  m="4180200">programming.</span> <span m="4182810">Don't</span> <span
  m="4183010">worry</span> <span m="4183149">if</span> <span
  m="4183240">you</span> <span m="4183340">haven't</span> <span
  m="4183609">heard,</span> <span m="4183850">because</span> <span
  m="4184109">this</span> <span m="4184250">is</span> <span
  m="4184359">an</span> <span m="4184500">easy</span> <span
  m="4185080">special</span> <span m="4185359">case.</span> <span
  m="4185930">We're</span> <span m="4186060">going</span> <span
  m="4186140">to</span> <span m="4186189">solve</span> <span
  m="4186450">it</span> <span m="4186529">much</span> <span
  m="4186770">faster</span> <span m="4187160">than</span> <span
  m="4187300">we</span> <span m="4187390">know</span> <span
  m="4187520">how</span> <span m="4187630">to</span> <span
  m="4187710">solve</span> <span m="4188060">lineal</span> <span
  m="4188300">programs.</span> <span m="4189760">It's</span> <span
  m="4190120">a</span> <span m="4190160">particular</span> <span
  m="4190710">kind</span> <span m="4190870">of</span> <span
  m="4190950">thing.</span> <span m="4191100">This is</span> <span
  m="4191279">actually</span> <span m="4191620">useful</span> <span
  m="4191930">problem.</span></p><p><span m="4192370">You</span> <span
  m="4192470">could</span> <span m="4192630">think</span> <span
  m="4192819">of,</span> <span m="4193680">these</span> <span
  m="4193779">are</span> <span m="4193850">maybe</span> <span
  m="4194270">times</span> <span m="4194860">that</span> <span
  m="4195090">various</span> <span m="4195460">events</span> <span
  m="4195780">happen.</span> <span m="4196530">And</span> <span
  m="4196690">these</span> <span m="4196850">are</span> <span
  m="4196950">constraints</span> <span m="4197710">about</span> <span
  m="4198040">pairs</span> <span m="4198340">of</span> <span
  m="4198450">them.</span> <span m="4198710">Says,</span> <span
  m="4199060">well,</span> <span m="4200050">the</span> <span
  m="4200150">start</span> <span m="4200450">time</span> <span
  m="4200740">of</span> <span m="4200830">this</span> <span
  m="4201020">event</span> <span m="4201690">minus</span> <span
  m="4202210">the</span> <span m="4202450">end</span> <span
  m="4202650">time</span> <span m="4202860">of</span> <span
  m="4202930">that</span> <span m="4203120">event</span> <span
  m="4203440">should</span> <span m="4203620">be</span> <span
  m="4203930">less</span> <span m="4204200">than</span> <span
  m="4204300">or</span> <span m="4204400">equal</span> <span
  m="4204540">to</span> <span m="4205760">1</span> <span
  m="4206070">second.</span> <span m="4206870">You</span> <span
  m="4207020">can</span> <span m="4207470">use</span> <span
  m="4207700">this</span> <span m="4207900">to</span> <span
  m="4208000">do</span> <span m="4208720">temporal</span> <span
  m="4209220">programming,</span> <span m="4210260">if</span> <span
  m="4210700">you</span> <span m="4210800">could</span> <span
  m="4210940">solve</span> <span m="4211200">these</span> <span
  m="4211330">systems.</span></p><p><span m="4211690">We're</span> <span
  m="4211840">going</span> <span m="4211940">to</span> <span
  m="4211990">solve</span> <span m="4212300">these</span> <span
  m="4212450">systems,</span> <span m="4214450">when</span> <span
  m="4214690">they</span> <span m="4214790">have</span> <span
  m="4214980">a</span> <span m="4215040">solution.</span> <span
  m="4216560">They</span> <span m="4216680">don't</span> <span
  m="4216900">always</span> <span m="4217120">have</span> <span
  m="4217290">a</span> <span m="4217330">solution,</span> <span
  m="4219060">which</span> <span m="4219330">is</span> <span
  m="4219700">a</span> <span m="4219820">bit</span> <span
  m="4220060">weird,</span> <span m="4220350">because</span> <span
  m="4220810">we're</span> <span m="4221170">relying</span> <span
  m="4221750">on</span> <span m="4221900">them</span> <span
  m="4222130">always</span> <span m="4222570">having</span> <span
  m="4222880">a</span> <span m="4222950">solution.</span> <span
  m="4223330">How</span> <span m="4223610">can</span> <span
  m="4223730">that</span> <span m="4223950">be?</span> <span
  m="4226370">Negative</span> <span m="4226700">weight</span> <span
  m="4226900">cycles.</span> <span m="4228650">This</span> <span
  m="4228840">is</span> <span m="4228980">all</span> <span
  m="4229170">going</span> <span m="4229290">to</span> <span
  m="4229370">work,</span> <span m="4230280">when</span> <span
  m="4230460">we</span> <span m="4230790">don't</span> <span
  m="4231110">have</span> <span m="4231350">negative</span> <span
  m="4231690">weight</span> <span m="4231910">cycles.</span></p><p><span
  m="4234060">And</span> <span m="4234350">that's</span> <span
  m="4234610">exactly</span> <span m="4235320">going</span> <span
  m="4235450">to</span> <span m="4235520">be</span> <span m="4235630">the</span>
  <span m="4235730">case</span> <span m="4236080">when</span> <span
  m="4236800">this</span> <span m="4237320">system</span> <span
  m="4237610">of</span> <span m="4237680">difference</span> <span
  m="4238020">constraints</span> <span m="4238750">has</span> <span
  m="4239000">no</span> <span m="4239120">solution.</span> <span
  m="4241110">So</span> <span m="4242390">let</span> <span m="4242770">me</span>
  <span m="4243100">show</span> <span m="4243400">you</span> <span
  m="4243600">that</span> <span m="4245120">in</span> <span m="4245270">a</span>
  <span m="4245330">couple</span> <span m="4245610">of</span> <span
  m="4245780">steps.</span> <span m="4247270">First</span> <span
  m="4247440">theorem</span> <span m="4248290">is</span> <span
  m="4248470">that</span> <span m="4248700">if</span> <span
  m="4249610">the</span> <span m="4249720">graph</span> <span
  m="4251440">V,E,w</span> <span m="4252820">has</span> <span
  m="4253280">a</span> <span m="4253340">negative</span> <span
  m="4253640">weight</span> <span m="4253820">cycle,</span> <span
  m="4262200">then</span> <span m="4262770">that</span> <span
  m="4263080">system</span> <span m="4263690">has</span> <span
  m="4264020">no</span> <span m="4264140">solution--</span> <span
  m="4272730">no</span> <span m="4272880">solution</span> <span
  m="4273510">to</span> <span m="4273880">the</span> <span
  m="4273920">difference</span> <span m="4274280">constraints.</span> <span
  m="4279420">This</span> <span m="4279610">is</span> <span
  m="4279730">going</span> <span m="4279880">to</span> <span
  m="4279960">be,</span> <span m="4280320">again,</span> <span
  m="4280720">an</span> <span m="4281090">easy</span> <span
  m="4281340">proof,</span> <span m="4284680">kind</span> <span
  m="4284920">of</span> <span m="4285000">similar</span> <span
  m="4285380">to</span> <span m="4285520">last</span> <span
  m="4285810">one</span> <span m="4285930">actually.</span></p><p><span
  m="4289110">So</span> <span m="4290280">consider</span> <span
  m="4292930">a</span> <span m="4293070">negative</span> <span
  m="4293340">weight</span> <span m="4293510">cycle.</span> <span
  m="4302660">Let's</span> <span m="4302920">call</span> <span
  m="4303280">it</span> <span m="4303560">V0,</span> <span m="4304600">to</span>
  <span m="4304810">V1,</span> <span m="4305670">to</span> <span
  m="4306530">V2,</span> <span m="4308960">to</span> <span
  m="4309270">Vk,</span> <span m="4309980">back</span> <span
  m="4310320">to</span> <span m="4310520">V0.</span> <span m="4311470">So the
  claim</span> <span m="4311840">is</span> <span m="4312110">the</span> <span
  m="4312200">sum</span> <span m="4312430">of</span> <span
  m="4312480">these</span> <span m="4312650">weights</span> <span
  m="4313330">is</span> <span m="4313500">negative.</span> <span
  m="4314790">And</span> <span m="4314960">now,</span> <span
  m="4315080">I'm</span> <span m="4315160">just</span> <span
  m="4315310">going</span> <span m="4315420">to</span> <span
  m="4315510">write</span> <span m="4315750">down</span> <span
  m="4316050">these</span> <span m="4316260">constraints,</span> <span
  m="4317040">which</span> <span m="4317630">are</span> <span
  m="4317820">supposed</span> <span m="4318360">to</span> <span
  m="4319140">have</span> <span m="4319390">a</span> <span
  m="4319430">solution,</span> <span m="4319940">or</span> <span
  m="4320010">maybe</span> <span m="4320200">they</span> <span
  m="4320310">won't.</span></p><p><span m="4321200">So</span> <span
  m="4321330">if</span> <span m="4321480">it</span> <span m="4321580">has</span>
  <span m="4321760">a</span> <span m="4321810">solution,</span> <span
  m="4322230">then</span> <span m="4322430">this</span> <span
  m="4322670">must</span> <span m="4322900">be</span> <span
  m="4323030">true,</span> <span m="4324140">where</span> <span
  m="4324350">u</span> <span m="4324530">and</span> <span m="4324660">v</span>
  <span m="4325080">are</span> <span m="4325220">plugged</span> <span
  m="4325490">into</span> <span m="4325690">be</span> <span
  m="4326750">Vi</span> <span m="4327200">and</span> <span m="4327370">Vi</span>
  <span m="4327530">minus</span> <span m="4327910">1,</span> <span
  m="4328860">because</span> <span m="4329050">those</span> <span
  m="4329230">are</span> <span m="4329330">all</span> <span
  m="4329490">edges.</span> <span m="4331480">So</span> <span
  m="4334230">I'm</span> <span m="4334280">going</span> <span
  m="4334390">to</span> <span m="4334450">write</span> <span
  m="4334670">h</span> <span m="4335670">of</span> <span m="4336670">V1</span>
  <span m="4337870">minus</span> <span m="4338270">h</span> <span
  m="4338590">of</span> <span m="4338910">V0</span> <span m="4340530">is</span>
  <span m="4340960">less</span> <span m="4341270">than</span> <span
  m="4341380">or</span> <span m="4341430">equal</span> <span
  m="4341640">to</span> <span m="4341890">w</span> <span m="4342250">of</span>
  <span m="4342610">V0</span> <span m="4343970">wV1.</span> <span
  m="4345730">And</span> <span m="4345900">then</span> <span
  m="4346030">h</span> <span m="4346430">of</span> <span m="4346490">V2</span>
  <span m="4347870">minus</span> <span m="4348320">h</span> <span
  m="4348630">of</span> <span m="4349550">V1</span> <span m="4350920">less than
  or</span> <span m="4351150">equal</span> <span m="4351360">to</span> <span
  m="4351430">w</span> <span m="4351890">of</span> <span m="4352350">V1</span>
  <span m="4353450">V2.</span> <span m="4354842">Repeat</span> <span
  m="4355300">that</span> <span m="4355500">k</span> <span
  m="4355690">times,</span> <span m="4356745">I'm</span> <span
  m="4357080">going</span> <span m="4357180">to</span> <span
  m="4357230">get</span> <span m="4357430">h</span> <span m="4357760">of</span>
  <span m="4357970">Vk</span> <span m="4359100">minus</span> <span
  m="4359510">h</span> <span m="4359840">of</span> <span m="4361410">Vk</span>
  <span m="4361650">minus</span> <span m="4361990">1.</span> <span
  m="4369450">And</span> <span m="4369850">then,</span> <span
  m="4370090">the</span> <span m="4370160">last</span> <span
  m="4370480">one,</span> <span m="4370680">the</span> <span
  m="4370780">wrap</span> <span m="4371030">around</span> <span m="4372000">h
  of</span> <span m="4372310">V0</span> <span m="4373831">minus</span> <span
  m="4374290">h of</span> <span m="4374730">Vk</span> <span m="4377620">w</span>
  <span m="4377850">of</span> <span m="4380110">V--</span> <span
  m="4382043">did</span> <span m="4382504">I get it</span> <span
  m="4382965">right--</span> <span m="4385410">Vk</span> <span
  m="4387060">V0.</span></p><p><span m="4390760">What do</span> <span
  m="4390940">I</span> <span m="4391010">do</span> <span m="4391170">with</span>
  <span m="4391270">these</span> <span m="4391680">inequalities?</span> <span
  m="4393470">Sum</span> <span m="4393850">them.</span> <span
  m="4399870">Time</span> <span m="4400320">for a</span> <span
  m="4400470"><i>Good</i></span> <span m="4400620"><i>Will</i></span> <span
  m="4400790"><i>Hunting</i></span> <span m="4401090">moment--</span> <span
  m="4404132">do you</span> <span m="4404610">remember?</span> <span
  m="4405465">I hope</span> <span m="4405940">we've</span> <span
  m="4406200">all</span> <span m="4406320">seen</span> <span
  m="4406500"><i>Good</i></span> <span m="4406640"><i>Will</i></span> <span
  m="4406770"><i>Hunting.</i></span> <span m="4408050">I</span> <span
  m="4408200">don't</span> <span m="4408320">have</span> <span
  m="4408430">a</span> <span m="4408490">janitor</span> <span
  m="4408930">here,</span> <span m="4409300">so</span> <span
  m="4410090">I</span> <span m="4410180">have</span> <span m="4410360">to</span>
  <span m="4411050">do</span> <span m="4411290">all</span> <span
  m="4411960">cancels</span> <span m="4412370">by</span> <span
  m="4412530">hand--</span> <span m="4413940">and</span> <span
  m="4414520">this.</span></p><p><span m="4415810">So</span> <span
  m="4416250">I</span> <span m="4416370">end</span> <span m="4416590">up</span>
  <span m="4416760">with</span> <span m="4416960">0</span> <span
  m="4417980">at</span> <span m="4418020">the</span> <span
  m="4418090">bottom.</span> <span m="4419640">Everything</span> <span
  m="4420060">cancels,</span> <span m="4421300">and</span> <span
  m="4421400">then,</span> <span m="4421700">over</span> <span
  m="4421930">here</span> <span m="4422340">I</span> <span
  m="4422480">have</span> <span m="4423830">less</span> <span
  m="4424150">than</span> <span m="4424250">or</span> <span
  m="4424350">equal</span> <span m="4424460">to</span> <span
  m="4424700">the</span> <span m="4424860">weight</span> <span
  m="4425710">of</span> <span m="4426280">the</span> <span
  m="4426370">whole</span> <span m="4426540">cycle.</span> <span
  m="4427230">I'm</span> <span m="4427310">just adding</span> <span
  m="4427600">up</span> <span m="4427710">the</span> <span
  m="4427800">weight</span> <span m="4427970">of</span> <span
  m="4428050">the</span> <span m="4428130">cycle.</span> <span m="4428490">I
  didn't</span> <span m="4428620">give</span> <span m="4428730">the</span> <span
  m="4428820">cycle</span> <span m="4429120">a</span> <span
  m="4429170">name--</span> <span m="4429990">call it</span> <span
  m="4430280">C.</span></p><p><span m="4431730">Now,</span> <span
  m="4431900">the</span> <span m="4432290">cycle</span> <span
  m="4432650">has</span> <span m="4432900">negative</span> <span
  m="4433290">weight.</span> <span m="4433500">So</span> <span
  m="4433580">this</span> <span m="4433780">is</span> <span
  m="4433990">less</span> <span m="4434420">than</span> <span
  m="4434630">zero,</span> <span m="4435040">strictly</span> <span
  m="4435390">less</span> <span m="4435590">than</span> <span
  m="4435690">zero.</span> <span m="4436010">So</span> <span
  m="4436150">we're</span> <span m="4436280">saying</span> <span
  m="4437050">that</span> <span m="4437430">0</span> <span m="4438450">is</span>
  <span m="4438610">strictly</span> <span m="4439020">less</span> <span
  m="4439270">than</span> <span m="4439390">0.</span> <span
  m="4439690">That's</span> <span m="4439900">not</span> <span
  m="4440060">true.</span> <span m="4441170">So</span> <span
  m="4441200">that</span> <span m="4441360">means</span> <span
  m="4441520">there's</span> <span m="4441720">no</span> <span
  m="4441960">way</span> <span m="4442110">to</span> <span
  m="4442170">get</span> <span m="4442350">all</span> <span
  m="4442560">of</span> <span m="4442640">these</span> <span
  m="4442830">constraints</span> <span m="4443250">simultaneously</span> <span
  m="4444000">true--</span> <span m="4445520">proof</span> <span m="4445800">by
  a</span> <span m="4445980">contradiction.</span></p><p><span
  m="4448460">So</span> <span m="4449100">that</span> <span
  m="4449430">establishes</span> <span m="4450090">a</span> <span
  m="4450180">connection</span> <span m="4451620">in</span> <span
  m="4451880">the</span> <span m="4452000">direction</span> <span
  m="4452480">we</span> <span m="4452620">don't</span> <span
  m="4452920">want</span> <span m="4453130">it.</span> <span
  m="4454170">What</span> <span m="4454410">we</span> <span
  m="4454540">want</span> <span m="4454870">is</span> <span
  m="4455130">they're</span> <span m="4455300">converse,</span> <span
  m="4455850">which</span> <span m="4456070">is</span> <span
  m="4456250">if</span> <span m="4456420">there's</span> <span
  m="4456630">no</span> <span m="4456960">negative</span> <span
  m="4457290">weight</span> <span m="4457420">cycle,</span> <span
  m="4458160">then</span> <span m="4458320">there</span> <span
  m="4458550">is</span> <span m="4458790">a</span> <span
  m="4458850">solution.</span> <span m="4460190">Luckily,</span> <span
  m="4460600">that</span> <span m="4460770">is</span> <span
  m="4460880">also</span> <span m="4461230">true.</span> <span
  m="4461630">But</span> <span m="4461770">this</span> <span
  m="4461920">is</span> <span m="4462030">a</span> <span
  m="4462090">little</span> <span m="4462340">easier</span> <span
  m="4462680">to</span> <span m="4462750">see.</span> <span
  m="4463740">So</span> <span m="4463870">now,</span> <span
  m="4464120">we</span> <span m="4464220">do</span> <span m="4464440">the</span>
  <span m="4464590">other</span> <span m="4464770">half.</span></p><p><span
  m="4474840">OK.</span> <span m="4481640">And</span> <span
  m="4481850">this</span> <span m="4482000">will--</span> <span m="4482660">I
  mean,</span> <span m="4482790">it's</span> <span m="4482920">going</span>
  <span m="4483020">to</span> <span m="4483080">be</span> <span
  m="4483280">constructive</span> <span m="4483860">proof.</span> <span
  m="4484120">So</span> <span m="4484250">we're</span> <span
  m="4484410">going</span> <span m="4484500">to</span> <span
  m="4484560">actually</span> <span m="4484880">know</span> <span
  m="4485530">how</span> <span m="4485830">to</span> <span
  m="4485930">solve</span> <span m="4486220">this</span> <span
  m="4486400">problem</span> <span m="4490436">with</span> <span
  m="4490900">an</span> <span m="4491210">algorithm.</span> <span
  m="4509670">So</span> <span m="4509870">it's</span> <span
  m="4509970">going</span> <span m="4510080">to</span> <span
  m="4510150">be--</span> <span m="4511250">there</span> <span
  m="4511630">is</span> <span m="4511740">a</span> <span
  m="4511840">negative</span> <span m="4512120">weight</span> <span
  m="4512310">cycle</span> <span m="4512660">if</span> <span
  m="4512840">and</span> <span m="4512910">only</span> <span
  m="4513130">if</span> <span m="4513280">there's</span> <span
  m="4513450">no</span> <span m="4513580">solution.</span> <span
  m="4514270">So</span> <span m="4514640">in</span> <span
  m="4514940">particular,</span> <span m="4515315">the</span> <span
  m="4515690">case</span> <span m="4515890">we</span> <span
  m="4515980">care</span> <span m="4516160">about</span> <span
  m="4517000">is</span> <span m="4517250">if</span> <span
  m="4517410">there's</span> <span m="4517580">no</span> <span
  m="4517760">negative</span> <span m="4518070">weight</span> <span
  m="4518280">cycle,</span> <span m="4519160">then</span> <span
  m="4519310">there</span> <span m="4519450">is</span> <span
  m="4519570">a</span> <span m="4519630">solution.</span> <span
  m="4520290">We</span> <span m="4520570">kind</span> <span
  m="4520740">of</span> <span m="4520790">care</span> <span
  m="4520960">about</span> <span m="4521180">both,</span> <span
  m="4521490">but</span> <span m="4522290">this</span> <span
  m="4522550">is</span> <span m="4522650">the</span> <span
  m="4522770">more</span> <span m="4523370">practical</span> <span
  m="4523880">direction.</span> <span m="4526020">So</span> <span
  m="4526310">let's</span> <span m="4526540">prove it.</span></p><p><span
  m="4530420">You</span> <span m="4530630">can</span> <span
  m="4530780">already</span> <span m="4531160">see--</span> <span
  m="4532020">you've</span> <span m="4532150">seen</span> <span
  m="4532350">that</span> <span m="4532480">there's</span> <span
  m="4532640">a</span> <span m="4532700">connection in</span> <span
  m="4533090">negative</span> <span m="4533350">weight</span> <span
  m="4533530">cycles.</span> <span m="4534640">Now,</span> <span
  m="4535030">I'm</span> <span m="4535120">going</span> <span
  m="4535220">to</span> <span m="4535270">show</span> <span
  m="4535460">there's</span> <span m="4535620">a</span> <span
  m="4535780">real</span> <span m="4536100">connection</span> <span
  m="4536530">to</span> <span m="4536670">shortest</span> <span
  m="4537160">paths.</span> <span m="4537650">Negative</span> <span
  m="4537910">weight</span> <span m="4538090">cycles</span> <span
  m="4538460">are</span> <span m="4538540">just</span> <span
  m="4538730">kind</span> <span m="4538920">of</span> <span m="4541110">a</span>
  <span m="4541200">symptom</span> <span m="4541750">of</span> <span
  m="4542700">the</span> <span m="4543150">shortest</span> <span
  m="4543510">paths</span> <span m="4543740">being</span> <span
  m="4543920">involved.</span> <span m="4544950">So</span> <span
  m="4545370">now,</span> <span m="4545530">we're</span> <span
  m="4545610">going</span> <span m="4545700">to</span> <span
  m="4545750">use</span> <span m="4545920">shortest</span> <span
  m="4546240">paths.</span></p><p><span m="4548740">Suppose</span> <span
  m="4549140">we</span> <span m="4549250">have</span> <span
  m="4549530">some</span> <span m="4550000">graph.</span> <span
  m="4551000">I'm</span> <span m="4551520">going</span> <span
  m="4551620">to</span> <span m="4551680">draw</span> <span m="4552050">a</span>
  <span m="4552360">simple</span> <span m="4552660">little</span> <span
  m="4552890">graph</span> <span m="4556570">with</span> <span
  m="4556700">weights.</span> <span m="4561440">What</span> <span
  m="4561600">I'd</span> <span m="4561660">like</span> <span
  m="4561840">to</span> <span m="4561910">do</span> <span m="4562010">is</span>
  <span m="4562110">compute</span> <span m="4562430">shortest</span> <span
  m="4562850">path</span> <span m="4563210">from</span> <span
  m="4563450">a</span> <span m="4563500">single</span> <span
  m="4564040">source</span> <span m="4564480">in</span> <span
  m="4564600">this</span> <span m="4564770">graph.</span> <span
  m="4565790">The</span> <span m="4565890">question</span> <span
  m="4566190">is,</span> <span m="4566320">which</span> <span
  m="4566520">source?</span> <span m="4566950">Because</span> <span
  m="4568200">none</span> <span m="4568510">of</span> <span
  m="4568690">the</span> <span m="4568810">vertices--</span> <span
  m="4570060">I</span> <span m="4570210">guess</span> <span
  m="4570400">in</span> <span m="4570490">this</span> <span
  m="4570650">case,</span> <span m="4570960">this</span> <span
  m="4571090">would</span> <span m="4571190">be</span> <span
  m="4571330">a</span> <span m="4571400">pretty</span> <span
  m="4571600">good</span> <span m="4571760">source,</span> <span
  m="4572100">because</span> <span m="4572640">it</span> <span
  m="4572780">can</span> <span m="4572960">reach.</span> <span
  m="4573730">From</span> <span m="4573970">here,</span> <span
  m="4574310">I</span> <span m="4574370">can</span> <span m="4574540">get</span>
  <span m="4574690">to</span> <span m="4574760">every</span> <span
  m="4575020">node.</span></p><p><span m="4576150">But</span> <span
  m="4576330">in</span> <span m="4576450">general--</span> <span
  m="4577580">maybe</span> <span m="4577790">there's</span> <span
  m="4577970">another</span> <span m="4578190">vertex</span> <span
  m="4578580">here--</span> <span m="4583190">draw</span> <span
  m="4583370">a</span> <span m="4583470">more</span> <span
  m="4583720">complicated</span> <span m="4584250">picture.</span> <span
  m="4584900">It</span> <span m="4585030">could</span> <span
  m="4585190">be,</span> <span m="4585330">there's</span> <span
  m="4585570">no</span> <span m="4585770">one</span> <span
  m="4585990">vertex</span> <span m="4586410">that</span> <span
  m="4586490">can</span> <span m="4586670">reach</span> <span
  m="4586930">all</span> <span m="4587080">the</span> <span
  m="4587200">others.</span> <span m="4588150">For</span> <span
  m="4588270">example,</span> <span m="4588660">it may be</span> <span
  m="4588940">the</span> <span m="4589030">graph</span> <span
  m="4589260">is</span> <span m="4589380">disconnected.</span> <span
  m="4590400">That's</span> <span m="4590560">a</span> <span
  m="4590600">good</span> <span m="4590740">example.</span> <span
  m="4592060">So</span> <span m="4592280">there's</span> <span
  m="4592500">no</span> <span m="4592880">single</span> <span
  m="4593300">source</span> <span m="4593630">that</span> <span
  m="4593720">can</span> <span m="4593870">reach</span> <span
  m="4594090">everywhere.</span></p><p><span m="4594710">I</span> <span
  m="4594780">really</span> <span m="4595060">want</span> <span
  m="4595230">to</span> <span m="4595280">reach</span> <span
  m="4595520">everywhere.</span> <span m="4596280">So</span> <span
  m="4596490">what</span> <span m="4596630">am</span> <span m="4596730">I</span>
  <span m="4596800">going</span> <span m="4596930">to</span> <span
  m="4597010">do?</span> <span m="4597620">Add</span> <span m="4597870">a</span>
  <span m="4597920">new</span> <span m="4598070">source.</span> <span
  m="4602140">Call</span> <span m="4602450">it</span> <span
  m="4602650">s.</span> <span m="4603920">I'm</span> <span
  m="4604030">going</span> <span m="4604130">to</span> <span
  m="4604220">add</span> <span m="4604780">an</span> <span
  m="4604960">edge</span> <span m="4605440">to</span> <span
  m="4605630">every</span> <span m="4605980">other</span> <span
  m="4606170">vertex.</span> <span m="4606870">Now,</span> <span
  m="4607060">I</span> <span m="4607160">can</span> <span m="4607300">get</span>
  <span m="4607430">everywhere</span> <span m="4607790">from</span> <span
  m="4607920">s.</span> <span m="4609180">OK?</span> <span
  m="4609640">What</span> <span m="4609850">are</span> <span
  m="4609890">the</span> <span m="4610000">weights?</span> <span
  m="4610650">0.</span> <span m="4611300">0</span> <span
  m="4611370">sounds</span> <span m="4611610">good.</span> <span
  m="4612720">I</span> <span m="4612820">don't</span> <span
  m="4612920">want</span> <span m="4613040">to</span> <span
  m="4613110">change</span> <span m="4613570">the</span> <span
  m="4613690">weights,</span> <span m="4614000">in</span> <span
  m="4614060">some</span> <span m="4614260">sense.</span> <span
  m="4614590">So</span> <span m="4615100">I</span> <span m="4615190">put</span>
  <span m="4615340">0,</span> <span m="4615700">and</span> <span
  m="4615850">add</span> <span m="4615990">0</span> <span m="4616220">to</span>
  <span m="4616280">everything.</span> <span m="4616740">That's</span> <span
  m="4616930">not</span> <span m="4617060">going</span> <span
  m="4617150">to</span> <span m="4617220">change</span> <span
  m="4617470">much.</span></p><p><span m="4618750">Now,</span> <span
  m="4619240">notice</span> <span m="4619640">I</span> <span
  m="4619740">add</span> <span m="4619990">no</span> <span
  m="4620130">cycles</span> <span m="4620510">to</span> <span
  m="4620650">the</span> <span m="4620750">graph.</span> <span
  m="4621140">So</span> <span m="4621160">if</span> <span
  m="4621240">there</span> <span m="4621360">were</span> <span
  m="4621480">no</span> <span m="4621850">negative</span> <span
  m="4622140">weight</span> <span m="4622280">cycles</span> <span
  m="4622580">before,</span> <span m="4623280">still</span> <span
  m="4623630">no</span> <span m="4623770">negative</span> <span
  m="4624060">weight</span> <span m="4624240">cycles,</span> <span
  m="4624640">because the</span> <span m="4624860">cycles</span> <span
  m="4625280">are</span> <span m="4625370">the</span> <span
  m="4625470">same</span> <span m="4625720">as</span> <span
  m="4625830">they</span> <span m="4625910">were</span> <span
  m="4626070">before.</span> <span m="4627540">But</span> <span
  m="4627660">now,</span> <span m="4627910">from</span> <span
  m="4628120">s</span> <span m="4628290">I</span> <span m="4628460">can</span>
  <span m="4628630">reach</span> <span m="4628840">everywhere.</span> <span
  m="4629330">If there's</span> <span m="4629500">no</span> <span
  m="4629620">negative</span> <span m="4629910">weight</span> <span
  m="4630090">cycles,</span> <span m="4630440">that</span> <span
  m="4630620">means</span> <span m="4630850">there's</span> <span
  m="4631020">a</span> <span m="4631220">well-defined,</span> <span
  m="4631920">finite</span> <span m="4632510">value</span> <span
  m="4633300">for</span> <span m="4633440">delta</span> <span
  m="4633770">of</span> <span m="4633910">s comma v</span> <span
  m="4634540">for</span> <span m="4634740">all</span> <span
  m="4634980">V.</span> <span m="4635740">And</span> <span
  m="4635990">that</span> <span m="4637180">is</span> <span
  m="4637380">h.</span></p><p><span m="4639890">What?</span> <span
  m="4642722">It's</span> <span m="4643160">crazy</span> <span
  m="4643420">man.</span> <span m="4644060">All</span> <span
  m="4644545">right,</span> <span m="4645480">so</span> <span
  m="4645700">we</span> <span m="4645810">add</span> <span m="4646310">s</span>
  <span m="4646650">to</span> <span m="4646770">V.</span> <span
  m="4647810">We're</span> <span m="4647960">going</span> <span
  m="4648080">to</span> <span m="4648120">add</span> <span m="4650720">s</span>
  <span m="4651110">comma</span> <span m="4651470">v</span> <span
  m="4651913">to</span> <span m="4652356">e</span> <span m="4653820">for</span>
  <span m="4654020">all</span> <span m="4654170">V.</span> <span
  m="4655860">That's</span> <span m="4656170">the</span> <span
  m="4656290">old</span> <span m="4656500">V.</span> <span
  m="4657670">And</span> <span m="4658475">I'm going to</span> <span
  m="4658740">set</span> <span m="4658940">the</span> <span
  m="4659050">weight</span> <span m="4659410">of</span> <span
  m="4659550">s</span> <span m="4659780">comma</span> <span m="4660110">v</span>
  <span m="4660610">to</span> <span m="4660710">be</span> <span
  m="4660960">0</span> <span m="4662580">for all</span> <span
  m="4662800">V.</span> <span m="4665250">OK,</span> <span m="4665340">that's
  what i</span> <span m="4665450">just</span> <span m="4665720">did.</span>
  <span m="4666500">And</span> <span m="4666770">so</span> <span
  m="4666920">now,</span> <span m="4668480">delta</span> <span
  m="4669670">of</span> <span m="4669770">s</span> <span
  m="4669970">comma</span> <span m="4670360">v</span> <span
  m="4671430">is</span> <span m="4671670">finite</span> <span
  m="4674070">for</span> <span m="4674300">all</span> <span
  m="4674440">V.</span> <span m="4676320">It's</span> <span
  m="4676520">not</span> <span m="4676820">plus</span> <span
  m="4677140">infinity,</span> <span m="4677620">because</span> <span
  m="4677940">I</span> <span m="4678020">know</span> <span
  m="4678230">there</span> <span m="4678440">is--</span> <span
  m="4678620">it's</span> <span m="4678760">got</span> <span
  m="4678890">to</span> <span m="4678940">be</span> <span
  m="4679050">less</span> <span m="4679310">than</span> <span
  m="4679430">0,</span> <span m="4679920">right?</span> <span
  m="4680320">I</span> <span m="4680400">can</span> <span m="4680600">get</span>
  <span m="4681170">from</span> <span m="4681500">s to</span> <span
  m="4681770">everywhere.</span> <span m="4685100">So</span> <span
  m="4685220">it's</span> <span m="4685400">less</span> <span
  m="4685620">than</span> <span m="4685780">positive</span> <span
  m="4686200">infinity.</span> <span m="4686600">It's</span> <span
  m="4686720">also</span> <span m="4686960">not</span> <span
  m="4687290">negative</span> <span m="4687590">infinity,</span> <span
  m="4688030">because</span> <span m="4688340">I've</span> <span
  m="4688440">assumed</span> <span m="4688790">there's</span> <span
  m="4688970">no</span> <span m="4689150">negative</span> <span
  m="4689450">weight</span> <span m="4689640">cycles</span> <span
  m="4690170">anywhere.</span></p><p><span m="4693370">So</span> <span
  m="4694720">I'm</span> <span m="4694780">going</span> <span
  m="4694900">to</span> <span m="4694970">let</span> <span m="4695160">h
  of</span> <span m="4695550">v</span> <span m="4696320">be</span> <span
  m="4696710">delta</span> <span m="4696965">of</span> <span
  m="4697220">s,v.</span> <span m="4697710">I</span> <span
  m="4698200">claim</span> <span m="4698500">that</span> <span
  m="4698670">just</span> <span m="4698860">works,</span> <span
  m="4699760">magically.</span> <span m="4701810">That's</span> <span
  m="4701970">insane.</span> <span m="4702680">Every</span> <span
  m="4702840">time</span> <span m="4703010">I</span> <span
  m="4703070">see</span> <span m="4703230">it, it's</span> <span
  m="4703390">like,</span> <span m="4704520">got to be</span> <span
  m="4704670">crazy</span> <span m="4705160">man--</span> <span
  m="4707910">crazy</span> <span m="4708320">but</span> <span
  m="4708510">correct.</span> <span m="4709820">That's</span> <span
  m="4710040">Johnson.</span> <span m="4713210">It's</span> <span
  m="4713340">like</span> <span m="4713500">you</span> <span
  m="4713640">just</span> <span m="4713760">pray</span> <span
  m="4714150">that</span> <span m="4714300">this</span> <span
  m="4714450">happens,</span> <span m="4714980">and</span> <span
  m="4715190">it</span> <span m="4715470">works.</span> <span
  m="4716490">Why</span> <span m="4716780">would it</span> <span
  m="4717020">happen?</span> <span m="4717440">Why</span> <span
  m="4718350">would</span> <span m="4718540">it</span> <span
  m="4718700">be</span> <span m="4719640">that--</span> <span m="4721152">what
  do</span> <span m="4721640">we</span> <span m="4721890">want</span> <span
  m="4722020">to</span> <span m="4722080">say--</span> <span
  m="4722360">w</span> <span m="4723570">of</span> <span m="4723740">u,v</span>
  <span m="4725130">plus</span> <span m="4725820">h</span> <span m="4726180">of
  u</span> <span m="4727180">minus</span> <span m="4727650">h</span> <span
  m="4728085">of v--</span> <span m="4730300">we</span> <span
  m="4730430">want</span> <span m="4730680">this</span> <span
  m="4730880">to</span> <span m="4730990">be</span> <span
  m="4731230">greater</span> <span m="4731520">than</span> <span
  m="4731620">or</span> <span m="4731720">equal</span> <span
  m="4731760">to</span> <span m="4731820">0.</span></p><p><span
  m="4732880">I</span> <span m="4732980">guess</span> <span m="4733200">I</span>
  <span m="4733500">had</span> <span m="4733640">already</span> <span
  m="4733860">rewritten</span> <span m="4734450">this</span> <span
  m="4734650">way.</span> <span m="4735710">Neither</span> <span
  m="4736000">way</span> <span m="4736120">is</span> <span
  m="4736330">the</span> <span m="4736550">right</span> <span
  m="4736770">way,</span> <span m="4737330">so</span> <span
  m="4737840">it</span> <span m="4738180">doesn't</span> <span
  m="4738420">matter.</span> <span m="4738800">So</span> <span
  m="4739330">let's</span> <span m="4739500">see.</span> <span
  m="4739610">We</span> <span m="4739710">have</span> <span m="4739900">a</span>
  <span m="4739940">weight</span> <span m="4740180">of</span> <span
  m="4740290">u,v.</span> <span m="4741940">We</span> <span
  m="4742050">have</span> <span m="4742210">the</span> <span
  m="4742290">shortest</span> <span m="4742740">path</span> <span
  m="4743020">from</span> <span m="4743190">s</span> <span m="4743510">to
  u.</span> <span m="4744730">And</span> <span m="4744920">we</span> <span
  m="4745000">have</span> <span m="4745180">this</span> <span
  m="4745680">the</span> <span m="4745850">shortest</span> <span
  m="4746270">pathway</span> <span m="4747270">from</span> <span
  m="4747540">s</span> <span m="4747780">to</span> <span m="4747890">v.</span>
  <span m="4748570">We</span> <span m="4748980">want that to be</span> <span
  m="4749190">greater than or equal</span> <span m="4749760">to</span> <span
  m="4749800">0.</span> <span m="4750930">Why?</span> <span
  m="4752220">Put</span> <span m="4752490">this</span> <span
  m="4752840">over</span> <span m="4753090">there,</span> <span
  m="4755030">and</span> <span m="4755330">I</span> <span m="4755400">get</span>
  <span m="4755650">delta</span> <span m="4756230">s,v</span> <span
  m="4757740">is</span> <span m="4757830">less</span> <span
  m="4758100">than</span> <span m="4758200">or</span> <span
  m="4758300">equal</span> <span m="4758390">to</span> <span
  m="4759230">delta</span> <span m="4759600">of</span> <span
  m="4759900">s,u</span> <span m="4761480">plus</span> <span
  m="4762550">w</span> <span m="4763000">of</span> <span m="4763240">u,v,</span>
  <span m="4764200">which</span> <span m="4764420">is?</span> <span
  m="4765620">Triangle</span> <span m="4766110">inequality,</span> <span
  m="4768600">which</span> <span m="4768700">is</span> <span
  m="4768820">true.</span></p><p><span m="4774200">It</span> <span
  m="4774350">turns</span> <span m="4774620">out,</span> <span
  m="4776040">this</span> <span m="4776380">thing</span> <span
  m="4776590">we've</span> <span m="4776740">been</span> <span
  m="4777010">staring</span> <span m="4777430">at for</span> <span
  m="4777700">so</span> <span m="4777850">long</span> <span
  m="4778050">is</span> <span m="4778140">actually</span> <span
  m="4778580">just</span> <span m="4778890">triangle</span> <span
  m="4779330">inequality.</span> <span m="4780110">So</span> <span
  m="4780230">of</span> <span m="4780340">course</span> <span
  m="4780780">we</span> <span m="4780900">want</span> <span
  m="4781080">to</span> <span m="4781140">compute</span> <span
  m="4781420">shortest</span> <span m="4781770">paths,</span> <span
  m="4782240">because</span> <span m="4782550">shortest</span> <span
  m="4782870">paths</span> <span m="4783100">satisfy</span> <span
  m="4783560">triangle</span> <span m="4783920">inequality.</span> <span
  m="4785100">The</span> <span m="4785240">whole</span> <span
  m="4785560">name</span> <span m="4785800">of</span> <span
  m="4785860">the</span> <span m="4785950">game</span> <span m="4786490">in
  shortest</span> <span m="4786950">paths</span> <span m="4787250">is</span>
  <span m="4787350">to</span> <span m="4787440">find</span> <span
  m="4787900">a</span> <span m="4787950">place</span> <span
  m="4788250">where</span> <span m="4788350">you</span> <span
  m="4788470">don't</span> <span m="4788800">satisfy</span> <span
  m="4789230">triangle</span> <span m="4789570">inequality</span> <span
  m="4790300">and</span> <span m="4790530">fix</span> <span
  m="4790830">it.</span></p><p><span m="4791870">So</span> <span
  m="4792820">if</span> <span m="4793140">it</span> <span
  m="4793280">makes</span> <span m="4793530">sense,</span> <span
  m="4794240">if</span> <span m="4794350">that's</span> <span
  m="4794580">possible</span> <span m="4795100">to</span> <span
  m="4795190">do,</span> <span m="4795860">Bellman-Ford</span> <span
  m="4796680">will</span> <span m="4796910">do</span> <span
  m="4797150">it.</span> <span m="4798460">So</span> <span
  m="4798660">how</span> <span m="4798920">we're</span> <span
  m="4798990">going</span> <span m="4799100">to</span> <span
  m="4799160">do</span> <span m="4799280">step</span> <span
  m="4799570">1?</span> <span m="4799770">We're</span> <span
  m="4799890">going</span> <span m="4800000">to</span> <span
  m="4800070">run</span> <span m="4800250">Bellman-Ford</span> <span
  m="4800940">once.</span> <span m="4801770">We're</span> <span
  m="4801890">going</span> <span m="4801990">to</span> <span
  m="4802080">add</span> <span m="4802410">this</span> <span
  m="4802630">source</span> <span m="4802930">vertex,</span> <span
  m="4804150">so that</span> <span m="4804280">there</span> <span
  m="4804600">is</span> <span m="4804820">a</span> <span
  m="4804890">clear</span> <span m="4805220">source</span> <span
  m="4805610">to</span> <span m="4805750">run</span> <span
  m="4806050">Bellman-Ford</span> <span m="4806630">from,</span> <span
  m="4808040">and</span> <span m="4808220">then,</span> <span
  m="4808430">run</span> <span m="4808680">Bellman-Ford</span> <span
  m="4809300">from</span> <span m="4809650">there</span> <span
  m="4810070">only.</span> <span m="4811310">That</span> <span
  m="4811480">will</span> <span m="4811610">give</span> <span
  m="4811810">us</span> <span m="4811970">a</span> <span
  m="4812050">weight</span> <span m="4812380">function</span> <span
  m="4812770">for</span> <span m="4812900">the</span> <span
  m="4813000">vertices,</span> <span m="4813470">namely</span> <span
  m="4813780">how</span> <span m="4814410">long</span> <span
  m="4814750">does</span> <span m="4814890">it</span> <span
  m="4815020">take</span> <span m="4815320">to</span> <span
  m="4815420">get</span> <span m="4815620">from</span> <span
  m="4815800">s</span> <span m="4816040">to</span> <span
  m="4816130">those</span> <span m="4816310">vertices.</span> <span
  m="4816700">Those</span> <span m="4816920">weights</span> <span
  m="4817200">will</span> <span m="4817300">actually</span> <span
  m="4817560">all</span> <span m="4817680">be</span> <span
  m="4817800">negative.</span></p><p><span m="4818970">But</span> <span
  m="4819120">then,</span> <span m="4819330">we're</span> <span
  m="4819450">going</span> <span m="4819580">to</span> <span
  m="4819630">modify</span> <span m="4820550">all</span> <span
  m="4820840">the</span> <span m="4821020">edge</span> <span
  m="4821280">weights</span> <span m="4821610">according</span> <span
  m="4821970">to</span> <span m="4822070">this</span> <span
  m="4822410">formula,</span> <span m="4823320">which</span> <span
  m="4823520">negates</span> <span m="4823950">some</span> <span
  m="4824160">of</span> <span m="4824240">them.</span> <span
  m="4824520">So</span> <span m="4824570">some</span> <span
  m="4824800">of</span> <span m="4824840">them</span> <span
  m="4824950">are</span> <span m="4825000">going</span> <span
  m="4825110">to</span> <span m="4825160">go</span> <span m="4825310">up</span>
  <span m="4825500">some,</span> <span m="4825770">some of</span> <span
  m="4825840">them are</span> <span m="4825910">going</span> <span
  m="4826030">to</span> <span m="4826090">go</span> <span
  m="4826210">down.</span> <span m="4826600">It's</span> <span
  m="4826660">kind</span> <span m="4826830">of</span> <span
  m="4826890">weird.</span> <span m="4828110">But</span> <span
  m="4828240">when</span> <span m="4828410">we're</span> <span
  m="4828540">done,</span> <span m="4829300">all</span> <span
  m="4829610">of</span> <span m="4829720">the</span> <span
  m="4829830">weights</span> <span m="4830070">will</span> <span
  m="4830200">be</span> <span m="4830340">non-negative</span> <span
  m="4830950">because</span> <span m="4831420">we</span> <span
  m="4831540">had</span> <span m="4831730">triangle</span> <span
  m="4832150">inequality.</span> <span m="4833260">And</span> <span
  m="4833380">now,</span> <span m="4833660">we</span> <span
  m="4833780">can</span> <span m="4833920">run</span> <span
  m="4834080">Dijkstra</span> <span m="4834460">from</span> <span
  m="4834680">every</span> <span m="4834970">vertex.</span></p><p><span
  m="4836180">So</span> <span m="4836210">it's</span> <span
  m="4836310">like</span> <span m="4836480">we</span> <span
  m="4836690">bootstrap</span> <span m="4837230">a</span> <span
  m="4837270">little</span> <span m="4837450">bit.</span> <span
  m="4837580">We</span> <span m="4837670">run</span> <span
  m="4837860">Bellman-Ford</span> <span m="4838380">once,</span> <span
  m="4838800">because</span> <span m="4838940">we</span> <span
  m="4839080">know</span> <span m="4839250">it</span> <span
  m="4839390">handles</span> <span m="4840200">negative</span> <span
  m="4840490">weights.</span> <span m="4840730">It</span> <span
  m="4840860">will</span> <span m="4840960">also</span> <span
  m="4841240">tell</span> <span m="4841590">us</span> <span
  m="4841880">if</span> <span m="4842000">there are</span> <span
  m="4842150">any</span> <span m="4842290">negative</span> <span
  m="4842610">weight</span> <span m="4842810">cycles.</span> <span
  m="4843850">That's</span> <span m="4844080">why</span> <span
  m="4844220">we</span> <span m="4844330">want</span> <span
  m="4845020">this</span> <span m="4845360">theorem.</span> <span
  m="4846400">Maybe</span> <span m="4846700">Bellman-Ford</span> <span
  m="4847160">says,</span> <span m="4847480">I</span> <span
  m="4847720">can't</span> <span m="4848120">satisfy</span> <span
  m="4848640">triangle</span> <span m="4849010">inequality,</span> <span
  m="4849390">because</span> <span m="4849570">there's</span> <span
  m="4849730">a</span> <span m="4849770">negative</span> <span
  m="4850040">weight</span> <span m="4850260">cycle.</span> <span
  m="4850440">I</span> <span m="4850550">don't</span> <span
  m="4850680">know</span> <span m="4850760">what</span> <span
  m="4850900">to</span> <span m="4850990">do.</span> <span
  m="4851580">Then,</span> <span m="4851750">we</span> <span
  m="4851860">know,</span> <span m="4852190">well</span> <span
  m="4852400">actually,</span> <span m="4852780">then</span> <span
  m="4852970">there</span> <span m="4853060">was</span> <span
  m="4853230">no</span> <span m="4853360">solution.</span></p><p><span
  m="4855040">OK,</span> <span m="4855200">that's</span> <span
  m="4855710">kind</span> <span m="4855970">of</span> <span
  m="4856070">interesting.</span> <span m="4857830">But</span> <span
  m="4858460">then,</span> <span m="4858640">we'll</span> <span
  m="4858790">have</span> <span m="4858930">to</span> <span
  m="4859040">deal</span> <span m="4859300">with</span> <span
  m="4859430">the</span> <span m="4859550">shortest</span> <span
  m="4859910">paths--</span> <span m="4860990">sorry--</span> <span
  m="4861460">deal</span> <span m="4861700">with</span> <span
  m="4861830">those</span> <span m="4861980">negative</span> <span
  m="4862240">weight</span> <span m="4862410">cycles.</span> <span
  m="4862800">I</span> <span m="4862850">won't</span> <span
  m="4863060">cover</span> <span m="4863320">how</span> <span
  m="4863450">to</span> <span m="4863560">do</span> <span
  m="4863680">that</span> <span m="4863840">here.</span> <span
  m="4864060">But</span> <span m="4864210">you</span> <span
  m="4864340">can.</span> <span m="4866090">And</span> <span
  m="4866370">otherwise,</span> <span m="4866770">there's</span> <span
  m="4866920">no</span> <span m="4867060">negative</span> <span
  m="4867300">weight</span> <span m="4867490">cycles,</span> <span
  m="4867900">then</span> <span m="4868320">Bellman-Ford</span> <span
  m="4868910">finds</span> <span m="4869350">valid</span> <span
  m="4869670">h.</span> <span m="4870190">Then,</span> <span
  m="4870690">we</span> <span m="4870810">plug</span> <span
  m="4871160">that</span> <span m="4871350">h</span> <span
  m="4871700">into</span> <span m="4871950">here.</span> <span
  m="4872760">Then,</span> <span m="4873110">we</span> <span
  m="4873240">have</span> <span m="4873400">non-negative</span> <span
  m="4874000">weights.</span></p><p><span m="4874290">So</span> <span
  m="4874840">in</span> <span m="4875120">VE</span> <span
  m="4875610">time,</span> <span m="4876510">we've</span> <span
  m="4876730">reduced</span> <span m="4877230">to</span> <span
  m="4877370">the</span> <span m="4879150">non-negative</span> <span
  m="4880410">all-pair</span> <span m="4880850">shortest</span> <span
  m="4881210">paths.</span> <span m="4882000">And</span> <span
  m="4882150">then,</span> <span m="4882370">we</span> <span
  m="4882490">run</span> <span m="4882650">Dijkstra</span> <span
  m="4883000">V</span> <span m="4883160">times.</span> <span
  m="4883920">Then,</span> <span m="4884050">we</span> <span
  m="4884140">get</span> <span m="4884340">almost</span> <span
  m="4884730">our</span> <span m="4884850">answers,</span> <span
  m="4885260">but</span> <span m="4885310">we</span> <span
  m="4885420">have</span> <span m="4885590">to</span> <span
  m="4885700">modify</span> <span m="4886180">them</span> <span
  m="4886340">to</span> <span m="4886440">get</span> <span
  m="4886620">back</span> <span m="4886890">the</span> <span
  m="4887160">correct</span> <span m="4887560">weights</span> <span
  m="4888170">on our</span> <span m="4888380">shortest</span> <span
  m="4888630">paths.</span></p><p><span m="4889420">And</span> <span
  m="4889680">so</span> <span m="4889800">we</span> <span
  m="4889970">computed</span> <span m="4890620">shortest</span> <span
  m="4890970">paths</span> <span m="4891990">in</span> <span
  m="4892340">V</span> <span m="4892520">squared</span> <span
  m="4892850">log</span> <span m="4893060">V</span> <span
  m="4895440">plus</span> <span m="4896050">VE,</span> <span
  m="4896590">because</span> <span m="4897070">this</span> <span
  m="4897300">is</span> <span m="4897420">how</span> <span
  m="4897570">much</span> <span m="4897880">Dijkstra</span> <span
  m="4898240">costs,</span> <span m="4899060">and</span> <span
  m="4899200">because</span> <span m="4899480">Bellman-Ford</span> <span
  m="4900150">takes</span> <span m="4900390">less</span> <span
  m="4900720">time.</span> <span m="4901590">We're</span> <span
  m="4901740">good.</span> <span m="4903220">That's</span> <span
  m="4903430">the</span> <span m="4903500">magic.</span> <span
  m="4904600">And</span> <span m="4904720">that's</span> <span
  m="4904910">all-pairs</span> <span m="4905170">shortest</span> <span
  m="4905440">paths.</span></p>
uid: a702195e8f7de0ff95649607f39d2583
type: courses
layout: video
---
