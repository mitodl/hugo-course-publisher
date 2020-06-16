---
about_this_resource_text: >-
  <p><strong>Description:</strong> In this lecture, Professor Demaine introduces
  greedy algorithms, which make locally-best choices without regards to the
  future.</p><p><strong>Instructors:</strong> Erik Demaine</p>
embedded_media:
  - id: 3Play-3PlayYouTubeid-Stream
    media_location: tKwnms5iRBU
    parent_uid: b09226a5ff9c1d4df19cd0dd1145fda4
    title: 3Play-3Play YouTube id
    type: 3Play
    uid: 5c92f512f3c5832fc9d7dfe657ea4b2f
  - id: tKwnms5iRBU.srt
    parent_uid: b09226a5ff9c1d4df19cd0dd1145fda4
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-12-greedy-algorithms-minimum-spanning-tree/tKwnms5iRBU.srt
    title: 3play caption file
    type: null
    uid: 88a14d208f5ceb2554d7e75161a5081c
  - id: tKwnms5iRBU.pdf
    parent_uid: b09226a5ff9c1d4df19cd0dd1145fda4
    technical_location: >-
      https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-12-greedy-algorithms-minimum-spanning-tree/tKwnms5iRBU.pdf
    title: 3play pdf file
    type: null
    uid: e93a2f17d5995c3544b4d9522b7b41a7
  - id: Caption-3Play YouTube id-SRT
    parent_uid: b09226a5ff9c1d4df19cd0dd1145fda4
    title: Caption-3Play YouTube id-SRT-English - US
    type: Caption
    uid: bc40761eeb3fef64923d5fe34208fa3b
  - id: Transcript-3Play YouTube id-PDF
    parent_uid: b09226a5ff9c1d4df19cd0dd1145fda4
    title: Transcript-3Play YouTube id-PDF-English - US
    type: Transcript
    uid: 6cc220b5e02d5b72ac120e61b38ced4e
  - id: Video-YouTube-Stream
    media_location: tKwnms5iRBU
    parent_uid: b09226a5ff9c1d4df19cd0dd1145fda4
    title: Video-YouTube-Stream
    type: Video
    uid: 8c86d9f5177caab17a3aeee77061b10f
  - id: Thumbnail-YouTube-JPG
    media_location: 'https://img.youtube.com/vi/tKwnms5iRBU/default.jpg'
    parent_uid: b09226a5ff9c1d4df19cd0dd1145fda4
    title: Thumbnail-YouTube-JPG
    type: Thumbnail
    uid: c0c839987b7b14043844f5e5826fd3ce
  - id: Video-iTunesU-MP4
    media_location: 'https://itunes.apple.com/us/itunes-u/id1081126744'
    parent_uid: b09226a5ff9c1d4df19cd0dd1145fda4
    title: Video-iTunes U-MP4
    type: Video
    uid: 56a3337ef32728c55ee49299074e6dfa
  - id: Video-InternetArchive-MP4
    media_location: 'https://archive.org/download/MIT6.046JS15/MIT6_046JS15_lec12_300k.mp4'
    parent_uid: b09226a5ff9c1d4df19cd0dd1145fda4
    title: Video-Internet Archive-MP4
    type: Video
    uid: 8dabdcbce2495471218012a08ae9acca
inline_embed_id: '91042027lecture12:greedyalgorithms:minimumspanningtree68668475'
parent_uid: 59a7a862feb85c8b52509910c07728e5
related_resources_text: ''
short_url: lecture-12-greedy-algorithms-minimum-spanning-tree
technical_location: >-
  https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-design-and-analysis-of-algorithms-spring-2015/lecture-videos/lecture-12-greedy-algorithms-minimum-spanning-tree
title: 'Lecture 12: Greedy Algorithms: Minimum Spanning Tree'
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
  m="20930">ERIK DEMAINE: All</span> <span m="21360">right,</span> <span
  m="21460">let's</span> <span m="21660">get</span> <span
  m="21830">started.</span> <span m="23190">Today,</span> <span
  m="24090">we</span> <span m="24290">have</span> <span m="24900">another</span>
  <span m="25370">cool</span> <span m="25750">graph</span> <span
  m="26070">algorithm</span> <span m="27420">or</span> <span
  m="27550">problem.</span> <span m="28520">Actually,</span> <span
  m="28780">we'll have</span> <span m="29010">two</span> <span
  m="29260">algorithms.</span> <span m="31430">The problem</span> <span
  m="31910">is</span> <span m="32020">called</span> <span
  m="32310">minimum</span> <span m="32790">spanning</span> <span
  m="33390">tree.</span> <span m="34350">You can</span> <span
  m="34480">probably</span> <span m="35040">guess</span> <span
  m="35280">from</span> <span m="35410">the</span> <span m="35510">title</span>
  <span m="35860">what</span> <span m="36030">it's</span> <span
  m="36190">trying</span> <span m="36450">to</span> <span
  m="36540">do.</span></p><p><span m="37250">We'll</span> <span
  m="37380">see</span> <span m="37690">two</span> <span
  m="37890">algorithms</span> <span m="38410">for</span> <span
  m="38530">doing</span> <span m="38840">it.</span> <span m="38990">Both</span>
  <span m="39250">of</span> <span m="39330">them</span> <span
  m="39620">are</span> <span m="39890">in</span> <span m="40060">the</span>
  <span m="40180">category</span> <span m="40770">of</span> <span
  m="40930">greedy</span> <span m="41340">algorithms,</span> <span
  m="42070">which</span> <span m="42200">is</span> <span
  m="42290">something</span> <span m="42680">we've</span> <span
  m="42850">seen</span> <span m="43770">a</span> <span m="43930">couple</span>
  <span m="44230">of</span> <span m="44340">times</span> <span
  m="44710">already</span> <span m="45180">in</span> <span
  m="45400">6.046,</span> <span m="47170">starting</span> <span
  m="47550">with</span> <span m="47670">lecture</span> <span m="47990">1.</span>
  <span m="48960">This</span> <span m="49130">is</span> <span
  m="49260">the</span> <span m="49300">definition</span> <span
  m="49940">of</span> <span m="50080">greedy</span> <span
  m="50340">algorithm</span> <span m="50670">from</span> <span
  m="50830">lecture</span> <span m="51110">1,</span> <span
  m="51430">roughly.</span> <span m="52710">The</span> <span
  m="52830">idea</span> <span m="53290">is</span> <span m="53550">to</span>
  <span m="53850">always</span> <span m="54230">make</span> <span
  m="54580">greedy</span> <span m="55100">choices,</span> <span
  m="55760">meaning</span> <span m="56850">the</span> <span
  m="57170">choice</span> <span m="57770">is</span> <span
  m="58070">locally</span> <span m="58560">best.</span> <span
  m="59130">For</span> <span m="59440">right</span> <span m="59740">now,</span>
  <span m="59980">it</span> <span m="60120">seems</span> <span
  m="60390">like</span> <span m="60620">a</span> <span m="60680">good</span>
  <span m="60890">thing</span> <span m="61110">to</span> <span
  m="61240">do,</span> <span m="62360">but</span> <span m="63280">maybe</span>
  <span m="63830">in</span> <span m="63930">the</span> <span
  m="64010">future</span> <span m="64660">it</span> <span m="64959">will</span>
  <span m="65129">screw</span> <span m="65420">you</span> <span
  m="65560">over.</span> <span m="66540">And</span> <span m="66970">if</span>
  <span m="67140">you</span> <span m="67230">have</span> <span
  m="67330">a</span> <span m="67420">correct</span> <span
  m="67830">greedy</span> <span m="68090">algorithm,</span> <span
  m="68800">you</span> <span m="68960">prove</span> <span m="69300">that</span>
  <span m="69420">it</span> <span m="69560">won't</span> <span m="69810">screw
  you</span> <span m="70160">over.</span></p><p><span m="70900">So</span> <span
  m="71120">it's</span> <span m="71240">sort</span> <span m="71400">of</span>
  <span m="71470">like</span> <span m="71700">Cookie</span> <span
  m="71980">Monster</span> <span m="72350">here,</span> <span
  m="72930">always</span> <span m="73400">locally</span> <span
  m="73850">seems</span> <span m="74080">like</span> <span m="74220">a</span>
  <span m="74270">good</span> <span m="74450">idea</span> <span
  m="74730">to</span> <span m="74790">eat</span> <span m="74960">another</span>
  <span m="75270">cookie,</span> <span m="75670">but</span> <span
  m="76480">maybe</span> <span m="77590">it'll</span> <span
  m="77830">bite</span> <span m="78010">you</span> <span m="78210">in</span>
  <span m="78290">the</span> <span m="78390">future.</span> <span
  m="79020">So</span> <span m="80860">today</span> <span m="81260">we</span>
  <span m="81430">will</span> <span m="81590">embrace</span> <span
  m="82010">our</span> <span m="82120">inner</span> <span
  m="82360">Cookie</span> <span m="82640">Monster</span> <span
  m="83300">and</span> <span m="84410">eat</span> <span m="84580">as</span>
  <span m="84690">many--</span> <span m="85080">eat</span> <span
  m="85290">the</span> <span m="85370">largest</span> <span
  m="85740">cookie</span> <span m="86040">first,</span> <span
  m="86530">would</span> <span m="86660">be</span> <span m="86830">the</span>
  <span m="87020">standard</span> <span m="87500">algorithm</span> <span
  m="87960">for</span> <span m="88100">Cookie</span> <span
  m="88500">Monster.</span> <span m="89890">I don't</span> <span m="90010">know
  if</span> <span m="90240">you</span> <span m="90330">learned</span> <span
  m="90480">that</span> <span m="90670">in</span> <span m="90760">Sesame</span>
  <span m="91130">Street,</span> <span m="91480">but--</span> <span
  m="93780">all right.</span></p><p><span m="94470">So</span> <span
  m="95790">what's</span> <span m="96230">the</span> <span
  m="96320">problem?</span> <span m="96720">Minimum</span> <span
  m="97080">spanning</span> <span m="97590">tree.</span> <span
  m="97930">Can</span> <span m="98080">anyone</span> <span m="98310">tell</span>
  <span m="98460">me</span> <span m="98570">what</span> <span m="98710">a</span>
  <span m="98790">tree</span> <span m="99230">is?</span> <span
  m="100350">Formally,</span> <span m="101140">not</span> <span
  m="101530">the</span> <span m="101650">outside</span> <span
  m="102220">thing.</span> <span m="104240">In</span> <span
  m="104450">graph</span> <span m="104880">land.</span> <span
  m="106590">Acyclic</span> <span m="107120">graph,</span> <span
  m="107440">close.</span> <span m="110450">Connected</span> <span
  m="111030">acyclic</span> <span m="111480">graph,</span> <span
  m="111830">good.</span> <span m="113190">That's important.</span> <span
  m="118850">This</span> <span m="118930">is</span> <span
  m="119040">604.2</span> <span m="119820">stuff.</span> <span
  m="127900">OK,</span> <span m="128639">so</span> <span m="128840">how</span>
  <span m="129100">about</span> <span m="129530">a</span> <span
  m="130600">spanning</span> <span m="131050">tree?</span> <span
  m="135440">Sorry?</span></p><p><span m="135830">AUDIENCE: It contains all the
  vertices.</span></p><p><span m="137110">ERIK DEMAINE: It contains</span> <span
  m="137670">all</span> <span m="137800">the</span> <span
  m="137880">vertices.</span> <span m="138400">Yeah.</span> <span
  m="139590">So</span> <span m="140745">let me go</span> <span
  m="141180">over</span> <span m="141400">here.</span></p><p><span
  m="147350">Spanning</span> <span m="147850">means</span> <span
  m="148350">it</span> <span m="148510">contains</span> <span
  m="148890">all</span> <span m="149010">the</span> <span
  m="149080">vertices,</span> <span m="149650">so</span> <span
  m="151130">implicit</span> <span m="151670">here,</span> <span
  m="151890">I</span> <span m="151940">guess,</span> <span m="152190">is</span>
  <span m="152300">subtree</span> <span m="153260">or</span> <span
  m="153330">subgraph.</span> <span m="154210">You're</span> <span
  m="154370">given</span> <span m="154720">a</span> <span
  m="154810">graph.</span> <span m="155810">You</span> <span
  m="155960">want</span> <span m="156330">a</span> <span
  m="156420">spanning</span> <span m="156910">tree</span> <span
  m="157310">of</span> <span m="157640">that</span> <span
  m="157910">graph.</span> <span m="164210">It's</span> <span
  m="164470">going</span> <span m="164700">to</span> <span m="164810">be</span>
  <span m="165260">a</span> <span m="165380">tree</span> <span
  m="165790">that</span> <span m="165940">lives</span> <span
  m="166210">inside</span> <span m="166550">the</span> <span
  m="166630">graph.</span> <span m="167000">So</span> <span
  m="167070">we're</span> <span m="167180">going</span> <span
  m="167260">to</span> <span m="167340">take</span> <span m="167570">some</span>
  <span m="167840">of</span> <span m="167900">the</span> <span
  m="168050">edges</span> <span m="168390">of</span> <span m="168500">G,</span>
  <span m="169330">make</span> <span m="169620">a</span> <span
  m="169680">tree</span> <span m="170060">out</span> <span m="170220">of</span>
  <span m="170330">them,</span> <span m="170510">make</span> <span
  m="170660">a</span> <span m="170970">connected</span> <span
  m="171370">acyclic</span> <span m="171780">graph.</span> <span
  m="172390">And</span> <span m="172580">that</span> <span
  m="172780">tree</span> <span m="173160">should</span> <span
  m="173560">hit</span> <span m="173930">all</span> <span m="174220">the</span>
  <span m="174280">vertices</span> <span m="174880">in G.</span> <span
  m="176320">So</span> <span m="176660">this is</span> <span
  m="176880">going</span> <span m="177020">to</span> <span m="177100">be</span>
  <span m="178330">a</span> <span m="178850">subset</span> <span
  m="179470">of</span> <span m="179590">the</span> <span
  m="179770">edges,</span> <span m="180420">or</span> <span
  m="180520">subgraph.</span> <span m="186060">Those</span> <span
  m="186450">edges</span> <span m="187080">should</span> <span m="187370">form
  a</span> <span m="187670">tree.</span> <span m="193520">And,</span> <span
  m="195930">I'll say,</span> <span m="196310">hit</span> <span
  m="197800">all</span> <span m="198120">vertices</span> <span
  m="198630">of</span> <span m="198780">G.</span></p><p><span m="206300">OK,
  if</span> <span m="206550">I</span> <span m="206610">just</span> <span
  m="206810">said</span> <span m="207280">they</span> <span
  m="207570">should</span> <span m="207750">form</span> <span
  m="207950">a</span> <span m="208000">tree,</span> <span m="208280">then</span>
  <span m="208460">I</span> <span m="208530">could</span> <span
  m="208720">say,</span> <span m="209060">well,</span> <span m="209370">I'll
  take</span> <span m="209690">no</span> <span m="210020">edges,</span> <span
  m="210600">and</span> <span m="210790">here's</span> <span m="211150">a</span>
  <span m="211450">tree</span> <span m="211770">with</span> <span
  m="211930">one</span> <span m="212160">vertex.</span> <span
  m="213160">That's</span> <span m="213410">not</span> <span
  m="213480">very</span> <span m="213690">interesting.</span> <span
  m="214600">You</span> <span m="214760">want</span> <span m="214950">a</span>
  <span m="215050">vertex--</span> <span m="215500">you</span> <span
  m="215660">want,</span> <span m="215980">basically,</span> <span
  m="216260">the</span> <span m="216360">vertex</span> <span
  m="216730">set</span> <span m="216890">of</span> <span m="217010">the</span>
  <span m="217100">tree</span> <span m="217440">to</span> <span
  m="217560">be</span> <span m="217700">the</span> <span m="217800">same</span>
  <span m="218100">as</span> <span m="218210">the</span> <span
  m="218300">vertex</span> <span m="218660">set</span> <span
  m="218900">of</span> <span m="219060">the</span> <span
  m="219140">graph.</span> <span m="220000">That's</span> <span
  m="220260">the</span> <span m="220300">spanning</span> <span
  m="221040">property.</span> <span m="221940">But</span> <span
  m="222090">you</span> <span m="222200">still</span> <span
  m="222380">want</span> <span m="222590">it to</span> <span
  m="222660">be</span> <span m="222780">a</span> <span m="222840">tree,
  so</span> <span m="223170">you</span> <span m="223260">want it</span> <span
  m="223500">to</span> <span m="223570">be</span> <span
  m="223690">connected</span> <span m="224690">and</span> <span
  m="224850">you</span> <span m="224930">want</span> <span m="225050">it
  to</span> <span m="225200">be</span> <span m="225320">acyclic.</span> <span
  m="226840">Now</span> <span m="227120">if G</span> <span m="227400">is</span>
  <span m="227560">disconnected,</span> <span m="228270">this</span> <span
  m="228500">is</span> <span m="228660">impossible.</span> <span
  m="230600">And</span> <span m="230640">for</span> <span
  m="230780">that,</span> <span m="231040">you</span> <span
  m="231150">could</span> <span m="231270">define</span> <span
  m="231590">a</span> <span m="231640">spanning</span> <span
  m="232050">forest</span> <span m="232690">to</span> <span m="232810">be</span>
  <span m="233010">like</span> <span m="233190">a</span> <span
  m="233250">maximal</span> <span m="234670">thing</span> <span
  m="234860">like</span> <span m="235070">this,</span> <span
  m="235260">but</span> <span m="235430">we'll</span> <span
  m="235850">focus</span> <span m="236180">on</span> <span m="236290">the</span>
  <span m="236370">case</span> <span m="236650">here</span> <span m="236880">as
  G</span> <span m="237040">is</span> <span m="237170">connected.</span> <span
  m="238240">That's</span> <span m="238330">the</span> <span
  m="238440">interesting</span> <span m="238840">case.</span> <span
  m="239900">And</span> <span m="240180">so</span> <span m="240510">we</span>
  <span m="240640">can</span> <span m="241000">get</span> <span
  m="241200">a</span> <span m="241350">spanning</span> <span
  m="241790">tree.</span></p><p><span m="243310">All</span> <span
  m="243380">right?</span> <span m="243670">So</span> <span
  m="243970">what</span> <span m="244160">is</span> <span m="244340">this</span>
  <span m="244580">minimum</span> <span m="245170">spanning</span> <span
  m="245580">tree</span> <span m="245770">problem?</span> <span
  m="249540">Minimum</span> <span m="249930">spanning</span> <span
  m="250330">tree.</span> <span m="251370">We're</span> <span
  m="251590">given</span> <span m="251900">a</span> <span
  m="251970">weighted</span> <span m="252430">graph,</span> <span
  m="261240">just</span> <span m="261500">like</span> <span
  m="261850">last</span> <span m="262180">time,</span> <span
  m="262400">with</span> <span m="262470">shortest</span> <span
  m="262830">paths.</span> <span m="263380">We</span> <span
  m="263857">have</span> <span m="267200">an</span> <span m="267270">edge
  weight</span> <span m="267700">function</span> <span m="271190">W</span> <span
  m="272790">giving</span> <span m="273110">me</span> <span m="273260">a</span>
  <span m="273350">real</span> <span m="273580">number,</span> <span
  m="274130">say,</span> <span m="274720">for</span> <span
  m="275280">every</span> <span m="275640">edge.</span> <span
  m="276970">And</span> <span m="277110">we</span> <span m="277240">want</span>
  <span m="277520">to</span> <span m="277670">find</span> <span
  m="279770">a</span> <span m="279880">spanning</span> <span
  m="280320">tree</span> <span m="280680">of</span> <span
  m="280920">minimum</span> <span m="281430">total</span> <span
  m="281840">weight.</span> <span m="296330">So</span> <span
  m="296450">I'm</span> <span m="296590">going</span> <span m="296800">to</span>
  <span m="296930">define</span> <span m="297310">the</span> <span
  m="297420">weight</span> <span m="298250">of</span> <span m="298400">a</span>
  <span m="298480">tree</span> <span m="298800">T</span> <span
  m="299460">to</span> <span m="299800">be</span> <span m="301060">the</span>
  <span m="301250">sum</span> <span m="302290">over</span> <span
  m="302590">all</span> <span m="302940">edges</span> <span m="303370">in</span>
  <span m="303510">T,</span> <span m="303830">because</span> <span
  m="304020">I'm</span> <span m="304110">viewing</span> <span
  m="304855">a</span> <span m="305110">spanning</span> <span
  m="305480">tree</span> <span m="305690">as</span> <span m="305840">a</span>
  <span m="305900">set</span> <span m="306160">of</span> <span
  m="306250">edges,</span> <span m="307250">of</span> <span
  m="307620">the</span> <span m="307740">weight</span> <span
  m="308130">of</span> <span m="308230">that</span> <span
  m="308450">edge.</span> <span m="311000">OK,</span> <span m="311180">so</span>
  <span m="311510">pretty</span> <span m="311730">much</span> <span
  m="311950">what</span> <span m="312090">you</span> <span
  m="312210">would</span> <span m="312320">expect.</span></p><p><span
  m="313070">Minimum</span> <span m="313520">weight</span> <span
  m="313890">spanning</span> <span m="314280">tree.</span> <span
  m="317050">It's</span> <span m="317190">a</span> <span
  m="317490">relatively</span> <span m="318390">simple</span> <span
  m="318740">problem,</span> <span m="319320">but</span> <span
  m="319720">it's</span> <span m="319890">not</span> <span m="320110">so</span>
  <span m="320370">easy</span> <span m="320690">to</span> <span
  m="320780">find</span> <span m="321060">an</span> <span
  m="321150">algorithm.</span> <span m="322110">You</span> <span
  m="322270">need</span> <span m="322630">to</span> <span
  m="322800">prove</span> <span m="323120">a</span> <span m="323180">lot</span>
  <span m="323680">to</span> <span m="323850">make</span> <span
  m="324030">sure</span> <span m="324190">that you</span> <span
  m="324390">really</span> <span m="325390">find</span> <span
  m="325660">the</span> <span m="325740">right</span> <span
  m="325940">tree.</span> <span m="327550">I</span> <span
  m="327640">guess</span> <span m="328742">the</span> <span
  m="329180">really</span> <span m="329660">naive</span> <span
  m="329990">algorithm</span> <span m="330510">here</span> <span
  m="330710">would</span> <span m="330810">be</span> <span m="330920">to</span>
  <span m="331010">try</span> <span m="331800">all</span> <span
  m="332060">spanning</span> <span m="332480">trees,</span> <span
  m="335480">compute</span> <span m="335780">the</span> <span
  m="335870">weight</span> <span m="336090">of</span> <span
  m="336190">each</span> <span m="336340">spanning</span> <span
  m="336700">tree</span> <span m="337580">and</span> <span
  m="338940">return</span> <span m="339210">the</span> <span
  m="339280">minimum.</span> <span m="339760">That</span> <span
  m="339920">sounds</span> <span m="340390">reasonable.</span> <span
  m="340830">That's</span> <span m="341020">correct.</span> <span
  m="342890">But</span> <span m="343160">it's</span> <span
  m="343310">bad,</span> <span m="343730">because--</span> <span
  m="352230">n</span> <span m="352470">to</span> <span m="352550">the</span>
  <span m="352660">fourth,</span> <span m="353310">that</span> <span
  m="353500">would</span> <span m="353620">be</span> <span
  m="353770">nice.</span> <span m="354620">It's</span> <span
  m="354790">larger</span> <span m="355130">than</span> <span
  m="355230">that.</span> <span m="361290">Maybe</span> <span
  m="361540">not</span> <span m="361780">so</span> <span
  m="361980">obvious,</span> <span m="363370">but</span> <span
  m="363500">it</span> <span m="363580">can</span> <span m="363730">be</span>
  <span m="363850">exponential.</span></p><p><span m="365850">Here's</span>
  <span m="366140">a</span> <span m="366220">graph</span> <span
  m="366800">where</span> <span m="367180">the</span> <span m="367280">number
  of</span> <span m="367580">spanning</span> <span m="367920">trees</span> <span
  m="368190">is</span> <span m="368310">exponential.</span> <span
  m="372980">This</span> <span m="373180">is</span> <span m="373640">a</span>
  <span m="373710">complete</span> <span m="374660">bipartite</span> <span
  m="375420">graph</span> <span m="376690">with</span> <span
  m="377010">two</span> <span m="377250">vertices</span> <span
  m="377750">on</span> <span m="377880">one</span> <span m="378090">side</span>
  <span m="378500">and</span> <span m="379100">n</span> <span
  m="379300">vertices</span> <span m="379720">on</span> <span
  m="379820">the</span> <span m="379970">other,</span> <span
  m="381190">and</span> <span m="381430">so</span> <span m="381810">you</span>
  <span m="382120">can--</span> <span m="383760">let's</span> <span
  m="383960">say</span> <span m="384090">we</span> <span m="384230">put</span>
  <span m="384420">these</span> <span m="384650">two</span> <span
  m="384990">edges</span> <span m="385300">into</span> <span
  m="385510">the</span> <span m="385610">spanning</span> <span
  m="386020">tree.</span> <span m="386910">And</span> <span
  m="387060">now,</span> <span m="387960">for</span> <span
  m="388210">each</span> <span m="388530">of</span> <span
  m="388700">these</span> <span m="389050">vertices,</span> <span
  m="390230">we</span> <span m="390390">can</span> <span
  m="390530">choose</span> <span m="390900">whether</span> <span
  m="391160">it</span> <span m="391240">connects</span> <span
  m="391570">to</span> <span m="391660">the</span> <span m="391740">left</span>
  <span m="392030">vertex</span> <span m="392460">or</span> <span
  m="392540">the</span> <span m="392660">right</span> <span
  m="392880">vertix.</span> <span m="393320">It can</span> <span
  m="393560">only</span> <span m="393740">do</span> <span m="393860">one,</span>
  <span m="394130">but</span> <span m="394260">it</span> <span
  m="394320">could</span> <span m="394460">do</span> <span
  m="394610">either</span> <span m="394860">one</span> <span
  m="395060">independently.</span> <span m="395720">So</span> <span
  m="395870">maybe</span> <span m="396090">this</span> <span
  m="396210">guy</span> <span m="396580">chooses</span> <span
  m="396830">the</span> <span m="396920">left</span> <span
  m="397220">one,</span> <span m="397630">this</span> <span
  m="397800">one</span> <span m="397980">chooses</span> <span
  m="398310">the</span> <span m="398410">right</span> <span
  m="398660">one.</span> <span m="399380">This</span> <span
  m="399520">one</span> <span m="399640">chooses</span> <span
  m="399940">the</span> <span m="400030">left</span> <span
  m="400280">one,</span> <span m="400610">and</span> <span m="400620">so</span>
  <span m="400750">on.</span> <span m="400880">If</span> <span
  m="400990">I</span> <span m="401040">have</span> <span m="401240">n</span>
  <span m="401510">vertices</span> <span m="401970">down</span> <span
  m="402200">here,</span> <span m="403330">I</span> <span m="403460">have</span>
  <span m="403860">2</span> <span m="404080">to</span> <span
  m="404150">the</span> <span m="404310">n</span> <span
  m="404470">different</span> <span m="404740">spanning</span> <span
  m="405060">trees.</span> <span m="406780">So</span> <span
  m="408270">there</span> <span m="408420">can</span> <span m="408560">be</span>
  <span m="408690">an</span> <span m="408780">exponential</span> <span
  m="409350">number.</span> <span m="410632">So</span> <span
  m="411060">that</span> <span m="411170">algorithm</span> <span
  m="411485">is</span> <span m="411800">not</span> <span m="412030">so</span>
  <span m="412160">good.</span></p><p><span m="419400">Exponential</span> <span
  m="419930">bad.</span> <span m="420630">Polynomial</span> <span
  m="421230">good.</span> <span m="421490">So</span> <span
  m="421640">today,</span> <span m="421910">we're</span> <span
  m="422050">going</span> <span m="422160">to</span> <span m="422210">get</span>
  <span m="422350">a</span> <span m="422450">polynomial</span> <span
  m="423060">algorithm.</span> <span m="423580">In</span> <span
  m="423670">fact,</span> <span m="424060">we</span> <span
  m="424160">will</span> <span m="424260">get</span> <span m="424320">an</span>
  <span m="424410">almost</span> <span m="424750">linear</span> <span
  m="425090">time</span> <span m="425350">algorithm</span> <span
  m="426730">as</span> <span m="426950">fast</span> <span m="427320">as</span>
  <span m="427460">Dijkstra's</span> <span m="427880">algorithm.</span> <span
  m="428740">But</span> <span m="430640">we</span> <span m="430780">can't</span>
  <span m="431010">use</span> <span m="431380">Dijkstra's</span> <span
  m="431620">algorithm,</span> <span m="431970">there's</span> <span
  m="432140">no</span> <span m="432250">shortest</span> <span
  m="432650">paths</span> <span m="432930">here.</span> <span
  m="433640">Plus,</span> <span m="434140">one</span> <span m="434330">of</span>
  <span m="434370">the</span> <span m="434460">algorithms</span> <span
  m="434820">will</span> <span m="434960">actually</span> <span
  m="435180">look</span> <span m="435370">pretty</span> <span
  m="435850">similar.</span></p><p><span m="439410">Two lectures</span> <span
  m="440280">ago,</span> <span m="441040">the</span> <span
  m="441220">dynamic</span> <span m="441590">programming</span> <span
  m="441990">lecture,</span> <span m="442340">we</span> <span
  m="442480">saw</span> <span m="443470">an example</span> <span
  m="443970">where</span> <span m="444520">we</span> <span
  m="444740">tried</span> <span m="445180">to</span> <span m="445290">do</span>
  <span m="445490">greedy,</span> <span m="446510">and</span> <span
  m="446700">it</span> <span m="446760">gave</span> <span m="446960">the</span>
  <span m="447060">wrong</span> <span m="447330">answer,</span> <span
  m="448200">and</span> <span m="448350">so</span> <span m="448500">we</span>
  <span m="448620">fell</span> <span m="448810">back</span> <span
  m="449050">on</span> <span m="449130">dynamic</span> <span
  m="449520">programming.</span> <span m="450010">Today,</span> <span
  m="451080">we're</span> <span m="451250">going</span> <span
  m="451360">to</span> <span m="451450">try</span> <span m="451790">to</span>
  <span m="451910">do</span> <span m="452030">dynamic</span> <span
  m="452470">programming,</span> <span m="453330">it's</span> <span
  m="453520">going</span> <span m="453640">to</span> <span
  m="453710">fail,</span> <span m="454620">and</span> <span
  m="454920">we're</span> <span m="455030">going</span> <span
  m="455110">to</span> <span m="455160">fall</span> <span m="455390">back</span>
  <span m="455610">on</span> <span m="455770">greedy.</span> <span
  m="456590">It's</span> <span m="456780">like</span> <span
  m="456950">the</span> <span m="457030">reverse.</span> <span
  m="457860">But</span> <span m="458000">the</span> <span m="458090">way</span>
  <span m="458220">it's</span> <span m="458360">going</span> <span
  m="458480">to</span> <span m="458540">fail</span> <span m="458920">is</span>
  <span m="459040">we're</span> <span m="459190">going</span> <span
  m="459310">to</span> <span m="459370">get</span> <span
  m="459580">exponential</span> <span m="460120">time</span> <span
  m="460460">initially,</span> <span m="461700">and</span> <span
  m="461890">then</span> <span m="462240">greedy</span> <span
  m="462680">will</span> <span m="463100">let</span> <span m="463290">us</span>
  <span m="463440">get</span> <span m="463780">polynomial</span> <span
  m="464350">time.</span> <span m="464870">This</span> <span
  m="465050">is</span> <span m="465180">actually</span> <span
  m="465450">a</span> <span m="465500">bit</span> <span
  m="465670">unusual.</span> <span m="466390">I</span> <span
  m="466470">would</span> <span m="466630">say</span> <span
  m="467020">more</span> <span m="467290">typically,</span> <span
  m="468430">dynamic</span> <span m="468800">programming</span> <span
  m="469250">can</span> <span m="469420">solve</span> <span
  m="469680">anything,</span> <span m="470840">but,</span> <span
  m="471155">you</span> <span m="471470">know,</span> <span
  m="471510">with</span> <span m="471700">n</span> <span m="471890">to</span>
  <span m="471990">the</span> <span m="472580">seventh</span> <span
  m="473100">running</span> <span m="473400">time,</span> <span
  m="473700">something</span> <span m="474030">slow.</span> <span
  m="474810">And</span> <span m="474970">then</span> <span m="475080">you</span>
  <span m="475190">apply</span> <span m="475440">greedy, and</span> <span
  m="475930">you</span> <span m="476030">get</span> <span m="476190">down</span>
  <span m="476390">to</span> <span m="476460">like</span> <span m="476670">n
  or</span> <span m="476920">n</span> <span m="477150">log</span> <span
  m="477410">n</span> <span m="477530">running</span> <span
  m="477810">time.</span> <span m="478290">So</span> <span
  m="478470">that's</span> <span m="478710">more</span> <span
  m="479090">common.</span> <span m="479560">But</span> <span
  m="479740">today,</span> <span m="479990">we're</span> <span
  m="480100">going</span> <span m="480200">to</span> <span m="480250">go</span>
  <span m="480370">from</span> <span m="480570">exponential</span> <span
  m="481080">down</span> <span m="481230">to</span> <span
  m="481310">polynomial.</span> <span m="482680">And</span> <span
  m="482780">that's</span> <span m="482930">pretty</span> <span
  m="483160">nice.</span></p><p><span m="487280">Cool.</span> <span
  m="487910">So</span> <span m="492120">let</span> <span m="492260">me</span>
  <span m="492380">tell</span> <span m="492560">you</span> <span
  m="492680">a</span> <span m="492700">little</span> <span m="492940">bit</span>
  <span m="493090">about</span> <span m="493450">greedy</span> <span
  m="493790">algorithm</span> <span m="494280">theory,</span> <span
  m="494920">so</span> <span m="495010">to</span> <span m="495110">speak.</span>
  <span m="500700">This</span> <span m="500920">is</span> <span
  m="501060">from</span> <span m="501360">the</span> <span
  m="501460">textbook.</span> <span m="507070">If</span> <span
  m="507260">your</span> <span m="507390">problem</span> <span
  m="508810">can</span> <span m="510280">be</span> <span
  m="510440">solved</span> <span m="510840">by</span> <span
  m="510990">greedy</span> <span m="511350">algorithm,</span> <span
  m="512159">usually</span> <span m="512600">you</span> <span
  m="512710">can</span> <span m="512870">prove</span> <span
  m="513280">two</span> <span m="513539">properties</span> <span
  m="514200">about</span> <span m="514580">that</span> <span
  m="514770">algorithm.</span> <span m="516880">One</span> <span
  m="517100">of</span> <span m="517169">them</span> <span m="517380">is</span>
  <span m="517549">called</span> <span m="518140">optimal</span> <span
  m="518570">substructure.</span> <span m="529400">And</span> <span
  m="529550">the</span> <span m="529660">other</span> <span m="529790">is</span>
  <span m="529900">called</span> <span m="530090">the</span> <span
  m="530160">greedy</span> <span m="530470">choice</span> <span
  m="530780">property.</span> <span m="531700">Optimal</span> <span
  m="532070">substructure</span> <span m="534800">should</span> <span
  m="534990">be</span> <span m="535190">familiar</span> <span
  m="535690">idea</span> <span m="539850">because</span> <span
  m="540290">it's</span> <span m="540450">essentially</span> <span
  m="541030">an</span> <span m="541530">encapsulation</span> <span
  m="542460">of</span> <span m="542790">dynamic</span> <span
  m="543210">programming.</span> <span m="573580">Greedy</span> <span
  m="573860">algorithms</span> <span m="574350">are, in</span> <span
  m="574470">some sense,</span> <span m="574970">a</span> <span
  m="575040">special</span> <span m="575450">form</span> <span
  m="575830">of</span> <span m="576010">dynamic</span> <span
  m="576380">programming.</span></p><p><span m="588300">So</span> <span
  m="588520">this</span> <span m="588690">is</span> <span
  m="588790">saying</span> <span m="589080">something</span> <span
  m="589410">like,</span> <span m="590000">if</span> <span m="590200">you</span>
  <span m="590370">can</span> <span m="590600">solve</span> <span
  m="591190">subproblems</span> <span m="591970">optimally,</span> <span
  m="592670">smaller</span> <span m="593140">subproblems,</span> <span
  m="593650">or</span> <span m="593710">whatever,</span> <span
  m="594160">then</span> <span m="594240">you</span> <span m="594370">can</span>
  <span m="594550">solve</span> <span m="595130">your</span> <span
  m="595210">original</span> <span m="595680">problem.</span> <span
  m="596480">And</span> <span m="596700">this</span> <span m="596850">may</span>
  <span m="596990">happen</span> <span m="597270">recursively,</span> <span
  m="597920">whatever.</span> <span m="598640">That's</span> <span
  m="599110">essentially</span> <span m="599610">what</span> <span
  m="599810">makes</span> <span m="600130">a</span> <span
  m="600210">recurrence</span> <span m="600820">work</span> <span
  m="601290">for</span> <span m="601650">dynamic</span> <span
  m="602090">programming.</span> <span m="603620">And</span> <span
  m="603760">with</span> <span m="603880">dynamic</span> <span
  m="604260">programming,</span> <span m="607710">for</span> <span
  m="607870">this</span> <span m="608090">to</span> <span m="608190">be</span>
  <span m="608360">possible,</span> <span m="609470">we</span> <span
  m="609600">need</span> <span m="609770">to</span> <span
  m="609830">guess</span> <span m="610300">some</span> <span
  m="610620">feature</span> <span m="611220">of</span> <span
  m="611420">the</span> <span m="611500">solution.</span> <span
  m="613240">For</span> <span m="613290">example,</span> <span
  m="613700">in</span> <span m="613840">minimum</span> <span
  m="614170">spanning</span> <span m="614520">tree,</span> <span
  m="614720">maybe</span> <span m="614960">you</span> <span
  m="615200">guess</span> <span m="615630">one</span> <span m="615840">of</span>
  <span m="615930">the</span> <span m="616080">edges</span> <span
  m="616460">that's</span> <span m="616610">in</span> <span
  m="616730">the</span> <span m="616820">right</span> <span
  m="617000">answer.</span> <span m="620290">And</span> <span
  m="620520">then,</span> <span m="620890">once</span> <span
  m="621130">you</span> <span m="621260">do</span> <span m="621490">that,</span>
  <span m="621930">you</span> <span m="622060">can</span> <span
  m="622220">reduce</span> <span m="622590">it</span> <span m="622710">to</span>
  <span m="622800">some</span> <span m="623040">other</span> <span
  m="623430">subproblems.</span> <span m="624910">And</span> <span
  m="625080">if</span> <span m="625140">you</span> <span m="625240">can</span>
  <span m="625360">solve</span> <span m="625750">those subproblems,</span> <span
  m="626260">you</span> <span m="626380">combine</span> <span m="626790">them
  and</span> <span m="626930">get</span> <span m="627060">an</span> <span
  m="627160">optimal</span> <span m="627460">solution</span> <span
  m="627790">to</span> <span m="627860">your</span> <span
  m="627970">original</span> <span m="628340">thing.</span> <span
  m="628740">So</span> <span m="629500">this</span> <span m="629680">is</span>
  <span m="629820">a</span> <span m="629910">familiar</span> <span
  m="630380">property.</span> <span m="630930">I</span> <span
  m="631040">don't</span> <span m="631220">usually</span> <span
  m="632170">think</span> <span m="632370">of</span> <span m="632460">it</span>
  <span m="632570">this</span> <span m="632730">way</span> <span
  m="632870">for</span> <span m="633180">dynamic</span> <span
  m="633560">programming,</span> <span m="634140">but</span> <span
  m="634190">that</span> <span m="634350">is</span> <span
  m="634520">essentially</span> <span m="634910">what</span> <span
  m="635070">we're</span> <span m="635170">doing</span> <span
  m="636470">via</span> <span m="636860">guessing.</span></p><p><span
  m="639040">But</span> <span m="639160">with</span> <span
  m="639280">greedy</span> <span m="639560">algorithms,</span> <span
  m="639940">we're</span> <span m="640070">not</span> <span
  m="640280">going</span> <span m="640390">to</span> <span
  m="640440">guess.</span> <span m="641210">We're</span> <span
  m="641370">just</span> <span m="641580">going</span> <span
  m="641700">to</span> <span m="641770">be</span> <span
  m="641890">greedy.</span> <span m="643020">Eat</span> <span
  m="643210">the</span> <span m="643290">largest</span> <span
  m="643650">cookie.</span> <span m="644490">And</span> <span
  m="644750">so</span> <span m="645000">that's</span> <span
  m="645300">the</span> <span m="645960">greedy</span> <span
  m="646240">choice</span> <span m="646520">property.</span> <span
  m="658990">This</span> <span m="659200">says</span> <span
  m="659660">that</span> <span m="660380">eating the</span> <span
  m="660620">largest</span> <span m="661030">cookie</span> <span
  m="661590">is</span> <span m="662600">actually</span> <span
  m="662970">a</span> <span m="663070">good</span> <span m="663140">thing</span>
  <span m="663320">to</span> <span m="663430">do.</span> <span
  m="670546">If</span> <span m="671030">we</span> <span m="671150">keep</span>
  <span m="671380">making</span> <span m="671690">locally</span> <span
  m="672140">optimal</span> <span m="672520">choices,</span> <span
  m="673950">will</span> <span m="674150">end</span> <span m="674410">up</span>
  <span m="674590">with</span> <span m="674750">a</span> <span
  m="674810">globally</span> <span m="675410">optimal</span> <span
  m="675800">solution.</span> <span m="685650">No</span> <span
  m="686310">tummy</span> <span m="686650">ache.</span> <span
  m="692710">This</span> <span m="693030">is</span> <span
  m="693130">something</span> <span m="693420">you</span> <span
  m="693540">wouldn't</span> <span m="693730">expect</span> <span
  m="694070">to</span> <span m="694150">be</span> <span m="694270">true</span>
  <span m="694600">in</span> <span m="694690">general,</span> <span
  m="695310">but</span> <span m="695640">it's</span> <span
  m="695780">going</span> <span m="695890">to</span> <span m="695950">be</span>
  <span m="696070">true</span> <span m="696230">for</span> <span
  m="696370">minimum</span> <span m="696650">spanning</span> <span
  m="697000">tree.</span> <span m="698382">And</span> <span
  m="698790">it's</span> <span m="698910">true</span> <span m="699120">for
  a</span> <span m="699400">handful</span> <span m="699750">of</span> <span
  m="699820">other</span> <span m="699980">problems.</span> <span
  m="700300">You'll</span> <span m="700430">see</span> <span m="700660">a</span>
  <span m="700710">bunch</span> <span m="700960">more</span> <span
  m="701230">in</span> <span m="701370">recitation</span> <span
  m="701930">tomorrow.</span></p><p><span m="706190">This</span> <span
  m="706360">is</span> <span m="706450">sort</span> <span m="706620">of</span>
  <span m="706700">general</span> <span m="707060">theory,</span> <span
  m="707440">but</span> <span m="707880">I'm</span> <span
  m="708090">actually</span> <span m="708330">going</span> <span
  m="708460">to</span> <span m="708510">have</span> <span m="708980">a</span>
  <span m="709080">theorem</span> <span m="709570">like</span> <span
  m="709750">this</span> <span m="710430">for</span> <span
  m="710750">minimum</span> <span m="711040">spanning</span> <span
  m="711380">tree</span> <span m="711650">and</span> <span m="711800">a</span>
  <span m="711870">theorem</span> <span m="712170">like</span> <span
  m="712390">this</span> <span m="712810">for</span> <span
  m="713030">minimum</span> <span m="713320">spanning</span> <span
  m="713670">tree.</span> <span m="714716">This</span> <span
  m="715110">is</span> <span m="715200">the</span> <span
  m="715300">prototype,</span> <span m="715930">but</span> <span
  m="716300">most</span> <span m="716610">of</span> <span m="716700">today
  is</span> <span m="717080">all</span> <span m="717230">about</span> <span
  m="718000">minimum</span> <span m="718290">spanning</span> <span
  m="718670">tree.</span> <span m="722420">And</span> <span
  m="722690">for</span> <span m="722800">minimum</span> <span
  m="723040">spanning</span> <span m="723370">tree,</span> <span
  m="723520">neither</span> <span m="723890">of</span> <span
  m="723950">these</span> <span m="724160">is</span> <span
  m="724300">very</span> <span m="724620">obvious.</span> <span
  m="725880">So</span> <span m="726290">I'm</span> <span m="726390">just</span>
  <span m="726550">going</span> <span m="726680">to</span> <span
  m="726740">show</span> <span m="726900">you</span> <span
  m="727040">these</span> <span m="727250">theorems.</span> <span
  m="728290">They're</span> <span m="728540">fairly</span> <span
  m="729010">easy</span> <span m="729210">to</span> <span
  m="729310">prove,</span> <span m="729720">in</span> <span
  m="729800">fact,</span> <span m="731670">but</span> <span
  m="731920">finding</span> <span m="732220">them</span> <span
  m="732380">is</span> <span m="732540">probably</span> <span
  m="732810">the</span> <span m="732920">tricky</span> <span
  m="733200">part.</span> <span m="746880">Actually, I</span> <span
  m="746960">guess</span> <span m="747360">optimal</span> <span
  m="747730">substructure</span> <span m="748370">is</span> <span
  m="748470">probably</span> <span m="749990">the</span> <span
  m="750110">least</span> <span m="750500">intuitive</span> <span
  m="752220">or</span> <span m="752330">the</span> <span m="752450">least</span>
  <span m="752650">obvious</span> <span m="753740">greedy</span> <span
  m="754010">choice.</span> <span m="754830">You're</span> <span
  m="754950">probably</span> <span m="755300">already</span> <span
  m="755530">thinking,</span> <span m="755870">what</span> <span m="756070">are
  good</span> <span m="756400">greedy</span> <span m="756600">choices?</span>
  <span m="757820">Minimum</span> <span m="758080">weight</span> <span
  m="758340">edge</span> <span m="758700">seems</span> <span
  m="758950">like</span> <span m="759150">a</span> <span m="759200">good</span>
  <span m="759670">starting</span> <span m="759970">point,</span> <span
  m="761100">which</span> <span m="761240">we</span> <span
  m="761320">will</span> <span m="761470">get</span> <span m="761680">to.</span>
  <span m="763160">But</span> <span m="763500">there's</span> <span
  m="764060">even</span> <span m="764430">a</span> <span
  m="764530">stronger</span> <span m="764970">version</span> <span
  m="765260">of</span> <span m="765330">that,</span> <span
  m="765650">which</span> <span m="765860">we</span> <span
  m="765950">will</span> <span m="766100">prove.</span></p><p><span
  m="767100">And</span> <span m="767860">first,</span> <span
  m="768320">optimal</span> <span m="768660">substructure.</span> <span
  m="769620">So</span> <span m="771630">here,</span> <span m="771890">I'm</span>
  <span m="771960">going</span> <span m="772090">to</span> <span
  m="772170">think</span> <span m="772590">like</span> <span m="772790">a</span>
  <span m="772870">dynamic</span> <span m="773270">program.</span> <span
  m="773750">Let's</span> <span m="774050">suppose</span> <span
  m="775260">that</span> <span m="775410">we</span> <span m="775580">know</span>
  <span m="776120">an</span> <span m="776280">edge</span> <span
  m="776920">that's</span> <span m="777150">in</span> <span
  m="777340">our</span> <span m="777450">solution.</span> <span
  m="778110">Suppose</span> <span m="778480">we</span> <span
  m="778590">know</span> <span m="778790">an</span> <span m="778890">edge</span>
  <span m="779220">that</span> <span m="779440">lives</span> <span
  m="779820">in</span> <span m="780030">a</span> <span m="780070">minimum</span>
  <span m="780390">spanning</span> <span m="780770">tree.</span> <span
  m="781650">We</span> <span m="781790">could</span> <span
  m="782070">guess</span> <span m="782420">that.</span> <span
  m="782950">We're</span> <span m="783080">not</span> <span
  m="783280">going</span> <span m="783430">to,</span> <span
  m="783640">but</span> <span m="783990">we</span> <span
  m="784160">could.</span> <span m="785880">Either</span> <span
  m="786160">way,</span> <span m="786500">let's</span> <span
  m="786860">just</span> <span m="787030">suppose</span> <span
  m="788270">than</span> <span m="788660">an</span> <span m="788810">edge</span>
  <span m="789200">e--</span></p><p><span m="791850">I</span> <span
  m="791920">should</span> <span m="792130">mention,</span> <span
  m="792830">I</span> <span m="792920">guess</span> <span m="793120">I</span>
  <span m="793220">didn't</span> <span m="793380">say,</span> <span
  m="794020">this</span> <span m="794180">graph</span> <span
  m="794480">is</span> <span m="794680">undirected.</span> <span
  m="796250">A</span> <span m="796370">minimum</span> <span
  m="796560">spanning</span> <span m="796850">tree</span> <span
  m="797030">doesn't</span> <span m="797290">quite</span> <span
  m="797530">make</span> <span m="797720">sense</span> <span
  m="798460">with</span> <span m="798590">directed</span> <span
  m="798990">graphs.</span> <span m="799540">There</span> <span
  m="799710">are</span> <span m="799790">other</span> <span
  m="800030">versions</span> <span m="800410">of</span> <span
  m="800490">the</span> <span m="800570">problem</span> <span
  m="800890">but</span> <span m="801670">here,</span> <span
  m="802010">the</span> <span m="802070">graph</span> <span m="802310">is</span>
  <span m="802420">undirected.</span> <span m="804090">So</span> <span
  m="804290">probably,</span> <span m="804630">I</span> <span
  m="804680">should</span> <span m="804890">write</span> <span
  m="805070">this</span> <span m="805270">as</span> <span m="805450">a</span>
  <span m="806640">unordered</span> <span m="807080">set,</span> <span
  m="807900">u, v.</span> <span m="818040">And</span> <span
  m="818390">there</span> <span m="818630">are</span> <span
  m="818730">possibly</span> <span m="819260">many</span> <span
  m="819820">minimum</span> <span m="820160">spanning</span> <span
  m="820510">trees.</span> <span m="821730">There</span> <span
  m="821900">could</span> <span m="822040">be</span> <span
  m="822170">many</span> <span m="822400">solutions</span> <span
  m="822860">with</span> <span m="823050">the</span> <span
  m="823130">same</span> <span m="823360">weight.</span> <span
  m="823540">For</span> <span m="823680">example,</span> <span
  m="824030">if</span> <span m="824120">all</span> <span m="824850">of</span>
  <span m="824940">these</span> <span m="825110">edges</span> <span
  m="825410">have</span> <span m="825600">weight</span> <span
  m="825760">1,</span> <span m="826170">all of</span> <span
  m="826540">these</span> <span m="826870">trees</span> <span
  m="827180">are</span> <span m="827280">actually</span> <span
  m="828170">minimum.</span> <span m="829610">If all</span> <span
  m="829750">the</span> <span m="829860">edges</span> <span
  m="830110">have</span> <span m="830270">weight</span> <span
  m="830470">1,</span> <span m="830880">every</span> <span
  m="831210">spanning</span> <span m="831580">tree</span> <span
  m="831790">is</span> <span m="831920">minimum,</span> <span
  m="832650">because</span> <span m="832880">every</span> <span
  m="833280">spanning</span> <span m="833640">tree</span> <span
  m="833870">has</span> <span m="834070">exactly</span> <span
  m="834440">n</span> <span m="834600">minus</span> <span m="834870">1</span>
  <span m="835050">edges.</span> <span m="837840">But</span> <span
  m="838040">let's</span> <span m="838280">suppose</span> <span
  m="838630">we</span> <span m="838750">know</span> <span m="839140">an</span>
  <span m="839290">edge</span> <span m="839600">that's</span> <span
  m="839810">guaranteed</span> <span m="840320">to</span> <span
  m="840380">be</span> <span m="840540">in</span> <span m="840660">some</span>
  <span m="841130">minimum</span> <span m="841480">spanning</span> <span
  m="841850">tree,</span> <span m="841990">at</span> <span
  m="842050">least</span> <span m="842310">one.</span></p><p><span
  m="845060">What</span> <span m="845300">I</span> <span m="845350">would</span>
  <span m="845480">like</span> <span m="845660">to</span> <span
  m="845750">do</span> <span m="846080">is</span> <span m="846260">take</span>
  <span m="846600">this,</span> <span m="847070">so</span> <span
  m="847220">let</span> <span m="847330">me</span> <span m="847420">draw</span>
  <span m="847580">a</span> <span m="847640">picture.</span> <span
  m="849400">I</span> <span m="849420">have</span> <span m="849620">a</span>
  <span m="849690">graph.</span> <span m="852070">We've</span> <span
  m="852230">identified</span> <span m="852900">some</span> <span
  m="853190">edge in</span> <span m="853570">the</span> <span
  m="853660">graph,</span> <span m="854790">e,</span> <span
  m="855542">that</span> <span m="855920">lives</span> <span
  m="856400">in</span> <span m="856640">some</span> <span
  m="857980">minimum</span> <span m="858290">spanning</span> <span
  m="858710">tree.</span> <span m="858970">I'm going to</span> <span
  m="859160">draw</span> <span m="860170">some</span> <span
  m="860380">kind</span> <span m="860550">of</span> <span m="860630">tree</span>
  <span m="860800">structure</span> <span m="861210">here.</span> <span
  m="869400">OK.</span> <span m="870860">The</span> <span
  m="870970">wiggly</span> <span m="871270">lines</span> <span
  m="871620">are</span> <span m="871810">the</span> <span
  m="871950">tree.</span> <span m="873185">There are</span> <span
  m="873490">some</span> <span m="873650">other</span> <span
  m="873880">edges</span> <span m="874180">in</span> <span
  m="874260">here,</span> <span m="875060">which</span> <span
  m="875190">I</span> <span m="875280">don't</span> <span m="875390">want</span>
  <span m="875500">to</span> <span m="875550">draw</span> <span
  m="875690">too</span> <span m="875870">many</span> <span m="876080">of</span>
  <span m="876120">them</span> <span m="876230">because</span> <span
  m="876460">it's</span> <span m="876650">ugly.</span> <span
  m="877030">Those</span> <span m="877260">are</span> <span
  m="877410">other</span> <span m="877670">edges</span> <span
  m="878140">in</span> <span m="878290">the</span> <span
  m="878370">graph.</span> <span m="878900">Who</span> <span m="879030">knows
  where</span> <span m="879180">they are?</span> <span m="879490">They</span>
  <span m="879800">could</span> <span m="879950">be</span> <span
  m="880540">all</span> <span m="880730">sorts</span> <span m="880980">of</span>
  <span m="881080">things.</span> <span m="883600">OK? But</span> <span
  m="883660">I've</span> <span m="883770">highlighted</span> <span
  m="885490">the</span> <span m="885680">graph</span> <span m="886000">in</span>
  <span m="886140">a</span> <span m="886210">particular</span> <span
  m="886800">way.</span></p><p><span m="888230">Because</span> <span
  m="889810">the</span> <span m="889980">minimum</span> <span
  m="890230">spanning</span> <span m="890500">tree</span> <span
  m="890730">is</span> <span m="890890">a</span> <span m="890980">tree,</span>
  <span m="891470">if</span> <span m="891650">I</span> <span
  m="891750">delete</span> <span m="892490">e</span> <span
  m="892800">from</span> <span m="893010">the</span> <span
  m="893120">tree,</span> <span m="894290">then</span> <span m="894470">I</span>
  <span m="894520">get</span> <span m="894750">two</span> <span
  m="894950">components.</span> <span m="896850">Every</span> <span
  m="897310">edge</span> <span m="897600">I</span> <span
  m="897660">remove--</span> <span m="898545">I'm</span> <span
  m="898920">minimally</span> <span m="899420">connected.</span> <span
  m="899950">So</span> <span m="900060">if</span> <span m="900160">I</span>
  <span m="900220">delete</span> <span m="900530">an</span> <span
  m="900640">edge,</span> <span m="901300">I</span> <span
  m="901420">disconnect</span> <span m="902000">into</span> <span
  m="902190">two</span> <span m="902330">parts,</span> <span
  m="902680">so</span> <span m="902750">I've</span> <span
  m="902880">drawn</span> <span m="903110">that</span> <span
  m="903280">as</span> <span m="903390">the</span> <span m="903490">left</span>
  <span m="903700">circle</span> <span m="904480">and</span> <span
  m="904680">the</span> <span m="904760">right</span> <span
  m="904980">circle.</span> <span m="906530">It's</span> <span m="906690">just
  a</span> <span m="906890">general</span> <span m="907230">way</span> <span
  m="907370">to</span> <span m="907450">think</span> <span
  m="907670">about</span> <span m="908010">a</span> <span
  m="908090">tree.</span> <span m="908780">Now</span> <span
  m="908920">there</span> <span m="909020">are</span> <span
  m="909120">other</span> <span m="909820">unused</span> <span
  m="910250">edges</span> <span m="910580">in</span> <span
  m="910640">this</span> <span m="910770">picture,</span> <span
  m="911160">who</span> <span m="911290">knows</span> <span
  m="911500">where</span> <span m="911600">they</span> <span
  m="911740">live?</span> <span m="914000">OK?</span> <span
  m="914460">What</span> <span m="914720">I</span> <span m="914780">would</span>
  <span m="914880">like</span> <span m="915060">to</span> <span
  m="915170">do</span> <span m="915340">is</span> <span
  m="915440">somehow</span> <span m="915780">simplify</span> <span
  m="917180">this</span> <span m="917430">graph</span> <span
  m="918770">and</span> <span m="918980">get</span> <span m="919110">a</span>
  <span m="919170">smaller</span> <span m="919810">problem,</span> <span
  m="920390">say</span> <span m="920750">a</span> <span m="920840">graph</span>
  <span m="921210">with</span> <span m="921370">fewer</span> <span
  m="921730">edges.</span> <span m="925820">Any</span> <span
  m="925990">suggestions</span> <span m="926560">on</span> <span
  m="926660">how</span> <span m="926820">to</span> <span m="926920">do</span>
  <span m="927050">that?</span> <span m="932090">I</span> <span
  m="932250">don't</span> <span m="932540">actually</span> <span
  m="932950">know</span> <span m="933160">where all</span> <span
  m="933470">these</span> <span m="933560">white</span> <span
  m="933770">edges</span> <span m="934090">are,</span> <span
  m="934790">but</span> <span m="934950">what</span> <span m="935100">I'd</span>
  <span m="935180">like</span> <span m="935380">to</span> <span
  m="935500">do</span> <span m="935880">is--</span> <span m="937100">I'm</span>
  <span m="937320">supposing</span> <span m="937790">I</span> <span
  m="937850">know</span> <span m="938020">where</span> <span m="938150">e</span>
  <span m="938310">is,</span> <span m="939240">and</span> <span
  m="939340">that's</span> <span m="939440">an</span> <span
  m="939530">edge</span> <span m="939800">in</span> <span m="939950">my</span>
  <span m="940150">minimum</span> <span m="940450">spanning</span> <span
  m="940800">tree.</span> <span m="941810">So</span> <span m="942020">how</span>
  <span m="942230">could</span> <span m="942410">I</span> <span
  m="944240">get</span> <span m="944400">rid</span> <span m="944550">of</span>
  <span m="944630">it?</span> <span m="948258">Yeah.</span></p><p><span
  m="948752">AUDIENCE: Find the</span> <span m="949246">minimum</span> <span
  m="949740">weight</span> <span m="950234">spanning tree</span> <span
  m="950728">of the two</span> <span m="951222">edges.</span></p><p><span
  m="951720">ERIK DEMAINE: I'd</span> <span m="951880">like</span> <span
  m="952070">to</span> <span m="952240">divide</span> <span
  m="952510">and</span> <span m="952600">conquer.</span> <span
  m="952960">Maybe</span> <span m="953290">find</span> <span
  m="953610">the</span> <span m="953690">minimum</span> <span
  m="954050">weight</span> <span m="954240">over</span> <span
  m="954410">here,</span> <span m="954850">minimum</span> <span
  m="955010">weight</span> <span m="955160">over</span> <span
  m="955310">here.</span> <span m="955460">Of</span> <span
  m="955540">course,</span> <span m="955760">I</span> <span
  m="955830">don't</span> <span m="956000">know</span> <span
  m="956180">which</span> <span m="956460">nodes</span> <span
  m="956760">are</span> <span m="956880">in</span> <span m="956950">what</span>
  <span m="957220">side.</span> <span m="958330">So</span> <span
  m="958380">that's</span> <span m="958600">a</span> <span
  m="958650">little</span> <span m="958890">trickier.</span> <span
  m="960180">But</span> <span m="960280">what</span> <span m="960410">do</span>
  <span m="960490">I</span> <span m="960570">do</span> <span
  m="960780">but</span> <span m="961010">E</span> <span
  m="961190">itself?</span> <span m="962180">Let's</span> <span
  m="962260">start</span> <span m="962480">with</span> <span
  m="962580">that.</span> <span m="966924">Yeah.</span></p><p><span
  m="967417">AUDIENCE: You</span> <span m="967910">remove it?</span></p><p><span
  m="968403">ERIK DEMAINE: You could</span> <span m="968896">remove</span> <span
  m="969389">it.</span> <span m="969882">That's a good idea.</span> <span
  m="970868">Doesn't work,</span> <span m="972840">but</span> <span
  m="973333">worth a</span> <span m="973826">Frisbee</span> <span
  m="974319">nonetheless.</span> <span m="976810">If</span> <span
  m="977010">I</span> <span m="977120">delete</span> <span
  m="977760">this</span> <span m="977980">edge,</span> <span
  m="978820">one</span> <span m="979080">problem</span> <span
  m="979520">is</span> <span m="979920">maybe</span> <span
  m="980340">none</span> <span m="980550">of</span> <span
  m="980640">these</span> <span m="980810">red</span> <span
  m="980990">edges</span> <span m="981280">exist</span> <span
  m="981780">and</span> <span m="981920">then</span> <span m="982070">my</span>
  <span m="982190">graph</span> <span m="982540">is</span> <span
  m="982700">disconnected.</span> <span m="983860">Well, maybe</span> <span
  m="984180">that's</span> <span m="984330">actually</span> <span
  m="984660">a</span> <span m="984710">good</span> <span m="984910">case.</span>
  <span m="986740">That probably</span> <span m="987020">would be</span> <span
  m="987050">a</span> <span m="987330">good</span> <span m="987500">case.</span>
  <span m="988380">Then</span> <span m="988650">I</span> <span
  m="988720">know</span> <span m="988980">how</span> <span m="989180">to</span>
  <span m="989270">divide</span> <span m="989530">and</span> <span
  m="989630">conquer.</span> <span m="990430">I</span> <span
  m="990460">just</span> <span m="990640">look</span> <span m="990770">at</span>
  <span m="990820">the</span> <span m="990910">connected</span> <span
  m="991220">components.</span> <span m="992050">In</span> <span
  m="992170">general,</span> <span m="992620">if</span> <span
  m="992630">I</span> <span m="992700">delete</span> <span m="993040">the</span>
  <span m="993170">edge,</span> <span m="996170">and</span> <span
  m="996430">I</span> <span m="996500">have</span> <span m="996880">these</span>
  <span m="997050">red</span> <span m="997250">edges,</span> <span
  m="998220">then</span> <span m="998400">I</span> <span m="998720">maybe</span>
  <span m="999070">find</span> <span m="999370">a</span> <span
  m="999410">minimum</span> <span m="999690">spanning</span> <span
  m="1000010">tree</span> <span m="1000200">on</span> <span
  m="1000330">what</span> <span m="1000500">remains.</span> <span
  m="1003750">Maybe</span> <span m="1004420">I'll</span> <span
  m="1004600">end</span> <span m="1004740">up</span> <span
  m="1004840">including</span> <span m="1005430">one</span> <span
  m="1005590">of</span> <span m="1005660">these</span> <span
  m="1005840">edges.</span> <span m="1006180">Maybe</span> <span
  m="1006440">this</span> <span m="1006670">edge</span> <span
  m="1007260">ends</span> <span m="1007500">up</span> <span
  m="1007640">in</span> <span m="1007780">the</span> <span
  m="1007860">spanning</span> <span m="1008260">tree,</span> <span
  m="1009660">and</span> <span m="1009890">then</span> <span
  m="1010030">I</span> <span m="1010100">can't</span> <span
  m="1010460">put</span> <span m="1010680">E in.</span> <span
  m="1011790">So</span> <span m="1011990">it's</span> <span m="1012110">a</span>
  <span m="1012160">little</span> <span m="1012390">awkward.</span> <span
  m="1013770">Yeah?</span></p><p><span m="1014200">AUDIENCE: Can you merge the
  two nodes into one?</span></p><p><span m="1015920">Merge</span> <span
  m="1016270">the</span> <span m="1016400">two</span> <span
  m="1016610">nodes</span> <span m="1016860">into</span> <span
  m="1017110">one.</span> <span m="1017560">Yes.</span> <span
  m="1018570">Purple</span> <span m="1019020">Frisbee.</span> <span
  m="1021450">Impressive.</span> <span m="1022920">This</span> <span
  m="1023150">is</span> <span m="1023280">what</span> <span
  m="1023440">we</span> <span m="1023560">call</span> <span
  m="1023890">contracting</span> <span m="1024720">the</span> <span
  m="1024869">edge.</span> <span m="1029920">It</span> <span
  m="1030050">just</span> <span m="1030270">means</span> <span
  m="1030599">merge</span> <span m="1031020">the</span> <span
  m="1031150">endpoints.</span> <span m="1033260">Merge</span> <span
  m="1034670">u</span> <span m="1035079">and</span> <span m="1035230">v.</span>
  <span m="1037290">So</span> <span m="1038790">I</span> <span
  m="1038950">will</span> <span m="1040079">draw</span> <span m="1042160">a
  new</span> <span m="1042339">version</span> <span m="1042700">of</span> <span
  m="1042770">the</span> <span m="1042859">graph.</span> <span
  m="1049840">So</span> <span m="1049950">this</span> <span
  m="1050160">was</span> <span m="1050600">u</span> <span m="1051170">and</span>
  <span m="1051360">v</span> <span m="1051690">before.</span> <span
  m="1052580">You've got to put</span> <span m="1052840">the</span> <span
  m="1052910">label</span> <span m="1053200">inside.</span> <span
  m="1054880">And</span> <span m="1055030">now</span> <span
  m="1055260">we</span> <span m="1055360">have</span> <span m="1055560">a</span>
  <span m="1055600">new</span> <span m="1055770">vertex</span> <span
  m="1056210">here,</span> <span m="1056540">which</span> <span
  m="1056700">is</span> <span m="1057870">uv.</span> <span m="1059310">Or</span>
  <span m="1059530">you</span> <span m="1059640">can</span> <span
  m="1059760">think</span> <span m="1059910">it as</span> <span
  m="1060190">the</span> <span m="1060290">set</span> <span m="1060570">u,
  v.</span> <span m="1061890">We</span> <span m="1062040">won't</span> <span
  m="1062240">really</span> <span m="1062460">need</span> <span
  m="1062620">to</span> <span m="1062660">keep</span> <span
  m="1062840">track</span> <span m="1063090">of</span> <span
  m="1063180">names.</span> <span m="1064680">And</span> <span
  m="1065710">whatever</span> <span m="1066140">edges</span> <span
  m="1066530">you</span> <span m="1066660">had</span> <span
  m="1067000">over</span> <span m="1067210">here,</span> <span
  m="1070120">you're</span> <span m="1070310">going</span> <span
  m="1070430">to</span> <span m="1070490">have</span> <span
  m="1070750">over</span> <span m="1070960">here.</span> <span
  m="1073240">OK?</span> <span m="1073430">Just</span> <span
  m="1073620">collapse</span> <span m="1074170">u</span> <span
  m="1074330">and</span> <span m="1074450">v.</span> <span
  m="1074875">The</span> <span m="1075300">edge</span> <span
  m="1075610">e</span> <span m="1075830">disappears.</span></p><p><span
  m="1079910">And</span> <span m="1080500">one</span> <span
  m="1080730">other</span> <span m="1080920">thing</span> <span
  m="1081130">can</span> <span m="1081290">happen.</span> <span
  m="1083180">Let</span> <span m="1083300">me--</span> <span m="1087310">go
  over</span> <span m="1087795">here.</span> <span m="1094040">We</span> <span
  m="1094190">could</span> <span m="1094400">end</span> <span
  m="1094550">up</span> <span m="1094660">with</span> <span
  m="1094810">duplicate</span> <span m="1095280">edges</span> <span
  m="1095690">by</span> <span m="1095830">this</span> <span
  m="1096010">process.</span> <span m="1097420">So</span> <span
  m="1097840">for</span> <span m="1098370">example,</span> <span
  m="1098940">suppose</span> <span m="1099390">we</span> <span
  m="1099500">have</span> <span m="1099830">u</span> <span
  m="1100040">and</span> <span m="1100170">v,</span> <span
  m="1101750">and</span> <span m="1102250">they</span> <span
  m="1102390">have</span> <span m="1102840">a</span> <span
  m="1102960">common</span> <span m="1103310">neighbor.</span> <span
  m="1104050">Might</span> <span m="1104200">have</span> <span
  m="1104360">many</span> <span m="1104610">common</span> <span
  m="1104940">neighbors,</span> <span m="1106630">who</span> <span
  m="1106660">knows.</span> <span m="1107280">Add</span> <span
  m="1107440">some</span> <span m="1107600">other</span> <span
  m="1107860">edges,</span> <span m="1108835">uncommon</span> <span
  m="1109480">neighbors.</span> <span m="1111160">When</span> <span
  m="1111390">I</span> <span m="1111470">merge,</span> <span
  m="1113020">I'd</span> <span m="1113270">like</span> <span
  m="1113580">to</span> <span m="1119880">just</span> <span
  m="1120080">have</span> <span m="1120250">a</span> <span
  m="1120300">single</span> <span m="1120770">edge</span> <span
  m="1121200">to</span> <span m="1121320">that</span> <span
  m="1121570">vertex</span> <span m="1122040">and</span> <span
  m="1122130">a</span> <span m="1122200">single</span> <span
  m="1122580">edge</span> <span m="1122790">to that</span> <span
  m="1123020">vertex.</span></p><p><span m="1124310">And</span> <span
  m="1124530">what</span> <span m="1124680">I'm</span> <span
  m="1124760">going</span> <span m="1124860">to</span> <span
  m="1124950">do</span> <span m="1125080">is,</span> <span m="1125310">if</span>
  <span m="1125360">I</span> <span m="1125440">have</span> <span
  m="1125710">some</span> <span m="1126160">weights</span> <span
  m="1126570">on</span> <span m="1126680">these</span> <span
  m="1126870">edges,</span> <span m="1127250">let's</span> <span
  m="1127380">say</span> <span m="1127670">a</span> <span m="1127940">and</span>
  <span m="1128210">b,</span> <span m="1129070">and</span> <span
  m="1129270">c</span> <span m="1129660">and</span> <span m="1129780">d,</span>
  <span m="1131510">I'm</span> <span m="1131680">just</span> <span
  m="1131870">going</span> <span m="1132000">to</span> <span
  m="1132070">take</span> <span m="1132290">the</span> <span
  m="1132390">minimum.</span> <span m="1137780">Because</span> <span
  m="1137990">what</span> <span m="1138120">I'm</span> <span
  m="1138240">about</span> <span m="1138530">to</span> <span
  m="1138630">do</span> <span m="1138880">is</span> <span
  m="1139090">compute</span> <span m="1139410">a</span> <span
  m="1139480">minimum</span> <span m="1139800">spanning</span> <span
  m="1140180">tree</span> <span m="1140420">in</span> <span
  m="1140530">this</span> <span m="1140760">graph.</span> <span
  m="1142810">And</span> <span m="1142930">if</span> <span m="1143010">I</span>
  <span m="1143090">take</span> <span m="1143280">the</span> <span
  m="1143370">minimum</span> <span m="1143620">spanning</span> <span
  m="1143920">tree</span> <span m="1144120">here,</span> <span
  m="1144700">and</span> <span m="1144930">I</span> <span m="1144970">had</span>
  <span m="1145260">multiple</span> <span m="1145800">edges--</span> <span
  m="1146410">one</span> <span m="1146820">weight</span> <span
  m="1147040">a,</span> <span m="1147250">one</span> <span
  m="1147530">weight</span> <span m="1147690">b--</span> <span m="1148310">do
  you</span> <span m="1148420">think</span> <span m="1148680">I</span> <span
  m="1148750">would</span> <span m="1148930">choose</span> <span
  m="1149260">the</span> <span m="1149380">larger</span> <span
  m="1149890">weight</span> <span m="1150150">edge?</span> <span
  m="1151170">It</span> <span m="1151310">does--</span> <span
  m="1151710">they're</span> <span m="1151880">exactly</span> <span
  m="1152400">the</span> <span m="1152510">same</span> <span m="1152780">edge,
  but</span> <span m="1152960">one</span> <span m="1153330">is</span> <span
  m="1153440">higher</span> <span m="1153740">weight.</span> <span
  m="1154240">There's</span> <span m="1154410">no</span> <span
  m="1154580">point</span> <span m="1154840">in</span> <span
  m="1154900">keeping</span> <span m="1155220">the</span> <span
  m="1155280">higher</span> <span m="1155550">weight</span> <span
  m="1155750">one,</span> <span m="1156010">so</span> <span
  m="1156140">I'm</span> <span m="1156230">just</span> <span
  m="1156370">going</span> <span m="1156480">to</span> <span
  m="1156540">throw</span> <span m="1156840">away</span> <span
  m="1157720">the</span> <span m="1157780">higher</span> <span
  m="1158020">weight</span> <span m="1158200">one.</span> <span
  m="1158840">Take</span> <span m="1159010">them</span> <span
  m="1159090">in.</span></p><p><span m="1160500">So</span> <span
  m="1160700">this</span> <span m="1160920">is</span> <span m="1161080">a</span>
  <span m="1161180">particular</span> <span m="1161700">form</span> <span
  m="1162040">of</span> <span m="1162450">edge</span> <span
  m="1162670">contraction</span> <span m="1163420">and</span> <span
  m="1163540">graphs.</span> <span m="1166300">And</span> <span
  m="1166480">I</span> <span m="1166550">claim</span> <span
  m="1167400">it's</span> <span m="1167670">a</span> <span
  m="1167730">good</span> <span m="1167920">thing</span> <span
  m="1168130">to</span> <span m="1168280">do,</span> <span m="1169650">in</span>
  <span m="1169800">the</span> <span m="1169900">sense</span> <span
  m="1170180">that</span> <span m="1170330">if</span> <span m="1170530">I</span>
  <span m="1170620">can</span> <span m="1170810">find</span> <span
  m="1171080">a</span> <span m="1171130">minimum</span> <span
  m="1171480">spanning</span> <span m="1171880">tree</span> <span
  m="1172190">in</span> <span m="1172320">this</span> <span
  m="1172550">new</span> <span m="1172760">graph--</span> <span
  m="1173780">this</span> <span m="1173960">is</span> <span
  m="1174080">usually</span> <span m="1174470">called</span> <span
  m="1175020">a</span> <span m="1176080">G</span> <span m="1176512">slash</span>
  <span m="1176944">e,</span> <span m="1177810">slash</span> <span
  m="1178320">instead</span> <span m="1178640">of</span> <span
  m="1178920">negative,</span> <span m="1180620">to</span> <span
  m="1180830">remove</span> <span m="1181190">e.</span> <span
  m="1181983">I'm</span> <span m="1182670">contracting</span> <span
  m="1183115">e.</span> <span m="1184552">So this is</span> <span
  m="1185050">G</span> <span m="1185290">slash</span> <span
  m="1185450">e.</span> <span m="1186680">This</span> <span
  m="1186820">is</span> <span m="1187010">G.</span> <span m="1189870">If</span>
  <span m="1190060">I</span> <span m="1190130">can</span> <span
  m="1190300">find</span> <span m="1190500">a</span> <span
  m="1191020">minimum</span> <span m="1191340">spanning</span> <span
  m="1191700">tree</span> <span m="1191930">in G slash</span> <span
  m="1192260">e,</span> <span m="1192575">I</span> <span
  m="1192890">claim</span> <span m="1193690">I</span> <span
  m="1193820">can</span> <span m="1194000">find</span> <span
  m="1194340">one</span> <span m="1195390">in</span> <span
  m="1196030">the</span> <span m="1196140">original</span> <span
  m="1196480">graph</span> <span m="1196760">G</span> <span
  m="1197570">just</span> <span m="1197810">by</span> <span
  m="1197960">adding</span> <span m="1198320">the</span> <span
  m="1198460">edge</span> <span m="1198800">e.</span> <span
  m="1200680">So</span> <span m="1200980">I'm</span> <span
  m="1201090">going</span> <span m="1201180">to</span> <span
  m="1201250">say</span> <span m="1204420">if</span> <span m="1204970">G</span>
  <span m="1205960">prime</span> <span m="1208520">is</span> <span
  m="1208690">a</span> <span m="1208760">minimum</span> <span
  m="1209120">spanning</span> <span m="1209520">tree,</span> <span
  m="1210720">of</span> <span m="1211520">G</span> <span
  m="1211900">slash</span> <span m="1212280">e,</span> <span
  m="1214350">then</span> <span m="1216740">T</span> <span
  m="1216980">prime</span> <span m="1217630">union</span> <span
  m="1218350">e</span> <span m="1222100">is</span> <span m="1222280">a</span>
  <span m="1222350">minimum</span> <span m="1222700">spanning</span> <span
  m="1223130">tree</span> <span m="1224022">of</span> <span
  m="1224914">G.</span></p><p><span m="1229630">So</span> <span
  m="1229970">overall,</span> <span m="1230430">you</span> <span
  m="1230620">can</span> <span m="1230790">think</span> <span
  m="1230990">of</span> <span m="1231060">this</span> <span
  m="1231270">as</span> <span m="1231430">a</span> <span
  m="1231560">recurrence</span> <span m="1232170">in</span> <span
  m="1232270">a</span> <span m="1232350">dynamic</span> <span
  m="1232770">program,</span> <span m="1233620">and</span> <span
  m="1234470">let</span> <span m="1234610">me</span> <span
  m="1234760">write</span> <span m="1234960">down</span> <span
  m="1235160">that</span> <span m="1235320">dynamic</span> <span
  m="1235670">program.</span> <span m="1239130">It</span> <span
  m="1239230">won't</span> <span m="1239430">be</span> <span
  m="1239570">very</span> <span m="1239850">good</span> <span
  m="1240240">dynamic</span> <span m="1240670">program,</span> <span
  m="1241200">but</span> <span m="1241700">it's a</span> <span
  m="1241770">starting</span> <span m="1242080">point.</span> <span
  m="1252880">This</span> <span m="1252930">is</span> <span
  m="1253110">conceptually</span> <span m="1253630">what</span> <span
  m="1253820">we</span> <span m="1253920">want</span> <span
  m="1254130">to</span> <span m="1254210">do.</span> <span
  m="1255010">We're</span> <span m="1255200">trying</span> <span
  m="1255430">to</span> <span m="1255490">guess</span> <span
  m="1256700">an</span> <span m="1256860">edge</span> <span m="1257200">e</span>
  <span m="1260110">that's</span> <span m="1260340">in</span> <span
  m="1261070">a</span> <span m="1261330">minimum</span> <span
  m="1261670">spanning</span> <span m="1262030">tree.</span> <span
  m="1263960">Then</span> <span m="1264240">we're</span> <span
  m="1264370">going</span> <span m="1264470">to</span> <span
  m="1264540">contract</span> <span m="1265020">that</span> <span
  m="1265190">edge.</span> <span m="1270030">Then</span> <span
  m="1270210">we're</span> <span m="1270350">going</span> <span
  m="1270570">to</span> <span m="1270680">recurse,</span> <span
  m="1272370">find</span> <span m="1272730">the</span> <span
  m="1272820">minimum</span> <span m="1273070">spanning</span> <span
  m="1273430">tree</span> <span m="1273720">on</span> <span
  m="1273820">what</span> <span m="1273980">remains,</span> <span
  m="1275280">and</span> <span m="1275450">then</span> <span
  m="1276780">we</span> <span m="1276960">find</span> <span m="1277570">the
  minimum</span> <span m="1277830">spanning</span> <span
  m="1278120">tree.</span> <span m="1278310">Then</span> <span
  m="1278460">we</span> <span m="1278590">want</span> <span
  m="1278780">to</span> <span m="1278860">decontract</span> <span
  m="1279540">the</span> <span m="1279670">edge,</span> <span
  m="1280750">put</span> <span m="1280990">it</span> <span
  m="1281070">back,</span> <span m="1281460">put</span> <span
  m="1281650">the</span> <span m="1281730">graph</span> <span
  m="1282020">back</span> <span m="1282240">the</span> <span
  m="1282330">way</span> <span m="1282460">it</span> <span
  m="1282540">was.</span> <span m="1284670">And</span> <span
  m="1284880">then</span> <span m="1285160">add</span> <span
  m="1285660">e</span> <span m="1285950">to</span> <span m="1286090">the</span>
  <span m="1286180">minimum</span> <span m="1286480">spanning</span> <span
  m="1286880">tree.</span></p><p><span m="1291700">And</span> <span
  m="1291890">what</span> <span m="1292080">this</span> <span
  m="1292950">lemma</span> <span m="1293320">tells</span> <span
  m="1293670">us,</span> <span m="1294710">is</span> <span
  m="1294890">that</span> <span m="1295100">this</span> <span
  m="1295270">is</span> <span m="1295400">a</span> <span
  m="1295490">correct</span> <span m="1295920">algorithm.</span> <span
  m="1299110">If</span> <span m="1299300">you're</span> <span
  m="1300150">lucky--</span> <span m="1300750">and</span> <span
  m="1300880">we're</span> <span m="1301010">going</span> <span
  m="1301120">to</span> <span m="1301240">force</span> <span
  m="1301540">luckiness</span> <span m="1301990">by</span> <span
  m="1302120">trying</span> <span m="1302500">all</span> <span
  m="1302690">edges--</span> <span m="1303250">but</span> <span
  m="1303310">if</span> <span m="1303450">we</span> <span
  m="1303660">start</span> <span m="1304010">with</span> <span
  m="1304160">an</span> <span m="1304260">edge</span> <span
  m="1304550">that</span> <span m="1304710">is</span> <span
  m="1304860">guaranteed</span> <span m="1305610">to</span> <span
  m="1305710">be</span> <span m="1305910">in</span> <span
  m="1306010">some</span> <span m="1306360">minimum</span> <span
  m="1306670">spanning</span> <span m="1307030">tree,</span> <span
  m="1307840">call</span> <span m="1308040">it</span> <span m="1308140">a</span>
  <span m="1308210">safe</span> <span m="1308650">edge,</span> <span
  m="1310100">and</span> <span m="1310310">we</span> <span
  m="1310430">contract,</span> <span m="1311390">and</span> <span
  m="1311520">we</span> <span m="1311630">find a</span> <span
  m="1311910">minimum</span> <span m="1312160">spanning</span> <span
  m="1312480">tree</span> <span m="1312630">on</span> <span
  m="1312730">what</span> <span m="1312900">remains,</span> <span
  m="1313710">then</span> <span m="1313860">we</span> <span
  m="1313980">can</span> <span m="1314110">put</span> <span m="1314320">e</span>
  <span m="1314510">back</span> <span m="1314790">in</span> <span
  m="1315780">at</span> <span m="1316000">the</span> <span
  m="1316140">end,</span> <span m="1316760">and</span> <span
  m="1316950">we'll</span> <span m="1317040">get</span> <span
  m="1317200">a</span> <span m="1317240">minimum</span> <span
  m="1317520">spanning</span> <span m="1317890">tree</span> <span
  m="1318190">of</span> <span m="1318380">the</span> <span
  m="1318550">original</span> <span m="1318920">graph.</span> <span
  m="1320230">So</span> <span m="1320540">this</span> <span
  m="1321160">gives</span> <span m="1321400">us</span> <span
  m="1321610">correctness</span> <span m="1322790">of</span> <span
  m="1322930">this</span> <span m="1323080">algorithm.</span></p><p><span
  m="1323780">Now,</span> <span m="1324850">this algorithm's</span> <span
  m="1325410">bad,</span> <span m="1325970">again,</span> <span
  m="1326380">from</span> <span m="1326650">a</span> <span
  m="1326720">complexity</span> <span m="1327290">standpoint.</span> <span
  m="1328360">The</span> <span m="1328520">running</span> <span
  m="1328770">time</span> <span m="1329020">is</span> <span
  m="1329120">going</span> <span m="1329250">to</span> <span
  m="1329320">be</span> <span m="1329540">exponential.</span> <span
  m="1331300">The</span> <span m="1331400">number</span> <span
  m="1331650">of</span> <span m="1331710">sub</span> <span
  m="1331970">problems</span> <span m="1332400">we</span> <span
  m="1332490">might</span> <span m="1332670">have</span> <span
  m="1332810">to</span> <span m="1332900">consider</span> <span
  m="1333270">here</span> <span m="1333540">is</span> <span
  m="1333660">all</span> <span m="1333900">subsets</span> <span
  m="1334380">of</span> <span m="1334490">edges.</span> <span
  m="1334960">There's</span> <span m="1335140">no</span> <span
  m="1335310">particular</span> <span m="1336130">way--</span> <span
  m="1337680">because</span> <span m="1338150">at</span> <span
  m="1338220">every</span> <span m="1338550">step,</span> <span
  m="1338940">we're</span> <span m="1339300">guessing</span> <span
  m="1339820">an</span> <span m="1339900">arbitrary</span> <span
  m="1340440">edge</span> <span m="1340800">in</span> <span
  m="1340910">the</span> <span m="1340990">graph,</span> <span
  m="1342240">there's</span> <span m="1342520">no</span> <span
  m="1342670">structure.</span> <span m="1343530">Like,</span> <span
  m="1343670">we</span> <span m="1343750">can't</span> <span
  m="1343990">say</span> <span m="1344200">well, it's</span> <span
  m="1344470">the</span> <span m="1344550">first</span> <span
  m="1344960">k</span> <span m="1345280">edges,</span> <span
  m="1345860">or</span> <span m="1346370">some</span> <span
  m="1346540">substring</span> <span m="1347070">of</span> <span
  m="1347400">edges.</span> <span m="1347890">It's</span> <span
  m="1348110">just</span> <span m="1348320">going</span> <span
  m="1348420">to</span> <span m="1348460">be</span> <span
  m="1348570">some</span> <span m="1348860">subset</span> <span
  m="1349270">of</span> <span m="1349350">edges.</span> <span
  m="1350210">There's</span> <span m="1350370">exponentially</span> <span
  m="1350950">many</span> <span m="1351160">subsets,</span> <span m="1351610">2
  to the</span> <span m="1351750">e,</span> <span m="1353080">so</span> <span
  m="1353290">this</span> <span m="1353510">is</span> <span
  m="1353680">exponential.</span></p><p><span m="1359370">But</span> <span
  m="1360460">we're</span> <span m="1360730">going</span> <span
  m="1360880">to</span> <span m="1360950">make</span> <span m="1361150">a</span>
  <span m="1361220">polynomial</span> <span m="1362980">by</span> <span
  m="1363620">removing</span> <span m="1364080">the</span> <span
  m="1364180">guessing.</span> <span m="1364830">This</span> <span
  m="1365020">is</span> <span m="1365130">actually</span> <span
  m="1365470">a</span> <span m="1365530">really</span> <span
  m="1365770">good</span> <span m="1365930">prototype</span> <span
  m="1366460">for a</span> <span m="1366650">greedy</span> <span
  m="1366960">algorithm.</span> <span m="1367910">If</span> <span
  m="1368140">instead</span> <span m="1368510">of</span> <span
  m="1368640">guessing,</span> <span m="1369320">trying</span> <span
  m="1369600">all</span> <span m="1369840">edges,</span> <span
  m="1370400">if</span> <span m="1370650">we</span> <span
  m="1370770">could</span> <span m="1370920">find</span> <span
  m="1371180">a</span> <span m="1371270">good</span> <span
  m="1371530">edge</span> <span m="1371790">to</span> <span
  m="1371920">choose</span> <span m="1372440">that's</span> <span
  m="1372620">guaranteed</span> <span m="1373210">to</span> <span
  m="1373270">be</span> <span m="1373400">in</span> <span m="1373480">a</span>
  <span m="1373520">minimum</span> <span m="1373800">spanning</span> <span
  m="1374180">tree,</span> <span m="1375870">then</span> <span
  m="1376210">we</span> <span m="1376340">could</span> <span
  m="1376730">actually</span> <span m="1377060">follow</span> <span
  m="1377330">this</span> <span m="1377520">procedure,</span> <span
  m="1378290">and</span> <span m="1378400">this</span> <span
  m="1378550">would</span> <span m="1378640">be</span> <span
  m="1378830">like</span> <span m="1379495">an</span> <span
  m="1379920">iterative</span> <span m="1380330">algorithm.</span> <span
  m="1381750">If</span> <span m="1382000">you--</span> <span m="1382480">you
  don't</span> <span m="1382710">guess--</span> <span m="1383110">you</span>
  <span m="1384020">correctly</span> <span m="1384610">choose</span> <span
  m="1385260">a</span> <span m="1385410">good--</span> <span
  m="1386000">you</span> <span m="1386140">take</span> <span
  m="1386400">the</span> <span m="1386490">biggest</span> <span
  m="1387030">cookie,</span> <span m="1388090">you</span> <span
  m="1388270">contract</span> <span m="1388780">it,</span> <span
  m="1389320">and</span> <span m="1389490">then</span> <span
  m="1389770">you</span> <span m="1390090">repeat</span> <span
  m="1390440">that</span> <span m="1390630">process</span> <span
  m="1391050">over</span> <span m="1391270">and</span> <span
  m="1391340">over,</span> <span m="1391570">that</span> <span
  m="1391770">would</span> <span m="1391920">be</span> <span
  m="1392140">a</span> <span m="1392170">prototype</span> <span m="1392680">for
  a</span> <span m="1392840">greedy</span> <span m="1393100">algorithm</span>
  <span m="1393540">and that's</span> <span m="1393770">what's</span> <span
  m="1393940">going</span> <span m="1394050">to</span> <span
  m="1394120">work.</span> <span m="1394760">There's</span> <span
  m="1394880">different</span> <span m="1395200">ways</span> <span
  m="1395450">to</span> <span m="1395550">choose</span> <span
  m="1395850">this</span> <span m="1395970">greedy</span> <span
  m="1396290">edge,</span> <span m="1396440">and we're</span> <span
  m="1396640">going</span> <span m="1396750">to</span> <span
  m="1396790">get</span> <span m="1396970">two</span> <span
  m="1397090">different</span> <span m="1397360">algorithms</span> <span
  m="1397840">accordingly.</span> <span m="1399550">But</span> <span
  m="1399680">that's</span> <span m="1399860">where</span> <span
  m="1399980">we're</span> <span m="1400120">going.</span></p><p><span
  m="1400440">First,</span> <span m="1400840">I</span> <span
  m="1400940">should</span> <span m="1401020">prove</span> <span
  m="1401790">this</span> <span m="1402210">claim,</span> <span
  m="1402580">cause, you know,</span> <span m="1403050">where</span> <span
  m="1403310">did</span> <span m="1403850">edge</span> <span
  m="1404070">contraction</span> <span m="1404640">come</span> <span
  m="1404810">from?</span> <span m="1405010">Why</span> <span
  m="1405150">does</span> <span m="1405290">it</span> <span
  m="1405370">work?</span> <span m="1409422">It's</span> <span
  m="1409910">not</span> <span m="1410140">too</span> <span
  m="1410300">hard</span> <span m="1410460">to</span> <span
  m="1410530">prove.</span> <span m="1411970">Let's</span> <span
  m="1412230">do</span> <span m="1412350">it.</span> <span
  m="1426000">Question?</span> <span m="1427070">Oh.</span> <span
  m="1427990">All right.</span> <span m="1430290">I should be</span> <span
  m="1430500">able to do this</span> <span m="1430820">without</span> <span
  m="1431120">looking.</span> <span m="1433670">So--</span></p><p><span
  m="1435550">Proof</span> <span m="1435940">of</span> <span
  m="1436280">optimal</span> <span m="1436820">substructure.</span> <span
  m="1437500">So</span> <span m="1437620">we're</span> <span
  m="1437710">given</span> <span m="1437990">a</span> <span
  m="1438070">lot.</span> <span m="1438630">We're</span> <span
  m="1438780">told</span> <span m="1439220">that</span> <span
  m="1439340">e</span> <span m="1439630">belongs</span> <span m="1440120">to
  a</span> <span m="1440270">minimize</span> <span m="1440630">spanning</span>
  <span m="1440980">tree.</span> <span m="1441200">Let's</span> <span
  m="1441400">give</span> <span m="1441570">that</span> <span
  m="1441870">spanning</span> <span m="1442200">tree</span> <span m="1442420">a
  name.</span> <span m="1443780">Say</span> <span m="1445080">we</span> <span
  m="1445240">have</span> <span m="1445330">a</span> <span
  m="1445390">minimum</span> <span m="1445760">spanning</span> <span
  m="1445850">tree</span> <span m="1446360">T</span> <span
  m="1446660">star,</span> <span m="1447980">which</span> <span
  m="1448220">contains</span> <span m="1449020">e.</span> <span
  m="1450700">So</span> <span m="1451000">we're</span> <span
  m="1451100">assuming</span> <span m="1451470">that</span> <span
  m="1451640">exists,</span> <span m="1452860">then</span> <span
  m="1453040">we</span> <span m="1453140">contract</span> <span
  m="1453770">e.</span> <span m="1455090">And</span> <span
  m="1455250">then</span> <span m="1455420">we're</span> <span
  m="1455520">given</span> <span m="1455790">T</span> <span
  m="1456010">prime,</span> <span m="1456550">which</span> <span
  m="1456600">is</span> <span m="1456730">a</span> <span
  m="1456790">minimum</span> <span m="1457090">spanning</span> <span
  m="1457480">tree</span> <span m="1457820">of</span> <span m="1458050">G</span>
  <span m="1458423">slash</span> <span m="1458796">e.</span> <span
  m="1460450">And</span> <span m="1460690">then</span> <span
  m="1460840">we</span> <span m="1460940">want</span> <span
  m="1461130">to</span> <span m="1461190">analyze</span> <span
  m="1461690">this</span> <span m="1461950">thing.</span> <span
  m="1462250">So</span> <span m="1462440">I</span> <span m="1462500">want</span>
  <span m="1462680">to</span> <span m="1462740">claim</span> <span
  m="1463560">that this</span> <span m="1463950">thing</span> <span
  m="1464160">is</span> <span m="1464280">a</span> <span
  m="1464330">minimum</span> <span m="1464600">spanning</span> <span
  m="1465000">tree,</span> <span m="1465880">in</span> <span
  m="1466040">other</span> <span m="1466190">words,</span> <span
  m="1466410">that</span> <span m="1466570">the</span> <span
  m="1466670">weight</span> <span m="1467060">of</span> <span
  m="1467210">that</span> <span m="1467460">spanning</span> <span
  m="1467800">tree</span> <span m="1469360">is</span> <span
  m="1470700">equal</span> <span m="1471110">to</span> <span
  m="1471320">the</span> <span m="1471450">weight</span> <span
  m="1471630">of</span> <span m="1471720">this</span> <span
  m="1471830">spanning</span> <span m="1472200">tree,</span> <span
  m="1472310">because</span> <span m="1472470">this</span> <span
  m="1472680">one</span> <span m="1472870">is</span> <span
  m="1473040">minimum.</span> <span m="1474600">This</span> <span
  m="1474790">is</span> <span m="1474990">a</span> <span
  m="1475060">minimum</span> <span m="1475290">spanning</span> <span
  m="1475610">of</span> <span m="1475946">G.</span> <span m="1477960">And</span>
  <span m="1478170">this</span> <span m="1478300">is</span> <span
  m="1478430">also</span> <span m="1478710">supposed</span> <span
  m="1479030">to</span> <span m="1479070">be</span> <span m="1479190">a</span>
  <span m="1479240">minimum</span> <span m="1479520">spanning</span> <span
  m="1479870">tree</span> <span m="1480150">of</span> <span
  m="1480410">G.</span></p><p><span m="1484680">OK.</span> <span
  m="1486460">Sounds</span> <span m="1487180">easy,</span> <span
  m="1487830">right?</span> <span m="1489920">I'm</span> <span
  m="1490130">going</span> <span m="1490220">to</span> <span
  m="1490280">cheat,</span> <span m="1490910">sorry.</span> <span
  m="1500330">I</span> <span m="1500620">see.</span> <span
  m="1500990">Right.</span> <span m="1501400">Duh.</span> <span
  m="1503050">Easy,</span> <span m="1503290">once</span> <span m="1503630">you
  know</span> <span m="1503970">how.</span></p><p><span m="1504640">So</span>
  <span m="1505120">what</span> <span m="1505320">we're</span> <span
  m="1505440">going</span> <span m="1505550">to</span> <span
  m="1505640">do</span> <span m="1507220">is</span> <span
  m="1507420">think</span> <span m="1507590">about</span> <span
  m="1507850">contracting</span> <span m="1508490">e.</span> <span
  m="1509760">OK,</span> <span m="1509960">we</span> <span
  m="1510090">already</span> <span m="1510320">know</span> <span
  m="1510710">we're</span> <span m="1510890">supposed</span> <span
  m="1511160">to</span> <span m="1511230">be</span> <span
  m="1511420">thinking</span> <span m="1511640">about</span> <span
  m="1511840">contracting</span> <span m="1512270">e</span> <span
  m="1512590">in</span> <span m="1512690">the</span> <span
  m="1512770">graph.</span> <span m="1513760">Let's</span> <span
  m="1513920">look</span> <span m="1514130">at</span> <span
  m="1514280">how</span> <span m="1514780">it</span> <span
  m="1515020">changes</span> <span m="1515590">that</span> <span
  m="1515840">given</span> <span m="1516090">minimum</span> <span
  m="1516490">spanning</span> <span m="1516880">tree.</span> <span
  m="1517720">So</span> <span m="1517790">we</span> <span
  m="1517870">have</span> <span m="1518090">T</span> <span
  m="1518290">star,</span> <span m="1519760">minimum</span> <span
  m="1520070">spanning tree</span> <span m="1520410">of the</span> <span
  m="1520500">whole</span> <span m="1520750">graph,</span> <span
  m="1521590">and</span> <span m="1521730">then</span> <span
  m="1522040">I'm</span> <span m="1522280">going</span> <span
  m="1522550">to</span> <span m="1523360">contract</span> <span
  m="1524030">e.</span> <span m="1525900">What</span> <span m="1526120">I</span>
  <span m="1526170">mean</span> <span m="1526380">is,</span> <span
  m="1527070">if</span> <span m="1527310">that</span> <span
  m="1527500">edge</span> <span m="1527700">happens</span> <span
  m="1528060">to</span> <span m="1528150">be</span> <span m="1528370">in
  the</span> <span m="1528490">spanning</span> <span m="1528800">tree--</span>
  <span m="1529870">it</span> <span m="1530020">is,</span> <span
  m="1530390">actually.</span> <span m="1531640">We</span> <span
  m="1531770">assumed</span> <span m="1532060">that</span> <span
  m="1532210">e</span> <span m="1532360">is</span> <span m="1532680">in</span>
  <span m="1532820">there.</span> <span m="1533540">So</span> <span
  m="1533830">I'm</span> <span m="1533980">basically</span> <span
  m="1534400">removing,</span> <span m="1535820">I'm</span> <span
  m="1535990">just</span> <span m="1536330">deleting</span> <span
  m="1536740">that</span> <span m="1536960">edge,</span> <span
  m="1538090">maybe</span> <span m="1538390">I</span> <span
  m="1538440">should</span> <span m="1538630">call</span> <span
  m="1538860">it</span> <span m="1539490">minus</span> <span
  m="1539950">e.</span> <span m="1543160">Then</span> <span
  m="1543530">that</span> <span m="1543760">should</span> <span
  m="1543960">be</span> <span m="1546440">a</span> <span
  m="1546510">spanning</span> <span m="1546900">tree</span> <span
  m="1551266">of</span> <span m="1552700">G slash</span> <span
  m="1553195">e.</span></p><p><span m="1553930">So</span> <span
  m="1554070">when</span> <span m="1554200">I</span> <span
  m="1554260">contract</span> <span m="1554780">the</span> <span
  m="1554910">edge in</span> <span m="1555130">the</span> <span
  m="1555220">graph,</span> <span m="1556580">if</span> <span
  m="1556830">I</span> <span m="1556890">throw</span> <span
  m="1557250">away</span> <span m="1557410">the</span> <span
  m="1557560">edge</span> <span m="1557790">from</span> <span
  m="1558040">this</span> <span m="1558160">spanning</span> <span
  m="1558600">tree,</span> <span m="1559440">I</span> <span
  m="1559600">should</span> <span m="1559810">still</span> <span
  m="1560070">have</span> <span m="1560290">a</span> <span
  m="1560400">spanning</span> <span m="1560800">tree,</span> <span
  m="1560950">and</span> <span m="1561050">I</span> <span
  m="1561120">don't</span> <span m="1561330">know</span> <span
  m="1561510">whether</span> <span m="1561720">it's</span> <span
  m="1561870">minimum.</span> <span m="1562750">Probably,</span> <span
  m="1563380">it</span> <span m="1563480">is,</span> <span
  m="1564040">but</span> <span m="1564750">we</span> <span
  m="1564920">won't</span> <span m="1565110">prove</span> <span
  m="1565300">that</span> <span m="1565480">right</span> <span
  m="1565660">now.</span> <span m="1568930">I</span> <span
  m="1569010">claim</span> <span m="1569240">it's</span> <span m="1569310">still
  a</span> <span m="1569520">spanning</span> <span m="1569860">tree.</span>
  <span m="1571140">What</span> <span m="1571300">would</span> <span
  m="1571420">that</span> <span m="1571620">take?</span> <span
  m="1571980">It</span> <span m="1572160">still</span> <span
  m="1572630">hits</span> <span m="1572980">all</span> <span
  m="1573230">the</span> <span m="1573320">vertices,</span> <span
  m="1574190">because</span> <span m="1575930">if</span> <span
  m="1576120">I</span> <span m="1576200">removed</span> <span
  m="1576600">the</span> <span m="1576760">edge,</span> <span
  m="1577720">things</span> <span m="1577940">would</span> <span
  m="1578180">not</span> <span m="1578580">be</span> <span
  m="1578710">connected</span> <span m="1579100">together.</span> <span
  m="1579520">But</span> <span m="1581330">this</span> <span
  m="1581640">edge</span> <span m="1581850">was</span> <span
  m="1582070">in</span> <span m="1582260">the</span> <span
  m="1582340">spanning</span> <span m="1582730">tree,</span> <span
  m="1583780">and</span> <span m="1583980">then</span> <span
  m="1584150">I</span> <span m="1584420">fused</span> <span
  m="1584830">those</span> <span m="1585030">two</span> <span
  m="1585190">vertices</span> <span m="1585680">together,</span> <span
  m="1586600">so</span> <span m="1587390">whatever</span> <span
  m="1587830">spanning--</span> <span m="1588340">I mean,</span> <span
  m="1588580">whatever</span> <span m="1588880">was</span> <span
  m="1589050">connected</span> <span m="1589390">before</span> <span
  m="1589810">is</span> <span m="1589940">still</span> <span
  m="1590180">connected.</span></p><p><span m="1590820">Contraction</span> <span
  m="1591570">generally</span> <span m="1591890">preserves</span> <span
  m="1592850">connectivity.</span> <span m="1594690">If these</span> <span
  m="1594870">things</span> <span m="1595040">were</span> <span
  m="1595160">already</span> <span m="1595400">connected</span> <span
  m="1595730">directly</span> <span m="1596020">by</span> <span
  m="1596150">an</span> <span m="1596240">edge</span> <span
  m="1596410">when</span> <span m="1596540">I</span> <span
  m="1596600">contract,</span> <span m="1597540">I</span> <span
  m="1597640">still</span> <span m="1597960">have</span> <span
  m="1598150">a</span> <span m="1598230">connected</span> <span
  m="1598730">structure,</span> <span m="1599270">so</span> <span
  m="1599470">I'm</span> <span m="1599570">still</span> <span
  m="1599810">hitting</span> <span m="1600130">all</span> <span
  m="1600270">the</span> <span m="1600330">vertices.</span> <span
  m="1602000">And</span> <span m="1602240">also,</span> <span
  m="1602520">the</span> <span m="1603420">number</span> <span
  m="1603670">of</span> <span m="1603750">edges</span> <span
  m="1604130">is</span> <span m="1604270">still</span> <span
  m="1604490">exactly</span> <span m="1604980">right.</span> <span
  m="1605260">Before,</span> <span m="1605610">I</span> <span
  m="1605650">had</span> <span m="1605840">n</span> <span
  m="1605950">minus</span> <span m="1606270">1</span> <span
  m="1606670">edges.</span> <span m="1607530">Afterwards,</span> <span
  m="1608040">I'll</span> <span m="1608120">still</span> <span
  m="1608330">have</span> <span m="1608490">n</span> <span
  m="1608600">minus</span> <span m="1608850">1</span> <span
  m="1609030">edges,</span> <span m="1609350">because</span> <span
  m="1609680">I</span> <span m="1609710">removed</span> <span m="1610020">one
  edge</span> <span m="1610210">and</span> <span m="1610490">I</span> <span
  m="1610530">removed</span> <span m="1610840">one</span> <span
  m="1611030">vertex,</span> <span m="1611660">in</span> <span
  m="1611720">terms</span> <span m="1611950">of</span> <span m="1612060">the
  count.</span> <span m="1612990">So</span> <span m="1613200">that</span> <span
  m="1613430">proves</span> <span m="1613740">that</span> <span
  m="1613880">it's</span> <span m="1614030">still a</span> <span
  m="1614250">spanning</span> <span m="1614600">tree,</span> <span
  m="1615870">using</span> <span m="1616450">properties</span> <span
  m="1616890">of</span> <span m="1617150">trees.</span></p><p><span
  m="1620330">Cool.</span> <span m="1622370">So</span> <span
  m="1622630">that</span> <span m="1622840">means</span> <span
  m="1624150">the</span> <span m="1624320">minimum</span> <span
  m="1625020">spanning</span> <span m="1625510">tree,</span> <span
  m="1626920">this</span> <span m="1627170">thing,</span> <span
  m="1627390">T</span> <span m="1627680">prime,</span> <span
  m="1628360">the</span> <span m="1628450">minimum</span> <span
  m="1628720">spanning</span> <span m="1629030">tree</span> <span
  m="1629200">of</span> <span m="1629390">G slash</span> <span
  m="1629790">e,</span> <span m="1630690">has</span> <span m="1631000">a</span>
  <span m="1631110">smaller</span> <span m="1632030">weight</span> <span
  m="1632360">than</span> <span m="1632500">this</span> <span
  m="1632710">one.</span> <span m="1633150">Because</span> <span
  m="1633330">this</span> <span m="1633470">is</span> <span m="1633650">a</span>
  <span m="1633830">spanning</span> <span m="1634230">tree,</span> <span
  m="1634420">the</span> <span m="1634520">minimum</span> <span
  m="1634910">is</span> <span m="1635000">smaller</span> <span
  m="1635400">than</span> <span m="1635560">all</span> <span
  m="1635760">spanning</span> <span m="1636110">trees.</span> <span
  m="1636990">So</span> <span m="1637100">we</span> <span
  m="1637180">know</span> <span m="1637280">the</span> <span
  m="1637420">weight</span> <span m="1637780">of</span> <span
  m="1638050">T</span> <span m="1638320">prime</span> <span
  m="1639420">is</span> <span m="1639600">less</span> <span
  m="1639880">than</span> <span m="1640010">or</span> <span
  m="1640140">equal</span> <span m="1640460">to</span> <span
  m="1641290">the</span> <span m="1641410">weight</span> <span
  m="1641790">of</span> <span m="1642320">T</span> <span m="1642780">star</span>
  <span m="1644390">minus</span> <span m="1644850">e.</span> <span
  m="1649850">Cool.</span> <span m="1651340">And</span> <span
  m="1651520">now</span> <span m="1651690">we</span> <span
  m="1651780">want</span> <span m="1651950">to</span> <span
  m="1652010">know</span> <span m="1652120">about</span> <span
  m="1652390">this</span> <span m="1652620">thing,</span> <span
  m="1655030">the</span> <span m="1655260">weight</span> <span
  m="1656790">of</span> <span m="1656840">T</span> <span
  m="1657310">prime</span> <span m="1658070">plus</span> <span
  m="1658570">e.</span> <span m="1661020">Well,</span> <span
  m="1661200">that's</span> <span m="1661380">just</span> <span
  m="1661630">the</span> <span m="1661720">weight</span> <span
  m="1662050">of</span> <span m="1662380">T</span> <span
  m="1662560">prime</span> <span m="1663880">plus</span> <span
  m="1664200">the</span> <span m="1664300">weight</span> <span
  m="1664530">of</span> <span m="1664630">e,</span> <span
  m="1666650">because</span> <span m="1667220">the</span> <span
  m="1667300">weight</span> <span m="1667610">of</span> <span
  m="1667830">a</span> <span m="1667970">tree</span> <span m="1668240">is</span>
  <span m="1668380">just</span> <span m="1668560">the</span> <span
  m="1668630">sum</span> <span m="1668900">of</span> <span
  m="1668990">the</span> <span m="1669080">weights</span> <span
  m="1669190">of</span> <span m="1669320">the</span> <span
  m="1669440">edges.</span> <span m="1670670">So</span> <span
  m="1670770">this</span> <span m="1670990">is</span> <span
  m="1671150">less</span> <span m="1671410">than</span> <span
  m="1671500">or</span> <span m="1671600">equal</span> <span
  m="1671840">to</span> <span m="1672860">w</span> <span m="1673293">of</span>
  <span m="1673726">T</span> <span m="1674160">star</span> <span
  m="1675380">minus</span> <span m="1675920">e</span> <span
  m="1676480">plus</span> <span m="1677110">e,</span> <span
  m="1679420">which</span> <span m="1679730">is</span> <span
  m="1679830">just</span> <span m="1680140">the</span> <span
  m="1680940">weight</span> <span m="1681240">of</span> <span
  m="1681490">T</span> <span m="1681760">star.</span></p><p><span
  m="1685390">So</span> <span m="1685640">we</span> <span
  m="1685780">proved</span> <span m="1686150">that</span> <span
  m="1686340">the</span> <span m="1686450">weight</span> <span
  m="1686750">of</span> <span m="1686930">our</span> <span
  m="1687110">proposed</span> <span m="1687560">spanning</span> <span
  m="1687940">tree</span> <span m="1688640">is</span> <span
  m="1688830">less</span> <span m="1689150">than</span> <span
  m="1689280">or</span> <span m="1689360">equal</span> <span
  m="1689580">to</span> <span m="1689730">the</span> <span
  m="1689850">weight</span> <span m="1690180">of</span> <span
  m="1690360">the</span> <span m="1690450">minimum</span> <span
  m="1690820">spanning</span> <span m="1691170">tree</span> <span
  m="1691430">in</span> <span m="1691560">G,</span> <span m="1692520">and</span>
  <span m="1692670">therefore,</span> <span m="1693760">T</span> <span
  m="1693950">prime</span> <span m="1694300">union</span> <span
  m="1695180">e</span> <span m="1695460">actually</span> <span
  m="1695860">is</span> <span m="1695990">a</span> <span
  m="1696050">minimum</span> <span m="1696370">spanning</span> <span
  m="1696710">tree.</span> <span m="1697620">OK?</span> <span
  m="1697670">This</span> <span m="1697810">is</span> <span
  m="1698160">really</span> <span m="1698460">easy.</span> <span m="1708690">It
  actually</span> <span m="1709000">implies</span> <span m="1709400">that</span>
  <span m="1709500">all of</span> <span m="1709630">these</span> <span
  m="1710020">inequalities</span> <span m="1710610">have</span> <span
  m="1710750">to</span> <span m="1710850">be</span> <span
  m="1711030">equalities,</span> <span m="1711680">because</span> <span
  m="1711960">we</span> <span m="1712030">started</span> <span
  m="1712300">with</span> <span m="1712400">something</span> <span
  m="1712710">minimum.</span> <span m="1715810">Clear?</span> <span
  m="1716530">That's</span> <span m="1716790">the</span> <span
  m="1717870">easier</span> <span m="1718260">half.</span> <span
  m="1718640">The</span></p><p><span m="1718760">More</span> <span
  m="1718990">interesting</span> <span m="1719400">property</span> <span
  m="1719500">is</span> <span m="1719890">going</span> <span
  m="1720010">to</span> <span m="1720090">be</span> <span
  m="1720280">this</span> <span m="1720480">greedy</span> <span
  m="1720750">choice</span> <span m="1721070">property.</span> <span
  m="1722560">This</span> <span m="1722770">is</span> <span
  m="1722870">sort</span> <span m="1723080">of</span> <span
  m="1723130">where</span> <span m="1723260">the</span> <span
  m="1723410">action</span> <span m="1723750">is</span> <span
  m="1723920">for</span> <span m="1724060">greedy</span> <span
  m="1724330">algorithms,</span> <span m="1725040">and</span> <span
  m="1725320">this</span> <span m="1725480">is</span> <span
  m="1725770">usually</span> <span m="1726070">the</span> <span
  m="1726170">heart</span> <span m="1726510">of</span> <span
  m="1726630">proving</span> <span m="1727020">greedy</span> <span
  m="1727280">algorithms</span> <span m="1727730">are</span> <span
  m="1727860">correct.</span> <span m="1728710">We</span> <span
  m="1728830">don't</span> <span m="1729000">yet</span> <span
  m="1729150">have</span> <span m="1729400">a</span> <span
  m="1729450">greedy</span> <span m="1729720">algorithm,</span> <span
  m="1730190">but</span> <span m="1730460">we're</span> <span
  m="1730620">thinking</span> <span m="1730910">about</span> <span
  m="1731190">it.</span> <span m="1731930">We</span> <span
  m="1732120">need</span> <span m="1732320">some</span> <span
  m="1732610">way</span> <span m="1732960">to</span> <span
  m="1734070">intelligently</span> <span m="1734870">choose</span> <span
  m="1735210">an</span> <span m="1735310">edge</span> <span
  m="1735580">e,</span> <span m="1736540">and</span> <span
  m="1736780">I'm</span> <span m="1736850">going</span> <span
  m="1736960">to</span> <span m="1737010">give</span> <span
  m="1737180">you</span> <span m="1737310">a</span> <span
  m="1737360">whole</span> <span m="1737850">bunch</span> <span
  m="1738150">of</span> <span m="1738260">ways</span> <span
  m="1738580">to</span> <span m="1738680">intelligently</span> <span
  m="1739290">choose</span> <span m="1739560">an</span> <span m="1739650">edge
  e.</span></p><p><span m="1781130">So</span> <span m="1781340">here's</span>
  <span m="1781620">a</span> <span m="1781720">really</span> <span
  m="1782000">powerful</span> <span m="1782550">lemma,</span> <span
  m="1782720">and we're</span> <span m="1782920">going</span> <span
  m="1783040">to</span> <span m="1783090">make</span> <span
  m="1783300">it</span> <span m="1783400">even</span> <span
  m="1783620">stronger</span> <span m="1784010">in</span> <span
  m="1784090">a</span> <span m="1784130">moment.</span> <span
  m="1801100">So</span> <span m="1801450">I'm</span> <span
  m="1801540">going</span> <span m="1801640">to</span> <span
  m="1801680">introduce</span> <span m="1802030">the</span> <span
  m="1802090">notion</span> <span m="1802380">of</span> <span
  m="1802510">a</span> <span m="1802660">cut,</span> <span
  m="1804050">that's</span> <span m="1804210">going</span> <span
  m="1804310">to</span> <span m="1804350">be a</span> <span
  m="1804470">similar</span> <span m="1804860">picture to</span> <span
  m="1805300">what</span> <span m="1805450">I</span> <span
  m="1805500">had</span> <span m="1805680">before.</span> <span
  m="1807900">I'm</span> <span m="1807940">going</span> <span
  m="1808040">to</span> <span m="1808100">look</span> <span
  m="1808290">at</span> <span m="1808400">some</span> <span
  m="1808690">set</span> <span m="1809030">of</span> <span
  m="1809130">vertices.</span> <span m="1809760">S</span> <span
  m="1810460">here</span> <span m="1810790">is</span> <span m="1810910">a</span>
  <span m="1810990">subset</span> <span m="1811940">of</span> <span
  m="1812020">the</span> <span m="1812100">vertices,</span> <span
  m="1814080">and</span> <span m="1814690">that</span> <span
  m="1814910">leaves</span> <span m="1815240">in</span> <span
  m="1815330">the</span> <span m="1815420">graph,</span> <span
  m="1816020">everything</span> <span m="1816480">else.</span> <span
  m="1817100">This would</span> <span m="1817280">be</span> <span
  m="1817920">V</span> <span m="1818570">minus</span> <span
  m="1819200">S.</span> <span m="1821120">OK,</span> <span m="1821300">so</span>
  <span m="1821480">there's</span> <span m="1821640">some</span> <span
  m="1821830">vertices</span> <span m="1822230">over</span> <span
  m="1822390">here,</span> <span m="1824140">some</span> <span
  m="1824310">vertices</span> <span m="1824740">over</span> <span
  m="1824900">here,</span> <span m="1825650">there's</span> <span
  m="1825810">some</span> <span m="1826000">edges</span> <span
  m="1826420">that</span> <span m="1826550">are</span> <span
  m="1827080">purely</span> <span m="1827390">inside</span> <span
  m="1828640">one</span> <span m="1828910">side</span> <span
  m="1829150">of</span> <span m="1829240">the</span> <span
  m="1829330">cut.</span> <span m="1830610">And</span> <span
  m="1830790">then</span> <span m="1831150">what</span> <span
  m="1831300">I'm</span> <span m="1831400">interested</span> <span
  m="1831750">in</span> <span m="1832190">are</span> <span
  m="1832280">the</span> <span m="1832420">edges</span> <span
  m="1832680">that</span> <span m="1832790">cross</span> <span
  m="1833420">the</span> <span m="1833540">cut.</span> <span
  m="1838380">OK,</span> <span m="1838440">whatever</span> <span
  m="1838720">they</span> <span m="1838870">look</span> <span
  m="1839060">like,</span> <span m="1839340">these</span> <span
  m="1839640">edges.</span> <span m="1840430">If</span> <span
  m="1840720">an</span> <span m="1840940">edge</span> <span
  m="1841200">has</span> <span m="1841450">one</span> <span
  m="1841730">vertex</span> <span m="1842230">in</span> <span
  m="1842420">V</span> <span m="1843090">and</span> <span m="1843290">one</span>
  <span m="1843460">vertex</span> <span m="1843830">not</span> <span
  m="1844100">in</span> <span m="1844240">V,</span> <span m="1844540">I
  call</span> <span m="1844930">that</span> <span m="1845030">edge</span> <span
  m="1845550">a</span> <span m="1845640">crossing</span> <span
  m="1846120">edge.</span></p><p><span m="1851680">OK,</span> <span
  m="1852820">so</span> <span m="1854230">let's</span> <span
  m="1856260">suppose</span> <span m="1856960">that</span> <span
  m="1857370">e</span> <span m="1858880">is</span> <span m="1859230">a</span>
  <span m="1860660">least-weight</span> <span m="1861850">edge</span> <span
  m="1868730">crossing</span> <span m="1869290">the</span> <span
  m="1869400">cut.</span> <span m="1875160">So</span> <span
  m="1875370">let's</span> <span m="1875630">say,</span> <span
  m="1876490">let</span> <span m="1876590">me</span> <span m="1876720">be</span>
  <span m="1876890">specific,</span> <span m="1878860">if</span> <span
  m="1879330">e</span> <span m="1879690">is</span> <span m="1880620">uv,</span>
  <span m="1884120">then</span> <span m="1884620">I</span> <span
  m="1884720">want</span> <span m="1885060">one</span> <span
  m="1885290">of</span> <span m="1885350">the</span> <span
  m="1885550">endpoints,</span> <span m="1886040">let's</span> <span
  m="1886200">u,</span> <span m="1886640">to</span> <span m="1886780">be</span>
  <span m="1886970">in</span> <span m="1887200">S,</span> <span
  m="1888046">and</span> <span m="1888470">I</span> <span
  m="1888510">want</span> <span m="1888860">the</span> <span
  m="1889060">other</span> <span m="1889300">one</span> <span
  m="1889610">to</span> <span m="1889760">be</span> <span m="1890450">not</span>
  <span m="1890700">in</span> <span m="1890840">S,</span> <span m="1891400">so
  it's</span> <span m="1891550">in</span> <span m="1891960">capital</span> <span
  m="1892360">V</span> <span m="1892580">minus</span> <span
  m="1893480">S.</span> <span m="1894860">And</span> <span
  m="1895010">that</span> <span m="1895140">would</span> <span
  m="1895230">be</span> <span m="1895360">a</span> <span
  m="1895420">crossing</span> <span m="1895810">edge,</span> <span
  m="1896330">and</span> <span m="1896530">among</span> <span
  m="1896800">all</span> <span m="1896940">the</span> <span
  m="1897030">crossing</span> <span m="1897420">edges,</span> <span
  m="1897810">I</span> <span m="1897920">want</span> <span m="1898100">to</span>
  <span m="1898180">take</span> <span m="1898430">one</span> <span
  m="1898960">of</span> <span m="1899320">minimum</span> <span
  m="1899660">weight.</span> <span m="1901360">There</span> <span
  m="1901460">might</span> <span m="1901640">be</span> <span
  m="1901760">many,</span> <span m="1903180">but</span> <span
  m="1903570">pick</span> <span m="1903820">any</span> <span
  m="1904060">one.</span> <span m="1906140">Then</span> <span
  m="1906340">I</span> <span m="1906440">claim</span> <span
  m="1907100">that</span> <span m="1907390">edge</span> <span
  m="1907750">is</span> <span m="1907900">in</span> <span m="1908030">a</span>
  <span m="1908070">minimum</span> <span m="1908380">spanning</span> <span
  m="1908770">tree.</span></p><p><span m="1920030">This</span> <span
  m="1920230">is</span> <span m="1920380">our</span> <span
  m="1920540">golden</span> <span m="1920880">ticket,</span> <span
  m="1922140">right?</span> <span m="1922320">If</span> <span
  m="1922490">we</span> <span m="1922660">can</span> <span
  m="1923690">guarantee</span> <span m="1924160">an</span> <span
  m="1924260">edge</span> <span m="1924440">is</span> <span
  m="1924550">in</span> <span m="1924650">the</span> <span
  m="1924740">minimum</span> <span m="1925020">spanning</span> <span
  m="1925400">tree,</span> <span m="1925590">then</span> <span
  m="1925740">we</span> <span m="1925870">plug</span> <span
  m="1926190">that</span> <span m="1926380">in</span> <span
  m="1926540">here.</span> <span m="1927210">Instead</span> <span
  m="1927520">of</span> <span m="1927640">guessing,</span> <span
  m="1928410">we'll</span> <span m="1928550">just</span> <span
  m="1928740">take</span> <span m="1928940">that</span> <span
  m="1929160">edge--</span> <span m="1929950">we</span> <span
  m="1930000">know</span> <span m="1930260">it's</span> <span
  m="1930390">in</span> <span m="1930490">a</span> <span
  m="1930520">minimum</span> <span m="1930840">spanning</span> <span
  m="1931200">tree--</span> <span m="1932370">and</span> <span
  m="1932540">then</span> <span m="1932850">we'll</span> <span
  m="1933020">contract</span> <span m="1933395">it</span> <span
  m="1933770">and</span> <span m="1933900">repeat</span> <span
  m="1934240">this</span> <span m="1934400">process.</span> <span
  m="1935650">So</span> <span m="1936860">the</span> <span
  m="1937070">tricky</span> <span m="1937380">part--</span> <span
  m="1937720">I</span> <span m="1937740">mean,</span> <span
  m="1937900">it</span> <span m="1938060">is</span> <span
  m="1938260">true</span> <span m="1938500">that</span> <span
  m="1938680">the</span> <span m="1938770">minimum</span> <span
  m="1939130">weight</span> <span m="1939310">edge</span> <span
  m="1939880">is</span> <span m="1940070">in</span> <span m="1940180">a</span>
  <span m="1940230">minimum</span> <span m="1940490">spanning</span> <span
  m="1940860">tree,</span> <span m="1941090">I'll</span> <span
  m="1941210">give</span> <span m="1942170">that</span> <span
  m="1942340">away.</span> <span m="1942950">But</span> <span
  m="1943640">the</span> <span m="1943800">question</span> <span
  m="1944140">is,</span> <span m="1944260">what</span> <span
  m="1944470">you</span> <span m="1944630">do</span> <span
  m="1945030">then?</span></p><p><span m="1948220">And</span> <span
  m="1948320">I</span> <span m="1948440">guess</span> <span
  m="1948630">you</span> <span m="1948720">contract</span> <span
  m="1949065">and</span> <span m="1949410">repeat</span> <span
  m="1949820">but,</span> <span m="1950430">that</span> <span
  m="1950610">will</span> <span m="1950890">be</span> <span
  m="1951230">Kruskal's</span> <span m="1951650">algorithm.</span> <span
  m="1952640">But</span> <span m="1953810">this</span> <span m="1954410">is,
  in</span> <span m="1954500">some</span> <span m="1954690">sense,</span> <span
  m="1955060">a</span> <span m="1955160">more</span> <span
  m="1955350">general</span> <span m="1955800">tool</span> <span
  m="1956720">that</span> <span m="1956820">will</span> <span
  m="1956950">let</span> <span m="1957100">us</span> <span
  m="1957250">identify</span> <span m="1957740">edges</span> <span
  m="1958080">that</span> <span m="1958190">are</span> <span
  m="1958260">guaranteed</span> <span m="1958940">to</span> <span
  m="1959080">be</span> <span m="1959230">in</span> <span m="1959300">the</span>
  <span m="1959370">minimum</span> <span m="1959600">spanning</span> <span
  m="1959910">tree,</span> <span m="1960100">even</span> <span
  m="1960420">after</span> <span m="1960760">we've</span> <span
  m="1960970">already</span> <span m="1961430">identified</span> <span
  m="1961970">some</span> <span m="1962190">edges</span> <span
  m="1962470">as</span> <span m="1962580">being</span> <span
  m="1962900">in</span> <span m="1963020">the</span> <span
  m="1963090">minimum</span> <span m="1963350">spanning</span> <span
  m="1963690">tree,</span> <span m="1964600">so</span> <span
  m="1965540">it's</span> <span m="1965720">a</span> <span
  m="1965760">little</span> <span m="1965920">more</span> <span
  m="1966070">powerful.</span> <span m="1966820">Let's</span> <span
  m="1967020">prove</span> <span m="1967880">this</span> <span
  m="1968620">claim.</span> <span m="1971260">This</span> <span
  m="1971450">is</span> <span m="1971540">where</span> <span
  m="1971720">things</span> <span m="1972000">get</span> <span
  m="1972260">particularly</span> <span m="1973270">cool.</span> <span
  m="1990100">And</span> <span m="1990360">this</span> <span
  m="1990500">is</span> <span m="1990600">where</span> <span
  m="1990760">we're</span> <span m="1990870">going</span> <span
  m="1990990">to</span> <span m="1991040">use</span> <span
  m="1991340">something</span> <span m="1991630">called</span> <span
  m="1991850">a</span> <span m="1991940">c</span> <span m="1992170">and</span>
  <span m="1992270">paste</span> <span m="1992600">argument.</span></p><p><span
  m="1999200">And</span> <span m="1999380">if</span> <span m="1999470">you
  are</span> <span m="1999820">ever</span> <span m="2000160">trying</span> <span
  m="2000440">to</span> <span m="2000510">prove</span> <span
  m="2000770">a</span> <span m="2000830">greedy</span> <span
  m="2001110">algorithm</span> <span m="2001500">correct,</span> <span
  m="2002400">the</span> <span m="2002500">first</span> <span
  m="2002740">thing</span> <span m="2002890">that</span> <span
  m="2003010">should</span> <span m="2003140">come</span> <span
  m="2003310">to</span> <span m="2003380">your</span> <span
  m="2003470">mind</span> <span m="2003760">is</span> <span
  m="2004160">cut</span> <span m="2004340">and</span> <span
  m="2004430">paste.</span> <span m="2005895">This</span> <span
  m="2006390">is</span> <span m="2006630">almost</span> <span
  m="2007000">universally</span> <span m="2007660">how</span> <span
  m="2007850">you</span> <span m="2008020">prove</span> <span
  m="2008340">greedy</span> <span m="2008630">algorithms</span> <span
  m="2009080">to</span> <span m="2009170">be</span> <span
  m="2009290">correct,</span> <span m="2010360">which</span> <span
  m="2010590">is,</span> <span m="2011990">suppose</span> <span
  m="2012470">you</span> <span m="2012570">have</span> <span
  m="2012760">some</span> <span m="2013090">optimal</span> <span
  m="2013440">solution</span> <span m="2014530">which</span> <span
  m="2014800">doesn't</span> <span m="2015230">have</span> <span
  m="2015510">the</span> <span m="2015600">property</span> <span
  m="2016020">you</span> <span m="2016150">want,</span> <span
  m="2016590">like</span> <span m="2016860">that</span> <span
  m="2017000">it</span> <span m="2017090">includes</span> <span
  m="2017580">e</span> <span m="2017820">here.</span> <span
  m="2018810">And</span> <span m="2018990">then</span> <span
  m="2019150">you</span> <span m="2019310">modify</span> <span
  m="2019980">it,</span> <span m="2020240">usually</span> <span
  m="2020590">by</span> <span m="2020720">cutting</span> <span
  m="2021160">out</span> <span m="2021330">one</span> <span
  m="2021550">part</span> <span m="2021790">of</span> <span
  m="2021840">the</span> <span m="2021930">solution</span> <span
  m="2022420">and</span> <span m="2022590">pasting</span> <span
  m="2023010">in</span> <span m="2023090">a</span> <span
  m="2023150">different</span> <span m="2023520">part,</span> <span
  m="2023820">like</span> <span m="2024410">e,</span> <span
  m="2025670">and</span> <span m="2026230">prove</span> <span
  m="2026510">that</span> <span m="2026600">you</span> <span
  m="2026700">still</span> <span m="2027090">have</span> <span
  m="2027300">an</span> <span m="2027380">optimal</span> <span
  m="2027700">solution,</span> <span m="2028180">and</span> <span
  m="2028270">therefore,</span> <span m="2028580">there</span> <span
  m="2028760">is</span> <span m="2029380">an</span> <span
  m="2029670">optimal</span> <span m="2030110">solution.</span> <span
  m="2030580">There</span> <span m="2030720">is</span> <span
  m="2030980">an</span> <span m="2031420">MST</span> <span
  m="2032820">that</span> <span m="2033180">has</span> <span
  m="2033600">the</span> <span m="2033770">property</span> <span
  m="2034320">you</span> <span m="2034450">want.</span></p><p><span
  m="2036150">OK, so</span> <span m="2036320">we're</span> <span
  m="2036460">going</span> <span m="2036550">to</span> <span
  m="2036610">do</span> <span m="2036720">that</span> <span
  m="2036960">by</span> <span m="2037100">starting</span> <span
  m="2037430">from</span> <span m="2037660">an</span> <span
  m="2037750">arbitrary</span> <span m="2039620">minimum</span> <span
  m="2039920">spanning</span> <span m="2040290">tree.</span> <span
  m="2042130">So</span> <span m="2042470">let</span> <span m="2043245">T</span>
  <span m="2043730">star</span> <span m="2045310">be</span> <span
  m="2045890">a</span> <span m="2046170">minimum</span> <span
  m="2046510">spanning</span> <span m="2046880">tree</span> <span
  m="2047190">of</span> <span m="2047340">G,</span> <span m="2050330">and</span>
  <span m="2050760">if</span> <span m="2051340">the</span> <span
  m="2051550">edge e</span> <span m="2051810">is</span> <span
  m="2052060">in</span> <span m="2052199">there,</span> <span
  m="2052480">we're</span> <span m="2052630">done.</span> <span
  m="2053000">So</span> <span m="2053159">presumably,</span> <span m="2055420">e
  is</span> <span m="2055790">not</span> <span m="2056159">in</span> <span
  m="2056750">that</span> <span m="2056940">minimum</span> <span
  m="2057190">spanning</span> <span m="2057520">tree.</span> <span
  m="2060420">We're</span> <span m="2060570">going</span> <span
  m="2060699">to</span> <span m="2060750">modify</span> <span
  m="2062230">T</span> <span m="2062429">star</span> <span m="2063480">to</span>
  <span m="2063639">include</span> <span m="2064030">e.</span> <span
  m="2064389">So</span> <span m="2064650">again,</span> <span
  m="2064940">let</span> <span m="2065070">me</span> <span
  m="2065190">draw</span> <span m="2065389">the</span> <span
  m="2065510">cut.</span> <span m="2068672">There's</span> <span
  m="2069139">S</span> <span m="2069620">and</span> <span m="2069900">V</span>
  <span m="2070030">minus</span> <span m="2070370">S.</span> <span
  m="2071630">We</span> <span m="2071760">have</span> <span
  m="2071949">some</span> <span m="2072230">edge</span> <span
  m="2072540">e</span> <span m="2072770">which</span> <span
  m="2073000">crosses</span> <span m="2073389">the</span> <span
  m="2073480">cut,</span> <span m="2074370">goes</span> <span
  m="2074580">from</span> <span m="2074710">u</span> <span m="2074880">to</span>
  <span m="2074940">v,</span> <span m="2077530">that's</span> <span
  m="2077739">not</span> <span m="2078100">in</span> <span
  m="2078469">the</span> <span m="2078550">minimum</span> <span
  m="2078770">spanning</span> <span m="2079100">tree.</span> <span
  m="2079300">Let's</span> <span m="2079560">say</span> <span
  m="2079860">in</span> <span m="2080770">blue,</span> <span
  m="2081239">I</span> <span m="2081340">draw</span> <span
  m="2081560">the</span> <span m="2081650">minimum</span> <span
  m="2081909">spanning</span> <span m="2082300">tree.</span></p><p><span
  m="2084350">So</span> <span m="2084710">you</span> <span
  m="2084810">know,</span> <span m="2085020">the</span> <span
  m="2085120">minimum</span> <span m="2085330">spanning</span> <span
  m="2085659">tree</span> <span m="2086520">connects</span> <span
  m="2086909">everything</span> <span m="2087320">together</span> <span
  m="2087730">here.</span> <span m="2091750">I</span> <span
  m="2091870">claim</span> <span m="2092170">it's</span> <span
  m="2092300">got</span> <span m="2092420">to</span> <span
  m="2092469">have</span> <span m="2092710">some</span> <span
  m="2093139">edges</span> <span m="2095389">that</span> <span
  m="2095670">cross</span> <span m="2096239">the</span> <span
  m="2096350">cut,</span> <span m="2096940">because</span> <span m="2097220">if
  it</span> <span m="2097310">has</span> <span m="2097540">no</span> <span
  m="2097760">edges</span> <span m="2098020">that</span> <span
  m="2098130">cross</span> <span m="2098390">the</span> <span
  m="2098490">cut,</span> <span m="2098690">it</span> <span
  m="2098790">doesn't</span> <span m="2099080">connect</span> <span
  m="2099370">vertices</span> <span m="2099800">over</span> <span
  m="2099990">here</span> <span m="2100560">with</span> <span
  m="2100720">vertices</span> <span m="2101100">over</span> <span
  m="2101300">here.</span> <span m="2102030">So</span> <span
  m="2102250">it</span> <span m="2102280">may</span> <span
  m="2102410">not</span> <span m="2102610">use</span> <span
  m="2102820">e,</span> <span m="2103380">but</span> <span
  m="2103550">some</span> <span m="2103860">of</span> <span
  m="2104000">the</span> <span m="2104180">edges</span> <span
  m="2104510">must</span> <span m="2104800">cross</span> <span
  m="2105050">the</span> <span m="2105140">cut.</span> <span
  m="2106910">So</span> <span m="2107260">here's</span> <span
  m="2107520">a</span> <span m="2108480">possible</span> <span
  m="2109940">minimum</span> <span m="2110210">spanning</span> <span
  m="2110590">tree.</span> <span m="2113290">It</span> <span
  m="2113370">happens</span> <span m="2113770">to</span> <span
  m="2113930">have</span> <span m="2114410">sort</span> <span
  m="2114600">of</span> <span m="2114730">two</span> <span
  m="2114970">components</span> <span m="2115510">over</span> <span
  m="2115710">here</span> <span m="2115900">in S,</span> <span
  m="2115960">maybe.</span> <span m="2116600">Who</span> <span
  m="2116760">knows?</span> <span m="2119420">But</span> <span
  m="2119590">there's</span> <span m="2119750">got</span> <span
  m="2119940">to</span> <span m="2120000">be</span> <span m="2120150">at</span>
  <span m="2120220">least</span> <span m="2120620">one</span> <span
  m="2120800">edge</span> <span m="2121030">the</span> <span
  m="2121160">crosses</span> <span m="2121560">over.</span></p><p><span
  m="2124150">In</span> <span m="2124200">fact,</span> <span
  m="2127020">the</span> <span m="2127170">minimum</span> <span
  m="2127430">spanning</span> <span m="2127800">tree,</span> <span
  m="2128290">T</span> <span m="2128440">star,</span> <span
  m="2131760">has</span> <span m="2132130">to</span> <span
  m="2133030">connect</span> <span m="2133870">vertex</span> <span
  m="2134300">u</span> <span m="2135050">to</span> <span
  m="2135210">vertex</span> <span m="2135640">v,</span> <span
  m="2136830">somehow.</span> <span m="2137890">It doesn't</span> <span
  m="2138150">use</span> <span m="2138390">e,</span> <span
  m="2139200">but</span> <span m="2139320">there's</span> <span
  m="2139480">got</span> <span m="2139650">to</span> <span
  m="2139730">be--</span> <span m="2140090">it's</span> <span
  m="2140170">a</span> <span m="2140290">tree,</span> <span m="2140710">so
  in</span> <span m="2140830">fact,</span> <span m="2141050">there</span> <span
  m="2141150">has</span> <span m="2141350">to</span> <span m="2141450">be</span>
  <span m="2141590">a</span> <span m="2141630">unique</span> <span
  m="2142150">path</span> <span m="2142980">from</span> <span
  m="2143390">u</span> <span m="2143610">to</span> <span m="2143700">v</span>
  <span m="2147720">in</span> <span m="2148060">the</span> <span
  m="2148150">minimum</span> <span m="2148410">spanning</span> <span
  m="2148760">tree.</span> <span m="2150710">And</span> <span
  m="2151000">now</span> <span m="2151160">u</span> <span m="2151510">is</span>
  <span m="2151690">in</span> <span m="2151850">S,</span> <span
  m="2152255">v</span> <span m="2152660">is</span> <span m="2152830">not</span>
  <span m="2153060">in</span> <span m="2153180">S. So</span> <span
  m="2153650">if</span> <span m="2153740">you</span> <span
  m="2153850">look</span> <span m="2154030">at</span> <span
  m="2154100">that</span> <span m="2154320">path,</span> <span
  m="2155130">for</span> <span m="2155360">a while,</span> <span
  m="2155720">you</span> <span m="2155860">might</span> <span
  m="2156060">stay</span> <span m="2156280">in</span> <span
  m="2156410">S,</span> <span m="2156630">but</span> <span
  m="2156750">eventually</span> <span m="2157300">you</span> <span
  m="2157370">have</span> <span m="2157560">to</span> <span
  m="2157680">leave</span> <span m="2158090">S,</span> <span
  m="2159160">which</span> <span m="2159410">means</span> <span
  m="2160070">there</span> <span m="2160190">has</span> <span
  m="2160450">to</span> <span m="2160540">be</span> <span m="2160670">an</span>
  <span m="2160750">edge</span> <span m="2161130">like</span> <span
  m="2161350">this</span> <span m="2161560">one,</span> <span
  m="2163400">which</span> <span m="2163650">I'll</span> <span
  m="2163750">call</span> <span m="2163960">it</span> <span m="2164030">e</span>
  <span m="2164370">prime,</span> <span m="2166020">which</span> <span
  m="2167270">transitions</span> <span m="2168060">from</span> <span
  m="2168380">S</span> <span m="2169060">to</span> <span m="2169230">V</span>
  <span m="2169350">minus</span> <span m="2169700">S.</span></p><p><span
  m="2171000">So</span> <span m="2173450">there</span> <span
  m="2173590">must</span> <span m="2174010">be</span> <span
  m="2175380">an</span> <span m="2175550">edge</span> <span m="2175950">e</span>
  <span m="2176120">prime</span> <span m="2177290">in</span> <span
  m="2177470">the</span> <span m="2177560">minimum</span> <span
  m="2177860">spanning</span> <span m="2178230">tree</span> <span
  m="2180950">that</span> <span m="2181120">crosses</span> <span
  m="2181600">the</span> <span m="2181710">cut,</span> <span
  m="2187760">because</span> <span m="2188490">u and</span> <span
  m="2188760">v</span> <span m="2188930">are</span> <span
  m="2189000">connected</span> <span m="2189340">by</span> <span
  m="2189470">a</span> <span m="2189540">path</span> <span
  m="2190000">and</span> <span m="2190140">that</span> <span
  m="2190330">path</span> <span m="2190690">starts</span> <span
  m="2191040">in</span> <span m="2191150">S,</span> <span
  m="2191600">ends</span> <span m="2191720">not</span> <span
  m="2191940">in</span> <span m="2192050">S, so</span> <span
  m="2192400">it's</span> <span m="2192530">got</span> <span
  m="2192650">to</span> <span m="2192700">transition</span> <span
  m="2193570">at</span> <span m="2193690">least</span> <span
  m="2193950">once.</span> <span m="2194190">It</span> <span
  m="2194260">might</span> <span m="2194390">transition</span> <span
  m="2194870">many</span> <span m="2195110">times,</span> <span
  m="2196080">but</span> <span m="2196290">there</span> <span
  m="2196400">has</span> <span m="2196570">to</span> <span m="2196630">be</span>
  <span m="2196690">at</span> <span m="2196750">least</span> <span
  m="2197030">one</span> <span m="2197200">such</span> <span
  m="2197460">edge.</span></p><p><span m="2198600">And</span> <span
  m="2198770">now</span> <span m="2199050">what</span> <span
  m="2199180">I'm</span> <span m="2199260">going</span> <span
  m="2199370">to</span> <span m="2199450">do</span> <span m="2199800">is</span>
  <span m="2200930">cut</span> <span m="2201150">and</span> <span
  m="2201240">paste.</span> <span m="2202420">I'm</span> <span
  m="2202550">going</span> <span m="2202670">to</span> <span
  m="2202760">remove</span> <span m="2203330">e</span> <span
  m="2203480">prime</span> <span m="2204490">and</span> <span
  m="2204710">add</span> <span m="2205000">an</span> <span m="2205170">e</span>
  <span m="2205400">instead.</span> <span m="2207230">So</span> <span
  m="2207370">I'm going to</span> <span m="2207390">look</span> <span
  m="2207680">at</span> <span m="2208030">T</span> <span m="2209180">star</span>
  <span m="2212340">minus</span> <span m="2212740">e</span> <span
  m="2212920">prime</span> <span m="2215070">plus</span> <span
  m="2215730">e.</span> <span m="2219510">I</span> <span
  m="2219630">claim</span> <span m="2220730">that</span> <span
  m="2221040">is</span> <span m="2221390">a</span> <span
  m="2221500">minimum</span> <span m="2221840">spanning</span> <span
  m="2222220">tree.</span> <span m="2222440">First</span> <span
  m="2222780">I</span> <span m="2222850">want</span> <span m="2223080">to</span>
  <span m="2223160">claim,</span> <span m="2223990">this</span> <span
  m="2224150">is</span> <span m="2224270">maybe</span> <span
  m="2224510">the</span> <span m="2224630">more</span> <span
  m="2224840">annoying</span> <span m="2225110">part,</span> <span
  m="2225940">that it</span> <span m="2226300">is</span> <span
  m="2226530">a</span> <span m="2226600">spanning</span> <span
  m="2227080">tree.</span> <span m="2236590">This</span> <span
  m="2236830">is</span> <span m="2237050">more</span> <span
  m="2237270">of</span> <span m="2237340">a</span> <span
  m="2237420">graph</span> <span m="2237810">theory</span> <span
  m="2238130">thing.</span> <span m="2240130">I</span> <span
  m="2240210">guess</span> <span m="2241550">one</span> <span
  m="2241930">comforting</span> <span m="2242390">thing</span> <span
  m="2242590">is that</span> <span m="2242730">you've</span> <span
  m="2242930">preserved</span> <span m="2243460">the</span> <span
  m="2243550">number</span> <span m="2243930">of</span> <span
  m="2244000">edges,</span> <span m="2244450">so</span> <span
  m="2244870">it</span> <span m="2245010">should</span> <span
  m="2245250">still</span> <span m="2246080">be</span> <span
  m="2247640">if</span> <span m="2247800">you</span> <span
  m="2247890">get</span> <span m="2248130">one</span> <span
  m="2248380">property,</span> <span m="2248780">you</span> <span
  m="2248880">get</span> <span m="2249090">the</span> <span
  m="2249240">other,</span> <span m="2250420">because</span> <span
  m="2250580">I</span> <span m="2250640">remove</span> <span
  m="2250980">one</span> <span m="2251190">edge,</span> <span m="2251540">add
  in</span> <span m="2251780">one</span> <span m="2251980">edge,</span> <span
  m="2252180">I'm</span> <span m="2252260">still</span> <span
  m="2252470">going</span> <span m="2252590">to</span> <span
  m="2252630">have</span> <span m="2252850">n</span> <span
  m="2252960">minus</span> <span m="2253240">1</span> <span
  m="2253400">edges.</span></p><p><span m="2254960">The</span> <span
  m="2255090">worry,</span> <span m="2255410">I</span> <span
  m="2255470">guess,</span> <span m="2255720">is</span> <span
  m="2255840">that</span> <span m="2255960">things</span> <span
  m="2256250">become</span> <span m="2256740">disconnected</span> <span
  m="2257520">when</span> <span m="2257630">you</span> <span
  m="2257730">do</span> <span m="2257840">that,</span> <span
  m="2260400">but</span> <span m="2260750">that's</span> <span
  m="2260970">essentially</span> <span m="2261320">not</span> <span
  m="2261490">going</span> <span m="2261590">to</span> <span
  m="2261640">happen</span> <span m="2262060">because</span> <span
  m="2262690">if</span> <span m="2262860">I</span> <span
  m="2262990">think</span> <span m="2263240">of</span> <span
  m="2263370">removing</span> <span m="2263880">e</span> <span
  m="2264040">prime,</span> <span m="2265060">again,</span> <span
  m="2265220">that</span> <span m="2265420">disconnects</span> <span
  m="2265930">the</span> <span m="2265990">tree</span> <span
  m="2266280">into</span> <span m="2266490">two</span> <span
  m="2266680">parts.</span> <span m="2268290">And</span> <span
  m="2268490">I</span> <span m="2268570">know,</span> <span
  m="2269880">by</span> <span m="2270090">this</span> <span
  m="2270320">path,</span> <span m="2271280">that</span> <span
  m="2271930">one</span> <span m="2272350">part</span> <span
  m="2272730">contains</span> <span m="2273190">this</span> <span
  m="2273380">vertex,</span> <span m="2273860">another</span> <span
  m="2274220">part</span> <span m="2274480">contains</span> <span
  m="2274900">this</span> <span m="2275080">vertex,</span> <span
  m="2275530">and</span> <span m="2275630">I</span> <span
  m="2275690">know</span> <span m="2276290">that</span> <span
  m="2276550">this</span> <span m="2276930">vertex</span> <span
  m="2277270">is</span> <span m="2277420">connected</span> <span
  m="2277930">to</span> <span m="2278050">u</span> <span m="2278300">and</span>
  <span m="2278390">this</span> <span m="2278550">vertex</span> <span
  m="2278950">is</span> <span m="2279090">connected</span> <span
  m="2279600">to</span> <span m="2279720">v.</span> <span
  m="2279950">Maybe</span> <span m="2280190">I</span> <span
  m="2280220">should</span> <span m="2280380">call</span> <span
  m="2280550">this</span> <span m="2281100">u</span> <span
  m="2281260">prime</span> <span m="2282300">and</span> <span
  m="2282460">v</span> <span m="2282660">prime.</span></p><p><span
  m="2283220">I</span> <span m="2283360">know</span> <span m="2283730">u</span>
  <span m="2284020">and</span> <span m="2284110">u</span> <span
  m="2284240">prime</span> <span m="2284540">are</span> <span
  m="2284620">connected</span> <span m="2285060">by</span> <span
  m="2285210">a</span> <span m="2285280">path.</span> <span m="2286030">I</span>
  <span m="2286150">know</span> <span m="2286330">v</span> <span
  m="2286520">and</span> <span m="2286620">v</span> <span
  m="2286780">prime</span> <span m="2287060">are</span> <span
  m="2287120">connected</span> <span m="2287440">by</span> <span
  m="2287560">a</span> <span m="2287620">path.</span> <span
  m="2288380">But</span> <span m="2288500">I</span> <span
  m="2288580">know</span> <span m="2288860">that</span> <span
  m="2289080">by</span> <span m="2289180">deleting</span> <span
  m="2289560">e</span> <span m="2289750">prime,</span> <span
  m="2290160">u</span> <span m="2290350">prime and</span> <span
  m="2290730">v</span> <span m="2290900">prime</span> <span
  m="2291150">are</span> <span m="2291220">not</span> <span
  m="2291470">connected</span> <span m="2291870">to</span> <span
  m="2291990">each</span> <span m="2292170">other.</span> <span
  m="2292900">Therefore,</span> <span m="2293190">u</span> <span
  m="2293390">and</span> <span m="2293540">v</span> <span m="2293830">are</span>
  <span m="2293910">not</span> <span m="2294150">connected</span> <span
  m="2294610">to</span> <span m="2294740">each</span> <span
  m="2294950">other,</span> <span m="2295300">after</span> <span
  m="2295630">removing e</span> <span m="2296110">prime.</span> <span
  m="2296970">So</span> <span m="2297050">when</span> <span m="2297170">I</span>
  <span m="2297230">add</span> <span m="2297490">in</span> <span
  m="2297690">e,</span> <span m="2298150">I</span> <span
  m="2298310">newly</span> <span m="2298820">connect</span> <span
  m="2299370">u</span> <span m="2299570">and</span> <span m="2299690">v</span>
  <span m="2299920">again,</span> <span m="2300750">and</span> <span
  m="2300900">so</span> <span m="2302830">everything's</span> <span
  m="2303270">connected</span> <span m="2303630">back</span> <span
  m="2303810">together.</span> <span m="2304510">I</span> <span
  m="2304620">have</span> <span m="2304760">exactly</span> <span
  m="2305160">the</span> <span m="2305260">right</span> <span
  m="2305440">number</span> <span m="2305640">of</span> <span
  m="2305700">edges.</span> <span m="2306090">Therefore,</span> <span
  m="2307030">I'm</span> <span m="2307170">a</span> <span
  m="2307220">spanning</span> <span m="2307560">tree.</span> <span
  m="2310300">So</span> <span m="2310450">that's</span> <span
  m="2310690">the</span> <span m="2310800">graph</span> <span
  m="2311060">three</span> <span m="2311300">theory part.</span></p><p><span
  m="2312010">Now</span> <span m="2312220">the</span> <span
  m="2312370">interesting</span> <span m="2312800">part</span> <span
  m="2313040">from</span> <span m="2313190">a</span> <span
  m="2313230">greedy</span> <span m="2313500">algorithm</span> <span
  m="2313910">is</span> <span m="2314020">to</span> <span
  m="2314310">prove</span> <span m="2314590">to</span> <span
  m="2314680">this</span> <span m="2314910">is</span> <span
  m="2315170">minimum,</span> <span m="2316810">that</span> <span
  m="2316920">the</span> <span m="2317030">weight</span> <span
  m="2317310">is</span> <span m="2317510">not</span> <span
  m="2317720">too</span> <span m="2317820">big.</span> <span
  m="2319840">So</span> <span m="2320320">let's</span> <span
  m="2320500">do</span> <span m="2320580">that</span> <span
  m="2320770">over</span> <span m="2320950">here.</span> <span
  m="2330500">So</span> <span m="2331250">I</span> <span m="2331410">have</span>
  <span m="2332030">the</span> <span m="2332150">weight</span> <span
  m="2333800">of</span> <span m="2333860">T</span> <span m="2334100">star</span>
  <span m="2335610">minus</span> <span m="2336300">e</span> <span
  m="2337580">plus--</span> <span m="2341930">minus</span> <span
  m="2342280">e</span> <span m="2342430">prime</span> <span
  m="2342760">plus</span> <span m="2343110">e.</span> <span
  m="2344500">By</span> <span m="2344780">linearity,</span> <span
  m="2346100">this</span> <span m="2346270">is</span> <span
  m="2346430">just</span> <span m="2346880">the</span> <span
  m="2346980">weight</span> <span m="2347210">of</span> <span
  m="2347320">T</span> <span m="2347480">star</span> <span
  m="2349520">minus</span> <span m="2349990">the</span> <span
  m="2350100">weight</span> <span m="2350860">e</span> <span
  m="2351090">prime</span> <span m="2352130">plus</span> <span
  m="2352470">the</span> <span m="2352560">weight</span> <span
  m="2352750">of</span> <span m="2352850">e.</span></p><p><span
  m="2356550">And</span> <span m="2356790">now</span> <span
  m="2357010">we're</span> <span m="2357110">going</span> <span
  m="2357210">to</span> <span m="2357250">use</span> <span
  m="2357520">this</span> <span m="2357760">property,</span> <span
  m="2358200">we</span> <span m="2358300">haven't</span> <span
  m="2358490">that</span> <span m="2358910">yet,</span> <span
  m="2359570">e</span> <span m="2359920">is</span> <span m="2360110">a</span>
  <span m="2360190">least-weight</span> <span m="2361050">edge</span> <span
  m="2361400">crossing</span> <span m="2361850">the</span> <span
  m="2361960">cut.</span> <span m="2363190">So</span> <span m="2363400">e</span>
  <span m="2363650">prime</span> <span m="2364490">crosses</span> <span
  m="2364930">the</span> <span m="2365030">cut,</span> <span
  m="2365580">so</span> <span m="2365820">does</span> <span
  m="2365870">e,</span> <span m="2366295">but e is</span> <span
  m="2366720">the</span> <span m="2366790">smallest</span> <span
  m="2367350">possible</span> <span m="2367810">weight</span> <span
  m="2367950">you</span> <span m="2368100">could</span> <span
  m="2368210">have</span> <span m="2368460">crossing</span> <span
  m="2368840">the</span> <span m="2368940">cut.</span> <span
  m="2369590">That</span> <span m="2369810">means</span> <span
  m="2370240">that--</span> <span m="2371781">I'll</span> <span
  m="2372160">put</span> <span m="2372200">that</span> <span
  m="2372340">over</span> <span m="2372580">here--</span> <span
  m="2373420">the</span> <span m="2373540">weight</span> <span
  m="2373830">of</span> <span m="2373970">e</span> <span m="2374880">is</span>
  <span m="2375170">less</span> <span m="2375550">than</span> <span
  m="2375690">or</span> <span m="2375770">equal</span> <span
  m="2376010">to</span> <span m="2376720">the</span> <span
  m="2376830">weight</span> <span m="2377060">of</span> <span
  m="2377140">e</span> <span m="2377350">prime,</span> <span
  m="2378820">because</span> <span m="2379280">e</span> <span
  m="2379410">prime</span> <span m="2379710">is</span> <span
  m="2379800">a</span> <span m="2379870">particular</span> <span
  m="2380450">edge</span> <span m="2380630">crossing</span> <span
  m="2380960">the</span> <span m="2381050">cut,</span> <span
  m="2381370">e</span> <span m="2381470">was</span> <span m="2381630">the</span>
  <span m="2381740">smallest</span> <span m="2382210">weight</span> <span
  m="2382400">of</span> <span m="2382510">them.</span> <span
  m="2383620">So</span> <span m="2383940">that</span> <span
  m="2384130">tells</span> <span m="2384330">us</span> <span
  m="2384430">something</span> <span m="2384680">about</span> <span
  m="2384900">this.</span> <span m="2387610">Signs</span> <span
  m="2388460">are</span> <span m="2388600">so</span> <span
  m="2388870">difficult.</span> <span m="2390890">I</span> <span
  m="2390990">think</span> <span m="2391240">that</span> <span
  m="2391540">means</span> <span m="2391850">that</span> <span
  m="2392020">this</span> <span m="2392340">is</span> <span
  m="2392740">negative</span> <span m="2393380">or</span> <span
  m="2393460">zero.</span></p><p><span m="2396820">So</span> <span
  m="2397080">this</span> <span m="2397260">should</span> <span
  m="2397480">be</span> <span m="2398910">less</span> <span
  m="2399320">than</span> <span m="2399450">or</span> <span
  m="2399540">equal</span> <span m="2399840">to</span> <span
  m="2400670">w</span> <span m="2401085">of T</span> <span
  m="2401500">star,</span> <span m="2402630">and</span> <span
  m="2402780">that's</span> <span m="2402960">what</span> <span
  m="2403080">I</span> <span m="2403140">want,</span> <span
  m="2403690">because</span> <span m="2404080">that</span> <span
  m="2404240">says</span> <span m="2404460">the</span> <span
  m="2404560">weight</span> <span m="2404750">of</span> <span
  m="2404940">this</span> <span m="2405400">spanning</span> <span
  m="2405800">tree</span> <span m="2405990">is</span> <span
  m="2406090">less</span> <span m="2406430">than</span> <span
  m="2406530">or</span> <span m="2406560">equal</span> <span
  m="2406820">to</span> <span m="2407410">the</span> <span
  m="2407590">optimum</span> <span m="2408110">weight,</span> <span
  m="2408300">the</span> <span m="2408380">minimum</span> <span
  m="2408790">weight.</span> <span m="2409460">So</span> <span
  m="2409630">that</span> <span m="2409760">means,</span> <span
  m="2409950">actually,</span> <span m="2410270">this</span> <span
  m="2410580">must</span> <span m="2410840">be</span> <span
  m="2410960">minimum.</span> <span m="2414960">So</span> <span
  m="2415210">what</span> <span m="2415350">I've</span> <span
  m="2415470">done</span> <span m="2415720">is</span> <span
  m="2415840">I've</span> <span m="2415980">constructed</span> <span
  m="2416600">a</span> <span m="2416670">new</span> <span
  m="2416980">minimum</span> <span m="2417310">spanning</span> <span
  m="2417720">tree.</span> <span m="2417910">It's</span> <span
  m="2418120">just</span> <span m="2418410">as</span> <span
  m="2418530">good</span> <span m="2418720">as</span> <span m="2418830">T</span>
  <span m="2418990">star,</span> <span m="2419930">but</span> <span
  m="2420090">now</span> <span m="2420480">it</span> <span
  m="2420600">includes</span> <span m="2421160">my</span> <span
  m="2421340">edge</span> <span m="2421660">e,</span> <span
  m="2422820">and</span> <span m="2422930">that's</span> <span
  m="2423120">what</span> <span m="2423240">I</span> <span
  m="2423270">wanted</span> <span m="2423640">to prove.</span> <span
  m="2423970">There</span> <span m="2424140">is</span> <span
  m="2424390">a</span> <span m="2424440">minimum</span> <span
  m="2424720">spanning</span> <span m="2425060">tree</span> <span
  m="2425690">that</span> <span m="2425820">contains</span> <span
  m="2426360">e,</span> <span m="2427100">provided</span> <span
  m="2427520">e</span> <span m="2427780">is</span> <span m="2427920">the</span>
  <span m="2428190">minimum</span> <span m="2428540">weight</span> <span
  m="2429050">edge</span> <span m="2429350">crossing a cut.</span></p><p><span
  m="2433110">So</span> <span m="2433310">that</span> <span
  m="2433540">proves</span> <span m="2435290">this</span> <span
  m="2435520">greedy</span> <span m="2435830">choice</span> <span
  m="2436160">property.</span> <span m="2437900">And</span> <span
  m="2438120">I'm</span> <span m="2438190">going</span> <span
  m="2438310">to</span> <span m="2438360">observe</span> <span
  m="2438730">one</span> <span m="2439070">extra</span> <span
  m="2439620">feature</span> <span m="2440070">of</span> <span
  m="2440160">this</span> <span m="2442480">proof,</span> <span
  m="2443680">which</span> <span m="2443920">is</span> <span
  m="2444080">that--</span> <span m="2445520">so we</span> <span
  m="2445860">cut</span> <span m="2446080">and</span> <span
  m="2446190">paste,</span> <span m="2446610">in</span> <span
  m="2446690">the</span> <span m="2446750">sense</span> <span
  m="2446990">that</span> <span m="2447090">we</span> <span
  m="2447490">removed</span> <span m="2448050">one</span> <span
  m="2448260">thing,</span> <span m="2448970">which</span> <span
  m="2449170">was</span> <span m="2449430">e</span> <span
  m="2449550">prime,</span> <span m="2450060">and</span> <span
  m="2450160">we</span> <span m="2450700">added</span> <span
  m="2451050">a</span> <span m="2451110">different</span> <span
  m="2451450">thing,</span> <span m="2451700">e.</span> <span
  m="2453760">And</span> <span m="2455190">a</span> <span
  m="2455310">useful</span> <span m="2455730">feature</span> <span
  m="2456640">is</span> <span m="2456890">that</span> <span
  m="2457030">the</span> <span m="2457150">things</span> <span
  m="2457550">that</span> <span m="2457720">we</span> <span
  m="2457870">change</span> <span m="2459160">only</span> <span
  m="2460420">are</span> <span m="2460590">edges</span> <span
  m="2460910">that</span> <span m="2461010">cross</span> <span
  m="2461450">the</span> <span m="2461540">cut.</span> <span
  m="2463010">So</span> <span m="2463350">we</span> <span
  m="2463610">only,</span> <span m="2465450">let's</span> <span
  m="2465680">say,</span> <span m="2465840">modified</span> <span
  m="2470760">edges</span> <span m="2471000">that</span> <span m="2471370">cross
  the cut.</span> <span m="2482860">I'm</span> <span m="2482980">going</span>
  <span m="2483070">to</span> <span m="2483110">use</span> <span
  m="2483370">that</span> <span m="2483630">later.</span> <span
  m="2484890">We</span> <span m="2485020">removed</span> <span
  m="2485410">one</span> <span m="2485610">edge</span> <span m="2485780">that
  crossed</span> <span m="2486120">the</span> <span m="2486200">cut,</span>
  <span m="2486490">and we</span> <span m="2486640">put</span> <span
  m="2486830">in</span> <span m="2486950">the</span> <span
  m="2487040">one</span> <span m="2487200">that</span> <span
  m="2487310">we</span> <span m="2487410">wanted.</span> <span
  m="2489548">OK</span> <span m="2489970">so</span> <span
  m="2490330">far?</span></p><p><span m="2491330">There's</span> <span
  m="2491810">a</span> <span m="2491900">bunch</span> <span
  m="2492170">of</span> <span m="2492240">lemmas.</span> <span
  m="2494860">Now</span> <span m="2495010">we</span> <span
  m="2495110">actually</span> <span m="2495330">get</span> <span
  m="2495460">to</span> <span m="2495530">do</span> <span
  m="2495680">algorithms</span> <span m="2496230">using</span> <span
  m="2496550">these</span> <span m="2496720">lemmas.</span> <span
  m="2499930">We'll</span> <span m="2500080">start</span> <span
  m="2501890">with</span> <span m="2502180">maybe</span> <span
  m="2502450">the</span> <span m="2502580">less</span> <span
  m="2502960">obvious</span> <span m="2503410">algorithm,</span> <span
  m="2504790">but</span> <span m="2505130">it's</span> <span
  m="2505500">nice</span> <span m="2506000">because</span> <span
  m="2506300">it's</span> <span m="2506430">very</span> <span
  m="2506610">much</span> <span m="2506820">like</span> <span
  m="2506980">Dijkstra.</span> <span m="2507480">It</span> <span
  m="2507760">follows</span> <span m="2508150">very</span> <span
  m="2508440">closely to</span> <span m="2508810">the</span> <span
  m="2509020">Dijkstra</span> <span m="2509380">model.</span> <span
  m="2510810">And</span> <span m="2511010">then</span> <span
  m="2511190">we'll</span> <span m="2511320">get</span> <span
  m="2511550">to</span> <span m="2512370">the</span> <span
  m="2512480">one</span> <span m="2512800">that</span> <span
  m="2513000">we've</span> <span m="2513270">all</span> <span
  m="2513410">been</span> <span m="2513580">thinking</span> <span
  m="2513930">about,</span> <span m="2514190">which</span> <span
  m="2514400">was</span> <span m="2514530">choose</span> <span
  m="2514760">a</span> <span m="2514800">minimum weight</span> <span
  m="2515270">edge,</span> <span m="2516230">contract,</span> <span
  m="2516870">and</span> <span m="2517000">repeat.</span> <span
  m="2517460">That</span> <span m="2517630">doesn't--</span> <span
  m="2518690">well,</span> <span m="2520520">that</span> <span
  m="2520740">does</span> <span m="2521070">work,</span> <span
  m="2522280">but</span> <span m="2522730">the</span> <span
  m="2523060">obvious</span> <span m="2523430">way is,</span> <span
  m="2523790">maybe,</span> <span m="2524500">slow.</span> <span
  m="2525400">We</span> <span m="2525560">want</span> <span
  m="2525740">to</span> <span m="2525820">do</span> <span m="2525980">it</span>
  <span m="2526790">in</span> <span m="2527000">near</span> <span
  m="2527170">linear</span> <span m="2527480">time.</span></p><p><span
  m="2540200">Let's</span> <span m="2540440">start</span> <span
  m="2540670">with</span> <span m="2540800">the</span> <span
  m="2540930">Dijkstra-like</span> <span m="2541530">algorithm.</span> <span
  m="2546130">This</span> <span m="2546320">is</span> <span
  m="2546610">Prim's</span> <span m="2547040">algorithm.</span> <span
  m="2556410">Maybe</span> <span m="2556660">I'll</span> <span
  m="2556800">start</span> <span m="2557300">by</span> <span
  m="2557600">writing</span> <span m="2557910">down</span> <span
  m="2558110">the</span> <span m="2558220">algorithm.</span> <span
  m="2558485">It's</span> <span m="2558750">a</span> <span
  m="2558820">little</span> <span m="2559280">long.</span> <span
  m="2563080">In</span> <span m="2563240">general,</span> <span
  m="2563630">the</span> <span m="2563800">idea--</span> <span
  m="2565450">we</span> <span m="2565550">want</span> <span
  m="2565600">to</span> <span m="2565640">apply</span> <span
  m="2566000">this</span> <span m="2566190">greedy</span> <span
  m="2566450">choice</span> <span m="2566770">property.</span> <span
  m="2567210">To</span> <span m="2567350">apply</span> <span
  m="2567640">the</span> <span m="2567740">greedy</span> <span
  m="2568000">choice</span> <span m="2568280">property,</span> <span
  m="2568690">you</span> <span m="2568780">need</span> <span
  m="2568980">to</span> <span m="2569090">choose</span> <span
  m="2569550">a</span> <span m="2569670">cut.</span> <span
  m="2571570">With</span> <span m="2571820">Prim,</span> <span
  m="2572650">we're</span> <span m="2572860">going</span> <span
  m="2572980">to</span> <span m="2573040">start</span> <span
  m="2573390">out</span> <span m="2573570">with</span> <span
  m="2573760">an</span> <span m="2573860">obvious</span> <span
  m="2574310">cut,</span> <span m="2574590">which</span> <span
  m="2574800">is</span> <span m="2575390">a</span> <span
  m="2575470">single</span> <span m="2575870">vertex.</span> <span
  m="2576490">If we</span> <span m="2576660">have</span> <span
  m="2576770">a</span> <span m="2576820">single</span> <span
  m="2577160">vertex</span> <span m="2577570">S,</span> <span
  m="2579040">and</span> <span m="2579220">we</span> <span
  m="2579310">say</span> <span m="2579460">that</span> <span
  m="2579740">is</span> <span m="2579940">our</span> <span
  m="2580450">set</span> <span m="2580780">capital</span> <span
  m="2581150">S,</span> <span m="2582110">then</span> <span m="2582730">you
  know, there's</span> <span m="2583100">some</span> <span
  m="2583310">images</span> <span m="2583690">coming</span> <span
  m="2583970">out</span> <span m="2584130">of</span> <span
  m="2584210">it.</span> <span m="2585100">There's</span> <span
  m="2585200">basically</span> <span m="2585590">S</span> <span
  m="2586020">versus</span> <span m="2586580">everyone</span> <span
  m="2587010">else.</span> <span m="2588900">That's</span> <span
  m="2589120">a</span> <span m="2589180">cut.</span></p><p><span
  m="2590040">And</span> <span m="2590230">so</span> <span m="2590370">I</span>
  <span m="2590460">could</span> <span m="2590620">take</span> <span
  m="2590860">the</span> <span m="2590960">minimum</span> <span
  m="2591360">weight</span> <span m="2591560">edge</span> <span
  m="2591910">coming</span> <span m="2592280">out</span> <span
  m="2592550">of</span> <span m="2592730">that</span> <span
  m="2593040">cut</span> <span m="2594300">and</span> <span
  m="2594890">put</span> <span m="2595080">that</span> <span
  m="2595280">in</span> <span m="2595360">my</span> <span
  m="2595480">minimum</span> <span m="2595760">spanning</span> <span
  m="2596120">tree.</span> <span m="2597160">So</span> <span
  m="2597350">when</span> <span m="2597480">I</span> <span m="2597530">do</span>
  <span m="2597700">that,</span> <span m="2601170">I</span> <span
  m="2601290">put</span> <span m="2601480">it in</span> <span
  m="2601680">my</span> <span m="2601820">minimum</span> <span
  m="2602110">spanning tree</span> <span m="2602420">because</span> <span
  m="2602670">I</span> <span m="2602740">know</span> <span
  m="2602910">it's</span> <span m="2603030">in</span> <span
  m="2603150">some</span> <span m="2603400">minimum</span> <span
  m="2603660">spanning</span> <span m="2604000">tree.</span> <span
  m="2604810">Now,</span> <span m="2605150">I'm</span> <span
  m="2605260">going</span> <span m="2605380">to</span> <span
  m="2605590">make</span> <span m="2606400">capital S</span> <span
  m="2607000">grow</span> <span m="2607390">a</span> <span
  m="2607470">little</span> <span m="2607690">bit</span> <span
  m="2608280">to</span> <span m="2608450">include</span> <span
  m="2608890">that</span> <span m="2609110">vertex,</span> <span
  m="2610440">and</span> <span m="2610570">repeat.</span> <span
  m="2612100">That's</span> <span m="2612290">actually</span> <span
  m="2612750">also</span> <span m="2613100">a</span> <span
  m="2613120">very</span> <span m="2613340">natural</span> <span
  m="2613670">algorithm.</span> <span m="2614310">Start</span> <span
  m="2614560">with</span> <span m="2614700">a</span> <span
  m="2614760">tiny</span> <span m="2615220">s</span> <span m="2616050">and
  just</span> <span m="2616210">keep</span> <span m="2616410">growing</span>
  <span m="2616770">it</span> <span m="2616860">one</span> <span
  m="2617050">by</span> <span m="2617190">one.</span> <span
  m="2617780">At</span> <span m="2617920">each</span> <span
  m="2618130">stage</span> <span m="2618620">use</span> <span
  m="2618860">this</span> <span m="2619460">lemma</span> <span
  m="2620260">to</span> <span m="2620360">guarantee</span> <span
  m="2620850">the</span> <span m="2620990">edge</span> <span
  m="2621210">I'm</span> <span m="2621320">adding</span> <span
  m="2621660">is</span> <span m="2621760">still</span> <span
  m="2622470">in</span> <span m="2622640">the</span> <span
  m="2622730">minimum</span> <span m="2623000">spanning</span> <span
  m="2623360">tree.</span></p><p><span m="2625040">So</span> <span
  m="2625420">to</span> <span m="2625590">make</span> <span
  m="2625830">that</span> <span m="2626020">work</span> <span
  m="2626270">out,</span> <span m="2628270">we're</span> <span
  m="2628420">always</span> <span m="2628640">going</span> <span
  m="2628790">to</span> <span m="2628860">need</span> <span
  m="2629070">to</span> <span m="2629200">choose</span> <span
  m="2629720">the</span> <span m="2630710">minimum</span> <span
  m="2631190">weight</span> <span m="2631480">edge</span> <span
  m="2631880">that's</span> <span m="2632630">coming</span> <span
  m="2632990">out</span> <span m="2633270">of</span> <span
  m="2633590">the</span> <span m="2634900">cut.</span> <span
  m="2636550">And</span> <span m="2638860">we'll</span> <span
  m="2639040">do</span> <span m="2639160">that</span> <span
  m="2639330">using</span> <span m="2639620">a</span> <span
  m="2639670">priority</span> <span m="2640080">queue,</span> <span
  m="2641690">just</span> <span m="2641890">like</span> <span
  m="2642050">we</span> <span m="2642150">do</span> <span m="2642300">in</span>
  <span m="2642440">Dijkstra.</span> <span m="2647820">So</span> <span
  m="2648070">for</span> <span m="2648250">every</span> <span
  m="2649350">vertex</span> <span m="2649760">that's</span> <span
  m="2649980">in</span> <span m="2650230">V minus</span> <span
  m="2650800">S,</span> <span m="2651460">we're</span> <span
  m="2651660">going</span> <span m="2651750">to</span> <span
  m="2651790">have</span> <span m="2651970">that</span> <span
  m="2652140">vertex</span> <span m="2652690">in</span> <span
  m="2652890">the</span> <span m="2652990">priority</span> <span
  m="2653370">queue.</span> <span m="2655380">And</span> <span
  m="2655990">the</span> <span m="2656070">question</span> <span
  m="2656600">is,</span> <span m="2659340">what</span> <span
  m="2659490">is</span> <span m="2659600">the</span> <span
  m="2659710">key</span> <span m="2659930">value</span> <span
  m="2660880">of</span> <span m="2661080">that</span> <span
  m="2661440">node</span> <span m="2661870">stored</span> <span
  m="2662230">in</span> <span m="2662310">the</span> <span
  m="2662400">priority</span> <span m="2662790">queue?</span></p><p><span
  m="2664360">So</span> <span m="2664670">the</span> <span
  m="2664820">invariant</span> <span m="2665270">I'm</span> <span
  m="2665660">going to</span> <span m="2665680">have</span> <span
  m="2666420">is</span> <span m="2666630">that</span> <span
  m="2666730">the</span> <span m="2666840">key</span> <span
  m="2667220">of</span> <span m="2667440">v</span> <span m="2669760">is</span>
  <span m="2669990">the</span> <span m="2670090">minimum</span> <span
  m="2671540">of</span> <span m="2672030">the</span> <span
  m="2672160">weights</span> <span m="2672490">of</span> <span
  m="2672550">the</span> <span m="2672740">edges</span> <span
  m="2676070">that</span> <span m="2676190">cross</span> <span
  m="2676620">the</span> <span m="2676750">cut</span> <span
  m="2677140">into</span> <span m="2677620">v.</span> <span
  m="2679540">So</span> <span m="2679740">for</span> <span
  m="2679940">vertex</span> <span m="2680410">v,</span> <span
  m="2681600">I</span> <span m="2681770">want</span> <span m="2681970">to</span>
  <span m="2682130">look</span> <span m="2682400">at</span> <span
  m="2682520">the--</span> <span m="2683000">I'm</span> <span
  m="2683120">not</span> <span m="2683270">going</span> <span
  m="2683360">to</span> <span m="2683420">compute</span> <span
  m="2683780">this</span> <span m="2683950">every</span> <span
  m="2684180">time,</span> <span m="2684490">I'm only</span> <span
  m="2684630">going</span> <span m="2684740">to</span> <span
  m="2684780">maintain</span> <span m="2685260">it.</span> <span
  m="2686270">I</span> <span m="2686390">want</span> <span
  m="2687000">the</span> <span m="2687140">minimum</span> <span
  m="2687610">weight</span> <span m="2687920">of</span> <span
  m="2688010">an</span> <span m="2688130">edge</span> <span
  m="2688940">that</span> <span m="2689150">starts</span> <span
  m="2689480">in</span> <span m="2689600">S</span> <span m="2689885">and</span>
  <span m="2690170">goes</span> <span m="2690420">to</span> <span
  m="2690520">v,</span> <span m="2690770">which</span> <span
  m="2690970">is</span> <span m="2691110">not</span> <span m="2691360">in</span>
  <span m="2691490">S</span> <span m="2691910">because</span> <span
  m="2692730">v</span> <span m="2693270">in</span> <span m="2693510">Q--</span>
  <span m="2693915">Q</span> <span m="2694320">only</span> <span
  m="2694580">stores</span> <span m="2694870">vertices</span> <span
  m="2695260">that</span> <span m="2695360">are</span> <span
  m="2695440">not</span> <span m="2695650">in</span> <span
  m="2695760">S--</span> <span m="2697840">I</span> <span
  m="2697940">want</span> <span m="2698170">the</span> <span
  m="2698250">key</span> <span m="2698430">value</span> <span
  m="2698740">to</span> <span m="2698860">be</span> <span
  m="2699010">that</span> <span m="2699210">minimum</span> <span
  m="2699540">weight</span> <span m="2699790">so</span> <span
  m="2699990">if</span> <span m="2700170">I</span> <span
  m="2700260">choose</span> <span m="2700760">the</span> <span
  m="2700920">overall</span> <span m="2701410">minimum</span> <span
  m="2701880">vertex,</span> <span m="2702530">that</span> <span
  m="2702770">gives</span> <span m="2703010">me</span> <span
  m="2703790">the</span> <span m="2703960">edge</span> <span
  m="2704270">of</span> <span m="2704430">minimum</span> <span
  m="2704830">weight</span> <span m="2705100">that crosses</span> <span
  m="2705580">the</span> <span m="2705690">cut.</span> <span
  m="2706700">OK?</span></p><p><span m="2707110">I've sort of</span> <span
  m="2707410">divided</span> <span m="2708950">this</span> <span
  m="2709360">minimum</span> <span m="2711680">vertex</span> <span
  m="2712070">by</span> <span m="2712180">vertex.</span> <span
  m="2712610">For</span> <span m="2712700">every</span> <span
  m="2712910">vertex</span> <span m="2713320">over</span> <span
  m="2713530">here,</span> <span m="2715500">I'm</span> <span
  m="2715630">going</span> <span m="2715790">to</span> <span
  m="2715920">say,</span> <span m="2716190">what's</span> <span
  m="2716540">the</span> <span m="2716660">minimum</span> <span
  m="2717180">incoming</span> <span m="2717780">weight</span> <span
  m="2718120">from</span> <span m="2718310">somebody</span> <span
  m="2718740">over</span> <span m="2718930">here?</span> <span
  m="2719750">What's</span> <span m="2719980">the</span> <span
  m="2720030">minimum</span> <span m="2720520">incoming</span> <span
  m="2720930">weight</span> <span m="2721230">from</span> <span
  m="2721370">someone</span> <span m="2721660">over</span> <span
  m="2721830">here</span> <span m="2722030">to</span> <span
  m="2722140">there?</span> <span m="2723040">To</span> <span
  m="2723370">here?</span> <span m="2724716">Take the</span> <span
  m="2725120">minimum of</span> <span m="2725500">those</span> <span
  m="2725770">things.</span> <span m="2726240">And</span> <span
  m="2726290">of</span> <span m="2726390">course,</span> <span
  m="2726610">the</span> <span m="2726710">min</span> <span
  m="2726920">of</span> <span m="2727020">all</span> <span
  m="2727200">those</span> <span m="2727570">will</span> <span
  m="2727760">be</span> <span m="2727920">the</span> <span
  m="2728030">min</span> <span m="2728220">of</span> <span
  m="2728330">all</span> <span m="2728490">those</span> <span
  m="2728690">edges.</span> <span m="2729595">OK,</span> <span
  m="2730050">that's</span> <span m="2730300">how I'm</span> <span
  m="2730550">dividing</span> <span m="2730930">things</span> <span
  m="2731140">up.</span></p><p><span m="2732450">And</span> <span
  m="2732840">this</span> <span m="2733000">will</span> <span
  m="2733120">be</span> <span m="2733490">easier</span> <span
  m="2733960">to</span> <span m="2734090">maintain,</span> <span
  m="2734590">but</span> <span m="2734760">let</span> <span
  m="2734920">me</span> <span m="2735090">first</span> <span
  m="2736110">initialize</span> <span m="2736740">everything.</span> <span
  m="2746720">OK,</span> <span m="2747000">I</span> <span
  m="2747030">guess</span> <span m="2747270">we're</span> <span
  m="2747400">going</span> <span m="2747500">to</span> <span
  m="2747540">actually</span> <span m="2747780">initialize</span> <span
  m="2748400">with</span> <span m="2749170">S</span> <span
  m="2749430">being</span> <span m="2749700">the</span> <span
  m="2749860">empty</span> <span m="2750160">set,</span> <span
  m="2750680">so</span> <span m="2750900">Q</span> <span m="2751140">will</span>
  <span m="2751270">store</span> <span m="2751670">everybody,</span> <span
  m="2754580">except</span> <span m="2755030">I'm</span> <span
  m="2755180">going</span> <span m="2755540">to</span> <span
  m="2757280">get</span> <span m="2757490">things</span> <span
  m="2757730">started</span> <span m="2759100">by</span> <span
  m="2759320">setting</span> <span m="2759790">for</span> <span
  m="2760010">particular</span> <span m="2760650">vertex</span> <span
  m="2761210">little</span> <span m="2761580">s.</span> <span
  m="2762430">I'm</span> <span m="2762560">going</span> <span
  m="2762640">to</span> <span m="2762700">set</span> <span
  m="2762950">its</span> <span m="2763140">key</span> <span
  m="2763390">to</span> <span m="2763510">zero.</span> <span
  m="2767310">It</span> <span m="2767530">doesn't</span> <span
  m="2767920">matter</span> <span m="2768280">who little</span> <span
  m="2768750">s</span> <span m="2768950">is.</span> <span
  m="2771210">That's</span> <span m="2771490">just</span> <span
  m="2771700">your</span> <span m="2771820">start</span> <span
  m="2772090">vertex.</span> <span m="2775960">Just</span> <span
  m="2776180">pick</span> <span m="2776390">one</span> <span
  m="2776690">vertex</span> <span m="2778120">and</span> <span
  m="2778540">set</span> <span m="2778850">its</span> <span
  m="2779050">key</span> <span m="2779260">to</span> <span
  m="2779340">zero.</span> <span m="2779750">That</span> <span
  m="2779940">will</span> <span m="2780060">force</span> <span
  m="2780350">it</span> <span m="2780480">to</span> <span m="2780570">be</span>
  <span m="2780690">chosen</span> <span m="2781120">first</span> <span
  m="2782350">because</span> <span m="2782910">for</span> <span
  m="2783060">everyone</span> <span m="2783380">else,</span> <span
  m="2786640">for</span> <span m="2786900">v</span> <span m="2788870">not</span>
  <span m="2789010">equal</span> <span m="2789320">to</span> <span
  m="2789390">S,</span> <span m="2792180">I'm</span> <span
  m="2792320">going</span> <span m="2792420">to</span> <span
  m="2792490">set</span> <span m="2792850">the</span> <span
  m="2792950">key</span> <span m="2793310">to</span> <span
  m="2793870">infinity,</span> <span m="2796380">because</span> <span
  m="2796450">we</span> <span m="2796550">haven't</span> <span
  m="2796830">yet</span> <span m="2797090">seen</span> <span
  m="2797440">any</span> <span m="2797730">edges</span> <span
  m="2798710">that</span> <span m="2799100">go</span> <span
  m="2799270">in</span> <span m="2799400">there,</span> <span
  m="2800470">but</span> <span m="2800650">we'll</span> <span
  m="2800830">change</span> <span m="2801130">that</span> <span
  m="2801320">in</span> <span m="2801420">a</span> <span
  m="2801460">moment.</span></p><p><span m="2816930">OK,</span> <span
  m="2817990">so</span> <span m="2819480">that</span> <span
  m="2819640">was</span> <span m="2819760">the</span> <span
  m="2819850">initialization,</span> <span m="2820820">now</span> <span
  m="2821050">we're</span> <span m="2821160">going</span> <span
  m="2821270">to</span> <span m="2821340">do</span> <span m="2821480">a</span>
  <span m="2821540">loop.</span> <span m="2823020">We're</span> <span
  m="2823080">going</span> <span m="2823170">to</span> <span
  m="2823230">keep</span> <span m="2823460">going</span> <span
  m="2823850">until</span> <span m="2824150">the</span> <span
  m="2824250">Q</span> <span m="2824500">is</span> <span
  m="2824710">empty,</span> <span m="2826010">because</span> <span
  m="2827290">when</span> <span m="2827460">the</span> <span
  m="2827550">Q</span> <span m="2827720">is</span> <span
  m="2827820">empty,</span> <span m="2828190">that</span> <span
  m="2828380">means</span> <span m="2829250">S</span> <span
  m="2829690">is</span> <span m="2829860">everybody,</span> <span
  m="2830550">and</span> <span m="2830920">at</span> <span
  m="2831140">that</span> <span m="2831330">point,</span> <span
  m="2831520">we'll</span> <span m="2831720">have</span> <span
  m="2831980">a</span> <span m="2832050">spanning</span> <span
  m="2832380">tree</span> <span m="2832660">on</span> <span
  m="2832760">the</span> <span m="2832820">whole</span> <span
  m="2833100">graph,</span> <span m="2833560">and</span> <span
  m="2833750">it</span> <span m="2833830">better</span> <span
  m="2834030">be</span> <span m="2834150">minimum.</span> <span
  m="2836005">OK,</span> <span m="2837460">and</span> <span
  m="2837750">we're</span> <span m="2837850">going</span> <span
  m="2837950">to</span> <span m="2838010">do</span> <span
  m="2838170">that</span> <span m="2838510">by</span> <span
  m="2840500">extracting</span> <span m="2841210">the</span> <span
  m="2841280">minimum</span> <span m="2841720">from</span> <span
  m="2842030">our</span> <span m="2842130">priority</span> <span
  m="2842530">Q.</span> <span m="2849230">When</span> <span
  m="2849520">we</span> <span m="2849630">remove</span> <span
  m="2850350">Q--</span> <span m="2858330">we remove</span> <span
  m="2858930">vertex</span> <span m="2859370">u</span> <span
  m="2859700">from</span> <span m="2860140">the</span> <span
  m="2860250">queue</span> <span m="2860670">Q,</span> <span
  m="2861390">this</span> <span m="2861570">means</span> <span
  m="2861790">that</span> <span m="2861870">we're</span> <span
  m="2862030">adding</span> <span m="2862410">u to</span> <span
  m="2862910">S.</span> <span m="2864750">OK,</span> <span m="2864920">by</span>
  <span m="2865560">taking</span> <span m="2865930">it</span> <span
  m="2866020">out</span> <span m="2866240">of</span> <span m="2866360">Q,</span>
  <span m="2866620">that</span> <span m="2866810">means</span> <span
  m="2867020">it</span> <span m="2867330">enters</span> <span
  m="2867660">S,</span> <span m="2868030">by</span> <span m="2868190">the</span>
  <span m="2868480">invariant</span> <span m="2868910">at</span> <span
  m="2869060">the</span> <span m="2869160">top.</span></p><p><span
  m="2871070">So</span> <span m="2872600">now</span> <span m="2872870">we</span>
  <span m="2872990">need</span> <span m="2873200">to</span> <span
  m="2873590">update</span> <span m="2874940">this</span> <span
  m="2875260">invariant,</span> <span m="2875585">that</span> <span
  m="2875910">all</span> <span m="2876090">the</span> <span
  m="2876190">key</span> <span m="2876440">values</span> <span
  m="2876860">are</span> <span m="2876970">correct.</span> <span m="2877520">As
  soon as</span> <span m="2877750">we</span> <span m="2877890">move</span> <span
  m="2878290">a</span> <span m="2878370">vertex</span> <span
  m="2878860">into</span> <span m="2879140">S,</span> <span
  m="2879940">now</span> <span m="2880340">there</span> <span
  m="2880510">are</span> <span m="2880540">new</span> <span
  m="2880870">edges</span> <span m="2881250">we</span> <span
  m="2881370">have</span> <span m="2881550">to</span> <span
  m="2881660">consider</span> <span m="2882120">from</span> <span
  m="2882510">S</span> <span m="2883090">to</span> <span m="2883410">not</span>
  <span m="2883720">S,</span> <span m="2885490">and</span> <span
  m="2886010">we</span> <span m="2886290">do</span> <span
  m="2886450">that</span> <span m="2886720">just</span> <span
  m="2886970">by</span> <span m="2888260">looking</span> <span
  m="2888800">at</span> <span m="2889240">all</span> <span m="2889490">of</span>
  <span m="2889630">the</span> <span m="2889740">neighbors</span> <span
  m="2890690">of</span> <span m="2890910">u.</span> <span m="2892840">I</span>
  <span m="2893110">haven't</span> <span m="2893320">written</span> <span
  m="2893550">this</span> <span m="2893770">in</span> <span m="2893880">a</span>
  <span m="2893940">long</span> <span m="2894200">time,</span> <span
  m="2894490">but</span> <span m="2895200">this</span> <span
  m="2895390">is</span> <span m="2895500">how</span> <span
  m="2895670">it's</span> <span m="2895800">usually</span> <span
  m="2896170">written</span> <span m="2896410">in</span> <span
  m="2896540">Dijkstra,</span> <span m="2897200">except</span> <span
  m="2897490">in</span> <span m="2897540">Dijkstra,</span> <span
  m="2897940">these</span> <span m="2898140">are</span> <span
  m="2898220">the</span> <span m="2898390">outgoing</span> <span
  m="2898800">edges</span> <span m="2899070">from</span> <span
  m="2899310">u</span> <span m="2900560">and v are</span> <span
  m="2900760">the</span> <span m="2900890">neighbors.</span> <span
  m="2901730">Here,</span> <span m="2902300">it's</span> <span
  m="2902440">an</span> <span m="2902510">undirected</span> <span
  m="2902930">graph,</span> <span m="2903220">so</span> <span
  m="2903360">these</span> <span m="2903580">are</span> <span
  m="2903700">all</span> <span m="2903970">of</span> <span
  m="2904060">the</span> <span m="2904150">neighbors</span> <span
  m="2904530">v</span> <span m="2904890">of</span> <span m="2905300">u.</span>
  <span m="2905580">This</span> <span m="2905760">as</span> <span
  m="2905880">an</span> <span m="2905980">adjacency</span> <span
  m="2906490">list.</span></p><p><span m="2908630">OK,</span> <span
  m="2910850">so</span> <span m="2911130">we're</span> <span
  m="2911280">looking</span> <span m="2911660">at</span> <span
  m="2913180">u,</span> <span m="2914480">which</span> <span
  m="2914940">has</span> <span m="2915380">just</span> <span
  m="2915870">been</span> <span m="2916120">added</span> <span
  m="2916610">to</span> <span m="2917000">S,</span> <span m="2918170">and</span>
  <span m="2918350">we're</span> <span m="2918460">looking</span> <span
  m="2918760">at</span> <span m="2918870">the</span> <span
  m="2919000">edges.</span> <span m="2919330">We</span> <span
  m="2919450">want</span> <span m="2919630">to</span> <span
  m="2919690">look</span> <span m="2919870">at</span> <span
  m="2919930">the</span> <span m="2920050">edge</span> <span
  m="2920250">as</span> <span m="2920340">they</span> <span
  m="2920440">go</span> <span m="2920640">to</span> <span m="2920730">V</span>
  <span m="2920950">minus</span> <span m="2921380">S,</span> <span
  m="2922346">only</span> <span m="2922830">those</span> <span
  m="2923080">ones.</span> <span m="2924040">And</span> <span
  m="2924220">then</span> <span m="2924480">for</span> <span
  m="2924700">those</span> <span m="2925540">vertices</span> <span
  m="2926050">v,</span> <span m="2926250">we</span> <span
  m="2926360">need</span> <span m="2926520">to</span> <span
  m="2926620">update</span> <span m="2927020">their</span> <span
  m="2927160">keys,</span> <span m="2928390">because</span> <span
  m="2928590">it</span> <span m="2928710">used</span> <span
  m="2929000">to</span> <span m="2929280">just</span> <span
  m="2929590">count</span> <span m="2929930">all</span> <span
  m="2930120">of</span> <span m="2930210">these</span> <span
  m="2930470">edges</span> <span m="2931960">that</span> <span
  m="2932050">went</span> <span m="2932250">from</span> <span
  m="2932380">the</span> <span m="2932480">rest</span> <span
  m="2932780">of</span> <span m="2932870">S</span> <span m="2933090">to</span>
  <span m="2933200">v.</span> <span m="2933710">And</span> <span
  m="2933880">now</span> <span m="2934060">we</span> <span
  m="2934150">have</span> <span m="2934290">a</span> <span
  m="2934340">new</span> <span m="2934570">edge</span> <span
  m="2934860">uv</span> <span m="2935270">that</span> <span m="2935960">v</span>
  <span m="2936180">needs</span> <span m="2936420">to</span> <span
  m="2936510">consider,</span> <span m="2937330">because</span> <span
  m="2937490">u</span> <span m="2937710">just</span> <span
  m="2937980">got</span> <span m="2938180">added</span> <span
  m="2938440">to</span> <span m="2938520">S.</span></p><p><span
  m="2941240">So</span> <span m="2941390">the</span> <span
  m="2941450">first</span> <span m="2941700">thing</span> <span m="2941890">I'm
  going</span> <span m="2942020">say</span> <span m="2942210">is</span> <span
  m="2942390">if</span> <span m="2942660">v</span> <span m="2942975">in</span>
  <span m="2943290">in</span> <span m="2943620">Q.</span> <span
  m="2945020">So</span> <span m="2945150">we're</span> <span
  m="2945230">just</span> <span m="2945380">going</span> <span
  m="2945480">to</span> <span m="2945540">store</span> <span
  m="2947070">a</span> <span m="2947150">Boolean</span> <span
  m="2947810">for</span> <span m="2948030">every</span> <span
  m="2948310">vertex</span> <span m="2949020">about</span> <span
  m="2949380">whether</span> <span m="2949740">it's</span> <span
  m="2949900">in</span> <span m="2950050">the</span> <span
  m="2950150">queue,</span> <span m="2951150">and</span> <span
  m="2951330">so</span> <span m="2951480">when</span> <span m="2951620">I</span>
  <span m="2951670">extract</span> <span m="2952070">it</span> <span
  m="2952140">from</span> <span m="2952270">the</span> <span
  m="2952370">queue,</span> <span m="2952570">I</span> <span
  m="2952640">just</span> <span m="2953020">set</span> <span
  m="2953210">that</span> <span m="2953320">Boolean</span> <span
  m="2953560">to</span> <span m="2953770">false.</span> <span
  m="2954850">Being</span> <span m="2955130">in</span> <span
  m="2955310">the</span> <span m="2955430">queue</span> <span
  m="2955780">is</span> <span m="2955900">the</span> <span
  m="2955970">same</span> <span m="2956280">as</span> <span
  m="2956390">being</span> <span m="2956660">not</span> <span
  m="2956990">in</span> <span m="2957140">S,</span> <span
  m="2957530">this</span> <span m="2957920">is</span> <span
  m="2958180">what</span> <span m="2958350">Q</span> <span
  m="2958580">represents.</span> <span m="2960286">So</span> <span
  m="2960770">Q</span> <span m="2961060">is</span> <span m="2961350">over</span>
  <span m="2961740">here,</span> <span m="2961950">kind of.</span> <span
  m="2964000">So</span> <span m="2964310">if</span> <span
  m="2964530">we're</span> <span m="2964640">in</span> <span
  m="2964770">the</span> <span m="2964870">queue,</span> <span
  m="2968540">same</span> <span m="2968860">as</span> <span
  m="2968930">saying</span> <span m="2969160">v</span> <span
  m="2969270">is</span> <span m="2969400">not</span> <span m="2969560">in</span>
  <span m="2969690">S,</span> <span m="2971560">then</span> <span
  m="2971800">we're</span> <span m="2971900">going</span> <span
  m="2972020">to</span> <span m="2972090">do</span> <span m="2972200">a</span>
  <span m="2972290">check</span> <span m="2973780">which</span> <span
  m="2973970">lets</span> <span m="2974170">us</span> <span
  m="2974300">compute</span> <span m="2974590">the</span> <span
  m="2974680">minimum.</span> <span m="2975440">This</span> <span
  m="2975590">is</span> <span m="2975720">going</span> <span
  m="2975870">to</span> <span m="2975940">look</span> <span m="2976160">a</span>
  <span m="2976240">lot</span> <span m="2976600">like</span> <span
  m="2976880">a</span> <span m="2976990">relaxation.</span> <span
  m="2984118">Sorry.</span></p><p><span m="3002120">A</span> <span
  m="3002190">couple</span> <span m="3002530">things</span> <span
  m="3002760">going</span> <span m="3003030">on</span> <span
  m="3003200">because</span> <span m="3003650">I</span> <span
  m="3003800">want</span> <span m="3004070">to</span> <span
  m="3004160">compute</span> <span m="3004530">not</span> <span
  m="3004720">just</span> <span m="3004880">the</span> <span
  m="3004960">value</span> <span m="3005380">of</span> <span
  m="3005450">the</span> <span m="3005540">minimum</span> <span
  m="3005820">spanning</span> <span m="3006180">tree,</span> <span
  m="3006380">I</span> <span m="3006510">actually</span> <span
  m="3006910">want</span> <span m="3007080">to</span> <span
  m="3007120">find</span> <span m="3007320">the</span> <span
  m="3007380">minimum</span> <span m="3007640">spanning</span> <span
  m="3008020">tree,</span> <span m="3008350">so</span> <span
  m="3008460">I'm</span> <span m="3008560">going</span> <span
  m="3008700">to</span> <span m="3009180">store</span> <span
  m="3009470">parent</span> <span m="3009800">pointers.</span> <span
  m="3011350">But</span> <span m="3011520">this</span> <span
  m="3011670">is</span> <span m="3011790">just</span> <span
  m="3012070">basically</span> <span m="3012420">taking</span> <span
  m="3012790">a</span> <span m="3012830">min.</span> <span m="3013180">I</span>
  <span m="3013310">say,</span> <span m="3013550">if</span> <span
  m="3014110">the</span> <span m="3014240">weight</span> <span
  m="3014460">of</span> <span m="3014530">this</span> <span
  m="3014700">edge</span> <span m="3015080">is</span> <span
  m="3015160">smaller</span> <span m="3015640">than</span> <span
  m="3015840">what's</span> <span m="3016040">currently</span> <span
  m="3016370">in</span> <span m="3016450">the</span> <span
  m="3016530">key,</span> <span m="3016800">then</span> <span
  m="3017080">update</span> <span m="3017430">the</span> <span
  m="3017520">key,</span> <span m="3017770">because</span> <span
  m="3018000">the</span> <span m="3018050">key is</span> <span
  m="3018250">supposed</span> <span m="3018590">to</span> <span
  m="3018660">be</span> <span m="3018870">the</span> <span
  m="3018970">min.</span> <span m="3020410">OK,</span> <span
  m="3020690">that's</span> <span m="3020960">all</span> <span
  m="3021210">we</span> <span m="3021300">need</span> <span
  m="3021470">to</span> <span m="3021570">do</span> <span m="3021760">to</span>
  <span m="3021840">maintain</span> <span m="3022260">this</span> <span
  m="3022410">invariant,</span> <span m="3023440">this</span> <span
  m="3023610">for loop.</span> <span m="3024060">After</span> <span
  m="3024370">the</span> <span m="3024470">for loop,</span> <span
  m="3025720">this</span> <span m="3026070">property</span> <span
  m="3026510">will</span> <span m="3026680">be</span> <span
  m="3026940">restored,</span> <span m="3027830">v dot key</span> <span
  m="3028280">will</span> <span m="3028460">be</span> <span
  m="3028580">that</span> <span m="3028800">minimum.</span></p><p><span
  m="3030750">And</span> <span m="3031030">furthermore,</span> <span
  m="3031480">we</span> <span m="3031620">kept</span> <span
  m="3031880">track</span> <span m="3032280">of</span> <span
  m="3032380">where</span> <span m="3032540">the</span> <span
  m="3032650">minimums</span> <span m="3033060">came</span> <span
  m="3033370">from,</span> <span m="3035130">so</span> <span
  m="3035690">when</span> <span m="3035900">you</span> <span
  m="3036070">end</span> <span m="3036250">up</span> <span
  m="3036370">extracting</span> <span m="3037130">a</span> <span
  m="3037170">vertex,</span> <span m="3038260">you've</span> <span
  m="3038460">already</span> <span m="3039000">figured</span> <span
  m="3039380">out</span> <span m="3041230">which</span> <span
  m="3042080">edge</span> <span m="3042630">you</span> <span
  m="3042810">added</span> <span m="3043240">to</span> <span
  m="3043350">put</span> <span m="3043580">that</span> <span
  m="3043800">into</span> <span m="3044320">the</span> <span
  m="3044440">set.</span> <span m="3045530">So</span> <span
  m="3045720">in</span> <span m="3045810">fact,</span> <span
  m="3046680">u</span> <span m="3047320">already</span> <span
  m="3047760">had</span> <span m="3048880">a</span> <span
  m="3048960">parent,</span> <span m="3050140">this</span> <span
  m="3050330">would</span> <span m="3050420">be</span> <span
  m="3051540">u</span> <span m="3051870">dot</span> <span
  m="3052190">parent,</span> <span m="3055000">and</span> <span
  m="3056670">we</span> <span m="3056810">want</span> <span
  m="3057010">to</span> <span m="3057100">add</span> <span
  m="3057440">that</span> <span m="3057810">edge</span> <span
  m="3058260">into</span> <span m="3058510">the</span> <span
  m="3058600">minimum</span> <span m="3059350">spanning</span> <span
  m="3059730">tree</span> <span m="3060770">when</span> <span
  m="3061050">we</span> <span m="3061230">add</span> <span m="3061610">u</span>
  <span m="3061800">to</span> <span m="3061960">S.</span> <span
  m="3064090">Overall,</span> <span m="3065010">let</span> <span
  m="3065150">me</span> <span m="3065330">write</span> <span
  m="3066256">why</span> <span m="3066600">this</span> <span
  m="3067060">is</span> <span m="3067520">happening.</span> <span
  m="3070810">At</span> <span m="3070960">the</span> <span
  m="3071080">end</span> <span m="3071230">of</span> <span
  m="3071280">the</span> <span m="3071410">algorithm,</span> <span
  m="3073530">for</span> <span m="3073700">every</span> <span
  m="3073910">vertex</span> <span m="3074290">v,</span> <span
  m="3075030">we</span> <span m="3075160">want</span> <span
  m="3075620">the</span> <span m="3075840">v dot</span> <span
  m="3076010">parent.</span> <span m="3082710">And</span> <span
  m="3082950">that</span> <span m="3084090">will</span> <span
  m="3084200">be</span> <span m="3084370">our</span> <span
  m="3084440">minimum</span> <span m="3084750">spanning</span> <span
  m="3085110">tree.</span> <span m="3085390">Those</span> <span
  m="3085540">are</span> <span m="3085590">the</span> <span
  m="3085790">edges</span> <span m="3086250">that</span> <span
  m="3086400">form</span> <span m="3086630">the</span> <span
  m="3086710">minimum</span> <span m="3087030">spanning</span> <span
  m="3087410">tree.</span></p><p><span m="3093460">Let's</span> <span
  m="3094080">prove</span> <span m="3096758">that</span> <span
  m="3097210">this</span> <span m="3097380">works.</span> <span
  m="3113270">Actually,</span> <span m="3113520">let's</span> <span
  m="3113720">do</span> <span m="3113830">an</span> <span
  m="3113910">example.</span> <span m="3117472">We've done enough</span> <span
  m="3117960">proofs for a</span> <span m="3118380">while.</span> <span
  m="3119995">Let's</span> <span m="3120460">do it over</span> <span
  m="3120920">here.</span> <span m="3130350">I</span> <span
  m="3130660">need</span> <span m="3130830">a</span> <span
  m="3130880">little</span> <span m="3131070">break.</span> <span
  m="3132280">Examples</span> <span m="3132640">are</span> <span
  m="3132710">fun,</span> <span m="3134390">though</span> <span
  m="3134740">easy</span> <span m="3134990">to</span> <span
  m="3135070">make</span> <span m="3135240">mistakes,</span> <span
  m="3135660">so</span> <span m="3135850">correct</span> <span
  m="3136230">me</span> <span m="3136420">if</span> <span m="3136540">you</span>
  <span m="3136640">see</span> <span m="3136800">me</span> <span
  m="3136910">making</span> <span m="3137130">a</span> <span
  m="3137160">mistake.</span> <span m="3138780">And</span> <span
  m="3138860">let</span> <span m="3139060">me</span> <span
  m="3141020">draw</span> <span m="3141550">a</span> <span
  m="3141630">graph.</span> <span m="3161174">OK,</span> <span
  m="3161700">weights.</span> <span m="3162920">14,</span> <span
  m="3164390">3,</span> <span m="3164890">8,</span> <span m="3166390">5,</span>
  <span m="3167390">6,</span> <span m="3168890">12,</span> <span
  m="3169890">7,</span> <span m="3171890">9,</span> <span m="3173390">15.</span>
  <span m="3177729">10.</span> <span m="3181550">OK.</span> <span
  m="3183580">Colors.</span></p><p><span m="3186180">So</span> <span
  m="3188095">I</span> <span m="3188410">want</span> <span m="3188580">to</span>
  <span m="3188630">start</span> <span m="3188910">at</span> <span
  m="3189000">this</span> <span m="3189170">vertex</span> <span
  m="3189580">just</span> <span m="3189790">because</span> <span
  m="3190810">I</span> <span m="3190910">know</span> <span m="3191090">it</span>
  <span m="3191390">does</span> <span m="3191600">an</span> <span
  m="3191700">interesting</span> <span m="3192220">thing,</span> <span
  m="3192470">or</span> <span m="3192570">it's</span> <span m="3192690">a</span>
  <span m="3192740">nice</span> <span m="3192950">example.</span> <span
  m="3194490">Here's</span> <span m="3194800">my</span> <span
  m="3194980">weighted</span> <span m="3195470">undirected</span> <span
  m="3196010">graph.</span> <span m="3196360">I</span> <span
  m="3196410">want</span> <span m="3196580">to</span> <span
  m="3196640">compute</span> <span m="3196940">minimum</span> <span
  m="3197240">spanning</span> <span m="3197610">tree.</span> <span
  m="3198340">I'm</span> <span m="3198370">going</span> <span
  m="3198470">to</span> <span m="3198540">start</span> <span
  m="3199050">with</span> <span m="3200085">a</span> <span
  m="3201480">capital</span> <span m="3201950">S</span> <span
  m="3202400">being--</span> <span m="3203370">well</span> <span
  m="3203570">actually,</span> <span m="3204070">I</span> <span
  m="3204150">start</span> <span m="3204380">with</span> <span
  m="3204460">capital S</span> <span m="3204920">being</span> <span
  m="3205110">nothing,</span> <span m="3207030">and</span> <span
  m="3207370">all</span> <span m="3207650">of</span> <span
  m="3207770">the</span> <span m="3207880">weights--</span> <span
  m="3208910">all</span> <span m="3209060">of</span> <span
  m="3209170">the</span> <span m="3209300">key</span> <span
  m="3209550">values</span> <span m="3210040">are</span> <span
  m="3210110">initially</span> <span m="3210480">infinity.</span> <span
  m="3211260">So</span> <span m="3211330">I'm</span> <span
  m="3211420">going</span> <span m="3211520">to</span> <span
  m="3211590">write</span> <span m="3211800">the</span> <span
  m="3211890">key</span> <span m="3212090">values</span> <span
  m="3212660">in</span> <span m="3213210">blue.</span> <span
  m="3214520">So</span> <span m="3214860">initially</span> <span
  m="3215270">everything</span> <span m="3216220">is</span> <span
  m="3216320">infinity</span> <span m="3220800">for</span> <span
  m="3221030">every</span> <span m="3221240">vertex,</span> <span
  m="3225230">except</span> <span m="3225540">for</span> <span
  m="3225730">S</span> <span m="3226870">the</span> <span
  m="3227020">value</span> <span m="3227380">is</span> <span
  m="3227510">zero.</span></p><p><span m="3230720">So</span> <span
  m="3230990">all</span> <span m="3231180">of</span> <span
  m="3231270">these</span> <span m="3231460">things</span> <span
  m="3231690">are</span> <span m="3231800">in</span> <span m="3231960">my</span>
  <span m="3232150">priority</span> <span m="3232560">queue,</span> <span
  m="3233530">and</span> <span m="3233750">so</span> <span
  m="3234010">when</span> <span m="3234220">I</span> <span
  m="3235140">extract</span> <span m="3235640">from</span> <span
  m="3235820">the</span> <span m="3235920">queue,</span> <span
  m="3236470">I</span> <span m="3236720">of</span> <span
  m="3236810">course</span> <span m="3237020">get</span> <span
  m="3237220">S.</span> <span m="3238230">OK,</span> <span
  m="3238490">that's</span> <span m="3238790">the</span> <span
  m="3239460">point</span> <span m="3239650">of</span> <span
  m="3239730">that</span> <span m="3239930">set</span> <span
  m="3240100">up.</span> <span m="3240990">So</span> <span
  m="3241620">that's</span> <span m="3241990">when</span> <span
  m="3242160">I</span> <span m="3242240">draw</span> <span
  m="3242700">the</span> <span m="3242860">red</span> <span
  m="3243060">circle</span> <span m="3243410">containing</span> <span
  m="3243980">little</span> <span m="3244270">s.</span> <span
  m="3244640">The</span> <span m="3244780">red</span> <span
  m="3244960">circle</span> <span m="3245250">here</span> <span
  m="3245400">is</span> <span m="3245470">supposed</span> <span
  m="3245750">to</span> <span m="3245810">be</span> <span
  m="3245950">capital</span> <span m="3246330">S.</span> <span
  m="3248480">So</span> <span m="3249390">at</span> <span
  m="3249560">this</span> <span m="3249700">point,</span> <span
  m="3249890">I've</span> <span m="3250070">added</span> <span
  m="3250650">capital</span> <span m="3251080">S--</span> <span
  m="3251610">little</span> <span m="3251950">s</span> <span
  m="3252160">to</span> <span m="3252280">capital</span> <span
  m="3252700">S,</span> <span m="3253710">and</span> <span
  m="3253970">then</span> <span m="3254110">I</span> <span
  m="3254200">look</span> <span m="3254590">at</span> <span
  m="3254820">all</span> <span m="3255120">of</span> <span
  m="3255280">the</span> <span m="3255390">neighbors</span> <span
  m="3256610">v</span> <span m="3257055">of</span> <span m="3257500">S.</span>
  <span m="3259560">And</span> <span m="3259880">I</span> <span
  m="3259930">make</span> <span m="3260190">sure</span> <span
  m="3260350">that</span> <span m="3260550">they</span> <span
  m="3260740">are</span> <span m="3261330">outside</span> <span
  m="3261780">of</span> <span m="3261900">S.</span> <span m="3262280">In</span>
  <span m="3262380">this</span> <span m="3262550">case,</span> <span
  m="3262870">they</span> <span m="3262900">all</span> <span
  m="3263150">are.</span> <span m="3263500">All</span> <span
  m="3263750">three</span> <span m="3263970">neighbors,</span> <span
  m="3264920">these</span> <span m="3265120">three</span> <span
  m="3265270">guys,</span> <span m="3266870">are</span> <span
  m="3267050">not</span> <span m="3267260">in</span> <span
  m="3267390">S.</span></p><p><span m="3267885">And</span> <span
  m="3268380">then</span> <span m="3268500">I</span> <span
  m="3268540">look</span> <span m="3268800">at</span> <span
  m="3268880">the</span> <span m="3268980">weights</span> <span
  m="3269290">of</span> <span m="3269370">the</span> <span
  m="3269580">edges.</span> <span m="3270130">Here</span> <span
  m="3270340">I</span> <span m="3270390">have</span> <span m="3270580">a</span>
  <span m="3270630">weight</span> <span m="3270870">7</span> <span
  m="3271220">edge.</span> <span m="3271920">That's</span> <span
  m="3272200">smaller</span> <span m="3272600">than</span> <span
  m="3272750">infinity,</span> <span m="3273900">so</span> <span
  m="3273930">I'm</span> <span m="3273990">going</span> <span
  m="3274070">to</span> <span m="3274140">cross</span> <span
  m="3274520">out</span> <span m="3274650">infinity</span> <span
  m="3275200">and</span> <span m="3275320">write</span> <span
  m="3275590">7.</span> <span m="3276970">And</span> <span m="3277330">15</span>
  <span m="3277830">is</span> <span m="3277940">smaller</span> <span
  m="3278330">than</span> <span m="3278510">infinity,</span> <span
  m="3279170">so</span> <span m="3279320">I'm</span> <span
  m="3279430">going</span> <span m="3279550">to</span> <span
  m="3279640">cross</span> <span m="3279900">out</span> <span
  m="3280030">infinity</span> <span m="3280290">and</span> <span
  m="3280550">write</span> <span m="3280750">15.</span> <span
  m="3281674">And</span> <span m="3282136">10,</span> <span
  m="3282940">surprise,</span> <span m="3283740">is</span> <span
  m="3283800">smaller</span> <span m="3284250">than</span> <span
  m="3284410">infinity.</span> <span m="3285310">So I'm going to</span> <span
  m="3285610">cross out</span> <span m="3285900">infinity</span> <span
  m="3286390">rate</span> <span m="3286610">10.</span> <span
  m="3286930">So</span> <span m="3287040">now</span> <span
  m="3287450">I've</span> <span m="3287780">updated</span> <span
  m="3288370">the</span> <span m="3288470">key</span> <span
  m="3288710">values</span> <span m="3289230">for</span> <span
  m="3289350">those</span> <span m="3289620">three</span> <span
  m="3289850">nodes.</span></p><p><span m="3291070">I</span> <span
  m="3291120">should</span> <span m="3291300">mention</span> <span
  m="3291610">in</span> <span m="3291710">the</span> <span
  m="3291810">priority</span> <span m="3292410">queue,</span> <span
  m="3293500">to</span> <span m="3293610">do</span> <span
  m="3293820">that,</span> <span m="3294140">that</span> <span
  m="3294350">is</span> <span m="3294570">a</span> <span
  m="3294720">decrease-key</span> <span m="3295580">operation.</span> <span
  m="3298210">This</span> <span m="3298340">thing</span> <span
  m="3298470">here</span> <span m="3299710">is</span> <span m="3299910">a</span>
  <span m="3299960">decrease-key.</span> <span m="3301600">You</span> <span
  m="3301700">need</span> <span m="3301800">to</span> <span
  m="3301960">update</span> <span m="3302500">the</span> <span
  m="3302590">priority</span> <span m="3302960">queue to</span> <span
  m="3303170">say,</span> <span m="3303320">hey</span> <span
  m="3303490">look,</span> <span m="3304090">the</span> <span
  m="3304210">key</span> <span m="3304730">of</span> <span
  m="3305130">this</span> <span m="3305450">node</span> <span
  m="3305740">changed.</span> <span m="3307090">And</span> <span
  m="3307330">so</span> <span m="3308250">you're</span> <span
  m="3308420">going</span> <span m="3308520">to have to</span> <span
  m="3308730">move</span> <span m="3308910">it</span> <span
  m="3308960">around</span> <span m="3309350">in</span> <span
  m="3309490">the</span> <span m="3309590">heap,</span> <span
  m="3309920">or</span> <span m="3309980">whatever.</span> <span
  m="3312400">Just</span> <span m="3312620">like</span> <span
  m="3312790">Dijkstra,</span> <span m="3313360">same</span> <span
  m="3313620">thing</span> <span m="3313790">happens.</span> <span
  m="3314610">OK,</span> <span m="3314820">so I've</span> <span
  m="3315020">decreased</span> <span m="3315430">the</span> <span
  m="3315520">key</span> <span m="3315690">of</span> <span
  m="3315770">those</span> <span m="3315940">three</span> <span
  m="3316100">nodes.</span></p><p><span m="3316860">Now</span> <span
  m="3317100">I</span> <span m="3317200">do</span> <span
  m="3317360">another</span> <span m="3317660">iteration.</span> <span
  m="3318230">I</span> <span m="3318340">look</span> <span m="3318610">at</span>
  <span m="3318720">all</span> <span m="3318940">of</span> <span
  m="3319040">the</span> <span m="3319150">key</span> <span
  m="3319330">values</span> <span m="3319710">stored.</span> <span
  m="3320450">The</span> <span m="3320550">smallest</span> <span
  m="3321080">one</span> <span m="3321310">is</span> <span m="3321500">7,</span>
  <span m="3324860">because</span> <span m="3325430">this</span> <span
  m="3325870">node's</span> <span m="3325980">no</span> <span
  m="3326120">longer</span> <span m="3326430">in</span> <span
  m="3326540">there.</span> <span m="3327200">So</span> <span
  m="3327540">I'm</span> <span m="3327690">going</span> <span
  m="3327920">to</span> <span m="3328090">add</span> <span
  m="3328520">this</span> <span m="3328740">node</span> <span
  m="3329520">to</span> <span m="3329790">capital</span> <span
  m="3330280">S.</span> <span m="3330840">So</span> <span
  m="3331220">capital</span> <span m="3331580">S</span> <span
  m="3331720">is</span> <span m="3331820">going</span> <span
  m="3331950">to</span> <span m="3332020">grow</span> <span
  m="3333010">to</span> <span m="3333160">include</span> <span
  m="3333570">that</span> <span m="3333800">node.</span> <span
  m="3334920">I've</span> <span m="3335000">extracted</span> <span
  m="3335500">it</span> <span m="3335620">from</span> <span
  m="3335770">the</span> <span m="3335880">queue.</span> <span
  m="3336800">And</span> <span m="3336980">now</span> <span m="3337130">I</span>
  <span m="3337200">look</span> <span m="3337390">at</span> <span
  m="3337440">all</span> <span m="3337610">the</span> <span
  m="3337700">neighbors</span> <span m="3338090">of</span> <span
  m="3338180">that</span> <span m="3338390">node.</span> <span
  m="3339570">So,</span> <span m="3340140">for</span> <span
  m="3340260">example,</span> <span m="3340730">here's</span> <span
  m="3340880">a</span> <span m="3340930">neighbor.</span> <span
  m="3342520">9</span> <span m="3342900">is</span> <span m="3343040">less</span>
  <span m="3343260">than</span> <span m="3343370">infinity,</span> <span
  m="3344850">so</span> <span m="3345110">I</span> <span m="3345590">write
  9.</span> <span m="3346670">Here's</span> <span m="3346890">a</span> <span
  m="3346930">neighbor.</span> <span m="3347630">12</span> <span
  m="3347990">is</span> <span m="3348110">less</span> <span
  m="3348330">than</span> <span m="3348770">infinity,</span> <span
  m="3349260">so I write</span> <span m="3349680">12.</span> <span
  m="3351160">5</span> <span m="3351550">is</span> <span m="3351660">less</span>
  <span m="3351990">than infinity,</span> <span m="3352320">so I</span> <span
  m="3352650">write</span> <span m="3352940">5.</span> <span
  m="3353810">Here's</span> <span m="3354090">a</span> <span
  m="3354170">neighbor,</span> <span m="3355070">but</span> <span
  m="3355380">s</span> <span m="3356150">is</span> <span m="3356350">in</span>
  <span m="3356510">big</span> <span m="3356750">S,</span> <span
  m="3357030">so</span> <span m="3357340">we're</span> <span
  m="3357450">not</span> <span m="3357640">going</span> <span
  m="3357760">to</span> <span m="3358120">touch</span> <span
  m="3358390">that</span> <span m="3358560">edge.</span> <span
  m="3359210">I'm</span> <span m="3359270">not</span> <span
  m="3359420">going</span> <span m="3359510">to</span> <span
  m="3359570">touch</span> <span m="3359800">s.</span> <span
  m="3361790">OK?</span> <span m="3362460">I</span> <span
  m="3362510">will</span> <span m="3362660">end</span> <span
  m="3362790">up</span> <span m="3362910">looking</span> <span
  m="3363150">at</span> <span m="3363200">every</span> <span
  m="3363430">edge</span> <span m="3363610">twice,</span> <span
  m="3364000">so</span> <span m="3364250">no</span> <span m="3364380">big</span>
  <span m="3364540">deal.</span></p><p><span m="3366070">Right</span> <span
  m="3366270">now,</span> <span m="3366480">who's</span> <span
  m="3366680">smallest?</span> <span m="3367770">5,</span> <span
  m="3368220">I</span> <span m="3368280">think.</span> <span m="3369390">It's
  the</span> <span m="3369470">smallest</span> <span m="3369930">blue</span>
  <span m="3370210">key.</span> <span m="3372440">So</span> <span
  m="3372750">we're</span> <span m="3372890">going</span> <span
  m="3372980">to</span> <span m="3373060">add</span> <span m="3373520">5</span>
  <span m="3374010">to</span> <span m="3374130">the</span> <span
  m="3374230">set.</span> <span m="3377730">Sorry,</span> <span
  m="3377940">add</span> <span m="3378240">this</span> <span
  m="3378420">vertex</span> <span m="3378850">to</span> <span
  m="3378950">the</span> <span m="3379060">set</span> <span
  m="3379320">S,</span> <span m="3380430">and</span> <span
  m="3380540">then</span> <span m="3380670">look</span> <span
  m="3380900">at</span> <span m="3380950">all</span> <span m="3381200">of</span>
  <span m="3381340">the</span> <span m="3381600">outgoing</span> <span
  m="3382050">edges</span> <span m="3382590">from</span> <span
  m="3382930">here.</span> <span m="3384370">So</span> <span
  m="3385230">6</span> <span m="3385630">is</span> <span
  m="3385880">actually</span> <span m="3386180">less</span> <span
  m="3386410">than</span> <span m="3386560">12,</span> <span
  m="3388020">so</span> <span m="3388260">this</span> <span
  m="3388480">edge</span> <span m="3388720">is</span> <span
  m="3388830">better</span> <span m="3389060">than</span> <span
  m="3389200">that</span> <span m="3389380">one</span> <span
  m="3389530">was.</span> <span m="3391200">Then,</span> <span
  m="3391810">what's that,</span> <span m="3392110">an 8?</span> <span
  m="3393391">8</span> <span m="3393820">Is</span> <span m="3394040">less</span>
  <span m="3394360">than</span> <span m="3394520">10.</span> <span
  m="3397820">14</span> <span m="3398460">is</span> <span
  m="3398570">definitely</span> <span m="3398870">less</span> <span
  m="3399090">than</span> <span m="3399220">infinity.</span> <span
  m="3400670">And</span> <span m="3400960">we</span> <span
  m="3401060">look</span> <span m="3401230">at</span> <span
  m="3401310">this</span> <span m="3401510">edge,</span> <span
  m="3401780">but</span> <span m="3401930">that</span> <span
  m="3402110">edge</span> <span m="3403020">stays</span> <span
  m="3403330">inside</span> <span m="3403650">the</span> <span
  m="3403730">red</span> <span m="3403930">set,</span> <span
  m="3404220">so</span> <span m="3404480">we</span> <span
  m="3404650">forget</span> <span m="3404900">about</span> <span
  m="3405130">it.</span></p><p><span m="3406840">Next</span> <span
  m="3407080">smallest</span> <span m="3407480">value</span> <span
  m="3407830">is</span> <span m="3408340">6.</span> <span m="3410280">So</span>
  <span m="3413750">6,</span> <span m="3414670">we</span> <span
  m="3415660">add</span> <span m="3416860">this</span> <span
  m="3417060">guy</span> <span m="3417220">in.</span> <span
  m="3419240">We</span> <span m="3419410">look</span> <span
  m="3419610">at</span> <span m="3419750">the</span> <span
  m="3420030">edges</span> <span m="3420470">from</span> <span
  m="3420790">that</span> <span m="3420980">vertex,</span> <span
  m="3421390">but</span> <span m="3421540">actually</span> <span
  m="3421800">nothing</span> <span m="3422090">happens</span> <span
  m="3422520">because</span> <span m="3422680">all</span> <span
  m="3422840">those</span> <span m="3423060">vertices</span> <span
  m="3423940">are</span> <span m="3424120">inside</span> <span
  m="3424600">capital</span> <span m="3425000">S,</span> <span
  m="3425400">so</span> <span m="3426690">we</span> <span
  m="3426750">don't</span> <span m="3426890">care</span> <span
  m="3427030">about</span> <span m="3427220">those</span> <span
  m="3427380">edges.</span> <span m="3428700">Next</span> <span
  m="3428890">one</span> <span m="3429620">is</span> <span m="3433130">8,</span>
  <span m="3434870">so</span> <span m="3436040">we'll</span> <span
  m="3436220">add</span> <span m="3436500">in</span> <span
  m="3437920">this</span> <span m="3438130">vertex.</span> <span
  m="3440350">And</span> <span m="3440820">there's</span> <span
  m="3440950">only</span> <span m="3441140">one</span> <span
  m="3441420">edge</span> <span m="3441670">that</span> <span
  m="3441820">leaves</span> <span m="3442140">the</span> <span
  m="3442240">cut,</span> <span m="3442610">so</span> <span
  m="3442820">that's</span> <span m="3443350">3,</span> <span
  m="3443830">and</span> <span m="3444130">3</span> <span m="3444580">is</span>
  <span m="3444800">indeed</span> <span m="3445120">better</span> <span
  m="3445380">than</span> <span m="3445570">14.</span> <span
  m="3447074">So</span> <span m="3450070">never mind.</span> <span
  m="3451700">Stop.</span></p><p><span m="3454470">So</span> <span
  m="3456170">good,</span> <span m="3457200">now</span> <span
  m="3457470">I</span> <span m="3457570">think</span> <span
  m="3457770">the</span> <span m="3457860">smallest</span> <span
  m="3458290">key</span> <span m="3458480">is</span> <span m="3458640">3.</span>
  <span m="3458830">Notice</span> <span m="3459120">smallest</span> <span
  m="3459490">key</span> <span m="3459630">is</span> <span
  m="3459750">smaller</span> <span m="3460070">than</span> <span
  m="3460240">anything</span> <span m="3460590">we've</span> <span
  m="3460720">seen</span> <span m="3460950">before,</span> <span
  m="3461770">other</span> <span m="3461920">than</span> <span
  m="3462070">0,</span> <span m="3462590">but</span> <span
  m="3462780">that's</span> <span m="3462970">OK.</span> <span m="3463390">I'll
  just</span> <span m="3463880">add it</span> <span m="3464210">in,</span> <span
  m="3466090">and</span> <span m="3466360">there's</span> <span
  m="3466550">no</span> <span m="3466950">edges</span> <span
  m="3467260">leaving</span> <span m="3467530">the</span> <span
  m="3467630">cut</span> <span m="3467880">from</span> <span
  m="3468010">there.</span> <span m="3468920">And</span> <span
  m="3469100">then</span> <span m="3469200">over</span> <span
  m="3469390">here,</span> <span m="3469530">we</span> <span
  m="3469630">have</span> <span m="3469830">9</span> <span
  m="3470240">and</span> <span m="3470360">15.</span> <span
  m="3471140">So</span> <span m="3471350">first</span> <span
  m="3471650">we'll</span> <span m="3471780">add</span> <span
  m="3472030">9.</span> <span m="3473320">There's</span> <span
  m="3473660">no</span> <span m="3474000">edges</span> <span
  m="3474290">there.</span> <span m="3474570">Then</span> <span
  m="3474740">we</span> <span m="3474840">add</span> <span
  m="3474980">15.</span> <span m="3475670">OK,</span> <span m="3475985">now s
  is</span> <span m="3476300">everything.</span> <span m="3476740">We're</span>
  <span m="3476840">done.</span> <span m="3477200">Q</span> <span
  m="3477400">is</span> <span m="3477510">empty.</span></p><p><span
  m="3478590">Where's</span> <span m="3478970">the</span> <span
  m="3479050">minimal</span> <span m="3479310">spanning</span> <span
  m="3479660">tree?</span> <span m="3479960">I</span> <span
  m="3480080">forgot</span> <span m="3480390">to</span> <span
  m="3480470">draw</span> <span m="3480680">it.</span> <span
  m="3482980">Luckily,</span> <span m="3483810">all</span> <span
  m="3483920">of</span> <span m="3484010">the</span> <span
  m="3484120">edges</span> <span m="3484390">here</span> <span
  m="3484580">have</span> <span m="3484920">different</span> <span
  m="3485520">numbers</span> <span m="3486200">as</span> <span
  m="3486390">labels.</span> <span m="3487010">So</span> <span
  m="3487650">when</span> <span m="3487840">I</span> <span
  m="3487870">have</span> <span m="3488050">a</span> <span m="3488110">3</span>
  <span m="3488430">here,</span> <span m="3489180">what</span> <span
  m="3489240">I</span> <span m="3489300">mean</span> <span
  m="3489570">is,</span> <span m="3489780">include</span> <span
  m="3490520">3</span> <span m="3490960">in</span> <span m="3491100">the</span>
  <span m="3491170">minimum</span> <span m="3491420">spanning</span> <span
  m="3491780">tree,</span> <span m="3491970">the</span> <span
  m="3492100">edge</span> <span m="3492460">that</span> <span
  m="3492600">was</span> <span m="3492740">labeled</span> <span
  m="3493080">3.</span> <span m="3493650">OK,</span> <span m="3493920">so</span>
  <span m="3494090">this will</span> <span m="3494420">be</span> <span
  m="3495220">a minimum</span> <span m="3495530">spanning</span> <span
  m="3495880">tree</span> <span m="3496100">edge.</span> <span
  m="3496670">5</span> <span m="3497290">will</span> <span m="3497420">be
  a</span> <span m="3497600">minimum</span> <span m="3497900">spanning</span>
  <span m="3498230">tree</span> <span m="3498480">edge.</span> <span
  m="3499560">These</span> <span m="3499780">are</span> <span
  m="3500145">actually</span> <span m="3500450">the</span> <span
  m="3500550">parent</span> <span m="3500870">pointers.</span> <span
  m="3501230">6</span> <span m="3501590">will</span> <span m="3501690">be</span>
  <span m="3501840">a</span> <span m="3501880">minimum</span> <span
  m="3502120">spanning</span> <span m="3502460">tree</span> <span
  m="3502660">edge.</span> <span m="3504020">7,</span> <span
  m="3506295">9,</span> <span m="3508115">15,</span> <span
  m="3510980">and</span> <span m="3511350">8.</span></p><p><span
  m="3514720">Every</span> <span m="3515070">vertex</span> <span
  m="3515550">except</span> <span m="3516120">the</span> <span
  m="3516700">starting</span> <span m="3517070">one</span> <span
  m="3517460">will</span> <span m="3517570">have</span> <span
  m="3517770">a</span> <span m="3517820">parent,</span> <span
  m="3518550">which</span> <span m="3518660">means</span> <span
  m="3518830">we'll</span> <span m="3518910">have</span> <span
  m="3519030">exactly</span> <span m="3519470">n</span> <span
  m="3519600">minus</span> <span m="3519870">1</span> <span
  m="3520030">edges,</span> <span m="3520340">that's</span> <span
  m="3520550">a</span> <span m="3520590">good</span> <span
  m="3520770">sign.</span> <span m="3522880">And</span> <span
  m="3523100">in</span> <span m="3523140">fact,</span> <span m="3523370">this
  will</span> <span m="3523610">be</span> <span m="3523830">a</span> <span
  m="3524220">minimum</span> <span m="3524570">spanning</span> <span
  m="3524950">tree.</span> <span m="3525320">That's</span> <span
  m="3525560">the</span> <span m="3525650">claim,</span> <span
  m="3526620">because</span> <span m="3527510">every</span> <span
  m="3527850">time</span> <span m="3528260">we</span> <span
  m="3528400">grew</span> <span m="3528760">the</span> <span
  m="3528890">circle</span> <span m="3529460">to</span> <span
  m="3529740">include</span> <span m="3530170">a</span> <span
  m="3530210">bigger</span> <span m="3530470">thing,</span> <span m="3531140">we
  were</span> <span m="3531350">guaranteed</span> <span m="3532080">that</span>
  <span m="3532220">this</span> <span m="3532450">edge</span> <span
  m="3533310">was</span> <span m="3533640">in</span> <span
  m="3533820">the</span> <span m="3533900">minimum</span> <span
  m="3534170">spanning</span> <span m="3534530">tree</span> <span
  m="3535970">by</span> <span m="3537420">applying</span> <span
  m="3537970">this</span> <span m="3538180">property</span> <span
  m="3539180">with</span> <span m="3539440">that</span> <span
  m="3539710">cut.</span> <span m="3542710">Let</span> <span
  m="3542850">me</span> <span m="3542990">just</span> <span
  m="3543360">write</span> <span m="3543570">that</span> <span
  m="3543750">down.</span></p><p><span m="3553430">OK,</span> <span
  m="3553670">to</span> <span m="3553870">prove</span> <span
  m="3554060">correctness,</span> <span m="3554710">you</span> <span
  m="3554850">need</span> <span m="3555030">to</span> <span
  m="3555110">prove</span> <span m="3555520">an</span> <span
  m="3555600">invariant</span> <span m="3556400">that</span> <span
  m="3557500">this</span> <span m="3557950">key,</span> <span
  m="3558400">the</span> <span m="3558850">key</span> <span
  m="3559050">of</span> <span m="3559120">every</span> <span
  m="3559310">vertex,</span> <span m="3559750">always</span> <span
  m="3560120">remains</span> <span m="3560510">this</span> <span
  m="3560660">minimum.</span> <span m="3561840">So</span> <span m="3562000">this
  is</span> <span m="3562130">an invariant.</span> <span m="3563030">You</span>
  <span m="3563140">should</span> <span m="3563350">prove</span> <span
  m="3563570">that</span> <span m="3563810">by</span> <span
  m="3563970">induction.</span> <span m="3573770">I</span> <span
  m="3573880">won't</span> <span m="3574090">prove</span> <span
  m="3574290">it</span> <span m="3574340">here.</span></p><p><span
  m="3577820">But</span> <span m="3578020">we</span> <span
  m="3578140">have</span> <span m="3578310">another</span> <span
  m="3578670">invariant,</span> <span m="3583550">a more</span> <span
  m="3583740">interesting</span> <span m="3584100">one</span> <span
  m="3584280">from</span> <span m="3584450">an</span> <span
  m="3584530">MST</span> <span m="3584910">perspective,</span> <span
  m="3586020">you know, it's</span> <span m="3586210">just</span> <span
  m="3586430">a</span> <span m="3586710">sort of</span> <span
  m="3586910">algorithm</span> <span m="3587610">implementation</span> <span
  m="3588270">detail,</span> <span m="3589680">that the</span> <span
  m="3590050">tree</span> <span m="3592420">T</span> <span
  m="3592650">sub</span> <span m="3592860">S,</span> <span
  m="3596040">within</span> <span m="3596500">S</span> <span
  m="3598236">is</span> <span m="3598670">always</span> <span
  m="3599000">contained</span> <span m="3599640">in</span> <span
  m="3600340">a</span> <span m="3600410">minimum</span> <span
  m="3600730">spanning</span> <span m="3601100">tree</span> <span
  m="3601430">of</span> <span m="3601930">G.</span> <span m="3603295">So</span>
  <span m="3603750">over</span> <span m="3604010">here,</span> <span
  m="3605770">we</span> <span m="3605930">have</span> <span
  m="3606050">this</span> <span m="3606190">way</span> <span
  m="3606410">of</span> <span m="3606560">computing</span> <span
  m="3607040">minimum</span> <span m="3607280">spanning</span> <span
  m="3607580">tree</span> <span m="3607740">for</span> <span
  m="3607920">all</span> <span m="3608190">vertices</span> <span
  m="3608730">v,</span> <span m="3609400">but</span> <span
  m="3609900">what</span> <span m="3610130">I'd</span> <span
  m="3610200">like</span> <span m="3610360">to</span> <span
  m="3610460">do</span> <span m="3610590">is</span> <span
  m="3610700">just</span> <span m="3611020">look</span> <span
  m="3611210">at</span> <span m="3611300">v</span> <span
  m="3611600">that's</span> <span m="3611900">currently</span> <span
  m="3612470">in</span> <span m="3612610">S.</span> <span m="3613520">By</span>
  <span m="3613920">the</span> <span m="3614030">end,</span> <span
  m="3614160">that</span> <span m="3614280">will</span> <span
  m="3614380">be</span> <span m="3614490">the</span> <span
  m="3614600">whole</span> <span m="3614780">thing,</span> <span
  m="3615680">but</span> <span m="3616030">if</span> <span m="3616220">I</span>
  <span m="3616470">look</span> <span m="3616720">at</span> <span m="3616860">v
  in S,</span> <span m="3617325">and</span> <span m="3617790">I</span> <span
  m="3617870">always</span> <span m="3618050">look</span> <span
  m="3618220">at</span> <span m="3618510">the</span> <span
  m="3618710">edge</span> <span m="3618970">from</span> <span
  m="3619180">v</span> <span m="3619460">to</span> <span m="3619610">v</span>
  <span m="3619750">dot</span> <span m="3619970">parent,</span> <span
  m="3621420">that</span> <span m="3621640">gives</span> <span
  m="3621860">me</span> <span m="3622010">this</span> <span
  m="3622220">tree</span> <span m="3622560">TS.</span> <span
  m="3624580">I</span> <span m="3624700">claim</span> <span
  m="3625060">it</span> <span m="3625200">will</span> <span
  m="3625340">be</span> <span m="3626010">contained</span> <span
  m="3626650">in</span> <span m="3626770">a</span> <span
  m="3626810">minimum</span> <span m="3627080">spanning</span> <span
  m="3627410">tree</span> <span m="3627590">of  the</span> <span
  m="3627750">entire</span> <span m="3628130">graph,</span> <span
  m="3629910">proof</span> <span m="3630370">by</span> <span
  m="3630550">induction.</span></p><p><span m="3632850">So</span> <span
  m="3633760">by</span> <span m="3634020">induction,</span> <span
  m="3635190">let's</span> <span m="3635480">assume--</span> <span
  m="3638570">induction</span> <span m="3638990">hypothesis</span> <span
  m="3639660">will</span> <span m="3639840">be</span> <span
  m="3640560">that,</span> <span m="3642010">let's</span> <span
  m="3642210">say</span> <span m="3642590">there</span> <span
  m="3642830">is</span> <span m="3643170">a</span> <span
  m="3643300">minimum</span> <span m="3643680">spanning</span> <span
  m="3644090">tree</span> <span m="3644982">T</span> <span
  m="3645430">star,</span> <span m="3646690">which</span> <span
  m="3646900">contains</span> <span m="3647660">T</span> <span
  m="3647930">sub</span> <span m="3648180">S,</span> <span
  m="3649460">and</span> <span m="3649650">then</span> <span
  m="3649870">what</span> <span m="3650010">the</span> <span
  m="3650120">algorithm</span> <span m="3650510">does,</span> <span
  m="3650750">is</span> <span m="3650890">it</span> <span
  m="3650980">repeatedly</span> <span m="3651560">grows</span> <span
  m="3652080">S</span> <span m="3652550">by</span> <span
  m="3652820">adding</span> <span m="3654020">this</span> <span
  m="3654270">vertex</span> <span m="3654650">u</span> <span
  m="3655016">to</span> <span m="3655382">S.</span> <span m="3656460">So</span>
  <span m="3656660">let's</span> <span m="3656850">suppose</span> <span
  m="3657230">that</span> <span m="3657350">it</span> <span
  m="3657470">adds</span> <span m="3660840">u</span> <span m="3661150">to
  S.</span> <span m="3665240">So</span> <span m="3666440">I'm</span> <span
  m="3666610">actually</span> <span m="3666820">going</span> <span
  m="3666910">to</span> <span m="3666960">look</span> <span
  m="3667120">at</span> <span m="3667210">the</span> <span
  m="3667370">edge</span> <span m="3667740">that it</span> <span
  m="3667910">adds.</span> <span m="3678990">So</span> <span
  m="3679210">we</span> <span m="3679310">have</span> <span m="3681540">S</span>
  <span m="3682760">and</span> <span m="3682990">V</span> <span
  m="3683120">minus</span> <span m="3683480">S,</span> <span
  m="3685010">and</span> <span m="3685610">we</span> <span m="3685760">do</span>
  <span m="3685920">this</span> <span m="3686570">thing,</span> <span
  m="3687000">like</span> <span m="3687280">we</span> <span
  m="3687400">just</span> <span m="3687630">saw,</span> <span
  m="3688200">of</span> <span m="3688400">growing</span> <span
  m="3688930">by</span> <span m="3689110">one.</span> <span
  m="3690060">We</span> <span m="3690390">add</span> <span
  m="3690840">one</span> <span m="3691070">new</span> <span
  m="3691220">vertex</span> <span m="3691670">over</span> <span
  m="3691860">here</span> <span m="3692830">to</span> <span
  m="3693440">S,</span> <span m="3694370">and</span> <span
  m="3694510">that</span> <span m="3694680">vertex</span> <span
  m="3695120">has</span> <span m="3695380">a</span> <span
  m="3695430">parent</span> <span m="3695820">edge,</span> <span
  m="3697050">has</span> <span m="3697230">a</span> <span
  m="3697290">parent</span> <span m="3697590">pointer.</span> <span
  m="3699240">So</span> <span m="3699430">this</span> <span
  m="3699690">edge,</span> <span m="3699980">I'm</span> <span
  m="3700020">going</span> <span m="3700130">to</span> <span
  m="3700210">call</span> <span m="3700500">e.</span> <span
  m="3701320">So</span> <span m="3701440">we're</span> <span
  m="3701550">adding</span> <span m="3701810">some</span> <span
  m="3701990">vertex</span> <span m="3702370">u</span> <span
  m="3702640">that</span> <span m="3702820">we</span> <span
  m="3702970">extract</span> <span m="3703230">at</span> <span
  m="3703490">the</span> <span m="3703560">minimum,</span> <span
  m="3704620">and</span> <span m="3705220">we</span> <span
  m="3705370">also</span> <span m="3705650">added</span> <span
  m="3705950">an</span> <span m="3706090">edge</span> <span m="3706370">e</span>
  <span m="3706690">to</span> <span m="3708210">this</span> <span
  m="3708490">TS,</span> <span m="3709230">because</span> <span
  m="3709520">we</span> <span m="3709590">grew</span> <span m="3709850">S
  by</span> <span m="3710325">1.</span></p><p><span m="3712780">OK,</span> <span
  m="3713310">when</span> <span m="3713500">I</span> <span m="3713580">do</span>
  <span m="3713750">that,</span> <span m="3714640">all</span> <span
  m="3715020">I</span> <span m="3715140">do</span> <span m="3715590">is</span>
  <span m="3715700">say,</span> <span m="3715910">look,</span> <span
  m="3716680">greedy</span> <span m="3716990">choice</span> <span
  m="3717340">property</span> <span m="3718220">guarantees</span> <span
  m="3718980">there's</span> <span m="3719150">a</span> <span
  m="3719200">minimum</span> <span m="3719530">spanning</span> <span
  m="3719880">tree</span> <span m="3720060">that</span> <span
  m="3720190">contains</span> <span m="3720760">e.</span> <span
  m="3723160">Because</span> <span m="3723430">we</span> <span
  m="3723500">extracted</span> <span m="3723930">the</span> <span
  m="3724010">min</span> <span m="3724330">from</span> <span
  m="3724500">the</span> <span m="3724620">queue,</span> <span
  m="3725480">and</span> <span m="3725640">the</span> <span
  m="3725710">key</span> <span m="3725900">values</span> <span
  m="3726290">are</span> <span m="3726360">this,</span> <span
  m="3727080">as</span> <span m="3727270">I was</span> <span
  m="3727590">arguing</span> <span m="3727920">before,</span> <span
  m="3728320">that</span> <span m="3728600">is</span> <span
  m="3728830">the</span> <span m="3728950">minimum</span> <span
  m="3729450">overall</span> <span m="3729930">edge</span> <span
  m="3730690">that</span> <span m="3730840">crosses</span> <span
  m="3731330">the</span> <span m="3731430">cut.</span> <span
  m="3733180">e</span> <span m="3733440">is</span> <span m="3733640">a</span>
  <span m="3733710">minimum</span> <span m="3734070">weight</span> <span
  m="3734250">edge that</span> <span m="3734470">crosses</span> <span
  m="3734870">the</span> <span m="3734980">cut,</span> <span
  m="3735600">and</span> <span m="3735770">so</span> <span m="3736000">by</span>
  <span m="3736380">greedy</span> <span m="3736740">choice</span> <span
  m="3737000">property,</span> <span m="3749370">there</span> <span
  m="3749610">is</span> <span m="3749730">some</span> <span
  m="3750210">minimum</span> <span m="3750590">spanning</span> <span
  m="3750990">tree</span> <span m="3751755">that contains</span> <span
  m="3752600">e.</span> <span m="3755010">But</span> <span
  m="3755160">actually,</span> <span m="3755850">I</span> <span
  m="3755920">need</span> <span m="3756220">that</span> <span
  m="3756380">the</span> <span m="3756480">minimum</span> <span
  m="3756750">spanning</span> <span m="3757070">tree</span> <span
  m="3757250">not</span> <span m="3757540">only</span> <span
  m="3757770">contains</span> <span m="3758290">e,</span> <span
  m="3758490">but</span> <span m="3758630">also</span> <span
  m="3759070">contains</span> <span m="3759710">all</span> <span
  m="3759930">the</span> <span m="3760080">other</span> <span
  m="3761120">spanning</span> <span m="3761400">tree</span> <span
  m="3761580">edges</span> <span m="3761830">that</span> <span
  m="3761950">we</span> <span m="3762070">had</span> <span
  m="3762230">already</span> <span m="3763260">said</span> <span
  m="3763690">were</span> <span m="3763840">in</span> <span m="3764110">T</span>
  <span m="3764320">star.</span></p><p><span m="3766050">OK,</span> <span
  m="3766510">so</span> <span m="3767070">here's</span> <span
  m="3767310">where</span> <span m="3767450">I'm</span> <span
  m="3767510">going</span> <span m="3767610">to</span> <span
  m="3767650">use</span> <span m="3767960">the</span> <span
  m="3768290">stronger</span> <span m="3768590">property.</span> <span
  m="3770460">I</span> <span m="3770620">can</span> <span
  m="3770940">modify</span> <span m="3775490">T</span> <span
  m="3775810">star</span> <span m="3780360">to</span> <span
  m="3780600">include</span> <span m="3781960">e</span> <span
  m="3783520">and</span> <span m="3784170">T</span> <span m="3784340">sub</span>
  <span m="3784520">S.</span> <span m="3785960">So</span> <span
  m="3786120">we</span> <span m="3786240">already</span> <span
  m="3786570">assumed</span> <span m="3786900">that</span> <span
  m="3787020">T</span> <span m="3787210">star</span> <span
  m="3787510">includes</span> <span m="3787900">T</span> <span
  m="3788060">sub</span> <span m="3788260">S.</span> <span m="3788750">I</span>
  <span m="3789240">just</span> <span m="3789400">don't</span> <span
  m="3789530">want</span> <span m="3789650">to</span> <span
  m="3789690">break</span> <span m="3790040">that.</span> <span
  m="3791860">And</span> <span m="3792210">if</span> <span
  m="3792320">you</span> <span m="3792420">remember</span> <span
  m="3792690">the</span> <span m="3792840">proof</span> <span
  m="3793190">of</span> <span m="3793330">this</span> <span
  m="3793780">greedy</span> <span m="3794100">choice</span> <span
  m="3794320">property,</span> <span m="3794760">we</span> <span
  m="3794890">said,</span> <span m="3795150">well</span> <span
  m="3795750">all</span> <span m="3795960">we</span> <span
  m="3796070">need</span> <span m="3796220">to</span> <span
  m="3796300">do</span> <span m="3796430">is</span> <span
  m="3796510">remove</span> <span m="3796920">one</span> <span
  m="3797280">edge</span> <span m="3798740">that</span> <span
  m="3798920">crosses</span> <span m="3799360">the</span> <span
  m="3799460">cut</span> <span m="3800000">and</span> <span
  m="3800150">replace</span> <span m="3800580">it</span> <span
  m="3800680">with</span> <span m="3800890">e.</span> <span
  m="3802210">So</span> <span m="3802340">here</span> <span
  m="3802580">what</span> <span m="3802730">I'm</span> <span
  m="3802810">saying</span> <span m="3803110">is</span> <span
  m="3803210">there's</span> <span m="3803350">some</span> <span
  m="3803640">edge,</span> <span m="3803920">yeah,</span> <span
  m="3804250">maybe</span> <span m="3804360">there's</span> <span
  m="3804510">some</span> <span m="3804730">edge</span> <span
  m="3804910">over</span> <span m="3805080">here</span> <span
  m="3806220">in</span> <span m="3806610">T</span> <span m="3806790">star</span>
  <span m="3807480">that</span> <span m="3807630">we</span> <span
  m="3807740">had</span> <span m="3807940">to</span> <span
  m="3808050">remove,</span> <span m="3809220">and</span> <span
  m="3809370">then</span> <span m="3809460">we</span> <span
  m="3809580">put</span> <span m="3809810">e in.</span> <span
  m="3810850">And</span> <span m="3811130">then</span> <span
  m="3811240">we</span> <span m="3811330">get</span> <span m="3811470">a</span>
  <span m="3811510">minimum</span> <span m="3811810">spanning</span> <span
  m="3812200">tree</span> <span m="3812600">again,</span> <span
  m="3814170">T</span> <span m="3814610">star</span> <span
  m="3815080">prime.</span></p><p><span m="3816760">OK,</span> <span
  m="3818610">this</span> <span m="3818870">edge</span> <span
  m="3819110">that</span> <span m="3819240">I</span> <span
  m="3819320">remove</span> <span m="3820140">cannot</span> <span
  m="3820710">be</span> <span m="3820940">one</span> <span m="3821150">of</span>
  <span m="3821220">the</span> <span m="3821320">TS</span> <span
  m="3821990">edges</span> <span m="3822530">because</span> <span
  m="3822860">the</span> <span m="3822950">TS</span> <span
  m="3823300">edges</span> <span m="3823570">are</span> <span
  m="3823710">all</span> <span m="3823970">inside</span> <span
  m="3824540">S.</span> <span m="3825660">So</span> <span
  m="3825760">because</span> <span m="3826080">I'm</span> <span
  m="3826200">only</span> <span m="3826380">removing</span> <span
  m="3826890">an</span> <span m="3826970">edge</span> <span
  m="3827170">that</span> <span m="3827290">crosses</span> <span
  m="3827740">the</span> <span m="3827830">cut,</span> <span
  m="3829270">I'm</span> <span m="3829490">not</span> <span
  m="3829850">disturbing</span> <span m="3830450">TS.</span> <span
  m="3830910">TS</span> <span m="3831270">will</span> <span
  m="3831490">remain</span> <span m="3831970">inside</span> <span
  m="3832490">T</span> <span m="3832630">star,</span> <span
  m="3835020">but</span> <span m="3835170">then</span> <span
  m="3835320">I</span> <span m="3835380">get</span> <span m="3835590">the</span>
  <span m="3835670">new</span> <span m="3835820">property</span> <span
  m="3836230">that</span> <span m="3836400">e</span> <span m="3836730">is</span>
  <span m="3836940">inside</span> <span m="3837390">T</span> <span
  m="3837530">star,</span> <span m="3838690">and</span> <span
  m="3838920">so</span> <span m="3839180">I</span> <span
  m="3839370">prove</span> <span m="3840460">this</span> <span
  m="3840710">invariant</span> <span m="3841120">holds.</span> <span
  m="3842850">OK?</span> <span m="3843115">I</span> <span
  m="3843380">keep</span> <span m="3843600">changing</span> <span
  m="3843990">T</span> <span m="3844150">star,</span> <span
  m="3844530">but</span> <span m="3844670">I</span> <span
  m="3844750">always</span> <span m="3845300">preserve</span> <span
  m="3845700">the</span> <span m="3845780">property</span> <span
  m="3846180">that</span> <span m="3846420">all</span> <span
  m="3846650">of</span> <span m="3846730">the</span> <span
  m="3846810">spanning</span> <span m="3847150">tree</span> <span
  m="3847350">edges</span> <span m="3847710">that</span> <span
  m="3847820">are</span> <span m="3847910">inside</span> <span
  m="3848350">S</span> <span m="3849110">are</span> <span
  m="3849210">contained</span> <span m="3849620">in</span> <span
  m="3849730">some</span> <span m="3850140">minimum</span> <span
  m="3850470">spanning</span> <span m="3850820">tree</span> <span m="3850980">of
  G.</span> <span m="3852080">Maybe I'll</span> <span m="3852430">add in</span>
  <span m="3852760">some</span> <span m="3853130">for</span> <span
  m="3853320">emphasis.</span> <span m="3857520">Cool?</span> <span
  m="3858630">So</span> <span m="3858820">that's</span> <span
  m="3859050">how</span> <span m="3859240">we</span> <span
  m="3859420">use</span> <span m="3859800">the</span> <span
  m="3859900">greedy</span> <span m="3860130">choice</span> <span
  m="3860430">property</span> <span m="3861350">to</span> <span
  m="3861510">get</span> <span m="3862310">correctness</span> <span
  m="3863570">of</span> <span m="3863830">Prim's</span> <span
  m="3864180">algorithm.</span></p><p><span m="3867280">What's</span> <span
  m="3867360">the</span> <span m="3867470">running</span> <span
  m="3867710">time</span> <span m="3868070">of Prim's</span> <span
  m="3868240">algorithm?</span> <span m="3876050">Same</span> <span
  m="3876380">as</span> <span m="3876500">Dijkstra,</span> <span
  m="3877020">good</span> <span m="3877220">answer.</span> <span
  m="3881190">I</span> <span m="3881260">guess</span> <span
  m="3881470">it</span> <span m="3881550">depends</span> <span
  m="3881900">what</span> <span m="3882090">priority</span> <span
  m="3882440">queue</span> <span m="3882590">you use,</span> <span
  m="3883645">but</span> <span m="3884050">whatever</span> <span
  m="3884630">priority</span> <span m="3884965">queue</span> <span
  m="3885300">you use,</span> <span m="3885470">it's</span> <span
  m="3885600">the</span> <span m="3885680">same</span> <span
  m="3885950">as</span> <span m="3886070">Dijkstra.</span> <span
  m="3895790">And</span> <span m="3896140">so</span> <span m="3896260">in</span>
  <span m="3896330">particular,</span> <span m="3896910">if</span> <span
  m="3897010">we</span> <span m="3897110">use</span> <span
  m="3897200">Fibonacci</span> <span m="3897780">heaps,</span> <span
  m="3898040">which,</span> <span m="3898430">again,</span> <span
  m="3898690">we're</span> <span m="3898790">not</span> <span
  m="3898970">covering,</span> <span m="3900560">we</span> <span
  m="3900750">get</span> <span m="3901960">V</span> <span m="3902260">log</span>
  <span m="3902520">V</span> <span m="3904020">plus</span> <span
  m="3904270">E.</span> <span m="3906370">In</span> <span
  m="3906520">general,</span> <span m="3909710">for</span> <span
  m="3909840">every</span> <span m="3910020">edge,</span> <span
  m="3910260">we</span> <span m="3910400">have</span> <span
  m="3910510">to</span> <span m="3910610">do</span> <span m="3910720">a</span>
  <span m="3910790">decrease-key.</span> <span m="3911520">Actually,</span>
  <span m="3911860">for</span> <span m="3911990">every</span> <span
  m="3912220">edge</span> <span m="3912390">we</span> <span
  m="3912490">do</span> <span m="3912740">two</span> <span
  m="3913020">decrease-key</span> <span m="3913640">operations,</span> <span
  m="3914160">potentially,</span> <span m="3915660">if</span> <span
  m="3915740">you</span> <span m="3915830">think</span> <span
  m="3916000">about</span> <span m="3916280">it.</span></p><p><span
  m="3916720">But</span> <span m="3917500">this</span> <span m="3917860">for
  loop</span> <span m="3918800">over</span> <span m="3919840">the</span> <span
  m="3919940">adjacency,</span> <span m="3921075">the</span> <span
  m="3921380">cost</span> <span m="3921780">of</span> <span
  m="3921870">this</span> <span m="3922630">stuff</span> <span
  m="3922930">is</span> <span m="3923220">constant.</span> <span
  m="3923790">The</span> <span m="3923870">cost</span> <span
  m="3924150">of</span> <span m="3924240">this</span> <span
  m="3924530">is</span> <span m="3925430">the</span> <span
  m="3925680">degree</span> <span m="3926130">of</span> <span
  m="3926230">the</span> <span m="3926300">vertex</span> <span
  m="3928970">u.</span> <span m="3930530">And</span> <span m="3931360">so</span>
  <span m="3931740">we're</span> <span m="3931860">basically</span> <span
  m="3932270">doing</span> <span m="3932510">the</span> <span
  m="3932590">sum</span> <span m="3932910">of</span> <span
  m="3933000">the</span> <span m="3933070">degrees</span> <span
  m="3933440">of</span> <span m="3933510">the</span> <span
  m="3933570">vertices,</span> <span m="3936430">which</span> <span
  m="3936650">is</span> <span m="3936860">the</span> <span
  m="3936960">number</span> <span m="3937200">of</span> <span
  m="3937270">edges</span> <span m="3937620">times</span> <span
  m="3937890">2.</span> <span m="3938580">That's</span> <span
  m="3938750">the</span> <span m="3938820">handshaking</span> <span
  m="3939280">lemma.</span> <span m="3940080">So</span> <span
  m="3940330">for</span> <span m="3940520">every</span> <span
  m="3940820">edge,</span> <span m="3941680">we're</span> <span
  m="3941940">potentially</span> <span m="3942310">doing</span> <span
  m="3942550">one</span> <span m="3942990">decrease-key</span> <span
  m="3944010">operation,</span> <span m="3944340">and</span> <span
  m="3944670">with</span> <span m="3944920">Fibonacci</span> <span
  m="3945175">heaps,</span> <span m="3945550">that's</span> <span
  m="3945760">constant</span> <span m="3946140">time.</span> <span
  m="3946880">But</span> <span m="3947040">we're</span> <span
  m="3947210">also</span> <span m="3947400">doing</span> <span
  m="3947620">V</span> <span m="3947990">extract</span> <span
  m="3948430">mins</span> <span m="3948730">those</span> <span
  m="3949030">cost</span> <span m="3949390">log</span> <span
  m="3950000">V</span> <span m="3950220">time,</span> <span
  m="3950640">cause</span> <span m="3950740">the size</span> <span
  m="3951110">of the queue</span> <span m="3951470">is at</span> <span
  m="3951550">most</span> <span m="3951790">V,</span> <span
  m="3952590">and</span> <span m="3952780">so</span> <span
  m="3953000">that</span> <span m="3953220">is</span> <span
  m="3953440">actually</span> <span m="3953760">the</span> <span
  m="3953850">right</span> <span m="3954030">running</span> <span
  m="3954240">time.</span> <span m="3955150">Just</span> <span
  m="3955410">like</span> <span m="3955570">Dijkstra,</span> <span
  m="3956030">so</span> <span m="3956450">easy</span> <span
  m="3956750">formula</span> <span m="3957130">to</span> <span
  m="3957230">remember.</span></p><p><span m="3960630">All</span> <span
  m="3960730">right,</span> <span m="3962410">let's</span> <span
  m="3962770">do</span> <span m="3964000">one</span> <span
  m="3964180">more</span> <span m="3964390">algorithm,</span> <span
  m="3966190">Kruskal's</span> <span m="3966600">algorithm.</span> <span
  m="4001280">Kruskal's</span> <span m="4001740">algorithm</span> <span
  m="4002310">is</span> <span m="4002480">a</span> <span
  m="4002560">little</span> <span m="4002780">bit</span> <span
  m="4003040">weirder</span> <span m="4003450">from</span> <span
  m="4003890">the</span> <span m="4004570">S</span> <span
  m="4004860">perspective,</span> <span m="4005700">I</span> <span
  m="4005780">guess.</span> <span m="4008132">We'll</span> <span
  m="4008570">see</span> <span m="4008710">what</span> <span
  m="4008900">cuts</span> <span m="4009160">we're</span> <span
  m="4009280">using</span> <span m="4009630">in</span> <span
  m="4009710">a</span> <span m="4009750">moment,</span> <span
  m="4012870">but</span> <span m="4013120">it's</span> <span
  m="4013260">based</span> <span m="4013490">around</span> <span
  m="4013650">this</span> <span m="4013800">idea</span> <span
  m="4014110">of,</span> <span m="4014260">well,</span> <span
  m="4014570">the</span> <span m="4014660">globally</span> <span
  m="4015410">minimum</span> <span m="4015950">weight</span> <span
  m="4016220">edge</span> <span m="4017670">is</span> <span
  m="4017890">the</span> <span m="4017980">minimum</span> <span
  m="4018260">weight</span> <span m="4018430">edge</span> <span
  m="4018670">for</span> <span m="4018980">all</span> <span
  m="4019320">cuts</span> <span m="4020050">that</span> <span
  m="4020360">cross</span> <span m="4020690">it,</span> <span
  m="4021390">or</span> <span m="4021540">for</span> <span
  m="4021760">all</span> <span m="4022040">cuts</span> <span
  m="4022390">that</span> <span m="4022520">it</span> <span
  m="4022650">crosses.</span> <span m="4023760">The</span> <span
  m="4023840">globally</span> <span m="4024450">minimum</span> <span
  m="4025090">weight</span> <span m="4025310">edge</span> <span
  m="4025880">is</span> <span m="4026100">going</span> <span
  m="4026250">to</span> <span m="4026310">be</span> <span m="4026440">a</span>
  <span m="4026480">valid</span> <span m="4026790">choice,</span> <span
  m="4027160">and</span> <span m="4027250">so,</span> <span
  m="4027850">by</span> <span m="4027990">this</span> <span m="4028160">theorem,
  you</span> <span m="4028450">pick</span> <span m="4028650">some</span> <span
  m="4028910">S</span> <span m="4030020">that</span> <span
  m="4030240">partitions</span> <span m="4030840">the</span> <span
  m="4030950">endpoints</span> <span m="4031320">of</span> <span
  m="4031380">e,</span> <span m="4033060">therefore</span> <span
  m="4033440">e</span> <span m="4033680">is</span> <span m="4033890">in</span>
  <span m="4034020">a</span> <span m="4034070">minimum</span> <span
  m="4034330">spanning</span> <span m="4034640">tree.</span> <span
  m="4034800">So</span> <span m="4034930">let's</span> <span
  m="4035150">choose</span> <span m="4035380">that</span> <span
  m="4035560">one</span> <span m="4035720">first,</span> <span
  m="4037380">and</span> <span m="4037560">then</span> <span
  m="4037750">repeat.</span> <span m="4038510">Conceptually,</span> <span
  m="4039150">what</span> <span m="4039300">we</span> <span
  m="4039420">want</span> <span m="4039620">to</span> <span
  m="4039700">do</span> <span m="4040000">is</span> <span
  m="4040110">that</span> <span m="4040340">DP</span> <span
  m="4040690">idea</span> <span m="4040990">of</span> <span
  m="4041080">contract</span> <span m="4041680">the</span> <span
  m="4041810">vertex,</span> <span m="4042890">sorry,</span> <span
  m="4042990">contract</span> <span m="4043330">the</span> <span
  m="4043460">edge</span> <span m="4044390">and</span> <span
  m="4044580">then</span> <span m="4044760">find</span> <span
  m="4045010">the</span> <span m="4045080">minimum</span> <span
  m="4045440">weight</span> <span m="4045640">edge</span> <span
  m="4045900">that</span> <span m="4046070">remains.</span> <span
  m="4047580">But</span> <span m="4048040">the</span> <span
  m="4048150">way</span> <span m="4048380">I'm</span> <span
  m="4048430">going</span> <span m="4048530">to</span> <span
  m="4048580">phrase</span> <span m="4048860">it</span> <span
  m="4048960">doesn't</span> <span m="4049190">explicitly</span> <span
  m="4049800">contract,</span> <span m="4050400">although</span> <span
  m="4050860">implicitly,</span> <span m="4051430">it's</span> <span
  m="4051580">doing</span> <span m="4051800">that.</span></p><p><span
  m="4053960">And</span> <span m="4056120">there's</span> <span
  m="4056320">a</span> <span m="4056400">catch.</span> <span
  m="4059800">The</span> <span m="4059930">catch</span> <span
  m="4060280">is</span> <span m="4062370">suppose</span> <span
  m="4064000">I've</span> <span m="4064840">picked</span> <span
  m="4065120">some</span> <span m="4065320">edges</span> <span
  m="4065630">out</span> <span m="4067220">to</span> <span m="4067380">be</span>
  <span m="4067560">in</span> <span m="4067640">my</span> <span
  m="4067770">minimum</span> <span m="4068060">spanning</span> <span
  m="4068410">tree.</span> <span m="4068610">Suppose</span> <span
  m="4069080">this</span> <span m="4069250">was</span> <span
  m="4069440">the</span> <span m="4069550">minimum</span> <span
  m="4069880">weight</span> <span m="4070160">and this</span> <span
  m="4070320">was</span> <span m="4070420">the</span> <span
  m="4070510">next</span> <span m="4070740">minimum,</span> <span
  m="4071280">next</span> <span m="4071420">minimum,</span> <span
  m="4071630">next</span> <span m="4071860">minimum, next</span> <span
  m="4072270">minimum.</span> <span m="4072810">Suppose</span> <span
  m="4073310">that</span> <span m="4073500">the</span> <span
  m="4073750">next</span> <span m="4074930">lar--</span> <span
  m="4075450">at</span> <span m="4075670">this</span> <span
  m="4075850">point,</span> <span m="4076450">after</span> <span
  m="4076740">contracting</span> <span m="4077220">those</span> <span
  m="4077400">edges,</span> <span m="4078180">the</span> <span
  m="4078310">minimum</span> <span m="4078660">weight</span> <span
  m="4078860">edge</span> <span m="4079710">is</span> <span
  m="4081410">this</span> <span m="4081700">one.</span> <span
  m="4082740">Do</span> <span m="4083120">I</span> <span m="4083210">want</span>
  <span m="4083370">to</span> <span m="4083430">put</span> <span
  m="4083590">this</span> <span m="4083770">edge</span> <span
  m="4083980">in</span> <span m="4084030">my</span> <span
  m="4084130">minimum</span> <span m="4084400">spanning</span> <span
  m="4084740">tree?</span> <span m="4086180">No.</span> <span
  m="4087380">That</span> <span m="4087540">would</span> <span
  m="4087730">add</span> <span m="4087880">a</span> <span
  m="4087930">cycle.</span> <span m="4088340">Cycles</span> <span
  m="4088740">are</span> <span m="4088800">bad.</span> <span
  m="4090710">This</span> <span m="4090900">is</span> <span
  m="4090990">the</span> <span m="4091090">tricky</span> <span
  m="4091380">part</span> <span m="4091620">of</span> <span
  m="4091680">this</span> <span m="4091830">algorithm.</span> <span
  m="4092560">I</span> <span m="4092680">have</span> <span m="4092900">to</span>
  <span m="4093020">keep</span> <span m="4093260">track</span> <span
  m="4093660">of</span> <span m="4095440">whether</span> <span
  m="4095900">I</span> <span m="4095990">should</span> <span
  m="4096180">actually</span> <span m="4096560">add</span> <span
  m="4096890">an</span> <span m="4097010">edge,</span> <span
  m="4098220">in</span> <span m="4098300">other</span> <span
  m="4098420">words,</span> <span m="4098700">whether</span> <span
  m="4098899">this</span> <span m="4099090">vertex</span> <span m="4099590">and
  this</span> <span m="4099770">vertex</span> <span m="4100109">have</span>
  <span m="4100319">already</span> <span m="4100689">been</span> <span
  m="4100910">connected</span> <span m="4101439">to</span> <span
  m="4101590">each</span> <span m="4101800">other.</span> <span
  m="4103840">And</span> <span m="4103930">it</span> <span
  m="4104029">turns</span> <span m="4104330">out</span> <span
  m="4104479">you've</span> <span m="4104710">already</span> <span
  m="4105200">seen</span> <span m="4105510">a</span> <span
  m="4105569">data</span> <span m="4105800">structure</span> <span
  m="4106189">to</span> <span m="4106300">do</span> <span
  m="4106479">that.</span> <span m="4107630">This</span> <span
  m="4107990">is</span> <span m="4108439">what</span> <span m="4108670">I</span>
  <span m="4108770">call</span> <span m="4109010">union-find</span> <span
  m="4109720">and</span> <span m="4109770">the</span> <span
  m="4109859">textbook</span> <span m="4110229">calls</span> <span
  m="4110609">it disjoint-set</span> <span m="4111500">data</span> <span
  m="4111710">structure.</span></p><p><span m="4117609">So</span> <span
  m="4117729">it's</span> <span m="4117819">in</span> <span
  m="4117939">recitation.</span> <span m="4120700">Recitation</span> <span
  m="4121270">3.</span> <span m="4128430">So</span> <span m="4128520">I</span>
  <span m="4128580">want</span> <span m="4128810">to</span> <span
  m="4128859">maintain</span> <span m="4129399">for</span> <span
  m="4129859">my</span> <span m="4130210">MST</span> <span m="4130680">so</span>
  <span m="4130859">far,</span> <span m="4131120">so</span> <span
  m="4131229">I'm</span> <span m="4131340">adding</span> <span
  m="4131640">edges</span> <span m="4131910">one</span> <span
  m="4132080">at</span> <span m="4132170">a</span> <span
  m="4132250">time.</span> <span m="4133090">And</span> <span
  m="4133290">I</span> <span m="4133319">have</span> <span
  m="4133490">some</span> <span m="4133670">tree--</span> <span
  m="4134080">well,</span> <span m="4134370">it's</span> <span
  m="4134490">actually</span> <span m="4134800">a forest,</span> <span
  m="4135600">but</span> <span m="4135760">I'm</span> <span
  m="4135850">still</span> <span m="4136029">going</span> <span
  m="4136140">to</span> <span m="4136200">call</span> <span
  m="4136380">it</span> <span m="4136500">T,</span> <span m="4139550">and
  I'm</span> <span m="4139640">going</span> <span m="4139750">to</span> <span
  m="4139819">maintain</span> <span m="4140319">it</span> <span
  m="4140450">in</span> <span m="4140649">a</span> <span
  m="4140810">union-find</span> <span m="4141819">structure,</span> <span
  m="4145740">disjoint-set</span> <span m="4146290">set</span> <span
  m="4146479">data</span> <span m="4146680">structure.</span> <span
  m="4148770">Remember,</span> <span m="4148979">this</span> <span
  m="4149170">had</span> <span m="4149359">three</span> <span
  m="4149560">operations,</span> <span m="4150109">make</span> <span
  m="4150430">set,</span> <span m="4151279">union,</span> <span
  m="4152770">and</span> <span m="4153120">find</span> <span
  m="4153490">set.</span> <span m="4154100">Tell</span> <span
  m="4154300">me</span> <span m="4154920">given</span> <span
  m="4155350">an</span> <span m="4155529">item</span> <span
  m="4157420">which</span> <span m="4157649">set</span> <span
  m="4157890">does</span> <span m="4158010">it</span> <span
  m="4158090">belong</span> <span m="4158510">to?</span> <span
  m="4159630">We're</span> <span m="4159750">going</span> <span
  m="4159830">to</span> <span m="4159870">use</span> <span
  m="4160109">that,</span> <span m="4160560">the</span> <span
  m="4160720">sets</span> <span m="4161080">are</span> <span
  m="4161149">going</span> <span m="4161330">to</span> <span
  m="4161410">be</span> <span m="4161550">the</span> <span
  m="4161680">connected</span> <span m="4162100">components.</span> <span
  m="4163560">So</span> <span m="4163680">after</span> <span
  m="4164029">I've</span> <span m="4164170">added</span> <span
  m="4164520">these</span> <span m="4165050">edges,</span> <span
  m="4165979">these</span> <span m="4166250">guys,</span> <span
  m="4167090">these</span> <span m="4167300">vertices</span> <span
  m="4167750">here,</span> <span m="4167939">will</span> <span
  m="4168050">form</span> <span m="4168350">one</span> <span
  m="4168540">connected</span> <span m="4168859">component,</span> <span
  m="4169330">and, you know,</span> <span m="4169760">everybody</span> <span
  m="4170160">else</span> <span m="4170950">will</span> <span m="4171250">just
  be</span> <span m="4171380">in</span> <span m="4171450">its</span> <span
  m="4171609">own</span> <span m="4172029">separate</span> <span
  m="4172420">component.</span></p><p><span m="4173740">So</span> <span
  m="4173939">to</span> <span m="4174010">get</span> <span
  m="4174189">started,</span> <span m="4176960">I'm</span> <span
  m="4177109">not</span> <span m="4177270">going</span> <span
  m="4177359">to</span> <span m="4177399">have</span> <span
  m="4177630">any</span> <span m="4177930">edges</span> <span
  m="4178210">in</span> <span m="4178319">my</span> <span
  m="4178470">tree,</span> <span m="4180500">and</span> <span
  m="4180700">so</span> <span m="4180939">every</span> <span
  m="4181260">vertex</span> <span m="4181790">is</span> <span
  m="4181910">in</span> <span m="4182050">its</span> <span
  m="4182270">own</span> <span m="4182520">connected</span> <span
  m="4182930">component.</span> <span m="4183890">So I</span> <span
  m="4184020">represent</span> <span m="4184569">that</span> <span
  m="4184840">by</span> <span m="4185000">calling</span> <span
  m="4185399">make-set</span> <span m="4188620">v</span> <span
  m="4190630">for</span> <span m="4190819">all</span> <span
  m="4190939">vertices.</span> <span m="4191420">So</span> <span
  m="4191569">every</span> <span m="4191779">vertex</span> <span
  m="4192170">lives in its</span> <span m="4192609">own</span> <span
  m="4192890">singleton</span> <span m="4193470">set.</span> <span
  m="4196000">OK,</span> <span m="4197950">now</span> <span
  m="4198320">I'd</span> <span m="4198480">like</span> <span
  m="4198650">to</span> <span m="4198760">do</span> <span m="4199060">the</span>
  <span m="4199210">minimum</span> <span m="4200160">weight</span> <span
  m="4200400">edge,</span> <span m="4200730">and</span> <span
  m="4200820">then</span> <span m="4200940">the</span> <span m="4201020">next
  minimum</span> <span m="4201370">weight edge,</span> <span
  m="4201655">and</span> <span m="4201940">the</span> <span m="4202040">next
  minimum</span> <span m="4202430">weight</span> <span m="4202620">edge.</span>
  <span m="4202830">That's</span> <span m="4203140">also</span> <span
  m="4203430">known</span> <span m="4203710">as</span> <span
  m="4203930">sorting,</span> <span m="4205240">so</span> <span
  m="4205380">I'm</span> <span m="4205450">going</span> <span
  m="4205540">to</span> <span m="4205640">sort</span> <span m="4207610">E</span>
  <span m="4208816">by</span> <span m="4209220">weight,</span> <span
  m="4213800">increasing</span> <span m="4214280">weight,</span> <span
  m="4216210">so</span> <span m="4216330">I</span> <span m="4216450">get</span>
  <span m="4216630">to</span> <span m="4216720">start</span> <span
  m="4217080">with</span> <span m="4217350">the</span> <span
  m="4218835">minimum</span> <span m="4219150">weight</span> <span
  m="4219580">edge.</span></p><p><span m="4230690">So</span> <span
  m="4232580">now</span> <span m="4232750">I'm</span> <span
  m="4232830">going</span> <span m="4232940">to</span> <span
  m="4233010">do</span> <span m="4233170">a</span> <span
  m="4233270">for-loop</span> <span m="4233650">over</span> <span
  m="4233910">the</span> <span m="4234040">edges,</span> <span
  m="4243010">increasing</span> <span m="4243540">order</span> <span
  m="4244010">by</span> <span m="4244140">weight.</span> <span
  m="4249640">Now</span> <span m="4251300">I</span> <span
  m="4251420">want</span> <span m="4251620">to</span> <span
  m="4251680">know--</span> <span m="4252960">I have</span> <span
  m="4253090">an</span> <span m="4253180">edge,</span> <span
  m="4253630">it's</span> <span m="4253810">basically</span> <span
  m="4254160">the</span> <span m="4254270">minimum</span> <span
  m="4254630">weight</span> <span m="4254810">edge</span> <span
  m="4255040">among</span> <span m="4255260">the</span> <span
  m="4255370">edges</span> <span m="4255610">that</span> <span
  m="4255740">remain,</span> <span m="4256910">and</span> <span
  m="4257160">so</span> <span m="4257350">I</span> <span m="4257440">want</span>
  <span m="4257630">to</span> <span m="4257690">know</span> <span
  m="4257820">whether</span> <span m="4258060">I</span> <span
  m="4258100">should</span> <span m="4258300">add</span> <span
  m="4258550">it.</span> <span m="4258740">I'm</span> <span
  m="4258860">going</span> <span m="4258950">to</span> <span
  m="4259020">add</span> <span m="4259330">it</span> <span
  m="4259610">provided</span> <span m="4260890">the</span> <span
  m="4261080">endpoints</span> <span m="4261570">of</span> <span m="4261630">the
  edge are</span> <span m="4262040">not</span> <span m="4262330">in</span> <span
  m="4262450">the</span> <span m="4262530">same</span> <span
  m="4262800">connected</span> <span m="4263180">component.</span> <span
  m="4266890">How</span> <span m="4267060">can</span> <span m="4267190">I</span>
  <span m="4267250">find</span> <span m="4267490">out</span> <span
  m="4267580">whether</span> <span m="4267840">two</span> <span
  m="4268710">vertices</span> <span m="4269160">are</span> <span
  m="4269300">in</span> <span m="4269410">the</span> <span
  m="4269490">same</span> <span m="4269800">connected</span> <span
  m="4270170">component,</span> <span m="4270750">given this</span> <span
  m="4271050">setup?</span> <span m="4276528">Yeah?</span></p><p><span
  m="4277524">AUDIENCE: Call</span> <span m="4278022">find-set</span> <span
  m="4278520">twice and then--</span></p><p><span m="4279030">ERIK DEMAINE:
  Call</span> <span m="4279270">find-set</span> <span m="4279770">twice</span>
  <span m="4280230">and</span> <span m="4280420">see</span> <span
  m="4280570">whether</span> <span m="4280770">they're</span> <span
  m="4280910">equal,</span> <span m="4281370">exactly.</span> <span
  m="4283110">Good</span> <span m="4283430">answer.</span></p><p><span
  m="4286840">So</span> <span m="4289420">if</span> <span m="4290140">you</span>
  <span m="4290720">find-set</span> <span m="4293498">of</span> <span
  m="4293990">u</span> <span m="4295250">is</span> <span m="4296090">from</span>
  <span m="4296330">find-set</span> <span m="4296870">of</span> <span
  m="4296980">v,</span> <span m="4298520">find-set</span> <span
  m="4298990">just</span> <span m="4299110">returns</span> <span
  m="4299470">some</span> <span m="4299880">identifier.</span> <span
  m="4301660">We</span> <span m="4301770">don't</span> <span
  m="4301910">really</span> <span m="4302110">care</span> <span
  m="4302340">what</span> <span m="4302510">it</span> <span
  m="4302590">is,</span> <span m="4302790">as</span> <span
  m="4302890">long</span> <span m="4303060">as</span> <span
  m="4303140">it</span> <span m="4303230">returns</span> <span
  m="4303600">the</span> <span m="4303690">same</span> <span
  m="4304060">thing</span> <span m="4304360">for</span> <span
  m="4304450">the</span> <span m="4304570">same</span> <span
  m="4304870">set.</span> <span m="4305730">So</span> <span m="4305880">if
  u</span> <span m="4306130">and</span> <span m="4306240">v</span> <span
  m="4306410">are</span> <span m="4306480">in</span> <span
  m="4306560">the</span> <span m="4306640">same</span> <span
  m="4306940">set,</span> <span m="4307260">in other</span> <span
  m="4307360">words,</span> <span m="4307630">they're in</span> <span
  m="4307750">the</span> <span m="4307820">same</span> <span
  m="4308080">connected</span> <span m="4308380">component,</span> <span
  m="4308810">then</span> <span m="4308940">find-set</span> <span
  m="4309380">will</span> <span m="4309530">return</span> <span
  m="4309830">the</span> <span m="4309910">same</span> <span
  m="4310210">thing</span> <span m="4310420">for</span> <span
  m="4310520">both.</span> <span m="4311290">But</span> <span
  m="4311500">provided</span> <span m="4311910">they're</span> <span
  m="4312030">not</span> <span m="4312220">equal,</span> <span
  m="4313150">then</span> <span m="4313410">we</span> <span
  m="4313540">can</span> <span m="4313710">add</span> <span
  m="4314490">this</span> <span m="4314730">edge</span> <span
  m="4319973">into</span> <span m="4320470">our</span> <span
  m="4320630">tree.</span> <span m="4321890">So</span> <span
  m="4321960">we</span> <span m="4322150">add</span> <span m="4322510">e</span>
  <span m="4322790">to</span> <span m="4322970">the</span> <span
  m="4323120">set</span> <span m="4323480">T,</span> <span
  m="4325990">and</span> <span m="4326180">then</span> <span
  m="4326330">we</span> <span m="4326420">have</span> <span
  m="4326570">to</span> <span m="4326690">represent</span> <span
  m="4327150">the</span> <span m="4327230">fact</span> <span
  m="4327610">that</span> <span m="4327800">we</span> <span
  m="4327920">just</span> <span m="4328150">merged</span> <span
  m="4328580">the</span> <span m="4328690">connected</span> <span
  m="4329100">components</span> <span m="4329570">of</span> <span
  m="4329670">u</span> <span m="4329860">and</span> <span m="4329970">v,</span>
  <span m="4330590">and</span> <span m="4330710">we</span> <span
  m="4330810">do</span> <span m="4330940">that</span> <span
  m="4331590">with</span> <span m="4331700">a</span> <span
  m="4331800">union</span> <span m="4332100">call.</span></p><p><span
  m="4337450">And</span> <span m="4337570">if</span> <span
  m="4337650">you're</span> <span m="4337800">ever</span> <span
  m="4338000">wondering</span> <span m="4338470">what</span> <span
  m="4338710">the</span> <span m="4338800">heck</span> <span
  m="4339070">do</span> <span m="4339190">we</span> <span m="4339310">use</span>
  <span m="4339500">union-find</span> <span m="4340150">for,</span> <span
  m="4340710">this</span> <span m="4340970">is</span> <span
  m="4341090">the</span> <span m="4341180">answer.</span> <span m="4342270">The
  union-find</span> <span m="4342820">data</span> <span
  m="4342980">structure</span> <span m="4343310">was</span> <span
  m="4343540">invented</span> <span m="4344220">in</span> <span
  m="4344380">order</span> <span m="4344640">to</span> <span
  m="4344810">implement</span> <span m="4345290">Kruskal's</span> <span
  m="4345760">algorithm</span> <span m="4346190">faster,</span> <span
  m="4347250">OK?</span> <span m="4347710">In</span> <span
  m="4347830">fact,</span> <span m="4348080">a</span> <span
  m="4348140">lot</span> <span m="4348440">of</span> <span
  m="4348500">data</span> <span m="4348710">structures</span> <span
  m="4349110">come</span> <span m="4349470">from</span> <span
  m="4349800">graph</span> <span m="4350110">algorithms.</span> <span
  m="4351210">The</span> <span m="4351900">reason</span> <span
  m="4352250">Fibonacci</span> <span m="4352850">heaps</span> <span
  m="4353080">were</span> <span m="4353200">invented</span> <span
  m="4354200">was</span> <span m="4354410">because</span> <span
  m="4354940">there</span> <span m="4355080">was</span> <span
  m="4355180">Dijkstra's</span> <span m="4355630">algorithm</span> <span
  m="4355970">and we</span> <span m="4356050">wanted</span> <span
  m="4356390">it</span> <span m="4356520">to</span> <span m="4356620">run</span>
  <span m="4356800">fast.</span> <span m="4357450">So</span> <span
  m="4358010">same</span> <span m="4358290">deal</span> <span
  m="4358600">here,</span> <span m="4358810">you</span> <span m="4358860">just
  saw it</span> <span m="4359290">in</span> <span m="4359430">the</span> <span
  m="4359550">reverse</span> <span m="4359900">order.</span> <span
  m="4360700">First</span> <span m="4360950">you</span> <span
  m="4361000">saw</span> <span m="4361170">union-find.</span></p><p><span
  m="4361780">Now,</span> <span m="4361940">union-find,</span> <span
  m="4362190">you know</span> <span m="4362430">you</span> <span
  m="4362940">can</span> <span m="4363195">solve</span> <span m="4363580">v
  in</span> <span m="4363840">alpha</span> <span m="4364620">of</span> <span
  m="4364820">n</span> <span m="4365110">time,</span> <span m="4365500">the
  inverse</span> <span m="4365810">Ackermann</span> <span
  m="4366210">function,</span> <span m="4366570">super,</span> <span
  m="4367020">super</span> <span m="4367210">tiny,</span> <span
  m="4368090">slow</span> <span m="4368330">growing</span> <span
  m="4368570">function,</span> <span m="4368960">smaller</span> <span
  m="4369330">than</span> <span m="4369490">log</span> <span
  m="4369770">log</span> <span m="4370000">log</span> <span
  m="4370260">log</span> <span m="4370510">log</span> <span
  m="4370760">log</span> <span m="4371020">log.</span> <span
  m="4373940">Really</span> <span m="4374200">small.</span> <span
  m="4375560">But</span> <span m="4375890">we</span> <span
  m="4376010">have</span> <span m="4376160">this</span> <span
  m="4376340">sorting,</span> <span m="4376760">which</span> <span
  m="4376930">is</span> <span m="4377020">kind</span> <span
  m="4377270">of</span> <span m="4377380">annoying.</span> <span
  m="4378000">So</span> <span m="4378850">the</span> <span
  m="4378980">overall</span> <span m="4379390">running</span> <span
  m="4379730">time--</span> <span m="4380160">we'll worry</span> <span
  m="4380630">about</span> <span m="4380820">correctness</span> <span
  m="4381250">in</span> <span m="4381330">a</span> <span
  m="4381370">moment.</span> <span m="4382740">We</span> <span
  m="4382900">have</span> <span m="4383160">to</span> <span
  m="4383300">sort--</span> <span m="4386530">to</span> <span
  m="4386690">sort</span> <span m="4386970">E</span> <span m="4387230">by</span>
  <span m="4387520">weight.</span> <span m="4389940">So</span> <span
  m="4389990">I'll</span> <span m="4390090">just</span> <span
  m="4390340">call</span> <span m="4390490">that's</span> <span
  m="4390680">sort</span> <span m="4390920">of</span> <span
  m="4391090">E.</span> <span m="4392430">Then</span> <span
  m="4393580">we</span> <span m="4393720">have</span> <span
  m="4393840">to</span> <span m="4393920">do</span> <span
  m="4394050">some</span> <span m="4394260">unions.</span> <span
  m="4395900">I</span> <span m="4395920">guess</span> <span
  m="4396200">for</span> <span m="4396510">every</span> <span
  m="4396910">edge,</span> <span m="4397290">potentially,</span> <span
  m="4397960">we</span> <span m="4398100">do</span> <span m="4398350">a</span>
  <span m="4398420">union.</span> <span m="4400420">I'll</span> <span
  m="4400570">just</span> <span m="4400720">write</span> <span
  m="4401130">E</span> <span m="4402190">times</span> <span
  m="4402720">alpha</span> <span m="4403270">of</span> <span
  m="4403570">v.</span> <span m="4406470">And</span> <span
  m="4406670">then</span> <span m="4407110">we</span> <span
  m="4407240">have</span> <span m="4407530">to</span> <span
  m="4407670">do,</span> <span m="4409280">well,</span> <span
  m="4409480">we</span> <span m="4409580">also</span> <span
  m="4409640">have</span> <span m="4409730">to</span> <span
  m="4409820">find-sets,</span> <span m="4410490">but</span> <span
  m="4410670">same</span> <span m="4411160">deal.</span> <span
  m="4411765">So</span> <span m="4412060">find-set</span> <span
  m="4412550">and</span> <span m="4412780">union</span> <span
  m="4413100">cost</span> <span m="4413460">alpha</span> <span
  m="4413850">amortized,</span> <span m="4414990">so</span> <span
  m="4415160">the</span> <span m="4415270">total</span> <span
  m="4415580">cost</span> <span m="4415950">for</span> <span
  m="4415990">doing</span> <span m="4416180">this</span> <span
  m="4416310">for</span> <span m="4416420">all</span> <span
  m="4416660">edges</span> <span m="4416960">is</span> <span
  m="4417080">going</span> <span m="4417210">to</span> <span
  m="4417270">be</span> <span m="4417380">the</span> <span
  m="4417440">number</span> <span m="4417650">of</span> <span
  m="4417730">edges</span> <span m="4418490">times</span> <span
  m="4418850">alpha,</span> <span m="4420340">and</span> <span
  m="4420570">then</span> <span m="4420730">there's</span> <span
  m="4420900">like</span> <span m="4421090">plus</span> <span
  m="4421550">v,</span> <span m="4421840">I</span> <span
  m="4421890">guess,</span> <span m="4422250">but</span> <span
  m="4424630">that's</span> <span m="4424980">smaller.</span> <span
  m="4425700">That's</span> <span m="4425910">a</span> <span
  m="4425980">connected</span> <span m="4426310">graph.</span></p><p><span
  m="4427230">So</span> <span m="4428130">other</span> <span
  m="4428400">than</span> <span m="4428560">the</span> <span
  m="4428660">sorting</span> <span m="4429130">time,</span> <span
  m="4429720">this</span> <span m="4429930">algorithm</span> <span
  m="4430390">is</span> <span m="4430500">really</span> <span
  m="4430770">good.</span> <span m="4431000">It's</span> <span
  m="4431160">faster.</span> <span m="4433910">But</span> <span
  m="4434730">if</span> <span m="4434960">you're</span> <span
  m="4435160">sorting</span> <span m="4435970">by</span> <span
  m="4436290">an</span> <span m="4436400">n log</span> <span
  m="4436740">n</span> <span m="4436830">algorithm,</span> <span
  m="4437120">this</span> <span m="4437410">is</span> <span
  m="4437530">not</span> <span m="4437730">so</span> <span
  m="4437890">great.</span> <span m="4440070">That's</span> <span
  m="4440570">how</span> <span m="4440750">it goes.</span> <span
  m="4441030">I</span> <span m="4441090">think</span> <span
  m="4441220">you</span> <span m="4441340">can</span> <span
  m="4441490">reduce</span> <span m="4441860">this</span> <span
  m="4442100">to</span> <span m="4442280">sorting</span> <span
  m="4443420">just</span> <span m="4443740">v</span> <span
  m="4444050">things,</span> <span m="4444470">instead</span> <span
  m="4444720">of</span> <span m="4444780">E</span> <span
  m="4444990">things,</span> <span m="4446390">with a</span> <span
  m="4446440">little</span> <span m="4446700">bit</span> <span
  m="4446850">of</span> <span m="4446960">effort,</span> <span
  m="4447490">like</span> <span m="4447620">doing</span> <span
  m="4447810">a</span> <span m="4447880">select</span> <span
  m="4448400">operation.</span> <span m="4449060">But</span> <span
  m="4449980">when</span> <span m="4450180">this</span> <span
  m="4450360">algorithm</span> <span m="4450730">is</span> <span
  m="4450840">really</span> <span m="4451100">good</span> <span
  m="4451690">is</span> <span m="4451910">if</span> <span
  m="4452050">your</span> <span m="4452230">weights</span> <span
  m="4452590">are</span> <span m="4452700">integers.</span> <span
  m="4454240">If</span> <span m="4454460">You</span> <span
  m="4454580">have</span> <span m="4454950">weights,</span> <span
  m="4455900">let's</span> <span m="4456180">say</span> <span
  m="4457980">weight</span> <span m="4459722">of</span> <span
  m="4460080">e</span> <span m="4461350">is</span> <span m="4462300">0</span>
  <span m="4462880">or</span> <span m="4463020">1</span> <span
  m="4463540">or,</span> <span m="4464300">say,</span> <span
  m="4464850">n</span> <span m="4465130">to</span> <span m="4465250">the</span>
  <span m="4465340">c,</span> <span m="4465740">for</span> <span
  m="4465850">some</span> <span m="4466050">constant</span> <span
  m="4466500">c,</span> <span m="4467330">then</span> <span m="4467570">I</span>
  <span m="4467620">can</span> <span m="4467760">use</span> <span
  m="4467910">rate</span> <span m="4468160">x sort,</span> <span
  m="4469220">linear</span> <span m="4469610">time</span> <span
  m="4469900">sorting,</span> <span m="4471340">and</span> <span
  m="4471620">then</span> <span m="4471880">this</span> <span
  m="4472060">will</span> <span m="4472140">be</span> <span
  m="4472290">linear</span> <span m="4472590">time,</span> <span
  m="4472920">and</span> <span m="4473070">I'm</span> <span
  m="4473180">only</span> <span m="4473410">paying</span> <span
  m="4473710">E</span> <span m="4473870">times</span> <span
  m="4474150">alpha.</span> <span m="4474950">So</span> <span
  m="4475020">if</span> <span m="4475190">you</span> <span
  m="4475280">have</span> <span m="4475750">reasonably</span> <span
  m="4476340">small</span> <span m="4476650">weights,</span> <span
  m="4478100">Kruskal's</span> <span m="4478430">algorithm is</span> <span
  m="4478870">better.</span> <span m="4479620">Otherwise,</span> <span
  m="4480840">I</span> <span m="4480910">guess</span> <span
  m="4482990">you</span> <span m="4483140">prefer</span> <span
  m="4483550">Prim's</span> <span m="4483870">algorithm.</span> <span
  m="4484920">But</span> <span m="4485200">either</span> <span
  m="4485480">away.</span></p><p><span m="4488870">I</span> <span
  m="4488990">actually</span> <span m="4489240">used</span> <span
  m="4489980">a</span> <span m="4490310">variation</span> <span m="4490740">of
  this</span> <span m="4490880">algorithm</span> <span
  m="4491200">recently.</span> <span m="4491660">If</span> <span
  m="4491760">you</span> <span m="4491870">want</span> <span
  m="4492010">to</span> <span m="4492070">generate</span> <span
  m="4492400">a</span> <span m="4492540">random</span> <span
  m="4493000">spanning</span> <span m="4493390">tree,</span> <span
  m="4494270">then</span> <span m="4494960">you</span> <span
  m="4495140">can</span> <span m="4495250">use</span> <span
  m="4495420">exactly</span> <span m="4495890">the</span> <span
  m="4495970">same</span> <span m="4496210">algorithm.</span> <span
  m="4496800">You</span> <span m="4497160">pick</span> <span
  m="4497350">a</span> <span m="4497460">random</span> <span
  m="4497800">manage</span> <span m="4498130">that</span> <span
  m="4498250">you</span> <span m="4498340">haven't</span> <span
  m="4498660">picked</span> <span m="4498880">already,</span> <span
  m="4499750">you</span> <span m="4499880">see,</span> <span
  m="4500150">can</span> <span m="4500390">I</span> <span m="4500460">add</span>
  <span m="4500710">this</span> <span m="4500860">edge</span> <span
  m="4501920">with</span> <span m="4502170">this</span> <span
  m="4502350">test?</span> <span m="4503240">If</span> <span
  m="4503370">you</span> <span m="4503470">can,</span> <span
  m="4503760">add</span> <span m="4504010">it</span> <span
  m="4504550">and</span> <span m="4504680">repeat.</span> <span
  m="4505160">That</span> <span m="4505300">will</span> <span
  m="4505410">give</span> <span m="4505550">you</span> <span
  m="4505680">a</span> <span m="4505790">random</span> <span
  m="4506200">spanning</span> <span m="4506540">tree.</span> <span
  m="4506730">It will</span> <span m="4506780">generate</span> <span
  m="4507110">all</span> <span m="4507300">spanning</span> <span
  m="4507620">trees</span> <span m="4507930">uniform</span> <span
  m="4508790">leap</span> <span m="4509890">likely.</span> <span
  m="4510990">So</span> <span m="4511190">that's</span> <span m="4511750">a
  fun</span> <span m="4512000">fact,</span> <span m="4512970">useful</span>
  <span m="4513300">thing</span> <span m="4513590">for</span> <span
  m="4514000">union-find.</span></p><p><span m="4516080">Let</span> <span
  m="4516250">me</span> <span m="4516360">tell</span> <span
  m="4516510">you</span> <span m="4516670">briefly</span> <span
  m="4517100">about</span> <span m="4517380">correctness.</span> <span
  m="4534520">Again,</span> <span m="4534820">we</span> <span
  m="4534950">proved</span> <span m="4535160">correctness</span> <span
  m="4535640">with an</span> <span m="4535890">invariant.</span> <span
  m="4550720">Claim</span> <span m="4550810">that</span> <span
  m="4550930">at</span> <span m="4551020">all</span> <span
  m="4551220">times</span> <span m="4552110">the</span> <span
  m="4552410">tree</span> <span m="4552740">T</span> <span m="4553070">of</span>
  <span m="4553160">edges</span> <span m="4553450">that</span> <span
  m="4553540">we've</span> <span m="4553700">picked</span> <span
  m="4553950">so</span> <span m="4554100">far</span> <span m="4554920">is</span>
  <span m="4555090">contained</span> <span m="4555700">in</span> <span
  m="4556010">some</span> <span m="4556330">minimum</span> <span
  m="4556630">spanning</span> <span m="4557000">tree,</span> <span m="4559050">T
  star.</span> <span m="4560790">T</span> <span m="4560900">start is</span>
  <span m="4561190">going</span> <span m="4561300">to</span> <span
  m="4561370">change,</span> <span m="4561920">but</span> <span
  m="4563010">I</span> <span m="4563220">always</span> <span
  m="4563480">want</span> <span m="4563840">the</span> <span
  m="4563990">edges</span> <span m="4564250">I've</span> <span
  m="4564360">chosen</span> <span m="4564720">to</span> <span
  m="4564830">be</span> <span m="4565030">inside</span> <span
  m="4565380">a</span> <span m="4565420">minimum</span> <span
  m="4565670">spanning</span> <span m="4566060">tree.</span> <span
  m="4566680">Again,</span> <span m="4567150">we</span> <span
  m="4567290">can</span> <span m="4567400">prove</span> <span
  m="4567580">this</span> <span m="4567730">by</span> <span
  m="4567880">induction.</span> <span m="4569000">So</span> <span
  m="4569470">assume</span> <span m="4570980">by</span> <span
  m="4571150">induction</span> <span m="4573955">that</span> <span
  m="4574390">this</span> <span m="4574550">is</span> <span
  m="4574660">true</span> <span m="4575000">so</span> <span
  m="4575150">far,</span> <span m="4577360">and</span> <span
  m="4577420">then</span> <span m="4579080">suppose</span> <span
  m="4579570">that we're</span> <span m="4579780">adding</span> <span
  m="4580120">an</span> <span m="4580200">edge</span> <span
  m="4580510">here.</span> <span m="4581910">So</span> <span
  m="4582130">we're</span> <span m="4582270">converting</span> <span
  m="4583920">T</span> <span m="4584420">into</span> <span m="4585130">T</span>
  <span m="4585300">prime,</span> <span m="4586310">which</span> <span
  m="4586450">is</span> <span m="4586740">T</span> <span
  m="4587010">union</span> <span m="4587330">e.</span></p><p><span
  m="4591650">By</span> <span m="4592900">the</span> <span
  m="4593150">data</span> <span m="4593410">structural</span> <span
  m="4593850">setup,</span> <span m="4594070">I</span> <span
  m="4594380">know</span> <span m="4594690">that</span> <span
  m="4594940">the</span> <span m="4595090">endpoints</span> <span
  m="4595580">of</span> <span m="4595690">e,</span> <span m="4595890">u,</span>
  <span m="4596140">and</span> <span m="4596270">v</span> <span
  m="4596880">are</span> <span m="4597050">in</span> <span
  m="4597160">different</span> <span m="4597590">connected</span> <span
  m="4597980">components.</span> <span m="4600470">In</span> <span
  m="4600600">general,</span> <span m="4601210">what</span> <span
  m="4601410">my</span> <span m="4601520">picture</span> <span
  m="4601780">looks</span> <span m="4602050">like,</span> <span
  m="4602230">is</span> <span m="4602370">I</span> <span m="4602440">have</span>
  <span m="4602680">some</span> <span m="4603540">various</span> <span
  m="4603900">connected</span> <span m="4604240">components,</span> <span
  m="4604610">maybe</span> <span m="4604840">there's</span> <span
  m="4605000">a</span> <span m="4605060">single</span> <span
  m="4605340">vertex,</span> <span m="4607130">whatever.</span> <span
  m="4608320">I've</span> <span m="4608570">built</span> <span
  m="4609180">a</span> <span m="4609340">minimum</span> <span
  m="4609610">spanning</span> <span m="4609970">tree</span> <span
  m="4610150">for</span> <span m="4610310">each</span> <span
  m="4610500">one.</span> <span m="4610780">I</span> <span
  m="4610850">built</span> <span m="4611080">some</span> <span
  m="4611300">tree,</span> <span m="4612920">and I</span> <span
  m="4613100">actually</span> <span m="4613430">know</span> <span
  m="4613670">that</span> <span m="4614100">these</span> <span
  m="4614370">trees</span> <span m="4614740">are</span> <span
  m="4614850">contained</span> <span m="4615400">in</span> <span
  m="4615510">one</span> <span m="4615880">global</span> <span
  m="4616230">minimum</span> <span m="4616520">spanning</span> <span
  m="4616880">tree.</span> <span m="4619445">OK,</span> <span
  m="4619910">and</span> <span m="4620240">now</span> <span
  m="4620500">we're</span> <span m="4620600">looking</span> <span
  m="4620970">at</span> <span m="4621110">an</span> <span
  m="4621210">edge</span> <span m="4621590">that</span> <span
  m="4621750">goes</span> <span m="4622130">from</span> <span
  m="4622310">some</span> <span m="4622530">vertex</span> <span
  m="4622930">u</span> <span m="4623750">in</span> <span m="4623970">one</span>
  <span m="4624240">connected</span> <span m="4624560">component</span> <span
  m="4625330">to</span> <span m="4625490">some</span> <span
  m="4625710">vertex</span> <span m="4626130">v</span> <span
  m="4626780">in</span> <span m="4626930">a</span> <span
  m="4626980">different</span> <span m="4627350">connected</span> <span
  m="4627680">component.</span> <span m="4628450">This</span> <span
  m="4628650">is</span> <span m="4628780">our</span> <span
  m="4628930">edge</span> <span m="4629200">e.</span> <span
  m="4631000">That's</span> <span m="4631220">our</span> <span
  m="4631310">setup.</span></p><p><span m="4633170">Because</span> <span
  m="4634020">the</span> <span m="4634130">union-find</span> <span
  m="4634560">data</span> <span m="4634720">structure</span> <span
  m="4635060">maintains</span> <span m="4635450">connected</span> <span
  m="4635810">components,</span> <span m="4636320">that's</span> <span
  m="4636530">another</span> <span m="4636830">invariant to</span> <span
  m="4637250">prove.</span> <span m="4638570">We're</span> <span
  m="4638770">considering</span> <span m="4639280">adding</span> <span
  m="4639620">this</span> <span m="4639810">edge,</span> <span
  m="4640160">which</span> <span m="4640360">connects</span> <span
  m="4641220">two</span> <span m="4641360">different</span> <span
  m="4641660">connected</span> <span m="4641990">components.</span> <span
  m="4643490">So</span> <span m="4645640">I</span> <span m="4645810">want</span>
  <span m="4646030">to</span> <span m="4646070">use</span> <span
  m="4646420">the</span> <span m="4646510">greedy</span> <span
  m="4646790">choice</span> <span m="4647090">property</span> <span
  m="4649000">with</span> <span m="4649200">some</span> <span
  m="4649560">S.</span> <span m="4649850">What should</span> <span
  m="4650310">S</span> <span m="4650760">be?</span> <span m="4671710">I</span>
  <span m="4671820">want</span> <span m="4672210">e to</span> <span
  m="4672520">cross</span> <span m="4673020">a</span> <span
  m="4673100">cut,</span> <span m="4674990">so</span> <span
  m="4675160">what's</span> <span m="4675370">a good</span> <span
  m="4675430">cut?</span> <span m="4683913">Yeah?</span></p><p><span
  m="4684911">AUDIENCE: The connected</span> <span m="4685410">component
  of</span> <span m="4685909">u and then</span> <span
  m="4686408">everything</span> <span m="4686907">else.</span></p><p><span
  m="4688420">ERIK DEMAINE: Connected</span> <span m="4688790">component</span>
  <span m="4689160">of</span> <span m="4689270">u</span> <span
  m="4689840">and</span> <span m="4690000">everything</span> <span
  m="4690370">else?</span></p><p><span m="4690770">AUDIENCE:
  Yeah.</span></p><p><span m="4691440">ERIK DEMAINE: That</span> <span
  m="4691600">would</span> <span m="4691700">work,</span> <span
  m="4692490">which</span> <span m="4692720">is</span> <span
  m="4692930">also</span> <span m="4693240">the</span> <span
  m="4693440">opposite</span> <span m="4694010">of</span> <span
  m="4694310">the</span> <span m="4694410">connected</span> <span
  m="4694780">component</span> <span m="4695140">containing</span> <span
  m="4695550">v.</span> <span m="4696570">There</span> <span
  m="4696680">are</span> <span m="4696710">many</span> <span
  m="4696890">choices</span> <span m="4697270">that</span> <span
  m="4697350">work.</span> <span m="4698570">I</span> <span
  m="4698710">could</span> <span m="4699020">take</span> <span
  m="4699460">basically</span> <span m="4699770">this</span> <span
  m="4700010">cut,</span> <span m="4700810">which</span> <span
  m="4701020">is</span> <span m="4701360">the</span> <span
  m="4701670">connected</span> <span m="4701920">component</span> <span
  m="4702160">of</span> <span m="4702270">you</span> <span
  m="4702450">with</span> <span m="4702570">everything</span> <span
  m="4702940">else</span> <span m="4703210">versus</span> <span
  m="4703590">the</span> <span m="4703720">connected</span> <span
  m="4704080">component of</span> <span m="4704400">v.</span> <span
  m="4705250">I</span> <span m="4705350">could</span> <span
  m="4705500">take</span> <span m="4705710">this</span> <span
  m="4705930">cut,</span> <span m="4706220">which</span> <span
  m="4706430">is</span> <span m="4706550">the</span> <span
  m="4706600">connected</span> <span m="4707240">component</span> <span
  m="4707590">of u</span> <span m="4708340">only</span> <span
  m="4709330">versus</span> <span m="4709650">everybody</span> <span
  m="4710060">else.</span> <span m="4710690">Either</span> <span
  m="4710810">of</span> <span m="4710890">those</span> <span
  m="4711090">will</span> <span m="4711170">work.</span> <span
  m="4712990">Good.</span> <span m="4716370">Good curve,</span> <span
  m="4717284">all</span> <span m="4717741">right.</span></p><p><span
  m="4720030">So</span> <span m="4720500">let's</span> <span
  m="4720720">say</span> <span m="4720880">S</span> <span
  m="4721250">equals</span> <span m="4722110">the</span> <span
  m="4722290">connected</span> <span m="4722750">component</span> <span
  m="4723300">of</span> <span m="4723620">u,</span> <span m="4724470">or</span>
  <span m="4724670">connected</span> <span m="4724990">component</span> <span
  m="4725280">of</span> <span m="4725340">v.</span> <span m="4727600">e</span>
  <span m="4728050">crosses</span> <span m="4728500">that, all right?</span>
  <span m="4728820">Because</span> <span m="4729640">it</span> <span
  m="4729950">goes</span> <span m="4730140">from</span> <span
  m="4730290">u</span> <span m="4730420">to</span> <span m="4730560">v,</span>
  <span m="4731000">and u is</span> <span m="4731250">on</span> <span
  m="4731360">one</span> <span m="4731580">side,</span> <span m="4731870">v
  is</span> <span m="4732090">on</span> <span m="4732200">the</span> <span
  m="4732330">other</span> <span m="4732490">side.</span> <span
  m="4735110">I</span> <span m="4735220">wanted</span> <span
  m="4735590">to</span> <span m="4735720">include</span> <span
  m="4736040">an</span> <span m="4736140">entire</span> <span
  m="4736610">connected</span> <span m="4736970">component</span> <span
  m="4737500">because</span> <span m="4738400">when</span> <span
  m="4738600">I</span> <span m="4738690">apply</span> <span
  m="4739230">the</span> <span m="4739360">greedy</span> <span
  m="4739610">choice</span> <span m="4739920">property,</span> <span
  m="4740840">I</span> <span m="4740950">modify</span> <span
  m="4741490">T</span> <span m="4741720">star,</span> <span
  m="4742080">and</span> <span m="4742190">I</span> <span
  m="4742400">don't</span> <span m="4742760">want</span> <span
  m="4743140">to</span> <span m="4743270">modify,</span> <span
  m="4744540">I</span> <span m="4744650">don't</span> <span
  m="4744780">want</span> <span m="4744920">to</span> <span
  m="4744980">delete</span> <span m="4745380">any</span> <span
  m="4745560">of</span> <span m="4745610">these</span> <span
  m="4745790">edges</span> <span m="4746280">that</span> <span
  m="4746410">are</span> <span m="4746510">already</span> <span
  m="4746940">in</span> <span m="4747150">my</span> <span
  m="4747310">connected</span> <span m="4747710">components,</span> <span
  m="4748380">that</span> <span m="4748490">I've</span> <span
  m="4748590">already</span> <span m="4748820">put</span> <span
  m="4748990">in</span> <span m="4749130">there.</span> <span
  m="4750330">But</span> <span m="4750360">if</span> <span m="4750480">I</span>
  <span m="4750580">choose</span> <span m="4750880">my</span> <span
  m="4751020">cut</span> <span m="4751330">to</span> <span
  m="4751430">just</span> <span m="4751670">be</span> <span
  m="4751800">this,</span> <span m="4753280">I</span> <span
  m="4753420">know</span> <span m="4753620">that</span> <span
  m="4753760">the</span> <span m="4753890">edge</span> <span
  m="4754090">that</span> <span m="4754250">I</span> <span
  m="4754530">potentially</span> <span m="4755140">remove</span> <span
  m="4755950">will</span> <span m="4756200">cross</span> <span
  m="4756620">this</span> <span m="4756830">cut,</span> <span
  m="4757120">which</span> <span m="4757300">means</span> <span
  m="4757490">it</span> <span m="4757570">goes</span> <span
  m="4757780">between</span> <span m="4758320">connected</span> <span
  m="4758700">components,</span> <span m="4759150">which</span> <span
  m="4759290">means</span> <span m="4759440">I</span> <span
  m="4759480">haven't</span> <span m="4760130">added</span> <span
  m="4760430">that</span> <span m="4760650">yet</span> <span
  m="4760960">to</span> <span m="4761060">T.</span></p><p><span
  m="4762060">So</span> <span m="4762270">when</span> <span m="4762450">I</span>
  <span m="4763270">apply</span> <span m="4763480">this greedy</span> <span
  m="4763890">choice</span> <span m="4764150">property,</span> <span
  m="4765290">I'm</span> <span m="4765460">not</span> <span
  m="4765710">deleting</span> <span m="4766160">anything</span> <span
  m="4766540">from</span> <span m="4766720">T.</span> <span
  m="4769910">Everything</span> <span m="4770370">that</span> <span
  m="4770470">was</span> <span m="4771060">in</span> <span m="4771230">T</span>
  <span m="4771520">is</span> <span m="4771620">still</span> <span
  m="4771960">in</span> <span m="4772060">T</span> <span
  m="4772260">star.</span> <span m="4773680">So</span> <span
  m="4775430">that</span> <span m="4775750">tells</span> <span
  m="4776090">me</span> <span m="4776840">that</span> <span m="4777290">T</span>
  <span m="4777490">prime</span> <span m="4779890">is</span> <span
  m="4780160">contained</span> <span m="4780910">in</span> <span
  m="4781290">T</span> <span m="4781380">star</span> <span
  m="4783110">prime.</span> <span m="4783730">The</span> <span
  m="4784170">new</span> <span m="4784410">T</span> <span
  m="4784620">star</span> <span m="4784970">that</span> <span
  m="4785130">I</span> <span m="4785200">get</span> <span
  m="4785840">when</span> <span m="4786000">I</span> <span
  m="4786050">apply</span> <span m="4786850">the</span> <span
  m="4787600">cut</span> <span m="4787800">and</span> <span
  m="4787880">paste</span> <span m="4788150">argument,</span> <span
  m="4788800">I</span> <span m="4788920">modify</span> <span
  m="4789370">T</span> <span m="4789560">star</span> <span
  m="4789890">potentially</span> <span m="4790350">by</span> <span
  m="4790490">removing</span> <span m="4790870">one</span> <span
  m="4791070">edge</span> <span m="4791600">and</span> <span
  m="4791790">putting</span> <span m="4792030">e</span> <span
  m="4792310">in.</span> <span m="4793120">And</span> <span
  m="4793320">the</span> <span m="4793380">edge that</span> <span
  m="4793650">I</span> <span m="4793760">remove</span> <span
  m="4794140">was</span> <span m="4794300">not</span> <span
  m="4794600">already</span> <span m="4794990">in</span> <span
  m="4795100">T,</span> <span m="4795410">which</span> <span
  m="4795610">means</span> <span m="4795840">I</span> <span
  m="4795920">preserve</span> <span m="4796590">this</span> <span
  m="4796820">part,</span> <span m="4798850">but</span> <span
  m="4799030">I</span> <span m="4799130">also</span> <span
  m="4799530">get</span> <span m="4799870">that</span> <span
  m="4800660">my</span> <span m="4800800">new</span> <span
  m="4801070">edge</span> <span m="4801360">e</span> <span m="4802270">is</span>
  <span m="4802580">in</span> <span m="4802820">the</span> <span
  m="4802900">minimum</span> <span m="4803200">spanning</span> <span
  m="4803570">tree.</span> <span m="4804360">And</span> <span
  m="4804470">so</span> <span m="4804570">that's</span> <span
  m="4804790">how</span> <span m="4804860">you</span> <span
  m="4805010">prove</span> <span m="4805240">by</span> <span
  m="4805400">induction</span> <span m="4806270">that</span> <span
  m="4806420">at</span> <span m="4806510">all</span> <span
  m="4806690">times</span> <span m="4807220">the</span> <span
  m="4807400">edges</span> <span m="4807700">that</span> <span
  m="4807810">you've</span> <span m="4808220">chosen</span> <span
  m="4808580">so</span> <span m="4808630">far</span> <span
  m="4809200">are</span> <span m="4809380">in</span> <span m="4809570">T</span>
  <span m="4809760">star.</span></p><p><span m="4811600">Actually,</span> <span
  m="4812590">to</span> <span m="4812740">apply</span> <span
  m="4813140">the</span> <span m="4813250">greedy</span> <span
  m="4813480">choice</span> <span m="4813750">property,</span> <span
  m="4814270">I</span> <span m="4814400">need</span> <span
  m="4814590">not</span> <span m="4814760">only</span> <span
  m="4814930">that</span> <span m="4815130">e</span> <span m="4815190">is</span>
  <span m="4815370">cut--</span> <span m="4816480">sorry,</span> <span
  m="4816670">that</span> <span m="4816830">e</span> <span
  m="4816960">crosses</span> <span m="4817370">the</span> <span
  m="4817460">cut,</span> <span m="4817710">I</span> <span
  m="4817830">also</span> <span m="4818100">need</span> <span
  m="4818310">that</span> <span m="4818400">e</span> <span m="4818580">is</span>
  <span m="4818730">the</span> <span m="4818830">minimum</span> <span
  m="4819310">weight</span> <span m="4819650">edge</span> <span
  m="4819970">crossing</span> <span m="4820370">the</span> <span
  m="4820460">cut.</span> <span m="4821470">That's</span> <span
  m="4821620">a</span> <span m="4821700">little</span> <span
  m="4822690">more</span> <span m="4823060">argument</span> <span
  m="4823670">to</span> <span m="4823810">prove.</span> <span
  m="4826590">The</span> <span m="4826830">rough</span> <span
  m="4827060">idea</span> <span m="4827410">is</span> <span
  m="4827660">that</span> <span m="4829450">if</span> <span
  m="4829540">you</span> <span m="4829630">forget</span> <span
  m="4829950">about</span> <span m="4830170">the</span> <span
  m="4830290">edges</span> <span m="4830530">we've</span> <span
  m="4830700">already</span> <span m="4830910">dealt</span> <span
  m="4831130">with,</span> <span m="4831350">e</span> <span
  m="4831570">is</span> <span m="4831810">the</span> <span
  m="4831990">globally</span> <span m="4832510">minimum</span> <span
  m="4832870">weight</span> <span m="4833080">edge.</span> <span
  m="4834240">OK,</span> <span m="4834420">but</span> <span
  m="4834560">what</span> <span m="4834700">about</span> <span
  m="4834920">the</span> <span m="4835050">edges</span> <span
  m="4835330">we've</span> <span m="4835550">already</span> <span
  m="4835830">dealt</span> <span m="4836120">with?</span> <span
  m="4836870">Some</span> <span m="4837140">of</span> <span
  m="4837200">them</span> <span m="4837370">are</span> <span
  m="4837480">in</span> <span m="4837660">the</span> <span
  m="4837770">tree.</span> <span m="4840160">The</span> <span
  m="4840540">edges</span> <span m="4840870">that</span> <span
  m="4841000">are</span> <span m="4841120">in</span> <span
  m="4841330">these--</span> <span m="4841860">that are</span> <span
  m="4842140">in</span> <span m="4842360">T,</span> <span
  m="4843310">those</span> <span m="4843590">obviously</span> <span
  m="4843930">don't</span> <span m="4844090">cross</span> <span
  m="4844330">the</span> <span m="4844420">cut.</span> <span
  m="4844660">That's</span> <span m="4844830">how</span> <span
  m="4844950">we</span> <span m="4845050">designed</span> <span
  m="4845420">the</span> <span m="4845520">cut.</span> <span
  m="4846200">The</span> <span m="4846330">cup</span> <span
  m="4846560">was</span> <span m="4846700">designed</span> <span
  m="4847060">not</span> <span m="4847360">to</span> <span
  m="4847450">cross,</span> <span m="4848260">not</span> <span
  m="4848480">two</span> <span m="4848750">separate</span> <span m="4849300">any
  of these</span> <span m="4849620">connected</span> <span
  m="4849940">components.</span> <span m="4850870">So</span> <span
  m="4850900">all</span> <span m="4851050">the</span> <span
  m="4851150">edges</span> <span m="4851360">that</span> <span
  m="4851430">we've</span> <span m="4851560">added</span> <span
  m="4851840">to</span> <span m="4851930">T,</span> <span
  m="4852560">those</span> <span m="4852810">are</span> <span
  m="4852960">OK.</span> <span m="4854730">They're</span> <span
  m="4854880">not</span> <span m="4855210">related</span> <span
  m="4855740">to</span> <span m="4856150">the</span> <span
  m="4856390">edges</span> <span m="4856740">that cross</span> <span
  m="4857650">this</span> <span m="4857850">cut.</span></p><p><span
  m="4859650">But</span> <span m="4859910">we</span> <span
  m="4860090">may</span> <span m="4860420">have</span> <span
  m="4860650">already</span> <span m="4861070">considered</span> <span
  m="4861640">some</span> <span m="4861960">lower</span> <span
  m="4862380">weight</span> <span m="4862590">edges</span> <span
  m="4863670">that</span> <span m="4863800">we</span> <span
  m="4864060">didn't</span> <span m="4864440">add</span> <span
  m="4864740">to</span> <span m="4864870">T.</span> <span m="4866030">If</span>
  <span m="4866150">we</span> <span m="4866260">didn't</span> <span
  m="4866670">add</span> <span m="4867010">an edge</span> <span m="4867100">to
  T,</span> <span m="4868340">that</span> <span m="4868530">means</span> <span
  m="4868720">actually</span> <span m="4869100">they</span> <span
  m="4869230">were</span> <span m="4869350">in</span> <span
  m="4869430">the</span> <span m="4869510">same</span> <span
  m="4869830">set,</span> <span m="4870270">which</span> <span
  m="4870500">means</span> <span m="4870740">also</span> <span
  m="4871640">those</span> <span m="4872090">are--</span> <span m="4873582">I'm
  going</span> <span m="4874070">to use</span> <span m="4874260">my other</span>
  <span m="4874560">color,</span> <span m="4875240">blue.</span> <span
  m="4877000">Those</span> <span m="4877300">are</span> <span
  m="4877390">extra</span> <span m="4877740">edges</span> <span
  m="4878050">in</span> <span m="4878150">here</span> <span
  m="4879420">that</span> <span m="4879540">are</span> <span
  m="4879640">inside</span> <span m="4880430">a</span> <span
  m="4880470">connected</span> <span m="4880870">component,</span> <span
  m="4883290">have</span> <span m="4883560">smaller</span> <span
  m="4884150">weight</span> <span m="4884380">than</span> <span
  m="4884450">e,</span> <span m="4884800">but</span> <span
  m="4884930">they're</span> <span m="4885050">inside</span> <span
  m="4885460">the</span> <span m="4885550">connected</span> <span
  m="4885870">component.</span> <span m="4886400">So</span> <span
  m="4886500">again,</span> <span m="4886780">they're</span> <span
  m="4886920">not</span> <span m="4887180">crossed.</span> <span
  m="4888580">So</span> <span m="4889700">they</span> <span
  m="4889860">don't</span> <span m="4890040">cross</span> <span
  m="4890340">the</span> <span m="4890420">cut,</span> <span
  m="4890710">rather.</span> <span m="4891640">So</span> <span
  m="4891890">e</span> <span m="4892580">is</span> <span
  m="4892760">basically</span> <span m="4893080">the</span> <span
  m="4893170">first</span> <span m="4893700">edge</span> <span
  m="4894000">that</span> <span m="4894110">we're</span> <span
  m="4894240">considering</span> <span m="4894800">that</span> <span
  m="4894900">crosses</span> <span m="4895450">this</span> <span
  m="4895680">cut,</span> <span m="4896050">because</span> <span
  m="4896590">otherwise</span> <span m="4896990">we</span> <span
  m="4897090">would</span> <span m="4897220">have</span> <span
  m="4897320">added</span> <span m="4897580">that</span> <span
  m="4897720">other</span> <span m="4897950">edge</span> <span
  m="4898180">first.</span></p><p><span m="4899240">So</span> <span
  m="4899440">here,</span> <span m="4900070">we</span> <span
  m="4900150">have</span> <span m="4900340">to</span> <span
  m="4900480">do</span> <span m="4900720">sort</span> <span
  m="4900920">of</span> <span m="4901000">the</span> <span
  m="4901160">greedy</span> <span m="4901950">argument</span> <span
  m="4902310">again,</span> <span m="4902910">considering</span> <span
  m="4903370">edges</span> <span m="4903670">by</span> <span
  m="4903850">weight</span> <span m="4904720">and</span> <span
  m="4905330">e</span> <span m="4905520">is</span> <span
  m="4905880">going</span> <span m="4906040">to</span> <span
  m="4906110">be</span> <span m="4906260">the</span> <span
  m="4906360">first</span> <span m="4906910">edge</span> <span
  m="4907230">that</span> <span m="4907370">crosses</span> <span
  m="4907880">this</span> <span m="4908140">particular</span> <span
  m="4908690">cut,</span> <span m="4908980">which</span> <span
  m="4909160">is</span> <span m="4909260">this</span> <span
  m="4909440">connected</span> <span m="4909730">component</span> <span
  m="4910160">versus</span> <span m="4910460">everyone</span> <span
  m="4910780">else.</span> <span m="4912090">So</span> <span
  m="4912310">e</span> <span m="4912780">has</span> <span m="4913020">to</span>
  <span m="4913110">be</span> <span m="4913240">the</span> <span
  m="4913330">minimum</span> <span m="4913640">weight</span> <span
  m="4913800">edge</span> <span m="4914010">crossing the</span> <span
  m="4914450">cut,</span> <span m="4914640">so</span> <span
  m="4914880">the</span> <span m="4914950">greedy</span> <span
  m="4915150">choice</span> <span m="4915450">property</span> <span
  m="4915810">applies.</span> <span m="4916290">So</span> <span
  m="4917290">we</span> <span m="4917520">can</span> <span
  m="4917690">put</span> <span m="4917960">e</span> <span m="4918255">in</span>
  <span m="4918550">the</span> <span m="4918640">minimum</span> <span
  m="4918930">spanning</span> <span m="4919280">tree,</span> <span
  m="4919700">and</span> <span m="4919730">this</span> <span
  m="4919870">algorithm</span> <span m="4920130">is</span> <span
  m="4920390">correct.</span></p><p><span m="4921760">OK?</span> <span
  m="4922060">So</span> <span m="4922600">we've</span> <span
  m="4922800">used</span> <span m="4922940">that</span> <span
  m="4923120">lemma</span> <span m="4923890">a zillion</span> <span
  m="4924210">times</span> <span m="4924470">by</span> <span
  m="4924590">now.</span> <span m="4925730">That's</span> <span
  m="4926040">minimum</span> <span m="4926380">spanning</span> <span
  m="4926710">tree</span> <span m="4927280">and</span> <span
  m="4927580">nearly</span> <span m="4927880">linear time.</span></p>
uid: b09226a5ff9c1d4df19cd0dd1145fda4
type: courses
layout: video
---
